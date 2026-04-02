import type { PresetScene } from "../scene-types";

/**
 * 💰 银行扩展场景（Banking Extension）
 * 20 个银行业务扩展场景，涵盖开户、兑换、转账、信用卡、贷款等
 */
export const BANKING_SCENES_EXT: PresetScene[] = [
  // ==================== 1. 开设银行账户 ====================
  {
    id: "banking-open-account",
    category: "banking",
    titleZh: "开设银行账户",
    titleEn: "Opening a Bank Account",
    description: "在美国银行开设新账户，了解账户类型和所需材料",
    otherRole: "银行客户经理",
    otherRoleIcon: "🏦",
    flows: [
      {
        id: "basic",
        titleZh: "基本开户流程",
        titleEn: "Basic Account Opening",
        description: "第一次去银行开户的标准流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to open a bank account. I just moved here from China.",
            textZh: "你好，我想开一个银行账户。我刚从中国搬过来。",
            casualVersion: "Hey, I'm new here and need to set up a bank account.",
            culturalNote: "在美国开户通常需要两个有效证件（护照+签证/驾照），以及一个美国地址。有些银行接受学生证。",
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "Welcome! We'd be happy to help you with that. Are you looking to open a checking account, a savings account, or both?",
            textZh: "欢迎！很高兴为您服务。您想开活期账户、储蓄账户，还是两个都开？",
            keyPhrases: [
              { en: "checking account", zh: "活期/支票账户" },
              { en: "savings account", zh: "储蓄账户" },
            ],
            alternativeExpressions: [
              { textEn: "Hi there! So are you looking for a checking, savings, or do you wanna do both?", textZh: "你好！你是要开活期、储蓄，还是两个都要？", actionHint: "更随意的问法，意思一样", frequency: "common" },
              { textEn: "Welcome in! What kind of account are we setting up today — checking, savings, or both?", textZh: "欢迎！今天要开什么类型的账户——活期、储蓄还是都开？", actionHint: "用 we 拉近距离，很常见的服务用语", frequency: "common" },
              { textEn: "Great, we can definitely help with that. Did you have a specific account type in mind?", textZh: "没问题，我们可以帮您。您有想好要开什么类型的账户吗？", actionHint: "没有直接列选项，而是开放式提问", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I think I need both. What's the difference between them?",
            textZh: "我觉得两个都需要。它们有什么区别？",
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "A checking account is for everyday transactions — paying bills, using your debit card. A savings account earns interest but has limited withdrawals. Most people open both.",
            textZh: "活期账户用于日常交易——付账单、刷借记卡。储蓄账户有利息但取款次数有限。大多数人两个都开。",
            keyPhrases: [
              { en: "everyday transactions", zh: "日常交易" },
              { en: "debit card", zh: "借记卡" },
              { en: "earns interest", zh: "赚取利息" },
              { en: "limited withdrawals", zh: "取款次数有限" },
            ],
            alternativeExpressions: [
              { textEn: "So basically, checking is your day-to-day account — bills, groceries, that kind of thing. Savings is where you park money and earn a little interest.", textZh: "简单说，活期就是你日常用的——付账单、买菜什么的。储蓄就是把钱放着赚点利息。", actionHint: "用 basically 开头的口语化解释", frequency: "common" },
              { textEn: "Think of checking as your spending account and savings as your rainy-day fund. Most folks get both.", textZh: "把活期想成花钱的账户，储蓄想成备用金。大多数人两个都开。", actionHint: "rainy-day fund 指应急备用金", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll open both then. What documents do I need?",
            textZh: "那我两个都开。我需要什么证件？",
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "I'll need a valid photo ID — your passport will work — and a secondary ID like a visa or driver's license. We'll also need your Social Security number or ITIN, and a US mailing address.",
            textZh: "我需要一个有效的带照片证件——护照就行——再加一个副证件，比如签证或驾照。还需要您的社保号或个人报税号，以及一个美国邮寄地址。",
            keyPhrases: [
              { en: "valid photo ID", zh: "有效带照片证件" },
              { en: "Social Security number", zh: "社保号（SSN）" },
              { en: "ITIN", zh: "个人报税识别号" },
              { en: "US mailing address", zh: "美国邮寄地址" },
            ],
            alternativeExpressions: [
              { textEn: "I'll need to see a government-issued ID — passport is fine — plus something else like a visa or license. And we'll need your SSN or ITIN and an address here in the States.", textZh: "我需要看一个政府签发的证件——护照就行——再加签证或驾照之类的。还需要您的SSN或ITIN和美国地址。", actionHint: "government-issued ID 是更正式的说法", frequency: "common" },
              { textEn: "Just bring your passport and one more form of ID. We'll also need your Social or tax ID number and a local address.", textZh: "带上护照和另一个证件就行。还需要社保号或税号，以及本地地址。", actionHint: "Social 是 Social Security number 的口语简称", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I don't have a Social Security number yet. Can I still open an account?",
            textZh: "我还没有社保号。还能开户吗？",
            culturalNote: "没有SSN的新移民/留学生可以用ITIN或护照开户，部分银行（如Chase、Bank of America）允许仅凭护照开户。",
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "Yes, absolutely. We can use your passport and visa. We'll just have you fill out a W-8BEN form for tax purposes. Is there a minimum deposit you'd like to start with?",
            textZh: "完全可以。我们可以用您的护照和签证。只需要填一个W-8BEN税务表格。您想存入多少作为初始存款？",
            keyPhrases: [
              { en: "W-8BEN form", zh: "W-8BEN税务表格（非美国居民用）" },
              { en: "tax purposes", zh: "税务用途" },
              { en: "minimum deposit", zh: "最低存款" },
            ],
            alternativeExpressions: [
              { textEn: "Oh yeah, no worries. Your passport and visa will do. We just need you to fill out a quick tax form. How much did you wanna put in to start?", textZh: "没问题。护照和签证就行。只需要填个简单的税表。您想先存多少？", actionHint: "no worries 表示完全没问题，非常口语化", frequency: "common" },
              { textEn: "That's totally fine — we work with international clients all the time. Just a small tax form and we're good. Any idea how much you'd like to deposit initially?", textZh: "完全没问题——我们经常服务国际客户。填个小税表就行了。您打算初始存多少？", actionHint: "we're good 意思是搞定了", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd like to deposit five hundred dollars to start. Will I get a debit card today?",
            textZh: "我先存500美元。今天能拿到借记卡吗？",
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "We'll issue you a temporary card today, and your permanent card with your name on it will arrive by mail in seven to ten business days. You can also set up online banking and our mobile app right away.",
            textZh: "我们今天会给您一张临时卡，带您名字的正式卡会在7到10个工作日内邮寄到。您也可以马上设置网上银行和我们的手机App。",
            keyPhrases: [
              { en: "temporary card", zh: "临时卡" },
              { en: "permanent card", zh: "正式卡" },
              { en: "business days", zh: "工作日" },
              { en: "online banking", zh: "网上银行" },
            ],
            alternativeExpressions: [
              { textEn: "You'll get a temp card today, and the real one with your name should show up in the mail in about a week or so. We can also get you set up on our app right now.", textZh: "今天给你一张临时卡，带你名字的正式卡大约一周左右寄到。我们现在就可以帮你设置App。", actionHint: "temp card 是 temporary card 的口语缩写，show up 意思是到达", frequency: "common" },
              { textEn: "I'll give you a temporary card to use in the meantime. Your personalized card will be mailed out and should arrive within seven to ten business days.", textZh: "我先给您一张临时卡用着。个性化的正式卡会邮寄出去，7到10个工作日内到。", actionHint: "in the meantime 意思是在此期间", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 2. 兑换外币 ====================
  {
    id: "banking-currency-exchange",
    category: "banking",
    titleZh: "兑换外币",
    titleEn: "Currency Exchange",
    description: "在银行或兑换点将人民币兑换成当地货币",
    otherRole: "兑换柜员",
    otherRoleIcon: "💱",
    flows: [
      {
        id: "basic",
        titleZh: "基本兑换流程",
        titleEn: "Basic Currency Exchange",
        description: "在银行兑换外币的标准对话",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to exchange some Chinese yuan for US dollars, please.",
            textZh: "你好，我想把人民币换成美元。",
            casualVersion: "Hey, can I change some Chinese money to dollars?",
          },
          {
            speaker: "them",
            role: "兑换柜员",
            textEn: "Sure. How much would you like to exchange? And do you have the currency with you?",
            textZh: "可以。您想换多少？您带了现金吗？",
            keyPhrases: [
              { en: "how much would you like to exchange", zh: "您想换多少" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, no problem. How much are we looking at? You got the cash on you?", textZh: "没问题。大概换多少？现金带了吗？", actionHint: "how much are we looking at 是口语化的问金额方式", frequency: "common" },
              { textEn: "Sure thing. What amount did you have in mind? And is it cash you're exchanging?", textZh: "当然。您想换多少？是换现金吗？", actionHint: "sure thing 等于 sure/of course", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have about five thousand yuan. What's today's exchange rate?",
            textZh: "我有大约5000元人民币。今天的汇率是多少？",
            culturalNote: "银行汇率通常比机场或街边兑换点更优惠。建议对比几家银行的汇率再决定。",
          },
          {
            speaker: "them",
            role: "兑换柜员",
            textEn: "Today's rate is one US dollar to seven point two yuan. For five thousand yuan, you'd receive approximately six hundred and ninety-four dollars. There's also a ten-dollar service fee.",
            textZh: "今天的汇率是1美元兑7.2元人民币。5000元人民币大约可以换694美元。另外有10美元的手续费。",
            keyPhrases: [
              { en: "exchange rate", zh: "汇率" },
              { en: "approximately", zh: "大约" },
              { en: "service fee", zh: "手续费" },
            ],
            alternativeExpressions: [
              { textEn: "Right now the rate is seven point two yuan to the dollar. So five thousand yuan comes out to about six-ninety-four. There's a ten-buck fee on top of that.", textZh: "现在汇率是7.2元兑1美元。5000元大概换694美元。另外还有10块钱手续费。", actionHint: "ten-buck 是 ten-dollar 的口语说法，on top of that 意思是额外", frequency: "common" },
              { textEn: "Today we're at seven-two for the yuan-dollar rate. That'd give you roughly six hundred ninety-four bucks, minus a ten-dollar processing fee.", textZh: "今天人民币对美元汇率是7.2。大概能给你694美元，减去10美元手续费。", actionHint: "bucks 是 dollars 的口语说法", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That seems a bit lower than the market rate. Is there a better rate for larger amounts?",
            textZh: "好像比市场汇率低一点。换多一点的话有更好的汇率吗？",
          },
          {
            speaker: "them",
            role: "兑换柜员",
            textEn: "The rate includes our spread, which is how we cover costs. For amounts over ten thousand yuan, we can offer a slightly better rate. Would you like to exchange more?",
            textZh: "汇率里包含了我们的差价，这是我们的运营成本。超过一万元人民币的话，可以给您稍好一点的汇率。您想换更多吗？",
            keyPhrases: [
              { en: "spread", zh: "买卖差价/点差" },
              { en: "cover costs", zh: "覆盖成本" },
              { en: "slightly better rate", zh: "稍好的汇率" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, our rate's got a markup built in — that's how we make our money. If you're doing over ten thousand yuan, we can cut you a better deal.", textZh: "是的，我们的汇率里有加价——这是我们的盈利方式。超过一万元的话可以给你更好的价格。", actionHint: "markup 指加价，cut you a better deal 意思是给更好的条件", frequency: "common" },
              { textEn: "The rate does include our margin. For bigger amounts — say, over ten thousand yuan — we can bump the rate up a bit for you.", textZh: "汇率确实包含了我们的利润。大额的话——比如超过一万元——可以给您稍微好一点的汇率。", actionHint: "margin 指利润空间，bump up 意思是提高一点", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "No, five thousand is fine. I'll go ahead with that. Can I get it in smaller bills?",
            textZh: "不了，5000就行。就这样换吧。能给我换成小面额的吗？",
            culturalNote: "在美国，100美元大钞有时不太好用，很多小店不收。建议要一些20美元面额的。",
          },
          {
            speaker: "them",
            role: "兑换柜员",
            textEn: "Of course. Would you like it in twenties and fifties, or a mix of denominations?",
            textZh: "当然。您要20和50面额的，还是各种面额混着来？",
            keyPhrases: [
              { en: "twenties and fifties", zh: "20和50面额的" },
              { en: "denominations", zh: "面额" },
            ],
            alternativeExpressions: [
              { textEn: "Sure. How do you want it broken down? Twenties? Fifties? A little bit of everything?", textZh: "行。怎么分？20的？50的？还是各种都来点？", actionHint: "broken down 意思是怎么分配面额", frequency: "common" },
              { textEn: "No problem. You want big bills or small bills, or a mix?", textZh: "没问题。要大钞还是小钞，还是混着来？", actionHint: "big bills/small bills 是口语化的面额说法", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "A mix would be great — mostly twenties, please.",
            textZh: "混着来吧——以20的为主。",
          },
          {
            speaker: "them",
            role: "兑换柜员",
            textEn: "Here you go — three hundred in twenties, two hundred in fifties, and the rest in tens and fives. Please count it and sign the receipt.",
            textZh: "给您——300美元是20面额的，200美元是50面额的，剩下的是10和5面额的。请点一下数然后在收据上签字。",
            keyPhrases: [
              { en: "count it", zh: "点一下数" },
              { en: "sign the receipt", zh: "在收据上签字" },
            ],
            alternativeExpressions: [
              { textEn: "Alright, here's your cash — three hundred in twenties, two hundred in fifties, and the rest in smaller bills. Go ahead and count it, then sign here for me.", textZh: "好的，这是您的钱——300是20的，200是50的，剩下是小面额的。数一下，然后在这签个名。", actionHint: "sign here for me 是很自然的请人签字说法", frequency: "common" },
              { textEn: "There you go. Make sure it all looks right and just put your signature on the receipt.", textZh: "给您。确认没问题后在收据上签个字就行。", actionHint: "there you go 是递东西给人时的常用语", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 3. 使用ATM ====================
  {
    id: "banking-atm-use",
    category: "banking",
    titleZh: "使用ATM",
    titleEn: "Using an ATM",
    description: "在国外第一次使用ATM，了解操作界面和注意事项",
    otherRole: "热心路人",
    otherRoleIcon: "🏧",
    flows: [
      {
        id: "basic",
        titleZh: "ATM基本操作",
        titleEn: "Basic ATM Usage",
        description: "向路人请教ATM操作的基本对话",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I've never used an American ATM before. Could you help me with this?",
            textZh: "打扰一下，我没用过美国的ATM。你能帮我看看吗？",
            casualVersion: "Hey, sorry to bother you — can you help me with this ATM?",
          },
          {
            speaker: "them",
            role: "热心路人",
            textEn: "Sure, no problem. First, insert your card with the chip facing up. Then it'll ask for your PIN.",
            textZh: "当然，没问题。首先，把卡插进去，芯片朝上。然后会让你输入密码。",
            keyPhrases: [
              { en: "insert your card", zh: "插入卡" },
              { en: "chip facing up", zh: "芯片朝上" },
              { en: "PIN", zh: "密码（Personal Identification Number）" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, sure! Just stick your card in there — chip side up — and it'll ask you for your PIN.", textZh: "行啊！把卡插进去——芯片朝上——然后会让你输密码。", actionHint: "stick your card in 是很口语的插卡说法", frequency: "common" },
              { textEn: "Of course! Pop your card in with the chip going up. Then just punch in your PIN when it asks.", textZh: "当然！把卡塞进去芯片朝上。然后输入密码就行。", actionHint: "pop in 和 punch in 都是很随意的动作描述", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, I've entered my PIN. Now it's asking me to select a transaction type.",
            textZh: "好的，密码输了。现在让我选交易类型。",
          },
          {
            speaker: "them",
            role: "热心路人",
            textEn: "You'll want to hit \"Withdrawal\" if you need cash. Then it might ask if it's from checking or savings — pick checking for a regular account.",
            textZh: "如果要取现金就按\"Withdrawal\"。然后可能会问是从checking还是savings取——普通账户选checking。",
            keyPhrases: [
              { en: "withdrawal", zh: "取款" },
              { en: "checking or savings", zh: "活期还是储蓄" },
            ],
            alternativeExpressions: [
              { textEn: "Hit \"Withdrawal\" for cash. Then it'll probably ask checking or savings — just go with checking.", textZh: "按\"Withdrawal\"取现金。然后可能问活期还是储蓄——选checking就行。", actionHint: "go with 意思是选择", frequency: "common" },
              { textEn: "If you need cash, tap the withdrawal option. It might give you a choice between accounts — pick checking unless you specifically want savings.", textZh: "要取现金就点取款选项。可能会让你选账户——选活期，除非你特意要从储蓄取。", actionHint: "unless you specifically want 表示除非你特别想要", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's asking if I want to be charged in US dollars or Chinese yuan. Which should I pick?",
            textZh: "它问我想用美元还是人民币结算。我应该选哪个？",
            culturalNote: "ATM提供的\'本币结算\'（DCC）汇率通常很差。务必选择当地货币（美元），让你的发卡行按自己的汇率换算。",
          },
          {
            speaker: "them",
            role: "热心路人",
            textEn: "Always choose US dollars — the local currency. If you pick yuan, the machine uses a terrible exchange rate. Your bank back home will convert it at a much better rate.",
            textZh: "一定选美元——当地货币。如果选人民币，机器用的汇率很差。你国内的银行换算汇率好得多。",
            keyPhrases: [
              { en: "local currency", zh: "当地货币" },
              { en: "terrible exchange rate", zh: "很差的汇率" },
              { en: "convert", zh: "换算/转换" },
            ],
            alternativeExpressions: [
              { textEn: "Oh, always pick dollars. Don't let the machine do the conversion — they rip you off on the rate. Your own bank will give you a way better deal.", textZh: "哦，一定选美元。别让机器换算——汇率坑死人。你自己的银行汇率好得多。", actionHint: "rip you off 意思是宰你/坑你", frequency: "common" },
              { textEn: "Go with US dollars for sure. The yuan option has a horrible markup. Let your bank back home handle the conversion.", textZh: "肯定选美元。人民币选项加价太狠了。让你国内的银行来换算。", actionHint: "horrible markup 意思是加价很离谱", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it, thanks! One more thing — is it safe to use ATMs at night here?",
            textZh: "明白了，谢谢！再问一下——晚上在这里用ATM安全吗？",
          },
          {
            speaker: "them",
            role: "热心路人",
            textEn: "It's generally safer to use ATMs inside bank lobbies or well-lit areas. Avoid standalone machines in sketchy spots, and always cover the keypad when entering your PIN.",
            textZh: "在银行大厅里或光线好的地方用ATM一般比较安全。避免在偏僻地方用独立ATM，输密码时记得遮挡键盘。",
            keyPhrases: [
              { en: "bank lobbies", zh: "银行大厅" },
              { en: "well-lit areas", zh: "光线充足的地方" },
              { en: "standalone machines", zh: "独立ATM机" },
              { en: "cover the keypad", zh: "遮挡键盘" },
            ],
            alternativeExpressions: [
              { textEn: "Try to use ones inside a bank or somewhere with good lighting. Stay away from random ATMs in sketchy areas, and shield your PIN when you type it in.", textZh: "尽量用银行里面的或者光线好的地方的。远离偏僻地方的随机ATM，输密码的时候挡一下。", actionHint: "sketchy 意思是可疑的/不安全的，shield 意思是遮挡", frequency: "common" },
              { textEn: "Stick to ATMs at actual banks if you can. And always cup your hand over the keypad when you enter your PIN — just to be safe.", textZh: "尽量用银行的ATM。输密码时用手挡着键盘——安全起见。", actionHint: "cup your hand 意思是用手掌盖住，stick to 意思是尽量用", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 4. 银行转账 ====================
  {
    id: "banking-wire-transfer",
    category: "banking",
    titleZh: "银行转账",
    titleEn: "Wire Transfer",
    description: "在银行办理国内或国际电汇转账",
    otherRole: "银行柜员",
    otherRoleIcon: "🏦",
    flows: [
      {
        id: "basic",
        titleZh: "国际转账流程",
        titleEn: "International Wire Transfer",
        description: "办理国际电汇的标准对话",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to send a wire transfer to a bank account in China. Can you help me with that?",
            textZh: "你好，我需要向中国的银行账户电汇。你能帮我办理吗？",
            casualVersion: "Hey, I need to wire some money to China.",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Of course. For an international wire transfer, I'll need the recipient's full name, their bank name, the SWIFT code, and the account number. How much are you sending?",
            textZh: "当然。办理国际电汇，我需要收款人全名、银行名称、SWIFT代码和账号。您要汇多少？",
            keyPhrases: [
              { en: "wire transfer", zh: "电汇" },
              { en: "recipient", zh: "收款人" },
              { en: "SWIFT code", zh: "SWIFT代码（银行国际代码）" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, we can do that. I'll need the person's full name, their bank info, the SWIFT code, and account number. How much are you sending over?", textZh: "没问题，我们可以办。我需要对方全名、银行信息、SWIFT代码和账号。您要汇多少过去？", actionHint: "sending over 是汇款的口语说法", frequency: "common" },
              { textEn: "Absolutely. For an overseas wire, I'm gonna need the receiver's name, bank name and SWIFT, plus the account number. And what's the amount?", textZh: "当然。海外电汇的话，我需要收款人姓名、银行名和SWIFT，加上账号。金额是多少？", actionHint: "overseas wire 是国际电汇的另一种说法", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm sending two thousand dollars. Here's the bank information. How long will it take to arrive?",
            textZh: "我要汇2000美元。这是银行信息。多久能到账？",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "International wires typically take three to five business days. The fee is forty-five dollars for outgoing international transfers. The recipient's bank may also charge a receiving fee.",
            textZh: "国际电汇通常需要3到5个工作日。发出国际转账的手续费是45美元。收款银行可能也会收一笔接收费。",
            keyPhrases: [
              { en: "three to five business days", zh: "3到5个工作日" },
              { en: "outgoing international transfers", zh: "发出的国际转账" },
              { en: "receiving fee", zh: "接收费" },
            ],
            alternativeExpressions: [
              { textEn: "It usually takes about three to five business days to get there. The fee on our end is forty-five bucks. Keep in mind the bank on the other side might charge something too.", textZh: "通常3到5个工作日到。我们这边手续费45块。对方银行可能也会收费。", actionHint: "on our end/on the other side 指双方各自", frequency: "common" },
              { textEn: "International wires run about three to five days. There's a forty-five-dollar fee for sending, and the receiving bank may tack on their own charge.", textZh: "国际电汇大概3到5天。发送费45美元，收款银行可能还会加收一笔。", actionHint: "tack on 意思是额外加上", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Forty-five dollars? That's quite a lot. Are there any cheaper options?",
            textZh: "45美元？挺贵的。有更便宜的方式吗？",
            culturalNote: "银行电汇费用较高。Wise（原TransferWise）、Remitly等在线汇款服务通常费用更低、汇率更好。",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "For regular transfers, the bank wire is the most secure option. You could also look into online money transfer services, but I'd recommend our service for larger amounts since it's fully insured.",
            textZh: "对于普通转账，银行电汇是最安全的方式。您也可以看看在线汇款服务，但大额转账的话我推荐我们的服务，因为是全额保险的。",
            keyPhrases: [
              { en: "most secure option", zh: "最安全的方式" },
              { en: "online money transfer services", zh: "在线汇款服务" },
              { en: "fully insured", zh: "全额保险的" },
            ],
            alternativeExpressions: [
              { textEn: "The wire is the safest way to go, honestly. There are cheaper apps out there, but for big amounts I'd stick with us — everything's insured.", textZh: "说实话，电汇是最安全的。外面有更便宜的App，但大额的话我建议走我们的——全都有保险。", actionHint: "stick with us 意思是继续用我们的服务", frequency: "common" },
              { textEn: "Bank wires are the gold standard for security. You could try third-party services for smaller amounts, but we've got full coverage on our end.", textZh: "银行电汇在安全性上是金标准。小额可以试第三方服务，但我们这边有全额保障。", actionHint: "gold standard 意思是最高标准", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Alright, let's go with the wire transfer. Do I need to fill out any forms?",
            textZh: "好吧，就用电汇。我需要填什么表格吗？",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Yes, please fill out this wire transfer request form. Make sure the SWIFT code and account number are correct — once the money is sent, it's very difficult to recall. I'll also need your ID.",
            textZh: "是的，请填这张电汇申请表。请确认SWIFT代码和账号正确——钱一旦发出，很难撤回。我还需要您的身份证件。",
            keyPhrases: [
              { en: "wire transfer request form", zh: "电汇申请表" },
              { en: "recall", zh: "撤回" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, just fill this out. Double-check the SWIFT and account number — once it's gone, it's really hard to get back. And I'll need to see your ID.", textZh: "对，填一下这个。仔细核对SWIFT和账号——钱一旦出去就很难追回。另外我需要看您的证件。", actionHint: "once it's gone 意思是钱一旦出去了", frequency: "common" },
              { textEn: "Sure, here's the form. Just make sure all the banking details are right — wires are pretty much irreversible. I'll also need a photo ID from you.", textZh: "好的，这是表格。确保所有银行信息正确——电汇基本不可逆。我还需要您的证件。", actionHint: "irreversible 意思是不可逆的/无法撤回的", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 5. 存款 ====================
  {
    id: "banking-deposit",
    category: "banking",
    titleZh: "存款",
    titleEn: "Making a Deposit",
    description: "在银行柜台或通过ATM存入现金或支票",
    otherRole: "银行柜员",
    otherRoleIcon: "💵",
    flows: [
      {
        id: "basic",
        titleZh: "柜台存款",
        titleEn: "Counter Deposit",
        description: "在银行柜台存入现金的标准对话",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to make a deposit into my checking account, please.",
            textZh: "你好，我想往我的活期账户存钱。",
            casualVersion: "Hey, I need to deposit some cash.",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Sure. Do you have your account number or debit card with you? And will this be a cash deposit or a check?",
            textZh: "可以。您带了账号或借记卡吗？是存现金还是支票？",
            keyPhrases: [
              { en: "account number", zh: "账号" },
              { en: "cash deposit", zh: "现金存款" },
              { en: "check", zh: "支票" },
            ],
            alternativeExpressions: [
              { textEn: "Of course. You got your card or account number handy? And is this cash or a check?", textZh: "当然。您卡或账号带了吗？存现金还是支票？", actionHint: "handy 意思是手边有/方便拿到", frequency: "common" },
              { textEn: "Sure thing. I just need your debit card or account info. Are you depositing cash or a check today?", textZh: "没问题。我只需要您的借记卡或账户信息。今天存现金还是支票？", actionHint: "sure thing 是 sure 的加强版", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's a cash deposit. Here's my debit card and eight hundred dollars in cash.",
            textZh: "存现金。这是我的借记卡和800美元现金。",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Let me count that for you... that's eight hundred dollars even. Would you like a receipt for this deposit?",
            textZh: "我帮您数一下……正好800美元。您需要存款收据吗？",
            keyPhrases: [
              { en: "count that for you", zh: "帮您数一下" },
              { en: "eight hundred dollars even", zh: "正好800美元" },
              { en: "receipt", zh: "收据" },
            ],
            alternativeExpressions: [
              { textEn: "Let me run through this real quick... eight hundred on the dot. You want a receipt?", textZh: "我快速数一下……正好800。要收据吗？", actionHint: "on the dot 意思是整数/正好", frequency: "common" },
              { textEn: "Okay, that's eight hundred even. Want me to print you a receipt for that?", textZh: "好的，正好800。要打印收据吗？", actionHint: "even 在金额后面表示整数", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. Will the money be available right away?",
            textZh: "要的。钱马上就能用吗？",
            culturalNote: "现金存款通常当天可用。支票存款可能需要1-2个工作日才能完全到账（hold period）。",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "For cash deposits, the funds are available immediately. If it were a check, there could be a one- to two-day hold. Here's your receipt. Is there anything else I can help you with?",
            textZh: "现金存款的话，资金立即可用。如果是支票的话，可能会有1到2天的冻结期。这是您的收据。还需要办理其他业务吗？",
            keyPhrases: [
              { en: "funds are available immediately", zh: "资金立即可用" },
              { en: "hold", zh: "冻结期" },
              { en: "anything else", zh: "其他业务" },
            ],
            alternativeExpressions: [
              { textEn: "With cash, the money's in your account right away. Checks take a day or two to clear though. Here's your receipt — anything else I can do for you?", textZh: "现金的话钱马上到账。支票要一两天才能清算。这是您的收据——还需要办别的吗？", actionHint: "right away 意思是马上，clear 意思是到账", frequency: "common" },
              { textEn: "Cash deposits are available instantly. If it were a check, there'd be a short hold period. Here you go. Need anything else today?", textZh: "现金存款即时可用。如果是支票会有短暂冻结期。给您。今天还需要别的吗？", actionHint: "here you go 递收据时的常用语", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 6. 取款 ====================
  {
    id: "banking-withdrawal",
    category: "banking",
    titleZh: "取款",
    titleEn: "Making a Withdrawal",
    description: "在银行柜台取出大额现金",
    otherRole: "银行柜员",
    otherRoleIcon: "💰",
    flows: [
      {
        id: "basic",
        titleZh: "柜台取款",
        titleEn: "Counter Withdrawal",
        description: "在柜台取大额现金的对话",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to withdraw three thousand dollars from my savings account.",
            textZh: "你好，我想从储蓄账户取3000美元。",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Sure. May I see your ID and debit card, please? For withdrawals over a certain amount, we do need to verify your identity.",
            textZh: "好的。请出示您的身份证件和借记卡好吗？超过一定金额的取款，我们需要核实身份。",
            keyPhrases: [
              { en: "verify your identity", zh: "核实身份" },
              { en: "withdrawals over a certain amount", zh: "超过一定金额的取款" },
            ],
            alternativeExpressions: [
              { textEn: "No problem. Can I get your ID and card? For larger amounts we just need to confirm who you are.", textZh: "没问题。能给我看看证件和卡吗？大额取款我们需要确认身份。", actionHint: "can I get 是礼貌索要的口语说法", frequency: "common" },
              { textEn: "Sure thing. I'll just need to see some ID and your debit card — standard procedure for bigger withdrawals.", textZh: "当然。我需要看一下证件和借记卡——大额取款的标准流程。", actionHint: "standard procedure 意思是标准流程", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's my passport and my debit card. Is there a daily withdrawal limit?",
            textZh: "这是我的护照和借记卡。每天有取款限额吗？",
            culturalNote: "美国银行取现超过10,000美元需要填写CTR（货币交易报告），银行有义务向政府报告。这是反洗钱法规要求。",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "The ATM has a daily limit of five hundred dollars, but there's no limit at the counter for amounts under ten thousand. For amounts over ten thousand, we'll need to file a currency transaction report.",
            textZh: "ATM每日限额500美元，但柜台取10,000以下没有限制。超过10,000的话，我们需要填写一份货币交易报告。",
            keyPhrases: [
              { en: "daily limit", zh: "每日限额" },
              { en: "currency transaction report", zh: "货币交易报告" },
              { en: "no limit at the counter", zh: "柜台没有限制" },
            ],
            alternativeExpressions: [
              { textEn: "The ATM caps out at five hundred a day, but here at the window there's no cap under ten grand. Over ten thousand and we gotta fill out some extra paperwork.", textZh: "ATM每天最多取500，但柜台一万以下不限。超过一万的话我们得填额外的表格。", actionHint: "caps out 意思是到上限，ten grand 是一万美元的口语说法", frequency: "common" },
              { textEn: "ATMs have a five-hundred-dollar daily max. At the counter you're fine up to ten K — anything above that, there's a government reporting form we need to file.", textZh: "ATM每日上限500。柜台1万以下没问题——超过的话有政府要求的报告表格要填。", actionHint: "ten K 是 ten thousand 的口语缩写", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Three thousand is fine. Can I get it in hundred-dollar bills?",
            textZh: "3000就行。能给我100美元面额的吗？",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Absolutely. That's thirty hundreds. Let me count them out for you. Please verify the amount before you leave the counter.",
            textZh: "没问题。30张100的。我帮您数出来。请在离开柜台前确认金额。",
            keyPhrases: [
              { en: "count them out", zh: "数出来" },
              { en: "verify the amount", zh: "确认金额" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, thirty hundreds coming right up. Let me count those out. Just double-check before you step away, okay?", textZh: "好的，30张100马上好。我数出来。走之前再核对一下，好吗？", actionHint: "coming right up 意思是马上好，step away 意思是离开", frequency: "common" },
              { textEn: "You got it — thirty one-hundred-dollar bills. Here, take a look and make sure it's all there.", textZh: "没问题——30张100的。给您，看看数对不对。", actionHint: "you got it 表示没问题/马上办", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's correct. Thank you. Could I also get an updated balance on my account?",
            textZh: "没错。谢谢。能帮我查一下账户余额吗？",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "After this withdrawal, your savings account balance is twelve thousand four hundred and fifty dollars. Here's your receipt. Have a good day!",
            textZh: "取款后您的储蓄账户余额是12,450美元。这是您的收据。祝您愉快！",
            keyPhrases: [
              { en: "balance", zh: "余额" },
            ],
            alternativeExpressions: [
              { textEn: "You've got twelve thousand four-fifty left in savings after that. Here's your receipt. You're all set!", textZh: "取完后储蓄账户还剩12,450。收据给您。都办好了！", actionHint: "you're all set 意思是全部搞定了", frequency: "common" },
              { textEn: "That brings your savings balance down to twelve-four-fifty. Receipt's right here. Have a great day!", textZh: "这样您的储蓄余额变成12,450了。收据在这。祝您愉快！", actionHint: "brings down to 意思是降到", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 7. 办信用卡 ====================
  {
    id: "banking-credit-card",
    category: "banking",
    titleZh: "办信用卡",
    titleEn: "Applying for a Credit Card",
    description: "在银行申请信用卡，了解利率和福利",
    otherRole: "信用卡顾问",
    otherRoleIcon: "💳",
    flows: [
      {
        id: "basic",
        titleZh: "申请信用卡",
        titleEn: "Credit Card Application",
        description: "在银行咨询和申请信用卡",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I'm interested in applying for a credit card. What options do you have?",
            textZh: "我想申请信用卡。你们有什么选择？",
            culturalNote: "在美国，信用卡对建立信用记录非常重要。新移民可以先申请secured credit card（抵押信用卡），逐步建立信用。",
          },
          {
            speaker: "them",
            role: "信用卡顾问",
            textEn: "We have several options depending on your credit history. Do you already have a credit score in the US, or is this your first credit card here?",
            textZh: "我们有几种选择，取决于您的信用记录。您在美国已经有信用评分了吗，还是这是您在这里的第一张信用卡？",
            keyPhrases: [
              { en: "credit history", zh: "信用记录" },
              { en: "credit score", zh: "信用评分" },
            ],
            alternativeExpressions: [
              { textEn: "We've got a few cards to choose from. It really depends on where you're at credit-wise. Have you built up any credit here in the US yet?", textZh: "我们有几种卡可以选。主要看你信用情况。你在美国有信用记录了吗？", actionHint: "credit-wise 意思是在信用方面，built up credit 意思是建立信用", frequency: "common" },
              { textEn: "Great! So the best card for you really depends on your credit background. Is this your first time getting a card in the States?", textZh: "太好了！最适合您的卡取决于您的信用背景。这是您第一次在美国办卡吗？", actionHint: "in the States 是 in the US 的口语说法", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "This would be my first credit card in the US. I don't have a credit score yet.",
            textZh: "这是我在美国的第一张信用卡。我还没有信用评分。",
          },
          {
            speaker: "them",
            role: "信用卡顾问",
            textEn: "In that case, I'd recommend our secured credit card. You'll put down a refundable deposit — say, five hundred dollars — which becomes your credit limit. After six to twelve months of on-time payments, you can upgrade to an unsecured card.",
            textZh: "那我推荐我们的抵押信用卡。您交一笔可退还的押金——比如500美元——这就是您的信用额度。按时还款6到12个月后，可以升级为无抵押信用卡。",
            keyPhrases: [
              { en: "secured credit card", zh: "抵押信用卡" },
              { en: "refundable deposit", zh: "可退还押金" },
              { en: "credit limit", zh: "信用额度" },
              { en: "on-time payments", zh: "按时还款" },
              { en: "unsecured card", zh: "无抵押信用卡" },
            ],
            alternativeExpressions: [
              { textEn: "No credit history? No worries. I'd start with a secured card. You put down a deposit — like five hundred bucks — and that's your limit. Pay on time for about a year and you'll graduate to a regular card.", textZh: "没信用记录？没关系。我建议从担保卡开始。交500美元押金——那就是你的额度。按时还一年左右就能升级到普通卡。", actionHint: "graduate to 意思是升级到，很形象", frequency: "common" },
              { textEn: "For someone just starting out, our secured card is the way to go. It's backed by a deposit you put down, and after six months to a year of good payments, we can switch you to an unsecured one.", textZh: "刚起步的话，我们的担保卡是最好的选择。用你交的押金做担保，按时还半年到一年后，可以换成无担保卡。", actionHint: "just starting out 意思是刚开始建立信用", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What's the interest rate on the card?",
            textZh: "这张卡的利率是多少？",
          },
          {
            speaker: "them",
            role: "信用卡顾问",
            textEn: "The APR is twenty-two point nine nine percent. But if you pay your balance in full every month by the due date, you won't be charged any interest at all.",
            textZh: "年利率是22.99%。但如果您每月在到期日前全额还款，就完全不会被收利息。",
            keyPhrases: [
              { en: "APR", zh: "年利率（Annual Percentage Rate）" },
              { en: "balance in full", zh: "全额" },
              { en: "due date", zh: "到期日/还款日" },
            ],
            alternativeExpressions: [
              { textEn: "It's twenty-two ninety-nine APR. But honestly, if you just pay it off every month, you'll never pay a dime in interest.", textZh: "年利率22.99%。但说实话，如果你每月全还掉，一分利息都不用付。", actionHint: "pay it off 意思是全额还清，not a dime 意思是一分钱都不", frequency: "common" },
              { textEn: "The interest rate runs about twenty-three percent. But here's the thing — as long as you zero out your balance each month, interest doesn't kick in.", textZh: "利率大概23%。但关键是——只要每月清零余额，利息就不会生效。", actionHint: "zero out 意思是清零，kick in 意思是开始生效", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Are there any annual fees or rewards?",
            textZh: "有年费或奖励吗？",
          },
          {
            speaker: "them",
            role: "信用卡顾问",
            textEn: "This card has no annual fee. You'll earn one percent cash back on all purchases. Once you build your credit, you could qualify for our premium card with two percent cash back and travel perks.",
            textZh: "这张卡没有年费。所有消费有1%的返现。等您建立好信用后，可以申请我们的高级卡，有2%返现和旅行福利。",
            keyPhrases: [
              { en: "annual fee", zh: "年费" },
              { en: "cash back", zh: "返现" },
              { en: "qualify for", zh: "有资格申请" },
              { en: "travel perks", zh: "旅行福利" },
            ],
            alternativeExpressions: [
              { textEn: "No annual fee on this one, and you get one percent back on everything you buy. Down the road, once your credit's solid, you can move up to our premium card — two percent back plus travel rewards.", textZh: "这张卡没年费，所有消费返1%。以后信用好了，可以升级到高级卡——2%返现加旅行奖励。", actionHint: "down the road 意思是将来/以后", frequency: "common" },
              { textEn: "It's fee-free and comes with one percent cash back. Once you've established your credit, you'd be eligible for our premium tier with better rewards and travel benefits.", textZh: "免年费，附带1%返现。信用建立好后，您就有资格申请高级卡，奖励和旅行福利更好。", actionHint: "fee-free 意思是免费的，tier 意思是层级", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds good. Can I apply right now?",
            textZh: "听起来不错。我现在能申请吗？",
          },
          {
            speaker: "them",
            role: "信用卡顾问",
            textEn: "Absolutely. I'll just need your ID, Social Security number or ITIN, proof of income, and your US address. The application takes about fifteen minutes, and you'll usually get a decision the same day.",
            textZh: "当然。我需要您的身份证件、社保号或ITIN、收入证明和美国地址。申请大约需要15分钟，通常当天就能得到结果。",
            keyPhrases: [
              { en: "proof of income", zh: "收入证明" },
              { en: "get a decision", zh: "得到结果/审批结果" },
            ],
            alternativeExpressions: [
              { textEn: "For sure! I'll need your ID, your Social or ITIN, something showing your income, and your address. It takes like fifteen minutes and you usually hear back the same day.", textZh: "当然！我需要证件、社保号或ITIN、收入证明和地址。大概15分钟，通常当天就出结果。", actionHint: "hear back 意思是得到回复", frequency: "common" },
              { textEn: "Let's do it! Grab your ID and proof of income. I'll walk you through the application — it's quick, and most people get an answer right away.", textZh: "来吧！拿好证件和收入证明。我带您走一遍申请流程——很快的，大多数人当场就出结果。", actionHint: "walk you through 意思是带你走一遍流程", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 8. 报失银行卡 ====================
  {
    id: "banking-lost-card",
    category: "banking",
    titleZh: "报失银行卡",
    titleEn: "Reporting a Lost Card",
    description: "银行卡丢失或被盗后打电话或去银行挂失",
    otherRole: "客服代表",
    otherRoleIcon: "📞",
    flows: [
      {
        id: "basic",
        titleZh: "电话挂失",
        titleEn: "Phone Report",
        description: "打电话报失银行卡的紧急对话",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to report a lost debit card. I think it was stolen.",
            textZh: "你好，我需要报失一张借记卡。我觉得是被偷了。",
            casualVersion: "Hey, my debit card was stolen. I need to report it.",
            culturalNote: "发现卡丢失要立即挂失。美国法律规定，及时报告的话你的损失上限是50美元（借记卡）或0美元（信用卡）。",
          },
          {
            speaker: "them",
            role: "客服代表",
            textEn: "I'm sorry to hear that. Let me help you right away. Can you verify your account by providing your full name and the last four digits of your Social Security number?",
            textZh: "很抱歉听到这个消息。我马上帮您处理。能提供您的全名和社保号后四位来验证账户吗？",
            keyPhrases: [
              { en: "verify your account", zh: "验证您的账户" },
              { en: "last four digits", zh: "后四位" },
            ],
            alternativeExpressions: [
              { textEn: "Oh no, I'm sorry about that. Let's get this taken care of right away. Can I get your name and the last four of your Social to pull up the account?", textZh: "哎呀，很抱歉。我们马上处理。能告诉我您的名字和社保号后四位来调出账户吗？", actionHint: "get this taken care of 意思是把事情处理好", frequency: "common" },
              { textEn: "That's no good. Let me lock that down for you ASAP. I just need to verify — what's your full name and last four of your SSN?", textZh: "那可不行。我尽快帮您锁定。先验证一下——您的全名和社保号后四位是什么？", actionHint: "lock that down 意思是锁定/冻结，ASAP 意思是尽快", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "My name is Li Wei, and the last four digits are eight seven three two.",
            textZh: "我叫李伟，后四位是8732。",
          },
          {
            speaker: "them",
            role: "客服代表",
            textEn: "Thank you. I've located your account. I'm going to freeze your card immediately so no one can use it. When did you last see your card?",
            textZh: "谢谢。我找到您的账户了。我现在立即冻结您的卡，这样没人能使用它。您最后一次看到卡是什么时候？",
            keyPhrases: [
              { en: "freeze your card", zh: "冻结您的卡" },
              { en: "when did you last see", zh: "最后一次看到是什么时候" },
            ],
            alternativeExpressions: [
              { textEn: "Got it. I've pulled up your account and I'm shutting the card down right now. Nobody can use it. When was the last time you had the card?", textZh: "找到了。我调出了您的账户，现在就关闭这张卡。没人能用了。您最后一次用卡是什么时候？", actionHint: "shutting down 意思是关闭/停用", frequency: "common" },
              { textEn: "Okay, I found you. I'm putting a block on that card as we speak. Do you remember when you last used it or had it on you?", textZh: "好的，找到了。我正在冻结那张卡。您还记得最后一次用或带着它是什么时候吗？", actionHint: "putting a block on 意思是冻结，as we speak 意思是此刻", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I used it at a restaurant about two hours ago. After that, I noticed it was missing.",
            textZh: "大约两小时前在一家餐厅用过。之后就发现不见了。",
          },
          {
            speaker: "them",
            role: "客服代表",
            textEn: "I can see some transactions after that time. There's a charge of two hundred dollars at an electronics store. Did you make that purchase?",
            textZh: "我看到之后有一些交易记录。有一笔在电子产品店的200美元消费。这是您的消费吗？",
            keyPhrases: [
              { en: "transactions", zh: "交易记录" },
              { en: "charge", zh: "消费/扣款" },
              { en: "did you make that purchase", zh: "这是您的消费吗" },
            ],
            alternativeExpressions: [
              { textEn: "I'm seeing some activity after that. There's a two-hundred-dollar hit at an electronics store. Was that you?", textZh: "我看到之后有一些消费。电子产品店有一笔200美元的扣款。是你吗？", actionHint: "hit 在这里指一笔扣款/消费", frequency: "common" },
              { textEn: "Looks like somebody already used it. There's a two-hundred-dollar charge at an electronics place that went through after you lost it. Does that ring a bell?", textZh: "看起来已经有人用了。你丢卡之后有一笔200美元的电子产品店消费。你有印象吗？", actionHint: "ring a bell 意思是有没有印象", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "No, that wasn't me! Can you reverse that charge?",
            textZh: "不是我！能把那笔消费取消吗？",
          },
          {
            speaker: "them",
            role: "客服代表",
            textEn: "I'll file a fraud dispute for that transaction. You'll receive a provisional credit within ten business days while we investigate. A new card will be mailed to your address within five to seven business days. Would you like us to issue a temporary card at a branch?",
            textZh: "我会为那笔交易提交欺诈争议。调查期间，您会在10个工作日内收到临时退款。新卡会在5到7个工作日内邮寄到您的地址。您需要到网点领取临时卡吗？",
            keyPhrases: [
              { en: "fraud dispute", zh: "欺诈争议" },
              { en: "provisional credit", zh: "临时退款/临时入账" },
              { en: "investigate", zh: "调查" },
              { en: "temporary card", zh: "临时卡" },
            ],
            alternativeExpressions: [
              { textEn: "I'll open up a fraud claim on that charge. You should see the money back in your account within ten business days while we look into it. A new card's on its way in five to seven days — want a temp card in the meantime?", textZh: "我会对那笔扣款提交欺诈申请。10个工作日内钱会退回账户，同时我们调查。新卡5到7天寄到——要先领张临时卡用着吗？", actionHint: "on its way 意思是正在寄来的路上", frequency: "common" },
              { textEn: "I'm gonna flag that as fraud and dispute the charge for you. You'll get a temporary refund while we sort it out. New card ships in about a week. Do you need a walk-in card from a branch?", textZh: "我会把那笔标记为欺诈并帮你争议。调查期间先给你临时退款。新卡大约一周寄出。你需要去网点领临时卡吗？", actionHint: "sort it out 意思是处理好/搞清楚", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. I need a card I can use right away. Should I also file a police report?",
            textZh: "好的。我需要一张马上能用的卡。我是不是也应该报警？",
          },
          {
            speaker: "them",
            role: "客服代表",
            textEn: "Filing a police report is a good idea, especially since there were unauthorized transactions. It'll strengthen your fraud claim. You can visit any of our branches with your ID to get a temporary card today.",
            textZh: "报警是个好主意，特别是已经有了未授权的交易。这会加强您的欺诈索赔。您今天可以带身份证去我们任何网点领取临时卡。",
            keyPhrases: [
              { en: "police report", zh: "报警记录" },
              { en: "unauthorized transactions", zh: "未授权交易" },
              { en: "fraud claim", zh: "欺诈索赔" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, definitely file a police report. It backs up your case since someone actually used your card. Just swing by any branch with your ID and we'll get you a temp card today.", textZh: "对，一定要报警。因为已经有人用了你的卡，报案能支持你的索赔。带着证件去任何网点就能领临时卡。", actionHint: "backs up your case 意思是支持你的案例，swing by 意思是顺便去一趟", frequency: "common" },
              { textEn: "I'd say yes, especially with the unauthorized charges. Having that report on file will help with the investigation. You can pop into any of our locations with your ID for a replacement card.", textZh: "我建议报警，特别是有未授权消费的情况下。有报案记录会有助于调查。带证件去我们任何网点就能拿替换卡。", actionHint: "pop into 意思是进去一趟，on file 意思是存档", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 9. 贷款咨询 ====================
  {
    id: "banking-loan-inquiry",
    category: "banking",
    titleZh: "贷款咨询",
    titleEn: "Loan Inquiry",
    description: "在银行咨询个人贷款或房贷的条件和利率",
    otherRole: "贷款顾问",
    otherRoleIcon: "📋",
    flows: [
      {
        id: "basic",
        titleZh: "贷款基本咨询",
        titleEn: "Basic Loan Inquiry",
        description: "了解贷款产品和申请条件",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to inquire about getting a personal loan. What are your current rates?",
            textZh: "你好，我想咨询个人贷款。你们现在的利率是多少？",
          },
          {
            speaker: "them",
            role: "贷款顾问",
            textEn: "Our personal loan rates currently range from seven point nine nine to fifteen point nine nine percent APR, depending on your credit score and the loan amount. How much are you looking to borrow?",
            textZh: "我们的个人贷款利率目前在7.99%到15.99%之间，取决于您的信用评分和贷款金额。您想借多少？",
            keyPhrases: [
              { en: "personal loan rates", zh: "个人贷款利率" },
              { en: "depending on", zh: "取决于" },
              { en: "borrow", zh: "借款" },
            ],
            alternativeExpressions: [
              { textEn: "Right now our rates are anywhere from about eight to sixteen percent, depending on your credit and how much you need. What kind of number are you thinking?", textZh: "我们现在的利率大约在8%到16%之间，看您的信用和金额。您大概想借多少？", actionHint: "what kind of number 是问金额的随意说法", frequency: "common" },
              { textEn: "Personal loans start around eight percent and go up to about sixteen, based on your credit profile. How much did you have in mind?", textZh: "个人贷款从大约8%起，最高到16%左右，根据您的信用情况。您想借多少？", actionHint: "have in mind 意思是心里想的金额", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm thinking about ten thousand dollars. What would my monthly payments look like?",
            textZh: "我想借10,000美元左右。每月还款大概多少？",
          },
          {
            speaker: "them",
            role: "贷款顾问",
            textEn: "For ten thousand at our best rate over a three-year term, your monthly payment would be around three hundred and thirteen dollars. Over five years, it'd be about two hundred dollars a month but you'd pay more in total interest.",
            textZh: "10,000美元按我们最优利率、三年期的话，每月还款大约313美元。五年期的话大约每月200美元，但总利息会更多。",
            keyPhrases: [
              { en: "monthly payment", zh: "每月还款" },
              { en: "term", zh: "贷款期限" },
              { en: "total interest", zh: "总利息" },
            ],
            alternativeExpressions: [
              { textEn: "So for ten grand over three years at our best rate, you're looking at around three-thirteen a month. Stretch it to five years and it drops to about two hundred, but you'll end up paying more interest overall.", textZh: "1万美元三年期最优利率的话，大约每月313。拉长到五年降到大约200，但总利息会更多。", actionHint: "ten grand 是一万美元，you're looking at 意思是大概是", frequency: "common" },
              { textEn: "At our best rate on a three-year loan, that'd run you about three-thirteen per month. A five-year term brings the payment down but costs more in the long run.", textZh: "三年期最优利率的话大约每月313。五年期月供更低，但长期来看花得更多。", actionHint: "run you 意思是花费你，in the long run 意思是长期来看", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What credit score do I need to qualify?",
            textZh: "需要多少信用评分才能申请？",
            culturalNote: "美国信用评分范围300-850。670以上算good，740以上算excellent。贷款最低通常要求580-620。",
          },
          {
            speaker: "them",
            role: "贷款顾问",
            textEn: "We generally require a minimum credit score of six-twenty for personal loans. A score above seven hundred would qualify you for our best rates. We also look at your debt-to-income ratio and employment history.",
            textZh: "个人贷款我们一般要求最低信用评分620。700以上可以享受最优利率。我们还会看您的债务收入比和工作经历。",
            keyPhrases: [
              { en: "minimum credit score", zh: "最低信用评分" },
              { en: "debt-to-income ratio", zh: "债务收入比" },
              { en: "employment history", zh: "工作经历" },
            ],
            alternativeExpressions: [
              { textEn: "You'll need at least a six-twenty to get approved. Seven hundred plus gets you the good rates. We also factor in how much debt you're carrying and how long you've been at your job.", textZh: "至少要620分才能通过。700以上能拿到好利率。我们还会考虑你背了多少债和工作多久了。", actionHint: "get approved 意思是获批，factor in 意思是考虑进去", frequency: "common" },
              { textEn: "The cutoff is around six-twenty for personal loans. Above seven hundred and you unlock our best rates. Income versus debt and your work history also play into it.", textZh: "个人贷款的门槛大约是620分。超过700就能拿到最优利率。收入与债务的比例和工作经历也是考量因素。", actionHint: "cutoff 意思是最低门槛，play into it 意思是也是影响因素", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there any penalty for paying off the loan early?",
            textZh: "提前还清贷款有罚金吗？",
          },
          {
            speaker: "them",
            role: "贷款顾问",
            textEn: "No, we don't charge any prepayment penalties. You can pay off the loan early at any time with no extra fees. That actually saves you money on interest. Would you like to start an application?",
            textZh: "不会，我们不收提前还款罚金。您可以随时提前还清，没有额外费用。提前还清还能省利息。您想开始申请吗？",
            keyPhrases: [
              { en: "prepayment penalties", zh: "提前还款罚金" },
              { en: "pay off the loan early", zh: "提前还清贷款" },
              { en: "saves you money on interest", zh: "省利息" },
            ],
            alternativeExpressions: [
              { textEn: "Nope, no early payoff penalties. You can knock it out whenever you want and you'll actually save on interest. Ready to get started?", textZh: "没有提前还款罚金。你想什么时候还清都行，还能省利息。准备好开始申请了吗？", actionHint: "knock it out 意思是搞定/还清", frequency: "common" },
              { textEn: "Good news — there's no penalty for paying it off ahead of schedule. The sooner you pay, the less interest you owe. Want to go ahead and apply?", textZh: "好消息——提前还清没有罚金。越早还，利息越少。要现在申请吗？", actionHint: "ahead of schedule 意思是提前", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 10. 支票业务 ====================
  {
    id: "banking-check-services",
    category: "banking",
    titleZh: "支票业务",
    titleEn: "Check/Cheque Services",
    description: "了解如何使用支票、存入支票、订购支票本",
    otherRole: "银行柜员",
    otherRoleIcon: "📝",
    flows: [
      {
        id: "basic",
        titleZh: "支票存入和使用",
        titleEn: "Depositing and Using Checks",
        description: "存入收到的支票并了解支票使用",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I received a check from my employer and I'd like to deposit it. I've never deposited a check before.",
            textZh: "你好，我收到一张雇主开的支票，想存入银行。我以前没存过支票。",
            culturalNote: "支票在美国仍然很常用，特别是工资支票、房租支票和退税支票。学会存支票是很实用的技能。",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "No problem! First, you'll need to endorse the check by signing the back of it. Just sign your name exactly as it appears on the front.",
            textZh: "没问题！首先，您需要在支票背面签名做背书。签名要和支票正面的名字一致。",
            keyPhrases: [
              { en: "endorse the check", zh: "背书（在支票背面签名）" },
              { en: "signing the back", zh: "在背面签名" },
            ],
            alternativeExpressions: [
              { textEn: "Easy! Just flip it over and sign the back. Make sure you sign it the same way your name is printed on the front.", textZh: "简单！翻过来在背面签名。确保签名和正面印的名字一样。", actionHint: "flip it over 意思是翻过来", frequency: "common" },
              { textEn: "Sure thing. First step — you gotta endorse it. Just put your signature on the back, matching the name on the front.", textZh: "没问题。第一步——你得背书。在背面签名，和正面的名字一致。", actionHint: "you gotta 是 you have to 的口语", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, I've signed it. Here you go. How long until the funds are available?",
            textZh: "好的，签好了。给你。多久资金才能到账？",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "For a payroll check like this, the first two hundred dollars will be available tomorrow, and the full amount should clear within two business days. Large checks may take longer.",
            textZh: "像这样的工资支票，前200美元明天可用，全部金额应该在2个工作日内到账。大额支票可能需要更久。",
            keyPhrases: [
              { en: "payroll check", zh: "工资支票" },
              { en: "clear", zh: "到账/清算" },
              { en: "available tomorrow", zh: "明天可用" },
            ],
            alternativeExpressions: [
              { textEn: "Since it's a paycheck, the first two hundred will hit your account by tomorrow. The rest should clear in a couple days. Bigger checks sometimes take a bit longer.", textZh: "因为是工资支票，前200明天就能到账。剩下的几天内到。大额支票有时候会久一点。", actionHint: "hit your account 意思是到账，a couple days 意思是两三天", frequency: "common" },
              { textEn: "For a payroll check, you'll have access to the first two hundred by tomorrow morning. Full amount clears in about two business days — unless it's a really large check.", textZh: "工资支票的话，明天早上前200就可以用了。全额大约2个工作日到——除非是特别大额的支票。", actionHint: "have access to 意思是可以使用", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. I also need to write a check for my rent. How do I fill one out properly?",
            textZh: "明白了。我还需要开一张支票付房租。怎么正确填写？",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Write the date on the top right, the recipient's name on the \"Pay to the Order of\" line, the amount in numbers in the box, and write out the amount in words on the line below. Don't forget to sign the bottom right.",
            textZh: "右上角写日期，\"Pay to the Order of\"那行写收款人姓名，方框里用数字写金额，下面一行用英文单词写出金额。别忘了右下角签名。",
            keyPhrases: [
              { en: "Pay to the Order of", zh: "付款给（收款人行）" },
              { en: "amount in words", zh: "金额大写（用英文单词）" },
              { en: "sign the bottom right", zh: "右下角签名" },
            ],
            alternativeExpressions: [
              { textEn: "Okay so — date goes up top right, then the person's name on the \"Pay to\" line. Put the dollar amount in the little box with numbers, then spell it out on the line below. And sign it at the bottom.", textZh: "这样——右上角写日期，然后\"Pay to\"那行写对方名字。小方框里用数字写金额，下面一行用英文拼写出来。最后在底下签名。", actionHint: "spell it out 意思是用字母拼写出来", frequency: "common" },
              { textEn: "It's pretty straightforward. Date on top, who you're paying on the first line, amount in numbers and then again in words, and your signature at the bottom right. That's it!", textZh: "很简单的。上面写日期，第一行写收款人，金额用数字写一遍再用英文写一遍，右下角签名。就这样！", actionHint: "pretty straightforward 意思是很简单直接", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I also deposit checks using the mobile app?",
            textZh: "我能用手机App存支票吗？",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Yes! Our app has mobile check deposit. Just take a photo of the front and back of the endorsed check, enter the amount, and submit. It's very convenient. Keep the physical check for thirty days just in case.",
            textZh: "可以！我们的App有手机支票存入功能。拍背书后支票的正反面照片，输入金额，提交就行。非常方便。纸质支票保留30天以防万一。",
            keyPhrases: [
              { en: "mobile check deposit", zh: "手机支票存入" },
              { en: "take a photo", zh: "拍照" },
              { en: "keep the physical check", zh: "保留纸质支票" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, just use the app! Snap a pic of the front and back, type in the amount, and you're done. Just hang on to the actual check for about a month.", textZh: "当然，用App就行！拍正反面照片，输入金额，搞定。纸质支票留大约一个月。", actionHint: "snap a pic 意思是拍张照，hang on to 意思是保留着", frequency: "common" },
              { textEn: "Absolutely. Our app lets you deposit checks right from your phone — just photograph both sides and submit. Hold on to the paper check for thirty days though, just to be safe.", textZh: "当然。我们的App可以直接用手机存支票——拍两面照片然后提交。纸质支票保留30天，以防万一。", actionHint: "right from your phone 强调手机就能搞定", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 11. 汇款回国 ====================
  {
    id: "banking-send-money-home",
    category: "banking",
    titleZh: "汇款回国",
    titleEn: "Sending Money Home",
    description: "从美国汇款回中国，了解不同渠道和费用",
    otherRole: "银行顾问",
    otherRoleIcon: "🌏",
    flows: [
      {
        id: "basic",
        titleZh: "国际汇款",
        titleEn: "International Remittance",
        description: "咨询从美国汇款回中国的方式",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I need to send some money to my family in China. What's the best way to do that?",
            textZh: "我需要给中国的家人汇款。最好的方式是什么？",
            casualVersion: "I wanna send money back to my family in China. How do I do that?",
          },
          {
            speaker: "them",
            role: "银行顾问",
            textEn: "We offer international wire transfers. You can also use our online banking platform to send money abroad. How much are you looking to send?",
            textZh: "我们提供国际电汇。您也可以通过我们的网上银行向国外汇款。您要汇多少？",
            keyPhrases: [
              { en: "international wire transfers", zh: "国际电汇" },
              { en: "send money abroad", zh: "向国外汇款" },
            ],
            alternativeExpressions: [
              { textEn: "We can do an international wire for you. You could also set it up through online banking if that's easier. How much are you looking to send?", textZh: "我们可以帮你做国际电汇。也可以通过网银设置，如果那样更方便的话。你要汇多少？", actionHint: "if that's easier 意思是如果更方便的话", frequency: "common" },
              { textEn: "Sure, there are a couple ways to do it. We've got traditional wire transfers, or you can send it through our online platform. What amount are we talking about?", textZh: "当然，有几种方式。我们有传统电汇，也可以通过我们的在线平台。大概什么金额？", actionHint: "what amount are we talking about 是很口语的问金额方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "About five thousand dollars. I'll need to do this regularly — maybe once a month.",
            textZh: "大约5000美元。我需要定期汇——可能每月一次。",
            culturalNote: "定期大额汇款要注意中国的外汇管制政策。每人每年有5万美元等值的结汇额度。",
          },
          {
            speaker: "them",
            role: "银行顾问",
            textEn: "For regular transfers, I'd suggest setting up a recurring wire. The fee is thirty-five dollars per transfer. However, for monthly transfers, you might want to consider a service like Wise or Remitly — they often have lower fees and better exchange rates.",
            textZh: "对于定期转账，我建议设置定期电汇。每笔手续费35美元。不过如果是每月汇款，您可以考虑Wise或Remitly这样的服务——它们通常费用更低、汇率更好。",
            keyPhrases: [
              { en: "recurring wire", zh: "定期电汇" },
              { en: "lower fees", zh: "更低的费用" },
              { en: "better exchange rates", zh: "更好的汇率" },
            ],
            alternativeExpressions: [
              { textEn: "If you're doing it monthly, we can set up an automatic wire — that's thirty-five bucks a pop. But honestly, for regular transfers like this, apps like Wise or Remitly might save you some money.", textZh: "如果每月汇，我们可以设自动电汇——每笔35块。但说实话，像这样定期汇款，Wise或Remitly这类App可能更省钱。", actionHint: "a pop 意思是每次/每笔", frequency: "common" },
              { textEn: "We can definitely do a recurring transfer for you at thirty-five per transaction. That said, some of the online money transfer services might give you a better bang for your buck on the fees and rates.", textZh: "我们可以帮你设定期转账，每笔35美元。不过说实话，一些在线汇款服务在费用和汇率上可能更划算。", actionHint: "bang for your buck 意思是性价比/划算", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How long does a wire transfer to China usually take?",
            textZh: "电汇到中国通常多久？",
          },
          {
            speaker: "them",
            role: "银行顾问",
            textEn: "Bank wires to China typically take two to four business days. The receiving bank in China may also require the recipient to visit a branch to pick up the funds, especially for larger amounts.",
            textZh: "银行电汇到中国通常需要2到4个工作日。中国的收款银行可能还要求收款人去网点领取资金，特别是大额汇款。",
            keyPhrases: [
              { en: "two to four business days", zh: "2到4个工作日" },
              { en: "visit a branch", zh: "去网点" },
              { en: "pick up the funds", zh: "领取资金" },
            ],
            alternativeExpressions: [
              { textEn: "Usually two to four business days for China. Heads up though — the bank over there might make your family come in to collect the money in person, especially if it's a bigger amount.", textZh: "到中国通常2到4个工作日。不过提醒一下——那边银行可能要求你家人亲自去领钱，特别是大额的。", actionHint: "heads up 意思是提醒你一下，come in 意思是亲自到场", frequency: "common" },
              { textEn: "A wire to China generally lands in two to four days. Just so you know, the receiving bank may require the recipient to show up with ID to claim the funds.", textZh: "电汇到中国一般2到4天到。跟你说一下，收款银行可能要求收款人带证件去取钱。", actionHint: "lands 意思是到达，show up 意思是到场", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can my family receive it directly in their Chinese bank account in yuan?",
            textZh: "我家人能直接在中国的银行账户里收到人民币吗？",
          },
          {
            speaker: "them",
            role: "银行顾问",
            textEn: "Yes, you can send it in US dollars and the receiving bank will convert it to yuan at their rate, or some services let you lock in the exchange rate before sending. The recipient's bank may require them to show ID and sign paperwork for foreign currency receipts.",
            textZh: "可以，您可以发美元，收款银行会按他们的汇率转换成人民币。有些服务可以在发送前锁定汇率。收款银行可能要求收款人出示身份证并签署外币收入文件。",
            keyPhrases: [
              { en: "lock in the exchange rate", zh: "锁定汇率" },
              { en: "foreign currency receipts", zh: "外币收入" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, you send dollars and their bank converts it to yuan on their end. Some services even let you lock in the rate upfront so you know exactly what they'll get. They'll probably need to bring ID to the bank though.", textZh: "对，你发美元，对方银行那边转成人民币。有些服务还能让你提前锁定汇率，这样你就知道他们能收到多少。不过他们可能得带身份证去银行。", actionHint: "on their end 意思是在对方那边，upfront 意思是提前", frequency: "common" },
              { textEn: "Absolutely. The money goes out in dollars and gets converted to yuan by the Chinese bank. Some platforms let you fix the rate before you send, which is nice. Your family may have to do a little paperwork at the bank to receive foreign funds.", textZh: "当然。钱以美元发出，由中国的银行转成人民币。有些平台可以在发送前固定汇率，挺方便的。你家人可能需要在银行填点手续来接收外币。", actionHint: "fix the rate 意思是固定汇率", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 12. 投诉服务 ====================
  {
    id: "banking-complaint",
    category: "banking",
    titleZh: "投诉服务",
    titleEn: "Complaining About Service",
    description: "对银行服务不满意时进行投诉",
    otherRole: "客户经理",
    otherRoleIcon: "😤",
    flows: [
      {
        id: "basic",
        titleZh: "投诉不当收费",
        titleEn: "Complaining About Fees",
        description: "发现被不合理收费后进行投诉",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I'd like to speak to a manager. I've been charged a thirty-five-dollar overdraft fee, and I believe it's a mistake.",
            textZh: "我想找经理谈谈。我被收了35美元的透支费，我认为这是错误的。",
            culturalNote: "在美国投诉时保持礼貌但坚定很重要。很多费用其实是可以协商减免的，尤其是第一次。",
          },
          {
            speaker: "them",
            role: "客户经理",
            textEn: "I'm sorry you're having this issue. Let me look into your account. Can you tell me more about when this charge appeared?",
            textZh: "很抱歉您遇到这个问题。让我查一下您的账户。能告诉我这笔收费是什么时候出现的吗？",
            keyPhrases: [
              { en: "look into your account", zh: "查看您的账户" },
              { en: "when this charge appeared", zh: "这笔收费什么时候出现的" },
            ],
            alternativeExpressions: [
              { textEn: "I understand your frustration. Let me pull up your account and take a look. Do you know when the fee showed up?", textZh: "我理解您的不满。让我调出您的账户看看。您知道这笔费用什么时候出现的吗？", actionHint: "pull up 意思是调出/打开", frequency: "common" },
              { textEn: "I'm sorry about that. Let's figure this out together. When did you first notice the charge on your account?", textZh: "很抱歉。我们一起弄清楚。您第一次注意到这笔收费是什么时候？", actionHint: "figure this out together 拉近距离，表示一起解决", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It showed up yesterday. I had enough money in my account to cover the purchase. I think there was a processing delay.",
            textZh: "昨天出现的。我的账户里有足够的钱支付那笔消费。我觉得是处理延迟导致的。",
          },
          {
            speaker: "them",
            role: "客户经理",
            textEn: "I see what happened. Your direct deposit came in at nine AM, but the purchase was processed at midnight. The system saw insufficient funds at that point. I understand this is frustrating.",
            textZh: "我看到是怎么回事了。您的工资直存是早上9点到账的，但那笔消费是午夜处理的。系统在那个时间点显示余额不足。我理解您的感受。",
            keyPhrases: [
              { en: "direct deposit", zh: "工资直存" },
              { en: "processed", zh: "处理/入账" },
              { en: "insufficient funds", zh: "余额不足" },
            ],
            alternativeExpressions: [
              { textEn: "Ah, I see what happened here. Your paycheck hit at nine AM, but the charge went through at midnight. So at that point, the system saw a negative balance. I totally get why that's frustrating.", textZh: "啊，我看到怎么回事了。工资早上9点到的，但消费午夜就处理了。所以那时候系统显示余额不足。我完全理解你为什么生气。", actionHint: "hit 意思是到账，went through 意思是处理通过", frequency: "common" },
              { textEn: "So here's what happened — the transaction posted at midnight before your direct deposit landed at nine. The system flagged it as overdraft because the timing was off.", textZh: "是这样——交易午夜入账，但你的工资9点才到。因为时间差，系统判定为透支。", actionHint: "posted 意思是入账，the timing was off 意思是时间不对", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That doesn't seem fair. The money was already in transit. Can you waive the fee?",
            textZh: "这不太合理。钱已经在路上了。能免除这笔费用吗？",
          },
          {
            speaker: "them",
            role: "客户经理",
            textEn: "I completely understand your frustration. Since this is your first overdraft in the past twelve months, I can waive the fee as a courtesy. I'd also recommend setting up overdraft protection linked to your savings account to avoid this in the future.",
            textZh: "我完全理解您的不满。因为这是您过去12个月里的第一次透支，作为善意我可以免除这笔费用。我也建议您设置与储蓄账户关联的透支保护，以后就能避免这种情况。",
            keyPhrases: [
              { en: "waive the fee", zh: "免除费用" },
              { en: "as a courtesy", zh: "作为善意/通融" },
              { en: "overdraft protection", zh: "透支保护" },
            ],
            alternativeExpressions: [
              { textEn: "I hear you. Since this is the first time it's happened in the past year, I'm happy to take that fee off for you. I'd also suggest linking your savings for overdraft protection going forward.", textZh: "我理解。因为这是过去一年来第一次，我很乐意帮您免掉这笔费。我还建议关联储蓄账户做透支保护。", actionHint: "take that fee off 意思是免除费用，going forward 意思是今后", frequency: "common" },
              { textEn: "Totally understandable. Look, it's your first overdraft this year, so let me just reverse that fee for you. Going forward, I'd recommend setting up overdraft coverage through your savings account.", textZh: "完全可以理解。这是您今年第一次透支，我帮您把这笔费退了。以后建议设置通过储蓄账户的透支保障。", actionHint: "reverse the fee 意思是退还费用", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you, I appreciate that. How do I set up the overdraft protection?",
            textZh: "谢谢，非常感谢。透支保护怎么设置？",
          },
          {
            speaker: "them",
            role: "客户经理",
            textEn: "I can set it up for you right now. If your checking account goes below zero, it'll automatically pull funds from your savings. There's a small five-dollar transfer fee instead of the thirty-five-dollar overdraft fee.",
            textZh: "我现在就可以帮您设置。如果您的活期账户余额低于零，会自动从储蓄账户转入。转账费只要5美元，比35美元的透支费少得多。",
            keyPhrases: [
              { en: "automatically pull funds", zh: "自动转入资金" },
              { en: "goes below zero", zh: "余额低于零" },
              { en: "transfer fee", zh: "转账费" },
            ],
            alternativeExpressions: [
              { textEn: "I'll set it up right now. Basically, if your checking dips below zero, money moves over from savings automatically. It's just a five-dollar fee versus the thirty-five-dollar overdraft hit.", textZh: "我现在就设。基本上，如果活期账户余额为负，钱会自动从储蓄转过来。只要5块钱，比35块的透支费好太多了。", actionHint: "dips below zero 意思是降到零以下，hit 在这指被收的费", frequency: "common" },
              { textEn: "Let me get that going for you. Whenever your checking runs low, it'll tap into your savings to cover it. Way cheaper — just five dollars instead of thirty-five.", textZh: "我帮您弄。活期不够的时候，会从储蓄补上。便宜多了——只要5块不是35块。", actionHint: "runs low 意思是余额不足，tap into 意思是动用", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 13. 理财咨询 ====================
  {
    id: "banking-investment",
    category: "banking",
    titleZh: "理财咨询",
    titleEn: "Investment Advice",
    description: "在银行咨询理财产品和投资选择",
    otherRole: "理财顾问",
    otherRoleIcon: "📈",
    flows: [
      {
        id: "basic",
        titleZh: "理财入门咨询",
        titleEn: "Investment Basics",
        description: "初次咨询理财投资选择",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I've managed to save some money and I'd like to start investing. Where should I begin?",
            textZh: "我存了一些钱，想开始投资。应该从哪里开始？",
          },
          {
            speaker: "them",
            role: "理财顾问",
            textEn: "That's great that you're thinking about investing. First, let me ask — what's your investment goal and time horizon? Are you saving for retirement, a down payment, or general wealth building?",
            textZh: "很高兴您开始考虑投资。首先让我问一下——您的投资目标和时间跨度是什么？是为退休存钱、攒首付，还是一般的财富积累？",
            keyPhrases: [
              { en: "investment goal", zh: "投资目标" },
              { en: "time horizon", zh: "时间跨度/投资期限" },
              { en: "down payment", zh: "首付" },
              { en: "wealth building", zh: "财富积累" },
            ],
            alternativeExpressions: [
              { textEn: "Awesome, it's great that you're getting into investing. So what are you saving for — retirement, buying a house, or just growing your money long-term?", textZh: "太好了，开始投资是正确的方向。你是为什么存钱——退休、买房，还是长期让钱增值？", actionHint: "getting into 意思是开始接触/涉足", frequency: "common" },
              { textEn: "Love to hear that. Before we dive in, what's the end goal here? And when do you think you'll need the money — a few years out or more like ten-plus?", textZh: "很高兴听到这个。在深入之前，你的最终目标是什么？大概什么时候需要用钱——几年后还是十年以上？", actionHint: "dive in 意思是深入了解，ten-plus 意思是十年以上", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Mainly for long-term savings. I have about twenty thousand dollars I don't need right away.",
            textZh: "主要是长期储蓄。我有大约2万美元暂时不需要用。",
          },
          {
            speaker: "them",
            role: "理财顾问",
            textEn: "For long-term investing, I'd recommend a diversified portfolio. We have index funds with low expense ratios, certificates of deposit for guaranteed returns, and money market accounts. What's your risk tolerance?",
            textZh: "对于长期投资，我建议多元化投资组合。我们有低费率的指数基金、有保证收益的定期存单，以及货币市场账户。您的风险承受能力如何？",
            keyPhrases: [
              { en: "diversified portfolio", zh: "多元化投资组合" },
              { en: "index funds", zh: "指数基金" },
              { en: "expense ratios", zh: "费率" },
              { en: "certificates of deposit", zh: "定期存单（CD）" },
              { en: "risk tolerance", zh: "风险承受能力" },
            ],
            alternativeExpressions: [
              { textEn: "For long-term, you wanna spread your money around — don't put all your eggs in one basket. We've got index funds, CDs, money market accounts. How do you feel about risk?", textZh: "长期的话，你要分散投资——不要把鸡蛋放一个篮子里。我们有指数基金、定期存单、货币市场账户。你对风险怎么看？", actionHint: "don't put all your eggs in one basket 是经典理财俗语", frequency: "common" },
              { textEn: "With a long time horizon, diversification is key. We can mix index funds for growth, CDs for safety, and money market for liquidity. How comfortable are you with market ups and downs?", textZh: "时间长的话，分散投资是关键。可以混合指数基金求增长、定期存单求稳、货币市场求灵活。你能接受市场波动吗？", actionHint: "ups and downs 意思是涨涨跌跌", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm fairly conservative. I don't want to lose my principal.",
            textZh: "我比较保守。不想亏本金。",
            culturalNote: "美国的CD（定期存单）类似国内的定期存款，有FDIC保险保障，250,000美元以内本金安全。",
          },
          {
            speaker: "them",
            role: "理财顾问",
            textEn: "For a conservative investor, I'd suggest putting some in a high-yield savings account earning four point five percent, and some in a twelve-month CD at five percent. Both are FDIC-insured up to two hundred fifty thousand dollars, so your principal is protected.",
            textZh: "对于保守型投资者，我建议一部分放在4.5%的高收益储蓄账户，一部分放在5%的12个月定期存单。两者都有FDIC保险，25万美元以内本金受保护。",
            keyPhrases: [
              { en: "high-yield savings account", zh: "高收益储蓄账户" },
              { en: "FDIC-insured", zh: "FDIC保险保障" },
              { en: "principal is protected", zh: "本金受保护" },
            ],
            alternativeExpressions: [
              { textEn: "If you don't wanna take big risks, here's what I'd do — split it between a high-yield savings at four and a half percent and a one-year CD at five percent. Both are FDIC-backed, so your money's safe up to two-fifty K.", textZh: "如果不想冒大风险，我会这样——一部分放4.5%的高收益储蓄，一部分放5%的一年期定存。都有FDIC保障，25万以内很安全。", actionHint: "two-fifty K 是 250,000 的口语说法", frequency: "common" },
              { textEn: "For a play-it-safe approach, I'd recommend parking some in a high-yield savings earning four point five, and locking some in a twelve-month CD at five percent. Zero risk to your principal — it's all government-insured.", textZh: "保守策略的话，我建议一部分放在4.5%的高收益储蓄，一部分锁在5%的12个月定存。本金零风险——都有政府保险。", actionHint: "play-it-safe 意思是求稳，parking 意思是把钱放在那里", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What happens if I need the money from a CD before it matures?",
            textZh: "如果定期存单到期前我需要用钱怎么办？",
          },
          {
            speaker: "them",
            role: "理财顾问",
            textEn: "There's an early withdrawal penalty — usually three to six months of interest, depending on the term. That's why I'd recommend keeping an emergency fund in your regular savings. Would you like me to set up these accounts for you today?",
            textZh: "会有一个提前取款罚金——通常是3到6个月的利息，取决于期限。所以我建议在普通储蓄账户里保留一笔应急资金。今天需要帮您开设这些账户吗？",
            keyPhrases: [
              { en: "early withdrawal penalty", zh: "提前取款罚金" },
              { en: "emergency fund", zh: "应急资金" },
              { en: "matures", zh: "到期" },
            ],
            alternativeExpressions: [
              { textEn: "You'd lose some interest if you pull it out early — usually three to six months' worth. That's why it's smart to keep some cash on hand in a regular savings account for emergencies. Want me to get you set up today?", textZh: "提前取的话会损失一些利息——通常三到六个月的。所以建议在普通储蓄里留一些应急现金。今天要帮您开户吗？", actionHint: "pull it out 意思是取出来，keep cash on hand 意思是手边留些现金", frequency: "common" },
              { textEn: "There is a penalty for breaking the CD early — you forfeit a few months of interest. My advice? Always keep an emergency cushion in a liquid account. Shall we open these up for you?", textZh: "提前破定存有罚金——会损失几个月利息。我的建议？在流动账户里留一笔应急资金。要帮您开这些账户吗？", actionHint: "cushion 意思是缓冲/备用金，liquid account 意思是流动性好的账户", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 14. 更改账户信息 ====================
  {
    id: "banking-update-info",
    category: "banking",
    titleZh: "更改账户信息",
    titleEn: "Updating Account Info",
    description: "更改银行账户的地址、电话号码或其他个人信息",
    otherRole: "银行柜员",
    otherRoleIcon: "📋",
    flows: [
      {
        id: "basic",
        titleZh: "更新地址和联系方式",
        titleEn: "Updating Address and Contact",
        description: "搬家后更新银行账户信息",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I recently moved and I need to update my address on my account.",
            textZh: "你好，我最近搬家了，需要更新账户上的地址。",
            casualVersion: "Hey, I just moved. Need to change my address on my account.",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Sure, I can help with that. Can I see your ID? I'll also need your new address and we'll need to verify your identity.",
            textZh: "没问题，我可以帮您。能看一下您的身份证件吗？我还需要您的新地址，并且需要验证身份。",
            keyPhrases: [
              { en: "verify your identity", zh: "验证身份" },
              { en: "new address", zh: "新地址" },
            ],
            alternativeExpressions: [
              { textEn: "Easy enough. Just show me your ID and give me the new address. I'll get it updated in the system for you.", textZh: "很简单。给我看看证件，告诉我新地址。我帮您在系统里更新。", actionHint: "easy enough 意思是很简单", frequency: "common" },
              { textEn: "No problem at all. I can take care of that. I'll just need to verify who you are — got your ID on you? And what's the new address?", textZh: "完全没问题。我来处理。先验证一下身份——带证件了吗？新地址是什么？", actionHint: "take care of that 意思是搞定那件事，got...on you 意思是带在身上了吗", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's my driver's license. My new address is four-five-six Oak Street, Apartment two-B, San Francisco.",
            textZh: "这是我的驾照。新地址是旧金山橡树街456号，公寓2B。",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Thank you. I've updated your mailing address. Would you also like to update your phone number or email address while we're at it?",
            textZh: "谢谢。我已经更新了您的邮寄地址。顺便问一下，您需要更新电话号码或邮箱吗？",
            keyPhrases: [
              { en: "mailing address", zh: "邮寄地址" },
              { en: "while we're at it", zh: "顺便/既然在这里" },
            ],
            alternativeExpressions: [
              { textEn: "All done with the address. While I've got you here, do you need to change your phone number or email too?", textZh: "地址更新好了。既然您在这，需要顺便改电话号码或邮箱吗？", actionHint: "while I've got you here 意思是趁你在这里", frequency: "common" },
              { textEn: "Got your new address in the system. Anything else need updating — phone, email?", textZh: "新地址已经录入系统了。还有什么需要更新的吗——电话、邮箱？", actionHint: "got it in the system 意思是已录入系统", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Actually, yes. I have a new phone number. It's four-one-five, five-five-five, oh-three-two-one.",
            textZh: "对了，是的。我有新的电话号码。415-555-0321。",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Got it. I've updated both your address and phone number. You'll receive a confirmation letter at your new address within seven to ten days. Your online banking profile will also reflect these changes.",
            textZh: "收到。我已经更新了您的地址和电话号码。您会在7到10天内在新地址收到确认信。您的网上银行也会显示这些更新。",
            keyPhrases: [
              { en: "confirmation letter", zh: "确认信" },
              { en: "reflect these changes", zh: "反映/显示这些更新" },
            ],
            alternativeExpressions: [
              { textEn: "Done and done. You'll get a confirmation in the mail at your new place within a week or two. And you'll see the changes in your online banking too.", textZh: "都搞定了。一两周内你会在新地址收到确认信。网上银行也会显示更新。", actionHint: "done and done 强调全部完成了", frequency: "common" },
              { textEn: "Both are updated now. We'll send a letter to your new address to confirm, and your online profile should show the new info right away.", textZh: "都更新好了。我们会寄确认信到新地址，网上银行应该马上就能看到新信息。", actionHint: "profile 在这指个人账户信息页", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Will my new debit card be sent to the new address automatically?",
            textZh: "新的借记卡会自动寄到新地址吗？",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Yes, any future cards or correspondence will be sent to your updated address. If your current card is expiring soon, we'll send the replacement to the new address. Is there anything else you need?",
            textZh: "是的，以后所有的卡和信件都会寄到更新后的地址。如果您现在的卡快到期了，替换卡也会寄到新地址。还需要办其他业务吗？",
            keyPhrases: [
              { en: "correspondence", zh: "信件/通信" },
              { en: "expiring", zh: "到期/过期" },
              { en: "replacement", zh: "替换卡" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, everything going forward — new cards, statements, mail — all goes to the new address. If your card's due for renewal, the new one will come there. Anything else?", textZh: "对，以后所有东西——新卡、账单、邮件——都寄到新地址。如果卡到了换卡期，新卡也寄到那。还有别的吗？", actionHint: "due for renewal 意思是到了续期/换卡的时候", frequency: "common" },
              { textEn: "Absolutely. All future mailings and replacement cards will go to the updated address automatically. Is there anything else I can help with today?", textZh: "没错。以后所有邮件和替换卡都会自动寄到新地址。今天还有什么我能帮忙的吗？", actionHint: "mailings 指所有寄出的邮件", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 15. 信用评分 ====================
  {
    id: "banking-credit-score",
    category: "banking",
    titleZh: "信用评分",
    titleEn: "Credit Score Inquiry",
    description: "了解自己的信用评分以及如何提高",
    otherRole: "银行顾问",
    otherRoleIcon: "📊",
    flows: [
      {
        id: "basic",
        titleZh: "查询和理解信用评分",
        titleEn: "Understanding Credit Score",
        description: "在银行了解自己的信用评分",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I'd like to check my credit score. Can you help me understand what it means?",
            textZh: "我想查一下我的信用评分。你能帮我理解它意味着什么吗？",
            culturalNote: "美国的信用评分系统（FICO）影响你能否租房、贷款、甚至找工作。新到美国的人信用评分从零开始。",
          },
          {
            speaker: "them",
            role: "银行顾问",
            textEn: "Of course. Your current credit score is six-fifty, which is considered \"fair.\" Scores range from three hundred to eight-fifty. Above seven hundred is considered \"good,\" and above seven-forty is \"excellent.\"",
            textZh: "当然。您目前的信用评分是650，属于\"一般\"。评分范围是300到850。700以上是\"良好\"，740以上是\"优秀\"。",
            keyPhrases: [
              { en: "credit score", zh: "信用评分" },
              { en: "fair", zh: "一般/中等" },
              { en: "good", zh: "良好" },
              { en: "excellent", zh: "优秀" },
            ],
            alternativeExpressions: [
              { textEn: "Sure. So right now you're sitting at six-fifty, which puts you in the \"fair\" range. Not bad, but there's room to grow. Seven hundred is \"good\" and seven-forty plus is where you wanna be — that's \"excellent.\"", textZh: "好的。你现在是650，在\"一般\"范围。不差，但还有提升空间。700是\"良好\"，740以上是目标——那是\"优秀\"。", actionHint: "sitting at 意思是目前处于，room to grow 意思是提升空间", frequency: "common" },
              { textEn: "Let me pull that up for you. You're at six-fifty right now — that's in the fair category. The scale goes from three hundred to eight-fifty. Anything north of seven hundred is considered good.", textZh: "我帮您查一下。您现在650——属于一般档。范围是300到850。超过700就算好了。", actionHint: "north of 意思是超过/高于", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What factors are affecting my score? How can I improve it?",
            textZh: "什么因素影响我的评分？我怎么提高？",
          },
          {
            speaker: "them",
            role: "银行顾问",
            textEn: "The biggest factor is payment history — that's thirty-five percent of your score. Then credit utilization — how much of your available credit you're using — that's thirty percent. Length of credit history, types of credit, and new inquiries make up the rest.",
            textZh: "最大的因素是还款记录——占评分的35%。然后是信用使用率——你用了多少可用额度——占30%。信用历史长度、信用类型和新查询占其余部分。",
            keyPhrases: [
              { en: "payment history", zh: "还款记录" },
              { en: "credit utilization", zh: "信用使用率" },
              { en: "available credit", zh: "可用额度" },
              { en: "length of credit history", zh: "信用历史长度" },
              { en: "new inquiries", zh: "新查询" },
            ],
            alternativeExpressions: [
              { textEn: "The number one thing is whether you pay on time — that's over a third of your score. After that, it's how maxed out your cards are. Then stuff like how long you've had credit, what types, and how many times you've applied for new credit.", textZh: "最重要的是按时还款——占三分之一以上。然后是你的卡刷了多满。再就是信用历史多长、什么类型、申请过几次新信用。", actionHint: "maxed out 意思是刷到额度上限", frequency: "common" },
              { textEn: "Biggest piece of the pie is your payment track record — about thirty-five percent. Then how much of your credit line you're using — that's another thirty. The rest is history length, mix of accounts, and recent applications.", textZh: "最大的一块是还款记录——约35%。然后是你用了多少额度——又是30%。其余是历史长度、账户组合和近期申请。", actionHint: "piece of the pie 意思是占比/份额", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "My credit utilization is pretty high right now. Is that why my score is low?",
            textZh: "我的信用使用率现在挺高的。这是评分低的原因吗？",
          },
          {
            speaker: "them",
            role: "银行顾问",
            textEn: "That's likely a big factor. Experts recommend keeping your utilization below thirty percent. If your credit limit is one thousand dollars, try to keep your balance under three hundred. Paying it down will boost your score within a month or two.",
            textZh: "这很可能是主要原因。专家建议把使用率控制在30%以下。如果你的信用额度是1000美元，尽量把余额控制在300以下。还清后一两个月内评分就会提升。",
            keyPhrases: [
              { en: "below thirty percent", zh: "30%以下" },
              { en: "credit limit", zh: "信用额度" },
              { en: "boost your score", zh: "提升评分" },
            ],
            alternativeExpressions: [
              { textEn: "That's probably dragging your score down. The rule of thumb is keep it under thirty percent. So on a thousand-dollar limit, don't carry more than three hundred. Pay it down and you'll see your score jump pretty quick.", textZh: "这可能在拉低你的评分。经验法则是控制在30%以下。1000额度的话别超过300。还掉以后评分很快就会上来。", actionHint: "rule of thumb 意思是经验法则，dragging down 意思是拉低", frequency: "common" },
              { textEn: "Yeah, high utilization will definitely ding your score. Try to stay under thirty percent of your limit. Once you pay some of that down, your score should bounce back in a month or two.", textZh: "是的，高使用率肯定会影响评分。尽量在额度的30%以下。还掉一部分后一两个月评分就会反弹。", actionHint: "ding your score 意思是扣分/影响评分，bounce back 意思是反弹", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "How often should I check my credit score?",
            textZh: "我应该多久查一次信用评分？",
          },
          {
            speaker: "them",
            role: "银行顾问",
            textEn: "You can check it for free through our app monthly — that's a soft inquiry and won't affect your score. You're also entitled to a free credit report from each of the three bureaus once a year through AnnualCreditReport.com.",
            textZh: "您可以每月通过我们的App免费查看——这是软查询，不会影响评分。您还有权每年从三大征信机构各免费获取一次信用报告，通过AnnualCreditReport.com。",
            keyPhrases: [
              { en: "soft inquiry", zh: "软查询（不影响评分）" },
              { en: "credit report", zh: "信用报告" },
              { en: "three bureaus", zh: "三大征信机构" },
            ],
            alternativeExpressions: [
              { textEn: "Check it monthly through our app — it's free and it doesn't hurt your score since it's a soft pull. Also, you can get a free full report once a year from each of the three big credit bureaus at AnnualCreditReport.com.", textZh: "每月通过App查就行——免费的，是软查询不影响评分。另外每年可以从三大征信机构各获取一次免费完整报告，在AnnualCreditReport.com。", actionHint: "soft pull 是 soft inquiry 的口语说法", frequency: "common" },
              { textEn: "Our app gives you a free score update every month — no impact on your credit. And once a year you can pull your full credit report from all three bureaus for free.", textZh: "我们的App每月免费更新评分——不影响信用。每年还可以免费获取三大征信机构的完整报告。", actionHint: "pull your report 意思是获取你的报告", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 16. 保险箱 ====================
  {
    id: "banking-safe-deposit",
    category: "banking",
    titleZh: "保险箱",
    titleEn: "Safe Deposit Box",
    description: "在银行租用保险箱存放重要物品",
    otherRole: "银行柜员",
    otherRoleIcon: "🔐",
    flows: [
      {
        id: "basic",
        titleZh: "租用保险箱",
        titleEn: "Renting a Safe Deposit Box",
        description: "咨询和租用银行保险箱",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I'd like to rent a safe deposit box. Do you have any available?",
            textZh: "我想租一个保险箱。还有空的吗？",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Yes, we have several sizes available. Our small boxes are five by five inches, medium ones are five by ten, and large ones are ten by ten. What do you need to store?",
            textZh: "有的，我们有几种尺寸。小号的5x5英寸，中号的5x10英寸，大号的10x10英寸。您需要存放什么？",
            keyPhrases: [
              { en: "safe deposit box", zh: "保险箱" },
              { en: "sizes available", zh: "可选尺寸" },
              { en: "inches", zh: "英寸" },
            ],
            alternativeExpressions: [
              { textEn: "We do! We've got small, medium, and large. The small one is about the size of a paperback book, medium is a bit bigger, and large can fit file folders. What are you planning to keep in it?", textZh: "有的！我们有小号、中号和大号。小号大概一本平装书大小，中号再大一些，大号能放文件夹。您打算放什么？", actionHint: "about the size of 用日常物品比较大小，更直观", frequency: "common" },
              { textEn: "Yeah, we've got a few options. Depends on what you're storing — documents, jewelry, something bigger? That'll help me figure out the right size.", textZh: "有的，好几种可选。取决于你要放什么——文件、首饰、还是更大的东西？这样我能帮你选合适的尺寸。", actionHint: "figure out 意思是确定/找出", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Just some important documents — my passport, birth certificate, and some jewelry. A medium box should work.",
            textZh: "就一些重要文件——护照、出生证明和一些首饰。中号应该够了。",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "A medium box is seventy-five dollars per year. You'll receive two keys — please keep them safe, as replacement keys cost twenty-five dollars each. You can access the box during banking hours.",
            textZh: "中号保险箱每年75美元。您会收到两把钥匙——请保管好，补配钥匙每把25美元。您可以在银行营业时间内使用保险箱。",
            keyPhrases: [
              { en: "per year", zh: "每年" },
              { en: "replacement keys", zh: "补配钥匙" },
              { en: "banking hours", zh: "银行营业时间" },
            ],
            alternativeExpressions: [
              { textEn: "A medium runs seventy-five a year. You'll get two keys — don't lose 'em, because it's twenty-five bucks to replace each one. You can access the box anytime we're open.", textZh: "中号每年75。会给你两把钥匙——别丢了，补一把25块。银行开门的时候随时可以来用。", actionHint: "runs 在这意思是花费，don't lose 'em 是 don't lose them 的口语", frequency: "common" },
              { textEn: "The medium box is seventy-five dollars annually. We give you a set of two keys — keep them somewhere safe. And you can come use the box during regular business hours.", textZh: "中号保险箱每年75美元。我们给您一套两把钥匙——放好。营业时间内随时可以来用保险箱。", actionHint: "annually 意思是每年", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is the contents of the box insured by the bank?",
            textZh: "保险箱里的东西银行给保险吗？",
            culturalNote: "银行保险箱里的物品通常不在FDIC保险范围内，也不在银行保险范围内。建议购买单独的保险。",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Actually, the contents are not insured by the bank or FDIC. We recommend that you add the items to your homeowner's or renter's insurance policy for coverage. Would you like to go ahead and rent the box?",
            textZh: "实际上，保险箱里的物品不在银行或FDIC保险范围内。我们建议您把这些物品加到您的房屋或租客保险中。您要租这个保险箱吗？",
            keyPhrases: [
              { en: "not insured", zh: "不在保险范围内" },
              { en: "homeowner's insurance", zh: "房屋保险" },
              { en: "renter's insurance", zh: "租客保险" },
            ],
            alternativeExpressions: [
              { textEn: "Good question. The bank doesn't actually insure what's inside the box. If you've got valuables in there, you'll want to make sure they're covered under your home or renter's insurance. Ready to go ahead?", textZh: "好问题。银行其实不保险箱里的东西。如果里面放贵重物品，建议确保在你的房屋或租客保险里有覆盖。要办吗？", actionHint: "covered under 意思是在保险范围内", frequency: "common" },
              { textEn: "Honestly, no — the contents aren't covered by us or FDIC. I'd check with your insurance provider to add them to your policy. Other than that, want to set it up?", textZh: "说实话不保的——东西不在我们或FDIC保险范围内。建议联系你的保险公司把它们加到保单里。除此之外，要办吗？", actionHint: "add them to your policy 意思是加到保单里", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, let's do it. Can someone else access the box if I give them my key?",
            textZh: "好，就租吧。如果我把钥匙给别人，别人能打开保险箱吗？",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Only authorized signers can access the box. You can add a co-renter to the agreement — they'll need to come in with their ID to be added. Both the key and proper identification are required for access.",
            textZh: "只有授权签名人才能使用保险箱。您可以在协议中添加共同租用人——他们需要带身份证件来办理。使用保险箱需要同时出示钥匙和有效身份证件。",
            keyPhrases: [
              { en: "authorized signers", zh: "授权签名人" },
              { en: "co-renter", zh: "共同租用人" },
              { en: "proper identification", zh: "有效身份证件" },
            ],
            alternativeExpressions: [
              { textEn: "Just having the key isn't enough — only people on the agreement can get in. If you want someone else to have access, they'll need to come in with their ID and we'll add them. You always need both the key and ID.", textZh: "光有钥匙不够——只有协议上的人才能进。如果你想让别人也能用，他们要带证件来，我们给加上。每次都需要钥匙加证件。", actionHint: "get in 意思是进入/使用", frequency: "common" },
              { textEn: "No, the key alone won't do it. We verify ID every time. But you can add someone to the account — a spouse, family member — they just need to show up with their ID to get registered.", textZh: "不行，光有钥匙不够。每次都要验证身份。但可以加人到账户——配偶、家人——带证件来登记就行。", actionHint: "show up 意思是到场", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 17. 手机银行 ====================
  {
    id: "banking-mobile-setup",
    category: "banking",
    titleZh: "手机银行",
    titleEn: "Mobile Banking Setup",
    description: "设置和使用手机银行App",
    otherRole: "银行技术支持",
    otherRoleIcon: "📱",
    flows: [
      {
        id: "basic",
        titleZh: "设置手机银行",
        titleEn: "Setting Up Mobile Banking",
        description: "首次设置手机银行App",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I'd like to set up mobile banking on my phone. Can you walk me through it?",
            textZh: "我想在手机上设置手机银行。你能教我怎么弄吗？",
            casualVersion: "Can you help me get the banking app set up on my phone?",
          },
          {
            speaker: "them",
            role: "银行技术支持",
            textEn: "Of course! First, download our app from the App Store or Google Play. Search for our bank name. Once it's installed, tap \"Enroll\" or \"Sign Up\" to create your online banking credentials.",
            textZh: "当然！首先从App Store或Google Play下载我们的应用。搜索我们的银行名称。安装好后，点\"Enroll\"或\"Sign Up\"来创建您的网上银行账号。",
            keyPhrases: [
              { en: "download our app", zh: "下载我们的应用" },
              { en: "enroll", zh: "注册" },
              { en: "credentials", zh: "账号密码/登录凭证" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing! Go to your app store and search for us. Once you've got it installed, there should be a \"Sign Up\" or \"New User\" button — tap that and follow the steps.", textZh: "没问题！去应用商店搜我们的名字。装好后应该有个\"Sign Up\"或\"New User\"按钮——点那个然后跟着步骤走。", actionHint: "follow the steps 意思是按步骤操作", frequency: "common" },
              { textEn: "Absolutely! Pull up the App Store or Play Store, grab our app, and when you open it, hit \"Enroll.\" It'll walk you through creating your login.", textZh: "当然！打开App Store或Play Store，下载我们的App，打开后点\"Enroll\"。它会引导你创建登录账号。", actionHint: "grab 在这意思是下载，walk you through 意思是引导你完成", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, I've downloaded it. It's asking for my account number and Social Security number to verify my identity.",
            textZh: "好的，下好了。它在要我的账号和社保号来验证身份。",
          },
          {
            speaker: "them",
            role: "银行技术支持",
            textEn: "Right. Enter those, then create a username and a strong password — at least eight characters with uppercase, lowercase, numbers, and a special character. You can also enable Face ID or fingerprint login after.",
            textZh: "对。输入后创建用户名和强密码——至少8个字符，包含大写、小写、数字和特殊字符。之后还可以开启面部识别或指纹登录。",
            keyPhrases: [
              { en: "strong password", zh: "强密码" },
              { en: "special character", zh: "特殊字符" },
              { en: "Face ID", zh: "面部识别" },
              { en: "fingerprint login", zh: "指纹登录" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, pop those in. Then make up a username and password — make it a good one, mix of upper and lowercase, numbers, and a symbol or two. After that you can turn on Face ID or fingerprint to make logging in easier.", textZh: "对，输入那些。然后创建用户名和密码——设个好的，大小写字母、数字加一两个符号。然后可以开启面部或指纹识别，登录更方便。", actionHint: "make it a good one 意思是设个强密码", frequency: "common" },
              { textEn: "Right. Once you've entered your details, pick a username and set up a password. Has to be at least eight characters — throw in some caps, numbers, and a special character. You can also set up biometric login afterward.", textZh: "对。输入信息后选个用户名设个密码。至少8个字符——加点大写、数字和特殊字符。之后还可以设置生物识别登录。", actionHint: "biometric login 意思是生物识别登录（指纹/面部）", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Done. Now it's asking me to set up two-factor authentication. What's that?",
            textZh: "好了。现在让我设置双重认证。那是什么？",
          },
          {
            speaker: "them",
            role: "银行技术支持",
            textEn: "Two-factor authentication adds an extra layer of security. Each time you log in, you'll receive a text message or email with a one-time code. You enter that code to complete the login. It prevents unauthorized access even if someone knows your password.",
            textZh: "双重认证增加了额外的安全层。每次登录时，您会收到一条短信或邮件，里面有一次性验证码。输入验证码完成登录。即使别人知道您的密码也无法登录。",
            keyPhrases: [
              { en: "two-factor authentication", zh: "双重认证/两步验证" },
              { en: "one-time code", zh: "一次性验证码" },
              { en: "unauthorized access", zh: "未授权访问" },
            ],
            alternativeExpressions: [
              { textEn: "It's basically a second layer of protection. When you log in, we text or email you a code, and you type it in. So even if someone steals your password, they still can't get in without your phone.", textZh: "基本上是第二层保护。登录时我们会给你发验证码短信或邮件，输入就行。所以即使别人偷了你的密码，没有你的手机也登不了。", actionHint: "can't get in 意思是无法登录", frequency: "common" },
              { textEn: "Think of it as a double lock. Your password is the first lock, and the code we send to your phone is the second. Nobody gets in without both.", textZh: "可以理解为双重锁。密码是第一道锁，我们发到你手机上的验证码是第二道。两个都有才能进。", actionHint: "double lock 是很形象的比喻", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, I'm all set up now. What can I do with the app?",
            textZh: "好的，设置好了。这个App能做什么？",
          },
          {
            speaker: "them",
            role: "银行技术支持",
            textEn: "You can check your balance, transfer money, pay bills, deposit checks by photo, set up alerts for transactions, and even lock or unlock your debit card instantly if you misplace it. It's basically a branch in your pocket!",
            textZh: "您可以查看余额、转账、付账单、拍照存支票、设置交易提醒，甚至在卡找不到的时候即时锁定或解锁借记卡。基本上就是口袋里的银行网点！",
            keyPhrases: [
              { en: "check your balance", zh: "查看余额" },
              { en: "pay bills", zh: "付账单" },
              { en: "set up alerts", zh: "设置提醒" },
              { en: "lock or unlock", zh: "锁定或解锁" },
            ],
            alternativeExpressions: [
              { textEn: "Pretty much everything — check your balance, move money around, pay bills, deposit checks with your camera, get notifications for transactions. Oh, and you can freeze your card right from the app if you can't find it.", textZh: "基本上什么都能做——查余额、转账、付账单、用摄像头存支票、收交易通知。哦对了，找不到卡的时候还能直接在App里冻结。", actionHint: "move money around 意思是转账，freeze your card 意思是冻结卡", frequency: "common" },
              { textEn: "A ton of stuff. Balance checks, transfers, bill pay, mobile check deposit, alerts — you name it. Plus if you lose your card, you can lock it instantly. It's like having the bank on your phone.", textZh: "能做好多事。查余额、转账、付账单、手机存支票、提醒——你能想到的都有。卡丢了还能即时锁定。就像手机上的银行。", actionHint: "you name it 意思是你说得出来的都有", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 18. 自动付款 ====================
  {
    id: "banking-auto-pay",
    category: "banking",
    titleZh: "自动付款",
    titleEn: "Setting Up Auto-Pay",
    description: "设置银行自动付款来定期支付账单",
    otherRole: "银行柜员",
    otherRoleIcon: "🔄",
    flows: [
      {
        id: "basic",
        titleZh: "设置自动付款",
        titleEn: "Auto-Pay Setup",
        description: "设置账单自动支付",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I keep forgetting to pay my bills on time. Can you help me set up automatic payments?",
            textZh: "我老是忘记按时付账单。你能帮我设置自动付款吗？",
            culturalNote: "在美国，逾期付款（late payment）会严重影响信用评分。设置auto-pay是保护信用记录的好方法。",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Absolutely! We can set up bill pay through your account. Which bills would you like to automate? Common ones are rent, utilities, credit card payments, and phone bills.",
            textZh: "当然！我们可以通过您的账户设置账单支付。您想自动支付哪些账单？常见的有房租、水电费、信用卡还款和手机费。",
            keyPhrases: [
              { en: "bill pay", zh: "账单支付" },
              { en: "automate", zh: "自动化" },
              { en: "utilities", zh: "水电费/公用事业费" },
            ],
            alternativeExpressions: [
              { textEn: "For sure! Auto-pay is a lifesaver. What bills do you wanna put on autopilot? Most people do rent, utilities, credit cards, phone — stuff like that.", textZh: "当然！自动付款太省心了。你想把哪些账单设成自动的？大多数人设房租、水电、信用卡、手机费这些。", actionHint: "lifesaver 意思是救星/太省心了，on autopilot 意思是自动运行", frequency: "common" },
              { textEn: "Absolutely, let's get that sorted. Which bills are you looking to set up? We can handle pretty much anything — rent, electric, credit card payments, you name it.", textZh: "好的，我们来弄。你想设哪些账单？基本什么都能设——房租、电费、信用卡还款，你说什么都行。", actionHint: "let's get that sorted 意思是我们来搞定这个", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd like to set up auto-pay for my credit card and my electricity bill.",
            textZh: "我想给信用卡和电费设置自动付款。",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "For your credit card, do you want to pay the minimum payment, the full balance, or a fixed amount each month?",
            textZh: "信用卡的话，您想每月自动支付最低还款额、全额，还是固定金额？",
            keyPhrases: [
              { en: "minimum payment", zh: "最低还款额" },
              { en: "full balance", zh: "全额" },
              { en: "fixed amount", zh: "固定金额" },
            ],
            alternativeExpressions: [
              { textEn: "For the credit card — do you wanna pay just the minimum each month, the full thing, or a set amount?", textZh: "信用卡的话——你想每月只还最低还款额、全额还清，还是固定金额？", actionHint: "the full thing 是 the full balance 的口语说法", frequency: "common" },
              { textEn: "With your credit card, you've got three options: minimum due, pay in full, or pick a specific dollar amount. Which works for you?", textZh: "信用卡有三个选择：最低还款额、全额、或者选一个具体金额。你选哪个？", actionHint: "minimum due 是 minimum payment 的另一种说法", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll pay the full balance each month. I don't want to pay any interest.",
            textZh: "每月全额还款。我不想付利息。",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Smart choice. I'll set it to pay the full statement balance on the due date. For your electricity bill, I'll need the account number from your utility company. Do you have a recent bill with you?",
            textZh: "明智的选择。我会设置在到期日自动支付全额账单余额。电费的话，我需要电力公司的账号。您带了最近的账单吗？",
            keyPhrases: [
              { en: "statement balance", zh: "账单余额" },
              { en: "utility company", zh: "电力/公用事业公司" },
              { en: "recent bill", zh: "最近的账单" },
            ],
            alternativeExpressions: [
              { textEn: "Good call — that's the way to go. I'll set it to pay off the whole balance on the due date. For the electric bill, I'll need your account number with the power company. Got a bill handy?", textZh: "好选择——就该这样。我会设成到期日还清全部余额。电费的话需要你在电力公司的账号。有账单在手边吗？", actionHint: "good call 意思是好的选择/决定", frequency: "common" },
              { textEn: "That's the smart move. Full balance it is. Now for the electric, do you have your utility account number? It should be on any recent bill.", textZh: "聪明的做法。那就全额。电费的话，你有电力公司的账号吗？任何最近的账单上都有。", actionHint: "that's the smart move 意思是明智之举", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, here it is. What if there's not enough money in my account when the payment is due?",
            textZh: "有的，给你。如果付款日账户里钱不够怎么办？",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "If there are insufficient funds, the payment will be declined and you may incur an overdraft fee or a returned payment fee. I'd recommend setting up low-balance alerts so you get a notification when your account drops below a certain amount.",
            textZh: "如果资金不足，付款会被拒绝，您可能会产生透支费或退款费。我建议设置低余额提醒，当账户余额低于某个金额时会通知您。",
            keyPhrases: [
              { en: "insufficient funds", zh: "资金不足" },
              { en: "declined", zh: "被拒绝" },
              { en: "returned payment fee", zh: "退款费" },
              { en: "low-balance alerts", zh: "低余额提醒" },
            ],
            alternativeExpressions: [
              { textEn: "If there's not enough in the account, the payment bounces and you could get hit with a fee. My advice — set up a low-balance alert so your phone pings you when you're running low.", textZh: "如果账户里钱不够，付款会被退回，可能还要被收费。我建议设个低余额提醒，余额不足时手机会通知你。", actionHint: "bounces 意思是被退回，pings you 意思是给你发通知", frequency: "common" },
              { textEn: "If there aren't enough funds, the payment won't go through and there might be a returned-payment charge. That's why I always recommend setting up balance alerts — that way you're never caught off guard.", textZh: "如果资金不够，付款不会通过，可能还会有退款费。所以我总是建议设余额提醒——这样你不会措手不及。", actionHint: "caught off guard 意思是措手不及", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good idea. Can I cancel or modify the auto-pay anytime?",
            textZh: "好主意。自动付款可以随时取消或修改吗？",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Yes, you can change or cancel auto-pay at any time through the app or online banking, or by calling us. Just make sure to do it at least one business day before the scheduled payment date.",
            textZh: "可以，您可以随时通过App、网上银行或打电话给我们来更改或取消自动付款。只需确保在预定付款日前至少一个工作日操作。",
            keyPhrases: [
              { en: "cancel auto-pay", zh: "取消自动付款" },
              { en: "scheduled payment date", zh: "预定付款日" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, totally flexible. You can change it or turn it off anytime in the app, online, or just give us a call. Just do it at least a day before the payment's set to go out.", textZh: "完全灵活。可以随时在App、网上改或关掉，或者打电话给我们。只要在付款日前至少一天操作就行。", actionHint: "turn it off 意思是关掉/取消", frequency: "common" },
              { textEn: "Absolutely. Auto-pay isn't set in stone. You can adjust or cancel whenever you want — just make sure it's at least one business day before the next payment hits.", textZh: "当然。自动付款不是固定不变的。想改想取消都行——只要在下次付款前至少一个工作日操作。", actionHint: "not set in stone 意思是不是一成不变的", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 19. 争议交易 ====================
  {
    id: "banking-dispute-transaction",
    category: "banking",
    titleZh: "争议交易",
    titleEn: "Disputing a Transaction",
    description: "发现账户上有不认识的交易记录，提出争议",
    otherRole: "争议处理专员",
    otherRoleIcon: "⚠️",
    flows: [
      {
        id: "basic",
        titleZh: "交易争议处理",
        titleEn: "Transaction Dispute Process",
        description: "发现可疑交易后提出争议的对话",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I noticed a charge on my account that I didn't make. It's for ninety-nine dollars from a company I've never heard of.",
            textZh: "我发现账户上有一笔我没有消费的扣款。是一家我从没听说过的公司扣了99美元。",
            culturalNote: "美国消费者保护法对争议交易有严格规定。信用卡争议有60天时限，借记卡有2个工作日的最佳报告期。越早报告，保护越强。",
          },
          {
            speaker: "them",
            role: "争议处理专员",
            textEn: "I'm sorry to hear that. Let me pull up your account. Can you tell me the date of the transaction and the exact amount?",
            textZh: "很抱歉。让我调出您的账户。能告诉我交易日期和确切金额吗？",
            keyPhrases: [
              { en: "pull up your account", zh: "调出您的账户" },
              { en: "date of the transaction", zh: "交易日期" },
              { en: "exact amount", zh: "确切金额" },
            ],
            alternativeExpressions: [
              { textEn: "I'm sorry to hear that. Let me take a look. Do you know the date and the exact dollar amount of the charge?", textZh: "很抱歉。我查一下。您知道那笔扣款的日期和确切金额吗？", actionHint: "take a look 意思是看一下", frequency: "common" },
              { textEn: "That's definitely concerning. Let me pull your account up. When did the charge show up, and how much was it for?", textZh: "这确实令人担忧。我调出您的账户。这笔消费什么时候出现的，多少钱？", actionHint: "that's concerning 表示重视对方的问题", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It was on March fifth, for ninety-nine dollars and ninety-nine cents. The merchant name shows as \"DG*SERVICES.\"",
            textZh: "3月5日，99.99美元。商户名显示为\"DG*SERVICES\"。",
          },
          {
            speaker: "them",
            role: "争议处理专员",
            textEn: "I found it. Sometimes merchant names look different on statements than the actual business name. Could this be a subscription or trial you may have signed up for online?",
            textZh: "我找到了。有时候商户名在账单上和实际商家名称不同。这会不会是您在网上注册过的订阅或试用？",
            keyPhrases: [
              { en: "merchant names", zh: "商户名称" },
              { en: "subscription", zh: "订阅" },
              { en: "trial", zh: "试用" },
              { en: "signed up for", zh: "注册/订阅了" },
            ],
            alternativeExpressions: [
              { textEn: "Got it. One thing to keep in mind — sometimes the name on the statement doesn't match the actual store or service. Any chance it's a subscription or free trial that started charging?", textZh: "找到了。有一点要注意——有时候账单上的名字和实际商家不一样。有没有可能是某个订阅或免费试用开始收费了？", actionHint: "started charging 意思是开始收费了", frequency: "common" },
              { textEn: "I see it. You know, these merchant names can be really confusing on statements. Think back — did you maybe sign up for any online service or trial recently?", textZh: "我看到了。你知道，账单上的商户名有时候真的很难认。回想一下——你最近有没有注册过什么在线服务或试用？", actionHint: "think back 意思是回想一下", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm positive I didn't sign up for anything. I don't recognize this charge at all.",
            textZh: "我确定没有注册过任何东西。这笔扣款我完全不认识。",
          },
          {
            speaker: "them",
            role: "争议处理专员",
            textEn: "Okay, I'll file a dispute on your behalf. We'll issue a provisional credit of ninety-nine ninety-nine to your account within ten business days while we investigate. The investigation can take up to ninety days.",
            textZh: "好的，我代您提交争议。调查期间，我们会在10个工作日内向您的账户发放99.99美元的临时退款。调查最长可能需要90天。",
            keyPhrases: [
              { en: "file a dispute", zh: "提交争议" },
              { en: "on your behalf", zh: "代您" },
              { en: "provisional credit", zh: "临时退款" },
              { en: "investigation", zh: "调查" },
            ],
            alternativeExpressions: [
              { textEn: "Alright, I'll get a dispute going for you. You should see a temporary credit for the ninety-nine ninety-nine within ten business days while we look into it. The whole process can take up to ninety days.", textZh: "好的，我帮您提交争议。10个工作日内您应该能看到99.99美元的临时退款。整个调查过程可能需要90天。", actionHint: "get a dispute going 意思是发起争议流程", frequency: "common" },
              { textEn: "I'll open a dispute case right now. In the meantime, we'll put the money back in your account temporarily — should show up within ten days. Full investigation could take up to three months.", textZh: "我现在就开一个争议案件。同时我们会把钱临时退回您的账户——10天内应该能看到。完整调查可能要三个月。", actionHint: "put the money back 意思是把钱退回去", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What if they find the charge was legitimate?",
            textZh: "如果调查发现这笔消费是合法的怎么办？",
          },
          {
            speaker: "them",
            role: "争议处理专员",
            textEn: "If the investigation determines the charge was authorized, the provisional credit would be reversed. But you'd receive written notice and have the right to appeal. In the meantime, I'd recommend keeping an eye on your statements for any other unfamiliar charges.",
            textZh: "如果调查确定消费是授权的，临时退款会被撤回。但您会收到书面通知，并有权上诉。同时，我建议您关注账单上是否有其他不熟悉的扣款。",
            keyPhrases: [
              { en: "reversed", zh: "撤回/退回" },
              { en: "written notice", zh: "书面通知" },
              { en: "right to appeal", zh: "上诉权" },
              { en: "keeping an eye on", zh: "关注/留意" },
            ],
            alternativeExpressions: [
              { textEn: "If it turns out the charge was legit, we'd take the credit back. But we'd let you know in writing, and you can always dispute it again. In the meantime, keep an eye on your statements for anything else fishy.", textZh: "如果查出消费是合法的，我们会收回临时退款。但会书面通知你，你可以再次申诉。同时注意账单上有没有其他可疑的。", actionHint: "legit 是 legitimate 的口语缩写，fishy 意思是可疑的", frequency: "common" },
              { textEn: "In the worst case, if they determine it was authorized, the temporary credit gets pulled back. You'd get a letter and you can appeal. Meanwhile, watch your account for any other charges you don't recognize.", textZh: "最坏的情况，如果确定是授权消费，临时退款会被收回。你会收到信件，可以上诉。同时注意账户上有没有其他不认识的消费。", actionHint: "in the worst case 意思是最坏的情况", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Should I get a new card number in case my card information was compromised?",
            textZh: "我是不是应该换个新卡号？万一我的卡信息泄露了。",
          },
          {
            speaker: "them",
            role: "争议处理专员",
            textEn: "That's a wise precaution. I'll cancel your current card and issue a new one with a different number. The new card will arrive in five to seven business days. In the meantime, you can use your digital wallet for contactless payments.",
            textZh: "这是明智的预防措施。我会取消您现在的卡并发一张新号码的卡。新卡5到7个工作日内寄到。在此期间，您可以使用数字钱包进行非接触式支付。",
            keyPhrases: [
              { en: "compromised", zh: "泄露/被盗用" },
              { en: "cancel your current card", zh: "取消现有卡" },
              { en: "digital wallet", zh: "数字钱包" },
              { en: "contactless payments", zh: "非接触式支付" },
            ],
            alternativeExpressions: [
              { textEn: "Smart thinking. I'll kill the old card and send you a brand new one with a different number. Should be there in five to seven days. You can still use Apple Pay or Google Pay in the meantime.", textZh: "想得对。我把旧卡停掉，给你发一张新卡号的。5到7天到。这期间可以用Apple Pay或Google Pay。", actionHint: "kill the old card 是停用旧卡的非常口语的说法", frequency: "common" },
              { textEn: "That's a good call. I'll deactivate this card and get a new one issued with a fresh number. Five to seven business days for delivery. In the meantime, your digital wallet should still work for tap-to-pay.", textZh: "好的决定。我停用这张卡，发一张新号码的。5到7个工作日寄到。在此期间数字钱包应该还能用碰一碰支付。", actionHint: "tap-to-pay 意思是碰一碰/非接触支付", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 20. 账户冻结 ====================
  {
    id: "banking-account-frozen",
    category: "banking",
    titleZh: "账户冻结",
    titleEn: "Account Frozen",
    description: "发现银行账户被冻结，了解原因并解决问题",
    otherRole: "银行客服",
    otherRoleIcon: "🧊",
    flows: [
      {
        id: "basic",
        titleZh: "解冻账户",
        titleEn: "Unfreezing an Account",
        description: "发现账户被冻结后解决问题",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I tried to use my debit card and it was declined. When I checked online, it says my account is frozen. What's going on?",
            textZh: "我刚才用借记卡被拒绝了。上网查了一下，显示账户被冻结了。怎么回事？",
            casualVersion: "My card just got declined and my account says it's frozen. What happened?",
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn: "I'm sorry for the inconvenience. Let me check your account. Can you verify your identity with your full name, date of birth, and the last four digits of your Social?",
            textZh: "很抱歉给您带来不便。我查一下您的账户。能用您的全名、出生日期和社保号后四位验证身份吗？",
            keyPhrases: [
              { en: "inconvenience", zh: "不便" },
              { en: "verify your identity", zh: "验证身份" },
              { en: "date of birth", zh: "出生日期" },
            ],
            alternativeExpressions: [
              { textEn: "I'm really sorry about that. Let me look into this for you. For security, can you give me your full name, date of birth, and the last four of your Social?", textZh: "真的很抱歉。我帮您查一下。为了安全，能告诉我您的全名、生日和社保号后四位吗？", actionHint: "look into this 意思是调查这件事", frequency: "common" },
              { textEn: "That's frustrating, I'm sorry. Let's get to the bottom of this. I just need to verify you first — name, birthday, and last four of your SSN?", textZh: "很烦人，对不起。我们来查清楚。先验证一下——姓名、生日、社保号后四位？", actionHint: "get to the bottom of this 意思是查清楚/弄明白", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "My name is Zhang Ming, born January fifteenth, nineteen-ninety, and the last four are six-seven-eight-nine.",
            textZh: "我叫张明，1990年1月15日出生，后四位是6789。",
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn: "Thank you. I can see that our fraud detection system flagged some unusual activity on your account. There were several transactions from a different state within a short period. Were you traveling recently?",
            textZh: "谢谢。我看到我们的反欺诈系统标记了您账户上一些异常活动。短时间内有多笔来自不同州的交易。您最近有出行吗？",
            keyPhrases: [
              { en: "fraud detection system", zh: "反欺诈系统" },
              { en: "flagged", zh: "标记/标识" },
              { en: "unusual activity", zh: "异常活动" },
              { en: "different state", zh: "不同的州" },
            ],
            alternativeExpressions: [
              { textEn: "Okay, I see what's going on. Our system picked up some unusual spending — charges in a different state within a short window. Have you been traveling lately?", textZh: "好的，我看到怎么回事了。系统检测到一些异常消费——短时间内在另一个州有消费。你最近有出行吗？", actionHint: "picked up 意思是检测到，short window 意思是短时间内", frequency: "common" },
              { textEn: "Thanks. So it looks like our fraud alerts kicked in because there were transactions popping up from another state. Were you out of town recently?", textZh: "谢谢。看起来是因为另一个州出现了交易，触发了我们的反欺诈警报。您最近出远门了吗？", actionHint: "kicked in 意思是启动/触发，out of town 意思是出远门", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes! I traveled to New York last weekend for a business trip. Those transactions were mine.",
            textZh: "是的！我上周末去纽约出差了。那些交易是我的。",
            culturalNote: "在美国旅行前最好通知银行你的行程（设置travel notice），否则异地消费可能触发反欺诈冻结。很多银行的App可以直接设置。",
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn: "That explains it. I can see purchases in New York that triggered the alert. I'll verify these transactions with you, and then we can unfreeze your account right away. Can you confirm a purchase at Grand Central Market for twenty-three dollars?",
            textZh: "那就说通了。我看到纽约的消费触发了警报。我会跟您核实这些交易，然后马上解冻您的账户。您能确认在Grand Central Market消费了23美元吗？",
            keyPhrases: [
              { en: "triggered the alert", zh: "触发了警报" },
              { en: "unfreeze your account", zh: "解冻您的账户" },
              { en: "confirm a purchase", zh: "确认一笔消费" },
            ],
            alternativeExpressions: [
              { textEn: "Ah, that makes sense then. The New York charges set off the alarm. Let me just run through a few of these with you and then we'll get you unfrozen. Did you spend twenty-three bucks at Grand Central Market?", textZh: "那就说通了。纽约的消费触发了警报。我跟你过几笔然后就给你解冻。你在Grand Central Market花了23块吗？", actionHint: "set off the alarm 意思是触发警报，run through 意思是过一遍", frequency: "common" },
              { textEn: "Oh okay, that explains it. Your New York transactions tripped the fraud detection. Let me verify a couple with you real quick, and I'll unlock your account. There's a twenty-three-dollar charge at Grand Central Market — ring any bells?", textZh: "哦好的，那就解释通了。纽约的交易触发了反欺诈检测。我快速跟你核实几笔，然后解锁账户。Grand Central Market有笔23美元——有印象吗？", actionHint: "tripped 意思是触发，ring any bells 意思是有没有印象", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, that was me. And the hotel charge too.",
            textZh: "是的，是我消费的。酒店那笔也是。",
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn: "Perfect. I've verified all the transactions and I'm unfreezing your account now. It should be active again within the next few minutes. For future trips, I'd recommend setting a travel notice in our app so this doesn't happen again.",
            textZh: "好的。我已经核实了所有交易，现在解冻您的账户。几分钟内就能恢复正常。以后出行建议在我们的App里设置出行通知，这样就不会再发生了。",
            keyPhrases: [
              { en: "verified all the transactions", zh: "核实了所有交易" },
              { en: "active again", zh: "恢复正常" },
              { en: "travel notice", zh: "出行通知" },
            ],
            alternativeExpressions: [
              { textEn: "We're all good. Everything checks out. I'm unfreezing your account right now — give it a few minutes and you'll be back in business. Next time you travel, set up a travel alert on the app so this doesn't happen again.", textZh: "没问题了。一切核实通过。我现在解冻你的账户——几分钟后就能正常使用了。下次出行在App里设个出行提醒就不会再这样了。", actionHint: "back in business 意思是恢复正常运作，checks out 意思是核实通过", frequency: "common" },
              { textEn: "All verified. Lifting the freeze now. You should be able to use your card again in just a minute or two. Pro tip — set a travel notice through our app before your next trip.", textZh: "全部核实了。正在解冻。一两分钟后就能用卡了。建议——下次出行前在App里设个出行通知。", actionHint: "pro tip 意思是专业建议，lifting the freeze 意思是解除冻结", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much. I'll set up the travel notice next time. How do I do that in the app?",
            textZh: "太感谢了。下次我会设出行通知的。在App里怎么设？",
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn: "Go to \"Account Settings,\" then \"Travel Notifications.\" Enter your destination and travel dates. You can set it up to thirty days in advance. That way, our system won't flag your purchases as suspicious while you're traveling.",
            textZh: "进入\"账户设置\"，然后点\"出行通知\"。输入目的地和出行日期。最多可以提前30天设置。这样您旅行时我们的系统就不会把您的消费标记为可疑了。",
            keyPhrases: [
              { en: "Account Settings", zh: "账户设置" },
              { en: "Travel Notifications", zh: "出行通知" },
              { en: "in advance", zh: "提前" },
              { en: "suspicious", zh: "可疑的" },
            ],
            alternativeExpressions: [
              { textEn: "It's easy — in the app, go to Settings, then Travel Notifications. Just put in where you're going and when. You can set it up to a month ahead. That tells our system not to freak out when it sees charges from another city.", textZh: "很简单——在App里进设置，然后出行通知。输入你去哪和什么时候。最多提前一个月设。这样系统看到外地消费就不会紧张了。", actionHint: "freak out 意思是紧张/恐慌，ahead 意思是提前", frequency: "common" },
              { textEn: "Open the app, tap Account Settings, then Travel Notifications. Plug in your destination and dates — you can do it up to thirty days before the trip. That way our fraud system knows you're on the move.", textZh: "打开App，点账户设置，然后出行通知。填入目的地和日期——最多出行前30天设。这样反欺诈系统就知道你在出行了。", actionHint: "plug in 意思是填入/输入，on the move 意思是在外出/旅途中", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },
];
