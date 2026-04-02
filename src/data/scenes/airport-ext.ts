import type { PresetScene } from "../scene-types";

// ============================================================
// 机场扩展场景 — Airport Extended Scenes
// 覆盖：免税店、货币兑换、贵宾室、改签、行李遗失、海关申报、
//       入境审查、机场班车、WiFi/SIM卡、机场餐饮、药房、
//       特殊协助、宠物旅行、VIP服务、行李寄存、投诉
// ============================================================

export const AIRPORT_SCENES_EXT: PresetScene[] = [
  // ==================== 1. 免税店浏览 ====================
  {
    id: "airport-duty-free-browsing",
    category: "airport",
    titleZh: "免税店浏览",
    titleEn: "Duty-Free Browsing",
    description: "在机场免税店闲逛，询问商品和价格",
    otherRole: "免税店店员",
    otherRoleIcon: "🛍️",
    flows: [
      {
        id: "basic-browsing",
        titleZh: "随便看看",
        titleEn: "Just Browsing",
        description: "进免税店随意浏览，询问价格和折扣",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "店员",
            textEn: "Welcome! Are you looking for anything in particular?",
            textZh: "欢迎！您在找什么特定的东西吗？",
            keyPhrases: [
              { en: "anything in particular", zh: "什么特定的东西" },
            ],
            alternativeExpressions: [
              { textEn: "Hi there! Can I help you find something today?", textZh: "你好！今天需要帮您找什么吗？", actionHint: "更随和的招呼", frequency: "common" },
              { textEn: "Good day! Is there anything specific I can assist you with?", textZh: "您好！有什么具体需要我帮忙的吗？", actionHint: "较正式的问候", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I'm just browsing, thanks.",
            textZh: "我随便看看，谢谢。",
            casualVersion: "Just looking, thanks.",
            culturalNote: "在国外，店员主动打招呼很常见，说 'just browsing' 他们就不会一直跟着你了。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "No problem! Let me know if you need any help.",
            textZh: "没问题！需要帮忙随时叫我。",
            keyPhrases: [
              { en: "let me know", zh: "告诉我 / 叫我" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing! I'll be right over here if you need me.", textZh: "好的！需要我的话我就在这边。", actionHint: "轻松回应", frequency: "common" },
              { textEn: "Of course! Take your time and feel free to ask.", textZh: "当然！慢慢看，随时问我。", actionHint: "耐心回应", frequency: "common" }
            ],
          },
          {
            speaker: "you",
            textEn: "Actually, how much is this perfume?",
            textZh: "对了，这瓶香水多少钱？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "That one is $85. It's already duty-free, so there's no additional tax.",
            textZh: "那个85美元。已经是免税价了，没有额外的税。",
            keyPhrases: [
              { en: "duty-free", zh: "免税" },
              { en: "no additional tax", zh: "没有额外的税" },
            ],
            alternativeExpressions: [
              { textEn: "This one's eighty-five dollars, and it's tax-free.", textZh: "这个85美元，免税的。", actionHint: "简洁报价", frequency: "common" },
              { textEn: "That's $85 — duty-free price, so what you see is what you pay.", textZh: "85美元——免税价，标多少就付多少。", actionHint: "强调免税优势", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Is that cheaper than in the regular stores?",
            textZh: "比普通商店便宜吗？",
            vocabNotes: {
              "regular stores": {
                meaningInContext: "在这里指的是机场外面的普通商店",
                similarUsage: "类似用法：regular price（原价）",
              },
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes, you save about 15 to 20 percent compared to retail. We also have a buy-two-get-one-free promotion on selected items.",
            textZh: "是的，比零售价便宜大约15%到20%。部分商品我们还有买二送一的活动。",
            keyPhrases: [
              { en: "save about 15 to 20 percent", zh: "便宜大约15%到20%" },
              { en: "buy-two-get-one-free", zh: "买二送一" },
              { en: "selected items", zh: "部分商品" },
            ],
            alternativeExpressions: [
              { textEn: "Definitely! You're looking at 15 to 20 percent off retail. Plus we've got a buy-two-get-one-free deal on some items.", textZh: "当然！比零售价低15%到20%。而且部分商品有买二送一。", actionHint: "口语化表达优惠", frequency: "common" },
              { textEn: "Oh yeah, it's a good deal. You save around 15 to 20 percent, and there's a three-for-two offer on selected products.", textZh: "是的，很划算。大约省15%到20%，指定商品还有三件付两件的活动。", actionHint: "换种说法介绍折扣", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds great. Can I pay with Chinese yuan?",
            textZh: "听起来不错。可以用人民币付款吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "We accept major credit cards and US dollars. Unfortunately, we don't take yuan in cash, but you can use Alipay or WeChat Pay.",
            textZh: "我们接受主要信用卡和美元。很遗憾，我们不收人民币现金，但可以用支付宝或微信支付。",
            keyPhrases: [
              { en: "major credit cards", zh: "主要信用卡" },
              { en: "we don't take", zh: "我们不收" },
            ],
            alternativeExpressions: [
              { textEn: "We take all major cards and US dollars. No RMB cash, I'm afraid, but Alipay and WeChat Pay work fine.", textZh: "主要信用卡和美元都可以。人民币现金不行，但支付宝和微信支付都能用。", actionHint: "简短说明支付方式", frequency: "common" },
              { textEn: "Sure — credit cards, US cash, Alipay, or WeChat Pay. We just can't do yuan in cash.", textZh: "可以——信用卡、美元现金、支付宝或微信支付。就是不收人民币现金。", actionHint: "列举可用支付方式", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect, I'll use my credit card then. I'll keep looking around first.",
            textZh: "好的，那我用信用卡。我先再看看。",
          },
        ],
      },
      {
        id: "asking-recommendations",
        titleZh: "请店员推荐",
        titleEn: "Asking for Recommendations",
        description: "不确定买什么，请店员推荐热门商品",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm looking for a gift. What's popular here?",
            textZh: "你好，我想买个礼物。这里什么比较畅销？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "It depends on who it's for! Our bestsellers are local chocolates and this whisky set. What's your budget?",
            textZh: "要看是给谁的！我们的畅销品是本地巧克力和这套威士忌礼盒。您的预算是多少？",
            keyPhrases: [
              { en: "who it's for", zh: "给谁的" },
              { en: "bestsellers", zh: "畅销品" },
              { en: "budget", zh: "预算" },
            ],
            alternativeExpressions: [
              { textEn: "Well, who's it for? Our top picks are the local chocolates and this whisky gift set. How much are you looking to spend?", textZh: "给谁的呢？最受欢迎的是本地巧克力和这套威士忌礼盒。您大概想花多少？", actionHint: "口语化推荐", frequency: "common" },
              { textEn: "That depends! Is it for a man or a woman? Our best gifts are local chocolates and whisky sets. What's your price range?", textZh: "那要看了！送男士还是女士？最好的礼物是本地巧克力和威士忌套装。您的价位是？", actionHint: "先了解送礼对象", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "It's for my mom. Something around $50 would be great.",
            textZh: "给我妈妈的。大概50美元左右的就行。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "How about this skincare set? It's from a local brand and very popular with international visitors. It's $48.",
            textZh: "这套护肤品怎么样？是本地品牌的，在国际游客中非常受欢迎。48美元。",
            keyPhrases: [
              { en: "skincare set", zh: "护肤品套装" },
              { en: "local brand", zh: "本地品牌" },
              { en: "international visitors", zh: "国际游客" },
            ],
            alternativeExpressions: [
              { textEn: "I'd suggest this skincare set — it's a local brand, super popular with tourists. Just $48.", textZh: "推荐这套护肤品——本地品牌，游客特别喜欢。只要48美元。", actionHint: "口语化推荐", frequency: "common" },
              { textEn: "This skincare gift set is one of our bestsellers. It's locally made and costs $48.", textZh: "这套护肤品礼盒是我们的畅销品之一。本地产的，48美元。", actionHint: "突出畅销", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "That looks nice. Can you gift-wrap it?",
            textZh: "看着不错。能帮我包装成礼物吗？",
            vocabNotes: {
              "gift-wrap": {
                meaningInContext: "在这里指用漂亮的纸包装成礼物样式",
                similarUsage: "类似用法：Could you wrap this as a gift?",
              },
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Absolutely! We offer complimentary gift wrapping. Would you like a bag as well?",
            textZh: "当然可以！我们提供免费礼品包装。还需要一个袋子吗？",
            keyPhrases: [
              { en: "complimentary", zh: "免费的（赠送的）" },
              { en: "gift wrapping", zh: "礼品包装" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! Gift wrapping is on us. Need a bag too?", textZh: "当然！礼品包装免费。还需要袋子吗？", actionHint: "简洁回应", frequency: "common" },
              { textEn: "Sure thing! We do free gift wrapping. Want me to put it in a nice bag as well?", textZh: "没问题！我们有免费礼品包装。要不要再配个好看的袋子？", actionHint: "热情回应", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. Also, will this count towards my liquid allowance for carry-on?",
            textZh: "好的，麻烦了。另外，这个算不算随身行李的液体限制？",
            culturalNote: "免税店买的液体类商品通常会被放在密封袋里，可以带上飞机，但转机时可能需要重新过安检。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Since you bought it after security, it's fine for your current flight. But if you have a connecting flight, you might need to put it in your checked bag. I'll seal it in a tamper-evident bag just in case.",
            textZh: "因为您是过了安检后买的，当前航班没问题。但如果有转机，可能需要放到托运行李里。我给您用防拆封袋密封一下以防万一。",
            keyPhrases: [
              { en: "after security", zh: "过了安检后" },
              { en: "connecting flight", zh: "转机" },
              { en: "checked bag", zh: "托运行李" },
              { en: "tamper-evident bag", zh: "防拆封袋" },
            ],
            alternativeExpressions: [
              { textEn: "It's fine for your flight since you bought it past security. If you're connecting, though, you may need to check it. I'll seal it in a special bag just in case.", textZh: "过了安检买的，这趟航班没问题。但转机的话可能要托运。我用特殊袋子密封一下以防万一。", actionHint: "口语化解释规则", frequency: "common" },
              { textEn: "For your current flight, no problem at all. But on a connecting flight, it might need to go in checked luggage. Let me put it in a sealed bag for you.", textZh: "当前航班完全没问题。但转机的话，可能要放托运行李里。我给您用密封袋装好。", actionHint: "分步说明", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. I'll take it. Can I pay by card?",
            textZh: "了解了。我要了。可以刷卡吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Of course! Insert or tap your card here, please. Here's your receipt. Enjoy your flight!",
            textZh: "当然！请在这里插卡或感应支付。这是您的收据。祝您旅途愉快！",
            keyPhrases: [
              { en: "insert or tap", zh: "插卡或感应" },
              { en: "receipt", zh: "收据" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! Just tap or insert your card right here. Here's your receipt — have a great flight!", textZh: "好的！在这里感应或插卡就行。收据给您——祝旅途愉快！", actionHint: "简洁结账", frequency: "common" },
              { textEn: "No problem! Card goes here, please. And there's your receipt. Safe travels!", textZh: "没问题！卡放这里。收据给您。一路平安！", actionHint: "快速结账", frequency: "occasional" }
            ],
          },
        ],
      },
    ],
  },

  // ==================== 2. 免税店买酒 ====================
  {
    id: "airport-duty-free-liquor",
    category: "airport",
    titleZh: "免税店买酒",
    titleEn: "Duty-Free Liquor Shopping",
    description: "在免税店购买烈酒或红酒，了解携带限制",
    otherRole: "免税店店员",
    otherRoleIcon: "🍷",
    flows: [
      {
        id: "buying-whisky",
        titleZh: "购买威士忌",
        titleEn: "Buying Whisky",
        description: "选购威士忌，了解入境携带量限制",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I'm looking for a good single malt whisky. Any recommendations?",
            textZh: "打扰一下，我想买一瓶好的单一麦芽威士忌。有什么推荐吗？",
            vocabNotes: {
              "single malt": {
                meaningInContext: "在这里指单一麦芽威士忌，由单一酒厂的麦芽威士忌酿造",
                similarUsage: "类似表达：blended whisky（调和威士忌）",
              },
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Sure! What's your price range? We have everything from $30 bottles to limited editions over $500.",
            textZh: "当然！您的价位是多少？我们有30美元到500多美元的限量版。",
            keyPhrases: [
              { en: "price range", zh: "价位" },
              { en: "limited editions", zh: "限量版" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! How much are you looking to spend? We've got bottles from $30 all the way up to $500-plus.", textZh: "当然！您想花多少？我们有30美元到500多美元的都有。", actionHint: "口语化询问预算", frequency: "common" },
              { textEn: "Absolutely! What's your budget? We carry everything from entry-level to limited editions.", textZh: "当然可以！预算多少？从入门级到限量版都有。", actionHint: "了解预算", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Something around $80 to $100. It's a gift for a friend.",
            textZh: "大概80到100美元的。给朋友带的礼物。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "I'd recommend this 12-year Macallan. It's a classic choice and this airport-exclusive bottle is $95 — you won't find it in regular stores.",
            textZh: "我推荐这款12年麦卡伦。是经典之选，而且这款机场独家版95美元——普通商店买不到。",
            keyPhrases: [
              { en: "airport-exclusive", zh: "机场独家" },
              { en: "classic choice", zh: "经典之选" },
            ],
            alternativeExpressions: [
              { textEn: "This 12-year Macallan is a great pick. It's $95 and it's an airport exclusive — can't get it anywhere else.", textZh: "这款12年麦卡伦很不错。95美元，机场独家——别的地方买不到。", actionHint: "口语化推荐", frequency: "common" },
              { textEn: "How about this Macallan 12? Classic whisky, airport-only bottling, and it's just $95.", textZh: "这款麦卡伦12年怎么样？经典威士忌，机场限定款，只要95美元。", actionHint: "简洁推荐", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Nice. How many bottles am I allowed to bring into China?",
            textZh: "不错。我最多可以带几瓶回中国？",
            culturalNote: "中国海关规定，入境旅客可免税携带1500毫升以下的酒精饮料（酒精度12度以上）。超出部分需申报纳税。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Most countries allow one to two liters duty-free. For China, I believe the limit is 1,500 milliliters of alcohol. So two standard bottles would be over the limit.",
            textZh: "大多数国家允许免税带一到两升。中国的话，我记得酒精限量是1500毫升。所以两瓶标准装就超限了。",
            keyPhrases: [
              { en: "duty-free limit", zh: "免税限额" },
              { en: "over the limit", zh: "超限" },
              { en: "milliliters", zh: "毫升" },
            ],
            alternativeExpressions: [
              { textEn: "Generally you can bring one to two liters duty-free. For China, I think it's 1,500 ml, so two bottles would go over.", textZh: "一般可以免税带一到两升。中国好像是1500毫升，两瓶就超了。", actionHint: "口语化解释限额", frequency: "common" },
              { textEn: "The duty-free allowance is usually one to two liters. China's limit is around 1,500 ml of alcohol — that's roughly two standard bottles max.", textZh: "免税限额通常是一到两升。中国的限制大约是1500毫升——大约最多两瓶标准装。", actionHint: "明确说明限额", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. I'll just get one bottle then. Can I carry it onto the plane?",
            textZh: "明白了。那我就买一瓶。可以带上飞机吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes! Since you're buying it after security, I'll put it in a sealed duty-free bag. Keep the receipt inside — don't open it until you've cleared customs at your destination.",
            textZh: "可以！因为是过安检后买的，我会放在密封的免税袋里。把收据留在里面——到目的地过完海关之前不要打开。",
            keyPhrases: [
              { en: "sealed duty-free bag", zh: "密封的免税袋" },
              { en: "keep the receipt", zh: "保留收据" },
              { en: "cleared customs", zh: "过完海关" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! I'll bag it in a sealed duty-free pouch since you're past security. Just keep the receipt in there and don't break the seal till you clear customs.", textZh: "没问题！过了安检买的，我用密封免税袋装好。收据放里面，过完海关之前别拆封。", actionHint: "口语化提醒", frequency: "common" },
              { textEn: "Absolutely. It'll go in a tamper-proof bag with the receipt inside. Don't open it until after customs at your destination.", textZh: "当然。放在防拆袋里，收据在里面。到目的地过完海关再打开。", actionHint: "简洁说明", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. I'll take it.",
            textZh: "好的，我买了。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Great choice! That'll be $95. Card or cash?",
            textZh: "选得好！一共95美元。刷卡还是现金？",
            alternativeExpressions: [
              { textEn: "Excellent choice! That's $95. Would you like to pay by card or cash?", textZh: "选得好！95美元。刷卡还是付现？", actionHint: "礼貌确认", frequency: "common" },
              { textEn: "Nice pick! Your total comes to $95. How would you like to pay?", textZh: "不错的选择！一共95美元。怎么付款？", actionHint: "口语化结账", frequency: "occasional" }
            ],
          },
        ],
      },
      {
        id: "wine-selection",
        titleZh: "挑选红酒",
        titleEn: "Choosing Wine",
        description: "不太懂酒，请店员帮忙挑选红酒",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I don't know much about wine. Could you help me pick a good red?",
            textZh: "你好，我不太懂酒。能帮我挑一瓶好的红酒吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Of course! Do you or the person you're buying for prefer something fruity and light, or rich and full-bodied?",
            textZh: "当然！您或者要送的人喜欢果味清爽的，还是醇厚浓郁的？",
            keyPhrases: [
              { en: "fruity and light", zh: "果味清爽的" },
              { en: "rich and full-bodied", zh: "醇厚浓郁的" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! Does the person drinking it like lighter wines or something bold and full-bodied?", textZh: "好的！喝的人喜欢清淡的还是浓郁厚重的？", actionHint: "直接询问口味", frequency: "common" },
              { textEn: "Happy to help! Are you after something smooth and easy-drinking, or more of a rich, complex wine?", textZh: "乐意帮忙！您想要顺口好喝的，还是更浓郁复杂的？", actionHint: "用不同词汇描述风格", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Something not too strong. Medium sweetness maybe?",
            textZh: "不要太浓的。中等甜度的吧？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "I'd suggest this Pinot Noir from New Zealand. It's smooth with cherry and berry notes. Very approachable for someone who doesn't drink wine often.",
            textZh: "我推荐这款新西兰的黑皮诺。口感顺滑，有樱桃和浆果的风味。不常喝酒的人也会喜欢。",
            keyPhrases: [
              { en: "smooth", zh: "顺滑" },
              { en: "cherry and berry notes", zh: "樱桃和浆果风味" },
              { en: "approachable", zh: "容易接受的" },
            ],
            alternativeExpressions: [
              { textEn: "Try this New Zealand Pinot Noir — it's smooth, with cherry and berry flavors. Great for casual drinkers.", textZh: "试试这款新西兰黑皮诺——口感顺滑，有樱桃和浆果味。不常喝酒的人也很喜欢。", actionHint: "简洁推荐", frequency: "common" },
              { textEn: "This Pinot Noir is really easy to drink — light cherry notes, not too heavy. People who are new to wine love it.", textZh: "这款黑皮诺特别好入口——淡淡的樱桃味，不会太重。刚接触红酒的人都很喜欢。", actionHint: "强调易饮性", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds good. How much is it?",
            textZh: "听起来不错。多少钱？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "It's $35. Would you like me to add a wine carrier? It's a padded bag that protects the bottle during your flight — only $5 extra.",
            textZh: "35美元。需要加一个红酒保护袋吗？有填充的，飞行途中可以保护酒瓶——只要额外5美元。",
            keyPhrases: [
              { en: "wine carrier", zh: "红酒保护袋" },
              { en: "padded bag", zh: "有填充的袋子" },
            ],
            alternativeExpressions: [
              { textEn: "That one's $35. Want a padded wine bag to protect it on the flight? It's just $5 more.", textZh: "35美元。要不要加个防护红酒袋？飞行途中保护酒瓶，只多5美元。", actionHint: "简洁报价加推荐", frequency: "common" },
              { textEn: "It's $35. We also sell protective carriers for $5 — keeps the bottle safe in your luggage.", textZh: "35美元。我们还有5美元的保护套——放行李里不怕碎。", actionHint: "附带推荐配件", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, that would be great. I don't want it to break in my luggage.",
            textZh: "好的，那太好了。我可不想它在行李里碎了。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Smart move. If you're checking it, I'd recommend wrapping it in clothes for extra protection. Would you like anything else?",
            textZh: "明智的选择。如果要托运的话，我建议用衣服再包一层。还需要别的吗？",
            keyPhrases: [
              { en: "smart move", zh: "明智的选择" },
              { en: "wrapping it in clothes", zh: "用衣服包着" },
              { en: "extra protection", zh: "额外保护" },
            ],
            alternativeExpressions: [
              { textEn: "Good idea. If it's going in checked luggage, wrap it in some clothes for extra cushioning. Anything else you need?", textZh: "好主意。如果要托运，用衣服裹一下多一层缓冲。还需要别的吗？", actionHint: "实用建议", frequency: "common" },
              { textEn: "That's the way to go. I'd also suggest putting it in the middle of your suitcase surrounded by soft items. Need anything else?", textZh: "这样最好。我还建议放在箱子中间，用软的东西围着。还要别的吗？", actionHint: "补充打包建议", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "No, that's all. Thank you for the recommendation!",
            textZh: "不用了，就这些。谢谢推荐！",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "My pleasure! That's $40 total. Enjoy your trip!",
            textZh: "不客气！一共40美元。祝旅途愉快！",
            alternativeExpressions: [
              { textEn: "You're welcome! That's $40 altogether. Have a wonderful trip!", textZh: "不客气！一共40美元。祝旅途愉快！", actionHint: "简洁告别", frequency: "common" },
              { textEn: "Glad I could help! Total is $40. Safe travels!", textZh: "很高兴能帮到您！总共40美元。一路平安！", actionHint: "热情送别", frequency: "occasional" }
            ],
          },
        ],
      },
    ],
  },

  // ==================== 3. 免税店买化妆品 ====================
  {
    id: "airport-duty-free-cosmetics",
    category: "airport",
    titleZh: "免税店买化妆品",
    titleEn: "Duty-Free Cosmetics Shopping",
    description: "在免税店选购化妆品和护肤品",
    otherRole: "美妆柜台顾问",
    otherRoleIcon: "💄",
    flows: [
      {
        id: "buying-skincare",
        titleZh: "购买护肤品",
        titleEn: "Buying Skincare",
        description: "挑选适合自己肤质的护肤品",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm looking for a moisturizer. Something for dry skin.",
            textZh: "你好，我想买保湿霜。适合干性皮肤的。",
            vocabNotes: {
              moisturizer: {
                meaningInContext: "在这里指保湿面霜",
                similarUsage: "类似表达：hydrating cream, face cream",
              },
            },
          },
          {
            speaker: "them",
            role: "美妆顾问",
            textEn: "We have a great selection! Do you have any brand preference, or are you open to trying something new?",
            textZh: "我们选择很多！您有品牌偏好吗，还是愿意尝试新的？",
            keyPhrases: [
              { en: "brand preference", zh: "品牌偏好" },
              { en: "open to trying", zh: "愿意尝试" },
            ],
            alternativeExpressions: [
              { textEn: "We've got lots of options! Any particular brand you like, or would you like me to recommend something?", textZh: "我们选择很多！有喜欢的品牌吗，还是需要我推荐？", actionHint: "热情引导", frequency: "common" },
              { textEn: "Sure! Do you have a go-to brand, or are you open to trying new things?", textZh: "好的！有常用的品牌吗，还是想试试新的？", actionHint: "口语化询问", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I'm open to anything. What do you recommend for really dry skin?",
            textZh: "什么都可以。特别干的皮肤你推荐什么？",
          },
          {
            speaker: "them",
            role: "美妆顾问",
            textEn: "This La Mer moisturizing cream is our top seller. It's $150 here — you'd pay about $190 at a department store. Would you like to try a sample?",
            textZh: "这款海蓝之谜保湿霜是我们的销冠。这里卖150美元——百货商店大概要190美元。要试一下小样吗？",
            keyPhrases: [
              { en: "top seller", zh: "销冠" },
              { en: "department store", zh: "百货商店" },
              { en: "try a sample", zh: "试一下小样" },
            ],
            alternativeExpressions: [
              { textEn: "Our bestseller is this La Mer cream — $150 here versus $190 at department stores. Want to try a sample?", textZh: "我们卖得最好的是这款海蓝之谜面霜——这里150美元，百货商店要190。要试试小样吗？", actionHint: "突出价格优势", frequency: "common" },
              { textEn: "I'd go with the La Mer moisturizer. It's $150, which is way cheaper than retail. Can I put some on your hand so you can feel it?", textZh: "我推荐海蓝之谜保湿霜。150美元，比零售便宜很多。涂一点在手上感受一下？", actionHint: "主动邀请试用", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. Can I try it on my hand?",
            textZh: "好的。可以在手上试一下吗？",
          },
          {
            speaker: "them",
            role: "美妆顾问",
            textEn: "Of course! Here you go... See how it absorbs quickly without feeling greasy? It's very hydrating.",
            textZh: "当然！给您……看，吸收得很快，不油腻。非常补水。",
            keyPhrases: [
              { en: "absorbs quickly", zh: "吸收快" },
              { en: "greasy", zh: "油腻" },
              { en: "hydrating", zh: "补水" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! Here, try it... Notice how quickly it sinks in? Not greasy at all, and super hydrating.", textZh: "好的！试试……有没有觉得吸收很快？一点都不油腻，非常补水。", actionHint: "口语化演示", frequency: "common" },
              { textEn: "Go ahead, put a little on... See? It absorbs in seconds and leaves your skin feeling soft, not oily.", textZh: "来，抹一点……看到了吗？几秒就吸收了，皮肤摸起来柔滑，不会油。", actionHint: "引导试用", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "It feels nice. Is there a smaller size? I want to try it before committing to the full size.",
            textZh: "感觉不错。有小号的吗？我想先试试再买大瓶的。",
            culturalNote: "国外很多品牌有travel size（旅行装），比正装小很多，价格也便宜，适合先试用。",
          },
          {
            speaker: "them",
            role: "美妆顾问",
            textEn: "We have a 30ml travel size for $65, and the full size is 60ml for $150. The full size is definitely better value.",
            textZh: "我们有30毫升的旅行装65美元，正装60毫升150美元。正装肯定更划算。",
            keyPhrases: [
              { en: "travel size", zh: "旅行装" },
              { en: "full size", zh: "正装" },
              { en: "better value", zh: "更划算" },
            ],
            alternativeExpressions: [
              { textEn: "The travel size is 30ml for $65, and the full size is 60ml for $150. The bigger one is better value per ml.", textZh: "旅行装30毫升65美元，正装60毫升150美元。大瓶的每毫升更划算。", actionHint: "比较两种规格", frequency: "common" },
              { textEn: "We have two sizes — a small one for $65 and the regular for $150. You get double the product for less than double the price.", textZh: "我们有两种——小瓶65美元，常规瓶150美元。产品翻倍但价格不到翻倍。", actionHint: "强调性价比", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with the travel size for now. Do you have any free samples I could take?",
            textZh: "那我先买旅行装吧。有免费的试用装可以拿吗？",
          },
          {
            speaker: "them",
            role: "美妆顾问",
            textEn: "Sure! I'll add a few samples to your bag. We have a serum and an eye cream sample. Here's your total — $65.",
            textZh: "当然！我给您袋子里加几个小样。有精华液和眼霜的试用装。一共65美元。",
            keyPhrases: [
              { en: "samples", zh: "小样/试用装" },
              { en: "serum", zh: "精华液" },
              { en: "eye cream", zh: "眼霜" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! I'll throw in some samples — we've got serum and eye cream. That'll be $65 total.", textZh: "当然！我给您加几个小样——有精华液和眼霜的。一共65美元。", actionHint: "口语化赠送", frequency: "common" },
              { textEn: "Absolutely! Let me add a couple of free samples for you — a serum and an eye cream. Your total is $65.", textZh: "没问题！我给您添几个免费小样——精华液和眼霜。总计65美元。", actionHint: "明确赠品", frequency: "occasional" }
            ],
          },
        ],
      },
      {
        id: "makeup-shade-matching",
        titleZh: "粉底色号匹配",
        titleEn: "Foundation Shade Matching",
        description: "找到适合自己肤色的粉底色号",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I need a foundation but I'm not sure what shade I am.",
            textZh: "我想买粉底但不确定自己是什么色号。",
          },
          {
            speaker: "them",
            role: "美妆顾问",
            textEn: "No problem, I can help match you! Let me look at your skin tone in natural light. Do you know if your undertone is warm, cool, or neutral?",
            textZh: "没问题，我可以帮你试色！我在自然光下看一下你的肤色。你知道你的肤色底调是暖色、冷色还是中性的吗？",
            keyPhrases: [
              { en: "shade", zh: "色号" },
              { en: "skin tone", zh: "肤色" },
              { en: "undertone", zh: "底调" },
              { en: "warm, cool, or neutral", zh: "暖色、冷色还是中性" },
            ],
            alternativeExpressions: [
              { textEn: "I can definitely help with that! Let me check your skin in this light. Do you know your undertone — warm, cool, or neutral?", textZh: "我肯定能帮到你！让我在这个光线下看看你的肤色。你知道自己的底调吗——暖色、冷色还是中性？", actionHint: "主动帮忙试色", frequency: "common" },
              { textEn: "Sure, let's find your shade! First, do you lean more yellow-toned or pink-toned? That'll narrow it down.", textZh: "好的，我们来找你的色号！先说说，你的肤色偏黄还是偏粉？这样能缩小范围。", actionHint: "简化问法", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I have no idea, to be honest.",
            textZh: "说实话我完全不知道。",
          },
          {
            speaker: "them",
            role: "美妆顾问",
            textEn: "That's okay! Let me swatch a few shades on your jawline. This helps us see which one disappears into your skin — that's your match.",
            textZh: "没关系！我在你下巴线上试几个色号。看哪个和皮肤融为一体——那就是适合你的色号。",
            keyPhrases: [
              { en: "swatch", zh: "试色" },
              { en: "jawline", zh: "下巴线" },
              { en: "disappears into your skin", zh: "和皮肤融为一体" },
            ],
            alternativeExpressions: [
              { textEn: "No worries! I'll test a few shades along your jawline and see which one blends in best.", textZh: "没关系！我在你下巴线上试几个色号，看哪个最融合。", actionHint: "简洁解释试色方法", frequency: "common" },
              { textEn: "That's totally fine — most people don't know. Let me dab a few options here on your jaw. The right shade should basically vanish.", textZh: "完全没关系——大多数人都不知道。我在下巴这里点几个色号。对的色号基本上会看不见。", actionHint: "安慰并演示", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, go ahead.",
            textZh: "好的，试吧。",
          },
          {
            speaker: "them",
            role: "美妆顾问",
            textEn: "I think you're a '21 Natural Beige' — it has a warm yellow undertone which is very common for East Asian skin. See? This one blends right in.",
            textZh: "我觉得你适合'21号自然米色'——有暖黄底调，东亚肤色很常见。看，这个完全融入了。",
            keyPhrases: [
              { en: "blends right in", zh: "完全融入了" },
              { en: "yellow undertone", zh: "黄底调" },
            ],
            alternativeExpressions: [
              { textEn: "Looks like '21 Natural Beige' is your match — warm yellow undertone, perfect for East Asian skin. See how it disappears?", textZh: "看起来'21号自然米色'最适合你——暖黄底调，非常适合东亚肤色。看它怎么融进去的？", actionHint: "确认色号", frequency: "common" },
              { textEn: "I'd say you're a '21 Natural Beige.' It has a yellow base that works great with your complexion. Look — you can barely see it!", textZh: "我觉得你是'21号自然米色'。黄调底色很配你的肤色。看——几乎看不出来了！", actionHint: "展示匹配效果", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Oh, that does look natural. What finish does this one have? I don't like anything too shiny.",
            textZh: "确实看着很自然。这款是什么妆效的？我不喜欢太亮的。",
            vocabNotes: {
              finish: {
                meaningInContext: "在化妆品语境中指妆效，如哑光（matte）、光泽（dewy）",
                similarUsage: "类似用法：matte finish（哑光妆效）",
              },
            },
          },
          {
            speaker: "them",
            role: "美妆顾问",
            textEn: "This one is semi-matte, so it controls oil but doesn't look flat. We also have a dewy finish if you ever want that glow. It lasts about 12 hours with a setting spray.",
            textZh: "这款是半哑光的，控油但不会看起来太死板。如果你想要光泽感，我们也有水光妆效的。配上定妆喷雾可以持妆大约12小时。",
            keyPhrases: [
              { en: "semi-matte", zh: "半哑光" },
              { en: "dewy finish", zh: "水光妆效" },
              { en: "setting spray", zh: "定妆喷雾" },
            ],
            alternativeExpressions: [
              { textEn: "This one's semi-matte — controls shine but still looks natural. We also have a dewy version if you like that glow. It lasts about 12 hours with setting spray.", textZh: "这款是半哑光的——控油但看起来还是自然。如果你喜欢光泽感我们也有水光款。配定妆喷雾能持续约12小时。", actionHint: "口语化介绍妆效", frequency: "common" },
              { textEn: "It gives a semi-matte look — not too shiny, not too flat. Pair it with a setting spray and you're good for 12 hours.", textZh: "呈现半哑光妆效——不会太亮也不会太死板。配上定妆喷雾可以持妆12小时。", actionHint: "简洁描述效果", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Semi-matte is perfect. I'll take it.",
            textZh: "半哑光的正好。我要了。",
          },
          {
            speaker: "them",
            role: "美妆顾问",
            textEn: "Wonderful! Here's a sample of our setting spray too — it pairs perfectly with this foundation. Your total is $42.",
            textZh: "太好了！这里还有一个定妆喷雾的小样——跟这款粉底很搭。一共42美元。",
            keyPhrases: [
              { en: "pairs perfectly", zh: "很搭" },
            ],
            alternativeExpressions: [
              { textEn: "Great! Here's a free setting spray sample to go with it. Your total is $42.", textZh: "太好了！送您一个定妆喷雾小样搭配使用。一共42美元。", actionHint: "简洁结账加赠品", frequency: "common" },
              { textEn: "Awesome choice! I'm adding a complimentary setting spray sample too — they work perfectly together. That comes to $42.", textZh: "好选择！我再送您一个定妆喷雾小样——搭配使用效果很好。总计42美元。", actionHint: "热情推荐搭配", frequency: "occasional" }
            ],
          },
        ],
      },
    ],
  },

  // ==================== 4. 货币兑换 ====================
  {
    id: "airport-currency-exchange",
    category: "airport",
    titleZh: "货币兑换",
    titleEn: "Currency Exchange",
    description: "在机场货币兑换柜台换外币",
    otherRole: "货币兑换柜台工作人员",
    otherRoleIcon: "💱",
    flows: [
      {
        id: "basic-exchange",
        titleZh: "基本兑换",
        titleEn: "Basic Currency Exchange",
        description: "用人民币兑换当地货币",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to exchange some Chinese yuan for US dollars.",
            textZh: "你好，我想把一些人民币换成美元。",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Sure. How much would you like to exchange?",
            textZh: "好的。您想换多少？",
            alternativeExpressions: [
              { textEn: "Of course. How much do you want to exchange?", textZh: "当然。您要换多少？", actionHint: "简洁回应", frequency: "common" },
              { textEn: "No problem. What amount are you looking to convert?", textZh: "没问题。您打算兑换多少？", actionHint: "稍正式的问法", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "About 5,000 yuan, please.",
            textZh: "大概5000元人民币。",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Today's rate is 1 dollar to 7.25 yuan. So 5,000 yuan would give you approximately $689. There's also a service fee of $8.",
            textZh: "今天的汇率是1美元兑7.25人民币。所以5000元大约能换689美元。还有8美元的服务费。",
            keyPhrases: [
              { en: "today's rate", zh: "今天的汇率" },
              { en: "approximately", zh: "大约" },
              { en: "service fee", zh: "服务费" },
            ],
            alternativeExpressions: [
              { textEn: "The rate right now is 7.25 yuan per dollar. So for 5,000 yuan, you'd get about $689, minus an $8 service fee.", textZh: "现在汇率是7.25人民币兑1美元。5000元大概换689美元，扣8美元手续费。", actionHint: "口语化报汇率", frequency: "common" },
              { textEn: "At today's exchange rate of 7.25, 5,000 yuan comes to roughly $689. Plus there's an $8 processing fee.", textZh: "按今天7.25的汇率，5000元大约是689美元。另外有8美元的手续费。", actionHint: "稍正式地说明", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "That rate seems a bit low. Is there a better rate somewhere?",
            textZh: "这个汇率好像有点低啊。有没有汇率好一点的地方？",
            culturalNote: "机场的汇率通常比市区的银行差。如果不急用，可以到市区再换。但备一点现金在身上以防万一也是好的。",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Airport rates do tend to be a bit higher than banks in the city. You might get a slightly better rate downtown, but this is the current rate we can offer.",
            textZh: "机场汇率确实比市区银行略高一些。市区可能稍微好一点，但这是我们能给的最新汇率了。",
            keyPhrases: [
              { en: "tend to be", zh: "往往是" },
              { en: "slightly better", zh: "稍微好一点" },
              { en: "current rate", zh: "最新汇率" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, airport rates are usually a bit worse than city banks. You could get a slightly better deal downtown, but this is our current rate.", textZh: "是的，机场汇率通常比市区银行差一点。市区可能稍微好些，但这是我们目前的汇率。", actionHint: "坦诚说明", frequency: "common" },
              { textEn: "Honestly, the rate here is a little higher than banks in town. But for the convenience, many people still prefer to exchange here.", textZh: "说实话，这里的汇率比市区银行稍高。但图方便的话，很多人还是选择在这换。", actionHint: "坦诚但合理解释", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, let me just exchange 2,000 yuan for now.",
            textZh: "好吧，那我先换2000人民币。",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "That comes to $267 after the $8 fee. May I see your passport, please? I need it for the transaction.",
            textZh: "扣掉8美元手续费后是267美元。请出示您的护照。办理兑换需要用到。",
            keyPhrases: [
              { en: "comes to", zh: "一共是" },
              { en: "transaction", zh: "交易" },
            ],
            alternativeExpressions: [
              { textEn: "After the $8 fee, that comes to $267. I'll need to see your passport for the transaction.", textZh: "扣掉8美元手续费是267美元。办理需要看一下您的护照。", actionHint: "简洁说明", frequency: "common" },
              { textEn: "That works out to $267 after fees. Could I have your passport, please? We need it for the exchange.", textZh: "扣费后是267美元。请出示护照好吗？兑换需要用到。", actionHint: "礼貌请求证件", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Here you go.",
            textZh: "给您。",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Here's your $267 — two hundreds, three twenties, a five, and two ones. Please count it. And here's your receipt and passport back.",
            textZh: "这是您的267美元——两张100的，三张20的，一张5的，两张1的。请数一下。这是收据和护照还给您。",
            keyPhrases: [
              { en: "please count it", zh: "请数一下" },
              { en: "receipt", zh: "收据" },
            ],
            alternativeExpressions: [
              { textEn: "Here you go — $267. That's two hundreds, three twenties, a five, and two singles. Please check it. And here's your receipt and passport.", textZh: "给您——267美元。两张100，三张20，一张5，两张1。请核对。收据和护照还给您。", actionHint: "逐一清点", frequency: "common" },
              { textEn: "All right, $267 — let me count it out for you. Two hundred, two-twenty, two-forty, two-sixty, two sixty-five, two sixty-seven. Here's the receipt and your passport back.", textZh: "好的，267美元——我给您数一下。200，220，240，260，265，267。收据和护照给您。", actionHint: "当面清点", frequency: "occasional" }
            ],
          },
        ],
      },
      {
        id: "exchange-issues",
        titleZh: "兑换问题",
        titleEn: "Exchange Rate Issues",
        description: "对汇率有疑问或想比较不同面额",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "What's your exchange rate for euros today?",
            textZh: "今天欧元的兑换汇率是多少？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "We're buying euros at 1.05 and selling at 1.12 to the dollar. Which way do you need?",
            textZh: "我们欧元买入价是1比1.05美元，卖出价是1比1.12美元。您需要哪种？",
            keyPhrases: [
              { en: "buying", zh: "买入" },
              { en: "selling", zh: "卖出" },
              { en: "which way", zh: "哪种" },
            ],
            alternativeExpressions: [
              { textEn: "Our euro buy rate is 1.05 and the sell rate is 1.12 per dollar. Are you buying euros or selling?", textZh: "我们欧元买入价1.05，卖出价1.12兑1美元。您是买欧元还是卖？", actionHint: "简洁报价", frequency: "common" },
              { textEn: "For euros, we buy at 1.05 and sell at 1.12 to the dollar. Which direction do you need?", textZh: "欧元的话，买入1.05，卖出1.12兑美元。您需要哪个方向？", actionHint: "清晰说明双向汇率", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I need to buy euros. I have dollars.",
            textZh: "我需要买欧元。我有美元。",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Okay, so the selling rate applies. For $500, you'd get approximately 446 euros after our commission.",
            textZh: "好的，那适用卖出价。500美元扣除手续费后大约能换446欧元。",
            keyPhrases: [
              { en: "selling rate applies", zh: "适用卖出价" },
              { en: "commission", zh: "手续费/佣金" },
            ],
            alternativeExpressions: [
              { textEn: "Right, so that's the sell rate. For $500 you'll get around 446 euros after commission.", textZh: "好的，适用卖出价。500美元扣除手续费后大概能换446欧元。", actionHint: "确认并计算", frequency: "common" },
              { textEn: "Got it. At the selling rate, $500 converts to approximately 446 euros once we deduct the commission.", textZh: "明白了。按卖出价，500美元扣手续费后约446欧元。", actionHint: "正式说明换算", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "What's the commission exactly?",
            textZh: "手续费具体是多少？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "It's a flat fee of $10 per transaction, regardless of the amount.",
            textZh: "每笔交易固定收10美元手续费，不论金额多少。",
            keyPhrases: [
              { en: "flat fee", zh: "固定费用" },
              { en: "per transaction", zh: "每笔交易" },
              { en: "regardless of", zh: "不论" },
            ],
            alternativeExpressions: [
              { textEn: "It's a flat $10 per transaction, no matter the amount.", textZh: "每笔固定10美元，不论金额。", actionHint: "简洁回答", frequency: "common" },
              { textEn: "We charge $10 per exchange — it's the same fee regardless of how much you change.", textZh: "每次兑换收10美元——不管换多少都是这个价。", actionHint: "补充说明", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Can I get small bills? I'll need change for taxis and tips.",
            textZh: "可以换小面额的吗？我打车和给小费需要零钱。",
            culturalNote: "在欧美国家，准备一些小面额纸币（5、10、20）很实用，打车、给小费、买小东西都方便。",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Absolutely. I'll give you a mix of twenties, tens, and fives. I'll also include some coins.",
            textZh: "当然。我给您一些20、10和5欧元面额的混合搭配。也会给您一些硬币。",
            keyPhrases: [
              { en: "a mix of", zh: "混合搭配" },
              { en: "include some coins", zh: "给一些硬币" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! I'll give you a mix — some twenties, tens, and fives, plus a few coins.", textZh: "没问题！给您搭配一下——一些20、10和5的，再加一些硬币。", actionHint: "口语化回应", frequency: "common" },
              { textEn: "Of course. I'll break it into twenties, tens, fives, and some coins so you have plenty of change.", textZh: "当然。我拆成20、10、5面额的，再加些硬币，这样零钱够用。", actionHint: "实用考虑", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Great. Also, can I exchange euros back to dollars on my way home if I have leftovers?",
            textZh: "好的。另外，回国时如果有剩余的欧元，可以换回美元吗？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Yes, but the rate will be different — it'll be the buying rate at that time. I'd recommend keeping your receipt, some places waive the fee for reverse exchanges.",
            textZh: "可以，但汇率会不同——是当时的买入价。建议保留好收据，有些地方反向兑换可以免手续费。",
            keyPhrases: [
              { en: "buying rate", zh: "买入价" },
              { en: "waive the fee", zh: "免手续费" },
              { en: "reverse exchanges", zh: "反向兑换" },
            ],
            alternativeExpressions: [
              { textEn: "You can, but the rate will be different — the buy rate at that time. Hang on to your receipt; some places waive the fee for converting back.", textZh: "可以，但汇率不同——当时的买入价。收据留好，有的地方换回去可以免手续费。", actionHint: "口语化提醒", frequency: "common" },
              { textEn: "Sure, but you'll get the buying rate, which is lower. Keep the receipt — it might help you skip the fee for a reverse exchange.", textZh: "可以，但是按买入价，比较低。收据留着——换回去时可能免手续费。", actionHint: "解释汇率差异", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Good tip. Let's go ahead with the $500 exchange.",
            textZh: "好建议。那就换500美元的吧。",
          },
        ],
      },
    ],
  },

  // ==================== 5. ATM取款 ====================
  {
    id: "airport-atm-withdrawal",
    category: "airport",
    titleZh: "ATM取款",
    titleEn: "ATM Withdrawal",
    description: "在机场ATM用银行卡取外币现金",
    otherRole: "ATM / 银行服务人员",
    otherRoleIcon: "🏧",
    flows: [
      {
        id: "basic-atm",
        titleZh: "正常取款",
        titleEn: "Standard ATM Withdrawal",
        description: "顺利使用ATM取现金",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, is there an ATM nearby?",
            textZh: "请问附近有ATM吗？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Yes, there's one right around the corner next to the currency exchange booth. It accepts international cards.",
            textZh: "有的，转角货币兑换柜台旁边就有一台。支持国际银行卡。",
            keyPhrases: [
              { en: "right around the corner", zh: "就在转角" },
              { en: "international cards", zh: "国际银行卡" },
            ],
            alternativeExpressions: [
              { textEn: "There's one just around the corner, next to the currency exchange. It takes international cards.", textZh: "转角就有一台，货币兑换柜台旁边。可以用国际卡。", actionHint: "简洁指路", frequency: "common" },
              { textEn: "Yep! Right around the corner by the exchange booth. It supports international bank cards.", textZh: "有的！就在兑换柜台旁边拐角处。支持国际银行卡。", actionHint: "口语化指路", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Does it have an English language option?",
            textZh: "有英文界面吗？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Yes, you can switch the language on the first screen. Just select English.",
            textZh: "有的，在第一个界面可以切换语言。选English就行。",
            alternativeExpressions: [
              { textEn: "Yeah, just change the language on the home screen — pick English and you're good.", textZh: "有，在主界面切换语言——选English就行。", actionHint: "口语化指导", frequency: "common" },
              { textEn: "Sure, there's a language option right on the first screen. Just tap English.", textZh: "有的，第一个界面就有语言选项。点English就好。", actionHint: "简洁说明", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "It's asking me whether to use the local conversion rate or my bank's rate. Which one should I pick?",
            textZh: "它问我用当地的汇率还是我银行的汇率。我该选哪个？",
            culturalNote: "ATM取款时如果弹出'conversion rate'选项，一般选择'without conversion'或'decline conversion'更划算，让你自己的银行按汇率结算。",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "I'd recommend choosing your bank's rate — select 'without conversion.' The ATM's rate usually includes a markup.",
            textZh: "我建议选你银行的汇率——选'without conversion'。ATM的汇率通常有加价。",
            keyPhrases: [
              { en: "without conversion", zh: "不转换（用银行汇率）" },
              { en: "markup", zh: "加价" },
            ],
            alternativeExpressions: [
              { textEn: "Go with your own bank's rate — hit 'without conversion.' The ATM's conversion rate tends to be worse.", textZh: "选你银行自己的汇率——点'without conversion'。ATM的兑换率通常更差。", actionHint: "口语化建议", frequency: "common" },
              { textEn: "Pick the option that says 'decline conversion' or 'without conversion.' Your bank usually gives a better rate than the ATM.", textZh: "选'decline conversion'或'without conversion'。你银行的汇率一般比ATM的好。", actionHint: "详细指导", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. What's the maximum I can withdraw at once?",
            textZh: "明白了。单次最多能取多少？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "This ATM allows up to $500 per transaction. But your bank may have its own daily limit.",
            textZh: "这台ATM单次最多取500美元。但你的银行可能有自己的每日限额。",
            keyPhrases: [
              { en: "per transaction", zh: "每次交易" },
              { en: "daily limit", zh: "每日限额" },
            ],
            alternativeExpressions: [
              { textEn: "You can take out up to $500 at a time here, but your bank might have its own daily cap.", textZh: "这台单次最多取500美元，但你银行可能有自己的每日上限。", actionHint: "口语化说明", frequency: "common" },
              { textEn: "The machine limit is $500 per withdrawal. Just check with your bank — they may have a separate daily limit.", textZh: "这台机器每次最多取500美元。跟你银行确认一下——他们可能有单独的每日限额。", actionHint: "提醒确认银行限制", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "My card just got declined. It says 'transaction not authorized.' What should I do?",
            textZh: "我的卡被拒了。显示'transaction not authorized'。怎么办？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "That sometimes happens with foreign cards. You may need to call your bank to authorize international withdrawals. There's also free Wi-Fi here if you need to use your banking app.",
            textZh: "外国卡有时会这样。你可能需要打电话给银行授权海外取款。这里有免费Wi-Fi，如果你需要用银行APP的话。",
            keyPhrases: [
              { en: "got declined", zh: "被拒了" },
              { en: "authorize", zh: "授权" },
              { en: "international withdrawals", zh: "海外取款" },
            ],
            alternativeExpressions: [
              { textEn: "Foreign cards sometimes get blocked. You might need to call your bank to authorize overseas transactions. There's free Wi-Fi here if you need your banking app.", textZh: "外国卡有时会被拦截。可能需要打电话给银行授权海外交易。这里有免费WiFi，需要用银行APP的话。", actionHint: "口语化解释", frequency: "common" },
              { textEn: "That can happen with international cards. Try calling your bank to enable overseas withdrawals. You can use the free airport Wi-Fi to get into your banking app.", textZh: "国际卡有时会这样。试着打银行电话开通海外取款。可以用机场免费WiFi登录银行APP。", actionHint: "给出解决方案", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "That makes sense. I'll call my bank. Thanks for the help!",
            textZh: "有道理。我打电话给银行。谢谢帮忙！",
          },
        ],
      },
      {
        id: "atm-problems",
        titleZh: "ATM故障",
        titleEn: "ATM Problems",
        description: "ATM出故障或吞卡时求助",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, the ATM swallowed my card! It didn't come back out.",
            textZh: "不好意思，ATM把我的卡吞了！没有退出来。",
            vocabNotes: {
              swallowed: {
                meaningInContext: "在这里指ATM机把卡吸入没有退还",
                similarUsage: "类似表达：The machine ate my card.",
              },
            },
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn: "I'm sorry about that. This can happen if the transaction timed out. Do you remember which ATM it was?",
            textZh: "很抱歉。交易超时有时会这样。你记得是哪台ATM吗？",
            keyPhrases: [
              { en: "timed out", zh: "超时" },
              { en: "which ATM", zh: "哪台ATM" },
            ],
            alternativeExpressions: [
              { textEn: "Oh no, I'm sorry about that. It could be a timeout issue. Do you remember which ATM you used?", textZh: "哎呀，很抱歉。可能是超时了。你记得用的哪台ATM吗？", actionHint: "表示同情", frequency: "common" },
              { textEn: "That's really frustrating, I'm sorry. This sometimes happens when the transaction times out. Which ATM were you at?", textZh: "这真的很烦人，很抱歉。交易超时时有时会这样。你用的哪台ATM？", actionHint: "共情并询问", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "It's the one next to Gate 15. Can you get my card back?",
            textZh: "15号登机口旁边那台。能帮我把卡取出来吗？",
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn: "Unfortunately, we can't retrieve cards immediately — it requires a technician to open the machine. It usually takes 24 to 48 hours. Can I get your name and contact details? We'll mail the card to your address.",
            textZh: "很遗憾，我们没法立刻取出卡——需要技术人员来开机器。通常需要24到48小时。能告诉我您的姓名和联系方式吗？我们会把卡寄到您的地址。",
            keyPhrases: [
              { en: "retrieve", zh: "取回" },
              { en: "technician", zh: "技术人员" },
              { en: "contact details", zh: "联系方式" },
            ],
            alternativeExpressions: [
              { textEn: "I'm afraid we can't get the card out right away — a technician needs to open the machine. It usually takes 24 to 48 hours. If you give me your name and contact info, we'll mail it to you.", textZh: "恐怕不能马上取出卡——需要技术人员来开机器。通常24到48小时。留下姓名和联系方式，我们会寄给您。", actionHint: "口语化解释流程", frequency: "common" },
              { textEn: "Retrieving swallowed cards takes a technician, so it's a 24-to-48-hour process. Can I get your details? We'll send the card to your address.", textZh: "取出吞掉的卡需要技术人员，所以得24到48小时。能留下您的信息吗？我们会把卡寄到您的地址。", actionHint: "说明等待时间", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "But I'm leaving the country today! I need cash. Is there anything else I can do?",
            textZh: "但我今天就出境了！我需要现金。还有什么办法吗？",
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn: "I'd suggest calling your bank to block the card and request an emergency replacement. In the meantime, you can use a different card at another ATM, or go to the currency exchange counter with cash.",
            textZh: "建议你打电话给银行挂失这张卡，申请紧急补卡。同时，你可以用另一张卡在别的ATM取款，或者拿现金去货币兑换柜台换。",
            keyPhrases: [
              { en: "block the card", zh: "挂失（冻结）卡" },
              { en: "emergency replacement", zh: "紧急补卡" },
              { en: "in the meantime", zh: "同时/在此期间" },
            ],
            alternativeExpressions: [
              { textEn: "I'd say call your bank first to block the card and get an emergency replacement. In the meantime, use another card or exchange cash at the currency counter.", textZh: "我建议先打电话给银行挂失并申请紧急补卡。同时可以用其他卡或者去货币兑换柜台换现金。", actionHint: "口语化建议", frequency: "common" },
              { textEn: "Best thing to do is call your bank right away — block that card and request a new one. You can use a different card at another machine or get cash at the exchange booth.", textZh: "最好的办法是马上打银行电话——挂失那张卡，申请新卡。可以用别的卡在其他机器取款，或去兑换柜台换现金。", actionHint: "给出具体步骤", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Can you give me a written confirmation that the ATM took my card? My bank will need proof.",
            textZh: "能给我一个书面证明ATM吞了我的卡吗？我的银行需要证据。",
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn: "Of course. I'll prepare an incident report with the ATM number, date, time, and my signature. Give me a few minutes.",
            textZh: "当然。我给你准备一份事故报告，上面有ATM编号、日期、时间和我的签名。请稍等几分钟。",
            keyPhrases: [
              { en: "incident report", zh: "事故报告" },
              { en: "signature", zh: "签名" },
            ],
            alternativeExpressions: [
              { textEn: "Sure. I'll put together an incident report with the ATM number, date, time, and my signature. Give me a couple of minutes.", textZh: "好的。我准备一份事故报告，写上ATM编号、日期、时间和我的签名。等我几分钟。", actionHint: "口语化确认", frequency: "common" },
              { textEn: "Absolutely. Let me write up an incident report for you — it'll have all the details and my signature. Just a moment.", textZh: "当然。我给你写一份事故报告——上面会有所有细节和我的签名。请稍等。", actionHint: "正式回应", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. I really appreciate your help.",
            textZh: "谢谢。真的非常感谢你的帮助。",
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn: "No problem. Here's the report. I've also written the customer service number you can call for follow-up. Good luck!",
            textZh: "不客气。这是报告。我也写了客服电话，你可以打电话跟进。祝顺利！",
            keyPhrases: [
              { en: "follow-up", zh: "跟进" },
            ],
            alternativeExpressions: [
              { textEn: "Here's the report. I've also written down a customer service number for follow-up. Good luck with everything!", textZh: "报告给您。我还写了客服电话方便后续跟进。祝一切顺利！", actionHint: "简洁交接", frequency: "common" },
              { textEn: "All done! Here's your report and the contact number for follow-up. Hope it gets sorted out quickly!", textZh: "好了！报告和跟进联系电话都在这。希望很快解决！", actionHint: "积极收尾", frequency: "occasional" }
            ],
          },
        ],
      },
    ],
  },

  // ==================== 6. 贵宾室进入 ====================
  {
    id: "airport-lounge-access",
    category: "airport",
    titleZh: "贵宾室进入",
    titleEn: "Lounge Access",
    description: "进入机场贵宾室，出示资格或现场购买",
    otherRole: "贵宾室前台",
    otherRoleIcon: "🛋️",
    flows: [
      {
        id: "card-access",
        titleZh: "信用卡会员进入",
        titleEn: "Credit Card Access",
        description: "用信用卡会籍进入贵宾室",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to access the lounge. I have a Priority Pass.",
            textZh: "你好，我想进贵宾室。我有Priority Pass。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Welcome! May I see your Priority Pass card and boarding pass, please?",
            textZh: "欢迎！请出示您的Priority Pass卡和登机牌。",
            keyPhrases: [
              { en: "Priority Pass", zh: "优先通行证（贵宾室会员卡）" },
              { en: "boarding pass", zh: "登机牌" },
            ],
            alternativeExpressions: [
              { textEn: "Good evening! Could I see your Priority Pass and boarding pass, please?", textZh: "晚上好！请出示您的Priority Pass卡和登机牌。", actionHint: "不同时段问候", frequency: "common" },
              { textEn: "Hello and welcome! I'll just need your Priority Pass card and your boarding pass to check you in.", textZh: "您好，欢迎！我只需要您的Priority Pass卡和登机牌来办理入场。", actionHint: "详细说明目的", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Here you go. I have the digital version on my phone — is that okay?",
            textZh: "给您。我手机上有电子版的——可以吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "The digital version is fine! Let me scan it... Perfect, you're all set. Your pass includes complimentary access for up to three hours. Would you like to bring a guest? There's a $35 charge per additional visitor.",
            textZh: "电子版可以！我扫一下……好了，没问题。您的会籍包含最多三小时的免费使用。需要带客人吗？每位额外访客收费35美元。",
            keyPhrases: [
              { en: "digital version", zh: "电子版" },
              { en: "complimentary access", zh: "免费使用" },
              { en: "additional visitor", zh: "额外访客" },
            ],
            alternativeExpressions: [
              { textEn: "The digital pass works great! Let me scan it... All good. You get complimentary access for three hours. Bringing a guest? It's $35 per extra person.", textZh: "电子版完全可以！我扫一下……没问题。免费使用三小时。带客人吗？每位额外35美元。", actionHint: "口语化确认", frequency: "common" },
              { textEn: "Sure, the app version is fine. Scanning now... You're all set! Three hours of free access. If you have a guest, there's a $35 charge per person.", textZh: "APP版的也行。扫一下……好了！三小时免费使用。如果带客人，每位收35美元。", actionHint: "简洁高效", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "No, it's just me. What facilities does the lounge have?",
            textZh: "不用，就我一个人。贵宾室有什么设施？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "We have a buffet with hot and cold food, a full bar, showers, Wi-Fi, charging stations, and quiet rest areas. The showers are first-come, first-served — shall I put you on the list?",
            textZh: "我们有冷热自助餐、全酒吧、淋浴间、Wi-Fi、充电站和安静休息区。淋浴间先到先得——需要帮您登记排队吗？",
            keyPhrases: [
              { en: "buffet", zh: "自助餐" },
              { en: "full bar", zh: "全酒吧" },
              { en: "charging stations", zh: "充电站" },
              { en: "first-come, first-served", zh: "先到先得" },
            ],
            alternativeExpressions: [
              { textEn: "We've got a buffet, a full bar, showers, Wi-Fi, charging stations, and quiet areas for resting. Showers are first come, first served — want me to add you to the list?", textZh: "有自助餐、全酒吧、淋浴间、WiFi、充电站和安静休息区。淋浴先到先得——要排队吗？", actionHint: "口语化介绍设施", frequency: "common" },
              { textEn: "There's quite a lot! Hot and cold buffet, bar, showers, Wi-Fi, power stations, and rest areas. If you'd like a shower, I can put your name on the wait list.", textZh: "设施很丰富！冷热自助餐、酒吧、淋浴、WiFi、充电站和休息区。如果想洗澡，我可以帮您排号。", actionHint: "逐一列举", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. A shower would be great — I just got off a long flight.",
            textZh: "好的，麻烦了。能洗个澡太好了——我刚下长途航班。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'll add you to the shower queue. There's about a 15-minute wait. We'll call your name when it's ready. Towels and toiletries are provided.",
            textZh: "我帮您加入淋浴排队。大约需要等15分钟。好了会叫您的名字。毛巾和洗漱用品都有提供。",
            keyPhrases: [
              { en: "shower queue", zh: "淋浴排队" },
              { en: "towels and toiletries", zh: "毛巾和洗漱用品" },
            ],
            alternativeExpressions: [
              { textEn: "You're on the list! About a 15-minute wait. We'll call you when it's your turn. Towels and toiletries are all provided.", textZh: "已经排上了！大约等15分钟。轮到您时会叫您。毛巾和洗漱用品都备好了。", actionHint: "口语化确认", frequency: "common" },
              { textEn: "Done — you're in the shower queue. Shouldn't be more than 15 minutes. We'll announce your name, and everything you need is in the shower room.", textZh: "好了——已加入淋浴队列。不会超过15分钟。会广播您的名字，淋浴间里什么都有。", actionHint: "详细告知", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Where should I sit?",
            textZh: "太好了。我该坐哪里？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Anywhere you'd like! The quiet zone is to the left, and the dining area is straight ahead. Enjoy your stay, and please listen for boarding announcements — we don't make gate calls inside the lounge.",
            textZh: "随便坐！安静区在左边，餐饮区往前直走。祝您享受休息时间，请注意听登机广播——贵宾室内不做登机口提醒的。",
            keyPhrases: [
              { en: "quiet zone", zh: "安静区" },
              { en: "boarding announcements", zh: "登机广播" },
              { en: "gate calls", zh: "登机口提醒" },
            ],
            alternativeExpressions: [
              { textEn: "Sit wherever you like! Quiet zone is on the left, food and drinks are straight ahead. Just keep an ear out for your boarding call — we don't announce gates in here.", textZh: "随便坐！安静区在左边，吃的喝的往前走。注意听登机广播——贵宾室里不提醒登机的。", actionHint: "口语化引导", frequency: "common" },
              { textEn: "Make yourself at home! The quiet area is to the left and dining is straight ahead. One thing — do listen for boarding announcements, as we don't make individual gate calls.", textZh: "当自己家一样！安静区在左，餐饮区在前。提醒一下——请留意登机广播，我们不做单独的登机口提醒。", actionHint: "友好提醒", frequency: "occasional" }
            ],
          },
        ],
      },
      {
        id: "pay-per-visit",
        titleZh: "现场付费进入",
        titleEn: "Walk-in Payment",
        description: "没有会员卡，现场付费使用贵宾室",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I don't have a membership card. Can I still use the lounge?",
            textZh: "你好，我没有会员卡。还能用贵宾室吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Absolutely! Walk-in guests are welcome. It's $55 per person for a single visit, which gives you access until your flight departs.",
            textZh: "当然可以！散客也欢迎。单次使用每人55美元，在您航班起飞前都可以使用。",
            keyPhrases: [
              { en: "walk-in guests", zh: "散客" },
              { en: "single visit", zh: "单次使用" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! Walk-ins are welcome. It's $55 per person for a single visit — you can stay until your flight.", textZh: "当然！散客也欢迎。单次每人55美元——在航班起飞前都可以使用。", actionHint: "简洁说明", frequency: "common" },
              { textEn: "Sure! No membership needed. It's $55 per person, and that covers everything until your flight departs.", textZh: "可以！不需要会员。每人55美元，航班起飞前所有服务都包含。", actionHint: "强调无需会员", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a discount if there are two of us?",
            textZh: "两个人有优惠吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "We have a couples deal — $90 for two, so you save $20. Would you like to go with that?",
            textZh: "我们有双人优惠——两人90美元，省20美元。要选这个吗？",
            keyPhrases: [
              { en: "couples deal", zh: "双人优惠" },
              { en: "save", zh: "省" },
            ],
            alternativeExpressions: [
              { textEn: "For two people, we have a deal — $90 instead of $110. Want to go with that?", textZh: "两个人的话有优惠——90美元而不是110。要选这个吗？", actionHint: "口语化推荐", frequency: "common" },
              { textEn: "Actually, we offer a couples package — $90 for both, saving you $20. Shall I set that up?", textZh: "其实我们有双人套餐——两人90美元，省20。要帮你安排吗？", actionHint: "主动推荐优惠", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds reasonable. What's included?",
            textZh: "听着还行。包含什么？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Unlimited food and non-alcoholic beverages, Wi-Fi, newspapers, and comfortable seating. Alcoholic drinks are available from the bar — the first two are included, after that it's $8 per drink.",
            textZh: "无限量的食物和非酒精饮料、Wi-Fi、报纸和舒适座椅。吧台有酒精饮料——前两杯包含在内，之后每杯8美元。",
            keyPhrases: [
              { en: "unlimited", zh: "无限量" },
              { en: "non-alcoholic beverages", zh: "非酒精饮料" },
              { en: "the first two are included", zh: "前两杯包含在内" },
            ],
            alternativeExpressions: [
              { textEn: "You get unlimited food, soft drinks, Wi-Fi, papers, and comfy seating. There's a bar too — first two drinks are free, then $8 each after that.", textZh: "无限量的食物、软饮、WiFi、报纸和舒适座位。还有酒吧——前两杯免费，之后每杯8美元。", actionHint: "口语化介绍", frequency: "common" },
              { textEn: "Everything's included — food, non-alcoholic drinks, Wi-Fi, and comfortable seating. Alcoholic drinks are at the bar; the first two are on the house.", textZh: "全包——食物、非酒精饮料、WiFi和舒适座位。酒精饮料在吧台，前两杯免费。", actionHint: "突出全包", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "We'll take the couples deal. Can I pay by card?",
            textZh: "我们选双人优惠。可以刷卡吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course. Just tap or insert your card here... Great, you're all set. Here are two access passes. The lounge closes at 11 PM.",
            textZh: "当然。在这里感应或插卡……好了，可以了。这是两张通行证。贵宾室晚上11点关闭。",
            keyPhrases: [
              { en: "access passes", zh: "通行证" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! Just tap or insert here... Done. Here are two passes. Just so you know, the lounge closes at 11 PM.", textZh: "好的！在这里感应或插卡……好了。两张通行证。提醒一下，贵宾室晚上11点关门。", actionHint: "简洁办理", frequency: "common" },
              { textEn: "No problem. Card here, please... Perfect! Two access passes for you. We close at 11 PM tonight.", textZh: "没问题。卡放这里……好了！两张通行证。今晚11点关门。", actionHint: "快速办理", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "My flight is at 9 PM, so that should be fine. Is there a place to nap?",
            textZh: "我的航班晚上9点，应该没问题。有地方可以小睡吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes! We have reclining chairs in the rest area. You can also set an alarm with our front desk so we'll wake you 45 minutes before your flight.",
            textZh: "有的！休息区有躺椅。也可以让前台设个闹钟，我们会在您航班起飞前45分钟叫醒您。",
            keyPhrases: [
              { en: "reclining chairs", zh: "躺椅" },
              { en: "set an alarm", zh: "设闹钟" },
            ],
            alternativeExpressions: [
              { textEn: "Sure do! There are recliners in the rest area. We can also set a wake-up call 45 minutes before your flight if you'd like.", textZh: "当然有！休息区有躺椅。如果需要，我们还可以在航班起飞前45分钟叫醒您。", actionHint: "口语化介绍", frequency: "common" },
              { textEn: "Absolutely. The rest area has reclining chairs, and we offer a wake-up service — just let us know your flight time and we'll nudge you 45 minutes early.", textZh: "当然。休息区有躺椅，我们有叫醒服务——告诉我们航班时间，会提前45分钟叫您。", actionHint: "详细说明服务", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "That's a great service. Thank you!",
            textZh: "服务真好。谢谢！",
          },
        ],
      },
    ],
  },

  // ==================== 7. 贵宾室服务 ====================
  {
    id: "airport-lounge-services",
    category: "airport",
    titleZh: "贵宾室服务使用",
    titleEn: "Lounge Services",
    description: "在贵宾室内使用各项服务（餐饮、淋浴、商务设施等）",
    otherRole: "贵宾室服务员",
    otherRoleIcon: "🍽️",
    flows: [
      {
        id: "food-and-drink",
        titleZh: "餐饮服务",
        titleEn: "Food & Drink Service",
        description: "在贵宾室用餐和点饮料",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, is the food self-service or do I order from a menu?",
            textZh: "请问，食物是自助的还是点菜的？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "The buffet is self-service — help yourself to anything on the counter. But we also have a made-to-order menu for hot dishes. Would you like to see it?",
            textZh: "自助餐是自取的——台面上的随便拿。但我们也有现做热菜的点餐菜单。需要看看吗？",
            keyPhrases: [
              { en: "help yourself", zh: "自己随便拿" },
              { en: "made-to-order", zh: "现做的" },
            ],
            alternativeExpressions: [
              { textEn: "The buffet is self-service — grab whatever you like. We also have a menu for hot dishes made to order. Want to take a look?", textZh: "自助餐随便取。我们也有现做热菜的菜单。要看看吗？", actionHint: "口语化介绍", frequency: "common" },
              { textEn: "Help yourself at the buffet counter! If you'd like something hot and freshly made, we also have a small à la carte menu.", textZh: "自助台面上的随意拿！如果想吃现做的热菜，我们也有单点菜单。", actionHint: "区分自助和点餐", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. Do you have anything vegetarian?",
            textZh: "好的。有素食选项吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "We have a vegetable stir-fry with rice, a garden salad, and mushroom soup. The buffet also has some vegetarian options labeled with a green tag.",
            textZh: "我们有蔬菜炒饭、田园沙拉和蘑菇汤。自助区也有一些素食选项，标着绿色标签。",
            keyPhrases: [
              { en: "vegetarian options", zh: "素食选项" },
              { en: "labeled with", zh: "标着" },
              { en: "green tag", zh: "绿色标签" },
            ],
            alternativeExpressions: [
              { textEn: "We've got a veggie stir-fry with rice, a garden salad, and mushroom soup. The buffet also has some vegetarian dishes — look for the green labels.", textZh: "有蔬菜炒饭、田园沙拉和蘑菇汤。自助区也有素食，认准绿色标签。", actionHint: "口语化介绍素食", frequency: "common" },
              { textEn: "For vegetarian options, I can make you a stir-fry with rice, a salad, or mushroom soup. There are also green-tagged items on the buffet.", textZh: "素食的话，可以给您做蔬菜炒饭、沙拉或蘑菇汤。自助区也有绿色标签的素食。", actionHint: "分别介绍选项", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I'll have the mushroom soup, please. And can I get a coffee?",
            textZh: "我要蘑菇汤。再来杯咖啡可以吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Sure! We have an espresso machine by the beverage station — you can make your own, or I can bring you a cappuccino or latte.",
            textZh: "当然！饮品区有意式咖啡机——可以自己做，或者我给您端一杯卡布奇诺或拿铁。",
            keyPhrases: [
              { en: "beverage station", zh: "饮品区" },
              { en: "espresso machine", zh: "意式咖啡机" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! There's an espresso machine at the drink station — you can make your own, or I can bring you a cappuccino or latte.", textZh: "当然！饮品区有咖啡机——可以自己做，或者我帮您做一杯卡布奇诺或拿铁。", actionHint: "提供两种选择", frequency: "common" },
              { textEn: "Absolutely. You can help yourself at the espresso machine, or just tell me what you want — cappuccino, latte, you name it.", textZh: "当然。可以去咖啡机自己做，或者告诉我您想喝什么——卡布奇诺、拿铁，随便点。", actionHint: "灵活提供服务", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "A latte would be great, thank you. Is the bar open yet?",
            textZh: "来杯拿铁吧，谢谢。吧台开了吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "The bar opens at noon. Right now we have juice, sparkling water, and soft drinks. I'll bring your latte and soup shortly.",
            textZh: "吧台中午开。现在有果汁、气泡水和软饮料。我马上给您端拿铁和汤。",
            keyPhrases: [
              { en: "sparkling water", zh: "气泡水" },
              { en: "soft drinks", zh: "软饮料" },
              { en: "shortly", zh: "马上" },
            ],
            alternativeExpressions: [
              { textEn: "The bar doesn't open till noon. For now, we have juice, sparkling water, and sodas. I'll get your latte and soup right away.", textZh: "酒吧中午才开。现在有果汁、气泡水和碳酸饮料。拿铁和汤我马上给您端来。", actionHint: "口语化告知", frequency: "common" },
              { textEn: "Alcohol is available from noon — right now we have juices, sparkling water, and soft drinks. Let me go get your latte and soup.", textZh: "酒精饮品中午开始供应——目前有果汁、气泡水和软饮。我去给您拿拿铁和汤。", actionHint: "清晰告知时间", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "No rush. Also, where can I charge my phone?",
            textZh: "不着急。另外，在哪里可以给手机充电？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Every seat has a power outlet and a USB port underneath the side table. If you need a charging cable, just ask at the front desk — we have Lightning and USB-C available.",
            textZh: "每个座位的边桌下面都有电源插座和USB接口。如果需要充电线，找前台要就行——有Lightning和USB-C的。",
            keyPhrases: [
              { en: "power outlet", zh: "电源插座" },
              { en: "USB port", zh: "USB接口" },
              { en: "charging cable", zh: "充电线" },
            ],
            alternativeExpressions: [
              { textEn: "Every seat has a power outlet and USB port under the side table. Need a charging cable? The front desk has Lightning and USB-C.", textZh: "每个座位边桌下面都有插座和USB口。需要充电线吗？前台有Lightning和USB-C的。", actionHint: "简洁告知", frequency: "common" },
              { textEn: "There are outlets and USB ports at every seat — just look under the side table. If you forgot your cable, we've got Lightning and USB-C available at the front desk.", textZh: "每个座位都有插座和USB口——边桌下面找。如果忘带充电线，前台有Lightning和USB-C的。", actionHint: "补充借用说明", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Great, I see it. Thanks for the help!",
            textZh: "看到了。谢谢帮忙！",
          },
        ],
      },
      {
        id: "shower-and-business",
        titleZh: "淋浴和商务设施",
        titleEn: "Shower & Business Facilities",
        description: "使用贵宾室的淋浴间和商务设施",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'd like to take a shower. How does it work?",
            textZh: "我想洗个澡。怎么用？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "The showers are right through that hallway. Each room has fresh towels, shampoo, conditioner, and body wash. You just need to sign in here.",
            textZh: "淋浴间在那个走廊里。每间有干净毛巾、洗发水、护发素和沐浴露。在这里登记一下就行。",
            keyPhrases: [
              { en: "sign in", zh: "登记" },
              { en: "shampoo, conditioner", zh: "洗发水、护发素" },
              { en: "body wash", zh: "沐浴露" },
            ],
            alternativeExpressions: [
              { textEn: "The showers are down that hallway. Each one comes with fresh towels, shampoo, conditioner, and body wash. Just sign in here.", textZh: "淋浴间在走廊那边。每间有干净毛巾、洗发水、护发素和沐浴露。在这里签个到。", actionHint: "口语化指引", frequency: "common" },
              { textEn: "Head through that hallway for the showers. Towels and toiletries are all there for you. I'll just need you to sign in.", textZh: "走那个走廊就是淋浴间。毛巾和洗漱用品都给你准备好了。签个到就行。", actionHint: "简洁指引", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a time limit?",
            textZh: "有时间限制吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "We ask that you keep it under 30 minutes so other guests can use the facility. There's a gentle knock at 25 minutes as a reminder.",
            textZh: "我们建议不超过30分钟，方便其他客人使用。25分钟时会轻敲门提醒。",
            keyPhrases: [
              { en: "time limit", zh: "时间限制" },
              { en: "gentle knock", zh: "轻敲门" },
              { en: "reminder", zh: "提醒" },
            ],
            alternativeExpressions: [
              { textEn: "We ask you to keep it under 30 minutes so others can use the shower too. We'll give you a gentle knock at 25 minutes.", textZh: "请控制在30分钟以内，方便其他人也能用。25分钟时会轻轻敲门提醒。", actionHint: "口语化说明规则", frequency: "common" },
              { textEn: "Please try to wrap up within 30 minutes — there are others waiting. You'll get a friendly knock at the 25-minute mark.", textZh: "请尽量在30分钟内结束——后面还有人等。25分钟时会友善地敲门提醒。", actionHint: "委婉说明时限", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "That's fine. Also, is there a printer I can use? I need to print my hotel reservation.",
            textZh: "没问题。另外，有打印机可以用吗？我需要打印酒店预订单。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, our business center has a printer, scanner, and two computers. It's in the room to the right of the dining area. You can also connect to the printer via Wi-Fi from your own device.",
            textZh: "有的，我们的商务中心有打印机、扫描仪和两台电脑。在餐饮区右边的房间里。也可以用自己的设备通过Wi-Fi连接打印机。",
            keyPhrases: [
              { en: "business center", zh: "商务中心" },
              { en: "scanner", zh: "扫描仪" },
              { en: "connect via Wi-Fi", zh: "通过Wi-Fi连接" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely! Our business center has a printer, scanner, and two PCs, just to the right of the dining area. You can also print wirelessly from your own device.", textZh: "有的！商务中心有打印机、扫描仪和两台电脑，就在餐饮区右边。也可以用自己的设备无线打印。", actionHint: "口语化介绍", frequency: "common" },
              { textEn: "Yes, there's a fully equipped business center near the dining area — printer, scanner, computers. You can print from your own laptop via Wi-Fi too.", textZh: "有的，餐饮区旁边有设备齐全的商务中心——打印机、扫描仪、电脑。也可以用自己的笔记本通过WiFi打印。", actionHint: "强调设备齐全", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Is printing free?",
            textZh: "打印免费吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, up to 10 pages. If you need more, it's 25 cents per page. Color printing is 50 cents per page.",
            textZh: "是的，10页以内免费。超过的话每页25美分。彩色打印每页50美分。",
            alternativeExpressions: [
              { textEn: "Yep, up to 10 pages for free. After that, it's 25 cents a page, or 50 cents for color.", textZh: "是的，10页以内免费。之后每页25美分，彩打50美分。", actionHint: "简洁报价", frequency: "common" },
              { textEn: "The first 10 pages are complimentary. Beyond that, it's 25 cents for black-and-white and 50 cents for color.", textZh: "前10页免费。超过的话黑白25美分，彩色50美分。", actionHint: "明确区分价格", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Two pages should be enough. One more question — do you have any sleeping pods or quiet rooms?",
            textZh: "两页就够了。再问一下——有睡眠舱或安静的房间吗？",
            vocabNotes: {
              "sleeping pods": {
                meaningInContext: "在这里指机场贵宾室的小型独立睡眠舱",
                similarUsage: "类似表达：nap rooms, rest pods",
              },
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "We have four nap rooms with reclining beds. They're on a first-come, first-served basis. Right now one is available — would you like me to reserve it for after your shower?",
            textZh: "我们有四间配有躺床的小睡房间。先到先得。现在有一间空的——需要在洗完澡后帮您预留吗？",
            keyPhrases: [
              { en: "nap rooms", zh: "小睡房间" },
              { en: "reclining beds", zh: "躺床" },
              { en: "reserve", zh: "预留" },
            ],
            alternativeExpressions: [
              { textEn: "We have four nap rooms with beds — first come, first served. One is free right now. Want me to hold it for after your shower?", textZh: "我们有四间带床的小睡房——先到先得。现在有一间空的。要在洗完澡后帮您留着吗？", actionHint: "口语化询问", frequency: "common" },
              { textEn: "There are four private rest rooms with reclining beds. One is available right now — I can reserve it for you after your shower if you'd like.", textZh: "有四间配躺床的私人休息室。现在有一间空的——如果需要可以帮您在洗完澡后预留。", actionHint: "正式介绍", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, that would be perfect. Thank you so much!",
            textZh: "好的，那太完美了。非常感谢！",
          },
        ],
      },
    ],
  },

  // ==================== 8. 天气原因改签 ====================
  {
    id: "airport-rebooking-weather",
    category: "airport",
    titleZh: "天气原因改签",
    titleEn: "Weather Rebooking",
    description: "因恶劣天气导致航班取消，需要改签",
    otherRole: "航空公司客服",
    otherRoleIcon: "⛈️",
    flows: [
      {
        id: "basic-rebooking",
        titleZh: "基本改签流程",
        titleEn: "Basic Rebooking Process",
        description: "航班因天气取消后的标准改签",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "My flight just got cancelled. The screen says it's due to severe weather. What do I do?",
            textZh: "我的航班刚被取消了。屏幕上说是因为恶劣天气。我该怎么办？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "I'm sorry about that. Can I see your boarding pass? I'll check what options we have to get you rebooked.",
            textZh: "很抱歉。能看一下您的登机牌吗？我查查有什么改签选项。",
            keyPhrases: [
              { en: "got cancelled", zh: "被取消了" },
              { en: "rebooked", zh: "改签" },
              { en: "severe weather", zh: "恶劣天气" },
            ],
            alternativeExpressions: [
              { textEn: "I'm really sorry about that. May I see your boarding pass? Let me check what rebooking options are available.", textZh: "真的很抱歉。能看看您的登机牌吗？我查查有什么改签选项。", actionHint: "表示同情", frequency: "common" },
              { textEn: "That's really frustrating. Can I take a look at your boarding pass? I'll see what flights we can get you on.", textZh: "这确实让人着急。能看看您的登机牌吗？我看看能给您安排什么航班。", actionHint: "共情并处理", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Here's my boarding pass. I was supposed to fly to London at 3 PM.",
            textZh: "这是我的登机牌。我原本下午3点飞伦敦。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "I see. The earliest available flight to London is tomorrow morning at 7:15 AM. I can also look at routing you through Paris with a connection tonight — you'd arrive a few hours later but still tomorrow.",
            textZh: "我看一下。最早去伦敦的航班是明天早上7:15。也可以查一下今晚经巴黎转机的——会晚到几小时，但还是明天到。",
            keyPhrases: [
              { en: "earliest available", zh: "最早可用的" },
              { en: "routing you through", zh: "让您经过（转机）" },
              { en: "connection", zh: "转机" },
            ],
            alternativeExpressions: [
              { textEn: "Let me look... The next direct flight to London is at 7:15 AM tomorrow. Or I could route you through Paris tonight — you'd still arrive tomorrow, just a few hours later.", textZh: "我看看……明天7:15有直飞伦敦的。也可以今晚经巴黎转机——还是明天到，只是晚几小时。", actionHint: "口语化说明选项", frequency: "common" },
              { textEn: "Okay, the earliest London flight is tomorrow morning at 7:15. There's also a connecting option through Paris tonight if you don't want to wait.", textZh: "好的，最早去伦敦的航班是明天早上7:15。如果不想等，今晚也有经巴黎转机的选项。", actionHint: "给出两个方案", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I'd prefer the direct flight tomorrow morning. Can you book that for me?",
            textZh: "我更想坐明天早上的直飞。能帮我订吗？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Done. You're confirmed on flight BA116 departing at 7:15 AM from Gate C22. Since this is a weather delay, the airline will provide a meal voucher, but unfortunately we can't offer hotel accommodation for weather-related cancellations.",
            textZh: "好了。已确认BA116航班，早上7:15从C22登机口出发。因为是天气延误，航空公司会提供餐饮券，但很遗憾天气原因取消的我们无法提供酒店住宿。",
            keyPhrases: [
              { en: "confirmed on", zh: "确认了" },
              { en: "meal voucher", zh: "餐饮券" },
              { en: "hotel accommodation", zh: "酒店住宿" },
            ],
            culturalNote: "天气原因属于不可抗力，很多航空公司不承担住宿费。但机械故障等航空公司自身原因导致的取消，通常会安排住宿。",
            alternativeExpressions: [
              { textEn: "All set! You're on BA116, 7:15 AM from Gate C22. Since it's a weather delay, we can give you a meal voucher, but hotel accommodation isn't covered for weather events.", textZh: "搞定！BA116航班，早上7:15，C22登机口。因为是天气延误，可以给您餐饮券，但天气原因不提供酒店住宿。", actionHint: "口语化确认", frequency: "common" },
              { textEn: "You're confirmed on flight BA116, departing 7:15 AM, Gate C22. I've got a meal voucher for you, but unfortunately hotel stays aren't provided for weather-related delays.", textZh: "已确认BA116航班，早上7:15出发，C22登机口。给您一张餐饮券，但很遗憾天气延误不提供酒店住宿。", actionHint: "正式确认", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "So I have to find a hotel myself? Is there one near the airport?",
            textZh: "那我得自己找酒店？机场附近有吗？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "There are several hotels connected to the airport. The information desk on the arrivals level can help you book one, or you can try the app. There are also rest zones in Terminal 2 if you want to stay in the airport.",
            textZh: "机场连通几家酒店。到达层的问讯台可以帮你预订，也可以用APP订。如果你想留在机场，2号航站楼也有休息区。",
            keyPhrases: [
              { en: "information desk", zh: "问讯台" },
              { en: "arrivals level", zh: "到达层" },
              { en: "rest zones", zh: "休息区" },
            ],
            alternativeExpressions: [
              { textEn: "There are a few hotels connected to the airport. Check with the info desk on the arrivals floor, or you can book through an app. Terminal 2 also has rest zones if you want to stay here.", textZh: "机场旁边有几家酒店。到达层的问讯台可以帮忙，也可以用APP订。想留在机场的话，2号航站楼也有休息区。", actionHint: "口语化指引", frequency: "common" },
              { textEn: "The airport has partnered hotels nearby — the information desk downstairs can help you book. Or if you prefer, there are sleeping pods in Terminal 2.", textZh: "机场周围有合作酒店——楼下问讯台可以帮您预订。如果愿意，2号航站楼也有睡眠舱。", actionHint: "提供多种选择", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "What about my checked bags? Do I need to pick them up?",
            textZh: "我的托运行李呢？需要去取吗？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Your bags have been automatically transferred to tomorrow's flight. You don't need to collect them. Here's your new boarding pass and the meal voucher — it's worth $15 and can be used at any restaurant in the terminal.",
            textZh: "您的行李已自动转到明天的航班。不需要去取。这是您的新登机牌和餐饮券——价值15美元，航站楼内任何餐厅都能用。",
            keyPhrases: [
              { en: "automatically transferred", zh: "自动转运" },
              { en: "collect", zh: "领取" },
              { en: "worth", zh: "价值" },
            ],
            alternativeExpressions: [
              { textEn: "Don't worry about your bags — they've been moved to tomorrow's flight automatically. Here's your new boarding pass and a $15 meal voucher, good at any restaurant in the terminal.", textZh: "行李不用担心——已经自动转到明天的航班了。这是新登机牌和15美元的餐饮券，航站楼里任何餐厅都能用。", actionHint: "口语化交接", frequency: "common" },
              { textEn: "Your luggage has been rerouted to the morning flight — nothing for you to do. Here are your new boarding pass and a meal voucher worth $15.", textZh: "您的行李已经转到早班航班了——不需要操心。这是新登机牌和价值15美元的餐饮券。", actionHint: "简洁交接", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you for your help. I appreciate it.",
            textZh: "谢谢你的帮助。很感谢。",
          },
        ],
      },
      {
        id: "demanding-compensation",
        titleZh: "争取补偿",
        titleEn: "Requesting Compensation",
        description: "天气取消后了解旅客权益和可能的补偿",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I understand it's weather, but I've been waiting for six hours now. Am I entitled to any compensation?",
            textZh: "我理解是天气原因，但我已经等了六个小时了。我有权获得任何补偿吗？",
            vocabNotes: {
              entitled: {
                meaningInContext: "在这里指依法或依规有权利获得",
                similarUsage: "类似用法：You're entitled to a refund.（你有权获得退款）",
              },
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "I understand your frustration. For weather-related delays, compensation policies vary by region. In the EU, delays over three hours may qualify for compensation under EU261. But since this is a US departure, different rules apply. Let me check what I can offer.",
            textZh: "我理解您的不满。天气延误的补偿政策因地区而异。在欧盟，延误超过三小时可能符合EU261法规的补偿条件。但这是从美国出发的，适用不同规定。让我查查能提供什么。",
            keyPhrases: [
              { en: "compensation policies", zh: "补偿政策" },
              { en: "qualify for", zh: "符合条件" },
              { en: "different rules apply", zh: "适用不同规定" },
            ],
            alternativeExpressions: [
              { textEn: "I completely understand your frustration. Weather delay compensation varies by region — in the EU, you might qualify under EU261 for delays over three hours, but US departures have different rules. Let me see what I can do.", textZh: "完全理解您的心情。天气延误的赔偿因地区而异——在欧盟延误超过三小时可能符合EU261赔偿，但美国出发适用不同规定。我看看能做什么。", actionHint: "共情并查询", frequency: "common" },
              { textEn: "I hear you — it's really inconvenient. For weather delays, the rules depend on where you're departing from. Since this is a US flight, let me check what options we have for you.", textZh: "我理解——确实很不方便。天气延误的规定取决于出发地。这是美国出发的航班，让我查查能为您做什么。", actionHint: "表示理解", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I also need to cancel my hotel in London since I'll miss tonight. The hotel won't refund me — can the airline cover that?",
            textZh: "我还需要取消伦敦的酒店预订，因为今晚赶不到了。酒店不给退——航空公司能承担吗？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Unfortunately, we can't reimburse third-party bookings for weather events. However, I can provide you with an official letter confirming the cancellation — that might help you claim on your travel insurance.",
            textZh: "很遗憾，天气事件我们无法报销第三方预订。不过，我可以提供一封官方证明信确认取消——这可能帮您向旅行保险索赔。",
            keyPhrases: [
              { en: "reimburse", zh: "报销" },
              { en: "third-party bookings", zh: "第三方预订" },
              { en: "official letter", zh: "官方证明信" },
              { en: "travel insurance", zh: "旅行保险" },
            ],
            alternativeExpressions: [
              { textEn: "Unfortunately, weather events don't qualify for third-party reimbursement. But I can give you an official cancellation letter — that should help with your travel insurance claim.", textZh: "很遗憾，天气事件不报销第三方预订。但我可以给您一封官方取消证明——对旅行保险索赔应该有帮助。", actionHint: "口语化解释", frequency: "common" },
              { textEn: "I'm afraid we can't cover outside expenses for weather-related cancellations. What I can do is provide a formal letter confirming the cancellation — you can use it for your insurance.", textZh: "恐怕天气原因取消的我们无法承担外部费用。我能做的是提供一封正式的取消确认函——可以用来找保险理赔。", actionHint: "说明替代方案", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please give me that letter. Can you also upgrade my seat on tomorrow's flight as a goodwill gesture?",
            textZh: "好的，请给我那封证明信。能不能作为善意表示，帮我升级明天航班的座位？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Let me see what's available... I can move you from economy to premium economy at no charge. Business class is fully booked, unfortunately.",
            textZh: "我查一下……可以免费把您从经济舱升到超级经济舱。商务舱很遗憾已经满了。",
            keyPhrases: [
              { en: "goodwill gesture", zh: "善意表示" },
              { en: "premium economy", zh: "超级经济舱" },
              { en: "at no charge", zh: "免费" },
              { en: "fully booked", zh: "满了" },
            ],
            alternativeExpressions: [
              { textEn: "Let me check what's open... I can upgrade you to premium economy for free. Business class is full, unfortunately.", textZh: "我查一下有什么空位……可以免费帮您升到超级经济舱。商务舱满了，很遗憾。", actionHint: "口语化查询", frequency: "common" },
              { textEn: "One moment... Good news — I can bump you up to premium economy at no extra charge. Business is fully booked, I'm afraid.", textZh: "稍等……好消息——我可以免费给您升到超级经济舱。商务舱恐怕满了。", actionHint: "先报好消息", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take premium economy. And the meal voucher — is that still available?",
            textZh: "超级经济舱可以。餐饮券还有吗？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Yes, here's a $20 meal voucher since your wait has been over four hours. I'll also add 5,000 bonus miles to your frequent flyer account as a courtesy.",
            textZh: "有的，因为您等了超过四小时，这是20美元的餐饮券。作为礼遇，我还会往您的常旅客账户加5000额外里程。",
            keyPhrases: [
              { en: "bonus miles", zh: "额外里程" },
              { en: "frequent flyer account", zh: "常旅客账户" },
              { en: "courtesy", zh: "礼遇" },
            ],
            alternativeExpressions: [
              { textEn: "Sure — here's a $20 meal voucher since you've been waiting over four hours. I'll also add 5,000 miles to your frequent flyer account as a goodwill gesture.", textZh: "当然——这是20美元的餐饮券，因为您等了超过四小时。我还会给您的常旅客账户加5000里程作为补偿。", actionHint: "口语化补偿", frequency: "common" },
              { textEn: "Absolutely. Given the long wait, here's a $20 meal voucher and I'm crediting 5,000 bonus miles to your account.", textZh: "没问题。鉴于等了这么久，给您20美元餐饮券，另外往您账户里加5000额外里程。", actionHint: "简洁补偿", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "That helps. Thank you for doing what you can.",
            textZh: "有帮助。谢谢你尽力帮忙。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "You're welcome. Here's the cancellation letter, your new boarding pass with the upgrade, and the meal voucher. I hope the rest of your journey goes smoothly.",
            textZh: "不客气。这是取消证明信、升舱后的新登机牌和餐饮券。祝您之后的旅程顺利。",
            alternativeExpressions: [
              { textEn: "My pleasure. Here's the cancellation letter, your upgraded boarding pass, and the meal voucher. I hope the rest of your trip goes smoothly!", textZh: "我的荣幸。这是取消证明、升舱后的登机牌和餐饮券。祝后续旅程顺利！", actionHint: "口语化送别", frequency: "common" },
              { textEn: "Happy to help. Everything's here — cancellation letter, new boarding pass with the upgrade, and your voucher. Wishing you a better rest of the journey.", textZh: "很高兴能帮到您。都在这了——取消证明、升舱新登机牌和餐饮券。祝接下来的旅程顺利。", actionHint: "整理交接", frequency: "occasional" }
            ],
          },
        ],
      },
    ],
  },

  // ==================== 9. 机械故障改签 ====================
  {
    id: "airport-rebooking-mechanical",
    category: "airport",
    titleZh: "机械故障改签",
    titleEn: "Mechanical Issue Rebooking",
    description: "因飞机机械故障导致航班取消或延误，要求改签和补偿",
    otherRole: "航空公司客服",
    otherRoleIcon: "🔧",
    flows: [
      {
        id: "mechanical-cancel",
        titleZh: "机械故障取消",
        titleEn: "Mechanical Cancellation",
        description: "飞机出故障航班取消，要求改签和酒店安排",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "They just announced my flight is cancelled due to a mechanical issue. Where do I go for rebooking?",
            textZh: "刚广播说我的航班因机械故障取消了。我去哪里改签？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "I can help you right here. May I see your boarding pass and ID? I'll find the next available flight for you.",
            textZh: "我这里就可以帮您。请出示登机牌和证件。我帮您查下一个可用航班。",
            alternativeExpressions: [
              { textEn: "Sure, I can help right here. Can I see your boarding pass and ID? I'll find the next available flight.", textZh: "我这就能帮您。看看登机牌和证件？我查下一个可用航班。", actionHint: "口语化接待", frequency: "common" },
              { textEn: "Of course. Let me have your boarding pass and a photo ID, and I'll look up what's available for rebooking.", textZh: "当然。请给我登机牌和带照片的证件，我查查能改签什么航班。", actionHint: "正式接待", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Here they are. My original flight was to San Francisco, departing at 6 PM.",
            textZh: "给您。我原来的航班是下午6点飞旧金山的。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "I see. The next direct flight to San Francisco is tomorrow at 8:20 AM. There's also an option tonight at 9:30 PM with a layover in Denver — you'd arrive at 1 AM. Which would you prefer?",
            textZh: "我看一下。下一班直飞旧金山的是明天早上8:20。今晚9:30也有一班经丹佛转机的——凌晨1点到。您选哪个？",
            keyPhrases: [
              { en: "direct flight", zh: "直飞" },
              { en: "layover", zh: "中途停留/转机" },
            ],
            alternativeExpressions: [
              { textEn: "Okay, the next direct to San Francisco is tomorrow at 8:20 AM. Or there's a flight tonight at 9:30 through Denver — you'd get in around 1 AM. What works better?", textZh: "好的，下一班直飞旧金山的是明天8:20。今晚9:30也有经丹佛的——凌晨1点左右到。哪个更方便？", actionHint: "口语化说明选项", frequency: "common" },
              { textEn: "Let me see... Tomorrow morning at 8:20 there's a direct flight, or tonight at 9:30 with a Denver connection, arriving about 1 AM. Your call.", textZh: "我看看……明天早上8:20有直飞的，或者今晚9:30经丹佛转机，大约凌晨1点到。您决定。", actionHint: "给出选项让乘客决定", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take tomorrow's direct flight. Since this is a mechanical issue, does the airline provide a hotel?",
            textZh: "我选明天的直飞。既然是机械故障，航空公司提供酒店吗？",
            culturalNote: "机械故障属于航空公司责任，通常会安排酒店、餐饮和交通。这与天气原因不同，要大胆争取权益。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Yes, since this is within our control, we'll provide a hotel room, meal vouchers for dinner and breakfast, and a shuttle to the hotel. Let me set that up for you.",
            textZh: "是的，因为这属于我们的责任范围，我们会提供酒店房间、晚餐和早餐的餐饮券以及去酒店的班车。我帮您安排。",
            keyPhrases: [
              { en: "within our control", zh: "属于我们的责任范围" },
              { en: "meal vouchers", zh: "餐饮券" },
              { en: "shuttle", zh: "班车" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely. Since this was our fault, we'll cover a hotel room, meal vouchers for dinner and breakfast, and a shuttle. Let me get that sorted.", textZh: "当然。因为是我们的责任，我们会提供酒店房间、晚餐和早餐的餐饮券，还有班车。我来安排。", actionHint: "承诺补偿", frequency: "common" },
              { textEn: "Yes, since the delay is on us, you'll get a complimentary hotel, two meal vouchers, and shuttle service. Give me a moment to arrange everything.", textZh: "是的，既然延误是我们的原因，会免费提供酒店、两张餐饮券和班车服务。稍等我安排一下。", actionHint: "详细列出补偿", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "What about my connecting flight from San Francisco? I'll miss it now.",
            textZh: "我从旧金山转机的航班怎么办？现在肯定赶不上了。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "If your connection was booked on the same ticket, I can rebook that as well at no cost. What's your final destination?",
            textZh: "如果转机航班是同一张票订的，我可以免费帮您一起改签。您的最终目的地是哪里？",
            keyPhrases: [
              { en: "same ticket", zh: "同一张票" },
              { en: "at no cost", zh: "免费" },
              { en: "final destination", zh: "最终目的地" },
            ],
            alternativeExpressions: [
              { textEn: "If your connecting flight is on the same booking, I can rebook that too at no extra cost. Where are you headed ultimately?", textZh: "如果转机航班是同一个订单的，我也可以免费改签。您最终要去哪里？", actionHint: "口语化询问", frequency: "common" },
              { textEn: "As long as the connection was booked together with this flight, I'll rebook everything for free. What's your final destination?", textZh: "只要转机是和这趟航班一起订的，我就可以免费全部改签。您的最终目的地是哪？", actionHint: "确认条件后询问", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "My final destination is Seattle. The connection was on the same booking.",
            textZh: "最终目的地是西雅图。转机是同一个订单的。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Perfect. I've rebooked both flights. You'll fly to San Francisco at 8:20 AM and connect to Seattle at 1:45 PM, arriving at 4 PM. Here are your hotel voucher, two meal vouchers, and your new itinerary. The shuttle to the hotel departs from Door 3 every 20 minutes.",
            textZh: "好的。两段航班都改好了。明早8:20飞旧金山，下午1:45转机去西雅图，下午4点到。这是您的酒店券、两张餐饮券和新行程单。去酒店的班车从3号门每20分钟一班。",
            keyPhrases: [
              { en: "itinerary", zh: "行程单" },
              { en: "departs from", zh: "从…出发" },
              { en: "every 20 minutes", zh: "每20分钟一班" },
            ],
            alternativeExpressions: [
              { textEn: "All done! You fly to San Francisco at 8:20 AM and connect to Seattle at 1:45 PM, landing at 4. Here's your hotel voucher, meal vouchers, and new itinerary. Shuttle to the hotel leaves from Door 3 every 20 minutes.", textZh: "都搞定了！明早8:20飞旧金山，下午1:45转西雅图，4点到。酒店券、餐饮券和新行程单都在这。去酒店的班车从3号门出发，每20分钟一班。", actionHint: "口语化交接", frequency: "common" },
              { textEn: "Both legs are rebooked. San Francisco at 8:20 AM, then Seattle at 1:45, arriving at 4 PM. I've got your hotel voucher, two meal vouchers, and the full itinerary here. The shuttle runs from Door 3 every 20 minutes.", textZh: "两段都改好了。8:20飞旧金山，1:45转西雅图，下午4点到。酒店券、两张餐饮券和完整行程单都在这。班车从3号门每20分钟一趟。", actionHint: "逐项交接", frequency: "occasional" }
            ],
          },
        ],
      },
      {
        id: "compensation-claim",
        titleZh: "要求经济补偿",
        titleEn: "Claiming Compensation",
        description: "因机械故障延误要求经济补偿",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "This is the third time my flight with your airline has been cancelled this year. I'd like to file a compensation claim.",
            textZh: "这是今年你们航空公司第三次取消我的航班了。我想申请经济赔偿。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "I'm really sorry to hear that. You're absolutely right to ask about compensation. For mechanical cancellations, you may be eligible for monetary compensation depending on the route and delay duration.",
            textZh: "非常抱歉。您完全有权了解赔偿事宜。对于机械故障取消，根据航线和延误时间，您可能有资格获得经济赔偿。",
            keyPhrases: [
              { en: "file a claim", zh: "提出索赔" },
              { en: "eligible for", zh: "有资格获得" },
              { en: "monetary compensation", zh: "经济赔偿" },
            ],
            alternativeExpressions: [
              { textEn: "I'm truly sorry. You're absolutely right to bring this up. With mechanical cancellations, you may be eligible for compensation depending on the route and how long you're delayed.", textZh: "真的很抱歉。您提出来完全应该。机械故障取消的话，根据航线和延误时长，您可能有资格获得赔偿。", actionHint: "表示重视", frequency: "common" },
              { textEn: "I completely understand your frustration, and you have every right to ask. For cancellations due to mechanical issues, compensation may be available based on the flight details.", textZh: "完全理解您的不满，您有权利了解。机械原因取消的航班，根据具体航班信息可能可以获得赔偿。", actionHint: "共情并说明", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "What's the process? How do I file it?",
            textZh: "流程是什么？怎么申请？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "You can file online through our website under 'Customer Care,' or I can give you a paper form right now. You'll need your booking reference, the original flight details, and any receipts for expenses caused by the delay.",
            textZh: "您可以在我们网站的'客户关怀'页面在线申请，或者我现在给您纸质表格。您需要订票号、原航班信息和延误造成的任何费用收据。",
            keyPhrases: [
              { en: "booking reference", zh: "订票号" },
              { en: "receipts for expenses", zh: "费用收据" },
            ],
            alternativeExpressions: [
              { textEn: "You can submit a claim online at 'Customer Care' on our website, or I can hand you a paper form right now. You'll need your booking reference, flight details, and any expense receipts.", textZh: "可以在我们网站'客户关怀'页面在线提交，或者我现在给您纸质表格。需要订票号、航班信息和所有费用收据。", actionHint: "口语化说明流程", frequency: "common" },
              { textEn: "There are two ways — file online through our website, or fill out a paper form here. Either way, have your booking number, original flight info, and receipts ready.", textZh: "有两种方式——在我们网站在线申请，或在这里填纸质表格。不管哪种，请准备好订单号、原航班信息和收据。", actionHint: "列出两种方式", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the paper form. How long does it usually take to get a response?",
            textZh: "给我纸质表格吧。通常多久能收到回复？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Typically 4 to 6 weeks. If your claim is approved, compensation can be issued as a check, airline credit, or frequent flyer miles — you choose.",
            textZh: "通常4到6周。如果索赔通过，赔偿可以以支票、航空积分或常旅客里程形式发放——您自己选。",
            keyPhrases: [
              { en: "4 to 6 weeks", zh: "4到6周" },
              { en: "claim is approved", zh: "索赔通过" },
              { en: "airline credit", zh: "航空积分" },
            ],
            alternativeExpressions: [
              { textEn: "Usually takes 4 to 6 weeks. If approved, you can choose a check, airline credit, or frequent flyer miles.", textZh: "通常4到6周。如果通过了，可以选支票、航空积分或常旅客里程。", actionHint: "简洁说明", frequency: "common" },
              { textEn: "Expect 4 to 6 weeks for processing. Once approved, the payout comes as a check, travel credit, or miles — your choice.", textZh: "处理时间大概4到6周。一旦通过，赔偿以支票、旅行积分或里程形式发放——您自己选。", actionHint: "详细说明选项", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "How much compensation can I expect for a cancelled flight?",
            textZh: "取消航班能赔多少？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "For this route, it could be up to $400 for delays over four hours. But each case is evaluated individually. I'd also recommend keeping all your receipts — meals, transportation, anything related to the disruption.",
            textZh: "这条航线延误超过四小时的话，最高可达400美元。但每个案例单独评估。我还建议您保留所有收据——餐饮、交通、任何和延误相关的。",
            keyPhrases: [
              { en: "up to", zh: "最高可达" },
              { en: "evaluated individually", zh: "单独评估" },
              { en: "disruption", zh: "航班中断" },
            ],
            alternativeExpressions: [
              { textEn: "On this route, you could get up to $400 for a delay over four hours. Every case is different, though. Keep all your receipts — meals, transport, everything.", textZh: "这条航线延误超四小时最高400美元。不过每个情况不同。收据全留着——餐饮、交通、所有的。", actionHint: "口语化告知", frequency: "common" },
              { textEn: "For delays exceeding four hours on this route, compensation can go up to $400. It varies case by case. My advice: hold on to every receipt related to the disruption.", textZh: "这条航线延误超过四小时的赔偿最高可达400美元。具体情况具体分析。我的建议：保留所有跟延误相关的收据。", actionHint: "给出建议", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Alright. Can I get a written confirmation of this cancellation and the reason?",
            textZh: "好的。能给我一份书面的取消确认和取消原因吗？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Absolutely. Here's your disruption notice with the flight number, reason for cancellation, and today's date. Attach this to your compensation form.",
            textZh: "当然。这是您的航班中断通知，上面有航班号、取消原因和今天日期。把这个附在赔偿表格上。",
            keyPhrases: [
              { en: "disruption notice", zh: "航班中断通知" },
              { en: "attach", zh: "附上" },
            ],
            alternativeExpressions: [
              { textEn: "Of course. Here's the disruption notice with your flight number, the cancellation reason, and today's date. Attach it to your claim.", textZh: "当然。这是航班中断通知，上面有航班号、取消原因和日期。附在索赔材料里。", actionHint: "简洁交接", frequency: "common" },
              { textEn: "Sure thing. I've printed the disruption notice — it has all the details you'll need for the compensation form.", textZh: "没问题。航班中断通知打印好了——上面有索赔表格需要的所有信息。", actionHint: "确认打印", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. I'll fill this out and submit it online.",
            textZh: "谢谢。我填好后在线提交。",
          },
        ],
      },
    ],
  },

  // ==================== 10. 行李遗失索赔 ====================
  {
    id: "airport-lost-luggage-claim",
    category: "airport",
    titleZh: "行李遗失索赔",
    titleEn: "Lost Luggage Claim",
    description: "到达后发现行李没到，去行李服务台报告",
    otherRole: "行李服务台工作人员",
    otherRoleIcon: "🧳",
    flows: [
      {
        id: "report-missing",
        titleZh: "报告行李丢失",
        titleEn: "Reporting Missing Luggage",
        description: "在行李转盘等不到行李后去报告",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, my luggage didn't come out on the carousel. I've been waiting for 40 minutes.",
            textZh: "你好，我的行李在传送带上没出来。我已经等了40分钟了。",
            vocabNotes: {
              carousel: {
                meaningInContext: "在这里指机场行李提取处的环形传送带",
                similarUsage: "类似表达：baggage belt, conveyor belt",
              },
            },
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "I'm sorry to hear that. Can I see your baggage claim tag? It should be attached to your boarding pass.",
            textZh: "很遗憾。能看看您的行李票吗？应该贴在登机牌上的。",
            keyPhrases: [
              { en: "baggage claim tag", zh: "行李票" },
              { en: "attached to", zh: "贴在…上" },
            ],
            alternativeExpressions: [
              { textEn: "I'm sorry about that. Do you have your baggage claim tag? It should be on your boarding pass.", textZh: "很抱歉。行李票在吗？应该贴在登机牌上。", actionHint: "口语化询问", frequency: "common" },
              { textEn: "Oh no, that's unfortunate. Can I see your baggage tag? It's usually stuck to the back of your boarding pass.", textZh: "哎，真不巧。能看看行李标签吗？一般贴在登机牌背面。", actionHint: "表示同情", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Here it is. I checked in one black suitcase in Chicago.",
            textZh: "在这里。我在芝加哥托运了一个黑色箱子。",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "Let me look this up... It seems your bag was not loaded onto your connecting flight. It's currently in Chicago and should be on the next flight arriving here at 11 PM tonight.",
            textZh: "我查一下……看起来您的行李没有被装上转机航班。目前还在芝加哥，应该会搭今晚11点到达的下一班飞机过来。",
            keyPhrases: [
              { en: "not loaded onto", zh: "没有被装上" },
              { en: "connecting flight", zh: "转机航班" },
              { en: "next flight", zh: "下一班飞机" },
            ],
            alternativeExpressions: [
              { textEn: "Let me check... It looks like your bag didn't make it onto your connecting flight. It's still in Chicago and should arrive on the 11 PM flight tonight.", textZh: "我查一下……看来您的行李没赶上转机航班。还在芝加哥，应该今晚11点的航班带过来。", actionHint: "口语化说明情况", frequency: "common" },
              { textEn: "I'm tracking it now... Your bag was left behind at Chicago. It's been put on the next available flight, arriving here around 11 PM.", textZh: "我正在追踪……您的行李被留在了芝加哥。已经安排了下一班航班，大约晚上11点到这里。", actionHint: "实时追踪", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "That's frustrating. All my clothes and toiletries are in there. What do I do in the meantime?",
            textZh: "太郁闷了。我所有的衣服和洗漱用品都在里面。这段时间怎么办？",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "I completely understand. We offer an emergency essentials kit with basic toiletries. You're also entitled to reimbursement for reasonable purchases — up to $50 for clothing and necessities. Keep all receipts.",
            textZh: "完全理解。我们提供应急套装，里面有基本洗漱用品。您也有权报销合理的购买费用——衣物和必需品最多50美元。请保留所有收据。",
            keyPhrases: [
              { en: "emergency essentials kit", zh: "应急套装" },
              { en: "reimbursement", zh: "报销" },
              { en: "reasonable purchases", zh: "合理的购买" },
              { en: "keep all receipts", zh: "保留所有收据" },
            ],
            alternativeExpressions: [
              { textEn: "I totally understand. We have an emergency kit with basic toiletries for you. You can also buy essentials — up to $50 reimbursable for clothes and necessities. Just keep the receipts.", textZh: "完全理解。我们有应急套装给您，里面有基本洗漱用品。还可以购买必需品——衣物和日用品最多报销50美元。留好收据。", actionHint: "口语化补偿说明", frequency: "common" },
              { textEn: "Of course, that's really inconvenient. Here's an emergency toiletry kit. You're also entitled to reimbursement for up to $50 in essential purchases — just save all receipts.", textZh: "当然，确实很不方便。这是应急洗漱包。您还有权报销最多50美元的必需品购买——收据都留着就行。", actionHint: "提供应急措施", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Can you deliver the bag to my hotel once it arrives?",
            textZh: "行李到了以后能送到我酒店吗？",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "Yes, we offer free delivery. Let me take down your hotel name and address. We'll send it as soon as it arrives — likely by midnight or early tomorrow morning.",
            textZh: "可以的，我们提供免费送达。请告诉我您的酒店名称和地址。行李一到我们就送——大概午夜前或明天一早。",
            keyPhrases: [
              { en: "free delivery", zh: "免费送达" },
              { en: "as soon as", zh: "一…就…" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely, we deliver for free. Give me your hotel name and address. We'll send it as soon as it lands — probably by midnight or early morning.", textZh: "当然，免费送达。告诉我您的酒店名称和地址。行李到了马上送——大概午夜或明天一早。", actionHint: "口语化确认", frequency: "common" },
              { textEn: "Of course! Delivery is complimentary. Just leave me your hotel details and we'll have it sent over as soon as it arrives.", textZh: "当然！免费送达。留下酒店信息就行，行李一到我们就送过去。", actionHint: "简洁承诺", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I'm staying at the Hilton Garden Inn on Market Street. Here's my phone number too.",
            textZh: "我住Market Street的希尔顿花园酒店。这是我的手机号。",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "Got it. Here's your file reference number — PIR-78532. You can track your bag status online with this number. We'll also text you when it's on its way.",
            textZh: "记下了。这是您的档案编号——PIR-78532。可以用这个号码在线追踪行李状态。行李出发时我们也会发短信通知您。",
            keyPhrases: [
              { en: "file reference number", zh: "档案编号" },
              { en: "track", zh: "追踪" },
              { en: "on its way", zh: "在路上" },
            ],
            alternativeExpressions: [
              { textEn: "All noted. Your reference number is PIR-78532 — use it to track your bag online. We'll also text you when it's on the way.", textZh: "都记下了。您的编号是PIR-78532——可以在线追踪行李。送出时也会发短信通知您。", actionHint: "简洁交接", frequency: "common" },
              { textEn: "Got everything. Here's your file number — PIR-78532. You can check the status online anytime, and we'll send you a text update when the bag ships.", textZh: "全记好了。档案号是PIR-78532。随时可以在线查状态，行李发出时我们会发短信。", actionHint: "明确跟踪方式", frequency: "occasional" }
            ],
          },
        ],
      },
      {
        id: "permanent-loss",
        titleZh: "行李确认丢失",
        titleEn: "Confirmed Lost Luggage",
        description: "行李多日未找到，确认丢失并申请赔偿",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I filed a missing luggage report five days ago and still haven't received my bag. Reference number PIR-78532.",
            textZh: "我五天前报了行李丢失，至今没收到。编号PIR-78532。",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "Let me pull up your file... I'm sorry, it appears your bag has not been located yet. After 5 days, we escalate the search. If it's not found within 21 days, it's classified as lost.",
            textZh: "我调出您的档案……很抱歉，您的行李目前还没有找到。5天后我们会升级搜索。如果21天内找不到，就会被归类为丢失。",
            keyPhrases: [
              { en: "pull up your file", zh: "调出您的档案" },
              { en: "not been located", zh: "还没有找到" },
              { en: "escalate the search", zh: "升级搜索" },
              { en: "classified as lost", zh: "归类为丢失" },
            ],
            alternativeExpressions: [
              { textEn: "Let me pull up your case... I'm sorry, but your bag still hasn't been located. After 5 days we escalate the search. If it's not found within 21 days, it'll be classified as lost.", textZh: "我调出您的记录……很抱歉，行李还没找到。5天后会升级搜索。21天内找不到就归类为丢失。", actionHint: "口语化说明进展", frequency: "common" },
              { textEn: "Checking your file now... Unfortunately, there's still no update on your bag. We'll escalate after 5 days, and if it's not recovered within 21 days, it's considered lost.", textZh: "正在查您的档案……很遗憾，行李还没有消息。5天后升级搜索，21天内找不到就视为丢失。", actionHint: "正式告知", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "What happens if it's officially declared lost?",
            textZh: "如果正式确认丢失了怎么办？",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "You'll be eligible for compensation. Under the Montreal Convention, the maximum liability is approximately $1,700. You'll need to submit a list of the bag's contents and their approximate value.",
            textZh: "您有资格获得赔偿。根据蒙特利尔公约，最高赔偿责任约为1700美元。您需要提交行李内容物清单和大致价值。",
            keyPhrases: [
              { en: "Montreal Convention", zh: "蒙特利尔公约" },
              { en: "maximum liability", zh: "最高赔偿责任" },
              { en: "contents and their approximate value", zh: "内容物和大致价值" },
            ],
            alternativeExpressions: [
              { textEn: "You'll be entitled to compensation. The Montreal Convention caps it at about $1,700. You'll need to list what was in the bag and the approximate value.", textZh: "您有权获得赔偿。蒙特利尔公约上限约1700美元。需要列出行李里的东西和大致价值。", actionHint: "简洁说明赔偿", frequency: "common" },
              { textEn: "If the bag is officially lost, compensation applies. Under international rules, the max is around $1,700. You'll submit a contents list with estimated values.", textZh: "如果行李被正式认定为丢失，就可以赔偿。国际规定上限约1700美元。需要提交内容物清单和估价。", actionHint: "解释赔偿规则", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I had some expensive electronics in there — a laptop and a camera. Will those be fully covered?",
            textZh: "里面有一些贵重电子产品——笔记本电脑和相机。能全额赔偿吗？",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "The airline covers general items, but high-value electronics are typically subject to depreciation. We recommend not packing expensive items in checked luggage in the future. Do you have travel insurance? That might cover the difference.",
            textZh: "航空公司赔偿一般物品，但高价值电子产品通常会按折旧计算。我们建议以后不要把贵重物品放在托运行李里。您有旅行保险吗？差额部分保险可能可以覆盖。",
            keyPhrases: [
              { en: "depreciation", zh: "折旧" },
              { en: "cover the difference", zh: "覆盖差额" },
            ],
            alternativeExpressions: [
              { textEn: "General items are covered, but electronics usually get depreciated. Going forward, try not to put expensive items in checked bags. Do you have travel insurance? That might cover the gap.", textZh: "一般物品都能赔，但电子产品通常按折旧算。以后尽量别把贵重物品放托运行李。有旅行保险吗？差额部分保险可能能补上。", actionHint: "口语化建议", frequency: "common" },
              { textEn: "The airline covers standard items, but high-value electronics are subject to depreciation. If you have travel insurance, I'd recommend filing a separate claim for the difference.", textZh: "航空公司赔偿标准物品，但高价值电子产品会按折旧计。如果有旅行保险，建议另外申请索赔差额。", actionHint: "建议走保险", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I do have travel insurance. Can you give me all the documentation I need for the claim?",
            textZh: "我有旅行保险。能给我索赔需要的所有文件吗？",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "Of course. I'll print you a copy of the PIR report, a letter confirming the bag hasn't been found, and our claim form. Fill out the claim form with the contents list and mail it to the address on the form, or submit it online.",
            textZh: "当然。我给您打印一份PIR报告副本、一封确认行李未找到的信函和我们的索赔表。在索赔表上填好内容物清单，邮寄到表格上的地址，或者在线提交。",
            keyPhrases: [
              { en: "PIR report", zh: "行李事故报告" },
              { en: "claim form", zh: "索赔表" },
              { en: "contents list", zh: "内容物清单" },
            ],
            alternativeExpressions: [
              { textEn: "Sure. I'll print you the PIR report, a letter saying the bag hasn't been found, and our claim form. Fill it out with a contents list and mail it in or submit online.", textZh: "没问题。我给您打印PIR报告、行李未找到的确认函和索赔表。填好内容物清单后寄出或在线提交。", actionHint: "口语化流程说明", frequency: "common" },
              { textEn: "Absolutely. I'll get you three documents — the PIR report, a confirmation letter, and the claim form. Just list the contents, attach your receipts, and submit.", textZh: "当然。我给您准备三份文件——PIR报告、确认函和索赔表。列好内容物清单，附上收据，提交就行。", actionHint: "明确三份文件", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "How long does the compensation process take?",
            textZh: "赔偿流程需要多长时间？",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "Usually 6 to 8 weeks after we receive your completed claim. We'll email you a confirmation when it's been processed. I'm truly sorry for the inconvenience.",
            textZh: "通常在收到完整索赔材料后6到8周。处理完会给您发邮件确认。对给您带来的不便深表歉意。",
            keyPhrases: [
              { en: "completed claim", zh: "完整索赔材料" },
              { en: "processed", zh: "处理完" },
            ],
            alternativeExpressions: [
              { textEn: "Typically 6 to 8 weeks after we get your claim. We'll email you a confirmation once it's processed. Again, really sorry for the trouble.", textZh: "通常收到索赔后6到8周。处理完会发邮件确认。再次为给您带来的麻烦道歉。", actionHint: "口语化告知", frequency: "common" },
              { textEn: "Processing takes about 6 to 8 weeks from when we receive everything. You'll get an email when it's done. We're truly sorry about this.", textZh: "从收到全部材料起大约6到8周。处理完成后会发邮件。对此我们深感抱歉。", actionHint: "明确时间线", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. I'll submit everything this week.",
            textZh: "谢谢。我这周就提交全部材料。",
          },
        ],
      },
    ],
  },

  // ==================== 11. 行李送达 ====================
  {
    id: "airport-lost-luggage-delivery",
    category: "airport",
    titleZh: "行李找到后送达",
    titleEn: "Luggage Delivery",
    description: "行李找到后安排送到酒店或住处",
    otherRole: "行李服务台/快递员",
    otherRoleIcon: "📦",
    flows: [
      {
        id: "phone-followup",
        titleZh: "电话跟进送达",
        titleEn: "Phone Follow-up",
        description: "接到电话通知行李已找到，安排送达",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "行李服务",
            textEn: "Hello, this is the baggage service department at JFK Airport. Am I speaking with Mr. Wang?",
            textZh: "你好，这里是JFK机场行李服务部。请问是王先生吗？",
            alternativeExpressions: [
              { textEn: "Hi, this is JFK Airport baggage services. Am I speaking with Mr. Wang?", textZh: "你好，这里是JFK机场行李服务。请问是王先生吗？", actionHint: "电话开场", frequency: "common" },
              { textEn: "Good morning, Mr. Wang? This is the baggage department at JFK calling.", textZh: "早上好，王先生？这里是JFK行李部打来的。", actionHint: "简洁电话开场", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, that's me. Is this about my missing suitcase?",
            textZh: "是我。是关于我丢失的箱子的吗？",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "Yes! Good news — your bag has been found. It arrived on the flight from Chicago this morning. We'd like to arrange delivery. Are you still at the same hotel address?",
            textZh: "是的！好消息——您的行李找到了。今天早上从芝加哥的航班到的。我们想安排送达。您还在同一个酒店地址吗？",
            keyPhrases: [
              { en: "has been found", zh: "找到了" },
              { en: "arrange delivery", zh: "安排送达" },
            ],
            alternativeExpressions: [
              { textEn: "Great news — we found your bag! It came in on this morning's Chicago flight. Can we deliver it? Are you still at the same hotel?", textZh: "好消息——您的行李找到了！今早从芝加哥的航班到的。可以送过去吗？还在同一个酒店吗？", actionHint: "口语化报喜", frequency: "common" },
              { textEn: "I'm happy to tell you your bag has been located — it arrived from Chicago this morning. We'd like to arrange delivery. Same hotel address?", textZh: "很高兴通知您行李找到了——今早从芝加哥到的。我们想安排送达。还是原来的酒店地址吗？", actionHint: "正式通知", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Actually, I moved to a different hotel yesterday. The new address is the Marriott on 5th Avenue.",
            textZh: "其实我昨天换了酒店。新地址是第五大道的万豪酒店。",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "No problem, I'll update the delivery address. What time works best for you? We can deliver between 2 PM and 8 PM.",
            textZh: "没问题，我更新一下送达地址。您什么时间方便？我们可以在下午2点到8点之间送。",
            keyPhrases: [
              { en: "update the delivery address", zh: "更新送达地址" },
              { en: "what time works best", zh: "什么时间最方便" },
            ],
            alternativeExpressions: [
              { textEn: "That's fine, I'll update the address. When's a good time? We deliver between 2 and 8 PM.", textZh: "没问题，我更新地址。什么时间方便？我们下午2点到8点之间可以送。", actionHint: "口语化确认", frequency: "common" },
              { textEn: "Sure, give me the new address. What time works for you? Our delivery window is 2 PM to 8 PM.", textZh: "好的，告诉我新地址。几点方便？我们的送达时间段是下午2点到8点。", actionHint: "直接询问", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Anytime after 4 PM would be great. I'll be back at the hotel by then.",
            textZh: "下午4点以后都行。那时候我会回到酒店。",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "Got it. We'll aim for between 4 and 6 PM. The courier will call you 30 minutes before arrival. Can they leave it at the front desk if you're not in your room?",
            textZh: "好的。我们安排在4到6点之间。快递员会在到达前30分钟打电话给您。如果您不在房间，可以放在前台吗？",
            keyPhrases: [
              { en: "courier", zh: "快递员" },
              { en: "front desk", zh: "前台" },
            ],
            alternativeExpressions: [
              { textEn: "Perfect. We'll aim for 4 to 6 PM. The driver will call you half an hour beforehand. If you're not in, can they leave it at the front desk?", textZh: "好的。安排4到6点之间。司机提前半小时打电话给您。不在房间的话能放前台吗？", actionHint: "口语化确认", frequency: "common" },
              { textEn: "We'll shoot for between 4 and 6. Expect a call from the courier 30 minutes before. Would it be okay to leave it with reception if you step out?", textZh: "安排在4到6点。快递员会提前30分钟打电话。如果您出去了，放前台可以吗？", actionHint: "确认备选方案", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, the front desk is fine. Do I need to sign anything?",
            textZh: "好的，放前台可以。需要签字吗？",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "Yes, you or someone at the hotel will need to sign a delivery confirmation. Also, please check the bag immediately for any damage and let us know within 24 hours if anything is wrong.",
            textZh: "是的，您或者酒店的人需要签一份送达确认。另外，请立刻检查箱子有没有损坏，24小时内如有问题请告知我们。",
            keyPhrases: [
              { en: "delivery confirmation", zh: "送达确认" },
              { en: "check for damage", zh: "检查损坏" },
              { en: "within 24 hours", zh: "24小时内" },
            ],
            alternativeExpressions: [
              { textEn: "Someone will need to sign for it — you or the hotel staff. And please check the bag right away for any damage. Let us know within 24 hours if anything's wrong.", textZh: "需要有人签收——您本人或酒店工作人员。请立刻检查行李有没有损坏。24小时内有问题告知我们。", actionHint: "口语化提醒", frequency: "common" },
              { textEn: "A signature is required upon delivery. Once you get the bag, inspect it immediately. If there's any damage, report it to us within 24 hours.", textZh: "送到时需要签字。拿到行李后请立刻检查。如有损坏，24小时内联系我们。", actionHint: "正式提醒", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Will do. Thank you so much for finding it!",
            textZh: "好的。太感谢你们找到了！",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "We apologize again for the inconvenience. If you have any expense receipts from while you were without your bag, you can still submit them for reimbursement. Have a good day!",
            textZh: "再次为给您带来的不便道歉。如果您在没有行李期间有任何花费收据，仍然可以提交报销。祝您愉快！",
            keyPhrases: [
              { en: "expense receipts", zh: "花费收据" },
              { en: "submit for reimbursement", zh: "提交报销" },
            ],
            alternativeExpressions: [
              { textEn: "Sorry again for all the trouble. If you bought anything while your bag was missing, you can still submit those receipts for reimbursement. Have a great day!", textZh: "再次对所有麻烦表示抱歉。行李不在的时候买的东西，收据还可以提交报销。祝您愉快！", actionHint: "口语化结束", frequency: "common" },
              { textEn: "Once again, our apologies. Don't forget — any expenses from while you were without your luggage can be claimed. Take care!", textZh: "再次道歉。别忘了——没有行李期间的任何花费都可以报销。保重！", actionHint: "提醒报销权利", frequency: "occasional" }
            ],
          },
        ],
      },
      {
        id: "damaged-delivery",
        titleZh: "行李送达但有损坏",
        titleEn: "Delivered but Damaged",
        description: "行李送达后发现有损坏，如何索赔",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I just received my delayed bag but it's damaged. One wheel is broken and there's a large tear on the side.",
            textZh: "我刚收到延迟的行李，但损坏了。一个轮子坏了，侧面有一个大口子。",
            vocabNotes: {
              tear: {
                meaningInContext: "在这里指行李箱表面的撕裂/破口，读音为 /tɛr/",
                similarUsage: "类似用法：There's a tear in my jacket.（我夹克上有个口子）",
              },
            },
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "I'm sorry about that. Can you describe the damage in detail? I'll also need you to send photos. You can email them to our claims department.",
            textZh: "很抱歉。能详细描述一下损坏情况吗？我还需要您发照片。可以发邮件给我们的索赔部门。",
            keyPhrases: [
              { en: "describe the damage", zh: "描述损坏情况" },
              { en: "claims department", zh: "索赔部门" },
            ],
            alternativeExpressions: [
              { textEn: "I'm sorry to hear that. Can you describe what's damaged? I'll also need photos — you can email them to our claims team.", textZh: "很抱歉。能描述一下损坏情况吗？还需要照片——可以发邮件给我们的索赔团队。", actionHint: "口语化处理", frequency: "common" },
              { textEn: "That's really unfortunate. Please tell me exactly what's damaged, and if you can take some photos, send them to our claims department by email.", textZh: "真不巧。请告诉我具体损坏了什么，如果能拍照的话，发邮件给我们的索赔部门。", actionHint: "详细说明需求", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "The right rear wheel is completely broken off, and there's a 15-centimeter rip along the zipper. Some items inside are also damaged — a bottle leaked onto my clothes.",
            textZh: "右后轮完全断了，拉链旁边有15厘米的裂口。里面的东西也有损坏——一瓶东西漏了弄脏了衣服。",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "I'm noting all of that. For the suitcase itself, we can either repair it, replace it with a similar model, or offer monetary compensation. For the damaged contents, we'll need a list with estimated values.",
            textZh: "我都记录下来了。箱子本身，我们可以维修、换一个类似型号的，或者给经济赔偿。里面损坏的东西，我们需要一份清单和估计价值。",
            keyPhrases: [
              { en: "repair", zh: "维修" },
              { en: "replace", zh: "更换" },
              { en: "estimated values", zh: "估计价值" },
            ],
            alternativeExpressions: [
              { textEn: "I've noted everything. For the suitcase, we can repair it, replace it, or compensate you. For the damaged items inside, we'll need a list with values.", textZh: "都记下了。箱子可以修、换或赔偿。里面损坏的东西需要一份清单和估价。", actionHint: "简洁说明方案", frequency: "common" },
              { textEn: "Got it all. The bag itself can be repaired, swapped for a similar one, or we can offer cash. For the contents, please make a list with approximate values.", textZh: "都记录了。箱子本身可以修、换类似的、或给现金。里面的东西请列清单加大致价值。", actionHint: "口语化列方案", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I'd prefer a replacement or cash compensation. The suitcase was fairly new — I bought it two months ago for $200.",
            textZh: "我倾向于换新的或者现金赔偿。箱子很新——两个月前花200美元买的。",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "If you have the purchase receipt, that will speed things up. Otherwise we'll assess based on the brand and condition. Please file the claim within 7 days for delayed luggage damage — that's the deadline.",
            textZh: "如果有购买收据，会加快处理。否则我们会根据品牌和状况评估。延误行李的损坏索赔请在7天内提交——这是截止期限。",
            keyPhrases: [
              { en: "purchase receipt", zh: "购买收据" },
              { en: "speed things up", zh: "加快处理" },
              { en: "deadline", zh: "截止期限" },
            ],
            alternativeExpressions: [
              { textEn: "Having the receipt speeds things up a lot. If not, we'll estimate based on brand and condition. Just make sure to file within 7 days — that's the deadline for delayed luggage damage.", textZh: "有收据的话处理快很多。没有的话我们按品牌和状况估价。一定要在7天内提交——这是延误行李损坏的截止期限。", actionHint: "口语化提醒", frequency: "common" },
              { textEn: "Receipts will definitely speed up the process. Without them, we assess value by brand and wear. Important: you have 7 days to file the damage claim.", textZh: "有收据肯定能加快处理。没有的话我们按品牌和使用状况评估。重要提醒：损坏索赔要在7天内提交。", actionHint: "强调时限", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I have the receipt on my phone. Where should I email everything?",
            textZh: "收据在手机里。所有东西发到哪个邮箱？",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "Send everything to claims@airlineexample.com with your PIR number in the subject line. Include photos of the damage, the receipt, and your contents list. We'll respond within 5 business days.",
            textZh: "所有材料发到 claims@airlineexample.com，主题行写上您的PIR编号。附上损坏照片、收据和内容物清单。我们会在5个工作日内回复。",
            keyPhrases: [
              { en: "subject line", zh: "主题行" },
              { en: "business days", zh: "工作日" },
            ],
            alternativeExpressions: [
              { textEn: "Email everything to claims@airlineexample.com — put your PIR number in the subject line. Include damage photos, receipts, and the contents list. We'll get back to you within 5 business days.", textZh: "所有材料发到claims@airlineexample.com——主题写PIR编号。附上损坏照片、收据和物品清单。5个工作日内回复。", actionHint: "口语化指导", frequency: "common" },
              { textEn: "Send your photos, receipts, and item list to claims@airlineexample.com with the PIR number as the subject. Expect a reply within 5 working days.", textZh: "把照片、收据和物品清单发到claims@airlineexample.com，主题填PIR编号。5个工作日内会收到回复。", actionHint: "简洁指导", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. I'll send everything today. Thank you.",
            textZh: "明白了。我今天就发。谢谢。",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "Thank you for your patience. We sincerely apologize for the trouble. Is there anything else I can help with?",
            textZh: "感谢您的耐心。对给您带来的麻烦我们深表歉意。还有什么我能帮忙的吗？",
            alternativeExpressions: [
              { textEn: "Thanks for your patience. We're really sorry about this. Is there anything else I can do for you?", textZh: "感谢您的耐心。对此我们很抱歉。还有什么我能帮忙的吗？", actionHint: "口语化收尾", frequency: "common" },
              { textEn: "I appreciate your understanding, and again, I'm very sorry. Anything else I can help with today?", textZh: "感谢您的理解，再次深表歉意。今天还有什么需要帮忙的吗？", actionHint: "礼貌收尾", frequency: "occasional" }
            ],
          },
        ],
      },
    ],
  },

  // ==================== 12. 海关申报 ====================
  {
    id: "airport-customs-declaration",
    category: "airport",
    titleZh: "海关申报",
    titleEn: "Customs Declaration",
    description: "入境时需要申报携带物品（超额现金、礼品等）",
    otherRole: "海关官员",
    otherRoleIcon: "🛃",
    flows: [
      {
        id: "declaring-goods",
        titleZh: "申报物品",
        titleEn: "Declaring Goods",
        description: "携带需申报的物品过海关",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "海关",
            textEn: "Good afternoon. Do you have anything to declare?",
            textZh: "下午好。您有什么需要申报的吗？",
            keyPhrases: [
              { en: "anything to declare", zh: "需要申报的" },
            ],
            alternativeExpressions: [
              { textEn: "Hello. Anything to declare today?", textZh: "你好。今天有什么要申报的吗？", actionHint: "简洁问询", frequency: "common" },
              { textEn: "Good day. Are you bringing anything into the country that needs to be declared?", textZh: "您好。有需要申报的物品带入境吗？", actionHint: "稍详细的问法", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I'm carrying $12,000 in cash. I know I need to declare amounts over $10,000.",
            textZh: "是的，我带了12000美元现金。我知道超过10000美元需要申报。",
            culturalNote: "美国入境时携带超过10000美元现金（或等值外币）必须申报。不申报属于违法行为，可能被没收。",
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "Thank you for declaring that. You'll need to fill out a FinCEN 105 form. It's just a currency reporting form — having the cash isn't illegal, but we need to document it.",
            textZh: "感谢您如实申报。您需要填写一份FinCEN 105表格。只是一份货币申报表——带现金不违法，但我们需要登记。",
            keyPhrases: [
              { en: "currency reporting form", zh: "货币申报表" },
              { en: "isn't illegal", zh: "不违法" },
              { en: "document it", zh: "登记" },
            ],
            alternativeExpressions: [
              { textEn: "Thanks for being upfront. You'll need to fill out a FinCEN 105 form — it's just a reporting requirement. Carrying the cash is perfectly legal.", textZh: "感谢您如实告知。需要填一份FinCEN 105表——只是申报要求。带现金是完全合法的。", actionHint: "口语化说明", frequency: "common" },
              { textEn: "Appreciate you declaring that. There's a FinCEN 105 currency report to fill out — it's routine and there's nothing wrong with having the cash.", textZh: "感谢申报。需要填一份FinCEN 105货币申报表——是例行的，带现金没有任何问题。", actionHint: "安抚并说明", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Okay. I also bought some electronics abroad — a new laptop and two phones. Do I need to declare those too?",
            textZh: "好的。我还在国外买了一些电子产品——一台新笔记本和两部手机。这些也需要申报吗？",
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "If the total value of goods you're bringing in exceeds $800 per person, you'll need to declare them. What's the total value of the electronics?",
            textZh: "如果您带入物品的总价值超过每人800美元，就需要申报。这些电子产品总价值是多少？",
            keyPhrases: [
              { en: "total value", zh: "总价值" },
              { en: "exceeds", zh: "超过" },
              { en: "$800 per person", zh: "每人800美元" },
            ],
            alternativeExpressions: [
              { textEn: "Anything over $800 per person needs to be declared. What's the total value of those electronics?", textZh: "每人超过800美元的物品需要申报。这些电子产品总共值多少？", actionHint: "简洁询问", frequency: "common" },
              { textEn: "The duty-free personal exemption is $800. If your electronics exceed that, they'll need to be declared. What's the total?", textZh: "个人免税额是800美元。电子产品超过的话需要申报。总共多少？", actionHint: "说明免税额", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "About $2,500 in total. The laptop was $1,800 and the phones were about $350 each.",
            textZh: "总共大约2500美元。笔记本1800美元，手机每部大约350美元。",
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "You'll owe duty on the amount over $800, which is $1,700. The rate depends on the item category. For electronics, it's typically around 3 to 5 percent. Do you have the receipts?",
            textZh: "超过800美元的部分，也就是1700美元，需要缴税。税率取决于物品类别。电子产品通常大约3%到5%。有收据吗？",
            keyPhrases: [
              { en: "owe duty", zh: "需要缴税" },
              { en: "item category", zh: "物品类别" },
              { en: "rate", zh: "税率" },
            ],
            alternativeExpressions: [
              { textEn: "You'll owe duty on the $1,700 over the exemption. Electronics are usually taxed at 3 to 5 percent. Do you have receipts?", textZh: "超出的1700美元需要缴税。电子产品一般税率3%到5%。有收据吗？", actionHint: "简洁说明", frequency: "common" },
              { textEn: "The taxable amount is $1,700 — the portion over $800. The rate for electronics is typically around 3 to 5 percent. Got the receipts handy?", textZh: "需缴税的部分是1700美元——超过800美元的部分。电子产品税率通常3%到5%左右。收据方便拿吗？", actionHint: "分步说明", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I have all the receipts here.",
            textZh: "有的，收据都在这里。",
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "Great. Fill out this declaration form, attach the receipts, and proceed to the payment counter over there. You can pay by card. Any other items to declare?",
            textZh: "好的。填好这张申报表，附上收据，然后去那边的缴费柜台。可以刷卡。还有其他需要申报的吗？",
            keyPhrases: [
              { en: "declaration form", zh: "申报表" },
              { en: "payment counter", zh: "缴费柜台" },
            ],
            alternativeExpressions: [
              { textEn: "Good. Fill this out, attach the receipts, and head to the payment counter over there. Card is fine. Anything else to declare?", textZh: "好的。填好这个，附上收据，去那边的缴费柜台。可以刷卡。还有别的要申报的吗？", actionHint: "口语化指引", frequency: "common" },
              { textEn: "Perfect. Complete this declaration form with receipts attached and pay at the counter to your right. You can use a card. Is that everything?", textZh: "好的。填好申报表附上收据，在右边的柜台付款。可以刷卡。就这些吗？", actionHint: "正式指引", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "No, that's everything. Thank you for explaining the process.",
            textZh: "没有了，就这些。谢谢你解释流程。",
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "You're welcome. After payment, you're free to go. Welcome to the United States.",
            textZh: "不客气。缴完费就可以走了。欢迎来到美国。",
            alternativeExpressions: [
              { textEn: "No problem. Once you've paid, you're free to go. Welcome to the US!", textZh: "没问题。付完款就可以走了。欢迎来美国！", actionHint: "口语化欢迎", frequency: "common" },
              { textEn: "You're all set after payment. Welcome to the United States — enjoy your stay.", textZh: "付完就好了。欢迎来到美国——祝您玩得愉快。", actionHint: "正式欢迎", frequency: "occasional" }
            ],
          },
        ],
      },
      {
        id: "random-inspection",
        titleZh: "随机检查",
        titleEn: "Random Inspection",
        description: "被随机选中进行行李检查",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "海关",
            textEn: "Excuse me, sir. You've been randomly selected for a secondary inspection. Please bring your bags to this counter.",
            textZh: "先生，打扰了。您被随机选中进行二次检查。请把行李拿到这个柜台。",
            keyPhrases: [
              { en: "randomly selected", zh: "随机选中" },
              { en: "secondary inspection", zh: "二次检查" },
            ],
            alternativeExpressions: [
              { textEn: "Sir, you've been randomly selected for a secondary check. Please bring your luggage to this counter.", textZh: "先生，您被随机抽中二次检查。请把行李拿到这个柜台。", actionHint: "简洁通知", frequency: "common" },
              { textEn: "Excuse me, sir. We need to do a quick secondary screening. Could you bring your bags over here, please?", textZh: "先生，打扰了。需要做个快速二次筛查。请把行李拿过来好吗？", actionHint: "委婉通知", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Sure. Is there a problem?",
            textZh: "好的。有什么问题吗？",
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "No, it's just a routine check. Please open this suitcase for me. What is the purpose of your visit?",
            textZh: "没有，只是例行检查。请打开这个箱子。您这次来访的目的是什么？",
            keyPhrases: [
              { en: "routine check", zh: "例行检查" },
              { en: "purpose of your visit", zh: "来访目的" },
            ],
            alternativeExpressions: [
              { textEn: "Nothing to worry about — just a routine check. Please open this suitcase. What brings you here today?", textZh: "不用担心——只是例行检查。请打开这个箱子。您来这里做什么？", actionHint: "轻松语气", frequency: "common" },
              { textEn: "No, this is purely random. Could you open this bag, please? And can you tell me why you're visiting?", textZh: "没有什么原因，纯随机的。请打开这个包好吗？能说说您来访的目的吗？", actionHint: "安抚并询问", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I'm here on vacation for two weeks.",
            textZh: "我来度假，待两个星期。",
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "What are these packages? They look like they contain food.",
            textZh: "这些包裹是什么？看起来像是食物。",
            alternativeExpressions: [
              { textEn: "What's in these packages? They look like food items.", textZh: "这些包裹里是什么？看着像食品。", actionHint: "直接询问", frequency: "common" },
              { textEn: "Can you tell me what these are? They appear to contain food.", textZh: "能说说这些是什么吗？看起来像是食物。", actionHint: "礼貌询问", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Those are dried snacks and tea from China — gifts for my friends here.",
            textZh: "那些是中国的干零食和茶叶——给这边朋友带的礼物。",
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "Dried and sealed packaged food is generally fine. However, I need to check — are any of these items meat-based? Dried meat, jerky, or meat-filled pastries are restricted.",
            textZh: "密封包装的干食品一般没问题。但我需要确认——这些里面有含肉的吗？肉干、肉脯或含肉糕点是受限制的。",
            keyPhrases: [
              { en: "sealed packaged food", zh: "密封包装的食品" },
              { en: "meat-based", zh: "含肉的" },
              { en: "restricted", zh: "受限制的" },
            ],
            alternativeExpressions: [
              { textEn: "Sealed, packaged dry food is generally okay. But do any of these contain meat? Dried meat, jerky, or anything with meat filling is restricted.", textZh: "密封包装的干食品一般没问题。但有含肉的吗？肉干、肉脯或含肉馅的都受限制。", actionHint: "口语化确认", frequency: "common" },
              { textEn: "Dry goods in commercial packaging are usually fine. I need to check, though — any of these meat-based? Things like jerky or meat pastries are restricted.", textZh: "商业包装的干货通常没事。但我需要确认——有肉类的吗？比如肉干或肉馅糕点是受限的。", actionHint: "具体列举受限品", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "No meat products. It's just green tea, dried fruit, and cookies.",
            textZh: "没有肉类产品。就是绿茶、果干和饼干。",
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "Those are all fine. What about this bag here? It's quite heavy.",
            textZh: "那些都没问题。这个袋子呢？挺重的。",
            alternativeExpressions: [
              { textEn: "Those are fine. What about this heavy bag here?", textZh: "那些没问题。这个重的袋子是什么？", actionHint: "简洁过渡", frequency: "common" },
              { textEn: "All good on those. Now, what's in this bag? It feels pretty heavy.", textZh: "那些都可以。这个袋子里是什么？挺沉的。", actionHint: "口语化追问", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "That's just my shoes and some souvenirs — ceramic cups and keychains.",
            textZh: "那只是我的鞋和一些纪念品——陶瓷杯和钥匙扣。",
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "Everything looks good. You're all clear. You can close up your bags and proceed to the exit. Enjoy your stay!",
            textZh: "一切正常。您可以了。把行李收好从出口出去吧。祝您玩得开心！",
            keyPhrases: [
              { en: "all clear", zh: "没问题了" },
              { en: "proceed to the exit", zh: "从出口出去" },
            ],
            alternativeExpressions: [
              { textEn: "All clear! You can pack up and head to the exit. Enjoy your stay!", textZh: "检查通过！收拾好行李从出口出去吧。祝您愉快！", actionHint: "口语化放行", frequency: "common" },
              { textEn: "Everything checks out. You're free to go — just pack up and proceed through the exit. Have a great time!", textZh: "一切正常。可以走了——收好行李从出口离开。祝您玩得开心！", actionHint: "正式放行", frequency: "occasional" }
            ],
          },
        ],
      },
    ],
  },

  // ==================== 13. 海关食品检查 ====================
  {
    id: "airport-customs-food",
    category: "airport",
    titleZh: "海关食品检查",
    titleEn: "Customs Food Inspection",
    description: "携带食品入境时被海关询问和检查",
    otherRole: "海关检疫官员",
    otherRoleIcon: "🍎",
    flows: [
      {
        id: "food-declaration",
        titleZh: "食品申报",
        titleEn: "Declaring Food Items",
        description: "主动申报携带的食品",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "检疫官",
            textEn: "Are you bringing any food, plant, or animal products into the country?",
            textZh: "您有携带任何食品、植物或动物产品入境吗？",
            keyPhrases: [
              { en: "food, plant, or animal products", zh: "食品、植物或动物产品" },
            ],
            alternativeExpressions: [
              { textEn: "Are you bringing any food, plants, or animal products into the country?", textZh: "有没有携带食品、植物或动物产品入境？", actionHint: "直接询问", frequency: "common" },
              { textEn: "Do you have any food items, plant material, or products of animal origin in your luggage?", textZh: "行李里有食品、植物材料或动物源产品吗？", actionHint: "更正式的表达", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I have some packaged snacks and instant noodles from China.",
            textZh: "有的，我带了一些中国的包装零食和方便面。",
            culturalNote: "很多中国旅客喜欢带方便面、辣酱等出国。大部分包装好的加工食品可以带，但含肉的要小心。",
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn: "Can I see them, please? I need to check the ingredients. Do any of them contain meat or poultry?",
            textZh: "可以看一下吗？我需要检查成分。有没有含肉类或禽类的？",
            keyPhrases: [
              { en: "ingredients", zh: "成分" },
              { en: "meat or poultry", zh: "肉类或禽类" },
            ],
            alternativeExpressions: [
              { textEn: "May I take a look? I need to check the ingredients. Any of these contain meat or poultry?", textZh: "能看看吗？我需要查成分。有含肉或禽类的吗？", actionHint: "简洁请求", frequency: "common" },
              { textEn: "Let me see those, please. I'll need to check what's in them. Do any contain meat or poultry products?", textZh: "请让我看看。我需要确认成分。有含肉类或禽类产品的吗？", actionHint: "礼貌查验", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "The instant noodles have a small packet of beef flavoring. Is that a problem?",
            textZh: "方便面里有一小包牛肉调味料。有问题吗？",
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn: "If it's just a flavoring powder, it's usually fine. But if it contains actual meat pieces, we'd need to confiscate it. Let me take a look... This one has dried meat bits — I'm sorry, but I'll need to take this.",
            textZh: "如果只是调味粉，通常没问题。但如果含有真正的肉粒，我们需要没收。让我看看……这个有肉丁——很抱歉，这个我需要没收。",
            keyPhrases: [
              { en: "flavoring powder", zh: "调味粉" },
              { en: "confiscate", zh: "没收" },
              { en: "dried meat bits", zh: "肉丁" },
            ],
            alternativeExpressions: [
              { textEn: "If it's just flavoring, that's usually fine. Actual meat pieces are a different story. Let me check this one... It has dried meat in it — I'll have to take this, sorry.", textZh: "如果只是调味的，一般没事。真正的肉粒就不行了。让我看看这个……有肉丁——很抱歉这个要没收。", actionHint: "口语化解释", frequency: "common" },
              { textEn: "Flavoring powder is okay, but actual meat content isn't allowed. This one here has dried meat bits, so I'll need to confiscate it. The rest should be fine.", textZh: "调味粉可以，但含肉的不行。这个有肉丁，需要没收。其余的应该没问题。", actionHint: "分清可带和不可带", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "What about the other ones? I have three more packs that are vegetable flavor.",
            textZh: "其他的呢？我还有三包蔬菜味的。",
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn: "Let me check... Vegetable flavor with no meat ingredients — those are fine. You can keep them. What else do you have?",
            textZh: "我看看……蔬菜味的没有肉类成分——这些没问题。可以留下。还有什么？",
            alternativeExpressions: [
              { textEn: "Let me see... Vegetable flavor, no meat — those are fine, you can keep them. What else have you got?", textZh: "我看看……蔬菜味的，没有肉——这些没问题，可以留下。还有什么？", actionHint: "口语化检查", frequency: "common" },
              { textEn: "These are vegetable-based with no meat ingredients — all good. Anything else to show me?", textZh: "这些是蔬菜的，没有肉类成分——没问题。还有别的要给我看的吗？", actionHint: "快速确认", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I also brought some traditional Chinese medicine herbs. Are those allowed?",
            textZh: "我还带了一些中药材。可以带吗？",
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn: "Herbal medicine in processed, commercially packaged form is generally okay. But raw herbs, seeds, or anything that could be planted is prohibited. Are these in sealed packages?",
            textZh: "加工过的、商业包装的草药一般可以。但生的草药、种子或者任何能种植的东西是禁止的。这些是密封包装的吗？",
            keyPhrases: [
              { en: "commercially packaged", zh: "商业包装的" },
              { en: "raw herbs", zh: "生草药" },
              { en: "prohibited", zh: "禁止的" },
              { en: "sealed packages", zh: "密封包装" },
            ],
            alternativeExpressions: [
              { textEn: "Processed herbal medicine in sealed packaging is generally fine. But raw herbs, seeds, or anything plantable is banned. Are these commercially packaged?", textZh: "密封包装的加工草药一般可以。但生药材、种子或能种植的东西是禁止的。这些是商业包装的吗？", actionHint: "口语化确认", frequency: "common" },
              { textEn: "If they're commercially made and sealed, herbal medicine is usually okay. Raw herbs and seeds are prohibited, though. Let me check the packaging.", textZh: "如果是商业生产密封包装的，草药一般可以。但生药材和种子是禁止的。让我看看包装。", actionHint: "主动检查", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, they're all in sealed bags from the pharmacy. Here, you can see.",
            textZh: "是的，都是药房的密封袋装的。给您看。",
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn: "These look fine. I'll just keep the one pack of noodles. Everything else is cleared. In the future, check the USDA website before traveling — it lists exactly what food items are allowed. Have a nice trip.",
            textZh: "这些没问题。我只收走那一包面。其他都通过了。以后出发前可以查看USDA网站——上面列了哪些食品可以带。祝旅途愉快。",
            keyPhrases: [
              { en: "cleared", zh: "通过了" },
              { en: "USDA website", zh: "美国农业部网站" },
            ],
            alternativeExpressions: [
              { textEn: "These are all fine. I'm just keeping the noodles with meat. Before your next trip, check the USDA website for what's allowed. Have a good time!", textZh: "这些都没问题。我只收含肉的那包面。下次出发前可以查USDA网站看什么能带。祝玩得开心！", actionHint: "口语化总结", frequency: "common" },
              { textEn: "Everything else passes inspection — I'll only confiscate the meat noodles. Tip for next time: the USDA website lists allowed food items. Enjoy your trip!", textZh: "其他都通过检查了——我只没收含肉的面。下次的建议：USDA网站有允许携带食品的清单。祝旅途愉快！", actionHint: "附带实用建议", frequency: "occasional" }
            ],
          },
        ],
      },
      {
        id: "fruit-confiscation",
        titleZh: "水果被没收",
        titleEn: "Fruit Confiscation",
        description: "不知道新鲜水果不能带入境而被没收",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "检疫官",
            textEn: "Ma'am, I see you checked 'No' on the declaration form for food items, but our scanner shows what appears to be fresh produce in your bag. Can you open it?",
            textZh: "女士，我看到您在申报表的食品栏勾了'否'，但扫描仪显示您包里有看起来像新鲜农产品的东西。能打开看看吗？",
            keyPhrases: [
              { en: "declaration form", zh: "申报表" },
              { en: "scanner", zh: "扫描仪" },
              { en: "fresh produce", zh: "新鲜农产品" },
            ],
            alternativeExpressions: [
              { textEn: "Ma'am, you marked 'No' for food items, but our scanner is showing what looks like fresh produce. Mind opening your bag?", textZh: "女士，您在食品栏勾了'否'，但扫描仪显示有新鲜农产品。能打开包看看吗？", actionHint: "口语化质询", frequency: "common" },
              { textEn: "Excuse me, ma'am. Your declaration says no food, but the scanner picked up something that looks like fresh fruit or vegetables. Could you open that bag for me?", textZh: "女士，打扰了。您的申报表写的没有食品，但扫描仪检测到像是新鲜水果或蔬菜的东西。能帮我打开那个包吗？", actionHint: "礼貌指出不一致", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Oh, I forgot about those. I have some apples and oranges from the airplane meal.",
            textZh: "哦，我忘了那些了。那是飞机餐剩的苹果和橙子。",
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn: "I understand. Unfortunately, fresh fruits cannot be brought into the country — even from the airplane. They can carry pests and diseases. I'll need to take them.",
            textZh: "我理解。但很遗憾，新鲜水果不能带入境——即使是飞机上的也不行。它们可能携带病虫害。我需要没收。",
            keyPhrases: [
              { en: "fresh fruits", zh: "新鲜水果" },
              { en: "pests and diseases", zh: "病虫害" },
            ],
            alternativeExpressions: [
              { textEn: "I understand, but fresh fruit can't be brought in — even from the plane. It can carry pests. I'll need to take these.", textZh: "我理解，但新鲜水果不能带入境——即使是飞机上拿的。可能携带虫害。这些我需要收走。", actionHint: "口语化解释", frequency: "common" },
              { textEn: "Even if they're from the aircraft, fresh fruits aren't allowed into the country — they can introduce pests and diseases. I'll have to confiscate them.", textZh: "即使是飞机上的，新鲜水果也不允许入境——可能传播病虫害。我需要没收。", actionHint: "正式说明原因", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I'm sorry, I really didn't know. Will I be fined?",
            textZh: "对不起，我真的不知道。会被罚款吗？",
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn: "Since you declared 'No' when you actually had food items, you could face a fine. However, for a first offense with fruit from the plane, we typically just issue a warning. I'll confiscate the fruit and note it in your file.",
            textZh: "因为您实际携带了食品却申报了'否'，可能会被罚款。不过，对于初次违规且是飞机上的水果，我们通常只发警告。我会没收水果并记录在案。",
            keyPhrases: [
              { en: "face a fine", zh: "面临罚款" },
              { en: "first offense", zh: "初次违规" },
              { en: "issue a warning", zh: "发出警告" },
              { en: "note it in your file", zh: "记录在案" },
            ],
            alternativeExpressions: [
              { textEn: "Technically, declaring 'No' when you have food items could lead to a fine. But since it's your first time and it's just fruit from the plane, I'll give you a warning. I'll confiscate the fruit and note it.", textZh: "严格来说，有食品却申报'否'可能被罚款。但这是第一次而且只是飞机上的水果，我发个警告。水果没收并记录。", actionHint: "口语化从宽处理", frequency: "common" },
              { textEn: "A false declaration can result in a penalty. However, for a first-time offense involving airline fruit, we typically just issue a warning. I'll take the fruit and make a note in the system.", textZh: "虚假申报可能导致罚款。但对于首次违规且只是飞机上水果的情况，我们通常只出警告。我没收水果并在系统里记录。", actionHint: "正式但从宽", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you for being understanding. I'll remember next time. What else can't I bring in?",
            textZh: "谢谢您的理解。下次我会注意。还有什么不能带的？",
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn: "No fresh fruits, vegetables, meats, or dairy without proper certification. Seeds and soil are also banned. Processed and commercially packaged foods are usually fine. When in doubt, always declare it — there's no penalty for declaring.",
            textZh: "新鲜水果、蔬菜、肉类和乳制品没有正规证书都不行。种子和土壤也禁止。加工过的商业包装食品一般没问题。不确定的时候一定要申报——申报不会受罚。",
            keyPhrases: [
              { en: "proper certification", zh: "正规证书" },
              { en: "when in doubt", zh: "不确定的时候" },
              { en: "no penalty for declaring", zh: "申报不会受罚" },
            ],
            alternativeExpressions: [
              { textEn: "No fresh fruit, vegetables, meat, or dairy without the right paperwork. Seeds and soil are banned too. Packaged, processed food is usually fine. When in doubt, just declare it — no penalty for that.", textZh: "新鲜水果、蔬菜、肉类、乳制品没有相应证件都不行。种子和土壤也禁止。包装加工食品一般可以。不确定就申报——不会被罚。", actionHint: "口语化总结规则", frequency: "common" },
              { textEn: "The rule is simple: no fresh produce, meats, or dairy without certificates. Processed, sealed food is okay. The safest bet is to always declare — there's zero penalty for declaring.", textZh: "规则很简单：没有证书不能带新鲜农产品、肉类和乳制品。加工密封食品可以。最保险的做法是永远申报——申报不会受罚。", actionHint: "简化规则", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I understand. So declaring is always the safe option?",
            textZh: "我明白了。所以申报总是安全的选择？",
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn: "Exactly. If you declare and the item isn't allowed, we just take it — no fine, no record. But if you don't declare and we find it, there can be consequences. You're all set now — have a good stay.",
            textZh: "没错。如果你申报了但东西不让带，我们只是没收——不罚款、不记录。但如果你没申报而我们发现了，就可能有后果。您现在可以了——祝您玩得开心。",
            keyPhrases: [
              { en: "consequences", zh: "后果" },
              { en: "you're all set", zh: "您可以了" },
            ],
            alternativeExpressions: [
              { textEn: "Right. If you declare it and it's not allowed, we just take it — no fine, no record. But if we find undeclared items, there could be consequences. You're good to go now — enjoy your stay!", textZh: "没错。申报了但不让带，我们只是收走——不罚款不记录。但没申报被查出来就可能有后果。您现在可以走了——祝愉快！", actionHint: "口语化放行", frequency: "common" },
              { textEn: "That's the key takeaway — declaring is always safe. Hiding items is what gets people in trouble. Alright, you're all set. Welcome and have a great stay!", textZh: "这是关键——申报永远是安全的。藏东西才会惹麻烦。好了，您可以了。欢迎并祝您玩得开心！", actionHint: "强调关键信息", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Lesson learned. Thank you!",
            textZh: "学到了。谢谢！",
          },
        ],
      },
    ],
  },

  // ==================== 14. 入境审查（目的） ====================
  {
    id: "airport-immigration-purpose",
    category: "airport",
    titleZh: "入境审查 — 说明目的",
    titleEn: "Immigration — Purpose of Visit",
    description: "入境时被边检官员询问旅行目的和行程",
    otherRole: "入境官员",
    otherRoleIcon: "🛂",
    flows: [
      {
        id: "tourism-visit",
        titleZh: "旅游入境",
        titleEn: "Tourism Entry",
        description: "以旅游目的入境，回答边检问题",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "入境官",
            textEn: "Good morning. Passport, please. What's the purpose of your visit?",
            textZh: "早上好。请出示护照。您此行的目的是什么？",
            keyPhrases: [
              { en: "purpose of your visit", zh: "此行目的" },
            ],
            alternativeExpressions: [
              { textEn: "Hello. Passport, please. What brings you here today?", textZh: "你好。请出示护照。今天来做什么？", actionHint: "口语化问询", frequency: "common" },
              { textEn: "Good day. May I see your passport? And what's the reason for your visit?", textZh: "您好。能看看护照吗？此行目的是什么？", actionHint: "正式问询", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I'm here for vacation. Sightseeing and visiting friends.",
            textZh: "我来度假的。观光和看望朋友。",
            culturalNote: "回答入境官的问题要简洁明了，不要紧张也不要说太多不相关的信息。",
          },
          {
            speaker: "them",
            role: "入境官",
            textEn: "How long will you be staying?",
            textZh: "您打算待多久？",
            alternativeExpressions: [
              { textEn: "And how long are you planning to stay?", textZh: "打算待多长时间？", actionHint: "口语化追问", frequency: "common" },
              { textEn: "What's the duration of your stay?", textZh: "停留多久？", actionHint: "简洁追问", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "About 10 days.",
            textZh: "大约10天。",
          },
          {
            speaker: "them",
            role: "入境官",
            textEn: "Where will you be staying?",
            textZh: "您住在哪里？",
            alternativeExpressions: [
              { textEn: "And where are you staying while you're here?", textZh: "在这期间住哪里？", actionHint: "口语化询问", frequency: "common" },
              { textEn: "What's your accommodation address?", textZh: "您的住宿地址是哪里？", actionHint: "正式问法", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I'll be at the Hilton in downtown Manhattan for the first five nights, then staying with a friend in Brooklyn.",
            textZh: "前五晚住曼哈顿市中心的希尔顿，之后住布鲁克林朋友家。",
          },
          {
            speaker: "them",
            role: "入境官",
            textEn: "Do you have a return ticket?",
            textZh: "有回程机票吗？",
            keyPhrases: [
              { en: "return ticket", zh: "回程机票" },
            ],
            alternativeExpressions: [
              { textEn: "Got a return flight booked?", textZh: "回程机票订好了吗？", actionHint: "口语化询问", frequency: "common" },
              { textEn: "Can you show me proof of your return flight?", textZh: "能出示回程航班证明吗？", actionHint: "正式要求", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I fly back to Shanghai on the 22nd. Here's my booking confirmation.",
            textZh: "有的，22号飞回上海。这是我的预订确认。",
          },
          {
            speaker: "them",
            role: "入境官",
            textEn: "Are you carrying more than $10,000 in cash or monetary instruments?",
            textZh: "您携带的现金或金融票据超过10000美元吗？",
            keyPhrases: [
              { en: "monetary instruments", zh: "金融票据" },
            ],
            alternativeExpressions: [
              { textEn: "Are you carrying over $10,000 in cash or financial instruments?", textZh: "携带的现金或金融票据有没有超过1万美元？", actionHint: "口语化询问", frequency: "common" },
              { textEn: "Do you have more than ten thousand dollars in cash or equivalents on you?", textZh: "身上有超过1万美元的现金或等值物品吗？", actionHint: "换种说法", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "No, I have about $500 in cash and my credit cards.",
            textZh: "没有，我带了大约500美元现金和信用卡。",
          },
          {
            speaker: "them",
            role: "入境官",
            textEn: "Everything looks good. Welcome to New York. Enjoy your trip.",
            textZh: "一切正常。欢迎来到纽约。祝您旅途愉快。",
            alternativeExpressions: [
              { textEn: "All good. Welcome to New York — have a great trip.", textZh: "没问题。欢迎来纽约——祝旅途愉快。", actionHint: "口语化放行", frequency: "common" },
              { textEn: "Everything checks out. Welcome — enjoy your stay in New York.", textZh: "一切正常。欢迎——祝在纽约过得愉快。", actionHint: "正式放行", frequency: "occasional" }
            ],
          },
        ],
      },
      {
        id: "business-visit",
        titleZh: "商务入境",
        titleEn: "Business Entry",
        description: "以商务目的入境，被询问更多详情",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "入境官",
            textEn: "Passport and visa, please. What brings you to the United States?",
            textZh: "请出示护照和签证。您为什么来美国？",
            alternativeExpressions: [
              { textEn: "Passport and visa, please. What's your reason for coming to the US?", textZh: "请出示护照和签证。来美国的目的是什么？", actionHint: "口语化问询", frequency: "common" },
              { textEn: "May I see your passport and visa? And what brings you to the United States today?", textZh: "能看看护照和签证吗？今天来美国做什么？", actionHint: "正式问询", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I'm here on business. I have a B-1 visa. I'm attending a tech conference and meeting with our US partners.",
            textZh: "我是来出差的。我有B-1签证。参加一个科技会议，还要和我们的美国合作伙伴见面。",
            vocabNotes: {
              "B-1 visa": {
                meaningInContext: "在这里指美国商务签证，允许参加会议、谈判等商务活动，但不能工作领薪",
                similarUsage: "类似分类：B-2是旅游签证，H-1B是工作签证",
              },
            },
          },
          {
            speaker: "them",
            role: "入境官",
            textEn: "What company do you work for, and who are you meeting?",
            textZh: "您在什么公司工作？要见谁？",
            alternativeExpressions: [
              { textEn: "Which company are you with, and who will you be meeting?", textZh: "在什么公司？要见谁？", actionHint: "简洁追问", frequency: "common" },
              { textEn: "What's your employer's name? And who are you meeting here?", textZh: "你的雇主叫什么？在这边要见谁？", actionHint: "口语化追问", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I work for TechStar in Shanghai. We're meeting with our partners at InnoVentures here in San Jose.",
            textZh: "我在上海的TechStar工作。我们要和这里圣何塞的InnoVentures合作伙伴见面。",
          },
          {
            speaker: "them",
            role: "入境官",
            textEn: "Do you have an invitation letter or any documentation from the company you're visiting?",
            textZh: "有邀请函或要访问公司的任何文件吗？",
            keyPhrases: [
              { en: "invitation letter", zh: "邀请函" },
              { en: "documentation", zh: "文件" },
            ],
            alternativeExpressions: [
              { textEn: "Do you have an invitation letter or documents from the company you're visiting?", textZh: "有邀请函或访问公司出具的文件吗？", actionHint: "简洁要求", frequency: "common" },
              { textEn: "Can you show me any paperwork — an invitation letter or meeting confirmation from the host company?", textZh: "能出示一下相关文件吗——邀请函或接待公司的会议确认？", actionHint: "具体列举所需文件", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, here's the invitation letter from InnoVentures and my conference registration.",
            textZh: "有的，这是InnoVentures的邀请函和会议注册确认。",
          },
          {
            speaker: "them",
            role: "入境官",
            textEn: "Will you be receiving any payment or salary while in the US?",
            textZh: "您在美国期间会收到任何报酬或工资吗？",
            keyPhrases: [
              { en: "receiving payment", zh: "收到报酬" },
              { en: "salary", zh: "工资" },
            ],
            alternativeExpressions: [
              { textEn: "Will you be getting paid or receiving any salary during your time in the US?", textZh: "在美国期间会收到报酬或工资吗？", actionHint: "口语化询问", frequency: "common" },
              { textEn: "Are you going to receive any form of compensation while you're here?", textZh: "在这期间会收到任何形式的报酬吗？", actionHint: "换种说法", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "No, my salary is paid by my company in China. I'm just here for meetings and the conference.",
            textZh: "不会，我的工资由中国的公司支付。我只是来开会和参加会议的。",
          },
          {
            speaker: "them",
            role: "入境官",
            textEn: "How long will you be in the country?",
            textZh: "您在美国待多久？",
            alternativeExpressions: [
              { textEn: "How long will you be staying?", textZh: "打算待多久？", actionHint: "简洁追问", frequency: "common" },
              { textEn: "And what's the length of your planned stay?", textZh: "计划停留多长时间？", actionHint: "稍正式", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Five business days. I fly back on Friday.",
            textZh: "五个工作日。周五飞回去。",
          },
          {
            speaker: "them",
            role: "入境官",
            textEn: "Alright. I'm stamping your passport for a 30-day stay. Remember, with a B-1, you cannot engage in gainful employment. Have a productive trip.",
            textZh: "好的。我给您的护照盖30天的停留章。请记住，B-1签证不能从事有报酬的工作。祝出差顺利。",
            keyPhrases: [
              { en: "stamping your passport", zh: "给护照盖章" },
              { en: "gainful employment", zh: "有报酬的工作" },
            ],
            alternativeExpressions: [
              { textEn: "Everything looks fine. I'm giving you a 30-day stamp. Just remember, B-1 means no paid work here. Have a good trip.", textZh: "都没问题。给您盖30天的章。记住，B-1签证不能在这打工。祝出差顺利。", actionHint: "口语化放行", frequency: "common" },
              { textEn: "All good. I'm stamping you in for 30 days. Please note — your B-1 visa doesn't allow gainful employment. Safe travels.", textZh: "没问题。给您盖30天入境章。请注意——B-1签证不允许从事有偿工作。一路平安。", actionHint: "正式放行", frequency: "occasional" }
            ],
          },
        ],
      },
    ],
  },

  // ==================== 15. 回国入境 ====================
  {
    id: "airport-immigration-returning",
    category: "airport",
    titleZh: "回国入境",
    titleEn: "Returning Home Immigration",
    description: "旅行结束回国时的入境流程",
    otherRole: "入境官员",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "smooth-return",
        titleZh: "顺利回国",
        titleEn: "Smooth Return",
        description: "回国入境的标准流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "入境官",
            textEn: "Welcome back. Passport, please. Where are you coming from?",
            textZh: "欢迎回国。请出示护照。您从哪里回来的？",
            alternativeExpressions: [
              { textEn: "Welcome home. Passport, please. Where are you arriving from?", textZh: "欢迎回来。请出示护照。从哪里回来的？", actionHint: "口语化问询", frequency: "common" },
              { textEn: "Good to have you back. May I see your passport? And which country are you returning from?", textZh: "欢迎回国。看看护照？从哪个国家回来的？", actionHint: "友好问询", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I'm coming back from the United States. I was there for two weeks.",
            textZh: "我从美国回来。在那边待了两个星期。",
          },
          {
            speaker: "them",
            role: "入境官",
            textEn: "What was the purpose of your trip?",
            textZh: "旅行目的是什么？",
            alternativeExpressions: [
              { textEn: "And what was the reason for your trip?", textZh: "出去是什么事？", actionHint: "口语化追问", frequency: "common" },
              { textEn: "What was the nature of your visit abroad?", textZh: "出国的目的是什么？", actionHint: "稍正式的问法", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Vacation. I visited New York and Los Angeles.",
            textZh: "度假。去了纽约和洛杉矶。",
          },
          {
            speaker: "them",
            role: "入境官",
            textEn: "Do you have anything to declare? Any items purchased abroad exceeding 5,000 RMB in value?",
            textZh: "有什么需要申报的吗？在国外购买的物品总价值超过5000元人民币的？",
            keyPhrases: [
              { en: "items purchased abroad", zh: "在国外购买的物品" },
              { en: "exceeding", zh: "超过" },
            ],
            alternativeExpressions: [
              { textEn: "Anything to declare? Did you buy anything abroad worth more than 5,000 RMB total?", textZh: "有要申报的吗？在国外买的东西总价值超过5000元人民币吗？", actionHint: "口语化询问", frequency: "common" },
              { textEn: "Are you bringing back any goods purchased overseas? The duty-free threshold is 5,000 RMB per person.", textZh: "有在海外买的东西带回来吗？每人免税额度是5000元人民币。", actionHint: "说明免税额度", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I bought a handbag and some cosmetics. The total is about 8,000 RMB.",
            textZh: "我买了一个手提包和一些化妆品。总共大约8000元人民币。",
          },
          {
            speaker: "them",
            role: "入境官",
            textEn: "You'll need to go through the red channel for declaration. The duty on the amount over 5,000 RMB will be assessed there. Do you have the receipts?",
            textZh: "您需要走红色通道申报。超过5000元的部分会在那边评估税额。有收据吗？",
            keyPhrases: [
              { en: "red channel", zh: "红色通道（申报通道）" },
              { en: "duty", zh: "关税" },
              { en: "assessed", zh: "评估" },
            ],
            alternativeExpressions: [
              { textEn: "Then you'll need to go through the red channel. They'll work out the duty on the amount over 5,000 RMB. Have your receipts ready.", textZh: "那您需要走红色通道。超过5000元的部分在那边算税。收据准备好。", actionHint: "口语化指引", frequency: "common" },
              { textEn: "Please use the red channel for declaration. The tax will be assessed on the portion exceeding 5,000 RMB. Do you have the purchase receipts?", textZh: "请走红色申报通道。超出5000元的部分会在那边评估税额。购买收据有吗？", actionHint: "正式指引", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I have all the receipts. Where is the red channel?",
            textZh: "有的，收据都有。红色通道在哪里？",
          },
          {
            speaker: "them",
            role: "入境官",
            textEn: "After you collect your luggage, go to the right side — you'll see the red 'Goods to Declare' sign. They'll help you there.",
            textZh: "取完行李后往右走——你会看到红色的'申报物品'标志。那里有人帮你。",
            keyPhrases: [
              { en: "Goods to Declare", zh: "申报物品" },
            ],
            alternativeExpressions: [
              { textEn: "Grab your luggage first, then head right — you'll see the red 'Goods to Declare' sign. Someone there will help you.", textZh: "先取行李，然后往右走——会看到红色'申报物品'标志。那里有人帮你。", actionHint: "口语化指路", frequency: "common" },
              { textEn: "Pick up your bags, then follow the signs to the red channel on the right side. The customs officers there will process your declaration.", textZh: "取完行李后跟着指示牌走右边的红色通道。那里的海关人员会处理你的申报。", actionHint: "详细指路", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Thank you.",
            textZh: "明白了。谢谢。",
          },
          {
            speaker: "them",
            role: "入境官",
            textEn: "Welcome home. Next, please.",
            textZh: "欢迎回家。下一位。",
            alternativeExpressions: [
              { textEn: "Welcome back. Next person, please.", textZh: "欢迎回来。下一位。", actionHint: "简洁放行", frequency: "common" },
              { textEn: "Good to have you home. Next, please.", textZh: "欢迎回家。请下一位。", actionHint: "友好放行", frequency: "occasional" }
            ],
          },
        ],
      },
      {
        id: "health-declaration",
        titleZh: "健康申报",
        titleEn: "Health Declaration",
        description: "入境时需要做健康申报或体温检测",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "检疫官",
            textEn: "Please step over here for a health screening. Have you filled out the health declaration form?",
            textZh: "请到这边进行健康检查。您填了健康申报表了吗？",
            keyPhrases: [
              { en: "health screening", zh: "健康检查" },
              { en: "health declaration form", zh: "健康申报表" },
            ],
            alternativeExpressions: [
              { textEn: "Step over here for a health check, please. Have you filled out the health declaration form?", textZh: "请到这边做健康检查。健康申报表填了吗？", actionHint: "简洁指引", frequency: "common" },
              { textEn: "Could you come this way, please? We need to do a quick health screening. Do you have your health declaration?", textZh: "请往这边走好吗？需要做个快速健康筛查。有健康申报表吗？", actionHint: "礼貌引导", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I filled it out on the app before landing. Here's the QR code.",
            textZh: "填了，落地前在APP上填的。这是二维码。",
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn: "Thank you. Let me scan it... I see you traveled through two countries. Did you experience any symptoms during your trip — fever, cough, or diarrhea?",
            textZh: "谢谢。我扫一下……看到您经过了两个国家。旅途中有没有出现任何症状——发烧、咳嗽或腹泻？",
            keyPhrases: [
              { en: "symptoms", zh: "症状" },
              { en: "fever, cough, or diarrhea", zh: "发烧、咳嗽或腹泻" },
            ],
            alternativeExpressions: [
              { textEn: "Thanks. Let me scan this... I see you visited two countries. Any symptoms during the trip — fever, cough, or diarrhea?", textZh: "谢谢。扫一下……看到您去了两个国家。旅途中有没有症状——发烧、咳嗽或拉肚子？", actionHint: "口语化问诊", frequency: "common" },
              { textEn: "Got it. Scanning now... You've been to two countries. Did you experience any health issues on the trip? Fever, coughing, stomach problems?", textZh: "好的。扫描中……您去了两个国家。旅途中有什么健康问题吗？发烧、咳嗽、肠胃不适？", actionHint: "详细问诊", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "No, I've been feeling fine the whole trip.",
            textZh: "没有，整个旅途中身体一直很好。",
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn: "Good. Let me take your temperature... 36.5, that's normal. Have you been to any farms, livestock markets, or had close contact with animals?",
            textZh: "好的。量一下体温……36.5度，正常。您有没有去过农场、牲畜市场，或与动物密切接触？",
            keyPhrases: [
              { en: "take your temperature", zh: "量体温" },
              { en: "livestock markets", zh: "牲畜市场" },
              { en: "close contact", zh: "密切接触" },
            ],
            alternativeExpressions: [
              { textEn: "Good. Let me check your temperature... 36.5, all normal. Have you been near any farms, animal markets, or had contact with animals?", textZh: "好的。量一下体温……36.5，正常。有没有去过农场、动物市场，或接触过动物？", actionHint: "口语化问诊", frequency: "common" },
              { textEn: "Temperature is 36.5 — perfectly fine. One more question: any exposure to farms, livestock, or wild animals during your trip?", textZh: "体温36.5——完全正常。再问一个：旅途中有接触过农场、牲畜或野生动物吗？", actionHint: "简洁追问", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "No, I stayed in the city the whole time.",
            textZh: "没有，全程都在城市里。",
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn: "Are you carrying any biological samples, medications, or medical supplies?",
            textZh: "您携带了任何生物样本、药品或医疗用品吗？",
            keyPhrases: [
              { en: "biological samples", zh: "生物样本" },
              { en: "medications", zh: "药品" },
              { en: "medical supplies", zh: "医疗用品" },
            ],
            alternativeExpressions: [
              { textEn: "Do you have any biological samples, medications, or medical supplies with you?", textZh: "有携带生物样本、药品或医疗用品吗？", actionHint: "简洁询问", frequency: "common" },
              { textEn: "Are you carrying any medicines, medical equipment, or biological samples in your luggage?", textZh: "行李里有没有药品、医疗设备或生物样本？", actionHint: "稍详细的问法", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Just some over-the-counter cold medicine and vitamins for personal use.",
            textZh: "只有一些非处方的感冒药和维生素，自用的。",
            vocabNotes: {
              "over-the-counter": {
                meaningInContext: "在这里指不需要处方就能买到的药物",
                similarUsage: "类似用法：OTC medicine（非处方药）",
              },
            },
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn: "That's fine for personal quantities. Everything looks clear. You can proceed to immigration. Have a good day.",
            textZh: "自用量没问题。一切正常。您可以去入境检查了。祝您愉快。",
            keyPhrases: [
              { en: "personal quantities", zh: "自用量" },
              { en: "proceed to immigration", zh: "去入境检查" },
            ],
            alternativeExpressions: [
              { textEn: "Personal-use quantities are fine. Everything looks good — you can go ahead to immigration. Have a nice day.", textZh: "自用量没问题。一切正常——可以去入境检查了。祝您愉快。", actionHint: "口语化放行", frequency: "common" },
              { textEn: "That amount is fine for personal use. All clear on the health check. Please proceed to immigration — have a good one!", textZh: "这个量自用没问题。健康检查通过。请去入境检查——祝您顺利！", actionHint: "简洁放行", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you!",
            textZh: "谢谢！",
          },
        ],
      },
    ],
  },

  // ==================== 16. 机场班车预订 ====================
  {
    id: "airport-shuttle-booking",
    category: "airport",
    titleZh: "机场班车预订",
    titleEn: "Airport Shuttle Booking",
    description: "预订机场到酒店的班车服务",
    otherRole: "班车服务柜台",
    otherRoleIcon: "🚐",
    flows: [
      {
        id: "hotel-shuttle",
        titleZh: "预订酒店班车",
        titleEn: "Booking Hotel Shuttle",
        description: "在机场柜台预订去酒店的班车",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need a shuttle to my hotel. Do you have service to the downtown area?",
            textZh: "你好，我需要去酒店的班车。你们有去市中心的服务吗？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Yes, we have shared shuttles to most downtown hotels. Which hotel are you going to?",
            textZh: "有的，我们有到大多数市中心酒店的拼车班车。您要去哪个酒店？",
            keyPhrases: [
              { en: "shared shuttles", zh: "拼车班车" },
              { en: "downtown hotels", zh: "市中心酒店" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! We run shared shuttles to most downtown hotels. Which hotel are you headed to?", textZh: "有的！我们有到大多数市中心酒店的拼车班车。您去哪个酒店？", actionHint: "口语化回应", frequency: "common" },
              { textEn: "Yes, we do! We have shared rides to all the major hotels downtown. What's your hotel name?", textZh: "有的！市中心各大酒店都有拼车服务。您的酒店叫什么？", actionHint: "热情回应", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "The Marriott Marquis on Broadway.",
            textZh: "百老汇的万豪侯爵酒店。",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "That's on our route. A shared shuttle is $19 per person. The next one departs in 25 minutes. If you want a private shuttle, it's $65 flat rate.",
            textZh: "那在我们的路线上。拼车班车每人19美元。下一班25分钟后出发。如果要专车，固定价65美元。",
            keyPhrases: [
              { en: "on our route", zh: "在我们的路线上" },
              { en: "flat rate", zh: "固定价" },
              { en: "departs in", zh: "…后出发" },
            ],
            alternativeExpressions: [
              { textEn: "That's on our route! The shared shuttle is $19 per person, leaving in about 25 minutes. Or a private shuttle is $65 flat.", textZh: "在我们路线上！拼车每人19美元，大约25分钟后出发。专车的话固定65美元。", actionHint: "口语化报价", frequency: "common" },
              { textEn: "We go right by there. Shared shuttle is $19 a head — next one's in 25 minutes. If you'd rather not share, a private ride is $65.", textZh: "正好经过。拼车每人19美元——下一班25分钟后。如果不想拼，专车65美元。", actionHint: "对比两种选项", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "How long does the shared shuttle take to get there?",
            textZh: "拼车班车到那里要多久？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "About 45 minutes to an hour, depending on how many stops we make. The private shuttle would be about 30 minutes — direct to your hotel.",
            textZh: "大约45分钟到1小时，取决于停靠站数。专车大约30分钟——直达您的酒店。",
            keyPhrases: [
              { en: "depending on", zh: "取决于" },
              { en: "how many stops", zh: "停靠站数" },
              { en: "direct to", zh: "直达" },
            ],
            alternativeExpressions: [
              { textEn: "Roughly 45 minutes to an hour for the shared one, depending on stops. The private shuttle goes direct — about 30 minutes.", textZh: "拼车大约45分钟到1小时，看停靠站。专车直达，大约30分钟。", actionHint: "口语化比较", frequency: "common" },
              { textEn: "With stops, the shared ride takes about 45 minutes to an hour. A private shuttle would get you there in around 30 minutes — no stops.", textZh: "有停靠的话，拼车大概45分钟到1小时。专车没有停靠，大约30分钟到。", actionHint: "突出专车优势", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with the shared shuttle. It's just me and one suitcase.",
            textZh: "我坐拼车班车。就我一个人和一个箱子。",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Great! That's $19. You can pay now or on the shuttle. Go to Door 4 on the arrivals level — look for the blue shuttle vans. Show this ticket to the driver.",
            textZh: "好的！19美元。现在付或者上车付都行。到到达层的4号门——找蓝色班车。把这张票给司机看。",
            keyPhrases: [
              { en: "arrivals level", zh: "到达层" },
              { en: "shuttle vans", zh: "班车" },
              { en: "show this ticket", zh: "出示这张票" },
            ],
            alternativeExpressions: [
              { textEn: "Awesome! That's $19. Pay now or on board, either way. Head to Door 4 downstairs — look for the blue vans. Show the driver this ticket.", textZh: "好的！19美元。现在付或上车付都行。下楼到4号门——找蓝色的车。把票给司机看。", actionHint: "口语化指引", frequency: "common" },
              { textEn: "Perfect, $19 total. You can pay here or on the shuttle. Go to Door 4 on the ground floor — blue shuttle vans. Here's your ticket.", textZh: "好的，19美元。这里付或车上付都行。到一层4号门——蓝色班车。给您票。", actionHint: "简洁指引", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Do I need to tip the driver?",
            textZh: "需要给司机小费吗？",
            culturalNote: "在美国，机场班车司机通常会收到小费。一般每件行李1-2美元，或者总金额的15-20%。",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Tips aren't required, but drivers appreciate a couple of dollars per bag if they help with your luggage. It's customary.",
            textZh: "小费不是必须的，但如果司机帮你搬行李，每件给一两美元他们会很感谢。这是惯例。",
            keyPhrases: [
              { en: "tips aren't required", zh: "小费不是必须的" },
              { en: "customary", zh: "惯例" },
            ],
            alternativeExpressions: [
              { textEn: "Tipping isn't required, but if the driver helps with your bags, a couple of bucks per bag is customary.", textZh: "小费不是必须的，但司机帮搬行李的话，每件给一两美元是惯例。", actionHint: "口语化说明", frequency: "common" },
              { textEn: "It's not expected, but most people tip $2 or $3 per bag if the driver loads your luggage.", textZh: "不是必须的，但如果司机帮装行李，大多数人每件给2到3美元。", actionHint: "给出具体金额", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. Thanks for the info!",
            textZh: "了解了。谢谢告知！",
          },
        ],
      },
      {
        id: "shuttle-issues",
        titleZh: "班车问题",
        titleEn: "Shuttle Problems",
        description: "班车延误或找不到班车时求助",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I've been waiting at Door 4 for 40 minutes. The shuttle hasn't come. My ticket says it should have left at 3:15.",
            textZh: "打扰了，我在4号门等了40分钟了。班车还没来。我的票上写的是3:15出发。",
          },
          {
            speaker: "them",
            role: "调度",
            textEn: "I'm sorry about that. Let me check... It looks like there's heavy traffic from an accident on the highway. The shuttle is running about 20 minutes behind schedule.",
            textZh: "抱歉。我查一下……看起来高速公路上有事故，交通很拥堵。班车大约晚了20分钟。",
            keyPhrases: [
              { en: "heavy traffic", zh: "交通拥堵" },
              { en: "behind schedule", zh: "晚点" },
            ],
            alternativeExpressions: [
              { textEn: "Sorry about the wait. Let me check... There's been an accident on the highway causing delays. The shuttle's about 20 minutes late.", textZh: "抱歉让您久等。我查一下……高速上有事故导致堵车。班车大约晚20分钟。", actionHint: "口语化解释", frequency: "common" },
              { textEn: "I apologize for the delay. Looks like there's heavy traffic from a highway accident. The shuttle is running roughly 20 minutes behind.", textZh: "对延误很抱歉。看起来高速公路事故导致严重拥堵。班车大约延迟20分钟。", actionHint: "正式解释", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Twenty more minutes? I've already been waiting so long. Is there another option?",
            textZh: "还要再等20分钟？我已经等了这么久了。有其他选择吗？",
          },
          {
            speaker: "them",
            role: "调度",
            textEn: "I can put you on the next private shuttle that's leaving in 5 minutes at no extra charge, since you've been waiting so long. It'll go directly to your hotel.",
            textZh: "我可以安排您坐5分钟后出发的下一班专车，不加收费用，因为您已经等了很久了。会直接去您的酒店。",
            keyPhrases: [
              { en: "at no extra charge", zh: "不加收费用" },
              { en: "directly to your hotel", zh: "直接去您的酒店" },
            ],
            alternativeExpressions: [
              { textEn: "Tell you what — since you've been waiting a while, I'll put you on the next private shuttle at no extra cost. It leaves in 5 minutes and goes straight to your hotel.", textZh: "这样吧——您等了这么久，我安排您坐5分钟后的专车，不加钱。直接去您酒店。", actionHint: "口语化补偿", frequency: "common" },
              { textEn: "Given the long wait, let me upgrade you to a private shuttle leaving in 5 minutes — no additional charge. It'll take you directly to your hotel.", textZh: "鉴于等了很久，我帮您免费升级到5分钟后出发的专车。直达您的酒店。", actionHint: "正式补偿", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "That would be perfect, thank you. Where do I go?",
            textZh: "那太好了，谢谢。我去哪里？",
          },
          {
            speaker: "them",
            role: "调度",
            textEn: "Stay right here. I'll radio the driver to come to Door 4. It's a black SUV with our company logo. The driver's name is Mike.",
            textZh: "就在这里等。我用对讲机叫司机来4号门。是一辆黑色SUV，有我们公司的标志。司机叫Mike。",
            keyPhrases: [
              { en: "radio the driver", zh: "用对讲机叫司机" },
              { en: "company logo", zh: "公司标志" },
            ],
            alternativeExpressions: [
              { textEn: "Wait right here. I'll call the driver over to Door 4. It's a black SUV with our logo. Driver's name is Mike.", textZh: "就在这等。我叫司机来4号门。黑色SUV，有我们的标志。司机叫Mike。", actionHint: "简洁指示", frequency: "common" },
              { textEn: "Stay put — I'm radioing the driver now. Look for a black SUV with our company branding. The driver is Mike.", textZh: "别走开——我正在用对讲机叫司机。留意一辆有我们公司标志的黑色SUV。司机叫Mike。", actionHint: "口语化指示", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Great. Will the driver know which hotel I'm going to?",
            textZh: "好的。司机知道我去哪个酒店吗？",
          },
          {
            speaker: "them",
            role: "调度",
            textEn: "I'll let him know. Just confirm the address when you get in. And here — take my card. If you have any issues on the way, call this number directly.",
            textZh: "我会告诉他。上车时确认一下地址就行。给您——这是我的名片。路上有任何问题直接打这个电话。",
            keyPhrases: [
              { en: "confirm the address", zh: "确认地址" },
              { en: "call this number directly", zh: "直接打这个电话" },
            ],
            alternativeExpressions: [
              { textEn: "I'll let him know. Just confirm the address when you hop in. Here's my card — call this number if anything comes up on the way.", textZh: "我会告诉他。上车时确认一下地址。这是我的名片——路上有事打这个电话。", actionHint: "口语化交接", frequency: "common" },
              { textEn: "He'll have your details. Double-check the address with him when you get in. And take my card — direct line if you need anything en route.", textZh: "他会有你的信息。上车时跟他确认地址。拿着我的名片——路上有需要直接打这个号码。", actionHint: "详细交接", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I appreciate you sorting this out so quickly.",
            textZh: "感谢你这么快解决了问题。",
          },
          {
            speaker: "them",
            role: "调度",
            textEn: "No problem at all. We're sorry for the delay. Have a safe trip to your hotel!",
            textZh: "没问题。对延误我们很抱歉。祝您平安到达酒店！",
            alternativeExpressions: [
              { textEn: "Not at all! Sorry again for the wait. Have a safe ride to the hotel!", textZh: "不客气！再次为延误道歉。祝安全到达酒店！", actionHint: "口语化送别", frequency: "common" },
              { textEn: "My pleasure. We apologize for the inconvenience. Enjoy the ride and have a great evening!", textZh: "应该的。对不便表示抱歉。享受旅程，祝晚上愉快！", actionHint: "正式送别", frequency: "occasional" }
            ],
          },
        ],
      },
    ],
  },

  // ==================== 17. 拼车班车 ====================
  {
    id: "airport-shuttle-shared",
    category: "airport",
    titleZh: "机场拼车班车",
    titleEn: "Shared Airport Shuttle",
    description: "乘坐拼车班车，与其他乘客一起前往市区",
    otherRole: "班车司机",
    otherRoleIcon: "🚌",
    flows: [
      {
        id: "riding-shared",
        titleZh: "乘坐拼车班车",
        titleEn: "Riding the Shared Shuttle",
        description: "上了拼车班车后与司机的对话",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, is this the shuttle to downtown?",
            textZh: "你好，这是去市中心的班车吗？",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Yes, it is! Hop on in. What hotel are you heading to?",
            textZh: "是的！上来吧。您去哪个酒店？",
            keyPhrases: [
              { en: "hop on in", zh: "上来吧" },
              { en: "heading to", zh: "前往" },
            ],
            alternativeExpressions: [
              { textEn: "That's us! Jump in. Where are you headed?", textZh: "就是这辆！上来吧。您去哪？", actionHint: "口语化招呼", frequency: "common" },
              { textEn: "Yep, this is the one! Come on in. Which hotel are you going to?", textZh: "没错，就是这辆！上来吧。去哪个酒店？", actionHint: "热情迎客", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "The Grand Hyatt on 42nd Street. Here's my ticket.",
            textZh: "42街的君悦酒店。这是我的票。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Got it. You'll be our third stop. We're picking up two more passengers and then we'll head out. Should be about 5 more minutes. You can put your bag in the back.",
            textZh: "好的。您是第三站。我们再接两位乘客就出发。大概还要5分钟。行李可以放后面。",
            keyPhrases: [
              { en: "third stop", zh: "第三站" },
              { en: "picking up", zh: "接" },
              { en: "head out", zh: "出发" },
            ],
            alternativeExpressions: [
              { textEn: "Okay, you'll be the third drop-off. Just waiting on two more passengers, then we're off. About 5 more minutes. Pop your bag in the back.", textZh: "好的，您是第三站。再等两位乘客就出发。大概再5分钟。行李放后面。", actionHint: "口语化说明", frequency: "common" },
              { textEn: "Got it — third stop for you. We're picking up two more folks and heading out in about 5 minutes. Throw your luggage in the trunk.", textZh: "收到——您是第三站。再接两人大约5分钟就走。行李扔后备箱就行。", actionHint: "随意口吻", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "How long will it take to get to my hotel?",
            textZh: "到我酒店要多长时间？",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "About 50 minutes with the stops, maybe less if traffic is light. I'll drop off the first two passengers and then you. You'll see all the famous sights along the way!",
            textZh: "加上停靠大概50分钟，如果交通顺畅可能更少。我先放前两位乘客，然后是您。沿途能看到很多著名景点！",
            keyPhrases: [
              { en: "traffic is light", zh: "交通顺畅" },
              { en: "drop off", zh: "放下（送达）" },
              { en: "along the way", zh: "沿途" },
            ],
            alternativeExpressions: [
              { textEn: "With the stops, about 50 minutes, maybe less if traffic's good. You'll see some great views along the way!", textZh: "加上停靠大约50分钟，交通好的话更快。沿途风景很不错！", actionHint: "口语化说明", frequency: "common" },
              { textEn: "Around 50 minutes including all the drop-offs. Could be quicker if the roads are clear. I'll point out some landmarks on the way!", textZh: "包括所有停靠大约50分钟。路况好的话更快。路上我给你指几个地标！", actionHint: "热情介绍", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Is there Wi-Fi on the shuttle?",
            textZh: "车上有Wi-Fi吗？",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Yep! The network name is 'ShuttleWiFi' and the password is on the card in the seat pocket in front of you.",
            textZh: "有的！网络名是'ShuttleWiFi'，密码在前面座位口袋里的卡片上。",
            keyPhrases: [
              { en: "network name", zh: "网络名" },
              { en: "seat pocket", zh: "座位口袋" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah! Connect to 'ShuttleWiFi' — password's on the card in the seat pocket.", textZh: "有的！连'ShuttleWiFi'——密码在座椅口袋里的卡片上。", actionHint: "简洁回答", frequency: "common" },
              { textEn: "Sure do. Wi-Fi name is 'ShuttleWiFi' and you'll find the password on the little card in front of you.", textZh: "当然有。WiFi名是'ShuttleWiFi'，密码在你前面的小卡片上。", actionHint: "友好指引", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Great. Oh — is it okay to eat a snack? I'm pretty hungry from the flight.",
            textZh: "太好了。对了——可以吃点零食吗？坐了很久飞机挺饿的。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Sure, no problem. Just try to keep it tidy. There's a small trash bag hanging on the side if you need it. We're all set — let's go!",
            textZh: "没问题。尽量保持整洁就行。旁边挂着一个小垃圾袋需要的话可以用。好了，出发！",
            keyPhrases: [
              { en: "keep it tidy", zh: "保持整洁" },
              { en: "trash bag", zh: "垃圾袋" },
              { en: "we're all set", zh: "准备好了" },
            ],
            alternativeExpressions: [
              { textEn: "Go ahead! Just keep things tidy. There's a trash bag on the side if you need it. All set — let's roll!", textZh: "没问题！保持整洁就行。旁边有垃圾袋。好了，出发！", actionHint: "口语化准许", frequency: "common" },
              { textEn: "Sure, help yourself. There's a small bag for rubbish on the side. Okay, everyone's on — off we go!", textZh: "随意。旁边有个小垃圾袋。好了，人齐了——走吧！", actionHint: "轻松出发", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks! First time in New York — I'm excited.",
            textZh: "谢谢！第一次来纽约——好兴奋。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "You're gonna love it! If you need any restaurant recommendations, just ask. I've lived here 20 years.",
            textZh: "你一定会喜欢的！如果需要餐厅推荐，尽管问。我在这住了20年了。",
            alternativeExpressions: [
              { textEn: "It's a great city! If you want restaurant tips, just ask — I've been living here 20 years.", textZh: "这是座很棒的城市！想要餐厅推荐随时问——我在这住了20年了。", actionHint: "热情介绍", frequency: "common" },
              { textEn: "Oh, you'll love it! I know all the best spots — been driving around here for 20 years. Just say the word.", textZh: "你一定会爱上这里的！好地方我都知道——在这开了20年车了。说一声就行。", actionHint: "主动推荐", frequency: "occasional" }
            ],
          },
        ],
      },
      {
        id: "wrong-stop",
        titleZh: "下错站",
        titleEn: "Wrong Stop",
        description: "差点下错站或司机搞错目的地",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "司机",
            textEn: "Next stop — Hilton Midtown! Is this your hotel?",
            textZh: "下一站——希尔顿中城店！是您的酒店吗？",
            alternativeExpressions: [
              { textEn: "Coming up — Hilton Midtown! This your stop?", textZh: "到了——希尔顿中城！是你的酒店吗？", actionHint: "口语化提醒", frequency: "common" },
              { textEn: "Here we are, Hilton Midtown! Are you getting off here?", textZh: "到了，希尔顿中城！你在这下吗？", actionHint: "简洁确认", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Wait, I'm going to the Grand Hyatt, not the Hilton. They're different hotels.",
            textZh: "等等，我去的是君悦酒店，不是希尔顿。它们是不同的酒店。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Oh, my apologies! I mixed up the names on my list. The Grand Hyatt is about three blocks from here. I'll take you there right after this stop.",
            textZh: "哦，抱歉！我把名单上的名字弄混了。君悦酒店离这大概三个街区。这一站之后马上送你过去。",
            keyPhrases: [
              { en: "mixed up", zh: "弄混了" },
              { en: "three blocks", zh: "三个街区" },
              { en: "right after", zh: "紧接着" },
            ],
            alternativeExpressions: [
              { textEn: "Oh, sorry about that! Got the names mixed up. The Grand Hyatt is just a few blocks away — I'll take you right after this stop.", textZh: "哦，不好意思！搞混了。君悦酒店离这就几个街区——这一站之后马上送你。", actionHint: "口语化道歉", frequency: "common" },
              { textEn: "My mistake! Mixed up the list. Your hotel — the Grand Hyatt — is about three blocks from here. Hang on, I'll have you there in a minute.", textZh: "搞错了！名单弄混了。你的酒店——君悦——离这大概三个街区。稍等，一会就到。", actionHint: "快速纠正", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "No worries. As long as I get to the right place.",
            textZh: "没关系。只要最后到对的地方就行。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Absolutely. I know exactly where it is. Sorry about that — here, take my card. If you need a shuttle back to the airport, call me directly and I'll give you a 10% discount.",
            textZh: "一定的。我清楚知道在哪。很抱歉——给你我的名片。如果需要回机场的班车，直接打给我，给你打九折。",
            keyPhrases: [
              { en: "take my card", zh: "拿我的名片" },
              { en: "10% discount", zh: "九折" },
            ],
            alternativeExpressions: [
              { textEn: "For sure. I know exactly where it is. Sorry about the mix-up — here's my card. Need a ride back to the airport? Call me for a 10% discount.", textZh: "没问题。我知道在哪。搞混了不好意思——这是我的名片。回机场需要车的话打给我，打九折。", actionHint: "口语化补偿", frequency: "common" },
              { textEn: "Don't worry, I'll get you there right away. Take my card — and if you need airport pickup when you leave, I'll give you 10% off.", textZh: "别担心，马上送到。拿着我的名片——走的时候需要机场接送的话给你打九折。", actionHint: "主动补偿", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "That's kind of you. How far in advance should I book the return shuttle?",
            textZh: "你人真好。回程班车要提前多久预订？",
            vocabNotes: {
              "in advance": {
                meaningInContext: "在这里指提前（在事情发生之前）",
                similarUsage: "类似用法：Please book at least 24 hours in advance.（请至少提前24小时预订）",
              },
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "At least 24 hours ahead, especially for early morning flights. I can pick you up right at the hotel entrance.",
            textZh: "至少提前24小时，特别是早班飞机。我可以在酒店门口接你。",
            keyPhrases: [
              { en: "24 hours ahead", zh: "提前24小时" },
              { en: "pick you up", zh: "接你" },
              { en: "hotel entrance", zh: "酒店门口" },
            ],
            alternativeExpressions: [
              { textEn: "Give me at least 24 hours' notice, especially for early flights. I'll pick you up right at the hotel door.", textZh: "至少提前24小时通知我，特别是早班飞机。酒店门口接你。", actionHint: "口语化说明", frequency: "common" },
              { textEn: "Try to book at least a day ahead. For morning flights, the earlier you let me know, the better. I'll come right to the hotel entrance.", textZh: "最好提前至少一天预订。早班飞机的话越早通知越好。我会到酒店大门口接。", actionHint: "建议提前预约", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Great. My flight back is next Friday at 7 AM. What time should I be picked up?",
            textZh: "好的。我回程航班是下周五早上7点。应该几点来接？",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "For a 7 AM flight, I'd pick you up at 4:30 AM to be safe — morning traffic to the airport can be unpredictable. Here's the Grand Hyatt — we're here!",
            textZh: "7点的飞机，为了保险起见我4:30来接您——早上去机场的交通不太好预测。到了——这就是君悦酒店！",
            keyPhrases: [
              { en: "to be safe", zh: "为了保险起见" },
              { en: "unpredictable", zh: "不可预测的" },
            ],
            alternativeExpressions: [
              { textEn: "For a 7 AM flight, I'd come at 4:30 to be safe — morning traffic can be rough. And here we are — the Grand Hyatt!", textZh: "7点的飞机，我4:30来接保险一些——早上交通不好说。到了——君悦酒店！", actionHint: "口语化建议", frequency: "common" },
              { textEn: "I'd say 4:30 AM pickup for a 7 o'clock flight — better safe than stuck in traffic. Look — here's the Grand Hyatt. We made it!", textZh: "7点的飞机建议4:30接你——宁可早到别堵路上。看——君悦酒店到了！", actionHint: "热情到达", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect, we made it. How much do I owe you for the tip?",
            textZh: "太好了，到了。小费给多少合适？",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Whatever you feel is fair! Most folks give $3 to $5. Let me grab your bag from the back. Enjoy New York!",
            textZh: "随心就好！大部分人给3到5美元。我帮你从后面拿行李。享受纽约之旅吧！",
            keyPhrases: [
              { en: "whatever you feel is fair", zh: "随心就好" },
              { en: "most folks", zh: "大部分人" },
            ],
            alternativeExpressions: [
              { textEn: "Totally up to you! Most people give $3 to $5. Let me get your bag. Enjoy the city!", textZh: "随你心意！大部分人给3到5美元。我帮你拿行李。好好享受这座城市！", actionHint: "口语化告别", frequency: "common" },
              { textEn: "Whatever you think is fair — $3 to $5 is pretty standard. Here's your bag from the back. Have an amazing time in New York!", textZh: "你觉得合适就好——3到5美元算正常。后面的行李给你。祝在纽约玩得开心！", actionHint: "热情送别", frequency: "occasional" }
            ],
          },
        ],
      },
    ],
  },

  // ==================== 18. WiFi连接 ====================
  {
    id: "airport-wifi-connect",
    category: "airport",
    titleZh: "机场WiFi连接",
    titleEn: "Airport Wi-Fi Connection",
    description: "连接机场WiFi，解决网络问题",
    otherRole: "机场信息台工作人员",
    otherRoleIcon: "📶",
    flows: [
      {
        id: "connecting-wifi",
        titleZh: "连接WiFi",
        titleEn: "Connecting to Wi-Fi",
        description: "询问如何连接机场免费WiFi",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, how do I connect to the airport Wi-Fi?",
            textZh: "请问，怎么连接机场WiFi？",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "Select 'Airport_Free_WiFi' from your Wi-Fi settings. Then open your browser — a login page should pop up. Just click 'Connect' and accept the terms.",
            textZh: "在WiFi设置里选'Airport_Free_WiFi'。然后打开浏览器——会弹出登录页面。点'Connect'并同意条款就行。",
            keyPhrases: [
              { en: "Wi-Fi settings", zh: "WiFi设置" },
              { en: "login page", zh: "登录页面" },
              { en: "pop up", zh: "弹出" },
              { en: "accept the terms", zh: "同意条款" },
            ],
            alternativeExpressions: [
              { textEn: "Find 'Airport_Free_WiFi' in your Wi-Fi settings, connect, then open a browser. A login page will pop up — just hit 'Connect' and accept the terms.", textZh: "在WiFi设置里找'Airport_Free_WiFi'，连接，然后打开浏览器。会弹出登录页——点'Connect'同意条款就行。", actionHint: "口语化指导", frequency: "common" },
              { textEn: "Go to your Wi-Fi settings and look for 'Airport_Free_WiFi.' Once connected, your browser should show a login page. Click 'Connect' and you're in.", textZh: "进WiFi设置找'Airport_Free_WiFi'。连上后浏览器会弹出登录页面。点'Connect'就好了。", actionHint: "分步说明", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Is the free Wi-Fi fast enough for video calls? I need to join a meeting.",
            textZh: "免费WiFi够快到打视频电话吗？我需要参加一个会议。",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "The free Wi-Fi gives you basic speed — good for browsing and messaging, but video calls might be choppy. For faster speeds, you can upgrade to premium for $8 per hour or $15 for the whole day.",
            textZh: "免费WiFi是基本速度——上网和聊天够用，但视频电话可能会卡。想要更快的速度，可以升级到高级版，每小时8美元或全天15美元。",
            keyPhrases: [
              { en: "choppy", zh: "卡顿的" },
              { en: "upgrade to premium", zh: "升级到高级版" },
              { en: "per hour", zh: "每小时" },
            ],
            alternativeExpressions: [
              { textEn: "The free Wi-Fi is fine for basic stuff — web browsing, messaging. Video calls might lag. If you need faster speeds, premium is $8 an hour or $15 for the day.", textZh: "免费WiFi基本够用——上网、聊天。视频电话可能会卡。需要更快的话，高级版每小时8美元或全天15美元。", actionHint: "口语化说明", frequency: "common" },
              { textEn: "Basic speed should be fine for browsing and chat apps. For video calls or streaming, you might want premium — $8 per hour or $15 all day.", textZh: "基本速度上网聊天够用。视频电话或看视频的话可能要升级——每小时8美元或全天15美元。", actionHint: "区分使用场景", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "How do I upgrade?",
            textZh: "怎么升级？",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "On the same login page, there's a 'Premium' button. Click it and enter your credit card details. You'll get connected to a faster network immediately.",
            textZh: "在同一个登录页面上有个'Premium'按钮。点击后输入信用卡信息。会立刻连到更快的网络。",
            keyPhrases: [
              { en: "credit card details", zh: "信用卡信息" },
              { en: "immediately", zh: "立刻" },
            ],
            alternativeExpressions: [
              { textEn: "On the same login page, hit 'Premium' and enter your card details. You'll be on the faster network right away.", textZh: "在同一个登录页面，点'Premium'然后输入卡信息。马上就会切到更快的网络。", actionHint: "简洁指导", frequency: "common" },
              { textEn: "There's a 'Premium' button on the login screen. Click it, pay with your credit card, and you'll instantly switch to a faster connection.", textZh: "登录界面有个'Premium'按钮。点击后用信用卡支付，会立刻切换到更快的连接。", actionHint: "分步说明", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a time limit on the free version?",
            textZh: "免费版有时间限制吗？",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "Yes, the free Wi-Fi is limited to 2 hours per device. After that, you'll need to upgrade or reconnect with a different device.",
            textZh: "有的，免费WiFi每台设备限2小时。之后需要升级或换一台设备重新连接。",
            keyPhrases: [
              { en: "limited to", zh: "限制为" },
              { en: "per device", zh: "每台设备" },
              { en: "reconnect", zh: "重新连接" },
            ],
            alternativeExpressions: [
              { textEn: "Yes, the free version is capped at 2 hours per device. After that, you'd need to upgrade or use a different device.", textZh: "是的，免费版每台设备限2小时。之后需要升级或换台设备。", actionHint: "口语化说明", frequency: "common" },
              { textEn: "There's a 2-hour limit on the free Wi-Fi. Once it expires, you can either go premium or reconnect with another device.", textZh: "免费WiFi有2小时限制。到期后可以升级，或用其他设备重新连。", actionHint: "说明到期后选项", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Two hours should be enough for me. My flight boards in 90 minutes. Thanks!",
            textZh: "两小时对我够了。我的航班90分钟后登机。谢谢！",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "You're welcome! One tip — if the login page doesn't pop up automatically, try typing '1.1.1.1' in your browser. That usually forces it to appear.",
            textZh: "不客气！一个小提示——如果登录页面没有自动弹出，试着在浏览器输入'1.1.1.1'。通常能强制弹出。",
            keyPhrases: [
              { en: "forces it to appear", zh: "强制弹出" },
            ],
            alternativeExpressions: [
              { textEn: "Happy to help! By the way, if the login page doesn't come up automatically, type '1.1.1.1' in your browser — that usually triggers it.", textZh: "很高兴帮到你！另外，如果登录页没自动弹出，在浏览器输入'1.1.1.1'——通常能弹出来。", actionHint: "补充小技巧", frequency: "common" },
              { textEn: "No problem! Quick tip — if the login screen doesn't appear, try going to '1.1.1.1' in your browser. That should force it.", textZh: "不客气！小提示——如果登录界面没出来，试试在浏览器访问'1.1.1.1'。应该能强制弹出。", actionHint: "实用小贴士", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "That's a useful tip. Thanks again!",
            textZh: "很实用的提示。再次感谢！",
          },
        ],
      },
      {
        id: "wifi-trouble",
        titleZh: "WiFi连接问题",
        titleEn: "Wi-Fi Connection Issues",
        description: "WiFi连不上或速度太慢时求助",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I can't get the Wi-Fi to work. It keeps saying 'authentication failed' when I try to connect.",
            textZh: "我WiFi连不上。每次连接都显示'认证失败'。",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "That can happen sometimes. First, try forgetting the network and reconnecting. Go to your Wi-Fi settings, find 'Airport_Free_WiFi,' and tap 'Forget This Network.' Then try again.",
            textZh: "有时会这样。首先，试着忘记网络然后重新连接。进WiFi设置，找到'Airport_Free_WiFi'，点'忽略此网络'。然后再试。",
            keyPhrases: [
              { en: "authentication failed", zh: "认证失败" },
              { en: "forgetting the network", zh: "忽略/忘记网络" },
              { en: "reconnecting", zh: "重新连接" },
            ],
            alternativeExpressions: [
              { textEn: "That happens sometimes. Try forgetting the network first, then reconnect. Go to Wi-Fi settings, find the network, and tap 'Forget.' Then try again.", textZh: "偶尔会这样。先忘记网络再重连试试。进WiFi设置，找到那个网络，点'忽略'。然后重试。", actionHint: "口语化排查", frequency: "common" },
              { textEn: "Let's troubleshoot. First, go to your Wi-Fi settings, select the airport network, and choose 'Forget This Network.' Then reconnect from scratch.", textZh: "我们来排查一下。先进WiFi设置，选机场网络，点'忽略此网络'。然后重新连接。", actionHint: "逐步排查", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I tried that. Still not working. Is there another network I can try?",
            textZh: "试过了。还是不行。有别的网络可以试吗？",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "You can try 'Airport_Guest_WiFi' — it's our backup network. Same process to connect. If that doesn't work either, it might be a problem with your device's settings. Is your VPN turned on?",
            textZh: "可以试试'Airport_Guest_WiFi'——那是我们的备用网络。连接方法一样。如果也不行，可能是你设备的设置问题。你的VPN开着吗？",
            keyPhrases: [
              { en: "backup network", zh: "备用网络" },
              { en: "VPN", zh: "VPN/虚拟专用网" },
            ],
            alternativeExpressions: [
              { textEn: "Try our backup network — 'Airport_Guest_WiFi.' Same connection steps. If that doesn't work either, check if your VPN is on.", textZh: "试试备用网络——'Airport_Guest_WiFi'。连接方法一样。如果也不行，看看VPN是不是开着。", actionHint: "提供备选方案", frequency: "common" },
              { textEn: "There's a second network you can try: 'Airport_Guest_WiFi.' Connect the same way. And make sure your VPN is turned off — that often causes issues.", textZh: "还有个备用网络可以试：'Airport_Guest_WiFi'。连接方法一样。确保VPN关了——这经常导致问题。", actionHint: "同时排查VPN", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Oh, yes — my VPN is on. Could that be the issue?",
            textZh: "哦对——我的VPN开着呢。会不会是这个原因？",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "Very likely! Turn off your VPN first, connect to the Wi-Fi, and complete the login page. Once you're connected, you can turn your VPN back on.",
            textZh: "很可能！先关掉VPN，连接WiFi，完成登录页面。连上之后再把VPN打开。",
            keyPhrases: [
              { en: "turn off", zh: "关掉" },
              { en: "complete the login page", zh: "完成登录页面" },
              { en: "turn back on", zh: "重新打开" },
            ],
            alternativeExpressions: [
              { textEn: "That's probably it! Turn off the VPN, connect to Wi-Fi, finish the login page, then you can turn VPN back on.", textZh: "大概就是这个原因！关掉VPN，连WiFi，完成登录页面，然后再开VPN。", actionHint: "口语化指导", frequency: "common" },
              { textEn: "That's likely the issue. Disable VPN first, get on the Wi-Fi and complete the login. After that, feel free to switch VPN back on.", textZh: "很可能就是这个问题。先关VPN，连上WiFi完成登录。之后再把VPN打开就行。", actionHint: "分步说明", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "That worked! I'm connected now. But the speed is really slow — pages take forever to load.",
            textZh: "可以了！连上了。但速度太慢了——网页加载半天。",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "The free network can get congested during peak hours. If you need reliable speed, I'd recommend the premium option, or there's a café on the second floor with faster Wi-Fi for customers.",
            textZh: "免费网络在高峰时段会很拥挤。如果需要稳定的速度，建议升级高级版，或者二楼有个咖啡馆给顾客提供更快的WiFi。",
            keyPhrases: [
              { en: "congested", zh: "拥挤的" },
              { en: "peak hours", zh: "高峰时段" },
              { en: "reliable speed", zh: "稳定的速度" },
            ],
            alternativeExpressions: [
              { textEn: "During peak hours the free network gets pretty slow. If you need steady speed, I'd go with premium. There's also a café on the second floor with better Wi-Fi for customers.", textZh: "高峰期免费网络会很慢。需要稳定速度的话建议升级。二楼也有个咖啡馆给顾客提供更好的WiFi。", actionHint: "提供替代方案", frequency: "common" },
              { textEn: "Yeah, the free Wi-Fi slows down when it's busy. Premium is your best bet for reliability. Or grab a coffee upstairs — they've got solid Wi-Fi for customers.", textZh: "是的，人多时免费WiFi就变慢。想要稳定的话升级最好。或者去楼上喝杯咖啡——他们给顾客提供不错的WiFi。", actionHint: "推荐咖啡馆", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I'll grab a coffee and use their Wi-Fi then. Where's the café?",
            textZh: "那我去买杯咖啡用他们的WiFi。咖啡馆在哪？",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "Take the escalator to the second floor, turn left. It's called 'SkyBrew' — you can't miss it. They have power outlets at every table too.",
            textZh: "坐扶梯到二楼，左转。叫'SkyBrew'——很显眼的。每张桌子都有电源插座。",
            keyPhrases: [
              { en: "escalator", zh: "扶梯" },
              { en: "you can't miss it", zh: "很显眼/不会错过" },
            ],
            alternativeExpressions: [
              { textEn: "Take the escalator up, turn left. It's called 'SkyBrew' — can't miss it. Every table has outlets too.", textZh: "坐扶梯上去，左转。叫'SkyBrew'——很好找。每张桌子都有插座。", actionHint: "简洁指路", frequency: "common" },
              { textEn: "Head up the escalator to the second floor and go left. Look for 'SkyBrew' — they also have power outlets at every seat.", textZh: "坐扶梯到二楼左转。找'SkyBrew'——每个座位都有电源插座。", actionHint: "详细指路", frequency: "occasional" }
            ],
          },
        ],
      },
    ],
  },

  // ==================== 19. 购买SIM卡 ====================
  {
    id: "airport-sim-purchase",
    category: "airport",
    titleZh: "机场买SIM卡",
    titleEn: "Airport SIM Card Purchase",
    description: "在机场购买当地手机SIM卡或移动数据套餐",
    otherRole: "手机店店员",
    otherRoleIcon: "📱",
    flows: [
      {
        id: "buying-sim",
        titleZh: "购买SIM卡",
        titleEn: "Buying a SIM Card",
        description: "选购适合旅行者的SIM卡套餐",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just arrived and need a local SIM card. What options do you have?",
            textZh: "你好，我刚到，需要一张本地SIM卡。有什么选择？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Welcome! We have prepaid tourist SIM cards in three plans: 7 days for $15 with 3GB of data, 15 days for $25 with 8GB, and 30 days for $40 with unlimited data.",
            textZh: "欢迎！我们有三种预付费旅游SIM卡套餐：7天15美元含3GB流量，15天25美元含8GB，30天40美元含无限流量。",
            keyPhrases: [
              { en: "prepaid", zh: "预付费" },
              { en: "tourist SIM cards", zh: "旅游SIM卡" },
              { en: "unlimited data", zh: "无限流量" },
            ],
            alternativeExpressions: [
              { textEn: "Hi! We have three prepaid tourist SIM plans: 7 days for $15 with 3GB, 15 days for $25 with 8GB, or 30 days for $40 with unlimited data.", textZh: "你好！我们有三种预付费旅游SIM卡：7天15美元含3GB，15天25美元含8GB，30天40美元不限流量。", actionHint: "口语化介绍", frequency: "common" },
              { textEn: "Welcome! Looking for a tourist SIM? We've got 7-day, 15-day, and 30-day plans starting at $15. The 30-day one comes with unlimited data.", textZh: "欢迎！需要旅游SIM卡吗？有7天、15天和30天的套餐，15美元起。30天的包含无限流量。", actionHint: "突出无限流量", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I'll be here for 10 days. Does the 15-day plan include phone calls?",
            textZh: "我会待10天。15天的套餐包含电话吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes, all plans include unlimited local calls and texts. International calls are extra — 10 cents per minute to China.",
            textZh: "包含的，所有套餐都有无限本地通话和短信。国际电话另收费——打中国每分钟10美分。",
            keyPhrases: [
              { en: "unlimited local calls", zh: "无限本地通话" },
              { en: "international calls are extra", zh: "国际电话另收费" },
              { en: "per minute", zh: "每分钟" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, every plan comes with unlimited local calls and texts. International calls are extra — it's 10 cents a minute to China.", textZh: "是的，每个套餐都含无限本地通话和短信。国际电话另收——打中国每分钟10美分。", actionHint: "口语化确认", frequency: "common" },
              { textEn: "All plans include free local calls and texts. Calling China is 10 cents per minute on top of that.", textZh: "所有套餐都包含免费本地通话和短信。打中国额外收每分钟10美分。", actionHint: "简洁说明", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with the 15-day plan. Does my phone need to be unlocked?",
            textZh: "我选15天的。我的手机需要解锁吗？",
            vocabNotes: {
              unlocked: {
                meaningInContext: "在这里指手机没有运营商锁定，可以使用任何SIM卡",
                similarUsage: "类似表达：Is your phone carrier-locked?（你的手机有运营商锁吗？）",
              },
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes, it needs to be unlocked. Most phones from China are already unlocked. What phone do you have? Let me check.",
            textZh: "是的，需要解锁的手机。大部分中国的手机已经是解锁的了。您用什么手机？我帮您看看。",
            alternativeExpressions: [
              { textEn: "It does need to be unlocked. Most Chinese phones are. What model do you have? I'll check.", textZh: "需要是解锁的手机。中国的手机大多已经解锁了。什么型号？我帮你看看。", actionHint: "口语化确认", frequency: "common" },
              { textEn: "Your phone needs to be unlocked, but phones from China are usually fine. Which phone are you using? Let me verify.", textZh: "手机需要是解锁的，不过中国的手机一般没问题。你用什么手机？我确认一下。", actionHint: "主动验证", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "It's an iPhone 15. I bought it in China.",
            textZh: "iPhone 15。在中国买的。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "That should work perfectly. I'll pop the SIM in and set it up for you. It'll take about 2 minutes. You'll also get a local phone number.",
            textZh: "应该完全没问题。我帮你装SIM卡设置好。大概2分钟。你还会得到一个本地号码。",
            keyPhrases: [
              { en: "pop the SIM in", zh: "装上SIM卡" },
              { en: "set it up", zh: "设置好" },
              { en: "local phone number", zh: "本地号码" },
            ],
            alternativeExpressions: [
              { textEn: "That'll work perfectly. Let me pop the SIM in and get it set up — takes about 2 minutes. You'll get a local number too.", textZh: "完全没问题。我帮你装SIM卡设置好——大概2分钟。还会给你一个本地号码。", actionHint: "口语化操作", frequency: "common" },
              { textEn: "Great, that phone is compatible. I'll install the SIM and configure it for you — just a couple of minutes. You'll also get a local phone number.", textZh: "很好，这款手机兼容。我来装SIM卡帮你设置——就两分钟。你还会得到一个本地号码。", actionHint: "确认兼容并操作", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "What happens if I run out of data before the 15 days are up?",
            textZh: "如果15天内流量用完了怎么办？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "You can top up online or at any convenience store. An extra 3GB is $10. I'll give you instructions in the package. All done — you're connected!",
            textZh: "可以在网上或任何便利店充值。额外3GB是10美元。我会在包装里给您说明。好了——已经连上了！",
            keyPhrases: [
              { en: "top up", zh: "充值" },
              { en: "convenience store", zh: "便利店" },
              { en: "you're connected", zh: "连上了" },
            ],
            alternativeExpressions: [
              { textEn: "You can top up online or at any convenience store. Extra 3GB is $10. Instructions are in the package. All done — you're connected!", textZh: "可以网上充值或去便利店。多加3GB是10美元。说明在包装里。好了——连上了！", actionHint: "简洁交接", frequency: "common" },
              { textEn: "Recharging is easy — do it online or at a corner store. An extra 3GB costs $10. Everything's explained in the packet. And... you're live!", textZh: "充值很方便——网上或便利店都行。额外3GB要10美元。包装里有详细说明。好了……已经激活了！", actionHint: "口语化完成", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "It's working! Thank you so much.",
            textZh: "能用了！非常感谢。",
          },
        ],
      },
      {
        id: "esim-option",
        titleZh: "eSIM选择",
        titleEn: "eSIM Option",
        description: "了解并购买eSIM（无需换实体卡）",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Do you have eSIM options? I'd rather not remove my Chinese SIM card.",
            textZh: "有eSIM选择吗？我不想取出中国的SIM卡。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes! eSIM is actually easier — no physical card needed. Your iPhone supports dual SIM, so you can keep your Chinese number active while using our data plan.",
            textZh: "有的！eSIM其实更方便——不需要实体卡。你的iPhone支持双卡，所以可以保留中国号码同时用我们的流量套餐。",
            keyPhrases: [
              { en: "eSIM", zh: "虚拟SIM卡" },
              { en: "dual SIM", zh: "双卡" },
              { en: "keep your Chinese number active", zh: "保留中国号码活跃" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely! eSIM is even easier — no physical card. Your iPhone supports dual SIM, so you can keep your Chinese number and use our data at the same time.", textZh: "当然！eSIM更方便——不需要实体卡。你的iPhone支持双卡，中国号码和我们的流量可以同时用。", actionHint: "口语化推荐", frequency: "common" },
              { textEn: "Yes, we do! And it's actually simpler than a physical SIM. With dual SIM on your iPhone, your Chinese line stays active while you use our data.", textZh: "有的！而且比实体卡更简单。iPhone的双卡功能让你的中国号码保持活跃，同时用我们的流量。", actionHint: "强调双卡优势", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds much more convenient. How does it work?",
            textZh: "听起来方便多了。怎么操作？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "I'll give you a QR code. You scan it with your phone's camera, go to 'Add Cellular Plan,' and it activates automatically. The whole process takes about a minute.",
            textZh: "我给你一个二维码。用手机摄像头扫描，进入'添加蜂窝套餐'，自动激活。整个过程大概一分钟。",
            keyPhrases: [
              { en: "QR code", zh: "二维码" },
              { en: "Add Cellular Plan", zh: "添加蜂窝套餐" },
              { en: "activates automatically", zh: "自动激活" },
            ],
            alternativeExpressions: [
              { textEn: "I'll give you a QR code to scan with your camera. Then go to 'Add Cellular Plan' and it activates automatically. Takes about a minute.", textZh: "给你一个二维码用相机扫。然后进'添加蜂窝套餐'自动激活。大约一分钟。", actionHint: "口语化指导", frequency: "common" },
              { textEn: "Just scan this QR code with your phone, follow the prompt to add a cellular plan, and you're done. The whole thing takes under a minute.", textZh: "用手机扫这个二维码，按提示添加蜂窝套餐就行了。整个过程不到一分钟。", actionHint: "简化步骤", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Is it the same price as a physical SIM?",
            textZh: "价格和实体SIM卡一样吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "The eSIM plans are actually $2 cheaper since there's no card to produce. So the 15-day plan would be $23 instead of $25.",
            textZh: "eSIM套餐其实便宜2美元，因为不需要制作卡片。所以15天套餐是23美元而不是25美元。",
            alternativeExpressions: [
              { textEn: "eSIM plans are actually $2 cheaper since there's no card to make. So the 15-day one would be $23.", textZh: "eSIM套餐其实便宜2美元，因为不用做卡。所以15天的是23美元。", actionHint: "简洁说明价差", frequency: "common" },
              { textEn: "Fun fact — eSIM saves you $2 because there's no physical card involved. That makes the 15-day plan just $23.", textZh: "小知识——eSIM省2美元因为不需要实体卡。15天套餐只要23美元。", actionHint: "突出省钱", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Great, I'll go with the eSIM. After it's set up, how do I switch between my Chinese line and the local line?",
            textZh: "好的，我选eSIM。设置好之后，怎么在中国号码和本地号码之间切换？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "In your phone settings under 'Cellular,' you can choose which line to use for calls, messages, and data. I'd recommend setting the eSIM as your default data line and keeping your Chinese SIM for calls.",
            textZh: "在手机设置的'蜂窝网络'下，你可以选择用哪条线路打电话、发短信和上网。我建议把eSIM设为默认流量线路，中国SIM卡保留打电话用。",
            keyPhrases: [
              { en: "default data line", zh: "默认流量线路" },
              { en: "Cellular settings", zh: "蜂窝网络设置" },
            ],
            alternativeExpressions: [
              { textEn: "In your phone's Cellular settings, you can pick which line handles calls, texts, and data. I'd set the eSIM for data and keep your Chinese SIM for calls.", textZh: "在手机蜂窝设置里，可以选哪条线路处理通话、短信和流量。建议eSIM用来上网，中国卡留着打电话。", actionHint: "口语化建议", frequency: "common" },
              { textEn: "Go to Settings, then Cellular — you'll see both SIMs listed. Set the eSIM as your data line and your Chinese number as the primary for calls.", textZh: "进设置，然后蜂窝网络——两张卡都会显示。把eSIM设为流量线路，中国号码设为主要通话线路。", actionHint: "具体操作指导", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Makes sense. Let's set it up now.",
            textZh: "有道理。现在就设置吧。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Here's the QR code — scan it now... Perfect, it's downloading. And you're live! Test it by opening a webpage... There you go, fast and smooth.",
            textZh: "这是二维码——现在扫……好了，正在下载。已经激活了！打开一个网页试试……好了，又快又顺畅。",
            keyPhrases: [
              { en: "you're live", zh: "已经激活了" },
            ],
            alternativeExpressions: [
              { textEn: "Here's the QR code — go ahead and scan... Great, it's downloading. You're connected! Try loading a page... See? Fast and smooth.", textZh: "二维码在这——扫一下……好，正在下载。已经连上了！试着打开个网页……看到了吧？又快又流畅。", actionHint: "引导操作", frequency: "common" },
              { textEn: "Scan this QR code now... Perfect, it's activating. All set — try opening something... There you go, working perfectly!", textZh: "现在扫这个二维码……好了，正在激活。搞定——打开个什么试试……好了，完美运行！", actionHint: "即时确认", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "That was so easy! Much better than swapping SIM cards.",
            textZh: "太简单了！比换SIM卡好多了。",
          },
        ],
      },
    ],
  },

  // ==================== 20. 机场快餐 ====================
  {
    id: "airport-dining-fast-food",
    category: "airport",
    titleZh: "机场快餐",
    titleEn: "Airport Fast Food",
    description: "在机场快餐店点餐",
    otherRole: "快餐店店员",
    otherRoleIcon: "🍔",
    flows: [
      {
        id: "ordering-food",
        titleZh: "点餐",
        titleEn: "Ordering Food",
        description: "在机场快餐店点餐的基本流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "店员",
            textEn: "Hi there! Welcome to SkyBurger. What can I get for you?",
            textZh: "嗨！欢迎来到SkyBurger。想要点什么？",
            alternativeExpressions: [
              { textEn: "Hey! Welcome to SkyBurger. What'll it be?", textZh: "嘿！欢迎来SkyBurger。要点什么？", actionHint: "随意招呼", frequency: "common" },
              { textEn: "Hi there! What can I get started for you today?", textZh: "你好！今天想吃点什么？", actionHint: "热情接待", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Can I see the menu? I'm not sure what to get.",
            textZh: "能看看菜单吗？我不太确定点什么。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Sure! The menu is up on the board. Our most popular items are the Classic Burger Combo and the Chicken Wrap. Combos come with fries and a drink.",
            textZh: "当然！菜单在上面的牌子上。我们最受欢迎的是经典汉堡套餐和鸡肉卷。套餐都配薯条和饮料。",
            keyPhrases: [
              { en: "combo", zh: "套餐" },
              { en: "comes with", zh: "配有" },
              { en: "fries", zh: "薯条" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! The menu's right up there. Most popular are the Classic Burger Combo and the Chicken Wrap. Combos include fries and a drink.", textZh: "好的！菜单在上面。最受欢迎的是经典汉堡套餐和鸡肉卷。套餐含薯条和饮料。", actionHint: "口语化介绍", frequency: "common" },
              { textEn: "Take a look at the board. Our top sellers are the Classic Burger and the Chicken Wrap — both come as combos with fries and a drink.", textZh: "看看上面的牌子。我们卖得最好的是经典汉堡和鸡肉卷——都有配薯条和饮料的套餐。", actionHint: "指引看菜单", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I'll have the Classic Burger Combo, please. Medium size.",
            textZh: "我要一个经典汉堡套餐。中号的。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "How would you like your burger? We have original, with cheese, or with bacon and cheese.",
            textZh: "汉堡要什么口味的？有原味、芝士的，或者培根芝士的。",
            alternativeExpressions: [
              { textEn: "What do you want on your burger? We've got original, cheese, or bacon and cheese.", textZh: "汉堡要什么口味的？有原味、芝士、培根芝士的。", actionHint: "口语化询问", frequency: "common" },
              { textEn: "Would you like it plain, with cheese, or loaded with bacon and cheese?", textZh: "要原味的、加芝士的、还是培根芝士的？", actionHint: "简洁列选项", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "With cheese, please. And no onions.",
            textZh: "加芝士的。不要洋葱。",
            culturalNote: "点餐时可以提出定制要求，比如'no onions'（不要洋葱）、'extra pickles'（多加泡菜）等，美式快餐店都会配合。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Cheeseburger, no onions — got it. And what drink would you like? We have Coke, Sprite, iced tea, and lemonade.",
            textZh: "芝士汉堡，不要洋葱——好的。饮料要什么？有可乐、雪碧、冰茶和柠檬水。",
            alternativeExpressions: [
              { textEn: "Cheeseburger, hold the onions — got it. What do you want to drink? We've got Coke, Sprite, iced tea, and lemonade.", textZh: "芝士汉堡，不加洋葱——收到。喝什么？有可乐、雪碧、冰茶和柠檬水。", actionHint: "口语化确认", frequency: "common" },
              { textEn: "One cheeseburger, no onions. And for your drink — Coke, Sprite, iced tea, or lemonade?", textZh: "一份芝士汉堡，不要洋葱。饮料呢——可乐、雪碧、冰茶还是柠檬水？", actionHint: "简洁复述", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Iced tea, please. Is there free refills?",
            textZh: "冰茶吧。可以免费续杯吗？",
            vocabNotes: {
              "free refills": {
                meaningInContext: "在这里指购买一杯后可以免费续杯，美国很多快餐店提供此服务",
                similarUsage: "类似用法：The soda fountain has free refills.（饮料机可以免费续杯）",
              },
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes, free refills on fountain drinks! The drink station is over there — help yourself. Your total is $14.50. For here or to go?",
            textZh: "是的，现调饮料免费续杯！饮料机在那边——自己倒。一共14.50美元。在这吃还是带走？",
            keyPhrases: [
              { en: "fountain drinks", zh: "现调饮料" },
              { en: "for here or to go", zh: "在这吃还是带走" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, free refills on all fountain drinks! Machine's over there, help yourself. Total is $14.50. Eating here or taking it to go?", textZh: "是的，现调饮料都免费续杯！机器在那边，自己倒。一共14.50美元。这儿吃还是带走？", actionHint: "口语化结账", frequency: "common" },
              { textEn: "All fountain drinks are refillable for free — the station is right over there. That's $14.50. For here or to go?", textZh: "所有现调饮料免费续杯——饮料站就在那边。14.50美元。堂食还是外带？", actionHint: "简洁确认", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "For here. Can I pay with card?",
            textZh: "在这吃。可以刷卡吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yep! Tap or insert here. Your order number is 47 — we'll call it when it's ready. Should be about 5 minutes.",
            textZh: "可以！在这里感应或插卡。您的号码是47——好了会叫号。大概5分钟。",
            keyPhrases: [
              { en: "order number", zh: "号码/取餐号" },
              { en: "call it", zh: "叫号" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! Tap or insert here. You're number 47 — we'll call you. About 5 minutes.", textZh: "好的！这里感应或插卡。您是47号——好了叫您。大概5分钟。", actionHint: "简洁办理", frequency: "common" },
              { textEn: "Card goes right here — tap or insert. Your order is number 47; should be ready in about 5 minutes.", textZh: "卡放这里——感应或插卡。您的单号是47号，大约5分钟好。", actionHint: "口语化办理", frequency: "occasional" }
            ],
          },
        ],
      },
      {
        id: "dietary-restrictions",
        titleZh: "饮食限制",
        titleEn: "Dietary Restrictions",
        description: "有过敏或饮食偏好时点餐",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have a peanut allergy. Can you tell me which items are peanut-free?",
            textZh: "你好，我对花生过敏。能告诉我哪些菜品不含花生吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Of course — allergies are serious. Let me check for you. Our burgers and chicken sandwiches are peanut-free. However, our Thai Chicken Salad and some desserts contain peanuts or are processed in a facility that handles peanuts.",
            textZh: "当然——过敏是大事。我帮您查一下。我们的汉堡和鸡肉三明治不含花生。但泰式鸡肉沙拉和一些甜点含花生或者在处理花生的设施中加工的。",
            keyPhrases: [
              { en: "peanut allergy", zh: "花生过敏" },
              { en: "peanut-free", zh: "不含花生的" },
              { en: "processed in a facility that handles peanuts", zh: "在处理花生的设施中加工" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely — we take allergies very seriously. Let me check. Our burgers and chicken sandwiches are peanut-free. But the Thai Chicken Salad and some desserts may contain or have been exposed to peanuts.", textZh: "当然——我们非常重视过敏。我查一下。汉堡和鸡肉三明治不含花生。但泰式鸡肉沙拉和一些甜点可能含有或接触过花生。", actionHint: "口语化查验", frequency: "common" },
              { textEn: "For sure — allergies are no joke. Our burgers and chicken items are peanut-free. Watch out for the Thai salad and desserts, though — they're made near peanut products.", textZh: "当然——过敏不是小事。汉堡和鸡肉类不含花生。但注意泰式沙拉和甜点——在花生产品附近加工的。", actionHint: "警示特定菜品", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I'll have the chicken sandwich then. Does the sauce have any nuts in it?",
            textZh: "那我要鸡肉三明治。酱料里有坚果吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "The mayo and mustard are nut-free. But let me double-check the honey garlic sauce... No, it's clear of all major allergens. Would you like that one?",
            textZh: "蛋黄酱和芥末是不含坚果的。让我再确认一下蜂蜜蒜酱……没有，不含任何主要过敏原。要这个吗？",
            keyPhrases: [
              { en: "nut-free", zh: "不含坚果的" },
              { en: "double-check", zh: "再确认" },
              { en: "major allergens", zh: "主要过敏原" },
            ],
            alternativeExpressions: [
              { textEn: "The mayo and mustard are safe. Let me check the honey garlic sauce... All clear, no major allergens. Want that one?", textZh: "蛋黄酱和芥末是安全的。我查下蜂蜜蒜酱……没问题，不含主要过敏原。要这个吗？", actionHint: "口语化查验", frequency: "common" },
              { textEn: "Mayo and mustard are both nut-free. The honey garlic sauce? Let me verify... Yep, clear of allergens. Shall I go with that one?", textZh: "蛋黄酱和芥末都不含坚果。蜂蜜蒜酱呢？我确认下……没问题，不含过敏原。选这个吗？", actionHint: "逐一确认", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I'll go with the honey garlic sauce. Also, do you have a gluten-free option? My friend can't eat gluten.",
            textZh: "好，我要蜂蜜蒜酱。另外，有无麸质的选择吗？我朋友不能吃麸质。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "We have lettuce wraps instead of buns — that's our gluten-free alternative. Or the grilled chicken salad bowl without croutons.",
            textZh: "我们可以用生菜包代替面包——这是我们的无麸质替代。或者去掉面包丁的烤鸡沙拉碗。",
            keyPhrases: [
              { en: "lettuce wraps", zh: "生菜包" },
              { en: "gluten-free alternative", zh: "无麸质替代" },
              { en: "croutons", zh: "面包丁" },
            ],
            alternativeExpressions: [
              { textEn: "We can do lettuce wraps instead of buns — that's our gluten-free option. Or there's the grilled chicken salad bowl without croutons.", textZh: "可以用生菜包代替面包——这是我们的无麸质选项。还有去掉面包丁的烤鸡沙拉碗。", actionHint: "口语化替代选项", frequency: "common" },
              { textEn: "For gluten-free, we swap the bun for a lettuce wrap. You could also go with the grilled chicken salad — just hold the croutons.", textZh: "无麸质的话，把面包换成生菜包。也可以选烤鸡沙拉——不加面包丁就行。", actionHint: "给出两种方案", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "The lettuce wrap sounds good. Can we also get two bottles of water?",
            textZh: "生菜包听起来不错。再来两瓶水可以吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Sure! So that's one chicken sandwich with honey garlic, one lettuce wrap chicken, and two waters. Your total is $26.80. Would you like the allergen information printed on your receipt?",
            textZh: "好的！一份蜂蜜蒜鸡肉三明治，一份生菜包鸡肉，两瓶水。一共26.80美元。需要在收据上打印过敏原信息吗？",
            keyPhrases: [
              { en: "allergen information", zh: "过敏原信息" },
            ],
            alternativeExpressions: [
              { textEn: "Got it! One honey garlic chicken sandwich, one lettuce wrap chicken, two waters. That's $26.80. Want the allergen info on the receipt?", textZh: "收到！蜂蜜蒜鸡肉三明治一份，生菜包鸡肉一份，两瓶水。26.80美元。要在收据上印过敏原信息吗？", actionHint: "口语化复述", frequency: "common" },
              { textEn: "So that's a chicken sandwich with honey garlic, a lettuce-wrap chicken, and two waters — $26.80 total. I can print allergen details on the receipt if you'd like.", textZh: "那就是蜂蜜蒜鸡肉三明治、生菜包鸡肉和两瓶水——总共26.80美元。需要的话可以在收据上打印过敏原信息。", actionHint: "确认并提供额外服务", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. That would be really helpful. Thank you for being so careful.",
            textZh: "好的，那很有帮助。谢谢你这么仔细。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "We take allergies very seriously. Here's your receipt with the allergen details. Order 52 — we'll have it ready in about 7 minutes.",
            textZh: "我们非常重视过敏问题。这是带过敏原详情的收据。52号——大约7分钟好。",
            alternativeExpressions: [
              { textEn: "We don't mess around with allergies. Here's your receipt with all the allergen info. Number 52 — about 7 minutes.", textZh: "过敏问题我们绝不含糊。收据上有全部过敏原信息。52号——大约7分钟。", actionHint: "口语化确认", frequency: "common" },
              { textEn: "Allergies are top priority for us. Your receipt has the allergen breakdown. Order 52 — should be ready in around 7 minutes.", textZh: "过敏是我们最重视的。收据上有过敏原详细信息。52号——大约7分钟好。", actionHint: "强调重视", frequency: "occasional" }
            ],
          },
        ],
      },
    ],
  },

  // ==================== 21. 机场正餐 ====================
  {
    id: "airport-dining-sit-down",
    category: "airport",
    titleZh: "机场正式餐厅",
    titleEn: "Airport Sit-Down Restaurant",
    description: "在机场正式餐厅用餐",
    otherRole: "餐厅服务员",
    otherRoleIcon: "🍽️",
    flows: [
      {
        id: "full-meal",
        titleZh: "完整用餐",
        titleEn: "Full Meal Experience",
        description: "在登机前的时间在餐厅吃一顿正餐",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, table for one please. I have about an hour before my flight.",
            textZh: "你好，一个人。我大概有一小时登机。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Welcome! Right this way. Here's your menu. Would you like to start with something to drink?",
            textZh: "欢迎！这边请。这是菜单。先来点喝的吗？",
            alternativeExpressions: [
              { textEn: "Hi! Come on in. Here's the menu. Can I start you off with a drink?", textZh: "你好！请进。菜单给您。先来杯喝的吗？", actionHint: "口语化招待", frequency: "common" },
              { textEn: "Welcome! Please have a seat. Here's our menu — would you like to order drinks first?", textZh: "欢迎！请坐。这是菜单——要先点饮料吗？", actionHint: "正式招待", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Just water for now, thanks. What do you recommend that's quick?",
            textZh: "先来杯水就行，谢谢。有什么出菜快的推荐？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Our pasta dishes and steak sandwich come out the fastest — about 10 minutes. The steak entrées take a bit longer, maybe 20 minutes.",
            textZh: "我们的意面和牛排三明治出最快——大约10分钟。牛排主菜要久一点，大概20分钟。",
            keyPhrases: [
              { en: "come out the fastest", zh: "出最快" },
              { en: "entrées", zh: "主菜" },
            ],
            alternativeExpressions: [
              { textEn: "The pasta and steak sandwich are the quickest — about 10 minutes. Steak entrées take closer to 20.", textZh: "意面和牛排三明治最快——大约10分钟。牛排主菜接近20分钟。", actionHint: "简洁告知", frequency: "common" },
              { textEn: "If you're short on time, the pasta or steak sandwich can be out in 10 minutes. The steak mains need around 20.", textZh: "赶时间的话，意面或牛排三明治10分钟能出。牛排主菜大约要20分钟。", actionHint: "根据时间推荐", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I'll have the pasta, please. The tomato basil one.",
            textZh: "我要意面。番茄罗勒的。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Great choice. Would you like to add grilled chicken or shrimp to it? Chicken is $4 extra and shrimp is $6.",
            textZh: "好选择。要加烤鸡肉或虾吗？鸡肉加4美元，虾加6美元。",
            alternativeExpressions: [
              { textEn: "Nice choice! Want to add grilled chicken or shrimp? Chicken's $4 extra, shrimp is $6.", textZh: "好选择！要加烤鸡肉或虾吗？鸡肉加4美元，虾加6美元。", actionHint: "口语化追加推荐", frequency: "common" },
              { textEn: "Excellent! You can top it with grilled chicken for $4 or shrimp for $6. Interested?", textZh: "很好！可以加烤鸡肉4美元或虾6美元。要加吗？", actionHint: "简洁推荐加料", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Add chicken, please. And can I get the check right away after the food comes? I don't want to miss my flight.",
            textZh: "加鸡肉。上菜后能直接给我账单吗？不想误了航班。",
            culturalNote: "在美国餐厅，服务员不会主动送账单，需要自己要。提前说明赶时间，他们会加快服务。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Absolutely! I'll bring the check with your food so you can pay whenever you're ready. What gate are you at? I'll keep an eye on the departure board for you.",
            textZh: "没问题！我上菜时一起把账单带来，随时可以结。你在哪个登机口？我帮你留意一下航班信息屏。",
            keyPhrases: [
              { en: "bring the check", zh: "带账单" },
              { en: "departure board", zh: "航班信息屏" },
              { en: "keep an eye on", zh: "留意" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! I'll bring the check with your food so you can settle up whenever. Which gate are you at? I'll keep an eye on the board.", textZh: "没问题！上菜时一起拿账单来，随时可以结。你在哪个登机口？我帮你看着航班屏。", actionHint: "口语化服务", frequency: "common" },
              { textEn: "No worries! I'll bring the bill together with your meal. Tell me your gate and I'll watch the departure screen for you.", textZh: "放心！账单和餐一起给您。告诉我登机口号码，我帮您留意出发屏。", actionHint: "主动关注航班", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Gate B7. That's really kind of you. How much is the pasta with chicken?",
            textZh: "B7登机口。你人真好。加鸡肉的意面多少钱？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "The pasta is $18 plus $4 for the chicken, so $22 before tax and gratuity. We also add an automatic 18% service charge for airport dining.",
            textZh: "意面18美元加鸡肉4美元，税前和小费前22美元。机场餐饮我们还会自动加收18%的服务费。",
            keyPhrases: [
              { en: "before tax and gratuity", zh: "税前和小费前" },
              { en: "automatic service charge", zh: "自动服务费" },
            ],
            alternativeExpressions: [
              { textEn: "The pasta's $18 plus $4 for chicken, so $22 before tax and tip. We add an 18% service charge automatically for airport dining.", textZh: "意面18加鸡肉4，税前和小费前22美元。机场餐饮自动加收18%服务费。", actionHint: "口语化报价", frequency: "common" },
              { textEn: "That comes to $22 — $18 for the pasta, $4 for the chicken — before tax. There's also an automatic 18% gratuity for airport restaurants.", textZh: "总共22美元——意面18，鸡肉4——税前。机场餐厅还有18%的自动小费。", actionHint: "逐项报价", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "So the tip is already included? I don't need to leave extra?",
            textZh: "那小费已经包含了？不需要额外给？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "The 18% covers the service charge. You can add more if you'd like, but it's not expected. Here's your pasta — enjoy! And your check is right here.",
            textZh: "18%就是服务费。如果愿意可以多给，但不是必须的。您的意面来了——请慢用！账单在这里。",
            keyPhrases: [
              { en: "not expected", zh: "不是必须的" },
            ],
            alternativeExpressions: [
              { textEn: "The 18% is the service charge — you don't need to add more unless you want to. Here's your pasta — enjoy! And the check's right here.", textZh: "18%就是服务费——不需要额外加，除非你想。意面来了——请慢用！账单在这。", actionHint: "口语化解释", frequency: "common" },
              { textEn: "That 18% covers everything — extra tip is totally optional. Your pasta is here, and so is the check. Enjoy your meal!", textZh: "18%已经全包了——额外小费完全自愿。意面到了，账单也在这。请享用！", actionHint: "明确小费规则", frequency: "occasional" }
            ],
          },
        ],
      },
      {
        id: "meal-voucher",
        titleZh: "使用餐饮券",
        titleEn: "Using a Meal Voucher",
        description: "航班延误后使用航空公司给的餐饮券",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, my flight was delayed and the airline gave me this meal voucher. Can I use it here?",
            textZh: "你好，我的航班延误了，航空公司给了我这张餐饮券。能在这里用吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Let me take a look... Yes, we accept these. It's a $20 voucher. If your bill goes over, you'll just pay the difference.",
            textZh: "我看看……可以的，我们接受。这是20美元的券。如果账单超过了，您付差额就行。",
            keyPhrases: [
              { en: "meal voucher", zh: "餐饮券" },
              { en: "pay the difference", zh: "付差额" },
            ],
            alternativeExpressions: [
              { textEn: "Let me see... Yes, we take these. It's a $20 voucher — if your bill's more, you just cover the difference.", textZh: "我看看……可以的，我们收。20美元的券——账单超过的话您付差额就行。", actionHint: "口语化确认", frequency: "common" },
              { textEn: "Sure, those are valid here! It covers $20 of your bill. Anything over that, you pay the rest.", textZh: "当然，这些在我们这有效！抵扣20美元。超出的部分您付就好。", actionHint: "简洁说明", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Does it cover drinks and desserts too, or just main courses?",
            textZh: "饮料和甜点也能用吗？还是只能点主菜？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "It covers anything on the menu — food, drinks, desserts, all included. The only exception is alcoholic beverages.",
            textZh: "菜单上什么都可以——食物、饮料、甜点都包含。唯一的例外是酒精饮料。",
            keyPhrases: [
              { en: "anything on the menu", zh: "菜单上的任何东西" },
              { en: "exception", zh: "例外" },
              { en: "alcoholic beverages", zh: "酒精饮料" },
            ],
            alternativeExpressions: [
              { textEn: "You can use it on anything — food, drinks, desserts. The only thing it doesn't cover is alcohol.", textZh: "什么都能用——食物、饮料、甜点。唯一不包含的是酒精饮品。", actionHint: "简洁说明范围", frequency: "common" },
              { textEn: "It's good for everything on the menu except alcoholic beverages. Food, soft drinks, desserts — all covered.", textZh: "菜单上除了酒精饮品都能用。食物、软饮、甜点——全包。", actionHint: "先说例外再说范围", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, I'll have the Caesar salad and a grilled salmon. And a coffee.",
            textZh: "好的，我要凯撒沙拉、烤三文鱼和一杯咖啡。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Excellent. The salad is $12, the salmon is $24, and the coffee is $4. That's $40 total before tax. So your voucher covers $20, and you'd owe about $22 with tax.",
            textZh: "好的。沙拉12美元，三文鱼24美元，咖啡4美元。税前一共40美元。所以餐饮券抵20美元，加税后您需要付大约22美元。",
            keyPhrases: [
              { en: "covers", zh: "抵扣" },
              { en: "owe", zh: "需要付" },
            ],
            alternativeExpressions: [
              { textEn: "Let me add that up. Salad $12, salmon $24, coffee $4 — that's $40 before tax. Your voucher takes $20 off, so you'll pay about $22 after tax.", textZh: "我算一下。沙拉12，三文鱼24，咖啡4——税前40美元。餐饮券减20，加税后大约付22美元。", actionHint: "逐项计算", frequency: "common" },
              { textEn: "Okay — $12 plus $24 plus $4 is $40. With the voucher, that's $20 out of pocket before tax. About $22 total after tax.", textZh: "好——12加24加4是40美元。用了餐饮券自付20，加税后大约22美元。", actionHint: "口语化计算", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "That's fine. I'm stuck here for another three hours anyway. Might as well have a nice meal.",
            textZh: "没关系。反正还要在这等三个小时。不如好好吃一顿。",
            vocabNotes: {
              "might as well": {
                meaningInContext: "在这里表示'既然如此，不如就…'",
                similarUsage: "类似用法：We might as well go shopping since we have time.（既然有时间，不如去逛逛）",
              },
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "That's the spirit! We have great desserts too if you want to add one later. I'll get your order in right away.",
            textZh: "这才对嘛！如果一会想加甜点我们也有很好的选择。我马上下单。",
            alternativeExpressions: [
              { textEn: "That's the way! We have some great desserts too if you get tempted later. I'll put your order in right now.", textZh: "就该这样！如果一会想吃甜点我们也有很棒的。我现在就下单。", actionHint: "口语化鼓励", frequency: "common" },
              { textEn: "Love it! Make the most of it. I'll get this order started — and save room for dessert if you can!", textZh: "太好了！物尽其用。我马上下单——如果能的话给甜点留点肚子！", actionHint: "热情推荐甜点", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Does the voucher expire if I don't use it all today?",
            textZh: "如果今天没用完，这个券会过期吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "It's only valid today — you can see the date printed at the bottom. So use it while you can! I'll be right back with your coffee.",
            textZh: "只限今天——你可以看到底部印的日期。所以趁现在用了吧！我马上给您端咖啡。",
            keyPhrases: [
              { en: "only valid today", zh: "仅限今天有效" },
              { en: "use it while you can", zh: "趁能用的时候用" },
            ],
            alternativeExpressions: [
              { textEn: "It's only good for today — see the date on the bottom? Use it while you can! Coffee coming right up.", textZh: "只限今天用——看底部的日期？趁现在赶紧用！咖啡马上来。", actionHint: "口语化提醒", frequency: "common" },
              { textEn: "The voucher expires today — the date is printed at the bottom. So definitely use it now! I'll be right back with your coffee.", textZh: "餐饮券今天到期——日期印在底部。所以一定要现在用！我马上给您端咖啡。", actionHint: "强调有效期", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. I might as well add a dessert then!",
            textZh: "谢谢。那我再加个甜点吧！",
          },
        ],
      },
    ],
  },

  // ==================== 22. 机场药房 ====================
  {
    id: "airport-pharmacy-medicine",
    category: "airport",
    titleZh: "机场药房买药",
    titleEn: "Airport Pharmacy",
    description: "在机场药房购买非处方药",
    otherRole: "药剂师",
    otherRoleIcon: "💊",
    flows: [
      {
        id: "common-medicine",
        titleZh: "买常用药",
        titleEn: "Common Medicine",
        description: "购买头痛药、感冒药等常见药物",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have a terrible headache. What do you recommend?",
            textZh: "你好，我头痛得厉害。有什么推荐的吗？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "For headaches, I'd recommend ibuprofen or acetaminophen. Ibuprofen also reduces inflammation, while acetaminophen is gentler on the stomach. Do you have any allergies to medications?",
            textZh: "头痛的话，推荐布洛芬或对乙酰氨基酚。布洛芬还能消炎，对乙酰氨基酚对胃更温和。你对什么药物过敏吗？",
            keyPhrases: [
              { en: "ibuprofen", zh: "布洛芬" },
              { en: "acetaminophen", zh: "对乙酰氨基酚" },
              { en: "reduces inflammation", zh: "消炎" },
              { en: "gentler on the stomach", zh: "对胃更温和" },
              { en: "allergies to medications", zh: "药物过敏" },
            ],
            alternativeExpressions: [
              { textEn: "For headaches, I'd go with ibuprofen or acetaminophen. Ibuprofen also helps with inflammation; acetaminophen is easier on the stomach. Any medication allergies?", textZh: "头痛的话，推荐布洛芬或对乙酰氨基酚。布洛芬还消炎，对乙酰氨基酚对胃温和。有药物过敏吗？", actionHint: "口语化推荐", frequency: "common" },
              { textEn: "I'd suggest either ibuprofen or acetaminophen for headaches. Are you allergic to any medications? That'll help me recommend the right one.", textZh: "头痛建议用布洛芬或对乙酰氨基酚。有没有药物过敏？这样我好推荐合适的。", actionHint: "先问过敏", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "No allergies. I'll go with ibuprofen. I also feel a cold coming on — stuffy nose and sore throat.",
            textZh: "没有过敏。我选布洛芬。我还感觉要感冒了——鼻塞和喉咙痛。",
            vocabNotes: {
              "feel a cold coming on": {
                meaningInContext: "在这里指感觉快要感冒了、有感冒的前兆",
                similarUsage: "类似用法：I think I'm coming down with something.（我觉得我快生病了）",
              },
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "For cold symptoms, I'd suggest a multi-symptom cold medicine. This one covers congestion, sore throat, and runny nose. It comes in daytime and nighttime formulas — the nighttime one helps you sleep.",
            textZh: "感冒症状的话，建议用多症状感冒药。这款覆盖鼻塞、喉咙痛和流鼻涕。有日间和夜间配方——夜间的帮助睡眠。",
            keyPhrases: [
              { en: "multi-symptom", zh: "多症状" },
              { en: "congestion", zh: "鼻塞" },
              { en: "runny nose", zh: "流鼻涕" },
              { en: "daytime and nighttime formulas", zh: "日间和夜间配方" },
            ],
            alternativeExpressions: [
              { textEn: "For a cold, try a multi-symptom medicine. This one handles congestion, sore throat, and runny nose. It comes in day and night versions — the night one helps you sleep.", textZh: "感冒的话试试多症状药。这款管鼻塞、喉咙痛和流鼻涕。有日间和夜间两种——夜间的帮助入睡。", actionHint: "口语化推荐", frequency: "common" },
              { textEn: "This multi-symptom cold medicine should do the trick — covers everything from stuffy nose to sore throat. Get the combo pack with daytime and nighttime formulas.", textZh: "这款多症状感冒药应该管用——从鼻塞到喉咙痛都管。买日间和夜间配方的组合装。", actionHint: "推荐组合装", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take both. Do you also have throat lozenges?",
            textZh: "两种我都要。有润喉糖吗？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Yes, these honey-lemon ones are popular and very soothing. They also have a mild numbing effect that really helps with throat pain.",
            textZh: "有的，这种蜂蜜柠檬的很受欢迎，很舒缓。它们还有轻微的麻醉效果，对喉咙痛特别有帮助。",
            keyPhrases: [
              { en: "throat lozenges", zh: "润喉糖" },
              { en: "soothing", zh: "舒缓的" },
              { en: "numbing effect", zh: "麻醉效果" },
            ],
            alternativeExpressions: [
              { textEn: "These honey-lemon ones are great — very soothing, and they numb the throat a bit so the pain goes away.", textZh: "这种蜂蜜柠檬的很好——很舒缓，还能轻微麻醉喉咙减轻疼痛。", actionHint: "口语化推荐", frequency: "common" },
              { textEn: "Try these honey-lemon lozenges. They're popular because they soothe and have a gentle numbing effect for throat pain.", textZh: "试试这种蜂蜜柠檬润喉糖。很受欢迎，因为能舒缓还有温和的麻醉效果缓解喉咙痛。", actionHint: "说明受欢迎原因", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. How much for everything?",
            textZh: "好的。一共多少？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "The ibuprofen is $8, the cold medicine is $12, and the lozenges are $6. That's $26 total. Make sure you don't take the ibuprofen and cold medicine at the same time — the cold medicine already contains a pain reliever.",
            textZh: "布洛芬8美元，感冒药12美元，润喉糖6美元。一共26美元。注意不要同时吃布洛芬和感冒药——感冒药里已经含有止痛成分了。",
            keyPhrases: [
              { en: "pain reliever", zh: "止痛成分" },
              { en: "at the same time", zh: "同时" },
            ],
            alternativeExpressions: [
              { textEn: "Ibuprofen is $8, cold medicine $12, lozenges $6 — $26 total. One thing: don't take the ibuprofen and cold medicine together since the cold medicine already has a pain reliever.", textZh: "布洛芬8美元，感冒药12美元，润喉糖6美元——共26美元。注意：布洛芬和感冒药别同时吃，感冒药里已经有止痛成分。", actionHint: "口语化提醒", frequency: "common" },
              { textEn: "That's $8, $12, and $6 — $26 altogether. Important: the cold medicine contains a pain reliever, so skip the ibuprofen when you take it.", textZh: "分别是8、12和6美元——总共26。重要提醒：感冒药含止痛成分，吃感冒药时别再吃布洛芬。", actionHint: "强调用药安全", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. I'll just take the cold medicine then and save the ibuprofen for later.",
            textZh: "了解了。那我先吃感冒药，布洛芬留着以后用。",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Smart. Take the daytime dose now — two tablets with water. Drink plenty of fluids on your flight. Feel better!",
            textZh: "明智。现在吃日间剂量——两片，配水。飞行途中多喝水。祝你早日康复！",
            keyPhrases: [
              { en: "dose", zh: "剂量" },
              { en: "plenty of fluids", zh: "大量的水" },
              { en: "feel better", zh: "早日康复" },
            ],
            alternativeExpressions: [
              { textEn: "Good plan. Take the daytime dose now — two tablets with water. Stay hydrated on the flight. Hope you feel better!", textZh: "好主意。现在吃日间剂量——两片配水。飞行途中多喝水。祝早日康复！", actionHint: "口语化嘱咐", frequency: "common" },
              { textEn: "That's wise. Pop two daytime tablets now with some water, and keep drinking fluids on the plane. Get well soon!", textZh: "明智。现在吃两片日间药配水，飞机上继续多喝水。祝快点好起来！", actionHint: "关心叮嘱", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much. You've been really helpful.",
            textZh: "非常感谢。你帮了大忙了。",
          },
        ],
      },
      {
        id: "prescription-issue",
        titleZh: "处方药问题",
        titleEn: "Prescription Medicine Issue",
        description: "需要处方药但没有当地处方",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I ran out of my blood pressure medication and I'm here for another week. Can I buy more without a local prescription?",
            textZh: "我的降压药吃完了，还要在这里待一周。没有本地处方能买吗？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Unfortunately, prescription medications require a local prescription. I can't sell them over the counter. Do you have the original prescription or the medication bottle with you?",
            textZh: "很遗憾，处方药需要本地处方。我不能直接卖。你有原来的处方或药瓶吗？",
            keyPhrases: [
              { en: "prescription medications", zh: "处方药" },
              { en: "local prescription", zh: "本地处方" },
              { en: "over the counter", zh: "非处方/直接购买" },
              { en: "medication bottle", zh: "药瓶" },
            ],
            alternativeExpressions: [
              { textEn: "Sorry, but prescription meds need a local prescription. I can't sell them without one. Do you have the original prescription or the bottle with you?", textZh: "抱歉，处方药需要本地处方。没有的话我没法卖。有原来的处方或药瓶吗？", actionHint: "口语化说明", frequency: "common" },
              { textEn: "I'm afraid I need a local prescription for those. Without it, I can't dispense them. Did you bring the original prescription or medication bottle?", textZh: "恐怕需要本地处方才能配这些药。没有的话没办法。带了原来的处方或药瓶吗？", actionHint: "正式说明限制", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I have the empty bottle with the label. It shows the medication name and dosage.",
            textZh: "我有空的药瓶，上面有标签。写了药名和剂量。",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "That helps. Here's what I'd recommend: there's a walk-in clinic in Terminal 3, open until 8 PM. A doctor there can write you an emergency prescription. It costs about $80 for the visit.",
            textZh: "这有帮助。我建议：3号航站楼有个无需预约的诊所，营业到晚上8点。那里的医生可以给你开紧急处方。看诊费大概80美元。",
            keyPhrases: [
              { en: "walk-in clinic", zh: "无需预约的诊所" },
              { en: "emergency prescription", zh: "紧急处方" },
            ],
            alternativeExpressions: [
              { textEn: "That helps. There's a walk-in clinic in Terminal 3, open till 8 PM. A doctor can write you an emergency prescription — about $80 for the visit.", textZh: "这有帮助。3号航站楼有个无需预约的诊所，开到晚上8点。医生可以开紧急处方——看诊大约80美元。", actionHint: "口语化指引", frequency: "common" },
              { textEn: "Good — bring that with you. There's a medical clinic in Terminal 3 that takes walk-ins until 8 PM. They can issue an emergency prescription for around $80.", textZh: "好的——带上它。3号航站楼有个诊所接受随到就诊，开到8点。大约80美元可以开紧急处方。", actionHint: "给出具体方案", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "That's helpful. Is the walk-in clinic far from here?",
            textZh: "有帮助。那个诊所离这里远吗？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "It's about a 5-minute walk — take the corridor to the left, follow signs for Terminal 3 medical services. Once you have the prescription, you can come back here and I'll fill it right away.",
            textZh: "大约走5分钟——走左边走廊，跟着3号航站楼医疗服务的指示牌走。拿到处方后回这里，我马上给你配药。",
            keyPhrases: [
              { en: "fill it", zh: "配药" },
              { en: "right away", zh: "马上" },
            ],
            alternativeExpressions: [
              { textEn: "It's about a 5-minute walk. Go left down the corridor and follow the signs for Terminal 3 medical. Bring the prescription back here and I'll fill it right away.", textZh: "走大约5分钟。走左边走廊，跟着3号航站楼医疗服务的指示牌。拿到处方回来我马上配药。", actionHint: "口语化指路", frequency: "common" },
              { textEn: "Take the left corridor and look for the 'Medical Services' signs — about 5 minutes on foot. Once you have the prescription, come straight back and I'll get it ready.", textZh: "走左边走廊找'Medical Services'指示牌——步行约5分钟。拿到处方直接回来，我帮你配好。", actionHint: "详细路线", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Can I also have my doctor in China email or fax the prescription?",
            textZh: "我中国的医生可以通过邮件或传真发处方过来吗？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "We can only accept prescriptions from licensed practitioners in this country. A foreign prescription won't work, unfortunately. But bring the bottle to the clinic — it'll make the process much faster.",
            textZh: "我们只能接受本国执业医生的处方。外国处方很遗憾不行。但把药瓶带去诊所——会大大加快流程。",
            keyPhrases: [
              { en: "licensed practitioners", zh: "执业医生" },
              { en: "foreign prescription", zh: "外国处方" },
            ],
            alternativeExpressions: [
              { textEn: "We can only accept prescriptions from local doctors, unfortunately. A foreign one won't work. But bring your bottle to the clinic — it'll speed things up a lot.", textZh: "很遗憾我们只能接受本地医生的处方。外国的不行。但把药瓶带去诊所——会快很多。", actionHint: "口语化解释", frequency: "common" },
              { textEn: "Foreign prescriptions aren't valid here, I'm afraid. But if you show the doctor your medication bottle, they can quickly verify what you need and write a new one.", textZh: "外国处方在这里不行。但如果让医生看到你的药瓶，他们可以很快确认你的用药需求并开新处方。", actionHint: "建议带药瓶", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Understood. I'll head there now. Thank you for the guidance.",
            textZh: "明白了。我现在就去。谢谢指导。",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "You're welcome. Also — a travel tip for the future: always carry at least a week's extra supply of essential medications when traveling internationally.",
            textZh: "不客气。另外——以后旅行的小建议：出国旅行时务必多带至少一周量的必备药物。",
            keyPhrases: [
              { en: "extra supply", zh: "额外的量" },
              { en: "essential medications", zh: "必备药物" },
            ],
            alternativeExpressions: [
              { textEn: "Happy to help! One last tip for future trips: always pack at least an extra week's worth of essential meds when traveling abroad.", textZh: "很高兴帮到你！以后出国的建议：必备药物至少多带一周的量。", actionHint: "口语化建议", frequency: "common" },
              { textEn: "You're welcome. And a travel tip — next time, bring more than enough of your regular medication. A week's extra supply can save you a lot of trouble.", textZh: "不客气。旅行小建议——下次常备药多带些。多带一周的量能省很多麻烦。", actionHint: "实用旅行建议", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Lesson learned. I'll be more prepared next time.",
            textZh: "学到了。下次会准备充分一些。",
          },
        ],
      },
    ],
  },

  // ==================== 23. 特殊协助 ====================
  {
    id: "airport-special-assistance",
    category: "airport",
    titleZh: "特殊协助服务",
    titleEn: "Special Assistance Services",
    description: "为老人、孕妇或行动不便的旅客请求特殊协助",
    otherRole: "机场服务人员",
    otherRoleIcon: "♿",
    flows: [
      {
        id: "elderly-assistance",
        titleZh: "为老人申请协助",
        titleEn: "Elderly Passenger Assistance",
        description: "帮不懂英语的老年父母申请机场协助服务",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, my parents are flying alone and they don't speak English. They're both in their 70s. Can they get some assistance through the airport?",
            textZh: "你好，我父母要自己飞，他们不会说英语。都70多岁了。能在机场得到一些协助吗？",
          },
          {
            speaker: "them",
            role: "服务台",
            textEn: "Of course! We offer a meet-and-assist service. A staff member will guide them from check-in through security, to the gate, and help them board. We can also arrange it at the arrival airport.",
            textZh: "当然！我们提供接送协助服务。工作人员会引导他们从值机到安检、到登机口，并帮助登机。到达机场也可以安排。",
            keyPhrases: [
              { en: "meet-and-assist service", zh: "接送协助服务" },
              { en: "guide them", zh: "引导他们" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! We have a meet-and-assist service. Someone will guide them through check-in, security, and boarding. We can arrange arrival assistance too.", textZh: "当然！我们有接送协助服务。会有人带他们走值机、安检和登机。到达机场也可以安排。", actionHint: "口语化介绍", frequency: "common" },
              { textEn: "Absolutely. Our escort service covers the entire process — from check-in to boarding. If you want, we can set up the same thing at the destination airport.", textZh: "完全可以。我们的陪护服务覆盖全流程——从值机到登机。需要的话目的地机场也可以安排。", actionHint: "强调全流程", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "That would be wonderful. How do I arrange it?",
            textZh: "那太好了。怎么安排？",
          },
          {
            speaker: "them",
            role: "服务台",
            textEn: "You can request it through the airline when booking, or I can set it up now. I'll need their names, flight number, and any specific needs — like if they need a wheelchair or have mobility issues.",
            textZh: "你可以订票时通过航空公司申请，或者我现在帮你安排。需要他们的姓名、航班号，还有任何具体需求——比如是否需要轮椅或有行动不便的情况。",
            keyPhrases: [
              { en: "specific needs", zh: "具体需求" },
              { en: "wheelchair", zh: "轮椅" },
              { en: "mobility issues", zh: "行动不便" },
            ],
            alternativeExpressions: [
              { textEn: "You can request it when booking, or I'll set it up right now. I'll need their names, flight number, and any special requirements — wheelchair, mobility issues, that sort of thing.", textZh: "订票时可以申请，或者我现在帮你安排。需要姓名、航班号和特殊需求——轮椅、行动不便之类的。", actionHint: "口语化说明", frequency: "common" },
              { textEn: "Either book it through the airline or let me arrange it here. Just give me their names, flight details, and any specific needs like a wheelchair.", textZh: "通过航空公司预订或者让我在这安排都行。告诉我姓名、航班信息和具体需求，比如轮椅。", actionHint: "提供两种方式", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "They can walk, but slowly. They might need a wheelchair in a large airport where the gates are far away. Also, my mom has a heart condition — she carries medication in her carry-on.",
            textZh: "他们能走路，但比较慢。在大型机场如果登机口很远可能需要轮椅。另外，我妈妈有心脏病——随身行李里有药。",
          },
          {
            speaker: "them",
            role: "服务台",
            textEn: "I'll note the wheelchair request and the medical condition. We'll make sure the security team knows about the medication so it goes through smoothly. Is there a contact number in case of any issues during travel?",
            textZh: "我会记录轮椅需求和医疗情况。我们会确保安检团队知道药物的事，顺利通过。有没有联系电话，旅途中有问题可以联系？",
            keyPhrases: [
              { en: "note the request", zh: "记录需求" },
              { en: "goes through smoothly", zh: "顺利通过" },
              { en: "contact number", zh: "联系电话" },
            ],
            alternativeExpressions: [
              { textEn: "I'll note the wheelchair and medical needs. We'll make sure security knows about the medication so there's no issue. Got a contact number for emergencies?", textZh: "轮椅和医疗需求我记下了。我们会让安检知道药物的事，不会有问题。有紧急联系电话吗？", actionHint: "口语化确认", frequency: "common" },
              { textEn: "Wheelchair and medication — noted. I'll coordinate with the security team so everything goes smoothly. Can I have a phone number to reach in case of issues?", textZh: "轮椅和药物——记下了。我会和安检团队协调确保顺利。能留一个出问题时能联系到的电话吗？", actionHint: "强调协调", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, here's my number. Please call me if anything comes up. Is there a fee for this service?",
            textZh: "好的，这是我的号码。有什么事请打给我。这个服务收费吗？",
          },
          {
            speaker: "them",
            role: "服务台",
            textEn: "The basic assistance and wheelchair service are complimentary — they're provided by the airline. If you want a dedicated personal escort throughout the entire journey, that's a premium service for $75 per person.",
            textZh: "基本协助和轮椅服务是免费的——由航空公司提供。如果你想要全程专人陪同，那是高级服务，每人75美元。",
            keyPhrases: [
              { en: "complimentary", zh: "免费的" },
              { en: "dedicated personal escort", zh: "专人陪同" },
              { en: "premium service", zh: "高级服务" },
            ],
            alternativeExpressions: [
              { textEn: "The wheelchair and basic assistance are free — the airline provides that. For a dedicated personal escort the whole way, it's $75 per person.", textZh: "轮椅和基本协助是免费的——航空公司提供。全程专人陪同的话每人75美元。", actionHint: "区分免费和付费", frequency: "common" },
              { textEn: "Standard wheelchair service is complimentary. If you'd like someone with them every step of the way, that's our premium option at $75 per person.", textZh: "标准轮椅服务免费。如果需要全程有人陪着，那是高级服务选项，每人75美元。", actionHint: "分层说明", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I think the free service should be enough. They'll be picked up at the arrival airport by my brother.",
            textZh: "免费服务应该够了。到了以后我弟弟去接他们。",
          },
          {
            speaker: "them",
            role: "服务台",
            textEn: "Perfect. I've set everything up. On the day of travel, they should arrive 30 minutes earlier than usual and go directly to the special assistance counter near check-in. Someone will be waiting for them.",
            textZh: "好的。我都安排好了。旅行当天，他们应该比平时早到30分钟，直接去值机区附近的特殊协助柜台。会有人在那里等他们。",
            keyPhrases: [
              { en: "arrive earlier than usual", zh: "比平时早到" },
              { en: "special assistance counter", zh: "特殊协助柜台" },
            ],
            alternativeExpressions: [
              { textEn: "All set! On travel day, have them arrive 30 minutes early and go straight to the special assistance counter near check-in. Someone will be waiting.", textZh: "安排好了！旅行当天让他们提前30分钟到，直接去值机区的特殊协助柜台。会有人等着。", actionHint: "口语化交代", frequency: "common" },
              { textEn: "Everything's arranged. They should arrive half an hour earlier than usual and head to the special assistance desk by check-in. Our staff will be ready for them.", textZh: "一切安排妥当。他们应该比平时早半小时到，去值机处旁边的特殊协助台。我们的人会在那里等。", actionHint: "正式确认", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much. This puts my mind at ease.",
            textZh: "非常感谢。这让我放心多了。",
          },
        ],
      },
      {
        id: "unaccompanied-minor",
        titleZh: "独自旅行的儿童",
        titleEn: "Unaccompanied Minor",
        description: "为独自旅行的孩子安排机场协助",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "My 10-year-old daughter is flying alone to visit her grandparents. What do I need to arrange?",
            textZh: "我10岁的女儿要独自飞去看爷爷奶奶。我需要安排什么？",
          },
          {
            speaker: "them",
            role: "服务台",
            textEn: "For children between 5 and 11 traveling alone, our unaccompanied minor service is mandatory. A staff member will supervise your daughter from check-in until she's handed over to the designated adult at the destination.",
            textZh: "5到11岁独自旅行的儿童，我们的无陪伴未成年人服务是强制的。工作人员会从值机开始看护您女儿，直到在目的地交给指定的成年人。",
            keyPhrases: [
              { en: "unaccompanied minor", zh: "无陪伴未成年人" },
              { en: "mandatory", zh: "强制的" },
              { en: "supervise", zh: "看护" },
              { en: "designated adult", zh: "指定的成年人" },
            ],
            alternativeExpressions: [
              { textEn: "For kids 5 to 11 flying alone, our unaccompanied minor program is required. A staff member watches over your daughter from check-in all the way until she's handed to the designated adult.", textZh: "5到11岁独飞的孩子必须参加我们的无陪伴未成年人计划。工作人员从值机开始全程看护您女儿，直到交给指定的成年人。", actionHint: "口语化说明", frequency: "common" },
              { textEn: "Children aged 5 to 11 traveling solo must use our unaccompanied minor service. We'll take care of her from the moment she checks in until the authorized adult picks her up.", textZh: "5到11岁独自旅行的儿童必须使用我们的无陪伴未成年人服务。从值机那一刻起我们会照顾她，直到授权成年人接走。", actionHint: "正式说明", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "How does it work exactly? I want to make sure she's safe the entire time.",
            textZh: "具体怎么操作的？我要确保她全程安全。",
          },
          {
            speaker: "them",
            role: "服务台",
            textEn: "You'll escort her to the gate with a special pass. After you say goodbye, our staff takes over — they'll sit near her on the plane and walk her to the arrival gate. The grandparents must show ID to pick her up.",
            textZh: "您可以用特殊通行证送她到登机口。告别后，我们的工作人员接手——会在飞机上坐在她附近，带她到达到达口。祖父母必须出示证件才能接她。",
            keyPhrases: [
              { en: "special pass", zh: "特殊通行证" },
              { en: "takes over", zh: "接手" },
              { en: "show ID", zh: "出示证件" },
            ],
            alternativeExpressions: [
              { textEn: "You'll get a special pass to walk her to the gate. After that, our staff takes over — they sit near her on the plane and walk her out at arrival. Grandparents must show ID.", textZh: "您会拿到特殊通行证送她到登机口。之后我们的工作人员接管——飞机上坐她旁边，到达后带她出来。祖父母必须出示证件。", actionHint: "口语化流程", frequency: "common" },
              { textEn: "We'll issue you a gate pass so you can say goodbye at the gate. From there, our team handles everything. The grandparents will need photo ID to pick her up.", textZh: "我们会给您一张登机口通行证，这样您可以在登机口告别。之后我们的团队全程负责。祖父母接人时需要出示带照片的证件。", actionHint: "强调接人证件", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Can she bring her tablet and headphones? She'll want entertainment on the flight.",
            textZh: "她可以带平板和耳机吗？飞行途中需要娱乐。",
          },
          {
            speaker: "them",
            role: "服务台",
            textEn: "Absolutely! Pack those in her carry-on. I'd also recommend snacks she likes, a book, and your phone number written on a card in her pocket — just in case.",
            textZh: "当然可以！放在她的随身包里。我也建议带上她喜欢的零食、一本书，还有把你的电话号码写在卡片上放在她口袋里——以防万一。",
            alternativeExpressions: [
              { textEn: "Of course! Pack those in her carry-on. I'd also suggest bringing her favorite snacks, a book, and writing your phone number on a card in her pocket.", textZh: "当然！放她的随身包里。也建议带她喜欢的零食、一本书，还有在口袋里放一张写着你电话号码的卡片。", actionHint: "口语化建议", frequency: "common" },
              { textEn: "Definitely — put those in her bag. And a few tips: snacks she likes, something to read, and your phone number written on a card she keeps on her.", textZh: "没问题——放她包里。几个建议：她爱吃的零食、可以看的东西，还有写着你电话号码的卡片放身上。", actionHint: "列出实用建议", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "What's the fee for this service?",
            textZh: "这项服务收费多少？",
          },
          {
            speaker: "them",
            role: "服务台",
            textEn: "It's $150 for domestic flights and $300 for international flights. This covers the entire journey, including any connections. You'll need to fill out a form with pickup person details — name, ID number, and phone.",
            textZh: "国内航班150美元，国际航班300美元。覆盖整个行程，包括任何转机。你需要填表写上接机人的详细信息——姓名、证件号和电话。",
            keyPhrases: [
              { en: "domestic flights", zh: "国内航班" },
              { en: "international flights", zh: "国际航班" },
              { en: "pickup person details", zh: "接机人详细信息" },
            ],
            alternativeExpressions: [
              { textEn: "It's $150 for domestic and $300 for international. That covers the full journey including connections. You'll fill out a form with the pickup person's name, ID, and phone number.", textZh: "国内150美元，国际300美元。覆盖全程包括转机。需要填表写接机人姓名、证件号和电话。", actionHint: "口语化说明", frequency: "common" },
              { textEn: "Domestic flights are $150 and international are $300 — that includes any connections along the way. I'll need you to complete a form with details of who's picking her up.", textZh: "国内航班150美元，国际300美元——包含沿途的转机。需要您填一份表格写明接机人的信息。", actionHint: "正式说明", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Will I get updates during her journey? Can someone call me when she lands?",
            textZh: "旅途中会有动态通知吗？她降落时能有人通知我吗？",
          },
          {
            speaker: "them",
            role: "服务台",
            textEn: "Yes! We'll text you when she boards, when the plane lands, and when she's been picked up by the grandparents. You can also call our service center anytime for updates.",
            textZh: "会的！她登机时、飞机降落时、被祖父母接到时我们都会发短信给你。你也可以随时打我们的服务中心电话查询动态。",
            alternativeExpressions: [
              { textEn: "Yes! We'll text you when she boards, when the plane lands, and when the grandparents pick her up. You can also call our service center anytime.", textZh: "会的！登机时、降落时和祖父母接到时都会发短信。也可以随时打我们服务中心电话。", actionHint: "口语化确认", frequency: "common" },
              { textEn: "Absolutely. You'll get text updates at every stage — boarding, landing, and pickup. And our hotline is available 24/7 if you want to check in.", textZh: "当然。每个环节都会收到短信——登机、降落和接人。我们的热线24小时可以查询。", actionHint: "强调全程通知", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "That's very reassuring. Let's get everything set up.",
            textZh: "非常安心。那我们开始办理吧。",
          },
          {
            speaker: "them",
            role: "服务台",
            textEn: "Great! I'll need both your ID and the grandparents' ID information. Let's start with the paperwork.",
            textZh: "好的！我需要您和祖父母的证件信息。我们开始填表吧。",
            alternativeExpressions: [
              { textEn: "Great! I'll need your ID info and the grandparents' ID details. Let's get the paperwork done.", textZh: "好的！需要您和祖父母的证件信息。我们来填表吧。", actionHint: "口语化开始", frequency: "common" },
              { textEn: "Perfect. I need identification details for both you and the grandparents. Shall we start filling out the forms?", textZh: "好的。需要您和祖父母双方的证件信息。我们开始填表？", actionHint: "正式开始", frequency: "occasional" }
            ],
          },
        ],
      },
    ],
  },

  // ==================== 24. 轮椅服务 ====================
  {
    id: "airport-wheelchair-assistance",
    category: "airport",
    titleZh: "轮椅服务",
    titleEn: "Wheelchair Service",
    description: "在机场申请和使用轮椅服务",
    otherRole: "机场协助人员",
    otherRoleIcon: "🦽",
    flows: [
      {
        id: "requesting-wheelchair",
        titleZh: "申请轮椅",
        titleEn: "Requesting a Wheelchair",
        description: "到达机场后申请轮椅协助",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I hurt my ankle and can't walk very far. Can I get a wheelchair to the gate?",
            textZh: "不好意思，我脚踝受伤了，没法走很远。能安排轮椅到登机口吗？",
          },
          {
            speaker: "them",
            role: "协助人员",
            textEn: "Of course! I'm sorry about your ankle. Let me get a wheelchair for you right away. Which flight are you on?",
            textZh: "当然可以！很抱歉你的脚踝受伤了。我马上给你安排轮椅。你乘坐哪个航班？",
            alternativeExpressions: [
              { textEn: "Of course! Sorry about your ankle. Let me grab a wheelchair right away. What flight are you on?", textZh: "当然！脚踝受伤真不好受。我马上给你拿轮椅。坐哪个航班？", actionHint: "口语化关心", frequency: "common" },
              { textEn: "Absolutely, no worries. I'll get a wheelchair over here immediately. Which flight are you catching?", textZh: "没问题，别担心。我马上叫轮椅过来。你的航班是哪个？", actionHint: "快速响应", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "United 492 to Denver, departing at 4:30. Gate C18.",
            textZh: "美联航492，去丹佛，4:30起飞。C18登机口。",
          },
          {
            speaker: "them",
            role: "协助人员",
            textEn: "Got it. I'll push you there myself. Have you already checked in and gone through security?",
            textZh: "好的。我亲自推你过去。你已经值机和过安检了吗？",
            alternativeExpressions: [
              { textEn: "Okay, I'll take you myself. Have you checked in and cleared security yet?", textZh: "好的，我亲自送你过去。值机和安检过了吗？", actionHint: "简洁确认", frequency: "common" },
              { textEn: "Got it. I'll personally wheel you there. Are you already past check-in and security?", textZh: "收到。我亲自推你去。值机和安检都过了吗？", actionHint: "确认进度", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I checked in online, but I haven't gone through security yet.",
            textZh: "我网上值机了，但还没过安检。",
          },
          {
            speaker: "them",
            role: "协助人员",
            textEn: "No problem. Wheelchair passengers get priority at security — we have a separate lane. I'll take you through. Do you have any bags to check?",
            textZh: "没问题。轮椅乘客在安检有优先通道——我们有专门的通道。我带你过去。有行李要托运吗？",
            keyPhrases: [
              { en: "priority at security", zh: "安检优先" },
              { en: "separate lane", zh: "专门的通道" },
            ],
            alternativeExpressions: [
              { textEn: "No worries. Wheelchair passengers get to skip the regular line — there's a priority lane. I'll take you through. Any bags to check?", textZh: "没关系。轮椅乘客不用排队——有优先通道。我带你过去。有要托运的行李吗？", actionHint: "口语化说明", frequency: "common" },
              { textEn: "That's fine! There's a dedicated security lane for wheelchair users — much faster. Let me take you through. Do you have any checked luggage?", textZh: "没问题！轮椅用户有专用安检通道——快得多。我带你走。有托运行李吗？", actionHint: "强调快速", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "No, just my carry-on backpack. Will I need to get out of the wheelchair for security?",
            textZh: "没有，就一个随身背包。安检时需要从轮椅上下来吗？",
          },
          {
            speaker: "them",
            role: "协助人员",
            textEn: "You'll stay in the wheelchair. They'll do a pat-down and use a hand-held scanner instead of making you walk through the metal detector. It's quick and easy.",
            textZh: "你坐轮椅上就行。他们会做手动搜身和用手持扫描仪，不用你走过金属探测器。很快很简单。",
            keyPhrases: [
              { en: "pat-down", zh: "手动搜身" },
              { en: "hand-held scanner", zh: "手持扫描仪" },
              { en: "metal detector", zh: "金属探测器" },
            ],
            alternativeExpressions: [
              { textEn: "You stay seated. They'll do a hand pat-down and use a hand scanner instead of making you walk through. Quick and easy.", textZh: "你坐着就行。他们会手动搜身和用手持扫描仪，不用你走过去。很快很简单。", actionHint: "口语化说明", frequency: "common" },
              { textEn: "No need to get up. Security will do a quick pat-down and scan you with a hand-held wand. The whole thing takes a couple of minutes.", textZh: "不用起来。安检会做个快速手动检查和手持探测器扫描。整个过程就几分钟。", actionHint: "说明具体流程", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "That's a relief. And what about boarding? Do I board first?",
            textZh: "那就好。登机呢？我先登机吗？",
          },
          {
            speaker: "them",
            role: "协助人员",
            textEn: "Yes, wheelchair passengers board first during pre-boarding. I'll take you right to the jet bridge and help you to your seat. An aisle chair will be used if needed.",
            textZh: "是的，轮椅乘客在预登机时先上。我会直接推你到廊桥，帮你到座位上。如果需要会用过道椅。",
            keyPhrases: [
              { en: "pre-boarding", zh: "预登机" },
              { en: "jet bridge", zh: "廊桥" },
              { en: "aisle chair", zh: "过道椅" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely — you'll board first during pre-boarding. I'll take you right up to the jet bridge and help you to your seat.", textZh: "当然——预登机时你先上。我把你直接推到廊桥，帮你到座位上。", actionHint: "简洁确认", frequency: "common" },
              { textEn: "Wheelchair passengers always board before everyone else. I'll wheel you to the gate and help you get settled in your seat.", textZh: "轮椅乘客总是最先登机。我推你到登机口，帮你在座位上安顿好。", actionHint: "说明优先权", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much. I really appreciate the help.",
            textZh: "太感谢了。真的很感激你的帮助。",
          },
          {
            speaker: "them",
            role: "协助人员",
            textEn: "Happy to help! I've also requested wheelchair assistance at Denver airport for when you land. Someone will be waiting for you at the gate. Let's head to security now.",
            textZh: "很高兴帮到你！我也在丹佛机场申请了轮椅协助。你降落后会有人在登机口等你。我们现在去安检吧。",
            keyPhrases: [
              { en: "requested assistance", zh: "申请了协助" },
              { en: "someone will be waiting", zh: "会有人等你" },
            ],
            alternativeExpressions: [
              { textEn: "Glad I can help! I've also arranged wheelchair service for you at Denver, so someone will meet you at the gate. Let's head to security.", textZh: "很高兴能帮到你！我也在丹佛机场安排了轮椅服务，会有人在登机口等你。我们去安检吧。", actionHint: "口语化安排", frequency: "common" },
              { textEn: "My pleasure! And don't worry about Denver — I've requested wheelchair assistance there too. Someone will be waiting when you land. Ready to go through security?", textZh: "不客气！丹佛那边也不用担心——我已经申请了轮椅协助。降落时会有人等你。准备好过安检了吗？", actionHint: "主动安排后续", frequency: "occasional" }
            ],
          },
        ],
      },
      {
        id: "wheelchair-transfer",
        titleZh: "转机轮椅协助",
        titleEn: "Wheelchair Transfer Assistance",
        description: "转机时需要轮椅协助从一个航站楼到另一个",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I just landed and I need wheelchair assistance to my connecting flight. My next gate is in a different terminal.",
            textZh: "我刚降落，需要轮椅协助去转机航班。下一个登机口在另一个航站楼。",
          },
          {
            speaker: "them",
            role: "协助人员",
            textEn: "Welcome! I see the wheelchair request on your booking. What's your connecting flight and how much time do you have?",
            textZh: "欢迎！我看到您订票时的轮椅请求了。您的转机航班是哪个？还有多少时间？",
            alternativeExpressions: [
              { textEn: "Hello! I see the wheelchair request in your booking. What's your connecting flight and how much time do you have?", textZh: "您好！看到订票里的轮椅请求了。转机航班是哪个？还有多少时间？", actionHint: "口语化接待", frequency: "common" },
              { textEn: "Welcome! Your wheelchair assistance is noted. Which flight are you connecting to, and when does it depart?", textZh: "欢迎！您的轮椅协助已记录。要转哪个航班？几点起飞？", actionHint: "直接了解情况", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "It's Delta 738 to Atlanta, departing from Terminal 4. I have about 90 minutes.",
            textZh: "达美738去亚特兰大，从4号航站楼出发。大约还有90分钟。",
          },
          {
            speaker: "them",
            role: "协助人员",
            textEn: "Ninety minutes is good — the transfer takes about 20 minutes by wheelchair including the shuttle between terminals. We'll get you there with plenty of time. Would you like to stop at a restroom on the way?",
            textZh: "90分钟够的——坐轮椅加上航站楼之间的接驳车大约20分钟。会有充足的时间。路上需要停一下洗手间吗？",
            keyPhrases: [
              { en: "shuttle between terminals", zh: "航站楼之间的接驳车" },
              { en: "plenty of time", zh: "充足的时间" },
            ],
            alternativeExpressions: [
              { textEn: "Ninety minutes is plenty. The wheelchair transfer takes about 20 minutes including the terminal shuttle. Want to stop at a restroom on the way?", textZh: "90分钟够了。轮椅转机加航站楼接驳大约20分钟。路上要停洗手间吗？", actionHint: "口语化评估", frequency: "common" },
              { textEn: "You've got plenty of time — the transfer is about 20 minutes by wheelchair. Shall we make a restroom stop along the way?", textZh: "时间很充裕——轮椅转机大约20分钟。路上要去一下洗手间吗？", actionHint: "简洁评估", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. And is there somewhere to grab a quick bite? I'm starving.",
            textZh: "好的。有什么地方可以快速吃点东西吗？我快饿死了。",
          },
          {
            speaker: "them",
            role: "协助人员",
            textEn: "There's a food court right near Gate 4B in Terminal 4. We can stop there after the restroom. I'll make sure we have at least 30 minutes before boarding starts.",
            textZh: "4号航站楼4B登机口附近有美食广场。去完洗手间后可以在那里停一下。我会确保在登机前至少有30分钟。",
            keyPhrases: [
              { en: "food court", zh: "美食广场" },
              { en: "grab a quick bite", zh: "快速吃点东西" },
            ],
            alternativeExpressions: [
              { textEn: "There's a food court near your gate in Terminal 4. We'll stop there after the restroom. I'll make sure you have at least 30 minutes before boarding.", textZh: "4号航站楼你登机口附近有美食广场。洗手间之后在那停一下。我确保登机前至少留30分钟。", actionHint: "口语化安排", frequency: "common" },
              { textEn: "Terminal 4 has a food court right by Gate 4B. We can grab a bite there after the restroom break — I'll make sure we're at the gate with 30 minutes to spare.", textZh: "4号航站楼4B登机口旁边有美食广场。洗手间之后可以去吃点东西——我保证登机前至少还有30分钟。", actionHint: "详细规划", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Do I need to go through security again for the transfer?",
            textZh: "太好了。转机需要重新过安检吗？",
          },
          {
            speaker: "them",
            role: "协助人员",
            textEn: "Since Terminal 4 is in a different building, yes — there's a security checkpoint between the shuttle and the gates. But as a wheelchair passenger, you'll go through the priority lane, so it's very quick.",
            textZh: "因为4号航站楼在另一栋楼，是的——接驳车和登机口之间有安检站。但作为轮椅乘客，您走优先通道，非常快。",
            keyPhrases: [
              { en: "security checkpoint", zh: "安检站" },
              { en: "priority lane", zh: "优先通道" },
            ],
            alternativeExpressions: [
              { textEn: "Yes, Terminal 4 is in a separate building, so there's another security check. But wheelchair passengers use the priority lane — it's super quick.", textZh: "是的，4号航站楼在另一栋楼，所以还有一道安检。但轮椅乘客走优先通道——非常快。", actionHint: "口语化说明", frequency: "common" },
              { textEn: "There is a security checkpoint between the terminals, yes. But as a wheelchair user, you'll go through the express lane, so it won't take long at all.", textZh: "航站楼之间确实有安检站。但作为轮椅用户，您走快速通道，不会花太长时间。", actionHint: "安抚顾虑", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Good. I was worried about the walking distance. This airport is huge.",
            textZh: "好的。我正担心走不动。这个机场太大了。",
          },
          {
            speaker: "them",
            role: "协助人员",
            textEn: "Don't worry about a thing — that's what we're here for. Let me grab the wheelchair, and we'll get moving. The restroom is right around this corner.",
            textZh: "什么都不用担心——这就是我们的工作。我去拿轮椅，马上出发。洗手间就在转角。",
            alternativeExpressions: [
              { textEn: "Don't worry about a thing — I've got you covered. Let me get the wheelchair and we'll head out. Restroom's just around the corner.", textZh: "什么都别担心——交给我。我去拿轮椅我们就走。洗手间就在转角。", actionHint: "口语化安抚", frequency: "common" },
              { textEn: "That's exactly what I'm here for! Grab the wheelchair and let's go — the restroom is right over there.", textZh: "这正是我的工作！拿上轮椅出发——洗手间就在那边。", actionHint: "积极行动", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "You're a lifesaver. By the way, should I tip you?",
            textZh: "你真是救星。对了，需要给你小费吗？",
            culturalNote: "在美国机场，轮椅协助人员通常期望收到小费，一般5-10美元。这不是强制的，但是一种常见的礼节。",
          },
          {
            speaker: "them",
            role: "协助人员",
            textEn: "Tips are always appreciated but never required. Let's get you to your gate first! Ready to roll?",
            textZh: "小费总是受欢迎的但从来不是必须的。先送你到登机口吧！准备好出发了吗？",
            keyPhrases: [
              { en: "always appreciated but never required", zh: "受欢迎但不是必须" },
              { en: "ready to roll", zh: "准备出发" },
            ],
            alternativeExpressions: [
              { textEn: "Tips are appreciated but never expected. Let's focus on getting you to the gate first! All set?", textZh: "小费随意但从不强求。先把你送到登机口！准备好了吗？", actionHint: "口语化回应", frequency: "common" },
              { textEn: "That's kind of you to ask, but don't worry about it — totally optional. Shall we get going? Your gate awaits!", textZh: "你这么问很贴心，但别担心——完全自愿的。出发吧？登机口等着呢！", actionHint: "轻松回应", frequency: "occasional" }
            ],
          },
        ],
      },
    ],
  },

  // ==================== 25. 宠物旅行 ====================
  {
    id: "airport-pet-travel",
    category: "airport",
    titleZh: "带宠物坐飞机",
    titleEn: "Traveling with a Pet",
    description: "带宠物乘飞机，了解手续和要求",
    otherRole: "航空公司柜台",
    otherRoleIcon: "🐕",
    flows: [
      {
        id: "cabin-pet",
        titleZh: "宠物进客舱",
        titleEn: "Pet in Cabin",
        description: "带小型宠物进客舱的办理流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm flying with my small dog. I booked the in-cabin pet option. What do I need to do?",
            textZh: "你好，我带着小狗坐飞机。我订了宠物进客舱的选项。需要做什么？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Welcome! I'll need to see your pet's health certificate and vaccination records. They must be issued within 10 days of travel. Do you have those?",
            textZh: "欢迎！我需要看看您宠物的健康证明和疫苗记录。必须是旅行前10天内开的。有吗？",
            keyPhrases: [
              { en: "health certificate", zh: "健康证明" },
              { en: "vaccination records", zh: "疫苗记录" },
              { en: "within 10 days of travel", zh: "旅行前10天内" },
            ],
            alternativeExpressions: [
              { textEn: "Hi! I'll need your pet's health certificate and vaccination records — they must be from within 10 days of travel. Got those?", textZh: "你好！需要看看宠物的健康证明和疫苗记录——必须是旅行前10天内的。有吗？", actionHint: "口语化要求", frequency: "common" },
              { textEn: "Welcome! Before we proceed, may I see your pet's health certificate and vaccinations? They need to be dated within the last 10 days.", textZh: "欢迎！在开始之前，能看看宠物的健康证明和疫苗接种记录吗？需要是最近10天内的。", actionHint: "正式要求", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, here they are. I got them from the vet last week.",
            textZh: "有的，在这里。上周从兽医那里开的。",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "These look good. Is your dog in an airline-approved carrier? It needs to fit under the seat in front of you.",
            textZh: "没问题。您的狗在符合航空公司要求的宠物箱里吗？需要能放在前排座位下面。",
            keyPhrases: [
              { en: "airline-approved carrier", zh: "符合航空公司要求的宠物箱" },
              { en: "fit under the seat", zh: "放在座位下面" },
            ],
            alternativeExpressions: [
              { textEn: "Looks good. Is your dog in an airline-approved carrier? It has to fit under the seat in front of you.", textZh: "没问题。狗在符合航空要求的宠物箱里吗？要能放在前排座位下面。", actionHint: "口语化确认", frequency: "common" },
              { textEn: "These are all in order. Now, is the carrier airline-approved? It needs to slide under the seat ahead of you.", textZh: "文件都齐了。宠物箱符合航空公司要求吗？需要能放到前排座位底下。", actionHint: "确认下一步", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I measured it before buying. It's within the size limit. Can he come out during the flight?",
            textZh: "买之前量过了。符合尺寸限制。飞行途中可以让他出来吗？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Unfortunately, your pet must stay in the carrier during the entire flight with the door closed. You can reach in to comfort him, but he can't be out in the cabin.",
            textZh: "很遗憾，整个飞行过程中宠物必须待在宠物箱里，门关着。您可以伸手进去安抚他，但不能放出来到客舱里。",
            keyPhrases: [
              { en: "entire flight", zh: "整个飞行过程" },
              { en: "comfort him", zh: "安抚他" },
            ],
            alternativeExpressions: [
              { textEn: "Sorry, but your pet has to stay in the carrier the whole flight with the door shut. You can reach in to comfort him, but he can't come out.", textZh: "抱歉，整个飞行期间宠物必须待在箱子里，门关着。可以伸手进去安抚，但不能放出来。", actionHint: "口语化说明规则", frequency: "common" },
              { textEn: "The rule is that pets must remain in the closed carrier throughout the flight. You're welcome to reach inside to pet him, though.", textZh: "规定是整个飞行过程宠物必须待在关着的宠物箱里。不过可以伸手进去摸摸他。", actionHint: "先说规则再说允许的", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Understood. How much is the pet fee?",
            textZh: "明白了。宠物费是多少？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "The in-cabin pet fee is $125 each way. That's on top of your ticket price. I'll add it to your booking now.",
            textZh: "客舱宠物费每程125美元。在您的票价之外。我现在加到您的订单里。",
            keyPhrases: [
              { en: "each way", zh: "每程/单程" },
              { en: "on top of", zh: "在…之外/额外" },
            ],
            alternativeExpressions: [
              { textEn: "The cabin pet fee is $125 each way, on top of your ticket. I'll add it to your booking now.", textZh: "客舱宠物费每程125美元，票价之外另付。我现在加到您的订单里。", actionHint: "简洁报价", frequency: "common" },
              { textEn: "It's an extra $125 per leg to bring a pet in the cabin. Let me add that to your reservation.", textZh: "客舱带宠物每段额外125美元。我帮您加到预订里。", actionHint: "口语化报价", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Fine. Are there any pet relief areas in the airport? He might need to go before the flight.",
            textZh: "好的。机场有宠物方便的地方吗？飞行前他可能需要上厕所。",
            culturalNote: "很多美国机场设有专门的Pet Relief Area（宠物方便区），通常在安检前和安检后都有，有人工草坪和垃圾袋。",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Yes! There's a pet relief area after security near Gate B5 — it has artificial grass and waste bags. I'd recommend going there before boarding. Your gate is B9, so it's right nearby.",
            textZh: "有的！安检后B5登机口附近有宠物方便区——有人工草坪和垃圾袋。建议登机前去一下。您的登机口是B9，就在旁边。",
            keyPhrases: [
              { en: "pet relief area", zh: "宠物方便区" },
              { en: "artificial grass", zh: "人工草坪" },
              { en: "waste bags", zh: "垃圾袋" },
            ],
            alternativeExpressions: [
              { textEn: "Yes! There's a pet relief area past security near Gate B5 — artificial grass and waste bags. Your gate is B9, so it's close. I'd suggest going before boarding.", textZh: "有的！安检后B5登机口附近有宠物方便区——有人工草坪和垃圾袋。您的登机口B9就在旁边。建议登机前去一下。", actionHint: "口语化指引", frequency: "common" },
              { textEn: "Absolutely. After security, look for the pet relief station near Gate B5 — right near your B9 gate. I'd recommend stopping there before you board.", textZh: "当然。过安检后在B5登机口附近找宠物方便站——离你的B9登机口很近。建议登机前去一趟。", actionHint: "强调位置近", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Great, I'll definitely stop there. Thanks for all the info!",
            textZh: "好的，我肯定会去的。谢谢所有的信息！",
          },
        ],
      },
      {
        id: "cargo-pet",
        titleZh: "宠物货舱托运",
        titleEn: "Pet in Cargo",
        description: "大型犬需要走货舱，了解流程和注意事项",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "My dog is a golden retriever — too big for the cabin. How do I ship him in cargo?",
            textZh: "我的狗是金毛寻回犬——太大了进不了客舱。怎么走货舱？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Large dogs travel in the pressurized, climate-controlled cargo hold. You'll need an IATA-approved hard-sided crate. Does your dog already have one?",
            textZh: "大型犬在加压恒温的货舱旅行。你需要一个符合IATA标准的硬壳航空箱。你的狗有吗？",
            keyPhrases: [
              { en: "pressurized, climate-controlled", zh: "加压恒温的" },
              { en: "cargo hold", zh: "货舱" },
              { en: "IATA-approved", zh: "符合IATA标准的" },
              { en: "hard-sided crate", zh: "硬壳航空箱" },
            ],
            alternativeExpressions: [
              { textEn: "Big dogs go in the cargo hold — it's pressurized and climate-controlled. You'll need an IATA-approved hard-sided crate. Does your dog have one?", textZh: "大型犬走货舱——是加压恒温的。需要符合IATA标准的硬壳航空箱。你的狗有吗？", actionHint: "口语化说明", frequency: "common" },
              { textEn: "For large dogs, they travel in the pressurized cargo area. You'll need a hard-shell crate that meets IATA standards. Do you already have one?", textZh: "大型犬在加压货舱区旅行。需要一个符合IATA标准的硬壳箱。已经有了吗？", actionHint: "确认准备情况", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I bought one that fits him. He can stand up and turn around in it.",
            textZh: "有，我买了一个合适的。他可以在里面站起来和转身。",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Perfect — that's exactly the requirement. The crate must have absorbent material on the bottom, a water dish attached to the door, and 'Live Animal' stickers on at least two sides. I have stickers here if you need them.",
            textZh: "完美——这正是要求。航空箱底部必须有吸水材料，门上要固定一个水碟，至少两面要贴'Live Animal'贴纸。如果需要贴纸我这里有。",
            keyPhrases: [
              { en: "absorbent material", zh: "吸水材料" },
              { en: "water dish", zh: "水碟" },
              { en: "Live Animal stickers", zh: "'活体动物'贴纸" },
            ],
            alternativeExpressions: [
              { textEn: "That's exactly what you need. Just make sure there's absorbent material at the bottom, a water dish on the door, and 'Live Animal' stickers on two sides. I've got stickers if you need them.", textZh: "正好满足要求。确保底部有吸水材料、门上固定水碟、两面贴'Live Animal'贴纸。需要贴纸我这里有。", actionHint: "口语化确认要求", frequency: "common" },
              { textEn: "Perfect — that meets the specs. Don't forget: absorbent bedding inside, a water container attached to the door, and 'Live Animal' labels on at least two sides.", textZh: "很好——符合规格。别忘了：里面铺吸水垫，门上固定水容器，至少两面贴'Live Animal'标签。", actionHint: "列出清单", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I could use the stickers. How much does cargo transport cost?",
            textZh: "我需要贴纸。货舱运输多少钱？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "For a large dog like a golden retriever, it's around $300 to $500 depending on the route. For your domestic flight today, it'll be $350. You also need to drop him off at the airline cargo facility at least 3 hours before departure.",
            textZh: "像金毛这样的大型犬，根据航线大约300到500美元。今天国内航班是350美元。你还需要至少在起飞前3小时把他送到航空公司货运站。",
            keyPhrases: [
              { en: "cargo facility", zh: "货运站" },
              { en: "at least 3 hours before", zh: "至少提前3小时" },
            ],
            alternativeExpressions: [
              { textEn: "For a big dog like a golden retriever, it runs $300 to $500 depending on the route. Your domestic flight today is $350. Drop-off at the cargo facility is at least 3 hours before departure.", textZh: "金毛这样的大型犬根据航线300到500美元。今天国内航班350美元。至少起飞前3小时送到货运站。", actionHint: "口语化报价", frequency: "common" },
              { textEn: "Cargo fees for large dogs range from $300 to $500. For today's domestic flight, it's $350. You'll need to bring him to the cargo area at least 3 hours early.", textZh: "大型犬货舱运费300到500美元不等。今天国内航班350美元。需要至少提前3小时送到货运区。", actionHint: "明确费用和时间", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Is the cargo hold safe for dogs? I'm worried about the temperature.",
            textZh: "货舱对狗安全吗？我担心温度。",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "The cargo hold is pressurized and temperature-controlled, just like the cabin. However, we don't accept pets in cargo when temperatures on the ground exceed 85°F or drop below 45°F. Today's conditions are fine for your dog.",
            textZh: "货舱是加压恒温的，跟客舱一样。不过，当地面温度超过85华氏度或低于45华氏度时，我们不接受货舱宠物。今天的条件对你的狗没问题。",
            keyPhrases: [
              { en: "temperature-controlled", zh: "恒温的" },
              { en: "exceed", zh: "超过" },
              { en: "ground temperature", zh: "地面温度" },
            ],
            alternativeExpressions: [
              { textEn: "The cargo hold is pressurized and temperature-controlled, same as the cabin. We only restrict cargo pets when ground temps go above 85°F or below 45°F. Today's fine.", textZh: "货舱加压恒温，跟客舱一样。只有地面温度超过85华氏度或低于45华氏度时才限制。今天没问题。", actionHint: "口语化解释", frequency: "common" },
              { textEn: "It's the same environment as the passenger cabin — pressurized and climate-controlled. Temperature restrictions apply above 85°F or below 45°F, but today's weather is well within range.", textZh: "跟客舱环境一样——加压恒温。气温超过85华氏度或低于45华氏度时有限制，但今天天气完全在范围内。", actionHint: "详细解释环境", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "That's reassuring. Will I be able to see him as soon as I land?",
            textZh: "那我放心了。降落后能马上见到他吗？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Pets in cargo are usually available at the oversized baggage area within 30 minutes of landing. A handler will bring the crate to you. Just show your claim tag.",
            textZh: "货舱宠物通常在降落后30分钟内在超大行李区可以取到。搬运员会把航空箱送到你面前。出示提取标签就行。",
            keyPhrases: [
              { en: "oversized baggage area", zh: "超大行李区" },
              { en: "handler", zh: "搬运员" },
              { en: "claim tag", zh: "提取标签" },
            ],
            alternativeExpressions: [
              { textEn: "You can pick him up at the oversized baggage area, usually within 30 minutes of landing. A handler brings the crate to you — just show your claim tag.", textZh: "在超大行李区取，通常降落后30分钟内。搬运员会把箱子送到你面前——出示提取标签就行。", actionHint: "口语化说明", frequency: "common" },
              { textEn: "Head to the oversized baggage area after landing. Your dog will be brought out within about 30 minutes. Have your claim tag ready.", textZh: "降落后去超大行李区。大约30分钟内会把狗送出来。准备好提取标签。", actionHint: "简洁指引", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, I feel better about it now. Let's get everything processed.",
            textZh: "好的，现在放心多了。我们开始办理吧。",
          },
        ],
      },
    ],
  },

  // ==================== 26. 宠物检疫 ====================
  {
    id: "airport-pet-quarantine",
    category: "airport",
    titleZh: "宠物入境检疫",
    titleEn: "Pet Quarantine",
    description: "带宠物入境时的检疫流程",
    otherRole: "检疫官员",
    otherRoleIcon: "🏥",
    flows: [
      {
        id: "standard-quarantine",
        titleZh: "标准检疫流程",
        titleEn: "Standard Quarantine Process",
        description: "带宠物入境时的正常检疫检查",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "检疫官",
            textEn: "I see you're traveling with a pet. Please bring the animal and all documentation to the quarantine inspection counter.",
            textZh: "我看到您带了宠物。请把动物和所有文件带到检疫检查柜台。",
            keyPhrases: [
              { en: "quarantine inspection counter", zh: "检疫检查柜台" },
              { en: "documentation", zh: "文件" },
            ],
            alternativeExpressions: [
              { textEn: "I see you've got a pet. Please take the animal and all your paperwork to the quarantine inspection counter.", textZh: "看到您带了宠物。请把动物和所有文件带到检疫检查柜台。", actionHint: "简洁指引", frequency: "common" },
              { textEn: "You're traveling with a pet, correct? I'll need you to go to the quarantine desk with the animal and all documentation.", textZh: "您带了宠物对吧？请带着动物和全部文件去检疫柜台。", actionHint: "确认后指引", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Sure. Here's my cat and all his documents — health certificate, vaccination records, and the import permit.",
            textZh: "好的。这是我的猫和他所有的文件——健康证明、疫苗记录和进口许可证。",
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn: "Thank you. Let me check... The rabies vaccination is current — that's the most important one. When was the last booster?",
            textZh: "谢谢。我查一下……狂犬疫苗在有效期内——这是最重要的。上次加强针是什么时候打的？",
            keyPhrases: [
              { en: "rabies vaccination", zh: "狂犬疫苗" },
              { en: "current", zh: "在有效期内" },
              { en: "booster", zh: "加强针" },
            ],
            alternativeExpressions: [
              { textEn: "Thanks. Let me check these... Rabies vaccination is current — good, that's the main one. When was the last booster shot?", textZh: "谢谢。我看看……狂犬疫苗在有效期内——好的，这是最关键的。上次加强针什么时候打的？", actionHint: "口语化查验", frequency: "common" },
              { textEn: "Let me review... The rabies vaccine looks good — that's the critical one. Can you tell me when the last booster was given?", textZh: "我查一下……狂犬疫苗没问题——这是最重要的。能告诉我上次加强针是什么时候吗？", actionHint: "确认关键疫苗", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "He got his rabies booster three months ago. It's noted on the certificate.",
            textZh: "三个月前打的加强针。证明上有写。",
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn: "I see it. Everything is in order. I just need to do a visual inspection of the animal — check for any signs of illness. Can you open the carrier, please?",
            textZh: "看到了。一切正常。我只需要对动物做个目视检查——看看有没有生病的迹象。请打开宠物箱。",
            keyPhrases: [
              { en: "in order", zh: "符合要求" },
              { en: "visual inspection", zh: "目视检查" },
              { en: "signs of illness", zh: "生病的迹象" },
            ],
            alternativeExpressions: [
              { textEn: "Got it. All the paperwork checks out. I just need to do a quick visual check of the animal — looking for any signs of illness. Can you open the carrier?", textZh: "看到了。文件都没问题。我只需要快速目检一下动物——看有没有生病迹象。请打开宠物箱。", actionHint: "口语化检查", frequency: "common" },
              { textEn: "Everything's in order. Last step — I need to visually inspect the animal for any health concerns. Would you mind opening the carrier for me?", textZh: "一切正常。最后一步——我需要目视检查动物有没有健康问题。能帮我打开宠物箱吗？", actionHint: "正式检查", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Here he is. He's been a bit stressed from the flight, but he's healthy.",
            textZh: "在这里。他因为飞行有点紧张，但身体是健康的。",
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn: "He looks fine — eyes are clear, coat is healthy, no signs of parasites. Your cat is cleared for entry. No quarantine period is required since all documents are valid.",
            textZh: "看起来没问题——眼睛清亮，毛色健康，没有寄生虫迹象。你的猫通过入境检查了。所有文件有效，不需要隔离期。",
            keyPhrases: [
              { en: "cleared for entry", zh: "通过入境检查" },
              { en: "quarantine period", zh: "隔离期" },
              { en: "parasites", zh: "寄生虫" },
            ],
            alternativeExpressions: [
              { textEn: "Looks great — clear eyes, healthy coat, no parasites. Your cat is cleared. No quarantine needed since everything's in order.", textZh: "看起来很好——眼睛清亮，毛色健康，没有寄生虫。您的猫通过了。文件齐全不需要隔离。", actionHint: "口语化通过", frequency: "common" },
              { textEn: "All good — eyes clear, coat healthy, no signs of disease. Your cat passes inspection. With valid documents, there's no quarantine required.", textZh: "没问题——眼睛清亮，毛色健康，没有疾病迹象。您的猫检查合格。文件有效不需要隔离。", actionHint: "逐项确认", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "That's such a relief! I was worried there might be a mandatory quarantine.",
            textZh: "太好了！我担心会有强制隔离。",
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn: "As long as the rabies vaccine is current and you have the proper certificates, most pets from low-risk countries can enter without quarantine. Here's your entry stamp on the import permit. Welcome, and welcome to your cat!",
            textZh: "只要狂犬疫苗在有效期内并且有正规证书，大多数来自低风险国家的宠物可以免隔离入境。这是您进口许可证上的入境章。欢迎您和您的猫！",
            keyPhrases: [
              { en: "low-risk countries", zh: "低风险国家" },
              { en: "entry stamp", zh: "入境章" },
              { en: "import permit", zh: "进口许可证" },
            ],
            alternativeExpressions: [
              { textEn: "With a current rabies vaccine and proper certificates, most pets from low-risk countries skip quarantine. Here's the entry stamp on your import permit. Welcome — you and your cat!", textZh: "只要狂犬疫苗有效且证书齐全，大多数来自低风险国家的宠物免隔离。进口许可证上的入境章在这。欢迎您和您的猫！", actionHint: "口语化放行", frequency: "common" },
              { textEn: "Since all vaccines and paperwork are valid, no quarantine is needed for pets from low-risk countries. I've stamped your import permit. Enjoy your stay — both of you!", textZh: "疫苗和文件都有效，低风险国家来的宠物不需要隔离。进口许可证已盖章。祝您和猫咪玩得开心！", actionHint: "友好放行", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you! He'll be happy to finally get out of that carrier.",
            textZh: "谢谢！他终于可以从宠物箱里出来了，肯定很开心。",
          },
        ],
      },
      {
        id: "quarantine-required",
        titleZh: "需要隔离",
        titleEn: "Quarantine Required",
        description: "因文件问题或来自高风险地区需要隔离",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "检疫官",
            textEn: "I've reviewed your documents. Unfortunately, the rabies titer test result is missing. This is required for animals entering from your country of origin.",
            textZh: "我查看了您的文件。很遗憾，缺少狂犬病抗体滴度检测结果。从您的出发国入境的动物需要这项检测。",
            keyPhrases: [
              { en: "rabies titer test", zh: "狂犬病抗体滴度检测" },
              { en: "country of origin", zh: "出发国" },
              { en: "missing", zh: "缺少" },
            ],
            alternativeExpressions: [
              { textEn: "I've gone through your documents, and the rabies titer test result is missing. That's required for animals coming from your country.", textZh: "我查了您的文件，缺少狂犬病抗体滴度检测结果。从您的国家入境的动物需要这项检测。", actionHint: "口语化告知", frequency: "common" },
              { textEn: "After reviewing everything, I notice the rabies titer test isn't included. This is mandatory for pets entering from your country of departure.", textZh: "审查完所有文件后，我发现没有包含狂犬病滴度检测。这是从您出发国入境的宠物必须提供的。", actionHint: "正式告知", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "What does that mean? My vet didn't mention I needed that test.",
            textZh: "这意味着什么？我的兽医没说需要这个检测。",
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn: "Without the titer test, your dog will need to be quarantined at an approved facility for up to 30 days while we verify his rabies immunity. The test can also be done during quarantine to potentially shorten the stay.",
            textZh: "没有滴度检测，您的狗需要在指定设施隔离最多30天，等待我们确认他的狂犬病免疫力。隔离期间也可以做检测，可能可以缩短隔离时间。",
            keyPhrases: [
              { en: "quarantined", zh: "隔离" },
              { en: "approved facility", zh: "指定设施" },
              { en: "rabies immunity", zh: "狂犬病免疫力" },
              { en: "shorten the stay", zh: "缩短隔离时间" },
            ],
            alternativeExpressions: [
              { textEn: "Without the test, your dog needs to be quarantined — up to 30 days at an approved facility. The test can be done during quarantine, which might shorten the stay.", textZh: "没有检测的话，您的狗需要隔离——最多30天，在指定设施。隔离期间也可以做检测，可能缩短时间。", actionHint: "口语化说明", frequency: "common" },
              { textEn: "I'm afraid your dog will need to go into quarantine at an approved facility for up to 30 days. If you get the titer test done there, it could reduce the quarantine period.", textZh: "恐怕您的狗需要在指定设施隔离最多30天。如果在那里做滴度检测，可能可以缩短隔离期。", actionHint: "解释缩短可能", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Thirty days? That's terrible. How much does the quarantine cost?",
            textZh: "30天？太糟了。隔离费用是多少？",
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn: "The quarantine facility charges approximately $25 per day, so up to $750 for the full period. If the titer test comes back positive quickly, your dog could be released in 10 to 14 days instead.",
            textZh: "隔离设施每天收费约25美元，全程最多750美元。如果滴度检测结果很快出来且合格，你的狗可能10到14天就能放出来。",
            keyPhrases: [
              { en: "per day", zh: "每天" },
              { en: "comes back positive", zh: "结果合格" },
              { en: "released", zh: "放出来" },
            ],
            alternativeExpressions: [
              { textEn: "The facility charges about $25 a day — up to $750 for the full 30 days. If the titer test comes back quickly and positive, your dog could be out in 10 to 14 days.", textZh: "设施每天约25美元——30天最多750美元。如果滴度检测很快出结果且合格，10到14天就能出来。", actionHint: "口语化说明费用", frequency: "common" },
              { textEn: "It's approximately $25 per day, so potentially $750 for the maximum period. An early positive titer result could get your dog released in as few as 10 days.", textZh: "大约每天25美元，最长可能750美元。如果滴度结果很快合格，最快10天就能释放。", actionHint: "说明最好情况", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Can I visit my dog during quarantine?",
            textZh: "隔离期间我可以去看他吗？",
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn: "Yes, visiting hours are from 10 AM to 4 PM daily. The facility provides food and basic medical care, but you can bring his own food and toys if you prefer.",
            textZh: "可以，每天上午10点到下午4点是探视时间。设施提供食物和基本医疗护理，但如果你愿意可以带他自己的食物和玩具。",
            keyPhrases: [
              { en: "visiting hours", zh: "探视时间" },
              { en: "basic medical care", zh: "基本医疗护理" },
            ],
            alternativeExpressions: [
              { textEn: "Yes, you can visit from 10 AM to 4 PM every day. They provide food and basic vet care, but you're welcome to bring his own food and toys.", textZh: "可以的，每天10点到下午4点可以探视。设施提供食物和基本兽医护理，也可以带他自己的食物和玩具。", actionHint: "口语化说明", frequency: "common" },
              { textEn: "Visiting hours are daily from 10 to 4. The facility feeds and cares for the animals, but feel free to bring your dog's preferred food and some familiar toys.", textZh: "每天10点到4点可以探视。设施会喂养和照顾动物，但可以带你狗喜欢的食物和熟悉的玩具。", actionHint: "说明可带私人物品", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "This is very stressful. Is there anything I can do to speed up the process?",
            textZh: "压力太大了。有什么办法可以加快流程吗？",
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn: "The fastest option is to get the titer test done at the quarantine facility's lab. Results usually take 7 to 10 days. If the results show adequate antibodies, I can authorize early release.",
            textZh: "最快的办法是在隔离设施的实验室做滴度检测。结果通常7到10天出来。如果结果显示抗体充足，我可以授权提前释放。",
            keyPhrases: [
              { en: "adequate antibodies", zh: "抗体充足" },
              { en: "authorize early release", zh: "授权提前释放" },
            ],
            alternativeExpressions: [
              { textEn: "The quickest way is to do the test at the quarantine facility's lab. Results take 7 to 10 days. If the antibodies are sufficient, I can approve early release.", textZh: "最快是在隔离设施的实验室做检测。结果7到10天出来。如果抗体充足，我可以批准提前释放。", actionHint: "口语化建议", frequency: "common" },
              { textEn: "I'd recommend having the test done right at the quarantine lab — it's the fastest option. With positive results in 7 to 10 days, early release is possible.", textZh: "建议直接在隔离实验室做检测——是最快的途径。7到10天出结果，如果阳性可以提前释放。", actionHint: "推荐最快途径", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Let's do that. I'll sign whatever forms are needed.",
            textZh: "那就这么做。需要签什么表格我都签。",
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn: "Here's the quarantine admission form and the titer test request. A transport vehicle will take your dog to the facility. You can follow in a taxi — here's the address. I'm sorry about the inconvenience.",
            textZh: "这是隔离入住表格和滴度检测申请。运输车会送你的狗去设施。你可以打车跟着去——这是地址。对给您带来的不便表示歉意。",
            keyPhrases: [
              { en: "quarantine admission form", zh: "隔离入住表格" },
              { en: "transport vehicle", zh: "运输车" },
            ],
            alternativeExpressions: [
              { textEn: "Here are the quarantine form and the test request. A transport vehicle will take your dog to the facility. You can follow by taxi — here's the address. Sorry about the trouble.", textZh: "这是隔离表格和检测申请。有车送你的狗去设施。你可以打车跟着——地址在这。很抱歉添麻烦了。", actionHint: "口语化交接", frequency: "common" },
              { textEn: "I've prepared the quarantine admission form and test request. We'll transport your dog to the facility — here's the address so you can follow. I apologize for the inconvenience.", textZh: "隔离入住表格和检测申请准备好了。我们会把你的狗送去设施——地址在这你可以跟过去。对不便深表歉意。", actionHint: "正式交接", frequency: "occasional" }
            ],
          },
        ],
      },
    ],
  },

  // ==================== 27. VIP服务 ====================
  {
    id: "airport-vip-service",
    category: "airport",
    titleZh: "机场VIP服务",
    titleEn: "Airport VIP Service",
    description: "使用机场VIP贵宾服务（接送机、专属通道等）",
    otherRole: "VIP服务专员",
    otherRoleIcon: "👔",
    flows: [
      {
        id: "arrival-vip",
        titleZh: "到达VIP接机",
        titleEn: "VIP Arrival Service",
        description: "使用VIP到达服务，专人接机和快速通关",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "VIP专员",
            textEn: "Mr. Wang? Welcome! I'm Sarah from the VIP concierge team. I'll be assisting you through arrival today. How was your flight?",
            textZh: "王先生？欢迎！我是VIP礼宾团队的Sarah。今天由我协助您办理到达手续。飞行还顺利吗？",
            keyPhrases: [
              { en: "VIP concierge team", zh: "VIP礼宾团队" },
              { en: "assisting you", zh: "协助您" },
            ],
            alternativeExpressions: [
              { textEn: "Mr. Wang? Welcome! I'm Sarah from the VIP team. I'll be helping you through arrivals today. How was the flight?", textZh: "王先生？欢迎！我是VIP团队的Sarah。今天由我协助您办理到达。飞行还好吗？", actionHint: "口语化迎接", frequency: "common" },
              { textEn: "Hello, Mr. Wang! I'm Sarah, your VIP concierge for today. Welcome — I hope the flight was comfortable.", textZh: "您好，王先生！我是Sarah，今天您的VIP礼宾。欢迎——希望飞行还顺利。", actionHint: "正式迎接", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "It was good, thanks. I'm pretty tired though. What's the process from here?",
            textZh: "还不错，谢谢。就是挺累的。接下来流程是什么？",
          },
          {
            speaker: "them",
            role: "VIP专员",
            textEn: "I'll fast-track you through immigration and customs — there's no waiting in line. Then I'll collect your luggage while you relax in our private lounge. Once everything is ready, your car will be waiting at a private exit.",
            textZh: "我会带您快速通过入境检查和海关——不用排队。然后我去取您的行李，您在我们的私人休息室休息。一切准备好后，您的车会在私人出口等您。",
            keyPhrases: [
              { en: "fast-track", zh: "快速通过" },
              { en: "no waiting in line", zh: "不用排队" },
              { en: "private lounge", zh: "私人休息室" },
              { en: "private exit", zh: "私人出口" },
            ],
            alternativeExpressions: [
              { textEn: "I'll fast-track you through immigration and customs — no lines. Then I'll grab your bags while you relax in our lounge. Your car will be waiting at a private exit.", textZh: "我带您快速过入境和海关——不用排队。然后我去取行李，您在休息室休息。车在私人出口等您。", actionHint: "口语化介绍流程", frequency: "common" },
              { textEn: "Here's the plan: express immigration and customs, then you relax in the VIP lounge while I collect your luggage. A car will be ready at the private exit.", textZh: "计划是这样：快速过入境和海关，然后您在VIP休息室休息，我去取行李。私人出口有车等着。", actionHint: "清晰列出步骤", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds amazing. I have two large suitcases — here are the claim tags.",
            textZh: "听起来太棒了。我有两个大箱子——这是提取标签。",
          },
          {
            speaker: "them",
            role: "VIP专员",
            textEn: "I'll take care of those. Follow me through this corridor — it's the VIP immigration lane. Please have your passport ready.",
            textZh: "我来处理。跟我走这个走廊——VIP入境通道。请准备好护照。",
            alternativeExpressions: [
              { textEn: "I'll handle those. Follow me this way — it's the VIP immigration lane. Have your passport ready.", textZh: "交给我。跟我来——这是VIP入境通道。护照准备好。", actionHint: "简洁指引", frequency: "common" },
              { textEn: "Let me take those for you. Right this way through the VIP corridor — please have your passport handy.", textZh: "我来拿。这边走VIP走廊——请把护照准备好。", actionHint: "口语化带路", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Wow, that was quick. We skipped the entire line!",
            textZh: "哇，好快。整个队伍都跳过了！",
          },
          {
            speaker: "them",
            role: "VIP专员",
            textEn: "That's the benefit of the VIP service! Now, right through here is our private lounge. Help yourself to refreshments — coffee, juice, snacks. I'll be back with your bags in about 15 minutes.",
            textZh: "这就是VIP服务的好处！现在这里进去就是我们的私人休息室。随意取用茶点——咖啡、果汁、零食。大约15分钟后我把行李拿来。",
            keyPhrases: [
              { en: "refreshments", zh: "茶点" },
              { en: "help yourself", zh: "随意取用" },
            ],
            alternativeExpressions: [
              { textEn: "See? That's the VIP advantage! Our private lounge is right here. Help yourself to coffee, juice, and snacks. I'll be back with your bags in about 15 minutes.", textZh: "看到了吧？这就是VIP的好处！私人休息室就在这。咖啡、果汁、零食随便用。大约15分钟后我把行李拿来。", actionHint: "口语化展示", frequency: "common" },
              { textEn: "That's the beauty of VIP service! Please make yourself comfortable in our lounge — refreshments are complimentary. I'll collect your luggage and be right back.", textZh: "这就是VIP服务的好处！请在休息室随意享用——茶点免费。我去取行李马上回来。", actionHint: "正式介绍", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "This is very comfortable. Can I use the Wi-Fi here?",
            textZh: "这里很舒服。可以用WiFi吗？",
          },
          {
            speaker: "them",
            role: "VIP专员",
            textEn: "Absolutely — the network and password are on the card on the table. I'm back with both your suitcases! Your car is a black Mercedes waiting at Exit V2. Shall we go?",
            textZh: "当然——网络名和密码在桌子上的卡片上。我把您的两个箱子都拿来了！您的车是一辆黑色奔驰，在V2出口等着。我们走吗？",
            alternativeExpressions: [
              { textEn: "Sure — Wi-Fi info is on the card on the table. And here are your two suitcases! Your car — a black Mercedes — is waiting at Exit V2. Shall we go?", textZh: "当然——WiFi信息在桌上的卡片上。两个箱子都拿来了！黑色奔驰在V2出口等着。走吗？", actionHint: "口语化交接", frequency: "common" },
              { textEn: "The Wi-Fi details are on the table. Good news — I've got both your bags. Your Mercedes is at Exit V2. Ready to head out?", textZh: "WiFi信息在桌上。好消息——两件行李都拿来了。您的奔驰在V2出口。准备出发吗？", actionHint: "高效交接", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Let's go. How much was the VIP service? I booked it through my travel agent.",
            textZh: "走吧。VIP服务多少钱？我通过旅行社订的。",
          },
          {
            speaker: "them",
            role: "VIP专员",
            textEn: "Your agent has taken care of everything — it's $200 for the arrival package. It includes fast-track, luggage handling, lounge access, and the car transfer. Here's my card if you need the departure service when you fly home.",
            textZh: "您的旅行社已经全部处理好了——到达服务套餐200美元。包含快速通关、行李搬运、休息室使用和专车接送。这是我的名片，如果回程需要出发服务可以联系我。",
            keyPhrases: [
              { en: "arrival package", zh: "到达服务套餐" },
              { en: "luggage handling", zh: "行李搬运" },
              { en: "car transfer", zh: "专车接送" },
            ],
            alternativeExpressions: [
              { textEn: "Your agent has covered everything — $200 for the full arrival package. That's fast-track, luggage, lounge, and the car. Here's my card for when you need the departure service.", textZh: "您的旅行社已经全付了——200美元的完整到达套餐。包含快速通关、行李、休息室和专车。回程需要出发服务的话用我的名片联系。", actionHint: "口语化总结", frequency: "common" },
              { textEn: "It's all taken care of by your travel agent — $200 covers everything today. If you'd like VIP service for your departure, give me a call. Here's my card.", textZh: "旅行社已经都安排好了——200美元全包今天的服务。如果回程需要VIP服务，打电话给我。名片给您。", actionHint: "推荐回程服务", frequency: "occasional" }
            ],
          },
        ],
      },
      {
        id: "departure-vip",
        titleZh: "出发VIP服务",
        titleEn: "VIP Departure Service",
        description: "使用VIP出发服务，快速值机和登机",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'd like to book the VIP departure service for my flight tomorrow morning.",
            textZh: "我想预订明天早上航班的VIP出发服务。",
          },
          {
            speaker: "them",
            role: "VIP专员",
            textEn: "Excellent! The departure package includes curbside pickup, dedicated check-in, fast-track security, and lounge access until boarding. What time is your flight?",
            textZh: "好的！出发套餐包括门口接送、专属值机、快速安检和登机前休息室使用。您的航班几点？",
            keyPhrases: [
              { en: "departure package", zh: "出发套餐" },
              { en: "curbside pickup", zh: "门口接送" },
              { en: "dedicated check-in", zh: "专属值机" },
              { en: "fast-track security", zh: "快速安检" },
            ],
            alternativeExpressions: [
              { textEn: "Great! The departure package covers hotel pickup, dedicated check-in, fast-track security, and lounge access. When does your flight leave?", textZh: "好的！出发套餐包含酒店接送、专属值机、快速安检和休息室。您的航班几点？", actionHint: "口语化介绍", frequency: "common" },
              { textEn: "Perfect! You'll get curbside pickup, priority check-in, express security, and lounge time before boarding. What time is your flight?", textZh: "太好了！包括门口接送、优先值机、快速安检和登机前休息室。航班几点起飞？", actionHint: "列出所有服务", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "My flight is at 8 AM. What time should I arrive at the airport?",
            textZh: "航班早上8点。我应该几点到机场？",
          },
          {
            speaker: "them",
            role: "VIP专员",
            textEn: "With VIP service, you only need to arrive 90 minutes before departure — we handle everything quickly. So 6:30 AM is perfect. We can also send a car to your hotel.",
            textZh: "有VIP服务，您只需提前90分钟到——我们会快速处理一切。所以早上6:30到就好。我们也可以派车去酒店接您。",
            alternativeExpressions: [
              { textEn: "With VIP, you only need to be at the airport 90 minutes before departure — we handle everything fast. So 6:30 AM works. Want us to send a car to your hotel?", textZh: "有VIP服务只需提前90分钟到机场——我们一切都很快。6:30到就行。要派车去酒店接吗？", actionHint: "口语化说明", frequency: "common" },
              { textEn: "You won't need the usual three hours. With our service, 90 minutes is plenty — arrive at 6:30 and you're golden. We can also arrange hotel pickup.", textZh: "不需要通常的三小时。我们的服务90分钟就够——6:30到完全来得及。也可以安排酒店接车。", actionHint: "对比普通旅客", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "A car pickup would be great. I'm at the Four Seasons. How much is the full departure package with car service?",
            textZh: "派车接太好了。我住四季酒店。含接车的完整出发套餐多少钱？",
          },
          {
            speaker: "them",
            role: "VIP专员",
            textEn: "The departure VIP package is $180, and the car from the Four Seasons is an additional $60. Total of $240. You'll also get a personal escort from the car all the way to the boarding gate.",
            textZh: "出发VIP套餐180美元，从四季酒店接车额外60美元。总共240美元。您还会有专人从车上一直陪同到登机口。",
            keyPhrases: [
              { en: "personal escort", zh: "专人陪同" },
              { en: "all the way to", zh: "一直到" },
              { en: "boarding gate", zh: "登机口" },
            ],
            alternativeExpressions: [
              { textEn: "The departure VIP package is $180, and a car from the Four Seasons is $60 extra — $240 total. You'll also get a personal escort from the car all the way to the gate.", textZh: "出发VIP套餐180美元，从四季酒店接车额外60美元——共240美元。还会有专人从车上陪同到登机口。", actionHint: "口语化报价", frequency: "common" },
              { textEn: "It's $180 for the VIP departure service plus $60 for the Four Seasons pickup — $240 in total. That includes a personal escort straight to your boarding gate.", textZh: "VIP出发服务180美元加四季酒店接车60美元——总共240美元。包含专人全程陪同到登机口。", actionHint: "逐项报价", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "That's worth it for an early morning flight. Can you also arrange priority boarding?",
            textZh: "早班飞机花这个钱值得。能安排优先登机吗？",
          },
          {
            speaker: "them",
            role: "VIP专员",
            textEn: "Priority boarding depends on your airline and ticket class. But with VIP service, I'll have you at the gate early and can coordinate with the gate agent to board you first if possible.",
            textZh: "优先登机取决于航空公司和舱位。但有VIP服务，我会提前带您到登机口，如果可能的话会跟登机口工作人员协调让您先登机。",
            keyPhrases: [
              { en: "ticket class", zh: "舱位" },
              { en: "gate agent", zh: "登机口工作人员" },
              { en: "coordinate", zh: "协调" },
            ],
            alternativeExpressions: [
              { textEn: "Priority boarding depends on your ticket class and airline. But with our VIP service, I'll get you to the gate early and try to arrange first boarding with the gate agent.", textZh: "优先登机取决于舱位和航空公司。但有VIP服务我会提前带您到登机口，尽量跟工作人员安排先登机。", actionHint: "口语化说明", frequency: "common" },
              { textEn: "That's up to the airline and your fare class. What I can do is have you at the gate with plenty of time and coordinate with the gate staff for early boarding.", textZh: "这取决于航空公司和您的舱位。我能做的是让您早到登机口，并跟登机口工作人员协调提前登机。", actionHint: "说明可控范围", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds good. Let's book everything. Can I pay now?",
            textZh: "不错。全部预订吧。现在付款可以吗？",
          },
          {
            speaker: "them",
            role: "VIP专员",
            textEn: "Of course! $240 total. Card or cash is fine. The car will be at your hotel at 6:00 AM sharp — a black sedan with a 'VIP Airport' sign. The driver will call your room 10 minutes before arrival.",
            textZh: "当然！一共240美元。刷卡或现金都行。车6:00准时到您酒店——黑色轿车，挂着'VIP Airport'的牌子。司机会在到达前10分钟打电话到您房间。",
            keyPhrases: [
              { en: "sharp", zh: "准时" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! $240 total — card or cash works. The car will be at your hotel at 6 AM sharp. Black sedan with a 'VIP Airport' sign. The driver will call your room 10 minutes before.", textZh: "当然！共240美元——刷卡或现金都行。车早上6点准时到酒店。黑色轿车挂'VIP Airport'牌子。司机提前10分钟打房间电话。", actionHint: "口语化确认", frequency: "common" },
              { textEn: "Let's get you booked! That's $240. Expect a black sedan at 6:00 AM with our VIP sign. The driver calls 10 minutes ahead so you're ready. Card or cash?", textZh: "帮您预订吧！240美元。早上6点一辆挂VIP标志的黑色轿车到。司机提前10分钟打电话。刷卡还是现金？", actionHint: "确认预订", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. See you tomorrow morning!",
            textZh: "太好了。明天早上见！",
          },
        ],
      },
    ],
  },

  // ==================== 28. 快速通道 ====================
  {
    id: "airport-fast-track",
    category: "airport",
    titleZh: "快速通道",
    titleEn: "Fast Track Security",
    description: "购买或使用快速安检通道服务",
    otherRole: "快速通道工作人员",
    otherRoleIcon: "⚡",
    flows: [
      {
        id: "buying-fast-track",
        titleZh: "购买快速通道",
        titleEn: "Buying Fast Track Pass",
        description: "在机场现场购买快速安检通道",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "The security line is really long. Is there a fast track option I can buy?",
            textZh: "安检排队好长。有没有快速通道可以买？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Yes! We offer a fast track pass for $15 per person. It gets you through a dedicated security lane in about 5 minutes instead of the current 40-minute wait.",
            textZh: "有的！我们提供快速通道通行证，每人15美元。通过专用安检通道，大约5分钟就能过去，不用等现在的40分钟。",
            keyPhrases: [
              { en: "fast track pass", zh: "快速通道通行证" },
              { en: "dedicated security lane", zh: "专用安检通道" },
            ],
            alternativeExpressions: [
              { textEn: "Yes! A fast track pass is $15 per person. It gives you access to a dedicated lane — about 5 minutes instead of the 40-minute regular queue.", textZh: "有的！快速通道每人15美元。有专用通道——大约5分钟，不用排40分钟的队。", actionHint: "口语化说明", frequency: "common" },
              { textEn: "Absolutely. For $15 each, you get a priority security lane. Regular wait is about 40 minutes; the fast track takes around 5.", textZh: "当然。每人15美元走优先安检通道。普通排队约40分钟，快速通道大约5分钟。", actionHint: "对比等待时间", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take two — one for me and one for my wife. Where do I go?",
            textZh: "我要两张——我和我太太各一张。去哪里？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "That's $30 total. Here are your two passes. See the lane marked 'Priority' on the left? Just show these passes and your boarding pass to the agent at the entrance.",
            textZh: "一共30美元。这是两张通行证。看到左边标着'Priority'的通道了吗？在入口把通行证和登机牌给工作人员看就行。",
            keyPhrases: [
              { en: "lane marked Priority", zh: "标着Priority的通道" },
              { en: "at the entrance", zh: "在入口" },
            ],
            alternativeExpressions: [
              { textEn: "$30 for the two of you. Here are your passes. See the 'Priority' lane on the left? Show these and your boarding pass at the entrance.", textZh: "两位30美元。通行证给您。看到左边'Priority'通道了吗？入口出示这些和登机牌。", actionHint: "简洁指引", frequency: "common" },
              { textEn: "That's $30 total. Two passes, right here. Head to the 'Priority' lane over on the left — just flash these along with your boarding passes.", textZh: "总共30美元。两张通行证在这。去左边的'Priority'通道——把通行证和登机牌出示一下就行。", actionHint: "口语化指引", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Is the actual security check different, or just the line?",
            textZh: "安检本身有什么不同，还是只是排队不用等？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "The security check itself is the same — you still need to remove laptops, liquids, and go through the scanner. You just skip the long queue. It's the same screening process, just faster access.",
            textZh: "安检流程本身一样——还是要拿出笔记本电脑和液体，过扫描仪。你只是跳过了长队。是同样的检查流程，只是更快进入。",
            keyPhrases: [
              { en: "skip the long queue", zh: "跳过长队" },
              { en: "screening process", zh: "检查流程" },
              { en: "faster access", zh: "更快进入" },
            ],
            alternativeExpressions: [
              { textEn: "The screening itself is identical — laptops out, liquids out, scanner. You just skip the line. Same security, faster access.", textZh: "安检流程一样——笔记本拿出来、液体拿出来、过扫描。只是跳过排队。同样安检，更快进入。", actionHint: "口语化解释", frequency: "common" },
              { textEn: "Everything you go through is the same — the only difference is you bypass the queue. You still need to follow all standard screening procedures.", textZh: "检查内容完全一样——唯一区别是不用排队。所有标准安检流程还是要走的。", actionHint: "强调流程不变", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Can I buy this online next time? It would be nice to have it ready.",
            textZh: "下次能在网上买吗？提前准备好比较好。",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Yes! You can buy it on the airport's website or app up to 24 hours before your flight. It's actually $12 online — cheaper than buying it here. You'll get a QR code to scan at the lane.",
            textZh: "可以！航班前24小时内可以在机场官网或APP上购买。网上买其实只要12美元——比现场买便宜。会收到一个二维码在通道入口扫描。",
            keyPhrases: [
              { en: "up to 24 hours before", zh: "航班前24小时内" },
              { en: "QR code", zh: "二维码" },
            ],
            alternativeExpressions: [
              { textEn: "You can! Buy it on the airport app or website up to 24 hours ahead. It's actually $12 online — $3 cheaper. You'll get a QR code to scan at the lane.", textZh: "可以！航班前24小时可以在机场APP或网站上买。网上其实只要12美元——便宜3美元。会收到二维码在通道扫描。", actionHint: "推荐网上购买", frequency: "common" },
              { textEn: "Absolutely — and it's cheaper online. $12 through the app or website versus $15 here. You book up to 24 hours before your flight and get a QR code.", textZh: "当然——网上还更便宜。APP或网站上12美元，这里15美元。航班前24小时内购买，会收到二维码。", actionHint: "对比线上线下价", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know for next time. Thanks!",
            textZh: "下次知道了。谢谢！",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "You're welcome! Head straight to the Priority lane now. Have a great flight!",
            textZh: "不客气！现在直接去Priority通道吧。祝您旅途愉快！",
            alternativeExpressions: [
              { textEn: "Happy to help! Go straight to the Priority lane. Have a great flight!", textZh: "很高兴帮到您！直接去Priority通道吧。祝飞行愉快！", actionHint: "口语化送别", frequency: "common" },
              { textEn: "You're all set! Head right over to the Priority line. Safe travels!", textZh: "都搞定了！直接去Priority那边。一路平安！", actionHint: "简洁送别", frequency: "occasional" }
            ],
          },
        ],
      },
      {
        id: "fast-track-credit-card",
        titleZh: "信用卡快速通道权益",
        titleEn: "Credit Card Fast Track Benefit",
        description: "用信用卡附带的快速通道权益过安检",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I heard my credit card gives me free fast track access. How do I use it?",
            textZh: "我听说我的信用卡有免费快速通道权益。怎么用？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Which credit card do you have? Several premium cards include fast track as a perk.",
            textZh: "您用的是哪张信用卡？好几种高端信用卡都有快速通道作为权益。",
            keyPhrases: [
              { en: "premium cards", zh: "高端信用卡" },
              { en: "perk", zh: "权益/福利" },
            ],
            alternativeExpressions: [
              { textEn: "Which card do you have? A lot of premium cards come with fast track as a free benefit.", textZh: "您用什么信用卡？很多高端卡免费附带快速通道权益。", actionHint: "口语化询问", frequency: "common" },
              { textEn: "What credit card are you carrying? Some premium cards include complimentary fast track access.", textZh: "带的什么信用卡？有些高端卡含免费快速通道权限。", actionHint: "简洁询问", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "It's the American Express Platinum.",
            textZh: "美国运通白金卡。",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Yes, that card does include fast track at participating airports! Let me verify — I'll need to see the card and your boarding pass. I'll scan the card to confirm the benefit is active.",
            textZh: "没错，这张卡确实在合作机场有快速通道权益！我确认一下——需要看一下卡和登机牌。我扫描卡片确认权益是否有效。",
            keyPhrases: [
              { en: "participating airports", zh: "合作机场" },
              { en: "verify", zh: "确认" },
              { en: "benefit is active", zh: "权益是否有效" },
            ],
            alternativeExpressions: [
              { textEn: "Yes, that card includes fast track! Let me verify — card and boarding pass, please. I'll scan it to confirm the benefit is active.", textZh: "没错，这张卡包含快速通道！我确认一下——请出示卡和登机牌。我扫一下确认权益有效。", actionHint: "口语化验证", frequency: "common" },
              { textEn: "That card definitely has fast track access. Let me check it's active — can I see the card and your boarding pass?", textZh: "这张卡确实有快速通道。让我确认是否激活——看看卡和登机牌？", actionHint: "快速验证", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Here they are. Does it cover anyone traveling with me?",
            textZh: "给您。跟我一起的人也能用吗？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "The Amex Platinum covers you and one companion. So if you're traveling with one other person, they're covered. More than that, additional guests would need to purchase their own pass.",
            textZh: "美国运通白金卡覆盖您和一位同行人。所以如果带一个人一起旅行，也可以用。超过的话，其他人需要自己购买通行证。",
            keyPhrases: [
              { en: "one companion", zh: "一位同行人" },
              { en: "covered", zh: "覆盖/包含" },
              { en: "additional guests", zh: "其他人" },
            ],
            alternativeExpressions: [
              { textEn: "Your Amex Platinum covers you plus one person. So your travel companion is included. Anyone else would need to buy their own pass.", textZh: "您的运通白金卡覆盖您和一位同行人。所以您的同伴也可以。其他人需要自己买通行证。", actionHint: "口语化说明", frequency: "common" },
              { textEn: "The Platinum card includes fast track for the cardholder and one guest. That means your companion is covered — anyone beyond that would need a separate pass.", textZh: "白金卡包含持卡人和一位客人的快速通道。也就是说您的同伴也包含——超出的人需要另买通行证。", actionHint: "明确覆盖范围", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect, there are two of us. So we're both covered.",
            textZh: "太好了，我们两个人。都能用。",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Confirmed! You're both good to go. Head to the Priority lane with both boarding passes. The credit card benefit is logged in our system — no extra pass needed.",
            textZh: "确认了！两位都可以。带着两张登机牌去Priority通道。信用卡权益已经登记在系统里了——不需要额外通行证。",
            keyPhrases: [
              { en: "logged in our system", zh: "登记在系统里" },
              { en: "no extra pass needed", zh: "不需要额外通行证" },
            ],
            alternativeExpressions: [
              { textEn: "All confirmed! You're both good. Just head to the Priority lane with both boarding passes. It's all in the system — no extra pass needed.", textZh: "确认了！两位都可以。带着两张登机牌去Priority通道就行。系统里都有——不需要额外通行证。", actionHint: "口语化确认", frequency: "common" },
              { textEn: "You're all set — both of you. Go to the Priority lane and show your boarding passes. The credit card benefit is registered in our system.", textZh: "都搞定了——两位都行。去Priority通道出示登机牌。信用卡权益已录入系统。", actionHint: "简洁确认", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "That's a great perk. I didn't even know my card had this until recently.",
            textZh: "这个权益真不错。最近才知道我的卡有这个。",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "A lot of people don't! The Platinum also gives you lounge access and travel insurance. Worth checking the full list of benefits. Enjoy your flight!",
            textZh: "很多人都不知道！白金卡还有贵宾室权限和旅行保险。值得看看完整的权益列表。祝您旅途愉快！",
            alternativeExpressions: [
              { textEn: "Most people don't realize! Your Platinum also gives you lounge access and travel insurance. Worth checking the full benefits list. Enjoy your flight!", textZh: "很多人都不知道！白金卡还有贵宾室权限和旅行保险。值得看看完整权益。祝飞行愉快！", actionHint: "口语化提醒", frequency: "common" },
              { textEn: "You'd be surprised how many perks come with that card — lounge access, travel insurance, and more. Have a great flight!", textZh: "你会惊讶这张卡有多少权益——贵宾室、旅行保险等等。祝旅途愉快！", actionHint: "鼓励了解权益", frequency: "occasional" }
            ],
          },
        ],
      },
    ],
  },

  // ==================== 29. 行李寄存 / 行李打包 ====================
  {
    id: "airport-bag-storage",
    category: "airport",
    titleZh: "行李寄存",
    titleEn: "Luggage Storage",
    description: "在机场寄存行李以便轻松出行",
    otherRole: "行李寄存处工作人员",
    otherRoleIcon: "🔐",
    flows: [
      {
        id: "storing-bags",
        titleZh: "寄存行李",
        titleEn: "Storing Luggage",
        description: "在机场行李寄存处存放行李",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have a long layover and want to explore the city. Can I store my bags here?",
            textZh: "你好，我转机时间很长，想去市区逛逛。可以把行李存在这里吗？",
          },
          {
            speaker: "them",
            role: "寄存处",
            textEn: "Yes! We have luggage storage for travelers. How many bags and how long do you need?",
            textZh: "可以！我们为旅客提供行李寄存。几件行李？需要存多久？",
            alternativeExpressions: [
              { textEn: "Sure! We have luggage storage here. How many bags and for how long?", textZh: "可以！我们这有行李寄存。几件行李？存多久？", actionHint: "简洁确认", frequency: "common" },
              { textEn: "Absolutely, we offer bag storage for travelers. How many pieces and how long will you need?", textZh: "当然，我们为旅客提供行李存放。几件？需要存多长时间？", actionHint: "正式确认", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Two suitcases and a backpack. I'll be back in about 6 hours.",
            textZh: "两个箱子和一个背包。大概6小时后来取。",
          },
          {
            speaker: "them",
            role: "寄存处",
            textEn: "Our rates are $10 per bag for the first 4 hours, then $2 per hour after that. So for three bags and 6 hours, it would be about $42 total.",
            textZh: "我们的价格是每件前4小时10美元，之后每小时2美元。所以三件6小时，大约一共42美元。",
            keyPhrases: [
              { en: "rates", zh: "价格" },
              { en: "per bag", zh: "每件" },
              { en: "per hour after that", zh: "之后每小时" },
            ],
            alternativeExpressions: [
              { textEn: "It's $10 per bag for the first 4 hours, then $2 per hour after. Three bags for 6 hours would be about $42.", textZh: "每件前4小时10美元，之后每小时2美元。三件6小时大约42美元。", actionHint: "口语化报价", frequency: "common" },
              { textEn: "Our rate is $10 per bag for up to 4 hours. After that, it's $2 per extra hour per bag. So three bags, 6 hours — roughly $42 total.", textZh: "费率是每件4小时内10美元。之后每件每小时加2美元。三件6小时——大约42美元。", actionHint: "详细报价", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "That's reasonable. Is my stuff safe here?",
            textZh: "价格合理。东西放在这里安全吗？",
          },
          {
            speaker: "them",
            role: "寄存处",
            textEn: "Absolutely. All bags go through a security scan, and we store them in a locked, monitored room. You'll get a claim receipt with a barcode — you must present it to collect your bags.",
            textZh: "绝对安全。所有行李都要过安检扫描，存放在有锁的监控房间里。您会收到一张带条形码的取件收据——取行李时必须出示。",
            keyPhrases: [
              { en: "security scan", zh: "安检扫描" },
              { en: "locked, monitored room", zh: "有锁的监控房间" },
              { en: "claim receipt", zh: "取件收据" },
              { en: "barcode", zh: "条形码" },
            ],
            alternativeExpressions: [
              { textEn: "Completely. Every bag gets scanned and stored in a locked, monitored room. You'll get a receipt with a barcode — you need it to pick up your bags.", textZh: "绝对安全。每件行李都过扫描放在有锁有监控的房间。会给您一张带条形码的收据——取行李必须出示。", actionHint: "口语化保证", frequency: "common" },
              { textEn: "Yes — all bags go through security screening and are kept in a secure, camera-monitored room. Keep your claim receipt safe; it's required for pickup.", textZh: "是的——所有行李经过安检筛查，存放在安全的监控房间。保管好取件收据，取行李时必须出示。", actionHint: "强调安全措施", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Can I leave my laptop in the bag? It's quite valuable.",
            textZh: "可以把笔记本电脑放在包里吗？很值钱的。",
          },
          {
            speaker: "them",
            role: "寄存处",
            textEn: "We accept electronics, but we recommend taking valuables with you. We're insured up to $500 per bag, but anything above that isn't covered.",
            textZh: "电子产品可以存，但我们建议贵重物品随身携带。我们每件行李有最高500美元的保险，超过的部分不保。",
            keyPhrases: [
              { en: "insured up to", zh: "最高保险…" },
              { en: "isn't covered", zh: "不保的" },
            ],
            alternativeExpressions: [
              { textEn: "Electronics are fine, but I'd suggest keeping valuables on you. We're insured up to $500 per bag — anything over that isn't covered.", textZh: "电子产品可以存，但建议贵重物品随身带。每件行李有最高500美元保险——超出不保。", actionHint: "口语化建议", frequency: "common" },
              { textEn: "You can store electronics, but we recommend carrying high-value items with you. Our insurance covers up to $500 per bag.", textZh: "电子产品可以存，但建议高价值物品随身携带。我们的保险每件行李最高赔500美元。", actionHint: "简洁建议", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take my laptop with me. What time do you close?",
            textZh: "那我带上笔记本。你们几点关门？",
          },
          {
            speaker: "them",
            role: "寄存处",
            textEn: "We're open 24 hours, so pick up anytime. If you're running late, no worries — just extra hourly charges. Here's your receipt. Don't lose it!",
            textZh: "我们24小时营业，随时可以取。如果晚了也没关系——只是多收小时费。这是您的收据。别弄丢了！",
            keyPhrases: [
              { en: "open 24 hours", zh: "24小时营业" },
              { en: "don't lose it", zh: "别弄丢" },
            ],
            alternativeExpressions: [
              { textEn: "We're open 24/7, so come whenever. If you're late, no big deal — just extra hourly charges. Here's your receipt. Don't lose it!", textZh: "24小时营业，随时来取。晚了也没关系——多收小时费。收据给您。别弄丢了！", actionHint: "口语化交接", frequency: "common" },
              { textEn: "Pick up anytime — we never close. Late returns just incur the extra hourly rate. Your receipt is your claim ticket, so keep it safe!", textZh: "随时来取——我们不打烊。晚取的话按小时加收。收据就是您的提取凭证，保管好！", actionHint: "强调收据重要性", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks! I'll be back around 5 PM.",
            textZh: "谢谢！我大约下午5点回来。",
          },
        ],
      },
      {
        id: "bag-wrapping",
        titleZh: "行李打包缠膜",
        titleEn: "Bag Wrapping Service",
        description: "使用机场的行李缠膜保护服务",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "How much to wrap my suitcase? I want to protect it from scratches and tampering.",
            textZh: "给箱子缠膜多少钱？我想防刮和防被动手脚。",
            vocabNotes: {
              tampering: {
                meaningInContext: "在这里指他人在未经允许的情况下打开或动过行李",
                similarUsage: "类似表达：tamper-proof（防篡改的）",
              },
            },
          },
          {
            speaker: "them",
            role: "打包员",
            textEn: "It's $15 per standard suitcase and $20 for oversized bags. The plastic film protects against scratches, dirt, rain, and makes it tamper-evident.",
            textZh: "标准箱子每个15美元，超大行李20美元。塑料膜可以防刮、防脏、防雨，还能防止被人动过。",
            keyPhrases: [
              { en: "plastic film", zh: "塑料膜" },
              { en: "tamper-evident", zh: "防篡改的" },
              { en: "oversized bags", zh: "超大行李" },
            ],
            alternativeExpressions: [
              { textEn: "Standard suitcase is $15 and oversized bags are $20. The plastic wrap protects against scratches, dirt, and water — plus it shows if anyone's opened your bag.", textZh: "标准箱15美元，超大行李20美元。塑料膜防刮防脏防水——还能看出有没有人动过你的箱子。", actionHint: "口语化介绍", frequency: "common" },
              { textEn: "It's $15 for regular-sized luggage, $20 for oversized pieces. The film protects your bag and acts as a tamper indicator — you'll know if it's been opened.", textZh: "普通大小的15美元，超大件20美元。膜能保护行李还能防拆——打开过你会看得出来。", actionHint: "强调防拆功能", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I'll get both my suitcases wrapped. Will they still be able to open them for security checks?",
            textZh: "我两个箱子都缠。安检时他们还能打开检查吗？",
          },
          {
            speaker: "them",
            role: "打包员",
            textEn: "If security needs to inspect your bag, they'll cut through the wrap. But this rarely happens — most bags pass the scanner without issues. If they do cut it, come back to us and we'll rewrap it for free.",
            textZh: "如果安检需要检查你的行李，他们会剪开膜。但这很少发生——大多数行李过扫描仪没问题。如果他们剪了，回来找我们免费重新缠。",
            keyPhrases: [
              { en: "cut through the wrap", zh: "剪开膜" },
              { en: "rarely happens", zh: "很少发生" },
              { en: "rewrap for free", zh: "免费重新缠" },
            ],
            alternativeExpressions: [
              { textEn: "If security needs to check your bag, they'll cut it open. But that hardly ever happens. If they do, come back and we'll rewrap it for free.", textZh: "如果安检需要查你的行李，会剪开。但这种情况很少见。如果剪了，回来我们免费重新缠。", actionHint: "口语化说明", frequency: "common" },
              { textEn: "In the rare case that security needs to inspect your bag, they'll slice through the wrap. Just bring it back to us and we'll redo it at no charge.", textZh: "极少情况下安检可能需要检查，会割开膜。拿回来我们免费重缠。", actionHint: "强调免费重缠", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. Should I take off the TSA lock before wrapping?",
            textZh: "了解了。缠膜前需要取下TSA锁吗？",
          },
          {
            speaker: "them",
            role: "打包员",
            textEn: "Keep the lock on. We wrap over everything — handles, wheels, lock. We'll leave a small opening around the handle so you can still pull it on the carousel.",
            textZh: "锁留着。我们把所有东西都缠上——把手、轮子、锁。会在把手周围留个小口，这样在传送带上还能拉。",
            keyPhrases: [
              { en: "leave a small opening", zh: "留个小口" },
              { en: "carousel", zh: "传送带" },
            ],
            alternativeExpressions: [
              { textEn: "Leave the lock on. We wrap over everything — handles, wheels, lock. We'll leave a gap near the handle so you can grab it on the carousel.", textZh: "锁留着。全部缠上——把手、轮子、锁。把手那里会留个口方便在传送带上拿。", actionHint: "口语化说明", frequency: "common" },
              { textEn: "Keep it locked — we wrap around the lock, handles, and wheels. There'll be a small opening at the handle so you can still pull the bag.", textZh: "锁保留——我们连锁、把手、轮子都缠上。把手处会留一小口方便拉行李。", actionHint: "详细说明", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds good. How long does it take?",
            textZh: "好的。要多长时间？",
          },
          {
            speaker: "them",
            role: "打包员",
            textEn: "About 2 minutes per bag. Place the first one here on the platform... There you go — nice and secure. Now the second one, please.",
            textZh: "每个行李大约2分钟。把第一个放到这个平台上……好了——又紧又牢。请放第二个。",
            keyPhrases: [
              { en: "platform", zh: "平台" },
              { en: "nice and secure", zh: "又紧又牢" },
            ],
            alternativeExpressions: [
              { textEn: "About 2 minutes each. Put the first one up here... Done — nice and tight. Next one, please.", textZh: "每个大约2分钟。第一个放上来……好了，又紧又牢。下一个。", actionHint: "口语化操作", frequency: "common" },
              { textEn: "It takes roughly 2 minutes per bag. First one goes on the platform here... All wrapped up. Let's do the second one.", textZh: "每件大约2分钟。第一件放到平台上……包好了。来第二件。", actionHint: "引导操作", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "My bags are bright red, so I can still spot them easily with the clear wrap. That's $30 total?",
            textZh: "我的箱子是亮红色的，用透明膜也容易认出来。一共30美元？",
          },
          {
            speaker: "them",
            role: "打包员",
            textEn: "Exactly $30. We also have colored film if you want to make them even more unique — blue, green, or pink for $5 extra. But with red bags and clear wrap, you're already in good shape!",
            textZh: "正好30美元。如果想更独特，我们还有彩色膜——蓝色、绿色或粉色多加5美元。但红色箱子配透明膜已经很好认了！",
            alternativeExpressions: [
              { textEn: "That's $30 even. We also have colored film — blue, green, or pink for $5 extra. But your red bags with clear wrap are pretty easy to spot already!", textZh: "正好30美元。也有彩色膜——蓝、绿、粉多5美元。不过红色箱子加透明膜已经很好认了！", actionHint: "口语化报价", frequency: "common" },
              { textEn: "$30 total. If you want something really distinctive, we offer colored wrap for an extra $5. Though with red suitcases, you're already set!", textZh: "总共30美元。如果想更醒目，我们有彩色膜多加5美元。不过红色箱子已经够显眼了！", actionHint: "推荐但肯定现状", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Clear is fine. Thanks — they look great!",
            textZh: "透明的就行。谢谢——看着很好！",
          },
        ],
      },
    ],
  },

  // ==================== 30. 机场投诉 ====================
  {
    id: "airport-complaint-service",
    category: "airport",
    titleZh: "机场服务投诉",
    titleEn: "Airport Service Complaint",
    description: "对机场或航空公司服务不满时进行投诉",
    otherRole: "客服经理",
    otherRoleIcon: "📋",
    flows: [
      {
        id: "verbal-complaint",
        titleZh: "当面投诉",
        titleEn: "In-Person Complaint",
        description: "在服务台当面投诉服务问题",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I'd like to make a complaint. The service at your check-in counter was very rude. The agent was dismissive and unhelpful.",
            textZh: "我要投诉。你们值机柜台的服务非常不礼貌。那个工作人员态度敷衍，一点都不帮忙。",
            vocabNotes: {
              dismissive: {
                meaningInContext: "在这里指对人的问题漠不关心、不当回事",
                similarUsage: "类似表达：She was very rude and unhelpful.（她很粗鲁而且不帮忙）",
              },
            },
          },
          {
            speaker: "them",
            role: "客服经理",
            textEn: "I'm very sorry to hear that. Your experience matters to us. Can you tell me exactly what happened? I'd like to understand the full situation.",
            textZh: "非常抱歉。您的体验对我们很重要。能具体说说发生了什么吗？我想了解全部情况。",
            keyPhrases: [
              { en: "your experience matters", zh: "您的体验很重要" },
              { en: "the full situation", zh: "全部情况" },
            ],
            alternativeExpressions: [
              { textEn: "I'm very sorry about that. Your feedback is important to us. Can you tell me what happened? I want to understand the full picture.", textZh: "非常抱歉。您的反馈对我们很重要。能告诉我发生了什么吗？我想了解全面的情况。", actionHint: "口语化倾听", frequency: "common" },
              { textEn: "I'm sorry to hear that. We take every complaint seriously. Please walk me through exactly what happened.", textZh: "很遗憾听到这些。我们认真对待每一条投诉。请详细告诉我发生了什么。", actionHint: "表达重视", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I asked about seat options and the agent sighed, rolled their eyes, and said 'whatever's available.' When I asked about upgrading, they just pointed to the kiosk and walked away.",
            textZh: "我问座位选择，工作人员叹气、翻白眼，说'有什么就是什么'。我问升舱的事，他就指了下自助机走开了。",
          },
          {
            speaker: "them",
            role: "客服经理",
            textEn: "That's completely unacceptable, and I sincerely apologize. Do you remember which counter number or the agent's name? I want to address this specifically.",
            textZh: "这完全不能接受，我真诚道歉。你记得是哪个柜台号码或工作人员的名字吗？我要具体处理这件事。",
            keyPhrases: [
              { en: "unacceptable", zh: "不能接受" },
              { en: "sincerely apologize", zh: "真诚道歉" },
              { en: "address this", zh: "处理这件事" },
            ],
            alternativeExpressions: [
              { textEn: "That's totally unacceptable. I sincerely apologize. Do you remember the counter number or the person's name? I want to follow up on this specifically.", textZh: "这完全不可接受。我真诚道歉。记得柜台号码或那个人的名字吗？我要具体跟进。", actionHint: "口语化道歉", frequency: "common" },
              { textEn: "I'm really sorry — that should never happen. Can you recall any details about the agent? A counter number or name badge would help me investigate.", textZh: "非常抱歉——这不应该发生。能回忆起那个工作人员的什么细节吗？柜台号或工牌名字能帮助我调查。", actionHint: "寻求具体细节", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Counter 7. I think the name tag said 'Rodriguez.' I also waited in line for 45 minutes because only two counters were open during peak time.",
            textZh: "7号柜台。名牌好像写着'Rodriguez'。高峰期只开了两个柜台，我排了45分钟的队。",
          },
          {
            speaker: "them",
            role: "客服经理",
            textEn: "I'll look into both the staffing issue and the specific agent's behavior. I've noted everything you've told me. Can I offer you a $30 meal voucher as a gesture of apology while I investigate?",
            textZh: "人手不足的问题和该工作人员的行为我都会调查。您说的我都记下了。在我调查期间，能接受一张30美元的餐饮券作为道歉吗？",
            keyPhrases: [
              { en: "look into", zh: "调查" },
              { en: "staffing issue", zh: "人手问题" },
              { en: "gesture of apology", zh: "道歉的表示" },
            ],
            alternativeExpressions: [
              { textEn: "I'll investigate both the staffing issue and that agent's behavior. I've written everything down. Can I offer you a $30 meal voucher as an immediate apology?", textZh: "人手不足和该工作人员的行为我都会调查。都记下了。先给您一张30美元的餐饮券表示歉意？", actionHint: "口语化补偿", frequency: "common" },
              { textEn: "Everything you've told me is documented. I'll look into the staffing and the specific behavior. In the meantime, please accept this $30 meal voucher as a gesture of apology.", textZh: "您说的都已经记录。人员配置和具体行为我会调查。同时请接受这张30美元餐饮券作为道歉。", actionHint: "正式补偿", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I appreciate the voucher, but I mainly want to make sure this doesn't happen to other travelers. Will there be follow-up?",
            textZh: "餐饮券我接受，但我主要希望这种事不要再发生在其他旅客身上。会有后续处理吗？",
          },
          {
            speaker: "them",
            role: "客服经理",
            textEn: "Absolutely. I'll file a formal incident report, and the agent's supervisor will be notified today. If you leave your email, I'll send you an update on what actions we've taken within 5 business days.",
            textZh: "一定会的。我会提交正式的事件报告，今天就通知该工作人员的主管。如果您留下邮箱，5个工作日内我会发邮件告知我们采取了什么措施。",
            keyPhrases: [
              { en: "formal incident report", zh: "正式事件报告" },
              { en: "supervisor", zh: "主管" },
              { en: "actions we've taken", zh: "采取的措施" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely. I'll file a formal report and notify the agent's supervisor today. Leave your email and I'll update you on the actions we take within 5 business days.", textZh: "一定会。我今天提交正式报告并通知该工作人员的主管。留下邮箱，5个工作日内告知我们的处理措施。", actionHint: "口语化承诺", frequency: "common" },
              { textEn: "You have my word. An incident report goes in today, and the supervisor will be notified. If you share your email, I'll send you a follow-up within 5 business days.", textZh: "我保证。事件报告今天就提交，主管会被通知到。如果您留邮箱，5个工作日内发跟进邮件给您。", actionHint: "强调承诺", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Here's my email. Thank you for taking this seriously.",
            textZh: "这是我的邮箱。谢谢你认真对待这件事。",
          },
          {
            speaker: "them",
            role: "客服经理",
            textEn: "Thank you for bringing it to our attention. We can only improve if passengers speak up. Here's your voucher, and my business card — feel free to contact me directly if anything else comes up. Have a safe journey.",
            textZh: "谢谢您告知我们。只有旅客反映问题我们才能改进。这是您的餐饮券和我的名片——如果还有什么问题请直接联系我。祝您旅途平安。",
            keyPhrases: [
              { en: "bringing it to our attention", zh: "告知我们" },
              { en: "speak up", zh: "反映问题" },
              { en: "contact me directly", zh: "直接联系我" },
            ],
            alternativeExpressions: [
              { textEn: "Thank you for speaking up — we can only get better when passengers tell us. Here's the voucher and my card. Don't hesitate to reach out if anything else comes up. Safe travels.", textZh: "感谢您反映——乘客反馈我们才能改进。餐饮券和名片给您。有什么事别犹豫联系我。一路平安。", actionHint: "口语化感谢", frequency: "common" },
              { textEn: "We really appreciate you taking the time to tell us. Your voucher and my contact details are here. If there's anything else, please don't hesitate. Have a safe journey.", textZh: "非常感谢您花时间告诉我们。餐饮券和我的联系方式都在这。还有什么随时找我。祝旅途平安。", actionHint: "正式感谢", frequency: "occasional" }
            ],
          },
        ],
      },
      {
        id: "written-complaint",
        titleZh: "书面投诉",
        titleEn: "Written Complaint",
        description: "通过正式渠道提交书面投诉",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I want to file a formal written complaint about my experience today. Where do I submit it?",
            textZh: "我想就今天的遭遇提交一份正式的书面投诉。往哪里提交？",
          },
          {
            speaker: "them",
            role: "客服经理",
            textEn: "You have three options: fill out a paper complaint form here at the counter, submit one online through our website, or write an email to our customer relations department. Which would you prefer?",
            textZh: "您有三个选择：在柜台这里填纸质投诉表，在我们网站上在线提交，或者给客户关系部门发邮件。您选哪种？",
            keyPhrases: [
              { en: "paper complaint form", zh: "纸质投诉表" },
              { en: "customer relations department", zh: "客户关系部门" },
            ],
            alternativeExpressions: [
              { textEn: "You have three options: a paper form right here, an online form on our website, or an email to customer relations. Which works best?", textZh: "有三种方式：这里填纸质表格、在我们网站在线提交、或给客户关系部门发邮件。哪种方便？", actionHint: "口语化列选项", frequency: "common" },
              { textEn: "You can submit a paper complaint at this counter, file online through our site, or email our customer relations team directly. Your choice.", textZh: "可以在这个柜台填纸质投诉、在我们网站在线提交、或直接邮件给客户关系团队。您选。", actionHint: "简洁列选项", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "I'll do the paper form now and also submit online later. I want a record from both channels.",
            textZh: "我现在填纸质的，之后再在线提交一份。我想两个渠道都有记录。",
          },
          {
            speaker: "them",
            role: "客服经理",
            textEn: "That's your right. Here's the form. It asks for your personal details, flight information, a description of the incident, and what resolution you're seeking.",
            textZh: "这是您的权利。给您表格。需要填写个人信息、航班信息、事件描述，以及您希望的解决方案。",
            keyPhrases: [
              { en: "incident", zh: "事件" },
              { en: "resolution you're seeking", zh: "希望的解决方案" },
            ],
            alternativeExpressions: [
              { textEn: "Of course — that's your right. Here's the form. You'll fill in your details, flight info, what happened, and what you'd like us to do about it.", textZh: "当然——这是您的权利。表格给您。填写个人信息、航班信息、事件经过和您希望的解决方案。", actionHint: "口语化说明", frequency: "common" },
              { textEn: "Absolutely. The form asks for your personal information, flight details, a description of the incident, and what resolution you're seeking.", textZh: "没问题。表格需要填个人信息、航班详情、事件描述和您期望的解决方案。", actionHint: "逐项说明", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "What kind of resolutions can I ask for? I missed an important meeting because of a three-hour delay that wasn't communicated properly.",
            textZh: "我可以要求什么样的解决方案？因为三小时延误没有得到妥善通知，我错过了一个重要会议。",
          },
          {
            speaker: "them",
            role: "客服经理",
            textEn: "You can request monetary compensation, flight credits, frequent flyer miles, or a formal apology. For business losses, you may also want to submit a separate claim with documentation of the meeting and any financial impact.",
            textZh: "您可以要求经济赔偿、航班积分、常旅客里程或正式道歉。对于商务损失，您可能还需要单独提交索赔，附上会议相关文件和经济影响的证明。",
            keyPhrases: [
              { en: "flight credits", zh: "航班积分" },
              { en: "formal apology", zh: "正式道歉" },
              { en: "financial impact", zh: "经济影响" },
              { en: "separate claim", zh: "单独索赔" },
            ],
            alternativeExpressions: [
              { textEn: "You can ask for money, flight credits, miles, or a written apology. For business losses, you might want to file a separate claim with proof of the meeting and the financial impact.", textZh: "可以要求经济赔偿、航班积分、里程或书面道歉。商务损失的话，可能需要单独索赔并附上会议证明和经济影响文件。", actionHint: "口语化说明选项", frequency: "common" },
              { textEn: "Options include cash compensation, airline credit, frequent flyer miles, or a formal apology. If you suffered business losses, a separate claim with supporting documents is advisable.", textZh: "选项包括现金赔偿、航空积分、常旅客里程或正式道歉。如果有商务损失，建议单独提交索赔并附支持文件。", actionHint: "列出所有选项", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "What's the typical response time? And who reviews these complaints?",
            textZh: "一般多久回复？谁来审查这些投诉？",
          },
          {
            speaker: "them",
            role: "客服经理",
            textEn: "Paper forms are forwarded to our regional customer service team — they respond within 14 business days. Online submissions go to the same team but are usually faster — about 7 to 10 business days.",
            textZh: "纸质表格转交给我们的区域客户服务团队——14个工作日内回复。在线提交也是同一个团队处理，但通常更快——大约7到10个工作日。",
            keyPhrases: [
              { en: "forwarded to", zh: "转交给" },
              { en: "regional customer service team", zh: "区域客户服务团队" },
              { en: "business days", zh: "工作日" },
            ],
            alternativeExpressions: [
              { textEn: "Paper forms go to our regional team — expect a response in about 14 business days. Online is faster, usually 7 to 10 days.", textZh: "纸质表格转给区域团队——大约14个工作日回复。在线更快，通常7到10个工作日。", actionHint: "简洁对比", frequency: "common" },
              { textEn: "The paper route takes up to 14 business days. If you submit online, the same team handles it but faster — typically within 7 to 10 days.", textZh: "纸质途径最多14个工作日。在线提交的话同一个团队处理但更快——通常7到10个工作日。", actionHint: "推荐在线提交", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "If I'm not satisfied with the response, can I escalate it?",
            textZh: "如果对回复不满意，可以升级处理吗？",
          },
          {
            speaker: "them",
            role: "客服经理",
            textEn: "Yes. You can escalate to the airline's head office, and beyond that, to the aviation authority in this country. The response letter will include escalation instructions. You can also file with consumer protection agencies.",
            textZh: "可以。您可以升级到航空公司总部，之后还可以向该国的航空管理局投诉。回复信里会包含升级处理的说明。您也可以向消费者保护机构投诉。",
            keyPhrases: [
              { en: "escalate", zh: "升级处理" },
              { en: "aviation authority", zh: "航空管理局" },
              { en: "consumer protection agencies", zh: "消费者保护机构" },
            ],
            alternativeExpressions: [
              { textEn: "Yes. You can take it to the airline's head office, then to the country's aviation authority. The response letter will explain how to escalate. You can also contact consumer protection agencies.", textZh: "可以。可以向航空公司总部反映，之后还能向该国航空管理局投诉。回复信里会说明升级处理流程。也可以联系消费者保护机构。", actionHint: "口语化说明", frequency: "common" },
              { textEn: "Absolutely. Beyond us, there's the airline headquarters and the national aviation authority. The complaint response will include escalation instructions, and you can also go through consumer protection.", textZh: "当然。除了我们，还有航空公司总部和国家航空管理局。投诉回复里会包含升级说明，也可以走消费者保护渠道。", actionHint: "列出所有渠道", frequency: "occasional" }
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know I have options. I've filled out the form. Can I get a copy for my records?",
            textZh: "知道有选择就好。表格填好了。能给我一份副本留底吗？",
          },
          {
            speaker: "them",
            role: "客服经理",
            textEn: "Of course. I'll make a photocopy right now. Here's your copy with a reference number stamped on it. Keep this — you'll need it for any follow-up. I genuinely hope we can resolve this to your satisfaction.",
            textZh: "当然。我现在复印一份。这是您的副本，上面盖了参考编号。保留好——后续跟进需要用到。我真心希望能让您满意地解决这件事。",
            keyPhrases: [
              { en: "photocopy", zh: "复印" },
              { en: "reference number", zh: "参考编号" },
              { en: "resolve to your satisfaction", zh: "让您满意地解决" },
            ],
            alternativeExpressions: [
              { textEn: "Of course. Let me photocopy it now. Here's your copy with a reference number stamped on it. Keep this for any follow-up. I truly hope we can make this right.", textZh: "当然。我现在复印。这是您的副本，盖了参考编号。后续跟进时需要用。我真心希望能妥善解决。", actionHint: "口语化交接", frequency: "common" },
              { textEn: "Right away. Here's your photocopy with the reference number. Hold on to it — you'll need it for follow-up. We sincerely want to resolve this to your satisfaction.", textZh: "马上。给您副本，上面有参考编号。留好——后续跟进需要。我们真诚希望能让您满意。", actionHint: "正式交接", frequency: "occasional" }
            ],
          },
        ],
      },
    ],
  },
];
