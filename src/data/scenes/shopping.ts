import type { PresetScene } from "../scene-types";

// ============================================================
// 购物场景 — Shopping Scenes
// 覆盖：服装购物、电子产品、超市购物、便利店、纪念品店
// ============================================================

export const SHOPPING_SCENES: PresetScene[] = [
  // ==================== 服装购物 ====================
  {
    id: "shopping-clothes",
    tags: ["clothes", "衣服", "试穿", "fitting room"],
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
              {
                textEn: "Welcome! Feel free to look around. I'm here if you need anything.",
                textZh: "欢迎！随便看看，需要的话叫我。",
              },
            ],
            keyPhrases: [
              { en: "looking for", zh: "在找" },
              { en: "anything in particular", zh: "特别的东西" },
            ],
            alternativeExpressions: [
              {
                textEn: "Hey! Anything I can help you find today?",
                textZh: "嘿！今天有什么需要帮忙找的吗？",
                actionHint: "告诉店员你想找什么",
                frequency: "common",
              },
              {
                textEn: "Hi! Just browsing, or do you have something in mind?",
                textZh: "你好！随便看看，还是有想要的东西？",
                actionHint: "说明你的需求",
                frequency: "occasional",
              },
            ],
            casualVersion: "Hey! Welcome. Lookin' for anything specific?",
            formalityVariants: {
              casual: "Hey! Welcome. Lookin' for anything specific?",
              standard: "Hi there! Welcome to the store. Are you looking for anything in particular?",
              formal:
                "Good morning/afternoon, and welcome to our establishment. May I assist you in finding something specific today?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I'm looking for a jacket. Something lightweight for spring.",
            textZh: "是的，我想找一件夹克。春天穿的，轻薄一点的。",
            casualVersion: "Yeah, I need a light jacket for spring.",
            commonMistake: {
              wrong: "I want to find a jacket.",
              correct: "I'm looking for a jacket.",
              explanation: "I want to find 听起来很直接，I'm looking for 更自然。",
            },
            formalityVariants: {
              casual: "Yeah, lookin' for a jacket. Somethin' light for spring.",
              standard: "Yes, I'm looking for a jacket. Something lightweight for spring.",
              formal:
                "Yes, I am hoping to find a jacket, specifically a lightweight option suitable for the spring season.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Sure! We have a nice selection over here. What size are you?",
            textZh: "好的！这边有不少选择。您穿多大号的？",
            variations: [
              {
                textEn: "Great, our spring collection is right this way. Do you know your size?",
                textZh: "太好了，我们的春季系列在这边。您知道自己的尺码吗？",
              },
            ],
            keyPhrases: [
              { en: "selection", zh: "选择/款式" },
              { en: "what size", zh: "什么尺码" },
            ],
            responseTip: '如果不确定尺码，可以说 "I\'m not sure, maybe a medium?"',
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn: "What size do you usually wear? We've got lots of options.",
                textZh: "您平时穿多大号？我们有很多选择。",
                actionHint: "说出你的尺码",
                frequency: "common",
              },
              {
                textEn: "These just came in — they run a little small, so you might want to size up.",
                textZh: "这些刚到的——偏小，您可能要拿大一号。",
                actionHint: "注意尺码偏差",
                frequency: "occasional",
              },
            ],
            casualVersion: "Sure! Got a good selection over here. What size are ya?",
            formalityVariants: {
              casual: "Sure! Got a good selection over here. What size are ya?",
              standard: "Sure! We have a nice selection over here. What size are you?",
              formal:
                "Certainly! We have an excellent selection available in this area. Could you please tell me your size?",
            },
          },
          {
            speaker: "you",
            textEn: "I'm usually a medium. Can I try this one on?",
            textZh: "我一般穿中号。这件可以试穿吗？",
            culturalNote: "美国尺码和亚洲尺码不同，通常需要小一到两号。建议先试穿。",
            casualVersion: "Usually a medium. Can I try this on?",
            commonMistake: {
              wrong: "I usually wear medium.",
              correct: "I'm usually a medium.",
              explanation: "I'm a medium 是地道的说法，wear medium 虽能理解但不自然。",
            },
            formalityVariants: {
              casual: "Usually a medium. Can I try this on?",
              standard: "I'm usually a medium. Can I try this one on?",
              formal: "Typically, I wear a medium size. May I please try this particular item on?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Of course! The fitting rooms are right over there. I'll grab you a medium. Would you like to try a small as well, just in case?",
            textZh: "当然可以！试衣间在那边。我帮您拿中号。要不要也试一件小号，以防万一？",
            variations: [
              {
                textEn: "Absolutely! Let me unlock a fitting room for you. Here's the medium.",
                textZh: "没问题！我帮您开一间试衣间。这是中号的。",
              },
            ],
            keyPhrases: [
              { en: "fitting rooms", zh: "试衣间" },
              { en: "grab you a medium", zh: "帮您拿中号" },
              { en: "just in case", zh: "以防万一" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure thing! Changing rooms are right around the corner. I'll bring you both sizes.",
                textZh: "没问题！更衣室就在转角。我把两个号都给您拿来。",
                actionHint: "去试衣间试穿",
                frequency: "common",
              },
              {
                textEn: "No problem! Try it on and let me know how it fits.",
                textZh: "没问题！试试看，告诉我合不合身。",
                actionHint: "试完告诉店员感觉",
                frequency: "common",
              },
            ],
            casualVersion:
              "For sure! Fitting rooms are right there. I'll grab a medium. Wanna try a small too, just in case?",
            formalityVariants: {
              casual:
                "For sure! Fitting rooms are right there. I'll grab a medium. Wanna try a small too, just in case?",
              standard:
                "Of course! The fitting rooms are right over there. I'll grab you a medium. Would you like to try a small as well, just in case?",
              formal:
                "Certainly! The fitting rooms are conveniently located just over there. I will retrieve a medium size for you. Would you also care to try a small, merely as a precautionary measure?",
            },
          },
          {
            speaker: "you",
            textEn: "Sure, I'll try both. Thanks.",
            textZh: "好的，两件都试试。谢谢。",
            commonMistake: {
              wrong: "Okay, I try both.",
              correct: "Sure, I'll try both.",
              explanation: "“I'll” 表示意愿和计划，比直接说 “I try” 更自然。",
            },
            casualVersion: "Yeah, I'll try both. Thanks.",
            formalityVariants: {
              casual: "Yeah, I'll try both. Thanks.",
              standard: "Sure, I'll try both. Thanks.",
              formal: "Yes, I would be pleased to try on both sizes. Thank you.",
            },
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
              {
                textEn: "So, how's it looking? Does it work for you?",
                textZh: "怎么样？合适吗？",
                actionHint: "说出试穿感受",
                frequency: "common",
              },
              {
                textEn: "How'd the medium feel? Need a different size?",
                textZh: "中号感觉怎么样？要换个尺码吗？",
                actionHint: "描述合不合身",
                frequency: "occasional",
              },
            ],
            casualVersion: "How'd it go? Medium fit?",
            formalityVariants: {
              casual: "How'd it go? Medium fit?",
              standard: "How did it go? Does the medium fit?",
              formal: "How was your fitting experience? Did the medium size prove to be a suitable fit?",
            },
          },
          {
            speaker: "you",
            textEn: "The medium is a little loose. The small fits much better. I'll take the small.",
            textZh: "中号有点松。小号更合身。我要小号的。",
            culturalNote: '"I\'ll take it" 是购物时决定要买的标准说法。',
            casualVersion: "Medium's a bit loose. Small fits way better. I'll take the small.",
            commonMistake: {
              wrong: "The medium is a little big.",
              correct: "The medium is a little loose.",
              explanation: "形容衣服尺寸不合适，loose 比 big 更常用和地道。",
            },
            formalityVariants: {
              casual: "Medium's a bit loose. Small fits way better. I'll take the small.",
              standard: "The medium is a little loose. The small fits much better. I'll take the small.",
              formal:
                "The medium size proved to be slightly loose. The small size, however, offers a much more appropriate fit. I shall take the small.",
            },
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
              {
                textEn: "Nice pick! That really suits you. It's $89 — cash or card?",
                textZh: "选得好！很适合你。89美元——现金还是刷卡？",
                actionHint: "选择付款方式",
                frequency: "common",
              },
              {
                textEn: "That one's a great fit. Will you be paying with cash or card today?",
                textZh: "这件很合身。今天付现金还是刷卡？",
                actionHint: "告诉店员付款方式",
                frequency: "common",
              },
            ],
            casualVersion: "Good choice! Looks great on ya. It's 89 bucks. Card or cash?",
            formalityVariants: {
              casual: "Good choice! Looks great on ya. It's 89 bucks. Card or cash?",
              standard: "Great choice! That looks really good on you. It's $89. Would you like to pay by card or cash?",
              formal:
                "An excellent selection! That garment is quite becoming on you. The total comes to $89. How would you prefer to complete your transaction, by credit card or with cash?",
            },
          },
          {
            speaker: "you",
            textEn: "Card, please. Do you take Visa?",
            textZh: "刷卡。你们收 Visa 吗？",
            casualVersion: "Card. Y'all take Visa?",
            commonMistake: {
              wrong: "Do you receive Visa?",
              correct: "Do you take Visa?",
              explanation: "表达商店接受某种支付方式，应使用 take 或 accept。",
            },
            formalityVariants: {
              casual: "Card. Y'all take Visa?",
              standard: "Card, please. Do you take Visa?",
              formal: "I will be paying by credit card, please. May I inquire if you accept Visa?",
            },
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
              {
                textEn: "Yep, Visa works great. Do you need a bag for that?",
                textZh: "可以的，Visa没问题。需要袋子吗？",
                actionHint: "回答是否要袋子",
                frequency: "common",
              },
              {
                textEn: "We take all major cards. Want me to bag it up for you?",
                textZh: "主流信用卡都收。要帮您装袋吗？",
                actionHint: "说明是否需要袋子",
                frequency: "occasional",
              },
            ],
            casualVersion: "Yeah, we take Visa, Mastercard, Apple Pay. Need a bag?",
            formalityVariants: {
              casual: "Yeah, we take Visa, Mastercard, Apple Pay. Need a bag?",
              standard: "Yes, we accept Visa, Mastercard, and Apple Pay. Would you like a bag?",
              formal: "Yes, we do accept Visa, Mastercard, and Apple Pay. Would you care for a shopping bag?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please. Thank you!",
            textZh: "好的，谢谢！",
            casualVersion: "Yeah, please. Thanks!",
            formalityVariants: {
              casual: "Yeah, please. Thanks!",
              standard: "Yes, please. Thank you!",
              formal: "Yes, I would appreciate that, thank you very much.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Here's your receipt. You have 30 days to return or exchange with the receipt. Enjoy your new jacket!",
            textZh: "给您收据。凭收据30天内可以退换。穿着愉快！",
            commonMistake: {
              wrong: "Here is your receipt.",
              correct: "Here's your receipt.",
              explanation: "口语中常用缩写 'Here's'。",
            },
            keyPhrases: [
              { en: "receipt", zh: "收据" },
              { en: "30 days", zh: "30天" },
              { en: "return or exchange", zh: "退换" },
            ],
            alternativeExpressions: [
              {
                textEn: "Here you go! Keep the receipt — you've got 30 days if you change your mind.",
                textZh: "给您！收据留好——30天内改主意都可以。",
                actionHint: "保管好收据",
                frequency: "common",
              },
              {
                textEn: "All done! The return policy is 30 days with your receipt. Enjoy!",
                textZh: "搞定！凭收据30天内可退换。好好穿！",
                actionHint: "记住退换政策",
                frequency: "occasional",
              },
            ],
            casualVersion: "Here's your receipt. Got 30 days to return or exchange with it. Enjoy the new jacket!",
            formalityVariants: {
              casual: "Here's your receipt. Got 30 days to return or exchange with it. Enjoy the new jacket!",
              standard:
                "Here's your receipt. You have 30 days to return or exchange with the receipt. Enjoy your new jacket!",
              formal:
                "Here is your receipt for the transaction. You have a period of 30 days to return or exchange this item, provided you retain the receipt. We hope you thoroughly enjoy your new jacket!",
            },
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
            casualVersion: "Hey, bought this jacket yesterday, but it doesn't fit right. Wanna swap it.",
            commonMistake: {
              wrong: "I want to exchange it.",
              correct: "I'd like to exchange it.",
              explanation: "“I want to” 听起来更直接生硬，用 “I'd like to” 更礼貌。",
            },
            formalityVariants: {
              casual: "Hey, this jacket doesn't fit, can I swap it?",
              standard: "Hi, I bought this jacket yesterday, but it doesn't fit right. I'd like to exchange it.",
              formal:
                "Good morning/afternoon, I purchased this jacket yesterday; however, it appears to be an incorrect size. I would be grateful if I could exchange it.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "I'm sorry to hear that. Do you have your receipt with you?",
            textZh: "很抱歉。您带收据了吗？",
            variations: [
              {
                textEn: "No problem. Can I see your receipt? Are the tags still on?",
                textZh: "没问题。能看一下收据吗？标签还在吗？",
              },
            ],
            keyPhrases: [
              { en: "receipt", zh: "收据" },
              { en: "tags", zh: "标签" },
            ],
            alternativeExpressions: [
              {
                textEn: "Oh no, sorry to hear that. Do you still have the receipt and tags?",
                textZh: "哎呀，不好意思。收据和标签还在吗？",
                actionHint: "出示收据和标签",
                frequency: "common",
              },
              {
                textEn: "That's no problem. Just need to see your proof of purchase.",
                textZh: "没问题。看一下购买凭证就行。",
                actionHint: "出示购买凭证",
                frequency: "occasional",
              },
            ],
            casualVersion: "Oh, sorry 'bout that. Got your receipt?",
            commonMistake: {
              wrong: "Do you have receipt?",
              correct: "Do you have your receipt with you?",
              explanation: "缺少冠词或物主代词。正确的说法更自然。",
            },
            formalityVariants: {
              casual: "Oh, sorry. Got your receipt?",
              standard: "I'm sorry to hear that. Do you have your receipt with you?",
              formal: "My apologies. Do you happen to have the purchase receipt available?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, here it is. The tags are still on. I just need a larger size.",
            textZh: "有的，在这里。标签还在。我只需要大一号的。",
            casualVersion: "Yep, here it is. Tags are still on. Just need a bigger size.",
            commonMistake: {
              wrong: "The tags still on.",
              correct: "The tags are still on.",
              explanation: "英语句子需要动词，不能省略 be 动词。",
            },
            formalityVariants: {
              casual: "Yep, here. Tags are on. Just need a bigger size.",
              standard: "Yes, here it is. The tags are still on. I just need a larger size.",
              formal: "Yes, I do. Here it is. The original tags remain attached. I simply require a larger size.",
            },
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
              {
                textEn: "Let me see... Yep, we've got a medium. Want to try it on first?",
                textZh: "我看看……有的，中号有货。要先试一下吗？",
                actionHint: "去试穿",
                frequency: "common",
              },
              {
                textEn: "Good news, we have your size. Should I grab it so you can try it?",
                textZh: "好消息，有你的号。要我拿过来试试吗？",
                actionHint: "确认是否要试穿",
                frequency: "occasional",
              },
            ],
            casualVersion: "Lemme check for a medium... Yep, we do. Wanna try it on first?",
            commonMistake: {
              wrong: "Try on first?",
              correct: "Would you like to try it on first?",
              explanation: "省略太多，听起来不自然。需要有主语和助动词。",
            },
            formalityVariants: {
              casual: "Lemme check for a medium... Yep. Wanna try it?",
              standard: "Let me check if we have a medium in stock... Yes, we do. Would you like to try it on first?",
              formal:
                "Allow me to ascertain if we have a medium size in stock... Yes, it appears we do. Would you care to try it on prior to the exchange?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please. I want to make sure it fits this time.",
            textZh: "好的。这次我要确认合身再说。",
            casualVersion: "Yeah, please. Wanna make sure it fits this time.",
            commonMistake: {
              wrong: "I want make sure it fits.",
              correct: "I want to make sure it fits.",
              explanation: "“want” 后接动词原形时，通常需要用 “to” 连接。",
            },
            formalityVariants: {
              casual: "Yeah, please. Wanna make sure it fits this time.",
              standard: "Yes, please. I want to make sure it fits this time.",
              formal: "Yes, that would be appreciated. I would like to ensure a proper fit on this occasion.",
            },
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
              {
                textEn: "The fitting room's all yours. No rush!",
                textZh: "试衣间空着呢。不着急！",
                actionHint: "去试穿",
                frequency: "common",
              },
              {
                textEn: "Right this way — room number 3 is open. Take as long as you need.",
                textZh: "这边请——3号试衣间空着。慢慢试。",
                actionHint: "去指定试衣间",
                frequency: "occasional",
              },
            ],
            casualVersion: "Go on, fitting room's open. No rush.",
            commonMistake: {
              wrong: "You can go to fitting room.",
              correct: "Go ahead, the fitting room is open.",
              explanation: "“Go ahead” 是更自然的邀请表达，而不是直接的“你可以去”。",
            },
            formalityVariants: {
              casual: "Fitting room's open. Go on, no rush.",
              standard: "Go ahead, the fitting room is open. Take your time.",
              formal: "Please proceed, the fitting room is available for your use. Take your time as needed.",
            },
          },
          {
            speaker: "you",
            textEn: "This one fits perfectly. Can I exchange it?",
            textZh: "这件完美合身。可以换吗？",
            casualVersion: "This one's perfect. Can I swap it?",
            commonMistake: {
              wrong: "Can I exchange?",
              correct: "Can I exchange it?",
              explanation: "“exchange” 是及物动词，需要宾语 “it”。",
            },
            formalityVariants: {
              casual: "This one's perfect. Can I swap it?",
              standard: "This one fits perfectly. Can I exchange it?",
              formal: "This item fits perfectly. May I proceed with the exchange?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Since it's the same price, I'll just do a straight exchange. No additional charge. Here's your updated receipt.",
            textZh: "价格一样，直接换就行了。不用补差价。给您新的收据。",
            keyPhrases: [
              { en: "straight exchange", zh: "直接换" },
              { en: "no additional charge", zh: "不用补差价" },
              { en: "updated receipt", zh: "新的收据" },
            ],
            alternativeExpressions: [
              {
                textEn: "Same price, so it's a simple swap. Here's your new receipt.",
                textZh: "价格一样，直接换就好。给您新收据。",
                actionHint: "拿好新收据",
                frequency: "common",
              },
              {
                textEn: "Easy exchange — no extra charge since it's the same item. All done!",
                textZh: "简单换货——同款不用加钱。搞定了！",
                actionHint: "确认换货完成",
                frequency: "occasional",
              },
            ],
            casualVersion: "Same price, so it's a straight swap. No extra cost. Here's your new receipt.",
            commonMistake: {
              wrong: "No additional money.",
              correct: "No additional charge.",
              explanation: "“charge” 是指费用、收费，比“money”更准确。",
            },
            formalityVariants: {
              casual: "Same price, so it's a straight swap. No extra cost. Here's your new receipt.",
              standard:
                "Since it's the same price, I'll just do a straight exchange. No additional charge. Here's your updated receipt.",
              formal:
                "Given that the price points are identical, we can facilitate a direct exchange without any additional charge. Here is your updated receipt.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. What if I need to return it instead? What's the policy?",
            textZh: "谢谢。如果我想退货呢？退货政策是什么？",
            casualVersion: "Thanks. What if I need to return it instead? What's the policy?",
            commonMistake: {
              wrong: "What is the policy for return?",
              correct: "What's the policy?",
              explanation: "在口语中，直接问 “What's the policy?” 表达“政策是什么”更自然。",
            },
            formalityVariants: {
              casual: "Thanks. What if I return it instead? What's the policy?",
              standard: "Thank you. What if I need to return it instead? What's the policy?",
              formal: "Thank you. Should I decide to return it instead, could you please outline the return policy?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "You can return any item within 30 days with the receipt for a full refund. After 30 days, we can only offer store credit. Sale items are final sale — no returns.",
            textZh: "凭收据30天内可以全额退款。30天后只能换成店铺积分。打折商品不能退。",
            culturalNote: "美国商店退换货政策一般很宽松，但打折商品通常 'final sale'。",
            keyPhrases: [
              { en: "full refund", zh: "全额退款" },
              { en: "store credit", zh: "店铺积分" },
              { en: "final sale", zh: "不能退/最终销售" },
              { en: "within 30 days", zh: "30天内" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Our return window is 30 days for a full refund. After that, we can do store credit. Just keep in mind, sale items are non-returnable.",
                textZh: "30天内全额退款。之后只能给店铺积分。提醒一下，打折商品不能退。",
                actionHint: "了解退货期限",
                frequency: "common",
              },
              {
                textEn:
                  "Bring it back within a month with the receipt and you'll get your money back. No returns on clearance stuff though.",
                textZh: "一个月内带收据来就能退钱。不过清仓商品不退。",
                actionHint: "记住退货规则",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "You got 30 days with the receipt for a full refund. After that, just store credit. Sale stuff is final, no returns.",
            commonMistake: {
              wrong: "Sale items no returns.",
              correct: "Sale items are final sale — no returns.",
              explanation: "“final sale” 是一个固定搭配，表示商品售出后不能退货。省略动词和短语不自然。",
            },
            formalityVariants: {
              casual:
                "You got 30 days for a full refund with the receipt. After that, just store credit. Sale stuff is final, no returns.",
              standard:
                "You can return any item within 30 days with the receipt for a full refund. After 30 days, we can only offer store credit. Sale items are final sale — no returns.",
              formal:
                "You are eligible for a full refund on any item returned within 30 days, provided the original receipt is presented. Beyond 30 days, only store credit will be issued. Please note that all sale items are considered final sale and are not eligible for returns.",
            },
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
            casualVersion: "Hey, got this shirt in a large?",
            culturalNote: "美国购物时问尺寸通常直接说，不用过多铺垫",
            commonMistake: {
              wrong: "Do you have large of this shirt?",
              correct: "Do you have this shirt in a large?",
              explanation: "in a large 是英语中询问商品尺寸的常见表达。",
            },
            formalityVariants: {
              casual: "Got this shirt in a large?",
              standard: "Excuse me, do you have this shirt in a large?",
              formal: "Pardon me, I was wondering if you might have this particular shirt available in a size large?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Let me check... I'm sorry, we're sold out of large in that color. We only have small and medium left.",
            textZh: "我看看……抱歉，这个颜色的大号卖完了。只剩小号和中号了。",
            variations: [
              {
                textEn: "Unfortunately, large is out of stock right now. Would you like me to check another color?",
                textZh: "不好意思，大号目前断货了。要不我帮您看看别的颜色？",
              },
            ],
            keyPhrases: [
              { en: "sold out", zh: "卖完了" },
              { en: "out of stock", zh: "断货/没货" },
              { en: "only have...left", zh: "只剩……了" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn: "Sorry, we're all out of large in that one. Can I show you something similar?",
                textZh: "抱歉，那个大号卖光了。我给你看看类似的？",
                actionHint: "可以看看替代选择",
                frequency: "common",
              },
              {
                textEn: "Hmm, large is gone in that color. We might have it in other colors though.",
                textZh: "嗯，这个颜色大号没了。不过可能有别的颜色。",
                actionHint: "问问别的颜色",
                frequency: "occasional",
              },
            ],
            casualVersion: "Lemme check... Ah, sorry, we're outta large in that color. Only got small and medium.",
            formalityVariants: {
              casual: "Lemme check... Oh, sorry, no large in that color. Just small and medium.",
              standard:
                "Let me check... I'm sorry, we're sold out of large in that color. We only have small and medium left.",
              formal:
                "Allow me to verify... My apologies, we appear to be out of the large size in that specific color. We currently only have small and medium sizes remaining.",
            },
          },
          {
            speaker: "you",
            textEn: "That's a shame. Do you have it in a different color in large?",
            textZh: "太可惜了。大号的有别的颜色吗？",
            casualVersion: "Bummer. Got it in large, but a different color?",
            commonMistake: {
              wrong: "Do you have large in different color?",
              correct: "Do you have it in a different color in large?",
              explanation: "in a different color 和 in large 是搭配习惯。",
            },
            formalityVariants: {
              casual: "That stinks. Got it in large, different color?",
              standard: "That's a shame. Do you have it in a different color in large?",
              formal:
                "That is unfortunate. Would you happen to have this item available in a large size, but in an alternative color?",
            },
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
              {
                textEn: "We've got large in navy and gray. Want to take a look?",
                textZh: "大号有海军蓝和灰色的。要看看吗？",
                actionHint: "看看其他颜色",
                frequency: "common",
              },
              {
                textEn: "There's a navy blue and a gray left in large. I can grab them for you.",
                textZh: "大号还剩海军蓝和灰色。我帮你拿过来？",
                actionHint: "让店员拿来看看",
                frequency: "occasional",
              },
            ],
            casualVersion: "Yeah, got large in navy blue and gray. Wanna see 'em?",
            formalityVariants: {
              casual: "Yep, large in navy blue and gray. Wanna see?",
              standard: "We have large in navy blue and gray. Would you like to see them?",
              formal:
                "Certainly, we do have the large size available in both navy blue and gray. Would you care to take a look at those options?",
            },
          },
          {
            speaker: "you",
            textEn: "I really wanted the white one. Could you check if another store has it?",
            textZh: "我真的想要白色的。能帮我查查别的店有没有吗？",
            casualVersion: "Really wanted the white one. Could you check if another store's got it?",
            commonMistake: {
              wrong: "Can you help me check if another store has it?",
              correct: "Could you check if another store has it?",
              explanation: "Could you check 比 Can you help me check 更委婉自然。",
            },
            formalityVariants: {
              casual: "Just really wanted the white. Can you check another store for it?",
              standard: "I really wanted the white one. Could you check if another store has it?",
              formal:
                "I was quite set on the white version. Would it be possible for you to check if another location might have it in stock?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Sure, let me look that up... Our downtown location has two large in white. I can have it transferred here, or you could order it online for home delivery.",
            textZh: "好的，我帮您查一下……市中心店有两件白色大号。我可以帮您调货过来，或者您可以网上下单，送货到家。",
            variations: [
              {
                textEn:
                  "I can check other branches. Or if you prefer, we can order it online and ship it to your hotel.",
                textZh: "我可以查其他分店。或者您愿意的话，可以网上订，寄到您的酒店。",
              },
            ],
            keyPhrases: [
              { en: "transferred", zh: "调货" },
              { en: "order online", zh: "网上下单" },
              { en: "home delivery", zh: "送货到家" },
              { en: "other branches", zh: "其他分店" },
            ],
            alternativeExpressions: [
              {
                textEn: "I can check other stores for you. Or you could order it on our website and have it delivered.",
                textZh: "我帮你查查别的店。或者可以在我们网站下单送货。",
                actionHint: "选择调货或网上下单",
                frequency: "common",
              },
              {
                textEn: "Our other location has it. I can have it shipped here, or you can buy it online.",
                textZh: "我们另一家店有。可以调过来，或者你网上买。",
                actionHint: "决定怎么拿到商品",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Sure, lemme look... Okay, downtown store's got two large white ones. I can get it sent here, or you can order it online for home delivery.",
            culturalNote: "美国零售店常提供店内调货或邮寄服务，很方便。",
            formalityVariants: {
              casual:
                "Yeah, lemme see... Downtown's got two large white. Can transfer it here, or you can order online for home delivery.",
              standard:
                "Sure, let me look that up... Our downtown location has two large in white. I can have it transferred here, or you could order it online for home delivery.",
              formal:
                "Certainly, allow me to check for you... It appears our downtown branch currently has two large white shirts in stock. We can arrange for a transfer to this location, or you have the option to order it online for direct home delivery.",
            },
          },
          {
            speaker: "you",
            textEn: "How long would the transfer take?",
            textZh: "调货需要多长时间？",
            casualVersion: "How long for the transfer?",
            commonMistake: {
              wrong: "How long does the transfer take?",
              correct: "How long would the transfer take?",
              explanation: "Would 用来询问未来事件的预估时间更自然。",
            },
            formalityVariants: {
              casual: "How long for transfer?",
              standard: "How long would the transfer take?",
              formal: "Approximately how long would a transfer of the item typically entail?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Usually 2-3 business days. We'll send you a text when it arrives. Or if you order online, it can ship to your address within 5 days.",
            textZh: "一般2-3个工作日。到了我们会发短信通知您。如果网上下单，5天内可以寄到您的地址。",
            keyPhrases: [
              { en: "2-3 business days", zh: "2-3个工作日" },
              { en: "send you a text", zh: "发短信通知您" },
              { en: "ship to your address", zh: "寄到您的地址" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It takes a couple of days. We'll text you when it's here. Or you can order online for delivery.",
                textZh: "要两三天。到了我们发短信通知你。也可以网上下单送货。",
                actionHint: "选择合适的方式",
                frequency: "common",
              },
              {
                textEn: "About 2 to 3 days for a store transfer. Online orders ship in about 5 days.",
                textZh: "调货大概2到3天。网上下单大约5天送到。",
                actionHint: "根据行程选择",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Usually 2-3 biz days. We'll text ya when it gets here. Or online, ships to your place in 5 days.",
            formalityVariants: {
              casual: "Usually 2-3 days. We'll text you. Online order ships in 5.",
              standard:
                "Usually 2-3 business days. We'll send you a text when it arrives. Or if you order online, it can ship to your address within 5 days.",
              formal:
                "Typically, the transfer process takes approximately 2-3 business days. We will notify you via text message upon its arrival. Alternatively, if you opt for an online order, it can be shipped directly to your address within 5 days.",
            },
          },
          {
            speaker: "you",
            textEn: "I'm only here for a few days. I'll just order it online. Can you help me with that?",
            textZh: "我只待几天。那我就网上下单吧。你能帮我弄一下吗？",
            casualVersion: "Only here for a few days. I'll just order it online. Can you help me out with that?",
            commonMistake: {
              wrong: "Can you help me do that?",
              correct: "Can you help me with that?",
              explanation: "help me with that 是更地道、更礼貌的请求帮助方式。",
            },
            formalityVariants: {
              casual: "Only here for a bit. Just order online. Can you help?",
              standard: "I'm only here for a few days. I'll just order it online. Can you help me with that?",
              formal:
                "Given my limited time here, I believe ordering it online would be the most suitable option. Would you be able to assist me with that process?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Absolutely! Here's the QR code for our website. Just scan it and search for the style number — it's on this tag. You'll get free shipping for orders over $50.",
            textZh: "当然！这是我们网站的二维码。扫一下，搜这个吊牌上的款号就行。满50美元免运费。",
            keyPhrases: [
              { en: "QR code", zh: "二维码" },
              { en: "style number", zh: "款号" },
              { en: "free shipping", zh: "免运费" },
              { en: "orders over $50", zh: "满50美元" },
            ],
            alternativeExpressions: [
              {
                textEn: "Here's our website — just scan this code. Free shipping over $50!",
                textZh: "这是我们的网站——扫这个二维码就行。满50美元免运费！",
                actionHint: "扫码下单",
                frequency: "common",
              },
              {
                textEn: "You can order it on our app too. Look up the style number on the tag.",
                textZh: "也可以在我们的App上下单。查吊牌上的款号就行。",
                actionHint: "用款号搜索下单",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Totally! Here's the QR for our site. Just scan it, search the style number — it's on this tag. Free shipping over $50.",
            culturalNote: "美国零售店二维码通常是提供信息或链接，很少用于直接支付。",
            formalityVariants: {
              casual: "Yep! QR code for the site here. Scan, search style number on the tag. Free shipping over $50.",
              standard:
                "Absolutely! Here's the QR code for our website. Just scan it and search for the style number — it's on this tag. You'll get free shipping for orders over $50.",
              formal:
                "Certainly! Here is the QR code providing access to our website. Kindly scan it and then search using the style number, which you will find displayed on this tag. Please note that complimentary shipping is provided for all orders exceeding $50.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 电子产品 ====================
  {
    id: "shopping-electronics",
    tags: ["electronics", "电子", "phone", "手机"],
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
            casualVersion: "Hey, lookin' for a new phone. What's new?",
            culturalNote: "美国购物直接说需求，不必客套。",
            commonMistake: {
              wrong: "I want to buy a new phone.",
              correct: "I'd like to buy a new phone.",
              explanation: "I want 听起来太直接，I'd like 更礼貌。",
            },
            formalityVariants: {
              casual: "Hey, lookin' for a new phone. What's new?",
              standard: "Hi, I'd like a new phone. Can you tell me about the latest models?",
              formal: "Good morning/afternoon. I am interested in purchasing a new mobile phone. Could you please present the most current models available?",
            },
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn:
              "Of course! Our most popular model right now is the Galaxy S25. We also have the iPhone 16 and the Pixel 9. Are you looking for anything specific — camera quality, battery life, or budget?",
            textZh:
              "当然！目前最畅销的是 Galaxy S25。我们也有 iPhone 16 和 Pixel 9。您有什么特别的需求吗——相机、续航还是预算方面？",
            casualVersion: "Sure! Most popular's the S25. Got the iPhone 16 and Pixel 9 too. Anything specific? Camera, battery, budget?",
            formalityVariants: {
              casual: "Sure! Most popular's the S25. Got the iPhone 16 and Pixel 9 too. Anything specific? Camera, battery, budget?",
              standard: "Of course! Our most popular model right now is the Galaxy S25. We also have the iPhone 16 and the Pixel 9. Are you looking for anything specific — camera quality, battery life, or budget?",
              formal: "Certainly! Our current leading model is the Galaxy S25. Additionally, we stock the iPhone 16 and the Pixel 9. Do you have any particular preferences regarding camera performance, battery longevity, or budgetary constraints?",
            },
            variations: [
              {
                textEn: "Sure! What's most important to you — the camera, battery, or price?",
                textZh: "好的！您最看重什么——拍照、电池还是价格？",
              },
            ],
            keyPhrases: [
              { en: "most popular", zh: "最畅销的" },
              { en: "camera quality", zh: "相机质量" },
              { en: "battery life", zh: "续航/电池寿命" },
              { en: "budget", zh: "预算" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn: "We've got a few great options. What matters most to you — camera, battery, or price?",
                textZh: "我们有好几款不错的。你最看重什么——拍照、电池还是价格？",
                actionHint: "说出你的需求",
                frequency: "common",
              },
              {
                textEn: "The top sellers right now are the Galaxy S25 and iPhone 16. What are you mainly using it for?",
                textZh: "现在卖得最好的是Galaxy S25和iPhone 16。你主要用来做什么？",
                actionHint: "描述使用场景",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I mainly care about camera quality and storage. How much storage does the Galaxy S25 have?",
            textZh: "我主要看重拍照和存储。Galaxy S25 有多大存储空间？",
            casualVersion: "Mainly camera and storage. S25 storage options?",
            commonMistake: {
              wrong: "How many storage does Galaxy S25 have?",
              correct: "How much storage does Galaxy S25 have?",
              explanation: "storage 是不可数名词，用 how much 而非 how many。",
            },
            formalityVariants: {
              casual: "Mainly camera and storage. S25 storage options?",
              standard: "I mainly care about camera quality and storage. How much storage does the Galaxy S25 have?",
              formal: "My primary concerns are camera quality and storage capacity. What are the available storage options for the Galaxy S25?",
            },
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn:
              "It comes in 128GB, 256GB, and 512GB. The 256GB is the most popular — it's $999. The camera is excellent, with a 200-megapixel main sensor and 5x optical zoom.",
            textZh:
              "有128GB、256GB和512GB三个版本。256GB最受欢迎，999美元。相机非常出色，主摄2亿像素，还有5倍光学变焦。",
            casualVersion: "Comes in 128, 256, 512. 256's most popular, $999. Camera's insane, 200MP, 5x zoom.",
            formalityVariants: {
              casual: "Comes in 128, 256, 512. 256's most popular, $999. Camera's insane, 200MP, 5x zoom.",
              standard: "It comes in 128GB, 256GB, and 512GB. The 256GB is the most popular — it's $999. The camera is outstanding with a 200MP main lens and 5x optical zoom.",
              formal: "It is available in 128GB, 256GB, and 512GB configurations. The 256GB model is our most frequently selected option, priced at $999. Its camera system is exceptional, featuring a 200-megapixel main lens and 5x optical zoom capabilities.",
            },
            keyPhrases: [
              { en: "comes in", zh: "有……版本" },
              { en: "megapixel", zh: "百万像素" },
              { en: "optical zoom", zh: "光学变焦" },
              { en: "main sensor", zh: "主摄像头" },
            ],
            alternativeExpressions: [
              {
                textEn: "You can get it in 128, 256, or 512 gigs. Most people go with the 256.",
                textZh: "有128、256和512G的。大多数人选256的。",
                actionHint: "选择存储容量",
                frequency: "common",
              },
              {
                textEn: "It starts at 128GB. The 256 is the sweet spot — great camera too, with a 200MP sensor.",
                textZh: "128GB起步。256的性价比最高——相机也很好，2亿像素。",
                actionHint: "考虑推荐的版本",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Does it come with a warranty?",
            textZh: "有保修吗？",
            casualVersion: "It got a warranty?",
            commonMistake: {
              wrong: "Is there warranty?",
              correct: "Does it come with a warranty?",
              explanation: "询问产品自带保修常用 come with 或 is there a warranty？",
            },
            formalityVariants: {
              casual: "It got a warranty?",
              standard: "Does it come with a warranty?",
              formal: "Is a warranty included with this purchase?",
            },
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn:
              "Yes, it comes with a one-year manufacturer's warranty. We also offer an extended protection plan — two years of coverage including accidental damage for $149.",
            textZh: "有的，自带一年厂家保修。我们还提供延保服务——149美元可以享受两年保障，包括意外损坏。",
            casualVersion: "Yeah, one-year manufacturer warranty. Plus, we got an extended plan – $149 for two years, covers accidents.",
            formalityVariants: {
              casual: "Yeah, one-year manufacturer warranty. Plus, we got an extended plan – $149 for two years, covers accidents.",
              standard: "Yes, it comes with a one-year manufacturer's warranty. We also offer an extended protection plan — $149 for two years, including accidental damage.",
              formal: "Indeed, it includes a standard one-year manufacturer's warranty. We also provide an optional extended protection plan, which is $149 for two years and covers accidental damage.",
            },
            variations: [
              {
                textEn:
                  "There's a standard one-year warranty. For $129 more, you can get our protection plan that covers drops and spills.",
                textZh: "标准一年保修。加129美元可以买我们的保护计划，覆盖摔落和进水。",
              },
            ],
            keyPhrases: [
              { en: "manufacturer's warranty", zh: "厂家保修" },
              { en: "extended protection plan", zh: "延保服务" },
              { en: "accidental damage", zh: "意外损坏" },
              { en: "coverage", zh: "保障/覆盖" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "There's a one-year warranty included. We also have an extended plan if you want extra peace of mind.",
                textZh: "含一年保修。如果想更安心，我们也有延保方案。",
                actionHint: "考虑是否加延保",
                frequency: "common",
              },
              {
                textEn:
                  "It comes with a year of coverage from the manufacturer. Want me to tell you about our protection plans?",
                textZh: "厂家提供一年保修。要我介绍一下我们的保障计划吗？",
                actionHint: "了解延保详情",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I'll take the 256GB model. And I'll add the protection plan. Can I also get a screen protector and a case?",
            textZh: "我要256GB的。再加延保。还能配一个屏幕保护膜和手机壳吗？",
            casualVersion: "I'll grab the 256 with the extended. Can I get a screen protector and case too?",
            commonMistake: {
              wrong: "I want 256GB, also extended warranty.",
              correct: "I'll take the 256GB with the extended warranty.",
              explanation: "I'll take 在购物时表达决定更自然。",
            },
            formalityVariants: {
              casual: "I'll grab the 256 with the extended. Can I get a screen protector and case too?",
              standard: "I'll take the 256GB with the extended warranty. Can I also get a screen protector and a phone case?",
              formal: "I would like to purchase the 256GB model, along with the extended warranty. Would it be possible to add a screen protector and a phone case as well?",
            },
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn:
              "Absolutely! We have screen protectors starting at $29 and cases from $39. I'd recommend this clear case — it's slim and shows off the phone's color. Want me to put the screen protector on for you?",
            textZh:
              "当然！屏幕保护膜29美元起，手机壳39美元起。推荐这款透明壳——很薄，还能看到手机本身的颜色。要我帮您贴膜吗？",
            casualVersion: "Totally! Screen protectors from $29, cases from $39. Recommend this clear one — slim, shows the phone color. Want me to put on the protector?",
            formalityVariants: {
              casual: "Totally! Screen protectors from $29, cases from $39. Recommend this clear one — slim, shows the phone color. Want me to put on the protector?",
              standard: "Absolutely! We have screen protectors starting at $29 and cases from $39. I'd recommend this clear case — it's slim and shows off the phone's color. Would you like me to put on the screen protector for you?",
              formal: "Certainly! Our screen protectors begin at $29, and cases start from $39. I would suggest this transparent case; it is notably slim and allows the phone's original aesthetics to be displayed. Would you like me to apply the screen protector for you?",
            },
            keyPhrases: [
              { en: "screen protector", zh: "屏幕保护膜" },
              { en: "case", zh: "手机壳" },
              { en: "starting at", zh: "……起" },
              { en: "put it on for you", zh: "帮您贴/装" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure! Cases start at $39 and screen protectors at $29. Want me to put the protector on for you?",
                textZh: "好的！手机壳39美元起，保护膜29美元起。要帮你贴膜吗？",
                actionHint: "选择配件",
                frequency: "common",
              },
              {
                textEn:
                  "We've got tons of cases and screen protectors. I'd suggest this clear case — it's slim and tough.",
                textZh: "壳和膜很多。推荐这个透明壳——又薄又防摔。",
                actionHint: "看看推荐的款式",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. What's the total?",
            textZh: "好的，帮我贴一下。一共多少钱？",
            casualVersion: "Yeah, please. How much is everything?",
            commonMistake: {
              wrong: "What's total money?",
              correct: "What's the total?",
              explanation: "问总价直接说 total 即可，无需加 money。",
            },
            formalityVariants: {
              casual: "Yeah, please. How much is everything?",
              standard: "Yes, please. What's the total?",
              formal: "Yes, kindly proceed. What is the grand total, please?",
            },
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn:
              "The phone is $999, the protection plan is $149, screen protector $29, and the case $39. Your total before tax is $1,216. With tax, it comes to $1,319.36. How would you like to pay?",
            textZh:
              "手机999美元，延保149美元，贴膜29美元，手机壳39美元。税前总计1216美元。含税是1319.36美元。您怎么付款？",
            casualVersion: "Phone's $999, plan $149, protector $29, case $39. So, $1,216 pre-tax. With tax, $1,319.36. How you wanna pay?",
            formalityVariants: {
              casual: "Phone's $999, plan $149, protector $29, case $39. So, $1,216 pre-tax. With tax, $1,319.36. How you wanna pay?",
              standard: "The phone is $999, the protection plan is $149, screen protector $29, and the case $39. Your total before tax is $1,216. With tax, it comes to $1,319.36. How would you like to pay?",
              formal: "The cost breakdown is as follows: the phone is $999, the protection plan is $149, the screen protector is $29, and the case is $39. This brings your subtotal before tax to $1,216. Including tax, the grand total is $1,319.36. What will be your preferred method of payment?",
            },
            keyPhrases: [
              { en: "total before tax", zh: "税前总计" },
              { en: "with tax", zh: "含税" },
              { en: "how would you like to pay", zh: "怎么付款" },
            ],
            alternativeExpressions: [
              {
                textEn: "So your subtotal is $1,216, and with tax it's $1,319.36. How would you like to pay?",
                textZh: "小计1216美元，含税1319.36美元。您怎么付？",
                actionHint: "选择付款方式",
                frequency: "common",
              },
              {
                textEn: "Everything together comes to $1,319 and change after tax. Cash or card?",
                textZh: "全部加起来含税1319美元多。现金还是刷卡？",
                actionHint: "告诉店员付款方式",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Credit card, please. Can I get an itemized receipt?",
            textZh: "刷信用卡。能给我一张明细收据吗？",
            casualVersion: "Card, please. Can I get a detailed receipt?",
            commonMistake: {
              wrong: "Give me itemized receipt.",
              correct: "Can I get an itemized receipt?",
              explanation: "Give me 听起来不礼貌，Can I get 更委婉客气。",
            },
            formalityVariants: {
              casual: "Card, please. Can I get a detailed receipt?",
              standard: "Credit card, please. Can I get an itemized receipt?",
              formal: "I will be paying with a credit card, please. May I request an itemized receipt?",
            },
            culturalNote: "买贵重电子产品时，保留明细收据很重要，方便退税和保修。",
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn:
              "Of course. Here's your itemized receipt. I've also activated the phone and set up your warranty. The serial number is on the receipt — keep it safe. Enjoy your new phone!",
            textZh: "当然。给您明细收据。手机已经激活了，保修也登记好了。序列号在收据上——请妥善保管。新手机用着愉快！",
            casualVersion: "Sure. Here's your receipt. Phone's activated, warranty's registered. Serial number's on it, keep it safe. Enjoy!",
            formalityVariants: {
              casual: "Sure. Here's your receipt. Phone's activated, warranty's registered. Serial number's on it, keep it safe. Enjoy!",
              standard: "Of course. Here's your itemized receipt. The phone is activated, and the warranty registered. The serial number is on the receipt — please keep it safe. Enjoy your new phone!",
              formal: "Certainly. Here is your itemized receipt. The phone has been activated, and its warranty duly registered. The serial number is indicated on the receipt; please retain it securely. We hope you enjoy your new device.",
            },
            keyPhrases: [
              { en: "itemized receipt", zh: "明细收据" },
              { en: "activated", zh: "激活" },
              { en: "serial number", zh: "序列号" },
              { en: "keep it safe", zh: "妥善保管" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Here's your detailed receipt. Phone's all set up and ready to go. Don't lose the receipt — you'll need it for warranty.",
                textZh: "给您明细收据。手机都设置好可以用了。收据别丢——保修要用。",
                actionHint: "保管好收据",
                frequency: "common",
              },
              {
                textEn:
                  "All done! I've activated it and registered the warranty. Serial number's on the receipt. Enjoy!",
                textZh: "搞定！激活了，保修也登记了。序列号在收据上。好好用！",
                actionHint: "确认激活和保修信息",
                frequency: "occasional",
              },
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
            culturalNote: "美国退税通常在机场而非商店。",
            casualVersion: "I'm a tourist. Can I get a tax refund for this?",
            commonMistake: {
              wrong: "I am tourist.",
              correct: "I'm a tourist.",
              explanation: "中文里没有冠词，常漏掉a/an/the。",
            },
            formalityVariants: {
              casual: "Hey, I'm a tourist. Can I get a tax refund for this?",
              standard: "I'm a tourist. Can I get a tax refund on this purchase?",
              formal: "Excuse me, I am a tourist. I was wondering if I am eligible for a tax refund on this purchase?",
            },
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn:
              "Yes! If you're a non-resident visitor, you may be eligible for a VAT refund. Do you have your passport with you?",
            textZh: "可以！如果您是非本地居民，可能有资格申请增值税退税。您带护照了吗？",
            variations: [
              {
                textEn:
                  "Sure, we participate in the tax-free shopping program. I'll need to see your passport to process the form.",
                textZh: "当然，我们参加了免税购物计划。我需要看您的护照来办理表格。",
              },
            ],
            keyPhrases: [
              { en: "non-resident", zh: "非本地居民" },
              { en: "eligible", zh: "有资格的" },
              { en: "VAT refund", zh: "增值税退税" },
              { en: "tax-free shopping", zh: "免税购物" },
            ],
            culturalNote: "退税政策因国家而异。欧洲多数国家支持 VAT 退税，美国大部分州没有游客退税。",
            alternativeExpressions: [
              {
                textEn: "Sure! As a tourist, you can claim a VAT refund. Do you have your passport on you?",
                textZh: "可以的！作为游客可以申请增值税退税。护照带了吗？",
                actionHint: "出示护照",
                frequency: "common",
              },
              {
                textEn: "Yes, we do tax-free shopping. I just need to see your passport to fill out the form.",
                textZh: "有的，我们支持免税购物。需要看一下护照来填表格。",
                actionHint: "准备好护照",
                frequency: "occasional",
              },
            ],
            casualVersion: "Yep! If you're not a resident, you might get a VAT refund. Got your passport?",
            formalityVariants: {
              casual: "Yeah, if you're not from here, you can probably get a VAT refund. Got your passport?",
              standard:
                "Yes! If you're a non-resident visitor, you may be eligible for a VAT refund. Do you have your passport with you?",
              formal:
                "Certainly. As a non-resident visitor, you are likely eligible for a Value Added Tax (VAT) refund. May I inquire if you have your passport available?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, here's my passport. How does the process work?",
            textZh: "有的，给您。退税流程是怎样的？",
            casualVersion: "Yep, here it is. So, how's the process work?",
            commonMistake: {
              wrong: "How the process work?",
              correct: "How does the process work?",
              explanation: "提问时需要助动词 does，且注意词序。",
            },
            formalityVariants: {
              casual: "Yep, here's my passport. So, how's it work?",
              standard: "Yes, here's my passport. How does the process work?",
              formal:
                "Yes, certainly. Here is my passport. Could you please explain the procedure for obtaining the refund?",
            },
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn:
              "I'll fill out a tax-free form for you. You'll need to show the form, the receipt, and the unused item at the customs counter at the airport before you check in. They'll stamp the form, and then you can get your refund at the refund counter.",
            textZh:
              "我帮您填一张免税表格。您在机场办登机手续之前，需要在海关柜台出示表格、收据和未使用的商品。他们会在表格上盖章，然后您就可以在退税柜台拿到退款了。",
            keyPhrases: [
              { en: "tax-free form", zh: "免税表格" },
              { en: "customs counter", zh: "海关柜台" },
              { en: "stamp the form", zh: "在表格上盖章" },
              { en: "refund counter", zh: "退税柜台" },
              { en: "unused item", zh: "未使用的商品" },
            ],
            responseTip: "确保在机场留出足够时间办理退税",
            alternativeExpressions: [
              {
                textEn:
                  "I'll do the paperwork. At the airport, just show customs the form, receipt, and the item. They'll stamp it, then you get your refund.",
                textZh: "我帮你填表。到机场把表格、收据和商品拿给海关看，盖章后就能拿退税了。",
                actionHint: "了解机场退税流程",
                frequency: "common",
              },
              {
                textEn:
                  "I'll fill out a tax refund form for you. Make sure to visit the customs desk at the airport before checking in.",
                textZh: "我帮您填退税表。记得在机场登机前去海关柜台办理。",
                actionHint: "记住在机场办理",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "I'll fill out a tax-free form. You just gotta show the form, receipt, and the unused item at customs at the airport *before* you check in. They'll stamp it, then you can get your money back at the refund counter.",
            formalityVariants: {
              casual:
                "I'll get this tax-free form ready. You just gotta show the form, receipt, and the item, unused, at airport customs before check-in. They'll stamp it, then you pick up your refund.",
              standard:
                "I'll fill out a tax-free form for you. You'll need to show the form, the receipt, and the unused item at the customs counter at the airport before you check in. They'll stamp the form, and then you can get your refund at the refund counter.",
              formal:
                "I will complete a tax-free form on your behalf. Prior to checking in for your flight, you will be required to present this form, your sales receipt, and the item in question (unused) at the customs counter located within the airport. Following their verification and stamping of the form, you may then proceed to the designated refund counter to claim your reimbursement.",
            },
          },
          {
            speaker: "you",
            textEn: "How much will I get back?",
            textZh: "能退多少？",
            casualVersion: "How much do I get back?",
            commonMistake: {
              wrong: "How much I will get back?",
              correct: "How much will I get back?",
              explanation: "提问时助动词 will 放在主语 I 前面。",
            },
            formalityVariants: {
              casual: "What's the refund amount?",
              standard: "How much will I get back?",
              formal: "What is the approximate refund amount I can expect?",
            },
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn:
              "The VAT rate is 20%, but the actual refund is usually around 12-15% after the processing fee. On your $1,200 purchase, you'd get roughly $150 to $180 back.",
            textZh:
              "增值税税率是20%，但扣除手续费后实际退税大约在12-15%。您这笔1200美元的消费，大概可以退150到180美元。",
            keyPhrases: [
              { en: "VAT rate", zh: "增值税税率" },
              { en: "processing fee", zh: "手续费" },
              { en: "actual refund", zh: "实际退税金额" },
              { en: "roughly", zh: "大约" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The tax is 20%, but after the service charge, you'd get about 12-15% back. So around $150 to $180.",
                textZh: "税率20%，扣除手续费后大概能退12-15%。大约150到180美元。",
                actionHint: "了解实际退税金额",
                frequency: "common",
              },
              {
                textEn: "You'll get roughly $150 back. It's not the full 20% because they take a processing fee.",
                textZh: "大概能退150美元左右。不是全额20%，因为有手续费。",
                actionHint: "注意手续费",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "VAT's 20%, but you usually get like 12-15% back after fees. So, on your $1,200, you'd probably get around $150 to $180.",
            formalityVariants: {
              casual:
                "It's 20% VAT, but after fees, you'll see about 12-15%. So for your $1,200, probably $150-180 back.",
              standard:
                "The VAT rate is 20%, but the actual refund is usually around 12-15% after the processing fee. On your $1,200 purchase, you'd get roughly $150 to $180 back.",
              formal:
                "The Value Added Tax (VAT) rate stands at 20%; however, after accounting for processing fees, the effective refund typically ranges from 12% to 15%. For your $1,200 purchase, this would equate to an estimated refund of $150 to $180.",
            },
          },
          {
            speaker: "you",
            textEn: "Can I get the refund in cash or does it go back to my card?",
            textZh: "退税是退现金还是退到卡里？",
            casualVersion: "Cash or card for the refund?",
            commonMistake: {
              wrong: "The refund is cash or card?",
              correct: "Can I get the refund in cash or does it go back to my card?",
              explanation: '询问选择时，常用 "Can I get X or Y?" 或 "Is it X or Y?"。',
            },
            formalityVariants: {
              casual: "Do I get cash or is it a card refund?",
              standard: "Can I get the refund in cash or does it go back to my card?",
              formal:
                "Is it possible to receive the refund in cash, or will it be processed as a credit to my payment card?",
            },
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn:
              "At the airport, you can choose cash or card. Cash is immediate but there's a slightly higher fee. Card refund takes about 5-10 business days but you get a better rate. I'd recommend the card refund personally.",
            textZh:
              "在机场可以选现金或退到卡里。现金是即时的但手续费稍高。退到卡上需要5-10个工作日，但汇率更划算。我个人建议退到卡里。",
            keyPhrases: [
              { en: "cash or card", zh: "现金还是退到卡里" },
              { en: "immediate", zh: "即时的" },
              { en: "higher fee", zh: "更高的手续费" },
              { en: "better rate", zh: "更划算的汇率" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn:
                  "You can choose cash or card at the airport. Cash is faster but the fee is a bit higher. I'd go with card personally.",
                textZh: "在机场可以选现金或退到卡上。现金快但手续费高一点。我建议退到卡上。",
                actionHint: "选择退税方式",
                frequency: "common",
              },
              {
                textEn: "Either cash or back to your card. Card takes a week or so, but you save on the fee.",
                textZh: "现金或退回卡上都行。退卡要一周左右，但手续费省一些。",
                actionHint: "权衡退税方式",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "At the airport, you can do cash or card. Cash is instant but costs a bit more. Card takes 5-10 biz days but better rate. I'd go with the card, personally.",
            formalityVariants: {
              casual:
                "You can pick cash or card at the airport. Cash is quick but has a higher fee. Card takes 5-10 days but the rate's better. I'd suggest the card.",
              standard:
                "At the airport, you can choose cash or card. Cash is immediate but there's a slightly higher fee. Card refund takes about 5-10 business days but you get a better rate. I'd recommend the card refund personally.",
              formal:
                "Upon arrival at the airport, you will have the option to select either a cash refund or a credit card refund. While cash refunds are disbursed immediately, they typically incur a slightly elevated processing fee. Conversely, a credit card refund, though requiring approximately 5 to 10 business days for processing, usually offers a more favorable exchange rate. Personally, I would advise opting for the credit card refund.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Good to know. So I should keep the item sealed and bring everything to the airport customs desk before check-in?",
            textZh: "了解了。那我应该保持商品密封，登机前去机场海关柜台出示所有材料对吗？",
            casualVersion:
              "Got it. So, keep it sealed, and take everything to airport customs *before* I check in, right?",
            commonMistake: {
              wrong:
                "Good to know. So I should keep the item sealed and bring everything to the airport customs desk before check-in, is it?",
              correct:
                "Good to know. So I should keep the item sealed and bring everything to the airport customs desk before check-in, right?",
              explanation: "在美式英语中，句末常加 right? 或 okay? 进行确认。",
            },
            formalityVariants: {
              casual: "Got it. So, sealed item, everything to customs *before* check-in, right?",
              standard:
                "Good to know. So I should keep the item sealed and bring everything to the airport customs desk before check-in?",
              formal:
                "Understood. Therefore, my understanding is that I must keep the item sealed and present all necessary documentation at the airport customs desk prior to checking in for my flight, correct?",
            },
          },
          {
            speaker: "them",
            role: "销售顾问",
            textEn:
              "Exactly. Keep the item unused and in its original packaging. Bring the product, this receipt, the tax-free form, and your passport. I'd suggest getting to the airport at least 3 hours early to allow time for the process.",
            textZh:
              "没错。商品保持未使用状态和原包装。带上商品、这张收据、免税表格和护照。建议至少提前3小时到机场，给退税留出时间。",
            keyPhrases: [
              { en: "original packaging", zh: "原包装" },
              { en: "at least 3 hours early", zh: "至少提前3小时" },
              { en: "allow time", zh: "留出时间" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Right. Keep everything in the original box, and bring your passport, receipt, and the tax form. I'd get to the airport early — the line can be long.",
                textZh: "对。保持原包装，带好护照、收据和退税表。建议早点去机场——排队可能很长。",
                actionHint: "提前安排好时间",
                frequency: "common",
              },
              {
                textEn:
                  "Exactly. Don't open it, and make sure you have time at the airport. The customs desk is usually before check-in.",
                textZh: "没错。别拆封，在机场留够时间。海关柜台通常在办登机手续之前。",
                actionHint: "确保留出时间",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep, exactly. Keep it unused and in its original packaging. Bring the product, this receipt, the tax-free form, and your passport. I'd say get to the airport at least 3 hours early, just to be safe.",
            formalityVariants: {
              casual:
                "Yep. Unused, original packaging. Bring the item, receipt, form, and passport. Get to the airport at least 3 hours early, just to be safe.",
              standard:
                "Exactly. Keep the item unused and in its original packaging. Bring the product, this receipt, the tax-free form, and your passport. I'd suggest getting to the airport at least 3 hours early to allow time for the process.",
              formal:
                "Precisely. It is imperative that the item remains unused and in its original packaging. Please ensure you have the product itself, this receipt, the completed tax-free form, and your passport. I would strongly advise arriving at the airport a minimum of three hours prior to your scheduled departure to adequately accommodate the processing time.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you for explaining everything so clearly. This is very helpful.",
            textZh: "谢谢你解释得这么清楚。非常有帮助。",
            casualVersion: "Thanks for explaining all that so clearly. Super helpful!",
            commonMistake: {
              wrong: "Thank you for explain clearly.",
              correct: "Thank you for explaining everything so clearly.",
              explanation: "介词 for 后动词需用 V-ing 形式；“解释”的对象常需要说明。",
            },
            formalityVariants: {
              casual: "Thanks for explaining all that so clearly. Really helpful!",
              standard: "Thank you for explaining everything so clearly. This is very helpful.",
              formal:
                "I sincerely appreciate you explaining everything with such clarity. This information is exceptionally valuable.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 超市购物 ====================
  {
    id: "shopping-supermarket",
    tags: ["supermarket", "超市", "grocery"],
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
              {
                textEn: "Hey! Did you find what you were looking for?",
                textZh: "嘿！找到要买的东西了吗？",
                actionHint: "回答是否都找到了",
                frequency: "common",
              },
              {
                textEn: "Hi there! All set to check out?",
                textZh: "你好！准备结账了吗？",
                actionHint: "把东西放上传送带",
                frequency: "common",
              },
            ],
            casualVersion: "Hey, find everything okay?",
            formalityVariants: {
              casual: "Hey, find everything alright?",
              standard: "Hi! Did you find everything okay?",
              formal: "Good morning/afternoon, were you able to locate everything you needed?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, thanks. Actually, where do I find reusable bags?",
            textZh: "是的，谢谢。对了，哪里有环保袋卖？",
            culturalNote: "在美国超市，环保袋通常在收银台旁有售，可直接询问购买。",
            casualVersion: "Yeah, thanks. Uh, where're the reusable bags?",
            commonMistake: {
              wrong: "Where can I buy eco-friendly bags?",
              correct: "Where do I find reusable bags?",
              explanation: '"Eco-friendly bags" 虽然可以理解，但地道的说法是 "reusable bags"。',
            },
            formalityVariants: {
              casual: "Yeah, thanks. Btw, where're the reusable bags?",
              standard: "Yes, thanks. Actually, where do I find reusable bags?",
              formal: "Yes, thank you. May I inquire as to the location of your reusable shopping bags?",
            },
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
              {
                textEn: "They're right here — $1.50 each. How many do you want?",
                textZh: "就在这——每个1.5美元。要几个？",
                actionHint: "说出需要几个",
                frequency: "common",
              },
              {
                textEn: "We sell those right at checkout. They're a buck fifty. Want one or two?",
                textZh: "结账这里就有卖。一个一块五。要一两个吗？",
                actionHint: "决定购买数量",
                frequency: "occasional",
              },
            ],
            casualVersion: "Got 'em right here. Buck fifty a pop. How many you want?",
            formalityVariants: {
              casual: "Right here. Dollar fifty each. How many you need?",
              standard: "We have them right here at the register. They're $1.50 each. How many do you need?",
              formal:
                "We keep them conveniently located here at the checkout. They are priced at one dollar and fifty cents apiece. How many would you care to purchase?",
            },
          },
          {
            speaker: "you",
            textEn: "Two, please.",
            textZh: "两个。",
            casualVersion: "Just two.",
            formalityVariants: {
              casual: "Two.",
              standard: "Two, please.",
              formal: "I would appreciate two of them, please.",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Do you have a loyalty card or a store membership?",
            textZh: "您有会员卡吗？",
            variations: [
              {
                textEn: "Are you a rewards member? You can save 10% today.",
                textZh: "您是积分会员吗？今天可以省10%。",
              },
            ],
            keyPhrases: [
              { en: "loyalty card", zh: "会员卡" },
              { en: "store membership", zh: "商店会员" },
              { en: "rewards member", zh: "积分会员" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn: "Got a membership card? You could save a few bucks today.",
                textZh: "有会员卡吗？今天能省几块钱。",
                actionHint: "说有没有会员卡",
                frequency: "common",
              },
              {
                textEn: "Are you part of our rewards program? I can look you up by phone number.",
                textZh: "您是我们积分会员吗？可以用手机号查。",
                actionHint: "提供手机号或说没有",
                frequency: "occasional",
              },
            ],
            casualVersion: "Got a loyalty card or membership?",
            culturalNote: "美国超市会员卡通常能打折",
            commonMistake: {
              wrong: "Do you have a member card?",
              correct: "Do you have a loyalty card or a store membership?",
              explanation: '"Member card" 不是地道说法，应使用 "loyalty card" 或 "membership card"。',
            },
            formalityVariants: {
              casual: "Loyalty card or membership?",
              standard: "Do you have a loyalty card or a store membership?",
              formal: "May I inquire if you possess a loyalty card or a current store membership with us today?",
            },
          },
          {
            speaker: "you",
            textEn: "No, I don't. I'm just visiting.",
            textZh: "没有，我只是来旅游的。",
            commonMistake: {
              wrong: "No, I am just travel.",
              correct: "No, I don't. I'm just visiting.",
              explanation: "travel 是动词，visit 也可以是动词，但 I'm visiting 更自然。",
            },
            casualVersion: "Nah, don't. Just visiting.",
            formalityVariants: {
              casual: "Nope, don't. Just visiting.",
              standard: "No, I don't. I'm just visiting.",
              formal: "No, I do not. I am simply visiting the area.",
            },
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
              {
                textEn: "All right, that's $47.83. Paying cash or card?",
                textZh: "好，一共47.83美元。付现还是刷卡？",
                actionHint: "选择付款方式",
                frequency: "common",
              },
              {
                textEn: "Your total comes to $47.83. How would you like to pay?",
                textZh: "总共47.83美元。您怎么付？",
                actionHint: "告诉收银员付款方式",
                frequency: "common",
              },
            ],
            casualVersion: "No prob! Total's $47.83. Cash or card?",
            formalityVariants: {
              casual: "No worries! $47.83. Cash or card?",
              standard: "No problem! Your total is $47.83. Cash or card?",
              formal:
                "Not an issue at all. Your grand total for today is forty-seven dollars and eighty-three cents. Will you be paying with cash or by card?",
            },
          },
          {
            speaker: "you",
            textEn: "Card, please. Can I tap to pay?",
            textZh: "刷卡。可以刷感应支付吗？",
            culturalNote: '"tap to pay" 指用 NFC 感应支付（如 Apple Pay 或信用卡感应），在欧美越来越普遍。',
            casualVersion: "Card. Can I just tap?",
            commonMistake: {
              wrong: "Can I use induction payment?",
              correct: "Can I tap to pay?",
              explanation: '"Induction payment" 是不地道的说法，地道表达是 "tap to pay" 或 "tap your card"。',
            },
            formalityVariants: {
              casual: "Card. Can I tap?",
              standard: "Card, please. Can I tap to pay?",
              formal: "I will be paying by card, please. Am I able to utilize the tap-to-pay feature?",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn:
              "Yes, just tap your card or phone on the reader. Go ahead... Payment confirmed. Would you like a printed receipt or email?",
            textZh: "可以的，把卡或手机靠近读卡器就行。请操作吧……支付成功。要打印收据还是发到邮箱？",
            culturalNote: "美国常问是否要邮件收据，在中国不普遍。",
            keyPhrases: [
              { en: "tap your card", zh: "靠近/感应你的卡" },
              { en: "reader", zh: "读卡器" },
              { en: "payment confirmed", zh: "支付成功" },
              { en: "printed receipt or email", zh: "打印收据还是电子收据" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yeah, just hold your card over the reader. All done! Need a receipt?",
                textZh: "可以，把卡放到读卡器上就行。好了！要收据吗？",
                actionHint: "说要不要收据",
                frequency: "common",
              },
              {
                textEn: "Tap right here... Got it! Paper receipt or email?",
                textZh: "在这里感应一下……好了！纸质收据还是电子的？",
                actionHint: "选择收据方式",
                frequency: "occasional",
              },
            ],
            casualVersion: "Yep, just tap your card or phone. Go ahead... Paid. Print receipt or email?",
            formalityVariants: {
              casual: "Yeah, just tap it. Done. Print or email receipt?",
              standard:
                "Yes, just tap your card or phone on the reader. Go ahead... Payment confirmed. Would you like a printed receipt or email?",
              formal:
                "Certainly, please proceed by tapping your card or mobile device against the reader. Payment has been successfully confirmed. Would you prefer a physical printed receipt or for one to be sent to your email address?",
            },
          },
          {
            speaker: "you",
            textEn: "No receipt, thanks. Have a good day!",
            textZh: "不用收据了，谢谢。祝你有美好的一天！",
            culturalNote: "美国常会询问是否需要收据，可选择不要。",
            casualVersion: "No receipt, thanks. You too!",
            formalityVariants: {
              casual: "Nah, no receipt. Thanks. Have a good one!",
              standard: "No receipt, thanks. Have a good day!",
              formal: "I will not require a receipt, thank you. I wish you to have a pleasant day.",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "You too! Thanks for shopping with us.",
            textZh: "您也是！感谢光临。",
            keyPhrases: [{ en: "thanks for shopping with us", zh: "感谢光临" }],
            alternativeExpressions: [
              {
                textEn: "Have a great day! Come back anytime.",
                textZh: "祝您有美好的一天！欢迎再来。",
                actionHint: "礼貌道别",
                frequency: "common",
              },
              {
                textEn: "Thanks for coming in! See you next time.",
                textZh: "感谢光临！下次见。",
                actionHint: "礼貌回应即可",
                frequency: "common",
              },
            ],
            casualVersion: "You too! Thanks for shopping.",
            formalityVariants: {
              casual: "Same to you! Thanks for coming in.",
              standard: "You too! Thanks for shopping with us.",
              formal: "And the same to you as well! We appreciate your patronage today.",
            },
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
            culturalNote:
              "美国文化中，直接用“Excuse me”开门见山地提问非常普遍，无需像中文的“请问”一样特别强调请求的客气。",
            commonMistake: {
              wrong: "Excuse me, where is olive oil?",
              correct: "Excuse me, could you tell me where the olive oil is?",
              explanation: "直接问 'where is...?' 语气较生硬，用 'could you tell me where...' 更礼貌自然。",
            },
            formalityVariants: {
              casual: "Excuse me, where's the olive oil?",
              standard: "Excuse me, could you tell me where the olive oil is?",
              formal: "Excuse me, I was wondering if you could direct me to the olive oil, please.",
            },
          },
          {
            speaker: "them",
            role: "超市员工",
            textEn:
              "Sure! Olive oil is in aisle 7, on the left side, about halfway down. It's next to the vinegar and cooking oils.",
            textZh: "在7号通道左边，大约中间位置。旁边就是醋和其他食用油。",
            variations: [
              {
                textEn: "Aisle 7, left side. Look for the cooking oils section — you can't miss it.",
                textZh: "7号通道，左边。找食用油区域——很好找的。",
              },
            ],
            keyPhrases: [
              { en: "aisle", zh: "通道/货架走廊" },
              { en: "on the left side", zh: "在左边" },
              { en: "halfway down", zh: "中间位置" },
              { en: "next to", zh: "旁边" },
            ],
            culturalNote: '美国超市用 "aisle"（通道）编号来标记不同区域，每条通道两侧是货架。',
            alternativeExpressions: [
              {
                textEn: "Olive oil? That's aisle 7, left side, near the vinegar.",
                textZh: "橄榄油？7号通道左边，醋旁边。",
                actionHint: "按指引去找",
                frequency: "common",
              },
              {
                textEn: "Go down to aisle 7 — it's about halfway on the left. You'll see it next to the cooking oils.",
                textZh: "往7号通道走——左边大约中间位置。在食用油旁边就能看到。",
                actionHint: "去7号通道找",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Sure! Olive oil's in aisle 7, left side, halfway down. It's next to the vinegar and cooking oils.",
            formalityVariants: {
              casual: "Yep! Aisle 7, left side, halfway down. Next to the vinegar, cooking oils.",
              standard:
                "Sure! Olive oil is in aisle 7, on the left side, about halfway down. It's next to the vinegar and cooking oils.",
              formal:
                "Certainly! You'll find the olive oil located in aisle 7, approximately halfway down on the left-hand side, situated adjacent to the vinegar and other cooking oils.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. And where would I find soy sauce?",
            textZh: "谢谢。酱油在哪里呢？",
            casualVersion: "Thanks. And soy sauce?",
            commonMistake: {
              wrong: "And where is soy sauce?",
              correct: "And where would I find soy sauce?",
              explanation: "询问商品位置时，'where would I find' 比 'where is' 更常用。",
            },
            formalityVariants: {
              casual: "Thanks. And soy sauce?",
              standard: "Thank you. And where would I find soy sauce?",
              formal: "Thank you. Could you also direct me to the location of the soy sauce?",
            },
          },
          {
            speaker: "them",
            role: "超市员工",
            textEn:
              "Soy sauce is in our international foods section, aisle 12. We have a few Asian brands. If you want the one with low sodium, it's on the top shelf.",
            textZh: "酱油在国际食品区，12号通道。我们有好几个亚洲品牌。如果要低钠的，在最上面那层。",
            culturalNote: "美国超市有“国际食品区”，中国超市不常见此分区。",
            commonMistake: {
              wrong: "Soy sauce in international foods.",
              correct: "Soy sauce is in our international foods section.",
              explanation: "句子主语后需要谓语动词，不能直接罗列名词。",
            },
            keyPhrases: [
              { en: "international foods section", zh: "国际食品区" },
              { en: "low sodium", zh: "低钠" },
              { en: "top shelf", zh: "最上面的架子" },
              { en: "brands", zh: "品牌" },
            ],
            alternativeExpressions: [
              {
                textEn: "Soy sauce is in the Asian food section, aisle 12. We have several brands.",
                textZh: "酱油在亚洲食品区，12号通道。有好几个牌子。",
                actionHint: "去12号通道找",
                frequency: "common",
              },
              {
                textEn: "Check aisle 12, the international section. Low-sodium is on the top shelf.",
                textZh: "去12号通道看看，国际食品区。低钠的在最上面。",
                actionHint: "在最上层找低钠款",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Soy sauce is in international foods, aisle 12. Got a few Asian brands. Wanna low sodium one? Top shelf.",
            formalityVariants: {
              casual:
                "Soy sauce is in international foods, aisle 12. Got a few Asian brands. Wanna low sodium one? Top shelf.",
              standard:
                "Soy sauce is in our international foods section, aisle 12. We have a few Asian brands. If you want the one with low sodium, it's on the top shelf.",
              formal:
                "You will find the soy sauce in our international foods section, specifically in aisle 12. We offer a selection of Asian brands. Should you be looking for the low sodium option, it is located on the top shelf.",
            },
          },
          {
            speaker: "you",
            textEn: "Do you carry fresh tofu? I couldn't find it in the produce section.",
            textZh: "你们卖鲜豆腐吗？我在蔬果区没找到。",
            culturalNote: "豆腐在美国超市通常在冷藏区，而非蔬果区，这点和中国不同。",
            casualVersion: "Got fresh tofu? Couldn't find it in produce.",
            commonMistake: {
              wrong: "Do you have fresh tofu?",
              correct: "Do you carry fresh tofu?",
              explanation: "询问商店是否有某种商品时，'carry' 比 'have' 更自然地道。",
            },
            formalityVariants: {
              casual: "Got fresh tofu? Couldn't find it in produce.",
              standard: "Do you carry fresh tofu? I couldn't find it in the produce section.",
              formal:
                "Excuse me, I was wondering if you stock fresh tofu? I was unable to locate it within the produce section.",
            },
          },
          {
            speaker: "them",
            role: "超市员工",
            textEn:
              "Yes, we do! Fresh tofu is actually in the refrigerated section near the deli, not with the produce. Aisle 3, in the cold case on the right. We have firm and silken tofu.",
            textZh: "有的！鲜豆腐其实在熟食区旁边的冷藏区，不在蔬果区。3号通道，右边的冷藏柜。我们有老豆腐和嫩豆腐。",
            culturalNote: "美国超市生鲜豆腐通常在冷藏区而非蔬菜区，这与中国习惯不同",
            variations: [
              {
                textEn:
                  "Tofu is in the refrigerated health food aisle, aisle 3. It's easy to miss since it's tucked behind the yogurt.",
                textZh: "豆腐在冷藏健康食品通道，3号。它藏在酸奶后面，容易找不到。",
              },
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
              {
                textEn: "Yeah, tofu's in the fridge section by the deli, aisle 3. We have firm and soft.",
                textZh: "有的，豆腐在熟食区旁边的冷藏柜，3号通道。有老豆腐和嫩豆腐。",
                actionHint: "去3号通道冷藏区找",
                frequency: "common",
              },
              {
                textEn: "Fresh tofu isn't with the veggies — it's in the cold case near the deli counter.",
                textZh: "鲜豆腐不在蔬果区——在熟食柜台旁边的冷藏柜里。",
                actionHint: "去熟食区附近找",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, we do! Tofu's actually in the refrigerated section by the deli, not produce. Aisle 3, right-side cold case. Got firm and silken.",
            formalityVariants: {
              casual:
                "Yeah, we do! Tofu's actually in the refrigerated section by the deli, not produce. Aisle 3, right-side cold case. Got firm and silken.",
              standard:
                "Yes, we do! Fresh tofu is actually in the refrigerated section near the deli, not with the produce. Aisle 3, in the cold case on the right. We have firm and silken tofu.",
              formal:
                "Yes, we certainly do! Fresh tofu is actually located in the refrigerated section adjacent to the deli counter, rather than with the produce. You'll find it in Aisle 3, within the cold case on your right. We offer both firm and silken varieties.",
            },
          },
          {
            speaker: "you",
            textEn: "Great. One more thing — do you have self-checkout here?",
            textZh: "好的。再问一下——你们这里有自助结账吗？",
            culturalNote: "美国超市自助结账很常见，中国旅行者可能不熟悉。",
            casualVersion: "Cool. One more thing – got self-checkout?",
            commonMistake: {
              wrong: "Do you have self-checkout machine?",
              correct: "Do you have self-checkout here?",
              explanation: "'self-checkout' 本身就指自助结账系统，无需加 'machine'。",
            },
            formalityVariants: {
              casual: "Cool. One more thing – got self-checkout?",
              standard: "Great. One more thing — do you have self-checkout here?",
              formal: "Excellent. Just one additional query — do you offer self-checkout facilities at this location?",
            },
          },
          {
            speaker: "them",
            role: "超市员工",
            textEn:
              "Yes, the self-checkout machines are at the front of the store, near exit 2. There's also a staff member there who can help if you have any trouble scanning items.",
            textZh: "有的，自助结账机在店的前面，靠近2号出口。那边也有工作人员，如果扫码有问题可以找他们帮忙。",
            keyPhrases: [
              { en: "self-checkout", zh: "自助结账" },
              { en: "front of the store", zh: "店的前面" },
              { en: "scanning items", zh: "扫码/扫描商品" },
              { en: "staff member", zh: "工作人员" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn: "Yep! Self-checkout is up front, near exit 2. There's someone there to help if you need it.",
                textZh: "有的！自助结账在前面，靠近2号出口。有人在那帮忙。",
                actionHint: "去前面找自助结账机",
                frequency: "common",
              },
              {
                textEn: "Sure do! The self-checkout lanes are by the entrance. Super easy to use.",
                textZh: "有的！自助结账通道在入口那边。特别好用。",
                actionHint: "去入口处找",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, self-checkout's up front, by exit 2. There's usually someone there to help if you have trouble scanning.",
            formalityVariants: {
              casual:
                "Yeah, self-checkout's up front, by exit 2. There's usually someone there to help if you have trouble scanning.",
              standard:
                "Yes, the self-checkout machines are at the front of the store, near exit 2. There's also a staff member there who can help if you have any trouble scanning items.",
              formal:
                "Yes, they are. The self-checkout machines are situated at the front of the store, adjacent to Exit 2. Additionally, a staff member is usually present to assist you should you encounter any difficulties scanning your items.",
            },
          },
          {
            speaker: "you",
            textEn: "How does self-checkout work? I've never used one before.",
            textZh: "自助结账怎么用？我以前没用过。",
            casualVersion: "How's self-checkout work? Never used one.",
            commonMistake: {
              wrong: "How to use self-checkout?",
              correct: "How does self-checkout work?",
              explanation: "直接问 'How to use...?' 不够完整，'How does... work?' 是地道的询问方式。",
            },
            formalityVariants: {
              casual: "How's self-checkout work? Never used one.",
              standard: "How does self-checkout work? I've never used one before.",
              formal:
                "Could you please explain the process for using the self-checkout? I haven't had the occasion to utilize one previously.",
            },
          },
          {
            speaker: "them",
            role: "超市员工",
            textEn:
              "It's easy! Just scan each item's barcode under the scanner, then place it in the bagging area. For fruits and vegetables, tap the screen, search for the item, and weigh it. When you're done, choose your payment method on the screen. If an item won't scan, just ask the attendant for help.",
            textZh:
              "很简单！把每件商品的条码对准扫描器扫一下，然后放到装袋区。水果蔬菜的话，点屏幕搜索商品名称，然后称重。扫完所有东西后，在屏幕上选择付款方式。如果有东西扫不出来，找旁边的工作人员帮忙就行。",
            culturalNote: "自助结账流程与中国略有不同，尤其在称重和求助方式上",
            keyPhrases: [
              { en: "barcode", zh: "条码" },
              { en: "scanner", zh: "扫描器" },
              { en: "bagging area", zh: "装袋区" },
              { en: "weigh it", zh: "称重" },
              { en: "payment method", zh: "付款方式" },
              { en: "attendant", zh: "工作人员" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Just scan each item, put it in the bag, and pay on the screen. If something doesn't scan, the attendant can help.",
                textZh: "扫一下每件东西，放进袋子里，然后在屏幕上付款。扫不出来的话旁边有人帮忙。",
                actionHint: "按步骤操作",
                frequency: "common",
              },
              {
                textEn:
                  "It's pretty simple — scan the barcode, bag it, and pay. For produce, look it up on the screen and weigh it.",
                textZh: "挺简单的——扫条码、装袋、付款。水果蔬菜的话在屏幕上搜名字然后称重。",
                actionHint: "注意水果蔬菜要称重",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Easy! Just scan each item's barcode, then put it in the bagging area. For produce, tap the screen, search, and weigh. Done? Pick your payment. If something won't scan, just ask the attendant.",
            formalityVariants: {
              casual:
                "Easy! Just scan each item's barcode, then put it in the bagging area. For produce, tap the screen, search, and weigh. Done? Pick your payment. If something won't scan, just ask the attendant.",
              standard:
                "It's easy! Just scan each item's barcode under the scanner, then place it in the bagging area. For fruits and vegetables, tap the screen, search for the item, and weigh it. When you're done, choose your payment method on the screen. If an item won't scan, just ask the attendant for help.",
              formal:
                "It's quite straightforward. Simply scan each item's barcode beneath the scanner, and then place it into the designated bagging area. For fresh produce, you'll need to tap the screen, search for the specific item, and then weigh it. Once all items have been scanned, select your preferred payment method on the screen. Should any item fail to scan, please do not hesitate to request assistance from the attendant.",
            },
          },
          {
            speaker: "you",
            textEn: "That sounds straightforward. Thank you so much for your help!",
            textZh: "听起来很简单。非常感谢你的帮助！",
            commonMistake: {
              wrong: "Thank you for your help very much.",
              correct: "Thank you so much for your help!",
              explanation: "very much for your help 是中式英语，so much 更自然。",
            },
            casualVersion: "Sounds easy. Thanks a ton for the help!",
            formalityVariants: {
              casual: "Sounds easy. Thanks a ton for the help!",
              standard: "That sounds straightforward. Thank you so much for your help!",
              formal: "That does sound quite clear. I sincerely appreciate all of your assistance!",
            },
          },
          {
            speaker: "them",
            role: "超市员工",
            textEn: "You're welcome! If you need anything else, just look for anyone in a green apron. Happy shopping!",
            textZh: "不客气！如果还需要什么，找穿绿围裙的员工就行。购物愉快！",
            culturalNote: "通过制服找工作人员是很实用的提示。",
            commonMistake: {
              wrong: "No need to thank.",
              correct: "You're welcome!",
              explanation: "“不用谢”的直译不地道，常用You're welcome。",
            },
            keyPhrases: [
              { en: "green apron", zh: "绿围裙" },
              { en: "happy shopping", zh: "购物愉快" },
            ],
            alternativeExpressions: [
              {
                textEn: "No problem! Just find anyone in a green apron if you need more help. Enjoy your shopping!",
                textZh: "不客气！还需要帮忙就找穿绿围裙的。购物愉快！",
                actionHint: "认准绿围裙员工",
                frequency: "common",
              },
              {
                textEn: "Happy to help! Have a great rest of your day.",
                textZh: "很高兴帮到你！祝你今天愉快。",
                actionHint: "礼貌道别",
                frequency: "common",
              },
            ],
            casualVersion: "No problem! Need anything else, just find someone in a green apron. Happy shopping!",
            formalityVariants: {
              casual: "No problem! Need anything else, just find someone in a green apron. Happy shopping!",
              standard:
                "You're welcome! If you need anything else, just look for anyone in a green apron. Happy shopping!",
              formal:
                "You are most welcome! Should you require any further assistance, please do not hesitate to approach any staff member wearing a green apron. We wish you a pleasant shopping experience!",
            },
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
              {
                textEn: "Hey! Need help finding something?",
                textZh: "嘿！需要帮忙找东西吗？",
                actionHint: "说出你的需求",
                frequency: "common",
              },
              {
                textEn: "Hi! Just holler if you need anything.",
                textZh: "你好！需要什么就喊我。",
                actionHint: "有问题可以问店员",
                frequency: "occasional",
              },
            ],
            casualVersion: "Hey! Welcome. Holler if you need anything.",
            formalityVariants: {
              casual: "Hey! Welcome. Holler if you need anything.",
              standard: "Hi! Welcome in. Let me know if you need help finding anything.",
              formal:
                "Good morning/afternoon/evening, and welcome. Please do not hesitate to ask if you require assistance locating any items.",
            },
          },
          {
            speaker: "you",
            textEn: "Thanks. How much is this sandwich?",
            textZh: "谢谢。这个三明治多少钱？",
            casualVersion: "Hey, what's the price on this sandwich?",
            commonMistake: {
              wrong: "This sandwich how much?",
              correct: "How much is this sandwich?",
              explanation: "中文思维常将主题前置，但英文疑问句语序不同。",
            },
            formalityVariants: {
              casual: "Thanks. How much is this one?",
              standard: "Thanks. How much is this sandwich?",
              formal: "Thank you. Could you please inform me of the price for this particular sandwich?",
            },
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
              {
                textEn: "That's $5.49. But if you add a drink, we've got a combo for $7.99.",
                textZh: "5.49美元。不过加一瓶饮料的话，套餐才7.99美元。",
                actionHint: "考虑套餐优惠",
                frequency: "common",
              },
              {
                textEn: "It's $5.49. We're also running a meal deal — sandwich plus a drink for $7.99.",
                textZh: "5.49美元。我们还有套餐优惠——三明治加饮料7.99美元。",
                actionHint: "决定要不要套餐",
                frequency: "occasional",
              },
            ],
            casualVersion: "That's $5.49. Or, if you get a drink, it's a combo: sandwich + any drink for $7.99.",
            formalityVariants: {
              casual: "That's $5.49. Grab a drink and get the combo, sandwich + drink for $7.99.",
              standard:
                "That one is $5.49. If you grab a drink, we have a combo deal — sandwich and any drink for $7.99.",
              formal:
                "The price for that item is $5.49. Should you also select a beverage, we offer a promotional combination package: a sandwich and any accompanying drink for $7.99.",
            },
          },
          {
            speaker: "you",
            textEn: "Good deal. I'll take the combo. Can you heat up the sandwich for me?",
            textZh: "很划算。我要套餐。能帮我把三明治加热一下吗？",
            casualVersion: "Nice. I'll get the combo. Can you nuke the sandwich?",
            commonMistake: {
              wrong: "Can you help me heat up the sandwich?",
              correct: "Can you heat up the sandwich for me?",
              explanation: "省略'help me'更自然，直接说'heat up'即可。",
            },
            formalityVariants: {
              casual: "Cool. I'll take the combo. Can you warm up the sandwich?",
              standard: "Good deal. I'll take the combo. Can you heat up the sandwich for me?",
              formal:
                "That sounds like a favorable offer. I would like to proceed with the combination. Would it be possible for you to warm the sandwich for me?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Sure! I'll microwave it for you. It'll take about a minute. Want me to grab you some napkins and ketchup too?",
            textZh: "好的！我帮您微波一下。大概一分钟。要不要再拿一些纸巾和番茄酱？",
            keyPhrases: [
              { en: "microwave", zh: "微波加热" },
              { en: "napkins", zh: "纸巾" },
              { en: "ketchup", zh: "番茄酱" },
            ],
            alternativeExpressions: [
              {
                textEn: "No problem, I'll warm it up. Want napkins or any condiments?",
                textZh: "没问题，我帮你热一下。要纸巾或者调料吗？",
                actionHint: "说出还需要什么",
                frequency: "common",
              },
              {
                textEn: "Sure, give me a sec. Need ketchup or mustard with that?",
                textZh: "好的，稍等。要番茄酱或芥末酱吗？",
                actionHint: "选择调料",
                frequency: "occasional",
              },
            ],
            casualVersion: "Yep! I'll zap it for ya. 'Bout a minute. Need any napkins or ketchup?",
            formalityVariants: {
              casual: "Yep! I'll zap it for ya. 'Bout a minute. Need any napkins or ketchup?",
              standard:
                "Sure! I'll microwave it for you. It'll take about a minute. Want me to grab you some napkins and ketchup too?",
              formal:
                "Certainly. I will microwave that for you; it should require approximately one minute. Would you also care for any napkins or ketchup?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please. And do you have plastic bags?",
            textZh: "好的。你们有塑料袋吗？",
            casualVersion: "Yeah, thanks. Got any plastic bags?",
            culturalNote: "美国塑料袋通常收费，纸袋免费",
            commonMistake: {
              wrong: "Do you have plastic bag?",
              correct: "Do you have plastic bags?",
              explanation: "通常指代多个袋子，用复数更地道。",
            },
            formalityVariants: {
              casual: "Yeah, thanks. Got any plastic bags?",
              standard: "Yes, please. And do you have plastic bags?",
              formal: "Yes, thank you. Furthermore, do you provide plastic bags?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "We do, but there's a 10-cent charge per bag. Or you can use one of our free paper bags.",
            textZh: "有的，不过塑料袋每个收10美分。或者您可以用我们的免费纸袋。",
            commonMistake: {
              wrong: "You have plastic bags?",
              correct: "Do you have plastic bags?",
              explanation: "中文口语习惯省略主语，但英文一般不能省略，特别是问句。",
            },
            keyPhrases: [
              { en: "charge per bag", zh: "每个袋子收费" },
              { en: "paper bag", zh: "纸袋" },
            ],
            culturalNote: "很多城市已经对塑料袋收费甚至禁止使用，建议自带环保袋。",
            alternativeExpressions: [
              {
                textEn: "Plastic bags are 10 cents each. Or we have free paper bags if you prefer.",
                textZh: "塑料袋每个10美分。纸袋免费，你选哪个？",
                actionHint: "选择袋子类型",
                frequency: "common",
              },
              {
                textEn: "We charge for plastic bags now. Paper's free though — want one of those?",
                textZh: "塑料袋现在收费了。不过纸袋免费——要纸袋吗？",
                actionHint: "决定用哪种袋子",
                frequency: "occasional",
              },
            ],
            casualVersion: "Yep, but bags are ten cents each. Or just use a free paper one.",
            formalityVariants: {
              casual: "Yep, bags are ten cents each. Or just use a free paper one.",
              standard: "We do, but there's a 10-cent charge per bag. Or you can use one of our free paper bags.",
              formal:
                "Yes, we do, however, there is a 10-cent surcharge per plastic bag. Alternatively, we offer complimentary paper bags.",
            },
          },
          {
            speaker: "you",
            textEn: "A paper bag is fine. Thank you.",
            textZh: "纸袋就行。谢谢。",
            commonMistake: {
              wrong: "Paper bag is OK.",
              correct: "A paper bag is fine.",
              explanation: "'OK' 听起来有点随便或不情愿，用 'fine' 更自然。",
            },
            casualVersion: "Paper bag's good. Thanks.",
            formalityVariants: {
              casual: "Paper bag's good. Thanks.",
              standard: "A paper bag is fine. Thank you.",
              formal: "A paper bag would be perfectly acceptable. Thank you.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Here's your heated sandwich and drink. Your total is $7.99 plus tax, so $8.63. Cash or card?",
            textZh: "给您加热好的三明治和饮料。套餐7.99美元加税，一共8.63美元。现金还是刷卡？",
            commonMistake: {
              wrong: "How much total?",
              correct: "What's the total?",
              explanation: "中文习惯问'多少钱'，但英文问总价常用'What's the total?'",
            },
            keyPhrases: [
              { en: "plus tax", zh: "加税" },
              { en: "total", zh: "总共" },
            ],
            alternativeExpressions: [
              {
                textEn: "Here you go! $7.99 plus tax, so $8.63 total. Cash or card?",
                textZh: "给您！7.99加税，总共8.63美元。现金还是刷卡？",
                actionHint: "选择付款方式",
                frequency: "common",
              },
              {
                textEn: "All set — your total with tax is $8.63. How are you paying?",
                textZh: "好了——含税一共8.63美元。怎么付？",
                actionHint: "告诉店员付款方式",
                frequency: "occasional",
              },
            ],
            casualVersion: "Here's your heated sandwich and drink. Total's $7.99 plus tax, so $8.63. Cash or card?",
            culturalNote: "美国标价不含税，结账时会加上",
            formalityVariants: {
              casual: "Here's your sandwich and drink. Total's $8.63. Cash or card?",
              standard: "Here's your heated sandwich and drink. Your total is $7.99 plus tax, so $8.63. Cash or card?",
              formal:
                "Here is your warmed sandwich and beverage. Your total amounts to $7.99 plus applicable taxes, resulting in a grand total of $8.63. Will that be cash or credit card?",
            },
          },
          {
            speaker: "you",
            textEn: "Card, please. Can I tap?",
            textZh: "刷卡。可以感应支付吗？",
            culturalNote: "感应支付'tap'是新式说法，可能和中国常用的'扫码'（scan）不同。",
            casualVersion: "Card. Can I just tap it?",
            commonMistake: {
              wrong: "Can I touch?",
              correct: "Can I tap?",
              explanation: "感应支付用'tap'而非'touch'，'touch'指触摸行为。",
            },
            formalityVariants: {
              casual: "Card. Can I just tap it?",
              standard: "Card, please. Can I tap?",
              formal: "I will be paying by card, please. Am I able to utilize the contactless payment feature?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yep, just tap right here. All set! Have a good one.",
            textZh: "可以，在这里感应一下就行。好了！祝您愉快。",
            commonMistake: {
              wrong: "Happy day!",
              correct: "Have a good one!",
              explanation: "中国人常直译'祝你有个愉快的一天'，但美国人常用'Have a good one'。",
            },
            keyPhrases: [
              { en: "tap right here", zh: "在这里感应" },
              { en: "all set", zh: "好了/搞定了" },
              { en: "have a good one", zh: "祝你愉快" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure, just tap here. Done! Have a good one!",
                textZh: "可以，在这里感应。好了！祝你愉快！",
                actionHint: "完成付款",
                frequency: "common",
              },
              {
                textEn: "Go ahead and tap. All good! Enjoy your meal.",
                textZh: "感应一下吧。搞定了！好好吃。",
                actionHint: "付款完成，可以走了",
                frequency: "occasional",
              },
            ],
            casualVersion: "Yep, tap it here. All good! Have a good one.",
            formalityVariants: {
              casual: "Yep, tap it here. All good! Have a good one.",
              standard: "Yep, just tap right here. All set! Have a good one.",
              formal:
                "Yes, certainly, please tap your card on the terminal here. The transaction is complete. Have a pleasant day.",
            },
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
            culturalNote: "在美国，询问是否接受中国卡时，直接说 'international credit card' 更自然，而非 'forei",
            casualVersion: "Hey, y'all take foreign credit cards? Got a card from China.",
            commonMistake: {
              wrong: "Do you receive foreign credit cards?",
              correct: "Do you accept foreign credit cards?",
              explanation: "“receive” 用于收到东西，“accept” 或 “take” 用于接受支付方式。",
            },
            formalityVariants: {
              casual: "Hey, you guys take foreign cards? Mine's from China.",
              standard: "Hi, do you accept foreign credit cards? I have a card from China.",
              formal:
                "Good morning/afternoon, I was wondering if your establishment accepts international credit cards. Specifically, I have a card issued in China.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "We accept Visa and Mastercard, including international ones. UnionPay might work too — let me try it. If not, we also take Apple Pay and Google Pay.",
            textZh:
              "我们收 Visa 和万事达卡，包括国际卡。银联也可能行——我帮您试一下。不行的话，我们也接受 Apple Pay 和 Google Pay。",
            culturalNote: "银联卡（UnionPay）在美国接受度不如Visa/Mastercard广，建议中国游客同时准备这两种卡。",
            commonMistake: {
              wrong: "I can use UnionPay?",
              correct: "Can I use UnionPay?",
              explanation: "中文口语习惯省略主语，但英文一般不能省略，特别是问句。",
            },
            variations: [
              {
                textEn: "Most international cards should work. Just insert or tap your card and we'll see.",
                textZh: "大多数国际卡都能用。插卡或感应试试看。",
              },
            ],
            keyPhrases: [
              { en: "foreign credit card", zh: "外国信用卡" },
              { en: "international", zh: "国际的" },
              { en: "UnionPay", zh: "银联" },
            ],
            responseTip: "出国前确认你的卡片开通了境外交易功能。",
            alternativeExpressions: [
              {
                textEn: "Most international cards work. Just try inserting or tapping it and we'll see.",
                textZh: "大多数国际卡都能用。插卡或感应试试就知道了。",
                actionHint: "直接试刷卡",
                frequency: "common",
              },
              {
                textEn: "We take Visa and Mastercard. If your card doesn't work, we also accept Apple Pay.",
                textZh: "我们收Visa和万事达。如果你的卡刷不了，也可以用Apple Pay。",
                actionHint: "准备备选支付方式",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, we take Visa, Mastercard, even international ones. UnionPay *might* work, lemme try it. If not, we got Apple Pay and Google Pay too.",
            formalityVariants: {
              casual:
                "Yeah, Visa, Mastercard, international ones included. UnionPay *might* go through, I can try. Otherwise, we do Apple/Google Pay.",
              standard:
                "We accept Visa and Mastercard, including international ones. UnionPay might work as well – I can attempt to process it for you. If not, we also accept Apple Pay and Google Pay.",
              formal:
                "Our system is configured to accept Visa and Mastercard, both domestic and international variants. We can also attempt to process UnionPay, should you wish. Furthermore, we provide alternative payment options such as Apple Pay and Google Pay.",
            },
          },
          {
            speaker: "you",
            textEn: "Great, it went through! Can I get a receipt? I need it for my expense report.",
            textZh: "太好了，刷过了！能给我一张收据吗？我需要报销。",
            culturalNote: "美国公司报销通常需要纸质或电子收据，不像中国有时可提供'发票'。",
            casualVersion: "Awesome, it worked! Can I get a receipt? Need it for my expenses.",
            commonMistake: {
              wrong: "I need a receipt for my reimbursement.",
              correct: "I need it for my expense report.",
              explanation: "“expense report” 指报销单据，“reimbursement” 是报销行为或款项。",
            },
            formalityVariants: {
              casual: "Sweet, it worked! Receipt please? For my expenses.",
              standard: "Great, it went through! May I have a receipt, please? I require it for my expense report.",
              formal:
                "Excellent, the transaction was successful. Would it be possible to obtain a receipt? I require it for corporate expense reporting purposes.",
            },
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
              {
                textEn: "Sure, here's your receipt. I can email you a copy too if you want.",
                textZh: "好的，给您收据。需要的话也可以发电子版到邮箱。",
                actionHint: "拿好收据",
                frequency: "common",
              },
              {
                textEn: "No problem. Paper or email receipt? We can do both.",
                textZh: "没问题。要纸质的还是电子的？两个都可以给你。",
                actionHint: "选择收据方式",
                frequency: "occasional",
              },
            ],
            casualVersion: "Yep. Here's your receipt. Can email it if you want a digital copy too.",
            formalityVariants: {
              casual: "Sure. Here's your receipt. Wanna digital one? I can email it.",
              standard:
                "Certainly. Here is your receipt. I can also send a digital copy to your email address if you wish.",
              formal:
                "Absolutely. Please find your physical receipt here. Should you require a digital record, I would be pleased to email it to you.",
            },
          },
          {
            speaker: "you",
            textEn: "Actually, I just realized I grabbed the wrong item. Can I return this and get the right one?",
            textZh: "不好意思，我发现拿错了。能退了换一个对的吗？",
            casualVersion: "Shoot, just realized I grabbed the wrong thing. Can I return this for the right one?",
            commonMistake: {
              wrong: "Can I change this for the right one?",
              correct: "Can I return this and get the right one?",
              explanation: "“change” 通常指改变，“return and get” 或 “exchange” 更明确指退换商品。",
            },
            formalityVariants: {
              casual: "Oops, just grabbed the wrong thing. Can I swap it for the correct one?",
              standard:
                "My apologies, I've just realized I picked up the incorrect item. Would it be possible to return this and acquire the correct one?",
              formal:
                "Pardon me, but I have just discerned that I inadvertently selected an item other than my intended purchase. Would it be permissible to process a return for this item and subsequently obtain the correct product?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Since you just bought it, no problem at all. I'll void that item and ring up the correct one. What did you actually need?",
            textZh: "刚买的没问题。我帮您取消这个，重新扫对的那个。您实际需要哪个？",
            commonMistake: {
              wrong: "I want another one",
              correct: "Which one do you actually need?",
              explanation: "中国人可能直接说'我想要另一个'，但店员需要具体信息。",
            },
            keyPhrases: [
              { en: "void", zh: "取消/作废" },
              { en: "ring up", zh: "结账/扫码" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn: "Oh sure, no worries. I'll cancel that and scan the right one. What did you need?",
                textZh: "没事。我帮你取消这个，扫对的。你要哪个？",
                actionHint: "说出正确的商品",
                frequency: "common",
              },
              {
                textEn: "No problem at all. Let me just void this item. Which one did you actually want?",
                textZh: "完全没问题。我作废这个。你实际要哪个？",
                actionHint: "指出正确的商品",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Since you just bought it, totally fine. I'll just void that and ring up the right one. What'd you actually want?",
            formalityVariants: {
              casual:
                "No worries, since you just got it. I'll just void that and charge you for the right one. What *did* you want?",
              standard:
                "Given your recent purchase, it's absolutely fine. I will void the current item and process the correct one for you. What exactly were you looking for?",
              formal:
                "As this is a very recent acquisition, we can certainly accommodate your request. I will proceed with voiding the previous transaction and then process the correct item. Could you please specify which product you had originally intended to purchase?",
            },
          },
          {
            speaker: "you",
            textEn: "I wanted the sugar-free version, not the regular one.",
            textZh: "我想要无糖的，不是普通的。",
            commonMistake: {
              wrong: "I want sugar-free",
              correct: "I wanted the sugar-free version",
              explanation: "直接说'我想要无糖的'可能会听起来太直接或不完整。",
            },
            casualVersion: "Wanted the sugar-free one, not the regular.",
            formalityVariants: {
              casual: "Yeah, the sugar-free one, not the normal.",
              standard: "I was looking for the sugar-free version, as opposed to the regular one.",
              formal: "My preference was for the sugar-free variant, rather than the standard formulation.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Got it. The sugar-free one is actually the same price, so I'll just swap it out. Here's your updated receipt. The refund for the first one will show up on your card in a day or two.",
            textZh: "明白了。无糖版其实价格一样，直接帮您换。给您新的收据。之前那个的退款一两天内会退到您卡上。",
            keyPhrases: [
              { en: "sugar-free", zh: "无糖的" },
              { en: "swap it out", zh: "换掉" },
              { en: "updated receipt", zh: "新的收据" },
              { en: "refund", zh: "退款" },
            ],
            alternativeExpressions: [
              {
                textEn: "Easy fix. Same price, so I'll just switch it out. Here's your new receipt.",
                textZh: "小事。价格一样，直接换。给你新收据。",
                actionHint: "拿好新收据",
                frequency: "common",
              },
              {
                textEn:
                  "No problem. I'll swap that for the sugar-free one. The refund for the other one will hit your card soon.",
                textZh: "没问题。帮你换成无糖的。之前那个退款很快会到卡上。",
                actionHint: "注意查看退款",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Gotcha. Sugar-free's the same price, so I'll just swap 'em. Here's your new receipt. Refund for the old one'll hit your card in a day or two.",
            formalityVariants: {
              casual:
                "Okay, same price for sugar-free, so I'll just switch 'em. Here's the new receipt. Old refund hits your card in a couple days.",
              standard:
                "Understood. The sugar-free version is indeed the same price, so I will simply exchange it for you. Here is your revised receipt. Please anticipate the refund for the initial item to appear on your card within one to two business days.",
              formal:
                "Acknowledged. The sugar-free variant carries the identical price point, therefore I shall proceed with the direct exchange. I present to you the updated sales receipt. Please be advised that the reimbursement for your prior purchase will be reflected on your card statement within approximately one to two banking days.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect. Thank you for being so helpful!",
            textZh: "太好了。谢谢你这么热心！",
            commonMistake: {
              wrong: "You are so helpful!",
              correct: "Thank you for being so helpful!",
              explanation: "中国人可能直接说'你很热心！'但英文通常更委婉，用'thank you for'。",
            },
            casualVersion: "Perfect. Thanks for being so helpful!",
            formalityVariants: {
              casual: "Awesome. Thanks for the help!",
              standard: "Perfect. I truly appreciate your assistance!",
              formal: "Excellent. I am exceedingly grateful for your exceptional assistance and attentiveness!",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "No problem! Come back anytime. Have a great day!",
            textZh: "不客气！欢迎再来。祝您有美好的一天！",
            alternativeExpressions: [
              {
                textEn: "You're welcome! See you around. Have a good one!",
                textZh: "不客气！回见。祝你愉快！",
                actionHint: "礼貌道别",
                frequency: "common",
              },
              {
                textEn: "Anytime! Take care and have a great day.",
                textZh: "随时来！保重，祝你有美好的一天。",
                actionHint: "礼貌回应",
                frequency: "common",
              },
            ],
            casualVersion: "No problem! Come back anytime. Have a good one!",
            formalityVariants: {
              casual: "No prob! See ya anytime. Have a good one!",
              standard: "You're most welcome! We look forward to your next visit. Have a wonderful day!",
              formal:
                "It was my pleasure to assist you. We sincerely hope to welcome you back again soon. I wish you an excellent remainder of your day.",
            },
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
            casualVersion: "Hey, got any cold meds? My throat's been sore since yesterday.",
            culturalNote: "美国购物时问询商品不常用'请问'，直接说需求更自然。",
            commonMistake: {
              wrong: "Do you have cold medicine? I have a sore throat since yesterday.",
              correct: "Do you carry any cold medicine? I've had a sore throat since yesterday.",
              explanation: "“have”在问店里是否有某种商品时不如“carry”或“stock”地道，且'since yesterday'应搭配完成时。",
            },
            formalityVariants: {
              casual: "Hey, got any cold meds? Throat's been sore since yesterday.",
              standard: "Excuse me, do you carry any cold medicine? I've had a sore throat since yesterday.",
              formal:
                "Pardon me, I was wondering if you stock any cold remedies. I've been experiencing a sore throat since yesterday.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Yes, we have a small pharmacy section in the back. For a sore throat, I'd recommend these lozenges or this throat spray. If you also have congestion, this multi-symptom cold medicine works well.",
            textZh:
              "有的，后面有一个小药品区。嗓子疼的话，推荐这种含片或者这个喉咙喷雾。如果还有鼻塞，这款多症状感冒药效果不错。",
            variations: [
              {
                textEn:
                  "Sure, our medicine section is over there. For sore throat, we have cough drops, throat spray, and some OTC cold medicine.",
                textZh: "有的，药品区在那边。嗓子疼的话，有止咳糖、喉咙喷雾和一些非处方感冒药。",
              },
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
              {
                textEn:
                  "Yeah, we've got some stuff for that. Throat lozenges, spray, and cold medicine are all in the back.",
                textZh: "有的，我们有治这个的。含片、喷雾和感冒药都在后面。",
                actionHint: "去后面药品区看看",
                frequency: "common",
              },
              {
                textEn: "Sure, our medicine aisle has cough drops and throat spray. Want me to show you?",
                textZh: "有的，药品那排有止咳糖和喉咙喷雾。要我带你去看看吗？",
                actionHint: "让店员带你去",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, we got a small pharmacy section in the back. For a sore throat, I'd suggest these lozenges or this throat spray. If you also got congestion, this multi-symptom cold medicine's good.",
            formalityVariants: {
              casual:
                "Yeah, small pharmacy section in the back. For a sore throat, I'd suggest these lozenges or this spray. Got congestion too? This multi-symptom cold medicine's good.",
              standard:
                "Yes, we have a small pharmacy section in the back. For a sore throat, I'd recommend these lozenges or this throat spray. If you also have congestion, this multi-symptom cold medicine works well.",
              formal:
                "Certainly, our establishment features a modest pharmaceutical section located towards the rear. For a pharyngitis or sore throat, I would highly recommend either these lozenges or this topical throat spray. Should you also be experiencing nasal congestion, this particular multi-symptom cold medication is quite effective.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take the throat spray. Do you also have any pain relievers? Like ibuprofen?",
            textZh: "我要喉咙喷雾。你们还有止痛药吗？比如布洛芬？",
            casualVersion: "I'll grab the throat spray. Got any pain relievers too? Like ibuprofen?",
            commonMistake: {
              wrong: "I also need pain relievers? For example ibuprofen?",
              correct: "Do you also have any pain relievers? Like ibuprofen?",
              explanation: "“Like [item]?” 比 “For example [item]?” 更自然地用于举例询问，且句式更简洁。",
            },
            formalityVariants: {
              casual: "I'll grab the throat spray. Got any pain relievers too? Like ibuprofen?",
              standard: "I'll take the throat spray. Do you also have any pain relievers? Like ibuprofen?",
              formal:
                "I will select the throat spray. Additionally, do you stock any analgesics? For instance, ibuprofen?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Yes, we have ibuprofen and acetaminophen. The ibuprofen is better for inflammation, while acetaminophen is gentler on the stomach. Which would you prefer?",
            textZh: "有的，布洛芬和对乙酰氨基酚都有。布洛芬对消炎更好，对乙酰氨基酚对胃更温和。您要哪种？",
            culturalNote: "美国非处方药种类多，店员会介绍不同药品的功效和区别，患者需自行选择。",
            commonMistake: {
              wrong: "I choose ibuprofen",
              correct: "I'll take ibuprofen",
              explanation: "中文说'我选择布洛芬'，但英文购买时常用'I'll take'或'I'll get'。",
            },
            keyPhrases: [
              { en: "pain reliever", zh: "止痛药" },
              { en: "ibuprofen", zh: "布洛芬" },
              { en: "acetaminophen", zh: "对乙酰氨基酚" },
              { en: "inflammation", zh: "消炎/炎症" },
              { en: "gentler on the stomach", zh: "对胃更温和" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn:
                  "We have both ibuprofen and Tylenol. Ibuprofen is better for swelling, Tylenol is easier on your stomach.",
                textZh: "布洛芬和泰诺都有。布洛芬消肿好，泰诺对胃温和。",
                actionHint: "根据症状选择",
                frequency: "common",
              },
              {
                textEn:
                  "Sure! Advil or Tylenol — depends on what you need. Advil for inflammation, Tylenol if your stomach's sensitive.",
                textZh: "有的！Advil或泰诺——看你需要什么。消炎选Advil，胃不好选泰诺。",
                actionHint: "选适合自己的",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, we got ibuprofen and acetaminophen. Ibuprofen's better for inflammation, while acetaminophen's easier on the stomach. Which one you prefer?",
            formalityVariants: {
              casual:
                "Yeah, we got ibuprofen and acetaminophen. Ibuprofen's better for inflammation, acetaminophen's easier on the stomach. Which one you prefer?",
              standard:
                "Yes, we have ibuprofen and acetaminophen. The ibuprofen is better for inflammation, while acetaminophen is gentler on the stomach. Which would you prefer?",
              formal:
                "Yes, both ibuprofen and acetaminophen are available. Ibuprofen is generally more effective for addressing inflammation, whereas acetaminophen is typically milder on the gastrointestinal system. Which formulation would you prefer?",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'll go with ibuprofen. Also, I need some basic skincare stuff. Do you have sunscreen and lip balm?",
            textZh: "那我要布洛芬。另外，我还需要一些基本的护肤品。有防晒霜和润唇膏吗？",
            casualVersion: "I'll take ibuprofen. Also, need some skincare stuff. Got sunscreen and lip balm?",
            commonMistake: {
              wrong: "I also need some daily necessities. Do you have sunscreen and lip balm?",
              correct: "I also need some basic skincare stuff. Do you have sunscreen and lip balm?",
              explanation: "“daily necessities”范围过广，不特指护肤品；“skincare stuff”更自然口语化，且直接表达需求。",
            },
            formalityVariants: {
              casual: "I'll take ibuprofen. Also, need some skincare stuff. Got sunscreen and lip balm?",
              standard:
                "I'll go with ibuprofen. Also, I need some basic skincare stuff. Do you have sunscreen and lip balm?",
              formal:
                "I will opt for the ibuprofen. In addition, I require some fundamental skincare products. Do you carry sunscreen and lip balm?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Sure! Sunscreen is on this shelf — we have SPF 30 and SPF 50. For lip balm, we have several options with and without SPF. This one with SPF 15 is our best seller.",
            textZh:
              "有的！防晒霜在这个架子上——有SPF 30和SPF 50的。润唇膏有好几款，有含防晒和不含防晒的。这款带SPF 15的卖得最好。",
            keyPhrases: [
              { en: "sunscreen", zh: "防晒霜" },
              { en: "SPF", zh: "防晒指数" },
              { en: "lip balm", zh: "润唇膏" },
              { en: "best seller", zh: "最畅销的" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sunscreen's on this shelf — SPF 30 and 50. And these lip balms with SPF are really popular.",
                textZh: "防晒霜在这个架子上——有30和50倍的。这些带防晒的润唇膏特别畅销。",
                actionHint: "选择防晒指数",
                frequency: "common",
              },
              {
                textEn:
                  "We've got a few options. SPF 50 if you're out in the sun a lot. This lip balm's our best seller.",
                textZh: "有好几种。经常晒太阳选SPF 50的。这款润唇膏卖得最好。",
                actionHint: "根据需求选择",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep! Sunscreen's over here — we've got SPF 30 and SPF 50. For lip balm, several options, with and without SPF. This one with SPF 15's our best seller.",
            formalityVariants: {
              casual:
                "Yep! Sunscreen's over here — we've got SPF 30 and 50. Lip balm, several options, with and without SPF. This SPF 15 one's our best seller.",
              standard:
                "Sure! Sunscreen is on this shelf — we have SPF 30 and SPF 50. For lip balm, we have several options with and without SPF. This one with SPF 15 is our best seller.",
              formal:
                "Certainly! The sunscreens are located on this particular shelf, available in both SPF 30 and SPF 50 formulations. Regarding lip balms, we offer a variety of options, both with and without sun protection factor. This specific product, featuring SPF 15, is currently our most popular item.",
            },
          },
          {
            speaker: "you",
            textEn: "Great. I also need a small tube of toothpaste and a toothbrush. Travel-sized if you have them.",
            textZh: "好的。我还需要一小管牙膏和一把牙刷。有旅行装的吗？",
            casualVersion: "Cool. Also need a small tube of toothpaste and a toothbrush. Travel size if you got 'em.",
            commonMistake: {
              wrong: "Do you have mini-size ones?",
              correct: "Travel-sized if you have them.",
              explanation:
                "“旅行装”最地道的说法是 “travel-sized”，而非 “mini-size”；口语中直接用'if you have them'更自然。",
            },
            formalityVariants: {
              casual: "Cool. Also need a small toothpaste and a toothbrush. Travel size if you got 'em.",
              standard:
                "Great. I also need a small tube of toothpaste and a toothbrush. Travel-sized if you have them.",
              formal:
                "Excellent. I will also require a small tube of toothpaste and a toothbrush. Are travel-sized versions available, please?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Yes, we have travel-sized toiletries right by the register. Toothpaste, toothbrush, mini shampoo, deodorant — all under the travel section. They're TSA-approved sizes too, so you can take them on a plane.",
            textZh:
              "有的，收银台旁边就有旅行装洗漱用品。牙膏、牙刷、迷你洗发水、止汗剂——都在旅行用品区。大小也符合飞机安检标准，可以带上飞机。",
            keyPhrases: [
              { en: "travel-sized", zh: "旅行装" },
              { en: "toiletries", zh: "洗漱用品" },
              { en: "TSA-approved", zh: "符合安检标准" },
              { en: "deodorant", zh: "止汗剂/除臭剂" },
            ],
            responseTip: "旅行装通常是100ml以下，符合各国航空安检的液体限制。",
            alternativeExpressions: [
              {
                textEn:
                  "Travel stuff is right by the register — toothpaste, toothbrush, mini shampoo, all TSA-friendly sizes.",
                textZh: "旅行用品就在收银台旁边——牙膏、牙刷、迷你洗发水，都是符合安检的大小。",
                actionHint: "去收银台旁边看看",
                frequency: "common",
              },
              {
                textEn: "Yep, we carry travel-sized everything. They're all small enough for carry-on.",
                textZh: "有的，旅行装都有。都够小，可以带上飞机。",
                actionHint: "选择需要的用品",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, we got travel-sized toiletries right up front, by the register. Toothpaste, toothbrush, mini shampoo, deodorant — all in the travel section. TSA-approved sizes too, so you can take 'em on the plane.",
            culturalNote: "TSA-approved 是美国机场安检标准，了解其意义很重要。",
            formalityVariants: {
              casual:
                "Yeah, travel-sized toiletries are right up front. Toothpaste, toothbrush, mini shampoo, deodorant — all in that travel section. TSA-approved too, so you can take 'em on the plane.",
              standard:
                "Yes, we have travel-sized toiletries right by the register. Toothpaste, toothbrush, mini shampoo, deodorant — all under the travel section. They're TSA-approved sizes too, so you can take them on a plane.",
              formal:
                "Indeed, we stock an assortment of travel-sized toiletries conveniently located near the checkout register. This includes toothpaste, toothbrushes, miniature shampoos, and deodorants, all categorized within our travel essentials section. These items also adhere to TSA regulations, permitting their carriage onto aircraft.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Perfect. Can you recommend anything for jet lag? I just arrived yesterday and I can't sleep at night.",
            textZh: "太好了。有什么治时差的东西推荐吗？我昨天刚到，晚上睡不着。",
            casualVersion: "Awesome. Anything for jet lag? Just got here yesterday, can't sleep.",
            commonMistake: {
              wrong: "What do you recommend about jet lag?",
              correct: "Can you recommend anything for jet lag?",
              explanation: "询问针对某种症状的药或推荐时，用 “for [symptom]” 是地道表达，避免直译。",
            },
            formalityVariants: {
              casual: "Awesome. Anything for jet lag? Just got here yesterday, can't sleep.",
              standard:
                "Perfect. Can you recommend anything for jet lag? I just arrived yesterday and I can't sleep at night.",
              formal:
                "Excellent. Might you be able to recommend any remedies for jet lag? I only arrived yesterday and am experiencing difficulty sleeping during the night.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "We have melatonin supplements — they're really popular for jet lag. The 3mg dose is usually enough. We also have herbal sleep tea and lavender pillow spray. I'd suggest trying the melatonin first.",
            textZh:
              "我们有褪黑素补充剂——对倒时差很受欢迎。3毫克的剂量通常就够了。我们还有草本助眠茶和薰衣草枕头喷雾。建议先试试褪黑素。",
            keyPhrases: [
              { en: "melatonin", zh: "褪黑素" },
              { en: "supplements", zh: "补充剂" },
              { en: "jet lag", zh: "时差" },
              { en: "herbal sleep tea", zh: "草本助眠茶" },
              { en: "dose", zh: "剂量" },
            ],
            culturalNote: "褪黑素在美国作为保健品出售，不需要处方。但在一些国家是处方药，购买前建议了解当地法规。",
            alternativeExpressions: [
              {
                textEn: "Melatonin is great for jet lag. Start with 3mg — take it about 30 minutes before bed.",
                textZh: "褪黑素治时差挺好的。从3毫克开始，睡前30分钟吃。",
                actionHint: "了解服用方法",
                frequency: "common",
              },
              {
                textEn:
                  "For jet lag? Try melatonin. We also have sleepy tea and lavender spray if you prefer something natural.",
                textZh: "时差？试试褪黑素。也有助眠茶和薰衣草喷雾，如果你喜欢天然的。",
                actionHint: "选择适合的助眠产品",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "We got melatonin supplements — they're super popular for jet lag. The 3mg dose is usually fine. We also got herbal sleep tea and lavender pillow spray. I'd say try the melatonin first.",
            formalityVariants: {
              casual:
                "We got melatonin — super popular for jet lag. 3mg dose is usually fine. Also got herbal sleep tea and lavender pillow spray. I'd say try the melatonin first.",
              standard:
                "We have melatonin supplements — they're really popular for jet lag. The 3mg dose is usually enough. We also have herbal sleep tea and lavender pillow spray. I'd suggest trying the melatonin first.",
              formal:
                "We do offer melatonin supplements, which are quite popular for mitigating jet lag. A 3-milligram dosage is typically sufficient. Additionally, we stock herbal sleep teas and a lavender pillow spray. However, I would initially suggest attempting the melatonin.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll try the melatonin. Let me get all of these. What's the total?",
            textZh: "我试试褪黑素。这些都要了。一共多少钱？",
            casualVersion: "I'll grab the melatonin. I'll take all this stuff. How much is it?",
            commonMistake: {
              wrong: "Total how much money?",
              correct: "What's the total?",
              explanation: "询问总价时，“What's the total?” 或 “How much is it?” 是地道表达，避免直译。",
            },
            formalityVariants: {
              casual: "I'll grab the melatonin. I'll take all this stuff. How much?",
              standard: "I'll try the melatonin. Let me get all of these. What's the total?",
              formal: "I will proceed with the melatonin. Kindly include all of these items. What is the grand total?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Let me ring everything up... throat spray $8.99, ibuprofen $6.49, sunscreen $11.99, lip balm $3.49, travel toothpaste and toothbrush set $4.99, and melatonin $7.99. Your total with tax is $47.52. Would you like a bag?",
            textZh:
              "我帮您算一下……喉咙喷雾8.99美元，布洛芬6.49美元，防晒霜11.99美元，润唇膏3.49美元，旅行牙膏牙刷套装4.99美元，褪黑素7.99美元。含税一共47.52美元。需要袋子吗？",
            keyPhrases: [
              { en: "ring everything up", zh: "全部结账" },
              { en: "with tax", zh: "含税" },
            ],
            alternativeExpressions: [
              {
                textEn: "Okay, let me add it all up... Your total with tax is $47.52. Need a bag?",
                textZh: "好，我算一下……含税一共47.52美元。需要袋子吗？",
                actionHint: "决定是否要袋子",
                frequency: "common",
              },
              {
                textEn: "Everything together comes to $47.52 after tax. Want me to bag all of this?",
                textZh: "全部加起来含税47.52美元。要帮你装袋吗？",
                actionHint: "准备付款",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Lemme just ring this up... throat spray $8.99, ibuprofen $6.49, sunscreen $11.99, lip balm $3.49, travel toothpaste and toothbrush set $4.99, and melatonin $7.99. Total with tax is $47.52. Need a bag?",
            culturalNote: "在美国，购物袋常需额外付费，或只提供纸袋。常被问是否需要。",
            formalityVariants: {
              casual:
                "Lemme just ring this up... throat spray $8.99, ibuprofen $6.49, sunscreen $11.99, lip balm $3.49, travel toothpaste and toothbrush set $4.99, and melatonin $7.99. Total with tax is $47.52. Need a bag?",
              standard:
                "Let me ring everything up... throat spray $8.99, ibuprofen $6.49, sunscreen $11.99, lip balm $3.49, travel toothpaste and toothbrush set $4.99, and melatonin $7.99. Your total with tax is $47.52. Would you like a bag?",
              formal:
                "Allow me to process these items for you. The throat spray is $8.99, ibuprofen is $6.49, sunscreen is $11.99, lip balm is $3.49, the travel toothpaste and toothbrush set is $4.99, and the melatonin is $7.99. Your grand total, inclusive of tax, amounts to $47.52. May I inquire if you would like a shopping bag?",
            },
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
            textEn:
              "Welcome! Our most popular items are these handmade keychains, local chocolate boxes, and fridge magnets. The postcards are also a big hit. Are you shopping for yourself or for gifts?",
            textZh:
              "欢迎！最受欢迎的是这些手工钥匙扣、当地巧克力礼盒和冰箱贴。明信片也很受欢迎。您是给自己买还是送人？",
            variations: [
              {
                textEn:
                  "Our best sellers are the handcrafted items on this wall. We also have T-shirts, mugs, and local snacks. Anything catch your eye?",
                textZh: "我们最畅销的是这面墙上的手工制品。还有T恤、马克杯和当地零食。有看中什么吗？",
              },
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
              {
                textEn:
                  "Our best sellers are the keychains, magnets, and local chocolates. Shopping for yourself or picking up gifts?",
                textZh: "卖得最好的是钥匙扣、冰箱贴和本地巧克力。给自己买还是送人？",
                actionHint: "说明购买目的",
                frequency: "common",
              },
              {
                textEn: "Tourists love our handmade crafts and local snacks. What are you looking for?",
                textZh: "游客都很喜欢我们的手工艺品和当地零食。你想找什么？",
                actionHint: "说出你的需求",
                frequency: "occasional",
              },
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
            textEn:
              "For parents, I'd suggest this local tea set or the handpainted ceramics — they're unique and very nice quality. For friends, the keychains and chocolate boxes are always a safe bet. We also have these cute enamel pins that are really popular right now.",
            textZh:
              "给父母的话，推荐这套当地茶具或者手绘陶瓷——独特而且质量很好。朋友的话，钥匙扣和巧克力礼盒最保险了。我们还有这些可爱的珐琅徽章，现在特别火。",
            keyPhrases: [
              { en: "tea set", zh: "茶具" },
              { en: "handpainted", zh: "手绘的" },
              { en: "ceramics", zh: "陶瓷" },
              { en: "safe bet", zh: "保险的选择" },
              { en: "enamel pins", zh: "珐琅徽章" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For parents, this tea set or the ceramics are great. For friends, keychains and chocolates never go wrong.",
                textZh: "给父母的话，这套茶具或陶瓷很好。给朋友的话，钥匙扣和巧克力准没错。",
                actionHint: "看看推荐的礼物",
                frequency: "common",
              },
              {
                textEn:
                  "The handpainted stuff is really popular for parents. And these enamel pins are perfect for friends.",
                textZh: "手绘的东西送父母很受欢迎。这些珐琅徽章送朋友特别合适。",
                actionHint: "按送礼对象选择",
                frequency: "occasional",
              },
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
            textEn:
              "The tea set is $45. And yes, we offer free gift wrapping! I can wrap it in this traditional paper with a ribbon. Would you also like a gift bag?",
            textZh: "茶具45美元。可以免费包装！我可以用这种传统包装纸配丝带包起来。要不要再配一个礼品袋？",
            keyPhrases: [
              { en: "gift wrapping", zh: "礼品包装" },
              { en: "ribbon", zh: "丝带" },
              { en: "gift bag", zh: "礼品袋" },
              { en: "free", zh: "免费的" },
            ],
            alternativeExpressions: [
              {
                textEn: "It's $45. And yes, gift wrapping is free! I can use this nice paper with a bow.",
                textZh: "45美元。包装免费！我可以用这个漂亮的纸配蝴蝶结。",
                actionHint: "确认包装方式",
                frequency: "common",
              },
              {
                textEn: "That one's $45. We wrap for free — want a gift box with a ribbon?",
                textZh: "那个45美元。免费包装——要礼盒配丝带吗？",
                actionHint: "选择包装样式",
                frequency: "occasional",
              },
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
            textEn:
              "Great choices! The keychains are $8 each and the chocolate boxes are $12 each. So that's $45 for the tea set, $32 for the keychains, and $24 for the chocolates. Your total is $101. Shall I wrap everything separately?",
            textZh:
              "选得好！钥匙扣每个8美元，巧克力每盒12美元。茶具45美元，钥匙扣32美元，巧克力24美元。总共101美元。要分开包装吗？",
            keyPhrases: [
              { en: "each", zh: "每个" },
              { en: "wrap separately", zh: "分开包装" },
              { en: "total", zh: "总共" },
            ],
            alternativeExpressions: [
              {
                textEn: "So that's $101 altogether. Want me to wrap each one separately?",
                textZh: "一共101美元。要每个分开包吗？",
                actionHint: "说明包装需求",
                frequency: "common",
              },
              {
                textEn:
                  "Keychains are $8 each, chocolates are $12 each, plus the tea set. Total's $101. How should I wrap them?",
                textZh: "钥匙扣每个8美元，巧克力每盒12美元，加茶具。总共101美元。怎么包装？",
                actionHint: "告诉店员包装方式",
                frequency: "occasional",
              },
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
            textEn:
              "Sure thing! Here you go. I also put some extra padding around the tea set so it's safe for travel. Enjoy the rest of your trip!",
            textZh: "好的！给您。茶具我还额外加了防震垫，方便带回去。祝您旅途愉快！",
            keyPhrases: [
              { en: "extra padding", zh: "额外防震垫" },
              { en: "safe for travel", zh: "方便旅途携带" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "All wrapped up! I padded the tea set extra well so it'll survive the trip. Have a wonderful vacation!",
                textZh: "都包好了！茶具特别加了防震，路上不怕碎。祝旅途愉快！",
                actionHint: "确认包装妥当",
                frequency: "common",
              },
              {
                textEn: "Here you go! The tea set is wrapped with bubble wrap inside. Safe travels!",
                textZh: "给您！茶具里面包了气泡膜。一路平安！",
                actionHint: "放心带走",
                frequency: "occasional",
              },
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
            textEn:
              "These are our handwoven silk scarves. They're $60 each. The designs are all unique — each one is made by local artisans.",
            textZh: "这些是我们的手工丝绸围巾。每条60美元。每条设计都不同——都是本地工匠手工做的。",
            keyPhrases: [
              { en: "handwoven", zh: "手工编织的" },
              { en: "silk", zh: "丝绸" },
              { en: "artisans", zh: "工匠" },
              { en: "unique", zh: "独一无二的" },
            ],
            alternativeExpressions: [
              {
                textEn: "These are handmade silk — $60 each. Every one is different, made by local craftspeople.",
                textZh: "这些是手工丝绸——每条60美元。每条都不一样，本地手艺人做的。",
                actionHint: "了解商品信息",
                frequency: "common",
              },
              {
                textEn: "They're $60 apiece. All handwoven — you won't find two alike.",
                textZh: "每条60美元。都是手工编织的——找不到两条一样的。",
                actionHint: "看看花色选择",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "They're lovely, but $60 is a bit more than I wanted to spend. Is there any flexibility on the price?",
            textZh: "很漂亮，但60美元有点超出我的预算。价格能商量吗？",
            culturalNote:
              "在一些旅游市场和纪念品店可以砍价，但在品牌店或正规商店通常不可以。先观察其他顾客的行为再决定。",
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
              {
                textEn: "I can knock off five bucks. $55 is the best I can do for one.",
                textZh: "可以便宜5块。一条的话55美元是最低了。",
                actionHint: "考虑接受或继续还价",
                frequency: "common",
              },
              {
                textEn: "How about $55? That's pretty much the lowest I can go for a single scarf.",
                textZh: "55美元怎么样？单条的话这基本是底价了。",
                actionHint: "决定是否接受",
                frequency: "occasional",
              },
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
            textEn:
              "For three, I can do $45 each — that's $135 total instead of $180. You save $45. It's the best deal I can offer.",
            textZh: "买三条的话，每条可以给您45美元——总共135美元，原价180美元。省了45美元。这是我能给的最好价格了。",
            keyPhrases: [
              { en: "bulk discount", zh: "批量优惠" },
              { en: "instead of", zh: "原价/而不是" },
              { en: "you save", zh: "您省了" },
              { en: "best deal", zh: "最好的价格" },
            ],
            alternativeExpressions: [
              {
                textEn: "Buy three and I'll do $45 each. That's $135 instead of $180 — saves you 45 bucks.",
                textZh: "买三条每条45美元。135而不是180——省45美元。",
                actionHint: "考虑批量购买",
                frequency: "common",
              },
              {
                textEn: "For three, I can bring it down to $45 a piece. That's my best price for a bulk order.",
                textZh: "三条的话可以降到每条45美元。批量买这是我最好的价了。",
                actionHint: "决定买几条",
                frequency: "occasional",
              },
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
            textEn:
              "Hmm... $120 is really tight. Tell you what — $125 for three, and I'll throw in a free gift bag and wrapping. That's my final offer.",
            textZh: "嗯……120美元真的很难做。这样吧——三条125美元，我再送您免费礼品袋和包装。这是我的最终报价了。",
            keyPhrases: [
              { en: "really tight", zh: "真的很难/利润太薄" },
              { en: "tell you what", zh: "这样吧" },
              { en: "throw in", zh: "赠送/附送" },
              { en: "final offer", zh: "最终报价" },
            ],
            alternativeExpressions: [
              {
                textEn: "$120 is too low. Meet me at $125 and I'll throw in free wrapping. Final price.",
                textZh: "120太低了。125美元我送你免费包装。最终价了。",
                actionHint: "决定是否接受",
                frequency: "common",
              },
              {
                textEn: "I really can't do $120. How about $125 with a free gift bag? That's my bottom line.",
                textZh: "120真做不了。125送个礼品袋怎么样？这是我的底线了。",
                actionHint: "接受或放弃",
                frequency: "occasional",
              },
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
            textEn:
              "Wonderful! Let me wrap these up nicely for you. Here's your change and receipt. Thank you for your business — enjoy the scarves!",
            textZh: "太好了！我帮您包起来。找您零钱和收据。感谢您的惠顾——围巾好好享用！",
            keyPhrases: [
              { en: "wrap these up", zh: "包起来" },
              { en: "your change", zh: "找零" },
              { en: "thank you for your business", zh: "感谢惠顾" },
            ],
            alternativeExpressions: [
              {
                textEn: "Great deal! Let me pack these up for you. Here's your change. Thanks for shopping here!",
                textZh: "成交！我帮你包好。找您零钱。感谢光临！",
                actionHint: "拿好东西和零钱",
                frequency: "common",
              },
              {
                textEn: "Awesome! I'll wrap them nicely. Here's your change and receipt. Enjoy the scarves!",
                textZh: "太好了！我包好。找零和收据给您。围巾好好用！",
                actionHint: "确认找零和收据",
                frequency: "occasional",
              },
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
            textEn:
              "I'd like to buy this large ceramic vase, but it's too big to carry on the plane. Do you offer international shipping?",
            textZh: "我想买这个大陶瓷花瓶，但太大了带不上飞机。你们提供国际快递吗？",
            casualVersion:
              "Wanna buy this big ceramic vase, but it's too big for the plane. You guys do international shipping?",
            commonMistake: {
              wrong: "I want to buy this vase. Too big. Can ship international?",
              correct:
                "I'd like to buy this large ceramic vase, but it's too big to carry on the plane. Do you offer international shipping?",
              explanation: "中式英语，省略主语和谓语，听起来不礼貌和生硬。",
            },
            formalityVariants: {
              casual:
                "Wanna grab this big ceramic vase, but it's too big for the plane. You guys do international shipping?",
              standard:
                "I'd like to buy this large ceramic vase, but it's too big to carry on the plane. Do you offer international shipping?",
              formal:
                "Excuse me, I'm interested in purchasing this large ceramic vase. Unfortunately, it's too sizable for me to transport on the plane. Do you offer international shipping services?",
            },
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
              {
                textEn: "Absolutely! We ship worldwide. Where would you like it sent?",
                textZh: "完全可以！我们寄全球。您想寄到哪里？",
                actionHint: "说出目的地国家",
                frequency: "common",
              },
              {
                textEn: "Sure, we can ship it for you. Just let me know the destination.",
                textZh: "可以的，我们帮你寄。告诉我寄到哪个国家就行。",
                actionHint: "提供寄送地址",
                frequency: "occasional",
              },
            ],
            casualVersion: "Yep! Can ship most places. Where d'ya want it?",
            formalityVariants: {
              casual: "Yep! We can ship to most places. Where d'ya want it sent?",
              standard: "Yes, we do! We can ship to most countries. Where would you like it sent?",
              formal:
                "Yes, we certainly do! We are able to facilitate shipping to the majority of countries. May I inquire as to its intended destination?",
            },
          },
          {
            speaker: "you",
            textEn: "To China. How much would shipping cost, and how long does it take?",
            textZh: "寄到中国。运费多少？要多长时间？",
            casualVersion: "To China. How much for shipping, and how long's that gonna take?",
            commonMistake: {
              wrong: "To China. Shipping how much? How long it takes?",
              correct: "To China. How much would shipping cost, and how long does it take?",
              explanation: "句子结构不自然，省略了助动词和主语，听起来不礼貌。",
            },
            formalityVariants: {
              casual: "To China. What's shipping cost, and how long's it take?",
              standard: "To China. How much would shipping cost, and how long does it take?",
              formal:
                "It's destined for China. Could you please inform me of the shipping costs and the estimated transit time?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "For a package this size to China, standard shipping is about $35 and takes 2-3 weeks. Express shipping is $65 and arrives in 5-7 business days. Both include tracking.",
            textZh:
              "这个大小寄到中国的话，标准快递大约35美元，需要2-3周。特快专递65美元，5-7个工作日到。都包含物流追踪。",
            variations: [
              {
                textEn: "We use DHL and FedEx. Standard is $35, express is $65. Express comes with insurance too.",
                textZh: "我们用DHL和联邦快递。标准35美元，特快65美元。特快还包含保险。",
              },
            ],
            keyPhrases: [
              { en: "standard shipping", zh: "标准快递" },
              { en: "express shipping", zh: "特快专递" },
              { en: "tracking", zh: "物流追踪" },
              { en: "business days", zh: "工作日" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn:
                  "Standard is about $35, takes 2-3 weeks. Express is $65 and gets there in a week. Both have tracking.",
                textZh: "标准大约35美元，2-3周到。特快65美元，一周到。都有物流追踪。",
                actionHint: "选择快递方式",
                frequency: "common",
              },
              {
                textEn: "We use DHL — standard is $35, express is $65 with insurance included.",
                textZh: "我们用DHL——标准35美元，特快65美元含保险。",
                actionHint: "根据时间需求选择",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "For this size package to China, standard's like $35, takes 2-3 weeks. Express is $65, gets there in 5-7 business days. Both got tracking.",
            formalityVariants: {
              casual:
                "For a package this size to China, standard's like $35, takes 2-3 weeks. Express is $65, gets there in 5-7 business days. Both got tracking.",
              standard:
                "For a package this size to China, standard shipping is about $35 and takes 2-3 weeks. Express shipping is $65 and arrives in 5-7 business days. Both include tracking.",
              formal:
                "Regarding a package of this dimension shipped to China, our standard service is approximately $35 with a transit time of two to three weeks. Our express service is $65, ensuring delivery within five to seven business days. Both options incorporate comprehensive tracking.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll go with express. This is fragile — can you pack it really well?",
            textZh: "我选特快的。这个是易碎品——能帮我包装好一点吗？",
            casualVersion: "Express, please. It's fragile – can you pack it real good?",
            commonMistake: {
              wrong: "I choose express. This is breakable. Can you help me to pack it carefully?",
              correct: "I'll go with express. This is fragile — can you pack it really well?",
              explanation: "“I choose” 不如 “I'll go with” 自然；“breakable” 不如 “fragile” 常用。",
            },
            formalityVariants: {
              casual: "Express, please. It's fragile – pack it real good, okay?",
              standard: "I'll go with express. This is fragile — can you pack it really well?",
              formal:
                "I'll opt for the express shipping. Given that this item is fragile, could you ensure it is packed with exceptional care?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Absolutely. We'll wrap it in bubble wrap and put it in a double-walled box with foam padding. We also mark it as fragile. We haven't had any breakage issues with our packing method.",
            textZh:
              "当然。我们会用气泡膜包好，放进双层纸箱里加泡沫填充。还会贴上易碎标签。我们的包装方法还没出过碎损问题。",
            keyPhrases: [
              { en: "fragile", zh: "易碎的" },
              { en: "bubble wrap", zh: "气泡膜" },
              { en: "double-walled box", zh: "双层纸箱" },
              { en: "foam padding", zh: "泡沫填充" },
              { en: "breakage", zh: "碎损" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Don't worry, we pack fragile items really well — double box, bubble wrap, the works. We've never had anything break.",
                textZh: "放心，易碎品我们包得很仔细——双层箱、气泡膜，全套。从来没碎过。",
                actionHint: "确认包装方案",
                frequency: "common",
              },
              {
                textEn: "Of course! We'll use bubble wrap and foam. It'll be marked fragile too.",
                textZh: "当然！会用气泡膜和泡沫。还会贴易碎标签。",
                actionHint: "了解包装细节",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "For sure. We'll bubble wrap it, put it in a double-walled box with foam. Mark it fragile too. Never had anything break with our packing.",
            formalityVariants: {
              casual:
                "For sure. We'll bubble wrap it, put it in a double-walled box with foam. Mark it fragile too. Never had anything break with our packing.",
              standard:
                "Absolutely. We'll wrap it in bubble wrap and put it in a double-walled box with foam padding. We also mark it as fragile. We haven't had any breakage issues with our packing method.",
              formal:
                "Certainly. We will meticulously wrap it in bubble wrap and secure it within a double-walled box utilizing foam padding for additional protection. Furthermore, we will clearly label it as fragile. Our packing methodology has consistently prevented any issues with breakage.",
            },
          },
          {
            speaker: "you",
            textEn: "Good. Do I need to fill out a customs form? Are there any restrictions on shipping ceramics?",
            textZh: "好的。需要填海关申报单吗？寄陶瓷有什么限制吗？",
            casualVersion: "Cool. Gotta fill out a customs form? Any restrictions on shipping ceramics?",
            commonMistake: {
              wrong: "Good. Need to fill customs form? Ceramic shipping any restrictions?",
              correct: "Good. Do I need to fill out a customs form? Are there any restrictions on shipping ceramics?",
              explanation: "缺少动词和助动词，听起来不自然。",
            },
            formalityVariants: {
              casual: "Cool. Gotta fill out a customs form? Any restrictions on shipping ceramics?",
              standard: "Good. Do I need to fill out a customs form? Are there any restrictions on shipping ceramics?",
              formal:
                "Understood. Is it necessary for me to complete a customs declaration form? Are there any specific restrictions pertaining to the shipment of ceramic items?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Yes, I'll help you fill out the customs declaration form. We need to list the item, its value, and the material. Ceramics are generally fine — they're not restricted. But you should declare the actual value for customs in China, as they may charge import duty if the declared value is over a certain amount.",
            textZh:
              "需要的，我帮您填海关申报单。需要写清楚商品名称、价值和材质。陶瓷一般没问题——不属于限制品。不过要如实申报价值，因为中国海关对超过一定金额的包裹可能会征收进口关税。",
            keyPhrases: [
              { en: "customs declaration form", zh: "海关申报单" },
              { en: "declare the value", zh: "申报价值" },
              { en: "import duty", zh: "进口关税" },
              { en: "restricted", zh: "限制的" },
              { en: "material", zh: "材质" },
            ],
            responseTip: "如实申报价值很重要，低报可能导致包裹被扣。",
            alternativeExpressions: [
              {
                textEn:
                  "I'll help you with the customs form. Ceramics are fine to ship — just declare the value honestly so it doesn't get stuck in customs.",
                textZh: "我帮你填海关单。陶瓷可以寄——如实填价值就行，免得被海关扣住。",
                actionHint: "如实申报价值",
                frequency: "common",
              },
              {
                textEn:
                  "Yes, there's a customs form. I'll fill it out for you. Make sure to declare the real price — undervaluing can cause problems.",
                textZh: "对，有海关表格。我帮你填。一定要填真实价格——低报可能有问题。",
                actionHint: "按实际价格填写",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep, I'll help ya with the customs form. Gotta list the item, its value, and material. Ceramics are usually fine — no restrictions. But declare the real value for China customs, 'cause they might charge import duty if it's over a certain amount.",
            formalityVariants: {
              casual:
                "Yep, I'll help ya with the customs form. Gotta list the item, its value, and material. Ceramics are usually fine — no restrictions. But declare the real value for China customs, 'cause they might charge import duty if it's over a certain amount.",
              standard:
                "Yes, I'll help you fill out the customs declaration form. We need to list the item, its value, and the material. Ceramics are generally fine — they're not restricted. But you should declare the actual value for customs in China, as they may charge import duty if the declared value is over a certain amount.",
              formal:
                "Yes, I will assist you in completing the customs declaration form. It requires specifying the item, its intrinsic value, and the material composition. Ceramics are generally permissible and are not subject to restrictions. However, it is advisable to declare the accurate value for Chinese customs purposes, as an import duty may be levied if the declared value exceeds a particular threshold.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. The vase is $120. Should I declare it as a gift or a purchase?",
            textZh: "明白了。花瓶120美元。应该申报为礼物还是购买的商品？",
            casualVersion: "Okay, cool. Vase is $120. Declare it as a gift or a purchase?",
            formalityVariants: {
              casual: "Okay, cool. Vase is $120. Declare it as a gift or a purchase?",
              standard: "Got it. The vase is $120. Should I declare it as a gift or a purchase?",
              formal:
                "Understood. The vase is valued at $120. Should I declare this item as a gift or as a commercial purchase?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "If it's for personal use or as a gift, you can mark it as a gift. But either way, you should list the actual value. Some countries have a lower duty-free threshold for gifts — for China, personal items under 1,000 RMB are usually duty-free. Your vase should be within that range.",
            textZh:
              "如果是自用或送人，可以标注为礼物。但无论如何都要填写实际价值。有些国家对礼物的免税额度较低——中国个人物品1000人民币以内通常免税。您这个花瓶应该在免税范围内。",
            keyPhrases: [
              { en: "personal use", zh: "个人使用" },
              { en: "duty-free threshold", zh: "免税额度" },
              { en: "actual value", zh: "实际价值" },
              { en: "within that range", zh: "在范围内" },
            ],
            culturalNote: "各国海关的免税额度和进口规定不同，大额商品建议提前查询目的国海关政策。",
            alternativeExpressions: [
              {
                textEn:
                  "Mark it as a gift if it's for someone. Just put the real value — your vase should be under the duty-free limit.",
                textZh: "送人的话可以标注为礼物。填真实价值就行——你的花瓶应该在免税额度内。",
                actionHint: "按实际用途填写",
                frequency: "common",
              },
              {
                textEn:
                  "You can write gift or personal use. Either way, list the actual price. At $120, it should be duty-free for China.",
                textZh: "可以写礼物或个人用品。不管哪个都填实际价格。120美元寄中国应该免税。",
                actionHint: "了解免税额度",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "If it's for you or a gift, mark it as a gift. But either way, put the real value. Some countries have lower duty-free for gifts — China, personal stuff under 1,000 RMB's usually duty-free. Your vase should be fine there.",
            formalityVariants: {
              casual:
                "If it's for you or a gift, mark it as a gift. But either way, put the real value. Some countries have lower duty-free for gifts — China, personal stuff under 1,000 RMB's usually duty-free. Your vase should be fine there.",
              standard:
                "If it's for personal use or as a gift, you can mark it as a gift. But either way, you should list the actual value. Some countries have a lower duty-free threshold for gifts — for China, personal items under 1,000 RMB are usually duty-free. Your vase should be within that range.",
              formal:
                "If its purpose is for personal use or as a gift, you may designate it as such. However, in either scenario, it is imperative to declare the accurate value. Certain countries implement a reduced duty-free threshold for gifts; in China, personal items with a value under 1,000 RMB are typically exempt from duty. Your vase's value should fall within this permissible limit.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Great. So the vase is $120 plus $65 for express shipping. Can I also get insurance on the package?",
            textZh: "好的。那花瓶120美元加65美元快递费。能给包裹上保险吗？",
            casualVersion: "Cool. So the vase is $120 plus $65 for express. Can I get insurance on the package too?",
            commonMistake: {
              wrong: "Great. So vase $120 plus $65 express shipping. Can I buy insurance for the package?",
              correct:
                "Great. So the vase is $120 plus $65 for express shipping. Can I also get insurance on the package?",
              explanation: "中式英语，表达不自然。 'buy insurance' 没问题，但 'get insurance' 更口语化。",
            },
            formalityVariants: {
              casual: "Cool. So the vase is $120 plus $65 for express. Can I get insurance on the package too?",
              standard:
                "Great. So the vase is $120 plus $65 for express shipping. Can I also get insurance on the package?",
              formal:
                "Excellent. Therefore, the total for the vase is $120, in addition to $65 for express shipping. May I also inquire about the possibility of obtaining insurance for the package?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Express shipping already includes basic insurance up to $100. For full coverage of the $120 value, it's an extra $8. I'd recommend it for a ceramic item. Your total would be $193. I'll give you the tracking number as soon as we ship it, and you can follow the delivery online.",
            textZh:
              "特快已经包含最高100美元的基本保险。要全额覆盖120美元的价值，额外加8美元。对陶瓷制品我推荐加上。总共193美元。寄出后我马上给您物流单号，您可以在网上查看运送进度。",
            keyPhrases: [
              { en: "basic insurance", zh: "基本保险" },
              { en: "full coverage", zh: "全额保障" },
              { en: "tracking number", zh: "物流单号" },
              { en: "follow the delivery", zh: "查看运送进度" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Express comes with $100 insurance. For full coverage on the $120 item, it's an extra $8. I'd recommend it. Total would be $193.",
                textZh: "特快含100美元保险。要全额覆盖120美元的话加8美元。推荐加上。总共193美元。",
                actionHint: "决定是否加保险",
                frequency: "common",
              },
              {
                textEn:
                  "There's basic insurance included. For a fragile item like this, I'd add the full coverage — just $8 more. I'll give you the tracking number once it ships.",
                textZh: "含基本保险。像这种易碎品，建议加全额保障——只要8美元。寄出后给你单号。",
                actionHint: "考虑全额保险",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Express already has basic insurance up to $100. For full coverage of the $120, it's an extra $8. Recommend it for ceramic. Total's $193. I'll give you the tracking number once we ship it, and you can track it online.",
            formalityVariants: {
              casual:
                "Express already has basic insurance up to $100. For full coverage of the $120, it's an extra $8. Recommend it for ceramic. Total's $193. I'll give you the tracking number once we ship it, and you can track it online.",
              standard:
                "Express shipping already includes basic insurance up to $100. For full coverage of the $120 value, it's an extra $8. I'd recommend it for a ceramic item. Your total would be $193. I'll give you the tracking number as soon as we ship it, and you can follow the delivery online.",
              formal:
                "The express shipping service inherently provides basic insurance coverage up to $100. To ensure comprehensive coverage for the entire $120 value, an additional charge of $8 would apply. I highly recommend this for a ceramic item. Your grand total would then be $193. I shall provide you with the tracking number immediately upon shipment, enabling you to monitor its progress online.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, let's add the insurance. Here's my card. Thank you for taking care of everything!",
            textZh: "好的，加上保险。给您我的卡。谢谢你帮忙处理一切！",
            casualVersion: "Yeah, add the insurance. Here's my card. Thanks for taking care of it!",
            commonMistake: {
              wrong: "Yes, add the insurance. Here is my card. Thank you for your help!",
              correct: "Yes, let's add the insurance. Here's my card. Thank you for taking care of everything!",
              explanation: "“Here is my card” 稍显生硬；“taking care of everything” 更自然。",
            },
            formalityVariants: {
              casual: "Yeah, add the insurance. Here's my card. Thanks for taking care of it!",
              standard: "Yes, let's add the insurance. Here's my card. Thank you for taking care of everything!",
              formal:
                "Yes, I would appreciate it if we could include the insurance. Here is my payment card. I sincerely appreciate your assistance in handling all the arrangements.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 电子产品配件 ====================
  {
    id: "shopping-electronics-repair",
    tags: ["electronics", "电子", "phone", "手机"],
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
              {
                textEn: "Hey there! Looking for anything specific?",
                textZh: "嘿！在找什么特定的东西吗？",
                actionHint: "告诉对方你需要什么",
                frequency: "common",
              },
            ],
            casualVersion: "Hey! Welcome to Tech Zone. What can I help you find?",
            formalityVariants: {
              casual: "Hey! Welcome to Tech Zone. What can I help you find?",
              standard: "Hi! Welcome to Tech Zone. What can I help you find today?",
              formal:
                "Good morning/afternoon, and welcome to Tech Zone. How may I assist you with your shopping needs today?",
            },
          },
          {
            speaker: "you",
            textEn: "Hi, I need a phone case and a charger for my iPhone 15. Where would those be?",
            textZh: "你好，我需要一个 iPhone 15 的手机壳和充电器。在哪里？",
            casualVersion: "Hey, where are the iPhone 15 cases and chargers?",
            commonMistake: {
              wrong: "I want phone case and charger for my iPhone 15.",
              correct: "Hi, I need a phone case and a charger for my iPhone 15.",
              explanation: '"I want" 在英语中听起来直接甚至有些粗鲁，不如 "I need" 或 "I\'d like" 礼貌。',
            },
            formalityVariants: {
              casual: "Hey, need a phone case and charger for my iPhone 15. Where are those?",
              standard: "Hi, I need a phone case and a charger for my iPhone 15. Where would those be?",
              formal:
                "Excuse me, I'm looking for a phone case and a charger for my iPhone 15. Could you direct me to their location?",
            },
          },
          {
            speaker: "them",
            role: "销售员",
            textEn:
              "Phone cases are right over here, and chargers are on the next aisle. Are you looking for a specific type of case — clear, rugged, or slim?",
            textZh: "手机壳在这边，充电器在下一个过道。您想找什么类型的壳——透明的、防摔的还是超薄的？",
            keyPhrases: [
              { en: "aisle", zh: "过道" },
              { en: "clear", zh: "透明的" },
              { en: "rugged", zh: "防摔的/坚固的" },
              { en: "slim", zh: "超薄的" },
            ],
            vocabNotes: {
              rugged: {
                meaningInContext: "在这句话里表示：加固防摔的手机壳，防护性强",
                similarUsage: "类似用法：a rugged laptop（三防笔记本电脑）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Cases are right here, chargers are one aisle over. Want something protective, thin, or see-through?",
                textZh: "手机壳在这，充电器在隔壁。要防摔的、薄的还是透明的？",
                actionHint: "说出你的偏好",
                frequency: "common",
              },
              {
                textEn: "iPhone 15? Cases are on this wall, chargers are over there. What kind of case do you prefer?",
                textZh: "iPhone 15？壳在这面墙上，充电器在那边。你喜欢什么类型的壳？",
                actionHint: "描述你想要的类型",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Cases are right here, chargers next aisle. What kind of case are you looking for — clear, tough, or thin?",
            formalityVariants: {
              casual:
                "Cases are right here, chargers next aisle. What kind of case are you looking for — clear, tough, or thin?",
              standard:
                "Phone cases are right over here, and chargers are on the next aisle. Are you looking for a specific type of case — clear, rugged, or slim?",
              formal:
                "The phone cases are located here to your right, and the chargers can be found in the adjacent aisle. May I inquire if you have a particular preference regarding the style of case, such as a clear, rugged, or slim design?",
            },
          },
          {
            speaker: "you",
            textEn:
              "Something rugged, please. I tend to drop my phone a lot. And what's the difference between these two chargers?",
            textZh: "防摔的吧。我经常摔手机。这两个充电器有什么区别？",
            casualVersion:
              "Something rugged, yeah. I drop my phone all the time. What's the deal with these two chargers?",
            commonMistake: {
              wrong: "I often drop my phone.",
              correct: "I tend to drop my phone a lot.",
              explanation: '"tend to" 或 "a lot" 更自然地表达经常做某事，比 "often" 在口语中更常见。',
            },
            formalityVariants: {
              casual: "Something rugged, yeah. I drop my phone all the time. What's the deal with these two chargers?",
              standard:
                "Something rugged, please. I tend to drop my phone a lot. And what's the difference between these two chargers?",
              formal:
                "I would prefer a rugged option, as I regrettably frequently drop my phone. Could you please explain the distinctions between these two particular chargers?",
            },
          },
          {
            speaker: "them",
            role: "销售员",
            textEn:
              "This one is a standard 20-watt charger — it'll charge your phone to 50% in about 30 minutes. This one is 45 watts, so it's much faster, but it's $15 more. Both are MagSafe compatible.",
            textZh: "这个是标准20瓦充电器——大约30分钟充到50%。这个是45瓦的，快很多，但贵15美元。两个都兼容 MagSafe。",
            keyPhrases: [
              { en: "watt", zh: "瓦" },
              { en: "compatible", zh: "兼容的" },
              { en: "charge to 50%", zh: "充到50%" },
            ],
            vocabNotes: {
              compatible: {
                meaningInContext: "在这句话里表示：能和你的手机配合使用的",
                similarUsage: "类似用法：Is this compatible with my laptop?（这个和我的笔记本兼容吗？）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "This 20-watt one is standard speed, and this 45-watt one charges way faster. Both work with MagSafe.",
                textZh: "这个20瓦的是标准速度，这个45瓦的快很多。都支持MagSafe。",
                actionHint: "选择充电器",
                frequency: "common",
              },
              {
                textEn: "The difference is speed. The 45-watt is almost twice as fast but costs $15 more.",
                textZh: "区别就是速度。45瓦的快将近一倍，但贵15美元。",
                actionHint: "权衡速度和价格",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "This one's a standard 20-watt, charges your phone to 50% in like 30 minutes. That one's 45 watts, way faster, but it's fifteen bucks more. Both MagSafe.",
            formalityVariants: {
              casual:
                "This one's a standard 20-watt, charges your phone to 50% in like 30 minutes. That one's 45 watts, way faster, but it's fifteen bucks more. Both MagSafe.",
              standard:
                "This one is a standard 20-watt charger — it'll charge your phone to 50% in about 30 minutes. This one is 45 watts, so it's much faster, but it's $15 more. Both are MagSafe compatible.",
              formal:
                "Certainly. This particular model is a standard 20-watt charger, which will bring your device to approximately 50% charge within 30 minutes. The other option is a 45-watt unit, offering significantly faster charging capabilities, albeit at an additional cost of $15. Both products are fully compatible with MagSafe technology.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take the faster one. Does it come with a cable, or do I need to buy one separately?",
            textZh: "我要快的那个。带数据线吗，还是要另外买？",
            casualVersion: "I'll grab the faster one. Does it come with a cable, or is that extra?",
            commonMistake: {
              wrong: "I want the faster one.",
              correct: "I'll take the faster one.",
              explanation: '"I\'ll take" 或 "I\'d like" 比 "I want" 更委婉，是购物时常用的表达。',
            },
            formalityVariants: {
              casual: "I'll grab the faster one. Does it come with a cable, or is that extra?",
              standard: "I'll take the faster one. Does it come with a cable, or do I need to buy one separately?",
              formal:
                "I will proceed with the faster charging option. Does this unit include a charging cable, or is that an item to be procured independently?",
            },
          },
          {
            speaker: "them",
            role: "销售员",
            textEn:
              "It comes with a USB-C to USB-C cable. If you need a USB-C to Lightning cable, that's sold separately for $12.",
            textZh: "附带一根 USB-C 转 USB-C 数据线。如果需要 USB-C 转 Lightning 的，要单买，12美元。",
            commonMistake: {
              wrong: "It has a USB-C to USB-C cable.",
              correct: "It comes with a USB-C to USB-C cable.",
              explanation: "表示附带什么，用come with更自然，用have听起来像“它拥有”一个配件。",
            },
            keyPhrases: [
              { en: "comes with", zh: "附带/包含" },
              { en: "sold separately", zh: "单独出售" },
            ],
            alternativeExpressions: [
              {
                textEn: "It includes a USB-C cable. If you need a Lightning adapter, that's $12 extra.",
                textZh: "附带USB-C线。如果需要Lightning转接头，要另外加12美元。",
                actionHint: "确认是否需要转接线",
                frequency: "common",
              },
              {
                textEn: "There's a USB-C cable in the box. Lightning cables are sold separately for $12.",
                textZh: "盒子里有USB-C线。Lightning线要单买，12美元。",
                actionHint: "看看是否需要额外的线",
                frequency: "occasional",
              },
            ],
            casualVersion: "Comes with a USB-C to USB-C. If you need a Lightning one, that's twelve bucks extra.",
            formalityVariants: {
              casual: "Comes with a USB-C to USB-C. If you need a Lightning one, that's twelve bucks extra.",
              standard:
                "It comes with a USB-C to USB-C cable. If you need a USB-C to Lightning cable, that's sold separately for $12.",
              formal:
                "The charger includes a USB-C to USB-C cable. Should your requirements necessitate a USB-C to Lightning cable, it is available for purchase separately at a cost of $12.",
            },
          },
          {
            speaker: "you",
            textEn: "No, USB-C is fine. So the case and the charger — what's the total?",
            textZh: "不用，USB-C 就行。手机壳加充电器——一共多少？",
            casualVersion: "Nah, USB-C's good. So for the case and charger, what's the total?",
            commonMistake: {
              wrong: "No, USB-C is okay. Case and charger how much?",
              correct: "No, USB-C is fine. So the case and the charger — what's the total?",
              explanation: '询问价格用 "what\'s the total" 或 "how much is it" 更自然，避免过分简化。',
            },
            formalityVariants: {
              casual: "Nah, USB-C's good. So for the case and charger, what's the total?",
              standard: "No, USB-C is fine. So the case and the charger — what's the total?",
              formal:
                "No, the USB-C cable will suffice. Regarding the phone case and the charger, what would be the cumulative cost?",
            },
          },
          {
            speaker: "them",
            role: "销售员",
            textEn:
              "The rugged case is $39.99 and the 45-watt charger is $44.99. Your total before tax is $84.98. Would you like to add a screen protector? We're running a bundle deal — $10 off when you buy three accessories.",
            textZh:
              "防摔壳39.99美元，45瓦充电器44.99美元。税前一共84.98美元。要加一个屏幕保护膜吗？我们有套装优惠——买三件配件减10美元。",
            keyPhrases: [
              { en: "before tax", zh: "税前" },
              { en: "screen protector", zh: "屏幕保护膜" },
              { en: "bundle deal", zh: "套装优惠" },
            ],
            vocabNotes: {
              "bundle deal": {
                meaningInContext: "在这句话里表示：几件商品一起买有折扣",
                similarUsage: "类似用法：We have a bundle with the keyboard and mouse.（键盘鼠标有套装优惠）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "The case and charger are $84.98 before tax. Add a screen protector and save $10 on the bundle.",
                textZh: "壳和充电器税前84.98美元。加个保护膜的话套装减10美元。",
                actionHint: "考虑加保护膜",
                frequency: "common",
              },
              {
                textEn: "That's $84.98 total. Want a screen protector too? Buy three accessories and get $10 off.",
                textZh: "一共84.98美元。要加保护膜吗？买三件配件减10美元。",
                actionHint: "利用套装优惠",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Rugged case is thirty-nine ninety-nine, 45-watt charger is forty-four ninety-nine. Pre-tax total's eighty-four ninety-eight. Wanna add a screen protector? We got a bundle deal, ten bucks off for three accessories.",
            culturalNote: "美国价格标示不含税，结账时会加上。另外商家常有捆绑销售促销。",
            formalityVariants: {
              casual:
                "Rugged case is thirty-nine ninety-nine, 45-watt charger is forty-four ninety-nine. Pre-tax total's eighty-four ninety-eight. Wanna add a screen protector? We got a bundle deal, ten bucks off for three accessories.",
              standard:
                "The rugged case is $39.99 and the 45-watt charger is $44.99. Your total before tax is $84.98. Would you like to add a screen protector? We're running a bundle deal — $10 off when you buy three accessories.",
              formal:
                "The rugged phone case is priced at $39.99, and the 45-watt charger is $44.99. This brings your subtotal, prior to sales tax, to $84.98. Might you be interested in adding a screen protector today? We are currently offering a promotional bundle: a $10 discount when three or more accessories are purchased.",
            },
          },
          {
            speaker: "you",
            textEn: "Sure, I'll add the screen protector. Can you help me install it?",
            textZh: "好的，加一个保护膜。可以帮我贴吗？",
            casualVersion: "Yeah, I'll add the screen protector. Can you put it on for me?",
            commonMistake: {
              wrong: "Can you help me stick it?",
              correct: "Can you help me install it?",
              explanation: '"stick it" 不用于表示安装屏幕保护膜，用 "install it" 或 "put it on for me" 更自然。',
            },
            formalityVariants: {
              casual: "Yeah, I'll add the screen protector. Can you put it on for me?",
              standard: "Sure, I'll add the screen protector. Can you help me install it?",
              formal:
                "Yes, I would like to include the screen protector. Would it be possible for you to assist me with its installation?",
            },
          },
          {
            speaker: "them",
            role: "销售员",
            textEn:
              "Absolutely! We offer free installation for screen protectors purchased in-store. I'll do it for you right now at the counter.",
            textZh: "当然可以！店内购买的保护膜我们免费帮贴。我现在就在柜台帮您贴。",
            commonMistake: {
              wrong: "We provide free installation.",
              correct: "We offer free installation.",
              explanation: "提供服务多用 offer， provide 听起来更书面化或正式。",
            },
            keyPhrases: [
              { en: "free installation", zh: "免费安装/贴膜" },
              { en: "purchased in-store", zh: "店内购买的" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure thing! We put it on for free if you buy it here. I'll do it right now.",
                textZh: "没问题！在店里买的我们免费贴。我现在就帮你贴。",
                actionHint: "等店员帮你贴",
                frequency: "common",
              },
              {
                textEn: "Of course, free installation for any protector bought in-store. Give me one minute.",
                textZh: "当然，店里买的保护膜免费贴。给我一分钟。",
                actionHint: "把手机给店员",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Totally! We do free installs for in-store screen protectors. I'll put it on for you right here at the counter.",
            formalityVariants: {
              casual:
                "Totally! We do free installs for in-store screen protectors. I'll put it on for you right here at the counter.",
              standard:
                "Absolutely! We offer free installation for screen protectors purchased in-store. I'll do it for you right now at the counter.",
              formal:
                "Certainly! We are pleased to provide complimentary installation for all screen protectors acquired within our establishment. I shall attend to its application for you immediately at the service counter.",
            },
          },
          {
            speaker: "you",
            textEn: "Great, thank you! I'll pay by card.",
            textZh: "太好了，谢谢！我刷卡。",
            casualVersion: "Awesome, thanks! Card's fine.",
            commonMistake: {
              wrong: "I will pay card.",
              correct: "I'll pay by card.",
              explanation: '支付方式要用介词 "by" 或 "with"，如 "pay by card/cash" 或 "pay with a card/cash"。',
            },
            formalityVariants: {
              casual: "Awesome, thanks! Card's fine.",
              standard: "Great, thank you! I'll pay by card.",
              formal: "Excellent, I appreciate your assistance. I will be paying with my credit card.",
            },
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
            textEn:
              "I bought these wireless earbuds here two weeks ago, and the left one stopped working. Is this covered under warranty?",
            textZh: "我两周前在这里买的无线耳机，左边的不响了。这在保修范围内吗？",
            casualVersion: "Got these earbuds here two weeks ago, and the left one quit. Is it still under warranty?",
            culturalNote: "美国服务语境直接说问题，不需过多铺垫。",
            commonMistake: {
              wrong: "My earphone left side no sound.",
              correct: "The left one stopped working.",
              explanation: "中文思维直接说“没声音”，英文更自然说“不工作了”。",
            },
            formalityVariants: {
              casual: "My earbuds broke, the left one. Got 'em two weeks ago. Warranty?",
              standard:
                "I bought these wireless earbuds here two weeks ago, and the left one stopped working. Is this covered under warranty?",
              formal:
                "Good morning/afternoon. I purchased these wireless earbuds approximately two weeks ago, and unfortunately, the left earbud has ceased to function. I'd like to inquire if this issue is covered under the product's warranty.",
            },
          },
          {
            speaker: "them",
            role: "销售员",
            textEn:
              "I'm sorry to hear that. Do you have your receipt or proof of purchase? Most electronics have a one-year manufacturer's warranty.",
            textZh: "很抱歉。您有收据或购买凭证吗？大部分电子产品有一年的厂家保修。",
            commonMistake: {
              wrong: "Do you have receipt?",
              correct: "Do you have your receipt?",
              explanation: "购物小票通常有特指，要加 your/the。",
            },
            keyPhrases: [
              { en: "proof of purchase", zh: "购买凭证" },
              { en: "manufacturer's warranty", zh: "厂家保修" },
            ],
            vocabNotes: {
              "manufacturer's warranty": {
                meaningInContext: "在这句话里表示：生产厂家提供的保修服务",
                similarUsage: "类似用法：The manufacturer's warranty covers defects.（厂家保修覆盖产品缺陷）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Can I see your receipt? We should be able to exchange or refund those.",
                textZh: "能看一下收据吗？应该可以换或退。",
                actionHint: "出示收据",
                frequency: "common",
              },
            ],
            casualVersion:
              "Oh, sorry about that. Got a receipt or proof of purchase? Most electronics usually have a year long manufacturer's warranty.",
            formalityVariants: {
              casual: "Ah, that stinks. Got the receipt? Most electronics come with a year warranty.",
              standard:
                "I'm sorry to hear that. Do you have your receipt or proof of purchase? Most electronics have a one-year manufacturer's warranty.",
              formal:
                "I apologize for the inconvenience. May I please see your receipt or any form of proof of purchase? Typically, most electronic devices are covered by a one-year manufacturer's warranty.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, here's the receipt. I also have the original box.",
            textZh: "有的，收据在这。原包装盒也在。",
            casualVersion: "Yep, here's the receipt. And I still got the box.",
            commonMistake: {
              wrong: "I have receipt. Box also I have.",
              correct: "Yes, here's the receipt. I also have the original box.",
              explanation: "中文语序影响，英文表达应更自然。“Here's”常用。",
            },
            formalityVariants: {
              casual: "Yep, receipt's right here. Got the box too.",
              standard: "Yes, here's the receipt. I also have the original box.",
              formal: "Yes, certainly. Here is the receipt. I also retained the original packaging.",
            },
          },
          {
            speaker: "them",
            role: "销售员",
            textEn:
              "Perfect. Since it's within 30 days, you can do a direct exchange or get a full refund. Would you like to swap them for a new pair or try a different model?",
            textZh: "太好了。因为在30天内，可以直接换新或全额退款。您想换一副同款的还是试试其他型号？",
            commonMistake: {
              wrong: "Because it is within 30 days, we can offer you a direct exchange.",
              correct: "Since it's within 30 days, we can offer you a direct exchange.",
              explanation: "中文的“因为”在口语中通常用“since”或“as”更自然，用“because”听起来像在解释原因而非说明事实。",
            },
            keyPhrases: [
              { en: "direct exchange", zh: "直接换新" },
              { en: "full refund", zh: "全额退款" },
              { en: "swap them", zh: "换一副" },
            ],
            isBranchPoint: true,
            responseTip: "可以选择换同款或不同型号，也可以选择退款",
            alternativeExpressions: [
              {
                textEn: "It's within 30 days, so you can swap them or get your money back. What would you prefer?",
                textZh: "在30天内，可以换新或退钱。你想怎么处理？",
                actionHint: "选择换货或退款",
                frequency: "common",
              },
              {
                textEn: "Since you bought them recently, I can do a straight exchange or a full refund. Your call.",
                textZh: "因为是最近买的，可以直接换新或全额退款。你说了算。",
                actionHint: "做出选择",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Awesome. Since it's within 30 days, you can just swap 'em out or get all your money back. Wanna switch for a new pair or maybe try a different kind?",
            culturalNote: "美国零售店退换货政策普遍比中国宽松。",
            formalityVariants: {
              casual:
                "Great! Since it's under 30 days, you can just exchange 'em or get a refund. New pair or different model?",
              standard:
                "Perfect. Since it's within 30 days, you can do a direct exchange or get a full refund. Would you like to swap them for a new pair or try a different model?",
              formal:
                "Excellent. As this transaction falls within our 30-day return window, you are eligible for a direct product exchange or a full monetary refund. Would you prefer to exchange them for an identical new pair, or would you be interested in exploring an alternative model?",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'll exchange for the same model. But I'm worried it might happen again. Do you have an extended warranty?",
            textZh: "我换同款吧。但我担心再出问题。有延保吗？",
            casualVersion:
              "I'll just get the same kind. But I'm kinda worried it'll just break again. Got an extended warranty?",
            commonMistake: {
              wrong: "I change same model. But I fear it happen again. Have extended warranty?",
              correct:
                "I'll exchange for the same model. But I'm worried it might happen again. Do you have an extended warranty?",
              explanation: "省略主语和助动词不自然；“I fear”生硬，用“I’m worried”。",
            },
            formalityVariants: {
              casual: "I'll take the same ones. But what if they break again? Got an extended warranty?",
              standard:
                "I'll exchange for the same model. But I'm worried it might happen again. Do you have an extended warranty?",
              formal:
                "I will opt for an exchange for the identical model. However, I am concerned about a recurrence of this issue. Do you offer an extended warranty program?",
            },
          },
          {
            speaker: "them",
            role: "销售员",
            textEn:
              "We do! Our protection plan covers accidental damage and defects for two years. It's $19.99 for earbuds in this price range. It also covers one free replacement, no questions asked.",
            textZh:
              "有的！我们的保障计划覆盖意外损坏和缺陷，有效期两年。这个价位的耳机保障计划是19.99美元。还包含一次免费换新，无需解释原因。",
            commonMistake: {
              wrong: "It covers accidental damage and defects for two years. It is $19.99.",
              correct: "It covers accidental damage and defects for two years. It costs $19.99.",
              explanation: "谈论价格时，'it is'不够完整，'it costs'或'it's priced at'更自然。",
            },
            culturalNote: "美国延保服务很普遍，通常会积极推销",
            keyPhrases: [
              { en: "protection plan", zh: "保障计划" },
              { en: "accidental damage", zh: "意外损坏" },
              { en: "no questions asked", zh: "无需解释/无条件" },
            ],
            vocabNotes: {
              "no questions asked": {
                meaningInContext: "在这句话里表示：不需要解释原因、无条件接受",
                similarUsage: "类似用法：30-day return, no questions asked.（30天无条件退货）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "We have a 2-year plan for $19.99. Covers drops, defects, and one free replacement — no questions asked.",
                textZh: "有个19.99美元的两年计划。覆盖摔坏、缺陷，还有一次免费换新——无需理由。",
                actionHint: "考虑是否购买",
                frequency: "common",
              },
              {
                textEn: "For about $20, you get two years of coverage. If anything goes wrong, we just swap it out.",
                textZh: "大约20美元可以保两年。出了任何问题直接换新。",
                actionHint: "了解保障范围",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep! Our protection plan covers accidental damage and defects for two years. It's only 20 bucks for earbuds in this price range. Plus, you get one free replacement, no questions asked.",
            formalityVariants: {
              casual:
                "Yep! Our plan covers accidental damage for two years. Like 20 bucks for these. And one free replacement, no questions asked.",
              standard:
                "We do! Our protection plan covers accidental damage and defects for two years. It's $19.99 for earbuds in this price range. It also covers one free replacement, no questions asked.",
              formal:
                "Yes, we certainly do. Our comprehensive protection plan offers coverage for both accidental damage and manufacturing defects for a duration of two years. For earbuds within this particular price category, the cost is $19.99. Furthermore, it includes one complimentary replacement without any inquiry into the circumstances.",
            },
          },
          {
            speaker: "you",
            textEn: "That sounds worth it. I'll add the protection plan. Can you set up the new earbuds for me?",
            textZh: "听起来值得。加上保障计划。能帮我设置一下新耳机吗？",
            casualVersion: "Sounds good. I'll get the protection plan. Could you set up the new earbuds for me?",
            commonMistake: {
              wrong: "That worthy. I want add protection plan. You can help me set up new earphone?",
              correct: "That sounds worth it. I'll add the protection plan. Can you set up the new earbuds for me?",
              explanation: "worthy是形容词，不能直接用；“I want”生硬，用“I’ll add”；“help me set up”更好。",
            },
            formalityVariants: {
              casual: "Sounds good. I'll get the plan. Can you set up the new ones?",
              standard: "That sounds worth it. I'll add the protection plan. Can you set up the new earbuds for me?",
              formal:
                "That sounds like a very worthwhile investment. I would like to proceed with adding the protection plan. Would it be possible for you to assist me with the setup of the new earbuds?",
            },
          },
          {
            speaker: "them",
            role: "销售员",
            textEn:
              "Of course! I'll pair them with your phone right now. It only takes a minute. Here's your new pair with the warranty card.",
            textZh: "当然！我现在帮你和手机配对。只要一分钟。这是您的新耳机和保修卡。",
            commonMistake: {
              wrong: "I help you pair them.",
              correct: "I'll pair them with your phone.",
              explanation: "“帮你做某事”更自然地表达为 I'll do X for you 或 I'll do X。",
            },
            keyPhrases: [
              { en: "pair them", zh: "配对" },
              { en: "warranty card", zh: "保修卡" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure! Let me pair them with your phone real quick. Here's your new pair and the warranty info.",
                textZh: "好的！我快速帮你跟手机配对。这是新耳机和保修信息。",
                actionHint: "把手机给店员配对",
                frequency: "common",
              },
              {
                textEn:
                  "I'll get them connected for you. Takes just a minute. Here's your warranty card — keep it somewhere safe.",
                textZh: "我帮你连上。一分钟就好。这是保修卡——放好别丢。",
                actionHint: "保管好保修卡",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Totally! I'll pair 'em with your phone, like, right now. Takes only a sec. Here's your new pair, and the warranty card.",
            formalityVariants: {
              casual: "Sure thing! I'll pair 'em up for you in a sec. Here's your new pair and the warranty info.",
              standard:
                "Of course! I'll pair them with your phone right now. It only takes a minute. Here's your new pair with the warranty card.",
              formal:
                "Certainly! I would be delighted to pair them with your mobile device immediately. This process typically takes no more than a minute. Here is your new pair of earbuds, along with the accompanying warranty card.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you so much. You've been really helpful!",
            textZh: "太感谢了。你帮了大忙！",
            casualVersion: "Thanks a ton! You've been a huge help!",
            commonMistake: {
              wrong: "Thank you very much. You give me big help!",
              correct: "Thank you so much. You've been really helpful!",
              explanation: "中文直译“大帮助”不自然，英文常用“a big help”或“really helpful”。",
            },
            formalityVariants: {
              casual: "Thanks a ton! You were super helpful.",
              standard: "Thank you so much. You've been really helpful!",
              formal: "I sincerely appreciate your assistance. You have been exceptionally helpful.",
            },
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
            casualVersion: "Hey, these bags current season or just for outlets?",
            commonMistake: {
              wrong: "Are these bags current season or special for outlet?",
              correct: "Are these bags from the current season, or are they outlet-exclusive?",
              explanation: "outlet-exclusive是地道说法，不直译'专供'。",
            },
            formalityVariants: {
              casual: "Hey, these bags current season or just for outlets?",
              standard: "Hi, are these bags from the current season, or are they outlet-exclusive?",
              formal: "Good morning/afternoon, I was wondering if these handbags are from the current collection or if they are exclusively manufactured for outlet locations?",
            },
            culturalNote: "有些奥莱商品是专门为奥莱生产的（outlet-exclusive），质量可能和正价店不同。可以直接问。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Great question! These on the front table are outlet-exclusive styles. But we also have some past-season items from our main stores — those are on the back wall with the red tags.",
            textZh: "问得好！前面桌上这些是奥莱专供款。但我们也有正价店的过季商品——在后面墙上，贴红色标签的那些。",
            commonMistake: {
              wrong: "Those are red label.",
              correct: "Those are on the back wall with the red tags.",
              explanation: "中文常说“红标签的”，英文需说明标签在哪里或修饰词。",
            },
            casualVersion: "Good question! Front table stuff's outlet-only. But we got some older main-store items too — those're on the back wall, red tags.",
            formalityVariants: {
              casual: "Good question! Front table stuff's outlet-only. But we got some older main-store items too — those're on the back wall, red tags.",
              standard: "Great question! These on the front table are outlet-exclusive styles. But we also have some past-season items from our main stores — those are on the back wall with the red tags.",
              formal: "That's an excellent question! The items displayed on the front table are indeed our outlet-exclusive styles. However, we also stock a selection of past-season merchandise originally sold in our flagship stores, which you'll find on the back wall, clearly marked with red tags.",
            },
            keyPhrases: [
              { en: "outlet-exclusive", zh: "奥莱专供" },
              { en: "past-season", zh: "过季的" },
              { en: "main stores", zh: "正价店" },
              { en: "red tags", zh: "红色标签" },
            ],
            vocabNotes: {
              "outlet-exclusive": {
                meaningInContext: "在这句话里表示：专门为奥特莱斯生产的商品，非正价店下架商品",
                similarUsage: "类似用法：online-exclusive（网店专供）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "The front table is our outlet line. The back wall has items from our regular stores — look for the red tags.",
                textZh: "前面桌上是奥莱专线。后面墙上是正价店的货——找红标签的。",
                actionHint: "看红标签找正价店过季款",
                frequency: "common",
              },
              {
                textEn:
                  "Some are outlet-only, some are past-season from our main stores. The red-tagged ones are from the regular line.",
                textZh: "有些是奥莱专供，有些是正价店的过季款。贴红标签的是正价店的。",
                actionHint: "区分奥莱专供和过季款",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I see. How much is this crossbody bag? The price tag says $198, but is there an additional discount?",
            textZh: "好的。这个斜挎包多少钱？标签上写198美元，还有额外折扣吗？",
            casualVersion: "Gotcha. How much for this crossbody? Tag says 198, but is there an extra discount?",
            commonMistake: {
              wrong: "I see. How much this crossbody bag? Label says $198, but have additional discount?",
              correct: "I see. How much is this crossbody bag? The price tag says $198, but is there an additional discount?",
              explanation: "注意英文的冠词和动词使用，更自然。",
            },
            formalityVariants: {
              casual: "Gotcha. How much for this crossbody? Tag says 198, but is there an extra discount?",
              standard: "I see. How much is this crossbody bag? The price tag says $198, but is there an additional discount?",
              formal: "Understood. Could you please inform me of the price of this crossbody bag? The price tag indicates $198, but I was wondering if there are any further discounts applicable.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Yes! Everything with a red tag is an additional 30% off the marked price. So that bag would come out to about $138.60 before tax.",
            textZh: "有的！红色标签的商品在标价基础上再打七折。所以这个包税前大约138.60美元。",
            commonMistake: {
              wrong: "It will be $138.60.",
              correct: "So that bag would come out to about $138.60 before tax.",
              explanation: "“Come out to”更自然地表达最终价格，加上“before tax”更清晰。",
            },
            casualVersion: "Yep! Anything with a red tag's an extra 30% off. So that bag'd be like 138.60 before tax.",
            formalityVariants: {
              casual: "Yep! Anything with a red tag's an extra 30% off. So that bag'd be like 138.60 before tax.",
              standard: "Yes! Everything with a red tag is an additional 30% off the marked price. So that bag would come out to about $138.60 before tax.",
              formal: "Indeed. All items bearing a red tag are eligible for an additional 30% discount off the displayed price. Therefore, that particular handbag would be approximately $138.60 prior to the inclusion of sales tax.",
            },
            keyPhrases: [
              { en: "additional 30% off", zh: "额外七折/再减30%" },
              { en: "marked price", zh: "标价" },
              { en: "come out to", zh: "算下来是" },
            ],
            vocabNotes: {
              "come out to": {
                meaningInContext: "在这句话里表示：计算后最终价格是",
                similarUsage: "类似用法：With tax, it comes out to $150.（含税算下来是150美元）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Red tags are 30% off the sticker price. So that bag ends up around $139 before tax.",
                textZh: "红标签的在标价基础上打七折。所以那个包税前大约139美元。",
                actionHint: "了解折扣力度",
                frequency: "common",
              },
              {
                textEn: "There's an extra 30% off everything with a red tag. That brings this one down to about $139.",
                textZh: "红标签的额外七折。这个算下来大约139美元。",
                actionHint: "计算实际价格",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a pretty good deal. How does the quality compare to the full-price store?",
            textZh: "挺划算的。和正价店的质量比怎么样？",
            casualVersion: "That's a good deal. Quality-wise, how's it compare to the regular stores?",
            commonMistake: {
              wrong: "Very good deal. How quality compare with regular store?",
              correct: "That's a good deal. How does the quality compare to items from the regular stores?",
              explanation: "英文表达“比较”时常用\"compare to\"或\"compare with\"。",
            },
            formalityVariants: {
              casual: "That's a good deal. Quality-wise, how's it compare to the regular stores?",
              standard: "That's a good deal. How does the quality compare to items from the regular stores?",
              formal: "That is quite a favorable price. Could you please elaborate on how the quality of these items compares to those found in your full-price retail establishments?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Honestly, the outlet-exclusive line uses slightly different materials, but the craftsmanship is still excellent. The past-season items on the back wall are identical to what was sold in our main stores.",
            textZh: "说实话，奥莱专供线用的材料略有不同，但做工还是很好的。后面墙上的过季款和正价店卖的完全一样。",
            commonMistake: {
              wrong: "Workmanship is good.",
              correct: "the craftsmanship is still excellent.",
              explanation: "Craftsmanship（工艺）比workmanship（做工）更常用、更正式。",
            },
            casualVersion: "Honestly, the outlet-only stuff uses slightly different materials, but the craftsmanship's still great. The old season items on the back wall are exactly what we sold in the main stores.",
            formalityVariants: {
              casual: "Honestly, the outlet-only stuff uses slightly different materials, but the craftsmanship's still great. The old season items on the back wall are exactly what we sold in the main stores.",
              standard: "Honestly, the outlet-exclusive line uses slightly different materials, but the craftsmanship is still excellent. The past-season items on the back wall are identical to what was sold in our main stores.",
              formal: "To be candid, the outlet-exclusive merchandise utilizes materials that may differ slightly from our full-price collection, however, the standard of craftsmanship remains exceptional. The past-season items displayed on the back wall are indeed identical in every aspect to those previously retailed in our primary stores.",
            },
            keyPhrases: [
              { en: "craftsmanship", zh: "做工/工艺" },
              { en: "identical", zh: "完全一样的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The outlet line uses slightly different materials, but the quality is still solid. The past-season stuff on the back wall is the exact same as the main store.",
                textZh: "奥莱线用的材料略有不同，但质量还是很好的。后面墙上的过季款和正价店完全一样。",
                actionHint: "考虑选过季款",
                frequency: "common",
              },
              {
                textEn:
                  "To be honest, the outlet-exclusive pieces are a bit different. But the red-tag items? Those are identical to the full-price store.",
                textZh: "说实话，奥莱专供的有点不同。但红标签的？和正价店一模一样。",
                actionHint: "了解质量区别",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd prefer the past-season ones then. Do you have this style in black?",
            textZh: "那我更想要过季款。这个款式有黑色的吗？",
            casualVersion: "Okay, I'll go with a past-season one then. Got this style in black?",
            commonMistake: {
              wrong: "Then I want past-season one. This style have black color?",
              correct: "I'll take a past-season item then. Do you have this style in black?",
              explanation: "'want'不够礼貌，'take'更好；问颜色用'in black'。",
            },
            formalityVariants: {
              casual: "Okay, I'll go with a past-season one then. Got this style in black?",
              standard: "I'll take a past-season item then. Do you have this style in black?",
              formal: "In that case, I would prefer a past-season item. Do you happen to have this particular style available in black?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Let me check... We have it in black and navy. The black one is the last one we have in stock. Would you like to grab it before it's gone?",
            textZh: "我看看……有黑色和海军蓝的。黑色的是最后一个了。要趁还在的时候拿下吗？",
            culturalNote: "美国商家常会使用这种“仅剩一个”的策略来鼓励顾客尽快购买。",
            commonMistake: {
              wrong: "Would you like to buy it now?",
              correct: "Would you like to grab it before it's gone?",
              explanation: "“Grab it before it's gone”是常见的销售话术，表达“趁还有赶紧买”。",
            },
            casualVersion: "Lemme check... Got it in black and navy. Black's the last one we got. Wanna grab it before it's gone?",
            formalityVariants: {
              casual: "Lemme check... Got it in black and navy. Black's the last one we got. Wanna grab it before it's gone?",
              standard: "Let me check... We have it in black and navy. The black one is the last one we have in stock. Would you like to grab it before it's gone?",
              formal: "Allow me to verify... We currently have this item available in both black and navy. Please note that the black variant is the final one remaining in our current inventory. Would you care to acquire it before it is no longer available?",
            },
            keyPhrases: [
              { en: "last one in stock", zh: "最后一个了" },
              { en: "before it's gone", zh: "趁还在/售完为止" },
            ],
            alternativeExpressions: [
              {
                textEn: "Black is almost sold out — this is our last one.",
                textZh: "黑色快卖完了——这是最后一个。",
                actionHint: "如果喜欢就赶紧买",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I'll take the black one! Do you offer tax-free shopping for tourists?",
            textZh: "好的，我要黑色的！你们给游客提供免税购物吗？",
            casualVersion: "Yep, I'll take the black one! Can tourists shop tax-free here?",
            culturalNote: "美国商店一般不提供店内退税，需去机场或特定地点办理。",
            commonMistake: {
              wrong: "I want black one! Do you have tax free for tourist?",
              correct: "Yes, I'll take the black one! Do you offer tax-free shopping for tourists?",
              explanation: "'tax-free shopping'是固定说法，'offer'动词更准确。",
            },
            formalityVariants: {
              casual: "Yep, I'll take the black one! Can tourists shop tax-free here?",
              standard: "Yes, I'll take the black one! Do you offer tax-free shopping for tourists?",
              formal: "Yes, I would be delighted to purchase the black one. May I inquire if you provide tax-free shopping services for international tourists?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "We don't do tax-free in-store, but you can claim a tax refund at the customer service center near the main entrance. Just bring your passport and receipts.",
            textZh: "店内不免税，但您可以去主入口附近的客服中心申请退税。带好护照和收据就行。",
            culturalNote: "美国境内购物通常没有欧洲那样的店内退税。退税（Tax Refund）需在机场或特定服务中心办理，且政策因州而异。",
            commonMistake: {
              wrong: "We don't have tax free in store.",
              correct: "We don't offer tax-free shopping in-store here, but you can apply for a tax refund at the customer service center near the main entrance.",
              explanation: "美式英语中，in-store tax-free shopping不常见，通常指tax refund process。",
            },
            casualVersion: "Nah, we don't do tax-free in-store. But you can hit up Guest Services by the main entrance for a refund. Just need your passport and receipt.",
            formalityVariants: {
              casual: "Nah, we don't do tax-free in-store. But you can hit up Guest Services by the main entrance for a refund. Just need your passport and receipt.",
              standard: "We don't offer tax-free shopping directly in-store, but you can apply for a tax refund at the Guest Services center near the main entrance. Just bring your passport and receipt.",
              formal: "Unfortunately, we do not facilitate tax-free shopping directly within the store. However, you are welcome to apply for a tax refund at the Guest Services center, conveniently located near the main entrance. Please ensure you have your passport and purchase receipt for this process.",
            },
            keyPhrases: [
              { en: "tax refund", zh: "退税" },
              { en: "customer service center", zh: "客服中心" },
              { en: "passport and receipts", zh: "护照和收据" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We can't do tax-free here, but the info desk near the main entrance can help with refunds. Bring your passport.",
                textZh: "我们店里不免税，但主入口的服务台可以办退税。带好护照。",
                actionHint: "去客服中心办退税",
                frequency: "common",
              },
              {
                textEn:
                  "Tax refund is handled at the customer service desk by the entrance. Just show them your receipts and passport.",
                textZh: "退税在入口旁的客服台办理。出示收据和护照就行。",
                actionHint: "准备好证件和收据",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. I'll do that. Thank you!",
            textZh: "好的，我会去的。谢谢！",
            casualVersion: "Good to know. I'll head over there then. Thanks!",
            commonMistake: {
              wrong: "I know. I will go there. Thank you!",
              correct: "Good to know. I'll go there then. Thank you!",
              explanation: "'Good to know'是常用语，比'I know'更自然客气。",
            },
            formalityVariants: {
              casual: "Good to know. I'll head over there then. Thanks!",
              standard: "Good to know. I'll go there then. Thank you!",
              formal: "That is good to know. I shall proceed there then. Thank you for the information!",
            },
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
            culturalNote: "在美国，许多商家提供价格匹配（Price Match）服务，顾客可以通过提供证据要求商家匹配其他地方更低的价格。",
            casualVersion: "Hey, saw this exact jacket for 20 bucks less at another outlet. Y'all do price matching?",
            commonMistake: {
              wrong: "Do you have price match?",
              correct: "Do you do price matching?",
              explanation: "中文“有”常译为have，但此处应使用动词do或offer。",
            },
            formalityVariants: {
              casual: "Hey, saw this jacket for 20 bucks less at another outlet. Y'all do price matching?",
              standard: "Hi, I saw this exact jacket at another outlet store for $20 less. Do you do price matching?",
              formal:
                "Good afternoon. I observed this identical jacket priced $20 lower at an alternative outlet location. May I inquire if your establishment offers a price matching policy?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "We do price match with select retailers. Do you have proof of the other store's price — like a photo of the tag or their website listing?",
            textZh: "我们和部分零售商做价格匹配。您有那家店价格的证明吗——比如标签的照片或者他们网站上的标价？",
            commonMistake: {
              wrong: "Do you have the proof?",
              correct: "Do you have proof of the other store's price—like a photo of the tag or their website pricing?",
              explanation: "需明确是什么的“证明”，并举例说明，便于理解和操作。",
            },
            keyPhrases: [
              { en: "price match", zh: "价格匹配" },
              { en: "proof of price", zh: "价格证明" },
              { en: "website listing", zh: "网站标价" },
            ],
            vocabNotes: {
              "price match": {
                meaningInContext: "在这句话里表示：如果其他店更便宜，本店也给你同样的价格",
                similarUsage: "类似用法：Best Buy will price match Amazon.（百思买会匹配亚马逊的价格）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "We do price matching. Can you show me proof — a photo or their website?",
                textZh: "我们做价格匹配。能出示证明吗——照片或他们的网站？",
                actionHint: "出示价格证明",
                frequency: "common",
              },
              {
                textEn: "If you can show me the other store's price, I can see about matching it.",
                textZh: "如果能给我看另一家店的价格，我看看能不能匹配。",
                actionHint: "拿出价格证据",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "We do price match with some retailers. Got proof of their price? Like a pic of the tag or their website?",
            formalityVariants: {
              casual:
                "We price match with some retailers. Got proof of their price? Like a pic of the tag or their website?",
              standard:
                "We do price match with select retailers. Do you have proof of the other store's price — like a photo of the tag or their website listing?",
              formal:
                "Our establishment does indeed offer price matching with a selection of authorized retailers. Do you possess any verifiable evidence of the competing store's price, such as a photographic image of the price tag or a direct link to their official website listing?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I took a photo. Here, you can see the price tag — same brand, same style number.",
            textZh: "有的，我拍了照片。你看，价签上有——同品牌、同款号。",
            casualVersion: "Yeah, took a pic. Here, you can see the tag — same brand, same style number.",
            commonMistake: {
              wrong: "I have photo.",
              correct: "I took a photo.",
              explanation: "“have photo”不自然，应加冠词a并用动词take。",
            },
            formalityVariants: {
              casual: "Yeah, took a pic. Here, you can see the tag — same brand, same style number.",
              standard: "Yes, I took a photo. Here, you can see the price tag — same brand, same style number.",
              formal:
                "Affirmative, I did capture an image. Kindly observe the price tag here, which unequivocally displays the identical brand and style number.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Let me verify... Yes, I can see it's the same item. I'll need to get my manager's approval for the price match. One moment, please.",
            textZh: "我核实一下……是的，确实是同款。价格匹配需要经理批准。请稍等。",
            commonMistake: {
              wrong: "My manager must approve.",
              correct: "Price matching requires manager approval. Please wait a moment.",
              explanation: "表达“需要经理批准”时，应使用被动语态或更委婉的说法。",
            },
            keyPhrases: [
              { en: "verify", zh: "核实" },
              { en: "manager's approval", zh: "经理批准" },
            ],
            alternativeExpressions: [
              {
                textEn: "Looks like the same item. Let me get my manager to sign off on the price match real quick.",
                textZh: "看起来是同款。我找经理快速批准一下价格匹配。",
                actionHint: "等待经理审批",
                frequency: "common",
              },
              {
                textEn: "I can see it's the same product. Hold on, I need my manager's okay for price adjustments.",
                textZh: "确实是同款。稍等，调价需要经理批准。",
                actionHint: "耐心等待",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Lemme verify... Yep, same item. Gotta get my manager's approval for the price match. Hold on a sec.",
            formalityVariants: {
              casual:
                "Lemme verify... Yep, same item. Gotta get my manager's approval for the price match. Hold on a sec.",
              standard:
                "Let me verify... Yes, I can see it's the same item. I'll need to get my manager's approval for the price match. One moment, please.",
              formal:
                "Allow me a moment to verify... Indeed, I can confirm it is the identical product. I will require authorization from my manager to process the price match. Please bear with me for a brief moment.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Good news — my manager approved the price match. I can sell it to you for $79.99 instead of $99.99. Would you like to go ahead?",
            textZh: "好消息——经理批准了价格匹配。可以79.99美元卖给您，不是99.99美元。要买吗？",
            commonMistake: {
              wrong: "Do you want to buy it?",
              correct: "Would you like to go ahead with the purchase?",
              explanation: "“Go ahead with the purchase”或“wanna go for it”更自然地询问顾客是否确认购买。",
            },
            keyPhrases: [
              { en: "approved", zh: "批准了" },
              { en: "go ahead", zh: "继续/买下" },
            ],
            alternativeExpressions: [
              {
                textEn: "Great news! We can match it — $79.99 instead of $99.99. Want to go ahead?",
                textZh: "好消息！可以匹配——79.99而不是99.99美元。要买吗？",
                actionHint: "确认购买",
                frequency: "common",
              },
              {
                textEn: "My manager said yes! I'll ring it up at $79.99 for you.",
                textZh: "经理同意了！给你按79.99美元结账。",
                actionHint: "准备付款",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Good news — manager approved the price match. Can sell it to ya for 79.99 instead of 99.99. Wanna go ahead?",
            formalityVariants: {
              casual:
                "Good news — manager approved the price match. Can sell it to ya for 79.99 instead of 99.99. Wanna go ahead?",
              standard:
                "Good news — my manager approved the price match. I can sell it to you for $79.99 instead of $99.99. Would you like to go ahead?",
              formal:
                "Excellent news — my manager has granted approval for the price match. I am now authorized to offer it to you for $79.99, reduced from $99.99. Would you care to proceed with the purchase?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please! And can I also use this 15% off coupon I got at the entrance?",
            textZh: "好的！我在入口拿了一张八五折优惠券，可以叠加使用吗？",
            culturalNote: "在美国，优惠券的使用规则通常很明确，尤其是在折扣商品上，叠加使用（Stacking Coupons）通常有限制。",
            casualVersion: "Yep, please! And can I also use this 15% off coupon I got at the entrance?",
            commonMistake: {
              wrong: "Can I use this coupon together?",
              correct: "Can I combine this coupon?",
              explanation: "“use together”不够自然，用combine或with it。",
            },
            formalityVariants: {
              casual: "Yep, please! And can I also use this 15% off coupon I got at the entrance?",
              standard: "Yes, please! And can I also use this 15% off coupon I got at the entrance?",
              formal:
                "Yes, absolutely! Furthermore, may I inquire if it is permissible to apply this 15% discount coupon, which I acquired at the entrance, in conjunction with the price match?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Unfortunately, coupons can't be combined with price matching. It's one or the other. In this case, the price match gives you a bigger discount, so I'd go with that.",
            textZh: "不好意思，优惠券不能和价格匹配叠加。只能选一个。这种情况下价格匹配更划算，建议选价格匹配。",
            culturalNote: "商家通常不允许顾客同时享受多种优惠，如价格匹配和优惠券。员工会建议对顾客最划算的方式。",
            commonMistake: {
              wrong: "Coupons and price match cannot use together.",
              correct: "Unfortunately, coupons cannot be combined with price matching. You'll have to choose one. In this case, the price match is a better deal, so I'd recommend that.",
              explanation: "“Cannot be combined with”比“cannot use together”更地道，表达优惠不能叠加使用。",
            },
            keyPhrases: [
              { en: "can't be combined", zh: "不能叠加" },
              { en: "one or the other", zh: "二选一" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sorry, those two promotions don't stack.",
                textZh: "抱歉，这两个优惠不能叠加。",
                actionHint: "选更优惠的那个",
                frequency: "common",
              },
            ],
            casualVersion:
              "Nah, coupons can't be combined with price matching. It's one or the other. Price match gives you a bigger discount here, so I'd go with that.",
            formalityVariants: {
              casual:
                "Nah, coupons can't be combined with price matching. It's one or the other. Price match gives you a bigger discount here, so I'd go with that.",
              standard:
                "Unfortunately, coupons can't be combined with price matching. It's one or the other. In this case, the price match gives you a bigger discount, so I'd go with that.",
              formal:
                "Regrettably, our policy dictates that coupons cannot be combined with a price matching adjustment. It is a matter of selecting one promotional offer or the other. In this specific instance, the price match offers a more substantial reduction, which I would recommend.",
            },
          },
          {
            speaker: "you",
            textEn: "That makes sense. I'll go with the price match. Thanks for explaining!",
            textZh: "有道理。那就价格匹配吧。谢谢解释！",
            commonMistake: {
              wrong: "That reasonable. I choose price match. Thank you your explain!",
              correct: "That makes sense. I'll go with the price match then. Thanks for explaining!",
              explanation: "'makes sense'是常用表达，\"go with\"更自然，\"Thanks for explaining\"是固定搭配。",
            },
            casualVersion: "Makes sense. I'll go with the price match. Thanks for explaining!",
            formalityVariants: {
              casual: "Makes sense. I'll go with the price match. Thanks for explaining!",
              standard: "That makes sense. I'll go with the price match. Thanks for explaining!",
              formal:
                "That is perfectly understandable. I will proceed with the price match. Thank you for your comprehensive explanation.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "You're welcome! Great deal you're getting. Cash or card?",
            textZh: "不客气！您买得很划算。现金还是刷卡？",
            commonMistake: {
              wrong: "No problem! You got good price. Cash or credit card?",
              correct: "You're welcome! You're getting a great deal. Cash or card?",
              explanation: "“You're welcome”更常用，且“cash or card”是更简洁自然的问法。",
            },
            alternativeExpressions: [
              {
                textEn: "No problem! You're saving a good chunk. How are you paying?",
                textZh: "没问题！省了不少呢。怎么付？",
                actionHint: "选择付款方式",
                frequency: "common",
              },
              {
                textEn: "Happy to help! Cash or card for you today?",
                textZh: "很高兴帮到你！今天付现还是刷卡？",
                actionHint: "告诉店员付款方式",
                frequency: "common",
              },
            ],
            casualVersion: "No problem! Great deal you're getting. Cash or card?",
            formalityVariants: {
              casual: "No problem! Great deal you're getting. Cash or card?",
              standard: "You're welcome! Great deal you're getting. Cash or card?",
              formal:
                "You are most welcome. This represents a most advantageous purchase for you. Will this be cash or credit card?",
            },
          },
          {
            speaker: "you",
            textEn: "Card, please. Thank you!",
            textZh: "刷卡。谢谢！",
            commonMistake: {
              wrong: "Card. Thank you!",
              correct: "Card, please. Thank you!",
              explanation: "虽然省略'please'能理解，加上会更有礼貌。",
            },
            casualVersion: "Card, please. Thanks!",
            formalityVariants: {
              casual: "Card, please. Thanks!",
              standard: "Card, please. Thank you!",
              formal: "Credit card, if you please. Thank you very much.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 网购自提 ====================
  {
    id: "shopping-online-pickup",
    tags: ["pickup", "自提", "online order", "网购"],
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
            casualVersion: "Hey, just here to grab an online order.",
            culturalNote: "美国服务场所用Hi/Hey很常见，无需太过客套",
            commonMistake: {
              wrong: "Hi, I take online order.",
              correct: "Hi, I'm here to pick up an online order.",
              explanation: "take order 是指接受订单，pick up 才是取货。",
            },
            formalityVariants: {
              casual: "Hey, just here to grab an online order.",
              standard: "Hi, I'm here to pick up an online order.",
              formal: "Good morning/afternoon, I am here to collect an online order, please.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Sure! Can I have your order number or the name on the order?",
            textZh: "好的！能给我订单号或者下单的名字吗？",
            commonMistake: {
              wrong: "Sure! Give me your order number or the name on the order.",
              correct: "Sure! Can I have your order number or the name on the order?",
              explanation: "“Give me...” 语气生硬，用 “Can I have...” 更礼貌自然。",
            },
            keyPhrases: [
              { en: "order number", zh: "订单号" },
              { en: "name on the order", zh: "下单人姓名" },
            ],
            alternativeExpressions: [
              {
                textEn: "Do you have your pickup confirmation email?",
                textZh: "您有取货确认邮件吗？",
                actionHint: "出示确认邮件或说订单号",
                frequency: "common",
              },
            ],
            casualVersion: "Sure thing! Got your order number or the name?",
            formalityVariants: {
              casual: "Sure thing! Got your order number or the name?",
              standard: "Sure! Can I have your order number or the name on the order?",
              formal: "Certainly! May I have your order number or the name under which the order was placed?",
            },
          },
          {
            speaker: "you",
            textEn: "The order is under Wayne Wang. Here's the confirmation email on my phone.",
            textZh: "订单名是 Wayne Wang。这是我手机上的确认邮件。",
            culturalNote: "“Here's...” 或 “Here you go” 比直接说 “This is...” 更自然地递交物品。",
            casualVersion: "It's under Wayne Wang. Confirmation email's right here on my phone.",
            commonMistake: {
              wrong: "My name is Wayne Wang for the order.",
              correct: "The order is under Wayne Wang.",
              explanation: "订单名用 is under 更地道，而不是 My name is...",
            },
            formalityVariants: {
              casual: "It's under Wayne Wang. Confirmation email's right here on my phone.",
              standard: "The order is under Wayne Wang. Here's the confirmation email on my phone.",
              formal:
                "Yes, the order was placed under the name Wayne Wang. I have the confirmation email displayed on my mobile device.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "I found it. I'll just need to see a photo ID to verify. Can I see your driver's license or passport?",
            textZh: "找到了。我需要核实一下身份。能看一下驾照或护照吗？",
            commonMistake: {
              wrong: "I need to check your ID.",
              correct: "I just need to verify your identity.",
              explanation: "直接说“I need to check your ID”听起来像命令，用“verify your identity”或疑问句更礼貌。",
            },
            keyPhrases: [
              { en: "photo ID", zh: "带照片的证件" },
              { en: "verify", zh: "核实" },
              { en: "driver's license", zh: "驾照" },
            ],
            vocabNotes: {
              "photo ID": {
                meaningInContext: "在这句话里表示：有照片的身份证件，用来确认是本人取货",
                similarUsage: "类似用法：You'll need a valid photo ID to check in.（入住需要有效的带照片证件）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Got it. I just need to see some ID — a driver's license or passport works.",
                textZh: "找到了。需要看一下证件——驾照或护照都行。",
                actionHint: "出示证件",
                frequency: "common",
              },
              {
                textEn: "Here's your order. Can I just see your ID to confirm it's you?",
                textZh: "您的订单在这。看一下证件确认是本人好吗？",
                actionHint: "出示带照片的证件",
                frequency: "occasional",
              },
            ],
            casualVersion: "Got it. Just need to see some ID to verify. Driver's license or passport works.",
            culturalNote: "美国取货查ID是常规操作，无需觉得被冒犯",
            formalityVariants: {
              casual: "Got it. Just need to see some ID to verify. Driver's license or passport works.",
              standard:
                "I found it. I'll just need to see a photo ID to verify. Can I see your driver's license or passport?",
              formal:
                "Thank you, I've located the order. I will require a valid form of photo identification for verification purposes. May I please see your driver's license or passport?",
            },
          },
          {
            speaker: "you",
            textEn: "Sure, here's my passport.",
            textZh: "好的，这是我的护照。",
            casualVersion: "Yeah, here's my passport.",
            commonMistake: {
              wrong: "My passport here.",
              correct: "Here's my passport.",
              explanation: "Here's 听起来更自然，My passport here 语法不完整。",
            },
            formalityVariants: {
              casual: "Yeah, here's my passport.",
              standard: "Sure, here's my passport.",
              formal: "Certainly, here is my passport.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Perfect, everything checks out. Let me grab your order from the back. One moment.",
            textZh: "好的，信息都对上了。我去后面拿您的东西。稍等一下。",
            commonMistake: {
              wrong: "Perfect, everything is right. I go take your order from back. Wait.",
              correct: "Perfect, everything checks out. Let me grab your order from the back. One moment.",
              explanation: "“everything checks out” 更自然。“I go take” 不自然，“Wait” 语气生硬。",
            },
            keyPhrases: [
              { en: "checks out", zh: "核实通过" },
              { en: "grab your order", zh: "拿您的东西" },
              { en: "from the back", zh: "从后面（仓库）" },
            ],
            alternativeExpressions: [
              {
                textEn: "All good! Let me go get your stuff. Be right back.",
                textZh: "没问题！我去拿你的东西。马上回来。",
                actionHint: "等店员取货",
                frequency: "common",
              },
              {
                textEn: "ID matches. Give me a sec — I'll grab your order from the back.",
                textZh: "证件对上了。稍等——我去后面拿你的订单。",
                actionHint: "稍等片刻",
                frequency: "occasional",
              },
            ],
            casualVersion: "Awesome, looks good. I'll just go grab your order from the back. Be right back.",
            formalityVariants: {
              casual: "Awesome, looks good. I'll just go grab your order from the back. Be right back.",
              standard: "Perfect, everything checks out. Let me grab your order from the back. One moment.",
              formal:
                "Excellent, all the details are verified. I will retrieve your order from the storage area momentarily.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Here's your order — two items. Would you like to open it and check everything before you leave?",
            textZh: "这是您的订单——两件商品。要在走之前打开检查一下吗？",
            culturalNote: "在美国，商家主动提出让顾客当场检查商品是常见服务，以确保满意和避免后续问题。",
            commonMistake: {
              wrong: "Do you want to check it?",
              correct: "Would you like to open it to check?",
              explanation: "“Do you want to check it”太直接，用“would you like to”更客气。",
            },
            keyPhrases: [{ en: "check everything", zh: "检查一下" }],
            alternativeExpressions: [
              {
                textEn: "Here you go — two items in here. Want to check them before you head out?",
                textZh: "给您——里面两件。走之前要检查一下吗？",
                actionHint: "打开检查商品",
                frequency: "common",
              },
              {
                textEn: "Your order's all here. I'd recommend looking it over just to make sure everything's right.",
                textZh: "订单都在这了。建议检查一下确认没问题。",
                actionHint: "确认商品完好",
                frequency: "occasional",
              },
            ],
            casualVersion: "Here's your order — two items. Wanna open it and check it real quick before you head out?",
            formalityVariants: {
              casual: "Here's your order — two items. Wanna open it and check it real quick before you head out?",
              standard:
                "Here's your order — two items. Would you like to open it and check everything before you leave?",
              formal:
                "Here is your order, comprising two items. Would you prefer to open and inspect the contents prior to your departure?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, let me take a quick look... Everything looks good. Thank you!",
            textZh: "好的，我看一下……都没问题。谢谢！",
            casualVersion: "Yep, lemme just take a quick peek... Looks good! Thanks!",
            commonMistake: {
              wrong: "I check it. It's okay.",
              correct: "Let me take a quick look... Everything looks good.",
              explanation: "I check it 听起来生硬，用 let me take a look 更自然。Okay 不如 good 自然。",
            },
            formalityVariants: {
              casual: "Yep, lemme just take a quick peek... Looks good! Thanks!",
              standard: "Yes, let me take a quick look... Everything looks good. Thank you!",
              formal:
                "Yes, I would appreciate the opportunity to quickly examine the items... All appears to be in order. Thank you very much.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Great! If you have any issues, you can return or exchange within 30 days with your order confirmation. Have a good day!",
            textZh: "好的！如有问题，凭订单确认30天内可退换。祝您愉快！",
            commonMistake: {
              wrong: "You can return it in 30 days.",
              correct: "You can return or exchange within 30 days.",
              explanation: "强调“within 30 days”更明确，并补充“or exchange”让选项更完整。",
            },
            keyPhrases: [
              { en: "return or exchange", zh: "退换" },
              { en: "order confirmation", zh: "订单确认" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You're all set! You have 30 days to return or swap anything. Just bring your confirmation. Have a good day!",
                textZh: "搞定了！30天内可以退换。带好确认信息就行。祝你愉快！",
                actionHint: "记住退换期限",
                frequency: "common",
              },
              {
                textEn: "Awesome! If anything's wrong, come back within 30 days with your order email. Enjoy!",
                textZh: "太好了！有问题的话30天内带订单邮件来就行。好好用！",
                actionHint: "保存好订单邮件",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Awesome! Any issues, just bring it back within 30 days with that confirmation. Have a good one!",
            formalityVariants: {
              casual: "Awesome! Any issues, just bring it back within 30 days with that confirmation. Have a good one!",
              standard:
                "Great! If you have any issues, you can return or exchange within 30 days with your order confirmation. Have a good day!",
              formal:
                "Excellent! Should you encounter any issues, you are welcome to return or exchange the item(s) within 30 days, provided you present your order confirmation. Enjoy the rest of your day!",
            },
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
            textEn:
              "Hi, I just picked up my online order, but the color is completely different from what was shown on the website. I'd like to return it.",
            textZh: "你好，我刚取了网上下的单，但颜色和网站上显示的完全不一样。我想退货。",
            culturalNote: "“I'd like to” 比 “I want to” 更礼貌、委婉，在提出要求时尤其重要。",
            casualVersion:
              "Hey, just picked up my online order, but the color's totally off from the website. Wanna return it.",
            commonMistake: {
              wrong: "I want to return it.",
              correct: "I'd like to return it.",
              explanation: "在美语中，直接说“I want”听起来可能比较生硬或不礼貌。用“I'd like to”更客气。",
            },
            formalityVariants: {
              casual:
                "Hey, just picked up my online order, but the color's totally off from the website. Wanna return it.",
              standard:
                "Hi, I just picked up my online order, but the color is completely different from what was shown on the website. I'd like to return it.",
              formal:
                "Good morning/afternoon, I've just collected my online order, and I've noticed a significant discrepancy in the color compared to what was displayed on your website. I would like to initiate a return for this item.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "I'm sorry about that. Let me take a look. Do you have the order confirmation and a photo ID?",
            textZh: "很抱歉。我看看。您有订单确认和身份证件吗？",
            commonMistake: {
              wrong: "Give me your confirmation.",
              correct: "Do you have your order confirmation?",
              explanation: "“Give me”语气强硬，用“Do you have”更礼貌。",
            },
            alternativeExpressions: [
              {
                textEn: "Oh I'm sorry. Can I see your order info and ID? I'll sort this out for you.",
                textZh: "哦抱歉。能看一下订单信息和证件吗？我帮你处理。",
                actionHint: "出示订单和证件",
                frequency: "common",
              },
              {
                textEn: "That's not right. Let me pull up your order. Got your confirmation email handy?",
                textZh: "那不对。我调出你的订单看看。确认邮件方便看一下吗？",
                actionHint: "出示确认邮件",
                frequency: "occasional",
              },
            ],
            casualVersion: "Sorry about that. Lemme see. Got your order confirmation and ID?",
            formalityVariants: {
              casual: "Sorry about that. Lemme see. Got your order confirmation and ID?",
              standard: "I'm sorry about that. Let me take a look. Do you have the order confirmation and a photo ID?",
              formal:
                "My apologies for the inconvenience. May I please see your order confirmation and a valid form of photo identification?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, here's everything. See, on the website it looks navy blue, but this is clearly gray.",
            textZh: "有的，都在这。你看，网站上显示是海军蓝，但这明显是灰色的。",
            commonMistake: {
              wrong: "The website says it's navy blue, but this is gray.",
              correct: "It showed navy blue on the website, but this is clearly gray.",
              explanation: "用“It showed... but this is clearly...”表达更流畅自然，语气也更强调差异。",
            },
            casualVersion: "Yep, here ya go. See, website showed navy blue, but this is totally gray.",
            formalityVariants: {
              casual: "Yep, here ya go. See, website showed navy blue, but this is totally gray.",
              standard: "Yes, here's everything. See, on the website it looks navy blue, but this is clearly gray.",
              formal:
                "Yes, certainly. All necessary documents are here. As you can observe, the item displayed on the website was presented as navy blue, whereas this particular item is distinctly gray.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "I see what you mean — there is a noticeable difference. I can process a full refund for you. Would you prefer the refund to your original payment method, or would you like store credit?",
            textZh: "我理解——确实差别很大。我可以给您全额退款。退回原支付方式，还是要店铺积分？",
            commonMistake: {
              wrong: "Do you want money or store credit?",
              correct: "Would you prefer the refund to your original payment method, or would you like store credit?",
              explanation: "“Do you want money”过于直接且不专业，提供具体退款方式更礼貌。",
            },
            keyPhrases: [
              { en: "noticeable difference", zh: "明显差别" },
              { en: "full refund", zh: "全额退款" },
              { en: "original payment method", zh: "原支付方式" },
              { en: "store credit", zh: "店铺积分/购物券" },
            ],
            vocabNotes: {
              "store credit": {
                meaningInContext: "在这句话里表示：退款不给现金，而是给一张可以在本店消费的购物券或积分",
                similarUsage: "类似用法：You'll receive $50 in store credit.（您会收到50美元的店铺积分）",
              },
            },
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, that does look different. I can give you a full refund — back to your card or as store credit?",
                textZh: "确实看起来不一样。可以全额退款——退回卡上还是给店铺积分？",
                actionHint: "选择退款方式",
                frequency: "common",
              },
              {
                textEn:
                  "I see the issue. Would you like a refund to your original payment, or store credit for next time?",
                textZh: "我看到问题了。要退回原来的付款方式，还是给店铺积分下次用？",
                actionHint: "决定退款方式",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, I see it — big difference. I can totally do a full refund. Wanna put it back on your original card, or get store credit?",
            formalityVariants: {
              casual:
                "Yeah, I see it — big difference. I can totally do a full refund. Wanna put it back on your original card, or get store credit?",
              standard:
                "I see what you mean — there is a noticeable difference. I can process a full refund for you. Would you prefer the refund to your original payment method, or would you like store credit?",
              formal:
                "I understand your concern; there is indeed a considerable discrepancy. I can process a complete refund for you. Would you prefer the refund be issued to your original method of payment, or would store credit be more suitable?",
            },
          },
          {
            speaker: "you",
            textEn: "Refund to my credit card, please. How long will it take to process?",
            textZh: "退回信用卡吧。要多久处理好？",
            commonMistake: {
              wrong: "How long is it?",
              correct: "How long will it take to process?",
              explanation: "“How long is it”不完整，表达处理时间用“How long will it take to process”更准确。",
            },
            casualVersion: "Credit card, please. How long's it take?",
            formalityVariants: {
              casual: "Credit card, please. How long's it take?",
              standard: "Refund to my credit card, please. How long will it take to process?",
              formal:
                "Kindly process the refund to my credit card. Could you inform me of the approximate processing time?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "The refund will be processed immediately, but it may take 3 to 5 business days to appear on your statement. Here's your refund receipt.",
            textZh: "退款会立即处理，但可能需要3到5个工作日才会显示在您的账单上。这是退款收据。",
            commonMistake: {
              wrong: "The refund will be immediately, but maybe 3 to 5 business days to appear on your statement. Here you are the refund receipt.",
              correct: "The refund will be processed immediately, but it may take 3 to 5 business days to appear on your statement. Here's your refund receipt.",
              explanation: "“will be immediately” 语法错误。“Here you are...” 用于给对方物品，但后面不能直接跟物品名。",
            },
            keyPhrases: [
              { en: "3 to 5 business days", zh: "3到5个工作日" },
              { en: "appear on your statement", zh: "显示在账单上" },
              { en: "refund receipt", zh: "退款收据" },
            ],
            alternativeExpressions: [
              {
                textEn: "You should see it back on your card within a week.",
                textZh: "一周内应该能看到退回您卡上。",
                actionHint: "保留退款收据以防查询",
                frequency: "common",
              },
            ],
            casualVersion:
              "Refund's immediate, but might take 3 to 5 business days to show up on your statement. Here's your receipt.",
            formalityVariants: {
              casual:
                "Refund's immediate, but might take 3 to 5 business days to show up on your statement. Here's your receipt.",
              standard:
                "The refund will be processed immediately, but it may take 3 to 5 business days to appear on your statement. Here's your refund receipt.",
              formal:
                "The refund will be processed promptly. However, please allow three to five business days for it to reflect on your financial statement. Here is your refund receipt for your records.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Okay. Do you happen to have the navy blue version in stock here? I'd still like to buy it if the color is right.",
            textZh: "好的。你们店里有海军蓝的现货吗？如果颜色对的话我还是想买。",
            commonMistake: {
              wrong: "Do you have navy blue?",
              correct: "Do you happen to have the navy blue version in stock here?",
              explanation: "询问是否有库存用“in stock”更地道；“do you happen to have”让语气更委婉。",
            },
            casualVersion: "Okay. You guys got the navy blue one here in stock? I'd still buy it if the color's right.",
            formalityVariants: {
              casual: "Okay. You guys got the navy blue one here in stock? I'd still buy it if the color's right.",
              standard:
                "Okay. Do you happen to have the navy blue version in stock here? I'd still like to buy it if the color is right.",
              formal:
                "Understood. Would you by any chance have the navy blue version of this item available in stock at this location? I would still be interested in purchasing it, provided the color matches my expectations.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Let me check our inventory... Yes, we do have it in navy blue! Here, take a look — is this the color you were expecting?",
            textZh: "我查查库存……有的，有海军蓝的！您看看——这是您想要的颜色吗？",
            commonMistake: {
              wrong: "I check inventory... Yes, we have navy blue! You look — is this the color you want?",
              correct: "Let me check our inventory... Yes, we do have it in navy blue! Here, take a look — is this the color you were expecting?",
              explanation: "“I check” 不自然，“you look” 听起来像命令。“Is this the color you want?” 没 “expecting” 委婉。",
            },
            keyPhrases: [{ en: "inventory", zh: "库存" }],
            alternativeExpressions: [
              {
                textEn: "Let me look it up... Yep, we've got the navy blue in stock! Want to see it?",
                textZh: "我查查……有的，海军蓝有货！要看看吗？",
                actionHint: "确认颜色是否满意",
                frequency: "common",
              },
              {
                textEn:
                  "Checking our system... Good news, we have navy blue here in the store. Is this the color you wanted?",
                textZh: "查一下系统……好消息，店里有海军蓝的。这是你想要的颜色吗？",
                actionHint: "确认是否是正确的颜色",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Lemme check... Yep, got it in navy blue! Here, check it out — is this the color you wanted?",
            formalityVariants: {
              casual: "Lemme check... Yep, got it in navy blue! Here, check it out — is this the color you wanted?",
              standard:
                "Let me check our inventory... Yes, we do have it in navy blue! Here, take a look — is this the color you were expecting?",
              formal:
                "Please allow me a moment to verify our current inventory... Yes, we do indeed have it available in navy blue. Here it is; please confirm if this matches the color you were anticipating.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, that's exactly it! I'll take this one. Can I pay with the same card?",
            textZh: "对，就是这个！我要这个。可以用同一张卡付吗？",
            casualVersion: "Yep, that's it! I'll take this. Can I just use the same card?",
            commonMistake: {
              wrong: "Can I pay with same card?",
              correct: "Can I pay with the same card?",
              explanation: "中文里“同”字常用，但在英文中“same”前面常常需要加定冠词“the”，表示特指。",
            },
            formalityVariants: {
              casual: "Yep, that's it! I'll take this. Can I just use the same card?",
              standard: "Yes, that's exactly it! I'll take this one. Can I pay with the same card?",
              formal:
                "Yes, that is precisely the item. I would like to purchase this one. May I use the same payment card for this transaction?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Of course! And since this was our mistake, let me give you 10% off as a courtesy. Your total comes to $44.99.",
            textZh: "当然！既然是我们的问题，给您打个九折表示歉意。一共44.99美元。",
            culturalNote: "美国商家有时会因自身失误给予额外折扣来弥补顾客，这很常见。",
            commonMistake: {
              wrong: "I give you 10% off.",
              correct: "Let me give you 10% off.",
              explanation: "“I give you”听起来像个人恩惠，用“Let me give you”更像服务或政策。",
            },
            keyPhrases: [{ en: "as a courtesy", zh: "表示歉意/礼貌性地" }],
            vocabNotes: {
              courtesy: {
                meaningInContext: "在这句话里表示：出于歉意和礼貌给予的优惠",
                similarUsage: "类似用法：courtesy upgrade（免费升级作为补偿）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Sure thing! And since this was our fault, I'll knock 10% off. Your total is $44.99.",
                textZh: "没问题！既然是我们的失误，给你打九折。一共44.99美元。",
                actionHint: "接受折扣优惠",
                frequency: "common",
              },
              {
                textEn: "Of course! I'm also going to give you a 10% discount for the trouble. So it's $44.99.",
                textZh: "当然可以！给您添麻烦了，打个九折表示歉意。44.99美元。",
                actionHint: "感谢店员的处理",
                frequency: "occasional",
              },
            ],
            casualVersion: "Totally! And since it was our bad, I'll give you 10% off as a courtesy. So, that's $44.99.",
            formalityVariants: {
              casual: "Totally! And since it was our bad, I'll give you 10% off as a courtesy. So, that's $44.99.",
              standard:
                "Of course! And since this was our mistake, let me give you 10% off as a courtesy. Your total comes to $44.99.",
              formal:
                "Certainly! Furthermore, as this was an error on our part, I would like to offer you a 10% discount as a gesture of goodwill. Your revised total will be $44.99.",
            },
          },
          {
            speaker: "you",
            textEn: "That's really kind of you. Thank you for making this easy!",
            textZh: "你真好。谢谢你让这个过程这么顺利！",
            commonMistake: {
              wrong: "You are very good.",
              correct: "That's very kind of you.",
              explanation: "称赞对方的行为用“That's very kind of you”更自然，直接说“You are very good”不地道。",
            },
            casualVersion: "That's super nice of you. Thanks for making this so easy!",
            formalityVariants: {
              casual: "That's super nice of you. Thanks for making this so easy!",
              standard: "That's really kind of you. Thank you for making this easy!",
              formal:
                "That is exceedingly gracious of you. I truly appreciate your assistance in making this a smooth and straightforward process.",
            },
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
              {
                textEn: "Hi there! Is this for a special occasion?",
                textZh: "你好！是为了什么特别的场合吗？",
                actionHint: "说明是给谁买的",
                frequency: "common",
              },
            ],
            casualVersion: "Hey! Buying for yourself or a gift?",
            formalityVariants: {
              casual: "Hey! Buying for yourself or a gift?",
              standard: "Welcome! Are you shopping for yourself or looking for a gift?",
              formal:
                "Welcome to our store. May I assist you in finding something for yourself or perhaps a gift for someone special?",
            },
          },
          {
            speaker: "you",
            textEn: "I'm looking for a necklace as a gift for my wife. Something elegant but not too flashy.",
            textZh: "我想给妻子买一条项链作为礼物。优雅但不太张扬的那种。",
            casualVersion: "I need a necklace for my wife — classy but simple.",
            commonMistake: {
              wrong: "I want to buy a necklace for my wife.",
              correct: "I'm looking for a necklace as a gift for my wife.",
              explanation: "I want to buy 显得更直接，不如 I'm looking for 自然客气。",
            },
            formalityVariants: {
              casual: "Yeah, a necklace for the wife. Something nice but not too much.",
              standard: "I'm looking for a necklace as a gift for my wife. Something elegant but not too flashy.",
              formal:
                "I am seeking to purchase a necklace as a gift for my wife. I envision something elegant, yet tastefully understated.",
            },
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
              {
                textEn: "How lovely! What's the occasion? And roughly how much were you looking to spend?",
                textZh: "太好了！什么场合呢？大概想花多少？",
                actionHint: "说明场合和预算",
                frequency: "common",
              },
              {
                textEn:
                  "Nice! Is it for a special event? That'll help me find the right piece. Do you have a price range?",
                textZh: "不错！是什么特别的日子吗？这样我好推荐。有预算范围吗？",
                actionHint: "描述场合和价位",
                frequency: "occasional",
              },
            ],
            casualVersion: "Awesome! What's the occasion? Got a budget?",
            formalityVariants: {
              casual: "Awesome! What's the occasion? Got a budget?",
              standard: "Beautiful! What's the occasion? And do you have a budget in mind?",
              formal:
                "Excellent! May I inquire as to the specific occasion for this gift? And do you have a particular budget range you wish to adhere to?",
            },
          },
          {
            speaker: "you",
            textEn: "It's our anniversary. I'm thinking somewhere around $200 to $400.",
            textZh: "我们的结婚纪念日。预算大概200到400美元。",
            casualVersion: "Our anniversary. Thinking like, 200 to 400 bucks.",
            commonMistake: {
              wrong: "It's our anniversary. My budget is 200 to 400 dollars.",
              correct: "It's our anniversary. I'm thinking somewhere around $200 to $400.",
              explanation: "My budget is 听起来生硬，I'm thinking somewhere around... 更自然。",
            },
            formalityVariants: {
              casual: "Our anniversary. Thinking like, 200 to 400 bucks.",
              standard: "It's our anniversary. I'm thinking somewhere around $200 to $400.",
              formal: "It is our anniversary. I am considering a price point approximately between $200 and $400.",
            },
          },
          {
            speaker: "them",
            role: "珠宝顾问",
            textEn:
              "Lovely! I have some gorgeous pieces in that range. Do you know if she prefers gold or silver? And does she usually wear yellow gold or white gold?",
            textZh: "很好！那个价位有很多漂亮的款式。您知道她喜欢金色还是银色吗？通常戴黄金还是白金？",
            keyPhrases: [
              { en: "yellow gold", zh: "黄金" },
              { en: "white gold", zh: "白金" },
              { en: "gorgeous pieces", zh: "漂亮的款式" },
            ],
            vocabNotes: {
              "white gold": {
                meaningInContext: "在这句话里表示：白色的金合金，看起来像银色但实际是金",
                similarUsage: "类似用法：rose gold（玫瑰金）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "We have beautiful pieces in that range! Does she prefer gold or silver tones?",
                textZh: "那个价位有很多漂亮的！她喜欢金色还是银色？",
                actionHint: "说出她的偏好",
                frequency: "common",
              },
              {
                textEn: "Anniversary — wonderful! Is she more of a gold person or silver? That'll narrow it down.",
                textZh: "结婚纪念日——太好了！她更偏爱金色还是银色？这样好缩小范围。",
                actionHint: "描述她的风格",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Great! Got some gorgeous stuff in that range. Does she prefer gold or silver? Yellow or white gold usually?",
            formalityVariants: {
              casual:
                "Great! Got some gorgeous stuff in that range. Does she prefer gold or silver? Yellow or white gold usually?",
              standard:
                "Lovely! I have some gorgeous pieces in that range. Do you know if she prefers gold or silver? And does she usually wear yellow gold or white gold?",
              formal:
                "Excellent! I have a selection of exquisite pieces within that particular price range. Would you happen to know if her preference leans towards gold or silver tones? And specifically, does she typically wear yellow gold or white gold?",
            },
          },
          {
            speaker: "you",
            textEn: "She usually wears silver, so maybe white gold? Can I see a few options?",
            textZh: "她一般戴银色的，所以也许白金？可以看几款吗？",
            casualVersion: "She usually wears silver, so... white gold, maybe? Can I see some?",
            commonMistake: {
              wrong: "She always wears silver, can I see white gold?",
              correct: "She usually wears silver, so maybe white gold? Can I see a few options?",
              explanation:
                "always 过于绝对，usually 更自然。直接问 Can I see white gold? 不如 Can I see a few options? 礼貌。",
            },
            formalityVariants: {
              casual: "She usually wears silver, so... white gold, maybe? Can I see some?",
              standard: "She usually wears silver, so maybe white gold? Can I see a few options?",
              formal:
                "She typically favors silver, so white gold would likely be appropriate. May I request to view a selection of suitable options?",
            },
          },
          {
            speaker: "them",
            role: "珠宝顾问",
            textEn:
              "Of course! This pendant necklace is 14-karat white gold with a small diamond — it's $350. And this one is sterling silver with a sapphire, at $220. Both are very popular.",
            textZh: "当然！这条吊坠项链是14K白金配小钻石——350美元。这条是纯银配蓝宝石的，220美元。两款都很受欢迎。",
            keyPhrases: [
              { en: "14-karat", zh: "14K（含金量58.5%）" },
              { en: "pendant", zh: "吊坠" },
              { en: "sterling silver", zh: "纯银/925银" },
              { en: "sapphire", zh: "蓝宝石" },
            ],
            vocabNotes: {
              karat: {
                meaningInContext: "在这句话里表示：黄金纯度单位，24K是纯金，14K含金量58.5%",
                similarUsage: "类似用法：18-karat gold（18K金）",
              },
              "sterling silver": {
                meaningInContext: "在这句话里表示：含银量92.5%的标准纯银",
                similarUsage: "类似用法：925 silver（925银）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "This white gold pendant with a diamond is $350, and this silver one with a sapphire is $220. Both are gorgeous.",
                textZh: "这条白金钻石吊坠350美元，这条银配蓝宝石的220美元。都很漂亮。",
                actionHint: "选择喜欢的款式",
                frequency: "common",
              },
              {
                textEn:
                  "Here are two popular picks — a 14K white gold pendant at $350, or sterling silver with sapphire at $220.",
                textZh: "这里有两款热门的——14K白金吊坠350美元，纯银配蓝宝石220美元。",
                actionHint: "比较两款",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Sure! This one's a 14k white gold pendant with a small diamond — 350 bucks. And this other one, sterling silver with a sapphire, 220. Both super popular.",
            formalityVariants: {
              casual:
                "Sure! This one's a 14k white gold pendant with a small diamond — 350 bucks. And this other one, sterling silver with a sapphire, 220. Both super popular.",
              standard:
                "Of course! This pendant necklace is 14-karat white gold with a small diamond — it's $350. And this one is sterling silver with a sapphire, at $220. Both are very popular.",
              formal:
                "Certainly! This particular pendant necklace features 14-karat white gold adorned with a modest diamond, priced at $350. Alternatively, this sterling silver piece, featuring a sapphire, is available for $220. Both selections are exceedingly sought after.",
            },
          },
          {
            speaker: "you",
            textEn: "The white gold pendant is beautiful. Can I see it up close? And what's the chain length?",
            textZh: "白金吊坠很漂亮。可以近看一下吗？链子多长？",
            commonMistake: {
              wrong: "What is the chain length?",
              correct: "What's the chain length?",
              explanation: "问长度时直接用 `what's the` 更自然，省略 `is` 会听起来比较生硬。",
            },
            casualVersion: "That white gold pendant's gorgeous. Can I see it closer? What's the chain length?",
            formalityVariants: {
              casual: "That white gold pendant's gorgeous. Can I see it closer? What's the chain length?",
              standard: "The white gold pendant is beautiful. Can I see it up close? And what's the chain length?",
              formal:
                "The white gold pendant is indeed quite exquisite. May I examine it more closely? And could you please specify the length of the chain?",
            },
          },
          {
            speaker: "them",
            role: "珠宝顾问",
            textEn:
              "Here you go. The chain is 18 inches, which is the most common length — it sits right at the collarbone. We can also adjust it to 16 or 20 inches if needed.",
            textZh: "给您。链子18英寸，是最常见的长度——刚好在锁骨位置。也可以调到16或20英寸。",
            commonMistake: {
              wrong: "Here you go. The chain is 18 inches, it's most common length.",
              correct: "Here you go. The chain is 18 inches, which is the most common length.",
              explanation: "英语中解释说明前情提要常用 which is 引导非限定性定语从句。",
            },
            keyPhrases: [
              { en: "chain length", zh: "链子长度" },
              { en: "collarbone", zh: "锁骨" },
              { en: "adjust", zh: "调整" },
            ],
            alternativeExpressions: [
              {
                textEn: "It's 18 inches — sits right at the collarbone. We can shorten or lengthen it if needed.",
                textZh: "18英寸——刚好在锁骨位置。需要的话可以改长改短。",
                actionHint: "确认长度是否合适",
                frequency: "common",
              },
              {
                textEn:
                  "The standard length is 18 inches, which works for most people. We also do 16 or 20 if she prefers.",
                textZh: "标准长度18英寸，大多数人都合适。也可以改成16或20英寸。",
                actionHint: "选择合适的长度",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Here ya go. It's 18 inches, that's super common, hits right at the collarbone. Can also do 16 or 20 if you need.",
            formalityVariants: {
              casual:
                "Here ya go. It's 18 inches, that's super common, hits right at the collarbone. Can also do 16 or 20 if you need.",
              standard:
                "Here you go. The chain is 18 inches, which is the most common length — it sits right at the collarbone. We can also adjust it to 16 or 20 inches if needed.",
              formal:
                "Certainly, here it is. The chain measures 18 inches, which is our most frequently chosen length, typically resting precisely at the collarbone. We are also able to adjust it to either 16 or 20 inches, should that be preferred.",
            },
          },
          {
            speaker: "you",
            textEn: "18 inches should be perfect. I'll take it. Can you gift wrap it for me?",
            textZh: "18英寸应该刚好。我要了。可以帮我包装成礼物吗？",
            casualVersion: "18 inches is perfect. I'll take it. Can you wrap it up?",
            commonMistake: {
              wrong: "18 inches is good. I want it. Can you gift wrap it?",
              correct: "18 inches should be perfect. I'll take it. Can you gift wrap it for me?",
              explanation: "is good 不如 should be perfect 自然。I want it 生硬，I'll take it 更礼貌。",
            },
            formalityVariants: {
              casual: "18 inches is perfect. I'll take it. Can you wrap it up?",
              standard: "18 inches should be perfect. I'll take it. Can you gift wrap it for me?",
              formal:
                "18 inches would indeed be ideal. I shall purchase this item. Would it be possible to have it gift-wrapped?",
            },
          },
          {
            speaker: "them",
            role: "珠宝顾问",
            textEn:
              "Absolutely! We have complimentary gift wrapping. I'll put it in a beautiful gift box with a ribbon. Would you like to include a gift card with a message?",
            textZh: "当然！我们有免费的礼品包装。我会放在一个漂亮的礼盒里系上丝带。要附一张写有留言的贺卡吗？",
            keyPhrases: [
              { en: "gift wrapping", zh: "礼品包装" },
              { en: "gift box", zh: "礼盒" },
              { en: "ribbon", zh: "丝带" },
              { en: "gift card with a message", zh: "带留言的贺卡" },
            ],
            alternativeExpressions: [
              {
                textEn: "Of course! I'll put it in a nice box with a ribbon. Want to add a little card with a message?",
                textZh: "当然！我放进漂亮礼盒配丝带。要加一张写留言的卡片吗？",
                actionHint: "决定是否要贺卡",
                frequency: "common",
              },
              {
                textEn: "We do free gift wrapping! I can box it up with a bow. Would you like a gift card inside?",
                textZh: "免费包装！我用礼盒配蝴蝶结。要在里面放张贺卡吗？",
                actionHint: "选择是否要贺卡",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Totally! Free gift wrapping. I'll put it in a nice box with a ribbon. Wanna include a card with a message?",
            formalityVariants: {
              casual:
                "Totally! Free gift wrapping. I'll put it in a nice box with a ribbon. Wanna include a card with a message?",
              standard:
                "Absolutely! We have complimentary gift wrapping. I'll put it in a beautiful gift box with a ribbon. Would you like to include a gift card with a message?",
              formal:
                "Certainly! We are pleased to offer complimentary gift wrapping. I shall place it in an elegant gift box adorned with a ribbon. Furthermore, would you care to include a gift card with a personalized message?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please. Can you write 'Happy Anniversary' on it? Thank you so much!",
            textZh: "好的。可以写上'Happy Anniversary'吗？太感谢了！",
            commonMistake: {
              wrong: "Can you write 'Happy Anniversary, my love' on it?",
              correct: "Can you write 'Happy Anniversary, my love'?",
              explanation: "直接说 `Can you write \"...\"` 即可，不需要加 `on it` 等词。",
            },
            casualVersion: "Yeah, please. Can you just write 'Happy Anniversary'? Thanks a bunch!",
            formalityVariants: {
              casual: "Yeah, please. Can you just write 'Happy Anniversary'? Thanks a bunch!",
              standard: "Yes, please. Can you write 'Happy Anniversary' on it? Thank you so much!",
              formal:
                "Yes, that would be appreciated. Kindly inscribe 'Happy Anniversary' on the card. I am most grateful for your assistance.",
            },
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
            casualVersion: "Hey, wanna get a ring, but dunno her size. What do I do?",
            commonMistake: {
              wrong: "I want to buy a ring",
              correct: "I'd like to buy a ring",
              explanation: "“I want” 听起来太直接，不够礼貌。用 “I'd like to” 更委婉。",
            },
            formalityVariants: {
              casual: "Hey, wanna get a ring, but don't know her size. What do I do?",
              standard: "Hi, I'd like to buy a ring, but I don't know my girlfriend's ring size. What should I do?",
              formal:
                "Good morning/afternoon, I am interested in purchasing a ring, however, I am unaware of my girlfriend's ring size. Could you please advise on the appropriate procedure?",
            },
          },
          {
            speaker: "them",
            role: "珠宝顾问",
            textEn:
              "That's very common! There are a few ways. Does she have any rings she wears regularly? You could bring one in and we'll measure it. Or, if you know her general size, we can estimate.",
            textZh:
              "这很常见！有几个办法。她有经常戴的戒指吗？你可以带一个过来我们帮你量。或者如果你大概知道她的尺寸，我们可以估算。",
            keyPhrases: [
              { en: "ring size", zh: "戒指尺寸" },
              { en: "measure it", zh: "测量" },
              { en: "estimate", zh: "估算" },
            ],
            alternativeExpressions: [
              {
                textEn: "No worries! We can always resize it later if it doesn't fit.",
                textZh: "别担心！不合适的话之后可以改尺寸。",
                actionHint: "买了之后可以改大小",
                frequency: "common",
              },
            ],
            casualVersion:
              "Totally normal! Few ways to do it. She got any rings she wears? Could just bring one in, we'll measure it. Or, if you kinda know her size, we can guess.",
            formalityVariants: {
              casual:
                "Yeah, that's normal! Got a few options. Does she wear any rings regularly? Bring one in, we'll size it. Or if you know her general size, we can guesstimate.",
              standard:
                "That's very common! There are a few ways. Does she have any rings she wears regularly? You could bring one in and we'll measure it. Or, if you know her general size, we can estimate.",
              formal:
                "That is a very common scenario. We have several methods to assist you. Firstly, does she possess any rings that she wears habitually? You may bring one to us for precise measurement. Alternatively, if you have an approximate idea of her size, we can offer an informed estimate.",
            },
          },
          {
            speaker: "you",
            textEn: "I don't have one of her rings. Can I buy it and resize later if it doesn't fit?",
            textZh: "我没有她的戒指。可以先买然后不合适的话改尺寸吗？",
            casualVersion:
              "Nah, don't have any of her rings. Can I just buy it and get it resized later if it's too big/small?",
            commonMistake: {
              wrong: "if it is not fit?",
              correct: "if it doesn't fit?",
              explanation: "否定句中动词要用助动词'do/does'。'not fit'语法不正确。",
            },
            formalityVariants: {
              casual: "Don't have any of her rings. Can I just buy it and get it resized later if it doesn't fit?",
              standard: "I don't have one of her rings. Can I buy it and resize later if it doesn't fit?",
              formal:
                "Unfortunately, I do not possess one of her rings. Would it be possible to purchase the ring now and have it resized at a later date should it prove to be an incorrect fit?",
            },
          },
          {
            speaker: "them",
            role: "珠宝顾问",
            textEn:
              "Absolutely! We offer one free resizing within 60 days of purchase. Most rings can be adjusted up or down by two sizes. I'd suggest starting with a size 6 or 7 — that's the most common for women.",
            textZh:
              "完全可以！购买后60天内提供一次免费改尺寸。大部分戒指可以上下调两个号。建议从6号或7号开始——这是女性最常见的尺寸。",
            keyPhrases: [
              { en: "resizing", zh: "改尺寸" },
              { en: "adjusted up or down", zh: "上下调" },
              { en: "most common", zh: "最常见的" },
            ],
            vocabNotes: {
              resizing: {
                meaningInContext: "在这句话里表示：把戒指的圈径改大或改小以适合手指",
                similarUsage: "类似用法：How much does resizing cost?（改尺寸多少钱？）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "We offer one free resize within 60 days. A size 6 or 7 is a safe bet for most women.",
                textZh: "60天内免费改一次尺寸。女性一般6号或7号比较保险。",
                actionHint: "选择一个常见尺寸",
                frequency: "common",
              },
              {
                textEn: "You can always bring her in later to get it sized. First resize is on us within 60 days.",
                textZh: "之后可以带她来改尺寸。60天内第一次免费改。",
                actionHint: "可以之后再调整",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Totally! We do one free resize within 60 days. Most rings can go up or down two sizes. I'd say start with a 6 or 7 — that's usually right for women.",
            formalityVariants: {
              casual:
                "Yep, totally! You get one free resize within 60 days. Most rings can go up/down two sizes. I'd suggest a 6 or 7 to start; that's pretty standard for women.",
              standard:
                "Absolutely! We offer one free resizing within 60 days of purchase. Most rings can be adjusted up or down by two sizes. I'd suggest starting with a size 6 or 7 — that's the most common for women.",
              formal:
                "Certainly! We do indeed offer one complimentary resizing service within 60 days of the original purchase. The majority of our rings can be expertly adjusted by up to two sizes, either larger or smaller. I would recommend commencing with either a size 6 or 7, as these are empirically the most prevalent sizes for women.",
            },
          },
          {
            speaker: "you",
            textEn: "Good idea. I'll go with a size 6. Also, can I get something engraved on the inside of the band?",
            textZh: "好主意。那选6号。另外，可以在戒环内侧刻字吗？",
            casualVersion: "Sounds good. I'll take a 6. Can I get something engraved inside the band too?",
            commonMistake: {
              wrong: "I will choose size 6",
              correct: "I'll go with a size 6",
              explanation: "选择某物常用“go with”，听起来比“choose”更自然。",
            },
            formalityVariants: {
              casual: "Good call. I'll do a 6. Can I get some engraving on the inside too?",
              standard:
                "Good idea. I'll go with a size 6. Also, can I get something engraved on the inside of the band?",
              formal:
                "That is an excellent suggestion. I shall proceed with a size 6. Furthermore, would it be possible to have an inscription engraved on the interior surface of the band?",
            },
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
              {
                textEn: "Absolutely! Engraving is $25 for up to 15 characters. What would you like to say?",
                textZh: "完全可以！刻字15个字符以内25美元。你想刻什么？",
                actionHint: "告诉店员刻字内容",
                frequency: "common",
              },
              {
                textEn: "Sure, we do custom engraving. Up to 15 letters for $25. What message do you have in mind?",
                textZh: "可以，我们做定制刻字。15个字母以内25美元。你想刻什么内容？",
                actionHint: "想好刻字内容",
                frequency: "occasional",
              },
            ],
            casualVersion: "Yep, we engrave! $25 for up to 15 characters. What d'you want it to say?",
            formalityVariants: {
              casual: "Yup, we engrave! $25 for 15 characters max. What d'you wanna put on it?",
              standard: "Yes, we do engraving! It's $25 for up to 15 characters. What would you like it to say?",
              formal:
                "Yes, we do indeed offer engraving services. The cost is $25 for inscriptions comprising up to 15 characters. What specific message would you like to have engraved?",
            },
          },
          {
            speaker: "you",
            textEn: "Can you engrave 'Forever Yours' with the date '2026.03.12'?",
            textZh: "可以刻 'Forever Yours' 加上日期 '2026.03.12' 吗？",
            casualVersion: "Can you engrave 'Forever Yours' with '2026.03.12'?",
            commonMistake: {
              wrong: "Can engrave 'Forever Yours'?",
              correct: "Can you engrave 'Forever Yours'?",
              explanation: "英文疑问句通常需要主语（你），不能直接省略。",
            },
            formalityVariants: {
              casual: "Can you engrave 'Forever Yours' and then '2026.03.12'?",
              standard: "Can you engrave 'Forever Yours' with the date '2026.03.12'?",
              formal: "Would it be possible to engrave 'Forever Yours' followed by the date '2026.03.12'?",
            },
          },
          {
            speaker: "them",
            role: "珠宝顾问",
            textEn:
              "That's 22 characters including the spaces and dots. It'll be $35 for the longer engraving. The ring with engraving will be ready in about 3 business days. We'll call you when it's done.",
            textZh:
              "加上空格和点号一共22个字符。长一点的刻字是35美元。带刻字的戒指大概3个工作日做好。做好了会给您打电话。",
            commonMistake: {
              wrong: "That's 22 characters include spaces and the ampersand. Long engraving is $35.",
              correct: "That's 22 characters including spaces and the ampersand. Longer engravings are $35.",
              explanation: "“包括”用 including，形容词 longer 比 long 更自然，表示“更长的”。",
            },
            keyPhrases: [{ en: "business days", zh: "工作日" }],
            alternativeExpressions: [
              {
                textEn:
                  "With spaces and dots it's 22 characters, so that's $35. It'll be ready in about 3 days — we'll call you.",
                textZh: "加空格和点号22个字符，35美元。大约3天做好——我们会打电话通知你。",
                actionHint: "确认费用和取货时间",
                frequency: "common",
              },
              {
                textEn:
                  "Longer text is $35. The engraving takes about 3 business days. I'll give you a call when it's done.",
                textZh: "长一点的文字35美元。刻字大约要3个工作日。做好了打电话给你。",
                actionHint: "留下联系方式",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "That's 22 characters, with spaces and dots. So, it'll be $35 for the longer one. Ring'll be ready in 'bout 3 business days. We'll call ya when it's done.",
            formalityVariants: {
              casual:
                "That's 22 characters, incl. spaces and dots. So it's $35 for the longer one. Ring's ready in like 3 biz days. We'll call ya.",
              standard:
                "That's 22 characters including the spaces and dots. It'll be $35 for the longer engraving. The ring with engraving will be ready in about 3 business days. We'll call you when it's done.",
              formal:
                "That particular inscription totals 22 characters, which includes all spaces and punctuation. Consequently, the charge for this extended engraving will be $35. The completed ring, with engraving, will be available for pickup in approximately three business days. We will notify you via telephone upon its completion.",
            },
          },
          {
            speaker: "you",
            textEn: "That works perfectly. Here's my card. Thank you for all your help — she's going to love it!",
            textZh: "正好赶得上。给您我的卡。谢谢你的帮助——她一定会喜欢的！",
            casualVersion: "Perfect. Here's my card. Thanks for the help — she's gonna love it!",
            commonMistake: {
              wrong: "She will love it!",
              correct: "She's going to love it!",
              explanation: "“be going to” 表示有根据的预测或计划，比“will”更肯定且常用。",
            },
            formalityVariants: {
              casual: "Perfect. Here's my card. Thanks for everything — she's gonna love it!",
              standard: "That works perfectly. Here's my card. Thank you for all your help — she's going to love it!",
              formal:
                "That arrangement is entirely satisfactory. Here is my payment card. I sincerely appreciate all of your assistance; I am confident she will adore it.",
            },
          },
          {
            speaker: "them",
            role: "珠宝顾问",
            textEn: "I'm sure she will! Here's your receipt and the care instructions for the ring. Congratulations!",
            textZh: "她一定会的！这是您的收据和戒指保养说明。恭喜！",
            keyPhrases: [{ en: "care instructions", zh: "保养说明" }],
            alternativeExpressions: [
              {
                textEn:
                  "Here's your receipt and the care guide. She's going to love it. Congratulations on your anniversary!",
                textZh: "给您收据和保养指南。她一定会喜欢的。恭喜你们的纪念日！",
                actionHint: "保管好收据和保养指南",
                frequency: "common",
              },
              {
                textEn: "All done! Receipt, care card, and the ring will be ready in 3 days. Congrats!",
                textZh: "搞定了！收据、保养卡都给你了，戒指3天后来取。恭喜！",
                actionHint: "记住取货时间",
                frequency: "occasional",
              },
            ],
            casualVersion: "I'm sure she will! Here's your receipt and care instructions. Congrats!",
            formalityVariants: {
              casual: "She totally will! Here's your receipt, care instructions. Congrats!",
              standard:
                "I'm sure she will! Here's your receipt and the care instructions for the ring. Congratulations!",
              formal:
                "I am quite confident that she will indeed. Here is your receipt, along with the comprehensive care instructions for the ring. Congratulations on your purchase!",
            },
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
              {
                textEn: "Good morning! All organic, picked this morning!",
                textZh: "早上好！全是有机的，今早采的！",
                actionHint: "可以先看看再问",
                frequency: "common",
              },
            ],
            casualVersion: "Mornin'! Everything's fresh from our farm. Go on, take a look!",
            formalityVariants: {
              casual: "Mornin'! Everything's fresh from our farm. Take a look!",
              standard: "Morning! Everything here is fresh from our farm. Take a look around!",
              formal:
                "Good morning! All of our produce is freshly harvested from our farm. Please feel free to browse at your leisure.",
            },
          },
          {
            speaker: "you",
            textEn: "Good morning! Everything looks amazing. Are these strawberries local?",
            textZh: "早上好！看起来都好棒。这些草莓是本地的吗？",
            commonMistake: {
              wrong: "These strawberries are local?",
              correct: "Are these strawberries local?",
              explanation: "中文语序直接疑问，英文需要倒装。",
            },
            casualVersion: "Morning! Looks awesome. Are these strawberries local?",
            formalityVariants: {
              casual: "Morning! Looks great. Are these strawberries local?",
              standard: "Good morning! Everything looks amazing. Are these strawberries local?",
              formal:
                "Good morning! Everything appears to be of excellent quality. May I inquire if these strawberries are locally sourced?",
            },
          },
          {
            speaker: "them",
            role: "摊主",
            textEn:
              "Yes, they are! Picked fresh this morning from our farm just 20 miles north. They're $6 a basket. Would you like to try one?",
            textZh: "是的！今早从我们北边20英里的农场现摘的。6美元一篮。要尝一个吗？",
            commonMistake: {
              wrong: "These are picked fresh this morning.",
              correct: "Picked fresh this morning.",
              explanation: "直接说\"Picked fresh\"更自然，省略主语和助动词是常见口语用法",
            },
            keyPhrases: [
              { en: "picked fresh", zh: "新鲜采摘的" },
              { en: "try one", zh: "尝一个" },
            ],
            culturalNote: "美国的农贸市场通常可以免费试吃，这是很正常的。",
            alternativeExpressions: [
              {
                textEn: "Yep, straight from our farm this morning! $6 a basket. Here, taste one!",
                textZh: "是的，今早我们农场直接拉来的！6美元一篮。来，尝一个！",
                actionHint: "可以先尝再决定",
                frequency: "common",
              },
              {
                textEn: "All local, picked today! Go ahead, try one — they're super sweet this season.",
                textZh: "全是本地的，今天摘的！尝一个吧——这季节特别甜。",
                actionHint: "尝尝看再决定",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep, they are! Picked this mornin' from our farm, just 20 miles north. Six bucks a basket. Wanna try one?",
            formalityVariants: {
              casual: "Yeah! Picked fresh this morning, just 20 miles north. $6 a basket. Try one?",
              standard:
                "Yes, they are! Picked fresh this morning from our farm just 20 miles north. They're $6 a basket. Would you like to try one?",
              formal:
                "Yes, indeed! They were harvested fresh this morning from our farm, located approximately 20 miles to the north. They are priced at $6 per basket. Would you care to sample one?",
            },
          },
          {
            speaker: "you",
            textEn: "Sure! Wow, these are really sweet. I'll take two baskets. Do you also have any local honey?",
            textZh: "好的！哇，好甜。我买两篮。你们还有本地蜂蜜吗？",
            casualVersion: "Sure! Wow, these are super sweet. I'll grab two baskets. Got any local honey?",
            commonMistake: {
              wrong: "Do you have local honey?",
              correct: "Do you also have any local honey?",
              explanation: "中文常省略 '也' 字，但英文直接问 'Do you have' 听起来像第一次问，加 'also' 更自然衔接对话",
            },
            formalityVariants: {
              casual: "Totally! Man, these are sweet. I'll take two. Got any local honey?",
              standard: "Sure! Wow, these are really sweet. I'll take two baskets. Do you also have any local honey?",
              formal:
                "Certainly! These are remarkably sweet. I would like to purchase two baskets. Furthermore, do you also carry any local honey?",
            },
          },
          {
            speaker: "them",
            role: "摊主",
            textEn:
              "We do! We have wildflower honey and lavender honey. The wildflower is $12 for a small jar and $20 for a large. The lavender is $15 for a small.",
            textZh: "有的！有野花蜜和薰衣草蜜。野花蜜小瓶12美元，大瓶20美元。薰衣草蜜小瓶15美元。",
            commonMistake: {
              wrong: "Wildflower honey small $12, large $20.",
              correct: "The wildflower is $12 for a small jar and $20 for a large.",
              explanation: "价格表述时，英文通常需要介词 for a 和冠词 the/a",
            },
            keyPhrases: [
              { en: "wildflower honey", zh: "野花蜜" },
              { en: "lavender honey", zh: "薰衣草蜜" },
              { en: "jar", zh: "罐/瓶" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We've got wildflower and lavender honey. Small jar is $12, large is $20. The lavender is $15 for a small.",
                textZh: "有野花蜜和薰衣草蜜。小瓶12美元，大瓶20美元。薰衣草蜜小瓶15美元。",
                actionHint: "选择蜂蜜种类和大小",
                frequency: "common",
              },
              {
                textEn:
                  "Sure! Our wildflower honey is the most popular. Want to sample it? Big jar's $20, small's $12.",
                textZh: "有的！野花蜜最受欢迎。要尝尝吗？大瓶20美元，小瓶12美元。",
                actionHint: "可以先尝再买",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "We do! Got wildflower and lavender honey. Wildflower's twelve for a small, twenty for a big. Lavender's fifteen for a small.",
            formalityVariants: {
              casual:
                "Yep! We've got wildflower and lavender. Wildflower's $12 small, $20 large. Lavender's $15 small.",
              standard:
                "We do! We have wildflower honey and lavender honey. The wildflower is $12 for a small jar and $20 for a large. The lavender is $15 for a small.",
              formal:
                "Yes, we do! We offer both wildflower honey and lavender honey. The wildflower variety is priced at $12 for a small jar and $20 for a large jar. The lavender honey is available for $15 per small jar.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'll take a large wildflower honey. If I buy the two baskets of strawberries and the honey together, could you give me a small discount?",
            textZh: "我要一大瓶野花蜜。草莓两篮加蜂蜜一起买的话，能便宜一点吗？",
            casualVersion:
              "I'll take a big wildflower honey. If I buy the two strawberry baskets and the honey, can I get a little discount?",
            culturalNote: "在美国农贸市场买多件商品时，可以礼貌地询问是否有“组合优惠”或“捆绑折扣”，而不是直接砍价。",
            commonMistake: {
              wrong: "Can you make it cheaper?",
              correct: "could you give me a small discount?",
              explanation:
                "'Can you make it cheaper?' 听起来太直接，而 'could you give me a small discount?' 更礼貌、委婉。",
            },
            formalityVariants: {
              casual:
                "I'll grab the big wildflower honey. If I get the two strawberry baskets and the honey, can I get a deal?",
              standard:
                "I'll take a large wildflower honey. If I buy the two baskets of strawberries and the honey together, could you give me a small discount?",
              formal:
                "I would like to purchase a large wildflower honey. If I were to acquire the two baskets of strawberries along with the honey, would it be possible to receive a minor discount on the total?",
            },
          },
          {
            speaker: "them",
            role: "摊主",
            textEn:
              "Tell you what — I'll give you both baskets of strawberries and the honey for $30 even. That saves you two bucks. Sound fair?",
            textZh: "这样吧——两篮草莓加蜂蜜一共算30美元整。省2美元。怎么样？",
            commonMistake: {
              wrong: "Give you 30 dollars total.",
              correct: "I'll give you both for $30 total.",
              explanation: "在英文中说“我给你30美元”通常表示买方支付，而非卖方定价。",
            },
            keyPhrases: [
              { en: "tell you what", zh: "这样吧" },
              { en: "even", zh: "整数" },
              { en: "saves you two bucks", zh: "省2美元" },
              { en: "sound fair", zh: "合理吧/行不行" },
            ],
            vocabNotes: {
              "tell you what": {
                meaningInContext: "在这句话里表示：提出一个方案、让步",
                similarUsage: "类似用法：Tell you what, I'll throw in a free bag.（这样吧，我送你一个袋子）",
              },
              bucks: {
                meaningInContext: "在这句话里表示：美元（口语说法）",
                similarUsage: "类似用法：That's 50 bucks.（那是50美元）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "How about I do the whole lot for $30 flat? Saves you a couple bucks.",
                textZh: "全部30美元整怎么样？给你省两块。",
                actionHint: "决定是否接受",
                frequency: "common",
              },
              {
                textEn: "Since you're buying a few things, I'll knock a couple dollars off. $30 for everything.",
                textZh: "既然你买了好几样，给你便宜两块。全部30美元。",
                actionHint: "接受优惠",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Tell ya what — I'll do both strawberry baskets and the honey for thirty even. Saves ya two bucks. Good?",
            formalityVariants: {
              casual:
                "How 'bout this — I'll do both strawberry baskets and the honey for $30. Saves you two bucks. Sound good?",
              standard:
                "Tell you what — I'll give you both baskets of strawberries and the honey for $30 even. That saves you two bucks. Sound fair?",
              formal:
                "Here is what I can offer — I will provide both baskets of strawberries and the honey for a total of $30. This represents a saving of $2 for you. Does that sound satisfactory?",
            },
          },
          {
            speaker: "you",
            textEn: "Deal! Do you take credit cards, or is it cash only?",
            textZh: "成交！你们收信用卡吗，还是只收现金？",
            culturalNote: "美国市场通常刷卡很方便，不一定只收现金。",
            casualVersion: "Deal! Credit card or cash?",
            commonMistake: {
              wrong: "You take credit card?",
              correct: "Do you take credit cards?",
              explanation: "中文可能省略助动词，但英文问句需要 'Do you'，且 'cards' 更常用",
            },
            formalityVariants: {
              casual: "Deal! Card or cash?",
              standard: "Deal! Do you take credit cards, or is it cash only?",
              formal: "Agreed! May I inquire if you accept credit card payments, or is cash the sole accepted tender?",
            },
          },
          {
            speaker: "them",
            role: "摊主",
            textEn:
              "We take both! I've got a card reader on my phone. Or cash is fine too. We also accept Venmo if that's easier.",
            textZh: "都收！我手机上有刷卡器。现金也行。Venmo 也可以，看哪个方便。",
            commonMistake: {
              wrong: "Both are OK.",
              correct: "We take both!",
              explanation: "“Both are OK”听起来有点生硬，“We take both”更口语化、自然。",
            },
            culturalNote: "Venmo是美国常用的手机支付app，类似支付宝/微信支付。",
            keyPhrases: [{ en: "card reader", zh: "刷卡器" }],
            alternativeExpressions: [
              {
                textEn: "We take cards, cash, and Venmo. Whatever's easiest for you!",
                textZh: "信用卡、现金、Venmo都行。怎么方便怎么来！",
                actionHint: "选择付款方式",
                frequency: "common",
              },
              {
                textEn: "Cash or card works. I've got a Square reader on my phone.",
                textZh: "现金或刷卡都行。我手机上有Square读卡器。",
                actionHint: "用方便的方式付款",
                frequency: "occasional",
              },
            ],
            casualVersion: "Both! Got a card reader on my phone. Cash is fine too. Venmo works if that's easier.",
            formalityVariants: {
              casual: "Both! My phone has a card reader. Cash is cool too. Venmo's an option if it's easier.",
              standard:
                "We take both! I've got a card reader on my phone. Or cash is fine too. We also accept Venmo if that's easier.",
              formal:
                "We accept both forms of payment. I have a credit card reader available on my mobile device, and cash payments are also perfectly acceptable. Additionally, we are able to process payments via Venmo, should that be more convenient for you.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll pay by card. Thank you! This honey will make a great souvenir.",
            textZh: "刷卡吧。谢谢！这个蜂蜜当伴手礼很好。",
            commonMistake: {
              wrong: "This honey will be a good souvenir.",
              correct: "This honey will make a great souvenir.",
              explanation: "\"make a great souvenir\" 比 \"be a good souvenir\" 更地道。",
            },
            casualVersion: "I'll pay by card. Thanks! This honey'll be a cool souvenir.",
            formalityVariants: {
              casual: "Card it is. Thanks! This honey'll be a great souvenir.",
              standard: "I'll pay by card. Thank you! This honey will make a great souvenir.",
              formal:
                "I will proceed with payment by credit card. Thank you kindly! This honey will serve as an excellent memento.",
            },
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
            culturalNote: '在跳蚤市场，"How much are you asking?" 比 "How much is it?" 更常用，暗示价格可以商量。',
            casualVersion: "Hey, this vintage leather bag's cool. How much?",
            commonMistake: {
              wrong: "How much is it selling?",
              correct: "How much are you asking for it?",
              explanation: '"Selling" 是指卖家正在进行的行为，而不是询问物品价格，应直接问价格。',
            },
            formalityVariants: {
              casual: "Hey, this vintage leather bag's cool. How much for it?",
              standard: "Hi, this vintage leather bag is really cool. How much are you asking for it?",
              formal:
                "Excuse me, I find this vintage leather bag quite appealing. Could you please inform me of its price?",
            },
          },
          {
            speaker: "them",
            role: "摊主",
            textEn:
              "That's a beautiful piece! It's genuine Italian leather, probably from the '70s. I'm asking $85 for it.",
            textZh: "这件很漂亮！是真正的意大利皮革，大概70年代的。我要85美元。",
            commonMistake: {
              wrong: "I want $85.",
              correct: "I'm asking $85.",
              explanation: "“I want $85” 听起来过于强硬，“I'm asking $85” 是更礼貌的表达",
            },
            keyPhrases: [
              { en: "genuine", zh: "真正的/真皮" },
              { en: "I'm asking", zh: "我要（暗示可以商量）" },
            ],
            vocabNotes: {
              genuine: {
                meaningInContext: "在这句话里表示：真正的、非仿造的",
                similarUsage: "类似用法：genuine leather（真皮）vs. faux leather（仿皮）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Great eye! That's real Italian leather, probably 1970s. I'm looking for $85.",
                textZh: "好眼光！这是正宗意大利皮的，大概70年代的。我要85美元。",
                actionHint: "可以试着还价",
                frequency: "common",
              },
              {
                textEn: "That one's a gem — genuine leather from the '70s. $85 is what I'm asking.",
                textZh: "那个是宝贝——70年代的真皮。我开价85美元。",
                actionHint: "可以商量价格",
                frequency: "occasional",
              },
            ],
            casualVersion: "Beautiful piece! Real Italian leather, probably '70s. Eighty-five bucks.",
            formalityVariants: {
              casual: "Beautiful piece! Real Italian leather, prob from the '70s. Eighty-five bucks.",
              standard:
                "That's a beautiful piece! It's genuine Italian leather, probably from the '70s. I'm asking $85 for it.",
              formal:
                "Indeed, it is a magnificent item. Crafted from genuine Italian leather, likely originating from the 1970s. My price for it is $85.",
            },
          },
          {
            speaker: "you",
            textEn: "It's nice, but $85 is a bit much for me. Would you take $60?",
            textZh: "确实不错，但85美元对我来说有点贵。60美元行吗？",
            culturalNote: "在跳蚤市场讨价还价是正常的，通常从标价的60-70%开始还价。",
            casualVersion: "It's nice, but $85's kinda steep. You'd take $60?",
            commonMistake: {
              wrong: "It's expensive for me.",
              correct: "It's a bit much for me.",
              explanation: '"a bit much for me" 比 "expensive for me" 更委婉，表达物品价格超出预算。',
            },
            formalityVariants: {
              casual: "Nice, but $85's kinda steep. You'd take $60?",
              standard: "It's nice, but $85 is a bit much for me. Would you take $60?",
              formal:
                "While it is indeed appealing, $85 is slightly beyond my current budget. Would you be amenable to $60?",
            },
          },
          {
            speaker: "them",
            role: "摊主",
            textEn:
              "I appreciate the offer, but $60 is too low for this quality. How about $75? I'll throw in a matching coin purse.",
            textZh: "谢谢你的出价，但这个品质60美元太低了。75美元怎么样？我再送一个配套的零钱包。",
            commonMistake: {
              wrong: "I appreciate your offer.",
              correct: "I appreciate the offer.",
              explanation: "\"the offer\" 更自然简洁，更常用。",
            },
            keyPhrases: [
              { en: "throw in", zh: "附赠/送" },
              { en: "matching", zh: "配套的" },
              { en: "coin purse", zh: "零钱包" },
            ],
            vocabNotes: {
              "throw in": {
                meaningInContext: "在这句话里表示：额外赠送、附送",
                similarUsage: "类似用法：I'll throw in free shipping.（我免费包邮）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "I can come down a little. How about $75?",
                textZh: "我可以降一点。75美元怎么样？",
                actionHint: "可以接受或再还一次价",
                frequency: "common",
              },
            ],
            casualVersion:
              "Appreciate the offer, but $60's too low for this. How 'bout $75? I'll even toss in a matching coin purse.",
            formalityVariants: {
              casual: "Thanks for the offer, but $60's too low. How 'bout $75? I'll toss in a matching coin purse.",
              standard:
                "I appreciate the offer, but $60 is too low for this quality. How about $75? I'll throw in a matching coin purse.",
              formal:
                "I appreciate your proposition, however, $60 does not adequately reflect the quality of this item. Would $75 be agreeable? I would also include a complementary matching coin purse.",
            },
          },
          {
            speaker: "you",
            textEn: "The coin purse is cute. How about $70 with the coin purse? That's my final offer.",
            textZh: "零钱包挺可爱的。70美元加零钱包怎么样？这是我的最终出价。",
            casualVersion: "Coin purse is cute. $70 with it? That's my final.",
            commonMistake: {
              wrong: "This is my last price.",
              correct: "That's my final offer.",
              explanation: '在英语中，表达最终价格用 "final offer" 更自然地道。',
            },
            formalityVariants: {
              casual: "Cute coin purse. Seventy with it? That's my final.",
              standard: "The coin purse is cute. How about $70 with the coin purse? That's my final offer.",
              formal:
                "The coin purse is indeed charming. Would you consider $70, inclusive of the coin purse? That would be my utmost and final offer.",
            },
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "You drive a hard bargain! Alright, $70 it is. You got yourself a deal.",
            textZh: "你还价真厉害！好吧，70美元成交。你赚到了。",
            commonMistake: {
              wrong: "You are very good at bargaining.",
              correct: "You drive a hard bargain!",
              explanation: "“You drive a hard bargain!”是形容讲价厉害的常用地道表达。",
            },
            keyPhrases: [
              { en: "drive a hard bargain", zh: "很会砍价" },
              { en: "you got yourself a deal", zh: "成交了" },
            ],
            vocabNotes: {
              "drive a hard bargain": {
                meaningInContext: "在这句话里表示：还价很厉害、很会谈价",
                similarUsage: "类似用法：She drives a hard bargain in business.（她做生意很精明）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Ha, you're a tough negotiator! Fine, $70 with the coin purse. Deal.",
                textZh: "哈，你真会砍价！行，70美元加零钱包。成交。",
                actionHint: "砍价成功",
                frequency: "common",
              },
              {
                textEn: "Alright, alright — $70 it is. You win! Good deal for you.",
                textZh: "好吧好吧——70美元。你赢了！你赚到了。",
                actionHint: "交易达成",
                frequency: "occasional",
              },
            ],
            casualVersion: "You drive a hard bargain! Okay, $70. Deal.",
            culturalNote: "“You drive a hard bargain” 是说你很会砍价，不是说你开价太高。",
            formalityVariants: {
              casual: "Wow, you drive a hard bargain! Okay, seventy. Deal.",
              standard: "You drive a hard bargain! Alright, $70 it is. You got yourself a deal.",
              formal:
                "You are indeed a skilled negotiator! Very well, $70 is acceptable. We have a mutually agreed transaction.",
            },
          },
          {
            speaker: "you",
            textEn: "Awesome! Can you tell me more about where this bag is from? Is there any history behind it?",
            textZh: "太好了！能告诉我更多这个包的来历吗？有什么故事吗？",
            casualVersion: "Awesome! Where's this bag from? Any history?",
            commonMistake: {
              wrong: "Can you tell me its story?",
              correct: "Is there any history behind it?",
              explanation: '询问物品背景或来历时，用 "history" 或 "background" 比 "story" 更自然。',
            },
            formalityVariants: {
              casual: "Cool! Where's it from? Any history?",
              standard: "Awesome! Can you tell me more about where this bag is from? Is there any history behind it?",
              formal:
                "Splendid! I am quite intrigued. Could you provide further details regarding the provenance of this bag? Is there any particular historical narrative associated with it?",
            },
          },
          {
            speaker: "them",
            role: "摊主",
            textEn:
              "I got it from an estate sale last month. The previous owner was a collector who traveled a lot in Europe. All the hardware is original brass. It's a real treasure.",
            textZh:
              "上个月从一场遗产拍卖会上淘到的。前主人是个收藏家，经常在欧洲旅行。五金件都是原装黄铜的。真的是个宝贝。",
            commonMistake: {
              wrong: "This bag is real treasure.",
              correct: "It's a real treasure.",
              explanation: "\"treasure\" 作可数名词时前面需加冠词 \"a\"。",
            },
            keyPhrases: [
              { en: "estate sale", zh: "遗产拍卖会" },
              { en: "hardware", zh: "五金件/金属配件" },
              { en: "original brass", zh: "原装黄铜" },
            ],
            vocabNotes: {
              "estate sale": {
                meaningInContext: "在这句话里表示：某人去世或搬家后出售其家中物品的销售活动",
                similarUsage: "类似用法：garage sale（车库甩卖）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Picked it up at an estate sale — the owner was a big traveler. Everything on it is original brass. It's a keeper.",
                textZh: "在遗产拍卖会上淘到的——原主人经常旅行。上面的五金件都是原装黄铜。值得收藏。",
                actionHint: "了解物品来历",
                frequency: "common",
              },
              {
                textEn:
                  "Got this from a collector's estate last month. All the metal parts are original — you can tell by the patina. Real find.",
                textZh: "上个月从一个收藏家的遗物里收来的。金属件全是原装的——看包浆就知道了。真的是好东西。",
                actionHint: "欣赏做工细节",
                frequency: "common",
              },
            ],
            casualVersion:
              "Got it from an estate sale last month. Old owner was a collector, traveled Europe a bunch. All original brass hardware. It's a real treasure.",
            formalityVariants: {
              casual:
                "Estate sale last month. Old owner collected, traveled Europe. Original brass hardware. Real treasure.",
              standard:
                "I got it from an estate sale last month. The previous owner was a collector who traveled a lot in Europe. All the hardware is original brass. It's a real treasure.",
              formal:
                "I acquired this item at an estate sale last month. Its previous proprietor was a discerning collector with extensive travels throughout Europe. Notably, all the hardware components are original brass. It truly is a remarkable treasure.",
            },
          },
          {
            speaker: "you",
            textEn: "That's a great story. I love it even more now. Thanks, and happy selling!",
            textZh: "故事真棒。我更喜欢这个包了。谢谢，祝生意兴隆！",
            casualVersion: "That's a cool story. Love it even more. Thanks, and happy selling!",
            commonMistake: {
              wrong: "Wish you good business!",
              correct: "Happy selling!",
              explanation: '"Happy selling!" 是在零售或市场环境中祝对方生意兴隆的自然表达。',
            },
            formalityVariants: {
              casual: "Cool story. Love it more. Thanks, happy selling!",
              standard: "That's a great story. I love it even more now. Thanks, and happy selling!",
              formal:
                "That is indeed a fascinating provenance. My appreciation for the item has increased significantly. Thank you, and I extend my wishes for continued success in your sales endeavors.",
            },
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
              {
                textEn: "Hey there! Looking for anything specific?",
                textZh: "嘿！在找什么特定的东西吗？",
                actionHint: "说出需求",
                frequency: "common",
              },
            ],
            casualVersion: "Hey! Welcome in. Need help finding anything?",
            formalityVariants: {
              casual: "Hey! Welcome in. Need help finding anything?",
              standard: "Hi! Welcome in. Can I help you find something today?",
              formal: "Good morning/afternoon/evening, welcome. May I assist you with anything today?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I'm looking for a pair of running shoes. Something comfortable for everyday use.",
            textZh: "是的，我想找一双跑步鞋。日常穿着舒服的。",
            commonMistake: {
              wrong: "I want to buy running shoes.",
              correct: "I'm looking for running shoes.",
              explanation: "I want 在美国听起来很生硬，用 I'm looking for 更自然客气。",
            },
            casualVersion: "Yeah, looking for some running shoes. Something comfy for everyday.",
            formalityVariants: {
              casual: "Yeah, looking for some running shoes. Something comfy for everyday.",
              standard: "Yes, I'm looking for a pair of running shoes. Something comfortable for everyday use.",
              formal: "Yes, I am seeking a pair of running shoes, ideally one offering comfort for daily wear.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Great! Do you know your size? American sizing is different from European and Asian sizing.",
            textZh: "好的！您知道您的尺码吗？美国尺码和欧洲、亚洲尺码不一样。",
            commonMistake: {
              wrong: "Do you know your foot size?",
              correct: "Do you know your size?",
              explanation: "在英文中直接说 'size' 指鞋码即可，无需强调 'foot size'。",
            },
            keyPhrases: [
              { en: "your size", zh: "您的尺码" },
              { en: "American sizing", zh: "美国尺码" },
            ],
            culturalNote: "美国鞋码换算：中国码 39 ≈ 美国男码 7 / 女码 8，中国码 42 ≈ 美国男码 9。建议量脚确认。",
            alternativeExpressions: [
              {
                textEn: "What size shoe do you normally wear? Keep in mind US sizes are different from Asian sizes.",
                textZh: "你平时穿多大号的鞋？注意美码和亚洲码不一样。",
                actionHint: "说出你的尺码",
                frequency: "common",
              },
              {
                textEn: "Do you know your US shoe size? If not, I can measure you.",
                textZh: "知道你的美国鞋码吗？不知道的话我帮你量。",
                actionHint: "让店员帮你量脚",
                frequency: "occasional",
              },
            ],
            casualVersion: "Awesome! Know your size? American sizing's different from European and Asian.",
            formalityVariants: {
              casual: "Awesome! Know your size? American sizing's different from European/Asian.",
              standard: "Great! Do you know your size? American sizing is different from European and Asian sizing.",
              formal:
                "Excellent! Are you familiar with your shoe size? American sizing conventions diverge from those used in Europe and Asia.",
            },
          },
          {
            speaker: "you",
            textEn: "I'm not sure about the US size. In Chinese sizing, I'm a 42. Can you measure my feet?",
            textZh: "我不确定美国尺码。中国码我穿42。能帮我量一下脚吗？",
            culturalNote: "中国人通常会说“穿xx码”，美国人说“我是xx码”或“穿xx码”。",
            casualVersion: "Not sure about US size. I'm a 42 in China. Can you measure me?",
            commonMistake: {
              wrong: "I wear 42 size in China.",
              correct: "In Chinese sizing, I'm a 42.",
              explanation: "中式表达，更自然是说自己是某个尺码，如'I'm a size 42'.",
            },
            formalityVariants: {
              casual: "Not sure about US size. I'm a 42 in China. Can you measure me?",
              standard: "I'm not sure about the US size. In Chinese sizing, I'm a 42. Can you measure my feet?",
              formal:
                "I am uncertain regarding the US size. My Chinese size is 42. Would you be able to measure my feet, please?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Of course! Step on this measuring device... You're a US size 9, and it looks like you have a slightly wider foot. I'd recommend trying a wide width. Let me grab a few options for you.",
            textZh:
              "当然可以！踩到这个量脚器上……您是美国码9号，看起来您的脚稍微偏宽。建议试试宽版的。我去拿几双给您选。",
            commonMistake: {
              wrong: "You are US size 9",
              correct: "You're a US size 9",
              explanation: "在报尺码时，前面通常会加 'a'。",
            },
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
              {
                textEn:
                  "You're a 9, and your feet are a bit wide. I'd suggest trying the wide version. Let me pull some options.",
                textZh: "你是9号，脚稍微宽一些。建议试试宽版。我去拿几双。",
                actionHint: "等店员拿鞋",
                frequency: "common",
              },
              {
                textEn: "Looks like you're a 9 with a wider fit. I'll grab a few wide-width pairs for you to try.",
                textZh: "看起来你是9号，偏宽的脚型。我拿几双宽版给你试。",
                actionHint: "试穿宽版的",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "No problem! Step on this thing... You're a US 9, looks like you got a wider foot. I'd say try a wide. I'll grab some options.",
            formalityVariants: {
              casual:
                "No problem! Step on this thing... You're a US 9, looks like you got a wider foot. I'd say try a wide. I'll grab some options.",
              standard:
                "Of course! Step on this measuring device... You're a US size 9, and it looks like you have a slightly wider foot. I'd recommend trying a wide width. Let me grab a few options for you.",
              formal:
                "Certainly! Please place your foot upon this measuring device... Your US size is a 9, and it appears you have a slightly wider foot. I would suggest attempting a wide width. Allow me to retrieve several options for your consideration.",
            },
          },
          {
            speaker: "you",
            textEn: "These feel good but a little tight in the toe area. Do you have a half size up?",
            textZh: "这双感觉不错但脚趾那里有点紧。有大半码的吗？",
            casualVersion: "These feel good, but the toes are a bit tight. Got a half size up?",
            commonMistake: {
              wrong: "Do you have half size bigger?",
              correct: "Do you have a half size up?",
              explanation: "询问尺码增大，用 'half size up' 更自然。",
            },
            formalityVariants: {
              casual: "These feel good, but the toes are a bit tight. Got a half size up?",
              standard: "These feel good but a little tight in the toe area. Do you have a half size up?",
              formal:
                "These feel satisfactory, however, they are a little snug in the toe box. Do you have this in a half size larger?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Let me check... Yes, I have a 9.5 in the same style. Keep in mind that running shoes should have about a thumb's width of space between your longest toe and the front of the shoe.",
            textZh: "让我看看……有，同款有9.5的。请记住跑步鞋应该在最长的脚趾和鞋尖之间留大约一个拇指宽的空间。",
            commonMistake: {
              wrong: "a thumb wide space",
              correct: "a thumb's width of space",
              explanation: "表达“一个拇指的宽度”时，通常用 'a thumb's width'。",
            },
            keyPhrases: [
              { en: "half size up", zh: "大半码" },
              { en: "thumb's width", zh: "一个拇指宽" },
              { en: "toe area", zh: "脚趾部位" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Let me check... Yep, got a 9.5 right here. For running shoes, make sure there's some space at the front for your toes.",
                textZh: "我看看……有，9.5号在这。跑步鞋的话，脚趾前面要留点空间。",
                actionHint: "注意脚趾空间",
                frequency: "common",
              },
              {
                textEn:
                  "We have 9.5 in stock. Pro tip — your toes should have a thumb's width of room in running shoes.",
                textZh: "9.5有货。小建议——跑步鞋里脚趾要留一个拇指宽的空间。",
                actionHint: "试穿时检查空间",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Lemme check... Yeah, got a 9.5 in this style. Remember, running shoes should have like a thumb's width space between your longest toe and the front.",
            culturalNote: "美国导购会提供专业建议，直接听取即可",
            formalityVariants: {
              casual:
                "Lemme check... Yeah, got a 9.5 in this style. Remember, running shoes should have like a thumb's width space between your longest toe and the front.",
              standard:
                "Let me check... Yes, I have a 9.5 in the same style. Keep in mind that running shoes should have about a thumb's width of space between your longest toe and the front of the shoe.",
              formal:
                "Allow me to verify... Yes, I do have a 9.5 in this particular style. Please note that for optimal fit, running shoes typically require approximately a thumb's width of space between your longest toe and the shoe's front.",
            },
          },
          {
            speaker: "you",
            textEn: "Much better! These are really comfortable. How much are they?",
            textZh: "好多了！这双真的很舒服。多少钱？",
            casualVersion: "Way better! These are super comfy. How much?",
            commonMistake: {
              wrong: "How much is it?",
              correct: "How much are they?",
              explanation: "“Shoes” 是复数，所以用 “are they” 更合适。",
            },
            formalityVariants: {
              casual: "Way better! These are super comfy. How much?",
              standard: "Much better! These are really comfortable. How much are they?",
              formal: "These are significantly more comfortable. What is the price for this pair?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "These are $129. We're actually running a promotion right now — buy one pair, get 30% off the second pair. Would you like to look at another pair?",
            textZh: "这双129美元。我们现在有促销活动——买一双第二双七折。要再看看另一双吗？",
            commonMistake: {
              wrong: "30% cheaper",
              correct: "30% off",
              explanation: "在英文中，“打折”通常用 'X% off' 或 'X% discount'，但 'X% off' 更常用。",
            },
            keyPhrases: [
              { en: "promotion", zh: "促销活动" },
              { en: "30% off", zh: "打七折" },
              { en: "buy one pair", zh: "买一双" },
            ],
            alternativeExpressions: [
              {
                textEn: "They're $129. We've got a deal this week — buy one, get 30% off your second pair. Interested?",
                textZh: "129美元。这周有优惠——买一双第二双打七折。感兴趣吗？",
                actionHint: "考虑是否再买一双",
                frequency: "common",
              },
              {
                textEn: "That pair is $129. And just so you know, we're doing BOGO 30% off right now.",
                textZh: "这双129美元。顺便说一下，我们现在买一送一七折。",
                actionHint: "看看有没有想要的第二双",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "They're $129. We've got a promo — buy one, get 30% off the second. Wanna look at another pair?",
            culturalNote: "美国零售店常有买赠或第二件折扣促销",
            formalityVariants: {
              casual: "They're $129. We've got a promo — buy one, get 30% off the second. Wanna look at another pair?",
              standard:
                "These are $129. We're actually running a promotion right now — buy one pair, get 30% off the second pair. Would you like to look at another pair?",
              formal:
                "This pair is priced at $129. We are currently offering a promotional incentive: purchase one pair and receive 30% off a second pair. Would you care to view additional selections?",
            },
          },
          {
            speaker: "you",
            textEn: "Tempting! I'll just take these for now. Can I also get some insoles for extra cushioning?",
            textZh: "很诱人！我先就买这双。能再拿双鞋垫增加缓震吗？",
            casualVersion: "Hmm, tempting! Just these for now. Can I get some insoles too, for extra cushion?",
            commonMistake: {
              wrong: "I want to buy insoles.",
              correct: "Can I also get some insoles?",
              explanation: "委婉询问 'Can I get...' 比直接说 'I want...' 更礼貌。",
            },
            formalityVariants: {
              casual: "Hmm, tempting! Just these for now. Can I get some insoles too, for extra cushion?",
              standard: "Tempting! I'll just take these for now. Can I also get some insoles for extra cushioning?",
              formal:
                "That is quite tempting! However, I will simply acquire this pair for the moment. Might I also purchase some insoles for additional cushioning?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Sure! Our memory foam insoles are $15 and they make a big difference in comfort. I'll ring you up at the register. Would you like to keep the shoes on and have me bag your old ones?",
            textZh: "好的！记忆棉鞋垫15美元，对舒适度提升很大。我在收银台帮您结账。要穿着新鞋走，把旧鞋装起来吗？",
            commonMistake: {
              wrong: "I will pay for you",
              correct: "I can ring you up",
              explanation: "在美国，店员用 'ring you up' 或 'check you out' 表示帮你结账。",
            },
            keyPhrases: [
              { en: "insoles", zh: "鞋垫" },
              { en: "memory foam", zh: "记忆棉" },
              { en: "ring you up", zh: "帮您结账" },
              { en: "bag your old ones", zh: "把旧鞋装起来" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Memory foam insoles are $15 — they really help. Want to wear the new ones out? I'll bag your old pair.",
                textZh: "记忆棉鞋垫15美元——真的有用。要穿新鞋走吗？我把旧鞋装起来。",
                actionHint: "决定是否穿新鞋走",
                frequency: "common",
              },
              {
                textEn: "The insoles are $15 and totally worth it. I'll ring you up. Want to keep the new shoes on?",
                textZh: "鞋垫15美元，完全值。我帮你结账。新鞋要穿着走吗？",
                actionHint: "穿新鞋或装袋带走",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah! Our memory foam insoles are $15, they make a huge difference. I'll check you out at the register. Wanna wear these out and I'll bag your old ones?",
            culturalNote: "美国零售店服务周到，会主动询问是否穿新鞋离开",
            formalityVariants: {
              casual:
                "Yeah! Our memory foam insoles are $15, they make a huge difference. I'll check you out at the register. Wanna wear these out and I'll bag your old ones?",
              standard:
                "Sure! Our memory foam insoles are $15 and they make a big difference in comfort. I'll ring you up at the register. Would you like to keep the shoes on and have me bag your old ones?",
              formal:
                "Certainly! Our memory foam insoles are priced at $15 and significantly enhance comfort. I shall process your transaction at the register. Would you prefer to wear the new shoes and have me package your old footwear?",
            },
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
            casualVersion: "Got these shoes last week, but they're giving me blisters. Can I swap 'em?",
            commonMistake: {
              wrong: "Can exchange them?",
              correct: "Can I exchange them?",
              explanation: "英文问句中通常需要主语，直接省略主语听起来不自然。",
            },
            formalityVariants: {
              casual: "Got these shoes last week, but they're giving me blisters. Can I swap 'em?",
              standard: "I bought these shoes last week, but they've been giving me blisters. May I exchange them?",
              formal:
                "Good morning/afternoon. I purchased these shoes last week, and unfortunately, they have caused blisters. I was wondering if it would be possible to exchange them?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "I'm sorry to hear that! Yes, we have a 30-day exchange policy. Do you have the receipt? Let me take a look at the shoes... They show minimal wear, so that's fine for an exchange.",
            textZh: "很抱歉听到这个！可以的，我们有30天换货政策。有收据吗？让我看看鞋子……磨损很少，可以换。",
            culturalNote: "美国的退换货政策通常比较宽泛，有收据且磨损不大通常都可以换。",
            casualVersion: "Oh, sorry 'bout that! Yeah, we got a 30-day exchange policy. Got your receipt? Lemme see the shoes... Not much wear, so yeah, you're good for an exchange.",
            commonMistake: {
              wrong: "Do you have receipt?",
              correct: "Do you have the receipt?",
              explanation: "\"receipt\"是可数名词，首次提到时需要冠词\"a\"或特指时用\"the\"。",
            },
            formalityVariants: {
              casual: "Oh, sorry 'bout that! Yeah, we got a 30-day exchange policy. Got your receipt? Lemme see the shoes... Not much wear, so yeah, you're good for an exchange.",
              standard: "I'm sorry to hear that! Yes, we do have a 30-day exchange policy. Do you have your receipt? Let me take a look at the shoes... They show minimal wear, so that's perfectly fine for an exchange.",
              formal: "My apologies for the inconvenience. Indeed, we offer a 30-day exchange policy. May I please see your receipt? And if you could present the shoes, I'll assess their condition. Given the minimal wear, an exchange would be entirely permissible.",
            },
            keyPhrases: [
              { en: "blisters", zh: "水泡" },
              { en: "exchange policy", zh: "换货政策" },
              { en: "minimal wear", zh: "很少磨损" },
            ],
            vocabNotes: {
              blisters: {
                meaningInContext: "在这句话里表示：脚上因为鞋子摩擦而起的水泡",
                similarUsage:
                  "类似用法：New shoes often cause blisters until they're broken in.（新鞋在穿合之前经常磨出水泡）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Sorry about that! Do you have the receipt? We can swap them out within 30 days.",
                textZh: "不好意思！有收据吗？30天内可以换。",
                actionHint: "出示收据",
                frequency: "common",
              },
              {
                textEn: "Oh no, that's not good. Let me take a look — do you have proof of purchase?",
                textZh: "哎呀，这不行。我看看——有购买凭证吗？",
                actionHint: "拿出收据或订单",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's the receipt. I think the problem is the width. They're too narrow for my feet.",
            textZh: "收据在这里。我觉得问题是宽度。对我的脚来说太窄了。",
            casualVersion: "Here's the receipt. Pretty sure it's the width. They're just too narrow for my feet.",
            commonMistake: {
              wrong: "My receipt here.",
              correct: "Here's the receipt.",
              explanation: "英语中递交物品时常用\"Here is/are...\"句型，\"receipt\"特指已知的收据。",
            },
            formalityVariants: {
              casual: "Here's the receipt. Pretty sure it's the width. They're just too narrow for my feet.",
              standard: "Here is the receipt. I believe the problem lies with the width; they are simply too narrow for my feet.",
              formal: "Certainly, here is the purchase receipt. I suspect the issue stems from the width; they appear to be excessively narrow for my foot size.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "That makes sense — blisters are usually a sign that the shoe is too tight somewhere. Let me find the same model in a wide width. Or we could try a different model with a roomier toe box.",
            textZh: "有道理——水泡通常说明鞋子某个地方太紧。我找找同款的宽版。或者我们可以试试鞋头更宽敞的其他款。",
            casualVersion: "Yeah, that makes sense — blisters usually mean the shoe's too tight. I'll grab the same model in a wide for ya. Or we could check out something else with more toe room.",
            commonMistake: {
              wrong: "It makes sense.",
              correct: "That makes sense.",
              explanation: "\"That makes sense\"通常用于回应对方的观点，表示理解和认同。",
            },
            formalityVariants: {
              casual: "Yeah, that makes sense — blisters usually mean the shoe's too tight. I'll grab the same model in a wide for ya. Or we could check out something else with more toe room.",
              standard: "That makes perfect sense — blisters are indeed often an indication that the shoe is too tight in a particular area. Allow me to locate the same model in a wide width, or alternatively, we could explore a different model featuring a more spacious toe box.",
              formal: "Indeed, that is quite understandable; blisters frequently signal a localized constriction within the footwear. I shall endeavor to locate the identical model in a wider fitting, or perhaps we might consider alternative designs that offer a more generous toe box.",
            },
            keyPhrases: [
              { en: "too narrow", zh: "太窄" },
              { en: "toe box", zh: "鞋头空间" },
              { en: "roomier", zh: "更宽敞的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Blisters usually mean it's too tight. Let me find the wide version, or we can try a different shoe with more room.",
                textZh: "起水泡一般是太紧了。我找找宽版的，或者试试鞋头更宽的其他款。",
                actionHint: "选择换宽版或换款式",
                frequency: "common",
              },
              {
                textEn:
                  "Sounds like a width issue. I'll check if we have this in wide. Otherwise, I have a roomier style to suggest.",
                textZh: "听起来是宽度问题。我看看有没有宽版。没有的话我推荐一款更宽松的。",
                actionHint: "等店员查找",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Let me try the wide width of the same model first.",
            textZh: "我先试试同款的宽版。",
            casualVersion: "Gonna try the wide version of these first.",
            commonMistake: {
              wrong: "I try the wide width first.",
              correct: "Let me try the wide width first.",
              explanation: "\"Let me\" 表达了想要做某事的意愿或请求许可，听起来更自然和礼貌。",
            },
            formalityVariants: {
              casual: "Gonna try the wide version of these first.",
              standard: "I would like to try the wide width of the same model first.",
              formal: "I would prefer to initially try the wide width of this particular model.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Here you go — same style, size 9 wide. Walk around the store for a bit and see how they feel. Pay attention to any pressure points, especially around the pinky toe and the heel.",
            textZh: "给您——同款，9号宽版。在店里走走感受一下。注意有没有压迫点，特别是小趾和脚后跟周围。",
            casualVersion: "Here ya go — same style, nine wide. Walk around for a bit, see how they feel. Watch out for any pressure points, especially by your pinky toe and heel.",
            commonMistake: {
              wrong: "Walk around and feel.",
              correct: "Walk around the store for a bit and see how they feel.",
              explanation: "\"Feel\" 通常需要宾语，而 \"see how they feel\" 是一种更完整的表达，意为“感受它们穿着的体验”。",
            },
            formalityVariants: {
              casual: "Here ya go — same style, nine wide. Walk around for a bit, see how they feel. Watch out for any pressure points, especially by your pinky toe and heel.",
              standard: "Here you are — this is the same style, size 9 wide. Please walk around the store for a few moments to assess their feel. Kindly pay close attention to any potential pressure points, particularly around the pinky toe and the heel area.",
              formal: "Herein is the requested item — the identical style, in a size 9 wide. I invite you to ambulate throughout the establishment for a brief period to ascertain their comfort. Please be particularly mindful of any areas of localized pressure, specifically concerning the fifth digit and the calcaneal region.",
            },
            keyPhrases: [
              { en: "pressure points", zh: "压迫点" },
              { en: "pinky toe", zh: "小趾" },
              { en: "heel", zh: "脚后跟" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Here's the wide in size 9. Walk around and see how they feel — pay attention to any tight spots.",
                textZh: "这是9号宽版。走走看感觉怎么样——注意有没有紧的地方。",
                actionHint: "在店里多走几步",
                frequency: "common",
              },
              {
                textEn: "Try these on — same style, wide fit. Check the pinky toe area and the heel for comfort.",
                textZh: "试试这双——同款宽版。注意小趾和脚后跟舒不舒服。",
                actionHint: "重点检查小趾和脚跟",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "These feel much better! No pinching at all. I'll take these. Is there a price difference for the wide version?",
            textZh: "这双好多了！完全不夹脚。我要这双。宽版有价格差异吗？",
            casualVersion: "These are way better! No pinching. I'll take 'em. Any price difference for the wide ones?",
            commonMistake: {
              wrong: "Is there price difference for wide version?",
              correct: "Is there a price difference for the wide version?",
              explanation: "\"price difference\"是可数名词短语，需要不定冠词\"a\"或定冠词\"the\"。",
            },
            formalityVariants: {
              casual: "These are way better! No pinching. I'll take 'em. Any price difference for the wide ones?",
              standard: "These feel significantly more comfortable! There is no pinching whatsoever. I will take these. Is there any price difference for the wide version?",
              formal: "These provide a vastly superior fit and comfort level; I perceive no areas of constriction. I shall proceed with this pair. May I inquire if there is any price variance associated with the wide fitting?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "No, same price. I'll process the exchange right now. Since you're switching the same model, it's a straightforward swap. No additional paperwork needed.",
            textZh: "没有，一样的价格。我现在办理换货。因为是同款互换，直接换就行。不需要额外的手续。",
            culturalNote: "美国商家在处理同款不同尺码的换货时，流程通常非常简单快捷。",
            casualVersion: "Nah, same price. I'll do the exchange now. Since it's the same model, it's just a straight swap. No extra paperwork.",
            commonMistake: {
              wrong: "No, same price.",
              correct: "No, it's the same price.",
              explanation: "在口语中，加上\"it's\"使句子更完整和自然，特别是作为对问题（\"Is there a price difference?\"）的直接回答。",
            },
            formalityVariants: {
              casual: "Nah, same price. I'll do the exchange now. Since it's the same model, it's just a straight swap. No extra paperwork.",
              standard: "No, the price remains the same. I will process the exchange immediately. As you are switching to the identical model, it is a straightforward swap, requiring no additional paperwork.",
              formal: "No, there is no price differential; the cost is identical. I shall proceed with processing the exchange at this moment. Given that you are exchanging for the same model, the transaction is a simple swap, necessitating no supplementary documentation.",
            },
            keyPhrases: [
              { en: "straightforward swap", zh: "直接互换" },
              { en: "process the exchange", zh: "办理换货" },
              { en: "pinching", zh: "夹脚" },
            ],
            alternativeExpressions: [
              {
                textEn: "Same price for the wide. I'll do a quick swap — same model, just a wider fit. Easy.",
                textZh: "宽版一样的价。我直接换——同款，就是宽一点。很简单。",
                actionHint: "确认换货",
                frequency: "common",
              },
              {
                textEn:
                  "No price difference. Since it's the same shoe, I'll just process a straight exchange right now.",
                textZh: "没有差价。同款的话直接换就行，我现在办。",
                actionHint: "等店员处理",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect, thank you. Any tips on breaking in new shoes?",
            textZh: "太好了，谢谢。有什么穿合新鞋的建议吗？",
            casualVersion: "Awesome, thanks! Any tips for breaking 'em in?",
            commonMistake: {
              wrong: "Tips break in new shoes?",
              correct: "Any tips on breaking in new shoes?",
              explanation: "询问建议时，常用\"Any tips on...\" 或 \"Do you have any tips for...\"。",
            },
            formalityVariants: {
              casual: "Awesome, thanks! Any tips for breaking 'em in?",
              standard: "Perfect, thank you. Do you have any tips on breaking in new shoes?",
              formal: "Excellent, I appreciate that. Might you have any recommendations regarding the breaking-in process for new footwear?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Wear them around the house for short periods first, maybe 30 minutes at a time, with thick socks. Gradually increase the time. If you still get blisters, a bit of moleskin on the hot spots can help. Enjoy your new shoes!",
            textZh:
              "先在家里穿短时间，每次大概30分钟，穿厚袜子。慢慢增加时间。如果还是磨出水泡，在摩擦点贴一点防磨贴会有帮助。享受你的新鞋！",
            culturalNote: "Moleskin是一种美国常见的足部护理产品，用于防止和缓解水泡。",
            casualVersion: "Wear 'em 'round the house for short bursts, like 30 mins, with thick socks. Then slowly wear 'em longer. If you still get blisters, some moleskin on the rub spots helps. Enjoy!",
            commonMistake: {
              wrong: "Wear them around house first, 30 minutes, thick socks.",
              correct: "Wear them around the house for short periods first, maybe 30 minutes at a time, with thick socks.",
              explanation: "\"for short periods\"和\"at a time\"能更清晰地表达建议的时长和方式。",
            },
            formalityVariants: {
              casual: "Wear 'em 'round the house for short bursts, like 30 mins, with thick socks. Then slowly wear 'em longer. If you still get blisters, some moleskin on the rub spots helps. Enjoy!",
              standard: "Initially, wear them around your home for brief intervals, perhaps 30 minutes at a time, accompanied by thick socks. Gradually extend the wearing duration. Should blisters still develop, applying a small piece of moleskin to any pressure points can be beneficial. Enjoy your new shoes!",
              formal: "It is advisable to wear them within your residence for brief durations initially, perhaps approximately 30 minutes per session, ideally with substantial hosiery. Progressively extend the wearing period. Should blisters nonetheless manifest, the application of moleskin to the affected areas may prove advantageous. We trust you will derive considerable satisfaction from your new footwear.",
            },
            keyPhrases: [
              { en: "breaking in", zh: "穿合/磨合" },
              { en: "moleskin", zh: "防磨贴" },
              { en: "hot spots", zh: "摩擦点/易磨点" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Wear them around the house first with thick socks. If you get hot spots, moleskin patches work great.",
                textZh: "先穿着在家走走，配厚袜子。如果有摩擦点，防磨贴很管用。",
                actionHint: "在家先穿合",
                frequency: "common",
              },
              {
                textEn:
                  "Start with short walks and thick socks. Give them a few days to break in before going all out.",
                textZh: "先短距离走走配厚袜子。穿几天磨合好了再长时间穿。",
                actionHint: "慢慢增加穿着时间",
                frequency: "occasional",
              },
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
              {
                textEn: "Hi! What brings you in today — skincare, makeup, or a bit of both?",
                textZh: "你好！今天来找什么——护肤品、彩妆，还是都看看？",
                actionHint: "说出你的需求",
                frequency: "common",
              },
              {
                textEn: "Welcome! Are you shopping for yourself or looking for a gift?",
                textZh: "欢迎！是给自己买还是选礼物？",
                actionHint: "说明购买目的",
                frequency: "occasional",
              },
            ],
            casualVersion: "Hey, welcome to Glow Beauty! Skincare or makeup today?",
            formalityVariants: {
              casual: "Hey, welcome! Skincare or makeup?",
              standard: "Welcome to Glow Beauty! Are you looking for skincare or makeup today?",
              formal: "Welcome to Glow Beauty. May I assist you with skincare products or cosmetics this afternoon?",
            },
          },
          {
            speaker: "you",
            textEn: "Skincare, please. I have combination skin and I'm looking for a good moisturizer and sunscreen.",
            textZh: "护肤品。我是混合性皮肤，想找一款好的保湿霜和防晒霜。",
            casualVersion: "Skincare. Got combo skin, looking for a good moisturizer and sunscreen.",
            commonMistake: {
              wrong: "I want to find a good moisturizer",
              correct: "I'm looking for a good moisturizer",
              explanation: '"I want to..." 听起来太生硬，"I\'m looking for..." 更自然礼貌。',
            },
            formalityVariants: {
              casual: "Skincare. Got combo skin, need a good moisturizer and sunscreen.",
              standard:
                "Skincare, please. I have combination skin and I'm looking for a good moisturizer and sunscreen.",
              formal:
                "Skincare products, please. I possess combination skin and am seeking recommendations for an effective moisturizer and sunscreen.",
            },
          },
          {
            speaker: "them",
            role: "美容顾问",
            textEn:
              "Combination skin — so oily in the T-zone and drier on the cheeks? I'd recommend a gel-cream moisturizer. It hydrates without feeling heavy. For sunscreen, our mineral SPF 50 is great for everyday use. Would you like to try some samples?",
            textZh:
              "混合性皮肤——T区偏油，面颊偏干？我推荐凝胶霜质地的保湿霜。保湿但不厚重。防晒的话，我们的物理防晒SPF50很适合日常使用。要试用一下吗？",
            commonMistake: {
              wrong: "I suggest you try it.",
              correct: "Would you like to try it?",
              explanation: "建议用问句更礼貌，避免强制感。",
            },
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
              {
                textEn:
                  "For combo skin, I'd go with a gel moisturizer — lightweight but hydrating. And our SPF 50 mineral sunscreen is perfect for daily use.",
                textZh: "混合性皮肤的话，建议用凝胶保湿——轻薄但保湿。SPF50物理防晒日常用正好。",
                actionHint: "可以试用一下",
                frequency: "common",
              },
              {
                textEn:
                  "Oily T-zone and dry cheeks? A gel-cream is your best bet. For sunscreen, mineral formulas are gentler. Want to try some samples?",
                textZh: "T区油面颊干？凝胶霜最适合。防晒的话物理配方更温和。要试用吗？",
                actionHint: "试试推荐的产品",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Combo skin, got it. So T-zone's oily, cheeks are drier? A gel-cream moisturizer's good, hydrates without feeling heavy. And for sunscreen, our mineral SPF 50's awesome for daily. Wanna try some samples?",
            formalityVariants: {
              casual:
                "Combo skin, T-zone oily, cheeks dry? Gel-cream moisturizer's good, not heavy. Mineral SPF 50 for daily. Wanna try samples?",
              standard:
                "Combination skin — so oily in the T-zone and drier on the cheeks? I'd recommend a gel-cream moisturizer. It hydrates without feeling heavy. For sunscreen, our mineral SPF 50 is great for everyday use. Would you like to try some samples?",
              formal:
                "Regarding combination skin, specifically an oily T-zone and drier cheeks, I would highly recommend our gel-cream moisturizer, which provides hydration without a heavy feel. For sun protection, our mineral SPF 50 offers excellent suitability for daily application. Would you be interested in sampling these products?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I'd love to try them. Do you have anything for dark spots too?",
            textZh: "好的，我想试试。有去色斑的产品吗？",
            casualVersion: "Yeah, totally wanna try 'em. Anything for dark spots too?",
            commonMistake: {
              wrong: "Do you have any product for dark spots?",
              correct: "Do you have anything for dark spots?",
              explanation: '"Anything for..." 更自然地询问是否有某种产品。',
            },
            formalityVariants: {
              casual: "Yeah, I wanna try 'em. Got anything for dark spots?",
              standard: "Yes, I'd love to try them. Do you have anything for dark spots too?",
              formal:
                "Yes, I would be delighted to try them. Additionally, do you carry any products specifically for hyperpigmentation or dark spots?",
            },
          },
          {
            speaker: "them",
            role: "美容顾问",
            textEn:
              "For dark spots, I'd suggest a vitamin C serum — it's excellent for brightening and evening out skin tone. Apply it in the morning before your moisturizer and sunscreen. Here, let me put a little on the back of your hand.",
            textZh:
              "去色斑的话，我推荐维C精华——对提亮和均匀肤色非常好。早上在保湿霜和防晒前使用。来，我在您手背上涂一点。",
            commonMistake: {
              wrong: "This can remove dark spots.",
              correct: "This is good for dark spots.",
              explanation: "产品通常是\"改善\"而非\"移除\"问题，用词需谨慎。",
            },
            keyPhrases: [
              { en: "vitamin C serum", zh: "维C精华" },
              { en: "brightening", zh: "提亮" },
              { en: "evening out skin tone", zh: "均匀肤色" },
              { en: "apply", zh: "涂抹/使用" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Vitamin C serum is amazing for dark spots. Use it every morning before moisturizer. Here, try a bit on your hand.",
                textZh: "维C精华对色斑特别好。每天早上保湿前用。来，手上试一点。",
                actionHint: "试用精华",
                frequency: "common",
              },
              {
                textEn:
                  "For brightening, I always recommend a vitamin C serum. It fades dark spots over time. Want to see how it feels?",
                textZh: "提亮的话我总是推荐维C精华。能慢慢淡化色斑。要感受一下吗？",
                actionHint: "了解使用方法",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "For dark spots, a vitamin C serum's great — brightens and evens out skin tone. Put it on in the morning before your moisturizer and sunscreen. Here, let me get some on your hand.",
            formalityVariants: {
              casual:
                "Dark spots? Vitamin C serum's awesome for brightening. Use it mornings before moisturizer/sunscreen. Here, lemme put some on your hand.",
              standard:
                "For dark spots, I'd suggest a vitamin C serum — it's excellent for brightening and evening out skin tone. Apply it in the morning before your moisturizer and sunscreen. Here, let me put a little on the back of your hand.",
              formal:
                "Regarding hyperpigmentation, I would highly recommend a vitamin C serum, as it is exceptionally effective for brightening and evening out skin tone. This should be applied in the morning, prior to your moisturizer and sunscreen. Allow me to demonstrate its texture on the back of your hand.",
            },
          },
          {
            speaker: "you",
            textEn: "That feels really nice. How much is the set — the moisturizer, sunscreen, and serum?",
            textZh: "感觉真的很好。三件套——保湿霜、防晒和精华——一共多少钱？",
            casualVersion: "Oh, that feels nice. How much is that set — moisturizer, sunscreen, and serum?",
            commonMistake: {
              wrong: "How much is three products?",
              correct: "How much is the set?",
              explanation: '询问套装价格时，"How much is the set?" 更地道。',
            },
            formalityVariants: {
              casual: "Feels good. How much for the moisturizer, sunscreen, and serum?",
              standard: "That feels really nice. How much is the set — the moisturizer, sunscreen, and serum?",
              formal:
                "This texture is quite pleasant. Could you please inform me of the total cost for this particular collection, encompassing the moisturizer, sunscreen, and serum?",
            },
          },
          {
            speaker: "them",
            role: "美容顾问",
            textEn:
              "Individually, the moisturizer is $38, the sunscreen is $28, and the serum is $45 — so $111 total. But we have a skincare bundle for $89 that includes all three plus a cleanser. It's a much better deal.",
            textZh:
              "单买的话，保湿霜38美元，防晒28美元，精华45美元——总共111美元。但我们有一个护肤套装89美元，包含这三样加一瓶洁面乳。划算很多。",
            commonMistake: {
              wrong: "It is very cheap.",
              correct: "It's a much better value.",
              explanation: "\"Cheap\" 常含贬义，用 \"good value\" 或 \"good deal\" 更合适。",
            },
            keyPhrases: [
              { en: "individually", zh: "单买" },
              { en: "bundle", zh: "套装/组合" },
              { en: "cleanser", zh: "洁面乳" },
              { en: "better deal", zh: "更划算" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Separately it's $111, but our skincare bundle is $89 and includes a free cleanser. Way better value.",
                textZh: "单买111美元，但我们的套装89美元还送洁面乳。划算多了。",
                actionHint: "考虑买套装",
                frequency: "common",
              },
              {
                textEn:
                  "The three together would be $111. But we have a bundle deal for $89 that also throws in a cleanser.",
                textZh: "三样单买111美元。不过套装89美元还附送洁面乳。",
                actionHint: "对比单买和套装价格",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Okay, separately: moisturizer's 38, sunscreen 28, serum 45 — so 111 bucks total. But we got a bundle for 89 that includes all three *plus* a cleanser. Way better deal.",
            formalityVariants: {
              casual:
                "Separately, moisturizer's 38, sunscreen 28, serum 45 — total 111. But the 89 bundle has all three plus a cleanser. Much better deal.",
              standard:
                "Individually, the moisturizer is $38, the sunscreen is $28, and the serum is $45 — so $111 total. But we have a skincare bundle for $89 that includes all three plus a cleanser. It's a much better deal.",
              formal:
                "Priced individually, the moisturizer is $38, the sunscreen is $28, and the serum is $45, totaling $111. However, we do offer a comprehensive skincare bundle for $89, which includes these three items along with a complimentary cleanser. This represents a significantly more economical option.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take the bundle. Do you offer a loyalty program?",
            textZh: "我买套装。你们有会员计划吗？",
            casualVersion: "I'll take the bundle. Got a loyalty program?",
            commonMistake: {
              wrong: "Do you have membership?",
              correct: "Do you have a loyalty program?",
              explanation: '商店的会员制度一般称为 "loyalty program" 或 "rewards program"，而非 "membership"。',
            },
            formalityVariants: {
              casual: "I'll take it. Got a loyalty program?",
              standard: "I'll take the bundle. Do you offer a loyalty program?",
              formal: "I will proceed with the bundle purchase. May I inquire if you offer a customer loyalty program?",
            },
          },
          {
            speaker: "them",
            role: "美容顾问",
            textEn:
              "Yes! Sign up for free and you'll earn points on every purchase. Every 500 points gets you a $25 reward. You'll also get a birthday gift and early access to sales. Shall I sign you up?",
            textZh:
              "有！免费注册，每次消费都可以积分。每500积分可以兑换25美元奖励。还有生日礼物和优先参加促销活动。帮您注册吗？",
            commonMistake: {
              wrong: "It needs to register for free.",
              correct: "Sign up for free.",
              explanation: "动词直接做指令更简洁自然。",
            },
            keyPhrases: [
              { en: "loyalty program", zh: "会员计划" },
              { en: "earn points", zh: "积分" },
              { en: "birthday gift", zh: "生日礼物" },
              { en: "early access to sales", zh: "优先参加促销" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We have a free rewards program — earn points on every purchase. Plus you get a birthday gift. Want to sign up?",
                textZh: "我们有免费积分计划——每次消费都攒积分。还有生日礼物。要注册吗？",
                actionHint: "考虑注册会员",
                frequency: "common",
              },
              {
                textEn:
                  "If you join our loyalty program, you'll earn points and get early access to sales. It's free to sign up.",
                textZh: "加入会员的话可以积分，还能优先参加促销。注册免费。",
                actionHint: "免费注册享优惠",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep! Sign up's free, you get points on everything you buy. 500 points gets you 25 bucks off. Plus a birthday gift and early access to sales. Wanna sign up?",
            culturalNote: "美国零售店的会员计划很常见，常在结账时询问。积分通常有兑换规则。",
            formalityVariants: {
              casual:
                "Yeah! Free sign-up, points on every buy. 500 points = $25 off. Plus birthday gift, early sales access. Wanna sign up?",
              standard:
                "Yes! Sign up for free and you'll earn points on every purchase. Every 500 points gets you a $25 reward. You'll also get a birthday gift and early access to sales. Shall I sign you up?",
              formal:
                "Indeed. Our loyalty program offers complimentary enrollment, allowing you to accumulate points with every purchase. Accumulating 500 points qualifies you for a $25 reward. Members also receive an annual birthday gift and priority access to sales events. Would you be interested in enrolling at this time?",
            },
          },
          {
            speaker: "you",
            textEn: "Sure, sign me up. Thank you for all the great recommendations!",
            textZh: "好的，帮我注册吧。谢谢你这么多好推荐！",
            casualVersion: "Yeah, sign me up. Thanks for all the awesome recommendations!",
            commonMistake: {
              wrong: "Thank you for your recommendations.",
              correct: "Thank you for all the great recommendations!",
              explanation: '"all the great recommendations" 听起来更真诚、口语化。',
            },
            formalityVariants: {
              casual: "Totally, sign me up. Thanks for the awesome recommendations!",
              standard: "Sure, sign me up. Thank you for all the great recommendations!",
              formal:
                "Yes, please proceed with my enrollment. I sincerely appreciate your comprehensive and helpful recommendations.",
            },
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
            casualVersion: "Need a new foundation, but can never find my shade. Can you help me match my skin?",
            commonMistake: {
              wrong: "Can you help me match my color?",
              correct: "Can you help me match my skin tone?",
              explanation: "中国人说“配色”，但英语里说“配肤色”或“配色号”更自然。",
            },
            formalityVariants: {
              casual: "Need new foundation, can't find my shade. Can you help me match it?",
              standard:
                "I need a new foundation but I can never find the right shade. Can you help me match my skin tone?",
              formal:
                "I am in need of a new foundation, however, I consistently struggle to locate the appropriate shade. Would you be able to assist me in matching it to my skin tone?",
            },
          },
          {
            speaker: "them",
            role: "美容顾问",
            textEn:
              "Absolutely! Let me look at your skin in natural light... You have a warm undertone. I'd say you're somewhere between 'sand' and 'honey' in our range. Let me swatch a few shades on your jawline to find the perfect match.",
            textZh:
              "当然！让我在自然光下看看您的肤色……您是暖色调。在我们的系列里大概在'沙色'和'蜜糖色'之间。我在您下巴线上试几个色号找到最匹配的。",
            commonMistake: {
              wrong: "I help you match.",
              correct: "Let me look at your skin.",
              explanation: "售货员通常会主动提供帮助，用 \"Let me\" 更自然。",
            },
            casualVersion: "Absolutely! Let's look at your skin in natural light... You're warm. Somewhere between 'sand' and 'honey'. I'll swatch a few on your jawline for the perfect match.",
            formalityVariants: {
              casual: "Totally! Let's look at your skin in natural light. You're warm. I'd say 'sand' or 'honey'. I'll swatch some on your jawline for the best match.",
              standard: "Absolutely! Let me look at your skin in natural light... You have a warm undertone. I'd say you're somewhere between 'sand' and 'honey' in our range. Let me swatch a few shades on your jawline to find the perfect match.",
              formal: "Certainly. If you'll permit me, I shall examine your skin in natural lighting. It appears you possess a warm undertone. Based on our product line, I estimate your shade to be between 'sand' and 'honey'. I will proceed to swatch several options along your jawline to ascertain the most suitable match.",
            },
            keyPhrases: [
              { en: "foundation", zh: "粉底" },
              { en: "shade", zh: "色号" },
              { en: "skin tone", zh: "肤色" },
              { en: "warm undertone", zh: "暖色调" },
              { en: "swatch", zh: "试色" },
              { en: "jawline", zh: "下巴线/颌线" },
            ],
            vocabNotes: {
              undertone: {
                meaningInContext:
                  "在这句话里表示：皮肤底层的色调（暖调偏黄、冷调偏粉、中性调介于之间），决定了什么色号的粉底最适合",
                similarUsage:
                  "类似用法：Knowing your undertone helps you choose the right colors.（了解底色调帮你选对颜色）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Let me check your skin in the light... You have warm tones. I'll swatch a few shades on your jaw to find the match.",
                textZh: "我在光线下看看你的肤色……你是暖色调。我在下巴试几个色号找匹配的。",
                actionHint: "让顾问试色",
                frequency: "common",
              },
              {
                textEn:
                  "You're a warm undertone, so we're looking at the 'sand' to 'honey' range. Let me try a couple on your jawline.",
                textZh: "你是暖色调，大概在沙色到蜜糖色之间。我在下巴线试几个。",
                actionHint: "配合顾问试色",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What about the coverage? I want something that covers blemishes but doesn't look cakey.",
            textZh: "遮瑕力呢？我想要能遮瑕但不显厚重的。",
            casualVersion: "Coverage-wise? Want something that covers blemishes but isn't cakey.",
            commonMistake: {
              wrong: "I want something that covers blemishes but doesn't look heavy.",
              correct: "I want something that covers blemishes but doesn't look cakey.",
              explanation: "形容彩妆“厚重”用cakey更地道，heavy/thick不自然。",
            },
            formalityVariants: {
              casual: "What about coverage? I want something that covers blemishes but isn't cakey.",
              standard: "What about the coverage? I want something that covers blemishes but doesn't look cakey.",
              formal: "Could you please elaborate on the coverage level? I am seeking a product that effectively conceals imperfections without appearing excessively heavy or artificial.",
            },
          },
          {
            speaker: "them",
            role: "美容顾问",
            textEn:
              "I'd recommend our medium-coverage foundation. It's buildable — you can apply one layer for a natural look or build it up where you need more coverage. It has a satin finish, so it won't look flat or too dewy. And it's long-lasting — up to 12 hours.",
            textZh:
              "我推荐我们的中等遮瑕粉底。可以叠加——薄涂一层自然妆效，需要遮瑕的地方多涂几层。是缎面妆效，不会看起来死板或太水亮。而且持久——可以持续12小时。",
            commonMistake: {
              wrong: "This foundation covers blemishes.",
              correct: "It's buildable — a thin layer for a natural look, or add more where you need extra coverage.",
              explanation: "描述产品特点和使用方法，比简单陈述功能更具说服力。",
            },
            casualVersion: "Our medium-coverage is good. It's buildable—one layer for natural, build up for more coverage. Satin finish, so it's not flat or too dewy. And it lasts—up to 12 hours.",
            formalityVariants: {
              casual: "I'd recommend our medium-coverage foundation. It's buildable—one layer for natural, build up for more coverage. Satin finish, so it's not flat or too dewy. Plus, it lasts 12 hours.",
              standard: "I'd recommend our medium-coverage foundation. It's buildable — you can apply one layer for a natural look or build it up where you need more coverage. It has a satin finish, so it won't look flat or too dewy. And it's long-lasting — up to 12 hours.",
              formal: "I would highly recommend our medium-coverage foundation. It is formulated to be buildable, allowing for a sheer, natural application with one layer, or increased coverage where desired. It imparts a satin finish, which avoids both a flat matte and an overly dewy appearance. Furthermore, it offers extended wear, maintaining its integrity for up to 12 hours.",
            },
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
              {
                textEn:
                  "Our medium-coverage one is great — buildable, satin finish, and lasts up to 12 hours. Won't look cakey at all.",
                textZh: "我们的中等遮瑕款很好——可叠加、缎面妆效、持续12小时。完全不会浮粉。",
                actionHint: "试试这款粉底",
                frequency: "common",
              },
              {
                textEn:
                  "I'd suggest this buildable formula. One layer for natural, more where you need coverage. It's long-wearing too.",
                textZh: "建议这款可叠加的。薄涂自然，需要遮瑕的地方多涂。还很持久。",
                actionHint: "了解使用技巧",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I try it on? Also, I'm looking for a lipstick — something for everyday wear.",
            textZh: "能试一下吗？另外我也想找一支口红——日常可以用的。",
            commonMistake: {
              wrong: "I want to try it.",
              correct: "Can I try it on?",
              explanation: "\"Can I\" 或 \"May I\" 是更礼貌的请求方式。",
            },
            casualVersion: "Can I try it? Also, need a lipstick for everyday.",
            formalityVariants: {
              casual: "Can I try it on? Also, I need an everyday lipstick.",
              standard: "Can I try it on? Also, I'm looking for a lipstick — something for everyday wear.",
              formal: "May I have the opportunity to try this product? Additionally, I am seeking a lipstick suitable for daily application.",
            },
          },
          {
            speaker: "them",
            role: "美容顾问",
            textEn:
              "Of course! I'll apply it for you with a clean sponge... There, that shade blends perfectly. For everyday lipstick, I'd suggest a nude pink or a 'my lips but better' shade. Here are our testers — try them on your hand first, and I'll sanitize a few for you to try on your lips.",
            textZh:
              "当然！我用干净的海绵帮您上妆……好了，这个色号完美融合。日常口红的话，推荐裸粉色或'像嘴唇但更好看'的色号。这些是试用品——先在手上试，我帮您消毒几支试唇色。",
            commonMistake: {
              wrong: "I use a clean sponge to apply it.",
              correct: "I'll apply it with a clean sponge for you.",
              explanation: "强调为顾客服务，用 \"for you\" 更显周到。",
            },
            casualVersion: "Sure! I'll put it on with a clean sponge... There, perfect match. For everyday lipstick, I'd suggest a nude pink or 'my lips but better' shade. Here are testers—try 'em on your hand first, I'll sanitize some for your lips.",
            formalityVariants: {
              casual: "Sure thing! I'll apply it with a clean sponge... There, that shade's perfect. For everyday lipstick, I'd suggest a nude pink or 'my lips but better' shade. Here are testers—try 'em on your hand first, I'll sanitize some for your lips.",
              standard: "Of course! I'll apply it for you with a clean sponge... There, that shade blends perfectly. For everyday lipstick, I'd suggest a nude pink or a 'my lips but better' shade. Here are our testers — try them on your hand first, and I'll sanitize a few for you to try on your lips.",
              formal: "Certainly. I shall apply it for you using a fresh, sanitized sponge... Excellent, that shade achieves a seamless blend. Regarding an everyday lipstick, I would propose either a nude pink or a 'my lips but better' hue. These are our available testers; please feel free to try them on your hand initially, and I will sanitize a selection for your lip application.",
            },
            keyPhrases: [
              { en: "sponge", zh: "海绵" },
              { en: "blends", zh: "融合" },
              { en: "nude pink", zh: "裸粉色" },
              { en: "testers", zh: "试用品" },
              { en: "sanitize", zh: "消毒" },
            ],
            alternativeExpressions: [
              {
                textEn: "Let me do a quick application for you. We use disposable applicators for hygiene.",
                textZh: "我帮您快速上一下。出于卫生考虑我们用一次性涂抹器。",
                actionHint: "坐下来让顾问帮忙试妆",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I love this shade! Is it transfer-proof? I don't want it rubbing off on everything.",
            textZh: "我喜欢这个色号！不沾杯吗？我不想到处蹭。",
            casualVersion: "Love this shade! Is it transfer-proof? Don't want it rubbing off.",
            commonMistake: {
              wrong: "Is it not stick cup?",
              correct: "Is it transfer-proof?",
              explanation: "“不沾杯”在英语里用 transfer-proof 或 transfer-resistant 更地道。",
            },
            formalityVariants: {
              casual: "Love this shade! Is it transfer-proof? Don't want it rubbing off.",
              standard: "I love this shade! Is it transfer-proof? I don't want it rubbing off on everything.",
              formal: "I find this shade quite appealing. Is it formulated to be transfer-proof? I wish to avoid any unintended transfer onto surfaces.",
            },
          },
          {
            speaker: "them",
            role: "美容顾问",
            textEn:
              "This formula is transfer-resistant — not completely transfer-proof, but it holds up really well. For a truly transfer-proof option, we have a liquid lip stain that lasts all day without budging. It's slightly more drying though.",
            textZh:
              "这款是抗沾染的——不是完全不沾杯，但表现很好。如果要完全不沾杯的，我们有一款持久唇釉，全天不掉色。不过会稍微偏干。",
            commonMistake: {
              wrong: "It will not transfer.",
              correct: "This formula is transfer-resistant.",
              explanation: "区分 \"resistant\" 和 \"proof\"，避免误导顾客。",
            },
            casualVersion: "This formula's transfer-resistant—not totally transfer-proof, but it holds up well. For totally transfer-proof, we've got a liquid lip stain that lasts all day. It's a bit drier though.",
            formalityVariants: {
              casual: "This formula's transfer-resistant—not totally transfer-proof, but holds up well. For totally transfer-proof, we've got a liquid lip stain that lasts all day. It's a bit drier though.",
              standard: "This formula is transfer-resistant — not completely transfer-proof, but it holds up really well. For a truly transfer-proof option, we have a liquid lip stain that lasts all day without budging. It's slightly more drying though.",
              formal: "This particular formulation is designed to be transfer-resistant; while not entirely transfer-proof, it demonstrates commendable longevity. Should a completely transfer-proof option be desired, we offer a liquid lip stain that endures throughout the day without displacement. However, it is important to note that it may impart a slightly drier sensation.",
            },
            keyPhrases: [
              { en: "transfer-proof", zh: "不沾杯/不脱色" },
              { en: "transfer-resistant", zh: "抗沾染的" },
              { en: "lip stain", zh: "唇釉" },
              { en: "budging", zh: "移动/掉色" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "This one's transfer-resistant — it holds up well. For totally smudge-proof, try our liquid lip stain. It won't budge all day.",
                textZh: "这支抗沾染——表现很好。想完全不沾杯的话，试试我们的唇釉。全天不掉色。",
                actionHint: "选择适合的口红类型",
                frequency: "common",
              },
              {
                textEn:
                  "It won't transfer much, but if you need zero transfer, the lip stain is your best bet. Just a heads up — it's a bit drying.",
                textZh: "不太会沾。但如果要完全不沾杯，唇釉最好。不过提醒一下——会稍微干。",
                actionHint: "权衡持久度和保湿",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the foundation and this lipstick. Can I also get some free samples to try at home?",
            textZh: "我买粉底和这支口红。能拿一些免费试用装回家试吗？",
            culturalNote: "在美国化妆品店索要免费小样是很普遍且被接受的行为。",
            casualVersion: "I'll take the foundation and this lipstick. Any free samples to try at home?",
            commonMistake: {
              wrong: "Can I take some samples to try at home?",
              correct: "Can I get some free samples to try at home?",
              explanation: "“拿”翻译成 “take” 在这个语境中听起来不够礼貌和自然，用 “get” 更合适。",
            },
            formalityVariants: {
              casual: "I'll take the foundation and this lipstick. Can I get some free samples?",
              standard: "I'll take the foundation and this lipstick. Can I also get some free samples to try at home?",
              formal: "I would like to purchase the foundation and this lipstick. Would it be possible to receive some complimentary samples for home trial?",
            },
          },
          {
            speaker: "them",
            role: "美容顾问",
            textEn:
              "Of course! I'll give you samples of our best-selling eye cream and a new serum we just launched. With your purchase, you also qualify for our free gift set — it includes a travel-size mascara and a makeup bag.",
            textZh:
              "当然！我给您我们最畅销眼霜的试用装和一款新上市的精华。凭您这次消费，还有资格获得免费赠品套装——包含旅行装睫毛膏和一个化妆包。",
            culturalNote: "美国零售店常常提供免费试用装，顾客主动索要很常见，不是贪小便宜。",
            commonMistake: {
              wrong: "I give you some samples.",
              correct: "I'll give you samples...",
              explanation: "\"I'll give you\" 是更自然的提供方式。",
            },
            casualVersion: "Absolutely! I'll give you samples of our best-selling eye cream and a new serum. Plus, with your purchase, you qualify for our free gift set—travel-size mascara and a makeup bag.",
            formalityVariants: {
              casual: "Absolutely! I'll give you samples of our best-selling eye cream and a new serum. And with your purchase, you get our free gift set—travel-size mascara and a makeup bag.",
              standard: "Of course! I'll give you samples of our best-selling eye cream and a new serum we just launched. With your purchase, you also qualify for our free gift set — it includes a travel-size mascara and a makeup bag.",
              formal: "Certainly. I will provide you with samples of our top-selling eye cream and a recently launched serum. Furthermore, with your current purchase, you are eligible for a complimentary gift set, which features a travel-sized mascara and a cosmetic bag.",
            },
            keyPhrases: [
              { en: "free samples", zh: "免费试用装" },
              { en: "just launched", zh: "新上市的" },
              { en: "qualify for", zh: "有资格获得" },
              { en: "free gift set", zh: "免费赠品套装" },
              { en: "travel-size", zh: "旅行装" },
              { en: "mascara", zh: "睫毛膏" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I'll throw in samples of our eye cream and new serum. Plus, with this purchase you get a free gift set!",
                textZh: "我送你我们眼霜和新精华的试用装。这次消费还有免费赠品套装！",
                actionHint: "享受赠品",
                frequency: "common",
              },
              {
                textEn:
                  "Here are some samples to try at home. And your purchase qualifies for a free mascara and makeup bag!",
                textZh: "这些试用装带回家试。你这次消费还能获得免费睫毛膏和化妆包！",
                actionHint: "领取赠品",
                frequency: "occasional",
              },
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
            textEn:
              "Hi, I'm looking for a book but I can't remember the exact title. It's a recent bestseller about habits.",
            textZh: "你好，我在找一本书但记不清确切书名。是一本关于习惯的畅销新书。",
            casualVersion:
              "Hey, looking for a book, but can't quite remember the name. It's a recent bestseller about habits.",
            commonMistake: {
              wrong: "I'm finding a book.",
              correct: "I'm looking for a book.",
              explanation: '"find" 指找到结果，"look for" 指寻找过程。',
            },
            formalityVariants: {
              casual: "Hey, looking for a book, but can't remember the name. It's a new bestseller on habits.",
              standard:
                "Hi, I'm looking for a book but I can't remember the exact title. It's a recent bestseller about habits.",
              formal:
                "Good morning/afternoon, I am seeking a particular book, though I cannot recall its precise title. I understand it's a recent bestseller concerning the topic of habits.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "That sounds like it could be 'Atomic Habits' by James Clear. It's been on our bestseller list for months. It's in the self-help section — aisle 4, second shelf from the top.",
            textZh:
              "听起来可能是James Clear的《原子习惯》。已经在我们的畅销榜上好几个月了。在自我提升区——第4条过道，从上数第二层。",
            commonMistake: {
              wrong: "It sounds like 'Atomic Habits'. It is bestseller for months.",
              correct: "That sounds like 'Atomic Habits'. It's been on our bestseller list for months.",
              explanation: "\"be on the bestseller list\" 是固定搭配。",
            },
            keyPhrases: [
              { en: "bestseller", zh: "畅销书" },
              { en: "self-help section", zh: "自我提升区" },
              { en: "aisle", zh: "过道" },
              { en: "shelf", zh: "书架层" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Are you thinking of 'Atomic Habits'? It's super popular right now. Let me show you where it is.",
                textZh: "你是想找《原子习惯》吗？现在非常火。我带你去看看。",
                actionHint: "跟着店员走",
                frequency: "common",
              },
            ],
            casualVersion:
              "Sounds like 'Atomic Habits' by James Clear. Been on our bestseller list for ages. It's in self-help — aisle 4, second shelf from the top.",
            formalityVariants: {
              casual:
                "Sounds like 'Atomic Habits' by James Clear. It's been a hit. Find it in self-help, aisle 4, second shelf.",
              standard:
                "That sounds like it could be 'Atomic Habits' by James Clear. It's been on our bestseller list for months. It's in the self-help section — aisle 4, second shelf from the top.",
              formal:
                "Based on your description, that strongly suggests 'Atomic Habits' by James Clear. It has consistently remained on our bestseller list for several months. You will find it situated in our self-help section, specifically in aisle 4, on the second shelf from the top.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, that's the one! Do you also have an audiobook version?",
            textZh: "对，就是这本！有有声书版本吗？",
            casualVersion: "Yep, that's it! Got an audiobook version too?",
            commonMistake: {
              wrong: "Do you also have audiobook version?",
              correct: "Do you also have an audiobook version?",
              explanation: '"audiobook version" 前需加不定冠词 "an"。',
            },
            formalityVariants: {
              casual: "Yep, that's it! Got an audiobook?",
              standard: "Yes, that's the one! Do you also have an audiobook version?",
              formal:
                "Indeed, that is precisely the title I was referencing. Might you also carry an audiobook rendition of it?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "We don't sell audiobooks in the store, but you can get it on Audible or through our store's app. If you prefer a physical copy, we have the hardcover for $27 and the paperback for $16.",
            textZh:
              "我们店里不卖有声书，但你可以在Audible或我们书店的App上买到。如果你喜欢纸质版，精装本27美元，平装本16美元。",
            commonMistake: {
              wrong: "We don't sell audiobook in store, but you can get it at Audible.",
              correct: "We don't sell audiobooks in the store, but you can get it on Audible.",
              explanation: "\"audiobook\" 要用复数\"audiobooks\"；在平台用\"on\"。",
            },
            keyPhrases: [
              { en: "audiobook", zh: "有声书" },
              { en: "hardcover", zh: "精装本" },
              { en: "paperback", zh: "平装本" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We don't carry audiobooks, but Audible has it. For physical copies, the hardcover is $27 and paperback is $16.",
                textZh: "我们不卖有声书，但Audible上有。纸质版的话精装27美元，平装16美元。",
                actionHint: "选择版本",
                frequency: "common",
              },
              {
                textEn:
                  "No audiobooks in store, but you can grab it on our app. We have it in hardcover and paperback here.",
                textZh: "店里没有有声书，但可以在我们App上买。这里有精装和平装。",
                actionHint: "选纸质还是电子",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Nah, we don't sell audiobooks here. But you can grab it on Audible or our app. If you want a real book, hardcover's $27, paperback's $16.",
            formalityVariants: {
              casual:
                "Nope, no audiobooks here. You can get it on Audible or our app. Physical book-wise, hardcover's $27, paperback's $16.",
              standard:
                "We don't sell audiobooks in the store, but you can get it on Audible or through our store's app. If you prefer a physical copy, we have the hardcover for $27 and the paperback for $16.",
              formal:
                "Regrettably, we do not stock audiobooks within the physical establishment; however, it is available for purchase via Audible or our proprietary store application. Should you prefer a tangible edition, the hardcover is priced at $27 and the paperback at $16.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'll take the paperback. Can you also recommend something similar? I want to keep reading about personal development.",
            textZh: "我要平装本。能推荐类似的书吗？我想继续读个人成长类的。",
            casualVersion:
              "I'll grab the paperback. Got any similar recommendations? Wanna keep reading personal development stuff.",
            commonMistake: {
              wrong: "I want the paperback.",
              correct: "I'll take the paperback.",
              explanation: '"I want" 听起来像命令，"I\'ll take" 表决定，更礼貌自然。',
            },
            formalityVariants: {
              casual: "I'll grab the paperback. Any other good personal development books you'd recommend?",
              standard:
                "I'll take the paperback. Can you also recommend something similar? I want to keep reading about personal development.",
              formal:
                "I will proceed with the paperback edition. Furthermore, might you be able to suggest any comparable titles? I am keen to continue exploring literature on personal development.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "If you liked 'Atomic Habits,' you'd probably enjoy 'The Power of Now' by Eckhart Tolle or 'Deep Work' by Cal Newport. We also have a 'Staff Picks' table near the entrance with our personal recommendations.",
            textZh:
              "如果你喜欢《原子习惯》，可能也会喜欢Eckhart Tolle的《当下的力量》或Cal Newport的《深度工作》。入口附近还有一个'店员推荐'桌，是我们的个人推荐。",
            commonMistake: {
              wrong: "If you like 'Atomic Habits', you might also like 'The Power of Now'.",
              correct: "If you liked 'Atomic Habits', you might also enjoy 'The Power of Now'.",
              explanation: "问推荐书时，通常会说 \"If you liked X...\" 表示你已经读过并且喜欢。",
            },
            keyPhrases: [
              { en: "recommend", zh: "推荐" },
              { en: "personal development", zh: "个人成长" },
              { en: "Staff Picks", zh: "店员推荐" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "If you liked that, try 'Deep Work' or 'The Power of Now.' Also, check out our Staff Picks table by the door.",
                textZh: "喜欢那本的话，试试《深度工作》或《当下的力量》。也看看门口的店员推荐桌。",
                actionHint: "去看看推荐区",
                frequency: "common",
              },
              {
                textEn:
                  "We have a personal development shelf with tons of similar titles. Our Staff Picks section might have something great too.",
                textZh: "个人成长书架上有很多类似的。店员推荐区也可能有好的。",
                actionHint: "去相关书架看看",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "If you liked 'Atomic Habits,' you'd probably dig 'The Power of Now' or 'Deep Work.' We also have a 'Staff Picks' table by the entrance with our faves.",
            formalityVariants: {
              casual:
                "If 'Atomic Habits' was your thing, check out 'The Power of Now' or 'Deep Work.' We also have a 'Staff Picks' table up front with other suggestions.",
              standard:
                "If you liked 'Atomic Habits,' you'd probably enjoy 'The Power of Now' by Eckhart Tolle or 'Deep Work' by Cal Newport. We also have a 'Staff Picks' table near the entrance with our personal recommendations.",
              formal:
                "Should you have found 'Atomic Habits' to your liking, I would anticipate you would also appreciate 'The Power of Now' by Eckhart Tolle or 'Deep Work' by Cal Newport. Additionally, we maintain a 'Staff Picks' display table positioned near the entrance, featuring our curated recommendations.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'll check those out. Do you have a section for books in other languages? I'd love to find something in Chinese.",
            textZh: "我去看看。你们有外语书区吗？我想找中文书。",
            casualVersion: "Cool, I'll check 'em out. Got a foreign language section? Wanna find something in Chinese.",
            commonMistake: {
              wrong: "Do you have foreign books section?",
              correct: "Do you have a section for books in other languages?",
              explanation: '"foreign books" 说法不自然，常用 "books in other languages"。',
            },
            formalityVariants: {
              casual: "Alright, I'll check 'em. Got a foreign language section? Hoping to find something in Chinese.",
              standard:
                "I'll check those out. Do you have a section for books in other languages? I'd love to find something in Chinese.",
              formal:
                "I shall certainly examine those selections. May I inquire if you maintain a dedicated section for literature in other languages? I am particularly interested in locating something in Chinese.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "We have a small foreign language section in the back corner, near the children's books. The Chinese selection isn't huge, but we have some popular translated novels and a few original Chinese titles. If you're looking for something specific, we can order it for you — usually takes about a week.",
            textZh:
              "后面角落有一个小的外语书区，在儿童书旁边。中文书不算多，但有一些热门翻译小说和几本中文原著。如果你要找特定的书，我们可以帮你订，通常一周左右到。",
            commonMistake: {
              wrong: "We have few Chinese books, but can order it for you.",
              correct: "We have a few Chinese books, but we can order it for you.",
              explanation: "\"a few\"表示“一些”，\"few\"表示“几乎没有”。",
            },
            keyPhrases: [
              { en: "foreign language section", zh: "外语书区" },
              { en: "order it for you", zh: "帮你订" },
              { en: "translated novels", zh: "翻译小说" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We have a small foreign language area in the back. The Chinese selection is limited, but we can order anything you need.",
                textZh: "后面有一个小的外语区。中文书不多，但可以帮你订任何想要的书。",
                actionHint: "去后面看看或让店员帮忙订",
                frequency: "common",
              },
              {
                textEn:
                  "Foreign books are near the children's section. If we don't have what you need in Chinese, I can order it — about a week.",
                textZh: "外语书在儿童区旁边。中文的如果没有，可以帮你订——大约一周到。",
                actionHint: "先去看看现有的",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, we got a small foreign language spot in the back corner, by the kids' books. Not a huge Chinese selection, but we've got some popular translated novels and a few original Chinese titles. If you need something specific, we can order it — usually takes about a week.",
            formalityVariants: {
              casual:
                "Yeah, small foreign language spot in the back, near the kids' books. Chinese selection's not huge, but we've got some translated novels and original titles. We can order specific stuff for you – takes about a week.",
              standard:
                "We have a small foreign language section in the back corner, near the children's books. The Chinese selection isn't huge, but we have some popular translated novels and a few original Chinese titles. If you're looking for something specific, we can order it for you — usually takes about a week.",
              formal:
                "Indeed, we maintain a modest foreign language section situated in the rear corner of the store, adjacent to the children's literature. While our Chinese selection is not extensive, it does feature several popular translated novels and a limited number of original Chinese titles. Should you require a specific item, we are able to place an order for you; delivery typically requires approximately one week.",
            },
          },
          {
            speaker: "you",
            textEn: "That's good to know. Is there a café in the bookstore? I'd love to sit and browse for a while.",
            textZh: "这个信息有用。书店里有咖啡馆吗？我想坐下来慢慢看。",
            casualVersion: "Good to know. Is there a cafe here? Wanna sit and browse a bit.",
            commonMistake: {
              wrong: "It is good to know.",
              correct: "That's good to know.",
              explanation: '直接说 "Good to know" 很自然，加 "It is" 显得生硬。',
            },
            formalityVariants: {
              casual: "Cool, thanks. Got a cafe? Wanna sit and look around.",
              standard:
                "That's good to know. Is there a café in the bookstore? I'd love to sit and browse for a while.",
              formal:
                "I appreciate that information. May I inquire if there is a café located within the bookstore premises? I would find it quite enjoyable to sit and peruse the selections at leisure.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Yes! Our café is on the second floor. You're welcome to take any books up there to browse while you have a coffee. Just bring them back downstairs if you decide not to purchase. We also have reading events and book clubs if you're interested!",
            textZh:
              "有！咖啡馆在二楼。欢迎带书上去边喝咖啡边看。如果决定不买，带回楼下就行。如果感兴趣的话，我们还有阅读活动和读书会！",
            commonMistake: {
              wrong: "You can bring books to read when you drink coffee.",
              correct: "You're welcome to bring books up there to read while you enjoy your coffee.",
              explanation: "\"bring up\"表示“带上去”；\"while you enjoy your coffee\"更自然地表达边喝边看。",
            },
            keyPhrases: [
              { en: "browse", zh: "浏览/翻阅" },
              { en: "reading events", zh: "阅读活动" },
              { en: "book clubs", zh: "读书会" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The café is upstairs! Feel free to grab some books and read while you have a coffee. Just bring them back if you don't buy.",
                textZh: "咖啡馆在楼上！可以带书上去边喝咖啡边看。不买的话带回来就行。",
                actionHint: "带书去咖啡馆看",
                frequency: "common",
              },
              {
                textEn:
                  "We have a café on the second floor. You're welcome to browse books there. We also do reading events if you're interested.",
                textZh: "二楼有咖啡馆。欢迎带书上去看。我们也有阅读活动，如果感兴趣的话。",
                actionHint: "上楼边喝咖啡边看书",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep! Cafe's on the second floor. Feel free to take any books up there to browse with your coffee. Just bring 'em back down if you don't buy. We also do reading events and book clubs if you're interested!",
            culturalNote: "书店允许带书到咖啡区阅读是中国书店少见的礼遇",
            formalityVariants: {
              casual:
                "Yeah! Cafe's upstairs on the second floor. Grab any books you want, take 'em up there to read with your coffee. Just bring 'em back down if you don't get 'em. Plus, we've got reading events and book clubs if that's your thing!",
              standard:
                "Yes! Our café is on the second floor. You're welcome to take any books up there to browse while you have a coffee. Just bring them back downstairs if you decide not to purchase. We also have reading events and book clubs if you're interested!",
              formal:
                "Affirmative! Our café is conveniently situated on the second floor. You are most welcome to bring any books upstairs for perusal while you enjoy a beverage. Kindly return them downstairs should you opt not to purchase. Additionally, we host various reading events and book clubs, should those be of interest to you.",
            },
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
            casualVersion: "Gotta grab a science book for a 10-year-old's birthday. Any ideas?",
            culturalNote: "美国买礼物常会直接说明需求，不需过多寒暄",
            commonMistake: {
              wrong: "I need to buy a book for a 10 years old boy who loves science.",
              correct: "I need to buy a book for a 10-year-old who loves science.",
              explanation: "年龄作定语修饰名词时，用连字符连接且单位用单数，如 '10-year-old'。",
            },
            formalityVariants: {
              casual: "Need a science book, birthday gift for a 10-year-old. Got any ideas?",
              standard:
                "I need to buy a book as a birthday gift for a 10-year-old who loves science. Do you have any suggestions?",
              formal:
                "I am looking to purchase a book as a birthday gift for a 10-year-old child with an interest in science. Could you perhaps offer some recommendations?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Oh, great choice for a gift! For a science-loving 10-year-old, I'd highly recommend 'The Way Things Work' — it explains machines and technology with amazing illustrations. Or 'Women in Science' is beautiful and inspiring. We also have science experiment kits that pair well with books.",
            textZh:
              "哦，书做礼物太好了！给一个热爱科学的10岁孩子，我强烈推荐《万物运转的秘密》——用精美插图解释机器和技术。《科学界的女性》也很美很励志。我们还有科学实验套装，可以和书搭配。",
            commonMistake: {
              wrong: "I suggest 'The Way Things Work' for a 10-year-old science-loving kid.",
              correct: "For a science-loving 10-year-old, I'd highly recommend 'The Way Things Work'.",
              explanation: "\"science-loving 10-year-old\" 是一种自然地形容喜爱科学的十岁孩子的方式。",
            },
            casualVersion: "Oh, good call on a book! For a science-y 10-year-old, totally recommend 'The Way Things Work' - awesome illustrations for machines and tech. Or 'Women in Science' is cool and inspiring. Plus, we got science experiment kits that go with books.",
            formalityVariants: {
              casual: "Oh, good idea for a gift! For a science-y 10-year-old, I'd say 'The Way Things Work' is awesome – explains machines and tech with cool pictures. 'Women in Science' is also great and inspiring. And we've got science kits that go with books too.",
              standard: "Oh, that's a great choice for a gift! For a science-loving 10-year-old, I'd highly recommend 'The Way Things Work' – it explains machines and technology with amazing illustrations. 'Women in Science' is also beautiful and inspiring. We also have science experiment kits that pair well with books.",
              formal: "That is an excellent selection for a gift! For a 10-year-old with a keen interest in science, I would strongly suggest 'The Way Things Work,' as it elucidates mechanical and technological concepts with superb illustrations. Alternatively, 'Women in Science' is both aesthetically pleasing and motivational. We also stock complementary science experiment kits that can be paired with our books.",
            },
            keyPhrases: [
              { en: "birthday gift", zh: "生日礼物" },
              { en: "illustrations", zh: "插图" },
              { en: "inspiring", zh: "励志的" },
              { en: "experiment kits", zh: "实验套装" },
              { en: "pair well with", zh: "很搭配" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For a 10-year-old science fan, 'The Way Things Work' is a hit. We also have science kits that go great with it.",
                textZh: "给10岁的科学迷，《万物运转的秘密》特别受欢迎。我们还有配套的科学实验套装。",
                actionHint: "看看实验套装",
                frequency: "common",
              },
              {
                textEn:
                  "I'd suggest 'The Way Things Work' — kids love the illustrations. Or 'Women in Science' if you want something more inspiring.",
                textZh: "推荐《万物运转的秘密》——小朋友很喜欢里面的插图。想更励志的话有《科学界的女性》。",
                actionHint: "选择适合的书",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "The Way Things Work sounds perfect! Can you gift-wrap it for me?",
            textZh: "《万物运转的秘密》听起来很好！能帮我礼品包装吗？",
            casualVersion: "'The Way Things Work' sounds spot on! Can you wrap it up?",
            commonMistake: {
              wrong: "Can you package it for me?",
              correct: "Can you gift-wrap it for me?",
              explanation: "Package 通常指包裹或包装货物，礼品包装用 gift-wrap 或 wrap (it up)。",
            },
            formalityVariants: {
              casual: "'The Way Things Work' sounds great! Can you wrap it?",
              standard: "'The Way Things Work' sounds perfect! Could you gift-wrap it for me?",
              formal: "'The Way Things Work' seems like an ideal choice. Would it be possible for you to gift-wrap it for me?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Absolutely! We offer free gift wrapping. Would you like a birthday-themed wrap or something more classic? We can also include a gift receipt so they can exchange it if they already have it.",
            textZh:
              "当然！我们提供免费礼品包装。要生日主题的还是经典款？我们还可以附一张礼品收据，这样如果他们已经有了可以换。",
            commonMistake: {
              wrong: "We offer free gift wrap. Do you want birthday theme wrap?",
              correct: "We offer free gift wrapping. Would you like a birthday-themed wrap?",
              explanation: "\"gift wrapping\"是固定词组；\"birthday-themed\"是形容词。",
            },
            casualVersion: "Totally! Free gift wrapping. Want birthday-themed or classic? We can toss in a gift receipt too, so they can swap it if they already own it.",
            culturalNote: "美国商店提供礼品收据很普遍，方便收礼人退换，是送礼文化一部分。",
            formalityVariants: {
              casual: "Yep! Free gift wrapping. Birthday wrap or classic? We can put in a gift receipt so they can swap it if they have it.",
              standard: "Absolutely! We offer free gift wrapping. Would you prefer a birthday-themed wrap or something more classic? We can also include a gift receipt, which allows them to exchange it if they happen to already own it.",
              formal: "Certainly! We do provide complimentary gift wrapping services. Please indicate whether you would prefer a birthday-themed motif or a more classic design. Furthermore, we can include a gift receipt to facilitate an exchange should they already possess the item.",
            },
            keyPhrases: [
              { en: "gift-wrap", zh: "礼品包装" },
              { en: "birthday-themed", zh: "生日主题的" },
              { en: "gift receipt", zh: "礼品收据" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Gift wrapping is free! Birthday or classic wrap? I can also add a gift receipt so they can exchange it.",
                textZh: "免费包装！要生日主题的还是经典的？还可以附礼品收据方便换。",
                actionHint: "选择包装风格",
                frequency: "common",
              },
              {
                textEn:
                  "We wrap for free. Want birthday paper or something more simple? And a gift receipt just in case?",
                textZh: "我们免费包装。要生日的纸还是简洁的？要不要附礼品收据以防万一？",
                actionHint: "选包装和收据",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Birthday-themed, please! And yes, a gift receipt would be great. Can I also write something on a card?",
            textZh: "生日主题的！对，附礼品收据。能写个贺卡吗？",
            casualVersion: "Birthday theme, please! Yeah, gift receipt's good. Can I write on a card too?",
            commonMistake: {
              wrong: "Can I also write a card?",
              correct: "Can I also write something on a card?",
              explanation: "Write a card 指写一封信/卡片，Write on a card 指在卡片上写字。",
            },
            formalityVariants: {
              casual: "Birthday wrap, please! Yeah, gift receipt's perfect. Can I write on a card?",
              standard: "Birthday-themed, please! And yes, a gift receipt would be great. May I also write something on a card?",
              formal: "I would prefer the birthday-themed wrapping, please. And yes, a gift receipt would be highly appreciated. Would it be possible for me to inscribe a message on a card as well?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Of course! Here's a blank card. Take your time writing your message, and I'll attach it to the wrapped book. Is there anything else you'd like to add?",
            textZh: "当然！给您一张空白贺卡。慢慢写，我会把它附在包好的书上。还想加什么吗？",
            commonMistake: {
              wrong: "Here's a card. Put it on the book. Anything else want to add?",
              correct: "Here's a blank card for you. I'll attach it to the wrapped book. Anything else I can add?",
              explanation: "\"attach to\"更自然；“Anything else I can add?”是更礼貌的问法。",
            },
            casualVersion: "Sure! Here's a blank card. No rush on your message, I'll stick it on the wrapped book. Anything else?",
            formalityVariants: {
              casual: "Yep! Here's a blank card. Write your message, no hurry, I'll put it on the book. Anything else?",
              standard: "Of course! Here is a blank card for you. Please take your time writing your message, and I will attach it to the wrapped book. Is there anything else you would like to add?",
              formal: "Certainly! I have a blank card for you here. Please feel free to take your time in composing your message, and I shall affix it to the wrapped book. Is there anything further you would wish to include?",
            },
            keyPhrases: [
              { en: "blank card", zh: "空白贺卡" },
              { en: "attach", zh: "附上" },
            ],
            alternativeExpressions: [
              {
                textEn: "Here's a card — write whatever you'd like, and I'll attach it to the book.",
                textZh: "给你一张贺卡——写什么都行，我帮你附在书上。",
                actionHint: "写贺卡留言",
                frequency: "common",
              },
              {
                textEn: "Take your time with the message! I'll wrap the book while you write.",
                textZh: "慢慢写！你写的时候我先把书包好。",
                actionHint: "写好后交给店员",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Actually, can I add a $20 gift card to the bookstore? That way they can pick their own book too.",
            textZh: "对了，能加一张20美元的书店礼品卡吗？这样他们也可以自己选一本。",
            casualVersion: "Actually, can I throw in a $20 gift card for the bookstore? So they can grab their own book too.",
            commonMistake: {
              wrong: "Can I add $20 gift card to the bookstore?",
              correct: "Can I add a $20 gift card to the bookstore?",
              explanation: "数词+单位+名词 作定语修饰名词时，单位用单数，且需要冠词。",
            },
            formalityVariants: {
              casual: "Oh, wait, can I add a $20 gift card for the bookstore? That way they can pick their own book too.",
              standard: "Actually, could I add a $20 gift card to the bookstore? That way they can also select their own book.",
              formal: "Actually, would it be possible to include a $20 gift card for the bookstore? This would enable them to choose an additional book of their preference.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Great idea! I'll add a $20 gift card. So that's the book at $18.99, gift card at $20, and gift wrapping is free. Your total is $38.99 plus tax. Would you like me to put everything in a gift bag?",
            textZh:
              "好主意！我加一张20美元礼品卡。书18.99美元，礼品卡20美元，包装免费。总计38.99美元加税。要放在礼品袋里吗？",
            commonMistake: {
              wrong: "Book 18.99, gift card 20. Total is 38.99. You want gift bag?",
              correct: "The book is $18.99, plus the $20 gift card... Total comes to $38.99 plus tax. Would you like a gift bag with that?",
              explanation: "报价通常会说“plus tax”（加税）；“Would you like...？”是更礼貌的问法。",
            },
            casualVersion: "Good call! I'll add the $20 gift card. So that's $18.99 for the book, $20 for the card, and wrapping's free. Total's $38.99 plus tax. Want it all in a gift bag?",
            formalityVariants: {
              casual: "Smart idea! I'll get that $20 gift card in there. So, book's $18.99, card's $20, and wrapping's on us. Total comes to $38.99 plus tax. You want it all in a gift bag?",
              standard: "That's a great idea! I will add a $20 gift card. So, the book is $18.99, the gift card is $20, and gift wrapping is free. Your total will be $38.99 plus tax. Would you like me to place everything in a gift bag?",
              formal: "An excellent suggestion! I shall include a $20 gift card. Therefore, the book is $18.99, the gift card is $20, and the gift wrapping service is complimentary. Your grand total will be $38.99, exclusive of tax. Would you prefer that I package everything within a gift bag?",
            },
            keyPhrases: [
              { en: "gift card", zh: "礼品卡" },
              { en: "plus tax", zh: "加税" },
              { en: "gift bag", zh: "礼品袋" },
            ],
            alternativeExpressions: [
              {
                textEn: "Great idea! Book plus a $20 gift card — $38.99 plus tax. Want me to put it all in a gift bag?",
                textZh: "好主意！书加20美元礼品卡——38.99美元加税。要放进礼品袋吗？",
                actionHint: "选择是否要袋子",
                frequency: "common",
              },
              {
                textEn: "I'll add a $20 gift card. That's $38.99 total before tax. Shall I bag everything nicely?",
                textZh: "加一张20美元礼品卡。税前总共38.99美元。要帮你装好吗？",
                actionHint: "确认总价",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. A gift bag would be perfect. Thank you for all your help!",
            textZh: "好的，礼品袋就很好。谢谢你的帮助！",
            commonMistake: {
              wrong: "Yes. Gift bag good. Thank you for your help.",
              correct: "Yes, please. A gift bag would be perfect. Thank you for all your help!",
              explanation: "\"A gift bag would be perfect\"更完整自然；\"for all your help\"表示感谢所有帮助。",
            },
            casualVersion: "Yeah, a gift bag's perfect. Thanks for everything!",
            formalityVariants: {
              casual: "Yep, gift bag's perfect. Thanks for the help!",
              standard: "Yes, please. A gift bag would be perfect. Thank you for all your help!",
              formal: "Yes, that would be appreciated. A gift bag would be quite suitable. Thank you for your comprehensive assistance!",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "My pleasure! That's going to be a wonderful birthday gift. I'm sure they'll love it. Happy birthday to the little scientist!",
            textZh: "我的荣幸！这会是一份很棒的生日礼物。他们一定会喜欢的。祝小科学家生日快乐！",
            commonMistake: {
              wrong: "You are welcome! This is a wonderful gift. They will like it.",
              correct: "My pleasure! That'll make a wonderful birthday gift. They're going to love it.",
              explanation: "\"My pleasure\"比\"You're welcome\"更客气；\"That'll make a wonderful gift\"更地道。",
            },
            casualVersion: "My pleasure! That'll be an awesome birthday gift. I'm sure they'll love it. Happy birthday to the little scientist!",
            formalityVariants: {
              casual: "Anytime! That's gonna be a super birthday gift. They'll totally love it. Happy birthday to the little scientist!",
              standard: "My pleasure! That's going to be a wonderful birthday gift. I'm sure they'll love it. Happy birthday to the little scientist!",
              formal: "It was my pleasure to assist you! That is sure to be a truly wonderful birthday gift. I am confident that they will be delighted with it. Happy birthday to the young scientist!",
            },
            alternativeExpressions: [
              {
                textEn:
                  "They're going to love it! Here's your receipt and the gift bag. Happy birthday to the little scientist!",
                textZh: "他们一定会喜欢的！这是收据和礼品袋。祝小科学家生日快乐！",
                actionHint: "拿好礼品袋",
                frequency: "common",
              },
              {
                textEn: "What a thoughtful gift! I'm sure they'll be thrilled. Enjoy the birthday celebration!",
                textZh: "多有心的礼物！他们肯定会很开心。祝生日派对顺利！",
                actionHint: "礼貌道别",
                frequency: "occasional",
              },
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
            textEn:
              "Hi, I'm looking for some souvenirs to bring back for my family. What are the most popular local gifts?",
            textZh: "你好，我想买一些纪念品带回去给家人。最受欢迎的当地礼物是什么？",
            casualVersion: "Hey, wanna grab some souvenirs for the family. What's the hot stuff here?",
            commonMistake: {
              wrong: "I want to buy some souvenirs",
              correct: "I'd like to buy some souvenirs",
              explanation: "直接说'I want'听起来太生硬。用'I'd like'更礼貌。",
            },
            formalityVariants: {
              casual: "Hey, wanna get some souvenirs for the family. What's popular around here?",
              standard: "Hi, I'd like to buy some souvenirs for my family to take back home. What are the most popular local gifts?",
              formal: "Good morning/afternoon. I am interested in purchasing some local souvenirs for my family. Could you recommend your most popular items?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Welcome! Our most popular souvenirs are the handmade pottery, local honey, and these beautiful woven scarves. The pottery is made by local artisans and each piece is unique. What kind of gifts are you looking for?",
            textZh:
              "欢迎！最受欢迎的纪念品是手工陶器、本地蜂蜜和这些漂亮的编织围巾。陶器是当地工匠做的，每件都是独一无二的。您想找什么类型的礼物？",
            commonMistake: {
              wrong: "What gifts do you want?",
              correct: "What kind of gifts are you looking for?",
              explanation: "“Do you want” 听起来直接，不如 “are you looking for” 委婉和自然。",
            },
            casualVersion: "Hey! Most popular stuff's the pottery, local honey, and these cool scarves. Pot's made by local artists, each one's unique. What kinda gifts you lookin' for?",
            formalityVariants: {
              casual: "Hey! Our best sellers are the pottery, local honey, and these cool scarves. What are you looking for?",
              standard: "Welcome! Our most popular souvenirs are the handmade pottery, local honey, and these beautiful woven scarves. The pottery is made by local artisans and each piece is unique. What kind of gifts are you looking for?",
              formal: "Welcome! Our most highly regarded souvenirs include our handmade pottery, locally sourced honey, and our exquisitely woven scarves. The pottery, crafted by regional artisans, is particularly noteworthy as each piece is unique. Could you elaborate on the types of gifts you are seeking?",
            },
            keyPhrases: [
              { en: "souvenirs", zh: "纪念品" },
              { en: "handmade pottery", zh: "手工陶器" },
              { en: "local artisans", zh: "当地工匠" },
              { en: "unique", zh: "独一无二的" },
              { en: "woven scarves", zh: "编织围巾" },
            ],
            alternativeExpressions: [
              {
                textEn: "The best-sellers are our local jams and the handcrafted ornaments. Tourists love them!",
                textZh: "最畅销的是本地果酱和手工装饰品。游客们特别喜欢！",
                actionHint: "可以看看特色商品",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I need gifts for about five people — my parents, my sister, and two friends. Something small and easy to pack.",
            textZh: "我需要给大约五个人买礼物——我父母、姐姐和两个朋友。小巧的，方便装行李。",
            casualVersion: "Gifts for like five people—parents, sis, two friends. Needs to be small, easy to pack.",
            commonMistake: {
              wrong: "I need gifts for five person",
              correct: "I need gifts for about five people",
              explanation: "person是单数，people是复数。'五个人'用'five people'。",
            },
            formalityVariants: {
              casual: "Gotta get gifts for five people—parents, sister, two friends. Needs to be small and easy to pack.",
              standard: "I need gifts for about five people — my parents, my sister, and two friends. Something small and easy to pack.",
              formal: "I require gifts for approximately five individuals, specifically my parents, my sister, and two acquaintances. I would prefer items that are compact and convenient for travel.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "For easy-to-pack gifts, I'd suggest our fridge magnets featuring local landmarks — they're $5 each. The mini bottles of local olive oil or hot sauce make great gifts too, at $8 each. And these hand-painted keychains are $6 — very popular with tourists.",
            textZh:
              "方便携带的礼物的话，我推荐我们的冰箱贴，上面有当地地标——每个5美元。本地橄榄油或辣酱小瓶也是很棒的礼物，每瓶8美元。这些手绘钥匙扣6美元——游客非常喜欢。",
            commonMistake: {
              wrong: "My recommendation is our refrigerator magnets.",
              correct: "I'd recommend our refrigerator magnets.",
              explanation: "“I'd recommend” (I would recommend) 更委婉有礼，是常见用法。",
            },
            casualVersion: "For easy-to-pack stuff, definitely the fridge magnets, got local landmarks, they're 5 bucks each. Or small bottles of local olive oil/hot sauce, 8 bucks. And these hand-painted keychains are 6 – tourists go crazy for 'em.",
            formalityVariants: {
              casual: "Easy-to-pack stuff? Try the fridge magnets with local landmarks, $5. Small bottles of olive oil or hot sauce are $8. And tourists love these $6 hand-painted keychains.",
              standard: "For easy-to-pack gifts, I'd recommend our fridge magnets, featuring local landmarks – they're $5 each. Small bottles of local olive oil or hot sauce are also great gifts, at $8 each. These hand-painted keychains are $6 – tourists absolutely love them.",
              formal: "Regarding gifts that are easily transportable, I would suggest our refrigerator magnets, which depict various local landmarks, priced at $5 each. Our smaller bottles of local olive oil or artisanal hot sauce also make excellent presents, at $8 per bottle. Additionally, these hand-painted keychains are quite popular among our visitors, retailing for $6.",
            },
            keyPhrases: [
              { en: "fridge magnets", zh: "冰箱贴" },
              { en: "landmarks", zh: "地标" },
              { en: "hand-painted", zh: "手绘的" },
              { en: "keychains", zh: "钥匙扣" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Magnets and keychains are the easiest to pack. We also have mini olive oil bottles for $8 — great gifts.",
                textZh: "冰箱贴和钥匙扣最好装。我们还有小瓶橄榄油8美元——很不错的礼物。",
                actionHint: "选择容易携带的礼物",
                frequency: "common",
              },
              {
                textEn:
                  "For something compact, try the keychains or magnets. The olive oil and hot sauce are also crowd-pleasers.",
                textZh: "想要小巧的，钥匙扣或冰箱贴不错。橄榄油和辣酱也很受欢迎。",
                actionHint: "根据需求选择",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I love the keychains! I'll take five of those. And two bottles of the olive oil. Are these made locally?",
            textZh: "我喜欢钥匙扣！来五个。再加两瓶橄榄油。这些是本地产的吗？",
            casualVersion: "Love the keychains! I'll grab five. Plus two olive oils. They local?",
            commonMistake: {
              wrong: "I will take five",
              correct: "I'll take five",
              explanation: "买东西时用'I'll take'比'I will take'更自然地表达即时决定。",
            },
            formalityVariants: {
              casual: "Keychains are awesome! I'll take five. Two olive oils too. Local stuff?",
              standard: "I love the keychains! I'll take five. And two bottles of olive oil. Are these locally produced?",
              formal: "I find the keychains quite appealing. I will purchase five of them, in addition to two bottles of olive oil. May I inquire if these items are locally produced?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Yes, everything in this section is locally made. The keychains are hand-painted by a local artist, and the olive oil comes from a family farm just outside the city. We have a certificate of authenticity for the pottery and crafts if you need one.",
            textZh:
              "是的，这个区域的所有东西都是本地生产的。钥匙扣是当地艺术家手绘的，橄榄油来自城外的一个家庭农场。如果您需要，陶器和工艺品有真品证书。",
            commonMistake: {
              wrong: "Everything here is local production.",
              correct: "Everything in this section is locally made.",
              explanation: "“Locally made” 是固定搭配，表示本地制造。",
            },
            casualVersion: "Yeah, everything here's local. Keychains are hand-painted by a local artist, and the olive oil's from a family farm right outta town. Got authenticity certs for the pottery/crafts if ya want.",
            formalityVariants: {
              casual: "Yup, all this stuff's locally made. Keychains by a local artist, olive oil from a family farm near here. We have authenticity certs if you need one.",
              standard: "Yes, everything in this section is locally made. The keychains are hand-painted by a local artist, and the olive oil comes from a family farm just outside the city. We have a certificate of authenticity for the pottery and crafts if you need one.",
              formal: "Yes, all items within this particular section are domestically produced. The keychains are individually hand-painted by a local artist, and the olive oil originates from a family-owned farm situated just beyond the city limits. We can provide a certificate of authenticity for our pottery and other crafted items upon request.",
            },
            keyPhrases: [
              { en: "locally made", zh: "本地生产的" },
              { en: "family farm", zh: "家庭农场" },
              { en: "certificate of authenticity", zh: "真品证书" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Everything here is made locally. The keychains are hand-painted, and the olive oil comes from a nearby farm. We have certificates for the crafts too.",
                textZh: "这里的东西都是本地产的。钥匙扣是手绘的，橄榄油来自附近的农场。工艺品还有证书。",
                actionHint: "了解产品来源",
                frequency: "common",
              },
              {
                textEn:
                  "All locally sourced! A local artist paints the keychains, and the olive oil is from a family farm just outside town.",
                textZh: "全是本地的！钥匙扣是当地艺术家画的，橄榄油来自城外一个家庭农场。",
                actionHint: "了解手工艺品背景",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Can the olive oil go through airport security? I'm worried about liquids in carry-on.",
            textZh: "橄榄油能过机场安检吗？我担心随身行李的液体限制。",
            casualVersion: "Olive oil okay for airport security? Worried 'bout liquid limits for carry-on.",
            commonMistake: {
              wrong: "Can olive oil pass airport security?",
              correct: "Can the olive oil go through airport security?",
              explanation: "pass security通常指人通过安检，物品用go through更自然。",
            },
            formalityVariants: {
              casual: "Is the olive oil cool for airport security? Thinking 'bout carry-on liquid rules.",
              standard: "Can the olive oil go through airport security? I'm concerned about liquid restrictions for carry-on luggage.",
              formal: "Will the olive oil be permitted through airport security? My concern pertains to the liquid restrictions applicable to carry-on luggage.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Good question! The bottles are 100ml each, so they should be fine for carry-on as long as they fit in your liquids bag. To be safe, I'd recommend packing them in your checked luggage. I can wrap them in bubble wrap to prevent breakage.",
            textZh:
              "好问题！瓶子每个100毫升，只要放在液体袋里随身携带应该没问题。保险起见，建议放在托运行李里。我可以用气泡膜包好防碎。",
            commonMistake: {
              wrong: "For safe, I recommend putting them in checked luggage.",
              correct: "To be safe, I'd recommend putting them in your checked luggage.",
              explanation: "“To be safe” 是固定短语，表示为了安全起见。用“recommend”更自然。",
            },
            casualVersion: "Good question! They're 100ml each, so totally fine for carry-on if they fit in your liquids bag. To be super safe though, I'd say check 'em. I can bubble wrap 'em so they don't break.",
            formalityVariants: {
              casual: "Good question! They're 100ml, so fine for carry-on if they fit in your liquids bag. But to be safe, maybe check 'em. I can bubble wrap 'em for you.",
              standard: "Good question! The bottles are 100ml each, so they should be fine for carry-on as long as they fit in your liquids bag. To be safe, I'd recommend putting them in your checked luggage. I can wrap them in bubble wrap to prevent breakage.",
              formal: "That's an excellent inquiry. Each bottle contains 100ml, which should fall within the permissible limits for carry-on luggage, provided they are placed within your designated liquids bag. However, for maximum security, I would advise placing them in your checked baggage. I can provide protective bubble wrap to mitigate any risk of breakage.",
            },
            keyPhrases: [
              { en: "liquids bag", zh: "液体袋" },
              { en: "checked luggage", zh: "托运行李" },
              { en: "bubble wrap", zh: "气泡膜" },
              { en: "prevent breakage", zh: "防碎" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The bottles are 100ml, so carry-on should be fine. But to be safe, pack them in checked luggage. I'll bubble-wrap them.",
                textZh: "每瓶100毫升，随身带应该没问题。保险起见放托运行李。我帮你包气泡膜。",
                actionHint: "考虑放托运行李",
                frequency: "common",
              },
              {
                textEn:
                  "They should pass security since they're small. I'll wrap them up tight so they won't break in your bag.",
                textZh: "体积小应该能过安检。我包紧一点，放包里不会碎。",
                actionHint: "让店员包好",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Bubble wrap would be great. How much is everything altogether?",
            textZh: "气泡膜包起来太好了。一共多少钱？",
            commonMistake: {
              wrong: "How much is total?",
              correct: "How much is everything altogether?",
              explanation: "“Altogether” 或 “in total” 更自然地表示总价。",
            },
            casualVersion: "Bubble wrap'd be awesome. Total cost?",
            formalityVariants: {
              casual: "Bubble wrap, yes please! What's the total?",
              standard: "Bubble wrap would be great. How much is everything altogether?",
              formal: "The provision of bubble wrap would be most appreciated. Could you please provide the total cost for all items?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Five keychains at $6 each is $30, two olive oils at $8 each is $16 — so $46 total. If you spend over $50, you get 10% off. Would you like to add anything to reach the discount?",
            textZh:
              "五个钥匙扣每个6美元共30美元，两瓶橄榄油每瓶8美元共16美元——总计46美元。消费满50美元可以打九折。要再加点什么凑折扣吗？",
            commonMistake: {
              wrong: "you get discount 10%.",
              correct: "you get 10% off.",
              explanation: "“10% off” 是打折的常见表达，不要说成 “discount 10%”.",
            },
            casualVersion: "Five keychains at 6 bucks each is 30, two olive oils at 8 is 16 — so 46 total. Spend over 50, get 10% off. Wanna grab anything else for the discount?",
            formalityVariants: {
              casual: "Five keychains ($6 each) is $30, two olive oils ($8 each) is $16 – that's $46. Over $50 gets 10% off. Want to add something for the discount?",
              standard: "Five keychains at $6 each is $30, two olive oils at $8 each is $16 — so $46 total. If you spend over $50, you get 10% off. Would you like to add anything to reach the discount?",
              formal: "Five keychains, priced at $6 each, amount to $30. Two bottles of olive oil, at $8 each, total $16. Therefore, the subtotal is $46. Please note that a 10% discount is applied to purchases exceeding $50. Would you care to add any additional items to qualify for this discount?",
            },
            keyPhrases: [
              { en: "altogether", zh: "一共" },
              { en: "10% off", zh: "打九折" },
              { en: "reach the discount", zh: "凑到折扣" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That's $46 total. Spend over $50 and you'll get 10% off everything. Want to add something small?",
                textZh: "一共46美元。满50打九折。要再加点什么吗？",
                actionHint: "加一件凑满减",
                frequency: "common",
              },
              {
                textEn:
                  "You're $4 away from our 10% discount. A magnet or a postcard would put you over — and save you money.",
                textZh: "离九折折扣就差4美元。加个冰箱贴或明信片就够了——反而更省钱。",
                actionHint: "算算是否划算",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, I'll add one fridge magnet. That brings it to $51, right? With the 10% discount?",
            textZh: "好的，加一个冰箱贴。就是51美元对吧？打九折？",
            casualVersion: "Yeah, I'll grab a fridge magnet. So, 51 bucks, then 10% off?",
            commonMistake: {
              wrong: "I will add a fridge magnet.",
              correct: "I'll add a fridge magnet.",
              explanation: "口语中表达即时决定时，'I'll' (I will) 比 'I will' 更常用。",
            },
            formalityVariants: {
              casual: "Okay, I'll get a fridge magnet too. So $51, then 10% off?",
              standard: "Sure, I'll add a fridge magnet. So that's $51, right? And then 10% off?",
              formal: "Certainly, I will include a fridge magnet. That would bring the total to $51, correct? And then the 10% discount would be applied?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Exactly! $51 minus 10% comes to $45.90. Smart shopping! I'll wrap everything up nicely for you.",
            textZh: "没错！51美元减10%是45.90美元。会买！我帮您都包好。",
            culturalNote: "“Smart shopping!” 是美国人称赞买得划算时的口语表达，和中文的“会买”意思接近。",
            commonMistake: {
              wrong: "$51 minus 10% is $45.90. I help you wrap everything.",
              correct: "$51 minus 10% comes to $45.90. I'll go ahead and wrap everything for you.",
              explanation: "“comes to” 在计算总数时更自然。“go ahead and wrap” 是地道的说法。",
            },
            casualVersion: "Yep! $51 minus 10% is $45.90. Good deal! I'll wrap it all up.",
            formalityVariants: {
              casual: "Exactly! $51 minus 10% is $45.90. Nice! I'll get it all wrapped.",
              standard: "Exactly! $51 minus 10% comes to $45.90. Smart shopping! I'll get everything wrapped up for you.",
              formal: "Precisely! $51 less 10% totals $45.90. An excellent purchase! I shall proceed to package everything for you.",
            },
            alternativeExpressions: [
              {
                textEn: "That's $51, minus 10% brings it to $45.90. Nice move! I'll wrap everything up for you.",
                textZh: "51美元打九折是45.90。聪明！我帮你都包好。",
                actionHint: "等店员包装",
                frequency: "common",
              },
              {
                textEn: "With the magnet, you hit the discount — $45.90 total. Smart shopping! Let me bag that up.",
                textZh: "加了冰箱贴正好够折扣——总共45.90。会买！我装起来。",
                actionHint: "确认省了钱",
                frequency: "occasional",
              },
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
            textEn:
              "I love this large ceramic vase, but there's no way it'll fit in my suitcase. Can you ship it to China?",
            textZh: "我很喜欢这个大陶瓷花瓶，但肯定放不进行李箱。能寄到中国吗？",
            casualVersion: "Love this big ceramic vase, but no way it'll fit in my suitcase. Can you ship it to China?",
            commonMistake: {
              wrong: "There is no method it will fit into my suitcase.",
              correct: "There's no way it'll fit in my suitcase.",
              explanation: "“No way” 是地道口语，表示“不可能”，比直译“没有办法”更自然。",
            },
            formalityVariants: {
              casual: "Love this big ceramic vase, but no way it'll fit in my bag. Can you ship it to China?",
              standard:
                "I love this large ceramic vase, but there's no way it will fit in my suitcase. Can you ship it to China?",
              formal:
                "I truly admire this substantial ceramic vase; however, it simply won't accommodate my luggage. Would it be possible to arrange international shipping for this item to China?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Yes, we offer international shipping! For a piece this size to China, it would be about $45 to $60 depending on the carrier. We pack everything very carefully with foam and double-boxing. Standard shipping takes 2 to 3 weeks.",
            textZh:
              "可以的，我们提供国际邮寄！这个尺寸寄到中国大约45到60美元，取决于快递公司。我们会用泡沫和双层包装仔细打包。标准邮寄需要2到3周。",
            casualVersion: "Yeah, we do international shipping! For this size to China, it's like $45-$60, depends on the carrier. We pack it super carefully, foam and double-box it. Standard shipping's 2-3 weeks.",
            commonMistake: {
              wrong: "it would be about $45 to $60 depending the carrier.",
              correct: "it would be about $45 to $60 depending on the carrier.",
              explanation: "“depend” 后面常跟介词 “on” 表示“取决于”。",
            },
            formalityVariants: {
              casual: "Yeah, we do international shipping! For this size to China, it's like $45-$60, depends on the carrier. We pack it super carefully, foam and double-box it. Standard shipping's 2-3 weeks.",
              standard: "Yes, we offer international shipping! For a piece this size to China, it would be about $45 to $60 depending on the carrier. We pack everything very carefully with foam and double-boxing. Standard shipping takes 2 to 3 weeks.",
              formal: "Yes, we do indeed provide international shipping services. For an item of this dimension destined for China, the estimated cost would range from approximately $45 to $60, contingent upon the chosen carrier. We ensure meticulous packaging using protective foam and double-boxing for maximum security. Our standard shipping typically requires a transit time of two to three weeks.",
            },
            keyPhrases: [
              { en: "international shipping", zh: "国际邮寄" },
              { en: "carrier", zh: "快递公司" },
              { en: "foam", zh: "泡沫" },
              { en: "double-boxing", zh: "双层包装" },
              { en: "standard shipping", zh: "标准邮寄" },
            ],
            vocabNotes: {
              "double-boxing": {
                meaningInContext:
                  "在这句话里表示：把物品装在一个箱子里，外面再套一个更大的箱子，两层箱子之间填充缓冲材料，确保安全",
                similarUsage: "类似用法：We double-box all fragile items.（所有易碎品我们都双层包装）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Shipping to China is about $45 to $60 depending on speed. Standard takes 2-3 weeks. We pack everything with foam and double-box it.",
                textZh: "寄到中国大约45到60美元，看快慢。标准2到3周。我们用泡沫和双层包装。",
                actionHint: "选择运输方式",
                frequency: "common",
              },
              {
                textEn:
                  "We can ship it! Standard is $45, takes a few weeks. We use foam and double-boxing so it'll be safe.",
                textZh: "可以寄！标准45美元，要几周。我们用泡沫和双层箱，很安全。",
                actionHint: "了解运费和时间",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there insurance in case it breaks during shipping?",
            textZh: "有运输保险吗？万一运输途中碎了呢？",
            casualVersion: "Got insurance if it breaks shipping?",
            commonMistake: {
              wrong: "Do you have insurance in case it breaks?",
              correct: "Is there insurance in case it breaks?",
              explanation: "询问物品或服务是否包含保险，用 “Is there...” 更地道。",
            },
            formalityVariants: {
              casual: "Got insurance if it breaks shipping?",
              standard: "Is there insurance in case it breaks during shipping?",
              formal: "Do you offer insurance coverage in the event of breakage during transit?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Yes, we include basic insurance that covers the value of the item up to $200. For the full declared value, the premium insurance is an additional $15. I'd definitely recommend it for ceramics. We've shipped hundreds of pieces and rarely have issues, but it's good peace of mind.",
            textZh:
              "有，我们包含基本保险，最高赔付200美元。如果要全额声明价值，高级保险额外15美元。陶瓷的话我绝对建议买。我们寄过几百件，很少出问题，但有保险更安心。",
            casualVersion: "Yeah, basic insurance covers up to $200. For full value, premium's another $15. I'd totally recommend it for ceramics. We've shipped tons, rarely have issues, but it's good for peace of mind.",
            commonMistake: {
              wrong: "but it's good for the heart to be calm.",
              correct: "but it's good peace of mind.",
              explanation: "“Peace of mind” 是地道表达，指“安心，心安理得”，直译会不自然。",
            },
            formalityVariants: {
              casual: "Yeah, basic insurance covers up to $200. For full value, premium's another $15. I'd totally recommend it for ceramics. We've shipped tons, rarely have issues, but it's good for peace of mind.",
              standard: "Yes, we include basic insurance that covers the value of the item up to $200. For the full declared value, the premium insurance is an additional $15. I'd definitely recommend it for ceramics. We've shipped hundreds of pieces and rarely have issues, but it's good peace of mind.",
              formal: "Yes, we do provide basic insurance coverage for the item's value up to $200. Should you desire full declared value coverage, our premium insurance is available for an additional $15. I would strongly advise this option for ceramic items. While we have successfully shipped hundreds of pieces with very few incidents, this offers a greater degree of assurance.",
            },
            keyPhrases: [
              { en: "insurance", zh: "保险" },
              { en: "declared value", zh: "声明价值" },
              { en: "premium insurance", zh: "高级保险" },
              { en: "peace of mind", zh: "安心" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Basic insurance covers up to $200. For full value, premium insurance is an extra $15. I'd recommend it for ceramics.",
                textZh: "基本保险最高赔200美元。要全额保障的话加15美元。陶瓷的话推荐加上。",
                actionHint: "考虑加保险",
                frequency: "common",
              },
              {
                textEn:
                  "We include $200 insurance. If you want full coverage, it's just $15 more. Totally worth it for something fragile.",
                textZh: "含200美元保险。全额保障只要加15美元。易碎品完全值得。",
                actionHint: "决定保险方案",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the premium insurance. Will there be any customs fees when it arrives in China?",
            textZh: "我买高级保险。到中国时会有关税吗？",
            casualVersion: "Okay, I'll take the premium. Any customs fees when it gets to China?",
            commonMistake: {
              wrong: "Will there be any customs tax when it arrives in China?",
              correct: "Will there be any customs fees when it arrives in China?",
              explanation: "“Customs fees” 是指清关时需要支付的费用，比笼统的 “tax” 更准确。",
            },
            formalityVariants: {
              casual: "Okay, I'll take the premium. Any customs fees when it gets to China?",
              standard: "I'll take the premium insurance. Will there be any customs fees when it arrives in China?",
              formal: "I will proceed with the premium insurance. Regarding its arrival in China, will there be any applicable customs duties or import fees?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "There might be import duties depending on the declared value and Chinese customs regulations. We'll fill out the customs form accurately for you. Items under a certain value are often exempt. I'd suggest declaring it as 'handmade decorative art' for the customs category.",
            textZh:
              "可能会有进口关税，取决于声明价值和中国海关规定。我们会为您如实填写报关单。低于一定价值的物品通常免税。建议在海关类别上申报为'手工装饰艺术品'。",
            culturalNote: "海关申报“礼品”或“装饰品”是中国和美国通用做法，降低被征税可能。",
            casualVersion: "Might be import duties, depends on the declared value and China's customs rules. We'll fill out the customs form right for you. Stuff under a certain value's often exempt. I'd say declare it as 'handmade decorative art' for the category.",
            commonMistake: {
              wrong: "Items under a certain value are often free.",
              correct: "Items under a certain value are often exempt.",
              explanation: "“Exempt” 意为“免除、豁免”，更专业和准确， “free” 听起来像“免费”。",
            },
            formalityVariants: {
              casual: "Might be import duties, depends on the declared value and China's customs rules. We'll fill out the customs form right for you. Stuff under a certain value's often exempt. I'd say declare it as 'handmade decorative art' for the category.",
              standard: "There might be import duties depending on the declared value and Chinese customs regulations. We'll fill out the customs form accurately for you. Items under a certain value are often exempt. I'd suggest declaring it as 'handmade decorative art' for the customs category.",
              formal: "There is a possibility of import duties, contingent upon the declared value and adherence to Chinese customs regulations. We will diligently complete the customs declaration form on your behalf. It is worth noting that items below a specific value threshold are frequently exempt. I would recommend classifying it as 'handmade decorative art' for the customs category.",
            },
            keyPhrases: [
              { en: "import duties", zh: "进口关税" },
              { en: "customs form", zh: "报关单" },
              { en: "exempt", zh: "免税的" },
              { en: "declared value", zh: "声明价值" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Customs fees depend on the value. We'll mark it as a personal gift, which sometimes helps with duties.",
                textZh: "关税取决于价值。我们会标注为个人礼物，有时候有助于减免关税。",
                actionHint: "了解当地进口规定",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds good. Can I get a tracking number so I can follow the shipment?",
            textZh: "好的。能给我一个追踪号码跟踪包裹吗？",
            casualVersion: "Sounds good. Can I get a tracking number to follow it?",
            commonMistake: {
              wrong: "Can I get a tracking number to check the package?",
              correct: "Can I get a tracking number so I can follow the shipment?",
              explanation: "“Follow the shipment” 是地道表达，指持续追踪包裹状态，比 “check the package” 更全面。",
            },
            formalityVariants: {
              casual: "Sounds good. Can I get a tracking number to follow it?",
              standard: "Sounds good. Can I get a tracking number so I can follow the shipment?",
              formal: "That sounds acceptable. May I obtain a tracking number to monitor the progress of the shipment?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Absolutely! Once we ship it, usually within 2 business days, we'll email you the tracking number. You can track it online all the way to delivery. I'll also send you a photo of how we packed it. Here, let me get your email and shipping address.",
            textZh:
              "当然！我们寄出后（通常2个工作日内）会把追踪号码发到您邮箱。您可以在线追踪整个运输过程直到送达。我还会把打包好的照片发给您。给我您的邮箱和收货地址。",
            casualVersion: "Totally! Once we ship it, usually within 2 biz days, we'll email you the tracking number. You can track it online 'til it's delivered. I'll also send a pic of how we packed it. So, what's your email and shipping address?",
            commonMistake: {
              wrong: "You can track it online until delivery.",
              correct: "You can track it online all the way to delivery.",
              explanation: "“All the way to delivery” 强调全程跟踪，语气更完整。",
            },
            formalityVariants: {
              casual: "Totally! Once we ship it, usually within 2 biz days, we'll email you the tracking number. You can track it online 'til it's delivered. I'll also send a pic of how we packed it. So, what's your email and shipping address?",
              standard: "Absolutely! Once we ship it, usually within 2 business days, we'll email you the tracking number. You can track it online all the way to delivery. I'll also send you a photo of how we packed it. Here, let me get your email and shipping address.",
              formal: "Certainly! Upon shipment, typically within two business days, we will provide the tracking number via email. You will then be able to monitor its progress online until its final delivery. Furthermore, I will furnish you with a photograph illustrating our packaging method. If you could please provide your email address and shipping address, that would be helpful.",
            },
            keyPhrases: [
              { en: "tracking number", zh: "追踪号码" },
              { en: "business days", zh: "工作日" },
              { en: "delivery", zh: "送达" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We'll email you the tracking number once it ships. You can follow it all the way to your door.",
                textZh: "寄出后会邮件发追踪号。可以一路跟踪到家。",
                actionHint: "提供邮箱地址",
                frequency: "common",
              },
              {
                textEn:
                  "You'll get a tracking number by email within a couple days. I'll also send a photo of how we packed it.",
                textZh: "两天内会邮件发追踪号。我还会发打包好的照片给你。",
                actionHint: "留下联系方式",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's my address. The vase is $85, plus $55 shipping and $15 insurance — is that $155 total?",
            textZh: "地址在这里。花瓶85美元，加55美元运费和15美元保险——总共155美元？",
            casualVersion: "Here's my address. Vase is $85, plus $55 shipping and $15 insurance — so, $155 total?",
            commonMistake: {
              wrong: "The total is $155?",
              correct: "Is that $155 total?",
              explanation: "询问总价时，用 “Is that X total?” 是更常见的确认方式。",
            },
            formalityVariants: {
              casual: "Here's my address. Vase is $85, plus $55 shipping and $15 insurance — so, $155 total?",
              standard: "Here's my address. The vase is $85, plus $55 shipping and $15 insurance — is that $155 total?",
              formal: "My address is as follows. The vase is $85, with an additional $55 for shipping and $15 for insurance. Does this calculate to a grand total of $155?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "That's correct — $155 total. I'll email you a confirmation with all the details. If there are any issues with delivery, just contact us and we'll sort it out. Thank you for your purchase — this is a beautiful piece, and I'm sure it'll arrive safely!",
            textZh:
              "没错——总共155美元。我会发一封确认邮件，附上所有细节。如果收货有任何问题，联系我们，我们会处理好。感谢您的购买——这是一件很美的作品，一定会安全到达！",
            casualVersion: "Yep, $155 total. I'll email a confirmation with all the deets. Any issues with delivery, just hit us up, we'll sort it. Thanks for buying — this is a beautiful piece, sure it'll arrive safe!",
            commonMistake: {
              wrong: "we will solve the problem.",
              correct: "we'll sort it out.",
              explanation: "“Sort it out” 是地道表达，指“解决（问题）”，更口语和自然。",
            },
            formalityVariants: {
              casual: "Yep, $155 total. I'll email a confirmation with all the deets. Any issues with delivery, just hit us up, we'll sort it. Thanks for buying — this is a beautiful piece, sure it'll arrive safe!",
              standard: "That's correct — $155 total. I'll email you a confirmation with all the details. If there are any issues with delivery, just contact us and we'll sort it out. Thank you for your purchase — this is a beautiful piece, and I'm sure it'll arrive safely!",
              formal: "That calculation is correct — the total comes to $155. I will send you an email confirmation containing all the pertinent details. Should any unforeseen issues arise regarding the delivery, please do not hesitate to contact us, and we will promptly resolve them. We appreciate your purchase; this is indeed an exquisite item, and I am confident it will reach its destination securely!",
            },
            keyPhrases: [
              { en: "confirmation", zh: "确认邮件" },
              { en: "sort it out", zh: "处理好" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That's $155 total. I'll email you a confirmation. If anything goes wrong with delivery, just reach out and we'll handle it.",
                textZh: "总共155美元。我会发确认邮件。配送有任何问题联系我们就行。",
                actionHint: "保存确认邮件",
                frequency: "common",
              },
              {
                textEn:
                  "All set — $155. You'll get a confirmation email with tracking info. It's a beautiful piece, it'll arrive safe!",
                textZh: "好了——155美元。会收到带追踪信息的确认邮件。这件很美，一定安全到达！",
                actionHint: "确认邮件地址正确",
                frequency: "occasional",
              },
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
            culturalNote: "Vibe是美国年轻人常用俚语，指氛围、感觉。直接说目的而非客套话很常见。",
            casualVersion: "Hey, love the vibe here. Do you guys specialize in a specific era?",
            formalityVariants: {
              casual: "Hey, love the vibe here. Do you guys specialize in a specific era?",
              standard: "Hi! I love the vibe of this shop. Do you specialize in any particular era?",
              formal:
                "Good morning/afternoon. I find the atmosphere of your establishment quite appealing. Could you inform me if you specialize in items from a particular historical era?",
            },
          },
          {
            speaker: "them",
            role: "店主",
            textEn:
              "Thanks! We focus mainly on 70s, 80s, and 90s clothing. We get new inventory every week. The racks on the left are organized by decade, and on the right by clothing type. Feel free to dig around — the best finds are usually hidden!",
            textZh:
              "谢谢！我们主要做70、80和90年代的服装。每周有新货到。左边的衣架按年代分，右边按服装类型分。随便翻翻——最好的东西通常藏在里面！",
            culturalNote: "“dig around”在这里是“随便翻翻”的意思，指可以在商品中仔细寻找，不必拘束。对初次接触的中国人可能会觉得不礼貌",
            commonMistake: {
              wrong: "We have new goods every week.",
              correct: "We get new inventory every week.",
              explanation: "Inventory是存货/商品总称，更专业；goods偏泛指。",
            },
            keyPhrases: [
              { en: "era", zh: "年代" },
              { en: "inventory", zh: "库存/新货" },
              { en: "organized by decade", zh: "按年代分类" },
              { en: "dig around", zh: "翻找/淘" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Welcome! We've got a mix of everything from the 60s to the 2000s. New stuff comes in every Tuesday and Friday.",
                textZh: "欢迎！从60年代到2000年代什么都有。每周二和周五来新货。",
                actionHint: "留意到货日",
                frequency: "common",
              },
            ],
            casualVersion:
              "Thanks! Yeah, mostly 70s, 80s, 90s stuff. Get new stuff weekly. Left racks are by decade, right ones by type. Just dig around — best finds are usually kinda hidden!",
            formalityVariants: {
              casual:
                "Thanks! Yeah, mostly 70s, 80s, 90s stuff. Get new stuff weekly. Left racks are by decade, right ones by type. Just dig around — best finds are usually kinda hidden!",
              standard:
                "Thanks! We focus mainly on 70s, 80s, and 90s clothing. We get new inventory every week. The racks on the left are organized by decade, and on the right by clothing type. Feel free to dig around — the best finds are usually hidden!",
              formal:
                "Thank you. Our primary focus is on apparel from the 1970s, 1980s, and 1990s. We receive new inventory on a weekly basis. The displays to your left are categorized by decade, while those to your right are organized by clothing type. Please feel at liberty to browse thoroughly; often, the most exceptional items require a bit of searching.",
            },
          },
          {
            speaker: "you",
            textEn: "I'm looking for a vintage denim jacket. Something from the 90s maybe.",
            textZh: "我在找一件复古牛仔夹克。90年代的可能。",
            commonMistake: {
              wrong: "I look for a vintage denim jacket. 90s maybe.",
              correct: "I'm looking for a vintage denim jacket. Maybe 90s.",
              explanation: "I'm looking for 更自然。'Maybe 90s'是常用缩略语。",
            },
            casualVersion: "Looking for a vintage denim jacket. Maybe 90s.",
            formalityVariants: {
              casual: "Looking for a vintage denim jacket. Maybe 90s.",
              standard: "I'm looking for a vintage denim jacket. Something from the 90s maybe.",
              formal: "I am currently seeking a vintage denim jacket, potentially one originating from the 1990s.",
            },
          },
          {
            speaker: "them",
            role: "店主",
            textEn:
              "Great taste! We have several over here. This Levi's one is from '92 — it's in excellent condition. Original buttons, no tears, just some nice natural fading. This one's a medium.",
            textZh:
              "好眼光！这边有几件。这件Levi's是92年的——状态很好。原版纽扣，没有破损，只有自然的褪色。这件是中号。",
            commonMistake: {
              wrong: "Here have several. This Levi's is classic.",
              correct: "We have several over here. This Levi's is a classic.",
              explanation: "Here have是中式表达。'is a classic'更完整。",
            },
            keyPhrases: [
              { en: "vintage", zh: "复古的/二手的" },
              { en: "excellent condition", zh: "状态很好" },
              { en: "original buttons", zh: "原版纽扣" },
              { en: "tears", zh: "破损" },
              { en: "fading", zh: "褪色" },
            ],
            vocabNotes: {
              fading: {
                meaningInContext: "在这句话里表示：牛仔布随时间自然褪色，在二手市场这反而是加分项，被视为'有味道'",
                similarUsage: "类似用法：The natural fading gives it character.（自然褪色让它更有韵味）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Check this out — a '92 Levi's in great shape. Original everything, just some nice natural wear. It's a medium.",
                textZh: "看看这件——92年的Levi's，状态很好。都是原装的，就有点自然磨损。中号。",
                actionHint: "看看是否喜欢",
                frequency: "common",
              },
              {
                textEn: "This one's from '92 — all original buttons, no rips, and the fading gives it real character.",
                textZh: "这件92年的——纽扣全是原装，没有破损，褪色让它特别有味道。",
                actionHint: "了解衣服状况",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Good taste! Got a few over here. This Levi's is from '92 — super good condition. Original buttons, no rips, just some cool natural fading. It's a medium.",
            formalityVariants: {
              casual:
                "Good taste! Got a few over here. This Levi's is from '92 — super good condition. Original buttons, no rips, just some cool natural fading. It's a medium.",
              standard:
                "Great taste! We have several over here. This Levi's one is from '92 — it's in excellent condition. Original buttons, no tears, just some nice natural fading. This one's a medium.",
              formal:
                "An excellent selection! We have several options available for your consideration in this area. This particular Levi's garment dates back to 1992 and is presented in excellent vintage condition. It features all original buttons, exhibits no signs of tearing, and displays only a desirable natural fading. This item is sized as a medium.",
            },
          },
          {
            speaker: "you",
            textEn: "It looks great! How much is it?",
            textZh: "看起来不错！多少钱？",
            casualVersion: "Looks great! How much?",
            commonMistake: {
              wrong: "How much is the price?",
              correct: "How much is it?",
              explanation: "直接问 'How much is it?' 即可，不需要加 'price'。",
            },
            formalityVariants: {
              casual: "Looks great! How much?",
              standard: "It looks great! How much is it?",
              formal: "That appears to be an excellent piece. May I inquire about its price?",
            },
          },
          {
            speaker: "them",
            role: "店主",
            textEn:
              "This one is $65. For a genuine 90s Levi's in this condition, that's actually a really good deal. Similar ones go for over $100 online.",
            textZh: "这件65美元。对于这个状态的正品90年代Levi's来说，其实很划算。网上类似的卖100多美元。",
            commonMistake: {
              wrong: "This one is $65. For a genuine 90s Levi's this condition, it's good deal.",
              correct: "This one is $65. For a genuine 90s Levi's in this condition, it's a good deal.",
              explanation: "in this condition是固定短语，'a good deal'更自然。",
            },
            keyPhrases: [
              { en: "genuine", zh: "正品的" },
              { en: "good deal", zh: "划算" },
              { en: "go for", zh: "卖到/售价" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It's $65. For a genuine 90s Levi's in this condition, that's a steal. They go for way more online.",
                textZh: "65美元。这个状态的正品90年代Levi's，真的很值。网上卖得贵多了。",
                actionHint: "考虑是否购买",
                frequency: "common",
              },
              {
                textEn:
                  "$65 for this piece. It's real vintage — original buttons, great condition. Similar ones sell for over $100 online.",
                textZh: "这件65美元。真正的古着——原装扣子，状态很好。网上类似的卖100多。",
                actionHint: "了解市场价格",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "This one's $65. For a real 90s Levi's in this condition, that's actually a pretty good deal. Similar ones go for over $100 online.",
            formalityVariants: {
              casual:
                "This one's $65. For a real 90s Levi's in this condition, that's actually a pretty good deal. Similar ones go for over $100 online.",
              standard:
                "This one is $65. For a genuine 90s Levi's in this condition, that's actually a really good deal. Similar ones go for over $100 online.",
              formal:
                "This particular item is priced at $65. Given its authenticity as a 1990s Levi's garment and its excellent condition, this represents a rather favorable acquisition. Comparable items frequently retail for in excess of $100 through online platforms.",
            },
          },
          {
            speaker: "you",
            textEn: "Can I try it on? And is there any wiggle room on the price?",
            textZh: "能试穿吗？价格有商量的余地吗？",
            culturalNote: "询问价格能否商量时，用'wiggle room'很地道。",
            casualVersion: "Can I try it on? Any wiggle room on the price?",
            commonMistake: {
              wrong: "Can I bargain?",
              correct: "Is there any wiggle room on the price?",
              explanation: "直接说 'bargain' 显得过于直白，'wiggle room' 更委婉自然。",
            },
            formalityVariants: {
              casual: "Can I try it on? Any wiggle room on the price?",
              standard: "Can I try it on? And is there any wiggle room on the price?",
              formal:
                "May I try this item on for size? Furthermore, is there any flexibility regarding the stated price?",
            },
          },
          {
            speaker: "them",
            role: "店主",
            textEn:
              "Fitting room is in the back. As for the price, I can do $55 if you're paying cash. We also have a 'buy 3, get the cheapest free' deal if you find other things you like.",
            textZh:
              "试衣间在后面。价格的话，如果付现金55美元可以。如果你还看中别的，我们有'买三件最便宜的免费'的活动。",
            commonMistake: {
              wrong: "Fitting room is in back. Price, I can $55 if pay cash.",
              correct: "Fitting room is in the back. As for the price, I can do $55 if you pay cash.",
              explanation: "As for the price是常用衔接语。'I can do'表达'我可以给到'。",
            },
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
              {
                textEn:
                  "Fitting room's in the back. For the price — I can do $55 cash. Or buy 3 and the cheapest one's free.",
                textZh: "试衣间在后面。价格的话——现金55可以。或者买三件最便宜的免单。",
                actionHint: "试穿后再决定",
                frequency: "common",
              },
              {
                textEn: "Go ahead and try it on. If you pay cash, I can knock it down to $55.",
                textZh: "去试穿吧。付现金的话我可以降到55美元。",
                actionHint: "先试穿看看",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Fitting room's in the back. Price-wise, I can do $55 if you pay cash. Also, we've got a 'buy 3, get the cheapest free' deal if you find other stuff you like.",
            culturalNote: "在美国一些小店现金支付可能获得折扣",
            formalityVariants: {
              casual:
                "Fitting room's in the back. Price-wise, I can do $55 if you pay cash. Also, we've got a 'buy 3, get the cheapest free' deal if you find other stuff you like.",
              standard:
                "Fitting room is in the back. As for the price, I can do $55 if you're paying cash. We also have a 'buy 3, get the cheapest free' deal if you find other things you like.",
              formal:
                "The fitting room facilities are located towards the rear of the establishment. Regarding the pricing, I am able to offer this item for $55 if the payment is made in cash. Additionally, we are currently running a promotion: 'buy three items and receive the least expensive one free of charge,' should you discover other items of interest.",
            },
          },
          {
            speaker: "you",
            textEn:
              "It fits perfectly! I'll take it at $55. Do you also buy second-hand clothes? I want to clear out some things from my closet.",
            textZh: "穿着正好！55美元我要了。你们也收二手衣服吗？我想清理一下衣柜。",
            commonMistake: {
              wrong: "It fits perfectly! I want it for $55. You also buy used clothes?",
              correct: "It fits perfectly! I'll take it for $55. Do you also buy used clothes? I want to clear out my closet.",
              explanation: "I'll take it表示购买意向，'Do you also buy'是正确提问。",
            },
            casualVersion:
              "Fits perfectly! I'll take it for $55. Do you guys buy used clothes too? Wanna clear out some stuff from my closet.",
            culturalNote: "美国卖二手衣有多种方式，商店会收购或寄卖",
            formalityVariants: {
              casual:
                "Fits perfectly! I'll take it for $55. Do you guys buy used clothes too? Wanna clear out some stuff from my closet.",
              standard:
                "It fits perfectly! I'll take it at $55. Do you also buy second-hand clothes? I want to clear out some things from my closet.",
              formal:
                "It fits splendidly! I will indeed purchase it for $55. Furthermore, I was wondering if your establishment also acquires pre-owned garments? I am looking to declutter certain items from my wardrobe.",
            },
          },
          {
            speaker: "them",
            role: "店主",
            textEn:
              "We do! We buy and also do consignment. For buying, I'll offer you a price on the spot. For consignment, we display it and split the sale price 60/40 — you get 60%. Just bring your items in and I'll take a look.",
            textZh:
              "收的！我们收购也做寄卖。收购的话，我当场给你报价。寄卖的话，我们展示出来，销售价格六四分——你拿60%。把东西带过来我看看。",
            culturalNote: "'寄卖'(consignment)是美国二手店常见模式。",
            commonMistake: {
              wrong: "We do! We buy and also consignment. For buying, I give you quote on spot. For consignment, we display it, you get 60% sale. Bring your items, I look.",
              correct: "We do! We buy and also do consignment. For buying, I can give you a quote on the spot. For consignment, we display it, and it's a 60/40 split — you get 60%. Bring your items in and I'll take a look.",
              explanation: "do consignment是固定用法。'on the spot'常用。'take a look'更地道。",
            },
            keyPhrases: [
              { en: "consignment", zh: "寄卖" },
              { en: "on the spot", zh: "当场" },
              { en: "split the sale price", zh: "销售价格分成" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We buy and consign. For buying, I'll give you a price now. For consignment, we sell it and you get 60% of the sale.",
                textZh: "收购和寄卖都做。收购的话当场给你报价。寄卖的话卖掉了你拿60%。",
                actionHint: "带东西来看看",
                frequency: "common",
              },
              {
                textEn:
                  "Bring your stuff in and I'll take a look. I can buy outright or do consignment — 60/40 split in your favor.",
                textZh: "把东西带来我看看。可以直接收购或者寄卖——六四分你拿大头。",
                actionHint: "了解两种方式的区别",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep! We buy and do consignment. For buying, I'll give you a price right away. For consignment, we put it out and split the sale 60/40 — you get 60%. Just bring your stuff in and I'll check it out.",
            formalityVariants: {
              casual:
                "Yep! We buy and do consignment. For buying, I'll give you a price right away. For consignment, we put it out and split the sale 60/40 — you get 60%. Just bring your stuff in and I'll check it out.",
              standard:
                "We do! We buy and also do consignment. For buying, I'll offer you a price on the spot. For consignment, we display it and split the sale price 60/40 — you get 60%. Just bring your items in and I'll take a look.",
              formal:
                "Indeed, we do engage in both direct purchasing and consignment services. For direct acquisition, I will provide an immediate valuation and offer. In the case of consignment, we exhibit the item and distribute the final sale price with a 60/40 split, wherein 60% is remitted to you. Kindly bring your items in at your convenience, and I will assess them.",
            },
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
            casualVersion: "Hey, that pocket watch in the display. Tell me about it?",
            commonMistake: {
              wrong: "I have interest in this pocket watch. Can you introduce it?",
              correct: "I'm interested in this pocket watch. Can you tell me about it?",
              explanation: '"introduce it" 听起来很生硬，应该用 "tell me about it" 或 "describe it"。',
            },
            formalityVariants: {
              casual: "Hey, that pocket watch in the case. Tell me about it?",
              standard: "I'm interested in this pocket watch in the display case. Can you tell me more about it?",
              formal:
                "Excuse me, I'm quite interested in the pocket watch displayed in this case. Would you be so kind as to provide me with more information regarding its history?",
            },
          },
          {
            speaker: "them",
            role: "店主",
            textEn:
              "Ah, wonderful eye! That's a 1920s Elgin pocket watch. It's gold-filled — not solid gold, but gold layered over base metal, which was standard for that era. The movement still works beautifully. Would you like to hold it?",
            textZh:
              "哦，好眼力！那是一个1920年代的Elgin怀表。包金的——不是纯金，而是在基础金属上镀金层，那个年代的标准工艺。机芯运转得很好。要拿在手上看看吗？",
            culturalNote: "'Gold-filled'指包金，非纯金，了解材质对价值判断很重要。",
            commonMistake: {
              wrong: "That's a 1920s Elgin pocket watch. It's gold-filled — not pure gold, but gold layer over base metal. Movement run well. You want hold it?",
              correct: "That's a 1920s Elgin pocket watch. It's gold-filled — not solid gold, but a layer of gold over base metal, standard for that era. The movement is running well. Would you like to hold it?",
              explanation: "gold-filled是专有名词。'running well'更地道。'Would you like to'是礼貌问法。",
            },
            casualVersion: "Oh, good eye! That's a '20s Elgin. Gold-filled, not solid, standard for that time. Still works great. Wanna hold it?",
            formalityVariants: {
              casual: "Oh, good eye! That's a '20s Elgin. Gold-filled, not solid, standard for that time. Still works great. Wanna hold it?",
              standard: "Ah, wonderful eye! That's a 1920s Elgin pocket watch. It's gold-filled — not solid gold, but gold layered over base metal, which was standard for that era. The movement still works beautifully. Would you like to hold it?",
              formal: "Indeed, an excellent selection. That particular piece is a 1920s Elgin pocket watch. It features a gold-filled casing, signifying a layer of gold applied over a base metal, a common manufacturing practice of its period. Furthermore, its mechanical movement remains in exquisite working order. Would you care to examine it more closely?",
            },
            keyPhrases: [
              { en: "pocket watch", zh: "怀表" },
              { en: "gold-filled", zh: "包金的" },
              { en: "solid gold", zh: "纯金" },
              { en: "base metal", zh: "基础金属" },
              { en: "movement", zh: "机芯" },
            ],
            vocabNotes: {
              "gold-filled": {
                meaningInContext:
                  "在这句话里表示：在基础金属外包裹一层真金，比镀金（gold-plated）厚得多也更耐久，但不是纯金",
                similarUsage:
                  "类似用法：Gold-filled jewelry lasts much longer than gold-plated.（包金首饰比镀金耐久得多）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "That's a 1920s Elgin — gold-filled case, still ticking beautifully. Want to hold it?",
                textZh: "那是1920年代的Elgin——包金表壳，走时还很好。要拿在手上看看吗？",
                actionHint: "近距离观察",
                frequency: "common",
              },
              {
                textEn:
                  "Great eye! It's an Elgin from the '20s. Gold-filled, not solid gold, but the movement is in perfect working order.",
                textZh: "好眼光！这是20年代的Elgin。包金的，不是纯金，但机芯运转完美。",
                actionHint: "了解材质",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "It's beautiful. What condition would you say it's in? I see some scratches on the case.",
            textZh: "很漂亮。你觉得状态怎么样？我看到表壳上有一些划痕。",
            casualVersion: "Looks good. How's the condition? Noticed some scratches.",
            commonMistake: {
              wrong: "What condition is it?",
              correct: "What condition would you say it's in?",
              explanation: "疑问句中 be 动词应在主语之后，更礼貌地询问状况应使用 \"would you say it's in\"。",
            },
            formalityVariants: {
              casual: "Looks good. How's the condition? Noticed some scratches.",
              standard: "It's beautiful. What condition would you say it's in? I see some scratches on the case.",
              formal: "It is indeed an exquisite piece. Could you kindly assess its overall condition? I have observed some minor surface abrasions on the casing.",
            },
          },
          {
            speaker: "them",
            role: "店主",
            textEn:
              "I'd rate it as 'very good' condition — which in antique grading means it shows normal wear consistent with its age but has no major damage. The scratches are superficial and expected on a 100-year-old piece. The crystal is original and uncracked, which adds to the value.",
            textZh:
              "我给它评为'很好'的状态——在古董评级里意味着有与年代一致的正常磨损但没有重大损伤。划痕是表面的，对一件100年的物品来说很正常。表镜是原装的而且没有裂纹，这增加了它的价值。",
            culturalNote: "'Wear and tear'指正常使用磨损，评估古董时常用。",
            commonMistake: {
              wrong: "I think it is very good, considering its age. The scratches are normal wear and tear, and crystal is clear.",
              correct: "I'd rate it as very good, considering its age. The scratches are consistent with normal wear and tear, and the crystal is clear.",
              explanation: "I'd rate it as更专业。'consistent with'表达符合。'wear and tear'是固定短语。",
            },
            casualVersion: "I'd say 'very good' — means normal wear for its age, no big damage. Scratches are just surface, totally normal for 100 years old. Crystal's original, no cracks, that's a plus.",
            formalityVariants: {
              casual: "I'd say 'very good' — means normal wear for its age, no big damage. Scratches are just surface, totally normal for 100 years old. Crystal's original, no cracks, that's a plus.",
              standard: "I'd rate it as 'very good' condition — which in antique grading means it shows normal wear consistent with its age but has no major damage. The scratches are superficial and expected on a 100-year-old piece. The crystal is original and uncracked, which adds to the value.",
              formal: "I would formally classify its condition as 'very good,' a designation within antique grading indicating typical wear commensurate with its age, devoid of significant structural damage. The aforementioned scratches are entirely superficial and characteristic of an item of its considerable antiquity. Notably, the original crystal remains intact and unblemished, significantly enhancing its intrinsic value.",
            },
            keyPhrases: [
              { en: "condition", zh: "状态" },
              { en: "antique grading", zh: "古董评级" },
              { en: "normal wear", zh: "正常磨损" },
              { en: "superficial", zh: "表面的" },
              { en: "crystal", zh: "表镜" },
              { en: "uncracked", zh: "没有裂纹的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I'd call it 'very good' condition. Normal wear for its age, but no major damage. The crystal is original and crack-free.",
                textZh: "我评为'很好'。年代相当的正常磨损，没有大损伤。表镜是原装的没裂。",
                actionHint: "了解古董评级标准",
                frequency: "common",
              },
              {
                textEn:
                  "It's in excellent shape for a 100-year-old piece. The scratches are superficial, and the original crystal is intact.",
                textZh: "对于一件100年的东西来说状态非常好。划痕是表面的，原装表镜完好。",
                actionHint: "确认无重大损伤",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How do I know it's genuine and not a reproduction?",
            textZh: "我怎么知道它是真品不是复制品？",
            casualVersion: "How can I tell it's real and not a copy?",
            commonMistake: {
              wrong: "How to know it is real not copy?",
              correct: "How do I know it's genuine and not a reproduction?",
              explanation: "\"genuine\" 和 \"reproduction\" 是更专业的用词，且句子结构更自然。",
            },
            formalityVariants: {
              casual: "How can I tell it's real and not a copy?",
              standard: "How do I know it's genuine and not a reproduction?",
              formal: "What assurances can you provide regarding its authenticity, differentiating it from a modern reproduction?",
            },
          },
          {
            speaker: "them",
            role: "店主",
            textEn:
              "Great question. I can show you the serial number inside the case back — it matches Elgin's production records for 1923. The movement has the correct jewel count and markings for that model. We also provide a certificate of authenticity with every antique purchase over $100. I stand behind everything I sell.",
            textZh:
              "好问题。我可以给你看表壳背面的序列号——和Elgin 1923年的生产记录一致。机芯的宝石数量和标记都符合那个型号。我们还为每件超过100美元的古董提供真品证书。我对我卖的每件东西负责。",
            culturalNote: "在美购买古董时，商家提供序列号、证书等是建立信任的常规范。",
            commonMistake: {
              wrong: "Great question. I show you serial number inside case back — it matches Elgin 1923 production records. Jewel count and markings on movement also match that model. We also provide certificate of authenticity for antique over $100. I stand by every my sell.",
              correct: "Great question. I can show you the serial number inside the case back — it matches Elgin's 1923 production records. The jewel count and markings on the movement also conform to that model. We also provide a certificate of authenticity for any antique over $100. I stand by everything I sell.",
              explanation: "Elgin's指Elgin公司的。'conform to'是正式表达。'I stand by'是地道说法。",
            },
            casualVersion: "Good question. I can show you the serial number, it's inside the back. Matches Elgin's '23 records. Movement's got the right jewels and marks for that model too. Plus, anything over a hundred bucks gets a certificate of authenticity. I vouch for all my stuff.",
            formalityVariants: {
              casual: "Good question. I can show you the serial number, it's inside the back. Matches Elgin's '23 records. Movement's got the right jewels and marks for that model too. Plus, anything over a hundred bucks gets a certificate of authenticity. I vouch for all my stuff.",
              standard: "Great question. I can show you the serial number inside the case back — it matches Elgin's production records for 1923. The movement has the correct jewel count and markings for that model. We also provide a certificate of authenticity with every antique purchase over $100. I stand behind everything I sell.",
              formal: "That is an excellent and pertinent question. I can readily demonstrate the serial number located within the case back, which correlates precisely with Elgin's documented production records for the year 1923. Furthermore, the internal movement exhibits the appropriate jewel count and specific manufacturer markings for its model. For all antique acquisitions exceeding $100, we issue a formal certificate of authenticity. I personally guarantee the provenance and quality of every item I offer.",
            },
            keyPhrases: [
              { en: "genuine", zh: "真品" },
              { en: "reproduction", zh: "复制品" },
              { en: "serial number", zh: "序列号" },
              { en: "certificate of authenticity", zh: "真品证书" },
              { en: "stand behind", zh: "负责/担保" },
            ],
            alternativeExpressions: [
              {
                textEn: "All our pieces are authenticated. I can show you the provenance documentation.",
                textZh: "我们所有的东西都经过鉴定。我可以给你看来源文件。",
                actionHint: "要求看鉴定文件",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's reassuring. How much are you asking for it?",
            textZh: "这让我很放心。你要价多少？",
            casualVersion: "Good to hear. What's the price?",
            commonMistake: {
              wrong: "How much it is?",
              correct: "How much are you asking for it?",
              explanation: "\"How much it is?\" 语法错误。用 \"How much are you asking for it?\" 更自然和礼貌，尤其是在议价语境中。",
            },
            formalityVariants: {
              casual: "Good to hear. What's the price?",
              standard: "That's reassuring. How much are you asking for it?",
              formal: "I find that quite reassuring. May I inquire as to your asking price for this item?",
            },
          },
          {
            speaker: "them",
            role: "店主",
            textEn:
              "It's priced at $350. For a working 1920s Elgin in this condition with the original crystal, that's very fair. I've seen comparable pieces sell for $400 to $500 at auction. I can also offer a 10% discount if you pay cash.",
            textZh:
              "标价350美元。对于一个这种状态的、能运转的1920年代Elgin，原装表镜，这个价格很公道。我见过类似的在拍卖会上卖400到500美元。如果付现金我可以再打九折。",
            commonMistake: {
              wrong: "It's $350. For a working 1920s Elgin this condition, original crystal, that's fair price. I've seen similar ones sell $400-500 at auction. I can give you 10% off if pay cash.",
              correct: "It's marked at $350. For a working 1920s Elgin in this condition, with the original crystal, that's a fair price. I've seen similar ones go for $400-500 at auction. I can give you another 10% off if you pay cash.",
              explanation: "marked at是标价。'go for'指卖出价格。'another 10% off'指额外折扣。",
            },
            casualVersion: "It's $350. For a working '20s Elgin, this condition, original crystal? That's super fair. Similar ones go for like $400-500 at auction. I can do 10% off if you pay cash.",
            culturalNote: "美国很多小店或个体销售者会提供现金折扣，因为可以避免刷卡手续费，这在有些国家不常见。",
            formalityVariants: {
              casual: "It's $350. For a working '20s Elgin, this condition, original crystal? That's super fair. Similar ones go for like $400-500 at auction. I can do 10% off if you pay cash.",
              standard: "It's priced at $350. For a working 1920s Elgin in this condition with the original crystal, that's very fair. I've seen comparable pieces sell for $400 to $500 at auction. I can also offer a 10% discount if you pay cash.",
              formal: "The price for this piece is set at $350. Considering it is a functional 1920s Elgin in this exceptional condition, complete with its original crystal, I believe that represents a very equitable valuation. Indeed, I have observed analogous items commanding prices between $400 and $500 at recent auctions. Furthermore, I am prepared to extend a 10% reduction should you opt for a cash transaction.",
            },
            keyPhrases: [
              { en: "priced at", zh: "标价" },
              { en: "fair", zh: "公道的" },
              { en: "comparable pieces", zh: "类似的物品" },
              { en: "at auction", zh: "在拍卖会上" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It's marked at $350. For a working Elgin from the '20s with the original crystal, that's quite fair. Cash gets you 10% off.",
                textZh: "标价350美元。一个能运转的20年代Elgin带原装表镜，这价格很公道。付现打九折。",
                actionHint: "考虑付现金",
                frequency: "common",
              },
              {
                textEn:
                  "$350 — and comparable pieces go for $400 to $500 at auction. If you pay cash, I'll take 10% off.",
                textZh: "350美元——类似的在拍卖会上卖400到500。付现金的话打九折。",
                actionHint: "了解市场行情",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Would you take $280 cash?",
            textZh: "280美元现金行吗？",
            casualVersion: "How about $280 cash?",
            commonMistake: {
              wrong: "280 cash OK?",
              correct: "Would you take $280 cash?",
              explanation: "这是在讨价还价时更礼貌和自然的表达方式。",
            },
            formalityVariants: {
              casual: "How about $280 cash?",
              standard: "Would you take $280 cash?",
              formal: "Would you be amenable to an offer of $280 in cash?",
            },
          },
          {
            speaker: "them",
            role: "店主",
            textEn:
              "I appreciate the offer, but $280 is a bit low for this piece. I could do $300 cash — that's my best price. I'll also include a nice presentation box and the authentication certificate. Deal?",
            textZh:
              "感谢您的出价，但280美元对这件东西来说有点低。300美元现金可以——这是我的最低价了。我还会附赠一个精美展示盒和鉴定证书。成交？",
            culturalNote: "'Deal?'是问是否成交，很地道。'送额外物品'常用于促成交易。",
            commonMistake: {
              wrong: "I appreciate offer, but $280 is low for this piece. I can $300 cash — this is my lowest. I also include nice display box and certificate of authenticity. Deal?",
              correct: "I appreciate the offer, but $280 is a bit low for this piece. I could do $300 cash — that's my absolute lowest. I'll also include a nice display box and the certificate of authenticity. Deal?",
              explanation: "a bit low更自然。'I could do'是常用表达。'that's my absolute lowest'是地道说法。",
            },
            casualVersion: "Appreciate the offer, but $280's a little low. I can do $300 cash, that's my absolute best. And you'll get a nice box and the certificate too. Deal?",
            formalityVariants: {
              casual: "Appreciate the offer, but $280's a little low. I can do $300 cash, that's my absolute best. And you'll get a nice box and the certificate too. Deal?",
              standard: "I appreciate the offer, but $280 is a bit low for this piece. I could do $300 cash — that's my best price. I'll also include a nice presentation box and the authentication certificate. Deal?",
              formal: "I genuinely appreciate your offer; however, $280 is rather below my valuation for this particular item. My most competitive offer would be $300 cash, which would also encompass a handsome presentation box and the official authentication certificate. Do we have an agreement?",
            },
            keyPhrases: [
              { en: "best price", zh: "最低价" },
              { en: "presentation box", zh: "展示盒" },
              { en: "deal", zh: "成交" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "$280 is too low for this one. How about $300 cash? I'll include the display box and certificate.",
                textZh: "280美元太低了。300现金怎么样？我送展示盒和证书。",
                actionHint: "决定是否接受",
                frequency: "common",
              },
              {
                textEn:
                  "I can't go as low as $280. My best is $300, and I'll throw in a nice box and the authentication papers.",
                textZh: "280做不了。最低300，送展示盒和鉴定文件。",
                actionHint: "接受或继续商量",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "$300 with the box and certificate — you've got a deal!",
            textZh: "300美元带展示盒和证书——成交！",
            casualVersion: "$300 with the box and cert? You got it!",
            commonMistake: {
              wrong: "300 with box and certificate, deal!",
              correct: "$300 with the box and certificate — you've got a deal!",
              explanation: "\"You've got a deal!\" 是更地道的说法，表示达成交易。",
            },
            formalityVariants: {
              casual: "$300 with the box and cert? You got it!",
              standard: "$300 with the box and certificate — you've got a deal!",
              formal: "With the inclusion of the presentation box and the authentication certificate for $300, I am pleased to accept your offer. It is a deal.",
            },
          },
          {
            speaker: "them",
            role: "店主",
            textEn:
              "Wonderful! You're getting a real treasure. Let me wrap it up carefully for you. If you ever want to get it serviced, I can recommend a good watchmaker. Enjoy your new piece of history!",
            textZh:
              "太好了！您得到了一件真正的珍品。我仔细给您包好。如果以后需要保养，我可以推荐一位好的钟表师。享受您的这件历史珍品吧！",
            commonMistake: {
              wrong: "Wonderful! You get a real treasure. I'll pack it well for you. If you need maintenance, I recommend good watchmaker. Enjoy your history piece!",
              correct: "Wonderful! You've got a real treasure there. I'll wrap it up carefully for you. If you ever need servicing, I can recommend a good watchmaker. Enjoy your piece of history!",
              explanation: "You've got更地道。'servicing'指保养。'piece of history'是常用说法。",
            },
            casualVersion: "Awesome! You're getting a real gem. Let me wrap it up. If you ever need it serviced, I know a good watchmaker. Enjoy your new history piece!",
            formalityVariants: {
              casual: "Awesome! You're getting a real gem. Let me wrap it up. If you ever need it serviced, I know a good watchmaker. Enjoy your new history piece!",
              standard: "Wonderful! You're getting a real treasure. Let me wrap it up carefully for you. If you ever want to get it serviced, I can recommend a good watchmaker. Enjoy your new piece of history!",
              formal: "Splendid! You have acquired a truly remarkable piece of heritage. Allow me to meticulously package it for you. Should you require servicing in the future, I would be delighted to recommend a reputable watchmaker. May you derive great pleasure from your new acquisition and its historical significance.",
            },
            keyPhrases: [
              { en: "treasure", zh: "珍品" },
              { en: "serviced", zh: "保养/维修" },
              { en: "watchmaker", zh: "钟表师" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You got a real gem! I'll pack it carefully. If it ever needs servicing, I know a great watchmaker.",
                textZh: "你得到了一件真宝贝！我仔细包好。以后需要保养的话我认识好的钟表师。",
                actionHint: "妥善保管",
                frequency: "common",
              },
              {
                textEn:
                  "Great purchase! Let me wrap it up safely. I can also recommend a watchmaker if you ever need maintenance.",
                textZh: "买得好！我安全包好。需要维护的话我可以推荐钟表师。",
                actionHint: "了解后续保养",
                frequency: "occasional",
              },
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
            commonMistake: {
              wrong: "My nose is running and my throat is painful.",
              correct: "I have a runny nose and a sore throat.",
              explanation: '直接说症状名称如 "runny nose" 更自然。',
            },
            formalityVariants: {
              casual: "Got a bad cold. What's good for a sore throat and runny nose?",
              standard: "Hi, I have a bad cold. Can you recommend something for a sore throat and runny nose?",
              formal:
                "Good morning/afternoon. I'm experiencing a severe cold. Could you kindly recommend a suitable remedy for a sore throat and nasal congestion?",
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Sure. Are you taking any other medications right now? And do you have any allergies?",
            textZh: "好的。您现在在吃其他药吗？有药物过敏吗？",
            culturalNote: "美国药剂师必问，出于安全和法规",
            keyPhrases: [
              { en: "medications", zh: "药物" },
              { en: "allergies", zh: "过敏" },
            ],
            alternativeExpressions: [
              {
                textEn: "Before I recommend anything — any current meds or allergies I should know about?",
                textZh: "在推荐之前——有什么正在服用的药或过敏需要告诉我的吗？",
                actionHint: "如实告知过敏史和用药情况",
                frequency: "common",
              },
            ],
            vocabNotes: {
              medications: {
                meaningInContext: "在这句话里表示：正在服用的所有药物，包括维生素和保健品",
                similarUsage: "类似用法：Are you on any medications for blood pressure?（你在吃血压药吗？）",
              },
            },
            casualVersion: "Okay. Taking other meds? Any allergies?",
            formalityVariants: {
              casual: "Sure. Any other meds? Allergies?",
              standard: "Sure. Are you taking any other medications right now? And do you have any allergies?",
              formal:
                "Certainly. May I inquire if you are currently on any other medications? And do you have any known allergies?",
            },
          },
          {
            speaker: "you",
            textEn: "No allergies, and I'm not taking anything else. I just need something that works fast.",
            textZh: "没有过敏，也没在吃其他药。我就想要见效快的。",
            casualVersion: "Nope, no allergies, not on anything else. Just need something fast-acting.",
            commonMistake: {
              wrong: "I just need something work fast.",
              correct: "I just need something that works fast.",
              explanation: '需要用 "that works fast" 来修饰 "something" 或用 "fast-acting"。',
            },
            formalityVariants: {
              casual: "No allergies, nothing else. Just need something that works quick.",
              standard: "No allergies, and I'm not taking anything else. I just need something that works fast.",
              formal:
                "I have no known allergies, and I am not currently on any other medications. I require a remedy that provides rapid relief.",
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn:
              "I'd recommend DayQuil for daytime — it won't make you drowsy. For nighttime, NyQuil will help you sleep. This combo pack has both. Take two capsules every four to six hours.",
            textZh: "我推荐白天吃 DayQuil——不会犯困。晚上吃 NyQuil，帮助睡眠。这个组合装两个都有。每四到六小时吃两粒。",
            culturalNote: "DayQuil/NyQuil 是美国常见感冒药，日夜分用很普遍",
            keyPhrases: [
              { en: "drowsy", zh: "犯困的" },
              { en: "combo pack", zh: "组合装" },
              { en: "capsules", zh: "胶囊" },
              { en: "every four to six hours", zh: "每四到六小时" },
            ],
            vocabNotes: {
              drowsy: {
                meaningInContext: "在这句话里表示：吃了药之后感到昏昏欲睡",
                similarUsage: "类似用法：This antihistamine may make you drowsy.（这种抗过敏药可能让你犯困）",
              },
            },
            localVariants: { "en-US": "DayQuil", "en-GB": "Lemsip", "en-AU": "Codral" },
            alternativeExpressions: [
              {
                textEn:
                  "Try DayQuil during the day — it won't knock you out. NyQuil at night to help you sleep. This pack has both.",
                textZh: "白天吃DayQuil——不会犯困。晚上吃NyQuil帮助睡眠。这个组合装两个都有。",
                actionHint: "了解白天和晚上用哪个",
                frequency: "common",
              },
              {
                textEn:
                  "I'd suggest the DayQuil/NyQuil combo — one for daytime, one for night. Take two capsules every 4-6 hours.",
                textZh: "建议DayQuil/NyQuil组合——一个白天用一个晚上用。每4到6小时吃两粒。",
                actionHint: "按说明服用",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "DayQuil for daytime – won't make you sleepy. NyQuil for night to help you sleep. This pack's got both. Two pills every 4-6 hours.",
            formalityVariants: {
              casual:
                "DayQuil for day, won't make ya tired. NyQuil for night to help you sleep. Combo pack has both. Two every 4-6 hours.",
              standard:
                "I'd recommend DayQuil for daytime — it won't make you drowsy. For nighttime, NyQuil will help you sleep. This combo pack has both. Take two capsules every four to six hours.",
              formal:
                "I would recommend DayQuil for daytime use, as it is non-drowsy. For nocturnal relief, NyQuil is advised to aid in sleep. This combination package includes both. Please administer two capsules every four to six hours.",
            },
          },
          {
            speaker: "you",
            textEn: "Great. Do you also have throat lozenges? My throat is really scratchy.",
            textZh: "好的。有润喉糖吗？我喉咙特别痒。",
            casualVersion: "Cool. Got any throat lozenges? My throat's super scratchy.",
            commonMistake: {
              wrong: "Do you have throat candy? My throat very itchy.",
              correct: "Do you have throat lozenges? My throat is really scratchy.",
              explanation: '"Lozenges" 是润喉糖的常用词。"Scratchy" 更自然地形容喉咙不适。',
            },
            formalityVariants: {
              casual: "Yeah, got any throat lozenges? My throat's super scratchy.",
              standard: "Great. Do you also have throat lozenges? My throat is really scratchy.",
              formal:
                "Excellent. Do you also stock throat lozenges? I'm experiencing a very scratchy sensation in my throat.",
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn:
              "Yes, these Ricola lozenges are very popular. They're herbal and sugar-free. Or if you want something stronger, these Cepacol ones have a numbing agent that really helps with the pain.",
            textZh:
              "有的，这款 Ricola 润喉糖很受欢迎，草本配方无糖。如果想要效果更强的，这款 Cepacol 含麻醉成分，能有效缓解疼痛。",
            culturalNote: "Ricola和Cepacol是美国非常常见的润喉糖品牌",
            keyPhrases: [
              { en: "lozenges", zh: "润喉糖" },
              { en: "herbal", zh: "草本的" },
              { en: "sugar-free", zh: "无糖的" },
              { en: "numbing agent", zh: "麻醉成分" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Ricola is herbal and gentle. Cepacol has a numbing effect if you want stronger relief. Both are sugar-free.",
                textZh: "Ricola是草本的比较温和。Cepacol有麻醉效果，缓解更强。两个都无糖。",
                actionHint: "根据症状选择",
                frequency: "common",
              },
              {
                textEn:
                  "For mild sore throat, these herbal ones are nice. For real pain, these Cepacol ones numb the area and really help.",
                textZh: "嗓子轻微不适的话草本的不错。真的疼的话Cepacol能麻醉缓解。",
                actionHint: "选择适合的强度",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep, these Ricola lozenges are big. Herbal, no sugar. Or for something stronger, these Cepacol ones numb it up, really helps with pain.",
            formalityVariants: {
              casual: "Yeah, Ricola's popular, herbal, no sugar. Or for stronger, Cepacol has numbing stuff for pain.",
              standard:
                "Yes, these Ricola lozenges are very popular. They're herbal and sugar-free. Or if you want something stronger, these Cepacol ones have a numbing agent that really helps with the pain.",
              formal:
                "Yes, these Ricola lozenges are quite popular, being both herbal and sugar-free. Alternatively, for a more potent effect, these Cepacol varieties contain a numbing agent that provides significant pain relief.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take the Cepacol ones. How much is everything together?",
            textZh: "我要 Cepacol 的。一共多少钱？",
            casualVersion: "I'll grab the Cepacols. How much for everything?",
            commonMistake: {
              wrong: "How much all together?",
              correct: "How much is everything together?",
              explanation: '询问总价时，通常说 "How much is everything together?"。',
            },
            formalityVariants: {
              casual: "I'll take the Cepacols. Total price?",
              standard: "I'll take the Cepacol ones. How much is everything together?",
              formal: "I will take the Cepacol lozenges. What is the total cost for all items, please?",
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn:
              "The DayQuil/NyQuil combo is $15.99 and the lozenges are $6.49. Your total is $22.48 plus tax. Do you need a bag?",
            textZh: "DayQuil/NyQuil 组合装15.99美元，润喉糖6.49美元。一共22.48美元加税。需要袋子吗？",
            keyPhrases: [{ en: "plus tax", zh: "加税" }],
            culturalNote: "美国药店标价不含税，结账时会加上消费税，各州税率不同。",
            alternativeExpressions: [
              {
                textEn: "The combo pack is $15.99, lozenges are $6.49. That's $22.48 plus tax. Need a bag?",
                textZh: "组合装15.99，润喉糖6.49。一共22.48加税。要袋子吗？",
                actionHint: "选择付款",
                frequency: "common",
              },
              {
                textEn: "Your total is $22.48 before tax. Anything else, or are you ready to check out?",
                textZh: "税前总共22.48美元。还需要别的吗，还是可以结账了？",
                actionHint: "确认是否还需要其他",
                frequency: "occasional",
              },
            ],
            casualVersion: "DayQuil/NyQuil combo is $15.99, lozenges $6.49. Total's $22.48 plus tax. Bag?",
            formalityVariants: {
              casual: "DayQuil/NyQuil is $15.99, lozenges $6.49. Total $22.48 plus tax. Need a bag?",
              standard:
                "The DayQuil/NyQuil combo is $15.99 and the lozenges are $6.49. Your total is $22.48 plus tax. Do you need a bag?",
              formal:
                "The DayQuil/NyQuil combination pack is $15.99, and the lozenges are $6.49. Your grand total will be $22.48, in addition to applicable tax. Would you require a bag?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please. Can I pay with Apple Pay?",
            textZh: "要的。可以用 Apple Pay 吗？",
            casualVersion: "Yeah. Can I use Apple Pay?",
            commonMistake: {
              wrong: "Can I Apple Pay?",
              correct: "Can I pay with Apple Pay?",
              explanation: '"Pay with" 动词短语才完整，不能直接用 "Apple Pay" 作动词。',
            },
            formalityVariants: {
              casual: "Yep. Apple Pay okay?",
              standard: "Yes, please. Can I pay with Apple Pay?",
              formal: "Yes, please. May I inquire if I can settle the payment using Apple Pay?",
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn:
              "Absolutely. Just tap your phone here. And remember — drink plenty of fluids and get some rest. If your symptoms don't improve in a few days, you should see a doctor.",
            textZh: "可以的，手机靠一下这里就行。记得多喝水多休息。如果几天后症状没有好转，建议去看医生。",
            culturalNote: "美国药剂师经常给出健康建议，很常见",
            keyPhrases: [
              { en: "tap your phone", zh: "手机靠一下" },
              { en: "plenty of fluids", zh: "多喝水" },
              { en: "symptoms", zh: "症状" },
            ],
            literalMeaning: '"plenty of fluids" 字面意思是 "大量的液体"，实际就是多喝水、喝汤等，不限于白水',
            alternativeExpressions: [
              {
                textEn:
                  "Just tap here. And make sure to rest up and drink lots of water. See a doctor if it doesn't get better in a few days.",
                textZh: "在这里感应一下。记得多休息多喝水。几天不好的话去看医生。",
                actionHint: "注意恢复建议",
                frequency: "common",
              },
              {
                textEn:
                  "Apple Pay works — tap right here. Get some rest tonight, okay? If symptoms persist, see a doctor.",
                textZh: "Apple Pay可以——在这感应。今晚好好休息。症状持续的话去看医生。",
                actionHint: "听从健康建议",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Totally. Just tap your phone. And hey, drink lots of water, get some sleep. If you're not better in a few days, see a doc.",
            formalityVariants: {
              casual:
                "Sure. Tap your phone. Remember to drink water, rest up. If not better in a few days, see a doctor.",
              standard:
                "Absolutely. Just tap your phone here. And remember — drink plenty of fluids and get some rest. If your symptoms don't improve in a few days, you should see a doctor.",
              formal:
                "Certainly. Kindly tap your mobile device at this location. Additionally, please ensure you consume ample fluids and obtain sufficient rest. Should your symptoms not demonstrate improvement within a few days, it would be advisable to consult a physician.",
            },
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
            textEn:
              "Excuse me, I'm looking for sunscreen. We're going to the beach tomorrow and I forgot to pack mine.",
            textZh: "不好意思，我想买防晒霜。我们明天去海边，我忘带了。",
            casualVersion: "Hey, looking for sunscreen. Going to the beach tomorrow and totally forgot mine.",
            commonMistake: {
              wrong: "Excuse me, I want to buy sunscreen.",
              correct: "Excuse me, I'm looking for sunscreen.",
              explanation: "“I want to buy...” 听起来很直接，不如 “I'm looking for...” 或询问地点自然礼貌。",
            },
            formalityVariants: {
              casual: "Hey, looking for sunscreen. Going to the beach tomorrow and totally forgot mine.",
              standard:
                "Excuse me, I'm looking for sunscreen. We're going to the beach tomorrow and I forgot to pack mine.",
              formal:
                "Pardon me, I'm in search of sunscreen. My apologies, I neglected to pack mine, and we are planning to visit the beach tomorrow.",
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn:
              "No problem. What SPF are you looking for? We have SPF 30, 50, and 70. For the beach, I'd recommend at least SPF 50, and make sure it's water-resistant.",
            textZh: "没问题。您要多少倍防晒的？我们有 SPF 30、50 和 70 的。去海边的话我建议至少 SPF 50，而且要防水的。",
            culturalNote: "SPF数值是防晒霜重要指标，通常海边需要更高SPF及防水",
            keyPhrases: [
              { en: "SPF", zh: "防晒系数" },
              { en: "water-resistant", zh: "防水的" },
            ],
            vocabNotes: {
              SPF: {
                meaningInContext: "在这句话里表示：Sun Protection Factor，防晒系数，数字越高防晒能力越强",
                similarUsage: "类似用法：This moisturizer has SPF 15 built in.（这款面霜自带SPF 15防晒）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "We have SPF 30, 50, and 70. For the beach, I'd go with at least 50. And make sure it's water-resistant.",
                textZh: "有SPF 30、50和70的。去海边的话至少选50。还要确保是防水的。",
                actionHint: "选择合适的防晒系数",
                frequency: "common",
              },
              {
                textEn:
                  "For a beach day, SPF 50 minimum, and get the water-resistant kind. You'll need to reapply every two hours.",
                textZh: "去海边至少SPF 50，要防水的。每两小时要补涂。",
                actionHint: "了解使用方法",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "No worries. What SPF ya looking for? Got 30, 50, 70. For the beach, I'd say at least 50, and definitely water-resistant.",
            formalityVariants: {
              casual:
                "No worries. What SPF ya looking for? Got 30, 50, 70. For the beach, I'd say at least 50, and definitely water-resistant.",
              standard:
                "No problem. What SPF are you looking for? We have SPF 30, 50, and 70. For the beach, I'd recommend at least SPF 50, and make sure it's water-resistant.",
              formal:
                "Certainly, not an issue. Could you please specify your preferred SPF level? We currently stock SPF 30, 50, and 70. For activities such as beach excursions, I would strongly advise a minimum of SPF 50, ensuring it is also water-resistant.",
            },
          },
          {
            speaker: "you",
            textEn: "SPF 50 sounds good. Do you have anything for sensitive skin? My wife breaks out easily.",
            textZh: "SPF 50 的就行。有敏感肌用的吗？我太太皮肤容易过敏。",
            casualVersion: "Yeah, 50's fine. Got anything for sensitive skin? My wife breaks out super easy.",
            commonMistake: {
              wrong: "My wife's skin is sensitive, it breaks out easily.",
              correct: "My wife breaks out easily.",
              explanation: '避免直译中文表达，"breaks out easily" 是更自然的英文说法。',
            },
            formalityVariants: {
              casual: "Yeah, 50's fine. Got anything for sensitive skin? My wife breaks out super easy.",
              standard: "SPF 50 sounds good. Do you have anything for sensitive skin? My wife breaks out easily.",
              formal:
                "SPF 50 would be appropriate. Do you happen to carry products specifically formulated for sensitive skin? My wife is prone to skin reactions.",
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn:
              "This Neutrogena one is fragrance-free and hypoallergenic — great for sensitive skin. It's a mineral sunscreen, so it sits on top of the skin instead of being absorbed.",
            textZh: "这款露得清的无香精、低敏——很适合敏感肌。它是物理防晒，涂在皮肤表面而不是被吸收。",
            culturalNote: "物理防晒和化学防晒是美国防晒霜的常见分类，物理防晒更适合敏感肌",
            keyPhrases: [
              { en: "fragrance-free", zh: "无香精的" },
              { en: "hypoallergenic", zh: "低敏的" },
              { en: "mineral sunscreen", zh: "物理防晒" },
            ],
            vocabNotes: {
              hypoallergenic: {
                meaningInContext: "在这句话里表示：不太容易引起过敏反应的产品配方",
                similarUsage: "类似用法：This pillow is hypoallergenic.（这个枕头是防过敏的）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "This Neutrogena one is perfect for sensitive skin — no fragrance, mineral formula. It sits on top of the skin, not absorbed.",
                textZh: "这款露得清的特别适合敏感肌——无香精，物理配方。涂在皮肤表面不吸收。",
                actionHint: "选择适合的产品",
                frequency: "common",
              },
              {
                textEn:
                  "For your wife's sensitive skin, go with this mineral SPF 50. It's fragrance-free and hypoallergenic.",
                textZh: "给你太太敏感肌用的话，选这个物理防晒SPF50。无香精低敏。",
                actionHint: "了解产品成分",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "This Neutrogena one's fragrance-free, hypoallergenic – perfect for sensitive skin. It's mineral, so it just sits on top, doesn't absorb.",
            formalityVariants: {
              casual:
                "This Neutrogena one's fragrance-free, hypoallergenic – perfect for sensitive skin. It's mineral, so it just sits on top, doesn't absorb.",
              standard:
                "This Neutrogena one is fragrance-free and hypoallergenic — great for sensitive skin. It's a mineral sunscreen, so it sits on top of the skin instead of being absorbed.",
              formal:
                "This particular Neutrogena product is both fragrance-free and hypoallergenic, making it an excellent choice for individuals with sensitive skin. It is a mineral-based sunscreen, which means it remains on the surface of the skin rather than being absorbed into it.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect. I also need motion sickness pills — we're taking a boat tour. And some Band-Aids.",
            textZh: "好的。我还需要晕车药——我们要坐船游览。还要一些创可贴。",
            casualVersion: "Perfect. Also need motion sickness pills — we're doing a boat tour. And some Band-Aids.",
            commonMistake: {
              wrong: "I also need seasick medicine.",
              correct: "I also need motion sickness pills.",
              explanation:
                '"Seasick medicine" 不如 "motion sickness pills" 或 "seasickness pills" 常用，"motion sickness" 是总称。',
            },
            formalityVariants: {
              casual: "Perfect. Also need motion sickness pills — we're doing a boat tour. And some Band-Aids.",
              standard: "Perfect. I also need motion sickness pills — we're taking a boat tour. And some Band-Aids.",
              formal:
                "Excellent. Additionally, I require motion sickness medication, as we will be embarking on a boat tour. I also need some adhesive bandages.",
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn:
              "For motion sickness, Dramamine works well. Take it 30 minutes before you get on the boat. It might make you a little drowsy though. Band-Aids are in aisle 3 — we have regular and waterproof ones.",
            textZh:
              "晕船的话，Dramamine 效果不错。上船前30分钟吃。不过可能会有点犯困。创可贴在3号过道——有普通的和防水的。",
            culturalNote: "Dramamine 是美国最常见的晕车晕船药品牌",
            keyPhrases: [
              { en: "motion sickness", zh: "晕车/晕船" },
              { en: "Dramamine", zh: "茶苯海明（晕车药品牌）" },
              { en: "waterproof", zh: "防水的" },
            ],
            localVariants: { "en-US": "Band-Aids", "en-GB": "plasters", "en-AU": "Band-Aids" },
            alternativeExpressions: [
              {
                textEn:
                  "Dramamine is great for motion sickness — take it 30 minutes before the boat. Band-Aids are in aisle 3, regular and waterproof.",
                textZh: "Dramamine治晕船很好——上船前30分钟吃。创可贴在3号过道，有普通的和防水的。",
                actionHint: "提前服药",
                frequency: "common",
              },
              {
                textEn:
                  "For the boat tour, Dramamine works well. Just heads up — it may make you sleepy. Band-Aids are right over there.",
                textZh: "坐船的话Dramamine效果好。不过提醒一下——可能犯困。创可贴就在那边。",
                actionHint: "注意嗜睡副作用",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "For motion sickness, Dramamine's good. Take it 30 mins before you get on the boat. Might make ya a little drowsy though. Band-Aids are in aisle 3 — got regular and waterproof.",
            formalityVariants: {
              casual:
                "For motion sickness, Dramamine's good. Take it 30 mins before you get on the boat. Might make ya a little drowsy though. Band-Aids are in aisle 3 — got regular and waterproof.",
              standard:
                "For motion sickness, Dramamine works well. Take it 30 minutes before you get on the boat. It might make you a little drowsy though. Band-Aids are in aisle 3 — we have regular and waterproof ones.",
              formal:
                "Regarding motion sickness, Dramamine is a highly effective option. It is advisable to take it approximately 30 minutes prior to boarding the vessel. Please be aware that it may induce a slight degree of drowsiness. The adhesive bandages are located in aisle 3; we stock both standard and waterproof varieties.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take the waterproof Band-Aids. Is there a non-drowsy option for the motion sickness?",
            textZh: "我要防水创可贴。晕船药有不犯困的吗？",
            casualVersion: "I'll grab the waterproof Band-Aids. Any non-drowsy option for the motion sickness?",
            commonMistake: {
              wrong: "Is there a no sleepy option?",
              correct: "Is there a non-drowsy option?",
              explanation: '"Non-drowsy" 是形容词，指不引起困倦的；"no sleepy" 语法不正确。',
            },
            formalityVariants: {
              casual: "I'll grab the waterproof Band-Aids. Any non-drowsy option for the motion sickness?",
              standard: "I'll take the waterproof Band-Aids. Is there a non-drowsy option for the motion sickness?",
              formal:
                "I will select the waterproof adhesive bandages. Do you have a non-drowsy alternative for the motion sickness medication?",
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn:
              "Yes, Bonine is the non-drowsy formula. Same active ingredient but it's less likely to make you sleepy. It's a couple dollars more though.",
            textZh: "有的，Bonine 是不犯困配方。同样的有效成分，但不太容易让人瞌睡。不过贵几美元。",
            culturalNote: "Bonine是另一种常见的晕车药，主打不易犯困",
            keyPhrases: [
              { en: "non-drowsy", zh: "不犯困的" },
              { en: "active ingredient", zh: "有效成分" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Bonine is the non-drowsy option. Same ingredient, just less likely to make you sleepy. A few bucks more though.",
                textZh: "Bonine是不犯困的。同样的成分，只是不太容易瞌睡。不过贵几块。",
                actionHint: "选择不犯困的",
                frequency: "common",
              },
              {
                textEn:
                  "If you don't want to feel sleepy, go with Bonine. Works the same way, just won't knock you out.",
                textZh: "不想犯困的话选Bonine。效果一样，只是不会让你昏昏欲睡。",
                actionHint: "适合需要保持清醒时",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, Bonine's the non-drowsy one. Same active ingredient, but less likely to make ya sleepy. It's a couple bucks more though.",
            formalityVariants: {
              casual:
                "Yeah, Bonine's the non-drowsy one. Same active ingredient, but less likely to make ya sleepy. It's a couple bucks more though.",
              standard:
                "Yes, Bonine is the non-drowsy formula. Same active ingredient but it's less likely to make you sleepy. It's a couple dollars more though.",
              formal:
                "Yes, Bonine is indeed the non-drowsy formulation. While it contains the same active ingredient, it is significantly less prone to inducing somnolence. However, please note there is a slight price difference of a few dollars.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll go with Bonine. That's everything — sunscreen, motion sickness pills, and Band-Aids.",
            textZh: "我要 Bonine。就这些——防晒霜、晕船药和创可贴。",
            casualVersion: "I'll take the Bonine. So that's everything — sunscreen, motion sickness, and Band-Aids.",
            commonMistake: {
              wrong: "I will choose Bonine.",
              correct: "I'll go with Bonine.",
              explanation: '"I\'ll go with" 在选择商品时更自然、常用。',
            },
            formalityVariants: {
              casual: "I'll take the Bonine. So that's everything — sunscreen, motion sickness, and Band-Aids.",
              standard: "I'll go with Bonine. That's everything — sunscreen, motion sickness pills, and Band-Aids.",
              formal:
                "I will opt for the Bonine. That concludes my selection: sunscreen, motion sickness medication, and adhesive bandages.",
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn:
              "Got it. Your total is $38.75. The sunscreen is buy one get one 50% off this week, so I'll add a second one for you at half price if you'd like. That way you and your wife each have one.",
            textZh: "好的。一共38.75美元。防晒霜这周买一送一半价，需要的话我帮你加一瓶半价的。这样你和你太太一人一瓶。",
            culturalNote: "美国商家常有买一赠一或买一送一半价的促销活动",
            keyPhrases: [
              { en: "buy one get one 50% off", zh: "买一送一半价" },
              { en: "half price", zh: "半价" },
            ],
            literalMeaning: '"buy one get one 50% off" 字面意思是 "买一件，第二件打五折"，不是免费送',
            culturalMeaning:
              "这是美国药店和超市常见的促销方式，简称 BOGO 50%，和中国的买一送一不同，第二件是半价不是免费",
            alternativeExpressions: [
              {
                textEn:
                  "Your total is $38.75. Oh, and sunscreen is BOGO half off this week — want a second one at half price?",
                textZh: "一共38.75美元。对了，防晒霜这周第二件半价——要加一瓶吗？",
                actionHint: "利用半价优惠",
                frequency: "common",
              },
              {
                textEn:
                  "That's $38.75. The sunscreen has a buy one, get one 50% off deal. Perfect since there are two of you!",
                textZh: "38.75美元。防晒霜买一送一半价。你们两个人正好！",
                actionHint: "给太太也买一瓶",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Alright. Your total's $38.75. Sunscreen's BOGO 50% off this week, so I can throw in another one for half price if you want. That way you two both get one.",
            formalityVariants: {
              casual:
                "Alright. Your total's $38.75. Sunscreen's BOGO 50% off this week, so I can throw in another one for half price if you want. That way you two both get one.",
              standard:
                "Got it. Your total is $38.75. The sunscreen is buy one get one 50% off this week, so I'll add a second one for you at half price if you'd like. That way you and your wife each have one.",
              formal:
                "Understood. Your total comes to $38.75. I'd like to inform you that the sunscreen is currently on a 'buy one, get one 50% off' promotion this week. I would be pleased to add a second unit at the discounted rate, should you wish to avail yourselves of this offer, ensuring both you and your wife have one.",
            },
          },
          {
            speaker: "you",
            textEn: "Oh, great deal! Yes, please add another one. Thank you so much for your help.",
            textZh: "哦，太划算了！加一瓶吧。非常感谢你的帮助。",
            casualVersion: "Oh, awesome! Yeah, totally, add another. Thanks a bunch for your help!",
            commonMistake: {
              wrong: "Oh, very good deal!",
              correct: "Oh, great deal!",
              explanation: '"Very good" 听起来比较平淡，"great deal" 或 "awesome" 更自然地表达惊喜和满意。',
            },
            formalityVariants: {
              casual: "Oh, awesome! Yeah, totally, add another. Thanks a bunch for your help!",
              standard: "Oh, great deal! Yes, please add another one. Thank you so much for your help.",
              formal:
                "Oh, that's an excellent offer! Yes, please do add another one. I am most grateful for your assistance.",
            },
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
            casualVersion: "Hey, lookin' for a carry-on luggage set. Where's that at?",
            culturalNote: "美国办理购物或服务时，直接说目的即可，无需像中文的“请问”开头",
            commonMistake: {
              wrong: "I want to find a carry-on sized luggage set.",
              correct: "I'm looking for a carry-on sized luggage set.",
              explanation: "“I want to find”听起来很直接，用“I'm looking for”更礼貌自然",
            },
            formalityVariants: {
              casual: "Hey, carry-on set. Where's it at?",
              standard: "Hi, I'm looking for a carry-on sized luggage set. Where would that be located?",
              formal:
                "Good morning/afternoon, I am seeking a luggage set suitable for carry-on requirements. Could you please direct me to the appropriate section?",
            },
          },
          {
            speaker: "them",
            role: "销售员",
            textEn:
              "Luggage is upstairs on the second floor, in the travel section. Take the escalator on your left. Are you looking for hard-shell or soft-shell?",
            textZh: "行李箱在二楼，旅行用品区。坐左边的扶梯上去。您想要硬壳的还是软壳的？",
            keyPhrases: [
              { en: "carry-on", zh: "登机箱" },
              { en: "hard-shell", zh: "硬壳的" },
              { en: "soft-shell", zh: "软壳的" },
              { en: "escalator", zh: "扶梯" },
            ],
            vocabNotes: {
              "carry-on": {
                meaningInContext: "在这句话里表示：可以带上飞机的小型行李箱，一般不超过22英寸",
                similarUsage: "类似用法：Is this bag carry-on size?（这个包是登机尺寸吗？）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Travel gear is in aisle 12. Hard or soft case?",
                textZh: "旅行用品在12号过道。硬壳还是软壳？",
                actionHint: "告知你的偏好",
                frequency: "common",
              },
              {
                textEn:
                  "Luggage is on the second floor. Take the escalator on the left. Do you want a hard-shell or soft one?",
                textZh: "行李箱在二楼。坐左边的扶梯上去。要硬壳还是软壳的？",
                actionHint: "说明你的偏好",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Luggage is up on the second floor, travel section. Escalator's on your left. Hard-shell or soft-shell?",
            commonMistake: {
              wrong: "Do you want hard-shell or soft-shell?",
              correct: "Are you looking for hard-shell or soft-shell?",
              explanation: "“Do you want”在美国零售语境中听起来不太礼貌，用“Are you looking for”更常见",
            },
            formalityVariants: {
              casual: "Up on 2nd floor, travel. Escalator left. Hard or soft?",
              standard:
                "The luggage department is located upstairs on the second floor, within the travel section. Please use the escalator on your left. May I ask if you prefer a hard-shell or soft-shell model?",
              formal:
                "The luggage department is situated on the second floor, specifically within our travel accessories section. The escalator for your convenience is located to your left. To assist you further, could you please specify whether you are interested in hard-shell or soft-shell options?",
            },
          },
          {
            speaker: "you",
            textEn:
              "Hard-shell, please. Something lightweight. I'm flying internationally and the weight limit is strict.",
            textZh: "硬壳的。要轻的。我坐国际航班，重量限制很严格。",
            casualVersion: "Hard-shell. Needs to be light. Goin' international, so weight limit's strict.",
            commonMistake: {
              wrong: "It must be lightweight.",
              correct: "Something lightweight.",
              explanation:
                "直接说“It must be”语气有点强硬，用“Something lightweight”或“I need something lightweight”更自然",
            },
            formalityVariants: {
              casual: "Hard-shell. Gotta be light. International flight, so strict on weight.",
              standard:
                "A hard-shell, please. I'd prefer something lightweight, as I'm flying internationally and the weight limit is quite strict.",
              formal:
                "I would prefer a hard-shell option, please. It is imperative that it be lightweight, as I will be traveling internationally, and the luggage weight restrictions are quite stringent.",
            },
          },
          {
            speaker: "them",
            role: "销售员",
            textEn:
              "This Samsonite one is our best seller — it's polycarbonate, only 6.5 pounds empty, and it has a built-in TSA lock. It meets all major airline carry-on requirements.",
            textZh:
              "这款新秀丽是我们的畅销品——聚碳酸酯材质，空箱只有6.5磅，自带 TSA 认证锁。符合所有主要航空公司的登机箱要求。",
            keyPhrases: [
              { en: "best seller", zh: "畅销品" },
              { en: "polycarbonate", zh: "聚碳酸酯" },
              { en: "TSA lock", zh: "TSA认证锁" },
              { en: "carry-on requirements", zh: "登机箱要求" },
            ],
            vocabNotes: {
              "TSA lock": {
                meaningInContext:
                  "在这句话里表示：美国运输安全管理局认可的锁具，安检人员有万能钥匙可以打开检查而不会损坏锁",
                similarUsage:
                  "类似用法：Make sure your lock is TSA-approved for flights to the US.（飞美国要确保锁是TSA认证的）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "This Samsonite is our top pick — super light, built-in TSA lock, and meets all airline size limits.",
                textZh: "这款新秀丽是我们首推——超轻，自带TSA锁，符合所有航空公司尺寸要求。",
                actionHint: "看看是否喜欢",
                frequency: "common",
              },
              {
                textEn:
                  "The best seller is this polycarbonate one — only 6.5 pounds. TSA lock built in, fits all major airline carry-on rules.",
                textZh: "最畅销的是这款聚碳酸酯的——才6.5磅。自带TSA锁，符合所有主流航空登机要求。",
                actionHint: "提起来感受重量",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "This Samsonite's our best seller — it's polycarbonate, only 6.5 pounds empty, and it's got a built-in TSA lock. Good for all major airlines' carry-on rules.",
            culturalNote: "TSA锁是美国机场安检专用，中国旅行者常不熟悉",
            formalityVariants: {
              casual:
                "This Samsonite? Top seller. Polycarb, only 6.5 lbs empty, TSA lock built-in. Works for all major airline carry-on stuff.",
              standard:
                "This particular Samsonite model is our top seller. It's constructed from polycarbonate, weighs only 6.5 pounds when empty, and features an integrated TSA-approved lock. It fully complies with the carry-on requirements of all major airlines.",
              formal:
                "This Samsonite model is among our most popular and highly recommended items. It is meticulously crafted from durable polycarbonate, boasts an exceptionally light empty weight of merely 6.5 pounds, and includes a convenient integrated TSA-compliant locking mechanism. Furthermore, it is designed to meet the carry-on specifications of all major air carriers.",
            },
          },
          {
            speaker: "you",
            textEn:
              "It feels nice. How much is it? And what's your return policy in case it doesn't fit in the overhead bin?",
            textZh: "手感不错。多少钱？如果放不进头顶行李舱，退货政策是什么？",
            casualVersion: "Feels good. How much? What's your return policy if it doesn't fit overhead?",
            culturalNote: "在美国，询问退货政策是很普遍且被接受的行为，即使是假设性问题。",
            commonMistake: {
              wrong: "How much money is it?",
              correct: "How much is it?",
              explanation: "“How much money”中的“money”是多余的，直接说“How much”即可",
            },
            formalityVariants: {
              casual: "Feels good. Price? What's the return policy if it doesn't fit up top?",
              standard:
                "This feels quite nice. Could you please tell me the price? Additionally, what is your return policy should it not fit in the overhead compartment?",
              formal:
                "I find the construction and feel of this item to be quite satisfactory. Could you kindly inform me of its cost? Furthermore, I would appreciate an explanation of your return policy, particularly concerning the eventuality that it may not comply with overhead bin dimensions.",
            },
          },
          {
            speaker: "them",
            role: "销售员",
            textEn:
              "It's $129.99. Our return policy is 90 days with receipt for a full refund, or 30 days without receipt for store credit. Just keep the tags on.",
            textZh: "129.99美元。有收据的话90天内可以全额退款，没收据30天内可以退成店铺积分。保留好吊牌就行。",
            culturalNote: "美国退货政策通常比中国宽松，保留收据和吊牌很重要。",
            keyPhrases: [
              { en: "return policy", zh: "退货政策" },
              { en: "receipt", zh: "收据" },
              { en: "full refund", zh: "全额退款" },
              { en: "store credit", zh: "店铺积分" },
              { en: "tags", zh: "吊牌" },
            ],
            literalMeaning:
              '"store credit" 字面意思是 "商店信用额度"，实际是退货后给的购物积分，只能在这家店用，不退现金',
            alternativeExpressions: [
              {
                textEn:
                  "It's $129.99. You've got 90 days to return with receipt for a full refund. Just keep the tags on.",
                textZh: "129.99美元。有收据90天内可全额退。保留好吊牌就行。",
                actionHint: "了解退货期限",
                frequency: "common",
              },
              {
                textEn: "$129.99 with a 90-day return policy. No receipt? No worries — 30 days for store credit.",
                textZh: "129.99美元，90天退货期。没收据？没关系——30天内可以退成店铺积分。",
                actionHint: "注意保留收据",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "$129.99. You get 90 days with a receipt for a full refund, or 30 without for store credit. Just leave the tags on.",
            commonMistake: {
              wrong: "You can return it in 90 days.",
              correct: "Our return policy is 90 days with receipt for a full refund.",
              explanation: "“You can return”听起来像对顾客下指令，用“Our return policy is”更专业礼貌",
            },
            formalityVariants: {
              casual: "$129.99. 90 days with receipt for full refund, 30 without for store credit. Keep tags on.",
              standard:
                "The price for this item is $129.99. Our return policy allows for a full refund within 90 days if accompanied by a receipt, or store credit within 30 days if a receipt is unavailable. Please ensure all original tags remain attached.",
              formal:
                "The price for this particular item is $129.99. Regarding our return stipulations, a full refund is extended within 90 days upon presentation of the original receipt. Alternatively, if a receipt is not provided, store credit will be issued for returns made within 30 days of purchase. It is a requisite that all original product tags remain affixed.",
            },
          },
          {
            speaker: "you",
            textEn: "That's a reasonable policy. Do you have it in navy blue?",
            textZh: "退货政策不错。有深蓝色的吗？",
            casualVersion: "Policy sounds fair. Got it in navy blue?",
            commonMistake: {
              wrong: "Do you have navy blue color?",
              correct: "Do you have it in navy blue?",
              explanation: "说“navy blue color”听起来冗余，直接用“in navy blue”更自然地表达颜色",
            },
            formalityVariants: {
              casual: "Sounds good. Navy blue available?",
              standard:
                "That return policy seems quite reasonable. Do you happen to have this item available in navy blue?",
              formal:
                "I find that particular return policy to be quite equitable. Could you please inform me if this item is currently available in the color navy blue?",
            },
          },
          {
            speaker: "them",
            role: "销售员",
            textEn:
              "Let me check the back. We have black, silver, and... yes, navy blue. Here you go. Would you also like to see the matching checked bag? It's $179.99, but the set together is $269 — that's $40 off.",
            textZh:
              "我去后面看看。有黑色、银色，还有……有深蓝色的。给您。要看配套的托运箱吗？单买179.99美元，但整套269美元——便宜40美元。",
            keyPhrases: [
              { en: "check the back", zh: "去后面（仓库）看看" },
              { en: "matching", zh: "配套的" },
              { en: "checked bag", zh: "托运箱" },
              { en: "set", zh: "套装" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We have it in black, silver, and navy blue. The navy's the last one. Want to see the matching checked bag too? The set saves you $40.",
                textZh: "有黑色、银色和深蓝色。深蓝色是最后一个了。要看配套的托运箱吗？套装省40美元。",
                actionHint: "考虑买套装",
                frequency: "common",
              },
              {
                textEn:
                  "Let me check... yes, navy blue! And if you grab the matching checked bag, you'll save $40 on the set.",
                textZh: "我看看……有，深蓝色！如果加配套的托运箱，套装省40美元。",
                actionHint: "权衡是否买套装",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Lemme check the back. We got black, silver, and... yeah, navy blue. Here ya go. Wanna see the matching checked bag too? It's $179.99, but the set's $269 — saves ya 40 bucks.",
            formalityVariants: {
              casual:
                "Hold on, I'll check. Got black, silver, and... yep, navy. Here. Wanna see the matching checked bag? $179.99, but the set's $269 – $40 off.",
              standard:
                "Please allow me a moment to check the inventory in the back. We currently have black, silver, and... yes, navy blue is available. Here you are. Would you be interested in seeing the coordinating checked bag as well? It's priced at $179.99 individually, however, purchasing the set together comes to $269, which represents a savings of $40.",
              formal:
                "Certainly, I shall just confirm our stock levels in the back storage area. We presently carry this item in black, silver, and indeed, navy blue is available. Here is the item. Might I also interest you in viewing the corresponding checked luggage piece? Individually, it is priced at $179.99; however, acquiring both pieces as a complete set amounts to $269, thereby offering a $40 discount.",
            },
          },
          {
            speaker: "you",
            textEn:
              "That's tempting. Let me just take the carry-on for now. Can you hold the checked bag for me until tomorrow? I need to think about it.",
            textZh: "很心动。先买登机箱吧。托运箱能帮我留到明天吗？我想考虑一下。",
            casualVersion:
              "That's tempting. Just gonna grab the carry-on for now. Could you hold the checked bag 'til tomorrow? Gotta think it over.",
            culturalNote: "在美国零售店要求“hold”商品是很常见的请求，店员通常会乐意帮忙。",
            commonMistake: {
              wrong: "I want to think about it.",
              correct: "I need to think about it.",
              explanation: "“I want to think about it”听起来有点直接，用“I need to think about it”更温和自然",
            },
            formalityVariants: {
              casual:
                "Hmm, tempting. Just the carry-on for now. Can you hold the checked bag 'til tomorrow? Need to mull it over.",
              standard:
                "That offer is quite tempting. However, I think I'll just purchase the carry-on for now. Would it be possible for you to hold the checked bag for me until tomorrow? I'd like some time to consider it.",
              formal:
                "While that special offer is indeed quite appealing, I believe I shall proceed with the purchase of only the carry-on at this time. Would you be able to reserve the checked bag for me until tomorrow? I require a brief period to deliberate on the matter.",
            },
          },
          {
            speaker: "them",
            role: "销售员",
            textEn:
              "Of course! I can put it on hold for 48 hours. Just give me your name and I'll tag it. When you come back, ask for the hold items at the customer service desk.",
            textZh: "当然可以！我可以帮您保留48小时。告诉我您的名字我贴个标签。回来的时候去客服台说取保留商品就行。",
            keyPhrases: [
              { en: "put it on hold", zh: "保留/留起来" },
              { en: "tag it", zh: "贴标签" },
              { en: "customer service desk", zh: "客服台" },
            ],
            vocabNotes: {
              "put it on hold": {
                meaningInContext: "在这句话里表示：把商品留在店里，暂时不卖给别人，等你回来买",
                similarUsage: "类似用法：Can you put this dress on hold for me?（这条裙子能帮我留一下吗？）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Sure, I can hold it for 48 hours. Just give me your name and come to the customer service desk when you're back.",
                textZh: "可以，帮你留48小时。告诉我名字，回来去客服台取就行。",
                actionHint: "留下名字",
                frequency: "common",
              },
              {
                textEn: "I'll put a hold tag on it with your name. We'll keep it for two days at the service desk.",
                textZh: "我贴个保留标签写上你的名字。客服台帮你留两天。",
                actionHint: "记住去客服台取",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Sure thing! Can hold it for 48 hours. Just give me your name, I'll tag it. When you come back, ask for the hold stuff at customer service.",
            formalityVariants: {
              casual:
                "No problem! Can hold it 48 hours. Name, I'll tag it. Come back, ask for your hold at customer service.",
              standard:
                "Certainly! I can place that item on hold for you for up to 48 hours. Please provide your name, and I will tag it accordingly. Upon your return, kindly inquire about your reserved items at the customer service desk.",
              formal:
                "Absolutely! I would be pleased to place that item on reserve for a period of 48 hours. If you could kindly provide your name, I will affix a tag to it. When you return, please direct your inquiry regarding the reserved merchandise to our customer service desk.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect. My name is Wang. I'll be back tomorrow. Thanks so much for your help!",
            textZh: "好的。我姓王。明天来取。非常感谢你的帮助！",
            casualVersion: "Awesome. Name's Wang. Be back tomorrow. Thanks a bunch for your help!",
            commonMistake: {
              wrong: "Thank you for your help very much!",
              correct: "Thanks so much for your help!",
              explanation:
                "直接翻译的“Thank you for your help very much”听起来不自然，用“Thanks so much/a lot for your help”更地道",
            },
            formalityVariants: {
              casual: "Cool. Wang. Be back tomorrow. Cheers for the help!",
              standard: "Excellent. My name is Wang. I will return tomorrow. Thank you very much for your assistance!",
              formal:
                "Splendid. My name is Wang. I shall endeavor to return tomorrow. I sincerely appreciate your assistance in this matter.",
            },
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
            culturalNote: "询问国际配送时，美国商家通常不提供直邮中国，但会提供替代方案。",
            casualVersion: "Wanna grab this bookshelf, but we're in a hotel. Can you ship it to China?",
            commonMistake: {
              wrong: "Can you send it to China?",
              correct: "Can you ship it to China?",
              explanation: "“Ship” 更准确地指通过运输公司寄送大件物品或国际包裹。",
            },
            formalityVariants: {
              casual: "Wanna get this bookshelf, but we're at a hotel. Ship it to China?",
              standard: "We'd like to buy this bookshelf, but we're staying at a hotel. Can you ship it to China?",
              formal:
                "We are interested in purchasing this bookshelf. However, as we are currently residing in a hotel, we were wondering if international shipping to China is an available service.",
            },
          },
          {
            speaker: "them",
            role: "销售员",
            textEn:
              "Unfortunately, we don't offer international shipping directly. But I can suggest a few options: you could use a freight forwarding service, or we can ship it to a US address if you have one.",
            textZh:
              "很抱歉，我们不提供国际直邮。但我可以建议几个方案：您可以用转运公司，或者如果您有美国地址，我们可以寄到那里。",
            commonMistake: {
              wrong: "We cannot send it to China directly",
              correct: "We don't offer direct international shipping",
              explanation: "Can't/cannot 表达能力不足，'offer direct international shipping'更自然专业。",
            },
            keyPhrases: [
              { en: "international shipping", zh: "国际运输" },
              { en: "freight forwarding service", zh: "转运公司" },
            ],
            vocabNotes: {
              "freight forwarding service": {
                meaningInContext: "在这句话里表示：帮你把美国的包裹转寄到中国的第三方物流公司",
                similarUsage:
                  "类似用法：Many Chinese shoppers use freight forwarders to buy from US stores.（很多中国消费者用转运公司从美国商店买东西）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "We only ship domestically, I'm afraid. Have you looked into a mail forwarding service?",
                textZh: "我们只在国内配送。您了解过转运服务吗？",
                actionHint: "询问转运服务的推荐",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Nah, we don't do direct international shipping. But I got a couple ideas: you could use a freight forwarder, or we can send it to a US address if you have one.",
            formalityVariants: {
              casual:
                "Sorry, no direct international shipping. But hey, you could try a freight forwarder, or we can send it to a US address if you got one.",
              standard:
                "Unfortunately, we don't offer international shipping directly. But I can suggest a few options: you could use a freight forwarding service, or we can ship it to a US address if you have one.",
              formal:
                "Regrettably, we do not provide direct international shipping services. However, I can offer some alternative solutions: utilizing a freight forwarding service is an option, or we are able to ship the item to a domestic United States address should one be available to you.",
            },
          },
          {
            speaker: "you",
            textEn: "I see. What if I want it delivered to my hotel here in town? We check out in three days.",
            textZh: "明白了。如果送到我在市里住的酒店呢？我们三天后退房。",
            casualVersion: "Got it. So, what if I get it sent to my hotel here? We check out in three days.",
            commonMistake: {
              wrong: "If I want it delivered to my hotel here?",
              correct: "What if I want it delivered to my hotel here in town?",
              explanation: "“What if...” 是提出假设性问题的自然表达。",
            },
            formalityVariants: {
              casual: "Okay, what about delivering it to my hotel here? We're out in three days.",
              standard: "I see. What if I want it delivered to my hotel here in town? We check out in three days.",
              formal:
                "I understand. In the event that I wished for the item to be delivered to my hotel within the city, would that be a viable option? Please note, our check-out date is in three days.",
            },
          },
          {
            speaker: "them",
            role: "销售员",
            textEn:
              "Local delivery is free for orders over $99. We can usually deliver within 2 business days. I'd recommend calling your hotel first to make sure they accept packages for guests.",
            textZh: "满99美元本地配送免费。通常2个工作日内送到。建议先打电话确认酒店是否代收客人包裹。",
            commonMistake: {
              wrong: "I advise you call to confirm",
              correct: "I'd recommend calling to confirm",
              explanation: "I advise you 太直接且略显生硬，'I'd recommend'更礼貌自然。",
            },
            keyPhrases: [
              { en: "local delivery", zh: "本地配送" },
              { en: "business days", zh: "工作日" },
              { en: "accept packages", zh: "代收包裹" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Free delivery over $99, takes about 2 days. Just double-check with your hotel that they accept guest deliveries.",
                textZh: "满99免配送，大约2天到。先跟酒店确认能不能代收客人包裹。",
                actionHint: "先联系酒店确认",
                frequency: "common",
              },
              {
                textEn:
                  "Local delivery is on us for orders over $99. Usually 2 business days. Make sure your hotel is okay with receiving packages.",
                textZh: "满99本地配送免费。通常2个工作日。确保酒店可以代收。",
                actionHint: "确认酒店收件政策",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Local delivery's free if you spend over 99 bucks. Usually takes about 2 business days. I'd definitely call your hotel first though, just to make sure they'll take packages for guests.",
            culturalNote: "美国酒店不一定代收包裹，需提前确认",
            formalityVariants: {
              casual:
                "Local delivery's free over $99. Usually takes 2 business days. Best to call your hotel first, see if they take packages.",
              standard:
                "Local delivery is free for orders over $99. We can usually deliver within 2 business days. I'd recommend calling your hotel first to make sure they accept packages for guests.",
              formal:
                "Complimentary local delivery is provided for orders exceeding $99. Our typical delivery timeframe is within two business days. I would highly recommend contacting your hotel prior to delivery to confirm their policy regarding the acceptance of guest packages.",
            },
          },
          {
            speaker: "you",
            textEn: "Two business days might be cutting it close. Is there an express delivery option?",
            textZh: "两个工作日有点紧。有加急配送吗？",
            casualVersion: "Two business days? That's kinda pushing it. Got any faster delivery options?",
            commonMistake: {
              wrong: "Is there a fast delivery?",
              correct: "Is there an express delivery option?",
              explanation: "“Express delivery” 是指加急服务的标准说法。",
            },
            formalityVariants: {
              casual: "Two days is a bit tight. Can I get express delivery?",
              standard: "Two business days might be cutting it close. Is there an express delivery option?",
              formal:
                "A two-business-day delivery window may present a challenge. Do you offer an expedited delivery service?",
            },
          },
          {
            speaker: "them",
            role: "销售员",
            textEn:
              "Yes, we have next-day delivery for an extra $25. If you order now, you'd have it by tomorrow afternoon. We'll send you a text when it's on the way.",
            textZh: "有的，加25美元可以次日达。现在下单的话明天下午就能到。发货的时候会发短信通知您。",
            commonMistake: {
              wrong: "If you order now, tomorrow afternoon will arrive",
              correct: "If you order now, you'll get it by tomorrow afternoon",
              explanation: "中文'会到'主语是物，英文主语是人，且缺少'by'表示截止时间。",
            },
            keyPhrases: [
              { en: "next-day delivery", zh: "次日达" },
              { en: "on the way", zh: "在路上/已发出" },
            ],
            literalMeaning: '"cutting it close" 字面意思是 "切得很近"，实际表示时间很紧张、几乎来不及',
            alternativeExpressions: [
              {
                textEn: "We have next-day for $25 extra. Order now and it'll be at your hotel by tomorrow afternoon.",
                textZh: "加25美元可以次日达。现在下单明天下午就能到酒店。",
                actionHint: "选择加急配送",
                frequency: "common",
              },
              {
                textEn:
                  "Express delivery is available — $25 more, arrives tomorrow. We'll text you when it's on the way.",
                textZh: "有加急配送——加25美元，明天到。发货会短信通知你。",
                actionHint: "确认是否加急",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep, next-day delivery's 25 bucks extra. Order it now, you'll get it by tomorrow afternoon. We'll text you when it ships.",
            formalityVariants: {
              casual:
                "Yeah, next-day delivery's $25 more. Order now, get it tomorrow afternoon. We'll text you when it's shipped.",
              standard:
                "Yes, we have next-day delivery for an extra $25. If you order now, you'd have it by tomorrow afternoon. We'll send you a text when it's on the way.",
              formal:
                "Certainly, we provide a next-day delivery service for an additional charge of $25. Should you place your order presently, the item would arrive by tomorrow afternoon. A text message notification will be dispatched upon its shipment.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Let's do the next-day delivery. This bookshelf — does it come assembled or do we need to put it together?",
            textZh: "那就选次日达吧。这个书架是组装好的还是要自己装？",
            casualVersion:
              "Okay, next-day delivery then. So, this bookshelf — does it come built or do we gotta assemble it?",
            commonMistake: {
              wrong: "It is assembled or needs to assemble by ourselves?",
              correct: "Does it come assembled or do we need to put it together?",
              explanation:
                "询问是否组装好的自然说法是 “come assembled” 或 “pre-assembled”；“put it together” 指自己组装。",
            },
            formalityVariants: {
              casual: "Alright, next-day delivery. Is this bookshelf pre-assembled or do we build it?",
              standard:
                "Let's do the next-day delivery. This bookshelf — does it come assembled or do we need to put it together?",
              formal:
                "We will opt for the next-day delivery service. Regarding this bookshelf, does it arrive pre-assembled, or is customer assembly required?",
            },
          },
          {
            speaker: "them",
            role: "销售员",
            textEn:
              "It comes flat-packed, so some assembly is required. But all the tools are included and the instructions are pretty straightforward. It takes about 45 minutes. We also offer in-home assembly for $49 if you'd prefer.",
            textZh:
              "是平板包装的，需要自己组装。不过工具都附带了，说明书也很清楚。大概45分钟。如果需要的话，我们也提供上门组装服务49美元。",
            commonMistake: {
              wrong: "All the tools included",
              correct: "All the tools are included",
              explanation: "英文中通常需要动词，不能省略 'are'。",
            },
            keyPhrases: [
              { en: "flat-packed", zh: "平板包装" },
              { en: "some assembly required", zh: "需要自行组装" },
              { en: "in-home assembly", zh: "上门组装" },
            ],
            vocabNotes: {
              "flat-packed": {
                meaningInContext: "在这句话里表示：家具拆成零件放在扁平的箱子里，买回去需要自己组装",
                similarUsage: "类似用法：IKEA furniture is mostly flat-packed.（宜家家具大多是平板包装的）",
              },
            },
            culturalMeaning:
              '"some assembly required" 是美国商品常见的说法，意味着你买回去需要自己动手拼装，这在美国是很正常的',
            alternativeExpressions: [
              {
                textEn:
                  "It comes flat-packed. Takes about 45 minutes to put together — tools are included. Or we can assemble it for $49.",
                textZh: "平板包装的。大约45分钟装好——工具都附带。也可以付49美元让我们上门装。",
                actionHint: "决定是否需要组装服务",
                frequency: "common",
              },
              {
                textEn:
                  "Some assembly required, but it's pretty straightforward. If you'd rather not DIY, in-home assembly is $49.",
                textZh: "需要自己装，但不难。如果不想自己动手，上门组装49美元。",
                actionHint: "考虑自己装还是付费安装",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "It's flat-packed, so yeah, you gotta put it together. But all the tools are in there, and the instructions are super easy. Should take 'bout 45 minutes. We can also assemble it for ya at your place for 49 bucks if you want.",
            formalityVariants: {
              casual:
                "It's flat-packed, so you'll build it. Tools included, instructions are clear. About 45 mins. Or we can do in-home assembly for $49.",
              standard:
                "It comes flat-packed, so some assembly is required. But all the tools are included and the instructions are pretty straightforward. It takes about 45 minutes. We also offer in-home assembly for $49 if you'd prefer.",
              formal:
                "The item is delivered in a flat-packed state, thus requiring some assembly. However, all necessary tools are provided, and the instructions are quite lucid. The estimated assembly time is approximately 45 minutes. Additionally, we do offer an in-home assembly service for a fee of $49, should you desire.",
            },
          },
          {
            speaker: "you",
            textEn:
              "We won't need the assembly since it's going to be shipped to China eventually. Let's just do the delivery. Can I pay here?",
            textZh: "不需要组装了，反正最终要寄回中国。就送货就行。在这里付款吗？",
            casualVersion:
              "No assembly needed, it's heading to China eventually. Just the delivery then. Can I pay here?",
            commonMistake: {
              wrong: "We don't need assembly.",
              correct: "We won't need the assembly.",
              explanation: "“Won't need the assembly” 更自然，表达预期未来不需要某项服务。",
            },
            formalityVariants: {
              casual: "No assembly needed, it's going to China anyway. Just delivery. Can I pay here?",
              standard:
                "We won't need the assembly since it's going to be shipped to China eventually. Let's just do the delivery. Can I pay here?",
              formal:
                "We will not require the assembly service, as the item will ultimately be shipped to China. We will proceed solely with the delivery. May I complete the payment here?",
            },
          },
          {
            speaker: "them",
            role: "销售员",
            textEn:
              "Yes, pay right here. I'll need a delivery address and your phone number for the tracking notification. Your total with next-day shipping is $274.99.",
            textZh: "对，在这里付。需要您提供送货地址和手机号码用来发物流通知。加上次日达运费一共274.99美元。",
            commonMistake: {
              wrong: "Need your address and phone for shipping notice",
              correct: "I'll need your delivery address and phone number for shipping notifications",
              explanation: "'Need'太直接，'I'll need'更缓和。'notice'单数不常用作总称，'notifications'更自然。",
            },
            keyPhrases: [
              { en: "delivery address", zh: "送货地址" },
              { en: "tracking notification", zh: "物流通知" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Pay right here. I'll need your delivery address and phone for the tracking text. Total with shipping is $274.99.",
                textZh: "在这付。需要送货地址和手机号发物流通知。加运费一共274.99美元。",
                actionHint: "提供地址和电话",
                frequency: "common",
              },
              {
                textEn:
                  "Your total with next-day delivery is $274.99. Just give me the hotel address and a phone number for tracking.",
                textZh: "加次日达一共274.99美元。给我酒店地址和手机号就行。",
                actionHint: "准备付款",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep, pay right here. Just need your delivery address and a phone number for tracking. Total's $274.99 with the next-day shipping.",
            formalityVariants: {
              casual:
                "Yep, pay here. I need your address and phone for tracking. Total with next-day shipping is $274.99.",
              standard:
                "Yes, pay right here. I'll need a delivery address and your phone number for the tracking notification. Your total with next-day shipping is $274.99.",
              formal:
                "Indeed, payment can be processed here. I will require a delivery address and your contact telephone number for the purpose of dispatching tracking notifications. Your grand total, including the next-day shipping service, amounts to $274.99.",
            },
          },
          {
            speaker: "you",
            textEn: "Here's my hotel address and phone number. I'll pay by credit card.",
            textZh: "这是我的酒店地址和手机号。我刷信用卡。",
            casualVersion: "Here's the hotel address and my number. I'll just use my card.",
            commonMistake: {
              wrong: "I pay by credit card.",
              correct: "I'll pay by credit card.",
              explanation: "“I'll pay” 表达意愿，比直接说 “I pay” 更自然客气。",
            },
            formalityVariants: {
              casual: "Hotel address, my number. Card payment.",
              standard: "Here's my hotel address and phone number. I'll pay by credit card.",
              formal:
                "I am providing my hotel address and contact telephone number. I will be settling the payment with a credit card.",
            },
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
            textEn:
              "Hi, I'm planning to hike in the Grand Canyon next week. I need some proper gear. Where should I start?",
            textZh: "你好，我下周打算去大峡谷徒步。需要一些专业装备。从哪里开始好？",
            casualVersion:
              "Hey, planning to hike the Grand Canyon next week. Need some proper gear. Where should I start?",
            formalityVariants: {
              casual: "Hey, gonna hike the Grand Canyon next week. Need gear. Where do I start?",
              standard:
                "Hi, I'm planning to hike in the Grand Canyon next week. I need some proper gear. Where should I start?",
              formal:
                "Good morning/afternoon, I am planning a hiking trip to the Grand Canyon next week and require some specialized equipment. Could you please advise on where would be best to begin?",
            },
          },
          {
            speaker: "them",
            role: "运动顾问",
            textEn:
              "Great destination! First things first — do you have proper hiking boots? That's the most important piece of gear for the Canyon. The trails can be rocky and steep.",
            textZh: "好目的地！首先——您有合适的登山鞋吗？那是大峡谷最重要的装备。步道又多石头又陡。",
            commonMistake: {
              wrong: "That is the most important equipment",
              correct: "That's the most important gear",
              explanation: "equipment听起来很正式，gear更口语化，适合描述运动用品",
            },
            keyPhrases: [
              { en: "hiking boots", zh: "登山鞋" },
              { en: "gear", zh: "装备" },
              { en: "trails", zh: "步道" },
              { en: "rocky and steep", zh: "多石头且陡峭" },
            ],
            alternativeExpressions: [
              {
                textEn: "Awesome! The Canyon is incredible. Let's start with footwear — what hiking shoes do you have?",
                textZh: "太棒了！大峡谷很壮观。先从鞋子说起——你有什么登山鞋？",
                actionHint: "告诉他你现有的装备情况",
                frequency: "common",
              },
            ],
            casualVersion:
              "Awesome spot! First things first — got proper hiking boots? They're the most important for the Canyon. Trails get rocky and steep.",
            formalityVariants: {
              casual: "Grand Canyon's great! Boots first, right? Super important there, trails are rocky and steep.",
              standard:
                "Great destination! First things first — do you have proper hiking boots? That's the most important piece of gear for the Canyon. The trails can be rocky and steep.",
              formal:
                "The Grand Canyon is an excellent choice! To begin, may I inquire if you possess appropriate hiking boots? They are unequivocally the most crucial item for navigating the Canyon, given the rocky and steep terrain.",
            },
          },
          {
            speaker: "you",
            textEn: "I only have sneakers. I definitely need hiking boots. What do you recommend for a beginner?",
            textZh: "我只有运动鞋。肯定需要登山鞋。新手你推荐什么？",
            casualVersion: "Only got sneakers. Definitely need boots. What d'you recommend for a beginner?",
            commonMistake: {
              wrong: "What do you recommend for beginner?",
              correct: "What do you recommend for a beginner?",
              explanation: "中文没有冠词，'for a beginner' 的 'a' 很重要",
            },
            formalityVariants: {
              casual: "Just sneakers. Need boots for sure. Beginner recommendations?",
              standard: "I only have sneakers. I definitely need hiking boots. What do you recommend for a beginner?",
              formal:
                "Currently, I only possess athletic shoes. I am certainly in need of hiking boots. What would you suggest for an individual with limited experience?",
            },
          },
          {
            speaker: "them",
            role: "运动顾问",
            textEn:
              "For a beginner doing the Grand Canyon, I'd suggest a mid-cut boot with ankle support and a waterproof membrane. This Merrell Moab is our top seller — it's comfortable right out of the box, so you won't need much break-in time.",
            textZh:
              "新手去大峡谷的话，我建议中帮的带踝部支撑和防水膜的登山鞋。这款 Merrell Moab 是我们的销量冠军——开箱就很舒服，不需要太多磨合时间。",
            culturalNote: "“开箱就很舒服，不需要太多磨合时间”是一种销售语言，指的是鞋子不需要长时间穿着来适应脚型，首次穿上就很舒适。",
            commonMistake: {
              wrong: "comfortable out of the box",
              correct: "comfortable right out of the box",
              explanation: "right out of the box是常用短语，表示“开箱即用/很舒适”",
            },
            keyPhrases: [
              { en: "mid-cut", zh: "中帮的" },
              { en: "ankle support", zh: "踝部支撑" },
              { en: "waterproof membrane", zh: "防水膜" },
              { en: "right out of the box", zh: "开箱即用" },
              { en: "break-in time", zh: "磨合时间" },
            ],
            vocabNotes: {
              "break-in time": {
                meaningInContext: "在这句话里表示：新鞋穿着不舒适、需要穿几次才能变得舒适合脚的过渡期",
                similarUsage: "类似用法：Leather shoes usually need more break-in time.（皮鞋通常需要更多磨合时间）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "For a beginner, I'd go with this Merrell Moab — mid-cut, waterproof, comfy right out of the box.",
                textZh: "新手的话推荐这款Merrell Moab——中帮、防水、开箱就舒服。",
                actionHint: "试穿推荐的鞋",
                frequency: "common",
              },
              {
                textEn:
                  "The Merrell Moab is our best seller for the Canyon. Good ankle support, waterproof, and barely needs breaking in.",
                textZh: "去大峡谷Merrell Moab卖得最好。踝部支撑好、防水，几乎不用磨合。",
                actionHint: "了解这款鞋的特点",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "For a Grand Canyon beginner, I'd say mid-cut boots with ankle support and a waterproof membrane. This Merrell Moab's our best seller — comfy right outta the box, so no big break-in needed.",
            formalityVariants: {
              casual:
                "Beginner for Grand Canyon? Go mid-cut with ankle support and waterproof. Merrell Moab's top pick – comfy instantly, no break-in.",
              standard:
                "For a beginner doing the Grand Canyon, I'd suggest a mid-cut boot with ankle support and a waterproof membrane. This Merrell Moab is our top seller — it's comfortable right out of the box, so you won't need much break-in time.",
              formal:
                "For a novice embarking on a Grand Canyon expedition, I would advise a mid-cut boot featuring comprehensive ankle support and a waterproof membrane. The Merrell Moab model, being our perennial best-seller, offers exceptional comfort immediately upon wear, thereby minimizing the requisite break-in period.",
            },
          },
          {
            speaker: "you",
            textEn: "Can I try them on? I'm a size 42 in Chinese sizing — I'm not sure what that is here.",
            textZh: "可以试穿吗？我穿中国42码——不知道这里是多少码。",
            commonMistake: {
              wrong: "I wear Chinese size 42 - I don't know this is what size here.",
              correct: "I wear Chinese size 42 — I don't know what that is here.",
              explanation: "“不知道这里是多少码”更自然地说法是what that is here或what size that translates to here。",
            },
            culturalNote: "中国42码约等于美国男士8.5-9码或欧洲42码。建议现场测量。",
            casualVersion: "Can I try 'em on? I'm a Chinese 42 — not sure what that is here.",
            formalityVariants: {
              casual: "Try 'em on? I'm a Chinese 42 – what size is that here?",
              standard: "Can I try them on? I'm a size 42 in Chinese sizing — I'm not sure what that is here.",
              formal:
                "May I please try them on? My shoe size is a Chinese 42; however, I am uncertain of the equivalent measurement in your local sizing system.",
            },
          },
          {
            speaker: "them",
            role: "运动顾问",
            textEn:
              "Chinese 42 would be about a US 8.5 or 9. Let me measure your foot to be sure — for hiking boots, you actually want about a half size larger than your regular shoes, because your feet swell on long hikes and you need room for thick socks.",
            textZh:
              "中国42码大概是美国8.5或9码。我帮您量一下更准确——登山鞋其实要比平时大半码，因为长时间徒步脚会肿，还要留空间给厚袜子。",
            keyPhrases: [
              { en: "measure your foot", zh: "量一下脚" },
              { en: "half size larger", zh: "大半码" },
              { en: "swell", zh: "肿胀" },
              { en: "thick socks", zh: "厚袜子" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Chinese 42 is roughly a US 9. Let me measure to be exact — and for hiking, go a half size up for swelling and thick socks.",
                textZh: "中国42大概美国9号。我量准确一点——登山鞋要大半码，因为走久了脚会肿还要穿厚袜子。",
                actionHint: "让店员量脚",
                frequency: "common",
              },
              {
                textEn: "That'd be about a US 8.5 or 9. But for hiking boots, size up — your feet swell on long hikes.",
                textZh: "大约美国8.5或9号。但登山鞋要拿大的——走远路脚会肿。",
                actionHint: "注意登山鞋要大半码",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Chinese 42's about a US 8.5 or 9. Lemme measure your foot to be sure — for hiking boots, ya actually want about a half size bigger than your regular shoes, 'cause feet swell on long hikes and you need room for thick socks.",
            culturalNote: "美国和中国的鞋码系统不同，购买时需转换或量脚确认。",
            formalityVariants: {
              casual:
                "Chinese 42 is US 8.5/9. I'll measure, but hike boots are usually half size up 'cause feet swell and you need thick socks.",
              standard:
                "Chinese 42 would be about a US 8.5 or 9. Let me measure your foot to be sure — for hiking boots, you actually want about a half size larger than your regular shoes, because your feet swell on long hikes and you need room for thick socks.",
              formal:
                "A Chinese size 42 typically corresponds to a US 8.5 or 9. Allow me to measure your foot to ensure accuracy, as it is advisable for hiking boots to be approximately a half-size larger than your standard footwear to accommodate foot swelling during extended hikes and the necessity of thicker socks.",
            },
          },
          {
            speaker: "you",
            textEn: "I didn't know that. Okay, please measure me. And I'll need the thick socks too, I guess.",
            textZh: "我不知道还有这个说法。好，帮我量一下。我想厚袜子也需要买。",
            culturalNote: "“还有这个说法”在中文中很常见，表示之前不知道某个知识点。英文中通常直接说 I didn't know that。",
            casualVersion: "Didn't know that. Okay, measure me. And I'll need the thick socks too, I guess.",
            formalityVariants: {
              casual: "Huh, didn't know. Yeah, measure. Guess I need the thick socks too.",
              standard: "I didn't know that. Okay, please measure me. And I'll need the thick socks too, I guess.",
              formal:
                "I was unaware of that particular detail. Very well, please proceed with the measurement. I presume I will also require the appropriate thick socks.",
            },
          },
          {
            speaker: "them",
            role: "运动顾问",
            textEn:
              "You're a 9 in US sizing, so I'd put you in a 9.5 for hiking. Try these on with these merino wool socks — they wick moisture and prevent blisters. Walk around the store, try the ramp over there to simulate a downhill.",
            textZh:
              "您美码是9号，徒步建议穿9.5号。穿上这双美利奴羊毛袜试试——能吸湿防水泡。在店里走走，试试那边的斜坡模拟下坡。",
            keyPhrases: [
              { en: "merino wool", zh: "美利奴羊毛" },
              { en: "wick moisture", zh: "吸湿排汗" },
              { en: "blisters", zh: "水泡" },
              { en: "ramp", zh: "斜坡" },
              { en: "simulate", zh: "模拟" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You're a 9, so I'll put you in a 9.5. Try them with these merino wool socks and walk on the ramp to test downhill.",
                textZh: "你是9号，给你拿9.5的。穿上这双羊毛袜试试，在斜坡上走走测试下坡。",
                actionHint: "穿上袜子试鞋",
                frequency: "common",
              },
              {
                textEn:
                  "9.5 for hiking. These wool socks are a must — they prevent blisters. Walk around and try the ramp.",
                textZh: "徒步穿9.5。这种羊毛袜必备——防水泡。走走试试那边的斜坡。",
                actionHint: "在斜坡上测试",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "You're a 9 in US sizing, so I'd put ya in a 9.5 for hiking. Try these on with these merino wool socks — they wick moisture and prevent blisters. Walk around the store, try the ramp over there to simulate a downhill.",
            commonMistake: {
              wrong: "simulate the downhill",
              correct: "simulate a downhill",
              explanation: "这里指的是“一个下坡”而非特指某个下坡，因此用a",
            },
            formalityVariants: {
              casual:
                "You're a US 9, so for hiking, go 9.5. Try these on with these merino wool socks – no blisters, wicks moisture. Walk around, hit that ramp for downhill practice.",
              standard:
                "You're a 9 in US sizing, so I'd put you in a 9.5 for hiking. Try these on with these merino wool socks — they wick moisture and prevent blisters. Walk around the store, try the ramp over there to simulate a downhill.",
              formal:
                "Based on US sizing, you are a size 9, and I would recommend a 9.5 for hiking purposes. Kindly try these on with these merino wool socks, which are excellent for moisture-wicking and blister prevention. Please walk around the store and utilize the ramp to simulate a downhill gradient.",
            },
          },
          {
            speaker: "you",
            textEn:
              "These feel great! Very comfortable on the ramp too. I'll take the boots and two pairs of the socks. Do I need anything else for the Canyon?",
            textZh: "感觉很好！在斜坡上也很舒服。登山鞋和两双袜子我都要了。去大峡谷还需要什么？",
            commonMistake: {
              wrong: "What else needs for the Grand Canyon?",
              correct: "What else do I need for the Grand Canyon?",
              explanation: "提问时主语不能省略，What else do I need...? 是正确结构",
            },
            casualVersion:
              "These feel great! Super comfy on the ramp too. I'll take the boots and two pairs of socks. Anything else for the Canyon?",
            formalityVariants: {
              casual: "Love these! Comfy on the ramp too. I'll get the boots and two socks. What else for Canyon?",
              standard:
                "These feel great! Very comfortable on the ramp too. I'll take the boots and two pairs of the socks. Do I need anything else for the Canyon?",
              formal:
                "These feel exceptionally comfortable, even on the ramp. I will purchase the boots and two pairs of socks. Is there anything else I might require for the Grand Canyon?",
            },
          },
          {
            speaker: "them",
            role: "运动顾问",
            textEn:
              "I'd highly recommend a hydration pack — it's like a backpack with a built-in water bladder. You'll need to carry at least 3 liters of water in the Canyon. Also, trekking poles will save your knees on the steep sections. Altogether, the boots, socks, hydration pack, and poles would be about $320.",
            textZh:
              "强烈推荐水袋背包——就是带内置水袋的背包。在大峡谷至少要带3升水。另外登山杖能在陡坡路段保护膝盖。登山鞋、袜子、水袋背包加登山杖一共大约320美元。",
            commonMistake: {
              wrong: "A hydration pack is a backpack with a built-in water bag.",
              correct: "a hydration pack — a backpack with a built-in water reservoir.",
              explanation: "water reservoir或water bladder是水袋包里水袋的更专业名称",
            },
            keyPhrases: [
              { en: "hydration pack", zh: "水袋背包" },
              { en: "water bladder", zh: "水袋" },
              { en: "trekking poles", zh: "登山杖" },
            ],
            vocabNotes: {
              "hydration pack": {
                meaningInContext: "在这句话里表示：背包里内置一个软水袋，通过吸管可以边走边喝水",
                similarUsage:
                  "类似用法：Don't forget to fill your hydration pack before the hike.（徒步前别忘了把水袋装满）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "You'll need at least 3 liters of water in the Canyon. A hydration pack is the way to go. Trekking poles will save your knees too.",
                textZh: "在大峡谷至少要带3升水。水袋背包最方便。登山杖也能保护膝盖。",
                actionHint: "考虑必要装备",
                frequency: "common",
              },
              {
                textEn:
                  "I'd add a hydration pack and trekking poles. The whole setup — boots, socks, pack, and poles — would be about $320.",
                textZh: "建议加水袋背包和登山杖。全套——鞋、袜子、背包、杖——大约320美元。",
                actionHint: "了解全套价格",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Definitely get a hydration pack — it's a backpack with a water bladder. You'll need at least 3 liters of water in the Canyon. Also, trekking poles'll save your knees on the steep parts. Boots, socks, pack, and poles would be 'bout $320 total.",
            culturalNote: "在美国大峡谷徒步，对饮水量的要求非常严格，需携带大量水。",
            formalityVariants: {
              casual:
                "Hydration pack's a must — backpack with water. Need 3L water minimum for Canyon. Poles'll save your knees on steep bits. Boots, socks, pack, poles? About $320.",
              standard:
                "I'd highly recommend a hydration pack — it's like a backpack with a built-in water bladder. You'll need to carry at least 3 liters of water in the Canyon. Also, trekking poles will save your knees on the steep sections. Altogether, the boots, socks, hydration pack, and poles would be about $320.",
              formal:
                "I would strongly advise acquiring a hydration pack, which is essentially a backpack equipped with an integrated water bladder. It is imperative to carry a minimum of 3 liters of water within the Canyon. Additionally, trekking poles will provide significant support and protection for your knees on the steeper sections. The total cost for the boots, socks, hydration pack, and poles would amount to approximately $320.",
            },
          },
          {
            speaker: "you",
            textEn: "Okay, I'll take everything. Is there any discount if I buy all of these together?",
            textZh: "好，全要了。一起买有优惠吗？",
            culturalNote: "在美国，直接询问折扣是可以接受的，但在有些文化中可能会被视为不礼貌。这里客人直接问 'Any discount...?'",
            casualVersion: "Okay, I'll take everything. Any discount if I buy all this together?",
            formalityVariants: {
              casual: "Alright, I'll get it all. Can I get a deal for buying everything?",
              standard: "Okay, I'll take everything. Is there any discount if I buy all of these together?",
              formal:
                "Understood, I will proceed with the purchase of all the recommended items. Would there be any potential discount or bundled pricing available for purchasing these items collectively?",
            },
          },
          {
            speaker: "them",
            role: "运动顾问",
            textEn:
              "Let me see what I can do. If you sign up for our free membership, you'll get 15% off your first purchase and free returns within 60 days. That would bring your total down to about $272.",
            textZh:
              "我看看能怎么帮你。如果注册我们的免费会员，首次消费打八五折，而且60天内免费退货。这样你的总价大约272美元。",
            commonMistake: {
              wrong: "That makes your total around $272.",
              correct: "That would bring your total to about $272.",
              explanation: "bring your total to...是更自然的表达方式，表示总价变为某个金额",
            },
            keyPhrases: [
              { en: "membership", zh: "会员" },
              { en: "first purchase", zh: "首次消费" },
              { en: "free returns", zh: "免费退货" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sign up for our free membership and get 15% off today plus 60-day free returns. That'll save you about $50.",
                textZh: "注册免费会员今天打八五折还有60天免费退货。能省大约50美元。",
                actionHint: "注册会员省钱",
                frequency: "common",
              },
              {
                textEn:
                  "Join our loyalty program — it's free — and you'll get 15% off your first buy. That brings it down to $272.",
                textZh: "加入我们的会员——免费的——首次消费八五折。这样降到272美元。",
                actionHint: "免费注册享折扣",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Lemme see what I can do. If you sign up for our free membership, you'll get 15% off your first purchase and free returns within 60 days. That'd bring your total down to 'bout $272.",
            formalityVariants: {
              casual:
                "I'll check. Join our free membership, get 15% off your first buy and 60-day free returns. That makes it around $272.",
              standard:
                "Let me see what I can do. If you sign up for our free membership, you'll get 15% off your first purchase and free returns within 60 days. That would bring your total down to about $272.",
              formal:
                "Allow me to review the options. Should you enroll in our complimentary membership program, you would receive a 15% discount on your initial purchase, alongside a 60-day period for complimentary returns. This would adjust your total to approximately $272.",
            },
          },
          {
            speaker: "you",
            textEn: "Deal. I'll sign up. Can I use my Chinese phone number for the account?",
            textZh: "成交。我注册。可以用中国手机号注册吗？",
            culturalNote: "“Deal.”是一种非常口语化的表达，表示同意、成交，语气比较随意和直接。",
            casualVersion: "Deal. I'll sign up. Can I use my Chinese phone number for the account?",
            formalityVariants: {
              casual: "Sounds good. I'll sign up. Chinese number okay for the account?",
              standard: "Deal. I'll sign up. Can I use my Chinese phone number for the account?",
              formal:
                "Agreed. I will proceed with registration. Is it permissible to utilize my Chinese mobile phone number for the account creation?",
            },
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
            casualVersion: "Hey, lookin' for an NBA jersey. Wanna get one for my son — he's a huge LeBron fan.",
            culturalNote: "美国购物直接说目的更自然，无需客套",
            commonMistake: {
              wrong: "I want to buy one for my son",
              correct: "I'm looking to buy one for my son",
              explanation: "I want to 听起来比较生硬，用 I'm looking for 或 I'd like to 更自然礼貌。",
            },
            formalityVariants: {
              casual: "Hey, I need an NBA jersey for my son, he's a huge LeBron fan.",
              standard: "Hi, I'm looking for an NBA jersey. I want to buy one for my son — he's a huge LeBron fan.",
              formal:
                "Good morning/afternoon, I'm interested in purchasing an NBA jersey. It's intended as a gift for my son, who is a significant admirer of LeBron James.",
            },
          },
          {
            speaker: "them",
            role: "销售员",
            textEn:
              "Nice! We have three types of NBA jerseys — the Swingman is the standard fan jersey at $110, the Icon edition is $150 with better fabric, and the authentic on-court jersey is $300. Which one are you thinking?",
            textZh:
              "不错！我们有三种 NBA 球衣——Swingman 是标准球迷版110美元，Icon版150美元面料更好，场上球员版300美元。您想要哪种？",
            commonMistake: {
              wrong: "We have three kinds of NBA jerseys.",
              correct: "We have three types of NBA jerseys",
              explanation: "types比kinds更常用，且这里的kinds可以省略，直接说three NBA jerseys即可",
            },
            keyPhrases: [
              { en: "Swingman", zh: "球迷版" },
              { en: "Icon edition", zh: "图标版" },
              { en: "authentic on-court", zh: "场上球员版" },
              { en: "fabric", zh: "面料" },
            ],
            alternativeExpressions: [
              {
                textEn: "We've got replica, premium, and authentic jerseys. What's your budget?",
                textZh: "我们有复刻版、高端版和正品版。您的预算是？",
                actionHint: "说出预算范围",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Cool! Three kinds of NBA jerseys — Swingman's the standard fan one, $110. Icon's $150, better fabric. Authentic on-court's $300. Which one you thinkin'?",
            formalityVariants: {
              casual:
                "Awesome! We got three types: standard Swingman for $110, Icon's $150 with better feel, and the real deal on-court for $300. What's catching your eye?",
              standard:
                "Nice! We have three types of NBA jerseys — the Swingman is the standard fan jersey at $110, the Icon edition is $150 with better fabric, and the authentic on-court jersey is $300. Which one are you thinking?",
              formal:
                "Excellent choice! We offer three distinct tiers of NBA jerseys: the Swingman, which is our standard fan model, priced at $110; the Icon edition, featuring enhanced fabric quality, available for $150; and finally, the authentic on-court jersey, which retails for $300. Could you please indicate which option you might prefer?",
            },
          },
          {
            speaker: "you",
            textEn:
              "The Swingman is fine — it's a gift. What sizes do you have? He's 13 years old and pretty tall for his age.",
            textZh: "Swingman 就好——是礼物。有什么尺码？他13岁，同龄人里算高的。",
            casualVersion: "Swingman's good — it's a gift. What sizes ya got? He's 13 and pretty tall for his age.",
            commonMistake: {
              wrong: "He is 13 years old, and tall in his age.",
              correct: "He's 13 years old and pretty tall for his age.",
              explanation: "tall for his age 是固定搭配，表达“同龄人中算高的”，比直译更自然。",
            },
            formalityVariants: {
              casual: "Swingman works, it's just a gift. What sizes you got? He's 13, pretty tall.",
              standard:
                "The Swingman is fine — it's a gift. What sizes do you have? He's 13 years old and pretty tall for his age.",
              formal:
                "The Swingman model will be perfectly suitable, as this is intended as a gift. Regarding sizing, could you please advise on the available options? My son is thirteen years old and notably tall for his peer group.",
            },
          },
          {
            speaker: "them",
            role: "销售员",
            textEn:
              "For a tall 13-year-old, I'd suggest either a youth XL or an adult small. Youth sizes run a bit shorter in length. Do you know his height roughly?",
            textZh: "个子高的13岁，我建议青少年XL或成人S码。青少年码衣长会短一些。大概知道他的身高吗？",
            culturalNote: "在美国，青少年服装尺码（Youth sizes）和成人尺码（Adult sizes）是分开的。青少年尺码通常会考虑整体版",
            commonMistake: {
              wrong: "Do you know his height roughly?",
              correct: "Do you know his approximate height?",
              explanation: "approximate height是更自然的表达，roughly可以，但不够正式",
            },
            keyPhrases: [
              { en: "youth XL", zh: "青少年加大号" },
              { en: "adult small", zh: "成人小号" },
              { en: "run a bit shorter", zh: "偏短一些" },
            ],
            vocabNotes: {
              "run a bit shorter": {
                meaningInContext: "在这句话里表示：这个尺码的衣长比预期偏短一些，是描述版型特点的常见说法",
                similarUsage:
                  "类似用法：These pants run long — you might need to hem them.（这条裤子偏长，可能需要改短）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "For a tall 13-year-old, I'd say youth XL or adult small. Youth sizes run shorter. Know his height?",
                textZh: "个子高的13岁，青少年XL或成人小号。青少年码偏短。知道他身高吗？",
                actionHint: "说出大概身高",
                frequency: "common",
              },
              {
                textEn:
                  "At that age, I'd recommend adult small — he's still growing. Youth XL might be too short in a few months.",
                textZh: "这个年龄建议成人小号——他还在长。青少年XL几个月后可能就短了。",
                actionHint: "考虑成长空间",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "For a tall 13-year-old, I'd say youth XL or adult small. Youth sizes are kinda shorter. Know his height, roughly?",
            formalityVariants: {
              casual:
                "Tall 13-year-old, I'd go with youth XL or adult S. Youth sizes are shorter, though. Got his rough height?",
              standard:
                "For a tall 13-year-old, I'd suggest either a youth XL or an adult small. Youth sizes run a bit shorter in length. Do you know his height roughly?",
              formal:
                "Given his stature for a thirteen-year-old, I would recommend considering either a youth XL or an adult small. Please note that youth sizes typically have a slightly shorter length. Do you happen to know his approximate height?",
            },
          },
          {
            speaker: "you",
            textEn:
              "He's about 170 cm — I mean, about 5'7\". I think an adult small might be better since he's still growing.",
            textZh: "他大概170厘米——就是5尺7寸左右。我想成人小号好一些，他还在长个。",
            commonMistake: {
              wrong: "He's about 170 centimeters, that's around 5 feet 7 inches.",
              correct: "He's about 170 cm — that's around 5 feet 7 inches.",
              explanation: "170 cm 可以直接说 one seventy cm，外国人理解无碍",
            },
            culturalNote:
              '美国用英尺和英寸表示身高。170cm 约等于 5\'7"。可以说 "about five seven" 或直接说厘米让对方帮你换算。',
            casualVersion: "He's like, 170 cm — so, 'bout 5'7\".",
            formalityVariants: {
              casual: "He's around 170 cm, like 5'7\".",
              standard: "He's about 170 cm — I mean, about 5'7\".",
              formal: "His approximate height is 170 centimeters, which translates to roughly 5 feet, 7 inches.",
            },
          },
          {
            speaker: "them",
            role: "销售员",
            textEn:
              "Smart thinking. Here's the adult small in the Lakers purple and gold — number 23, LeBron James. We also have the City Edition which is a limited design this year.",
            textZh: "考虑得周到。这是成人小号的湖人紫金配色——23号，勒布朗·詹姆斯。我们还有城市版，今年的限定款设计。",
            culturalNote: "Lakers purple and gold 指的是湖人队标志性的紫金色。美国体育文化中，球队颜色和球员号码是非常重要的",
            commonMistake: {
              wrong: "This is adult small Lakers purple and gold.",
              correct: "Here's an adult small Lakers purple and gold",
              explanation: "Here's... 在递给对方物品时更自然、常用",
            },
            keyPhrases: [
              { en: "City Edition", zh: "城市版" },
              { en: "limited design", zh: "限定款设计" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Here's the adult small in Lakers #23. We also have the City Edition — it's this year's limited design.",
                textZh: "这是成人小号湖人23号。还有城市版——今年的限定设计。",
                actionHint: "看看两个版本",
                frequency: "common",
              },
              {
                textEn:
                  "Good call on adult small. This is the standard purple and gold. But check out the City Edition — it's a limited run.",
                textZh: "成人小号选得好。这是标准紫金配色。不过看看城市版——限量的。",
                actionHint: "比较两款",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Smart! Here's the adult small, Lakers purple and gold — number 23, LeBron. Oh, and we got the City Edition, it's a limited design this year.",
            formalityVariants: {
              casual:
                "Good call. Here's the adult small in Lakers colors – #23, LeBron. We also have this year's limited City Edition.",
              standard:
                "Smart thinking. Here's the adult small in the Lakers purple and gold — number 23, LeBron James. We also have the City Edition which is a limited design this year.",
              formal:
                "That's a very practical approach. Here is the adult small size in the Lakers' iconic purple and gold, featuring number 23, LeBron James. Additionally, we carry the City Edition, which is a limited-release design for this year.",
            },
          },
          {
            speaker: "you",
            textEn: "The City Edition looks amazing! Is it more expensive?",
            textZh: "城市版太好看了！贵一些吗？",
            casualVersion: "The City Edition looks awesome! Is it more?",
            commonMistake: {
              wrong: "Is it more expensive than the other one?",
              correct: "Is it more expensive?",
              explanation: "在语境清晰时，英文中通常会省略比较对象，直接说 'Is it more expensive?' 就足够自然。",
            },
            formalityVariants: {
              casual: "City Edition looks great! Cost more?",
              standard: "The City Edition looks amazing! Is it more expensive?",
              formal: "The City Edition appears quite striking! May I inquire if there is a price difference?",
            },
          },
          {
            speaker: "them",
            role: "销售员",
            textEn:
              "It's $130, so just $20 more than the standard Swingman. But they sell out fast — this might be the last one in small. I can check the other stores if this size doesn't work.",
            textZh:
              "130美元，比标准 Swingman 只贵20美元。但是卖得很快——这可能是小号的最后一件了。如果尺码不合适我可以查其他门店。",
            culturalNote: "“卖得很快”用“sells fast”或“flies off the shelves”都很常见。美国商家常会暗示商品稀缺",
            keyPhrases: [
              { en: "sell out", zh: "卖完/断货" },
              { en: "check the other stores", zh: "查其他门店" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It's $130 — just $20 more than the standard. But heads up, it's the last small. They sell out fast.",
                textZh: "130美元——只比标准款贵20。不过注意，这是最后一件小号。卖得很快。",
                actionHint: "尽快决定",
                frequency: "common",
              },
              {
                textEn: "$130 for the City Edition. This might be the last one in small — they fly off the shelves.",
                textZh: "城市版130美元。小号可能是最后一件——卖得特别快。",
                actionHint: "抓紧机会",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "It's $130, so only $20 more than the regular Swingman. They sell quick though — this could be the last small. I can check other stores if this size doesn't fit.",
            commonMistake: {
              wrong: "if this size is not good",
              correct: "if this size doesn't work",
              explanation: "doesn't work 或 doesn't fit 更符合英语表达习惯，指尺码不合适。",
            },
            formalityVariants: {
              casual:
                "It's $130, so just 20 bucks more than the standard. They go quick, this might be the last small. I can check other spots if it doesn't work out.",
              standard:
                "It's $130, so just $20 more than the standard Swingman. But they sell out fast — this might be the last one in small. I can check the other stores if this size doesn't work.",
              formal:
                "The price for the City Edition is $130, representing an additional $20 compared to the standard Swingman. These items tend to sell quickly, and this particular garment may be the last in size small. Should this size prove unsuitable, I would be pleased to inquire about availability at our other locations.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'll take the City Edition! Can you gift-wrap it? And do you have a gift receipt so he can exchange it if the size is wrong?",
            textZh: "我要城市版！能包装成礼物吗？有礼品收据吗？如果尺码不对他可以换。",
            casualVersion:
              "I'll grab the City Edition! Can you gift-wrap it? Got a gift receipt so he can swap it if the size is off?",
            culturalNote: "在美国礼品收据很常见，方便退换但不显示价格",
            commonMistake: {
              wrong: "if the size is not correct",
              correct: "if the size is wrong",
              explanation: "size is wrong 或 size doesn't fit 更自然，not correct 略显生硬。",
            },
            formalityVariants: {
              casual:
                "Yeah, I'll take the City Edition! Can you wrap it? And a gift receipt so he can switch it if it's the wrong size?",
              standard:
                "I'll take the City Edition! Can you gift-wrap it? And do you have a gift receipt so he can exchange it if the size is wrong?",
              formal:
                "I would like to purchase the City Edition. Would it be possible to have it gift-wrapped, please? Additionally, do you provide a gift receipt in case an exchange is necessary due to an incorrect size?",
            },
          },
          {
            speaker: "them",
            role: "销售员",
            textEn:
              "Absolutely! Gift wrapping is free. And here's a gift receipt — it doesn't show the price, but he can use it to exchange for a different size within 30 days at any of our locations.",
            textZh: "没问题！礼品包装免费。给您礼品收据——上面不显示价格，但他可以在30天内到我们任何门店凭收据换尺码。",
            culturalNote: "礼品收据（gift receipt）在美国很普遍，上面不显示价格，方便收礼人退换货。这是一种非常贴心的服务。",
            commonMistake: {
              wrong: "He can change the size at any of our stores.",
              correct: "he can exchange the size at any of our stores",
              explanation: "exchange the size是更专业的说法，特指更换尺码",
            },
            keyPhrases: [
              { en: "gift-wrap", zh: "礼品包装" },
              { en: "gift receipt", zh: "礼品收据" },
              { en: "exchange", zh: "换货" },
              { en: "locations", zh: "门店" },
            ],
            literalMeaning:
              '"gift receipt" 字面意思是 "礼物收据"，是一种不显示价格的收据，专门用于送礼场景，收礼人可以凭它换货但看不到你花了多少钱',
            alternativeExpressions: [
              {
                textEn:
                  "Gift wrap is free! And here's a gift receipt — no price shown, but he can exchange the size within 30 days at any store.",
                textZh: "免费包装！给你礼品收据——不显示价格，但30天内可以到任何门店换尺码。",
                actionHint: "把礼品收据一起送",
                frequency: "common",
              },
              {
                textEn:
                  "I'll wrap it up for free. The gift receipt doesn't show the price, so he can exchange it if the size is off.",
                textZh: "免费帮你包。礼品收据不显示价格，尺码不对可以换。",
                actionHint: "记得附上礼品收据",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Totally! Free gift wrapping. Here's the gift receipt — no price on it, but he can swap it for a different size within 30 days at any of our spots.",
            formalityVariants: {
              casual:
                "For sure! Free gift wrap. Here's the gift receipt — no price, but he can trade it for another size in 30 days at any store.",
              standard:
                "Absolutely! Gift wrapping is free. And here's a gift receipt — it doesn't show the price, but he can use it to exchange for a different size within 30 days at any of our locations.",
              formal:
                "Certainly! We are pleased to offer complimentary gift wrapping. And here is your gift receipt — it discreetly omits the purchase price, but it will enable him to exchange the item for an alternative size within 30 days at any of our retail locations.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect. My son is going to love this. Thank you!",
            textZh: "太好了。我儿子一定会很喜欢。谢谢！",
            casualVersion: "Awesome. My son's gonna love this. Thanks!",
            commonMistake: {
              wrong: "Thank you.",
              correct: "Thanks!",
              explanation: "在轻松随意场合，'Thanks!' 比 'Thank you!' 更口语化和自然。",
            },
            formalityVariants: {
              casual: "Great. My son's gonna love it. Thanks!",
              standard: "Perfect. My son is going to love this. Thank you!",
              formal: "That is wonderful. I am certain my son will be delighted with this. Thank you very much!",
            },
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
            textEn:
              "Hi, I broke my glasses during my trip and I need a new pair urgently. I have my prescription from China — will you accept it?",
            textZh: "你好，我旅行中眼镜摔坏了，急需配一副新的。我有中国的处方——你们接受吗？",
            casualVersion: "Hey, broke my glasses on my trip and I totally need a new pair ASAP. Got my prescription from China, is that cool?",
            commonMistake: {
              wrong: "I have China prescription",
              correct: "I have my prescription from China",
              explanation: "介词from常被省略，导致表达不自然。",
            },
            formalityVariants: {
              casual: "Hey, broke my glasses on my trip, need a new pair like, now. Got my prescription from China, you guys take that?",
              standard: "Hi, I broke my glasses during my trip and I need a new pair urgently. I have my prescription from China — will you accept it?",
              formal: "Good morning/afternoon, I've had an unfortunate incident where my spectacles were damaged during my travels, and I require a replacement promptly. I possess a prescription from China; may I inquire if it is acceptable for use here?",
            },
          },
          {
            speaker: "them",
            role: "配镜师",
            textEn:
              "Oh no, sorry to hear that! Let me take a look at your prescription. Hmm, the format is a little different from what we use here, but I can read the numbers. Your right eye is -3.50 and left is -4.00 with some astigmatism. Does that sound right?",
            textZh:
              "哎呀，太不巧了！让我看看您的处方。嗯，格式和我们这边用的有点不同，但我能看懂数字。您的右眼 -3.50，左眼 -4.00，还有一些散光。对吗？",
            commonMistake: {
              wrong: "Is that correct?",
              correct: "Does that sound right?",
              explanation: "“sound right”比“correct”更口语化，表达确认。",
            },
            casualVersion: "Oh no, bummer! Let me check out your prescription. Hmm, format's a bit different, but I can totally read the numbers. Right eye's -3.50, left's -4.00, plus some astigmatism. Sound about right?",
            formalityVariants: {
              casual: "Oh no, bummer! Let me see your prescription. Format's a bit different, but I can read the numbers. Right eye's -3.50, left's -4.00, some astigmatism. That sound right?",
              standard: "Oh no, sorry to hear that! Let me take a look at your prescription. Hmm, the format is a little different from what we use here, but I can read the numbers. Your right eye is -3.50 and left is -4.00 with some astigmatism. Does that sound right?",
              formal: "I'm genuinely sorry to learn of that unfortunate incident. Allow me to examine your prescription. While the format deviates somewhat from our local standard, I am proficient in interpreting the numerical values. Your right eye indicates -3.50 and your left -4.00, along with a degree of astigmatism. Does this assessment align with your understanding?",
            },
            keyPhrases: [
              { en: "prescription", zh: "处方/验光单" },
              { en: "astigmatism", zh: "散光" },
              { en: "right eye / left eye", zh: "右眼/左眼" },
            ],
            vocabNotes: {
              astigmatism: {
                meaningInContext: "在这句话里表示：一种常见的视力问题，角膜形状不规则导致看东西模糊或变形",
                similarUsage: "类似用法：My astigmatism makes it hard to drive at night.（我的散光让我晚上开车很困难）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "We can work with foreign prescriptions. Let me convert the values to our system.",
                textZh: "我们可以用国外的处方。让我把数值转换成我们的系统。",
                actionHint: "确认处方数据是否正确",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Yes, that's correct. How long will it take to make a new pair? I'm leaving the country in four days.",
            textZh: "对，没错。配一副新的要多久？我四天后就出国了。",
            casualVersion: "Yep, that's right. How long for a new pair? I'm out of the country in four days.",
            commonMistake: {
              wrong: "How long time it take?",
              correct: "How long will it take?",
              explanation: "'How long time' 是常见中式英语，应说 'How long' 或 'What's the turnaround time?'。",
            },
            formalityVariants: {
              casual: "Yeah, that's it. How long for new glasses? I leave in four days.",
              standard: "Yes, that sounds right. How long will it take to make a new pair? I'm leaving the country in four days.",
              formal: "Yes, that is accurate. What is the estimated timeframe for crafting a new pair? I am scheduled to depart the country in four days.",
            },
          },
          {
            speaker: "them",
            role: "配镜师",
            textEn:
              "Our standard turnaround is 7 to 10 days, but we offer an express service — same-day or next-day for an extra $50. Since your prescription isn't too strong, we should be able to do it. Let's pick out some frames first.",
            textZh:
              "我们标准周期是7到10天，但有加急服务——当天或次日取，加收50美元。您的度数不算太深，应该可以做。先来选镜框吧。",
            commonMistake: {
              wrong: "your degree is not too deep",
              correct: "your prescription isn't too strong",
              explanation: "描述眼镜度数常用 'strong' 或 'high'，而非 'deep'。",
            },
            casualVersion: "Normally, it's 7-10 days, but we got express service — same or next-day for an extra $50. Your prescription's not too bad, so we can probably do that. Let's check out frames.",
            formalityVariants: {
              casual: "Usually 7-10 days, but we do express — same or next-day for $50 extra. Your prescription's not too strong, so should be fine. Let's pick frames.",
              standard: "Our standard turnaround is 7 to 10 days, but we offer an express service — same-day or next-day for an extra $50. Since your prescription isn't too strong, we should be able to accommodate that. Let's start by looking at frames.",
              formal: "Our standard processing time is approximately seven to ten business days; however, we do provide an expedited service for an additional fee of fifty dollars, which ensures completion either on the same day or by the following day. Given that your prescription is not excessively complex, this should be feasible. Shall we proceed by selecting your frames?",
            },
            keyPhrases: [
              { en: "turnaround", zh: "周期/工期" },
              { en: "express service", zh: "加急服务" },
              { en: "same-day", zh: "当天" },
              { en: "frames", zh: "镜框" },
            ],
            vocabNotes: {
              turnaround: {
                meaningInContext: "在这句话里表示：从下单到完成所需的全部时间",
                similarUsage: "类似用法：What's the turnaround on a passport renewal?（护照续签需要多长时间？）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Standard is 7-10 days. But we do same-day or next-day express for an extra $50. Your prescription should be no problem.",
                textZh: "标准7到10天。但有当天或次日加急，加50美元。你的度数应该没问题。",
                actionHint: "选择取货时间",
                frequency: "common",
              },
              {
                textEn:
                  "Normally a week to 10 days. Since you're in a rush, our express service can get them done by tomorrow for $50 more.",
                textZh: "正常一周到10天。既然你赶时间，加急服务加50美元明天就能好。",
                actionHint: "选加急服务",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Next-day would be perfect. I like lightweight frames — something like titanium. What do you have?",
            textZh: "次日取最好。我喜欢轻的镜框——像钛金属的。你们有什么？",
            casualVersion: "Next-day's perfect. I like lightweight frames, like titanium. What's available?",
            commonMistake: {
              wrong: "I like light frames",
              correct: "I like lightweight frames",
              explanation: "'light' 可以指颜色，'lightweight' 指重量轻。",
            },
            formalityVariants: {
              casual: "Next-day's ideal. I prefer lightweight frames, like titanium. Whatcha got?",
              standard: "Next-day would be perfect. I like lightweight frames — something like titanium. What do you have?",
              formal: "Next-day service would be optimal. I am partial to lightweight frames, such as those crafted from titanium. What selections do you currently have available?",
            },
          },
          {
            speaker: "them",
            role: "配镜师",
            textEn:
              "Great taste! Here are our titanium options. This Ray-Ban is very popular — it's feather-light and flexible. And this Oakley one is more sporty. Prices range from $180 to $350 for the frames alone. Lenses are separate.",
            textZh:
              "好眼光！这些是我们的钛金属款。这款 Ray-Ban 很受欢迎——超轻又有弹性。这款 Oakley 偏运动风格。镜框价格从180到350美元不等，镜片另算。",
            commonMistake: {
              wrong: "it is super light and elastic",
              correct: "it's super light and flexible",
              explanation: "flexible 更符合眼镜材质的“有弹性”之意。",
            },
            casualVersion: "Awesome taste! Check out these titanium options. This Ray-Ban's super popular — it's really light and bends well. Oakley's more for sports. Frames are like $180 to $350, lenses extra.",
            formalityVariants: {
              casual: "Good taste! Here are the titanium ones. This Ray-Ban's big — super light, flexible. Oakley's sportier. Frames are $180-$350, lenses separate.",
              standard: "Great taste! Here are our titanium options. This Ray-Ban is very popular — it's ultra-light and flexible. This Oakley is more sporty. Frames range from $180 to $350, lenses are separate.",
              formal: "Excellent selection! We have several titanium options available. This particular Ray-Ban model is exceedingly popular, known for its ultra-lightweight and flexible properties. The Oakley offers a more athletic aesthetic. Frame prices typically range from $180 to $350, with lenses being an additional cost.",
            },
            keyPhrases: [
              { en: "titanium", zh: "钛金属" },
              { en: "feather-light", zh: "超轻的" },
              { en: "flexible", zh: "有弹性的" },
              { en: "frames alone", zh: "只是镜框" },
              { en: "lenses are separate", zh: "镜片另算" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Here are our titanium frames. This Ray-Ban is super light and flexible — very popular. Frames are $180 to $350, lenses extra.",
                textZh: "这些是钛金属框。这款Ray-Ban超轻有弹性——很受欢迎。镜框180到350，镜片另算。",
                actionHint: "选择喜欢的镜框",
                frequency: "common",
              },
              {
                textEn:
                  "We've got Ray-Ban and Oakley in titanium. The Ray-Ban is feather-light, the Oakley is sportier. Prices start at $180 for frames alone.",
                textZh: "钛金属的有Ray-Ban和Oakley。Ray-Ban超轻，Oakley更运动。镜框180起。",
                actionHint: "比较两个品牌",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I like the Ray-Ban. What lens options do I have?",
            textZh: "我喜欢 Ray-Ban 的。镜片有什么选项？",
            commonMistake: {
              wrong: "What lens can I choose?",
              correct: "What lens options do I have?",
              explanation: "“What options do I have”是询问可能选择的常用句式。",
            },
            casualVersion: "Yeah, the Ray-Ban. What lens options are there?",
            formalityVariants: {
              casual: "Like the Ray-Ban. What lens options?",
              standard: "I like the Ray-Ban. What lens options do I have?",
              formal: "I find the Ray-Ban appealing. What are the available lens options?",
            },
          },
          {
            speaker: "them",
            role: "配镜师",
            textEn:
              "We have standard lenses, thin lenses — which I'd recommend at your prescription strength to keep them from looking thick — and ultra-thin. You can add anti-reflective coating, blue-light blocking, or photochromic which darkens in sunlight. Here's the price list.",
            textZh:
              "我们有标准镜片、薄镜片——以您的度数我建议用薄的，不然会显得很厚——还有超薄的。可以加防反光涂层、防蓝光或变色镜片，在阳光下会变暗。这是价格表。",
            commonMistake: {
              wrong: "I suggest thin for your degree",
              correct: "I'd recommend for your prescription, otherwise they'll look very thick",
              explanation: "“prescription”指眼镜度数，且“recommend for”更自然。",
            },
            casualVersion: "So, we got standard, thin lenses — which, for your prescription, I'd totally recommend or they'll be super thick — and ultra-thin. You can add anti-glare, blue light, or transitions that darken in the sun. Price list's right here.",
            formalityVariants: {
              casual: "Standard, thin lenses (recommend for you, otherwise they'll be thick), and ultra-thin. Add anti-glare, blue light, or transitions. Here's the price list.",
              standard: "We have standard lenses, thin lenses — which I'd recommend for your prescription, otherwise they'll be quite thick — and ultra-thin. You can add anti-reflective coating, blue light filter, or transition lenses, which darken in sunlight. Here's a price list.",
              formal: "We offer standard lenses, thin lenses — which I would strongly advise for your specific prescription to avoid excessive thickness — and ultra-thin lenses. Additionally, you may opt for an anti-reflective coating, a blue light filter, or photochromic (transition) lenses, which adapt to varying light conditions. This is our comprehensive price list.",
            },
            keyPhrases: [
              { en: "thin lenses", zh: "薄镜片" },
              { en: "anti-reflective coating", zh: "防反光涂层" },
              { en: "blue-light blocking", zh: "防蓝光" },
              { en: "photochromic", zh: "变色镜片" },
            ],
            vocabNotes: {
              photochromic: {
                meaningInContext: "在这句话里表示：遇到紫外线（阳光）自动变暗、回到室内自动变透明的镜片",
                similarUsage:
                  "类似用法：Photochromic lenses are great if you go in and out a lot.（如果你经常进出室内外，变色镜片很方便）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "We have standard, thin, and ultra-thin lenses. At your prescription, I'd go thin. You can add anti-glare, blue-light, or photochromic too.",
                textZh: "有标准、薄和超薄镜片。你的度数建议选薄的。还可以加防反光、防蓝光或变色。",
                actionHint: "选择镜片类型",
                frequency: "common",
              },
              {
                textEn:
                  "I'd recommend thin lenses so they don't look bulky. You can add coatings — anti-reflective, blue-light blocking, or photochromic.",
                textZh: "建议薄镜片，不显厚。可以加涂层——防反光、防蓝光或变色。",
                actionHint: "了解加项选择",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I'll take the thin lenses with anti-reflective coating. How much is the total with the express service?",
            textZh: "我要薄镜片加防反光涂层。加上加急服务一共多少？",
            casualVersion: "I'll go with the thin lenses and anti-glare. What's the total with express service?",
            commonMistake: {
              wrong: "How much total?",
              correct: "What's the total?",
              explanation: "常用 'What's the total?' 或 'How much is the total?'，避免直接翻译 '多少总共'。",
            },
            formalityVariants: {
              casual: "Thin lenses, anti-glare for me. Total with express?",
              standard: "I'll take the thin lenses with anti-reflective coating. What's the total with the express service?",
              formal: "I would like the thin lenses with the anti-reflective coating. Could you please provide the grand total, including the express service fee?",
            },
          },
          {
            speaker: "them",
            role: "配镜师",
            textEn:
              "The Ray-Ban frames are $220, thin lenses with AR coating are $180, plus $50 for express service. Your total is $450. If you're a tourist, I can do the tax-free paperwork for you — that'll save you about $35.",
            textZh:
              "Ray-Ban 镜框220美元，薄镜片加防反光涂层180美元，加急服务50美元。一共450美元。如果您是游客的话，我可以帮您办退税手续——能省大约35美元。",
            commonMistake: {
              wrong: "If you are tourist",
              correct: "If you're a tourist",
              explanation: "“tourist”是可数名词，前面需要加不定冠词“a”。",
            },
            casualVersion: "So, Ray-Ban frames are $220, thin lenses with AR are $180, plus $50 for express. Total's $450. If you're a tourist, I can hook you up with a tax refund, save you like 35 bucks.",
            formalityVariants: {
              casual: "Frames $220, lenses with AR $180, express $50. Total $450. Tourist? Can do tax refund, save you $35.",
              standard: "The Ray-Ban frames are $220, thin lenses with AR coating are $180, plus $50 for express service. Your total is $450. If you're a tourist, I can help you with a tax refund, which would save you about $35.",
              formal: "The Ray-Ban frames are priced at $220, the thin lenses with anti-reflective coating are $180, and the express service incurs an additional $50. This brings your total to $450. Should you be visiting as a tourist, I would be pleased to assist you with the tax refund process, which would result in a savings of approximately $35.",
            },
            keyPhrases: [
              { en: "AR coating", zh: "防反光涂层" },
              { en: "tax-free paperwork", zh: "退税手续" },
            ],
            culturalNote: "部分国家和美国部分州对游客购物有退税政策。通常需要出示护照和离境机票。",
            alternativeExpressions: [
              {
                textEn:
                  "Frames $220, lenses $180, express $50 — total is $450. If you're a tourist, I can do the tax-free paperwork and save you about $35.",
                textZh: "镜框220，镜片180，加急50——总共450。游客的话我帮办退税，能省大约35。",
                actionHint: "出示护照办退税",
                frequency: "common",
              },
              {
                textEn:
                  "Your total is $450. Are you visiting? Tourists can get a tax refund — I'll fill out the forms for you.",
                textZh: "一共450美元。你是旅游的吗？游客可以退税——我帮你填表。",
                actionHint: "享受退税优惠",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Yes, I'm a tourist! I have my passport. Thank you — that's very helpful. When can I pick them up tomorrow?",
            textZh: "我是游客！护照带着呢。太好了，太贴心了。明天什么时候能取？",
            casualVersion: "Yeah, I'm a tourist! Got my passport. Awesome, thanks for thinking of that! What time can I grab 'em tomorrow?",
            commonMistake: {
              wrong: "I am tourist",
              correct: "I am a tourist",
              explanation: "可数名词单数前通常需要冠词 'a'。",
            },
            formalityVariants: {
              casual: "Yep, tourist! Got my passport. Sweet, thanks! What time can I pick 'em up tomorrow?",
              standard: "Yes, I am a tourist! I have my passport with me. That's great, how thoughtful of you. What time can I pick them up tomorrow?",
              formal: "Yes, I am indeed a tourist, and I have my passport readily available. That is truly excellent news and very considerate of you. At what time tomorrow may I retrieve them?",
            },
          },
          {
            speaker: "them",
            role: "配镜师",
            textEn:
              "They should be ready by 2 PM tomorrow. We'll send you a text when they're done. When you pick them up, we'll do a fitting to adjust the frames to your face — that's included in the service.",
            textZh:
              "明天下午2点应该能好。做好了会发短信通知您。来取的时候我们会做镜框调整让它贴合您的脸型——这个是包含在服务里的。",
            commonMistake: {
              wrong: "We will send message to you",
              correct: "We'll send you a text message",
              explanation: "“send a text message”是更自然的口语表达。",
            },
            casualVersion: "Should be good by 2 PM tomorrow. We'll text ya when they're ready. When you come to pick 'em up, we'll adjust 'em for a perfect fit — that's part of the deal.",
            culturalNote: "美国验光配镜，店员会主动调整镜架，这是服务的一部分。",
            formalityVariants: {
              casual: "Ready by 2 PM tomorrow. We'll text you. When you get 'em, we'll adjust for a perfect fit — included.",
              standard: "They should be ready by 2 PM tomorrow. We'll send you a text when they're done. When you come to pick them up, we'll do an adjustment to ensure they fit your face perfectly — that's included in the service.",
              formal: "They are anticipated to be ready for collection by 2 PM tomorrow. We will send you a text message notification upon their completion. At the time of collection, we will provide a complimentary frame adjustment to ensure an optimal and comfortable fit for your facial structure.",
            },
            keyPhrases: [
              { en: "fitting", zh: "试戴调整" },
              { en: "adjust the frames", zh: "调整镜框" },
              { en: "included in the service", zh: "包含在服务里" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "They'll be ready by 2 PM tomorrow. We'll text you. When you pick them up, we'll adjust the fit for free.",
                textZh: "明天下午2点前好。到时发短信通知。来取的时候免费调整贴合度。",
                actionHint: "明天来取",
                frequency: "common",
              },
              {
                textEn:
                  "Should be done by tomorrow afternoon. We'll send a text. Come in for a fitting when you pick them up — it's included.",
                textZh: "明天下午应该好。会发短信。来取的时候做个试戴调整——包含在服务里的。",
                actionHint: "预留取货时间",
                frequency: "occasional",
              },
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
            textEn:
              "I'm looking for a good pair of sunglasses for driving. I heard polarized ones are better — is that true?",
            textZh: "我想找一副开车用的太阳镜。听说偏光的更好——是真的吗？",
            casualVersion: "Wanna find some driving sunglasses. Heard polarized ones are better — true?",
            commonMistake: {
              wrong: "I want find sunglasses",
              correct: "I'd like to find a pair of sunglasses",
              explanation: "'I want' 过于直接，'I'd like to' 更礼貌。'a pair of' 是常用搭配。",
            },
            formalityVariants: {
              casual: "Need driving sunglasses. Polarized are better, right?",
              standard: "I'd like to find a pair of sunglasses for driving. I heard polarized ones are better — is that true?",
              formal: "I am looking to acquire a pair of sunglasses specifically for driving. I have been informed that polarized lenses offer superior performance; could you confirm the veracity of this statement?",
            },
          },
          {
            speaker: "them",
            role: "配镜师",
            textEn:
              "Absolutely. Polarized lenses reduce glare from the road and other cars, which is especially helpful for driving. They also improve contrast so you can see more clearly. The difference is night and day.",
            textZh:
              "没错。偏光镜片能减少路面和其他车辆的反光，开车特别有用。还能增强对比度，看得更清楚。区别非常明显。",
            commonMistake: {
              wrong: "The difference is like day and night",
              correct: "The difference is night and day.",
              explanation: "“night and day”是固定习语，表示巨大差异。",
            },
            casualVersion: "Totally. Polarized lenses cut down glare from the road and other cars, which is super helpful for driving. Plus, they make contrast better so you see way clearer. It's a huge difference.",
            formalityVariants: {
              casual: "Yep. Polarized lenses cut glare from the road/cars, super good for driving. Also improve contrast, so you see clearer. Huge difference.",
              standard: "Absolutely. Polarized lenses reduce glare from the road and other cars, which is especially helpful for driving. They also improve contrast so you can see more clearly. The difference is night and day.",
              formal: "Indubitably. Polarized lenses are highly effective in mitigating glare emanating from road surfaces and other vehicles, which is particularly advantageous for driving. Furthermore, they enhance visual contrast, thereby improving clarity of perception. The distinction is quite remarkable.",
            },
            keyPhrases: [
              { en: "polarized", zh: "偏光的" },
              { en: "glare", zh: "反光/炫光" },
              { en: "contrast", zh: "对比度" },
            ],
            vocabNotes: {
              polarized: {
                meaningInContext: "在这句话里表示：经过特殊处理可以过滤水平方向反射光的镜片，减少刺眼的反光",
                similarUsage:
                  "类似用法：I always wear polarized sunglasses when I go fishing.（我钓鱼的时候总戴偏光太阳镜）",
              },
            },
            literalMeaning: '"night and day" 字面意思是 "夜晚和白天"，实际表示差别非常大、完全不同',
            culturalMeaning: '这是英语中的常见比喻，和中文的 "天壤之别" 意思相近',
            alternativeExpressions: [
              {
                textEn:
                  "For driving, polarized is the way to go. It cuts glare from the road and other cars — huge difference in visibility.",
                textZh: "开车的话偏光的最好。减少路面和其他车的反光——看得清楚很多。",
                actionHint: "选择偏光镜片",
                frequency: "common",
              },
              {
                textEn:
                  "Polarized lenses are a game changer for driving. They block the glare and sharpen the contrast.",
                textZh: "偏光镜片开车用完全不一样。挡住反光还能增强对比度。",
                actionHint: "了解偏光优势",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, I want polarized. What about UV protection? My wife said to make sure they block UV rays.",
            textZh: "好，我要偏光的。紫外线防护呢？我太太说一定要能挡 UV。",
            casualVersion: "Okay, polarized it is. What about UV protection? My wife said make sure they block UV.",
            commonMistake: {
              wrong: "About UV protection?",
              correct: "What about UV protection?",
              explanation: "'What about...' 是询问信息的自然方式。",
            },
            formalityVariants: {
              casual: "Okay, polarized. UV protection? Wife said block UV.",
              standard: "Okay, I want polarized. What about UV protection? My wife said to make sure they block UV rays.",
              formal: "Understood; I shall opt for polarized lenses. Regarding UV protection, could you elaborate? My wife specifically advised me to ensure they effectively block ultraviolet rays.",
            },
          },
          {
            speaker: "them",
            role: "配镜师",
            textEn:
              "All our sunglasses provide 100% UV400 protection — that blocks both UVA and UVB rays. That's actually the minimum you should look for. Anything without a UV rating is basically just a tinted lens and can actually be worse for your eyes.",
            textZh:
              "我们所有太阳镜都提供100% UV400防护——能阻挡 UVA 和 UVB 射线。这其实是最低标准。没有UV等级的基本就是有色镜片，反而可能对眼睛更不好。",
            culturalNote: "许多有色太阳镜不提供UV防护，反而可能因瞳孔放大而伤眼。",
            commonMistake: {
              wrong: "That is minimum standard",
              correct: "That's actually the minimum standard.",
              explanation: "“minimum standard”前面需要定冠词“the”。",
            },
            casualVersion: "All our sunglasses give you 100% UV400 protection — that means UVA and UVB. That's actually the lowest standard. Basic tinted ones with no UV rating can actually be worse for your eyes.",
            formalityVariants: {
              casual: "All our sunglasses have 100% UV400 — blocks UVA and UVB. That's the minimum. Tinted lenses without UV can be bad for your eyes.",
              standard: "All our sunglasses provide 100% UV400 protection — that blocks both UVA and UVB rays. That's actually the minimum standard. Basic tinted lenses without a UV rating can sometimes be worse for your eyes.",
              formal: "All of our sunglasses offer comprehensive 100% UV400 protection, which effectively blocks both UVA and UVB radiation. This is, in fact, the industry's minimum standard. Tinted lenses lacking a proper UV rating can, paradoxically, be more detrimental to ocular health.",
            },
            keyPhrases: [
              { en: "UV400 protection", zh: "UV400防护" },
              { en: "UVA and UVB", zh: "UVA和UVB射线" },
              { en: "tinted lens", zh: "有色镜片" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "All ours are UV400 — they block both UVA and UVB. That's the minimum you should look for. Anything without UV protection can actually harm your eyes.",
                textZh: "我们所有的都是UV400——挡UVA和UVB。这是最低标准。没有UV防护的反而伤眼睛。",
                actionHint: "了解UV防护标准",
                frequency: "common",
              },
              {
                textEn:
                  "Don't worry — everything here has 100% UV protection. Without it, sunglasses are just tinted lenses and can be worse than nothing.",
                textZh: "放心——这里的都有100%紫外线防护。没有的话就是有色玻璃，反而比不戴还糟。",
                actionHint: "选有UV认证的",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. Can I try on a few different styles? I'm not sure what looks good on my face shape.",
            textZh: "涨知识了。能试戴几种不同款式吗？我不知道什么款式适合我的脸型。",
            casualVersion: "Good to know. Can I try on some styles? Not sure what suits my face.",
            commonMistake: {
              wrong: "I want try on",
              correct: "Can I try on",
              explanation: "'Can I' 询问许可更自然，'want' 可能显得生硬。",
            },
            formalityVariants: {
              casual: "Okay. Try some styles? Not sure what suits my face.",
              standard: "Good to know. Can I try on a few different styles? I'm not sure what styles suit my face shape.",
              formal: "That is valuable information. May I try on a selection of different styles? I am uncertain as to which styles would best complement my facial structure.",
            },
          },
          {
            speaker: "them",
            role: "配镜师",
            textEn:
              "Of course! You have a round face shape, so I'd suggest angular or rectangular frames — they add some definition. Avoid round frames as they'll emphasize the roundness. Let me grab a few options for you.",
            textZh:
              "当然可以！您是圆脸型，我建议有棱角的或长方形镜框——能增加轮廓感。避免圆框，会显得更圆。我给您拿几款试试。",
            commonMistake: {
              wrong: "I suggest angular or rectangular frames",
              correct: "I'd recommend angular or rectangular frames",
              explanation: "“I'd recommend”比“I suggest”听起来更柔和、建议性强。",
            },
            casualVersion: "Totally! You got a round face, so I'd say go for angular or rectangular frames — they'll make it look sharper. Skip the round ones, they just make it rounder. I'll grab some options for you.",
            culturalNote: "美国验光师会根据脸型给出选择建议，这是专业服务。",
            formalityVariants: {
              casual: "Sure! Round face, so go angular or rectangular — adds definition. Don't do round, makes it rounder. I'll get some.",
              standard: "Of course! You have a round face shape, so I'd suggest angular or rectangular frames — they add definition. Avoid round frames, as they'll make your face appear rounder. Let me get a few options for you.",
              formal: "Certainly! Given your round facial structure, I would recommend frames with angular or rectangular lines, as these tend to provide greater definition. I would advise against circular frames, as they may inadvertently emphasize the roundness. Allow me to retrieve several suitable options for your consideration.",
            },
            keyPhrases: [
              { en: "face shape", zh: "脸型" },
              { en: "angular", zh: "有棱角的" },
              { en: "rectangular", zh: "长方形的" },
              { en: "definition", zh: "轮廓感" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You have a round face, so angular or rectangular frames will look best. Let me pull a few options for you.",
                textZh: "你是圆脸，棱角分明的或长方形镜框最好看。我拿几款给你试。",
                actionHint: "试戴推荐的款式",
                frequency: "common",
              },
              {
                textEn:
                  "For your face shape, I'd avoid round frames. These rectangular ones will add some nice structure. Try them on.",
                textZh: "你的脸型不太适合圆框。这些长方形的会增加轮廓感。试试看。",
                actionHint: "试戴对比效果",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I really like this pair. How much are they?",
            textZh: "我很喜欢这副。多少钱？",
            casualVersion: "Love this pair. How much?",
            commonMistake: {
              wrong: "How much is it?",
              correct: "How much are they?",
              explanation: "墨镜是复数 'pair of sunglasses' / 'they'。",
            },
            formalityVariants: {
              casual: "Like this pair a lot. Price?",
              standard: "I really like this pair. How much are they?",
              formal: "I am quite fond of this particular pair. What is their cost?",
            },
          },
          {
            speaker: "them",
            role: "配镜师",
            textEn:
              "Those are Maui Jim — one of the best brands for polarized driving sunglasses. They're $279. A bit of an investment, but they come with a 2-year warranty and a hard case. They also have a scratch-resistant coating.",
            textZh:
              "这是 Maui Jim——偏光驾驶太阳镜最好的品牌之一。279美元。有点小投资，但带两年保修和硬质眼镜盒。还有防刮涂层。",
            commonMistake: {
              wrong: "They are 279 dollars",
              correct: "They're $279.",
              explanation: "“$279”是更口语化的价格表达方式。",
            },
            casualVersion: "Those are Maui Jim — like, one of the best brands for polarized driving shades. They're $279. Kinda pricey, but they come with a two-year warranty and a hard case. Also got scratch-resistant coating.",
            formalityVariants: {
              casual: "Maui Jim — top brand for polarized driving shades. $279. Bit of an investment, but 2-year warranty, hard case, scratch-resistant.",
              standard: "Those are Maui Jim — one of the best brands for polarized driving sunglasses. They're $279. It's a bit of an investment, but they come with a two-year warranty and a hard case. They also have a scratch-resistant coating.",
              formal: "Those are from Maui Jim, a highly regarded brand renowned for its polarized driving sunglasses. The price is $279. While it represents a considerable investment, they include a two-year warranty and a durable hard case. Furthermore, they feature a scratch-resistant coating.",
            },
            keyPhrases: [
              { en: "investment", zh: "投资" },
              { en: "warranty", zh: "保修" },
              { en: "hard case", zh: "硬质眼镜盒" },
              { en: "scratch-resistant", zh: "防刮的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Those are Maui Jim — top-tier polarized lenses. $279 with a 2-year warranty, hard case, and scratch-resistant coating.",
                textZh: "那是Maui Jim——顶级偏光镜片。279美元，两年保修、硬壳盒、防刮涂层。",
                actionHint: "考虑性价比",
                frequency: "common",
              },
              {
                textEn:
                  "$279 — a bit of an investment, but they're one of the best driving sunglasses out there. Warranty and case included.",
                textZh: "279美元——有点小投资，但是最好的驾驶太阳镜之一。含保修和眼镜盒。",
                actionHint: "权衡品质和价格",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a bit over my budget. Do you have anything similar but more affordable? Maybe around $150?",
            textZh: "有点超预算了。有类似但更便宜的吗？150美元左右的？",
            casualVersion: "That's kinda outta my budget. Got anything similar but cheaper? Like, around $150?",
            commonMistake: {
              wrong: "This is over my budget",
              correct: "That's a bit over my budget",
              explanation: "'That's' 指代上文价格，更自然。",
            },
            formalityVariants: {
              casual: "Too much. Something similar but cheaper? Like $150?",
              standard: "That's a bit over my budget. Do you have anything similar but cheaper? Around $150?",
              formal: "That price point is slightly beyond my allocated budget. Do you perhaps have any comparable options that are more economically priced, ideally around $150?",
            },
          },
          {
            speaker: "them",
            role: "配镜师",
            textEn:
              "Sure. These Oakley Holbrooks are $153 — also polarized with UV400. Very popular style. They're more of a casual look but still great for driving. Or these Ray-Ban Wayfarers at $163 if you want something more classic.",
            textZh:
              "有的。这款 Oakley Holbrook 153美元——也是偏光加UV400。很受欢迎的款式。更休闲一些但开车也很好用。或者 Ray-Ban Wayfarer 163美元，更经典的风格。",
            commonMistake: {
              wrong: "They are more casual but driving also good",
              correct: "They're more casual but also work well for driving.",
              explanation: "“work well for driving”是更地道自然的表达。",
            },
            casualVersion: "Yep. These Oakley Holbrooks are $153 — polarized with UV400 too. Super popular style. They're kinda more casual but still awesome for driving. Or, Ray-Ban Wayfarers for $163, that's a classic look.",
            formalityVariants: {
              casual: "Sure. Oakley Holbrooks, $153 — polarized, UV400. Popular. Casual, but good for driving. Or, Ray-Ban Wayfarer, $163, classic.",
              standard: "Sure. These Oakley Holbrooks are $153 — also polarized with UV400. Very popular style. They're a bit more casual but also great for driving. Or, Ray-Ban Wayfarer for $163, a more classic style.",
              formal: "Certainly. We have these Oakley Holbrooks for $153, which are also polarized and offer UV400 protection. They represent a very popular style. While slightly more casual, they remain highly effective for driving. Alternatively, the Ray-Ban Wayfarer at $163 offers a more classic aesthetic.",
            },
            keyPhrases: [
              { en: "affordable", zh: "价格实惠的" },
              { en: "casual look", zh: "休闲风格" },
              { en: "classic", zh: "经典的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The Oakley Holbrooks are $153 — great for driving. Or the Ray-Ban Wayfarers at $163 for a more timeless look.",
                textZh: "Oakley Holbrook 153美元——开车很好用。或者Ray-Ban Wayfarer 163美元更经典。",
                actionHint: "比较两个选择",
                frequency: "common",
              },
              {
                textEn:
                  "For around $150, try these Oakley or Ray-Ban Wayfarers. Both are polarized with UV400 — just different styles.",
                textZh: "150左右的话试试这个Oakley或Ray-Ban Wayfarer。都是偏光UV400——只是风格不同。",
                actionHint: "选择喜欢的风格",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "The Ray-Ban Wayfarers are perfect. I'll take them. Can I get a cleaning cloth too?",
            textZh: "Ray-Ban Wayfarer 正好。我要了。能给一块擦镜布吗？",
            casualVersion: "Ray-Ban Wayfarers are perfect. I'll take 'em. Can I get a cleaning cloth?",
            commonMistake: {
              wrong: "I want cleaning cloth",
              correct: "Can I get a cleaning cloth?",
              explanation: "'Can I get' 是请求的礼貌且常用表达。",
            },
            formalityVariants: {
              casual: "Ray-Ban Wayfarers, perfect. I'll get 'em. Cleaning cloth?",
              standard: "The Ray-Ban Wayfarers are perfect. I'll take them. Can I get a cleaning cloth?",
              formal: "The Ray-Ban Wayfarers are ideal. I shall purchase them. May I also request a cleaning cloth?",
            },
          },
          {
            speaker: "them",
            role: "配镜师",
            textEn:
              "They come with a cleaning cloth and a soft pouch. I'll also include a microfiber cleaning spray on the house — just spray and wipe. Enjoy your new shades!",
            textZh: "附带一块擦镜布和一个软袋。我再送你一瓶超细纤维清洁喷雾——喷一下擦就行。享受你的新太阳镜吧！",
            commonMistake: {
              wrong: "I also give you",
              correct: "I'll also give you",
              explanation: "此处应用“I'll”表示将要发生的动作，更自然。",
            },
            casualVersion: "They come with a cleaning cloth and a soft pouch. I'll even throw in a microfiber cleaning spray — just spray and wipe. Enjoy your new shades!",
            formalityVariants: {
              casual: "Come with a cloth and pouch. I'll give you a spray too — just spray and wipe. Enjoy your new shades!",
              standard: "They come with a cleaning cloth and a soft pouch. I'll also give you a microfiber cleaning spray — just spray and wipe. Enjoy your new sunglasses!",
              formal: "They are accompanied by both a cleaning cloth and a soft pouch. Additionally, I shall provide you with a microfiber cleaning spray; simply apply and wipe. Please enjoy your new sunglasses!",
            },
            keyPhrases: [
              { en: "soft pouch", zh: "软袋" },
              { en: "on the house", zh: "免费赠送" },
              { en: "shades", zh: "太阳镜（口语）" },
            ],
            vocabNotes: {
              "on the house": {
                meaningInContext: "在这句话里表示：商家免费赠送，不收你钱",
                similarUsage: "类似用法：The dessert is on the house tonight.（今晚甜点免费）",
              },
            },
            literalMeaning: '"on the house" 字面意思是 "在房子上"，实际意思是 "免费的、店家请客"',
            localVariants: {
              "en-US": "on the house",
              "en-GB": "on the house / complimentary",
              "en-AU": "on the house",
            },
            alternativeExpressions: [
              {
                textEn:
                  "They come with a cloth and a pouch. And I'll throw in a microfiber spray for free. Enjoy your new shades!",
                textZh: "附带擦镜布和软袋。我再免费送你一瓶清洁喷雾。享受新太阳镜！",
                actionHint: "拿好赠品",
                frequency: "common",
              },
              {
                textEn: "Cleaning cloth, soft case, and a complimentary lens spray — all included. You're all set!",
                textZh: "擦镜布、软袋和免费镜片喷雾——都包含了。齐全了！",
                actionHint: "确认配件齐全",
                frequency: "occasional",
              },
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
            textEn:
              "Hi! I need to buy some gifts to bring back to China. Chocolate is a safe choice, right? What do you recommend?",
            textZh: "你好！我想买些礼物带回中国。巧克力是比较稳妥的选择吧？有什么推荐？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Absolutely! Chocolate is always a great gift. How many people are you buying for? That'll help me suggest the right options — we have everything from individual boxes to bulk gift packs.",
            textZh: "当然！巧克力送人总是不错的。您要买给多少人？这样我好推荐——我们有单独的礼盒也有批量装。",
            keyPhrases: [
              { en: "individual boxes", zh: "单独的礼盒" },
              { en: "bulk gift packs", zh: "批量装/大包装" },
            ],
            alternativeExpressions: [
              {
                textEn: "You've come to the right place! How many people are you shopping for?",
                textZh: "您来对地方了！要买给几个人？",
                actionHint: "说出大概需要买多少份",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "About 10 people — mostly coworkers. And then something special for my parents and my boss. So maybe a mix of smaller and nicer boxes?",
            textZh: "大概10个人——大多是同事。然后给爸妈和老板各买一份特别的。所以可能需要大小搭配？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Perfect. For the coworkers, these 4-piece truffle boxes are $8.99 each — they look elegant and are great for gifting. For something more premium, this 16-piece assorted collection in a ribbon box is $38 — it has dark, milk, white, and our signature salted caramel.",
            textZh:
              "好的。同事的话，这种4颗装松露巧克力礼盒8.99美元一盒——很精致，很适合送礼。更高档的，这款16颗装精选系列丝带礼盒38美元——有黑巧、牛奶巧克力、白巧和我们的招牌海盐焦糖。",
            keyPhrases: [
              { en: "truffle", zh: "松露巧克力" },
              { en: "assorted collection", zh: "精选系列" },
              { en: "ribbon box", zh: "丝带礼盒" },
              { en: "dark / milk / white", zh: "黑巧/牛奶/白巧" },
              { en: "salted caramel", zh: "海盐焦糖" },
              { en: "signature", zh: "招牌的" },
            ],
            vocabNotes: {
              truffle: {
                meaningInContext: "在这句话里表示：一种圆球形的高级巧克力，里面有软心馅料，不是松露菌",
                similarUsage: "类似用法：The chocolate truffles melt in your mouth.（松露巧克力入口即化）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "For coworkers, these 4-piece truffle boxes are $8.99 — classy and affordable. For someone special, the 16-piece assorted box is $38.",
                textZh: "同事的话4颗装松露盒8.99美元——精致又实惠。送重要的人的话16颗装精选盒38美元。",
                actionHint: "按人群选择档次",
                frequency: "common",
              },
              {
                textEn:
                  "We have small gift boxes at $8.99 and premium assorted ones at $38. The premium has dark, milk, white, and our signature salted caramel.",
                textZh: "有8.99的小礼盒和38的高档精选。高档的有黑巧、牛奶、白巧和招牌海盐焦糖。",
                actionHint: "了解口味搭配",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Can I try some before I buy? I want to make sure the flavors are not too sweet — Chinese people generally prefer less sweet things.",
            textZh: "能试吃吗？我想确认口味不会太甜——中国人一般喜欢不太甜的。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Of course! Here, try our 72% dark chocolate truffle — it has a nice bitterness with just a hint of sweetness. And this one is our matcha white chocolate, which is very popular with Asian customers. Not too sweet at all.",
            textZh:
              "当然可以！来试试我们的72%黑巧松露——苦味恰到好处，只有一点甜。这个是抹茶白巧克力，在亚洲顾客中非常受欢迎。一点都不会太甜。",
            keyPhrases: [
              { en: "bitterness", zh: "苦味" },
              { en: "a hint of sweetness", zh: "一点甜味" },
              { en: "matcha", zh: "抹茶" },
            ],
            literalMeaning: '"a hint of" 字面意思是 "一点提示"，实际表示 "少量的、微微的"',
            alternativeExpressions: [
              {
                textEn:
                  "Try our 72% dark truffle — not too sweet, just a touch of bitterness. And this matcha one is a big hit with Asian customers.",
                textZh: "试试我们72%的黑巧松露——不太甜，微微苦。这个抹茶的在亚洲顾客中特别受欢迎。",
                actionHint: "品尝推荐口味",
                frequency: "common",
              },
              {
                textEn:
                  "Here, taste the dark chocolate one — it's our bestseller. Not sweet at all. The matcha white chocolate is also popular.",
                textZh: "来尝尝黑巧的——是我们的畅销款。一点不甜。抹茶白巧克力也很受欢迎。",
                actionHint: "试吃后决定",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Oh, the dark chocolate one is really good! I'll take 10 of the small truffle boxes in dark chocolate. And for my parents and boss, three of the premium assorted boxes.",
            textZh: "哦，黑巧的真好吃！小的松露巧克力盒我要10盒黑巧的。给爸妈和老板的，三盒高档精选礼盒。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Great choices! For the premium boxes, would you like me to customize the selection? I can make them all dark chocolate-focused since you mentioned less sweet is preferred. Or we can keep the standard assortment.",
            textZh: "好选择！高档礼盒要定制口味吗？既然您说不太甜的好，我可以做成以黑巧为主的。或者保留标准搭配也行。",
            keyPhrases: [
              { en: "customize", zh: "定制" },
              { en: "dark chocolate-focused", zh: "以黑巧为主" },
              { en: "standard assortment", zh: "标准搭配" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Want me to customize the premium boxes? I can do mostly dark chocolate since you mentioned less sweet.",
                textZh: "高档礼盒要定制吗？既然你说不太甜的好，我可以多放黑巧。",
                actionHint: "说出口味偏好",
                frequency: "common",
              },
              {
                textEn:
                  "The premium boxes can be customized. I'll pack them dark-chocolate-heavy if your recipients prefer less sweet.",
                textZh: "高档礼盒可以定制。如果收礼的人喜欢不太甜的，我多放黑巧。",
                actionHint: "定制口味搭配",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Customize them, please — more dark chocolate, less white chocolate. Oh, and are these okay to carry on a plane? Will they melt?",
            textZh: "定制吧——多放黑巧，少放白巧。对了，这些能带上飞机吗？会不会化？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Good question! Chocolate is fine for carry-on — no liquid restrictions apply. As for melting, I'll pack them with insulated bags and ice packs for free. That'll keep them cool for about 12 hours, which should cover your flight home.",
            textZh:
              "好问题！巧克力可以随身带上飞机——不算液体限制。至于会不会化，我免费给您包隔热袋和冰袋。能保冷大约12小时，够你飞回家了。",
            keyPhrases: [
              { en: "carry-on", zh: "随身行李" },
              { en: "liquid restrictions", zh: "液体限制" },
              { en: "insulated bags", zh: "隔热袋" },
              { en: "ice packs", zh: "冰袋" },
            ],
            culturalNote:
              "固体巧克力可以放随身行李带上飞机，不受液体管制。但含酒精的巧克力在部分国家入境时可能需要申报。",
            alternativeExpressions: [
              {
                textEn:
                  "Chocolate is fine for carry-on — no liquid rules apply. I'll pack them with insulated bags and ice packs for free to keep them cool.",
                textZh: "巧克力可以随身带——不算液体。我免费用隔热袋和冰袋包好保冷。",
                actionHint: "了解携带方式",
                frequency: "common",
              },
              {
                textEn:
                  "No worries about airport security. I'll add ice packs and insulated bags — they'll stay cool for about 12 hours.",
                textZh: "机场安检没问题。我加冰袋和隔热袋——能保冷大约12小时。",
                actionHint: "足够飞回家",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "That's really thoughtful! How much is everything in total? And do you offer any discount for buying this many?",
            textZh: "太贴心了！一共多少？买这么多有优惠吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Let me calculate — 10 small boxes at $8.99 each is $89.90, plus 3 premium boxes at $38 each is $114. Total is $203.90 before tax. Since you're buying over $200, I can give you our VIP discount — 10% off. That brings it down to $183.51 plus tax.",
            textZh:
              "我算一下——10盒小的每盒8.99美元共89.90美元，加3盒高档的每盒38美元共114美元。税前总计203.90美元。因为您消费超过200美元，我可以给您 VIP 折扣——九折。折后183.51美元加税。",
            keyPhrases: [
              { en: "calculate", zh: "计算" },
              { en: "VIP discount", zh: "VIP折扣" },
              { en: "brings it down to", zh: "降到" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That's $203.90. Since you're over $200, you qualify for 10% off — so $183.51 plus tax. Great savings!",
                textZh: "203.90美元。超过200就有九折——183.51加税。省了不少！",
                actionHint: "享受VIP折扣",
                frequency: "common",
              },
              {
                textEn:
                  "Your total is $203.90, but with our VIP discount for purchases over $200, it comes down to $183.51 plus tax.",
                textZh: "总计203.90，但消费超200有VIP折扣，降到183.51加税。",
                actionHint: "确认折后价格",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Wonderful! I'll take everything. Thank you for being so helpful — this is going to make a lot of people happy.",
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
            textEn:
              "Hi, we're visiting from China and we want to bring back some local specialties. What's this area famous for?",
            textZh: "你好，我们从中国来旅游，想带些当地特产回去。这里有什么有名的？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Welcome! This region is known for our maple syrup, artisan cheeses, and craft honey. We also have local jams and sauces that make great gifts. Everything in this section is produced within 50 miles of here.",
            textZh:
              "欢迎！这个地区以枫糖浆、手工奶酪和精酿蜂蜜闻名。我们还有当地的果酱和酱料，很适合送人。这个区域的所有产品都产自方圆50英里内。",
            keyPhrases: [
              { en: "maple syrup", zh: "枫糖浆" },
              { en: "artisan cheeses", zh: "手工奶酪" },
              { en: "craft honey", zh: "精酿蜂蜜" },
              { en: "locally produced", zh: "本地生产的" },
            ],
            vocabNotes: {
              artisan: {
                meaningInContext: "在这句话里表示：小批量手工制作的，强调工匠品质和传统工艺",
                similarUsage:
                  "类似用法：This artisan bread is baked fresh every morning.（这种手工面包每天早上新鲜烘焙）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "This region is famous for maple syrup, artisan cheese, and local honey. Everything here is produced within 50 miles.",
                textZh: "这个地区以枫糖浆、手工奶酪和本地蜂蜜出名。这里的都是方圆50英里内生产的。",
                actionHint: "看看特色产品",
                frequency: "common",
              },
              {
                textEn:
                  "Our best sellers for tourists are the maple syrup and honey. We also have local jams and sauces — all locally made.",
                textZh: "游客最爱买的是枫糖浆和蜂蜜。还有当地果酱和酱料——都是本地产的。",
                actionHint: "了解当地特产",
                frequency: "occasional",
              },
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
            textEn:
              "That's a smart question. Sealed, commercially packaged items like maple syrup, honey, and sauces are generally fine. Dairy products and fresh items might be restricted. I'd suggest checking with Chinese customs, but most of our packaged goods are safe to travel with.",
            textZh:
              "问得好。密封的商业包装产品像枫糖浆、蜂蜜和酱料一般没问题。乳制品和新鲜食品可能受限制。建议查一下中国海关的规定，但我们大多数包装产品都可以带。",
            keyPhrases: [
              { en: "sealed", zh: "密封的" },
              { en: "commercially packaged", zh: "商业包装的" },
              { en: "restricted", zh: "受限制的" },
              { en: "customs", zh: "海关" },
            ],
            culturalNote:
              "中国海关对入境食品有严格规定：肉类、新鲜水果、乳制品通常禁止。密封的糖浆、蜂蜜、调味品一般可以，但建议出发前查最新规定。",
            alternativeExpressions: [
              {
                textEn:
                  "Sealed stuff like syrup, honey, and sauces should be fine. Skip the dairy and fresh items. Check with Chinese customs to be safe.",
                textZh: "密封的糖浆、蜂蜜、酱料一般没问题。乳制品和新鲜食品别带。保险起见查一下中国海关。",
                actionHint: "避开受限食品",
                frequency: "common",
              },
              {
                textEn:
                  "Commercially packaged items are usually okay. Dairy might be restricted. Most of our stuff is safe to take back.",
                textZh: "商业包装的一般没问题。乳制品可能受限。我们大多数产品都可以带回去。",
                actionHint: "选择可携带的产品",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Okay, I'll skip the cheese then. Can you put together a gift set with maple syrup and honey? Maybe something nicely packaged?",
            textZh: "那奶酪就不买了。能帮我搭一个枫糖浆和蜂蜜的礼品套装吗？包装好看一点的？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Absolutely! We have a ready-made 'Taste of Vermont' gift box with a bottle of grade A maple syrup, wildflower honey, and maple candy — that's $45. Or I can build a custom box for you. We have these beautiful wooden crates that you can fill with whatever you like.",
            textZh:
              "当然可以！我们有现成的'佛蒙特风味'礼盒，里面有一瓶A级枫糖浆、野花蜂蜜和枫糖糖果——45美元。或者我可以帮你定制一盒。我们有这些漂亮的木箱，你可以自由搭配。",
            keyPhrases: [
              { en: "grade A", zh: "A级（最高等级）" },
              { en: "wildflower honey", zh: "野花蜂蜜" },
              { en: "maple candy", zh: "枫糖糖果" },
              { en: "wooden crates", zh: "木箱" },
            ],
            vocabNotes: {
              "grade A": {
                meaningInContext: "在这句话里表示：枫糖浆的最高品质等级，颜色和风味最纯正",
                similarUsage: "类似用法：This is grade A beef — the highest quality.（这是A级牛肉——最高品质）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "We have a ready-made 'Taste of Vermont' gift box for $45. Or I can build a custom one in these wooden crates — you pick what goes in.",
                textZh: "有现成的'佛蒙特风味'礼盒45美元。也可以用木箱定制——你选里面放什么。",
                actionHint: "选现成还是定制",
                frequency: "common",
              },
              {
                textEn:
                  "The gift box is $45 with syrup, honey, and candy. Or if you prefer, these wooden crates let you mix and match.",
                textZh: "礼盒45美元含糖浆、蜂蜜和糖果。如果你更喜欢，木箱可以自由搭配。",
                actionHint: "看看两个方案",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I love the wooden crate idea! Can I get 5 custom boxes? Each one with maple syrup, honey, and some maple candy. How much per box?",
            textZh: "木箱的主意太好了！能做5个定制礼盒吗？每个装枫糖浆、蜂蜜和一些枫糖糖果。每盒多少钱？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "With the wooden crate, a small bottle of syrup, a jar of honey, and a bag of maple candy, each box would be about $52. For 5 boxes, that's $260. But I'll give you a 10% bulk discount — so $234 total.",
            textZh:
              "木箱加一小瓶糖浆、一罐蜂蜜和一袋枫糖糖果，每盒大约52美元。5盒是260美元。不过我给你打个九折的批量折扣——总共234美元。",
            keyPhrases: [
              { en: "jar", zh: "罐" },
              { en: "bulk discount", zh: "批量折扣" },
            ],
            alternativeExpressions: [
              {
                textEn: "Each box is about $52. For 5, that's $260 — but I'll give you 10% off, so $234 total.",
                textZh: "每盒大约52美元。5盒260——给你打个九折，234美元。",
                actionHint: "享受批量折扣",
                frequency: "common",
              },
              {
                textEn: "5 custom crates at $52 each would be $260. With a 10% bulk discount, you're looking at $234.",
                textZh: "5个定制木箱每个52美元一共260。批量折扣打九折，234美元。",
                actionHint: "确认总价",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "That's a deal. One more question — these glass bottles won't break in my luggage, right? Can you wrap them extra carefully?",
            textZh: "成交。再问一下——这些玻璃瓶放行李箱不会碎吧？能包仔细一点吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "I'll wrap each bottle in bubble wrap and put everything snugly in the crate with tissue paper. I also recommend packing them in the center of your suitcase surrounded by soft clothes. We haven't had any breakage complaints from traveling customers!",
            textZh:
              "我会用气泡膜包好每个瓶子，再用薄纸把东西在木箱里塞紧。建议放行李箱中间用软衣服围住。我们还没有收到过旅客的碎裂投诉！",
            keyPhrases: [
              { en: "bubble wrap", zh: "气泡膜" },
              { en: "snugly", zh: "紧紧地/贴合地" },
              { en: "tissue paper", zh: "薄纸" },
              { en: "breakage", zh: "碎裂" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I'll bubble-wrap each bottle and pack them tight. Put them in the middle of your suitcase with clothes around them.",
                textZh: "每个瓶子都用气泡膜包好塞紧。放行李箱中间用衣服围住。",
                actionHint: "按建议打包",
                frequency: "common",
              },
              {
                textEn:
                  "Don't worry about breakage — we pack everything snugly. Just keep them centered in your luggage with soft things around them.",
                textZh: "不用担心碎。我们会包得很紧。放行李箱中间周围放软的东西就行。",
                actionHint: "放心携带",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "You've thought of everything. Let's do it! This is going to be such a unique gift. Everyone back home will love it.",
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
            textEn:
              "Hi, I'd like to claim a tax refund. I'm flying back to China today. Here are my tax-free forms and receipts.",
            textZh: "你好，我想办理退税。今天飞回中国。这是我的退税单和收据。",
            culturalNote: "美国办理登机或退税时不需要说'请问'或'我想'，直接说明目的即可，更自然。例如直接说 'Hi, tax refund, ",
            casualVersion:
              "Hey, wanna get a tax refund. Flying back to China today. Got my tax-free forms and receipts right here.",
            commonMistake: {
              wrong: "I want to claim a tax refund.",
              correct: "I'd like to claim a tax refund.",
              explanation: "“I want”听起来比较生硬，用“I'd like to”更礼貌。",
            },
            formalityVariants: {
              casual: "Hey, wanna get a tax refund. Flying back to China today. Got my forms and receipts.",
              standard:
                "Hi, I'd like to claim a tax refund. I'm flying back to China today. Here are my tax-free forms and receipts.",
              formal:
                "Good morning/afternoon, I wish to initiate a tax refund claim. My flight to China departs today. I have prepared all necessary tax-free forms and supporting receipts.",
            },
          },
          {
            speaker: "them",
            role: "退税柜台",
            textEn:
              "Sure! Let me check your forms. I see you have purchases from three different stores, totaling €850. May I see your passport and boarding pass?",
            textZh: "好的！我看看你的退税单。你在三家不同的店消费了，总共850欧元。能看一下你的护照和登机牌吗？",
            keyPhrases: [
              { en: "tax refund", zh: "退税" },
              { en: "tax-free forms", zh: "退税单" },
              { en: "receipts", zh: "收据" },
              { en: "boarding pass", zh: "登机牌" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Let me look at your forms. I see three stores totaling €850. Can I see your passport and boarding pass?",
                textZh: "我看看你的退税单。三家店一共850欧元。能看一下护照和登机牌吗？",
                actionHint: "出示证件",
                frequency: "common",
              },
              {
                textEn:
                  "I'll need your passport and boarding pass to process the refund. Looks like €850 in total from three shops.",
                textZh: "办理退税需要护照和登机牌。看起来三家店总共850欧元。",
                actionHint: "准备好所有材料",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Okay! Lemme see your forms. So you bought stuff from three different stores, comes out to €850. Can I see your passport and boarding pass?",
            formalityVariants: {
              casual:
                "Alright! Lemme check those forms. See you got stuff from three stores, total's €850. Passport and boarding pass?",
              standard:
                "Sure! Let me check your forms. I see you have purchases from three different stores, totaling €850. May I see your passport and boarding pass?",
              formal:
                "Certainly. I will review your documentation now. I note purchases from three distinct establishments, amounting to a total of €850. May I request your passport and boarding pass for verification?",
            },
          },
          {
            speaker: "you",
            textEn: "Here you go. How much will I get back?",
            textZh: "给您。能退多少？",
            casualVersion: "Here. How much am I getting back?",
            commonMistake: {
              wrong: "How many can I get back?",
              correct: "How much will I get back?",
              explanation: "“多少钱”不能直接翻译成“how many”，要用“how much”。",
            },
            formalityVariants: {
              casual: "Here. So, how much back?",
              standard: "Here you go. How much will I get back?",
              formal: "Certainly, here they are. Could you please inform me of the approximate refund amount?",
            },
          },
          {
            speaker: "them",
            role: "退税柜台",
            textEn:
              "The VAT refund rate varies by country and product, but typically you'll get back about 10 to 12 percent. For your €850, that's approximately €85 to €100. However, there's a processing fee of about €5 per form. Would you like cash in euros, a credit card refund, or Alipay?",
            textZh:
              "增值税退税率因国家和商品不同，但通常能退回约10%到12%。你的850欧元大约退85到100欧元。不过每张单有大约5欧元手续费。你要现金欧元、信用卡退款，还是支付宝？",
            commonMistake: {
              wrong: "How much can refund?",
              correct: "How much will I get back?",
              explanation: "中文常说“能退多少”，直译易错。用get back / be refunded 更自然。",
            },
            keyPhrases: [
              { en: "VAT", zh: "增值税（Value Added Tax）" },
              { en: "refund rate", zh: "退税率" },
              { en: "processing fee", zh: "手续费" },
              { en: "Alipay", zh: "支付宝" },
            ],
            culturalNote:
              "退税通常不能退全部增值税，退税公司会收取手续费。信用卡退款到账较慢（1-3个月），现金当场拿到但可能有更高手续费。",
            alternativeExpressions: [
              {
                textEn:
                  "You'll get about 10-12% back after the processing fee. For €850, that's roughly €85 to €100. Cash, card, or Alipay?",
                textZh: "扣手续费后大概退10-12%。850欧大约退85到100欧。现金、信用卡还是支付宝？",
                actionHint: "选择退款方式",
                frequency: "common",
              },
              {
                textEn:
                  "The refund is about €85 to €100 after fees. We can do cash euros, credit card, or Alipay. Which do you prefer?",
                textZh: "扣费后大约退85到100欧。可以退现金欧元、信用卡或支付宝。你选哪个？",
                actionHint: "决定退款方式",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "VAT refund rate changes by country/product, but usually you get back around 10 to 12 percent. So for your €850, that's like €85-€100. Heads up though, there's a €5 processing fee per form. Wanna cash in euros, credit card refund, or Alipay?",
            formalityVariants: {
              casual:
                "VAT refund rate varies, but you usually get 10-12% back. So, for your €850, that's like €85-€100. There's a €5 fee per form though. Cash, card, or Alipay?",
              standard:
                "The VAT refund rate varies by country and product, but typically you'll get back about 10 to 12 percent. For your €850, that's approximately €85 to €100. However, there's a processing fee of about €5 per form. Would you like cash in euros, a credit card refund, or Alipay?",
              formal:
                "The Value Added Tax (VAT) refund rate is subject to variations depending on the country of purchase and the specific products involved; however, a typical recovery rate is between 10 to 12 percent. For your sum of €850, this equates to an estimated refund of €85 to €100. Please be aware that a processing fee of approximately €5 per form applies. Your options for receiving the refund are cash in euros, a credit card reimbursement, or through Alipay.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take the credit card refund. Do I need to show the items to customs before checking my bags?",
            textZh: "我选信用卡退款。需要在托运前给海关看商品吗？",
            casualVersion: "Credit card refund for me. Gotta show customs the stuff before checking my bags?",
            culturalNote: "海关检查商品是退税流程的关键，中国游客常疑惑",
            commonMistake: {
              wrong: "Must I show the items to customs?",
              correct: "Do I need to show the items to customs?",
              explanation: "用“must”听起来像在质疑，“Do I need to”更自然。",
            },
            formalityVariants: {
              casual: "Credit card refund. Gotta show customs the stuff before checking bags?",
              standard:
                "I'll take the credit card refund. Do I need to show the items to customs before checking my bags?",
              formal:
                "I would prefer the credit card refund option. Is it a requirement to present the purchased items to customs officials prior to checking my luggage?",
            },
          },
          {
            speaker: "them",
            role: "退税柜台",
            textEn:
              "Good question! For purchases over €175, customs may want to see the items. I'd recommend getting the customs stamp first, then checking your bags. The customs desk is right over there — look for the 'Détaxe' or 'Tax Free' sign. After they stamp your forms, come back here and I'll process the refund.",
            textZh:
              "好问题！超过175欧元的商品海关可能要看。建议先去海关盖章，再托运行李。海关柜台就在那边——找'Détaxe'或'Tax Free'的标识。盖完章回来我帮你办退款。",
            commonMistake: {
              wrong: "I suggest you go to customs first.",
              correct: "I recommend you go to customs first.",
              explanation: "I suggest 在英语中语气较硬，不如 I recommend 或 It's best to 听起来更礼貌或自然。",
            },
            keyPhrases: [
              { en: "customs stamp", zh: "海关盖章" },
              { en: "customs desk", zh: "海关柜台" },
              { en: "Détaxe", zh: "退税（法语）" },
              { en: "process the refund", zh: "办理退款" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For items over €175, customs may want to see them first. Get the stamp, then check your bags. Come back here after for the refund.",
                textZh: "超过175欧的商品海关可能要看。先盖章再托运。盖完回来找我办退款。",
                actionHint: "先去海关盖章",
                frequency: "common",
              },
              {
                textEn:
                  "I'd recommend visiting customs first — look for the Tax Free sign over there. Once they stamp your forms, bring them back to me.",
                textZh: "建议先去海关——找那边的Tax Free标识。盖完章拿回来给我。",
                actionHint: "注意先盖章再托运",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Good question! If you bought stuff over €175, customs might wanna see 'em. I'd say get that customs stamp first, then check your bags. Customs desk is right over there — look for 'Détaxe' or 'Tax Free' signs. Once they stamp your forms, come back here and I'll process it.",
            formalityVariants: {
              casual:
                "Good question! For stuff over €175, customs might wanna see 'em. I'd just get the stamp first, then check bags. Customs desk is over there – 'Détaxe' or 'Tax Free' sign. After they stamp 'em, come back and I'll process it.",
              standard:
                "Good question! For purchases over €175, customs may want to see the items. I'd recommend getting the customs stamp first, then checking your bags. The customs desk is right over there — look for the 'Détaxe' or 'Tax Free' sign. After they stamp your forms, come back here and I'll process the refund.",
              formal:
                "That's an excellent question. For purchases exceeding €175, customs authorities may require viewing the items. I would advise obtaining the customs stamp prior to checking your luggage. The customs desk is located directly yonder; please look for signage indicating 'Détaxe' or 'Tax Free.' Once your forms have been duly stamped, please return here, and I will proceed with processing your refund.",
            },
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
            casualVersion: "Hey, I see these e-refund kiosks. How do they work?",
            commonMistake: {
              wrong: "How to use them?",
              correct: "How do they work?",
              explanation: "直接问“怎么用”比较生硬，用“how do they work”更自然。",
            },
            formalityVariants: {
              casual: "So, how do these electronic refund things work?",
              standard: "I see these electronic kiosks for tax refunds. How do they work?",
              formal: "I've noticed these electronic tax refund kiosks. Could you please explain their operation?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "It's pretty simple! First, scan the barcode on your tax-free form. Then scan your passport. The machine will verify your eligibility automatically. If everything checks out, it prints a validated receipt and you're done — no need to wait in line.",
            textZh:
              "很简单！先扫描退税单上的条形码。然后扫护照。机器会自动验证你的资格。如果没问题，打印一张验证过的收据就完成了——不用排队。",
            casualVersion: "Super easy! First, scan your form's barcode. Then your passport. The machine verifies eligibility automatically. If it all checks out, it prints a receipt, and you're good — no waiting in line.",
            formalityVariants: {
              casual: "Super easy! Just scan your tax-free form's barcode, then your passport. It'll automatically check if you're eligible. If it's all good, it prints a receipt, and you're done – no lines!",
              standard: "It's pretty simple! First, scan the barcode on your tax-free form. Then scan your passport. The machine will verify your eligibility automatically. If everything checks out, it prints a validated receipt and you're done — no need to wait in line.",
              formal: "The process is quite straightforward. You will initially scan the barcode located on your tax-free form, followed by your passport. The system will then automatically verify your eligibility. Upon successful validation, a verified receipt will be issued, thereby completing the transaction without the necessity of queuing.",
            },
            keyPhrases: [
              { en: "electronic kiosks", zh: "电子自助机" },
              { en: "barcode", zh: "条形码" },
              { en: "verify your eligibility", zh: "验证你的资格" },
              { en: "validated receipt", zh: "验证过的收据" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Just scan the barcode on your form, then your passport. If it's approved, it prints a receipt and you're done — no waiting.",
                textZh: "扫退税单上的条码，再扫护照。通过了打印收据就好——不用排队。",
                actionHint: "按步骤操作",
                frequency: "common",
              },
              {
                textEn:
                  "It's super easy — barcode first, then passport. The machine does everything automatically. Saves you from standing in line.",
                textZh: "特别简单——先扫条码再扫护照。机器自动处理。免得排队。",
                actionHint: "用自助机更快",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "The machine says 'Approval Required — Please visit customs counter.' What does that mean?",
            textZh: "机器显示'需要审批——请到海关柜台'。这什么意思？",
            casualVersion: "Machine's saying 'Approval Required — Please visit customs counter.' What's that mean?",
            commonMistake: {
              wrong: "What meaning?",
              correct: "What does that mean?",
              explanation: "直接问“什么意思”不符合英语习惯，需要助动词和主语。",
            },
            formalityVariants: {
              casual: "Machine's saying 'Approval Required — Please visit customs counter.' What's that mean?",
              standard: "The machine says 'Approval Required — Please visit customs counter.' What does that mean?",
              formal: "The machine is displaying a message stating 'Approval Required — Please visit customs counter.' Could you please clarify the implications of this message?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "That usually happens when the purchase amount is high, or it's a random check. Just take your forms and passport to the customs counter over there. They'll inspect the goods and stamp the form manually. It shouldn't take more than 10 minutes.",
            textZh:
              "通常是消费金额较大，或者随机抽查。拿着退税单和护照去那边的海关柜台就行。他们会检查商品然后手动盖章。一般不超过10分钟。",
            commonMistake: {
              wrong: "It's usually happens when...",
              correct: "That usually happens when...",
              explanation: "It's usually happens 语法错误，应是 It usually happens 或 That usually happens。",
            },
            casualVersion: "Usually, that's for big purchases, or if it's a random check. Just grab your forms and passport, head to the customs counter over there. They'll check your stuff, stamp the form. Should be under 10 minutes.",
            formalityVariants: {
              casual: "That usually happens with big purchases or random checks. Just take your forms and passport to the customs counter there. They'll check your items and stamp the form. Should be quick, like under 10 minutes.",
              standard: "That usually happens when the purchase amount is high, or it's a random check. Just take your forms and passport to the customs counter over there. They'll inspect the goods and stamp the form manually. It shouldn't take more than 10 minutes.",
              formal: "Such an occurrence typically arises in instances of substantial purchase value or as part of a randomized inspection process. In such cases, kindly present your forms and passport at the designated customs counter. The officers will then proceed to inspect the goods and manually endorse the form. This process is generally completed within ten minutes.",
            },
            keyPhrases: [
              { en: "random check", zh: "随机抽查" },
              { en: "inspect the goods", zh: "检查商品" },
              { en: "stamp the form manually", zh: "手动盖章" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That happens when the amount is high or it's a random check. Just take your stuff to the customs desk — they'll stamp it. Should be quick.",
                textZh: "金额大或随机抽查会这样。拿东西去海关柜台——他们盖章就行。应该很快。",
                actionHint: "去海关柜台",
                frequency: "common",
              },
              {
                textEn:
                  "Don't worry, it's normal. Sometimes they need to see the items. Head to customs, get the stamp, and you're good.",
                textZh: "别担心，这很正常。有时候他们要看看商品。去海关盖个章就行。",
                actionHint: "带商品去海关",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "OK. And I also have the Global Blue app on my phone — can I track my refund status there?",
            textZh: "好的。我手机上也装了Global Blue App——可以在上面查退款进度吗？",
            casualVersion: "Cool. Got the Global Blue app too — can I track my refund on it?",
            commonMistake: {
              wrong: "I have the app. Can I track my refund?",
              correct: "I have the app on my phone — can I track my refund status there?",
              explanation: "询问App内的功能时，需要明确说明“在上面”追踪，用“there”或“on it”。",
            },
            formalityVariants: {
              casual: "Okay. Got the Global Blue app on my phone too — can I track my refund status there?",
              standard: "OK. And I also have the Global Blue app on my phone — can I track my refund status there?",
              formal: "Understood. I also have the Global Blue application installed on my mobile device. Am I able to monitor the status of my refund through that platform?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "Yes! The Global Blue app is very useful. You can track all your refunds, see the status, and even submit your forms digitally at some locations. Just make sure you still drop the original forms in the mailbox before you board — the white copy goes in the Global Blue envelope. Without that, the refund won't be processed.",
            textZh:
              "可以！Global Blue App很有用。可以追踪所有退税、查状态，有些地方还能电子提交退税单。但一定要在登机前把原件投到邮箱——白色联放进Global Blue的信封。没有原件退款不会处理。",
            casualVersion: "Yeah! The Global Blue app's super handy. You can track all your refunds, see their status, even submit forms digitally sometimes. Just make sure to still drop the original forms in the mailbox *before* boarding — the white copy in the Global Blue envelope. Without it, no refund.",
            commonMistake: {
              wrong: "Without that, the refund can't be process.",
              correct: "Without that, the refund won't be processed.",
              explanation: "“不会被处理”是被动语态，需要用“won't be processed”。",
            },
            formalityVariants: {
              casual: "Totally! The Global Blue app's really useful. You can track all your refunds, check their status, and sometimes even submit forms digitally. Just remember to drop the original forms in the mailbox before boarding – the white copy in the Global Blue envelope. No original forms, no refund.",
              standard: "Yes! The Global Blue app is very useful. You can track all your refunds, see the status, and even submit your forms digitally at some locations. Just make sure you still drop the original forms in the mailbox before you board — the white copy goes in the Global Blue envelope. Without that, the refund won't be processed.",
              formal: "Indeed. The Global Blue application provides significant utility. It enables you to track the progress of all your refunds, monitor their current status, and in certain locations, even facilitate digital submission of your forms. However, it is imperative that you still deposit the original forms into the designated mailbox prior to your departure — specifically, the white copy within the Global Blue envelope. Failure to submit the original documentation will result in the non-processing of your refund.",
            },
            keyPhrases: [
              { en: "Global Blue", zh: "环球蓝联（全球最大的退税服务公司）" },
              { en: "track your refunds", zh: "追踪退税进度" },
              { en: "mailbox", zh: "邮箱/投递箱" },
              { en: "won't be processed", zh: "不会处理" },
            ],
            culturalNote:
              "退税最重要的一步是在机场投递退税原件！很多人拿了现金退款后忘记投递，结果被从信用卡扣回退税金额。",
            alternativeExpressions: [
              {
                textEn:
                  "The app is great for tracking. But remember — you must drop the original forms in the mailbox before boarding, or the refund won't go through.",
                textZh: "App追踪很方便。但记住——登机前一定要把原件投到邮箱，不然退款不会处理。",
                actionHint: "务必投递原件",
                frequency: "common",
              },
              {
                textEn:
                  "You can track everything on the app. Just don't forget to mail the white copy in the Global Blue envelope — that's the most important step.",
                textZh: "App上可以追踪。千万别忘了把白色联放进Global Blue信封投递——这是最关键的一步。",
                actionHint: "投递原件最重要",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
      // --- Flow 3: 机场退税完整流程——找柜台、出示材料、选退款方式 ---
      {
        id: "tax-refund-airport",
        titleZh: "机场退税完整流程",
        titleEn: "Airport Tax Refund Step-by-Step",
        description: "在机场找退税柜台、出示收据和护照、处理排队和被抽查、等待退款",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I'm looking for the tax refund counter. I have several tax-free forms from different stores. Where do I need to go first — customs or the refund desk?",
            textZh: "不好意思，我在找退税柜台。我有好几家店的退税单。我应该先去哪——海关还是退税窗口？",
            culturalNote: "退税流程的顺序在不同机场不一样，但大多数是先去海关盖章再去退税柜台。这个顺序很关键——如果先托运了行李，海关没法检查商品，可能拒绝盖章。一定要在办理登机前先搞定退税。",
            commonMistake: {
              wrong: "Where is the tax return place?",
              correct: "Where is the tax refund counter?",
              explanation: "'tax return' 是报税/退税（年度所得税），'tax refund counter' 才是购物退税柜台。两个概念完全不同。",
            },
            casualVersion: "Hey, where's the tax refund counter? Got a bunch of forms from different shops. Do I go to customs first or the refund desk?",
            formalityVariants: {
              casual: "Tax refund counter — where is it? Got forms from a bunch of stores. Customs first or refund desk?",
              standard: "I'm looking for the tax refund counter. I have multiple tax-free forms. Should I go to customs or the refund desk first?",
              formal: "Pardon me, I am seeking the tax refund service counter. I possess several tax-free forms from various establishments. Could you advise whether I should proceed to customs or the refund desk initially?",
            },
          },
          {
            speaker: "them",
            role: "机场工作人员",
            textEn: "You need to go to customs first to get your forms stamped. The customs validation desk is in Departure Hall B, before the security checkpoint. Make sure you have all your purchased items accessible — they might want to inspect them. After that, the refund counter is past security, near Gate 15.",
            textZh: "你需要先去海关盖章。海关验证柜台在出发大厅B，安检之前。确保你的购买商品都能拿出来——他们可能要检查。盖完章之后，退税柜台在安检之后，15号登机口附近。",
            keyPhrases: [
              { en: "customs validation desk", zh: "海关验证柜台" },
              { en: "security checkpoint", zh: "安检" },
              { en: "have items accessible", zh: "确保商品能拿出来检查" },
              { en: "get forms stamped", zh: "让退税单盖章" },
            ],
            alternativeExpressions: [
              {
                textEn: "Customs first, then the refund counter. Customs is in Hall B, before security. Keep your shopping bags handy — they check the items sometimes. After customs stamps your forms, go through security and the refund desk is by Gate 15.",
                textZh: "先海关，再退税柜台。海关在B大厅安检前。购物袋放在手边——他们有时候会检查。海关盖完章后过安检，退税柜台在15号门旁。",
                actionHint: "先海关再安检",
                frequency: "common",
              },
            ],
            culturalNote: "很多中国游客的常见错误：先去值机柜台把行李托运了，然后发现海关要检查商品但东西已经在行李里了。正确顺序是：退税海关盖章 → 托运行李 → 安检 → 退税柜台拿钱/办退款。",
            casualVersion: "Go to customs first — Hall B, before security. Keep your shopping stuff handy, they might check it. After they stamp your forms, go through security. Refund desk is by Gate 15.",
            formalityVariants: {
              casual: "Customs first, Hall B, before security. Have your stuff ready. After the stamp, refund desk is past security at Gate 15.",
              standard: "Please proceed to customs in Departure Hall B, before security, to get your forms stamped. Keep purchased items accessible. The refund counter is past security, near Gate 15.",
              formal: "Kindly proceed to the customs validation desk located in Departure Hall B, prior to the security checkpoint. Please ensure all purchased items are readily accessible for potential inspection. Once your forms have been validated, the tax refund counter is situated past security, in proximity to Gate 15.",
            },
          },
          {
            speaker: "you",
            textEn: "OK I'm at customs now. Hi, I need to get these tax-free forms stamped. Here are my forms, receipts, passport, and boarding pass. I also have the items in my carry-on if you need to see them.",
            textZh: "好的，我到海关了。你好，我需要给这些退税单盖章。这是我的退税单、收据、护照和登机牌。如果需要看商品，东西在我的随身行李里。",
            culturalNote: "一次性出示所有材料（退税单+收据+护照+登机牌）会让流程更快。主动说'I have the items if you need to see them'表明你准备充分，海关官员会对你印象更好。",
            commonMistake: {
              wrong: "I need stamp for tax refund. Here is my paper.",
              correct: "I need to get these tax-free forms stamped. Here are my forms, receipts, passport, and boarding pass.",
              explanation: "'get these forms stamped' 是被动用法更自然。列出所有文件显示你准备充分。",
            },
            casualVersion: "Hey, need these tax-free forms stamped. Got my forms, receipts, passport, boarding pass. Items are in my carry-on if you wanna check.",
            formalityVariants: {
              casual: "Hey, need stamps on these. Got everything here — forms, receipts, passport, boarding pass. Got the items too if needed.",
              standard: "I need to get these tax-free forms stamped. Here are all my documents and the items are in my carry-on.",
              formal: "Good morning. I am here to have my tax-free forms validated. I have prepared all necessary documentation: the forms, original receipts, my passport, and boarding pass. The purchased items are in my carry-on luggage, available for inspection should it be required.",
            },
          },
          {
            speaker: "them",
            role: "海关官员",
            textEn: "Let me see... OK, three forms, three receipts. Everything matches. For the handbag — the one over €175 — I need to see the item. Can you show it to me?",
            textZh: "让我看看……好的，三张退税单，三张收据。都对得上。那个手提包——超过175欧元的——我需要看一下实物。能拿给我看看吗？",
            keyPhrases: [
              { en: "everything matches", zh: "都对得上" },
              { en: "over €175", zh: "超过175欧元" },
              { en: "show it to me", zh: "拿给我看看" },
            ],
            alternativeExpressions: [
              {
                textEn: "Three forms, three receipts, all good. The high-value item — the handbag — I'll need to verify. Mind pulling it out for me?",
                textZh: "三张单，三张收据，都没问题。高价商品——那个手提包——我需要确认一下。方便拿出来给我看吗？",
                actionHint: "取出商品展示",
                frequency: "common",
              },
            ],
            culturalNote: "海关通常只检查高价值商品（over €175 在欧盟，各国标准不同）。低价商品一般直接盖章不查。如果你的商品在托运行李里拿不出来，海关可能拒绝盖章——这是很多人的惨痛教训。",
            casualVersion: "Let me check... Three forms, three receipts, all matching. The handbag over €175 — gotta see it. Can you pull it out?",
            formalityVariants: {
              casual: "Three forms, receipts check out. The handbag though — need to see it. It's over €175.",
              standard: "Three forms and receipts, everything matches. For the handbag exceeding €175, I need to see the item. Could you show it to me?",
              formal: "I have reviewed your three forms and corresponding receipts. All documentation appears to be in order. However, for the handbag, which exceeds the €175 threshold, physical verification is required. Would you kindly present the item for inspection?",
            },
          },
          {
            speaker: "you",
            textEn: "Sure, here it is — still in the original packaging with tags on. I haven't used it. It's a gift for my mom.",
            textZh: "当然，在这里——还在原包装里，标签也在。我没有用过。是送给我妈妈的礼物。",
            culturalNote: "退税商品理论上应该是'未使用'的状态才能退税（因为是要'带出境'的）。保留原包装和标签会让海关检查更快通过。如果商品已经使用过（比如穿过的衣服），海关可能会有疑问但通常不会拒绝盖章。",
            commonMistake: {
              wrong: "Here, I didn't use it. It's for my mother.",
              correct: "Here it is — still in the original packaging with tags on. I haven't used it.",
              explanation: "说明原包装完好更有说服力。'tags on'（标签还在）是关键短语。",
            },
            casualVersion: "Here you go. Still in the packaging, tags are on. Haven't used it — it's a gift for my mom.",
            formalityVariants: {
              casual: "Here. Packaging's still on, tags too. Haven't used it. Gift for my mom.",
              standard: "Here it is, in original packaging with tags. It hasn't been used — it's a gift.",
              formal: "Certainly. As you can see, the item remains in its original packaging with all tags intact. It has not been used. It is intended as a gift for my mother.",
            },
          },
          {
            speaker: "them",
            role: "海关官员",
            textEn: "Perfect. Everything checks out. I've stamped all three forms. Now take these to the refund counter past security. They'll process your refund there. You can choose cash, credit card, or sometimes Alipay. One tip — if you're in a hurry, take cash. Credit card refunds can take 2 to 3 months to show up.",
            textZh: "没问题。都通过了。三张单我都盖了章。现在拿着这些去安检后面的退税柜台。他们会在那里办理退款。你可以选现金、信用卡，有时候也有支付宝。一个建议——如果赶时间，拿现金。信用卡退款可能要2-3个月才到账。",
            keyPhrases: [
              { en: "everything checks out", zh: "都通过了/都没问题" },
              { en: "process your refund", zh: "办理退款" },
              { en: "show up", zh: "到账/出现" },
            ],
            alternativeExpressions: [
              {
                textEn: "All stamped. Head through security and find the refund counter. You've got three options: cash, card, or digital wallet. Cash is instant but they take a slightly higher service fee. Card takes longer but the fee is lower.",
                textZh: "都盖了。过安检后找退税柜台。你有三种选择：现金、信用卡或电子钱包。现金即时拿到但手续费稍高。信用卡慢但手续费低。",
                actionHint: "权衡选择",
                frequency: "common",
              },
            ],
            culturalNote: "现金退税 vs 信用卡退税的选择：现金当场拿到但手续费可能多$3-5/张；信用卡手续费低但要等2-3个月。很多人选了信用卡退款后回国就忘了确认，结果退税公司'忘记'打款——选现金更保险。",
            casualVersion: "All good, all stamped. Take 'em to the refund counter past security. Cash, card, or Alipay for the refund. Pro tip — cash is instant, card takes months.",
            formalityVariants: {
              casual: "All stamped! Refund counter's past security. Cash, card, or Alipay. Take cash if you're in a rush — card takes forever.",
              standard: "All three forms are stamped. Proceed to the refund counter past security. Options are cash, credit card, or Alipay. Cash is recommended if you're short on time — card refunds take 2-3 months.",
              formal: "All three forms have been validated and stamped. Please proceed through security to the designated refund counter. Your options for receiving the refund include cash, credit card reimbursement, or digital payment methods such as Alipay. I would advise choosing cash if time is a consideration, as credit card refunds may require 2 to 3 months to process.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take cash. One more question — after I get the cash refund, do I still need to drop the forms in a mailbox? I've heard some people say you have to mail them or the refund gets reversed.",
            textZh: "我选现金。再问一个——拿到现金退款后，我还需要把退税单投进邮箱吗？我听有人说要寄出去，不然退款会被追回。",
            culturalNote: "这是退税流程中最重要也最容易被忽视的一步！如果你拿了现金退款但没有投递退税单原件，退税公司可能会从你之前留的信用卡上扣回退款金额。Global Blue 和 Planet Tax Free 都有这个机制。",
            commonMistake: {
              wrong: "After I get money, do I need to post the paper?",
              correct: "After I get the cash refund, do I need to drop the forms in a mailbox?",
              explanation: "'drop in a mailbox'（投进邮箱）是标准说法。'post the paper' 太笼统。",
            },
            casualVersion: "Cash for me. Oh wait — do I still gotta drop the forms in a mailbox after? Heard they reverse the refund if you don't.",
            formalityVariants: {
              casual: "I'll take cash. But do I gotta mail the forms too? Heard they'll charge it back if you don't.",
              standard: "I'll take the cash refund. Do I also need to mail the forms? I've heard refunds can be reversed if the forms aren't submitted.",
              formal: "I shall opt for the cash refund. I have one additional query — is it necessary to deposit the forms in the designated mailbox following the cash refund? I understand that failure to do so may result in the refund being reversed.",
            },
          },
          {
            speaker: "them",
            role: "退税柜台工作人员",
            textEn: "Great question — and yes, absolutely! After you receive your cash refund, you must drop the stamped forms in our designated mailbox. It's the blue box right next to this counter. If you took cash and don't mail the forms, we'll charge the refund amount back to the credit card you provided as a guarantee. This is the step most tourists forget, so don't skip it!",
            textZh: "好问题——是的，一定要！拿到现金退款后，你必须把盖了章的退税单投到我们的专用邮箱。就是这个柜台旁边的蓝色箱子。如果你拿了现金但没寄退税单，我们会从你提供的担保信用卡上扣回退款金额。这是大多数游客忘记的步骤，千万别跳过！",
            keyPhrases: [
              { en: "designated mailbox", zh: "专用邮箱/投递箱" },
              { en: "charge back", zh: "扣回/追回" },
              { en: "guarantee", zh: "担保" },
              { en: "don't skip it", zh: "千万别跳过" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yes! This is crucial. After cash refund, drop the stamped forms in the blue box here. If you forget, the amount gets charged back to your credit card. We see tourists forget this every single day. Please don't be one of them!",
                textZh: "是的！这非常关键。拿到现金后把盖章的单子投到这边的蓝色箱子里。如果忘了，金额会从你信用卡扣回。每天都有游客忘记这步。请不要成为其中之一！",
                actionHint: "强调重要性",
                frequency: "common",
              },
            ],
            culturalNote: "退税流程的最后一步是投递原件！这是全球退税系统最大的'坑'。退税公司要原件来和海关盖章记录核对。拿了现金又不投递 = 退税公司会从你的担保信用卡扣回同等金额。每年有大量中国游客因此被扣款。",
            casualVersion: "Yes, super important! Drop the stamped forms in that blue box right here after you get your cash. If you don't, they charge it back to your credit card. Tourists forget this all the time. Don't skip it!",
            formalityVariants: {
              casual: "Yes! Drop the forms in that blue box after getting cash. If you don't, they charge your card back. Everyone forgets this — don't be that person!",
              standard: "Absolutely. After receiving your cash refund, please deposit the stamped forms in the blue mailbox beside this counter. Failure to do so will result in the refund being charged back to your guarantee credit card.",
              formal: "That is an excellent and important question. Following the receipt of your cash refund, it is imperative that you deposit the stamped forms into our designated blue mailbox, located adjacent to this counter. Should the forms not be submitted, the refund amount will be debited from the credit card you provided as collateral. This is the most frequently overlooked step in the refund process.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it — forms in the blue box. Done! Thank you so much for walking me through the whole process. I almost made the mistake of checking my bags before getting the customs stamp.",
            textZh: "明白了——退税单投蓝色箱子。搞定！非常感谢你帮我走完整个流程。我差点犯了先托运行李再去海关盖章的错误。",
            culturalNote: "'Walking me through' 是美式英语中表示'带我一步步走完'的常用表达。在退税过程中表达感谢是好习惯——这些工作人员每天处理上百个退税，态度友善会让流程更顺利。",
            commonMistake: {
              wrong: "Thank you for helping me do the refund. I almost put luggage before stamp.",
              correct: "Thank you for walking me through the process. I almost checked my bags before getting the customs stamp.",
              explanation: "'walking me through' 比 'helping me do' 更准确地表达带你完成流程。'checked my bags' 是托运行李的正确说法。",
            },
            casualVersion: "Forms in the box — done! Thanks for walking me through everything. Almost checked my bags before the customs stamp — that would've been bad!",
            formalityVariants: {
              casual: "Done! Thanks for the help. Almost checked my bags before the stamp — close call!",
              standard: "All done. Thank you for guiding me through the process. I nearly made the mistake of checking my luggage before visiting customs.",
              formal: "That is completed. I am most grateful for your thorough guidance throughout this process. I very nearly committed the error of checking my luggage prior to obtaining the customs validation.",
            },
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
            casualVersion: "Hey, looking for some perfume as gifts. How much cheaper's it than retail?",
            commonMistake: {
              wrong: "I want to buy some perfume as gifts.",
              correct: "I'm looking for some perfume as gifts.",
              explanation: "中国人常用“我想买”，但“I want”听起来较生硬，用“I'm looking for”或“I'd like”更自然。",
            },
            formalityVariants: {
              casual: "Hey, looking for some perfume for gifts. How much cheaper's it than retail?",
              standard:
                "Hi, I'm looking for some perfume as gifts. How much cheaper is it compared to regular retail prices?",
              formal:
                "Good morning/afternoon. I am interested in purchasing some perfume for gifts. Could you please inform me of the price difference compared to standard retail?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Duty-free prices are typically 20 to 40 percent lower than regular retail, since there's no sales tax or import duty. For example, this Chanel No. 5 is $85 here — it retails for $135 in stores.",
            textZh:
              "免税价通常比零售价低20%到40%，因为没有销售税和进口税。比如这瓶香奈儿5号这里85美元——外面店里卖135美元。",
            commonMistake: {
              wrong: "because no sales tax and import tax",
              correct: "since there's no sales tax and import tax",
              explanation: "“因为没有...” 英语常用there is/are来表达存在",
            },
            keyPhrases: [
              { en: "duty-free", zh: "免税" },
              { en: "sales tax", zh: "销售税" },
              { en: "import duty", zh: "进口税" },
              { en: "retails for", zh: "零售价是" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Duty-free is usually 20-40% cheaper. This Chanel is $85 here versus $135 outside. Big savings on premium brands.",
                textZh: "免税一般便宜20-40%。这瓶香奈儿这里85美元，外面135。大牌省很多。",
                actionHint: "比较价格",
                frequency: "common",
              },
              {
                textEn:
                  "You save a lot here — no sales tax or import duty. This perfume is $50 less than regular retail.",
                textZh: "这里省很多——没有销售税和进口税。这瓶香水比零售价便宜50美元。",
                actionHint: "了解免税优势",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Duty-free's usually like, 20 to 40% cheaper than regular stores. No sales tax or import duty, ya know? Like this Chanel No. 5? It's $85 here, but it's $135 in normal shops.",
            formalityVariants: {
              casual:
                "Duty-free's usually like 20-40% cheaper than regular stores. No sales tax or import duty, ya know? This Chanel No. 5's $85 here, but $135 in normal shops.",
              standard:
                "Duty-free prices are typically 20 to 40 percent lower than regular retail, since there is no sales tax or import duty. For example, this Chanel No. 5 is $85 here, and it retails for $135 in other stores.",
              formal:
                "As a general rule, duty-free prices are approximately 20 to 40 percent lower than standard retail pricing, owing to the exemption from sales tax and import duties. To illustrate, this Chanel No. 5 is priced at $85 here, while its retail price in conventional establishments is $135.",
            },
          },
          {
            speaker: "you",
            textEn:
              "That's a great deal! I'll take two. Can I also look at some whisky? What's the alcohol limit I can bring into China?",
            textZh: "很划算！我要两瓶。能看看威士忌吗？可以带多少酒入境中国？",
            casualVersion:
              "Oh, awesome! I'll grab two. Can I check out some whisky too? What's the alcohol limit for China?",
            commonMistake: {
              wrong: "What alcohol I can bring into China?",
              correct: "What's the alcohol limit I can bring into China?",
              explanation: "中国人常遗漏介词或助动词，导致表达不完整，听起来不自然。",
            },
            formalityVariants: {
              casual:
                "Oh, awesome! I'll grab two. Can I check out some whisky too? What's the alcohol limit for China?",
              standard:
                "That's a great deal! I'll take two of those. May I also look at some whisky? What is the alcohol limit for bringing it into China?",
              formal:
                "That is indeed an excellent value. I will purchase two. Additionally, I would be interested in viewing your selection of whiskies. Could you please inform me of the permissible alcohol quantity for entry into China?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "China allows you to bring up to 1,500 ml of alcohol — so two standard 750ml bottles. You can also bring up to 400 cigarettes. Beyond that, you'll need to declare and pay duty at Chinese customs.",
            textZh:
              "中国允许携带最多1500毫升酒——也就是两瓶标准750毫升的。还可以带400支烟。超过的话需要在中国海关申报并缴税。",
            commonMistake: {
              wrong: "Beyond that, you need declare it",
              correct: "Beyond that, you'll need to declare it",
              explanation: "“need to do sth”是固定用法，口语常省略will。",
            },
            keyPhrases: [
              { en: "alcohol limit", zh: "酒类限额" },
              { en: "1,500 ml", zh: "1500毫升" },
              { en: "declare", zh: "申报" },
              { en: "pay duty", zh: "缴税" },
            ],
            culturalNote:
              "中国海关对入境免税商品有总价限额（目前约5000元人民币），超过部分需缴税。烟酒有单独的数量限额。",
            alternativeExpressions: [
              {
                textEn:
                  "China allows 1,500ml of alcohol — two 750ml bottles. Over that, you'll have to declare and pay duty.",
                textZh: "中国允许带1500毫升酒——两瓶750毫升的。超过要申报缴税。",
                actionHint: "注意酒类限额",
                frequency: "common",
              },
              {
                textEn:
                  "You can bring two bottles of spirits into China. Just stay under 1,500ml total and you're fine.",
                textZh: "可以带两瓶烈酒入境中国。不超过1500毫升就没问题。",
                actionHint: "控制在限额内",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "China lets you bring in up to 1,500 ml of booze — so, like, two standard 750ml bottles. Also, you can bring up to 400 cigarettes. Anything more, you gotta declare it and pay duty at customs.",
            formalityVariants: {
              casual:
                "China lets you bring in up to 1,500 ml of booze – so, like, two standard 750ml bottles. Also, 400 cigarettes. Anything more, you gotta declare it and pay duty at customs.",
              standard:
                "China permits the import of up to 1,500 ml of alcohol, which equates to two standard 750ml bottles. You may also bring up to 400 cigarettes. Quantities exceeding these limits will require declaration and payment of duty at Chinese customs.",
              formal:
                "The People's Republic of China's regulations permit the importation of up to 1,500 milliliters of alcoholic beverages, which is equivalent to two standard 750-milliliter bottles. Additionally, an individual may import up to 400 cigarettes. Any quantities surpassing these allowances must be formally declared to and assessed for duty by Chinese customs authorities.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take one bottle of Macallan 18. Can you gift-wrap it?",
            textZh: "我要一瓶麦卡伦18年。能帮我包装成礼物吗？",
            casualVersion: "I'll get a Macallan 18. Can you gift-wrap it for me?",
            commonMistake: {
              wrong: "Can you packing it?",
              correct: "Can you gift-wrap it?",
              explanation: "中国人常将“包装”直接翻译为“packing”，但此处应使用“gift-wrap”或“wrap as a gift”。",
            },
            formalityVariants: {
              casual: "I'll get a Macallan 18. Can you gift-wrap it for me?",
              standard: "I'll take one bottle of Macallan 18. Could you please gift-wrap it?",
              formal:
                "I would like to purchase one bottle of Macallan 18 Year Old. Would it be possible to have it gift-wrapped?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Of course! Free gift wrapping for all purchases. Your total for the two perfumes and the whisky is $310. Would you like to pay in dollars, euros, or Chinese yuan? We accept all major currencies and Union Pay.",
            textZh:
              "当然！所有商品免费礼品包装。两瓶香水加威士忌总共310美元。用美元、欧元还是人民币付款？我们接受各主要货币和银联卡。",
            commonMistake: {
              wrong: "Would you like to pay dollars, euros, or Chinese yuan?",
              correct: "Would you like to pay in dollars, euros, or Chinese yuan?",
              explanation: "询问支付货币时，'pay in [currency]'是正确用法。",
            },
            keyPhrases: [
              { en: "gift wrapping", zh: "礼品包装" },
              { en: "major currencies", zh: "主要货币" },
              { en: "Union Pay", zh: "银联" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Two perfumes and the whisky — $310 total. We take dollars, euros, yuan, and UnionPay. Free gift wrapping too!",
                textZh: "两瓶香水加威士忌——总共310美元。收美元、欧元、人民币和银联。还免费包装！",
                actionHint: "选择付款货币",
                frequency: "common",
              },
              {
                textEn: "Your total is $310. You can pay in any major currency. Want me to gift-wrap everything?",
                textZh: "一共310美元。任何主要货币都收。要帮你礼品包装吗？",
                actionHint: "准备付款",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Totally! Free gift wrapping for everything. So, for the two perfumes and the whisky, your total's $310. Wanna pay in dollars, euros, or Chinese yuan? We take all major currencies and Union Pay.",
            culturalNote: "银联 (UnionPay) 在国外通常需要询问才能使用。",
            formalityVariants: {
              casual:
                "Totally! Free gift wrapping for everything. So, for the two perfumes and the whisky, your total's $310. Wanna pay in dollars, euros, or yuan? We take all major currencies and Union Pay.",
              standard:
                "Certainly! We offer complimentary gift wrapping for all purchases. Your total for the two perfumes and the whisky comes to $310. Would you prefer to pay in US dollars, euros, or Chinese yuan? We accept all major currencies and Union Pay.",
              formal:
                "Absolutely! We provide complimentary gift wrapping services for all items purchased. Your grand total for the two perfumes and the whisky amounts to $310. Would you care to remit payment in United States Dollars, Euros, or Chinese Yuan? We are equipped to process all major currencies as well as UnionPay.",
            },
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
            textEn:
              "I have a connecting flight in Tokyo. If I buy liquids here, can I bring them through security at my transit airport?",
            textZh: "我在东京转机。如果在这里买了液体，能过转机机场的安检吗？",
            casualVersion:
              "Got a connection in Tokyo. If I buy liquids here, can I get 'em through security at my transfer airport?",
            commonMistake: {
              wrong: "Can it pass security at my transit airport?",
              correct: "Can I bring them through security at my transit airport?",
              explanation: "直接说“它能过安检吗”听起来不自然，英文中常用 “bring through security”",
            },
            formalityVariants: {
              casual: "Got a connection in Tokyo. Buy liquids here, can I get 'em through security at the transfer?",
              standard:
                "I have a connecting flight in Tokyo. If I buy liquids here, can I bring them through security at my transit airport?",
              formal:
                "Excuse me, I have an upcoming connecting flight in Tokyo. If I were to purchase liquids at this location, would I be permitted to transport them through security at my transit airport?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "That's a really important question. If your duty-free liquids are sealed in a tamper-evident bag — which we provide — most airports will allow them through security. However, rules vary. Japan generally accepts sealed duty-free bags, but you should keep the receipt visible inside the bag.",
            textZh:
              "这是个很重要的问题。如果你的免税液体密封在防拆袋里——我们会提供——大多数机场安检都允许通过。但规则因地而异。日本一般接受密封的免税袋，但收据要放在袋子里能看到。",
            casualVersion: "Good question. If your duty-free liquids are sealed in one of our tamper-proof bags, most security's cool with 'em. But rules change. Japan usually accepts 'em, just make sure the receipt's visible.",
            commonMistake: {
              wrong: "rules are different by location",
              correct: "rules vary by location",
              explanation: "'vary by [因素]'是更地道的表达，表示“根据...而变化”。",
            },
            formalityVariants: {
              casual: "Good question. If your duty-free liquids are in our sealed, tamper-proof bag, most security will let 'em through. But rules differ. Japan's usually fine, just show the receipt inside.",
              standard: "That's a very important question. If your duty-free liquids are sealed in a tamper-evident bag — which we'll provide — most airport security will allow them through. But rules vary by location. Japan generally accepts sealed duty-free bags, but the receipt needs to be visible inside the bag.",
              formal: "That is indeed a crucial inquiry. Provided your duty-free liquids remain sealed within a tamper-evident bag, which we will supply, most airport security protocols will permit their passage. However, regulations are subject to regional variation. Japan, for example, typically accepts sealed duty-free bags, requiring the receipt to be visibly enclosed.",
            },
            keyPhrases: [
              { en: "connecting flight", zh: "转机航班" },
              { en: "tamper-evident bag", zh: "防拆袋/安全密封袋" },
              { en: "sealed", zh: "密封的" },
              { en: "receipt visible", zh: "收据能看到" },
            ],
            culturalNote:
              "转机时免税商品的液体限制是很多旅客忽略的问题。如果防拆袋被打开或破损，转机安检可能不允许带上飞机。建议在最后一程航班的出发地购买液体免税品最安全。",
            alternativeExpressions: [
              {
                textEn:
                  "Important question! We'll seal your liquids in a tamper-evident bag. Most airports accept them, but keep the receipt visible inside.",
                textZh: "重要的问题！我们会把液体密封在防拆袋里。大多数机场接受，但收据要放在里面能看到。",
                actionHint: "保持袋子密封完好",
                frequency: "common",
              },
              {
                textEn:
                  "As long as the duty-free bag stays sealed, most transit airports will let you through. Japan generally accepts sealed bags.",
                textZh: "只要免税袋保持密封，大多数转机机场都让过。日本一般接受密封袋。",
                actionHint: "不要打开防拆袋",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What if the bag gets opened during the transit? Would I lose the items?",
            textZh: "如果转机时袋子被打开了怎么办？东西会被没收吗？",
            casualVersion: "What if it gets opened during the layover? Do I lose my stuff?",
            commonMistake: {
              wrong: "Would I lost the items?",
              correct: "Would I lose the items?",
              explanation: "'lose' 是动词“失去”，'lost' 是形容词“失去的”或动词过去式。",
            },
            formalityVariants: {
              casual: "What if the bag gets opened during transit? Do I just lose everything?",
              standard: "What if the bag gets opened during the transit? Would I lose the items?",
              formal: "In the event that the bag is unsealed during the transit period, would I be subject to confiscation of the purchased items?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "If the seal is broken, transit security might confiscate liquids over 100ml. To be safe, I'd suggest buying alcohol and perfume at your final departure airport — Tokyo Narita has an excellent duty-free selection. Or, you can check these items in your luggage if you have access to your bags during transit.",
            textZh:
              "如果封条破了，转机安检可能会没收超过100ml的液体。保险起见，建议在最后出发的机场买酒和香水——东京成田免税店选择很丰富。或者转机时如果能拿到托运行李，可以把这些放进去。",
            casualVersion: "If the seal's broken, security might take any liquids over 100ml. Best bet? Buy your booze and perfume at your last airport, like Narita — they've got tons. Or, if you can get your checked bags during the layover, put 'em in there.",
            commonMistake: {
              wrong: "For safety, I recommend buying...",
              correct: "To be safe, I recommend buying...",
              explanation: "'To be safe' 是地道表达，表示“为了保险起见”。",
            },
            formalityVariants: {
              casual: "Seal breaks, security might snatch liquids over 100ml. To play it safe, buy your alcohol and perfume at your last airport – Narita's got a big selection. Or, if you can grab your checked luggage during the layover, stash 'em there.",
              standard: "If the seal is broken, transit security might confiscate liquids over 100ml. To be safe, I recommend buying alcohol and perfume at your final departure airport — Narita in Tokyo has a great selection. Or, if you can retrieve your checked luggage during transit, you can put them in there.",
              formal: "Should the security seal be compromised, transit security personnel reserve the right to confiscate liquids exceeding 100 milliliters. As a precautionary measure, I advise purchasing alcohol and perfume at your ultimate departure airport; for instance, Narita in Tokyo offers an extensive selection. Alternatively, if retrieval of checked luggage is feasible during your transit, these items may be placed within.",
            },
            keyPhrases: [
              { en: "seal is broken", zh: "封条破了" },
              { en: "confiscate", zh: "没收" },
              { en: "100ml", zh: "100毫升（液体随身限制）" },
              { en: "final departure airport", zh: "最后出发的机场" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "If the seal breaks, they might confiscate anything over 100ml. Safest to buy alcohol at your last departure airport.",
                textZh: "如果封条破了，超过100ml的可能被没收。最安全的是在最后出发的机场买酒。",
                actionHint: "在最后一站买液体",
                frequency: "common",
              },
              {
                textEn:
                  "Broken seal means transit security could take your liquids. I'd buy perfume here but save the whisky for Narita.",
                textZh: "封条破了转机安检可能没收液体。建议这里买香水，威士忌留到成田买。",
                actionHint: "合理规划购物地点",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Good advice. I'll buy the perfume here and save the whisky for Narita. That way I won't have to worry about it.",
            textZh: "好建议。我在这里买香水，威士忌留到成田买。这样就不用担心了。",
            casualVersion: "Smart. I'll get the perfume now, and the whisky at Narita. No worries then.",
            commonMistake: {
              wrong: "I will buy perfume here, whisky buy at Narita.",
              correct: "I'll buy the perfume here, and save the whisky for Narita.",
              explanation: "'save for'表示“留到以后再做/用”。",
            },
            formalityVariants: {
              casual: "Yeah, smart. Perfume here, whisky at Narita. No fuss.",
              standard: "Good advice. I'll buy the perfume here, and save the whisky for Narita. That way I won't have to worry about it.",
              formal: "That is sound advice. I shall proceed with the perfume purchase here and defer the whisky acquisition until Narita. This approach will alleviate any potential concerns.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Smart choice! One more tip — you can pre-order online at most airport duty-free shops and pick up at the gate. That way you're guaranteed the item you want. Here, I'll write down the Narita duty-free website for you.",
            textZh:
              "聪明的选择！再给你一个建议——大多数机场免税店可以网上预订、登机口取货。这样能保证你想要的商品有货。我把成田免税店网址写给你。",
            casualVersion: "Good call! Another tip — you can pre-order online at most duty-frees and just grab it at the gate. That way you know you'll get it. I'll jot down the Narita site for ya.",
            commonMistake: {
              wrong: "That way you can get what you want.",
              correct: "That way you're sure to get what you want.",
              explanation: "'be sure to'比'can'更强调“确保能得到”。",
            },
            formalityVariants: {
              casual: "Yeah, smart! Another thing — pre-order online at most duty-frees, pick up at the gate. That guarantees you get it. Here's the Narita site.",
              standard: "Smart choice! One more tip — you can pre-order online at most airport duty-free shops and pick up at the gate. That way you're sure to get what you want. I'll write down the Narita duty-free website for you.",
              formal: "An astute decision! Allow me to offer an additional suggestion: many airport duty-free establishments facilitate online pre-ordering with gate collection, thereby guaranteeing the availability of your desired items. I will provide you with the Narita duty-free website.",
            },
            keyPhrases: [
              { en: "pre-order online", zh: "网上预订" },
              { en: "pick up at the gate", zh: "登机口取货" },
              { en: "guaranteed", zh: "保证有货" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Pro tip — you can pre-order online from most airport duty-free shops and pick up at the gate. Guarantees your item.",
                textZh: "小建议——大多数机场免税店可以网上预订、登机口取。保证有货。",
                actionHint: "记下免税店网址",
                frequency: "common",
              },
              {
                textEn:
                  "Most airport duty-free shops let you order ahead online. That way you don't have to worry about them being sold out.",
                textZh: "大多数机场免税店可以提前在网上订。这样不用担心断货。",
                actionHint: "提前在网上下单",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 黑五购物 ====================
  {
    id: "shopping-black-friday",
    tags: ["black friday", "黑五", "deals", "doorbusters", "holiday shopping"],
    category: "shopping",
    titleZh: "黑五购物",
    titleEn: "Black Friday Shopping",
    description: "黑色星期五购物，包括抢购特价商品、排队、询问折扣等场景",
    otherRole: "店员",
    otherRoleIcon: "tag",
    flows: [
      // --- Flow 1: 黑五基础购物 ---
      {
        id: "bf-basic",
        titleZh: "黑五抢购",
        titleEn: "Black Friday Deal Hunting",
        description: "排队进店、询问特价商品、抢购限量折扣的基本流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, is this the line for the Black Friday doorbuster deals?",
            textZh: "请问，这是排队等黑五开门特价的队伍吗？",
            culturalNote: "Doorbuster 是黑五术语，指开门后限量抢购的超低价商品，通常数量有限，先到先得。",
            casualVersion: "Hey, is this the line for the doorbusters?",
            commonMistake: {
              wrong: "Is this the queue for Black Friday?",
              correct: "Is this the line for the Black Friday doorbuster deals?",
              explanation: "美国用 line 而非 queue（英式），doorbuster 是专用术语。",
            },
            formalityVariants: {
              casual: "Hey, is this where we line up for the doorbusters?",
              standard: "Excuse me, is this the line for the Black Friday doorbuster deals?",
              formal: "Pardon me, could you confirm whether this is the queue for the Black Friday doorbuster specials?",
            },
          },
          {
            speaker: "them",
            role: "排队的人",
            textEn: "Yep, this is it! I've been here since 4 AM. The TV deals are supposed to be insane this year.",
            textZh: "是的，就是这里！我凌晨4点就来了。听说今年电视的折扣力度很大。",
            keyPhrases: [
              { en: "been here since", zh: "从...就在这里了" },
              { en: "insane", zh: "疯狂的/力度很大的" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yeah, you're in the right spot. Get ready — it's gonna be a madhouse when the doors open.",
                textZh: "对，你站对地方了。准备好——开门的时候会很疯狂。",
                actionHint: "做好抢购准备",
                frequency: "common",
              },
            ],
            casualVersion: "Yep! Been here since like 4. The TV deals are gonna be crazy.",
            formalityVariants: {
              casual: "Yeah! Been waiting since 4. TV deals are gonna be nuts.",
              standard: "Yes, this is the line. I've been here since 4 AM. The TV deals are supposed to be amazing.",
              formal: "Indeed, this is the correct line. I arrived at 4 AM. The television promotions are expected to be exceptional.",
            },
          },
          {
            speaker: "you",
            textEn: "Wow, that's dedication! Do you know if they hand out tickets for the limited items?",
            textZh: "哇，真有毅力！你知道限量商品会不会发号码牌吗？",
            culturalNote: "部分商店会在开门前给排队者发 ticket/voucher，保证前 N 名能买到限量商品。",
            casualVersion: "Wow, hardcore! Do they give out tickets for the limited stuff?",
            commonMistake: {
              wrong: "Do they give number cards?",
              correct: "Do they hand out tickets for the limited items?",
              explanation: "'hand out tickets'是美国零售的标准说法，不说'number cards'。",
            },
            formalityVariants: {
              casual: "Dang, that's committed! They handing out tickets for the limited stuff?",
              standard: "That's dedication! Do you know if they hand out tickets for the limited items?",
              formal: "That is quite impressive! Would you happen to know whether they distribute vouchers for the limited-quantity items?",
            },
          },
          {
            speaker: "them",
            role: "排队的人",
            textEn: "Usually they do for the big-ticket items — like the 65-inch TV for $299. A store employee should come around soon.",
            textZh: "大件商品通常会发——比如那个299美元的65寸电视。应该很快就有店员过来了。",
            keyPhrases: [
              { en: "big-ticket items", zh: "大件/高价商品" },
              { en: "come around", zh: "过来/走过来" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yeah, for the really popular stuff they usually hand out vouchers. Someone should be out soon to do that.",
                textZh: "是的，特别热门的商品通常会发券。应该很快就有人出来发了。",
                actionHint: "等待店员发放号码",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah, usually for the big stuff — like that $299 TV. Someone should come out soon.",
            formalityVariants: {
              casual: "Yeah, for the big stuff they do. Someone'll be out soon.",
              standard: "Usually they do for the big-ticket items. A store employee should come around soon.",
              formal: "They typically do for the higher-value merchandise. A store representative should be circulating shortly.",
            },
          },
          {
            speaker: "you",
            textEn: "Great. I'm mainly here for the laptop deals. Are the prices only in-store, or can I get the same deals online?",
            textZh: "太好了。我主要是来看笔记本的折扣。这些价格只限店内，还是网上也有同样的优惠？",
            culturalNote: "很多商家的黑五价线上线下不同，部分 doorbuster 仅限实体店。",
            casualVersion: "Cool. I'm here for the laptop deals. Same prices online or just in-store?",
            commonMistake: {
              wrong: "Can I buy the same price on internet?",
              correct: "Can I get the same deals online?",
              explanation: "'get the same deals online'比'buy the same price on internet'自然得多。",
            },
            formalityVariants: {
              casual: "Nice. I want the laptop deals. Are these in-store only or online too?",
              standard: "I'm mainly here for the laptop deals. Are the prices only in-store, or can I get the same deals online?",
              formal: "My primary interest is in the laptop promotions. Would you know if these prices are exclusive to in-store purchases, or are they also available online?",
            },
          },
          {
            speaker: "them",
            role: "排队的人",
            textEn: "Some deals are in-store only, but a lot of them go live online at midnight. I'd check their app — they usually post the full ad scan a few days early.",
            textZh: "有些只限店内，但很多会在午夜上线。你可以看看他们的 App——通常会提前几天发完整的促销海报。",
            keyPhrases: [
              { en: "go live online", zh: "在网上上线" },
              { en: "ad scan", zh: "促销海报/广告扫描件" },
            ],
            alternativeExpressions: [
              {
                textEn: "It depends — some are in-store exclusives, but most go online too. Download the app to check.",
                textZh: "看情况——有些是店内独享，但大多数网上也有。下载 App 查一下。",
                actionHint: "下载商家 App 查看",
                frequency: "common",
              },
            ],
            casualVersion: "Some are in-store only, but lots go online at midnight. Check their app — the full ad usually leaks early.",
            formalityVariants: {
              casual: "Some are store-only, but most go online at midnight. Check the app.",
              standard: "Some deals are in-store only, but many go live online at midnight. I'd recommend checking their app.",
              formal: "Certain promotions are exclusive to in-store purchases; however, many become available online at midnight. I would suggest consulting their mobile application for the complete advertisement.",
            },
          },
        ],
      },
      // --- Flow 2: 黑五店内抢购 ---
      {
        id: "bf-in-store",
        titleZh: "店内抢购实战",
        titleEn: "In-Store Black Friday Rush",
        description: "进店后找商品、抢购、结账的实战流程",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm looking for the doorbuster laptop that's advertised at $399. Where can I find it?",
            textZh: "你好，我想找广告上399美元的特价笔记本电脑，在哪里？",
            culturalNote: "黑五进店后要迅速行动，热门商品可能几分钟内售罄。",
            casualVersion: "Hey, where's the $399 doorbuster laptop?",
            commonMistake: {
              wrong: "Where is the promotional computer?",
              correct: "Where can I find the doorbuster laptop that's advertised at $399?",
              explanation: "用 doorbuster + advertised at 更精确，promotional computer 太笼统。",
            },
            formalityVariants: {
              casual: "Hey, the $399 laptop deal — where's that at?",
              standard: "I'm looking for the doorbuster laptop advertised at $399. Where can I find it?",
              formal: "Good morning. I am interested in the doorbuster laptop currently advertised at $399. Could you direct me to its location?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "That one's flying off the shelves! Aisle 12, but hurry — we only have a few left. There's a limit of one per customer.",
            textZh: "那款卖得特别快！在12号通道，但要赶快——只剩几台了。每人限购一台。",
            keyPhrases: [
              { en: "flying off the shelves", zh: "卖得很快" },
              { en: "limit of one per customer", zh: "每人限购一台" },
            ],
            alternativeExpressions: [
              {
                textEn: "You'd better run — aisle 12, and they're almost gone. One per person!",
                textZh: "你最好快点——12号通道，快卖完了。每人一台！",
                actionHint: "尽快去抢购",
                frequency: "common",
              },
            ],
            casualVersion: "Oh man, those are going fast! Aisle 12, hurry! One per person.",
            formalityVariants: {
              casual: "Those are going super fast! Aisle 12, run! One per person.",
              standard: "That item is selling quickly. Aisle 12, but hurry — limited stock, one per customer.",
              formal: "That particular model is in extremely high demand. You will find it in aisle 12; however, I must inform you that quantities are very limited and there is a one-unit-per-customer restriction.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it, thanks! Also, can I stack the Black Friday price with my store credit card discount?",
            textZh: "知道了，谢谢！另外，黑五价格可以叠加商店信用卡的折扣吗？",
            culturalNote: "部分商家允许叠加（stack）信用卡折扣、会员折扣和促销价，这是省钱的关键技巧。",
            casualVersion: "Thanks! Can I use my store card discount on top of the Black Friday price?",
            commonMistake: {
              wrong: "Can I use two discounts together?",
              correct: "Can I stack the Black Friday price with my store credit card discount?",
              explanation: "'stack discounts'是美式购物的地道说法，表示折上折。",
            },
            formalityVariants: {
              casual: "Thanks! Can I stack my store card discount with this?",
              standard: "Can I stack the Black Friday price with my store credit card discount?",
              formal: "Thank you. I would like to inquire whether it is possible to combine the Black Friday pricing with the discount offered by my store credit card.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes! If you open a store card today, you get an extra 10% off on top of the sale price. Plus you'll get early access to Cyber Monday deals.",
            textZh: "可以！如果你今天开卡，可以在促销价基础上再打九折。而且还能提前进入网购星期一的促销。",
            keyPhrases: [
              { en: "on top of", zh: "在...基础上/额外" },
              { en: "early access", zh: "提前进入/优先购买" },
            ],
            alternativeExpressions: [
              {
                textEn: "Absolutely — store card holders get an extra 10% off everything today, including doorbusters.",
                textZh: "当然——今天持卡会员所有商品额外九折，包括开门特价。",
                actionHint: "考虑是否开卡",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah! Open a card today, extra 10% off. Plus early Cyber Monday access.",
            formalityVariants: {
              casual: "Yep! Open a card, get 10% more off. And early Cyber Monday access too.",
              standard: "Yes, opening a store card today gives you an extra 10% off the sale price, plus early Cyber Monday access.",
              formal: "Certainly. Should you choose to open a store credit card today, you would receive an additional 10 percent discount applied to the promotional pricing, along with priority access to our Cyber Monday offerings.",
            },
          },
          {
            speaker: "you",
            textEn: "That sounds great. One more thing — if the price drops further during Cyber Monday, can I get a price adjustment?",
            textZh: "听起来不错。还有一个问题——如果网购星期一价格更低，可以申请价格调整吗？",
            culturalNote: "很多美国零售商有 price adjustment（价格保护）政策，购买后一定天数内如降价可退差价。",
            casualVersion: "Nice! If it gets cheaper on Cyber Monday, can I get a price match?",
            commonMistake: {
              wrong: "Can I return the difference?",
              correct: "Can I get a price adjustment?",
              explanation: "'price adjustment'是零售行业标准用语，不说'return the difference'。",
            },
            formalityVariants: {
              casual: "Cool! If it drops more on Cyber Monday, can I get the difference back?",
              standard: "If the price drops further during Cyber Monday, can I get a price adjustment?",
              formal: "Should the price decrease further during the Cyber Monday event, would I be eligible for a price adjustment or retroactive discount?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Our price match window is 14 days from purchase. Just bring your receipt or pull it up in the app, and we'll refund the difference to your card.",
            textZh: "我们的价格保护期是购买后14天内。带上收据或在 App 里调出来，我们会把差价退到你的卡上。",
            keyPhrases: [
              { en: "price match window", zh: "价格保护期" },
              { en: "refund the difference", zh: "退还差价" },
            ],
            alternativeExpressions: [
              {
                textEn: "You have 14 days for a price adjustment. Keep your receipt and we can process it at customer service.",
                textZh: "你有14天的价格调整期。保留收据，到客服台办理就行。",
                actionHint: "保留收据以备价格调整",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah, 14-day window. Just bring your receipt or show it in the app — we'll refund the diff.",
            formalityVariants: {
              casual: "Yep, 14 days. Keep the receipt, show it in the app, and we'll give you the difference back.",
              standard: "Our price match window is 14 days. Bring your receipt or pull it up in the app, and we'll refund the difference.",
              formal: "Our price adjustment policy extends for 14 days from the date of purchase. Please retain your receipt or access it through our application, and we will process a refund for the price difference to your payment method.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 价格匹配 ====================
  // ==================== 使用优惠券 ====================
  {
    id: "shopping-coupon-use",
    tags: ["coupon", "优惠券", "discount code", "promo code", "stacking"],
    category: "shopping",
    titleZh: "使用优惠券",
    titleEn: "Using Coupons",
    description: "在结账时使用数字优惠券、纸质优惠券和叠加优惠的场景",
    otherRole: "收银员",
    otherRoleIcon: "ticket",
    flows: [
      // --- Flow 1: 基础优惠券使用 ---
      {
        id: "coupon-basic",
        titleZh: "基础优惠券使用",
        titleEn: "Basic Coupon Usage",
        description: "在结账时出示和使用各种类型的优惠券",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have a coupon for 20% off. Can I use it on this purchase?",
            textZh: "你好，我有一张八折优惠券。可以用在这次购买上吗？",
            culturalNote: "美国优惠券分数字（digital）和纸质（printout）两种，大多数商店都接受手机上的电子优惠券。",
            casualVersion: "Hey, I've got a 20% off coupon. Can I use it?",
            commonMistake: {
              wrong: "I have a discount ticket.",
              correct: "I have a coupon for 20% off.",
              explanation: "美国说 coupon，不说 discount ticket。",
            },
            formalityVariants: {
              casual: "Got a 20% off coupon — can I use it?",
              standard: "I have a coupon for 20% off. Can I use it on this purchase?",
              formal: "I have a coupon offering a 20 percent discount. Would I be able to apply it to this purchase?",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Sure! Is it a digital coupon or a paper one? If it's on your phone, I can scan the barcode.",
            textZh: "当然！是电子优惠券还是纸质的？如果在手机上，我可以扫条形码。",
            keyPhrases: [
              { en: "digital coupon", zh: "电子优惠券" },
              { en: "scan the barcode", zh: "扫条形码" },
            ],
            alternativeExpressions: [
              {
                textEn: "Of course! Just pull it up on your phone or hand me the printout.",
                textZh: "当然！在手机上打开或把纸质的给我就行。",
                actionHint: "出示优惠券",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah! Phone or paper? I can scan it either way.",
            formalityVariants: {
              casual: "Sure! On your phone or paper? I'll scan it.",
              standard: "Of course. Is it a digital coupon or a paper one? I can scan the barcode if it's on your phone.",
              formal: "Certainly. Is your coupon in digital format or a printed copy? If you have it on your mobile device, I can scan the barcode directly.",
            },
          },
          {
            speaker: "you",
            textEn: "It's on my phone. Here — let me pull up the barcode in the app.",
            textZh: "在手机上。等一下——我在 App 里打开条形码。",
            culturalNote: "很多美国零售商（Target、Walgreens 等）有自己的 App，优惠券会自动加载到会员账户。",
            casualVersion: "On my phone. Hang on, let me pull it up.",
            commonMistake: {
              wrong: "Wait, I will open my phone.",
              correct: "Let me pull up the barcode in the app.",
              explanation: "'pull up'是美式常用短语，表示在手机/电脑上打开。",
            },
            formalityVariants: {
              casual: "On my phone. One sec, pulling it up.",
              standard: "It's on my phone. Let me pull up the barcode in the app.",
              formal: "It is on my mobile device. Please allow me a moment to locate the barcode within the application.",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Got it — 20% off applied. Your total goes from $85 to $68. Would you like to pay by card or cash?",
            textZh: "好了——八折已应用。总价从85美元变成68美元。刷卡还是付现金？",
            keyPhrases: [
              { en: "applied", zh: "已应用/已生效" },
              { en: "pay by card or cash", zh: "刷卡还是付现金" },
            ],
            alternativeExpressions: [
              {
                textEn: "Perfect, the coupon took 20% off. Your new total is $68.",
                textZh: "好了，优惠券减了20%。你的新总价是68美元。",
                actionHint: "选择付款方式",
                frequency: "common",
              },
            ],
            casualVersion: "Done! 20% off — that brings it down to $68. Card or cash?",
            formalityVariants: {
              casual: "Boom, $68 now. Card or cash?",
              standard: "The 20% discount has been applied. Your total is $68. Card or cash?",
              formal: "The 20 percent discount has been successfully applied, reducing your total from $85 to $68. How would you prefer to settle the payment?",
            },
          },
          {
            speaker: "you",
            textEn: "Card, please. Oh wait — I also have a $10 off coupon I got in the mail. Can I use both?",
            textZh: "刷卡。等一下——我还有一张邮寄来的10美元优惠券。两张可以一起用吗？",
            culturalNote: "coupon stacking（叠加优惠券）在部分商店允许，但很多地方限制同时使用多张。",
            casualVersion: "Card. Oh, I also have a $10 one from the mail. Can I stack them?",
            commonMistake: {
              wrong: "Can I use two coupons at the same time?",
              correct: "Can I use both? / Can I stack them?",
              explanation: "'stack coupons'是美式购物的专业说法，表示叠加使用。",
            },
            formalityVariants: {
              casual: "Card. Oh, and I've got another one — $10 off from the mail. Can I stack 'em?",
              standard: "Card, please. I also have a $10 off coupon from the mail. Can I use both?",
              formal: "I will pay by card, thank you. Additionally, I have a $10 coupon that I received by mail. Is it possible to apply both coupons to this transaction?",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Let me check... The $10 one is a manufacturer's coupon, so yes — you can stack it with the store coupon. Your new total is $58!",
            textZh: "我看看...那张10美元的是厂家优惠券，所以可以——能跟商店优惠券叠加。你的新总价是58美元！",
            keyPhrases: [
              { en: "manufacturer's coupon", zh: "厂家优惠券" },
              { en: "store coupon", zh: "商店优惠券" },
            ],
            alternativeExpressions: [
              {
                textEn: "Good news — that's a manufacturer's coupon, so it stacks with the store discount. Total is now $58.",
                textZh: "好消息——那是厂家优惠券，可以和商店折扣叠加。总价现在是58美元。",
                actionHint: "享受叠加优惠",
                frequency: "common",
              },
            ],
            casualVersion: "Oh nice, that's a manufacturer coupon — it stacks! $58 total now!",
            formalityVariants: {
              casual: "Sweet, that's a manufacturer coupon — totally stacks! $58!",
              standard: "The $10 one is a manufacturer's coupon, so it stacks with the store coupon. Your new total is $58.",
              formal: "Upon review, the $10 coupon is a manufacturer's coupon, which is permitted to be applied in conjunction with our store coupon. Your revised total comes to $58.",
            },
          },
        ],
      },
      // --- Flow 2: 优惠券问题处理 ---
      {
        id: "coupon-issues",
        titleZh: "优惠券问题处理",
        titleEn: "Coupon Troubleshooting",
        description: "处理过期优惠券、不符合条件等问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I have this promo code from an email. It says SAVE30 — can you try entering it?",
            textZh: "我有一个邮件里的促销代码，是 SAVE30——你能试着输入一下吗？",
            culturalNote: "promo code / discount code / coupon code 在美国可以互换使用，通常在结账时输入。",
            casualVersion: "I got a promo code — SAVE30 — from an email. Can you try it?",
            commonMistake: {
              wrong: "I have a discount number SAVE30.",
              correct: "I have a promo code — SAVE30.",
              explanation: "'promo code'或'coupon code'是标准说法，不说'discount number'。",
            },
            formalityVariants: {
              casual: "Got a code from an email — SAVE30. Can you punch it in?",
              standard: "I have a promo code from an email — SAVE30. Can you try entering it?",
              formal: "I received a promotional code via email — SAVE30. Would you kindly attempt to apply it to my transaction?",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Let me try... Hmm, it's saying the code has expired. It looks like it was valid through last Sunday. Do you have any other coupons?",
            textZh: "我试试...嗯，显示代码已过期。看起来有效期到上周日。你还有别的优惠券吗？",
            keyPhrases: [
              { en: "expired", zh: "已过期" },
              { en: "valid through", zh: "有效期至" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sorry, that code expired last week. Got anything else I can try?",
                textZh: "抱歉，那个代码上周过期了。还有别的我可以试的吗？",
                actionHint: "检查是否有其他可用优惠",
                frequency: "common",
              },
            ],
            casualVersion: "Hmm, it's expired — good through last Sunday. Got any other codes?",
            formalityVariants: {
              casual: "Ah, that one's dead — expired Sunday. Anything else?",
              standard: "The code has expired. It was valid through last Sunday. Do you have any others?",
              formal: "I regret to inform you that this promotional code has expired. It appears to have been valid through last Sunday. Do you perhaps have an alternative coupon or code?",
            },
          },
          {
            speaker: "you",
            textEn: "Oh, that's a bummer. Is there any way to still honor it? It's only been a couple of days past the expiration.",
            textZh: "啊，真可惜。有没有办法通融一下？才过期几天而已。",
            culturalNote: "礼貌地请求通融有时能奏效，特别是在非连锁的小店。但大型连锁店通常无法通融。",
            casualVersion: "Aw man. Any chance you could still take it? It just expired like two days ago.",
            commonMistake: {
              wrong: "Can you make an exception for me?",
              correct: "Is there any way to still honor it?",
              explanation: "'honor a coupon'是零售场景的地道表达，比'make an exception'更具体。",
            },
            formalityVariants: {
              casual: "Ugh. Can you still take it? It literally just expired.",
              standard: "Is there any way to still honor it? It's only a couple of days past expiration.",
              formal: "That is unfortunate. Would there be any possibility of honoring the code given that it has only recently expired?",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "I can't override expired codes, but let me check if there's a current promotion... Actually, we have a 15% off app-only coupon running right now. Want me to help you find it?",
            textZh: "我没办法覆盖过期的代码，但我看看有没有当前的促销...其实我们现在有一个仅限 App 的八五折优惠券。需要我帮你找吗？",
            keyPhrases: [
              { en: "override", zh: "覆盖/强制使用" },
              { en: "app-only coupon", zh: "仅限 App 的优惠券" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sorry, expired codes are locked in the system. But check the app — there might be a current deal you can use.",
                textZh: "抱歉，过期代码在系统里被锁了。但你看看 App——可能有当前可用的优惠。",
                actionHint: "打开商店 App 查看优惠",
                frequency: "common",
              },
            ],
            casualVersion: "Can't do expired ones, sorry. But we've got a 15% off coupon in the app right now. Wanna grab that?",
            formalityVariants: {
              casual: "Can't take expired ones. But hey, there's 15% off in the app right now!",
              standard: "I can't override expired codes, but there's a current 15% off coupon in the app. Want me to help you find it?",
              formal: "Unfortunately, I am unable to override expired promotional codes in our system. However, I can inform you that there is a current 15 percent discount coupon available exclusively through our mobile application. May I assist you in locating it?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please! I already have the app. Where would I find it — under \"My Coupons\" or somewhere else?",
            textZh: "好的，麻烦了！我已经装了 App。在哪里找——在「我的优惠券」下面还是其他地方？",
            culturalNote: "美国零售 App 的优惠券通常需要主动 clip（领取）才会生效，不会自动应用。",
            casualVersion: "Yeah! I have the app. Where is it — My Coupons?",
            commonMistake: {
              wrong: "Where can I find the coupon in the software?",
              correct: "Where would I find it — under 'My Coupons'?",
              explanation: "美国人说 app，不说 software；用 'where would I find it' 更自然。",
            },
            formalityVariants: {
              casual: "Sure! Got the app. Where's it at?",
              standard: "Yes, please. I have the app. Where would I find the coupon?",
              formal: "Yes, that would be helpful. I have the application installed. Could you direct me to the location of the coupon within the app?",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Go to the 'Deals' tab, then tap 'Clip All.' The 15% off should be there. Once you clip it, it'll automatically apply at checkout when I scan your loyalty card.",
            textZh: "打开'Deals'标签，然后点'全部领取'。那个八五折应该在里面。领取后，我扫你的会员卡时会自动应用。",
            keyPhrases: [
              { en: "clip", zh: "领取/剪下（优惠券）" },
              { en: "loyalty card", zh: "会员卡" },
            ],
            alternativeExpressions: [
              {
                textEn: "Look under 'Deals,' clip the 15% coupon, and it'll show up automatically when I scan your card.",
                textZh: "在'Deals'里找到八五折优惠券，领取后扫卡自动生效。",
                actionHint: "在 App 中领取优惠券",
                frequency: "common",
              },
            ],
            casualVersion: "Hit 'Deals,' then 'Clip All.' The 15% one should pop up. Then it auto-applies when I scan your card.",
            formalityVariants: {
              casual: "Go to Deals, clip it, and it auto-applies when I scan you.",
              standard: "Go to the Deals tab, clip the 15% coupon, and it will apply automatically at checkout.",
              formal: "Please navigate to the 'Deals' section within the application and select 'Clip All.' The 15 percent discount should be available there. Once clipped, it will be applied automatically when your loyalty card is scanned at checkout.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 会员卡 ====================
  {
    id: "shopping-membership-card",
    tags: ["membership", "会员卡", "Costco", "Sam's Club", "rewards"],
    category: "shopping",
    titleZh: "会员卡购物",
    titleEn: "Membership Card Shopping",
    description: "在 Costco、Sam's Club 等仓储会员店购物，使用会员卡和积分的场景",
    otherRole: "店员",
    otherRoleIcon: "id-card",
    flows: [
      // --- Flow 1: 基础会员购物 ---
      {
        id: "membership-basic",
        titleZh: "仓储会员店购物",
        titleEn: "Warehouse Club Shopping",
        description: "在仓储会员店出示会员卡、了解会员权益的基本流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm visiting from out of town. My friend has a Costco membership — can I shop with their card?",
            textZh: "你好，我是外地来的。我朋友有 Costco 会员卡——我可以用他的卡购物吗？",
            culturalNote: "Costco 会员卡不可转借，必须本人持卡，但可以带一位非会员同行。",
            casualVersion: "Hey, can I use my friend's Costco card to shop?",
            commonMistake: {
              wrong: "Can I borrow my friend's member card?",
              correct: "Can I shop with my friend's membership card?",
              explanation: "'membership card'比'member card'更标准；'shop with'比'borrow...to shop'更地道。",
            },
            formalityVariants: {
              casual: "Can I use my buddy's Costco card?",
              standard: "My friend has a Costco membership. Can I shop with their card?",
              formal: "I am visiting from out of town and my friend holds a Costco membership. Would it be permissible for me to make purchases using their membership card?",
            },
          },
          {
            speaker: "them",
            role: "门口检查员",
            textEn: "Actually, the membership card is non-transferable — only the cardholder can use it. But your friend can bring you as a guest! They'd just need to be here with you.",
            textZh: "其实会员卡是不可转让的——只有持卡人本人能用。但你朋友可以带你作为客人进来！他只需要跟你一起来。",
            keyPhrases: [
              { en: "non-transferable", zh: "不可转让的" },
              { en: "as a guest", zh: "作为客人" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sorry, only the member can use their card, but they can bring you as a guest if they come along.",
                textZh: "抱歉，只有会员本人能用卡，但如果他们一起来的话可以带你进去。",
                actionHint: "联系朋友一起来",
                frequency: "common",
              },
            ],
            casualVersion: "Can't use someone else's card, sorry. But if your friend comes with you, you can shop as their guest.",
            formalityVariants: {
              casual: "Nah, can't use someone else's. But bring your friend and you can be their guest.",
              standard: "The card is non-transferable. But your friend can bring you as a guest.",
              formal: "I'm afraid the membership card is non-transferable and may only be used by the registered cardholder. However, your friend is welcome to accompany you and bring you in as a guest.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. If I wanted to sign up for my own membership, how much is it and what do I get?",
            textZh: "明白了。如果我想办自己的会员卡，多少钱？有什么权益？",
            culturalNote: "Costco 有两档会员：Gold Star（$65/年）和 Executive（$130/年，有2%返现）。",
            casualVersion: "Okay. How much to sign up? What do I get?",
            commonMistake: {
              wrong: "How much is the annual fee to become a member?",
              correct: "How much is a membership and what do I get?",
              explanation: "直接问'how much is a membership'更口语化，不需要说'annual fee to become a member'。",
            },
            formalityVariants: {
              casual: "What's it cost to get my own card? What's included?",
              standard: "How much is a membership, and what benefits do I get?",
              formal: "Could you inform me of the membership fees and the associated benefits?",
            },
          },
          {
            speaker: "them",
            role: "会员服务台",
            textEn: "Our Gold Star membership is $65 a year. If you upgrade to Executive for $130, you get 2% back on all purchases — most members easily make that back.",
            textZh: "我们的金星会员年费65美元。如果升级到行政会员130美元，所有购物可获2%返现——大多数会员轻松赚回来。",
            keyPhrases: [
              { en: "2% back on all purchases", zh: "所有购物2%返现" },
              { en: "make that back", zh: "赚回来/回本" },
            ],
            alternativeExpressions: [
              {
                textEn: "It's $65 for the basic Gold Star, or $130 for Executive with 2% cash back on everything. The Executive pays for itself if you shop regularly.",
                textZh: "基础金星会员65美元，行政会员130美元，所有消费2%返现。如果经常来的话，行政会员很快就回本了。",
                actionHint: "考虑哪个档位",
                frequency: "common",
              },
            ],
            casualVersion: "Gold Star's $65 a year. Executive's $130 but you get 2% back on everything — most people make it back easy.",
            formalityVariants: {
              casual: "$65 basic, $130 for Executive with 2% back. Executive usually pays for itself.",
              standard: "Gold Star is $65 per year. Executive is $130 with 2% back on all purchases.",
              formal: "Our Gold Star membership is priced at $65 annually. The Executive membership is $130 per year and includes a 2 percent reward on all qualifying purchases, which many of our members find offsets the additional cost.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll go with the Gold Star for now. Can I add a household member to my card?",
            textZh: "我先办金星会员吧。可以在我的卡上加一个家庭成员吗？",
            culturalNote: "Costco 会员卡可以免费添加一张家庭副卡（household card），给同住的家人使用。",
            casualVersion: "I'll do the Gold Star. Can I add a family member to it?",
            commonMistake: {
              wrong: "Can I add a sub-card for my family?",
              correct: "Can I add a household member to my card?",
              explanation: "'household member/card'是 Costco 的标准说法，不说'sub-card'。",
            },
            formalityVariants: {
              casual: "I'll take the basic one. Can my wife get a card too?",
              standard: "I'll go with the Gold Star. Can I add a household member?",
              formal: "I would like to proceed with the Gold Star membership. Is it possible to add a household member to my account?",
            },
          },
          {
            speaker: "them",
            role: "会员服务台",
            textEn: "Absolutely! Each membership includes one free household card for someone living at the same address. They'll get their own card with their photo. I just need their ID.",
            textZh: "当然可以！每个会员可以免费添加一张家庭副卡，限同住地址的人。他们会拿到自己带照片的卡。我只需要他们的身份证件。",
            keyPhrases: [
              { en: "household card", zh: "家庭副卡" },
              { en: "same address", zh: "同一地址" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yes! You get one free household card included. They just need to come in with a valid ID and proof of same address.",
                textZh: "可以！包含一张免费家庭副卡。他们只需带有效证件和同住地址证明来。",
                actionHint: "准备家庭成员的证件",
                frequency: "common",
              },
            ],
            casualVersion: "Yep! One free household card — same address. Just need their ID to set it up.",
            formalityVariants: {
              casual: "For sure! Free household card, same address. Just bring their ID.",
              standard: "Each membership includes a free household card for someone at the same address. We just need their ID.",
              formal: "Certainly. Each membership entitles you to one complimentary household card for an individual residing at the same address. We will require their valid identification to process the card.",
            },
          },
        ],
      },
      // --- Flow 2: 会员积分与退货 ---
      {
        id: "membership-rewards",
        titleZh: "会员积分与退货",
        titleEn: "Rewards & Returns at Warehouse Clubs",
        description: "使用会员积分、了解退货政策和会员续费",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'm checking out. The cashier at my last visit mentioned I have a rewards check — how do I use it?",
            textZh: "我要结账。上次来的时候收银员提到我有一张返现支票——怎么用？",
            culturalNote: "Costco Executive 会员每年会收到一张 rewards check（返现支票），可以在结账时当现金使用。",
            casualVersion: "Hey, I've got a rewards check apparently. How do I use it?",
            commonMistake: {
              wrong: "I have a reward money, how to use?",
              correct: "I have a rewards check — how do I use it?",
              explanation: "'rewards check'是 Costco 的专用术语，不说'reward money'。",
            },
            formalityVariants: {
              casual: "So I've got this rewards check thing. How does it work?",
              standard: "I was told I have a rewards check. How do I use it?",
              formal: "I was informed during my previous visit that I have accrued a rewards check. Could you explain how to redeem it?",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Great! Your rewards check is like cash — just hand it to me and I'll apply it to your total. Yours is $47.50 this year. Want to use it today?",
            textZh: "太好了！返现支票等于现金——递给我就行，我会从总价里扣。你今年有47.50美元。今天要用吗？",
            keyPhrases: [
              { en: "like cash", zh: "等同于现金" },
              { en: "apply it to your total", zh: "从总价里扣除" },
            ],
            alternativeExpressions: [
              {
                textEn: "Just bring it in and hand it over at checkout. It works like a gift card — we deduct it from your total.",
                textZh: "带过来在结账时交给收银员就行。跟礼品卡一样——我们从总价里扣。",
                actionHint: "出示返现支票",
                frequency: "common",
              },
            ],
            casualVersion: "It's basically cash! Give it to me and I'll take it off your total. You've got $47.50. Using it now?",
            formalityVariants: {
              casual: "It's cash basically. Hand it over and I'll knock it off your total. $47.50!",
              standard: "Your rewards check works like cash. I'll apply the $47.50 to your total if you'd like.",
              formal: "Your rewards check functions as a cash equivalent. I will be happy to apply the $47.50 balance toward your purchase total today.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please! Also, I bought a TV here three months ago and it's not working right. What's your return policy on electronics?",
            textZh: "好的，用掉吧！另外，三个月前在这里买的电视出问题了。你们电子产品的退货政策是什么？",
            culturalNote: "Costco 大多数商品可以随时无理由退货，但电子产品限90天。这在美国零售中非常慷慨。",
            casualVersion: "Yeah, use it! Oh, and I need to return a TV I got three months ago. What's the return policy?",
            commonMistake: {
              wrong: "Can I change this TV that is broken?",
              correct: "I need to return a TV that's not working right. What's the return policy?",
              explanation: "'return'是退货的标准用语，不说'change'；'not working right'比'broken'更准确描述故障。",
            },
            formalityVariants: {
              casual: "Use it! Also — the TV I got 3 months back isn't working. Can I return it?",
              standard: "I bought a TV three months ago and it's not working right. What's the return policy on electronics?",
              formal: "I purchased a television approximately three months ago and it appears to be malfunctioning. Could you kindly inform me of the return policy for electronic items?",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Electronics have a 90-day return window, so you're still within the period. Just bring the TV and your receipt — or we can look it up with your membership card. Head to the returns counter.",
            textZh: "电子产品有90天退货期，你还在有效期内。带上电视和收据来——或者我们可以用会员卡查记录。去退货柜台就行。",
            keyPhrases: [
              { en: "90-day return window", zh: "90天退货期" },
              { en: "returns counter", zh: "退货柜台" },
            ],
            alternativeExpressions: [
              {
                textEn: "You're still within the 90-day window for electronics. Bring it in with the receipt or we can pull up the purchase history on your card.",
                textZh: "你还在电子产品90天退货期内。带来退，或者我们用你的卡查购买记录。",
                actionHint: "前往退货柜台",
                frequency: "common",
              },
            ],
            casualVersion: "Electronics are 90 days, so you're good. Bring the TV and receipt, or we can look it up on your card. Go to returns.",
            formalityVariants: {
              casual: "90 days for electronics — you're fine. Just bring it in. Returns desk can handle it.",
              standard: "Electronics have a 90-day window and you're still within it. Head to the returns counter with your receipt.",
              formal: "Our electronics return policy provides a 90-day window from the date of purchase, and you are still within that timeframe. Please proceed to the returns counter with the item and your receipt, or we can retrieve the transaction using your membership card.",
            },
          },
          {
            speaker: "you",
            textEn: "Good to know. By the way, my membership is expiring next month. Can I renew it right here at the register?",
            textZh: "太好了。对了，我的会员下个月到期。可以在收银台这里直接续费吗？",
            culturalNote: "Costco 会员可以在任何收银台、会员服务台或网上续费，也可以设置自动续费。",
            casualVersion: "Oh, my membership expires next month. Can I renew here?",
            commonMistake: {
              wrong: "My card will finish next month.",
              correct: "My membership is expiring next month.",
              explanation: "'membership is expiring'比'card will finish'更准确地表达会员到期。",
            },
            formalityVariants: {
              casual: "Oh yeah, my card's up next month. Can I just renew here?",
              standard: "My membership expires next month. Can I renew at the register?",
              formal: "I should mention that my membership is due for renewal next month. Is it possible to process the renewal at this register?",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "You sure can! I can add the renewal to today's transaction. It'll be $65 for another year. Or if you want to upgrade to Executive, it's $130 with the 2% reward. Want me to go ahead?",
            textZh: "当然可以！我可以把续费加到今天的交易里。再续一年65美元。如果想升级到行政会员，130美元含2%返现。需要我办理吗？",
            keyPhrases: [
              { en: "add to today's transaction", zh: "加到今天的交易里" },
              { en: "upgrade to", zh: "升级到" },
            ],
            alternativeExpressions: [
              {
                textEn: "Absolutely — I'll just tack it onto your purchase today. $65 for Gold Star, $130 for Executive.",
                textZh: "没问题——我直接加到你今天的消费里。金星65美元，行政130美元。",
                actionHint: "选择续费等级",
                frequency: "common",
              },
            ],
            casualVersion: "Yep! I can throw it on this transaction. $65 for Gold Star, $130 for Executive with 2% back. Want me to do it?",
            formalityVariants: {
              casual: "Sure! I'll add it to this bill. $65 basic or $130 Executive. What do you want?",
              standard: "I can add the renewal to today's transaction. $65 for Gold Star, or $130 to upgrade to Executive.",
              formal: "Certainly. I can process the renewal as part of today's transaction. The Gold Star renewal is $65, or you may upgrade to Executive membership at $130, which includes the 2 percent annual reward. Shall I proceed?",
            },
          },
        ],
      },
    ],
  },

  // ==================== 线上买线下取(BOPIS) ====================
  {
    id: "shopping-bopis",
    tags: ["BOPIS", "线上买线下取", "curbside", "order pickup"],
    category: "shopping",
    titleZh: "线上买线下取",
    titleEn: "Buy Online, Pick Up In Store (BOPIS)",
    description: "在线下单后到店取货，包括取货流程和问题处理",
    otherRole: "取货区店员",
    otherRoleIcon: "package-check",
    flows: [
      // --- Flow 1: 基础取货 ---
      {
        id: "bopis-basic",
        titleZh: "到店取货",
        titleEn: "Standard Store Pickup",
        description: "到店取网上下的订单，出示确认信息和身份验证",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm here to pick up an online order. I got a confirmation email saying it's ready.",
            textZh: "你好，我来取网上下的订单。收到确认邮件说已经准备好了。",
            culturalNote: "BOPIS（Buy Online Pick up In Store）在美国非常普遍，Target、Walmart、Home Depot 等都提供此服务。",
            casualVersion: "Hey, picking up an online order. Got the ready email.",
            commonMistake: {
              wrong: "I want to take my internet order.",
              correct: "I'm here to pick up an online order.",
              explanation: "'pick up an online order'是标准表达，不说'take my internet order'。",
            },
            formalityVariants: {
              casual: "Here for an online pickup. Got the email that it's ready.",
              standard: "I'm here to pick up an online order. I received the confirmation email.",
              formal: "Good afternoon. I am here to collect an order that I placed online. I have received a confirmation email indicating that it is ready for pickup.",
            },
          },
          {
            speaker: "them",
            role: "取货区店员",
            textEn: "Welcome! Can I see your order confirmation? I'll need the order number or the QR code from the email. Also, a photo ID please.",
            textZh: "欢迎！能看一下你的订单确认信息吗？我需要订单号或邮件里的二维码。另外请出示带照片的证件。",
            keyPhrases: [
              { en: "order confirmation", zh: "订单确认" },
              { en: "photo ID", zh: "带照片的证件" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure! Pull up the confirmation email and have your ID ready. I'll grab your order.",
                textZh: "好的！打开确认邮件，准备好证件。我去拿你的订单。",
                actionHint: "出示确认邮件和证件",
                frequency: "common",
              },
            ],
            casualVersion: "Hey! Got the order number or QR code? And I'll need an ID.",
            formalityVariants: {
              casual: "Hey! Order number or QR code? And ID, please.",
              standard: "Can I see your order confirmation and a photo ID?",
              formal: "Welcome. May I please see your order confirmation — either the order number or the QR code — along with a valid photo identification?",
            },
          },
          {
            speaker: "you",
            textEn: "Sure, here's the QR code on my phone, and here's my driver's license.",
            textZh: "好的，这是手机上的二维码，这是我的驾照。",
            culturalNote: "美国取货通常需要出示带照片的证件（驾照或护照），确认是本人取货。",
            casualVersion: "Here's the QR code and my license.",
            commonMistake: {
              wrong: "Here is my code and my ID card.",
              correct: "Here's the QR code and my driver's license.",
              explanation: "美国最常用的证件是 driver's license，不常说 ID card。",
            },
            formalityVariants: {
              casual: "QR code and license, right here.",
              standard: "Here's the QR code on my phone and my driver's license.",
              formal: "Here is the QR code displayed on my device, and this is my driver's license for identification purposes.",
            },
          },
          {
            speaker: "them",
            role: "取货区店员",
            textEn: "Perfect, I see your order — two items. Let me grab them from the back. It'll just be a minute.",
            textZh: "好的，看到你的订单了——两件商品。我去后面拿一下，稍等一分钟。",
            keyPhrases: [
              { en: "grab them from the back", zh: "从后面拿" },
              { en: "just be a minute", zh: "稍等一会" },
            ],
            alternativeExpressions: [
              {
                textEn: "Found it! Two items. Give me one second to pull them from the holding area.",
                textZh: "找到了！两件东西。等我一下，从存放区拿出来。",
                actionHint: "等待店员取货",
                frequency: "common",
              },
            ],
            casualVersion: "Got it — two things. One sec, I'll go grab 'em.",
            formalityVariants: {
              casual: "Found it — two items. Be right back.",
              standard: "I see your order. Let me grab the two items from the back.",
              formal: "I have located your order containing two items. Please allow me a moment to retrieve them from our storage area.",
            },
          },
          {
            speaker: "you",
            textEn: "Thanks! Can I check the items before I leave, just to make sure everything's right?",
            textZh: "谢谢！我走之前可以检查一下商品吗，确保没问题？",
            culturalNote: "取货时当场检查是好习惯，特别是电子产品或易碎品，离店后再发现问题处理更麻烦。",
            casualVersion: "Thanks! Mind if I check the stuff before I go?",
            commonMistake: {
              wrong: "Can I open and see the products?",
              correct: "Can I check the items before I leave?",
              explanation: "'check the items'比'open and see the products'更自然简洁。",
            },
            formalityVariants: {
              casual: "Can I take a quick look before heading out?",
              standard: "Can I check the items before I leave, to make sure everything's correct?",
              formal: "Would it be possible to inspect the items prior to departing, to confirm that everything is in order?",
            },
          },
          {
            speaker: "them",
            role: "取货区店员",
            textEn: "Of course! Take your time. If anything's wrong or missing, we can take care of it right here. Just sign on this screen to confirm pickup.",
            textZh: "当然！慢慢看。如果有问题或少了什么，我们可以当场处理。检查完在这个屏幕上签个字确认取货就行。",
            keyPhrases: [
              { en: "take care of it", zh: "处理/解决" },
              { en: "sign to confirm pickup", zh: "签字确认取货" },
            ],
            alternativeExpressions: [
              {
                textEn: "Go ahead and open everything. If something's off, we'll fix it right away. Then just sign the screen.",
                textZh: "尽管拆开看。有问题我们马上处理。然后在屏幕上签字就行。",
                actionHint: "检查商品并签字确认",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah, go for it! If anything's off, we'll handle it. Just sign the screen when you're good.",
            formalityVariants: {
              casual: "Sure! Check it all. If something's wrong, I'll fix it. Sign here when ready.",
              standard: "Of course. If anything's wrong, we'll handle it. Just sign the screen to confirm.",
              formal: "Absolutely, please take your time inspecting the items. Should there be any discrepancies, we will address them immediately. Once satisfied, please sign the digital screen to confirm receipt of your order.",
            },
          },
        ],
      },
      // --- Flow 2: 路边取货与问题处理 ---
      {
        id: "bopis-curbside",
        titleZh: "路边取货与订单问题",
        titleEn: "Curbside Pickup & Order Issues",
        description: "使用路边取货服务和处理订单缺货等问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'm in the parking lot for my curbside pickup. I checked in on the app. Spot number 7.",
            textZh: "我在停车场等路边取货。已经在 App 上签到了，7号车位。",
            culturalNote: "curbside pickup（路边取货）疫情后在美国非常流行，通常需要在 App 上签到并告知车位号和车辆颜色。",
            casualVersion: "I'm here for curbside. Checked in on the app, spot 7.",
            commonMistake: {
              wrong: "I am waiting in the parking for my delivery.",
              correct: "I'm in the parking lot for my curbside pickup.",
              explanation: "'curbside pickup'不是 delivery，是你到停车场取货；说'parking lot'而非'parking'。",
            },
            formalityVariants: {
              casual: "Hey, I'm here — spot 7. Checked in already.",
              standard: "I'm in the parking lot for curbside pickup. I've checked in on the app, spot 7.",
              formal: "I have arrived for my curbside pickup order and have completed the check-in process through the application. I am located in parking spot number 7.",
            },
          },
          {
            speaker: "them",
            role: "取货区店员",
            textEn: "Got it! I can see your check-in. Can you confirm your vehicle color and model? I'll be out with your order in about 5 minutes.",
            textZh: "收到！我看到你的签到了。能确认一下你的车辆颜色和型号吗？大概5分钟后送出来。",
            keyPhrases: [
              { en: "check-in", zh: "签到" },
              { en: "vehicle color and model", zh: "车辆颜色和型号" },
            ],
            alternativeExpressions: [
              {
                textEn: "I see you in the system! What kind of car and color? I'll bring your order right out.",
                textZh: "在系统里看到你了！什么车什么颜色？我马上把你的订单送出去。",
                actionHint: "描述自己的车辆",
                frequency: "common",
              },
            ],
            casualVersion: "Got you! What's your car look like? I'll be out in like 5.",
            formalityVariants: {
              casual: "See you in the system! What car are you in? Be out in 5.",
              standard: "I see your check-in. Can you confirm your vehicle? I'll be out in about 5 minutes.",
              formal: "I have received your check-in notification. For verification purposes, could you please confirm the color and model of your vehicle? I will bring your order out within approximately 5 minutes.",
            },
          },
          {
            speaker: "you",
            textEn: "Silver Honda Civic. Oh, and I got a notification that one item is out of stock. What happens with that?",
            textZh: "银色本田思域。对了，我收到通知说有一件商品缺货了。那怎么处理？",
            culturalNote: "BOPIS 下单后如果某件商品缺货，商店通常会自动退款该商品或提供替代品。",
            casualVersion: "Silver Honda Civic. Hey, one thing's out of stock apparently. What happens?",
            commonMistake: {
              wrong: "One product is sold out. What should I do?",
              correct: "One item is out of stock. What happens with that?",
              explanation: "'out of stock'比'sold out'更适合这个场景（sold out 常指热门商品售罄）。",
            },
            formalityVariants: {
              casual: "Silver Civic. One thing's showing out of stock though — what's the deal?",
              standard: "Silver Honda Civic. I also got a notification that one item is out of stock. What happens?",
              formal: "I am in a silver Honda Civic. I should mention that I received a notification indicating one item in my order is currently out of stock. How will that be handled?",
            },
          },
          {
            speaker: "them",
            role: "取货区店员",
            textEn: "Sorry about that! We've already refunded the out-of-stock item to your card. We do have a similar item in stock — would you like us to substitute it, or just take the refund?",
            textZh: "很抱歉！缺货商品已经退款到你的卡上了。我们有一个类似的替代品——你想替换还是直接拿退款？",
            keyPhrases: [
              { en: "refunded", zh: "已退款" },
              { en: "substitute", zh: "替代品/替换" },
            ],
            alternativeExpressions: [
              {
                textEn: "We processed a refund for the unavailable item. We can offer a substitute if you're interested, or you can keep the refund.",
                textZh: "我们已经为缺货商品办理了退款。如果你感兴趣，我们可以提供替代品，或者你直接拿退款。",
                actionHint: "选择替代品或退款",
                frequency: "common",
              },
            ],
            casualVersion: "Sorry! Already refunded that one. We've got something similar though — want a sub, or just the refund?",
            formalityVariants: {
              casual: "My bad! Refund's already done. Want a substitute or just keep the money back?",
              standard: "Sorry about that. We refunded the item. Would you like a substitute or prefer the refund?",
              formal: "My apologies for the inconvenience. We have already processed a refund for the out-of-stock item to your original payment method. We do have a comparable substitute available — would you prefer that, or would you like to proceed with the refund?",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take the refund, thanks. Can I still return the other items if they don't work out? Same return policy as in-store purchases?",
            textZh: "我就拿退款吧，谢谢。如果其他商品不合适，还能退吗？跟店内购买一样的退货政策吗？",
            culturalNote: "大多数美国零售商对 BOPIS 订单适用与店内购买相同的退货政策，可以直接到店退。",
            casualVersion: "Just the refund. Can I still return the other stuff? Same return rules as buying in-store?",
            commonMistake: {
              wrong: "Is the return rule same as buying in shop?",
              correct: "Same return policy as in-store purchases?",
              explanation: "'return policy'和'in-store purchases'是标准零售用语。",
            },
            formalityVariants: {
              casual: "I'll take the refund. Can I return the other things if needed? Same rules?",
              standard: "I'll take the refund. Same return policy as in-store purchases for the rest?",
              formal: "I will proceed with the refund, thank you. Should the remaining items not meet my expectations, is the return policy consistent with that of in-store purchases?",
            },
          },
          {
            speaker: "them",
            role: "取货区店员",
            textEn: "Yep, same 30-day return policy! Just bring the items and your receipt or order confirmation to any store. You can also start a return online and drop it off. Here's your order — have a great day!",
            textZh: "是的，一样的30天退货政策！带上商品和收据或订单确认到任何门店就行。也可以在网上发起退货再到店寄存。这是你的订单——祝你愉快！",
            keyPhrases: [
              { en: "start a return online", zh: "在网上发起退货" },
              { en: "drop it off", zh: "送到/寄存" },
            ],
            alternativeExpressions: [
              {
                textEn: "Same return rules — 30 days. You can return in-store or start it online. Enjoy!",
                textZh: "退货规则一样——30天内。可以到店退或者网上发起退货。祝好！",
                actionHint: "保存订单确认以备退货",
                frequency: "common",
              },
            ],
            casualVersion: "Same deal — 30 days. Return in-store or start it online. Here you go, have a good one!",
            formalityVariants: {
              casual: "Yep, 30 days, same as always. Return at any store or start online. Here's your stuff!",
              standard: "Same 30-day return policy. Bring items to any store or start a return online. Here's your order!",
              formal: "The same 30-day return policy applies. You may return items to any of our store locations with your receipt, or initiate the return process online for a convenient drop-off. Here is your order. Have a wonderful day.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 礼物清单 ====================
  {
    id: "shopping-gift-registry",
    tags: ["gift registry", "礼物清单", "wedding", "baby shower", "wish list"],
    category: "shopping",
    titleZh: "礼物清单",
    titleEn: "Gift Registry",
    description: "为婚礼或宝宝派对从礼物清单中选购礼物的场景",
    otherRole: "店员",
    otherRoleIcon: "gift",
    flows: [
      // --- Flow 1: 基础礼物清单购物 ---
      {
        id: "registry-basic",
        titleZh: "从礼物清单选购",
        titleEn: "Shopping from a Gift Registry",
        description: "查找朋友的礼物清单并选购礼物的基本流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, my friend is getting married and she has a wedding registry here. Can you help me find it?",
            textZh: "你好，我朋友要结婚了，她在你们这里建了一个婚礼礼物清单。能帮我找到吗？",
            culturalNote: "wedding registry 是美国婚礼传统，新人在商店建立心愿清单，亲友从中选购礼物，避免重复。",
            casualVersion: "Hey, my friend has a wedding registry here. Can you look it up?",
            commonMistake: {
              wrong: "My friend made a gift list for wedding.",
              correct: "My friend has a wedding registry here.",
              explanation: "'wedding registry'是专用术语，不说'gift list for wedding'。",
            },
            formalityVariants: {
              casual: "My friend's got a wedding registry here. Can you find it?",
              standard: "My friend has a wedding registry here. Can you help me find it?",
              formal: "A friend of mine is getting married and has established a wedding registry at your store. Would you be able to assist me in locating it?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Of course! I can look it up by the couple's name. What's the bride's or groom's last name?",
            textZh: "当然！我可以用新人的名字查。新娘或新郎的姓是什么？",
            keyPhrases: [
              { en: "look it up", zh: "查找" },
              { en: "the couple's name", zh: "新人的名字" },
            ],
            alternativeExpressions: [
              {
                textEn: "Absolutely! Just give me the name of the bride or groom and I'll pull up their registry.",
                textZh: "没问题！告诉我新娘或新郎的名字，我帮你调出来。",
                actionHint: "提供新人姓名",
                frequency: "common",
              },
            ],
            casualVersion: "Sure! What's their last name? I'll pull it up.",
            formalityVariants: {
              casual: "Yeah! Last name? I'll look it up.",
              standard: "Of course. What's the bride's or groom's last name?",
              formal: "Certainly. I would be happy to assist. Could you provide me with the surname of either the bride or the groom?",
            },
          },
          {
            speaker: "you",
            textEn: "The bride's name is Sarah Johnson. The wedding is in June.",
            textZh: "新娘叫 Sarah Johnson，婚礼在六月。",
            culturalNote: "提供婚礼日期有助于店员更快找到正确的清单，因为可能有同名的人。",
            casualVersion: "Bride's Sarah Johnson. Wedding's in June.",
            commonMistake: {
              wrong: "The bride name is Sarah.",
              correct: "The bride's name is Sarah Johnson.",
              explanation: "用所有格'bride's name'更自然，且提供全名更便于查找。",
            },
            formalityVariants: {
              casual: "Sarah Johnson — June wedding.",
              standard: "The bride's name is Sarah Johnson. The wedding is in June.",
              formal: "The bride's name is Sarah Johnson, and the wedding is scheduled for June.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Found it! Sarah and Michael Johnson — June 15th. They have 47 items on their registry. Would you like to browse the list, or did you have a budget in mind?",
            textZh: "找到了！Sarah 和 Michael Johnson——6月15号。清单上有47件商品。你想浏览清单，还是有预算范围？",
            keyPhrases: [
              { en: "browse the list", zh: "浏览清单" },
              { en: "budget in mind", zh: "预算范围" },
            ],
            alternativeExpressions: [
              {
                textEn: "Here it is! They've got quite a few items. Want me to filter by price range?",
                textZh: "在这里！他们列了不少东西。要我按价格范围筛选吗？",
                actionHint: "告诉店员预算",
                frequency: "common",
              },
            ],
            casualVersion: "Got it! Sarah and Michael — June 15th. 47 items. Wanna browse, or do you know your budget?",
            formalityVariants: {
              casual: "Found 'em! 47 items on the list. Got a budget?",
              standard: "Found it. They have 47 items on the registry. Do you have a budget in mind?",
              formal: "I have located the registry for Sarah and Michael Johnson, dated June 15th. There are 47 items listed. Would you prefer to review the complete list, or shall I assist you in selecting items within a particular budget?",
            },
          },
          {
            speaker: "you",
            textEn: "I'm thinking around $50 to $75. What's still available in that range that no one has bought yet?",
            textZh: "我预算大概50到75美元。这个价格范围还有什么没被买过的？",
            culturalNote: "registry 上的商品一旦被买走会自动标记为 purchased，避免重复送礼。这是美国送礼文化的核心。",
            casualVersion: "Maybe $50 to $75. What's left that nobody's grabbed yet?",
            commonMistake: {
              wrong: "What hasn't been purchased in $50-$75?",
              correct: "What's still available in that range that no one has bought yet?",
              explanation: "'still available'和'no one has bought yet'更口语化自然。",
            },
            formalityVariants: {
              casual: "Like 50 to 75 bucks. Anything left in that range?",
              standard: "Around $50 to $75. What's still available that hasn't been purchased?",
              formal: "My budget is approximately $50 to $75. Could you show me the items within that range that have not yet been purchased?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "In that range, there's a nice set of wine glasses for $55, a throw blanket for $65, and a Le Creuset baking dish for $70. All still available. Want me to wrap whichever you pick as a gift?",
            textZh: "在这个范围里，有一套酒杯55美元、一条沙发毯65美元、一个 Le Creuset 烤盘70美元。都还没被买。要帮你把选好的礼物包装起来吗？",
            keyPhrases: [
              { en: "still available", zh: "还没被买/仍可选" },
              { en: "wrap as a gift", zh: "礼物包装" },
            ],
            alternativeExpressions: [
              {
                textEn: "You've got three options left in that price range. I can also gift-wrap it for free since it's from the registry.",
                textZh: "这个价位还有三个选择。因为是从清单上买的，我可以免费帮你做礼物包装。",
                actionHint: "选择礼物并决定是否包装",
                frequency: "common",
              },
            ],
            casualVersion: "Got some nice options — wine glasses at $55, a blanket at $65, or a Le Creuset dish at $70. Want it gift-wrapped?",
            formalityVariants: {
              casual: "Wine glasses, throw blanket, or a Le Creuset thing — all $55 to $70. Want it wrapped?",
              standard: "There are wine glasses at $55, a throw blanket at $65, and a Le Creuset baking dish at $70. Shall I gift-wrap your selection?",
              formal: "Within your specified range, we have an elegant set of wine glasses at $55, a decorative throw blanket at $65, and a Le Creuset baking dish at $70. All remain available. Would you like me to arrange complimentary gift wrapping for your selection?",
            },
          },
        ],
      },
      // --- Flow 2: 宝宝派对清单 ---
      {
        id: "registry-baby",
        titleZh: "宝宝派对礼物",
        titleEn: "Baby Shower Registry",
        description: "为宝宝派对从婴儿用品清单中选购礼物",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I need to buy a gift from a baby registry. My coworker's baby shower is this weekend. Can I search online and pick up in-store?",
            textZh: "我需要从婴儿用品清单上买礼物。同事的宝宝派对这周末。可以在网上搜然后到店取货吗？",
            culturalNote: "baby shower 是美国为准妈妈举办的庆祝活动，亲友从 baby registry 上选购婴儿用品作为礼物。",
            casualVersion: "Need a baby shower gift. Can I find the registry online and pick up here?",
            commonMistake: {
              wrong: "I want to buy baby party gift from the list.",
              correct: "I need to buy a gift from a baby registry.",
              explanation: "'baby registry'是标准术语；'baby shower'不说'baby party'。",
            },
            formalityVariants: {
              casual: "Baby shower this weekend — gotta grab something from the registry. Can I find it online?",
              standard: "I need a baby shower gift from a registry. Can I search online and pick up in-store?",
              formal: "I am looking to purchase a gift from a baby shower registry. My colleague's celebration is this weekend. Is it possible to browse the registry online and arrange for in-store pickup?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Absolutely! You can search the registry on our website or app by the parent's name. Anything available can be shipped or picked up in-store. Want me to look it up here too?",
            textZh: "当然！你可以在我们官网或 App 上用准妈妈/准爸爸的名字搜清单。可选商品可以邮寄或到店取。要我这里也帮你查吗？",
            keyPhrases: [
              { en: "search by the parent's name", zh: "用父母名字搜索" },
              { en: "shipped or picked up", zh: "邮寄或到店取" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure! Look it up by name on our site, or I can pull it up right here for you.",
                textZh: "好的！在我们网站上按名字搜，或者我在这里帮你查。",
                actionHint: "提供准父母姓名",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah! Search by name on the website or I'll look it up. Pick up or ship — your call.",
            formalityVariants: {
              casual: "For sure! Search by name online or I'll find it. Pickup or ship, up to you.",
              standard: "You can search by the parent's name on our website. Items can be shipped or picked up in-store.",
              formal: "Certainly. Our registry can be searched online or through our application using the expecting parent's name. All available items may be shipped directly or arranged for in-store pickup.",
            },
          },
          {
            speaker: "you",
            textEn: "Let me check online... I see she has a stroller on the list for $250. Can a few of us go in on it together? Is there a group gifting option?",
            textZh: "我在网上看看...她清单上有一个250美元的婴儿车。我们几个人可以一起合买吗？有没有团购/凑份子的选项？",
            culturalNote: "很多美国零售商的 registry 支持 group gifting（凑份子），多人分摊一件昂贵礼物的费用。",
            casualVersion: "She's got a $250 stroller on the list. Can a bunch of us chip in together?",
            commonMistake: {
              wrong: "Can we share the money to buy together?",
              correct: "Can a few of us go in on it together? Is there a group gifting option?",
              explanation: "'go in on it together'和'group gifting'是标准说法。",
            },
            formalityVariants: {
              casual: "She wants a $250 stroller. Can we all chip in for it?",
              standard: "Can a few of us go in on the stroller together? Is there a group gifting option?",
              formal: "I notice there is a stroller listed at $250. Would it be possible for several of us to contribute collectively? Is there a group gifting feature available?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes! We have a group gifting feature. You can start a contribution online, and share a link with your coworkers. Each person pays whatever amount they want, and it goes toward the item.",
            textZh: "有的！我们有凑份子功能。你可以在网上发起一个众筹，把链接分享给同事。每个人想付多少就付多少，金额都会算到那件商品上。",
            keyPhrases: [
              { en: "group gifting", zh: "凑份子/团购" },
              { en: "contribution", zh: "出资/份额" },
            ],
            alternativeExpressions: [
              {
                textEn: "We support group gifts! Just set it up online, share the link, and everyone chips in what they can.",
                textZh: "我们支持合买！网上设置好，分享链接，大家各出一份。",
                actionHint: "在网上发起合买",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah, we do group gifting! Set it up online, share the link, everyone chips in whatever.",
            formalityVariants: {
              casual: "Totally! Start it online, share the link, everybody throws in what they want.",
              standard: "Yes, we have group gifting. Start a contribution online and share the link with your coworkers.",
              formal: "Indeed, we offer a group gifting feature. You may initiate a contribution online and distribute the link among your colleagues. Each participant can contribute any amount they wish toward the item.",
            },
          },
          {
            speaker: "you",
            textEn: "That's perfect. One more question — if she already has everything she needs, can I get her a gift card for the store instead?",
            textZh: "太好了。再问一下——如果她需要的东西都买齐了，我可以买一张商店礼品卡给她吗？",
            culturalNote: "送 gift card 在美国是完全可以接受的，尤其当 registry 上的热门商品已被买完时。",
            casualVersion: "Nice. If everything's taken, can I just get a gift card?",
            commonMistake: {
              wrong: "Can I buy a money card for the shop?",
              correct: "Can I get her a gift card for the store?",
              explanation: "'gift card'是标准说法，不说'money card'。",
            },
            formalityVariants: {
              casual: "What if everything's bought? Can I just grab a gift card?",
              standard: "If everything on the registry is taken, can I get a gift card instead?",
              formal: "In the event that all registry items have already been purchased, would it be appropriate to purchase a store gift card as an alternative?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Gift cards are always a great option! We have physical and digital cards in any amount. A lot of new parents actually prefer them since they can buy what they need as it comes up.",
            textZh: "礼品卡永远是好选择！实体卡和电子卡都有，金额随意。很多新手爸妈其实更喜欢礼品卡，因为可以根据需要随时买。",
            keyPhrases: [
              { en: "physical and digital", zh: "实体和电子" },
              { en: "as it comes up", zh: "随时需要的时候" },
            ],
            alternativeExpressions: [
              {
                textEn: "Absolutely! Gift cards are super popular with new parents. We have them in any denomination.",
                textZh: "当然！新手爸妈很喜欢礼品卡。任何面额都有。",
                actionHint: "选择礼品卡金额和类型",
                frequency: "common",
              },
            ],
            casualVersion: "Gift cards are great! Any amount, physical or digital. New parents love 'em — they buy what they need when they need it.",
            formalityVariants: {
              casual: "Gift cards are perfect! Any amount. New parents love 'em.",
              standard: "Gift cards are always a great choice. We have physical and digital options in any amount.",
              formal: "Gift cards are an excellent alternative. We offer both physical and digital formats in any denomination. Many new parents find them particularly useful, as they allow purchases to be made as needs arise.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 农贸市场 ====================
  // ==================== 奥特莱斯 ====================
  {
    id: "shopping-outlet-mall",
    tags: ["outlet", "奥特莱斯", "designer discount", "comparison", "brand"],
    category: "shopping",
    titleZh: "奥特莱斯购物",
    titleEn: "Outlet Mall Shopping",
    description: "在奥特莱斯购物中心选购品牌折扣商品、比价和了解退换政策",
    otherRole: "店员",
    otherRoleIcon: "shopping-bag",
    flows: [
      // --- Flow 1: 基础奥特莱斯购物 ---
      {
        id: "outlet-basic",
        titleZh: "品牌折扣店购物",
        titleEn: "Outlet Store Basics",
        description: "在奥特莱斯了解折扣、比较品质和正价店的区别",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, is this the Coach outlet? I'm looking for a handbag. How much cheaper are things here compared to the regular store?",
            textZh: "你好，这是 Coach 奥特莱斯吗？我想买个手提包。跟正价店比便宜多少？",
            culturalNote: "美国奥特莱斯的商品通常便宜30-70%，但很多是专门为 outlet 生产的线（made for outlet），不是正价店的降价品。",
            casualVersion: "Is this the Coach outlet? How much cheaper is stuff here vs. the regular store?",
            commonMistake: {
              wrong: "How much discount do you have here?",
              correct: "How much cheaper are things here compared to the regular store?",
              explanation: "'compared to the regular store'更具体，'how much discount'太泛。",
            },
            formalityVariants: {
              casual: "Coach outlet, right? How much do I save here vs. a normal Coach store?",
              standard: "Is this the Coach outlet? How much cheaper is it compared to the regular store?",
              formal: "Is this the Coach outlet location? I am interested in purchasing a handbag. Could you tell me how the pricing here compares with the full-price retail stores?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Welcome to Coach Outlet! Most items are 40 to 70 percent off the retail price. Right now we're running an extra 20% off everything in the store. These bags here start at $99.",
            textZh: "欢迎来到 Coach 奥特莱斯！大多数商品比零售价低40%到70%。现在全场还有额外八折。这边的包99美元起。",
            keyPhrases: [
              { en: "retail price", zh: "零售价/正价" },
              { en: "extra 20% off", zh: "额外八折/再减20%" },
            ],
            alternativeExpressions: [
              {
                textEn: "Most bags are at least 50% off retail. Plus we have a store-wide additional discount today — 20% off everything.",
                textZh: "大多数包至少五折。今天全场还有额外折扣——所有商品再打八折。",
                actionHint: "了解折扣力度",
                frequency: "common",
              },
            ],
            casualVersion: "Welcome! Stuff's 40 to 70% off. Plus 20% extra off right now. Bags start at $99.",
            formalityVariants: {
              casual: "Hey! Everything's 40-70% off, plus an extra 20% today. Bags from $99.",
              standard: "Most items are 40-70% off retail. There's also an extra 20% off store-wide right now.",
              formal: "Welcome to Coach Outlet. Our merchandise is typically priced at 40 to 70 percent below retail. Additionally, we are currently offering a supplementary 20 percent reduction on all items store-wide.",
            },
          },
          {
            speaker: "you",
            textEn: "That's a big discount. But I've heard outlet items are sometimes made differently. Are these the same quality as the regular Coach bags?",
            textZh: "折扣很大。但我听说奥特莱斯的商品有时做工不同。这些跟正价 Coach 包质量一样吗？",
            culturalNote: "很多品牌（Coach、Kate Spade 等）为 outlet 专门生产的商品标有'Factory'标记，材质和做工可能略有差异。",
            casualVersion: "Big savings! But are these the same quality as the regular store? I heard outlet stuff can be different.",
            commonMistake: {
              wrong: "Is the quality worse than the real store?",
              correct: "Are these the same quality as the regular store bags?",
              explanation: "'regular store'比'real store'更恰当，outlet 也是真正的 Coach 产品。",
            },
            formalityVariants: {
              casual: "Great deal. But real talk — is this the same stuff as the regular store, or made-for-outlet?",
              standard: "Are these the same quality as the regular Coach bags?",
              formal: "That is quite a significant reduction. I have been informed that outlet merchandise may differ in construction. Are these items of the same quality as those available in the full-price retail stores?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Good question! We have both. Items with an \"F\" stamped inside are made for factory outlet — still great quality but a different line. Items without the \"F\" are from the retail stores, marked down. I can show you both.",
            textZh: "好问题！两种都有。里面印有\"F\"的是专为工厂奥特莱斯生产的——质量也很好，但是不同的产线。没有\"F\"的是正价店降价的。我可以给你看两种。",
            keyPhrases: [
              { en: "made for factory outlet", zh: "专为工厂奥特莱斯生产" },
              { en: "marked down", zh: "降价的" },
            ],
            alternativeExpressions: [
              {
                textEn: "Some are outlet-exclusive, some are retail markdowns. Check for the \"F\" stamp — that tells you which is which.",
                textZh: "有些是奥特莱斯专属，有些是正价店降价的。看里面有没有\"F\"标记就知道了。",
                actionHint: "检查商品标记",
                frequency: "common",
              },
            ],
            casualVersion: "We've got both! \"F\" inside means made-for-outlet. No \"F\" means it came from the regular store. Both are good though.",
            formalityVariants: {
              casual: "Both kinds! Look for the F stamp — that's outlet-made. No F means it's from the regular store, marked down.",
              standard: "Items with an \"F\" are made for outlet. Items without are retail markdowns. I can show you both.",
              formal: "That is an excellent question. We carry both categories. Items bearing an \"F\" designation are manufactured specifically for our outlet stores — they maintain high quality but represent a distinct product line. Those without the marking are retail merchandise that has been marked down. I would be happy to show you examples of each.",
            },
          },
          {
            speaker: "you",
            textEn: "Interesting, thanks! Can I also use a coupon on top of the outlet price? I got one at the entrance.",
            textZh: "有意思，谢谢！奥特莱斯价格上还能叠加优惠券吗？我在入口拿了一张。",
            culturalNote: "奥特莱斯入口的 information center 通常有额外的 coupon book，游客出示护照或驾照可能拿到专属优惠。",
            casualVersion: "Cool! Can I use this coupon from the entrance on top of the sale price?",
            commonMistake: {
              wrong: "Can I use both the discount and the coupon?",
              correct: "Can I use a coupon on top of the outlet price?",
              explanation: "'on top of'表示在已有折扣基础上叠加。",
            },
            formalityVariants: {
              casual: "Oh nice. Can I stack this entrance coupon with the outlet price?",
              standard: "Can I use a coupon on top of the outlet price?",
              formal: "That is very informative. Is it possible to apply the coupon I received at the entrance in addition to the outlet pricing?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Let me see... Yes! That's our VIP shopper coupon — an extra 10% off your entire purchase. It stacks with our current sale. You're going to get a really great deal today!",
            textZh: "我看看...可以的！那是我们的 VIP 购物者优惠券——全场再打九折。可以和当前折扣叠加。你今天真的能拿到超值价！",
            keyPhrases: [
              { en: "VIP shopper coupon", zh: "VIP 购物者优惠券" },
              { en: "stacks with", zh: "可以与...叠加" },
            ],
            alternativeExpressions: [
              {
                textEn: "That's the visitor coupon — yep, it works on top of everything! Extra 10% off your whole purchase.",
                textZh: "那是游客优惠券——没错，可以叠加所有折扣！全部再打九折。",
                actionHint: "享受多重折扣",
                frequency: "common",
              },
            ],
            casualVersion: "Oh yeah, that's the VIP coupon — extra 10% off everything! Stacks with the sale. You're getting a killer deal!",
            formalityVariants: {
              casual: "Ooh, the VIP coupon! 10% extra off everything. Stacks with the sale — great deal!",
              standard: "That VIP coupon gives you an extra 10% off. It stacks with the current sale.",
              formal: "That is our VIP shopper coupon, which provides an additional 10 percent discount on your entire purchase. It is fully combinable with our current promotional pricing, offering you an exceptional value.",
            },
          },
        ],
      },
      // --- Flow 2: 比价与退换 ---
      {
        id: "outlet-comparison",
        titleZh: "比价与退换政策",
        titleEn: "Comparison Shopping & Returns",
        description: "在不同奥特莱斯品牌店之间比价和了解退货政策",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I found a similar jacket at the Nike outlet for $85 and one here at Under Armour for $90. The Nike one seems like a better deal — is there anything that makes yours worth the extra $5?",
            textZh: "我在 Nike 奥特莱斯看到类似夹克85美元，你们 Under Armour 这件90美元。Nike 那件好像更划算——你们的有什么值得多花5美元的地方吗？",
            culturalNote: "在奥特莱斯不同品牌之间比较是很正常的做法，店员通常会介绍自家产品的优势。",
            casualVersion: "Nike outlet has a similar jacket for $85. Yours is $90. Why should I get yours?",
            commonMistake: {
              wrong: "Nike store has cheaper. Why is yours more expensive?",
              correct: "The Nike one seems like a better deal. Is there anything that makes yours worth the extra?",
              explanation: "用'worth the extra'更委婉，不是质疑对方'为什么更贵'。",
            },
            formalityVariants: {
              casual: "Nike's got a similar one for 85. This one's 90. What makes it worth the extra?",
              standard: "I found a similar jacket at Nike for $85. Yours is $90. What makes yours worth the extra?",
              formal: "I noticed a comparable jacket available at the Nike outlet for $85, while yours is priced at $90. Could you help me understand what distinguishes your product that would justify the additional cost?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Great question! Our jacket has a moisture-wicking lining and four-way stretch that the Nike one doesn't. Plus, ours comes with a lifetime warranty on the zipper. But honestly, try both on and go with whatever fits better.",
            textZh: "好问题！我们的夹克有吸湿排汗内衬和四向弹力面料，Nike 那件没有。而且我们的拉链有终身保修。不过说实话，两件都试试，哪件合身买哪件。",
            keyPhrases: [
              { en: "moisture-wicking", zh: "吸湿排汗的" },
              { en: "lifetime warranty", zh: "终身保修" },
            ],
            alternativeExpressions: [
              {
                textEn: "Ours has better tech fabric and a lifetime zipper warranty. But the best one is the one that fits you — try them both!",
                textZh: "我们的面料更好，拉链终身保修。但最好的是适合你的那件——两件都试试！",
                actionHint: "比较两件的面料和做工",
                frequency: "common",
              },
            ],
            casualVersion: "Ours has moisture-wicking and four-way stretch. Plus lifetime warranty on the zipper. But honestly, try both — go with what fits best.",
            formalityVariants: {
              casual: "Better fabric, lifetime zipper warranty. But try both — fit matters most.",
              standard: "Ours has moisture-wicking, four-way stretch, and a lifetime zipper warranty. Try both and see which fits better.",
              formal: "Our jacket features a moisture-wicking lining and four-way stretch fabric, along with a lifetime warranty on the zipper mechanism. However, I would recommend trying both on and selecting whichever provides the best fit and comfort.",
            },
          },
          {
            speaker: "you",
            textEn: "That's helpful. If I buy this one and then find a better deal somewhere else today, can I return it? What's the return policy here?",
            textZh: "很有用的信息。如果我买了这件但今天在别处找到更好的价格，可以退吗？退货政策是什么？",
            culturalNote: "大多数奥特莱斯品牌店有30天退货政策，但 outlet 购买通常不能到正价店退货。",
            casualVersion: "Cool. If I find something better later today, can I bring it back? What's the return policy?",
            commonMistake: {
              wrong: "Can I return if I find cheaper later?",
              correct: "What's the return policy if I want to return it later?",
              explanation: "先问政策比直接问'能不能因为找到更便宜的就退'更合适。",
            },
            formalityVariants: {
              casual: "What if I find a better deal later? Can I just bring this back?",
              standard: "What's the return policy if I want to bring it back?",
              formal: "Should I decide to return the item after finding a more favorable price elsewhere, what is your return policy?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "You have 30 days for a full refund with the receipt. One thing to note — outlet purchases can only be returned to an outlet store, not a regular retail location. Tags need to be on.",
            textZh: "30天内凭收据全额退款。需要注意——奥特莱斯购买的商品只能在奥特莱斯退，不能到正价店退。标签不能拆。",
            keyPhrases: [
              { en: "full refund with receipt", zh: "凭收据全额退款" },
              { en: "tags need to be on", zh: "标签不能拆" },
            ],
            alternativeExpressions: [
              {
                textEn: "30-day return window. Keep the receipt and tags. But remember — outlet returns must go to an outlet store.",
                textZh: "30天退货期。保留收据和标签。但记住——奥特莱斯购买只能到奥特莱斯退。",
                actionHint: "保留收据和标签",
                frequency: "common",
              },
            ],
            casualVersion: "30 days, full refund, just keep the receipt and tags on. But heads up — outlet returns only go to outlet stores, not regular ones.",
            formalityVariants: {
              casual: "30 days, keep receipt and tags. Outlet stuff can only go back to outlet stores though.",
              standard: "30 days for a full refund. Keep the receipt and tags. Outlet purchases can only be returned to outlet stores.",
              formal: "We offer a 30-day return window for a complete refund, provided you retain the receipt and all original tags remain attached. Please note that items purchased at outlet locations must be returned to an outlet store and cannot be processed at regular retail establishments.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. I'll take the jacket. Can I get a tax-free form? I'm an international visitor.",
            textZh: "明白了，我买这件夹克。我是国际游客，可以办理免税退税单吗？",
            culturalNote: "美国大多数州没有统一的游客退税制度，但部分奥特莱斯（如 Woodbury Common）提供 tax refund 服务。",
            casualVersion: "I'll take it. Can I get a tax-free thing? I'm from overseas.",
            commonMistake: {
              wrong: "Can I not pay tax because I am a tourist?",
              correct: "Can I get a tax-free form? I'm an international visitor.",
              explanation: "'tax-free form'或'tax refund form'是正确表达；并非不付税，而是事后退税。",
            },
            formalityVariants: {
              casual: "I'll grab it. Is there a tax refund thing for tourists?",
              standard: "I'll take the jacket. Can I get a tax-free form as an international visitor?",
              formal: "I would like to purchase this jacket. As an international visitor, would I be eligible for a tax refund or tax exemption form?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "We don't do tax-free directly, but the outlet mall has a tax refund kiosk near the food court. Bring your receipt and passport — they'll process the refund before you leave the country. I'll ring you up!",
            textZh: "我们店里不直接办理免税，但奥特莱斯的美食广场附近有一个退税自助机。带上收据和护照——他们会在你出境前办好退税。我帮你结账吧！",
            keyPhrases: [
              { en: "tax refund kiosk", zh: "退税自助机" },
              { en: "ring you up", zh: "帮你结账" },
            ],
            alternativeExpressions: [
              {
                textEn: "Tax refund is handled at the kiosk by the food court. Take your receipts and passport there after shopping.",
                textZh: "退税在美食广场旁边的自助机办理。购物后带着收据和护照过去就行。",
                actionHint: "购物后去退税自助机",
                frequency: "common",
              },
            ],
            casualVersion: "Can't do tax-free here, but there's a tax refund kiosk by the food court. Bring your receipt and passport. Let me ring this up for you!",
            formalityVariants: {
              casual: "Tax refund kiosk's by the food court — receipt and passport. Let me check you out!",
              standard: "The outlet mall has a tax refund kiosk near the food court. Bring your receipt and passport. Let me ring you up.",
              formal: "We do not process tax exemptions directly; however, the outlet mall operates a tax refund kiosk located near the food court. Please bring your receipts and passport for processing prior to your departure from the country. Allow me to complete your purchase.",
            },
          },
        ],
      },
    ],
  },
];
