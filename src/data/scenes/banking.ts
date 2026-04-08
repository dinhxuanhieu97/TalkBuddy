import type { PresetScene } from "../scene-types";

/**
 * 大类 10：💰 银行与通讯（Banking & Telecom）
 * 4 子场景：ATM/取现、货币兑换、手机/SIM卡、邮政/快递
 */
export const BANKING_SCENES: PresetScene[] = [
  // ==================== ATM取现/问题 ====================
  {
    id: "banking-atm",
    category: "banking",
    titleZh: "ATM取现/问题",
    titleEn: "ATM Withdrawal & Issues",
    description: "在国外使用ATM取现金，遇到操作问题或卡被吞时寻求帮助",
    otherRole: "银行工作人员",
    otherRoleIcon: "🏧",
    flows: [
      // --- Flow 1: ATM操作问题→找人帮忙 ---
      {
        id: "atm-help",
        titleZh: "ATM操作问题",
        titleEn: "ATM Operation Help",
        description: "ATM界面看不懂或操作有问题，找银行工作人员帮忙",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I'm trying to withdraw cash from the ATM, but I'm having trouble with the machine.",
            textZh: "打扰一下，我想从ATM取现金，但是机器操作有点问题。",
            casualVersion: "Hey, I'm having trouble with the ATM over there.",
          },
          {
            speaker: "them",
            role: "银行工作人员",
            textEn: "Of course, I can help. What seems to be the problem? Is the machine not accepting your card?",
            textZh: "当然，我来帮您。请问是什么问题？机器不接受您的卡吗？",
            variations: [
              { textEn: "Sure, let me take a look. What's happening with it?", textZh: "好的，我看看。怎么了？" },
            ],
            keyPhrases: [
              { en: "what seems to be the problem", zh: "请问什么问题" },
              { en: "accepting your card", zh: "接受您的卡" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, no worries. What's going on with the machine?", textZh: "没事儿，机器怎么了？", actionHint: "很随意的回应，准备描述问题", frequency: "common" },
              { textEn: "What kind of trouble are you running into?", textZh: "你遇到什么麻烦了？", actionHint: "直接问问题，简洁友好", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It accepted my card, but the screen is showing options I don't understand. I just want to withdraw money from my checking account.",
            textZh: "卡已经插进去了，但屏幕上的选项我看不懂。我只想从活期账户取钱。",
            culturalNote: "美国银行账户分 checking account（活期/支票账户）和 savings account（储蓄账户），取现一般选 checking。",
          },
          {
            speaker: "them",
            role: "银行工作人员",
            textEn: "No problem. You'll want to select \"Withdrawal,\" then choose \"Checking.\" After that, enter the amount you'd like. Would you like me to walk you through it?",
            textZh: "没问题。您选\"Withdrawal\"（取款），然后选\"Checking\"（活期）。之后输入您要取的金额就行。需要我一步一步带您操作吗？",
            keyPhrases: [
              { en: "withdrawal", zh: "取款" },
              { en: "checking", zh: "活期账户" },
              { en: "enter the amount", zh: "输入金额" },
              { en: "walk you through it", zh: "一步一步带您操作" },
            ],
            alternativeExpressions: [
              { textEn: "Easy — just hit \"Withdrawal,\" pick \"Checking,\" and punch in how much you want. Want me to show you?", textZh: "简单——点\"取款\"，选\"活期\"，输入你要的金额。要我给你演示吗？", actionHint: "口语化指导，可以接受帮助", frequency: "common" },
              { textEn: "Sure thing. Tap \"Withdrawal\" first, then \"Checking\" for your account type. I can walk you through the rest if you need.", textZh: "没问题。先点\"取款\"，然后选\"活期\"账户类型。需要的话我帮你操作剩下的。", actionHint: "分步骤指导，语气友好", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. Also, is there a fee for using this ATM with a foreign card?",
            textZh: "好的，麻烦了。另外，用国外的卡在这台ATM取钱有手续费吗？",
          },
          {
            speaker: "them",
            role: "银行工作人员",
            textEn: "There is usually a surcharge for out-of-network cards — typically around three to five dollars per transaction. Your own bank might also charge an international ATM fee on top of that.",
            textZh: "非本行卡通常会收一笔附加费——一般每笔交易3到5美元。您自己的银行也可能另外收一笔国际ATM手续费。",
            keyPhrases: [
              { en: "surcharge", zh: "附加费" },
              { en: "out-of-network", zh: "非本行/非网络内" },
              { en: "per transaction", zh: "每笔交易" },
              { en: "on top of that", zh: "在此基础上额外" },
            ],
            culturalNote: "在美国用中国银联卡取现，ATM会收2-5美元手续费，发卡行也会收费。建议一次多取减少次数。",
            alternativeExpressions: [
              { textEn: "Yeah, heads up — there's usually a few bucks fee for using a card that's not from our bank. Plus your bank back home might hit you with their own fee.", textZh: "提醒一下——用非本行卡通常会收几块钱手续费。你在国内的银行也可能另外收费。", actionHint: "注意双重收费，考虑一次多取", frequency: "common" },
              { textEn: "Foreign cards get dinged with a surcharge, usually three to five bucks. And that's not counting whatever your bank charges on their end.", textZh: "外国卡会被收附加费，通常三到五块。这还不算你自己银行那边收的费。", actionHint: "get dinged = 被收费（口语），注意总费用", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I see. Can I withdraw two hundred dollars?",
            textZh: "明白了。我可以取200美元吗？",
          },
          {
            speaker: "them",
            role: "银行工作人员",
            textEn: "Sure. Just select the amount here — you can choose from the preset amounts, or tap \"Other\" to enter a custom amount. This machine dispenses twenties and fifties.",
            textZh: "可以。在这里选金额——您可以选预设的金额，或者点\"Other\"输入自定义金额。这台机器出20和50面值的钞票。",
            keyPhrases: [
              { en: "preset amounts", zh: "预设金额" },
              { en: "other", zh: "其他/自定义" },
              { en: "dispenses twenties and fifties", zh: "出20和50面值的" },
            ],
            alternativeExpressions: [
              { textEn: "Yep! Pick one of the quick amounts on screen, or hit \"Other\" if you want a specific number. It only gives out twenties and fifties though.", textZh: "可以！选屏幕上的快捷金额，或者点\"Other\"输入你要的数。不过只出20和50的。", actionHint: "了解机器只出特定面值", frequency: "common" },
              { textEn: "Go ahead and pick how much. You can do a preset or type in whatever you want. Just so you know, it spits out twenties and fifties.", textZh: "选你要多少吧。可以选预设的或自己输入。提醒一下，这台机器只出20和50面值的。", actionHint: "spits out 是口语说法=吐出", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Oh, it's asking me something — \"Would you like a receipt?\"",
            textZh: "好的。哦，它在问我一个问题——\"要不要收据？\"",
          },
          {
            speaker: "them",
            role: "银行工作人员",
            textEn: "That's just asking if you want a printed receipt. I'd recommend selecting \"Yes\" so you have a record of the transaction, especially with a foreign card.",
            textZh: "这是问您要不要打印收据。我建议选\"Yes\"，这样您有交易记录，用国外的卡尤其建议保留。",
            keyPhrases: [
              { en: "printed receipt", zh: "打印收据" },
              { en: "record of the transaction", zh: "交易记录" },
            ],
            alternativeExpressions: [
              { textEn: "It's asking about a receipt. I'd say grab one — good to have proof of the transaction, you know?", textZh: "在问要不要收据。我建议拿一张——留个交易凭证比较好。", actionHint: "grab one = 拿一张（口语）", frequency: "common" },
              { textEn: "That's the receipt prompt. Definitely hit \"Yes\" — you'll want that for your records, especially using a foreign card.", textZh: "这是收据提示。一定选\"是\"——留着记录，尤其用外国卡的话。", actionHint: "建议保留收据作为凭证", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, it worked! Thank you so much for your help.",
            textZh: "太好了，取到了！非常感谢您的帮助。",
          },
          {
            speaker: "them",
            role: "银行工作人员",
            textEn: "You're welcome! Don't forget to take your card. Have a good day!",
            textZh: "不客气！别忘了取走您的卡。祝您愉快！",
            keyPhrases: [
              { en: "don't forget to take your card", zh: "别忘了取卡" },
            ],
            alternativeExpressions: [
              { textEn: "No problem! Oh, make sure you grab your card before you go. Take care!", textZh: "没事儿！记得走之前拿卡。保重！", actionHint: "提醒取卡，友好告别", frequency: "common" },
              { textEn: "Happy to help! And hey — don't leave your card in there. Have a great one!", textZh: "很高兴帮到你！别把卡忘在机器里了。祝你愉快！", actionHint: "have a great one = 祝你愉快（口语）", frequency: "common" },
            ],
          },
        ],
      },

      // --- Flow 2: 卡被吞/交易失败 ---
      {
        id: "card-swallowed",
        titleZh: "卡被吞/交易失败",
        titleEn: "Card Swallowed / Transaction Failed",
        description: "ATM吞卡或交易失败，需要联系银行解决",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I need help urgently. The ATM just swallowed my card and it won't give it back.",
            textZh: "打扰一下，我急需帮助。ATM把我的卡吞了，不退回来了。",
            casualVersion: "Hey, the ATM ate my card! Can someone help me?",
          },
          {
            speaker: "them",
            role: "银行工作人员",
            textEn: "I'm sorry to hear that. That can happen sometimes, especially with foreign cards. Can you tell me which ATM it was? And do you remember if it showed any error message?",
            textZh: "很抱歉发生这种情况。这种事偶尔会发生，尤其是外国卡。您能告诉我是哪台ATM吗？还记得屏幕上有没有显示什么错误信息？",
            keyPhrases: [
              { en: "swallowed", zh: "吞了" },
              { en: "foreign cards", zh: "外国卡" },
              { en: "error message", zh: "错误信息" },
            ],
            alternativeExpressions: [
              { textEn: "Oh no, that's frustrating. Which machine was it? Did it give you any kind of error?", textZh: "天哪，真烦人。是哪台机器？有显示什么错误吗？", actionHint: "表示同情并追问细节", frequency: "common" },
              { textEn: "Ugh, yeah, those machines do that sometimes. Do you remember which one it was and if anything popped up on the screen?", textZh: "唉，那些机器有时候就这样。记得是哪台吗，屏幕上有弹出什么吗？", actionHint: "popped up = 弹出（口语）", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It was the one by the entrance. It said something like \"transaction cannot be completed\" and then it kept my card.",
            textZh: "入口旁边那台。屏幕上显示类似\"交易无法完成\"的信息，然后卡就被吞了。",
          },
          {
            speaker: "them",
            role: "银行工作人员",
            textEn: "I understand. Unfortunately, if the ATM has retained your card, we can't retrieve it right away. The machine will need to be opened by our technician. Can I see your ID — a passport would work — so I can file a report?",
            textZh: "我明白了。很遗憾，如果ATM已经吞卡，我们没办法马上取出来。需要技术人员来开机器。我能看一下您的证件吗？护照就行——我好做一份记录。",
            keyPhrases: [
              { en: "retained your card", zh: "吞了您的卡" },
              { en: "retrieve", zh: "取回" },
              { en: "technician", zh: "技术人员" },
              { en: "file a report", zh: "做记录/填报告" },
            ],
            culturalNote: "ATM吞卡后通常不能立即取回，需要等银行技术人员。建议随身携带护照复印件以备不时之需。",
            alternativeExpressions: [
              { textEn: "Yeah, once the machine takes it, we can't get it out ourselves — a tech has to come open it up. Got any ID on you? Passport works fine.", textZh: "一旦机器吞了卡，我们自己取不出来——得等技术员来开机器。带证件了吗？护照就行。", actionHint: "got any ID on you 是很口语的问法", frequency: "common" },
              { textEn: "Unfortunately there's no way to pop it back out. We'll need to get a technician involved. Can you show me some form of ID so I can document this?", textZh: "很遗憾没法把卡退出来。我们需要让技术员处理。能出示一下证件吗，我做个记录？", actionHint: "document this = 做记录", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's my passport. How long will it take to get my card back? I'm only in the country for a few more days.",
            textZh: "这是我的护照。要多久才能拿回卡？我在这个国家只待几天了。",
          },
          {
            speaker: "them",
            role: "银行工作人员",
            textEn: "It typically takes two to three business days to retrieve a retained card. Since you're leaving soon, I'd recommend contacting your bank's international hotline to report the issue. They can usually send a replacement to your home address or block the card and issue a new one.",
            textZh: "通常需要两到三个工作日才能取回被吞的卡。既然您很快要离开，我建议您联系发卡行的国际客服热线报告此事。他们通常可以把新卡寄到您的家庭地址，或者冻结旧卡重新发一张。",
            keyPhrases: [
              { en: "two to three business days", zh: "两到三个工作日" },
              { en: "international hotline", zh: "国际客服热线" },
              { en: "replacement", zh: "补发的卡" },
              { en: "block the card", zh: "冻结卡" },
            ],
            alternativeExpressions: [
              { textEn: "Realistically, it's gonna be a couple business days before we can get it back. Your best bet is to call your bank — they can freeze the card and send you a new one.", textZh: "实话说，要等几个工作日才能拿回来。最好的办法是打给你的银行——他们能冻结卡然后寄新卡。", actionHint: "your best bet = 最好的办法", frequency: "common" },
              { textEn: "It'll be two or three business days at least. Since you're heading out soon, I'd call your bank's international number and have them sort it out from their end.", textZh: "至少两三个工作日。既然你快走了，建议打发卡行国际客服让他们那边处理。", actionHint: "sort it out = 处理解决", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's really inconvenient. Is there any way to get emergency cash? This was my only bank card.",
            textZh: "这太不方便了。有没有什么办法能紧急拿到现金？这是我唯一的银行卡。",
          },
          {
            speaker: "them",
            role: "银行工作人员",
            textEn: "If you have a credit card, you could get a cash advance at the counter, though there will be a fee. Alternatively, you could use a service like Western Union to have someone wire you money. You might also try using a mobile payment app if you have one set up.",
            textZh: "如果您有信用卡，可以在柜台做信用卡取现，不过会有手续费。您也可以用西联汇款让别人给您汇钱。如果设置了手机支付app的话，也可以试试。",
            keyPhrases: [
              { en: "cash advance", zh: "信用卡取现" },
              { en: "wire you money", zh: "给您汇钱" },
              { en: "Western Union", zh: "西联汇款" },
              { en: "mobile payment app", zh: "手机支付应用" },
            ],
            responseTip: "记下银行客服电话和报告编号，后续跟进时需要用到。",
            alternativeExpressions: [
              { textEn: "Do you have a credit card on you? We can do a cash advance right here at the counter. Otherwise, someone back home could wire you money through Western Union.", textZh: "身上有信用卡吗？我们可以直接在柜台取现。不然国内的人也可以通过西联给你汇钱。", actionHint: "on you = 身上带着", frequency: "common" },
              { textEn: "A few options — credit card cash advance, having someone send you money via Western Union, or maybe Apple Pay or Venmo if you've got that set up.", textZh: "有几个办法——信用卡取现、让人通过西联汇钱、或者如果有 Apple Pay 或 Venmo 也行。", actionHint: "列举替代方案，选择适合的", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I do have a credit card. Can I get a cash advance here at the counter?",
            textZh: "我有信用卡。可以在这里柜台取现吗？",
          },
          {
            speaker: "them",
            role: "银行工作人员",
            textEn: "Yes, we can process that for you. Please bring your credit card and passport to window three. There's usually a fee of around three percent plus a flat fee from your card issuer. How much would you like to withdraw?",
            textZh: "可以的，我们可以帮您办理。请带着您的信用卡和护照到三号窗口。通常会收取大约3%的手续费，再加上发卡行的一笔固定费用。您想取多少？",
            keyPhrases: [
              { en: "process that", zh: "办理" },
              { en: "window three", zh: "三号窗口" },
              { en: "three percent", zh: "百分之三" },
              { en: "flat fee", zh: "固定费用" },
              { en: "card issuer", zh: "发卡行" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, we can do that. Head over to window three with your credit card and passport. Just a heads-up — there'll be about a 3% fee, and your card company might tack on their own charge too.", textZh: "可以办。带上信用卡和护照去三号窗口。提醒一下——大概有3%的费用，你的发卡行也可能额外收费。", actionHint: "heads-up = 提醒, tack on = 额外加上", frequency: "common" },
              { textEn: "Absolutely. Bring your card and passport to counter three and we'll get you sorted. Fair warning though — cash advances run about 3% plus whatever your issuer charges.", textZh: "没问题。带卡和护照到三号柜台我们帮你办。不过提前说一下——信用卡取现大约3%加上发卡行的费用。", actionHint: "fair warning = 提前提醒", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll withdraw three hundred dollars. Also, could you write down the report number for my swallowed card? I'll need it to follow up with my bank.",
            textZh: "我取300美元吧。另外，能把吞卡的报告编号写给我吗？我之后需要跟发卡行跟进。",
          },
          {
            speaker: "them",
            role: "银行工作人员",
            textEn: "Absolutely. Here's the incident report with the reference number. I've also written down our branch phone number in case you need to call. Is there anything else I can help with?",
            textZh: "当然。这是事故报告和参考编号。我还写了我们网点的电话号码，以防您需要打电话。还有其他需要帮助的吗？",
            keyPhrases: [
              { en: "incident report", zh: "事故报告" },
              { en: "reference number", zh: "参考编号" },
              { en: "branch phone number", zh: "网点电话号码" },
            ],
            alternativeExpressions: [
              { textEn: "Here you go — this has your case number and all the details. I wrote our number on there too, so give us a ring if you need anything.", textZh: "给你——上面有你的案件编号和所有细节。我也写了我们的电话，有需要打给我们。", actionHint: "give us a ring = 打电话给我们（英式口语也常用）", frequency: "common" },
              { textEn: "Of course. Here's your reference number and the report. Keep this handy, and don't hesitate to call us if anything comes up.", textZh: "当然。这是你的参考编号和报告。放好，有任何情况随时打电话。", actionHint: "keep this handy = 放在手边", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 货币兑换 ====================
  {
    id: "banking-exchange",
    category: "banking",
    titleZh: "货币兑换",
    titleEn: "Currency Exchange",
    description: "在兑换柜台换外币，了解汇率、手续费和兑换流程",
    otherRole: "兑换柜台工作人员",
    otherRoleIcon: "💱",
    flows: [
      // --- Flow 1: 换汇流程+汇率+手续费 ---
      {
        id: "standard-exchange",
        titleZh: "标准换汇流程",
        titleEn: "Standard Currency Exchange",
        description: "基本的外币兑换流程，了解汇率和手续费",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to exchange some Chinese yuan for US dollars, please.",
            textZh: "你好，我想把一些人民币换成美元。",
            casualVersion: "Hey, I need to change some Chinese yuan to dollars.",
          },
          {
            speaker: "them",
            role: "兑换柜台工作人员",
            textEn: "Sure, we can do that. How much would you like to exchange?",
            textZh: "好的，可以。您想换多少？",
            variations: [
              { textEn: "Of course. How much yuan are you looking to change?", textZh: "当然可以。您想换多少人民币？" },
            ],
            keyPhrases: [
              { en: "how much", zh: "多少" },
              { en: "exchange", zh: "兑换" },
            ],
            alternativeExpressions: [
              { textEn: "No problem! How much are you looking to convert?", textZh: "没问题！你想换多少？", actionHint: "convert 也是换汇的常用词", frequency: "common" },
              { textEn: "Yeah, we do yuan. How much have you got to change?", textZh: "嗯，我们换人民币。你要换多少？", actionHint: "非常口语化的问法", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have five thousand yuan. What's today's exchange rate?",
            textZh: "我有5000元人民币。今天的汇率是多少？",
          },
          {
            speaker: "them",
            role: "兑换柜台工作人员",
            textEn: "Today's rate for Chinese yuan to US dollar is 7.25 to 1. So for five thousand yuan, you'd get about six hundred and ninety dollars. There's also a service fee of eight dollars.",
            textZh: "今天人民币兑美元的汇率是7.25比1。所以5000元人民币大约能换690美元。另外还有8美元的服务费。",
            keyPhrases: [
              { en: "exchange rate", zh: "汇率" },
              { en: "7.25 to 1", zh: "7.25比1" },
              { en: "service fee", zh: "服务费/手续费" },
              { en: "you'd get about", zh: "您大约能得到" },
            ],
            culturalNote: "机场和旅游区的兑换点汇率通常较差，手续费也高。市区的银行或大型兑换连锁店（如Travelex）汇率更好。",
            alternativeExpressions: [
              { textEn: "Right now we're at 7.25 yuan to the dollar. So five thousand yuan gets you roughly 690 bucks, minus an eight-dollar service charge.", textZh: "目前汇率是7.25人民币换1美元。所以5000块大概能换690美元，减掉8块服务费。", actionHint: "bucks = 美元（口语），注意实际到手金额", frequency: "common" },
              { textEn: "The rate today is 7.25 to one. That puts you at about 690 dollars for your five thousand yuan. Plus there's an eight-dollar fee on top.", textZh: "今天汇率7.25比1。你的5000人民币大约能换690美元。另外还有8美元手续费。", actionHint: "puts you at = 让你得到大约", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is that the best rate you can offer? I noticed the bank rate is a bit better.",
            textZh: "这是你们能给的最好汇率吗？我看银行的汇率好一些。",
          },
          {
            speaker: "them",
            role: "兑换柜台工作人员",
            textEn: "Our rate includes a small margin — that's how we cover our costs. But we don't charge commission on top of it, unlike some other places. The total you receive is what I quoted.",
            textZh: "我们的汇率里包含了一小部分差价——这是我们的运营成本。但我们不像有些地方那样额外收佣金。您拿到的总额就是我报的那个数。",
            keyPhrases: [
              { en: "margin", zh: "差价/利润空间" },
              { en: "commission", zh: "佣金" },
              { en: "cover our costs", zh: "覆盖成本" },
            ],
            culturalNote: "有些兑换点标榜\"no commission\"但在汇率里赚差价，有些收commission但汇率更接近市场价。建议比较\"到手金额\"而不是只看汇率。",
            alternativeExpressions: [
              { textEn: "Look, our rate has a small spread built in — that's how we stay in business. But there's no hidden commission. What I quoted is what you walk away with.", textZh: "我们的汇率里有一小点差价——这是我们的经营成本。但没有隐藏佣金。我报的就是你拿到手的。", actionHint: "spread = 差价, walk away with = 最终拿到", frequency: "common" },
              { textEn: "Yeah, the bank rate is the interbank rate — nobody gets that rate. We mark it up a tiny bit, but we're transparent about it. No extra commission.", textZh: "银行的汇率是银行间汇率——谁都拿不到那个价。我们加了一点点，但完全透明。不额外收佣金。", actionHint: "interbank rate = 银行间汇率，了解汇率差异原因", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds fair. I'll go ahead and exchange the full five thousand yuan.",
            textZh: "听起来合理。那我就换5000元吧。",
          },
          {
            speaker: "them",
            role: "兑换柜台工作人员",
            textEn: "Great. May I see your passport, please? We need it for any exchange over three hundred dollars. I'll also need you to fill out this brief form.",
            textZh: "好的。能看一下您的护照吗？超过300美元的兑换都需要出示护照。另外还需要您填一张简单的表格。",
            keyPhrases: [
              { en: "passport", zh: "护照" },
              { en: "any exchange over", zh: "超过...的兑换" },
              { en: "fill out this form", zh: "填写这张表格" },
            ],
            alternativeExpressions: [
              { textEn: "Can I grab your passport real quick? Anything over three hundred bucks, we gotta check ID. And there's a quick form to fill out.", textZh: "能看一下护照吗？超过300美元的都得看证件。还有个简单表格要填。", actionHint: "grab your passport = 看一下护照（很随意）", frequency: "common" },
              { textEn: "I'll need to see some ID — passport is perfect. It's required for exchanges over $300. Just a short form to sign as well.", textZh: "需要看一下证件——护照就可以。超过300美元的兑换需要的。还有一张简短的表格要签。", actionHint: "some ID 泛指任何证件", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's my passport. What do I need to fill in on the form?",
            textZh: "这是我的护照。表格上要填什么？",
          },
          {
            speaker: "them",
            role: "兑换柜台工作人员",
            textEn: "Just your name, passport number, and signature. Let me count this out — that's six hundred and eighty-two dollars after the fee. Would you like any specific denominations? Twenties and fifties, or larger bills?",
            textZh: "只需要填姓名、护照号码和签名。我来数一下——扣除手续费后是682美元。您对面值有要求吗？要20和50的，还是大额钞票？",
            keyPhrases: [
              { en: "passport number", zh: "护照号码" },
              { en: "count this out", zh: "数出来" },
              { en: "denominations", zh: "面值/面额" },
              { en: "larger bills", zh: "大额钞票" },
            ],
            responseTip: "建议要一些小面额的零钱，方便给小费和日常消费。",
            alternativeExpressions: [
              { textEn: "Name, passport number, and your John Hancock at the bottom. After the fee, you're looking at 682. How do you want it — small bills, big bills?", textZh: "填姓名、护照号码，底下签个名。扣费后是682美元。你要怎么拿——小额还是大额？", actionHint: "John Hancock = 签名（美式俚语）", frequency: "occasional" },
              { textEn: "Just fill in your name, passport number, and sign it. That comes to 682 after fees. Any preference on how you want the bills?", textZh: "填姓名、护照号和签名就行。扣费后是682。对面值有什么偏好吗？", actionHint: "直接明了的说法", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Could I get mostly twenties, and maybe a few fifties? I'll need small bills for tips.",
            textZh: "能不能大部分给20的，再来几张50的？我需要小面额的钞票给小费。",
            culturalNote: "在美国，小费文化很普遍。随身携带1美元和5美元的零钱很方便。",
          },
          {
            speaker: "them",
            role: "兑换柜台工作人员",
            textEn: "Absolutely. Here's two fifties, twenty-eight twenties, and two ones. Please count it and sign here to confirm. Keep this receipt — you'll need it if you want to exchange any back before you leave.",
            textZh: "没问题。给您两张50的、二十八张20的和两张1块的。请您数一下，然后在这里签名确认。保留好这张收据——如果您离开前想换回来会用到。",
            keyPhrases: [
              { en: "count it", zh: "数一下" },
              { en: "sign here", zh: "在这里签名" },
              { en: "keep this receipt", zh: "保留好收据" },
              { en: "exchange any back", zh: "换回来" },
            ],
            alternativeExpressions: [
              { textEn: "There you go — two fifties, twenty-eight twenties, and two singles. Go ahead and count it, then sign right here. Hang on to this receipt in case you wanna change any back later.", textZh: "给你——两张50、二十八张20、两张1块。数一下，然后在这签名。收据留好，万一走之前想换回来用得到。", actionHint: "singles = 1美元纸币, hang on to = 保留好", frequency: "common" },
              { textEn: "Here's your cash — make sure it's all there and sign at the bottom. And definitely keep the receipt — you'll need it for any buy-back.", textZh: "这是你的现金——确认金额无误然后底下签名。收据一定留着——回购的时候需要。", actionHint: "buy-back = 回购/换回", frequency: "common" },
            ],
          },
        ],
      },

      // --- Flow 2: 大额兑换/需要出示证件 ---
      {
        id: "large-exchange",
        titleZh: "大额兑换与证件要求",
        titleEn: "Large Amount Exchange & ID Requirements",
        description: "兑换较大金额外币，涉及额外验证和合规要求",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hello, I need to exchange a larger amount — about twenty thousand yuan. Is that possible here?",
            textZh: "你好，我需要换一笔较大的金额——大约两万元人民币。这里可以换吗？",
          },
          {
            speaker: "them",
            role: "兑换柜台工作人员",
            textEn: "We can handle that, but for amounts over ten thousand dollars equivalent, we'll need additional documentation. It's a regulatory requirement. Do you have your passport and any proof of travel, like a flight itinerary?",
            textZh: "我们可以办理，但超过等值一万美元的兑换，我们需要额外的文件。这是监管要求。您有护照和旅行证明吗，比如机票行程单？",
            keyPhrases: [
              { en: "additional documentation", zh: "额外文件" },
              { en: "regulatory requirement", zh: "监管要求" },
              { en: "proof of travel", zh: "旅行证明" },
              { en: "flight itinerary", zh: "机票行程单" },
            ],
            culturalNote: "美国法律规定，等值一万美元以上的现金交易需要填写CTR（货币交易报告），这是反洗钱要求。",
            alternativeExpressions: [
              { textEn: "We can definitely do that, but anything over ten grand, we need extra paperwork — it's the law. You got your passport and maybe a flight booking or something to show you're traveling?", textZh: "完全可以办，但超过一万的话需要额外手续——这是法律要求。你有护照和机票预订之类的旅行证明吗？", actionHint: "ten grand = 一万美元（口语）", frequency: "common" },
              { textEn: "Sure, that's doable. For amounts that size though, there's some extra compliance stuff — we'll need your passport and something that shows your travel plans.", textZh: "没问题，可以办。不过金额这么大的话有一些合规手续——需要你的护照和旅行计划的证明。", actionHint: "compliance stuff = 合规手续（口语化）", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have my passport. I also have my return flight booking on my phone. Would that work?",
            textZh: "我有护照。手机上也有回程机票预订信息。这样可以吗？",
          },
          {
            speaker: "them",
            role: "兑换柜台工作人员",
            textEn: "The passport is perfect. A screenshot of your flight booking should be fine too. I'll also need to fill out a Currency Transaction Report — it's standard procedure, nothing to worry about. It just asks for your personal details and the purpose of the exchange.",
            textZh: "护照就行。机票预订的截图也可以。我还需要填一份货币交易报告——这是标准流程，不用担心。只需要您的个人信息和换汇目的。",
            keyPhrases: [
              { en: "Currency Transaction Report", zh: "货币交易报告" },
              { en: "standard procedure", zh: "标准流程" },
              { en: "personal details", zh: "个人信息" },
              { en: "purpose of the exchange", zh: "换汇目的" },
            ],
            alternativeExpressions: [
              { textEn: "Passport works great. And yeah, a screenshot of your flight is totally fine. I'll just need to do a little paperwork on our end — it's routine, nothing to stress about.", textZh: "护照就行。机票截图完全可以。我这边需要填点手续——都是常规的，不用紧张。", actionHint: "nothing to stress about = 不用紧张", frequency: "common" },
              { textEn: "That'll do. There's also a CTR form I have to fill out — government thing, totally normal for this amount. Just basic info and why you're exchanging.", textZh: "可以。我还得填一个CTR表——政府要求，这个金额很正常。就是基本信息和换汇原因。", actionHint: "CTR = Currency Transaction Report 的缩写", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's fine. The purpose is personal travel expenses. Is the rate the same as for smaller amounts?",
            textZh: "没问题。目的是个人旅行消费。汇率和小额兑换一样吗？",
          },
          {
            speaker: "them",
            role: "兑换柜台工作人员",
            textEn: "Actually, for larger amounts we can offer you a slightly better rate. Instead of 7.25, I can do 7.20 for you. That would give you about two thousand seven hundred seventy-eight dollars before fees.",
            textZh: "实际上，大额兑换我们可以给您稍好的汇率。7.25可以给您做到7.20。这样扣费前大约能换到2778美元。",
            keyPhrases: [
              { en: "slightly better rate", zh: "稍好的汇率" },
              { en: "for larger amounts", zh: "大额兑换" },
              { en: "before fees", zh: "扣费前" },
            ],
            alternativeExpressions: [
              { textEn: "Good news — since you're doing a bigger amount, I can bump the rate up a bit. 7.20 instead of 7.25. That gets you around $2,778 before we take out fees.", textZh: "好消息——因为金额比较大，我可以把汇率调好一点。7.20而不是7.25。扣费前大约拿到2778美元。", actionHint: "bump up = 提高一点", frequency: "common" },
              { textEn: "Since it's a larger exchange, we can cut you a better deal on the rate — 7.20 instead of 7.25. So you're looking at roughly $2,778 before fees.", textZh: "因为是大额兑换，我们可以给你更优惠的汇率——7.20而不是7.25。这样扣费前大约2778美元。", actionHint: "cut you a better deal = 给你更好的价格", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's better, thanks. What are the fees for this amount?",
            textZh: "好一些了，谢谢。这个金额的手续费是多少？",
          },
          {
            speaker: "them",
            role: "兑换柜台工作人员",
            textEn: "For this amount, the service fee is fifteen dollars flat. So your total payout would be two thousand seven hundred sixty-three dollars. I should also mention — would you prefer to take all of it in cash, or would you like a cashier's check for part of it? Carrying that much cash can be risky.",
            textZh: "这个金额的服务费是固定15美元。所以您最终拿到的是2763美元。我还想提一下——您是要全部拿现金，还是一部分开成本票？带这么多现金有风险。",
            keyPhrases: [
              { en: "fifteen dollars flat", zh: "固定15美元" },
              { en: "total payout", zh: "最终拿到的金额" },
              { en: "cashier's check", zh: "本票/银行支票" },
              { en: "carrying that much cash", zh: "带这么多现金" },
            ],
            alternativeExpressions: [
              { textEn: "The fee on this is a flat fifteen bucks, so you'd walk out with $2,763. Quick thought though — you sure you want all that in cash? We can do a cashier's check for some of it if you'd rather not carry that much around.", textZh: "手续费固定15块，所以你拿到手2763美元。不过说一下——你确定全拿现金吗？可以开本票，省得带这么多现金。", actionHint: "walk out with = 拿着走", frequency: "common" },
              { textEn: "Fifteen-dollar flat fee, bringing your total to $2,763. Just a suggestion — for that kind of money, you might want part of it as a cashier's check. Safer that way.", textZh: "固定15美元手续费，总共到手2763美元。建议一下——这么大金额，一部分开本票可能更安全。", actionHint: "that kind of money = 这么多钱", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good point. Could I take five hundred in cash and the rest as a cashier's check?",
            textZh: "说得对。我能拿500现金，剩下的开成本票吗？",
          },
          {
            speaker: "them",
            role: "兑换柜台工作人员",
            textEn: "Absolutely. The cashier's check will be made out in your name. You can deposit it at most banks or cash it with a valid ID. There's no additional charge for the check. Let me process everything — this will take about ten minutes.",
            textZh: "完全可以。本票会开在您的名下。您可以在大多数银行存入或凭有效证件兑现。开本票不额外收费。我来处理一下——大约需要十分钟。",
            keyPhrases: [
              { en: "made out in your name", zh: "开在您的名下" },
              { en: "deposit it", zh: "存入" },
              { en: "cash it", zh: "兑现" },
              { en: "valid ID", zh: "有效证件" },
              { en: "no additional charge", zh: "不额外收费" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing. The check goes in your name, and you can cash or deposit it at pretty much any bank. No extra charge for the check. Give me about ten minutes to get this all done.", textZh: "没问题。本票开你的名字，基本上任何银行都能兑现或存入。不额外收费。给我十分钟处理一下。", actionHint: "pretty much any = 几乎任何", frequency: "common" },
              { textEn: "No problem at all. I'll write the check to you — you can bank it anywhere with ID. And there's no fee for the check. Sit tight, this'll take about ten.", textZh: "完全没问题。本票开你名字——带证件去哪家银行都能用。本票不收费。稍等，大约十分钟。", actionHint: "sit tight = 稍等, bank it = 存入银行", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, I'll wait. One more question — if I have leftover dollars when I leave, can I exchange them back to yuan here?",
            textZh: "好的，我等着。再问一个问题——如果走的时候还有多余的美元，可以在这里换回人民币吗？",
          },
          {
            speaker: "them",
            role: "兑换柜台工作人员",
            textEn: "Yes, you can. Just bring the original receipt and your passport. The buy-back rate might be slightly different from today's, but we won't charge another service fee if you come back within thirty days.",
            textZh: "可以的。带上原始收据和护照就行。回购汇率可能和今天稍有不同，但如果三十天内来换，我们不再收服务费。",
            keyPhrases: [
              { en: "buy-back rate", zh: "回购汇率" },
              { en: "original receipt", zh: "原始收据" },
              { en: "within thirty days", zh: "三十天内" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, just hold on to that receipt and bring it back with your passport. The rate might shift a little, but we won't ding you with another fee if it's within 30 days.", textZh: "可以，收据留好带回来就行，还有护照。汇率可能会变一点，但30天内不再收手续费。", actionHint: "ding you with a fee = 收你费用（口语）", frequency: "common" },
              { textEn: "For sure. Come back with the receipt and your passport. Rate might be a tiny bit different, but no extra service charge as long as it's within a month.", textZh: "当然。带收据和护照回来就行。汇率可能有一点点差别，但一个月内不额外收服务费。", actionHint: "for sure = 当然可以", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 买手机SIM卡 ====================
  {
    id: "banking-sim",
    category: "banking",
    titleZh: "买手机SIM卡",
    titleEn: "Buying a SIM Card",
    description: "在国外购买预付费SIM卡，选择套餐，设置手机网络",
    otherRole: "手机店员",
    otherRoleIcon: "📱",
    flows: [
      // --- Flow 1: 买预付费SIM卡+选套餐 ---
      {
        id: "buy-sim",
        titleZh: "购买预付费SIM卡",
        titleEn: "Buying a Prepaid SIM Card",
        description: "在手机店购买旅游用预付费SIM卡，比较套餐和价格",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm visiting from China and I need a prepaid SIM card for my phone. What do you have available?",
            textZh: "你好，我从中国来旅游，需要买一张手机预付费SIM卡。你们有什么选择？",
            casualVersion: "Hey, I need a prepaid SIM. I'm here on vacation from China.",
          },
          {
            speaker: "them",
            role: "手机店员",
            textEn: "Welcome! We have a few prepaid options. How long will you be staying, and do you need mainly data, or calls and texts too?",
            textZh: "欢迎！我们有几种预付费选项。您要待多久？主要需要流量，还是也需要打电话和发短信？",
            variations: [
              { textEn: "Sure thing! How many days are you here for? And is it mostly for internet you need it?", textZh: "没问题！您在这里待几天？主要是用来上网吗？" },
            ],
            keyPhrases: [
              { en: "prepaid options", zh: "预付费选项" },
              { en: "data", zh: "流量/数据" },
              { en: "calls and texts", zh: "打电话和发短信" },
            ],
            alternativeExpressions: [
              { textEn: "Hey, welcome! So how long are you in town? And do you need data mostly, or are you gonna need to make calls too?", textZh: "嘿，欢迎！你在这待多久？主要用流量还是也需要打电话？", actionHint: "in town = 在这里/在城里", frequency: "common" },
              { textEn: "Cool, we've got you covered. What's your trip looking like — a week, two weeks? And are you mainly after data?", textZh: "没问题，包在我们身上。你的行程大概多久——一周，两周？主要是要流量吗？", actionHint: "we've got you covered = 我们能搞定", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll be here for about two weeks. Mostly data for maps and messaging apps, but I might need to make a few local calls too.",
            textZh: "大约待两周。主要用流量看地图和聊天软件，但可能也需要打几个本地电话。",
          },
          {
            speaker: "them",
            role: "手机店员",
            textEn: "For two weeks, I'd recommend our tourist plan — it's thirty-five dollars and includes ten gigs of high-speed data, unlimited texts, and a hundred minutes of local calls. Or we have a data-only plan at twenty-five dollars for eight gigs, no calls or texts.",
            textZh: "两周的话，我推荐我们的旅游套餐——35美元，包含10GB高速流量、无限短信和100分钟本地通话。或者我们有一个纯流量套餐，25美元8GB流量，没有通话和短信。",
            keyPhrases: [
              { en: "tourist plan", zh: "旅游套餐" },
              { en: "ten gigs", zh: "10GB" },
              { en: "high-speed data", zh: "高速流量" },
              { en: "unlimited texts", zh: "无限短信" },
              { en: "data-only plan", zh: "纯流量套餐" },
            ],
            culturalNote: "美国的\"gig\"是\"gigabyte（GB）\"的口语说法。10 gigs = 10GB。",
            alternativeExpressions: [
              { textEn: "Two weeks? I'd go with the tourist package — 35 bucks, 10 gigs, unlimited texting, and 100 minutes of talk. Or if you just need internet, there's a data-only deal for 25.", textZh: "两周？我推荐旅游包——35块，10个G，无限短信，100分钟通话。或者如果只要上网，有个纯流量的25块。", actionHint: "bucks = 美元, deal = 套餐/优惠", frequency: "common" },
              { textEn: "For a two-week trip, the sweet spot is our visitor plan at $35 — you get 10 gigs of fast data and some calling. There's also a cheaper option at $25 if you're fine with data only.", textZh: "两周旅行的话，最合适的是35美元的访客套餐——10G高速流量加一些通话。如果只要流量的话还有个25美元的便宜选项。", actionHint: "sweet spot = 最佳选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The tourist plan sounds good. What happens if I use up all the data before two weeks?",
            textZh: "旅游套餐听起来不错。如果两周内流量用完了怎么办？",
          },
          {
            speaker: "them",
            role: "手机店员",
            textEn: "After you use up your high-speed data, it doesn't cut off — it just slows down to 2G speeds. You can always top up with an extra gig for five dollars through our app or at any of our stores.",
            textZh: "高速流量用完后不会断网——只是降速到2G。您可以随时通过我们的app或在我们任何一家门店充值，5美元加1GB。",
            keyPhrases: [
              { en: "doesn't cut off", zh: "不会断网" },
              { en: "slows down", zh: "降速" },
              { en: "top up", zh: "充值" },
              { en: "extra gig", zh: "额外1GB" },
            ],
            alternativeExpressions: [
              { textEn: "It won't shut off or anything — you'll still have service, just slower. If you burn through it, you can always add more data for five bucks a gig on the app.", textZh: "不会断网什么的——还是有服务，就是慢一点。如果用完了可以在app上加流量，5块钱1个G。", actionHint: "burn through = 很快用完", frequency: "common" },
              { textEn: "You won't get cut off, don't worry. It just throttles down to 2G. And if you need more speed, five bucks gets you another gig.", textZh: "不会断网，别担心。就是降到2G速度。如果需要更快的，5块钱加1个G。", actionHint: "throttle down = 限速/降速", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, I'll take the tourist plan. Is my phone compatible? It's an iPhone.",
            textZh: "好的，我要旅游套餐。我的手机兼容吗？是iPhone。",
          },
          {
            speaker: "them",
            role: "手机店员",
            textEn: "iPhones generally work fine. I just need to check that yours is unlocked. Do you know if your phone is unlocked, or is it tied to a carrier in China?",
            textZh: "iPhone一般没问题。我只需要确认您的手机是解锁的。您知道手机有没有解锁，还是绑定了中国的运营商？",
            keyPhrases: [
              { en: "unlocked", zh: "解锁的" },
              { en: "tied to a carrier", zh: "绑定运营商" },
            ],
            culturalNote: "出国前一定要确认手机是\"无锁版\"（unlocked），否则无法使用当地SIM卡。中国行货iPhone通常是无锁的。",
            alternativeExpressions: [
              { textEn: "iPhones are usually good to go. The main thing is — is it unlocked? Like, is it locked to a Chinese carrier or can it take any SIM?", textZh: "iPhone通常没问题。关键是——是解锁的吗？锁了中国运营商还是可以用任何SIM卡？", actionHint: "good to go = 没问题/可以用", frequency: "common" },
              { textEn: "Should be fine with an iPhone. Just gotta make sure it's not carrier-locked. Do you know if it's an unlocked model?", textZh: "iPhone应该没问题。就得确认没有锁运营商。你知道是不是无锁版吗？", actionHint: "carrier-locked = 锁了运营商的", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, it's unlocked. I bought it outright in China.",
            textZh: "是解锁的。我在中国买的全价机。",
          },
          {
            speaker: "them",
            role: "手机店员",
            textEn: "Perfect. Let me pop in the new SIM card for you. You'll get a local US number. It should activate within a few minutes. I'll help you make sure the data connection is working before you leave.",
            textZh: "太好了。我帮您装上新的SIM卡。您会得到一个美国本地号码。几分钟内就能激活。在您离开前我会帮您确认流量连接正常。",
            keyPhrases: [
              { en: "pop in", zh: "装入" },
              { en: "local US number", zh: "美国本地号码" },
              { en: "activate", zh: "激活" },
              { en: "data connection", zh: "流量/数据连接" },
            ],
            alternativeExpressions: [
              { textEn: "Awesome, let me swap the SIM out for you real quick. You'll get a US number and it should be up and running in a couple minutes. I'll make sure everything's working before you head out.", textZh: "好的，我帮你快速换SIM卡。你会得到一个美国号码，几分钟就能用。走之前我确保一切正常。", actionHint: "up and running = 启动正常运行", frequency: "common" },
              { textEn: "Let me throw this SIM in for you. Give it a few minutes to activate and you'll be good to go with a local number.", textZh: "我帮你装SIM卡。等几分钟激活就有本地号码可以用了。", actionHint: "throw in = 装入（非常口语）, good to go = 可以用了", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, thank you. Should I save any number in case I need customer support?",
            textZh: "太好了，谢谢。我需要保存什么号码以防需要客服支持吗？",
          },
          {
            speaker: "them",
            role: "手机店员",
            textEn: "Yes, there's a customer service number on the back of the SIM card package — you can call 611 from your phone for free. Also, download our app — you can check your remaining data, top up, and get support right from there. You're all set!",
            textZh: "有的，SIM卡包装背面有客服号码——您可以从手机上免费拨打611。另外，下载我们的app——可以查看剩余流量、充值和获取支持。都搞定了！",
            keyPhrases: [
              { en: "call 611", zh: "拨打611" },
              { en: "remaining data", zh: "剩余流量" },
              { en: "you're all set", zh: "都搞定了" },
            ],
            alternativeExpressions: [
              { textEn: "Just dial 611 — it's free from your phone. And grab our app, it's super handy for checking your data and adding more if you need it. You're good to go!", textZh: "打611就行——从手机上打免费。下载我们的app，查流量和充值特别方便。你可以出发了！", actionHint: "grab our app = 下载我们的app, handy = 方便好用", frequency: "common" },
              { textEn: "If you ever need help, just call 611 — it won't cost you anything. Everything else you can do through the app. Alright, you're all good!", textZh: "需要帮忙就打611——不花钱。其他的都可以在app上搞定。好了，都弄好了！", actionHint: "you're all good = 都搞定了", frequency: "common" },
            ],
          },
        ],
      },

      // --- Flow 2: 手机无信号/设置问题 ---
      {
        id: "sim-issues",
        titleZh: "手机无信号/设置问题",
        titleEn: "No Signal / Setup Issues",
        description: "SIM卡装上后没有信号或上网有问题，需要排查",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I bought a SIM card here yesterday, but my phone still says \"No Service.\" I've restarted it several times.",
            textZh: "你好，我昨天在这里买了一张SIM卡，但手机一直显示\"无服务\"。我已经重启好几次了。",
          },
          {
            speaker: "them",
            role: "手机店员",
            textEn: "I'm sorry about that. Let me take a look. Can I see your phone for a moment? I'll check if the SIM card is seated properly.",
            textZh: "很抱歉出现这种情况。我来看看。能把手机给我看一下吗？我检查一下SIM卡有没有装好。",
            keyPhrases: [
              { en: "let me take a look", zh: "我来看看" },
              { en: "seated properly", zh: "装好/安装到位" },
            ],
            alternativeExpressions: [
              { textEn: "Oh, that's weird. Here, let me see your phone — might be a seating issue with the SIM.", textZh: "奇怪。给我看看手机——可能是SIM卡没装好。", actionHint: "seating issue = 安装不到位的问题", frequency: "common" },
              { textEn: "Hmm, that shouldn't be happening. Mind if I take a look? Could just be the SIM isn't in there right.", textZh: "嗯，不应该这样。我看看行吗？可能就是SIM卡没放好。", actionHint: "mind if I = 我可以...吗（礼貌问法）", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, here you go. I made sure to turn off my phone when I put the SIM in.",
            textZh: "好的，给你。我装SIM卡的时候确认关机了的。",
          },
          {
            speaker: "them",
            role: "手机店员",
            textEn: "The SIM looks fine physically. Let me check your phone settings. Hmm, it seems like your APN settings aren't configured correctly. That's a common issue with phones from overseas. I'll set it up for you.",
            textZh: "SIM卡物理上看起来没问题。我检查一下手机设置。嗯，看起来APN设置没有正确配置。这是海外手机常见的问题。我帮您设置。",
            keyPhrases: [
              { en: "APN settings", zh: "APN设置/接入点设置" },
              { en: "configured correctly", zh: "正确配置" },
              { en: "common issue", zh: "常见问题" },
              { en: "phones from overseas", zh: "海外的手机" },
            ],
            culturalNote: "APN（Access Point Name）是手机连接移动网络的配置参数。换SIM卡后如果不能上网，通常是APN没有自动配置。",
            alternativeExpressions: [
              { textEn: "SIM card looks good. Let me dig into your settings real quick... Ah, there it is — your APN isn't set up right. Super common with international phones. I'll fix it.", textZh: "SIM卡看着没问题。我快速看看设置……啊，找到了——APN没设置对。国际手机很常见的问题。我来修。", actionHint: "dig into = 深入查看, super common = 超级常见", frequency: "common" },
              { textEn: "The SIM's fine — it's a settings thing. Your APN needs to be updated. We see this all the time with phones from other countries. Gimme a sec and I'll sort it out.", textZh: "SIM卡没事——是设置问题。你的APN需要更新。我们经常遇到国外手机这种情况。等一下我帮你搞定。", actionHint: "gimme a sec = 等一下（口语）", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh, I didn't know I needed to change any settings. What exactly is APN?",
            textZh: "哦，我不知道还需要改设置。APN到底是什么？",
          },
          {
            speaker: "them",
            role: "手机店员",
            textEn: "APN stands for Access Point Name — it's basically the gateway that connects your phone to our mobile network for data. Different carriers have different APN settings. On your iPhone, go to Settings, then Cellular, then Cellular Data Network. I'll type in the correct values for you.",
            textZh: "APN是Access Point Name（接入点名称）的缩写——基本上就是连接手机到我们移动网络的网关。不同运营商有不同的APN设置。在您的iPhone上，进入设置，然后蜂窝网络，再点蜂窝数据网络。我来帮您输入正确的参数。",
            keyPhrases: [
              { en: "Access Point Name", zh: "接入点名称" },
              { en: "gateway", zh: "网关" },
              { en: "mobile network", zh: "移动网络" },
              { en: "Cellular Data Network", zh: "蜂窝数据网络" },
            ],
            alternativeExpressions: [
              { textEn: "So APN is basically like the address your phone uses to talk to our network. Every carrier has their own. Let me just punch in the right one for you — it'll take two seconds.", textZh: "APN基本上就是你手机连我们网络用的地址。每个运营商都不一样。我帮你输入正确的——两秒钟的事。", actionHint: "punch in = 输入（口语）", frequency: "common" },
              { textEn: "Think of APN as the settings your phone needs to connect to our data network. Each carrier is different. Here, let me just go into your settings and fix it real quick.", textZh: "APN就是手机连我们流量网络需要的设置。每个运营商不同。来，我进你设置里快速改一下。", actionHint: "用比喻解释技术概念", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. Oh wait — it now shows one bar of signal, but I still can't load any websites.",
            textZh: "谢谢。等一下——现在显示一格信号了，但还是打不开网页。",
          },
          {
            speaker: "them",
            role: "手机店员",
            textEn: "Let me check one more thing. Make sure \"Data Roaming\" is turned off and \"Cellular Data\" is turned on. Also, I notice you might still have your Chinese carrier's profile active. Let me remove that. Go to Settings, General, VPN & Device Management — do you see a profile from your Chinese carrier there?",
            textZh: "我再检查一个东西。确保\"数据漫游\"关闭了，\"蜂窝数据\"打开了。另外，我发现您可能还有中国运营商的配置文件处于激活状态。我帮您移除。进入设置、通用、VPN与设备管理——您看到那里有中国运营商的配置文件吗？",
            keyPhrases: [
              { en: "Data Roaming", zh: "数据漫游" },
              { en: "Cellular Data", zh: "蜂窝数据" },
              { en: "carrier profile", zh: "运营商配置文件" },
              { en: "VPN & Device Management", zh: "VPN与设备管理" },
            ],
            responseTip: "出国前建议移除中国运营商的描述文件，避免冲突。",
            alternativeExpressions: [
              { textEn: "Hang on, let me check something else. Turn off Data Roaming and make sure Cellular Data is on. Oh wait — you've still got your old carrier profile installed. That might be messing things up. Check under Settings, General, VPN & Device Management.", textZh: "等一下，我再看看别的。关掉数据漫游，确保蜂窝数据开着。等等——你还装着旧运营商的配置文件。可能就是这个在捣乱。看看设置、通用、VPN与设备管理。", actionHint: "messing things up = 搞乱/捣乱", frequency: "common" },
              { textEn: "One more thing — I think the issue is your old carrier profile is still on the phone and it's conflicting with our SIM. Go to Settings, General, then VPN & Device Management. See anything from your Chinese carrier?", textZh: "还有一件事——我觉得问题是你旧运营商的配置文件还在手机上跟我们的SIM卡冲突了。进设置、通用、VPN与设备管理。看到中国运营商的东西了吗？", actionHint: "conflicting with = 与...冲突", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I see a profile from China Mobile. Should I delete it?",
            textZh: "是的，我看到一个中国移动的配置文件。要删掉吗？",
          },
          {
            speaker: "them",
            role: "手机店员",
            textEn: "Yes, go ahead and remove it. Don't worry — you can reinstall it when you go back to China. After removing it, restart your phone one more time. That should fix the data issue.",
            textZh: "是的，删掉它。别担心——回中国的时候可以重新安装。删除后再重启一次手机。这应该就能解决流量问题了。",
            keyPhrases: [
              { en: "remove it", zh: "删除它" },
              { en: "reinstall", zh: "重新安装" },
              { en: "restart your phone", zh: "重启手机" },
              { en: "fix the data issue", zh: "解决流量问题" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, just delete it. No biggie — you can always add it back when you're home. Then do one more restart and you should be golden.", textZh: "删掉就行。没什么大不了的——回国的时候随时可以加回来。然后再重启一次应该就好了。", actionHint: "no biggie = 没什么大不了, you should be golden = 应该就没问题了", frequency: "common" },
              { textEn: "Go ahead and ditch that profile. You can get it back when you return to China. One more reboot and that should do the trick.", textZh: "删掉那个配置文件。回中国的时候可以重新装。再重启一次应该就搞定了。", actionHint: "ditch = 删掉/扔掉, do the trick = 解决问题", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's working now! Full signal and the internet is fast. Thank you so much.",
            textZh: "可以了！满格信号而且网速很快。太感谢了。",
          },
          {
            speaker: "them",
            role: "手机店员",
            textEn: "Glad to hear it! One more tip — if you ever lose signal in a building or underground, just toggle airplane mode on and off. That usually reconnects you quickly. Enjoy your trip!",
            textZh: "太好了！再告诉您一个小技巧——如果在建筑物里或地下信号不好，开关一下飞行模式就行。通常能快速重新连接。旅途愉快！",
            keyPhrases: [
              { en: "toggle airplane mode", zh: "开关飞行模式" },
              { en: "reconnects", zh: "重新连接" },
            ],
            alternativeExpressions: [
              { textEn: "Awesome! Quick pro tip — if your signal drops in a building or the subway, just flip airplane mode on and off. Gets you reconnected fast. Have a great trip!", textZh: "太棒了！小贴士——如果在楼里或地铁信号断了，开关一下飞行模式就行。能很快重新连接。玩得开心！", actionHint: "pro tip = 专业小贴士, flip on and off = 开关一下", frequency: "common" },
              { textEn: "Nice! Oh, and one little trick — if you lose bars somewhere, just do the airplane mode thing. Works like a charm. Enjoy!", textZh: "好了！还有个小技巧——如果信号没了，开关飞行模式就行。特别管用。玩得开心！", actionHint: "lose bars = 没信号, works like a charm = 特别管用", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 邮政/快递 ====================
  {
    id: "banking-post",
    category: "banking",
    titleZh: "邮政/快递",
    titleEn: "Post Office & Shipping",
    description: "在邮局寄包裹回国，了解邮寄方式、价格和海关规定",
    otherRole: "邮局工作人员",
    otherRoleIcon: "📦",
    flows: [
      // --- Flow 1: 寄包裹回国 ---
      {
        id: "send-package",
        titleZh: "寄包裹回国",
        titleEn: "Sending a Package Home",
        description: "在邮局寄包裹回中国的标准流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to send a package to China. Can you help me with that?",
            textZh: "你好，我想寄一个包裹到中国。能帮我办理吗？",
            casualVersion: "Hey, I need to mail a package to China.",
          },
          {
            speaker: "them",
            role: "邮局工作人员",
            textEn: "Of course! Is this a letter or a parcel? And do you know roughly how much it weighs?",
            textZh: "当然！这是信件还是包裹？您知道大概多重吗？",
            variations: [
              { textEn: "Sure, I can help with that. What are you sending and how big is it?", textZh: "没问题，我来帮您。您要寄什么，多大的？" },
            ],
            keyPhrases: [
              { en: "letter or parcel", zh: "信件还是包裹" },
              { en: "how much it weighs", zh: "多重" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing! What have you got — a letter or a package? Any idea how heavy it is?", textZh: "没问题！你寄什么——信还是包裹？知道多重吗？", actionHint: "what have you got 是很随意的问法", frequency: "common" },
              { textEn: "Absolutely. Is it a flat envelope or more of a box? And roughly how much does it weigh?", textZh: "完全可以。是平的信封还是盒子？大概多重？", actionHint: "flat envelope 区分信件和包裹", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's a parcel — some souvenirs and snacks I bought for my family. Maybe around three pounds? I'm not sure.",
            textZh: "是包裹——给家人买的一些纪念品和零食。大概三磅左右？我不太确定。",
          },
          {
            speaker: "them",
            role: "邮局工作人员",
            textEn: "No problem, let me weigh it for you. Let's see — it's three pounds and four ounces. For shipping to China, you have a few options. Priority Mail International takes six to ten business days and costs about forty-five dollars. First-Class Package International is cheaper at around twenty-eight dollars, but it takes two to four weeks.",
            textZh: "没问题，我帮您称一下。看看——3磅4盎司。寄到中国有几种选择。优先国际邮件需要6到10个工作日，大约45美元。国际一类包裹更便宜，大约28美元，但需要2到4周。",
            keyPhrases: [
              { en: "weigh it", zh: "称重" },
              { en: "three pounds and four ounces", zh: "3磅4盎司" },
              { en: "Priority Mail International", zh: "优先国际邮件" },
              { en: "six to ten business days", zh: "6到10个工作日" },
              { en: "First-Class Package International", zh: "国际一类包裹" },
              { en: "two to four weeks", zh: "2到4周" },
            ],
            culturalNote: "美国邮局USPS的国际邮寄比较贵。如果包裹不急，First-Class Package International性价比最高。也可以考虑华人快递公司，通常更便宜。",
            alternativeExpressions: [
              { textEn: "Let me throw it on the scale... Three pounds, four ounces. So for China, you've got two main options — Priority International at about 45 bucks, gets there in a week or two, or First-Class International at 28, but that'll take a month-ish.", textZh: "我放秤上称称……3磅4盎司。寄中国的话主要两个选择——优先国际大概45块，一两周到，或者国际一类28块，但得一个月左右。", actionHint: "throw it on the scale = 放秤上称, month-ish = 大约一个月", frequency: "common" },
              { textEn: "Coming in at three-four. For international to China, you're looking at Priority — about 45 dollars, 6 to 10 days — or First-Class, which is cheaper but slower, around 28 bucks.", textZh: "3磅4盎司。寄中国的话，有优先邮件——大约45美元，6到10天——或者一类包裹，便宜但慢一些，28块左右。", actionHint: "three-four 是简略说法=3磅4盎司", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with Priority Mail International. Is there tracking included?",
            textZh: "我选优先国际邮件。包含物流追踪吗？",
          },
          {
            speaker: "them",
            role: "邮局工作人员",
            textEn: "Yes, Priority Mail International includes tracking and up to two hundred dollars of insurance. Do you need to declare the value of the contents? There's a customs form you'll need to fill out.",
            textZh: "是的，优先国际邮件包含追踪和最高200美元的保险。您需要申报包裹内容的价值吗？您需要填一张海关申报表。",
            keyPhrases: [
              { en: "tracking", zh: "物流追踪" },
              { en: "insurance", zh: "保险" },
              { en: "declare the value", zh: "申报价值" },
              { en: "customs form", zh: "海关申报表" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, tracking comes with it, and you get up to two hundred bucks of insurance built in. You'll also need to fill out a customs form — just list what's inside and how much it's worth.", textZh: "对，自带追踪，而且包含最高200美元的保险。你还需要填海关申报表——写一下里面是什么和值多少钱。", actionHint: "built in = 内含的/自带的", frequency: "common" },
              { textEn: "Priority International has tracking and $200 of coverage included. For anything going international, there's also a customs declaration — you just need to say what's in the box and its value.", textZh: "优先国际有追踪和200美元保障。国际件都需要海关申报——说明包裹里有什么和价值多少。", actionHint: "coverage = 保障/保额", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay. What exactly do I write on the customs form? I've never filled one out before.",
            textZh: "好的。海关申报表具体写什么？我从来没填过。",
          },
          {
            speaker: "them",
            role: "邮局工作人员",
            textEn: "You'll need to list each item, its value, and its weight. For example, write \"souvenir keychains, 3 pieces, $15\" and \"snack food, 2 bags, $10.\" Mark the purpose as \"Gift\" if it's for family. Also write the total value and sign at the bottom.",
            textZh: "您需要列出每件物品、它的价值和重量。比如写\"souvenir keychains, 3 pieces, $15\"还有\"snack food, 2 bags, $10\"。如果是给家人的，目的勾选\"Gift\"。最后写上总价值并在底部签名。",
            keyPhrases: [
              { en: "list each item", zh: "列出每件物品" },
              { en: "its value", zh: "它的价值" },
              { en: "mark the purpose as Gift", zh: "目的标注为礼物" },
              { en: "total value", zh: "总价值" },
              { en: "sign at the bottom", zh: "在底部签名" },
            ],
            alternativeExpressions: [
              { textEn: "Just write down what's in there — like \"keychains, 3, $15\" and \"snacks, 2 bags, $10.\" Check \"Gift\" for the purpose since it's for family. Then add up the total and sign it.", textZh: "就写里面有什么——比如\"钥匙扣，3个，$15\"和\"零食，2袋，$10\"。用途勾\"Gift\"因为是给家人的。然后写总价签名。", actionHint: "简洁指导，可直接照着填", frequency: "common" },
              { textEn: "Pretty straightforward — item description, quantity, and dollar value for each thing. Put \"Gift\" as the reason. Total it up at the bottom and slap your signature on it.", textZh: "很简单——每样东西写描述、数量和价值。原因写\"Gift\"。底部加总然后签名就行。", actionHint: "slap your signature = 签上你的名（非常口语）", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Here's the completed form. Can I also get a receipt and the tracking number?",
            textZh: "明白了。表格填好了。能给我收据和追踪号码吗？",
          },
          {
            speaker: "them",
            role: "邮局工作人员",
            textEn: "Let me just seal this up for you. Your total is forty-five sixty. Here's your receipt with the tracking number. You can track it online at usps.com or on the USPS app. It usually clears Chinese customs within a few days after arrival.",
            textZh: "我帮您封好。总共是45.60美元。这是您的收据和追踪号码。您可以在usps.com或USPS app上追踪。到达后通常几天内就能通过中国海关。",
            keyPhrases: [
              { en: "seal this up", zh: "封好" },
              { en: "forty-five sixty", zh: "45.60美元" },
              { en: "tracking number", zh: "追踪号码" },
              { en: "track it online", zh: "网上追踪" },
              { en: "clears customs", zh: "通过海关" },
            ],
            alternativeExpressions: [
              { textEn: "I'll tape this up for you. That'll be $45.60. Here's your tracking info — you can follow it on usps.com or the app. Once it hits China, customs usually only takes a few days.", textZh: "我帮你封好。一共45.60美元。这是追踪信息——可以在usps.com或app上跟踪。到了中国之后海关通常就几天。", actionHint: "hits China = 到达中国（口语）", frequency: "common" },
              { textEn: "All sealed up. Your total comes to forty-five sixty. Tracking number's right here on the receipt — check the USPS website or app to keep tabs on it.", textZh: "封好了。一共45.60美元。追踪号在收据上——用USPS网站或app关注进度。", actionHint: "keep tabs on it = 关注/跟踪进度", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you very much. One last thing — are there any items I shouldn't send to China?",
            textZh: "非常感谢。最后问一下——有什么东西不能寄到中国吗？",
          },
          {
            speaker: "them",
            role: "邮局工作人员",
            textEn: "Good question. You can't send perishable food, lithium batteries, liquids over a certain amount, or any kind of plant or animal products without special permits. China also restricts the import of certain supplements and medications. When in doubt, check the USPS website for the full list of prohibited items.",
            textZh: "好问题。不能寄易腐食品、锂电池、超过一定量的液体，以及任何没有特别许可的动植物产品。中国还限制进口某些保健品和药品。不确定的话，查看USPS网站上的完整禁运物品清单。",
            keyPhrases: [
              { en: "perishable food", zh: "易腐食品" },
              { en: "lithium batteries", zh: "锂电池" },
              { en: "special permits", zh: "特别许可" },
              { en: "prohibited items", zh: "禁运物品" },
            ],
            alternativeExpressions: [
              { textEn: "Oh yeah — no perishables, no batteries, and nothing liquid over a certain size. Plants and animal stuff need permits. Also China has its own rules on vitamins and meds coming in. The USPS site has the full no-no list.", textZh: "对了——不能寄易腐食品、电池、超量液体。动植物需要许可。中国对维生素和药品进口也有规定。USPS网站有完整的禁寄清单。", actionHint: "no-no list = 禁止清单（口语化）", frequency: "common" },
              { textEn: "The big ones to avoid: anything perishable, lithium batteries, large quantities of liquid, and plants or animal products. China's also strict on supplements. If you're not sure, the USPS website breaks it all down.", textZh: "主要要避免的：易腐品、锂电池、大量液体和动植物产品。中国对保健品也很严格。不确定的话USPS网站上有详细说明。", actionHint: "breaks it all down = 详细列出", frequency: "common" },
            ],
          },
        ],
      },

      // --- Flow 2: 寄贵重物品/保价/海关申报 ---
      {
        id: "valuable-shipping",
        titleZh: "寄贵重物品与保价",
        titleEn: "Shipping Valuables & Insurance",
        description: "寄贵重物品回国，了解保价和详细海关申报要求",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I need to ship something valuable back to China — a designer handbag I bought as a gift. It's worth about eight hundred dollars. What's the safest way to send it?",
            textZh: "我需要把一件贵重物品寄回中国——买的一个名牌手袋作为礼物。价值大约800美元。最安全的寄送方式是什么？",
          },
          {
            speaker: "them",
            role: "邮局工作人员",
            textEn: "For something that valuable, I'd recommend Priority Mail Express International. It's the fastest and most secure option — delivery in three to five business days with full tracking and a signature required on delivery. It also includes up to two hundred dollars of free insurance.",
            textZh: "这么贵重的物品，我建议用特快国际邮件。这是最快最安全的选择——3到5个工作日送达，全程追踪，送达时需要签收。还包含最高200美元的免费保险。",
            keyPhrases: [
              { en: "Priority Mail Express International", zh: "特快国际邮件" },
              { en: "three to five business days", zh: "3到5个工作日" },
              { en: "signature required on delivery", zh: "送达时需要签收" },
              { en: "free insurance", zh: "免费保险" },
            ],
            alternativeExpressions: [
              { textEn: "For an $800 bag, you definitely want Express International. It's pricier but way more secure — tracked the whole way, someone has to sign for it, and it comes with $200 of insurance baked in.", textZh: "800美元的包的话，你肯定要用特快国际。贵一些但安全多了——全程追踪，必须签收，自带200美元保险。", actionHint: "baked in = 内含的/自带的", frequency: "common" },
              { textEn: "With something that pricey, I'd go Express International for sure. Gets there in 3 to 5 days, full tracking, and they need to sign for it. Plus you get $200 of insurance included.", textZh: "这么贵的东西我肯定推荐特快国际。3到5天到，全程追踪，而且得签收。还自带200美元保险。", actionHint: "that pricey = 这么贵的", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "But the free insurance only covers two hundred dollars? The bag is worth eight hundred. Can I buy additional insurance?",
            textZh: "但免费保险只保200美元？手袋值800美元。能买额外保险吗？",
          },
          {
            speaker: "them",
            role: "邮局工作人员",
            textEn: "Yes, absolutely. You can purchase additional insurance to cover the full declared value. For eight hundred dollars of coverage, the extra insurance would be about eighteen dollars. I'd strongly recommend it for an item like this. You'll also need to keep your purchase receipt as proof of value in case you need to file a claim.",
            textZh: "可以的。您可以购买额外保险来覆盖全部申报价值。保800美元的话，额外保险大约18美元。像这样的物品，我强烈建议买保险。您还需要保留购买收据作为价值证明，以防需要理赔。",
            keyPhrases: [
              { en: "additional insurance", zh: "额外保险" },
              { en: "declared value", zh: "申报价值" },
              { en: "coverage", zh: "保额" },
              { en: "proof of value", zh: "价值证明" },
              { en: "file a claim", zh: "理赔" },
            ],
            alternativeExpressions: [
              { textEn: "For sure. Extra insurance to cover the full 800 would run you about 18 bucks. Totally worth it for a designer bag. Just make sure you keep the receipt — you'll need it if anything goes wrong.", textZh: "当然可以。保到800美元的额外保险大约18块。名牌包绝对值得买。收据一定留好——万一出问题需要用到。", actionHint: "run you about = 大约花费你", frequency: "common" },
              { textEn: "Oh yeah, you can add insurance for the full amount. It's only 18 dollars for $800 coverage — no-brainer for something like this. And hang on to your purchase receipt just in case.", textZh: "可以的，可以加保到全额。800美元保额才18块——这种东西不买白不买。购买收据留好以防万一。", actionHint: "no-brainer = 不用想的/当然要", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the extra insurance. Now, for the customs form — should I declare the full value? I heard that might cause issues with Chinese customs.",
            textZh: "我要额外保险。那海关申报表呢——要如实申报全部价值吗？我听说这可能在中国海关那边有问题。",
          },
          {
            speaker: "them",
            role: "邮局工作人员",
            textEn: "You should always declare the actual value — it's required by law, and if you under-declare and need to make an insurance claim, your claim could be denied. As for Chinese customs, personal gifts under a certain value threshold usually pass through without any duty. But if the declared value exceeds that limit, the recipient might have to pay import tax.",
            textZh: "您应该如实申报实际价值——这是法律要求。如果少报了又需要理赔，您的理赔可能会被拒绝。至于中国海关，个人礼物低于一定价值门槛通常可以免税通过。但如果申报价值超过限额，收件人可能需要缴纳进口税。",
            keyPhrases: [
              { en: "declare the actual value", zh: "如实申报价值" },
              { en: "required by law", zh: "法律要求" },
              { en: "under-declare", zh: "少报" },
              { en: "claim could be denied", zh: "理赔可能被拒" },
              { en: "value threshold", zh: "价值门槛" },
              { en: "import tax", zh: "进口税" },
            ],
            culturalNote: "中国海关对个人物品有免税额度（通常1000元人民币以内），超过可能需要缴税。如实申报很重要，否则可能被扣押。",
            alternativeExpressions: [
              { textEn: "Always put the real value — the law says you have to, and if you lowball it and something happens, insurance won't pay out. Chinese customs might charge import duty above a certain amount, but that's on the receiving end.", textZh: "一定写真实价值——法律要求的，而且如果你写低了出了事保险不赔。中国海关超过一定金额可能收进口税，但那是收件方的事。", actionHint: "lowball = 故意报低, pay out = 赔付", frequency: "common" },
              { textEn: "Don't fudge the numbers — declare the real amount. If you under-report and something gets lost or damaged, you won't get your money back. As for duties on the Chinese side, gifts under a certain threshold are usually fine.", textZh: "不要虚报——写真实金额。如果少报了东西丢了或损坏了，你拿不到赔偿。中国那边的关税，低于一定门槛的礼物通常没问题。", actionHint: "fudge the numbers = 虚报/造假", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I understand. I'll declare the full value. What should I write as the item description on the customs form?",
            textZh: "明白了。我如实申报全部价值。海关申报表上物品描述怎么写？",
          },
          {
            speaker: "them",
            role: "邮局工作人员",
            textEn: "Be specific but simple. Write \"leather handbag\" along with the brand name, quantity — just one — and the value: eight hundred dollars. Under \"Purpose,\" mark it as \"Gift.\" Don't use vague descriptions like \"accessories\" — customs officers may open the package for inspection if the description is unclear.",
            textZh: "写具体但简洁。写\"leather handbag\"加上品牌名、数量——1件——和价值：800美元。在\"用途\"下面勾选\"Gift\"。不要用\"accessories\"这种模糊描述——如果描述不清楚，海关人员可能会开箱检查。",
            keyPhrases: [
              { en: "specific but simple", zh: "具体但简洁" },
              { en: "brand name", zh: "品牌名" },
              { en: "vague descriptions", zh: "模糊描述" },
              { en: "inspection", zh: "检查" },
            ],
            alternativeExpressions: [
              { textEn: "Keep it clear and to the point. \"Leather handbag, [brand], 1 piece, $800.\" Put \"Gift\" as the purpose. Don't be too vague or customs might flag it and open the box.", textZh: "写清楚直接就行。\"皮手袋，[品牌]，1件，$800\"。用途写\"Gift\"。别太笼统不然海关可能标记开箱。", actionHint: "flag it = 标记/注意", frequency: "common" },
              { textEn: "Just be straight about it — \"leather handbag\" with the brand, one piece, $800, purpose: gift. If you write something generic like \"accessories,\" that raises red flags and they'll open it up.", textZh: "就直说——\"皮手袋\"加品牌名，1件，$800，用途：礼物。如果写个笼统的比如\"配饰\"，会引起注意然后被开箱。", actionHint: "raises red flags = 引起警觉/注意", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Is there anything special I should do to pack it? I want to make sure it arrives safely.",
            textZh: "明白了。包装上有什么特别注意的吗？我想确保安全到达。",
          },
          {
            speaker: "them",
            role: "邮局工作人员",
            textEn: "Wrap the handbag in bubble wrap and place it in a sturdy box. Fill any empty space with packing paper so it doesn't shift around. We sell bubble wrap, tape, and boxes here if you need any. For a valuable item, I'd also recommend marking the box as \"Fragile\" — I can give you a sticker for that.",
            textZh: "用气泡膜包好手袋，放进一个结实的箱子里。用包装纸填满空隙，防止晃动。如果您需要的话，我们这里卖气泡膜、胶带和箱子。贵重物品的话，我还建议在箱子上贴\"易碎\"标签——我可以给您一个贴纸。",
            keyPhrases: [
              { en: "bubble wrap", zh: "气泡膜" },
              { en: "sturdy box", zh: "结实的箱子" },
              { en: "packing paper", zh: "包装纸" },
              { en: "doesn't shift around", zh: "不会晃动" },
              { en: "Fragile", zh: "易碎" },
            ],
            alternativeExpressions: [
              { textEn: "Bubble wrap it good, stick it in a solid box, and stuff the gaps with paper so it doesn't bounce around. We've got packing supplies here if you need 'em. And I'll slap a \"Fragile\" sticker on it for you.", textZh: "用气泡膜包好，放进结实的箱子，空隙用纸塞满别晃来晃去。我们这有包装材料。我帮你贴个\"易碎\"贴。", actionHint: "stuff the gaps = 塞满空隙, bounce around = 晃来晃去", frequency: "common" },
              { textEn: "You'll want plenty of bubble wrap, a good sturdy box, and fill in the dead space. We sell all that stuff right here. For something this valuable, let me put a Fragile label on it too.", textZh: "多用气泡膜，找个结实的箱子，把空的地方填满。这些东西我们都有卖。这么贵重的东西我帮你贴个易碎标签。", actionHint: "dead space = 空隙/多余空间", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take a box and some bubble wrap. What's the total cost including shipping and insurance?",
            textZh: "我要一个箱子和一些气泡膜。包括运费和保险在内一共多少钱？",
          },
          {
            speaker: "them",
            role: "邮局工作人员",
            textEn: "Let me add it all up. The Express International shipping is sixty-seven fifty, extra insurance for eight hundred dollars of coverage is eighteen dollars, the box is three fifty, and the bubble wrap is two dollars. Your total comes to ninety-one dollars even. Would you like to pay by card?",
            textZh: "我加一下。特快国际运费67.50美元，800美元保额的额外保险18美元，箱子3.50美元，气泡膜2美元。总共91美元整。刷卡吗？",
            keyPhrases: [
              { en: "add it all up", zh: "加起来" },
              { en: "total comes to", zh: "总共是" },
              { en: "ninety-one dollars even", zh: "91美元整" },
            ],
            alternativeExpressions: [
              { textEn: "Alright, let me tally this up — shipping's $67.50, insurance is $18, box $3.50, bubble wrap $2. Grand total: $91 even. Cash or card?", textZh: "好的，我算一下——运费67.50，保险18，箱子3.50，气泡膜2块。总共91美元整。现金还是刷卡？", actionHint: "tally up = 合计, grand total = 总计", frequency: "common" },
              { textEn: "So that's 67.50 for shipping, 18 for insurance, 3.50 for the box, and 2 for the wrap. Ninety-one bucks total. How do you wanna pay?", textZh: "运费67.50，保险18，箱子3.50，气泡膜2块。一共91块。怎么付？", actionHint: "how do you wanna pay 非常日常的问法", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, card please. And I'll need the tracking number and insurance receipt.",
            textZh: "好的，刷卡。我需要追踪号码和保险收据。",
          },
          {
            speaker: "them",
            role: "邮局工作人员",
            textEn: "Here's everything — your tracking number, insurance documentation, and payment receipt. Keep all of these together. If anything happens during shipping, call 1-800-ASK-USPS or go to usps.com to start a claim. The package should arrive within five business days. Safe travels!",
            textZh: "这些都给您——追踪号码、保险凭证和付款收据。把这些放在一起保管好。如果运输过程中有任何问题，打1-800-ASK-USPS或去usps.com发起理赔。包裹应该在5个工作日内到达。旅途平安！",
            keyPhrases: [
              { en: "insurance documentation", zh: "保险凭证" },
              { en: "payment receipt", zh: "付款收据" },
              { en: "start a claim", zh: "发起理赔" },
              { en: "safe travels", zh: "旅途平安" },
            ],
            alternativeExpressions: [
              { textEn: "Here you go — tracking, insurance papers, and your receipt. Keep 'em all together. If anything goes sideways, call the USPS hotline or go online to file a claim. Should be there in about five days. Have a great trip!", textZh: "给你——追踪号、保险文件和收据。放一起保管好。如果出了问题打USPS热线或在线理赔。大约五天到。旅途愉快！", actionHint: "goes sideways = 出问题", frequency: "common" },
              { textEn: "All set! Here's your paperwork — tracking, insurance, and the receipt. Hold on to all of that. Any issues, just reach out to USPS. Should land in China in five business days. Take care!", textZh: "搞定了！这是你的文件——追踪号、保险和收据。都留好。有问题就联系USPS。五个工作日到中国。保重！", actionHint: "land in China = 到达中国", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 国际汇款 ====================
  {
    id: "banking-wire",
    category: "banking",
    titleZh: "国际汇款",
    titleEn: "International Wire Transfer",
    description: "在银行办理国际汇款，了解手续费、汇率和到账时间",
    otherRole: "银行柜员",
    otherRoleIcon: "🏦",
    flows: [
      // --- Flow 1: 标准汇款流程 ---
      {
        id: "wire-standard",
        titleZh: "办理国际汇款",
        titleEn: "Standard Wire Transfer",
        description: "在银行柜台办理国际汇款的完整流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to send money to China. Can I do an international wire transfer here?",
            textZh: "你好，我需要汇钱到中国。可以在这里办理国际汇款吗？",
            casualVersion: "Hey, I need to wire some money to China. Can you help?",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Yes, we can help with that. Do you have an account with us, or would you like to do a walk-in wire transfer? Walk-in transfers have a slightly higher fee.",
            textZh: "可以的。您在我们银行有账户吗，还是要办理临柜汇款？临柜汇款手续费稍高一些。",
            keyPhrases: [
              { en: "international wire transfer", zh: "国际汇款" },
              { en: "walk-in wire transfer", zh: "临柜汇款" },
              { en: "slightly higher fee", zh: "手续费稍高" },
            ],
            variations: [
              { textEn: "Of course. Are you an existing customer? Account holders get a better rate on wire transfers.", textZh: "当然可以。您是我们的客户吗？有账户的话汇款费率更优惠。" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, we do international wires. Do you bank with us? If not, no worries — we can still do it, just costs a bit more.", textZh: "可以，我们办国际汇款。你在我们这开户了吗？没有也没关系——一样能办，就是费用高一点。", actionHint: "bank with us = 在我们这开户", frequency: "common" },
              { textEn: "Absolutely. Are you one of our customers, or is this a one-time thing? Non-customers can do walk-in wires too, just with a higher fee.", textZh: "当然可以。你是我们的客户还是临时来办的？非客户也能办临柜汇款，就是手续费高一些。", actionHint: "one-time thing = 临时/一次性的", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I don't have an account here. How much is the fee for a walk-in transfer?",
            textZh: "我没有账户。临柜汇款手续费多少？",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "The wire transfer fee is $45 for non-account holders. The recipient's bank in China may also charge a receiving fee — typically around $10 to $20. And there's the exchange rate to consider. Our current rate is 1 dollar to 7.18 yuan.",
            textZh: "非账户客户的汇款手续费是45美元。中国收款银行也可能收一笔接收费——通常10到20美元左右。还要考虑汇率。我们目前的汇率是1美元兑7.18元人民币。",
            keyPhrases: [
              { en: "wire transfer fee", zh: "汇款手续费" },
              { en: "non-account holders", zh: "非账户客户" },
              { en: "receiving fee", zh: "接收费" },
              { en: "exchange rate", zh: "汇率" },
            ],
            alternativeExpressions: [
              { textEn: "It's 45 bucks for the wire if you don't have an account. On top of that, the bank on the other end usually takes a cut — 10 to 20 dollars. And then there's the exchange rate — we're at 7.18 yuan to the dollar right now.", textZh: "没有账户的话汇款费45块。另外对方银行通常也会扣一笔——10到20美元。然后就是汇率——我们现在是7.18人民币兑1美元。", actionHint: "takes a cut = 收一笔费用（口语）", frequency: "common" },
              { textEn: "For walk-in customers, the fee is $45. Keep in mind, the receiving bank might charge their own fee too — usually 10 to 20 bucks. Our exchange rate today is 7.18.", textZh: "临柜客户手续费45美元。注意收款银行可能也会收费——通常10到20块。我们今天的汇率是7.18。", actionHint: "keep in mind = 注意/记住", frequency: "common" },
            ],
            vocabNotes: {
              "exchange rate": {
                meaningInContext: "在这句话里表示：货币兑换比率，一种货币换另一种货币的价格",
                similarUsage: "类似用法：The exchange rate changes daily.",
              },
            },
            culturalNote: "银行给的汇率通常比市场中间价差一些，这个差价也是银行的收入之一。可以对比几家银行的汇率再决定。",
          },
          {
            speaker: "you",
            textEn: "That exchange rate seems a bit low. Is that negotiable, or is there a better option?",
            textZh: "这个汇率好像有点低。可以商量吗，或者有更好的选择吗？",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "The rate is set by the bank and updates daily — unfortunately it's not negotiable for individual transfers. If you're sending over $5,000, we do offer a slightly better rate. You could also consider using a service like Wise or Western Union — they sometimes offer more competitive rates.",
            textZh: "汇率由银行设定，每天更新——单笔汇款很遗憾不能协商。如果汇款超过5000美元，我们确实提供稍好的汇率。您也可以考虑使用Wise或西联汇款等服务——它们有时候汇率更有竞争力。",
            keyPhrases: [
              { en: "not negotiable", zh: "不能协商" },
              { en: "updates daily", zh: "每天更新" },
              { en: "more competitive rates", zh: "更有竞争力的汇率" },
            ],
            alternativeExpressions: [
              { textEn: "Unfortunately I can't budge on the rate — it's set by the bank and changes every day. For bigger amounts over $5K, we do sweeten the deal a bit. Or you could shop around — Wise and those online services sometimes beat our rate.", textZh: "很遗憾汇率我动不了——银行定的，每天变。超过5000的大额我们会给好一点的价。或者你可以比比价——Wise那些线上服务有时候比我们好。", actionHint: "can't budge = 无法变动, sweeten the deal = 给更好的条件", frequency: "common" },
              { textEn: "It's a fixed rate — same for everyone, updates daily. Over five grand, they give us a little wiggle room on the rate. But honestly, places like Wise might give you a better deal for smaller amounts.", textZh: "固定汇率——所有人一样，每天更新。超过五千他们给我们一点调整空间。说实话，Wise那些平台小额汇款可能更划算。", actionHint: "wiggle room = 调整余地", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go ahead with the transfer here. I want to send $2,000. What information do I need from the recipient?",
            textZh: "那就在这里汇吧。我要汇2000美元。需要收款方的什么信息？",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "I'll need the recipient's full name — in English and Chinese characters if possible — their bank name, bank address, account number, and the bank's SWIFT code. Do you have all of that?",
            textZh: "我需要收款人的全名——如果可以的话提供英文和中文名——收款银行名称、银行地址、账号和银行的SWIFT代码。这些信息您都有吗？",
            keyPhrases: [
              { en: "recipient's full name", zh: "收款人全名" },
              { en: "bank name", zh: "银行名称" },
              { en: "account number", zh: "账号" },
              { en: "SWIFT code", zh: "SWIFT代码" },
            ],
            culturalNote: "SWIFT code 是银行的国际识别码，跨国汇款必需。中国各银行的SWIFT code可以在银行官网查到或提前问好收款人。",
            alternativeExpressions: [
              { textEn: "I'm gonna need a few things — the person's full name in English and Chinese if you've got it, their bank info, account number, and the SWIFT code. Got all that handy?", textZh: "我需要几样东西——收款人中英文全名、银行信息、账号和SWIFT代码。手边都有吗？", actionHint: "got all that handy = 手边都有吗", frequency: "common" },
              { textEn: "To set up the wire, I need the recipient's name, their bank's name and address, the account number, and the SWIFT code. The SWIFT code is like the bank's international ID — do you have it?", textZh: "办理汇款的话我需要收款人姓名、银行名称和地址、账号以及SWIFT代码。SWIFT代码就是银行的国际识别码——你有吗？", actionHint: "用简单比喻解释SWIFT code", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I have it all here on my phone. How long will it take for the money to arrive?",
            textZh: "有的，都在手机上。钱多久能到？",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "International wire transfers to China typically take 2 to 5 business days. Occasionally it can take a bit longer if the receiving bank needs to verify the transaction. You'll receive a confirmation number — keep it for your records. If the money hasn't arrived after 5 business days, contact us with that number.",
            textZh: "汇往中国的国际汇款通常需要2到5个工作日。如果收款银行需要核实交易，偶尔会稍长一些。您会收到一个确认号——请保留好。如果5个工作日后钱还没到，带着那个号码联系我们。",
            keyPhrases: [
              { en: "2 to 5 business days", zh: "2到5个工作日" },
              { en: "verify the transaction", zh: "核实交易" },
              { en: "confirmation number", zh: "确认号" },
              { en: "keep it for your records", zh: "请保留好" },
            ],
            alternativeExpressions: [
              { textEn: "Usually lands in 2 to 5 business days. Sometimes the bank on the other end needs to do some checks, so it could take a little longer. You'll get a confirmation number — hang on to that. If nothing shows up after 5 days, give us a call.", textZh: "通常2到5个工作日到。有时候对方银行需要核查，可能会久一点。你会拿到确认号——留好。5天后还没到就打电话给我们。", actionHint: "lands = 到达（口语）, shows up = 出现/到账", frequency: "common" },
              { textEn: "For China, figure 2 to 5 business days. Could be a touch longer if their bank flags it for review. I'll give you a confirmation number — don't lose it, you'll need it if there's a hiccup.", textZh: "寄到中国的话大概2到5个工作日。如果他们银行要审查可能稍长一点。我给你确认号——别弄丢了，出问题的时候需要。", actionHint: "a touch longer = 稍长一点, hiccup = 小问题", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. So the total cost is $2,000 plus the $45 fee — $2,045 altogether?",
            textZh: "明白了。那总费用是2000美元加上45美元手续费——一共2045美元？",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "That's correct. The recipient will receive approximately 14,360 yuan after our exchange rate conversion. Would you like to proceed? I'll need a valid photo ID to complete the transfer.",
            textZh: "没错。按我们的汇率换算，收款人将收到大约14360元人民币。要办理吗？我需要一个有效的带照片证件来完成汇款。",
            keyPhrases: [
              { en: "approximately", zh: "大约" },
              { en: "exchange rate conversion", zh: "汇率换算" },
              { en: "proceed", zh: "继续办理" },
              { en: "valid photo ID", zh: "有效的带照片证件" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, $2,045 total. On the other end, they'll get about 14,360 yuan. Wanna go ahead with it? Just need to see a photo ID.", textZh: "对，一共2045美元。对方会收到大约14360元人民币。要继续吗？出示一下带照片的证件就行。", actionHint: "wanna go ahead = 要继续吗（口语）", frequency: "common" },
              { textEn: "That's right — $2,045 from you, and roughly 14,360 yuan arrives on the other side. Ready to pull the trigger? I just need a valid ID with a photo.", textZh: "对的——你这边2045美元，对方收到大约14360人民币。确定要办吗？我只需要一个带照片的有效证件。", actionHint: "pull the trigger = 做决定/确认办理", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, let's do it. Here's my passport.",
            textZh: "好的，办吧。这是我的护照。",
          },
        ],
      },

      // --- Flow 2: 汇款出问题/退款 ---
      {
        id: "wire-issues",
        titleZh: "汇款问题处理",
        titleEn: "Wire Transfer Issues",
        description: "汇款后出现问题，如钱没到账、信息填错等的处理流程",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I sent a wire transfer to China five days ago and the money still hasn't arrived. Here's my confirmation number.",
            textZh: "你好，我五天前汇了一笔钱到中国，钱还没到。这是我的确认号。",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Let me look that up for you... I can see the transfer was initiated on Monday. It shows as \"in process\" on our end. Sometimes international transfers get held up by intermediary banks — there's often a correspondent bank between us and the Chinese bank.",
            textZh: "我帮您查一下……可以看到汇款是周一发起的。在我们这边显示\"处理中\"。国际汇款有时候会在中间行那里卡住——我们和中国银行之间通常有一个代理行。",
            keyPhrases: [
              { en: "look that up", zh: "帮您查一下" },
              { en: "initiated", zh: "发起的" },
              { en: "in process", zh: "处理中" },
              { en: "intermediary banks", zh: "中间行" },
              { en: "correspondent bank", zh: "代理行" },
            ],
            alternativeExpressions: [
              { textEn: "Let me pull that up... Okay, it went out Monday and it's still showing \"in process.\" That happens sometimes — international wires go through a middleman bank, and they can slow things down.", textZh: "我查一下……好的，周一发出的，还在显示\"处理中\"。有时候就这样——国际汇款要经过中间银行，会慢一些。", actionHint: "pull that up = 查一下, middleman bank = 中间银行（口语）", frequency: "common" },
              { textEn: "Give me a sec to look into it... So the wire was sent Monday, and on our side it says \"processing.\" International transfers sometimes get stuck at the correspondent bank — that's the bank in between.", textZh: "等我查查……汇款周一发出的，我们这边显示\"处理中\"。国际汇款有时候会卡在代理行——就是中间的那个银行。", actionHint: "get stuck = 卡住", frequency: "common" },
            ],
            vocabNotes: {
              "correspondent bank": {
                meaningInContext: "在这句话里表示：在国际汇款中充当中间人角色的银行，帮助完成跨国资金转移",
                similarUsage: "类似用法：The delay was caused by the correspondent bank in Hong Kong.",
              },
            },
          },
          {
            speaker: "you",
            textEn: "Is there any way to track where the money is right now?",
            textZh: "有办法追踪钱现在在哪里吗？",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "I can submit a trace request — that will follow the money through the SWIFT network. It usually takes 24 to 48 hours to get a response. There may be a $25 trace fee. Would you like me to do that?",
            textZh: "我可以提交一个追踪请求——会通过SWIFT网络追查这笔钱。通常24到48小时内有回复。可能需要25美元的追踪费。要我办理吗？",
            keyPhrases: [
              { en: "trace request", zh: "追踪请求" },
              { en: "SWIFT network", zh: "SWIFT网络" },
              { en: "trace fee", zh: "追踪费" },
            ],
            alternativeExpressions: [
              { textEn: "What I can do is put in a trace — basically track where your money is in the SWIFT system. Takes about a day or two to hear back. There's a $25 fee for that. Want me to go ahead?", textZh: "我能做的是提交追踪——基本上就是在SWIFT系统里查你的钱在哪。大概一两天有回复。收25美元。要我办吗？", actionHint: "put in a trace = 提交追踪", frequency: "common" },
              { textEn: "I can file a trace on the wire — it pings the SWIFT network to find out exactly where the funds are. Usually 24 to 48 hours for a reply. It'll be 25 bucks though. Should I?", textZh: "我可以对这笔汇款发起追踪——通过SWIFT网络定位资金在哪。通常24到48小时有回复。不过要25块。需要吗？", actionHint: "pings = 发送请求查询", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please do that. Also, I just realized I may have given you the wrong account number. Is it possible to correct it?",
            textZh: "好的，请帮我办。另外，我刚发现账号可能给错了。能改吗？",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "If the transfer hasn't been credited to the wrong account yet, we may be able to amend it. But if it's already been deposited, we'll need to initiate a recall — and that can take several weeks. The recall fee is $35. Can you give me the correct account number so I can compare?",
            textZh: "如果汇款还没入错误的账户，我们也许能修改。但如果已经入账了，我们需要发起一个撤回——那可能需要几周。撤回费用是35美元。能给我正确的账号比对一下吗？",
            keyPhrases: [
              { en: "credited to", zh: "入账到" },
              { en: "amend", zh: "修改" },
              { en: "recall", zh: "撤回" },
              { en: "recall fee", zh: "撤回费用" },
            ],
            alternativeExpressions: [
              { textEn: "If the money hasn't landed in the wrong account yet, we might be able to fix the details. But if it's already gone through, we'd have to do a recall, which takes weeks and costs $35. What's the right account number?", textZh: "如果钱还没到错误的账户，我们也许能改信息。但如果已经入账了就得撤回，要花几周而且收35美元。正确账号是什么？", actionHint: "landed in = 到达/入账, gone through = 已完成", frequency: "common" },
              { textEn: "We might be able to correct it if it hasn't hit the wrong account yet. Otherwise, it's a recall situation — that's $35 and a few weeks. Let me see the correct number so I can check.", textZh: "如果还没到错误账户我们也许能改。不然就得走撤回流程——35美元等几周。给我正确账号我查查。", actionHint: "recall situation = 需要撤回的情况", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's the correct number. The last two digits were swapped. I'm so sorry about this.",
            textZh: "这是正确的账号。最后两位数字颠倒了。真的很抱歉。",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Don't worry, this happens. Let me check... Good news — the account number you originally gave doesn't match any existing account at the receiving bank, so the transfer is likely being held. We can submit a correction request. It should be resolved within 3 to 5 business days.",
            textZh: "别担心，这种情况经常发生。我查一下……好消息——您原来给的账号在收款银行没有匹配到现有账户，所以汇款很可能被挂起了。我们可以提交一个更正请求。应该3到5个工作日内解决。",
            keyPhrases: [
              { en: "doesn't match", zh: "没有匹配到" },
              { en: "being held", zh: "被挂起了" },
              { en: "correction request", zh: "更正请求" },
              { en: "resolved", zh: "解决" },
            ],
            alternativeExpressions: [
              { textEn: "Hey, it happens more than you'd think. Let me check... Okay, good news — that wrong number doesn't match any account over there, so the money's just sitting in limbo. We can fix this. Give it 3 to 5 business days.", textZh: "这种事比你想的常见。我查查……好消息——那个错误账号那边没有对应账户，钱就是悬着呢。我们能修改。3到5个工作日。", actionHint: "sitting in limbo = 悬而未决/挂着", frequency: "common" },
              { textEn: "No worries, you wouldn't believe how often this happens. Let me look... Oh, that's actually lucky — the wrong number doesn't exist at the bank, so the funds are on hold. I'll submit a correction and it'll be sorted in 3 to 5 days.", textZh: "别担心，你不会相信这种事多常见。我看看……还好——那个错误账号在银行不存在，所以钱被挂起了。我提交更正，3到5天搞定。", actionHint: "that's actually lucky = 其实还好/算幸运", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a relief. Will I be charged the trace fee as well, since the problem turned out to be my mistake?",
            textZh: "那就放心了。追踪费也要收吗，毕竟问题是我搞错了？",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "I'll waive the trace fee since we caught the issue early. You'll just need to pay the $35 correction fee. I'll process everything now. You should receive a confirmation email within the hour, and I'll call you when the trace comes back.",
            textZh: "追踪费我给您免了，因为发现问题比较早。您只需要付35美元的更正费。我现在就处理。一小时内您会收到确认邮件，追踪结果回来后我会打电话给您。",
            keyPhrases: [
              { en: "waive", zh: "免除" },
              { en: "caught the issue early", zh: "及早发现了问题" },
              { en: "correction fee", zh: "更正费" },
              { en: "confirmation email", zh: "确认邮件" },
            ],
            alternativeExpressions: [
              { textEn: "Tell you what — I'll drop the trace fee since we caught it in time. Just the $35 for the correction. Let me get this going. You'll get an email confirmation within the hour and I'll give you a ring when we hear back.", textZh: "这样吧——追踪费我免了因为发现得早。只收35美元更正费。我这就处理。一小时内收到邮件确认，有结果了我打给你。", actionHint: "tell you what = 这样吧, give you a ring = 打电话给你", frequency: "common" },
              { textEn: "Since we spotted it early, I'm gonna waive the trace fee. You're just looking at $35 for the correction. I'll knock this out right now and shoot you an email. I'll also call you once the trace comes back.", textZh: "发现得早追踪费就免了。只需要35美元更正费。我现在就办好，给你发邮件。追踪有结果了我打给你。", actionHint: "knock this out = 搞定这件事, shoot you an email = 给你发邮件", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much for your help. I really appreciate you being so patient with me.",
            textZh: "非常感谢你的帮助。真的很感谢你这么耐心。",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "That's what we're here for. In the future, I'd recommend double-checking the account number with the recipient before sending. Here's my direct extension — if you have any follow-up questions, call me directly.",
            textZh: "这是我们应该做的。以后建议汇款前跟收款人核实一下账号。这是我的直线分机号——有后续问题直接打给我。",
            keyPhrases: [
              { en: "double-checking", zh: "核实/仔细检查" },
              { en: "direct extension", zh: "直线分机号" },
              { en: "follow-up questions", zh: "后续问题" },
            ],
            alternativeExpressions: [
              { textEn: "Hey, that's my job! Pro tip for next time — always verify the account number with whoever you're sending to before you pull the trigger. Here's my number if you need anything.", textZh: "这是我的工作！下次建议——汇款前一定跟收款人确认账号。这是我的号码有需要打给我。", actionHint: "pull the trigger = 确认操作/执行", frequency: "common" },
              { textEn: "That's what I'm here for. Lesson learned — always triple-check those numbers, right? Take my extension so you can reach me directly if anything else comes up.", textZh: "这就是我在这的意义。吸取教训——下次一定要反复核对账号。拿着我的分机号有什么事直接找我。", actionHint: "lesson learned = 吸取教训", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 开户 ====================
  {
    id: "banking-account",
    category: "banking",
    titleZh: "开户",
    titleEn: "Opening a Bank Account",
    description: "在国外银行开设账户，了解所需文件、账户类型和银行服务",
    otherRole: "银行客户经理",
    otherRoleIcon: "🏦",
    flows: [
      // --- Flow 1: 标准开户流程 ---
      {
        id: "account-open",
        titleZh: "办理开户",
        titleEn: "Opening an Account",
        description: "在银行开设新账户的完整流程，包括材料准备和账户选择",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm new to the country and I'd like to open a bank account. What do I need?",
            textZh: "你好，我刚到这个国家，想开一个银行账户。需要什么材料？",
          },
          {
            speaker: "them",
            role: "客户经理",
            textEn: "Welcome! We'd be happy to help. For non-residents, we typically need your passport, a secondary form of ID, proof of address — like a utility bill or lease agreement — and an initial deposit. The minimum to open an account is $25.",
            textZh: "欢迎！我们很乐意帮忙。对于非居民，通常需要护照、第二种身份证明、地址证明——如水电费账单或租赁合同——以及初始存款。开户最低存款是25美元。",
            keyPhrases: [
              { en: "non-residents", zh: "非居民" },
              { en: "secondary form of ID", zh: "第二种身份证明" },
              { en: "proof of address", zh: "地址证明" },
              { en: "utility bill", zh: "水电费账单" },
              { en: "lease agreement", zh: "租赁合同" },
              { en: "initial deposit", zh: "初始存款" },
            ],
            culturalNote: "在美国开户，没有SSN（社会安全号）也可以用ITIN（个人纳税识别号）或护照开户。有些银行对国际学生或新移民有特殊政策。",
            alternativeExpressions: [
              { textEn: "Welcome to the bank! So for international clients, we need your passport, a second ID, something showing your address — a lease or utility bill works — and a minimum deposit of $25 to get started.", textZh: "欢迎！国际客户的话我们需要护照、第二种证件、地址证明——租约或水电单都行——加上最低25美元开户存款。", actionHint: "to get started = 开始办理", frequency: "common" },
              { textEn: "Great, we love helping new residents get set up. You'll need a passport, one more form of ID, proof of where you live, and at least $25 to open the account. Pretty straightforward.", textZh: "太好了，我们很喜欢帮新居民办理开户。你需要护照、再加一个证件、住址证明、至少25美元开户。很简单的。", actionHint: "get set up = 办好/开设", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have my passport and my apartment lease. I'm here on a work visa. What type of account should I open?",
            textZh: "我有护照和公寓租赁合同。我持工作签证在这里。应该开什么类型的账户？",
          },
          {
            speaker: "them",
            role: "客户经理",
            textEn: "For everyday banking, I'd recommend our basic checking account — there's no monthly fee if you maintain a minimum balance of $500 or set up direct deposit. You'll get a debit card, online banking, and mobile check deposit. Would you also like to open a savings account? It earns 3.5% APY.",
            textZh: "日常使用的话，推荐我们的基础支票账户——如果保持500美元最低余额或设置工资直存，免月费。您会得到一张借记卡、网上银行和手机存支票功能。您还想开储蓄账户吗？年利率3.5%。",
            alternativeExpressions: [
              { textEn: "For day-to-day stuff, our basic checking is the way to go. No fees as long as you keep $500 in there or have your paycheck deposited directly. Comes with a debit card and all the online stuff. Wanna throw in a savings account too? 3.5% interest.", textZh: "日常用的话基础支票账户最合适。只要保持500美元或设置工资直存就免费。带借记卡和所有线上功能。要顺便开个储蓄账户吗？3.5%利息。", actionHint: "throw in = 顺便加上, the way to go = 最好的选择", frequency: "common" },
              { textEn: "I'd start with a basic checking account — keep $500 in it or set up direct deposit and there's no monthly fee. You get a debit card, app access, the works. A savings account is also worth having — we're offering 3.5% APY right now.", textZh: "建议先开基础支票账户——保持500美元或设直存就免月费。有借记卡、app什么的全套。储蓄账户也值得开——我们现在年利率3.5%。", actionHint: "the works = 全套/一切", frequency: "common" },
            ],
            keyPhrases: [
              { en: "checking account", zh: "支票账户（活期）" },
              { en: "monthly fee", zh: "月费" },
              { en: "minimum balance", zh: "最低余额" },
              { en: "direct deposit", zh: "工资直存" },
              { en: "debit card", zh: "借记卡" },
              { en: "mobile check deposit", zh: "手机存支票" },
              { en: "APY", zh: "年利率" },
            ],
            vocabNotes: {
              "direct deposit": {
                meaningInContext: "在这句话里表示：雇主把工资直接打入你的银行账户，不用现金或支票",
                similarUsage: "类似用法：My paycheck gets direct deposited every two weeks.",
              },
            },
          },
          {
            speaker: "you",
            textEn: "I'll open both a checking and savings account. My employer will set up direct deposit. Do I also get checks with the checking account?",
            textZh: "支票和储蓄账户都开吧。我的雇主会设置工资直存。支票账户附带支票本吗？",
          },
          {
            speaker: "them",
            role: "客户经理",
            textEn: "Yes, your first box of checks is free. They'll be mailed to your address in about 7 to 10 days. In the meantime, you can use temporary checks I'll give you today. Now, let me get your information entered into the system. Do you have your Social Security Number or an ITIN?",
            textZh: "是的，第一盒支票免费。大约7到10天寄到你的地址。在这期间，可以用我今天给你的临时支票。现在让我把你的信息录入系统。你有社会安全号或ITIN吗？",
            keyPhrases: [
              { en: "box of checks", zh: "一盒支票" },
              { en: "temporary checks", zh: "临时支票" },
              { en: "Social Security Number", zh: "社会安全号" },
              { en: "ITIN", zh: "个人纳税识别号" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, first set of checks is on us. They'll come in the mail in about a week or so. I'll give you some starter checks in the meantime. Now let's get you in the system — do you have an SSN or ITIN?", textZh: "对，第一盒支票免费。大概一周左右邮寄到。期间给你一些临时支票用。现在录入系统——你有SSN或ITIN吗？", actionHint: "on us = 我们请客/免费, starter checks = 临时支票", frequency: "common" },
              { textEn: "Your first checks come free — takes about a week to get them. For now, I'll hook you up with some temp checks. Alright, let me pull up the application. Got your Social or an ITIN?", textZh: "第一盒支票免费——大概一周到。先给你一些临时支票。好了，我开始录入。有社安号或ITIN吗？", actionHint: "hook you up with = 给你提供, your Social = 你的社安号（口语简称）", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have a Social Security Number — I got it when I started my work visa. Here it is.",
            textZh: "我有社会安全号——办工作签证时拿到的。给你。",
          },
          {
            speaker: "them",
            role: "客户经理",
            textEn: "Perfect. I've set up both accounts. Your checking account number is on this card, and your temporary debit card will work immediately. The permanent one with your name on it will arrive by mail in 5 to 7 business days. You'll also need to set up your online banking — let me walk you through that right now.",
            textZh: "好了。两个账户都开好了。支票账户号码在这张卡上，临时借记卡可以立即使用。带你名字的正式卡会在5到7个工作日内寄到。你还需要设置网上银行——我现在带你操作。",
            keyPhrases: [
              { en: "account number", zh: "账号" },
              { en: "temporary debit card", zh: "临时借记卡" },
              { en: "permanent one", zh: "正式卡" },
              { en: "set up online banking", zh: "设置网上银行" },
            ],
            alternativeExpressions: [
              { textEn: "All done! Both accounts are live. Here's your account number, and this temp debit card works right away. Your real card will show up in the mail in about a week. Let me also help you get set up with online banking real quick.", textZh: "搞定了！两个账户都开通了。这是你的账号，临时借记卡马上能用。正式卡大约一周邮寄到。我再帮你快速设置一下网上银行。", actionHint: "live = 已开通/激活, show up = 到达", frequency: "common" },
              { textEn: "You're good to go — checking and savings are both open. This card works right away; the personalized one comes in the mail. Now let's get your mobile banking sorted out.", textZh: "都好了——支票和储蓄账户都开了。这张卡马上能用；带名字的那张邮寄过来。现在帮你设置手机银行。", actionHint: "sorted out = 搞定/设置好", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. Can I also send money internationally from this account? I need to send money back to China sometimes.",
            textZh: "好的。这个账户可以国际汇款吗？我有时需要汇钱回中国。",
          },
          {
            speaker: "them",
            role: "客户经理",
            textEn: "Yes, you can do international wire transfers from your checking account. The fee is $30 per transfer for account holders — cheaper than the walk-in rate. You can initiate transfers online or at the branch. We also have Zelle for free domestic transfers.",
            textZh: "可以的，您可以从支票账户办理国际汇款。账户持有人每笔手续费30美元——比临柜价格便宜。可以在网上或柜台发起转账。我们还有Zelle可以免费国内转账。",
            keyPhrases: [
              { en: "account holders", zh: "账户持有人" },
              { en: "initiate transfers", zh: "发起转账" },
              { en: "at the branch", zh: "在分行/柜台" },
              { en: "Zelle", zh: "Zelle（美国免费即时转账服务）" },
              { en: "domestic transfers", zh: "国内转账" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, international wires are $30 a pop for account holders — way cheaper than walking in off the street. You can do it online or come in. And for sending money to people here in the US, Zelle is free and instant.", textZh: "可以，有账户的话国际汇款每次30块——比临柜便宜很多。可以网上办或来柜台。美国国内转账的话Zelle免费而且即时。", actionHint: "$30 a pop = 每次30块, off the street = 临时来的", frequency: "common" },
              { textEn: "For sure. As an account holder, wires to China are only $30 — versus $45 for non-customers. Do it online or at any branch. Oh, and for local transfers, use Zelle — it's free and built right into the app.", textZh: "当然可以。有账户的话汇到中国才30美元——非客户要45。网上或任何分行都能办。对了，国内转账用Zelle——免费的，app里就有。", actionHint: "built right into = 直接内置在", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "This is really helpful. Thank you for taking the time to explain everything.",
            textZh: "太有帮助了。谢谢你花时间解释这些。",
          },
          {
            speaker: "them",
            role: "客户经理",
            textEn: "My pleasure! Here's my business card — I'm your dedicated banker. If you have any questions about your accounts, don't hesitate to reach out. Welcome to the bank!",
            textZh: "不客气！这是我的名片——我是你的专属客户经理。有任何关于账户的问题，随时联系我。欢迎开户！",
            keyPhrases: [
              { en: "dedicated banker", zh: "专属客户经理" },
              { en: "don't hesitate to reach out", zh: "随时联系" },
            ],
            alternativeExpressions: [
              { textEn: "Happy to help! Take my card — I'll be your go-to person here. Any questions at all, just give me a shout. Welcome aboard!", textZh: "很高兴帮到你！拿我的名片——我就是你在这的联络人。有任何问题随时找我。欢迎加入！", actionHint: "go-to person = 联络人/首选联系人, give me a shout = 找我", frequency: "common" },
              { textEn: "Anytime! Here's my info — I'm your point of contact for anything banking-related. Don't be a stranger! Welcome to the family.", textZh: "随时为你服务！这是我的联系方式——银行相关的事找我就对了。常来啊！欢迎！", actionHint: "don't be a stranger = 常来/别疏远", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 2: 账户问题/冻结/限额 ---
      {
        id: "account-issues",
        titleZh: "账户问题处理",
        titleEn: "Account Issues & Limits",
        description: "账户被冻结、交易限额、卡被拒等问题的处理",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, my debit card was declined when I tried to make a purchase, but I know I have money in my account. What's going on?",
            textZh: "你好，我刷借记卡被拒了，但我知道账户里有钱。怎么回事？",
            casualVersion: "My card just got declined but I definitely have money. What happened?",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Let me pull up your account. Can I see your ID, please? ...I see the issue. There's a security hold on your account due to unusual activity. It looks like there was a large withdrawal attempt from a different city — our fraud detection system flagged it.",
            textZh: "我调出您的账户看看。能出示一下证件吗？……我找到原因了。您的账户因为异常活动被安全冻结了。看起来有人在另一个城市尝试大额取款——被我们的反欺诈系统标记了。",
            keyPhrases: [
              { en: "security hold", zh: "安全冻结" },
              { en: "unusual activity", zh: "异常活动" },
              { en: "withdrawal attempt", zh: "取款尝试" },
              { en: "fraud detection system", zh: "反欺诈系统" },
              { en: "flagged", zh: "被标记了" },
            ],
            alternativeExpressions: [
              { textEn: "Let me look into this. ID, please? ...Okay, I see what happened. Your account got locked because something sketchy showed up — someone tried pulling out a big chunk of cash from another city. Our system caught it.", textZh: "我来查查。出示一下证件？……好了，我看到了。你的账户被锁了因为有可疑操作——有人在另一个城市试图取大额现金。被系统抓到了。", actionHint: "sketchy = 可疑的, pulling out = 取出, caught it = 抓到了", frequency: "common" },
              { textEn: "Give me one second to check... Oh, I see — there's a fraud hold on the account. Looks like somebody tried to make a big withdrawal from a different city. Our system flagged it and froze things as a precaution.", textZh: "稍等我查一下……哦，看到了——账户有一个欺诈冻结。看起来有人在另一个城市试图大额取款。系统标记了并预防性冻结了。", actionHint: "as a precaution = 作为预防措施", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That wasn't me! I've been in this city the whole time. Is someone trying to steal my money?",
            textZh: "那不是我！我一直在这个城市。有人想盗取我的钱吗？",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "It's possible your card information was compromised. The good news is, our system blocked the transaction before any money was taken. I'll need to cancel your current card and issue a new one. I can also file a fraud investigation. Have you noticed any other suspicious charges on your account?",
            textZh: "您的卡信息可能被泄露了。好消息是，我们的系统在钱被取走前就拦截了交易。我需要注销您现在的卡并补发新卡。我也可以提交一个欺诈调查。您有注意到账户上有其他可疑的消费吗？",
            keyPhrases: [
              { en: "compromised", zh: "被泄露了/被盗了" },
              { en: "blocked the transaction", zh: "拦截了交易" },
              { en: "cancel your current card", zh: "注销现在的卡" },
              { en: "issue a new one", zh: "补发新卡" },
              { en: "fraud investigation", zh: "欺诈调查" },
              { en: "suspicious charges", zh: "可疑消费" },
            ],
            alternativeExpressions: [
              { textEn: "Looks like your card info might've been stolen. Good thing our system shut it down before any money actually went out. We'll kill this card and get you a new one. Have you seen any weird charges lately?", textZh: "看起来你的卡信息可能被盗了。好在我们系统在钱被转走前就拦截了。我们会注销这张卡给你新的。最近有没有看到什么奇怪的消费？", actionHint: "kill this card = 注销这张卡（口语）, weird charges = 奇怪的消费", frequency: "common" },
              { textEn: "Your card details may have been compromised somewhere. The silver lining is we caught it in time — no money left the account. I'll shut down the current card and order a new one. Any other charges look off to you?", textZh: "你的卡信息可能在哪里泄露了。好的一面是我们及时发现了——没有钱被转走。我会关掉现在的卡补办新的。还有其他消费看起来不对的吗？", actionHint: "silver lining = 好的一面, look off = 看起来不对", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Let me check my recent transactions... There's a $300 charge I don't recognize from an online store. That's definitely not mine.",
            textZh: "我看看最近的交易记录……有一笔300美元的消费我不认识，是一个网上商店的。那绝对不是我的。",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "I'll flag that charge as unauthorized and start a dispute. You should get a provisional credit of $300 within 48 hours while we investigate. The investigation typically takes 10 business days. Your new card will arrive in 5 to 7 business days — in the meantime, I can give you a temporary card today.",
            textZh: "我会把那笔消费标记为未授权并发起争议。调查期间，48小时内您应该会收到300美元的临时退款。调查通常需要10个工作日。新卡5到7个工作日到——在此期间，今天可以给您一张临时卡。",
            keyPhrases: [
              { en: "unauthorized", zh: "未授权的" },
              { en: "dispute", zh: "争议" },
              { en: "provisional credit", zh: "临时退款" },
              { en: "investigate", zh: "调查" },
            ],
            alternativeExpressions: [
              { textEn: "I'll mark it as fraud and open a dispute. You'll see $300 back in your account within a couple days while we look into it. The whole investigation takes about 10 business days. I can set you up with a temp card today.", textZh: "我标记为欺诈并开争议。两天内你会看到300美元退回账户，我们同时调查。整个调查大约10个工作日。今天先给你办张临时卡。", actionHint: "set you up with = 给你办/提供", frequency: "common" },
              { textEn: "That $300 charge is getting flagged as unauthorized — I'll kick off a dispute right now. You'll get a temporary credit within 48 hours. New card's coming in about a week, but I'll give you a temp one to use in the meantime.", textZh: "那笔300美元的消费我标记为未授权——现在就启动争议。48小时内你会收到临时退款。新卡大约一周到，先给你张临时卡用。", actionHint: "kick off = 启动", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. Should I change my online banking password too?",
            textZh: "谢谢。我还需要改网银密码吗？",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Absolutely — change your password and enable two-factor authentication if you haven't already. Also check any other accounts where you used the same password. Here's a summary of what we've done today — keep this for your records.",
            textZh: "一定要改——改密码并开启双重验证（如果还没开的话）。也检查一下其他用了相同密码的账户。这是今天处理的摘要——请保留好。",
            keyPhrases: [
              { en: "change your password", zh: "改密码" },
              { en: "two-factor authentication", zh: "双重验证/两步验证" },
              { en: "summary", zh: "摘要/总结" },
            ],
            alternativeExpressions: [
              { textEn: "100% — go home and change that password ASAP. Turn on two-factor if you haven't. And if you use that same password anywhere else, change those too. Here's a printout of everything we did today.", textZh: "必须的——回去马上改密码。双重验证没开的话开起来。如果其他地方用了同样的密码也得改。这是今天处理的打印件。", actionHint: "ASAP = as soon as possible 尽快", frequency: "common" },
              { textEn: "Definitely. New password, two-factor auth, and go through any other accounts with the same login. Here's a recap of what we took care of — hold on to it.", textZh: "一定要。新密码，开双重验证，然后检查其他用同样密码的账户。这是今天处理的总结——留好。", actionHint: "recap = 总结回顾, took care of = 处理了", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll do that right away. Is there a daily spending limit on the new card?",
            textZh: "我马上改。新卡有每日消费限额吗？",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Yes, the default daily limit is $2,500 for purchases and $500 for ATM withdrawals. If you need to make a larger purchase, you can call us to temporarily raise the limit. You can also adjust it yourself through the mobile app.",
            textZh: "有的，默认每日消费限额2500美元，ATM取款限额500美元。如果需要大额消费，可以打电话给我们临时提高限额。你也可以通过手机App自己调整。",
            keyPhrases: [
              { en: "daily limit", zh: "每日限额" },
              { en: "temporarily raise", zh: "临时提高" },
              { en: "adjust", zh: "调整" },
              { en: "mobile app", zh: "手机App" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, standard daily limit is $2,500 for spending and $500 at the ATM. Need to buy something bigger? Just give us a call and we'll bump it up temporarily. Or do it yourself in the app.", textZh: "对，标准每日限额消费2500，ATM取款500。要买更贵的东西？打个电话我们临时提高。或者在app里自己调。", actionHint: "bump it up = 提高", frequency: "common" },
              { textEn: "The card comes with a $2,500 daily purchase limit and $500 for ATM cash. If you need more, it takes two seconds to raise it through the app or by calling us.", textZh: "这张卡每日消费限额2500，ATM取现500。需要更多的话在app里或打电话两秒钟就能提高。", actionHint: "takes two seconds = 非常快", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect, thank you. You've been incredibly helpful with all of this.",
            textZh: "好的，谢谢你。你帮了大忙了。",
          },
        ],
      },
    ],
  },

  // ==================== 旅行保险 ====================
  {
    id: "banking-insurance",
    category: "banking",
    titleZh: "旅行保险",
    titleEn: "Travel Insurance",
    description: "购买旅行保险、了解保障范围，以及出险后的理赔流程",
    otherRole: "保险顾问",
    otherRoleIcon: "🛡️",
    flows: [
      // --- Flow 1: 购买旅行保险 ---
      {
        id: "insurance-purchase",
        titleZh: "购买旅行保险",
        titleEn: "Purchasing Travel Insurance",
        description: "在出发前或旅途中购买旅行保险，了解不同方案和保障范围",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm traveling to Europe for two weeks and I'd like to get travel insurance. What do you recommend?",
            textZh: "你好，我要去欧洲旅行两周，想买旅行保险。有什么推荐？",
          },
          {
            speaker: "them",
            role: "保险顾问",
            textEn: "Great idea — travel insurance is really important, especially for international trips. We have three plans. The Basic plan is $45 and covers trip cancellation and medical emergencies up to $50,000. The Standard plan is $85 and adds baggage loss, trip delay, and increases medical coverage to $100,000. Our Premium plan is $150 and includes everything plus adventure sports coverage and cancel-for-any-reason.",
            textZh: "好主意——旅行保险非常重要，尤其是国际旅行。我们有三种方案。基础方案45美元，覆盖行程取消和最高5万美元的紧急医疗。标准方案85美元，增加行李丢失、行程延误，医疗保额提升到10万美元。高级方案150美元，包含所有内容加上极限运动保障和任何原因取消。",
            alternativeExpressions: [
              { textEn: "Smart move! You definitely want insurance for an overseas trip. Here's the breakdown — Basic at $45 gets you covered for cancellations and basic medical. Standard at $85 is the most popular — bigger medical coverage plus baggage and delays. Premium at $150 is the full package.", textZh: "聪明！出国旅行一定要买保险。大致是这样——基础版45美元保取消和基本医疗。标准版85美元最热门——医疗保额更高加行李和延误。高级版150美元全包。", actionHint: "smart move = 明智的决定, the full package = 全套", frequency: "common" },
              { textEn: "Absolutely — I'd never travel internationally without it. We've got three tiers: $45 for basic medical and cancellation, $85 adds lost bags and delays with better medical coverage, and $150 is the works — adventure sports, cancel for any reason, the whole nine yards.", textZh: "绝对的——我出国旅行从不裸奔。三档：45美元基本医疗和取消，85美元加行李丢失和延误保障而且医疗更好，150美元全套——极限运动、任何原因取消，全都有。", actionHint: "the whole nine yards = 全部/应有尽有", frequency: "occasional" },
            ],
            keyPhrases: [
              { en: "trip cancellation", zh: "行程取消" },
              { en: "medical emergencies", zh: "紧急医疗" },
              { en: "baggage loss", zh: "行李丢失" },
              { en: "trip delay", zh: "行程延误" },
              { en: "adventure sports coverage", zh: "极限运动保障" },
              { en: "cancel-for-any-reason", zh: "任何原因取消" },
            ],
            culturalNote: "欧洲很多国家（尤其申根区）要求入境时必须有旅行保险，医疗保额不低于3万欧元。即使不强制，在美国看病费用极其高昂，强烈建议买保险。",
          },
          {
            speaker: "you",
            textEn: "What exactly does 'trip cancellation' cover? Like, what reasons qualify?",
            textZh: "\"行程取消\"具体保什么？什么原因才算？",
          },
          {
            speaker: "them",
            role: "保险顾问",
            textEn: "Standard trip cancellation covers you if you need to cancel due to illness, injury, a death in the family, airline bankruptcy, or severe weather. It does NOT cover things like changing your mind or work conflicts — unless you have the Premium plan with cancel-for-any-reason, which reimburses 75% of your trip cost for any reason at all.",
            textZh: "标准行程取消保障涵盖因疾病、受伤、家人去世、航空公司破产或恶劣天气需要取消的情况。不保障改变主意或工作冲突——除非你有高级方案的任何原因取消，那可以报销75%的旅行费用，不管什么原因。",
            alternativeExpressions: [
              { textEn: "The standard cancellation kicks in for things like getting sick, a family emergency, or if your airline goes belly-up. It won't cover \"I just don't feel like going\" — for that you'd need the Premium plan, which gives you 75% back no matter what.", textZh: "标准取消保障适用于生病、家庭紧急情况或航空公司倒闭这类情况。不保\"我不想去了\"——要保这个得选高级方案，不管什么原因退75%。", actionHint: "goes belly-up = 倒闭（口语）, kicks in = 生效/适用", frequency: "common" },
              { textEn: "You're covered for legit reasons — illness, injury, death in the family, airline issues, bad weather. But not for stuff like changing your mind or a work thing popping up. The Premium plan is the only one that does cancel-for-any-reason.", textZh: "正当理由都保——疾病、受伤、家人去世、航空公司问题、恶劣天气。但不保改变主意或突然有工作这种。只有高级方案才有任何原因取消。", actionHint: "legit reasons = 正当理由, popping up = 突然出现", frequency: "common" },
            ],
            keyPhrases: [
              { en: "illness", zh: "疾病" },
              { en: "injury", zh: "受伤" },
              { en: "airline bankruptcy", zh: "航空公司破产" },
              { en: "severe weather", zh: "恶劣天气" },
              { en: "changing your mind", zh: "改变主意" },
              { en: "reimburses 75%", zh: "报销75%" },
            ],
          },
          {
            speaker: "you",
            textEn: "I think the Standard plan makes sense for me. Does it cover pre-existing medical conditions?",
            textZh: "我觉得标准方案适合我。它保既有的疾病吗？",
          },
          {
            speaker: "them",
            role: "保险顾问",
            textEn: "Pre-existing conditions are covered only if you purchase the insurance within 14 days of booking your trip. Since you mentioned you're leaving soon, when did you book your flights?",
            textZh: "既有疾病只有在预订旅行后14天内购买保险才保障。你说快出发了，你是什么时候订的机票？",
            alternativeExpressions: [
              { textEn: "That depends on timing. If you buy the insurance within two weeks of booking your trip, pre-existing stuff is covered. Otherwise, it's excluded. When did you book?", textZh: "这取决于时间。如果订行程后两周内买保险，既有病症就保。不然就不包括。你什么时候订的？", actionHint: "pre-existing stuff 是口语化说法", frequency: "common" },
              { textEn: "Here's the catch — pre-existing conditions are only covered if you get the policy within 14 days of your first trip payment. How long ago did you book everything?", textZh: "关键在这——既有病症只有在第一笔旅行付款后14天内买保险才保。你多久前订的？", actionHint: "here's the catch = 关键/但书在这里", frequency: "common" },
            ],
            keyPhrases: [
              { en: "pre-existing conditions", zh: "既有疾病/已有病症" },
              { en: "within 14 days of booking", zh: "预订后14天内" },
            ],
            vocabNotes: {
              "pre-existing conditions": {
                meaningInContext: "在这句话里表示：购买保险之前就已经有的疾病或健康状况",
                similarUsage: "类似用法：My diabetes is a pre-existing condition.",
              },
            },
          },
          {
            speaker: "you",
            textEn: "I booked about a month ago, so I've missed that window. That's okay — I don't have any major health issues. Let's go with the Standard plan.",
            textZh: "大概一个月前订的，所以错过那个窗口了。没关系——我没有什么大的健康问题。就选标准方案吧。",
          },
          {
            speaker: "them",
            role: "保险顾问",
            textEn: "I'll set that up for you. I just need your travel dates, destination countries, and your date of birth. You'll receive your policy documents by email within 24 hours. Print a copy or save it on your phone — you'll need the policy number if you file a claim.",
            textZh: "好的，我来办理。需要你的旅行日期、目的地国家和出生日期。保单文件24小时内发到你的邮箱。打印一份或存手机上——理赔时需要保单号。",
            keyPhrases: [
              { en: "travel dates", zh: "旅行日期" },
              { en: "destination countries", zh: "目的地国家" },
              { en: "policy documents", zh: "保单文件" },
              { en: "policy number", zh: "保单号" },
              { en: "file a claim", zh: "理赔" },
            ],
            alternativeExpressions: [
              { textEn: "Let me get that rolling. Just need your trip dates, where you're heading, and your birthday. The policy paperwork will hit your inbox within 24 hours. Keep a copy on your phone — you'll need the policy number if anything goes south.", textZh: "我来办。只需要你的出行日期、去哪里和生日。保单文件24小时内发到邮箱。手机上存一份——出问题的时候需要保单号。", actionHint: "goes south = 出问题/变糟", frequency: "common" },
              { textEn: "I'll get you signed up right now. What are your travel dates, which countries, and your date of birth? Everything gets emailed to you in a day. Screenshot that policy number — you'll want it handy if you ever need to make a claim.", textZh: "我现在就帮你注册。旅行日期、哪些国家和出生日期？所有东西一天内邮件发给你。截图保单号——万一理赔要用的。", actionHint: "screenshot 当动词用=截图保存", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "If something happens during my trip, what's the first thing I should do?",
            textZh: "如果旅途中出了事，第一步应该做什么？",
          },
          {
            speaker: "them",
            role: "保险顾问",
            textEn: "Call our 24/7 emergency assistance hotline — the number is on your policy card. They can help you find a doctor, hospital, or handle an emergency. For medical claims, keep ALL receipts and get a medical report from the doctor. For baggage claims, file a report with the airline AND the police within 24 hours. Documentation is everything.",
            textZh: "打我们的24小时紧急援助热线——号码在你的保单卡上。他们可以帮你找医生、医院或处理紧急情况。医疗理赔的话，保留所有收据并从医生那里拿一份医疗报告。行李理赔的话，24小时内向航空公司和警方报案。证据文件最重要。",
            keyPhrases: [
              { en: "emergency assistance hotline", zh: "紧急援助热线" },
              { en: "keep ALL receipts", zh: "保留所有收据" },
              { en: "medical report", zh: "医疗报告" },
              { en: "file a report", zh: "报案/提交报告" },
              { en: "documentation", zh: "证据文件" },
            ],
            alternativeExpressions: [
              { textEn: "First thing — call our emergency line. It's 24/7 and it's on your policy card. They'll hook you up with a doctor or hospital. The big thing with claims is paper trail — save every receipt, get a doctor's note, and for lost luggage, report it to the airline and cops within 24 hours.", textZh: "第一件事——打我们的紧急热线。24小时的，在保单卡上。他们会帮你找到医生或医院。理赔最重要的是证据——收据全留着，拿医生证明，行李丢了24小时内向航空公司和警方报告。", actionHint: "paper trail = 证据记录/书面凭证", frequency: "common" },
              { textEn: "Hit up our emergency hotline — it's right on your policy card, runs around the clock. For medical stuff, keep every single receipt and get the doc to write it up. Lost bags? Report to the airline AND the local police ASAP. Bottom line: document everything.", textZh: "打我们的紧急热线——保单卡上有，全天运行。医疗的话每张收据都留着让医生写报告。行李丢了？马上向航空公司和当地警察报告。总之：所有东西都记录下来。", actionHint: "hit up = 联系, around the clock = 全天候, bottom line = 总之", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Very helpful. Thank you for explaining everything so clearly!",
            textZh: "非常有帮助。谢谢你解释得这么清楚！",
          },
          {
            speaker: "them",
            role: "保险顾问",
            textEn: "You're welcome! Travel safe, and hopefully you won't need to use the insurance at all. But it's always better to have it and not need it than need it and not have it. Enjoy your trip!",
            textZh: "不客气！旅途平安，希望你完全用不到保险。但有备无患总比需要时没有好。祝旅途愉快！",
            keyPhrases: [
              { en: "travel safe", zh: "旅途平安" },
              { en: "better to have it and not need it", zh: "有备无患" },
            ],
            alternativeExpressions: [
              { textEn: "No problem! Fingers crossed you never have to use it. But peace of mind is worth $85, right? Have an amazing trip!", textZh: "没事儿！希望你永远用不到。但花85块买个安心值得吧？旅途愉快！", actionHint: "fingers crossed = 祈祷/希望, peace of mind = 安心", frequency: "common" },
              { textEn: "Happy to help! Hopefully the insurance just sits in your email unused. But if anything does happen, you'll be glad it's there. Safe travels and have a blast!", textZh: "很高兴帮到你！希望保单就安静躺在邮箱里用不到。但万一出事你会庆幸有它。旅途平安，玩得开心！", actionHint: "have a blast = 玩得超开心", frequency: "common" },
            ],
          },
        ],
      },

      // --- Flow 2: 出险理赔 ---
      {
        id: "insurance-claim",
        titleZh: "保险理赔",
        titleEn: "Filing an Insurance Claim",
        description: "旅途中出险后联系保险公司理赔的完整流程",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hello, I need to file a claim. I had a medical emergency while traveling in Paris — I had to go to the hospital for a broken wrist.",
            textZh: "你好，我需要理赔。我在巴黎旅行时遇到了医疗紧急情况——我摔断了手腕，去了医院。",
          },
          {
            speaker: "them",
            role: "理赔专员",
            textEn: "I'm sorry to hear that. Let me help you with your claim. Can I have your policy number, please? And can you tell me when this happened and which hospital you went to?",
            textZh: "很抱歉听到这个。我来帮你处理理赔。请告诉我你的保单号。另外这是什么时候发生的，去的哪家医院？",
            keyPhrases: [
              { en: "file a claim", zh: "申请理赔" },
              { en: "policy number", zh: "保单号" },
              { en: "which hospital", zh: "哪家医院" },
            ],
            alternativeExpressions: [
              { textEn: "Oh no, I'm sorry about that. Let's get your claim started. What's your policy number? And when did this happen — which hospital did you end up at?", textZh: "天哪，很抱歉。我们开始理赔吧。保单号是什么？什么时候发生的——最后去了哪家医院？", actionHint: "end up at = 最终去了（某地）", frequency: "common" },
              { textEn: "That sounds rough. Don't worry, we'll take care of this. Can you pull up your policy number for me? And walk me through what happened — when and where?", textZh: "听起来不容易。别担心，我们来处理。能查一下你的保单号吗？跟我说说经过——什么时候在哪里？", actionHint: "that sounds rough = 听起来很艰难, walk me through = 给我讲讲", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "My policy number is TI-29384. It happened last Tuesday. I went to the American Hospital of Paris. The total bill was 3,200 euros.",
            textZh: "我的保单号是TI-29384。上周二发生的。去了巴黎美国医院。总账单是3200欧元。",
          },
          {
            speaker: "them",
            role: "理赔专员",
            textEn: "Thank you. I can see your Standard plan covers medical emergencies up to $100,000, so this should be fully covered minus your deductible of $150. To process the claim, I'll need the following documents: the hospital invoice, the medical report or discharge summary, proof of payment, and any pharmacy receipts if you were prescribed medication.",
            textZh: "谢谢。我看到你的标准方案覆盖最高10万美元的紧急医疗，所以这应该可以全额理赔，减去150美元的免赔额。处理理赔需要以下文件：医院发票、医疗报告或出院小结、付款证明，以及如果开了药的话药房收据。",
            alternativeExpressions: [
              { textEn: "Got it. Your plan covers up to $100K in medical, so $3,200 is well within that. You'll just have the $150 deductible. To get this processed, I need the hospital bill, a doctor's report, proof you paid, and pharmacy receipts if they gave you any meds.", textZh: "好的。你的方案保最高10万美元医疗，3200完全在范围内。只有150美元免赔额。处理理赔需要：医院账单、医生报告、付款证明、如果开了药还要药房收据。", actionHint: "well within = 完全在范围内", frequency: "common" },
              { textEn: "Looking good — your Standard plan handles up to $100,000 medical, so this is definitely covered minus the $150 deductible. I just need the paperwork: hospital invoice, doctor's report, payment proof, and any prescriptions.", textZh: "没问题——你的标准方案保到10万美元医疗，这个绝对在保障范围内减去150免赔额。我需要这些文件：医院发票、医生报告、付款证明和处方单。", actionHint: "looking good = 情况不错（这里指理赔没问题）", frequency: "common" },
            ],
            keyPhrases: [
              { en: "fully covered", zh: "全额理赔" },
              { en: "deductible", zh: "免赔额" },
              { en: "hospital invoice", zh: "医院发票" },
              { en: "discharge summary", zh: "出院小结" },
              { en: "proof of payment", zh: "付款证明" },
              { en: "pharmacy receipts", zh: "药房收据" },
              { en: "prescribed medication", zh: "开的药/处方药" },
            ],
            vocabNotes: {
              deductible: {
                meaningInContext: "在这句话里表示：理赔时你自己需要先承担的固定金额，超过部分保险公司才报销",
                similarUsage: "类似用法：My health insurance has a $500 deductible.",
              },
            },
          },
          {
            speaker: "you",
            textEn: "I have all the documents. The hospital gave me everything in French — is that okay, or do I need to get them translated?",
            textZh: "我有所有文件。医院给的都是法语的——可以吗，还是需要翻译？",
          },
          {
            speaker: "them",
            role: "理赔专员",
            textEn: "French documents are fine — we have multilingual processors. You can upload everything through our online claims portal or email them to claims@travelinsure.com. Once we receive all documents, the review process takes about 10 to 15 business days. If approved, we'll reimburse you by direct deposit or check — your preference.",
            textZh: "法语文件没问题——我们有多语言处理人员。你可以通过我们的在线理赔门户上传，或者发邮件到claims@travelinsure.com。收到所有文件后，审核过程大约需要10到15个工作日。通过的话，我们通过直接存款或支票报销——看你的偏好。",
            keyPhrases: [
              { en: "multilingual processors", zh: "多语言处理人员" },
              { en: "claims portal", zh: "理赔门户" },
              { en: "review process", zh: "审核过程" },
              { en: "if approved", zh: "通过的话" },
              { en: "reimburse", zh: "报销" },
              { en: "direct deposit", zh: "直接存款" },
            ],
            alternativeExpressions: [
              { textEn: "No worries about French — we deal with documents in all languages. Just upload everything to our claims portal or shoot it over to claims@travelinsure.com. Once we have it all, figure 10 to 15 business days for review. We'll pay you back via direct deposit or a check.", textZh: "法语没问题——我们处理各种语言的文件。上传到理赔门户或发邮件到claims@travelinsure.com。收齐之后大概10到15个工作日审核。通过银行转账或支票退给你。", actionHint: "shoot it over = 发过来, figure = 大概", frequency: "common" },
              { textEn: "French is totally fine — our team handles multiple languages. You can submit everything online or email it in. Turnaround is about two to three weeks once we have everything. Then we'll reimburse you however you prefer — bank deposit or check.", textZh: "法语完全可以——我们团队处理多种语言。你可以在线提交或邮件发来。收齐文件后大约两到三周。然后按你的偏好报销——银行转账或支票。", actionHint: "turnaround = 处理周期", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Direct deposit would be great. I also had to change my flight because of the injury — the change fee was $350. Is that covered too?",
            textZh: "直接存款就好。我因为受伤还改签了航班——改签费350美元。这个也保吗？",
          },
          {
            speaker: "them",
            role: "理赔专员",
            textEn: "Yes! Trip interruption due to a medical emergency is covered under your plan. Include the flight change receipt and a note from your doctor saying you needed to modify your travel plans. We'll process both claims together.",
            textZh: "保的！因为医疗紧急情况导致的行程中断在你的方案保障范围内。附上航班改签收据和医生出具的说明，证明你需要修改旅行计划。我们会一起处理两项理赔。",
            keyPhrases: [
              { en: "trip interruption", zh: "行程中断" },
              { en: "flight change receipt", zh: "航班改签收据" },
              { en: "note from your doctor", zh: "医生的证明" },
              { en: "modify your travel plans", zh: "修改旅行计划" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely — that falls under trip interruption, which your plan covers. Just throw in the receipt for the flight change and get your doctor to write something saying the injury required you to change your plans. We'll bundle both claims.", textZh: "当然——这属于行程中断，你的方案保的。附上改签收据让医生写个证明说伤势需要你改变计划。两个理赔我们一起处理。", actionHint: "falls under = 属于, bundle = 打包一起处理", frequency: "common" },
              { textEn: "Good news — yes, that's covered. Trip interruption kicks in when a medical emergency forces you to change plans. Just include the flight change receipt and a doctor's letter. We'll handle both claims at once.", textZh: "好消息——保的。医疗紧急情况迫使你改变计划时行程中断保障就生效了。附上改签收据和医生信就行。两个理赔一起办。", actionHint: "kicks in = 生效, handle at once = 一起处理", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's great. So the total claim would be the hospital bill of 3,200 euros plus the $350 flight change, minus the $150 deductible?",
            textZh: "太好了。那总理赔金额是医院账单3200欧元加上350美元改签费，减去150美元免赔额？",
          },
          {
            speaker: "them",
            role: "理赔专员",
            textEn: "Exactly. The euros will be converted to dollars at the exchange rate on the date of payment. Your estimated reimbursement is approximately $3,700 after the deductible. I'll send you a claim form and a checklist of required documents by email right now. If you have any questions during the process, call our claims line directly.",
            textZh: "没错。欧元会按付款日的汇率换算成美元。扣除免赔额后，你预计能收到大约3700美元的报销。我现在就把理赔表格和所需文件清单发到你邮箱。处理过程中如果有问题，直接打我们的理赔专线。",
            keyPhrases: [
              { en: "converted to dollars", zh: "换算成美元" },
              { en: "date of payment", zh: "付款日" },
              { en: "estimated reimbursement", zh: "预计报销金额" },
              { en: "claim form", zh: "理赔表格" },
              { en: "checklist", zh: "清单" },
              { en: "claims line", zh: "理赔专线" },
            ],
            alternativeExpressions: [
              { textEn: "That's right. We'll convert the euros at the rate from when you paid. After the deductible, you're looking at roughly $3,700 back. I'll email you the claim form and a checklist right now. Any questions along the way, just call our claims team.", textZh: "对的。欧元按你付款时的汇率换算。扣除免赔额后大约能拿回3700美元。我现在就发理赔表和清单给你。过程中有问题直接打理赔团队。", actionHint: "along the way = 过程中", frequency: "common" },
              { textEn: "Yep. Euros get converted based on the payment date rate. So ballpark $3,700 in your pocket after the deductible. I'm sending over the form and document checklist now. If anything's confusing, ring our claims line — they'll walk you through it.", textZh: "对。欧元按付款日汇率换算。大约3700美元到你口袋扣完免赔额后。我现在发表格和文件清单。有不清楚的打理赔专线——他们会一步一步教你。", actionHint: "ballpark = 大约（口语）, in your pocket = 到你手里", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much. I'm really glad I bought travel insurance.",
            textZh: "非常感谢。真庆幸买了旅行保险。",
          },
          {
            speaker: "them",
            role: "理赔专员",
            textEn: "That's exactly what it's for. I hope your wrist heals quickly. Take care, and don't hesitate to call if you need anything else.",
            textZh: "保险就是为了这种时候用的。希望你的手腕早日康复。保重，有任何需要随时打电话。",
            keyPhrases: [
              { en: "heals quickly", zh: "早日康复" },
              { en: "take care", zh: "保重" },
            ],
            alternativeExpressions: [
              { textEn: "That's what insurance is for! Hope your wrist gets better soon. Take it easy, and don't be shy about calling us if you need anything.", textZh: "保险就是为了这个！希望你手腕快点好。别太辛苦，有需要别不好意思打电话。", actionHint: "take it easy = 别太辛苦/注意休息, don't be shy = 别不好意思", frequency: "common" },
              { textEn: "This is exactly why you bought it! Wishing you a speedy recovery. Hit us up anytime if you have more questions.", textZh: "这就是你买保险的意义！祝你早日康复。有更多问题随时联系我们。", actionHint: "hit us up = 联系我们（口语）, speedy recovery = 早日康复", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 信用卡申请与使用 ====================
  {
    id: "banking-8",
    category: "banking",
    titleZh: "信用卡申请与使用",
    titleEn: "Credit Card Application & Usage",
    description: "在国外申请信用卡、了解信用评分系统、处理信用卡问题",
    otherRole: "银行客户经理",
    otherRoleIcon: "💳",
    flows: [
      // --- Flow 1: 咨询申请信用卡 ---
      {
        id: "credit-card-apply",
        titleZh: "申请信用卡",
        titleEn: "Applying for a Credit Card",
        description: "作为新移民或留学生咨询如何申请第一张信用卡",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to apply for a credit card. I moved to the US about three months ago and I don't have any credit history here yet.",
            textZh: "你好，我想申请信用卡。我大约三个月前搬到美国，这里还没有任何信用记录。",
            culturalNote: "在美国，信用记录（credit history）和信用分数（credit score）非常重要，影响租房、贷款甚至找工作。新移民建立信用是第一要务。",
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "Welcome! Building credit is an important first step. Since you don't have US credit history, I'd recommend starting with a secured credit card. With a secured card, you put down a deposit that becomes your credit limit.",
            textZh: "欢迎！建立信用是重要的第一步。由于您没有美国信用记录，我建议从一张有担保信用卡开始。有担保卡需要您存一笔押金，这笔押金就是您的信用额度。",
            alternativeExpressions: [
              { textEn: "So since you're starting from scratch credit-wise, your best bet is a secured card. You put down a deposit and that's your limit. It's the easiest way to start building your credit score.", textZh: "因为你的信用记录从零开始，最好的选择是有担保卡。存一笔押金那就是你的额度。这是建立信用分最简单的方式。", actionHint: "from scratch = 从零开始, best bet = 最好的选择", frequency: "common" },
              { textEn: "No credit history here yet? That's totally normal for new arrivals. A secured card is the way to go — you basically front the money as a deposit, and that's your spending limit.", textZh: "还没有信用记录？新来的人都这样很正常。有担保卡最合适——你先存一笔钱当押金就是你的消费额度。", actionHint: "front the money = 先付钱/预付", frequency: "common" },
            ],
            keyPhrases: [
              { en: "credit history", zh: "信用记录" },
              { en: "secured credit card", zh: "有担保信用卡" },
              { en: "deposit", zh: "押金/存款" },
              { en: "credit limit", zh: "信用额度" },
            ],
            vocabNotes: {
              "secured credit card": {
                meaningInContext: "在这句话里表示：需要先存入押金作为担保的信用卡，专门为没有信用记录的人设计",
                similarUsage: "类似用法：A secured card is the best way to start building credit.",
              },
            },
          },
          {
            speaker: "you",
            textEn: "How does the secured card work? And how long until I can get a regular credit card?",
            textZh: "有担保卡怎么运作？多久之后能拿到普通信用卡？",
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "You deposit, say, $500, and that becomes your spending limit. Use it for small purchases and pay the full balance every month — on time. After about 6 to 12 months of responsible use, we'll review your account and may upgrade you to an unsecured card with a higher limit. Your deposit gets refunded at that point.",
            textZh: "比如你存500美元，这就是你的消费额度。用它做小额消费，每月按时还清全部余额。大约6到12个月的良好使用后，我们会审查你的账户，可能升级为无担保卡并提高额度。到时候押金会退还。",
            keyPhrases: [
              { en: "spending limit", zh: "消费额度" },
              { en: "pay the full balance", zh: "还清全部余额" },
              { en: "on time", zh: "按时" },
              { en: "responsible use", zh: "负责任的使用" },
              { en: "unsecured card", zh: "无担保卡/普通信用卡" },
              { en: "refunded", zh: "退还" },
            ],
            alternativeExpressions: [
              { textEn: "Think of the deposit as a safety net. Use the card normally — just make sure to pay it off each month. Good habits now lead to a better credit score later.", textZh: "把押金想象成安全网。正常用卡——每月记得还清。现在的好习惯会带来以后更好的信用分。", actionHint: "确认理解并询问更多细节", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "What's a good credit score in the US? I keep hearing people talk about it.",
            textZh: "在美国多少算好的信用分？我一直听人提到。",
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "Credit scores range from 300 to 850. Here's a rough breakdown: below 580 is poor, 580 to 669 is fair, 670 to 739 is good, 740 to 799 is very good, and 800 plus is excellent. For most things like renting an apartment or getting a car loan, you'll want at least 670.",
            textZh: "信用分范围是300到850。大致分级：580以下是差，580到669是一般，670到739是好，740到799是很好，800以上是优秀。租房或车贷等大部分场景至少需要670。",
            alternativeExpressions: [
              { textEn: "It goes from 300 to 850. Anything under 580 is rough. 580 to 670 is okay-ish. 670 to 740 is solid — that's where you want to be for renting, car loans, all that. Above 740 is great, and 800 plus is basically gold.", textZh: "范围是300到850。580以下比较惨。580到670算凑合。670到740不错——租房、车贷什么的至少要这个分。740以上很好，800以上基本就是金牌了。", actionHint: "okay-ish = 还凑合, solid = 不错/靠谱", frequency: "common" },
              { textEn: "Think of it like a report card — 300 to 850. Below 580 and you'll have a tough time. 670 and above is where doors start opening for apartments and loans. 740 plus gets you the best rates on everything.", textZh: "就像成绩单——300到850。580以下日子不好过。670以上租房和贷款的门就打开了。740以上什么都能拿到最好的利率。", actionHint: "doors start opening = 机会/可能性打开了", frequency: "common" },
            ],
            keyPhrases: [
              { en: "credit scores", zh: "信用分" },
              { en: "breakdown", zh: "分级/细分" },
              { en: "car loan", zh: "车贷" },
            ],
            culturalMeaning: "美国的信用分系统（FICO score）影响生活方方面面。中国虽然有芝麻信用等系统，但美国的信用分制度更严格、影响更深远。",
          },
          {
            speaker: "you",
            textEn: "What factors affect my credit score? I want to make sure I'm doing everything right from the start.",
            textZh: "什么因素影响信用分？我想从一开始就做对。",
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "Great question. The biggest factor is payment history — always pay on time. Second is credit utilization — try to use less than 30 percent of your limit. Length of credit history matters too, which is why starting early is smart. Don't apply for too many cards at once, and don't close old accounts.",
            textZh: "好问题。最大的因素是还款记录——一定要按时还。第二是信用使用率——尽量用不超过额度的30%。信用历史长度也很重要，这就是为什么尽早开始很明智。不要同时申请太多卡，也不要关掉旧账户。",
            alternativeExpressions: [
              { textEn: "Number one rule: pay your bill on time, every time. Number two: don't max out your card — keep it under 30% of your limit. The longer you've had credit, the better. And don't go crazy applying for a bunch of cards all at once.", textZh: "第一条规则：每次都按时还账单。第二：不要刷爆卡——用不超过额度的30%。信用历史越长越好。也别一口气申请一堆卡。", actionHint: "max out = 刷爆, go crazy = 疯狂地", frequency: "common" },
              { textEn: "The short version: pay on time, don't spend more than a third of your limit, and let your accounts age. Avoid opening too many accounts at once and never close your oldest card. That's the recipe for a good score.", textZh: "简单来说：按时还款，不要花超过额度的三分之一，让账户时间越长越好。不要同时开太多账户也别关掉最老的卡。这就是好信用分的秘诀。", actionHint: "the short version = 简单来说, let your accounts age = 让账户慢慢积累时间", frequency: "common" },
            ],
            keyPhrases: [
              { en: "payment history", zh: "还款记录" },
              { en: "credit utilization", zh: "信用使用率" },
              { en: "length of credit history", zh: "信用历史长度" },
              { en: "close old accounts", zh: "关掉旧账户" },
            ],
            vocabNotes: {
              "credit utilization": {
                meaningInContext: "在这句话里表示：你已使用的信用额度占总额度的百分比。比如额度1000用了300就是30%",
                similarUsage: "类似用法：Keep your credit utilization below 30% for a better score.",
              },
            },
          },
          {
            speaker: "you",
            textEn: "This is really helpful. Let me apply for the secured card today. What documents do I need?",
            textZh: "这些信息太有用了。我今天就申请有担保卡。需要什么文件？",
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "You'll need your passport, your Social Security Number or ITIN, proof of address like a utility bill or lease, and your initial deposit — minimum $200, maximum $2,500. The application takes about 15 minutes and you'll usually get a decision the same day.",
            textZh: "你需要护照、社会安全号码或 ITIN、地址证明如水电单或租约、以及初始押金——最低200美元，最高2500美元。申请大概15分钟，通常当天就能知道结果。",
            alternativeExpressions: [
              { textEn: "Grab your passport, SSN or ITIN, something to prove your address — utility bill, lease, whatever — and your deposit. $200 minimum, $2,500 max. We can knock out the application in about 15 minutes and you'll know right away.", textZh: "带护照、SSN或ITIN、地址证明——水电单、租约什么的——和押金。最低200最高2500。15分钟就能搞定申请，马上就知道结果。", actionHint: "knock out = 快速完成, know right away = 马上知道", frequency: "common" },
              { textEn: "Passport, Social or ITIN, proof of address, and your deposit — anywhere from $200 to $2,500. The whole thing takes 15 minutes tops, and most people get approved on the spot.", textZh: "护照、社安号或ITIN、地址证明、押金——200到2500美元。整个过程最多15分钟，大部分人当场批准。", actionHint: "tops = 最多, on the spot = 当场", frequency: "common" },
            ],
            keyPhrases: [
              { en: "Social Security Number", zh: "社会安全号码" },
              { en: "ITIN", zh: "个人纳税识别号" },
              { en: "proof of address", zh: "地址证明" },
              { en: "utility bill", zh: "水电单" },
              { en: "initial deposit", zh: "初始押金" },
            ],
            localVariants: {
              "en-US": "You'll need your SSN or ITIN and proof of address.",
              "en-GB": "You'll need your National Insurance number and proof of address.",
              "en-AU": "You'll need your Tax File Number and proof of identity.",
            },
          },
        ],
      },

      // --- Flow 2: 信用卡被盗刷 ---
      {
        id: "card-fraud",
        titleZh: "信用卡被盗刷",
        titleEn: "Credit Card Fraud",
        description: "发现信用卡被盗刷后的处理流程",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn: "I need to report unauthorized charges on my credit card. There are three transactions I didn't make — totaling about $800.",
            textZh: "我需要报告信用卡上的未授权消费。有三笔不是我做的交易——总共大约800美元。",
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn: "I'm sorry to hear that. Let me pull up your account. Can you verify your identity first? I'll need your full name, the last four digits of the card, and your date of birth.",
            textZh: "很遗憾。让我调出你的账户。能先验证你的身份吗？我需要你的全名、卡号后四位和出生日期。",
            keyPhrases: [
              { en: "unauthorized charges", zh: "未授权消费" },
              { en: "verify your identity", zh: "验证身份" },
              { en: "last four digits", zh: "后四位" },
            ],
            alternativeExpressions: [
              { textEn: "Oh no, that's not good. Let me get into your account. First though — for security I need to verify who you are. Full name, last four of the card number, and your birthday?", textZh: "不好。我来进你的账户。不过首先——为了安全我需要确认你的身份。全名、卡号后四位和生日？", actionHint: "last four = 后四位（简略说法）", frequency: "common" },
              { textEn: "I'm really sorry about that. Before I can access your account, I need to confirm your identity real quick. Can you give me your full name, the last four digits on the card, and DOB?", textZh: "真的很抱歉。在查看你的账户之前，我需要快速确认身份。能告诉我全名、卡号后四位和出生日期吗？", actionHint: "DOB = date of birth 出生日期的缩写", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "My name is Wang Wei, card ending in 4523, born March 15, 1988. The suspicious charges are from yesterday — an electronics store for $350, an online purchase for $275, and a gas station for $180.",
            textZh: "我叫王伟，卡号尾号4523，1988年3月15日出生。可疑消费是昨天的——一家电子产品店350美元，一笔网购275美元，一个加油站180美元。",
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn: "I can see those transactions. First, I'm going to freeze your card immediately to prevent any further unauthorized use. You won't be charged for these transactions — under federal law, your liability for unauthorized credit card charges is limited to $50, and our bank has a zero liability policy.",
            textZh: "我能看到这些交易。首先，我立刻冻结你的卡防止进一步未授权使用。这些交易你不需要承担——根据联邦法律，未授权信用卡消费你的责任上限是50美元，而且我们银行有零责任政策。",
            alternativeExpressions: [
              { textEn: "I see them. Okay, first things first — I'm freezing your card right now. The good news is, you're not on the hook for any of this. By law, your max liability is $50, but we do zero liability, so you won't pay a dime.", textZh: "我看到了。好的，先做最重要的——我现在就冻结你的卡。好消息是这些你都不用承担。法律规定上限50美元，但我们是零责任政策，你一分钱都不用付。", actionHint: "on the hook = 承担责任, not a dime = 一分钱都不用", frequency: "common" },
              { textEn: "Yep, I can see all three. Let me lock down your card right now so nothing else goes through. Don't worry about the money — we have a zero liability policy for fraud, so you won't owe anything.", textZh: "嗯，三笔都看到了。我现在就锁定你的卡不让再有交易通过。钱不用担心——我们有欺诈零责任政策，你不需要付任何费用。", actionHint: "lock down = 锁定, goes through = 通过/成功", frequency: "common" },
            ],
            keyPhrases: [
              { en: "freeze your card", zh: "冻结你的卡" },
              { en: "unauthorized use", zh: "未授权使用" },
              { en: "federal law", zh: "联邦法律" },
              { en: "liability", zh: "责任/赔偿义务" },
              { en: "zero liability policy", zh: "零责任政策" },
            ],
            vocabNotes: {
              "zero liability policy": {
                meaningInContext: "在这句话里表示：银行的零责任政策，意味着如果卡被盗刷你不需要承担任何损失",
                similarUsage: "类似用法：Most major banks offer zero liability protection for fraud.",
              },
            },
          },
          {
            speaker: "you",
            textEn: "That's a relief. How did this happen? My card is still in my wallet.",
            textZh: "那就放心了。这怎么发生的？卡还在我钱包里。",
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn: "It could be skimming — where criminals copy your card information from an ATM or payment terminal. Or it could be from a data breach at a retailer you've shopped at. We'll investigate the source. In the meantime, I'm issuing a replacement card that will arrive in 5 to 7 business days. Would you like expedited shipping for $15?",
            textZh: "可能是盗刷器——犯罪分子从ATM或支付终端复制你的卡信息。也可能是你消费过的商家数据泄露。我们会调查来源。同时，我在为你发一张新卡，5到7个工作日到。要加15美元的加急快递吗？",
            alternativeExpressions: [
              { textEn: "Hard to say for sure. Maybe a card skimmer somewhere, or a data breach at a store you've used. We'll dig into it. New card's on the way — should get it in a week. Want to fast-track it for $15?", textZh: "很难说具体怎么发生的。可能是某个地方的盗刷器，或者你去过的商家数据泄露。我们会查。新卡已经在路上——大约一周到。要花15块加急吗？", actionHint: "fast-track = 加急处理, dig into it = 深入调查", frequency: "common" },
              { textEn: "Could be a skimmer on an ATM or gas pump, or maybe a hacked website. These things happen unfortunately. I'm ordering your replacement card now — 5 to 7 days standard, or $15 for rush delivery.", textZh: "可能是ATM或加油机上的盗刷器，或者被黑客攻击的网站。这种事不幸时有发生。我正在下单补办新卡——标准5到7天，或者15美元加急。", actionHint: "rush delivery = 加急快递", frequency: "common" },
            ],
            keyPhrases: [
              { en: "skimming", zh: "盗刷器/侧录" },
              { en: "data breach", zh: "数据泄露" },
              { en: "payment terminal", zh: "支付终端" },
              { en: "replacement card", zh: "补办卡/新卡" },
              { en: "expedited shipping", zh: "加急快递" },
            ],
            culturalMeaning: "\"Skimming\" 在美国是很常见的信用卡诈骗手段。加油站、ATM 和餐厅是高发地点。现在很多卡用芯片（chip）技术来防范。",
          },
          {
            speaker: "you",
            textEn: "Yes, please expedite it. But what do I do in the meantime? I need a card for daily expenses.",
            textZh: "是的，请加急。但这段时间我怎么办？我需要卡来日常消费。",
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn: "You can add your card to Apple Pay or Google Pay right away — the digital wallet will get the new card number instantly even before the physical card arrives. You can also visit any branch to get a temporary card today. Is there anything else I can help you with?",
            textZh: "你可以马上把卡添加到 Apple Pay 或 Google Pay——数字钱包会立即获得新卡号，不用等实体卡到。你也可以去任何网点今天就领一张临时卡。还有什么需要帮助的吗？",
            keyPhrases: [
              { en: "digital wallet", zh: "数字钱包" },
              { en: "physical card", zh: "实体卡" },
              { en: "temporary card", zh: "临时卡" },
              { en: "branch", zh: "网点/分行" },
            ],
            alternativeExpressions: [
              { textEn: "In the meantime, your digital wallet will update automatically. You can also get a rush replacement at any of our branches.", textZh: "在此期间你的数字钱包会自动更新。你也可以在我们任何网点加急补办。", actionHint: "选择方便的方式获取新卡", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "The digital wallet option is great. Should I also file a police report for the fraud?",
            textZh: "数字钱包这个选项很好。我还需要为这个诈骗报警吗？",
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn: "It's not required for the refund, but I'd recommend it — it creates an official record and may help catch the criminals. You should also check your credit report for any suspicious activity. You can get a free report at annualcreditreport.com. And consider placing a fraud alert on your credit file — that makes it harder for someone to open accounts in your name.",
            textZh: "退款不需要报警，但我建议报——这会创建一个官方记录并可能有助于抓住罪犯。你也应该查看信用报告有没有可疑活动。可以在 annualcreditreport.com 免费获取。也考虑在你的信用文件上设置欺诈警报——这样别人更难用你的名字开户。",
            keyPhrases: [
              { en: "credit report", zh: "信用报告" },
              { en: "suspicious activity", zh: "可疑活动" },
              { en: "fraud alert", zh: "欺诈警报" },
              { en: "credit file", zh: "信用文件" },
              { en: "open accounts in your name", zh: "用你的名字开户" },
            ],
            alternativeExpressions: [
              { textEn: "It can't hurt. A police report creates a paper trail, and it could help catch whoever did this. Also — pull your credit report at annualcreditreport.com, it's free. And put a fraud alert on your file so nobody can open new accounts using your info.", textZh: "报了没坏处。警察记录留个凭证，可能有助于抓到嫌犯。另外——在annualcreditreport.com查免费信用报告。然后设个欺诈警报防止别人用你的信息开新户。", actionHint: "can't hurt = 没有坏处, pull your credit report = 查你的信用报告", frequency: "common" },
              { textEn: "Not required, but I'd do it if I were you. Also, definitely check your credit report — annualcreditreport.com gives you one for free. And throw a fraud alert on there while you're at it. Better safe than sorry.", textZh: "不是必须的，但换作是我会报。另外一定要查你的信用报告——annualcreditreport.com免费的。顺便设个欺诈警报。小心无大错。", actionHint: "while you're at it = 顺便, better safe than sorry = 小心无大错", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 手机计划与网络 ====================
  {
    id: "banking-9",
    category: "banking",
    titleZh: "手机套餐选择",
    titleEn: "Mobile Phone Plan Selection",
    description: "在国外选择长期手机套餐、处理账单和网络问题",
    otherRole: "运营商工作人员",
    otherRoleIcon: "📱",
    flows: [
      // --- Flow 1: 选择长期手机套餐 ---
      {
        id: "phone-plan",
        titleZh: "选长期套餐",
        titleEn: "Choosing a Monthly Plan",
        description: "从旅游SIM卡升级到长期手机套餐",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I've been using a prepaid tourist SIM card but I'm staying in the US long-term now. I'd like to switch to a monthly plan. What do you recommend?",
            textZh: "你好，我一直在用预付费旅游SIM卡，但现在要长期在美国了。我想换成月租套餐。有什么推荐？",
          },
          {
            speaker: "them",
            role: "运营商工作人员",
            textEn: "Great, let me walk you through our options. We have three main plans: the Basic at $35 a month with 5GB data, the Standard at $55 with unlimited data, and the Premium at $75 with unlimited data plus international calling. Which is most important to you — data, international calls, or price?",
            textZh: "好的，我带你看看我们的选项。我们有三个主要套餐：基础版每月35美元含5GB流量，标准版55美元无限流量，高级版75美元无限流量加国际通话。对你来说什么最重要——流量、国际通话还是价格？",
            keyPhrases: [
              { en: "prepaid", zh: "预付费" },
              { en: "monthly plan", zh: "月租套餐" },
              { en: "unlimited data", zh: "无限流量" },
              { en: "international calling", zh: "国际通话" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! Are you looking for something budget-friendly, or do you need premium features like hotspot and international calls?", textZh: "当然！你想要经济实惠的还是需要热点和国际通话这些高端功能？", actionHint: "说明你的主要需求", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I call my family in China pretty often, so international calling is important. But $75 seems expensive. Are there any promotions or family plans?",
            textZh: "我经常给中国的家人打电话，所以国际通话很重要。但75美元好像挺贵的。有什么促销或家庭套餐吗？",
          },
          {
            speaker: "them",
            role: "运营商工作人员",
            textEn: "Good timing — we actually have a promotion right now. If you sign up for auto-pay, the Premium plan drops to $65 a month. And if you bring your own phone instead of buying one from us, there's an extra $5 discount. You could also consider using WeChat or WhatsApp for calls to China — those use data, not minutes.",
            textZh: "你来得正好——我们现在有促销。如果开通自动扣款，高级版降到每月65美元。如果你自带手机不从我们这买，额外再减5美元。你也可以考虑用微信或WhatsApp打电话到中国——用的是流量不是通话分钟。",
            alternativeExpressions: [
              { textEn: "You picked a good time — there's a promo going on. Auto-pay knocks it down to $65, and BYOD saves you another $5. Real talk though — most people just use WeChat or WhatsApp for international calls anyway. Way cheaper since it's just data.", textZh: "你来得很巧——正好有促销。自动扣款降到65，自带手机再省5块。说实话——大部分人用微信或WhatsApp打国际电话，便宜多了因为只用流量。", actionHint: "BYOD = bring your own device 自带设备, real talk = 说实话", frequency: "common" },
              { textEn: "Actually, you're in luck — we've got a deal running. Auto-pay gets the Premium down to $65, plus $5 off if you use your own phone. And honestly, for calling China, WeChat is free over Wi-Fi.", textZh: "你运气好——我们正在做活动。自动扣款高级版降到65，自带手机再减5块。说实话打中国电话的话微信用WiFi就免费。", actionHint: "in luck = 运气好, got a deal running = 正在做活动", frequency: "common" },
            ],
            keyPhrases: [
              { en: "auto-pay", zh: "自动扣款" },
              { en: "bring your own phone", zh: "自带手机" },
              { en: "promotion", zh: "促销" },
              { en: "discount", zh: "折扣" },
            ],
            vocabNotes: {
              "auto-pay": {
                meaningInContext: "在这句话里表示：每月自动从你的银行卡或信用卡扣费，不用手动付款",
                similarUsage: "类似用法：Set up auto-pay to avoid late fees.",
              },
            },
          },
          {
            speaker: "you",
            textEn: "That's true — I mostly use WeChat anyway. So maybe the Standard plan with unlimited data at $55 would be enough. Is the $55 plan's data really unlimited, or does it slow down after a certain amount?",
            textZh: "说得对——我大部分时候用微信。那标准版55美元无限流量可能就够了。55美元的套餐流量真的无限吗，还是用到一定量之后会限速？",
          },
          {
            speaker: "them",
            role: "运营商工作人员",
            textEn: "Smart question. The data is technically unlimited, but after 25GB in a billing cycle, speeds may be reduced during network congestion. Most people don't hit that limit unless they're streaming video all day. You also get 5GB of mobile hotspot data.",
            textZh: "好问题。流量技术上是无限的，但一个计费周期用超25GB后，在网络拥堵时可能会降速。大多数人到不了这个上限，除非整天看视频。你还有5GB的移动热点流量。",
            alternativeExpressions: [
              { textEn: "Good catch. So it's \"unlimited\" in quotes — after 25 gigs, you might notice slower speeds when the network is busy. Honestly though, most people don't even come close. And you get 5 gigs of hotspot too.", textZh: "问得好。说是\"无限\"但带引号——超过25G后网络忙的时候可能会慢。不过说实话大部分人根本用不到。另外还有5G热点流量。", actionHint: "good catch = 观察力好/问得好, in quotes = 带引号的（暗示有条件）", frequency: "common" },
              { textEn: "Here's the fine print — after 25GB per month, you could get deprioritized when the network's jammed. But for normal use like maps, messaging, and social media, you'll never notice. Plus 5GB hotspot.", textZh: "这是细则——每月超过25GB后网络拥堵时你的优先级可能会降低。但正常用地图、聊天和社交媒体完全感觉不到。另外还有5GB热点。", actionHint: "fine print = 细则/小字条款, deprioritized = 降低优先级", frequency: "occasional" },
            ],
            keyPhrases: [
              { en: "billing cycle", zh: "计费周期" },
              { en: "network congestion", zh: "网络拥堵" },
              { en: "speeds may be reduced", zh: "可能会降速" },
              { en: "mobile hotspot", zh: "移动热点" },
              { en: "streaming", zh: "流媒体/在线播放" },
            ],
            culturalMeaning: "美国的「无限流量」套餐大多有隐藏的限速条款。这跟中国运营商类似，但额度不同。一定要问清楚降速阈值。",
          },
          {
            speaker: "you",
            textEn: "Okay, I'll go with the Standard plan at $55 with auto-pay. Do I need to sign a contract?",
            textZh: "好的，我选标准版55美元的套餐加自动扣款。需要签合同吗？",
          },
          {
            speaker: "them",
            role: "运营商工作人员",
            textEn: "No contract required — it's month-to-month, so you can cancel or change plans anytime. I just need your ID and a credit or debit card for auto-pay setup. We can transfer your current number over from your prepaid card — it takes about 15 minutes. Would you like to keep your current number?",
            textZh: "不需要合同——按月付费，随时可以取消或换套餐。我只需要你的身份证和一张信用卡或借记卡来设置自动扣款。我们可以把你预付费卡的号码转过来——大约15分钟。要保留现在的号码吗？",
            keyPhrases: [
              { en: "month-to-month", zh: "按月付费/无合同" },
              { en: "cancel anytime", zh: "随时取消" },
              { en: "transfer your number", zh: "号码转移/携号转网" },
            ],
            alternativeExpressions: [
              { textEn: "No contract, no commitment — totally month-to-month. Just need your ID and a card for auto-pay. And we can port your number over from your prepaid SIM, takes about 15 minutes. Wanna keep the same number?", textZh: "没合同没约束——完全按月付。只需要证件和一张卡设自动扣款。你预付费SIM的号码我们可以转过来，大概15分钟。要保留号码吗？", actionHint: "port your number = 携号转网（行业术语但口语也常用）", frequency: "common" },
              { textEn: "Zero commitment — you can bounce anytime. I just need an ID and a payment card. If you want, I can move your existing number to the new plan. Takes like 15 minutes. Keep it or get a new one?", textZh: "零约束——随时可以走。我只需要证件和付款卡。如果你想的话我可以把你现在的号码转到新套餐。大概15分钟。保留号码还是要新的？", actionHint: "bounce = 离开/走（口语）", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please keep the same number. Everyone already has it. Let's do it!",
            textZh: "是的，请保留号码。大家都有了。办吧！",
          },
          {
            speaker: "them",
            role: "运营商工作人员",
            textEn: "Perfect. The transfer is processing now. While we wait, let me show you our app — you can manage your account, check data usage, pay bills, and even chat with support. Here's a QR code to download it. Your new plan will be active within the hour.",
            textZh: "好的。号码正在转移中。等待的时候我给你看看我们的APP——你可以管理账户、查看流量使用、付账和在线客服。这是下载的二维码。你的新套餐一小时内会激活。",
            keyPhrases: [
              { en: "transfer is processing", zh: "号码正在转移" },
              { en: "data usage", zh: "流量使用" },
              { en: "active within the hour", zh: "一小时内激活" },
              { en: "QR code", zh: "二维码" },
            ],
            alternativeExpressions: [
              { textEn: "Awesome, it's going through now. While that's cooking, scan this QR code to grab our app — super handy for checking your data, paying bills, all that good stuff. You should be up and running on the new plan within an hour.", textZh: "好的，正在处理。等的时候扫这个二维码下载我们的app——查流量、付账什么的特别方便。新套餐一小时内就能用了。", actionHint: "while that's cooking = 在那个处理的时候（口语）", frequency: "common" },
              { textEn: "Number transfer is in progress. In the meantime, download the app — here's a QR code. It's basically your one-stop shop for everything. Your new plan should kick in within the hour.", textZh: "号码正在转移。先下载app——这是二维码。基本上你所有的事情都能在里面搞定。新套餐一小时内生效。", actionHint: "one-stop shop = 一站式服务, kick in = 生效", frequency: "common" },
            ],
          },
        ],
      },

      // --- Flow 2: 账单问题和服务投诉 ---
      {
        id: "billing-complaint",
        titleZh: "账单问题",
        titleEn: "Billing Issue & Complaint",
        description: "发现手机账单比预期高，打电话投诉",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to ask about my latest bill. It's $120, but my plan is supposed to be $55 a month. Can you explain the extra charges?",
            textZh: "你好，我要问一下我最近的账单。显示120美元，但我的套餐应该是每月55美元。能解释一下额外费用吗？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Let me look into your account. I see the $55 plan charge, plus a $35 device insurance charge, a $15 international text message fee, and $15 in taxes and regulatory fees.",
            textZh: "我看一下你的账户。我看到55美元的套餐费，加35美元的设备保险费、15美元的国际短信费，和15美元的税费及监管费。",
            keyPhrases: [
              { en: "device insurance", zh: "设备保险" },
              { en: "international text message fee", zh: "国际短信费" },
              { en: "taxes and regulatory fees", zh: "税费和监管费" },
            ],
            alternativeExpressions: [
              { textEn: "Let me pull it up... Okay, so you've got the $55 plan, then there's $35 for device insurance, $15 for international texting, and $15 in taxes and fees. That's how you get to $120.", textZh: "我查一下……好的，55美元套餐，然后35美元设备保险，15美元国际短信，15美元税费。加起来就是120美元。", actionHint: "that's how you get to = 这就是怎么加到的", frequency: "common" },
              { textEn: "I see the breakdown here. $55 for your plan, device insurance at $35, international texts came out to $15, and then taxes and fees are another $15. That adds up to $120.", textZh: "我看到明细了。套餐55，设备保险35，国际短信15，税费15。加起来120。", actionHint: "breakdown = 明细/分项", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Wait, I never signed up for device insurance! And I thought international texting was included in my plan. I want both charges removed.",
            textZh: "等等，我从来没有开通设备保险！而且我以为国际短信包含在套餐里了。我要求取消这两笔费用。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "I can see the device insurance was added when you activated your plan — it might have been checked by default during signup. I can remove it going forward and refund this month's charge. For international texting, your Standard plan includes domestic texting only. International texts are 25 cents each.",
            textZh: "我看到设备保险是你激活套餐时添加的——注册时可能默认勾选了。我可以取消后续的并退还这个月的费用。至于国际短信，你的标准套餐只包含国内短信。国际短信每条25美分。",
            alternativeExpressions: [
              { textEn: "So it looks like the insurance got tacked on when you signed up — probably a default checkbox. I can take that off and credit you for this month. As for the texts, international texting isn't included in your plan — those are 25 cents a pop.", textZh: "看起来保险是你注册时被加上的——可能是个默认勾选。我可以取消并退这个月的。至于短信，国际短信不包含在你的套餐里——每条25美分。", actionHint: "tacked on = 被加上, 25 cents a pop = 每条25美分", frequency: "common" },
              { textEn: "Yeah, that insurance was auto-added at signup — one of those sneaky default checkboxes. I'll remove it and refund you. The international texting though, that's separate from your plan. Each text to China costs a quarter.", textZh: "嗯，保险是注册时自动加的——那种偷偷默认勾选的。我帮你取消并退款。但国际短信是套餐外的。发到中国每条25美分。", actionHint: "a quarter = 25美分（口语）, sneaky = 偷偷摸摸的", frequency: "common" },
            ],
            keyPhrases: [
              { en: "checked by default", zh: "默认勾选" },
              { en: "going forward", zh: "从现在起/以后" },
              { en: "refund", zh: "退款" },
              { en: "domestic texting", zh: "国内短信" },
            ],
            vocabNotes: {
              "checked by default": {
                meaningInContext: "在这句话里表示：在注册过程中默认被勾选了，很多人不注意就被添加了额外服务",
                similarUsage: "类似用法：Always uncheck any add-ons that are checked by default.",
              },
            },
            culturalMeaning: "在美国很多服务注册时会有默认勾选的附加服务（add-ons），这是常见的营销手段。一定要仔细检查每一项。",
          },
          {
            speaker: "you",
            textEn: "That's sneaky — having insurance checked by default without clearly telling me. I want a full refund for both charges. And I need to add an international texting package going forward.",
            textZh: "这太不厚道了——默认勾选保险也不清楚告诉我。我要求两笔费用全额退款。以后我需要加一个国际短信包。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "I completely understand your frustration, and I apologize for the confusion. I've processed the $35 insurance refund — it'll appear on your next statement. For the international texts, since this seems to have been a misunderstanding, I'll issue a one-time courtesy credit of $15 as well. As for an international texting package, we have one for $10 a month that gives you unlimited texts to over 200 countries.",
            textZh: "完全理解您的不满，为造成的困惑道歉。35美元的保险退款已经处理——会在下一期账单上显示。至于国际短信，因为这似乎是个误会，我也给您一次性的15美元善意抵扣。关于国际短信包，我们有一个每月10美元的，可以发无限量短信到200多个国家。",
            alternativeExpressions: [
              { textEn: "I totally get it — that's frustrating. Here's what I'll do: $35 insurance refund, done. And since the texting thing wasn't made clear, I'm gonna throw in a $15 credit for that too. Going forward, we've got an international texting add-on for $10 a month — unlimited texts worldwide.", textZh: "完全理解——确实让人恼火。我这样处理：35美元保险退款搞定。短信的事因为没说清楚，我再给你15美元抵扣。以后的话我们有个10美元/月的国际短信附加包——全球无限发。", actionHint: "throw in = 额外给/免费附送, add-on = 附加包", frequency: "common" },
              { textEn: "You're right to be upset. I've already reversed the $35 for insurance. As a goodwill gesture, I'll credit you the $15 for the texts too. For the future, there's a $10 international texting package that covers 200-plus countries.", textZh: "你有权不满。35美元保险费已经退了。作为善意补偿，短信那15美元也给你抵扣了。以后的话有个10美元的国际短信包覆盖200多个国家。", actionHint: "reversed = 退还/撤销, goodwill gesture = 善意补偿", frequency: "common" },
            ],
            keyPhrases: [
              { en: "processed the refund", zh: "处理了退款" },
              { en: "next statement", zh: "下一期账单" },
              { en: "courtesy credit", zh: "善意抵扣" },
              { en: "one-time", zh: "一次性的" },
              { en: "unlimited texts", zh: "无限量短信" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, add the $10 international texting package. And can you send me a confirmation email with all the changes we just made?",
            textZh: "好的，加上10美元的国际短信包。能给我发一封确认邮件包含我们刚才做的所有更改吗？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Done! I've added the international texting package starting today, removed the device insurance, and applied both credits. You'll receive a confirmation email within 10 minutes. Your new monthly charge going forward will be $65 plus taxes — that's the $55 plan plus $10 for international texting. Is there anything else I can help you with?",
            textZh: "完成了！国际短信包今天开始生效，设备保险已取消，两笔抵扣已应用。你10分钟内会收到确认邮件。以后的月费是65美元加税——55美元套餐加10美元国际短信。还有什么需要帮忙的吗？",
            keyPhrases: [
              { en: "starting today", zh: "今天开始生效" },
              { en: "applied both credits", zh: "两笔抵扣已应用" },
              { en: "confirmation email", zh: "确认邮件" },
            ],
            alternativeExpressions: [
              { textEn: "All set! International texts are live, insurance is gone, and both credits are on your account. Check your email in about 10 minutes for confirmation. From now on, you're looking at $65 a month plus tax. Anything else?", textZh: "搞定！国际短信已开通，保险已取消，两笔抵扣已到账。10分钟左右查邮件确认。以后月费65美元加税。还有事吗？", actionHint: "live = 已开通/生效, looking at = 大约是（金额）", frequency: "common" },
              { textEn: "Everything's updated! Texting package is on, insurance is off, both refunds applied. I'll shoot you a confirmation email shortly. Your bill going forward is $65 plus tax — much better, right? Need anything else?", textZh: "全部更新了！短信包开了，保险关了，两笔退款已应用。确认邮件马上发。以后的账单是65加税——好多了吧？还需要什么吗？", actionHint: "shoot you an email = 发邮件给你", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "No, that's everything. Thanks for resolving this — I appreciate it.",
            textZh: "没了，就这些。谢谢解决了这些问题——非常感谢。",
          },
        ],
      },
    ],
  },

  // ==================== 汇款与跨境转账 ====================
  {
    id: "banking-10",
    category: "banking",
    titleZh: "在线汇款与跨境转账",
    titleEn: "Online Money Transfer & Cross-Border Remittance",
    description: "在国外使用在线服务向中国汇款、了解汇率和手续费",
    otherRole: "汇款服务客服",
    otherRoleIcon: "💸",
    flows: [
      // --- Flow 1: 第一次在线汇款回中国 ---
      {
        id: "first-remittance",
        titleZh: "第一次汇款回中国",
        titleEn: "First Remittance to China",
        description: "第一次使用在线服务向国内家人汇款",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to send money to my parents in China. What's the best way to do that?",
            textZh: "你好，我想给中国的父母汇款。最好的方式是什么？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "There are several options. Traditional wire transfers through your bank work but they're slow and expensive — usually $25 to $45 per transfer plus unfavorable exchange rates. Online services like Wise, Remitly, or Western Union are often cheaper and faster. How much are you looking to send?",
            textZh: "有几种选择。通过银行的传统电汇可以但速度慢且贵——通常每次25到45美元加不利的汇率。像 Wise、Remitly 或 Western Union 这样的在线服务通常更便宜更快。你打算汇多少？",
            keyPhrases: [
              { en: "wire transfers", zh: "电汇" },
              { en: "unfavorable exchange rates", zh: "不利的汇率" },
              { en: "remittance", zh: "汇款" },
            ],
            alternativeExpressions: [
              { textEn: "Great question! It depends on how much you're sending and how fast you need it there. We have several options — bank wire, online transfer, or cash pickup.", textZh: "好问题！取决于你汇多少和需要多快到。我们有几个选择——银行电汇、在线转账或现金领取。", actionHint: "说明金额和需求", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I want to send $2,000. What's the current exchange rate, and how much will it cost?",
            textZh: "我想汇2000美元。现在汇率是多少，费用是多少？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Right now, the mid-market rate is 1 USD to 7.25 CNY. Our rate is 7.22 — that small difference is how we cover part of our costs. The transfer fee is $4.99 for bank deposit delivery. So for $2,000, your parents would receive approximately 14,410 yuan. The total cost to you would be $2,004.99.",
            textZh: "目前中间市场汇率是1美元兑7.25人民币。我们的汇率是7.22——这个小差额是我们的部分成本。银行存款方式的转账费是4.99美元。所以汇2000美元，你父母大约收到14410元人民币。你的总花费是2004.99美元。",
            alternativeExpressions: [
              { textEn: "The real rate right now is 7.25 — we're giving you 7.22, so we're pretty close. Plus $4.99 for the transfer. Bottom line: you pay $2,004.99, your parents get about 14,410 yuan.", textZh: "真实汇率现在7.25——我们给你7.22，非常接近了。加上4.99美元转账费。总结：你付2004.99美元，你父母收到大约14410元人民币。", actionHint: "bottom line = 最终结果/总结", frequency: "common" },
              { textEn: "Mid-market is 7.25, and we're at 7.22 — so barely any markup. Transfer fee is just under 5 bucks. All in, $2,004.99 from your end, and roughly 14,410 yuan lands on theirs.", textZh: "中间价7.25，我们给7.22——几乎没加价。转账费不到5块。总共你这边2004.99美元，他们那边大约到14410人民币。", actionHint: "all in = 全部算上, barely any markup = 几乎没加价", frequency: "common" },
            ],
            keyPhrases: [
              { en: "mid-market rate", zh: "中间市场汇率" },
              { en: "transfer fee", zh: "转账费" },
              { en: "bank deposit delivery", zh: "银行存款方式" },
              { en: "approximately", zh: "大约" },
            ],
            vocabNotes: {
              "mid-market rate": {
                meaningInContext: "在这句话里表示：银行间的中间汇率，是最真实的汇率。不同汇款服务会在此基础上加价",
                similarUsage: "类似用法：Always compare the service rate to the mid-market rate.",
              },
            },
          },
          {
            speaker: "you",
            textEn: "How long does the transfer take? And what information do I need from my parents?",
            textZh: "转账需要多长时间？我需要父母提供什么信息？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "For delivery to a Chinese bank account, it typically takes one to two business days. We need the recipient's full name in Chinese characters and pinyin, their bank account number, the bank name and branch name, and the CNAPS code — that's the Chinese bank routing number. Your parents can find this information in their banking app.",
            textZh: "汇到中国银行账户通常需要一到两个工作日。我们需要收款人的中文全名和拼音、银行账号、银行名称和支行名称，以及 CNAPS 代码——就是中国的银行路由号码。你父母在银行APP里能找到这些信息。",
            alternativeExpressions: [
              { textEn: "Bank transfers to China usually land in one to two business days. I'll need their full name — both Chinese characters and pinyin — bank and branch details, account number, and the CNAPS code. Have your folks check their banking app for all that.", textZh: "银行转账到中国通常一到两个工作日到。我需要他们的全名——中文和拼音——银行支行信息、账号和CNAPS代码。让你家人在银行app里查。", actionHint: "folks = 家人（口语）, land = 到账", frequency: "common" },
              { textEn: "One to two business days for a bank deposit. Here's what I need: their name in Chinese and pinyin, account number, which bank and branch, and the CNAPS code — think of it as the Chinese version of a routing number. It's all in their bank app.", textZh: "银行存款方式一到两个工作日。我需要：中英文名字、账号、银行和支行、CNAPS代码——可以理解为中国版的路由号。都在银行app里有。", actionHint: "用类比解释CNAPS code", frequency: "common" },
            ],
            keyPhrases: [
              { en: "recipient", zh: "收款人" },
              { en: "Chinese characters and pinyin", zh: "中文和拼音" },
              { en: "bank account number", zh: "银行账号" },
              { en: "branch name", zh: "支行名称" },
              { en: "CNAPS code", zh: "CNAPS代码/联行号" },
              { en: "routing number", zh: "路由号码" },
            ],
          },
          {
            speaker: "you",
            textEn: "My parents aren't very tech-savvy. Can they receive the money through WeChat Pay or Alipay instead?",
            textZh: "我父母不太懂技术。他们能通过微信支付或支付宝收款吗？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Actually, yes! We recently added Alipay as a delivery option for China. Your parents just need their Alipay account linked to their phone number. Delivery is almost instant — usually within minutes. The fee is the same. WeChat Pay isn't available as a direct option yet, but once the money is in their bank account, they can access it through WeChat.",
            textZh: "可以的！我们最近增加了支付宝作为中国的收款选项。你父母只需要支付宝账户绑定手机号。到账几乎是即时的——通常几分钟。费用一样。微信支付暂时不能直接收款，但钱到银行账户后可以通过微信使用。",
            keyPhrases: [
              { en: "delivery option", zh: "收款选项" },
              { en: "linked to their phone number", zh: "绑定手机号" },
              { en: "almost instant", zh: "几乎即时" },
            ],
            alternativeExpressions: [
              { textEn: "Oh, good news — we just rolled out Alipay for China! They just need their Alipay tied to their phone number. And it's basically instant — minutes, not days. Same fee. WeChat Pay isn't there yet, but bank transfers show up in WeChat Wallet anyway.", textZh: "好消息——我们刚推出了支付宝中国收款！只要支付宝绑了手机号就行。而且基本上秒到——几分钟不是几天。费用一样。微信支付还不行，不过银行转账也会显示在微信钱包里。", actionHint: "rolled out = 推出/上线", frequency: "common" },
              { textEn: "Great question — and yes, Alipay is now an option! Super easy for older folks — they just need their Alipay account. It's nearly instant too. WeChat isn't supported directly yet, but they can always move the money over from their bank through WeChat.", textZh: "好问题——是的，支付宝现在可以了！对长辈来说很简单——只要有支付宝账户就行。而且几乎秒到。微信暂时不直接支持，但钱到银行后可以通过微信转。", actionHint: "older folks = 长辈/老人家（口语）", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's perfect — Alipay will be much easier for them. Is there a limit on how much I can send per month?",
            textZh: "太好了——支付宝对他们来说容易多了。每月汇款有限额吗？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Yes, there are limits. As an individual, you can send up to $50,000 per year under China's foreign exchange regulations. Our platform limit is $10,000 per transaction and $25,000 per month. For amounts over $10,000, we'll need additional identity verification — that's a regulatory requirement. Anything above $10,000 in a single transfer also needs to be reported under US law.",
            textZh: "有的。根据中国外汇管理规定，个人每年可以接收等值5万美元。我们平台的限额是每笔1万美元、每月2.5万美元。超过1万美元需要额外身份验证——这是监管要求。根据美国法律，单笔超过1万美元的转账也需要申报。",
            alternativeExpressions: [
              { textEn: "Yeah, a few caps to be aware of. China has a $50K annual limit for individuals receiving foreign currency. On our end, $10K per transfer and $25K monthly. Anything over $10K triggers extra ID checks — both for us and for Uncle Sam.", textZh: "有几个限额要知道。中国个人年度接收外汇限额5万美元。我们这边是每笔1万每月2.5万。超过1万要额外验证身份——我们这边和美国政府都有要求。", actionHint: "Uncle Sam = 美国政府（口语代称）, caps = 上限", frequency: "common" },
              { textEn: "There are. China caps incoming transfers at $50K a year per person. Our platform maxes out at $10K per send and $25K per month. Over $10K and we need more ID verification — it's the law on both sides.", textZh: "有的。中国个人年度收汇上限5万美元。我们平台每笔最高1万每月2.5万。超过1万需要更多身份验证——两边的法律都要求。", actionHint: "maxes out = 最高限额到", frequency: "common" },
            ],
            keyPhrases: [
              { en: "foreign exchange regulations", zh: "外汇管理规定" },
              { en: "per transaction", zh: "每笔" },
              { en: "identity verification", zh: "身份验证" },
              { en: "regulatory requirement", zh: "监管要求" },
              { en: "reported", zh: "申报" },
            ],
            culturalMeaning: "中国有每人每年5万美元的外汇额度限制。在美国，单笔超过1万美元的现金交易必须向 FinCEN 申报。了解两国的汇款法规很重要。",
          },
          {
            speaker: "you",
            textEn: "Got it. Let me set up the transfer now. I'll send $2,000 via Alipay to my mother's account.",
            textZh: "明白了。我现在就设置转账。通过支付宝给我妈妈的账户汇2000美元。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Great, I'll walk you through it. First, enter the amount and select Alipay as the delivery method. Then enter your mother's full name and Alipay ID — usually her phone number. You'll see a confirmation screen showing the exact amount in CNY she'll receive. Once you confirm, I'll send you a tracking number so you can monitor the transfer. Ready?",
            textZh: "好的，我带你操作。首先输入金额并选择支付宝作为收款方式。然后输入你母亲的全名和支付宝ID——通常是她的手机号。你会看到一个确认页面显示她将收到的准确人民币金额。确认后我会发一个追踪号给你，可以监控转账进度。准备好了吗？",
            keyPhrases: [
              { en: "delivery method", zh: "收款方式" },
              { en: "confirmation screen", zh: "确认页面" },
              { en: "tracking number", zh: "追踪号" },
              { en: "monitor the transfer", zh: "监控转账进度" },
            ],
            alternativeExpressions: [
              { textEn: "Let me walk you through it step by step. Punch in $2,000, pick Alipay, type in your mom's name and phone number. It'll show you exactly how much she'll get in yuan. Hit confirm and I'll text you a tracking number. Easy peasy. Ready to go?", textZh: "我一步步带你操作。输入2000美元，选支付宝，输入你妈的名字和手机号。系统会显示她能收到多少人民币。点确认我就发追踪号给你。超简单。准备好了吗？", actionHint: "easy peasy = 超简单（口语）, hit confirm = 点确认", frequency: "common" },
              { textEn: "Alright, here we go. Amount first, then choose Alipay as how you want it delivered. Your mom's name and Alipay number — that's usually her phone number. You'll get a preview of the exact yuan amount. Once you're good, confirm and you'll get a tracking number right away.", textZh: "好的开始。先输入金额，选支付宝收款方式。你妈的名字和支付宝号——通常就是手机号。你会看到准确的人民币金额预览。没问题就确认，马上就能拿到追踪号。", actionHint: "here we go = 开始了, once you're good = 没问题的话", frequency: "common" },
            ],
          },
        ],
      },

      // --- Flow 2: 汇款问题与争议 ---
      {
        id: "remittance-issue",
        titleZh: "汇款出问题",
        titleEn: "Remittance Issue",
        description: "汇款后钱没到或金额不对，需要追踪和解决",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I sent $1,500 to China three days ago but my mother says she hasn't received it yet. The tracking shows it was \"completed\" — what's going on?",
            textZh: "你好，我三天前往中国汇了1500美元，但我妈说还没收到。追踪显示已\"完成\"——怎么回事？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "I'm sorry about that. Let me look up your transfer with the tracking number. Can you provide it?",
            textZh: "很抱歉。让我用追踪号查一下你的转账。能提供一下吗？",
            keyPhrases: [
              { en: "tracking shows completed", zh: "追踪显示已完成" },
              { en: "tracking number", zh: "追踪号" },
            ],
            alternativeExpressions: [
              { textEn: "That's definitely concerning. Let me check on that for you — can you give me the tracking number?", textZh: "这确实让人担心。我帮你查查——能给我追踪号吗？", actionHint: "that's concerning = 这让人担心", frequency: "common" },
              { textEn: "Sorry to hear that. Let me dig into it — what's your tracking number?", textZh: "抱歉听到这个。我来查查——你的追踪号是什么？", actionHint: "dig into it = 深入查看", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "The tracking number is TRX-2026-88431. I sent it to my mother's bank account at Industrial and Commercial Bank of China.",
            textZh: "追踪号是 TRX-2026-88431。我汇到我妈在工商银行的账户。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "I found it. The transfer was sent successfully on our end, but I can see it was held by the receiving bank for compliance review. This sometimes happens with international transfers to China — the bank may need to verify the purpose of the funds. Your mother should contact her bank directly to complete the verification.",
            textZh: "找到了。我们这边转账已成功发出，但我看到收款银行因合规审查暂扣了。这在向中国的国际转账中有时会发生——银行可能需要核实资金用途。你妈妈需要直接联系她的银行完成核实。",
            keyPhrases: [
              { en: "held by the receiving bank", zh: "被收款银行暂扣" },
              { en: "compliance review", zh: "合规审查" },
              { en: "verify the purpose of the funds", zh: "核实资金用途" },
            ],
            alternativeExpressions: [
              { textEn: "The money left our system, but the recipient bank has flagged it for additional verification. This is normal for amounts over a certain threshold in China.", textZh: "钱已经从我们系统发出了，但收款银行标记了需要额外核实。在中国超过一定金额这是正常的。", actionHint: "让收款人联系银行", frequency: "common" },
            ],
            vocabNotes: {
              "compliance review": {
                meaningInContext: "在这句话里表示：银行根据反洗钱法规对跨境汇款进行的合规性审查",
                similarUsage: "类似用法：Large transfers often go through compliance review.",
              },
            },
          },
          {
            speaker: "you",
            textEn: "What does she need to tell the bank? She doesn't speak English and this sounds complicated.",
            textZh: "她需要跟银行说什么？她不会说英语，听起来很复杂。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Don't worry — she'll be dealing with a Chinese bank in Chinese. She just needs to go to her local ICBC branch with her ID card and tell them she's expecting an international transfer. They may ask her to fill out a form stating the purpose — she can write \"family support\" or \"living expenses from overseas family member.\" That's usually enough to release the funds.",
            textZh: "别担心——她是跟中国银行用中文打交道。她只需要带身份证去工商银行网点，告诉他们她在等一笔国际汇款。他们可能让她填一张表说明用途——她可以写\"家庭赡养\"或\"海外家人生活费汇款\"。这通常就够了，钱就会释放。",
            keyPhrases: [
              { en: "local branch", zh: "当地网点" },
              { en: "international transfer", zh: "国际汇款" },
              { en: "purpose", zh: "用途" },
              { en: "family support", zh: "家庭赡养" },
              { en: "release the funds", zh: "释放资金" },
            ],
            alternativeExpressions: [
              { textEn: "No language barrier — she'll be talking to a Chinese bank in Chinese. All she has to do is pop into her local ICBC with her ID and say she's waiting for money from overseas. They might have her fill out a quick form — \"family support\" as the reason is totally fine.", textZh: "没有语言障碍——她是跟中国银行用中文打交道。只要带身份证去工商银行说在等海外汇款就行。可能让她填个表——写\"家庭赡养\"就完全没问题。", actionHint: "pop into = 去一趟（很随意的说法）", frequency: "common" },
              { textEn: "She won't need English at all — it's her own bank in China. Tell her to bring her ID to the nearest ICBC branch and mention the incoming international wire. If they ask her to state the purpose, \"living expenses from family abroad\" should do the trick.", textZh: "完全不需要英语——是她自己在中国的银行。让她带身份证去最近的工商银行说有国际汇款进来。如果让她说明用途，写\"海外家人生活费\"就行。", actionHint: "should do the trick = 应该能解决", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, I'll tell her. What if the bank still doesn't release the money?",
            textZh: "好的，我告诉她。如果银行还是不放款怎么办？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "If it's not resolved within five business days, call us back and we can initiate a trace on the funds through the SWIFT network. In the worst case, if the receiving bank rejects the transfer, the money will be returned to your account — though it may take 7 to 10 days. We won't charge you again for the re-transfer.",
            textZh: "如果五个工作日内没解决，再打电话给我们，我们可以通过SWIFT网络对资金发起追踪。最坏的情况，如果收款银行拒绝转账，钱会退回你的账户——可能需要7到10天。重新汇款我们不会再收费。",
            keyPhrases: [
              { en: "initiate a trace", zh: "发起追踪" },
              { en: "SWIFT network", zh: "SWIFT网络" },
              { en: "rejects the transfer", zh: "拒绝转账" },
              { en: "returned to your account", zh: "退回你的账户" },
              { en: "re-transfer", zh: "重新汇款" },
            ],
            alternativeExpressions: [
              { textEn: "Give it five business days. If it's still stuck, call us back and we'll trace it through SWIFT. Worst case scenario, if the bank over there bounces it back, the money comes back to you in 7 to 10 days. And we won't charge you to resend it.", textZh: "等五个工作日。还是卡着就打给我们，我们通过SWIFT追踪。最坏的情况，对方银行退回来的话，7到10天钱退到你的账户。重新汇不再收费。", actionHint: "bounces it back = 退回来, worst case scenario = 最坏的情况", frequency: "common" },
              { textEn: "If nothing happens in five business days, ring us and we'll put a trace on it. If for some reason the bank refuses the transfer, the money bounces back to you — takes about a week or so. No extra fee to send it again.", textZh: "五个工作日没动静打给我们，我们发起追踪。如果银行因为什么原因拒绝转账，钱会退给你——大约一周左右。重新发不收额外费用。", actionHint: "ring us = 打给我们, nothing happens = 没有动静", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Alright. And one more thing — my mother said the amount she saw was less than expected. Is there an intermediary bank fee I should know about?",
            textZh: "好的。还有一件事——我妈说她看到的金额比预期的少。是不是有什么中间银行费用？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Yes, that's possible. Sometimes an intermediary bank — a bank that processes the transfer between us and the receiving bank — charges a fee. It's usually $10 to $30. Unfortunately, we can't control that. Also, the receiving bank in China may charge a small incoming wire fee. For future transfers, using Alipay delivery avoids both of these fees since it goes directly without intermediary banks.",
            textZh: "有可能。有时候中间银行——就是在我们和收款银行之间处理转账的银行——会收一笔费用。通常是10到30美元。这个我们没法控制。另外收款银行也可能收小额来电汇费。以后可以用支付宝收款方式，不经过中间银行，就能避免这两笔费用。",
            keyPhrases: [
              { en: "intermediary bank", zh: "中间银行" },
              { en: "incoming wire fee", zh: "来电汇费" },
              { en: "can't control", zh: "没法控制" },
              { en: "goes directly", zh: "直接到账" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, that's the annoying part about bank wires. There's often a middleman bank that skims $10 to $30 off the top, and we have no say in that. The receiving bank might take a cut too. Pro tip: next time use Alipay — it skips the middleman entirely, so what you send is what they get.", textZh: "是的，这是银行电汇烦人的地方。中间银行经常扣10到30美元，我们管不了。收款银行也可能扣一点。专业建议：下次用支付宝——完全跳过中间环节，你汇多少他们收多少。", actionHint: "skims off the top = 从上面扣费, no say in that = 管不了", frequency: "common" },
              { textEn: "Unfortunately, yes. When money goes through intermediary banks, they sometimes take a fee — could be anywhere from $10 to $30. Plus the bank in China might charge a receiving fee. That's why Alipay is the move for China — it goes direct, no middlemen taking a cut.", textZh: "很遗憾确实可能。钱经过中间银行时他们有时会收费——10到30美元不等。中国的银行也可能收接收费。所以汇中国用支付宝才是正确选择——直接到账没有中间人扣费。", actionHint: "that's why X is the move = 所以X才是正确选择", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. Next time I'll use Alipay. Thanks for explaining everything so clearly.",
            textZh: "了解了。下次我用支付宝。谢谢把一切解释得这么清楚。",
          },
        ],
      },
    ],
  },
];
