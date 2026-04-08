import type { PresetScene } from "../scene-types";

// ============================================================
// 购物场景 — Shopping Scenes
// 覆盖：服装购物、电子产品、超市购物、便利店、纪念品店
// ============================================================

export const SHOPPING_SCENES: PresetScene[] = [
  // ==================== 服装购物 ====================
  {
    id: "shopping-clothes",
    category: "shopping",
    titleZh: "服装购物",
    titleEn: "Clothing Shopping",
    description: "在服装店购买衣服，包括挑选、试穿、购买、换货退货等场景",
    otherRole: "店员",
    otherRoleIcon: "shirt",
    flows: [
      // --- Flow 1: 标准试穿买衣服 ---
      {
        id: "standard",
        titleZh: "试穿买衣服",
        titleEn: "Trying On & Buying Clothes",
        description: "浏览、询问尺码、试穿、购买的完整流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "店员",
            textEn: "Hi there! Welcome to the store. Are you looking for anything in particular?",
            textZh: "你好！欢迎光临。请问您在找什么特别的东西吗？",
            variations: [
              { textEn: "Good afternoon! Let me know if you need any help.", textZh: "下午好！需要帮忙随时叫我。" },
              { textEn: "Welcome! Feel free to look around. I'm here if you need anything.", textZh: "欢迎！随便看看，需要的话叫我。" },
            ],
            keyPhrases: [
              { en: "looking for", zh: "在找" },
              { en: "anything in particular", zh: "特别的东西" },
            ],
            alternativeExpressions: [
              { textEn: "Hey! Anything I can help you find today?", textZh: "嘿！今天有什么需要帮忙找的吗？", actionHint: "告诉店员你想找什么", frequency: "common" },
              { textEn: "Hi! Just browsing, or do you have something in mind?", textZh: "你好！随便看看，还是有想要的东西？", actionHint: "说明你的需求", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I'm looking for a jacket. Something lightweight for spring.",
            textZh: "是的，我想找一件夹克。春天穿的，轻薄一点的。",
            casualVersion: "Yeah, I need a light jacket for spring.",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Sure! We have a nice selection over here. What size are you?",
            textZh: "好的！这边有不少选择。您穿多大号的？",
            variations: [
              { textEn: "Great, our spring collection is right this way. Do you know your size?", textZh: "太好了，我们的春季系列在这边。您知道自己的尺码吗？" },
            ],
            keyPhrases: [
              { en: "selection", zh: "选择/款式" },
              { en: "what size", zh: "什么尺码" },
            ],
            responseTip: "如果不确定尺码，可以说 \"I'm not sure, maybe a medium?\"",
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "What size do you usually wear? We've got lots of options.", textZh: "您平时穿多大号？我们有很多选择。", actionHint: "说出你的尺码", frequency: "common" },
              { textEn: "These just came in — they run a little small, so you might want to size up.", textZh: "这些刚到的——偏小，您可能要拿大一号。", actionHint: "注意尺码偏差", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm usually a medium. Can I try this one on?",
            textZh: "我一般穿中号。这件可以试穿吗？",
            culturalNote: "美国尺码和亚洲尺码不同，通常需要小一到两号。建议先试穿。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Of course! The fitting rooms are right over there. I'll grab you a medium. Would you like to try a small as well, just in case?",
            textZh: "当然可以！试衣间在那边。我帮您拿中号。要不要也试一件小号，以防万一？",
            variations: [
              { textEn: "Absolutely! Let me unlock a fitting room for you. Here's the medium.", textZh: "没问题！我帮您开一间试衣间。这是中号的。" },
            ],
            keyPhrases: [
              { en: "fitting rooms", zh: "试衣间" },
              { en: "grab you a medium", zh: "帮您拿中号" },
              { en: "just in case", zh: "以防万一" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing! Changing rooms are right around the corner. I'll bring you both sizes.", textZh: "没问题！更衣室就在转角。我把两个号都给您拿来。", actionHint: "去试衣间试穿", frequency: "common" },
              { textEn: "No problem! Try it on and let me know how it fits.", textZh: "没问题！试试看，告诉我合不合身。", actionHint: "试完告诉店员感觉", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, I'll try both. Thanks.",
            textZh: "好的，两件都试试。谢谢。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "How did it go? Does the medium fit?",
            textZh: "试得怎么样？中号合适吗？",
            keyPhrases: [
              { en: "how did it go", zh: "怎么样" },
              { en: "does it fit", zh: "合适吗" },
            ],
            alternativeExpressions: [
              { textEn: "So, how's it looking? Does it work for you?", textZh: "怎么样？合适吗？", actionHint: "说出试穿感受", frequency: "common" },
              { textEn: "How'd the medium feel? Need a different size?", textZh: "中号感觉怎么样？要换个尺码吗？", actionHint: "描述合不合身", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The medium is a little loose. The small fits much better. I'll take the small.",
            textZh: "中号有点松。小号更合身。我要小号的。",
            culturalNote: "\"I'll take it\" 是购物时决定要买的标准说法。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Great choice! That looks really good on you. It's $89. Would you like to pay by card or cash?",
            textZh: "选得好！穿在您身上真好看。这件89美元。刷卡还是现金？",
            keyPhrases: [
              { en: "looks good on you", zh: "穿着好看" },
              { en: "pay by card or cash", zh: "刷卡还是现金" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "Nice pick! That really suits you. It's $89 — cash or card?", textZh: "选得好！很适合你。89美元——现金还是刷卡？", actionHint: "选择付款方式", frequency: "common" },
              { textEn: "That one's a great fit. Will you be paying with cash or card today?", textZh: "这件很合身。今天付现金还是刷卡？", actionHint: "告诉店员付款方式", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Card, please. Do you take Visa?",
            textZh: "刷卡。你们收 Visa 吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes, we accept Visa, Mastercard, and Apple Pay. Would you like a bag?",
            textZh: "收的，我们接受 Visa、万事达和 Apple Pay。需要袋子吗？",
            keyPhrases: [
              { en: "accept", zh: "接受/收" },
              { en: "would you like a bag", zh: "需要袋子吗" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, Visa works great. Do you need a bag for that?", textZh: "可以的，Visa没问题。需要袋子吗？", actionHint: "回答是否要袋子", frequency: "common" },
              { textEn: "We take all major cards. Want me to bag it up for you?", textZh: "主流信用卡都收。要帮您装袋吗？", actionHint: "说明是否需要袋子", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. Thank you!",
            textZh: "好的，谢谢！",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Here's your receipt. You have 30 days to return or exchange with the receipt. Enjoy your new jacket!",
            textZh: "给您收据。凭收据30天内可以退换。穿着愉快！",
            keyPhrases: [
              { en: "receipt", zh: "收据" },
              { en: "30 days", zh: "30天" },
              { en: "return or exchange", zh: "退换" },
            ],
            alternativeExpressions: [
              { textEn: "Here you go! Keep the receipt — you've got 30 days if you change your mind.", textZh: "给您！收据留好——30天内改主意都可以。", actionHint: "保管好收据", frequency: "common" },
              { textEn: "All done! The return policy is 30 days with your receipt. Enjoy!", textZh: "搞定！凭收据30天内可退换。好好穿！", actionHint: "记住退换政策", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 2: 换货退货 ---
      {
        id: "exchange-return",
        titleZh: "换货退货",
        titleEn: "Exchange or Return",
        description: "买的衣服不合适或颜色不对，带收据去换货或退货",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I bought this jacket yesterday, but it doesn't fit right. I'd like to exchange it.",
            textZh: "你好，我昨天买了这件夹克，但不太合身。我想换一件。",
            culturalNote: "退换货时带上收据和原始标签会更顺利。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "I'm sorry to hear that. Do you have your receipt with you?",
            textZh: "很抱歉。您带收据了吗？",
            variations: [
              { textEn: "No problem. Can I see your receipt? Are the tags still on?", textZh: "没问题。能看一下收据吗？标签还在吗？" },
            ],
            keyPhrases: [
              { en: "receipt", zh: "收据" },
              { en: "tags", zh: "标签" },
            ],
            alternativeExpressions: [
              { textEn: "Oh no, sorry to hear that. Do you still have the receipt and tags?", textZh: "哎呀，不好意思。收据和标签还在吗？", actionHint: "出示收据和标签", frequency: "common" },
              { textEn: "That's no problem. Just need to see your proof of purchase.", textZh: "没问题。看一下购买凭证就行。", actionHint: "出示购买凭证", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, here it is. The tags are still on. I just need a larger size.",
            textZh: "有的，在这里。标签还在。我只需要大一号的。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Let me check if we have a medium in stock... Yes, we do. Would you like to try it on first?",
            textZh: "我看看中号有没有货……有的。您要先试穿一下吗？",
            keyPhrases: [
              { en: "in stock", zh: "有货" },
              { en: "try it on", zh: "试穿" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "Let me see... Yep, we've got a medium. Want to try it on first?", textZh: "我看看……有的，中号有货。要先试一下吗？", actionHint: "去试穿", frequency: "common" },
              { textEn: "Good news, we have your size. Should I grab it so you can try it?", textZh: "好消息，有你的号。要我拿过来试试吗？", actionHint: "确认是否要试穿", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. I want to make sure it fits this time.",
            textZh: "好的。这次我要确认合身再说。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Go ahead, the fitting room is open. Take your time.",
            textZh: "请去试吧，试衣间空着的。慢慢来。",
            keyPhrases: [
              { en: "go ahead", zh: "请去吧" },
              { en: "take your time", zh: "慢慢来" },
            ],
            alternativeExpressions: [
              { textEn: "The fitting room's all yours. No rush!", textZh: "试衣间空着呢。不着急！", actionHint: "去试穿", frequency: "common" },
              { textEn: "Right this way — room number 3 is open. Take as long as you need.", textZh: "这边请——3号试衣间空着。慢慢试。", actionHint: "去指定试衣间", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "This one fits perfectly. Can I exchange it?",
            textZh: "这件完美合身。可以换吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Since it's the same price, I'll just do a straight exchange. No additional charge. Here's your updated receipt.",
            textZh: "价格一样，直接换就行了。不用补差价。给您新的收据。",
            keyPhrases: [
              { en: "straight exchange", zh: "直接换" },
              { en: "no additional charge", zh: "不用补差价" },
              { en: "updated receipt", zh: "新的收据" },
            ],
            alternativeExpressions: [
              { textEn: "Same price, so it's a simple swap. Here's your new receipt.", textZh: "价格一样，直接换就好。给您新收据。", actionHint: "拿好新收据", frequency: "common" },
              { textEn: "Easy exchange — no extra charge since it's the same item. All done!", textZh: "简单换货——同款不用加钱。搞定了！", actionHint: "确认换货完成", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. What if I need to return it instead? What's the policy?",
            textZh: "谢谢。如果我想退货呢？退货政策是什么？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "You can return any item within 30 days with the receipt for a full refund. After 30 days, we can only offer store credit. Sale items are final sale — no returns.",
            textZh: "凭收据30天内可以全额退款。30天后只能换成店铺积分。打折商品不能退。",
            keyPhrases: [
              { en: "full refund", zh: "全额退款" },
              { en: "store credit", zh: "店铺积分" },
              { en: "final sale", zh: "不能退/最终销售" },
              { en: "within 30 days", zh: "30天内" },
            ],
            alternativeExpressions: [
              { textEn: "Our return window is 30 days for a full refund. After that, we can do store credit. Just keep in mind, sale items are non-returnable.", textZh: "30天内全额退款。之后只能给店铺积分。提醒一下，打折商品不能退。", actionHint: "了解退货期限", frequency: "common" },
              { textEn: "Bring it back within a month with the receipt and you'll get your money back. No returns on clearance stuff though.", textZh: "一个月内带收据来就能退钱。不过清仓商品不退。", actionHint: "记住退货规则", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 3: 没有合适尺码 ---
      {
        id: "no-size",
        titleZh: "没有合适尺码",
        titleEn: "Size Not Available",
        description: "店里没有你的尺码，寻找替代方案",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, do you have this shirt in a large?",
            textZh: "请问，这件衬衫有大号吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Let me check... I'm sorry, we're sold out of large in that color. We only have small and medium left.",
            textZh: "我看看……抱歉，这个颜色的大号卖完了。只剩小号和中号了。",
            variations: [
              { textEn: "Unfortunately, large is out of stock right now. Would you like me to check another color?", textZh: "不好意思，大号目前断货了。要不我帮您看看别的颜色？" },
            ],
            keyPhrases: [
              { en: "sold out", zh: "卖完了" },
              { en: "out of stock", zh: "断货/没货" },
              { en: "only have...left", zh: "只剩……了" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "Sorry, we're all out of large in that one. Can I show you something similar?", textZh: "抱歉，那个大号卖光了。我给你看看类似的？", actionHint: "可以看看替代选择", frequency: "common" },
              { textEn: "Hmm, large is gone in that color. We might have it in other colors though.", textZh: "嗯，这个颜色大号没了。不过可能有别的颜色。", actionHint: "问问别的颜色", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a shame. Do you have it in a different color in large?",
            textZh: "太可惜了。大号的有别的颜色吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "We have large in navy blue and gray. Would you like to see them?",
            textZh: "大号有藏蓝色和灰色的。要看看吗？",
            keyPhrases: [
              { en: "navy blue", zh: "藏蓝色" },
              { en: "gray", zh: "灰色" },
            ],
            alternativeExpressions: [
              { textEn: "We've got large in navy and gray. Want to take a look?", textZh: "大号有海军蓝和灰色的。要看看吗？", actionHint: "看看其他颜色", frequency: "common" },
              { textEn: "There's a navy blue and a gray left in large. I can grab them for you.", textZh: "大号还剩海军蓝和灰色。我帮你拿过来？", actionHint: "让店员拿来看看", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I really wanted the white one. Could you check if another store has it?",
            textZh: "我真的想要白色的。能帮我查查别的店有没有吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Sure, let me look that up... Our downtown location has two large in white. I can have it transferred here, or you could order it online for home delivery.",
            textZh: "好的，我帮您查一下……市中心店有两件白色大号。我可以帮您调货过来，或者您可以网上下单，送货到家。",
            variations: [
              { textEn: "I can check other branches. Or if you prefer, we can order it online and ship it to your hotel.", textZh: "我可以查其他分店。或者您愿意的话，可以网上订，寄到您的酒店。" },
            ],
            keyPhrases: [
              { en: "transferred", zh: "调货" },
              { en: "order online", zh: "网上下单" },
              { en: "home delivery", zh: "送货到家" },
              { en: "other branches", zh: "其他分店" },
            ],
            alternativeExpressions: [
              { textEn: "I can check other stores for you. Or you could order it on our website and have it delivered.", textZh: "我帮你查查别的店。或者可以在我们网站下单送货。", actionHint: "选择调货或网上下单", frequency: "common" },
              { textEn: "Our other location has it. I can have it shipped here, or you can buy it online.", textZh: "我们另一家店有。可以调过来，或者你网上买。", actionHint: "决定怎么拿到商品", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How long would the transfer take?",
            textZh: "调货需要多长时间？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Usually 2-3 business days. We'll send you a text when it arrives. Or if you order online, it can ship to your address within 5 days.",
            textZh: "一般2-3个工作日。到了我们会发短信通知您。如果网上下单，5天内可以寄到您的地址。",
            keyPhrases: [
              { en: "2-3 business days", zh: "2-3个工作日" },
              { en: "send you a text", zh: "发短信通知您" },
              { en: "ship to your address", zh: "寄到您的地址" },
            ],
            alternativeExpressions: [
              { textEn: "It takes a couple of days. We'll text you when it's here. Or you can order online for delivery.", textZh: "要两三天。到了我们发短信通知你。也可以网上下单送货。", actionHint: "选择合适的方式", frequency: "common" },
              { textEn: "About 2 to 3 days for a store transfer. Online orders ship in about 5 days.", textZh: "调货大概2到3天。网上下单大约5天送到。", actionHint: "根据行程选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm only here for a few days. I'll just order it online. Can you help me with that?",
            textZh: "我只待几天。那我就网上下单吧。你能帮我弄一下吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Absolutely! Here's the QR code for our website. Just scan it and search for the style number — it's on this tag. You'll get free shipping for orders over $50.",
            textZh: "当然！这是我们网站的二维码。扫一下，搜这个吊牌上的款号就行。满50美元免运费。",
            keyPhrases: [
              { en: "QR code", zh: "二维码" },
              { en: "style number", zh: "款号" },
              { en: "free shipping", zh: "免运费" },
              { en: "orders over $50", zh: "满50美元" },
            ],
            alternativeExpressions: [
              { textEn: "Here's our website — just scan this code. Free shipping over $50!", textZh: "这是我们的网站——扫这个二维码就行。满50美元免运费！", actionHint: "扫码下单", frequency: "common" },
              { textEn: "You can order it on our app too. Look up the style number on the tag.", textZh: "也可以在我们的App上下单。查吊牌上的款号就行。", actionHint: "用款号搜索下单", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 电子产品 ====================
  {
    id: "shopping-electronics",
    category: "shopping",
    titleZh: "电子产品购物",
    titleEn: "Electronics Shopping",
    description: "购买手机、电脑等电子产品，了解功能、保修和退税",
    otherRole: "销售顾问",
    otherRoleIcon: "smartphone",
    flows: [
      // --- Flow 1: 买手机/电子产品 ---
      {
        id: "standard",
        titleZh: "买手机/电子产品",
        titleEn: "Buying a Phone / Electronics",
        description: "询问功能、对比型号、了解保修、购买",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm interested in buying a new phone. Can you tell me about the latest models?",
            textZh: "你好，我想买一部新手机。能介绍一下最新的型号吗？",
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn: "Of course! Our most popular model right now is the Galaxy S25. We also have the iPhone 16 and the Pixel 9. Are you looking for anything specific — camera quality, battery life, or budget?",
            textZh: "当然！目前最畅销的是 Galaxy S25。我们也有 iPhone 16 和 Pixel 9。您有什么特别的需求吗——相机、续航还是预算方面？",
            variations: [
              { textEn: "Sure! What's most important to you — the camera, battery, or price?", textZh: "好的！您最看重什么——拍照、电池还是价格？" },
            ],
            keyPhrases: [
              { en: "most popular", zh: "最畅销的" },
              { en: "camera quality", zh: "相机质量" },
              { en: "battery life", zh: "续航/电池寿命" },
              { en: "budget", zh: "预算" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "We've got a few great options. What matters most to you — camera, battery, or price?", textZh: "我们有好几款不错的。你最看重什么——拍照、电池还是价格？", actionHint: "说出你的需求", frequency: "common" },
              { textEn: "The top sellers right now are the Galaxy S25 and iPhone 16. What are you mainly using it for?", textZh: "现在卖得最好的是Galaxy S25和iPhone 16。你主要用来做什么？", actionHint: "描述使用场景", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I mainly care about camera quality and storage. How much storage does the Galaxy S25 have?",
            textZh: "我主要看重拍照和存储。Galaxy S25 有多大存储空间？",
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn: "It comes in 128GB, 256GB, and 512GB. The 256GB is the most popular — it's $999. The camera is excellent, with a 200-megapixel main sensor and 5x optical zoom.",
            textZh: "有128GB、256GB和512GB三个版本。256GB最受欢迎，999美元。相机非常出色，主摄2亿像素，还有5倍光学变焦。",
            keyPhrases: [
              { en: "comes in", zh: "有……版本" },
              { en: "megapixel", zh: "百万像素" },
              { en: "optical zoom", zh: "光学变焦" },
              { en: "main sensor", zh: "主摄像头" },
            ],
            alternativeExpressions: [
              { textEn: "You can get it in 128, 256, or 512 gigs. Most people go with the 256.", textZh: "有128、256和512G的。大多数人选256的。", actionHint: "选择存储容量", frequency: "common" },
              { textEn: "It starts at 128GB. The 256 is the sweet spot — great camera too, with a 200MP sensor.", textZh: "128GB起步。256的性价比最高——相机也很好，2亿像素。", actionHint: "考虑推荐的版本", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Does it come with a warranty?",
            textZh: "有保修吗？",
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn: "Yes, it comes with a one-year manufacturer's warranty. We also offer an extended protection plan — two years of coverage including accidental damage for $149.",
            textZh: "有的，自带一年厂家保修。我们还提供延保服务——149美元可以享受两年保障，包括意外损坏。",
            variations: [
              { textEn: "There's a standard one-year warranty. For $129 more, you can get our protection plan that covers drops and spills.", textZh: "标准一年保修。加129美元可以买我们的保护计划，覆盖摔落和进水。" },
            ],
            keyPhrases: [
              { en: "manufacturer's warranty", zh: "厂家保修" },
              { en: "extended protection plan", zh: "延保服务" },
              { en: "accidental damage", zh: "意外损坏" },
              { en: "coverage", zh: "保障/覆盖" },
            ],
            alternativeExpressions: [
              { textEn: "There's a one-year warranty included. We also have an extended plan if you want extra peace of mind.", textZh: "含一年保修。如果想更安心，我们也有延保方案。", actionHint: "考虑是否加延保", frequency: "common" },
              { textEn: "It comes with a year of coverage from the manufacturer. Want me to tell you about our protection plans?", textZh: "厂家提供一年保修。要我介绍一下我们的保障计划吗？", actionHint: "了解延保详情", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the 256GB model. And I'll add the protection plan. Can I also get a screen protector and a case?",
            textZh: "我要256GB的。再加延保。还能配一个屏幕保护膜和手机壳吗？",
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn: "Absolutely! We have screen protectors starting at $29 and cases from $39. I'd recommend this clear case — it's slim and shows off the phone's color. Want me to put the screen protector on for you?",
            textZh: "当然！屏幕保护膜29美元起，手机壳39美元起。推荐这款透明壳——很薄，还能看到手机本身的颜色。要我帮您贴膜吗？",
            keyPhrases: [
              { en: "screen protector", zh: "屏幕保护膜" },
              { en: "case", zh: "手机壳" },
              { en: "starting at", zh: "……起" },
              { en: "put it on for you", zh: "帮您贴/装" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! Cases start at $39 and screen protectors at $29. Want me to put the protector on for you?", textZh: "好的！手机壳39美元起，保护膜29美元起。要帮你贴膜吗？", actionHint: "选择配件", frequency: "common" },
              { textEn: "We've got tons of cases and screen protectors. I'd suggest this clear case — it's slim and tough.", textZh: "壳和膜很多。推荐这个透明壳——又薄又防摔。", actionHint: "看看推荐的款式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. What's the total?",
            textZh: "好的，帮我贴一下。一共多少钱？",
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn: "The phone is $999, the protection plan is $149, screen protector $29, and the case $39. Your total before tax is $1,216. With tax, it comes to $1,319.36. How would you like to pay?",
            textZh: "手机999美元，延保149美元，贴膜29美元，手机壳39美元。税前总计1216美元。含税是1319.36美元。您怎么付款？",
            keyPhrases: [
              { en: "total before tax", zh: "税前总计" },
              { en: "with tax", zh: "含税" },
              { en: "how would you like to pay", zh: "怎么付款" },
            ],
            alternativeExpressions: [
              { textEn: "So your subtotal is $1,216, and with tax it's $1,319.36. How would you like to pay?", textZh: "小计1216美元，含税1319.36美元。您怎么付？", actionHint: "选择付款方式", frequency: "common" },
              { textEn: "Everything together comes to $1,319 and change after tax. Cash or card?", textZh: "全部加起来含税1319美元多。现金还是刷卡？", actionHint: "告诉店员付款方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Credit card, please. Can I get an itemized receipt?",
            textZh: "刷信用卡。能给我一张明细收据吗？",
            culturalNote: "买贵重电子产品时，保留明细收据很重要，方便退税和保修。",
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn: "Of course. Here's your itemized receipt. I've also activated the phone and set up your warranty. The serial number is on the receipt — keep it safe. Enjoy your new phone!",
            textZh: "当然。给您明细收据。手机已经激活了，保修也登记好了。序列号在收据上——请妥善保管。新手机用着愉快！",
            keyPhrases: [
              { en: "itemized receipt", zh: "明细收据" },
              { en: "activated", zh: "激活" },
              { en: "serial number", zh: "序列号" },
              { en: "keep it safe", zh: "妥善保管" },
            ],
            alternativeExpressions: [
              { textEn: "Here's your detailed receipt. Phone's all set up and ready to go. Don't lose the receipt — you'll need it for warranty.", textZh: "给您明细收据。手机都设置好可以用了。收据别丢——保修要用。", actionHint: "保管好收据", frequency: "common" },
              { textEn: "All done! I've activated it and registered the warranty. Serial number's on the receipt. Enjoy!", textZh: "搞定！激活了，保修也登记了。序列号在收据上。好好用！", actionHint: "确认激活和保修信息", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 2: 退税 ---
      {
        id: "tax-refund",
        titleZh: "退税",
        titleEn: "Tourist Tax Refund",
        description: "作为游客购物后询问退税流程",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn: "I'm a tourist. Can I get a tax refund on this purchase?",
            textZh: "我是游客。这笔消费可以退税吗？",
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn: "Yes! If you're a non-resident visitor, you may be eligible for a VAT refund. Do you have your passport with you?",
            textZh: "可以！如果您是非本地居民，可能有资格申请增值税退税。您带护照了吗？",
            variations: [
              { textEn: "Sure, we participate in the tax-free shopping program. I'll need to see your passport to process the form.", textZh: "当然，我们参加了免税购物计划。我需要看您的护照来办理表格。" },
            ],
            keyPhrases: [
              { en: "non-resident", zh: "非本地居民" },
              { en: "eligible", zh: "有资格的" },
              { en: "VAT refund", zh: "增值税退税" },
              { en: "tax-free shopping", zh: "免税购物" },
            ],
            culturalNote: "退税政策因国家而异。欧洲多数国家支持 VAT 退税，美国大部分州没有游客退税。",
            alternativeExpressions: [
              { textEn: "Sure! As a tourist, you can claim a VAT refund. Do you have your passport on you?", textZh: "可以的！作为游客可以申请增值税退税。护照带了吗？", actionHint: "出示护照", frequency: "common" },
              { textEn: "Yes, we do tax-free shopping. I just need to see your passport to fill out the form.", textZh: "有的，我们支持免税购物。需要看一下护照来填表格。", actionHint: "准备好护照", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, here's my passport. How does the process work?",
            textZh: "有的，给您。退税流程是怎样的？",
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn: "I'll fill out a tax-free form for you. You'll need to show the form, the receipt, and the unused item at the customs counter at the airport before you check in. They'll stamp the form, and then you can get your refund at the refund counter.",
            textZh: "我帮您填一张免税表格。您在机场办登机手续之前，需要在海关柜台出示表格、收据和未使用的商品。他们会在表格上盖章，然后您就可以在退税柜台拿到退款了。",
            keyPhrases: [
              { en: "tax-free form", zh: "免税表格" },
              { en: "customs counter", zh: "海关柜台" },
              { en: "stamp the form", zh: "在表格上盖章" },
              { en: "refund counter", zh: "退税柜台" },
              { en: "unused item", zh: "未使用的商品" },
            ],
            responseTip: "确保在机场留出足够时间办理退税",
            alternativeExpressions: [
              { textEn: "I'll do the paperwork. At the airport, just show customs the form, receipt, and the item. They'll stamp it, then you get your refund.", textZh: "我帮你填表。到机场把表格、收据和商品拿给海关看，盖章后就能拿退税了。", actionHint: "了解机场退税流程", frequency: "common" },
              { textEn: "I'll fill out a tax refund form for you. Make sure to visit the customs desk at the airport before checking in.", textZh: "我帮您填退税表。记得在机场登机前去海关柜台办理。", actionHint: "记住在机场办理", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much will I get back?",
            textZh: "能退多少？",
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn: "The VAT rate is 20%, but the actual refund is usually around 12-15% after the processing fee. On your $1,200 purchase, you'd get roughly $150 to $180 back.",
            textZh: "增值税税率是20%，但扣除手续费后实际退税大约在12-15%。您这笔1200美元的消费，大概可以退150到180美元。",
            keyPhrases: [
              { en: "VAT rate", zh: "增值税税率" },
              { en: "processing fee", zh: "手续费" },
              { en: "actual refund", zh: "实际退税金额" },
              { en: "roughly", zh: "大约" },
            ],
            alternativeExpressions: [
              { textEn: "The tax is 20%, but after the service charge, you'd get about 12-15% back. So around $150 to $180.", textZh: "税率20%，扣除手续费后大概能退12-15%。大约150到180美元。", actionHint: "了解实际退税金额", frequency: "common" },
              { textEn: "You'll get roughly $150 back. It's not the full 20% because they take a processing fee.", textZh: "大概能退150美元左右。不是全额20%，因为有手续费。", actionHint: "注意手续费", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I get the refund in cash or does it go back to my card?",
            textZh: "退税是退现金还是退到卡里？",
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn: "At the airport, you can choose cash or card. Cash is immediate but there's a slightly higher fee. Card refund takes about 5-10 business days but you get a better rate. I'd recommend the card refund personally.",
            textZh: "在机场可以选现金或退到卡里。现金是即时的但手续费稍高。退到卡上需要5-10个工作日，但汇率更划算。我个人建议退到卡里。",
            keyPhrases: [
              { en: "cash or card", zh: "现金还是退到卡里" },
              { en: "immediate", zh: "即时的" },
              { en: "higher fee", zh: "更高的手续费" },
              { en: "better rate", zh: "更划算的汇率" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "You can choose cash or card at the airport. Cash is faster but the fee is a bit higher. I'd go with card personally.", textZh: "在机场可以选现金或退到卡上。现金快但手续费高一点。我建议退到卡上。", actionHint: "选择退税方式", frequency: "common" },
              { textEn: "Either cash or back to your card. Card takes a week or so, but you save on the fee.", textZh: "现金或退回卡上都行。退卡要一周左右，但手续费省一些。", actionHint: "权衡退税方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. So I should keep the item sealed and bring everything to the airport customs desk before check-in?",
            textZh: "了解了。那我应该保持商品密封，登机前去机场海关柜台出示所有材料对吗？",
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn: "Exactly. Keep the item unused and in its original packaging. Bring the product, this receipt, the tax-free form, and your passport. I'd suggest getting to the airport at least 3 hours early to allow time for the process.",
            textZh: "没错。商品保持未使用状态和原包装。带上商品、这张收据、免税表格和护照。建议至少提前3小时到机场，给退税留出时间。",
            keyPhrases: [
              { en: "original packaging", zh: "原包装" },
              { en: "at least 3 hours early", zh: "至少提前3小时" },
              { en: "allow time", zh: "留出时间" },
            ],
            alternativeExpressions: [
              { textEn: "Right. Keep everything in the original box, and bring your passport, receipt, and the tax form. I'd get to the airport early — the line can be long.", textZh: "对。保持原包装，带好护照、收据和退税表。建议早点去机场——排队可能很长。", actionHint: "提前安排好时间", frequency: "common" },
              { textEn: "Exactly. Don't open it, and make sure you have time at the airport. The customs desk is usually before check-in.", textZh: "没错。别拆封，在机场留够时间。海关柜台通常在办登机手续之前。", actionHint: "确保留出时间", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you for explaining everything so clearly. This is very helpful.",
            textZh: "谢谢你解释得这么清楚。非常有帮助。",
          },
        ],
      },
    ],
  },

  // ==================== 超市购物 ====================
  {
    id: "shopping-supermarket",
    category: "shopping",
    titleZh: "超市购物",
    titleEn: "Supermarket Shopping",
    description: "在超市购物，包括自助结账、收银台结账和找商品",
    otherRole: "超市工作人员",
    otherRoleIcon: "shopping-cart",
    flows: [
      // --- Flow 1: 标准结账 ---
      {
        id: "standard",
        titleZh: "标准结账",
        titleEn: "Checkout",
        description: "在收银台或自助结账机结账的流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "收银员",
            textEn: "Hi! Did you find everything okay?",
            textZh: "你好！东西都找到了吗？",
            variations: [
              { textEn: "Good morning! Ready to check out?", textZh: "早上好！可以结账了吗？" },
              { textEn: "Hey there! Is this everything?", textZh: "嗨！就这些吗？" },
            ],
            keyPhrases: [
              { en: "find everything", zh: "都找到了" },
              { en: "check out", zh: "结账" },
            ],
            culturalNote: "美国超市收银员通常会寒暄几句，这是正常的礼貌交流。",
            alternativeExpressions: [
              { textEn: "Hey! Did you find what you were looking for?", textZh: "嘿！找到要买的东西了吗？", actionHint: "回答是否都找到了", frequency: "common" },
              { textEn: "Hi there! All set to check out?", textZh: "你好！准备结账了吗？", actionHint: "把东西放上传送带", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, thanks. Actually, where do I find reusable bags?",
            textZh: "是的，谢谢。对了，哪里有环保袋卖？",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "We have them right here at the register. They're $1.50 each. How many do you need?",
            textZh: "就在收银台这里。每个1.5美元。您需要几个？",
            keyPhrases: [
              { en: "at the register", zh: "在收银台" },
              { en: "reusable bags", zh: "环保袋" },
            ],
            alternativeExpressions: [
              { textEn: "They're right here — $1.50 each. How many do you want?", textZh: "就在这——每个1.5美元。要几个？", actionHint: "说出需要几个", frequency: "common" },
              { textEn: "We sell those right at checkout. They're a buck fifty. Want one or two?", textZh: "结账这里就有卖。一个一块五。要一两个吗？", actionHint: "决定购买数量", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Two, please.",
            textZh: "两个。",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Do you have a loyalty card or a store membership?",
            textZh: "您有会员卡吗？",
            variations: [
              { textEn: "Are you a rewards member? You can save 10% today.", textZh: "您是积分会员吗？今天可以省10%。" },
            ],
            keyPhrases: [
              { en: "loyalty card", zh: "会员卡" },
              { en: "store membership", zh: "商店会员" },
              { en: "rewards member", zh: "积分会员" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "Got a membership card? You could save a few bucks today.", textZh: "有会员卡吗？今天能省几块钱。", actionHint: "说有没有会员卡", frequency: "common" },
              { textEn: "Are you part of our rewards program? I can look you up by phone number.", textZh: "您是我们积分会员吗？可以用手机号查。", actionHint: "提供手机号或说没有", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "No, I don't. I'm just visiting.",
            textZh: "没有，我只是来旅游的。",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "No problem! Your total is $47.83. Cash or card?",
            textZh: "没关系！一共47.83美元。现金还是刷卡？",
            keyPhrases: [
              { en: "total", zh: "总共" },
              { en: "cash or card", zh: "现金还是刷卡" },
            ],
            alternativeExpressions: [
              { textEn: "All right, that's $47.83. Paying cash or card?", textZh: "好，一共47.83美元。付现还是刷卡？", actionHint: "选择付款方式", frequency: "common" },
              { textEn: "Your total comes to $47.83. How would you like to pay?", textZh: "总共47.83美元。您怎么付？", actionHint: "告诉收银员付款方式", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Card, please. Can I tap to pay?",
            textZh: "刷卡。可以刷感应支付吗？",
            culturalNote: "\"tap to pay\" 指用 NFC 感应支付（如 Apple Pay 或信用卡感应），在欧美越来越普遍。",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Yes, just tap your card or phone on the reader. Go ahead... Payment confirmed. Would you like a printed receipt or email?",
            textZh: "可以的，把卡或手机靠近读卡器就行。请操作吧……支付成功。要打印收据还是发到邮箱？",
            keyPhrases: [
              { en: "tap your card", zh: "靠近/感应你的卡" },
              { en: "reader", zh: "读卡器" },
              { en: "payment confirmed", zh: "支付成功" },
              { en: "printed receipt or email", zh: "打印收据还是电子收据" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, just hold your card over the reader. All done! Need a receipt?", textZh: "可以，把卡放到读卡器上就行。好了！要收据吗？", actionHint: "说要不要收据", frequency: "common" },
              { textEn: "Tap right here... Got it! Paper receipt or email?", textZh: "在这里感应一下……好了！纸质收据还是电子的？", actionHint: "选择收据方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "No receipt, thanks. Have a good day!",
            textZh: "不用收据了，谢谢。祝你有美好的一天！",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "You too! Thanks for shopping with us.",
            textZh: "您也是！感谢光临。",
            keyPhrases: [
              { en: "thanks for shopping with us", zh: "感谢光临" },
            ],
            alternativeExpressions: [
              { textEn: "Have a great day! Come back anytime.", textZh: "祝您有美好的一天！欢迎再来。", actionHint: "礼貌道别", frequency: "common" },
              { textEn: "Thanks for coming in! See you next time.", textZh: "感谢光临！下次见。", actionHint: "礼貌回应即可", frequency: "common" },
            ],
          },
        ],
      },

      // --- Flow 2: 找商品 ---
      {
        id: "find-item",
        titleZh: "找商品",
        titleEn: "Finding an Item",
        description: "在超市找不到某个商品，向工作人员求助",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, could you tell me where the olive oil is?",
            textZh: "请问，橄榄油在哪里？",
            casualVersion: "Hey, where's the olive oil?",
          },
          {
            speaker: "them",
            role: "超市员工",
            textEn: "Sure! Olive oil is in aisle 7, on the left side, about halfway down. It's next to the vinegar and cooking oils.",
            textZh: "在7号通道左边，大约中间位置。旁边就是醋和其他食用油。",
            variations: [
              { textEn: "Aisle 7, left side. Look for the cooking oils section — you can't miss it.", textZh: "7号通道，左边。找食用油区域——很好找的。" },
            ],
            keyPhrases: [
              { en: "aisle", zh: "通道/货架走廊" },
              { en: "on the left side", zh: "在左边" },
              { en: "halfway down", zh: "中间位置" },
              { en: "next to", zh: "旁边" },
            ],
            culturalNote: "美国超市用 \"aisle\"（通道）编号来标记不同区域，每条通道两侧是货架。",
            alternativeExpressions: [
              { textEn: "Olive oil? That's aisle 7, left side, near the vinegar.", textZh: "橄榄油？7号通道左边，醋旁边。", actionHint: "按指引去找", frequency: "common" },
              { textEn: "Go down to aisle 7 — it's about halfway on the left. You'll see it next to the cooking oils.", textZh: "往7号通道走——左边大约中间位置。在食用油旁边就能看到。", actionHint: "去7号通道找", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. And where would I find soy sauce?",
            textZh: "谢谢。酱油在哪里呢？",
          },
          {
            speaker: "them",
            role: "超市员工",
            textEn: "Soy sauce is in our international foods section, aisle 12. We have a few Asian brands. If you want the one with low sodium, it's on the top shelf.",
            textZh: "酱油在国际食品区，12号通道。我们有好几个亚洲品牌。如果要低钠的，在最上面那层。",
            keyPhrases: [
              { en: "international foods section", zh: "国际食品区" },
              { en: "low sodium", zh: "低钠" },
              { en: "top shelf", zh: "最上面的架子" },
              { en: "brands", zh: "品牌" },
            ],
            alternativeExpressions: [
              { textEn: "Soy sauce is in the Asian food section, aisle 12. We have several brands.", textZh: "酱油在亚洲食品区，12号通道。有好几个牌子。", actionHint: "去12号通道找", frequency: "common" },
              { textEn: "Check aisle 12, the international section. Low-sodium is on the top shelf.", textZh: "去12号通道看看，国际食品区。低钠的在最上面。", actionHint: "在最上层找低钠款", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do you carry fresh tofu? I couldn't find it in the produce section.",
            textZh: "你们卖鲜豆腐吗？我在蔬果区没找到。",
          },
          {
            speaker: "them",
            role: "超市员工",
            textEn: "Yes, we do! Fresh tofu is actually in the refrigerated section near the deli, not with the produce. Aisle 3, in the cold case on the right. We have firm and silken tofu.",
            textZh: "有的！鲜豆腐其实在熟食区旁边的冷藏区，不在蔬果区。3号通道，右边的冷藏柜。我们有老豆腐和嫩豆腐。",
            variations: [
              { textEn: "Tofu is in the refrigerated health food aisle, aisle 3. It's easy to miss since it's tucked behind the yogurt.", textZh: "豆腐在冷藏健康食品通道，3号。它藏在酸奶后面，容易找不到。" },
            ],
            keyPhrases: [
              { en: "refrigerated section", zh: "冷藏区" },
              { en: "deli", zh: "熟食区" },
              { en: "produce", zh: "蔬果区" },
              { en: "cold case", zh: "冷藏柜" },
              { en: "firm tofu", zh: "老豆腐" },
              { en: "silken tofu", zh: "嫩豆腐" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, tofu's in the fridge section by the deli, aisle 3. We have firm and soft.", textZh: "有的，豆腐在熟食区旁边的冷藏柜，3号通道。有老豆腐和嫩豆腐。", actionHint: "去3号通道冷藏区找", frequency: "common" },
              { textEn: "Fresh tofu isn't with the veggies — it's in the cold case near the deli counter.", textZh: "鲜豆腐不在蔬果区——在熟食柜台旁边的冷藏柜里。", actionHint: "去熟食区附近找", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. One more thing — do you have self-checkout here?",
            textZh: "好的。再问一下——你们这里有自助结账吗？",
          },
          {
            speaker: "them",
            role: "超市员工",
            textEn: "Yes, the self-checkout machines are at the front of the store, near exit 2. There's also a staff member there who can help if you have any trouble scanning items.",
            textZh: "有的，自助结账机在店的前面，靠近2号出口。那边也有工作人员，如果扫码有问题可以找他们帮忙。",
            keyPhrases: [
              { en: "self-checkout", zh: "自助结账" },
              { en: "front of the store", zh: "店的前面" },
              { en: "scanning items", zh: "扫码/扫描商品" },
              { en: "staff member", zh: "工作人员" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "Yep! Self-checkout is up front, near exit 2. There's someone there to help if you need it.", textZh: "有的！自助结账在前面，靠近2号出口。有人在那帮忙。", actionHint: "去前面找自助结账机", frequency: "common" },
              { textEn: "Sure do! The self-checkout lanes are by the entrance. Super easy to use.", textZh: "有的！自助结账通道在入口那边。特别好用。", actionHint: "去入口处找", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How does self-checkout work? I've never used one before.",
            textZh: "自助结账怎么用？我以前没用过。",
          },
          {
            speaker: "them",
            role: "超市员工",
            textEn: "It's easy! Just scan each item's barcode under the scanner, then place it in the bagging area. For fruits and vegetables, tap the screen, search for the item, and weigh it. When you're done, choose your payment method on the screen. If an item won't scan, just ask the attendant for help.",
            textZh: "很简单！把每件商品的条码对准扫描器扫一下，然后放到装袋区。水果蔬菜的话，点屏幕搜索商品名称，然后称重。扫完所有东西后，在屏幕上选择付款方式。如果有东西扫不出来，找旁边的工作人员帮忙就行。",
            keyPhrases: [
              { en: "barcode", zh: "条码" },
              { en: "scanner", zh: "扫描器" },
              { en: "bagging area", zh: "装袋区" },
              { en: "weigh it", zh: "称重" },
              { en: "payment method", zh: "付款方式" },
              { en: "attendant", zh: "工作人员" },
            ],
            alternativeExpressions: [
              { textEn: "Just scan each item, put it in the bag, and pay on the screen. If something doesn't scan, the attendant can help.", textZh: "扫一下每件东西，放进袋子里，然后在屏幕上付款。扫不出来的话旁边有人帮忙。", actionHint: "按步骤操作", frequency: "common" },
              { textEn: "It's pretty simple — scan the barcode, bag it, and pay. For produce, look it up on the screen and weigh it.", textZh: "挺简单的——扫条码、装袋、付款。水果蔬菜的话在屏幕上搜名字然后称重。", actionHint: "注意水果蔬菜要称重", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds straightforward. Thank you so much for your help!",
            textZh: "听起来很简单。非常感谢你的帮助！",
          },
          {
            speaker: "them",
            role: "超市员工",
            textEn: "You're welcome! If you need anything else, just look for anyone in a green apron. Happy shopping!",
            textZh: "不客气！如果还需要什么，找穿绿围裙的员工就行。购物愉快！",
            keyPhrases: [
              { en: "green apron", zh: "绿围裙" },
              { en: "happy shopping", zh: "购物愉快" },
            ],
            alternativeExpressions: [
              { textEn: "No problem! Just find anyone in a green apron if you need more help. Enjoy your shopping!", textZh: "不客气！还需要帮忙就找穿绿围裙的。购物愉快！", actionHint: "认准绿围裙员工", frequency: "common" },
              { textEn: "Happy to help! Have a great rest of your day.", textZh: "很高兴帮到你！祝你今天愉快。", actionHint: "礼貌道别", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 便利店 ====================
  {
    id: "shopping-convenience",
    category: "shopping",
    titleZh: "便利店",
    titleEn: "Convenience Store",
    description: "在便利店购物，包括询价、找商品、加热食物、外卡支付等场景",
    otherRole: "店员",
    otherRoleIcon: "store",
    flows: [
      // --- Flow 1: 基本购物 ---
      {
        id: "basic-shopping",
        titleZh: "基本购物",
        titleEn: "Basic Shopping",
        description: "询问价格、找商品、要袋子、微波加热等基本便利店需求",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "店员",
            textEn: "Hi! Welcome in. Let me know if you need help finding anything.",
            textZh: "你好！欢迎光临。需要帮忙找什么随时叫我。",
            variations: [
              { textEn: "Hey there! Can I help you with something?", textZh: "嗨！有什么需要帮忙的吗？" },
              { textEn: "Good evening! Feel free to look around.", textZh: "晚上好！随便看看。" },
            ],
            keyPhrases: [
              { en: "welcome in", zh: "欢迎光临" },
              { en: "finding anything", zh: "找什么" },
            ],
            alternativeExpressions: [
              { textEn: "Hey! Need help finding something?", textZh: "嘿！需要帮忙找东西吗？", actionHint: "说出你的需求", frequency: "common" },
              { textEn: "Hi! Just holler if you need anything.", textZh: "你好！需要什么就喊我。", actionHint: "有问题可以问店员", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks. How much is this sandwich?",
            textZh: "谢谢。这个三明治多少钱？",
            casualVersion: "Hey, what's the price on this sandwich?",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "That one is $5.49. If you grab a drink, we have a combo deal — sandwich and any drink for $7.99.",
            textZh: "那个5.49美元。如果再拿一瓶饮料的话，我们有套餐优惠——三明治加任意饮料7.99美元。",
            keyPhrases: [
              { en: "combo deal", zh: "套餐优惠" },
              { en: "any drink", zh: "任意饮料" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "That's $5.49. But if you add a drink, we've got a combo for $7.99.", textZh: "5.49美元。不过加一瓶饮料的话，套餐才7.99美元。", actionHint: "考虑套餐优惠", frequency: "common" },
              { textEn: "It's $5.49. We're also running a meal deal — sandwich plus a drink for $7.99.", textZh: "5.49美元。我们还有套餐优惠——三明治加饮料7.99美元。", actionHint: "决定要不要套餐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good deal. I'll take the combo. Can you heat up the sandwich for me?",
            textZh: "很划算。我要套餐。能帮我把三明治加热一下吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Sure! I'll microwave it for you. It'll take about a minute. Want me to grab you some napkins and ketchup too?",
            textZh: "好的！我帮您微波一下。大概一分钟。要不要再拿一些纸巾和番茄酱？",
            keyPhrases: [
              { en: "microwave", zh: "微波加热" },
              { en: "napkins", zh: "纸巾" },
              { en: "ketchup", zh: "番茄酱" },
            ],
            alternativeExpressions: [
              { textEn: "No problem, I'll warm it up. Want napkins or any condiments?", textZh: "没问题，我帮你热一下。要纸巾或者调料吗？", actionHint: "说出还需要什么", frequency: "common" },
              { textEn: "Sure, give me a sec. Need ketchup or mustard with that?", textZh: "好的，稍等。要番茄酱或芥末酱吗？", actionHint: "选择调料", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. And do you have plastic bags?",
            textZh: "好的。你们有塑料袋吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "We do, but there's a 10-cent charge per bag. Or you can use one of our free paper bags.",
            textZh: "有的，不过塑料袋每个收10美分。或者您可以用我们的免费纸袋。",
            keyPhrases: [
              { en: "charge per bag", zh: "每个袋子收费" },
              { en: "paper bag", zh: "纸袋" },
            ],
            culturalNote: "很多城市已经对塑料袋收费甚至禁止使用，建议自带环保袋。",
            alternativeExpressions: [
              { textEn: "Plastic bags are 10 cents each. Or we have free paper bags if you prefer.", textZh: "塑料袋每个10美分。纸袋免费，你选哪个？", actionHint: "选择袋子类型", frequency: "common" },
              { textEn: "We charge for plastic bags now. Paper's free though — want one of those?", textZh: "塑料袋现在收费了。不过纸袋免费——要纸袋吗？", actionHint: "决定用哪种袋子", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "A paper bag is fine. Thank you.",
            textZh: "纸袋就行。谢谢。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Here's your heated sandwich and drink. Your total is $7.99 plus tax, so $8.63. Cash or card?",
            textZh: "给您加热好的三明治和饮料。套餐7.99美元加税，一共8.63美元。现金还是刷卡？",
            keyPhrases: [
              { en: "plus tax", zh: "加税" },
              { en: "total", zh: "总共" },
            ],
            alternativeExpressions: [
              { textEn: "Here you go! $7.99 plus tax, so $8.63 total. Cash or card?", textZh: "给您！7.99加税，总共8.63美元。现金还是刷卡？", actionHint: "选择付款方式", frequency: "common" },
              { textEn: "All set — your total with tax is $8.63. How are you paying?", textZh: "好了——含税一共8.63美元。怎么付？", actionHint: "告诉店员付款方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Card, please. Can I tap?",
            textZh: "刷卡。可以感应支付吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yep, just tap right here. All set! Have a good one.",
            textZh: "可以，在这里感应一下就行。好了！祝您愉快。",
            keyPhrases: [
              { en: "tap right here", zh: "在这里感应" },
              { en: "all set", zh: "好了/搞定了" },
              { en: "have a good one", zh: "祝你愉快" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, just tap here. Done! Have a good one!", textZh: "可以，在这里感应。好了！祝你愉快！", actionHint: "完成付款", frequency: "common" },
              { textEn: "Go ahead and tap. All good! Enjoy your meal.", textZh: "感应一下吧。搞定了！好好吃。", actionHint: "付款完成，可以走了", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 2: 特殊需求 ---
      {
        id: "special-needs",
        titleZh: "特殊需求",
        titleEn: "Special Requests",
        description: "询问外卡支付、要收据、退货等特殊需求",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, do you accept foreign credit cards? I have a card from China.",
            textZh: "你好，你们收外国信用卡吗？我有一张中国的卡。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "We accept Visa and Mastercard, including international ones. UnionPay might work too — let me try it. If not, we also take Apple Pay and Google Pay.",
            textZh: "我们收 Visa 和万事达卡，包括国际卡。银联也可能行——我帮您试一下。不行的话，我们也接受 Apple Pay 和 Google Pay。",
            variations: [
              { textEn: "Most international cards should work. Just insert or tap your card and we'll see.", textZh: "大多数国际卡都能用。插卡或感应试试看。" },
            ],
            keyPhrases: [
              { en: "foreign credit card", zh: "外国信用卡" },
              { en: "international", zh: "国际的" },
              { en: "UnionPay", zh: "银联" },
            ],
            responseTip: "出国前确认你的卡片开通了境外交易功能。",
            alternativeExpressions: [
              { textEn: "Most international cards work. Just try inserting or tapping it and we'll see.", textZh: "大多数国际卡都能用。插卡或感应试试就知道了。", actionHint: "直接试刷卡", frequency: "common" },
              { textEn: "We take Visa and Mastercard. If your card doesn't work, we also accept Apple Pay.", textZh: "我们收Visa和万事达。如果你的卡刷不了，也可以用Apple Pay。", actionHint: "准备备选支付方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, it went through! Can I get a receipt? I need it for my expense report.",
            textZh: "太好了，刷过了！能给我一张收据吗？我需要报销。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Of course. Here's your receipt. I can also email it to you if you need a digital copy.",
            textZh: "当然。给您收据。如果需要电子版的，我也可以发到您邮箱。",
            keyPhrases: [
              { en: "receipt", zh: "收据" },
              { en: "expense report", zh: "报销/费用报告" },
              { en: "digital copy", zh: "电子版" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, here's your receipt. I can email you a copy too if you want.", textZh: "好的，给您收据。需要的话也可以发电子版到邮箱。", actionHint: "拿好收据", frequency: "common" },
              { textEn: "No problem. Paper or email receipt? We can do both.", textZh: "没问题。要纸质的还是电子的？两个都可以给你。", actionHint: "选择收据方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Actually, I just realized I grabbed the wrong item. Can I return this and get the right one?",
            textZh: "不好意思，我发现拿错了。能退了换一个对的吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Since you just bought it, no problem at all. I'll void that item and ring up the correct one. What did you actually need?",
            textZh: "刚买的没问题。我帮您取消这个，重新扫对的那个。您实际需要哪个？",
            keyPhrases: [
              { en: "void", zh: "取消/作废" },
              { en: "ring up", zh: "结账/扫码" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "Oh sure, no worries. I'll cancel that and scan the right one. What did you need?", textZh: "没事。我帮你取消这个，扫对的。你要哪个？", actionHint: "说出正确的商品", frequency: "common" },
              { textEn: "No problem at all. Let me just void this item. Which one did you actually want?", textZh: "完全没问题。我作废这个。你实际要哪个？", actionHint: "指出正确的商品", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I wanted the sugar-free version, not the regular one.",
            textZh: "我想要无糖的，不是普通的。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Got it. The sugar-free one is actually the same price, so I'll just swap it out. Here's your updated receipt. The refund for the first one will show up on your card in a day or two.",
            textZh: "明白了。无糖版其实价格一样，直接帮您换。给您新的收据。之前那个的退款一两天内会退到您卡上。",
            keyPhrases: [
              { en: "sugar-free", zh: "无糖的" },
              { en: "swap it out", zh: "换掉" },
              { en: "updated receipt", zh: "新的收据" },
              { en: "refund", zh: "退款" },
            ],
            alternativeExpressions: [
              { textEn: "Easy fix. Same price, so I'll just switch it out. Here's your new receipt.", textZh: "小事。价格一样，直接换。给你新收据。", actionHint: "拿好新收据", frequency: "common" },
              { textEn: "No problem. I'll swap that for the sugar-free one. The refund for the other one will hit your card soon.", textZh: "没问题。帮你换成无糖的。之前那个退款很快会到卡上。", actionHint: "注意查看退款", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Thank you for being so helpful!",
            textZh: "太好了。谢谢你这么热心！",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "No problem! Come back anytime. Have a great day!",
            textZh: "不客气！欢迎再来。祝您有美好的一天！",
            alternativeExpressions: [
              { textEn: "You're welcome! See you around. Have a good one!", textZh: "不客气！回见。祝你愉快！", actionHint: "礼貌道别", frequency: "common" },
              { textEn: "Anytime! Take care and have a great day.", textZh: "随时来！保重，祝你有美好的一天。", actionHint: "礼貌回应", frequency: "common" },
            ],
          },
        ],
      },

      // --- Flow 3: 药妆便利 ---
      {
        id: "pharmacy-personal-care",
        titleZh: "药妆便利",
        titleEn: "Medicine & Personal Care",
        description: "在便利店购买非处方药和个人护理用品，询问推荐",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, do you carry any cold medicine? I've had a sore throat since yesterday.",
            textZh: "请问，你们有感冒药吗？我从昨天开始嗓子疼。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes, we have a small pharmacy section in the back. For a sore throat, I'd recommend these lozenges or this throat spray. If you also have congestion, this multi-symptom cold medicine works well.",
            textZh: "有的，后面有一个小药品区。嗓子疼的话，推荐这种含片或者这个喉咙喷雾。如果还有鼻塞，这款多症状感冒药效果不错。",
            variations: [
              { textEn: "Sure, our medicine section is over there. For sore throat, we have cough drops, throat spray, and some OTC cold medicine.", textZh: "有的，药品区在那边。嗓子疼的话，有止咳糖、喉咙喷雾和一些非处方感冒药。" },
            ],
            keyPhrases: [
              { en: "pharmacy section", zh: "药品区" },
              { en: "sore throat", zh: "嗓子疼" },
              { en: "lozenges", zh: "含片" },
              { en: "throat spray", zh: "喉咙喷雾" },
              { en: "congestion", zh: "鼻塞" },
              { en: "multi-symptom", zh: "多症状" },
            ],
            culturalNote: "在美国和日本，便利店和药妆店可以买到很多非处方药（OTC），不需要处方。",
            alternativeExpressions: [
              { textEn: "Yeah, we've got some stuff for that. Throat lozenges, spray, and cold medicine are all in the back.", textZh: "有的，我们有治这个的。含片、喷雾和感冒药都在后面。", actionHint: "去后面药品区看看", frequency: "common" },
              { textEn: "Sure, our medicine aisle has cough drops and throat spray. Want me to show you?", textZh: "有的，药品那排有止咳糖和喉咙喷雾。要我带你去看看吗？", actionHint: "让店员带你去", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the throat spray. Do you also have any pain relievers? Like ibuprofen?",
            textZh: "我要喉咙喷雾。你们还有止痛药吗？比如布洛芬？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes, we have ibuprofen and acetaminophen. The ibuprofen is better for inflammation, while acetaminophen is gentler on the stomach. Which would you prefer?",
            textZh: "有的，布洛芬和对乙酰氨基酚都有。布洛芬对消炎更好，对乙酰氨基酚对胃更温和。您要哪种？",
            keyPhrases: [
              { en: "pain reliever", zh: "止痛药" },
              { en: "ibuprofen", zh: "布洛芬" },
              { en: "acetaminophen", zh: "对乙酰氨基酚" },
              { en: "inflammation", zh: "消炎/炎症" },
              { en: "gentler on the stomach", zh: "对胃更温和" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "We have both ibuprofen and Tylenol. Ibuprofen is better for swelling, Tylenol is easier on your stomach.", textZh: "布洛芬和泰诺都有。布洛芬消肿好，泰诺对胃温和。", actionHint: "根据症状选择", frequency: "common" },
              { textEn: "Sure! Advil or Tylenol — depends on what you need. Advil for inflammation, Tylenol if your stomach's sensitive.", textZh: "有的！Advil或泰诺——看你需要什么。消炎选Advil，胃不好选泰诺。", actionHint: "选适合自己的", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with ibuprofen. Also, I need some basic skincare stuff. Do you have sunscreen and lip balm?",
            textZh: "那我要布洛芬。另外，我还需要一些基本的护肤品。有防晒霜和润唇膏吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Sure! Sunscreen is on this shelf — we have SPF 30 and SPF 50. For lip balm, we have several options with and without SPF. This one with SPF 15 is our best seller.",
            textZh: "有的！防晒霜在这个架子上——有SPF 30和SPF 50的。润唇膏有好几款，有含防晒和不含防晒的。这款带SPF 15的卖得最好。",
            keyPhrases: [
              { en: "sunscreen", zh: "防晒霜" },
              { en: "SPF", zh: "防晒指数" },
              { en: "lip balm", zh: "润唇膏" },
              { en: "best seller", zh: "最畅销的" },
            ],
            alternativeExpressions: [
              { textEn: "Sunscreen's on this shelf — SPF 30 and 50. And these lip balms with SPF are really popular.", textZh: "防晒霜在这个架子上——有30和50倍的。这些带防晒的润唇膏特别畅销。", actionHint: "选择防晒指数", frequency: "common" },
              { textEn: "We've got a few options. SPF 50 if you're out in the sun a lot. This lip balm's our best seller.", textZh: "有好几种。经常晒太阳选SPF 50的。这款润唇膏卖得最好。", actionHint: "根据需求选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. I also need a small tube of toothpaste and a toothbrush. Travel-sized if you have them.",
            textZh: "好的。我还需要一小管牙膏和一把牙刷。有旅行装的吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes, we have travel-sized toiletries right by the register. Toothpaste, toothbrush, mini shampoo, deodorant — all under the travel section. They're TSA-approved sizes too, so you can take them on a plane.",
            textZh: "有的，收银台旁边就有旅行装洗漱用品。牙膏、牙刷、迷你洗发水、止汗剂——都在旅行用品区。大小也符合飞机安检标准，可以带上飞机。",
            keyPhrases: [
              { en: "travel-sized", zh: "旅行装" },
              { en: "toiletries", zh: "洗漱用品" },
              { en: "TSA-approved", zh: "符合安检标准" },
              { en: "deodorant", zh: "止汗剂/除臭剂" },
            ],
            responseTip: "旅行装通常是100ml以下，符合各国航空安检的液体限制。",
            alternativeExpressions: [
              { textEn: "Travel stuff is right by the register — toothpaste, toothbrush, mini shampoo, all TSA-friendly sizes.", textZh: "旅行用品就在收银台旁边——牙膏、牙刷、迷你洗发水，都是符合安检的大小。", actionHint: "去收银台旁边看看", frequency: "common" },
              { textEn: "Yep, we carry travel-sized everything. They're all small enough for carry-on.", textZh: "有的，旅行装都有。都够小，可以带上飞机。", actionHint: "选择需要的用品", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Can you recommend anything for jet lag? I just arrived yesterday and I can't sleep at night.",
            textZh: "太好了。有什么治时差的东西推荐吗？我昨天刚到，晚上睡不着。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "We have melatonin supplements — they're really popular for jet lag. The 3mg dose is usually enough. We also have herbal sleep tea and lavender pillow spray. I'd suggest trying the melatonin first.",
            textZh: "我们有褪黑素补充剂——对倒时差很受欢迎。3毫克的剂量通常就够了。我们还有草本助眠茶和薰衣草枕头喷雾。建议先试试褪黑素。",
            keyPhrases: [
              { en: "melatonin", zh: "褪黑素" },
              { en: "supplements", zh: "补充剂" },
              { en: "jet lag", zh: "时差" },
              { en: "herbal sleep tea", zh: "草本助眠茶" },
              { en: "dose", zh: "剂量" },
            ],
            culturalNote: "褪黑素在美国作为保健品出售，不需要处方。但在一些国家是处方药，购买前建议了解当地法规。",
            alternativeExpressions: [
              { textEn: "Melatonin is great for jet lag. Start with 3mg — take it about 30 minutes before bed.", textZh: "褪黑素治时差挺好的。从3毫克开始，睡前30分钟吃。", actionHint: "了解服用方法", frequency: "common" },
              { textEn: "For jet lag? Try melatonin. We also have sleepy tea and lavender spray if you prefer something natural.", textZh: "时差？试试褪黑素。也有助眠茶和薰衣草喷雾，如果你喜欢天然的。", actionHint: "选择适合的助眠产品", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll try the melatonin. Let me get all of these. What's the total?",
            textZh: "我试试褪黑素。这些都要了。一共多少钱？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Let me ring everything up... throat spray $8.99, ibuprofen $6.49, sunscreen $11.99, lip balm $3.49, travel toothpaste and toothbrush set $4.99, and melatonin $7.99. Your total with tax is $47.52. Would you like a bag?",
            textZh: "我帮您算一下……喉咙喷雾8.99美元，布洛芬6.49美元，防晒霜11.99美元，润唇膏3.49美元，旅行牙膏牙刷套装4.99美元，褪黑素7.99美元。含税一共47.52美元。需要袋子吗？",
            keyPhrases: [
              { en: "ring everything up", zh: "全部结账" },
              { en: "with tax", zh: "含税" },
            ],
            alternativeExpressions: [
              { textEn: "Okay, let me add it all up... Your total with tax is $47.52. Need a bag?", textZh: "好，我算一下……含税一共47.52美元。需要袋子吗？", actionHint: "决定是否要袋子", frequency: "common" },
              { textEn: "Everything together comes to $47.52 after tax. Want me to bag all of this?", textZh: "全部加起来含税47.52美元。要帮你装袋吗？", actionHint: "准备付款", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 纪念品店 ====================
  {
    id: "shopping-souvenirs",
    category: "shopping",
    titleZh: "纪念品店",
    titleEn: "Souvenir Shop",
    description: "在纪念品店购物，包括选购纪念品、砍价、礼品包装、国际邮寄等场景",
    otherRole: "店员",
    otherRoleIcon: "gift",
    flows: [
      // --- Flow 1: 选购纪念品 ---
      {
        id: "browsing-souvenirs",
        titleZh: "选购纪念品",
        titleEn: "Browsing Souvenirs",
        description: "浏览纪念品、询问热门商品、礼品包装",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm looking for some souvenirs to bring back home. What do most tourists buy?",
            textZh: "你好，我想买些纪念品带回去。大多数游客都买什么？",
            casualVersion: "Hey, what kind of souvenirs are popular here?",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Welcome! Our most popular items are these handmade keychains, local chocolate boxes, and fridge magnets. The postcards are also a big hit. Are you shopping for yourself or for gifts?",
            textZh: "欢迎！最受欢迎的是这些手工钥匙扣、当地巧克力礼盒和冰箱贴。明信片也很受欢迎。您是给自己买还是送人？",
            variations: [
              { textEn: "Our best sellers are the handcrafted items on this wall. We also have T-shirts, mugs, and local snacks. Anything catch your eye?", textZh: "我们最畅销的是这面墙上的手工制品。还有T恤、马克杯和当地零食。有看中什么吗？" },
            ],
            keyPhrases: [
              { en: "souvenirs", zh: "纪念品" },
              { en: "handmade", zh: "手工的" },
              { en: "fridge magnets", zh: "冰箱贴" },
              { en: "postcards", zh: "明信片" },
              { en: "big hit", zh: "很受欢迎" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "Our best sellers are the keychains, magnets, and local chocolates. Shopping for yourself or picking up gifts?", textZh: "卖得最好的是钥匙扣、冰箱贴和本地巧克力。给自己买还是送人？", actionHint: "说明购买目的", frequency: "common" },
              { textEn: "Tourists love our handmade crafts and local snacks. What are you looking for?", textZh: "游客都很喜欢我们的手工艺品和当地零食。你想找什么？", actionHint: "说出你的需求", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Mostly gifts. I need something for my parents and a few friends. What would you recommend?",
            textZh: "主要是送人的。要给父母和几个朋友带礼物。你推荐什么？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "For parents, I'd suggest this local tea set or the handpainted ceramics — they're unique and very nice quality. For friends, the keychains and chocolate boxes are always a safe bet. We also have these cute enamel pins that are really popular right now.",
            textZh: "给父母的话，推荐这套当地茶具或者手绘陶瓷——独特而且质量很好。朋友的话，钥匙扣和巧克力礼盒最保险了。我们还有这些可爱的珐琅徽章，现在特别火。",
            keyPhrases: [
              { en: "tea set", zh: "茶具" },
              { en: "handpainted", zh: "手绘的" },
              { en: "ceramics", zh: "陶瓷" },
              { en: "safe bet", zh: "保险的选择" },
              { en: "enamel pins", zh: "珐琅徽章" },
            ],
            alternativeExpressions: [
              { textEn: "For parents, this tea set or the ceramics are great. For friends, keychains and chocolates never go wrong.", textZh: "给父母的话，这套茶具或陶瓷很好。给朋友的话，钥匙扣和巧克力准没错。", actionHint: "看看推荐的礼物", frequency: "common" },
              { textEn: "The handpainted stuff is really popular for parents. And these enamel pins are perfect for friends.", textZh: "手绘的东西送父母很受欢迎。这些珐琅徽章送朋友特别合适。", actionHint: "按送礼对象选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The tea set is beautiful. How much is it? And can you gift wrap it?",
            textZh: "这套茶具很漂亮。多少钱？能帮我包装成礼物吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "The tea set is $45. And yes, we offer free gift wrapping! I can wrap it in this traditional paper with a ribbon. Would you also like a gift bag?",
            textZh: "茶具45美元。可以免费包装！我可以用这种传统包装纸配丝带包起来。要不要再配一个礼品袋？",
            keyPhrases: [
              { en: "gift wrapping", zh: "礼品包装" },
              { en: "ribbon", zh: "丝带" },
              { en: "gift bag", zh: "礼品袋" },
              { en: "free", zh: "免费的" },
            ],
            alternativeExpressions: [
              { textEn: "It's $45. And yes, gift wrapping is free! I can use this nice paper with a bow.", textZh: "45美元。包装免费！我可以用这个漂亮的纸配蝴蝶结。", actionHint: "确认包装方式", frequency: "common" },
              { textEn: "That one's $45. We wrap for free — want a gift box with a ribbon?", textZh: "那个45美元。免费包装——要礼盒配丝带吗？", actionHint: "选择包装样式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. I'll also take four keychains and two boxes of chocolate.",
            textZh: "好的。我再拿四个钥匙扣和两盒巧克力。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Great choices! The keychains are $8 each and the chocolate boxes are $12 each. So that's $45 for the tea set, $32 for the keychains, and $24 for the chocolates. Your total is $101. Shall I wrap everything separately?",
            textZh: "选得好！钥匙扣每个8美元，巧克力每盒12美元。茶具45美元，钥匙扣32美元，巧克力24美元。总共101美元。要分开包装吗？",
            keyPhrases: [
              { en: "each", zh: "每个" },
              { en: "wrap separately", zh: "分开包装" },
              { en: "total", zh: "总共" },
            ],
            alternativeExpressions: [
              { textEn: "So that's $101 altogether. Want me to wrap each one separately?", textZh: "一共101美元。要每个分开包吗？", actionHint: "说明包装需求", frequency: "common" },
              { textEn: "Keychains are $8 each, chocolates are $12 each, plus the tea set. Total's $101. How should I wrap them?", textZh: "钥匙扣每个8美元，巧克力每盒12美元，加茶具。总共101美元。怎么包装？", actionHint: "告诉店员包装方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Just the tea set needs wrapping. The rest can go in a regular bag. Thank you!",
            textZh: "只有茶具需要包装。其他的放普通袋子就行。谢谢！",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Sure thing! Here you go. I also put some extra padding around the tea set so it's safe for travel. Enjoy the rest of your trip!",
            textZh: "好的！给您。茶具我还额外加了防震垫，方便带回去。祝您旅途愉快！",
            keyPhrases: [
              { en: "extra padding", zh: "额外防震垫" },
              { en: "safe for travel", zh: "方便旅途携带" },
            ],
            alternativeExpressions: [
              { textEn: "All wrapped up! I padded the tea set extra well so it'll survive the trip. Have a wonderful vacation!", textZh: "都包好了！茶具特别加了防震，路上不怕碎。祝旅途愉快！", actionHint: "确认包装妥当", frequency: "common" },
              { textEn: "Here you go! The tea set is wrapped with bubble wrap inside. Safe travels!", textZh: "给您！茶具里面包了气泡膜。一路平安！", actionHint: "放心带走", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 2: 砍价和优惠 ---
      {
        id: "bargaining",
        titleZh: "砍价和优惠",
        titleEn: "Bargaining & Discounts",
        description: "协商价格、询问折扣、批量优惠",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I really like these scarves. How much are they?",
            textZh: "我很喜欢这些围巾。多少钱一条？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "These are our handwoven silk scarves. They're $60 each. The designs are all unique — each one is made by local artisans.",
            textZh: "这些是我们的手工丝绸围巾。每条60美元。每条设计都不同——都是本地工匠手工做的。",
            keyPhrases: [
              { en: "handwoven", zh: "手工编织的" },
              { en: "silk", zh: "丝绸" },
              { en: "artisans", zh: "工匠" },
              { en: "unique", zh: "独一无二的" },
            ],
            alternativeExpressions: [
              { textEn: "These are handmade silk — $60 each. Every one is different, made by local craftspeople.", textZh: "这些是手工丝绸——每条60美元。每条都不一样，本地手艺人做的。", actionHint: "了解商品信息", frequency: "common" },
              { textEn: "They're $60 apiece. All handwoven — you won't find two alike.", textZh: "每条60美元。都是手工编织的——找不到两条一样的。", actionHint: "看看花色选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "They're lovely, but $60 is a bit more than I wanted to spend. Is there any flexibility on the price?",
            textZh: "很漂亮，但60美元有点超出我的预算。价格能商量吗？",
            culturalNote: "在一些旅游市场和纪念品店可以砍价，但在品牌店或正规商店通常不可以。先观察其他顾客的行为再决定。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "I can give you a small discount. How about $55? That's about as low as I can go for one scarf.",
            textZh: "可以给您小幅优惠。55美元怎么样？一条围巾的话这基本是最低价了。",
            keyPhrases: [
              { en: "flexibility on the price", zh: "价格有弹性" },
              { en: "discount", zh: "折扣/优惠" },
              { en: "as low as I can go", zh: "最低价了" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "I can knock off five bucks. $55 is the best I can do for one.", textZh: "可以便宜5块。一条的话55美元是最低了。", actionHint: "考虑接受或继续还价", frequency: "common" },
              { textEn: "How about $55? That's pretty much the lowest I can go for a single scarf.", textZh: "55美元怎么样？单条的话这基本是底价了。", actionHint: "决定是否接受", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What if I buy three? Is there a bulk discount?",
            textZh: "如果我买三条呢？有批量优惠吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "For three, I can do $45 each — that's $135 total instead of $180. You save $45. It's the best deal I can offer.",
            textZh: "买三条的话，每条可以给您45美元——总共135美元，原价180美元。省了45美元。这是我能给的最好价格了。",
            keyPhrases: [
              { en: "bulk discount", zh: "批量优惠" },
              { en: "instead of", zh: "原价/而不是" },
              { en: "you save", zh: "您省了" },
              { en: "best deal", zh: "最好的价格" },
            ],
            alternativeExpressions: [
              { textEn: "Buy three and I'll do $45 each. That's $135 instead of $180 — saves you 45 bucks.", textZh: "买三条每条45美元。135而不是180——省45美元。", actionHint: "考虑批量购买", frequency: "common" },
              { textEn: "For three, I can bring it down to $45 a piece. That's my best price for a bulk order.", textZh: "三条的话可以降到每条45美元。批量买这是我最好的价了。", actionHint: "决定买几条", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds fair. Can you do $120 for three? I'll pay cash.",
            textZh: "挺公道的。三条120美元行吗？我付现金。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Hmm... $120 is really tight. Tell you what — $125 for three, and I'll throw in a free gift bag and wrapping. That's my final offer.",
            textZh: "嗯……120美元真的很难做。这样吧——三条125美元，我再送您免费礼品袋和包装。这是我的最终报价了。",
            keyPhrases: [
              { en: "really tight", zh: "真的很难/利润太薄" },
              { en: "tell you what", zh: "这样吧" },
              { en: "throw in", zh: "赠送/附送" },
              { en: "final offer", zh: "最终报价" },
            ],
            alternativeExpressions: [
              { textEn: "$120 is too low. Meet me at $125 and I'll throw in free wrapping. Final price.", textZh: "120太低了。125美元我送你免费包装。最终价了。", actionHint: "决定是否接受", frequency: "common" },
              { textEn: "I really can't do $120. How about $125 with a free gift bag? That's my bottom line.", textZh: "120真做不了。125送个礼品袋怎么样？这是我的底线了。", actionHint: "接受或放弃", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Deal! $125 it is. Here's the cash.",
            textZh: "成交！125美元。给您现金。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Wonderful! Let me wrap these up nicely for you. Here's your change and receipt. Thank you for your business — enjoy the scarves!",
            textZh: "太好了！我帮您包起来。找您零钱和收据。感谢您的惠顾——围巾好好享用！",
            keyPhrases: [
              { en: "wrap these up", zh: "包起来" },
              { en: "your change", zh: "找零" },
              { en: "thank you for your business", zh: "感谢惠顾" },
            ],
            alternativeExpressions: [
              { textEn: "Great deal! Let me pack these up for you. Here's your change. Thanks for shopping here!", textZh: "成交！我帮你包好。找您零钱。感谢光临！", actionHint: "拿好东西和零钱", frequency: "common" },
              { textEn: "Awesome! I'll wrap them nicely. Here's your change and receipt. Enjoy the scarves!", textZh: "太好了！我包好。找零和收据给您。围巾好好用！", actionHint: "确认找零和收据", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 3: 邮寄回国 ---
      {
        id: "international-shipping",
        titleZh: "邮寄回国",
        titleEn: "International Shipping",
        description: "购买纪念品后询问国际邮寄、海关申报和包装",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn: "I'd like to buy this large ceramic vase, but it's too big to carry on the plane. Do you offer international shipping?",
            textZh: "我想买这个大陶瓷花瓶，但太大了带不上飞机。你们提供国际快递吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes, we do! We can ship to most countries. Where would you like it sent?",
            textZh: "可以的！我们可以寄到大多数国家。您要寄到哪里？",
            keyPhrases: [
              { en: "international shipping", zh: "国际快递/国际邮寄" },
              { en: "ship to", zh: "寄到" },
              { en: "most countries", zh: "大多数国家" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely! We ship worldwide. Where would you like it sent?", textZh: "完全可以！我们寄全球。您想寄到哪里？", actionHint: "说出目的地国家", frequency: "common" },
              { textEn: "Sure, we can ship it for you. Just let me know the destination.", textZh: "可以的，我们帮你寄。告诉我寄到哪个国家就行。", actionHint: "提供寄送地址", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "To China. How much would shipping cost, and how long does it take?",
            textZh: "寄到中国。运费多少？要多长时间？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "For a package this size to China, standard shipping is about $35 and takes 2-3 weeks. Express shipping is $65 and arrives in 5-7 business days. Both include tracking.",
            textZh: "这个大小寄到中国的话，标准快递大约35美元，需要2-3周。特快专递65美元，5-7个工作日到。都包含物流追踪。",
            variations: [
              { textEn: "We use DHL and FedEx. Standard is $35, express is $65. Express comes with insurance too.", textZh: "我们用DHL和联邦快递。标准35美元，特快65美元。特快还包含保险。" },
            ],
            keyPhrases: [
              { en: "standard shipping", zh: "标准快递" },
              { en: "express shipping", zh: "特快专递" },
              { en: "tracking", zh: "物流追踪" },
              { en: "business days", zh: "工作日" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "Standard is about $35, takes 2-3 weeks. Express is $65 and gets there in a week. Both have tracking.", textZh: "标准大约35美元，2-3周到。特快65美元，一周到。都有物流追踪。", actionHint: "选择快递方式", frequency: "common" },
              { textEn: "We use DHL — standard is $35, express is $65 with insurance included.", textZh: "我们用DHL——标准35美元，特快65美元含保险。", actionHint: "根据时间需求选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with express. This is fragile — can you pack it really well?",
            textZh: "我选特快的。这个是易碎品——能帮我包装好一点吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Absolutely. We'll wrap it in bubble wrap and put it in a double-walled box with foam padding. We also mark it as fragile. We haven't had any breakage issues with our packing method.",
            textZh: "当然。我们会用气泡膜包好，放进双层纸箱里加泡沫填充。还会贴上易碎标签。我们的包装方法还没出过碎损问题。",
            keyPhrases: [
              { en: "fragile", zh: "易碎的" },
              { en: "bubble wrap", zh: "气泡膜" },
              { en: "double-walled box", zh: "双层纸箱" },
              { en: "foam padding", zh: "泡沫填充" },
              { en: "breakage", zh: "碎损" },
            ],
            alternativeExpressions: [
              { textEn: "Don't worry, we pack fragile items really well — double box, bubble wrap, the works. We've never had anything break.", textZh: "放心，易碎品我们包得很仔细——双层箱、气泡膜，全套。从来没碎过。", actionHint: "确认包装方案", frequency: "common" },
              { textEn: "Of course! We'll use bubble wrap and foam. It'll be marked fragile too.", textZh: "当然！会用气泡膜和泡沫。还会贴易碎标签。", actionHint: "了解包装细节", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good. Do I need to fill out a customs form? Are there any restrictions on shipping ceramics?",
            textZh: "好的。需要填海关申报单吗？寄陶瓷有什么限制吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes, I'll help you fill out the customs declaration form. We need to list the item, its value, and the material. Ceramics are generally fine — they're not restricted. But you should declare the actual value for customs in China, as they may charge import duty if the declared value is over a certain amount.",
            textZh: "需要的，我帮您填海关申报单。需要写清楚商品名称、价值和材质。陶瓷一般没问题——不属于限制品。不过要如实申报价值，因为中国海关对超过一定金额的包裹可能会征收进口关税。",
            keyPhrases: [
              { en: "customs declaration form", zh: "海关申报单" },
              { en: "declare the value", zh: "申报价值" },
              { en: "import duty", zh: "进口关税" },
              { en: "restricted", zh: "限制的" },
              { en: "material", zh: "材质" },
            ],
            responseTip: "如实申报价值很重要，低报可能导致包裹被扣。",
            alternativeExpressions: [
              { textEn: "I'll help you with the customs form. Ceramics are fine to ship — just declare the value honestly so it doesn't get stuck in customs.", textZh: "我帮你填海关单。陶瓷可以寄——如实填价值就行，免得被海关扣住。", actionHint: "如实申报价值", frequency: "common" },
              { textEn: "Yes, there's a customs form. I'll fill it out for you. Make sure to declare the real price — undervaluing can cause problems.", textZh: "对，有海关表格。我帮你填。一定要填真实价格——低报可能有问题。", actionHint: "按实际价格填写", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. The vase is $120. Should I declare it as a gift or a purchase?",
            textZh: "明白了。花瓶120美元。应该申报为礼物还是购买的商品？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "If it's for personal use or as a gift, you can mark it as a gift. But either way, you should list the actual value. Some countries have a lower duty-free threshold for gifts — for China, personal items under 1,000 RMB are usually duty-free. Your vase should be within that range.",
            textZh: "如果是自用或送人，可以标注为礼物。但无论如何都要填写实际价值。有些国家对礼物的免税额度较低——中国个人物品1000人民币以内通常免税。您这个花瓶应该在免税范围内。",
            keyPhrases: [
              { en: "personal use", zh: "个人使用" },
              { en: "duty-free threshold", zh: "免税额度" },
              { en: "actual value", zh: "实际价值" },
              { en: "within that range", zh: "在范围内" },
            ],
            culturalNote: "各国海关的免税额度和进口规定不同，大额商品建议提前查询目的国海关政策。",
            alternativeExpressions: [
              { textEn: "Mark it as a gift if it's for someone. Just put the real value — your vase should be under the duty-free limit.", textZh: "送人的话可以标注为礼物。填真实价值就行——你的花瓶应该在免税额度内。", actionHint: "按实际用途填写", frequency: "common" },
              { textEn: "You can write gift or personal use. Either way, list the actual price. At $120, it should be duty-free for China.", textZh: "可以写礼物或个人用品。不管哪个都填实际价格。120美元寄中国应该免税。", actionHint: "了解免税额度", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. So the vase is $120 plus $65 for express shipping. Can I also get insurance on the package?",
            textZh: "好的。那花瓶120美元加65美元快递费。能给包裹上保险吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Express shipping already includes basic insurance up to $100. For full coverage of the $120 value, it's an extra $8. I'd recommend it for a ceramic item. Your total would be $193. I'll give you the tracking number as soon as we ship it, and you can follow the delivery online.",
            textZh: "特快已经包含最高100美元的基本保险。要全额覆盖120美元的价值，额外加8美元。对陶瓷制品我推荐加上。总共193美元。寄出后我马上给您物流单号，您可以在网上查看运送进度。",
            keyPhrases: [
              { en: "basic insurance", zh: "基本保险" },
              { en: "full coverage", zh: "全额保障" },
              { en: "tracking number", zh: "物流单号" },
              { en: "follow the delivery", zh: "查看运送进度" },
            ],
            alternativeExpressions: [
              { textEn: "Express comes with $100 insurance. For full coverage on the $120 item, it's an extra $8. I'd recommend it. Total would be $193.", textZh: "特快含100美元保险。要全额覆盖120美元的话加8美元。推荐加上。总共193美元。", actionHint: "决定是否加保险", frequency: "common" },
              { textEn: "There's basic insurance included. For a fragile item like this, I'd add the full coverage — just $8 more. I'll give you the tracking number once it ships.", textZh: "含基本保险。像这种易碎品，建议加全额保障——只要8美元。寄出后给你单号。", actionHint: "考虑全额保险", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, let's add the insurance. Here's my card. Thank you for taking care of everything!",
            textZh: "好的，加上保险。给您我的卡。谢谢你帮忙处理一切！",
          },
        ],
      },
    ],
  },

  // ==================== 电子产品配件 ====================
  {
    id: "shopping-electronics-repair",
    category: "shopping",
    titleZh: "电子产品配件",
    titleEn: "Electronics Accessories",
    description: "在电子产品店购买手机配件、了解保修和产品规格",
    otherRole: "电子产品销售员",
    otherRoleIcon: "smartphone",
    flows: [
      // --- Flow 1: 手机配件购买 ---
      {
        id: "standard-electronics",
        titleZh: "手机配件购买",
        titleEn: "Phone Accessories",
        description: "挑选手机壳、充电器等配件，了解规格和兼容性",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "销售员",
            textEn: "Hi! Welcome to Tech Zone. What can I help you find today?",
            textZh: "你好！欢迎来到 Tech Zone。今天想找什么？",
            alternativeExpressions: [
              { textEn: "Hey there! Looking for anything specific?", textZh: "嘿！在找什么特定的东西吗？", actionHint: "告诉对方你需要什么", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Hi, I need a phone case and a charger for my iPhone 15. Where would those be?",
            textZh: "你好，我需要一个 iPhone 15 的手机壳和充电器。在哪里？",
            casualVersion: "Hey, where are the iPhone 15 cases and chargers?",
          },
          {
            speaker: "them",
            role: "销售员",
            textEn: "Phone cases are right over here, and chargers are on the next aisle. Are you looking for a specific type of case — clear, rugged, or slim?",
            textZh: "手机壳在这边，充电器在下一个过道。您想找什么类型的壳——透明的、防摔的还是超薄的？",
            keyPhrases: [
              { en: "aisle", zh: "过道" },
              { en: "clear", zh: "透明的" },
              { en: "rugged", zh: "防摔的/坚固的" },
              { en: "slim", zh: "超薄的" },
            ],
            vocabNotes: {
              "rugged": { meaningInContext: "在这句话里表示：加固防摔的手机壳，防护性强", similarUsage: "类似用法：a rugged laptop（三防笔记本电脑）" },
            },
            alternativeExpressions: [
              { textEn: "Cases are right here, chargers are one aisle over. Want something protective, thin, or see-through?", textZh: "手机壳在这，充电器在隔壁。要防摔的、薄的还是透明的？", actionHint: "说出你的偏好", frequency: "common" },
              { textEn: "iPhone 15? Cases are on this wall, chargers are over there. What kind of case do you prefer?", textZh: "iPhone 15？壳在这面墙上，充电器在那边。你喜欢什么类型的壳？", actionHint: "描述你想要的类型", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Something rugged, please. I tend to drop my phone a lot. And what's the difference between these two chargers?",
            textZh: "防摔的吧。我经常摔手机。这两个充电器有什么区别？",
          },
          {
            speaker: "them",
            role: "销售员",
            textEn: "This one is a standard 20-watt charger — it'll charge your phone to 50% in about 30 minutes. This one is 45 watts, so it's much faster, but it's $15 more. Both are MagSafe compatible.",
            textZh: "这个是标准20瓦充电器——大约30分钟充到50%。这个是45瓦的，快很多，但贵15美元。两个都兼容 MagSafe。",
            keyPhrases: [
              { en: "watt", zh: "瓦" },
              { en: "compatible", zh: "兼容的" },
              { en: "charge to 50%", zh: "充到50%" },
            ],
            vocabNotes: {
              "compatible": { meaningInContext: "在这句话里表示：能和你的手机配合使用的", similarUsage: "类似用法：Is this compatible with my laptop?（这个和我的笔记本兼容吗？）" },
            },
            alternativeExpressions: [
              { textEn: "This 20-watt one is standard speed, and this 45-watt one charges way faster. Both work with MagSafe.", textZh: "这个20瓦的是标准速度，这个45瓦的快很多。都支持MagSafe。", actionHint: "选择充电器", frequency: "common" },
              { textEn: "The difference is speed. The 45-watt is almost twice as fast but costs $15 more.", textZh: "区别就是速度。45瓦的快将近一倍，但贵15美元。", actionHint: "权衡速度和价格", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the faster one. Does it come with a cable, or do I need to buy one separately?",
            textZh: "我要快的那个。带数据线吗，还是要另外买？",
          },
          {
            speaker: "them",
            role: "销售员",
            textEn: "It comes with a USB-C to USB-C cable. If you need a USB-C to Lightning cable, that's sold separately for $12.",
            textZh: "附带一根 USB-C 转 USB-C 数据线。如果需要 USB-C 转 Lightning 的，要单买，12美元。",
            keyPhrases: [
              { en: "comes with", zh: "附带/包含" },
              { en: "sold separately", zh: "单独出售" },
            ],
            alternativeExpressions: [
              { textEn: "It includes a USB-C cable. If you need a Lightning adapter, that's $12 extra.", textZh: "附带USB-C线。如果需要Lightning转接头，要另外加12美元。", actionHint: "确认是否需要转接线", frequency: "common" },
              { textEn: "There's a USB-C cable in the box. Lightning cables are sold separately for $12.", textZh: "盒子里有USB-C线。Lightning线要单买，12美元。", actionHint: "看看是否需要额外的线", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "No, USB-C is fine. So the case and the charger — what's the total?",
            textZh: "不用，USB-C 就行。手机壳加充电器——一共多少？",
          },
          {
            speaker: "them",
            role: "销售员",
            textEn: "The rugged case is $39.99 and the 45-watt charger is $44.99. Your total before tax is $84.98. Would you like to add a screen protector? We're running a bundle deal — $10 off when you buy three accessories.",
            textZh: "防摔壳39.99美元，45瓦充电器44.99美元。税前一共84.98美元。要加一个屏幕保护膜吗？我们有套装优惠——买三件配件减10美元。",
            keyPhrases: [
              { en: "before tax", zh: "税前" },
              { en: "screen protector", zh: "屏幕保护膜" },
              { en: "bundle deal", zh: "套装优惠" },
            ],
            vocabNotes: {
              "bundle deal": { meaningInContext: "在这句话里表示：几件商品一起买有折扣", similarUsage: "类似用法：We have a bundle with the keyboard and mouse.（键盘鼠标有套装优惠）" },
            },
            alternativeExpressions: [
              { textEn: "The case and charger are $84.98 before tax. Add a screen protector and save $10 on the bundle.", textZh: "壳和充电器税前84.98美元。加个保护膜的话套装减10美元。", actionHint: "考虑加保护膜", frequency: "common" },
              { textEn: "That's $84.98 total. Want a screen protector too? Buy three accessories and get $10 off.", textZh: "一共84.98美元。要加保护膜吗？买三件配件减10美元。", actionHint: "利用套装优惠", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, I'll add the screen protector. Can you help me install it?",
            textZh: "好的，加一个保护膜。可以帮我贴吗？",
          },
          {
            speaker: "them",
            role: "销售员",
            textEn: "Absolutely! We offer free installation for screen protectors purchased in-store. I'll do it for you right now at the counter.",
            textZh: "当然可以！店内购买的保护膜我们免费帮贴。我现在就在柜台帮您贴。",
            keyPhrases: [
              { en: "free installation", zh: "免费安装/贴膜" },
              { en: "purchased in-store", zh: "店内购买的" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing! We put it on for free if you buy it here. I'll do it right now.", textZh: "没问题！在店里买的我们免费贴。我现在就帮你贴。", actionHint: "等店员帮你贴", frequency: "common" },
              { textEn: "Of course, free installation for any protector bought in-store. Give me one minute.", textZh: "当然，店里买的保护膜免费贴。给我一分钟。", actionHint: "把手机给店员", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, thank you! I'll pay by card.",
            textZh: "太好了，谢谢！我刷卡。",
          },
        ],
      },

      // --- Flow 2: 保修与退换 ---
      {
        id: "electronics-warranty",
        titleZh: "保修咨询",
        titleEn: "Warranty Inquiry",
        description: "了解电子产品保修政策、延保和退换规则",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I bought these wireless earbuds here two weeks ago, and the left one stopped working. Is this covered under warranty?",
            textZh: "我两周前在这里买的无线耳机，左边的不响了。这在保修范围内吗？",
          },
          {
            speaker: "them",
            role: "销售员",
            textEn: "I'm sorry to hear that. Do you have your receipt or proof of purchase? Most electronics have a one-year manufacturer's warranty.",
            textZh: "很抱歉。您有收据或购买凭证吗？大部分电子产品有一年的厂家保修。",
            keyPhrases: [
              { en: "proof of purchase", zh: "购买凭证" },
              { en: "manufacturer's warranty", zh: "厂家保修" },
            ],
            vocabNotes: {
              "manufacturer's warranty": { meaningInContext: "在这句话里表示：生产厂家提供的保修服务", similarUsage: "类似用法：The manufacturer's warranty covers defects.（厂家保修覆盖产品缺陷）" },
            },
            alternativeExpressions: [
              { textEn: "Can I see your receipt? We should be able to exchange or refund those.", textZh: "能看一下收据吗？应该可以换或退。", actionHint: "出示收据", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, here's the receipt. I also have the original box.",
            textZh: "有的，收据在这。原包装盒也在。",
          },
          {
            speaker: "them",
            role: "销售员",
            textEn: "Perfect. Since it's within 30 days, you can do a direct exchange or get a full refund. Would you like to swap them for a new pair or try a different model?",
            textZh: "太好了。因为在30天内，可以直接换新或全额退款。您想换一副同款的还是试试其他型号？",
            keyPhrases: [
              { en: "direct exchange", zh: "直接换新" },
              { en: "full refund", zh: "全额退款" },
              { en: "swap them", zh: "换一副" },
            ],
            isBranchPoint: true,
            responseTip: "可以选择换同款或不同型号，也可以选择退款",
            alternativeExpressions: [
              { textEn: "It's within 30 days, so you can swap them or get your money back. What would you prefer?", textZh: "在30天内，可以换新或退钱。你想怎么处理？", actionHint: "选择换货或退款", frequency: "common" },
              { textEn: "Since you bought them recently, I can do a straight exchange or a full refund. Your call.", textZh: "因为是最近买的，可以直接换新或全额退款。你说了算。", actionHint: "做出选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll exchange for the same model. But I'm worried it might happen again. Do you have an extended warranty?",
            textZh: "我换同款吧。但我担心再出问题。有延保吗？",
          },
          {
            speaker: "them",
            role: "销售员",
            textEn: "We do! Our protection plan covers accidental damage and defects for two years. It's $19.99 for earbuds in this price range. It also covers one free replacement, no questions asked.",
            textZh: "有的！我们的保障计划覆盖意外损坏和缺陷，有效期两年。这个价位的耳机保障计划是19.99美元。还包含一次免费换新，无需解释原因。",
            keyPhrases: [
              { en: "protection plan", zh: "保障计划" },
              { en: "accidental damage", zh: "意外损坏" },
              { en: "no questions asked", zh: "无需解释/无条件" },
            ],
            vocabNotes: {
              "no questions asked": { meaningInContext: "在这句话里表示：不需要解释原因、无条件接受", similarUsage: "类似用法：30-day return, no questions asked.（30天无条件退货）" },
            },
            alternativeExpressions: [
              { textEn: "We have a 2-year plan for $19.99. Covers drops, defects, and one free replacement — no questions asked.", textZh: "有个19.99美元的两年计划。覆盖摔坏、缺陷，还有一次免费换新——无需理由。", actionHint: "考虑是否购买", frequency: "common" },
              { textEn: "For about $20, you get two years of coverage. If anything goes wrong, we just swap it out.", textZh: "大约20美元可以保两年。出了任何问题直接换新。", actionHint: "了解保障范围", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds worth it. I'll add the protection plan. Can you set up the new earbuds for me?",
            textZh: "听起来值得。加上保障计划。能帮我设置一下新耳机吗？",
          },
          {
            speaker: "them",
            role: "销售员",
            textEn: "Of course! I'll pair them with your phone right now. It only takes a minute. Here's your new pair with the warranty card.",
            textZh: "当然！我现在帮你和手机配对。只要一分钟。这是您的新耳机和保修卡。",
            keyPhrases: [
              { en: "pair them", zh: "配对" },
              { en: "warranty card", zh: "保修卡" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! Let me pair them with your phone real quick. Here's your new pair and the warranty info.", textZh: "好的！我快速帮你跟手机配对。这是新耳机和保修信息。", actionHint: "把手机给店员配对", frequency: "common" },
              { textEn: "I'll get them connected for you. Takes just a minute. Here's your warranty card — keep it somewhere safe.", textZh: "我帮你连上。一分钟就好。这是保修卡——放好别丢。", actionHint: "保管好保修卡", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much. You've been really helpful!",
            textZh: "太感谢了。你帮了大忙！",
          },
        ],
      },
    ],
  },

  // ==================== 奥特莱斯 ====================
  {
    id: "shopping-outlet",
    category: "shopping",
    titleZh: "奥特莱斯",
    titleEn: "Outlet Mall Shopping",
    description: "在奥特莱斯购物，了解品牌折扣、比价和购物策略",
    otherRole: "店员",
    otherRoleIcon: "tag",
    flows: [
      // --- Flow 1: 品牌折扣购物 ---
      {
        id: "standard-outlet",
        titleZh: "品牌折扣购物",
        titleEn: "Brand Discount Shopping",
        description: "在奥特莱斯品牌店寻找折扣商品，了解优惠和比较价格",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, are these bags from the current season, or are they outlet-exclusive?",
            textZh: "你好，这些包是当季的还是奥莱专供的？",
            culturalNote: "有些奥莱商品是专门为奥莱生产的（outlet-exclusive），质量可能和正价店不同。可以直接问。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Great question! These on the front table are outlet-exclusive styles. But we also have some past-season items from our main stores — those are on the back wall with the red tags.",
            textZh: "问得好！前面桌上这些是奥莱专供款。但我们也有正价店的过季商品——在后面墙上，贴红色标签的那些。",
            keyPhrases: [
              { en: "outlet-exclusive", zh: "奥莱专供" },
              { en: "past-season", zh: "过季的" },
              { en: "main stores", zh: "正价店" },
              { en: "red tags", zh: "红色标签" },
            ],
            vocabNotes: {
              "outlet-exclusive": { meaningInContext: "在这句话里表示：专门为奥特莱斯生产的商品，非正价店下架商品", similarUsage: "类似用法：online-exclusive（网店专供）" },
            },
            alternativeExpressions: [
              { textEn: "The front table is our outlet line. The back wall has items from our regular stores — look for the red tags.", textZh: "前面桌上是奥莱专线。后面墙上是正价店的货——找红标签的。", actionHint: "看红标签找正价店过季款", frequency: "common" },
              { textEn: "Some are outlet-only, some are past-season from our main stores. The red-tagged ones are from the regular line.", textZh: "有些是奥莱专供，有些是正价店的过季款。贴红标签的是正价店的。", actionHint: "区分奥莱专供和过季款", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I see. How much is this crossbody bag? The price tag says $198, but is there an additional discount?",
            textZh: "好的。这个斜挎包多少钱？标签上写198美元，还有额外折扣吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes! Everything with a red tag is an additional 30% off the marked price. So that bag would come out to about $138.60 before tax.",
            textZh: "有的！红色标签的商品在标价基础上再打七折。所以这个包税前大约138.60美元。",
            keyPhrases: [
              { en: "additional 30% off", zh: "额外七折/再减30%" },
              { en: "marked price", zh: "标价" },
              { en: "come out to", zh: "算下来是" },
            ],
            vocabNotes: {
              "come out to": { meaningInContext: "在这句话里表示：计算后最终价格是", similarUsage: "类似用法：With tax, it comes out to $150.（含税算下来是150美元）" },
            },
            alternativeExpressions: [
              { textEn: "Red tags are 30% off the sticker price. So that bag ends up around $139 before tax.", textZh: "红标签的在标价基础上打七折。所以那个包税前大约139美元。", actionHint: "了解折扣力度", frequency: "common" },
              { textEn: "There's an extra 30% off everything with a red tag. That brings this one down to about $139.", textZh: "红标签的额外七折。这个算下来大约139美元。", actionHint: "计算实际价格", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a pretty good deal. How does the quality compare to the full-price store?",
            textZh: "挺划算的。和正价店的质量比怎么样？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Honestly, the outlet-exclusive line uses slightly different materials, but the craftsmanship is still excellent. The past-season items on the back wall are identical to what was sold in our main stores.",
            textZh: "说实话，奥莱专供线用的材料略有不同，但做工还是很好的。后面墙上的过季款和正价店卖的完全一样。",
            keyPhrases: [
              { en: "craftsmanship", zh: "做工/工艺" },
              { en: "identical", zh: "完全一样的" },
            ],
            alternativeExpressions: [
              { textEn: "The outlet line uses slightly different materials, but the quality is still solid. The past-season stuff on the back wall is the exact same as the main store.", textZh: "奥莱线用的材料略有不同，但质量还是很好的。后面墙上的过季款和正价店完全一样。", actionHint: "考虑选过季款", frequency: "common" },
              { textEn: "To be honest, the outlet-exclusive pieces are a bit different. But the red-tag items? Those are identical to the full-price store.", textZh: "说实话，奥莱专供的有点不同。但红标签的？和正价店一模一样。", actionHint: "了解质量区别", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd prefer the past-season ones then. Do you have this style in black?",
            textZh: "那我更想要过季款。这个款式有黑色的吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Let me check... We have it in black and navy. The black one is the last one we have in stock. Would you like to grab it before it's gone?",
            textZh: "我看看……有黑色和海军蓝的。黑色的是最后一个了。要趁还在的时候拿下吗？",
            keyPhrases: [
              { en: "last one in stock", zh: "最后一个了" },
              { en: "before it's gone", zh: "趁还在/售完为止" },
            ],
            alternativeExpressions: [
              { textEn: "Black is almost sold out — this is our last one.", textZh: "黑色快卖完了——这是最后一个。", actionHint: "如果喜欢就赶紧买", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I'll take the black one! Do you offer tax-free shopping for tourists?",
            textZh: "好的，我要黑色的！你们给游客提供免税购物吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "We don't do tax-free in-store, but you can claim a tax refund at the customer service center near the main entrance. Just bring your passport and receipts.",
            textZh: "店内不免税，但您可以去主入口附近的客服中心申请退税。带好护照和收据就行。",
            keyPhrases: [
              { en: "tax refund", zh: "退税" },
              { en: "customer service center", zh: "客服中心" },
              { en: "passport and receipts", zh: "护照和收据" },
            ],
            alternativeExpressions: [
              { textEn: "We can't do tax-free here, but the info desk near the main entrance can help with refunds. Bring your passport.", textZh: "我们店里不免税，但主入口的服务台可以办退税。带好护照。", actionHint: "去客服中心办退税", frequency: "common" },
              { textEn: "Tax refund is handled at the customer service desk by the entrance. Just show them your receipts and passport.", textZh: "退税在入口旁的客服台办理。出示收据和护照就行。", actionHint: "准备好证件和收据", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. I'll do that. Thank you!",
            textZh: "好的，我会去的。谢谢！",
          },
        ],
      },

      // --- Flow 2: 比价与讨价 ---
      {
        id: "outlet-comparison",
        titleZh: "比价与价格匹配",
        titleEn: "Price Comparison & Matching",
        description: "比较不同店铺的价格，询问价格匹配政策",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I saw this exact jacket at another outlet store for $20 less. Do you do price matching?",
            textZh: "你好，我在另一家奥莱店看到同款夹克便宜20美元。你们做价格匹配吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "We do price match with select retailers. Do you have proof of the other store's price — like a photo of the tag or their website listing?",
            textZh: "我们和部分零售商做价格匹配。您有那家店价格的证明吗——比如标签的照片或者他们网站上的标价？",
            keyPhrases: [
              { en: "price match", zh: "价格匹配" },
              { en: "proof of price", zh: "价格证明" },
              { en: "website listing", zh: "网站标价" },
            ],
            vocabNotes: {
              "price match": { meaningInContext: "在这句话里表示：如果其他店更便宜，本店也给你同样的价格", similarUsage: "类似用法：Best Buy will price match Amazon.（百思买会匹配亚马逊的价格）" },
            },
            alternativeExpressions: [
              { textEn: "We do price matching. Can you show me proof — a photo or their website?", textZh: "我们做价格匹配。能出示证明吗——照片或他们的网站？", actionHint: "出示价格证明", frequency: "common" },
              { textEn: "If you can show me the other store's price, I can see about matching it.", textZh: "如果能给我看另一家店的价格，我看看能不能匹配。", actionHint: "拿出价格证据", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I took a photo. Here, you can see the price tag — same brand, same style number.",
            textZh: "有的，我拍了照片。你看，价签上有——同品牌、同款号。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Let me verify... Yes, I can see it's the same item. I'll need to get my manager's approval for the price match. One moment, please.",
            textZh: "我核实一下……是的，确实是同款。价格匹配需要经理批准。请稍等。",
            keyPhrases: [
              { en: "verify", zh: "核实" },
              { en: "manager's approval", zh: "经理批准" },
            ],
            alternativeExpressions: [
              { textEn: "Looks like the same item. Let me get my manager to sign off on the price match real quick.", textZh: "看起来是同款。我找经理快速批准一下价格匹配。", actionHint: "等待经理审批", frequency: "common" },
              { textEn: "I can see it's the same product. Hold on, I need my manager's okay for price adjustments.", textZh: "确实是同款。稍等，调价需要经理批准。", actionHint: "耐心等待", frequency: "occasional" },
            ],
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Good news — my manager approved the price match. I can sell it to you for $79.99 instead of $99.99. Would you like to go ahead?",
            textZh: "好消息——经理批准了价格匹配。可以79.99美元卖给您，不是99.99美元。要买吗？",
            keyPhrases: [
              { en: "approved", zh: "批准了" },
              { en: "go ahead", zh: "继续/买下" },
            ],
            alternativeExpressions: [
              { textEn: "Great news! We can match it — $79.99 instead of $99.99. Want to go ahead?", textZh: "好消息！可以匹配——79.99而不是99.99美元。要买吗？", actionHint: "确认购买", frequency: "common" },
              { textEn: "My manager said yes! I'll ring it up at $79.99 for you.", textZh: "经理同意了！给你按79.99美元结账。", actionHint: "准备付款", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please! And can I also use this 15% off coupon I got at the entrance?",
            textZh: "好的！我在入口拿了一张八五折优惠券，可以叠加使用吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Unfortunately, coupons can't be combined with price matching. It's one or the other. In this case, the price match gives you a bigger discount, so I'd go with that.",
            textZh: "不好意思，优惠券不能和价格匹配叠加。只能选一个。这种情况下价格匹配更划算，建议选价格匹配。",
            keyPhrases: [
              { en: "can't be combined", zh: "不能叠加" },
              { en: "one or the other", zh: "二选一" },
            ],
            alternativeExpressions: [
              { textEn: "Sorry, those two promotions don't stack.", textZh: "抱歉，这两个优惠不能叠加。", actionHint: "选更优惠的那个", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That makes sense. I'll go with the price match. Thanks for explaining!",
            textZh: "有道理。那就价格匹配吧。谢谢解释！",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "You're welcome! Great deal you're getting. Cash or card?",
            textZh: "不客气！您买得很划算。现金还是刷卡？",
            alternativeExpressions: [
              { textEn: "No problem! You're saving a good chunk. How are you paying?", textZh: "没问题！省了不少呢。怎么付？", actionHint: "选择付款方式", frequency: "common" },
              { textEn: "Happy to help! Cash or card for you today?", textZh: "很高兴帮到你！今天付现还是刷卡？", actionHint: "告诉店员付款方式", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Card, please. Thank you!",
            textZh: "刷卡。谢谢！",
          },
        ],
      },
    ],
  },

  // ==================== 网购自提 ====================
  {
    id: "shopping-online-pickup",
    category: "shopping",
    titleZh: "网购自提",
    titleEn: "Online Order Pickup",
    description: "到店取网上下的单，包括验证身份、检查商品和处理退货",
    otherRole: "自提柜台店员",
    otherRoleIcon: "package",
    flows: [
      // --- Flow 1: 标准自提 ---
      {
        id: "standard-pickup",
        titleZh: "标准自提取货",
        titleEn: "Standard Order Pickup",
        description: "到店出示确认信息、取货、检查商品",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm here to pick up an online order.",
            textZh: "你好，我来取网上下的单。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Sure! Can I have your order number or the name on the order?",
            textZh: "好的！能给我订单号或者下单的名字吗？",
            keyPhrases: [
              { en: "order number", zh: "订单号" },
              { en: "name on the order", zh: "下单人姓名" },
            ],
            alternativeExpressions: [
              { textEn: "Do you have your pickup confirmation email?", textZh: "您有取货确认邮件吗？", actionHint: "出示确认邮件或说订单号", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "The order is under Wayne Wang. Here's the confirmation email on my phone.",
            textZh: "订单名是 Wayne Wang。这是我手机上的确认邮件。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "I found it. I'll just need to see a photo ID to verify. Can I see your driver's license or passport?",
            textZh: "找到了。我需要核实一下身份。能看一下驾照或护照吗？",
            keyPhrases: [
              { en: "photo ID", zh: "带照片的证件" },
              { en: "verify", zh: "核实" },
              { en: "driver's license", zh: "驾照" },
            ],
            vocabNotes: {
              "photo ID": { meaningInContext: "在这句话里表示：有照片的身份证件，用来确认是本人取货", similarUsage: "类似用法：You'll need a valid photo ID to check in.（入住需要有效的带照片证件）" },
            },
            alternativeExpressions: [
              { textEn: "Got it. I just need to see some ID — a driver's license or passport works.", textZh: "找到了。需要看一下证件——驾照或护照都行。", actionHint: "出示证件", frequency: "common" },
              { textEn: "Here's your order. Can I just see your ID to confirm it's you?", textZh: "您的订单在这。看一下证件确认是本人好吗？", actionHint: "出示带照片的证件", frequency: "occasional" },
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
            textEn: "Perfect, everything checks out. Let me grab your order from the back. One moment.",
            textZh: "好的，信息都对上了。我去后面拿您的东西。稍等一下。",
            keyPhrases: [
              { en: "checks out", zh: "核实通过" },
              { en: "grab your order", zh: "拿您的东西" },
              { en: "from the back", zh: "从后面（仓库）" },
            ],
            alternativeExpressions: [
              { textEn: "All good! Let me go get your stuff. Be right back.", textZh: "没问题！我去拿你的东西。马上回来。", actionHint: "等店员取货", frequency: "common" },
              { textEn: "ID matches. Give me a sec — I'll grab your order from the back.", textZh: "证件对上了。稍等——我去后面拿你的订单。", actionHint: "稍等片刻", frequency: "occasional" },
            ],
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Here's your order — two items. Would you like to open it and check everything before you leave?",
            textZh: "这是您的订单——两件商品。要在走之前打开检查一下吗？",
            keyPhrases: [
              { en: "check everything", zh: "检查一下" },
            ],
            alternativeExpressions: [
              { textEn: "Here you go — two items in here. Want to check them before you head out?", textZh: "给您——里面两件。走之前要检查一下吗？", actionHint: "打开检查商品", frequency: "common" },
              { textEn: "Your order's all here. I'd recommend looking it over just to make sure everything's right.", textZh: "订单都在这了。建议检查一下确认没问题。", actionHint: "确认商品完好", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, let me take a quick look... Everything looks good. Thank you!",
            textZh: "好的，我看一下……都没问题。谢谢！",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Great! If you have any issues, you can return or exchange within 30 days with your order confirmation. Have a good day!",
            textZh: "好的！如有问题，凭订单确认30天内可退换。祝您愉快！",
            keyPhrases: [
              { en: "return or exchange", zh: "退换" },
              { en: "order confirmation", zh: "订单确认" },
            ],
            alternativeExpressions: [
              { textEn: "You're all set! You have 30 days to return or swap anything. Just bring your confirmation. Have a good day!", textZh: "搞定了！30天内可以退换。带好确认信息就行。祝你愉快！", actionHint: "记住退换期限", frequency: "common" },
              { textEn: "Awesome! If anything's wrong, come back within 30 days with your order email. Enjoy!", textZh: "太好了！有问题的话30天内带订单邮件来就行。好好用！", actionHint: "保存好订单邮件", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 2: 自提退货 ---
      {
        id: "pickup-return",
        titleZh: "自提后退货",
        titleEn: "Return After Pickup",
        description: "取到的商品有问题或不满意，当场退货或换货",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just picked up my online order, but the color is completely different from what was shown on the website. I'd like to return it.",
            textZh: "你好，我刚取了网上下的单，但颜色和网站上显示的完全不一样。我想退货。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "I'm sorry about that. Let me take a look. Do you have the order confirmation and a photo ID?",
            textZh: "很抱歉。我看看。您有订单确认和身份证件吗？",
            alternativeExpressions: [
              { textEn: "Oh I'm sorry. Can I see your order info and ID? I'll sort this out for you.", textZh: "哦抱歉。能看一下订单信息和证件吗？我帮你处理。", actionHint: "出示订单和证件", frequency: "common" },
              { textEn: "That's not right. Let me pull up your order. Got your confirmation email handy?", textZh: "那不对。我调出你的订单看看。确认邮件方便看一下吗？", actionHint: "出示确认邮件", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, here's everything. See, on the website it looks navy blue, but this is clearly gray.",
            textZh: "有的，都在这。你看，网站上显示是海军蓝，但这明显是灰色的。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "I see what you mean — there is a noticeable difference. I can process a full refund for you. Would you prefer the refund to your original payment method, or would you like store credit?",
            textZh: "我理解——确实差别很大。我可以给您全额退款。退回原支付方式，还是要店铺积分？",
            keyPhrases: [
              { en: "noticeable difference", zh: "明显差别" },
              { en: "full refund", zh: "全额退款" },
              { en: "original payment method", zh: "原支付方式" },
              { en: "store credit", zh: "店铺积分/购物券" },
            ],
            vocabNotes: {
              "store credit": { meaningInContext: "在这句话里表示：退款不给现金，而是给一张可以在本店消费的购物券或积分", similarUsage: "类似用法：You'll receive $50 in store credit.（您会收到50美元的店铺积分）" },
            },
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "Yeah, that does look different. I can give you a full refund — back to your card or as store credit?", textZh: "确实看起来不一样。可以全额退款——退回卡上还是给店铺积分？", actionHint: "选择退款方式", frequency: "common" },
              { textEn: "I see the issue. Would you like a refund to your original payment, or store credit for next time?", textZh: "我看到问题了。要退回原来的付款方式，还是给店铺积分下次用？", actionHint: "决定退款方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Refund to my credit card, please. How long will it take to process?",
            textZh: "退回信用卡吧。要多久处理好？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "The refund will be processed immediately, but it may take 3 to 5 business days to appear on your statement. Here's your refund receipt.",
            textZh: "退款会立即处理，但可能需要3到5个工作日才会显示在您的账单上。这是退款收据。",
            keyPhrases: [
              { en: "3 to 5 business days", zh: "3到5个工作日" },
              { en: "appear on your statement", zh: "显示在账单上" },
              { en: "refund receipt", zh: "退款收据" },
            ],
            alternativeExpressions: [
              { textEn: "You should see it back on your card within a week.", textZh: "一周内应该能看到退回您卡上。", actionHint: "保留退款收据以防查询", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay. Do you happen to have the navy blue version in stock here? I'd still like to buy it if the color is right.",
            textZh: "好的。你们店里有海军蓝的现货吗？如果颜色对的话我还是想买。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Let me check our inventory... Yes, we do have it in navy blue! Here, take a look — is this the color you were expecting?",
            textZh: "我查查库存……有的，有海军蓝的！您看看——这是您想要的颜色吗？",
            keyPhrases: [
              { en: "inventory", zh: "库存" },
            ],
            alternativeExpressions: [
              { textEn: "Let me look it up... Yep, we've got the navy blue in stock! Want to see it?", textZh: "我查查……有的，海军蓝有货！要看看吗？", actionHint: "确认颜色是否满意", frequency: "common" },
              { textEn: "Checking our system... Good news, we have navy blue here in the store. Is this the color you wanted?", textZh: "查一下系统……好消息，店里有海军蓝的。这是你想要的颜色吗？", actionHint: "确认是否是正确的颜色", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, that's exactly it! I'll take this one. Can I pay with the same card?",
            textZh: "对，就是这个！我要这个。可以用同一张卡付吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Of course! And since this was our mistake, let me give you 10% off as a courtesy. Your total comes to $44.99.",
            textZh: "当然！既然是我们的问题，给您打个九折表示歉意。一共44.99美元。",
            keyPhrases: [
              { en: "as a courtesy", zh: "表示歉意/礼貌性地" },
            ],
            vocabNotes: {
              "courtesy": { meaningInContext: "在这句话里表示：出于歉意和礼貌给予的优惠", similarUsage: "类似用法：courtesy upgrade（免费升级作为补偿）" },
            },
            alternativeExpressions: [
              { textEn: "Sure thing! And since this was our fault, I'll knock 10% off. Your total is $44.99.", textZh: "没问题！既然是我们的失误，给你打九折。一共44.99美元。", actionHint: "接受折扣优惠", frequency: "common" },
              { textEn: "Of course! I'm also going to give you a 10% discount for the trouble. So it's $44.99.", textZh: "当然可以！给您添麻烦了，打个九折表示歉意。44.99美元。", actionHint: "感谢店员的处理", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's really kind of you. Thank you for making this easy!",
            textZh: "你真好。谢谢你让这个过程这么顺利！",
          },
        ],
      },
    ],
  },

  // ==================== 珠宝首饰 ====================
  {
    id: "shopping-jewelry",
    category: "shopping",
    titleZh: "珠宝首饰",
    titleEn: "Jewelry Shopping",
    description: "在珠宝店挑选首饰，了解尺寸、材质和礼品包装",
    otherRole: "珠宝顾问",
    otherRoleIcon: "gem",
    flows: [
      // --- Flow 1: 挑选与试戴 ---
      {
        id: "standard-jewelry",
        titleZh: "挑选首饰",
        titleEn: "Choosing Jewelry",
        description: "在珠宝店挑选戒指或项链，了解材质和尺寸",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "珠宝顾问",
            textEn: "Welcome! Are you shopping for yourself or looking for a gift?",
            textZh: "欢迎！是给自己买还是在找礼物？",
            alternativeExpressions: [
              { textEn: "Hi there! Is this for a special occasion?", textZh: "你好！是为了什么特别的场合吗？", actionHint: "说明是给谁买的", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm looking for a necklace as a gift for my wife. Something elegant but not too flashy.",
            textZh: "我想给妻子买一条项链作为礼物。优雅但不太张扬的那种。",
            casualVersion: "I need a necklace for my wife — classy but simple.",
          },
          {
            speaker: "them",
            role: "珠宝顾问",
            textEn: "Beautiful! What's the occasion? And do you have a budget in mind?",
            textZh: "太好了！什么场合呢？您有预算范围吗？",
            keyPhrases: [
              { en: "occasion", zh: "场合" },
              { en: "budget in mind", zh: "心里的预算" },
            ],
            alternativeExpressions: [
              { textEn: "How lovely! What's the occasion? And roughly how much were you looking to spend?", textZh: "太好了！什么场合呢？大概想花多少？", actionHint: "说明场合和预算", frequency: "common" },
              { textEn: "Nice! Is it for a special event? That'll help me find the right piece. Do you have a price range?", textZh: "不错！是什么特别的日子吗？这样我好推荐。有预算范围吗？", actionHint: "描述场合和价位", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's our anniversary. I'm thinking somewhere around $200 to $400.",
            textZh: "我们的结婚纪念日。预算大概200到400美元。",
          },
          {
            speaker: "them",
            role: "珠宝顾问",
            textEn: "Lovely! I have some gorgeous pieces in that range. Do you know if she prefers gold or silver? And does she usually wear yellow gold or white gold?",
            textZh: "很好！那个价位有很多漂亮的款式。您知道她喜欢金色还是银色吗？通常戴黄金还是白金？",
            keyPhrases: [
              { en: "yellow gold", zh: "黄金" },
              { en: "white gold", zh: "白金" },
              { en: "gorgeous pieces", zh: "漂亮的款式" },
            ],
            vocabNotes: {
              "white gold": { meaningInContext: "在这句话里表示：白色的金合金，看起来像银色但实际是金", similarUsage: "类似用法：rose gold（玫瑰金）" },
            },
            alternativeExpressions: [
              { textEn: "We have beautiful pieces in that range! Does she prefer gold or silver tones?", textZh: "那个价位有很多漂亮的！她喜欢金色还是银色？", actionHint: "说出她的偏好", frequency: "common" },
              { textEn: "Anniversary — wonderful! Is she more of a gold person or silver? That'll narrow it down.", textZh: "结婚纪念日——太好了！她更偏爱金色还是银色？这样好缩小范围。", actionHint: "描述她的风格", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "She usually wears silver, so maybe white gold? Can I see a few options?",
            textZh: "她一般戴银色的，所以也许白金？可以看几款吗？",
          },
          {
            speaker: "them",
            role: "珠宝顾问",
            textEn: "Of course! This pendant necklace is 14-karat white gold with a small diamond — it's $350. And this one is sterling silver with a sapphire, at $220. Both are very popular.",
            textZh: "当然！这条吊坠项链是14K白金配小钻石——350美元。这条是纯银配蓝宝石的，220美元。两款都很受欢迎。",
            keyPhrases: [
              { en: "14-karat", zh: "14K（含金量58.5%）" },
              { en: "pendant", zh: "吊坠" },
              { en: "sterling silver", zh: "纯银/925银" },
              { en: "sapphire", zh: "蓝宝石" },
            ],
            vocabNotes: {
              "karat": { meaningInContext: "在这句话里表示：黄金纯度单位，24K是纯金，14K含金量58.5%", similarUsage: "类似用法：18-karat gold（18K金）" },
              "sterling silver": { meaningInContext: "在这句话里表示：含银量92.5%的标准纯银", similarUsage: "类似用法：925 silver（925银）" },
            },
            alternativeExpressions: [
              { textEn: "This white gold pendant with a diamond is $350, and this silver one with a sapphire is $220. Both are gorgeous.", textZh: "这条白金钻石吊坠350美元，这条银配蓝宝石的220美元。都很漂亮。", actionHint: "选择喜欢的款式", frequency: "common" },
              { textEn: "Here are two popular picks — a 14K white gold pendant at $350, or sterling silver with sapphire at $220.", textZh: "这里有两款热门的——14K白金吊坠350美元，纯银配蓝宝石220美元。", actionHint: "比较两款", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The white gold pendant is beautiful. Can I see it up close? And what's the chain length?",
            textZh: "白金吊坠很漂亮。可以近看一下吗？链子多长？",
          },
          {
            speaker: "them",
            role: "珠宝顾问",
            textEn: "Here you go. The chain is 18 inches, which is the most common length — it sits right at the collarbone. We can also adjust it to 16 or 20 inches if needed.",
            textZh: "给您。链子18英寸，是最常见的长度——刚好在锁骨位置。也可以调到16或20英寸。",
            keyPhrases: [
              { en: "chain length", zh: "链子长度" },
              { en: "collarbone", zh: "锁骨" },
              { en: "adjust", zh: "调整" },
            ],
            alternativeExpressions: [
              { textEn: "It's 18 inches — sits right at the collarbone. We can shorten or lengthen it if needed.", textZh: "18英寸——刚好在锁骨位置。需要的话可以改长改短。", actionHint: "确认长度是否合适", frequency: "common" },
              { textEn: "The standard length is 18 inches, which works for most people. We also do 16 or 20 if she prefers.", textZh: "标准长度18英寸，大多数人都合适。也可以改成16或20英寸。", actionHint: "选择合适的长度", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "18 inches should be perfect. I'll take it. Can you gift wrap it for me?",
            textZh: "18英寸应该刚好。我要了。可以帮我包装成礼物吗？",
          },
          {
            speaker: "them",
            role: "珠宝顾问",
            textEn: "Absolutely! We have complimentary gift wrapping. I'll put it in a beautiful gift box with a ribbon. Would you like to include a gift card with a message?",
            textZh: "当然！我们有免费的礼品包装。我会放在一个漂亮的礼盒里系上丝带。要附一张写有留言的贺卡吗？",
            keyPhrases: [
              { en: "gift wrapping", zh: "礼品包装" },
              { en: "gift box", zh: "礼盒" },
              { en: "ribbon", zh: "丝带" },
              { en: "gift card with a message", zh: "带留言的贺卡" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! I'll put it in a nice box with a ribbon. Want to add a little card with a message?", textZh: "当然！我放进漂亮礼盒配丝带。要加一张写留言的卡片吗？", actionHint: "决定是否要贺卡", frequency: "common" },
              { textEn: "We do free gift wrapping! I can box it up with a bow. Would you like a gift card inside?", textZh: "免费包装！我用礼盒配蝴蝶结。要在里面放张贺卡吗？", actionHint: "选择是否要贺卡", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. Can you write 'Happy Anniversary' on it? Thank you so much!",
            textZh: "好的。可以写上'Happy Anniversary'吗？太感谢了！",
          },
        ],
      },

      // --- Flow 2: 戒指尺寸与定制 ---
      {
        id: "jewelry-ring-sizing",
        titleZh: "戒指尺寸与定制",
        titleEn: "Ring Sizing & Custom Orders",
        description: "了解戒指尺寸、调整和定制服务",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to buy a ring, but I don't know my girlfriend's ring size. What should I do?",
            textZh: "你好，我想买个戒指，但不知道女朋友的戒指尺寸。怎么办？",
          },
          {
            speaker: "them",
            role: "珠宝顾问",
            textEn: "That's very common! There are a few ways. Does she have any rings she wears regularly? You could bring one in and we'll measure it. Or, if you know her general size, we can estimate.",
            textZh: "这很常见！有几个办法。她有经常戴的戒指吗？你可以带一个过来我们帮你量。或者如果你大概知道她的尺寸，我们可以估算。",
            keyPhrases: [
              { en: "ring size", zh: "戒指尺寸" },
              { en: "measure it", zh: "测量" },
              { en: "estimate", zh: "估算" },
            ],
            alternativeExpressions: [
              { textEn: "No worries! We can always resize it later if it doesn't fit.", textZh: "别担心！不合适的话之后可以改尺寸。", actionHint: "买了之后可以改大小", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I don't have one of her rings. Can I buy it and resize later if it doesn't fit?",
            textZh: "我没有她的戒指。可以先买然后不合适的话改尺寸吗？",
          },
          {
            speaker: "them",
            role: "珠宝顾问",
            textEn: "Absolutely! We offer one free resizing within 60 days of purchase. Most rings can be adjusted up or down by two sizes. I'd suggest starting with a size 6 or 7 — that's the most common for women.",
            textZh: "完全可以！购买后60天内提供一次免费改尺寸。大部分戒指可以上下调两个号。建议从6号或7号开始——这是女性最常见的尺寸。",
            keyPhrases: [
              { en: "resizing", zh: "改尺寸" },
              { en: "adjusted up or down", zh: "上下调" },
              { en: "most common", zh: "最常见的" },
            ],
            vocabNotes: {
              "resizing": { meaningInContext: "在这句话里表示：把戒指的圈径改大或改小以适合手指", similarUsage: "类似用法：How much does resizing cost?（改尺寸多少钱？）" },
            },
            alternativeExpressions: [
              { textEn: "We offer one free resize within 60 days. A size 6 or 7 is a safe bet for most women.", textZh: "60天内免费改一次尺寸。女性一般6号或7号比较保险。", actionHint: "选择一个常见尺寸", frequency: "common" },
              { textEn: "You can always bring her in later to get it sized. First resize is on us within 60 days.", textZh: "之后可以带她来改尺寸。60天内第一次免费改。", actionHint: "可以之后再调整", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good idea. I'll go with a size 6. Also, can I get something engraved on the inside of the band?",
            textZh: "好主意。那选6号。另外，可以在戒环内侧刻字吗？",
          },
          {
            speaker: "them",
            role: "珠宝顾问",
            textEn: "Yes, we do engraving! It's $25 for up to 15 characters. What would you like it to say?",
            textZh: "可以的，我们提供刻字服务！15个字符以内25美元。您想刻什么？",
            keyPhrases: [
              { en: "engraving", zh: "刻字" },
              { en: "characters", zh: "字符" },
              { en: "band", zh: "戒环" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely! Engraving is $25 for up to 15 characters. What would you like to say?", textZh: "完全可以！刻字15个字符以内25美元。你想刻什么？", actionHint: "告诉店员刻字内容", frequency: "common" },
              { textEn: "Sure, we do custom engraving. Up to 15 letters for $25. What message do you have in mind?", textZh: "可以，我们做定制刻字。15个字母以内25美元。你想刻什么内容？", actionHint: "想好刻字内容", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can you engrave 'Forever Yours' with the date '2026.03.12'?",
            textZh: "可以刻 'Forever Yours' 加上日期 '2026.03.12' 吗？",
          },
          {
            speaker: "them",
            role: "珠宝顾问",
            textEn: "That's 22 characters including the spaces and dots. It'll be $35 for the longer engraving. The ring with engraving will be ready in about 3 business days. We'll call you when it's done.",
            textZh: "加上空格和点号一共22个字符。长一点的刻字是35美元。带刻字的戒指大概3个工作日做好。做好了会给您打电话。",
            keyPhrases: [
              { en: "business days", zh: "工作日" },
            ],
            alternativeExpressions: [
              { textEn: "With spaces and dots it's 22 characters, so that's $35. It'll be ready in about 3 days — we'll call you.", textZh: "加空格和点号22个字符，35美元。大约3天做好——我们会打电话通知你。", actionHint: "确认费用和取货时间", frequency: "common" },
              { textEn: "Longer text is $35. The engraving takes about 3 business days. I'll give you a call when it's done.", textZh: "长一点的文字35美元。刻字大约要3个工作日。做好了打电话给你。", actionHint: "留下联系方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That works perfectly. Here's my card. Thank you for all your help — she's going to love it!",
            textZh: "正好赶得上。给您我的卡。谢谢你的帮助——她一定会喜欢的！",
          },
          {
            speaker: "them",
            role: "珠宝顾问",
            textEn: "I'm sure she will! Here's your receipt and the care instructions for the ring. Congratulations!",
            textZh: "她一定会的！这是您的收据和戒指保养说明。恭喜！",
            keyPhrases: [
              { en: "care instructions", zh: "保养说明" },
            ],
            alternativeExpressions: [
              { textEn: "Here's your receipt and the care guide. She's going to love it. Congratulations on your anniversary!", textZh: "给您收据和保养指南。她一定会喜欢的。恭喜你们的纪念日！", actionHint: "保管好收据和保养指南", frequency: "common" },
              { textEn: "All done! Receipt, care card, and the ring will be ready in 3 days. Congrats!", textZh: "搞定了！收据、保养卡都给你了，戒指3天后来取。恭喜！", actionHint: "记住取货时间", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 当地市集 ====================
  {
    id: "shopping-local-market",
    category: "shopping",
    titleZh: "当地市集",
    titleEn: "Local Market",
    description: "在农贸市集、跳蚤市场购物，了解当地特产、讨价还价",
    otherRole: "摊主",
    otherRoleIcon: "store",
    flows: [
      // --- Flow 1: 农贸市场购物 ---
      {
        id: "farmers-market",
        titleZh: "农贸市场",
        titleEn: "Farmer's Market",
        description: "在当地农贸市场买新鲜食材和特产",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "摊主",
            textEn: "Morning! Everything here is fresh from our farm. Take a look around!",
            textZh: "早上好！这里的东西都是我们农场直送的。随便看看！",
            alternativeExpressions: [
              { textEn: "Good morning! All organic, picked this morning!", textZh: "早上好！全是有机的，今早采的！", actionHint: "可以先看看再问", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good morning! Everything looks amazing. Are these strawberries local?",
            textZh: "早上好！看起来都好棒。这些草莓是本地的吗？",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "Yes, they are! Picked fresh this morning from our farm just 20 miles north. They're $6 a basket. Would you like to try one?",
            textZh: "是的！今早从我们北边20英里的农场现摘的。6美元一篮。要尝一个吗？",
            keyPhrases: [
              { en: "picked fresh", zh: "新鲜采摘的" },
              { en: "try one", zh: "尝一个" },
            ],
            culturalNote: "美国的农贸市场通常可以免费试吃，这是很正常的。",
            alternativeExpressions: [
              { textEn: "Yep, straight from our farm this morning! $6 a basket. Here, taste one!", textZh: "是的，今早我们农场直接拉来的！6美元一篮。来，尝一个！", actionHint: "可以先尝再决定", frequency: "common" },
              { textEn: "All local, picked today! Go ahead, try one — they're super sweet this season.", textZh: "全是本地的，今天摘的！尝一个吧——这季节特别甜。", actionHint: "尝尝看再决定", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure! Wow, these are really sweet. I'll take two baskets. Do you also have any local honey?",
            textZh: "好的！哇，好甜。我买两篮。你们还有本地蜂蜜吗？",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "We do! We have wildflower honey and lavender honey. The wildflower is $12 for a small jar and $20 for a large. The lavender is $15 for a small.",
            textZh: "有的！有野花蜜和薰衣草蜜。野花蜜小瓶12美元，大瓶20美元。薰衣草蜜小瓶15美元。",
            keyPhrases: [
              { en: "wildflower honey", zh: "野花蜜" },
              { en: "lavender honey", zh: "薰衣草蜜" },
              { en: "jar", zh: "罐/瓶" },
            ],
            alternativeExpressions: [
              { textEn: "We've got wildflower and lavender honey. Small jar is $12, large is $20. The lavender is $15 for a small.", textZh: "有野花蜜和薰衣草蜜。小瓶12美元，大瓶20美元。薰衣草蜜小瓶15美元。", actionHint: "选择蜂蜜种类和大小", frequency: "common" },
              { textEn: "Sure! Our wildflower honey is the most popular. Want to sample it? Big jar's $20, small's $12.", textZh: "有的！野花蜜最受欢迎。要尝尝吗？大瓶20美元，小瓶12美元。", actionHint: "可以先尝再买", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take a large wildflower honey. If I buy the two baskets of strawberries and the honey together, could you give me a small discount?",
            textZh: "我要一大瓶野花蜜。草莓两篮加蜂蜜一起买的话，能便宜一点吗？",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "Tell you what — I'll give you both baskets of strawberries and the honey for $30 even. That saves you two bucks. Sound fair?",
            textZh: "这样吧——两篮草莓加蜂蜜一共算30美元整。省2美元。怎么样？",
            keyPhrases: [
              { en: "tell you what", zh: "这样吧" },
              { en: "even", zh: "整数" },
              { en: "saves you two bucks", zh: "省2美元" },
              { en: "sound fair", zh: "合理吧/行不行" },
            ],
            vocabNotes: {
              "tell you what": { meaningInContext: "在这句话里表示：提出一个方案、让步", similarUsage: "类似用法：Tell you what, I'll throw in a free bag.（这样吧，我送你一个袋子）" },
              "bucks": { meaningInContext: "在这句话里表示：美元（口语说法）", similarUsage: "类似用法：That's 50 bucks.（那是50美元）" },
            },
            alternativeExpressions: [
              { textEn: "How about I do the whole lot for $30 flat? Saves you a couple bucks.", textZh: "全部30美元整怎么样？给你省两块。", actionHint: "决定是否接受", frequency: "common" },
              { textEn: "Since you're buying a few things, I'll knock a couple dollars off. $30 for everything.", textZh: "既然你买了好几样，给你便宜两块。全部30美元。", actionHint: "接受优惠", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Deal! Do you take credit cards, or is it cash only?",
            textZh: "成交！你们收信用卡吗，还是只收现金？",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "We take both! I've got a card reader on my phone. Or cash is fine too. We also accept Venmo if that's easier.",
            textZh: "都收！我手机上有刷卡器。现金也行。Venmo 也可以，看哪个方便。",
            keyPhrases: [
              { en: "card reader", zh: "刷卡器" },
            ],
            alternativeExpressions: [
              { textEn: "We take cards, cash, and Venmo. Whatever's easiest for you!", textZh: "信用卡、现金、Venmo都行。怎么方便怎么来！", actionHint: "选择付款方式", frequency: "common" },
              { textEn: "Cash or card works. I've got a Square reader on my phone.", textZh: "现金或刷卡都行。我手机上有Square读卡器。", actionHint: "用方便的方式付款", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll pay by card. Thank you! This honey will make a great souvenir.",
            textZh: "刷卡吧。谢谢！这个蜂蜜当伴手礼很好。",
          },
        ],
      },

      // --- Flow 2: 跳蚤市场淘宝 ---
      {
        id: "flea-market",
        titleZh: "跳蚤市场讨价还价",
        titleEn: "Flea Market Bargaining",
        description: "在跳蚤市场寻宝、询问来历、讨价还价",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, this vintage leather bag is really cool. How much are you asking for it?",
            textZh: "你好，这个复古皮包好酷。多少钱？",
            culturalNote: "在跳蚤市场，\"How much are you asking?\" 比 \"How much is it?\" 更常用，暗示价格可以商量。",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "That's a beautiful piece! It's genuine Italian leather, probably from the '70s. I'm asking $85 for it.",
            textZh: "这件很漂亮！是真正的意大利皮革，大概70年代的。我要85美元。",
            keyPhrases: [
              { en: "genuine", zh: "真正的/真皮" },
              { en: "I'm asking", zh: "我要（暗示可以商量）" },
            ],
            vocabNotes: {
              "genuine": { meaningInContext: "在这句话里表示：真正的、非仿造的", similarUsage: "类似用法：genuine leather（真皮）vs. faux leather（仿皮）" },
            },
            alternativeExpressions: [
              { textEn: "Great eye! That's real Italian leather, probably 1970s. I'm looking for $85.", textZh: "好眼光！这是正宗意大利皮的，大概70年代的。我要85美元。", actionHint: "可以试着还价", frequency: "common" },
              { textEn: "That one's a gem — genuine leather from the '70s. $85 is what I'm asking.", textZh: "那个是宝贝——70年代的真皮。我开价85美元。", actionHint: "可以商量价格", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's nice, but $85 is a bit much for me. Would you take $60?",
            textZh: "确实不错，但85美元对我来说有点贵。60美元行吗？",
            culturalNote: "在跳蚤市场讨价还价是正常的，通常从标价的60-70%开始还价。",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "I appreciate the offer, but $60 is too low for this quality. How about $75? I'll throw in a matching coin purse.",
            textZh: "谢谢你的出价，但这个品质60美元太低了。75美元怎么样？我再送一个配套的零钱包。",
            keyPhrases: [
              { en: "throw in", zh: "附赠/送" },
              { en: "matching", zh: "配套的" },
              { en: "coin purse", zh: "零钱包" },
            ],
            vocabNotes: {
              "throw in": { meaningInContext: "在这句话里表示：额外赠送、附送", similarUsage: "类似用法：I'll throw in free shipping.（我免费包邮）" },
            },
            alternativeExpressions: [
              { textEn: "I can come down a little. How about $75?", textZh: "我可以降一点。75美元怎么样？", actionHint: "可以接受或再还一次价", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "The coin purse is cute. How about $70 with the coin purse? That's my final offer.",
            textZh: "零钱包挺可爱的。70美元加零钱包怎么样？这是我的最终出价。",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "You drive a hard bargain! Alright, $70 it is. You got yourself a deal.",
            textZh: "你还价真厉害！好吧，70美元成交。你赚到了。",
            keyPhrases: [
              { en: "drive a hard bargain", zh: "很会砍价" },
              { en: "you got yourself a deal", zh: "成交了" },
            ],
            vocabNotes: {
              "drive a hard bargain": { meaningInContext: "在这句话里表示：还价很厉害、很会谈价", similarUsage: "类似用法：She drives a hard bargain in business.（她做生意很精明）" },
            },
            alternativeExpressions: [
              { textEn: "Ha, you're a tough negotiator! Fine, $70 with the coin purse. Deal.", textZh: "哈，你真会砍价！行，70美元加零钱包。成交。", actionHint: "砍价成功", frequency: "common" },
              { textEn: "Alright, alright — $70 it is. You win! Good deal for you.", textZh: "好吧好吧——70美元。你赢了！你赚到了。", actionHint: "交易达成", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Awesome! Can you tell me more about where this bag is from? Is there any history behind it?",
            textZh: "太好了！能告诉我更多这个包的来历吗？有什么故事吗？",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "I got it from an estate sale last month. The previous owner was a collector who traveled a lot in Europe. All the hardware is original brass. It's a real treasure.",
            textZh: "上个月从一场遗产拍卖会上淘到的。前主人是个收藏家，经常在欧洲旅行。五金件都是原装黄铜的。真的是个宝贝。",
            keyPhrases: [
              { en: "estate sale", zh: "遗产拍卖会" },
              { en: "hardware", zh: "五金件/金属配件" },
              { en: "original brass", zh: "原装黄铜" },
            ],
            vocabNotes: {
              "estate sale": { meaningInContext: "在这句话里表示：某人去世或搬家后出售其家中物品的销售活动", similarUsage: "类似用法：garage sale（车库甩卖）" },
            },
            alternativeExpressions: [
              { textEn: "Picked it up at an estate sale — the owner was a big traveler. Everything on it is original brass. It's a keeper.", textZh: "在遗产拍卖会上淘到的——原主人经常旅行。上面的五金件都是原装黄铜。值得收藏。", actionHint: "了解物品来历", frequency: "common" },
              { textEn: "Got this from a collector's estate last month. All the metal parts are original — you can tell by the patina. Real find.", textZh: "上个月从一个收藏家的遗物里收来的。金属件全是原装的——看包浆就知道了。真的是好东西。", actionHint: "欣赏做工细节", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a great story. I love it even more now. Thanks, and happy selling!",
            textZh: "故事真棒。我更喜欢这个包了。谢谢，祝生意兴隆！",
          },
        ],
      },
    ],
  },

  // ==================== 买鞋 ====================
  {
    id: "shopping-shoes",
    category: "shopping",
    titleZh: "买鞋",
    titleEn: "Shoe Shopping",
    description: "在鞋店购买鞋子，包括尺码、宽度、试穿等",
    otherRole: "鞋店店员",
    otherRoleIcon: "footprints",
    flows: [
      {
        id: "trying-shoes",
        titleZh: "试穿买鞋",
        titleEn: "Trying On Shoes",
        description: "询问尺码、试穿、比较不同款式",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "店员",
            textEn: "Hi! Welcome in. Can I help you find something today?",
            textZh: "你好！欢迎。今天需要帮您找什么吗？",
            alternativeExpressions: [
              { textEn: "Hey there! Looking for anything specific?", textZh: "嘿！在找什么特定的东西吗？", actionHint: "说出需求", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I'm looking for a pair of running shoes. Something comfortable for everyday use.",
            textZh: "是的，我想找一双跑步鞋。日常穿着舒服的。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Great! Do you know your size? American sizing is different from European and Asian sizing.",
            textZh: "好的！您知道您的尺码吗？美国尺码和欧洲、亚洲尺码不一样。",
            keyPhrases: [
              { en: "your size", zh: "您的尺码" },
              { en: "American sizing", zh: "美国尺码" },
            ],
            culturalNote: "美国鞋码换算：中国码 39 ≈ 美国男码 7 / 女码 8，中国码 42 ≈ 美国男码 9。建议量脚确认。",
            alternativeExpressions: [
              { textEn: "What size shoe do you normally wear? Keep in mind US sizes are different from Asian sizes.", textZh: "你平时穿多大号的鞋？注意美码和亚洲码不一样。", actionHint: "说出你的尺码", frequency: "common" },
              { textEn: "Do you know your US shoe size? If not, I can measure you.", textZh: "知道你的美国鞋码吗？不知道的话我帮你量。", actionHint: "让店员帮你量脚", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm not sure about the US size. In Chinese sizing, I'm a 42. Can you measure my feet?",
            textZh: "我不确定美国尺码。中国码我穿42。能帮我量一下脚吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Of course! Step on this measuring device... You're a US size 9, and it looks like you have a slightly wider foot. I'd recommend trying a wide width. Let me grab a few options for you.",
            textZh: "当然可以！踩到这个量脚器上……您是美国码9号，看起来您的脚稍微偏宽。建议试试宽版的。我去拿几双给您选。",
            keyPhrases: [
              { en: "measuring device", zh: "量脚器" },
              { en: "wide width", zh: "宽版" },
              { en: "US size", zh: "美国码" },
            ],
            vocabNotes: {
              "wide width": {
                meaningInContext: "在这句话里表示：鞋子的宽版（宽度比标准版更宽），标记为'W'或'Wide'",
                similarUsage: "类似用法：Do these come in wide?（这款有宽版吗？）",
              },
            },
            alternativeExpressions: [
              { textEn: "You're a 9, and your feet are a bit wide. I'd suggest trying the wide version. Let me pull some options.", textZh: "你是9号，脚稍微宽一些。建议试试宽版。我去拿几双。", actionHint: "等店员拿鞋", frequency: "common" },
              { textEn: "Looks like you're a 9 with a wider fit. I'll grab a few wide-width pairs for you to try.", textZh: "看起来你是9号，偏宽的脚型。我拿几双宽版给你试。", actionHint: "试穿宽版的", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "These feel good but a little tight in the toe area. Do you have a half size up?",
            textZh: "这双感觉不错但脚趾那里有点紧。有大半码的吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Let me check... Yes, I have a 9.5 in the same style. Keep in mind that running shoes should have about a thumb's width of space between your longest toe and the front of the shoe.",
            textZh: "让我看看……有，同款有9.5的。请记住跑步鞋应该在最长的脚趾和鞋尖之间留大约一个拇指宽的空间。",
            keyPhrases: [
              { en: "half size up", zh: "大半码" },
              { en: "thumb's width", zh: "一个拇指宽" },
              { en: "toe area", zh: "脚趾部位" },
            ],
            alternativeExpressions: [
              { textEn: "Let me check... Yep, got a 9.5 right here. For running shoes, make sure there's some space at the front for your toes.", textZh: "我看看……有，9.5号在这。跑步鞋的话，脚趾前面要留点空间。", actionHint: "注意脚趾空间", frequency: "common" },
              { textEn: "We have 9.5 in stock. Pro tip — your toes should have a thumb's width of room in running shoes.", textZh: "9.5有货。小建议——跑步鞋里脚趾要留一个拇指宽的空间。", actionHint: "试穿时检查空间", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Much better! These are really comfortable. How much are they?",
            textZh: "好多了！这双真的很舒服。多少钱？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "These are $129. We're actually running a promotion right now — buy one pair, get 30% off the second pair. Would you like to look at another pair?",
            textZh: "这双129美元。我们现在有促销活动——买一双第二双七折。要再看看另一双吗？",
            keyPhrases: [
              { en: "promotion", zh: "促销活动" },
              { en: "30% off", zh: "打七折" },
              { en: "buy one pair", zh: "买一双" },
            ],
            alternativeExpressions: [
              { textEn: "They're $129. We've got a deal this week — buy one, get 30% off your second pair. Interested?", textZh: "129美元。这周有优惠——买一双第二双打七折。感兴趣吗？", actionHint: "考虑是否再买一双", frequency: "common" },
              { textEn: "That pair is $129. And just so you know, we're doing BOGO 30% off right now.", textZh: "这双129美元。顺便说一下，我们现在买一送一七折。", actionHint: "看看有没有想要的第二双", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Tempting! I'll just take these for now. Can I also get some insoles for extra cushioning?",
            textZh: "很诱人！我先就买这双。能再拿双鞋垫增加缓震吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Sure! Our memory foam insoles are $15 and they make a big difference in comfort. I'll ring you up at the register. Would you like to keep the shoes on and have me bag your old ones?",
            textZh: "好的！记忆棉鞋垫15美元，对舒适度提升很大。我在收银台帮您结账。要穿着新鞋走，把旧鞋装起来吗？",
            keyPhrases: [
              { en: "insoles", zh: "鞋垫" },
              { en: "memory foam", zh: "记忆棉" },
              { en: "ring you up", zh: "帮您结账" },
              { en: "bag your old ones", zh: "把旧鞋装起来" },
            ],
            alternativeExpressions: [
              { textEn: "Memory foam insoles are $15 — they really help. Want to wear the new ones out? I'll bag your old pair.", textZh: "记忆棉鞋垫15美元——真的有用。要穿新鞋走吗？我把旧鞋装起来。", actionHint: "决定是否穿新鞋走", frequency: "common" },
              { textEn: "The insoles are $15 and totally worth it. I'll ring you up. Want to keep the new shoes on?", textZh: "鞋垫15美元，完全值。我帮你结账。新鞋要穿着走吗？", actionHint: "穿新鞋或装袋带走", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "shoe-issues",
        titleZh: "鞋子合适度问题",
        titleEn: "Fit Issues & Returns",
        description: "鞋子不合适时的退换和沟通",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I bought these shoes last week but they've been giving me blisters. Can I exchange them?",
            textZh: "我上周买的这双鞋，穿了起水泡。可以换吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "I'm sorry to hear that! Yes, we have a 30-day exchange policy. Do you have the receipt? Let me take a look at the shoes... They show minimal wear, so that's fine for an exchange.",
            textZh: "很抱歉听到这个！可以的，我们有30天换货政策。有收据吗？让我看看鞋子……磨损很少，可以换。",
            keyPhrases: [
              { en: "blisters", zh: "水泡" },
              { en: "exchange policy", zh: "换货政策" },
              { en: "minimal wear", zh: "很少磨损" },
            ],
            vocabNotes: {
              "blisters": {
                meaningInContext: "在这句话里表示：脚上因为鞋子摩擦而起的水泡",
                similarUsage: "类似用法：New shoes often cause blisters until they're broken in.（新鞋在穿合之前经常磨出水泡）",
              },
            },
            alternativeExpressions: [
              { textEn: "Sorry about that! Do you have the receipt? We can swap them out within 30 days.", textZh: "不好意思！有收据吗？30天内可以换。", actionHint: "出示收据", frequency: "common" },
              { textEn: "Oh no, that's not good. Let me take a look — do you have proof of purchase?", textZh: "哎呀，这不行。我看看——有购买凭证吗？", actionHint: "拿出收据或订单", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's the receipt. I think the problem is the width. They're too narrow for my feet.",
            textZh: "收据在这里。我觉得问题是宽度。对我的脚来说太窄了。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "That makes sense — blisters are usually a sign that the shoe is too tight somewhere. Let me find the same model in a wide width. Or we could try a different model with a roomier toe box.",
            textZh: "有道理——水泡通常说明鞋子某个地方太紧。我找找同款的宽版。或者我们可以试试鞋头更宽敞的其他款。",
            keyPhrases: [
              { en: "too narrow", zh: "太窄" },
              { en: "toe box", zh: "鞋头空间" },
              { en: "roomier", zh: "更宽敞的" },
            ],
            alternativeExpressions: [
              { textEn: "Blisters usually mean it's too tight. Let me find the wide version, or we can try a different shoe with more room.", textZh: "起水泡一般是太紧了。我找找宽版的，或者试试鞋头更宽的其他款。", actionHint: "选择换宽版或换款式", frequency: "common" },
              { textEn: "Sounds like a width issue. I'll check if we have this in wide. Otherwise, I have a roomier style to suggest.", textZh: "听起来是宽度问题。我看看有没有宽版。没有的话我推荐一款更宽松的。", actionHint: "等店员查找", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Let me try the wide width of the same model first.",
            textZh: "我先试试同款的宽版。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Here you go — same style, size 9 wide. Walk around the store for a bit and see how they feel. Pay attention to any pressure points, especially around the pinky toe and the heel.",
            textZh: "给您——同款，9号宽版。在店里走走感受一下。注意有没有压迫点，特别是小趾和脚后跟周围。",
            keyPhrases: [
              { en: "pressure points", zh: "压迫点" },
              { en: "pinky toe", zh: "小趾" },
              { en: "heel", zh: "脚后跟" },
            ],
            alternativeExpressions: [
              { textEn: "Here's the wide in size 9. Walk around and see how they feel — pay attention to any tight spots.", textZh: "这是9号宽版。走走看感觉怎么样——注意有没有紧的地方。", actionHint: "在店里多走几步", frequency: "common" },
              { textEn: "Try these on — same style, wide fit. Check the pinky toe area and the heel for comfort.", textZh: "试试这双——同款宽版。注意小趾和脚后跟舒不舒服。", actionHint: "重点检查小趾和脚跟", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "These feel much better! No pinching at all. I'll take these. Is there a price difference for the wide version?",
            textZh: "这双好多了！完全不夹脚。我要这双。宽版有价格差异吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "No, same price. I'll process the exchange right now. Since you're switching the same model, it's a straightforward swap. No additional paperwork needed.",
            textZh: "没有，一样的价格。我现在办理换货。因为是同款互换，直接换就行。不需要额外的手续。",
            keyPhrases: [
              { en: "straightforward swap", zh: "直接互换" },
              { en: "process the exchange", zh: "办理换货" },
              { en: "pinching", zh: "夹脚" },
            ],
            alternativeExpressions: [
              { textEn: "Same price for the wide. I'll do a quick swap — same model, just a wider fit. Easy.", textZh: "宽版一样的价。我直接换——同款，就是宽一点。很简单。", actionHint: "确认换货", frequency: "common" },
              { textEn: "No price difference. Since it's the same shoe, I'll just process a straight exchange right now.", textZh: "没有差价。同款的话直接换就行，我现在办。", actionHint: "等店员处理", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect, thank you. Any tips on breaking in new shoes?",
            textZh: "太好了，谢谢。有什么穿合新鞋的建议吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Wear them around the house for short periods first, maybe 30 minutes at a time, with thick socks. Gradually increase the time. If you still get blisters, a bit of moleskin on the hot spots can help. Enjoy your new shoes!",
            textZh: "先在家里穿短时间，每次大概30分钟，穿厚袜子。慢慢增加时间。如果还是磨出水泡，在摩擦点贴一点防磨贴会有帮助。享受你的新鞋！",
            keyPhrases: [
              { en: "breaking in", zh: "穿合/磨合" },
              { en: "moleskin", zh: "防磨贴" },
              { en: "hot spots", zh: "摩擦点/易磨点" },
            ],
            alternativeExpressions: [
              { textEn: "Wear them around the house first with thick socks. If you get hot spots, moleskin patches work great.", textZh: "先穿着在家走走，配厚袜子。如果有摩擦点，防磨贴很管用。", actionHint: "在家先穿合", frequency: "common" },
              { textEn: "Start with short walks and thick socks. Give them a few days to break in before going all out.", textZh: "先短距离走走配厚袜子。穿几天磨合好了再长时间穿。", actionHint: "慢慢增加穿着时间", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 化妆品 ====================
  {
    id: "shopping-cosmetics",
    category: "shopping",
    titleZh: "化妆品",
    titleEn: "Cosmetics & Skincare",
    description: "在化妆品柜台或店铺购买护肤品和化妆品",
    otherRole: "美容顾问/店员",
    otherRoleIcon: "sparkles",
    flows: [
      {
        id: "skincare-consultation",
        titleZh: "护肤咨询",
        titleEn: "Skincare Consultation",
        description: "咨询护肤品推荐、了解产品功效",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "美容顾问",
            textEn: "Welcome to Glow Beauty! Are you looking for skincare or makeup today?",
            textZh: "欢迎来到Glow Beauty！今天是找护肤品还是彩妆？",
            keyPhrases: [
              { en: "skincare", zh: "护肤品" },
              { en: "makeup", zh: "彩妆" },
            ],
            alternativeExpressions: [
              { textEn: "Hi! What brings you in today — skincare, makeup, or a bit of both?", textZh: "你好！今天来找什么——护肤品、彩妆，还是都看看？", actionHint: "说出你的需求", frequency: "common" },
              { textEn: "Welcome! Are you shopping for yourself or looking for a gift?", textZh: "欢迎！是给自己买还是选礼物？", actionHint: "说明购买目的", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Skincare, please. I have combination skin and I'm looking for a good moisturizer and sunscreen.",
            textZh: "护肤品。我是混合性皮肤，想找一款好的保湿霜和防晒霜。",
          },
          {
            speaker: "them",
            role: "美容顾问",
            textEn: "Combination skin — so oily in the T-zone and drier on the cheeks? I'd recommend a gel-cream moisturizer. It hydrates without feeling heavy. For sunscreen, our mineral SPF 50 is great for everyday use. Would you like to try some samples?",
            textZh: "混合性皮肤——T区偏油，面颊偏干？我推荐凝胶霜质地的保湿霜。保湿但不厚重。防晒的话，我们的物理防晒SPF50很适合日常使用。要试用一下吗？",
            keyPhrases: [
              { en: "combination skin", zh: "混合性皮肤" },
              { en: "T-zone", zh: "T区" },
              { en: "gel-cream", zh: "凝胶霜" },
              { en: "hydrates", zh: "保湿" },
              { en: "mineral SPF", zh: "物理防晒" },
              { en: "samples", zh: "试用装" },
            ],
            vocabNotes: {
              "mineral SPF": {
                meaningInContext: "在这句话里表示：物理防晒（用氧化锌等矿物质成分，在皮肤表面形成保护层反射紫外线）",
                similarUsage: "类似用法：Mineral sunscreen is better for sensitive skin.（物理防晒对敏感肌更好）",
              },
            },
            alternativeExpressions: [
              { textEn: "For combo skin, I'd go with a gel moisturizer — lightweight but hydrating. And our SPF 50 mineral sunscreen is perfect for daily use.", textZh: "混合性皮肤的话，建议用凝胶保湿——轻薄但保湿。SPF50物理防晒日常用正好。", actionHint: "可以试用一下", frequency: "common" },
              { textEn: "Oily T-zone and dry cheeks? A gel-cream is your best bet. For sunscreen, mineral formulas are gentler. Want to try some samples?", textZh: "T区油面颊干？凝胶霜最适合。防晒的话物理配方更温和。要试用吗？", actionHint: "试试推荐的产品", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I'd love to try them. Do you have anything for dark spots too?",
            textZh: "好的，我想试试。有去色斑的产品吗？",
          },
          {
            speaker: "them",
            role: "美容顾问",
            textEn: "For dark spots, I'd suggest a vitamin C serum — it's excellent for brightening and evening out skin tone. Apply it in the morning before your moisturizer and sunscreen. Here, let me put a little on the back of your hand.",
            textZh: "去色斑的话，我推荐维C精华——对提亮和均匀肤色非常好。早上在保湿霜和防晒前使用。来，我在您手背上涂一点。",
            keyPhrases: [
              { en: "vitamin C serum", zh: "维C精华" },
              { en: "brightening", zh: "提亮" },
              { en: "evening out skin tone", zh: "均匀肤色" },
              { en: "apply", zh: "涂抹/使用" },
            ],
            alternativeExpressions: [
              { textEn: "Vitamin C serum is amazing for dark spots. Use it every morning before moisturizer. Here, try a bit on your hand.", textZh: "维C精华对色斑特别好。每天早上保湿前用。来，手上试一点。", actionHint: "试用精华", frequency: "common" },
              { textEn: "For brightening, I always recommend a vitamin C serum. It fades dark spots over time. Want to see how it feels?", textZh: "提亮的话我总是推荐维C精华。能慢慢淡化色斑。要感受一下吗？", actionHint: "了解使用方法", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That feels really nice. How much is the set — the moisturizer, sunscreen, and serum?",
            textZh: "感觉真的很好。三件套——保湿霜、防晒和精华——一共多少钱？",
          },
          {
            speaker: "them",
            role: "美容顾问",
            textEn: "Individually, the moisturizer is $38, the sunscreen is $28, and the serum is $45 — so $111 total. But we have a skincare bundle for $89 that includes all three plus a cleanser. It's a much better deal.",
            textZh: "单买的话，保湿霜38美元，防晒28美元，精华45美元——总共111美元。但我们有一个护肤套装89美元，包含这三样加一瓶洁面乳。划算很多。",
            keyPhrases: [
              { en: "individually", zh: "单买" },
              { en: "bundle", zh: "套装/组合" },
              { en: "cleanser", zh: "洁面乳" },
              { en: "better deal", zh: "更划算" },
            ],
            alternativeExpressions: [
              { textEn: "Separately it's $111, but our skincare bundle is $89 and includes a free cleanser. Way better value.", textZh: "单买111美元，但我们的套装89美元还送洁面乳。划算多了。", actionHint: "考虑买套装", frequency: "common" },
              { textEn: "The three together would be $111. But we have a bundle deal for $89 that also throws in a cleanser.", textZh: "三样单买111美元。不过套装89美元还附送洁面乳。", actionHint: "对比单买和套装价格", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the bundle. Do you offer a loyalty program?",
            textZh: "我买套装。你们有会员计划吗？",
          },
          {
            speaker: "them",
            role: "美容顾问",
            textEn: "Yes! Sign up for free and you'll earn points on every purchase. Every 500 points gets you a $25 reward. You'll also get a birthday gift and early access to sales. Shall I sign you up?",
            textZh: "有！免费注册，每次消费都可以积分。每500积分可以兑换25美元奖励。还有生日礼物和优先参加促销活动。帮您注册吗？",
            keyPhrases: [
              { en: "loyalty program", zh: "会员计划" },
              { en: "earn points", zh: "积分" },
              { en: "birthday gift", zh: "生日礼物" },
              { en: "early access to sales", zh: "优先参加促销" },
            ],
            alternativeExpressions: [
              { textEn: "We have a free rewards program — earn points on every purchase. Plus you get a birthday gift. Want to sign up?", textZh: "我们有免费积分计划——每次消费都攒积分。还有生日礼物。要注册吗？", actionHint: "考虑注册会员", frequency: "common" },
              { textEn: "If you join our loyalty program, you'll earn points and get early access to sales. It's free to sign up.", textZh: "加入会员的话可以积分，还能优先参加促销。注册免费。", actionHint: "免费注册享优惠", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, sign me up. Thank you for all the great recommendations!",
            textZh: "好的，帮我注册吧。谢谢你这么多好推荐！",
          },
        ],
      },
      {
        id: "makeup-shopping",
        titleZh: "购买彩妆",
        titleEn: "Makeup Shopping",
        description: "挑选粉底、口红等彩妆产品",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I need a new foundation but I can never find the right shade. Can you help me match my skin tone?",
            textZh: "我需要一款新粉底，但总是找不到合适的色号。能帮我配色吗？",
          },
          {
            speaker: "them",
            role: "美容顾问",
            textEn: "Absolutely! Let me look at your skin in natural light... You have a warm undertone. I'd say you're somewhere between 'sand' and 'honey' in our range. Let me swatch a few shades on your jawline to find the perfect match.",
            textZh: "当然！让我在自然光下看看您的肤色……您是暖色调。在我们的系列里大概在'沙色'和'蜜糖色'之间。我在您下巴线上试几个色号找到最匹配的。",
            keyPhrases: [
              { en: "foundation", zh: "粉底" },
              { en: "shade", zh: "色号" },
              { en: "skin tone", zh: "肤色" },
              { en: "warm undertone", zh: "暖色调" },
              { en: "swatch", zh: "试色" },
              { en: "jawline", zh: "下巴线/颌线" },
            ],
            vocabNotes: {
              "undertone": {
                meaningInContext: "在这句话里表示：皮肤底层的色调（暖调偏黄、冷调偏粉、中性调介于之间），决定了什么色号的粉底最适合",
                similarUsage: "类似用法：Knowing your undertone helps you choose the right colors.（了解底色调帮你选对颜色）",
              },
            },
            alternativeExpressions: [
              { textEn: "Let me check your skin in the light... You have warm tones. I'll swatch a few shades on your jaw to find the match.", textZh: "我在光线下看看你的肤色……你是暖色调。我在下巴试几个色号找匹配的。", actionHint: "让顾问试色", frequency: "common" },
              { textEn: "You're a warm undertone, so we're looking at the 'sand' to 'honey' range. Let me try a couple on your jawline.", textZh: "你是暖色调，大概在沙色到蜜糖色之间。我在下巴线试几个。", actionHint: "配合顾问试色", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What about the coverage? I want something that covers blemishes but doesn't look cakey.",
            textZh: "遮瑕力呢？我想要能遮瑕但不显厚重的。",
          },
          {
            speaker: "them",
            role: "美容顾问",
            textEn: "I'd recommend our medium-coverage foundation. It's buildable — you can apply one layer for a natural look or build it up where you need more coverage. It has a satin finish, so it won't look flat or too dewy. And it's long-lasting — up to 12 hours.",
            textZh: "我推荐我们的中等遮瑕粉底。可以叠加——薄涂一层自然妆效，需要遮瑕的地方多涂几层。是缎面妆效，不会看起来死板或太水亮。而且持久——可以持续12小时。",
            keyPhrases: [
              { en: "coverage", zh: "遮瑕力" },
              { en: "buildable", zh: "可叠加的" },
              { en: "satin finish", zh: "缎面妆效" },
              { en: "dewy", zh: "水亮的/水光感" },
              { en: "long-lasting", zh: "持久的" },
              { en: "blemishes", zh: "瑕疵/痘印" },
              { en: "cakey", zh: "厚重的/浮粉的" },
            ],
            alternativeExpressions: [
              { textEn: "Our medium-coverage one is great — buildable, satin finish, and lasts up to 12 hours. Won't look cakey at all.", textZh: "我们的中等遮瑕款很好——可叠加、缎面妆效、持续12小时。完全不会浮粉。", actionHint: "试试这款粉底", frequency: "common" },
              { textEn: "I'd suggest this buildable formula. One layer for natural, more where you need coverage. It's long-wearing too.", textZh: "建议这款可叠加的。薄涂自然，需要遮瑕的地方多涂。还很持久。", actionHint: "了解使用技巧", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I try it on? Also, I'm looking for a lipstick — something for everyday wear.",
            textZh: "能试一下吗？另外我也想找一支口红——日常可以用的。",
          },
          {
            speaker: "them",
            role: "美容顾问",
            textEn: "Of course! I'll apply it for you with a clean sponge... There, that shade blends perfectly. For everyday lipstick, I'd suggest a nude pink or a 'my lips but better' shade. Here are our testers — try them on your hand first, and I'll sanitize a few for you to try on your lips.",
            textZh: "当然！我用干净的海绵帮您上妆……好了，这个色号完美融合。日常口红的话，推荐裸粉色或'像嘴唇但更好看'的色号。这些是试用品——先在手上试，我帮您消毒几支试唇色。",
            keyPhrases: [
              { en: "sponge", zh: "海绵" },
              { en: "blends", zh: "融合" },
              { en: "nude pink", zh: "裸粉色" },
              { en: "testers", zh: "试用品" },
              { en: "sanitize", zh: "消毒" },
            ],
            alternativeExpressions: [
              { textEn: "Let me do a quick application for you. We use disposable applicators for hygiene.", textZh: "我帮您快速上一下。出于卫生考虑我们用一次性涂抹器。", actionHint: "坐下来让顾问帮忙试妆", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I love this shade! Is it transfer-proof? I don't want it rubbing off on everything.",
            textZh: "我喜欢这个色号！不沾杯吗？我不想到处蹭。",
          },
          {
            speaker: "them",
            role: "美容顾问",
            textEn: "This formula is transfer-resistant — not completely transfer-proof, but it holds up really well. For a truly transfer-proof option, we have a liquid lip stain that lasts all day without budging. It's slightly more drying though.",
            textZh: "这款是抗沾染的——不是完全不沾杯，但表现很好。如果要完全不沾杯的，我们有一款持久唇釉，全天不掉色。不过会稍微偏干。",
            keyPhrases: [
              { en: "transfer-proof", zh: "不沾杯/不脱色" },
              { en: "transfer-resistant", zh: "抗沾染的" },
              { en: "lip stain", zh: "唇釉" },
              { en: "budging", zh: "移动/掉色" },
            ],
            alternativeExpressions: [
              { textEn: "This one's transfer-resistant — it holds up well. For totally smudge-proof, try our liquid lip stain. It won't budge all day.", textZh: "这支抗沾染——表现很好。想完全不沾杯的话，试试我们的唇釉。全天不掉色。", actionHint: "选择适合的口红类型", frequency: "common" },
              { textEn: "It won't transfer much, but if you need zero transfer, the lip stain is your best bet. Just a heads up — it's a bit drying.", textZh: "不太会沾。但如果要完全不沾杯，唇釉最好。不过提醒一下——会稍微干。", actionHint: "权衡持久度和保湿", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the foundation and this lipstick. Can I also get some free samples to try at home?",
            textZh: "我买粉底和这支口红。能拿一些免费试用装回家试吗？",
          },
          {
            speaker: "them",
            role: "美容顾问",
            textEn: "Of course! I'll give you samples of our best-selling eye cream and a new serum we just launched. With your purchase, you also qualify for our free gift set — it includes a travel-size mascara and a makeup bag.",
            textZh: "当然！我给您我们最畅销眼霜的试用装和一款新上市的精华。凭您这次消费，还有资格获得免费赠品套装——包含旅行装睫毛膏和一个化妆包。",
            keyPhrases: [
              { en: "free samples", zh: "免费试用装" },
              { en: "just launched", zh: "新上市的" },
              { en: "qualify for", zh: "有资格获得" },
              { en: "free gift set", zh: "免费赠品套装" },
              { en: "travel-size", zh: "旅行装" },
              { en: "mascara", zh: "睫毛膏" },
            ],
            alternativeExpressions: [
              { textEn: "I'll throw in samples of our eye cream and new serum. Plus, with this purchase you get a free gift set!", textZh: "我送你我们眼霜和新精华的试用装。这次消费还有免费赠品套装！", actionHint: "享受赠品", frequency: "common" },
              { textEn: "Here are some samples to try at home. And your purchase qualifies for a free mascara and makeup bag!", textZh: "这些试用装带回家试。你这次消费还能获得免费睫毛膏和化妆包！", actionHint: "领取赠品", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 书店 ====================
  {
    id: "shopping-bookstore",
    category: "shopping",
    titleZh: "书店",
    titleEn: "Bookstore",
    description: "在书店浏览、寻找特定书籍、获取推荐",
    otherRole: "书店店员",
    otherRoleIcon: "book",
    flows: [
      {
        id: "browsing-books",
        titleZh: "浏览和找书",
        titleEn: "Browsing & Finding Books",
        description: "在书店浏览、询问店员推荐",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm looking for a book but I can't remember the exact title. It's a recent bestseller about habits.",
            textZh: "你好，我在找一本书但记不清确切书名。是一本关于习惯的畅销新书。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "That sounds like it could be 'Atomic Habits' by James Clear. It's been on our bestseller list for months. It's in the self-help section — aisle 4, second shelf from the top.",
            textZh: "听起来可能是James Clear的《原子习惯》。已经在我们的畅销榜上好几个月了。在自我提升区——第4条过道，从上数第二层。",
            keyPhrases: [
              { en: "bestseller", zh: "畅销书" },
              { en: "self-help section", zh: "自我提升区" },
              { en: "aisle", zh: "过道" },
              { en: "shelf", zh: "书架层" },
            ],
            alternativeExpressions: [
              { textEn: "Are you thinking of 'Atomic Habits'? It's super popular right now. Let me show you where it is.", textZh: "你是想找《原子习惯》吗？现在非常火。我带你去看看。", actionHint: "跟着店员走", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, that's the one! Do you also have an audiobook version?",
            textZh: "对，就是这本！有有声书版本吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "We don't sell audiobooks in the store, but you can get it on Audible or through our store's app. If you prefer a physical copy, we have the hardcover for $27 and the paperback for $16.",
            textZh: "我们店里不卖有声书，但你可以在Audible或我们书店的App上买到。如果你喜欢纸质版，精装本27美元，平装本16美元。",
            keyPhrases: [
              { en: "audiobook", zh: "有声书" },
              { en: "hardcover", zh: "精装本" },
              { en: "paperback", zh: "平装本" },
            ],
            alternativeExpressions: [
              { textEn: "We don't carry audiobooks, but Audible has it. For physical copies, the hardcover is $27 and paperback is $16.", textZh: "我们不卖有声书，但Audible上有。纸质版的话精装27美元，平装16美元。", actionHint: "选择版本", frequency: "common" },
              { textEn: "No audiobooks in store, but you can grab it on our app. We have it in hardcover and paperback here.", textZh: "店里没有有声书，但可以在我们App上买。这里有精装和平装。", actionHint: "选纸质还是电子", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the paperback. Can you also recommend something similar? I want to keep reading about personal development.",
            textZh: "我要平装本。能推荐类似的书吗？我想继续读个人成长类的。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "If you liked 'Atomic Habits,' you'd probably enjoy 'The Power of Now' by Eckhart Tolle or 'Deep Work' by Cal Newport. We also have a 'Staff Picks' table near the entrance with our personal recommendations.",
            textZh: "如果你喜欢《原子习惯》，可能也会喜欢Eckhart Tolle的《当下的力量》或Cal Newport的《深度工作》。入口附近还有一个'店员推荐'桌，是我们的个人推荐。",
            keyPhrases: [
              { en: "recommend", zh: "推荐" },
              { en: "personal development", zh: "个人成长" },
              { en: "Staff Picks", zh: "店员推荐" },
            ],
            alternativeExpressions: [
              { textEn: "If you liked that, try 'Deep Work' or 'The Power of Now.' Also, check out our Staff Picks table by the door.", textZh: "喜欢那本的话，试试《深度工作》或《当下的力量》。也看看门口的店员推荐桌。", actionHint: "去看看推荐区", frequency: "common" },
              { textEn: "We have a personal development shelf with tons of similar titles. Our Staff Picks section might have something great too.", textZh: "个人成长书架上有很多类似的。店员推荐区也可能有好的。", actionHint: "去相关书架看看", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll check those out. Do you have a section for books in other languages? I'd love to find something in Chinese.",
            textZh: "我去看看。你们有外语书区吗？我想找中文书。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "We have a small foreign language section in the back corner, near the children's books. The Chinese selection isn't huge, but we have some popular translated novels and a few original Chinese titles. If you're looking for something specific, we can order it for you — usually takes about a week.",
            textZh: "后面角落有一个小的外语书区，在儿童书旁边。中文书不算多，但有一些热门翻译小说和几本中文原著。如果你要找特定的书，我们可以帮你订，通常一周左右到。",
            keyPhrases: [
              { en: "foreign language section", zh: "外语书区" },
              { en: "order it for you", zh: "帮你订" },
              { en: "translated novels", zh: "翻译小说" },
            ],
            alternativeExpressions: [
              { textEn: "We have a small foreign language area in the back. The Chinese selection is limited, but we can order anything you need.", textZh: "后面有一个小的外语区。中文书不多，但可以帮你订任何想要的书。", actionHint: "去后面看看或让店员帮忙订", frequency: "common" },
              { textEn: "Foreign books are near the children's section. If we don't have what you need in Chinese, I can order it — about a week.", textZh: "外语书在儿童区旁边。中文的如果没有，可以帮你订——大约一周到。", actionHint: "先去看看现有的", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's good to know. Is there a café in the bookstore? I'd love to sit and browse for a while.",
            textZh: "这个信息有用。书店里有咖啡馆吗？我想坐下来慢慢看。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes! Our café is on the second floor. You're welcome to take any books up there to browse while you have a coffee. Just bring them back downstairs if you decide not to purchase. We also have reading events and book clubs if you're interested!",
            textZh: "有！咖啡馆在二楼。欢迎带书上去边喝咖啡边看。如果决定不买，带回楼下就行。如果感兴趣的话，我们还有阅读活动和读书会！",
            keyPhrases: [
              { en: "browse", zh: "浏览/翻阅" },
              { en: "reading events", zh: "阅读活动" },
              { en: "book clubs", zh: "读书会" },
            ],
            alternativeExpressions: [
              { textEn: "The café is upstairs! Feel free to grab some books and read while you have a coffee. Just bring them back if you don't buy.", textZh: "咖啡馆在楼上！可以带书上去边喝咖啡边看。不买的话带回来就行。", actionHint: "带书去咖啡馆看", frequency: "common" },
              { textEn: "We have a café on the second floor. You're welcome to browse books there. We also do reading events if you're interested.", textZh: "二楼有咖啡馆。欢迎带书上去看。我们也有阅读活动，如果感兴趣的话。", actionHint: "上楼边喝咖啡边看书", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "gift-purchase",
        titleZh: "买书送人",
        titleEn: "Buying Books as Gifts",
        description: "为他人挑选书籍、礼品包装",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I need to buy a book as a birthday gift for a 10-year-old who loves science. Any suggestions?",
            textZh: "我想买一本书做生日礼物，送给一个10岁的、喜欢科学的孩子。有什么建议吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Oh, great choice for a gift! For a science-loving 10-year-old, I'd highly recommend 'The Way Things Work' — it explains machines and technology with amazing illustrations. Or 'Women in Science' is beautiful and inspiring. We also have science experiment kits that pair well with books.",
            textZh: "哦，书做礼物太好了！给一个热爱科学的10岁孩子，我强烈推荐《万物运转的秘密》——用精美插图解释机器和技术。《科学界的女性》也很美很励志。我们还有科学实验套装，可以和书搭配。",
            keyPhrases: [
              { en: "birthday gift", zh: "生日礼物" },
              { en: "illustrations", zh: "插图" },
              { en: "inspiring", zh: "励志的" },
              { en: "experiment kits", zh: "实验套装" },
              { en: "pair well with", zh: "很搭配" },
            ],
            alternativeExpressions: [
              { textEn: "For a 10-year-old science fan, 'The Way Things Work' is a hit. We also have science kits that go great with it.", textZh: "给10岁的科学迷，《万物运转的秘密》特别受欢迎。我们还有配套的科学实验套装。", actionHint: "看看实验套装", frequency: "common" },
              { textEn: "I'd suggest 'The Way Things Work' — kids love the illustrations. Or 'Women in Science' if you want something more inspiring.", textZh: "推荐《万物运转的秘密》——小朋友很喜欢里面的插图。想更励志的话有《科学界的女性》。", actionHint: "选择适合的书", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The Way Things Work sounds perfect! Can you gift-wrap it for me?",
            textZh: "《万物运转的秘密》听起来很好！能帮我礼品包装吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Absolutely! We offer free gift wrapping. Would you like a birthday-themed wrap or something more classic? We can also include a gift receipt so they can exchange it if they already have it.",
            textZh: "当然！我们提供免费礼品包装。要生日主题的还是经典款？我们还可以附一张礼品收据，这样如果他们已经有了可以换。",
            keyPhrases: [
              { en: "gift-wrap", zh: "礼品包装" },
              { en: "birthday-themed", zh: "生日主题的" },
              { en: "gift receipt", zh: "礼品收据" },
            ],
            alternativeExpressions: [
              { textEn: "Gift wrapping is free! Birthday or classic wrap? I can also add a gift receipt so they can exchange it.", textZh: "免费包装！要生日主题的还是经典的？还可以附礼品收据方便换。", actionHint: "选择包装风格", frequency: "common" },
              { textEn: "We wrap for free. Want birthday paper or something more simple? And a gift receipt just in case?", textZh: "我们免费包装。要生日的纸还是简洁的？要不要附礼品收据以防万一？", actionHint: "选包装和收据", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Birthday-themed, please! And yes, a gift receipt would be great. Can I also write something on a card?",
            textZh: "生日主题的！对，附礼品收据。能写个贺卡吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Of course! Here's a blank card. Take your time writing your message, and I'll attach it to the wrapped book. Is there anything else you'd like to add?",
            textZh: "当然！给您一张空白贺卡。慢慢写，我会把它附在包好的书上。还想加什么吗？",
            keyPhrases: [
              { en: "blank card", zh: "空白贺卡" },
              { en: "attach", zh: "附上" },
            ],
            alternativeExpressions: [
              { textEn: "Here's a card — write whatever you'd like, and I'll attach it to the book.", textZh: "给你一张贺卡——写什么都行，我帮你附在书上。", actionHint: "写贺卡留言", frequency: "common" },
              { textEn: "Take your time with the message! I'll wrap the book while you write.", textZh: "慢慢写！你写的时候我先把书包好。", actionHint: "写好后交给店员", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Actually, can I add a $20 gift card to the bookstore? That way they can pick their own book too.",
            textZh: "对了，能加一张20美元的书店礼品卡吗？这样他们也可以自己选一本。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Great idea! I'll add a $20 gift card. So that's the book at $18.99, gift card at $20, and gift wrapping is free. Your total is $38.99 plus tax. Would you like me to put everything in a gift bag?",
            textZh: "好主意！我加一张20美元礼品卡。书18.99美元，礼品卡20美元，包装免费。总计38.99美元加税。要放在礼品袋里吗？",
            keyPhrases: [
              { en: "gift card", zh: "礼品卡" },
              { en: "plus tax", zh: "加税" },
              { en: "gift bag", zh: "礼品袋" },
            ],
            alternativeExpressions: [
              { textEn: "Great idea! Book plus a $20 gift card — $38.99 plus tax. Want me to put it all in a gift bag?", textZh: "好主意！书加20美元礼品卡——38.99美元加税。要放进礼品袋吗？", actionHint: "选择是否要袋子", frequency: "common" },
              { textEn: "I'll add a $20 gift card. That's $38.99 total before tax. Shall I bag everything nicely?", textZh: "加一张20美元礼品卡。税前总共38.99美元。要帮你装好吗？", actionHint: "确认总价", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. A gift bag would be perfect. Thank you for all your help!",
            textZh: "好的，礼品袋就很好。谢谢你的帮助！",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "My pleasure! That's going to be a wonderful birthday gift. I'm sure they'll love it. Happy birthday to the little scientist!",
            textZh: "我的荣幸！这会是一份很棒的生日礼物。他们一定会喜欢的。祝小科学家生日快乐！",
            alternativeExpressions: [
              { textEn: "They're going to love it! Here's your receipt and the gift bag. Happy birthday to the little scientist!", textZh: "他们一定会喜欢的！这是收据和礼品袋。祝小科学家生日快乐！", actionHint: "拿好礼品袋", frequency: "common" },
              { textEn: "What a thoughtful gift! I'm sure they'll be thrilled. Enjoy the birthday celebration!", textZh: "多有心的礼物！他们肯定会很开心。祝生日派对顺利！", actionHint: "礼貌道别", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 纪念品 ====================
  {
    id: "shopping-souvenir",
    category: "shopping",
    titleZh: "纪念品",
    titleEn: "Souvenir Shopping",
    description: "在纪念品店挑选当地特产、手工艺品和邮寄回家",
    otherRole: "纪念品店店员",
    otherRoleIcon: "gift",
    flows: [
      {
        id: "browsing-souvenirs",
        titleZh: "挑选纪念品",
        titleEn: "Browsing Souvenirs",
        description: "浏览当地特色纪念品、了解手工艺品",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm looking for some souvenirs to bring back for my family. What are the most popular local gifts?",
            textZh: "你好，我想买一些纪念品带回去给家人。最受欢迎的当地礼物是什么？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Welcome! Our most popular souvenirs are the handmade pottery, local honey, and these beautiful woven scarves. The pottery is made by local artisans and each piece is unique. What kind of gifts are you looking for?",
            textZh: "欢迎！最受欢迎的纪念品是手工陶器、本地蜂蜜和这些漂亮的编织围巾。陶器是当地工匠做的，每件都是独一无二的。您想找什么类型的礼物？",
            keyPhrases: [
              { en: "souvenirs", zh: "纪念品" },
              { en: "handmade pottery", zh: "手工陶器" },
              { en: "local artisans", zh: "当地工匠" },
              { en: "unique", zh: "独一无二的" },
              { en: "woven scarves", zh: "编织围巾" },
            ],
            alternativeExpressions: [
              { textEn: "The best-sellers are our local jams and the handcrafted ornaments. Tourists love them!", textZh: "最畅销的是本地果酱和手工装饰品。游客们特别喜欢！", actionHint: "可以看看特色商品", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I need gifts for about five people — my parents, my sister, and two friends. Something small and easy to pack.",
            textZh: "我需要给大约五个人买礼物——我父母、姐姐和两个朋友。小巧的，方便装行李。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "For easy-to-pack gifts, I'd suggest our fridge magnets featuring local landmarks — they're $5 each. The mini bottles of local olive oil or hot sauce make great gifts too, at $8 each. And these hand-painted keychains are $6 — very popular with tourists.",
            textZh: "方便携带的礼物的话，我推荐我们的冰箱贴，上面有当地地标——每个5美元。本地橄榄油或辣酱小瓶也是很棒的礼物，每瓶8美元。这些手绘钥匙扣6美元——游客非常喜欢。",
            keyPhrases: [
              { en: "fridge magnets", zh: "冰箱贴" },
              { en: "landmarks", zh: "地标" },
              { en: "hand-painted", zh: "手绘的" },
              { en: "keychains", zh: "钥匙扣" },
            ],
            alternativeExpressions: [
              { textEn: "Magnets and keychains are the easiest to pack. We also have mini olive oil bottles for $8 — great gifts.", textZh: "冰箱贴和钥匙扣最好装。我们还有小瓶橄榄油8美元——很不错的礼物。", actionHint: "选择容易携带的礼物", frequency: "common" },
              { textEn: "For something compact, try the keychains or magnets. The olive oil and hot sauce are also crowd-pleasers.", textZh: "想要小巧的，钥匙扣或冰箱贴不错。橄榄油和辣酱也很受欢迎。", actionHint: "根据需求选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I love the keychains! I'll take five of those. And two bottles of the olive oil. Are these made locally?",
            textZh: "我喜欢钥匙扣！来五个。再加两瓶橄榄油。这些是本地产的吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes, everything in this section is locally made. The keychains are hand-painted by a local artist, and the olive oil comes from a family farm just outside the city. We have a certificate of authenticity for the pottery and crafts if you need one.",
            textZh: "是的，这个区域的所有东西都是本地生产的。钥匙扣是当地艺术家手绘的，橄榄油来自城外的一个家庭农场。如果您需要，陶器和工艺品有真品证书。",
            keyPhrases: [
              { en: "locally made", zh: "本地生产的" },
              { en: "family farm", zh: "家庭农场" },
              { en: "certificate of authenticity", zh: "真品证书" },
            ],
            alternativeExpressions: [
              { textEn: "Everything here is made locally. The keychains are hand-painted, and the olive oil comes from a nearby farm. We have certificates for the crafts too.", textZh: "这里的东西都是本地产的。钥匙扣是手绘的，橄榄油来自附近的农场。工艺品还有证书。", actionHint: "了解产品来源", frequency: "common" },
              { textEn: "All locally sourced! A local artist paints the keychains, and the olive oil is from a family farm just outside town.", textZh: "全是本地的！钥匙扣是当地艺术家画的，橄榄油来自城外一个家庭农场。", actionHint: "了解手工艺品背景", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can the olive oil go through airport security? I'm worried about liquids in carry-on.",
            textZh: "橄榄油能过机场安检吗？我担心随身行李的液体限制。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Good question! The bottles are 100ml each, so they should be fine for carry-on as long as they fit in your liquids bag. To be safe, I'd recommend packing them in your checked luggage. I can wrap them in bubble wrap to prevent breakage.",
            textZh: "好问题！瓶子每个100毫升，只要放在液体袋里随身携带应该没问题。保险起见，建议放在托运行李里。我可以用气泡膜包好防碎。",
            keyPhrases: [
              { en: "liquids bag", zh: "液体袋" },
              { en: "checked luggage", zh: "托运行李" },
              { en: "bubble wrap", zh: "气泡膜" },
              { en: "prevent breakage", zh: "防碎" },
            ],
            alternativeExpressions: [
              { textEn: "The bottles are 100ml, so carry-on should be fine. But to be safe, pack them in checked luggage. I'll bubble-wrap them.", textZh: "每瓶100毫升，随身带应该没问题。保险起见放托运行李。我帮你包气泡膜。", actionHint: "考虑放托运行李", frequency: "common" },
              { textEn: "They should pass security since they're small. I'll wrap them up tight so they won't break in your bag.", textZh: "体积小应该能过安检。我包紧一点，放包里不会碎。", actionHint: "让店员包好", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Bubble wrap would be great. How much is everything altogether?",
            textZh: "气泡膜包起来太好了。一共多少钱？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Five keychains at $6 each is $30, two olive oils at $8 each is $16 — so $46 total. If you spend over $50, you get 10% off. Would you like to add anything to reach the discount?",
            textZh: "五个钥匙扣每个6美元共30美元，两瓶橄榄油每瓶8美元共16美元——总计46美元。消费满50美元可以打九折。要再加点什么凑折扣吗？",
            keyPhrases: [
              { en: "altogether", zh: "一共" },
              { en: "10% off", zh: "打九折" },
              { en: "reach the discount", zh: "凑到折扣" },
            ],
            alternativeExpressions: [
              { textEn: "That's $46 total. Spend over $50 and you'll get 10% off everything. Want to add something small?", textZh: "一共46美元。满50打九折。要再加点什么吗？", actionHint: "加一件凑满减", frequency: "common" },
              { textEn: "You're $4 away from our 10% discount. A magnet or a postcard would put you over — and save you money.", textZh: "离九折折扣就差4美元。加个冰箱贴或明信片就够了——反而更省钱。", actionHint: "算算是否划算", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, I'll add one fridge magnet. That brings it to $51, right? With the 10% discount?",
            textZh: "好的，加一个冰箱贴。就是51美元对吧？打九折？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Exactly! $51 minus 10% comes to $45.90. Smart shopping! I'll wrap everything up nicely for you.",
            textZh: "没错！51美元减10%是45.90美元。会买！我帮您都包好。",
            alternativeExpressions: [
              { textEn: "That's $51, minus 10% brings it to $45.90. Nice move! I'll wrap everything up for you.", textZh: "51美元打九折是45.90。聪明！我帮你都包好。", actionHint: "等店员包装", frequency: "common" },
              { textEn: "With the magnet, you hit the discount — $45.90 total. Smart shopping! Let me bag that up.", textZh: "加了冰箱贴正好够折扣——总共45.90。会买！我装起来。", actionHint: "确认省了钱", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "shipping-home",
        titleZh: "邮寄回家",
        titleEn: "Shipping Home",
        description: "购买大件纪念品后安排国际邮寄",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I love this large ceramic vase, but there's no way it'll fit in my suitcase. Can you ship it to China?",
            textZh: "我很喜欢这个大陶瓷花瓶，但肯定放不进行李箱。能寄到中国吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes, we offer international shipping! For a piece this size to China, it would be about $45 to $60 depending on the carrier. We pack everything very carefully with foam and double-boxing. Standard shipping takes 2 to 3 weeks.",
            textZh: "可以的，我们提供国际邮寄！这个尺寸寄到中国大约45到60美元，取决于快递公司。我们会用泡沫和双层包装仔细打包。标准邮寄需要2到3周。",
            keyPhrases: [
              { en: "international shipping", zh: "国际邮寄" },
              { en: "carrier", zh: "快递公司" },
              { en: "foam", zh: "泡沫" },
              { en: "double-boxing", zh: "双层包装" },
              { en: "standard shipping", zh: "标准邮寄" },
            ],
            vocabNotes: {
              "double-boxing": {
                meaningInContext: "在这句话里表示：把物品装在一个箱子里，外面再套一个更大的箱子，两层箱子之间填充缓冲材料，确保安全",
                similarUsage: "类似用法：We double-box all fragile items.（所有易碎品我们都双层包装）",
              },
            },
            alternativeExpressions: [
              { textEn: "Shipping to China is about $45 to $60 depending on speed. Standard takes 2-3 weeks. We pack everything with foam and double-box it.", textZh: "寄到中国大约45到60美元，看快慢。标准2到3周。我们用泡沫和双层包装。", actionHint: "选择运输方式", frequency: "common" },
              { textEn: "We can ship it! Standard is $45, takes a few weeks. We use foam and double-boxing so it'll be safe.", textZh: "可以寄！标准45美元，要几周。我们用泡沫和双层箱，很安全。", actionHint: "了解运费和时间", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there insurance in case it breaks during shipping?",
            textZh: "有运输保险吗？万一运输途中碎了呢？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes, we include basic insurance that covers the value of the item up to $200. For the full declared value, the premium insurance is an additional $15. I'd definitely recommend it for ceramics. We've shipped hundreds of pieces and rarely have issues, but it's good peace of mind.",
            textZh: "有，我们包含基本保险，最高赔付200美元。如果要全额声明价值，高级保险额外15美元。陶瓷的话我绝对建议买。我们寄过几百件，很少出问题，但有保险更安心。",
            keyPhrases: [
              { en: "insurance", zh: "保险" },
              { en: "declared value", zh: "声明价值" },
              { en: "premium insurance", zh: "高级保险" },
              { en: "peace of mind", zh: "安心" },
            ],
            alternativeExpressions: [
              { textEn: "Basic insurance covers up to $200. For full value, premium insurance is an extra $15. I'd recommend it for ceramics.", textZh: "基本保险最高赔200美元。要全额保障的话加15美元。陶瓷的话推荐加上。", actionHint: "考虑加保险", frequency: "common" },
              { textEn: "We include $200 insurance. If you want full coverage, it's just $15 more. Totally worth it for something fragile.", textZh: "含200美元保险。全额保障只要加15美元。易碎品完全值得。", actionHint: "决定保险方案", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the premium insurance. Will there be any customs fees when it arrives in China?",
            textZh: "我买高级保险。到中国时会有关税吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "There might be import duties depending on the declared value and Chinese customs regulations. We'll fill out the customs form accurately for you. Items under a certain value are often exempt. I'd suggest declaring it as 'handmade decorative art' for the customs category.",
            textZh: "可能会有进口关税，取决于声明价值和中国海关规定。我们会为您如实填写报关单。低于一定价值的物品通常免税。建议在海关类别上申报为'手工装饰艺术品'。",
            keyPhrases: [
              { en: "import duties", zh: "进口关税" },
              { en: "customs form", zh: "报关单" },
              { en: "exempt", zh: "免税的" },
              { en: "declared value", zh: "声明价值" },
            ],
            alternativeExpressions: [
              { textEn: "Customs fees depend on the value. We'll mark it as a personal gift, which sometimes helps with duties.", textZh: "关税取决于价值。我们会标注为个人礼物，有时候有助于减免关税。", actionHint: "了解当地进口规定", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds good. Can I get a tracking number so I can follow the shipment?",
            textZh: "好的。能给我一个追踪号码跟踪包裹吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Absolutely! Once we ship it, usually within 2 business days, we'll email you the tracking number. You can track it online all the way to delivery. I'll also send you a photo of how we packed it. Here, let me get your email and shipping address.",
            textZh: "当然！我们寄出后（通常2个工作日内）会把追踪号码发到您邮箱。您可以在线追踪整个运输过程直到送达。我还会把打包好的照片发给您。给我您的邮箱和收货地址。",
            keyPhrases: [
              { en: "tracking number", zh: "追踪号码" },
              { en: "business days", zh: "工作日" },
              { en: "delivery", zh: "送达" },
            ],
            alternativeExpressions: [
              { textEn: "We'll email you the tracking number once it ships. You can follow it all the way to your door.", textZh: "寄出后会邮件发追踪号。可以一路跟踪到家。", actionHint: "提供邮箱地址", frequency: "common" },
              { textEn: "You'll get a tracking number by email within a couple days. I'll also send a photo of how we packed it.", textZh: "两天内会邮件发追踪号。我还会发打包好的照片给你。", actionHint: "留下联系方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's my address. The vase is $85, plus $55 shipping and $15 insurance — is that $155 total?",
            textZh: "地址在这里。花瓶85美元，加55美元运费和15美元保险——总共155美元？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "That's correct — $155 total. I'll email you a confirmation with all the details. If there are any issues with delivery, just contact us and we'll sort it out. Thank you for your purchase — this is a beautiful piece, and I'm sure it'll arrive safely!",
            textZh: "没错——总共155美元。我会发一封确认邮件，附上所有细节。如果收货有任何问题，联系我们，我们会处理好。感谢您的购买——这是一件很美的作品，一定会安全到达！",
            keyPhrases: [
              { en: "confirmation", zh: "确认邮件" },
              { en: "sort it out", zh: "处理好" },
            ],
            alternativeExpressions: [
              { textEn: "That's $155 total. I'll email you a confirmation. If anything goes wrong with delivery, just reach out and we'll handle it.", textZh: "总共155美元。我会发确认邮件。配送有任何问题联系我们就行。", actionHint: "保存确认邮件", frequency: "common" },
              { textEn: "All set — $155. You'll get a confirmation email with tracking info. It's a beautiful piece, it'll arrive safe!", textZh: "好了——155美元。会收到带追踪信息的确认邮件。这件很美，一定安全到达！", actionHint: "确认邮件地址正确", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 二手/古董店 ====================
  {
    id: "shopping-vintage",
    category: "shopping",
    titleZh: "二手/古董店",
    titleEn: "Vintage & Antique Shopping",
    description: "在二手服装店和古董店淘货、了解物品历史和状况",
    otherRole: "店主/店员",
    otherRoleIcon: "clock",
    flows: [
      {
        id: "vintage-clothing",
        titleZh: "二手服装",
        titleEn: "Vintage Clothing",
        description: "在二手店淘衣服、了解状况和价格",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi! I love the vibe of this shop. Do you specialize in any particular era?",
            textZh: "你好！我很喜欢这家店的氛围。你们专门做哪个年代的？",
          },
          {
            speaker: "them",
            role: "店主",
            textEn: "Thanks! We focus mainly on 70s, 80s, and 90s clothing. We get new inventory every week. The racks on the left are organized by decade, and on the right by clothing type. Feel free to dig around — the best finds are usually hidden!",
            textZh: "谢谢！我们主要做70、80和90年代的服装。每周有新货到。左边的衣架按年代分，右边按服装类型分。随便翻翻——最好的东西通常藏在里面！",
            keyPhrases: [
              { en: "era", zh: "年代" },
              { en: "inventory", zh: "库存/新货" },
              { en: "organized by decade", zh: "按年代分类" },
              { en: "dig around", zh: "翻找/淘" },
            ],
            alternativeExpressions: [
              { textEn: "Welcome! We've got a mix of everything from the 60s to the 2000s. New stuff comes in every Tuesday and Friday.", textZh: "欢迎！从60年代到2000年代什么都有。每周二和周五来新货。", actionHint: "留意到货日", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm looking for a vintage denim jacket. Something from the 90s maybe.",
            textZh: "我在找一件复古牛仔夹克。90年代的可能。",
          },
          {
            speaker: "them",
            role: "店主",
            textEn: "Great taste! We have several over here. This Levi's one is from '92 — it's in excellent condition. Original buttons, no tears, just some nice natural fading. This one's a medium.",
            textZh: "好眼光！这边有几件。这件Levi's是92年的——状态很好。原版纽扣，没有破损，只有自然的褪色。这件是中号。",
            keyPhrases: [
              { en: "vintage", zh: "复古的/二手的" },
              { en: "excellent condition", zh: "状态很好" },
              { en: "original buttons", zh: "原版纽扣" },
              { en: "tears", zh: "破损" },
              { en: "fading", zh: "褪色" },
            ],
            vocabNotes: {
              "fading": {
                meaningInContext: "在这句话里表示：牛仔布随时间自然褪色，在二手市场这反而是加分项，被视为'有味道'",
                similarUsage: "类似用法：The natural fading gives it character.（自然褪色让它更有韵味）",
              },
            },
            alternativeExpressions: [
              { textEn: "Check this out — a '92 Levi's in great shape. Original everything, just some nice natural wear. It's a medium.", textZh: "看看这件——92年的Levi's，状态很好。都是原装的，就有点自然磨损。中号。", actionHint: "看看是否喜欢", frequency: "common" },
              { textEn: "This one's from '92 — all original buttons, no rips, and the fading gives it real character.", textZh: "这件92年的——纽扣全是原装，没有破损，褪色让它特别有味道。", actionHint: "了解衣服状况", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It looks great! How much is it?",
            textZh: "看起来不错！多少钱？",
          },
          {
            speaker: "them",
            role: "店主",
            textEn: "This one is $65. For a genuine 90s Levi's in this condition, that's actually a really good deal. Similar ones go for over $100 online.",
            textZh: "这件65美元。对于这个状态的正品90年代Levi's来说，其实很划算。网上类似的卖100多美元。",
            keyPhrases: [
              { en: "genuine", zh: "正品的" },
              { en: "good deal", zh: "划算" },
              { en: "go for", zh: "卖到/售价" },
            ],
            alternativeExpressions: [
              { textEn: "It's $65. For a genuine 90s Levi's in this condition, that's a steal. They go for way more online.", textZh: "65美元。这个状态的正品90年代Levi's，真的很值。网上卖得贵多了。", actionHint: "考虑是否购买", frequency: "common" },
              { textEn: "$65 for this piece. It's real vintage — original buttons, great condition. Similar ones sell for over $100 online.", textZh: "这件65美元。真正的古着——原装扣子，状态很好。网上类似的卖100多。", actionHint: "了解市场价格", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I try it on? And is there any wiggle room on the price?",
            textZh: "能试穿吗？价格有商量的余地吗？",
          },
          {
            speaker: "them",
            role: "店主",
            textEn: "Fitting room is in the back. As for the price, I can do $55 if you're paying cash. We also have a 'buy 3, get the cheapest free' deal if you find other things you like.",
            textZh: "试衣间在后面。价格的话，如果付现金55美元可以。如果你还看中别的，我们有'买三件最便宜的免费'的活动。",
            keyPhrases: [
              { en: "wiggle room", zh: "商量余地" },
              { en: "paying cash", zh: "付现金" },
              { en: "buy 3, get the cheapest free", zh: "买三件最便宜的免费" },
            ],
            vocabNotes: {
              "wiggle room": {
                meaningInContext: "在这句话里表示：讨价还价的空间（口语化的表达）",
                similarUsage: "类似用法：Is there any wiggle room on the delivery date?（交货日期有没有回旋余地？）",
              },
            },
            alternativeExpressions: [
              { textEn: "Fitting room's in the back. For the price — I can do $55 cash. Or buy 3 and the cheapest one's free.", textZh: "试衣间在后面。价格的话——现金55可以。或者买三件最便宜的免单。", actionHint: "试穿后再决定", frequency: "common" },
              { textEn: "Go ahead and try it on. If you pay cash, I can knock it down to $55.", textZh: "去试穿吧。付现金的话我可以降到55美元。", actionHint: "先试穿看看", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It fits perfectly! I'll take it at $55. Do you also buy second-hand clothes? I want to clear out some things from my closet.",
            textZh: "穿着正好！55美元我要了。你们也收二手衣服吗？我想清理一下衣柜。",
          },
          {
            speaker: "them",
            role: "店主",
            textEn: "We do! We buy and also do consignment. For buying, I'll offer you a price on the spot. For consignment, we display it and split the sale price 60/40 — you get 60%. Just bring your items in and I'll take a look.",
            textZh: "收的！我们收购也做寄卖。收购的话，我当场给你报价。寄卖的话，我们展示出来，销售价格六四分——你拿60%。把东西带过来我看看。",
            keyPhrases: [
              { en: "consignment", zh: "寄卖" },
              { en: "on the spot", zh: "当场" },
              { en: "split the sale price", zh: "销售价格分成" },
            ],
            alternativeExpressions: [
              { textEn: "We buy and consign. For buying, I'll give you a price now. For consignment, we sell it and you get 60% of the sale.", textZh: "收购和寄卖都做。收购的话当场给你报价。寄卖的话卖掉了你拿60%。", actionHint: "带东西来看看", frequency: "common" },
              { textEn: "Bring your stuff in and I'll take a look. I can buy outright or do consignment — 60/40 split in your favor.", textZh: "把东西带来我看看。可以直接收购或者寄卖——六四分你拿大头。", actionHint: "了解两种方式的区别", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "antique-shopping",
        titleZh: "古董淘货",
        titleEn: "Antique Shopping",
        description: "在古董店了解物品历史、真伪和状况",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'm interested in this pocket watch in the display case. Can you tell me more about it?",
            textZh: "我对展柜里这个怀表很感兴趣。能介绍一下吗？",
          },
          {
            speaker: "them",
            role: "店主",
            textEn: "Ah, wonderful eye! That's a 1920s Elgin pocket watch. It's gold-filled — not solid gold, but gold layered over base metal, which was standard for that era. The movement still works beautifully. Would you like to hold it?",
            textZh: "哦，好眼力！那是一个1920年代的Elgin怀表。包金的——不是纯金，而是在基础金属上镀金层，那个年代的标准工艺。机芯运转得很好。要拿在手上看看吗？",
            keyPhrases: [
              { en: "pocket watch", zh: "怀表" },
              { en: "gold-filled", zh: "包金的" },
              { en: "solid gold", zh: "纯金" },
              { en: "base metal", zh: "基础金属" },
              { en: "movement", zh: "机芯" },
            ],
            vocabNotes: {
              "gold-filled": {
                meaningInContext: "在这句话里表示：在基础金属外包裹一层真金，比镀金（gold-plated）厚得多也更耐久，但不是纯金",
                similarUsage: "类似用法：Gold-filled jewelry lasts much longer than gold-plated.（包金首饰比镀金耐久得多）",
              },
            },
            alternativeExpressions: [
              { textEn: "That's a 1920s Elgin — gold-filled case, still ticking beautifully. Want to hold it?", textZh: "那是1920年代的Elgin——包金表壳，走时还很好。要拿在手上看看吗？", actionHint: "近距离观察", frequency: "common" },
              { textEn: "Great eye! It's an Elgin from the '20s. Gold-filled, not solid gold, but the movement is in perfect working order.", textZh: "好眼光！这是20年代的Elgin。包金的，不是纯金，但机芯运转完美。", actionHint: "了解材质", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's beautiful. What condition would you say it's in? I see some scratches on the case.",
            textZh: "很漂亮。你觉得状态怎么样？我看到表壳上有一些划痕。",
          },
          {
            speaker: "them",
            role: "店主",
            textEn: "I'd rate it as 'very good' condition — which in antique grading means it shows normal wear consistent with its age but has no major damage. The scratches are superficial and expected on a 100-year-old piece. The crystal is original and uncracked, which adds to the value.",
            textZh: "我给它评为'很好'的状态——在古董评级里意味着有与年代一致的正常磨损但没有重大损伤。划痕是表面的，对一件100年的物品来说很正常。表镜是原装的而且没有裂纹，这增加了它的价值。",
            keyPhrases: [
              { en: "condition", zh: "状态" },
              { en: "antique grading", zh: "古董评级" },
              { en: "normal wear", zh: "正常磨损" },
              { en: "superficial", zh: "表面的" },
              { en: "crystal", zh: "表镜" },
              { en: "uncracked", zh: "没有裂纹的" },
            ],
            alternativeExpressions: [
              { textEn: "I'd call it 'very good' condition. Normal wear for its age, but no major damage. The crystal is original and crack-free.", textZh: "我评为'很好'。年代相当的正常磨损，没有大损伤。表镜是原装的没裂。", actionHint: "了解古董评级标准", frequency: "common" },
              { textEn: "It's in excellent shape for a 100-year-old piece. The scratches are superficial, and the original crystal is intact.", textZh: "对于一件100年的东西来说状态非常好。划痕是表面的，原装表镜完好。", actionHint: "确认无重大损伤", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How do I know it's genuine and not a reproduction?",
            textZh: "我怎么知道它是真品不是复制品？",
          },
          {
            speaker: "them",
            role: "店主",
            textEn: "Great question. I can show you the serial number inside the case back — it matches Elgin's production records for 1923. The movement has the correct jewel count and markings for that model. We also provide a certificate of authenticity with every antique purchase over $100. I stand behind everything I sell.",
            textZh: "好问题。我可以给你看表壳背面的序列号——和Elgin 1923年的生产记录一致。机芯的宝石数量和标记都符合那个型号。我们还为每件超过100美元的古董提供真品证书。我对我卖的每件东西负责。",
            keyPhrases: [
              { en: "genuine", zh: "真品" },
              { en: "reproduction", zh: "复制品" },
              { en: "serial number", zh: "序列号" },
              { en: "certificate of authenticity", zh: "真品证书" },
              { en: "stand behind", zh: "负责/担保" },
            ],
            alternativeExpressions: [
              { textEn: "All our pieces are authenticated. I can show you the provenance documentation.", textZh: "我们所有的东西都经过鉴定。我可以给你看来源文件。", actionHint: "要求看鉴定文件", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's reassuring. How much are you asking for it?",
            textZh: "这让我很放心。你要价多少？",
          },
          {
            speaker: "them",
            role: "店主",
            textEn: "It's priced at $350. For a working 1920s Elgin in this condition with the original crystal, that's very fair. I've seen comparable pieces sell for $400 to $500 at auction. I can also offer a 10% discount if you pay cash.",
            textZh: "标价350美元。对于一个这种状态的、能运转的1920年代Elgin，原装表镜，这个价格很公道。我见过类似的在拍卖会上卖400到500美元。如果付现金我可以再打九折。",
            keyPhrases: [
              { en: "priced at", zh: "标价" },
              { en: "fair", zh: "公道的" },
              { en: "comparable pieces", zh: "类似的物品" },
              { en: "at auction", zh: "在拍卖会上" },
            ],
            alternativeExpressions: [
              { textEn: "It's marked at $350. For a working Elgin from the '20s with the original crystal, that's quite fair. Cash gets you 10% off.", textZh: "标价350美元。一个能运转的20年代Elgin带原装表镜，这价格很公道。付现打九折。", actionHint: "考虑付现金", frequency: "common" },
              { textEn: "$350 — and comparable pieces go for $400 to $500 at auction. If you pay cash, I'll take 10% off.", textZh: "350美元——类似的在拍卖会上卖400到500。付现金的话打九折。", actionHint: "了解市场行情", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Would you take $280 cash?",
            textZh: "280美元现金行吗？",
          },
          {
            speaker: "them",
            role: "店主",
            textEn: "I appreciate the offer, but $280 is a bit low for this piece. I could do $300 cash — that's my best price. I'll also include a nice presentation box and the authentication certificate. Deal?",
            textZh: "感谢您的出价，但280美元对这件东西来说有点低。300美元现金可以——这是我的最低价了。我还会附赠一个精美展示盒和鉴定证书。成交？",
            keyPhrases: [
              { en: "best price", zh: "最低价" },
              { en: "presentation box", zh: "展示盒" },
              { en: "deal", zh: "成交" },
            ],
            alternativeExpressions: [
              { textEn: "$280 is too low for this one. How about $300 cash? I'll include the display box and certificate.", textZh: "280美元太低了。300现金怎么样？我送展示盒和证书。", actionHint: "决定是否接受", frequency: "common" },
              { textEn: "I can't go as low as $280. My best is $300, and I'll throw in a nice box and the authentication papers.", textZh: "280做不了。最低300，送展示盒和鉴定文件。", actionHint: "接受或继续商量", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "$300 with the box and certificate — you've got a deal!",
            textZh: "300美元带展示盒和证书——成交！",
          },
          {
            speaker: "them",
            role: "店主",
            textEn: "Wonderful! You're getting a real treasure. Let me wrap it up carefully for you. If you ever want to get it serviced, I can recommend a good watchmaker. Enjoy your new piece of history!",
            textZh: "太好了！您得到了一件真正的珍品。我仔细给您包好。如果以后需要保养，我可以推荐一位好的钟表师。享受您的这件历史珍品吧！",
            keyPhrases: [
              { en: "treasure", zh: "珍品" },
              { en: "serviced", zh: "保养/维修" },
              { en: "watchmaker", zh: "钟表师" },
            ],
            alternativeExpressions: [
              { textEn: "You got a real gem! I'll pack it carefully. If it ever needs servicing, I know a great watchmaker.", textZh: "你得到了一件真宝贝！我仔细包好。以后需要保养的话我认识好的钟表师。", actionHint: "妥善保管", frequency: "common" },
              { textEn: "Great purchase! Let me wrap it up safely. I can also recommend a watchmaker if you ever need maintenance.", textZh: "买得好！我安全包好。需要维护的话我可以推荐钟表师。", actionHint: "了解后续保养", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 药店购物 ====================
  {
    id: "shopping-16",
    category: "shopping",
    titleZh: "药店购物",
    titleEn: "Pharmacy Shopping",
    description: "在国外药店购买非处方药品、了解药品用法和注意事项",
    otherRole: "药剂师",
    otherRoleIcon: "pill",
    flows: [
      // --- Flow 1: 买常见药品 ---
      {
        id: "otc-medicine",
        titleZh: "买非处方药",
        titleEn: "Buying OTC Medicine",
        description: "在药店购买感冒药、止痛药等常见非处方药",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have a bad cold. Can you recommend something for a sore throat and runny nose?",
            textZh: "你好，我感冒了比较严重。能推荐治喉咙痛和流鼻涕的药吗？",
            casualVersion: "Hey, I've got a nasty cold — sore throat, runny nose. What do you have?",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Sure. Are you taking any other medications right now? And do you have any allergies?",
            textZh: "好的。您现在在吃其他药吗？有药物过敏吗？",
            keyPhrases: [
              { en: "medications", zh: "药物" },
              { en: "allergies", zh: "过敏" },
            ],
            alternativeExpressions: [
              { textEn: "Before I recommend anything — any current meds or allergies I should know about?", textZh: "在推荐之前——有什么正在服用的药或过敏需要告诉我的吗？", actionHint: "如实告知过敏史和用药情况", frequency: "common" },
            ],
            vocabNotes: {
              "medications": { meaningInContext: "在这句话里表示：正在服用的所有药物，包括维生素和保健品", similarUsage: "类似用法：Are you on any medications for blood pressure?（你在吃血压药吗？）" },
            },
          },
          {
            speaker: "you",
            textEn: "No allergies, and I'm not taking anything else. I just need something that works fast.",
            textZh: "没有过敏，也没在吃其他药。我就想要见效快的。",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "I'd recommend DayQuil for daytime — it won't make you drowsy. For nighttime, NyQuil will help you sleep. This combo pack has both. Take two capsules every four to six hours.",
            textZh: "我推荐白天吃 DayQuil——不会犯困。晚上吃 NyQuil，帮助睡眠。这个组合装两个都有。每四到六小时吃两粒。",
            keyPhrases: [
              { en: "drowsy", zh: "犯困的" },
              { en: "combo pack", zh: "组合装" },
              { en: "capsules", zh: "胶囊" },
              { en: "every four to six hours", zh: "每四到六小时" },
            ],
            vocabNotes: {
              "drowsy": { meaningInContext: "在这句话里表示：吃了药之后感到昏昏欲睡", similarUsage: "类似用法：This antihistamine may make you drowsy.（这种抗过敏药可能让你犯困）" },
            },
            localVariants: { "en-US": "DayQuil", "en-GB": "Lemsip", "en-AU": "Codral" },
            alternativeExpressions: [
              { textEn: "Try DayQuil during the day — it won't knock you out. NyQuil at night to help you sleep. This pack has both.", textZh: "白天吃DayQuil——不会犯困。晚上吃NyQuil帮助睡眠。这个组合装两个都有。", actionHint: "了解白天和晚上用哪个", frequency: "common" },
              { textEn: "I'd suggest the DayQuil/NyQuil combo — one for daytime, one for night. Take two capsules every 4-6 hours.", textZh: "建议DayQuil/NyQuil组合——一个白天用一个晚上用。每4到6小时吃两粒。", actionHint: "按说明服用", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. Do you also have throat lozenges? My throat is really scratchy.",
            textZh: "好的。有润喉糖吗？我喉咙特别痒。",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Yes, these Ricola lozenges are very popular. They're herbal and sugar-free. Or if you want something stronger, these Cepacol ones have a numbing agent that really helps with the pain.",
            textZh: "有的，这款 Ricola 润喉糖很受欢迎，草本配方无糖。如果想要效果更强的，这款 Cepacol 含麻醉成分，能有效缓解疼痛。",
            keyPhrases: [
              { en: "lozenges", zh: "润喉糖" },
              { en: "herbal", zh: "草本的" },
              { en: "sugar-free", zh: "无糖的" },
              { en: "numbing agent", zh: "麻醉成分" },
            ],
            alternativeExpressions: [
              { textEn: "Ricola is herbal and gentle. Cepacol has a numbing effect if you want stronger relief. Both are sugar-free.", textZh: "Ricola是草本的比较温和。Cepacol有麻醉效果，缓解更强。两个都无糖。", actionHint: "根据症状选择", frequency: "common" },
              { textEn: "For mild sore throat, these herbal ones are nice. For real pain, these Cepacol ones numb the area and really help.", textZh: "嗓子轻微不适的话草本的不错。真的疼的话Cepacol能麻醉缓解。", actionHint: "选择适合的强度", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the Cepacol ones. How much is everything together?",
            textZh: "我要 Cepacol 的。一共多少钱？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "The DayQuil/NyQuil combo is $15.99 and the lozenges are $6.49. Your total is $22.48 plus tax. Do you need a bag?",
            textZh: "DayQuil/NyQuil 组合装15.99美元，润喉糖6.49美元。一共22.48美元加税。需要袋子吗？",
            keyPhrases: [
              { en: "plus tax", zh: "加税" },
            ],
            culturalNote: "美国药店标价不含税，结账时会加上消费税，各州税率不同。",
            alternativeExpressions: [
              { textEn: "The combo pack is $15.99, lozenges are $6.49. That's $22.48 plus tax. Need a bag?", textZh: "组合装15.99，润喉糖6.49。一共22.48加税。要袋子吗？", actionHint: "选择付款", frequency: "common" },
              { textEn: "Your total is $22.48 before tax. Anything else, or are you ready to check out?", textZh: "税前总共22.48美元。还需要别的吗，还是可以结账了？", actionHint: "确认是否还需要其他", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. Can I pay with Apple Pay?",
            textZh: "要的。可以用 Apple Pay 吗？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Absolutely. Just tap your phone here. And remember — drink plenty of fluids and get some rest. If your symptoms don't improve in a few days, you should see a doctor.",
            textZh: "可以的，手机靠一下这里就行。记得多喝水多休息。如果几天后症状没有好转，建议去看医生。",
            keyPhrases: [
              { en: "tap your phone", zh: "手机靠一下" },
              { en: "plenty of fluids", zh: "多喝水" },
              { en: "symptoms", zh: "症状" },
            ],
            literalMeaning: "\"plenty of fluids\" 字面意思是 \"大量的液体\"，实际就是多喝水、喝汤等，不限于白水",
            alternativeExpressions: [
              { textEn: "Just tap here. And make sure to rest up and drink lots of water. See a doctor if it doesn't get better in a few days.", textZh: "在这里感应一下。记得多休息多喝水。几天不好的话去看医生。", actionHint: "注意恢复建议", frequency: "common" },
              { textEn: "Apple Pay works — tap right here. Get some rest tonight, okay? If symptoms persist, see a doctor.", textZh: "Apple Pay可以——在这感应。今晚好好休息。症状持续的话去看医生。", actionHint: "听从健康建议", frequency: "occasional" },
            ],
          },
        ],
      },
      // --- Flow 2: 买防晒和旅行急救用品 ---
      {
        id: "travel-health",
        titleZh: "旅行健康用品",
        titleEn: "Travel Health Essentials",
        description: "购买防晒霜、晕车药、创可贴等旅行必备健康用品",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I'm looking for sunscreen. We're going to the beach tomorrow and I forgot to pack mine.",
            textZh: "不好意思，我想买防晒霜。我们明天去海边，我忘带了。",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "No problem. What SPF are you looking for? We have SPF 30, 50, and 70. For the beach, I'd recommend at least SPF 50, and make sure it's water-resistant.",
            textZh: "没问题。您要多少倍防晒的？我们有 SPF 30、50 和 70 的。去海边的话我建议至少 SPF 50，而且要防水的。",
            keyPhrases: [
              { en: "SPF", zh: "防晒系数" },
              { en: "water-resistant", zh: "防水的" },
            ],
            vocabNotes: {
              "SPF": { meaningInContext: "在这句话里表示：Sun Protection Factor，防晒系数，数字越高防晒能力越强", similarUsage: "类似用法：This moisturizer has SPF 15 built in.（这款面霜自带SPF 15防晒）" },
            },
            alternativeExpressions: [
              { textEn: "We have SPF 30, 50, and 70. For the beach, I'd go with at least 50. And make sure it's water-resistant.", textZh: "有SPF 30、50和70的。去海边的话至少选50。还要确保是防水的。", actionHint: "选择合适的防晒系数", frequency: "common" },
              { textEn: "For a beach day, SPF 50 minimum, and get the water-resistant kind. You'll need to reapply every two hours.", textZh: "去海边至少SPF 50，要防水的。每两小时要补涂。", actionHint: "了解使用方法", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "SPF 50 sounds good. Do you have anything for sensitive skin? My wife breaks out easily.",
            textZh: "SPF 50 的就行。有敏感肌用的吗？我太太皮肤容易过敏。",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "This Neutrogena one is fragrance-free and hypoallergenic — great for sensitive skin. It's a mineral sunscreen, so it sits on top of the skin instead of being absorbed.",
            textZh: "这款露得清的无香精、低敏——很适合敏感肌。它是物理防晒，涂在皮肤表面而不是被吸收。",
            keyPhrases: [
              { en: "fragrance-free", zh: "无香精的" },
              { en: "hypoallergenic", zh: "低敏的" },
              { en: "mineral sunscreen", zh: "物理防晒" },
            ],
            vocabNotes: {
              "hypoallergenic": { meaningInContext: "在这句话里表示：不太容易引起过敏反应的产品配方", similarUsage: "类似用法：This pillow is hypoallergenic.（这个枕头是防过敏的）" },
            },
            alternativeExpressions: [
              { textEn: "This Neutrogena one is perfect for sensitive skin — no fragrance, mineral formula. It sits on top of the skin, not absorbed.", textZh: "这款露得清的特别适合敏感肌——无香精，物理配方。涂在皮肤表面不吸收。", actionHint: "选择适合的产品", frequency: "common" },
              { textEn: "For your wife's sensitive skin, go with this mineral SPF 50. It's fragrance-free and hypoallergenic.", textZh: "给你太太敏感肌用的话，选这个物理防晒SPF50。无香精低敏。", actionHint: "了解产品成分", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. I also need motion sickness pills — we're taking a boat tour. And some Band-Aids.",
            textZh: "好的。我还需要晕车药——我们要坐船游览。还要一些创可贴。",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "For motion sickness, Dramamine works well. Take it 30 minutes before you get on the boat. It might make you a little drowsy though. Band-Aids are in aisle 3 — we have regular and waterproof ones.",
            textZh: "晕船的话，Dramamine 效果不错。上船前30分钟吃。不过可能会有点犯困。创可贴在3号过道——有普通的和防水的。",
            keyPhrases: [
              { en: "motion sickness", zh: "晕车/晕船" },
              { en: "Dramamine", zh: "茶苯海明（晕车药品牌）" },
              { en: "waterproof", zh: "防水的" },
            ],
            localVariants: { "en-US": "Band-Aids", "en-GB": "plasters", "en-AU": "Band-Aids" },
            alternativeExpressions: [
              { textEn: "Dramamine is great for motion sickness — take it 30 minutes before the boat. Band-Aids are in aisle 3, regular and waterproof.", textZh: "Dramamine治晕船很好——上船前30分钟吃。创可贴在3号过道，有普通的和防水的。", actionHint: "提前服药", frequency: "common" },
              { textEn: "For the boat tour, Dramamine works well. Just heads up — it may make you sleepy. Band-Aids are right over there.", textZh: "坐船的话Dramamine效果好。不过提醒一下——可能犯困。创可贴就在那边。", actionHint: "注意嗜睡副作用", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the waterproof Band-Aids. Is there a non-drowsy option for the motion sickness?",
            textZh: "我要防水创可贴。晕船药有不犯困的吗？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Yes, Bonine is the non-drowsy formula. Same active ingredient but it's less likely to make you sleepy. It's a couple dollars more though.",
            textZh: "有的，Bonine 是不犯困配方。同样的有效成分，但不太容易让人瞌睡。不过贵几美元。",
            keyPhrases: [
              { en: "non-drowsy", zh: "不犯困的" },
              { en: "active ingredient", zh: "有效成分" },
            ],
            alternativeExpressions: [
              { textEn: "Bonine is the non-drowsy option. Same ingredient, just less likely to make you sleepy. A few bucks more though.", textZh: "Bonine是不犯困的。同样的成分，只是不太容易瞌睡。不过贵几块。", actionHint: "选择不犯困的", frequency: "common" },
              { textEn: "If you don't want to feel sleepy, go with Bonine. Works the same way, just won't knock you out.", textZh: "不想犯困的话选Bonine。效果一样，只是不会让你昏昏欲睡。", actionHint: "适合需要保持清醒时", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with Bonine. That's everything — sunscreen, motion sickness pills, and Band-Aids.",
            textZh: "我要 Bonine。就这些——防晒霜、晕船药和创可贴。",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Got it. Your total is $38.75. The sunscreen is buy one get one 50% off this week, so I'll add a second one for you at half price if you'd like. That way you and your wife each have one.",
            textZh: "好的。一共38.75美元。防晒霜这周买一送一半价，需要的话我帮你加一瓶半价的。这样你和你太太一人一瓶。",
            keyPhrases: [
              { en: "buy one get one 50% off", zh: "买一送一半价" },
              { en: "half price", zh: "半价" },
            ],
            literalMeaning: "\"buy one get one 50% off\" 字面意思是 \"买一件，第二件打五折\"，不是免费送",
            culturalMeaning: "这是美国药店和超市常见的促销方式，简称 BOGO 50%，和中国的买一送一不同，第二件是半价不是免费",
            alternativeExpressions: [
              { textEn: "Your total is $38.75. Oh, and sunscreen is BOGO half off this week — want a second one at half price?", textZh: "一共38.75美元。对了，防晒霜这周第二件半价——要加一瓶吗？", actionHint: "利用半价优惠", frequency: "common" },
              { textEn: "That's $38.75. The sunscreen has a buy one, get one 50% off deal. Perfect since there are two of you!", textZh: "38.75美元。防晒霜买一送一半价。你们两个人正好！", actionHint: "给太太也买一瓶", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh, great deal! Yes, please add another one. Thank you so much for your help.",
            textZh: "哦，太划算了！加一瓶吧。非常感谢你的帮助。",
          },
        ],
      },
    ],
  },

  // ==================== 家具/家居用品店 ====================
  {
    id: "shopping-17",
    category: "shopping",
    titleZh: "家居用品店",
    titleEn: "Home Goods Store",
    description: "在家居用品店选购生活用品、了解退货政策和配送服务",
    otherRole: "销售员",
    otherRoleIcon: "lamp",
    flows: [
      // --- Flow 1: 选购家居用品 ---
      {
        id: "home-browsing",
        titleZh: "选购家居用品",
        titleEn: "Browsing Home Goods",
        description: "在大型家居用品店选购日用品和装饰品",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm looking for a carry-on sized luggage set. Where would that be?",
            textZh: "你好，我想找一套登机箱大小的行李箱。在哪里？",
          },
          {
            speaker: "them",
            role: "销售员",
            textEn: "Luggage is upstairs on the second floor, in the travel section. Take the escalator on your left. Are you looking for hard-shell or soft-shell?",
            textZh: "行李箱在二楼，旅行用品区。坐左边的扶梯上去。您想要硬壳的还是软壳的？",
            keyPhrases: [
              { en: "carry-on", zh: "登机箱" },
              { en: "hard-shell", zh: "硬壳的" },
              { en: "soft-shell", zh: "软壳的" },
              { en: "escalator", zh: "扶梯" },
            ],
            vocabNotes: {
              "carry-on": { meaningInContext: "在这句话里表示：可以带上飞机的小型行李箱，一般不超过22英寸", similarUsage: "类似用法：Is this bag carry-on size?（这个包是登机尺寸吗？）" },
            },
            alternativeExpressions: [
              { textEn: "Travel gear is in aisle 12. Hard or soft case?", textZh: "旅行用品在12号过道。硬壳还是软壳？", actionHint: "告知你的偏好", frequency: "common" },
              { textEn: "Luggage is on the second floor. Take the escalator on the left. Do you want a hard-shell or soft one?", textZh: "行李箱在二楼。坐左边的扶梯上去。要硬壳还是软壳的？", actionHint: "说明你的偏好", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Hard-shell, please. Something lightweight. I'm flying internationally and the weight limit is strict.",
            textZh: "硬壳的。要轻的。我坐国际航班，重量限制很严格。",
          },
          {
            speaker: "them",
            role: "销售员",
            textEn: "This Samsonite one is our best seller — it's polycarbonate, only 6.5 pounds empty, and it has a built-in TSA lock. It meets all major airline carry-on requirements.",
            textZh: "这款新秀丽是我们的畅销品——聚碳酸酯材质，空箱只有6.5磅，自带 TSA 认证锁。符合所有主要航空公司的登机箱要求。",
            keyPhrases: [
              { en: "best seller", zh: "畅销品" },
              { en: "polycarbonate", zh: "聚碳酸酯" },
              { en: "TSA lock", zh: "TSA认证锁" },
              { en: "carry-on requirements", zh: "登机箱要求" },
            ],
            vocabNotes: {
              "TSA lock": { meaningInContext: "在这句话里表示：美国运输安全管理局认可的锁具，安检人员有万能钥匙可以打开检查而不会损坏锁", similarUsage: "类似用法：Make sure your lock is TSA-approved for flights to the US.（飞美国要确保锁是TSA认证的）" },
            },
            alternativeExpressions: [
              { textEn: "This Samsonite is our top pick — super light, built-in TSA lock, and meets all airline size limits.", textZh: "这款新秀丽是我们首推——超轻，自带TSA锁，符合所有航空公司尺寸要求。", actionHint: "看看是否喜欢", frequency: "common" },
              { textEn: "The best seller is this polycarbonate one — only 6.5 pounds. TSA lock built in, fits all major airline carry-on rules.", textZh: "最畅销的是这款聚碳酸酯的——才6.5磅。自带TSA锁，符合所有主流航空登机要求。", actionHint: "提起来感受重量", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It feels nice. How much is it? And what's your return policy in case it doesn't fit in the overhead bin?",
            textZh: "手感不错。多少钱？如果放不进头顶行李舱，退货政策是什么？",
          },
          {
            speaker: "them",
            role: "销售员",
            textEn: "It's $129.99. Our return policy is 90 days with receipt for a full refund, or 30 days without receipt for store credit. Just keep the tags on.",
            textZh: "129.99美元。有收据的话90天内可以全额退款，没收据30天内可以退成店铺积分。保留好吊牌就行。",
            keyPhrases: [
              { en: "return policy", zh: "退货政策" },
              { en: "receipt", zh: "收据" },
              { en: "full refund", zh: "全额退款" },
              { en: "store credit", zh: "店铺积分" },
              { en: "tags", zh: "吊牌" },
            ],
            literalMeaning: "\"store credit\" 字面意思是 \"商店信用额度\"，实际是退货后给的购物积分，只能在这家店用，不退现金",
            alternativeExpressions: [
              { textEn: "It's $129.99. You've got 90 days to return with receipt for a full refund. Just keep the tags on.", textZh: "129.99美元。有收据90天内可全额退。保留好吊牌就行。", actionHint: "了解退货期限", frequency: "common" },
              { textEn: "$129.99 with a 90-day return policy. No receipt? No worries — 30 days for store credit.", textZh: "129.99美元，90天退货期。没收据？没关系——30天内可以退成店铺积分。", actionHint: "注意保留收据", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a reasonable policy. Do you have it in navy blue?",
            textZh: "退货政策不错。有深蓝色的吗？",
          },
          {
            speaker: "them",
            role: "销售员",
            textEn: "Let me check the back. We have black, silver, and... yes, navy blue. Here you go. Would you also like to see the matching checked bag? It's $179.99, but the set together is $269 — that's $40 off.",
            textZh: "我去后面看看。有黑色、银色，还有……有深蓝色的。给您。要看配套的托运箱吗？单买179.99美元，但整套269美元——便宜40美元。",
            keyPhrases: [
              { en: "check the back", zh: "去后面（仓库）看看" },
              { en: "matching", zh: "配套的" },
              { en: "checked bag", zh: "托运箱" },
              { en: "set", zh: "套装" },
            ],
            alternativeExpressions: [
              { textEn: "We have it in black, silver, and navy blue. The navy's the last one. Want to see the matching checked bag too? The set saves you $40.", textZh: "有黑色、银色和深蓝色。深蓝色是最后一个了。要看配套的托运箱吗？套装省40美元。", actionHint: "考虑买套装", frequency: "common" },
              { textEn: "Let me check... yes, navy blue! And if you grab the matching checked bag, you'll save $40 on the set.", textZh: "我看看……有，深蓝色！如果加配套的托运箱，套装省40美元。", actionHint: "权衡是否买套装", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's tempting. Let me just take the carry-on for now. Can you hold the checked bag for me until tomorrow? I need to think about it.",
            textZh: "很心动。先买登机箱吧。托运箱能帮我留到明天吗？我想考虑一下。",
          },
          {
            speaker: "them",
            role: "销售员",
            textEn: "Of course! I can put it on hold for 48 hours. Just give me your name and I'll tag it. When you come back, ask for the hold items at the customer service desk.",
            textZh: "当然可以！我可以帮您保留48小时。告诉我您的名字我贴个标签。回来的时候去客服台说取保留商品就行。",
            keyPhrases: [
              { en: "put it on hold", zh: "保留/留起来" },
              { en: "tag it", zh: "贴标签" },
              { en: "customer service desk", zh: "客服台" },
            ],
            vocabNotes: {
              "put it on hold": { meaningInContext: "在这句话里表示：把商品留在店里，暂时不卖给别人，等你回来买", similarUsage: "类似用法：Can you put this dress on hold for me?（这条裙子能帮我留一下吗？）" },
            },
            alternativeExpressions: [
              { textEn: "Sure, I can hold it for 48 hours. Just give me your name and come to the customer service desk when you're back.", textZh: "可以，帮你留48小时。告诉我名字，回来去客服台取就行。", actionHint: "留下名字", frequency: "common" },
              { textEn: "I'll put a hold tag on it with your name. We'll keep it for two days at the service desk.", textZh: "我贴个保留标签写上你的名字。客服台帮你留两天。", actionHint: "记住去客服台取", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. My name is Wang. I'll be back tomorrow. Thanks so much for your help!",
            textZh: "好的。我姓王。明天来取。非常感谢你的帮助！",
          },
        ],
      },
      // --- Flow 2: 在线下单店内取货 ---
      {
        id: "home-delivery",
        titleZh: "配送与组装服务",
        titleEn: "Delivery & Assembly",
        description: "了解大件家居用品的送货上门和组装服务",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "We'd like to buy this bookshelf, but we're staying at a hotel. Can you ship it to China?",
            textZh: "我们想买这个书架，但我们住酒店。能寄到中国吗？",
          },
          {
            speaker: "them",
            role: "销售员",
            textEn: "Unfortunately, we don't offer international shipping directly. But I can suggest a few options: you could use a freight forwarding service, or we can ship it to a US address if you have one.",
            textZh: "很抱歉，我们不提供国际直邮。但我可以建议几个方案：您可以用转运公司，或者如果您有美国地址，我们可以寄到那里。",
            keyPhrases: [
              { en: "international shipping", zh: "国际运输" },
              { en: "freight forwarding service", zh: "转运公司" },
            ],
            vocabNotes: {
              "freight forwarding service": { meaningInContext: "在这句话里表示：帮你把美国的包裹转寄到中国的第三方物流公司", similarUsage: "类似用法：Many Chinese shoppers use freight forwarders to buy from US stores.（很多中国消费者用转运公司从美国商店买东西）" },
            },
            alternativeExpressions: [
              { textEn: "We only ship domestically, I'm afraid. Have you looked into a mail forwarding service?", textZh: "我们只在国内配送。您了解过转运服务吗？", actionHint: "询问转运服务的推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I see. What if I want it delivered to my hotel here in town? We check out in three days.",
            textZh: "明白了。如果送到我在市里住的酒店呢？我们三天后退房。",
          },
          {
            speaker: "them",
            role: "销售员",
            textEn: "Local delivery is free for orders over $99. We can usually deliver within 2 business days. I'd recommend calling your hotel first to make sure they accept packages for guests.",
            textZh: "满99美元本地配送免费。通常2个工作日内送到。建议先打电话确认酒店是否代收客人包裹。",
            keyPhrases: [
              { en: "local delivery", zh: "本地配送" },
              { en: "business days", zh: "工作日" },
              { en: "accept packages", zh: "代收包裹" },
            ],
            alternativeExpressions: [
              { textEn: "Free delivery over $99, takes about 2 days. Just double-check with your hotel that they accept guest deliveries.", textZh: "满99免配送，大约2天到。先跟酒店确认能不能代收客人包裹。", actionHint: "先联系酒店确认", frequency: "common" },
              { textEn: "Local delivery is on us for orders over $99. Usually 2 business days. Make sure your hotel is okay with receiving packages.", textZh: "满99本地配送免费。通常2个工作日。确保酒店可以代收。", actionHint: "确认酒店收件政策", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Two business days might be cutting it close. Is there an express delivery option?",
            textZh: "两个工作日有点紧。有加急配送吗？",
          },
          {
            speaker: "them",
            role: "销售员",
            textEn: "Yes, we have next-day delivery for an extra $25. If you order now, you'd have it by tomorrow afternoon. We'll send you a text when it's on the way.",
            textZh: "有的，加25美元可以次日达。现在下单的话明天下午就能到。发货的时候会发短信通知您。",
            keyPhrases: [
              { en: "next-day delivery", zh: "次日达" },
              { en: "on the way", zh: "在路上/已发出" },
            ],
            literalMeaning: "\"cutting it close\" 字面意思是 \"切得很近\"，实际表示时间很紧张、几乎来不及",
            alternativeExpressions: [
              { textEn: "We have next-day for $25 extra. Order now and it'll be at your hotel by tomorrow afternoon.", textZh: "加25美元可以次日达。现在下单明天下午就能到酒店。", actionHint: "选择加急配送", frequency: "common" },
              { textEn: "Express delivery is available — $25 more, arrives tomorrow. We'll text you when it's on the way.", textZh: "有加急配送——加25美元，明天到。发货会短信通知你。", actionHint: "确认是否加急", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Let's do the next-day delivery. This bookshelf — does it come assembled or do we need to put it together?",
            textZh: "那就选次日达吧。这个书架是组装好的还是要自己装？",
          },
          {
            speaker: "them",
            role: "销售员",
            textEn: "It comes flat-packed, so some assembly is required. But all the tools are included and the instructions are pretty straightforward. It takes about 45 minutes. We also offer in-home assembly for $49 if you'd prefer.",
            textZh: "是平板包装的，需要自己组装。不过工具都附带了，说明书也很清楚。大概45分钟。如果需要的话，我们也提供上门组装服务49美元。",
            keyPhrases: [
              { en: "flat-packed", zh: "平板包装" },
              { en: "some assembly required", zh: "需要自行组装" },
              { en: "in-home assembly", zh: "上门组装" },
            ],
            vocabNotes: {
              "flat-packed": { meaningInContext: "在这句话里表示：家具拆成零件放在扁平的箱子里，买回去需要自己组装", similarUsage: "类似用法：IKEA furniture is mostly flat-packed.（宜家家具大多是平板包装的）" },
            },
            culturalMeaning: "\"some assembly required\" 是美国商品常见的说法，意味着你买回去需要自己动手拼装，这在美国是很正常的",
            alternativeExpressions: [
              { textEn: "It comes flat-packed. Takes about 45 minutes to put together — tools are included. Or we can assemble it for $49.", textZh: "平板包装的。大约45分钟装好——工具都附带。也可以付49美元让我们上门装。", actionHint: "决定是否需要组装服务", frequency: "common" },
              { textEn: "Some assembly required, but it's pretty straightforward. If you'd rather not DIY, in-home assembly is $49.", textZh: "需要自己装，但不难。如果不想自己动手，上门组装49美元。", actionHint: "考虑自己装还是付费安装", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "We won't need the assembly since it's going to be shipped to China eventually. Let's just do the delivery. Can I pay here?",
            textZh: "不需要组装了，反正最终要寄回中国。就送货就行。在这里付款吗？",
          },
          {
            speaker: "them",
            role: "销售员",
            textEn: "Yes, pay right here. I'll need a delivery address and your phone number for the tracking notification. Your total with next-day shipping is $274.99.",
            textZh: "对，在这里付。需要您提供送货地址和手机号码用来发物流通知。加上次日达运费一共274.99美元。",
            keyPhrases: [
              { en: "delivery address", zh: "送货地址" },
              { en: "tracking notification", zh: "物流通知" },
            ],
            alternativeExpressions: [
              { textEn: "Pay right here. I'll need your delivery address and phone for the tracking text. Total with shipping is $274.99.", textZh: "在这付。需要送货地址和手机号发物流通知。加运费一共274.99美元。", actionHint: "提供地址和电话", frequency: "common" },
              { textEn: "Your total with next-day delivery is $274.99. Just give me the hotel address and a phone number for tracking.", textZh: "加次日达一共274.99美元。给我酒店地址和手机号就行。", actionHint: "准备付款", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's my hotel address and phone number. I'll pay by credit card.",
            textZh: "这是我的酒店地址和手机号。我刷信用卡。",
          },
        ],
      },
    ],
  },

  // ==================== 运动用品店 ====================
  {
    id: "shopping-18",
    category: "shopping",
    titleZh: "运动用品店",
    titleEn: "Sports Store",
    description: "在运动用品店选购运动装备、了解产品功能和尺码",
    otherRole: "运动顾问",
    otherRoleIcon: "dumbbell",
    flows: [
      // --- Flow 1: 户外运动装备 ---
      {
        id: "outdoor-gear",
        titleZh: "户外装备选购",
        titleEn: "Outdoor Gear Shopping",
        description: "为旅行购买户外运动装备，如登山鞋、背包和防水衣",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm planning to hike in the Grand Canyon next week. I need some proper gear. Where should I start?",
            textZh: "你好，我下周打算去大峡谷徒步。需要一些专业装备。从哪里开始好？",
          },
          {
            speaker: "them",
            role: "运动顾问",
            textEn: "Great destination! First things first — do you have proper hiking boots? That's the most important piece of gear for the Canyon. The trails can be rocky and steep.",
            textZh: "好目的地！首先——您有合适的登山鞋吗？那是大峡谷最重要的装备。步道又多石头又陡。",
            keyPhrases: [
              { en: "hiking boots", zh: "登山鞋" },
              { en: "gear", zh: "装备" },
              { en: "trails", zh: "步道" },
              { en: "rocky and steep", zh: "多石头且陡峭" },
            ],
            alternativeExpressions: [
              { textEn: "Awesome! The Canyon is incredible. Let's start with footwear — what hiking shoes do you have?", textZh: "太棒了！大峡谷很壮观。先从鞋子说起——你有什么登山鞋？", actionHint: "告诉他你现有的装备情况", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I only have sneakers. I definitely need hiking boots. What do you recommend for a beginner?",
            textZh: "我只有运动鞋。肯定需要登山鞋。新手你推荐什么？",
          },
          {
            speaker: "them",
            role: "运动顾问",
            textEn: "For a beginner doing the Grand Canyon, I'd suggest a mid-cut boot with ankle support and a waterproof membrane. This Merrell Moab is our top seller — it's comfortable right out of the box, so you won't need much break-in time.",
            textZh: "新手去大峡谷的话，我建议中帮的带踝部支撑和防水膜的登山鞋。这款 Merrell Moab 是我们的销量冠军——开箱就很舒服，不需要太多磨合时间。",
            keyPhrases: [
              { en: "mid-cut", zh: "中帮的" },
              { en: "ankle support", zh: "踝部支撑" },
              { en: "waterproof membrane", zh: "防水膜" },
              { en: "right out of the box", zh: "开箱即用" },
              { en: "break-in time", zh: "磨合时间" },
            ],
            vocabNotes: {
              "break-in time": { meaningInContext: "在这句话里表示：新鞋穿着不舒适、需要穿几次才能变得舒适合脚的过渡期", similarUsage: "类似用法：Leather shoes usually need more break-in time.（皮鞋通常需要更多磨合时间）" },
            },
            alternativeExpressions: [
              { textEn: "For a beginner, I'd go with this Merrell Moab — mid-cut, waterproof, comfy right out of the box.", textZh: "新手的话推荐这款Merrell Moab——中帮、防水、开箱就舒服。", actionHint: "试穿推荐的鞋", frequency: "common" },
              { textEn: "The Merrell Moab is our best seller for the Canyon. Good ankle support, waterproof, and barely needs breaking in.", textZh: "去大峡谷Merrell Moab卖得最好。踝部支撑好、防水，几乎不用磨合。", actionHint: "了解这款鞋的特点", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I try them on? I'm a size 42 in Chinese sizing — I'm not sure what that is here.",
            textZh: "可以试穿吗？我穿中国42码——不知道这里是多少码。",
            culturalNote: "中国42码约等于美国男士8.5-9码或欧洲42码。建议现场测量。",
          },
          {
            speaker: "them",
            role: "运动顾问",
            textEn: "Chinese 42 would be about a US 8.5 or 9. Let me measure your foot to be sure — for hiking boots, you actually want about a half size larger than your regular shoes, because your feet swell on long hikes and you need room for thick socks.",
            textZh: "中国42码大概是美国8.5或9码。我帮您量一下更准确——登山鞋其实要比平时大半码，因为长时间徒步脚会肿，还要留空间给厚袜子。",
            keyPhrases: [
              { en: "measure your foot", zh: "量一下脚" },
              { en: "half size larger", zh: "大半码" },
              { en: "swell", zh: "肿胀" },
              { en: "thick socks", zh: "厚袜子" },
            ],
            alternativeExpressions: [
              { textEn: "Chinese 42 is roughly a US 9. Let me measure to be exact — and for hiking, go a half size up for swelling and thick socks.", textZh: "中国42大概美国9号。我量准确一点——登山鞋要大半码，因为走久了脚会肿还要穿厚袜子。", actionHint: "让店员量脚", frequency: "common" },
              { textEn: "That'd be about a US 8.5 or 9. But for hiking boots, size up — your feet swell on long hikes.", textZh: "大约美国8.5或9号。但登山鞋要拿大的——走远路脚会肿。", actionHint: "注意登山鞋要大半码", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I didn't know that. Okay, please measure me. And I'll need the thick socks too, I guess.",
            textZh: "我不知道还有这个说法。好，帮我量一下。我想厚袜子也需要买。",
          },
          {
            speaker: "them",
            role: "运动顾问",
            textEn: "You're a 9 in US sizing, so I'd put you in a 9.5 for hiking. Try these on with these merino wool socks — they wick moisture and prevent blisters. Walk around the store, try the ramp over there to simulate a downhill.",
            textZh: "您美码是9号，徒步建议穿9.5号。穿上这双美利奴羊毛袜试试——能吸湿防水泡。在店里走走，试试那边的斜坡模拟下坡。",
            keyPhrases: [
              { en: "merino wool", zh: "美利奴羊毛" },
              { en: "wick moisture", zh: "吸湿排汗" },
              { en: "blisters", zh: "水泡" },
              { en: "ramp", zh: "斜坡" },
              { en: "simulate", zh: "模拟" },
            ],
            alternativeExpressions: [
              { textEn: "You're a 9, so I'll put you in a 9.5. Try them with these merino wool socks and walk on the ramp to test downhill.", textZh: "你是9号，给你拿9.5的。穿上这双羊毛袜试试，在斜坡上走走测试下坡。", actionHint: "穿上袜子试鞋", frequency: "common" },
              { textEn: "9.5 for hiking. These wool socks are a must — they prevent blisters. Walk around and try the ramp.", textZh: "徒步穿9.5。这种羊毛袜必备——防水泡。走走试试那边的斜坡。", actionHint: "在斜坡上测试", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "These feel great! Very comfortable on the ramp too. I'll take the boots and two pairs of the socks. Do I need anything else for the Canyon?",
            textZh: "感觉很好！在斜坡上也很舒服。登山鞋和两双袜子我都要了。去大峡谷还需要什么？",
          },
          {
            speaker: "them",
            role: "运动顾问",
            textEn: "I'd highly recommend a hydration pack — it's like a backpack with a built-in water bladder. You'll need to carry at least 3 liters of water in the Canyon. Also, trekking poles will save your knees on the steep sections. Altogether, the boots, socks, hydration pack, and poles would be about $320.",
            textZh: "强烈推荐水袋背包——就是带内置水袋的背包。在大峡谷至少要带3升水。另外登山杖能在陡坡路段保护膝盖。登山鞋、袜子、水袋背包加登山杖一共大约320美元。",
            keyPhrases: [
              { en: "hydration pack", zh: "水袋背包" },
              { en: "water bladder", zh: "水袋" },
              { en: "trekking poles", zh: "登山杖" },
            ],
            vocabNotes: {
              "hydration pack": { meaningInContext: "在这句话里表示：背包里内置一个软水袋，通过吸管可以边走边喝水", similarUsage: "类似用法：Don't forget to fill your hydration pack before the hike.（徒步前别忘了把水袋装满）" },
            },
            alternativeExpressions: [
              { textEn: "You'll need at least 3 liters of water in the Canyon. A hydration pack is the way to go. Trekking poles will save your knees too.", textZh: "在大峡谷至少要带3升水。水袋背包最方便。登山杖也能保护膝盖。", actionHint: "考虑必要装备", frequency: "common" },
              { textEn: "I'd add a hydration pack and trekking poles. The whole setup — boots, socks, pack, and poles — would be about $320.", textZh: "建议加水袋背包和登山杖。全套——鞋、袜子、背包、杖——大约320美元。", actionHint: "了解全套价格", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, I'll take everything. Is there any discount if I buy all of these together?",
            textZh: "好，全要了。一起买有优惠吗？",
          },
          {
            speaker: "them",
            role: "运动顾问",
            textEn: "Let me see what I can do. If you sign up for our free membership, you'll get 15% off your first purchase and free returns within 60 days. That would bring your total down to about $272.",
            textZh: "我看看能怎么帮你。如果注册我们的免费会员，首次消费打八五折，而且60天内免费退货。这样你的总价大约272美元。",
            keyPhrases: [
              { en: "membership", zh: "会员" },
              { en: "first purchase", zh: "首次消费" },
              { en: "free returns", zh: "免费退货" },
            ],
            alternativeExpressions: [
              { textEn: "Sign up for our free membership and get 15% off today plus 60-day free returns. That'll save you about $50.", textZh: "注册免费会员今天打八五折还有60天免费退货。能省大约50美元。", actionHint: "注册会员省钱", frequency: "common" },
              { textEn: "Join our loyalty program — it's free — and you'll get 15% off your first buy. That brings it down to $272.", textZh: "加入我们的会员——免费的——首次消费八五折。这样降到272美元。", actionHint: "免费注册享折扣", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Deal. I'll sign up. Can I use my Chinese phone number for the account?",
            textZh: "成交。我注册。可以用中国手机号注册吗？",
          },
        ],
      },
      // --- Flow 2: NBA/体育纪念品 ---
      {
        id: "sports-merch",
        titleZh: "体育纪念品",
        titleEn: "Sports Merchandise",
        description: "购买NBA球衣和体育纪念品作为礼物或收藏",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm looking for an NBA jersey. I want to buy one for my son — he's a huge LeBron fan.",
            textZh: "你好，我想买一件 NBA 球衣。给我儿子买的——他是詹姆斯的铁粉。",
          },
          {
            speaker: "them",
            role: "销售员",
            textEn: "Nice! We have three types of NBA jerseys — the Swingman is the standard fan jersey at $110, the Icon edition is $150 with better fabric, and the authentic on-court jersey is $300. Which one are you thinking?",
            textZh: "不错！我们有三种 NBA 球衣——Swingman 是标准球迷版110美元，Icon版150美元面料更好，场上球员版300美元。您想要哪种？",
            keyPhrases: [
              { en: "Swingman", zh: "球迷版" },
              { en: "Icon edition", zh: "图标版" },
              { en: "authentic on-court", zh: "场上球员版" },
              { en: "fabric", zh: "面料" },
            ],
            alternativeExpressions: [
              { textEn: "We've got replica, premium, and authentic jerseys. What's your budget?", textZh: "我们有复刻版、高端版和正品版。您的预算是？", actionHint: "说出预算范围", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The Swingman is fine — it's a gift. What sizes do you have? He's 13 years old and pretty tall for his age.",
            textZh: "Swingman 就好——是礼物。有什么尺码？他13岁，同龄人里算高的。",
          },
          {
            speaker: "them",
            role: "销售员",
            textEn: "For a tall 13-year-old, I'd suggest either a youth XL or an adult small. Youth sizes run a bit shorter in length. Do you know his height roughly?",
            textZh: "个子高的13岁，我建议青少年XL或成人S码。青少年码衣长会短一些。大概知道他的身高吗？",
            keyPhrases: [
              { en: "youth XL", zh: "青少年加大号" },
              { en: "adult small", zh: "成人小号" },
              { en: "run a bit shorter", zh: "偏短一些" },
            ],
            vocabNotes: {
              "run a bit shorter": { meaningInContext: "在这句话里表示：这个尺码的衣长比预期偏短一些，是描述版型特点的常见说法", similarUsage: "类似用法：These pants run long — you might need to hem them.（这条裤子偏长，可能需要改短）" },
            },
            alternativeExpressions: [
              { textEn: "For a tall 13-year-old, I'd say youth XL or adult small. Youth sizes run shorter. Know his height?", textZh: "个子高的13岁，青少年XL或成人小号。青少年码偏短。知道他身高吗？", actionHint: "说出大概身高", frequency: "common" },
              { textEn: "At that age, I'd recommend adult small — he's still growing. Youth XL might be too short in a few months.", textZh: "这个年龄建议成人小号——他还在长。青少年XL几个月后可能就短了。", actionHint: "考虑成长空间", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "He's about 170 cm — I mean, about 5'7\". I think an adult small might be better since he's still growing.",
            textZh: "他大概170厘米——就是5尺7寸左右。我想成人小号好一些，他还在长个。",
            culturalNote: "美国用英尺和英寸表示身高。170cm 约等于 5'7\"。可以说 \"about five seven\" 或直接说厘米让对方帮你换算。",
          },
          {
            speaker: "them",
            role: "销售员",
            textEn: "Smart thinking. Here's the adult small in the Lakers purple and gold — number 23, LeBron James. We also have the City Edition which is a limited design this year.",
            textZh: "考虑得周到。这是成人小号的湖人紫金配色——23号，勒布朗·詹姆斯。我们还有城市版，今年的限定款设计。",
            keyPhrases: [
              { en: "City Edition", zh: "城市版" },
              { en: "limited design", zh: "限定款设计" },
            ],
            alternativeExpressions: [
              { textEn: "Here's the adult small in Lakers #23. We also have the City Edition — it's this year's limited design.", textZh: "这是成人小号湖人23号。还有城市版——今年的限定设计。", actionHint: "看看两个版本", frequency: "common" },
              { textEn: "Good call on adult small. This is the standard purple and gold. But check out the City Edition — it's a limited run.", textZh: "成人小号选得好。这是标准紫金配色。不过看看城市版——限量的。", actionHint: "比较两款", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The City Edition looks amazing! Is it more expensive?",
            textZh: "城市版太好看了！贵一些吗？",
          },
          {
            speaker: "them",
            role: "销售员",
            textEn: "It's $130, so just $20 more than the standard Swingman. But they sell out fast — this might be the last one in small. I can check the other stores if this size doesn't work.",
            textZh: "130美元，比标准 Swingman 只贵20美元。但是卖得很快——这可能是小号的最后一件了。如果尺码不合适我可以查其他门店。",
            keyPhrases: [
              { en: "sell out", zh: "卖完/断货" },
              { en: "check the other stores", zh: "查其他门店" },
            ],
            alternativeExpressions: [
              { textEn: "It's $130 — just $20 more than the standard. But heads up, it's the last small. They sell out fast.", textZh: "130美元——只比标准款贵20。不过注意，这是最后一件小号。卖得很快。", actionHint: "尽快决定", frequency: "common" },
              { textEn: "$130 for the City Edition. This might be the last one in small — they fly off the shelves.", textZh: "城市版130美元。小号可能是最后一件——卖得特别快。", actionHint: "抓紧机会", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the City Edition! Can you gift-wrap it? And do you have a gift receipt so he can exchange it if the size is wrong?",
            textZh: "我要城市版！能包装成礼物吗？有礼品收据吗？如果尺码不对他可以换。",
          },
          {
            speaker: "them",
            role: "销售员",
            textEn: "Absolutely! Gift wrapping is free. And here's a gift receipt — it doesn't show the price, but he can use it to exchange for a different size within 30 days at any of our locations.",
            textZh: "没问题！礼品包装免费。给您礼品收据——上面不显示价格，但他可以在30天内到我们任何门店凭收据换尺码。",
            keyPhrases: [
              { en: "gift-wrap", zh: "礼品包装" },
              { en: "gift receipt", zh: "礼品收据" },
              { en: "exchange", zh: "换货" },
              { en: "locations", zh: "门店" },
            ],
            literalMeaning: "\"gift receipt\" 字面意思是 \"礼物收据\"，是一种不显示价格的收据，专门用于送礼场景，收礼人可以凭它换货但看不到你花了多少钱",
            alternativeExpressions: [
              { textEn: "Gift wrap is free! And here's a gift receipt — no price shown, but he can exchange the size within 30 days at any store.", textZh: "免费包装！给你礼品收据——不显示价格，但30天内可以到任何门店换尺码。", actionHint: "把礼品收据一起送", frequency: "common" },
              { textEn: "I'll wrap it up for free. The gift receipt doesn't show the price, so he can exchange it if the size is off.", textZh: "免费帮你包。礼品收据不显示价格，尺码不对可以换。", actionHint: "记得附上礼品收据", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. My son is going to love this. Thank you!",
            textZh: "太好了。我儿子一定会很喜欢。谢谢！",
          },
        ],
      },
    ],
  },

  // ==================== 眼镜店 ====================
  {
    id: "shopping-19",
    category: "shopping",
    titleZh: "眼镜店",
    titleEn: "Optical Shop",
    description: "在国外眼镜店配眼镜或太阳镜，了解验光和镜片选择",
    otherRole: "配镜师",
    otherRoleIcon: "glasses",
    flows: [
      // --- Flow 1: 配处方眼镜 ---
      {
        id: "prescription-glasses",
        titleZh: "配处方眼镜",
        titleEn: "Getting Prescription Glasses",
        description: "用自带处方或现场验光配一副眼镜",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I broke my glasses during my trip and I need a new pair urgently. I have my prescription from China — will you accept it?",
            textZh: "你好，我旅行中眼镜摔坏了，急需配一副新的。我有中国的处方——你们接受吗？",
          },
          {
            speaker: "them",
            role: "配镜师",
            textEn: "Oh no, sorry to hear that! Let me take a look at your prescription. Hmm, the format is a little different from what we use here, but I can read the numbers. Your right eye is -3.50 and left is -4.00 with some astigmatism. Does that sound right?",
            textZh: "哎呀，太不巧了！让我看看您的处方。嗯，格式和我们这边用的有点不同，但我能看懂数字。您的右眼 -3.50，左眼 -4.00，还有一些散光。对吗？",
            keyPhrases: [
              { en: "prescription", zh: "处方/验光单" },
              { en: "astigmatism", zh: "散光" },
              { en: "right eye / left eye", zh: "右眼/左眼" },
            ],
            vocabNotes: {
              "astigmatism": { meaningInContext: "在这句话里表示：一种常见的视力问题，角膜形状不规则导致看东西模糊或变形", similarUsage: "类似用法：My astigmatism makes it hard to drive at night.（我的散光让我晚上开车很困难）" },
            },
            alternativeExpressions: [
              { textEn: "We can work with foreign prescriptions. Let me convert the values to our system.", textZh: "我们可以用国外的处方。让我把数值转换成我们的系统。", actionHint: "确认处方数据是否正确", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, that's correct. How long will it take to make a new pair? I'm leaving the country in four days.",
            textZh: "对，没错。配一副新的要多久？我四天后就出国了。",
          },
          {
            speaker: "them",
            role: "配镜师",
            textEn: "Our standard turnaround is 7 to 10 days, but we offer an express service — same-day or next-day for an extra $50. Since your prescription isn't too strong, we should be able to do it. Let's pick out some frames first.",
            textZh: "我们标准周期是7到10天，但有加急服务——当天或次日取，加收50美元。您的度数不算太深，应该可以做。先来选镜框吧。",
            keyPhrases: [
              { en: "turnaround", zh: "周期/工期" },
              { en: "express service", zh: "加急服务" },
              { en: "same-day", zh: "当天" },
              { en: "frames", zh: "镜框" },
            ],
            vocabNotes: {
              "turnaround": { meaningInContext: "在这句话里表示：从下单到完成所需的全部时间", similarUsage: "类似用法：What's the turnaround on a passport renewal?（护照续签需要多长时间？）" },
            },
            alternativeExpressions: [
              { textEn: "Standard is 7-10 days. But we do same-day or next-day express for an extra $50. Your prescription should be no problem.", textZh: "标准7到10天。但有当天或次日加急，加50美元。你的度数应该没问题。", actionHint: "选择取货时间", frequency: "common" },
              { textEn: "Normally a week to 10 days. Since you're in a rush, our express service can get them done by tomorrow for $50 more.", textZh: "正常一周到10天。既然你赶时间，加急服务加50美元明天就能好。", actionHint: "选加急服务", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Next-day would be perfect. I like lightweight frames — something like titanium. What do you have?",
            textZh: "次日取最好。我喜欢轻的镜框——像钛金属的。你们有什么？",
          },
          {
            speaker: "them",
            role: "配镜师",
            textEn: "Great taste! Here are our titanium options. This Ray-Ban is very popular — it's feather-light and flexible. And this Oakley one is more sporty. Prices range from $180 to $350 for the frames alone. Lenses are separate.",
            textZh: "好眼光！这些是我们的钛金属款。这款 Ray-Ban 很受欢迎——超轻又有弹性。这款 Oakley 偏运动风格。镜框价格从180到350美元不等，镜片另算。",
            keyPhrases: [
              { en: "titanium", zh: "钛金属" },
              { en: "feather-light", zh: "超轻的" },
              { en: "flexible", zh: "有弹性的" },
              { en: "frames alone", zh: "只是镜框" },
              { en: "lenses are separate", zh: "镜片另算" },
            ],
            alternativeExpressions: [
              { textEn: "Here are our titanium frames. This Ray-Ban is super light and flexible — very popular. Frames are $180 to $350, lenses extra.", textZh: "这些是钛金属框。这款Ray-Ban超轻有弹性——很受欢迎。镜框180到350，镜片另算。", actionHint: "选择喜欢的镜框", frequency: "common" },
              { textEn: "We've got Ray-Ban and Oakley in titanium. The Ray-Ban is feather-light, the Oakley is sportier. Prices start at $180 for frames alone.", textZh: "钛金属的有Ray-Ban和Oakley。Ray-Ban超轻，Oakley更运动。镜框180起。", actionHint: "比较两个品牌", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I like the Ray-Ban. What lens options do I have?",
            textZh: "我喜欢 Ray-Ban 的。镜片有什么选项？",
          },
          {
            speaker: "them",
            role: "配镜师",
            textEn: "We have standard lenses, thin lenses — which I'd recommend at your prescription strength to keep them from looking thick — and ultra-thin. You can add anti-reflective coating, blue-light blocking, or photochromic which darkens in sunlight. Here's the price list.",
            textZh: "我们有标准镜片、薄镜片——以您的度数我建议用薄的，不然会显得很厚——还有超薄的。可以加防反光涂层、防蓝光或变色镜片，在阳光下会变暗。这是价格表。",
            keyPhrases: [
              { en: "thin lenses", zh: "薄镜片" },
              { en: "anti-reflective coating", zh: "防反光涂层" },
              { en: "blue-light blocking", zh: "防蓝光" },
              { en: "photochromic", zh: "变色镜片" },
            ],
            vocabNotes: {
              "photochromic": { meaningInContext: "在这句话里表示：遇到紫外线（阳光）自动变暗、回到室内自动变透明的镜片", similarUsage: "类似用法：Photochromic lenses are great if you go in and out a lot.（如果你经常进出室内外，变色镜片很方便）" },
            },
            alternativeExpressions: [
              { textEn: "We have standard, thin, and ultra-thin lenses. At your prescription, I'd go thin. You can add anti-glare, blue-light, or photochromic too.", textZh: "有标准、薄和超薄镜片。你的度数建议选薄的。还可以加防反光、防蓝光或变色。", actionHint: "选择镜片类型", frequency: "common" },
              { textEn: "I'd recommend thin lenses so they don't look bulky. You can add coatings — anti-reflective, blue-light blocking, or photochromic.", textZh: "建议薄镜片，不显厚。可以加涂层——防反光、防蓝光或变色。", actionHint: "了解加项选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the thin lenses with anti-reflective coating. How much is the total with the express service?",
            textZh: "我要薄镜片加防反光涂层。加上加急服务一共多少？",
          },
          {
            speaker: "them",
            role: "配镜师",
            textEn: "The Ray-Ban frames are $220, thin lenses with AR coating are $180, plus $50 for express service. Your total is $450. If you're a tourist, I can do the tax-free paperwork for you — that'll save you about $35.",
            textZh: "Ray-Ban 镜框220美元，薄镜片加防反光涂层180美元，加急服务50美元。一共450美元。如果您是游客的话，我可以帮您办退税手续——能省大约35美元。",
            keyPhrases: [
              { en: "AR coating", zh: "防反光涂层" },
              { en: "tax-free paperwork", zh: "退税手续" },
            ],
            culturalNote: "部分国家和美国部分州对游客购物有退税政策。通常需要出示护照和离境机票。",
            alternativeExpressions: [
              { textEn: "Frames $220, lenses $180, express $50 — total is $450. If you're a tourist, I can do the tax-free paperwork and save you about $35.", textZh: "镜框220，镜片180，加急50——总共450。游客的话我帮办退税，能省大约35。", actionHint: "出示护照办退税", frequency: "common" },
              { textEn: "Your total is $450. Are you visiting? Tourists can get a tax refund — I'll fill out the forms for you.", textZh: "一共450美元。你是旅游的吗？游客可以退税——我帮你填表。", actionHint: "享受退税优惠", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I'm a tourist! I have my passport. Thank you — that's very helpful. When can I pick them up tomorrow?",
            textZh: "我是游客！护照带着呢。太好了，太贴心了。明天什么时候能取？",
          },
          {
            speaker: "them",
            role: "配镜师",
            textEn: "They should be ready by 2 PM tomorrow. We'll send you a text when they're done. When you pick them up, we'll do a fitting to adjust the frames to your face — that's included in the service.",
            textZh: "明天下午2点应该能好。做好了会发短信通知您。来取的时候我们会做镜框调整让它贴合您的脸型——这个是包含在服务里的。",
            keyPhrases: [
              { en: "fitting", zh: "试戴调整" },
              { en: "adjust the frames", zh: "调整镜框" },
              { en: "included in the service", zh: "包含在服务里" },
            ],
            alternativeExpressions: [
              { textEn: "They'll be ready by 2 PM tomorrow. We'll text you. When you pick them up, we'll adjust the fit for free.", textZh: "明天下午2点前好。到时发短信通知。来取的时候免费调整贴合度。", actionHint: "明天来取", frequency: "common" },
              { textEn: "Should be done by tomorrow afternoon. We'll send a text. Come in for a fitting when you pick them up — it's included.", textZh: "明天下午应该好。会发短信。来取的时候做个试戴调整——包含在服务里的。", actionHint: "预留取货时间", frequency: "occasional" },
            ],
          },
        ],
      },
      // --- Flow 2: 买太阳镜 ---
      {
        id: "sunglasses",
        titleZh: "选购太阳镜",
        titleEn: "Buying Sunglasses",
        description: "选购偏光太阳镜，了解镜片等级和UV防护",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I'm looking for a good pair of sunglasses for driving. I heard polarized ones are better — is that true?",
            textZh: "我想找一副开车用的太阳镜。听说偏光的更好——是真的吗？",
          },
          {
            speaker: "them",
            role: "配镜师",
            textEn: "Absolutely. Polarized lenses reduce glare from the road and other cars, which is especially helpful for driving. They also improve contrast so you can see more clearly. The difference is night and day.",
            textZh: "没错。偏光镜片能减少路面和其他车辆的反光，开车特别有用。还能增强对比度，看得更清楚。区别非常明显。",
            keyPhrases: [
              { en: "polarized", zh: "偏光的" },
              { en: "glare", zh: "反光/炫光" },
              { en: "contrast", zh: "对比度" },
            ],
            vocabNotes: {
              "polarized": { meaningInContext: "在这句话里表示：经过特殊处理可以过滤水平方向反射光的镜片，减少刺眼的反光", similarUsage: "类似用法：I always wear polarized sunglasses when I go fishing.（我钓鱼的时候总戴偏光太阳镜）" },
            },
            literalMeaning: "\"night and day\" 字面意思是 \"夜晚和白天\"，实际表示差别非常大、完全不同",
            culturalMeaning: "这是英语中的常见比喻，和中文的 \"天壤之别\" 意思相近",
            alternativeExpressions: [
              { textEn: "For driving, polarized is the way to go. It cuts glare from the road and other cars — huge difference in visibility.", textZh: "开车的话偏光的最好。减少路面和其他车的反光——看得清楚很多。", actionHint: "选择偏光镜片", frequency: "common" },
              { textEn: "Polarized lenses are a game changer for driving. They block the glare and sharpen the contrast.", textZh: "偏光镜片开车用完全不一样。挡住反光还能增强对比度。", actionHint: "了解偏光优势", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, I want polarized. What about UV protection? My wife said to make sure they block UV rays.",
            textZh: "好，我要偏光的。紫外线防护呢？我太太说一定要能挡 UV。",
          },
          {
            speaker: "them",
            role: "配镜师",
            textEn: "All our sunglasses provide 100% UV400 protection — that blocks both UVA and UVB rays. That's actually the minimum you should look for. Anything without a UV rating is basically just a tinted lens and can actually be worse for your eyes.",
            textZh: "我们所有太阳镜都提供100% UV400防护——能阻挡 UVA 和 UVB 射线。这其实是最低标准。没有UV等级的基本就是有色镜片，反而可能对眼睛更不好。",
            keyPhrases: [
              { en: "UV400 protection", zh: "UV400防护" },
              { en: "UVA and UVB", zh: "UVA和UVB射线" },
              { en: "tinted lens", zh: "有色镜片" },
            ],
            alternativeExpressions: [
              { textEn: "All ours are UV400 — they block both UVA and UVB. That's the minimum you should look for. Anything without UV protection can actually harm your eyes.", textZh: "我们所有的都是UV400——挡UVA和UVB。这是最低标准。没有UV防护的反而伤眼睛。", actionHint: "了解UV防护标准", frequency: "common" },
              { textEn: "Don't worry — everything here has 100% UV protection. Without it, sunglasses are just tinted lenses and can be worse than nothing.", textZh: "放心——这里的都有100%紫外线防护。没有的话就是有色玻璃，反而比不戴还糟。", actionHint: "选有UV认证的", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. Can I try on a few different styles? I'm not sure what looks good on my face shape.",
            textZh: "涨知识了。能试戴几种不同款式吗？我不知道什么款式适合我的脸型。",
          },
          {
            speaker: "them",
            role: "配镜师",
            textEn: "Of course! You have a round face shape, so I'd suggest angular or rectangular frames — they add some definition. Avoid round frames as they'll emphasize the roundness. Let me grab a few options for you.",
            textZh: "当然可以！您是圆脸型，我建议有棱角的或长方形镜框——能增加轮廓感。避免圆框，会显得更圆。我给您拿几款试试。",
            keyPhrases: [
              { en: "face shape", zh: "脸型" },
              { en: "angular", zh: "有棱角的" },
              { en: "rectangular", zh: "长方形的" },
              { en: "definition", zh: "轮廓感" },
            ],
            alternativeExpressions: [
              { textEn: "You have a round face, so angular or rectangular frames will look best. Let me pull a few options for you.", textZh: "你是圆脸，棱角分明的或长方形镜框最好看。我拿几款给你试。", actionHint: "试戴推荐的款式", frequency: "common" },
              { textEn: "For your face shape, I'd avoid round frames. These rectangular ones will add some nice structure. Try them on.", textZh: "你的脸型不太适合圆框。这些长方形的会增加轮廓感。试试看。", actionHint: "试戴对比效果", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I really like this pair. How much are they?",
            textZh: "我很喜欢这副。多少钱？",
          },
          {
            speaker: "them",
            role: "配镜师",
            textEn: "Those are Maui Jim — one of the best brands for polarized driving sunglasses. They're $279. A bit of an investment, but they come with a 2-year warranty and a hard case. They also have a scratch-resistant coating.",
            textZh: "这是 Maui Jim——偏光驾驶太阳镜最好的品牌之一。279美元。有点小投资，但带两年保修和硬质眼镜盒。还有防刮涂层。",
            keyPhrases: [
              { en: "investment", zh: "投资" },
              { en: "warranty", zh: "保修" },
              { en: "hard case", zh: "硬质眼镜盒" },
              { en: "scratch-resistant", zh: "防刮的" },
            ],
            alternativeExpressions: [
              { textEn: "Those are Maui Jim — top-tier polarized lenses. $279 with a 2-year warranty, hard case, and scratch-resistant coating.", textZh: "那是Maui Jim——顶级偏光镜片。279美元，两年保修、硬壳盒、防刮涂层。", actionHint: "考虑性价比", frequency: "common" },
              { textEn: "$279 — a bit of an investment, but they're one of the best driving sunglasses out there. Warranty and case included.", textZh: "279美元——有点小投资，但是最好的驾驶太阳镜之一。含保修和眼镜盒。", actionHint: "权衡品质和价格", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a bit over my budget. Do you have anything similar but more affordable? Maybe around $150?",
            textZh: "有点超预算了。有类似但更便宜的吗？150美元左右的？",
          },
          {
            speaker: "them",
            role: "配镜师",
            textEn: "Sure. These Oakley Holbrooks are $153 — also polarized with UV400. Very popular style. They're more of a casual look but still great for driving. Or these Ray-Ban Wayfarers at $163 if you want something more classic.",
            textZh: "有的。这款 Oakley Holbrook 153美元——也是偏光加UV400。很受欢迎的款式。更休闲一些但开车也很好用。或者 Ray-Ban Wayfarer 163美元，更经典的风格。",
            keyPhrases: [
              { en: "affordable", zh: "价格实惠的" },
              { en: "casual look", zh: "休闲风格" },
              { en: "classic", zh: "经典的" },
            ],
            alternativeExpressions: [
              { textEn: "The Oakley Holbrooks are $153 — great for driving. Or the Ray-Ban Wayfarers at $163 for a more timeless look.", textZh: "Oakley Holbrook 153美元——开车很好用。或者Ray-Ban Wayfarer 163美元更经典。", actionHint: "比较两个选择", frequency: "common" },
              { textEn: "For around $150, try these Oakley or Ray-Ban Wayfarers. Both are polarized with UV400 — just different styles.", textZh: "150左右的话试试这个Oakley或Ray-Ban Wayfarer。都是偏光UV400——只是风格不同。", actionHint: "选择喜欢的风格", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The Ray-Ban Wayfarers are perfect. I'll take them. Can I get a cleaning cloth too?",
            textZh: "Ray-Ban Wayfarer 正好。我要了。能给一块擦镜布吗？",
          },
          {
            speaker: "them",
            role: "配镜师",
            textEn: "They come with a cleaning cloth and a soft pouch. I'll also include a microfiber cleaning spray on the house — just spray and wipe. Enjoy your new shades!",
            textZh: "附带一块擦镜布和一个软袋。我再送你一瓶超细纤维清洁喷雾——喷一下擦就行。享受你的新太阳镜吧！",
            keyPhrases: [
              { en: "soft pouch", zh: "软袋" },
              { en: "on the house", zh: "免费赠送" },
              { en: "shades", zh: "太阳镜（口语）" },
            ],
            vocabNotes: {
              "on the house": { meaningInContext: "在这句话里表示：商家免费赠送，不收你钱", similarUsage: "类似用法：The dessert is on the house tonight.（今晚甜点免费）" },
            },
            literalMeaning: "\"on the house\" 字面意思是 \"在房子上\"，实际意思是 \"免费的、店家请客\"",
            localVariants: { "en-US": "on the house", "en-GB": "on the house / complimentary", "en-AU": "on the house" },
            alternativeExpressions: [
              { textEn: "They come with a cloth and a pouch. And I'll throw in a microfiber spray for free. Enjoy your new shades!", textZh: "附带擦镜布和软袋。我再免费送你一瓶清洁喷雾。享受新太阳镜！", actionHint: "拿好赠品", frequency: "common" },
              { textEn: "Cleaning cloth, soft case, and a complimentary lens spray — all included. You're all set!", textZh: "擦镜布、软袋和免费镜片喷雾——都包含了。齐全了！", actionHint: "确认配件齐全", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 宠物用品店 ====================
  {
    id: "shopping-20",
    category: "shopping",
    titleZh: "礼品与巧克力店",
    titleEn: "Gift & Chocolate Shop",
    description: "在专卖店选购伴手礼和特色巧克力，了解口味推荐和礼盒包装",
    otherRole: "店员",
    otherRoleIcon: "gift",
    flows: [
      // --- Flow 1: 选购巧克力伴手礼 ---
      {
        id: "chocolate-gifts",
        titleZh: "巧克力伴手礼",
        titleEn: "Chocolate Gift Shopping",
        description: "在巧克力专卖店选购送人的礼盒，了解口味和产地",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi! I need to buy some gifts to bring back to China. Chocolate is a safe choice, right? What do you recommend?",
            textZh: "你好！我想买些礼物带回中国。巧克力是比较稳妥的选择吧？有什么推荐？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Absolutely! Chocolate is always a great gift. How many people are you buying for? That'll help me suggest the right options — we have everything from individual boxes to bulk gift packs.",
            textZh: "当然！巧克力送人总是不错的。您要买给多少人？这样我好推荐——我们有单独的礼盒也有批量装。",
            keyPhrases: [
              { en: "individual boxes", zh: "单独的礼盒" },
              { en: "bulk gift packs", zh: "批量装/大包装" },
            ],
            alternativeExpressions: [
              { textEn: "You've come to the right place! How many people are you shopping for?", textZh: "您来对地方了！要买给几个人？", actionHint: "说出大概需要买多少份", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "About 10 people — mostly coworkers. And then something special for my parents and my boss. So maybe a mix of smaller and nicer boxes?",
            textZh: "大概10个人——大多是同事。然后给爸妈和老板各买一份特别的。所以可能需要大小搭配？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Perfect. For the coworkers, these 4-piece truffle boxes are $8.99 each — they look elegant and are great for gifting. For something more premium, this 16-piece assorted collection in a ribbon box is $38 — it has dark, milk, white, and our signature salted caramel.",
            textZh: "好的。同事的话，这种4颗装松露巧克力礼盒8.99美元一盒——很精致，很适合送礼。更高档的，这款16颗装精选系列丝带礼盒38美元——有黑巧、牛奶巧克力、白巧和我们的招牌海盐焦糖。",
            keyPhrases: [
              { en: "truffle", zh: "松露巧克力" },
              { en: "assorted collection", zh: "精选系列" },
              { en: "ribbon box", zh: "丝带礼盒" },
              { en: "dark / milk / white", zh: "黑巧/牛奶/白巧" },
              { en: "salted caramel", zh: "海盐焦糖" },
              { en: "signature", zh: "招牌的" },
            ],
            vocabNotes: {
              "truffle": { meaningInContext: "在这句话里表示：一种圆球形的高级巧克力，里面有软心馅料，不是松露菌", similarUsage: "类似用法：The chocolate truffles melt in your mouth.（松露巧克力入口即化）" },
            },
            alternativeExpressions: [
              { textEn: "For coworkers, these 4-piece truffle boxes are $8.99 — classy and affordable. For someone special, the 16-piece assorted box is $38.", textZh: "同事的话4颗装松露盒8.99美元——精致又实惠。送重要的人的话16颗装精选盒38美元。", actionHint: "按人群选择档次", frequency: "common" },
              { textEn: "We have small gift boxes at $8.99 and premium assorted ones at $38. The premium has dark, milk, white, and our signature salted caramel.", textZh: "有8.99的小礼盒和38的高档精选。高档的有黑巧、牛奶、白巧和招牌海盐焦糖。", actionHint: "了解口味搭配", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I try some before I buy? I want to make sure the flavors are not too sweet — Chinese people generally prefer less sweet things.",
            textZh: "能试吃吗？我想确认口味不会太甜——中国人一般喜欢不太甜的。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Of course! Here, try our 72% dark chocolate truffle — it has a nice bitterness with just a hint of sweetness. And this one is our matcha white chocolate, which is very popular with Asian customers. Not too sweet at all.",
            textZh: "当然可以！来试试我们的72%黑巧松露——苦味恰到好处，只有一点甜。这个是抹茶白巧克力，在亚洲顾客中非常受欢迎。一点都不会太甜。",
            keyPhrases: [
              { en: "bitterness", zh: "苦味" },
              { en: "a hint of sweetness", zh: "一点甜味" },
              { en: "matcha", zh: "抹茶" },
            ],
            literalMeaning: "\"a hint of\" 字面意思是 \"一点提示\"，实际表示 \"少量的、微微的\"",
            alternativeExpressions: [
              { textEn: "Try our 72% dark truffle — not too sweet, just a touch of bitterness. And this matcha one is a big hit with Asian customers.", textZh: "试试我们72%的黑巧松露——不太甜，微微苦。这个抹茶的在亚洲顾客中特别受欢迎。", actionHint: "品尝推荐口味", frequency: "common" },
              { textEn: "Here, taste the dark chocolate one — it's our bestseller. Not sweet at all. The matcha white chocolate is also popular.", textZh: "来尝尝黑巧的——是我们的畅销款。一点不甜。抹茶白巧克力也很受欢迎。", actionHint: "试吃后决定", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh, the dark chocolate one is really good! I'll take 10 of the small truffle boxes in dark chocolate. And for my parents and boss, three of the premium assorted boxes.",
            textZh: "哦，黑巧的真好吃！小的松露巧克力盒我要10盒黑巧的。给爸妈和老板的，三盒高档精选礼盒。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Great choices! For the premium boxes, would you like me to customize the selection? I can make them all dark chocolate-focused since you mentioned less sweet is preferred. Or we can keep the standard assortment.",
            textZh: "好选择！高档礼盒要定制口味吗？既然您说不太甜的好，我可以做成以黑巧为主的。或者保留标准搭配也行。",
            keyPhrases: [
              { en: "customize", zh: "定制" },
              { en: "dark chocolate-focused", zh: "以黑巧为主" },
              { en: "standard assortment", zh: "标准搭配" },
            ],
            alternativeExpressions: [
              { textEn: "Want me to customize the premium boxes? I can do mostly dark chocolate since you mentioned less sweet.", textZh: "高档礼盒要定制吗？既然你说不太甜的好，我可以多放黑巧。", actionHint: "说出口味偏好", frequency: "common" },
              { textEn: "The premium boxes can be customized. I'll pack them dark-chocolate-heavy if your recipients prefer less sweet.", textZh: "高档礼盒可以定制。如果收礼的人喜欢不太甜的，我多放黑巧。", actionHint: "定制口味搭配", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Customize them, please — more dark chocolate, less white chocolate. Oh, and are these okay to carry on a plane? Will they melt?",
            textZh: "定制吧——多放黑巧，少放白巧。对了，这些能带上飞机吗？会不会化？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Good question! Chocolate is fine for carry-on — no liquid restrictions apply. As for melting, I'll pack them with insulated bags and ice packs for free. That'll keep them cool for about 12 hours, which should cover your flight home.",
            textZh: "好问题！巧克力可以随身带上飞机——不算液体限制。至于会不会化，我免费给您包隔热袋和冰袋。能保冷大约12小时，够你飞回家了。",
            keyPhrases: [
              { en: "carry-on", zh: "随身行李" },
              { en: "liquid restrictions", zh: "液体限制" },
              { en: "insulated bags", zh: "隔热袋" },
              { en: "ice packs", zh: "冰袋" },
            ],
            culturalNote: "固体巧克力可以放随身行李带上飞机，不受液体管制。但含酒精的巧克力在部分国家入境时可能需要申报。",
            alternativeExpressions: [
              { textEn: "Chocolate is fine for carry-on — no liquid rules apply. I'll pack them with insulated bags and ice packs for free to keep them cool.", textZh: "巧克力可以随身带——不算液体。我免费用隔热袋和冰袋包好保冷。", actionHint: "了解携带方式", frequency: "common" },
              { textEn: "No worries about airport security. I'll add ice packs and insulated bags — they'll stay cool for about 12 hours.", textZh: "机场安检没问题。我加冰袋和隔热袋——能保冷大约12小时。", actionHint: "足够飞回家", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's really thoughtful! How much is everything in total? And do you offer any discount for buying this many?",
            textZh: "太贴心了！一共多少？买这么多有优惠吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Let me calculate — 10 small boxes at $8.99 each is $89.90, plus 3 premium boxes at $38 each is $114. Total is $203.90 before tax. Since you're buying over $200, I can give you our VIP discount — 10% off. That brings it down to $183.51 plus tax.",
            textZh: "我算一下——10盒小的每盒8.99美元共89.90美元，加3盒高档的每盒38美元共114美元。税前总计203.90美元。因为您消费超过200美元，我可以给您 VIP 折扣——九折。折后183.51美元加税。",
            keyPhrases: [
              { en: "calculate", zh: "计算" },
              { en: "VIP discount", zh: "VIP折扣" },
              { en: "brings it down to", zh: "降到" },
            ],
            alternativeExpressions: [
              { textEn: "That's $203.90. Since you're over $200, you qualify for 10% off — so $183.51 plus tax. Great savings!", textZh: "203.90美元。超过200就有九折——183.51加税。省了不少！", actionHint: "享受VIP折扣", frequency: "common" },
              { textEn: "Your total is $203.90, but with our VIP discount for purchases over $200, it comes down to $183.51 plus tax.", textZh: "总计203.90，但消费超200有VIP折扣，降到183.51加税。", actionHint: "确认折后价格", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Wonderful! I'll take everything. Thank you for being so helpful — this is going to make a lot of people happy.",
            textZh: "太好了！全要了。谢谢你这么耐心——这些礼物一定会让很多人开心。",
          },
        ],
      },
      // --- Flow 2: 当地特产和食品礼品 ---
      {
        id: "local-specialty",
        titleZh: "当地特产礼品",
        titleEn: "Local Specialty Gifts",
        description: "在特产店选购当地食品和纪念品作为伴手礼",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, we're visiting from China and we want to bring back some local specialties. What's this area famous for?",
            textZh: "你好，我们从中国来旅游，想带些当地特产回去。这里有什么有名的？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Welcome! This region is known for our maple syrup, artisan cheeses, and craft honey. We also have local jams and sauces that make great gifts. Everything in this section is produced within 50 miles of here.",
            textZh: "欢迎！这个地区以枫糖浆、手工奶酪和精酿蜂蜜闻名。我们还有当地的果酱和酱料，很适合送人。这个区域的所有产品都产自方圆50英里内。",
            keyPhrases: [
              { en: "maple syrup", zh: "枫糖浆" },
              { en: "artisan cheeses", zh: "手工奶酪" },
              { en: "craft honey", zh: "精酿蜂蜜" },
              { en: "locally produced", zh: "本地生产的" },
            ],
            vocabNotes: {
              "artisan": { meaningInContext: "在这句话里表示：小批量手工制作的，强调工匠品质和传统工艺", similarUsage: "类似用法：This artisan bread is baked fresh every morning.（这种手工面包每天早上新鲜烘焙）" },
            },
            alternativeExpressions: [
              { textEn: "This region is famous for maple syrup, artisan cheese, and local honey. Everything here is produced within 50 miles.", textZh: "这个地区以枫糖浆、手工奶酪和本地蜂蜜出名。这里的都是方圆50英里内生产的。", actionHint: "看看特色产品", frequency: "common" },
              { textEn: "Our best sellers for tourists are the maple syrup and honey. We also have local jams and sauces — all locally made.", textZh: "游客最爱买的是枫糖浆和蜂蜜。还有当地果酱和酱料——都是本地产的。", actionHint: "了解当地特产", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The maple syrup sounds nice! But can I bring food back to China? I'm worried about customs.",
            textZh: "枫糖浆听起来不错！但食品能带回中国吗？我担心海关。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "That's a smart question. Sealed, commercially packaged items like maple syrup, honey, and sauces are generally fine. Dairy products and fresh items might be restricted. I'd suggest checking with Chinese customs, but most of our packaged goods are safe to travel with.",
            textZh: "问得好。密封的商业包装产品像枫糖浆、蜂蜜和酱料一般没问题。乳制品和新鲜食品可能受限制。建议查一下中国海关的规定，但我们大多数包装产品都可以带。",
            keyPhrases: [
              { en: "sealed", zh: "密封的" },
              { en: "commercially packaged", zh: "商业包装的" },
              { en: "restricted", zh: "受限制的" },
              { en: "customs", zh: "海关" },
            ],
            culturalNote: "中国海关对入境食品有严格规定：肉类、新鲜水果、乳制品通常禁止。密封的糖浆、蜂蜜、调味品一般可以，但建议出发前查最新规定。",
            alternativeExpressions: [
              { textEn: "Sealed stuff like syrup, honey, and sauces should be fine. Skip the dairy and fresh items. Check with Chinese customs to be safe.", textZh: "密封的糖浆、蜂蜜、酱料一般没问题。乳制品和新鲜食品别带。保险起见查一下中国海关。", actionHint: "避开受限食品", frequency: "common" },
              { textEn: "Commercially packaged items are usually okay. Dairy might be restricted. Most of our stuff is safe to take back.", textZh: "商业包装的一般没问题。乳制品可能受限。我们大多数产品都可以带回去。", actionHint: "选择可携带的产品", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, I'll skip the cheese then. Can you put together a gift set with maple syrup and honey? Maybe something nicely packaged?",
            textZh: "那奶酪就不买了。能帮我搭一个枫糖浆和蜂蜜的礼品套装吗？包装好看一点的？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Absolutely! We have a ready-made 'Taste of Vermont' gift box with a bottle of grade A maple syrup, wildflower honey, and maple candy — that's $45. Or I can build a custom box for you. We have these beautiful wooden crates that you can fill with whatever you like.",
            textZh: "当然可以！我们有现成的'佛蒙特风味'礼盒，里面有一瓶A级枫糖浆、野花蜂蜜和枫糖糖果——45美元。或者我可以帮你定制一盒。我们有这些漂亮的木箱，你可以自由搭配。",
            keyPhrases: [
              { en: "grade A", zh: "A级（最高等级）" },
              { en: "wildflower honey", zh: "野花蜂蜜" },
              { en: "maple candy", zh: "枫糖糖果" },
              { en: "wooden crates", zh: "木箱" },
            ],
            vocabNotes: {
              "grade A": { meaningInContext: "在这句话里表示：枫糖浆的最高品质等级，颜色和风味最纯正", similarUsage: "类似用法：This is grade A beef — the highest quality.（这是A级牛肉——最高品质）" },
            },
            alternativeExpressions: [
              { textEn: "We have a ready-made 'Taste of Vermont' gift box for $45. Or I can build a custom one in these wooden crates — you pick what goes in.", textZh: "有现成的'佛蒙特风味'礼盒45美元。也可以用木箱定制——你选里面放什么。", actionHint: "选现成还是定制", frequency: "common" },
              { textEn: "The gift box is $45 with syrup, honey, and candy. Or if you prefer, these wooden crates let you mix and match.", textZh: "礼盒45美元含糖浆、蜂蜜和糖果。如果你更喜欢，木箱可以自由搭配。", actionHint: "看看两个方案", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I love the wooden crate idea! Can I get 5 custom boxes? Each one with maple syrup, honey, and some maple candy. How much per box?",
            textZh: "木箱的主意太好了！能做5个定制礼盒吗？每个装枫糖浆、蜂蜜和一些枫糖糖果。每盒多少钱？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "With the wooden crate, a small bottle of syrup, a jar of honey, and a bag of maple candy, each box would be about $52. For 5 boxes, that's $260. But I'll give you a 10% bulk discount — so $234 total.",
            textZh: "木箱加一小瓶糖浆、一罐蜂蜜和一袋枫糖糖果，每盒大约52美元。5盒是260美元。不过我给你打个九折的批量折扣——总共234美元。",
            keyPhrases: [
              { en: "jar", zh: "罐" },
              { en: "bulk discount", zh: "批量折扣" },
            ],
            alternativeExpressions: [
              { textEn: "Each box is about $52. For 5, that's $260 — but I'll give you 10% off, so $234 total.", textZh: "每盒大约52美元。5盒260——给你打个九折，234美元。", actionHint: "享受批量折扣", frequency: "common" },
              { textEn: "5 custom crates at $52 each would be $260. With a 10% bulk discount, you're looking at $234.", textZh: "5个定制木箱每个52美元一共260。批量折扣打九折，234美元。", actionHint: "确认总价", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a deal. One more question — these glass bottles won't break in my luggage, right? Can you wrap them extra carefully?",
            textZh: "成交。再问一下——这些玻璃瓶放行李箱不会碎吧？能包仔细一点吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "I'll wrap each bottle in bubble wrap and put everything snugly in the crate with tissue paper. I also recommend packing them in the center of your suitcase surrounded by soft clothes. We haven't had any breakage complaints from traveling customers!",
            textZh: "我会用气泡膜包好每个瓶子，再用薄纸把东西在木箱里塞紧。建议放行李箱中间用软衣服围住。我们还没有收到过旅客的碎裂投诉！",
            keyPhrases: [
              { en: "bubble wrap", zh: "气泡膜" },
              { en: "snugly", zh: "紧紧地/贴合地" },
              { en: "tissue paper", zh: "薄纸" },
              { en: "breakage", zh: "碎裂" },
            ],
            alternativeExpressions: [
              { textEn: "I'll bubble-wrap each bottle and pack them tight. Put them in the middle of your suitcase with clothes around them.", textZh: "每个瓶子都用气泡膜包好塞紧。放行李箱中间用衣服围住。", actionHint: "按建议打包", frequency: "common" },
              { textEn: "Don't worry about breakage — we pack everything snugly. Just keep them centered in your luggage with soft things around them.", textZh: "不用担心碎。我们会包得很紧。放行李箱中间周围放软的东西就行。", actionHint: "放心携带", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "You've thought of everything. Let's do it! This is going to be such a unique gift. Everyone back home will love it.",
            textZh: "你想得太周到了。就这么办！这礼物太独特了。国内的人一定会喜欢。",
          },
        ],
      },
    ],
  },

  // ==================== 退税流程 ====================
  {
    id: "shopping-tax-refund",
    category: "shopping",
    titleZh: "购物退税",
    titleEn: "Tax Refund Process",
    description: "在机场或退税点办理购物退税",
    otherRole: "退税柜台工作人员 / 海关",
    otherRoleIcon: "dollar",
    journeyPhase: "return",
    priority: "must",
    flows: [
      {
        id: "airport-refund",
        titleZh: "机场退税流程",
        titleEn: "Airport Tax Refund",
        description: "在机场办理离境退税",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to claim a tax refund. I'm flying back to China today. Here are my tax-free forms and receipts.",
            textZh: "你好，我想办理退税。今天飞回中国。这是我的退税单和收据。",
          },
          {
            speaker: "them",
            role: "退税柜台",
            textEn: "Sure! Let me check your forms. I see you have purchases from three different stores, totaling €850. May I see your passport and boarding pass?",
            textZh: "好的！我看看你的退税单。你在三家不同的店消费了，总共850欧元。能看一下你的护照和登机牌吗？",
            keyPhrases: [
              { en: "tax refund", zh: "退税" },
              { en: "tax-free forms", zh: "退税单" },
              { en: "receipts", zh: "收据" },
              { en: "boarding pass", zh: "登机牌" },
            ],
            alternativeExpressions: [
              { textEn: "Let me look at your forms. I see three stores totaling €850. Can I see your passport and boarding pass?", textZh: "我看看你的退税单。三家店一共850欧元。能看一下护照和登机牌吗？", actionHint: "出示证件", frequency: "common" },
              { textEn: "I'll need your passport and boarding pass to process the refund. Looks like €850 in total from three shops.", textZh: "办理退税需要护照和登机牌。看起来三家店总共850欧元。", actionHint: "准备好所有材料", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here you go. How much will I get back?",
            textZh: "给您。能退多少？",
          },
          {
            speaker: "them",
            role: "退税柜台",
            textEn: "The VAT refund rate varies by country and product, but typically you'll get back about 10 to 12 percent. For your €850, that's approximately €85 to €100. However, there's a processing fee of about €5 per form. Would you like cash in euros, a credit card refund, or Alipay?",
            textZh: "增值税退税率因国家和商品不同，但通常能退回约10%到12%。你的850欧元大约退85到100欧元。不过每张单有大约5欧元手续费。你要现金欧元、信用卡退款，还是支付宝？",
            keyPhrases: [
              { en: "VAT", zh: "增值税（Value Added Tax）" },
              { en: "refund rate", zh: "退税率" },
              { en: "processing fee", zh: "手续费" },
              { en: "Alipay", zh: "支付宝" },
            ],
            culturalNote: "退税通常不能退全部增值税，退税公司会收取手续费。信用卡退款到账较慢（1-3个月），现金当场拿到但可能有更高手续费。",
            alternativeExpressions: [
              { textEn: "You'll get about 10-12% back after the processing fee. For €850, that's roughly €85 to €100. Cash, card, or Alipay?", textZh: "扣手续费后大概退10-12%。850欧大约退85到100欧。现金、信用卡还是支付宝？", actionHint: "选择退款方式", frequency: "common" },
              { textEn: "The refund is about €85 to €100 after fees. We can do cash euros, credit card, or Alipay. Which do you prefer?", textZh: "扣费后大约退85到100欧。可以退现金欧元、信用卡或支付宝。你选哪个？", actionHint: "决定退款方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the credit card refund. Do I need to show the items to customs before checking my bags?",
            textZh: "我选信用卡退款。需要在托运前给海关看商品吗？",
          },
          {
            speaker: "them",
            role: "退税柜台",
            textEn: "Good question! For purchases over €175, customs may want to see the items. I'd recommend getting the customs stamp first, then checking your bags. The customs desk is right over there — look for the 'Détaxe' or 'Tax Free' sign. After they stamp your forms, come back here and I'll process the refund.",
            textZh: "好问题！超过175欧元的商品海关可能要看。建议先去海关盖章，再托运行李。海关柜台就在那边——找'Détaxe'或'Tax Free'的标识。盖完章回来我帮你办退款。",
            keyPhrases: [
              { en: "customs stamp", zh: "海关盖章" },
              { en: "customs desk", zh: "海关柜台" },
              { en: "Détaxe", zh: "退税（法语）" },
              { en: "process the refund", zh: "办理退款" },
            ],
            alternativeExpressions: [
              { textEn: "For items over €175, customs may want to see them first. Get the stamp, then check your bags. Come back here after for the refund.", textZh: "超过175欧的商品海关可能要看。先盖章再托运。盖完回来找我办退款。", actionHint: "先去海关盖章", frequency: "common" },
              { textEn: "I'd recommend visiting customs first — look for the Tax Free sign over there. Once they stamp your forms, bring them back to me.", textZh: "建议先去海关——找那边的Tax Free标识。盖完章拿回来给我。", actionHint: "注意先盖章再托运", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "digital-refund",
        titleZh: "电子退税 / 自助退税",
        titleEn: "Digital / Self-Service Tax Refund",
        description: "使用自助退税机或手机App办理退税",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I see these electronic kiosks for tax refunds. How do they work?",
            textZh: "我看到这些电子退税机。怎么用？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "It's pretty simple! First, scan the barcode on your tax-free form. Then scan your passport. The machine will verify your eligibility automatically. If everything checks out, it prints a validated receipt and you're done — no need to wait in line.",
            textZh: "很简单！先扫描退税单上的条形码。然后扫护照。机器会自动验证你的资格。如果没问题，打印一张验证过的收据就完成了——不用排队。",
            keyPhrases: [
              { en: "electronic kiosks", zh: "电子自助机" },
              { en: "barcode", zh: "条形码" },
              { en: "verify your eligibility", zh: "验证你的资格" },
              { en: "validated receipt", zh: "验证过的收据" },
            ],
            alternativeExpressions: [
              { textEn: "Just scan the barcode on your form, then your passport. If it's approved, it prints a receipt and you're done — no waiting.", textZh: "扫退税单上的条码，再扫护照。通过了打印收据就好——不用排队。", actionHint: "按步骤操作", frequency: "common" },
              { textEn: "It's super easy — barcode first, then passport. The machine does everything automatically. Saves you from standing in line.", textZh: "特别简单——先扫条码再扫护照。机器自动处理。免得排队。", actionHint: "用自助机更快", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The machine says 'Approval Required — Please visit customs counter.' What does that mean?",
            textZh: "机器显示'需要审批——请到海关柜台'。这什么意思？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "That usually happens when the purchase amount is high, or it's a random check. Just take your forms and passport to the customs counter over there. They'll inspect the goods and stamp the form manually. It shouldn't take more than 10 minutes.",
            textZh: "通常是消费金额较大，或者随机抽查。拿着退税单和护照去那边的海关柜台就行。他们会检查商品然后手动盖章。一般不超过10分钟。",
            keyPhrases: [
              { en: "random check", zh: "随机抽查" },
              { en: "inspect the goods", zh: "检查商品" },
              { en: "stamp the form manually", zh: "手动盖章" },
            ],
            alternativeExpressions: [
              { textEn: "That happens when the amount is high or it's a random check. Just take your stuff to the customs desk — they'll stamp it. Should be quick.", textZh: "金额大或随机抽查会这样。拿东西去海关柜台——他们盖章就行。应该很快。", actionHint: "去海关柜台", frequency: "common" },
              { textEn: "Don't worry, it's normal. Sometimes they need to see the items. Head to customs, get the stamp, and you're good.", textZh: "别担心，这很正常。有时候他们要看看商品。去海关盖个章就行。", actionHint: "带商品去海关", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "OK. And I also have the Global Blue app on my phone — can I track my refund status there?",
            textZh: "好的。我手机上也装了Global Blue App——可以在上面查退款进度吗？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Yes! The Global Blue app is very useful. You can track all your refunds, see the status, and even submit your forms digitally at some locations. Just make sure you still drop the original forms in the mailbox before you board — the white copy goes in the Global Blue envelope. Without that, the refund won't be processed.",
            textZh: "可以！Global Blue App很有用。可以追踪所有退税、查状态，有些地方还能电子提交退税单。但一定要在登机前把原件投到邮箱——白色联放进Global Blue的信封。没有原件退款不会处理。",
            keyPhrases: [
              { en: "Global Blue", zh: "环球蓝联（全球最大的退税服务公司）" },
              { en: "track your refunds", zh: "追踪退税进度" },
              { en: "mailbox", zh: "邮箱/投递箱" },
              { en: "won't be processed", zh: "不会处理" },
            ],
            culturalNote: "退税最重要的一步是在机场投递退税原件！很多人拿了现金退款后忘记投递，结果被从信用卡扣回退税金额。",
            alternativeExpressions: [
              { textEn: "The app is great for tracking. But remember — you must drop the original forms in the mailbox before boarding, or the refund won't go through.", textZh: "App追踪很方便。但记住——登机前一定要把原件投到邮箱，不然退款不会处理。", actionHint: "务必投递原件", frequency: "common" },
              { textEn: "You can track everything on the app. Just don't forget to mail the white copy in the Global Blue envelope — that's the most important step.", textZh: "App上可以追踪。千万别忘了把白色联放进Global Blue信封投递——这是最关键的一步。", actionHint: "投递原件最重要", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 免税店购物 ====================
  {
    id: "shopping-duty-free",
    category: "shopping",
    titleZh: "免税店购物",
    titleEn: "Duty-Free Shopping",
    description: "在机场免税店购物，了解限额和规则",
    otherRole: "免税店店员",
    otherRoleIcon: "shopping-bag",
    journeyPhase: "return",
    priority: "must",
    flows: [
      {
        id: "browsing-buying",
        titleZh: "选购商品",
        titleEn: "Browsing & Buying",
        description: "在免税店选购化妆品、酒类等商品",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm looking for some perfume as gifts. How much cheaper is it compared to regular retail?",
            textZh: "你好，我想买些香水送人。比外面零售价便宜多少？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Duty-free prices are typically 20 to 40 percent lower than regular retail, since there's no sales tax or import duty. For example, this Chanel No. 5 is $85 here — it retails for $135 in stores.",
            textZh: "免税价通常比零售价低20%到40%，因为没有销售税和进口税。比如这瓶香奈儿5号这里85美元——外面店里卖135美元。",
            keyPhrases: [
              { en: "duty-free", zh: "免税" },
              { en: "sales tax", zh: "销售税" },
              { en: "import duty", zh: "进口税" },
              { en: "retails for", zh: "零售价是" },
            ],
            alternativeExpressions: [
              { textEn: "Duty-free is usually 20-40% cheaper. This Chanel is $85 here versus $135 outside. Big savings on premium brands.", textZh: "免税一般便宜20-40%。这瓶香奈儿这里85美元，外面135。大牌省很多。", actionHint: "比较价格", frequency: "common" },
              { textEn: "You save a lot here — no sales tax or import duty. This perfume is $50 less than regular retail.", textZh: "这里省很多——没有销售税和进口税。这瓶香水比零售价便宜50美元。", actionHint: "了解免税优势", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a great deal! I'll take two. Can I also look at some whisky? What's the alcohol limit I can bring into China?",
            textZh: "很划算！我要两瓶。能看看威士忌吗？可以带多少酒入境中国？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "China allows you to bring up to 1,500 ml of alcohol — so two standard 750ml bottles. You can also bring up to 400 cigarettes. Beyond that, you'll need to declare and pay duty at Chinese customs.",
            textZh: "中国允许携带最多1500毫升酒——也就是两瓶标准750毫升的。还可以带400支烟。超过的话需要在中国海关申报并缴税。",
            keyPhrases: [
              { en: "alcohol limit", zh: "酒类限额" },
              { en: "1,500 ml", zh: "1500毫升" },
              { en: "declare", zh: "申报" },
              { en: "pay duty", zh: "缴税" },
            ],
            culturalNote: "中国海关对入境免税商品有总价限额（目前约5000元人民币），超过部分需缴税。烟酒有单独的数量限额。",
            alternativeExpressions: [
              { textEn: "China allows 1,500ml of alcohol — two 750ml bottles. Over that, you'll have to declare and pay duty.", textZh: "中国允许带1500毫升酒——两瓶750毫升的。超过要申报缴税。", actionHint: "注意酒类限额", frequency: "common" },
              { textEn: "You can bring two bottles of spirits into China. Just stay under 1,500ml total and you're fine.", textZh: "可以带两瓶烈酒入境中国。不超过1500毫升就没问题。", actionHint: "控制在限额内", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take one bottle of Macallan 18. Can you gift-wrap it?",
            textZh: "我要一瓶麦卡伦18年。能帮我包装成礼物吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Of course! Free gift wrapping for all purchases. Your total for the two perfumes and the whisky is $310. Would you like to pay in dollars, euros, or Chinese yuan? We accept all major currencies and Union Pay.",
            textZh: "当然！所有商品免费礼品包装。两瓶香水加威士忌总共310美元。用美元、欧元还是人民币付款？我们接受各主要货币和银联卡。",
            keyPhrases: [
              { en: "gift wrapping", zh: "礼品包装" },
              { en: "major currencies", zh: "主要货币" },
              { en: "Union Pay", zh: "银联" },
            ],
            alternativeExpressions: [
              { textEn: "Two perfumes and the whisky — $310 total. We take dollars, euros, yuan, and UnionPay. Free gift wrapping too!", textZh: "两瓶香水加威士忌——总共310美元。收美元、欧元、人民币和银联。还免费包装！", actionHint: "选择付款货币", frequency: "common" },
              { textEn: "Your total is $310. You can pay in any major currency. Want me to gift-wrap everything?", textZh: "一共310美元。任何主要货币都收。要帮你礼品包装吗？", actionHint: "准备付款", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "transit-duty-free",
        titleZh: "转机免税购物须知",
        titleEn: "Transit Duty-Free Considerations",
        description: "转机时买免税商品需要注意液体限制等",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I have a connecting flight in Tokyo. If I buy liquids here, can I bring them through security at my transit airport?",
            textZh: "我在东京转机。如果在这里买了液体，能过转机机场的安检吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "That's a really important question. If your duty-free liquids are sealed in a tamper-evident bag — which we provide — most airports will allow them through security. However, rules vary. Japan generally accepts sealed duty-free bags, but you should keep the receipt visible inside the bag.",
            textZh: "这是个很重要的问题。如果你的免税液体密封在防拆袋里——我们会提供——大多数机场安检都允许通过。但规则因地而异。日本一般接受密封的免税袋，但收据要放在袋子里能看到。",
            keyPhrases: [
              { en: "connecting flight", zh: "转机航班" },
              { en: "tamper-evident bag", zh: "防拆袋/安全密封袋" },
              { en: "sealed", zh: "密封的" },
              { en: "receipt visible", zh: "收据能看到" },
            ],
            culturalNote: "转机时免税商品的液体限制是很多旅客忽略的问题。如果防拆袋被打开或破损，转机安检可能不允许带上飞机。建议在最后一程航班的出发地购买液体免税品最安全。",
            alternativeExpressions: [
              { textEn: "Important question! We'll seal your liquids in a tamper-evident bag. Most airports accept them, but keep the receipt visible inside.", textZh: "重要的问题！我们会把液体密封在防拆袋里。大多数机场接受，但收据要放在里面能看到。", actionHint: "保持袋子密封完好", frequency: "common" },
              { textEn: "As long as the duty-free bag stays sealed, most transit airports will let you through. Japan generally accepts sealed bags.", textZh: "只要免税袋保持密封，大多数转机机场都让过。日本一般接受密封袋。", actionHint: "不要打开防拆袋", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What if the bag gets opened during the transit? Would I lose the items?",
            textZh: "如果转机时袋子被打开了怎么办？东西会被没收吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "If the seal is broken, transit security might confiscate liquids over 100ml. To be safe, I'd suggest buying alcohol and perfume at your final departure airport — Tokyo Narita has an excellent duty-free selection. Or, you can check these items in your luggage if you have access to your bags during transit.",
            textZh: "如果封条破了，转机安检可能会没收超过100ml的液体。保险起见，建议在最后出发的机场买酒和香水——东京成田免税店选择很丰富。或者转机时如果能拿到托运行李，可以把这些放进去。",
            keyPhrases: [
              { en: "seal is broken", zh: "封条破了" },
              { en: "confiscate", zh: "没收" },
              { en: "100ml", zh: "100毫升（液体随身限制）" },
              { en: "final departure airport", zh: "最后出发的机场" },
            ],
            alternativeExpressions: [
              { textEn: "If the seal breaks, they might confiscate anything over 100ml. Safest to buy alcohol at your last departure airport.", textZh: "如果封条破了，超过100ml的可能被没收。最安全的是在最后出发的机场买酒。", actionHint: "在最后一站买液体", frequency: "common" },
              { textEn: "Broken seal means transit security could take your liquids. I'd buy perfume here but save the whisky for Narita.", textZh: "封条破了转机安检可能没收液体。建议这里买香水，威士忌留到成田买。", actionHint: "合理规划购物地点", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good advice. I'll buy the perfume here and save the whisky for Narita. That way I won't have to worry about it.",
            textZh: "好建议。我在这里买香水，威士忌留到成田买。这样就不用担心了。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Smart choice! One more tip — you can pre-order online at most airport duty-free shops and pick up at the gate. That way you're guaranteed the item you want. Here, I'll write down the Narita duty-free website for you.",
            textZh: "聪明的选择！再给你一个建议——大多数机场免税店可以网上预订、登机口取货。这样能保证你想要的商品有货。我把成田免税店网址写给你。",
            keyPhrases: [
              { en: "pre-order online", zh: "网上预订" },
              { en: "pick up at the gate", zh: "登机口取货" },
              { en: "guaranteed", zh: "保证有货" },
            ],
            alternativeExpressions: [
              { textEn: "Pro tip — you can pre-order online from most airport duty-free shops and pick up at the gate. Guarantees your item.", textZh: "小建议——大多数机场免税店可以网上预订、登机口取。保证有货。", actionHint: "记下免税店网址", frequency: "common" },
              { textEn: "Most airport duty-free shops let you order ahead online. That way you don't have to worry about them being sold out.", textZh: "大多数机场免税店可以提前在网上订。这样不用担心断货。", actionHint: "提前在网上下单", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },
];
