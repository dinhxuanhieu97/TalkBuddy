import type { PresetScene } from "../scene-types";

// ============================================================
// 购物场景扩展 — Shopping Extended Scenes
// 覆盖：超市、药店、书店、珠宝、奥特莱斯、线上取货、市集、奢侈品、
//       鞋店、礼品、家居、宠物、玩具、运动、户外、二手店、商场、比价
// ============================================================

export const SHOPPING_SCENES_EXT: PresetScene[] = [
  // ==================== 超市购物 ====================
  {
    id: "shopping-grocery-produce",
    category: "shopping",
    titleZh: "超市买水果蔬菜",
    titleEn: "Buying Fresh Produce",
    description: "在超市生鲜区挑选水果蔬菜，询问产地、新鲜度和价格",
    otherRole: "超市店员",
    otherRoleIcon: "🥬",
    flows: [
      {
        id: "basic",
        titleZh: "挑选水果蔬菜",
        titleEn: "Selecting Fruits & Vegetables",
        description: "在生鲜区询问和挑选蔬果的基本流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, are these strawberries fresh? They look really good.",
            textZh: "请问，这些草莓新鲜吗？看起来很不错。",
            casualVersion: "Hey, are these strawberries fresh?",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes, they just came in this morning! They're locally grown too.",
            textZh: "是的，今天早上刚到的！而且是本地种的。",
            keyPhrases: [
              { en: "came in", zh: "到货" },
              { en: "locally grown", zh: "本地种植的" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, fresh this morning! They're from a local farm.", textZh: "对，今早刚到的！是本地农场产的。", actionHint: "更口语化确认新鲜度", frequency: "common" },
              { textEn: "Sure are — we got them in today. All locally sourced.", textZh: "当然新鲜——今天刚进的货。全是本地采购的。", actionHint: "自豪地介绍本地来源", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. How much are they per pound?",
            textZh: "太好了。多少钱一磅？",
            culturalNote: "美国用磅（pound）计量，1磅≈0.45公斤。超市蔬果通常按磅标价。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "They're $3.99 per pound. We also have organic ones for $5.99 if you prefer.",
            textZh: "3.99美元一磅。如果您喜欢，我们也有有机的，5.99美元。",
            keyPhrases: [
              { en: "per pound", zh: "每磅" },
              { en: "organic", zh: "有机的" },
            ],
            alternativeExpressions: [
              { textEn: "Those are $3.99 a pound. The organic ones are a bit more — $5.99.", textZh: "这些3.99美元一磅。有机的贵一点——5.99。", actionHint: "报价并推荐有机选项", frequency: "common" },
              { textEn: "$3.99 for the regular. We've also got organic at $5.99 if that's your thing.", textZh: "普通的3.99。如果您喜欢有机的，5.99也有。", actionHint: "随意地报价", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with the regular ones. Do I need to weigh them here or at checkout?",
            textZh: "我就要普通的吧。需要在这里称还是结账时称？",
            casualVersion: "Regular is fine. Where do I weigh these?",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "You can use the scale right there to weigh them, or the cashier will weigh them at checkout.",
            textZh: "您可以用那边的秤称，或者结账时收银员会帮您称。",
            keyPhrases: [
              { en: "scale", zh: "秤" },
              { en: "cashier", zh: "收银员" },
              { en: "checkout", zh: "结账处" },
            ],
            alternativeExpressions: [
              { textEn: "There's a scale right over there, or you can just take them to the register and they'll weigh them for you.", textZh: "那边有秤，或者直接拿到收银台，他们会帮你称。", actionHint: "指引称重位置", frequency: "common" },
              { textEn: "Either weigh them yourself on that scale, or the checkout person will handle it.", textZh: "您自己用那个秤称也行，结账的人也会帮忙的。", actionHint: "给出两种选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks. Also, where can I find fresh herbs like basil and cilantro?",
            textZh: "谢谢。另外，新鲜香草在哪里？比如罗勒和香菜。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Fresh herbs are in the refrigerated section right next to the salad mixes. Aisle two on the left.",
            textZh: "新鲜香草在冷藏区，就在沙拉旁边。第二排左手边。",
            keyPhrases: [
              { en: "refrigerated section", zh: "冷藏区" },
              { en: "aisle", zh: "货架排/过道" },
            ],
            alternativeExpressions: [
              { textEn: "You'll find those in the cooler section, right by the salads. Aisle two, left side.", textZh: "在冷柜那边，沙拉旁边。第二排左边。", actionHint: "指引香草位置", frequency: "common" },
              { textEn: "Head to aisle two — they're in the fridge case next to the bagged salads.", textZh: "去第二排——在袋装沙拉旁边的冰柜里。", actionHint: "简洁指路", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "询问产地和挑选技巧",
        titleEn: "Asking About Origin & Picking Tips",
        description: "更深入地询问水果产地、成熟度和保存方法",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm looking for ripe avocados. How can I tell if they're ready to eat?",
            textZh: "你好，我想买熟的牛油果。怎么判断它们可以吃了？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Give them a gentle squeeze. If they yield slightly, they're ripe. If they're still firm, they'll need a couple of days.",
            textZh: "轻轻捏一下。如果稍微软一点就是熟了。如果还硬，还需要放几天。",
            keyPhrases: [
              { en: "gentle squeeze", zh: "轻轻捏" },
              { en: "yield", zh: "按下去有弹性" },
              { en: "firm", zh: "硬的" },
            ],
            alternativeExpressions: [
              { textEn: "Just press them gently — if they give a little, they're good to go. Hard ones need a few more days.", textZh: "轻轻按一下——有点软就可以吃了。硬的还得再放几天。", actionHint: "教顾客判断成熟度", frequency: "common" },
              { textEn: "Feel the skin — a ripe one will be slightly soft. If it's rock hard, give it two or three days on the counter.", textZh: "摸摸外皮——熟的会稍微软。硬邦邦的话放台面上两三天。", actionHint: "详细说明判断方法", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. Where are these mangoes from? I prefer the ones from Mexico.",
            textZh: "好的，了解了。这些芒果是哪里产的？我比较喜欢墨西哥的。",
            culturalNote: "美国超市的水果通常标注产地（country of origin），消费者可以根据喜好选择。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Let me check the label... These are from Mexico actually. The Ataulfo variety — they're the sweetest.",
            textZh: "我看一下标签……这些确实是墨西哥产的。Ataulfo品种——最甜的那种。",
            keyPhrases: [
              { en: "label", zh: "标签" },
              { en: "variety", zh: "品种" },
            ],
            alternativeExpressions: [
              { textEn: "Let me see... Yep, these are Mexican. They're the Ataulfo kind — super sweet.", textZh: "我看看……对，这些是墨西哥的。Ataulfo品种——特别甜。", actionHint: "查看后确认产地", frequency: "common" },
              { textEn: "Hang on, I'll check... Good news, they're from Mexico! Ataulfo mangoes — the best ones for sweetness.", textZh: "等一下我看看……好消息，是墨西哥的！Ataulfo芒果——甜度最好的。", actionHint: "热心确认产地信息", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect, I'll take four. Are there any deals on seasonal fruits this week?",
            textZh: "太好了，我拿四个。这周应季水果有打折吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes! Peaches are buy one get one free, and watermelons are 30% off. The deals are on the flyer by the entrance.",
            textZh: "有的！桃子买一送一，西瓜打七折。促销信息在入口处的传单上。",
            keyPhrases: [
              { en: "buy one get one free", zh: "买一送一" },
              { en: "30% off", zh: "打七折" },
              { en: "flyer", zh: "促销传单" },
            ],
            alternativeExpressions: [
              { textEn: "Oh yeah! Peaches are BOGO this week, and watermelons are 30 percent off. Check the flyer up front for all the deals.", textZh: "有！桃子这周买一送一，西瓜七折。前面传单上有所有优惠。", actionHint: "热情介绍本周促销", frequency: "common" },
              { textEn: "You bet! We've got peaches buy one get one, and watermelons on sale too. There's a list of all the specials at the door.", textZh: "当然！桃子买一送一，西瓜也在打折。门口有所有特价清单。", actionHint: "积极推荐促销活动", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh nice, I'll grab some peaches too. Can I use my own bags for produce?",
            textZh: "太好了，我也拿一些桃子。我可以用自己的袋子装蔬果吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Absolutely! We encourage reusable bags. Just make sure the cashier can see the PLU sticker on each item for pricing.",
            textZh: "当然可以！我们鼓励用环保袋。只要确保收银员能看到每个水果上的价签贴纸就行。",
            keyPhrases: [
              { en: "reusable bags", zh: "环保袋" },
              { en: "PLU sticker", zh: "价格查询贴纸" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! We love it when customers bring their own bags. Just keep the stickers visible so checkout goes smoothly.", textZh: "当然！我们很欢迎顾客自己带袋子。贴纸露出来就行，结账更方便。", actionHint: "鼓励环保做法", frequency: "common" },
              { textEn: "Sure thing! Just make sure the PLU codes are showing so the register can ring them up.", textZh: "没问题！确保PLU码露出来，方便收银台扫。", actionHint: "提醒注意贴纸", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Thanks for the help!",
            textZh: "明白了。谢谢你的帮助！",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "You're welcome! If you need anything else, I'll be restocking the lettuce over there.",
            textZh: "不客气！如果还需要什么，我在那边补货生菜。",
            keyPhrases: [
              { en: "restocking", zh: "补货" },
            ],
            alternativeExpressions: [
              { textEn: "No problem! I'll be right over there if you need anything. Just holler!", textZh: "没事！我就在那边，需要什么喊我就行！", actionHint: "友好告别", frequency: "common" },
              { textEn: "Happy to help! I'm around if you have more questions — just stocking shelves nearby.", textZh: "很高兴帮到您！有问题随时找我——我就在附近理货。", actionHint: "热情收尾", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "shopping-grocery-meat",
    category: "shopping",
    titleZh: "超市买肉类",
    titleEn: "Buying Meat at the Deli Counter",
    description: "在超市肉类柜台选购牛肉、鸡肉等，询问部位、切法和烹饪建议",
    otherRole: "肉类柜台店员",
    otherRoleIcon: "🥩",
    flows: [
      {
        id: "basic",
        titleZh: "基本买肉",
        titleEn: "Basic Meat Purchase",
        description: "在肉类柜台点选肉类的标准流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "肉类柜台店员",
            textEn: "Hi there, what can I get for you today?",
            textZh: "你好，今天想要点什么？",
            keyPhrases: [
              { en: "what can I get for you", zh: "您想要什么" },
            ],
            alternativeExpressions: [
              { textEn: "Hey! What are you looking for today?", textZh: "嗨！今天想找点什么？", actionHint: "热情打招呼", frequency: "common" },
              { textEn: "Good morning! How can I help you?", textZh: "早上好！有什么可以帮您的？", actionHint: "礼貌问候", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd like some chicken breast, please. About two pounds.",
            textZh: "我想要一些鸡胸肉，大概两磅。",
            casualVersion: "Can I get two pounds of chicken breast?",
          },
          {
            speaker: "them",
            role: "肉类柜台店员",
            textEn: "Sure. Would you like boneless skinless, or bone-in?",
            textZh: "好的。您要去骨去皮的，还是带骨的？",
            keyPhrases: [
              { en: "boneless skinless", zh: "去骨去皮" },
              { en: "bone-in", zh: "带骨的" },
            ],
            alternativeExpressions: [
              { textEn: "No problem. Do you want them with the bone or without?", textZh: "没问题。您要带骨的还是不带骨的？", actionHint: "确认去骨需求", frequency: "common" },
              { textEn: "You got it. Bone-in or boneless? The boneless ones come skinless too.", textZh: "好的。带骨还是去骨？去骨的也是去皮的。", actionHint: "说明选项差异", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Boneless skinless, please. Are these free-range?",
            textZh: "去骨去皮的。请问这些是散养的吗？",
            culturalNote: "美国肉类有free-range（散养）、organic（有机）、grass-fed（草饲）等标签，价格差异明显。",
          },
          {
            speaker: "them",
            role: "肉类柜台店员",
            textEn: "These are conventional. The free-range ones are in the case over there — they're a bit more expensive, about $8.99 a pound.",
            textZh: "这些是普通养殖的。散养的在那边的柜台——稍贵一些，大约8.99美元一磅。",
            keyPhrases: [
              { en: "conventional", zh: "普通养殖的" },
              { en: "free-range", zh: "散养的" },
            ],
            alternativeExpressions: [
              { textEn: "These ones are regular. If you want free-range, they're over in that case — runs about $8.99 a pound though.", textZh: "这些是普通的。如果要散养的，在那个柜台——不过大概8.99一磅。", actionHint: "区分普通和散养鸡肉", frequency: "common" },
              { textEn: "No, these are conventionally raised. The free-range options are in the next case, but they'll cost you a little more.", textZh: "不是，这些是普通养殖的。散养的在隔壁柜台，不过价格会高一些。", actionHint: "如实说明区别", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll stick with these. Can you also slice some turkey breast for sandwiches? About half a pound.",
            textZh: "就要这些吧。能再帮我切一些火鸡胸肉做三明治吗？大概半磅。",
          },
          {
            speaker: "them",
            role: "肉类柜台店员",
            textEn: "Of course. How thin would you like it sliced?",
            textZh: "当然可以。您想切多薄？",
            keyPhrases: [
              { en: "how thin", zh: "多薄" },
              { en: "sliced", zh: "切片" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing. Thin sliced or thick cut?", textZh: "没问题。要薄切还是厚切？", actionHint: "确认切片厚度", frequency: "common" },
              { textEn: "No problem. How would you like it — deli thin or a little thicker?", textZh: "好的。您要熟食店那种薄的还是厚一点？", actionHint: "提供厚度选项", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Medium thickness is fine. Thank you.",
            textZh: "中等厚度就行。谢谢。",
          },
          {
            speaker: "them",
            role: "肉类柜台店员",
            textEn: "Here you go — two pounds of chicken breast and half a pound of sliced turkey. Anything else?",
            textZh: "给您——两磅鸡胸肉和半磅火鸡切片。还需要别的吗？",
            keyPhrases: [
              { en: "here you go", zh: "给您" },
              { en: "anything else", zh: "还需要别的吗" },
            ],
            alternativeExpressions: [
              { textEn: "All set — chicken and turkey are ready. Can I get you anything else?", textZh: "好了——鸡肉和火鸡都准备好了。还要别的吗？", actionHint: "确认并询问其他需求", frequency: "common" },
              { textEn: "There you are! Two pounds of chicken and half a pound of turkey. Need anything else from the counter?", textZh: "给您！两磅鸡肉、半磅火鸡。柜台还需要别的吗？", actionHint: "递交并追问", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's all, thank you!",
            textZh: "就这些，谢谢！",
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "询问部位和烹饪建议",
        titleEn: "Cuts & Cooking Advice",
        description: "询问不同肉类部位和烹饪方法的推荐",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I want to make a steak dinner. What cut would you recommend?",
            textZh: "你好，我想做牛排晚餐。你推荐什么部位？",
          },
          {
            speaker: "them",
            role: "肉类柜台店员",
            textEn: "It depends on your preference. Ribeye is juicy and flavorful, New York strip is leaner but still tender, and filet mignon is the most tender cut.",
            textZh: "这取决于您的喜好。肋眼多汁有味，纽约客瘦一些但也嫩，菲力是最嫩的部位。",
            keyPhrases: [
              { en: "ribeye", zh: "肋眼牛排" },
              { en: "New York strip", zh: "纽约客牛排" },
              { en: "filet mignon", zh: "菲力牛排" },
              { en: "tender", zh: "嫩的" },
            ],
            alternativeExpressions: [
              { textEn: "Well, it really comes down to what you like. Ribeye's got the most flavor, strip steak is a nice balance, and filet is the softest cut.", textZh: "这得看您喜欢什么。肋眼味道最足，纽约客比较均衡，菲力最软嫩。", actionHint: "根据喜好推荐部位", frequency: "common" },
              { textEn: "For grilling? I'd say go with ribeye for flavor or filet if you want something melt-in-your-mouth tender.", textZh: "烤的话？想要味道选肋眼，想要入口即化选菲力。", actionHint: "针对烧烤推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll try the ribeye. How thick should I get it for grilling?",
            textZh: "我试试肋眼吧。烤的话切多厚合适？",
          },
          {
            speaker: "them",
            role: "肉类柜台店员",
            textEn: "For grilling, I'd recommend at least one inch thick. That way you get a nice sear on the outside while keeping it juicy inside.",
            textZh: "烤的话，我建议至少一英寸厚。这样外面能煎出漂亮的焦皮，里面还保持多汁。",
            keyPhrases: [
              { en: "one inch thick", zh: "一英寸厚" },
              { en: "sear", zh: "煎出焦皮" },
            ],
            alternativeExpressions: [
              { textEn: "Go with at least an inch — that's the sweet spot for grilling. Nice crust outside, juicy inside.", textZh: "至少一英寸——这是烤牛排的最佳厚度。外焦里嫩。", actionHint: "推荐最佳厚度", frequency: "common" },
              { textEn: "I'd cut them an inch thick minimum. Any thinner and they'll dry out on the grill.", textZh: "我建议至少切一英寸厚。再薄的话烤起来会变干。", actionHint: "解释厚度的原因", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds good. Two steaks, one inch thick please. Should I marinate them?",
            textZh: "听起来不错。两块牛排，一英寸厚。需要腌制吗？",
          },
          {
            speaker: "them",
            role: "肉类柜台店员",
            textEn: "Ribeye has great marbling, so it's already very flavorful. Just some salt, pepper, and maybe a little garlic butter is all you need.",
            textZh: "肋眼的大理石花纹很好，本身就很有味道。只需要盐、胡椒，也许再加一点蒜香黄油就够了。",
            keyPhrases: [
              { en: "marbling", zh: "大理石花纹/油花" },
              { en: "flavorful", zh: "有味道的" },
            ],
            alternativeExpressions: [
              { textEn: "With a ribeye, less is more. Salt, pepper, done. The fat does all the work.", textZh: "肋眼嘛，越简单越好。盐、胡椒就够了。油花会搞定一切。", actionHint: "简洁推荐调味", frequency: "common" },
              { textEn: "Honestly, ribeye is so well-marbled that you don't need much — just season it simply and let the meat shine.", textZh: "说实话，肋眼油花这么好，不需要太多——简单调味就行，让肉本身发光。", actionHint: "强调肉质本身够好", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great tip. What grade is this beef? Is it USDA Choice or Prime?",
            textZh: "好建议。这牛肉是什么等级的？USDA优选还是特优？",
            culturalNote: "美国牛肉分级：Prime（特优）> Choice（优选）> Select（精选）。Prime最贵，油花最丰富。",
          },
          {
            speaker: "them",
            role: "肉类柜台店员",
            textEn: "This is USDA Choice. We do carry Prime as well, but it's about $10 more per pound. It's in the case to your right.",
            textZh: "这是USDA优选。我们也有特优的，但每磅贵大约10美元。在您右手边的柜台里。",
            keyPhrases: [
              { en: "USDA Choice", zh: "USDA优选级" },
              { en: "Prime", zh: "特优级" },
            ],
            alternativeExpressions: [
              { textEn: "These are Choice grade. We have Prime too, but you're looking at about $10 more a pound for those.", textZh: "这些是优选级。特优级也有，不过每磅贵大概10美元。", actionHint: "说明等级和价差", frequency: "common" },
              { textEn: "That's Choice. If you want Prime, it's right over there — pricier but the marbling is unreal.", textZh: "这是优选级的。如果想要特优级在那边——贵一点但油花无敌。", actionHint: "推荐更高等级", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Choice is fine for me. I'll take these two. Thanks for the advice!",
            textZh: "优选就可以了。我要这两块。谢谢你的建议！",
          },
          {
            speaker: "them",
            role: "肉类柜台店员",
            textEn: "My pleasure! Enjoy your steak dinner. Just let it rest for five minutes after grilling — makes a big difference.",
            textZh: "不客气！享受您的牛排晚餐。烤完后静置五分钟——差别很大的。",
            keyPhrases: [
              { en: "let it rest", zh: "静置" },
            ],
            alternativeExpressions: [
              { textEn: "You're gonna love these! One tip — let the steak sit for a few minutes before cutting. Way juicier that way.", textZh: "您会很喜欢的！一个小窍门——切之前让牛排放几分钟。汁水更多。", actionHint: "分享烹饪小贴士", frequency: "common" },
              { textEn: "Happy to help! Don't forget to rest the meat after cooking — it really locks in the juices.", textZh: "很高兴帮到您！别忘了烤完让肉静置一会——真的能锁住汁水。", actionHint: "友好告别加建议", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "shopping-grocery-dairy",
    category: "shopping",
    titleZh: "超市买乳制品",
    titleEn: "Buying Dairy Products",
    description: "在超市乳制品区选购牛奶、奶酪、酸奶等，了解不同品种和标签",
    otherRole: "超市店员",
    otherRoleIcon: "🧀",
    flows: [
      {
        id: "basic",
        titleZh: "选购牛奶和酸奶",
        titleEn: "Choosing Milk & Yogurt",
        description: "了解不同类型牛奶和酸奶的基本选购",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, there are so many types of milk here. What's the difference between whole, 2%, and skim?",
            textZh: "请问，这里有好多种牛奶。全脂、2%和脱脂有什么区别？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Whole milk has about 3.25% fat — it's the creamiest. 2% is reduced fat, and skim has almost no fat at all.",
            textZh: "全脂奶大约含3.25%的脂肪——最浓郁。2%是低脂的，脱脂奶几乎不含脂肪。",
            keyPhrases: [
              { en: "whole milk", zh: "全脂奶" },
              { en: "reduced fat", zh: "低脂" },
              { en: "skim", zh: "脱脂" },
            ],
            alternativeExpressions: [
              { textEn: "So whole milk is the richest, 2% is in the middle, and skim is basically fat-free.", textZh: "全脂最浓，2%在中间，脱脂基本不含脂肪。", actionHint: "简单对比三种牛奶", frequency: "common" },
              { textEn: "Whole is the full-fat option — really creamy. 2% has less fat, and skim is the lightest.", textZh: "全脂是全脂肪的——很浓郁。2%脂肪少一些，脱脂最清淡。", actionHint: "从浓到淡介绍", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take 2%. Do you also have oat milk?",
            textZh: "我要2%的。你们有燕麦奶吗？",
            culturalNote: "美国超市除传统牛奶外，燕麦奶（oat milk）、杏仁奶（almond milk）等植物奶越来越流行。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes, the plant-based milks are in the next aisle. We have oat, almond, soy, and coconut milk.",
            textZh: "有的，植物奶在下一排。我们有燕麦奶、杏仁奶、豆奶和椰奶。",
            keyPhrases: [
              { en: "plant-based", zh: "植物基的" },
              { en: "next aisle", zh: "下一排" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! The non-dairy options are one aisle over. We carry oat, almond, soy, and coconut.", textZh: "有的！非乳制品选项在隔壁排。燕麦、杏仁、大豆和椰子的都有。", actionHint: "指引植物奶位置", frequency: "common" },
              { textEn: "Oat milk is really popular right now! It's in the next aisle along with almond, soy, and coconut.", textZh: "燕麦奶现在特别火！在下一排，旁边还有杏仁奶、豆奶和椰奶。", actionHint: "推荐热门品种", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks. And what about yogurt? I'm looking for something with no added sugar.",
            textZh: "谢谢。酸奶呢？我想找无添加糖的。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Greek yogurt is your best bet — it's higher in protein and most brands offer a plain, unsweetened version. Check the label for 'no added sugar.'",
            textZh: "希腊酸奶是最好的选择——蛋白质更高，大多数品牌都有原味无糖的。看标签上写'no added sugar'就对了。",
            keyPhrases: [
              { en: "Greek yogurt", zh: "希腊酸奶" },
              { en: "unsweetened", zh: "无糖的" },
              { en: "no added sugar", zh: "无添加糖" },
            ],
            alternativeExpressions: [
              { textEn: "Go with Greek yogurt — lots of protein and you can find plain ones with no sugar added.", textZh: "选希腊酸奶——蛋白质多，有原味无添加糖的。", actionHint: "推荐无糖酸奶", frequency: "common" },
              { textEn: "I'd suggest plain Greek yogurt. Just look for the label that says no added sugar — that's your healthiest option.", textZh: "我建议原味希腊酸奶。找标签写无添加糖的——最健康的选择。", actionHint: "给出健康建议", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What's the expiration date on this one?",
            textZh: "这个保质期到什么时候？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "That one is good through March 25th. The ones in the back usually have a later date if you want it to last longer.",
            textZh: "这个到3月25号。后面的通常保质期更长，如果您想放久一点的话。",
            keyPhrases: [
              { en: "good through", zh: "有效期到" },
              { en: "expiration date", zh: "保质期" },
            ],
            alternativeExpressions: [
              { textEn: "This one expires on the 25th. If you want a later date, reach to the back of the shelf.", textZh: "这个25号过期。想要日期更晚的，拿货架后面的。", actionHint: "建议拿后排的", frequency: "common" },
              { textEn: "March 25th on this one. Pro tip — the freshest ones are always behind the front row.", textZh: "这个到3月25号。小窍门——最新鲜的总是在前排后面。", actionHint: "分享选购技巧", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "选购奶酪",
        titleEn: "Choosing Cheese",
        description: "在奶酪柜台选购不同种类的奶酪",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'd like to buy some cheese for a dinner party. Can you suggest a few different types?",
            textZh: "我想买一些奶酪招待客人。能推荐几种不同的吗？",
          },
          {
            speaker: "them",
            role: "奶酪柜台店员",
            textEn: "Sure! For a cheese board, I'd recommend a soft one like brie, a hard one like aged cheddar, and maybe a blue cheese for variety.",
            textZh: "当然！做奶酪拼盘的话，我推荐一种软的比如布里，一种硬的比如陈年切达，再来一种蓝纹奶酪增加变化。",
            keyPhrases: [
              { en: "cheese board", zh: "奶酪拼盘" },
              { en: "brie", zh: "布里奶酪" },
              { en: "aged cheddar", zh: "陈年切达" },
              { en: "blue cheese", zh: "蓝纹奶酪" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely! A good cheese board needs variety — something soft like brie, something sharp like cheddar, and a bold choice like blue cheese.", textZh: "当然！好的奶酪拼盘讲究搭配——软的比如布里，重口的比如切达，再来个大胆的蓝纹奶酪。", actionHint: "讲解拼盘搭配原则", frequency: "common" },
              { textEn: "I love this question! Go with three different textures — a creamy brie, a firm aged cheddar, and maybe a crumbly blue cheese.", textZh: "我最喜欢这种问题！选三种不同口感的——绵密的布里、硬质陈年切达和松散的蓝纹。", actionHint: "从口感角度推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm not a fan of blue cheese. What could I substitute?",
            textZh: "我不太喜欢蓝纹奶酪。可以换成什么？",
          },
          {
            speaker: "them",
            role: "奶酪柜台店员",
            textEn: "How about gouda? It's creamy and slightly sweet. Smoked gouda is really popular too. Would you like to try a sample?",
            textZh: "高达奶酪怎么样？口感细腻，微甜。烟熏高达也很受欢迎。要不要试一块？",
            keyPhrases: [
              { en: "gouda", zh: "高达奶酪" },
              { en: "smoked", zh: "烟熏的" },
              { en: "sample", zh: "试吃" },
            ],
            alternativeExpressions: [
              { textEn: "Try gouda — it's smooth and a little sweet. The smoked version is amazing. Want a taste?", textZh: "试试高达——口感顺滑带一点甜。烟熏版的特别棒。要尝尝吗？", actionHint: "推荐替代奶酪", frequency: "common" },
              { textEn: "Gouda would be a great swap! It's crowd-pleasing — creamy with a hint of sweetness. I can cut you a sample.", textZh: "高达是很好的替代！大家都喜欢——绵密带一丝甜味。我可以切一片给您尝。", actionHint: "热情推荐并提供试吃", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please! I'd love to try the smoked gouda.",
            textZh: "好的！我想尝尝烟熏高达。",
          },
          {
            speaker: "them",
            role: "奶酪柜台店员",
            textEn: "Here you go. What do you think? It pairs really well with crackers and grapes.",
            textZh: "给您尝尝。觉得怎么样？配饼干和葡萄非常好。",
            keyPhrases: [
              { en: "pairs well with", zh: "搭配……很好" },
              { en: "crackers", zh: "饼干/苏打饼" },
            ],
            alternativeExpressions: [
              { textEn: "Give it a try! It goes great with crackers or some fruit on the side.", textZh: "试试看！配饼干或水果特别好吃。", actionHint: "邀请品尝并建议搭配", frequency: "common" },
              { textEn: "Here, taste this. Amazing with crackers, right? Grapes and honey work too.", textZh: "来尝尝。配饼干很棒吧？配葡萄和蜂蜜也行。", actionHint: "自信推荐搭配方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's delicious! I'll take about 200 grams of each — the brie, cheddar, and smoked gouda.",
            textZh: "太好吃了！每种给我来200克——布里、切达和烟熏高达。",
          },
          {
            speaker: "them",
            role: "奶酪柜台店员",
            textEn: "Perfect. That comes to about $24 total. Should I wrap them separately?",
            textZh: "好的。一共大约24美元。需要分开包吗？",
            keyPhrases: [
              { en: "wrap them separately", zh: "分开包装" },
            ],
            alternativeExpressions: [
              { textEn: "That'll be around $24 for all three. Want me to package them individually?", textZh: "三种一共大概24美元。要我分别打包吗？", actionHint: "报价并确认包装方式", frequency: "common" },
              { textEn: "Comes out to about $24. I can wrap each one in its own paper so the flavors don't mix.", textZh: "总共约24美元。我可以每种单独包，免得串味。", actionHint: "主动建议分开包装", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, separately please. Thanks for the recommendations!",
            textZh: "是的，分开包。谢谢你的推荐！",
          },
          {
            speaker: "them",
            role: "奶酪柜台店员",
            textEn: "Enjoy your party! Pro tip: take the cheese out of the fridge about 30 minutes before serving for the best flavor.",
            textZh: "祝您聚会愉快！小贴士：上桌前30分钟从冰箱取出，味道最好。",
            keyPhrases: [
              { en: "pro tip", zh: "小贴士" },
              { en: "before serving", zh: "上桌前" },
            ],
            alternativeExpressions: [
              { textEn: "Have a great party! Just remember — let the cheese come to room temperature before serving. It tastes way better.", textZh: "祝聚会愉快！记住——吃之前让奶酪回到室温。味道会好很多。", actionHint: "分享食用技巧", frequency: "common" },
              { textEn: "Enjoy! Quick tip — pull the cheese out of the fridge half an hour early. You'll really taste the difference.", textZh: "享受吧！小建议——提前半小时把奶酪从冰箱拿出来。味道差别很大。", actionHint: "友好告别附带建议", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "shopping-grocery-checkout",
    category: "shopping",
    titleZh: "超市结账",
    titleEn: "Grocery Store Checkout",
    description: "在超市结账台付款，使用会员卡、优惠券，选择纸袋或自带袋",
    otherRole: "收银员",
    otherRoleIcon: "🛒",
    flows: [
      {
        id: "basic",
        titleZh: "标准结账",
        titleEn: "Standard Checkout",
        description: "超市结账的基本流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "收银员",
            textEn: "Hi! Did you find everything okay today?",
            textZh: "嗨！今天东西都找到了吗？",
            keyPhrases: [
              { en: "find everything okay", zh: "东西都找到了吗" },
            ],
            alternativeExpressions: [
              { textEn: "Hey there! Did you find what you were looking for?", textZh: "你好！找到您要的东西了吗？", actionHint: "收银台问候", frequency: "common" },
              { textEn: "Hi! Everything go okay in the store today?", textZh: "嗨！今天在店里一切都顺利吗？", actionHint: "友好开场白", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, everything was easy to find, thanks.",
            textZh: "是的，都很容易找到，谢谢。",
            casualVersion: "Yep, all good!",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Do you have a rewards card or a phone number on the account?",
            textZh: "您有会员卡吗？或者账号绑定的手机号？",
            keyPhrases: [
              { en: "rewards card", zh: "会员卡" },
              { en: "phone number on the account", zh: "账号上的手机号" },
            ],
            alternativeExpressions: [
              { textEn: "Got a loyalty card? Or I can look you up by phone number.", textZh: "有会员卡吗？或者我可以用手机号查。", actionHint: "询问会员信息", frequency: "common" },
              { textEn: "Are you a member with us? I can scan your card or pull it up by number.", textZh: "您是我们的会员吗？可以扫卡或用号码查。", actionHint: "确认会员身份", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "No, I don't have one. Can I sign up?",
            textZh: "没有。我可以办一张吗？",
            culturalNote: "美国超市的会员卡（rewards card）通常免费，可以享受会员价和积分。",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Sure, just enter your phone number on the keypad and you're all set. Your total today is $47.83. Paper or plastic?",
            textZh: "可以，在小键盘上输入手机号就行了。今天一共47.83美元。纸袋还是塑料袋？",
            keyPhrases: [
              { en: "keypad", zh: "小键盘" },
              { en: "total", zh: "总计" },
              { en: "paper or plastic", zh: "纸袋还是塑料袋" },
            ],
            alternativeExpressions: [
              { textEn: "Just punch in your number right here. That brings you to $47.83. Would you like bags?", textZh: "在这里输入您的号码就行。一共47.83美元。需要袋子吗？", actionHint: "指引操作并报价", frequency: "common" },
              { textEn: "Type in your phone number on the pad. Your total is $47.83 — do you need bags today?", textZh: "在小键盘上输入手机号。总共47.83美元——今天需要袋子吗？", actionHint: "引导注册并结账", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I brought my own bags, actually.",
            textZh: "其实我自己带了袋子。",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Great! You save five cents per bag. Go ahead and swipe or tap your card whenever you're ready.",
            textZh: "太好了！每个袋子省五分钱。准备好了就刷卡或感应支付。",
            keyPhrases: [
              { en: "swipe", zh: "刷卡" },
              { en: "tap", zh: "感应支付" },
              { en: "whenever you're ready", zh: "准备好了就可以" },
            ],
            alternativeExpressions: [
              { textEn: "Awesome, that saves you a few cents! You can tap or swipe your card right there.", textZh: "太好了，能省几毛钱！在那里刷卡或感应就行。", actionHint: "引导付款", frequency: "common" },
              { textEn: "Nice! You get a bag credit for that. Go ahead and pay whenever you're ready — tap or insert.", textZh: "不错！带袋子有优惠。准备好就付款——感应或插卡都行。", actionHint: "说明优惠并引导付款", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I use Apple Pay?",
            textZh: "可以用Apple Pay吗？",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Yes, just tap your phone on the reader. Perfect — payment accepted. Here's your receipt. Have a good day!",
            textZh: "可以，把手机靠近读卡器就行。好的——支付成功。这是您的收据。祝您愉快！",
            keyPhrases: [
              { en: "reader", zh: "读卡器" },
              { en: "payment accepted", zh: "支付成功" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! Just hold your phone up to the terminal. All done — here's your receipt. Have a great one!", textZh: "好！把手机靠近终端就行。搞定了——给您收据。祝您愉快！", actionHint: "完成支付并告别", frequency: "common" },
              { textEn: "Yep, just hover your phone right there. Got it — payment went through. Receipt's in the bag. See you next time!", textZh: "对，手机放在那里就行。好了——付款成功。收据放袋子里了。下次见！", actionHint: "轻松完成交易", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "使用优惠券和自助结账",
        titleEn: "Coupons & Self-Checkout",
        description: "使用优惠券和自助结账机",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have a couple of coupons. Can I use them together?",
            textZh: "你好，我有几张优惠券。可以一起用吗？",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Let me see... You can use one manufacturer coupon and one store coupon per item, but not two of the same type.",
            textZh: "我看看……每件商品可以用一张厂家优惠券和一张店铺优惠券，但不能用两张同类型的。",
            keyPhrases: [
              { en: "manufacturer coupon", zh: "厂家优惠券" },
              { en: "store coupon", zh: "店铺优惠券" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, you can stack one from the brand and one from our store per item. Just can't double up on the same kind.", textZh: "可以，每件商品可以叠加一张品牌券和一张店铺券。就是不能用两张一样的。", actionHint: "解释优惠券使用规则", frequency: "common" },
              { textEn: "Let me check... Yeah, one manufacturer and one store coupon is fine. You just can't use two manufacturer ones together.", textZh: "我看看……可以的，一张厂家券加一张店铺券没问题。只是不能两张厂家券一起用。", actionHint: "确认优惠券政策", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Also, this item was marked at $2.99 on the shelf but it's scanning at $3.49. Can you check?",
            textZh: "明白。另外，这个商品货架上标价2.99美元，但扫出来是3.49。能核实一下吗？",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Let me do a price check... You're right, the shelf price says $2.99. I'll adjust it for you.",
            textZh: "我核实一下……您说得对，货架价是2.99。我帮您改过来。",
            keyPhrases: [
              { en: "price check", zh: "价格核实" },
              { en: "shelf price", zh: "货架标价" },
              { en: "adjust", zh: "调整" },
            ],
            alternativeExpressions: [
              { textEn: "Let me look that up... Yep, you're correct — it should be $2.99. I'll fix that for you right now.", textZh: "我查一下……对，您说得没错——应该是2.99。我现在帮您改。", actionHint: "核实并修正价格", frequency: "common" },
              { textEn: "Good catch! The shelf tag does say $2.99. I'll override the price in the system.", textZh: "发现得好！货架标签确实写的2.99。我在系统里改一下价格。", actionHint: "承认错误并修正", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks. Is there a self-checkout option? I might use that next time.",
            textZh: "谢谢。有自助结账吗？下次我可能会用那个。",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Yes, there are six self-checkout stations near the front entrance. They accept cards only, no cash.",
            textZh: "有的，前门附近有六台自助结账机。只能刷卡，不收现金。",
            keyPhrases: [
              { en: "self-checkout stations", zh: "自助结账台" },
              { en: "cards only", zh: "只能刷卡" },
            ],
            alternativeExpressions: [
              { textEn: "We do! There are several self-checkout machines by the entrance. Just heads up — they're card only.", textZh: "有的！入口那边有好几台自助结账机。提醒一下——只收卡。", actionHint: "介绍自助结账区", frequency: "common" },
              { textEn: "Yep, right up front. Six stations, but they don't take cash — just cards or mobile pay.", textZh: "有，就在前面。六台机器，但不收现金——只能刷卡或手机支付。", actionHint: "简洁说明位置和付款方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I still use coupons at self-checkout?",
            textZh: "自助结账能用优惠券吗？",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Yes, there's a scanner for paper coupons, and digital coupons from the app load automatically when you enter your phone number.",
            textZh: "可以，有纸质优惠券的扫描口，App里的电子优惠券输入手机号后会自动加载。",
            keyPhrases: [
              { en: "digital coupons", zh: "电子优惠券" },
              { en: "load automatically", zh: "自动加载" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! Scan paper ones at the machine, and digital coupons from the app pop up when you type in your number.", textZh: "可以！纸质的在机器上扫，App里的电子券输入号码就自动出来。", actionHint: "解释自助使用优惠券", frequency: "common" },
              { textEn: "Absolutely. Paper coupons go in the slot, and any app coupons will apply once you enter your phone number.", textZh: "当然可以。纸质券插进去就行，App券输入手机号后自动生效。", actionHint: "详细说明操作步骤", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's convenient. I'll download the app. Thanks!",
            textZh: "很方便。我去下载那个App。谢谢！",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "You're welcome! The app also has weekly specials and digital-only deals. Your total is $42.15. Have a great day!",
            textZh: "不客气！那个App上还有每周特惠和线上独享折扣。您今天一共42.15美元。祝您愉快！",
            keyPhrases: [
              { en: "weekly specials", zh: "每周特惠" },
              { en: "digital-only deals", zh: "线上独享折扣" },
            ],
            alternativeExpressions: [
              { textEn: "No problem! The app has some great deals you won't find in store. You're all set at $42.15 — have a good one!", textZh: "没问题！App上有些店里找不到的优惠。一共42.15美元——祝您愉快！", actionHint: "推荐App并完成结账", frequency: "common" },
              { textEn: "Glad to help! Check the app for exclusive discounts too. That's $42.15 today. See you next time!", textZh: "乐意帮忙！也看看App上的独享优惠。今天一共42.15美元。下次见！", actionHint: "告别并推荐App", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "shopping-grocery-organic",
    category: "shopping",
    titleZh: "超市有机食品选购",
    titleEn: "Shopping for Organic Food",
    description: "了解有机食品标签、认证和价格差异",
    otherRole: "超市店员",
    otherRoleIcon: "🌿",
    flows: [
      {
        id: "basic",
        titleZh: "了解有机标签",
        titleEn: "Understanding Organic Labels",
        description: "询问有机食品和常规食品的区别",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, can you explain the difference between organic and conventional produce?",
            textZh: "你好，能解释一下有机农产品和普通农产品的区别吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Sure! Organic produce is grown without synthetic pesticides or fertilizers. It has the USDA Organic seal on the label.",
            textZh: "当然！有机农产品不使用化学农药或化肥种植。标签上会有USDA有机认证标志。",
            keyPhrases: [
              { en: "synthetic pesticides", zh: "化学农药" },
              { en: "fertilizers", zh: "化肥" },
              { en: "USDA Organic seal", zh: "USDA有机认证标志" },
            ],
            alternativeExpressions: [
              { textEn: "Basically, organic means no chemical pesticides or fertilizers. Look for the green USDA Organic label.", textZh: "简单说，有机就是不用化学农药和化肥。认准绿色的USDA有机标签。", actionHint: "简明解释有机含义", frequency: "common" },
              { textEn: "Organic produce is chemical-free — no synthetic sprays or fertilizers. You can spot it by the USDA seal on the sticker.", textZh: "有机产品是不含化学物质的——没有合成喷雾或化肥。看贴纸上的USDA标志就知道了。", actionHint: "详细解释辨识方法", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is everything in this section organic?",
            textZh: "这个区域的东西都是有机的吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes, this whole section is organic. You can also tell by the PLU code — organic items start with the number 9.",
            textZh: "是的，这整个区域都是有机的。您也可以看PLU编码——有机商品的编码以9开头。",
            keyPhrases: [
              { en: "PLU code", zh: "价格查询编码" },
              { en: "start with 9", zh: "以9开头" },
            ],
            alternativeExpressions: [
              { textEn: "Everything here is organic. Quick tip — if the code on the sticker starts with 9, it's organic.", textZh: "这里全是有机的。小技巧——贴纸上的编码如果以9开头就是有机的。", actionHint: "教顾客辨别有机产品", frequency: "common" },
              { textEn: "Yep, this entire area is organic. An easy way to check is the PLU number — organic ones always begin with a 9.", textZh: "对，这整个区都是有机的。简单的辨别方法就是看PLU编号——有机的总是9开头。", actionHint: "分享辨识技巧", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I notice organic is more expensive. Is it worth it for all items?",
            textZh: "我注意到有机的更贵。所有东西都值得买有机的吗？",
            culturalNote: "美国有'Dirty Dozen'清单，列出农药残留最多的12种蔬果，建议这些买有机的。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Not necessarily. For items like bananas and avocados with thick peels, conventional is usually fine. But for berries and leafy greens, organic might be a better choice.",
            textZh: "不一定。像香蕉和牛油果这种厚皮的，买普通的就行。但是浆果和叶菜类，有机的可能是更好的选择。",
            keyPhrases: [
              { en: "thick peels", zh: "厚皮" },
              { en: "leafy greens", zh: "叶菜类" },
            ],
            alternativeExpressions: [
              { textEn: "It depends. Thick-skinned stuff like bananas — regular is fine. But strawberries and spinach? Organic is worth it.", textZh: "得看情况。香蕉这种厚皮的——普通的就行。但草莓和菠菜？有机的值得。", actionHint: "区分哪些值得买有机", frequency: "common" },
              { textEn: "Not everything. Save your money on thick-peel produce and spend on organic berries and greens instead.", textZh: "不用全买有机。厚皮水果省点钱，浆果和蔬菜值得买有机的。", actionHint: "给出实用购买建议", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's really helpful. I'll get organic berries and regular bananas then.",
            textZh: "真有用。那我买有机浆果和普通香蕉好了。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Smart choice! Also, check out our store brand organic products — they're usually 20 to 30 percent cheaper than name brands.",
            textZh: "聪明的选择！另外看看我们自有品牌的有机产品——通常比名牌便宜20%到30%。",
            keyPhrases: [
              { en: "store brand", zh: "自有品牌" },
              { en: "name brands", zh: "名牌" },
            ],
            alternativeExpressions: [
              { textEn: "Good thinking! And our house-brand organics are a lot cheaper — same quality, lower price.", textZh: "想得好！我们自有品牌的有机产品便宜很多——质量一样，价格更低。", actionHint: "推荐自有品牌省钱", frequency: "common" },
              { textEn: "That's the way to do it! By the way, our store-brand organic line is 20 to 30 percent less than the big names.", textZh: "就该这么买！顺便说一下，我们自有品牌有机系列比大牌便宜20%到30%。", actionHint: "补充省钱建议", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "特殊饮食需求",
        titleEn: "Special Dietary Needs",
        description: "寻找无麸质、无乳糖、素食等特殊饮食食品",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I have a gluten intolerance. Where can I find gluten-free products?",
            textZh: "请问，我有麸质不耐受。哪里能找到无麸质产品？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "We have a dedicated gluten-free section in aisle seven. You'll also find gluten-free labels throughout the store.",
            textZh: "第七排有专门的无麸质区域。整个店里各个商品上也都会标注无麸质标签。",
            keyPhrases: [
              { en: "dedicated", zh: "专门的" },
              { en: "gluten-free", zh: "无麸质" },
            ],
            alternativeExpressions: [
              { textEn: "Aisle seven has a whole gluten-free section. Plus, many items around the store are labeled GF too.", textZh: "第七排有一整个无麸质区。而且店里很多商品也标了无麸质。", actionHint: "指引无麸质区域", frequency: "common" },
              { textEn: "Head to aisle seven — that's where all our gluten-free products are grouped together. You'll see the labels on other shelves too.", textZh: "去第七排——我们的无麸质产品都集中在那。其他货架上也能看到标签。", actionHint: "详细指引位置", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. Do you also carry dairy-free alternatives? My friend is lactose intolerant.",
            textZh: "好的。你们也有无乳制品替代品吗？我朋友乳糖不耐受。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Absolutely. We have dairy-free cheese, yogurt, and ice cream. Look for the 'dairy-free' tag on the shelf.",
            textZh: "当然有。我们有无乳奶酪、酸奶和冰淇淋。货架上找'dairy-free'标签。",
            keyPhrases: [
              { en: "dairy-free", zh: "无乳制品的" },
              { en: "lactose intolerant", zh: "乳糖不耐受" },
            ],
            alternativeExpressions: [
              { textEn: "Oh yes, we have tons of dairy-free options — cheese, yogurt, ice cream, you name it. They're marked on the shelf.", textZh: "有很多无乳选择——奶酪、酸奶、冰淇淋都有。货架上有标记。", actionHint: "介绍无乳制品种类", frequency: "common" },
              { textEn: "For sure! There's a whole dairy-free lineup now. Just look for the tags that say dairy-free on the shelves.", textZh: "当然！现在有一整套无乳产品线。找货架上写dairy-free的标签就行。", actionHint: "指引查找方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What about vegan options? Is there a way to quickly identify them?",
            textZh: "纯素的选择呢？有什么方法能快速识别？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Look for the 'Certified Vegan' logo — it's a green V inside a heart. Our app also lets you filter by dietary preference.",
            textZh: "找'Certified Vegan'标志——一个心形里面有绿色的V。我们的App也可以按饮食偏好筛选。",
            keyPhrases: [
              { en: "Certified Vegan", zh: "认证纯素" },
              { en: "filter by", zh: "按……筛选" },
              { en: "dietary preference", zh: "饮食偏好" },
            ],
            alternativeExpressions: [
              { textEn: "The easiest way is to look for the green V logo — that means it's certified vegan. You can also search by diet type in our app.", textZh: "最简单的方法是找绿色V标志——代表认证纯素。也可以在我们App里按饮食类型搜索。", actionHint: "教辨识纯素标志", frequency: "common" },
              { textEn: "Check for the vegan certification mark — a green heart with a V. Our store app is super handy for filtering by diet too.", textZh: "看有没有纯素认证标记——绿色心形里有个V。我们的App也可以按饮食筛选，很方便。", actionHint: "推荐多种辨别方法", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Very helpful. One more thing — do you have any sugar-free snacks?",
            textZh: "非常有用。还有一个问题——有无糖零食吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes, aisle four has a whole section. Just be aware that some use sugar alcohols, which can cause digestive issues for some people.",
            textZh: "有的，第四排有一整个区域。注意有些用了糖醇，可能会导致一些人消化不适。",
            keyPhrases: [
              { en: "sugar-free", zh: "无糖" },
              { en: "sugar alcohols", zh: "糖醇" },
              { en: "digestive issues", zh: "消化问题" },
            ],
            alternativeExpressions: [
              { textEn: "Aisle four — tons of sugar-free snacks there. Just a heads-up though, some contain sugar alcohols that may upset your stomach.", textZh: "第四排——那里有很多无糖零食。不过提醒一下，有些含糖醇可能会刺激肠胃。", actionHint: "指引位置并提醒注意事项", frequency: "common" },
              { textEn: "We've got a whole sugar-free section in aisle four. Fair warning — check the ingredients for sugar alcohols if you have a sensitive stomach.", textZh: "第四排有一整区无糖的。提醒一下——肠胃敏感的话注意看成分表里的糖醇。", actionHint: "善意提醒副作用", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. Thank you so much for all the information.",
            textZh: "了解了。非常感谢你提供这么多信息。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Happy to help! If you ever have questions about ingredients, our customer service desk can look up detailed product info.",
            textZh: "乐意帮忙！如果对成分有疑问，我们的客服台可以帮您查询详细的产品信息。",
            keyPhrases: [
              { en: "ingredients", zh: "成分" },
              { en: "customer service desk", zh: "客服台" },
            ],
            alternativeExpressions: [
              { textEn: "Glad I could help! Any time you need ingredient info, just ask at the service desk — they can look it all up.", textZh: "很高兴能帮到您！任何时候需要成分信息，去服务台问就行——他们都能查到。", actionHint: "友好告别并提供后续帮助", frequency: "common" },
              { textEn: "My pleasure! And if you ever want to double-check something on a label, the customer service team can pull up all the details.", textZh: "不客气！如果想核实标签上的信息，客服团队可以帮您查全部细节。", actionHint: "提供额外资源", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 药店 ====================
  {
    id: "shopping-pharmacy-otc",
    category: "shopping",
    titleZh: "药店买非处方药",
    titleEn: "Buying Over-the-Counter Medicine",
    description: "在药店购买感冒药、止痛药等非处方药，描述症状并获取建议",
    otherRole: "药剂师",
    otherRoleIcon: "💊",
    flows: [
      {
        id: "basic",
        titleZh: "买感冒药",
        titleEn: "Buying Cold Medicine",
        description: "描述感冒症状，购买合适的非处方药",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm feeling under the weather. I have a sore throat and a runny nose. What do you recommend?",
            textZh: "你好，我有点不舒服。嗓子疼，还流鼻涕。你推荐什么药？",
            casualVersion: "Hey, I've got a cold. Sore throat and runny nose. What should I take?",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "I'm sorry to hear that. Do you also have a fever or body aches?",
            textZh: "很遗憾听到这个。您还有发烧或身体酸痛吗？",
            keyPhrases: [
              { en: "fever", zh: "发烧" },
              { en: "body aches", zh: "身体酸痛" },
            ],
            alternativeExpressions: [
              { textEn: "Oh no, that's no fun. Any fever or muscle aches going on too?", textZh: "那可不好受。有发烧或肌肉酸痛吗？", actionHint: "关心地询问症状", frequency: "common" },
              { textEn: "Sorry you're feeling rough. Are you running a temperature? Any aches and pains?", textZh: "不舒服真难受。有没有发烧？身上疼不疼？", actionHint: "口语化询问其他症状", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "A slight headache, but no fever.",
            textZh: "有点轻微头痛，但没有发烧。",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "I'd suggest a multi-symptom cold medicine like DayQuil for daytime and NyQuil for nighttime. Are you allergic to any medications?",
            textZh: "我建议用多症状感冒药，白天用DayQuil，晚上用NyQuil。您对什么药物过敏吗？",
            keyPhrases: [
              { en: "multi-symptom", zh: "多症状的" },
              { en: "daytime/nighttime", zh: "白天/夜间" },
              { en: "allergic to", zh: "对……过敏" },
            ],
            alternativeExpressions: [
              { textEn: "Try a combo cold medicine — DayQuil during the day and NyQuil at night should cover all your symptoms. Any drug allergies?", textZh: "试试综合感冒药——白天DayQuil晚上NyQuil应该能缓解所有症状。有药物过敏吗？", actionHint: "推荐日夜用药方案", frequency: "common" },
              { textEn: "For those symptoms, I'd go with something that covers everything. DayQuil and NyQuil are a good pair. Before I ring those up — any allergies?", textZh: "对这些症状，我建议用综合型的。DayQuil和NyQuil是好搭档。结账之前先问——有过敏吗？", actionHint: "专业推荐并确认安全", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "No allergies. Should I take the liquid or the capsules?",
            textZh: "没有过敏。我应该吃液体的还是胶囊？",
            culturalNote: "美国非处方感冒药形式多样：液体（liquid）、胶囊（capsules）、药片（tablets）、粉剂（powder packets）。",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "It's really personal preference. The liquid tends to work a bit faster. The capsules are more convenient for travel.",
            textZh: "这主要看个人喜好。液体的见效稍微快一些。胶囊出门带着更方便。",
            keyPhrases: [
              { en: "personal preference", zh: "个人喜好" },
              { en: "work faster", zh: "见效更快" },
            ],
            alternativeExpressions: [
              { textEn: "Either works fine. Liquid kicks in quicker, but capsules are easier to carry around.", textZh: "两种都行。液体起效快一些，但胶囊更方便随身带。", actionHint: "对比两种剂型", frequency: "common" },
              { textEn: "Totally up to you. If you want fast relief, go liquid. For convenience, capsules are the way to go.", textZh: "完全看您。想快速见效就选液体。图方便就选胶囊。", actionHint: "按需推荐剂型", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the capsules. How often should I take them?",
            textZh: "我要胶囊的。多久吃一次？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Take two capsules every four hours. Don't exceed six capsules in 24 hours. And be sure to drink plenty of fluids.",
            textZh: "每四小时吃两粒。24小时内不要超过六粒。而且一定要多喝水。",
            keyPhrases: [
              { en: "every four hours", zh: "每四小时" },
              { en: "don't exceed", zh: "不要超过" },
              { en: "plenty of fluids", zh: "大量液体/多喝水" },
            ],
            alternativeExpressions: [
              { textEn: "Two capsules every four hours, max six a day. And make sure you're drinking lots of water.", textZh: "每四小时两粒，一天最多六粒。还有记得多喝水。", actionHint: "说明用法用量", frequency: "common" },
              { textEn: "The dosage is two every four hours — no more than six in a day. Stay hydrated too, that really helps.", textZh: "用量是每四小时两粒——一天别超过六粒。多补水，这个真的有帮助。", actionHint: "详细说明剂量和护理", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. I'll also grab some throat lozenges. Where are those?",
            textZh: "明白了。我再拿一些润喉糖。在哪里？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "They're right behind you on aisle three. The ones with menthol work best for sore throats. Feel better soon!",
            textZh: "就在您身后第三排。含薄荷的对嗓子疼最有效。祝您早日康复！",
            keyPhrases: [
              { en: "throat lozenges", zh: "润喉糖" },
              { en: "menthol", zh: "薄荷" },
              { en: "feel better", zh: "快点好起来" },
            ],
            alternativeExpressions: [
              { textEn: "Aisle three, right behind you. Grab the menthol ones — they're the best for sore throats. Hope you feel better!", textZh: "第三排，就在您后面。拿含薄荷的——对嗓子疼效果最好。祝您早日康复！", actionHint: "指引位置并祝福", frequency: "common" },
              { textEn: "Turn around — aisle three has all the lozenges. I'd go with menthol for throat pain. Take care of yourself!", textZh: "回头看——第三排都是润喉糖。嗓子疼选薄荷的。好好照顾自己！", actionHint: "热心指路并关心", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "买止痛药和问禁忌",
        titleEn: "Pain Relief & Drug Interactions",
        description: "购买止痛药并了解药物相互作用",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I need something for a headache. What's the difference between ibuprofen and acetaminophen?",
            textZh: "我需要治头痛的药。布洛芬和对乙酰氨基酚有什么区别？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Both relieve pain, but ibuprofen also reduces inflammation. Acetaminophen is gentler on the stomach. Are you taking any other medications?",
            textZh: "两种都能止痛，但布洛芬还能消炎。对乙酰氨基酚对胃更温和。您在吃其他药吗？",
            keyPhrases: [
              { en: "relieve pain", zh: "止痛" },
              { en: "reduces inflammation", zh: "消炎" },
              { en: "gentler on the stomach", zh: "对胃更温和" },
            ],
            alternativeExpressions: [
              { textEn: "They both help with pain. Ibuprofen also fights inflammation, but acetaminophen is easier on your stomach. Are you on any other meds?", textZh: "两种都能止痛。布洛芬还能抗炎，但对乙酰氨基酚对胃温和些。您在吃别的药吗？", actionHint: "对比两种止痛药", frequency: "common" },
              { textEn: "Good question. Ibuprofen is an anti-inflammatory, so it's better for swelling. Acetaminophen is kinder to the stomach. Any other meds you're taking?", textZh: "好问题。布洛芬是消炎药，消肿更好。对乙酰氨基酚对胃更友好。您在服用其他药物吗？", actionHint: "专业解释药物区别", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm taking blood pressure medication. Is that a concern?",
            textZh: "我在吃降压药。有影响吗？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Good that you mentioned that. Ibuprofen can interact with some blood pressure medications. Acetaminophen would be the safer choice for you.",
            textZh: "您提到这个很好。布洛芬可能和某些降压药有相互作用。对您来说对乙酰氨基酚是更安全的选择。",
            keyPhrases: [
              { en: "interact with", zh: "与……有相互作用" },
              { en: "blood pressure medication", zh: "降压药" },
              { en: "safer choice", zh: "更安全的选择" },
            ],
            alternativeExpressions: [
              { textEn: "Glad you told me. Ibuprofen doesn't mix well with certain blood pressure meds. Stick with acetaminophen — much safer for you.", textZh: "幸好您说了。布洛芬跟某些降压药不太合得来。选对乙酰氨基酚——对您更安全。", actionHint: "根据用药史给建议", frequency: "common" },
              { textEn: "That's important to know. In your case, I'd avoid ibuprofen — it can interfere with blood pressure meds. Acetaminophen is your best bet.", textZh: "这个很重要。您的情况建议避免布洛芬——可能影响降压药效果。对乙酰氨基酚是最好的选择。", actionHint: "专业用药安全建议", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, I'll take the acetaminophen. What dosage do you recommend?",
            textZh: "好的，我要对乙酰氨基酚。你建议什么剂量？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "For adults, 500 milligrams every 4 to 6 hours. Don't take more than 3,000 milligrams in a day, and avoid alcohol while taking it.",
            textZh: "成人每4到6小时500毫克。一天不要超过3000毫克，服药期间不要喝酒。",
            keyPhrases: [
              { en: "dosage", zh: "剂量" },
              { en: "milligrams", zh: "毫克" },
              { en: "avoid alcohol", zh: "避免饮酒" },
            ],
            alternativeExpressions: [
              { textEn: "500 mg every 4 to 6 hours. Cap it at 3,000 mg per day and skip the alcohol while you're on it.", textZh: "每4到6小时500毫克。每天最多3000毫克，吃药期间别喝酒。", actionHint: "简洁说明用药规则", frequency: "common" },
              { textEn: "Take one or two 500 mg tablets every 4 to 6 hours. Max 3,000 mg a day. And no drinking — alcohol and acetaminophen don't mix.", textZh: "每4到6小时吃一到两片500毫克的。一天最多3000毫克。别喝酒——酒精和对乙酰氨基酚不能混着。", actionHint: "强调注意事项", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a generic version? The brand name seems expensive.",
            textZh: "有仿制药版本吗？品牌药好像挺贵的。",
            culturalNote: "美国药店的仿制药（generic）成分和品牌药（brand name）完全一样，但价格便宜很多。",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Absolutely. The store brand is the exact same formula at about half the price. It's right here on the bottom shelf.",
            textZh: "当然有。超市自有品牌配方完全一样，价格大约是一半。就在最下面这层货架。",
            keyPhrases: [
              { en: "generic", zh: "仿制药" },
              { en: "store brand", zh: "超市自有品牌" },
              { en: "same formula", zh: "同样的配方" },
            ],
            alternativeExpressions: [
              { textEn: "Oh definitely — the generic version is identical. Same active ingredient, half the cost. Bottom shelf, right here.", textZh: "当然有——仿制药完全一样。同样的有效成分，一半的价格。最下面这层。", actionHint: "推荐仿制药省钱", frequency: "common" },
              { textEn: "Yes! Our store brand has the exact same stuff in it. You're just not paying for the name. It's down here on the lower shelf.", textZh: "有！我们自有品牌成分完全一样。只是不用为品牌付费。在下面这层货架。", actionHint: "解释仿制药的优势", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect, I'll take the generic. Thank you for the advice.",
            textZh: "好的，我要仿制药的。谢谢你的建议。",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "You're welcome. If the headaches persist for more than a few days, I'd recommend seeing a doctor. Take care!",
            textZh: "不客气。如果头痛持续几天以上，建议去看医生。保重！",
            keyPhrases: [
              { en: "persist", zh: "持续" },
              { en: "seeing a doctor", zh: "看医生" },
            ],
            alternativeExpressions: [
              { textEn: "No problem! If the headaches don't go away after a few days, definitely go see a doctor. Hope you feel better!", textZh: "没问题！如果几天后头痛还没好，一定要去看医生。祝早日康复！", actionHint: "关心提醒就医", frequency: "common" },
              { textEn: "Happy to help. But if these headaches keep coming back, it's worth getting checked out. Take care of yourself!", textZh: "乐意帮忙。但如果头痛反复发作，值得去检查一下。保重！", actionHint: "善意提醒后续跟进", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "shopping-pharmacy-prescription",
    category: "shopping",
    titleZh: "药店取处方药",
    titleEn: "Picking Up a Prescription",
    description: "在药店取医生开的处方药，了解用法用量和保险报销",
    otherRole: "药剂师",
    otherRoleIcon: "💊",
    flows: [
      {
        id: "basic",
        titleZh: "取处方药",
        titleEn: "Picking Up Medication",
        description: "到药店取已开好的处方药",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm here to pick up a prescription. My doctor sent it over earlier today.",
            textZh: "你好，我来取处方药。我的医生今天早些时候发过来了。",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Sure. Can I have your last name and date of birth, please?",
            textZh: "好的。请告诉我您的姓和出生日期？",
            keyPhrases: [
              { en: "last name", zh: "姓" },
              { en: "date of birth", zh: "出生日期" },
              { en: "prescription", zh: "处方" },
            ],
            alternativeExpressions: [
              { textEn: "Of course. What's the last name on the prescription, and your date of birth?", textZh: "好的。处方上的姓是什么？出生日期呢？", actionHint: "核实取药身份", frequency: "common" },
              { textEn: "I can help with that. Just need your name and birthday to pull up the order.", textZh: "我来帮您。需要您的姓名和生日来查找订单。", actionHint: "友好地请求验证信息", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, it's Chen. Date of birth is June 15, 1990.",
            textZh: "好的，姓陈。出生日期是1990年6月15日。",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "I see it here. Your prescription is ready. Do you have your insurance card with you?",
            textZh: "找到了。您的处方药已经准备好了。您带保险卡了吗？",
            keyPhrases: [
              { en: "prescription is ready", zh: "处方药已准备好" },
              { en: "insurance card", zh: "保险卡" },
            ],
            alternativeExpressions: [
              { textEn: "Found it — your medication is all set. Do you have your insurance card handy?", textZh: "找到了——您的药准备好了。保险卡带了吗？", actionHint: "确认处方并询问保险", frequency: "common" },
              { textEn: "Got it right here. Everything's ready to go. Can I see your insurance card?", textZh: "就在这。全都准备好了。能看一下您的保险卡吗？", actionHint: "快速确认并索取保险卡", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, here it is. How much will it be with insurance?",
            textZh: "有的，给你。用保险的话要多少钱？",
            culturalNote: "美国处方药的价格因保险计划不同差异很大。copay（自付额）通常在$5-$50之间。",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "With your insurance, the copay is $15. Without insurance it would be $89, so you're saving quite a bit.",
            textZh: "用保险的话，自付额是15美元。没有保险的话要89美元，省了不少。",
            keyPhrases: [
              { en: "copay", zh: "自付额" },
              { en: "without insurance", zh: "没有保险" },
            ],
            alternativeExpressions: [
              { textEn: "Your copay comes out to $15 with insurance. The full price would be $89, so your plan is saving you a lot.", textZh: "有保险的话自付额是15美元。全价的话要89美元，您的保险省了不少。", actionHint: "说明保险省下的费用", frequency: "common" },
              { textEn: "Good news — with your coverage, it's only $15 out of pocket. Without insurance, you'd be looking at $89.", textZh: "好消息——有保险只需自付15美元。没保险的话得89美元。", actionHint: "对比保险前后价格", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's good. Are there any special instructions I should know?",
            textZh: "不错。有什么特别的注意事项吗？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Take one tablet twice daily with food. Avoid grapefruit juice while on this medication. Do you have any questions?",
            textZh: "每天两次，每次一片，随餐服用。服药期间不要喝柚子汁。您有什么问题吗？",
            keyPhrases: [
              { en: "twice daily", zh: "每天两次" },
              { en: "with food", zh: "随餐" },
              { en: "avoid grapefruit juice", zh: "避免柚子汁" },
            ],
            alternativeExpressions: [
              { textEn: "One pill in the morning and one at night, both with a meal. And stay away from grapefruit juice. Any questions?", textZh: "早上一片晚上一片，都随餐吃。不要喝柚子汁。有问题吗？", actionHint: "具体说明服药时间", frequency: "common" },
              { textEn: "Take it twice a day with food. Important — no grapefruit or grapefruit juice while you're on this. Sound good?", textZh: "一天两次随餐吃。重要的是——服药期间不要吃柚子或喝柚子汁。清楚了吗？", actionHint: "强调饮食禁忌", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "When can I get a refill?",
            textZh: "什么时候可以续药？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "This is a 30-day supply. You can request a refill after day 25, either online, by phone, or in the app. It'll be ready for pickup the same day.",
            textZh: "这是30天的量。第25天之后可以续药，网上、电话或App都可以。当天就能取。",
            keyPhrases: [
              { en: "refill", zh: "续药" },
              { en: "30-day supply", zh: "30天的量" },
              { en: "ready for pickup", zh: "可以取药" },
            ],
            alternativeExpressions: [
              { textEn: "You've got a month's worth here. After day 25, just call, go online, or use the app to reorder. Same-day pickup.", textZh: "这够吃一个月。第25天以后打电话、上网或用App续药就行。当天可取。", actionHint: "说明续药流程", frequency: "common" },
              { textEn: "That's 30 days of medication. When you're running low, request a refill through the app or give us a call — we'll have it ready the same day.", textZh: "这是30天的药量。快吃完的时候通过App或打电话续药——我们当天就能备好。", actionHint: "提前告知续药方法", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "保险问题和替代药品",
        titleEn: "Insurance Issues & Alternatives",
        description: "处理保险不覆盖的情况和寻找替代药品",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "药剂师",
            textEn: "I'm sorry, but your insurance doesn't cover this particular medication. The out-of-pocket cost would be $210.",
            textZh: "抱歉，您的保险不覆盖这个药。自费的话要210美元。",
            keyPhrases: [
              { en: "doesn't cover", zh: "不覆盖/不报销" },
              { en: "out-of-pocket", zh: "自费" },
            ],
            alternativeExpressions: [
              { textEn: "Unfortunately, your plan doesn't include this medication. Without coverage, it would be $210.", textZh: "很遗憾，您的保险计划不包括这个药。没有保险报销的话要210美元。", actionHint: "告知保险不覆盖", frequency: "common" },
              { textEn: "Bad news — this one isn't on your insurance formulary. The cash price is $210. But let me see what options we have.", textZh: "不好的消息——这个药不在您保险的目录里。现金价210美元。不过让我看看有什么其他选择。", actionHint: "坦诚告知并主动找替代方案", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's really expensive. Is there a generic alternative that my insurance might cover?",
            textZh: "太贵了。有没有仿制药替代品是我的保险能报的？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Let me check... Yes, there's a generic version that your plan does cover. The copay would be $20. I'd need to contact your doctor for approval to switch.",
            textZh: "我查一下……有的，有一种仿制药您的保险可以报。自付额是20美元。我需要联系您的医生批准换药。",
            keyPhrases: [
              { en: "generic version", zh: "仿制药版本" },
              { en: "approval to switch", zh: "批准换药" },
            ],
            alternativeExpressions: [
              { textEn: "Good news — there is a generic that your insurance covers. Only $20 copay. I just need your doctor's okay to make the swap.", textZh: "好消息——有一种仿制药您的保险能报。自付额只要20美元。我只需要您医生同意换药。", actionHint: "提供保险覆盖的替代方案", frequency: "common" },
              { textEn: "Let me look... Yes, there's a cheaper generic option your plan will pay for — $20 out of pocket. I'll need to reach out to your doctor to authorize the change.", textZh: "我查查……有的，有个更便宜的仿制药您的保险可以报——自付20美元。我需要联系您的医生授权换药。", actionHint: "详细解释换药流程", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please contact them. How long will that take?",
            textZh: "好的，请联系他们。需要多长时间？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Usually within 24 hours. We'll send you a text when it's approved and ready. In the meantime, would you like me to check if there's a manufacturer coupon?",
            textZh: "通常24小时内。批准准备好后我们会给您发短信。同时我帮您看看有没有厂家优惠券？",
            keyPhrases: [
              { en: "within 24 hours", zh: "24小时内" },
              { en: "manufacturer coupon", zh: "厂家优惠券" },
            ],
            alternativeExpressions: [
              { textEn: "Shouldn't take more than a day. We'll text you as soon as it's ready. Want me to see if the drug company has any coupons?", textZh: "应该不超过一天。准备好了马上给您发短信。要不要我看看药厂有没有优惠券？", actionHint: "说明时间并主动寻找优惠", frequency: "common" },
              { textEn: "Most doctors get back to us within 24 hours. You'll get a text notification. In the meantime, I can also look for a manufacturer discount.", textZh: "大多数医生24小时内会回复。您会收到短信通知。同时我也可以帮您找找厂家折扣。", actionHint: "主动提供多种省钱方案", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be great. I've also heard of GoodRx — can I use that?",
            textZh: "那太好了。我还听说过GoodRx——可以用那个吗？",
            culturalNote: "GoodRx是美国常用的药品比价App，经常能找到比保险更便宜的价格。",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Absolutely, but you can't combine it with insurance. Let me check the GoodRx price... It shows $75 for this medication here. That's still less than the cash price.",
            textZh: "可以的，但不能和保险同时用。我查查GoodRx的价格……这个药在我们这里显示75美元。比原价还是便宜不少。",
            keyPhrases: [
              { en: "can't combine", zh: "不能同时使用" },
              { en: "cash price", zh: "原价/现金价" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, but it's either GoodRx or insurance — you can't stack them. The GoodRx price here is $75, which is better than the full $210.", textZh: "可以，但GoodRx和保险不能叠加。GoodRx价格在这里是75美元，比全价210好多了。", actionHint: "解释GoodRx使用规则", frequency: "common" },
              { textEn: "You can definitely use GoodRx, just not together with insurance. Let me pull it up... $75 at our pharmacy. That's a big savings over the retail price.", textZh: "当然可以用GoodRx，就是不能和保险一起用。我查查……在我们药店75美元。比零售价省很多。", actionHint: "帮忙查GoodRx价格", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll wait for the generic approval. If that falls through, I'll use the GoodRx coupon.",
            textZh: "我等仿制药的批准吧。如果不行的话，我用GoodRx优惠券。",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Sounds like a plan. We'll keep you updated by text. Is this number on file still correct?",
            textZh: "好的。我们会通过短信通知您。系统里的这个手机号还对吗？",
            keyPhrases: [
              { en: "keep you updated", zh: "随时通知您" },
              { en: "on file", zh: "系统里存的" },
            ],
            alternativeExpressions: [
              { textEn: "Great, we'll text you with updates. Is the phone number we have for you still good?", textZh: "好的，我们会发短信通知进展。我们存的手机号还能用吗？", actionHint: "确认联系方式", frequency: "common" },
              { textEn: "Perfect. We'll send you a notification as soon as we hear back. Just want to make sure this number is still right.", textZh: "好的。一有消息马上通知您。只是确认一下这个号码还对不对。", actionHint: "核实通知方式", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "shopping-pharmacy-skincare",
    category: "shopping",
    titleZh: "药店买护肤品",
    titleEn: "Buying Skincare Products",
    description: "在药店选购护肤品，了解成分和适合的肤质",
    otherRole: "美容顾问",
    otherRoleIcon: "🧴",
    flows: [
      {
        id: "basic",
        titleZh: "选购防晒和保湿",
        titleEn: "Sunscreen & Moisturizer",
        description: "选购基础护肤品",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need a good sunscreen. There are so many options — can you help me choose?",
            textZh: "你好，我需要一款好的防晒霜。选择太多了——能帮我选一下吗？",
          },
          {
            speaker: "them",
            role: "美容顾问",
            textEn: "Of course! What's your skin type — oily, dry, or combination? And will you be using it for daily wear or outdoor activities?",
            textZh: "当然！您的肤质是什么样的——油性、干性还是混合性？是日常使用还是户外活动？",
            keyPhrases: [
              { en: "skin type", zh: "肤质" },
              { en: "oily", zh: "油性" },
              { en: "dry", zh: "干性" },
              { en: "combination", zh: "混合性" },
            ],
            alternativeExpressions: [
              { textEn: "Happy to help! First, do you know your skin type? And is this for everyday use or more for the beach and outdoors?", textZh: "很乐意帮忙！先问一下，您知道自己的肤质吗？是日常用还是去海滩户外用？", actionHint: "了解顾客需求", frequency: "common" },
              { textEn: "Sure thing! Tell me about your skin — does it tend to get oily, dry, or a mix? And where will you mostly be wearing it?", textZh: "没问题！跟我说说您的皮肤——偏油、偏干还是混合？主要在什么场合用？", actionHint: "引导顾客描述肤质", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have combination skin. It's mostly for daily use.",
            textZh: "我是混合性皮肤。主要是日常用。",
          },
          {
            speaker: "them",
            role: "美容顾问",
            textEn: "For daily use with combination skin, I'd recommend this lightweight SPF 50. It's oil-free and won't feel greasy. It also works well under makeup.",
            textZh: "混合性皮肤日常用的话，我推荐这款轻薄的SPF 50。不含油，不会觉得油腻。可以当妆前用。",
            keyPhrases: [
              { en: "SPF 50", zh: "防晒指数50" },
              { en: "oil-free", zh: "不含油的" },
              { en: "greasy", zh: "油腻的" },
              { en: "under makeup", zh: "妆前/化妆前" },
            ],
            alternativeExpressions: [
              { textEn: "This one's perfect for you — SPF 50, super light, oil-free. Great under makeup too.", textZh: "这款很适合您——SPF 50，超轻薄，不含油。化妆打底也很好。", actionHint: "精准推荐防晒霜", frequency: "common" },
              { textEn: "I'd go with this lightweight sunscreen — SPF 50, won't clog your pores, and it sits beautifully under foundation.", textZh: "我推荐这款轻薄防晒——SPF 50，不堵毛孔，在粉底下面效果很好。", actionHint: "强调适合混合肌", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Does it leave a white cast? I've had that problem with other sunscreens.",
            textZh: "会不会泛白？我用其他防晒霜遇到过这个问题。",
          },
          {
            speaker: "them",
            role: "美容顾问",
            textEn: "No, this one is a chemical sunscreen so it goes on completely clear. The mineral ones tend to leave a white cast.",
            textZh: "不会，这是化学防晒霜，涂上去完全透明。物理防晒的容易泛白。",
            keyPhrases: [
              { en: "white cast", zh: "泛白" },
              { en: "chemical sunscreen", zh: "化学防晒" },
              { en: "mineral", zh: "物理防晒/矿物防晒" },
            ],
            alternativeExpressions: [
              { textEn: "Not at all — it's a chemical formula, so it absorbs clear. Mineral sunscreens are the ones that can look chalky.", textZh: "完全不会——这是化学配方，吸收后是透明的。物理防晒才会看起来白白的。", actionHint: "区分化学和物理防晒", frequency: "common" },
              { textEn: "Nope, this goes on invisible. It's the zinc-based mineral ones that leave that white film. This one's totally sheer.", textZh: "不会，这款涂上去看不出来。含锌的物理防晒才会留下白膜。这个完全透明。", actionHint: "打消泛白顾虑", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. I also need a moisturizer for nighttime. Something hydrating but not too heavy.",
            textZh: "太好了。我还需要一款晚间保湿霜。保湿但不要太厚重的。",
          },
          {
            speaker: "them",
            role: "美容顾问",
            textEn: "This gel cream with hyaluronic acid is great. It hydrates without clogging pores. It's also fragrance-free, which is better for sensitive skin.",
            textZh: "这款含透明质酸的凝胶霜很好。保湿又不堵塞毛孔。而且无香精，对敏感皮肤更好。",
            keyPhrases: [
              { en: "hyaluronic acid", zh: "透明质酸/玻尿酸" },
              { en: "clogging pores", zh: "堵塞毛孔" },
              { en: "fragrance-free", zh: "无香精" },
            ],
            alternativeExpressions: [
              { textEn: "Try this gel moisturizer — it's got hyaluronic acid for hydration, won't block pores, and it's unscented.", textZh: "试试这款凝胶保湿霜——含玻尿酸保湿，不堵毛孔，而且无香。", actionHint: "推荐适合的保湿霜", frequency: "common" },
              { textEn: "This one's a customer favorite — lightweight gel with hyaluronic acid. No fragrance, no pore-clogging. Perfect for nighttime.", textZh: "这款是顾客最爱——轻薄凝胶含玻尿酸。无香精，不堵毛孔。非常适合晚间用。", actionHint: "以畅销款推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take both. Do you have any samples I could try first?",
            textZh: "两个都要。有试用装吗？",
          },
          {
            speaker: "them",
            role: "美容顾问",
            textEn: "We don't have samples for these, but both have a money-back guarantee if they don't work for your skin. Just return within 30 days.",
            textZh: "这些没有试用装，但两款都有退款保证，如果不适合您的皮肤的话。30天内退就行。",
            keyPhrases: [
              { en: "samples", zh: "试用装" },
              { en: "money-back guarantee", zh: "退款保证" },
            ],
            alternativeExpressions: [
              { textEn: "No samples unfortunately, but they come with a satisfaction guarantee. If your skin doesn't like them, bring them back within 30 days for a full refund.", textZh: "可惜没有试用装，不过有满意保证。皮肤不适应的话30天内退全款。", actionHint: "说明退款政策", frequency: "common" },
              { textEn: "We're out of samples right now, but both brands offer a money-back guarantee — so there's no risk in trying them.", textZh: "目前没有试用装，不过两个品牌都有退款保证——试用没有风险。", actionHint: "打消购买顾虑", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "了解护肤成分",
        titleEn: "Understanding Skincare Ingredients",
        description: "深入了解护肤品成分和搭配使用",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I keep hearing about retinol and vitamin C serums. What do they actually do?",
            textZh: "我经常听到视黄醇和维C精华。它们到底有什么用？",
          },
          {
            speaker: "them",
            role: "美容顾问",
            textEn: "Retinol helps with anti-aging — it boosts collagen and reduces fine lines. Vitamin C is an antioxidant that brightens skin and fades dark spots.",
            textZh: "视黄醇有抗衰老的作用——促进胶原蛋白生成，减少细纹。维C是抗氧化剂，能提亮肤色、淡化色斑。",
            keyPhrases: [
              { en: "retinol", zh: "视黄醇" },
              { en: "collagen", zh: "胶原蛋白" },
              { en: "antioxidant", zh: "抗氧化剂" },
              { en: "dark spots", zh: "色斑" },
            ],
            alternativeExpressions: [
              { textEn: "Retinol is anti-aging — it smooths out wrinkles. Vitamin C brightens your skin and evens out your complexion.", textZh: "视黄醇抗衰——能抚平皱纹。维C提亮肤色、均匀肤色。", actionHint: "简明解释两种成分", frequency: "common" },
              { textEn: "Think of retinol as your nighttime wrinkle fighter, and vitamin C as your morning glow booster. Both are game-changers.", textZh: "可以把视黄醇看作夜间抗皱利器，维C是早间提亮神器。两个都是护肤界明星。", actionHint: "生动形象地介绍", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I use both at the same time?",
            textZh: "两个可以同时用吗？",
          },
          {
            speaker: "them",
            role: "美容顾问",
            textEn: "It's better to use them at different times. Vitamin C in the morning with sunscreen, and retinol at night. Using them together can irritate your skin.",
            textZh: "最好分开用。维C白天配防晒用，视黄醇晚上用。一起用可能会刺激皮肤。",
            keyPhrases: [
              { en: "irritate", zh: "刺激" },
              { en: "in the morning", zh: "早上" },
              { en: "at night", zh: "晚上" },
            ],
            alternativeExpressions: [
              { textEn: "Don't layer them together — that can cause irritation. Vitamin C goes on in the AM, retinol in the PM.", textZh: "不要叠着用——可能会刺激。维C白天用，视黄醇晚上用。", actionHint: "建议早晚分开使用", frequency: "common" },
              { textEn: "I'd separate them. Morning routine: vitamin C plus sunscreen. Night routine: retinol. Mixing them can be too harsh.", textZh: "我建议分开。早上：维C加防晒。晚上：视黄醇。混用可能太刺激。", actionHint: "规划早晚护肤步骤", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm a beginner with retinol. Should I start with a high concentration?",
            textZh: "我是视黄醇新手。应该从高浓度开始吗？",
          },
          {
            speaker: "them",
            role: "美容顾问",
            textEn: "Definitely not. Start with a low concentration, like 0.25%, and use it every other night. Your skin needs time to build tolerance.",
            textZh: "千万不要。从低浓度开始，比如0.25%，隔一晚用一次。皮肤需要时间建立耐受。",
            keyPhrases: [
              { en: "low concentration", zh: "低浓度" },
              { en: "every other night", zh: "隔一晚" },
              { en: "build tolerance", zh: "建立耐受" },
            ],
            alternativeExpressions: [
              { textEn: "No way — start low and go slow. Try 0.25% every other night and let your skin get used to it.", textZh: "千万别——从低浓度慢慢来。试试0.25%隔一晚用，让皮肤适应。", actionHint: "强调循序渐进", frequency: "common" },
              { textEn: "Please don't! Begin with the lowest strength and ease into it. Your skin will tell you when it's ready for more.", textZh: "千万别！从最低浓度开始慢慢加。皮肤会告诉你什么时候可以加量。", actionHint: "温和劝告从低浓度起步", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. What about niacinamide? I see it in a lot of products.",
            textZh: "了解了。烟酰胺呢？我在很多产品里都看到它。",
          },
          {
            speaker: "them",
            role: "美容顾问",
            textEn: "Niacinamide is very versatile — it helps with pores, oil control, and brightening. It pairs well with most ingredients and is gentle enough for daily use.",
            textZh: "烟酰胺很全能——缩毛孔、控油、提亮都有帮助。和大多数成分都能搭配，温和到可以每天用。",
            keyPhrases: [
              { en: "niacinamide", zh: "烟酰胺" },
              { en: "versatile", zh: "全能的/多功能的" },
              { en: "oil control", zh: "控油" },
            ],
            alternativeExpressions: [
              { textEn: "Niacinamide is like the Swiss army knife of skincare — minimizes pores, controls oil, and brightens. Works with almost anything.", textZh: "烟酰胺就像护肤界的瑞士军刀——缩毛孔、控油、提亮。跟几乎所有成分都兼容。", actionHint: "形象比喻多功能性", frequency: "common" },
              { textEn: "It's a real all-rounder. Great for pores and oiliness, and it plays nicely with other products. You can use it every day.", textZh: "真正的全能选手。缩毛孔控油很在行，跟其他产品也合得来。可以每天用。", actionHint: "强调日常适用性", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I think I'll start with vitamin C and niacinamide. Can you recommend specific products?",
            textZh: "我想先从维C和烟酰胺开始。能推荐具体的产品吗？",
          },
          {
            speaker: "them",
            role: "美容顾问",
            textEn: "This vitamin C serum is our bestseller — it's 15% concentration with vitamin E. And this niacinamide serum is great value at $12. Together they make a solid morning routine.",
            textZh: "这款维C精华是我们的畅销品——15%浓度含维E。这款烟酰胺精华性价比很高，才12美元。两个一起是很好的早间护肤组合。",
            keyPhrases: [
              { en: "bestseller", zh: "畅销品" },
              { en: "great value", zh: "性价比高" },
              { en: "morning routine", zh: "早间护肤步骤" },
            ],
            alternativeExpressions: [
              { textEn: "Our top seller is this vitamin C with vitamin E — 15% strength. Pair it with this $12 niacinamide and you've got a killer morning routine.", textZh: "我们卖得最好的是这款含维E的维C精华——15%浓度。配上这个12美元的烟酰胺，早间护肤就完美了。", actionHint: "推荐畅销组合", frequency: "common" },
              { textEn: "I'd go with these two — the vitamin C serum is a customer favorite, and the niacinamide is a steal at $12. Perfect AM combo.", textZh: "我推荐这两个——维C精华是顾客最爱，烟酰胺12美元超划算。完美的早间组合。", actionHint: "以性价比推荐组合", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 书店 ====================
  {
    id: "shopping-bookstore-browse",
    category: "shopping",
    titleZh: "书店浏览选书",
    titleEn: "Browsing a Bookstore",
    description: "在书店浏览不同区域，寻找特定类型的书籍",
    otherRole: "书店店员",
    otherRoleIcon: "📚",
    flows: [
      {
        id: "basic",
        titleZh: "寻找特定书籍",
        titleEn: "Finding a Specific Book",
        description: "在书店寻找特定书籍或作者",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm looking for a book but I'm not sure where to find it. Can you help?",
            textZh: "你好，我在找一本书但不知道在哪。能帮忙吗？",
          },
          {
            speaker: "them",
            role: "书店店员",
            textEn: "Of course! Do you know the title or the author?",
            textZh: "当然可以！你知道书名或者作者吗？",
            keyPhrases: [
              { en: "title", zh: "书名" },
              { en: "author", zh: "作者" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! Do you have the name of the book or who wrote it?", textZh: "好的！知道书名或者谁写的吗？", actionHint: "询问书籍信息", frequency: "common" },
              { textEn: "Happy to help! What's the title, or do you know the author's name?", textZh: "乐意帮忙！书名是什么，或者知道作者叫什么吗？", actionHint: "热情协助找书", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The author is Yuval Noah Harari. I think the book is called 'Sapiens.'",
            textZh: "作者是尤瓦尔·赫拉利。书名好像叫《人类简史》。",
          },
          {
            speaker: "them",
            role: "书店店员",
            textEn: "Great choice! Let me look it up in our system... We have it in stock. It's in the non-fiction section, aisle four. I can show you.",
            textZh: "好选择！我在系统里查一下……有货。在非虚构区，第四排。我可以带您去。",
            keyPhrases: [
              { en: "in stock", zh: "有货" },
              { en: "non-fiction", zh: "非虚构" },
              { en: "look it up", zh: "查一下" },
            ],
            alternativeExpressions: [
              { textEn: "Love that book! Let me check... Yep, we've got it. Non-fiction, aisle four. Follow me!", textZh: "那本书很棒！我查查……有的。非虚构区第四排。跟我来！", actionHint: "热情帮忙找书", frequency: "common" },
              { textEn: "Excellent pick! Pulling it up now... We have it right here in stock. It's over in non-fiction. Want me to walk you there?", textZh: "好品味！我查一下……有现货。在非虚构区。要我带您过去吗？", actionHint: "确认库存并提供引导", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks! Do you have it in paperback? I prefer that over hardcover.",
            textZh: "谢谢！有平装版吗？我喜欢平装胜过精装。",
            culturalNote: "英文书通常有hardcover（精装，先出，更贵）和paperback（平装，后出，更便宜）两种版本。",
          },
          {
            speaker: "them",
            role: "书店店员",
            textEn: "Yes, we have both. The paperback is $16.99 and the hardcover is $29.99. We also have the audiobook on CD if you're interested.",
            textZh: "两种都有。平装16.99美元，精装29.99美元。如果您感兴趣，我们也有CD版有声书。",
            keyPhrases: [
              { en: "paperback", zh: "平装" },
              { en: "hardcover", zh: "精装" },
              { en: "audiobook", zh: "有声书" },
            ],
            alternativeExpressions: [
              { textEn: "We carry both versions. Paperback is $16.99, hardcover is $29.99. There's an audiobook too if you'd rather listen.", textZh: "两种版本都有。平装16.99，精装29.99。也有有声书版如果您更喜欢听的话。", actionHint: "介绍不同版本及价格", frequency: "common" },
              { textEn: "Yep! Paperback runs about $17 and hardcover is around $30. We've also got it on audiobook CD.", textZh: "有！平装大概17美元，精装30左右。我们还有CD有声书版本。", actionHint: "报价并提及更多选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Paperback is fine. Are there any current promotions on books?",
            textZh: "平装就好。现在书有什么促销活动吗？",
          },
          {
            speaker: "them",
            role: "书店店员",
            textEn: "Yes! It's buy two, get the third one 50% off on all bestsellers this week. That book qualifies since it's on the bestseller list.",
            textZh: "有的！本周所有畅销书买两本第三本半价。这本书在畅销榜上，可以参加活动。",
            keyPhrases: [
              { en: "buy two get the third 50% off", zh: "买两本第三本半价" },
              { en: "bestseller list", zh: "畅销榜" },
            ],
            alternativeExpressions: [
              { textEn: "Great timing! Bestsellers are buy two, get the third at half price this week. And that book counts!", textZh: "来得正好！畅销书本周买两本第三本半价。这本也算在内！", actionHint: "介绍促销活动", frequency: "common" },
              { textEn: "You're in luck — all bestsellers are on a deal right now. Buy two and the third is 50% off. That title is on the list.", textZh: "您赶上了——所有畅销书现在有活动。买两本第三本半价。这本在榜上。", actionHint: "告知优惠并确认资格", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll look around for two more then. Thank you!",
            textZh: "那我再看看找两本。谢谢！",
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "浏览和发现新书",
        titleEn: "Browsing & Discovering New Reads",
        description: "逛书店探索不同区域和新书推荐",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I finished all my books and need something new. I usually read thrillers but I want to try something different.",
            textZh: "我的书都看完了，需要新的。我通常看悬疑小说但想尝试不同的。",
          },
          {
            speaker: "them",
            role: "书店店员",
            textEn: "If you like thrillers, you might enjoy historical fiction — it has that same page-turning quality but with real events woven in. Have you tried any?",
            textZh: "如果您喜欢悬疑，可能会喜欢历史小说——同样引人入胜，但融入了真实事件。您试过吗？",
            keyPhrases: [
              { en: "historical fiction", zh: "历史小说" },
              { en: "page-turning", zh: "引人入胜的/让人停不下来的" },
            ],
            alternativeExpressions: [
              { textEn: "Have you ever tried historical fiction? It's got that same can't-put-it-down feel as a thriller, but based on real history.", textZh: "试过历史小说吗？跟悬疑小说一样让人放不下来，但是基于真实历史。", actionHint: "推荐相似类型", frequency: "common" },
              { textEn: "Thriller fans often love historical fiction — same suspense, but set in real time periods. Ever read any?", textZh: "悬疑迷通常也爱历史小说——同样有悬念，但设定在真实的历史时期。读过吗？", actionHint: "基于阅读偏好推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Not really. Any specific recommendations?",
            textZh: "没怎么试过。有什么具体推荐吗？",
          },
          {
            speaker: "them",
            role: "书店店员",
            textEn: "Our staff pick this month is 'The Nightingale' by Kristin Hannah. It's set in World War II France and it's absolutely gripping. We have a whole staff picks shelf by the entrance.",
            textZh: "我们这个月的员工推荐是克里斯汀·汉娜的《夜莺》。背景是二战时期的法国，非常扣人心弦。入口处有一整个员工推荐书架。",
            keyPhrases: [
              { en: "staff pick", zh: "员工推荐" },
              { en: "gripping", zh: "扣人心弦的" },
              { en: "set in", zh: "以……为背景" },
            ],
            alternativeExpressions: [
              { textEn: "This month we're all loving 'The Nightingale' — WWII France, incredibly emotional. It's on our staff picks shelf up front.", textZh: "这个月我们都在推《夜莺》——二战法国背景，非常感人。在前面的员工推荐架上。", actionHint: "分享员工推荐", frequency: "common" },
              { textEn: "I personally loved 'The Nightingale' by Kristin Hannah. It takes place in occupied France — so powerful. Check out our staff picks display by the door.", textZh: "我个人特别喜欢克里斯汀·汉娜的《夜莺》。发生在被占领的法国——特别震撼。看看门口的员工推荐展台。", actionHint: "以个人推荐拉近距离", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds interesting. Do you have a reading group or book club here?",
            textZh: "听起来不错。你们有读书会吗？",
          },
          {
            speaker: "them",
            role: "书店店员",
            textEn: "We do! We meet the first Thursday of every month at 7 PM. This month we're reading a mystery novel. It's free to join and we provide coffee.",
            textZh: "有的！每月第一个周四晚上7点。这个月读的是一本推理小说。免费参加，我们提供咖啡。",
            keyPhrases: [
              { en: "book club", zh: "读书会" },
              { en: "free to join", zh: "免费参加" },
            ],
            alternativeExpressions: [
              { textEn: "Yes, we have a monthly book club! First Thursday, 7 PM. This month it's a mystery. Just show up — it's free and there's coffee.", textZh: "有，我们有月度读书会！每月第一个周四晚7点。这个月是推理小说。直接来就行——免费的，有咖啡。", actionHint: "介绍读书会详情", frequency: "common" },
              { textEn: "We sure do — it's a great group! Every first Thursday at 7. This month's pick is a mystery. No sign-up needed, and coffee's on us.", textZh: "有的——氛围很好的！每月第一个周四7点。这月选的是推理小说。不用报名，咖啡免费。", actionHint: "热情邀请参加", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's great. I'll also check out the new releases section. Where is that?",
            textZh: "太好了。我也想看看新书区。在哪里？",
          },
          {
            speaker: "them",
            role: "书店店员",
            textEn: "New releases are right at the front, organized by genre. We also have a 'local authors' table if you're interested in supporting local writers.",
            textZh: "新书就在前面，按类型分类。如果您想支持本地作家，我们还有一个'本地作者'展台。",
            keyPhrases: [
              { en: "new releases", zh: "新书" },
              { en: "genre", zh: "类型/题材" },
              { en: "local authors", zh: "本地作者" },
            ],
            alternativeExpressions: [
              { textEn: "Right up front — new arrivals are sorted by genre. And there's a local authors section if you want to discover some hometown talent.", textZh: "就在前面——新书按类型排列。还有本地作者专区，可以发现一些本地才子。", actionHint: "介绍新书区和本地作者", frequency: "common" },
              { textEn: "The new releases table is by the entrance, organized by category. We've also got a great selection from local writers.", textZh: "新书展台在入口处，按分类排。我们也有一些很棒的本地作家作品。", actionHint: "指引新书位置", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take a look. Can I also order a book that's not in stock?",
            textZh: "我去看看。如果没有的书可以预订吗？",
          },
          {
            speaker: "them",
            role: "书店店员",
            textEn: "Absolutely. We can special order anything and it usually arrives within 3 to 5 business days. No extra charge for the order.",
            textZh: "当然可以。我们可以特别订购任何书，通常3到5个工作日到。订购不收额外费用。",
            keyPhrases: [
              { en: "special order", zh: "特别订购" },
              { en: "business days", zh: "工作日" },
              { en: "no extra charge", zh: "不收额外费用" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! We can order any book for you — usually takes 3 to 5 days. And there's no ordering fee.", textZh: "当然！我们可以帮您订任何书——通常3到5天到。不收订购费。", actionHint: "说明订购服务", frequency: "common" },
              { textEn: "Sure! If it's not on our shelves, we'll order it in. Should be here within a week, and it doesn't cost extra.", textZh: "可以！如果我们架上没有，可以订。一周内到，不额外收费。", actionHint: "提供订书便利", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "shopping-bookstore-recommend",
    category: "shopping",
    titleZh: "书店请店员推荐",
    titleEn: "Getting Book Recommendations",
    description: "向书店店员描述阅读偏好，获取个性化书籍推荐",
    otherRole: "书店店员",
    otherRoleIcon: "📖",
    flows: [
      {
        id: "basic",
        titleZh: "送礼选书",
        titleEn: "Choosing a Book as a Gift",
        description: "为他人选购一本合适的书作为礼物",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm looking for a book as a birthday gift for my friend. She's into cooking and travel.",
            textZh: "你好，我想买一本书给朋友当生日礼物。她喜欢烹饪和旅行。",
          },
          {
            speaker: "them",
            role: "书店店员",
            textEn: "Nice! Is she more of a cookbook person, or would she enjoy a travel memoir with food themes?",
            textZh: "不错！她更喜欢食谱类的，还是带美食主题的旅行回忆录？",
            keyPhrases: [
              { en: "cookbook", zh: "食谱书" },
              { en: "travel memoir", zh: "旅行回忆录" },
            ],
            alternativeExpressions: [
              { textEn: "Great combo of interests! Does she prefer hands-on cookbooks or more like travel stories with a foodie angle?", textZh: "兴趣组合很棒！她喜欢实操类食谱还是带美食视角的旅行故事？", actionHint: "缩小选择范围", frequency: "common" },
              { textEn: "Love that! Would she rather follow recipes, or curl up with a good travel-and-food read?", textZh: "很棒！她是喜欢跟着食谱做菜，还是窝着看旅行美食类的书？", actionHint: "形象描述两种选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Maybe a travel memoir. Something fun and inspiring.",
            textZh: "旅行回忆录吧。有趣又有启发性的那种。",
          },
          {
            speaker: "them",
            role: "书店店员",
            textEn: "I'd recommend 'Eat, Pray, Love' if she hasn't read it, or 'A Year in Provence' — it's about a couple who moves to France and is full of food and culture.",
            textZh: "如果她没读过的话推荐《美食、祈祷和恋爱》，或者《普罗旺斯的一年》——讲一对夫妇搬到法国的故事，充满了美食和文化。",
            keyPhrases: [
              { en: "I'd recommend", zh: "我推荐" },
              { en: "full of", zh: "充满了" },
            ],
            alternativeExpressions: [
              { textEn: "Two great picks — 'Eat, Pray, Love' is a classic, or try 'A Year in Provence' if she loves French food and culture.", textZh: "两本好选择——《美食、祈祷和恋爱》是经典，或者试试《普罗旺斯的一年》如果她喜欢法国美食和文化。", actionHint: "推荐两本热门书", frequency: "common" },
              { textEn: "Has she read 'Eat, Pray, Love'? If not, that's perfect. Otherwise, 'A Year in Provence' is wonderful — it's all about moving to France, food, and adventure.", textZh: "她读过《美食、祈祷和恋爱》吗？没读过就太合适了。否则《普罗旺斯的一年》也很棒——讲搬到法国的美食和冒险。", actionHint: "根据阅读历史推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "She's read 'Eat, Pray, Love.' The other one sounds perfect. Can I get it gift-wrapped?",
            textZh: "她读过《美食、祈祷和恋爱》了。另一本听起来很好。可以包装成礼物吗？",
          },
          {
            speaker: "them",
            role: "书店店员",
            textEn: "Of course! Gift wrapping is free with any purchase. Would you also like a gift receipt so she can exchange it if needed?",
            textZh: "当然可以！购物即享免费礼品包装。要不要附一张礼品收据，万一需要换的话？",
            keyPhrases: [
              { en: "gift wrapping", zh: "礼品包装" },
              { en: "gift receipt", zh: "礼品收据" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely! We wrap gifts for free. Want me to include a gift receipt just in case she wants to swap it?", textZh: "当然！我们免费包装礼品。要不要放一张礼品收据以防她想换？", actionHint: "说明免费包装服务", frequency: "common" },
              { textEn: "Sure thing — gift wrapping is complimentary here. I can also slip in a gift receipt so she can exchange it if she already has it.", textZh: "没问题——这里礼品包装是免费的。我还可以放一张礼品收据，万一她已经有了可以换。", actionHint: "贴心提供礼品收据", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, a gift receipt would be great. Thanks!",
            textZh: "好的，附一张礼品收据。谢谢！",
          },
          {
            speaker: "them",
            role: "书店店员",
            textEn: "Here you go — beautifully wrapped! Would you like to add a bookmark or a greeting card? We have some lovely ones at the register.",
            textZh: "给您——包好了！要加一个书签或贺卡吗？收银台那里有一些很漂亮的。",
            keyPhrases: [
              { en: "bookmark", zh: "书签" },
              { en: "greeting card", zh: "贺卡" },
              { en: "at the register", zh: "在收银台" },
            ],
            alternativeExpressions: [
              { textEn: "All wrapped up! Want to throw in a bookmark or a card? We've got some cute ones by the register.", textZh: "包好了！要加个书签或卡片吗？收银台旁边有一些很可爱的。", actionHint: "推荐加购小配件", frequency: "common" },
              { textEn: "Here you are — looks gorgeous! We also have bookmarks and birthday cards up front if you want to complete the gift.", textZh: "给您——很好看！前面还有书签和生日贺卡，想让礼物更完整可以加一个。", actionHint: "建议配套礼品", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "为孩子选书",
        titleEn: "Choosing Books for Children",
        description: "为不同年龄的孩子选择合适的读物",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I need to buy some books for my nephew. He's 8 years old and a reluctant reader. Any ideas?",
            textZh: "我需要给我侄子买几本书。他8岁，不太爱看书。有什么建议吗？",
          },
          {
            speaker: "them",
            role: "书店店员",
            textEn: "For reluctant readers, graphic novels and illustrated chapter books work really well. 'Dog Man' and 'Diary of a Wimpy Kid' are huge hits with that age group.",
            textZh: "对不爱读书的孩子来说，图画小说和插图章节书效果很好。《Dog Man》和《小屁孩日记》在这个年龄段非常受欢迎。",
            keyPhrases: [
              { en: "reluctant reader", zh: "不爱读书的读者" },
              { en: "graphic novels", zh: "图画小说" },
              { en: "chapter books", zh: "章节书" },
            ],
            alternativeExpressions: [
              { textEn: "Graphic novels are the secret weapon for kids who don't love reading yet. Dog Man and Wimpy Kid are always winners.", textZh: "图画小说是让不爱看书的孩子入坑的秘密武器。Dog Man和小屁孩日记百试百灵。", actionHint: "推荐适合不爱读书孩子的书", frequency: "common" },
              { textEn: "Start with something visual — graphic novels get kids hooked. Dog Man is hilarious and Diary of a Wimpy Kid never fails.", textZh: "从有视觉冲击的开始——图画小说能让孩子上瘾。Dog Man很搞笑，小屁孩日记从不让人失望。", actionHint: "用吸引力策略推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "He likes dinosaurs and science. Is there something that combines fun reading with learning?",
            textZh: "他喜欢恐龙和科学。有没有既有趣又能学到东西的？",
          },
          {
            speaker: "them",
            role: "书店店员",
            textEn: "The 'Magic Tree House' series is perfect — it mixes adventure with real history and science. There's even one about dinosaurs! And the 'National Geographic Kids' books are fantastic for science lovers.",
            textZh: "《神奇树屋》系列很合适——冒险和真实的历史科学结合。甚至有一本关于恐龙的！还有《国家地理儿童版》对喜欢科学的孩子来说棒极了。",
            keyPhrases: [
              { en: "series", zh: "系列" },
              { en: "mixes adventure with", zh: "将冒险和……结合" },
            ],
            alternativeExpressions: [
              { textEn: "Magic Tree House is perfect for that — adventure plus real science and history. And there's a dinosaur one! Nat Geo Kids books are great too for a science-loving kid.", textZh: "神奇树屋系列太合适了——冒险加真实科学和历史。还有恐龙主题的！国家地理儿童版也很适合爱科学的孩子。", actionHint: "推荐寓教于乐的书", frequency: "common" },
              { textEn: "Oh, he'd love Magic Tree House! It's adventure stories with built-in learning — and they have a dinosaur book. National Geographic Kids is another great option for science fans.", textZh: "他肯定会爱神奇树屋！冒险故事里融入知识——还有恐龙主题的。国家地理儿童版也是科学迷的好选择。", actionHint: "结合兴趣精准推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What reading level are those? I want to make sure they're not too hard or too easy.",
            textZh: "那些是什么阅读等级的？我想确保不会太难或太简单。",
          },
          {
            speaker: "them",
            role: "书店店员",
            textEn: "Magic Tree House is rated for ages 6 to 10 — right in his range. The reading level is printed on the back cover. For an 8-year-old, look for levels 3 to 4.",
            textZh: "神奇树屋适合6到10岁——正好在他的范围内。阅读等级印在封底。8岁的孩子找3到4级的就行。",
            keyPhrases: [
              { en: "reading level", zh: "阅读等级" },
              { en: "rated for ages", zh: "适合……岁" },
              { en: "back cover", zh: "封底" },
            ],
            alternativeExpressions: [
              { textEn: "It's designed for ages 6 to 10, so right in his wheelhouse. Check the back for the reading level — 3 to 4 is perfect for an 8-year-old.", textZh: "设计给6到10岁的，正好在他的范围。看封底的阅读等级——8岁选3到4级最合适。", actionHint: "确认适龄范围", frequency: "common" },
              { textEn: "Magic Tree House fits ages 6 to 10. There's a reading level number on the back — for his age, look for level 3 or 4.", textZh: "神奇树屋适合6到10岁。封底有阅读等级编号——他这个年纪找3级或4级的。", actionHint: "教家长看阅读等级", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll get the dinosaur one from Magic Tree House and a National Geographic book. Can I also get a gift card in case he wants to pick his own?",
            textZh: "我买神奇树屋的恐龙那本和一本国家地理。我能再买一张礼品卡让他自己挑吗？",
          },
          {
            speaker: "them",
            role: "书店店员",
            textEn: "Great idea! Gift cards come in any amount from $10 up. We can put it in a fun envelope for kids.",
            textZh: "好主意！礼品卡从10美元起，金额随意。我们可以放在一个儿童专用的趣味信封里。",
            keyPhrases: [
              { en: "gift card", zh: "礼品卡" },
              { en: "any amount", zh: "任意金额" },
            ],
            alternativeExpressions: [
              { textEn: "Love that idea! Gift cards start at $10 — you pick the amount. And we've got cute kid-themed envelopes for them.", textZh: "好想法！礼品卡10美元起——金额您选。我们还有可爱的儿童主题信封。", actionHint: "热情推荐礼品卡", frequency: "common" },
              { textEn: "Smart! Our gift cards are available in any amount. We can dress it up in a kids' envelope to make it extra fun.", textZh: "聪明！礼品卡任意金额都有。可以放在儿童信封里让它更有趣。", actionHint: "说明灵活面额", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect, a $25 gift card please. Thank you for all the suggestions!",
            textZh: "好的，一张25美元的礼品卡。谢谢你的所有建议！",
          },
          {
            speaker: "them",
            role: "书店店员",
            textEn: "My pleasure! Getting kids excited about reading is the best thing. Your total is $38.97. Happy birthday to your nephew!",
            textZh: "我很高兴！让孩子爱上阅读是最好的事。一共38.97美元。祝你侄子生日快乐！",
            keyPhrases: [
              { en: "excited about reading", zh: "对阅读感兴趣" },
            ],
            alternativeExpressions: [
              { textEn: "That's what we love — helping kids fall in love with books! That'll be $38.97. Wish him a happy birthday from us!", textZh: "这就是我们最开心的事——帮孩子爱上书！一共38.97美元。替我们祝他生日快乐！", actionHint: "热情结账并祝福", frequency: "common" },
              { textEn: "There's nothing better than getting a kid hooked on reading! Your total comes to $38.97. He's going to love these!", textZh: "没有什么比让孩子迷上阅读更棒的了！一共38.97美元。他一定会喜欢的！", actionHint: "表达对阅读推广的热情", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 珠宝 ====================
  {
    id: "shopping-jewelry-browse",
    category: "shopping",
    titleZh: "珠宝店浏览选购",
    titleEn: "Browsing a Jewelry Store",
    description: "在珠宝店欣赏和选购项链、戒指、手链等首饰",
    otherRole: "珠宝顾问",
    otherRoleIcon: "💎",
    flows: [
      {
        id: "basic",
        titleZh: "选购项链",
        titleEn: "Shopping for a Necklace",
        description: "为自己或他人选购一条项链",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "珠宝顾问",
            textEn: "Welcome! Are you looking for something special today?",
            textZh: "欢迎光临！今天在找什么特别的吗？",
            keyPhrases: [
              { en: "something special", zh: "特别的东西" },
            ],
            alternativeExpressions: [
              { textEn: "Hi there, welcome in! Is there something particular I can help you find?", textZh: "您好，欢迎！有什么特别想找的吗？", actionHint: "珠宝店热情迎客", frequency: "common" },
              { textEn: "Good afternoon! Browsing or looking for something specific?", textZh: "下午好！随便看看还是有特定目标？", actionHint: "礼貌询问购物意图", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I'd like to buy a necklace as an anniversary gift for my wife.",
            textZh: "是的，我想买一条项链作为结婚纪念日礼物送给我太太。",
          },
          {
            speaker: "them",
            role: "珠宝顾问",
            textEn: "How lovely! Do you have a style in mind — something simple and elegant, or more statement-making?",
            textZh: "真好！您有什么风格想法吗——简约优雅的，还是比较抢眼的？",
            keyPhrases: [
              { en: "simple and elegant", zh: "简约优雅的" },
              { en: "statement-making", zh: "抢眼的/有存在感的" },
            ],
            alternativeExpressions: [
              { textEn: "That's so sweet! Are you thinking classic and understated, or something that really stands out?", textZh: "太甜了！您想要经典低调的，还是特别抢眼的？", actionHint: "了解风格偏好", frequency: "common" },
              { textEn: "What a lovely gift! Does she tend to wear simple, delicate pieces or bolder jewelry?", textZh: "很棒的礼物！她平时戴简约精致的还是比较大胆的首饰？", actionHint: "了解佩戴习惯", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Something elegant but not too flashy. She usually wears silver. What's my budget looking like for silver necklaces?",
            textZh: "优雅但不要太花哨的。她通常戴银饰。银项链大概什么价位？",
          },
          {
            speaker: "them",
            role: "珠宝顾问",
            textEn: "Our sterling silver necklaces range from $50 to $300. This pendant necklace with a small diamond is $180 and it's one of our most popular pieces.",
            textZh: "我们的纯银项链从50到300美元不等。这条小钻石吊坠项链180美元，是我们最受欢迎的款式之一。",
            keyPhrases: [
              { en: "sterling silver", zh: "纯银" },
              { en: "pendant", zh: "吊坠" },
              { en: "range from...to", zh: "从……到……不等" },
            ],
            alternativeExpressions: [
              { textEn: "Silver necklaces start at $50 and go up to $300. This diamond pendant at $180 is a bestseller — very elegant.", textZh: "银项链从50美元起，最高300。这条钻石吊坠180美元是畅销款——非常优雅。", actionHint: "介绍价格范围和热门款", frequency: "common" },
              { textEn: "We have sterling silver from $50 to $300. Let me show you this one — it's a small diamond pendant for $180. Our customers love it.", textZh: "纯银项链50到300美元。让我给您看这条——180美元的小钻石吊坠。顾客们都很喜欢。", actionHint: "展示推荐款", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's beautiful. What length is this chain?",
            textZh: "很漂亮。这条链子多长？",
          },
          {
            speaker: "them",
            role: "珠宝顾问",
            textEn: "This is 18 inches, which sits right at the collarbone. We also have 16-inch and 20-inch options if you'd prefer shorter or longer.",
            textZh: "这条18英寸，正好在锁骨位置。如果您想要短一点或长一点，还有16英寸和20英寸的选择。",
            keyPhrases: [
              { en: "18 inches", zh: "18英寸" },
              { en: "collarbone", zh: "锁骨" },
            ],
            alternativeExpressions: [
              { textEn: "It's 18 inches — falls right at the collarbone. We can do 16 or 20 if you'd like it shorter or longer.", textZh: "18英寸——正好落在锁骨。如果想短一点或长一点，16和20英寸的也有。", actionHint: "说明链长选项", frequency: "common" },
              { textEn: "This chain is 18 inches, which is the most popular length for pendants. But we also carry 16 and 20 inch chains.", textZh: "这条链子18英寸，是吊坠最受欢迎的长度。不过我们也有16和20英寸的。", actionHint: "推荐最受欢迎长度", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "18 inches should be perfect. I'll take it. Can you gift wrap it?",
            textZh: "18英寸应该刚好。我要这条。能包装成礼物吗？",
          },
          {
            speaker: "them",
            role: "珠宝顾问",
            textEn: "Absolutely. It comes in a beautiful jewelry box with a ribbon. We also include a certificate of authenticity and a 1-year warranty.",
            textZh: "当然。配有精美首饰盒和丝带。我们还附赠真品证书和一年保修。",
            keyPhrases: [
              { en: "jewelry box", zh: "首饰盒" },
              { en: "certificate of authenticity", zh: "真品证书" },
              { en: "warranty", zh: "保修" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! It comes gift-ready in a box with ribbon, plus a certificate of authenticity and one-year warranty.", textZh: "当然！配有精美礼盒和丝带，还有真品证书和一年保修。送礼直接就能送。", actionHint: "说明包含的配套服务", frequency: "common" },
              { textEn: "Sure thing. Every piece comes in our signature box with a ribbon, authenticity papers, and a warranty for a full year.", textZh: "没问题。每件首饰都配有我们的经典礼盒、丝带、真品证明和一年保修。", actionHint: "强调品牌服务", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "选购订婚戒指",
        titleEn: "Shopping for an Engagement Ring",
        description: "选购订婚戒指，了解钻石4C和不同款式",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'm looking for an engagement ring. I'm a bit nervous — I've never bought jewelry before.",
            textZh: "我想买一枚订婚戒指。有点紧张——我以前从没买过首饰。",
          },
          {
            speaker: "them",
            role: "珠宝顾问",
            textEn: "Don't worry, we'll walk you through everything! First, do you know her ring size?",
            textZh: "别担心，我们会一步步带您了解！首先，您知道她的戒指尺寸吗？",
            keyPhrases: [
              { en: "walk you through", zh: "一步步带您了解" },
              { en: "ring size", zh: "戒指尺寸" },
            ],
            alternativeExpressions: [
              { textEn: "No need to be nervous — I'll guide you step by step! Do you happen to know her ring size?", textZh: "不用紧张——我会一步步引导您！您知道她的戒指尺寸吗？", actionHint: "安抚顾客并开始引导", frequency: "common" },
              { textEn: "We're here to make this easy for you! First question — any idea what ring size she wears?", textZh: "我们会让这件事变得简单！第一个问题——知道她戴什么尺寸的戒指吗？", actionHint: "轻松开场降低紧张感", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I think it's a size 6, but I'm not 100% sure. Can it be resized?",
            textZh: "我觉得是6号，但不完全确定。可以改尺寸吗？",
            culturalNote: "不确定戒指尺寸时可以偷偷借对方的戒指来测量，或者买稍大的，之后免费改小。",
          },
          {
            speaker: "them",
            role: "珠宝顾问",
            textEn: "Yes, we offer free resizing within the first year. Now, for the diamond, you should know about the 4 C's — cut, color, clarity, and carat. What's your budget?",
            textZh: "可以的，一年内免费改尺寸。关于钻石，您需要了解4C——切工、颜色、净度和克拉数。您的预算是多少？",
            keyPhrases: [
              { en: "resizing", zh: "改尺寸" },
              { en: "4 C's", zh: "4C标准" },
              { en: "cut, color, clarity, carat", zh: "切工、颜色、净度、克拉" },
            ],
            alternativeExpressions: [
              { textEn: "No worries — we resize for free the first year. For the diamond, there are four things to consider: cut, color, clarity, and carat. What's your price range?", textZh: "没关系——第一年免费改尺寸。钻石要考虑四个方面：切工、颜色、净度和克拉。您的预算范围？", actionHint: "介绍4C并了解预算", frequency: "common" },
              { textEn: "Absolutely, free resizing anytime in the first year. Now let's talk diamonds — the big four are cut, color, clarity, and carat. How much are you looking to spend?", textZh: "当然，第一年随时免费改尺寸。现在聊钻石——关键四要素是切工、颜色、净度和克拉。您打算花多少？", actionHint: "专业引导选钻石", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Around $3,000 to $5,000. I want something that looks impressive but I don't need the biggest diamond.",
            textZh: "大概3000到5000美元。我想要看起来好看的，但不需要最大的钻石。",
          },
          {
            speaker: "them",
            role: "珠宝顾问",
            textEn: "Smart approach! A well-cut smaller diamond can look more brilliant than a larger one with a poor cut. I'd prioritize cut quality over size.",
            textZh: "聪明的想法！切工好的小钻石比切工差的大钻石看起来更闪亮。我建议切工质量优先于大小。",
            keyPhrases: [
              { en: "brilliant", zh: "闪亮的" },
              { en: "prioritize", zh: "优先考虑" },
              { en: "cut quality", zh: "切工质量" },
            ],
            alternativeExpressions: [
              { textEn: "That's the right way to think about it. Cut is king — a smaller stone with an excellent cut will outshine a bigger one with a mediocre cut.", textZh: "想法很对。切工是关键——切工优秀的小钻比切工一般的大钻更闪。", actionHint: "强调切工的重要性", frequency: "common" },
              { textEn: "You've got the right idea! Focus on cut first — it's what makes the diamond sparkle. Size is secondary to brilliance.", textZh: "想法很好！先看切工——这是让钻石闪耀的关键。大小比不上亮度重要。", actionHint: "专业建议选钻策略", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What about lab-grown diamonds? Are those a good option?",
            textZh: "人造钻石怎么样？是好选择吗？",
          },
          {
            speaker: "them",
            role: "珠宝顾问",
            textEn: "Lab-grown diamonds are chemically identical to natural ones and cost about 30 to 40% less. Many couples are choosing them now. Would you like to see both?",
            textZh: "人造钻石在化学成分上和天然钻石完全一样，价格便宜30%到40%。很多情侣现在都选择人造的。要两种都看看吗？",
            keyPhrases: [
              { en: "lab-grown", zh: "人造的/实验室培育的" },
              { en: "chemically identical", zh: "化学成分完全一样" },
            ],
            alternativeExpressions: [
              { textEn: "Lab diamonds are the same thing chemically — just made in a lab instead of the ground. They're 30 to 40 percent cheaper. Want to compare?", textZh: "人造钻石化学成分完全一样——只是在实验室里做的不是地里挖的。便宜30到40%。要比较一下吗？", actionHint: "客观介绍人造钻石", frequency: "common" },
              { textEn: "They're real diamonds — same sparkle, same hardness — just grown in a lab. You get a bigger stone for less money. Shall I show you some?", textZh: "它们是真钻——一样闪、一样硬——只是实验室培育的。同样的钱能买更大的。要我给您看看吗？", actionHint: "强调人造钻石的优势", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I'd like to compare. Can I see a few options in my budget?",
            textZh: "好的，我想比较一下。能看看我预算范围内的几个选择吗？",
          },
          {
            speaker: "them",
            role: "珠宝顾问",
            textEn: "Of course! Here are three options. This natural 0.7 carat is $4,200, and this lab-grown 1 carat with excellent cut is $3,800. Both come with GIA certification.",
            textZh: "当然！这是三个选择。这颗天然0.7克拉的4200美元，这颗人造1克拉优秀切工的3800美元。都附有GIA认证。",
            keyPhrases: [
              { en: "carat", zh: "克拉" },
              { en: "GIA certification", zh: "GIA认证" },
              { en: "excellent cut", zh: "优秀切工" },
            ],
            alternativeExpressions: [
              { textEn: "Let me pull out a few options. This natural 0.7 carat runs $4,200 and this lab-grown one-carat with a top cut is $3,800. Both are GIA certified.", textZh: "我拿几个选择出来。这颗天然0.7克拉4200美元，这颗人造1克拉顶级切工3800美元。都有GIA认证。", actionHint: "展示不同选择并对比", frequency: "common" },
              { textEn: "Here you go — three great choices in your range. Notice the lab-grown is actually bigger and cheaper than the natural, with an excellent cut and GIA papers.", textZh: "给您——您预算内三个好选择。注意人造的其实比天然的更大更便宜，切工优秀还有GIA证书。", actionHint: "突出性价比对比", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 珠宝定制 ====================
  {
    id: "shopping-jewelry-custom",
    category: "shopping",
    titleZh: "珠宝定制服务",
    titleEn: "Custom Jewelry Order",
    description: "在珠宝店定制专属饰品，沟通设计、材质、工期和价格",
    otherRole: "珠宝设计师",
    otherRoleIcon: "💎",
    flows: [
      {
        id: "basic",
        titleZh: "定制基本流程",
        titleEn: "Basic Custom Order",
        description: "第一次定制珠宝的标准沟通流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm interested in having a custom necklace made. Is that something you do here?",
            textZh: "你好，我想定制一条项链。你们这里可以做吗？",
          },
          {
            speaker: "them",
            role: "珠宝设计师",
            textEn: "Absolutely! We specialize in custom pieces. Do you have a design in mind, or would you like me to help you come up with something?",
            textZh: "当然可以！我们专门做定制的。您有设计想法吗，还是需要我帮您想一个？",
            keyPhrases: [
              { en: "custom pieces", zh: "定制作品" },
              { en: "design in mind", zh: "设计想法" },
            ],
            alternativeExpressions: [
              { textEn: "That's what we do best! Do you already have an idea, or would you like to brainstorm together?", textZh: "这是我们最擅长的！您已经有想法了，还是想一起想一想？", actionHint: "表达专业自信", frequency: "common" },
              { textEn: "We love custom work! Are you starting with a specific vision, or can I help you design something from scratch?", textZh: "我们很喜欢做定制！您有具体的想法了，还是我从头帮您设计？", actionHint: "热情接待定制需求", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have a rough idea. I'd like a gold pendant with my initials engraved on it.",
            textZh: "我有一个大概的想法。我想要一个金色吊坠，上面刻我的首字母。",
          },
          {
            speaker: "them",
            role: "珠宝设计师",
            textEn: "That sounds lovely. Would you prefer yellow gold, white gold, or rose gold? And for the chain, what length are you thinking?",
            textZh: "听起来很棒。您想要黄金、白金还是玫瑰金？链子的话，您想要多长的？",
            keyPhrases: [
              { en: "yellow gold", zh: "黄金" },
              { en: "white gold", zh: "白金" },
              { en: "rose gold", zh: "玫瑰金" },
              { en: "chain length", zh: "链子长度" },
            ],
            alternativeExpressions: [
              { textEn: "Beautiful idea! What kind of gold — yellow, white, or rose? And how long do you want the chain?", textZh: "好想法！想要什么金——黄金、白金还是玫瑰金？链子要多长？", actionHint: "确认材质和尺寸", frequency: "common" },
              { textEn: "Love it! We can do it in yellow, white, or rose gold. For the chain, most people go with 16 or 18 inches — what's your preference?", textZh: "很棒！可以做黄金、白金或玫瑰金。链子大多数人选16或18英寸——您喜欢哪种？", actionHint: "提供选项并建议", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Rose gold, please. I think 18 inches would be good. How long does it usually take?",
            textZh: "玫瑰金吧。我觉得18英寸就好。一般需要多久？",
          },
          {
            speaker: "them",
            role: "珠宝设计师",
            textEn: "For a custom pendant like this, it typically takes about three to four weeks. I'll create a sketch first for your approval before we start production.",
            textZh: "这样的定制吊坠通常需要三到四周。我会先画设计图给您确认，然后再开始制作。",
            keyPhrases: [
              { en: "three to four weeks", zh: "三到四周" },
              { en: "sketch", zh: "设计图" },
              { en: "approval", zh: "确认/批准" },
            ],
            alternativeExpressions: [
              { textEn: "Usually 3 to 4 weeks for something like this. I'll draw up a design first and send it over for your okay before we start making it.", textZh: "这类定制通常3到4周。我会先画好设计发给您确认，再开始制作。", actionHint: "说明制作周期和流程", frequency: "common" },
              { textEn: "Allow about a month. The process starts with a design sketch — once you approve it, we begin crafting. Nothing happens without your green light.", textZh: "大约一个月。流程从设计草图开始——您批准后我们才开始做。没有您的同意不会动手。", actionHint: "强调客户确认流程", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That works. What's the price range for something like this?",
            textZh: "可以。这样的大概多少钱？",
          },
          {
            speaker: "them",
            role: "珠宝设计师",
            textEn: "A 14-karat rose gold pendant with engraving would start around $350, depending on the size and complexity. The chain would be an additional $150 to $250.",
            textZh: "14K玫瑰金刻字吊坠大概350美元起，取决于大小和复杂度。链子另外150到250美元。",
            keyPhrases: [
              { en: "14-karat", zh: "14K" },
              { en: "start around", zh: "大约从……起" },
              { en: "depending on", zh: "取决于" },
            ],
            alternativeExpressions: [
              { textEn: "For 14K rose gold with engraving, you're looking at around $350 and up. The chain runs another $150 to $250 on top of that.", textZh: "14K玫瑰金刻字的话大概350美元起。链子另外加150到250美元。", actionHint: "透明报价", frequency: "common" },
              { textEn: "Ballpark for the pendant is $350 — could be more for a larger or more detailed design. A rose gold chain would add $150 to $250.", textZh: "吊坠大概350美元左右——如果更大或更复杂会多一些。玫瑰金链子另加150到250。", actionHint: "给出大致价格范围", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds reasonable. Do I need to pay a deposit upfront?",
            textZh: "听起来合理。需要先付定金吗？",
          },
          {
            speaker: "them",
            role: "珠宝设计师",
            textEn: "Yes, we require a 50% deposit to start the work, and the remaining balance is due when you pick it up. I'll also email you the design for approval within a week.",
            textZh: "是的，我们需要50%的定金才能开始制作，剩余的取货时付清。我会在一周内把设计图发邮件给您确认。",
            keyPhrases: [
              { en: "deposit", zh: "定金" },
              { en: "remaining balance", zh: "余款" },
              { en: "pick it up", zh: "取货" },
            ],
            alternativeExpressions: [
              { textEn: "We ask for half upfront and the rest when it's ready. I'll have the design to you by email within a week for your sign-off.", textZh: "我们先收一半定金，完成后付尾款。一周内把设计发到您邮箱给您确认。", actionHint: "说明付款和确认流程", frequency: "common" },
              { textEn: "A 50% deposit gets us started. You'll pay the balance when you come to pick it up. Expect the design mockup in your inbox within a week.", textZh: "50%定金就可以开工。取货时付余款。一周内设计稿会发到您邮箱。", actionHint: "清晰说明付款节奏", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "讨论材质与镶嵌",
        titleEn: "Materials & Stone Setting",
        description: "深入讨论宝石选择、镶嵌工艺和保养",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'd like to add a small gemstone to the pendant. What options do you have?",
            textZh: "我想在吊坠上加一颗小宝石。你们有什么选择？",
          },
          {
            speaker: "them",
            role: "珠宝设计师",
            textEn: "We have a wide selection. Diamonds are classic, but sapphires, rubies, and emeralds are popular too. Birthstones are a meaningful choice as well. When's your birthday?",
            textZh: "我们有很多选择。钻石是经典款，蓝宝石、红宝石和祖母绿也很受欢迎。生日石也很有意义。您的生日是什么时候？",
            keyPhrases: [
              { en: "sapphire", zh: "蓝宝石" },
              { en: "ruby", zh: "红宝石" },
              { en: "emerald", zh: "祖母绿" },
              { en: "birthstone", zh: "生日石" },
            ],
            alternativeExpressions: [
              { textEn: "Lots of options! Diamond is timeless, or you could go with a colored stone — sapphire, ruby, emerald. A birthstone adds a personal touch. When were you born?", textZh: "选择很多！钻石永不过时，也可以选彩色宝石——蓝宝石、红宝石、祖母绿。生日石更有个人意义。您什么时候生日？", actionHint: "展示多种宝石选择", frequency: "common" },
              { textEn: "We've got everything from diamonds to colored gems. Have you thought about a birthstone? It makes the piece extra special.", textZh: "从钻石到彩色宝石都有。考虑过生日石吗？会让这件饰品格外特别。", actionHint: "推荐有纪念意义的选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "September. So that would be sapphire, right? How much would adding one cost?",
            textZh: "九月。那就是蓝宝石，对吧？加一颗要多少钱？",
          },
          {
            speaker: "them",
            role: "珠宝设计师",
            textEn: "Yes, sapphire for September! A small natural sapphire would add about $200 to $400. We also have lab-created sapphires that look identical for about $80.",
            textZh: "没错，九月是蓝宝石！一颗小天然蓝宝石大概加200到400美元。我们也有人造蓝宝石，外观完全一样，大约80美元。",
            keyPhrases: [
              { en: "natural", zh: "天然的" },
              { en: "lab-created", zh: "人造的/实验室制造的" },
              { en: "look identical", zh: "看起来完全一样" },
            ],
            alternativeExpressions: [
              { textEn: "September is sapphire — great choice! A natural one adds $200 to $400. Lab-made sapphires are about $80 and you can't tell the difference.", textZh: "九月是蓝宝石——好选择！天然的加200到400美元。人造的大约80美元，看不出区别。", actionHint: "对比天然和人造宝石", frequency: "common" },
              { textEn: "Sapphire, yes! For a small natural stone, figure $200 to $400 extra. If you want to save, lab-created ones look exactly the same for around $80.", textZh: "对，蓝宝石！小颗天然的加200到400美元。想省钱的话，人造的外观完全一样，大概80美元。", actionHint: "提供不同预算选项", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with the natural one. What setting style would you recommend for a small stone?",
            textZh: "我选天然的。小宝石的话，你推荐什么镶嵌方式？",
          },
          {
            speaker: "them",
            role: "珠宝设计师",
            textEn: "For a small stone on a pendant, a bezel setting is great — it wraps the metal around the stone for extra protection. A prong setting shows more of the stone but is slightly less secure.",
            textZh: "吊坠上的小宝石，包镶很不错——金属包裹住宝石，更有保护性。爪镶能露出更多宝石，但稍微不那么牢固。",
            keyPhrases: [
              { en: "bezel setting", zh: "包镶" },
              { en: "prong setting", zh: "爪镶" },
              { en: "secure", zh: "牢固的" },
            ],
            alternativeExpressions: [
              { textEn: "Bezel is my top pick for a pendant — the metal frames the stone completely, so it's well protected. Prong settings show off more of the gem but aren't as sturdy.", textZh: "吊坠我首推包镶——金属完全框住宝石，保护很好。爪镶露出更多宝石但没那么牢固。", actionHint: "对比两种镶嵌方式", frequency: "common" },
              { textEn: "For daily wear on a pendant, go bezel — it protects the stone on all sides. Prongs let more light in but can catch on clothing.", textZh: "日常佩戴的吊坠选包镶——四面保护宝石。爪镶透光更好但可能挂到衣服。", actionHint: "从实用角度推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Bezel setting sounds safer. Will I need to bring it in for maintenance?",
            textZh: "包镶听起来更安全。以后需要拿回来保养吗？",
          },
          {
            speaker: "them",
            role: "珠宝设计师",
            textEn: "I recommend bringing it in once a year for a professional cleaning and inspection. We offer that service free of charge for all custom pieces. Avoid wearing it in the shower or pool — chemicals can dull the finish.",
            textZh: "我建议每年拿来做一次专业清洁和检查。所有定制作品我们免费提供这项服务。避免戴着洗澡或游泳——化学物质会让表面失去光泽。",
            keyPhrases: [
              { en: "professional cleaning", zh: "专业清洁" },
              { en: "inspection", zh: "检查" },
              { en: "free of charge", zh: "免费" },
              { en: "dull the finish", zh: "使表面失去光泽" },
            ],
            alternativeExpressions: [
              { textEn: "Bring it in once a year and we'll clean and check it for free. Just don't wear it in the shower or pool — chlorine and soap can damage the finish over time.", textZh: "每年拿来一次，我们免费清洁检查。洗澡和游泳别戴——氯和肥皂时间长了会损坏表面。", actionHint: "说明保养频率和注意事项", frequency: "common" },
              { textEn: "An annual cleaning keeps it looking new — that's a free service for our custom clients. Keep it dry though, especially around pools and hot tubs.", textZh: "每年做一次清洁能保持崭新——这是我们对定制客户的免费服务。注意不要碰水，尤其是泳池和温泉。", actionHint: "强调免费售后服务", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's very helpful. Let's go ahead with the rose gold pendant, bezel-set sapphire, and an 18-inch chain.",
            textZh: "非常有帮助。那就定玫瑰金吊坠、包镶蓝宝石、18英寸的链子。",
          },
          {
            speaker: "them",
            role: "珠宝设计师",
            textEn: "Wonderful choice! I'll draft the design and send it to you by Friday. Once you approve it, we'll start crafting. The total estimate is around $750 including everything.",
            textZh: "很棒的选择！我周五前把设计图发给您。您确认后我们就开始制作。总估价大约750美元，包含所有费用。",
            keyPhrases: [
              { en: "draft the design", zh: "画设计图" },
              { en: "total estimate", zh: "总估价" },
              { en: "start crafting", zh: "开始制作" },
            ],
            alternativeExpressions: [
              { textEn: "Love it! I'll have the design to you by Friday. After your approval, we start right away. Total is about $750 all in.", textZh: "太好了！周五前设计发给您。确认后马上开始做。全部大概750美元。", actionHint: "确认方案和总价", frequency: "common" },
              { textEn: "Beautiful combo! Expect the design sketch by end of week. Once you give the thumbs up, we'll get to work. Estimated total is $750.", textZh: "搭配很漂亮！周末前收到设计稿。您点头我们就开工。预估总价750美元。", actionHint: "确认下一步流程", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 奥特莱斯折扣 ====================
  {
    id: "shopping-outlet-discount",
    category: "shopping",
    titleZh: "奥特莱斯询问折扣",
    titleEn: "Outlet Store Discounts",
    description: "在奥特莱斯购物中心询问折扣、会员优惠和价格对比",
    otherRole: "奥特莱斯店员",
    otherRoleIcon: "🏷️",
    flows: [
      {
        id: "basic",
        titleZh: "基本折扣咨询",
        titleEn: "Basic Discount Inquiry",
        description: "了解奥特莱斯折扣机制的基本对话",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm new to outlet shopping. How do the discounts work here?",
            textZh: "你好，我第一次来奥特莱斯。这里的折扣是怎么算的？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Welcome! Everything in the store is already discounted 30% to 70% off the original retail price. The price on the tag is what you pay.",
            textZh: "欢迎！店里所有商品已经在原零售价基础上打了三到七折。标签上的价格就是您要付的价格。",
            keyPhrases: [
              { en: "original retail price", zh: "原零售价" },
              { en: "30% to 70% off", zh: "打三到七折" },
              { en: "tag", zh: "标签" },
            ],
            alternativeExpressions: [
              { textEn: "Hi, welcome! Everything's already marked down 30 to 70 percent from regular stores. What you see on the tag is the final price.", textZh: "你好，欢迎！所有商品已经比正价店便宜30%到70%。标签上的就是最终价格。", actionHint: "解释奥特莱斯折扣机制", frequency: "common" },
              { textEn: "Welcome to the outlet! All prices here are already slashed — 30 to 70 percent below retail. No math needed, just check the price tag!", textZh: "欢迎来到奥特莱斯！这里所有价格都已经大幅降价——比零售价低30到70%。不用算，看标签就行！", actionHint: "热情介绍折扣力度", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's great. Are there any additional sales going on right now?",
            textZh: "太好了。现在还有额外的促销活动吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes! This weekend we have an extra 20% off on items with a red dot sticker. And if you spend over $200, you get an additional 10% off your entire purchase.",
            textZh: "有的！这个周末红点贴纸的商品额外八折。消费满200美元，全单再打九折。",
            keyPhrases: [
              { en: "extra 20% off", zh: "额外八折" },
              { en: "red dot sticker", zh: "红点贴纸" },
              { en: "entire purchase", zh: "全单" },
            ],
            alternativeExpressions: [
              { textEn: "You picked a great weekend! Red dot items get an extra 20 percent off, and spend $200 or more and you save another 10 percent on everything.", textZh: "您选了个好周末！红点商品额外打八折，消费满200还能全单再打九折。", actionHint: "强调本周特别优惠", frequency: "common" },
              { textEn: "Great timing! Look for the red dots — those are an extra 20% off. Plus there's a spending bonus: $200 and up gets you 10% off the total.", textZh: "来得正好！找红点标签的——额外八折。还有消费奖励：满200全单再九折。", actionHint: "详细说明叠加优惠", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I combine the red dot discount with the $200 discount?",
            textZh: "红点折扣和满200的折扣可以叠加吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes, they stack! The red dot discount applies first, and then the 10% comes off the new total. It's a really good deal.",
            textZh: "可以叠加的！先算红点折扣，然后在新总价上再打九折。非常划算。",
            keyPhrases: [
              { en: "stack", zh: "叠加" },
              { en: "applies first", zh: "先计算" },
              { en: "good deal", zh: "划算" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, they combine! Red dot discount first, then the 10% off the total after that. It adds up to some serious savings.", textZh: "可以叠加！先算红点折扣，再在总价上打九折。加起来省很多。", actionHint: "确认折扣可叠加", frequency: "common" },
              { textEn: "Absolutely — both discounts work together. The 20% comes off first, then you get 10% off whatever's left. Great value!", textZh: "当然——两个折扣一起生效。先减20%，然后剩余部分再打九折。超划算！", actionHint: "解释计算方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do you have a mailing list I can sign up for to get notified about future sales?",
            textZh: "有邮件列表可以订阅吗？我想知道以后的促销活动。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Absolutely. You can sign up at the register or scan the QR code by the entrance. New subscribers get a one-time 15% off coupon too.",
            textZh: "当然可以。您可以在收银台注册，或者扫描入口处的二维码。新订阅用户还有一张15%折扣的一次性优惠券。",
            keyPhrases: [
              { en: "mailing list", zh: "邮件列表" },
              { en: "subscriber", zh: "订阅用户" },
              { en: "one-time coupon", zh: "一次性优惠券" },
            ],
            alternativeExpressions: [
              { textEn: "For sure! Sign up at checkout or scan the code by the door. You'll get a welcome coupon for 15% off right away.", textZh: "当然！结账时注册或扫门口的二维码。马上就能拿到15%的欢迎优惠券。", actionHint: "介绍注册方式和新人优惠", frequency: "common" },
              { textEn: "Yes! There's a QR code at the entrance, or we can sign you up right here. First-time subscribers get 15% off today's purchase.", textZh: "有的！入口有二维码，或者在这里帮您注册。新订阅用户今天购物就能享15%折扣。", actionHint: "主动帮忙注册", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect, I'll do that. Thanks for explaining everything!",
            textZh: "好的，我去注册。谢谢你的介绍！",
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "比价与退换货政策",
        titleEn: "Price Comparison & Return Policy",
        description: "奥特莱斯与正价店比价，了解退换货规则",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I saw this same jacket at the regular store for $180. How much is it here?",
            textZh: "我在正价店看到同款夹克卖180美元。这里多少钱？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "That one is $89 here. Keep in mind though, some outlet items are made specifically for outlets — they may have slight differences from the mainline version.",
            textZh: "这件这里卖89美元。不过请注意，有些奥特莱斯的商品是专门为奥特莱斯生产的——可能跟正价店的版本有细微差别。",
            keyPhrases: [
              { en: "made specifically for outlets", zh: "专为奥特莱斯生产的" },
              { en: "mainline version", zh: "正价店版本" },
              { en: "slight differences", zh: "细微差别" },
            ],
            alternativeExpressions: [
              { textEn: "It's $89 here — big savings. Just so you know, some outlet pieces are made just for outlets, so they might differ slightly from the regular store version.", textZh: "这里89美元——省不少。跟您说一下，有些奥特莱斯商品是专门生产的，跟正价店的可能有一点不同。", actionHint: "诚实告知价差和差异", frequency: "common" },
              { textEn: "Here it's only $89. Fair warning though — not all outlet items are the same as what's in full-price stores. Some are outlet-exclusive.", textZh: "这里只要89美元。不过提醒一下——不是所有奥特莱斯商品都跟正价店一样。有些是专供的。", actionHint: "透明告知区别", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How can I tell if it's outlet-exclusive or from the regular line?",
            textZh: "怎么分辨是奥特莱斯专供的还是正价店转过来的？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Check the label inside. If it has three dots or a small diamond symbol, it was made for outlets. Items from the regular store usually have the standard label with no extra markings.",
            textZh: "看里面的标签。如果有三个点或一个小菱形符号，就是专为奥特莱斯做的。正价店转来的通常是标准标签，没有额外标记。",
            keyPhrases: [
              { en: "label", zh: "标签" },
              { en: "outlet-exclusive", zh: "奥特莱斯专供" },
              { en: "markings", zh: "标记" },
            ],
            alternativeExpressions: [
              { textEn: "Look at the inside tag — outlet-made items usually have a small symbol like dots or a diamond. Regular-line stuff has a clean label.", textZh: "看里面的标签——奥特莱斯专供的通常有小符号比如点或菱形。正价线的标签是干净的。", actionHint: "教辨别方法", frequency: "common" },
              { textEn: "Flip the label — if you see dots or a little diamond shape, it's outlet-exclusive. No markings means it came from the regular stores.", textZh: "翻开标签——如果看到点或小菱形就是奥特莱斯专供。没有标记说明是正价店转过来的。", actionHint: "详细说明辨识技巧", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. What's your return policy for outlet purchases?",
            textZh: "好的，了解了。奥特莱斯的退换货政策是什么？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "You can return items within 30 days with the receipt for a full refund. After 30 days, we can only offer store credit. Sale items marked 'final sale' cannot be returned.",
            textZh: "30天内凭小票可以全额退款。超过30天只能换成店铺积分。标注'final sale'的打折商品不能退。",
            keyPhrases: [
              { en: "full refund", zh: "全额退款" },
              { en: "store credit", zh: "店铺积分" },
              { en: "final sale", zh: "最终销售（不可退）" },
              { en: "receipt", zh: "小票/收据" },
            ],
            alternativeExpressions: [
              { textEn: "30 days with receipt for a full refund. After that, we do store credit. Just watch out for anything marked final sale — those are non-returnable.", textZh: "30天内凭收据全额退款。之后只能给店铺积分。注意标了final sale的不能退。", actionHint: "清晰说明退换政策", frequency: "common" },
              { textEn: "Keep your receipt — you've got 30 days for a full refund. Past that, it's store credit only. And heads up, final sale items are as-is.", textZh: "留好收据——30天内全额退款。超过就只能换积分了。另外final sale的商品不退不换。", actionHint: "提醒保留收据", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I return an outlet purchase at a regular store location?",
            textZh: "奥特莱斯买的东西可以在正价店退吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Unfortunately, no. Outlet purchases can only be returned at outlet locations. But you can do it at any of our outlet stores nationwide, not just this one.",
            textZh: "很遗憾不行。奥特莱斯买的东西只能在奥特莱斯退。但全国任何一家我们的奥特莱斯都可以，不限这家。",
            keyPhrases: [
              { en: "outlet locations", zh: "奥特莱斯门店" },
              { en: "nationwide", zh: "全国范围" },
            ],
            alternativeExpressions: [
              { textEn: "Sorry, outlet purchases have to go back to an outlet. But any of our outlet locations across the country will take it.", textZh: "抱歉，奥特莱斯买的只能退到奥特莱斯。但全国任何一家门店都可以。", actionHint: "说明退货限制", frequency: "common" },
              { textEn: "Not at regular stores, no. But the good news is you can return it at any outlet in the country — doesn't have to be this one.", textZh: "正价店不行。但好消息是全国任何一家奥特莱斯都能退——不一定非来这家。", actionHint: "提供灵活退货选项", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Do you offer tax-free shopping for international visitors?",
            textZh: "明白了。你们给外国游客提供免税购物吗？",
            culturalNote: "部分州（如Oregon、Montana等）本身没有消费税。其他州的奥特莱斯通常不直接免税，但可能有退税服务。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "We don't do tax-free directly, but there's a tax refund kiosk at the mall's guest services. Bring your passport, receipts, and the purchased items. They'll help you process the refund before you leave the country.",
            textZh: "我们不直接免税，但商场服务台有退税机。带上护照、小票和购买的商品，他们会帮您在离境前办理退税。",
            keyPhrases: [
              { en: "tax refund kiosk", zh: "退税机" },
              { en: "guest services", zh: "服务台" },
              { en: "process the refund", zh: "办理退税" },
            ],
            alternativeExpressions: [
              { textEn: "Not directly from us, but the mall has a tax refund desk at guest services. Just bring your passport and receipts — they'll handle the rest.", textZh: "我们这里不直接办，但商场服务台有退税柜台。带上护照和小票——他们会搞定的。", actionHint: "指引退税服务位置", frequency: "common" },
              { textEn: "We can't do tax-free at the register, but there's a refund kiosk downstairs. Hang on to your receipts and passport — you'll need both to claim the refund.", textZh: "收银台这里不能免税，但楼下有退税机。留好收据和护照——办退税两样都需要。", actionHint: "详细说明退税流程", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 奥特莱斯品牌 ====================
  {
    id: "shopping-outlet-brand",
    category: "shopping",
    titleZh: "奥特莱斯选购品牌",
    titleEn: "Outlet Brand Shopping",
    description: "在奥特莱斯品牌店选购商品，比较款式、尺码和搭配建议",
    otherRole: "品牌店员",
    otherRoleIcon: "👔",
    flows: [
      {
        id: "basic",
        titleZh: "选购品牌服饰",
        titleEn: "Choosing Brand Apparel",
        description: "在品牌奥特莱斯店选购衣服的基本流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm looking for a casual jacket. What do you have in medium?",
            textZh: "你好，我想找一件休闲夹克。中号的有什么？",
          },
          {
            speaker: "them",
            role: "品牌店员",
            textEn: "We have a few styles! This lightweight bomber is very popular, and this quilted jacket is great for layering. What's the occasion?",
            textZh: "我们有几款！这件轻薄飞行员夹克非常受欢迎，这件绗缝夹克很适合叠穿。什么场合穿？",
            keyPhrases: [
              { en: "bomber", zh: "飞行员夹克" },
              { en: "quilted", zh: "绗缝的" },
              { en: "layering", zh: "叠穿" },
            ],
            alternativeExpressions: [
              { textEn: "A few options in medium! This bomber is a hot seller, and this quilted one layers really well. What are you planning to wear it for?", textZh: "中号有几款！这件飞行员夹克卖得很火，绗缝的叠穿效果很好。您打算什么时候穿？", actionHint: "展示选项并了解用途", frequency: "common" },
              { textEn: "Great taste! We've got a bomber that's really popular and a quilted jacket that's perfect for cooler days. What kind of look are you going for?", textZh: "好品味！有一件很受欢迎的飞行员夹克和一件凉爽天气穿的绗缝夹克。您想要什么风格？", actionHint: "根据场合推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Just everyday casual wear. I like the bomber. Can I try it on?",
            textZh: "就是日常穿。我喜欢飞行员夹克。我可以试穿吗？",
          },
          {
            speaker: "them",
            role: "品牌店员",
            textEn: "Of course! The fitting rooms are in the back. I should mention, this brand runs a bit small, so you might want to try a large as well.",
            textZh: "当然可以！试衣间在后面。提醒一下，这个品牌偏小，您可能也想试试大号。",
            keyPhrases: [
              { en: "fitting rooms", zh: "试衣间" },
              { en: "runs a bit small", zh: "偏小" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! Fitting rooms are right in the back. Just a heads-up — this brand tends to run small. Grab a large to try too.", textZh: "好的！试衣间在后面。提醒一下——这个牌子偏小。拿个大号一起试试。", actionHint: "提醒尺码偏差", frequency: "common" },
              { textEn: "Go ahead — changing rooms are in the back corner. Quick tip: this brand sizes a little smaller than most, so take a large just in case.", textZh: "请——更衣室在后面角落。小贴士：这个牌子比大多数偏小，拿个大号以防万一。", actionHint: "贴心的尺码建议", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good tip, thanks. I'll try both. How much is this one?",
            textZh: "好建议，谢谢。两个都试试。这件多少钱？",
          },
          {
            speaker: "them",
            role: "品牌店员",
            textEn: "It's marked down from $120 to $69. And with our current promotion, you can get an extra 20% off at the register.",
            textZh: "从120美元降到69美元。加上我们现在的促销活动，结账时还能再八折。",
            keyPhrases: [
              { en: "marked down", zh: "降价" },
              { en: "at the register", zh: "在收银台" },
            ],
            alternativeExpressions: [
              { textEn: "It was $120, now $69. Plus there's an extra 20 percent off when you check out — so even cheaper!", textZh: "原价120，现在69。结账时还有额外八折——更便宜！", actionHint: "强调折上折优惠", frequency: "common" },
              { textEn: "Already reduced from $120 to $69. And we're running a promo right now — another 20% comes off at the register.", textZh: "已经从120降到69了。而且现在有活动——收银台再减20%。", actionHint: "层层递进说折扣", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "So that would be about $55? That's a great deal.",
            textZh: "那大概55美元？真划算。",
          },
          {
            speaker: "them",
            role: "品牌店员",
            textEn: "Exactly! Plus, if you sign up for our rewards program today, you'll get another $10 off your first purchase.",
            textZh: "没错！而且如果您今天注册我们的会员，首次购买还能再减10美元。",
            keyPhrases: [
              { en: "rewards program", zh: "会员计划" },
              { en: "first purchase", zh: "首次购买" },
            ],
            alternativeExpressions: [
              { textEn: "That's right! And here's the best part — sign up for rewards today and knock another $10 off.", textZh: "没错！最棒的是——今天注册会员还能再减10美元。", actionHint: "推销会员注册", frequency: "common" },
              { textEn: "Yep, great deal! Want to save even more? Our rewards program takes $10 off if you sign up right now.", textZh: "对，很划算！想省更多吗？现在注册会员再减10美元。", actionHint: "进一步推荐省钱方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, I'll sign up. Let me try these on first.",
            textZh: "好的，我注册。先让我试穿一下。",
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "搭配建议与尺码",
        titleEn: "Styling Advice & Sizing",
        description: "请店员提供搭配建议和解决尺码问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "The medium fits well. Can you suggest what to wear with this jacket?",
            textZh: "中号很合适。能建议一下这件夹克搭配什么穿吗？",
          },
          {
            speaker: "them",
            role: "品牌店员",
            textEn: "This bomber looks great over a plain white tee with dark jeans. For a slightly dressier look, try it with a button-down shirt and chinos.",
            textZh: "这件飞行员夹克搭白T恤和深色牛仔裤很好看。稍微正式一点的话，可以搭纽扣衬衫和卡其裤。",
            keyPhrases: [
              { en: "plain white tee", zh: "白色纯色T恤" },
              { en: "button-down shirt", zh: "纽扣衬衫" },
              { en: "chinos", zh: "卡其裤" },
              { en: "dressier", zh: "更正式的" },
            ],
            alternativeExpressions: [
              { textEn: "Pair it with a white tee and dark jeans for a casual vibe. Or dress it up a bit with a collared shirt and khakis.", textZh: "配白T恤和深色牛仔裤走休闲风。或者搭有领衬衫和卡其裤正式一点。", actionHint: "给出搭配建议", frequency: "common" },
              { textEn: "Keep it simple — white t-shirt, dark denim, done. If you want to look a little sharper, swap the tee for a button-down.", textZh: "简简单单——白T恤、深色牛仔裤就搞定。想看起来更精致就把T恤换成有扣衬衫。", actionHint: "提供休闲和正式两种搭配", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds good. Do you have those chinos here? I usually wear a 32 waist.",
            textZh: "听起来不错。你们这里有那种卡其裤吗？我通常穿32腰。",
          },
          {
            speaker: "them",
            role: "品牌店员",
            textEn: "Yes! We have slim fit and regular fit. In this brand, the slim fit 32 is like a true 31, so I'd suggest trying a 33 in slim or a 32 in regular.",
            textZh: "有的！有修身款和常规款。这个品牌的修身款32相当于实际31，所以建议修身试33的，常规试32的。",
            keyPhrases: [
              { en: "slim fit", zh: "修身款" },
              { en: "regular fit", zh: "常规款" },
              { en: "true 31", zh: "实际31" },
            ],
            alternativeExpressions: [
              { textEn: "We do! Slim and regular cuts. Fair warning — the slim runs tight. Go up a size in slim, or stick with your usual in regular.", textZh: "有！修身和常规两种版型。提醒一下——修身的偏紧。修身选大一号，常规按正常号码来。", actionHint: "提醒尺码偏差", frequency: "common" },
              { textEn: "Both! The slim fit 32 fits more like a 31, so I'd grab a 33 in slim. The regular 32 should be true to size.", textZh: "两种都有！修身32穿着像31，建议拿33。常规32的尺码是准的。", actionHint: "具体尺码建议", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "American sizing is so confusing. In my country, I'm usually a medium. Is there a size chart?",
            textZh: "美国尺码太让人困惑了。在我国家我通常穿M。有尺码表吗？",
            culturalNote: "美国的裤子尺码通常用腰围英寸数标注（如30、32、34），与亚欧的S/M/L体系不同。",
          },
          {
            speaker: "them",
            role: "品牌店员",
            textEn: "Totally understandable! There's a size chart on the wall right there. Generally, a 32 waist corresponds to a medium in most international sizing. But trying on is always the best way to be sure.",
            textZh: "完全理解！墙上有尺码对照表。一般来说，32腰对应大多数国际尺码的M。但试穿永远是最靠谱的。",
            keyPhrases: [
              { en: "size chart", zh: "尺码对照表" },
              { en: "corresponds to", zh: "对应" },
              { en: "international sizing", zh: "国际尺码" },
            ],
            alternativeExpressions: [
              { textEn: "No worries — American sizing trips everyone up! Check the chart on the wall. A 32 waist is usually a medium internationally, but try them on to be safe.", textZh: "没关系——美国尺码谁都觉得晕！看墙上的对照表。32腰一般相当于国际的M，但试穿最保险。", actionHint: "理解困惑并提供帮助", frequency: "common" },
              { textEn: "I get that a lot! There's a conversion chart right there. Roughly, a 32 equals a medium. But every brand fits a bit different, so definitely try before you buy.", textZh: "经常有人这么问！那边有换算表。大概32等于M。但每个品牌有差异，一定要试穿再买。", actionHint: "提供换算参考", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll try both. Also, can these be hemmed if the length isn't right?",
            textZh: "两条都试试。如果长度不对，可以改裤脚吗？",
          },
          {
            speaker: "them",
            role: "品牌店员",
            textEn: "We don't offer alterations in-store, but there's a tailor shop two doors down that does quick hems for about $12. Most people go there.",
            textZh: "我们店里不提供改衣服务，但隔两个门有一家裁缝店，改裤脚大概12美元，很快就好。大多数人都去那里。",
            keyPhrases: [
              { en: "alterations", zh: "改衣服务" },
              { en: "tailor shop", zh: "裁缝店" },
              { en: "hems", zh: "裤脚/下摆" },
            ],
            alternativeExpressions: [
              { textEn: "We don't do alterations here, but there's a great tailor just two shops over. They charge about $12 for a hem — super quick.", textZh: "我们这里不改衣服，但隔两家店有个好裁缝。改裤脚大概12美元——很快。", actionHint: "推荐附近裁缝店", frequency: "common" },
              { textEn: "No in-house tailoring, sorry. But the tailor right down the hall does hems for about $12 and most of our customers use them.", textZh: "店里没有改衣服务，不好意思。但走廊那边的裁缝改裤脚大概12美元，我们很多顾客都去那。", actionHint: "指引就近裁缝服务", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. I'll take the jacket and the chinos. Can you ring me up?",
            textZh: "了解了。我要这件夹克和卡其裤。可以帮我结账吗？",
          },
          {
            speaker: "them",
            role: "品牌店员",
            textEn: "Sure thing! With the promotion and your new member discount, your total comes to $78.40. Would you like a bag, or are you okay carrying them?",
            textZh: "好的！加上促销和新会员折扣，一共78.40美元。需要袋子吗，还是直接拿着？",
            keyPhrases: [
              { en: "ring me up", zh: "结账" },
              { en: "total comes to", zh: "一共是" },
            ],
            alternativeExpressions: [
              { textEn: "Coming right up! With all your discounts, that's $78.40. Need a bag for those?", textZh: "马上帮您结！算上所有折扣一共78.40美元。需要袋子吗？", actionHint: "快速结账报总价", frequency: "common" },
              { textEn: "All set! Promo plus new member discount brings it to $78.40. Want me to bag these up for you?", textZh: "搞定！促销加新会员折扣一共78.40美元。要我帮您装袋吗？", actionHint: "确认折扣后的总价", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 线上下单到店取货 ====================
  {
    id: "shopping-online-pickup-issues",
    category: "shopping",
    titleZh: "线上下单到店取货",
    titleEn: "Online Order Store Pickup",
    description: "在商店取之前线上下单的商品，处理身份验证和订单问题",
    otherRole: "取货处店员",
    otherRoleIcon: "📦",
    flows: [
      {
        id: "basic",
        titleZh: "标准取货流程",
        titleEn: "Standard Pickup Process",
        description: "顺利取到线上订单的基本流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm here to pick up an online order. Where should I go?",
            textZh: "你好，我来取网上下的订单。我该去哪里？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Online pickups are right here at the customer service desk. Can I have your order number or the name on the order?",
            textZh: "线上取货就在这里，客服台。请问您的订单号或者下单姓名是什么？",
            keyPhrases: [
              { en: "online pickup", zh: "线上取货" },
              { en: "customer service desk", zh: "客服台" },
              { en: "order number", zh: "订单号" },
            ],
            alternativeExpressions: [
              { textEn: "You're in the right spot! What's your order number or the name it's under?", textZh: "来对地方了！您的订单号是什么，或者用什么名字下的单？", actionHint: "确认取货信息", frequency: "common" },
              { textEn: "This is the pickup counter! Just need your order number or last name and I'll grab it for you.", textZh: "这里就是取货台！给我订单号或姓就行，我去帮您拿。", actionHint: "快速协助取货", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The order number is TB-78234. It should be under the name Wayne.",
            textZh: "订单号是TB-78234。应该在Wayne名下。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Got it, let me pull that up. I see your order — two items. Can I see a photo ID to verify?",
            textZh: "好的，让我查一下。找到了您的订单——两件商品。能看一下您的证件验证一下吗？",
            keyPhrases: [
              { en: "pull that up", zh: "查一下" },
              { en: "photo ID", zh: "带照片的证件" },
              { en: "verify", zh: "验证" },
            ],
            alternativeExpressions: [
              { textEn: "Let me look that up... Found it — two items in your order. Just need to see your ID for verification.", textZh: "我查一下……找到了——您订了两件。看一下证件做个验证就行。", actionHint: "查找订单并核实身份", frequency: "common" },
              { textEn: "Here it is — order for two items. Do you have a driver's license or passport I can check real quick?", textZh: "找到了——两件商品的订单。能让我快速看一下驾照或护照吗？", actionHint: "请求身份验证", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, here's my passport.",
            textZh: "好的，这是我的护照。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Perfect, that matches. Let me grab your items from the back. It'll just be a moment.",
            textZh: "好的，信息一致。我去后面拿您的东西，稍等一下。",
            keyPhrases: [
              { en: "matches", zh: "信息一致" },
              { en: "grab your items", zh: "拿您的东西" },
            ],
            alternativeExpressions: [
              { textEn: "Everything checks out! Let me go get your order. Be right back.", textZh: "信息核对好了！我去拿您的订单。马上回来。", actionHint: "验证通过去取货", frequency: "common" },
              { textEn: "Looks good — ID matches the order. Give me one second to grab your stuff from the stockroom.", textZh: "没问题——证件和订单一致。稍等我去库房拿您的东西。", actionHint: "确认身份后去取货", frequency: "occasional" },
            ],
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Here you go! Would you like to open the box and check the items before you leave?",
            textZh: "给您！您要在离开前打开检查一下吗？",
            keyPhrases: [
              { en: "check the items", zh: "检查商品" },
            ],
            alternativeExpressions: [
              { textEn: "Here's your order! Want to take a quick look to make sure everything's right before you head out?", textZh: "您的订单来了！走之前要快速看一下确认没问题吗？", actionHint: "递交并建议检查", frequency: "common" },
              { textEn: "All yours! I'd recommend opening it up to double-check — just in case there's an issue.", textZh: "给您！建议打开看看——以防有问题。", actionHint: "主动建议验货", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, let me take a quick look. Everything looks good. Thank you!",
            textZh: "好的，让我快速看一下。都没问题。谢谢！",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Great! You should receive a confirmation email shortly. If you have any issues, you can return the items within 30 days. Have a good day!",
            textZh: "好的！您很快会收到确认邮件。如果有任何问题，30天内可以退货。祝您愉快！",
            keyPhrases: [
              { en: "confirmation email", zh: "确认邮件" },
              { en: "return the items", zh: "退货" },
            ],
            alternativeExpressions: [
              { textEn: "You'll get a confirmation email any minute. Remember, you've got 30 days if anything's not right. Enjoy!", textZh: "确认邮件马上就到。记住30天内有问题都能退。好好享用！", actionHint: "提醒退货政策并告别", frequency: "common" },
              { textEn: "Perfect — a confirmation email is on its way. Any problems at all, bring it back within 30 days. Have a great day!", textZh: "好的——确认邮件已经在路上了。有任何问题30天内拿回来。祝您愉快！", actionHint: "完成取货流程", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "取货遇到问题",
        titleEn: "Pickup Issues",
        description: "取货时遇到缺货、订单错误等问题的处理",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "店员",
            textEn: "I found your order, but it looks like one of the two items is out of stock. I'm sorry about that — the blue sweater in size large isn't available.",
            textZh: "我找到了您的订单，但两件商品中有一件缺货了。很抱歉——大号蓝色毛衣没有了。",
            keyPhrases: [
              { en: "out of stock", zh: "缺货" },
              { en: "isn't available", zh: "没有了" },
            ],
            alternativeExpressions: [
              { textEn: "I've got your order here, but unfortunately one item sold out — the blue sweater in large. I'm really sorry about that.", textZh: "您的订单在这里，但很遗憾有一件卖光了——大号蓝色毛衣。真的很抱歉。", actionHint: "坦诚告知缺货情况", frequency: "common" },
              { textEn: "So I found the order, but there's a problem — the large blue sweater is no longer in stock. I apologize for the inconvenience.", textZh: "订单找到了，但有个问题——大号蓝色毛衣已经没有了。给您添麻烦了非常抱歉。", actionHint: "道歉并说明情况", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh no. Was I charged for it? What are my options?",
            textZh: "啊，那已经扣款了吗？我有什么选择？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "You were charged, but we can refund that item immediately. Alternatively, I can check if another store nearby has it in stock, or we can ship it to your address for free.",
            textZh: "已经扣了，但我们可以立即退款。或者我可以查一下附近其他门店有没有货，也可以免费寄到您的地址。",
            keyPhrases: [
              { en: "refund", zh: "退款" },
              { en: "ship it to your address", zh: "寄到您的地址" },
              { en: "for free", zh: "免费" },
            ],
            alternativeExpressions: [
              { textEn: "You were billed for it, but I can process a refund right now. Or I can check other locations, or we'll ship it to you free of charge.", textZh: "已经扣款了，但我现在就能退。或者我查查其他门店，也可以免费给您邮寄过去。", actionHint: "提供多种解决方案", frequency: "common" },
              { textEn: "The charge went through, but we have options. I can refund it, find it at another store, or have it delivered to your door — no shipping cost.", textZh: "款已经扣了，但有几种方案。我可以退款、帮您在其他店找，或者免费送到您家。", actionHint: "主动提供解决办法", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Could you check nearby stores first? I'd rather pick it up than wait for shipping.",
            textZh: "能先查一下附近门店吗？我宁愿去取，不想等快递。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Let me check... The store on Fifth Street has it in stock. It's about 15 minutes from here. I can have them hold it for you until closing time.",
            textZh: "我查一下……第五街的门店有货。离这里大概15分钟。我可以让他们帮您留到关门。",
            keyPhrases: [
              { en: "hold it for you", zh: "帮您留着" },
              { en: "closing time", zh: "关门时间" },
            ],
            alternativeExpressions: [
              { textEn: "Checking now... Good news — the Fifth Street location has it! It's a 15-minute drive. I'll ask them to set it aside for you.", textZh: "正在查……好消息——第五街那家有！开车15分钟。我让他们帮您留着。", actionHint: "帮忙查其他门店库存", frequency: "common" },
              { textEn: "Found it! The store on Fifth Street has one in stock. Want me to call and have them hold it? They close at 9.", textZh: "找到了！第五街的店有货。要我打电话让他们留着吗？他们9点关门。", actionHint: "主动协调帮忙", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That works. Can I use the same order, or do I need to pay again there?",
            textZh: "可以。我可以用同一个订单吗，还是到那边要重新付款？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "I'll transfer the order to that store. Just show them the same order number and your ID. No additional payment needed since you've already been charged.",
            textZh: "我把订单转到那家店。您只要出示同一个订单号和证件就行。不需要额外付款，因为已经扣过了。",
            keyPhrases: [
              { en: "transfer the order", zh: "转单" },
              { en: "no additional payment", zh: "不需要额外付款" },
            ],
            alternativeExpressions: [
              { textEn: "I'll move the order over for you. Same order number, same ID — no need to pay again.", textZh: "我帮您把订单转过去。同样的订单号和证件——不用再付款。", actionHint: "说明转单流程", frequency: "common" },
              { textEn: "Done — I'm transferring it now. When you get there, just give them your order number and show your ID. Everything's already paid for.", textZh: "好了——我正在转。到那以后给他们订单号和看一下证件就行。都已经付过款了。", actionHint: "确认已处理好转单", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. And the other item I can take now, right?",
            textZh: "好的。另一件我现在可以拿走吧？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes, here's your other item. I've also added a 10% discount code to your account as an apology for the inconvenience. You can use it on your next purchase.",
            textZh: "是的，这是您的另一件商品。我还在您的账户里加了一个九折优惠码，为给您带来不便表示歉意。下次购物可以用。",
            keyPhrases: [
              { en: "discount code", zh: "优惠码" },
              { en: "as an apology", zh: "表示歉意" },
              { en: "inconvenience", zh: "不便" },
            ],
            alternativeExpressions: [
              { textEn: "Here's the other item. And I've thrown in a 10% off code on your account for the trouble. Use it anytime.", textZh: "另一件在这里。而且我在您账户上加了10%的折扣码补偿麻烦。随时可以用。", actionHint: "交付商品并补偿", frequency: "common" },
              { textEn: "Absolutely — take this one now. As a sorry for the mix-up, I put a 10% discount on your account for next time.", textZh: "当然——这件先拿走。为了弥补这次的问题，我给您账户加了10%折扣下次用。", actionHint: "道歉并提供优惠补偿", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's very kind. Thank you for resolving this so quickly.",
            textZh: "太贴心了。谢谢你这么快解决了问题。",
          },
        ],
      },
    ],
  },

  // ==================== 线上退货 ====================
  {
    id: "shopping-online-return",
    category: "shopping",
    titleZh: "线上商品退货",
    titleEn: "Online Purchase Return",
    description: "将网上购买的商品带到实体店退货，沟通退货原因和退款方式",
    otherRole: "退货处店员",
    otherRoleIcon: "🔄",
    flows: [
      {
        id: "basic",
        titleZh: "标准退货流程",
        titleEn: "Standard Return Process",
        description: "将网购商品退回实体店的基本流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to return this shirt I bought online. I have the receipt on my phone.",
            textZh: "你好，我想退这件网上买的衬衫。手机上有收据。",
          },
          {
            speaker: "them",
            role: "退货店员",
            textEn: "Sure, I can help with that. What's the reason for the return?",
            textZh: "好的，我来帮您处理。请问退货原因是什么？",
            keyPhrases: [
              { en: "reason for the return", zh: "退货原因" },
            ],
            alternativeExpressions: [
              { textEn: "No problem, I can handle that. Can I ask why you're returning it?", textZh: "没问题，我来处理。请问为什么退呢？", actionHint: "友好询问退货原因", frequency: "common" },
              { textEn: "Of course. Is there an issue with the item, or did it just not work out?", textZh: "当然。商品有问题，还是不太满意？", actionHint: "委婉了解退货原因", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It doesn't fit. I ordered a medium but it's too tight around the shoulders.",
            textZh: "尺码不合适。我买了中号，但肩膀那里太紧了。",
          },
          {
            speaker: "them",
            role: "退货店员",
            textEn: "I see. Would you like to exchange it for a larger size, or would you prefer a full refund?",
            textZh: "明白了。您要换大一号的，还是要全额退款？",
            keyPhrases: [
              { en: "exchange", zh: "换货" },
              { en: "full refund", zh: "全额退款" },
            ],
            alternativeExpressions: [
              { textEn: "Got it. Want me to find you a bigger size, or would you rather just get your money back?", textZh: "明白了。要我帮您找大一号的，还是直接退款？", actionHint: "提供换货或退款选项", frequency: "common" },
              { textEn: "I understand. I can swap it for a larger one or do a full refund — whichever you prefer.", textZh: "我理解。可以给您换大号的或者全额退款——您选。", actionHint: "给出两种选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd prefer a refund, please. I found a different style I like better.",
            textZh: "我要退款吧。我找到了另一款更喜欢的。",
          },
          {
            speaker: "them",
            role: "退货店员",
            textEn: "No problem. Let me scan the barcode from your email receipt. The refund will go back to your original payment method within 3 to 5 business days.",
            textZh: "没问题。让我扫一下您邮件收据上的条码。退款会在3到5个工作日内退回您原来的付款方式。",
            keyPhrases: [
              { en: "barcode", zh: "条码" },
              { en: "original payment method", zh: "原付款方式" },
              { en: "business days", zh: "工作日" },
            ],
            alternativeExpressions: [
              { textEn: "Easy enough. Pull up your email receipt and I'll scan the barcode. Refund goes back to your card in 3 to 5 business days.", textZh: "很简单。打开您的邮件收据我来扫条码。退款3到5个工作日到账。", actionHint: "引导退款操作", frequency: "common" },
              { textEn: "Sure thing. Let me scan your receipt... Done. The money will be back on your card within about a week.", textZh: "没问题。让我扫一下收据……好了。钱大约一周内回到您的卡上。", actionHint: "快速处理退款", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, sounds good. Will I get the shipping fee refunded too?",
            textZh: "好的。运费也会退吗？",
          },
          {
            speaker: "them",
            role: "退货店员",
            textEn: "Since you're returning in store, the original shipping charge will be refunded as well. Here's your return confirmation — I'd suggest keeping this until the refund appears on your statement.",
            textZh: "因为您是到店退货，原来的运费也会退给您。这是您的退货确认单——建议保留到退款到账。",
            keyPhrases: [
              { en: "shipping charge", zh: "运费" },
              { en: "return confirmation", zh: "退货确认单" },
              { en: "statement", zh: "账单" },
            ],
            alternativeExpressions: [
              { textEn: "Because you brought it back in person, we'll refund the shipping too. Hold on to this confirmation until you see the money back on your card.", textZh: "因为您亲自退到店里，运费也一起退。这张确认单留着，直到退款到卡上。", actionHint: "确认全额退款含运费", frequency: "common" },
              { textEn: "Good news — in-store returns get the shipping fee back too. Here's your receipt for the return. Keep it safe until the refund hits your account.", textZh: "好消息——到店退货运费也退。这是退货收据。留好直到退款到账。", actionHint: "说明退运费政策", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Thank you for making this easy!",
            textZh: "好的。谢谢你，退货流程很顺利！",
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "退货遇到争议",
        titleEn: "Return Dispute",
        description: "退货过程中遇到超期、无收据等问题的处理",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'd like to return these headphones. I bought them about six weeks ago.",
            textZh: "我想退这副耳机。大概六周前买的。",
          },
          {
            speaker: "them",
            role: "退货店员",
            textEn: "Let me check the policy... Our return window is 30 days. It looks like you're past the deadline. Do you have the receipt?",
            textZh: "我查一下政策……我们的退货期限是30天。看起来已经过期了。您有收据吗？",
            keyPhrases: [
              { en: "return window", zh: "退货期限" },
              { en: "past the deadline", zh: "过期了" },
            ],
            alternativeExpressions: [
              { textEn: "Let me look that up... Unfortunately, our policy is 30 days and you're a bit past that. Do you still have the receipt?", textZh: "我查查……很遗憾我们的政策是30天，看起来已经过了。还有收据吗？", actionHint: "礼貌告知已过退货期", frequency: "common" },
              { textEn: "Hmm, at six weeks you're outside our 30-day return period. But let me see what we can do — do you have proof of purchase?", textZh: "嗯，六周的话超出了30天退货期。不过让我看看能怎么办——有购买凭证吗？", actionHint: "主动寻找解决方案", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I have the receipt. But they stopped working after two weeks — one side has no sound. That seems like a defect.",
            textZh: "有的。但它们两周后就坏了——一边没声音。这应该算质量问题吧。",
          },
          {
            speaker: "them",
            role: "退货店员",
            textEn: "If it's a defective product, that's different from a regular return. Let me get my manager to take a look. We usually handle manufacturer defects even after the 30-day window.",
            textZh: "如果是产品缺陷，那跟普通退货不一样。我让经理来看看。厂家缺陷我们通常在30天后也会处理。",
            keyPhrases: [
              { en: "defective product", zh: "有缺陷的产品" },
              { en: "manufacturer defect", zh: "厂家缺陷" },
              { en: "get my manager", zh: "让经理来" },
            ],
            alternativeExpressions: [
              { textEn: "Wait — if it's defective, that changes things. Defects are handled differently. Let me grab my manager.", textZh: "等等——如果是产品缺陷就不一样了。缺陷问题我们另外处理。我去叫经理。", actionHint: "区分缺陷和普通退货", frequency: "common" },
              { textEn: "A product defect isn't the same as a regular return — we stand behind the products we sell. Let me call the manager over to sort this out.", textZh: "产品缺陷跟普通退货不一样——我们对卖出去的产品负责。我叫经理来帮您处理。", actionHint: "表示会负责处理", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. I really didn't expect them to break so quickly.",
            textZh: "谢谢。我真没想到它们这么快就坏了。",
          },
          {
            speaker: "them",
            role: "经理",
            textEn: "Hi there. I can see the issue — this model has had some quality complaints. I can offer you a full refund or an exchange for a different model. Which would you prefer?",
            textZh: "你好。我看到了问题——这个型号确实有一些质量投诉。我可以给您全额退款或者换一个不同的型号。您想选哪个？",
            keyPhrases: [
              { en: "quality complaints", zh: "质量投诉" },
              { en: "a different model", zh: "不同的型号" },
            ],
            alternativeExpressions: [
              { textEn: "Hello. Yes, we're aware of issues with this particular model. I'd like to offer you a full refund or a different pair. What works best for you?", textZh: "你好。是的，我们知道这个型号有问题。我可以全额退款或者换一副。您觉得哪种好？", actionHint: "承认问题并提供方案", frequency: "common" },
              { textEn: "Hi, I'm the manager. I see what happened — this model has had some reports. Let me make it right with a refund or a swap for a better model.", textZh: "你好，我是经理。我看到情况了——这个型号有一些反馈。让我给您退款或者换一个更好的型号来弥补。", actionHint: "经理主动处理", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "A refund would be great. I appreciate you making an exception.",
            textZh: "退款就好。感谢你们通融。",
          },
          {
            speaker: "them",
            role: "经理",
            textEn: "Of course, we want you to have a good experience. I'm processing the refund now. Is the card ending in 4523 the one you used?",
            textZh: "当然，我们希望您有好的购物体验。我现在处理退款。您用的是尾号4523的卡吗？",
            keyPhrases: [
              { en: "making an exception", zh: "通融/破例" },
              { en: "card ending in", zh: "尾号是……的卡" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely — your satisfaction matters to us. Let me get that refund going. You paid with the card ending in 4523, right?", textZh: "当然——您的满意度对我们很重要。我来处理退款。您是用尾号4523的卡付的对吧？", actionHint: "确认退款信息", frequency: "common" },
              { textEn: "We want to make this right. I'm running the refund now — just confirming, it goes back to the card ending in 4523?", textZh: "我们想妥善处理这件事。我正在办退款——确认一下，退回尾号4523的卡对吗？", actionHint: "积极处理退款", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, that's correct. Thank you so much.",
            textZh: "对的。非常感谢。",
          },
          {
            speaker: "them",
            role: "经理",
            textEn: "All done! The refund should appear in 3 to 5 business days. Here's a receipt for the return. I've also added a $10 store coupon as a gesture of goodwill. Sorry for the trouble.",
            textZh: "搞定了！退款3到5个工作日到账。这是退货收据。我还给您加了一张10美元的店铺优惠券，表示一点心意。抱歉给您添麻烦了。",
            keyPhrases: [
              { en: "gesture of goodwill", zh: "善意的表示" },
              { en: "store coupon", zh: "店铺优惠券" },
            ],
            alternativeExpressions: [
              { textEn: "You're all set! Refund hits in 3 to 5 days. And here's a $10 coupon for your next visit — our way of saying sorry.", textZh: "搞定了！退款3到5天到。给您一张10美元优惠券下次用——表示我们的歉意。", actionHint: "完成退款并赠送优惠", frequency: "common" },
              { textEn: "Done and done. Expect the refund within a week. I added a $10 credit as a little apology for the hassle. Hope to see you back!", textZh: "全部搞定。一周内退款到账。加了10美元的补偿金额表示歉意。希望您再来！", actionHint: "友好完成退货并道歉", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 农贸市场 ====================
  {
    id: "shopping-farmers-market",
    category: "shopping",
    titleZh: "农贸市场购物",
    titleEn: "Farmers Market Shopping",
    description: "在户外农贸市场选购新鲜农产品、手工食品和本地特产",
    otherRole: "农场主/摊主",
    otherRoleIcon: "🧑‍🌾",
    flows: [
      {
        id: "basic",
        titleZh: "选购新鲜农产品",
        titleEn: "Buying Fresh Produce",
        description: "在农贸市场摊位前选购蔬果的基本对话",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Good morning! Everything looks so fresh. Are these tomatoes organic?",
            textZh: "早上好！一切看起来很新鲜。这些西红柿是有机的吗？",
          },
          {
            speaker: "them",
            role: "农场主",
            textEn: "Morning! Yes, everything on our table is certified organic. We're a small family farm about 20 miles from here. These heirloom tomatoes were picked yesterday.",
            textZh: "早上好！是的，我们桌上的全是有机认证的。我们是离这里大约20英里的小型家庭农场。这些传家宝番茄昨天刚摘的。",
            keyPhrases: [
              { en: "certified organic", zh: "有机认证" },
              { en: "family farm", zh: "家庭农场" },
              { en: "heirloom tomatoes", zh: "传家宝番茄" },
            ],
            alternativeExpressions: [
              { textEn: "Good morning! Yep, all organic — we grow everything ourselves on our family farm. Those tomatoes came off the vine yesterday!", textZh: "早！全是有机的——我们家庭农场自己种的。那些番茄昨天刚从藤上摘的！", actionHint: "自豪介绍自家农产品", frequency: "common" },
              { textEn: "Hi! Everything here is certified organic from our little farm just down the road. These heirlooms? Picked fresh yesterday morning.", textZh: "你好！这里所有东西都是我们附近小农场的有机认证产品。这些传家宝番茄？昨天早上刚摘的。", actionHint: "强调新鲜和本地来源", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "They smell amazing! How much for a pound?",
            textZh: "闻起来太棒了！多少钱一磅？",
          },
          {
            speaker: "them",
            role: "农场主",
            textEn: "Heirlooms are $4 a pound. The regular ones are $2.50. Want to try a sample?",
            textZh: "传家宝番茄4美元一磅。普通的2.50美元。要尝一块吗？",
            keyPhrases: [
              { en: "sample", zh: "试吃样品" },
            ],
            alternativeExpressions: [
              { textEn: "$4 a pound for heirlooms, $2.50 for the regular ones. Here, taste one — you'll see the difference!", textZh: "传家宝4美元一磅，普通的2.50。来尝一个——您马上就知道区别了！", actionHint: "报价并热情提供试吃", frequency: "common" },
              { textEn: "Heirlooms run $4, regulars are $2.50. Want to try a slice? They're amazing this season.", textZh: "传家宝4美元，普通的2.50。要不要尝一片？这个季节特别好吃。", actionHint: "报价并推荐品尝", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please! Oh wow, so sweet. I'll take two pounds of the heirlooms.",
            textZh: "好的！哇，好甜。我要两磅传家宝番茄。",
          },
          {
            speaker: "them",
            role: "农场主",
            textEn: "Great choice! We also have fresh basil that goes perfectly with tomatoes. A bunch is just $2.",
            textZh: "好选择！我们还有新鲜罗勒，搭配番茄非常好。一束只要2美元。",
            keyPhrases: [
              { en: "basil", zh: "罗勒" },
              { en: "a bunch", zh: "一束" },
            ],
            alternativeExpressions: [
              { textEn: "Nice! Grab some basil too — it's the perfect pairing. Only $2 a bunch.", textZh: "不错！再拿些罗勒——跟番茄是绝配。一束才2美元。", actionHint: "推荐搭配产品", frequency: "common" },
              { textEn: "You should try our basil with those — tomato and basil is a classic combo. Just $2 for a fresh bunch.", textZh: "配上我们的罗勒试试——番茄罗勒是经典搭配。一束新鲜的只要2美元。", actionHint: "以搭配方式追加推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, I'll take a bunch. Do you accept credit cards or only cash?",
            textZh: "好的，来一束。你们接受信用卡还是只收现金？",
            culturalNote: "农贸市场有些摊位只收现金，有些接受Venmo等移动支付。最好提前问清楚。",
          },
          {
            speaker: "them",
            role: "农场主",
            textEn: "We take cash and Venmo. No credit cards, sorry. There's an ATM by the entrance if you need one.",
            textZh: "我们收现金和Venmo。不接受信用卡，抱歉。入口那边有个ATM。",
            keyPhrases: [
              { en: "Venmo", zh: "Venmo（移动支付App）" },
              { en: "ATM", zh: "自动取款机" },
            ],
            alternativeExpressions: [
              { textEn: "Cash or Venmo only, I'm afraid. No cards. But there's an ATM right at the market entrance.", textZh: "只收现金或Venmo，不好意思。不收卡。不过市场入口有个ATM。", actionHint: "说明付款方式", frequency: "common" },
              { textEn: "Sorry, we don't have a card reader. Cash and Venmo work though! The ATM is by the front gate if you need to grab some cash.", textZh: "不好意思，我们没有刷卡机。现金和Venmo可以！需要取现的话前门有ATM。", actionHint: "友好解释并提供替代", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have cash. Here's $10. Keep the change!",
            textZh: "我有现金。给你10美元。不用找了！",
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "手工食品与本地特产",
        titleEn: "Artisan Foods & Local Specialties",
        description: "在农贸市场探索手工奶酪、蜂蜜、果酱等特色产品",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "This is a beautiful display! What kind of honey do you sell?",
            textZh: "你们的摊位好漂亮！你们卖什么蜂蜜？",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "We have wildflower, clover, and buckwheat honey. The wildflower is our most popular — it's a great all-purpose honey. Each jar is raw and unfiltered.",
            textZh: "我们有野花蜜、三叶草蜜和荞麦蜜。野花蜜最畅销——是很好的多用途蜂蜜。每罐都是生的、未过滤的。",
            keyPhrases: [
              { en: "wildflower", zh: "野花" },
              { en: "clover", zh: "三叶草" },
              { en: "raw and unfiltered", zh: "生的、未过滤的" },
            ],
            alternativeExpressions: [
              { textEn: "Three kinds — wildflower, clover, and buckwheat. Wildflower is our bestseller, nice and versatile. All raw and unfiltered.", textZh: "三种——野花蜜、三叶草蜜和荞麦蜜。野花蜜最好卖，用途广。全部生的未过滤。", actionHint: "介绍蜂蜜品种", frequency: "common" },
              { textEn: "We've got wildflower, clover, and buckwheat. Most people go for the wildflower — it works for everything from tea to cooking. All raw, nothing processed.", textZh: "有野花蜜、三叶草蜜和荞麦蜜。大多数人选野花蜜——泡茶做菜都行。全是生的，没有加工。", actionHint: "详细介绍用途", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What does 'raw and unfiltered' mean exactly? Is that better than regular honey?",
            textZh: "'生的、未过滤的'具体是什么意思？比普通蜂蜜好吗？",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "Raw means it hasn't been heated, so it retains all the natural enzymes and pollen. Unfiltered means you might see tiny bits of beeswax or pollen — that's the good stuff! Store-bought honey is usually pasteurized and filtered.",
            textZh: "生的意思是没有加热过，保留了所有天然酶和花粉。未过滤的意味着你可能看到小颗粒的蜂蜡或花粉——那些都是好东西！超市买的蜂蜜通常是巴氏杀菌和过滤过的。",
            keyPhrases: [
              { en: "enzymes", zh: "酶" },
              { en: "pollen", zh: "花粉" },
              { en: "beeswax", zh: "蜂蜡" },
              { en: "pasteurized", zh: "巴氏杀菌的" },
            ],
            alternativeExpressions: [
              { textEn: "Raw honey never gets heated, so all the good enzymes stay intact. The bits you see? That's pollen and beeswax — super healthy. Grocery store honey has all that cooked out.", textZh: "生蜂蜜从不加热，所以好的酶都保留了。看到的小颗粒？是花粉和蜂蜡——对身体很好。超市蜂蜜把这些都处理掉了。", actionHint: "解释生蜂蜜的好处", frequency: "common" },
              { textEn: "It means we don't heat it or strain it. You get all the natural benefits — enzymes, pollen, the works. Store honey is usually processed, so it loses a lot of that.", textZh: "意思是我们不加热也不过滤。您能得到所有天然好处——酶、花粉等等。超市蜂蜜通常加工过，那些好东西就没了。", actionHint: "对比手工和工厂蜂蜜", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd like the wildflower honey. And what are these jars with the pretty labels?",
            textZh: "我要野花蜜。这些标签漂亮的罐子是什么？",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "Those are our small-batch jams — strawberry rhubarb, blueberry lavender, and peach bourbon. All made with fruit from local farms and no artificial preservatives.",
            textZh: "那是我们的小批量果酱——草莓大黄、蓝莓薰衣草和蜜桃波本。都用本地农场的水果做的，没有人工防腐剂。",
            keyPhrases: [
              { en: "small-batch", zh: "小批量制作的" },
              { en: "rhubarb", zh: "大黄" },
              { en: "artificial preservatives", zh: "人工防腐剂" },
            ],
            alternativeExpressions: [
              { textEn: "Those are our handmade jams! Three flavors — strawberry rhubarb, blueberry lavender, and peach bourbon. All natural, all local fruit.", textZh: "那些是我们手工做的果酱！三种口味——草莓大黄、蓝莓薰衣草和蜜桃波本。全天然，全是本地水果。", actionHint: "介绍手工果酱", frequency: "common" },
              { textEn: "Our jams! We make them in small batches with local fruit — no preservatives, no additives. The blueberry lavender is my personal favorite.", textZh: "我们的果酱！用本地水果小批量做的——没有防腐剂，没有添加剂。蓝莓薰衣草是我个人最爱。", actionHint: "以个人推荐增加亲切感", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The blueberry lavender sounds unique. Can I taste it?",
            textZh: "蓝莓薰衣草听起来很特别。可以尝一下吗？",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "Of course! Here, try it on a cracker. The lavender is subtle — it adds a floral note without being overpowering.",
            textZh: "当然！来，配饼干尝尝。薰衣草的味道很淡雅——增加花香但不会太浓。",
            keyPhrases: [
              { en: "subtle", zh: "淡雅的/微妙的" },
              { en: "floral note", zh: "花香味" },
              { en: "overpowering", zh: "太浓烈的" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! Here's a taste on a cracker. The lavender is just a hint — not in-your-face, just a nice floral touch.", textZh: "当然！给您配饼干尝尝。薰衣草只是淡淡的——不会太冲，就是一点花香。", actionHint: "邀请品尝并描述口味", frequency: "common" },
              { textEn: "Absolutely — taste away! You'll notice the lavender is very gentle. It's there, but it doesn't take over. Most people are surprised how much they love it.", textZh: "当然——尝尝！您会发现薰衣草味非常柔和。能感觉到但不会抢味。大多数人尝了都出乎意料地喜欢。", actionHint: "描述风味特点", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's lovely! I'll take one of each jam and the wildflower honey. These would make great gifts too.",
            textZh: "太好吃了！果酱每种来一罐，再加野花蜜。这些也很适合当礼物。",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "We actually have gift boxes if you'd like! Three jams in a nice basket with ribbon for $28. We're here every Saturday, so you're always welcome to come back.",
            textZh: "我们正好有礼品套装！三罐果酱装在漂亮的篮子里系上丝带，28美元。我们每周六都在，欢迎常来。",
            keyPhrases: [
              { en: "gift box", zh: "礼品套装" },
              { en: "ribbon", zh: "丝带" },
            ],
            alternativeExpressions: [
              { textEn: "We do gift sets too! Three jams in a basket with a bow — $28. And we're here every Saturday if you want more!", textZh: "我们还有礼品套装！三罐果酱装在带蝴蝶结的篮子里——28美元。每周六都在这，欢迎再来！", actionHint: "推荐礼品套装", frequency: "common" },
              { textEn: "If you want them as gifts, we have beautiful baskets with three jams and ribbon for $28. Come see us any Saturday — we're always here!", textZh: "如果要送人，我们有漂亮的三罐果酱礼篮配丝带28美元。每周六来找我们——我们一直在！", actionHint: "推荐送礼选择", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 跳蚤市场 ====================
  {
    id: "shopping-flea-market",
    category: "shopping",
    titleZh: "跳蚤市场淘货",
    titleEn: "Flea Market Browsing",
    description: "在跳蚤市场淘二手物品和古董，学习讨价还价",
    otherRole: "摊主",
    otherRoleIcon: "🏪",
    flows: [
      {
        id: "basic",
        titleZh: "基本淘货和问价",
        titleEn: "Browsing & Asking Prices",
        description: "在跳蚤市场浏览和询价的基本对话",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi! Mind if I take a look at what you have?",
            textZh: "你好！我可以看看你的东西吗？",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "Go right ahead! Take your time. Everything on this table is $5 or less, and the bigger items have individual prices on them.",
            textZh: "随便看！慢慢来。这张桌子上的都是5美元以下，大件的上面有单独标价。",
            keyPhrases: [
              { en: "go right ahead", zh: "随便看/请便" },
              { en: "individual prices", zh: "单独标价" },
            ],
            alternativeExpressions: [
              { textEn: "Help yourself! This table is all $5 and under. Bigger stuff has prices marked on each piece.", textZh: "随便看！这桌子上的全是5美元以内。大件的每个上面有标价。", actionHint: "欢迎浏览并说明定价", frequency: "common" },
              { textEn: "Browse away! Small items are all under five bucks. The larger pieces are priced individually.", textZh: "慢慢逛！小件的都不到5美元。大件的每个单独标价。", actionHint: "轻松介绍价格分区", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "This vintage record player looks interesting. How much are you asking for it?",
            textZh: "这台复古唱片机看起来不错。你要多少钱？",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "That's a beauty from the 1970s. I'm asking $85 for it. It's fully functional — I tested it last week.",
            textZh: "那是1970年代的好东西。我要85美元。完全能用——我上周试过了。",
            keyPhrases: [
              { en: "I'm asking", zh: "我要价" },
              { en: "fully functional", zh: "完全能用" },
            ],
            alternativeExpressions: [
              { textEn: "Oh, that one's a gem — 1970s vintage. Looking for $85. It works perfectly, I tried it out myself.", textZh: "那可是宝贝——70年代的。要85美元。完全能用，我自己试过了。", actionHint: "骄傲介绍复古商品", frequency: "common" },
              { textEn: "Good eye! That's from the '70s and still works like a charm. I'm asking $85 — a fair price for the condition it's in.", textZh: "好眼光！那是70年代的，状态还非常好。我要85美元——以它的品相来说很公道。", actionHint: "赞赏眼光并报价", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Does it come with any records?",
            textZh: "带唱片吗？",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "I can throw in a few records from that box over there. Pick any five you like.",
            textZh: "我可以从那边那箱子里送你几张唱片。随便挑五张。",
            keyPhrases: [
              { en: "throw in", zh: "赠送/附送" },
              { en: "pick any five", zh: "随便挑五个" },
            ],
            alternativeExpressions: [
              { textEn: "Tell you what — I'll toss in five records from that crate over there. Your pick.", textZh: "这样吧——那边箱子里的唱片送你五张。你自己挑。", actionHint: "主动附赠增加吸引力", frequency: "common" },
              { textEn: "It doesn't come with records, but I can add a few from that box. Go ahead and grab five.", textZh: "唱片机不带唱片，但我可以从那箱子里送你几张。去挑五张吧。", actionHint: "慷慨赠送唱片", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Would you take $65 for the player and the records?",
            textZh: "唱片机加唱片，65美元可以吗？",
            culturalNote: "跳蚤市场讨价还价是正常的。通常可以还价10-30%，态度要友善。",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "How about $75? I've got to make a little something. It's in really good condition for its age.",
            textZh: "75美元怎么样？我也得赚一点。对这个年代的东西来说，品相真的很好了。",
            keyPhrases: [
              { en: "how about", zh: "……怎么样" },
              { en: "in good condition", zh: "品相好" },
            ],
            alternativeExpressions: [
              { textEn: "Meet me at $75? I gotta cover my costs. And honestly, this thing is in amazing shape for its age.", textZh: "75美元行不行？我得覆盖成本。说真的，这个年代的东西品相算很好了。", actionHint: "还价折中", frequency: "common" },
              { textEn: "I can go down to $75, but that's my bottom line. It's really well-preserved — hard to find one this nice.", textZh: "我可以降到75，但这是底线了。保存得真的很好——很难找到这么好的了。", actionHint: "给出底价", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Deal! $75 it is. Do you have a bag or box I can carry it in?",
            textZh: "成交！75美元。你有袋子或箱子让我拿吗？",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "I've got a box in the back. Let me wrap it up for you. Cash or Venmo?",
            textZh: "后面有个箱子。我帮你包起来。现金还是Venmo？",
            keyPhrases: [
              { en: "deal", zh: "成交" },
              { en: "wrap it up", zh: "包起来" },
            ],
            alternativeExpressions: [
              { textEn: "Let me get a box for that. I'll pack it up nice and safe. How are you paying — cash or Venmo?", textZh: "我去拿个箱子。帮你包好。怎么付——现金还是Venmo？", actionHint: "包装并确认付款方式", frequency: "common" },
              { textEn: "Hold on, I'll grab something to carry it in. Cash work for you, or do you want to Venmo?", textZh: "等一下，我找个东西装。付现金还是用Venmo？", actionHint: "安排包装和付款", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "讨价还价技巧",
        titleEn: "Bargaining Skills",
        description: "在跳蚤市场进行更复杂的砍价谈判",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'm interested in this leather bag. It looks handmade. What's the story behind it?",
            textZh: "我对这个皮包感兴趣。看起来是手工的。有什么故事吗？",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "Good eye! It's a handcrafted leather messenger bag from the 1960s. It used to belong to a college professor. The leather has aged beautifully — that patina is irreplaceable.",
            textZh: "好眼力！这是1960年代手工制作的皮邮差包。以前是一位大学教授的。皮革老化得很漂亮——那种包浆是无法复制的。",
            keyPhrases: [
              { en: "handcrafted", zh: "手工制作的" },
              { en: "messenger bag", zh: "邮差包" },
              { en: "patina", zh: "包浆" },
              { en: "irreplaceable", zh: "无法替代的" },
            ],
            alternativeExpressions: [
              { textEn: "You've got taste! That's a hand-stitched leather bag from the '60s — used to be a professor's. The leather has this gorgeous patina you just can't fake.", textZh: "您很有品味！那是60年代手缝的皮包——曾经是教授的。皮革上的包浆美极了，造不出来。", actionHint: "讲述物品历史增加价值", frequency: "common" },
              { textEn: "Sharp eye! Handmade leather, 1960s vintage. The previous owner was a college professor. Look at that patina — that's 60 years of character.", textZh: "好眼力！手工皮具，60年代的。前主人是大学教授。看这包浆——60年的岁月痕迹。", actionHint: "用故事增加吸引力", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's beautiful. But I notice the strap has some wear. What are you asking?",
            textZh: "很漂亮。但我注意到背带有些磨损。你要多少？",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "I'm asking $120. The strap can easily be repaired by a leather shop for about $20. Even with that, you're getting a bag that would cost $400 new at a boutique.",
            textZh: "我要120美元。背带在皮具店大约20美元就能修好。即使加上这个，买一个新的精品店要卖400美元。",
            keyPhrases: [
              { en: "wear", zh: "磨损" },
              { en: "repaired", zh: "修理" },
              { en: "boutique", zh: "精品店" },
            ],
            alternativeExpressions: [
              { textEn: "$120 for the bag. The strap just needs a quick fix — maybe $20 at a leather shop. Still way cheaper than the $400 you'd pay retail.", textZh: "包120美元。背带简单修一下就好——皮具店大概20美元。比零售价400还是便宜太多。", actionHint: "合理化价格", frequency: "common" },
              { textEn: "I'm looking for $120. Yeah, the strap has some wear, but any cobbler can fix that for twenty bucks. A similar bag new would run you $400 easy.", textZh: "我要120。背带确实有点磨损，但随便找个鞋匠20美元就修好了。类似的新包轻松卖到400。", actionHint: "承认瑕疵但强调价值", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's true, but I still need to pay for the repair. Would you consider $90, factoring in the strap condition?",
            textZh: "说得对，但我还得付修理费。考虑到背带的状况，90美元可以吗？",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "I appreciate the offer, but $90 is a bit low for a vintage piece like this. I could do $105 — that's my best price. I've had two other people interested today.",
            textZh: "感谢还价，但90美元对这样的古董件来说有点低了。105美元——这是我的最低价了。今天已经有两个人问了。",
            keyPhrases: [
              { en: "my best price", zh: "我的最低价" },
              { en: "vintage piece", zh: "古董件" },
            ],
            alternativeExpressions: [
              { textEn: "Thanks for the offer, but I can't go that low on this one. The lowest I can do is $105 — and honestly, it's a steal at that price.", textZh: "感谢还价，但这个我没法那么低。最低105——说实话这个价真的很划算了。", actionHint: "坚持底价但态度友好", frequency: "common" },
              { textEn: "$90 is too low for a piece like this. Best I can do is $105 — I've already turned down a few people at $100. It's a fair price.", textZh: "90对这种东西太低了。我能给的最低是105——已经有人出100被我拒了。这价格很公道。", actionHint: "用市场需求支撑价格", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How about $100 even? I'll pay cash right now.",
            textZh: "100美元整怎么样？我现在付现金。",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "Cash is king at a flea market! You know what, $100 works. You've got yourself a deal.",
            textZh: "跳蚤市场现金就是王道！好吧，100美元成交。",
            keyPhrases: [
              { en: "cash is king", zh: "现金为王" },
              { en: "you've got a deal", zh: "成交" },
            ],
            alternativeExpressions: [
              { textEn: "You're paying cash on the spot — that changes things! $100 it is. Deal!", textZh: "当场付现金——那就不一样了！100美元成交！", actionHint: "因为现金让步", frequency: "common" },
              { textEn: "Can't argue with cash in hand! Alright, $100 — you drive a hard bargain. It's yours.", textZh: "现金在手没法拒绝！好吧100美元——您砍价厉害。归您了。", actionHint: "被现金说服成交", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you! Can I get a receipt in case I ever want to resell it?",
            textZh: "谢谢！可以开个收据吗？万一以后想转卖。",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "Sure, I'll write you one with a description and the price. Smart thinking — vintage leather only goes up in value. Enjoy it!",
            textZh: "当然，我给你写一张，注明描述和价格。聪明——古董皮具只会升值。好好享受吧！",
            keyPhrases: [
              { en: "goes up in value", zh: "升值" },
              { en: "receipt", zh: "收据" },
            ],
            alternativeExpressions: [
              { textEn: "Happy to! I'll jot down the details and the price. Smart move — leather like this just gets better with time. Enjoy!", textZh: "没问题！我写下详细信息和价格。好眼光——这种皮具只会越来越好。好好用吧！", actionHint: "提供收据并祝福", frequency: "common" },
              { textEn: "Absolutely, I'll write you a receipt. You made a great buy — vintage leather is one of those things that only appreciates. Take care of it!", textZh: "当然，我给您写收据。这笔买卖太划算了——古董皮具只会升值的。好好爱护它！", actionHint: "赞赏购买并开收据", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 奢侈品牌 ====================
  {
    id: "shopping-luxury-brand",
    category: "shopping",
    titleZh: "奢侈品牌选购",
    titleEn: "Luxury Brand Shopping",
    description: "在奢侈品店选购包包、手表等高端商品，体验专属服务",
    otherRole: "奢侈品店销售",
    otherRoleIcon: "👜",
    flows: [
      {
        id: "basic",
        titleZh: "基本选购体验",
        titleEn: "Basic Shopping Experience",
        description: "进入奢侈品店选购的基本流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hello, I'm looking for a handbag. Could I see some options?",
            textZh: "你好，我想看包。能给我看看有什么选择吗？",
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn: "Of course, welcome! Is this for yourself or a gift? And do you have a particular style or size in mind?",
            textZh: "当然，欢迎！这是自用还是送人？您有特别想要的款式或大小吗？",
            keyPhrases: [
              { en: "for yourself or a gift", zh: "自用还是送人" },
              { en: "particular style", zh: "特定款式" },
            ],
            alternativeExpressions: [
              { textEn: "Welcome! Are you shopping for yourself or looking for a gift? Any specific style you have in mind?", textZh: "欢迎！自己买还是送人？有特定风格偏好吗？", actionHint: "了解购买目的", frequency: "common" },
              { textEn: "Please, come in! Is this a treat for yourself or a gift for someone? I can show you some options based on what you're looking for.", textZh: "请进！是犒劳自己还是给别人的礼物？我可以根据您的需求给您看一些选择。", actionHint: "热情引导", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's for myself. I'm looking for an everyday crossbody bag — not too big, not too small.",
            textZh: "自用的。我想找一个日常用的斜挎包——不要太大也不要太小。",
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn: "I have a few perfect options. This one is our classic crossbody in calfskin leather. It's lightweight and fits your phone, wallet, and keys easily. It comes in black, tan, and burgundy.",
            textZh: "我有几款很合适的。这是我们经典款小牛皮斜挎包。很轻，可以轻松放手机、钱包和钥匙。有黑色、棕色和酒红色。",
            keyPhrases: [
              { en: "crossbody", zh: "斜挎包" },
              { en: "calfskin leather", zh: "小牛皮" },
              { en: "burgundy", zh: "酒红色" },
            ],
            alternativeExpressions: [
              { textEn: "Let me show you this one — it's our classic calfskin crossbody. Super light, holds all your essentials. We have it in black, tan, and burgundy.", textZh: "让我给您看这款——我们的经典小牛皮斜挎包。超轻，能放所有随身物品。有黑色、棕色和酒红色。", actionHint: "展示经典款式", frequency: "common" },
              { textEn: "This is one of our bestsellers — a crossbody in soft calfskin. Perfect size for everyday, and it comes in three gorgeous colors.", textZh: "这是我们的畅销款之一——柔软小牛皮斜挎包。日常用大小刚好，三种漂亮颜色可选。", actionHint: "以畅销款吸引顾客", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I like the tan one. May I touch the leather? It feels so soft.",
            textZh: "我喜欢棕色的。我可以摸摸皮质吗？感觉好柔软。",
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn: "Please, go ahead. It's full-grain leather, so it will develop a beautiful patina over time. The hardware is gold-plated and scratch-resistant.",
            textZh: "请摸。这是全粒面皮革，随着使用会产生漂亮的包浆。五金是镀金的，耐刮。",
            keyPhrases: [
              { en: "full-grain leather", zh: "全粒面皮革" },
              { en: "patina", zh: "包浆" },
              { en: "gold-plated", zh: "镀金的" },
              { en: "scratch-resistant", zh: "耐刮的" },
            ],
            alternativeExpressions: [
              { textEn: "Feel free! It's full-grain leather — it only gets better with age. And the hardware is gold-plated, so it won't scratch easily.", textZh: "随便摸！全粒面皮革——越用越好看。五金是镀金的，不容易刮花。", actionHint: "介绍材质品质", frequency: "common" },
              { textEn: "Go right ahead. The leather is top quality — it'll soften and develop character over time. The gold hardware is designed to stay scratch-free.", textZh: "请便。皮质是顶级的——会越用越柔软有质感。镀金五金设计防刮。", actionHint: "强调品质和耐用性", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's lovely. What's the price?",
            textZh: "真漂亮。多少钱？",
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn: "This one is $1,850. It also comes with a dust bag and a two-year warranty on craftsmanship. Would you like to see how it looks on you?",
            textZh: "这款1850美元。附带防尘袋和两年工艺保修。要不要试背一下看看效果？",
            keyPhrases: [
              { en: "dust bag", zh: "防尘袋" },
              { en: "warranty on craftsmanship", zh: "工艺保修" },
            ],
            alternativeExpressions: [
              { textEn: "It's $1,850. Comes with a protective dust bag and two years of warranty on the craftsmanship. Want to try it on?", textZh: "1850美元。配有防尘袋和两年工艺保修。要不要试试？", actionHint: "报价并邀请试用", frequency: "common" },
              { textEn: "This piece is priced at $1,850 — includes a dust bag and a two-year guarantee. Let me help you try it on so you can see how it looks.", textZh: "这款定价1850美元——包含防尘袋和两年保证。让我帮您试一下看看效果。", actionHint: "专业展示并邀请试背", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. I'd like to try it on.",
            textZh: "好的，我想试背一下。",
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn: "Here you go. There's a mirror right behind you. You can adjust the strap length with this buckle — it goes from shoulder carry to crossbody.",
            textZh: "给您。后面有一面镜子。用这个扣子可以调节背带长度——可以单肩背也可以斜挎。",
            keyPhrases: [
              { en: "adjust the strap", zh: "调节背带" },
              { en: "buckle", zh: "扣子" },
              { en: "shoulder carry", zh: "单肩背" },
            ],
            alternativeExpressions: [
              { textEn: "Try it on! Mirror's right there. This buckle lets you switch between shoulder and crossbody — super versatile.", textZh: "试一下！镜子在那。这个扣子可以在单肩和斜挎之间切换——非常百搭。", actionHint: "展示使用方式", frequency: "common" },
              { textEn: "Here, let me help you put it on. See this buckle? You can make the strap shorter for shoulder carry or longer for crossbody. Check the mirror behind you!", textZh: "来，我帮您戴上。看到这个扣子了吗？可以缩短单肩背，或加长斜挎。看看后面的镜子！", actionHint: "亲手帮忙并讲解功能", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "等候名单与退税",
        titleEn: "Waitlist & Tax Refund",
        description: "了解热门商品等候名单和国际旅客退税",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'm also interested in the limited-edition shoulder bag from the new collection. Do you have it in stock?",
            textZh: "我还想看新系列的限量款单肩包。有现货吗？",
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn: "Unfortunately, that piece is extremely popular and currently sold out. I can add you to our waitlist. When new stock arrives, we contact clients in order.",
            textZh: "很遗憾，那款非常抢手，目前售罄了。我可以把您加到等候名单。新货到了，我们会按顺序联系客户。",
            keyPhrases: [
              { en: "limited-edition", zh: "限量版" },
              { en: "sold out", zh: "售罄" },
              { en: "waitlist", zh: "等候名单" },
            ],
            alternativeExpressions: [
              { textEn: "That one's been flying off the shelves — we're completely out right now. I can put your name on the wait list though.", textZh: "那款卖得太快了——现在完全卖光了。不过我可以把您的名字加到等候名单上。", actionHint: "告知售罄并提供等候选项", frequency: "common" },
              { textEn: "I'm sorry — it's one of our most sought-after pieces and we're currently sold out. Would you like to join the waitlist? We notify clients as soon as new stock comes in.", textZh: "很抱歉——这是我们最抢手的单品之一，目前售罄。要加入等候名单吗？新货一到我们就通知。", actionHint: "专业说明排队机制", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How long is the wait usually?",
            textZh: "通常要等多久？",
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn: "It can vary, but typically 4 to 8 weeks for this model. I'd recommend leaving your contact information and preferred color. We can ship internationally if you've already left the country.",
            textZh: "不一定，但这款通常要等4到8周。建议您留下联系方式和心仪颜色。如果您已经离开美国，我们可以国际邮寄。",
            keyPhrases: [
              { en: "ship internationally", zh: "国际邮寄" },
              { en: "contact information", zh: "联系方式" },
              { en: "preferred color", zh: "心仪颜色" },
            ],
            alternativeExpressions: [
              { textEn: "Usually 4 to 8 weeks for this one. Leave me your info and your top color choice. If you're back home by then, we ship worldwide.", textZh: "这款通常等4到8周。留下您的信息和首选颜色。到时如果您已经回国了，我们可以寄到世界各地。", actionHint: "说明等候时间和国际配送", frequency: "common" },
              { textEn: "It depends, but figure about a month or two. Let me take down your contact details and preferred color. We handle international shipping too, no worries.", textZh: "不一定，大概一两个月。我记下您的联系方式和喜欢的颜色。我们也做国际快递，放心。", actionHint: "记录客户信息", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Please add me to the list. By the way, I'm a tourist. Can I get a tax refund on today's purchase?",
            textZh: "请帮我加到名单上。顺便问一下，我是游客。今天买的东西可以退税吗？",
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn: "Absolutely. I'll prepare a tax refund form for you. You'll need to show your passport and keep the items unused until you go through customs. Present the form at the tax refund counter at the airport before your flight.",
            textZh: "当然可以。我帮您准备退税单。您需要出示护照，并在过海关前保持商品未使用。登机前在机场退税柜台出示退税单就行。",
            keyPhrases: [
              { en: "tax refund form", zh: "退税单" },
              { en: "customs", zh: "海关" },
              { en: "unused", zh: "未使用的" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! I'll get the tax form ready. Just keep everything unworn and show your passport and the form at the airport refund counter before you fly out.", textZh: "当然！我准备好退税表。所有东西不要拆用，飞之前在机场退税柜台出示护照和表格就行。", actionHint: "说明退税流程", frequency: "common" },
              { textEn: "Happy to help with that. I'll fill out the paperwork. Remember — don't use the items until after customs, and bring your passport to the airport tax desk.", textZh: "很乐意帮忙。我来填表格。记住——过海关前别用这些东西，去机场退税柜台时带上护照。", actionHint: "详细说明注意事项", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is the refund in cash or back to my credit card?",
            textZh: "退税是退现金还是退回信用卡？",
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn: "You can choose either option at the airport counter. Cash refunds are immediate but may have a small processing fee. Credit card refunds take about two weeks but have no fee.",
            textZh: "在机场柜台两种都可以选。现金退税是立即的但可能有一小笔手续费。信用卡退税大约两周，没有手续费。",
            keyPhrases: [
              { en: "processing fee", zh: "手续费" },
              { en: "immediate", zh: "立即的" },
            ],
            alternativeExpressions: [
              { textEn: "At the airport, you pick — cash on the spot with a small fee, or back to your credit card fee-free but it takes about two weeks.", textZh: "在机场您选——当场拿现金有小额手续费，或者免手续费退到信用卡但大约两周。", actionHint: "对比两种退税方式", frequency: "common" },
              { textEn: "Either way works at the counter. Cash is instant but they take a small cut. Credit card is free but you'll wait a couple of weeks to see it.", textZh: "柜台两种都行。现金立刻到手但扣一点手续费。信用卡免费但要等两周左右才到。", actionHint: "客观对比优缺点", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll do credit card. Thank you for being so helpful!",
            textZh: "我选信用卡退款。谢谢你这么热心！",
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn: "It's my pleasure! Here's my business card. If you need anything — even from abroad — don't hesitate to reach out. I'll personally take care of it. Enjoy your new bag!",
            textZh: "很荣幸！这是我的名片。如果需要任何帮助——即使在国外——随时联系我。我会亲自帮您处理。享受您的新包！",
            keyPhrases: [
              { en: "business card", zh: "名片" },
              { en: "don't hesitate", zh: "不要犹豫" },
              { en: "personally take care of", zh: "亲自处理" },
            ],
            alternativeExpressions: [
              { textEn: "The pleasure is mine! Take my card — reach out anytime, even after you leave the country. I'm happy to help. Enjoy!", textZh: "是我的荣幸！拿好我的名片——随时联系，离开美国以后也行。很高兴为您服务。好好享受！", actionHint: "留名片保持联系", frequency: "common" },
              { textEn: "Thank you for choosing us! Here's my personal card. Whether you're here or overseas, feel free to contact me directly. I'll make sure everything's taken care of.", textZh: "感谢您选择我们！这是我的个人名片。无论您在这里还是海外，都可以直接联系我。我保证一切处理妥当。", actionHint: "提供专属VIP服务", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 奢侈品礼品包装 ====================
  {
    id: "shopping-luxury-gift-wrap",
    category: "shopping",
    titleZh: "奢侈品礼品包装",
    titleEn: "Luxury Gift Wrapping",
    description: "在高端商店选购礼品并要求专业礼品包装服务",
    otherRole: "礼品顾问",
    otherRoleIcon: "🎁",
    flows: [
      {
        id: "basic",
        titleZh: "基本礼品包装",
        titleEn: "Basic Gift Wrapping",
        description: "请求礼品包装服务的基本流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I'd like to buy this scarf as a gift. Do you offer gift wrapping?",
            textZh: "我想买这条围巾当礼物。你们有礼品包装吗？",
          },
          {
            speaker: "them",
            role: "礼品顾问",
            textEn: "Yes, we offer complimentary gift wrapping for all purchases. Would you like our signature box or a gift bag?",
            textZh: "有的，所有商品我们都提供免费礼品包装。您要我们的经典礼盒还是礼品袋？",
            keyPhrases: [
              { en: "complimentary", zh: "免费的" },
              { en: "signature box", zh: "经典礼盒" },
              { en: "gift bag", zh: "礼品袋" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely — gift wrapping is on the house for any purchase. Would you prefer a box or a bag?", textZh: "当然——任何购买都免费包装。您想要盒子还是袋子？", actionHint: "说明免费包装选项", frequency: "common" },
              { textEn: "We'd be happy to wrap it! It's complimentary. We have our branded box or an elegant gift bag — your choice.", textZh: "很乐意帮您包装！免费的。有我们品牌的礼盒和优雅礼品袋——您选。", actionHint: "展示包装选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The signature box, please. Can you also add a ribbon?",
            textZh: "经典礼盒吧。可以加条丝带吗？",
          },
          {
            speaker: "them",
            role: "礼品顾问",
            textEn: "Of course! We have our classic gold ribbon or a seasonal red. Which would you prefer?",
            textZh: "当然！我们有经典金色丝带和季节性的红色。您喜欢哪种？",
            keyPhrases: [
              { en: "ribbon", zh: "丝带" },
              { en: "seasonal", zh: "季节性的" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! We've got gold or red ribbon this season. Which one catches your eye?", textZh: "好的！这个季节有金色和红色丝带。您喜欢哪个？", actionHint: "提供丝带颜色选择", frequency: "common" },
              { textEn: "Absolutely. Our classic is gold, and we also have a festive red this season. Which feels right for the gift?", textZh: "当然。经典款是金色，这个季节还有节日红。哪个更适合这份礼物？", actionHint: "根据场合推荐颜色", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Gold, please. Can I include a handwritten note?",
            textZh: "金色的。可以附一张手写卡片吗？",
          },
          {
            speaker: "them",
            role: "礼品顾问",
            textEn: "Absolutely. Here's a card — you can write your message and I'll place it inside the box. Take your time.",
            textZh: "当然可以。这是卡片——您写好留言后我放到盒子里。慢慢写。",
            keyPhrases: [
              { en: "handwritten note", zh: "手写卡片" },
              { en: "place it inside", zh: "放到里面" },
            ],
            alternativeExpressions: [
              { textEn: "Here's a card and pen. Write whatever you'd like and I'll tuck it inside the box. No rush!", textZh: "给您卡片和笔。想写什么写什么，我帮您放进盒子里。不着急！", actionHint: "提供写卡服务", frequency: "common" },
              { textEn: "Of course — a personal message makes the gift even more special. Take your time writing, and I'll slip it right into the box.", textZh: "当然——手写留言让礼物更特别。慢慢写，写好我放到盒子里。", actionHint: "鼓励写手写留言", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here you go. Is there anything else I should know about the scarf for the recipient? Care instructions?",
            textZh: "写好了。关于这条围巾还有什么我该告诉收礼人的吗？洗涤说明？",
          },
          {
            speaker: "them",
            role: "礼品顾问",
            textEn: "It's 100% cashmere, so it should be dry-cleaned only. I'll include a care instruction card in the box. The scarf is also packaged in tissue paper to prevent creasing.",
            textZh: "这是100%羊绒的，只能干洗。我会在盒子里放一张洗涤说明卡。围巾还用薄纸包着防止褶皱。",
            keyPhrases: [
              { en: "cashmere", zh: "羊绒" },
              { en: "dry-cleaned only", zh: "只能干洗" },
              { en: "tissue paper", zh: "薄纸" },
              { en: "creasing", zh: "褶皱" },
            ],
            alternativeExpressions: [
              { textEn: "Since it's pure cashmere, it needs to be dry-cleaned. I'll put a care card in the box so they know. It's wrapped in tissue paper to keep it crease-free.", textZh: "因为是纯羊绒，需要干洗。我会在盒子里放洗涤说明。薄纸包着防止有褶皱。", actionHint: "说明材质护理要求", frequency: "common" },
              { textEn: "It's 100% cashmere — dry clean only. Don't worry, I'll include the care instructions. And I'll wrap it in tissue so it stays perfectly smooth.", textZh: "百分百羊绒——只能干洗。别担心，我会附上洗涤说明。用薄纸包好保持平整。", actionHint: "贴心安排包装细节", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. How long will the wrapping take?",
            textZh: "好的。包装需要多久？",
          },
          {
            speaker: "them",
            role: "礼品顾问",
            textEn: "Just a few minutes. Would you like to browse while you wait, or I can bring you some tea or coffee?",
            textZh: "就几分钟。您要逛逛等一下，还是我给您倒杯茶或咖啡？",
            keyPhrases: [
              { en: "browse", zh: "逛逛" },
            ],
            alternativeExpressions: [
              { textEn: "It'll only take a couple of minutes. Feel free to look around, or can I get you something to drink while you wait?", textZh: "只要几分钟。随便逛逛，或者等的时候给您来点喝的？", actionHint: "提供VIP等待体验", frequency: "common" },
              { textEn: "Give me about five minutes. In the meantime, help yourself to our tea and coffee station, or keep shopping!", textZh: "给我大约五分钟。同时，随意去我们的茶和咖啡区，或者继续逛！", actionHint: "指引休息区", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "特殊包装与邮寄",
        titleEn: "Special Wrapping & Shipping",
        description: "处理特殊场合包装、邮寄包装等需求",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I actually need this shipped to someone in another city. Can you handle gift wrapping and shipping together?",
            textZh: "其实我需要把这个寄给另一个城市的人。能同时处理礼品包装和邮寄吗？",
          },
          {
            speaker: "them",
            role: "礼品顾问",
            textEn: "Absolutely! We offer our gift shipping service. The item will be beautifully wrapped and then placed in a protective shipping box. We can include a personalized message as well.",
            textZh: "当然！我们有礼品邮寄服务。商品会精美包装后放入保护性邮寄箱。我们也可以附上个性化留言。",
            keyPhrases: [
              { en: "gift shipping service", zh: "礼品邮寄服务" },
              { en: "protective shipping box", zh: "保护性邮寄箱" },
              { en: "personalized message", zh: "个性化留言" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! We'll gift wrap it, pack it safely in a shipping box, and send it out for you. Want to add a personal note?", textZh: "当然！我们包装好放在安全的邮寄箱里寄出。要附一段个人留言吗？", actionHint: "介绍礼品邮寄一站式服务", frequency: "common" },
              { textEn: "We do that all the time! The gift gets wrapped beautifully, then goes into a secure shipping box. And we can add a card with your message.", textZh: "我们经常做的！礼物精美包装后放进安全的邮寄箱。还可以附上您的留言卡。", actionHint: "表示这是常规服务", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much does shipping cost? And can it arrive by this Friday?",
            textZh: "邮费多少？能在这周五前送到吗？",
          },
          {
            speaker: "them",
            role: "礼品顾问",
            textEn: "Standard shipping is free for purchases over $500. Express delivery is $25 and guarantees delivery within 2 business days. For Friday, you'd need express.",
            textZh: "500美元以上购买免标准运费。加急配送25美元，保证2个工作日内送达。要周五到的话需要选加急。",
            keyPhrases: [
              { en: "standard shipping", zh: "标准运费" },
              { en: "express delivery", zh: "加急配送" },
              { en: "guarantees delivery", zh: "保证送达" },
            ],
            alternativeExpressions: [
              { textEn: "Free standard shipping on orders over $500. If you need it by Friday, express is $25 — guaranteed within 2 business days.", textZh: "满500免标准运费。要周五到的话加急25美元——保证2个工作日送达。", actionHint: "对比标准和加急", frequency: "common" },
              { textEn: "Regular shipping is on us for purchases over $500. For the Friday deadline, go with express at $25 — it's guaranteed delivery.", textZh: "500以上免标准运费。要赶周五的话选25美元的加急——保证送达。", actionHint: "根据需求推荐配送方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Express, please. Can the package be delivered without showing the price?",
            textZh: "选加急。包裹里能不显示价格吗？",
          },
          {
            speaker: "them",
            role: "礼品顾问",
            textEn: "Of course. We always remove all price tags and receipts for gift orders. Your receipt will be emailed to you separately. The recipient will only see the gift and your card.",
            textZh: "当然。礼品订单我们都会去掉所有价格标签和收据。您的收据会单独发邮件给您。收礼人只会看到礼物和您的卡片。",
            keyPhrases: [
              { en: "price tags", zh: "价格标签" },
              { en: "recipient", zh: "收礼人" },
              { en: "emailed separately", zh: "单独发邮件" },
            ],
            alternativeExpressions: [
              { textEn: "Don't worry — all price tags come off for gifts. We'll email you the receipt separately. The person receiving it will only see the wrapped gift and your card.", textZh: "放心——礼品会去掉所有价签。收据单独发邮件给您。收到的人只看到包好的礼物和您的卡片。", actionHint: "确保价格保密", frequency: "common" },
              { textEn: "Absolutely — no price information will be included. Your receipt goes to your email, and the recipient just gets the beautifully wrapped gift.", textZh: "当然——不会包含任何价格信息。收据发到您的邮箱，收礼人只收到精美包装的礼物。", actionHint: "保证隐私", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "One more thing — what if the recipient wants to exchange it? Can they do that without knowing the price?",
            textZh: "还有一个问题——如果收礼人想换怎么办？不知道价格能换吗？",
          },
          {
            speaker: "them",
            role: "礼品顾问",
            textEn: "Yes! We include a gift receipt in the box. It shows the item details but not the price. They can exchange it at any of our locations within 60 days.",
            textZh: "可以的！盒子里会有一张礼品收据，只显示商品信息，不显示价格。60天内可以在我们任何一家门店换货。",
            keyPhrases: [
              { en: "gift receipt", zh: "礼品收据" },
              { en: "exchange", zh: "换货" },
            ],
            alternativeExpressions: [
              { textEn: "There's a gift receipt inside — it has the product info but no price. They have 60 days to exchange at any of our stores.", textZh: "里面有礼品收据——有产品信息但没有价格。60天内任何门店都可以换。", actionHint: "说明换货政策", frequency: "common" },
              { textEn: "We always include a price-free gift receipt. If they need a different size or color, they can walk into any store within 60 days.", textZh: "我们都会放一张不含价格的礼品收据。如果需要换尺码或颜色，60天内去任何门店都行。", actionHint: "确保收礼人可以方便换货", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's perfect. You've thought of everything. Let me write the card and we can finalize.",
            textZh: "太周到了。你们想得真全面。让我写卡片，然后就可以确定了。",
          },
          {
            speaker: "them",
            role: "礼品顾问",
            textEn: "Take your time. I'll prepare the shipping label. You'll receive a tracking number by email once it ships. Is there anything else I can help you with today?",
            textZh: "慢慢写。我先准备邮寄标签。寄出后您会收到物流追踪号。今天还有什么需要帮忙的吗？",
            keyPhrases: [
              { en: "shipping label", zh: "邮寄标签" },
              { en: "tracking number", zh: "物流追踪号" },
            ],
            alternativeExpressions: [
              { textEn: "No rush on the card. I'll get the shipping details set up. You'll get a tracking number by email once it's on its way. Anything else?", textZh: "卡片慢慢写。我先把邮寄信息准备好。寄出后您会收到追踪号。还有别的需要帮忙的吗？", actionHint: "同步准备邮寄", frequency: "common" },
              { textEn: "Take your time with the message. While you write, I'll print the label. Once it ships, tracking info goes straight to your email. Need anything else today?", textZh: "慢慢写留言。您写的时候我打印标签。寄出后追踪信息直接发您邮箱。今天还需要什么？", actionHint: "高效并行处理", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 鞋店试鞋 ====================
  {
    id: "shopping-shoe-fitting",
    category: "shopping",
    titleZh: "鞋店试鞋选购",
    titleEn: "Shoe Fitting & Purchase",
    description: "在鞋店试穿不同款式和尺码的鞋子，了解合脚度和舒适性",
    otherRole: "鞋店店员",
    otherRoleIcon: "👟",
    flows: [
      {
        id: "basic",
        titleZh: "基本试鞋",
        titleEn: "Basic Shoe Fitting",
        description: "在鞋店试穿和挑选鞋子的基本流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm looking for a pair of comfortable walking shoes. I'll be doing a lot of sightseeing.",
            textZh: "你好，我想买一双舒适的步行鞋。我要去很多景点。",
          },
          {
            speaker: "them",
            role: "鞋店店员",
            textEn: "Great! What size do you wear? And do you prefer sneakers or something more casual like slip-ons?",
            textZh: "好的！您穿多大号？喜欢运动鞋还是更休闲的比如一脚蹬？",
            keyPhrases: [
              { en: "what size", zh: "穿多大号" },
              { en: "sneakers", zh: "运动鞋" },
              { en: "slip-ons", zh: "一脚蹬" },
            ],
            alternativeExpressions: [
              { textEn: "Perfect! What's your shoe size? And are you more of a sneaker person or do you like something easier to slip on?", textZh: "好的！您穿几号？喜欢运动鞋还是方便穿脱的？", actionHint: "了解尺码和风格偏好", frequency: "common" },
              { textEn: "Awesome! Do you know your US shoe size? Also, for sightseeing I can show you both sporty sneakers and casual slip-ons.", textZh: "太好了！知道您的美国鞋码吗？观光的话运动鞋和休闲一脚蹬我都可以给您看看。", actionHint: "针对旅游需求推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I usually wear a size 9 in my country, but I'm not sure about US sizing. Can you measure my feet?",
            textZh: "在我国家我穿9号，但不确定美国尺码是多少。能帮我量一下脚吗？",
            culturalNote: "美国鞋码与欧洲和亚洲不同。女鞋US 8约等于欧码39，男鞋US 9约等于欧码42。最好在店里量脚确认。",
          },
          {
            speaker: "them",
            role: "鞋店店员",
            textEn: "Of course! Step on this Brannock device here. Let me measure both feet — sometimes they're slightly different sizes. You're a US 10 on the right and just under 10 on the left.",
            textZh: "当然！踩到这个量脚器上。我量一下两只脚——有时候两只脚大小不完全一样。您右脚是美码10，左脚差一点10。",
            keyPhrases: [
              { en: "Brannock device", zh: "量脚器" },
              { en: "measure both feet", zh: "量两只脚" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! Stand on this foot measurer. I'll do both feet — they're not always the same. Looks like you're a 10 on the right and just under on the left.", textZh: "好的！站到这个量脚器上。两只脚都量——不一定一样大。看起来右脚10，左脚差一点。", actionHint: "专业量脚服务", frequency: "common" },
              { textEn: "Let me get an accurate measurement. Step right here... Your right foot is a 10 and the left is a hair smaller. Pretty common actually!", textZh: "让我准确量一下。站到这里……右脚10，左脚略小一点。其实这很正常！", actionHint: "测量并安抚顾客", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I had no idea! So should I go with size 10?",
            textZh: "我都不知道！那应该选10号吗？",
          },
          {
            speaker: "them",
            role: "鞋店店员",
            textEn: "Yes, always fit to the larger foot. Let me grab a 10 for you in this walking shoe. It has great arch support and cushioning.",
            textZh: "是的，按大的那只脚选。我去帮您拿这款步行鞋的10号。有很好的足弓支撑和缓震。",
            keyPhrases: [
              { en: "arch support", zh: "足弓支撑" },
              { en: "cushioning", zh: "缓震" },
              { en: "fit to the larger foot", zh: "按大的脚选" },
            ],
            alternativeExpressions: [
              { textEn: "Always go with the bigger foot. I'll bring out a 10 in this walking shoe — fantastic arch support and nice cushioning for long walks.", textZh: "永远按大的那只脚选。我去拿这款步行鞋的10号——足弓支撑极好，长时间走路缓震很好。", actionHint: "专业选鞋建议", frequency: "common" },
              { textEn: "Size to the larger foot, for sure. This walking shoe is a great pick — it's got solid support and excellent cushioning. Let me grab your size.", textZh: "按大脚选，一定的。这款步行鞋很好——支撑扎实缓震出色。我去拿您的号。", actionHint: "推荐并取鞋", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "These feel good but a little tight in the toe area. Is that normal?",
            textZh: "感觉不错，但脚趾那里有点紧。这正常吗？",
          },
          {
            speaker: "them",
            role: "鞋店店员",
            textEn: "You should have about a thumb's width of space between your longest toe and the front of the shoe. Let me get you a 10.5 or maybe a wide version of the 10.",
            textZh: "最长的脚趾和鞋前端之间应该有大约一个拇指宽的距离。我给您拿10.5号或者10号的宽版试试。",
            keyPhrases: [
              { en: "thumb's width", zh: "拇指宽" },
              { en: "wide version", zh: "宽版" },
            ],
            alternativeExpressions: [
              { textEn: "There should be a thumb-width gap at the front. Sounds like we need to go half a size up, or try the wide 10. Let me get both.", textZh: "前面应该有一个拇指宽的空间。看来需要大半号，或者试宽版10号。两个都拿来。", actionHint: "根据试穿反馈调整", frequency: "common" },
              { textEn: "If your toes feel cramped, you need more room. I'll bring a 10.5 and a wide 10 — one of those should be just right.", textZh: "如果脚趾挤，说明需要更多空间。我拿10.5和宽版10——总有一个刚好。", actionHint: "提供多种选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The wide 10 is perfect! I'll take these. Do they need any break-in time?",
            textZh: "宽版10号太合适了！我要这双。需要磨合期吗？",
          },
          {
            speaker: "them",
            role: "鞋店店员",
            textEn: "These are designed to be comfortable right out of the box. But I'd still recommend wearing them around the house for a day before your big walking day, just to be safe.",
            textZh: "这双设计的就是开箱即穿舒适的。但我还是建议在出门暴走前先在家穿一天，保险起见。",
            keyPhrases: [
              { en: "right out of the box", zh: "开箱即用" },
              { en: "break-in time", zh: "磨合期" },
            ],
            alternativeExpressions: [
              { textEn: "They're ready to go straight away — no break-in needed. But to be safe, wear them around home first before a full day of walking.", textZh: "可以直接穿——不需要磨合。但保险起见，走一整天之前先在家穿穿。", actionHint: "建议提前适应", frequency: "common" },
              { textEn: "No break-in period with these — they should feel great from day one. Just test them at home first before any serious walking trips.", textZh: "这双没有磨合期——第一天就很舒服。不过出去暴走之前先在家里试试。", actionHint: "实用穿着建议", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "特殊脚型与鞋垫",
        titleEn: "Special Foot Types & Insoles",
        description: "讨论扁平足、高足弓等特殊需求和鞋垫推荐",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I have flat feet and my feet tend to hurt after a lot of walking. Do you have shoes specifically for that?",
            textZh: "我有扁平足，走多了脚会疼。有专门针对这个的鞋吗？",
          },
          {
            speaker: "them",
            role: "鞋店店员",
            textEn: "Absolutely. For flat feet, you need shoes with motion control and strong arch support. This model is specifically designed for overpronation, which is common with flat feet.",
            textZh: "当然有。扁平足需要有动态控制和强力足弓支撑的鞋。这款专门针对过度内翻设计的，扁平足常见这个问题。",
            keyPhrases: [
              { en: "flat feet", zh: "扁平足" },
              { en: "motion control", zh: "动态控制" },
              { en: "overpronation", zh: "过度内翻" },
            ],
            alternativeExpressions: [
              { textEn: "Yes! With flat feet, you need extra arch support and stability. This shoe is built for that — it corrects overpronation, which flat-footed people often deal with.", textZh: "有！扁平足需要额外的足弓支撑和稳定性。这双鞋就是为这个设计的——矫正扁平足常见的过度内翻。", actionHint: "专业推荐扁平足鞋款", frequency: "common" },
              { textEn: "Flat feet? Definitely. You want motion control and strong arch support. Let me show you this one — it's designed specifically for overpronation.", textZh: "扁平足？当然有。需要动态控制和强力足弓支撑。给您看这款——专门针对过度内翻设计。", actionHint: "根据足型推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What about insoles? Would aftermarket insoles help more than the ones that come with the shoe?",
            textZh: "鞋垫呢？另外买的鞋垫会比鞋自带的好吗？",
          },
          {
            speaker: "them",
            role: "鞋店店员",
            textEn: "Custom or premium insoles can make a big difference. We carry these orthotic insoles that provide extra arch support. You can also get custom-molded ones from a podiatrist, but these are a great over-the-counter option.",
            textZh: "定制或高级鞋垫确实效果更好。我们有这种矫形鞋垫，提供额外足弓支撑。您也可以找足科医生做定制的，但这些是很好的非处方选择。",
            keyPhrases: [
              { en: "orthotic insoles", zh: "矫形鞋垫" },
              { en: "custom-molded", zh: "定制的" },
              { en: "podiatrist", zh: "足科医生" },
              { en: "over-the-counter", zh: "非处方的/现成的" },
            ],
            alternativeExpressions: [
              { textEn: "Aftermarket insoles can be a game-changer. We have these orthotics with extra arch support — no prescription needed. For the best fit, a foot doctor can make custom ones.", textZh: "另配的鞋垫确实能改变很多。我们有这种矫形垫加强足弓支撑——不需要处方。要最佳效果可以找足科医生定制。", actionHint: "介绍不同等级的鞋垫", frequency: "common" },
              { textEn: "Great question! These orthotic insoles give way more support than what comes in the shoe. A podiatrist can make custom ones, but these are an excellent starting point.", textZh: "好问题！这些矫形鞋垫比鞋自带的支撑好很多。足科医生可以做定制的，但这些已经非常好了。", actionHint: "循序渐进推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll try the orthotic insoles. Should I remove the original insole first?",
            textZh: "我试试矫形鞋垫。要先把原来的鞋垫拿出来吗？",
          },
          {
            speaker: "them",
            role: "鞋店店员",
            textEn: "Yes, always remove the original insole before putting in a new one. Otherwise it'll feel too tight. This shoe has a removable insole, so it's easy. Let me show you.",
            textZh: "是的，放新鞋垫前一定要先拿掉原来的。不然会太紧。这双鞋的鞋垫是可拆卸的，很方便。我给您演示。",
            keyPhrases: [
              { en: "removable insole", zh: "可拆卸鞋垫" },
              { en: "remove the original", zh: "拿掉原来的" },
            ],
            alternativeExpressions: [
              { textEn: "Definitely — take out the old one first. Two insoles would be way too tight. This shoe makes it easy — the insole just pops right out.", textZh: "一定要——先拿掉旧的。两层鞋垫会太挤。这双鞋很方便——鞋垫直接就能取出来。", actionHint: "说明更换鞋垫方法", frequency: "common" },
              { textEn: "Always swap, never stack. Pull the original out, slide the new one in. See how easy it is? This shoe is designed for aftermarket insoles.", textZh: "要换不要叠。把原来的拿出来，新的放进去。看多容易？这双鞋就是为换鞋垫设计的。", actionHint: "演示并教操作", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Wow, that feels much better with the orthotic insole. Like walking on clouds.",
            textZh: "哇，换了矫形鞋垫感觉好多了。像走在云上一样。",
          },
          {
            speaker: "them",
            role: "鞋店店员",
            textEn: "Great to hear! These insoles should last about 6 to 12 months with daily wear. You'll know it's time to replace them when the arch support starts to flatten out.",
            textZh: "太好了！每天穿的话这些鞋垫大概能用6到12个月。当足弓支撑开始变平的时候就该换了。",
            keyPhrases: [
              { en: "daily wear", zh: "每天穿" },
              { en: "flatten out", zh: "变平" },
              { en: "replace", zh: "更换" },
            ],
            alternativeExpressions: [
              { textEn: "Glad it helps! You'll get 6 to 12 months out of them with regular use. When the arch starts going flat, that's your sign to get new ones.", textZh: "很高兴有用！正常使用能用6到12个月。足弓变平了就是该换新的信号。", actionHint: "说明使用寿命", frequency: "common" },
              { textEn: "They should hold up for about 6 months to a year. When you start feeling less support in the arch area, come back and we'll set you up with a fresh pair.", textZh: "大概能用半年到一年。觉得足弓支撑不够的时候再来，我们给您配新的。", actionHint: "邀请回购", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the shoes and two pairs of insoles. Can I also get some waterproof spray for rainy days?",
            textZh: "鞋子和两双鞋垫都要了。能再来一瓶防水喷雾吗？下雨天用。",
          },
          {
            speaker: "them",
            role: "鞋店店员",
            textEn: "Smart! This spray works on most materials. Just spray evenly and let it dry for 24 hours before wearing. Reapply every few weeks for best results. Your total today is $174.",
            textZh: "聪明！这款喷雾适用于大多数材质。均匀喷涂后晾干24小时再穿。每几周重新喷一次效果最好。今天一共174美元。",
            keyPhrases: [
              { en: "waterproof spray", zh: "防水喷雾" },
              { en: "spray evenly", zh: "均匀喷涂" },
              { en: "reapply", zh: "重新涂抹" },
            ],
            alternativeExpressions: [
              { textEn: "Good call! Spray it evenly, let it dry overnight, and reapply every couple of weeks. Works on just about any material. Your total is $174.", textZh: "好想法！均匀喷上，晾干过夜，每两周重新喷一次。适用于几乎所有材质。一共174美元。", actionHint: "说明使用方法并报总价", frequency: "common" },
              { textEn: "That's a smart investment! It works on leather, mesh, canvas — you name it. Spray, dry 24 hours, and redo every few weeks. Everything today comes to $174.", textZh: "很值得的投资！皮革、网布、帆布都适用。喷上晾24小时，几周后重喷。今天总共174美元。", actionHint: "介绍适用材质并结账", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 运动鞋选购 ====================
  {
    id: "shopping-shoe-sports",
    category: "shopping",
    titleZh: "运动鞋选购",
    titleEn: "Sports Shoes Shopping",
    description: "在运动鞋店根据运动类型选购合适的运动鞋",
    otherRole: "运动鞋店员",
    otherRoleIcon: "🏃",
    flows: [
      {
        id: "basic",
        titleZh: "选购跑步鞋",
        titleEn: "Choosing Running Shoes",
        description: "根据跑步习惯选购合适跑鞋的基本流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need a pair of running shoes. I'm training for a 10K race.",
            textZh: "你好，我需要一双跑步鞋。我在准备10公里比赛。",
          },
          {
            speaker: "them",
            role: "运动鞋店员",
            textEn: "That's exciting! How many miles per week are you currently running, and what surface do you mostly run on — road or trail?",
            textZh: "太棒了！您现在每周跑多少英里？主要在什么路面上跑——公路还是越野？",
            keyPhrases: [
              { en: "miles per week", zh: "每周跑多少英里" },
              { en: "road or trail", zh: "公路还是越野" },
            ],
            alternativeExpressions: [
              { textEn: "Awesome! Tell me about your running — how many miles a week, and are you hitting pavement or trails?", textZh: "太好了！跟我说说您的跑步情况——每周多少英里，跑路面还是越野？", actionHint: "了解跑步习惯", frequency: "common" },
              { textEn: "A 10K — that's great! What's your weekly mileage right now? And do you mostly run on roads or off-road?", textZh: "10公里——很棒！现在每周跑多少？主要在马路上还是越野？", actionHint: "针对比赛了解需求", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "About 15 miles a week, mostly on paved roads and sidewalks.",
            textZh: "大概每周15英里，主要在铺装路面和人行道上。",
          },
          {
            speaker: "them",
            role: "运动鞋店员",
            textEn: "For road running at that mileage, you'll want a shoe with good cushioning and responsiveness. Let me check your gait first — can you walk back and forth for me?",
            textZh: "这个跑量在公路上跑的话，需要缓震好且回弹好的鞋。我先看看您的步态——可以来回走几步吗？",
            keyPhrases: [
              { en: "cushioning", zh: "缓震" },
              { en: "responsiveness", zh: "回弹性" },
              { en: "gait", zh: "步态" },
            ],
            alternativeExpressions: [
              { textEn: "At 15 miles a week on road, you need solid cushioning and a snappy feel. First, let me look at how you walk — just go back and forth for me.", textZh: "每周15英里在路上跑，需要厚实缓震和弹性好的鞋。先让我看看您的走路方式——来回走几步。", actionHint: "分析步态选鞋", frequency: "common" },
              { textEn: "For that mileage on pavement, cushioning and bounce-back are key. Quick gait check first — just walk naturally back and forth, and I'll see what your feet are doing.", textZh: "这个路面跑量，缓震和回弹是关键。先做个简单步态检查——自然走几步让我看看您的脚型。", actionHint: "专业步态分析", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure. Like this?",
            textZh: "好的。这样走吗？",
          },
          {
            speaker: "them",
            role: "运动鞋店员",
            textEn: "Perfect. You have a neutral gait, which means you have a lot of options. I'd recommend this model — it's lightweight, has a responsive foam midsole, and it's very popular with 10K runners.",
            textZh: "很好。您的步态是中性的，意味着选择面很广。我推荐这款——轻量、有回弹性泡沫中底，在10公里跑者中非常受欢迎。",
            keyPhrases: [
              { en: "neutral gait", zh: "中性步态" },
              { en: "lightweight", zh: "轻量的" },
              { en: "foam midsole", zh: "泡沫中底" },
            ],
            alternativeExpressions: [
              { textEn: "Your gait is neutral — that's great, it gives you the most shoe options. I'd go with this one: light, responsive foam, and a 10K runner favorite.", textZh: "您的步态是中性的——太好了，可选的鞋最多。我推荐这双：轻便、泡沫回弹好，10公里跑者最爱。", actionHint: "根据步态精准推荐", frequency: "common" },
              { textEn: "Good news — neutral gait means you don't need any special correction. This shoe is perfect for you: lightweight with a bouncy midsole. Runners training for 10Ks love it.", textZh: "好消息——中性步态不需要特殊矫正。这双很适合您：轻量回弹好。备战10公里的跑者都爱它。", actionHint: "基于分析结果推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How many miles can I expect to get out of these before they wear out?",
            textZh: "这双鞋大概能跑多少英里？",
          },
          {
            speaker: "them",
            role: "运动鞋店员",
            textEn: "You can expect about 300 to 500 miles, depending on your weight and running style. At 15 miles a week, that's roughly 5 to 8 months of use.",
            textZh: "大概300到500英里，取决于您的体重和跑步姿势。按每周15英里算，大约能用5到8个月。",
            keyPhrases: [
              { en: "300 to 500 miles", zh: "300到500英里" },
              { en: "wear out", zh: "磨损" },
            ],
            alternativeExpressions: [
              { textEn: "Typically 300 to 500 miles before they need replacing. With your mileage, that's about 5 to 8 months.", textZh: "通常跑300到500英里需要换新。按您的跑量大概5到8个月。", actionHint: "说明鞋子寿命", frequency: "common" },
              { textEn: "Most running shoes last 300 to 500 miles. At 15 miles a week, you'll get a good half a year or more out of them.", textZh: "大多数跑鞋寿命300到500英里。每周15英里的话能穿大半年甚至更久。", actionHint: "帮顾客算使用时间", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds good. Can I take them for a quick jog in the store to test them out?",
            textZh: "不错。可以在店里小跑几步试试吗？",
          },
          {
            speaker: "them",
            role: "运动鞋店员",
            textEn: "Absolutely! We actually have a small treadmill in the back for testing. Feel free to run for a couple of minutes and see how they feel.",
            textZh: "当然！我们后面有一台小跑步机可以测试。随意跑几分钟感受一下。",
            keyPhrases: [
              { en: "treadmill", zh: "跑步机" },
              { en: "test them out", zh: "试试" },
            ],
            alternativeExpressions: [
              { textEn: "Go for it! We've got a treadmill in the back just for that. Take a quick run and see how they feel.", textZh: "来吧！后面有跑步机专门试鞋的。快速跑一下看感觉怎么样。", actionHint: "邀请在跑步机上试鞋", frequency: "common" },
              { textEn: "Sure! There's a test treadmill right over there. Jog for a minute or two — that's the best way to know if they're right.", textZh: "当然！那边有测试跑步机。跑一两分钟——这是最好的判断方法。", actionHint: "鼓励实际体验", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "专业运动鞋选择",
        titleEn: "Specialized Sports Shoes",
        description: "根据不同运动选择专业运动鞋",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I also need shoes for the gym. Can I use running shoes for weight training?",
            textZh: "我还需要健身房穿的鞋。跑步鞋能做力量训练吗？",
          },
          {
            speaker: "them",
            role: "运动鞋店员",
            textEn: "I wouldn't recommend it. Running shoes have elevated heels and soft cushioning, which can make you unstable during lifts. For weight training, you want a flat, firm sole for better ground contact.",
            textZh: "不太建议。跑步鞋鞋跟高、缓震软，做力量训练时会不稳。力量训练需要平底硬底的鞋，贴地性更好。",
            keyPhrases: [
              { en: "elevated heel", zh: "高鞋跟" },
              { en: "unstable during lifts", zh: "举重时不稳" },
              { en: "flat, firm sole", zh: "平底硬底" },
              { en: "ground contact", zh: "贴地性" },
            ],
            alternativeExpressions: [
              { textEn: "Not ideal — running shoes are too squishy and raised for lifting. You need something flat and solid so you feel connected to the ground.", textZh: "不太理想——跑鞋太软太高了不适合举铁。需要平坦结实的鞋才能感觉脚踏实地。", actionHint: "解释为什么不能跑鞋健身", frequency: "common" },
              { textEn: "I'd skip the running shoes for lifting. The soft cushion and high heel actually work against you. For weights, go flat and firm.", textZh: "举铁的话不建议穿跑鞋。软缓震和高鞋跟反而不利。力量训练要平底硬底。", actionHint: "专业区分运动鞋类型", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What about cross-trainers? Would those work for both?",
            textZh: "综合训练鞋呢？两种都能用吗？",
          },
          {
            speaker: "them",
            role: "运动鞋店员",
            textEn: "Cross-trainers are a good compromise if you do a mix of activities — some running, some lifting, some classes. They won't be as specialized as a dedicated running shoe or lifting shoe, but they're versatile.",
            textZh: "如果您做混合运动——跑步、举重、团课都有——综合训练鞋是个好折中。虽然不如专门的跑鞋或举重鞋专业，但很全能。",
            keyPhrases: [
              { en: "cross-trainers", zh: "综合训练鞋" },
              { en: "compromise", zh: "折中" },
              { en: "versatile", zh: "全能的/多功能的" },
              { en: "dedicated", zh: "专门的" },
            ],
            alternativeExpressions: [
              { textEn: "If you're doing a bit of everything, cross-trainers are your best bet. Not as specialized, but they handle running, lifting, and classes pretty well.", textZh: "如果什么运动都做一点，综合训练鞋最合适。不那么专业但跑步、举铁、团课都能应付。", actionHint: "推荐多功能鞋", frequency: "common" },
              { textEn: "Cross-trainers split the difference nicely. They won't be perfect for any one thing, but if you do a mix of workouts, they cover all the bases.", textZh: "综合训练鞋是很好的折中。虽然不会哪一项都完美，但如果运动种类多就全都能应付。", actionHint: "客观分析适用性", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I mainly do weightlifting and some HIIT classes. What's the best option?",
            textZh: "我主要做力量训练和一些HIIT课程。什么最合适？",
          },
          {
            speaker: "them",
            role: "运动鞋店员",
            textEn: "For that combo, I'd suggest this training shoe. It has a low drop for stability during squats and deadlifts, but enough flexibility in the forefoot for lateral movements in HIIT.",
            textZh: "这种组合的话，我建议这款训练鞋。低落差设计让深蹲和硬拉更稳定，但前掌有足够的灵活性适应HIIT的横向移动。",
            keyPhrases: [
              { en: "low drop", zh: "低落差" },
              { en: "squats", zh: "深蹲" },
              { en: "deadlifts", zh: "硬拉" },
              { en: "lateral movements", zh: "横向移动" },
            ],
            alternativeExpressions: [
              { textEn: "This training shoe nails that combo — flat enough for lifting, flexible enough for HIIT. Low drop keeps you stable on squats and deadlifts.", textZh: "这款训练鞋完美适合这种组合——够平适合举铁，够灵活适合HIIT。低落差让深蹲硬拉更稳。", actionHint: "精准匹配运动需求", frequency: "common" },
              { textEn: "Try this one — it's built for exactly what you're doing. Stable base for heavy lifts, bendy forefoot for side-to-side HIIT moves.", textZh: "试试这双——就是为您这种训练设计的。举重有稳定底座，前掌灵活应对HIIT横向动作。", actionHint: "强调专业适配性", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "This feels really stable. Much different from my running shoes. Should I get different socks for training too?",
            textZh: "感觉确实很稳。跟跑鞋完全不同。训练需要穿不同的袜子吗？",
          },
          {
            speaker: "them",
            role: "运动鞋店员",
            textEn: "Good question! For training, ankle socks with extra padding on the heel and ball of the foot are ideal. Moisture-wicking fabric is a must to prevent blisters.",
            textZh: "好问题！训练的话，脚踝高度的袜子在脚跟和前脚掌处有额外垫的最理想。吸湿速干面料是必须的，防止起水泡。",
            keyPhrases: [
              { en: "ankle socks", zh: "短袜" },
              { en: "padding", zh: "缓冲垫" },
              { en: "moisture-wicking", zh: "吸湿速干的" },
              { en: "blisters", zh: "水泡" },
            ],
            alternativeExpressions: [
              { textEn: "Socks matter more than people think! Go with padded ankle socks in a moisture-wicking material. That'll keep your feet dry and blister-free.", textZh: "袜子比很多人想的重要！选有垫的短袜，吸湿速干面料。保持脚干燥不起水泡。", actionHint: "强调袜子的重要性", frequency: "common" },
              { textEn: "For gym training, you want ankle-length socks with cushioning at the heel and ball. Make sure they're quick-dry — cotton gets sweaty and causes blisters.", textZh: "健身训练要选脚踝长度、脚跟和前掌有缓冲的袜子。要速干的——棉的容易出汗起泡。", actionHint: "推荐避免棉袜", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the training shoes and a few pairs of those socks. Can I wear the shoes out of the store?",
            textZh: "训练鞋和几双袜子都要了。我可以穿着新鞋走出去吗？",
          },
          {
            speaker: "them",
            role: "运动鞋店员",
            textEn: "Sure! I'll cut the tags and put your old shoes in the box. Just keep the receipt — if you have any issues, you can exchange them within 60 days even after wearing them.",
            textZh: "当然！我帮您剪掉标签，旧鞋放盒子里。留好小票——60天内有任何问题，穿过了也可以换。",
            keyPhrases: [
              { en: "cut the tags", zh: "剪掉标签" },
              { en: "exchange within 60 days", zh: "60天内可换" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely! Let me snip the tags and box up your old ones. Hang on to the receipt though — you've got 60 days to swap them, even if they're worn.", textZh: "当然！我把标签剪了，旧鞋装盒里。收据留好——60天内可以换，穿过了也行。", actionHint: "帮忙处理并说明退换政策", frequency: "common" },
              { textEn: "No problem — I'll remove the tags so you can walk right out in them. Your old pair goes in the box. Remember, 60-day exchange even after wearing!", textZh: "没问题——我把标签去掉您直接穿走。旧鞋放盒里。记住60天内可换，穿过了也算！", actionHint: "快速处理让顾客穿走", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 礼品建议 ====================
  {
    id: "shopping-gift-suggestion",
    category: "shopping",
    titleZh: "请店员推荐礼品",
    titleEn: "Gift Suggestions",
    description: "不确定买什么时请店员根据对象和预算推荐礼品",
    otherRole: "礼品店店员",
    otherRoleIcon: "🎀",
    flows: [
      {
        id: "basic",
        titleZh: "基本礼品推荐",
        titleEn: "Basic Gift Recommendations",
        description: "告知店员收礼对象和预算，获取推荐",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need help finding a gift. I have no idea what to get.",
            textZh: "你好，我需要帮忙挑礼物。完全不知道买什么。",
          },
          {
            speaker: "them",
            role: "礼品店店员",
            textEn: "I'd love to help! Who is the gift for, and what's the occasion?",
            textZh: "很乐意帮忙！礼物是送给谁的？什么场合？",
            keyPhrases: [
              { en: "who is it for", zh: "送给谁" },
              { en: "occasion", zh: "场合" },
            ],
            alternativeExpressions: [
              { textEn: "Happy to help you find something! Tell me who it's for and what you're celebrating.", textZh: "很高兴帮您选！跟我说说送给谁，什么场合。", actionHint: "了解送礼对象", frequency: "common" },
              { textEn: "Let's figure this out together! Who's the lucky person, and is this for a birthday, holiday, or something else?", textZh: "我们一起想！收礼物的人是谁？是生日、节日还是其他场合？", actionHint: "热情引导选礼", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's for my wife. Our wedding anniversary is next week.",
            textZh: "送我太太的。下周是我们的结婚纪念日。",
          },
          {
            speaker: "them",
            role: "礼品店店员",
            textEn: "How lovely! What's your budget range? And does she have any particular interests — like fashion, cooking, skincare, or reading?",
            textZh: "太浪漫了！您的预算大概多少？她有什么特别的爱好吗——比如时尚、烹饪、护肤、阅读？",
            keyPhrases: [
              { en: "budget range", zh: "预算范围" },
              { en: "particular interests", zh: "特别的爱好" },
            ],
            alternativeExpressions: [
              { textEn: "That's sweet! How much are you thinking of spending? And what kind of things is she into?", textZh: "真甜！您打算花多少？她喜欢什么类型的东西？", actionHint: "了解预算和兴趣", frequency: "common" },
              { textEn: "An anniversary — how nice! What's your price range, and does she have any hobbies I can base the suggestion on?", textZh: "纪念日——太浪漫了！您的价位？她有什么爱好我可以据此推荐？", actionHint: "针对场合了解偏好", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Maybe $50 to $100. She loves cooking and drinking tea.",
            textZh: "大概50到100美元。她喜欢烹饪和喝茶。",
          },
          {
            speaker: "them",
            role: "礼品店店员",
            textEn: "I have some great options! This premium tea sampler set has 12 different varieties from around the world — it's $45. Or this beautiful ceramic teapot with matching cups is $78. We also have a gourmet cooking spice collection for $55.",
            textZh: "有几个很好的选择！这套精品茶叶品鉴装有12种来自世界各地的茶——45美元。这套漂亮的陶瓷茶壶配茶杯78美元。我们还有美食烹饪香料套装55美元。",
            keyPhrases: [
              { en: "tea sampler set", zh: "茶叶品鉴套装" },
              { en: "ceramic teapot", zh: "陶瓷茶壶" },
              { en: "gourmet", zh: "美食/精品" },
              { en: "spice collection", zh: "香料套装" },
            ],
            alternativeExpressions: [
              { textEn: "A few ideas! A world tea sampler for $45, a gorgeous teapot set for $78, or a gourmet spice collection for $55. All great for a cooking and tea lover.", textZh: "几个想法！世界茶叶品鉴45美元、漂亮茶壶套装78美元、美食香料套装55美元。喜欢烹饪和茶的人都会爱。", actionHint: "列举多个选择", frequency: "common" },
              { textEn: "Let me show you three options. This tea sampler has 12 global teas — $45. This handmade teapot set is $78. And for cooking, this spice set is $55. Any of these sound right?", textZh: "给您看三个选择。这套茶叶品鉴有12种世界名茶——45。手工茶壶套装78。烹饪的话这套香料55。哪个听起来合适？", actionHint: "展示并征求意见", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The teapot set sounds perfect. Can I see it up close?",
            textZh: "茶壶套装听起来很好。可以近距离看看吗？",
          },
          {
            speaker: "them",
            role: "礼品店店员",
            textEn: "Of course! It's handmade by a local artisan. Each piece is slightly unique. It comes in this gift box with a small booklet about the artist.",
            textZh: "当然！这是本地工匠手工制作的。每件都是独一无二的。装在这个礼盒里，附带一本关于工匠的小册子。",
            keyPhrases: [
              { en: "handmade", zh: "手工制作的" },
              { en: "artisan", zh: "工匠" },
              { en: "unique", zh: "独一无二的" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! This is made by hand by a local artist — every piece is one of a kind. It comes boxed with a card about the maker.", textZh: "当然！这是本地艺术家手工做的——每件都独一无二。配有礼盒和制作人介绍卡。", actionHint: "展示手工品故事", frequency: "common" },
              { textEn: "It's handcrafted locally — no two are exactly alike. Comes in a beautiful gift box with a little story about the artisan who made it.", textZh: "本地手工制作——没有两件完全一样。装在漂亮礼盒里附带工匠的小故事。", actionHint: "强调独特性和故事", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "She'd love this! I'll take it. Thank you for the wonderful suggestion.",
            textZh: "她一定会喜欢！我要了。谢谢你的好建议。",
          },
          {
            speaker: "them",
            role: "礼品店店员",
            textEn: "Great choice! Would you like me to add some tissue paper and tie a bow on the box? It's on the house.",
            textZh: "好选择！需要我加些薄纸和在盒子上系个蝴蝶结吗？免费的。",
            keyPhrases: [
              { en: "on the house", zh: "免费的（店家赠送的）" },
              { en: "tie a bow", zh: "系蝴蝶结" },
            ],
            alternativeExpressions: [
              { textEn: "Lovely pick! Want me to dress it up with tissue paper and a bow? No extra charge.", textZh: "很好的选择！要我用薄纸和蝴蝶结装饰一下吗？不额外收费。", actionHint: "提供免费包装升级", frequency: "common" },
              { textEn: "She'll love it! I can wrap the box with tissue and a bow for you — complimentary of course.", textZh: "她一定会喜欢！我可以帮您用薄纸和蝴蝶结包一下——当然是免费的。", actionHint: "主动提供增值服务", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "根据文化习俗选礼物",
        titleEn: "Culturally Appropriate Gifts",
        description: "为不同文化背景的人选择合适的礼物",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I need a gift for my American colleague who invited me to a housewarming party. What's appropriate?",
            textZh: "我需要给邀请我参加乔迁派对的美国同事买份礼物。什么合适？",
            culturalNote: "美国乔迁派对（housewarming party）常见礼物：一瓶酒、蜡烛、厨房用品、植物等。通常不需要特别贵重。",
          },
          {
            speaker: "them",
            role: "礼品店店员",
            textEn: "For a housewarming, you can't go wrong with a nice candle, a bottle of wine, or something for the home. How much were you thinking of spending?",
            textZh: "乔迁礼物的话，一支好蜡烛、一瓶酒或者家居用品都不会出错。您打算花多少？",
            keyPhrases: [
              { en: "housewarming", zh: "乔迁" },
              { en: "can't go wrong with", zh: "……准没错" },
            ],
            alternativeExpressions: [
              { textEn: "A candle, wine, or something decorative for the house are all safe bets for a housewarming. What's your budget?", textZh: "蜡烛、酒或者家居装饰品做乔迁礼物都很保险。您的预算多少？", actionHint: "推荐常见乔迁礼物", frequency: "common" },
              { textEn: "Housewarming gifts are easy! A nice candle, a plant, or a bottle of wine always works. How much do you want to spend?", textZh: "乔迁礼物好选！一支好蜡烛、一盆植物或一瓶酒总不会错。您想花多少？", actionHint: "轻松给出安全选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Around $30 to $50. I don't want to seem too cheap or too extravagant.",
            textZh: "30到50美元左右。不想显得太便宜，也不想太奢侈。",
          },
          {
            speaker: "them",
            role: "礼品店店员",
            textEn: "That's a perfect range! This soy candle set is $35 — it's locally made and comes in a beautiful box. Or this olive oil and vinegar set is $42 and great for someone who cooks.",
            textZh: "这个价位很合适！这套大豆蜡烛35美元——本地产的，盒子很漂亮。或者这套橄榄油和醋42美元，喜欢做饭的人会很喜欢。",
            keyPhrases: [
              { en: "soy candle", zh: "大豆蜡烛" },
              { en: "locally made", zh: "本地制造的" },
              { en: "olive oil and vinegar set", zh: "橄榄油和醋套装" },
            ],
            alternativeExpressions: [
              { textEn: "Great budget! How about this local soy candle set for $35? Or if they cook, this olive oil and vinegar gift set for $42 is always a hit.", textZh: "预算刚好！这套本地大豆蜡烛35美元怎么样？如果他们喜欢做菜，这套橄榄油和醋42美元很受欢迎。", actionHint: "根据预算推荐", frequency: "common" },
              { textEn: "I have two great picks in that range. A $35 handmade candle set in a gorgeous box, or a $42 gourmet oil-and-vinegar set that foodies love.", textZh: "这个价位我有两个好选择。35美元手工蜡烛套装盒子很精美，或者42美元美食油醋套装吃货们都爱。", actionHint: "精选两个推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is it okay to bring a gift from my home country instead? I brought some traditional tea.",
            textZh: "可以带我家乡的礼物吗？我带了一些传统茶叶。",
          },
          {
            speaker: "them",
            role: "礼品店店员",
            textEn: "That's actually a wonderful idea! Americans love receiving gifts from other cultures — it shows thoughtfulness. You could pair it with a nice card explaining the tea tradition. We have some beautiful blank cards here.",
            textZh: "这其实是个很棒的主意！美国人很喜欢收到其他文化的礼物——显得很用心。您可以配一张卡片解释一下茶文化。我们有漂亮的空白卡片。",
            keyPhrases: [
              { en: "thoughtfulness", zh: "用心/体贴" },
              { en: "pair it with", zh: "搭配" },
              { en: "blank cards", zh: "空白卡片" },
            ],
            alternativeExpressions: [
              { textEn: "Oh, that's even better! A gift from your home country is so personal. Add a card with a little note about the tea and it'll mean a lot.", textZh: "那更好！家乡的礼物特别有心意。配张卡片写一下茶的小知识会更有意义。", actionHint: "鼓励带家乡礼物", frequency: "common" },
              { textEn: "People love gifts that have a story behind them! Bring your tea and write a little card about the tradition. We sell beautiful cards if you need one.", textZh: "大家都喜欢有故事的礼物！带上您的茶写一张小卡片介绍茶文化。我们有漂亮的卡片。", actionHint: "建议用故事增加价值", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good idea! I'll take a card. One more thing — should I wrap the tea, or is it okay to give it in the original packaging?",
            textZh: "好主意！我买一张卡片。还有一个问题——茶叶需要包装一下，还是原包装就行？",
          },
          {
            speaker: "them",
            role: "礼品店店员",
            textEn: "Either is fine, but adding a gift bag or wrapping paper makes it feel more special. We have small gift bags for $3 that would be just the right size. A little ribbon and it's perfect.",
            textZh: "都可以，但加个礼品袋或包装纸会更有心意。我们有小礼品袋3美元，大小刚好。加条丝带就完美了。",
            keyPhrases: [
              { en: "gift bag", zh: "礼品袋" },
              { en: "wrapping paper", zh: "包装纸" },
            ],
            alternativeExpressions: [
              { textEn: "Original packaging is okay, but a gift bag takes it up a notch. We have $3 bags that are the perfect size. Add a ribbon and you're golden.", textZh: "原包装也行，但加个礼品袋档次就不一样了。3美元的袋子大小刚好。加条丝带就完美。", actionHint: "建议简单包装升级", frequency: "common" },
              { textEn: "Both work! But if you want it to feel extra special, a little gift bag does wonders. Just $3 and a ribbon — done!", textZh: "都可以！但如果想更特别，一个小礼品袋效果惊人。只要3美元加条丝带——搞定！", actionHint: "轻松推荐增加仪式感", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. The card, a gift bag, and some ribbon please. This is my first American house party — anything else I should know?",
            textZh: "好的。卡片、礼品袋和丝带都要。这是我第一次参加美国人的家庭聚会——还有什么需要注意的？",
          },
          {
            speaker: "them",
            role: "礼品店店员",
            textEn: "Just be yourself! It's casual — compliment their new home, offer to help in the kitchen, and don't worry about taking your shoes off unless they ask. Most importantly, have fun! Your total is $6.50.",
            textZh: "做你自己就好！很轻松的——夸夸他们的新家，主动帮忙做点事，除非他们要求否则不用脱鞋。最重要的是开心！一共6.50美元。",
            keyPhrases: [
              { en: "compliment", zh: "夸赞/称赞" },
              { en: "casual", zh: "轻松随意的" },
            ],
            alternativeExpressions: [
              { textEn: "Relax and have a good time! Say something nice about the house, be friendly, and follow the host's lead. That's $6.50 for everything. Enjoy the party!", textZh: "放松享受就好！夸夸房子，友好一点，跟着主人的节奏走。一共6.50美元。祝聚会愉快！", actionHint: "给出社交建议并结账", frequency: "common" },
              { textEn: "Don't overthink it — Americans are pretty relaxed at house parties. Just be warm, say the place looks great, and you'll fit right in. $6.50 total. Have fun!", textZh: "别想太多——美国人的家庭聚会很随意。热情一点，夸一下房子，就能融入了。一共6.50美元。开心去！", actionHint: "安抚紧张情绪并送祝福", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 礼品包装服务 ====================
  {
    id: "shopping-gift-wrapping",
    category: "shopping",
    titleZh: "商场礼品包装服务",
    titleEn: "Gift Wrapping Service",
    description: "在商场的礼品包装柜台请求包装服务，选择包装纸和装饰",
    otherRole: "包装服务员",
    otherRoleIcon: "🎊",
    flows: [
      {
        id: "basic",
        titleZh: "基本包装服务",
        titleEn: "Basic Wrapping Service",
        description: "在商场柜台请求礼品包装的标准流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, is this where I can get gifts wrapped?",
            textZh: "你好，这里可以包装礼物吗？",
          },
          {
            speaker: "them",
            role: "包装服务员",
            textEn: "Yes! Welcome to our gift wrapping station. How many items do you need wrapped?",
            textZh: "是的！欢迎来到礼品包装柜台。您需要包装几件？",
            keyPhrases: [
              { en: "gift wrapping station", zh: "礼品包装柜台" },
              { en: "how many items", zh: "几件" },
            ],
            alternativeExpressions: [
              { textEn: "You're in the right place! How many gifts do you need wrapped today?", textZh: "来对地方了！今天要包几件礼物？", actionHint: "确认服务并了解数量", frequency: "common" },
              { textEn: "This is our wrapping counter! What have you got for me to wrap up?", textZh: "这就是我们的包装柜台！有什么要我帮您包的？", actionHint: "热情接待", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Just this one — a perfume set. How much does wrapping cost?",
            textZh: "就一件——一套香水。包装多少钱？",
          },
          {
            speaker: "them",
            role: "包装服务员",
            textEn: "For a box this size, it's $5 for standard wrapping with paper and ribbon, or $8 for premium wrapping which includes a bow and a gift tag.",
            textZh: "这个大小的盒子，标准包装（包装纸加丝带）5美元，高级包装（加蝴蝶结和礼品签）8美元。",
            keyPhrases: [
              { en: "standard wrapping", zh: "标准包装" },
              { en: "premium wrapping", zh: "高级包装" },
              { en: "gift tag", zh: "礼品签" },
              { en: "bow", zh: "蝴蝶结" },
            ],
            alternativeExpressions: [
              { textEn: "For this size, standard is $5 — paper and ribbon. Or go premium for $8 — that adds a bow and a tag. Which do you prefer?", textZh: "这个大小的，标准5美元——纸加丝带。高级8美元——多蝴蝶结和签。您选哪种？", actionHint: "对比两种包装等级", frequency: "common" },
              { textEn: "We have two options: basic wrap at $5, or the full treatment at $8 with a bow and gift tag. The premium one looks really polished.", textZh: "有两种选择：基础包装5美元，或者全套8美元带蝴蝶结和礼品签。高级的看起来特别精致。", actionHint: "推荐升级包装", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with the premium. Can I choose the wrapping paper color?",
            textZh: "我选高级的。可以选包装纸颜色吗？",
          },
          {
            speaker: "them",
            role: "包装服务员",
            textEn: "Of course! We have red, gold, silver, blue, and this new floral pattern. Which catches your eye?",
            textZh: "当然！我们有红色、金色、银色、蓝色和这款新的花卉图案。您喜欢哪个？",
            keyPhrases: [
              { en: "floral pattern", zh: "花卉图案" },
              { en: "catches your eye", zh: "吸引您的" },
            ],
            alternativeExpressions: [
              { textEn: "We've got five options: red, gold, silver, blue, and a pretty floral print. Which one do you like?", textZh: "有五种选择：红、金、银、蓝和漂亮的花卉图案。您喜欢哪个？", actionHint: "展示颜色选项", frequency: "common" },
              { textEn: "Pick your favorite! We have classic colors — red, gold, silver, blue — and this gorgeous new floral one that just came in.", textZh: "选您喜欢的！有经典色——红、金、银、蓝——还有刚到的漂亮花卉新款。", actionHint: "推荐新款花色", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The gold one looks elegant. Can I write something on the gift tag?",
            textZh: "金色的看起来很优雅。礼品签上可以写字吗？",
          },
          {
            speaker: "them",
            role: "包装服务员",
            textEn: "Here's a pen — you can write your message on the tag. I'll attach it to the ribbon when I'm done wrapping. It'll take about five minutes.",
            textZh: "给您笔——在签上写您的留言就行。包好后我把它系到丝带上。大约五分钟。",
            keyPhrases: [
              { en: "attach it", zh: "系上去/贴上去" },
            ],
            alternativeExpressions: [
              { textEn: "Here you go — write whatever you'd like on the tag. When the wrapping's done, I'll tie it on. Should be about five minutes.", textZh: "给您——签上想写什么写什么。包好了我就把它系上去。大概五分钟。", actionHint: "说明操作和等待时间", frequency: "common" },
              { textEn: "Take this pen and jot down your message. I'll have it wrapped and the tag attached in about five minutes.", textZh: "拿这支笔写上您的留言。大约五分钟包好系上签。", actionHint: "简洁说明流程", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That looks beautiful! You did an amazing job. Thank you.",
            textZh: "好漂亮！你包得太好了。谢谢。",
          },
          {
            speaker: "them",
            role: "包装服务员",
            textEn: "Thank you! I hope the recipient loves it. We also have gift bags if you need them for other items. Happy shopping!",
            textZh: "谢谢！希望收礼人会喜欢。如果其他东西需要，我们也有礼品袋。购物愉快！",
            keyPhrases: [
              { en: "recipient", zh: "收礼人" },
            ],
            alternativeExpressions: [
              { textEn: "You're welcome! They're going to love this. If you have more to wrap, just come back. Happy shopping!", textZh: "不客气！他们一定会喜欢。还有要包的随时回来。购物愉快！", actionHint: "友好送别", frequency: "common" },
              { textEn: "My pleasure! Hope it makes them smile. Don't forget, we have bags too if you pick up more gifts today!", textZh: "很高兴帮忙！希望能让他们开心。别忘了，今天再买礼物我们还有袋子！", actionHint: "推荐继续购物", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "多件包装与定制需求",
        titleEn: "Multiple Items & Custom Requests",
        description: "包装多件礼物和处理特殊包装要求",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I have five items that need wrapping — they're all different sizes. And I need them done in about 20 minutes. Is that possible?",
            textZh: "我有五件要包装的——大小都不一样。大概20分钟内需要完成。可以吗？",
          },
          {
            speaker: "them",
            role: "包装服务员",
            textEn: "That's tight, but we can do it! Let me see all the items so I can plan the paper sizes. Are they all for the same person or different recipients?",
            textZh: "有点紧，但可以！让我看看所有的东西好安排包装纸大小。都是送同一个人还是不同的人？",
            keyPhrases: [
              { en: "that's tight", zh: "时间有点紧" },
              { en: "different recipients", zh: "不同的收礼人" },
            ],
            alternativeExpressions: [
              { textEn: "Twenty minutes for five? Challenge accepted! Show me everything and tell me — same person or different people?", textZh: "五件二十分钟？挑战接受了！都给我看看——送同一个人还是不同的人？", actionHint: "积极接受挑战", frequency: "common" },
              { textEn: "We can make it work! Lay everything out for me so I can plan. Are these all going to one person or multiple people?", textZh: "能搞定！都摆出来我好安排。这些都送一个人还是好几个人？", actionHint: "高效规划", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Three are for family members and two are for friends. Can I use different wrapping paper for each group?",
            textZh: "三件送家人，两件送朋友。可以两组用不同的包装纸吗？",
          },
          {
            speaker: "them",
            role: "包装服务员",
            textEn: "Absolutely! How about the gold paper for family and the blue for friends? That way you can easily tell them apart without peeking inside.",
            textZh: "当然！金色的送家人，蓝色的送朋友怎么样？这样不用看里面就知道是给谁的。",
            keyPhrases: [
              { en: "tell them apart", zh: "分辨开" },
              { en: "peeking inside", zh: "偷看里面" },
            ],
            alternativeExpressions: [
              { textEn: "Great idea! Gold for family, blue for friends — that way you'll know which is which at a glance.", textZh: "好主意！金色送家人，蓝色送朋友——一看就知道哪个是谁的。", actionHint: "帮忙区分包装", frequency: "common" },
              { textEn: "Love it! Let's do gold for the family gifts and blue for the friends. Easy to sort on the big day!", textZh: "很好！家人的用金色，朋友的用蓝色。送礼那天一眼就能分清！", actionHint: "实用的颜色分组方案", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good idea! One of them is an oddly shaped item — this stuffed animal. Can you wrap that?",
            textZh: "好主意！有一件形状很不规则——这个毛绒玩具。能包吗？",
          },
          {
            speaker: "them",
            role: "包装服务员",
            textEn: "For irregular shapes like this, I'd recommend a gift bag instead of wrapping paper. It looks just as nice and the stuffed animal won't get squished. I can add some colored tissue paper on top.",
            textZh: "这种不规则形状的，我建议用礼品袋而不是包装纸。一样好看，而且毛绒玩具不会被压扁。上面可以加些彩色薄纸。",
            keyPhrases: [
              { en: "irregular shapes", zh: "不规则形状" },
              { en: "gift bag", zh: "礼品袋" },
              { en: "squished", zh: "被压扁" },
              { en: "tissue paper", zh: "薄纸" },
            ],
            alternativeExpressions: [
              { textEn: "Tricky shape! A gift bag works way better for stuffed animals — no squishing, and it still looks great with tissue paper on top.", textZh: "形状不好包！毛绒玩具用礼品袋好得多——不会压扁，上面放薄纸也很好看。", actionHint: "根据物品形状建议", frequency: "common" },
              { textEn: "For oddly shaped things like this, I always suggest a bag. Wrapping paper would crush the stuffed animal. I'll fluff up some tissue paper on top — looks beautiful.", textZh: "这种形状不规则的我都建议用袋子。包装纸会把毛绒玩具压变形。上面放些薄纸——特别好看。", actionHint: "专业建议替代方案", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Smart! How much will all five cost?",
            textZh: "聪明！五件一共多少钱？",
          },
          {
            speaker: "them",
            role: "包装服务员",
            textEn: "Four standard wraps at $5 each and one gift bag at $4, so $24 total. Since you're doing five or more items, I can give you a 10% discount — that brings it down to $21.60.",
            textZh: "四个标准包装每个5美元，一个礼品袋4美元，一共24美元。因为您有五件以上，打九折——21.60美元。",
            keyPhrases: [
              { en: "10% discount", zh: "九折" },
              { en: "brings it down to", zh: "降到" },
            ],
            alternativeExpressions: [
              { textEn: "That's four wraps at $5 and one bag at $4 — $24. But with five items, you get 10% off, so it's only $21.60.", textZh: "四个包装每个5美元加一个袋子4美元——24美元。但五件以上打九折，只要21.60。", actionHint: "报价并说明折扣", frequency: "common" },
              { textEn: "Let me add it up: $20 for the wraps plus $4 for the bag is $24. But good news — five or more items gets 10% off, bringing you down to $21.60.", textZh: "算一下：包装20加袋子4一共24。好消息——五件以上九折，降到21.60。", actionHint: "逐步计算并告知优惠", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great deal. One more request — can you make one of the family ones extra special? It's for my mom's birthday.",
            textZh: "很划算。还有一个要求——能把其中一个给家人的弄得特别一点吗？是我妈妈的生日礼物。",
          },
          {
            speaker: "them",
            role: "包装服务员",
            textEn: "Of course! I'll add a double bow and some sparkle ribbon at no extra charge. We also have these little flower decorations I can stick on top — they look gorgeous. Mom's going to love it!",
            textZh: "当然！我加个双层蝴蝶结和闪光丝带，不另外收费。我们还有这种小花装饰可以贴上面——特别漂亮。妈妈一定会喜欢的！",
            keyPhrases: [
              { en: "double bow", zh: "双层蝴蝶结" },
              { en: "sparkle ribbon", zh: "闪光丝带" },
              { en: "at no extra charge", zh: "不另外收费" },
            ],
            alternativeExpressions: [
              { textEn: "For Mom's birthday? I'll go all out — double bow, sparkly ribbon, and a little flower on top. On me. She'll love it!", textZh: "妈妈的生日？我全力以赴——双层蝴蝶结、闪光丝带，再加个小花。免费的。她一定会喜欢！", actionHint: "为特别场合加料", frequency: "common" },
              { textEn: "Say no more! I'll make it extra special — double bow, glitter ribbon, and a floral accent. No extra cost. Your mom's going to smile so big!", textZh: "不用多说！我会让它特别好看——双层蝴蝶结、亮片丝带加花朵装饰。不加钱。妈妈一定笑开花！", actionHint: "热情升级包装", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 家居装饰 ====================
  {
    id: "shopping-home-decor",
    category: "shopping",
    titleZh: "家居装饰店选购",
    titleEn: "Home Decor Shopping",
    description: "在家居装饰店选购装饰品、灯具和家居用品",
    otherRole: "家居顾问",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "basic",
        titleZh: "基本家居选购",
        titleEn: "Basic Home Decor Shopping",
        description: "选购家居装饰品的基本流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just moved into a new apartment and I need some decorations. Where should I start?",
            textZh: "你好，我刚搬进新公寓，需要一些装饰品。从哪里开始好？",
          },
          {
            speaker: "them",
            role: "家居顾问",
            textEn: "Welcome! A good starting point is to think about your style — do you prefer modern and minimalist, rustic and cozy, or colorful and eclectic?",
            textZh: "欢迎！一个好的起点是想想您的风格——您喜欢现代简约、乡村温馨，还是多彩混搭？",
            keyPhrases: [
              { en: "minimalist", zh: "简约的" },
              { en: "rustic", zh: "乡村风的" },
              { en: "eclectic", zh: "混搭的" },
            ],
            alternativeExpressions: [
              { textEn: "Exciting! First question: what's your vibe? Clean and modern, warm and rustic, or fun and colorful?", textZh: "太棒了！第一个问题：您喜欢什么氛围？干净现代、温暖乡村风，还是活泼多彩？", actionHint: "了解装修风格偏好", frequency: "common" },
              { textEn: "How fun — a blank canvas! Let's start with style. Are you drawn to sleek minimalism, cozy farmhouse, or a bold mix of everything?", textZh: "太有趣了——一张白纸！先聊风格。您被极简风、农舍温馨风，还是大胆混搭风吸引？", actionHint: "引导顾客探索风格", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I lean toward modern and minimalist. Something clean and simple.",
            textZh: "我偏向现代简约。干净简洁的那种。",
          },
          {
            speaker: "them",
            role: "家居顾问",
            textEn: "Great taste! For minimalist style, I'd recommend starting with a statement piece — like this geometric wall art or a sleek floor lamp. Then add texture with throw pillows and a simple area rug.",
            textZh: "好品味！简约风格的话，我建议先选一个主角——比如这幅几何墙艺或一盏简洁的落地灯。然后用抱枕和简单的地毯增加层次感。",
            keyPhrases: [
              { en: "statement piece", zh: "主角/点睛之笔" },
              { en: "geometric wall art", zh: "几何墙艺" },
              { en: "floor lamp", zh: "落地灯" },
              { en: "throw pillows", zh: "抱枕" },
              { en: "area rug", zh: "地毯" },
            ],
            alternativeExpressions: [
              { textEn: "Love that! With minimalist, less is more. Start with one eye-catching piece — a cool lamp or wall art — then layer in some pillows and a rug for warmth.", textZh: "很好！简约风少即是多。先选一件吸睛的——酷炫灯具或墙艺——再加些抱枕和地毯增加温暖感。", actionHint: "简约风格搭配建议", frequency: "common" },
              { textEn: "For minimalist, you want a few key pieces that really pop. I'd start with this floor lamp or wall art, then soften it up with a rug and some throw pillows.", textZh: "简约风需要几件真正出彩的单品。我建议先选这盏落地灯或墙艺，再用地毯和抱枕柔和一下。", actionHint: "层层递进的搭配策略", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I like this lamp. It has clean lines. How much is it?",
            textZh: "我喜欢这盏灯。线条很干净。多少钱？",
          },
          {
            speaker: "them",
            role: "家居顾问",
            textEn: "This one is $129. It's LED and dimmable, so you can adjust the brightness for different moods. Very energy efficient too.",
            textZh: "这款129美元。LED可调光，可以根据不同氛围调节亮度。也很节能。",
            keyPhrases: [
              { en: "dimmable", zh: "可调光的" },
              { en: "brightness", zh: "亮度" },
              { en: "energy efficient", zh: "节能的" },
            ],
            alternativeExpressions: [
              { textEn: "It's $129. The cool thing is it's dimmable — bright for reading, soft for movie night. And LED means really low energy costs.", textZh: "129美元。最棒的是可以调光——看书开亮，看电影调暗。LED的电费很省。", actionHint: "讲解灯的功能和优势", frequency: "common" },
              { textEn: "That's $129 for an LED lamp with dimming. You can set any brightness level you want. Plus it barely uses any electricity.", textZh: "129美元的LED调光灯。亮度随您调。而且几乎不费电。", actionHint: "简洁介绍特性", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What about throw pillows? I need something to go with a gray sofa.",
            textZh: "抱枕呢？需要搭配灰色沙发的。",
          },
          {
            speaker: "them",
            role: "家居顾问",
            textEn: "Gray is so versatile! You could go with white and mustard yellow for a warm look, or try navy and sage green for a calming vibe. Mixing different textures — like velvet with linen — adds visual interest.",
            textZh: "灰色百搭！白色加芥末黄会很温暖，或者试试藏青色和鼠尾草绿，很有宁静感。混搭不同材质——比如天鹅绒配亚麻——增加视觉层次。",
            keyPhrases: [
              { en: "versatile", zh: "百搭的" },
              { en: "mustard yellow", zh: "芥末黄" },
              { en: "sage green", zh: "鼠尾草绿" },
              { en: "velvet", zh: "天鹅绒" },
              { en: "linen", zh: "亚麻" },
            ],
            alternativeExpressions: [
              { textEn: "Gray goes with everything! For warmth, add white and mustard tones. For calm, go with navy and sage. And mix up the fabrics — velvet and linen look amazing together.", textZh: "灰色搭什么都好！想温暖加白色和芥末色调。想宁静搭藏青和鼠尾草。面料混搭——天鹅绒配亚麻超美。", actionHint: "给出配色和材质建议", frequency: "common" },
              { textEn: "A gray sofa is a decorator's dream! Try warm tones like mustard if you want energy, or cool tones like sage green for a relaxing feel. And always mix textures — it's the secret to a polished look.", textZh: "灰色沙发是搭配神器！想活力用芥末黄等暖色调，想放松用鼠尾草绿等冷色调。记得混搭材质——这是精致感的秘诀。", actionHint: "专业室内搭配建议", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll try the white and mustard combination. Can I return these if they don't match my sofa?",
            textZh: "我试试白色和芥末黄的搭配。如果跟沙发不搭可以退吗？",
          },
          {
            speaker: "them",
            role: "家居顾问",
            textEn: "Absolutely. You have 30 days to return or exchange any items with the receipt. Pro tip — take a photo of your room and I can help you visualize how everything would look together.",
            textZh: "当然。凭小票30天内可以退换。小贴士——拍一张您房间的照片，我可以帮您想象搭配起来的效果。",
            keyPhrases: [
              { en: "return or exchange", zh: "退换" },
              { en: "visualize", zh: "想象/可视化" },
            ],
            alternativeExpressions: [
              { textEn: "Of course — 30-day returns with receipt, no hassle. Here's a tip: snap a photo of your living room and bring it next time. I can help you plan!", textZh: "当然——凭收据30天无忧退换。建议：拍张客厅照片下次带来。我可以帮您规划！", actionHint: "提供退换保证和搭配技巧", frequency: "common" },
              { textEn: "Yep, you've got 30 days if anything doesn't work. And a quick tip — if you can show me a photo of your space, I can help match everything perfectly.", textZh: "是的，30天内不合适都能退。小窍门——如果给我看房间照片，我能帮您完美搭配。", actionHint: "鼓励带照片来店", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "风格搭配与空间规划",
        titleEn: "Styling & Space Planning",
        description: "请顾问帮忙搭配整体风格和规划空间布置",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'm struggling to make my living room feel cohesive. Everything I've bought so far seems random.",
            textZh: "我的客厅总是感觉不协调。到目前为止买的东西好像很随意。",
          },
          {
            speaker: "them",
            role: "家居顾问",
            textEn: "That's a common challenge! The key is to establish a color palette — pick three colors maximum, and stick to those throughout the room. Can you show me any photos of your space?",
            textZh: "这很常见！关键是确定一个色调——最多选三种颜色，整个房间都用这三种。可以给我看看您空间的照片吗？",
            keyPhrases: [
              { en: "cohesive", zh: "协调的" },
              { en: "color palette", zh: "色调/配色方案" },
              { en: "stick to", zh: "坚持使用" },
            ],
            alternativeExpressions: [
              { textEn: "Everyone struggles with that! The trick is picking 2 to 3 colors and repeating them around the room. Got any photos I can look at?", textZh: "大家都有这个困扰！诀窍是选2到3种颜色在房间里重复出现。有照片给我看看吗？", actionHint: "给出配色核心原则", frequency: "common" },
              { textEn: "I hear that a lot! A simple color palette is the secret. Limit yourself to three tones and carry them throughout. Show me your room and I'll help you tie it all together.", textZh: "经常有人这么说！简单的配色方案是秘诀。限制在三种色调贯穿整个空间。给我看看房间我帮您统一起来。", actionHint: "提供专业色彩建议", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's a photo. I have a gray sofa, a brown bookshelf, and blue curtains.",
            textZh: "这是照片。我有灰色沙发、棕色书架和蓝色窗帘。",
          },
          {
            speaker: "them",
            role: "家居顾问",
            textEn: "I see — you've actually got a good base! Gray and blue work well together. For the brown bookshelf, you could add some blue and gray accessories to tie it in — like book ends, small vases, or picture frames in those colors.",
            textZh: "我看到了——其实基础不错！灰色和蓝色很搭。棕色书架上可以加一些蓝色和灰色的配件来统一——比如书挡、小花瓶或者同色系的相框。",
            keyPhrases: [
              { en: "good base", zh: "好的基础" },
              { en: "tie it in", zh: "统一/协调起来" },
              { en: "book ends", zh: "书挡" },
              { en: "picture frames", zh: "相框" },
            ],
            alternativeExpressions: [
              { textEn: "You're closer than you think! Gray and blue already match. Just bring the bookshelf into the scheme with some blue and gray decor — vases, frames, bookends.", textZh: "比您想的接近了！灰色和蓝色已经很搭了。在书架上放些蓝灰色装饰品统一起来——花瓶、相框、书挡。", actionHint: "肯定现有基础并优化", frequency: "common" },
              { textEn: "Actually, you have a solid foundation! The gray-blue combo is great. The bookshelf just needs some accessories in those same tones to pull it all together.", textZh: "其实您的基础很好！灰蓝搭配很棒。书架只需要加些同色系的配件就能把整体统一起来。", actionHint: "鼓励并给出简单解决方案", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What about the walls? They're completely bare right now.",
            textZh: "墙面呢？现在完全是空的。",
          },
          {
            speaker: "them",
            role: "家居顾问",
            textEn: "For a minimalist look, I'd do a gallery wall with three to five pieces, all in similar frames. Or one large statement piece above the sofa. We have these abstract prints in blue and gray tones that would complement your room perfectly.",
            textZh: "简约风格的话，我建议做一个3到5幅画的照片墙，用统一风格的框。或者沙发上方挂一幅大的主画。我们有这些蓝灰色调的抽象画，跟您的房间很配。",
            keyPhrases: [
              { en: "gallery wall", zh: "照片墙" },
              { en: "abstract prints", zh: "抽象画/版画" },
              { en: "complement", zh: "搭配/互补" },
            ],
            alternativeExpressions: [
              { textEn: "Two options: a small gallery wall with matching frames, or one bold piece over the sofa. These blue-and-gray abstract prints would be perfect for your room.", textZh: "两种方案：用统一相框做小型照片墙，或沙发上方一幅大胆的画。这些蓝灰色抽象画非常适合您的房间。", actionHint: "提供墙面装饰方案", frequency: "common" },
              { textEn: "Keep it simple — either a curated gallery wall or one oversized piece above the sofa. I've got some abstract prints in blue and gray that would tie your room together beautifully.", textZh: "简单为主——精心策划的照片墙或沙发上方一幅超大作品。我有蓝灰色调的抽象画能完美统一您的房间。", actionHint: "推荐具体产品搭配", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I love the abstract print! How do I hang it without damaging the wall? I'm renting.",
            textZh: "我喜欢这幅抽象画！怎么挂才不会弄坏墙？我是租的房子。",
          },
          {
            speaker: "them",
            role: "家居顾问",
            textEn: "We sell adhesive picture hanging strips that hold up to 16 pounds and come off cleanly without damaging the paint. Perfect for renters. For heavier pieces, you'd need a nail, but most landlords are okay with small nail holes.",
            textZh: "我们有粘贴式挂画条，承重可达16磅，取下来不会损坏墙面。非常适合租房者。更重的画需要钉钉子，但大多数房东对小钉孔是接受的。",
            keyPhrases: [
              { en: "adhesive strips", zh: "粘贴式挂条" },
              { en: "come off cleanly", zh: "干净取下" },
              { en: "renters", zh: "租房者" },
              { en: "landlord", zh: "房东" },
            ],
            alternativeExpressions: [
              { textEn: "No nails needed! These adhesive strips hold up to 16 pounds and peel off without a mark. Renter-friendly. For really heavy art, a small nail is fine — most landlords don't mind.", textZh: "不用钉子！这些粘贴条承重16磅，撕下来不留痕。租房友好。特别重的画钉个小钉子就行——大多数房东不介意。", actionHint: "推荐租房友好挂画方案", frequency: "common" },
              { textEn: "We have damage-free hanging strips — they support up to 16 pounds and come off clean. Great for rentals. If the piece is heavier, one small nail hole is usually no issue with landlords.", textZh: "我们有无损挂画条——承重16磅取下来干干净净。租房特别好用。如果画更重，一个小钉孔房东一般不会在意。", actionHint: "针对租房者的解决方案", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the hanging strips. Can you also suggest something to make the room smell nice?",
            textZh: "挂画条我也要。能推荐一些让房间闻起来好的东西吗？",
          },
          {
            speaker: "them",
            role: "家居顾问",
            textEn: "A reed diffuser is great for a constant subtle scent without an open flame. This eucalyptus and mint one is very popular — refreshing without being overwhelming. It lasts about 3 months.",
            textZh: "藤条扩香是持续散发淡香的好选择，不需要明火。这款桉树薄荷味非常受欢迎——清新但不会太浓。大约能用3个月。",
            keyPhrases: [
              { en: "reed diffuser", zh: "藤条扩香" },
              { en: "open flame", zh: "明火" },
              { en: "subtle scent", zh: "淡雅的香味" },
            ],
            alternativeExpressions: [
              { textEn: "Try a reed diffuser — it gives off a gentle scent all day without any flame. This eucalyptus-mint one is a customer favorite. Lasts about 3 months.", textZh: "试试藤条扩香——整天散发淡淡的香味不需要明火。这款桉树薄荷是顾客最爱。能用约3个月。", actionHint: "推荐无火香薰", frequency: "common" },
              { textEn: "A diffuser is perfect for that — no candles, no flame, just a nice constant aroma. Eucalyptus and mint is our top seller. One bottle lasts about three months.", textZh: "扩香器最适合——不用蜡烛不用火，就是持续的好闻香味。桉树薄荷是我们销冠。一瓶用三个月。", actionHint: "强调安全和持久性", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 厨具选购 ====================
  {
    id: "shopping-kitchenware",
    category: "shopping",
    titleZh: "厨具店选购",
    titleEn: "Kitchenware Shopping",
    description: "在厨具专卖店选购锅具、刀具和小家电",
    otherRole: "厨具顾问",
    otherRoleIcon: "🍳",
    flows: [
      {
        id: "basic",
        titleZh: "选购基本厨具",
        titleEn: "Basic Kitchenware Selection",
        description: "为新厨房选购基本锅具和刀具",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm setting up a new kitchen and need some basic cookware. What do you recommend?",
            textZh: "你好，我在布置新厨房，需要一些基本的锅具。你有什么推荐？",
          },
          {
            speaker: "them",
            role: "厨具顾问",
            textEn: "Great! For starters, I'd recommend a good skillet, a saucepan, and a stockpot. Those three will cover most everyday cooking. What's your experience level in the kitchen?",
            textZh: "好的！入门的话，我建议一个好的煎锅、一个汤锅和一个炖锅。这三个能应付大多数日常烹饪。您的厨艺水平如何？",
            keyPhrases: [
              { en: "skillet", zh: "煎锅" },
              { en: "saucepan", zh: "汤锅" },
              { en: "stockpot", zh: "炖锅/大锅" },
              { en: "cookware", zh: "锅具" },
            ],
            alternativeExpressions: [
              { textEn: "The essentials are a skillet, a saucepan, and a stockpot — those handle 90% of daily cooking. How comfortable are you in the kitchen?", textZh: "必备的就是煎锅、汤锅和炖锅——能搞定90%的日常烹饪。您下厨经验怎么样？", actionHint: "推荐入门必备锅具", frequency: "common" },
              { textEn: "Start with three things: a good skillet for frying, a saucepan for sauces and soups, and a stockpot for pasta or stews. Are you new to cooking?", textZh: "从三样东西开始：煎锅煎炒用、汤锅做酱汁和汤、炖锅煮意面或炖菜。您是厨房新手吗？", actionHint: "说明每种锅的用途", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm a beginner. What material is best? I see stainless steel, non-stick, and cast iron.",
            textZh: "我是初学者。什么材质最好？我看到不锈钢、不粘锅和铸铁锅。",
          },
          {
            speaker: "them",
            role: "厨具顾问",
            textEn: "For beginners, non-stick is the easiest — food doesn't stick and cleanup is simple. Stainless steel is more durable and better for searing. Cast iron is amazing for heat retention but it's heavy and requires seasoning.",
            textZh: "初学者的话，不粘锅最简单——食物不会粘锅，清洁容易。不锈钢更耐用，煎东西更好。铸铁锅保温性极好，但很重，需要养锅。",
            keyPhrases: [
              { en: "non-stick", zh: "不粘锅" },
              { en: "stainless steel", zh: "不锈钢" },
              { en: "cast iron", zh: "铸铁" },
              { en: "searing", zh: "煎/灼" },
              { en: "seasoning", zh: "养锅" },
            ],
            alternativeExpressions: [
              { textEn: "Non-stick is the most beginner-friendly — easy to cook with, easy to clean. Stainless steel lasts longer and gives a better sear. Cast iron holds heat like nothing else but needs some maintenance.", textZh: "不粘锅对新手最友好——好做饭好清洗。不锈钢更耐用煎出来更好。铸铁保温无敌但需要保养。", actionHint: "对比三种材质", frequency: "common" },
              { textEn: "If you're just starting out, go non-stick — nothing burns, nothing sticks. Stainless steel is a step up for serious cooking. Cast iron is the pro choice but it's heavy and needs care.", textZh: "如果刚入门选不粘锅——不烧焦不粘锅。不锈钢是进阶的好选择。铸铁是专业选择但重且需要护理。", actionHint: "按经验水平推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I think I'll start with a non-stick skillet and a stainless steel saucepan. What sizes do you suggest?",
            textZh: "我先买一个不粘煎锅和一个不锈钢汤锅。你建议什么尺寸？",
          },
          {
            speaker: "them",
            role: "厨具顾问",
            textEn: "A 10 or 12-inch skillet is the most versatile. For a saucepan, a 2-quart size handles most tasks — making sauces, boiling eggs, heating soup. If you cook for more people, go with a 3-quart.",
            textZh: "10或12英寸的煎锅最实用。汤锅2夸脱的大多数场景都够用——做酱汁、煮蛋、热汤。人多的话选3夸脱的。",
            keyPhrases: [
              { en: "10 or 12-inch", zh: "10或12英寸" },
              { en: "2-quart", zh: "2夸脱（约2升）" },
              { en: "versatile", zh: "实用的/多功能的" },
            ],
            alternativeExpressions: [
              { textEn: "Go with a 12-inch skillet — it handles everything. A 2-quart saucepan is great for one or two people. Cooking for a crowd? Bump up to 3-quart.", textZh: "选12英寸煎锅——什么都能做。2夸脱汤锅一两个人够了。人多就选3夸脱。", actionHint: "按人数推荐尺寸", frequency: "common" },
              { textEn: "A 10 to 12-inch skillet covers most bases. For the saucepan, 2 quarts is plenty for sauces and eggs. If you're feeding a family, size up to 3 quarts.", textZh: "10到12英寸煎锅能应付大部分需求。汤锅2夸脱做酱汁煮蛋够了。家庭用选3夸脱。", actionHint: "实用尺寸指南", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take a 12-inch skillet and a 3-quart saucepan. Do I need a special spatula for the non-stick pan?",
            textZh: "12英寸煎锅和3夸脱汤锅。不粘锅需要特殊的锅铲吗？",
          },
          {
            speaker: "them",
            role: "厨具顾问",
            textEn: "Yes! Never use metal utensils on non-stick — they'll scratch the coating. Use silicone, wood, or nylon. This silicone spatula set is $15 and includes three sizes.",
            textZh: "对！不粘锅千万不要用金属餐具——会划伤涂层。用硅胶、木头或尼龙的。这套硅胶锅铲15美元，包含三种大小。",
            keyPhrases: [
              { en: "metal utensils", zh: "金属餐具" },
              { en: "scratch the coating", zh: "划伤涂层" },
              { en: "silicone", zh: "硅胶" },
              { en: "spatula", zh: "锅铲" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely — metal will ruin a non-stick pan fast. Go with silicone or wood. This three-piece silicone set is $15 and has everything you need.", textZh: "一定的——金属会很快毁掉不粘锅。用硅胶或木头的。这套三件硅胶套装15美元够用了。", actionHint: "强调保护不粘涂层", frequency: "common" },
              { textEn: "Big rule with non-stick: no metal! Silicone, wood, or nylon only. Grab this spatula set for $15 — three sizes, perfect starter pack.", textZh: "不粘锅大原则：不用金属！只用硅胶、木头或尼龙。这套锅铲15美元——三种大小，完美入门套装。", actionHint: "搭配推荐配件", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good advice. I'll add the spatula set. What about knives?",
            textZh: "好建议。锅铲套装也要了。刀呢？",
          },
          {
            speaker: "them",
            role: "厨具顾问",
            textEn: "You really only need three knives to start: a chef's knife for most chopping, a paring knife for small tasks, and a serrated bread knife. This starter set has all three for $49.",
            textZh: "起步只需要三把刀：主厨刀负责大部分切割、削皮刀用于小活、面包刀切面包。这个入门套装三把刀49美元。",
            keyPhrases: [
              { en: "chef's knife", zh: "主厨刀" },
              { en: "paring knife", zh: "削皮刀" },
              { en: "serrated bread knife", zh: "锯齿面包刀" },
            ],
            alternativeExpressions: [
              { textEn: "Three knives is all you need: a big chef's knife, a small paring knife, and a bread knife. This set has all three for $49 — great starter kit.", textZh: "三把刀就够了：大的主厨刀、小的削皮刀和面包刀。这套49美元——很好的入门套装。", actionHint: "简化推荐三把入门刀", frequency: "common" },
              { textEn: "Don't go overboard on knives! A chef's knife handles 80% of cutting. Add a paring knife and a bread knife and you're set. This $49 trio is perfect to start.", textZh: "刀不用买太多！主厨刀搞定80%的切割。再加削皮刀和面包刀就齐了。这套三件49美元入门完美。", actionHint: "务实的刀具建议", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "小家电与高级厨具",
        titleEn: "Appliances & Premium Cookware",
        description: "选购厨房小家电和了解高端锅具的区别",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'm also looking at small appliances. There are so many brands. What's actually worth buying?",
            textZh: "我还在看小家电。品牌太多了。到底什么值得买？",
          },
          {
            speaker: "them",
            role: "厨具顾问",
            textEn: "It depends on your cooking style. The three most useful small appliances in most kitchens are: an instant pot for fast cooking, a blender for smoothies and sauces, and a toaster oven for quick meals and reheating.",
            textZh: "取决于您的烹饪方式。大多数厨房最实用的三个小家电是：电压力锅快速烹饪，搅拌机做思慕雪和酱汁，烤箱用于快速做饭和加热。",
            keyPhrases: [
              { en: "instant pot", zh: "电压力锅" },
              { en: "blender", zh: "搅拌机" },
              { en: "toaster oven", zh: "小烤箱" },
              { en: "reheating", zh: "加热" },
            ],
            alternativeExpressions: [
              { textEn: "The top three for most people: an instant pot, a blender, and a toaster oven. Those cover fast meals, smoothies, and reheating.", textZh: "大多数人最需要的三样：电压力锅、搅拌机和小烤箱。能搞定快餐、思慕雪和加热。", actionHint: "推荐最实用三件小家电", frequency: "common" },
              { textEn: "It really depends on what you cook! But if I had to pick three must-haves: an instant pot for one-pot meals, a blender, and a toaster oven. You can do so much with just those.", textZh: "得看您做什么菜！不过如果选三件必备的：电压力锅做一锅菜、搅拌机和小烤箱。有这三样能做很多。", actionHint: "从实用角度筛选", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I've heard a lot about air fryers. Are they worth the hype?",
            textZh: "听说空气炸锅很火。真的值得买吗？",
          },
          {
            speaker: "them",
            role: "厨具顾问",
            textEn: "Air fryers are great for making crispy food with less oil — fries, chicken wings, vegetables. If you eat a lot of fried food but want a healthier option, then yes, absolutely worth it. This one is top-rated and on sale for $79.",
            textZh: "空气炸锅用很少的油就能做出脆脆的食物——薯条、鸡翅、蔬菜。如果您爱吃油炸食品但想要更健康的选择，绝对值得。这款评分最高的在打折，79美元。",
            keyPhrases: [
              { en: "air fryer", zh: "空气炸锅" },
              { en: "crispy", zh: "脆的" },
              { en: "less oil", zh: "少油" },
              { en: "top-rated", zh: "评分最高的" },
            ],
            alternativeExpressions: [
              { textEn: "If you love crispy food but want to cut down on oil, an air fryer is a game-changer. Fries, wings, veggies — all crispy with barely any oil. This bestseller is on sale at $79.", textZh: "如果爱吃脆的但想少油，空气炸锅是神器。薯条、鸡翅、蔬菜——几乎不放油就能酥脆。这款畅销的在打折79美元。", actionHint: "以使用场景推荐", frequency: "common" },
              { textEn: "Honestly? If you eat fried food regularly, an air fryer pays for itself. Crispy results, way less oil. This $79 one is our top seller — you won't regret it.", textZh: "说实话？如果经常吃炸的，空气炸锅绝对值回票价。脆脆的效果，少太多油。这款79美元是我们销冠——不会后悔。", actionHint: "以个人推荐方式强推", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll think about the air fryer. What about this expensive pan set? Why is it $400 when the other set is $80?",
            textZh: "空气炸锅我再考虑考虑。这套贵的锅为什么要400美元，另一套才80美元？",
          },
          {
            speaker: "them",
            role: "厨具顾问",
            textEn: "The premium set is fully clad stainless steel — meaning the heat-conducting core goes all the way up the sides, not just the bottom. It heats more evenly, is oven-safe to 600 degrees, and comes with a lifetime warranty. The $80 set has a thinner base and no warranty.",
            textZh: "高端的是全包层不锈钢——意味着导热芯一直延伸到锅壁，不只是锅底。加热更均匀，可进烤箱到600度，而且终身保修。80美元那套底更薄，没有保修。",
            keyPhrases: [
              { en: "fully clad", zh: "全包层" },
              { en: "heat-conducting core", zh: "导热芯" },
              { en: "heats evenly", zh: "均匀受热" },
              { en: "oven-safe", zh: "可进烤箱" },
              { en: "lifetime warranty", zh: "终身保修" },
            ],
            alternativeExpressions: [
              { textEn: "The $400 set has metal layers running up the entire pan, so heat spreads everywhere evenly. Goes in the oven, lifetime warranty. The $80 one is thinner and has no warranty.", textZh: "400的金属层贯穿整个锅身，热量分布超均匀。可进烤箱，终身保修。80的薄一些没有保修。", actionHint: "对比高低端差异", frequency: "common" },
              { textEn: "Big difference in construction. The premium one is clad all the way up — no hot spots, oven-safe to 600, guaranteed for life. The budget set just has a thick disc on the bottom.", textZh: "构造差别很大。高端的全包层——没有局部过热、耐600度烤箱、终身保修。便宜的只是底部厚一点。", actionHint: "专业对比工艺差异", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a middle ground? Something better than the cheap set but not $400?",
            textZh: "有折中的选择吗？比便宜的好但不要400美元的？",
          },
          {
            speaker: "them",
            role: "厨具顾问",
            textEn: "This set at $179 is an excellent mid-range option. It's impact-bonded stainless steel — the base is thick and conducts heat well. It's oven-safe to 500 degrees and comes with a 10-year warranty. Best value in the store, honestly.",
            textZh: "这套179美元的是很好的中档选择。冲击结合不锈钢——底部厚实，导热好。可进烤箱到500度，10年保修。说实话，是店里性价比最高的。",
            keyPhrases: [
              { en: "mid-range", zh: "中档" },
              { en: "impact-bonded", zh: "冲击结合的" },
              { en: "best value", zh: "性价比最高" },
            ],
            alternativeExpressions: [
              { textEn: "This $179 set is the sweet spot — solid stainless steel, thick base for even heating, oven-safe, and a 10-year warranty. Honestly, it's the best deal we have.", textZh: "这套179的是最佳平衡点——扎实不锈钢、厚底均匀受热、可进烤箱、10年保修。说实话是我们最划算的。", actionHint: "强推中档性价比之王", frequency: "common" },
              { textEn: "If you want quality without the premium price tag, this $179 set is it. Thick base, even heat, oven-safe to 500, and a 10-year guarantee. Our best seller by far.", textZh: "想要品质又不想花太多，这套179的就是。底厚受热均匀，500度烤箱没问题，10年保修。我们最畅销的。", actionHint: "以畅销和性价比推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds perfect for me. I'll take the mid-range set, the knife starter set, and the silicone spatulas.",
            textZh: "这个很适合我。中档套装、刀具入门套装和硅胶锅铲都要了。",
          },
          {
            speaker: "them",
            role: "厨具顾问",
            textEn: "Excellent choices! Your total is $243. Would you like to sign up for our loyalty program? You'll earn points toward future purchases and get a 15% off coupon for your next visit.",
            textZh: "好选择！一共243美元。要注册我们的会员吗？消费积分以后可以抵扣，还有下次来的85折优惠券。",
            keyPhrases: [
              { en: "loyalty program", zh: "会员计划" },
              { en: "earn points", zh: "赚积分" },
            ],
            alternativeExpressions: [
              { textEn: "Great haul! That comes to $243. Want to sign up for our rewards? You'll get 15% off next time plus points on every purchase.", textZh: "买得很好！一共243美元。要注册积分会员吗？下次来85折，每次消费还有积分。", actionHint: "结账并推荐会员", frequency: "common" },
              { textEn: "You're all set for the kitchen! Total is $243. If you join our loyalty program today, you'll walk out with a 15% coupon for next time.", textZh: "厨房装备齐了！一共243美元。今天加入会员的话马上有下次的85折优惠券。", actionHint: "趁热打铁推会员", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 运动服饰 ====================
  {
    id: "shopping-sportswear",
    category: "shopping",
    titleZh: "运动服饰选购",
    titleEn: "Sportswear Shopping",
    description: "在运动服饰店选购运动衣裤、瑜伽服和运动配件",
    otherRole: "运动服饰店员",
    otherRoleIcon: "🏋️",
    flows: [
      {
        id: "basic",
        titleZh: "基本运动服选购",
        titleEn: "Basic Sportswear Selection",
        description: "选购运动衣裤的基本流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm looking for workout clothes. I mainly do gym workouts and yoga.",
            textZh: "你好，我想买运动服。我主要在健身房锻炼和做瑜伽。",
          },
          {
            speaker: "them",
            role: "运动服饰店员",
            textEn: "Great! For gym workouts, you'll want moisture-wicking tops and flexible bottoms. For yoga, we have a whole section with high-stretch leggings and tanks. What size are you?",
            textZh: "好的！健身房运动的话需要吸湿速干上衣和弹性裤子。瑜伽服我们有一整区高弹力紧身裤和背心。您穿什么号？",
            keyPhrases: [
              { en: "moisture-wicking", zh: "吸湿速干" },
              { en: "high-stretch", zh: "高弹力" },
              { en: "leggings", zh: "紧身裤" },
              { en: "tanks", zh: "背心" },
            ],
            alternativeExpressions: [
              { textEn: "For the gym, think breathable, quick-dry fabrics. For yoga, we have super stretchy leggings and tanks. What size do you usually wear?", textZh: "健身房的话选透气速干面料。瑜伽服我们有超弹力紧身裤和背心。您平时穿什么号？", actionHint: "按运动类型推荐", frequency: "common" },
              { textEn: "Gym plus yoga — you need two different vibes! Moisture-wicking tops for the gym and high-stretch leggings for yoga. What's your size?", textZh: "健身房加瑜伽——两种不同需求！健身房要吸湿速干上衣，瑜伽要高弹力紧身裤。您什么号？", actionHint: "区分两种运动需求", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm usually a medium. What fabric should I look for?",
            textZh: "通常穿M号。应该选什么面料？",
          },
          {
            speaker: "them",
            role: "运动服饰店员",
            textEn: "Look for polyester or nylon blends — they dry quickly and won't hold sweat. Avoid 100% cotton for workouts because it absorbs moisture and gets heavy. These tops here are our best-selling performance tees.",
            textZh: "选聚酯纤维或尼龙混纺的——干得快，不会积汗。运动时避免100%棉，因为吸水后会变重。这些是我们最畅销的运动T恤。",
            keyPhrases: [
              { en: "polyester", zh: "聚酯纤维" },
              { en: "nylon blends", zh: "尼龙混纺" },
              { en: "performance tees", zh: "运动T恤" },
              { en: "absorbs moisture", zh: "吸水" },
            ],
            alternativeExpressions: [
              { textEn: "Go with synthetic fabrics — polyester or nylon dry fast and keep you comfortable. Skip cotton for the gym, it just soaks up sweat. These performance tees are our bestsellers.", textZh: "选合成面料——聚酯或尼龙干得快穿着舒服。健身别穿棉的，光吸汗。这些运动T恤是我们的畅销款。", actionHint: "推荐面料并避免棉质", frequency: "common" },
              { textEn: "The number one rule: no cotton at the gym! It gets heavy and clingy when you sweat. Go with polyester or nylon blends — these tops here are what most of our customers grab.", textZh: "第一条规则：健身别穿棉！出汗后又重又贴身。选聚酯或尼龙混纺的——这些上衣是大多数顾客的选择。", actionHint: "以规则方式强调面料选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "This one feels nice and light. Can I try it on?",
            textZh: "这件摸起来又好又轻。可以试穿吗？",
          },
          {
            speaker: "them",
            role: "运动服饰店员",
            textEn: "Absolutely! Fitting rooms are in the back. For gym tops, make sure you can move your arms freely in all directions — reach overhead, pull across your body. If it rides up, try a longer length.",
            textZh: "当然！试衣间在后面。运动上衣要确保手臂在各个方向都能自由活动——举过头顶、横向拉伸。如果会往上缩，试试加长款。",
            keyPhrases: [
              { en: "rides up", zh: "往上缩" },
              { en: "reach overhead", zh: "举过头顶" },
              { en: "longer length", zh: "加长款" },
            ],
            alternativeExpressions: [
              { textEn: "Go try it on — fitting rooms are in the back. Make sure to stretch and raise your arms. If it rides up when you lift, size up or try the longer cut.", textZh: "去试试——试衣间在后面。记得伸展和举手臂。如果举手时往上缩就选大号或加长版。", actionHint: "指导试穿方法", frequency: "common" },
              { textEn: "Fitting rooms are back there. When you try it on, do some movements — arms up, twist, reach. You want it to stay in place during your workout.", textZh: "试衣间在那边。试穿时做几个动作——举手、扭身、伸展。要确保运动时不会乱跑。", actionHint: "建议模拟运动动作试穿", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "This fits perfectly. Now I need yoga leggings. What's the difference between all these options?",
            textZh: "这件很合身。现在需要瑜伽紧身裤。这么多选择有什么区别？",
          },
          {
            speaker: "them",
            role: "运动服饰店员",
            textEn: "The main differences are rise height and compression level. High-rise stays in place during inversions. Medium compression is good for yoga — supportive but not too tight. And these have a hidden pocket in the waistband for your key or card.",
            textZh: "主要区别是腰高和压缩等级。高腰的做倒立时不会滑。中等压缩适合瑜伽——有支撑但不会太紧。这些腰带里还有暗袋可以放钥匙或卡。",
            keyPhrases: [
              { en: "high-rise", zh: "高腰" },
              { en: "compression", zh: "压缩" },
              { en: "inversions", zh: "倒立动作" },
              { en: "hidden pocket", zh: "暗袋" },
            ],
            alternativeExpressions: [
              { textEn: "It comes down to waist height and how snug they feel. High-rise is great for yoga — won't roll down. Medium compression gives support without being restrictive. Plus, these have a sneaky pocket in the waistband.", textZh: "主要看腰高和贴合度。高腰瑜伽很好——不会往下卷。中等压缩有支撑但不勒。而且这些腰带里有个隐藏口袋。", actionHint: "详细解释不同选项", frequency: "common" },
              { textEn: "Two things to consider: how high the waist goes and how tight they are. For yoga, go high-rise with medium compression — they stay put during all poses. Bonus: there's a hidden pocket for your key.", textZh: "考虑两点：腰有多高和有多紧。瑜伽选高腰中等压缩——各种体式都不会滑。加分项：有暗袋放钥匙。", actionHint: "按瑜伽需求推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the high-rise with the pocket. How should I wash these to keep them in good shape?",
            textZh: "我要高腰带暗袋的。怎么洗才能保持好？",
          },
          {
            speaker: "them",
            role: "运动服饰店员",
            textEn: "Wash them in cold water and hang dry — never put them in the dryer. The heat breaks down the elastic fibers. Also, turn them inside out before washing to protect the outer fabric.",
            textZh: "用冷水洗，晾干——千万不要放烘干机。高温会破坏弹性纤维。洗之前翻面保护外层面料。",
            keyPhrases: [
              { en: "cold water", zh: "冷水" },
              { en: "hang dry", zh: "晾干" },
              { en: "elastic fibers", zh: "弹性纤维" },
              { en: "turn inside out", zh: "翻面" },
            ],
            alternativeExpressions: [
              { textEn: "Cold wash, air dry, and flip them inside out before tossing them in the machine. No dryer — the heat kills the stretch.", textZh: "冷水洗、晾干，放洗衣机前翻个面。别放烘干机——高温会毁掉弹性。", actionHint: "简洁的护理指南", frequency: "common" },
              { textEn: "The golden rule for activewear: cold water, inside out, and never the dryer. Hang them to dry and they'll keep their shape much longer.", textZh: "运动服黄金法则：冷水、翻面、远离烘干机。晾干的话能保持弹性更久。", actionHint: "以黄金法则方式强调", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "运动配件与套装",
        titleEn: "Accessories & Outfit Sets",
        description: "选购运动配件和搭配整套运动装备",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "What accessories do I need for the gym? I always forget something.",
            textZh: "去健身房需要什么配件？我总是忘带东西。",
          },
          {
            speaker: "them",
            role: "运动服饰店员",
            textEn: "The essentials are: a good gym bag, a water bottle, a sweat towel, and workout gloves if you lift weights. We also have resistance bands and yoga mats if you do floor work.",
            textZh: "必备的有：一个好的健身包、一个水壶、一条吸汗毛巾，如果举铁的话再加个训练手套。我们也有弹力带和瑜伽垫，做地面动作用。",
            keyPhrases: [
              { en: "gym bag", zh: "健身包" },
              { en: "sweat towel", zh: "吸汗毛巾" },
              { en: "workout gloves", zh: "训练手套" },
              { en: "resistance bands", zh: "弹力带" },
            ],
            alternativeExpressions: [
              { textEn: "Must-haves: gym bag, water bottle, towel. If you lift, add gloves. And for yoga or floor exercises, a mat and some resistance bands.", textZh: "必备的：健身包、水壶、毛巾。举铁加手套。做瑜伽或地面动作还需要垫子和弹力带。", actionHint: "列出健身必备清单", frequency: "common" },
              { textEn: "I'd say the big four are: bag, bottle, towel, and gloves for lifting. If you're into yoga too, grab a mat and some bands — we have them right here.", textZh: "我觉得四大件：包、水壶、毛巾、举铁手套。做瑜伽的话还得拿垫子和弹力带——就在这里。", actionHint: "按优先级推荐配件", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I need a yoga mat. There are thin ones and thick ones — what's the difference?",
            textZh: "我需要一个瑜伽垫。有薄的有厚的——有什么区别？",
          },
          {
            speaker: "them",
            role: "运动服饰店员",
            textEn: "Thin mats — about 3mm — are better for balance poses because you can feel the floor. They're also lighter and easier to carry. Thick mats — 5 to 6mm — provide more cushioning for your knees and joints. If you have sensitive knees, go thick.",
            textZh: "薄的——大约3mm——做平衡动作更好，因为能感觉到地面。也更轻便好携带。厚的——5到6mm——对膝盖和关节缓冲更好。如果膝盖敏感，选厚的。",
            keyPhrases: [
              { en: "balance poses", zh: "平衡动作" },
              { en: "cushioning", zh: "缓冲" },
              { en: "joints", zh: "关节" },
              { en: "lighter", zh: "更轻的" },
            ],
            alternativeExpressions: [
              { textEn: "Thin mats are great for stability and balance — you feel more connected to the ground. Thick ones protect your knees and joints. It depends on what your body needs.", textZh: "薄的稳定性和平衡性好——更能感受地面。厚的保护膝盖和关节。取决于您身体的需求。", actionHint: "对比薄厚瑜伽垫", frequency: "common" },
              { textEn: "For balance-heavy practices, thin is better — about 3mm. If your knees bother you during kneeling poses, go thick at 5 or 6mm. Also, thin ones are easier to carry around.", textZh: "注重平衡的练习选薄的——大约3mm。跪姿时膝盖不舒服就选厚的5到6mm。另外薄的携带更方便。", actionHint: "按练习类型推荐厚度", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with the thick one. Does it come with a carrying strap?",
            textZh: "我选厚的。有配背带吗？",
          },
          {
            speaker: "them",
            role: "运动服饰店员",
            textEn: "This one includes a carrying strap. It's also non-slip on both sides, which is important for hot yoga or any practice where you sweat a lot. The material is TPE — eco-friendly and easy to clean.",
            textZh: "这款包含背带。而且两面都防滑，对热瑜伽或出汗多的练习很重要。材质是TPE——环保好清洁。",
            keyPhrases: [
              { en: "carrying strap", zh: "背带" },
              { en: "non-slip", zh: "防滑" },
              { en: "hot yoga", zh: "热瑜伽" },
              { en: "TPE", zh: "热塑性弹性体（环保材质）" },
            ],
            alternativeExpressions: [
              { textEn: "This one comes with a strap and it's non-slip on both sides — perfect if you sweat a lot. It's made from TPE, which is eco-friendly and wipes clean easily.", textZh: "这款带背带而且双面防滑——出汗多也不怕。TPE材质环保又好清洁。", actionHint: "突出防滑和环保特点", frequency: "common" },
              { textEn: "Strap included, double-sided grip, and it's TPE — so it's green and super easy to wipe down. For hot yoga or sweaty sessions, this is the one.", textZh: "带背带、双面防滑、TPE材质——环保又好擦。热瑜伽或出汗多的课程就选这个。", actionHint: "强调热瑜伽适用性", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do you have any bundle deals if I buy multiple items?",
            textZh: "买多件有套装优惠吗？",
          },
          {
            speaker: "them",
            role: "运动服饰店员",
            textEn: "Yes! We have a 'gym starter kit' deal — any three items from the accessories section for 20% off. And if you buy a complete outfit — top, bottom, and shoes — you get an additional 15% off the accessories.",
            textZh: "有的！我们有'健身入门套装'优惠——配件区任选三件打八折。如果买一整套——上衣、裤子和鞋——配件额外打85折。",
            keyPhrases: [
              { en: "bundle deals", zh: "套装优惠" },
              { en: "starter kit", zh: "入门套装" },
              { en: "complete outfit", zh: "一整套" },
            ],
            alternativeExpressions: [
              { textEn: "We do! Pick any three accessories and get 20% off. Buy a full outfit — top, bottom, shoes — and your accessories get an extra 15% off on top of that.", textZh: "有的！任选三件配件打八折。买一套——上衣裤子鞋——配件在八折基础上再打85折。", actionHint: "详细解释套装优惠", frequency: "common" },
              { textEn: "Absolutely — we have a starter bundle: three accessories for 20% off. And there's a bonus if you're buying a whole outfit: 15% more off all accessories.", textZh: "当然——我们有入门套装：三件配件八折。如果买一整套衣服还有额外奖励：所有配件再85折。", actionHint: "强调叠加优惠", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm buying the top, leggings, mat, and a water bottle. Does that qualify?",
            textZh: "我买了上衣、紧身裤、瑜伽垫和水壶。符合条件吗？",
          },
          {
            speaker: "them",
            role: "运动服饰店员",
            textEn: "The top and leggings count as your outfit. If you add shoes, the mat and water bottle would both get 15% off. Without shoes, you can still use the 'three accessories for 20% off' deal on the mat, bottle, and one more item.",
            textZh: "上衣和紧身裤算一套。如果加鞋子，瑜伽垫和水壶都打85折。不加鞋子的话，瑜伽垫、水壶再加一样可以用'三件配件八折'的优惠。",
            keyPhrases: [
              { en: "qualify", zh: "符合条件" },
              { en: "count as", zh: "算作" },
            ],
            alternativeExpressions: [
              { textEn: "Your top and leggings make an outfit. Add shoes and your accessories drop 15%. No shoes? You can still grab three accessories at 20% off — mat, bottle, plus one more.", textZh: "上衣和紧身裤就算一套了。加鞋子配件打85折。不加鞋子的话三件配件八折——垫子、水壶再选一样。", actionHint: "清晰解释优惠计算", frequency: "common" },
              { textEn: "Here's the math: top plus leggings equals an outfit. Throw in shoes and all accessories get 15% off. Without shoes, you still save with the 3-for-20%-off accessories deal.", textZh: "这么算的：上衣加紧身裤等于一套。加鞋子所有配件85折。不加鞋子也能用三件配件八折优惠。", actionHint: "帮顾客计算最佳方案", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 户外装备 ====================
  {
    id: "shopping-outdoor-gear",
    category: "shopping",
    titleZh: "户外装备选购",
    titleEn: "Outdoor Gear Shopping",
    description: "在户外用品店选购登山、露营和徒步装备",
    otherRole: "户外装备顾问",
    otherRoleIcon: "⛰️",
    flows: [
      {
        id: "basic",
        titleZh: "基本户外装备",
        titleEn: "Basic Outdoor Gear",
        description: "为徒步和露营选购基本装备",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm planning a weekend camping trip. I've never been camping before. What do I need?",
            textZh: "你好，我计划周末去露营。以前没露营过。我需要什么？",
          },
          {
            speaker: "them",
            role: "户外顾问",
            textEn: "Exciting! For a first-time camper, the essentials are: a tent, a sleeping bag, a sleeping pad, a headlamp, and a water bottle. Are you car camping or hiking to your site?",
            textZh: "太棒了！新手露营必备的有：帐篷、睡袋、防潮垫、头灯和水壶。您是开车到营地还是需要徒步走进去？",
            keyPhrases: [
              { en: "tent", zh: "帐篷" },
              { en: "sleeping bag", zh: "睡袋" },
              { en: "sleeping pad", zh: "防潮垫" },
              { en: "headlamp", zh: "头灯" },
              { en: "car camping", zh: "车载露营" },
            ],
            alternativeExpressions: [
              { textEn: "How fun! You'll need the basics: tent, sleeping bag, pad, headlamp, and a water bottle. Big question — are you driving right up to your campsite or hiking in?", textZh: "太有趣了！基本装备需要：帐篷、睡袋、防潮垫、头灯和水壶。关键问题——直接开车到营地还是要背包徒步进去？", actionHint: "列出必备清单并确认方式", frequency: "common" },
              { textEn: "First time? You're going to love it! The must-haves are a tent, sleeping bag, pad, headlamp, and water bottle. Will you be parking next to your campsite?", textZh: "第一次？您一定会爱上的！必备的是帐篷、睡袋、防潮垫、头灯和水壶。车能停在营地旁边吗？", actionHint: "热情介绍并了解露营方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Car camping. We'll park right next to the campsite.",
            textZh: "开车去。车就停在营地旁边。",
          },
          {
            speaker: "them",
            role: "户外顾问",
            textEn: "Perfect — then weight doesn't matter as much. This 4-person tent is roomy and easy to set up — even a first-timer can do it in 10 minutes. It's $149.",
            textZh: "太好了——那重量就不那么重要了。这个四人帐篷空间大，容易搭建——新手10分钟就能搭好。149美元。",
            keyPhrases: [
              { en: "roomy", zh: "宽敞的" },
              { en: "easy to set up", zh: "容易搭建" },
            ],
            alternativeExpressions: [
              { textEn: "Great — with car camping, you can go bigger. This 4-person tent gives you tons of room and pops up in 10 minutes. Even total beginners can handle it. $149.", textZh: "太好了——车载露营可以选大的。这个四人帐篷空间超大10分钟就搭好。完全的新手都能搞定。149美元。", actionHint: "推荐适合车载露营的帐篷", frequency: "common" },
              { textEn: "Since you're driving, weight isn't a concern. Go with this 4-person tent — spacious, super easy setup, great for beginners. It's $149.", textZh: "既然开车去重量不是问题。选这个四人帐篷——宽敞，超容易搭，新手很合适。149美元。", actionHint: "根据露营方式推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How warm does the sleeping bag need to be? We're going in late March.",
            textZh: "睡袋需要多暖？我们三月底去。",
          },
          {
            speaker: "them",
            role: "户外顾问",
            textEn: "Late March nights can get chilly. I'd recommend a sleeping bag rated for 30 degrees Fahrenheit — that gives you a good safety margin. This one is $79 and packs down small.",
            textZh: "三月底晚上可能很冷。我建议买额定温度华氏30度的睡袋——有充足的安全余量。这款79美元，能压缩得很小。",
            keyPhrases: [
              { en: "rated for 30 degrees", zh: "额定温度30华氏度" },
              { en: "safety margin", zh: "安全余量" },
              { en: "packs down small", zh: "能压缩得很小" },
            ],
            alternativeExpressions: [
              { textEn: "March nights can dip pretty low. Go with a 30-degree bag to be safe — better to be warm than shivering! This one's $79 and compresses nice and small.", textZh: "三月晚上可能降温很大。选30度的睡袋保险——暖和总比发抖好！这款79美元压缩起来很小。", actionHint: "根据季节推荐温度等级", frequency: "common" },
              { textEn: "It can get surprisingly cold in late March. I'd grab a 30-degree sleeping bag — gives you a cushion if temps drop. This $79 one packs down really small for storage.", textZh: "三月底可能出乎意料地冷。建议30度睡袋——万一降温有余量。这款79美元收纳起来特别小。", actionHint: "考虑温度变化推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What about something to sleep on? The ground is hard and cold.",
            textZh: "垫子呢？地面又硬又冷。",
          },
          {
            speaker: "them",
            role: "户外顾问",
            textEn: "A sleeping pad is essential. Since you're car camping, I'd recommend this self-inflating pad — it's 3 inches thick, very comfortable, and insulates you from the cold ground. It's $49.",
            textZh: "防潮垫是必须的。因为是车载露营，我推荐这款自充气垫——3英寸厚，非常舒适，能隔绝地面的寒冷。49美元。",
            keyPhrases: [
              { en: "self-inflating", zh: "自充气的" },
              { en: "insulates", zh: "隔热" },
            ],
            alternativeExpressions: [
              { textEn: "You definitely need a pad — the ground is cold and hard. This self-inflating one is 3 inches thick, super comfy, and keeps the chill out. $49.", textZh: "垫子一定要——地上又冷又硬。这款自充气的3英寸厚超舒适，隔绝寒气。49美元。", actionHint: "强调防潮垫的必要性", frequency: "common" },
              { textEn: "A pad is non-negotiable! For car camping, go thick. This one self-inflates, keeps you warm, and you'll actually sleep well. It's $49.", textZh: "防潮垫必不可少！车载露营选厚的。这款自充气、保暖、睡得舒服。49美元。", actionHint: "强调舒适睡眠", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the tent, sleeping bag, and pad. Anything else you'd recommend?",
            textZh: "帐篷、睡袋和防潮垫都要了。还推荐别的吗？",
          },
          {
            speaker: "them",
            role: "户外顾问",
            textEn: "Don't forget a headlamp — $19 for this rechargeable one. And a first aid kit is always smart — this basic one is $12. Your total would be $308. Would you like me to show you how to set up the tent before you leave?",
            textZh: "别忘了头灯——这款可充电的19美元。还有急救包总是需要的——基础款12美元。一共308美元。要不要走之前我教您怎么搭帐篷？",
            keyPhrases: [
              { en: "rechargeable", zh: "可充电的" },
              { en: "first aid kit", zh: "急救包" },
            ],
            alternativeExpressions: [
              { textEn: "Grab a headlamp — this rechargeable one is just $19. And always bring a first aid kit, $12 for the basics. Total is $308. Want a quick tent demo before you go?", textZh: "拿个头灯——这款可充电的才19美元。急救包也带上基础款12美元。一共308。走之前要我快速演示搭帐篷吗？", actionHint: "补充必备配件并总结", frequency: "common" },
              { textEn: "Two more must-haves: a $19 rechargeable headlamp and a $12 first aid kit. That puts you at $308 total. I can give you a quick tent setup lesson if you want!", textZh: "还有两件必备：19美元可充电头灯和12美元急救包。总共308美元。想的话我教您搭帐篷！", actionHint: "完成清单并提供额外帮助", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "专业装备与层次穿衣",
        titleEn: "Professional Gear & Layering",
        description: "选购专业徒步装备和了解户外穿衣层次系统",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I want to start doing day hikes. I need a good pair of hiking boots and a backpack. What should I look for?",
            textZh: "我想开始日间徒步。需要一双好的登山靴和一个背包。应该注意什么？",
          },
          {
            speaker: "them",
            role: "户外顾问",
            textEn: "For day hikes, mid-cut hiking boots give you ankle support without being too heavy. The most important thing is waterproofing and a good grip on the sole. What terrain will you be hiking on?",
            textZh: "日间徒步的话，中帮登山靴既能支撑脚踝又不会太重。最重要的是防水性和鞋底抓地力。您会在什么地形上走？",
            keyPhrases: [
              { en: "mid-cut", zh: "中帮" },
              { en: "ankle support", zh: "脚踝支撑" },
              { en: "waterproofing", zh: "防水性" },
              { en: "grip", zh: "抓地力" },
              { en: "terrain", zh: "地形" },
            ],
            alternativeExpressions: [
              { textEn: "Mid-cut boots are the way to go for day hikes — good ankle support without the extra weight. Key features: waterproof and grippy soles. What kind of trails will you be on?", textZh: "日间徒步选中帮靴——脚踝支撑好又不会太重。关键要防水和抓地力好。您走什么样的步道？", actionHint: "推荐适合日间徒步的靴子", frequency: "common" },
              { textEn: "For day hiking, you want mid-height boots. They protect your ankles but stay light. Two things to look for: waterproofing and sole traction. Tell me about the trails you'll be on.", textZh: "日间徒步需要中高帮靴。保护脚踝但保持轻便。两个要看的：防水和鞋底抓地力。跟我说说您要走的路。", actionHint: "专业选靴建议", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Mostly rocky mountain trails with some stream crossings.",
            textZh: "主要是多岩石的山路，有一些过溪的地方。",
          },
          {
            speaker: "them",
            role: "户外顾问",
            textEn: "Then definitely go with waterproof boots — look for Gore-Tex lining. This pair has a Vibram sole for excellent traction on wet rocks. Try them on with thick hiking socks, which is how you'll actually wear them.",
            textZh: "那一定要防水靴——找Gore-Tex内衬的。这双有Vibram鞋底，在湿滑岩石上抓地力极好。试的时候穿厚登山袜，这才是实际穿的样子。",
            keyPhrases: [
              { en: "Gore-Tex", zh: "Gore-Tex防水面料" },
              { en: "Vibram sole", zh: "Vibram鞋底" },
              { en: "traction", zh: "抓地力" },
              { en: "hiking socks", zh: "登山袜" },
            ],
            alternativeExpressions: [
              { textEn: "Waterproof is a must with stream crossings. Look for Gore-Tex lining and Vibram soles — those grip wet rock like nothing else. And try them on with hiking socks!", textZh: "过溪的话防水是必须的。找Gore-Tex内衬和Vibram鞋底——湿石头上抓地力无敌。试穿时穿登山袜！", actionHint: "针对地形推荐靴子", frequency: "common" },
              { textEn: "With rocky trails and water crossings, you need Gore-Tex waterproofing and a Vibram outsole for grip. This pair handles both. Pro tip: bring thick socks to try them on properly.", textZh: "多石步道加过溪，需要Gore-Tex防水和Vibram外底抓地。这双两样都有。小贴士：穿厚袜子试穿才准。", actionHint: "专业推荐并提供试穿建议", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "These feel great. Now for the backpack — what size do I need for a day hike?",
            textZh: "感觉很好。背包呢——日间徒步需要多大的？",
          },
          {
            speaker: "them",
            role: "户外顾问",
            textEn: "For a day hike, 20 to 30 liters is plenty. You need room for water, snacks, an extra layer, rain gear, and your first aid kit. This 25-liter pack has a hydration sleeve and hip belt to distribute the weight.",
            textZh: "日间徒步20到30升就够了。需要放水、零食、多一层衣服、雨具和急救包。这个25升的背包有水袋仓和腰带分散重量。",
            keyPhrases: [
              { en: "20 to 30 liters", zh: "20到30升" },
              { en: "hydration sleeve", zh: "水袋仓" },
              { en: "hip belt", zh: "腰带" },
              { en: "distribute the weight", zh: "分散重量" },
            ],
            alternativeExpressions: [
              { textEn: "A 25-liter pack is the sweet spot for day hikes. Fits your water, food, extra jacket, rain layer, and first aid. This one has a spot for a hydration bladder and a hip belt to take weight off your shoulders.", textZh: "25升背包是日间徒步的最佳容量。放得下水、食物、外套、雨衣和急救包。这款有水袋仓和腰带分担肩膀重量。", actionHint: "推荐日间徒步背包", frequency: "common" },
              { textEn: "For a day out, 20 to 30 liters is all you need. This 25L has everything: hydration compatibility, hip belt for comfort, and enough room for all your essentials.", textZh: "出去一天20到30升就够了。这款25升什么都有：可装水袋、有腰带更舒适、空间够装所有必需品。", actionHint: "强调功能齐全", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Someone told me I need to 'dress in layers' for hiking. What does that mean exactly?",
            textZh: "有人告诉我徒步要'穿层次'。具体是什么意思？",
            culturalNote: "户外运动的'层次穿衣法'（layering system）是核心概念：基础层排汗、中间层保暖、外层防风防雨。",
          },
          {
            speaker: "them",
            role: "户外顾问",
            textEn: "Layering is the most important concept in outdoor clothing. Three layers: a base layer that wicks sweat away from your skin — merino wool or synthetic. A mid layer for insulation — like a fleece or down jacket. And an outer shell that blocks wind and rain.",
            textZh: "层次穿衣是户外服装最重要的概念。三层：基础层把汗从皮肤排走——美利奴羊毛或合成面料。中间层保暖——比如抓绒衫或羽绒服。外层防风防雨。",
            keyPhrases: [
              { en: "base layer", zh: "基础层" },
              { en: "wicks sweat", zh: "排汗" },
              { en: "merino wool", zh: "美利奴羊毛" },
              { en: "mid layer", zh: "中间层" },
              { en: "insulation", zh: "保暖层" },
              { en: "outer shell", zh: "外层" },
            ],
            alternativeExpressions: [
              { textEn: "Three layers is the golden rule outdoors. Bottom layer pulls sweat off your skin. Middle layer keeps you warm. Top layer blocks wind and rain. Simple but effective.", textZh: "户外三层是黄金法则。内层排汗、中层保暖、外层挡风雨。简单但有效。", actionHint: "简明介绍三层穿衣法", frequency: "common" },
              { textEn: "Think of it like a system: base layer for moisture management, mid layer for warmth, outer layer for weather protection. Each one does a specific job.", textZh: "把它想象成一个系统：基础层管理湿气、中间层保暖、外层抵御天气。每层各司其职。", actionHint: "以系统化方式解释", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I just wear a cotton t-shirt as my base layer?",
            textZh: "基础层能穿棉T恤吗？",
          },
          {
            speaker: "them",
            role: "户外顾问",
            textEn: "We say 'cotton kills' in the outdoor world — not literally, but cotton soaks up sweat and stays wet, which can make you dangerously cold. Synthetic or wool base layers dry fast and keep you comfortable. This lightweight merino tee is $45 — you won't regret it.",
            textZh: "户外界有句话叫'棉要命'——不是真的，但棉会吸汗然后一直湿着，可能让你危险地失温。合成面料或羊毛基础层干得快，让你保持舒适。这件轻薄美利奴T恤45美元——你不会后悔的。",
            keyPhrases: [
              { en: "cotton kills", zh: "棉要命（户外俗语）" },
              { en: "soaks up sweat", zh: "吸汗" },
              { en: "stays wet", zh: "一直湿着" },
              { en: "dry fast", zh: "干得快" },
            ],
            alternativeExpressions: [
              { textEn: "In the outdoor world, we have a saying: cotton kills. It absorbs sweat and stays soggy, which chills you fast. Merino or synthetic dries quickly. This $45 merino tee is worth every penny.", textZh: "户外界有句话：棉要命。棉吸汗后一直湿着很快让人发冷。美利奴或合成面料干得快。这件45美元的美利奴T恤物超所值。", actionHint: "用行业术语强调重要性", frequency: "common" },
              { textEn: "Please, no cotton! It gets wet and stays wet — bad news in the outdoors. Go with merino wool or synthetic. This $45 merino base layer is the single best investment for hiking comfort.", textZh: "千万别穿棉的！湿了就干不了——在户外很危险。选美利奴羊毛或合成面料。这件45美元的美利奴基础层是徒步舒适度的最佳投资。", actionHint: "强烈建议远离棉质", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I definitely don't want to be cold and wet. I'll take the merino tee, the boots, and the backpack. You've been incredibly helpful.",
            textZh: "我肯定不想又冷又湿。美利奴T恤、靴子和背包都要了。你帮了大忙。",
          },
        ],
      },
    ],
  },

  // ==================== 电子产品配件 ====================
  {
    id: "shopping-electronics-accessories",
    category: "shopping",
    titleZh: "电子产品配件选购",
    titleEn: "Electronics Accessories Shopping",
    description: "在电子产品店选购手机壳、充电器、耳机等配件",
    otherRole: "电子产品店员",
    otherRoleIcon: "🔌",
    flows: [
      {
        id: "basic",
        titleZh: "选购手机配件",
        titleEn: "Phone Accessories",
        description: "选购手机壳、充电器和屏幕保护膜的基本流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need a phone case and a charger. I have an iPhone 15.",
            textZh: "你好，我需要一个手机壳和充电器。我用的iPhone 15。",
          },
          {
            speaker: "them",
            role: "电子产品店员",
            textEn: "Sure! For the iPhone 15, we have slim cases, rugged cases, and clear cases. How much protection do you need? Are you accident-prone?",
            textZh: "好的！iPhone 15我们有轻薄壳、防摔壳和透明壳。您需要多强的保护？容易摔手机吗？",
            keyPhrases: [
              { en: "slim case", zh: "轻薄壳" },
              { en: "rugged case", zh: "防摔壳" },
              { en: "clear case", zh: "透明壳" },
              { en: "accident-prone", zh: "容易出意外的" },
            ],
            alternativeExpressions: [
              { textEn: "We've got a bunch for the iPhone 15 — thin and sleek, heavy-duty protective, or clear to show off the phone. How careful are you with your phone?", textZh: "iPhone 15有很多选择——纤薄时尚、重度防护或透明展示手机本色。您用手机小心吗？", actionHint: "了解保护需求", frequency: "common" },
              { textEn: "iPhone 15? Great! We have everything from slim cases to military-grade protection. Do you drop your phone a lot, or are you more careful?", textZh: "iPhone 15？好的！从轻薄壳到军用级防护都有。您经常摔手机还是比较小心？", actionHint: "根据使用习惯推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I drop my phone a lot, so something protective. But not too bulky.",
            textZh: "我经常摔手机，所以要保护性好的。但不要太厚重。",
          },
          {
            speaker: "them",
            role: "电子产品店员",
            textEn: "This hybrid case is perfect then — it has a shock-absorbing bumper with a slim profile. It's military-grade drop-tested up to 10 feet. And it's only $29.",
            textZh: "这款混合壳很适合——有减震边框但外形纤薄。经过军用级跌落测试，耐摔10英尺。只要29美元。",
            keyPhrases: [
              { en: "shock-absorbing", zh: "减震的" },
              { en: "slim profile", zh: "纤薄外形" },
              { en: "military-grade", zh: "军用级" },
              { en: "drop-tested", zh: "跌落测试" },
            ],
            alternativeExpressions: [
              { textEn: "This one's your best bet — tough protection but doesn't add bulk. Drop-tested to 10 feet, military-grade. Just $29.", textZh: "这款最合适——防摔强但不厚重。10英尺跌落测试过的军用级。才29美元。", actionHint: "推荐防摔又纤薄的壳", frequency: "common" },
              { textEn: "Try this hybrid — shock-absorbing edges but still slim in your pocket. Survived 10-foot drops in testing. At $29, it's a no-brainer for a phone dropper.", textZh: "试试这款混合壳——边框减震但放口袋里还是很薄。测试中经受住了10英尺跌落。29美元对爱摔手机的人来说太值了。", actionHint: "以实际场景推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That looks good. Should I also get a screen protector?",
            textZh: "看起来不错。需要贴屏幕保护膜吗？",
          },
          {
            speaker: "them",
            role: "电子产品店员",
            textEn: "Definitely! We have tempered glass protectors for $12. They prevent scratches and cracks. I can install it for you right now — it only takes two minutes.",
            textZh: "一定要！我们有钢化玻璃膜12美元。防刮防裂。我现在就可以帮您贴——只要两分钟。",
            keyPhrases: [
              { en: "tempered glass", zh: "钢化玻璃" },
              { en: "screen protector", zh: "屏幕保护膜" },
              { en: "install", zh: "安装/贴上" },
            ],
            alternativeExpressions: [
              { textEn: "100%! A tempered glass protector is $12 — it'll save your screen from scratches and cracks. I can put it on right now, takes two minutes.", textZh: "绝对要！钢化玻璃膜12美元——能保护屏幕不被刮花和碎裂。我现在就能帮您贴，两分钟搞定。", actionHint: "强力推荐屏幕保护", frequency: "common" },
              { textEn: "I'd say it's a must. This tempered glass screen protector is only $12 and can save you from a $300 screen repair. Want me to apply it now?", textZh: "我觉得是必须的。这个钢化玻璃膜才12美元但能帮您省下300美元的屏幕维修费。要我现在贴吗？", actionHint: "从经济角度推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes please. Now about the charger — I need one that works with US outlets. I'm from overseas.",
            textZh: "好的。充电器呢——我需要一个能用美国插座的。我从国外来的。",
            culturalNote: "美国使用Type A/B插座（两脚/三脚扁插头），电压110V。其他国家的充电器可能需要转换插头。",
          },
          {
            speaker: "them",
            role: "电子产品店员",
            textEn: "iPhone 15 uses USB-C. This 20-watt fast charger with a US plug is $19. It charges your phone to 50% in about 30 minutes. We also have universal travel adapters for $15 if you want to keep using your own charger.",
            textZh: "iPhone 15用USB-C。这款20瓦快充带美国插头19美元。大约30分钟充到50%。如果您想继续用自己的充电器，我们也有万能旅行转换头15美元。",
            keyPhrases: [
              { en: "USB-C", zh: "USB-C接口" },
              { en: "fast charger", zh: "快充" },
              { en: "travel adapter", zh: "旅行转换头" },
            ],
            alternativeExpressions: [
              { textEn: "The iPhone 15 is USB-C. This $19 fast charger gets you to 50% in half an hour with a US plug. Or if you have your own charger, a $15 travel adapter does the trick.", textZh: "iPhone 15是USB-C。这款19美元快充半小时充到50%带美国插头。如果自己有充电器15美元转换头就行。", actionHint: "提供两种充电方案", frequency: "common" },
              { textEn: "It's USB-C now. For $19 you get a 20-watt fast charger with a US plug — super quick charging. Or just grab a $15 plug adapter to use your existing charger.", textZh: "现在是USB-C了。19美元20瓦快充带美国插头——充电超快。或者15美元买个转换头用您自己的充电器。", actionHint: "根据需求推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the fast charger. Case, screen protector, and charger — what's my total?",
            textZh: "我要快充。壳、屏幕膜和充电器——一共多少？",
          },
          {
            speaker: "them",
            role: "电子产品店员",
            textEn: "That's $29 plus $12 plus $19 — $60 before tax. The screen protector installation is complimentary. Let me put it on for you right now!",
            textZh: "29加12加19——税前60美元。贴屏幕膜是免费服务。我现在帮您贴上！",
            keyPhrases: [
              { en: "before tax", zh: "税前" },
              { en: "complimentary", zh: "免费的" },
            ],
            alternativeExpressions: [
              { textEn: "$60 before tax for everything. And I'll put the screen protector on for free — give me two minutes!", textZh: "全部加起来税前60美元。屏幕膜免费帮您贴——给我两分钟！", actionHint: "快速报价并开始服务", frequency: "common" },
              { textEn: "All together that's $60 plus tax. We install the screen protector at no charge. Let me get that on for you now while you wait.", textZh: "总共60美元加税。屏幕膜免费安装。我现在帮您贴上，稍等一下就好。", actionHint: "确认总价并提供免费服务", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "选购耳机与音箱",
        titleEn: "Headphones & Speakers",
        description: "比较不同类型耳机和蓝牙音箱",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'm looking for wireless headphones. There are so many options — what should I consider?",
            textZh: "我想买无线耳机。选择太多了——应该考虑什么？",
          },
          {
            speaker: "them",
            role: "电子产品店员",
            textEn: "First, decide between earbuds and over-ear headphones. Earbuds are portable and great for workouts. Over-ears have better sound quality and noise cancellation. What will you mainly use them for?",
            textZh: "首先选择入耳式还是头戴式。入耳式便携，适合运动。头戴式音质更好，降噪也更好。您主要用来做什么？",
            keyPhrases: [
              { en: "earbuds", zh: "入耳式耳机" },
              { en: "over-ear", zh: "头戴式" },
              { en: "noise cancellation", zh: "降噪" },
              { en: "portable", zh: "便携的" },
            ],
            alternativeExpressions: [
              { textEn: "Big question: earbuds or over-ears? Buds are small and great for the gym. Over-ears sound better and block more noise. What's your main use case?", textZh: "关键问题：入耳式还是头戴式？入耳小巧适合健身。头戴音质好降噪强。您主要怎么用？", actionHint: "帮助做出类型选择", frequency: "common" },
              { textEn: "Step one: earbuds vs. over-ear. If you're active, go earbuds. If sound and noise cancellation matter most, over-ear is the way. What'll you be using them for?", textZh: "第一步：入耳对头戴。爱运动选入耳。注重音质和降噪选头戴。您打算怎么用？", actionHint: "分场景推荐类型", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Mainly for commuting and flights. I want good noise cancellation to block out background noise.",
            textZh: "主要通勤和坐飞机用。我想要好的降噪功能，隔绝背景噪音。",
          },
          {
            speaker: "them",
            role: "电子产品店员",
            textEn: "For that, I'd recommend these over-ear headphones with active noise cancellation. They're top-rated for travel — 30 hours of battery life, super comfortable for long flights, and the ANC blocks out airplane engine noise really well.",
            textZh: "那我推荐这款头戴式主动降噪耳机。旅行评分最高——30小时续航，长途飞行佩戴超舒适，ANC降噪对飞机引擎噪音效果特别好。",
            keyPhrases: [
              { en: "active noise cancellation", zh: "主动降噪" },
              { en: "battery life", zh: "续航" },
              { en: "ANC", zh: "主动降噪（缩写）" },
            ],
            alternativeExpressions: [
              { textEn: "For commuting and flights, go over-ear with ANC. These are rated number one for travel — 30-hour battery, incredibly comfy, and they block out engine noise like nothing.", textZh: "通勤和飞行选头戴式带ANC。这款旅行评价第一——30小时电池、超舒适、隔绝引擎噪音效果惊人。", actionHint: "针对旅行场景推荐", frequency: "common" },
              { textEn: "These over-ears are made for travelers — best-in-class noise cancellation, 30 hours of battery, and they stay comfortable even on a 12-hour flight.", textZh: "这款头戴式就是为旅行者做的——顶级降噪、30小时续航、12小时飞行也佩戴舒适。", actionHint: "强调长途旅行适用性", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much are they? And can I try them on to hear the sound quality?",
            textZh: "多少钱？我可以试听一下音质吗？",
          },
          {
            speaker: "them",
            role: "电子产品店员",
            textEn: "They're $349. And yes, we have a demo unit right here. Put them on, turn on the ANC, and I'll play some music through our test device. You'll notice the difference immediately.",
            textZh: "349美元。可以试听，我们这里有试用机。戴上，打开降噪，我用测试设备放音乐。您会立刻感觉到区别。",
            keyPhrases: [
              { en: "demo unit", zh: "试用机" },
              { en: "test device", zh: "测试设备" },
            ],
            alternativeExpressions: [
              { textEn: "$349. Want to try them? We have a demo pair right here. Pop them on, switch on the noise cancellation, and hear for yourself!", textZh: "349美元。想试试吗？这有试用的。戴上打开降噪自己感受一下！", actionHint: "邀请试听体验", frequency: "common" },
              { textEn: "These are $349. But don't just take my word for it — put on the demo pair, hit the ANC button, and you'll hear the world disappear.", textZh: "这款349美元。但别光听我说——戴上试用机按降噪键，您会感觉世界都安静了。", actionHint: "用体验说服顾客", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Wow, the noise cancellation is amazing. I can barely hear anything else. Are there cheaper alternatives with similar ANC?",
            textZh: "哇，降噪太厉害了。几乎听不到其他声音。有没有降噪差不多但便宜一点的？",
          },
          {
            speaker: "them",
            role: "电子产品店员",
            textEn: "This model is $199 — the ANC is about 80% as good, and you get 20 hours of battery. The trade-off is slightly less comfort on long wear and the sound isn't quite as rich in the bass range.",
            textZh: "这款199美元——降噪效果大概是前一款的80%，续航20小时。缺点是长时间佩戴舒适度稍差，低音也没那么丰富。",
            keyPhrases: [
              { en: "trade-off", zh: "取舍/牺牲" },
              { en: "bass range", zh: "低音域" },
              { en: "long wear", zh: "长时间佩戴" },
            ],
            alternativeExpressions: [
              { textEn: "For $199, you get 80% of the noise cancellation and 20 hours of battery. It's not as plush for long flights and the bass is a little thinner, but still solid.", textZh: "199美元有80%的降噪效果和20小时续航。长途飞行没那么舒适低音薄一点，但还是很不错的。", actionHint: "客观对比平价款", frequency: "common" },
              { textEn: "The budget option is $199 — still great ANC, just not quite as good. Battery is 20 hours. The compromise is comfort on long wear and bass depth.", textZh: "平价款199美元——降噪还是很好就没那么极致。续航20小时。妥协在于长时间舒适度和低音深度。", actionHint: "坦诚说明差距", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I think the premium pair is worth it for flights. Do they fold flat for packing?",
            textZh: "我觉得飞行用的话贵的值得。它们能折叠方便装箱吗？",
          },
          {
            speaker: "them",
            role: "电子产品店员",
            textEn: "Yes! They fold flat and come with a hard carrying case. The case also fits the charging cable and a 3.5mm audio cable for planes that don't have Bluetooth. Everything is included in the box.",
            textZh: "可以！它们可以折平，附带硬壳收纳盒。盒子里还能放充电线和3.5mm音频线，飞机上没蓝牙的时候用。全都包含在包装里。",
            keyPhrases: [
              { en: "fold flat", zh: "折平" },
              { en: "carrying case", zh: "收纳盒" },
              { en: "3.5mm audio cable", zh: "3.5mm音频线" },
            ],
            alternativeExpressions: [
              { textEn: "They fold completely flat into this hard case. It also holds the charging cable and an aux cord for planes without Bluetooth. Everything comes in the box.", textZh: "可以完全折平放进这个硬壳盒。盒子还能放充电线和飞机上没蓝牙时用的音频线。全包含在包装里。", actionHint: "展示便携收纳设计", frequency: "common" },
              { textEn: "Absolutely — they collapse flat for packing. Hard case included, plus a charging cable and a wired option for in-flight entertainment. It's all in the box, ready to go.", textZh: "当然——可以折叠方便打包。配有硬壳盒、充电线和有线选项用于机上娱乐。全在盒子里随时可用。", actionHint: "强调旅行便捷性", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. I'll take the premium ones. This will make my flights so much better.",
            textZh: "太好了。我要贵的那款。这会让我的飞行体验好很多。",
          },
        ],
      },
    ],
  },

  // ==================== 宠物用品 ====================
  {
    id: "shopping-pet-supplies",
    category: "shopping",
    titleZh: "宠物用品选购",
    titleEn: "Pet Supplies Shopping",
    description: "在宠物用品店为宠物选购食品、玩具和日用品",
    otherRole: "宠物店店员",
    otherRoleIcon: "🐾",
    flows: [
      {
        id: "basic",
        titleZh: "基本宠物用品",
        titleEn: "Basic Pet Supplies",
        description: "为宠物选购基本食品和用品的流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just adopted a cat and I need to get some supplies. I'm a first-time pet owner.",
            textZh: "你好，我刚领养了一只猫，需要买一些用品。我是第一次养宠物。",
          },
          {
            speaker: "them",
            role: "宠物店店员",
            textEn: "Congratulations! That's exciting. How old is your cat, and do you know the breed? That'll help me recommend the right food and supplies.",
            textZh: "恭喜！太棒了。您的猫多大了，知道品种吗？这样我能推荐合适的食品和用品。",
            keyPhrases: [
              { en: "adopted", zh: "领养" },
              { en: "breed", zh: "品种" },
              { en: "first-time pet owner", zh: "第一次养宠物的人" },
            ],
            alternativeExpressions: [
              { textEn: "Aw, congrats on the new family member! Tell me about her — how old, what breed? I'll get you set up with everything you need.", textZh: "恭喜新家庭成员！跟我说说她——多大了，什么品种？我帮您把需要的都配齐。", actionHint: "热情迎接新宠物主人", frequency: "common" },
              { textEn: "That's wonderful! A shelter cat — what a lucky kitty! What's her age and breed? That'll help me steer you to the right stuff.", textZh: "太好了！收容所领养——小猫真幸运！她多大什么品种？我好帮您找对的东西。", actionHint: "祝贺并了解猫咪信息", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "She's about 2 years old. The shelter said she's a domestic shorthair.",
            textZh: "她大概2岁。收容所说她是家养短毛猫。",
          },
          {
            speaker: "them",
            role: "宠物店店员",
            textEn: "Great! For an adult cat, you'll need: cat food — wet and dry, a litter box and litter, food and water bowls, a scratching post, and some toys. Let me walk you through each one.",
            textZh: "好的！成年猫需要：猫粮——湿粮和干粮、猫砂盆和猫砂、食碗水碗、猫抓板、还有一些玩具。我带您逐个看。",
            keyPhrases: [
              { en: "wet and dry food", zh: "湿粮和干粮" },
              { en: "litter box", zh: "猫砂盆" },
              { en: "scratching post", zh: "猫抓板/猫抓柱" },
            ],
            alternativeExpressions: [
              { textEn: "For an adult cat, here's your shopping list: food — wet and dry, litter box, litter, bowls, a scratching post, and toys. Let's go through them one by one.", textZh: "成年猫的购物清单：猫粮——湿粮干粮、猫砂盆、猫砂、碗、猫抓板和玩具。我们一个一个来。", actionHint: "列出完整购物清单", frequency: "common" },
              { textEn: "A 2-year-old? Perfect age! You'll need food, a litter setup, bowls, something to scratch on, and a few toys. I'll take you through the store.", textZh: "2岁？好年纪！需要猫粮、猫砂盆一套、碗、抓抓的东西和几个玩具。我带您逛店。", actionHint: "轻松引导逛店", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "There are so many cat food brands. Which one is best?",
            textZh: "猫粮品牌太多了。哪种最好？",
          },
          {
            speaker: "them",
            role: "宠物店店员",
            textEn: "Look for food where real meat is the first ingredient — not 'meat by-products' or fillers. This brand is highly rated by vets and uses real chicken as the primary protein. A 7-pound bag is $22.",
            textZh: "选第一成分是真正肉类的——不是'肉类副产品'或填充物。这个品牌受到兽医高度评价，主要蛋白质来源是真正的鸡肉。7磅装22美元。",
            keyPhrases: [
              { en: "first ingredient", zh: "第一成分" },
              { en: "meat by-products", zh: "肉类副产品" },
              { en: "fillers", zh: "填充物" },
              { en: "highly rated by vets", zh: "兽医高度评价的" },
            ],
            alternativeExpressions: [
              { textEn: "The key is checking the ingredients — real meat should be first, not by-products or fillers. This vet-recommended brand has real chicken as the main protein. $22 for a 7-pound bag.", textZh: "关键是看成分——真肉应该排第一位，不是副产品或填充物。这个品牌兽医推荐主要蛋白质是真鸡肉。7磅装22美元。", actionHint: "教顾客看成分表", frequency: "common" },
              { textEn: "Always check the label — if the first ingredient is real chicken or fish, you're good. This brand is one of the best — vets love it. A 7-pound bag runs $22.", textZh: "一定要看标签——如果第一成分是真正的鸡肉或鱼就对了。这个牌子是最好的之一——兽医都推荐。7磅装22美元。", actionHint: "教选购技巧", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What about the litter box? The ones I see range from $10 to $200. What's the difference?",
            textZh: "猫砂盆呢？我看到从10美元到200美元都有。有什么区别？",
          },
          {
            speaker: "them",
            role: "宠物店店员",
            textEn: "The basic open boxes are cheapest but don't control odor well. Covered boxes are better for smell and privacy. The expensive ones are self-cleaning — they automatically scoop after your cat uses them. For a first cat, I'd start with a covered box at $25.",
            textZh: "基本款开放式最便宜但不太控味。封闭式防臭更好，猫也更有隐私感。贵的是自动清洁的——猫用完后自动铲屎。第一次养猫的话，我建议先买25美元的封闭式。",
            keyPhrases: [
              { en: "odor control", zh: "控制气味" },
              { en: "covered box", zh: "封闭式猫砂盆" },
              { en: "self-cleaning", zh: "自动清洁" },
            ],
            alternativeExpressions: [
              { textEn: "Open boxes are cheap but smelly. Covered ones trap odor and give your cat privacy. Self-cleaning ones are fancy but pricey. For starters, a $25 covered box is the way to go.", textZh: "开放式便宜但味道大。封闭式控味好猫也有隐私。自动清洁的高级但贵。入门的话25美元封闭式最合适。", actionHint: "对比三种猫砂盆", frequency: "common" },
              { textEn: "Three tiers: open box — budget but no odor control. Covered box — better smell management. Self-cleaning — the luxury option. I'd recommend starting with the covered one for $25.", textZh: "三个档次：开放式——便宜但不控味。封闭式——味道管理更好。自动清洁——豪华选项。建议先买25美元的封闭式。", actionHint: "按价位分级推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The covered one sounds good. What kind of cat litter do you recommend?",
            textZh: "封闭式的不错。你推荐什么猫砂？",
          },
          {
            speaker: "them",
            role: "宠物店店员",
            textEn: "Clumping litter is the most popular — it forms solid clumps when wet, making scooping easy. This unscented one is gentle on sensitive paws. A 20-pound box is $14 and lasts about a month for one cat.",
            textZh: "结团猫砂最受欢迎——遇湿结成实心团，容易铲。这款无香型对敏感的猫爪很温和。20磅装14美元，一只猫大概能用一个月。",
            keyPhrases: [
              { en: "clumping litter", zh: "结团猫砂" },
              { en: "unscented", zh: "无香的" },
              { en: "scooping", zh: "铲" },
            ],
            alternativeExpressions: [
              { textEn: "Go with clumping — it's by far the easiest to clean. This unscented version is great for cats with sensitive feet. $14 for 20 pounds, lasts about a month.", textZh: "选结团的——清理起来最方便。这款无香的对脚爪敏感的猫很好。20磅14美元用一个月左右。", actionHint: "推荐最方便的猫砂", frequency: "common" },
              { textEn: "Clumping is the way to go — it clumps when wet so you just scoop and toss. I'd pick unscented for a new cat. This 20-pound box is $14 and should last you about a month.", textZh: "结团的最好——遇湿结团铲掉就行。新猫建议选无香的。这箱20磅14美元大概用一个月。", actionHint: "说明使用方法和用量", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "宠物健康与特殊需求",
        titleEn: "Pet Health & Special Needs",
        description: "了解宠物保健品、特殊饮食和护理用品",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "The shelter told me she might have a sensitive stomach. Are there special foods for that?",
            textZh: "收容所说她可能肠胃敏感。有专门的食品吗？",
          },
          {
            speaker: "them",
            role: "宠物店店员",
            textEn: "Yes! We have a whole line of sensitive stomach formulas. This one uses limited ingredients — single protein source and no grains. It's easier to digest. I'd recommend transitioning gradually over a week by mixing it with her current food.",
            textZh: "有的！我们有一整系列肠胃敏感配方。这款用的是简单成分——单一蛋白质来源，无谷物。更容易消化。建议用一周时间逐步过渡，和她现在的食物混着吃。",
            keyPhrases: [
              { en: "sensitive stomach", zh: "肠胃敏感" },
              { en: "limited ingredients", zh: "简单成分" },
              { en: "grain-free", zh: "无谷物" },
              { en: "transitioning gradually", zh: "逐步过渡" },
            ],
            alternativeExpressions: [
              { textEn: "We carry several sensitive stomach options. This one's limited-ingredient — just one protein, no grains. Gentler on the tummy. Mix it with her old food over a week to switch over smoothly.", textZh: "我们有好几种肠胃敏感款。这个是简单配方——单一蛋白无谷物。对肠胃更温和。用一周时间跟旧粮混着慢慢换。", actionHint: "推荐敏感肠胃专用粮", frequency: "common" },
              { textEn: "Definitely! This formula is designed for sensitive tummies — single protein, grain-free, easy to digest. Don't switch all at once though — gradually mix it in over about a week.", textZh: "当然有！这款专为敏感肠胃设计——单一蛋白、无谷物、好消化。不过别一下子全换——用大约一周时间慢慢过渡。", actionHint: "强调渐进换粮", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. Does she need any supplements or vitamins?",
            textZh: "好的。她需要补充保健品或维生素吗？",
          },
          {
            speaker: "them",
            role: "宠物店店员",
            textEn: "For most healthy cats on a good diet, supplements aren't necessary. But since she was a shelter cat, a probiotic can help with digestion during the transition. These chews are $18 — most cats love the flavor.",
            textZh: "对于饮食好的健康猫来说，保健品通常不需要。但因为她是收容所出来的，益生菌在过渡期能帮助消化。这种咀嚼片18美元——大多数猫喜欢这个味道。",
            keyPhrases: [
              { en: "supplements", zh: "保健品" },
              { en: "probiotic", zh: "益生菌" },
              { en: "chews", zh: "咀嚼片" },
            ],
            alternativeExpressions: [
              { textEn: "Usually not needed if she's eating well. But a probiotic is great for shelter cats adjusting to a new home and new food. These $18 chews are easy to give and cats gobble them up.", textZh: "如果吃得好通常不需要。但益生菌对收容所猫适应新家和新食物很有帮助。这种18美元的咀嚼片很容易喂猫都爱吃。", actionHint: "针对收容所猫推荐", frequency: "common" },
              { textEn: "Healthy cats on a good diet are usually fine without supplements. But a probiotic can really help with the transition — especially for a shelter rescue. These chews are $18 and most cats go crazy for them.", textZh: "饮食好的健康猫通常不需要保健品。但益生菌对过渡期真的有帮助——特别是收容所救助猫。这种咀嚼片18美元大多数猫为之疯狂。", actionHint: "根据猫的背景推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Should I take her to the vet soon? She just got spayed at the shelter.",
            textZh: "需要尽快带她去看兽医吗？她刚在收容所做了绝育手术。",
          },
          {
            speaker: "them",
            role: "宠物店店员",
            textEn: "Yes, I'd recommend a vet visit within the first week. They'll do a wellness check, update vaccinations if needed, and make sure her spay incision is healing well. If you need a vet recommendation, we partner with the clinic next door.",
            textZh: "建议第一周内去一次。兽医会做全面检查，必要时更新疫苗，确认绝育伤口恢复良好。如果需要推荐兽医，我们和隔壁诊所有合作。",
            keyPhrases: [
              { en: "wellness check", zh: "全面检查" },
              { en: "vaccinations", zh: "疫苗" },
              { en: "spay incision", zh: "绝育伤口" },
              { en: "healing", zh: "恢复/愈合" },
            ],
            alternativeExpressions: [
              { textEn: "Definitely — see a vet in the first week for a checkup, vaccines, and to make sure the spay is healing nicely. We work with the vet clinic next door if you need a referral.", textZh: "一定要——第一周去看兽医做检查、打疫苗、确认绝育伤口恢复好。需要推荐的话我们和隔壁诊所有合作。", actionHint: "建议及时看兽医", frequency: "common" },
              { textEn: "I'd take her within the first week. The vet will do a full checkup, update any shots, and check the spay healing. Need a vet? The clinic right next to us is great — we refer people there all the time.", textZh: "建议第一周带她去。兽医会全面体检、更新疫苗、检查绝育恢复。需要兽医推荐吗？隔壁诊所很好——我们一直推荐顾客去那。", actionHint: "提供兽医推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's very helpful. How about grooming? Do cats need to be brushed?",
            textZh: "非常有帮助。护理呢？猫需要梳毛吗？",
          },
          {
            speaker: "them",
            role: "宠物店店员",
            textEn: "Shorthair cats don't need as much grooming, but brushing once or twice a week helps reduce shedding and hairballs. This rubber grooming brush is gentle and most cats actually enjoy it. It's only $8.",
            textZh: "短毛猫不需要太多梳理，但每周梳一两次能减少掉毛和毛球。这个橡胶梳毛刷很温和，大多数猫其实很享受。只要8美元。",
            keyPhrases: [
              { en: "shedding", zh: "掉毛" },
              { en: "hairballs", zh: "毛球" },
              { en: "grooming brush", zh: "梳毛刷" },
            ],
            alternativeExpressions: [
              { textEn: "Short hair means less grooming, but a weekly brushing cuts down on shedding and hairballs. This soft rubber brush works great — most cats love it. Just $8.", textZh: "短毛的话不用太多梳理，但每周刷一次能减少掉毛和毛球。这个软橡胶刷很好用——大多数猫都爱。才8美元。", actionHint: "推荐简单护理工具", frequency: "common" },
              { textEn: "Shorthair cats are low-maintenance, but a brush session once or twice a week makes a big difference with shedding. This $8 rubber brush is gentle — cats actually purr through it!", textZh: "短毛猫好打理，但每周梳一两次对掉毛有很大帮助。这把8美元的橡胶刷很温和——猫梳的时候还会打呼噜！", actionHint: "以猫咪反应增加吸引力", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll add the brush. Do I need to trim her nails too?",
            textZh: "刷子也要了。需要剪指甲吗？",
          },
          {
            speaker: "them",
            role: "宠物店店员",
            textEn: "Yes, every 2 to 3 weeks. Cat nail clippers are $6. If you're nervous about doing it yourself, most vets and groomers will do it for about $10 to $15. I can show you how if you'd like — it's easier than you think.",
            textZh: "需要，每2到3周一次。猫指甲剪6美元。如果您不敢自己剪，大多数兽医和宠物美容师收10到15美元。如果您愿意，我可以教您——比您想象的简单。",
            keyPhrases: [
              { en: "nail clippers", zh: "指甲剪" },
              { en: "groomer", zh: "宠物美容师" },
              { en: "every 2 to 3 weeks", zh: "每2到3周" },
            ],
            alternativeExpressions: [
              { textEn: "Yep — every couple of weeks. These clippers are $6 and work great. Nervous? A vet or groomer will do it for $10 to $15. Or I can teach you right now!", textZh: "要——每两三周。这种指甲剪6美元很好用。紧张的话兽医或美容师收10到15美元。或者我现在就教您！", actionHint: "提供DIY和专业两种选择", frequency: "common" },
              { textEn: "Cat nails grow fast — trim every 2 to 3 weeks. Clippers are just $6. If you're unsure how, I can give you a quick demo. It's really not as scary as it sounds!", textZh: "猫指甲长得快——每2到3周剪一次。指甲剪才6美元。不确定怎么剪的话我给您演示。真没想象中那么可怕！", actionHint: "消除剪指甲的恐惧", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Please show me! I want to learn. Let me get everything we talked about — this is going to be a big shopping cart.",
            textZh: "请教我！我想学。把我们说的都拿上吧——购物车要装满了。",
          },
          {
            speaker: "them",
            role: "宠物店店员",
            textEn: "Welcome to pet parenthood! Your total for the essentials kit comes to about $140. We also have a new pet owner loyalty program — sign up today and get 15% off your first purchase. Your new fur baby is going to be so happy!",
            textZh: "欢迎加入铲屎官大家庭！全套必备用品大约140美元。我们还有新宠物主人忠诚计划——今天注册首单85折。您的毛宝宝会很幸福的！",
            keyPhrases: [
              { en: "pet parenthood", zh: "养宠之路" },
              { en: "fur baby", zh: "毛宝宝" },
              { en: "loyalty program", zh: "忠诚计划/会员" },
            ],
            alternativeExpressions: [
              { textEn: "You're all set! About $140 for everything. And if you sign up for our pet parent program today, that's 15% off right now. Your kitty is going to love her new home!", textZh: "全套齐了！大约140美元。今天注册我们的宠物主人计划马上打85折。小猫咪一定会爱上新家的！", actionHint: "结账并推荐会员", frequency: "common" },
              { textEn: "Congratulations, you're officially a cat parent! Total is about $140. Want to save? Our new pet owner program gives you 15% off today. Your fur baby hit the jackpot with you!", textZh: "恭喜您正式成为猫爸猫妈了！一共约140美元。想省钱吗？新宠物主人计划今天85折。您的毛宝宝遇到您太幸运了！", actionHint: "祝贺并推销会员", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 玩具店选购 ====================
  {
    id: "shopping-toy-store",
    category: "shopping",
    titleZh: "玩具店选购",
    titleEn: "Toy Store Shopping",
    description: "在玩具店为孩子选购适龄玩具和益智游戏",
    otherRole: "玩具店店员",
    otherRoleIcon: "🧸",
    flows: [
      {
        id: "basic",
        titleZh: "基本玩具选购",
        titleEn: "Basic Toy Shopping",
        description: "根据年龄选购合适玩具的基本流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm looking for a birthday gift for my nephew. He's turning 6.",
            textZh: "你好，我想给我侄子买个生日礼物。他要6岁了。",
          },
          {
            speaker: "them",
            role: "玩具店店员",
            textEn: "Fun age! What is he into? Does he like building things, action figures, outdoor toys, or arts and crafts?",
            textZh: "好玩的年龄！他喜欢什么？搭建类、动作人偶、户外玩具，还是手工艺术？",
            keyPhrases: [
              { en: "building things", zh: "搭建类" },
              { en: "action figures", zh: "动作人偶" },
              { en: "outdoor toys", zh: "户外玩具" },
              { en: "arts and crafts", zh: "手工艺术" },
            ],
            alternativeExpressions: [
              { textEn: "Six is a great age for gifts! What's he into — building, superheroes, sports stuff, or more creative things like drawing and crafts?", textZh: "6岁太好买礼物了！他喜欢什么——搭建、超级英雄、运动类，还是画画手工之类的创意型？", actionHint: "了解孩子兴趣", frequency: "common" },
              { textEn: "Awesome age! Tell me what he's into. Does he like constructing things, playing with action figures, running around outside, or being artsy?", textZh: "好年纪！跟我说说他喜欢什么。爱搭东西、玩人偶、户外跑还是爱做手工？", actionHint: "列举选项了解偏好", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "He loves building things. He's been playing with blocks a lot.",
            textZh: "他喜欢搭建。一直在玩积木。",
          },
          {
            speaker: "them",
            role: "玩具店店员",
            textEn: "Perfect! For a 6-year-old builder, LEGO sets are always a hit. We have themed sets — dinosaurs, space, vehicles — and the classic creative brick boxes. What's your budget?",
            textZh: "太好了！6岁爱搭建的孩子，乐高永远不会错。我们有主题套装——恐龙、太空、车辆——还有经典创意积木盒。您的预算是多少？",
            keyPhrases: [
              { en: "LEGO sets", zh: "乐高套装" },
              { en: "themed sets", zh: "主题套装" },
              { en: "creative brick box", zh: "创意积木盒" },
            ],
            alternativeExpressions: [
              { textEn: "A builder? LEGO is the way to go! We've got themed ones — dinosaurs, space, cars — or the classic free-build boxes. What are you looking to spend?", textZh: "爱搭建？乐高是首选！有主题的——恐龙、太空、汽车——还有经典自由搭建盒。您打算花多少？", actionHint: "推荐乐高并了解预算", frequency: "common" },
              { textEn: "LEGO is unbeatable for kids who love building. Themed sets are great if he has a favorite topic, or the creative boxes let him build whatever he imagines. What's your price range?", textZh: "爱搭建的孩子乐高无敌。有喜欢的主题就选主题套装自由想象就选创意盒。预算多少？", actionHint: "根据偏好分类推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "About $30 to $50. He really likes dinosaurs.",
            textZh: "大概30到50美元。他特别喜欢恐龙。",
          },
          {
            speaker: "them",
            role: "玩具店店员",
            textEn: "This dinosaur LEGO set is $39 — it has 300 pieces and builds into a T-Rex that actually moves its jaw. It's rated for ages 6 and up, so it's right in his range. Comes with a mini figure too.",
            textZh: "这套恐龙乐高39美元——300片，可以搭成一只能动嘴巴的霸王龙。适合6岁以上，正好合适。还附带一个小人偶。",
            keyPhrases: [
              { en: "300 pieces", zh: "300片" },
              { en: "T-Rex", zh: "霸王龙" },
              { en: "rated for ages 6 and up", zh: "适合6岁以上" },
              { en: "mini figure", zh: "小人偶" },
            ],
            alternativeExpressions: [
              { textEn: "Check this one out — dinosaur LEGO, $39, 300 pieces. He builds a T-Rex with a movable jaw! Made for ages 6 and up, plus a mini figure inside.", textZh: "看这个——恐龙乐高39美元300片。能搭一只嘴巴能动的霸王龙！6岁以上适用还有小人偶。", actionHint: "展示具体产品亮点", frequency: "common" },
              { textEn: "This one's a winner — $39, 300 pieces, builds into a T-Rex that actually chomps! Perfect for his age group and comes with a mini figure. Kids go crazy for it.", textZh: "这个绝对不会错——39美元300片搭成嘴巴能咬的霸王龙！完美适合他的年龄还有小人偶。孩子们都疯了。", actionHint: "以孩子的反应推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds perfect! Are there any small parts I should worry about? He has a younger sister.",
            textZh: "听起来太好了！有小零件需要担心吗？他有个妹妹。",
          },
          {
            speaker: "them",
            role: "玩具店店员",
            textEn: "Yes, LEGO has small pieces that aren't safe for children under 3. The box has a choking hazard warning. I'd suggest keeping the set in his room or at a table away from his sister during playtime.",
            textZh: "有的，乐高有小零件，对3岁以下儿童不安全。盒子上有窒息风险警告。建议玩的时候放在他房间或桌上，远离妹妹。",
            keyPhrases: [
              { en: "small pieces", zh: "小零件" },
              { en: "choking hazard", zh: "窒息风险" },
              { en: "warning", zh: "警告" },
            ],
            alternativeExpressions: [
              { textEn: "Good thinking! LEGO pieces are a choking hazard for kids under 3. Make sure he plays with it away from his little sister — maybe at a desk or in his room.", textZh: "想得周到！乐高零件对3岁以下有窒息风险。让他在妹妹够不到的地方玩——在桌上或自己房间。", actionHint: "提醒小零件安全", frequency: "common" },
              { textEn: "That's a great question for a parent to ask! LEGO has small parts that can be dangerous for toddlers. Have him build at a table or in his own space, away from little sis.", textZh: "家长问这个问题很对！乐高有对幼儿危险的小零件。让他在桌上或自己的空间搭远离妹妹。", actionHint: "肯定安全意识并建议", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. I'll take it. Can you gift wrap it?",
            textZh: "了解了。我要了。能帮我包装成礼物吗？",
          },
          {
            speaker: "them",
            role: "玩具店店员",
            textEn: "We have dinosaur-themed wrapping paper — how perfect is that! Gift wrapping is $3. I'll add a bow and a tag for the birthday boy!",
            textZh: "我们有恐龙主题的包装纸——简直太完美了！礼品包装3美元。我给小寿星加个蝴蝶结和签！",
            keyPhrases: [
              { en: "themed wrapping paper", zh: "主题包装纸" },
              { en: "birthday boy", zh: "小寿星" },
            ],
            alternativeExpressions: [
              { textEn: "Even better — we have dino wrapping paper! $3 for gift wrapping, and I'll throw on a bow and a birthday tag.", textZh: "更棒的是——我们有恐龙包装纸！包装3美元，加蝴蝶结和生日签。", actionHint: "推荐主题匹配包装", frequency: "common" },
              { textEn: "How's this for perfect — dinosaur wrapping paper for a dinosaur LEGO set! Just $3 and I'll make it look birthday-ready with a bow and tag.", textZh: "这不是太完美了吗——恐龙包装纸配恐龙乐高！3美元帮您弄成生日礼物的样子加蝴蝶结和签。", actionHint: "巧妙搭配增加惊喜", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "益智玩具与教育意义",
        titleEn: "Educational Toys & STEM",
        description: "选购有教育意义的STEM玩具和益智游戏",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I also want to get him something educational. Are there any STEM toys for his age?",
            textZh: "我还想给他买点有教育意义的。有适合他年龄的STEM玩具吗？",
          },
          {
            speaker: "them",
            role: "玩具店店员",
            textEn: "Absolutely! STEM toys are really popular right now. For a 6-year-old, this coding robot is fantastic — he can program simple commands using physical cards. No screen required. It teaches logic and sequencing.",
            textZh: "当然有！STEM玩具现在很受欢迎。6岁的孩子，这款编程机器人很棒——他可以用实体卡片编写简单指令。不需要屏幕。能教逻辑思维和排序。",
            keyPhrases: [
              { en: "STEM toys", zh: "STEM玩具" },
              { en: "coding robot", zh: "编程机器人" },
              { en: "sequencing", zh: "排序" },
              { en: "no screen required", zh: "不需要屏幕" },
            ],
            alternativeExpressions: [
              { textEn: "STEM toys are huge right now! This coding robot is perfect for 6-year-olds — he programs it with cards, no tablet needed. Teaches problem-solving and logical thinking.", textZh: "STEM玩具现在超火！这款编程机器人6岁孩子特别合适——用卡片编程不需要平板。教解决问题和逻辑思维。", actionHint: "推荐热门STEM玩具", frequency: "common" },
              { textEn: "We have some amazing STEM toys! Check out this coding robot — totally screen-free. He uses physical cards to give it commands. Great for building logic skills at his age.", textZh: "我们有很棒的STEM玩具！看这个编程机器人——完全不需要屏幕。用实体卡片下指令。他这个年龄培养逻辑能力特别好。", actionHint: "强调无屏幕教育", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "No screen is a big plus. His parents are trying to limit screen time. How much is the robot?",
            textZh: "不需要屏幕是大优点。他父母在控制屏幕时间。机器人多少钱？",
          },
          {
            speaker: "them",
            role: "玩具店店员",
            textEn: "It's $49. There are also expansion packs with more challenge cards for $15 each — great for when he masters the basic set. Another option is this science experiment kit for $29 — it has 20 safe experiments he can do at home.",
            textZh: "49美元。还有扩展包，更多挑战卡片每套15美元——基础的玩会了可以升级。另一个选择是这套科学实验套装29美元——有20个在家能做的安全实验。",
            keyPhrases: [
              { en: "expansion packs", zh: "扩展包" },
              { en: "challenge cards", zh: "挑战卡片" },
              { en: "science experiment kit", zh: "科学实验套装" },
              { en: "safe experiments", zh: "安全实验" },
            ],
            alternativeExpressions: [
              { textEn: "$49 for the robot. When he's ready for more, there are $15 expansion packs with harder challenges. Or for hands-on science, this $29 experiment kit has 20 projects.", textZh: "机器人49美元。准备好升级时有15美元的扩展包增加难度。或者动手科学方面这套29美元实验套装有20个项目。", actionHint: "介绍价格和升级选项", frequency: "common" },
              { textEn: "The robot is $49, and it grows with him — $15 expansion packs add new challenges. Or if he's more into hands-on science, this experiment kit is $29 with 20 kid-safe projects.", textZh: "机器人49美元可以跟着他成长——15美元扩展包增加新挑战。如果更喜欢动手科学这套实验套装29美元有20个安全项目。", actionHint: "强调成长性和安全性", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The science kit sounds fun too. What kind of experiments are in it?",
            textZh: "科学套装听起来也很有趣。有什么实验？",
          },
          {
            speaker: "them",
            role: "玩具店店员",
            textEn: "Things like making a mini volcano, growing crystals, building a simple circuit, and creating slime. Everything is non-toxic and the instructions are very clear with pictures. A parent should supervise the first few experiments.",
            textZh: "比如做迷你火山、种水晶、搭简单电路和做史莱姆。所有材料都是无毒的，说明书配有清晰的图片。头几个实验建议大人陪同。",
            keyPhrases: [
              { en: "volcano", zh: "火山" },
              { en: "growing crystals", zh: "种水晶" },
              { en: "circuit", zh: "电路" },
              { en: "non-toxic", zh: "无毒的" },
              { en: "supervise", zh: "陪同/监督" },
            ],
            alternativeExpressions: [
              { textEn: "Cool stuff like volcanoes, crystal growing, basic circuits, and slime-making. All safe and non-toxic. Instructions have pictures so kids can follow along. Just help out with the first few.", textZh: "超酷的东西比如火山、种水晶、基础电路和做史莱姆。全部安全无毒。说明书有图片孩子能跟着做。头几个帮一下就行。", actionHint: "描述实验内容", frequency: "common" },
              { textEn: "There's a volcano experiment, crystal growing, a simple circuit, slime — you name it! Everything's non-toxic and the step-by-step instructions are great. An adult should be there for the first couple.", textZh: "有火山实验、种水晶、简单电路、史莱姆——应有尽有！全部无毒分步说明很清楚。头几个实验大人最好在旁边。", actionHint: "列举内容并强调安全", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "He would love making slime! Are board games also good for this age? I want something the whole family can play.",
            textZh: "他肯定会爱做史莱姆！桌游适合这个年龄吗？我想要全家能一起玩的。",
          },
          {
            speaker: "them",
            role: "玩具店店员",
            textEn: "Board games are wonderful for family time! For a 6-year-old, I'd recommend this cooperative game — the family works together instead of against each other. It teaches teamwork and strategy. Games take about 20 minutes, which is perfect for his attention span.",
            textZh: "桌游做家庭活动太棒了！6岁的话，我推荐这款合作类游戏——全家一起协作而不是对抗。能教团队合作和策略。每局大约20分钟，正好适合他的注意力时间。",
            keyPhrases: [
              { en: "board games", zh: "桌游" },
              { en: "cooperative game", zh: "合作类游戏" },
              { en: "teamwork", zh: "团队合作" },
              { en: "attention span", zh: "注意力持续时间" },
            ],
            alternativeExpressions: [
              { textEn: "Board games are perfect for family night! Try this co-op game where everyone works together — no losers, just teamwork. About 20 minutes a round, great for a 6-year-old's focus.", textZh: "桌游是家庭之夜的完美选择！试试这款合作游戏大家一起赢——没有输家只有团队合作。每局约20分钟很适合6岁孩子的注意力。", actionHint: "推荐合作类桌游", frequency: "common" },
              { textEn: "For the whole family, co-op games are amazing. Everyone works as a team instead of competing. This one teaches strategy and takes about 20 minutes — just right for young kids.", textZh: "全家一起玩的话合作类游戏太棒了。大家一起当队友不是对手。这个教策略每局约20分钟——小孩子刚刚好。", actionHint: "强调无竞争合作模式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a great concept. I'll get the dinosaur LEGO set and the science kit. That should keep him busy for a while!",
            textZh: "好概念。我买恐龙乐高和科学套装。应该能让他玩好一阵子！",
          },
          {
            speaker: "them",
            role: "玩具店店员",
            textEn: "Great combo! Those two together are $68 before tax. He's going to have an amazing birthday. If he ends up loving the science kit, we do monthly science subscription boxes too — $24.99 a month with a new set of experiments each time!",
            textZh: "好组合！两个加起来税前68美元。他的生日会超棒的。如果他喜欢科学套装，我们还有月度科学订阅盒——每月24.99美元，每次一套新实验！",
            keyPhrases: [
              { en: "subscription box", zh: "订阅盒" },
              { en: "monthly", zh: "每月的" },
            ],
            alternativeExpressions: [
              { textEn: "Those two make a killer birthday gift — $68 before tax. And if he gets hooked on the science kit, we have monthly subscription boxes at $24.99 with fresh experiments every time.", textZh: "这两个做生日礼物太棒了——税前68美元。如果他迷上了科学套装我们还有月度订阅盒24.99每次新实验。", actionHint: "推荐后续订阅服务", frequency: "common" },
              { textEn: "LEGO plus science — he'll have the best birthday! That's $68 total. And here's a fun idea: if he loves the experiments, we send a new science box every month for $24.99.", textZh: "乐高加科学——他的生日太棒了！一共68美元。还有个有趣的：如果他爱做实验我们每月寄一盒新的24.99。", actionHint: "介绍延续快乐的订阅", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },
];
