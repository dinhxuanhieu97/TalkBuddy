import type { PresetScene } from "../scene-types";

// ============================================================
// 日常生活扩展场景 — Daily Life Extended Scenes
// 覆盖：干洗、裁缝、修鞋、锁匠、水管工、电工、图书馆、公园、
//       回收、垃圾、水电费、网络、电话、银行、公证、DMV、
//       选民登记、陪审团、看房、签约、室友、车库拍卖、院子、
//       铲雪、空调、除虫、房屋保险、邻里守望、街区派对、
//       志愿者、捐赠、拼车、日托
// ============================================================

export const DAILY_LIFE_SCENES_EXT: PresetScene[] = [
  // ==================== 干洗店 ====================
  {
    id: "daily-life-dry-cleaner",
    category: "daily-life",
    titleZh: "干洗店送洗",
    titleEn: "Dry Cleaner Drop-off",
    description: "将衣物送到干洗店，了解面料处理、取件时间和特殊要求",
    otherRole: "干洗店店员",
    otherRoleIcon: "👔",
    flows: [
      {
        id: "basic-drop-off",
        titleZh: "基本送洗",
        titleEn: "Basic Drop-off",
        description: "送几件衣服去干洗，了解价格和取件时间",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to get these dry cleaned.",
            textZh: "你好，我想把这些送干洗。",
            casualVersion: "Hey, can I get these dry cleaned?",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Sure, let me see what you've got. A blazer and two dress shirts?",
            textZh: "好的，让我看看。一件西装外套和两件衬衫？",
            keyPhrases: [
              { en: "blazer", zh: "西装外套" },
              { en: "dress shirts", zh: "正装衬衫" },
            ],
            alternativeExpressions: [
              { textEn: "Alright, let's see what we have here. One blazer and two dress shirts, correct?", textZh: "好，让我看看都有什么。一件西装外套和两件衬衫，对吗？", actionHint: "确认清单式问法", frequency: "common" },
              { textEn: "Let me take a look. So that's a blazer and two shirts — anything else?", textZh: "我看看。一件外套加两件衬衫——还有别的吗？", actionHint: "顺便追问有无遗漏", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, and please be careful with the blazer — it's silk.",
            textZh: "是的，外套请小心处理——是丝绸的。",
            culturalNote: "提前告知面料材质很重要，不同面料需要不同处理方式。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "No problem, we'll handle it with care. The blazer will be $15 and each shirt is $5. That's $25 total.",
            textZh: "没问题，我们会小心处理的。外套15美元，衬衫每件5美元，一共25美元。",
            keyPhrases: [
              { en: "handle it with care", zh: "小心处理" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely, we'll take good care of it. That comes to $25 — $15 for the blazer and $5 per shirt.", textZh: "当然，我们会好好处理的。一共25美元——外套15，衬衫每件5。", actionHint: "换序报价", frequency: "common" },
              { textEn: "Don't worry, the silk will be in good hands. So it's $15 plus $5 each for the shirts — $25 altogether.", textZh: "别担心，丝绸衣物交给我们没问题。外套15加衬衫每件5，一共25美元。", actionHint: "先安抚再报价", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "When can I pick them up?",
            textZh: "什么时候能取？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "They'll be ready by Thursday. We'll send you a text when they're done.",
            textZh: "周四就好了。洗好后我们会发短信通知您。",
            keyPhrases: [
              { en: "send you a text", zh: "发短信通知" },
            ],
            alternativeExpressions: [
              { textEn: "You can pick them up Thursday. We'll text you once everything is done.", textZh: "周四可以来取。都弄好了会发短信通知你。", actionHint: "更直接的说法", frequency: "common" },
              { textEn: "Should be done by Thursday at the latest. We'll give you a heads-up by text.", textZh: "最迟周四好。会发短信提醒你。", actionHint: "用heads-up替代", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do you have hangers or will they be folded?",
            textZh: "会挂衣架还是折叠？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "The blazer will be on a hanger with a garment bag. Shirts can be hung or folded — your preference.",
            textZh: "外套会挂在衣架上套防尘袋。衬衫可以挂也可以折——您选。",
            keyPhrases: [
              { en: "garment bag", zh: "防尘袋" },
              { en: "your preference", zh: "您的选择" },
            ],
            alternativeExpressions: [
              { textEn: "We'll put the blazer on a hanger in a garment bag. For the shirts, would you like them hung or folded?", textZh: "外套会挂好套防尘袋。衬衫你想挂着还是叠好？", actionHint: "主动询问偏好", frequency: "common" },
              { textEn: "The blazer comes with a hanger and protective bag. Shirts — your call, hung or folded.", textZh: "外套配衣架和保护袋。衬衫你定，挂着还是折叠。", actionHint: "简洁随意的语气", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Hung, please. Thanks!",
            textZh: "挂起来吧，谢谢！",
          },
        ],
      },
      {
        id: "special-stain",
        titleZh: "处理特殊污渍",
        titleEn: "Special Stain Treatment",
        description: "衣物上有顽固污渍，需要特殊处理",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I have a stain on this coat that I can't get out. Can you help?",
            textZh: "这件外套上有个洗不掉的污渍，你们能处理吗？",
            casualVersion: "There's a stain on this coat I can't get rid of. Any chance you can fix it?",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Let me take a look. Do you know what caused the stain?",
            textZh: "让我看看。您知道是什么弄上的吗？",
            keyPhrases: [
              { en: "what caused the stain", zh: "什么弄上的污渍" },
            ],
            alternativeExpressions: [
              { textEn: "Let me check it out. Any idea what the stain is from?", textZh: "我看看。知道污渍是什么弄的吗？", actionHint: "更口语化", frequency: "common" },
              { textEn: "Hmm, let me see. Do you remember what made this stain?", textZh: "嗯，让我瞧瞧。记得是什么弄上的吗？", actionHint: "带思考语气", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I think it's red wine. It happened a couple of days ago.",
            textZh: "应该是红酒。大概两天前弄上的。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Red wine can be tricky, especially after it's set. We'll do our best, but I can't guarantee it'll come out completely. There's an extra $8 charge for stain treatment.",
            textZh: "红酒渍比较难处理，尤其是已经干了的。我们会尽力，但不能保证完全去掉。去渍需要额外收8美元。",
            keyPhrases: [
              { en: "tricky", zh: "难处理的" },
              { en: "set", zh: "（污渍）定型/干固" },
              { en: "stain treatment", zh: "去渍处理" },
            ],
            alternativeExpressions: [
              { textEn: "Wine stains are tough once they've dried. We'll give it our best shot, but no promises it'll disappear completely. There's an $8 stain treatment fee.", textZh: "酒渍干了之后很难弄。我们尽全力，但不保证完全消失。去渍收8美元。", actionHint: "更直白的表达", frequency: "common" },
              { textEn: "Red wine is one of the harder stains to remove, especially after a couple days. We charge $8 extra for the treatment, and we'll do everything we can.", textZh: "红酒是最难去的污渍之一，尤其过了几天。去渍额外8美元，我们会尽全力。", actionHint: "强调难度再报价", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's fine. Please try. How long will it take?",
            textZh: "没关系，请试试。需要多久？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Stain treatment takes a bit longer — about three to four business days. If the first round doesn't work, we may need to do a second pass at no extra cost.",
            textZh: "去渍需要久一点——大概三到四个工作日。如果第一次没去掉，我们会免费再处理一次。",
            keyPhrases: [
              { en: "second pass", zh: "再处理一次" },
              { en: "at no extra cost", zh: "不额外收费" },
            ],
            alternativeExpressions: [
              { textEn: "It'll take three to four business days for stain treatment. If the first attempt doesn't get it all, we'll try again at no additional charge.", textZh: "去渍需要三到四个工作日。如果第一次没完全去掉，我们免费再做一次。", actionHint: "更清晰的结构", frequency: "common" },
              { textEn: "Give us about three to four days. We sometimes need a second round for tough stains — no extra charge for that.", textZh: "给我们三到四天。顽固污渍有时需要第二轮处理——不额外收费。", actionHint: "先说时间再说保障", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds good. I appreciate you being upfront about it.",
            textZh: "好的，谢谢你提前说明。",
            culturalNote: "\'being upfront\' 表示对方坦诚告知，是对服务态度的肯定。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Of course. Here's your receipt. We'll call you when it's ready.",
            textZh: "应该的。这是您的收据。好了会打电话通知您。",
            keyPhrases: [
              { en: "receipt", zh: "收据" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing. Here's your ticket. We'll give you a call as soon as it's ready.", textZh: "没问题。这是你的单子。好了马上打电话给你。", actionHint: "用ticket替代receipt", frequency: "common" },
              { textEn: "You bet. Take this receipt, and we'll reach out when it's done.", textZh: "当然。拿好收据，弄好了会联系你。", actionHint: "用reach out表示联系", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 裁缝改衣 ====================
  {
    id: "daily-life-tailor-alter",
    category: "daily-life",
    titleZh: "裁缝改衣",
    titleEn: "Tailor Alterations",
    description: "找裁缝修改衣服尺寸、缝补或调整款式",
    otherRole: "裁缝",
    otherRoleIcon: "🧵",
    flows: [
      {
        id: "basic-hem",
        titleZh: "基本改长短",
        titleEn: "Basic Hemming",
        description: "裤子或裙子太长，需要改短",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need these pants hemmed. They're too long.",
            textZh: "你好，这条裤子需要改短，太长了。",
            casualVersion: "Hey, these pants are way too long. Can you shorten them?",
          },
          {
            speaker: "them",
            role: "裁缝",
            textEn: "Sure, step up here and I'll pin them for you. How short do you want them?",
            textZh: "好的，站到这里，我帮你别针标记。你想改多短？",
            keyPhrases: [
              { en: "pin them", zh: "用别针标记" },
              { en: "hemmed", zh: "改边/改短" },
            ],
            alternativeExpressions: [
              { textEn: "Of course. Hop up on the platform and I'll mark where to cut. How much shorter do you need them?", textZh: "好的，站到台子上我标记裁剪位置。要改短多少？", actionHint: "用platform和mark替换", frequency: "common" },
              { textEn: "No problem. Stand right here so I can measure. Where do you want the hem to hit?", textZh: "没问题。站到这里我量一下。裤脚到哪个位置？", actionHint: "用measure和hem to hit", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Just above the ankle, with no break.",
            textZh: "到脚踝上方，不要堆在鞋面上。",
            culturalNote: "\'no break\' 是裤脚术语，表示裤脚刚好不碰到鞋面，比较修身的效果。",
          },
          {
            speaker: "them",
            role: "裁缝",
            textEn: "Got it. Do you want a regular hem or a blind hem?",
            textZh: "明白了。要普通锁边还是暗缝？",
            keyPhrases: [
              { en: "regular hem", zh: "普通锁边" },
              { en: "blind hem", zh: "暗缝（外面看不到线迹）" },
            ],
            alternativeExpressions: [
              { textEn: "I see. Would you prefer a standard hem or an invisible stitch?", textZh: "明白了。你要普通锁边还是隐形缝线？", actionHint: "用invisible stitch替代", frequency: "common" },
              { textEn: "Noted. There are two options — a visible hem or a blind stitch where you can't see the thread. Which one?", textZh: "记下了。两种选择——可见锁边或看不到线迹的暗缝。哪种？", actionHint: "解释性说法", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Blind hem, please. How much is it?",
            textZh: "暗缝吧，多少钱？",
          },
          {
            speaker: "them",
            role: "裁缝",
            textEn: "It's $15 for a blind hem. I can have them ready by tomorrow afternoon.",
            textZh: "暗缝15美元。明天下午就能好。",
            keyPhrases: [
              { en: "have them ready by", zh: "在...之前做好" },
            ],
            alternativeExpressions: [
              { textEn: "A blind hem runs $15. They'll be ready tomorrow afternoon.", textZh: "暗缝15美元。明天下午就好。", actionHint: "更简洁", frequency: "common" },
              { textEn: "That'll be $15. I can get them done by tomorrow around 2 or 3.", textZh: "15美元。明天两三点左右能做好。", actionHint: "给更具体时间", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That works. Should I pay now or when I pick up?",
            textZh: "可以。现在付还是取的时候付？",
          },
          {
            speaker: "them",
            role: "裁缝",
            textEn: "Either way is fine. Most people pay at pick-up.",
            textZh: "都行。大多数人取的时候付。",
            keyPhrases: [
              { en: "at pick-up", zh: "取件时" },
            ],
            alternativeExpressions: [
              { textEn: "Totally up to you. Most customers settle up when they come back.", textZh: "都可以。大部分顾客来取的时候付。", actionHint: "用settle up替代pay", frequency: "common" },
              { textEn: "Doesn't matter to me. You can pay now or when you pick them up — whatever works.", textZh: "无所谓。现在付或取的时候付都行——怎么方便怎么来。", actionHint: "更随和的语气", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "complex-alteration",
        titleZh: "复杂改动",
        titleEn: "Complex Alteration",
        description: "需要改腰围、加放或调整肩宽等较复杂的修改",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I bought this suit online and it doesn't fit right. Can you alter it?",
            textZh: "我在网上买了这套西装，不太合身。能改吗？",
          },
          {
            speaker: "them",
            role: "裁缝",
            textEn: "Let me see. Put it on and I'll check the fit. The shoulders look a bit wide, and the jacket is long in the body.",
            textZh: "让我看看。穿上我检查一下。肩膀看着有点宽，衣身也偏长。",
            keyPhrases: [
              { en: "check the fit", zh: "检查合身度" },
              { en: "wide in the shoulders", zh: "肩膀偏宽" },
              { en: "long in the body", zh: "衣身偏长" },
            ],
            alternativeExpressions: [
              { textEn: "Go ahead and try it on. I'll take a look... Yeah, the shoulders are a touch too wide and the jacket could be shorter through the body.", textZh: "穿上试试。我看看……嗯，肩膀有点宽，衣身可以再短一些。", actionHint: "更自然的检查过程", frequency: "common" },
              { textEn: "Put it on for me. Hmm — I can see the shoulders need narrowing and the jacket length is a bit much.", textZh: "穿给我看看。嗯——肩膀需要收窄，衣身也偏长了。", actionHint: "更专业直接", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yeah, and the pants need to be taken in at the waist too.",
            textZh: "是的，裤子腰围也需要改小。",
            culturalNote: "\'taken in\' 表示改小，\'let out\' 表示改大。",
          },
          {
            speaker: "them",
            role: "裁缝",
            textEn: "I can take in the waist and shorten the jacket. But honestly, altering the shoulders is very expensive and risky. It might not be worth it.",
            textZh: "腰围改小和衣身改短都可以。但说实话，改肩膀非常贵而且有风险，可能不划算。",
            keyPhrases: [
              { en: "take in", zh: "改小" },
              { en: "not worth it", zh: "不划算" },
            ],
            alternativeExpressions: [
              { textEn: "The waist and jacket length are easy fixes. But I'll be honest — shoulder alterations are pricey and there's a risk of ruining the jacket. Probably not worth it.", textZh: "腰围和衣身长度好改。但坦白说——改肩膀很贵，有毁掉衣服的风险。可能不划算。", actionHint: "先说能做的再说风险", frequency: "common" },
              { textEn: "Taking in the waist? No problem. Shortening the body? Sure. But the shoulders — that's a major job, very costly, and risky. I wouldn't recommend it.", textZh: "改腰围？没问题。改衣身？可以。但肩膀——那是大工程，很贵而且有风险。我不建议。", actionHint: "逐项列举更清晰", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much would the waist and jacket length cost?",
            textZh: "改腰围和衣身长度多少钱？",
          },
          {
            speaker: "them",
            role: "裁缝",
            textEn: "Taking in the waist is $20, and shortening the jacket body is $35. So $55 total. I'd need about a week.",
            textZh: "改腰围20美元，改衣身35美元，一共55美元。大概需要一周。",
            keyPhrases: [
              { en: "shortening", zh: "改短" },
            ],
            alternativeExpressions: [
              { textEn: "The waist alteration is $20 and the jacket shortening is $35 — $55 all together. It'll take about a week.", textZh: "改腰围20美元，改衣身35美元——总共55美元。大约需要一周。", actionHint: "相同信息换表述", frequency: "common" },
              { textEn: "That'll run you $55 — twenty for the waist, thirty-five for the length. Give me about a week to get it done.", textZh: "一共55美元——腰围20，长度35。给我大约一周时间。", actionHint: "先说总价再分项", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, let's skip the shoulders and just do the waist and length.",
            textZh: "好，肩膀就不改了，只改腰围和长度。",
          },
          {
            speaker: "them",
            role: "裁缝",
            textEn: "Good call. I'll mark everything up now. Come back next Friday for a fitting, and if it looks good, you can take it home.",
            textZh: "好主意。我现在就标记好。下周五来试穿，合适的话就可以带走了。",
            keyPhrases: [
              { en: "mark everything up", zh: "做好标记" },
              { en: "fitting", zh: "试穿" },
            ],
            alternativeExpressions: [
              { textEn: "Smart move. Let me pin everything now. Swing by next Friday to try it on — if it fits, you take it home.", textZh: "明智的选择。我现在就别针标记好。下周五来试穿——合适就带走。", actionHint: "用swing by替代come back", frequency: "common" },
              { textEn: "That's the right call. I'll get it all marked today. Come in Friday for a final fitting and you should be good to go.", textZh: "这个决定没错。今天我全部标好。周五来最终试穿，应该就可以拿走了。", actionHint: "用final fitting强调", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds good. I'll see you Friday.",
            textZh: "好的，周五见。",
          },
        ],
      },
    ],
  },

  // ==================== 修鞋 ====================
  {
    id: "daily-life-shoe-repair",
    category: "daily-life",
    titleZh: "修鞋店",
    titleEn: "Shoe Repair Shop",
    description: "去修鞋店修复鞋底、更换鞋跟或翻新皮鞋",
    otherRole: "修鞋匠",
    otherRoleIcon: "👞",
    flows: [
      {
        id: "basic-repair",
        titleZh: "基本修鞋",
        titleEn: "Basic Shoe Repair",
        description: "鞋底脱胶或鞋跟磨损，需要修复",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, the sole on my shoe is coming apart. Can you fix it?",
            textZh: "你好，我鞋底开胶了，能修吗？",
            casualVersion: "Hey, my shoe sole is falling off. Can you glue it back?",
          },
          {
            speaker: "them",
            role: "修鞋匠",
            textEn: "Let me take a look. Yeah, the sole just needs to be reglued. That's an easy fix.",
            textZh: "让我看看。可以，鞋底重新粘一下就行，很简单。",
            keyPhrases: [
              { en: "reglued", zh: "重新粘合" },
              { en: "easy fix", zh: "简单修复" },
            ],
            alternativeExpressions: [
              { textEn: "Let me check... Yep, just needs some new glue on the sole. Simple repair.", textZh: "我看看……嗯，鞋底重新粘一下就行。简单的修复。", actionHint: "更简洁口语", frequency: "common" },
              { textEn: "Ah, I see the problem. The sole is coming apart — I just need to bond it back together. No big deal.", textZh: "啊，我看到问题了。鞋底开了——重新粘合就行。小事。", actionHint: "描述问题再给方案", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much would that cost?",
            textZh: "多少钱？",
          },
          {
            speaker: "them",
            role: "修鞋匠",
            textEn: "For regluing both shoes, it's $12. I can have them done in about an hour if you want to wait.",
            textZh: "两只鞋重新粘合12美元。如果你愿意等，大概一小时就好。",
            keyPhrases: [
              { en: "have them done", zh: "做好" },
            ],
            alternativeExpressions: [
              { textEn: "It's $12 for both shoes. If you can hang around for an hour, I'll have them ready.", textZh: "两只鞋12美元。如果你能等一个小时，就能做好。", actionHint: "用hang around替代wait", frequency: "common" },
              { textEn: "Twelve bucks for the pair. Should take me about an hour — you're welcome to wait or come back.", textZh: "一双12美元。大概一小时——可以等也可以回头来取。", actionHint: "给出两个选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "An hour? Sure, I'll wait. Is there a coffee shop nearby?",
            textZh: "一小时？好，我等。附近有咖啡店吗？",
          },
          {
            speaker: "them",
            role: "修鞋匠",
            textEn: "There's one right around the corner. I'll have these ready when you get back.",
            textZh: "拐角就有一家。你回来的时候鞋子就好了。",
            keyPhrases: [
              { en: "right around the corner", zh: "就在拐角处" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, just around the block. Go grab a coffee — I'll have everything done by the time you're back.", textZh: "就在附近。去喝杯咖啡——你回来就好了。", actionHint: "更热情的建议", frequency: "common" },
              { textEn: "There's a café just down the street. Your shoes will be good to go when you return.", textZh: "沿街走有个咖啡馆。你回来时鞋子就修好了。", actionHint: "用good to go表示完成", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. I'll be back in a bit.",
            textZh: "好的，一会儿回来。",
          },
          {
            speaker: "them",
            role: "修鞋匠",
            textEn: "See you soon!",
            textZh: "一会儿见！",
            keyPhrases: [
              { en: "see you soon", zh: "一会儿见" },
            ],
            alternativeExpressions: [
              { textEn: "See you in a bit!", textZh: "一会儿见！", actionHint: "更随意的告别", frequency: "common" },
              { textEn: "Take your time — I'll be right here!", textZh: "慢慢来——我就在这儿！", actionHint: "表示不着急", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "heel-replacement",
        titleZh: "换鞋跟",
        titleEn: "Heel Replacement",
        description: "高跟鞋鞋跟磨损或断裂，需要更换",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I broke the heel on my favorite boots. Can you replace it?",
            textZh: "我最喜欢的靴子鞋跟断了，能换吗？",
          },
          {
            speaker: "them",
            role: "修鞋匠",
            textEn: "Let me see... The heel cap snapped off. I can replace it, but I'll need to match the color and style. Do you want leather or rubber?",
            textZh: "让我看看……鞋跟帽断了。可以换，但需要配色配款式。你要皮质的还是橡胶的？",
            keyPhrases: [
              { en: "heel cap", zh: "鞋跟帽/跟头" },
              { en: "snapped off", zh: "折断了" },
              { en: "match the color", zh: "配色" },
            ],
            alternativeExpressions: [
              { textEn: "Ah, I see — the heel tip broke off. I can definitely replace it. Do you have a preference for leather or rubber?", textZh: "啊，看到了——鞋跟头断了。肯定能换。你要皮的还是橡胶的？", actionHint: "用heel tip替代heel cap", frequency: "common" },
              { textEn: "The heel cap is snapped clean off. No worries, I can put a new one on. Would you like rubber or leather for the replacement?", textZh: "鞋跟帽彻底断了。没问题，我可以装个新的。换的要橡胶还是皮质？", actionHint: "先安抚再询问", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Rubber would be fine. It's more durable, right?",
            textZh: "橡胶的就行，更耐用对吧？",
          },
          {
            speaker: "them",
            role: "修鞋匠",
            textEn: "Yes, rubber lasts longer and gives better grip. The replacement will be $25 per heel. I'd recommend doing both so they wear evenly.",
            textZh: "是的，橡胶更耐用防滑。换一个跟25美元。建议两边都换，磨损均匀。",
            keyPhrases: [
              { en: "grip", zh: "防滑/抓地力" },
              { en: "wear evenly", zh: "磨损均匀" },
            ],
            alternativeExpressions: [
              { textEn: "Rubber is the way to go — more durable and better traction. It's $25 each. I'd suggest doing both heels so they wear the same.", textZh: "橡胶是好选择——更耐用防滑。每个25美元。建议两边都换，磨损一致。", actionHint: "用traction替代grip", frequency: "common" },
              { textEn: "Good choice. Rubber holds up better and won't slip. Twenty-five per heel, and I'd recommend replacing both to keep them even.", textZh: "好选择。橡胶更耐磨不打滑。每个25美元，建议两个都换保持均匀。", actionHint: "肯定选择再报价", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good idea. Let's do both. When will they be ready?",
            textZh: "好主意，两边都换吧。什么时候好？",
          },
          {
            speaker: "them",
            role: "修鞋匠",
            textEn: "Come back in two days. I need to order the right size heel from my supplier.",
            textZh: "两天后来取。我需要向供应商订购合适尺寸的鞋跟。",
            keyPhrases: [
              { en: "supplier", zh: "供应商" },
            ],
            alternativeExpressions: [
              { textEn: "Give me two days. I have to order the correct heel size from my supplier first.", textZh: "给我两天。我得先从供应商那里订合适尺寸的鞋跟。", actionHint: "更简洁", frequency: "common" },
              { textEn: "It'll be a couple of days — I need to get the right size from my supplier. I'll call you when they're ready.", textZh: "大概两天——需要从供应商那订对的尺寸。好了给你打电话。", actionHint: "主动说会通知", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay. Should I leave a deposit?",
            textZh: "好的。需要付定金吗？",
            culturalNote: "在美国修鞋店通常不需要付定金，但主动问是礼貌的做法。",
          },
          {
            speaker: "them",
            role: "修鞋匠",
            textEn: "No deposit needed. Just pay when you pick them up. I'll write you a ticket.",
            textZh: "不用定金。取的时候付就行。我给你写个单子。",
            keyPhrases: [
              { en: "deposit", zh: "定金/押金" },
              { en: "ticket", zh: "取件单" },
            ],
            alternativeExpressions: [
              { textEn: "No need for a deposit. Pay when you come get them. Let me write up a claim ticket for you.", textZh: "不用付定金。来取的时候付就行。我给你开张取件单。", actionHint: "用claim ticket替代", frequency: "common" },
              { textEn: "Don't worry about paying now — just settle up at pick-up. Here's your ticket so we can match them up.", textZh: "现在不用付——取的时候结就行。这是取件单，方便核对。", actionHint: "解释ticket的作用", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 锁匠 ====================
  {
    id: "daily-life-locksmith-emergency",
    category: "daily-life",
    titleZh: "找锁匠",
    titleEn: "Calling a Locksmith",
    description: "钥匙锁在屋里或丢失，联系锁匠开锁或换锁",
    otherRole: "锁匠",
    otherRoleIcon: "🔑",
    flows: [
      {
        id: "locked-out",
        titleZh: "被锁在门外",
        titleEn: "Locked Out",
        description: "钥匙忘在家里，需要叫锁匠开门",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I locked myself out of my apartment. Can you send someone over?",
            textZh: "你好，我把自己锁在公寓外面了。能派人来吗？",
            casualVersion: "Hey, I'm locked out. Can someone come help?",
          },
          {
            speaker: "them",
            role: "锁匠调度",
            textEn: "Sure, what's your address? And do you know what type of lock you have — is it a deadbolt or a regular knob lock?",
            textZh: "可以，你的地址是？你知道锁的类型吗——是防盗锁还是普通门把锁？",
            keyPhrases: [
              { en: "deadbolt", zh: "防盗锁/插销锁" },
              { en: "knob lock", zh: "门把锁" },
            ],
            alternativeExpressions: [
              { textEn: "Of course. What's your location? Also, can you tell me if it's a deadbolt or a standard knob lock?", textZh: "当然。你的地址是？另外能告诉我是防盗锁还是普通门把锁吗？", actionHint: "用location替代address", frequency: "common" },
              { textEn: "We can help. Where are you located? And do you happen to know whether your lock is a deadbolt or a regular lock?", textZh: "我们能帮忙。你在哪里？你知道锁是防盗锁还是普通锁吗？", actionHint: "更礼貌的问法", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm at 456 Oak Street, Apartment 3B. It's a deadbolt.",
            textZh: "我在橡树街456号，3B公寓。是防盗锁。",
          },
          {
            speaker: "them",
            role: "锁匠调度",
            textEn: "Okay, I can have someone there in about 30 minutes. The service call is $75, and if we need to pick the lock, it's an additional $50 to $100 depending on the lock type.",
            textZh: "好的，大约30分钟到。上门费75美元，如果需要撬锁，根据锁的类型额外收50到100美元。",
            keyPhrases: [
              { en: "service call", zh: "上门服务费" },
              { en: "pick the lock", zh: "撬锁/开锁" },
            ],
            alternativeExpressions: [
              { textEn: "Got it. We can have a locksmith to you within 30 minutes. The call-out fee is $75, and lock picking runs an extra $50 to $100 depending on the lock.", textZh: "收到。30分钟内锁匠就到。上门费75美元，开锁根据锁型额外50到100美元。", actionHint: "用call-out fee替代service call", frequency: "common" },
              { textEn: "Alright, someone can be there in half an hour. Just so you know, it's $75 for the visit, plus $50 to $100 for the lock picking itself.", textZh: "好的，半小时内有人到。跟你说一下，上门75美元，开锁本身50到100美元。", actionHint: "用half an hour口语化", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's fine. I'll wait outside the building. How will I know it's your technician?",
            textZh: "可以。我在楼外等。怎么确认来的是你们的技师？",
          },
          {
            speaker: "them",
            role: "锁匠调度",
            textEn: "He'll be in a white van with our company name on the side. His name is Mike, and he'll show you his ID badge.",
            textZh: "他开白色面包车，车身有我们公司名字。他叫Mike，会出示工牌。",
            keyPhrases: [
              { en: "ID badge", zh: "工牌" },
            ],
            culturalNote: "在美国叫上门服务时，确认身份很重要，正规公司技师都会有工牌。",
            alternativeExpressions: [
              { textEn: "Our tech Mike will arrive in a branded white van. He'll have his company ID on him for verification.", textZh: "我们的技师Mike开有公司标志的白色面包车来。他会带公司工牌以便核实。", actionHint: "用branded描述车辆", frequency: "common" },
              { textEn: "Look for a white van with our logo — that'll be Mike. He'll show you his badge when he gets there.", textZh: "注意看有我们标志的白色面包车——那就是Mike。到了会出示工牌。", actionHint: "用logo替代company name", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. Do you accept credit cards or is it cash only?",
            textZh: "好的。你们收信用卡还是只收现金？",
          },
          {
            speaker: "them",
            role: "锁匠调度",
            textEn: "We accept cash, credit, and debit cards. The technician has a card reader with him.",
            textZh: "现金、信用卡、借记卡都收。技师随身带刷卡机。",
            keyPhrases: [
              { en: "card reader", zh: "刷卡机" },
              { en: "debit cards", zh: "借记卡" },
            ],
            alternativeExpressions: [
              { textEn: "We take all forms of payment — cash, credit, or debit. Mike carries a portable card reader.", textZh: "各种付款方式都收——现金、信用卡或借记卡。Mike随身带便携刷卡机。", actionHint: "用all forms of payment", frequency: "common" },
              { textEn: "Cash or card — either works. The tech has a mobile card reader, so no worries there.", textZh: "现金或刷卡都行。技师带着移动刷卡机，不用担心。", actionHint: "更简洁随意", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. I'll be waiting. Thank you.",
            textZh: "好的，我等着。谢谢。",
          },
        ],
      },
      {
        id: "rekey-lock",
        titleZh: "换锁芯",
        titleEn: "Rekeying a Lock",
        description: "搬新家后需要更换锁芯确保安全",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I just moved into a new place and I'd like to get the locks rekeyed. How much would that cost?",
            textZh: "我刚搬进新家，想换一下锁芯。大概多少钱？",
            culturalNote: "在美国搬新家后换锁芯是很常见的安全措施，因为不知道前租户是否复制了钥匙。",
          },
          {
            speaker: "them",
            role: "锁匠",
            textEn: "Rekeying is usually $15 to $25 per lock. How many locks do you need done?",
            textZh: "换锁芯一般每把15到25美元。你需要换几把？",
            keyPhrases: [
              { en: "rekeying", zh: "换锁芯" },
              { en: "per lock", zh: "每把锁" },
            ],
            alternativeExpressions: [
              { textEn: "It typically runs $15 to $25 per lock for rekeying. How many do you need changed?", textZh: "换锁芯一般每把15到25美元。你需要换几把？", actionHint: "用runs替代is", frequency: "common" },
              { textEn: "Rekeying costs between $15 and $25 a lock. How many locks are we talking about?", textZh: "换锁芯每把15到25美元。一共几把锁？", actionHint: "用how many are we talking about", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Three — the front door, back door, and the garage entrance. Can you make them all use the same key?",
            textZh: "三把——前门、后门和车库入口。能让它们用同一把钥匙吗？",
          },
          {
            speaker: "them",
            role: "锁匠",
            textEn: "Absolutely, that's called keying them alike. I can do all three for $60 and give you four copies of the new key.",
            textZh: "当然可以，这叫统一钥匙。三把锁60美元，给你四把新钥匙副本。",
            keyPhrases: [
              { en: "keying them alike", zh: "统一钥匙（多把锁用同一钥匙）" },
              { en: "copies", zh: "副本/复制钥匙" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, we call that keying alike — all locks use one key. For three locks, it's $60, and I'll cut four copies of the new key.", textZh: "当然，这叫统一钥匙——所有锁用同一把。三把锁60美元，我给你配四把新钥匙。", actionHint: "先解释术语", frequency: "common" },
              { textEn: "No problem, I can set them all to the same key. Three locks for $60 total, plus you get four key copies.", textZh: "没问题，可以设成同一把钥匙。三把锁总共60美元，附送四把钥匙副本。", actionHint: "更简洁直接", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds great. Should I also consider upgrading to smart locks?",
            textZh: "听起来不错。我是不是也该考虑升级成智能锁？",
          },
          {
            speaker: "them",
            role: "锁匠",
            textEn: "Smart locks are convenient — you can use a code or your phone. But they run about $150 to $300 per lock, plus installation. For a rental, rekeying is usually enough.",
            textZh: "智能锁很方便——可以用密码或手机开。但每把大约150到300美元，加上安装费。租房的话换锁芯通常就够了。",
            keyPhrases: [
              { en: "smart locks", zh: "智能锁" },
              { en: "installation", zh: "安装费" },
              { en: "rental", zh: "租房" },
            ],
            alternativeExpressions: [
              { textEn: "Smart locks are nice — keyless entry with a code or app. But they cost $150 to $300 each plus installation. For a rental, rekeying is usually the better move.", textZh: "智能锁不错——密码或App无钥匙进入。但每把150到300美元加安装费。租房的话换锁芯通常更合适。", actionHint: "用keyless entry描述", frequency: "common" },
              { textEn: "They're great for convenience, but you're looking at $150 to $300 per lock plus labor. If you're renting, I'd say rekeying is plenty.", textZh: "方便是很方便，但每把150到300美元加人工。如果是租房，换锁芯就够了。", actionHint: "先肯定再给建议", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "You're right, I'll just go with the rekeying for now. When can you come?",
            textZh: "你说得对，先换锁芯吧。你什么时候能来？",
          },
          {
            speaker: "them",
            role: "锁匠",
            textEn: "I have an opening tomorrow morning between 9 and 11. Does that window work for you?",
            textZh: "明天上午9点到11点之间有空。这个时间段可以吗？",
            keyPhrases: [
              { en: "opening", zh: "空闲时间" },
              { en: "window", zh: "时间段" },
            ],
            alternativeExpressions: [
              { textEn: "I'm free tomorrow morning, 9 to 11. Does that time frame work for you?", textZh: "明天上午9到11我有空。这个时间段可以吗？", actionHint: "用time frame替代window", frequency: "common" },
              { textEn: "How about tomorrow morning? I can be there between 9 and 11. Would that suit you?", textZh: "明天上午怎么样？9到11之间可以到。方便吗？", actionHint: "更礼貌的提议", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That works perfectly. See you then.",
            textZh: "没问题，到时候见。",
          },
        ],
      },
    ],
  },

  // ==================== 水管工 ====================
  {
    id: "daily-life-plumber",
    category: "daily-life",
    titleZh: "叫水管工",
    titleEn: "Calling a Plumber",
    description: "水管漏水、下水道堵塞等问题，联系水管工上门维修",
    otherRole: "水管工",
    otherRoleIcon: "🔧",
    flows: [
      {
        id: "clogged-drain",
        titleZh: "下水道堵了",
        titleEn: "Clogged Drain",
        description: "厨房或浴室下水道堵塞，需要疏通",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, my kitchen sink is completely clogged. Water won't drain at all.",
            textZh: "你好，我厨房水槽完全堵了，水一点都排不下去。",
            casualVersion: "Hey, my sink is totally backed up. Nothing's going down.",
          },
          {
            speaker: "them",
            role: "水管工调度",
            textEn: "Sorry to hear that. Have you tried using a plunger or any drain cleaner?",
            textZh: "很遗憾。你试过用皮搋子或通下水道的清洁剂吗？",
            keyPhrases: [
              { en: "plunger", zh: "皮搋子/吸盘" },
              { en: "drain cleaner", zh: "管道疏通剂" },
            ],
            alternativeExpressions: [
              { textEn: "That's no fun. Before we send someone out, have you tried a plunger or any liquid drain cleaner?", textZh: "那可不好受。派人去之前，你试过皮搋子或液态管道疏通剂吗？", actionHint: "先同情再问", frequency: "common" },
              { textEn: "Oh no. Have you attempted any DIY fixes like a plunger or store-bought drain cleaner?", textZh: "天哪。你试过自己解决吗，比如用皮搋子或商店买的管道疏通剂？", actionHint: "用DIY fixes表达", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I tried both but nothing worked. I think there might be a grease buildup.",
            textZh: "都试过了，没用。我觉得可能是油脂堆积。",
            culturalNote: "\'grease buildup\' 是厨房下水道堵塞的常见原因，在美国不建议往水槽倒油脂。",
          },
          {
            speaker: "them",
            role: "水管工调度",
            textEn: "Sounds like you need a professional snaking. We charge $150 for a standard drain clearing. Can someone be home between 2 and 4 PM today?",
            textZh: "听起来需要专业疏通。标准管道疏通收费150美元。今天下午2到4点家里能有人吗？",
            keyPhrases: [
              { en: "snaking", zh: "用蛇形管疏通" },
              { en: "drain clearing", zh: "管道疏通" },
            ],
            alternativeExpressions: [
              { textEn: "You'll probably need a professional drain snake. Our standard rate is $150 for a clearing. Can you be home between 2 and 4 this afternoon?", textZh: "可能需要专业管道疏通器。标准收费150美元。今天下午2到4点能在家吗？", actionHint: "用drain snake替代snaking", frequency: "common" },
              { textEn: "Sounds like it needs a pro snaking job. That runs $150 flat. We have a spot open today between 2 and 4 PM — does that work?", textZh: "听起来需要专业疏通。固定价150美元。今天2到4点有空档——行吗？", actionHint: "用spot open表达", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I'll be here. Is the $150 a flat rate or could it be more?",
            textZh: "在的。150美元是固定价还是可能更多？",
          },
          {
            speaker: "them",
            role: "水管工调度",
            textEn: "That's our flat rate for a standard clearing. If there's a deeper issue like a broken pipe, we'll diagnose it first and give you a quote before doing any extra work.",
            textZh: "这是标准疏通的固定价。如果有更深层的问题比如管道破裂，我们会先诊断，给你报价后再做额外工作。",
            keyPhrases: [
              { en: "flat rate", zh: "固定价格" },
              { en: "diagnose", zh: "诊断" },
              { en: "quote", zh: "报价" },
            ],
            alternativeExpressions: [
              { textEn: "That $150 is a fixed price for a standard job. If we discover something bigger like a cracked pipe, we'll give you an estimate before doing anything extra.", textZh: "150美元是标准工作的固定价。如果发现更大的问题比如管道破裂，做额外工作前会先给你报价。", actionHint: "用estimate替代quote", frequency: "common" },
              { textEn: "It's a flat fee — no surprises. If there's a larger problem underneath, we diagnose first and won't do any additional work without your approval.", textZh: "固定收费——没有隐藏费用。如果底下有更大问题，先诊断，没有你的同意不做额外工作。", actionHint: "强调无隐藏费用", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, that sounds fair. Please send someone over.",
            textZh: "好的，听起来合理。请派人过来吧。",
          },
          {
            speaker: "them",
            role: "水管工调度",
            textEn: "You're all set. Our plumber will text you when he's on his way. Please make sure the area under the sink is clear.",
            textZh: "安排好了。水管工出发时会发短信给你。请提前清理水槽下方的空间。",
            keyPhrases: [
              { en: "on his way", zh: "在路上" },
              { en: "make sure the area is clear", zh: "清理好那个区域" },
            ],
            alternativeExpressions: [
              { textEn: "All booked. The plumber will shoot you a text when he's heading over. Make sure the cabinet under the sink is cleared out.", textZh: "预约好了。水管工出发时会给你发短信。确保水槽下面的柜子清理好。", actionHint: "用shoot you a text口语化", frequency: "common" },
              { textEn: "You're good to go. Expect a text from our guy when he leaves. Oh, and please clear out anything stored under the sink.", textZh: "安排好了。他出发时会发短信给你。对了，请把水槽下面的东西清出来。", actionHint: "用expect a text", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "leaky-faucet",
        titleZh: "水龙头漏水",
        titleEn: "Leaky Faucet",
        description: "水龙头一直滴水，水管工上门检查和修理",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Thanks for coming. The bathroom faucet has been dripping nonstop for a week.",
            textZh: "谢谢你来。浴室水龙头滴了一个星期了。",
          },
          {
            speaker: "them",
            role: "水管工",
            textEn: "Let me check it out. Yeah, the washer is worn out. That's causing the drip. It's a simple replacement.",
            textZh: "我看看。是的，垫圈磨损了，所以漏水。换一个就好。",
            keyPhrases: [
              { en: "washer", zh: "垫圈" },
              { en: "worn out", zh: "磨损了" },
            ],
            alternativeExpressions: [
              { textEn: "Let me take a look... Yep, it's the washer — it's completely worn down. Quick fix, just a replacement.", textZh: "我看看……没错，是垫圈——完全磨损了。小问题，换一个就好。", actionHint: "更详细描述磨损", frequency: "common" },
              { textEn: "I see the issue. The rubber washer inside is shot. That's what's causing the drip. Easy repair.", textZh: "我看到问题了。里面的橡胶垫圈坏了，所以滴水。好修。", actionHint: "用shot表示坏了", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh good, so it's not a big deal?",
            textZh: "太好了，不是大问题吧？",
          },
          {
            speaker: "them",
            role: "水管工",
            textEn: "Not at all. But I also noticed the faucet itself is pretty old. You might want to consider replacing the whole unit. A new one would be more water-efficient.",
            textZh: "完全不是。不过我注意到水龙头本身也很旧了。你可以考虑整个换掉。新的更节水。",
            keyPhrases: [
              { en: "water-efficient", zh: "节水的" },
              { en: "the whole unit", zh: "整个装置" },
            ],
            alternativeExpressions: [
              { textEn: "Nope, nothing major. But I should mention — this faucet has seen better days. A newer model would save you water in the long run.", textZh: "不是什么大事。但要提一下——这个水龙头有年头了。换新的长远来看更省水。", actionHint: "用has seen better days", frequency: "common" },
              { textEn: "Not a big deal at all. That said, the faucet is getting up there in age. Upgrading to a new one would give you better water efficiency.", textZh: "完全不是大问题。话说回来，这水龙头年头不小了。换个新的用水效率更好。", actionHint: "用getting up there in age", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What would a new faucet run me, parts and labor?",
            textZh: "换新的水龙头加上人工，大概多少钱？",
            culturalNote: "\'What would it run me\' 是口语表达，意思是 \'大概多少钱\'。",
          },
          {
            speaker: "them",
            role: "水管工",
            textEn: "A decent faucet is around $80 to $150. With labor, you're looking at maybe $200 to $300 total. But if you just want the washer replaced, that's $60 including the part.",
            textZh: "一个不错的水龙头80到150美元。加上人工，总共大概200到300美元。如果只换垫圈，包含零件60美元。",
            keyPhrases: [
              { en: "parts and labor", zh: "零件加人工" },
              { en: "you're looking at", zh: "大概是" },
            ],
            alternativeExpressions: [
              { textEn: "A good faucet runs $80 to $150 for the fixture. Including installation, the total would be $200 to $300. Or I can just swap the washer for $60.", textZh: "一个好水龙头80到150美元。加安装总共200到300美元。或者我只换垫圈60美元。", actionHint: "用fixture和installation", frequency: "common" },
              { textEn: "For a quality replacement, you'd be looking at $200 to $300 all in — parts and labor. But the washer-only fix is just $60 if you want to keep it simple.", textZh: "换个好的，连零件带人工总共200到300美元。如果想简单点，只换垫圈60美元就行。", actionHint: "用all in表示全包", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Let's just do the washer for now. Maybe I'll upgrade the faucet later.",
            textZh: "先换垫圈吧。水龙头以后再说。",
          },
          {
            speaker: "them",
            role: "水管工",
            textEn: "Sure thing. I have the part in my truck. Give me about 20 minutes and you'll be all set.",
            textZh: "没问题。零件在我车上。大概20分钟就好。",
            keyPhrases: [
              { en: "in my truck", zh: "在我车上" },
              { en: "you'll be all set", zh: "就搞定了" },
            ],
            alternativeExpressions: [
              { textEn: "No problem. I've got the washer right here in my toolbox. About 20 minutes and you'll be good.", textZh: "没问题。垫圈就在我工具箱里。大概20分钟就搞定了。", actionHint: "用toolbox替代truck", frequency: "common" },
              { textEn: "Absolutely. Lucky for you, I carry that part with me. Give me 20 minutes and the drip will be history.", textZh: "当然。你运气好，我随身带着这个零件。给我20分钟，漏水就成历史了。", actionHint: "更幽默的表达", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Appreciate it. Can I get a receipt when you're done?",
            textZh: "谢谢。做完后能给我开个收据吗？",
          },
        ],
      },
    ],
  },

  // ==================== 电工 ====================
  {
    id: "daily-life-electrician",
    category: "daily-life",
    titleZh: "叫电工",
    titleEn: "Calling an Electrician",
    description: "电路跳闸、插座故障或需要安装新灯具，联系电工上门",
    otherRole: "电工",
    otherRoleIcon: "⚡",
    flows: [
      {
        id: "tripped-breaker",
        titleZh: "电路跳闸",
        titleEn: "Tripped Circuit Breaker",
        description: "家里经常跳闸，需要电工检查",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, the circuit breaker in my apartment keeps tripping. It happens almost every day now.",
            textZh: "你好，我公寓的电路断路器老是跳闸，现在几乎每天都跳。",
            casualVersion: "Hey, my breaker keeps tripping. It's happening like every day.",
          },
          {
            speaker: "them",
            role: "电工",
            textEn: "Which circuit is it? Is it the one for the kitchen, or is it the main breaker?",
            textZh: "是哪个回路？是厨房的，还是总闸？",
            keyPhrases: [
              { en: "circuit", zh: "回路/电路" },
              { en: "main breaker", zh: "总闸" },
            ],
            alternativeExpressions: [
              { textEn: "Do you know which breaker keeps tripping? Is it labeled for the kitchen, or is it your main switch?", textZh: "知道是哪个断路器一直跳吗？标的是厨房，还是总开关？", actionHint: "用breaker和main switch", frequency: "common" },
              { textEn: "Can you tell which one it is on your panel? The kitchen circuit, or the main breaker for the whole unit?", textZh: "你能看出配电箱上是哪个吗？厨房回路，还是整个单元的总闸？", actionHint: "引导看配电箱", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's the one labeled 'kitchen.' It trips whenever I use the microwave and toaster at the same time.",
            textZh: "标着「厨房」的那个。同时用微波炉和烤面包机就跳。",
          },
          {
            speaker: "them",
            role: "电工",
            textEn: "That sounds like the circuit is overloaded. The kitchen might only be on a 15-amp circuit. You probably need a dedicated 20-amp circuit for the microwave.",
            textZh: "听起来是电路过载了。厨房可能只有15安培的回路。微波炉可能需要一个独立的20安培回路。",
            keyPhrases: [
              { en: "overloaded", zh: "过载" },
              { en: "amp", zh: "安培" },
              { en: "dedicated circuit", zh: "独立回路" },
            ],
            alternativeExpressions: [
              { textEn: "Classic overload situation. Your kitchen is probably wired on a 15-amp circuit, and those two appliances together draw too much power. You likely need a separate 20-amp line for the microwave.", textZh: "典型的过载情况。厨房可能是15安培的线路，两个电器一起用功率太大。微波炉可能需要单独20安培的线路。", actionHint: "用classic overload开头", frequency: "common" },
              { textEn: "That's a textbook overload. The microwave and toaster together are pulling more amps than the circuit can handle. You'd need a dedicated 20-amp circuit just for the microwave.", textZh: "这是教科书式的过载。微波炉和烤面包机一起超过了线路的承受能力。微波炉需要一个专用的20安培回路。", actionHint: "用textbook overload", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is that a big job? How much would it cost?",
            textZh: "这是大工程吗？大概多少钱？",
          },
          {
            speaker: "them",
            role: "电工",
            textEn: "It depends on your panel and the wiring. I'd need to come out and look. The inspection visit is $85, and if you go ahead with the work, that's applied toward the total.",
            textZh: "取决于你的配电箱和布线。我需要上门看看。检查费85美元，如果决定做，这笔费用会算进总价。",
            keyPhrases: [
              { en: "panel", zh: "配电箱" },
              { en: "wiring", zh: "布线/电线" },
              { en: "applied toward the total", zh: "算入总价" },
            ],
            alternativeExpressions: [
              { textEn: "Hard to say without seeing it. I'll need to inspect your panel and wiring. The inspection is $85, and that goes toward the total if you decide to move forward.", textZh: "没看到很难说。我需要检查配电箱和线路。检查费85美元，如果决定做会算进总价。", actionHint: "用move forward替代go ahead", frequency: "common" },
              { textEn: "It really depends on your setup. Let me come take a look — the diagnostic visit is $85, which gets credited toward the repair if you go ahead.", textZh: "真的取决于你的配置。让我来看看——诊断费85美元，如果做维修会抵扣到总费用里。", actionHint: "用diagnostic visit和credited", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's fair. Can you come this Saturday?",
            textZh: "合理。这周六能来吗？",
          },
          {
            speaker: "them",
            role: "电工",
            textEn: "Saturday morning works. I'll put you down for 10 AM. Just make sure I can access the breaker panel when I get there.",
            textZh: "周六上午可以。给你安排早上10点。到时候请确保我能看到配电箱。",
            keyPhrases: [
              { en: "put you down for", zh: "给你安排在" },
              { en: "access the breaker panel", zh: "能看到/打开配电箱" },
            ],
            alternativeExpressions: [
              { textEn: "Saturday works. Let's say 10 AM. Just make sure I have clear access to the electrical panel when I arrive.", textZh: "周六可以。就定10点吧。到的时候请确保我能方便到达配电箱。", actionHint: "用let's say更随意", frequency: "common" },
              { textEn: "I can do Saturday at 10. One thing — please make sure nothing is blocking the breaker panel so I can get right to work.", textZh: "周六10点可以。一件事——请确保配电箱前没有东西挡着，我好直接开工。", actionHint: "用get right to work", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Will do. Thanks!",
            textZh: "好的，谢谢！",
          },
        ],
      },
      {
        id: "install-fixture",
        titleZh: "安装灯具",
        titleEn: "Installing a Light Fixture",
        description: "买了新灯具需要电工帮忙安装",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I bought a new ceiling fan with a light and I need it installed. Can you do that?",
            textZh: "我买了一个带灯的新吊扇，需要安装。你能装吗？",
          },
          {
            speaker: "them",
            role: "电工",
            textEn: "Sure. Is there already a ceiling fan or light fixture in that spot, or is this a brand-new installation?",
            textZh: "可以。那个位置现在已经有吊扇或灯具了，还是全新安装？",
            keyPhrases: [
              { en: "ceiling fan", zh: "吊扇" },
              { en: "light fixture", zh: "灯具" },
              { en: "brand-new installation", zh: "全新安装" },
            ],
            alternativeExpressions: [
              { textEn: "Definitely. Is this replacing an existing light, or are we doing a fresh install from scratch?", textZh: "没问题。是替换现有的灯具，还是从头全新安装？", actionHint: "用from scratch", frequency: "common" },
              { textEn: "I can handle that. Quick question — is there already a fixture up there, or does this location need new wiring?", textZh: "这个我能做。问一下——那个位置已经有灯具了，还是需要重新走线？", actionHint: "问是否需要新布线", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "There's an old light fixture there now. I want to swap it out for the ceiling fan.",
            textZh: "现在那里有个旧灯具。我想换成吊扇。",
          },
          {
            speaker: "them",
            role: "电工",
            textEn: "Okay. I'll need to check if there's a fan-rated electrical box up there. A regular light box isn't strong enough to hold a fan. If it needs replacing, that's an extra $30 to $50.",
            textZh: "好的。我需要检查上面有没有吊扇专用的电盒。普通灯具电盒撑不住风扇。如果需要换，额外30到50美元。",
            keyPhrases: [
              { en: "fan-rated electrical box", zh: "吊扇专用电盒" },
              { en: "strong enough to hold", zh: "承受得住" },
            ],
            alternativeExpressions: [
              { textEn: "Got it. First thing I'll check is whether the junction box is rated for a fan. Regular light boxes can't support the weight and vibration. If it needs upgrading, that's an extra $30 to $50.", textZh: "明白了。我先检查接线盒是否是吊扇级别的。普通灯具盒承受不了重量和振动。如果需要升级，额外30到50美元。", actionHint: "用junction box替代", frequency: "common" },
              { textEn: "The key thing is whether there's a fan-rated box in the ceiling. A standard light box won't hold a fan safely. Replacing it would add $30 to $50 to the job.", textZh: "关键是天花板里有没有吊扇级别的电盒。标准灯具盒撑不住风扇。换的话加30到50美元。", actionHint: "强调安全因素", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much is the installation itself?",
            textZh: "安装本身多少钱？",
          },
          {
            speaker: "them",
            role: "电工",
            textEn: "Replacing an existing fixture with a ceiling fan is typically $150 to $200. That includes mounting, wiring, and testing everything.",
            textZh: "把现有灯具换成吊扇通常150到200美元。包括安装、接线和测试。",
            keyPhrases: [
              { en: "mounting", zh: "安装/固定" },
              { en: "wiring", zh: "接线" },
            ],
            alternativeExpressions: [
              { textEn: "For swapping out a light for a ceiling fan, it's usually $150 to $200. That covers mounting, wiring, and a full test.", textZh: "把灯换成吊扇通常150到200美元。包含固定、接线和全面测试。", actionHint: "用swapping out替代replacing", frequency: "common" },
              { textEn: "The installation runs $150 to $200 — that includes everything: mounting it, connecting the wires, and making sure it all works properly.", textZh: "安装费150到200美元——全包：固定安装、连接线路、确保一切正常运行。", actionHint: "强调全包", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do I need to buy anything else, or do you bring all the hardware?",
            textZh: "我还需要买什么吗，还是你带齐所有配件？",
          },
          {
            speaker: "them",
            role: "电工",
            textEn: "Most ceiling fans come with all the hardware. Just make sure you have the remote or wall switch if it requires one. I'll bring my own tools and supplies.",
            textZh: "大多数吊扇自带所有配件。如果需要遥控器或墙壁开关的话确保你有。工具和耗材我自己带。",
            keyPhrases: [
              { en: "hardware", zh: "配件/零件" },
              { en: "supplies", zh: "耗材" },
            ],
            alternativeExpressions: [
              { textEn: "The fan should come with everything you need. Just check if it needs a separate remote or wall switch. I'll bring all my own tools and materials.", textZh: "吊扇应该自带所有需要的东西。只要看看是否需要单独的遥控器或墙壁开关。工具和材料我自己带。", actionHint: "换个结构说同样的事", frequency: "common" },
              { textEn: "You shouldn't need to buy anything extra — fans typically include all mounting hardware. Just double-check the remote situation. Tools and supplies are on me.", textZh: "你不需要额外买东西——风扇通常自带所有安装配件。确认一下遥控器的情况就好。工具耗材我来。", actionHint: "用on me表示我负责", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. Let's schedule it for next week.",
            textZh: "好的，安排到下周吧。",
          },
        ],
      },
    ],
  },

  // ==================== 图书馆办卡 ====================
  {
    id: "daily-life-library-card",
    category: "daily-life",
    titleZh: "图书馆办卡",
    titleEn: "Getting a Library Card",
    description: "去当地公共图书馆办理借书卡",
    otherRole: "图书管理员",
    otherRoleIcon: "📚",
    flows: [
      {
        id: "basic-signup",
        titleZh: "基本办卡",
        titleEn: "Basic Sign-up",
        description: "第一次去图书馆办借书卡",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to get a library card. I just moved to the area.",
            textZh: "你好，我想办个借书卡。我刚搬到这边。",
            casualVersion: "Hey, I'm new here and I'd love to get a library card.",
          },
          {
            speaker: "them",
            role: "图书管理员",
            textEn: "Welcome! All you need is a photo ID and proof of address — like a utility bill or lease agreement.",
            textZh: "欢迎！只需要带照片的证件和地址证明——比如水电费账单或租约。",
            keyPhrases: [
              { en: "photo ID", zh: "带照片的证件" },
              { en: "proof of address", zh: "地址证明" },
              { en: "lease agreement", zh: "租约" },
            ],
            culturalNote: "美国公共图书馆对本地居民免费，只需证明你住在该区域。",
            alternativeExpressions: [
              { textEn: "Hi there! Just bring a government-issued ID and something that shows your address — a utility bill or lease works great.", textZh: "你好！只需要带政府颁发的证件和地址证明——水电费账单或租约就行。", actionHint: "用government-issued ID", frequency: "common" },
              { textEn: "Welcome to the library! Getting a card is easy — just a photo ID and any document with your current address, like a bill or a lease.", textZh: "欢迎来到图书馆！办卡很简单——只要带照片证件和任何有你现住址的文件，比如账单或租约。", actionHint: "强调办卡简单", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have my passport and my lease. Will those work?",
            textZh: "我有护照和租约。可以吗？",
          },
          {
            speaker: "them",
            role: "图书管理员",
            textEn: "Perfect. Just fill out this application form with your name, address, and contact info. It'll only take a minute.",
            textZh: "可以的。填一下这张申请表，写上姓名、地址和联系方式。一分钟就好。",
            keyPhrases: [
              { en: "application form", zh: "申请表" },
              { en: "contact info", zh: "联系方式" },
            ],
            alternativeExpressions: [
              { textEn: "Those will work perfectly. Just complete this short form — name, address, phone number or email. Takes about a minute.", textZh: "这些完全可以。填一下这张简短表格——姓名、地址、电话或邮箱。一分钟就好。", actionHint: "用complete this short form", frequency: "common" },
              { textEn: "Great, your passport and lease are fine. Here's the application — just your basic contact details. It's really quick.", textZh: "好的，护照和租约没问题。这是申请表——填基本联系信息就行。很快的。", actionHint: "先确认证件再给表", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Done. Is there an annual fee?",
            textZh: "填好了。有年费吗？",
          },
          {
            speaker: "them",
            role: "图书管理员",
            textEn: "No, the library card is completely free for residents. You can borrow up to 20 items at a time, and most materials have a three-week loan period.",
            textZh: "没有，居民办卡完全免费。一次最多借20件，大多数资料借期三周。",
            keyPhrases: [
              { en: "loan period", zh: "借阅期" },
              { en: "residents", zh: "居民" },
            ],
            alternativeExpressions: [
              { textEn: "Nope, totally free for local residents! You can check out up to 20 items, and most have a three-week borrowing period.", textZh: "不收费，当地居民完全免费！一次最多借20件，大部分借期三周。", actionHint: "用check out替代borrow", frequency: "common" },
              { textEn: "No fees at all — it's a free service for anyone living in the area. The limit is 20 items at a time with a three-week loan period.", textZh: "完全不收费——住在本区域的人都免费。一次限借20件，借期三周。", actionHint: "强调免费服务", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What about late fees?",
            textZh: "逾期有罚款吗？",
          },
          {
            speaker: "them",
            role: "图书管理员",
            textEn: "We actually went fine-free last year! But if you lose a book, you'll need to pay the replacement cost. Here's your card — you're all set!",
            textZh: "我们去年取消罚款了！但如果丢了书，需要付替换费用。这是你的卡——办好了！",
            keyPhrases: [
              { en: "fine-free", zh: "免罚款" },
              { en: "replacement cost", zh: "替换费用" },
            ],
            alternativeExpressions: [
              { textEn: "Good news — we eliminated late fees last year! You'll only pay if a book is lost or not returned, in which case it's the replacement cost. Here's your new card!", textZh: "好消息——去年取消了逾期罚款！只有丢书或不归还才需要付替换费。这是你的新卡！", actionHint: "用eliminated替代went fine-free", frequency: "common" },
              { textEn: "We're actually fine-free now! No penalties for returning late. Lost items do need to be paid for, though. Anyway, your card is all set — here you go!", textZh: "我们现在免罚款了！晚还没有处罚。丢失的需要赔付。好了，你的卡办好了——给你！", actionHint: "先说免罚再说例外", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's great! Thank you so much.",
            textZh: "太好了！非常感谢。",
          },
        ],
      },
      {
        id: "digital-resources",
        titleZh: "数字资源使用",
        titleEn: "Using Digital Resources",
        description: "了解图书馆提供的电子书、数据库等数字资源",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I heard the library has free access to e-books and audiobooks. How does that work?",
            textZh: "我听说图书馆有免费的电子书和有声书。怎么用？",
          },
          {
            speaker: "them",
            role: "图书管理员",
            textEn: "Yes! We partner with Libby and Hoopla. Just download the app, sign in with your library card number, and you can borrow e-books and audiobooks right on your phone.",
            textZh: "是的！我们和Libby以及Hoopla合作。下载App，用借书卡号登录，就能在手机上借电子书和有声书了。",
            keyPhrases: [
              { en: "partner with", zh: "合作" },
              { en: "sign in", zh: "登录" },
              { en: "library card number", zh: "借书卡号" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely! Download the Libby or Hoopla app, log in with your library card number, and you'll have instant access to thousands of e-books and audiobooks.", textZh: "当然有！下载Libby或Hoopla应用，用借书卡号登录，就能立即访问数千本电子书和有声书。", actionHint: "强调即时访问", frequency: "common" },
              { textEn: "Yes, we have two great apps — Libby and Hoopla. Just sign in with your card number and you can start borrowing digital content right on your phone.", textZh: "有的，两个很棒的应用——Libby和Hoopla。用卡号登录就能直接在手机上借阅数字内容了。", actionHint: "强调两个应用选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's convenient. Do you also have free Wi-Fi here?",
            textZh: "好方便。这里有免费Wi-Fi吗？",
          },
          {
            speaker: "them",
            role: "图书管理员",
            textEn: "Yes, free Wi-Fi throughout the building. We also have public computers you can use for up to two hours per session. And we offer free printing — 15 pages a day in black and white.",
            textZh: "有的，整栋楼都有免费Wi-Fi。还有公共电脑，每次可用两小时。还提供免费打印——每天15页黑白。",
            keyPhrases: [
              { en: "public computers", zh: "公共电脑" },
              { en: "per session", zh: "每次" },
              { en: "black and white", zh: "黑白" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, the entire building has free Wi-Fi. We've also got public computers — two-hour sessions — and free black-and-white printing, up to 15 pages a day.", textZh: "有的，整栋楼都有免费Wi-Fi。还有公共电脑——每次两小时——以及免费黑白打印，每天15页。", actionHint: "用更紧凑的结构", frequency: "common" },
              { textEn: "Free Wi-Fi everywhere in the building. Plus, public computers are available for two-hour blocks, and you get 15 free black-and-white pages per day.", textZh: "整栋楼都有免费Wi-Fi。另外公共电脑可以用两小时，每天还有15页免费黑白打印。", actionHint: "用blocks替代sessions", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do you have any study rooms I can reserve?",
            textZh: "有可以预约的自习室吗？",
          },
          {
            speaker: "them",
            role: "图书管理员",
            textEn: "We have four study rooms. You can reserve them online for up to two hours. They're first-come, first-served if not reserved.",
            textZh: "有四个自习室。可以在线预约，最多两小时。没人预约的话先到先得。",
            keyPhrases: [
              { en: "reserve", zh: "预约" },
              { en: "first-come, first-served", zh: "先到先得" },
            ],
            alternativeExpressions: [
              { textEn: "Yes, there are four. You can book them online for up to two hours at a time. If nobody's reserved one, it's first-come, first-served.", textZh: "有四间。可以在线预约，每次最多两小时。没人预约的话先到先得。", actionHint: "用book替代reserve", frequency: "common" },
              { textEn: "We've got four study rooms available. Reserve one on our website — max two hours per booking. Walk-ins are welcome if there's an opening.", textZh: "有四间自习室可用。在网站上预约——每次最多两小时。没人预约时随时可用。", actionHint: "用walk-ins表达未预约", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "One more thing — do you have any language-learning resources?",
            textZh: "还有一个问题——有语言学习资源吗？",
          },
          {
            speaker: "them",
            role: "图书管理员",
            textEn: "Absolutely. We have free access to Mango Languages with your card. And there's an ESL conversation group that meets here every Tuesday evening.",
            textZh: "当然有。用卡可以免费使用Mango Languages。每周二晚上这里还有ESL英语会话小组。",
            keyPhrases: [
              { en: "ESL", zh: "英语作为第二语言" },
              { en: "conversation group", zh: "会话小组" },
            ],
            alternativeExpressions: [
              { textEn: "Definitely! Your card gives you free access to Mango Languages online. We also run an ESL conversation group every Tuesday evening right here.", textZh: "当然有！你的卡可以免费使用在线的Mango Languages。每周二晚上我们这里还有ESL英语会话小组。", actionHint: "强调卡的权益", frequency: "common" },
              { textEn: "Yes! Mango Languages is free with your library card. And if you want to practice speaking, there's a weekly ESL conversation circle on Tuesday nights.", textZh: "有！Mango Languages凭借书卡免费用。想练口语的话，每周二晚有ESL英语口语圈。", actionHint: "用conversation circle替代group", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's amazing. This library has so much to offer.",
            textZh: "太棒了。这个图书馆资源真丰富。",
          },
        ],
      },
    ],
  },

  // ==================== 图书馆借书 ====================
  {
    id: "daily-life-library-borrow",
    category: "daily-life",
    titleZh: "图书馆借还书",
    titleEn: "Borrowing & Returning Books",
    description: "在图书馆借书、续借和还书",
    otherRole: "图书管理员",
    otherRoleIcon: "📖",
    flows: [
      {
        id: "basic-borrow",
        titleZh: "借书",
        titleEn: "Borrowing Books",
        description: "找书、借书的基本流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I'm looking for a book but I can't find it on the shelf. Can you help?",
            textZh: "打扰一下，我在找一本书，架上没找到。能帮忙吗？",
          },
          {
            speaker: "them",
            role: "图书管理员",
            textEn: "Of course. What's the title or author?",
            textZh: "当然可以。书名或作者是？",
            keyPhrases: [
              { en: "title", zh: "书名" },
              { en: "author", zh: "作者" },
            ],
            alternativeExpressions: [
              { textEn: "Happy to help! Do you know the title or the author's name?", textZh: "很乐意帮忙！知道书名或作者名吗？", actionHint: "更热情的开头", frequency: "common" },
              { textEn: "Sure, let me look it up for you. What's the book called, or who wrote it?", textZh: "当然，我帮你查。书名叫什么，或者谁写的？", actionHint: "主动提出查询", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's called 'Atomic Habits' by James Clear.",
            textZh: "叫《Atomic Habits》，作者James Clear。",
          },
          {
            speaker: "them",
            role: "图书管理员",
            textEn: "Let me check our catalog... It looks like all copies are currently checked out. Would you like to place a hold? You'll be notified when one becomes available.",
            textZh: "我查查目录……所有副本都借出去了。你要预约吗？有了会通知你。",
            keyPhrases: [
              { en: "checked out", zh: "已被借走" },
              { en: "place a hold", zh: "预约/预留" },
              { en: "notified", zh: "通知" },
            ],
            alternativeExpressions: [
              { textEn: "Let me search that... Unfortunately all our copies are out right now. I can put you on the waiting list, and we'll let you know when one comes back.", textZh: "我查一下……很遗憾，所有副本目前都借出了。我可以把你加到等候名单上，有了会通知你。", actionHint: "用waiting list替代hold", frequency: "common" },
              { textEn: "Hmm, checking our system... It's a popular one — all copies are borrowed. Want me to reserve one for you? You'll get an email or text when it's available.", textZh: "嗯，查查系统……这本很热门——都借走了。要我帮你预留一本吗？有了会发邮件或短信通知你。", actionHint: "提到热门书解释原因", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. How long is the wait usually?",
            textZh: "好的，请帮我预约。一般要等多久？",
          },
          {
            speaker: "them",
            role: "图书管理员",
            textEn: "There are three people ahead of you, so probably two to three weeks. In the meantime, we do have the audiobook version on Libby if you're interested.",
            textZh: "前面有三个人排队，大概两到三周。这期间如果你感兴趣，Libby上有有声书版本。",
            keyPhrases: [
              { en: "ahead of you", zh: "在你前面" },
              { en: "in the meantime", zh: "在此期间" },
            ],
            alternativeExpressions: [
              { textEn: "You're fourth in line, so expect about two to three weeks. In the meantime, the audiobook is available on Libby if you'd like to start listening.", textZh: "你排第四位，大概两到三周。等的这段时间，Libby上有有声书版本可以先听。", actionHint: "用fourth in line", frequency: "common" },
              { textEn: "There are three holds before yours — roughly two to three weeks. If you don't want to wait, we have the audiobook version available digitally right now.", textZh: "你前面有三个预约——大概两到三周。如果不想等，现在就有数字版有声书可以用。", actionHint: "提供不想等的替代方案", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good idea, I'll check that out. Can I also borrow these two books I found?",
            textZh: "好主意，我去看看。另外我找到的这两本可以借吗？",
          },
          {
            speaker: "them",
            role: "图书管理员",
            textEn: "Sure. I'll scan your card and these books. They're due back in three weeks. You can renew online if you need more time.",
            textZh: "可以。我扫一下你的卡和这两本书。三周后到期。如果需要更多时间可以在线续借。",
            keyPhrases: [
              { en: "due back", zh: "到期归还" },
              { en: "renew", zh: "续借" },
            ],
            alternativeExpressions: [
              { textEn: "Of course. Let me scan your card and check these out for you. Return date is three weeks from today, and you can always renew online.", textZh: "当然。我扫一下你的卡帮你借。三周后归还，可以随时在线续借。", actionHint: "用return date更具体", frequency: "common" },
              { textEn: "Absolutely. Here we go — scanned. These are due back in three weeks. If you need more time, just hop online and renew them.", textZh: "没问题。好了——扫好了。三周后到期。如果需要更多时间，上网续借就行。", actionHint: "边操作边说话", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How many times can I renew?",
            textZh: "可以续借几次？",
          },
          {
            speaker: "them",
            role: "图书管理员",
            textEn: "Up to two times, as long as no one else has placed a hold on it. Here you go — enjoy your reading!",
            textZh: "最多两次，前提是没人预约。给你——享受阅读！",
            keyPhrases: [
              { en: "as long as", zh: "只要" },
            ],
            alternativeExpressions: [
              { textEn: "You can renew twice, provided nobody else is waiting for it. Here are your books — happy reading!", textZh: "可以续借两次，前提是没人在等。书给你——祝阅读愉快！", actionHint: "用provided替代as long as", frequency: "common" },
              { textEn: "Two renewals max, unless someone else has a hold on the title. Enjoy your books!", textZh: "最多续借两次，除非有人预约了这本书。好好享受阅读吧！", actionHint: "用renewals名词形式", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "return-issue",
        titleZh: "还书问题",
        titleEn: "Return Issue",
        description: "还书时遇到逾期或书籍损坏的问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'm returning these books, but I think one is a few days overdue. I'm sorry about that.",
            textZh: "我来还书，不过有一本好像逾期几天了。很抱歉。",
          },
          {
            speaker: "them",
            role: "图书管理员",
            textEn: "No worries! We don't charge late fees anymore. But we do send reminder emails as a courtesy.",
            textZh: "没关系！我们不收逾期罚款了。但会发提醒邮件作为友好提示。",
            keyPhrases: [
              { en: "late fees", zh: "逾期罚款" },
              { en: "as a courtesy", zh: "作为友好提示" },
            ],
            alternativeExpressions: [
              { textEn: "Don't worry about it! We got rid of late fees last year. We'll just send you a friendly email reminder next time.", textZh: "别担心！去年取消罚款了。下次会发友好的邮件提醒。", actionHint: "用got rid of替代don't charge", frequency: "common" },
              { textEn: "No problem at all — we're fine-free now. We do send reminder emails though, just as a heads-up.", textZh: "完全没问题——我们现在免罚了。不过会发提醒邮件，算是个友好提示。", actionHint: "更轻松的语气", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a relief. Also, I noticed this book has some water damage. It was like that when I borrowed it.",
            textZh: "那就放心了。另外，这本书有点水渍。借的时候就这样了。",
          },
          {
            speaker: "them",
            role: "图书管理员",
            textEn: "Thanks for letting us know. Let me note that in our system so it's not charged to your account. We appreciate your honesty.",
            textZh: "感谢告知。我在系统里备注一下，这样不会算在你账上。谢谢你的诚实。",
            keyPhrases: [
              { en: "note that in our system", zh: "在系统里备注" },
              { en: "charged to your account", zh: "算在你账上" },
            ],
            alternativeExpressions: [
              { textEn: "I appreciate you telling us. I'll flag that in the system so you won't be held responsible. Thanks for being honest.", textZh: "感谢你告诉我们。我在系统里标记一下，这样不会算你头上。谢谢你的诚实。", actionHint: "用flag替代note", frequency: "common" },
              { textEn: "Thank you for bringing that to our attention. I'll make a note on your account so there's no charge. We really appreciate your honesty.", textZh: "谢谢你提醒我们注意。我在你账户上备注一下不会收费。非常感谢你的坦诚。", actionHint: "用bringing to our attention", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "No problem. By the way, can I return books after hours?",
            textZh: "不客气。对了，闭馆后可以还书吗？",
          },
          {
            speaker: "them",
            role: "图书管理员",
            textEn: "Yes! There's a book drop box by the main entrance. It's available 24/7. Just slide your items through the slot.",
            textZh: "可以！正门旁边有还书箱，24小时都可以用。把书从投入口放进去就行。",
            keyPhrases: [
              { en: "book drop box", zh: "还书箱" },
              { en: "24/7", zh: "全天候" },
              { en: "slot", zh: "投入口" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely! We have a 24-hour drop box right by the front door. Just slide your books through the slot anytime.", textZh: "当然！正门旁有24小时还书箱。随时把书从投入口放进去就行。", actionHint: "用front door替代main entrance", frequency: "common" },
              { textEn: "Yes, there's an after-hours return slot next to the entrance. It's open around the clock — super convenient.", textZh: "有的，入口旁有闭馆后还书口。全天候开放——非常方便。", actionHint: "用after-hours return slot", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I drop off DVDs and CDs there too?",
            textZh: "DVD和CD也能放那里还吗？",
          },
          {
            speaker: "them",
            role: "图书管理员",
            textEn: "DVDs and CDs should be returned inside to avoid damage. The drop box can be a bit rough on them.",
            textZh: "DVD和CD最好到馆内还，避免损坏。还书箱可能会磕碰到。",
            keyPhrases: [
              { en: "rough on them", zh: "对它们有损伤" },
            ],
            alternativeExpressions: [
              { textEn: "For DVDs and CDs, please bring them inside. The drop box can scratch or crack the cases.", textZh: "DVD和CD请到馆内归还。还书箱可能会刮花或弄坏盒子。", actionHint: "说明具体损坏方式", frequency: "common" },
              { textEn: "I'd recommend returning discs at the front desk. The drop box isn't the gentlest with those — they can get damaged.", textZh: "建议光盘到前台还。还书箱对它们不太温柔——可能会损坏。", actionHint: "用isn't the gentlest幽默说法", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Thanks for the info!",
            textZh: "明白了。谢谢！",
          },
        ],
      },
    ],
  },

  // ==================== 公园野餐 ====================
  {
    id: "daily-life-park-picnic",
    category: "daily-life",
    titleZh: "公园野餐",
    titleEn: "Park Picnic",
    description: "在公园找合适的位置野餐，了解公园规则",
    otherRole: "公园管理员",
    otherRoleIcon: "🌳",
    flows: [
      {
        id: "basic-picnic",
        titleZh: "基本野餐",
        titleEn: "Basic Picnic Setup",
        description: "找地方野餐，了解基本规则",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, are we allowed to have a picnic here by the lake?",
            textZh: "打扰一下，我们可以在湖边这里野餐吗？",
          },
          {
            speaker: "them",
            role: "公园管理员",
            textEn: "Absolutely! This area is open for picnics. There are tables over by the pavilion, or you can set up a blanket on the grass.",
            textZh: "当然可以！这片区域可以野餐。亭子那边有桌子，也可以在草地上铺毯子。",
            keyPhrases: [
              { en: "pavilion", zh: "凉亭/遮阳棚" },
              { en: "set up a blanket", zh: "铺毯子" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! This is a great picnic spot. There are tables near the pavilion, or feel free to spread a blanket anywhere on the grass.", textZh: "当然可以！这里是很好的野餐地点。亭子附近有桌子，也可以在草地上随便铺毯子。", actionHint: "用great picnic spot", frequency: "common" },
              { textEn: "Sure thing! Picnics are welcome here. You can use the tables by the pavilion or just lay out a blanket on the lawn.", textZh: "没问题！欢迎野餐。可以用亭子旁的桌子，或者在草坪上铺毯子。", actionHint: "用lay out a blanket", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Are we allowed to use a portable grill?",
            textZh: "可以用便携烧烤炉吗？",
            culturalNote: "美国很多公园允许烧烤，但有些只能在指定区域。提前问是礼貌的做法。",
          },
          {
            speaker: "them",
            role: "公园管理员",
            textEn: "Only charcoal and gas grills in the designated BBQ area over there. No open fires on the grass, though.",
            textZh: "只能在那边的指定烧烤区使用炭烤和燃气烧烤炉。草地上不能生明火。",
            keyPhrases: [
              { en: "designated BBQ area", zh: "指定烧烤区" },
              { en: "open fires", zh: "明火" },
            ],
            alternativeExpressions: [
              { textEn: "Grills are fine, but only in the BBQ area right over there. We allow charcoal and gas — just no open flames on the grass.", textZh: "烧烤炉可以用，但只能在那边的烧烤区。炭烤和燃气都行——就是草地上不能生明火。", actionHint: "先肯定再限定", frequency: "common" },
              { textEn: "You can use a portable grill in the designated grilling area. Charcoal or gas is fine, but please keep all fires off the grass.", textZh: "便携烧烤炉可以在指定烧烤区使用。炭烤或燃气都行，但请不要在草地上用火。", actionHint: "用grilling area替代BBQ area", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. Where are the nearest restrooms?",
            textZh: "知道了。最近的洗手间在哪？",
          },
          {
            speaker: "them",
            role: "公园管理员",
            textEn: "Just past the playground, about a two-minute walk that way. They're open until the park closes at dusk.",
            textZh: "过了游乐场，往那边走大概两分钟。开到公园天黑关门时止。",
            keyPhrases: [
              { en: "dusk", zh: "黄昏/天黑" },
            ],
            alternativeExpressions: [
              { textEn: "Head past the playground — about two minutes that direction. Restrooms stay open until the park closes at sunset.", textZh: "过了游乐场——往那边走大约两分钟。洗手间开到公园日落关门时。", actionHint: "用head past指路", frequency: "common" },
              { textEn: "Right behind the playground, a short walk that way. They close when the park does — at dusk.", textZh: "就在游乐场后面，往那边走一小段。跟公园一起关——天黑时。", actionHint: "用right behind更具体", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there trash pickup, or should we take our garbage with us?",
            textZh: "有垃圾收集吗，还是我们自己带走？",
          },
          {
            speaker: "them",
            role: "公园管理员",
            textEn: "There are trash cans and recycling bins near the BBQ area and by the parking lot. We do ask everyone to clean up after themselves. Pack it in, pack it out!",
            textZh: "烧烤区和停车场附近有垃圾桶和回收箱。我们请大家自己收拾干净。带来的东西带走！",
            keyPhrases: [
              { en: "recycling bins", zh: "回收箱" },
              { en: "pack it in, pack it out", zh: "带来的东西带走" },
            ],
            alternativeExpressions: [
              { textEn: "We've got trash and recycling bins by the BBQ area and parking lot. Just please clean up when you're done — carry out what you carry in!", textZh: "烧烤区和停车场旁有垃圾桶和回收箱。请走的时候清理干净——带来的东西带走！", actionHint: "用carry out what you carry in", frequency: "common" },
              { textEn: "There are bins for trash and recycling near the grill area and the lot. We ask that everyone leaves their area clean. Whatever you bring in, take it out!", textZh: "烧烤区和停车场附近有垃圾和回收箱。请大家保持区域整洁。带来什么就带走什么！", actionHint: "用leaves their area clean", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Of course. Thanks for the info!",
            textZh: "当然。谢谢告知！",
          },
        ],
      },
      {
        id: "reserve-shelter",
        titleZh: "预约野餐棚",
        titleEn: "Reserving a Picnic Shelter",
        description: "想为大型聚会预约公园的野餐棚",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'd like to reserve a picnic shelter for a birthday party next month. How do I do that?",
            textZh: "我想预约下个月生日派对用的野餐棚。怎么办？",
          },
          {
            speaker: "them",
            role: "公园管理员",
            textEn: "You can reserve online through the parks department website, or I can help you here. How many people are you expecting?",
            textZh: "可以在公园管理局网站在线预约，或者我这里帮你办。大概多少人？",
            keyPhrases: [
              { en: "parks department", zh: "公园管理局" },
              { en: "how many people", zh: "多少人" },
            ],
            alternativeExpressions: [
              { textEn: "You can book through our website, or I can handle it right here. How many guests are you expecting?", textZh: "可以在我们网站上预订，或者我在这里直接帮你办。大概来多少人？", actionHint: "用book和handle it", frequency: "common" },
              { textEn: "Reservations can be made online at the parks department site, or I'll set it up for you now. About how many people will be there?", textZh: "可以在公园管理局网站在线预约，或者我现在就帮你办。大概多少人来？", actionHint: "用set it up for you", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "About 25 to 30 people. We'd need a shelter with electricity for a speaker.",
            textZh: "大概25到30人。需要有电源的棚子，要接音响。",
          },
          {
            speaker: "them",
            role: "公园管理员",
            textEn: "The large shelter by the lake has electrical outlets and can fit up to 50 people. It's $75 for a half-day rental or $125 for the full day.",
            textZh: "湖边的大棚有电源插座，最多容纳50人。半天75美元，全天125美元。",
            keyPhrases: [
              { en: "electrical outlets", zh: "电源插座" },
              { en: "half-day rental", zh: "半天租用" },
            ],
            alternativeExpressions: [
              { textEn: "The lakeside shelter is your best bet — it has power outlets and holds up to 50 people. It's $75 for a half day or $125 for the full day.", textZh: "湖边的棚子最合适——有电源插座，容纳50人。半天75美元，全天125美元。", actionHint: "用best bet推荐", frequency: "common" },
              { textEn: "I'd recommend the large shelter by the lake. It's got electricity and fits 50 comfortably. Half-day rental is $75, or $125 for all day.", textZh: "我推荐湖边的大棚。有电，舒适容纳50人。半天租75美元，全天125美元。", actionHint: "用I'd recommend开头", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Full day would be better. What date is available the weekend of March 20th?",
            textZh: "全天吧。3月20号那个周末有空吗？",
          },
          {
            speaker: "them",
            role: "公园管理员",
            textEn: "Saturday the 20th is taken, but Sunday the 21st is still open. Want me to book that?",
            textZh: "20号周六被订了，21号周日还有。要预订吗？",
            keyPhrases: [
              { en: "taken", zh: "已被预订" },
              { en: "still open", zh: "还有空" },
            ],
            alternativeExpressions: [
              { textEn: "Saturday is already reserved, but Sunday the 21st is available. Shall I lock that in for you?", textZh: "周六已经被预订了，但21号周日还有。要我帮你定下来吗？", actionHint: "用lock that in", frequency: "common" },
              { textEn: "The 20th is booked up, unfortunately. But Sunday the 21st is wide open. Would you like me to reserve it?", textZh: "20号很遗憾订满了。但21号周日完全有空。要我帮你预订吗？", actionHint: "用wide open强调可用", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sunday works. Do we need to pay a deposit?",
            textZh: "周日可以。需要付定金吗？",
          },
          {
            speaker: "them",
            role: "公园管理员",
            textEn: "Yes, a $50 refundable deposit to hold the reservation. You get it back as long as the area is clean and undamaged when you leave.",
            textZh: "要的，50美元可退还的押金来保留预约。离开时场地干净无损就退还。",
            keyPhrases: [
              { en: "refundable deposit", zh: "可退押金" },
              { en: "hold the reservation", zh: "保留预约" },
            ],
            alternativeExpressions: [
              { textEn: "There's a $50 deposit that's fully refundable. As long as you leave the area clean and undamaged, you'll get it all back.", textZh: "有50美元的全额可退押金。只要离开时场地干净无损，全额退还。", actionHint: "先说金额再说条件", frequency: "common" },
              { textEn: "Just a $50 security deposit to secure the booking. You'll get it back when you leave the shelter in good shape.", textZh: "只需50美元保证金来确保预订。离开时棚子状况良好就退还。", actionHint: "用security deposit和secure", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Fair enough. Let's book it.",
            textZh: "合理。订吧。",
          },
          {
            speaker: "them",
            role: "公园管理员",
            textEn: "All set! Here's your confirmation receipt. Enjoy the party!",
            textZh: "办好了！这是确认收据。祝派对愉快！",
            keyPhrases: [
              { en: "confirmation receipt", zh: "确认收据" },
            ],
            alternativeExpressions: [
              { textEn: "You're all booked! Here's your receipt as confirmation. Have a great party!", textZh: "预订好了！这是确认收据。祝派对愉快！", actionHint: "用all booked", frequency: "common" },
              { textEn: "Done! Take this confirmation slip. Hope you have an amazing birthday celebration!", textZh: "办好了！拿好确认单。祝生日庆祝活动精彩！", actionHint: "用confirmation slip", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 公园游乐场 ====================
  {
    id: "daily-life-park-playground",
    category: "daily-life",
    titleZh: "公园游乐场",
    titleEn: "Park Playground",
    description: "带孩子去公园游乐场，和其他家长交流",
    otherRole: "其他家长",
    otherRoleIcon: "🛝",
    flows: [
      {
        id: "basic-playground",
        titleZh: "基本游乐场交流",
        titleEn: "Basic Playground Chat",
        description: "在游乐场和其他家长寒暄",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi! Is this seat taken? My kid is on the swings over there.",
            textZh: "嗨！这位子有人吗？我孩子在那边荡秋千。",
            casualVersion: "Hey, mind if I sit here? That's my kid on the swings.",
          },
          {
            speaker: "them",
            role: "家长",
            textEn: "Go ahead! Mine is the one on the monkey bars. How old is yours?",
            textZh: "请坐！我的孩子在攀爬架那边。你孩子多大了？",
            keyPhrases: [
              { en: "monkey bars", zh: "攀爬架" },
            ],
            alternativeExpressions: [
              { textEn: "Have a seat! My kid is over there on the climbing bars. How old is your little one?", textZh: "请坐！我家孩子在那边爬架子上。你家小朋友多大了？", actionHint: "用climbing bars替代monkey bars", frequency: "common" },
              { textEn: "Sure, sit down! See that one on the monkey bars? That's mine. What age is yours?", textZh: "当然，坐吧！看到攀爬架上那个了吗？是我家的。你家的多大？", actionHint: "用指向的方式介绍", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "She just turned five. We moved here recently, so we're still exploring the parks.",
            textZh: "刚满五岁。我们最近搬来的，还在探索各个公园。",
          },
          {
            speaker: "them",
            role: "家长",
            textEn: "Welcome to the neighborhood! This is a great park. They just renovated the playground last year — new slides and a splash pad for summer.",
            textZh: "欢迎来到这个社区！这个公园很好。去年刚翻新了游乐场——新滑梯和夏天的戏水池。",
            keyPhrases: [
              { en: "renovated", zh: "翻新" },
              { en: "splash pad", zh: "戏水池" },
            ],
            alternativeExpressions: [
              { textEn: "Oh, welcome! You'll love this park. They upgraded the playground last year — brand new slides and a splash pad that opens in summer.", textZh: "哦，欢迎！你会喜欢这个公园的。去年升级了游乐场——全新滑梯和夏天开放的戏水池。", actionHint: "用upgraded替代renovated", frequency: "common" },
              { textEn: "Nice to meet you! This park is one of the best in the area. The playground was just redone last year with new equipment and a summer splash pad.", textZh: "很高兴认识你！这是附近最好的公园之一。游乐场去年刚翻新了，有新设备和夏季戏水池。", actionHint: "用one of the best评价", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "A splash pad? That sounds fun. Is it free?",
            textZh: "戏水池？听起来好玩。免费的吗？",
          },
          {
            speaker: "them",
            role: "家长",
            textEn: "Totally free. It runs from Memorial Day through Labor Day. Just bring towels and sunscreen. It gets crowded on weekends though.",
            textZh: "完全免费。从阵亡将士纪念日到劳动节期间开放。带毛巾和防晒霜就行。不过周末人很多。",
            keyPhrases: [
              { en: "Memorial Day", zh: "阵亡将士纪念日（五月底）" },
              { en: "Labor Day", zh: "劳动节（九月初）" },
            ],
            alternativeExpressions: [
              { textEn: "One hundred percent free! It's open from late May through early September. Just bring towels and sunscreen — weekends can get pretty packed.", textZh: "百分百免费！五月底到九月初开放。带毛巾和防晒霜就行——周末人会很多。", actionHint: "用具体月份替代节日名", frequency: "common" },
              { textEn: "Completely free. Open from Memorial Day to Labor Day. Fair warning though — it gets crowded on weekends, so come early!", textZh: "完全免费。从阵亡将士纪念日到劳动节开放。不过提前说——周末人很多，早点来！", actionHint: "用fair warning提醒", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. Are there any playgroups around here for kids her age?",
            textZh: "好的。附近有适合她这个年龄的游戏小组吗？",
          },
          {
            speaker: "them",
            role: "家长",
            textEn: "There's a mommy-and-me group that meets here on Wednesday mornings. I can add you to our group chat if you want.",
            textZh: "每周三上午有个亲子小组在这里聚会。如果你想的话我可以把你加到群聊里。",
            keyPhrases: [
              { en: "mommy-and-me group", zh: "亲子小组" },
              { en: "group chat", zh: "群聊" },
            ],
            alternativeExpressions: [
              { textEn: "There's a parent-child playgroup every Wednesday morning right here at the park. I'd be happy to add you to our group chat.", textZh: "每周三上午这个公园有亲子游戏小组。我很乐意把你加到群聊里。", actionHint: "用parent-child playgroup", frequency: "common" },
              { textEn: "We have a weekly mommy-and-me meetup on Wednesday mornings. Want me to add you to the chat? Everyone is super friendly.", textZh: "每周三上午有亲子聚会。要我把你加进群聊吗？大家都很友好。", actionHint: "用meetup并强调氛围", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be wonderful! Thank you so much.",
            textZh: "太好了！非常感谢。",
          },
          {
            speaker: "them",
            role: "家长",
            textEn: "No problem! Oh — heads up, the park closes at sunset and there's no lighting, so plan accordingly.",
            textZh: "不客气！哦——提醒一下，公园日落关门，没有照明，所以安排好时间。",
            keyPhrases: [
              { en: "heads up", zh: "提醒一下" },
              { en: "plan accordingly", zh: "相应安排" },
            ],
            alternativeExpressions: [
              { textEn: "Happy to help! Just one thing — the park shuts down at sunset. There are no lights, so make sure to leave before dark.", textZh: "很高兴帮到你！提一件事——公园日落关门。没有灯光，所以天黑前一定要走。", actionHint: "用shuts down替代closes", frequency: "common" },
              { textEn: "Anytime! Oh, one more thing — there's no lighting here, so the park closes at sundown. Plan to wrap up before it gets dark.", textZh: "随时！哦，还有一件事——这里没有照明，所以公园日落关门。天黑前要收摊。", actionHint: "用wrap up表示结束", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "playground-incident",
        titleZh: "游乐场小状况",
        titleEn: "Playground Incident",
        description: "孩子在游乐场发生小摩擦，和其他家长沟通",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "家长",
            textEn: "Excuse me, I think your daughter just pushed my son off the slide. He's crying.",
            textZh: "不好意思，你女儿好像刚把我儿子从滑梯上推下来了。他在哭。",
            keyPhrases: [
              { en: "pushed off", zh: "推下来" },
            ],
            alternativeExpressions: [
              { textEn: "Hi, sorry to bother you, but I think your daughter just shoved my son on the slide. He took a bit of a tumble.", textZh: "你好，不好意思打扰，但你女儿好像刚在滑梯上推了我儿子。他摔了一下。", actionHint: "用shoved和took a tumble", frequency: "common" },
              { textEn: "Excuse me — I don't want to make a big deal, but my son just got pushed off the slide and he's pretty upset.", textZh: "不好意思——我不想小题大做，但我儿子刚从滑梯上被推下来了，很不开心。", actionHint: "用更委婉的开场", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh no, I'm so sorry! Is he okay? Let me talk to her right away.",
            textZh: "天哪，真对不起！他没事吧？我马上去跟她说。",
          },
          {
            speaker: "them",
            role: "家长",
            textEn: "He's fine, just a little scared. No bruises or anything. Kids will be kids, but she should learn to wait her turn.",
            textZh: "他没事，就是吓了一跳。没有擦伤。孩子嘛，但她应该学会排队等候。",
            keyPhrases: [
              { en: "kids will be kids", zh: "孩子嘛（小孩就是这样）" },
              { en: "wait her turn", zh: "排队等候/轮到她再玩" },
            ],
            alternativeExpressions: [
              { textEn: "He's okay — more startled than anything. No injuries. It happens with little kids, but she should learn to take turns.", textZh: "他没事——主要是吓了一跳。没有受伤。小孩子嘛这种事会有，但她应该学会轮流。", actionHint: "用startled替代scared", frequency: "common" },
              { textEn: "No harm done, just a little scare. I know kids are kids, but it would be good if she could wait her turn on the slide.", textZh: "没有受伤，就是吓了一下。我知道孩子就是这样，但如果她能等轮到她再滑就好了。", actionHint: "用no harm done开头", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "You're absolutely right. I'll make sure she apologizes. Sweetie, come here please.",
            textZh: "你说得对。我让她道歉。宝贝，过来一下。",
          },
          {
            speaker: "them",
            role: "家长",
            textEn: "Thank you for handling it. It's no big deal — they're both little. Maybe they can play together nicely now.",
            textZh: "谢谢你处理这件事。没什么大不了的——都是小孩。也许现在他们可以好好一起玩了。",
            keyPhrases: [
              { en: "handling it", zh: "处理这件事" },
              { en: "play together nicely", zh: "好好一起玩" },
            ],
            alternativeExpressions: [
              { textEn: "I appreciate you addressing it so quickly. It's really not a big deal — they're young. Maybe now they can play together nicely.", textZh: "感谢你这么快处理。真的没什么大不了——都还小。也许现在他们能好好一起玩了。", actionHint: "用addressing替代handling", frequency: "common" },
              { textEn: "Thanks for taking care of it. They're just little kids — no worries. Hey, looks like they might even become friends now!", textZh: "谢谢你处理。都是小孩——没什么。嘿，看起来他们说不定还能成朋友呢！", actionHint: "更乐观的展望", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd like that. She's still learning to share and take turns.",
            textZh: "那就好。她还在学习分享和轮流。",
          },
          {
            speaker: "them",
            role: "家长",
            textEn: "Mine too. It's a process. Look, they're already playing together — crisis averted!",
            textZh: "我家的也是。都需要过程。看，他们已经一起玩了——危机解除！",
            keyPhrases: [
              { en: "it's a process", zh: "需要过程" },
              { en: "crisis averted", zh: "危机解除" },
            ],
            alternativeExpressions: [
              { textEn: "Same here — it's all part of growing up. Oh look, they're already best friends! Problem solved.", textZh: "我家的也是——都是成长的一部分。你看，已经成好朋友了！问题解决。", actionHint: "用best friends夸张说法", frequency: "common" },
              { textEn: "Tell me about it — it takes time. Hey, would you look at that? They're playing together now. Crisis over!", textZh: "可不是嘛——需要时间。嘿，你看！他们现在一起玩了。危机解除！", actionHint: "用tell me about it表示共鸣", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Ha, that was fast! Thanks for being so understanding.",
            textZh: "哈，好快！谢谢你这么理解。",
          },
        ],
      },
    ],
  },

  // ==================== 垃圾分类回收 ====================
  {
    id: "daily-life-recycling",
    category: "daily-life",
    titleZh: "垃圾分类回收",
    titleEn: "Recycling",
    description: "了解社区垃圾分类和回收规则",
    otherRole: "邻居",
    otherRoleIcon: "♻️",
    flows: [
      {
        id: "basic-recycling",
        titleZh: "基本回收规则",
        titleEn: "Basic Recycling Rules",
        description: "刚搬来，向邻居了解垃圾分类方法",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just moved in next door. I'm a bit confused about the recycling bins. Which goes where?",
            textZh: "嗨，我刚搬到隔壁。回收箱有点搞不清楚，哪个放哪里？",
            casualVersion: "Hey, I'm your new neighbor. Can you help me figure out the recycling?",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Welcome! So the blue bin is for recycling — paper, cardboard, plastic bottles, and aluminum cans. The green bin is for yard waste and food scraps.",
            textZh: "欢迎！蓝色桶放回收物——纸、纸板、塑料瓶和铝罐。绿色桶放庭院垃圾和食物残渣。",
            keyPhrases: [
              { en: "cardboard", zh: "纸板" },
              { en: "aluminum cans", zh: "铝罐" },
              { en: "yard waste", zh: "庭院垃圾" },
              { en: "food scraps", zh: "食物残渣" },
            ],
            alternativeExpressions: [
              { textEn: "Hi, welcome to the neighborhood! The blue one is recyclables — paper, cardboard, plastics, and cans. Green is for yard waste and food scraps.", textZh: "嗨，欢迎来到社区！蓝色的放可回收物——纸、纸板、塑料和罐头。绿色放庭院垃圾和食物残渣。", actionHint: "用recyclables名词", frequency: "common" },
              { textEn: "Nice to meet you! So here's the breakdown: blue bin for recycling — paper, plastic, aluminum. Green bin for compost and yard trimmings.", textZh: "很高兴认识你！情况是这样：蓝色桶放回收——纸、塑料、铝。绿色桶放堆肥和庭院修剪物。", actionHint: "用breakdown和compost", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "And the black bin is regular trash?",
            textZh: "黑色桶就是普通垃圾？",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Exactly. Regular household waste goes in the black bin. Just make sure you don't put plastic bags in the recycling — that's a common mistake.",
            textZh: "对。普通家庭垃圾放黑色桶。注意别把塑料袋放进回收桶——这是常见的错误。",
            keyPhrases: [
              { en: "household waste", zh: "家庭垃圾" },
              { en: "plastic bags", zh: "塑料袋" },
            ],
            alternativeExpressions: [
              { textEn: "Right. Everything else — regular trash — goes in the black bin. One tip: don't toss plastic bags in the recycling. That's a really common mistake.", textZh: "对。其他普通垃圾放黑色桶。提示一下：塑料袋别放进回收桶，这是很常见的错误。", actionHint: "用toss替代put", frequency: "common" },
              { textEn: "Yep, the black bin is for general household garbage. And heads up — no plastic bags in the blue bin. Lots of people get that wrong.", textZh: "对，黑色桶放一般家庭垃圾。提醒一下——蓝色桶不能放塑料袋。很多人搞错。", actionHint: "用heads up提醒", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. What day is pickup?",
            textZh: "知道了。哪天来收？",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Trash and recycling are picked up every Tuesday. Green waste is every other Friday. Put the bins out the night before by the curb.",
            textZh: "垃圾和回收每周二收。绿色垃圾隔周五收。前一天晚上把桶推到路边。",
            keyPhrases: [
              { en: "every other Friday", zh: "隔一个周五" },
              { en: "by the curb", zh: "在路边" },
            ],
            alternativeExpressions: [
              { textEn: "Collection day is Tuesday for trash and recycling. Green waste comes every other Friday. Just wheel the bins out to the curb the night before.", textZh: "垃圾和回收每周二收。绿色垃圾隔周五收。前一天晚上把桶推到路边就行。", actionHint: "用collection day和wheel out", frequency: "common" },
              { textEn: "Tuesday is your pickup day for trash and recycling. The green bin goes out every other Friday. Make sure the bins are curbside by the evening before.", textZh: "周二是垃圾和回收收运日。绿色桶隔一个周五出去。确保前一天晚上推到路边。", actionHint: "用curbside替代by the curb", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What about large items like old furniture?",
            textZh: "大件物品比如旧家具怎么办？",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "You can schedule a bulky item pickup through the city's website. They do it once a month for free — up to three items. Or you can take stuff to the dump yourself.",
            textZh: "可以在市政网站预约大件收运。每月免费一次——最多三件。或者你自己拉去垃圾场。",
            keyPhrases: [
              { en: "bulky item pickup", zh: "大件收运" },
              { en: "the dump", zh: "垃圾场/填埋场" },
            ],
            alternativeExpressions: [
              { textEn: "The city offers free bulky item collection once a month — up to three pieces. Schedule it on their website. Or you can haul it to the transfer station yourself.", textZh: "市政每月提供一次免费大件收运——最多三件。在他们网站上预约。或者你自己拉到转运站。", actionHint: "用transfer station替代dump", frequency: "common" },
              { textEn: "For big stuff like furniture, book a pickup through the city website. It's free once a month, three items max. You can also drop things off at the dump yourself if you're in a hurry.", textZh: "大件比如家具，在市政网站上预约收运。每月免费一次，最多三件。着急的话也可以自己送到垃圾场。", actionHint: "用book a pickup", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's really helpful. Thanks for walking me through it!",
            textZh: "太有用了。谢谢你帮我讲解！",
          },
        ],
      },
      {
        id: "hazardous-waste",
        titleZh: "有害废物处理",
        titleEn: "Hazardous Waste Disposal",
        description: "了解电池、油漆等有害废物的处理方式",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I have a bunch of old paint cans and some dead batteries. Can I just throw those in the trash?",
            textZh: "我有一堆旧油漆罐和废电池。能直接扔垃圾桶吗？",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "No, definitely not! Paint and batteries are considered hazardous waste. You need to take them to a special drop-off location.",
            textZh: "不行！油漆和电池属于有害废物。需要送到专门的回收点。",
            keyPhrases: [
              { en: "hazardous waste", zh: "有害废物" },
              { en: "drop-off location", zh: "回收点/投放点" },
            ],
            alternativeExpressions: [
              { textEn: "Oh no, those can't go in the regular trash! Paint and batteries are hazardous materials. There's a special facility where you drop them off.", textZh: "不行，那些不能放普通垃圾桶！油漆和电池是有害材料。有专门的设施可以送去。", actionHint: "用hazardous materials替代waste", frequency: "common" },
              { textEn: "Absolutely not — those are classified as household hazardous waste. You'll need to bring them to a designated collection point.", textZh: "绝对不行——那些属于家庭有害废物。需要送到指定的收集点。", actionHint: "用designated collection point", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Where's the nearest drop-off?",
            textZh: "最近的回收点在哪？",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "There's a household hazardous waste facility on Oak Road. It's open Saturdays from 9 to 3. They take paint, batteries, old electronics, motor oil — all that stuff.",
            textZh: "橡树路上有个家庭有害废物处理站。周六9点到3点开放。收油漆、电池、旧电子产品、机油——这些都收。",
            keyPhrases: [
              { en: "household hazardous waste facility", zh: "家庭有害废物处理站" },
              { en: "motor oil", zh: "机油" },
              { en: "old electronics", zh: "旧电子产品" },
            ],
            alternativeExpressions: [
              { textEn: "The drop-off center is on Oak Road, open Saturdays 9 to 3. They accept paint, batteries, electronics, motor oil — basically anything toxic.", textZh: "回收中心在橡树路，周六9点到3点开放。收油漆、电池、电子产品、机油——基本上所有有毒物品。", actionHint: "用drop-off center和toxic", frequency: "common" },
              { textEn: "There's a hazardous waste collection site on Oak Road. Saturday hours are 9 AM to 3 PM. They take paint, batteries, old electronics, used motor oil — the works.", textZh: "橡树路有个有害废物收集站。周六9点到下午3点开放。收油漆、电池、旧电子产品、用过的机油——什么都收。", actionHint: "用the works表示全部", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a fee?",
            textZh: "收费吗？",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "It's free for residents. Just bring a utility bill to prove your address. They'll help you unload everything.",
            textZh: "居民免费。带水电费账单证明地址就行。他们会帮你卸货。",
            keyPhrases: [
              { en: "unload", zh: "卸货" },
            ],
            alternativeExpressions: [
              { textEn: "No charge for residents. Just show a utility bill for address verification, and they'll even help you unload your car.", textZh: "居民免费。出示水电费账单验证地址就行，他们还会帮你卸车。", actionHint: "用address verification", frequency: "common" },
              { textEn: "Totally free if you live here. Bring proof of address like a utility bill. The staff there will help you carry everything in.", textZh: "住在这里就免费。带地址证明比如水电费账单。那里的工作人员会帮你把东西搬进去。", actionHint: "用proof of address", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What about the old TV in my garage? Is that e-waste?",
            textZh: "车库里的旧电视呢？算电子垃圾吗？",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Yes, TVs are e-waste. Same facility handles those, or you can check if Best Buy does a trade-in or recycling event. They sometimes take old electronics for free.",
            textZh: "是的，电视是电子垃圾。同一个处理站收，或者你看看Best Buy有没有以旧换新或回收活动。他们有时免费回收旧电子产品。",
            keyPhrases: [
              { en: "e-waste", zh: "电子垃圾" },
              { en: "trade-in", zh: "以旧换新" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, TVs count as electronic waste. You can take it to the same place on Oak Road, or check if Best Buy has a recycling program — they sometimes take old electronics for free.", textZh: "是的，电视算电子垃圾。可以送到橡树路同一个地方，或者看看Best Buy有没有回收计划——他们有时免费收旧电子产品。", actionHint: "用count as替代are", frequency: "common" },
              { textEn: "TVs are definitely e-waste. The facility on Oak Road takes them, or you might try Best Buy — they occasionally run free electronics recycling events.", textZh: "电视肯定算电子垃圾。橡树路那个处理站收，或者试试Best Buy——他们偶尔有免费电子产品回收活动。", actionHint: "用occasionally run", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great tips. I'll head over there this Saturday.",
            textZh: "好建议。这周六我去一趟。",
          },
        ],
      },
    ],
  },

  // ==================== 垃圾收运 ====================
  {
    id: "daily-life-garbage-pickup",
    category: "daily-life",
    titleZh: "垃圾收运问题",
    titleEn: "Garbage Pickup Issue",
    description: "垃圾没被收走或需要更换垃圾桶，联系市政服务",
    otherRole: "市政服务客服",
    otherRoleIcon: "🗑️",
    flows: [
      {
        id: "missed-pickup",
        titleZh: "垃圾漏收",
        titleEn: "Missed Pickup",
        description: "垃圾车没来收垃圾，打电话投诉",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, my trash wasn't picked up today. It's Tuesday, which is our regular collection day.",
            textZh: "你好，我的垃圾今天没被收走。今天是周二，是我们的正常收运日。",
            casualVersion: "Hey, the garbage truck skipped my house today.",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "I'm sorry about that. Can I have your address? Let me check the route status for your area.",
            textZh: "很抱歉。请告诉我您的地址？我查一下您那片区域的收运路线状态。",
            keyPhrases: [
              { en: "route status", zh: "路线状态" },
              { en: "collection day", zh: "收运日" },
            ],
            alternativeExpressions: [
              { textEn: "I apologize for the inconvenience. What's your address? I'll look into what happened with your route today.", textZh: "给您添麻烦了，抱歉。您的地址是？我查一下今天您那条线路怎么了。", actionHint: "用apologize和look into", frequency: "common" },
              { textEn: "Sorry about that. Can you give me your street address? Let me pull up the collection schedule for your area.", textZh: "抱歉。能告诉我您的街道地址吗？我查一下您那个区域的收运安排。", actionHint: "用pull up和collection schedule", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's 789 Maple Drive. I had the bin out by the curb last night like always.",
            textZh: "枫叶路789号。昨晚像平常一样把桶推到路边了。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "I see — there was a truck breakdown on your route this morning. We're sending a backup crew this afternoon. Your trash should be collected by 5 PM.",
            textZh: "我看到了——今天早上您那条路线的垃圾车坏了。我们下午会派补收车。5点前应该会收走。",
            keyPhrases: [
              { en: "truck breakdown", zh: "垃圾车故障" },
              { en: "backup crew", zh: "补收车/替补组" },
            ],
            alternativeExpressions: [
              { textEn: "I found the issue — one of the trucks on your route broke down this morning. A backup crew is heading out this afternoon. Your trash should be picked up by 5 PM.", textZh: "找到原因了——今早你那条线路的一辆车坏了。补收组下午出发。5点前应该会收走。", actionHint: "用found the issue开头", frequency: "common" },
              { textEn: "Ah, I see what happened. There was a mechanical issue with the truck on your route. We're sending a replacement crew out today — expect pickup by 5 PM.", textZh: "啊，我知道怎么回事了。你那条线路的车出了机械故障。我们今天派替补组——预计5点前收走。", actionHint: "用mechanical issue替代breakdown", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, should I leave the bin out?",
            textZh: "好的，我需要把桶留在外面吗？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Yes, please leave it at the curb. If it's still not collected by 6 PM, call us back and we'll schedule a special pickup for tomorrow.",
            textZh: "是的，请留在路边。如果6点还没收，请再打来，我们会安排明天特别收运。",
            keyPhrases: [
              { en: "special pickup", zh: "特别收运" },
            ],
            alternativeExpressions: [
              { textEn: "Yes, keep it curbside. If it hasn't been picked up by 6 PM, give us another call and we'll arrange a next-day pickup.", textZh: "是的，留在路边。如果6点还没收，再打来，我们安排次日收运。", actionHint: "用curbside和next-day pickup", frequency: "common" },
              { textEn: "Please leave the bin out. If the crew still hasn't come by 6, call back and we'll set up a special collection for tomorrow morning.", textZh: "请把桶留在外面。如果6点工作人员还没来，打回来，我们安排明早特别收运。", actionHint: "用special collection", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Will do. Does this happen often?",
            textZh: "好的。这种情况经常发生吗？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Rarely. But if you want updates on schedule changes, you can sign up for text alerts on our website.",
            textZh: "很少。但如果您想收到时间变更通知，可以在我们网站上注册短信提醒。",
            keyPhrases: [
              { en: "text alerts", zh: "短信提醒" },
              { en: "schedule changes", zh: "时间变更" },
            ],
            alternativeExpressions: [
              { textEn: "It doesn't happen often. If you'd like to stay informed about any changes, you can sign up for text notifications on our website.", textZh: "不常发生。如果想了解任何变动，可以在我们网站注册短信通知。", actionHint: "用stay informed", frequency: "common" },
              { textEn: "Very uncommon. But we do have a text alert system — just register on our site and you'll get notified of any schedule disruptions.", textZh: "非常少见。但我们有短信提醒系统——在网站上注册就能收到任何时间变更通知。", actionHint: "用schedule disruptions", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good idea. I'll sign up. Thanks for the help.",
            textZh: "好主意。我去注册。谢谢帮忙。",
          },
        ],
      },
      {
        id: "replace-bin",
        titleZh: "更换垃圾桶",
        titleEn: "Replacing a Damaged Bin",
        description: "垃圾桶损坏需要更换",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I need to request a new recycling bin. The lid on mine is cracked and it doesn't close properly.",
            textZh: "我想申请一个新的回收桶。我的盖子裂了，关不上。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "I can help with that. Was it damaged during collection or from normal wear and tear?",
            textZh: "我可以帮您。是收运时弄坏的还是正常磨损？",
            keyPhrases: [
              { en: "wear and tear", zh: "磨损/损耗" },
              { en: "during collection", zh: "收运过程中" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, I can arrange that. Do you know if it broke during pickup, or has it just worn out over time?", textZh: "当然，我可以安排。知道是收运时弄坏的，还是时间久了自然损耗？", actionHint: "用broke during pickup", frequency: "common" },
              { textEn: "No problem. Was the damage caused by our truck during collection, or is it regular wear and tear?", textZh: "没问题。是我们的卡车收运时弄坏的，还是正常磨损？", actionHint: "用damage caused by更正式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I think the truck cracked it when they dumped it. It was fine before last week's pickup.",
            textZh: "我觉得是垃圾车倒桶时弄裂的。上周收运前还好好的。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "If it was damaged by our crew, we'll replace it at no charge. I'll put in a work order. A new bin should be delivered within five to seven business days.",
            textZh: "如果是我们工作人员弄坏的，免费更换。我提交一个工单。新桶五到七个工作日内送到。",
            keyPhrases: [
              { en: "at no charge", zh: "免费" },
              { en: "work order", zh: "工单" },
              { en: "business days", zh: "工作日" },
            ],
            alternativeExpressions: [
              { textEn: "If our crew caused the damage, the replacement is on us — no cost to you. I'll submit a work order and a new bin should arrive within five to seven business days.", textZh: "如果是我们工作人员造成的，免费更换。我提交工单，新桶五到七个工作日内送到。", actionHint: "用on us表示免费", frequency: "common" },
              { textEn: "Since it was damaged during our collection, we'll replace it free of charge. I'm putting in a work order now — expect the new one in about a week.", textZh: "既然是收运时损坏的，我们免费更换。我现在提交工单——大约一周内收到新的。", actionHint: "用free of charge", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What should I do with the old one?",
            textZh: "旧的怎么处理？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Leave it at the curb on your next collection day with a note that says 'swap.' The driver will take the old one and leave the new one.",
            textZh: "下次收运日放到路边，贴个写着 'swap'（更换）的纸条。司机会收走旧的，放下新的。",
            keyPhrases: [
              { en: "swap", zh: "更换/调换" },
            ],
            alternativeExpressions: [
              { textEn: "On your next pickup day, set the old bin out with a note saying 'swap.' The driver will take it and leave the new one.", textZh: "下次收运日把旧桶放出去，贴张写着'swap'（更换）的纸条。司机会收走旧的放下新的。", actionHint: "用set out替代leave", frequency: "common" },
              { textEn: "Just put it out on your regular collection day and stick a 'swap' label on it. Our driver will exchange it for the new bin.", textZh: "正常收运日放出去，贴个写着'swap'的标签。司机会用新桶换走旧的。", actionHint: "用exchange替代take/leave", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I also get a bigger trash bin? The standard one isn't big enough for our family.",
            textZh: "能换个大号垃圾桶吗？标准的对我们家来说不够大。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "We offer 64-gallon and 96-gallon bins. The larger size is an extra $5 per month on your utility bill. Would you like to upgrade?",
            textZh: "我们有64加仑和96加仑的桶。大号每月水电费账单多收5美元。要升级吗？",
            keyPhrases: [
              { en: "gallon", zh: "加仑" },
              { en: "utility bill", zh: "水电费账单" },
            ],
            alternativeExpressions: [
              { textEn: "We have two sizes — 64-gallon and 96-gallon. The bigger one adds $5 a month to your utility bill. Want to go with the 96?", textZh: "两种尺寸——64加仑和96加仑。大号每月水电费多5美元。要96的吗？", actionHint: "直接问是否选大号", frequency: "common" },
              { textEn: "Sure, we offer a 64-gallon or a 96-gallon option. Upgrading to the larger bin is just an extra $5 monthly on your utility bill.", textZh: "当然，有64加仑和96加仑的选择。升级到大号每月水电费只多5美元。", actionHint: "用option和upgrading", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, the 96-gallon please. Thank you for your help.",
            textZh: "好的，要96加仑的。谢谢帮忙。",
          },
        ],
      },
    ],
  },

  // ==================== 水电费 ====================
  {
    id: "daily-life-utility-bill",
    category: "daily-life",
    titleZh: "水电费缴纳",
    titleEn: "Paying Utility Bills",
    description: "了解水电费账单、缴费方式和节能计划",
    otherRole: "电力公司客服",
    otherRoleIcon: "💡",
    flows: [
      {
        id: "basic-bill",
        titleZh: "看懂账单",
        titleEn: "Understanding Your Bill",
        description: "第一次收到水电费账单，搞不清楚各项费用",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just got my first electric bill and it seems really high. Can you help me understand the charges?",
            textZh: "你好，我刚收到第一张电费单，好像很高。能帮我看看各项收费吗？",
            casualVersion: "Hey, my electric bill is way higher than I expected. What's going on?",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Of course. Let me pull up your account. Your total is $185. That includes your electricity usage at $0.14 per kilowatt-hour, plus delivery charges and taxes.",
            textZh: "当然。我调出您的账户。总共185美元。包括每千瓦时0.14美元的电力使用费，加上输配电费和税。",
            keyPhrases: [
              { en: "kilowatt-hour", zh: "千瓦时" },
              { en: "delivery charges", zh: "输配电费" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing. Let me bring up your account. Your total this month is $185 — that breaks down to electricity usage at $0.14 per kilowatt-hour, plus delivery fees and taxes.", textZh: "当然。我调出您的账户。这个月总共185美元——电费每千瓦时0.14美元，加上输配电费和税。", actionHint: "用breaks down to", frequency: "common" },
              { textEn: "Happy to help. Pulling up your account now... So your bill is $185 this month. That covers energy charges at 14 cents per kilowatt-hour, delivery charges, and applicable taxes.", textZh: "很乐意帮忙。正在调出您的账户……这个月账单185美元。包括每千瓦时14美分的用电费、输配电费和相关税费。", actionHint: "用applicable taxes更正式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What are delivery charges exactly?",
            textZh: "输配电费具体是什么？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "That's the cost of maintaining the power lines and infrastructure that bring electricity to your home. It's a fixed charge regardless of how much energy you use.",
            textZh: "就是维护电线和基础设施把电送到您家的费用。不管用多少电，这是固定收费。",
            keyPhrases: [
              { en: "infrastructure", zh: "基础设施" },
              { en: "fixed charge", zh: "固定收费" },
            ],
            alternativeExpressions: [
              { textEn: "Delivery charges cover the upkeep of power lines and grid infrastructure. It's a flat fee — same every month regardless of your usage.", textZh: "输配电费用于维护电线和电网基础设施。是固定费用——每月一样，不管用多少电。", actionHint: "用upkeep和grid", frequency: "common" },
              { textEn: "That's for the electrical grid maintenance — keeping the power lines and equipment that deliver electricity to you in working order. It doesn't change based on how much you use.", textZh: "那是电网维护费——维持给你送电的电线和设备正常运行。不随你的用量变化。", actionHint: "解释得更详细", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I see. Can I set up automatic payments so I don't miss a due date?",
            textZh: "明白了。能设置自动缴费吗？免得错过缴费日期。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Absolutely. You can set up autopay through our website or app. You can pay from a bank account or credit card. We also offer a budget billing plan that averages your costs over 12 months.",
            textZh: "当然。可以在网站或App上设置自动缴费。支持银行账户或信用卡。我们还有预算计费计划，把12个月的费用平均分摊。",
            keyPhrases: [
              { en: "autopay", zh: "自动缴费" },
              { en: "budget billing plan", zh: "预算计费计划" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! Set up auto-pay on our website or app — works with a bank account or credit card. We also have a level billing option that spreads your costs evenly over 12 months.", textZh: "当然可以！在网站或App上设置自动缴费——支持银行账户或信用卡。还有均衡计费选项，把费用平均分摊到12个月。", actionHint: "用level billing替代budget billing", frequency: "common" },
              { textEn: "Yes, autopay is easy to set up through our site or mobile app. You can link a bank account or card. We also offer budget billing to even out seasonal spikes.", textZh: "可以，自动缴费在网站或手机App上很容易设置。可以关联银行账户或卡。我们还有预算计费来平衡季节性波动。", actionHint: "提到seasonal spikes", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What's the due date each month?",
            textZh: "每月几号到期？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Your bill is due on the 15th of each month. You have a 10-day grace period after that before any late fees apply.",
            textZh: "每月15号到期。之后有10天宽限期，过了才收滞纳金。",
            keyPhrases: [
              { en: "grace period", zh: "宽限期" },
              { en: "late fees", zh: "滞纳金" },
            ],
            alternativeExpressions: [
              { textEn: "Payment is due by the 15th. After that, you've got a 10-day grace period before any late fees kick in.", textZh: "每月15号前付款。之后有10天宽限期，过了才产生滞纳金。", actionHint: "用kick in表示生效", frequency: "common" },
              { textEn: "The due date is the 15th of every month. We give you 10 extra days after that — no penalties during the grace period.", textZh: "每月15号到期。之后给你10天额外时间——宽限期内没有罚款。", actionHint: "用no penalties强调", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll set up autopay today. Thanks for explaining everything.",
            textZh: "我今天就设置自动缴费。谢谢你解释这些。",
          },
        ],
      },
      {
        id: "high-bill-dispute",
        titleZh: "账单异常",
        titleEn: "Disputing a High Bill",
        description: "账单异常偏高，怀疑有问题需要申诉",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "My bill this month is almost double what it usually is, but I haven't changed anything. Something must be wrong.",
            textZh: "这个月账单几乎是平时的两倍，但我什么都没变。肯定有问题。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "I understand your concern. Let me look at your usage history. I see your consumption jumped from 800 kWh to 1,500 kWh. Was your heating or cooling system running more than usual?",
            textZh: "理解您的担心。让我看看用电记录。您的用量从800千瓦时跳到了1500千瓦时。暖气或空调用得比平时多吗？",
            keyPhrases: [
              { en: "consumption", zh: "用量/消耗" },
              { en: "kWh", zh: "千瓦时" },
            ],
            alternativeExpressions: [
              { textEn: "I hear you. Let me check your usage records. I see a big jump — from 800 to 1,500 kWh. Have you been running the heater or AC more than usual?", textZh: "我理解。我查查你的用量记录。看到大幅增长——从800跳到1500千瓦时。暖气或空调用得比平时多吗？", actionHint: "用big jump描述变化", frequency: "common" },
              { textEn: "That does seem unusual. Looking at your account... your consumption nearly doubled this month — 800 to 1,500 kWh. Any changes in your heating or cooling usage?", textZh: "确实不太正常。看看您的账户……这个月用量几乎翻倍——800到1500千瓦时。暖气或空调使用有变化吗？", actionHint: "用nearly doubled强调", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Not really. Could the meter be broken?",
            textZh: "没有啊。会不会是电表坏了？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "It's possible. I can schedule a free meter test. If the meter is faulty, we'll adjust your bill. We can also send a technician to check for any energy leaks in your home.",
            textZh: "有可能。我可以安排免费电表检测。如果电表有问题，我们会调整账单。也可以派技术人员检查家里有没有能源泄漏。",
            keyPhrases: [
              { en: "meter test", zh: "电表检测" },
              { en: "faulty", zh: "有故障的" },
              { en: "energy leaks", zh: "能源泄漏" },
            ],
            alternativeExpressions: [
              { textEn: "That's definitely possible. We can send someone to test your meter at no charge. If it turns out to be faulty, we'll correct your bill. We can also inspect your home for energy leaks.", textZh: "确实有可能。我们可以免费派人检测电表。如果确实有故障，我们会修正账单。也可以检查家里有没有能源泄漏。", actionHint: "用correct your bill", frequency: "common" },
              { textEn: "Could be. Let me set up a complimentary meter inspection. If we find a problem, your bill gets adjusted. And if you'd like, we can check for any energy waste in your home too.", textZh: "有可能。我安排一次免费电表检查。如果发现问题，账单会调整。如果你愿意，我们也可以检查家里有没有能源浪费。", actionHint: "用complimentary和energy waste", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please test the meter. In the meantime, do I still have to pay the full amount?",
            textZh: "好的，请检测电表。那这段时间我还需要付全款吗？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "You can pay your average amount for now, and we'll hold the difference until the investigation is complete. No late fees will be charged during the review.",
            textZh: "您可以先按平均金额付，差额我们暂时挂起，等调查完成。审查期间不收滞纳金。",
            keyPhrases: [
              { en: "hold the difference", zh: "暂挂差额" },
              { en: "investigation", zh: "调查" },
            ],
            alternativeExpressions: [
              { textEn: "For now, just pay what you normally would. We'll hold the difference until the review is done. And don't worry — no late fees during the investigation.", textZh: "目前按正常金额付就行。差额我们暂挂，等审查完成。放心——调查期间不收滞纳金。", actionHint: "用what you normally would", frequency: "common" },
              { textEn: "Go ahead and pay your usual average. The extra amount will be on hold pending the investigation. No late charges will apply while we look into it.", textZh: "照常付平均金额就好。多出的部分会暂挂等调查结果。调查期间不会产生滞纳金。", actionHint: "用pending the investigation", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How long does the investigation take?",
            textZh: "调查需要多久？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Usually seven to ten business days. We'll email you the results and any billing adjustments. Is the email on file still current?",
            textZh: "通常七到十个工作日。结果和账单调整会发邮件通知您。档案里的邮箱还在用吗？",
            keyPhrases: [
              { en: "billing adjustments", zh: "账单调整" },
              { en: "on file", zh: "档案里的/登记的" },
            ],
            alternativeExpressions: [
              { textEn: "Typically a week or two. We'll send you an email with the findings and any billing corrections. Is the email address we have on file still good?", textZh: "通常一到两周。会把结果和账单修正发邮件给您。我们存档的邮箱还能用吗？", actionHint: "用findings和corrections", frequency: "common" },
              { textEn: "The whole process takes about seven to ten business days. You'll get the results and any adjustments by email. Quick check — is your email address up to date in our system?", textZh: "整个过程大约七到十个工作日。结果和调整会通过邮件发送。确认一下——您在系统里的邮箱是最新的吗？", actionHint: "用up to date", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, that email is correct. Thank you for looking into this.",
            textZh: "是的，邮箱没变。谢谢你调查这件事。",
          },
        ],
      },
    ],
  },

  // ==================== 网络安装 ====================
  {
    id: "daily-life-internet-setup",
    category: "daily-life",
    titleZh: "家庭网络安装",
    titleEn: "Home Internet Setup",
    description: "搬新家后办理宽带网络，选择套餐和预约安装",
    otherRole: "网络运营商客服",
    otherRoleIcon: "📡",
    flows: [
      {
        id: "basic-signup",
        titleZh: "基本办理",
        titleEn: "Basic Sign-up",
        description: "新家办理宽带，了解套餐和安装流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just moved and I need to set up internet service at my new place.",
            textZh: "你好，我刚搬家，需要在新住处开通网络。",
            casualVersion: "Hey, I need to get internet hooked up at my new apartment.",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Welcome! Let me check what's available at your address. What's the street address?",
            textZh: "欢迎！我查查您的地址能用什么套餐。地址是？",
            keyPhrases: [
              { en: "available at your address", zh: "您地址可用的" },
            ],
            alternativeExpressions: [
              { textEn: "Great, let's get you connected! What's your street address? I'll see what plans we can offer at your location.", textZh: "好的，帮你开通网络！街道地址是什么？我看看你那里有什么套餐。", actionHint: "用get you connected", frequency: "common" },
              { textEn: "Happy to help! Let me look up your address to see which internet options are available. What's the full address?", textZh: "很高兴帮忙！我查一下你的地址看有哪些网络选择。完整地址是什么？", actionHint: "用look up和internet options", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's 321 Elm Street, Apartment 4A.",
            textZh: "榆树街321号，4A公寓。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Great news — your building is fiber-ready. We have three plans: 100 Mbps for $40 a month, 300 Mbps for $60, and gigabit for $80. All with no data caps.",
            textZh: "好消息——您的楼已铺好光纤。我们有三个套餐：100Mbps月付40美元，300Mbps月付60美元，千兆月付80美元。都没有流量上限。",
            keyPhrases: [
              { en: "fiber-ready", zh: "已铺好光纤" },
              { en: "Mbps", zh: "兆比特每秒" },
              { en: "data caps", zh: "流量上限" },
            ],
            alternativeExpressions: [
              { textEn: "Good news — fiber is available at your address! We've got three options: 100 Mbps at $40 a month, 300 Mbps at $60, or a gig for $80. No data caps on any of them.", textZh: "好消息——你的地址有光纤！三个选择：100Mbps月付40，300Mbps月付60，千兆月付80。都没有流量限制。", actionHint: "用options替代plans", frequency: "common" },
              { textEn: "You're in luck — your building supports fiber! Plans start at $40 for 100 Mbps, $60 for 300 Mbps, or $80 for gigabit speeds. All unlimited, no data caps.", textZh: "你很幸运——你的楼支持光纤！套餐从100Mbps的40美元起，300Mbps的60美元，或千兆80美元。全部无限，没有流量上限。", actionHint: "用you're in luck开头", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The 300 Mbps plan sounds good. Is there a contract or can I cancel anytime?",
            textZh: "300Mbps的套餐不错。有合同约束吗，还是随时能取消？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "No contract — it's month to month. There is a one-time installation fee of $50, but we're running a promotion right now with free installation.",
            textZh: "没有合同——按月付费。有一次性安装费50美元，但现在有促销活动，免安装费。",
            keyPhrases: [
              { en: "month to month", zh: "按月付费" },
              { en: "installation fee", zh: "安装费" },
              { en: "promotion", zh: "促销活动" },
            ],
            alternativeExpressions: [
              { textEn: "It's all month-to-month, no contract required. Installation is normally $50, but we're waiving that right now with our current promotion.", textZh: "全部按月付费，不需要合同。安装费通常50美元，但目前促销活动免安装费。", actionHint: "用waiving替代free", frequency: "common" },
              { textEn: "No long-term commitment — cancel anytime. There's usually a $50 setup fee, but lucky you, we've got a promo running with free installation.", textZh: "没有长期约束——随时取消。通常有50美元安装费，但你运气好，正好有免安装费的促销。", actionHint: "用no long-term commitment", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Nice! Does the plan include a router, or do I need my own?",
            textZh: "太好了！套餐包含路由器吗，还是需要自己买？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "We provide a modem-router combo for free. Or if you prefer to use your own, you'll save $10 a month since there's no equipment rental fee.",
            textZh: "我们免费提供猫和路由器一体机。如果你用自己的，每月省10美元的设备租用费。",
            keyPhrases: [
              { en: "modem-router combo", zh: "猫和路由器一体机" },
              { en: "equipment rental fee", zh: "设备租用费" },
            ],
            alternativeExpressions: [
              { textEn: "We include a modem-router combo at no extra cost. If you use your own equipment instead, you save $10 a month — no rental fee.", textZh: "我们免费提供猫和路由器一体机。如果你用自己的设备，每月省10美元的租用费。", actionHint: "用at no extra cost", frequency: "common" },
              { textEn: "A gateway device is included free. But if you'd rather use your own router, that's fine too — you'll save $10 monthly since there's no equipment charge.", textZh: "免费包含网关设备。但如果你想用自己的路由器也行——每月省10美元设备费。", actionHint: "用gateway device", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll use your equipment for now. When can the technician come?",
            textZh: "先用你们的设备吧。技术人员什么时候能来装？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "The earliest available slot is this Thursday between 10 AM and noon. Does that work?",
            textZh: "最早的时间是这周四上午10点到中午。可以吗？",
            keyPhrases: [
              { en: "available slot", zh: "可选时间段" },
            ],
            alternativeExpressions: [
              { textEn: "The soonest I can get a tech out is Thursday, 10 AM to noon. Does that window work for you?", textZh: "最早能派技术员的时间是周四上午10点到中午。这个时间段可以吗？", actionHint: "用get a tech out", frequency: "common" },
              { textEn: "We have an opening this Thursday morning, 10 to 12. Would that time slot be convenient?", textZh: "这周四上午10到12有空档。这个时间方便吗？", actionHint: "用time slot替代window", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thursday is perfect. I'll be home.",
            textZh: "周四没问题。我在家。",
          },
        ],
      },
      {
        id: "troubleshoot-speed",
        titleZh: "网速问题排查",
        titleEn: "Troubleshooting Slow Speed",
        description: "网速慢，打电话给运营商排查",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "My internet has been really slow the past few days. I'm paying for 300 Mbps but only getting around 20.",
            textZh: "过去几天网速特别慢。我付的是300Mbps的套餐，但实际只有20左右。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "I'm sorry to hear that. Let me run a diagnostic on your connection. Have you tried restarting your modem and router?",
            textZh: "很抱歉。我给您的连接做个诊断。您试过重启猫和路由器吗？",
            keyPhrases: [
              { en: "run a diagnostic", zh: "做诊断" },
              { en: "restarting", zh: "重启" },
            ],
            alternativeExpressions: [
              { textEn: "That's frustrating. Let me check your connection from our end. Have you tried power-cycling your modem and router?", textZh: "那确实烦人。让我从我们这边检查一下你的连接。你试过重新开关猫和路由器吗？", actionHint: "用power-cycling替代restarting", frequency: "common" },
              { textEn: "I'm sorry about that. I'll run some tests on your line right now. Quick question — have you restarted the modem recently?", textZh: "很抱歉。我现在就对你的线路做些测试。快问一下——最近重启过猫吗？", actionHint: "用run some tests on your line", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I've restarted everything twice. Still slow.",
            textZh: "试过了，重启两次了。还是慢。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "I see some signal issues on your line. Are you connected via Wi-Fi or Ethernet cable? Wi-Fi speeds can drop if there's interference.",
            textZh: "我看到您的线路有信号问题。您是用Wi-Fi还是网线连的？如果有干扰，Wi-Fi速度会下降。",
            keyPhrases: [
              { en: "signal issues", zh: "信号问题" },
              { en: "Ethernet cable", zh: "网线" },
              { en: "interference", zh: "干扰" },
            ],
            alternativeExpressions: [
              { textEn: "I'm picking up some signal problems on your connection. Are you using Wi-Fi or a wired Ethernet connection? Wi-Fi can slow down from interference.", textZh: "我检测到你的连接有信号问题。你是用Wi-Fi还是有线网络？Wi-Fi可能因为干扰变慢。", actionHint: "用picking up替代see", frequency: "common" },
              { textEn: "There's definitely something off with your signal. Quick question — are you on Wi-Fi or plugged in with an Ethernet cable? Interference can really hurt Wi-Fi speeds.", textZh: "你的信号确实有问题。快问一下——你是用Wi-Fi还是插网线？干扰会严重影响Wi-Fi速度。", actionHint: "用something off with", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm on Wi-Fi. But it was fine before — this just started happening.",
            textZh: "用的Wi-Fi。但之前一直没问题——刚开始出这情况。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "I'm seeing some firmware updates that need to be applied to your modem. I can push those remotely right now. It'll take about five minutes and your internet will go out briefly.",
            textZh: "我看到您的猫需要更新固件。我现在可以远程推送。大约五分钟，期间网络会短暂中断。",
            keyPhrases: [
              { en: "firmware updates", zh: "固件更新" },
              { en: "push remotely", zh: "远程推送" },
            ],
            alternativeExpressions: [
              { textEn: "I found the issue — your modem needs a firmware update. I can push it remotely right now. Your internet will drop for about five minutes.", textZh: "找到问题了——你的猫需要固件更新。我现在可以远程推送。网络会断大约五分钟。", actionHint: "用found the issue开头", frequency: "common" },
              { textEn: "Looks like there's a pending firmware update on your modem. Let me apply it from here — it'll take about five minutes, and your connection will go down briefly.", textZh: "看起来你的猫有待处理的固件更新。我从这边操作——大约五分钟，连接会短暂中断。", actionHint: "用pending update", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Go ahead. I'll wait.",
            textZh: "好的，请操作。我等着。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Done! Can you try a speed test now? Go to speedtest.net and let me know what you're getting.",
            textZh: "好了！您现在试试测速？打开speedtest.net告诉我结果。",
            keyPhrases: [
              { en: "speed test", zh: "测速" },
            ],
            alternativeExpressions: [
              { textEn: "All updated! Go ahead and run a speed test at speedtest.net — tell me what numbers you're getting.", textZh: "更新完了！去speedtest.net跑个测速——告诉我结果。", actionHint: "用run a speed test", frequency: "common" },
              { textEn: "That's done. Try testing your speed now — head to speedtest.net and let me know the results.", textZh: "搞定了。现在试试测速——打开speedtest.net告诉我数据。", actionHint: "用head to指引", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's showing 280 Mbps now! Much better. Thank you!",
            textZh: "现在显示280Mbps！好多了。谢谢！",
          },
        ],
      },
    ],
  },

  // ==================== 手机套餐 ====================
  {
    id: "daily-life-phone-plan",
    category: "daily-life",
    titleZh: "办手机套餐",
    titleEn: "Getting a Phone Plan",
    description: "到手机运营商门店办理新号码或套餐",
    otherRole: "手机店员",
    otherRoleIcon: "📱",
    flows: [
      {
        id: "basic-plan",
        titleZh: "基本办卡",
        titleEn: "Basic Plan Sign-up",
        description: "刚来美国，需要办一个手机号和套餐",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need a new phone plan. I just moved to the US and don't have a local number yet.",
            textZh: "你好，我需要办个新手机套餐。刚搬到美国，还没有本地号码。",
            casualVersion: "Hey, I need a phone plan. I'm new here and don't have a number.",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Welcome! Do you need a new phone as well, or just a SIM card and plan?",
            textZh: "欢迎！您需要新手机还是只要SIM卡和套餐？",
            keyPhrases: [
              { en: "SIM card", zh: "SIM卡" },
            ],
            alternativeExpressions: [
              { textEn: "Hi there! Are you looking for a phone too, or just a plan and SIM card?", textZh: "你好！你也需要手机，还是只要套餐和SIM卡？", actionHint: "更简洁的问法", frequency: "common" },
              { textEn: "Welcome in! Do you already have a phone, or do you need a new device along with the plan?", textZh: "欢迎！你已经有手机了，还是需要连手机一起办？", actionHint: "用already have引导", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Just a SIM card. I brought my phone from home. It's unlocked.",
            textZh: "只要SIM卡。手机从家里带来的，已解锁。",
            culturalNote: "在美国，解锁手机（unlocked phone）可以使用任何运营商的SIM卡。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Great. We have prepaid and postpaid plans. Prepaid starts at $30 a month for unlimited talk and text with 5 GB of data. Postpaid is $50 with unlimited everything.",
            textZh: "好的。我们有预付费和后付费套餐。预付费30美元起，含无限通话短信和5GB流量。后付费50美元，一切无限。",
            keyPhrases: [
              { en: "prepaid", zh: "预付费" },
              { en: "postpaid", zh: "后付费" },
              { en: "unlimited talk and text", zh: "无限通话和短信" },
            ],
            alternativeExpressions: [
              { textEn: "Perfect. So we offer two types: prepaid starting at $30 a month with 5 gigs of data, or postpaid at $50 with unlimited everything. No contract on either.", textZh: "好的。两种类型：预付费30美元起，5G流量；后付费50美元，一切无限。都没有合同。", actionHint: "加上无合同信息", frequency: "common" },
              { textEn: "An unlocked phone makes things easy. Prepaid plans start at $30 — unlimited calls and texts plus 5 GB data. Postpaid is $50 for fully unlimited.", textZh: "解锁手机就方便了。预付费30美元起——无限通话短信加5GB流量。后付费50美元完全无限。", actionHint: "先肯定手机解锁", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do I need a credit check for the postpaid plan?",
            textZh: "后付费套餐需要信用检查吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes, postpaid requires a credit check or a Social Security number. If you don't have credit history yet, prepaid is easier — no credit check needed, just an ID.",
            textZh: "是的，后付费需要信用检查或社会安全号。如果还没有信用记录，预付费更方便——只需要证件，不查信用。",
            keyPhrases: [
              { en: "credit check", zh: "信用检查" },
              { en: "credit history", zh: "信用记录" },
              { en: "Social Security number", zh: "社会安全号" },
            ],
            alternativeExpressions: [
              { textEn: "Postpaid needs a credit check, which requires a Social Security number. Without credit history, prepaid is the way to go — no credit check, just bring your ID.", textZh: "后付费需要信用检查，要社会安全号。没有信用记录的话，预付费更方便——不查信用，带证件就行。", actionHint: "用the way to go推荐", frequency: "common" },
              { textEn: "For postpaid, we do a credit check with your SSN. If you're new to the country and haven't built credit yet, I'd recommend starting with prepaid. Just an ID is all you need.", textZh: "后付费需要用社安号做信用检查。如果你是新来的还没建立信用，我推荐先用预付费。只需要证件。", actionHint: "用I'd recommend建议", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with prepaid then. Can I upgrade later?",
            textZh: "那我选预付费吧。以后能升级吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Absolutely. Once you build credit, you can switch to postpaid anytime. Your number stays the same. Let me get you set up — I'll need a photo ID.",
            textZh: "当然。等你建立了信用，随时可以转后付费。号码不变。我来帮你办——需要带照片的证件。",
            keyPhrases: [
              { en: "build credit", zh: "建立信用" },
              { en: "switch to", zh: "转到/切换到" },
            ],
            alternativeExpressions: [
              { textEn: "For sure. When you're ready and have credit history, switching to postpaid is simple. Same number, no hassle. Now let me get you set up — I'll need a photo ID.", textZh: "当然。等你准备好有了信用记录，转后付费很简单。号码不变，没有麻烦。我来帮你办——需要带照片的证件。", actionHint: "用no hassle", frequency: "common" },
              { textEn: "Definitely. You can upgrade to postpaid down the road once you've established credit. Your number carries over. Let me get started — just need to see your ID.", textZh: "肯定可以。以后建立了信用就能升级到后付费。号码不变。我开始办——看一下你的证件。", actionHint: "用down the road表示将来", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's my passport. How long does activation take?",
            textZh: "这是我的护照。激活要多久？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "About 10 minutes. I'll pop the SIM in, activate it, and you'll be good to go. You can also manage everything through our app.",
            textZh: "大约10分钟。我把SIM卡装进去，激活就好了。你还可以通过我们的App管理一切。",
            keyPhrases: [
              { en: "activation", zh: "激活" },
              { en: "good to go", zh: "可以用了" },
            ],
            alternativeExpressions: [
              { textEn: "Give me about 10 minutes. I'll install the SIM, get it activated, and you'll be all set. You can manage your account through our app.", textZh: "大约10分钟。我装好SIM卡，激活，就好了。可以通过我们的App管理账户。", actionHint: "用install替代pop in", frequency: "common" },
              { textEn: "Just 10 minutes and you're out the door with a working phone. I'll put the SIM in, activate the line, and show you our app for account management.", textZh: "只要10分钟你就能拿着能用的手机出门了。我装SIM卡，激活线路，给你看我们的管理App。", actionHint: "用out the door表示完成", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "family-plan",
        titleZh: "家庭套餐",
        titleEn: "Family Plan Options",
        description: "想给全家人办个合算的家庭套餐",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'm interested in a family plan. There are four of us. What are the options?",
            textZh: "我想了解家庭套餐。我们家四口人。有什么选择？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Our family plan is $120 a month for four lines, with unlimited everything. That's $30 per line. You also get a free streaming service included.",
            textZh: "我们的家庭套餐四条线每月120美元，一切无限。每条线30美元。还附赠一个免费的流媒体服务。",
            keyPhrases: [
              { en: "lines", zh: "线路/号码" },
              { en: "streaming service", zh: "流媒体服务" },
            ],
            alternativeExpressions: [
              { textEn: "For four lines, our family plan is $120 monthly — that's $30 each with unlimited everything. Plus, you get a complimentary streaming subscription.", textZh: "四条线，家庭套餐每月120美元——每条30，一切无限。另外附赠一个免费的流媒体订阅。", actionHint: "用complimentary替代free", frequency: "common" },
              { textEn: "The family bundle is $120 for all four lines — unlimited talk, text, and data at $30 per line. It also comes with a free streaming service.", textZh: "家庭包四条线全部120美元——无限通话、短信和流量，每条30美元。还附带一个免费流媒体服务。", actionHint: "用bundle替代plan", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a good deal. Do all lines get the same data speed?",
            textZh: "挺划算的。所有线路网速都一样吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes, all lines get the same 5G speeds. But during network congestion, premium data may be deprioritized after 50 GB per line.",
            textZh: "是的，所有线路都有同样的5G速度。但网络拥堵时，每条线超过50GB后高级数据可能会被降优先级。",
            keyPhrases: [
              { en: "network congestion", zh: "网络拥堵" },
              { en: "deprioritized", zh: "降优先级" },
              { en: "premium data", zh: "高级数据" },
            ],
            alternativeExpressions: [
              { textEn: "Every line gets identical 5G speeds. Just keep in mind that after 50 GB per line, speeds may slow down a bit during busy times.", textZh: "每条线都有同样的5G速度。只是注意每条线超过50GB后，高峰期速度可能会稍慢。", actionHint: "用slow down during busy times", frequency: "common" },
              { textEn: "Same speeds across all four lines. The fine print: if any line goes over 50 GB in a month, data could be temporarily deprioritized when the network is congested.", textZh: "四条线速度一样。细节是：如果某条线一个月超过50GB，网络拥堵时数据可能暂时降优先级。", actionHint: "用fine print提示细节", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can one of the lines be for my 12-year-old? I'd like parental controls.",
            textZh: "其中一条线给我12岁的孩子用可以吗？我想设置家长控制。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Of course. We have a free parental controls app that lets you set screen time limits, filter content, and pause their internet. You manage it all from your phone.",
            textZh: "当然。我们有免费的家长控制App，可以设置屏幕时间限制、内容过滤和暂停网络。在你手机上就能管理。",
            keyPhrases: [
              { en: "parental controls", zh: "家长控制" },
              { en: "screen time limits", zh: "屏幕时间限制" },
              { en: "filter content", zh: "内容过滤" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely! Our free parental controls app lets you manage screen time, block certain content, and even pause their data. Everything is controlled from your phone.", textZh: "当然！我们免费的家长控制App可以管理屏幕时间、屏蔽特定内容、甚至暂停他们的流量。全在你手机上操控。", actionHint: "用block certain content", frequency: "common" },
              { textEn: "Yes, we've got built-in parental controls at no extra cost. You can set time limits, filter what they see online, and shut off their internet whenever you need to — all from your device.", textZh: "有的，内置家长控制不额外收费。你可以设时间限制、过滤上网内容、需要时关掉他们的网络——全在你的设备上。", actionHint: "用built-in和shut off", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can we port our existing numbers over?",
            textZh: "能把现有号码转过来吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes, we can port all four numbers from your current carrier. It usually takes a few hours, and there's no interruption in service. Just bring your latest bill with account number and PIN.",
            textZh: "可以，四个号码都能从现在的运营商转过来。通常几小时就好，不会中断服务。带上最近一张账单，上面有账号和PIN码就行。",
            keyPhrases: [
              { en: "port numbers", zh: "转号码" },
              { en: "current carrier", zh: "现在的运营商" },
              { en: "account number and PIN", zh: "账号和PIN码" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, we can transfer all four numbers over from your existing provider. It takes a few hours with no service interruption. Just bring your current bill with account info and PIN.", textZh: "可以，四个号码都能从现有运营商转过来。几小时完成，不中断服务。带上当前账单和账号信息、PIN码。", actionHint: "用transfer over和existing provider", frequency: "common" },
              { textEn: "Absolutely. Porting four numbers is no problem — usually done within a few hours, and you won't lose service during the switch. You'll need your latest bill with account number and PIN.", textZh: "没问题。转四个号码很简单——通常几小时搞定，切换期间不会断线。需要最近一张账单上的账号和PIN码。", actionHint: "用won't lose service", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds great. Let's do it.",
            textZh: "听起来不错。那就办吧。",
          },
        ],
      },
    ],
  },

  // ==================== 找附近银行 ====================
  {
    id: "daily-life-bank-nearby",
    category: "daily-life",
    titleZh: "找附近银行",
    titleEn: "Finding a Nearby Bank",
    description: "刚到新城市，寻找银行开户或办理业务",
    otherRole: "银行柜员",
    otherRoleIcon: "🏦",
    flows: [
      {
        id: "open-account",
        titleZh: "开户",
        titleEn: "Opening an Account",
        description: "到银行开设支票和储蓄账户",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to open a bank account. I'm new to the area.",
            textZh: "你好，我想开个银行账户。我刚来这个地区。",
            casualVersion: "Hey, I just moved here and need to set up a bank account.",
          },
          {
            speaker: "them",
            role: "柜员",
            textEn: "Welcome! Are you looking for a checking account, a savings account, or both?",
            textZh: "欢迎！您要开支票账户、储蓄账户，还是两个都开？",
            keyPhrases: [
              { en: "checking account", zh: "支票账户" },
              { en: "savings account", zh: "储蓄账户" },
            ],
            alternativeExpressions: [
              { textEn: "Hi, welcome! Would you like to open a checking account, a savings account, or both together?", textZh: "你好，欢迎！您想开支票账户、储蓄账户，还是一起开？", actionHint: "用together结尾", frequency: "common" },
              { textEn: "Great to have you! Are you interested in a checking account for daily expenses, a savings account, or would you like both?", textZh: "很高兴你来！您对日常开支的支票账户感兴趣，还是储蓄账户，或者两个都开？", actionHint: "解释checking用途", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Both, please. What do I need to bring?",
            textZh: "两个都开。需要带什么？",
          },
          {
            speaker: "them",
            role: "柜员",
            textEn: "I'll need two forms of ID — a government-issued photo ID and something with your Social Security number or ITIN. Also, a minimum opening deposit of $25.",
            textZh: "需要两种证件——政府颁发的带照片证件和有社会安全号或ITIN的文件。还需要最低25美元的开户存款。",
            keyPhrases: [
              { en: "government-issued photo ID", zh: "政府颁发的带照片证件" },
              { en: "ITIN", zh: "个人纳税识别号" },
              { en: "minimum opening deposit", zh: "最低开户存款" },
            ],
            alternativeExpressions: [
              { textEn: "You'll need two IDs: one with a photo, like a passport or driver's license, and one showing your SSN or ITIN. Plus a $25 minimum deposit to open the accounts.", textZh: "需要两个证件：一个有照片的如护照或驾照，一个有社安号或ITIN的。加上25美元最低开户存款。", actionHint: "用SSN缩写更口语", frequency: "common" },
              { textEn: "Bring a government photo ID and your Social Security card or ITIN letter. There's also a $25 minimum to open the account.", textZh: "带政府颁发的带照片证件和社会安全卡或ITIN信。还需要25美元最低开户存款。", actionHint: "更简洁的列举", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have my passport and ITIN letter. Is there a monthly fee?",
            textZh: "我有护照和ITIN信。有月费吗？",
          },
          {
            speaker: "them",
            role: "柜员",
            textEn: "The checking account has no monthly fee if you set up direct deposit or maintain a $500 minimum balance. The savings account is free with any balance.",
            textZh: "支票账户设置直接存款或保持500美元最低余额就免月费。储蓄账户任何余额都免费。",
            keyPhrases: [
              { en: "direct deposit", zh: "直接存款/工资直存" },
              { en: "minimum balance", zh: "最低余额" },
            ],
            alternativeExpressions: [
              { textEn: "There's no monthly fee on checking as long as you have direct deposit or keep a $500 balance. Savings is always free, no minimum required.", textZh: "支票账户只要有工资直存或保持500美元余额就免月费。储蓄账户一直免费，没有最低要求。", actionHint: "用no minimum required", frequency: "common" },
              { textEn: "Checking is fee-free with direct deposit or a $500 minimum balance. The savings account has no monthly charge at any balance.", textZh: "支票账户有工资直存或500美元最低余额就免费。储蓄账户任何余额都不收月费。", actionHint: "用fee-free", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Will I get a debit card?",
            textZh: "会给我借记卡吗？",
          },
          {
            speaker: "them",
            role: "柜员",
            textEn: "Yes, I'll issue you a temporary debit card today, and your permanent card will arrive by mail in seven to ten business days. You'll also get checks if you want them.",
            textZh: "会的，今天给您一张临时借记卡，正式卡七到十个工作日内寄到。如果需要支票本也可以给您。",
            keyPhrases: [
              { en: "temporary debit card", zh: "临时借记卡" },
              { en: "permanent card", zh: "正式卡" },
              { en: "checks", zh: "支票本" },
            ],
            alternativeExpressions: [
              { textEn: "You'll get a temporary card today to use right away. Your permanent card arrives by mail in 7 to 10 business days. We can also order checks if you'd like.", textZh: "今天给你一张临时卡立即可用。正式卡7到10个工作日内邮寄到。如果需要还可以订支票本。", actionHint: "用to use right away", frequency: "common" },
              { textEn: "I'll set you up with a temp debit card right now. The real one will come in the mail within a week or two. Want me to add checks to your order?", textZh: "现在就给你办张临时借记卡。正式卡一两周内邮寄到。要不要一起订支票本？", actionHint: "用temp和the real one口语化", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. Can I also set up online banking and a mobile app?",
            textZh: "好的。能同时开通网银和手机App吗？",
          },
          {
            speaker: "them",
            role: "柜员",
            textEn: "Absolutely. I'll help you download the app and set up your login right now. You can do transfers, pay bills, and deposit checks by taking a photo.",
            textZh: "当然。我现在帮你下载App和设置登录。可以转账、缴费、拍照存支票。",
            keyPhrases: [
              { en: "deposit checks", zh: "存支票" },
              { en: "transfers", zh: "转账" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! Let's get the app on your phone right now. With mobile banking, you can transfer funds, pay bills, and even deposit checks by snapping a photo.", textZh: "当然！现在就把App装到你手机上。有了手机银行，可以转账、缴费、甚至拍照存支票。", actionHint: "用snapping a photo", frequency: "common" },
              { textEn: "Sure thing. I'll walk you through the app setup. Once you're in, you can do transfers, bill pay, and mobile check deposits — all from your phone.", textZh: "没问题。我带你设置App。登录后可以转账、缴费、手机支票存入——全在手机上完成。", actionHint: "用walk you through", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "wire-transfer",
        titleZh: "国际汇款",
        titleEn: "International Wire Transfer",
        description: "需要向海外汇款或接收海外汇款",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I need to send money to my family overseas. What's the best way to do an international transfer?",
            textZh: "我需要往海外家人那里汇钱。国际汇款最好怎么做？",
          },
          {
            speaker: "them",
            role: "柜员",
            textEn: "We offer wire transfers. You'll need the recipient's full name, bank name, account number, and the SWIFT code. The fee is $45 for outgoing international wires.",
            textZh: "我们提供电汇。需要收款人全名、银行名称、账号和SWIFT代码。国际汇出手续费45美元。",
            keyPhrases: [
              { en: "wire transfer", zh: "电汇" },
              { en: "SWIFT code", zh: "SWIFT代码" },
              { en: "recipient", zh: "收款人" },
            ],
            alternativeExpressions: [
              { textEn: "We can do international wire transfers. I'll need the recipient's name, their bank details, account number, and SWIFT code. The fee for outgoing international wires is $45.", textZh: "我们可以办国际电汇。需要收款人姓名、银行信息、账号和SWIFT代码。国际汇出手续费45美元。", actionHint: "用bank details概括", frequency: "common" },
              { textEn: "A bank wire transfer is the standard option. You'll need to provide the full name, bank name, account number, and SWIFT code of the person receiving the funds. There's a $45 fee.", textZh: "银行电汇是标准选择。需要提供收款人全名、银行名称、账号和SWIFT代码。手续费45美元。", actionHint: "用person receiving the funds", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a high fee. Are there any cheaper options?",
            textZh: "手续费挺高的。有更便宜的方式吗？",
          },
          {
            speaker: "them",
            role: "柜员",
            textEn: "For smaller amounts, services like Wise or Remitly often have lower fees and better exchange rates. But for large sums, a bank wire is more secure and traceable.",
            textZh: "小额的话，Wise或Remitly之类的服务通常手续费更低、汇率更好。但大额汇款，银行电汇更安全可追溯。",
            keyPhrases: [
              { en: "exchange rates", zh: "汇率" },
              { en: "traceable", zh: "可追溯的" },
            ],
            alternativeExpressions: [
              { textEn: "For smaller transfers, apps like Wise or Remitly usually charge less and offer better exchange rates. For larger sums though, a bank wire is safer and fully traceable.", textZh: "小额转账的话，Wise或Remitly之类的应用通常收费更低、汇率更好。但大额的话银行电汇更安全且完全可追溯。", actionHint: "用apps替代services", frequency: "common" },
              { textEn: "You might save on fees using Wise or Remitly for smaller amounts — they tend to have better rates. But for $2,000 and up, a bank wire gives you more security and a paper trail.", textZh: "小金额用Wise或Remitly可能省手续费——汇率通常更好。但2000美元以上银行电汇更安全有据可查。", actionHint: "结合具体金额建议", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm sending $2,000. How long does a wire take?",
            textZh: "我要汇2000美元。电汇多久到？",
          },
          {
            speaker: "them",
            role: "柜员",
            textEn: "International wires usually take one to three business days, depending on the receiving country and bank. Some countries may take up to five days.",
            textZh: "国际电汇通常一到三个工作日到，取决于收款国家和银行。有些国家可能需要五天。",
            keyPhrases: [
              { en: "receiving country", zh: "收款国家" },
            ],
            alternativeExpressions: [
              { textEn: "Most international wires arrive within one to three business days. Some countries may take up to five, depending on the receiving bank.", textZh: "大多数国际电汇一到三个工作日到。有些国家可能需要五天，取决于收款银行。", actionHint: "用arrive替代take", frequency: "common" },
              { textEn: "Expect one to three business days for most destinations. A few countries process slower — could be up to five days on the outside.", textZh: "大多数目的地一到三个工作日。有几个国家处理较慢——最多可能五天。", actionHint: "用on the outside表示最多", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a limit on how much I can send?",
            textZh: "汇款金额有上限吗？",
          },
          {
            speaker: "them",
            role: "柜员",
            textEn: "No set limit, but amounts over $10,000 require us to file a Currency Transaction Report with the government. It's a standard anti-money-laundering regulation — nothing to worry about.",
            textZh: "没有固定上限，但超过10,000美元我们需要向政府提交货币交易报告。这是标准的反洗钱法规——不用担心。",
            keyPhrases: [
              { en: "Currency Transaction Report", zh: "货币交易报告" },
              { en: "anti-money-laundering", zh: "反洗钱" },
            ],
            alternativeExpressions: [
              { textEn: "There's no cap on the amount. For transfers over $10,000, we're required by law to file a report — it's a routine anti-money-laundering procedure, nothing unusual.", textZh: "金额没有上限。超过10,000美元的转账法律要求我们提交报告——这是常规反洗钱程序，很正常。", actionHint: "用no cap和routine procedure", frequency: "common" },
              { textEn: "You can send as much as you need. Just be aware that anything over $10,000 triggers a mandatory government filing — standard AML compliance. Nothing to worry about.", textZh: "需要汇多少都可以。只是注意超过10,000美元会触发强制性政府申报——标准反洗钱合规要求。不用担心。", actionHint: "用triggers和AML compliance", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Understood. Let's go ahead with the wire transfer.",
            textZh: "明白了。那就办电汇吧。",
          },
        ],
      },
    ],
  },

  // ==================== 公证 ====================
  {
    id: "daily-life-notary-public",
    category: "daily-life",
    titleZh: "公证服务",
    titleEn: "Notary Public",
    description: "需要文件公证签名，找公证员办理",
    otherRole: "公证员",
    otherRoleIcon: "📜",
    flows: [
      {
        id: "basic-notary",
        titleZh: "基本公证",
        titleEn: "Basic Notarization",
        description: "需要对文件进行公证签名",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to get a document notarized. Do you offer notary services here?",
            textZh: "你好，我需要公证一份文件。这里提供公证服务吗？",
            casualVersion: "Hey, do you have a notary? I need something signed.",
          },
          {
            speaker: "them",
            role: "公证员",
            textEn: "Yes, I'm a notary public. What type of document do you need notarized?",
            textZh: "是的，我是公证员。需要公证什么类型的文件？",
            keyPhrases: [
              { en: "notary public", zh: "公证员" },
              { en: "notarized", zh: "公证" },
            ],
            alternativeExpressions: [
              { textEn: "I am. What kind of document are you looking to get notarized?", textZh: "是的。你想公证什么类型的文件？", actionHint: "更简洁", frequency: "common" },
              { textEn: "Yes, I'm a licensed notary. What's the document you need notarized — a contract, affidavit, power of attorney?", textZh: "是的，我是持证公证员。需要公证什么文件——合同、宣誓书、委托书？", actionHint: "列举常见类型引导", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's a power of attorney form. My lawyer said it needs to be notarized to be valid.",
            textZh: "是一份委托书。我律师说需要公证才有效。",
            culturalNote: "在美国，很多法律文件（委托书、房产过户、遗嘱等）需要公证员在场见证签名。",
          },
          {
            speaker: "them",
            role: "公证员",
            textEn: "I can do that. I'll need to see a valid photo ID — a driver's license or passport will work. And you must sign the document in front of me, not beforehand.",
            textZh: "可以办。我需要看有效的带照片证件——驾照或护照都行。而且您必须在我面前签名，不能提前签好。",
            keyPhrases: [
              { en: "power of attorney", zh: "委托书/授权书" },
              { en: "sign in front of me", zh: "在我面前签名" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, I can notarize that. Bring a valid photo ID — driver's license or passport. And remember, you need to sign it in my presence, not ahead of time.", textZh: "可以公证。带有效的带照片证件——驾照或护照。记住，必须在我面前签名，不能提前签。", actionHint: "用in my presence", frequency: "common" },
              { textEn: "No problem. I'll need to verify your identity with a photo ID, and the document must be signed right here in front of me — don't sign it beforehand.", textZh: "没问题。我需要用带照片证件核实你的身份，文件必须在我面前签——不要事先签好。", actionHint: "用verify your identity", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Here's my passport. How much does it cost?",
            textZh: "明白了。这是我的护照。多少钱？",
          },
          {
            speaker: "them",
            role: "公证员",
            textEn: "It's $15 per signature. Your document has two signature lines that need notarizing, so it'll be $30 total.",
            textZh: "每个签名15美元。您的文件有两处签名需要公证，一共30美元。",
            keyPhrases: [
              { en: "per signature", zh: "每个签名" },
              { en: "signature lines", zh: "签名处" },
            ],
            alternativeExpressions: [
              { textEn: "We charge $15 for each signature that needs notarizing. Your document has two, so the total is $30.", textZh: "每个需要公证的签名收15美元。你的文件有两处，总共30美元。", actionHint: "用charge更直接", frequency: "common" },
              { textEn: "The fee is $15 per notarized signature. I see two signature blocks on your document — that'll be $30 altogether.", textZh: "公证签名每个15美元。我看到你的文件有两个签名栏——一共30美元。", actionHint: "用signature blocks", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do I need a witness?",
            textZh: "需要见证人吗？",
          },
          {
            speaker: "them",
            role: "公证员",
            textEn: "For a power of attorney, some states require a witness in addition to the notary. Let me check — yes, in this state you need one witness. Is there someone who can come with you?",
            textZh: "委托书在有些州除了公证员还需要见证人。我查一下——是的，这个州需要一个见证人。有人能跟你一起来吗？",
            keyPhrases: [
              { en: "witness", zh: "见证人" },
              { en: "in addition to", zh: "除了...之外" },
            ],
            alternativeExpressions: [
              { textEn: "With a power of attorney, witness requirements vary by state. Let me check... Yes, this state requires one witness besides the notary. Do you have someone who can come?", textZh: "委托书的见证人要求因州而异。我查一下……是的，这个州除了公证员还需要一个见证人。有人能来吗？", actionHint: "用witness requirements vary by state", frequency: "common" },
              { textEn: "Power of attorney documents sometimes need a witness on top of the notarization. In this state — yes, you need one. Can you bring someone along?", textZh: "委托书有时除了公证还需要见证人。在这个州——是的，需要一个。能带个人来吗？", actionHint: "用on top of the notarization", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "My friend is waiting outside. Can she be the witness?",
            textZh: "我朋友在外面等。她可以做见证人吗？",
          },
          {
            speaker: "them",
            role: "公证员",
            textEn: "As long as she's not named in the document and has a valid ID, yes. Please bring her in and we'll get this done.",
            textZh: "只要她不是文件中的当事人而且有有效证件就行。请叫她进来，我们开始办理。",
            keyPhrases: [
              { en: "named in the document", zh: "文件中的当事人" },
            ],
            alternativeExpressions: [
              { textEn: "That works, as long as she isn't a party to the document and can show a valid ID. Go ahead and bring her in.", textZh: "可以，只要她不是文件的当事人并且有有效证件。叫她进来吧。", actionHint: "用a party to the document", frequency: "common" },
              { textEn: "She can be your witness if she's not mentioned in the document and has proper identification. Let's get her in and we'll wrap this up.", textZh: "如果她不在文件中而且有正式证件就可以做见证人。叫她进来我们办完。", actionHint: "用wrap this up", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "apostille-questions",
        titleZh: "海牙认证咨询",
        titleEn: "Apostille Questions",
        description: "需要为海外使用的文件办理海牙认证",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I need to send a document to another country and they require an apostille. Can you help with that?",
            textZh: "我需要把一份文件寄到国外，他们要求附海牙认证。你能帮忙吗？",
          },
          {
            speaker: "them",
            role: "公证员",
            textEn: "I can notarize the document, but an apostille has to be issued by the Secretary of State's office. The notarization is usually the first step, though.",
            textZh: "我可以公证文件，但海牙认证需要由州务卿办公室签发。不过公证通常是第一步。",
            keyPhrases: [
              { en: "apostille", zh: "海牙认证" },
              { en: "Secretary of State", zh: "州务卿" },
            ],
            alternativeExpressions: [
              { textEn: "I can handle the notarization, but the apostille itself must come from the Secretary of State. Notarization is usually step one in that process.", textZh: "公证我可以办，但海牙认证本身必须由州务卿签发。公证通常是这个流程的第一步。", actionHint: "用step one in that process", frequency: "common" },
              { textEn: "The notarization I can do right here. For the apostille, though, you'll need to go through the Secretary of State's office — they're the only ones who can issue it.", textZh: "公证我这里就能办。但海牙认证需要通过州务卿办公室——只有他们能签发。", actionHint: "强调只有州务卿能发", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How do I get the apostille after notarization?",
            textZh: "公证之后怎么办海牙认证？",
          },
          {
            speaker: "them",
            role: "公证员",
            textEn: "You can mail the notarized document to the Secretary of State with a cover letter and a fee — usually around $5 to $20 per document. Or you can go in person for same-day service in some states.",
            textZh: "可以把公证好的文件连同申请信和费用邮寄给州务卿——每份文件通常5到20美元。有些州也可以亲自去办当天就好。",
            keyPhrases: [
              { en: "cover letter", zh: "申请信/附函" },
              { en: "same-day service", zh: "当天服务" },
            ],
            alternativeExpressions: [
              { textEn: "Send the notarized original to the Secretary of State by mail with a request letter and the processing fee — usually $5 to $20. Some states also offer walk-in same-day service.", textZh: "把公证原件连同申请信和处理费邮寄给州务卿——通常5到20美元。有些州也提供现场当天办理。", actionHint: "用request letter和processing fee", frequency: "common" },
              { textEn: "Mail it to the Secretary of State with a cover letter and payment — about $5 to $20 per document. If you need it faster, some states let you do it in person for same-day turnaround.", textZh: "邮寄给州务卿，附上申请信和费用——每份文件大约5到20美元。如果需要更快，有些州可以亲自办理当天取。", actionHint: "用same-day turnaround", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How long does it take by mail?",
            textZh: "邮寄的话多久？",
          },
          {
            speaker: "them",
            role: "公证员",
            textEn: "By mail it's usually two to four weeks. If you're in a hurry, some third-party services can expedite it for an extra fee — usually three to five business days.",
            textZh: "邮寄通常两到四周。如果着急，有些第三方服务可以加急办理——通常三到五个工作日，额外收费。",
            keyPhrases: [
              { en: "expedite", zh: "加急" },
              { en: "third-party services", zh: "第三方服务" },
            ],
            alternativeExpressions: [
              { textEn: "Mail processing takes two to four weeks. If you need it sooner, third-party expediting services can do it in three to five business days for an extra fee.", textZh: "邮寄处理需要两到四周。如果需要更快，第三方加急服务可以三到五个工作日完成，额外收费。", actionHint: "用mail processing", frequency: "common" },
              { textEn: "Figure two to four weeks by mail. In a rush? There are private expediting companies that can turn it around in under a week, though they charge a premium.", textZh: "邮寄大概两到四周。着急？有私人加急公司能一周内办好，不过要收额外费用。", actionHint: "用turn it around和charge a premium", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Let's start with the notarization today, and I'll handle the apostille myself.",
            textZh: "那我们今天先做公证，海牙认证我自己去办。",
          },
          {
            speaker: "them",
            role: "公证员",
            textEn: "Sounds like a plan. I'll make a certified copy as well, in case you need a backup. That's an extra $5.",
            textZh: "好主意。我也给你做一份经认证的副本以防万一。额外5美元。",
            keyPhrases: [
              { en: "certified copy", zh: "经认证的副本" },
            ],
            alternativeExpressions: [
              { textEn: "Good plan. I'll also make a certified copy for your records — just $5 extra. Always good to have a backup.", textZh: "好计划。我也给你做一份认证副本留档——只需额外5美元。有个备份总是好的。", actionHint: "用for your records", frequency: "common" },
              { textEn: "Perfect. Let me make a certified duplicate too, just in case. It's only $5 and it could save you a lot of hassle later.", textZh: "好的。我也做一份经认证的副本以防万一。只要5美元，以后能省很多麻烦。", actionHint: "用duplicate和save you hassle", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. Better safe than sorry.",
            textZh: "好的，请做一份。有备无患。",
          },
        ],
      },
    ],
  },

  // ==================== DMV驾照 ====================
  {
    id: "daily-life-dmv-license",
    category: "daily-life",
    titleZh: "DMV 办驾照",
    titleEn: "DMV Driver's License",
    description: "去车管所办理驾照，了解考试流程和所需材料",
    otherRole: "DMV 工作人员",
    otherRoleIcon: "🚗",
    flows: [
      {
        id: "basic-application",
        titleZh: "基本申请",
        titleEn: "Basic Application",
        description: "第一次去DMV申请驾照",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to apply for a driver's license. I'm new to the state.",
            textZh: "你好，我想申请驾照。我刚搬到这个州。",
            casualVersion: "Hey, I need to get a driver's license. Just moved here.",
          },
          {
            speaker: "them",
            role: "DMV工作人员",
            textEn: "Welcome. Do you have a license from another state, or is this your first time applying?",
            textZh: "欢迎。您有其他州的驾照，还是第一次申请？",
            keyPhrases: [
              { en: "license from another state", zh: "其他州的驾照" },
            ],
            alternativeExpressions: [
              { textEn: "Hi there. Are you transferring a license from another state, or starting from scratch?", textZh: "你好。是从其他州转驾照，还是全新申请？", actionHint: "用transferring和from scratch", frequency: "common" },
              { textEn: "Thanks for coming in. Do you already hold a driver's license from any state, or will this be your first one?", textZh: "感谢你来。你有任何州的驾照吗，还是这是你的第一本？", actionHint: "用hold a license更正式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have an international license from my home country. Do I need to take the driving test?",
            textZh: "我有国内的国际驾照。需要参加驾驶考试吗？",
          },
          {
            speaker: "them",
            role: "DMV工作人员",
            textEn: "An international license is valid for a limited time. You'll need to pass a written knowledge test and a behind-the-wheel driving test. First, fill out this application and bring it to Window 3.",
            textZh: "国际驾照只在有限时间内有效。您需要通过笔试和路考。先填好这张申请表，交到3号窗口。",
            keyPhrases: [
              { en: "written knowledge test", zh: "笔试/理论考试" },
              { en: "behind-the-wheel", zh: "路考/实际驾驶" },
            ],
            alternativeExpressions: [
              { textEn: "Your international license is only good for a certain period here. You'll need to take both a written test and a road test. Start by filling out this application form and head to Window 3.", textZh: "你的国际驾照在这里只在一定期限内有效。需要参加笔试和路考。先填好申请表去3号窗口。", actionHint: "用only good for", frequency: "common" },
              { textEn: "International licenses have a limited validity period in this state. To get a full license, you'll need to pass a knowledge exam and a behind-the-wheel test. Here's the application — take it to Window 3 when you're done.", textZh: "国际驾照在本州有效期有限。要拿正式驾照需要通过理论考试和路考。这是申请表——填好交到3号窗口。", actionHint: "用knowledge exam替代written test", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What documents do I need?",
            textZh: "需要什么材料？",
          },
          {
            speaker: "them",
            role: "DMV工作人员",
            textEn: "Your passport, proof of residency like a utility bill or lease, your Social Security card or denial letter, and $35 for the application fee.",
            textZh: "护照、居住证明如水电费账单或租约、社会安全卡或拒绝信、以及35美元申请费。",
            keyPhrases: [
              { en: "proof of residency", zh: "居住证明" },
              { en: "denial letter", zh: "（社安号）拒绝信" },
              { en: "application fee", zh: "申请费" },
            ],
            alternativeExpressions: [
              { textEn: "Bring your passport, a document showing your address — utility bill or lease — your Social Security card or denial letter, and $35 for the fee.", textZh: "带护照、地址证明文件如水电费账单或租约、社安卡或拒绝信、还有35美元的费用。", actionHint: "用document showing your address", frequency: "common" },
              { textEn: "You'll need your passport, two forms of address proof, your SSN card or denial letter, and the $35 application fee. All originals, no copies.", textZh: "需要护照、两份地址证明、社安卡或拒绝信，以及35美元申请费。都要原件，不收复印件。", actionHint: "强调需要原件", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I take the written test today?",
            textZh: "今天能考笔试吗？",
          },
          {
            speaker: "them",
            role: "DMV工作人员",
            textEn: "If your documents check out, yes. The test is 36 multiple-choice questions. You need to get 30 right to pass. It's available in multiple languages.",
            textZh: "如果材料没问题，可以。笔试36道选择题，答对30道通过。有多种语言可选。",
            keyPhrases: [
              { en: "multiple-choice", zh: "选择题" },
              { en: "available in multiple languages", zh: "有多种语言可选" },
            ],
            alternativeExpressions: [
              { textEn: "If everything looks good with your paperwork, absolutely. It's a 36-question multiple-choice exam — you need 30 correct to pass. Multiple languages are available.", textZh: "如果材料都没问题，当然可以。36道选择题——答对30道通过。有多种语言可选。", actionHint: "用paperwork和exam", frequency: "common" },
              { textEn: "As long as your documents are in order, yes. The written test has 36 questions, passing score is 30. And don't worry — it's offered in several languages.", textZh: "只要材料齐全就可以。笔试36题，30题及格。别担心——有多种语言版本。", actionHint: "用in order和passing score", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "After I pass the written test, when can I schedule the driving test?",
            textZh: "笔试通过后，什么时候可以预约路考？",
          },
          {
            speaker: "them",
            role: "DMV工作人员",
            textEn: "Once you pass the written test, you'll get a learner's permit. You can schedule the driving test online — the earliest appointment is usually two to three weeks out. Bring your own vehicle and proof of insurance.",
            textZh: "笔试通过后会拿到学习驾照。可以在线预约路考——最早通常两到三周后。自带车辆和保险证明。",
            keyPhrases: [
              { en: "learner's permit", zh: "学习驾照" },
              { en: "proof of insurance", zh: "保险证明" },
            ],
            alternativeExpressions: [
              { textEn: "After passing the written exam, you receive a learner's permit. You can then book the driving test online — earliest slots are usually two to three weeks out. Bring your own car and insurance proof.", textZh: "通过笔试后会拿到学习驾照。然后可以在线预约路考——最早通常两到三周后。自带车辆和保险证明。", actionHint: "用book和slots", frequency: "common" },
              { textEn: "Passing the written test gets you a learner's permit. From there, schedule your road test online. Expect a two- to three-week wait. You'll need to provide your own vehicle and show proof of insurance.", textZh: "通过笔试拿到学习驾照。然后在线预约路考。大概等两到三周。需要自带车辆和出示保险证明。", actionHint: "用road test和provide", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "license-renewal",
        titleZh: "驾照续期",
        titleEn: "License Renewal",
        description: "驾照即将到期，需要办理续期",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "My driver's license expires next month. What do I need to do to renew it?",
            textZh: "我驾照下个月到期了。续期需要怎么做？",
          },
          {
            speaker: "them",
            role: "DMV工作人员",
            textEn: "You can renew online if your license is not yet expired and you renewed in person last time. Otherwise, you need to come in. Do you have a REAL ID or a standard license?",
            textZh: "如果驾照还没过期且上次是亲自来续的，可以在线续期。否则需要来现场。您是REAL ID还是普通驾照？",
            keyPhrases: [
              { en: "REAL ID", zh: "真实身份证（加强版驾照）" },
              { en: "renew online", zh: "在线续期" },
            ],
            alternativeExpressions: [
              { textEn: "Online renewal is possible if your license hasn't expired yet and you came in person last time. Otherwise, you'll need to visit us. Are you upgrading to REAL ID, or staying with a standard license?", textZh: "如果驾照还没过期且上次是本人来续的，可以在线续期。否则需要来现场。你要升级REAL ID还是保持普通驾照？", actionHint: "用visit us替代come in", frequency: "common" },
              { textEn: "If it's still valid and your last renewal was in person, you can do it online. Otherwise, it's an in-person visit. Do you have a REAL ID currently, or the standard version?", textZh: "如果还在有效期内且上次是现场续的，可以网上办。否则需要到场。你现在是REAL ID还是普通版？", actionHint: "用still valid", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's a standard license. I'd like to upgrade to a REAL ID this time. I heard I need it for domestic flights.",
            textZh: "普通驾照。这次我想升级成REAL ID。听说坐国内航班需要。",
            culturalNote: "REAL ID 是符合联邦标准的身份证件，从2025年起坐美国国内航班需要。",
          },
          {
            speaker: "them",
            role: "DMV工作人员",
            textEn: "Good idea. For REAL ID, you'll need your birth certificate or passport, Social Security card, and two proofs of California residency. The renewal fee is $40.",
            textZh: "好主意。办REAL ID需要出生证明或护照、社会安全卡、以及两份加州居住证明。续期费40美元。",
            keyPhrases: [
              { en: "birth certificate", zh: "出生证明" },
              { en: "proofs of residency", zh: "居住证明" },
            ],
            alternativeExpressions: [
              { textEn: "Smart move. REAL ID requires a birth certificate or passport, your Social Security card, and two documents proving California residency. Renewal fee is $40.", textZh: "明智之举。REAL ID需要出生证明或护照、社安卡、以及两份加州居住证明。续期费40美元。", actionHint: "用documents proving residency", frequency: "common" },
              { textEn: "Great choice — you'll definitely need it for flying. Bring your passport or birth certificate, SSN card, and two proofs of address. The fee is $40.", textZh: "好选择——坐飞机肯定需要。带护照或出生证明、社安卡、两份地址证明。费用40美元。", actionHint: "提到飞行用途", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Will I need to take any tests again?",
            textZh: "需要重新考试吗？",
          },
          {
            speaker: "them",
            role: "DMV工作人员",
            textEn: "No driving test for renewals. But you'll need to pass a vision test and take a new photo. If your license has been expired for more than 60 days, you'd need to retake the written test.",
            textZh: "续期不用路考。但需要通过视力测试和拍新照片。如果驾照已过期超过60天，需要重考笔试。",
            keyPhrases: [
              { en: "vision test", zh: "视力测试" },
              { en: "retake", zh: "重考" },
            ],
            alternativeExpressions: [
              { textEn: "No road test needed for a renewal. You'll just do a vision screening and take a new photo. However, if your license has lapsed more than 60 days, the written test is required again.", textZh: "续期不需要路考。只需做视力检查和拍新照片。但如果驾照过期超过60天，需要重考笔试。", actionHint: "用vision screening和lapsed", frequency: "common" },
              { textEn: "Renewals don't require a driving test. Just an eye exam and an updated photo. One caveat — if it's been expired over 60 days, you'd have to retake the knowledge test.", textZh: "续期不用考驾驶。只需眼科检查和更新照片。有个前提——如果已过期超过60天，需要重考理论。", actionHint: "用caveat提示例外", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I make an appointment or do I have to walk in?",
            textZh: "可以预约吗还是只能现场排队？",
          },
          {
            speaker: "them",
            role: "DMV工作人员",
            textEn: "I highly recommend making an appointment online. Walk-ins can wait two to three hours. With an appointment, you're in and out in about 30 minutes.",
            textZh: "强烈建议在线预约。没预约的话可能要等两到三小时。有预约大约30分钟搞定。",
            keyPhrases: [
              { en: "walk-ins", zh: "未预约的/现场排队的" },
              { en: "in and out", zh: "进出很快/搞定" },
            ],
            alternativeExpressions: [
              { textEn: "Definitely book online first. Walk-ins can wait two to three hours, but with an appointment you'll be done in about 30 minutes.", textZh: "一定要先网上预约。没预约的话可能等两三个小时，有预约大约30分钟搞定。", actionHint: "用book online first", frequency: "common" },
              { textEn: "An appointment is the way to go. Without one, expect a two- to three-hour wait. With one, you're in and out in half an hour.", textZh: "预约是最好的选择。没有的话要等两到三小时。有的话半小时进出。", actionHint: "用the way to go强调", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll book an appointment right now. Thank you!",
            textZh: "我现在就预约。谢谢！",
          },
        ],
      },
    ],
  },

  // ==================== 看房 ====================
  {
    id: "daily-life-apartment-view",
    category: "daily-life",
    titleZh: "看房",
    titleEn: "Apartment Viewing",
    description: "预约看房并实地参观公寓",
    otherRole: "房产经纪/房东",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "basic-viewing",
        titleZh: "基本看房",
        titleEn: "Basic Apartment Viewing",
        description: "第一次看出租公寓，了解基本情况",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I saw your listing online for the one-bedroom on Oak Street. Is it still available?",
            textZh: "你好，我在网上看到你挂的橡树街那套一居室。还空着吗？",
            casualVersion: "Hey, is the one-bedroom on Oak Street still up for rent?",
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Yes, it's still available! Would you like to schedule a showing? I have openings this weekend.",
            textZh: "还空着呢！要预约看房吗？这周末有时间。",
            keyPhrases: [
              { en: "listing", zh: "挂牌/房源信息" },
              { en: "showing", zh: "看房" },
            ],
            alternativeExpressions: [
              { textEn: "It is! Want to come see it? I'm free this weekend if you'd like to set up a viewing.", textZh: "还在！要来看看吗？这周末我有空，可以安排看房。", actionHint: "更口语化", frequency: "common" },
              { textEn: "Still on the market! I can schedule a tour for you. Does this weekend work?", textZh: "还在出租呢！我可以安排带你看。这周末可以吗？", actionHint: "用still on the market", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Saturday afternoon works for me. What's the rent, and what's included?",
            textZh: "周六下午可以。房租多少？包含什么？",
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "It's $1,400 a month. Water and trash are included. You'd pay electric and internet separately. There's also a $50 parking fee if you need a spot.",
            textZh: "月租1400美元。包水和垃圾收运。电和网络自付。如果需要停车位，另加50美元。",
            keyPhrases: [
              { en: "included", zh: "包含在内" },
              { en: "parking fee", zh: "停车费" },
            ],
            alternativeExpressions: [
              { textEn: "Rent is $1,400 monthly. Water and trash are covered. Electric and internet are on you. Parking is available for an extra $50 if you need a spot.", textZh: "月租1400美元。水和垃圾包含在内。电和网络自付。停车位需要的话额外50美元。", actionHint: "用covered和on you", frequency: "common" },
              { textEn: "It's fourteen hundred a month. That includes water and waste removal. You'd handle electric and internet separately. Need parking? That's $50 extra per month.", textZh: "月租一千四。包含水费和垃圾收运。电和网络你自己办。需要停车位？每月多50美元。", actionHint: "用waste removal", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is it pet-friendly? I have a small dog.",
            textZh: "允许养宠物吗？我有一只小狗。",
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Dogs under 30 pounds are allowed with a $300 pet deposit and $25 monthly pet rent. No aggressive breeds.",
            textZh: "30磅以下的狗可以，需交300美元宠物押金和每月25美元宠物费。不允许攻击性犬种。",
            keyPhrases: [
              { en: "pet deposit", zh: "宠物押金" },
              { en: "pet rent", zh: "宠物费/宠物月租" },
              { en: "aggressive breeds", zh: "攻击性犬种" },
            ],
            alternativeExpressions: [
              { textEn: "Small dogs under 30 pounds are welcome. There's a $300 refundable pet deposit and $25 a month in pet rent. We don't allow aggressive breeds, though.", textZh: "30磅以下的小狗可以养。有300美元可退宠物押金和每月25美元宠物费。不允许攻击性犬种。", actionHint: "用refundable强调可退", frequency: "common" },
              { textEn: "We're pet-friendly for dogs up to 30 pounds. There's a one-time $300 deposit for the pet, plus $25 monthly. Breed restrictions apply — no aggressive breeds.", textZh: "30磅以下的狗欢迎。一次性300美元宠物押金加每月25美元。有犬种限制——不允许攻击性品种。", actionHint: "用breed restrictions apply", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "My dog is a Corgi, about 25 pounds. How about laundry — is there in-unit?",
            textZh: "我的狗是柯基，大概25磅。洗衣呢——有房间内洗衣机吗？",
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "No in-unit laundry, but there's a shared laundry room on the first floor. Washers are $1.50 and dryers are $1.25 per load.",
            textZh: "没有房内洗衣机，但一楼有共用洗衣房。洗衣机每次1.5美元，烘干机每次1.25美元。",
            keyPhrases: [
              { en: "in-unit laundry", zh: "房内洗衣机" },
              { en: "shared laundry room", zh: "共用洗衣房" },
              { en: "per load", zh: "每次/每桶" },
            ],
            alternativeExpressions: [
              { textEn: "There's no washer-dryer in the unit, but we have a laundry room downstairs. Machines are coin-operated — $1.50 to wash, $1.25 to dry.", textZh: "单元内没有洗衣烘干机，但楼下有洗衣房。投币式——洗1.5美元，烘干1.25美元。", actionHint: "用coin-operated描述", frequency: "common" },
              { textEn: "No in-unit laundry, unfortunately. But there's a shared facility on the ground floor. It's $1.50 per wash and $1.25 per dry cycle.", textZh: "很遗憾没有室内洗衣机。但一楼有共用设施。洗一次1.5美元，烘干一次1.25美元。", actionHint: "用facility和dry cycle", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. I'll see you Saturday at 2 PM then.",
            textZh: "知道了。那周六下午两点见。",
          },
        ],
      },
      {
        id: "detailed-questions",
        titleZh: "看房细节提问",
        titleEn: "Detailed Viewing Questions",
        description: "实地看房时询问更多细节问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "This looks nice. What's the lease term — is it a 12-month lease?",
            textZh: "看起来不错。租约期限是多少——12个月吗？",
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "We offer 12-month leases. After the first year, you can go month to month if you want, but rent may increase.",
            textZh: "我们提供12个月的租约。第一年后可以改为月付，但租金可能上调。",
            keyPhrases: [
              { en: "lease term", zh: "租约期限" },
              { en: "month to month", zh: "月付/按月续租" },
            ],
            alternativeExpressions: [
              { textEn: "It's a standard 12-month lease. Once that's up, you can switch to month-to-month, though there may be a rent increase.", textZh: "标准12个月租约。到期后可以转月付，不过可能会涨租。", actionHint: "用once that's up", frequency: "common" },
              { textEn: "We do 12-month leases to start. After the first year, you have the option to go month-to-month, but keep in mind the rent could go up.", textZh: "起始是12个月租约。第一年后可以选择按月续租，但要注意租金可能会上调。", actionHint: "用keep in mind提示", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much is the security deposit?",
            textZh: "押金多少？",
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "One month's rent — $1,400. It's fully refundable if the apartment is returned in good condition, minus normal wear and tear.",
            textZh: "一个月房租——1400美元。如果公寓归还时状况良好，扣除正常损耗后全额退还。",
            keyPhrases: [
              { en: "security deposit", zh: "押金/保证金" },
              { en: "fully refundable", zh: "全额退还" },
              { en: "normal wear and tear", zh: "正常损耗" },
            ],
            alternativeExpressions: [
              { textEn: "The deposit is one month's rent — $1,400. You get it all back when you move out, as long as there's no damage beyond normal wear and tear.", textZh: "押金是一个月房租——1400美元。搬出时只要没有超出正常损耗的损坏就全额退还。", actionHint: "用get it all back", frequency: "common" },
              { textEn: "It's $1,400 — equal to one month's rent. Fully refundable upon move-out, minus any repair costs beyond routine wear and tear.", textZh: "1400美元——等于一个月房租。搬走时全额退还，扣除超出日常损耗的维修费用。", actionHint: "用upon move-out更正式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What about maintenance? If something breaks, how does that work?",
            textZh: "维修怎么办？如果东西坏了，怎么处理？",
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Submit a maintenance request through our online portal. For emergencies like a burst pipe or no heat, call our 24/7 emergency line. Repairs due to normal use are covered by us.",
            textZh: "通过我们的在线平台提交维修申请。紧急情况如水管爆裂或没暖气，打我们24小时紧急电话。正常使用导致的维修我们负责。",
            keyPhrases: [
              { en: "maintenance request", zh: "维修申请" },
              { en: "emergency line", zh: "紧急电话" },
              { en: "burst pipe", zh: "水管爆裂" },
            ],
            alternativeExpressions: [
              { textEn: "For routine issues, submit a request through our tenant portal online. For emergencies — burst pipes, no heat, flooding — call our 24-hour hotline. Repairs from normal use are on us.", textZh: "日常问题通过租户在线平台提交申请。紧急情况——水管爆裂、没暖气、水灾——打24小时热线。正常使用的维修我们负责。", actionHint: "用tenant portal和hotline", frequency: "common" },
              { textEn: "Just log a request on our maintenance portal. Urgent stuff like a leaking pipe or a heating outage? Call the emergency number anytime, day or night. We cover all normal-use repairs.", textZh: "在维修平台上提交申请就行。水管漏水或供暖故障这种紧急事？随时打紧急电话，白天晚上都行。正常使用维修我们全包。", actionHint: "用log a request和heating outage", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is renters insurance required?",
            textZh: "需要买租房保险吗？",
            culturalNote: "在美国很多房东要求租户购买 renters insurance，保额通常很便宜，每月10-20美元。",
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Yes, we require all tenants to carry renters insurance with at least $100,000 in liability coverage. It's usually $15 to $20 a month.",
            textZh: "是的，我们要求所有租户购买至少10万美元责任险的租房保险。通常每月15到20美元。",
            keyPhrases: [
              { en: "renters insurance", zh: "租房保险" },
              { en: "liability coverage", zh: "责任险" },
              { en: "tenants", zh: "租户" },
            ],
            alternativeExpressions: [
              { textEn: "That's a requirement for all residents — at least $100,000 in liability coverage. It typically runs $15 to $20 a month, so it's very affordable.", textZh: "这是所有住户的要求——至少10万美元责任险。通常每月15到20美元，非常便宜。", actionHint: "用requirement和affordable", frequency: "common" },
              { textEn: "Yes, renters insurance is mandatory. The minimum is $100,000 liability. Most policies cost about $15 to $20 monthly — well worth it for the protection.", textZh: "是的，租房保险是强制要求。最低10万美元责任险。大多数保单每月15到20美元——非常值得。", actionHint: "用mandatory和well worth it", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "This all sounds good. What's the application process?",
            textZh: "都挺好的。申请流程是什么？",
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Fill out an application online. We run a credit check and background check — there's a $40 non-refundable application fee. We usually approve within 48 hours.",
            textZh: "在线填写申请表。我们会做信用检查和背景调查——申请费40美元不可退。通常48小时内批复。",
            keyPhrases: [
              { en: "background check", zh: "背景调查" },
              { en: "non-refundable", zh: "不可退的" },
            ],
            alternativeExpressions: [
              { textEn: "Apply through our website. We'll run credit and background checks — there's a $40 non-refundable fee for that. Decisions usually come within two business days.", textZh: "在我们网站上申请。我们会做信用和背景调查——40美元不可退的费用。通常两个工作日内有结果。", actionHint: "用decisions come", frequency: "common" },
              { textEn: "Everything starts with the online application. The $40 fee covers a credit and background screening — non-refundable. We typically get back to you within 48 hours.", textZh: "一切从在线申请开始。40美元费用包含信用和背景审查——不可退。通常48小时内回复你。", actionHint: "用screening和get back to you", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 签租约 ====================
  {
    id: "daily-life-lease-sign",
    category: "daily-life",
    titleZh: "签租约",
    titleEn: "Signing a Lease",
    description: "确认租房后签订租约合同，了解条款和权益",
    otherRole: "物业经理",
    otherRoleIcon: "📝",
    flows: [
      {
        id: "basic-lease",
        titleZh: "基本签约",
        titleEn: "Basic Lease Signing",
        description: "阅读和签署租房合同",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm here to sign the lease for Unit 4A. My application was approved yesterday.",
            textZh: "你好，我来签4A单元的租约。我的申请昨天通过了。",
            casualVersion: "Hey, I got approved for 4A! Ready to sign the lease.",
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "Congratulations! I have the lease ready. It's a standard 12-month agreement starting on the first of next month. Let me walk you through the key terms.",
            textZh: "恭喜！租约准备好了。标准12个月合同，下月一号开始。我给你讲一下主要条款。",
            keyPhrases: [
              { en: "walk you through", zh: "带你过一遍" },
              { en: "key terms", zh: "主要条款" },
            ],
            alternativeExpressions: [
              { textEn: "Welcome aboard! Your lease is all prepared — a standard 12-month contract beginning the first of next month. Let me go over the main points with you.", textZh: "欢迎加入！租约都准备好了——标准12个月合同，下月一号开始。我给你过一下要点。", actionHint: "用welcome aboard", frequency: "common" },
              { textEn: "Great news, you're approved! Here's your lease — 12 months starting next month. I'll walk you through the important clauses before you sign.", textZh: "好消息，你通过了！这是你的租约——12个月，下月开始。签字前我带你看重要条款。", actionHint: "用important clauses", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Please. I want to make sure I understand everything before I sign.",
            textZh: "好的。签之前我想确认都看明白了。",
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "Rent is $1,400 due on the first of each month. There's a five-day grace period. After that, a $50 late fee applies. Two bounced checks and we can start eviction proceedings.",
            textZh: "月租1400美元，每月一号到期。有五天宽限期。之后收50美元滞纳金。两次退票我们可以启动驱逐程序。",
            keyPhrases: [
              { en: "grace period", zh: "宽限期" },
              { en: "late fee", zh: "滞纳金" },
              { en: "bounced checks", zh: "退票/空头支票" },
              { en: "eviction proceedings", zh: "驱逐程序" },
            ],
            alternativeExpressions: [
              { textEn: "Monthly rent is $1,400, payable by the first. You have until the fifth before a $50 late fee applies. Two NSF checks could trigger eviction proceedings.", textZh: "月租1400美元，每月一号前付。五号之前不收滞纳金，之后收50美元。两次退票可能启动驱逐程序。", actionHint: "用payable by和NSF checks", frequency: "common" },
              { textEn: "Rent is due on the first — $1,400. There's a five-day window after that with no penalty. After day five, it's a $50 late charge. And just so you know, two bounced payments can lead to eviction.", textZh: "每月一号交租——1400美元。之后有五天无罚期。第五天后收50美元滞纳金。另外说一下，两次退票可能导致驱逐。", actionHint: "用window和just so you know", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What's the policy on breaking the lease early?",
            textZh: "提前解约是什么政策？",
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "You'd need to give 60 days' written notice and pay an early termination fee equal to two months' rent. We do try to re-rent quickly to minimize your costs.",
            textZh: "需要提前60天书面通知，并支付相当于两个月房租的提前解约金。我们会尽快重新出租以减少你的费用。",
            keyPhrases: [
              { en: "written notice", zh: "书面通知" },
              { en: "early termination fee", zh: "提前解约金" },
              { en: "re-rent", zh: "重新出租" },
            ],
            alternativeExpressions: [
              { textEn: "Early termination requires 60 days' written notice plus a fee equal to two months' rent. We'll make every effort to re-lease quickly to reduce your cost.", textZh: "提前解约需要提前60天书面通知加两个月房租的费用。我们会尽力尽快重新出租以减少你的费用。", actionHint: "用re-lease和reduce your cost", frequency: "common" },
              { textEn: "If you break the lease early, it's two months' rent as a penalty, with 60 days' advance written notice. We do try to find a new tenant quickly to minimize what you owe.", textZh: "如果提前解约，罚两个月房租，需要提前60天书面通知。我们会尽快找到新租户以减少你的欠款。", actionHint: "用penalty和minimize what you owe", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I have someone else move in with me later, like a partner?",
            textZh: "以后能让别人搬进来住吗，比如伴侣？",
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "Any additional occupant needs to be added to the lease and pass a background check. Guests staying more than 14 consecutive days are considered occupants.",
            textZh: "任何新增住户需要加到租约上并通过背景调查。连续住超过14天的客人视为住户。",
            keyPhrases: [
              { en: "additional occupant", zh: "新增住户" },
              { en: "consecutive days", zh: "连续天数" },
            ],
            alternativeExpressions: [
              { textEn: "Anyone moving in needs to be added to the lease and screened. FYI, any guest staying more than 14 days straight is considered a resident.", textZh: "任何入住的人需要加到租约上并接受审查。注意，连续住超过14天的客人算住户。", actionHint: "用screened和FYI", frequency: "common" },
              { textEn: "Additional residents must go through our application process and be on the lease. Keep in mind — guests staying over 14 consecutive days are classified as occupants.", textZh: "新增住户必须经过申请流程并加入租约。注意——连续住超过14天的客人被视为住户。", actionHint: "用go through our application process", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Understood. Everything looks clear. Where do I sign?",
            textZh: "明白了。都看清楚了。在哪里签？",
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "Sign and date on pages 8, 12, and 15. Initial the bottom of every other page. Once you're done, I'll give you your keys and a move-in checklist.",
            textZh: "在第8、12和15页签名并写日期。其他每页底部写首字母缩写。签完后给你钥匙和入住清单。",
            keyPhrases: [
              { en: "initial", zh: "签首字母缩写" },
              { en: "move-in checklist", zh: "入住清单" },
            ],
            alternativeExpressions: [
              { textEn: "You'll need to sign on pages 8, 12, and 15. Put your initials at the bottom of all the other pages. Once that's done, I'll hand over your keys and a move-in checklist.", textZh: "需要在第8、12、15页签名。其他每页底部写首字母。签完后给你钥匙和入住清单。", actionHint: "用hand over替代give", frequency: "common" },
              { textEn: "There are three signature spots — pages 8, 12, and 15. Initial every other page at the bottom. After that, here are your keys and the checklist for move-in day.", textZh: "有三个签名处——第8、12、15页。其他每页底部签首字母。之后给你钥匙和入住日清单。", actionHint: "用signature spots", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "lease-negotiation",
        titleZh: "租约谈判",
        titleEn: "Lease Negotiation",
        description: "对租约中的条款有疑问，想要协商修改",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Before I sign, I have a couple of concerns. The no-subletting clause — is there any flexibility on that?",
            textZh: "签之前我有几个顾虑。关于不允许转租的条款——能商量吗？",
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "We don't allow Airbnb-style short-term subletting, but if you need to leave for an extended period, we can discuss a long-term sublet with our approval.",
            textZh: "我们不允许Airbnb那种短期转租，但如果你需要长期离开，经我们批准可以讨论长期转租。",
            keyPhrases: [
              { en: "subletting", zh: "转租" },
              { en: "extended period", zh: "长期" },
            ],
            alternativeExpressions: [
              { textEn: "Short-term rentals like Airbnb are not permitted. But for longer absences, we can discuss a sublet arrangement with prior written approval.", textZh: "Airbnb那种短期出租不允许。但长期不在的话，经书面批准可以讨论转租安排。", actionHint: "用prior written approval", frequency: "common" },
              { textEn: "No short-term subletting — that's a firm rule. However, if you're going away for several months, a long-term sublet is negotiable with our written consent.", textZh: "短期转租不行——这是硬性规定。但如果你要离开几个月，长期转租经我们书面同意可以协商。", actionHint: "用firm rule和negotiable", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's fair. Also, I noticed the lease says no modifications to the walls. Can I hang pictures with small nails?",
            textZh: "合理。另外，我看到租约说不能改动墙壁。可以用小钉子挂画吗？",
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "Small nail holes are fine — that falls under normal wear and tear. Just no large anchors or removing fixtures. If you want to paint, you'd need written permission and agree to repaint before moving out.",
            textZh: "小钉子孔没问题——属于正常损耗。不能打大型膨胀螺栓或拆除固定设施。如果想刷漆，需要书面许可，并同意搬走前恢复原色。",
            keyPhrases: [
              { en: "anchors", zh: "膨胀螺栓" },
              { en: "fixtures", zh: "固定设施" },
              { en: "repaint", zh: "重新刷漆" },
            ],
            alternativeExpressions: [
              { textEn: "Nail holes from hanging pictures are totally fine — that's considered normal wear and tear. Just no big anchors or removing any built-in fixtures. For painting, you'd need our written okay and must restore the original color before moving out.", textZh: "挂画的钉子孔完全没问题——算正常损耗。不能打大锚栓或拆除内置设施。刷漆需要我们书面同意，搬走前必须恢复原色。", actionHint: "用written okay口语化", frequency: "common" },
              { textEn: "Small picture nails? No problem — that's normal use. Heavy-duty anchors or removing fixtures is a no-go. Want to paint? Get written permission first, and you'll need to paint it back before your lease ends.", textZh: "小挂画钉？没问题——正常使用。重型锚栓或拆固定设施不行。想刷漆？先拿书面许可，租约结束前要刷回来。", actionHint: "用no-go和paint it back", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "One more thing — can we negotiate the rent at all? I saw a similar unit nearby for $1,300.",
            textZh: "还有一件事——租金能谈吗？我看到附近类似的单元1300美元。",
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "I can't lower the monthly rent, but I can offer you one month free if you sign an 18-month lease instead of 12. That works out to a savings of about $78 per month.",
            textZh: "月租不能降，但如果签18个月而不是12个月，我可以给你免一个月租金。算下来每月省大约78美元。",
            keyPhrases: [
              { en: "one month free", zh: "免一个月租金" },
              { en: "works out to", zh: "算下来相当于" },
            ],
            alternativeExpressions: [
              { textEn: "The rent itself isn't negotiable, but I can throw in a free month if you commit to 18 months instead of 12. That effectively saves you about $78 a month.", textZh: "租金本身不能谈，但如果你签18个月而不是12个月，我可以送一个月。相当于每月省大约78美元。", actionHint: "用throw in和commit to", frequency: "common" },
              { textEn: "I can't budge on the monthly rate, but here's what I can do — sign for 18 months and your first month is on the house. Works out to roughly $78 off each month.", textZh: "月租不能动，但我能这样——签18个月第一个月免费。算下来每月大约省78美元。", actionHint: "用can't budge和on the house", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a good deal actually. I'll take the 18-month lease.",
            textZh: "这倒是挺划算的。我签18个月的。",
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "Great choice. I'll update the lease term. The free month will be applied to your first month, so you'd just pay the security deposit today to move in.",
            textZh: "好选择。我改一下租约期限。免租月用在第一个月，所以今天只需付押金就能入住。",
            keyPhrases: [
              { en: "applied to", zh: "用在/抵扣" },
            ],
            alternativeExpressions: [
              { textEn: "Excellent! I'll revise the lease to 18 months. Your first month is free, so today you'd just need to put down the security deposit to get started.", textZh: "太好了！我把租约改成18个月。第一个月免费，所以今天只需付押金就能入住。", actionHint: "用revise和get started", frequency: "common" },
              { textEn: "Smart move. Let me adjust the contract to 18 months. Since month one is covered, you only need to pay the deposit today to secure the unit.", textZh: "明智之选。我把合同调整到18个月。第一个月已包含，今天只需付押金就能锁定这个单元。", actionHint: "用secure the unit", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Let's get this signed.",
            textZh: "太好了。签吧。",
          },
        ],
      },
    ],
  },

  // ==================== 找室友 ====================
  {
    id: "daily-life-roommate-find",
    category: "daily-life",
    titleZh: "找室友",
    titleEn: "Finding a Roommate",
    description: "通过网站或朋友介绍找合适的室友",
    otherRole: "潜在室友",
    otherRoleIcon: "🤝",
    flows: [
      {
        id: "basic-interview",
        titleZh: "基本面谈",
        titleEn: "Basic Roommate Interview",
        description: "第一次见面聊，了解对方基本情况",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, thanks for coming to see the room! I'm looking for a roommate starting next month. Tell me a bit about yourself.",
            textZh: "嗨，谢谢你来看房间！我下个月开始找室友。介绍一下你自己吧。",
            casualVersion: "Hey, thanks for coming by! So tell me about yourself.",
          },
          {
            speaker: "them",
            role: "潜在室友",
            textEn: "Sure! I'm a graduate student at the university. I'm pretty quiet and mostly study in my room or at the library. I keep a regular schedule — early to bed, early to rise.",
            textZh: "好的！我是大学的研究生。比较安静，大部分时间在房间或图书馆学习。作息很规律——早睡早起。",
            keyPhrases: [
              { en: "graduate student", zh: "研究生" },
              { en: "keep a regular schedule", zh: "作息规律" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! I'm doing my master's at the university. I'm a homebody — mostly studying in my room or at the library. I'm an early bird, usually in bed by 10.", textZh: "好的！我在大学读硕士。比较宅——大部分时间在房间或图书馆学习。我是早起的人，通常10点就睡了。", actionHint: "用homebody和early bird", frequency: "common" },
              { textEn: "Sure thing! I'm a grad student — pretty low-key. I spend most of my time studying and I'm on a regular schedule. Early to bed, early to rise.", textZh: "没问题！我是研究生——比较低调。大部分时间都在学习，作息很规律。早睡早起。", actionHint: "用low-key描述", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds great. I work from home, so I appreciate a quiet environment. Do you cook often?",
            textZh: "听起来不错。我在家办公，所以也喜欢安静的环境。你经常做饭吗？",
          },
          {
            speaker: "them",
            role: "潜在室友",
            textEn: "I cook most of my meals. I'm clean in the kitchen — I always wash my dishes right away. Do you have any rules about sharing kitchen stuff?",
            textZh: "大部分饭自己做。厨房很干净——碗筷都马上洗。你对共用厨房用品有什么规定吗？",
            keyPhrases: [
              { en: "wash my dishes right away", zh: "马上洗碗" },
              { en: "kitchen stuff", zh: "厨房用品" },
            ],
            alternativeExpressions: [
              { textEn: "I cook a lot actually. But I'm really tidy — I clean up right after cooking. Any ground rules about sharing kitchen items?", textZh: "我做饭挺多的。但我很整洁——做完饭马上收拾。共用厨房物品有什么规定吗？", actionHint: "用tidy替代clean", frequency: "common" },
              { textEn: "Yeah, I cook most nights. I always do my dishes immediately — I can't stand a messy kitchen. How do you feel about sharing pots and pans?", textZh: "是的，我大部分晚上做饭。碗碟我都立刻洗——受不了脏厨房。你觉得共用锅具怎么样？", actionHint: "用can't stand表达态度", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I think we can share basic things like pots and pans, but groceries are separate. How about overnight guests?",
            textZh: "我觉得锅碗瓢盆这些可以共用，但食材各买各的。过夜的客人怎么说？",
          },
          {
            speaker: "them",
            role: "潜在室友",
            textEn: "I rarely have guests stay over, but if I do, I'd always give you a heads up beforehand. I think communication is key for roommates.",
            textZh: "我很少有人留宿，但如果有，一定会提前跟你说。我觉得室友之间沟通最重要。",
            keyPhrases: [
              { en: "give you a heads up", zh: "提前通知你" },
              { en: "communication is key", zh: "沟通最重要" },
            ],
            alternativeExpressions: [
              { textEn: "Overnight guests are rare for me. If it does happen, I'll definitely let you know in advance. I think good communication makes everything easier.", textZh: "我很少有人留宿。如果有，一定提前告诉你。我觉得好的沟通让一切更顺利。", actionHint: "用let you know in advance", frequency: "common" },
              { textEn: "I hardly ever have people stay over. But on the off chance I do, I'd always check with you first. I'm a big believer in open communication between roommates.", textZh: "我几乎不会有人留宿。万一有的话，一定先跟你确认。我非常相信室友之间坦诚沟通。", actionHint: "用check with you first", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Totally agree. The rent is $800 per month, utilities split 50-50. Move-in would be the first of next month. Sound good?",
            textZh: "完全同意。房租每月800美元，水电费五五分。下月一号入住。可以吗？",
          },
          {
            speaker: "them",
            role: "潜在室友",
            textEn: "That works for me! Do I need to sign a separate agreement with you, or am I added to the main lease?",
            textZh: "没问题！我需要跟你单独签协议，还是加到主租约上？",
            keyPhrases: [
              { en: "separate agreement", zh: "单独协议" },
              { en: "main lease", zh: "主租约" },
            ],
            alternativeExpressions: [
              { textEn: "Sounds great! How does the lease work — do I get added to yours, or do we sign a separate roommate contract?", textZh: "太好了！租约怎么弄——把我加到你的上面，还是我们另签个室友合同？", actionHint: "用roommate contract", frequency: "common" },
              { textEn: "I'm in! Quick question about paperwork — should I go on the main lease, or is there a separate agreement between us?", textZh: "我同意！关于手续快问一下——我上主租约，还是我们之间单独签协议？", actionHint: "用I'm in开头表示同意", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll talk to the landlord about adding you to the lease. In the meantime, I'll draft a roommate agreement for us both to sign.",
            textZh: "我跟房东商量把你加到租约上。同时我写一份室友协议我们双方签字。",
          },
        ],
      },
      {
        id: "red-flags",
        titleZh: "筛选不合适的室友",
        titleEn: "Screening for Red Flags",
        description: "面谈中发现不太合适，需要婉拒",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "潜在室友",
            textEn: "So I work night shifts, so I'd be sleeping during the day. Is that cool? And I usually have friends over on weekends — we like to hang out and play music.",
            textZh: "我上夜班，所以白天睡觉。没问题吧？而且周末经常有朋友来——我们一起玩音乐。",
            keyPhrases: [
              { en: "night shifts", zh: "夜班" },
              { en: "hang out", zh: "聚会/玩" },
            ],
            alternativeExpressions: [
              { textEn: "Just so you know, I work nights, so I sleep during the day. And I usually have friends over on weekends — we like to jam and listen to music.", textZh: "跟你说一下，我上夜班，白天睡觉。周末经常有朋友来——我们喜欢一起玩音乐。", actionHint: "用jam表示玩音乐", frequency: "common" },
              { textEn: "I should mention — my schedule is opposite. I do night shifts and sleep during the day. Oh, and weekends I usually have buddies over to play music.", textZh: "要提一下——我的时间是反的。上夜班白天睡觉。还有周末经常有朋友来一起玩音乐。", actionHint: "用schedule is opposite", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I see. I work from home during the day, so I need it to be quiet. How loud does it get on weekends?",
            textZh: "这样啊。我白天在家办公，需要安静。周末会很吵吗？",
          },
          {
            speaker: "them",
            role: "潜在室友",
            textEn: "I mean, it's not crazy loud, but we do play guitar and drums. Usually until midnight or so. Oh, and I have two cats — is that okay?",
            textZh: "也不是特别吵，但我们弹吉他和打鼓。通常到午夜左右。哦对了，我有两只猫——行吗？",
            keyPhrases: [
              { en: "not crazy loud", zh: "不是特别吵" },
            ],
            alternativeExpressions: [
              { textEn: "It's not super loud, but yeah — guitars and drums. Usually goes till around midnight. Oh, and I forgot to mention, I have two cats. Would that be an issue?", textZh: "不是特别响，但确实有吉他和鼓。通常到午夜左右。哦对了忘说了，我有两只猫。有问题吗？", actionHint: "用goes till更口语", frequency: "common" },
              { textEn: "Well, we play guitar and drums, so there's some noise. It usually wraps up around midnight. Also — two cats. Is that going to be a problem?", textZh: "嗯，我们弹吉他打鼓，所以有些声响。通常午夜左右结束。另外——两只猫，会有问题吗？", actionHint: "用wraps up替代until", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I appreciate your honesty. To be frank, I think our lifestyles might not be the best match. I need quiet during the day for work, and the lease only allows one pet.",
            textZh: "谢谢你的坦诚。坦白说，我觉得我们的生活方式可能不太匹配。我工作需要白天安静，而且租约只允许养一只宠物。",
          },
          {
            speaker: "them",
            role: "潜在室友",
            textEn: "Yeah, I totally get it. No hard feelings. It's better to figure this out now than have problems later.",
            textZh: "嗯，我完全理解。没关系。现在搞清楚总比以后出问题好。",
            keyPhrases: [
              { en: "no hard feelings", zh: "没有怨气/不介意" },
              { en: "figure this out", zh: "搞清楚这件事" },
            ],
            alternativeExpressions: [
              { textEn: "I completely understand. No worries at all. You're right — better to be upfront now than have issues down the road.", textZh: "我完全理解。一点不介意。你说得对——现在坦诚比以后出问题好。", actionHint: "用be upfront和down the road", frequency: "common" },
              { textEn: "Totally fair. I appreciate your honesty. It's way better to know this now than to deal with problems later.", textZh: "完全合理。感谢你的诚实。现在知道总比以后处理矛盾好得多。", actionHint: "用way better to know", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Exactly. I hope you find a great place. There are some bigger apartments in this complex that might work better for your lifestyle.",
            textZh: "是的。希望你能找到好地方。这个小区有些大公寓可能更适合你的生活方式。",
          },
          {
            speaker: "them",
            role: "潜在室友",
            textEn: "Thanks for the tip! Good luck finding a roommate.",
            textZh: "谢谢建议！祝你找到好室友。",
            keyPhrases: [
              { en: "thanks for the tip", zh: "谢谢建议" },
            ],
            alternativeExpressions: [
              { textEn: "That's helpful, I'll check those out! Hope you find the perfect roommate.", textZh: "好信息，我去看看！希望你找到理想的室友。", actionHint: "用perfect roommate", frequency: "common" },
              { textEn: "Appreciate the suggestion! I'll look into it. Best of luck with your search.", textZh: "谢谢建议！我去了解一下。祝你找室友顺利。", actionHint: "用best of luck with your search", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks, you too! Take care.",
            textZh: "谢谢，你也是！保重。",
          },
        ],
      },
    ],
  },

  // ==================== 室友规则 ====================
  {
    id: "daily-life-roommate-rules",
    category: "daily-life",
    titleZh: "室友规则",
    titleEn: "Roommate Rules",
    description: "和室友讨论并确定共同生活规则",
    otherRole: "室友",
    otherRoleIcon: "📋",
    flows: [
      {
        id: "basic-rules",
        titleZh: "基本规则制定",
        titleEn: "Setting Basic Rules",
        description: "和新室友讨论共同生活的基本规则",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Now that you've moved in, I think we should set some ground rules so everything runs smoothly. What do you think?",
            textZh: "你搬进来了，我觉得我们应该定一些基本规则，让一切顺利。你觉得呢？",
            casualVersion: "Hey, should we talk about house rules? Just so we're on the same page.",
          },
          {
            speaker: "them",
            role: "室友",
            textEn: "Absolutely, that's a great idea. I've lived with roommates before, and having clear rules from the start makes a huge difference.",
            textZh: "当然，好主意。我以前有过室友，一开始就定好规则差别很大。",
            keyPhrases: [
              { en: "ground rules", zh: "基本规则" },
              { en: "makes a huge difference", zh: "差别很大" },
            ],
            alternativeExpressions: [
              { textEn: "Totally agree. Setting expectations upfront is so important. I've had roommates before — clear rules from day one make everything smoother.", textZh: "完全同意。提前设好期望非常重要。我以前有过室友——从第一天就定好规则一切都顺畅很多。", actionHint: "用setting expectations upfront", frequency: "common" },
              { textEn: "For sure! I'm all for it. From past experience, having ground rules makes living together way easier.", textZh: "当然！我完全支持。根据以往经验，有基本规则让合住容易得多。", actionHint: "用I'm all for it", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Let's start with cleaning. How about we take turns cleaning the common areas — kitchen, bathroom, and living room — on a weekly rotation?",
            textZh: "先说清洁。公共区域——厨房、浴室和客厅——我们每周轮流打扫怎么样？",
          },
          {
            speaker: "them",
            role: "室友",
            textEn: "Works for me. And the rule should be: if you cook, you clean your dishes that same day. No dishes piling up in the sink.",
            textZh: "可以。规则应该是：谁做饭谁当天洗碗。不能碗堆在水槽里。",
            keyPhrases: [
              { en: "weekly rotation", zh: "每周轮换" },
              { en: "piling up", zh: "堆积" },
            ],
            alternativeExpressions: [
              { textEn: "Sounds good. One thing I feel strongly about: whoever cooks cleans their dishes the same day. No letting stuff pile up in the sink.", textZh: "可以。有一条我比较坚持：谁做饭谁当天洗碗。不能堆在水槽里。", actionHint: "用feel strongly about", frequency: "common" },
              { textEn: "I'm on board with that. And let's agree — dishes get done the same day. A clean sink keeps everyone happy.", textZh: "我同意。我们约好——碗当天洗完。水槽干净大家都开心。", actionHint: "用I'm on board和clean sink", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Agreed. How about quiet hours? I usually go to bed around 10:30 on weeknights.",
            textZh: "同意。安静时间呢？工作日晚上我通常10点半就睡了。",
          },
          {
            speaker: "them",
            role: "室友",
            textEn: "That's reasonable. How about quiet hours from 10 PM to 8 AM on weeknights, and midnight to 9 AM on weekends? Headphones for music and TV after quiet hours.",
            textZh: "合理。工作日晚上10点到早上8点、周末午夜到早上9点安静时间怎么样？安静时间后看电视听音乐戴耳机。",
            keyPhrases: [
              { en: "quiet hours", zh: "安静时间" },
              { en: "headphones", zh: "耳机" },
            ],
            alternativeExpressions: [
              { textEn: "Fair enough. Let's say 10 to 8 on work nights and midnight to 9 on weekends? After quiet hours, headphones for anything with sound.", textZh: "合理。工作日晚上10到8点、周末午夜到9点怎么样？安静时间后有声音的都戴耳机。", actionHint: "用work nights口语化", frequency: "common" },
              { textEn: "That works. How about we set quiet hours at 10 PM weeknights, midnight on weekends? And we switch to headphones for music and TV during those times.", textZh: "可以。安静时间定工作日晚10点、周末午夜怎么样？那段时间音乐电视都用耳机。", actionHint: "用switch to headphones", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. And for shared expenses like cleaning supplies and toilet paper, should we split them or take turns buying?",
            textZh: "很好。共用的东西比如清洁用品和厕纸，平分还是轮流买？",
          },
          {
            speaker: "them",
            role: "室友",
            textEn: "How about we each put $30 a month into a shared fund for household essentials? We can use Venmo or a shared app to track it.",
            textZh: "每人每月往公共基金放30美元买家庭必需品怎么样？可以用Venmo或共享App记账。",
            keyPhrases: [
              { en: "shared fund", zh: "公共基金" },
              { en: "household essentials", zh: "家庭必需品" },
            ],
            alternativeExpressions: [
              { textEn: "What if we each chip in $30 a month for a shared household fund? We can track everything with Splitwise or Venmo.", textZh: "每人每月凑30美元做家庭共用基金怎么样？可以用Splitwise或Venmo记账。", actionHint: "用chip in替代put", frequency: "common" },
              { textEn: "I'd suggest a monthly kitty — $30 each for things like paper towels, cleaning supplies, and toilet paper. We can use an app to keep track.", textZh: "我建议设个月度公共基金——每人30美元买纸巾、清洁用品、厕纸之类。用App记账。", actionHint: "用monthly kitty英式说法", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great idea. Let's write all this down so we both have a reference.",
            textZh: "好主意。我们把这些都写下来，双方都有参考。",
          },
        ],
      },
      {
        id: "conflict-resolution",
        titleZh: "矛盾解决",
        titleEn: "Resolving a Conflict",
        description: "室友之间出现生活矛盾，需要沟通解决",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hey, can we talk? I've noticed the dishes have been sitting in the sink for a few days, and the kitchen is getting kind of messy.",
            textZh: "嘿，能聊聊吗？我注意到碗在水槽里放了好几天了，厨房有点乱。",
          },
          {
            speaker: "them",
            role: "室友",
            textEn: "Oh, sorry about that. I've been swamped with exams this week and totally dropped the ball on cleaning. I'll take care of it tonight.",
            textZh: "哦，抱歉。这周考试太忙了，完全忘了打扫。今晚就收拾。",
            keyPhrases: [
              { en: "swamped with", zh: "忙于/被...淹没" },
              { en: "dropped the ball", zh: "掉了链子/疏忽了" },
            ],
            alternativeExpressions: [
              { textEn: "You're right, my bad. Finals have been killing me this week and I completely spaced on the cleaning. I'll get on it tonight.", textZh: "你说得对，我的错。这周期末考试快把我搞疯了，完全忘了打扫。今晚就收拾。", actionHint: "用my bad和spaced on", frequency: "common" },
              { textEn: "I'm sorry — I know, it's not cool. I've had back-to-back exams and let the dishes slide. I'll clean everything up this evening.", textZh: "抱歉——我知道这样不好。考试一个接一个，碗筷就耽搁了。今晚全部收拾好。", actionHint: "用let the dishes slide", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I understand being busy — it happens. I just want to make sure we stick to our agreement so things don't build up.",
            textZh: "忙我理解——谁都会有。我只是想确保我们遵守约定，别越积越多。",
          },
          {
            speaker: "them",
            role: "室友",
            textEn: "You're right. If I'm too busy to do my share, I'll let you know and make up for it the next day.",
            textZh: "你说得对。如果忙得做不了自己的份，我会跟你说，第二天补上。",
            keyPhrases: [
              { en: "make up for it", zh: "补上/弥补" },
              { en: "do my share", zh: "做我该做的份" },
            ],
            alternativeExpressions: [
              { textEn: "Fair point. Going forward, if I can't keep up with my part, I'll give you a heads-up and catch up the next day.", textZh: "说得对。以后如果我跟不上自己的份，会提前跟你说，第二天补上。", actionHint: "用going forward和catch up", frequency: "common" },
              { textEn: "You're absolutely right. I promise to communicate better. If I'm slammed, I'll tell you upfront and make it right the following day.", textZh: "你完全正确。我保证更好地沟通。如果忙不过来，会提前说清楚，第二天补回来。", actionHint: "用slammed和make it right", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That works. And same goes for me — if something bothers you, please bring it up directly. I'd rather talk it out than let it fester.",
            textZh: "可以。我也一样——如果有什么让你不舒服，直接说。我宁可说开，不要积怨。",
          },
          {
            speaker: "them",
            role: "室友",
            textEn: "Agreed. Actually, since we're being honest — the thermostat. You keep it at 68, and I'm always freezing. Can we compromise at 70?",
            textZh: "同意。既然坦诚相说——说下温控。你一直调到68度（华氏），我一直冻得不行。能折中调到70度吗？",
            keyPhrases: [
              { en: "thermostat", zh: "温控器" },
              { en: "compromise", zh: "折中/妥协" },
            ],
            alternativeExpressions: [
              { textEn: "Deal. And since we're on the topic of honesty — can we talk about the thermostat? You set it to 68, and I'm freezing. Would 70 be a fair middle ground?", textZh: "成交。既然说到坦诚——能聊聊温控器吗？你调到68度，我一直冻得不行。70度算个折中吧？", actionHint: "用fair middle ground", frequency: "common" },
              { textEn: "Same goes for me. Speaking of being open — the temperature. I've been cold at 68. Think we could meet halfway at 70?", textZh: "我也一样。说到坦诚——温度的问题。68度我一直觉得冷。能折中到70度吗？", actionHint: "用meet halfway", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "70 is fair. I can wear lighter clothes at home. See — this is exactly why communication matters!",
            textZh: "70度可以。我在家穿薄点就行。看——这就是为什么沟通很重要！",
          },
          {
            speaker: "them",
            role: "室友",
            textEn: "Ha, totally! I'm glad we talked. I'll go clean the kitchen right now.",
            textZh: "哈，没错！很高兴我们聊了。我现在就去收拾厨房。",
            keyPhrases: [
              { en: "I'm glad we talked", zh: "很高兴我们聊了" },
            ],
            alternativeExpressions: [
              { textEn: "Right? This was a good talk. Alright, I'm heading to the kitchen now — it'll be spotless in 20 minutes.", textZh: "对吧？聊得很好。好了，我现在就去厨房——20分钟内干干净净。", actionHint: "用spotless保证干净", frequency: "common" },
              { textEn: "Haha, agreed! Communication really is key. Okay, kitchen duty — I'm on it right now.", textZh: "哈哈，同意！沟通真的很关键。好了，厨房任务——我现在就去。", actionHint: "用I'm on it", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 车库拍卖 ====================
  {
    id: "daily-life-garage-sale",
    category: "daily-life",
    titleZh: "车库拍卖",
    titleEn: "Garage Sale",
    description: "参加或举办车库拍卖，买卖二手物品",
    otherRole: "卖家/买家",
    otherRoleIcon: "🏷️",
    flows: [
      {
        id: "basic-shopping",
        titleZh: "淘二手好物",
        titleEn: "Shopping at a Garage Sale",
        description: "在邻居的车库拍卖中挑选物品和讨价还价",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi! I saw the signs for your garage sale. Mind if I take a look?",
            textZh: "嗨！我看到车库拍卖的标志了。可以看看吗？",
            casualVersion: "Hey, nice sale! Can I browse around?",
          },
          {
            speaker: "them",
            role: "卖家",
            textEn: "Go right ahead! Everything is priced. Furniture is in the garage, clothes are on the racks, and small items are on the tables.",
            textZh: "随便看！都标了价。家具在车库里，衣服在架子上，小件在桌上。",
            keyPhrases: [
              { en: "priced", zh: "标了价" },
              { en: "racks", zh: "架子" },
            ],
            alternativeExpressions: [
              { textEn: "Help yourself! All items are marked with prices. Furniture's in the back, clothes on the racks, smaller stuff on the tables.", textZh: "随便看！所有东西都标了价。家具在后面，衣服在架子上，小件在桌上。", actionHint: "用help yourself", frequency: "common" },
              { textEn: "Please, look around! Everything has a price tag. Big pieces are in the garage, clothing is on the racks out front, and knickknacks are on the tables.", textZh: "请随便看！都有价签。大件在车库里，衣服在前面架子上，小物件在桌上。", actionHint: "用knickknacks表示小物件", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much for this bookshelf? The tag says $40.",
            textZh: "这个书架多少钱？标签上写40美元。",
          },
          {
            speaker: "them",
            role: "卖家",
            textEn: "That's a solid wood bookshelf — we paid $200 for it new. $40 is already a great price. But I could do $35 if you're buying more than one item.",
            textZh: "这是实木书架——新的花了200美元。40美元已经很划算了。不过如果你多买几样，35美元也行。",
            keyPhrases: [
              { en: "solid wood", zh: "实木" },
            ],
            alternativeExpressions: [
              { textEn: "It's real wood — cost us $200 brand new. Forty bucks is a steal. But if you grab more stuff, I could knock it down to $35.", textZh: "实木的——全新花了200美元。40块已经超值。但如果你多买点，可以降到35。", actionHint: "用a steal和knock it down", frequency: "common" },
              { textEn: "That shelf is solid wood, originally $200. At $40, it's basically giving it away. Tell you what — buy a few things and I'll do $35 for it.", textZh: "那个书架是实木的，原价200美元。40美元基本就是送了。这样吧——多买几样35美元给你。", actionHint: "用giving it away夸张", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm also interested in this lamp and the set of plates. What would you take for everything?",
            textZh: "我还想要这个台灯和这套盘子。全部一起多少钱？",
            culturalNote: "在美国车库拍卖中讨价还价是完全正常和被期待的行为。",
          },
          {
            speaker: "them",
            role: "卖家",
            textEn: "The lamp is $10 and the plates are $15. For everything together, how about $55?",
            textZh: "台灯10美元，盘子15美元。全部加起来55美元怎么样？",
            keyPhrases: [
              { en: "for everything together", zh: "全部加起来" },
            ],
            alternativeExpressions: [
              { textEn: "Lamp's ten, plates are fifteen. Bundle the whole lot and I'll do $55.", textZh: "台灯10，盘子15。全打包55美元。", actionHint: "更简洁口语", frequency: "common" },
              { textEn: "That's $10 for the lamp and $15 for the plate set. If you take everything, I'll give you a deal at $55.", textZh: "台灯10美元，盘子一套15美元。全部拿走的话给你优惠价55美元。", actionHint: "用give you a deal", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Would you take $45 for the lot?",
            textZh: "全部45美元行吗？",
          },
          {
            speaker: "them",
            role: "卖家",
            textEn: "Meet me in the middle — $50 and you've got a deal.",
            textZh: "折中一下——50美元成交。",
            keyPhrases: [
              { en: "meet me in the middle", zh: "折中一下" },
              { en: "you've got a deal", zh: "成交" },
            ],
            alternativeExpressions: [
              { textEn: "How about we split the difference? Fifty bucks and it's yours.", textZh: "我们各让一步？50块成交。", actionHint: "用split the difference", frequency: "common" },
              { textEn: "Tell you what — $50 flat and we have a deal. That's fair for both of us.", textZh: "这样吧——50块整成交。对咱俩都公平。", actionHint: "用flat和fair for both", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Deal! Do you have change for a hundred?",
            textZh: "成交！100美元能找开吗？",
          },
          {
            speaker: "them",
            role: "卖家",
            textEn: "Let me check... yes, here's $50 back. Need help loading the bookshelf into your car?",
            textZh: "我看看……有的，找你50美元。需要帮忙把书架搬到车里吗？",
            keyPhrases: [
              { en: "loading", zh: "装载/搬" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, I've got change. Here's your fifty. Want a hand getting the bookshelf to your car?", textZh: "有零钱。找你50。需要帮忙把书架搬到车上吗？", actionHint: "用want a hand", frequency: "common" },
              { textEn: "Yep, here's $50 change. Let me help you carry that bookshelf out — it's heavy.", textZh: "好的，找你50。我帮你把书架搬出去——挺重的。", actionHint: "主动帮忙更热情", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "hosting-sale",
        titleZh: "举办车库拍卖",
        titleEn: "Hosting a Garage Sale",
        description: "自己举办车库拍卖，和买家互动",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "买家",
            textEn: "Hey, I saw your post on Nextdoor about the garage sale. You mentioned baby stuff — do you still have the stroller?",
            textZh: "嘿，我在Nextdoor上看到你车库拍卖的帖子了。你提到有婴儿用品——婴儿车还在吗？",
            keyPhrases: [
              { en: "stroller", zh: "婴儿车" },
            ],
            alternativeExpressions: [
              { textEn: "Hi! I noticed your post about the garage sale on Nextdoor. You mentioned baby items — is the stroller still up for grabs?", textZh: "嗨！我在Nextdoor上看到你的车库拍卖帖子。你提到有婴儿用品——婴儿车还有吗？", actionHint: "用up for grabs", frequency: "common" },
              { textEn: "Hey there! I saw on Nextdoor you're selling baby stuff. Do you still have that stroller available?", textZh: "嘿！我在Nextdoor上看到你在卖婴儿用品。婴儿车还在卖吗？", actionHint: "更简洁直接", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes! It's a Graco jogger stroller, barely used. I'm asking $60 for it.",
            textZh: "在的！是Graco慢跑婴儿车，几乎没用过。卖60美元。",
          },
          {
            speaker: "them",
            role: "买家",
            textEn: "It looks great. Are all the parts there — the canopy, the tray, the rain cover?",
            textZh: "看起来不错。配件都在吗——遮阳篷、托盘、雨罩？",
            keyPhrases: [
              { en: "canopy", zh: "遮阳篷" },
              { en: "tray", zh: "托盘" },
              { en: "rain cover", zh: "雨罩" },
            ],
            alternativeExpressions: [
              { textEn: "Looks like it's in great shape. Does it come with everything — sunshade, snack tray, rain cover?", textZh: "看起来状态很好。都齐全吗——遮阳帘、零食盘、雨罩？", actionHint: "用come with everything", frequency: "common" },
              { textEn: "Nice condition! Are all the accessories included? Canopy, tray, rain cover — the whole kit?", textZh: "状态不错！配件都在吗？遮阳篷、托盘、雨罩——全套？", actionHint: "用the whole kit", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Everything is included. I even have the original manual. My kids outgrew it.",
            textZh: "都包含在内。原装说明书也有。我的孩子长大了不用了。",
          },
          {
            speaker: "them",
            role: "买家",
            textEn: "Can you do $45? I'm also interested in that high chair over there.",
            textZh: "45美元行吗？我还对那边的婴儿高脚椅感兴趣。",
            keyPhrases: [
              { en: "high chair", zh: "婴儿高脚椅" },
            ],
            alternativeExpressions: [
              { textEn: "Would you take $45 for the stroller? I'm eyeing that high chair too.", textZh: "婴儿车45美元行吗？我还看上那边的高脚椅了。", actionHint: "用eyeing表示感兴趣", frequency: "common" },
              { textEn: "Any chance you'd go down to $45? Also, what are you asking for the high chair?", textZh: "有没有可能降到45？另外高脚椅卖多少？", actionHint: "用go down to和asking for", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The high chair is $25. Tell you what — I'll do both for $65. That's a steal.",
            textZh: "高脚椅25美元。这样吧——两样65美元。太划算了。",
          },
          {
            speaker: "them",
            role: "买家",
            textEn: "Sold! I only have Venmo though — do you take Venmo?",
            textZh: "成交！不过我只有Venmo——你收Venmo吗？",
            keyPhrases: [
              { en: "sold", zh: "成交" },
              { en: "that's a steal", zh: "太划算了" },
            ],
            alternativeExpressions: [
              { textEn: "Deal! One thing though — I don't have cash on me. Can I pay you through Venmo?", textZh: "成交！不过——我没带现金。能Venmo付吗？", actionHint: "解释没带现金", frequency: "common" },
              { textEn: "I'll take both! Do you accept Venmo? That's all I have on me right now.", textZh: "两样都要！你收Venmo吗？我现在只有这个支付方式。", actionHint: "用that's all I have", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, Venmo works. Let me show you my QR code. And I'll help you carry these to your car.",
            textZh: "可以，Venmo没问题。我给你看二维码。我帮你搬到车里。",
          },
        ],
      },
    ],
  },

  // ==================== 庭院维护 ====================
  {
    id: "daily-life-yard-work",
    category: "daily-life",
    titleZh: "庭院维护",
    titleEn: "Yard Work",
    description: "自己做或请人做庭院维护——割草、修剪、施肥",
    otherRole: "园艺工人",
    otherRoleIcon: "🌿",
    flows: [
      {
        id: "basic-mowing",
        titleZh: "基本割草",
        titleEn: "Basic Lawn Mowing",
        description: "找人割草和基本庭院维护",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I got your flyer about lawn care services. How much do you charge for mowing?",
            textZh: "你好，我收到你的草坪护理传单了。割草怎么收费？",
            casualVersion: "Hey, I saw your flyer. What do you charge for mowing?",
          },
          {
            speaker: "them",
            role: "园艺工人",
            textEn: "It depends on the yard size. For a standard quarter-acre lot, I charge $35 per mow. That includes mowing, edging, and blowing the clippings.",
            textZh: "看院子大小。标准四分之一英亩的院子，割一次35美元。包括割草、修边和吹走草屑。",
            keyPhrases: [
              { en: "quarter-acre lot", zh: "四分之一英亩的地" },
              { en: "edging", zh: "修边" },
              { en: "clippings", zh: "草屑" },
            ],
            alternativeExpressions: [
              { textEn: "Pricing is based on lot size. A typical quarter-acre yard runs $35 per mow — that covers cutting, edging, and cleanup.", textZh: "按院子大小收费。标准四分之一英亩的院子每次35美元——包括割草、修边和清理。", actionHint: "用pricing is based on", frequency: "common" },
              { textEn: "It varies by yard size. For a standard suburban lot, I charge $35. That includes mowing, edging along the walkways, and blowing off the clippings.", textZh: "取决于院子大小。标准郊区院子收35美元。包括割草、沿走道修边和吹走草屑。", actionHint: "用suburban lot", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How often should the lawn be mowed?",
            textZh: "多久应该割一次草？",
          },
          {
            speaker: "them",
            role: "园艺工人",
            textEn: "During growing season — spring and summer — once a week is ideal. In fall, every two weeks. I offer a weekly plan at $130 a month, which saves you a bit.",
            textZh: "生长季——春夏——最好每周一次。秋天可以两周一次。我有周计划每月130美元，省一点。",
            keyPhrases: [
              { en: "growing season", zh: "生长季" },
              { en: "weekly plan", zh: "周计划" },
            ],
            alternativeExpressions: [
              { textEn: "In spring and summer, weekly mowing keeps it looking best. In the fall, every two weeks is fine. I have a monthly plan at $130 that saves you a little.", textZh: "春夏每周割一次最好看。秋天两周一次就行。我有月度计划130美元，能省点。", actionHint: "用keeps it looking best", frequency: "common" },
              { textEn: "Weekly is ideal during the growing months. Once fall hits, biweekly works. If you sign up for my monthly service, it's $130 — a bit cheaper than paying per visit.", textZh: "生长季每周最理想。入秋后两周一次就行。如果签月度服务130美元——比按次付划算一些。", actionHint: "用biweekly和sign up", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do you also do hedge trimming and weeding?",
            textZh: "你也修剪树篱和除草吗？",
          },
          {
            speaker: "them",
            role: "园艺工人",
            textEn: "Yes. Hedge trimming is $20 extra per visit, and weeding the flower beds is $15. Or I can bundle everything for $160 a month.",
            textZh: "是的。修剪树篱每次额外20美元，花坛除草15美元。或者我可以打包每月160美元。",
            keyPhrases: [
              { en: "hedge trimming", zh: "修剪树篱" },
              { en: "weeding", zh: "除草" },
              { en: "flower beds", zh: "花坛" },
              { en: "bundle", zh: "打包" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely. Hedges are $20 extra per trip, and weeding runs $15. Or I can package it all together for $160 a month.", textZh: "当然。树篱每次额外20美元，除草15美元。或者全部打包每月160美元。", actionHint: "用per trip和package", frequency: "common" },
              { textEn: "Sure do. Add $20 for hedge work and $15 for weeding each visit. Or save with the all-inclusive bundle at $160 monthly.", textZh: "当然做。每次加20美元修树篱，15美元除草。或者选全包套餐每月160美元更省。", actionHint: "用all-inclusive bundle", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The bundle sounds good. What day would you come?",
            textZh: "打包挺好的。你哪天来？",
          },
          {
            speaker: "them",
            role: "园艺工人",
            textEn: "I'm in your neighborhood every Thursday. I usually start around 9 AM. You don't even need to be home — I just need access to the yard.",
            textZh: "我每周四在你们那片。通常早上9点开始。你不用在家——能进院子就行。",
            keyPhrases: [
              { en: "access to the yard", zh: "能进院子" },
            ],
            alternativeExpressions: [
              { textEn: "Thursdays are my day in your area. I typically get going around 9 AM. You don't need to be home — just make sure I can get into the yard.", textZh: "周四是我在你那片的日子。通常9点左右开始。你不用在家——确保我能进院子就行。", actionHint: "用get going替代start", frequency: "common" },
              { textEn: "I'm already in your neighborhood on Thursdays, so that works out perfectly. I'll be there around 9. You don't even have to be around — I just need yard access.", textZh: "周四我正好在你们那片，非常方便。大概9点到。你都不用在——我能进院子就行。", actionHint: "用works out perfectly", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The gate is unlocked. Let's start this week.",
            textZh: "院门没锁。这周就开始吧。",
          },
        ],
      },
      {
        id: "seasonal-cleanup",
        titleZh: "季节性大清理",
        titleEn: "Seasonal Cleanup",
        description: "秋季落叶清理或春季整地",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "My yard is a mess after the fall. Leaves everywhere, dead plants — the garden needs a total cleanup. Can you handle all of that?",
            textZh: "秋天过后院子乱成一团。到处是落叶、枯死的植物，花园需要彻底清理。你能全做吗？",
          },
          {
            speaker: "them",
            role: "园艺工人",
            textEn: "Absolutely. A full fall cleanup includes leaf removal, cutting back perennials, clearing out dead annuals, and a final mow. For your yard size, about $200.",
            textZh: "当然。全面秋季清理包括清除落叶、修剪多年生植物、清除枯死一年生植物和最后一次割草。你院子的大小，大约200美元。",
            keyPhrases: [
              { en: "fall cleanup", zh: "秋季清理" },
              { en: "leaf removal", zh: "清除落叶" },
              { en: "perennials", zh: "多年生植物" },
              { en: "annuals", zh: "一年生植物" },
            ],
            alternativeExpressions: [
              { textEn: "For sure. A complete fall cleanup covers raking and bagging leaves, trimming perennials, pulling dead annuals, and one last mow. For your lot, that's about $200.", textZh: "当然。全面秋季清理包括耙叶装袋、修剪多年生植物、拔除枯死一年生植物和最后一次割草。你的院子大约200美元。", actionHint: "用raking and bagging", frequency: "common" },
              { textEn: "That's my specialty. Full fall cleanup: all leaves removed, perennials cut back, dead plants cleared, plus a final mow. For your yard size, I'd quote $200.", textZh: "这是我的专长。全面秋季清理：清除所有落叶、修剪多年生植物、清理枯死植物，加最后一次割草。你院子的大小，报价200美元。", actionHint: "用my specialty和quote", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Should I also aerate the lawn before winter?",
            textZh: "冬天前需要给草坪打孔通气吗？",
          },
          {
            speaker: "them",
            role: "园艺工人",
            textEn: "Great question. Aeration helps the roots breathe and absorb water. I recommend it once a year in the fall. It's an extra $80, but your lawn will look much healthier in spring.",
            textZh: "好问题。打孔通气帮助根部呼吸和吸收水分。建议秋天每年做一次。额外80美元，但春天草坪会健康很多。",
            keyPhrases: [
              { en: "aeration", zh: "打孔通气" },
              { en: "roots breathe", zh: "根部呼吸" },
            ],
            alternativeExpressions: [
              { textEn: "Glad you asked. Aerating loosens compacted soil so the roots can breathe and soak up water better. I recommend doing it every fall. It's an extra $80 but makes a huge difference in spring.", textZh: "问得好。打孔通气能松动板结的土壤，让根部更好地呼吸和吸水。建议每年秋天做一次。额外80美元，但春天效果明显。", actionHint: "用loosens compacted soil", frequency: "common" },
              { textEn: "That's smart thinking. Aeration lets air and water reach the root zone. Once a year in fall is ideal — $80 extra, and your lawn will come back way healthier in the spring.", textZh: "想得聪明。打孔通气让空气和水到达根部区域。每年秋天一次最理想——额外80美元，春天草坪会健康很多。", actionHint: "用root zone和come back healthier", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Let's do the aeration too. And what about fertilizing?",
            textZh: "打孔通气也做吧。施肥呢？",
          },
          {
            speaker: "them",
            role: "园艺工人",
            textEn: "I always recommend a winterizer fertilizer after aeration. It strengthens the roots for winter. The fertilizer application is $50, including the product.",
            textZh: "我一直建议打孔后施越冬肥。它能增强根部抗冬能力。施肥50美元，包含肥料。",
            keyPhrases: [
              { en: "winterizer fertilizer", zh: "越冬肥" },
              { en: "strengthens the roots", zh: "增强根部" },
            ],
            alternativeExpressions: [
              { textEn: "After aerating, I always suggest applying a winterizer — it feeds the roots through the cold months. That's $50 including the product.", textZh: "打孔后我一直建议施越冬肥——在寒冷月份滋养根部。50美元含肥料。", actionHint: "用feeds the roots", frequency: "common" },
              { textEn: "A winter fertilizer right after aeration is the way to go. It preps the lawn for the cold season. Fifty bucks covers the application and materials.", textZh: "打孔后施冬季肥是最佳选择。为草坪准备过冬。50美元包含施肥和材料。", actionHint: "用preps the lawn", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "So $330 total for everything. When can you start?",
            textZh: "总共330美元。什么时候能开始？",
          },
          {
            speaker: "them",
            role: "园艺工人",
            textEn: "I can come this Saturday morning. The whole job will take about three to four hours. I'll haul away all the debris — you won't have to do anything.",
            textZh: "这周六上午可以来。整个工作大概三到四小时。所有垃圾我会运走——你什么都不用做。",
            keyPhrases: [
              { en: "haul away", zh: "运走" },
              { en: "debris", zh: "碎片/垃圾" },
            ],
            alternativeExpressions: [
              { textEn: "Saturday morning works for me. Figure three to four hours for the whole thing. I'll haul away all the waste — you won't need to lift a finger.", textZh: "周六上午可以。整个活儿大概三到四小时。所有垃圾我运走——你什么都不用动。", actionHint: "用won't need to lift a finger", frequency: "common" },
              { textEn: "I can start first thing Saturday. Should take about three to four hours. Everything gets loaded up and taken away — your yard will look brand new.", textZh: "周六一早就来。大概三到四小时。所有东西装走运走——你的院子会焕然一新。", actionHint: "用first thing和brand new", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. I'll leave the gate open for you.",
            textZh: "太好了。我把门打开等你。",
          },
        ],
      },
    ],
  },

  // ==================== 铲雪 ====================
  {
    id: "daily-life-snow-shovel",
    category: "daily-life",
    titleZh: "铲雪",
    titleEn: "Snow Shoveling",
    description: "冬天铲雪和了解社区铲雪责任",
    otherRole: "邻居",
    otherRoleIcon: "❄️",
    flows: [
      {
        id: "basic-shoveling",
        titleZh: "基本铲雪",
        titleEn: "Basic Snow Shoveling",
        description: "第一次经历大雪，向邻居请教铲雪",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hey, this is my first winter here. Am I responsible for shoveling the sidewalk in front of my house?",
            textZh: "嘿，这是我在这里的第一个冬天。我需要负责铲门前人行道的雪吗？",
            casualVersion: "Hey, do I have to shovel the sidewalk? Never dealt with this before.",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Yes — by city ordinance, homeowners have to clear the sidewalk within 24 hours after the snow stops. Otherwise, you could get fined.",
            textZh: "是的——根据市政条例，房主必须在雪停后24小时内清除人行道上的雪。否则会被罚款。",
            keyPhrases: [
              { en: "city ordinance", zh: "市政条例" },
              { en: "clear the sidewalk", zh: "清除人行道上的雪" },
              { en: "fined", zh: "罚款" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, it's the law here. You've got 24 hours after the snow stops to shovel your sidewalk. If you don't, the city can fine you.", textZh: "是的，这里有规定。雪停后24小时内必须铲人行道。不铲的话市政会罚款。", actionHint: "用it's the law更简洁", frequency: "common" },
              { textEn: "That's right — the city requires homeowners to clear sidewalks within a day after snowfall. Skip it and you might get a ticket.", textZh: "没错——市政要求房主在降雪后一天内清除人行道积雪。不铲可能会收到罚单。", actionHint: "用get a ticket", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I don't even have a snow shovel. Where should I get one?",
            textZh: "我连雪铲都没有。去哪买？",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Home Depot or Lowe's. Get a wide push shovel for the driveway and a smaller one for the walkway. And definitely buy some rock salt or ice melt to prevent slipping.",
            textZh: "Home Depot或Lowe's。买一把宽推铲铲车道，小铲铲走道。一定要买些岩盐或融冰剂防滑。",
            keyPhrases: [
              { en: "push shovel", zh: "推铲" },
              { en: "rock salt", zh: "岩盐" },
              { en: "ice melt", zh: "融冰剂" },
            ],
            alternativeExpressions: [
              { textEn: "Hit up Home Depot or Lowe's. Grab a wide push shovel for the driveway and a smaller one for the walkway. Oh, and pick up some ice melt or rock salt to prevent slipping.", textZh: "去Home Depot或Lowe's。买把宽推铲铲车道，小铲铲走道。哦，再买点融冰剂或岩盐防滑。", actionHint: "用hit up更口语", frequency: "common" },
              { textEn: "Any hardware store — Home Depot, Lowe's. You'll want two shovels: a big push one for the driveway and a regular one for paths. Don't forget rock salt for ice.", textZh: "任何五金店——Home Depot、Lowe's。你需要两把铲子：大推铲铲车道，普通的铲小路。别忘了岩盐除冰。", actionHint: "用any hardware store开头", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How deep does the snow usually get here?",
            textZh: "这里雪一般下多厚？",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "We usually get a few big storms each winter — anywhere from 6 to 12 inches at a time. Start shoveling early; don't wait for it to pile up.",
            textZh: "每个冬天通常有几场大雪——一次6到12英寸。早点开始铲，别等堆积了。",
            keyPhrases: [
              { en: "inches", zh: "英寸" },
              { en: "pile up", zh: "堆积" },
            ],
            alternativeExpressions: [
              { textEn: "Expect a handful of big storms each winter, dropping 6 to 12 inches at a time. Pro tip: don't wait for it to accumulate — shovel early and often.", textZh: "每年冬天有几场大雪，一次下6到12英寸。经验之谈：别等雪积多了——早铲勤铲。", actionHint: "用pro tip", frequency: "common" },
              { textEn: "We get several good-sized storms a year — 6 to 12 inches per storm. My advice: start shoveling while it's still coming down. Way easier than tackling a huge pile later.", textZh: "每年有几场大雪——每次6到12英寸。我的建议：雪还在下的时候就开始铲。比之后铲大堆容易多了。", actionHint: "用while it's still coming down", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Any tips for shoveling? I've never done it before.",
            textZh: "有什么铲雪技巧吗？我从来没铲过。",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Lift with your legs, not your back — shoveling injuries are really common. Push the snow to the side rather than lifting it. And take breaks. Also, don't dump snow near fire hydrants or storm drains.",
            textZh: "用腿发力，不要用腰——铲雪受伤很常见。把雪推到旁边，不要举起来。多休息。还有，别把雪堆在消防栓或雨水沟旁边。",
            keyPhrases: [
              { en: "lift with your legs", zh: "用腿发力" },
              { en: "fire hydrants", zh: "消防栓" },
              { en: "storm drains", zh: "雨水沟" },
            ],
            alternativeExpressions: [
              { textEn: "Bend your knees and use your legs, not your back. Push the snow to the side instead of lifting it. Take breaks, and keep snow away from fire hydrants and drains.", textZh: "弯膝盖用腿力，别用腰。把雪推到旁边而不是举起来。多休息，别把雪堆在消防栓和排水口旁。", actionHint: "用bend your knees", frequency: "common" },
              { textEn: "Number one rule: lift with your legs. Shoveling back injuries are super common. Push don't lift, take frequent breaks, and never block fire hydrants or storm drains.", textZh: "第一法则：用腿发力。铲雪腰伤非常常见。推不要举，经常休息，千万别堵住消防栓或雨水沟。", actionHint: "用number one rule", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks, that's really helpful. I better go buy a shovel today!",
            textZh: "谢谢，太有用了。我今天赶紧去买雪铲！",
          },
        ],
      },
      {
        id: "hire-plow",
        titleZh: "请人铲雪",
        titleEn: "Hiring a Snow Plow Service",
        description: "雪太大，自己铲不过来，找除雪服务",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need my driveway plowed. We got about a foot of snow last night and I can't get my car out.",
            textZh: "你好，我需要清理车道。昨晚下了大约一英尺的雪，车出不来了。",
          },
          {
            speaker: "them",
            role: "除雪服务",
            textEn: "We're getting a lot of calls today! For a standard two-car driveway, it's $50 per plow. We can add your sidewalk and walkway for an extra $20.",
            textZh: "今天电话特别多！标准双车道除雪50美元。人行道和走道额外20美元。",
            keyPhrases: [
              { en: "plowed", zh: "铲雪/除雪" },
              { en: "two-car driveway", zh: "双车位车道" },
            ],
            alternativeExpressions: [
              { textEn: "Busy day! A standard two-car driveway is $50 per plow. If you want the sidewalk and walkway too, it's an additional $20.", textZh: "今天忙坏了！标准双车道除雪50美元。人行道和走道再加20美元。", actionHint: "用busy day开头", frequency: "common" },
              { textEn: "You and everyone else! Plowing a two-car driveway runs $50. We can add your sidewalk and front walk for another $20.", textZh: "你和所有人一样！双车位车道除雪50美元。人行道和门前走道再加20美元。", actionHint: "用you and everyone else幽默", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please do the driveway and sidewalk. How soon can you get here?",
            textZh: "好的，车道和人行道都做。多快能来？",
          },
          {
            speaker: "them",
            role: "除雪服务",
            textEn: "We're working through the neighborhood now. I'd say about two to three hours. We'll text you when we're on the way.",
            textZh: "我们正在这片区域作业。大约两到三小时。出发时会发短信给你。",
            keyPhrases: [
              { en: "working through the neighborhood", zh: "在这片区域作业" },
            ],
            alternativeExpressions: [
              { textEn: "We're already out in your area. I'd estimate two to three hours before we get to you. We'll text when we're on our way.", textZh: "我们已经在你那片了。预计两到三小时到你那儿。出发时会发短信。", actionHint: "用estimate替代say", frequency: "common" },
              { textEn: "Our crew is in your neighborhood right now. Hang tight — should be about two to three hours. You'll get a text before we arrive.", textZh: "我们的团队现在在你那片。稍等——大概两到三小时。到之前会发短信。", actionHint: "用hang tight", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do you offer seasonal contracts? I'd rather not call every time it snows.",
            textZh: "你们有季节合同吗？我不想每次下雪都打电话。",
          },
          {
            speaker: "them",
            role: "除雪服务",
            textEn: "Yes! Our seasonal plan is $400 for the whole winter — unlimited plowing whenever we get 3 inches or more. That includes your driveway and sidewalk. You'd be on our priority list too.",
            textZh: "有的！季节计划整个冬天400美元——只要下雪超过3英寸就来铲，不限次数。包括车道和人行道。你还会在我们的优先名单上。",
            keyPhrases: [
              { en: "seasonal plan", zh: "季节计划" },
              { en: "priority list", zh: "优先名单" },
              { en: "unlimited plowing", zh: "不限次数除雪" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely! For $400 you get all-winter service — we come out automatically whenever there's 3 inches or more. Driveway and sidewalk included, plus you're on our priority list.", textZh: "当然有！400美元包全冬天——只要超过3英寸我们自动来。车道和人行道都包，你还在优先名单上。", actionHint: "用all-winter service", frequency: "common" },
              { textEn: "We sure do. The seasonal contract is $400 — unlimited visits for snow over 3 inches, covers your driveway and sidewalk, and you get bumped to the top of our route.", textZh: "当然有。季节合同400美元——超过3英寸不限次数来铲，包车道和人行道，你会被排在我们路线最前面。", actionHint: "用bumped to the top", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a no-brainer. Sign me up for the seasonal plan.",
            textZh: "太值了。给我报名季节计划。",
          },
          {
            speaker: "them",
            role: "除雪服务",
            textEn: "Great! I'll email you the agreement. We also salt the driveway and walkway after plowing to prevent ice. That's included in the seasonal price.",
            textZh: "好的！我会发合同邮件给你。铲雪后我们还会在车道和走道撒盐防冰。这个包含在季节价格里。",
            keyPhrases: [
              { en: "salt", zh: "撒盐" },
              { en: "prevent ice", zh: "防冰" },
              { en: "no-brainer", zh: "不用想的（太划算了）" },
            ],
            alternativeExpressions: [
              { textEn: "Awesome! I'll send over the contract by email. We also apply salt after every plow to prevent icing — that's included in the seasonal price.", textZh: "太好了！我把合同发邮件给你。每次铲完我们还会撒盐防冰——包含在季节价格里。", actionHint: "用apply salt和prevent icing", frequency: "common" },
              { textEn: "You're all set! Look for the agreement in your inbox tonight. Oh, and salting after plowing comes standard — it's part of the package.", textZh: "搞定了！今晚查看收件箱里的合同。对了，铲雪后撒盐是标配——包含在套餐里。", actionHint: "用comes standard", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Thanks for the quick response!",
            textZh: "太好了。谢谢你们的快速响应！",
          },
        ],
      },
    ],
  },

  // ==================== 空调维修 ====================
  {
    id: "daily-life-ac-repair",
    category: "daily-life",
    titleZh: "空调维修",
    titleEn: "AC Repair",
    description: "空调不制冷或有故障，联系维修技师",
    otherRole: "空调维修技师",
    otherRoleIcon: "🌡️",
    flows: [
      {
        id: "basic-repair",
        titleZh: "基本维修",
        titleEn: "Basic AC Repair",
        description: "空调突然不工作了，打电话叫维修",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, my AC stopped working this morning. It's blowing warm air. Can someone come look at it?",
            textZh: "你好，我的空调今天早上不工作了。吹出来的是热风。能派人来看看吗？",
            casualVersion: "Hey, my AC is blowing hot air. Can you send someone out?",
          },
          {
            speaker: "them",
            role: "维修技师",
            textEn: "Sure, I can come this afternoon. Before I head over, can you check a couple things? First, is the thermostat set to 'cool'? And second, is the outdoor unit running?",
            textZh: "可以，我今天下午来。来之前你能检查几样东西吗？首先，温控器设在'制冷'模式吗？其次，室外机在运转吗？",
            keyPhrases: [
              { en: "thermostat", zh: "温控器" },
              { en: "outdoor unit", zh: "室外机" },
              { en: "set to cool", zh: "设在制冷模式" },
            ],
            alternativeExpressions: [
              { textEn: "I can be there this afternoon. Before I come out, let's rule out a couple of things. Is the thermostat set to cooling mode? And can you hear the outdoor unit running?", textZh: "今天下午能到。来之前先排除几个问题。温控器设在制冷模式吗？室外机运转声能听到吗？", actionHint: "用rule out和come out", frequency: "common" },
              { textEn: "Absolutely, I'll come by this afternoon. Let me ask you a quick diagnostic question first: is the thermostat on cool, and is the compressor outside making any noise?", textZh: "没问题，今天下午来。先问你一个快速诊断问题：温控器是不是在制冷档，外面的压缩机有声音吗？", actionHint: "用diagnostic question", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, it's set to cool, and the outdoor unit seems to be running but it's making a weird noise.",
            textZh: "是的，设在制冷模式。室外机好像在运转但发出奇怪的声音。",
          },
          {
            speaker: "them",
            role: "维修技师",
            textEn: "That could be a refrigerant issue or a failing compressor. I'll bring my gauges and check the pressure. The service call is $85, which covers the first hour of labor.",
            textZh: "可能是制冷剂问题或压缩机故障。我带压力表来检查。上门费85美元，包含第一个小时的人工。",
            keyPhrases: [
              { en: "refrigerant", zh: "制冷剂" },
              { en: "compressor", zh: "压缩机" },
              { en: "gauges", zh: "压力表" },
              { en: "service call", zh: "上门费" },
            ],
            alternativeExpressions: [
              { textEn: "A weird noise plus warm air usually points to low refrigerant or a compressor problem. I'll bring my gauges to test the system. The service call is $85, covering the first hour.", textZh: "奇怪的声音加热风通常指向制冷剂不足或压缩机问题。我带压力表来测试系统。上门费85美元，包第一个小时。", actionHint: "用points to描述可能原因", frequency: "common" },
              { textEn: "That noise with warm air is concerning — could be a refrigerant leak or the compressor starting to fail. I'll check everything out. My diagnostic fee is $85, which includes the first hour of labor.", textZh: "有声音又出热风不太好——可能是制冷剂泄漏或压缩机开始坏了。我来全面检查。诊断费85美元，含第一小时人工。", actionHint: "用diagnostic fee", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's fine. What time can you be here?",
            textZh: "可以。你几点能到？",
          },
          {
            speaker: "them",
            role: "维修技师",
            textEn: "I can be there by 2 PM. In the meantime, keep the windows closed and try not to run the system — running it with low refrigerant can damage the compressor further.",
            textZh: "2点之前到。这段时间窗户关好，尽量别开系统——制冷剂不足时运行会进一步损坏压缩机。",
            keyPhrases: [
              { en: "low refrigerant", zh: "制冷剂不足" },
              { en: "damage further", zh: "进一步损坏" },
            ],
            alternativeExpressions: [
              { textEn: "I'll be there around 2. Until then, turn the system off and keep everything closed up. Running it with low refrigerant can make things worse.", textZh: "2点左右到。在那之前把系统关掉，窗户关好。制冷剂不足时运行会加重问题。", actionHint: "用make things worse", frequency: "common" },
              { textEn: "Expect me by 2 PM. In the meantime, shut the AC off completely. If the refrigerant is low, running it could cause further damage to the compressor.", textZh: "2点前到。这期间把空调完全关掉。如果制冷剂不足，继续开可能进一步损坏压缩机。", actionHint: "用shut off completely", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. I'll turn it off now. See you at 2.",
            textZh: "知道了。我现在就关掉。2点见。",
          },
          {
            speaker: "them",
            role: "维修技师",
            textEn: "Sounds good. If you have pets, please make sure they're secured — I'll need access to the air handler, which is usually in a closet or utility room.",
            textZh: "好的。如果有宠物请看好——我需要检查空气处理机，通常在壁橱或设备间里。",
            keyPhrases: [
              { en: "air handler", zh: "空气处理机" },
              { en: "utility room", zh: "设备间" },
            ],
            alternativeExpressions: [
              { textEn: "Great. One more thing — if you have any pets, keep them in another room. I'll need to access the air handler, usually in a closet or utility area.", textZh: "好的。还有一件事——如果有宠物请关到另一个房间。我需要检查空气处理机，通常在壁橱或设备区。", actionHint: "用keep them in another room", frequency: "common" },
              { textEn: "Perfect. Oh, and please put any pets away before I arrive. I'll need to get to the indoor unit — it's typically in a closet or utility space.", textZh: "好的。哦，请在我到之前把宠物安置好。我需要到室内机那里——通常在壁橱或设备间。", actionHint: "用put any pets away", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Will do. Thanks!",
            textZh: "好的。谢谢！",
          },
        ],
      },
      {
        id: "maintenance-plan",
        titleZh: "保养计划",
        titleEn: "AC Maintenance Plan",
        description: "了解空调定期保养和维护合同",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Now that you've fixed the AC, how can I prevent this from happening again? Should I get regular maintenance?",
            textZh: "既然空调修好了，怎么防止再出问题？需要定期保养吗？",
          },
          {
            speaker: "them",
            role: "维修技师",
            textEn: "Absolutely. I recommend a tune-up twice a year — once in spring before cooling season and once in fall before heating season. It catches problems early and extends the life of your system.",
            textZh: "当然建议。我推荐每年两次保养——春天制冷季前一次，秋天供暖季前一次。能早发现问题，延长系统寿命。",
            keyPhrases: [
              { en: "tune-up", zh: "保养/调试" },
              { en: "extends the life", zh: "延长寿命" },
            ],
            alternativeExpressions: [
              { textEn: "Definitely. A biannual tune-up — spring and fall — catches small issues before they become big problems and keeps your system running longer.", textZh: "当然建议。每年两次保养——春秋各一次——能在小问题变大问题之前发现，让系统用更久。", actionHint: "用biannual和catches small issues", frequency: "common" },
              { textEn: "Highly recommend it. Get the system serviced in spring before cooling season and again in fall before heating. It prevents breakdowns and adds years to your unit.", textZh: "强烈推荐。制冷季前的春天做一次保养，供暖前的秋天再做一次。能预防故障并延长设备寿命。", actionHint: "用prevents breakdowns", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What does a tune-up include?",
            textZh: "保养包括什么？",
          },
          {
            speaker: "them",
            role: "维修技师",
            textEn: "We check refrigerant levels, clean the coils, replace the air filter, test the thermostat calibration, inspect electrical connections, and lubricate moving parts.",
            textZh: "检查制冷剂水平、清洗盘管、更换空气滤网、测试温控器校准、检查电气连接、润滑活动部件。",
            keyPhrases: [
              { en: "coils", zh: "盘管" },
              { en: "air filter", zh: "空气滤网" },
              { en: "calibration", zh: "校准" },
              { en: "lubricate", zh: "润滑" },
            ],
            alternativeExpressions: [
              { textEn: "It's a thorough check: refrigerant levels, coil cleaning, filter replacement, thermostat calibration, electrical inspection, and lubrication of all moving components.", textZh: "是全面检查：制冷剂水平、盘管清洗、滤网更换、温控器校准、电气检查和所有活动部件润滑。", actionHint: "用thorough check开头", frequency: "common" },
              { textEn: "We go through everything — coolant pressure, clean the evaporator and condenser coils, swap the filter, verify the thermostat, check wiring, and grease all the moving parts.", textZh: "我们全面检查——冷却剂压力、清洗蒸发器和冷凝器盘管、换滤网、验证温控器、检查线路、给所有活动部件加润滑。", actionHint: "用更技术性的词汇", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much is a maintenance plan?",
            textZh: "保养计划多少钱？",
          },
          {
            speaker: "them",
            role: "维修技师",
            textEn: "Our annual plan is $180 for two visits. It includes priority scheduling, 15% off parts, and no service call fee if something breaks between visits.",
            textZh: "年度计划180美元包含两次上门。包括优先排期、零件85折、两次保养之间出问题免上门费。",
            keyPhrases: [
              { en: "priority scheduling", zh: "优先排期" },
              { en: "15% off parts", zh: "零件85折" },
            ],
            alternativeExpressions: [
              { textEn: "The annual maintenance plan is $180 — two visits per year. You get priority booking, 15% off parts, and free service calls between visits if anything goes wrong.", textZh: "年度保养计划180美元——每年两次上门。享受优先预约、零件85折、两次保养之间出问题免上门费。", actionHint: "用priority booking", frequency: "common" },
              { textEn: "It's $180 a year for two tune-ups. Plan members get bumped to the front of the line, 15% part discounts, and no trip charge for emergency calls between visits.", textZh: "每年180美元做两次保养。计划会员排在最前面，零件打85折，两次保养之间的紧急呼叫免上门费。", actionHint: "用bumped to the front of the line", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "And how often should I change the air filter myself?",
            textZh: "空气滤网我自己多久换一次？",
          },
          {
            speaker: "them",
            role: "维修技师",
            textEn: "Every one to three months, depending on whether you have pets or allergies. A dirty filter makes the system work harder and drives up your energy bill. It's a $5 filter that can save you hundreds.",
            textZh: "一到三个月，取决于你是否养宠物或有过敏。脏滤网会让系统更费力，增加电费。5美元的滤网能省几百。",
            keyPhrases: [
              { en: "dirty filter", zh: "脏滤网" },
              { en: "energy bill", zh: "电费/能源费" },
            ],
            alternativeExpressions: [
              { textEn: "Every one to three months. Pets and allergies mean you should change it more often. A clogged filter makes the system strain harder and raises your electric bill. A $5 filter saves you big.", textZh: "一到三个月。有宠物或过敏的话要更频繁换。堵塞的滤网让系统更吃力，增加电费。5美元的滤网能省大钱。", actionHint: "用clogged和strain harder", frequency: "common" },
              { textEn: "Monthly if you have pets, otherwise every two to three months. Here's the thing — a dirty filter is the number one cause of AC problems. Five bucks for a filter versus hundreds for a repair.", textZh: "有宠物每月换，否则两到三个月。关键是——脏滤网是空调问题的头号原因。5美元的滤网对比几百美元的维修。", actionHint: "用number one cause", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sign me up for the maintenance plan. Prevention is cheaper than repairs.",
            textZh: "给我报名保养计划。预防比维修便宜。",
          },
        ],
      },
    ],
  },

  // ==================== 除虫 ====================
  {
    id: "daily-life-pest-control",
    category: "daily-life",
    titleZh: "除虫服务",
    titleEn: "Pest Control",
    description: "家里发现害虫，联系除虫公司上门处理",
    otherRole: "除虫技师",
    otherRoleIcon: "🐜",
    flows: [
      {
        id: "basic-pest",
        titleZh: "基本除虫",
        titleEn: "Basic Pest Treatment",
        description: "发现蚂蚁或蟑螂，叫人来处理",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I've been seeing ants in my kitchen for the past week. They're everywhere — on the counters, near the sink. Can you help?",
            textZh: "你好，过去一周我厨房里一直有蚂蚁。到处都是——台面上、水槽旁。能帮忙吗？",
            casualVersion: "Hey, I've got a serious ant problem in my kitchen. Can someone come out?",
          },
          {
            speaker: "them",
            role: "除虫技师",
            textEn: "Ants are very common this time of year. Do you know what kind they are — small black ones, or the larger carpenter ants?",
            textZh: "这个季节蚂蚁很常见。知道是哪种吗——小黑蚂蚁还是大的木蚁？",
            keyPhrases: [
              { en: "carpenter ants", zh: "木蚁（会破坏木质结构）" },
            ],
            alternativeExpressions: [
              { textEn: "Ants are super common right now. Can you tell if they're tiny black ones or the bigger carpenter ants? That affects the treatment approach.", textZh: "现在蚂蚁特别常见。能看出是小黑蚂蚁还是大的木蚁吗？这会影响治理方式。", actionHint: "用treatment approach", frequency: "common" },
              { textEn: "This is peak season for ants. Do you happen to know the type? Small black ones are sugar ants, but if they're big, they could be carpenter ants — those are more serious.", textZh: "现在是蚂蚁高发期。知道是什么类型吗？小黑的是糖蚁，但如果是大的可能是木蚁——那更严重。", actionHint: "用peak season", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "They're small black ones. There seem to be trails going from the window to the kitchen counter.",
            textZh: "小黑蚂蚁。好像有从窗户到厨房台面的蚁路。",
          },
          {
            speaker: "them",
            role: "除虫技师",
            textEn: "Those are sugar ants. They follow scent trails to food sources. I'll treat the entry points with bait and a barrier spray around the perimeter of your home. The treatment is $120.",
            textZh: "那是糖蚁。它们沿气味路线找食物源。我会在入口放诱饵，房屋周围喷阻隔喷雾。治理费120美元。",
            keyPhrases: [
              { en: "scent trails", zh: "气味路线" },
              { en: "bait", zh: "诱饵" },
              { en: "barrier spray", zh: "阻隔喷雾" },
              { en: "perimeter", zh: "周围/外围" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, sugar ants. They leave pheromone trails to food. I'll place bait at the entry points and spray a perimeter barrier around your home. The whole treatment is $120.", textZh: "没错，糖蚁。它们留下信息素路线找食物。我会在入口放诱饵，在房屋周围喷阻隔屏障。整套治理120美元。", actionHint: "用pheromone trails", frequency: "common" },
              { textEn: "Classic sugar ants — they're following a scent trail to a food source. I'll treat the entry points with gel bait and apply a barrier treatment around the outside. That runs $120.", textZh: "典型的糖蚁——沿着气味路径找食物来源。我会在入口用凝胶诱饵，外围做阻隔处理。费用120美元。", actionHint: "用gel bait更具体", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is the spray safe for pets? I have a cat.",
            textZh: "喷雾对宠物安全吗？我有一只猫。",
          },
          {
            speaker: "them",
            role: "除虫技师",
            textEn: "Yes, once it dries — about 30 minutes — it's completely safe for pets and kids. I'd just ask that you keep the cat out of the treated areas until it dries.",
            textZh: "是的，干了之后——大约30分钟——对宠物和小孩完全安全。只需要在干之前不让猫进处理过的区域。",
            keyPhrases: [
              { en: "once it dries", zh: "干了之后" },
              { en: "treated areas", zh: "处理过的区域" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely. The spray is pet-safe and kid-safe once it dries — about half an hour. Just keep your cat away from the treated spots until then.", textZh: "完全没问题。喷雾干了之后对宠物和小孩都安全——大约半小时。在那之前让猫远离处理过的地方就行。", actionHint: "用pet-safe和kid-safe", frequency: "common" },
              { textEn: "The products we use are completely safe after drying, which takes roughly 30 minutes. Just keep pets out of the area while it's still wet.", textZh: "我们使用的产品干了之后完全安全，大约30分钟。湿的时候别让宠物进那个区域就行。", actionHint: "用while it's still wet", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How soon will the ants be gone?",
            textZh: "蚂蚁多久能消失？",
          },
          {
            speaker: "them",
            role: "除虫技师",
            textEn: "You'll see a big reduction within 24 to 48 hours. The bait takes them back to the colony, which eliminates the whole nest within a week. I'll come back in two weeks for a follow-up at no extra charge.",
            textZh: "24到48小时内会明显减少。诱饵会让它们带回巢穴，一周内消灭整个蚁巢。两周后我免费回访。",
            keyPhrases: [
              { en: "colony", zh: "蚁群/巢穴" },
              { en: "eliminates the whole nest", zh: "消灭整个蚁巢" },
              { en: "follow-up", zh: "回访" },
            ],
            alternativeExpressions: [
              { textEn: "Within a day or two, you'll notice a huge drop in activity. The bait gets carried back to the nest, wiping out the entire colony within a week. I'll do a free checkup in two weeks.", textZh: "一两天内你会发现活动大幅减少。诱饵被带回巢穴，一周内消灭整个蚁群。两周后我免费来检查。", actionHint: "用huge drop in activity", frequency: "common" },
              { textEn: "You should see results fast — 24 to 48 hours for a noticeable difference. The worker ants carry the bait home and it destroys the whole nest. I'll circle back in two weeks at no charge.", textZh: "很快能看到效果——24到48小时明显减少。工蚁把诱饵带回家，摧毁整个蚁巢。两周后我免费回来看看。", actionHint: "用circle back表示回访", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds great. When can you come?",
            textZh: "太好了。什么时候能来？",
          },
        ],
      },
      {
        id: "quarterly-service",
        titleZh: "季度除虫服务",
        titleEn: "Quarterly Pest Service",
        description: "了解定期除虫服务和合同",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I keep having pest issues — ants in summer, spiders in fall, mice in winter. Is there a regular service I can sign up for?",
            textZh: "我一直有害虫问题——夏天蚂蚁，秋天蜘蛛，冬天老鼠。有定期服务可以注册吗？",
          },
          {
            speaker: "them",
            role: "除虫技师",
            textEn: "We offer a quarterly pest prevention plan. We come every three months and treat the interior and exterior of your home. It covers ants, spiders, roaches, silverfish, and general crawling insects.",
            textZh: "我们有季度害虫预防计划。每三个月来一次，处理室内和室外。覆盖蚂蚁、蜘蛛、蟑螂、蠹虫和一般爬虫。",
            keyPhrases: [
              { en: "quarterly", zh: "每季度" },
              { en: "roaches", zh: "蟑螂" },
              { en: "silverfish", zh: "蠹虫" },
              { en: "crawling insects", zh: "爬虫" },
            ],
            alternativeExpressions: [
              { textEn: "We have a quarterly plan — every three months we treat inside and outside your home. It covers ants, spiders, roaches, silverfish, and other crawling bugs.", textZh: "我们有季度计划——每三个月处理室内和室外。覆盖蚂蚁、蜘蛛、蟑螂、蠹虫和其他爬虫。", actionHint: "用crawling bugs口语化", frequency: "common" },
              { textEn: "Our quarterly service is the best value. We come four times a year for a full interior and exterior treatment — handles ants, spiders, roaches, silverfish, you name it.", textZh: "季度服务最划算。每年来四次做室内外全面处理——蚂蚁、蜘蛛、蟑螂、蠹虫，什么都管。", actionHint: "用best value和you name it", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Does it cover mice and rats too?",
            textZh: "也包括老鼠吗？",
          },
          {
            speaker: "them",
            role: "除虫技师",
            textEn: "Rodent control is a separate service. We set traps, seal entry points, and do exclusion work. That's $200 for the initial visit, then $75 per follow-up. Or you can add it to the quarterly plan for an extra $50 per visit.",
            textZh: "鼠害控制是单独的服务。我们设陷阱、封堵入口、做排除工作。首次上门200美元，之后每次75美元。或者加到季度计划里每次多50美元。",
            keyPhrases: [
              { en: "rodent control", zh: "鼠害控制" },
              { en: "seal entry points", zh: "封堵入口" },
              { en: "exclusion work", zh: "排除工作" },
            ],
            alternativeExpressions: [
              { textEn: "Mice and rats are handled separately. We trap, seal up entry holes, and do exclusion work. First visit is $200, follow-ups are $75 each. Or tack it onto the quarterly plan for $50 extra per visit.", textZh: "鼠害是单独处理的。设陷阱、封堵入口、做排除工作。首次200美元，后续每次75美元。或加到季度计划每次多50美元。", actionHint: "用tack it onto", frequency: "common" },
              { textEn: "Rodent control is a separate program. We set traps, find and block their entry points, and do preventive work. It's $200 initially and $75 per follow-up, or add $50 per quarter to your plan.", textZh: "鼠害控制是单独的项目。设陷阱、找到并封堵入口、做预防工作。首次200美元，后续每次75美元，或每季度加50美元到你的计划。", actionHint: "用find and block更具体", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much is the quarterly plan without rodent control?",
            textZh: "不含鼠害控制的季度计划多少钱？",
          },
          {
            speaker: "them",
            role: "除虫技师",
            textEn: "$100 per visit, so $400 a year. And if you see any pests between visits, we come back for free — that's our guarantee.",
            textZh: "每次100美元，一年400美元。如果两次服务之间出现害虫，我们免费上门——这是我们的保证。",
            keyPhrases: [
              { en: "guarantee", zh: "保证" },
            ],
            alternativeExpressions: [
              { textEn: "It's $100 per quarterly visit — $400 for the year. And here's the best part: if pests show up between visits, we come back at no charge. That's our guarantee.", textZh: "每季度100美元——全年400。最好的是：两次之间出现害虫，我们免费上门。这是我们的保证。", actionHint: "用here's the best part", frequency: "common" },
              { textEn: "Each visit is $100, so you're looking at $400 annually. Plus, any pest sightings between scheduled visits get a free callback — that's part of our service promise.", textZh: "每次100美元，全年400。而且两次定期服务之间发现害虫免费回访——这是我们的服务承诺。", actionHint: "用callback和service promise", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Let me add the rodent control too. Better safe than sorry.",
            textZh: "鼠害控制也加上吧。有备无患。",
          },
          {
            speaker: "them",
            role: "除虫技师",
            textEn: "Smart choice. So that's $150 per quarter, $600 per year. I'll schedule your first comprehensive visit for next week. We'll do a full inspection of your home inside and out.",
            textZh: "明智的选择。那就是每季度150美元，每年600美元。我给你安排下周第一次全面上门。我们会对你的房子里外做全面检查。",
            keyPhrases: [
              { en: "comprehensive visit", zh: "全面上门" },
              { en: "full inspection", zh: "全面检查" },
            ],
            alternativeExpressions: [
              { textEn: "Good call. That brings it to $150 every three months, $600 for the year. I'll set up your first thorough inspection for next week — inside and out.", textZh: "好选择。每三个月150美元，全年600美元。我给你安排下周第一次全面检查——里里外外。", actionHint: "用good call开头", frequency: "common" },
              { textEn: "Wise decision. Your total is $150 quarterly, $600 annually. Next week I'll come out for a comprehensive assessment of your entire property.", textZh: "明智之举。每季度150美元，每年600美元。下周我来做整个房屋的全面评估。", actionHint: "用comprehensive assessment", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. Finally, I'll have peace of mind.",
            textZh: "太好了。终于可以安心了。",
          },
        ],
      },
    ],
  },

  // ==================== 房屋保险 ====================
  {
    id: "daily-life-home-insurance",
    category: "daily-life",
    titleZh: "房屋保险",
    titleEn: "Home Insurance",
    description: "了解和购买房屋或租房保险",
    otherRole: "保险代理人",
    otherRoleIcon: "🛡️",
    flows: [
      {
        id: "basic-renters",
        titleZh: "基本租房保险",
        titleEn: "Basic Renters Insurance",
        description: "租房时购买租房保险",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, my landlord requires renters insurance. I've never had it before. Can you explain what it covers?",
            textZh: "你好，我房东要求买租房保险。我以前从没买过。能解释一下保什么吗？",
            casualVersion: "Hey, I need renters insurance. What does it actually cover?",
          },
          {
            speaker: "them",
            role: "保险代理人",
            textEn: "Renters insurance covers three main things: your personal belongings if they're stolen or damaged, liability if someone gets injured in your apartment, and additional living expenses if your place becomes uninhabitable.",
            textZh: "租房保险主要保三样：个人财物被盗或损坏、有人在你公寓里受伤的责任险、以及住所无法居住时的额外生活费。",
            keyPhrases: [
              { en: "personal belongings", zh: "个人财物" },
              { en: "liability", zh: "责任险" },
              { en: "additional living expenses", zh: "额外生活费" },
              { en: "uninhabitable", zh: "无法居住的" },
            ],
            alternativeExpressions: [
              { textEn: "There are three key areas: protection for your belongings if they're stolen or damaged, liability coverage if someone gets hurt at your place, and temporary housing costs if your apartment becomes unlivable.", textZh: "三个关键方面：财物被盗或损坏的保障、有人在你家受伤的责任险、公寓无法居住时的临时住房费用。", actionHint: "用three key areas", frequency: "common" },
              { textEn: "It covers your personal property, liability if guests are injured in your home, and living expenses if you're temporarily displaced — like hotel and meals.", textZh: "保障你的个人财物、客人在你家受伤的责任、以及临时流离失所的生活费用——比如酒店和餐饮。", actionHint: "用temporarily displaced", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much does a typical policy cost?",
            textZh: "一般保单多少钱？",
          },
          {
            speaker: "them",
            role: "保险代理人",
            textEn: "A standard policy with $30,000 in personal property coverage and $100,000 in liability runs about $15 to $25 a month. Your exact rate depends on your location, deductible, and the coverage amount.",
            textZh: "标准保单——3万美元个人财物保额加10万美元责任险——大约每月15到25美元。具体费率取决于你的位置、免赔额和保额。",
            keyPhrases: [
              { en: "deductible", zh: "免赔额" },
              { en: "coverage amount", zh: "保额" },
              { en: "rate", zh: "费率" },
            ],
            alternativeExpressions: [
              { textEn: "A typical policy — $30K personal property and $100K liability — costs about $15 to $25 a month. Your exact premium depends on location, deductible amount, and how much coverage you want.", textZh: "典型保单——3万个人财物加10万责任险——每月大约15到25美元。实际保费取决于位置、免赔额和你要多少保额。", actionHint: "用$30K缩写更口语", frequency: "common" },
              { textEn: "Most renters pay between $15 and $25 monthly for standard coverage — that's $30,000 on belongings and $100,000 in liability. The final rate factors in your zip code, deductible, and coverage level.", textZh: "大多数租户每月付15到25美元的标准保险——3万财物保障和10万责任险。最终费率考虑邮编、免赔额和保障级别。", actionHint: "用final rate factors in", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What's a deductible?",
            textZh: "什么是免赔额？",
          },
          {
            speaker: "them",
            role: "保险代理人",
            textEn: "That's the amount you pay out of pocket before insurance kicks in. A $500 deductible means you pay the first $500 of any claim, and we cover the rest. A higher deductible lowers your monthly premium.",
            textZh: "就是保险生效前你自己掏的钱。500美元免赔额意味着任何理赔你先付500美元，我们付剩下的。免赔额越高，月费越低。",
            keyPhrases: [
              { en: "out of pocket", zh: "自掏腰包" },
              { en: "kicks in", zh: "生效/开始起作用" },
              { en: "claim", zh: "理赔" },
              { en: "premium", zh: "保费" },
            ],
            alternativeExpressions: [
              { textEn: "It's your share of any claim. With a $500 deductible, you cover the first $500 and we handle the rest. Pick a higher deductible and your monthly premium goes down.", textZh: "就是你在每次理赔中自付的部分。500美元免赔额意味着你付前500，我们付其余的。选更高免赔额月费更低。", actionHint: "用your share of any claim", frequency: "common" },
              { textEn: "Think of it as your co-pay. You pay the first $500 of any loss, and insurance covers everything above that. A bigger deductible means a smaller monthly bill.", textZh: "可以理解为你的自付额。损失的前500美元你付，保险负责以上的部分。免赔额越大月费越少。", actionHint: "用co-pay类比", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Does it cover my laptop and electronics?",
            textZh: "保笔记本电脑和电子产品吗？",
          },
          {
            speaker: "them",
            role: "保险代理人",
            textEn: "Yes, electronics are covered under personal property. But high-value items like jewelry over $1,500 or collectibles may need a separate rider for full coverage.",
            textZh: "是的，电子产品属于个人财物保障。但高价物品如超过1500美元的珠宝或收藏品可能需要单独附加险才能全额保障。",
            keyPhrases: [
              { en: "rider", zh: "附加险" },
              { en: "full coverage", zh: "全额保障" },
            ],
            alternativeExpressions: [
              { textEn: "Yes, all electronics fall under personal property coverage. For expensive items like jewelry over $1,500 or collectibles, you'd need a scheduled rider for full protection.", textZh: "是的，所有电子产品属于个人财物保障。昂贵物品如超过1500美元的珠宝或收藏品，需要附加险才能完全保障。", actionHint: "用scheduled rider", frequency: "common" },
              { textEn: "Electronics? Covered. Just keep in mind that very high-value items — jewelry, art, collectibles above $1,500 — may need a separate endorsement to be fully insured.", textZh: "电子产品？保的。注意高价物品——珠宝、艺术品、超过1500美元的收藏品——可能需要单独的附加条款才能全保。", actionHint: "用endorsement替代rider", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with the standard plan. Can I start today?",
            textZh: "我选标准计划。今天就能生效吗？",
          },
        ],
      },
      {
        id: "filing-claim",
        titleZh: "理赔申请",
        titleEn: "Filing an Insurance Claim",
        description: "家里发生意外，需要向保险公司理赔",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I need to file a claim. A pipe burst in my apartment and damaged a lot of my furniture and electronics.",
            textZh: "我需要理赔。我公寓水管爆了，损坏了很多家具和电子产品。",
          },
          {
            speaker: "them",
            role: "保险代理人",
            textEn: "I'm sorry to hear that. First, did you notify your landlord? The building's insurance covers the structural damage, but your renters insurance covers your personal belongings.",
            textZh: "很遗憾。首先，通知房东了吗？楼房的保险负责结构损坏，你的租房保险负责个人财物。",
            keyPhrases: [
              { en: "structural damage", zh: "结构损坏" },
              { en: "file a claim", zh: "提交理赔" },
            ],
            alternativeExpressions: [
              { textEn: "That's awful. First question — has your landlord been notified? Their building insurance covers structural damage; your policy handles your personal belongings.", textZh: "太糟糕了。第一个问题——房东通知了吗？他们的楼房保险负责结构损坏，你的保单负责个人财物。", actionHint: "用first question引导", frequency: "common" },
              { textEn: "I'm so sorry. Before we start the claim, make sure your landlord is aware. The building's policy covers the pipe and structure — yours covers your damaged items.", textZh: "很遗憾。开始理赔之前确保房东知道了。楼房的保险负责管道和结构——你的保险负责受损物品。", actionHint: "先提醒通知房东", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, the landlord knows. The plumber already fixed the pipe. I took photos of all the damage.",
            textZh: "是的，房东知道了。水管工已经修好管子了。我拍了所有损坏的照片。",
          },
          {
            speaker: "them",
            role: "保险代理人",
            textEn: "Perfect — photos are essential. Make a detailed list of every damaged item with the approximate value. Include receipts if you have them. I'll start the claim process and an adjuster will contact you within 48 hours.",
            textZh: "很好——照片很关键。列一份详细的损坏物品清单，写上大致价值。有收据的附上。我启动理赔流程，定损员48小时内联系你。",
            keyPhrases: [
              { en: "adjuster", zh: "定损员" },
              { en: "approximate value", zh: "大致价值" },
              { en: "receipts", zh: "收据" },
            ],
            alternativeExpressions: [
              { textEn: "Great thinking on the photos. Now make a full inventory of everything that was damaged with estimated values and any receipts you have. I'll open the claim and an adjuster will reach out within 48 hours.", textZh: "拍照做得好。现在列一份完整的受损物品清单，写上估价，有收据的附上。我开始理赔流程，定损员48小时内联系你。", actionHint: "用inventory替代list", frequency: "common" },
              { textEn: "Photos are key — well done. Next step: document every damaged item, approximate values, and attach any receipts or proof of purchase. An adjuster will contact you within two business days.", textZh: "照片很关键——做得好。下一步：记录每件损坏物品、大致价值，附上任何收据或购买凭证。定损员两个工作日内联系你。", actionHint: "用proof of purchase", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "My apartment is not livable right now because of the water damage. Does my policy cover a hotel?",
            textZh: "因为水损，我的公寓现在住不了。保单保酒店费吗？",
          },
          {
            speaker: "them",
            role: "保险代理人",
            textEn: "Yes, your additional living expenses coverage will reimburse reasonable hotel costs and meals while your apartment is being repaired. Keep all receipts. The coverage limit is $10,000.",
            textZh: "是的，额外生活费保障会报销公寓维修期间合理的酒店和餐饮费用。保留所有收据。保额上限10,000美元。",
            keyPhrases: [
              { en: "reimburse", zh: "报销" },
              { en: "reasonable costs", zh: "合理费用" },
              { en: "coverage limit", zh: "保额上限" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely. Your policy includes additional living expenses — we'll reimburse hotel and meal costs while repairs are underway. Just save all receipts. The cap is $10,000.", textZh: "当然。你的保单包含额外生活费——维修期间酒店和餐饮费用会报销。保留所有收据。上限10,000美元。", actionHint: "用while repairs are underway", frequency: "common" },
              { textEn: "Your ALE coverage kicks in for this exact situation. Reasonable hotel, food, even laundry — all reimbursable during the repair period. Keep every receipt. You have up to $10,000 in coverage.", textZh: "你的额外生活费保障正是为这种情况准备的。合理的酒店、餐饮甚至洗衣——维修期间都可报销。保留每张收据。保额10,000美元。", actionHint: "用ALE缩写和kicks in", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How long does the whole claims process take?",
            textZh: "整个理赔过程要多久？",
          },
          {
            speaker: "them",
            role: "保险代理人",
            textEn: "After the adjuster reviews everything, we typically issue payment within two to three weeks. We can do direct deposit to speed things up. You'll receive the payout minus your $500 deductible.",
            textZh: "定损员审查完毕后，通常两到三周内付款。可以直接存入银行账户加快速度。你会收到扣除500美元免赔额后的赔付。",
            keyPhrases: [
              { en: "direct deposit", zh: "直接存入银行" },
              { en: "payout", zh: "赔付" },
            ],
            alternativeExpressions: [
              { textEn: "Once the adjuster completes the review, payment usually goes out within two to three weeks. We can direct-deposit it to speed things up. The payout will be minus your $500 deductible.", textZh: "定损员完成审查后，通常两到三周内付款。可以直接存入银行加快速度。赔付金额会扣除500美元免赔额。", actionHint: "用goes out", frequency: "common" },
              { textEn: "The typical timeline is two to three weeks after the adjuster's report. We offer direct deposit for faster processing. You'll receive the total claim amount less your $500 deductible.", textZh: "通常在定损员报告后两到三周。我们提供直接存款加速处理。你会收到总理赔金额减去500美元免赔额。", actionHint: "用total claim amount less", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. I'll gather all the documentation tonight.",
            textZh: "谢谢。我今晚就整理所有文件。",
          },
        ],
      },
    ],
  },

  // ==================== 邻里守望 ====================
  {
    id: "daily-life-neighborhood-watch",
    category: "daily-life",
    titleZh: "邻里守望",
    titleEn: "Neighborhood Watch",
    description: "了解和参加社区邻里守望活动，提高安全意识",
    otherRole: "邻里守望协调员",
    otherRoleIcon: "👁️",
    flows: [
      {
        id: "basic-join",
        titleZh: "加入守望",
        titleEn: "Joining the Watch",
        description: "了解邻里守望计划并加入",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm new to the neighborhood. I saw a sign about a neighborhood watch program. How does it work?",
            textZh: "嗨，我是新搬来的。看到邻里守望计划的牌子了。这是怎么运作的？",
            casualVersion: "Hey, I just moved in. What's the neighborhood watch all about?",
          },
          {
            speaker: "them",
            role: "协调员",
            textEn: "Welcome! It's a community safety program where neighbors look out for each other. We report suspicious activity, share safety tips, and meet once a month to discuss any concerns.",
            textZh: "欢迎！这是一个邻居互相关注的社区安全计划。我们举报可疑活动、分享安全提示，每月开一次会讨论问题。",
            keyPhrases: [
              { en: "look out for each other", zh: "互相关注/照看" },
              { en: "suspicious activity", zh: "可疑活动" },
            ],
            alternativeExpressions: [
              { textEn: "Great to have you! It's basically a neighborhood safety network. We keep an eye out for each other, report anything unusual, and meet monthly to talk about local concerns.", textZh: "欢迎加入！基本上是邻里安全网络。互相留意，报告异常情况，每月开会讨论本地问题。", actionHint: "用safety network", frequency: "common" },
              { textEn: "Welcome to the block! The watch program is neighbors helping neighbors stay safe. We share tips, report suspicious activity, and hold monthly meetings to stay connected.", textZh: "欢迎来到这个社区！守望计划就是邻居帮助邻居保持安全。分享安全提示、举报可疑活动、每月开会保持联系。", actionHint: "用neighbors helping neighbors", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds great. Has there been much crime in this area?",
            textZh: "听起来不错。这片区域犯罪率高吗？",
          },
          {
            speaker: "them",
            role: "协调员",
            textEn: "It's generally safe, but we've had some package thefts and car break-ins recently. Since the watch program started, incidents have actually dropped by about 30 percent.",
            textZh: "总体上很安全，但最近有些包裹被盗和砸车事件。自从守望计划开始后，事件其实减少了约30%。",
            keyPhrases: [
              { en: "package thefts", zh: "包裹被盗" },
              { en: "car break-ins", zh: "砸车/车辆入侵" },
              { en: "incidents", zh: "事件" },
            ],
            alternativeExpressions: [
              { textEn: "Overall it's a safe area. We've seen some package stealing and a few car break-ins lately, but since the watch started, those incidents are down about 30 percent.", textZh: "总体上是安全区域。最近有些包裹被偷和几起砸车。但自从守望开始后，这类事件减少了约30%。", actionHint: "用package stealing口语化", frequency: "common" },
              { textEn: "Pretty safe, but not immune to crime. We've dealt with porch piracy and vehicle break-ins. The good news? Since the program launched, crime is down by roughly 30 percent.", textZh: "相当安全，但不是没有犯罪。遇到过门廊包裹被盗和砸车。好消息是？自从项目启动，犯罪率下降了约30%。", actionHint: "用porch piracy", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How do I join? Is there a fee?",
            textZh: "怎么加入？收费吗？",
          },
          {
            speaker: "them",
            role: "协调员",
            textEn: "It's completely free. I'll add you to our group text and email list. We also have a private Facebook group where people post updates. Our next meeting is this Thursday at 7 PM at the community center.",
            textZh: "完全免费。我把你加到群发短信和邮件列表里。我们还有一个私人Facebook群，大家在上面发消息。下次会议是这周四晚上7点在社区中心。",
            keyPhrases: [
              { en: "group text", zh: "群发短信" },
              { en: "community center", zh: "社区中心" },
            ],
            alternativeExpressions: [
              { textEn: "No cost at all. I'll put you on our text chain and email list. We also have a private Facebook group for real-time updates. Next meeting is Thursday at 7 PM at the community center.", textZh: "完全免费。我把你加到短信群和邮件列表。还有个私密Facebook群可以实时更新。下次会议周四晚7点在社区中心。", actionHint: "用text chain", frequency: "common" },
              { textEn: "Zero cost. I'll get you added to our group messages and mailing list. Plus there's a Facebook group where people post updates in real time. Come to our next meeting — this Thursday, 7 PM, community center.", textZh: "零费用。我把你加到群消息和邮件列表。还有个Facebook群大家实时发动态。来参加下次会议——这周四晚7点社区中心。", actionHint: "用zero cost", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What should I do if I see something suspicious?",
            textZh: "如果看到可疑情况该怎么做？",
          },
          {
            speaker: "them",
            role: "协调员",
            textEn: "If it's an emergency, call 911 immediately. For non-emergencies, call the police non-emergency line — I'll text you the number. And post in our group so everyone stays informed. Never confront anyone yourself.",
            textZh: "如果是紧急情况，立即打911。非紧急的打警察非紧急热线——我把号码发给你。在群里发消息让大家知道。千万不要自己去对峙。",
            keyPhrases: [
              { en: "non-emergency line", zh: "非紧急热线" },
              { en: "confront", zh: "对峙/正面交涉" },
            ],
            alternativeExpressions: [
              { textEn: "For anything urgent, dial 911 right away. Otherwise, use the police non-emergency line — I'll send you the number. Also post in our group chat so neighbors are aware. And never confront anyone on your own.", textZh: "紧急情况立即拨打911。否则用警察非紧急热线——我把号码发给你。同时在群聊里发消息让邻居知道。千万不要自己去对峙。", actionHint: "用dial 911", frequency: "common" },
              { textEn: "Real emergency? Call 911, no hesitation. Non-emergency? There's a police hotline for that — I'll text it to you. Let the group know too. The golden rule: observe, report, but never approach anyone yourself.", textZh: "真的紧急？打911，别犹豫。非紧急？有个警察热线——我发给你。也让群里知道。黄金法则：观察、报告，但绝不自己靠近。", actionHint: "用golden rule", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. I'll be at Thursday's meeting. Thanks for the info!",
            textZh: "明白了。周四的会我会去。谢谢告知！",
          },
        ],
      },
      {
        id: "report-incident",
        titleZh: "报告可疑情况",
        titleEn: "Reporting a Suspicious Incident",
        description: "发现可疑人物或情况，向邻里群报告",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hey everyone, I just saw a white van parked on Maple Street with no plates. The driver was taking photos of houses. Should I be worried?",
            textZh: "大家好，我刚看到一辆白色面包车停在枫叶街上，没有车牌。司机在拍房子的照片。需要担心吗？",
          },
          {
            speaker: "them",
            role: "协调员",
            textEn: "Thanks for the heads up. A van with no plates photographing houses is definitely worth reporting. Can you describe the driver and get the exact location?",
            textZh: "谢谢提醒。没车牌的面包车拍房子确实值得报告。能描述一下司机，说一下确切位置吗？",
            keyPhrases: [
              { en: "heads up", zh: "提醒/通知" },
              { en: "worth reporting", zh: "值得报告" },
            ],
            alternativeExpressions: [
              { textEn: "Good eye. An unplated van taking photos of homes is suspicious enough to report. Can you describe what the driver looks like and give the exact location?", textZh: "观察力不错。没车牌的面包车拍房子足够可疑，值得报告。能描述一下司机的样子和准确位置吗？", actionHint: "用good eye和unplated", frequency: "common" },
              { textEn: "Appreciate the alert. That's definitely something to flag. What does the driver look like, and can you pin down the exact spot on the street?", textZh: "感谢提醒。这确实值得标记。司机什么样子，能确定街上的具体位置吗？", actionHint: "用flag和pin down", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "White male, maybe 30s, wearing a gray hoodie. The van is parked between house numbers 456 and 460. It's been there for about 20 minutes.",
            textZh: "白人男性，大概30多岁，穿灰色卫衣。面包车停在456号和460号之间。已经在那里大约20分钟了。",
          },
          {
            speaker: "them",
            role: "协调员",
            textEn: "Good details. I'd call the non-emergency police line and report it. They can send a patrol car to check it out. Don't approach the van yourself. Anyone else on Maple Street seeing this?",
            textZh: "描述得很好。我建议打非紧急警察热线报告。他们可以派巡逻车来查看。不要自己靠近面包车。枫叶街上还有人看到吗？",
            keyPhrases: [
              { en: "patrol car", zh: "巡逻车" },
              { en: "check it out", zh: "查看" },
              { en: "don't approach", zh: "不要靠近" },
            ],
            alternativeExpressions: [
              { textEn: "Great description. Go ahead and call the non-emergency police number — they can send a patrol unit to investigate. Don't go near the van. Is anyone else in the area seeing this?", textZh: "描述得很好。打非紧急警察电话——他们可以派巡逻队来调查。不要靠近面包车。附近还有人看到吗？", actionHint: "用patrol unit和investigate", frequency: "common" },
              { textEn: "That's really helpful info. I'd recommend reporting it to the police non-emergency line right away. They'll send someone to check. Stay inside and don't approach. Anyone else on that street confirming this?", textZh: "信息很有帮助。建议马上打警察非紧急热线报告。他们会派人来查。待在室内不要靠近。那条街上还有人确认看到了吗？", actionHint: "用stay inside", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I called the non-emergency line. They said they'll send someone within 15 minutes. I'll keep watching from my window.",
            textZh: "我打了非紧急热线。他们说15分钟内派人来。我在窗户这边继续观察。",
          },
          {
            speaker: "them",
            role: "协调员",
            textEn: "Perfect. That's exactly how the watch should work — observe, report, don't engage. I'll alert the block captains on the adjacent streets too.",
            textZh: "很好。这正是守望的运作方式——观察、报告、不介入。我也通知邻近街道的区块长。",
            keyPhrases: [
              { en: "observe, report, don't engage", zh: "观察、报告、不介入" },
              { en: "block captains", zh: "区块长/街区负责人" },
              { en: "adjacent streets", zh: "邻近街道" },
            ],
            alternativeExpressions: [
              { textEn: "That's textbook neighborhood watch — see something, say something, and leave the rest to the police. I'll notify the block captains nearby as well.", textZh: "教科书式的邻里守望——看到什么说什么，其余交给警察。我也会通知附近的区块长。", actionHint: "用see something say something", frequency: "common" },
              { textEn: "Exactly what we train for: observe, call it in, don't get involved. Great work. I'm looping in the captains on adjacent blocks right now.", textZh: "正是我们训练的：观察、打电话报告、不要介入。做得好。我现在就通知邻近街区的负责人。", actionHint: "用looping in", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Update — a police car just arrived and is talking to the driver. Looks like it might just be a real estate appraiser. False alarm, maybe?",
            textZh: "更新——警车刚到，在和司机说话。看起来可能只是个房产评估师。虚惊一场？",
          },
          {
            speaker: "them",
            role: "协调员",
            textEn: "Better safe than sorry! You did the right thing. Even if it's nothing, it shows that our neighborhood pays attention. That alone deters crime. Thanks for being vigilant!",
            textZh: "宁可信其有！你做得对。即使没什么事，也说明我们社区在留意。这本身就能威慑犯罪。谢谢你的警觉！",
            keyPhrases: [
              { en: "better safe than sorry", zh: "宁可信其有/有备无患" },
              { en: "deters crime", zh: "威慑犯罪" },
              { en: "vigilant", zh: "警觉的" },
            ],
            alternativeExpressions: [
              { textEn: "Nothing wrong with being cautious! Even a false alarm shows the neighborhood is paying attention — that alone keeps criminals away. Great job staying alert!", textZh: "谨慎没什么不好！哪怕虚惊一场也说明社区在关注——这本身就能让犯罪分子远离。保持警觉做得好！", actionHint: "用keeps criminals away", frequency: "common" },
              { textEn: "You absolutely did the right thing. A false alarm is way better than ignoring something real. The fact that we responded quickly sends a strong message. Thanks for being on top of it!", textZh: "你绝对做得对。虚惊一场总比忽视真正的危险好。我们快速响应本身就传递了强烈信号。感谢你的警惕！", actionHint: "用sends a strong message", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 街区派对 ====================
  {
    id: "daily-life-block-party",
    category: "daily-life",
    titleZh: "街区派对",
    titleEn: "Block Party",
    description: "参加或组织社区街区派对，认识邻居",
    otherRole: "邻居/组织者",
    otherRoleIcon: "🎉",
    flows: [
      {
        id: "basic-attend",
        titleZh: "参加街区派对",
        titleEn: "Attending a Block Party",
        description: "作为新邻居第一次参加社区活动",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi! We just moved in last month. We got the flyer about the block party — is it okay if we just show up?",
            textZh: "嗨！我们上个月刚搬来。收到街区派对的传单了——我们直接来就行吗？",
            casualVersion: "Hey, we're the new neighbors! Is this the block party?",
          },
          {
            speaker: "them",
            role: "组织者",
            textEn: "Of course! Welcome to the neighborhood! Everyone is invited. We do this every summer — it's a great way to meet your neighbors. Did you bring anything?",
            textZh: "当然！欢迎来到社区！所有人都受邀。我们每年夏天都办——是认识邻居的好方式。你们带了什么吗？",
            keyPhrases: [
              { en: "everyone is invited", zh: "所有人都受邀" },
              { en: "meet your neighbors", zh: "认识邻居" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely, come on in! This is our annual summer get-together — everyone on the block is welcome. Did you bring something for the table?", textZh: "当然，快来！这是我们每年夏天的聚会——整条街的人都欢迎。你们带了什么吗？", actionHint: "用come on in和get-together", frequency: "common" },
              { textEn: "Of course! The more the merrier! We throw this party every summer to bring the neighbors together. It's a great way to get to know everyone.", textZh: "当然！人越多越开心！我们每年夏天办这个派对让邻居们聚在一起。是认识大家的好机会。", actionHint: "用the more the merrier", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "We brought a fruit salad and some drinks. Where should I put them?",
            textZh: "我们带了水果沙拉和一些饮料。放哪里？",
          },
          {
            speaker: "them",
            role: "组织者",
            textEn: "The food table is over there under the big tent. Drinks go in the coolers by the grill. This is potluck style — everyone brings a dish to share.",
            textZh: "食物桌在那边大帐篷下。饮料放烧烤架旁的冰桶里。这是百乐餐——每人带一道菜分享。",
            keyPhrases: [
              { en: "potluck", zh: "百乐餐/每人带菜的聚餐" },
              { en: "coolers", zh: "冰桶/保温箱" },
              { en: "dish to share", zh: "带菜分享" },
            ],
            alternativeExpressions: [
              { textEn: "Food goes on the tables under the tent. Drinks in the coolers next to the grill. It's potluck style — everybody brings a dish to share!", textZh: "食物放帐篷下的桌子上。饮料放烧烤架旁的冰桶里。百乐餐形式——每人带一道菜分享！", actionHint: "用everybody brings a dish", frequency: "common" },
              { textEn: "Set your food on the buffet table under the canopy, and toss the drinks in the cooler by the BBQ. It's all potluck — everyone contributes something.", textZh: "食物放遮阳棚下的自助桌上，饮料扔到烧烤旁的冰桶里。都是百乐餐——每人贡献一样。", actionHint: "用buffet table和canopy", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "This is so nice! Are there activities for kids? We have a six-year-old.",
            textZh: "好棒！有小孩的活动吗？我们有个六岁的孩子。",
          },
          {
            speaker: "them",
            role: "组织者",
            textEn: "Absolutely! There's a bounce house at the end of the street, face painting under the oak tree, and we'll have a water balloon fight at 3 PM. The kids always have a blast.",
            textZh: "当然有！街道尽头有充气城堡，橡树下有脸部彩绘，3点还有水气球大战。孩子们玩得特别开心。",
            keyPhrases: [
              { en: "bounce house", zh: "充气城堡" },
              { en: "face painting", zh: "脸部彩绘" },
              { en: "water balloon fight", zh: "水气球大战" },
              { en: "have a blast", zh: "玩得特别开心" },
            ],
            alternativeExpressions: [
              { textEn: "Tons of stuff for kids! Bounce house down at the end, face painting by the big tree, and a water balloon battle at 3 o'clock. The kids absolutely love it.", textZh: "小孩的活动很多！街尾有充气城堡，大树旁有脸部彩绘，3点还有水气球大战。孩子们超喜欢。", actionHint: "用battle替代fight", frequency: "common" },
              { textEn: "Oh yeah! There's an inflatable at the end of the block, face painting under that big oak, and we're doing water balloons at 3 PM. Kids always have the best time.", textZh: "当然有！街道尽头有充气游乐设施，大橡树下有脸部彩绘，3点玩水气球。孩子们总是玩得最开心。", actionHint: "用inflatable替代bounce house", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "She's going to love that. Is the street closed off to traffic?",
            textZh: "她肯定喜欢。这条街封路了吗？",
          },
          {
            speaker: "them",
            role: "组织者",
            textEn: "Yes, we got a permit from the city to close the block from 11 AM to 6 PM. So it's totally safe for the kids to run around. Come grab a burger — the grill master is right over there!",
            textZh: "是的，我们从市政府拿到了封路许可证，从上午11点到下午6点。所以孩子跑来跑去完全安全。来拿个汉堡——烧烤大师就在那边！",
            keyPhrases: [
              { en: "permit", zh: "许可证" },
              { en: "close the block", zh: "封路" },
              { en: "grill master", zh: "烧烤大师" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, the block is officially closed to traffic from 11 to 6 — we've got a city permit. Kids can run around safely. Now go grab a burger — the grill is going strong!", textZh: "是的，街道上午11点到下午6点正式禁止通行——有市政许可证。孩子们可以安全地跑来跑去。快去拿汉堡——烧烤炉正热着呢！", actionHint: "用going strong", frequency: "common" },
              { textEn: "The street is shut down with a city permit, 11 AM to 6 PM, so it's completely safe for the little ones. Come grab some food — our grill master is serving up burgers right now!", textZh: "街道有市政许可证封闭了，上午11点到下午6点，所以小朋友们完全安全。来吃点东西——烧烤大师正在做汉堡呢！", actionHint: "用shut down和serving up", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "This is amazing. We already feel so welcome here. Thank you!",
            textZh: "太棒了。我们已经感觉很受欢迎了。谢谢！",
          },
        ],
      },
      {
        id: "organize-party",
        titleZh: "组织街区派对",
        titleEn: "Organizing a Block Party",
        description: "想组织一次街区派对，了解流程",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I want to organize a block party for our street. I've never done this before. What do I need to do?",
            textZh: "我想在我们街上办个街区派对。以前没办过。需要做什么？",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "First, you'll need a street closure permit from the city. Apply at least four weeks in advance on the city's website. The fee is usually $25 to $50.",
            textZh: "首先，需要从市政府申请封路许可证。至少提前四周在市政网站上申请。费用通常25到50美元。",
            keyPhrases: [
              { en: "street closure permit", zh: "封路许可证" },
              { en: "in advance", zh: "提前" },
            ],
            alternativeExpressions: [
              { textEn: "Step one is getting a street closure permit — apply on the city website at least a month in advance. The permit fee runs about $25 to $50.", textZh: "第一步是拿到封路许可证——至少提前一个月在市政网站上申请。许可费大约25到50美元。", actionHint: "用step one开头", frequency: "common" },
              { textEn: "The first thing to do is apply for a road closure permit through the city. Give yourself at least four weeks. It costs between $25 and $50.", textZh: "首先要通过市政府申请封路许可证。至少留四周时间。费用25到50美元。", actionHint: "用road closure permit", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do I need to get permission from all the neighbors on the street?",
            textZh: "需要征得街上所有邻居的同意吗？",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Not official permission, but it's good practice to knock on doors and let everyone know. Most cities require that you notify all residents on the affected block. Give at least two weeks' notice with a flyer.",
            textZh: "不需要正式同意，但上门通知大家是好的做法。大多数城市要求通知受影响街区的所有居民。至少提前两周用传单通知。",
            keyPhrases: [
              { en: "knock on doors", zh: "上门通知" },
              { en: "affected block", zh: "受影响的街区" },
            ],
            alternativeExpressions: [
              { textEn: "You don't need formal consent, but definitely go door to door and give everyone a heads-up. Most cities want you to notify the whole block at least two weeks out with a flyer.", textZh: "不需要正式同意，但一定要挨家挨户通知大家。大多数城市要求至少提前两周用传单通知整个街区。", actionHint: "用go door to door", frequency: "common" },
              { textEn: "No signatures needed, but it's courteous to let everyone know. Drop off flyers two weeks ahead of time — most cities actually require written notice to all residents on the block.", textZh: "不需要签名，但提前告知大家是礼貌的做法。提前两周发传单——大多数城市实际上要求书面通知街区所有居民。", actionHint: "用courteous和drop off flyers", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What about food and supplies? That could get expensive for one person.",
            textZh: "食物和用品怎么办？一个人承担开销太大了。",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Make it a potluck — everyone brings a dish. You could provide the basics like burgers, hot dogs, buns, and drinks, then ask neighbors to sign up for sides and desserts. We used a shared Google Sheet last time.",
            textZh: "做成百乐餐——每人带一道菜。你可以提供基本的汉堡、热狗、面包和饮料，然后让邻居报名带配菜和甜点。上次我们用了共享的Google表格。",
            keyPhrases: [
              { en: "sign up for", zh: "报名负责" },
              { en: "sides and desserts", zh: "配菜和甜点" },
            ],
            alternativeExpressions: [
              { textEn: "Potluck is the way to go. You handle the mains — burgers, dogs, buns, drinks — and ask neighbors to sign up for sides and desserts. A shared spreadsheet worked great for us last time.", textZh: "百乐餐是最好的方式。你负责主食——汉堡、热狗、面包、饮料——让邻居报名带配菜和甜点。上次我们用共享表格效果很好。", actionHint: "用handle the mains", frequency: "common" },
              { textEn: "Do potluck for sure. Cover the basics yourself — meat, buns, sodas — and have everyone else sign up to bring a side or dessert. Use a Google Sheet so nothing gets doubled up.", textZh: "一定要做百乐餐。你提供基本的——肉、面包、汽水——让其他人报名带配菜或甜点。用Google表格避免重复。", actionHint: "用nothing gets doubled up", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great idea. Do I need insurance or anything like that?",
            textZh: "好主意。需要保险之类的吗？",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Some cities require event liability insurance for the permit. Check with the city clerk. It's usually around $75 for a one-day policy. Also, if you're renting a bounce house, the rental company usually provides their own insurance.",
            textZh: "有些城市的许可证需要活动责任保险。咨询市政书记员。一天的保单通常75美元左右。如果你租充气城堡，出租公司通常自带保险。",
            keyPhrases: [
              { en: "event liability insurance", zh: "活动责任保险" },
              { en: "city clerk", zh: "市政书记员" },
            ],
            alternativeExpressions: [
              { textEn: "Depending on your city, you may need event liability insurance to get the permit. Check with city hall. It's usually about $75 for a single-day policy. And if you rent a bounce house, the company typically carries their own coverage.", textZh: "根据你所在的城市，可能需要活动责任保险才能拿到许可证。咨询市政厅。通常一天的保单大约75美元。如果租充气城堡，出租公司通常自带保险。", actionHint: "用city hall替代city clerk", frequency: "common" },
              { textEn: "Some permits require proof of liability insurance for the event. Call the city clerk's office to find out. A one-day policy is around $75. Good news: bounce house rentals usually include their own insurance.", textZh: "有些许可证需要活动责任保险证明。打电话给市政书记员办公室询问。一天的保单大约75美元。好消息：充气城堡出租通常自带保险。", actionHint: "用proof of liability insurance", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "This is really helpful. Would you be willing to help me organize it?",
            textZh: "太有帮助了。你愿意帮我一起组织吗？",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "I'd love to! Let's get a small committee together — maybe four or five people. We can divide tasks: permits, food, activities, and setup. Let's start a group chat tonight!",
            textZh: "我很乐意！我们组个小委员会——四五个人就行。分工：许可证、食物、活动和布置。今晚建个群聊吧！",
            keyPhrases: [
              { en: "committee", zh: "委员会" },
              { en: "divide tasks", zh: "分工" },
              { en: "setup", zh: "布置/准备" },
            ],
            alternativeExpressions: [
              { textEn: "Count me in! Let's recruit four or five neighbors to form a planning team. We can split the work — permits, food, entertainment, and logistics. I'll set up a group chat tonight!", textZh: "算我一个！找四五个邻居组成筹备团队。分工：许可证、食物、娱乐和后勤。今晚我建群聊！", actionHint: "用count me in和planning team", frequency: "common" },
              { textEn: "I'm totally in! Let's put together a small organizing group — four or five people should do it. Everyone takes a piece: permits, food coordination, activities, and setup. Group chat tonight!", textZh: "我完全同意！我们组个小筹备组——四五个人就够了。每人负责一块：许可证、食物协调、活动和布置。今晚建群聊！", actionHint: "用I'm totally in和takes a piece", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },
];
