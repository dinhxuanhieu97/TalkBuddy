import type { PresetScene } from "../scene-types";

/**
 * 大类 10：💰 银行与通讯（Banking & Telecom）
 * 4 子场景：ATM/取现、货币兑换、手机/SIM卡、邮政/快递
 */
export const BANKING_SCENES: PresetScene[] = [
  // ==================== ATM取现/问题 ====================
  {
    id: "banking-atm",
    tags: ["ATM", "取钱", "withdraw"],
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
            culturalNote: "美国口语中，当需要打扰别人时，直接说“Excuse me”即可，不需要像中文那样有很多客套话。",
            commonMistake: {
              wrong: "I want to take cash from ATM.",
              correct: "I'd like to withdraw cash from the ATM.",
              explanation: "“take cash”不自然，用“withdraw cash”或“get cash”更地道，且“I'd like to”更礼貌。",
            },
            formalityVariants: {
              casual: "Excuse me, trying to get cash from the ATM, but I'm having trouble.",
              standard: "Excuse me, I'm trying to withdraw cash from the ATM, but I'm having trouble with the machine.",
              formal:
                "Pardon me, I'm attempting to perform a cash withdrawal at the ATM, however, I'm encountering some difficulty with the device.",
            },
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
              {
                textEn: "Yeah, no worries. What's going on with the machine?",
                textZh: "没事儿，机器怎么了？",
                actionHint: "很随意的回应，准备描述问题",
                frequency: "common",
              },
              {
                textEn: "What kind of trouble are you running into?",
                textZh: "你遇到什么麻烦了？",
                actionHint: "直接问问题，简洁友好",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah, I can help. What's up? Is it not taking your card?",
            formalityVariants: {
              casual: "Sure, I can help. What's the problem? Is it not taking your card?",
              standard: "Of course, I can help. What seems to be the problem? Is the machine not accepting your card?",
              formal:
                "Certainly, I'd be pleased to assist you. Could you please specify the nature of the issue? Is the ATM perhaps not recognizing your card?",
            },
          },
          {
            speaker: "you",
            textEn:
              "It accepted my card, but the screen is showing options I don't understand. I just want to withdraw money from my checking account.",
            textZh: "卡已经插进去了，但屏幕上的选项我看不懂。我只想从活期账户取钱。",
            culturalNote:
              "美国银行账户分 checking account（活期/支票账户）和 savings account（储蓄账户），取现一般选 checking。",
            casualVersion:
              "It took my card, but the screen's got stuff I don't get. Just wanna get cash from my checking.",
            commonMistake: {
              wrong:
                "It accepted my card, but the screen is showing options I don't understand. I just want to withdraw money from my live account.",
              correct:
                "It accepted my card, but the screen is showing options I don't understand. I just want to withdraw money from my checking account.",
              explanation: "“活期账户”对应的英文是“checking account”，不是“live account”。",
            },
            formalityVariants: {
              casual: "Card went in, but the screen's weird. Just need cash from checking.",
              standard:
                "It accepted my card, but the screen is showing options I don't understand. I just want to withdraw money from my checking account.",
              formal:
                "My card has been successfully inserted, however, the display is presenting unfamiliar options. My sole intention is to initiate a cash withdrawal from my checking account.",
            },
          },
          {
            speaker: "them",
            role: "银行工作人员",
            textEn:
              'No problem. You\'ll want to select "Withdrawal," then choose "Checking." After that, enter the amount you\'d like. Would you like me to walk you through it?',
            textZh:
              '没问题。您选"Withdrawal"（取款），然后选"Checking"（活期）。之后输入您要取的金额就行。需要我一步一步带您操作吗？',
            culturalNote: "美国银行常将账户分Checking和Savings，需明确区分",
            commonMistake: {
              wrong: "I choose Checking account",
              correct: "You'll want to select 'Checking'",
              explanation: "直接说'我选'不自然，用'You'll want to select'更像建议",
            },
            keyPhrases: [
              { en: "withdrawal", zh: "取款" },
              { en: "checking", zh: "活期账户" },
              { en: "enter the amount", zh: "输入金额" },
              { en: "walk you through it", zh: "一步一步带您操作" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  'Easy — just hit "Withdrawal," pick "Checking," and punch in how much you want. Want me to show you?',
                textZh: '简单——点"取款"，选"活期"，输入你要的金额。要我给你演示吗？',
                actionHint: "口语化指导，可以接受帮助",
                frequency: "common",
              },
              {
                textEn:
                  'Sure thing. Tap "Withdrawal" first, then "Checking" for your account type. I can walk you through the rest if you need.',
                textZh: '没问题。先点"取款"，然后选"活期"账户类型。需要的话我帮你操作剩下的。',
                actionHint: "分步骤指导，语气友好",
                frequency: "common",
              },
            ],
            casualVersion: "No prob. Just select \\",
            formalityVariants: {
              casual: "Easy. Just select \\",
              standard: "No problem. You'll want to select \\",
              formal: "Certainly. Kindly proceed to select \\",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please. Also, is there a fee for using this ATM with a foreign card?",
            textZh: "好的，麻烦了。另外，用国外的卡在这台ATM取钱有手续费吗？",
            casualVersion: "Yeah, thanks. Also, any fee for using this ATM with a foreign card?",
            commonMistake: {
              wrong: "Is there a handling fee for using this ATM?",
              correct: "Is there a fee/surcharge for using this ATM?",
              explanation: "“handling fee”通常指人工服务费，ATM取款常用“fee”或“surcharge”。",
            },
            formalityVariants: {
              casual: "Yep, thanks. And, is there a fee for foreign cards here?",
              standard: "Yes, please. Also, is there a fee for using this ATM with a foreign card?",
              formal:
                "Affirmative, thank you. Furthermore, may I inquire if there are any charges associated with utilizing this ATM with a non-domestic card?",
            },
          },
          {
            speaker: "them",
            role: "银行工作人员",
            textEn:
              "There is usually a surcharge for out-of-network cards — typically around three to five dollars per transaction. Your own bank might also charge an international ATM fee on top of that.",
            textZh: "非本行卡通常会收一笔附加费——一般每笔交易3到5美元。您自己的银行也可能另外收一笔国际ATM手续费。",
            keyPhrases: [
              { en: "surcharge", zh: "附加费" },
              { en: "out-of-network", zh: "非本行/非网络内" },
              { en: "per transaction", zh: "每笔交易" },
              { en: "on top of that", zh: "在此基础上额外" },
            ],
            culturalNote: "在美国用中国银联卡取现，ATM会收2-5美元手续费，发卡行也会收费。建议一次多取减少次数。",
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, heads up — there's usually a few bucks fee for using a card that's not from our bank. Plus your bank back home might hit you with their own fee.",
                textZh: "提醒一下——用非本行卡通常会收几块钱手续费。你在国内的银行也可能另外收费。",
                actionHint: "注意双重收费，考虑一次多取",
                frequency: "common",
              },
              {
                textEn:
                  "Foreign cards get dinged with a surcharge, usually three to five bucks. And that's not counting whatever your bank charges on their end.",
                textZh: "外国卡会被收附加费，通常三到五块。这还不算你自己银行那边收的费。",
                actionHint: "get dinged = 被收费（口语），注意总费用",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Usually there's a surcharge for outside cards — like three to five bucks a transaction. Your bank might hit you with an international ATM fee too.",
            formalityVariants: {
              casual:
                "You usually get a surcharge for non-network cards — like $3-5 a pop. And your bank might add an international ATM fee.",
              standard:
                "There is usually a surcharge for out-of-network cards — typically around three to five dollars per transaction. Your own bank might also charge an international ATM fee on top of that.",
              formal:
                "There is customarily a surcharge applied for cards not affiliated with this network, generally ranging from three to five U.S. dollars per transaction. Additionally, your originating financial institution may levy an international ATM fee.",
            },
          },
          {
            speaker: "you",
            textEn: "I see. Can I withdraw two hundred dollars?",
            textZh: "明白了。我可以取200美元吗？",
            casualVersion: "Got it. Can I get two hundred bucks?",
            commonMistake: {
              wrong: "I see. I can take two hundred dollars?",
              correct: "I see. Can I withdraw two hundred dollars?",
              explanation: "“take”在这里不自然，用“withdraw”或“get”更常用；疑问句语序要倒装。",
            },
            formalityVariants: {
              casual: "Okay. Can I get $200?",
              standard: "I see. Can I withdraw two hundred dollars?",
              formal: "Understood. Am I permitted to withdraw two hundred U.S. dollars?",
            },
          },
          {
            speaker: "them",
            role: "银行工作人员",
            textEn:
              'Sure. Just select the amount here — you can choose from the preset amounts, or tap "Other" to enter a custom amount. This machine dispenses twenties and fifties.',
            textZh: '可以。在这里选金额——您可以选预设的金额，或者点"Other"输入自定义金额。这台机器出20和50面值的钞票。',
            keyPhrases: [
              { en: "preset amounts", zh: "预设金额" },
              { en: "other", zh: "其他/自定义" },
              { en: "dispenses twenties and fifties", zh: "出20和50面值的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  'Yep! Pick one of the quick amounts on screen, or hit "Other" if you want a specific number. It only gives out twenties and fifties though.',
                textZh: '可以！选屏幕上的快捷金额，或者点"Other"输入你要的数。不过只出20和50的。',
                actionHint: "了解机器只出特定面值",
                frequency: "common",
              },
              {
                textEn:
                  "Go ahead and pick how much. You can do a preset or type in whatever you want. Just so you know, it spits out twenties and fifties.",
                textZh: "选你要多少吧。可以选预设的或自己输入。提醒一下，这台机器只出20和50面值的。",
                actionHint: "spits out 是口语说法=吐出",
                frequency: "occasional",
              },
            ],
            casualVersion: "Yeah, just pick the amount here — either one of the presets or tap \\",
            formalityVariants: {
              casual: "Yep. Pick the amount here — presets or tap \\",
              standard: "Sure. Just select the amount here — you can choose from the preset amounts, or tap \\",
              formal:
                "Certainly. Kindly select the desired amount at this point; you may opt for one of the predetermined sums or touch \\",
            },
          },
          {
            speaker: "you",
            textEn: 'Got it. Oh, it\'s asking me something — "Would you like a receipt?"',
            textZh: '好的。哦，它在问我一个问题——"要不要收据？"',
            casualVersion: "Okay. Uh, it's asking me something — \\",
            formalityVariants: {
              casual: "Alright. Hold on, it's asking me something — \\",
              standard: "Got it. Oh, it's asking me something — \\",
              formal: "Understood. Ah, the machine is currently prompting me with a query — \\",
            },
          },
          {
            speaker: "them",
            role: "银行工作人员",
            textEn:
              "That's just asking if you want a printed receipt. I'd recommend selecting \"Yes\" so you have a record of the transaction, especially with a foreign card.",
            textZh: '这是问您要不要打印收据。我建议选"Yes"，这样您有交易记录，用国外的卡尤其建议保留。',
            keyPhrases: [
              { en: "printed receipt", zh: "打印收据" },
              { en: "record of the transaction", zh: "交易记录" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It's asking about a receipt. I'd say grab one — good to have proof of the transaction, you know?",
                textZh: "在问要不要收据。我建议拿一张——留个交易凭证比较好。",
                actionHint: "grab one = 拿一张（口语）",
                frequency: "common",
              },
              {
                textEn:
                  "That's the receipt prompt. Definitely hit \"Yes\" — you'll want that for your records, especially using a foreign card.",
                textZh: '这是收据提示。一定选"是"——留着记录，尤其用外国卡的话。',
                actionHint: "建议保留收据作为凭证",
                frequency: "common",
              },
            ],
            casualVersion: "That's just asking if you want a receipt. I'd say go with \\",
            formalityVariants: {
              casual: "It's just for a receipt. I'd go with \\",
              standard: "That's just asking if you want a printed receipt. I'd recommend selecting \\",
              formal:
                "That query is merely inquiring as to whether you desire a printed transaction receipt. I would advise choosing \\",
            },
          },
          {
            speaker: "you",
            textEn: "Great, it worked! Thank you so much for your help.",
            textZh: "太好了，取到了！非常感谢您的帮助。",
            casualVersion: "Awesome, it worked! Thanks a ton for your help.",
            commonMistake: {
              wrong: "It's okay, it worked! Thank you very much for your help.",
              correct: "Great, it worked! Thank you so much for your help.",
              explanation: "“It's okay”通常表示没关系或情况尚可，不用于表达成功或完美。",
            },
            formalityVariants: {
              casual: "Yes! It worked! Thanks for the help.",
              standard: "Great, it worked! Thank you so much for your help.",
              formal:
                "Excellent, the transaction was successful! I extend my sincere gratitude for your invaluable assistance.",
            },
          },
          {
            speaker: "them",
            role: "银行工作人员",
            textEn: "You're welcome! Don't forget to take your card. Have a good day!",
            textZh: "不客气！别忘了取走您的卡。祝您愉快！",
            keyPhrases: [{ en: "don't forget to take your card", zh: "别忘了取卡" }],
            alternativeExpressions: [
              {
                textEn: "No problem! Oh, make sure you grab your card before you go. Take care!",
                textZh: "没事儿！记得走之前拿卡。保重！",
                actionHint: "提醒取卡，友好告别",
                frequency: "common",
              },
              {
                textEn: "Happy to help! And hey — don't leave your card in there. Have a great one!",
                textZh: "很高兴帮到你！别把卡忘在机器里了。祝你愉快！",
                actionHint: "have a great one = 祝你愉快（口语）",
                frequency: "common",
              },
            ],
            casualVersion: "No problem! Don't forget your card. Have a good one!",
            formalityVariants: {
              casual: "No prob! Grab your card. Later!",
              standard: "You're welcome! Don't forget to take your card. Have a good day!",
              formal:
                "You are most welcome! Please ensure you retrieve your card. I wish you a pleasant remainder of your day.",
            },
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
            commonMistake: {
              wrong: "I need urgent help.",
              correct: "I need help, it's urgent.",
              explanation: "“urgent help” 听起来不自然，可说 “it's urgent” 或 “I really need help”。",
            },
            formalityVariants: {
              casual: "Hey, I need help ASAP. My card just got stuck in the ATM, won't come out.",
              standard: "Excuse me, I need help urgently. The ATM just swallowed my card and it won't give it back.",
              formal:
                "Pardon me, but I require immediate assistance. The automated teller machine has retained my card and is not returning it.",
            },
          },
          {
            speaker: "them",
            role: "银行工作人员",
            textEn:
              "I'm sorry to hear that. That can happen sometimes, especially with foreign cards. Can you tell me which ATM it was? And do you remember if it showed any error message?",
            textZh:
              "很抱歉发生这种情况。这种事偶尔会发生，尤其是外国卡。您能告诉我是哪台ATM吗？还记得屏幕上有没有显示什么错误信息？",
            keyPhrases: [
              { en: "swallowed", zh: "吞了" },
              { en: "foreign cards", zh: "外国卡" },
              { en: "error message", zh: "错误信息" },
            ],
            alternativeExpressions: [
              {
                textEn: "Oh no, that's frustrating. Which machine was it? Did it give you any kind of error?",
                textZh: "天哪，真烦人。是哪台机器？有显示什么错误吗？",
                actionHint: "表示同情并追问细节",
                frequency: "common",
              },
              {
                textEn:
                  "Ugh, yeah, those machines do that sometimes. Do you remember which one it was and if anything popped up on the screen?",
                textZh: "唉，那些机器有时候就这样。记得是哪台吗，屏幕上有弹出什么吗？",
                actionHint: "popped up = 弹出（口语）",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Oh, sorry to hear that. Happens sometimes, especially with foreign cards. Which ATM was it? Any error message?",
            formalityVariants: {
              casual:
                "Bummer, sorry about that. Happens sometimes, especially with international cards. Which ATM? See any error messages?",
              standard:
                "I'm sorry to hear that. That can happen sometimes, especially with foreign cards. Can you tell me which ATM it was? And do you remember if it showed any error message?",
              formal:
                "I regret to learn of this incident. Such occurrences are not uncommon, particularly with non-domestic cards. Could you please specify the ATM's location, and do you recall observing any error notifications on the display?",
            },
          },
          {
            speaker: "you",
            textEn:
              'It was the one by the entrance. It said something like "transaction cannot be completed" and then it kept my card.',
            textZh: '入口旁边那台。屏幕上显示类似"交易无法完成"的信息，然后卡就被吞了。',
            casualVersion: "The one by the door. Said something like \\",
            formalityVariants: {
              casual: "The one right by the door. Showed something like \\",
              standard: "It was the one by the entrance. It said something like \\",
              formal:
                "It was the automated teller machine located adjacent to the main entrance. The display indicated a message approximating \\",
            },
          },
          {
            speaker: "them",
            role: "银行工作人员",
            textEn:
              "I understand. Unfortunately, if the ATM has retained your card, we can't retrieve it right away. The machine will need to be opened by our technician. Can I see your ID — a passport would work — so I can file a report?",
            textZh:
              "我明白了。很遗憾，如果ATM已经吞卡，我们没办法马上取出来。需要技术人员来开机器。我能看一下您的证件吗？护照就行——我好做一份记录。",
            keyPhrases: [
              { en: "retained your card", zh: "吞了您的卡" },
              { en: "retrieve", zh: "取回" },
              { en: "technician", zh: "技术人员" },
              { en: "file a report", zh: "做记录/填报告" },
            ],
            culturalNote: "ATM吞卡后通常不能立即取回，需要等银行技术人员。建议随身携带护照复印件以备不时之需。",
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, once the machine takes it, we can't get it out ourselves — a tech has to come open it up. Got any ID on you? Passport works fine.",
                textZh: "一旦机器吞了卡，我们自己取不出来——得等技术员来开机器。带证件了吗？护照就行。",
                actionHint: "got any ID on you 是很口语的问法",
                frequency: "common",
              },
              {
                textEn:
                  "Unfortunately there's no way to pop it back out. We'll need to get a technician involved. Can you show me some form of ID so I can document this?",
                textZh: "很遗憾没法把卡退出来。我们需要让技术员处理。能出示一下证件吗，我做个记录？",
                actionHint: "document this = 做记录",
                frequency: "common",
              },
            ],
            casualVersion:
              "Got it. If the ATM kept your card, we can't get it out right now. A tech has to open the machine. Can I see your ID – a passport's fine – so I can make a report?",
            commonMistake: {
              wrong: "We can't take out your card.",
              correct: "We can't retrieve your card.",
              explanation: "“take out” 不用于此语境，应说 “retrieve” 或 “get it back”。",
            },
            formalityVariants: {
              casual:
                "Okay. If the ATM ate your card, we can't get it out instantly. A tech has to open it. Need to see your ID – passport's fine – to log this.",
              standard:
                "I understand. Unfortunately, if the ATM has retained your card, we can't retrieve it right away. The machine will need to be opened by our technician. Can I see your ID — a passport would work — so I can file a report?",
              formal:
                "I comprehend the situation. Regrettably, if the automated teller machine has confiscated your card, immediate retrieval is not feasible. The unit will necessitate access by our technical personnel. May I request a form of identification – a passport would be acceptable – for the purpose of completing an incident report?",
            },
          },
          {
            speaker: "you",
            textEn:
              "Here's my passport. How long will it take to get my card back? I'm only in the country for a few more days.",
            textZh: "这是我的护照。要多久才能拿回卡？我在这个国家只待几天了。",
            casualVersion: "Here's my passport. How long 'til I get my card back? Only here for a few more days.",
            formalityVariants: {
              casual: "Passport. How soon can I get my card? I'm only here a few more days.",
              standard:
                "Here's my passport. How long will it take to get my card back? I'm only in the country for a few more days.",
              formal:
                "This is my passport. What is the estimated timeframe for the recovery of my card? My stay in this country is limited to a few additional days.",
            },
          },
          {
            speaker: "them",
            role: "银行工作人员",
            textEn:
              "It typically takes two to three business days to retrieve a retained card. Since you're leaving soon, I'd recommend contacting your bank's international hotline to report the issue. They can usually send a replacement to your home address or block the card and issue a new one.",
            textZh:
              "通常需要两到三个工作日才能取回被吞的卡。既然您很快要离开，我建议您联系发卡行的国际客服热线报告此事。他们通常可以把新卡寄到您的家庭地址，或者冻结旧卡重新发一张。",
            commonMistake: {
              wrong: "It will take two to three business days.",
              correct: "It typically takes two to three business days.",
              explanation: "用 'will' 太绝对，'typically' 表示通常情况，更自然准确。",
            },
            keyPhrases: [
              { en: "two to three business days", zh: "两到三个工作日" },
              { en: "international hotline", zh: "国际客服热线" },
              { en: "replacement", zh: "补发的卡" },
              { en: "block the card", zh: "冻结卡" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Realistically, it's gonna be a couple business days before we can get it back. Your best bet is to call your bank — they can freeze the card and send you a new one.",
                textZh: "实话说，要等几个工作日才能拿回来。最好的办法是打给你的银行——他们能冻结卡然后寄新卡。",
                actionHint: "your best bet = 最好的办法",
                frequency: "common",
              },
              {
                textEn:
                  "It'll be two or three business days at least. Since you're heading out soon, I'd call your bank's international number and have them sort it out from their end.",
                textZh: "至少两三个工作日。既然你快走了，建议打发卡行国际客服让他们那边处理。",
                actionHint: "sort it out = 处理解决",
                frequency: "common",
              },
            ],
            casualVersion:
              "Usually takes two, three business days to get a card back. Since you're leaving, I'd call your bank's international line to report it. They can usually mail a new one to your home or just cancel this one and issue a new one.",
            formalityVariants: {
              casual:
                "Usually two, three business days to get a stuck card. Since you're leaving, best to call your bank's international number. They can send a new one to your home or block this one and send another.",
              standard:
                "It typically takes two to three business days to retrieve a retained card. Since you're leaving soon, I'd recommend contacting your bank's international hotline to report the issue. They can usually send a replacement to your home address or block the card and issue a new one.",
              formal:
                "The standard processing time for the retrieval of a retained card is approximately two to three business days. Given your impending departure, I would advise you to contact your issuing bank's international customer service hotline to report this incident. They are typically able to dispatch a replacement card to your residential address or, alternatively, block the compromised card and arrange for a new issuance.",
            },
          },
          {
            speaker: "you",
            textEn: "That's really inconvenient. Is there any way to get emergency cash? This was my only bank card.",
            textZh: "这太不方便了。有没有什么办法能紧急拿到现金？这是我唯一的银行卡。",
            casualVersion:
              "Ugh, that's super inconvenient. Any way to get emergency cash? This was my only debit card.",
            commonMistake: {
              wrong: "This was my only bank card.",
              correct: "This was my only debit card.",
              explanation: "在美国 “bank card” 通常指 “debit card” (借记卡)。",
            },
            formalityVariants: {
              casual: "Ugh, that's a pain. Can I get some emergency cash? This was my only card.",
              standard:
                "That's really inconvenient. Is there any way to get emergency cash? This was my only bank card.",
              formal:
                "That presents a considerable inconvenience. Are there any provisions for obtaining emergency funds? This was my sole banking instrument.",
            },
          },
          {
            speaker: "them",
            role: "银行工作人员",
            textEn:
              "If you have a credit card, you could get a cash advance at the counter, though there will be a fee. Alternatively, you could use a service like Western Union to have someone wire you money. You might also try using a mobile payment app if you have one set up.",
            textZh:
              "如果您有信用卡，可以在柜台做信用卡取现，不过会有手续费。您也可以用西联汇款让别人给您汇钱。如果设置了手机支付app的话，也可以试试。",
            culturalNote: "美国现金服务如Western Union很普遍，但手续费高。国内支付宝微信少见。",
            keyPhrases: [
              { en: "cash advance", zh: "信用卡取现" },
              { en: "wire you money", zh: "给您汇钱" },
              { en: "Western Union", zh: "西联汇款" },
              { en: "mobile payment app", zh: "手机支付应用" },
            ],
            responseTip: "记下银行客服电话和报告编号，后续跟进时需要用到。",
            alternativeExpressions: [
              {
                textEn:
                  "Do you have a credit card on you? We can do a cash advance right here at the counter. Otherwise, someone back home could wire you money through Western Union.",
                textZh: "身上有信用卡吗？我们可以直接在柜台取现。不然国内的人也可以通过西联给你汇钱。",
                actionHint: "on you = 身上带着",
                frequency: "common",
              },
              {
                textEn:
                  "A few options — credit card cash advance, having someone send you money via Western Union, or maybe Apple Pay or Venmo if you've got that set up.",
                textZh: "有几个办法——信用卡取现、让人通过西联汇钱、或者如果有 Apple Pay 或 Venmo 也行。",
                actionHint: "列举替代方案，选择适合的",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Got a credit card? You could get a cash advance here, but there's a fee. Or, someone could Western Union you money. You could also try a mobile payment app if you've got one set up.",
            formalityVariants: {
              casual:
                "Credit card? You can get a cash advance here, but it costs. Or, Western Union money to yourself. Mobile payment app might work if you have it.",
              standard:
                "If you have a credit card, you could get a cash advance at the counter, though there will be a fee. Alternatively, you could use a service like Western Union to have someone wire you money. You might also try using a mobile payment app if you have one set up.",
              formal:
                "Should you possess a credit card, a cash advance facility is available at the counter, albeit subject to a transactional fee. As an alternative, you could utilize a remittance service such as Western Union for a monetary transfer. Furthermore, a mobile payment application may be viable, provided it is configured for use.",
            },
          },
          {
            speaker: "you",
            textEn: "I do have a credit card. Can I get a cash advance here at the counter?",
            textZh: "我有信用卡。可以在这里柜台取现吗？",
            casualVersion: "Yeah, I've got a credit card. Can I get a cash advance right here?",
            formalityVariants: {
              casual: "Yeah, credit card. Can I do a cash advance here?",
              standard: "I do have a credit card. Can I get a cash advance here at the counter?",
              formal: "I possess a credit card. Am I able to obtain a cash advance at this counter?",
            },
          },
          {
            speaker: "them",
            role: "银行工作人员",
            textEn:
              "Yes, we can process that for you. Please bring your credit card and passport to window three. There's usually a fee of around three percent plus a flat fee from your card issuer. How much would you like to withdraw?",
            textZh:
              "可以的，我们可以帮您办理。请带着您的信用卡和护照到三号窗口。通常会收取大约3%的手续费，再加上发卡行的一笔固定费用。您想取多少？",
            keyPhrases: [
              { en: "process that", zh: "办理" },
              { en: "window three", zh: "三号窗口" },
              { en: "three percent", zh: "百分之三" },
              { en: "flat fee", zh: "固定费用" },
              { en: "card issuer", zh: "发卡行" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure, we can do that. Head over to window three with your credit card and passport. Just a heads-up — there'll be about a 3% fee, and your card company might tack on their own charge too.",
                textZh: "可以办。带上信用卡和护照去三号窗口。提醒一下——大概有3%的费用，你的发卡行也可能额外收费。",
                actionHint: "heads-up = 提醒, tack on = 额外加上",
                frequency: "common",
              },
              {
                textEn:
                  "Absolutely. Bring your card and passport to counter three and we'll get you sorted. Fair warning though — cash advances run about 3% plus whatever your issuer charges.",
                textZh: "没问题。带卡和护照到三号柜台我们帮你办。不过提前说一下——信用卡取现大约3%加上发卡行的费用。",
                actionHint: "fair warning = 提前提醒",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep, we can do that. Just take your credit card and passport to window three. There's usually a three percent fee, plus your card company might charge a flat fee. How much do you need?",
            formalityVariants: {
              casual:
                "Sure, we can help with that. Credit card and passport to window three. Expect a three percent fee plus your issuer's flat fee. How much cash do you need?",
              standard:
                "Yes, we can process that for you. Please bring your credit card and passport to window three. There's usually a fee of around three percent plus a flat fee from your card issuer. How much would you like to withdraw?",
              formal:
                "Affirmative, we are able to facilitate that transaction. Kindly proceed to window three with your credit card and passport. Please be advised that there is typically a fee approximating three percent, in addition to a fixed charge imposed by your card issuer. What sum would you like to disburse?",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'll withdraw three hundred dollars. Also, could you write down the report number for my swallowed card? I'll need it to follow up with my bank.",
            textZh: "我取300美元吧。另外，能把吞卡的报告编号写给我吗？我之后需要跟发卡行跟进。",
            casualVersion:
              "I'll take three hundred bucks. And can I get the report number for my card that got stuck? I'll need that to follow up with my bank.",
            formalityVariants: {
              casual: "I'll get three hundred. Can I also get the report number for my card? Need it for my bank.",
              standard:
                "I'll withdraw three hundred dollars. Also, could you write down the report number for my swallowed card? I'll need it to follow up with my bank.",
              formal:
                "I would like to withdraw three hundred dollars. Additionally, would it be possible to obtain the incident report number pertaining to my retained card? This information will be necessary for my subsequent correspondence with my financial institution.",
            },
          },
          {
            speaker: "them",
            role: "银行工作人员",
            textEn:
              "Absolutely. Here's the incident report with the reference number. I've also written down our branch phone number in case you need to call. Is there anything else I can help with?",
            textZh:
              "当然。这是事故报告和参考编号。我还写了我们网点的电话号码，以防您需要打电话。还有其他需要帮助的吗？",
            keyPhrases: [
              { en: "incident report", zh: "事故报告" },
              { en: "reference number", zh: "参考编号" },
              { en: "branch phone number", zh: "网点电话号码" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Here you go — this has your case number and all the details. I wrote our number on there too, so give us a ring if you need anything.",
                textZh: "给你——上面有你的案件编号和所有细节。我也写了我们的电话，有需要打给我们。",
                actionHint: "give us a ring = 打电话给我们（英式口语也常用）",
                frequency: "common",
              },
              {
                textEn:
                  "Of course. Here's your reference number and the report. Keep this handy, and don't hesitate to call us if anything comes up.",
                textZh: "当然。这是你的参考编号和报告。放好，有任何情况随时打电话。",
                actionHint: "keep this handy = 放在手边",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep. Here's the incident report with the reference number. Wrote down our branch number too, just in case you need to call. Anything else?",
            formalityVariants: {
              casual:
                "Sure. Here's the report, got the number. Also wrote our branch phone down in case you need it. Anything else?",
              standard:
                "Absolutely. Here's the incident report with the reference number. I've also written down our branch phone number in case you need to call. Is there anything else I can help with?",
              formal:
                "Certainly. This is the incident report, complete with the reference number. I have also provided our branch's contact telephone number for your convenience, should you require further communication. Is there any additional assistance I may provide?",
            },
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
            culturalNote: "美国办理业务时通常无需“请问”，直接表明目的即可，用“I'd like to”更礼貌。",
            commonMistake: {
              wrong: "I want to exchange some Chinese yuan for US dollars.",
              correct: "I'd like to exchange some Chinese yuan for US dollars.",
              explanation: "“I want”语气生硬，用“I'd like to”更客气、自然。",
            },
            formalityVariants: {
              casual: "Hey, wanna swap some yuan for dollars, please.",
              standard: "Hi, I'd like to exchange some Chinese yuan for US dollars, please.",
              formal:
                "Good morning/afternoon, I would like to exchange some Chinese Yuan for United States Dollars, please.",
            },
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
              {
                textEn: "No problem! How much are you looking to convert?",
                textZh: "没问题！你想换多少？",
                actionHint: "convert 也是换汇的常用词",
                frequency: "common",
              },
              {
                textEn: "Yeah, we do yuan. How much have you got to change?",
                textZh: "嗯，我们换人民币。你要换多少？",
                actionHint: "非常口语化的问法",
                frequency: "occasional",
              },
            ],
            casualVersion: "Yeah, we can do that. How much you looking to exchange?",
            formalityVariants: {
              casual: "Yep, we can. How much do you need?",
              standard: "Sure, we can do that. How much would you like to exchange?",
              formal:
                "Certainly, we are able to assist you with that. Could you please specify the amount you wish to exchange?",
            },
          },
          {
            speaker: "you",
            textEn: "I have five thousand yuan. What's today's exchange rate?",
            textZh: "我有5000元人民币。今天的汇率是多少？",
            casualVersion: "Got five grand yuan. What's the rate today?",
            commonMistake: {
              wrong: "How much is the exchange rate today?",
              correct: "What's today's exchange rate?",
              explanation: "询问汇率用“What's the rate”，而非“How much is the rate”。",
            },
            formalityVariants: {
              casual: "I've got 5,000 yuan. What's the rate?",
              standard: "I have five thousand yuan. What's today's exchange rate?",
              formal: "I possess five thousand Chinese Yuan. Could you please inform me of the current exchange rate?",
            },
          },
          {
            speaker: "them",
            role: "兑换柜台工作人员",
            textEn:
              "Today's rate for Chinese yuan to US dollar is 7.25 to 1. So for five thousand yuan, you'd get about six hundred and ninety dollars. There's also a service fee of eight dollars.",
            textZh: "今天人民币兑美元的汇率是7.25比1。所以5000元人民币大约能换690美元。另外还有8美元的服务费。",
            keyPhrases: [
              { en: "exchange rate", zh: "汇率" },
              { en: "7.25 to 1", zh: "7.25比1" },
              { en: "service fee", zh: "服务费/手续费" },
              { en: "you'd get about", zh: "您大约能得到" },
            ],
            culturalNote:
              "机场和旅游区的兑换点汇率通常较差，手续费也高。市区的银行或大型兑换连锁店（如Travelex）汇率更好。",
            alternativeExpressions: [
              {
                textEn:
                  "Right now we're at 7.25 yuan to the dollar. So five thousand yuan gets you roughly 690 bucks, minus an eight-dollar service charge.",
                textZh: "目前汇率是7.25人民币换1美元。所以5000块大概能换690美元，减掉8块服务费。",
                actionHint: "bucks = 美元（口语），注意实际到手金额",
                frequency: "common",
              },
              {
                textEn:
                  "The rate today is 7.25 to one. That puts you at about 690 dollars for your five thousand yuan. Plus there's an eight-dollar fee on top.",
                textZh: "今天汇率7.25比1。你的5000人民币大约能换690美元。另外还有8美元手续费。",
                actionHint: "puts you at = 让你得到大约",
                frequency: "common",
              },
            ],
            casualVersion:
              "Rate's 7.25 to 1 for yuan to USD. So 5k yuan gets you around $690. Plus an $8 service charge.",
            formalityVariants: {
              casual: "Rate's 7.25 to 1. Five thousand yuan gets you about $690, plus an $8 fee.",
              standard:
                "Today's rate for Chinese yuan to US dollar is 7.25 to 1. So for five thousand yuan, you'd get about six hundred and ninety dollars. There's also a service fee of eight dollars.",
              formal:
                "The current exchange rate for Chinese Yuan to US Dollar is 7.25 to 1. Consequently, an exchange of five thousand Yuan would yield approximately six hundred and ninety US Dollars, subject to an additional service charge of eight dollars.",
            },
          },
          {
            speaker: "you",
            textEn: "Is that the best rate you can offer? I noticed the bank rate is a bit better.",
            textZh: "这是你们能给的最好汇率吗？我看银行的汇率好一些。",
            casualVersion: "That your best rate? Bank's a bit better, I saw.",
            commonMistake: {
              wrong: "Is this the best rate you can give?",
              correct: "Is that the best rate you can offer?",
              explanation: "“give”在此处不够自然，用“offer”更地道、客气。",
            },
            formalityVariants: {
              casual: "Is this your best rate? I saw a better one at the bank.",
              standard: "Is that the best rate you can offer? I noticed the bank rate is a bit better.",
              formal:
                "Is this the most competitive rate you are able to provide? I observed a slightly more favorable rate at the banking institution.",
            },
          },
          {
            speaker: "them",
            role: "兑换柜台工作人员",
            textEn:
              "Our rate includes a small margin — that's how we cover our costs. But we don't charge commission on top of it, unlike some other places. The total you receive is what I quoted.",
            textZh:
              "我们的汇率里包含了一小部分差价——这是我们的运营成本。但我们不像有些地方那样额外收佣金。您拿到的总额就是我报的那个数。",
            keyPhrases: [
              { en: "margin", zh: "差价/利润空间" },
              { en: "commission", zh: "佣金" },
              { en: "cover our costs", zh: "覆盖成本" },
            ],
            culturalNote:
              '有些兑换点标榜"no commission"但在汇率里赚差价，有些收commission但汇率更接近市场价。建议比较"到手金额"而不是只看汇率。',
            alternativeExpressions: [
              {
                textEn:
                  "Look, our rate has a small spread built in — that's how we stay in business. But there's no hidden commission. What I quoted is what you walk away with.",
                textZh: "我们的汇率里有一小点差价——这是我们的经营成本。但没有隐藏佣金。我报的就是你拿到手的。",
                actionHint: "spread = 差价, walk away with = 最终拿到",
                frequency: "common",
              },
              {
                textEn:
                  "Yeah, the bank rate is the interbank rate — nobody gets that rate. We mark it up a tiny bit, but we're transparent about it. No extra commission.",
                textZh: "银行的汇率是银行间汇率——谁都拿不到那个价。我们加了一点点，但完全透明。不额外收佣金。",
                actionHint: "interbank rate = 银行间汇率，了解汇率差异原因",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Our rate's got a small markup to cover costs. But no extra commission, unlike others. What I told you is what you get.",
            formalityVariants: {
              casual: "Our rate has a small margin for costs, but no extra commission. You get what I quoted.",
              standard:
                "Our rate includes a small margin — that's how we cover our costs. But we don't charge commission on top of it, unlike some other places. The total you receive is what I quoted.",
              formal:
                "Our quoted rate incorporates a modest margin to offset operational expenses. However, we do not levy an additional commission, a practice which differentiates us from certain other establishments. The aggregate amount you will receive aligns precisely with my earlier quotation.",
            },
          },
          {
            speaker: "you",
            textEn: "That sounds fair. I'll go ahead and exchange the full five thousand yuan.",
            textZh: "听起来合理。那我就换5000元吧。",
            casualVersion: "Sounds good. I'll just do the whole five grand yuan.",
            commonMistake: {
              wrong: "I will exchange five thousand yuan.",
              correct: "I'll go ahead and exchange the full five thousand yuan.",
              explanation: "“go ahead and”让表达更自然，有决定去做某事的语气。",
            },
            formalityVariants: {
              casual: "Okay, I'll exchange all five thousand yuan.",
              standard: "That sounds fair. I'll go ahead and exchange the full five thousand yuan.",
              formal:
                "That appears to be a reasonable arrangement. I shall proceed with exchanging the entire five thousand Chinese Yuan.",
            },
          },
          {
            speaker: "them",
            role: "兑换柜台工作人员",
            textEn:
              "Great. May I see your passport, please? We need it for any exchange over three hundred dollars. I'll also need you to fill out this brief form.",
            textZh: "好的。能看一下您的护照吗？超过300美元的兑换都需要出示护照。另外还需要您填一张简单的表格。",
            commonMistake: {
              wrong: "Can I see your passport?",
              correct: "May I see your passport?",
              explanation: "在需要礼貌请求时，用 'May I' 比 'Can I' 更正式得体。",
            },
            keyPhrases: [
              { en: "passport", zh: "护照" },
              { en: "any exchange over", zh: "超过...的兑换" },
              { en: "fill out this form", zh: "填写这张表格" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Can I grab your passport real quick? Anything over three hundred bucks, we gotta check ID. And there's a quick form to fill out.",
                textZh: "能看一下护照吗？超过300美元的都得看证件。还有个简单表格要填。",
                actionHint: "grab your passport = 看一下护照（很随意）",
                frequency: "common",
              },
              {
                textEn:
                  "I'll need to see some ID — passport is perfect. It's required for exchanges over $300. Just a short form to sign as well.",
                textZh: "需要看一下证件——护照就可以。超过300美元的兑换需要的。还有一张简短的表格要签。",
                actionHint: "some ID 泛指任何证件",
                frequency: "common",
              },
            ],
            casualVersion:
              "Cool. Can I see your passport? Needed for exchanges over three hundred bucks. And gotta fill out this quick form.",
            culturalNote: "美国对大额现金交易有严格规定，要求出示护照和填写表格是常见流程。",
            formalityVariants: {
              casual: "Alright. Passport, please? Over $300 needs it. And a quick form.",
              standard:
                "Great. May I see your passport, please? We need it for any exchange over three hundred dollars. I'll also need you to fill out this brief form.",
              formal:
                "Excellent. May I kindly request to see your passport? This is a requirement for all exchanges exceeding three hundred US Dollars. Additionally, I will require you to complete this short informational form.",
            },
          },
          {
            speaker: "you",
            textEn: "Here's my passport. What do I need to fill in on the form?",
            textZh: "这是我的护照。表格上要填什么？",
            casualVersion: "Here's my passport. What info for the form?",
            commonMistake: {
              wrong: "What should I fill in on the form?",
              correct: "What do I need to fill in on the form?",
              explanation: "“should”是建议，而“need to”是必须，表达的是具体要求。",
            },
            formalityVariants: {
              casual: "Passport. What to fill out?",
              standard: "Here's my passport. What do I need to fill in on the form?",
              formal: "My passport is here. Could you please specify the required information for the form?",
            },
          },
          {
            speaker: "them",
            role: "兑换柜台工作人员",
            textEn:
              "Just your name, passport number, and signature. Let me count this out — that's six hundred and eighty-two dollars after the fee. Would you like any specific denominations? Twenties and fifties, or larger bills?",
            textZh:
              "只需要填姓名、护照号码和签名。我来数一下——扣除手续费后是682美元。您对面值有要求吗？要20和50的，还是大额钞票？",
            culturalNote: "在美国，小面额钞票（如20美元）很常用，尤其用于小费。柜员主动询问面额偏好是贴心服务。",
            keyPhrases: [
              { en: "passport number", zh: "护照号码" },
              { en: "count this out", zh: "数出来" },
              { en: "denominations", zh: "面值/面额" },
              { en: "larger bills", zh: "大额钞票" },
            ],
            responseTip: "建议要一些小面额的零钱，方便给小费和日常消费。",
            alternativeExpressions: [
              {
                textEn:
                  "Name, passport number, and your John Hancock at the bottom. After the fee, you're looking at 682. How do you want it — small bills, big bills?",
                textZh: "填姓名、护照号码，底下签个名。扣费后是682美元。你要怎么拿——小额还是大额？",
                actionHint: "John Hancock = 签名（美式俚语）",
                frequency: "occasional",
              },
              {
                textEn:
                  "Just fill in your name, passport number, and sign it. That comes to 682 after fees. Any preference on how you want the bills?",
                textZh: "填姓名、护照号和签名就行。扣费后是682。对面值有什么偏好吗？",
                actionHint: "直接明了的说法",
                frequency: "common",
              },
            ],
            casualVersion:
              "Name, passport #, and signature. Okay, after the fee, that's $682. Any specific bills you want? Twenties, fifties, or bigger?",
            commonMistake: {
              wrong: "Do you want any specific denominations?",
              correct: "Would you like any specific denominations?",
              explanation: "“Would you like”更委婉、礼貌，符合服务场合的语境。",
            },
            formalityVariants: {
              casual:
                "Name, passport number, signature. Okay, that's $682 after the fee. What bills do you want? Twenties/fifties or bigger?",
              standard:
                "Just your name, passport number, and signature. Let me count this out — that's six hundred and eighty-two dollars after the fee. Would you like any specific denominations? Twenties and fifties, or larger bills?",
              formal:
                "Kindly provide your full name, passport number, and signature. Calculating the sum, that totals six hundred and eighty-two dollars subsequent to the service charge. Do you have a preference regarding the denominations of the currency, such as twenty and fifty dollar bills, or larger notes?",
            },
          },
          {
            speaker: "you",
            textEn: "Could I get mostly twenties, and maybe a few fifties? I'll need small bills for tips.",
            textZh: "能不能大部分给20的，再来几张50的？我需要小面额的钞票给小费。",
            culturalNote: "在美国，小费文化很普遍。随身携带1美元和5美元的零钱很方便。",
            casualVersion: "Mostly twenties, a few fifties? Need small bills for tips.",
            commonMistake: {
              wrong: "Give me mostly twenties, and a few fifties.",
              correct: "Could I get mostly twenties, and maybe a few fifties?",
              explanation: "用“Could I get”比“Give me”更礼貌客气，尤其是在请求服务时。",
            },
            formalityVariants: {
              casual: "Mostly twenties, some fifties. Need 'em for tips.",
              standard: "Could I get mostly twenties, and maybe a few fifties? I'll need small bills for tips.",
              formal:
                "May I please request primarily twenty-dollar bills, and perhaps a few fifty-dollar bills? I anticipate requiring smaller denominations for gratuities.",
            },
          },
          {
            speaker: "them",
            role: "兑换柜台工作人员",
            textEn:
              "Absolutely. Here's two fifties, twenty-eight twenties, and two ones. Please count it and sign here to confirm. Keep this receipt — you'll need it if you want to exchange any back before you leave.",
            textZh:
              "没问题。给您两张50的、二十八张20的和两张1块的。请您数一下，然后在这里签名确认。保留好这张收据——如果您离开前想换回来会用到。",
            keyPhrases: [
              { en: "count it", zh: "数一下" },
              { en: "sign here", zh: "在这里签名" },
              { en: "keep this receipt", zh: "保留好收据" },
              { en: "exchange any back", zh: "换回来" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "There you go — two fifties, twenty-eight twenties, and two singles. Go ahead and count it, then sign right here. Hang on to this receipt in case you wanna change any back later.",
                textZh: "给你——两张50、二十八张20、两张1块。数一下，然后在这签名。收据留好，万一走之前想换回来用得到。",
                actionHint: "singles = 1美元纸币, hang on to = 保留好",
                frequency: "common",
              },
              {
                textEn:
                  "Here's your cash — make sure it's all there and sign at the bottom. And definitely keep the receipt — you'll need it for any buy-back.",
                textZh: "这是你的现金——确认金额无误然后底下签名。收据一定留着——回购的时候需要。",
                actionHint: "buy-back = 回购/换回",
                frequency: "common",
              },
            ],
            casualVersion:
              "No problem. Two fifties, twenty-eight twenties, two ones. Count it, sign here to confirm. Hold onto this receipt – you'll need it if you wanna swap any back later.",
            culturalNote: "在美国，保留收据非常重要，以便将来退换或查询，体现了消费保障的文化。",
            formalityVariants: {
              casual:
                "Yep. Two fifties, twenty-eight twenties, two ones. Count it, sign. Keep the receipt in case you want to exchange back.",
              standard:
                "Absolutely. Here's two fifties, twenty-eight twenties, and two ones. Please count it and sign here to confirm. Keep this receipt — you'll need it if you want to exchange any back before you leave.",
              formal:
                "Certainly. You will receive two fifty-dollar bills, twenty-eight twenty-dollar bills, and two one-dollar bills. Kindly count the currency and affix your signature here for confirmation. Please retain this receipt, as it will be necessary should you wish to convert any remaining currency prior to your departure.",
            },
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
            casualVersion: "Hey, I gotta exchange a pretty big amount, like twenty thousand yuan. Can I do that here?",
            culturalNote: "美国办理业务无需说“请问”，直接表明目的即可，但语气要礼貌。",
            commonMistake: {
              wrong: "I need to exchange large amount.",
              correct: "I need to exchange a large amount.",
              explanation: "英文中可数名词单数前通常需要冠词",
            },
            formalityVariants: {
              casual: "Hey, gotta exchange like twenty grand yuan. Can I do it here?",
              standard: "Hello, I need to exchange a larger amount—about twenty thousand yuan. Is that possible here?",
              formal:
                "Good morning/afternoon, I would like to inquire about exchanging a substantial amount of currency, approximately twenty thousand Chinese Yuan. Is your establishment equipped to facilitate such a transaction?",
            },
          },
          {
            speaker: "them",
            role: "兑换柜台工作人员",
            textEn:
              "We can handle that, but for amounts over ten thousand dollars equivalent, we'll need additional documentation. It's a regulatory requirement. Do you have your passport and any proof of travel, like a flight itinerary?",
            textZh:
              "我们可以办理，但超过等值一万美元的兑换，我们需要额外的文件。这是监管要求。您有护照和旅行证明吗，比如机票行程单？",
            keyPhrases: [
              { en: "additional documentation", zh: "额外文件" },
              { en: "regulatory requirement", zh: "监管要求" },
              { en: "proof of travel", zh: "旅行证明" },
              { en: "flight itinerary", zh: "机票行程单" },
            ],
            culturalNote: "美国法律规定，等值一万美元以上的现金交易需要填写CTR（货币交易报告），这是反洗钱要求。",
            alternativeExpressions: [
              {
                textEn:
                  "We can definitely do that, but anything over ten grand, we need extra paperwork — it's the law. You got your passport and maybe a flight booking or something to show you're traveling?",
                textZh: "完全可以办，但超过一万的话需要额外手续——这是法律要求。你有护照和机票预订之类的旅行证明吗？",
                actionHint: "ten grand = 一万美元（口语）",
                frequency: "common",
              },
              {
                textEn:
                  "Sure, that's doable. For amounts that size though, there's some extra compliance stuff — we'll need your passport and something that shows your travel plans.",
                textZh: "没问题，可以办。不过金额这么大的话有一些合规手续——需要你的护照和旅行计划的证明。",
                actionHint: "compliance stuff = 合规手续（口语化）",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, we can do it, but for over ten grand USD, we need more docs. It's regulations. Got your passport and any travel proof, like a flight plan?",
            commonMistake: {
              wrong: "We need extra document.",
              correct: "We need additional documentation.",
              explanation: "'document'是可数名词，这里需要复数 'documents' 或不可数名词 'documentation'",
            },
            formalityVariants: {
              casual:
                "Sure, we can. Over ten grand equivalent, though, we'll need extra stuff. Regulations, you know. Got your passport and like, flight info?",
              standard:
                "We can handle that, but for amounts over ten thousand dollars equivalent, we'll need additional documentation. It's a regulatory requirement. Do you have your passport and any proof of travel, like a flight itinerary?",
              formal:
                "Certainly, we can facilitate that. However, for transactions exceeding the equivalent of ten thousand U.S. dollars, we are legally mandated to request additional documentation. Do you have your passport available, along with any corroborating evidence of your travel, such as a flight itinerary?",
            },
          },
          {
            speaker: "you",
            textEn: "I have my passport. I also have my return flight booking on my phone. Would that work?",
            textZh: "我有护照。手机上也有回程机票预订信息。这样可以吗？",
            casualVersion: "Got my passport. And my return flight's on my phone. Is that cool?",
            commonMistake: {
              wrong: "My return flight booking in my phone.",
              correct: "My return flight booking on my phone.",
              explanation: "信息显示在手机屏幕上，用 'on' 而非 'in'",
            },
            formalityVariants: {
              casual: "Yeah, got my passport. My return flight's on my phone, too. Is that good enough?",
              standard: "I have my passport. I also have my return flight booking on my phone. Would that work?",
              formal:
                "Yes, I have my passport readily available. Additionally, I have my return flight reservation displayed on my mobile device. Would that suffice as proof?",
            },
          },
          {
            speaker: "them",
            role: "兑换柜台工作人员",
            textEn:
              "The passport is perfect. A screenshot of your flight booking should be fine too. I'll also need to fill out a Currency Transaction Report — it's standard procedure, nothing to worry about. It just asks for your personal details and the purpose of the exchange.",
            textZh:
              "护照就行。机票预订的截图也可以。我还需要填一份货币交易报告——这是标准流程，不用担心。只需要您的个人信息和换汇目的。",
            keyPhrases: [
              { en: "Currency Transaction Report", zh: "货币交易报告" },
              { en: "standard procedure", zh: "标准流程" },
              { en: "personal details", zh: "个人信息" },
              { en: "purpose of the exchange", zh: "换汇目的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Passport works great. And yeah, a screenshot of your flight is totally fine. I'll just need to do a little paperwork on our end — it's routine, nothing to stress about.",
                textZh: "护照就行。机票截图完全可以。我这边需要填点手续——都是常规的，不用紧张。",
                actionHint: "nothing to stress about = 不用紧张",
                frequency: "common",
              },
              {
                textEn:
                  "That'll do. There's also a CTR form I have to fill out — government thing, totally normal for this amount. Just basic info and why you're exchanging.",
                textZh: "可以。我还得填一个CTR表——政府要求，这个金额很正常。就是基本信息和换汇原因。",
                actionHint: "CTR = Currency Transaction Report 的缩写",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Passport's totally fine. A screenshot of your flight booking works too. I gotta fill out a Currency Transaction Report, too—totally standard, don't sweat it. Just personal deets and why you're exchanging.",
            culturalNote: "美国人很重视金融合规，会直接告知流程和原因，并常用“nothing to worry about”来安抚对方。",
            commonMistake: {
              wrong: "It's standard process.",
              correct: "It's standard procedure.",
              explanation: "'procedure' 指的是一套既定的操作步骤，'process' 泛指过程",
            },
            formalityVariants: {
              casual:
                "Passport's good. Flight screenshot's cool too. Just gotta do a Currency Transaction Report – totally normal, don't worry. Needs your info and why you're swapping money.",
              standard:
                "The passport is perfect. A screenshot of your flight booking should be fine too. I'll also need to fill out a Currency Transaction Report — it's standard procedure, nothing to worry about. It just asks for your personal details and the purpose of the exchange.",
              formal:
                "Your passport is perfectly acceptable. A digital image or screenshot of your flight reservation will also be sufficient. Additionally, I am required to complete a Currency Transaction Report. This is a routine regulatory compliance measure, and there is no cause for concern. It simply requires your personal identification details and the stated purpose of this currency exchange.",
            },
          },
          {
            speaker: "you",
            textEn:
              "That's fine. The purpose is personal travel expenses. Is the rate the same as for smaller amounts?",
            textZh: "没问题。目的是个人旅行消费。汇率和小额兑换一样吗？",
            casualVersion: "Okay, cool. It's for personal travel. Is the rate the same as for less money?",
            commonMistake: {
              wrong: "Purpose is personal travel expense.",
              correct: "Purpose is personal travel expenses.",
              explanation: "泛指旅行中的各种开销，通常用复数 'expenses'",
            },
            formalityVariants: {
              casual: "Cool. Just for travel. Same rate for smaller amounts?",
              standard:
                "That's fine. The purpose is personal travel expenses. Is the rate the same as for smaller amounts?",
              formal:
                "Understood. The stated purpose is for personal travel expenditures. May I inquire if the exchange rate applied for this amount is consistent with that offered for smaller transactions?",
            },
          },
          {
            speaker: "them",
            role: "兑换柜台工作人员",
            textEn:
              "Actually, for larger amounts we can offer you a slightly better rate. Instead of 7.25, I can do 7.20 for you. That would give you about two thousand seven hundred seventy-eight dollars before fees.",
            textZh: "实际上，大额兑换我们可以给您稍好的汇率。7.25可以给您做到7.20。这样扣费前大约能换到2778美元。",
            keyPhrases: [
              { en: "slightly better rate", zh: "稍好的汇率" },
              { en: "for larger amounts", zh: "大额兑换" },
              { en: "before fees", zh: "扣费前" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Good news — since you're doing a bigger amount, I can bump the rate up a bit. 7.20 instead of 7.25. That gets you around $2,778 before we take out fees.",
                textZh: "好消息——因为金额比较大，我可以把汇率调好一点。7.20而不是7.25。扣费前大约拿到2778美元。",
                actionHint: "bump up = 提高一点",
                frequency: "common",
              },
              {
                textEn:
                  "Since it's a larger exchange, we can cut you a better deal on the rate — 7.20 instead of 7.25. So you're looking at roughly $2,778 before fees.",
                textZh: "因为是大额兑换，我们可以给你更优惠的汇率——7.20而不是7.25。这样扣费前大约2778美元。",
                actionHint: "cut you a better deal = 给你更好的价格",
                frequency: "common",
              },
            ],
            casualVersion:
              "Actually, for bigger amounts, we can give you a bit better rate. Instead of 7.25, I can do 7.20. So you'd get 'bout twenty-seven seventy-eight before fees.",
            commonMistake: {
              wrong: "We can offer you a little better rate.",
              correct: "We can offer you a slightly better rate.",
              explanation: "'a little better' 或 'slightly better' 更自然地表达“好一点点”",
            },
            formalityVariants: {
              casual:
                "Actually, for bigger amounts, we can totally hook you up with a better rate. Instead of 7.25, I can do 7.20 for ya. You'd get roughly $2778 before fees.",
              standard:
                "Actually, for larger amounts we can offer you a slightly better rate. Instead of 7.25, I can do 7.20 for you. That would give you about two thousand seven hundred seventy-eight dollars before fees.",
              formal:
                "As a matter of fact, for transactions involving larger sums, we are able to extend a marginally more favorable exchange rate. Rather than 7.25, I can provide a rate of 7.20 for your transaction. This would result in approximately two thousand seven hundred seventy-eight U.S. dollars prior to the application of any service charges.",
            },
          },
          {
            speaker: "you",
            textEn: "That's better, thanks. What are the fees for this amount?",
            textZh: "好一些了，谢谢。这个金额的手续费是多少？",
            casualVersion: "Nice, thanks. What are the fees for this much?",
            commonMistake: {
              wrong: "How much is the fee?",
              correct: "What are the fees?",
              explanation: "询问总的费用通常用复数 'fees'",
            },
            formalityVariants: {
              casual: "Better, cool. Fees for this amount?",
              standard: "That's better, thanks. What are the fees for this amount?",
              formal:
                "That is indeed an improvement, thank you. Could you please inform me of the applicable fees for this specific transaction amount?",
            },
          },
          {
            speaker: "them",
            role: "兑换柜台工作人员",
            textEn:
              "For this amount, the service fee is fifteen dollars flat. So your total payout would be two thousand seven hundred sixty-three dollars. I should also mention — would you prefer to take all of it in cash, or would you like a cashier's check for part of it? Carrying that much cash can be risky.",
            textZh:
              "这个金额的服务费是固定15美元。所以您最终拿到的是2763美元。我还想提一下——您是要全部拿现金，还是一部分开成本票？带这么多现金有风险。",
            keyPhrases: [
              { en: "fifteen dollars flat", zh: "固定15美元" },
              { en: "total payout", zh: "最终拿到的金额" },
              { en: "cashier's check", zh: "本票/银行支票" },
              { en: "carrying that much cash", zh: "带这么多现金" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The fee on this is a flat fifteen bucks, so you'd walk out with $2,763. Quick thought though — you sure you want all that in cash? We can do a cashier's check for some of it if you'd rather not carry that much around.",
                textZh:
                  "手续费固定15块，所以你拿到手2763美元。不过说一下——你确定全拿现金吗？可以开本票，省得带这么多现金。",
                actionHint: "walk out with = 拿着走",
                frequency: "common",
              },
              {
                textEn:
                  "Fifteen-dollar flat fee, bringing your total to $2,763. Just a suggestion — for that kind of money, you might want part of it as a cashier's check. Safer that way.",
                textZh: "固定15美元手续费，总共到手2763美元。建议一下——这么大金额，一部分开本票可能更安全。",
                actionHint: "that kind of money = 这么多钱",
                frequency: "common",
              },
            ],
            casualVersion:
              "For this much, service fee's just fifteen bucks flat. So you'd get twenty-seven sixty-three total. Also, just sayin'—wanna take all cash, or part cashier's check? A lotta cash can be kinda risky.",
            culturalNote: "美国人在提供服务时常会直接给出安全建议，这被视为一种负责任的服务。",
            commonMistake: {
              wrong: "The service fee is 15 dollars.",
              correct: "The service fee is fifteen dollars flat.",
              explanation: "'flat' 强调固定费用，不说 'flat' 也可以，但加上更准确",
            },
            formalityVariants: {
              casual:
                "Service fee's just fifteen bucks. So you'll get $2763. Oh, also, wanna all cash, or part check? Loads of cash can be kinda sketch.",
              standard:
                "For this amount, the service fee is fifteen dollars flat. So your total payout would be two thousand seven hundred sixty-three dollars. I should also mention — would you prefer to take all of it in cash, or would you like a cashier's check for part of it? Carrying that much cash can be risky.",
              formal:
                "For this particular transaction volume, the service charge is a fixed amount of fifteen U.S. dollars. Therefore, your net disbursement would be two thousand seven hundred sixty-three dollars. I should also advise, would you prefer to receive the entire sum in physical currency, or would you be interested in a cashier's check for a portion of the amount? Transporting such a significant quantity of cash may present certain security considerations.",
            },
          },
          {
            speaker: "you",
            textEn: "Good point. Could I take five hundred in cash and the rest as a cashier's check?",
            textZh: "说得对。我能拿500现金，剩下的开成本票吗？",
            casualVersion: "Yeah, good call. Can I just get five hundred cash and the rest as a check?",
            commonMistake: {
              wrong: "Can I take 500 cash?",
              correct: "Can I take five hundred in cash?",
              explanation: "表示某种形式的钱时，常用 'in cash'",
            },
            formalityVariants: {
              casual: "Right. Can I get $500 cash, rest check?",
              standard: "Good point. Could I take five hundred in cash and the rest as a cashier's check?",
              formal:
                "That is a valid observation. Would it be possible for me to receive five hundred U.S. dollars in cash, with the remainder issued as a cashier's check?",
            },
          },
          {
            speaker: "them",
            role: "兑换柜台工作人员",
            textEn:
              "Absolutely. The cashier's check will be made out in your name. You can deposit it at most banks or cash it with a valid ID. There's no additional charge for the check. Let me process everything — this will take about ten minutes.",
            textZh:
              "完全可以。本票会开在您的名下。您可以在大多数银行存入或凭有效证件兑现。开本票不额外收费。我来处理一下——大约需要十分钟。",
            culturalNote: "解释本票的使用方式（存入银行或凭证件兑现）对不熟悉此种支付工具的中国游客很有帮助。",
            keyPhrases: [
              { en: "made out in your name", zh: "开在您的名下" },
              { en: "deposit it", zh: "存入" },
              { en: "cash it", zh: "兑现" },
              { en: "valid ID", zh: "有效证件" },
              { en: "no additional charge", zh: "不额外收费" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure thing. The check goes in your name, and you can cash or deposit it at pretty much any bank. No extra charge for the check. Give me about ten minutes to get this all done.",
                textZh: "没问题。本票开你的名字，基本上任何银行都能兑现或存入。不额外收费。给我十分钟处理一下。",
                actionHint: "pretty much any = 几乎任何",
                frequency: "common",
              },
              {
                textEn:
                  "No problem at all. I'll write the check to you — you can bank it anywhere with ID. And there's no fee for the check. Sit tight, this'll take about ten.",
                textZh: "完全没问题。本票开你名字——带证件去哪家银行都能用。本票不收费。稍等，大约十分钟。",
                actionHint: "sit tight = 稍等, bank it = 存入银行",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Totally. Check'll be in your name. You can deposit it at most banks or cash it with ID. No extra charge for the check. I'll get this all processed—should take 'bout ten minutes.",
            commonMistake: {
              wrong: "It will take around 10 minutes.",
              correct: "This will take about ten minutes.",
              explanation: "口语中表示“大约”时 'about' 更常用",
            },
            formalityVariants: {
              casual:
                "Yep. Check's in your name. You can deposit or cash it with ID. No extra for the check. I'll get it all done, probably ten minutes.",
              standard:
                "Absolutely. The cashier's check will be made out in your name. You can deposit it at most banks or cash it with a valid ID. There's no additional charge for the check. Let me process everything — this will take about ten minutes.",
              formal:
                "Certainly. The cashier's check will be issued in your full name. You may deposit it at the majority of banking institutions or present it for encashment with a valid form of identification. There will be no supplementary fee for the issuance of the check. I will proceed with processing the transaction now; this should require approximately ten minutes.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Great, I'll wait. One more question — if I have leftover dollars when I leave, can I exchange them back to yuan here?",
            textZh: "好的，我等着。再问一个问题——如果走的时候还有多余的美元，可以在这里换回人民币吗？",
            casualVersion:
              "Cool, I'll wait. Quick question—if I got dollars left when I head out, can I swap 'em back to yuan here?",
            commonMistake: {
              wrong: "If I have left dollars.",
              correct: "If I have leftover dollars.",
              explanation: "“多余的钱”用 'leftover dollars' 或 'dollars left over' 更自然",
            },
            formalityVariants: {
              casual: "Okay, I'll chill. Quick thing—if I have dollars left when I go, can I change 'em back here?",
              standard:
                "Great, I'll wait. One more question — if I have leftover dollars when I leave, can I exchange them back to yuan here?",
              formal:
                "Excellent, I shall wait patiently. I have one further inquiry: Should I possess any remaining U.S. dollars upon my departure, would it be possible to reconvert them to Chinese Yuan at this location?",
            },
          },
          {
            speaker: "them",
            role: "兑换柜台工作人员",
            textEn:
              "Yes, you can. Just bring the original receipt and your passport. The buy-back rate might be slightly different from today's, but we won't charge another service fee if you come back within thirty days.",
            textZh:
              "可以的。带上原始收据和护照就行。回购汇率可能和今天稍有不同，但如果三十天内来换，我们不再收服务费。",
            culturalNote: "了解回购政策（包括汇率差异和免手续费条件）对外国游客很重要。",
            keyPhrases: [
              { en: "buy-back rate", zh: "回购汇率" },
              { en: "original receipt", zh: "原始收据" },
              { en: "within thirty days", zh: "三十天内" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep, just hold on to that receipt and bring it back with your passport. The rate might shift a little, but we won't ding you with another fee if it's within 30 days.",
                textZh: "可以，收据留好带回来就行，还有护照。汇率可能会变一点，但30天内不再收手续费。",
                actionHint: "ding you with a fee = 收你费用（口语）",
                frequency: "common",
              },
              {
                textEn:
                  "For sure. Come back with the receipt and your passport. Rate might be a tiny bit different, but no extra service charge as long as it's within a month.",
                textZh: "当然。带收据和护照回来就行。汇率可能有一点点差别，但一个月内不额外收服务费。",
                actionHint: "for sure = 当然可以",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, totally. Just bring your original receipt and passport. The buy-back rate might be a little off from today's, but we won't charge another fee if you're back in thirty days.",
            commonMistake: {
              wrong: "The buy-back rate might be different from today.",
              correct: "The buy-back rate might be slightly different from today's.",
              explanation: "'today's' 表示“今天的汇率”，而不是“今天”这个时间点",
            },
            formalityVariants: {
              casual:
                "Yep, you can. Just need the receipt and your passport. Buy-back rate might be a bit different, but no extra fee if you're here within a month.",
              standard:
                "Yes, you can. Just bring the original receipt and your passport. The buy-back rate might be slightly different from today's, but we won't charge another service fee if you come back within thirty days.",
              formal:
                "Yes, that is certainly an option. You would simply need to present your original transaction receipt and your passport. Please be advised that the prevailing buy-back exchange rate may vary somewhat from today's rate; however, we will waive any additional service fees if you return within a thirty-day period.",
            },
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
            textEn:
              "Hi, I'm visiting from China and I need a prepaid SIM card for my phone. What do you have available?",
            textZh: "你好，我从中国来旅游，需要买一张手机预付费SIM卡。你们有什么选择？",
            culturalNote: "直接表明目的即可，无需过多客套。",
            commonMistake: {
              wrong: "Hello, I am tourist from China, I want to buy a SIM card.",
              correct: "Hi, I'm a tourist from China and I'd like to buy a prepaid SIM card.",
              explanation: "I want to 听起来太直接，用 I'd like to 更礼貌和自然。",
            },
            formalityVariants: {
              casual: "Hey, I'm visiting from China, need a prepaid SIM. What's available?",
              standard: "Hi, I'm a tourist from China and I'd like to buy a prepaid SIM card. What options do you have?",
              formal: "Good morning/afternoon, I am a tourist visiting from China and I am seeking to purchase a prepaid SIM card. Could you please outline the available options?",
            },
            casualVersion: "Hey, I need a prepaid SIM. I'm here on vacation from China.",
          },
          {
            speaker: "them",
            role: "手机店员",
            textEn:
              "Welcome! We have a few prepaid options. How long will you be staying, and do you need mainly data, or calls and texts too?",
            textZh: "欢迎！我们有几种预付费选项。您要待多久？主要需要流量，还是也需要打电话和发短信？",
            casualVersion: "Welcome! Got some prepaid options. How long you here for? Mainly data, or calls/texts too?",
            formalityVariants: {
              casual: "Hey, welcome! Got a few prepaid plans. How long's your stay? Just data, or calls and texts too?",
              standard: "Welcome! We have a few prepaid options. How long will you be staying, and do you need mainly data, or calls and texts too?",
              formal: "Welcome! We offer several prepaid options. May I inquire as to the duration of your visit, and whether your primary requirement is data, or if you also require voice calls and text messaging services?",
            },
            variations: [
              {
                textEn: "Sure thing! How many days are you here for? And is it mostly for internet you need it?",
                textZh: "没问题！您在这里待几天？主要是用来上网吗？",
              },
            ],
            keyPhrases: [
              { en: "prepaid options", zh: "预付费选项" },
              { en: "data", zh: "流量/数据" },
              { en: "calls and texts", zh: "打电话和发短信" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Hey, welcome! So how long are you in town? And do you need data mostly, or are you gonna need to make calls too?",
                textZh: "嘿，欢迎！你在这待多久？主要用流量还是也需要打电话？",
                actionHint: "in town = 在这里/在城里",
                frequency: "common",
              },
              {
                textEn:
                  "Cool, we've got you covered. What's your trip looking like — a week, two weeks? And are you mainly after data?",
                textZh: "没问题，包在我们身上。你的行程大概多久——一周，两周？主要是要流量吗？",
                actionHint: "we've got you covered = 我们能搞定",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I'll be here for about two weeks. Mostly data for maps and messaging apps, but I might need to make a few local calls too.",
            textZh: "大约待两周。主要用流量看地图和聊天软件，但可能也需要打几个本地电话。",
            commonMistake: {
              wrong: "I stay for two weeks.",
              correct: "I'll be staying for about two weeks.",
              explanation: "中式英语常省略将来时态的助动词，导致表达不自然。",
            },
            casualVersion: "Staying 'bout two weeks. Mainly need data for maps and chat apps, but might make a few local calls.",
            formalityVariants: {
              casual: "Staying 'bout two weeks. Data for maps and chat apps mainly, but might make a few local calls.",
              standard: "I'll be staying for about two weeks. I mainly need data for maps and chat apps, but I might need to make a few local calls.",
              formal: "My stay will be approximately two weeks. My primary need is for data, specifically for navigation and communication applications, however, I may also require the ability to make a limited number of local calls.",
            },
          },
          {
            speaker: "them",
            role: "手机店员",
            textEn:
              "For two weeks, I'd recommend our tourist plan — it's thirty-five dollars and includes ten gigs of high-speed data, unlimited texts, and a hundred minutes of local calls. Or we have a data-only plan at twenty-five dollars for eight gigs, no calls or texts.",
            textZh:
              "两周的话，我推荐我们的旅游套餐——35美元，包含10GB高速流量、无限短信和100分钟本地通话。或者我们有一个纯流量套餐，25美元8GB流量，没有通话和短信。",
            casualVersion: "For two weeks, I'd say go with the tourist plan – $35, gets you 10GB high-speed data, unlimited texts, and 100 minutes local calls. Or there's a data-only: $25 for 8GB, no calls/texts.",
            formalityVariants: {
              casual: "Two weeks? I'd go with the tourist plan: $35, 10GB high-speed, unlimited texts, 100 minutes local calls. Or, data-only: $25 for 8GB, no calls/texts.",
              standard: "For two weeks, I'd recommend our tourist plan – $35 for 10GB high-speed data, unlimited texts, and 100 minutes of local calls. Alternatively, we offer a data-only plan for $25 with 8GB of data, excluding calls and texts.",
              formal: "Considering a two-week duration, I would suggest our tourist package, which costs $35 and includes 10GB of high-speed data, unlimited text messaging, and 100 minutes of domestic calls. As an alternative, we provide a data-only plan for $25 offering 8GB of data, without call or text services.",
            },
            keyPhrases: [
              { en: "tourist plan", zh: "旅游套餐" },
              { en: "ten gigs", zh: "10GB" },
              { en: "high-speed data", zh: "高速流量" },
              { en: "unlimited texts", zh: "无限短信" },
              { en: "data-only plan", zh: "纯流量套餐" },
            ],
            culturalNote: '美国的"gig"是"gigabyte（GB）"的口语说法。10 gigs = 10GB。',
            alternativeExpressions: [
              {
                textEn:
                  "Two weeks? I'd go with the tourist package — 35 bucks, 10 gigs, unlimited texting, and 100 minutes of talk. Or if you just need internet, there's a data-only deal for 25.",
                textZh: "两周？我推荐旅游包——35块，10个G，无限短信，100分钟通话。或者如果只要上网，有个纯流量的25块。",
                actionHint: "bucks = 美元, deal = 套餐/优惠",
                frequency: "common",
              },
              {
                textEn:
                  "For a two-week trip, the sweet spot is our visitor plan at $35 — you get 10 gigs of fast data and some calling. There's also a cheaper option at $25 if you're fine with data only.",
                textZh:
                  "两周旅行的话，最合适的是35美元的访客套餐——10G高速流量加一些通话。如果只要流量的话还有个25美元的便宜选项。",
                actionHint: "sweet spot = 最佳选择",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "The tourist plan sounds good. What happens if I use up all the data before two weeks?",
            textZh: "旅游套餐听起来不错。如果两周内流量用完了怎么办？",
            casualVersion: "Tourist plan sounds good. What if I use up all the data before two weeks?",
            formalityVariants: {
              casual: "Tourist plan's good. What if I use up data before two weeks?",
              standard: "The tourist plan sounds good. What happens if I use up all the data before two weeks?",
              formal: "The tourist plan appears suitable. Could you please clarify the procedure should I exhaust the allocated data prior to the two-week period?",
            },
          },
          {
            speaker: "them",
            role: "手机店员",
            textEn:
              "After you use up your high-speed data, it doesn't cut off — it just slows down to 2G speeds. You can always top up with an extra gig for five dollars through our app or at any of our stores.",
            textZh:
              "高速流量用完后不会断网——只是降速到2G。您可以随时通过我们的app或在我们任何一家门店充值，5美元加1GB。",
            casualVersion: "Data runs out? Doesn't cut off, just slows to 2G. Can top up anytime on the app or at a store, $5 for 1GB.",
            formalityVariants: {
              casual: "Once you hit your high-speed limit, it just slows to 2G, doesn't stop. Top up anytime through the app or in-store, $5 for a gig.",
              standard: "After you use up your high-speed data, it doesn't cut off – it just slows down to 2G. You can top up anytime via our app or at any of our stores, $5 for 1GB.",
              formal: "Upon the consumption of your high-speed data allowance, service will not be terminated; rather, speeds will be reduced to 2G. You retain the option to top up your data at any time, either through our mobile application or at any of our retail locations, with an additional 1GB costing $5.",
            },
            keyPhrases: [
              { en: "doesn't cut off", zh: "不会断网" },
              { en: "slows down", zh: "降速" },
              { en: "top up", zh: "充值" },
              { en: "extra gig", zh: "额外1GB" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It won't shut off or anything — you'll still have service, just slower. If you burn through it, you can always add more data for five bucks a gig on the app.",
                textZh: "不会断网什么的——还是有服务，就是慢一点。如果用完了可以在app上加流量，5块钱1个G。",
                actionHint: "burn through = 很快用完",
                frequency: "common",
              },
              {
                textEn:
                  "You won't get cut off, don't worry. It just throttles down to 2G. And if you need more speed, five bucks gets you another gig.",
                textZh: "不会断网，别担心。就是降到2G速度。如果需要更快的，5块钱加1个G。",
                actionHint: "throttle down = 限速/降速",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, I'll take the tourist plan. Is my phone compatible? It's an iPhone.",
            textZh: "好的，我要旅游套餐。我的手机兼容吗？是iPhone。",
            commonMistake: {
              wrong: "Okay, I want tourist plan.",
              correct: "Okay, I'll take the tourist plan.",
              explanation: "表达选择时，常省略'the'，且'take'比'want'更自然。",
            },
            casualVersion: "Okay, I'll take the tourist plan. My phone compatible? It's an iPhone.",
            formalityVariants: {
              casual: "Alright, I'll go with the tourist plan. My phone compatible? It's an iPhone.",
              standard: "Okay, I'll take the tourist plan. Is my phone compatible? It's an iPhone.",
              formal: "Understood. I will proceed with the tourist plan. May I inquire about my phone's compatibility? It is an iPhone.",
            },
          },
          {
            speaker: "them",
            role: "手机店员",
            textEn:
              "iPhones generally work fine. I just need to check that yours is unlocked. Do you know if your phone is unlocked, or is it tied to a carrier in China?",
            textZh: "iPhone一般没问题。我只需要确认您的手机是解锁的。您知道手机有没有解锁，还是绑定了中国的运营商？",
            casualVersion: "iPhones usually work. Just gotta check if yours is unlocked. You know if it's unlocked, or is it tied to a Chinese carrier?",
            formalityVariants: {
              casual: "Most iPhones are good. Just need to confirm yours is unlocked. Is it unlocked, or tied to a carrier back in China?",
              standard: "iPhones generally work fine. I just need to check that yours is unlocked. Do you know if your phone is unlocked, or is it tied to a carrier in China?",
              formal: "Generally, iPhones are compatible. However, I must verify that your device is unlocked. Could you please confirm if your phone is unlocked, or if it is currently tied to a specific carrier in China?",
            },
            keyPhrases: [
              { en: "unlocked", zh: "解锁的" },
              { en: "tied to a carrier", zh: "绑定运营商" },
            ],
            culturalNote:
              '出国前一定要确认手机是"无锁版"（unlocked），否则无法使用当地SIM卡。中国行货iPhone通常是无锁的。',
            alternativeExpressions: [
              {
                textEn:
                  "iPhones are usually good to go. The main thing is — is it unlocked? Like, is it locked to a Chinese carrier or can it take any SIM?",
                textZh: "iPhone通常没问题。关键是——是解锁的吗？锁了中国运营商还是可以用任何SIM卡？",
                actionHint: "good to go = 没问题/可以用",
                frequency: "common",
              },
              {
                textEn:
                  "Should be fine with an iPhone. Just gotta make sure it's not carrier-locked. Do you know if it's an unlocked model?",
                textZh: "iPhone应该没问题。就得确认没有锁运营商。你知道是不是无锁版吗？",
                actionHint: "carrier-locked = 锁了运营商的",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, it's unlocked. I bought it outright in China.",
            textZh: "是解锁的。我在中国买的全价机。",
            commonMistake: {
              wrong: "Yes, it's unlocked. I bought full price machine in China.",
              correct: "Yes, it's unlocked. I bought it full price in China.",
              explanation: "“全价机”的直译不地道，应直接说“全款购买”。",
            },
            casualVersion: "Yeah, it's unlocked. Bought it full price in China.",
            formalityVariants: {
              casual: "Yeah, it's unlocked. Got it full price in China.",
              standard: "Yes, it's unlocked. I bought it full price in China.",
              formal: "Yes, it is indeed unlocked. I acquired it at full retail price in China.",
            },
          },
          {
            speaker: "them",
            role: "手机店员",
            textEn:
              "Perfect. Let me pop in the new SIM card for you. You'll get a local US number. It should activate within a few minutes. I'll help you make sure the data connection is working before you leave.",
            textZh:
              "太好了。我帮您装上新的SIM卡。您会得到一个美国本地号码。几分钟内就能激活。在您离开前我会帮您确认流量连接正常。",
            casualVersion: "Perfect. I'll pop in the new SIM for ya. You'll get a local US number. Should activate in a few minutes. I'll make sure your data's working before you head out.",
            formalityVariants: {
              casual: "Great. I'll put the new SIM in for you. You'll get a US number. Should activate in minutes. I'll confirm your data's working before you go.",
              standard: "Perfect. Let me pop in the new SIM card for you. You'll get a local US number. It should activate within a few minutes. I'll make sure your data connection is working before you leave.",
              formal: "Excellent. Allow me to insert the new SIM card for you. You will be assigned a local US telephone number, and activation should occur within several minutes. I will ensure your data connection is fully operational before your departure.",
            },
            keyPhrases: [
              { en: "pop in", zh: "装入" },
              { en: "local US number", zh: "美国本地号码" },
              { en: "activate", zh: "激活" },
              { en: "data connection", zh: "流量/数据连接" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Awesome, let me swap the SIM out for you real quick. You'll get a US number and it should be up and running in a couple minutes. I'll make sure everything's working before you head out.",
                textZh: "好的，我帮你快速换SIM卡。你会得到一个美国号码，几分钟就能用。走之前我确保一切正常。",
                actionHint: "up and running = 启动正常运行",
                frequency: "common",
              },
              {
                textEn:
                  "Let me throw this SIM in for you. Give it a few minutes to activate and you'll be good to go with a local number.",
                textZh: "我帮你装SIM卡。等几分钟激活就有本地号码可以用了。",
                actionHint: "throw in = 装入（非常口语）, good to go = 可以用了",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, thank you. Should I save any number in case I need customer support?",
            textZh: "太好了，谢谢。我需要保存什么号码以防需要客服支持吗？",
            casualVersion: "Cool, thanks. Should I save any number for customer support?",
            formalityVariants: {
              casual: "Awesome, thanks. Any number I should save for support?",
              standard: "Great, thank you. Should I save any number in case I need customer support?",
              formal: "Excellent, thank you. Would it be advisable to retain any specific contact number for customer support purposes?",
            },
          },
          {
            speaker: "them",
            role: "手机店员",
            textEn:
              "Yes, there's a customer service number on the back of the SIM card package — you can call 611 from your phone for free. Also, download our app — you can check your remaining data, top up, and get support right from there. You're all set!",
            textZh:
              "有的，SIM卡包装背面有客服号码——您可以从手机上免费拨打611。另外，下载我们的app——可以查看剩余流量、充值和获取支持。都搞定了！",
            casualVersion: "Yeah, customer service number's on the SIM pack – dial 611 free from your phone. Also, get our app – check data, top up, get support. You're good to go!",
            formalityVariants: {
              casual: "Yep, support number's on the SIM packaging – just dial 611 free. Plus, grab our app for data checks, top-ups, and support. Done!",
              standard: "Yes, there's a customer service number on the back of the SIM card packaging – you can dial 611 for free from your phone. Additionally, please download our app, which allows you to monitor data usage, top up, and access support. You're all set!",
              formal: "Yes, a customer service number is provided on the reverse of the SIM card packaging; you may dial 611 free of charge from your device. Furthermore, I recommend downloading our application, which facilitates data monitoring, top-ups, and support access. Everything is now configured.",
            },
            keyPhrases: [
              { en: "call 611", zh: "拨打611" },
              { en: "remaining data", zh: "剩余流量" },
              { en: "you're all set", zh: "都搞定了" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Just dial 611 — it's free from your phone. And grab our app, it's super handy for checking your data and adding more if you need it. You're good to go!",
                textZh: "打611就行——从手机上打免费。下载我们的app，查流量和充值特别方便。你可以出发了！",
                actionHint: "grab our app = 下载我们的app, handy = 方便好用",
                frequency: "common",
              },
              {
                textEn:
                  "If you ever need help, just call 611 — it won't cost you anything. Everything else you can do through the app. Alright, you're all good!",
                textZh: "需要帮忙就打611——不花钱。其他的都可以在app上搞定。好了，都弄好了！",
                actionHint: "you're all good = 都搞定了",
                frequency: "common",
              },
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
            textEn:
              'Hi, I bought a SIM card here yesterday, but my phone still says "No Service." I\'ve restarted it several times.',
            textZh: '你好，我昨天在这里买了一张SIM卡，但手机一直显示"无服务"。我已经重启好几次了。',
            casualVersion: "Hey, I got a SIM here yesterday, but my phone still says 'No Service'.",
            commonMistake: {
              wrong: "My phone still shows 'No Service'.",
              correct: "My phone still says 'No Service'.",
              explanation: "“手机显示”直译为 “shows”，但英文中 “says” 更常用。",
            },
            formalityVariants: {
              casual: "Hey, got a SIM here yesterday, but phone's still saying 'No Service'.",
              standard: "Hi, I bought a SIM card here yesterday, but my phone still says 'No Service'.",
              formal:
                "Good morning/afternoon. I purchased a SIM card from this establishment yesterday, however, my mobile device continues to display 'No Service'.",
            },
          },
          {
            speaker: "them",
            role: "手机店员",
            textEn:
              "I'm sorry about that. Let me take a look. Can I see your phone for a moment? I'll check if the SIM card is seated properly.",
            textZh: "很抱歉出现这种情况。我来看看。能把手机给我看一下吗？我检查一下SIM卡有没有装好。",
            keyPhrases: [
              { en: "let me take a look", zh: "我来看看" },
              { en: "seated properly", zh: "装好/安装到位" },
            ],
            alternativeExpressions: [
              {
                textEn: "Oh, that's weird. Here, let me see your phone — might be a seating issue with the SIM.",
                textZh: "奇怪。给我看看手机——可能是SIM卡没装好。",
                actionHint: "seating issue = 安装不到位的问题",
                frequency: "common",
              },
              {
                textEn:
                  "Hmm, that shouldn't be happening. Mind if I take a look? Could just be the SIM isn't in there right.",
                textZh: "嗯，不应该这样。我看看行吗？可能就是SIM卡没放好。",
                actionHint: "mind if I = 我可以...吗（礼貌问法）",
                frequency: "common",
              },
            ],
            casualVersion:
              "Ah, sorry 'bout that. Lemme see. Can I just see your phone real quick? I'll check if the SIM's in right.",
            formalityVariants: {
              casual: "Oh, sorry. Lemme see your phone. I'll check the SIM.",
              standard:
                "I'm sorry about that. Let me take a look. Can I see your phone for a moment? I'll check if the SIM card is seated properly.",
              formal:
                "My apologies for the inconvenience. Allow me to examine it. May I briefly inspect your mobile device? I will ascertain if the SIM card has been correctly inserted.",
            },
          },
          {
            speaker: "you",
            textEn: "Sure, here you go. I made sure to turn off my phone when I put the SIM in.",
            textZh: "好的，给你。我装SIM卡的时候确认关机了的。",
            casualVersion: "Yeah, here ya go. I made sure it was off when I put the SIM in.",
            commonMistake: {
              wrong: "I confirmed to turn off my phone.",
              correct: "I made sure to turn off my phone.",
              explanation: "“确认做某事”常见直译为 “confirm to do”，但 “make sure to do” 更自然。",
            },
            formalityVariants: {
              casual: "Yeah, here. Phone was off when I put the SIM in.",
              standard: "Sure, here you go. I made sure to turn off my phone when I put the SIM in.",
              formal:
                "Certainly, here it is. I ensured that the device was powered off prior to inserting the SIM card.",
            },
          },
          {
            speaker: "them",
            role: "手机店员",
            textEn:
              "The SIM looks fine physically. Let me check your phone settings. Hmm, it seems like your APN settings aren't configured correctly. That's a common issue with phones from overseas. I'll set it up for you.",
            textZh:
              "SIM卡物理上看起来没问题。我检查一下手机设置。嗯，看起来APN设置没有正确配置。这是海外手机常见的问题。我帮您设置。",
            keyPhrases: [
              { en: "APN settings", zh: "APN设置/接入点设置" },
              { en: "configured correctly", zh: "正确配置" },
              { en: "common issue", zh: "常见问题" },
              { en: "phones from overseas", zh: "海外的手机" },
            ],
            culturalNote:
              "APN（Access Point Name）是手机连接移动网络的配置参数。换SIM卡后如果不能上网，通常是APN没有自动配置。",
            alternativeExpressions: [
              {
                textEn:
                  "SIM card looks good. Let me dig into your settings real quick... Ah, there it is — your APN isn't set up right. Super common with international phones. I'll fix it.",
                textZh: "SIM卡看着没问题。我快速看看设置……啊，找到了——APN没设置对。国际手机很常见的问题。我来修。",
                actionHint: "dig into = 深入查看, super common = 超级常见",
                frequency: "common",
              },
              {
                textEn:
                  "The SIM's fine — it's a settings thing. Your APN needs to be updated. We see this all the time with phones from other countries. Gimme a sec and I'll sort it out.",
                textZh: "SIM卡没事——是设置问题。你的APN需要更新。我们经常遇到国外手机这种情况。等一下我帮你搞定。",
                actionHint: "gimme a sec = 等一下（口语）",
                frequency: "common",
              },
            ],
            casualVersion:
              "SIM looks good. Lemme check your phone settings. Hmm, looks like your APN settings are off. Pretty common with phones from overseas. I'll get it set up for ya.",
            formalityVariants: {
              casual:
                "SIM's fine. Lemme check your settings. APN's off. Happens a lot with overseas phones. I'll fix it.",
              standard:
                "The SIM looks fine physically. Let me check your phone settings. Hmm, it seems like your APN settings aren't configured correctly. That's a common issue with phones from overseas. I'll set it up for you.",
              formal:
                "The physical integrity of the SIM card appears satisfactory. Allow me to inspect your device's settings. It appears the APN configuration is incorrect. This is a frequent occurrence with international mobile devices. I will configure it for you.",
            },
          },
          {
            speaker: "you",
            textEn: "Oh, I didn't know I needed to change any settings. What exactly is APN?",
            textZh: "哦，我不知道还需要改设置。APN到底是什么？",
            casualVersion: "Oh, didn't know I had to change any settings. What's APN, anyway?",
            commonMistake: {
              wrong: "What is APN exactly?",
              correct: "What exactly is APN?",
              explanation: "“What exactly is X” 比 “What is X exactly” 在提问时更自然。",
            },
            formalityVariants: {
              casual: "Didn't know I had to change settings. What's APN?",
              standard: "Oh, I didn't know I needed to change any settings. What exactly is APN?",
              formal:
                "Oh, I was unaware that any settings required modification. Could you please elaborate on what APN stands for and its function?",
            },
          },
          {
            speaker: "them",
            role: "手机店员",
            textEn:
              "APN stands for Access Point Name — it's basically the gateway that connects your phone to our mobile network for data. Different carriers have different APN settings. On your iPhone, go to Settings, then Cellular, then Cellular Data Network. I'll type in the correct values for you.",
            textZh:
              "APN是Access Point Name（接入点名称）的缩写——基本上就是连接手机到我们移动网络的网关。不同运营商有不同的APN设置。在您的iPhone上，进入设置，然后蜂窝网络，再点蜂窝数据网络。我来帮您输入正确的参数。",
            keyPhrases: [
              { en: "Access Point Name", zh: "接入点名称" },
              { en: "gateway", zh: "网关" },
              { en: "mobile network", zh: "移动网络" },
              { en: "Cellular Data Network", zh: "蜂窝数据网络" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "So APN is basically like the address your phone uses to talk to our network. Every carrier has their own. Let me just punch in the right one for you — it'll take two seconds.",
                textZh: "APN基本上就是你手机连我们网络用的地址。每个运营商都不一样。我帮你输入正确的——两秒钟的事。",
                actionHint: "punch in = 输入（口语）",
                frequency: "common",
              },
              {
                textEn:
                  "Think of APN as the settings your phone needs to connect to our data network. Each carrier is different. Here, let me just go into your settings and fix it real quick.",
                textZh: "APN就是手机连我们流量网络需要的设置。每个运营商不同。来，我进你设置里快速改一下。",
                actionHint: "用比喻解释技术概念",
                frequency: "common",
              },
            ],
            casualVersion:
              "APN's for Access Point Name — it's basically how your phone connects to our network for data. Different carriers, different settings. On your iPhone, it's Settings, then Cellular, then Cellular Data Network. I'll just type in the right stuff for ya.",
            formalityVariants: {
              casual:
                "APN's for Access Point Name – it's how your phone gets data. Different carriers, different settings. iPhone: Settings > Cellular > Cellular Data Network. I'll put in the right info.",
              standard:
                "APN stands for Access Point Name — it's basically the gateway that connects your phone to our mobile network for data. Different carriers have different APN settings. On your iPhone, go to Settings, then Cellular, then Cellular Data Network. I'll type in the correct values for you.",
              formal:
                "APN is an acronym for Access Point Name; it essentially serves as the conduit connecting your mobile device to our cellular network for data services. Various carriers utilize distinct APN configurations. On your iPhone, please navigate to Settings, then Cellular, followed by Cellular Data Network. I shall input the appropriate parameters on your behalf.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. Oh wait — it now shows one bar of signal, but I still can't load any websites.",
            textZh: "谢谢。等一下——现在显示一格信号了，但还是打不开网页。",
            casualVersion: "Thanks. Oh wait – now it's got one bar, but I still can't load any sites.",
            commonMistake: {
              wrong: "It now shows one bar of signal, but I still can't open any websites.",
              correct: "It now shows one bar of signal, but I still can't load any websites.",
              explanation: "“手机显示信号”常用 “have/get one bar”， “打开网站”用 “load/access website”。",
            },
            formalityVariants: {
              casual: "Thanks. Wait – one bar, but no websites.",
              standard: "Thank you. Oh wait — it now shows one bar of signal, but I still can't load any websites.",
              formal:
                "Thank you. However, I must interject – while it now indicates one bar of signal, I am still unable to load any websites.",
            },
          },
          {
            speaker: "them",
            role: "手机店员",
            textEn:
              'Let me check one more thing. Make sure "Data Roaming" is turned off and "Cellular Data" is turned on. Also, I notice you might still have your Chinese carrier\'s profile active. Let me remove that. Go to Settings, General, VPN & Device Management — do you see a profile from your Chinese carrier there?',
            textZh:
              '我再检查一个东西。确保"数据漫游"关闭了，"蜂窝数据"打开了。另外，我发现您可能还有中国运营商的配置文件处于激活状态。我帮您移除。进入设置、通用、VPN与设备管理——您看到那里有中国运营商的配置文件吗？',
            keyPhrases: [
              { en: "Data Roaming", zh: "数据漫游" },
              { en: "Cellular Data", zh: "蜂窝数据" },
              { en: "carrier profile", zh: "运营商配置文件" },
              { en: "VPN & Device Management", zh: "VPN与设备管理" },
            ],
            responseTip: "出国前建议移除中国运营商的描述文件，避免冲突。",
            alternativeExpressions: [
              {
                textEn:
                  "Hang on, let me check something else. Turn off Data Roaming and make sure Cellular Data is on. Oh wait — you've still got your old carrier profile installed. That might be messing things up. Check under Settings, General, VPN & Device Management.",
                textZh:
                  "等一下，我再看看别的。关掉数据漫游，确保蜂窝数据开着。等等——你还装着旧运营商的配置文件。可能就是这个在捣乱。看看设置、通用、VPN与设备管理。",
                actionHint: "messing things up = 搞乱/捣乱",
                frequency: "common",
              },
              {
                textEn:
                  "One more thing — I think the issue is your old carrier profile is still on the phone and it's conflicting with our SIM. Go to Settings, General, then VPN & Device Management. See anything from your Chinese carrier?",
                textZh:
                  "还有一件事——我觉得问题是你旧运营商的配置文件还在手机上跟我们的SIM卡冲突了。进设置、通用、VPN与设备管理。看到中国运营商的东西了吗？",
                actionHint: "conflicting with = 与...冲突",
                frequency: "common",
              },
            ],
            casualVersion: "Lemme check one more thing. Just make sure 'Data Roaming' is on.",
            formalityVariants: {
              casual: "Gonna check one more thing. Just check 'Data Roaming' is on.",
              standard: "Let me check one more thing. Make sure 'Data Roaming' is turned on.",
              formal: "Allow me to verify one additional setting. Please confirm that 'Data Roaming' is enabled.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I see a profile from China Mobile. Should I delete it?",
            textZh: "是的，我看到一个中国移动的配置文件。要删掉吗？",
            casualVersion: "Yeah, I see one from China Mobile. Should I just delete it?",
            formalityVariants: {
              casual: "Yeah, there's a China Mobile profile. Delete it?",
              standard: "Yes, I see a profile from China Mobile. Should I delete it?",
              formal: "Yes, I observe a profile associated with China Mobile. Would it be advisable to remove it?",
            },
          },
          {
            speaker: "them",
            role: "手机店员",
            textEn:
              "Yes, go ahead and remove it. Don't worry — you can reinstall it when you go back to China. After removing it, restart your phone one more time. That should fix the data issue.",
            textZh: "是的，删掉它。别担心——回中国的时候可以重新安装。删除后再重启一次手机。这应该就能解决流量问题了。",
            keyPhrases: [
              { en: "remove it", zh: "删除它" },
              { en: "reinstall", zh: "重新安装" },
              { en: "restart your phone", zh: "重启手机" },
              { en: "fix the data issue", zh: "解决流量问题" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, just delete it. No biggie — you can always add it back when you're home. Then do one more restart and you should be golden.",
                textZh: "删掉就行。没什么大不了的——回国的时候随时可以加回来。然后再重启一次应该就好了。",
                actionHint: "no biggie = 没什么大不了, you should be golden = 应该就没问题了",
                frequency: "common",
              },
              {
                textEn:
                  "Go ahead and ditch that profile. You can get it back when you return to China. One more reboot and that should do the trick.",
                textZh: "删掉那个配置文件。回中国的时候可以重新装。再重启一次应该就搞定了。",
                actionHint: "ditch = 删掉/扔掉, do the trick = 解决问题",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep, go ahead and get rid of it. Don't sweat it — you can put it back on when you go home. After that, just restart your phone again. That should clear up the data problem.",
            formalityVariants: {
              casual:
                "Yeah, get rid of it. No worries – you can put it back when you're home. Restart your phone after. Should fix the data.",
              standard:
                "Yes, go ahead and remove it. Don't worry — you can reinstall it when you go back to China. After removing it, restart your phone one more time. That should fix the data issue.",
              formal:
                "Yes, please proceed with its removal. Do not be concerned; you may reinstall it upon your return to China. Subsequent to its deletion, kindly restart your mobile device once more. This action should resolve the data connectivity issue.",
            },
          },
          {
            speaker: "you",
            textEn: "It's working now! Full signal and the internet is fast. Thank you so much.",
            textZh: "可以了！满格信号而且网速很快。太感谢了。",
            commonMistake: {
              wrong: "It's work! Full signal and internet very fast.",
              correct: "It's working! Full signal and super fast internet.",
              explanation: "“工作了”应使用进行时，形容速度时应使用形容词修饰。",
            },
            casualVersion: "It's working! Full signal, and the internet's fast. Thanks so much!",
            formalityVariants: {
              casual: "It's working! Full signal, fast internet. Thanks!",
              standard: "It's working now! Full signal and the internet is fast. Thank you so much.",
              formal:
                "It is now operational! I have full signal strength, and the internet connection is remarkably swift. My sincere gratitude.",
            },
          },
          {
            speaker: "them",
            role: "手机店员",
            textEn:
              "Glad to hear it! One more tip — if you ever lose signal in a building or underground, just toggle airplane mode on and off. That usually reconnects you quickly. Enjoy your trip!",
            textZh:
              "太好了！再告诉您一个小技巧——如果在建筑物里或地下信号不好，开关一下飞行模式就行。通常能快速重新连接。旅途愉快！",
            keyPhrases: [
              { en: "toggle airplane mode", zh: "开关飞行模式" },
              { en: "reconnects", zh: "重新连接" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Awesome! Quick pro tip — if your signal drops in a building or the subway, just flip airplane mode on and off. Gets you reconnected fast. Have a great trip!",
                textZh: "太棒了！小贴士——如果在楼里或地铁信号断了，开关一下飞行模式就行。能很快重新连接。玩得开心！",
                actionHint: "pro tip = 专业小贴士, flip on and off = 开关一下",
                frequency: "common",
              },
              {
                textEn:
                  "Nice! Oh, and one little trick — if you lose bars somewhere, just do the airplane mode thing. Works like a charm. Enjoy!",
                textZh: "好了！还有个小技巧——如果信号没了，开关飞行模式就行。特别管用。玩得开心！",
                actionHint: "lose bars = 没信号, works like a charm = 特别管用",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Glad to hear that! One more tip — if you ever lose signal in a building or underground, just toggle airplane mode on and off. That usually reconnects you fast. Enjoy your trip!",
            culturalNote: "在美国常用信号故障排除法",
            formalityVariants: {
              casual:
                "Good to hear! Quick tip – if signal drops in a building, just flip airplane mode. Usually reconnects quick. Enjoy!",
              standard:
                "Glad to hear it! One more tip — if you ever lose signal in a building or underground, just toggle airplane mode on and off. That usually reconnects you quickly. Enjoy your trip!",
              formal:
                "I am pleased to hear that. One additional piece of advice: should you experience signal loss within a structure or subterranean area, simply cycle airplane mode on and off. This typically facilitates a rapid reconnection. Please enjoy the remainder of your journey.",
            },
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
            commonMistake: {
              wrong: "I want to send a package to China. Can you help me?",
              correct: "I'd like to send a package to China. Can you help me with that?",
              explanation: "“I want”在美国听起来可能过于直接，用“I'd like”更礼貌委婉。",
            },
            formalityVariants: {
              casual: "Hey, wanna send a package to China. Can you help?",
              standard: "Hi, I'd like to send a package to China. Can you help me with that?",
              formal: "Good morning/afternoon, I would like to inquire about sending a package to China. Would you be able to assist me?",
            },
            casualVersion: "Hey, I need to mail a package to China.",
          },
          {
            speaker: "them",
            role: "邮局工作人员",
            textEn: "Of course! Is this a letter or a parcel? And do you know roughly how much it weighs?",
            textZh: "当然！这是信件还是包裹？您知道大概多重吗？",
            casualVersion: "Sure! Letter or parcel? And got a rough weight?",
            formalityVariants: {
              casual: "Sure! Letter or parcel? And got a rough weight?",
              standard: "Of course! Is this a letter or a parcel? And do you know roughly how much it weighs?",
              formal: "Certainly! Could you please specify if this is a letter or a parcel? Additionally, do you have an approximate weight for the item?",
            },
            variations: [
              {
                textEn: "Sure, I can help with that. What are you sending and how big is it?",
                textZh: "没问题，我来帮您。您要寄什么，多大的？",
              },
            ],
            keyPhrases: [
              { en: "letter or parcel", zh: "信件还是包裹" },
              { en: "how much it weighs", zh: "多重" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure thing! What have you got — a letter or a package? Any idea how heavy it is?",
                textZh: "没问题！你寄什么——信还是包裹？知道多重吗？",
                actionHint: "what have you got 是很随意的问法",
                frequency: "common",
              },
              {
                textEn: "Absolutely. Is it a flat envelope or more of a box? And roughly how much does it weigh?",
                textZh: "完全可以。是平的信封还是盒子？大概多重？",
                actionHint: "flat envelope 区分信件和包裹",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "It's a parcel — some souvenirs and snacks I bought for my family. Maybe around three pounds? I'm not sure.",
            textZh: "是包裹——给家人买的一些纪念品和零食。大概三磅左右？我不太确定。",
            commonMistake: {
              wrong: "It's a parcel. Some souvenirs and snacks for my family. About three pounds? I don't know sure.",
              correct: "It's a parcel—some souvenirs and snacks for my family. Around three pounds, maybe? I'm not really sure.",
              explanation: "“not sure” 是固定搭配，表示“不确定”。“I don't know sure” 是中式英语常见错误。",
            },
            casualVersion: "It's a parcel—just some souvenirs and snacks for family. Like three pounds? Not really sure.",
            formalityVariants: {
              casual: "It's a parcel—just some souvenirs and snacks for family. Like three pounds? Not really sure.",
              standard: "It's a parcel—some souvenirs and snacks I bought for my family. About three pounds? I'm not really sure.",
              formal: "It is a parcel containing souvenirs and snacks purchased for my family. I estimate the weight to be approximately three pounds, though I am not entirely certain.",
            },
          },
          {
            speaker: "them",
            role: "邮局工作人员",
            textEn:
              "No problem, let me weigh it for you. Let's see — it's three pounds and four ounces. For shipping to China, you have a few options. Priority Mail International takes six to ten business days and costs about forty-five dollars. First-Class Package International is cheaper at around twenty-eight dollars, but it takes two to four weeks.",
            textZh:
              "没问题，我帮您称一下。看看——3磅4盎司。寄到中国有几种选择。优先国际邮件需要6到10个工作日，大约45美元。国际一类包裹更便宜，大约28美元，但需要2到4周。",
            casualVersion: "No problem, lemme weigh it. Okay, 3 lbs 4 oz. Couple options for China. Priority Mail Int'l is 6-10 business days, like 45 bucks. First-Class Package Int'l is cheaper, 'round 28, but takes 2-4 weeks.",
            formalityVariants: {
              casual: "No problem, lemme weigh it. Okay, 3 lbs 4 oz. Couple options for China. Priority Mail Int'l is 6-10 business days, like 45 bucks. First-Class Package Int'l is cheaper, 'round 28, but takes 2-4 weeks.",
              standard: "No problem, let me weigh it for you. Let's see—3 pounds, 4 ounces. There are a few options for sending to China. Priority Mail International takes 6 to 10 business days, for about 45 dollars. First-Class Package International Service is cheaper, around 28 dollars, but takes 2 to 4 weeks.",
              formal: "Certainly, allow me to weigh it for you. It registers at 3 pounds and 4 ounces. We offer several options for shipping to China. Priority Mail International has an estimated delivery time of 6 to 10 business days, priced at approximately 45 dollars. Alternatively, First-Class Package International Service is more economical at around 28 dollars, though its delivery timeframe is 2 to 4 weeks.",
            },
            keyPhrases: [
              { en: "weigh it", zh: "称重" },
              { en: "three pounds and four ounces", zh: "3磅4盎司" },
              { en: "Priority Mail International", zh: "优先国际邮件" },
              { en: "six to ten business days", zh: "6到10个工作日" },
              { en: "First-Class Package International", zh: "国际一类包裹" },
              { en: "two to four weeks", zh: "2到4周" },
            ],
            culturalNote:
              "美国邮局USPS的国际邮寄比较贵。如果包裹不急，First-Class Package International性价比最高。也可以考虑华人快递公司，通常更便宜。",
            alternativeExpressions: [
              {
                textEn:
                  "Let me throw it on the scale... Three pounds, four ounces. So for China, you've got two main options — Priority International at about 45 bucks, gets there in a week or two, or First-Class International at 28, but that'll take a month-ish.",
                textZh:
                  "我放秤上称称……3磅4盎司。寄中国的话主要两个选择——优先国际大概45块，一两周到，或者国际一类28块，但得一个月左右。",
                actionHint: "throw it on the scale = 放秤上称, month-ish = 大约一个月",
                frequency: "common",
              },
              {
                textEn:
                  "Coming in at three-four. For international to China, you're looking at Priority — about 45 dollars, 6 to 10 days — or First-Class, which is cheaper but slower, around 28 bucks.",
                textZh: "3磅4盎司。寄中国的话，有优先邮件——大约45美元，6到10天——或者一类包裹，便宜但慢一些，28块左右。",
                actionHint: "three-four 是简略说法=3磅4盎司",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with Priority Mail International. Is there tracking included?",
            textZh: "我选优先国际邮件。包含物流追踪吗？",
            casualVersion: "Okay, Priority Mail Int'l. Does it have tracking?",
            commonMistake: {
              wrong: "I choose Priority Mail International. Does it include tracking?",
              correct: "I'll go with Priority Mail International. Does that include tracking?",
              explanation: "“I'll go with”比“I choose”更自然。口语中常用“does it have”代替“does it include”。",
            },
            formalityVariants: {
              casual: "Okay, Priority Mail Int'l. Does it have tracking?",
              standard: "I'll go with Priority Mail International. Does that include tracking?",
              formal: "I will opt for Priority Mail International. Does this service include tracking capabilities?",
            },
          },
          {
            speaker: "them",
            role: "邮局工作人员",
            textEn:
              "Yes, Priority Mail International includes tracking and up to two hundred dollars of insurance. Do you need to declare the value of the contents? There's a customs form you'll need to fill out.",
            textZh:
              "是的，优先国际邮件包含追踪和最高200美元的保险。您需要申报包裹内容的价值吗？您需要填一张海关申报表。",
            casualVersion: "Yeah, PMI comes with tracking and up to $200 insurance. Gotta declare the value? There's a customs form.",
            formalityVariants: {
              casual: "Yeah, PMI comes with tracking and up to $200 insurance. Gotta declare the value? There's a customs form.",
              standard: "Yes, Priority Mail International includes tracking and up to two hundred dollars of insurance. Do you need to declare the value of the contents? There's a customs form you'll need to fill out.",
              formal: "Yes, Priority Mail International does include comprehensive tracking and insurance coverage up to two hundred dollars. It is also requisite to declare the value of the contents; a customs declaration form will need to be completed.",
            },
            keyPhrases: [
              { en: "tracking", zh: "物流追踪" },
              { en: "insurance", zh: "保险" },
              { en: "declare the value", zh: "申报价值" },
              { en: "customs form", zh: "海关申报表" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep, tracking comes with it, and you get up to two hundred bucks of insurance built in. You'll also need to fill out a customs form — just list what's inside and how much it's worth.",
                textZh: "对，自带追踪，而且包含最高200美元的保险。你还需要填海关申报表——写一下里面是什么和值多少钱。",
                actionHint: "built in = 内含的/自带的",
                frequency: "common",
              },
              {
                textEn:
                  "Priority International has tracking and $200 of coverage included. For anything going international, there's also a customs declaration — you just need to say what's in the box and its value.",
                textZh: "优先国际有追踪和200美元保障。国际件都需要海关申报——说明包裹里有什么和价值多少。",
                actionHint: "coverage = 保障/保额",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay. What exactly do I write on the customs form? I've never filled one out before.",
            textZh: "好的。海关申报表具体写什么？我从来没填过。",
            commonMistake: {
              wrong: "Okay. What I write on the customs form? I never fill out before.",
              correct: "Okay. What exactly do I write on the customs form? I've never filled one out before.",
              explanation: "疑问句语序是“What do I write”。“never filled out before” 表示从没做过某事，需要现在完成时。“I never fill out before” 语法不完整。",
            },
            casualVersion: "Alright. What exactly goes on the customs form? Never filled one out.",
            formalityVariants: {
              casual: "Alright. What exactly goes on the customs form? Never filled one out.",
              standard: "Okay. What exactly do I write on the customs form? I've never filled one out before.",
              formal: "Understood. Could you please specify what information is required on the customs declaration form? I have no prior experience with completing such documents.",
            },
          },
          {
            speaker: "them",
            role: "邮局工作人员",
            textEn:
              'You\'ll need to list each item, its value, and its weight. For example, write "souvenir keychains, 3 pieces, $15" and "snack food, 2 bags, $10." Mark the purpose as "Gift" if it\'s for family. Also write the total value and sign at the bottom.',
            textZh:
              '您需要列出每件物品、它的价值和重量。比如写"souvenir keychains, 3 pieces, $15"还有"snack food, 2 bags, $10"。如果是给家人的，目的勾选"Gift"。最后写上总价值并在底部签名。',
            casualVersion: "Gotta list each item, its value, and weight. Like 'T-shirt, $15, half a pound'.",
            formalityVariants: {
              casual: "Gotta list each item, its value, and weight. Like 'T-shirt, $15, half a pound'.",
              standard: "You'll need to list each item, its value, and weight. For example, write 'T-shirt, $15, 0.5 lbs'.",
              formal: "You are required to itemize each component, stating its individual value and weight. For instance, you might list 'T-shirt, $15, 0.5 lbs'.",
            },
            keyPhrases: [
              { en: "list each item", zh: "列出每件物品" },
              { en: "its value", zh: "它的价值" },
              { en: "mark the purpose as Gift", zh: "目的标注为礼物" },
              { en: "total value", zh: "总价值" },
              { en: "sign at the bottom", zh: "在底部签名" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  'Just write down what\'s in there — like "keychains, 3, $15" and "snacks, 2 bags, $10." Check "Gift" for the purpose since it\'s for family. Then add up the total and sign it.',
                textZh:
                  '就写里面有什么——比如"钥匙扣，3个，$15"和"零食，2袋，$10"。用途勾"Gift"因为是给家人的。然后写总价签名。',
                actionHint: "简洁指导，可直接照着填",
                frequency: "common",
              },
              {
                textEn:
                  'Pretty straightforward — item description, quantity, and dollar value for each thing. Put "Gift" as the reason. Total it up at the bottom and slap your signature on it.',
                textZh: '很简单——每样东西写描述、数量和价值。原因写"Gift"。底部加总然后签名就行。',
                actionHint: "slap your signature = 签上你的名（非常口语）",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Here's the completed form. Can I also get a receipt and the tracking number?",
            textZh: "明白了。表格填好了。能给我收据和追踪号码吗？",
            commonMistake: {
              wrong: "Got it. Form finished. Can give me receipt and tracking number?",
              correct: "Got it. Here's the form, I'm done. Can I have the receipt and tracking number?",
              explanation: "“Form is finished” 听起来不自然，更常用 “I'm done” 或 “the form is done”。“Can give me” 缺少主语，应为 “Can you give me” 或 “Can I have”。",
            },
            casualVersion: "Got it. Here's the form, I'm done. Can I get the receipt and tracking number?",
            formalityVariants: {
              casual: "Got it. Here's the form, I'm done. Can I get the receipt and tracking number?",
              standard: "Got it. Here's the form, I've filled it out. Can I get a receipt and tracking number?",
              formal: "Understood. The form has been completed. May I please have a receipt and the tracking number?",
            },
          },
          {
            speaker: "them",
            role: "邮局工作人员",
            textEn:
              "Let me just seal this up for you. Your total is forty-five sixty. Here's your receipt with the tracking number. You can track it online at usps.com or on the USPS app. It usually clears Chinese customs within a few days after arrival.",
            textZh:
              "我帮您封好。总共是45.60美元。这是您的收据和追踪号码。您可以在usps.com或USPS app上追踪。到达后通常几天内就能通过中国海关。",
            casualVersion: "Lemme just seal this. Total's forty-five sixty. Here's your receipt and tracking number. Can track it on usps.com or the app. Usually clears Chinese customs a few days after it gets there.",
            formalityVariants: {
              casual: "Lemme just seal this. Total's forty-five sixty. Here's your receipt and tracking number. Can track it on usps.com or the app. Usually clears Chinese customs a few days after it gets there.",
              standard: "Let me just seal this up for you. Your total is forty-five sixty. Here's your receipt and tracking number. You can track it on usps.com or the USPS app. It usually clears Chinese customs within a few days of arrival.",
              formal: "Allow me to secure this package for you. Your total comes to forty-five dollars and sixty cents. Here are your receipt and tracking number. You may monitor its progress on usps.com or via the USPS application. Typically, it clears Chinese customs within a few days of its arrival.",
            },
            keyPhrases: [
              { en: "seal this up", zh: "封好" },
              { en: "forty-five sixty", zh: "45.60美元" },
              { en: "tracking number", zh: "追踪号码" },
              { en: "track it online", zh: "网上追踪" },
              { en: "clears customs", zh: "通过海关" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I'll tape this up for you. That'll be $45.60. Here's your tracking info — you can follow it on usps.com or the app. Once it hits China, customs usually only takes a few days.",
                textZh:
                  "我帮你封好。一共45.60美元。这是追踪信息——可以在usps.com或app上跟踪。到了中国之后海关通常就几天。",
                actionHint: "hits China = 到达中国（口语）",
                frequency: "common",
              },
              {
                textEn:
                  "All sealed up. Your total comes to forty-five sixty. Tracking number's right here on the receipt — check the USPS website or app to keep tabs on it.",
                textZh: "封好了。一共45.60美元。追踪号在收据上——用USPS网站或app关注进度。",
                actionHint: "keep tabs on it = 关注/跟踪进度",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you very much. One last thing — are there any items I shouldn't send to China?",
            textZh: "非常感谢。最后问一下——有什么东西不能寄到中国吗？",
            casualVersion: "Thanks a lot. Last thing—anything I shouldn't send to China?",
            commonMistake: {
              wrong: "Thank you very much. One last thing—any items I shouldn't send to China?",
              correct: "Thank you very much. One last thing—are there any items I shouldn't send to China?",
              explanation: "在疑问句中，主语和动词通常不能省略。同时，“Thanks a lot”在口语中很常见。",
            },
            formalityVariants: {
              casual: "Thanks a lot. Last thing—anything I shouldn't send to China?",
              standard: "Thank you very much. One last thing—are there any items I shouldn't send to China?",
              formal: "I appreciate your assistance. Lastly, could you please advise if there are any specific items that are prohibited from being sent to China?",
            },
          },
          {
            speaker: "them",
            role: "邮局工作人员",
            textEn:
              "Good question. You can't send perishable food, lithium batteries, liquids over a certain amount, or any kind of plant or animal products without special permits. China also restricts the import of certain supplements and medications. When in doubt, check the USPS website for the full list of prohibited items.",
            textZh:
              "好问题。不能寄易腐食品、锂电池、超过一定量的液体，以及任何没有特别许可的动植物产品。中国还限制进口某些保健品和药品。不确定的话，查看USPS网站上的完整禁运物品清单。",
            casualVersion: "Good question. Can't send perishables, lithium batteries, liquids over a certain amount, or any animal/plant stuff without permits. China also restricts some supplements/meds. If you're unsure, check the full list on the USPS site.",
            formalityVariants: {
              casual: "Good question. Can't send perishables, lithium batteries, liquids over a certain amount, or any animal/plant stuff without permits. China also restricts some supplements/meds. If you're unsure, check the full list on the USPS site.",
              standard: "Good question. You can't send perishable foods, lithium batteries, liquids over a certain amount, or any animal/plant products without special permits. China also restricts imports of certain health supplements and medicines. If you're unsure, check the full list of prohibited items on the USPS website.",
              formal: "That is an excellent inquiry. Prohibited items include perishable foodstuffs, lithium batteries, liquids exceeding a specified volume, and any animal or plant products without requisite permits. Furthermore, China imposes restrictions on the import of certain health supplements and pharmaceutical products. Should you have any doubts, kindly consult the comprehensive list of prohibited items on the official USPS website.",
            },
            keyPhrases: [
              { en: "perishable food", zh: "易腐食品" },
              { en: "lithium batteries", zh: "锂电池" },
              { en: "special permits", zh: "特别许可" },
              { en: "prohibited items", zh: "禁运物品" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Oh yeah — no perishables, no batteries, and nothing liquid over a certain size. Plants and animal stuff need permits. Also China has its own rules on vitamins and meds coming in. The USPS site has the full no-no list.",
                textZh:
                  "对了——不能寄易腐食品、电池、超量液体。动植物需要许可。中国对维生素和药品进口也有规定。USPS网站有完整的禁寄清单。",
                actionHint: "no-no list = 禁止清单（口语化）",
                frequency: "common",
              },
              {
                textEn:
                  "The big ones to avoid: anything perishable, lithium batteries, large quantities of liquid, and plants or animal products. China's also strict on supplements. If you're not sure, the USPS website breaks it all down.",
                textZh:
                  "主要要避免的：易腐品、锂电池、大量液体和动植物产品。中国对保健品也很严格。不确定的话USPS网站上有详细说明。",
                actionHint: "breaks it all down = 详细列出",
                frequency: "common",
              },
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
            textEn:
              "I need to ship something valuable back to China — a designer handbag I bought as a gift. It's worth about eight hundred dollars. What's the safest way to send it?",
            textZh: "我需要把一件贵重物品寄回中国——买的一个名牌手袋作为礼物。价值大约800美元。最安全的寄送方式是什么？",
            casualVersion: "Gotta ship something valuable to China—a designer handbag I got as a gift. It's worth like 800 bucks. Safest way to send it?",
            commonMistake: {
              wrong: "I need ship something valuable back to China—a designer handbag I bought as a gift. It worth about eight hundred dollars. What's the safest way to send it?",
              correct: "I need to ship something valuable back to China—a designer handbag I bought as a gift. It's worth about eight hundred dollars. What's the safest way to send it?",
              explanation: "“need to”不可省略；“It's worth”中的“is”不可省略；“bucks”是“dollars”的口语表达。",
            },
            formalityVariants: {
              casual: "Gotta ship something valuable to China—a designer handbag I got as a gift. It's worth like 800 bucks. Safest way to send it?",
              standard: "I need to ship something valuable back to China—a designer handbag I bought as a gift. It's worth about eight hundred dollars. What's the safest way to send it?",
              formal: "I require to ship a valuable item back to China—specifically, a designer handbag acquired as a gift. Its value is approximately eight hundred dollars. Could you advise on the most secure shipping method available?",
            },
          },
          {
            speaker: "them",
            role: "邮局工作人员",
            textEn:
              "For something that valuable, I'd recommend Priority Mail Express International. It's the fastest and most secure option — delivery in three to five business days with full tracking and a signature required on delivery. It also includes up to two hundred dollars of free insurance.",
            textZh:
              "这么贵重的物品，我建议用特快国际邮件。这是最快最安全的选择——3到5个工作日送达，全程追踪，送达时需要签收。还包含最高200美元的免费保险。",
            casualVersion: "For something that valuable, I'd go with Express Mail Int'l. Fastest, safest option—3 to 5 business days, full tracking, and signature required. Comes with up to $200 free insurance too.",
            formalityVariants: {
              casual: "For something that valuable, I'd go with Express Mail Int'l. Fastest, safest option—3 to 5 business days, full tracking, and signature required. Comes with up to $200 free insurance too.",
              standard: "For something that valuable, I'd recommend Express Mail International. It's the fastest and safest option—3 to 5 business days for delivery, full tracking, and signature confirmation upon delivery. It also includes up to two hundred dollars of free insurance.",
              formal: "Given the valuable nature of the item, I would highly recommend utilizing Express Mail International. This service represents our fastest and most secure option, offering delivery within 3 to 5 business days, comprehensive tracking, and mandatory signature confirmation upon delivery. It also provides complimentary insurance coverage up to two hundred dollars.",
            },
            keyPhrases: [
              { en: "Priority Mail Express International", zh: "特快国际邮件" },
              { en: "three to five business days", zh: "3到5个工作日" },
              { en: "signature required on delivery", zh: "送达时需要签收" },
              { en: "free insurance", zh: "免费保险" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For an $800 bag, you definitely want Express International. It's pricier but way more secure — tracked the whole way, someone has to sign for it, and it comes with $200 of insurance baked in.",
                textZh: "800美元的包的话，你肯定要用特快国际。贵一些但安全多了——全程追踪，必须签收，自带200美元保险。",
                actionHint: "baked in = 内含的/自带的",
                frequency: "common",
              },
              {
                textEn:
                  "With something that pricey, I'd go Express International for sure. Gets there in 3 to 5 days, full tracking, and they need to sign for it. Plus you get $200 of insurance included.",
                textZh: "这么贵的东西我肯定推荐特快国际。3到5天到，全程追踪，而且得签收。还自带200美元保险。",
                actionHint: "that pricey = 这么贵的",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "But the free insurance only covers two hundred dollars? The bag is worth eight hundred. Can I buy additional insurance?",
            textZh: "但免费保险只保200美元？手袋值800美元。能买额外保险吗？",
            casualVersion: "But the free insurance is only $200? Bag's worth $800. Can I get more insurance?",
            commonMistake: {
              wrong: "But the free insurance only cover two hundred dollars? The bag worth eight hundred. Can I buy additional insurance?",
              correct: "But the free insurance only covers two hundred dollars? The bag is worth eight hundred. Can I buy additional insurance?",
              explanation: "动词“covers”需要第三人称单数形式；“the bag is worth”中的“is”不可省略。",
            },
            formalityVariants: {
              casual: "But the free insurance is only $200? Bag's worth $800. Can I get more insurance?",
              standard: "But the free insurance only covers two hundred dollars? The bag is worth eight hundred. Can I buy additional insurance?",
              formal: "However, the complimentary insurance only provides coverage up to two hundred dollars. As the handbag's value is eight hundred dollars, would it be possible to purchase supplementary insurance?",
            },
          },
          {
            speaker: "them",
            role: "邮局工作人员",
            textEn:
              "Yes, absolutely. You can purchase additional insurance to cover the full declared value. For eight hundred dollars of coverage, the extra insurance would be about eighteen dollars. I'd strongly recommend it for an item like this. You'll also need to keep your purchase receipt as proof of value in case you need to file a claim.",
            textZh:
              "可以的。您可以购买额外保险来覆盖全部申报价值。保800美元的话，额外保险大约18美元。像这样的物品，我强烈建议买保险。您还需要保留购买收据作为价值证明，以防需要理赔。",
            casualVersion: "Yeah, absolutely. You can get more insurance for the full value. For $800 coverage, it'd be about eighteen bucks extra. Strongly recommend insurance for something like this. Also, keep your receipt as proof of value, just in case you need to claim.",
            formalityVariants: {
              casual: "Yeah, absolutely. You can get more insurance for the full value. For $800 coverage, it'd be about eighteen bucks extra. Strongly recommend insurance for something like this. Also, keep your receipt as proof of value, just in case you need to claim.",
              standard: "Yes, absolutely. You can purchase additional insurance to cover the full declared value. For eight hundred dollars of coverage, the extra insurance would be about eighteen dollars. I strongly recommend insurance for an item like this. You'll also want to keep your purchase receipt as proof of value in case you need to file a claim.",
              formal: "Yes, absolutely. You are able to procure additional insurance to ensure the full declared value is covered. For eight hundred dollars of coverage, the supplemental insurance premium would be approximately eighteen dollars. I unequivocally advise purchasing insurance for an item of this nature. Furthermore, it is prudent to retain your purchase receipt as verifiable proof of value, should a claim become necessary.",
            },
            keyPhrases: [
              { en: "additional insurance", zh: "额外保险" },
              { en: "declared value", zh: "申报价值" },
              { en: "coverage", zh: "保额" },
              { en: "proof of value", zh: "价值证明" },
              { en: "file a claim", zh: "理赔" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For sure. Extra insurance to cover the full 800 would run you about 18 bucks. Totally worth it for a designer bag. Just make sure you keep the receipt — you'll need it if anything goes wrong.",
                textZh: "当然可以。保到800美元的额外保险大约18块。名牌包绝对值得买。收据一定留好——万一出问题需要用到。",
                actionHint: "run you about = 大约花费你",
                frequency: "common",
              },
              {
                textEn:
                  "Oh yeah, you can add insurance for the full amount. It's only 18 dollars for $800 coverage — no-brainer for something like this. And hang on to your purchase receipt just in case.",
                textZh: "可以的，可以加保到全额。800美元保额才18块——这种东西不买白不买。购买收据留好以防万一。",
                actionHint: "no-brainer = 不用想的/当然要",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I'll take the extra insurance. Now, for the customs form — should I declare the full value? I heard that might cause issues with Chinese customs.",
            textZh: "我要额外保险。那海关申报表呢——要如实申报全部价值吗？我听说这可能在中国海关那边有问题。",
            casualVersion: "Yeah, I'll get the extra insurance. Customs form—should I declare the full value? Heard that can cause issues with Chinese customs.",
            culturalNote: "中国文化中，为了避税或简化流程，有时会有低报申报价值的习惯，但在美国这属于违法行为。",
            commonMistake: {
              wrong: "I will take the additional insurance. Customs form—should I declare the full value? I heard this might cause issues with Chinese customs.",
              correct: "I'll take the additional insurance. Customs form—should I declare the full value honestly? I've heard this might cause issues with Chinese customs.",
              explanation: "“I will”在口语中常用缩写“I'll”；“I've heard”更自然地表达“我听说”。",
            },
            formalityVariants: {
              casual: "Yeah, I'll get the extra insurance. Customs form—should I declare the full value? Heard that can cause issues with Chinese customs.",
              standard: "I'll take the additional insurance. What about the customs form—should I declare the full value honestly? I've heard this might cause issues with Chinese customs.",
              formal: "I will proceed with the additional insurance. Regarding the customs declaration form, should I truthfully declare the full value? I have received information that this may potentially lead to complications with Chinese customs.",
            },
          },
          {
            speaker: "them",
            role: "邮局工作人员",
            textEn:
              "You should always declare the actual value — it's required by law, and if you under-declare and need to make an insurance claim, your claim could be denied. As for Chinese customs, personal gifts under a certain value threshold usually pass through without any duty. But if the declared value exceeds that limit, the recipient might have to pay import tax.",
            textZh:
              "您应该如实申报实际价值——这是法律要求。如果少报了又需要理赔，您的理赔可能会被拒绝。至于中国海关，个人礼物低于一定价值门槛通常可以免税通过。但如果申报价值超过限额，收件人可能需要缴纳进口税。",
            casualVersion: "Always declare the actual value—it's the law. If you under-declare and try to claim, it might get denied. For Chinese customs, personal gifts under a certain value usually get through duty-free. But if it's over the limit, the recipient might have to pay import duties.",
            formalityVariants: {
              casual: "Always declare the actual value—it's the law. If you under-declare and try to claim, it might get denied. For Chinese customs, personal gifts under a certain value usually get through duty-free. But if it's over the limit, the recipient might have to pay import duties.",
              standard: "You should always declare the actual value—it's legally required. If you under-declare and then need to file a claim, your claim might be denied. As for Chinese customs, personal gifts below a certain value threshold usually pass through duty-free. But if the declared value exceeds the limit, the recipient might need to pay import duties.",
              formal: "It is imperative that you consistently declare the actual value, as this is a legal requirement. Should you under-declare an item and subsequently need to file a claim, your claim may regrettably be denied. With respect to Chinese customs, personal gifts falling below a predetermined value threshold are typically exempt from import duties. However, if the declared value surpasses this limit, the recipient may be subject to import taxation.",
            },
            keyPhrases: [
              { en: "declare the actual value", zh: "如实申报价值" },
              { en: "required by law", zh: "法律要求" },
              { en: "under-declare", zh: "少报" },
              { en: "claim could be denied", zh: "理赔可能被拒" },
              { en: "value threshold", zh: "价值门槛" },
              { en: "import tax", zh: "进口税" },
            ],
            culturalNote:
              "中国海关对个人物品有免税额度（通常1000元人民币以内），超过可能需要缴税。如实申报很重要，否则可能被扣押。",
            alternativeExpressions: [
              {
                textEn:
                  "Always put the real value — the law says you have to, and if you lowball it and something happens, insurance won't pay out. Chinese customs might charge import duty above a certain amount, but that's on the receiving end.",
                textZh:
                  "一定写真实价值——法律要求的，而且如果你写低了出了事保险不赔。中国海关超过一定金额可能收进口税，但那是收件方的事。",
                actionHint: "lowball = 故意报低, pay out = 赔付",
                frequency: "common",
              },
              {
                textEn:
                  "Don't fudge the numbers — declare the real amount. If you under-report and something gets lost or damaged, you won't get your money back. As for duties on the Chinese side, gifts under a certain threshold are usually fine.",
                textZh:
                  "不要虚报——写真实金额。如果少报了东西丢了或损坏了，你拿不到赔偿。中国那边的关税，低于一定门槛的礼物通常没问题。",
                actionHint: "fudge the numbers = 虚报/造假",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I understand. I'll declare the full value. What should I write as the item description on the customs form?",
            textZh: "明白了。我如实申报全部价值。海关申报表上物品描述怎么写？",
            casualVersion: "Got it. I'll declare the full value. How should I describe the item on the form?",
            commonMistake: {
              wrong: "I understand. I will declare the full value. How to describe the item on customs form?",
              correct: "I understand. I'll declare the full value. How should I describe the item on the customs form?",
              explanation: "“I will”在口语中常用缩写“I'll”；疑问句中需有助动词“should”和代词“I”；“the customs form”更完整。",
            },
            formalityVariants: {
              casual: "Got it. I'll declare the full value. How should I describe the item on the form?",
              standard: "I understand. I'll declare the full value. How should I describe the item on the customs form?",
              formal: "Understood. I will proceed with declaring the full value. Could you please advise on the appropriate description for the item on the customs declaration form?",
            },
          },
          {
            speaker: "them",
            role: "邮局工作人员",
            textEn:
              'Be specific but simple. Write "leather handbag" along with the brand name, quantity — just one — and the value: eight hundred dollars. Under "Purpose," mark it as "Gift." Don\'t use vague descriptions like "accessories" — customs officers may open the package for inspection if the description is unclear.',
            textZh:
              '写具体但简洁。写"leather handbag"加上品牌名、数量——1件——和价值：800美元。在"用途"下面勾选"Gift"。不要用"accessories"这种模糊描述——如果描述不清楚，海关人员可能会开箱检查。',
            casualVersion: "Be specific but simple. 'Leather handbag' or 'fashion accessory'. Don't use vague stuff like 'gift' or 'personal item'.",
            formalityVariants: {
              casual: "Be specific but simple. 'Leather handbag' or 'fashion accessory'. Don't use vague stuff like 'gift' or 'personal item'.",
              standard: "Be specific but simple. Write 'leather handbag' or 'fashion accessory'. Avoid vague terms like 'gift' or 'personal item'.",
              formal: "Please ensure the description is specific yet concise. For example, 'leather handbag' or 'fashion accessory' would be appropriate. Kindly refrain from using ambiguous terms such as 'gift' or 'personal item'.",
            },
            keyPhrases: [
              { en: "specific but simple", zh: "具体但简洁" },
              { en: "brand name", zh: "品牌名" },
              { en: "vague descriptions", zh: "模糊描述" },
              { en: "inspection", zh: "检查" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  'Keep it clear and to the point. "Leather handbag, [brand], 1 piece, $800." Put "Gift" as the purpose. Don\'t be too vague or customs might flag it and open the box.',
                textZh: '写清楚直接就行。"皮手袋，[品牌]，1件，$800"。用途写"Gift"。别太笼统不然海关可能标记开箱。',
                actionHint: "flag it = 标记/注意",
                frequency: "common",
              },
              {
                textEn:
                  'Just be straight about it — "leather handbag" with the brand, one piece, $800, purpose: gift. If you write something generic like "accessories," that raises red flags and they\'ll open it up.',
                textZh:
                  '就直说——"皮手袋"加品牌名，1件，$800，用途：礼物。如果写个笼统的比如"配饰"，会引起注意然后被开箱。',
                actionHint: "raises red flags = 引起警觉/注意",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Is there anything special I should do to pack it? I want to make sure it arrives safely.",
            textZh: "明白了。包装上有什么特别注意的吗？我想确保安全到达。",
            casualVersion: "Got it. Anything special for packing? Wanna make sure it gets there safe.",
            commonMistake: {
              wrong: "Got it. Is there anything special I should do to pack it? I want to sure it arrives safely.",
              correct: "Got it. Is there anything special I should do to pack it? I want to make sure it arrives safely.",
              explanation: "“make sure”是固定搭配，意为“确保”。",
            },
            formalityVariants: {
              casual: "Got it. Anything special for packing? Wanna make sure it gets there safe.",
              standard: "Got it. Is there anything special I should do to pack it? I want to make sure it arrives safely.",
              formal: "Understood. Are there any particular recommendations for packaging this item? I wish to ensure its safe arrival.",
            },
          },
          {
            speaker: "them",
            role: "邮局工作人员",
            textEn:
              "Wrap the handbag in bubble wrap and place it in a sturdy box. Fill any empty space with packing paper so it doesn't shift around. We sell bubble wrap, tape, and boxes here if you need any. For a valuable item, I'd also recommend marking the box as \"Fragile\" — I can give you a sticker for that.",
            textZh:
              '用气泡膜包好手袋，放进一个结实的箱子里。用包装纸填满空隙，防止晃动。如果您需要的话，我们这里卖气泡膜、胶带和箱子。贵重物品的话，我还建议在箱子上贴"易碎"标签——我可以给您一个贴纸。',
            casualVersion: "Bubble wrap the handbag, then put it in a sturdy box. Fill empty spaces with packing paper so it doesn't move. We sell bubble wrap, tape, and boxes if you need 'em. For valuable stuff, I'd also recommend 'FRAGILE' stickers on the box.",
            formalityVariants: {
              casual: "Bubble wrap the handbag, then put it in a sturdy box. Fill empty spaces with packing paper so it doesn't move. We sell bubble wrap, tape, and boxes if you need 'em. For valuable stuff, I'd also recommend 'FRAGILE' stickers on the box.",
              standard: "Wrap the handbag in bubble wrap and place it in a sturdy box. Fill any empty space with packing paper so it doesn't shift around. We sell bubble wrap, tape, and boxes here if you need them. For valuable items, I'd also recommend putting 'FRAGILE' stickers on the box.",
              formal: "Please wrap the handbag securely in bubble wrap and then place it within a robust box. Ensure any void spaces are filled with packing paper to prevent movement during transit. We do stock bubble wrap, tape, and various box sizes if required. For valuable articles, I would additionally suggest affixing 'FRAGILE' labels to the exterior of the box.",
            },
            keyPhrases: [
              { en: "bubble wrap", zh: "气泡膜" },
              { en: "sturdy box", zh: "结实的箱子" },
              { en: "packing paper", zh: "包装纸" },
              { en: "doesn't shift around", zh: "不会晃动" },
              { en: "Fragile", zh: "易碎" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Bubble wrap it good, stick it in a solid box, and stuff the gaps with paper so it doesn't bounce around. We've got packing supplies here if you need 'em. And I'll slap a \"Fragile\" sticker on it for you.",
                textZh: '用气泡膜包好，放进结实的箱子，空隙用纸塞满别晃来晃去。我们这有包装材料。我帮你贴个"易碎"贴。',
                actionHint: "stuff the gaps = 塞满空隙, bounce around = 晃来晃去",
                frequency: "common",
              },
              {
                textEn:
                  "You'll want plenty of bubble wrap, a good sturdy box, and fill in the dead space. We sell all that stuff right here. For something this valuable, let me put a Fragile label on it too.",
                textZh:
                  "多用气泡膜，找个结实的箱子，把空的地方填满。这些东西我们都有卖。这么贵重的东西我帮你贴个易碎标签。",
                actionHint: "dead space = 空隙/多余空间",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take a box and some bubble wrap. What's the total cost including shipping and insurance?",
            textZh: "我要一个箱子和一些气泡膜。包括运费和保险在内一共多少钱？",
            casualVersion: "I'll take a box and some bubble wrap. What's the total, with shipping and insurance?",
            commonMistake: {
              wrong: "I take a box and some bubble wrap. How much is total price, including shipping and insurance?",
              correct: "I'll take a box and some bubble wrap. What's the total, including shipping and insurance?",
              explanation: "“I'll take”比“I take”更自然；“What's the total”是更地道的提问方式。",
            },
            formalityVariants: {
              casual: "I'll take a box and some bubble wrap. What's the total, with shipping and insurance?",
              standard: "I'll take a box and some bubble wrap. What's the total, including shipping and insurance?",
              formal: "I would like to purchase a box and some bubble wrap. Could you please provide the total cost, inclusive of shipping and insurance?",
            },
          },
          {
            speaker: "them",
            role: "邮局工作人员",
            textEn:
              "Let me add it all up. The Express International shipping is sixty-seven fifty, extra insurance for eight hundred dollars of coverage is eighteen dollars, the box is three fifty, and the bubble wrap is two dollars. Your total comes to ninety-one dollars even. Would you like to pay by card?",
            textZh:
              "我加一下。特快国际运费67.50美元，800美元保额的额外保险18美元，箱子3.50美元，气泡膜2美元。总共91美元整。刷卡吗？",
            casualVersion: "Lemme add this up. Express Int'l shipping is sixty-seven fifty, extra insurance for $800 is eighteen bucks, box is three fifty, bubble wrap two dollars. Total's ninety-one bucks even. Card?",
            formalityVariants: {
              casual: "Lemme add this up. Express Int'l shipping is sixty-seven fifty, extra insurance for $800 is eighteen bucks, box is three fifty, bubble wrap two dollars. Total's ninety-one bucks even. Card?",
              standard: "Let me add it all up. The Express International shipping is sixty-seven fifty, extra insurance for eight hundred dollars of coverage is eighteen dollars, the box is three fifty, and the bubble wrap is two dollars. Your total comes to ninety-one dollars even. Would you like to pay by card?",
              formal: "Allow me to calculate the full amount. The Express International shipping charges are sixty-seven dollars and fifty cents, the additional insurance for eight hundred dollars of coverage is eighteen dollars, the box is three dollars and fifty cents, and the bubble wrap is two dollars. Your grand total amounts to precisely ninety-one dollars. Would you prefer to pay by credit card?",
            },
            keyPhrases: [
              { en: "add it all up", zh: "加起来" },
              { en: "total comes to", zh: "总共是" },
              { en: "ninety-one dollars even", zh: "91美元整" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Alright, let me tally this up — shipping's $67.50, insurance is $18, box $3.50, bubble wrap $2. Grand total: $91 even. Cash or card?",
                textZh: "好的，我算一下——运费67.50，保险18，箱子3.50，气泡膜2块。总共91美元整。现金还是刷卡？",
                actionHint: "tally up = 合计, grand total = 总计",
                frequency: "common",
              },
              {
                textEn:
                  "So that's 67.50 for shipping, 18 for insurance, 3.50 for the box, and 2 for the wrap. Ninety-one bucks total. How do you wanna pay?",
                textZh: "运费67.50，保险18，箱子3.50，气泡膜2块。一共91块。怎么付？",
                actionHint: "how do you wanna pay 非常日常的问法",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, card please. And I'll need the tracking number and insurance receipt.",
            textZh: "好的，刷卡。我需要追踪号码和保险收据。",
            casualVersion: "Yeah, card. And I'll need the tracking number and insurance receipt.",
            commonMistake: {
              wrong: "Yes, card please. And I need tracking number and insurance receipt.",
              correct: "Yes, card please. And I'll need the tracking number and insurance receipt.",
              explanation: "“I need”听起来过于直接，加“I'll”更自然。追踪号码和收据是特定物品，需用“the”。",
            },
            formalityVariants: {
              casual: "Yeah, card. And I'll need the tracking number and insurance receipt.",
              standard: "Yes, card please. And I'll need the tracking number and insurance receipt.",
              formal: "Yes, I will pay by card. Additionally, I will require the tracking number and the insurance receipt.",
            },
          },
          {
            speaker: "them",
            role: "邮局工作人员",
            textEn:
              "Here's everything — your tracking number, insurance documentation, and payment receipt. Keep all of these together. If anything happens during shipping, call 1-800-ASK-USPS or go to usps.com to start a claim. The package should arrive within five business days. Safe travels!",
            textZh:
              "这些都给您——追踪号码、保险凭证和付款收据。把这些放在一起保管好。如果运输过程中有任何问题，打1-800-ASK-USPS或去usps.com发起理赔。包裹应该在5个工作日内到达。旅途平安！",
            casualVersion: "Here ya go—tracking number, insurance cert, and payment receipt. Keep 'em together. Any issues, call 1-800-ASK-USPS or hit usps.com to file a claim. Should arrive in 5 business days. Safe travels!",
            formalityVariants: {
              casual: "Here ya go—tracking number, insurance cert, and payment receipt. Keep 'em together. Any issues, call 1-800-ASK-USPS or hit usps.com to file a claim. Should arrive in 5 business days. Safe travels!",
              standard: "Here you go—your tracking number, insurance certificate, and payment receipt. Keep these together for your records. If there are any issues during transit, call 1-800-ASK-USPS or visit usps.com to file a claim. The package should arrive within 5 business days. Safe travels!",
              formal: "Here are your documents: the tracking number, insurance certificate, and payment receipt. Please retain these together for your official records. Should any complications arise during transit, kindly contact 1-800-ASK-USPS or visit usps.com to initiate a claim. The package is estimated to arrive within 5 business days. We wish you safe travels!",
            },
            keyPhrases: [
              { en: "insurance documentation", zh: "保险凭证" },
              { en: "payment receipt", zh: "付款收据" },
              { en: "start a claim", zh: "发起理赔" },
              { en: "safe travels", zh: "旅途平安" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Here you go — tracking, insurance papers, and your receipt. Keep 'em all together. If anything goes sideways, call the USPS hotline or go online to file a claim. Should be there in about five days. Have a great trip!",
                textZh:
                  "给你——追踪号、保险文件和收据。放一起保管好。如果出了问题打USPS热线或在线理赔。大约五天到。旅途愉快！",
                actionHint: "goes sideways = 出问题",
                frequency: "common",
              },
              {
                textEn:
                  "All set! Here's your paperwork — tracking, insurance, and the receipt. Hold on to all of that. Any issues, just reach out to USPS. Should land in China in five business days. Take care!",
                textZh: "搞定了！这是你的文件——追踪号、保险和收据。都留好。有问题就联系USPS。五个工作日到中国。保重！",
                actionHint: "land in China = 到达中国",
                frequency: "common",
              },
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
            commonMistake: {
              wrong: "I want to send money to China.",
              correct: "I'd like to send money to China.",
              explanation: "I want 听起来不够礼貌，用 I'd like to 更委婉客气。",
            },
            formalityVariants: {
              casual: "Hey, gotta send money to China. Can I do an international wire here?",
              standard: "Hi, I need to send money to China. Can I do an international wire transfer here?",
              formal:
                "Good morning/afternoon, I would like to inquire about initiating an international wire transfer to China. Is that a service you provide at this location?",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn:
              "Yes, we can help with that. Do you have an account with us, or would you like to do a walk-in wire transfer? Walk-in transfers have a slightly higher fee.",
            textZh: "可以的。您在我们银行有账户吗，还是要办理临柜汇款？临柜汇款手续费稍高一些。",
            keyPhrases: [
              { en: "international wire transfer", zh: "国际汇款" },
              { en: "walk-in wire transfer", zh: "临柜汇款" },
              { en: "slightly higher fee", zh: "手续费稍高" },
            ],
            variations: [
              {
                textEn: "Of course. Are you an existing customer? Account holders get a better rate on wire transfers.",
                textZh: "当然可以。您是我们的客户吗？有账户的话汇款费率更优惠。",
              },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure, we do international wires. Do you bank with us? If not, no worries — we can still do it, just costs a bit more.",
                textZh: "可以，我们办国际汇款。你在我们这开户了吗？没有也没关系——一样能办，就是费用高一点。",
                actionHint: "bank with us = 在我们这开户",
                frequency: "common",
              },
              {
                textEn:
                  "Absolutely. Are you one of our customers, or is this a one-time thing? Non-customers can do walk-in wires too, just with a higher fee.",
                textZh: "当然可以。你是我们的客户还是临时来办的？非客户也能办临柜汇款，就是手续费高一些。",
                actionHint: "one-time thing = 临时/一次性的",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, we can. Got an account with us, or just wanna do a walk-in wire? Walk-ins cost a bit more.",
            formalityVariants: {
              casual:
                "Sure, we can help. Got an account with us, or are you just doing a walk-in? Walk-ins are a little more expensive.",
              standard:
                "Yes, we can help with that. Do you have an account with us, or would you like to do a walk-in wire transfer? Walk-in transfers have a slightly higher fee.",
              formal:
                "Certainly, we can facilitate that for you. May I inquire if you hold an account with our institution, or are you intending to conduct this as a non-account holder? Please be advised that non-account holder transactions typically incur a marginally higher service charge.",
            },
          },
          {
            speaker: "you",
            textEn: "I don't have an account here. How much is the fee for a walk-in transfer?",
            textZh: "我没有账户。临柜汇款手续费多少？",
            casualVersion: "Nah, don't have an account. What's the fee for a walk-in?",
            formalityVariants: {
              casual: "Nope, no account. How much is the walk-in fee?",
              standard: "I don't have an account here. How much is the fee for a walk-in transfer?",
              formal:
                "I do not currently hold an account with your institution. Could you please inform me of the applicable fee for a walk-in wire transfer?",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn:
              "The wire transfer fee is $45 for non-account holders. The recipient's bank in China may also charge a receiving fee — typically around $10 to $20. And there's the exchange rate to consider. Our current rate is 1 dollar to 7.18 yuan.",
            textZh:
              "非账户客户的汇款手续费是45美元。中国收款银行也可能收一笔接收费——通常10到20美元左右。还要考虑汇率。我们目前的汇率是1美元兑7.18元人民币。",
            keyPhrases: [
              { en: "wire transfer fee", zh: "汇款手续费" },
              { en: "non-account holders", zh: "非账户客户" },
              { en: "receiving fee", zh: "接收费" },
              { en: "exchange rate", zh: "汇率" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It's 45 bucks for the wire if you don't have an account. On top of that, the bank on the other end usually takes a cut — 10 to 20 dollars. And then there's the exchange rate — we're at 7.18 yuan to the dollar right now.",
                textZh:
                  "没有账户的话汇款费45块。另外对方银行通常也会扣一笔——10到20美元。然后就是汇率——我们现在是7.18人民币兑1美元。",
                actionHint: "takes a cut = 收一笔费用（口语）",
                frequency: "common",
              },
              {
                textEn:
                  "For walk-in customers, the fee is $45. Keep in mind, the receiving bank might charge their own fee too — usually 10 to 20 bucks. Our exchange rate today is 7.18.",
                textZh: "临柜客户手续费45美元。注意收款银行可能也会收费——通常10到20块。我们今天的汇率是7.18。",
                actionHint: "keep in mind = 注意/记住",
                frequency: "common",
              },
            ],
            vocabNotes: {
              "exchange rate": {
                meaningInContext: "在这句话里表示：货币兑换比率，一种货币换另一种货币的价格",
                similarUsage: "类似用法：The exchange rate changes daily.",
              },
            },
            culturalNote:
              "银行给的汇率通常比市场中间价差一些，这个差价也是银行的收入之一。可以对比几家银行的汇率再决定。",
            casualVersion:
              "Wire fee's 45 bucks if you don't have an account. China's bank might hit 'em with a 10-20 dollar receiving fee too. Plus, gotta think about the exchange rate. We're at 1 dollar to 7.18 yuan right now.",
            formalityVariants: {
              casual:
                "It's $45 for non-account holders. The bank in China might charge $10-20 to receive it. And our exchange rate is 1 to 7.18 yuan.",
              standard:
                "The wire transfer fee is $45 for non-account holders. The recipient's bank in China may also charge a receiving fee — typically around $10 to $20. And there's the exchange rate to consider. Our current rate is 1 dollar to 7.18 yuan.",
              formal:
                "For clients without an existing account, the wire transfer fee is $45. Please be aware that the receiving bank in China may impose an additional processing fee, generally ranging from $10 to $20. Furthermore, the prevailing exchange rate for your consideration is currently 1 US dollar to 7.18 Chinese yuan.",
            },
          },
          {
            speaker: "you",
            textEn: "That exchange rate seems a bit low. Is that negotiable, or is there a better option?",
            textZh: "这个汇率好像有点低。可以商量吗，或者有更好的选择吗？",
            casualVersion: "That rate seems kinda low. Can I haggle, or is there somethin' better?",
            formalityVariants: {
              casual: "That rate feels low. Can we negotiate, or is there a better way?",
              standard: "That exchange rate seems a bit low. Is that negotiable, or is there a better option?",
              formal:
                "I find the quoted exchange rate to be somewhat disadvantageous. Is there any flexibility in negotiating this rate, or are alternative options available that might offer a more favorable conversion?",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn:
              "The rate is set by the bank and updates daily — unfortunately it's not negotiable for individual transfers. If you're sending over $5,000, we do offer a slightly better rate. You could also consider using a service like Wise or Western Union — they sometimes offer more competitive rates.",
            textZh:
              "汇率由银行设定，每天更新——单笔汇款很遗憾不能协商。如果汇款超过5000美元，我们确实提供稍好的汇率。您也可以考虑使用Wise或西联汇款等服务——它们有时候汇率更有竞争力。",
            keyPhrases: [
              { en: "not negotiable", zh: "不能协商" },
              { en: "updates daily", zh: "每天更新" },
              { en: "more competitive rates", zh: "更有竞争力的汇率" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Unfortunately I can't budge on the rate — it's set by the bank and changes every day. For bigger amounts over $5K, we do sweeten the deal a bit. Or you could shop around — Wise and those online services sometimes beat our rate.",
                textZh:
                  "很遗憾汇率我动不了——银行定的，每天变。超过5000的大额我们会给好一点的价。或者你可以比比价——Wise那些线上服务有时候比我们好。",
                actionHint: "can't budge = 无法变动, sweeten the deal = 给更好的条件",
                frequency: "common",
              },
              {
                textEn:
                  "It's a fixed rate — same for everyone, updates daily. Over five grand, they give us a little wiggle room on the rate. But honestly, places like Wise might give you a better deal for smaller amounts.",
                textZh:
                  "固定汇率——所有人一样，每天更新。超过五千他们给我们一点调整空间。说实话，Wise那些平台小额汇款可能更划算。",
                actionHint: "wiggle room = 调整余地",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Rate's fixed by the bank, updates daily — no haggling for single transfers, sorry. If you're sending over five grand, we do offer a better rate. Or check out Wise or Western Union — sometimes they've got better rates.",
            formalityVariants: {
              casual:
                "The rate's set by the bank, updates daily — can't negotiate for individual transfers, unfortunately. Over $5,000 gets a slightly better rate. Or try Wise or Western Union; they sometimes have better rates.",
              standard:
                "The rate is set by the bank and updates daily — unfortunately it's not negotiable for individual transfers. If you're sending over $5,000, we do offer a slightly better rate. You could also consider using a service like Wise or Western Union — they sometimes offer more competitive rates.",
              formal:
                "The exchange rate is determined by the bank and is subject to daily adjustments; regrettably, it is not negotiable for individual transactions. However, for transfers exceeding $5,000, we can provide a marginally more favorable rate. Additionally, you might explore alternative services such as Wise or Western Union, as they occasionally present more competitive rates.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'll go ahead with the transfer here. I want to send $2,000. What information do I need from the recipient?",
            textZh: "那就在这里汇吧。我要汇2000美元。需要收款方的什么信息？",
            casualVersion: "Okay, I'll just do it here. Sending two grand. What info do I need from them?",
            formalityVariants: {
              casual: "Alright, I'll just do it here. Sending $2,000. What info do I need from the person?",
              standard:
                "I'll go ahead with the transfer here. I want to send $2,000. What information do I need from the recipient?",
              formal:
                "Very well, I will proceed with the transfer at this institution. My intention is to remit $2,000. Could you please specify what information is required from the recipient?",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn:
              "I'll need the recipient's full name — in English and Chinese characters if possible — their bank name, bank address, account number, and the bank's SWIFT code. Do you have all of that?",
            textZh:
              "我需要收款人的全名——如果可以的话提供英文和中文名——收款银行名称、银行地址、账号和银行的SWIFT代码。这些信息您都有吗？",
            keyPhrases: [
              { en: "recipient's full name", zh: "收款人全名" },
              { en: "bank name", zh: "银行名称" },
              { en: "account number", zh: "账号" },
              { en: "SWIFT code", zh: "SWIFT代码" },
            ],
            culturalNote:
              "SWIFT code 是银行的国际识别码，跨国汇款必需。中国各银行的SWIFT code可以在银行官网查到或提前问好收款人。",
            alternativeExpressions: [
              {
                textEn:
                  "I'm gonna need a few things — the person's full name in English and Chinese if you've got it, their bank info, account number, and the SWIFT code. Got all that handy?",
                textZh: "我需要几样东西——收款人中英文全名、银行信息、账号和SWIFT代码。手边都有吗？",
                actionHint: "got all that handy = 手边都有吗",
                frequency: "common",
              },
              {
                textEn:
                  "To set up the wire, I need the recipient's name, their bank's name and address, the account number, and the SWIFT code. The SWIFT code is like the bank's international ID — do you have it?",
                textZh:
                  "办理汇款的话我需要收款人姓名、银行名称和地址、账号以及SWIFT代码。SWIFT代码就是银行的国际识别码——你有吗？",
                actionHint: "用简单比喻解释SWIFT code",
                frequency: "common",
              },
            ],
            casualVersion:
              "Need their full name — English and Chinese if you can — their bank name, address, account number, and the bank's SWIFT code. Got all that?",
            formalityVariants: {
              casual:
                "I'll need their full name (English/Chinese if you have it), bank name, address, account number, and SWIFT code. Got it?",
              standard:
                "I'll need the recipient's full name — in English and Chinese characters if possible — their bank name, bank address, account number, and the bank's SWIFT code. Do you have all of that?",
              formal:
                "I will require the recipient's complete name, preferably in both English and Chinese characters. Additionally, I will need the name of their bank, its full address, their account number, and the bank's SWIFT code. Do you have access to all of this information?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I have it all here on my phone. How long will it take for the money to arrive?",
            textZh: "有的，都在手机上。钱多久能到？",
            casualVersion: "Yeah, got it right here on my phone. How long till the money gets there?",
            formalityVariants: {
              casual: "Yep, it's all on my phone. When will the money arrive?",
              standard: "Yes, I have it all here on my phone. How long will it take for the money to arrive?",
              formal:
                "Yes, I have all the necessary details readily available on my mobile device. Could you please advise on the estimated timeframe for the funds to reach the recipient?",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn:
              "International wire transfers to China typically take 2 to 5 business days. Occasionally it can take a bit longer if the receiving bank needs to verify the transaction. You'll receive a confirmation number — keep it for your records. If the money hasn't arrived after 5 business days, contact us with that number.",
            textZh:
              "汇往中国的国际汇款通常需要2到5个工作日。如果收款银行需要核实交易，偶尔会稍长一些。您会收到一个确认号——请保留好。如果5个工作日后钱还没到，带着那个号码联系我们。",
            keyPhrases: [
              { en: "2 to 5 business days", zh: "2到5个工作日" },
              { en: "verify the transaction", zh: "核实交易" },
              { en: "confirmation number", zh: "确认号" },
              { en: "keep it for your records", zh: "请保留好" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Usually lands in 2 to 5 business days. Sometimes the bank on the other end needs to do some checks, so it could take a little longer. You'll get a confirmation number — hang on to that. If nothing shows up after 5 days, give us a call.",
                textZh:
                  "通常2到5个工作日到。有时候对方银行需要核查，可能会久一点。你会拿到确认号——留好。5天后还没到就打电话给我们。",
                actionHint: "lands = 到达（口语）, shows up = 出现/到账",
                frequency: "common",
              },
              {
                textEn:
                  "For China, figure 2 to 5 business days. Could be a touch longer if their bank flags it for review. I'll give you a confirmation number — don't lose it, you'll need it if there's a hiccup.",
                textZh:
                  "寄到中国的话大概2到5个工作日。如果他们银行要审查可能稍长一点。我给你确认号——别弄丢了，出问题的时候需要。",
                actionHint: "a touch longer = 稍长一点, hiccup = 小问题",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Wires to China usually take 2 to 5 business days. Sometimes a bit longer if the bank there needs to double-check stuff. You'll get a confirmation number — hold onto it. If it's not there after 5 days, hit us up with that number.",
            formalityVariants: {
              casual:
                "Wires to China usually take 2-5 business days. Might be a bit longer if their bank verifies it. You'll get a confirmation number, keep it. If it's not there after 5 days, call us with that number.",
              standard:
                "International wire transfers to China typically take 2 to 5 business days. Occasionally it can take a bit longer if the receiving bank needs to verify the transaction. You'll receive a confirmation number — keep it for your records. If the money hasn't arrived after 5 business days, contact us with that number.",
              formal:
                "International wire transfers destined for China generally require a processing period of 2 to 5 business days. In some instances, delays may occur if the recipient's bank necessitates further verification of the transaction. You will be provided with a confirmation number, which we advise you to retain for your records. Should the funds not arrive within 5 business days, please contact us with that reference number.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. So the total cost is $2,000 plus the $45 fee — $2,045 altogether?",
            textZh: "明白了。那总费用是2000美元加上45美元手续费——一共2045美元？",
            casualVersion: "Gotcha. So total's two grand plus the 45 bucks — 2045 altogether?",
            commonMistake: {
              wrong: "So the total cost is... 2045 altogether?",
              correct: "So the total cost is... $2,045 in total, correct?",
              explanation: "altogether 稍显口语化，用 in total, correct? 或 all told? 更自然。",
            },
            formalityVariants: {
              casual: "Okay, so it's $2,000 plus $45 — $2,045 total?",
              standard: "Got it. So the total cost is $2,000 plus the $45 fee — $2,045 altogether?",
              formal:
                "Understood. Therefore, the aggregate cost would be $2,000 for the principal amount plus the $45 service charge, totaling $2,045. Is that accurate?",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn:
              "That's correct. The recipient will receive approximately 14,360 yuan after our exchange rate conversion. Would you like to proceed? I'll need a valid photo ID to complete the transfer.",
            textZh:
              "没错。按我们的汇率换算，收款人将收到大约14360元人民币。要办理吗？我需要一个有效的带照片证件来完成汇款。",
            keyPhrases: [
              { en: "approximately", zh: "大约" },
              { en: "exchange rate conversion", zh: "汇率换算" },
              { en: "proceed", zh: "继续办理" },
              { en: "valid photo ID", zh: "有效的带照片证件" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep, $2,045 total. On the other end, they'll get about 14,360 yuan. Wanna go ahead with it? Just need to see a photo ID.",
                textZh: "对，一共2045美元。对方会收到大约14360元人民币。要继续吗？出示一下带照片的证件就行。",
                actionHint: "wanna go ahead = 要继续吗（口语）",
                frequency: "common",
              },
              {
                textEn:
                  "That's right — $2,045 from you, and roughly 14,360 yuan arrives on the other side. Ready to pull the trigger? I just need a valid ID with a photo.",
                textZh: "对的——你这边2045美元，对方收到大约14360人民币。确定要办吗？我只需要一个带照片的有效证件。",
                actionHint: "pull the trigger = 做决定/确认办理",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep. They'll get about 14,360 yuan after the conversion. Wanna go ahead? I'll need a valid photo ID to finish up.",
            formalityVariants: {
              casual: "Yup. They'll get around 14,360 yuan. Wanna do it? I'll need your photo ID.",
              standard:
                "That's correct. The recipient will receive approximately 14,360 yuan after our exchange rate conversion. Would you like to proceed? I'll need a valid photo ID to complete the transfer.",
              formal:
                "That is correct. The recipient will be credited with approximately 14,360 yuan following the application of our current exchange rate. Do you wish to proceed with this transaction? Please note that a valid form of photographic identification will be required to finalize the transfer.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, let's do it. Here's my passport.",
            textZh: "好的，办吧。这是我的护照。",
            casualVersion: "Yeah, let's. Here's my passport.",
            formalityVariants: {
              casual: "Yep, let's do it. Passport.",
              standard: "Yes, let's do it. Here's my passport.",
              formal: "Yes, I would like to proceed. I have my passport available for identification.",
            },
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
            textEn:
              "Hi, I sent a wire transfer to China five days ago and the money still hasn't arrived. Here's my confirmation number.",
            textZh: "你好，我五天前汇了一笔钱到中国，钱还没到。这是我的确认号。",
            casualVersion:
              "Hi, sent a wire to China five days ago, and the money still hasn't arrived. Here's my confirmation #.",
            culturalNote: "美国办理业务时更直接，无需像中文那样先说“请问”",
            commonMistake: {
              wrong: "The money didn't arrive.",
              correct: "The money still hasn't arrived.",
              explanation: "对于持续未完成的动作，常用现在完成时haven't arrived，而不是简单过去时。",
            },
            formalityVariants: {
              casual:
                "Hey, sent a wire to China five days ago, money's still not there. Got my confirmation number right here.",
              standard:
                "Hi, I sent a wire transfer to China five days ago and the money still hasn't arrived. Here's my confirmation number.",
              formal:
                "Good morning/afternoon, I am contacting you regarding a wire transfer to China that I initiated five days ago. The funds have not yet been received by the beneficiary. I have my confirmation number available.",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn:
              'Let me look that up for you... I can see the transfer was initiated on Monday. It shows as "in process" on our end. Sometimes international transfers get held up by intermediary banks — there\'s often a correspondent bank between us and the Chinese bank.',
            textZh:
              '我帮您查一下……可以看到汇款是周一发起的。在我们这边显示"处理中"。国际汇款有时候会在中间行那里卡住——我们和中国银行之间通常有一个代理行。',
            keyPhrases: [
              { en: "look that up", zh: "帮您查一下" },
              { en: "initiated", zh: "发起的" },
              { en: "in process", zh: "处理中" },
              { en: "intermediary banks", zh: "中间行" },
              { en: "correspondent bank", zh: "代理行" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  'Let me pull that up... Okay, it went out Monday and it\'s still showing "in process." That happens sometimes — international wires go through a middleman bank, and they can slow things down.',
                textZh:
                  '我查一下……好的，周一发出的，还在显示"处理中"。有时候就这样——国际汇款要经过中间银行，会慢一些。',
                actionHint: "pull that up = 查一下, middleman bank = 中间银行（口语）",
                frequency: "common",
              },
              {
                textEn:
                  'Give me a sec to look into it... So the wire was sent Monday, and on our side it says "processing." International transfers sometimes get stuck at the correspondent bank — that\'s the bank in between.',
                textZh:
                  '等我查查……汇款周一发出的，我们这边显示"处理中"。国际汇款有时候会卡在代理行——就是中间的那个银行。',
                actionHint: "get stuck = 卡住",
                frequency: "common",
              },
            ],
            vocabNotes: {
              "correspondent bank": {
                meaningInContext: "在这句话里表示：在国际汇款中充当中间人角色的银行，帮助完成跨国资金转移",
                similarUsage: "类似用法：The delay was caused by the correspondent bank in Hong Kong.",
              },
            },
            casualVersion: "Lemme check that for ya... Looks like the transfer went out Monday. Shows as \\",
            formalityVariants: {
              casual: "Lemme check... Yeah, looks like it went out Monday. Shows as \\",
              standard: "Let me look that up for you... I can see the transfer was initiated on Monday. It shows as \\",
              formal:
                "Please allow me a moment to investigate this for you. My records indicate the transfer was initiated on Monday. It currently shows as \\",
            },
          },
          {
            speaker: "you",
            textEn: "Is there any way to track where the money is right now?",
            textZh: "有办法追踪钱现在在哪里吗？",
            casualVersion: "Any way to track where the money is now?",
            commonMistake: {
              wrong: "How can I track the money?",
              correct: "Is there any way to track where the money is right now?",
              explanation: "表达“是否有办法”时，'Is there any way to...'更自然。",
            },
            formalityVariants: {
              casual: "Can we track where the money is?",
              standard: "Is there any way to track where the money is right now?",
              formal: "Would it be possible to ascertain the current location of the funds?",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn:
              "I can submit a trace request — that will follow the money through the SWIFT network. It usually takes 24 to 48 hours to get a response. There may be a $25 trace fee. Would you like me to do that?",
            textZh:
              "我可以提交一个追踪请求——会通过SWIFT网络追查这笔钱。通常24到48小时内有回复。可能需要25美元的追踪费。要我办理吗？",
            keyPhrases: [
              { en: "trace request", zh: "追踪请求" },
              { en: "SWIFT network", zh: "SWIFT网络" },
              { en: "trace fee", zh: "追踪费" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "What I can do is put in a trace — basically track where your money is in the SWIFT system. Takes about a day or two to hear back. There's a $25 fee for that. Want me to go ahead?",
                textZh:
                  "我能做的是提交追踪——基本上就是在SWIFT系统里查你的钱在哪。大概一两天有回复。收25美元。要我办吗？",
                actionHint: "put in a trace = 提交追踪",
                frequency: "common",
              },
              {
                textEn:
                  "I can file a trace on the wire — it pings the SWIFT network to find out exactly where the funds are. Usually 24 to 48 hours for a reply. It'll be 25 bucks though. Should I?",
                textZh:
                  "我可以对这笔汇款发起追踪——通过SWIFT网络定位资金在哪。通常24到48小时有回复。不过要25块。需要吗？",
                actionHint: "pings = 发送请求查询",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "I can put in a trace request — that tracks it through SWIFT. Takes 24-48 hours for a reply. Might be a $25 trace fee. Wanna do it?",
            formalityVariants: {
              casual:
                "Yeah, I can start a trace. It goes through SWIFT, usually takes a day or two for a response. Might cost 25 bucks. Want me to?",
              standard:
                "I can submit a trace request — that will follow the money through the SWIFT network. It usually takes 24 to 48 hours to get a response. There may be a $25 trace fee. Would you like me to do that?",
              formal:
                "I am able to initiate a trace request, which will track the funds via the SWIFT network. A response is typically received within 24 to 48 business hours. Please be advised there may be a $25 fee associated with this service. Would you like to proceed?",
            },
          },
          {
            speaker: "you",
            textEn:
              "Yes, please do that. Also, I just realized I may have given you the wrong account number. Is it possible to correct it?",
            textZh: "好的，请帮我办。另外，我刚发现账号可能给错了。能改吗？",
            casualVersion:
              "Yeah, go ahead. Also, just realized I might've given you the wrong account number. Can we fix it?",
            commonMistake: {
              wrong: "Can I correct it?",
              correct: "Is it possible to correct it?",
              explanation: "询问可能性时，用'Is it possible to...'更礼貌且常用。",
            },
            formalityVariants: {
              casual: "Yes, do that. And, uh, I just realized I might've messed up the account number. Can we fix it?",
              standard:
                "Yes, please do that. Also, I just realized I may have given you the wrong account number. Is it possible to correct it?",
              formal:
                "Yes, please proceed with the trace request. Furthermore, I have just realized that I may have provided an incorrect account number. Would it be possible to amend this error?",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn:
              "If the transfer hasn't been credited to the wrong account yet, we may be able to amend it. But if it's already been deposited, we'll need to initiate a recall — and that can take several weeks. The recall fee is $35. Can you give me the correct account number so I can compare?",
            textZh:
              "如果汇款还没入错误的账户，我们也许能修改。但如果已经入账了，我们需要发起一个撤回——那可能需要几周。撤回费用是35美元。能给我正确的账号比对一下吗？",
            keyPhrases: [
              { en: "credited to", zh: "入账到" },
              { en: "amend", zh: "修改" },
              { en: "recall", zh: "撤回" },
              { en: "recall fee", zh: "撤回费用" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "If the money hasn't landed in the wrong account yet, we might be able to fix the details. But if it's already gone through, we'd have to do a recall, which takes weeks and costs $35. What's the right account number?",
                textZh:
                  "如果钱还没到错误的账户，我们也许能改信息。但如果已经入账了就得撤回，要花几周而且收35美元。正确账号是什么？",
                actionHint: "landed in = 到达/入账, gone through = 已完成",
                frequency: "common",
              },
              {
                textEn:
                  "We might be able to correct it if it hasn't hit the wrong account yet. Otherwise, it's a recall situation — that's $35 and a few weeks. Let me see the correct number so I can check.",
                textZh: "如果还没到错误账户我们也许能改。不然就得走撤回流程——35美元等几周。给我正确账号我查查。",
                actionHint: "recall situation = 需要撤回的情况",
                frequency: "common",
              },
            ],
            casualVersion:
              "If it hasn't hit the wrong account yet, we might be able to fix it. But if it's already in there, we'd have to recall it — that'll take weeks. Recall fee's $35. Got the right account number for me to compare?",
            formalityVariants: {
              casual:
                "If it hasn't gone into the wrong account yet, we can probably change it. But if it's already in there, we gotta do a recall, and that takes weeks. $35 fee. What's the correct number so I can check?",
              standard:
                "If the transfer hasn't been credited to the wrong account yet, we may be able to amend it. But if it's already been deposited, we'll need to initiate a recall — and that can take several weeks. The recall fee is $35. Can you give me the correct account number so I can compare?",
              formal:
                "Should the transfer not yet have been credited to an incorrect account, we may be able to facilitate an amendment. However, if the funds have already been deposited, we would be required to initiate a recall, which can extend over several weeks. A recall fee of $35 would apply. Could you please provide the correct account number for verification?",
            },
          },
          {
            speaker: "you",
            textEn: "Here's the correct number. The last two digits were swapped. I'm so sorry about this.",
            textZh: "这是正确的账号。最后两位数字颠倒了。真的很抱歉。",
            casualVersion: "Here's the right number. Last two digits were switched. So sorry about that.",
            commonMistake: {
              wrong: "The last two digits changed.",
              correct: "The last two digits were swapped.",
              explanation: "'swapped'（颠倒）更精确地描述了数字位置的互换，而不是简单的“变了”。",
            },
            formalityVariants: {
              casual: "Right number's here. Swapped the last two. My bad, really sorry.",
              standard: "Here's the correct number. The last two digits were swapped. I'm so sorry about this.",
              formal:
                "This is the correct account number. It appears the final two digits were inadvertently transposed. My sincerest apologies for this oversight.",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn:
              "Don't worry, this happens. Let me check... Good news — the account number you originally gave doesn't match any existing account at the receiving bank, so the transfer is likely being held. We can submit a correction request. It should be resolved within 3 to 5 business days.",
            textZh:
              "别担心，这种情况经常发生。我查一下……好消息——您原来给的账号在收款银行没有匹配到现有账户，所以汇款很可能被挂起了。我们可以提交一个更正请求。应该3到5个工作日内解决。",
            keyPhrases: [
              { en: "doesn't match", zh: "没有匹配到" },
              { en: "being held", zh: "被挂起了" },
              { en: "correction request", zh: "更正请求" },
              { en: "resolved", zh: "解决" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Hey, it happens more than you'd think. Let me check... Okay, good news — that wrong number doesn't match any account over there, so the money's just sitting in limbo. We can fix this. Give it 3 to 5 business days.",
                textZh:
                  "这种事比你想的常见。我查查……好消息——那个错误账号那边没有对应账户，钱就是悬着呢。我们能修改。3到5个工作日。",
                actionHint: "sitting in limbo = 悬而未决/挂着",
                frequency: "common",
              },
              {
                textEn:
                  "No worries, you wouldn't believe how often this happens. Let me look... Oh, that's actually lucky — the wrong number doesn't exist at the bank, so the funds are on hold. I'll submit a correction and it'll be sorted in 3 to 5 days.",
                textZh:
                  "别担心，你不会相信这种事多常见。我看看……还好——那个错误账号在银行不存在，所以钱被挂起了。我提交更正，3到5天搞定。",
                actionHint: "that's actually lucky = 其实还好/算幸运",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "No worries, happens all the time. Lemme check... Good news — that original account number doesn't exist at their bank, so the transfer's probably just on hold. We can send a correction request. Should be sorted in 3-5 business days.",
            formalityVariants: {
              casual:
                "It's fine, this stuff happens. Let me see... Okay, good news — the first account number you gave doesn't exist, so the transfer's probably just stuck. We can send a correction. Should be good in 3-5 days.",
              standard:
                "Don't worry, this happens. Let me check... Good news — the account number you originally gave doesn't match any existing account at the receiving bank, so the transfer is likely being held. We can submit a correction request. It should be resolved within 3 to 5 business days.",
              formal:
                "Please do not be concerned; such occurrences are not uncommon. Allow me a moment to verify... I have positive news: the account number you initially provided does not correspond to an active account at the receiving institution, indicating the transfer is likely in a pending state. We are able to submit a correction request, which should facilitate resolution within 3 to 5 business days.",
            },
          },
          {
            speaker: "you",
            textEn:
              "That's a relief. Will I be charged the trace fee as well, since the problem turned out to be my mistake?",
            textZh: "那就放心了。追踪费也要收吗，毕竟问题是我搞错了？",
            casualVersion: "Whew, that's a relief. Will I still get charged for the trace, since it was my mistake?",
            commonMistake: {
              wrong: "Will I be charged the trace fee too, because problem is my mistake?",
              correct: "Will I be charged the trace fee as well, since the problem turned out to be my mistake?",
              explanation:
                "'As well'比'too'更自然，'since'或'given that'比'because'更口语化，表达“因为”常搭配完整句式。",
            },
            formalityVariants: {
              casual: "Okay, good. Still gotta pay the trace fee, even though it was my fault?",
              standard:
                "That's a relief. Will I be charged the trace fee as well, since the problem turned out to be my mistake?",
              formal:
                "That is reassuring. Regarding the trace fee, will I still be assessed that charge given that the discrepancy originated from my error?",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn:
              "I'll waive the trace fee since we caught the issue early. You'll just need to pay the $35 correction fee. I'll process everything now. You should receive a confirmation email within the hour, and I'll call you when the trace comes back.",
            textZh:
              "追踪费我给您免了，因为发现问题比较早。您只需要付35美元的更正费。我现在就处理。一小时内您会收到确认邮件，追踪结果回来后我会打电话给您。",
            keyPhrases: [
              { en: "waive", zh: "免除" },
              { en: "caught the issue early", zh: "及早发现了问题" },
              { en: "correction fee", zh: "更正费" },
              { en: "confirmation email", zh: "确认邮件" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Tell you what — I'll drop the trace fee since we caught it in time. Just the $35 for the correction. Let me get this going. You'll get an email confirmation within the hour and I'll give you a ring when we hear back.",
                textZh:
                  "这样吧——追踪费我免了因为发现得早。只收35美元更正费。我这就处理。一小时内收到邮件确认，有结果了我打给你。",
                actionHint: "tell you what = 这样吧, give you a ring = 打电话给你",
                frequency: "common",
              },
              {
                textEn:
                  "Since we spotted it early, I'm gonna waive the trace fee. You're just looking at $35 for the correction. I'll knock this out right now and shoot you an email. I'll also call you once the trace comes back.",
                textZh: "发现得早追踪费就免了。只需要35美元更正费。我现在就办好，给你发邮件。追踪有结果了我打给你。",
                actionHint: "knock this out = 搞定这件事, shoot you an email = 给你发邮件",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "I'll waive the trace fee since we caught it quick. Just the $35 correction fee. I'll get everything processed now. You'll get a confirmation email within the hour, and I'll call you when that trace comes back.",
            formalityVariants: {
              casual:
                "I'll get rid of the trace fee since we found it fast. You just pay the $35 correction fee. I'm processing it all now. You'll get an email within an hour, and I'll call you once the trace results are in.",
              standard:
                "I'll waive the trace fee since we caught the issue early. You'll just need to pay the $35 correction fee. I'll process everything now. You should receive a confirmation email within the hour, and I'll call you when the trace comes back.",
              formal:
                "I will waive the trace fee given the timely detection of the issue. You will only be responsible for the $35 correction fee. I will proceed with processing all necessary adjustments immediately. A confirmation email should reach you within the hour, and I will contact you personally upon receipt of the trace results.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you so much for your help. I really appreciate you being so patient with me.",
            textZh: "非常感谢你的帮助。真的很感谢你这么耐心。",
            casualVersion: "Thanks so much for your help. Really appreciate your patience.",
            commonMistake: {
              wrong: "I appreciate your patient.",
              correct: "I appreciate you being so patient with me.",
              explanation: "patient是形容词，名词是patience。更自然的说法是'I appreciate you being patient'。",
            },
            formalityVariants: {
              casual: "Thanks a ton for your help. Really appreciate you being so patient.",
              standard: "Thank you so much for your help. I really appreciate you being so patient with me.",
              formal:
                "I am profoundly grateful for your assistance. Your exceptional patience throughout this process is greatly appreciated.",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn:
              "That's what we're here for. In the future, I'd recommend double-checking the account number with the recipient before sending. Here's my direct extension — if you have any follow-up questions, call me directly.",
            textZh: "这是我们应该做的。以后建议汇款前跟收款人核实一下账号。这是我的直线分机号——有后续问题直接打给我。",
            keyPhrases: [
              { en: "double-checking", zh: "核实/仔细检查" },
              { en: "direct extension", zh: "直线分机号" },
              { en: "follow-up questions", zh: "后续问题" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Hey, that's my job! Pro tip for next time — always verify the account number with whoever you're sending to before you pull the trigger. Here's my number if you need anything.",
                textZh: "这是我的工作！下次建议——汇款前一定跟收款人确认账号。这是我的号码有需要打给我。",
                actionHint: "pull the trigger = 确认操作/执行",
                frequency: "common",
              },
              {
                textEn:
                  "That's what I'm here for. Lesson learned — always triple-check those numbers, right? Take my extension so you can reach me directly if anything else comes up.",
                textZh: "这就是我在这的意义。吸取教训——下次一定要反复核对账号。拿着我的分机号有什么事直接找我。",
                actionHint: "lesson learned = 吸取教训",
                frequency: "common",
              },
            ],
            casualVersion:
              "That's what we do. Next time, I'd just double-check the account number with the person you're sending to before you hit send. Here's my direct line — any follow-up questions, just call me.",
            commonMistake: {
              wrong: "This is our job.",
              correct: "That's what we're here for.",
              explanation: "'That's what we're here for'更口语化，表达“这是我们分内之事”的情感。",
            },
            formalityVariants: {
              casual:
                "My pleasure. Next time, just double-check the account with the recipient before sending. Here's my direct line – call me if anything else comes up.",
              standard:
                "That's what we're here for. In the future, I'd recommend double-checking the account number with the recipient before sending. Here's my direct extension — if you have any follow-up questions, call me directly.",
              formal:
                "It is our professional responsibility. For future transactions, I would highly advise verifying the account number with the intended recipient prior to initiating the transfer. Please find here my direct extension – should any further inquiries arise, do not hesitate to contact me personally.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 开户 ====================
  {
    id: "banking-account",
    tags: ["bank account", "开户", "银行"],
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
            casualVersion: "Hey, I'm new here, wanna open a bank account. What docs do I need?",
            culturalNote: "美国银行开户可能需要社会安全号，中国没有此概念",
            commonMistake: {
              wrong: "I want to open a bank account.",
              correct: "I'd like to open a bank account.",
              explanation: "I want 听起来生硬，用 I'd like 更礼貌。",
            },
            formalityVariants: {
              casual: "Hey, new here, wanna open an account. What stuff do I need?",
              standard: "Hi, I'm new to this country and I'd like to open a bank account. What documents do I need?",
              formal: "Good morning/afternoon, I have recently arrived in this country and wish to establish a bank account. Could you please advise on the necessary documentation?",
            },
          },
          {
            speaker: "them",
            role: "客户经理",
            textEn:
              "Welcome! We'd be happy to help. For non-residents, we typically need your passport, a secondary form of ID, proof of address — like a utility bill or lease agreement — and an initial deposit. The minimum to open an account is $25.",
            textZh:
              "欢迎！我们很乐意帮忙。对于非居民，通常需要护照、第二种身份证明、地址证明——如水电费账单或租赁合同——以及初始存款。开户最低存款是25美元。",
            casualVersion: "Welcome! Happy to help. For non-residents, usually need a passport, another ID, proof of address—like a bill or lease—and an initial deposit. Minimum to open's twenty-five bucks.",
            formalityVariants: {
              casual: "Hey, welcome! We can totally help. Non-residents usually need a passport, another ID, proof of address (like a bill or lease), and some initial cash. Twenty-five bucks minimum to start.",
              standard: "Welcome! We'd be happy to assist you. For non-residents, you typically need a passport, a secondary form of identification, proof of address—such as a utility bill or lease agreement—and an initial deposit. The minimum requirement to open an account is $25.",
              formal: "Welcome to our institution. We would be pleased to assist you. For non-resident individuals, the standard requirements include a valid passport, a secondary form of identification, verifiable proof of address—such as a recent utility bill or a formal lease agreement—and an initial monetary deposit. A minimum of $25 is required to establish an account.",
            },
            keyPhrases: [
              { en: "non-residents", zh: "非居民" },
              { en: "secondary form of ID", zh: "第二种身份证明" },
              { en: "proof of address", zh: "地址证明" },
              { en: "utility bill", zh: "水电费账单" },
              { en: "lease agreement", zh: "租赁合同" },
              { en: "initial deposit", zh: "初始存款" },
            ],
            culturalNote:
              "在美国开户，没有SSN（社会安全号）也可以用ITIN（个人纳税识别号）或护照开户。有些银行对国际学生或新移民有特殊政策。",
            alternativeExpressions: [
              {
                textEn:
                  "Welcome to the bank! So for international clients, we need your passport, a second ID, something showing your address — a lease or utility bill works — and a minimum deposit of $25 to get started.",
                textZh:
                  "欢迎！国际客户的话我们需要护照、第二种证件、地址证明——租约或水电单都行——加上最低25美元开户存款。",
                actionHint: "to get started = 开始办理",
                frequency: "common",
              },
              {
                textEn:
                  "Great, we love helping new residents get set up. You'll need a passport, one more form of ID, proof of where you live, and at least $25 to open the account. Pretty straightforward.",
                textZh:
                  "太好了，我们很喜欢帮新居民办理开户。你需要护照、再加一个证件、住址证明、至少25美元开户。很简单的。",
                actionHint: "get set up = 办好/开设",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I have my passport and my apartment lease. I'm here on a work visa. What type of account should I open?",
            textZh: "我有护照和公寓租赁合同。我持工作签证在这里。应该开什么类型的账户？",
            casualVersion: "Got my passport, apartment lease. Here on a work visa. What kinda account should I get?",
            culturalNote: "在美国，工作签证和SSN是关联的，在中国没有类似概念",
            commonMistake: {
              wrong: "What kind of account I should open?",
              correct: "What type of account should I open?",
              explanation: "疑问句中助动词 'should' 放在主语前。",
            },
            formalityVariants: {
              casual: "Got my passport and lease. I'm on a work visa. So, what account type's best?",
              standard: "I have my passport and my apartment lease. I'm currently here on a work visa. What type of account would you recommend I open?",
              formal: "I possess my passport and my apartment lease agreement. I am currently residing here under a work visa. Could you please advise on the most suitable type of account for my circumstances?",
            },
          },
          {
            speaker: "them",
            role: "客户经理",
            textEn:
              "For everyday banking, I'd recommend our basic checking account — there's no monthly fee if you maintain a minimum balance of $500 or set up direct deposit. You'll get a debit card, online banking, and mobile check deposit. Would you also like to open a savings account? It earns 3.5% APY.",
            textZh:
              "日常使用的话，推荐我们的基础支票账户——如果保持500美元最低余额或设置工资直存，免月费。您会得到一张借记卡、网上银行和手机存支票功能。您还想开储蓄账户吗？年利率3.5%。",
            casualVersion: "For everyday stuff, I'd say go with our basic checking account—no monthly fees if you keep five hundred bucks in it or get your paycheck direct deposited. You'll get a debit card, online banking, and can deposit checks with your phone. Wanna open a savings account too? It's got a 3.5% APY.",
            culturalNote: "Checking account和Savings account在中国没有直接对应概念，需解释用途",
            formalityVariants: {
              casual: "For daily banking, I'd recommend our basic checking account. No fees if you keep $500 or have direct deposit. Comes with a debit card, online banking, and mobile check deposit. Wanna add a savings account? It's 3.5% APY.",
              standard: "For everyday banking needs, I'd recommend our basic checking account. It offers no monthly fees if you maintain a minimum balance of $500 or establish direct deposit for your paycheck. This account includes a debit card, access to online banking, and mobile check deposit capabilities. Would you also be interested in opening a savings account, which currently offers a 3.5% Annual Percentage Yield?",
              formal: "Regarding your daily banking requirements, I would suggest our standard checking account. This account is exempt from monthly service fees provided a minimum balance of $500 is maintained, or direct deposit of your payroll is established. It includes a debit card, comprehensive online banking access, and mobile check deposit functionality. Additionally, would you care to consider opening a savings account, which currently features a competitive 3.5% Annual Percentage Yield?",
            },
            alternativeExpressions: [
              {
                textEn:
                  "For day-to-day stuff, our basic checking is the way to go. No fees as long as you keep $500 in there or have your paycheck deposited directly. Comes with a debit card and all the online stuff. Wanna throw in a savings account too? 3.5% interest.",
                textZh:
                  "日常用的话基础支票账户最合适。只要保持500美元或设置工资直存就免费。带借记卡和所有线上功能。要顺便开个储蓄账户吗？3.5%利息。",
                actionHint: "throw in = 顺便加上, the way to go = 最好的选择",
                frequency: "common",
              },
              {
                textEn:
                  "I'd start with a basic checking account — keep $500 in it or set up direct deposit and there's no monthly fee. You get a debit card, app access, the works. A savings account is also worth having — we're offering 3.5% APY right now.",
                textZh:
                  "建议先开基础支票账户——保持500美元或设直存就免月费。有借记卡、app什么的全套。储蓄账户也值得开——我们现在年利率3.5%。",
                actionHint: "the works = 全套/一切",
                frequency: "common",
              },
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
            textEn:
              "I'll open both a checking and savings account. My employer will set up direct deposit. Do I also get checks with the checking account?",
            textZh: "支票和储蓄账户都开吧。我的雇主会设置工资直存。支票账户附带支票本吗？",
            casualVersion: "Yeah, I'll do both checking and savings. Employer's setting up direct deposit. Does the checking come with a checkbook?",
            culturalNote: "支票本在中国已不常用，但在美国特定场合仍会用到",
            commonMistake: {
              wrong: "Does checking account come with checkbook?",
              correct: "Does the checking account come with a checkbook?",
              explanation: "'checking account' 和 'checkbook' 前需要加冠词 'the' 或 'a'。",
            },
            formalityVariants: {
              casual: "Yeah, both accounts sound good. My job will do direct deposit. Does the checking account have checks?",
              standard: "I'll proceed with opening both a checking and a savings account. My employer will be setting up direct deposit for my paycheck. Does the checking account include a checkbook?",
              formal: "I would like to open both a checking and a savings account. My employer will indeed be arranging for direct deposit of my remuneration. Does the checking account customarily include a complimentary checkbook?",
            },
          },
          {
            speaker: "them",
            role: "客户经理",
            textEn:
              "Yes, your first box of checks is free. They'll be mailed to your address in about 7 to 10 days. In the meantime, you can use temporary checks I'll give you today. Now, let me get your information entered into the system. Do you have your Social Security Number or an ITIN?",
            textZh:
              "是的，第一盒支票免费。大约7到10天寄到你的地址。在这期间，可以用我今天给你的临时支票。现在让我把你的信息录入系统。你有社会安全号或ITIN吗？",
            casualVersion: "Yeah, first box of checks is free. They usually show up at your place in about 7-10 days. For now, use the temporary ones I'll give you today. Alright, let me get your info in the system. Got an SSN or ITIN?",
            culturalNote: "SSN (社会安全号) 和 ITIN (个人税号) 对在美生活很重要，中国人对此概念陌生",
            formalityVariants: {
              casual: "Yep, first box of checks is free. Takes about 7-10 days to get to your place. Use the temporary ones I'll give you today. Okay, let's get your info in. Got an SSN or ITIN?",
              standard: "Yes, your initial box of checks will be provided free of charge. They typically arrive at your designated address within approximately 7 to 10 business days. In the interim, you may utilize the temporary checks I will issue to you today. Now, allow me to input your information into our system. Do you possess a Social Security Number or an Individual Taxpayer Identification Number?",
              formal: "Affirmative, your first order of checks will be complimentary. Delivery to your specified address generally occurs within a timeframe of seven to ten business days. During this period, you are welcome to use the provisional checks I shall furnish today. At this juncture, I will commence inputting your personal data into our system. May I inquire if you have a Social Security Number or an Individual Taxpayer Identification Number?",
            },
            keyPhrases: [
              { en: "box of checks", zh: "一盒支票" },
              { en: "temporary checks", zh: "临时支票" },
              { en: "Social Security Number", zh: "社会安全号" },
              { en: "ITIN", zh: "个人纳税识别号" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep, first set of checks is on us. They'll come in the mail in about a week or so. I'll give you some starter checks in the meantime. Now let's get you in the system — do you have an SSN or ITIN?",
                textZh:
                  "对，第一盒支票免费。大概一周左右邮寄到。期间给你一些临时支票用。现在录入系统——你有SSN或ITIN吗？",
                actionHint: "on us = 我们请客/免费, starter checks = 临时支票",
                frequency: "common",
              },
              {
                textEn:
                  "Your first checks come free — takes about a week to get them. For now, I'll hook you up with some temp checks. Alright, let me pull up the application. Got your Social or an ITIN?",
                textZh: "第一盒支票免费——大概一周到。先给你一些临时支票。好了，我开始录入。有社安号或ITIN吗？",
                actionHint: "hook you up with = 给你提供, your Social = 你的社安号（口语简称）",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I have a Social Security Number — I got it when I started my work visa. Here it is.",
            textZh: "我有社会安全号——办工作签证时拿到的。给你。",
            casualVersion: "Yeah, got an SSN. Got it when I started my work visa. Here ya go.",
            culturalNote: "社会安全号在美国用途广泛，是身份的重要组成部分",
            commonMistake: {
              wrong: "I have Social Security Number.",
              correct: "I have a Social Security Number.",
              explanation: "'Social Security Number' 是可数名词，前面需要冠词 'a'。",
            },
            formalityVariants: {
              casual: "Yep, I've got my SSN. Got it with my work visa. Here you go.",
              standard: "Yes, I do possess a Social Security Number—I acquired it when I initiated my work visa application. Here it is.",
              formal: "Indeed, I do have a Social Security Number, which I obtained in conjunction with my work visa. Allow me to present it to you.",
            },
          },
          {
            speaker: "them",
            role: "客户经理",
            textEn:
              "Perfect. I've set up both accounts. Your checking account number is on this card, and your temporary debit card will work immediately. The permanent one with your name on it will arrive by mail in 5 to 7 business days. You'll also need to set up your online banking — let me walk you through that right now.",
            textZh:
              "好了。两个账户都开好了。支票账户号码在这张卡上，临时借记卡可以立即使用。带你名字的正式卡会在5到7个工作日内寄到。你还需要设置网上银行——我现在带你操作。",
            casualVersion: "Great. Got both accounts set up. Checking account number's on this card, temporary debit card's good to go right now. Your permanent card'll be mailed in 5-7 business days. Gotta set up online banking too—I'll show you how.",
            culturalNote: "美国银行卡分临时和正式卡，需留意使用时限和功能",
            formalityVariants: {
              casual: "Awesome. Both accounts are ready. Checking account number's here, temp debit card's good to use. Your real card comes in 5-7 days. Now, let's set up online banking.",
              standard: "Excellent. I have successfully established both accounts for you. Your checking account number is located on this card, and the temporary debit card is active for immediate use. Your personalized permanent card will be dispatched via mail within 5 to 7 business days. Additionally, we will need to set up your online banking access, which I will guide you through momentarily.",
              formal: "Superb. I have completed the setup for both of your accounts. Your checking account number is printed on this accompanying card, and the provisional debit card is activated for immediate utilization. Your permanent, personalized card will be sent to you by post within approximately five to seven business days. Furthermore, we will proceed to configure your online banking access, a process I shall now walk you through.",
            },
            keyPhrases: [
              { en: "account number", zh: "账号" },
              { en: "temporary debit card", zh: "临时借记卡" },
              { en: "permanent one", zh: "正式卡" },
              { en: "set up online banking", zh: "设置网上银行" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "All done! Both accounts are live. Here's your account number, and this temp debit card works right away. Your real card will show up in the mail in about a week. Let me also help you get set up with online banking real quick.",
                textZh:
                  "搞定了！两个账户都开通了。这是你的账号，临时借记卡马上能用。正式卡大约一周邮寄到。我再帮你快速设置一下网上银行。",
                actionHint: "live = 已开通/激活, show up = 到达",
                frequency: "common",
              },
              {
                textEn:
                  "You're good to go — checking and savings are both open. This card works right away; the personalized one comes in the mail. Now let's get your mobile banking sorted out.",
                textZh: "都好了——支票和储蓄账户都开了。这张卡马上能用；带名字的那张邮寄过来。现在帮你设置手机银行。",
                actionHint: "sorted out = 搞定/设置好",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Great. Can I also send money internationally from this account? I need to send money back to China sometimes.",
            textZh: "好的。这个账户可以国际汇款吗？我有时需要汇钱回中国。",
            casualVersion: "Cool. Can I send money internationally from here too? Gotta send cash back to China sometimes.",
            culturalNote: "国际汇款手续费较高且需要SWIFT代码，与国内转账不同",
            commonMistake: {
              wrong: "Can I also send money international?",
              correct: "Can I also send money internationally?",
              explanation: "'internationally' 是副词，修饰动词 'send'。",
            },
            formalityVariants: {
              casual: "Awesome. Can I do international transfers from this account? I send money to China sometimes.",
              standard: "Excellent. Is it possible to conduct international money transfers from this account? I occasionally need to send funds back to China.",
              formal: "Splendid. I inquire if international remittances are possible from this particular account? I foresee the need to transfer funds to China periodically.",
            },
          },
          {
            speaker: "them",
            role: "客户经理",
            textEn:
              "Yes, you can do international wire transfers from your checking account. The fee is $30 per transfer for account holders — cheaper than the walk-in rate. You can initiate transfers online or at the branch. We also have Zelle for free domestic transfers.",
            textZh:
              "可以的，您可以从支票账户办理国际汇款。账户持有人每笔手续费30美元——比临柜价格便宜。可以在网上或柜台发起转账。我们还有Zelle可以免费国内转账。",
            casualVersion: "Yep, you can do international wire transfers from your checking account. Thirty bucks a pop for account holders—cheaper than if you just walk in. Can do 'em online or at the branch. We also got Zelle for free domestic transfers.",
            culturalNote: "Zelle是美国常用的免费即时转账应用，与微信支付宝不同",
            formalityVariants: {
              casual: "Yeah, you can do international wires from checking. It's $30 per transfer for you, cheaper than just walking in. Do it online or at the bank. Plus, Zelle's free for transfers inside the US.",
              standard: "Yes, you are able to perform international wire transfers directly from your checking account. The fee for account holders is $30 per transfer, which is a reduced rate compared to non-account holders. These transfers can be initiated either online or at any of our branch locations. We also offer Zelle for complimentary domestic transfers.",
              formal: "Affirmative, international wire transfers are facilitated from your checking account. A charge of $30 per transaction applies to account holders, which is a preferential rate compared to non-client rates. You may initiate these transfers conveniently either through our online platform or in person at any branch. Furthermore, we provide Zelle for no-fee domestic fund transfers.",
            },
            keyPhrases: [
              { en: "account holders", zh: "账户持有人" },
              { en: "initiate transfers", zh: "发起转账" },
              { en: "at the branch", zh: "在分行/柜台" },
              { en: "Zelle", zh: "Zelle（美国免费即时转账服务）" },
              { en: "domestic transfers", zh: "国内转账" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep, international wires are $30 a pop for account holders — way cheaper than walking in off the street. You can do it online or come in. And for sending money to people here in the US, Zelle is free and instant.",
                textZh:
                  "可以，有账户的话国际汇款每次30块——比临柜便宜很多。可以网上办或来柜台。美国国内转账的话Zelle免费而且即时。",
                actionHint: "$30 a pop = 每次30块, off the street = 临时来的",
                frequency: "common",
              },
              {
                textEn:
                  "For sure. As an account holder, wires to China are only $30 — versus $45 for non-customers. Do it online or at any branch. Oh, and for local transfers, use Zelle — it's free and built right into the app.",
                textZh:
                  "当然可以。有账户的话汇到中国才30美元——非客户要45。网上或任何分行都能办。对了，国内转账用Zelle——免费的，app里就有。",
                actionHint: "built right into = 直接内置在",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "This is really helpful. Thank you for taking the time to explain everything.",
            textZh: "太有帮助了。谢谢你花时间解释这些。",
            casualVersion: "Super helpful. Thanks for explaining all this.",
            commonMistake: {
              wrong: "Thank you for explain everything.",
              correct: "Thank you for explaining everything.",
              explanation: "'for' 后面跟动名词 'explaining'。",
            },
            formalityVariants: {
              casual: "This is great. Thanks for all the info.",
              standard: "This information has been exceptionally helpful. Thank you for taking the time to explain everything so thoroughly.",
              formal: "I find this information profoundly beneficial. I extend my sincere gratitude for your comprehensive explanation and dedicated time.",
            },
          },
          {
            speaker: "them",
            role: "客户经理",
            textEn:
              "My pleasure! Here's my business card — I'm your dedicated banker. If you have any questions about your accounts, don't hesitate to reach out. Welcome to the bank!",
            textZh: "不客气！这是我的名片——我是你的专属客户经理。有任何关于账户的问题，随时联系我。欢迎开户！",
            casualVersion: "My pleasure! Here's my card—I'm your account manager. Any questions 'bout your account, just hit me up. Welcome!",
            culturalNote: "美国银行有客户经理服务，可以一对一咨询",
            formalityVariants: {
              casual: "No problem! Here's my card—I'm your go-to person. Call me if you have any account questions. Welcome!",
              standard: "It was my pleasure! Here is my business card—I will serve as your dedicated account manager. Please do not hesitate to contact me with any account-related inquiries. Welcome to our bank!",
              formal: "The pleasure was entirely mine! Kindly accept my business card; I shall be your designated account manager. Please feel at liberty to contact me should any questions arise pertaining to your accounts. Welcome to our esteemed institution!",
            },
            keyPhrases: [
              { en: "dedicated banker", zh: "专属客户经理" },
              { en: "don't hesitate to reach out", zh: "随时联系" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Happy to help! Take my card — I'll be your go-to person here. Any questions at all, just give me a shout. Welcome aboard!",
                textZh: "很高兴帮到你！拿我的名片——我就是你在这的联络人。有任何问题随时找我。欢迎加入！",
                actionHint: "go-to person = 联络人/首选联系人, give me a shout = 找我",
                frequency: "common",
              },
              {
                textEn:
                  "Anytime! Here's my info — I'm your point of contact for anything banking-related. Don't be a stranger! Welcome to the family.",
                textZh: "随时为你服务！这是我的联系方式——银行相关的事找我就对了。常来啊！欢迎！",
                actionHint: "don't be a stranger = 常来/别疏远",
                frequency: "occasional",
              },
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
            textEn:
              "Hi, my debit card was declined when I tried to make a purchase, but I know I have money in my account. What's going on?",
            textZh: "你好，我刷借记卡被拒了，但我知道账户里有钱。怎么回事？",
            culturalNote: "银行卡被拒可能涉及多种原因，不一定是没钱",
            casualVersion: "My card just got declined but I definitely have money. What happened?",
            commonMistake: {
              wrong: "My debit card was declined, but I have money in it.",
              correct: "My debit card was declined, but I know I have money in my account.",
              explanation: "中文常说“里面有钱”，直译“in it”听起来不自然，更常用“in my account”。",
            },
            formalityVariants: {
              casual: "Hey, my debit card got declined, but I know I've got money. What's up?",
              standard:
                "Hi, my debit card was declined when I tried to make a purchase, but I know I have money in my account. What's going on?",
              formal:
                "Good morning/afternoon. My debit card was unexpectedly declined during a recent transaction, despite sufficient funds in my account. Could you please clarify the reason for this?",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn:
              "Let me pull up your account. Can I see your ID, please? ...I see the issue. There's a security hold on your account due to unusual activity. It looks like there was a large withdrawal attempt from a different city — our fraud detection system flagged it.",
            textZh:
              "我调出您的账户看看。能出示一下证件吗？……我找到原因了。您的账户因为异常活动被安全冻结了。看起来有人在另一个城市尝试大额取款——被我们的反欺诈系统标记了。",
            culturalNote: "银行会主动冻结异常交易账户以防盗刷，这是一种保护措施",
            keyPhrases: [
              { en: "security hold", zh: "安全冻结" },
              { en: "unusual activity", zh: "异常活动" },
              { en: "withdrawal attempt", zh: "取款尝试" },
              { en: "fraud detection system", zh: "反欺诈系统" },
              { en: "flagged", zh: "被标记了" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Let me look into this. ID, please? ...Okay, I see what happened. Your account got locked because something sketchy showed up — someone tried pulling out a big chunk of cash from another city. Our system caught it.",
                textZh:
                  "我来查查。出示一下证件？……好了，我看到了。你的账户被锁了因为有可疑操作——有人在另一个城市试图取大额现金。被系统抓到了。",
                actionHint: "sketchy = 可疑的, pulling out = 取出, caught it = 抓到了",
                frequency: "common",
              },
              {
                textEn:
                  "Give me one second to check... Oh, I see — there's a fraud hold on the account. Looks like somebody tried to make a big withdrawal from a different city. Our system flagged it and froze things as a precaution.",
                textZh:
                  "稍等我查一下……哦，看到了——账户有一个欺诈冻结。看起来有人在另一个城市试图大额取款。系统标记了并预防性冻结了。",
                actionHint: "as a precaution = 作为预防措施",
                frequency: "common",
              },
            ],
            casualVersion:
              "Lemme pull up your account. Can I see your ID? ...Got it. Security hold on your account 'cause of weird activity. Looks like a big withdrawal tried from another city — our fraud system flagged it.",
            formalityVariants: {
              casual:
                "Okay, lemme check your account. ID, please? ...Ah, I see. There's a security hold 'cause of some unusual activity. Looks like a big withdrawal attempt from another city, our fraud system caught it.",
              standard:
                "Let me pull up your account. Can I see your ID, please? ...I see the issue. There's a security hold on your account due to unusual activity. It looks like there was a large withdrawal attempt from a different city — our fraud detection system flagged it.",
              formal:
                "Certainly, I'll access your account information. May I please see your identification? ...Thank you. I've identified the cause. There is a security hold placed on your account due to detection of unusual activity. Specifically, our fraud detection system flagged a substantial withdrawal attempt originating from an alternative city.",
            },
          },
          {
            speaker: "you",
            textEn: "That wasn't me! I've been in this city the whole time. Is someone trying to steal my money?",
            textZh: "那不是我！我一直在这个城市。有人想盗取我的钱吗？",
            commonMistake: {
              wrong: "Is someone trying steal my money?",
              correct: "Is someone trying to steal my money?",
              explanation: "'try' 后跟不定式 'to steal'。",
            },
            casualVersion: "Wasn't me! Been in this city the whole time. Someone trying to steal my money?",
            formalityVariants: {
              casual: "Not me! I've been here the whole time. Is someone trying to steal my money?",
              standard: "That wasn't me! I've been in this city the whole time. Is someone trying to steal my money?",
              formal:
                "I assure you, that transaction was not initiated by me. I have remained within this city for the entire duration. Is there a possibility that my funds are at risk of theft?",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn:
              "It's possible your card information was compromised. The good news is, our system blocked the transaction before any money was taken. I'll need to cancel your current card and issue a new one. I can also file a fraud investigation. Have you noticed any other suspicious charges on your account?",
            textZh:
              "您的卡信息可能被泄露了。好消息是，我们的系统在钱被取走前就拦截了交易。我需要注销您现在的卡并补发新卡。我也可以提交一个欺诈调查。您有注意到账户上有其他可疑的消费吗？",
            culturalNote: "美国银行对盗刷保护较好，但需要用户积极配合处理",
            keyPhrases: [
              { en: "compromised", zh: "被泄露了/被盗了" },
              { en: "blocked the transaction", zh: "拦截了交易" },
              { en: "cancel your current card", zh: "注销现在的卡" },
              { en: "issue a new one", zh: "补发新卡" },
              { en: "fraud investigation", zh: "欺诈调查" },
              { en: "suspicious charges", zh: "可疑消费" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Looks like your card info might've been stolen. Good thing our system shut it down before any money actually went out. We'll kill this card and get you a new one. Have you seen any weird charges lately?",
                textZh:
                  "看起来你的卡信息可能被盗了。好在我们系统在钱被转走前就拦截了。我们会注销这张卡给你新的。最近有没有看到什么奇怪的消费？",
                actionHint: "kill this card = 注销这张卡（口语）, weird charges = 奇怪的消费",
                frequency: "common",
              },
              {
                textEn:
                  "Your card details may have been compromised somewhere. The silver lining is we caught it in time — no money left the account. I'll shut down the current card and order a new one. Any other charges look off to you?",
                textZh:
                  "你的卡信息可能在哪里泄露了。好的一面是我们及时发现了——没有钱被转走。我会关掉现在的卡补办新的。还有其他消费看起来不对的吗？",
                actionHint: "silver lining = 好的一面, look off = 看起来不对",
                frequency: "common",
              },
            ],
            casualVersion:
              "Card info might be compromised. Good news is, our system blocked it before any money was taken. Gotta cancel your old card, issue a new one. Can also file a fraud investigation. Seen any other weird charges on your account?",
            formalityVariants: {
              casual:
                "Your card info might be compromised. Good thing our system blocked the transaction before money was taken. I'll need to cancel this card and get you a new one. I can also start a fraud investigation. Any other suspicious charges you've noticed?",
              standard:
                "It's possible your card information was compromised. The good news is, our system blocked the transaction before any money was taken. I'll need to cancel your current card and issue a new one. I can also file a fraud investigation. Have you noticed any other suspicious charges on your account?",
              formal:
                "It appears there is a possibility that your card information has been compromised. Fortunately, our system successfully intercepted and blocked the fraudulent transaction prior to any financial loss. I will proceed with canceling your existing card and initiating the issuance of a replacement. Furthermore, I can open a formal fraud investigation. Have you observed any additional suspicious activities or unauthorized charges on your account?",
            },
          },
          {
            speaker: "you",
            textEn:
              "Let me check my recent transactions... There's a $300 charge I don't recognize from an online store. That's definitely not mine.",
            textZh: "我看看最近的交易记录……有一笔300美元的消费我不认识，是一个网上商店的。那绝对不是我的。",
            commonMistake: {
              wrong: "I don't recognize this $300 charge.",
              correct: "There's a $300 charge from an online store that I don't recognize.",
              explanation: "强调未授权的消费，而不是“我不认识这笔消费”的表达。",
            },
            casualVersion:
              "Lemme check my recent transactions... Oh, there's a $300 charge from some online store I don't recognize. Definitely not mine.",
            formalityVariants: {
              casual:
                "Hold on, checking my recent transactions... Yeah, a $300 charge from an online store I don't know. Not mine at all.",
              standard:
                "Let me check my recent transactions... There's a $300 charge I don't recognize from an online store. That's definitely not mine.",
              formal:
                "Please allow me a moment to review my recent transaction history... I am observing a charge of $300 from an online retailer that I do not recognize or authorize. I can confirm this transaction is unequivocally not mine.",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn:
              "I'll flag that charge as unauthorized and start a dispute. You should get a provisional credit of $300 within 48 hours while we investigate. The investigation typically takes 10 business days. Your new card will arrive in 5 to 7 business days — in the meantime, I can give you a temporary card today.",
            textZh:
              "我会把那笔消费标记为未授权并发起争议。调查期间，48小时内您应该会收到300美元的临时退款。调查通常需要10个工作日。新卡5到7个工作日到——在此期间，今天可以给您一张临时卡。",
            culturalNote: "临时退款和正式调查是银行处理盗刷的常见流程",
            keyPhrases: [
              { en: "unauthorized", zh: "未授权的" },
              { en: "dispute", zh: "争议" },
              { en: "provisional credit", zh: "临时退款" },
              { en: "investigate", zh: "调查" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I'll mark it as fraud and open a dispute. You'll see $300 back in your account within a couple days while we look into it. The whole investigation takes about 10 business days. I can set you up with a temp card today.",
                textZh:
                  "我标记为欺诈并开争议。两天内你会看到300美元退回账户，我们同时调查。整个调查大约10个工作日。今天先给你办张临时卡。",
                actionHint: "set you up with = 给你办/提供",
                frequency: "common",
              },
              {
                textEn:
                  "That $300 charge is getting flagged as unauthorized — I'll kick off a dispute right now. You'll get a temporary credit within 48 hours. New card's coming in about a week, but I'll give you a temp one to use in the meantime.",
                textZh:
                  "那笔300美元的消费我标记为未授权——现在就启动争议。48小时内你会收到临时退款。新卡大约一周到，先给你张临时卡用。",
                actionHint: "kick off = 启动",
                frequency: "common",
              },
            ],
            casualVersion:
              "I'll flag that as unauthorized and start a dispute. You should get a $300 provisional credit in 48 hours while we investigate. Investigation usually takes 10 business days. New card'll be here in 5 to 7 business days — but I can give you a temp card today.",
            formalityVariants: {
              casual:
                "Okay, I'll mark that as unauthorized and start a dispute. You'll get a $300 temporary credit within 48 hours while we look into it. The investigation usually takes 10 business days. Your new card will get here in 5 to 7 business days, but I can issue you a temporary one today.",
              standard:
                "I'll flag that charge as unauthorized and start a dispute. You should get a provisional credit of $300 within 48 hours while we investigate. The investigation typically takes 10 business days. Your new card will arrive in 5 to 7 business days — in the meantime, I can give you a temporary card today.",
              formal:
                "I will proceed to flag that specific charge as unauthorized and initiate a formal dispute. You can anticipate receiving a provisional credit of $300 within 48 hours while our investigation is underway. This investigation typically concludes within 10 business days. Your permanent replacement card will be delivered within 5 to 7 business days; however, I am able to provide you with a temporary card immediately.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. Should I change my online banking password too?",
            textZh: "谢谢。我还需要改网银密码吗？",
            commonMistake: {
              wrong: "Should I change my online banking password also?",
              correct: "Should I change my online banking password too?",
              explanation: "'too' 在句末更自然，口语化。",
            },
            casualVersion: "Thanks. Should I change my online banking password too?",
            formalityVariants: {
              casual: "Thanks. Should I update my online banking password as well?",
              standard: "Thank you. Should I change my online banking password too?",
              formal: "Thank you for your assistance. Would it also be advisable to modify my online banking password?",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn:
              "Absolutely — change your password and enable two-factor authentication if you haven't already. Also check any other accounts where you used the same password. Here's a summary of what we've done today — keep this for your records.",
            textZh:
              "一定要改——改密码并开启双重验证（如果还没开的话）。也检查一下其他用了相同密码的账户。这是今天处理的摘要——请保留好。",
            culturalNote: "双重认证（2FA）是美国网络安全常识，中国用户可能不熟悉",
            keyPhrases: [
              { en: "change your password", zh: "改密码" },
              { en: "two-factor authentication", zh: "双重验证/两步验证" },
              { en: "summary", zh: "摘要/总结" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "100% — go home and change that password ASAP. Turn on two-factor if you haven't. And if you use that same password anywhere else, change those too. Here's a printout of everything we did today.",
                textZh:
                  "必须的——回去马上改密码。双重验证没开的话开起来。如果其他地方用了同样的密码也得改。这是今天处理的打印件。",
                actionHint: "ASAP = as soon as possible 尽快",
                frequency: "common",
              },
              {
                textEn:
                  "Definitely. New password, two-factor auth, and go through any other accounts with the same login. Here's a recap of what we took care of — hold on to it.",
                textZh: "一定要。新密码，开双重验证，然后检查其他用同样密码的账户。这是今天处理的总结——留好。",
                actionHint: "recap = 总结回顾, took care of = 处理了",
                frequency: "common",
              },
            ],
            casualVersion:
              "Definitely — change your password and turn on two-factor if you haven't. And check any other accounts using that same password. Here's a summary of today — keep this for your records.",
            formalityVariants: {
              casual:
                "Oh, for sure — change your password and enable two-factor if it's not on. Also check any other accounts using that same password. Here's a quick summary of everything we did — keep it safe.",
              standard:
                "Absolutely — change your password and enable two-factor authentication if you haven't already. Also check any other accounts where you used the same password. Here's a summary of what we've done today — keep this for your records.",
              formal:
                "Indeed. I strongly recommend changing your password and activating two-factor authentication, should it not already be enabled. Furthermore, please review any other online accounts where you may have utilized the identical password. I have prepared a comprehensive summary of today's actions for your reference; please retain this document for your personal records.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll do that right away. Is there a daily spending limit on the new card?",
            textZh: "我马上改。新卡有每日消费限额吗？",
            culturalNote: "美国银行卡普遍有每日消费和取款限额，与中国部分银行不同",
            commonMistake: {
              wrong: "New card has daily spending limit?",
              correct: "Does the new card have daily spending limits?",
              explanation: "疑问句需要助动词 'does' 和冠词 'the'。",
            },
            casualVersion: "I'll do that right away. Is there a daily spending limit on the new card?",
            formalityVariants: {
              casual: "I'll get on that right away. Any daily spending limit on this new card?",
              standard: "I'll do that right away. Is there a daily spending limit on the new card?",
              formal:
                "I will attend to that immediately. May I inquire if there is a daily spending limit imposed on the replacement card?",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn:
              "Yes, the default daily limit is $2,500 for purchases and $500 for ATM withdrawals. If you need to make a larger purchase, you can call us to temporarily raise the limit. You can also adjust it yourself through the mobile app.",
            textZh:
              "有的，默认每日消费限额2500美元，ATM取款限额500美元。如果需要大额消费，可以打电话给我们临时提高限额。你也可以通过手机App自己调整。",
            keyPhrases: [
              { en: "daily limit", zh: "每日限额" },
              { en: "temporarily raise", zh: "临时提高" },
              { en: "adjust", zh: "调整" },
              { en: "mobile app", zh: "手机App" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, standard daily limit is $2,500 for spending and $500 at the ATM. Need to buy something bigger? Just give us a call and we'll bump it up temporarily. Or do it yourself in the app.",
                textZh:
                  "对，标准每日限额消费2500，ATM取款500。要买更贵的东西？打个电话我们临时提高。或者在app里自己调。",
                actionHint: "bump it up = 提高",
                frequency: "common",
              },
              {
                textEn:
                  "The card comes with a $2,500 daily purchase limit and $500 for ATM cash. If you need more, it takes two seconds to raise it through the app or by calling us.",
                textZh: "这张卡每日消费限额2500，ATM取现500。需要更多的话在app里或打电话两秒钟就能提高。",
                actionHint: "takes two seconds = 非常快",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep, default daily limit's $2,500 for purchases, $500 for ATM withdrawals. Need to make a bigger purchase? Just call us to temporarily bump up the limit. Or you can adjust it yourself on the mobile app.",
            formalityVariants: {
              casual:
                "Yeah, the standard daily limit is $2,500 for purchases and $500 for ATM withdrawals. If you need to buy something big, you can call us to temporarily increase it. You can also change it yourself on the app.",
              standard:
                "Yes, the default daily limit is $2,500 for purchases and $500 for ATM withdrawals. If you need to make a larger purchase, you can call us to temporarily raise the limit. You can also adjust it yourself through the mobile app.",
              formal:
                "Yes, there is a default daily limit of $2,500 for purchase transactions and $500 for ATM withdrawals. Should you require a higher limit for a significant purchase, you may contact us to arrange a temporary increase. Alternatively, you possess the capability to adjust this limit independently via our mobile application.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect, thank you. You've been incredibly helpful with all of this.",
            textZh: "好的，谢谢你。你帮了大忙了。",
            casualVersion: "Perfect, thanks. You've been super helpful with all this.",
            commonMistake: {
              wrong: "You are very helpful.",
              correct: "You've been incredibly helpful.",
              explanation:
                "“You are helpful” 听起来像在描述一个人的特质，而 “You've been helpful” 更自然地表达对方提供的帮助和影响。",
            },
            formalityVariants: {
              casual: "Great, thanks. You've been a huge help with all this.",
              standard: "Perfect, thank you. You've been incredibly helpful with all of this.",
              formal:
                "Excellent, I appreciate your assistance. Your support throughout this process has been exceptionally helpful.",
            },
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
            textEn:
              "Hi, I'm traveling to Europe for two weeks and I'd like to get travel insurance. What do you recommend?",
            textZh: "你好，我要去欧洲旅行两周，想买旅行保险。有什么推荐？",
            culturalNote: "美国办理登机或咨询时，无需过多寒暄，直接说目的即可，更自然。",
            casualVersion: "Hey, goin' to Europe for two weeks, need travel insurance. Whatcha recommend?",
            commonMistake: {
              wrong: "I want to buy travel insurance",
              correct: "I'd like to get travel insurance",
              explanation: "“I want”听起来比较直接，用“I'd like to”更礼貌、更委婉。",
            },
            formalityVariants: {
              casual: "Hey, goin' to Europe for two weeks, need travel insurance. Whatcha recommend?",
              standard:
                "Hi, I'm traveling to Europe for two weeks and I'd like to get travel insurance. What do you recommend?",
              formal:
                "Good morning/afternoon, I am planning a two-week trip to Europe and am interested in purchasing travel insurance. Could you please advise on suitable options?",
            },
          },
          {
            speaker: "them",
            role: "保险顾问",
            textEn:
              "Great idea — travel insurance is really important, especially for international trips. We have three plans. The Basic plan is $45 and covers trip cancellation and medical emergencies up to $50,000. The Standard plan is $85 and adds baggage loss, trip delay, and increases medical coverage to $100,000. Our Premium plan is $150 and includes everything plus adventure sports coverage and cancel-for-any-reason.",
            textZh:
              "好主意——旅行保险非常重要，尤其是国际旅行。我们有三种方案。基础方案45美元，覆盖行程取消和最高5万美元的紧急医疗。标准方案85美元，增加行李丢失、行程延误，医疗保额提升到10万美元。高级方案150美元，包含所有内容加上极限运动保障和任何原因取消。",
            alternativeExpressions: [
              {
                textEn:
                  "Smart move! You definitely want insurance for an overseas trip. Here's the breakdown — Basic at $45 gets you covered for cancellations and basic medical. Standard at $85 is the most popular — bigger medical coverage plus baggage and delays. Premium at $150 is the full package.",
                textZh:
                  "聪明！出国旅行一定要买保险。大致是这样——基础版45美元保取消和基本医疗。标准版85美元最热门——医疗保额更高加行李和延误。高级版150美元全包。",
                actionHint: "smart move = 明智的决定, the full package = 全套",
                frequency: "common",
              },
              {
                textEn:
                  "Absolutely — I'd never travel internationally without it. We've got three tiers: $45 for basic medical and cancellation, $85 adds lost bags and delays with better medical coverage, and $150 is the works — adventure sports, cancel for any reason, the whole nine yards.",
                textZh:
                  "绝对的——我出国旅行从不裸奔。三档：45美元基本医疗和取消，85美元加行李丢失和延误保障而且医疗更好，150美元全套——极限运动、任何原因取消，全都有。",
                actionHint: "the whole nine yards = 全部/应有尽有",
                frequency: "occasional",
              },
            ],
            keyPhrases: [
              { en: "trip cancellation", zh: "行程取消" },
              { en: "medical emergencies", zh: "紧急医疗" },
              { en: "baggage loss", zh: "行李丢失" },
              { en: "trip delay", zh: "行程延误" },
              { en: "adventure sports coverage", zh: "极限运动保障" },
              { en: "cancel-for-any-reason", zh: "任何原因取消" },
            ],
            culturalNote:
              "欧洲很多国家（尤其申根区）要求入境时必须有旅行保险，医疗保额不低于3万欧元。即使不强制，在美国看病费用极其高昂，强烈建议买保险。",
            casualVersion:
              "Yeah, good call — travel insurance is super important, 'specially for international trips. Got three plans. Basic's $45, covers cancellation and medical emergencies up to fifty grand. Standard's $85, adds baggage, delay, and bumps medical to a hundred grand. Premium's $150, got everything, plus adventure sports and cancel-for-any-reason.",
            formalityVariants: {
              casual:
                "Yeah, good call — travel insurance is super important, 'specially for international trips. Got three plans. Basic's $45, covers cancellation and medical emergencies up to fifty grand. Standard's $85, adds baggage, delay, and bumps medical to a hundred grand. Premium's $150, got everything, plus adventure sports and cancel-for-any-reason.",
              standard:
                "Great idea — travel insurance is really important, especially for international trips. We have three plans. The Basic plan is $45 and covers trip cancellation and medical emergencies up to $50,000. The Standard plan is $85 and adds baggage loss, trip delay, and increases medical coverage to $100,000. Our Premium plan is $150 and includes everything plus adventure sports coverage and cancel-for-any-reason.",
              formal:
                "That is an excellent decision, as travel insurance is indeed crucial, particularly for international travel. We offer three distinct plans. The Basic plan, priced at $45, provides coverage for trip cancellation and medical emergencies up to $50,000. The Standard plan, at $85, expands upon this by including baggage loss and trip delay, and increases medical coverage to $100,000. Our Premium plan, for $150, encompasses all aforementioned benefits, in addition to adventure sports coverage and a 'cancel-for-any-reason' option.",
            },
          },
          {
            speaker: "you",
            textEn: "What exactly does 'trip cancellation' cover? Like, what reasons qualify?",
            textZh: '"行程取消"具体保什么？什么原因才算？',
            casualVersion: "So, what's 'trip cancellation' actually cover? Like, what kinda stuff qualifies?",
            commonMistake: {
              wrong: "What conditions can trigger trip cancellation?",
              correct: "What reasons qualify?",
              explanation: "'Trigger'在这里用得不自然，'qualify'更常用。",
            },
            formalityVariants: {
              casual: "So, what's 'trip cancellation' actually cover? Like, what kinda stuff qualifies?",
              standard: "What exactly does 'trip cancellation' cover? Like, what reasons qualify?",
              formal:
                "Could you please elaborate on the specific circumstances that constitute coverage under 'trip cancellation'? What criteria must be met for a reason to qualify?",
            },
          },
          {
            speaker: "them",
            role: "保险顾问",
            textEn:
              "Standard trip cancellation covers you if you need to cancel due to illness, injury, a death in the family, airline bankruptcy, or severe weather. It does NOT cover things like changing your mind or work conflicts — unless you have the Premium plan with cancel-for-any-reason, which reimburses 75% of your trip cost for any reason at all.",
            textZh:
              "标准行程取消保障涵盖因疾病、受伤、家人去世、航空公司破产或恶劣天气需要取消的情况。不保障改变主意或工作冲突——除非你有高级方案的任何原因取消，那可以报销75%的旅行费用，不管什么原因。",
            commonMistake: {
              wrong: "Does it cover my old diseases?",
              correct: "Does it cover pre-existing medical conditions?",
              explanation: "“Old diseases”听起来很奇怪，应使用“pre-existing conditions”",
            },
            alternativeExpressions: [
              {
                textEn:
                  "The standard cancellation kicks in for things like getting sick, a family emergency, or if your airline goes belly-up. It won't cover \"I just don't feel like going\" — for that you'd need the Premium plan, which gives you 75% back no matter what.",
                textZh:
                  '标准取消保障适用于生病、家庭紧急情况或航空公司倒闭这类情况。不保"我不想去了"——要保这个得选高级方案，不管什么原因退75%。',
                actionHint: "goes belly-up = 倒闭（口语）, kicks in = 生效/适用",
                frequency: "common",
              },
              {
                textEn:
                  "You're covered for legit reasons — illness, injury, death in the family, airline issues, bad weather. But not for stuff like changing your mind or a work thing popping up. The Premium plan is the only one that does cancel-for-any-reason.",
                textZh:
                  "正当理由都保——疾病、受伤、家人去世、航空公司问题、恶劣天气。但不保改变主意或突然有工作这种。只有高级方案才有任何原因取消。",
                actionHint: "legit reasons = 正当理由, popping up = 突然出现",
                frequency: "common",
              },
            ],
            keyPhrases: [
              { en: "illness", zh: "疾病" },
              { en: "injury", zh: "受伤" },
              { en: "airline bankruptcy", zh: "航空公司破产" },
              { en: "severe weather", zh: "恶劣天气" },
              { en: "changing your mind", zh: "改变主意" },
              { en: "reimburses 75%", zh: "报销75%" },
            ],
            casualVersion:
              "Standard trip cancellation covers if you gotta cancel 'cause of illness, injury, family death, airline goin' belly up, or bad weather. Doesn't cover stuff like just changin' your mind or work issues — unless you got the Premium plan with cancel-for-any-reason, that pays back 75% of your trip cost for anything.",
            formalityVariants: {
              casual:
                "Standard trip cancellation covers if you gotta cancel 'cause of illness, injury, family death, airline goin' belly up, or bad weather. Doesn't cover stuff like just changin' your mind or work issues — unless you got the Premium plan with cancel-for-any-reason, that pays back 75% of your trip cost for anything.",
              standard:
                "Standard trip cancellation covers you if you need to cancel due to illness, injury, a death in the family, airline bankruptcy, or severe weather. It does NOT cover things like changing your mind or work conflicts — unless you have the Premium plan with cancel-for-any-reason, which reimburses 75% of your trip cost for any reason at all.",
              formal:
                "Under the Standard plan, trip cancellation is applicable for reasons such as verifiable illness, injury, a death within the immediate family, airline insolvency, or severe weather conditions. It specifically excludes elective changes of mind or professional obligations, unless you are enrolled in the Premium plan, which includes a 'cancel-for-any-reason' benefit, providing a 75% reimbursement of your trip cost for any specified reason.",
            },
          },
          {
            speaker: "you",
            textEn: "I think the Standard plan makes sense for me. Does it cover pre-existing medical conditions?",
            textZh: "我觉得标准方案适合我。它保既有的疾病吗？",
            casualVersion: "Yeah, Standard plan sounds good. Does it cover pre-existing conditions?",
            formalityVariants: {
              casual: "Yeah, Standard plan sounds good. Does it cover pre-existing conditions?",
              standard: "I think the Standard plan makes sense for me. Does it cover pre-existing medical conditions?",
              formal:
                "The Standard plan appears to be a suitable option for my needs. May I inquire if it includes coverage for pre-existing medical conditions?",
            },
          },
          {
            speaker: "them",
            role: "保险顾问",
            textEn:
              "Pre-existing conditions are covered only if you purchase the insurance within 14 days of booking your trip. Since you mentioned you're leaving soon, when did you book your flights?",
            textZh: "既有疾病只有在预订旅行后14天内购买保险才保障。你说快出发了，你是什么时候订的机票？",
            commonMistake: {
              wrong: "I booked a month before.",
              correct: "I booked about a month ago.",
              explanation: "“before”需要具体参照点，表示从现在算起用“ago”",
            },
            alternativeExpressions: [
              {
                textEn:
                  "That depends on timing. If you buy the insurance within two weeks of booking your trip, pre-existing stuff is covered. Otherwise, it's excluded. When did you book?",
                textZh: "这取决于时间。如果订行程后两周内买保险，既有病症就保。不然就不包括。你什么时候订的？",
                actionHint: "pre-existing stuff 是口语化说法",
                frequency: "common",
              },
              {
                textEn:
                  "Here's the catch — pre-existing conditions are only covered if you get the policy within 14 days of your first trip payment. How long ago did you book everything?",
                textZh: "关键在这——既有病症只有在第一笔旅行付款后14天内买保险才保。你多久前订的？",
                actionHint: "here's the catch = 关键/但书在这里",
                frequency: "common",
              },
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
            casualVersion:
              "Only covered if you get it within 14 days of bookin' your trip. You said you're leavin' soon, so when'd you book your flights?",
            formalityVariants: {
              casual:
                "Only covered if you get it within 14 days of bookin' your trip. You said you're leavin' soon, so when'd you book your flights?",
              standard:
                "Pre-existing conditions are covered only if you purchase the insurance within 14 days of booking your trip. Since you mentioned you're leaving soon, when did you book your flights?",
              formal:
                "Coverage for pre-existing medical conditions is contingent upon purchasing the insurance policy within 14 days of your initial trip booking date. Given your imminent departure, could you please confirm the date on which you booked your flights?",
            },
          },
          {
            speaker: "you",
            textEn:
              "I booked about a month ago, so I've missed that window. That's okay — I don't have any major health issues. Let's go with the Standard plan.",
            textZh: "大概一个月前订的，所以错过那个窗口了。没关系——我没有什么大的健康问题。就选标准方案吧。",
            casualVersion:
              "Booked like a month ago, so missed that. It's fine though — don't got any big health stuff. Let's just do the Standard plan.",
            formalityVariants: {
              casual:
                "Booked like a month ago, so missed that. It's fine though — don't got any big health stuff. Let's just do the Standard plan.",
              standard:
                "I booked about a month ago, so I've missed that window. That's okay — I don't have any major health issues. Let's go with the Standard plan.",
              formal:
                "I made my booking approximately one month prior, which means I have indeed exceeded that timeframe. However, that is acceptable, as I do not have any significant health concerns. Therefore, I would like to proceed with the Standard plan.",
            },
          },
          {
            speaker: "them",
            role: "保险顾问",
            textEn:
              "I'll set that up for you. I just need your travel dates, destination countries, and your date of birth. You'll receive your policy documents by email within 24 hours. Print a copy or save it on your phone — you'll need the policy number if you file a claim.",
            textZh:
              "好的，我来办理。需要你的旅行日期、目的地国家和出生日期。保单文件24小时内发到你的邮箱。打印一份或存手机上——理赔时需要保单号。",
            commonMistake: {
              wrong: "If something happened during my trip, what should I do first?",
              correct: "If something happens during my trip, what's the first step I should take?",
              explanation: "假设未来可能发生的事件用一般现在时，而不是过去时",
            },
            keyPhrases: [
              { en: "travel dates", zh: "旅行日期" },
              { en: "destination countries", zh: "目的地国家" },
              { en: "policy documents", zh: "保单文件" },
              { en: "policy number", zh: "保单号" },
              { en: "file a claim", zh: "理赔" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Let me get that rolling. Just need your trip dates, where you're heading, and your birthday. The policy paperwork will hit your inbox within 24 hours. Keep a copy on your phone — you'll need the policy number if anything goes south.",
                textZh:
                  "我来办。只需要你的出行日期、去哪里和生日。保单文件24小时内发到邮箱。手机上存一份——出问题的时候需要保单号。",
                actionHint: "goes south = 出问题/变糟",
                frequency: "common",
              },
              {
                textEn:
                  "I'll get you signed up right now. What are your travel dates, which countries, and your date of birth? Everything gets emailed to you in a day. Screenshot that policy number — you'll want it handy if you ever need to make a claim.",
                textZh:
                  "我现在就帮你注册。旅行日期、哪些国家和出生日期？所有东西一天内邮件发给你。截图保单号——万一理赔要用的。",
                actionHint: "screenshot 当动词用=截图保存",
                frequency: "common",
              },
            ],
            casualVersion:
              "Okay, I'll get that set up. Just need your travel dates, where you're goin', and your birthday. You'll get your policy docs by email in 24 hours. Print it or save it on your phone — you'll need that policy number if you gotta file a claim.",
            formalityVariants: {
              casual:
                "Okay, I'll get that set up. Just need your travel dates, where you're goin', and your birthday. You'll get your policy docs by email in 24 hours. Print it or save it on your phone — you'll need that policy number if you gotta file a claim.",
              standard:
                "I'll set that up for you. I just need your travel dates, destination countries, and your date of birth. You'll receive your policy documents by email within 24 hours. Print a copy or save it on your phone — you'll need the policy number if you file a claim.",
              formal:
                "Certainly, I will process that for you immediately. I will require your intended travel dates, the destination countries, and your date of birth. Your comprehensive policy documents will be dispatched to you via email within 24 hours. Please ensure you retain a printed copy or a digital version on your mobile device, as the policy number will be essential should you need to file a claim.",
            },
          },
          {
            speaker: "you",
            textEn: "If something happens during my trip, what's the first thing I should do?",
            textZh: "如果旅途中出了事，第一步应该做什么？",
            culturalNote: "“Documentation is everything”是强调文件非常重要的地道表达，中文会说“证据文件最重要”。",
            casualVersion: "So if somethin' happens on my trip, what's the first thing I do?",
            formalityVariants: {
              casual: "So if somethin' happens on my trip, what's the first thing I do?",
              standard: "If something happens during my trip, what's the first thing I should do?",
              formal:
                "Should an unforeseen event occur during my travels, what immediate steps would I be advised to take?",
            },
          },
          {
            speaker: "them",
            role: "保险顾问",
            textEn:
              "Call our 24/7 emergency assistance hotline — the number is on your policy card. They can help you find a doctor, hospital, or handle an emergency. For medical claims, keep ALL receipts and get a medical report from the doctor. For baggage claims, file a report with the airline AND the police within 24 hours. Documentation is everything.",
            textZh:
              "打我们的24小时紧急援助热线——号码在你的保单卡上。他们可以帮你找医生、医院或处理紧急情况。医疗理赔的话，保留所有收据并从医生那里拿一份医疗报告。行李理赔的话，24小时内向航空公司和警方报案。证据文件最重要。",
            commonMistake: {
              wrong: "Thank you for explain everything clearly.",
              correct: "Thank you for explaining everything so clearly!",
              explanation: "“for”后面动词用动名词“-ing”形式",
            },
            keyPhrases: [
              { en: "emergency assistance hotline", zh: "紧急援助热线" },
              { en: "keep ALL receipts", zh: "保留所有收据" },
              { en: "medical report", zh: "医疗报告" },
              { en: "file a report", zh: "报案/提交报告" },
              { en: "documentation", zh: "证据文件" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "First thing — call our emergency line. It's 24/7 and it's on your policy card. They'll hook you up with a doctor or hospital. The big thing with claims is paper trail — save every receipt, get a doctor's note, and for lost luggage, report it to the airline and cops within 24 hours.",
                textZh:
                  "第一件事——打我们的紧急热线。24小时的，在保单卡上。他们会帮你找到医生或医院。理赔最重要的是证据——收据全留着，拿医生证明，行李丢了24小时内向航空公司和警方报告。",
                actionHint: "paper trail = 证据记录/书面凭证",
                frequency: "common",
              },
              {
                textEn:
                  "Hit up our emergency hotline — it's right on your policy card, runs around the clock. For medical stuff, keep every single receipt and get the doc to write it up. Lost bags? Report to the airline AND the local police ASAP. Bottom line: document everything.",
                textZh:
                  "打我们的紧急热线——保单卡上有，全天运行。医疗的话每张收据都留着让医生写报告。行李丢了？马上向航空公司和当地警察报告。总之：所有东西都记录下来。",
                actionHint: "hit up = 联系, around the clock = 全天候, bottom line = 总之",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Call our 24/7 hotline — number's on your card. They can help ya find a doctor, hospital, or deal with emergencies. For medical claims, hold onto ALL receipts and get a report from the doc. For baggage, file a report with the airline AND police within 24 hours. Documentation's key.",
            formalityVariants: {
              casual:
                "Call our 24/7 hotline — number's on your card. They can help ya find a doctor, hospital, or deal with emergencies. For medical claims, hold onto ALL receipts and get a report from the doc. For baggage, file a report with the airline AND police within 24 hours. Documentation's key.",
              standard:
                "Call our 24/7 emergency assistance hotline — the number is on your policy card. They can help you find a doctor, hospital, or handle an emergency. For medical claims, keep ALL receipts and get a medical report from the doctor. For baggage claims, file a report with the airline AND the police within 24 hours. Documentation is everything.",
              formal:
                "In the event of an incident, please contact our 24/7 emergency assistance hotline, the number for which is printed on your policy card. This service can facilitate locating a medical professional or facility, or assist with other emergency situations. For medical claims, it is imperative to retain all original receipts and obtain a detailed medical report from the attending physician. For baggage claims, a report must be filed with both the airline and local law enforcement within 24 hours of the incident. Comprehensive documentation is paramount for all claims.",
            },
          },
          {
            speaker: "you",
            textEn: "Very helpful. Thank you for explaining everything so clearly!",
            textZh: "非常有帮助。谢谢你解释得这么清楚！",
            commonMistake: {
              wrong: "You are welcome!",
              correct: "You're welcome!",
              explanation: "\"You're welcome\" 是更地道、更常用的说法，\"You are welcome\" 听起来稍显生硬。",
            },
            culturalNote: "“It's always better to be prepared than to be caught off gua",
            casualVersion: "Super helpful. Thanks for explainin' it all so clear!",
            formalityVariants: {
              casual: "Super helpful. Thanks for explainin' it all so clear!",
              standard: "Very helpful. Thank you for explaining everything so clearly!",
              formal:
                "That was exceptionally helpful. I truly appreciate you elucidating all the details with such clarity.",
            },
          },
          {
            speaker: "them",
            role: "保险顾问",
            textEn:
              "You're welcome! Travel safe, and hopefully you won't need to use the insurance at all. But it's always better to have it and not need it than need it and not have it. Enjoy your trip!",
            textZh: "不客气！旅途平安，希望你完全用不到保险。但有备无患总比需要时没有好。祝旅途愉快！",
            keyPhrases: [
              { en: "travel safe", zh: "旅途平安" },
              { en: "better to have it and not need it", zh: "有备无患" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No problem! Fingers crossed you never have to use it. But peace of mind is worth $85, right? Have an amazing trip!",
                textZh: "没事儿！希望你永远用不到。但花85块买个安心值得吧？旅途愉快！",
                actionHint: "fingers crossed = 祈祷/希望, peace of mind = 安心",
                frequency: "common",
              },
              {
                textEn:
                  "Happy to help! Hopefully the insurance just sits in your email unused. But if anything does happen, you'll be glad it's there. Safe travels and have a blast!",
                textZh: "很高兴帮到你！希望保单就安静躺在邮箱里用不到。但万一出事你会庆幸有它。旅途平安，玩得开心！",
                actionHint: "have a blast = 玩得超开心",
                frequency: "common",
              },
            ],
            casualVersion:
              "No problem! Travel safe, and hopefully you won't even need the insurance. But yeah, better to have it and not need it than need it and not have it. Have a great trip!",
            formalityVariants: {
              casual:
                "No problem! Travel safe, and hopefully you won't even need the insurance. But yeah, better to have it and not need it than need it and not have it. Have a great trip!",
              standard:
                "You're welcome! Travel safe, and hopefully you won't need to use the insurance at all. But it's always better to have it and not need it than need it and not have it. Enjoy your trip!",
              formal:
                "You are most welcome. I wish you safe travels, and sincerely hope that your journey proceeds without any incident requiring the use of your insurance. However, the adage 'it is better to have it and not need it than to need it and not have it' certainly applies. I hope you have a truly enjoyable trip.",
            },
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
            textEn:
              "Hello, I need to file a claim. I had a medical emergency while traveling in Paris — I had to go to the hospital for a broken wrist.",
            textZh: "你好，我需要理赔。我在巴黎旅行时遇到了医疗紧急情况——我摔断了手腕，去了医院。",
            casualVersion:
              "Hey, gotta file a claim. Had a medical emergency in Paris — broke my wrist, went to the hospital.",
            commonMistake: {
              wrong: "Hello, I want to file a claim.",
              correct: "Hello, I need to file a claim.",
              explanation: "I want 听起来生硬，I need to 或 I'd like to 更礼貌。",
            },
            formalityVariants: {
              casual:
                "Hi, gotta file a claim. Had a medical emergency in Paris — broke my wrist, went to the hospital.",
              standard:
                "Hello, I need to file a claim. I had a medical emergency while traveling in Paris — I had to go to the hospital for a broken wrist.",
              formal:
                "Good morning/afternoon, I am calling to initiate a claim. I experienced a medical emergency during my recent travel to Paris, necessitating a visit to the hospital for a fractured wrist.",
            },
          },
          {
            speaker: "them",
            role: "理赔专员",
            textEn:
              "I'm sorry to hear that. Let me help you with your claim. Can I have your policy number, please? And can you tell me when this happened and which hospital you went to?",
            textZh: "很抱歉听到这个。我来帮你处理理赔。请告诉我你的保单号。另外这是什么时候发生的，去的哪家医院？",
            keyPhrases: [
              { en: "file a claim", zh: "申请理赔" },
              { en: "policy number", zh: "保单号" },
              { en: "which hospital", zh: "哪家医院" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Oh no, I'm sorry about that. Let's get your claim started. What's your policy number? And when did this happen — which hospital did you end up at?",
                textZh: "天哪，很抱歉。我们开始理赔吧。保单号是什么？什么时候发生的——最后去了哪家医院？",
                actionHint: "end up at = 最终去了（某地）",
                frequency: "common",
              },
              {
                textEn:
                  "That sounds rough. Don't worry, we'll take care of this. Can you pull up your policy number for me? And walk me through what happened — when and where?",
                textZh: "听起来不容易。别担心，我们来处理。能查一下你的保单号吗？跟我说说经过——什么时候在哪里？",
                actionHint: "that sounds rough = 听起来很艰难, walk me through = 给我讲讲",
                frequency: "common",
              },
            ],
            casualVersion:
              "Aw, sorry to hear that. Lemme help with your claim. Got your policy number? And, uh, when'd it happen and which hospital?",
            formalityVariants: {
              casual:
                "Oh, sorry to hear that. Lemme get your claim started. What's your policy number? And when'd it happen, what hospital?",
              standard:
                "I'm sorry to hear that. Let me help you with your claim. Can I have your policy number, please? And can you tell me when this happened and which hospital you went to?",
              formal:
                "I am truly sorry to learn of your incident. I would be pleased to assist you with your claim. May I please have your policy number? Additionally, could you kindly provide the date of the occurrence and the name of the medical facility you attended?",
            },
          },
          {
            speaker: "you",
            textEn:
              "My policy number is TI-29384. It happened last Tuesday. I went to the American Hospital of Paris. The total bill was 3,200 euros.",
            textZh: "我的保单号是TI-29384。上周二发生的。去了巴黎美国医院。总账单是3200欧元。",
            casualVersion:
              "Policy number's TI-29384. Happened last Tuesday. Went to the American Hospital of Paris. Total bill was 3,200 euros.",
            commonMistake: {
              wrong: "It happened on last Tuesday.",
              correct: "It happened last Tuesday.",
              explanation: '日期前有 "last", "next", "this", "every" 等时，不加介词 "on"。',
            },
            formalityVariants: {
              casual: "TI-29384's my policy number. Last Tuesday. American Hospital of Paris. Bill was 3,200 euros.",
              standard:
                "My policy number is TI-29384. It happened last Tuesday. I went to the American Hospital of Paris. The total bill was 3,200 euros.",
              formal:
                "My policy number is TI-29384. The incident occurred last Tuesday, and I sought treatment at the American Hospital of Paris. The total amount for the services rendered was 3,200 euros.",
            },
          },
          {
            speaker: "them",
            role: "理赔专员",
            textEn:
              "Thank you. I can see your Standard plan covers medical emergencies up to $100,000, so this should be fully covered minus your deductible of $150. To process the claim, I'll need the following documents: the hospital invoice, the medical report or discharge summary, proof of payment, and any pharmacy receipts if you were prescribed medication.",
            textZh:
              "谢谢。我看到你的标准方案覆盖最高10万美元的紧急医疗，所以这应该可以全额理赔，减去150美元的免赔额。处理理赔需要以下文件：医院发票、医疗报告或出院小结、付款证明，以及如果开了药的话药房收据。",
            alternativeExpressions: [
              {
                textEn:
                  "Got it. Your plan covers up to $100K in medical, so $3,200 is well within that. You'll just have the $150 deductible. To get this processed, I need the hospital bill, a doctor's report, proof you paid, and pharmacy receipts if they gave you any meds.",
                textZh:
                  "好的。你的方案保最高10万美元医疗，3200完全在范围内。只有150美元免赔额。处理理赔需要：医院账单、医生报告、付款证明、如果开了药还要药房收据。",
                actionHint: "well within = 完全在范围内",
                frequency: "common",
              },
              {
                textEn:
                  "Looking good — your Standard plan handles up to $100,000 medical, so this is definitely covered minus the $150 deductible. I just need the paperwork: hospital invoice, doctor's report, payment proof, and any prescriptions.",
                textZh:
                  "没问题——你的标准方案保到10万美元医疗，这个绝对在保障范围内减去150免赔额。我需要这些文件：医院发票、医生报告、付款证明和处方单。",
                actionHint: "looking good = 情况不错（这里指理赔没问题）",
                frequency: "common",
              },
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
            casualVersion:
              "Thanks. Your Standard plan covers medical emergencies up to $100K, so this should be covered, minus your $150 deductible. For the claim, I'll need: hospital invoice, medical report or discharge summary, proof of payment, and any pharmacy receipts if you got meds.",
            formalityVariants: {
              casual:
                "Thanks. Your Standard plan covers up to $100K for emergencies, so this should be good, just minus your $150 deductible. I'll need the hospital invoice, medical report/discharge summary, proof of payment, and any pharmacy receipts if you got prescriptions.",
              standard:
                "Thank you. I can see your Standard plan covers medical emergencies up to $100,000, so this should be fully covered minus your deductible of $150. To process the claim, I'll need the following documents: the hospital invoice, the medical report or discharge summary, proof of payment, and any pharmacy receipts if you were prescribed medication.",
              formal:
                "Thank you for that information. I can confirm that your Standard plan provides coverage for medical emergencies up to $100,000, therefore this particular incident should be fully reimbursed, less your $150 deductible. In order to process this claim, we will require the submission of the following documentation: the hospital invoice, a medical report or discharge summary, proof of payment, and any pertinent pharmacy receipts for prescribed medications.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I have all the documents. The hospital gave me everything in French — is that okay, or do I need to get them translated?",
            textZh: "我有所有文件。医院给的都是法语的——可以吗，还是需要翻译？",
            casualVersion:
              "Got all the documents. Hospital gave 'em to me in French — that okay, or d'I gotta get 'em translated?",
            commonMistake: {
              wrong: "I have all documents.",
              correct: "I have all the documents.",
              explanation: '"所有" 的文件，通常需要定冠词 "the"。',
            },
            formalityVariants: {
              casual:
                "Yeah, got all the documents. They're all in French though — is that cool, or should I get 'em translated?",
              standard:
                "I have all the documents. The hospital gave me everything in French — is that okay, or do I need to get them translated?",
              formal:
                "I possess all the necessary documentation. However, the hospital provided these materials in French. Is this acceptable, or will a translation be required?",
            },
          },
          {
            speaker: "them",
            role: "理赔专员",
            textEn:
              "French documents are fine — we have multilingual processors. You can upload everything through our online claims portal or email them to claims@travelinsure.com. Once we receive all documents, the review process takes about 10 to 15 business days. If approved, we'll reimburse you by direct deposit or check — your preference.",
            textZh:
              "法语文件没问题——我们有多语言处理人员。你可以通过我们的在线理赔门户上传，或者发邮件到claims@travelinsure.com。收到所有文件后，审核过程大约需要10到15个工作日。通过的话，我们通过直接存款或支票报销——看你的偏好。",
            keyPhrases: [
              { en: "multilingual processors", zh: "多语言处理人员" },
              { en: "claims portal", zh: "理赔门户" },
              { en: "review process", zh: "审核过程" },
              { en: "if approved", zh: "通过的话" },
              { en: "reimburse", zh: "报销" },
              { en: "direct deposit", zh: "直接存款" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No worries about French — we deal with documents in all languages. Just upload everything to our claims portal or shoot it over to claims@travelinsure.com. Once we have it all, figure 10 to 15 business days for review. We'll pay you back via direct deposit or a check.",
                textZh:
                  "法语没问题——我们处理各种语言的文件。上传到理赔门户或发邮件到claims@travelinsure.com。收齐之后大概10到15个工作日审核。通过银行转账或支票退给你。",
                actionHint: "shoot it over = 发过来, figure = 大概",
                frequency: "common",
              },
              {
                textEn:
                  "French is totally fine — our team handles multiple languages. You can submit everything online or email it in. Turnaround is about two to three weeks once we have everything. Then we'll reimburse you however you prefer — bank deposit or check.",
                textZh:
                  "法语完全可以——我们团队处理多种语言。你可以在线提交或邮件发来。收齐文件后大约两到三周。然后按你的偏好报销——银行转账或支票。",
                actionHint: "turnaround = 处理周期",
                frequency: "common",
              },
            ],
            casualVersion:
              "French docs are fine — we got multilingual processors. Just upload 'em through our online claims portal or email 'em to claims@travelinsure.com. Once we get everything, review takes 'bout 10 to 15 business days. If approved, we'll pay ya by direct deposit or check — whatever you prefer.",
            formalityVariants: {
              casual:
                "No worries, French docs are cool — we have people who speak it. Just upload everything on our portal or email it to claims@travelinsure.com. After we get it, review's usually 10-15 business days. If it's approved, we'll send the money via direct deposit or check — you pick.",
              standard:
                "French documents are fine — we have multilingual processors. You can upload everything through our online claims portal or email them to claims@travelinsure.com. Once we receive all documents, the review process takes about 10 to 15 business days. If approved, we'll reimburse you by direct deposit or check — your preference.",
              formal:
                "French documentation is perfectly acceptable, as we employ multilingual processors. You may submit all required materials either through our secure online claims portal or by emailing them directly to claims@travelinsure.com. Upon receipt of all documents, the review process typically spans 10 to 15 business days. Should the claim be approved, reimbursement will be issued either via direct deposit or check, according to your preference.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Direct deposit would be great. I also had to change my flight because of the injury — the change fee was $350. Is that covered too?",
            textZh: "直接存款就好。我因为受伤还改签了航班——改签费350美元。这个也保吗？",
            casualVersion:
              "Direct deposit'd be great. Also hadda change my flight 'cause of the injury — change fee was $350. Is that covered too?",
            commonMistake: {
              wrong: "Direct deposit will be great.",
              correct: "Direct deposit would be great.",
              explanation: '"would be" 用于表达希望或假设，比 "will be" 更委婉。',
            },
            formalityVariants: {
              casual:
                "Yeah, direct deposit works best. Oh, and I had to change my flight 'cause of the wrist — cost me $350. Does that get covered?",
              standard:
                "Direct deposit would be great. I also had to change my flight because of the injury — the change fee was $350. Is that covered too?",
              formal:
                "Direct deposit would be my preferred method of reimbursement. Additionally, I incurred a $350 change fee due to a necessary flight alteration resulting from my injury. Is this expense also covered under my policy?",
            },
          },
          {
            speaker: "them",
            role: "理赔专员",
            textEn:
              "Yes! Trip interruption due to a medical emergency is covered under your plan. Include the flight change receipt and a note from your doctor saying you needed to modify your travel plans. We'll process both claims together.",
            textZh:
              "保的！因为医疗紧急情况导致的行程中断在你的方案保障范围内。附上航班改签收据和医生出具的说明，证明你需要修改旅行计划。我们会一起处理两项理赔。",
            keyPhrases: [
              { en: "trip interruption", zh: "行程中断" },
              { en: "flight change receipt", zh: "航班改签收据" },
              { en: "note from your doctor", zh: "医生的证明" },
              { en: "modify your travel plans", zh: "修改旅行计划" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Absolutely — that falls under trip interruption, which your plan covers. Just throw in the receipt for the flight change and get your doctor to write something saying the injury required you to change your plans. We'll bundle both claims.",
                textZh:
                  "当然——这属于行程中断，你的方案保的。附上改签收据让医生写个证明说伤势需要你改变计划。两个理赔我们一起处理。",
                actionHint: "falls under = 属于, bundle = 打包一起处理",
                frequency: "common",
              },
              {
                textEn:
                  "Good news — yes, that's covered. Trip interruption kicks in when a medical emergency forces you to change plans. Just include the flight change receipt and a doctor's letter. We'll handle both claims at once.",
                textZh:
                  "好消息——保的。医疗紧急情况迫使你改变计划时行程中断保障就生效了。附上改签收据和医生信就行。两个理赔一起办。",
                actionHint: "kicks in = 生效, handle at once = 一起处理",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep! Trip interruption from a medical emergency's covered. Just include the flight change receipt and a doc's note saying you hadda change your travel plans. We'll process both together.",
            formalityVariants: {
              casual:
                "Totally! If a medical emergency makes you change your trip, that's covered. Just send in the flight change receipt and a doctor's note explaining why you needed to. We'll handle both claims at once.",
              standard:
                "Yes! Trip interruption due to a medical emergency is covered under your plan. Include the flight change receipt and a note from your doctor saying you needed to modify your travel plans. We'll process both claims together.",
              formal:
                "Yes, indeed. Trip interruption stemming from a medical emergency is comprehensively covered under the terms of your policy. Kindly provide the flight change receipt along with a physician's note attesting to the necessity of modifying your travel arrangements. We will proceed to process both claims concurrently.",
            },
          },
          {
            speaker: "you",
            textEn:
              "That's great. So the total claim would be the hospital bill of 3,200 euros plus the $350 flight change, minus the $150 deductible?",
            textZh: "太好了。那总理赔金额是医院账单3200欧元加上350美元改签费，减去150美元免赔额？",
            casualVersion:
              "Sweet. So the total claim's the hospital bill (3,200 euros) plus the $350 flight change, minus the $150 deductible?",
            commonMistake: {
              wrong: "So the total claim is the hospital bill...",
              correct: "So the total claim would be the hospital bill...",
              explanation: '"would be" 更常用于假设性确认或询问结果。',
            },
            formalityVariants: {
              casual:
                "Awesome. So, total claim is the 3,200 euro hospital bill, plus the $350 flight change, less the $150 deductible?",
              standard:
                "That's great. So the total claim would be the hospital bill of 3,200 euros plus the $350 flight change, minus the $150 deductible?",
              formal:
                "That is excellent news. Therefore, to confirm, the total claim amount would encompass the hospital bill of 3,200 euros, augmented by the $350 flight change fee, with the deduction of the $150 deductible?",
            },
          },
          {
            speaker: "them",
            role: "理赔专员",
            textEn:
              "Exactly. The euros will be converted to dollars at the exchange rate on the date of payment. Your estimated reimbursement is approximately $3,700 after the deductible. I'll send you a claim form and a checklist of required documents by email right now. If you have any questions during the process, call our claims line directly.",
            textZh:
              "没错。欧元会按付款日的汇率换算成美元。扣除免赔额后，你预计能收到大约3700美元的报销。我现在就把理赔表格和所需文件清单发到你邮箱。处理过程中如果有问题，直接打我们的理赔专线。",
            keyPhrases: [
              { en: "converted to dollars", zh: "换算成美元" },
              { en: "date of payment", zh: "付款日" },
              { en: "estimated reimbursement", zh: "预计报销金额" },
              { en: "claim form", zh: "理赔表格" },
              { en: "checklist", zh: "清单" },
              { en: "claims line", zh: "理赔专线" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That's right. We'll convert the euros at the rate from when you paid. After the deductible, you're looking at roughly $3,700 back. I'll email you the claim form and a checklist right now. Any questions along the way, just call our claims team.",
                textZh:
                  "对的。欧元按你付款时的汇率换算。扣除免赔额后大约能拿回3700美元。我现在就发理赔表和清单给你。过程中有问题直接打理赔团队。",
                actionHint: "along the way = 过程中",
                frequency: "common",
              },
              {
                textEn:
                  "Yep. Euros get converted based on the payment date rate. So ballpark $3,700 in your pocket after the deductible. I'm sending over the form and document checklist now. If anything's confusing, ring our claims line — they'll walk you through it.",
                textZh:
                  "对。欧元按付款日汇率换算。大约3700美元到你口袋扣完免赔额后。我现在发表格和文件清单。有不清楚的打理赔专线——他们会一步一步教你。",
                actionHint: "ballpark = 大约（口语）, in your pocket = 到你手里",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Exactly. Euros'll convert to dollars at the payment date's exchange rate. You'll get 'bout $3,700 back after the deductible. I'll email you a claim form and a doc checklist right now. Any questions while you're doing it, just call our claims line.",
            formalityVariants: {
              casual:
                "Yep. Euros get converted to dollars based on the exchange rate when we pay you. Expect about $3,700 back after your deductible. I'll email you the claim form and a doc checklist right away. If you have any questions, just call our claims line.",
              standard:
                "Exactly. The euros will be converted to dollars at the exchange rate on the date of payment. Your estimated reimbursement is approximately $3,700 after the deductible. I'll send you a claim form and a checklist of required documents by email right now. If you have any questions during the process, call our claims line directly.",
              formal:
                "Precisely. The euros will be converted to US dollars utilizing the prevailing exchange rate on the date of disbursement. Your estimated reimbursement, following the application of your deductible, is approximately $3,700. I will now dispatch a claim form and a comprehensive checklist of required documents to your email address. Should any inquiries arise during the claims process, please do not hesitate to contact our dedicated claims line directly.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you so much. I'm really glad I bought travel insurance.",
            textZh: "非常感谢。真庆幸买了旅行保险。",
            culturalNote: "“Don't hesitate to call”是英语中很常见的客气说法，意为“请随时联系”。",
            casualVersion: "Thanks a ton. So glad I got travel insurance.",
            commonMistake: {
              wrong: "I'm really glad I buy travel insurance.",
              correct: "I'm really glad I bought travel insurance.",
              explanation: '过去买的保险，所以用过去式 "bought"。',
            },
            formalityVariants: {
              casual: "Thanks a bunch. Seriously glad I got travel insurance.",
              standard: "Thank you so much. I'm really glad I bought travel insurance.",
              formal:
                "I sincerely appreciate your assistance. I am exceptionally pleased that I opted to purchase travel insurance.",
            },
          },
          {
            speaker: "them",
            role: "理赔专员",
            textEn:
              "That's exactly what it's for. I hope your wrist heals quickly. Take care, and don't hesitate to call if you need anything else.",
            textZh: "保险就是为了这种时候用的。希望你的手腕早日康复。保重，有任何需要随时打电话。",
            keyPhrases: [
              { en: "heals quickly", zh: "早日康复" },
              { en: "take care", zh: "保重" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That's what insurance is for! Hope your wrist gets better soon. Take it easy, and don't be shy about calling us if you need anything.",
                textZh: "保险就是为了这个！希望你手腕快点好。别太辛苦，有需要别不好意思打电话。",
                actionHint: "take it easy = 别太辛苦/注意休息, don't be shy = 别不好意思",
                frequency: "common",
              },
              {
                textEn:
                  "This is exactly why you bought it! Wishing you a speedy recovery. Hit us up anytime if you have more questions.",
                textZh: "这就是你买保险的意义！祝你早日康复。有更多问题随时联系我们。",
                actionHint: "hit us up = 联系我们（口语）, speedy recovery = 早日康复",
                frequency: "common",
              },
            ],
            casualVersion:
              "That's exactly what it's for. Hope your wrist heals quick. Take care, and don't hesitate to call if you need anything else.",
            formalityVariants: {
              casual:
                "That's what it's there for! Hope your wrist gets better fast. Be well, and gimme a call if you need anything else.",
              standard:
                "That's exactly what it's for. I hope your wrist heals quickly. Take care, and don't hesitate to call if you need anything else.",
              formal:
                "That is precisely the purpose of our travel insurance. I sincerely hope for a swift and complete recovery of your wrist. Please take good care, and do not hesitate to contact us should you require any further assistance.",
            },
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
            textEn:
              "Hi, I'd like to apply for a credit card. I moved to the US about three months ago and I don't have any credit history here yet.",
            textZh: "你好，我想申请信用卡。我大约三个月前搬到美国，这里还没有任何信用记录。",
            culturalNote:
              "在美国，信用记录（credit history）和信用分数（credit score）非常重要，影响租房、贷款甚至找工作。新移民建立信用是第一要务。",
            casualVersion:
              "Hey, wanna apply for a credit card. Just moved to the US, like, three months ago, no credit history here yet.",
            commonMistake: {
              wrong: "I want to apply for a credit card.",
              correct: "I'd like to apply for a credit card.",
              explanation: "在美国，直接说 'I want' 听起来可能过于直接或要求。用 'I'd like to...' 更礼貌和委婉。",
            },
            formalityVariants: {
              casual: "Hey, wanna get a credit card. Just moved here a few months ago, no credit history yet.",
              standard:
                "Hi, I'd like to apply for a credit card. I moved to the US about three months ago and I don't have any credit history here yet.",
              formal:
                "Good morning/afternoon, I am interested in initiating an application for a credit card. I recently relocated to the United States approximately three months ago and, as such, I currently possess no established credit history within the country.",
            },
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn:
              "Welcome! Building credit is an important first step. Since you don't have US credit history, I'd recommend starting with a secured credit card. With a secured card, you put down a deposit that becomes your credit limit.",
            textZh:
              "欢迎！建立信用是重要的第一步。由于您没有美国信用记录，我建议从一张有担保信用卡开始。有担保卡需要您存一笔押金，这笔押金就是您的信用额度。",
            alternativeExpressions: [
              {
                textEn:
                  "So since you're starting from scratch credit-wise, your best bet is a secured card. You put down a deposit and that's your limit. It's the easiest way to start building your credit score.",
                textZh:
                  "因为你的信用记录从零开始，最好的选择是有担保卡。存一笔押金那就是你的额度。这是建立信用分最简单的方式。",
                actionHint: "from scratch = 从零开始, best bet = 最好的选择",
                frequency: "common",
              },
              {
                textEn:
                  "No credit history here yet? That's totally normal for new arrivals. A secured card is the way to go — you basically front the money as a deposit, and that's your spending limit.",
                textZh: "还没有信用记录？新来的人都这样很正常。有担保卡最合适——你先存一笔钱当押金就是你的消费额度。",
                actionHint: "front the money = 先付钱/预付",
                frequency: "common",
              },
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
            casualVersion:
              "Welcome! Gotta build that credit first. Since you got no US credit history, I'd say start with a secured card. You basically put down a deposit, and that's your limit.",
            formalityVariants: {
              casual:
                "Hey, welcome! Gotta build your credit. No US history? Start with a secured card. You put down a deposit, that's your limit.",
              standard:
                "Welcome! Building credit is an important first step. Since you don't have US credit history, I'd recommend starting with a secured credit card. With a secured card, you put down a deposit that becomes your credit limit.",
              formal:
                "Welcome to our institution. Establishing a credit profile is a crucial initial step. Given your lack of prior credit history within the United States, I would advise commencing with a secured credit card. This type of card requires an upfront deposit, which subsequently functions as your designated credit limit.",
            },
          },
          {
            speaker: "you",
            textEn: "How does the secured card work? And how long until I can get a regular credit card?",
            textZh: "有担保卡怎么运作？多久之后能拿到普通信用卡？",
            casualVersion:
              "So, how's the secured card actually work? And, like, how long 'til I can get a regular one?",
            commonMistake: {
              wrong: "How work the secured card?",
              correct: "How does the secured card work?",
              explanation: "陈述句变疑问句时，需要助动词 do/does。",
            },
            formalityVariants: {
              casual: "How's the secured card work? And how long till a regular one?",
              standard: "How does the secured card work? And how long until I can get a regular credit card?",
              formal:
                "Could you please elaborate on the operational mechanism of the secured credit card? Furthermore, what is the approximate timeframe before I would be eligible to transition to an unsecured, standard credit card?",
            },
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn:
              "You deposit, say, $500, and that becomes your spending limit. Use it for small purchases and pay the full balance every month — on time. After about 6 to 12 months of responsible use, we'll review your account and may upgrade you to an unsecured card with a higher limit. Your deposit gets refunded at that point.",
            textZh:
              "比如你存500美元，这就是你的消费额度。用它做小额消费，每月按时还清全部余额。大约6到12个月的良好使用后，我们会审查你的账户，可能升级为无担保卡并提高额度。到时候押金会退还。",
            keyPhrases: [
              { en: "spending limit", zh: "消费额度" },
              { en: "pay the full balance", zh: "还清全部余额" },
              { en: "on time", zh: "按时" },
              { en: "responsible use", zh: "负责任的使用" },
              { en: "unsecured card", zh: "无担保卡/普通信用卡" },
              { en: "refunded", zh: "退还" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Think of the deposit as a safety net. Use the card normally — just make sure to pay it off each month. Good habits now lead to a better credit score later.",
                textZh: "把押金想象成安全网。正常用卡——每月记得还清。现在的好习惯会带来以后更好的信用分。",
                actionHint: "确认理解并询问更多细节",
                frequency: "common",
              },
            ],
            casualVersion:
              "So, you put down, like, 500 bucks, right? That's your spending limit. Just use it for small stuff, pay it all off monthly, no missing payments. Then, after 6 to 12 months of doing that, we'll check your account, maybe upgrade you to a regular card with more limit. You get your deposit back then.",
            formalityVariants: {
              casual:
                "You put down, like, $500, that's your limit. Use it for little things, pay it all back monthly, on time. After 6-12 months, we'll check it, maybe upgrade you to a regular card, more limit. You get your money back then.",
              standard:
                "You deposit, say, $500, and that becomes your spending limit. Use it for small purchases and pay the full balance every month — on time. After about 6 to 12 months of responsible use, we'll review your account and may upgrade you to an unsecured card with a higher limit. Your deposit gets refunded at that point.",
              formal:
                "One would typically deposit, for instance, $500, which subsequently serves as your assigned spending limit. It is advisable to utilize it for minor expenditures and ensure the complete balance is remitted punctually each month. Following approximately six to twelve months of diligent and responsible usage, your account will undergo a review, and there is a possibility of upgrading you to an unsecured credit card with an increased credit limit. Your initial deposit would be refunded at that juncture.",
            },
          },
          {
            speaker: "you",
            textEn: "What's a good credit score in the US? I keep hearing people talk about it.",
            textZh: "在美国多少算好的信用分？我一直听人提到。",
            culturalNote: "美国信用分对日常生活影响很大，租房、贷款、保险甚至工作都会看",
            casualVersion: "So, like, what's a 'good' credit score here? Everyone's always talking about it.",
            commonMistake: {
              wrong: "What is good credit score?",
              correct: "What's a good credit score?",
              explanation: "名词前面缺少冠词 'a' 或 'the' 是常见错误。",
            },
            formalityVariants: {
              casual: "What's a 'good' credit score here? Everyone talks about it.",
              standard: "What's a good credit score in the US? I keep hearing people talk about it.",
              formal:
                "Could you please inform me what constitutes a favorable credit score within the United States? I frequently encounter discussions regarding this metric.",
            },
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn:
              "Credit scores range from 300 to 850. Here's a rough breakdown: below 580 is poor, 580 to 669 is fair, 670 to 739 is good, 740 to 799 is very good, and 800 plus is excellent. For most things like renting an apartment or getting a car loan, you'll want at least 670.",
            textZh:
              "信用分范围是300到850。大致分级：580以下是差，580到669是一般，670到739是好，740到799是很好，800以上是优秀。租房或车贷等大部分场景至少需要670。",
            alternativeExpressions: [
              {
                textEn:
                  "It goes from 300 to 850. Anything under 580 is rough. 580 to 670 is okay-ish. 670 to 740 is solid — that's where you want to be for renting, car loans, all that. Above 740 is great, and 800 plus is basically gold.",
                textZh:
                  "范围是300到850。580以下比较惨。580到670算凑合。670到740不错——租房、车贷什么的至少要这个分。740以上很好，800以上基本就是金牌了。",
                actionHint: "okay-ish = 还凑合, solid = 不错/靠谱",
                frequency: "common",
              },
              {
                textEn:
                  "Think of it like a report card — 300 to 850. Below 580 and you'll have a tough time. 670 and above is where doors start opening for apartments and loans. 740 plus gets you the best rates on everything.",
                textZh:
                  "就像成绩单——300到850。580以下日子不好过。670以上租房和贷款的门就打开了。740以上什么都能拿到最好的利率。",
                actionHint: "doors start opening = 机会/可能性打开了",
                frequency: "common",
              },
            ],
            keyPhrases: [
              { en: "credit scores", zh: "信用分" },
              { en: "breakdown", zh: "分级/细分" },
              { en: "car loan", zh: "车贷" },
            ],
            culturalMeaning:
              "美国的信用分系统（FICO score）影响生活方方面面。中国虽然有芝麻信用等系统，但美国的信用分制度更严格、影响更深远。",
            casualVersion:
              "Scores go from 300 to 850. Basically, under 580 is bad, 580-669 is okay, 670-739 is good, 740-799 is really good, and 800+ is excellent. For most stuff, like getting an apartment or a car loan, you'll want at least 670.",
            formalityVariants: {
              casual:
                "Scores are 300-850. Under 580 is bad, 580-669 okay, 670-739 good, 740-799 really good, 800+ excellent. For most things, like rent or car loans, you'll want at least 670.",
              standard:
                "Credit scores range from 300 to 850. Here's a rough breakdown: below 580 is poor, 580 to 669 is fair, 670 to 739 is good, 740 to 799 is very good, and 800 plus is excellent. For most things like renting an apartment or getting a car loan, you'll want at least 670.",
              formal:
                "Credit scores typically span a range from 300 to 850. A general categorization would be as follows: below 580 is considered poor, 580 to 669 is fair, 670 to 739 is good, 740 to 799 is very good, and scores exceeding 800 are excellent. For essential transactions such as apartment rentals or automobile financing, a score of at least 670 is generally required.",
            },
          },
          {
            speaker: "you",
            textEn:
              "What factors affect my credit score? I want to make sure I'm doing everything right from the start.",
            textZh: "什么因素影响信用分？我想从一开始就做对。",
            casualVersion: "What messes with my credit score? Wanna make sure I do everything right from day one.",
            commonMistake: {
              wrong: "What factor affect my credit score?",
              correct: "What factors affect my credit score?",
              explanation: "名词的单复数（factor vs factors）和动词时态（affect vs affects）是常见错误。",
            },
            formalityVariants: {
              casual: "What affects my credit score? Gotta do it right from the start.",
              standard:
                "What factors affect my credit score? I want to make sure I'm doing everything right from the start.",
              formal:
                "Could you please detail the various factors that influence one's credit score? My intention is to ensure adherence to best practices from the outset.",
            },
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn:
              "Great question. The biggest factor is payment history — always pay on time. Second is credit utilization — try to use less than 30 percent of your limit. Length of credit history matters too, which is why starting early is smart. Don't apply for too many cards at once, and don't close old accounts.",
            textZh:
              "好问题。最大的因素是还款记录——一定要按时还。第二是信用使用率——尽量用不超过额度的30%。信用历史长度也很重要，这就是为什么尽早开始很明智。不要同时申请太多卡，也不要关掉旧账户。",
            alternativeExpressions: [
              {
                textEn:
                  "Number one rule: pay your bill on time, every time. Number two: don't max out your card — keep it under 30% of your limit. The longer you've had credit, the better. And don't go crazy applying for a bunch of cards all at once.",
                textZh:
                  "第一条规则：每次都按时还账单。第二：不要刷爆卡——用不超过额度的30%。信用历史越长越好。也别一口气申请一堆卡。",
                actionHint: "max out = 刷爆, go crazy = 疯狂地",
                frequency: "common",
              },
              {
                textEn:
                  "The short version: pay on time, don't spend more than a third of your limit, and let your accounts age. Avoid opening too many accounts at once and never close your oldest card. That's the recipe for a good score.",
                textZh:
                  "简单来说：按时还款，不要花超过额度的三分之一，让账户时间越长越好。不要同时开太多账户也别关掉最老的卡。这就是好信用分的秘诀。",
                actionHint: "the short version = 简单来说, let your accounts age = 让账户慢慢积累时间",
                frequency: "common",
              },
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
            casualVersion:
              "Good question. Biggest thing is paying on time, always. Then, don't max out your cards — keep it under 30% of your limit. How long you've had credit matters too, so start early. Oh, and don't get a bunch of cards all at once, and don't close your old ones.",
            formalityVariants: {
              casual:
                "Good question. Payment history's key — pay on time. Next, keep usage under 30% of your limit. Credit history length matters too, so start early. Don't apply for tons of cards at once, and don't close old accounts.",
              standard:
                "Great question. The biggest factor is payment history — always pay on time. Second is credit utilization — try to use less than 30 percent of your limit. Length of credit history matters too, which is why starting early is smart. Don't apply for too many cards at once, and don't close old accounts.",
              formal:
                "That is an excellent inquiry. The paramount factor is one's payment history, necessitating punctual remittances without fail. Subsequently, credit utilization, wherein maintaining usage below 30 percent of your available limit is advisable, holds significant weight. The longevity of your credit history also contributes substantially, thus initiating credit establishment early is a prudent strategy. Furthermore, refrain from submitting multiple credit applications concurrently, and avoid closing long-standing accounts.",
            },
          },
          {
            speaker: "you",
            textEn: "This is really helpful. Let me apply for the secured card today. What documents do I need?",
            textZh: "这些信息太有用了。我今天就申请有担保卡。需要什么文件？",
            casualVersion: "Super helpful! I'm gonna apply for that secured card today. What documents do I need?",
            commonMistake: {
              wrong: "What document I need?",
              correct: "What documents do I need?",
              explanation: "询问'什么'时，若后面跟可数名词，通常需要复数形式，且需要助动词 'do'。",
            },
            formalityVariants: {
              casual: "This is super helpful. I'll apply for the secured card today. What docs do I need?",
              standard: "This is really helpful. Let me apply for the secured card today. What documents do I need?",
              formal:
                "I find this information exceptionally beneficial. I would like to proceed with an application for the secured credit card today. Could you please provide a list of the required documentation?",
            },
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn:
              "You'll need your passport, your Social Security Number or ITIN, proof of address like a utility bill or lease, and your initial deposit — minimum $200, maximum $2,500. The application takes about 15 minutes and you'll usually get a decision the same day.",
            textZh:
              "你需要护照、社会安全号码或 ITIN、地址证明如水电单或租约、以及初始押金——最低200美元，最高2500美元。申请大概15分钟，通常当天就能知道结果。",
            alternativeExpressions: [
              {
                textEn:
                  "Grab your passport, SSN or ITIN, something to prove your address — utility bill, lease, whatever — and your deposit. $200 minimum, $2,500 max. We can knock out the application in about 15 minutes and you'll know right away.",
                textZh:
                  "带护照、SSN或ITIN、地址证明——水电单、租约什么的——和押金。最低200最高2500。15分钟就能搞定申请，马上就知道结果。",
                actionHint: "knock out = 快速完成, know right away = 马上知道",
                frequency: "common",
              },
              {
                textEn:
                  "Passport, Social or ITIN, proof of address, and your deposit — anywhere from $200 to $2,500. The whole thing takes 15 minutes tops, and most people get approved on the spot.",
                textZh: "护照、社安号或ITIN、地址证明、押金——200到2500美元。整个过程最多15分钟，大部分人当场批准。",
                actionHint: "tops = 最多, on the spot = 当场",
                frequency: "common",
              },
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
            casualVersion:
              "You'll need your passport, SSN or ITIN, proof of address like a utility bill or lease, and your first deposit — gotta be between $200 and $2,500. The application's only like 15 minutes, and you usually hear back today.",
            formalityVariants: {
              casual:
                "Need your passport, SSN/ITIN, proof of address (utility bill/lease), and your first deposit ($200-$2,500). Application's like 15 mins, usually get a decision today.",
              standard:
                "You'll need your passport, your Social Security Number or ITIN, proof of address like a utility bill or lease, and your initial deposit — minimum $200, maximum $2,500. The application takes about 15 minutes and you'll usually get a decision the same day.",
              formal:
                "You will require your passport, your Social Security Number or Individual Taxpayer Identification Number (ITIN), verifiable proof of address such as a utility bill or a copy of your lease agreement, and your initial deposit, which must be between a minimum of $200 and a maximum of $2,500. The application process typically requires approximately 15 minutes to complete, and a decision is generally rendered on the same business day.",
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
            textEn:
              "I need to report unauthorized charges on my credit card. There are three transactions I didn't make — totaling about $800.",
            textZh: "我需要报告信用卡上的未授权消费。有三笔不是我做的交易——总共大约800美元。",
            casualVersion:
              "Gotta report some unauthorized charges on my card. Like, three transactions I didn't do, adding up to 'bout 800 bucks.",
            commonMistake: {
              wrong: "Report unauthorized charges on my credit card.",
              correct: "I need to report unauthorized charges on my credit card.",
              explanation: "直接说“Report...”听起来像命令，不礼貌。应加上主语和动词。",
            },
            formalityVariants: {
              casual:
                "Need to report some weird charges on my credit card. Three transactions I didn't make, totalin' 'round $800.",
              standard:
                "I need to report unauthorized charges on my credit card. There are three transactions I didn't make, totaling about $800.",
              formal:
                "I wish to report several unauthorized transactions on my credit card account. I've identified three specific charges, which collectively amount to approximately $800, that I did not authorize.",
            },
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn:
              "I'm sorry to hear that. Let me pull up your account. Can you verify your identity first? I'll need your full name, the last four digits of the card, and your date of birth.",
            textZh: "很遗憾。让我调出你的账户。能先验证你的身份吗？我需要你的全名、卡号后四位和出生日期。",
            keyPhrases: [
              { en: "unauthorized charges", zh: "未授权消费" },
              { en: "verify your identity", zh: "验证身份" },
              { en: "last four digits", zh: "后四位" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Oh no, that's not good. Let me get into your account. First though — for security I need to verify who you are. Full name, last four of the card number, and your birthday?",
                textZh: "不好。我来进你的账户。不过首先——为了安全我需要确认你的身份。全名、卡号后四位和生日？",
                actionHint: "last four = 后四位（简略说法）",
                frequency: "common",
              },
              {
                textEn:
                  "I'm really sorry about that. Before I can access your account, I need to confirm your identity real quick. Can you give me your full name, the last four digits on the card, and DOB?",
                textZh: "真的很抱歉。在查看你的账户之前，我需要快速确认身份。能告诉我全名、卡号后四位和出生日期吗？",
                actionHint: "DOB = date of birth 出生日期的缩写",
                frequency: "common",
              },
            ],
            casualVersion:
              "Oh, sorry to hear that. Lemme pull up your account. Can you just verify your identity first? Need your full name, last four of the card, and your DOB.",
            formalityVariants: {
              casual:
                "Man, that sucks. Lemme just pull up your account. First, gotta verify your identity, okay? Need your full name, last 4 digits of the card, and your birthday.",
              standard:
                "I'm sorry to hear that. Let me pull up your account. Can you verify your identity first? I'll need your full name, the last four digits of the card, and your date of birth.",
              formal:
                "I'm genuinely sorry to learn of this situation. I will proceed to access your account. Prior to doing so, could you please confirm your identity by providing your full name, the last four digits of your card, and your date of birth?",
            },
          },
          {
            speaker: "you",
            textEn:
              "My name is Wang Wei, card ending in 4523, born March 15, 1988. The suspicious charges are from yesterday — an electronics store for $350, an online purchase for $275, and a gas station for $180.",
            textZh:
              "我叫王伟，卡号尾号4523，1988年3月15日出生。可疑消费是昨天的——一家电子产品店350美元，一笔网购275美元，一个加油站180美元。",
            casualVersion:
              "Wang Wei, card ends 4523, born March 15, '88. The weird charges were yesterday — electronics store, $350, online for $275, and a gas station, $180.",
            commonMistake: {
              wrong: "Card last four digits 4523.",
              correct: "Card ending in 4523.",
              explanation: "“card ending in”是更常见的说法，直接说“last four digits”也可以，但口语更常用 ending in。",
            },
            formalityVariants: {
              casual:
                "Wang Wei, card's 4523, born March 15, '88. The suspicious charges? Yesterday: $350 from an electronics store, $275 online, and $180 at a gas station.",
              standard:
                "My name is Wang Wei, card ending in 4523, born March 15, 1988. The suspicious charges are from yesterday — an electronics store for $350, an online purchase for $275, and a gas station for $180.",
              formal:
                "Certainly. My name is Wang Wei, and the card number concludes with 4523. My date of birth is March 15, 1988. The unauthorized charges in question occurred yesterday, comprising $350 at an electronics retailer, $275 for an online transaction, and $180 at a fueling station.",
            },
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn:
              "I can see those transactions. First, I'm going to freeze your card immediately to prevent any further unauthorized use. You won't be charged for these transactions — under federal law, your liability for unauthorized credit card charges is limited to $50, and our bank has a zero liability policy.",
            textZh:
              "我能看到这些交易。首先，我立刻冻结你的卡防止进一步未授权使用。这些交易你不需要承担——根据联邦法律，未授权信用卡消费你的责任上限是50美元，而且我们银行有零责任政策。",
            culturalNote: "美国银行对信用卡欺诈的保护非常完善，一般持卡人无需承担损失，这与某些国家不同",
            alternativeExpressions: [
              {
                textEn:
                  "I see them. Okay, first things first — I'm freezing your card right now. The good news is, you're not on the hook for any of this. By law, your max liability is $50, but we do zero liability, so you won't pay a dime.",
                textZh:
                  "我看到了。好的，先做最重要的——我现在就冻结你的卡。好消息是这些你都不用承担。法律规定上限50美元，但我们是零责任政策，你一分钱都不用付。",
                actionHint: "on the hook = 承担责任, not a dime = 一分钱都不用",
                frequency: "common",
              },
              {
                textEn:
                  "Yep, I can see all three. Let me lock down your card right now so nothing else goes through. Don't worry about the money — we have a zero liability policy for fraud, so you won't owe anything.",
                textZh:
                  "嗯，三笔都看到了。我现在就锁定你的卡不让再有交易通过。钱不用担心——我们有欺诈零责任政策，你不需要付任何费用。",
                actionHint: "lock down = 锁定, goes through = 通过/成功",
                frequency: "common",
              },
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
            casualVersion:
              "Yep, see those transactions. First thing, I'm freezing your card right away so no more unauthorized stuff happens. And don't worry, you won't get charged for 'em — federal law says your max liability is 50 bucks, but our bank's got a zero liability policy.",
            formalityVariants: {
              casual:
                "Got those transactions pulled up. Okay, first, I'm freezing your card right now so nothing else can happen. And you won't get charged for these, by the way — federal law limits you to 50 bucks, but we've got a zero liability thing here.",
              standard:
                "I can see those transactions. First, I'm going to freeze your card immediately to prevent any further unauthorized use. You won't be charged for these transactions — under federal law, your liability for unauthorized credit card charges is limited to $50, and our bank has a zero liability policy.",
              formal:
                "I have successfully located and verified those transactions. My immediate action will be to freeze your card to entirely prevent any further unauthorized activity. Please be assured that you will not incur any charges for these specific transactions. Federal regulations stipulate a maximum liability of $50 for unauthorized credit card charges; however, our institution operates under a comprehensive zero liability policy.",
            },
          },
          {
            speaker: "you",
            textEn: "That's a relief. How did this happen? My card is still in my wallet.",
            textZh: "那就放心了。这怎么发生的？卡还在我钱包里。",
            commonMistake: {
              wrong: "My card is still in my wallet, how this happened?",
              correct: "My card is still in my wallet. How did this happen?",
              explanation: "中国人常将疑问句的词序错置，正确应是疑问词开头或助动词提前",
            },
            casualVersion:
              "Whew, that's a relief. But how'd this even happen? My card's still right here in my wallet.",
            formalityVariants: {
              casual: "Oh, thank God. But seriously, how'd this happen? My card's literally still in my wallet.",
              standard: "That's a relief. How did this happen? My card is still in my wallet.",
              formal:
                "That is certainly reassuring news. However, I am perplexed as to how this could have occurred, given that my physical card remains securely in my possession.",
            },
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn:
              "It could be skimming — where criminals copy your card information from an ATM or payment terminal. Or it could be from a data breach at a retailer you've shopped at. We'll investigate the source. In the meantime, I'm issuing a replacement card that will arrive in 5 to 7 business days. Would you like expedited shipping for $15?",
            textZh:
              "可能是盗刷器——犯罪分子从ATM或支付终端复制你的卡信息。也可能是你消费过的商家数据泄露。我们会调查来源。同时，我在为你发一张新卡，5到7个工作日到。要加15美元的加急快递吗？",
            alternativeExpressions: [
              {
                textEn:
                  "Hard to say for sure. Maybe a card skimmer somewhere, or a data breach at a store you've used. We'll dig into it. New card's on the way — should get it in a week. Want to fast-track it for $15?",
                textZh:
                  "很难说具体怎么发生的。可能是某个地方的盗刷器，或者你去过的商家数据泄露。我们会查。新卡已经在路上——大约一周到。要花15块加急吗？",
                actionHint: "fast-track = 加急处理, dig into it = 深入调查",
                frequency: "common",
              },
              {
                textEn:
                  "Could be a skimmer on an ATM or gas pump, or maybe a hacked website. These things happen unfortunately. I'm ordering your replacement card now — 5 to 7 days standard, or $15 for rush delivery.",
                textZh:
                  "可能是ATM或加油机上的盗刷器，或者被黑客攻击的网站。这种事不幸时有发生。我正在下单补办新卡——标准5到7天，或者15美元加急。",
                actionHint: "rush delivery = 加急快递",
                frequency: "common",
              },
            ],
            keyPhrases: [
              { en: "skimming", zh: "盗刷器/侧录" },
              { en: "data breach", zh: "数据泄露" },
              { en: "payment terminal", zh: "支付终端" },
              { en: "replacement card", zh: "补办卡/新卡" },
              { en: "expedited shipping", zh: "加急快递" },
            ],
            culturalMeaning:
              '"Skimming" 在美国是很常见的信用卡诈骗手段。加油站、ATM 和餐厅是高发地点。现在很多卡用芯片（chip）技术来防范。',
            casualVersion:
              "Could be skimming – like, someone copied your card info from an ATM or a terminal. Or maybe a data breach at a store you went to. We'll look into it. Meanwhile, I'm sending a new card; it'll get there in 5-7 biz days. Wanna pay $15 for expedited shipping?",
            formalityVariants: {
              casual:
                "Could be skimming, y'know, where they swipe your info from an ATM or terminal. Or a data breach from a store. We'll figure out where it came from. For now, I'm sending a new card, should be there in 5-7 days. Want to pay 15 bucks to get it faster?",
              standard:
                "It could be skimming — where criminals copy your card information from an ATM or payment terminal. Or it could be from a data breach at a retailer you've shopped at. We'll investigate the source. In the meantime, I'm issuing a replacement card that will arrive in 5 to 7 business days. Would you like expedited shipping for $15?",
              formal:
                "This situation could potentially stem from skimming, a method where illicit individuals surreptitiously replicate your card information from an ATM or point-of-sale terminal. Alternatively, it might originate from a data breach at a retail establishment where you have previously conducted transactions. We will conduct a thorough investigation into the source. Concurrently, I am arranging for a replacement card to be issued, which is estimated to arrive within 5 to 7 business days. Would you be interested in expedited shipping for an additional charge of $15?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please expedite it. But what do I do in the meantime? I need a card for daily expenses.",
            textZh: "是的，请加急。但这段时间我怎么办？我需要卡来日常消费。",
            commonMistake: {
              wrong: "How can I do in the meantime?",
              correct: "What do I do in the meantime?",
              explanation: "中国人常将'怎么做'直译为 'how to do' 或 'how can I do'，此处应为 'what to do'",
            },
            casualVersion:
              "Yeah, expedite it, please. But what do I even do 'til then? I need a card for, like, daily stuff.",
            formalityVariants: {
              casual: "Yeah, rush it. But what am I supposed to do until then? I need a card for daily spending.",
              standard: "Yes, please expedite it. But what do I do in the meantime? I need a card for daily expenses.",
              formal:
                "Yes, please proceed with the expedited shipping. However, I am concerned about my access to funds for daily expenditures during this interim period. What are my options?",
            },
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn:
              "You can add your card to Apple Pay or Google Pay right away — the digital wallet will get the new card number instantly even before the physical card arrives. You can also visit any branch to get a temporary card today. Is there anything else I can help you with?",
            textZh:
              "你可以马上把卡添加到 Apple Pay 或 Google Pay——数字钱包会立即获得新卡号，不用等实体卡到。你也可以去任何网点今天就领一张临时卡。还有什么需要帮助的吗？",
            culturalNote: "美国数字支付普及，很多商家接受Apple Pay/Google Pay，是非常方便的替代方案。",
            keyPhrases: [
              { en: "digital wallet", zh: "数字钱包" },
              { en: "physical card", zh: "实体卡" },
              { en: "temporary card", zh: "临时卡" },
              { en: "branch", zh: "网点/分行" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "In the meantime, your digital wallet will update automatically. You can also get a rush replacement at any of our branches.",
                textZh: "在此期间你的数字钱包会自动更新。你也可以在我们任何网点加急补办。",
                actionHint: "选择方便的方式获取新卡",
                frequency: "common",
              },
            ],
            casualVersion:
              "You can just add your card to Apple Pay or Google Pay right away — the digital wallet'll get the new number instantly, even before the physical card shows up. Or, you can hit up any branch for a temporary card today. Anything else I can help with?",
            formalityVariants: {
              casual:
                "Just add your card to Apple Pay or Google Pay right now — the digital version gets the new number instantly, even before the real card comes. Or, you can swing by any branch for a temporary one today. Anything else?",
              standard:
                "You can add your card to Apple Pay or Google Pay right away — the digital wallet will get the new card number instantly even before the physical card arrives. You can also visit any branch to get a temporary card today. Is there anything else I can help you with?",
              formal:
                "You have the option to immediately link your new card to Apple Pay or Google Pay; the digital wallet will receive the updated card number instantaneously, prior to the arrival of the physical card. Alternatively, you may visit any of our branch locations today to obtain a temporary card. Is there any further assistance I can provide?",
            },
          },
          {
            speaker: "you",
            textEn: "The digital wallet option is great. Should I also file a police report for the fraud?",
            textZh: "数字钱包这个选项很好。我还需要为这个诈骗报警吗？",
            commonMistake: {
              wrong: "I also need to file a police report for the fraud?",
              correct: "Should I also file a police report for the fraud?",
              explanation: "中文陈述句加问号即可表示疑问，英文需要倒装或使用助动词",
            },
            casualVersion: "Digital wallet's awesome. So, should I also file a police report for this fraud?",
            formalityVariants: {
              casual: "Digital wallet, perfect. So, should I file a police report too for this fraud?",
              standard: "The digital wallet option is great. Should I also file a police report for the fraud?",
              formal:
                "The digital wallet option is indeed excellent. Furthermore, is it advisable for me to file a police report concerning this fraudulent activity?",
            },
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn:
              "It's not required for the refund, but I'd recommend it — it creates an official record and may help catch the criminals. You should also check your credit report for any suspicious activity. You can get a free report at annualcreditreport.com. And consider placing a fraud alert on your credit file — that makes it harder for someone to open accounts in your name.",
            textZh:
              "退款不需要报警，但我建议报——这会创建一个官方记录并可能有助于抓住罪犯。你也应该查看信用报告有没有可疑活动。可以在 annualcreditreport.com 免费获取。也考虑在你的信用文件上设置欺诈警报——这样别人更难用你的名字开户。",
            culturalNote: "告知报警、查看信用报告、设置欺诈警报都是美国应对身份盗用和金融欺诈的重要步骤，保障个人权益。",
            keyPhrases: [
              { en: "credit report", zh: "信用报告" },
              { en: "suspicious activity", zh: "可疑活动" },
              { en: "fraud alert", zh: "欺诈警报" },
              { en: "credit file", zh: "信用文件" },
              { en: "open accounts in your name", zh: "用你的名字开户" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It can't hurt. A police report creates a paper trail, and it could help catch whoever did this. Also — pull your credit report at annualcreditreport.com, it's free. And put a fraud alert on your file so nobody can open new accounts using your info.",
                textZh:
                  "报了没坏处。警察记录留个凭证，可能有助于抓到嫌犯。另外——在annualcreditreport.com查免费信用报告。然后设个欺诈警报防止别人用你的信息开新户。",
                actionHint: "can't hurt = 没有坏处, pull your credit report = 查你的信用报告",
                frequency: "common",
              },
              {
                textEn:
                  "Not required, but I'd do it if I were you. Also, definitely check your credit report — annualcreditreport.com gives you one for free. And throw a fraud alert on there while you're at it. Better safe than sorry.",
                textZh:
                  "不是必须的，但换作是我会报。另外一定要查你的信用报告——annualcreditreport.com免费的。顺便设个欺诈警报。小心无大错。",
                actionHint: "while you're at it = 顺便, better safe than sorry = 小心无大错",
                frequency: "common",
              },
            ],
            casualVersion:
              "It's not *required* for your refund, but I'd totally recommend it — it makes an official record and might help catch these guys. Also, you should check your credit report for any weird stuff. Get a free one at annualcreditreport.com. And think about putting a fraud alert on your credit file; makes it way harder for someone to open accounts in your name.",
            formalityVariants: {
              casual:
                "You don't *have* to for the refund, but I'd say do it — it creates an official record and could help catch them. Also, keep an eye on your credit report for anything suspicious; annualcreditreport.com gives you a free one. And definitely consider a fraud alert on your credit file; that makes it way tougher for others to open accounts under your name.",
              standard:
                "It's not required for the refund, but I'd recommend it — it creates an official record and may help catch the criminals. You should also check your credit report for any suspicious activity. You can get a free report at annualcreditreport.com. And consider placing a fraud alert on your credit file — that makes it harder for someone to open accounts in your name.",
              formal:
                "While filing a police report is not a prerequisite for processing your refund, I would strongly advise it, as it establishes an official record and could significantly aid in the apprehension of the perpetrators. Furthermore, it is prudent to regularly monitor your credit report for any anomalous activity, which can be accessed free of charge at annualcreditreport.com. I also suggest placing a fraud alert on your credit file, as this measure substantially increases the difficulty for unauthorized individuals to open accounts using your identity.",
            },
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
            textEn:
              "Hi, I've been using a prepaid tourist SIM card but I'm staying in the US long-term now. I'd like to switch to a monthly plan. What do you recommend?",
            textZh: "你好，我一直在用预付费旅游SIM卡，但现在要长期在美国了。我想换成月租套餐。有什么推荐？",
            casualVersion: "Hey, I've been using a prepaid tourist SIM, but I'm gonna be in the US long-term now. Wanna switch to a monthly plan. Whatcha recommend?",
            commonMistake: {
              wrong: "I want to switch to a monthly plan.",
              correct: "I'd like to switch to a monthly plan.",
              explanation: "I want 在美国听起来很生硬，用 I'd like 更礼貌",
            },
            formalityVariants: {
              casual: "Hey, using a prepaid SIM, but I'm here long-term now. Wanna switch to a monthly plan. Got any recommendations?",
              standard: "Hi, I've been using a prepaid tourist SIM card, but now that I'm in the US long-term, I'd like to switch to a monthly plan. What do you recommend?",
              formal: "Good morning/afternoon, I've been utilizing a prepaid tourist SIM card, however, I will now be residing in the United States long-term. I would like to transition to a monthly subscription plan. Could you please outline your recommendations?",
            },
          },
          {
            speaker: "them",
            role: "运营商工作人员",
            textEn:
              "Great, let me walk you through our options. We have three main plans: the Basic at $35 a month with 5GB data, the Standard at $55 with unlimited data, and the Premium at $75 with unlimited data plus international calling. Which is most important to you — data, international calls, or price?",
            textZh:
              "好的，我带你看看我们的选项。我们有三个主要套餐：基础版每月35美元含5GB流量，标准版55美元无限流量，高级版75美元无限流量加国际通话。对你来说什么最重要——流量、国际通话还是价格？",
            casualVersion: "Alright, let's go through the options. We got three main plans: Basic, $35/month with 5 gigs; Standard, $55 for unlimited data; and Premium, $75, that's unlimited data plus international calls. What's most important to you—data, international calls, or price?",
            formalityVariants: {
              casual: "Okay, here's what we got. Basic: $35 for 5GB. Standard: $55, unlimited data. Premium: $75, unlimited data plus international calls. What matters most to you: data, international calls, or price?",
              standard: "Great, let me walk you through our options. We have three main plans: the Basic at $35 a month with 5GB data, the Standard at $55 with unlimited data, and the Premium at $75 with unlimited data plus international calling. Which is most important to you — data, international calls, or price?",
              formal: "Certainly, I would be pleased to present our available options. We currently offer three primary plans: the Basic package at $35 monthly with 5GB of data, the Standard package at $55 with unlimited data, and the Premium package at $75, which includes unlimited data and international calling. Could you please indicate which factor is of highest priority to you – data allocation, international communication capabilities, or the monthly cost?",
            },
            keyPhrases: [
              { en: "prepaid", zh: "预付费" },
              { en: "monthly plan", zh: "月租套餐" },
              { en: "unlimited data", zh: "无限流量" },
              { en: "international calling", zh: "国际通话" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure! Are you looking for something budget-friendly, or do you need premium features like hotspot and international calls?",
                textZh: "当然！你想要经济实惠的还是需要热点和国际通话这些高端功能？",
                actionHint: "说明你的主要需求",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I call my family in China pretty often, so international calling is important. But $75 seems expensive. Are there any promotions or family plans?",
            textZh: "我经常给中国的家人打电话，所以国际通话很重要。但75美元好像挺贵的。有什么促销或家庭套餐吗？",
            commonMistake: {
              wrong: "Are there any promotion activities or family plans?",
              correct: "Are there any promotions or family plans?",
              explanation: "promotion 本身就包含“活动”的含义，无需加\"activities\"。",
            },
            casualVersion: "I call my family in China a lot, so international calling's a big deal. But $75 sounds pricey. Got any promos or family plans?",
            formalityVariants: {
              casual: "I call family in China a lot, so international calls are key. But $75? Kinda expensive. Any deals or family plans?",
              standard: "I call my family in China pretty often, so international calling is important. However, $75 seems a bit expensive. Are there any promotions or family plans available?",
              formal: "I frequently communicate with my family in China, therefore, international calling capabilities are of significant importance. However, the $75 price point appears rather substantial. Are there any ongoing promotions or family plan options that might mitigate this cost?",
            },
          },
          {
            speaker: "them",
            role: "运营商工作人员",
            textEn:
              "Good timing — we actually have a promotion right now. If you sign up for auto-pay, the Premium plan drops to $65 a month. And if you bring your own phone instead of buying one from us, there's an extra $5 discount. You could also consider using WeChat or WhatsApp for calls to China — those use data, not minutes.",
            textZh:
              "你来得正好——我们现在有促销。如果开通自动扣款，高级版降到每月65美元。如果你自带手机不从我们这买，额外再减5美元。你也可以考虑用微信或WhatsApp打电话到中国——用的是流量不是通话分钟。",
            casualVersion: "Oh, good timing — we got a promo right now. If you do auto-pay, Premium drops to $65/month. Plus, if you bring your own phone, it's another $5 off. You could also just use WeChat or WhatsApp to call China, that's just data, not minutes.",
            culturalNote: "美国服务商会主动建议用第三方App省钱",
            formalityVariants: {
              casual: "Perfect timing — we have a promo. Auto-pay means Premium is $65. Bring your own phone? Another $5 off. Or just use WeChat/WhatsApp for China calls, that's data, not minutes.",
              standard: "Good timing — we actually have a promotion right now. If you sign up for auto-pay, the Premium plan drops to $65 a month. And if you bring your own phone instead of buying one from us, there's an additional $5 discount. You could also consider using WeChat or WhatsApp to call China — that uses data, not talk minutes.",
              formal: "Indeed, your timing is quite opportune, as we are currently running a special promotion. Should you elect to enroll in our auto-pay program, the Premium plan will be reduced to $65 per month. Furthermore, if you choose to utilize your own device rather than purchasing one from us, an additional $5 discount will be applied. As an alternative, you might also consider employing applications such as WeChat or WhatsApp for international communication to China, as these services primarily consume data rather than traditional talk minutes.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "You picked a good time — there's a promo going on. Auto-pay knocks it down to $65, and BYOD saves you another $5. Real talk though — most people just use WeChat or WhatsApp for international calls anyway. Way cheaper since it's just data.",
                textZh:
                  "你来得很巧——正好有促销。自动扣款降到65，自带手机再省5块。说实话——大部分人用微信或WhatsApp打国际电话，便宜多了因为只用流量。",
                actionHint: "BYOD = bring your own device 自带设备, real talk = 说实话",
                frequency: "common",
              },
              {
                textEn:
                  "Actually, you're in luck — we've got a deal running. Auto-pay gets the Premium down to $65, plus $5 off if you use your own phone. And honestly, for calling China, WeChat is free over Wi-Fi.",
                textZh:
                  "你运气好——我们正在做活动。自动扣款高级版降到65，自带手机再减5块。说实话打中国电话的话微信用WiFi就免费。",
                actionHint: "in luck = 运气好, got a deal running = 正在做活动",
                frequency: "common",
              },
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
            textEn:
              "That's true — I mostly use WeChat anyway. So maybe the Standard plan with unlimited data at $55 would be enough. Is the $55 plan's data really unlimited, or does it slow down after a certain amount?",
            textZh:
              "说得对——我大部分时候用微信。那标准版55美元无限流量可能就够了。55美元的套餐流量真的无限吗，还是用到一定量之后会限速？",
            culturalNote: "对“无限流量”的真实性，中国人常有疑问。",
            casualVersion: "Oh, good point — I mostly use WeChat anyway. So the $55 Standard unlimited data plan's probably enough. Is that $55 plan really unlimited data, or do they slow it down after some amount?",
            commonMistake: {
              wrong: "Is the $55 plan unlimited data true?",
              correct: "Is the $55 plan truly unlimited data?",
              explanation: "中文习惯把形容词放在名词前面，英文副词修饰动词或形容词",
            },
            formalityVariants: {
              casual: "Good call — I'm usually on WeChat anyway. So the $55 unlimited data plan might just cut it. Is that 'unlimited' really unlimited, or does it slow down?",
              standard: "That's a good point — I mostly use WeChat anyway. So the Standard $55 unlimited data plan might be sufficient. Is the $55 plan truly unlimited data, or does it throttle after a certain amount?",
              formal: "That is a valid observation; I primarily utilize WeChat for my communications. Therefore, the Standard $55 unlimited data plan may prove adequate for my needs. Could you please clarify if the $55 plan offers genuinely unlimited data, or if data speeds are reduced after a predetermined usage threshold?",
            },
          },
          {
            speaker: "them",
            role: "运营商工作人员",
            textEn:
              "Smart question. The data is technically unlimited, but after 25GB in a billing cycle, speeds may be reduced during network congestion. Most people don't hit that limit unless they're streaming video all day. You also get 5GB of mobile hotspot data.",
            textZh:
              "好问题。流量技术上是无限的，但一个计费周期用超25GB后，在网络拥堵时可能会降速。大多数人到不了这个上限，除非整天看视频。你还有5GB的移动热点流量。",
            culturalNote: "美国“无限流量”常有“软上限” (deprioritization threshold)。",
            casualVersion: "Good question. Data's technically unlimited, but after 25 gigs in a billing cycle, speeds might slow down if the network's busy. Most folks don't hit that unless they're streaming 24/7. Plus, you get 5 gigs of mobile hotspot.",
            formalityVariants: {
              casual: "Good question. Technically unlimited, but after 25GB, speeds might drop if the network's jammed. Most don't hit it. You also get 5GB hotspot.",
              standard: "Smart question. The data is technically unlimited, but after 25GB in a billing cycle, speeds may be reduced during network congestion. Most people don't hit that cap unless they stream video all day. You also get 5GB of mobile hotspot data.",
              formal: "That is an astute inquiry. While the data is technically unlimited, please be advised that after consuming 25GB within a single billing cycle, speeds may be subject to reduction during periods of network congestion. The vast majority of our subscribers do not reach this threshold, unless engaging in extensive video streaming. Additionally, this plan includes 5GB of mobile hotspot data.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Good catch. So it's \"unlimited\" in quotes — after 25 gigs, you might notice slower speeds when the network is busy. Honestly though, most people don't even come close. And you get 5 gigs of hotspot too.",
                textZh:
                  '问得好。说是"无限"但带引号——超过25G后网络忙的时候可能会慢。不过说实话大部分人根本用不到。另外还有5G热点流量。',
                actionHint: "good catch = 观察力好/问得好, in quotes = 带引号的（暗示有条件）",
                frequency: "common",
              },
              {
                textEn:
                  "Here's the fine print — after 25GB per month, you could get deprioritized when the network's jammed. But for normal use like maps, messaging, and social media, you'll never notice. Plus 5GB hotspot.",
                textZh:
                  "这是细则——每月超过25GB后网络拥堵时你的优先级可能会降低。但正常用地图、聊天和社交媒体完全感觉不到。另外还有5GB热点。",
                actionHint: "fine print = 细则/小字条款, deprioritized = 降低优先级",
                frequency: "occasional",
              },
            ],
            keyPhrases: [
              { en: "billing cycle", zh: "计费周期" },
              { en: "network congestion", zh: "网络拥堵" },
              { en: "speeds may be reduced", zh: "可能会降速" },
              { en: "mobile hotspot", zh: "移动热点" },
              { en: "streaming", zh: "流媒体/在线播放" },
            ],
            culturalMeaning:
              "美国的「无限流量」套餐大多有隐藏的限速条款。这跟中国运营商类似，但额度不同。一定要问清楚降速阈值。",
          },
          {
            speaker: "you",
            textEn: "Okay, I'll go with the Standard plan at $55 with auto-pay. Do I need to sign a contract?",
            textZh: "好的，我选标准版55美元的套餐加自动扣款。需要签合同吗？",
            culturalNote: "在中国长期套餐通常有合约，所以中国人常问。",
            casualVersion: "Alright, I'll take the Standard $55 plan with auto-pay. Gotta sign a contract?",
            commonMistake: {
              wrong: "I will choose the Standard $55 plan.",
              correct: "I'll go with the Standard $55 plan.",
              explanation: "I will choose 听起来像未来规划，I'll go with 更像立即决定。",
            },
            formalityVariants: {
              casual: "Okay, I'll do the $55 Standard plan with auto-pay. Contract needed?",
              standard: "Okay, I'll go with the Standard $55 plan plus auto-pay. Do I need to sign a contract?",
              formal: "Understood. I will proceed with the Standard $55 plan, in conjunction with auto-pay. Is a contractual agreement required for this particular service?",
            },
          },
          {
            speaker: "them",
            role: "运营商工作人员",
            textEn:
              "No contract required — it's month-to-month, so you can cancel or change plans anytime. I just need your ID and a credit or debit card for auto-pay setup. We can transfer your current number over from your prepaid card — it takes about 15 minutes. Would you like to keep your current number?",
            textZh:
              "不需要合同——按月付费，随时可以取消或换套餐。我只需要你的身份证和一张信用卡或借记卡来设置自动扣款。我们可以把你预付费卡的号码转过来——大约15分钟。要保留现在的号码吗？",
            casualVersion: "Nope, no contract needed — it's month-to-month, so you can cancel or switch plans whenever. Just need your ID and a credit/debit card for auto-pay. We can transfer your prepaid number over, takes about 15 mins. Wanna keep your current number?",
            formalityVariants: {
              casual: "Nah, no contract — it's month-to-month, cancel/change anytime. Just need your ID and a card for auto-pay. We can move your prepaid number over, 'bout 15 mins. Keep your number?",
              standard: "No contract required — it's month-to-month, and you can cancel or change plans anytime. I just need your ID and a credit or debit card to set up auto-pay. We can transfer your prepaid card number over — that usually takes about 15 minutes. Do you want to keep your current number?",
              formal: "A contract is not required; this service operates on a month-to-month basis, allowing you the flexibility to cancel or modify your plan at any time. I will simply require a form of identification and a credit or debit card to establish the auto-pay arrangement. We are able to port your existing prepaid number over, which typically takes approximately 15 minutes. Would you prefer to retain your current number?",
            },
            keyPhrases: [
              { en: "month-to-month", zh: "按月付费/无合同" },
              { en: "cancel anytime", zh: "随时取消" },
              { en: "transfer your number", zh: "号码转移/携号转网" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No contract, no commitment — totally month-to-month. Just need your ID and a card for auto-pay. And we can port your number over from your prepaid SIM, takes about 15 minutes. Wanna keep the same number?",
                textZh:
                  "没合同没约束——完全按月付。只需要证件和一张卡设自动扣款。你预付费SIM的号码我们可以转过来，大概15分钟。要保留号码吗？",
                actionHint: "port your number = 携号转网（行业术语但口语也常用）",
                frequency: "common",
              },
              {
                textEn:
                  "Zero commitment — you can bounce anytime. I just need an ID and a payment card. If you want, I can move your existing number to the new plan. Takes like 15 minutes. Keep it or get a new one?",
                textZh:
                  "零约束——随时可以走。我只需要证件和付款卡。如果你想的话我可以把你现在的号码转到新套餐。大概15分钟。保留号码还是要新的？",
                actionHint: "bounce = 离开/走（口语）",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please keep the same number. Everyone already has it. Let's do it!",
            textZh: "是的，请保留号码。大家都有了。办吧！",
            commonMistake: {
              wrong: "Yes, keep number.",
              correct: "Yes, please keep the same number.",
              explanation: "加上\"the same\"或\"it\"使表达更完整自然。",
            },
            casualVersion: "Yeah, keep the same number, please. Everyone's already got it. Let's do this!",
            formalityVariants: {
              casual: "Yeah, keep my number. Everyone's got it. Let's do this!",
              standard: "Yes, please keep the same number. Everyone already has it. Let's proceed!",
              formal: "Yes, I would prefer to retain my current number, as it is already widely distributed among my contacts. Please proceed with the activation.",
            },
          },
          {
            speaker: "them",
            role: "运营商工作人员",
            textEn:
              "Perfect. The transfer is processing now. While we wait, let me show you our app — you can manage your account, check data usage, pay bills, and even chat with support. Here's a QR code to download it. Your new plan will be active within the hour.",
            textZh:
              "好的。号码正在转移中。等待的时候我给你看看我们的APP——你可以管理账户、查看流量使用、付账和在线客服。这是下载的二维码。你的新套餐一小时内会激活。",
            casualVersion: "Awesome. Transfer's processing now. While we wait, lemme show you our app — you can manage your account, check data, pay bills, even chat with support. Here's the QR for it. Your new plan should be active in about an hour.",
            formalityVariants: {
              casual: "Great. Transfer's happening. While we wait, lemme show you the app — manage account, check data, pay bills, chat support. Here's the QR. Active in an hour.",
              standard: "Perfect. The transfer is processing now. While we wait, let me show you our app — you can manage your account, check data usage, pay bills, and even chat with support. Here's the QR code to download it. Your new plan will be active within an hour.",
              formal: "Excellent. The number transfer is currently in progress. While we await its completion, permit me to demonstrate our mobile application — it allows you to comprehensively manage your account, monitor data usage, process bill payments, and even engage with customer support via chat. Here is the QR code for convenient download. Your new plan should be fully activated within approximately one hour.",
            },
            keyPhrases: [
              { en: "transfer is processing", zh: "号码正在转移" },
              { en: "data usage", zh: "流量使用" },
              { en: "active within the hour", zh: "一小时内激活" },
              { en: "QR code", zh: "二维码" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Awesome, it's going through now. While that's cooking, scan this QR code to grab our app — super handy for checking your data, paying bills, all that good stuff. You should be up and running on the new plan within an hour.",
                textZh:
                  "好的，正在处理。等的时候扫这个二维码下载我们的app——查流量、付账什么的特别方便。新套餐一小时内就能用了。",
                actionHint: "while that's cooking = 在那个处理的时候（口语）",
                frequency: "common",
              },
              {
                textEn:
                  "Number transfer is in progress. In the meantime, download the app — here's a QR code. It's basically your one-stop shop for everything. Your new plan should kick in within the hour.",
                textZh: "号码正在转移。先下载app——这是二维码。基本上你所有的事情都能在里面搞定。新套餐一小时内生效。",
                actionHint: "one-stop shop = 一站式服务, kick in = 生效",
                frequency: "common",
              },
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
            textEn:
              "Hi, I need to ask about my latest bill. It's $120, but my plan is supposed to be $55 a month. Can you explain the extra charges?",
            textZh: "你好，我要问一下我最近的账单。显示120美元，但我的套餐应该是每月55美元。能解释一下额外费用吗？",
            culturalNote: "美国账单常有额外税费或隐藏项，与中国习惯不同。",
            casualVersion: "Hey, my latest bill's $120, but my plan's only $55 a month. What's with the extra charges?",
            commonMistake: {
              wrong: "I want to ask about my bill.",
              correct: "I'd like to ask about my bill.",
              explanation: "“I want” 语气直接生硬，用 “I'd like” 或 “I'm calling about” 更礼貌自然。",
            },
            formalityVariants: {
              casual: "Hey, my bill's $120, but my plan's $55. What's up with the extra charges?",
              standard:
                "Hi, I need to ask about my latest bill. It's $120, but my plan is supposed to be $55 a month. Can you explain the extra charges?",
              formal:
                "Good morning/afternoon, I am contacting you regarding a discrepancy on my most recent statement. My bill totals $120, whereas my service plan is established at $55 per month. Could you please clarify the nature of these additional fees?",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "Let me look into your account. I see the $55 plan charge, plus a $35 device insurance charge, a $15 international text message fee, and $15 in taxes and regulatory fees.",
            textZh:
              "我看一下你的账户。我看到55美元的套餐费，加35美元的设备保险费、15美元的国际短信费，和15美元的税费及监管费。",
            keyPhrases: [
              { en: "device insurance", zh: "设备保险" },
              { en: "international text message fee", zh: "国际短信费" },
              { en: "taxes and regulatory fees", zh: "税费和监管费" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Let me pull it up... Okay, so you've got the $55 plan, then there's $35 for device insurance, $15 for international texting, and $15 in taxes and fees. That's how you get to $120.",
                textZh:
                  "我查一下……好的，55美元套餐，然后35美元设备保险，15美元国际短信，15美元税费。加起来就是120美元。",
                actionHint: "that's how you get to = 这就是怎么加到的",
                frequency: "common",
              },
              {
                textEn:
                  "I see the breakdown here. $55 for your plan, device insurance at $35, international texts came out to $15, and then taxes and fees are another $15. That adds up to $120.",
                textZh: "我看到明细了。套餐55，设备保险35，国际短信15，税费15。加起来120。",
                actionHint: "breakdown = 明细/分项",
                frequency: "common",
              },
            ],
            casualVersion:
              "Lemme check your account. Got the $55 plan, $35 for device insurance, $15 for international texts, and $15 in taxes/fees.",
            formalityVariants: {
              casual:
                "Alright, looking at your account. You've got the $55 plan, $35 for device insurance, $15 for international texts, and $15 in taxes and stuff.",
              standard:
                "Let me look into your account. I see the $55 plan charge, plus a $35 device insurance charge, a $15 international text message fee, and $15 in taxes and regulatory fees.",
              formal:
                "Upon reviewing your account, I can confirm the $55 base plan charge, in addition to a $35 device insurance premium, a $15 international text messaging fee, and $15 allocated for applicable taxes and regulatory assessments.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Wait, I never signed up for device insurance! And I thought international texting was included in my plan. I want both charges removed.",
            textZh: "等等，我从来没有开通设备保险！而且我以为国际短信包含在套餐里了。我要求取消这两笔费用。",
            culturalNote: "默认勾选/捆绑销售在美国常见，在中国可能被视为欺骗。",
            casualVersion:
              "Hold on, I never signed up for insurance! And I thought international texts were included. I want those gone.",
            commonMistake: {
              wrong: "I want to remove both charges.",
              correct: "I want both charges removed.",
              explanation:
                "“I want” 语气直接，在服务对话中略显生硬。用 “I'd like...” 或直接请求 “Please remove...” 更佳。",
            },
            formalityVariants: {
              casual:
                "Whoa, device insurance? Never signed up! And I thought international texts were part of my plan. Get rid of both those charges.",
              standard:
                "Wait, I never signed up for device insurance! And I thought international texting was included in my plan. I want both charges removed.",
              formal:
                "Pardon me, but I do not recall authorizing device insurance coverage. Furthermore, my understanding was that international texting was an included feature of my current plan. I request that both of these charges be reversed.",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "I can see the device insurance was added when you activated your plan — it might have been checked by default during signup. I can remove it going forward and refund this month's charge. For international texting, your Standard plan includes domestic texting only. International texts are 25 cents each.",
            textZh:
              "我看到设备保险是你激活套餐时添加的——注册时可能默认勾选了。我可以取消后续的并退还这个月的费用。至于国际短信，你的标准套餐只包含国内短信。国际短信每条25美分。",
            culturalNote: "美国商家有时会默认勾选增值服务，需要消费者仔细核对。这算是一个常见的'消费陷阱'。",
            alternativeExpressions: [
              {
                textEn:
                  "So it looks like the insurance got tacked on when you signed up — probably a default checkbox. I can take that off and credit you for this month. As for the texts, international texting isn't included in your plan — those are 25 cents a pop.",
                textZh:
                  "看起来保险是你注册时被加上的——可能是个默认勾选。我可以取消并退这个月的。至于短信，国际短信不包含在你的套餐里——每条25美分。",
                actionHint: "tacked on = 被加上, 25 cents a pop = 每条25美分",
                frequency: "common",
              },
              {
                textEn:
                  "Yeah, that insurance was auto-added at signup — one of those sneaky default checkboxes. I'll remove it and refund you. The international texting though, that's separate from your plan. Each text to China costs a quarter.",
                textZh:
                  "嗯，保险是注册时自动加的——那种偷偷默认勾选的。我帮你取消并退款。但国际短信是套餐外的。发到中国每条25美分。",
                actionHint: "a quarter = 25美分（口语）, sneaky = 偷偷摸摸的",
                frequency: "common",
              },
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
            culturalMeaning:
              "在美国很多服务注册时会有默认勾选的附加服务（add-ons），这是常见的营销手段。一定要仔细检查每一项。",
            casualVersion:
              "Okay, device insurance got added when you activated – probably default checked at signup. I can remove it for next month and refund this one. For international texts, your plan only covers domestic. They're 25 cents each.",
            formalityVariants: {
              casual:
                "Looks like the device insurance got added when you first activated – probably a default check during signup. I can take it off for next month and refund this charge. As for international texts, your plan only covers local. International ones are 25 cents apiece.",
              standard:
                "I can see the device insurance was added when you activated your plan — it might have been checked by default during signup. I can remove it going forward and refund this month's charge. For international texting, your Standard plan includes domestic texting only. International texts are 25 cents each.",
              formal:
                "My records indicate that the device insurance was initiated concurrently with your plan activation; it is plausible this option was pre-selected by default during the enrollment process. I am able to deactivate this service for future billing cycles and process a refund for the current month's charge. Regarding international texting, your Standard plan exclusively encompasses domestic messaging. International text messages are billed at a rate of 25 cents per message.",
            },
          },
          {
            speaker: "you",
            textEn:
              "That's sneaky — having insurance checked by default without clearly telling me. I want a full refund for both charges. And I need to add an international texting package going forward.",
            textZh: "这太不厚道了——默认勾选保险也不清楚告诉我。我要求两笔费用全额退款。以后我需要加一个国际短信包。",
            casualVersion:
              "That's pretty sneaky – auto-checking insurance without telling me. I want both charges fully refunded. And I'll need to add an international texting package from now on.",
            commonMistake: {
              wrong: "I want full refund for both charges.",
              correct: "I want a full refund for both charges.",
              explanation: "“full refund” 前需要冠词 “a”。“going forward” 是常用表达，意为“从今以后”。",
            },
            formalityVariants: {
              casual:
                "Seriously, that's shady – just auto-checking insurance without saying anything. I want all my money back for both those charges. And I'll need to get an international text package set up.",
              standard:
                "That's sneaky — having insurance checked by default without clearly telling me. I want a full refund for both charges. And I need to add an international texting package going forward.",
              formal:
                "I find it rather disingenuous to have insurance pre-selected by default without explicit notification. I insist upon a complete refund for both aforementioned charges. Furthermore, I will require the addition of an international texting package for future use.",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "I completely understand your frustration, and I apologize for the confusion. I've processed the $35 insurance refund — it'll appear on your next statement. For the international texts, since this seems to have been a misunderstanding, I'll issue a one-time courtesy credit of $15 as well. As for an international texting package, we have one for $10 a month that gives you unlimited texts to over 200 countries.",
            textZh:
              "完全理解您的不满，为造成的困惑道歉。35美元的保险退款已经处理——会在下一期账单上显示。至于国际短信，因为这似乎是个误会，我也给您一次性的15美元善意抵扣。关于国际短信包，我们有一个每月10美元的，可以发无限量短信到200多个国家。",
            culturalNote: "“善意抵扣”(goodwill credit)是美式客服惯用手段，表示安抚客户但非完全认错。",
            alternativeExpressions: [
              {
                textEn:
                  "I totally get it — that's frustrating. Here's what I'll do: $35 insurance refund, done. And since the texting thing wasn't made clear, I'm gonna throw in a $15 credit for that too. Going forward, we've got an international texting add-on for $10 a month — unlimited texts worldwide.",
                textZh:
                  "完全理解——确实让人恼火。我这样处理：35美元保险退款搞定。短信的事因为没说清楚，我再给你15美元抵扣。以后的话我们有个10美元/月的国际短信附加包——全球无限发。",
                actionHint: "throw in = 额外给/免费附送, add-on = 附加包",
                frequency: "common",
              },
              {
                textEn:
                  "You're right to be upset. I've already reversed the $35 for insurance. As a goodwill gesture, I'll credit you the $15 for the texts too. For the future, there's a $10 international texting package that covers 200-plus countries.",
                textZh:
                  "你有权不满。35美元保险费已经退了。作为善意补偿，短信那15美元也给你抵扣了。以后的话有个10美元的国际短信包覆盖200多个国家。",
                actionHint: "reversed = 退还/撤销, goodwill gesture = 善意补偿",
                frequency: "common",
              },
            ],
            keyPhrases: [
              { en: "processed the refund", zh: "处理了退款" },
              { en: "next statement", zh: "下一期账单" },
              { en: "courtesy credit", zh: "善意抵扣" },
              { en: "one-time", zh: "一次性的" },
              { en: "unlimited texts", zh: "无限量短信" },
            ],
            casualVersion:
              "Totally get why you're frustrated, and I'm sorry for the mix-up. Processed the $35 insurance refund, it'll show on your next statement. For the international texts, since it seems like a misunderstanding, I'll give you a one-time $15 credit too. We've got a $10/month international text package, unlimited to over 200 countries.",
            formalityVariants: {
              casual:
                "Yep, totally get it, sorry for the hassle. Insurance refund's done – you'll see it next bill. For the international texts, since it's a misunderstanding, I'll just credit you $15 too. And we have a $10/month international text package, unlimited texts to tons of countries.",
              standard:
                "I completely understand your frustration, and I apologize for the confusion. I've processed the $35 insurance refund — it'll appear on your next statement. For the international texts, since this seems to have been a misunderstanding, I'll issue a one-time courtesy credit of $15 as well. As for an international texting package, we have one for $10 a month that gives you unlimited texts to over 200 countries.",
              formal:
                "I fully empathize with your dissatisfaction, and I extend my apologies for any misunderstanding that may have occurred. I have successfully processed the $35 insurance refund, which will be reflected on your subsequent billing statement. Regarding the international text messaging charges, given that this appears to be an oversight, I will also apply a one-time courtesy credit of $15 to your account. Pertaining to an international texting package, we offer an option for $10 per month providing unlimited text messages to more than 200 countries.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Okay, add the $10 international texting package. And can you send me a confirmation email with all the changes we just made?",
            textZh: "好的，加上10美元的国际短信包。能给我发一封确认邮件包含我们刚才做的所有更改吗？",
            casualVersion:
              "Alright, add the $10 international texting package. Can you send a confirmation email with all the changes we just did?",
            commonMistake: {
              wrong: "Can you send me confirmation email with all changes?",
              correct: "Can you send me a confirmation email with all the changes?",
              explanation: "“confirmation email” 前需要冠词 “a”。“changes” 需要 “the” 因为特指。",
            },
            formalityVariants: {
              casual:
                "Yeah, add that $10 international text package. And can you just shoot me an email confirming all this?",
              standard:
                "Okay, add the $10 international texting package. And can you send me a confirmation email with all the changes we just made?",
              formal:
                "Very well, please proceed with adding the $10 international texting package. Additionally, could you kindly forward a confirmation email detailing all the modifications that have been implemented?",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "Done! I've added the international texting package starting today, removed the device insurance, and applied both credits. You'll receive a confirmation email within 10 minutes. Your new monthly charge going forward will be $65 plus taxes — that's the $55 plan plus $10 for international texting. Is there anything else I can help you with?",
            textZh:
              "完成了！国际短信包今天开始生效，设备保险已取消，两笔抵扣已应用。你10分钟内会收到确认邮件。以后的月费是65美元加税——55美元套餐加10美元国际短信。还有什么需要帮忙的吗？",
            keyPhrases: [
              { en: "starting today", zh: "今天开始生效" },
              { en: "applied both credits", zh: "两笔抵扣已应用" },
              { en: "confirmation email", zh: "确认邮件" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "All set! International texts are live, insurance is gone, and both credits are on your account. Check your email in about 10 minutes for confirmation. From now on, you're looking at $65 a month plus tax. Anything else?",
                textZh:
                  "搞定！国际短信已开通，保险已取消，两笔抵扣已到账。10分钟左右查邮件确认。以后月费65美元加税。还有事吗？",
                actionHint: "live = 已开通/生效, looking at = 大约是（金额）",
                frequency: "common",
              },
              {
                textEn:
                  "Everything's updated! Texting package is on, insurance is off, both refunds applied. I'll shoot you a confirmation email shortly. Your bill going forward is $65 plus tax — much better, right? Need anything else?",
                textZh:
                  "全部更新了！短信包开了，保险关了，两笔退款已应用。确认邮件马上发。以后的账单是65加税——好多了吧？还需要什么吗？",
                actionHint: "shoot you an email = 发邮件给你",
                frequency: "common",
              },
            ],
            casualVersion:
              "Done! International texting package added today, insurance removed, both credits applied. You'll get a confirmation email in 10. Your new monthly bill's $65 plus taxes – that's the $55 plan plus $10 for texts. Anything else?",
            formalityVariants: {
              casual:
                "All set! International texts added today, insurance off, credits applied. Email in 10. New monthly bill's gonna be $65 plus taxes ($55 plan + $10 texts). Need anything else?",
              standard:
                "Done! I've added the international texting package starting today, removed the device insurance, and applied both credits. You'll receive a confirmation email within 10 minutes. Your new monthly charge going forward will be $65 plus taxes — that's the $55 plan plus $10 for international texting. Is there anything else I can help you with?",
              formal:
                "It is done! The international texting package has been activated effective today, the device insurance has been successfully removed, and both applicable credits have been processed. You will receive a confirmation email within 10 minutes. Your revised monthly recurring charge moving forward will be $65 plus applicable taxes, comprising the $55 plan and the $10 international texting package. May I assist you with anything further?",
            },
          },
          {
            speaker: "you",
            textEn: "No, that's everything. Thanks for resolving this — I appreciate it.",
            textZh: "没了，就这些。谢谢解决了这些问题——非常感谢。",
            culturalNote: "“sorting out”是口语常用表达，指理清或解决复杂问题。",
            casualVersion: "Nah, that's it. Thanks for sorting it out — really appreciate it.",
            commonMistake: {
              wrong: "Thanks for solving these problems.",
              correct: "Thanks for resolving this.",
              explanation: "“solve problems” 通常指数学或逻辑问题。服务问题常用 “resolve” 或 “sort out”。",
            },
            formalityVariants: {
              casual: "Nope, all good. Thanks for handling it, appreciate it.",
              standard: "No, that's everything. Thanks for resolving this — I appreciate it.",
              formal:
                "No, that will be all. Thank you for your assistance in resolving this matter; I truly appreciate your efforts.",
            },
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
            culturalNote: "美国习惯用“I'd like to”表达请求，比“I want to”更礼貌。",
            casualVersion: "Hey, wanna send money to my parents in China. What's the best way?",
            commonMistake: {
              wrong: "Hello, I want to send money to my parents in China. What is the best way?",
              correct: "Hi, I'd like to send money to my parents in China. What's the best way?",
              explanation: "中文的“我想”直接翻译成I want不够礼貌，用I'd like更好。",
            },
            formalityVariants: {
              casual: "Hey, wanna send money to my parents in China. What's the best way?",
              standard: "Hi, I'd like to send money to my parents in China. What's the best way to do that?",
              formal: "Good morning/afternoon, I am inquiring about the most efficient method to remit funds to my parents in China.",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "There are several options. Traditional wire transfers through your bank work but they're slow and expensive — usually $25 to $45 per transfer plus unfavorable exchange rates. Online services like Wise, Remitly, or Western Union are often cheaper and faster. How much are you looking to send?",
            textZh:
              "有几种选择。通过银行的传统电汇可以但速度慢且贵——通常每次25到45美元加不利的汇率。像 Wise、Remitly 或 Western Union 这样的在线服务通常更便宜更快。你打算汇多少？",
            commonMistake: {
              wrong: "How much you want to send?",
              correct: "How much are you planning to send?",
              explanation: "直接问 'you want' 听起来不自然，用 'are you planning to' 更地道。",
            },
            casualVersion: "Got a few options. Bank wire transfers work but they're slow and pricey – usually like $25-45 a pop plus bad rates. Online services like Wise, Remitly, or Western Union are typically cheaper and quicker. How much you planning to send?",
            formalityVariants: {
              casual: "Got a few options. Bank wires work but they're slow and pricey – usually like $25-45 a pop plus bad rates. Online services like Wise, Remitly, or Western Union are typically cheaper and quicker. How much you planning to send?",
              standard: "There are several options. Traditional wire transfers through your bank work, but they are often slow and expensive—typically $25 to $45 per transaction plus unfavorable exchange rates. Online services like Wise, Remitly, or Western Union are usually more affordable and faster. How much are you planning to send?",
              formal: "There are indeed several available options. Traditional interbank wire transfers, while functional, tend to incur higher costs and longer processing times, generally ranging from $25 to $45 per transaction, in addition to less favorable exchange rates. Conversely, online remittance platforms such as Wise, Remitly, or Western Union typically offer more competitive pricing and expedited delivery. Could you please specify the amount you intend to transfer?",
            },
            keyPhrases: [
              { en: "wire transfers", zh: "电汇" },
              { en: "unfavorable exchange rates", zh: "不利的汇率" },
              { en: "remittance", zh: "汇款" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Great question! It depends on how much you're sending and how fast you need it there. We have several options — bank wire, online transfer, or cash pickup.",
                textZh: "好问题！取决于你汇多少和需要多快到。我们有几个选择——银行电汇、在线转账或现金领取。",
                actionHint: "说明金额和需求",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I want to send $2,000. What's the current exchange rate, and how much will it cost?",
            textZh: "我想汇2000美元。现在汇率是多少，费用是多少？",
            casualVersion: "Wanna send $2,000. What's the rate and fees right now?",
            commonMistake: {
              wrong: "I want to send $2,000. What is the current exchange rate and fees?",
              correct: "I'd like to send $2,000. What's the current exchange rate and fees?",
              explanation: "口语中直接说 I want 不如 I'd like 礼貌，听起来更自然。",
            },
            formalityVariants: {
              casual: "Wanna send $2,000. What's the rate and fees right now?",
              standard: "I'd like to send $2,000. What's the current exchange rate and what are the associated fees?",
              formal: "I intend to remit $2,000. Could you please provide the current exchange rate and the applicable transaction fees?",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "Right now, the mid-market rate is 1 USD to 7.25 CNY. Our rate is 7.22 — that small difference is how we cover part of our costs. The transfer fee is $4.99 for bank deposit delivery. So for $2,000, your parents would receive approximately 14,410 yuan. The total cost to you would be $2,004.99.",
            textZh:
              "目前中间市场汇率是1美元兑7.25人民币。我们的汇率是7.22——这个小差额是我们的部分成本。银行存款方式的转账费是4.99美元。所以汇2000美元，你父母大约收到14410元人民币。你的总花费是2004.99美元。",
            commonMistake: {
              wrong: "Your total cost would be $2,004.99.",
              correct: "The total cost to you would be $2,004.99.",
              explanation: "'to you' 更自然地表达这个费用是由谁承担。",
            },
            casualVersion: "Right now, mid-market rate's 1 USD to 7.25 CNY. Our rate's 7.22 – that small diff is how we cover part of our costs. Transfer fee's $4.99 for bank deposit delivery. So for two grand, your parents'd get 'bout 14,410 yuan. Total cost to you'd be $2,004.99.",
            formalityVariants: {
              casual: "Right now, mid-market rate's 1 USD to 7.25 CNY. Our rate's 7.22 – that small diff is how we cover part of our costs. Transfer fee's $4.99 for bank deposit delivery. So for two grand, your parents'd get 'bout 14,410 yuan. Total cost to you'd be $2,004.99.",
              standard: "Currently, the mid-market rate is 1 USD to 7.25 CNY. Our operational rate is 7.22 — this slight difference accounts for a portion of our overhead. The transfer fee for bank deposit delivery is $4.99. Therefore, for a $2,000 transfer, your parents would receive approximately 14,410 yuan. Your total cost would be $2,004.99.",
              formal: "The prevailing mid-market exchange rate is 1 USD to 7.25 CNY. Our applied exchange rate is 7.22, with the minor differential contributing to our operational expenses. A transfer fee of $4.99 is applicable for bank deposit delivery. Consequently, a $2,000 remittance would result in your parents receiving an approximate sum of 14,410 yuan. Your total expenditure for this transaction would be $2,004.99.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "The real rate right now is 7.25 — we're giving you 7.22, so we're pretty close. Plus $4.99 for the transfer. Bottom line: you pay $2,004.99, your parents get about 14,410 yuan.",
                textZh:
                  "真实汇率现在7.25——我们给你7.22，非常接近了。加上4.99美元转账费。总结：你付2004.99美元，你父母收到大约14410元人民币。",
                actionHint: "bottom line = 最终结果/总结",
                frequency: "common",
              },
              {
                textEn:
                  "Mid-market is 7.25, and we're at 7.22 — so barely any markup. Transfer fee is just under 5 bucks. All in, $2,004.99 from your end, and roughly 14,410 yuan lands on theirs.",
                textZh:
                  "中间价7.25，我们给7.22——几乎没加价。转账费不到5块。总共你这边2004.99美元，他们那边大约到14410人民币。",
                actionHint: "all in = 全部算上, barely any markup = 几乎没加价",
                frequency: "common",
              },
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
            commonMistake: {
              wrong: "What information do I need of my parents?",
              correct: "What information do I need from my parents?",
              explanation: "描述从某人那里获取信息时，用 'from' 更自然。",
            },
            casualVersion: "How long's the transfer take? And what info do I need from my parents?",
            formalityVariants: {
              casual: "How long's the transfer take? And what info do I need from my parents?",
              standard: "How long does the transfer typically take? And what information do I need to obtain from my parents?",
              formal: "Could you please advise on the typical duration for such a transfer? Additionally, what specific information will be required from my parents, the recipients?",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "For delivery to a Chinese bank account, it typically takes one to two business days. We need the recipient's full name in Chinese characters and pinyin, their bank account number, the bank name and branch name, and the CNAPS code — that's the Chinese bank routing number. Your parents can find this information in their banking app.",
            textZh:
              "汇到中国银行账户通常需要一到两个工作日。我们需要收款人的中文全名和拼音、银行账号、银行名称和支行名称，以及 CNAPS 代码——就是中国的银行路由号码。你父母在银行APP里能找到这些信息。",
            commonMistake: {
              wrong: "We need recipient full Chinese name and Pinyin.",
              correct: "We need the recipient's full Chinese name and Pinyin.",
              explanation: "'the recipient's' 强调这是收款人的信息，不能省略冠词和所有格。",
            },
            casualVersion: "For Chinese bank accounts, usually takes one to two business days. We need the recipient's full Chinese name and Pinyin, bank account number, bank name, branch name, and the CNAPS code – that's China's bank routing number. Your parents can find this stuff in their banking app.",
            formalityVariants: {
              casual: "For Chinese bank accounts, usually takes one to two business days. We need the recipient's full Chinese name and Pinyin, bank account number, bank name, branch name, and the CNAPS code – that's China's bank routing number. Your parents can find this stuff in their banking app.",
              standard: "For delivery to a Chinese bank account, it typically takes one to two business days. We require the recipient's full Chinese name and Pinyin, their bank account number, the bank's name and branch name, and the CNAPS code, which is China's equivalent of a bank routing number. Your parents should be able to locate this information within their banking application.",
              formal: "Transfers directed to a Chinese bank account generally process within one to two business days. The necessary recipient details include their complete Chinese name and its Pinyin transliteration, the bank account number, the name of the bank and its specific branch, and the CNAPS code, which serves as China's national bank routing identifier. This information can typically be retrieved by your parents via their respective mobile banking applications.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Bank transfers to China usually land in one to two business days. I'll need their full name — both Chinese characters and pinyin — bank and branch details, account number, and the CNAPS code. Have your folks check their banking app for all that.",
                textZh:
                  "银行转账到中国通常一到两个工作日到。我需要他们的全名——中文和拼音——银行支行信息、账号和CNAPS代码。让你家人在银行app里查。",
                actionHint: "folks = 家人（口语）, land = 到账",
                frequency: "common",
              },
              {
                textEn:
                  "One to two business days for a bank deposit. Here's what I need: their name in Chinese and pinyin, account number, which bank and branch, and the CNAPS code — think of it as the Chinese version of a routing number. It's all in their bank app.",
                textZh:
                  "银行存款方式一到两个工作日。我需要：中英文名字、账号、银行和支行、CNAPS代码——可以理解为中国版的路由号。都在银行app里有。",
                actionHint: "用类比解释CNAPS code",
                frequency: "common",
              },
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
            textEn:
              "My parents aren't very tech-savvy. Can they receive the money through WeChat Pay or Alipay instead?",
            textZh: "我父母不太懂技术。他们能通过微信支付或支付宝收款吗？",
            casualVersion: "My parents aren't super techy. Can they get paid via WeChat Pay or Alipay?",
            commonMistake: {
              wrong: "My parents are not good at tech. Can they use WeChat Pay or Alipay to receive money?",
              correct: "My parents aren't very tech-savvy. Can they receive money via WeChat Pay or Alipay?",
              explanation: "“不太懂技术”说 'not good at tech' 听起来像能力差，用 'not very tech-savvy' 更自然。",
            },
            formalityVariants: {
              casual: "My parents aren't super techy. Can they get paid via WeChat Pay or Alipay?",
              standard: "My parents aren't very tech-savvy. Can they receive funds through WeChat Pay or Alipay?",
              formal: "My parents are not particularly proficient with technology. Is it possible for them to receive the funds via WeChat Pay or Alipay?",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "Actually, yes! We recently added Alipay as a delivery option for China. Your parents just need their Alipay account linked to their phone number. Delivery is almost instant — usually within minutes. The fee is the same. WeChat Pay isn't available as a direct option yet, but once the money is in their bank account, they can access it through WeChat.",
            textZh:
              "可以的！我们最近增加了支付宝作为中国的收款选项。你父母只需要支付宝账户绑定手机号。到账几乎是即时的——通常几分钟。费用一样。微信支付暂时不能直接收款，但钱到银行账户后可以通过微信使用。",
            commonMistake: {
              wrong: "It is almost instant, usually within minutes.",
              correct: "Delivery is almost instant — usually within minutes.",
              explanation: "'Delivery' 指代收款这一行为，比 'It' 更准确和自然。",
            },
            casualVersion: "Actually, yeah! We just added Alipay as an option for China. Your parents just need their Alipay account linked to their phone. Delivery's almost instant — usually in minutes. Fee's the same. WeChat Pay's not direct yet, but they can use the money from their bank account with it.",
            formalityVariants: {
              casual: "Actually, yeah! We just added Alipay as an option for China. Your parents just need their Alipay account linked to their phone. Delivery's almost instant — usually in minutes. Fee's the same. WeChat Pay's not direct yet, but they can use the money from their bank account with it.",
              standard: "Actually, yes! We recently integrated Alipay as a delivery option for transfers to China. Your parents simply need their Alipay account to be linked to their phone number. Delivery is nearly instantaneous — typically within minutes. The transfer fee remains unchanged. WeChat Pay is not directly supported for receiving funds at this time, but the money deposited into their bank account can certainly be utilized through WeChat.",
              formal: "Indeed, that is now an option. We have recently implemented Alipay as a viable delivery method for transfers to China. Your parents would merely require their Alipay account to be associated with their registered mobile number. The delivery of funds is almost immediate, generally within a few minutes. The applicable fee for this service remains consistent. While direct receipt via WeChat Pay is not currently available, funds deposited into their bank account can subsequently be managed and spent through the WeChat platform.",
            },
            keyPhrases: [
              { en: "delivery option", zh: "收款选项" },
              { en: "linked to their phone number", zh: "绑定手机号" },
              { en: "almost instant", zh: "几乎即时" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Oh, good news — we just rolled out Alipay for China! They just need their Alipay tied to their phone number. And it's basically instant — minutes, not days. Same fee. WeChat Pay isn't there yet, but bank transfers show up in WeChat Wallet anyway.",
                textZh:
                  "好消息——我们刚推出了支付宝中国收款！只要支付宝绑了手机号就行。而且基本上秒到——几分钟不是几天。费用一样。微信支付还不行，不过银行转账也会显示在微信钱包里。",
                actionHint: "rolled out = 推出/上线",
                frequency: "common",
              },
              {
                textEn:
                  "Great question — and yes, Alipay is now an option! Super easy for older folks — they just need their Alipay account. It's nearly instant too. WeChat isn't supported directly yet, but they can always move the money over from their bank through WeChat.",
                textZh:
                  "好问题——是的，支付宝现在可以了！对长辈来说很简单——只要有支付宝账户就行。而且几乎秒到。微信暂时不直接支持，但钱到银行后可以通过微信转。",
                actionHint: "older folks = 长辈/老人家（口语）",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "That's perfect — Alipay will be much easier for them. Is there a limit on how much I can send per month?",
            textZh: "太好了——支付宝对他们来说容易多了。每月汇款有限额吗？",
            commonMistake: {
              wrong: "Are there monthly limits sending money?",
              correct: "Are there any monthly limits for sending money?",
              explanation: "'any' 让问句更自然，'for sending money' 清晰说明限制的用途。",
            },
            casualVersion: "Awesome – Alipay's way easier for them. Is there a monthly limit on how much I can send?",
            formalityVariants: {
              casual: "Awesome – Alipay's way easier for them. Is there a monthly limit on how much I can send?",
              standard: "That's great news — Alipay will be much simpler for them. Is there a monthly limit on the amount I can send?",
              formal: "That is excellent news, as Alipay will undoubtedly simplify the process for them. Are there any monthly limitations regarding the transfer amount?",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "Yes, there are limits. As an individual, you can send up to $50,000 per year under China's foreign exchange regulations. Our platform limit is $10,000 per transaction and $25,000 per month. For amounts over $10,000, we'll need additional identity verification — that's a regulatory requirement. Anything above $10,000 in a single transfer also needs to be reported under US law.",
            textZh:
              "有的。根据中国外汇管理规定，个人每年可以接收等值5万美元。我们平台的限额是每笔1万美元、每月2.5万美元。超过1万美元需要额外身份验证——这是监管要求。根据美国法律，单笔超过1万美元的转账也需要申报。",
            commonMistake: {
              wrong: "You as individual can send up to $50,000 per year.",
              correct: "As an individual, you can send up to $50,000 per year.",
              explanation: "'As an individual' 是更地道的表达，'an' 不能省略。",
            },
            casualVersion: "Yep, there are limits. As an individual, you can send up to $50K a year under China's rules. Our platform's limits are $10K per transaction, $25K a month. Over $10K needs extra ID verification – regulatory thing. Plus, anything over $10K here in the US gotta be reported too.",
            formalityVariants: {
              casual: "Yep, there are limits. As an individual, you can send up to $50K a year under China's rules. Our platform's limits are $10K per transaction, $25K a month. Over $10K needs extra ID verification – regulatory thing. Plus, anything over $10K here in the US gotta be reported too.",
              standard: "Yes, there are indeed limits. As an individual, you are permitted to send up to $50,000 per year under China's foreign exchange regulations. Our platform imposes a per-transaction limit of $10,000 and a monthly limit of $25,000. Transfers exceeding $10,000 require additional identity verification, which is a regulatory requirement. Furthermore, any single transfer exceeding $10,000 must also be reported under U.S. law.",
              formal: "Affirmative, there are specific limitations in place. Under current Chinese foreign exchange administration regulations, an individual may receive up to the equivalent of $50,000 annually. Our platform's internal limits are set at $10,000 per individual transaction and $25,000 per month. Transactions surpassing $10,000 necessitate supplementary identity verification, mandated by regulatory compliance. Additionally, transfers exceeding $10,000 are subject to reporting requirements under United States federal law.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, a few caps to be aware of. China has a $50K annual limit for individuals receiving foreign currency. On our end, $10K per transfer and $25K monthly. Anything over $10K triggers extra ID checks — both for us and for Uncle Sam.",
                textZh:
                  "有几个限额要知道。中国个人年度接收外汇限额5万美元。我们这边是每笔1万每月2.5万。超过1万要额外验证身份——我们这边和美国政府都有要求。",
                actionHint: "Uncle Sam = 美国政府（口语代称）, caps = 上限",
                frequency: "common",
              },
              {
                textEn:
                  "There are. China caps incoming transfers at $50K a year per person. Our platform maxes out at $10K per send and $25K per month. Over $10K and we need more ID verification — it's the law on both sides.",
                textZh:
                  "有的。中国个人年度收汇上限5万美元。我们平台每笔最高1万每月2.5万。超过1万需要更多身份验证——两边的法律都要求。",
                actionHint: "maxes out = 最高限额到",
                frequency: "common",
              },
            ],
            keyPhrases: [
              { en: "foreign exchange regulations", zh: "外汇管理规定" },
              { en: "per transaction", zh: "每笔" },
              { en: "identity verification", zh: "身份验证" },
              { en: "regulatory requirement", zh: "监管要求" },
              { en: "reported", zh: "申报" },
            ],
            culturalMeaning:
              "中国有每人每年5万美元的外汇额度限制。在美国，单笔超过1万美元的现金交易必须向 FinCEN 申报。了解两国的汇款法规很重要。",
          },
          {
            speaker: "you",
            textEn: "Got it. Let me set up the transfer now. I'll send $2,000 via Alipay to my mother's account.",
            textZh: "明白了。我现在就设置转账。通过支付宝给我妈妈的账户汇2000美元。",
            casualVersion: "Gotcha. Lemme set up the transfer now. I'll send $2,000 to my mom's Alipay account.",
            commonMistake: {
              wrong: "Okay, I will set up the transfer now. I want to send $2,000 to my mom's Alipay account.",
              correct: "Okay, I'll set up the transfer now. I'd like to send $2,000 to my mom's Alipay account.",
              explanation: "口语中 'I will' 常用 'I'll' 替代； 'I want' 替换成 'I'd like' 更礼貌。",
            },
            formalityVariants: {
              casual: "Gotcha. Lemme set up the transfer now. I'll send $2,000 to my mom's Alipay account.",
              standard: "Understood. I'd like to proceed with setting up the transfer now. I'll send $2,000 to my mother's Alipay account.",
              formal: "I comprehend. I shall now proceed to initiate the transfer. I would like to remit $2,000 to my mother's Alipay account.",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "Great, I'll walk you through it. First, enter the amount and select Alipay as the delivery method. Then enter your mother's full name and Alipay ID — usually her phone number. You'll see a confirmation screen showing the exact amount in CNY she'll receive. Once you confirm, I'll send you a tracking number so you can monitor the transfer. Ready?",
            textZh:
              "好的，我带你操作。首先输入金额并选择支付宝作为收款方式。然后输入你母亲的全名和支付宝ID——通常是她的手机号。你会看到一个确认页面显示她将收到的准确人民币金额。确认后我会发一个追踪号给你，可以监控转账进度。准备好了吗？",
            commonMistake: {
              wrong: "I will lead you to do the process.",
              correct: "I'll walk you through the process.",
              explanation: "'walk you through' 是地道表达，意为指导你完成某个流程。",
            },
            casualVersion: "Great, I'll walk you through it. First, enter the amount and pick Alipay as the delivery method. Then, input your mom's full name and Alipay ID – usually her phone number. You'll see a confirmation page with the exact yuan she'll get. Once you confirm, I'll give you a tracking number so you can monitor the progress. Ready?",
            formalityVariants: {
              casual: "Great, I'll walk you through it. First, enter the amount and pick Alipay as the delivery method. Then, input your mom's full name and Alipay ID – usually her phone number. You'll see a confirmation page with the exact yuan she'll get. Once you confirm, I'll give you a tracking number so you can monitor the progress. Ready?",
              standard: "Excellent, I'll guide you through the process. First, please enter the amount and select Alipay as the preferred delivery method. Next, input your mother's full name and her Alipay ID, which is typically her phone number. You will then see a confirmation page displaying the exact amount in yuan she will receive. Upon your confirmation, I will provide you with a tracking number so you can monitor the transfer's progress. Are you ready to proceed?",
              formal: "Very well, I shall now assist you with the process. Kindly begin by entering the desired amount and selecting Alipay as the designated recipient method. Subsequently, please input your mother's complete name and her Alipay identification, which generally corresponds to her mobile number. A confirmation screen will then present the precise amount in Renminbi that she will acquire. Following your endorsement, I will furnish you with a tracking number to enable monitoring of the transaction's status. Are you prepared to commence?",
            },
            keyPhrases: [
              { en: "delivery method", zh: "收款方式" },
              { en: "confirmation screen", zh: "确认页面" },
              { en: "tracking number", zh: "追踪号" },
              { en: "monitor the transfer", zh: "监控转账进度" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Let me walk you through it step by step. Punch in $2,000, pick Alipay, type in your mom's name and phone number. It'll show you exactly how much she'll get in yuan. Hit confirm and I'll text you a tracking number. Easy peasy. Ready to go?",
                textZh:
                  "我一步步带你操作。输入2000美元，选支付宝，输入你妈的名字和手机号。系统会显示她能收到多少人民币。点确认我就发追踪号给你。超简单。准备好了吗？",
                actionHint: "easy peasy = 超简单（口语）, hit confirm = 点确认",
                frequency: "common",
              },
              {
                textEn:
                  "Alright, here we go. Amount first, then choose Alipay as how you want it delivered. Your mom's name and Alipay number — that's usually her phone number. You'll get a preview of the exact yuan amount. Once you're good, confirm and you'll get a tracking number right away.",
                textZh:
                  "好的开始。先输入金额，选支付宝收款方式。你妈的名字和支付宝号——通常就是手机号。你会看到准确的人民币金额预览。没问题就确认，马上就能拿到追踪号。",
                actionHint: "here we go = 开始了, once you're good = 没问题的话",
                frequency: "common",
              },
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
            textEn:
              "Hi, I sent $1,500 to China three days ago but my mother says she hasn't received it yet. The tracking shows it was \"completed\" — what's going on?",
            textZh: '你好，我三天前往中国汇了1500美元，但我妈说还没收到。追踪显示已"完成"——怎么回事？',
            casualVersion:
              "Hey, I sent fifteen hundred to China three days ago, but Mom says she hasn't gotten it. Tracking shows it was \\",
            commonMistake: {
              wrong: "My mother didn't receive it.",
              correct: "My mother says she hasn't received it yet.",
              explanation: "强调“还没收到”且用“我妈说”更自然。",
            },
            formalityVariants: {
              casual: "Hey, sent $1500 to China three days ago, but Mom hasn't gotten it. Tracking shows it was \\",
              standard:
                "Hi, I sent $1,500 to China three days ago but my mother says she hasn't received it yet. The tracking shows it was \\",
              formal:
                "Good morning/afternoon. I transferred $1,500 to a recipient in China three days prior, however, the beneficiary has not yet confirmed receipt. Our tracking indicates the transfer was \\",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "I'm sorry about that. Let me look up your transfer with the tracking number. Can you provide it?",
            textZh: "很抱歉。让我用追踪号查一下你的转账。能提供一下吗？",
            commonMistake: {
              wrong: "Can you give it?",
              correct: "Can you provide it?",
              explanation: "在这种语境下 'provide' 比 'give' 更正式和常见。",
            },
            keyPhrases: [
              { en: "tracking shows completed", zh: "追踪显示已完成" },
              { en: "tracking number", zh: "追踪号" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That's definitely concerning. Let me check on that for you — can you give me the tracking number?",
                textZh: "这确实让人担心。我帮你查查——能给我追踪号吗？",
                actionHint: "that's concerning = 这让人担心",
                frequency: "common",
              },
              {
                textEn: "Sorry to hear that. Let me dig into it — what's your tracking number?",
                textZh: "抱歉听到这个。我来查查——你的追踪号是什么？",
                actionHint: "dig into it = 深入查看",
                frequency: "common",
              },
            ],
            casualVersion: "Oh, sorry 'bout that. Lemme look up your transfer using the tracking number. Got it?",
            formalityVariants: {
              casual: "Oh, sorry 'bout that. Lemme look up your transfer with the tracking number. Got it?",
              standard:
                "I'm sorry about that. Let me look up your transfer with the tracking number. Can you provide it?",
              formal:
                "I apologize for the inconvenience. I will proceed to investigate your transfer utilizing the tracking number. Would you be able to furnish it, please?",
            },
          },
          {
            speaker: "you",
            textEn:
              "The tracking number is TRX-2026-88431. I sent it to my mother's bank account at Industrial and Commercial Bank of China.",
            textZh: "追踪号是 TRX-2026-88431。我汇到我妈在工商银行的账户。",
            casualVersion: "Tracking number's TRX-2026-88431. Sent it to my mom's account at ICBC.",
            commonMistake: {
              wrong: "I sent it to my mother's bank account in Industrial and Commercial Bank of China.",
              correct: "I sent it to my mother's bank account at Industrial and Commercial Bank of China.",
              explanation: "用于指明具体银行时，at 更地道。",
            },
            formalityVariants: {
              casual: "Tracking number's TRX-2026-88431. Sent it to Mom's ICBC account.",
              standard:
                "The tracking number is TRX-2026-88431. I sent it to my mother's bank account at Industrial and Commercial Bank of China.",
              formal:
                "The tracking reference number is TRX-2026-88431. The funds were remitted to my mother's account, held at the Industrial and Commercial Bank of China.",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "I found it. The transfer was sent successfully on our end, but I can see it was held by the receiving bank for compliance review. This sometimes happens with international transfers to China — the bank may need to verify the purpose of the funds. Your mother should contact her bank directly to complete the verification.",
            textZh:
              "找到了。我们这边转账已成功发出，但我看到收款银行因合规审查暂扣了。这在向中国的国际转账中有时会发生——银行可能需要核实资金用途。你妈妈需要直接联系她的银行完成核实。",
            commonMistake: {
              wrong: "it was hold by the receiving bank for compliance review.",
              correct: "it was held by the receiving bank for compliance review.",
              explanation: "'held' 是 'hold' 的过去分词，被动语态中需要用过去分词。",
            },
            keyPhrases: [
              { en: "held by the receiving bank", zh: "被收款银行暂扣" },
              { en: "compliance review", zh: "合规审查" },
              { en: "verify the purpose of the funds", zh: "核实资金用途" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The money left our system, but the recipient bank has flagged it for additional verification. This is normal for amounts over a certain threshold in China.",
                textZh: "钱已经从我们系统发出了，但收款银行标记了需要额外核实。在中国超过一定金额这是正常的。",
                actionHint: "让收款人联系银行",
                frequency: "common",
              },
            ],
            vocabNotes: {
              "compliance review": {
                meaningInContext: "在这句话里表示：银行根据反洗钱法规对跨境汇款进行的合规性审查",
                similarUsage: "类似用法：Large transfers often go through compliance review.",
              },
            },
            casualVersion:
              "Got it. Transfer went through fine on our side, but looks like the receiving bank's holding it for a compliance review. Happens sometimes with international transfers to China — they might wanna verify what the money's for. Your mom's gotta call her bank directly to finish that verification.",
            culturalNote: "汇款到中国时，资金用途验证是常事。",
            formalityVariants: {
              casual:
                "Got it. Transfer went through fine on our side, but looks like the receiving bank's holding it for compliance review. Happens sometimes with transfers to China — they might wanna verify what the money's for. Your mom's gotta call her bank directly to finish that.",
              standard:
                "I found it. The transfer was sent successfully on our end, but I can see it was held by the receiving bank for compliance review. This sometimes happens with international transfers to China — the bank may need to verify the purpose of the funds. Your mother should contact her bank directly to complete the verification.",
              formal:
                "The transfer record has been located. Our internal systems confirm the remittance was successfully dispatched. However, it appears the receiving institution has placed a hold on the funds for a compliance review. This is not uncommon for international transfers destined for China, as the bank may require verification of the funds' purpose. Your mother will need to directly liaise with her bank to finalize this verification process.",
            },
          },
          {
            speaker: "you",
            textEn: "What does she need to tell the bank? She doesn't speak English and this sounds complicated.",
            textZh: "她需要跟银行说什么？她不会说英语，听起来很复杂。",
            casualVersion: "What's she gotta tell 'em? She doesn't speak English, and this sounds kinda complicated.",
            commonMistake: {
              wrong: "What she needs to tell the bank?",
              correct: "What does she need to tell the bank?",
              explanation: '疑问句需要倒装，使用助动词 "does"。',
            },
            formalityVariants: {
              casual: "What's she gotta tell 'em? She doesn't speak English, and this sounds complicated.",
              standard: "What does she need to tell the bank? She doesn't speak English and this sounds complicated.",
              formal:
                "Could you please specify what information she is required to provide to the bank? She is not proficient in English, and this situation appears rather intricate.",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "Don't worry — she'll be dealing with a Chinese bank in Chinese. She just needs to go to her local ICBC branch with her ID card and tell them she's expecting an international transfer. They may ask her to fill out a form stating the purpose — she can write \"family support\" or \"living expenses from overseas family member.\" That's usually enough to release the funds.",
            textZh:
              '别担心——她是跟中国银行用中文打交道。她只需要带身份证去工商银行网点，告诉他们她在等一笔国际汇款。他们可能让她填一张表说明用途——她可以写"家庭赡养"或"海外家人生活费汇款"。这通常就够了，钱就会释放。',
            keyPhrases: [
              { en: "local branch", zh: "当地网点" },
              { en: "international transfer", zh: "国际汇款" },
              { en: "purpose", zh: "用途" },
              { en: "family support", zh: "家庭赡养" },
              { en: "release the funds", zh: "释放资金" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No language barrier — she'll be talking to a Chinese bank in Chinese. All she has to do is pop into her local ICBC with her ID and say she's waiting for money from overseas. They might have her fill out a quick form — \"family support\" as the reason is totally fine.",
                textZh:
                  '没有语言障碍——她是跟中国银行用中文打交道。只要带身份证去工商银行说在等海外汇款就行。可能让她填个表——写"家庭赡养"就完全没问题。',
                actionHint: "pop into = 去一趟（很随意的说法）",
                frequency: "common",
              },
              {
                textEn:
                  "She won't need English at all — it's her own bank in China. Tell her to bring her ID to the nearest ICBC branch and mention the incoming international wire. If they ask her to state the purpose, \"living expenses from family abroad\" should do the trick.",
                textZh:
                  '完全不需要英语——是她自己在中国的银行。让她带身份证去最近的工商银行说有国际汇款进来。如果让她说明用途，写"海外家人生活费"就行。',
                actionHint: "should do the trick = 应该能解决",
                frequency: "common",
              },
            ],
            casualVersion:
              "No worries — she'll be dealing with a Chinese bank, in Chinese. She just needs to hit up her local ICBC with her ID and tell 'em she's waiting on an international transfer. They might ask her to fill out a form for the purpose — she can write \\",
            commonMistake: {
              wrong: "She needs to go to her local ICBC branch, with her ID card tell them she is expecting...",
              correct: "She just needs to go to her local ICBC branch with her ID card and tell them...",
              explanation: '句式衔接要流畅，"with... and tell" 是自然组合。',
            },
            formalityVariants: {
              casual:
                "No worries — she'll be dealing with a Chinese bank, in Chinese. She just needs to hit up her local ICBC with her ID and tell 'em she's waiting on an international transfer. They might ask her to fill out a form for the purpose — she can write \\",
              standard:
                "Don't worry — she'll be dealing with a Chinese bank in Chinese. She just needs to go to her local ICBC branch with her ID card and tell them she's expecting an international transfer. They may ask her to fill out a form stating the purpose — she can write \\",
              formal:
                "Please do not be concerned; she will be interacting with a Chinese financial institution, utilizing the Chinese language. She is merely required to visit her local ICBC branch, presenting her identification card, and inform them of an impending international funds transfer. It is possible they may request she complete a form specifying the purpose of the funds, for which she may indicate \\",
            },
          },
          {
            speaker: "you",
            textEn: "Okay, I'll tell her. What if the bank still doesn't release the money?",
            textZh: "好的，我告诉她。如果银行还是不放款怎么办？",
            commonMistake: {
              wrong: "Okay, I tell her. If the bank still don't release money, what to do?",
              correct: "Okay, I'll tell her. What if the bank still doesn't release the funds?",
              explanation: "中文“我告诉她”说成 'I tell her' 缺乏未来时态，且 'don't' 语法错误。",
            },
            casualVersion: "Got it, I'll tell her. What if the bank still doesn't release the money?",
            formalityVariants: {
              casual: "Got it, I'll tell her. What if the bank still doesn't release the money?",
              standard: "Okay, I'll tell her. What if the bank still doesn't release the money?",
              formal:
                "Understood. I will convey this information to her. What recourse do we have if the bank continues to withhold the funds?",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "If it's not resolved within five business days, call us back and we can initiate a trace on the funds through the SWIFT network. In the worst case, if the receiving bank rejects the transfer, the money will be returned to your account — though it may take 7 to 10 days. We won't charge you again for the re-transfer.",
            textZh:
              "如果五个工作日内没解决，再打电话给我们，我们可以通过SWIFT网络对资金发起追踪。最坏的情况，如果收款银行拒绝转账，钱会退回你的账户——可能需要7到10天。重新汇款我们不会再收费。",
            keyPhrases: [
              { en: "initiate a trace", zh: "发起追踪" },
              { en: "SWIFT network", zh: "SWIFT网络" },
              { en: "rejects the transfer", zh: "拒绝转账" },
              { en: "returned to your account", zh: "退回你的账户" },
              { en: "re-transfer", zh: "重新汇款" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Give it five business days. If it's still stuck, call us back and we'll trace it through SWIFT. Worst case scenario, if the bank over there bounces it back, the money comes back to you in 7 to 10 days. And we won't charge you to resend it.",
                textZh:
                  "等五个工作日。还是卡着就打给我们，我们通过SWIFT追踪。最坏的情况，对方银行退回来的话，7到10天钱退到你的账户。重新汇不再收费。",
                actionHint: "bounces it back = 退回来, worst case scenario = 最坏的情况",
                frequency: "common",
              },
              {
                textEn:
                  "If nothing happens in five business days, ring us and we'll put a trace on it. If for some reason the bank refuses the transfer, the money bounces back to you — takes about a week or so. No extra fee to send it again.",
                textZh:
                  "五个工作日没动静打给我们，我们发起追踪。如果银行因为什么原因拒绝转账，钱会退给你——大约一周左右。重新发不收额外费用。",
                actionHint: "ring us = 打给我们, nothing happens = 没有动静",
                frequency: "common",
              },
            ],
            casualVersion:
              "If it's not squared away in five biz days, give us a call back and we can trace the funds through SWIFT. Worst case, if the bank rejects it, the money'll go back to your account — might take 7 to 10 days though. We won't charge you for re-transferring.",
            commonMistake: {
              wrong: "We won't charge you a second time for re-transfer.",
              correct: "We won't charge you again for the re-transfer.",
              explanation: '"again" 更简洁自然，"for the re-transfer" 指明用途。',
            },
            formalityVariants: {
              casual:
                "If it's not squared away in five biz days, give us a call back and we can trace the funds through SWIFT. Worst case, if the bank rejects it, the money'll go back to your account — might take 7-10 days though. We won't charge you for re-transferring.",
              standard:
                "If it's not resolved within five business days, call us back and we can initiate a trace on the funds through the SWIFT network. In the worst case, if the receiving bank rejects the transfer, the money will be returned to your account — though it may take 7 to 10 days. We won't charge you again for the re-transfer.",
              formal:
                "Should this matter remain unresolved within five business days, kindly contact us again, and we shall initiate a comprehensive trace of the funds via the SWIFT network. In the unlikely event that the receiving institution declines the transfer, the principal amount will be reverted to your account, albeit this process may require 7 to 10 calendar days. Please be advised that no additional fees will be levied for a subsequent transfer attempt.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Alright. And one more thing — my mother said the amount she saw was less than expected. Is there an intermediary bank fee I should know about?",
            textZh: "好的。还有一件事——我妈说她看到的金额比预期的少。是不是有什么中间银行费用？",
            casualVersion:
              "Okay. And one more thing — Mom said the amount she saw was less than expected. Any intermediary bank fees I should know about?",
            commonMistake: {
              wrong: "My mother said the amount she received is less than expect.",
              correct: "My mother said the amount she saw was less than expected.",
              explanation: '"received" 或 "saw" 都可，但 "less than expected" 更自然。',
            },
            formalityVariants: {
              casual:
                "Okay. And one more thing — Mom said the amount she saw was less than expected. Any intermediary bank fees I should know about?",
              standard:
                "Alright. And one more thing — my mother said the amount she saw was less than expected. Is there an intermediary bank fee I should know about?",
              formal:
                "Understood. Furthermore, my mother informed me that the received amount was less than anticipated. Could you please confirm if there are any applicable intermediary bank fees of which I should be aware?",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "Yes, that's possible. Sometimes an intermediary bank — a bank that processes the transfer between us and the receiving bank — charges a fee. It's usually $10 to $30. Unfortunately, we can't control that. Also, the receiving bank in China may charge a small incoming wire fee. For future transfers, using Alipay delivery avoids both of these fees since it goes directly without intermediary banks.",
            textZh:
              "有可能。有时候中间银行——就是在我们和收款银行之间处理转账的银行——会收一笔费用。通常是10到30美元。这个我们没法控制。另外收款银行也可能收小额来电汇费。以后可以用支付宝收款方式，不经过中间银行，就能避免这两笔费用。",
            commonMistake: {
              wrong: "a bank processing the transfer between us and receiving bank.",
              correct: "a bank that processes the transfer between us and the receiving bank.",
              explanation: "使用 'that processes' 引导的从句更清晰，且 'the receiving bank' 需要冠词。",
            },
            keyPhrases: [
              { en: "intermediary bank", zh: "中间银行" },
              { en: "incoming wire fee", zh: "来电汇费" },
              { en: "can't control", zh: "没法控制" },
              { en: "goes directly", zh: "直接到账" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, that's the annoying part about bank wires. There's often a middleman bank that skims $10 to $30 off the top, and we have no say in that. The receiving bank might take a cut too. Pro tip: next time use Alipay — it skips the middleman entirely, so what you send is what they get.",
                textZh:
                  "是的，这是银行电汇烦人的地方。中间银行经常扣10到30美元，我们管不了。收款银行也可能扣一点。专业建议：下次用支付宝——完全跳过中间环节，你汇多少他们收多少。",
                actionHint: "skims off the top = 从上面扣费, no say in that = 管不了",
                frequency: "common",
              },
              {
                textEn:
                  "Unfortunately, yes. When money goes through intermediary banks, they sometimes take a fee — could be anywhere from $10 to $30. Plus the bank in China might charge a receiving fee. That's why Alipay is the move for China — it goes direct, no middlemen taking a cut.",
                textZh:
                  "很遗憾确实可能。钱经过中间银行时他们有时会收费——10到30美元不等。中国的银行也可能收接收费。所以汇中国用支付宝才是正确选择——直接到账没有中间人扣费。",
                actionHint: "that's why X is the move = 所以X才是正确选择",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, that's possible. Sometimes an intermediary bank — the one between us and the receiving bank — charges a fee. Usually ten to thirty bucks. We can't control that, unfortunately. Also, the receiving bank in China might charge a small incoming wire fee. Next time, using Alipay avoids both those fees 'cause it goes direct, no middle banks.",
            culturalNote: "了解支付宝在国际汇款中的优势",
            formalityVariants: {
              casual:
                "Yeah, that's possible. Sometimes an intermediary bank — the one between us and the receiving bank — charges a fee. Usually ten to thirty bucks. We can't control that, unfortunately. Also, the receiving bank in China might charge a small incoming wire fee. Next time, using Alipay avoids both those fees 'cause it goes direct, no middle banks.",
              standard:
                "Yes, that's possible. Sometimes an intermediary bank — a bank that processes the transfer between us and the receiving bank — charges a fee. It's usually $10 to $30. Unfortunately, we can't control that. Also, the receiving bank in China may charge a small incoming wire fee. For future transfers, using Alipay delivery avoids both of these fees since it goes directly without intermediary banks.",
              formal:
                "Indeed, that is a plausible scenario. Occasionally, an intermediary bank, which facilitates the transaction between our institution and the beneficiary's bank, may levy a service charge, typically ranging from $10 to $30. Regrettably, this particular charge is beyond our direct control. Furthermore, the receiving bank in China may impose a nominal fee for incoming wire transfers. For subsequent remittances, utilizing our Alipay delivery method would circumvent both of these charges, as it bypasses intermediary banks entirely.",
            },
          },
          {
            speaker: "you",
            textEn: "Good to know. Next time I'll use Alipay. Thanks for explaining everything so clearly.",
            textZh: "了解了。下次我用支付宝。谢谢把一切解释得这么清楚。",
            casualVersion: "Good to know. Next time I'll use Alipay. Appreciate you explaining all that so clearly.",
            commonMistake: {
              wrong: "Thanks for your clearly explanation.",
              correct: "Thanks for explaining everything so clearly.",
              explanation: '"explain clearly" 是动词副词搭配，"clear explanation" 是名词形容词搭配。',
            },
            formalityVariants: {
              casual: "Good to know. Next time I'll use Alipay. Appreciate you explaining all that so clearly.",
              standard: "Good to know. Next time I'll use Alipay. Thanks for explaining everything so clearly.",
              formal:
                "That information is most valuable. I will certainly opt for Alipay for future transactions. Thank you for your comprehensive and lucid explanation of these matters.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 开支票账户 ====================
  {
    id: "banking-open-checking",
    tags: ["checking", "开户", "debit card", "支票账户"],
    category: "banking",
    titleZh: "开支票账户",
    titleEn: "Opening a Checking Account",
    description: "在银行开设支票账户，了解账户类型、最低余额、月费和借记卡",
    otherRole: "银行客户经理",
    otherRoleIcon: "🏦",
    flows: [
      {
        id: "open-checking-basic",
        titleZh: "基础开户流程",
        titleEn: "Basic Account Opening",
        description: "首次到银行开设支票账户的标准流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to open a checking account. I just moved here and need a local bank account.",
            textZh: "你好，我想开一个支票账户。我刚搬到这里，需要一个本地银行账户。",
            culturalNote: "美国的 checking account 相当于中国的活期账户，用于日常消费和收付款，几乎人人必备。",
            casualVersion: "Hey, I need to open a checking account. Just moved to the area.",
            commonMistake: {
              wrong: "I want to open a current account.",
              correct: "I'd like to open a checking account.",
              explanation: "美国说 checking account，英国才说 current account。在美国用 current account 别人可能听不懂。",
            },
            formalityVariants: {
              casual: "Hey, I need to set up a checking account. Just got here.",
              standard: "Hi, I'd like to open a checking account. I just moved here and need a local bank account.",
              formal: "Good morning. I would like to inquire about opening a checking account, as I have recently relocated to this area and require a local banking relationship.",
            },
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "Welcome! We have a few checking account options. Do you want a basic account with no monthly fee, or a premium account with extra benefits?",
            textZh: "欢迎！我们有几种支票账户可选。您想要免月费的基础账户，还是有额外福利的高级账户？",
            keyPhrases: [
              { en: "monthly fee", zh: "月费" },
              { en: "premium account", zh: "高级账户" },
            ],
            alternativeExpressions: [
              {
                textEn: "Great, we offer several checking options. Are you looking for something simple with no fees, or would you prefer more features?",
                textZh: "好的，我们有好几种支票账户。您想要简单免费的，还是功能多一些的？",
                actionHint: "说明你的需求偏好",
                frequency: "common",
              },
            ],
            casualVersion: "Cool! We've got a few options. Want the basic free one or something fancier with perks?",
            formalityVariants: {
              casual: "Cool! We've got a few options. Want the basic free one or something fancier?",
              standard: "Welcome! We have a few checking account options. Do you want a basic account with no monthly fee, or a premium account with extra benefits?",
              formal: "Welcome to our institution. We offer several checking account tiers. May I ask whether you would prefer a standard account with no monthly maintenance fee, or a premium account that includes additional benefits?",
            },
          },
          {
            speaker: "you",
            textEn: "I think the basic one is fine for now. What's the minimum balance I need to keep in the account?",
            textZh: "我觉得基础账户就可以了。请问账户需要保持最低余额是多少？",
            culturalNote: "很多美国银行账户要求保持最低余额（minimum balance），低于这个数可能会被收费，这和中国的银行很不一样。",
            casualVersion: "Basic one works. What's the minimum I gotta keep in there?",
            commonMistake: {
              wrong: "What's the least money I must put?",
              correct: "What's the minimum balance I need to keep in the account?",
              explanation: "minimum balance 是固定搭配，表示账户必须维持的最低金额。",
            },
            formalityVariants: {
              casual: "Basic one's fine. How much do I need to keep in it?",
              standard: "I think the basic one is fine for now. What's the minimum balance I need to keep in the account?",
              formal: "The basic account would suit my needs at present. Could you please inform me of the minimum balance requirement?",
            },
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "For the basic account, there's no minimum balance and no monthly fee. You just need to make at least one transaction per month to keep it active.",
            textZh: "基础账户没有最低余额要求，也没有月费。您只需要每月至少有一笔交易就能保持账户活跃。",
            keyPhrases: [
              { en: "no minimum balance", zh: "没有最低余额要求" },
              { en: "keep it active", zh: "保持账户活跃" },
            ],
            alternativeExpressions: [
              {
                textEn: "The basic checking has zero minimums and zero fees. Just use it once a month and you're good.",
                textZh: "基础支票账户零门槛零费用。每月用一次就行。",
                actionHint: "确认没有隐藏费用",
                frequency: "common",
              },
            ],
            casualVersion: "No minimum, no fees. Just use it at least once a month and you're all set.",
            formalityVariants: {
              casual: "No minimum, no fees. Just use it once a month and you're good.",
              standard: "For the basic account, there's no minimum balance and no monthly fee. You just need to make at least one transaction per month to keep it active.",
              formal: "The basic account carries no minimum balance requirement and incurs no monthly maintenance fee. The sole stipulation is that at least one transaction must be conducted per month to maintain the account's active status.",
            },
          },
          {
            speaker: "you",
            textEn: "That sounds great. Will I get a debit card with the account?",
            textZh: "听起来不错。开户后会附带借记卡吗？",
            culturalNote: "美国的 debit card 直接从 checking account 扣款，类似中国的银行卡。信用卡（credit card）是另外申请的。",
            casualVersion: "Nice. Do I get a debit card with it?",
            commonMistake: {
              wrong: "Can I get a bank card?",
              correct: "Will I get a debit card with the account?",
              explanation: "美国人说 debit card，不说 bank card。bank card 虽然能理解但不地道。",
            },
            formalityVariants: {
              casual: "Sweet. Do I get a debit card too?",
              standard: "That sounds great. Will I get a debit card with the account?",
              formal: "That arrangement sounds quite satisfactory. Would a debit card be issued in conjunction with the account?",
            },
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "Yes, you'll receive a debit card within seven to ten business days. In the meantime, I can set you up with a temporary card today. I'll just need your ID and proof of address to get started.",
            textZh: "是的，您会在七到十个工作日内收到借记卡。在此期间，我今天可以给您办一张临时卡。开户只需要您的身份证件和地址证明。",
            keyPhrases: [
              { en: "business days", zh: "工作日" },
              { en: "proof of address", zh: "地址证明" },
            ],
            alternativeExpressions: [
              {
                textEn: "Absolutely. Your permanent card will arrive by mail in about a week. I can give you a temp card right now. Just need your ID and something with your address on it.",
                textZh: "当然。正式卡大约一周寄到。我现在就能给你一张临时卡。只需要你的证件和有地址的文件。",
                actionHint: "准备好护照和地址证明（水电账单或租约）",
                frequency: "common",
              },
            ],
            casualVersion: "Yep, card comes in the mail in a week or so. I can hook you up with a temp card today though. Just need your ID and proof of address.",
            formalityVariants: {
              casual: "Yep, card comes in about a week. I can get you a temp card today. Just need your ID and address proof.",
              standard: "Yes, you'll receive a debit card within seven to ten business days. In the meantime, I can set you up with a temporary card today. I'll just need your ID and proof of address to get started.",
              formal: "Certainly. Your permanent debit card will be delivered within seven to ten business days. However, I am able to issue a temporary card for your immediate use. To proceed, I shall require a valid form of identification and documentation verifying your current address.",
            },
          },
        ],
      },
      {
        id: "open-checking-intermediate",
        titleZh: "比较账户类型",
        titleEn: "Comparing Account Types",
        description: "深入了解不同账户类型的区别和选择合适的方案",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'm comparing your checking accounts. What's the difference between the standard and the interest-bearing account?",
            textZh: "我想比较一下你们的支票账户。标准账户和有利息的账户有什么区别？",
            culturalNote: "美国有些 checking account 会付利息（interest-bearing），但通常要求较高的最低余额。中国的活期利率很低但默认都有。",
            casualVersion: "So what's the deal with your regular checking versus the one that earns interest?",
            commonMistake: {
              wrong: "What's different between standard and interest account?",
              correct: "What's the difference between the standard and the interest-bearing account?",
              explanation: "用 the difference between A and B 而非 different between，interest-bearing 是复合形容词。",
            },
            formalityVariants: {
              casual: "What's the diff between regular checking and the one with interest?",
              standard: "I'm comparing your checking accounts. What's the difference between the standard and the interest-bearing account?",
              formal: "I would appreciate a detailed comparison between your standard checking account and the interest-bearing checking account, if you wouldn't mind.",
            },
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "The standard account has no monthly fee. The interest-bearing account earns 0.5% APY but requires a $1,500 minimum daily balance, otherwise there's a $12 monthly fee.",
            textZh: "标准账户没有月费。有利息的账户年利率0.5%，但要求每日最低余额1500美元，否则每月收12美元的费用。",
            keyPhrases: [
              { en: "APY", zh: "年百分比收益率" },
              { en: "minimum daily balance", zh: "每日最低余额" },
            ],
            alternativeExpressions: [
              {
                textEn: "Standard's free, no catches. The interest one pays you 0.5% a year, but you need to keep at least fifteen hundred in there or you get hit with a twelve-dollar fee.",
                textZh: "标准的免费，没附加条件。有利息的每年付你0.5%，但你得保持至少一千五百块，不然要扣十二块月费。",
                actionHint: "根据自己的资金情况判断是否值得",
                frequency: "common",
              },
            ],
            casualVersion: "Standard's totally free. The interest one gives you half a percent, but you gotta keep fifteen hundred bucks in there or they charge you twelve bucks a month.",
            formalityVariants: {
              casual: "Standard's free. Interest one gives you half a percent but you need fifteen hundred in there or it's twelve bucks a month.",
              standard: "The standard account has no monthly fee. The interest-bearing account earns 0.5% APY but requires a $1,500 minimum daily balance, otherwise there's a $12 monthly fee.",
              formal: "The standard checking account carries no monthly maintenance fee whatsoever. The interest-bearing checking account offers a 0.5% annual percentage yield; however, it necessitates maintaining a minimum daily balance of $1,500, failing which a $12 monthly service charge applies.",
            },
          },
          {
            speaker: "you",
            textEn: "I see. Can I switch from the standard to the interest-bearing account later if I want to?",
            textZh: "明白了。以后如果我想的话，可以从标准账户升级到有利息的账户吗？",
            culturalNote: "美国银行通常允许在不同账户类型之间切换，不需要销户重开，这比中国的银行灵活。",
            casualVersion: "Got it. Can I upgrade later if I change my mind?",
            commonMistake: {
              wrong: "Can I change to interest account in the future?",
              correct: "Can I switch to the interest-bearing account later?",
              explanation: "switch to 比 change to 更准确地表达账户类型切换。",
            },
            formalityVariants: {
              casual: "Cool. Can I just switch later if I want?",
              standard: "I see. Can I switch from the standard to the interest-bearing account later if I want to?",
              formal: "I understand. Would it be possible to upgrade from the standard account to the interest-bearing account at a later date, should my circumstances change?",
            },
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "Absolutely, you can upgrade anytime through our app or by visiting a branch. There's no fee for switching account types.",
            textZh: "当然可以，您随时可以通过我们的App或到网点办理升级。切换账户类型不收费。",
            keyPhrases: [
              { en: "upgrade anytime", zh: "随时升级" },
              { en: "no fee for switching", zh: "切换不收费" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure thing. You can do it online, on the app, or come in. No charge to switch.",
                textZh: "没问题。你可以网上、App上或者来店里办。切换不收费。",
                actionHint: "了解到可以随时免费切换",
                frequency: "common",
              },
            ],
            casualVersion: "For sure, switch whenever you want. Do it on the app or come in. No charge.",
            formalityVariants: {
              casual: "Yeah, totally. Switch whenever through the app or come in. No charge.",
              standard: "Absolutely, you can upgrade anytime through our app or by visiting a branch. There's no fee for switching account types.",
              formal: "Certainly. You are welcome to upgrade your account at any time, either through our mobile application or by visiting any branch location. There is no fee associated with transitioning between account types.",
            },
          },
          {
            speaker: "you",
            textEn: "One more question — does the debit card work internationally? I travel abroad sometimes.",
            textZh: "还有一个问题——借记卡在国外能用吗？我偶尔出国旅行。",
            culturalNote: "美国借记卡在海外使用通常会收取 foreign transaction fee（境外交易费），一般是交易金额的1-3%。出发前最好通知银行。",
            casualVersion: "Oh, one more thing — can I use the debit card overseas?",
            commonMistake: {
              wrong: "Can the card use in abroad?",
              correct: "Does the debit card work internationally?",
              explanation: "work internationally 是自然表达，不能说 use in abroad。",
            },
            formalityVariants: {
              casual: "Quick question — does the card work overseas?",
              standard: "One more question — does the debit card work internationally? I travel abroad sometimes.",
              formal: "I have one additional inquiry. Is the debit card functional for international transactions? I do travel abroad on occasion.",
            },
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "Yes, it works anywhere Visa is accepted. Just keep in mind there's a 1% foreign transaction fee. Also, be sure to let us know before you travel so we don't flag your card for suspicious activity.",
            textZh: "是的，只要接受Visa的地方都能用。不过请注意有1%的境外交易手续费。另外，出行前请通知我们，以免我们把您的卡标记为可疑活动。",
            keyPhrases: [
              { en: "foreign transaction fee", zh: "境外交易手续费" },
              { en: "flag your card", zh: "标记您的卡" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yep, works worldwide wherever they take Visa. There's a small foreign transaction fee though. And give us a heads-up before you travel so your card doesn't get blocked.",
                textZh: "能用，全球接受Visa的地方都行。不过有笔小额境外交易费。出发前跟我们说一声，免得卡被冻结。",
                actionHint: "记住出国前要通知银行",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah, works anywhere Visa's accepted. There's a 1% fee for international stuff though. And heads up — tell us before you travel or your card might get frozen.",
            formalityVariants: {
              casual: "Yep, works anywhere they take Visa. Small fee for overseas purchases. Oh, and let us know before you travel so we don't freeze it.",
              standard: "Yes, it works anywhere Visa is accepted. Just keep in mind there's a 1% foreign transaction fee. Also, be sure to let us know before you travel so we don't flag your card for suspicious activity.",
              formal: "Indeed, the card is accepted at any establishment that processes Visa transactions worldwide. Please be advised that a 1% foreign transaction fee applies. Additionally, I would strongly recommend notifying us prior to any international travel to prevent your card from being flagged for potentially suspicious activity.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 设置工资直存 ====================
  {
    id: "banking-direct-deposit",
    tags: ["direct deposit", "工资直存", "routing number", "薪水"],
    category: "banking",
    titleZh: "设置工资直存",
    titleEn: "Setting Up Direct Deposit",
    description: "在银行获取工资直存所需信息，了解routing number、account number和处理时间",
    otherRole: "银行柜员",
    otherRoleIcon: "🏦",
    flows: [
      {
        id: "direct-deposit-basic",
        titleZh: "获取直存信息",
        titleEn: "Getting Direct Deposit Info",
        description: "到银行获取设置工资直存所需的账户信息",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to set up direct deposit with my employer. Can you help me find my routing number and account number?",
            textZh: "你好，我需要在公司设置工资直存。你能帮我找到我的routing number和account number吗？",
            culturalNote: "美国大多数公司通过 direct deposit（工资直存）发薪水，直接打到你的银行账户，不像中国公司发到工资卡。你需要提供 routing number 和 account number 给雇主。",
            casualVersion: "Hey, I need my routing and account numbers for direct deposit. Can you look those up?",
            commonMistake: {
              wrong: "I want to set salary transfer.",
              correct: "I need to set up direct deposit with my employer.",
              explanation: "美国说 direct deposit，不说 salary transfer。set up 是固定搭配。",
            },
            formalityVariants: {
              casual: "Hey, I need my routing and account numbers for direct deposit.",
              standard: "Hi, I need to set up direct deposit with my employer. Can you help me find my routing number and account number?",
              formal: "Good morning. I need to arrange direct deposit with my employer and would appreciate your assistance in obtaining my routing number and account number.",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Sure, I can pull that up for you. Your routing number is the same for all accounts at our bank. Let me print out a direct deposit form with all your details.",
            textZh: "当然，我帮您查。Routing number 我们银行所有账户都一样。我帮您打印一份包含所有信息的直存表格。",
            keyPhrases: [
              { en: "routing number", zh: "银行路由号码" },
              { en: "direct deposit form", zh: "直存表格" },
            ],
            alternativeExpressions: [
              {
                textEn: "No problem. The routing number is the same for everyone here. Let me get you a printout with everything your employer needs.",
                textZh: "没问题。路由号码我们这里所有人都一样。我给你打印一份你雇主需要的全部信息。",
                actionHint: "等待柜员打印表格",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah, no problem. Routing number's the same for everyone. Let me grab you a printout with all your info.",
            formalityVariants: {
              casual: "Yeah, routing number's the same for all of us. Lemme print that out for you.",
              standard: "Sure, I can pull that up for you. Your routing number is the same for all accounts at our bank. Let me print out a direct deposit form with all your details.",
              formal: "Certainly, I would be happy to retrieve that information for you. The routing number is uniform across all accounts at our institution. Allow me to prepare a comprehensive direct deposit authorization form containing all of your account details.",
            },
          },
          {
            speaker: "you",
            textEn: "Thanks. My employer gave me a form to fill out. Do I just put the routing number and account number on it?",
            textZh: "谢谢。我雇主给了我一张表格要填。我只要把routing number和account number填上去就行吗？",
            culturalNote: "美国雇主通常提供一张 direct deposit authorization form，你需要填写银行信息并签名。有些公司现在用在线系统设置。",
            casualVersion: "Cool. My job gave me a form. I just put the routing and account numbers on there, right?",
            commonMistake: {
              wrong: "Do I write the bank number on the paper?",
              correct: "Do I just put the routing number and account number on it?",
              explanation: "要分别说 routing number 和 account number，不能笼统说 bank number。",
            },
            formalityVariants: {
              casual: "My boss gave me a form. I just slap the numbers on there?",
              standard: "Thanks. My employer gave me a form to fill out. Do I just put the routing number and account number on it?",
              formal: "Thank you. My employer has provided an authorization form. Am I correct in understanding that I simply need to enter the routing number and account number on the form?",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Yes, and you'll also need to indicate the account type — checking or savings — and how much of your paycheck you want deposited. Most people choose 100%.",
            textZh: "是的，另外您还需要注明账户类型——支票账户还是储蓄账户——以及您想存入工资的百分比。大多数人选择100%。",
            keyPhrases: [
              { en: "account type", zh: "账户类型" },
              { en: "paycheck", zh: "工资/薪水支票" },
            ],
            alternativeExpressions: [
              {
                textEn: "Right. Just make sure you mark whether it's checking or savings, and what percentage of your pay goes in. Most folks do the full amount.",
                textZh: "对。记得标注是支票还是储蓄账户，还有工资存多少比例进去。大部分人都存全部。",
                actionHint: "确认选择 checking 还是 savings",
                frequency: "common",
              },
            ],
            casualVersion: "Yep, just mark checking or savings and how much of your pay you want going in. Most people do all of it.",
            formalityVariants: {
              casual: "Yep, mark checking or savings and what percent of your pay. Most people put in everything.",
              standard: "Yes, and you'll also need to indicate the account type — checking or savings — and how much of your paycheck you want deposited. Most people choose 100%.",
              formal: "That is correct. Additionally, you will need to specify the account type — whether checking or savings — as well as the proportion of your paycheck you wish to have deposited. The majority of our clients elect to deposit the full amount.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. How long does it usually take for direct deposit to start working after I submit the form?",
            textZh: "明白了。提交表格后，工资直存通常多久能生效？",
            culturalNote: "美国设置 direct deposit 一般需要一到两个发薪周期（pay period）才能生效，不是立即的。",
            casualVersion: "How long till it kicks in after I turn in the form?",
            commonMistake: {
              wrong: "How long time does direct deposit need to begin?",
              correct: "How long does it usually take for direct deposit to start working?",
              explanation: "how long does it take 是固定句型，不能加 time。start working 比 begin 更自然。",
            },
            formalityVariants: {
              casual: "How long before it kicks in?",
              standard: "Got it. How long does it usually take for direct deposit to start working after I submit the form?",
              formal: "I understand. Could you advise me on the typical processing timeline for the direct deposit to become active once the authorization form has been submitted?",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "It usually takes one to two pay cycles. So if you're paid biweekly, it should be active within two to four weeks. Your first paycheck might still come as a paper check.",
            textZh: "通常需要一到两个发薪周期。如果您是双周发薪的话，大概两到四周就能生效。第一笔工资可能还是纸质支票。",
            keyPhrases: [
              { en: "pay cycles", zh: "发薪周期" },
              { en: "paper check", zh: "纸质支票" },
            ],
            alternativeExpressions: [
              {
                textEn: "Give it about one or two pay periods. If you get paid every two weeks, that's about a month. Don't be surprised if the first one's still a physical check.",
                textZh: "大概一到两个发薪周期。如果你每两周发一次薪，那就是大约一个月。第一笔还是纸质支票也别惊讶。",
                actionHint: "准备好第一笔可能是纸质支票",
                frequency: "common",
              },
            ],
            casualVersion: "Usually a pay period or two. If you get paid every two weeks, give it about a month. First check might still be paper though.",
            formalityVariants: {
              casual: "A pay period or two. So maybe a month if you're biweekly. First one might be paper.",
              standard: "It usually takes one to two pay cycles. So if you're paid biweekly, it should be active within two to four weeks. Your first paycheck might still come as a paper check.",
              formal: "The processing period is typically one to two pay cycles. For a biweekly pay schedule, you can expect activation within approximately two to four weeks. Please note that your initial remuneration may still be disbursed in the form of a paper check.",
            },
          },
        ],
      },
      {
        id: "direct-deposit-intermediate",
        titleZh: "分账设置和问题排查",
        titleEn: "Split Deposit & Troubleshooting",
        description: "设置工资分存到多个账户，以及解决直存延迟问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'd like to split my direct deposit between two accounts. Can I put part in checking and part in savings?",
            textZh: "我想把工资分存到两个账户。可以一部分存到支票账户，一部分存到储蓄账户吗？",
            culturalNote: "美国很多人会把工资自动分成两部分——日常开销进 checking，固定比例进 savings，这是很常见的理财方式。",
            casualVersion: "Can I split my direct deposit? Like some in checking and some in savings?",
            commonMistake: {
              wrong: "I want to divide my salary into two accounts.",
              correct: "I'd like to split my direct deposit between two accounts.",
              explanation: "split between 是标准表达，divide into 虽然语法对但不是银行惯用说法。",
            },
            formalityVariants: {
              casual: "Hey, can I split my paycheck between checking and savings?",
              standard: "I'd like to split my direct deposit between two accounts. Can I put part in checking and part in savings?",
              formal: "I would like to arrange a split direct deposit allocation. Would it be possible to direct a portion to my checking account and the remainder to my savings account?",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Yes, you can do a split deposit. You'd specify a fixed dollar amount for one account, and the remainder goes to the other. For example, $500 to savings and the rest to checking.",
            textZh: "可以的，您可以设置分存。您指定一个固定金额存入一个账户，剩余的进另一个账户。比如500美元存储蓄账户，其余进支票账户。",
            keyPhrases: [
              { en: "split deposit", zh: "分存" },
              { en: "the remainder", zh: "剩余部分" },
            ],
            alternativeExpressions: [
              {
                textEn: "Definitely. Just pick a set amount for savings — say five hundred — and everything else goes to checking automatically.",
                textZh: "当然可以。选一个固定金额存储蓄——比如五百——剩下的自动进支票账户。",
                actionHint: "决定固定金额还是按百分比分配",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah, totally. Just pick an amount for one account and the rest goes to the other. Like put five hundred in savings and everything else in checking.",
            formalityVariants: {
              casual: "Yeah! Just pick a set amount for one and the rest goes to the other.",
              standard: "Yes, you can do a split deposit. You'd specify a fixed dollar amount for one account, and the remainder goes to the other. For example, $500 to savings and the rest to checking.",
              formal: "Certainly, split deposit arrangements are available. You would designate a specific dollar amount to be deposited into one account, with the remaining balance directed to the secondary account. As an illustration, you might allocate $500 to your savings account with the balance deposited to your checking account.",
            },
          },
          {
            speaker: "you",
            textEn: "That makes sense. Actually, I also have a question — my last direct deposit didn't show up on payday. What could have gone wrong?",
            textZh: "明白了。对了，我还有个问题——上次发薪日我的直存没有到账。可能是什么原因？",
            culturalNote: "美国的 payday（发薪日）非常规律，通常是双周一次或每月两次。如果直存没到账，常见原因是银行信息错误或雇主处理延迟。",
            casualVersion: "Makes sense. Oh, one more thing — my last paycheck didn't show up on time. Any idea why?",
            commonMistake: {
              wrong: "My salary didn't arrive on pay day.",
              correct: "My direct deposit didn't show up on payday.",
              explanation: "直存说 show up 比 arrive 自然，payday 是一个词不分开写。",
            },
            formalityVariants: {
              casual: "Got it. Oh hey, my last paycheck didn't hit my account on payday. What happened?",
              standard: "That makes sense. Actually, I also have a question — my last direct deposit didn't show up on payday. What could have gone wrong?",
              formal: "That is quite clear, thank you. I do have an additional concern — my most recent direct deposit did not appear in my account on the designated payday. Could you help me identify what might have caused the delay?",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Let me check your account. Sometimes there's a delay if the employer submitted the payroll late. It could also be a bank holiday that pushed the processing to the next business day.",
            textZh: "我帮您查一下。有时候雇主提交工资单晚了会导致延迟。也可能是遇到银行假日，处理推迟到了下一个工作日。",
            keyPhrases: [
              { en: "payroll", zh: "工资单/薪资系统" },
              { en: "bank holiday", zh: "银行假日" },
            ],
            alternativeExpressions: [
              {
                textEn: "Let me take a look. Usually it's because your employer was late with payroll, or a holiday pushed things back a day.",
                textZh: "我看看。一般是雇主工资单交晚了，或者假日导致延后了一天。",
                actionHint: "等柜员查询，可能需要联系雇主确认",
                frequency: "common",
              },
            ],
            casualVersion: "Lemme look into it. Sometimes it's just a delay on the employer's end, or a holiday pushed it back a day.",
            formalityVariants: {
              casual: "Let me check. Could be your employer was late, or a holiday bumped it.",
              standard: "Let me check your account. Sometimes there's a delay if the employer submitted the payroll late. It could also be a bank holiday that pushed the processing to the next business day.",
              formal: "Allow me to review your account records. Delays can occasionally occur if the employer submits the payroll authorization after the processing deadline. Additionally, a bank holiday may have resulted in the transaction being deferred to the following business day.",
            },
          },
          {
            speaker: "you",
            textEn: "I see. If it happens again, should I contact you or my employer's HR department?",
            textZh: "明白了。如果再遇到这种情况，我应该联系你们还是公司的人事部门？",
            culturalNote: "美国公司的 HR department 负责处理薪资问题。直存出问题时，一般先联系 HR/payroll department 确认是否已发出，再找银行。",
            casualVersion: "If it happens again, do I call you guys or talk to HR?",
            commonMistake: {
              wrong: "Should I contact you or my company's people department?",
              correct: "Should I contact you or my employer's HR department?",
              explanation: "人事部门叫 HR department 或 Human Resources，不能直译为 people department。",
            },
            formalityVariants: {
              casual: "If it happens again, who do I call — you or HR?",
              standard: "I see. If it happens again, should I contact you or my employer's HR department?",
              formal: "I understand. In the event that this occurs again, would you recommend that I contact the bank directly, or should I first liaise with my employer's Human Resources department?",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Start with your HR or payroll department — they can confirm whether the payment was sent. If they say it was sent but it's not in your account, then give us a call and we'll trace the transfer.",
            textZh: "先联系您公司的人事或薪资部门——他们可以确认工资是否已经发出。如果他们说已发出但您的账户里没有，那就给我们打电话，我们会追踪这笔转账。",
            keyPhrases: [
              { en: "payroll department", zh: "薪资部门" },
              { en: "trace the transfer", zh: "追踪转账" },
            ],
            alternativeExpressions: [
              {
                textEn: "Check with HR first to make sure they actually sent it. If they did and you still don't see it, call us and we'll track it down.",
                textZh: "先跟HR确认他们有没有发。如果发了但你还没收到，打电话给我们，我们来追查。",
                actionHint: "记住先找HR再找银行的顺序",
                frequency: "common",
              },
            ],
            casualVersion: "Hit up HR first — make sure they actually sent it. If they did and it's still not there, call us and we'll figure it out.",
            formalityVariants: {
              casual: "Check with HR first. If they sent it and it's not showing up, give us a ring and we'll look into it.",
              standard: "Start with your HR or payroll department — they can confirm whether the payment was sent. If they say it was sent but it's not in your account, then give us a call and we'll trace the transfer.",
              formal: "I would recommend initially contacting your Human Resources or payroll department to verify that the payment was indeed processed and transmitted. Should they confirm that the funds were dispatched yet are not reflected in your account, please contact us directly and we will initiate a trace on the transfer.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 国际汇款 ====================
  {
    id: "banking-wire-transfer-intl",
    tags: ["wire transfer", "国际汇款", "SWIFT", "汇率", "remittance"],
    category: "banking",
    titleZh: "国际汇款",
    titleEn: "International Wire Transfer",
    description: "在银行办理国际汇款，了解SWIFT代码、手续费、汇率和处理时间",
    otherRole: "银行汇款专员",
    otherRoleIcon: "🏦",
    flows: [
      {
        id: "wire-intl-basic",
        titleZh: "基础汇款流程",
        titleEn: "Basic Wire Transfer Process",
        description: "第一次在美国银行办理国际汇款的标准流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to send money to my family in China. What do I need for an international wire transfer?",
            textZh: "你好，我需要给中国的家人汇款。办理国际汇款需要什么？",
            culturalNote: "从美国汇款到中国是留学生和移民最常见的需求之一。银行汇款（wire transfer）是最正规的方式，但手续费较高。很多人也用 Wise、Remitly 等在线服务。",
            casualVersion: "Hey, I need to wire some money to China. What do I need?",
            commonMistake: {
              wrong: "I want to remit money to China.",
              correct: "I need to send money to China via wire transfer.",
              explanation: "美国口语中用 send money 或 wire money，remit 太正式，日常对话中很少用。",
            },
            formalityVariants: {
              casual: "Hey, gotta send some money to my family back in China. How do I do a wire?",
              standard: "Hi, I need to send money to my family in China. What do I need for an international wire transfer?",
              formal: "Good afternoon. I would like to initiate an international wire transfer to China. Could you please advise me on the requirements and procedures?",
            },
          },
          {
            speaker: "them",
            role: "银行汇款专员",
            textEn: "Sure, for an international wire you'll need the recipient's full name, their bank's SWIFT code, their account number, and the bank's address. Do you have that information?",
            textZh: "好的，国际汇款您需要收款人全名、收款银行的SWIFT代码、账号以及银行地址。您有这些信息吗？",
            keyPhrases: [
              { en: "SWIFT code", zh: "SWIFT代码/银行国际代码" },
              { en: "recipient", zh: "收款人" },
            ],
            alternativeExpressions: [
              {
                textEn: "No problem. I'll need the name on the receiving account, their bank's SWIFT code, the account number, and the bank address. Got all that handy?",
                textZh: "没问题。我需要收款账户名、SWIFT代码、账号和银行地址。你都准备好了吗？",
                actionHint: "确认自己有收款方的所有银行信息",
                frequency: "common",
              },
            ],
            casualVersion: "Sure. I'll need the person's name, their bank's SWIFT code, account number, and the bank address. You got all that?",
            formalityVariants: {
              casual: "Yeah, I'll need their name, SWIFT code, account number, and bank address. Got all that?",
              standard: "Sure, for an international wire you'll need the recipient's full name, their bank's SWIFT code, their account number, and the bank's address. Do you have that information?",
              formal: "Certainly. To process an international wire transfer, we shall require the recipient's complete legal name, the beneficiary bank's SWIFT or BIC code, the recipient's account number, and the full address of the receiving financial institution. Do you have this information available?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I have everything. How much is the fee for sending a wire to China?",
            textZh: "有的，都有。汇款到中国的手续费是多少？",
            culturalNote: "美国银行的国际汇款手续费通常在25-50美元之间，比中国的银行汇款费用高很多。有些银行对 premium 客户减免手续费。",
            casualVersion: "Yeah, got it all. How much does it cost to wire money to China?",
            commonMistake: {
              wrong: "How much is the service charge?",
              correct: "How much is the fee for sending a wire?",
              explanation: "美国银行说 fee 而不是 service charge。wire 可以做名词表示汇款。",
            },
            formalityVariants: {
              casual: "Yep, I've got everything. What's it gonna cost me?",
              standard: "Yes, I have everything. How much is the fee for sending a wire to China?",
              formal: "Yes, I have all the required information prepared. May I inquire about the fee structure for an international wire transfer to China?",
            },
          },
          {
            speaker: "them",
            role: "银行汇款专员",
            textEn: "The outgoing wire fee is $45. There might also be an intermediary bank fee of $15 to $25 on the receiving end. And keep in mind the exchange rate — we use the mid-market rate plus a small spread.",
            textZh: "汇出手续费是45美元。收款端可能还会有15到25美元的中间银行费用。另外请注意汇率——我们用中间市场汇率加一个小点差。",
            keyPhrases: [
              { en: "outgoing wire fee", zh: "汇出手续费" },
              { en: "exchange rate", zh: "汇率" },
            ],
            alternativeExpressions: [
              {
                textEn: "It's forty-five dollars on our end. The other side might charge another fifteen to twenty-five bucks through an intermediary bank. Also, the exchange rate has a small markup built in.",
                textZh: "我们这边四十五美元。那边可能通过中间银行再收十五到二十五美元。另外汇率有个小加价。",
                actionHint: "问清楚总费用和实际到账金额",
                frequency: "common",
              },
            ],
            casualVersion: "Forty-five bucks on our end. Might be another fifteen to twenty-five from a middleman bank on the other side. And the exchange rate has a tiny markup.",
            formalityVariants: {
              casual: "Forty-five from us. Maybe another fifteen to twenty-five on the other end. Exchange rate has a small markup too.",
              standard: "The outgoing wire fee is $45. There might also be an intermediary bank fee of $15 to $25 on the receiving end. And keep in mind the exchange rate — we use the mid-market rate plus a small spread.",
              formal: "The outgoing international wire transfer fee is $45. Please be aware that intermediary banking institutions may levy an additional fee ranging from $15 to $25 on the receiving end. Furthermore, regarding the foreign exchange rate, we apply the mid-market rate with a modest spread incorporated.",
            },
          },
          {
            speaker: "you",
            textEn: "I see. How long will it take for the money to arrive in China?",
            textZh: "明白了。钱到中国需要多长时间？",
            culturalNote: "国际汇款一般需要1-5个工作日，到中国通常2-3个工作日。比国内转账慢很多。周末和节假日不处理。",
            casualVersion: "Got it. How long till it gets there?",
            commonMistake: {
              wrong: "How long time will the money go to China?",
              correct: "How long will it take for the money to arrive in China?",
              explanation: "how long will it take for...to 是标准句型，不用 how long time。",
            },
            formalityVariants: {
              casual: "Cool. How long before they get it?",
              standard: "I see. How long will it take for the money to arrive in China?",
              formal: "I understand. Could you please advise on the estimated processing time for the funds to reach the recipient's account in China?",
            },
          },
          {
            speaker: "them",
            role: "银行汇款专员",
            textEn: "International wires to China typically take two to three business days. If you send it before our cutoff time at 3 PM, it'll start processing today.",
            textZh: "国际汇款到中国通常需要两到三个工作日。如果您在下午3点截止时间前发出，今天就会开始处理。",
            keyPhrases: [
              { en: "business days", zh: "工作日" },
              { en: "cutoff time", zh: "截止时间" },
            ],
            alternativeExpressions: [
              {
                textEn: "Usually two to three business days to China. Get it in before 3 PM and we'll process it same day.",
                textZh: "到中国一般两到三个工作日。下午三点前交的话当天就处理。",
                actionHint: "注意截止时间，尽量早办理",
                frequency: "common",
              },
            ],
            casualVersion: "Two to three business days for China. If we get it in before 3, it goes out today.",
            formalityVariants: {
              casual: "Couple business days to China. Get it in before 3 and it goes out today.",
              standard: "International wires to China typically take two to three business days. If you send it before our cutoff time at 3 PM, it'll start processing today.",
              formal: "International wire transfers to China are typically completed within two to three business days. Should the transfer be initiated prior to our daily cutoff time of 3:00 PM, processing will commence on the same business day.",
            },
          },
        ],
      },
      {
        id: "wire-intl-intermediate",
        titleZh: "汇率比较和追踪",
        titleEn: "Exchange Rates & Tracking",
        description: "深入了解汇率、选择最佳汇款方式和追踪汇款状态",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Before I send the wire, can you tell me what exchange rate you're offering today for US dollars to Chinese yuan?",
            textZh: "在汇款之前，你能告诉我今天美元兑人民币的汇率是多少吗？",
            culturalNote: "银行给的汇率通常比实际中间市场汇率差一些，这个差额就是银行的利润。可以对比 Google 或 XE.com 上的实时汇率来判断银行加了多少。",
            casualVersion: "What's your exchange rate for dollars to yuan today?",
            commonMistake: {
              wrong: "How much is one dollar in RMB today?",
              correct: "What exchange rate are you offering today for US dollars to Chinese yuan?",
              explanation: "在银行要用 exchange rate 这个术语，yuan 比 RMB 更常用于口语。",
            },
            formalityVariants: {
              casual: "What's the rate for dollars to yuan right now?",
              standard: "Before I send the wire, can you tell me what exchange rate you're offering today for US dollars to Chinese yuan?",
              formal: "Prior to proceeding with the transfer, would you be so kind as to provide me with today's exchange rate for US dollars to Chinese yuan?",
            },
          },
          {
            speaker: "them",
            role: "银行汇款专员",
            textEn: "Today's rate is 7.18 yuan per dollar. That includes our spread. The mid-market rate is about 7.24, so our markup is roughly 0.8%.",
            textZh: "今天的汇率是1美元兑7.18人民币，已包含我们的点差。中间市场汇率大约是7.24，所以我们的加价大约0.8%。",
            keyPhrases: [
              { en: "spread", zh: "点差/差价" },
              { en: "mid-market rate", zh: "中间市场汇率" },
            ],
            alternativeExpressions: [
              {
                textEn: "We're at 7.18 yuan to the dollar today. The real rate's around 7.24, so there's about a 0.8% difference — that's our margin.",
                textZh: "今天我们的汇率是1美元7.18元。实际汇率大概7.24，差了大约0.8%——那是我们的利润。",
                actionHint: "可以对比其他汇款服务的汇率",
                frequency: "common",
              },
            ],
            casualVersion: "We're doing 7.18 yuan per dollar. Real rate's about 7.24, so we're taking a small cut — less than 1%.",
            formalityVariants: {
              casual: "7.18 per dollar. Real rate's about 7.24. We take less than a percent.",
              standard: "Today's rate is 7.18 yuan per dollar. That includes our spread. The mid-market rate is about 7.24, so our markup is roughly 0.8%.",
              formal: "Our current exchange rate stands at 7.18 Chinese yuan per US dollar, which incorporates our institutional spread. For reference, the prevailing mid-market rate is approximately 7.24, placing our markup at roughly 0.8 percent.",
            },
          },
          {
            speaker: "you",
            textEn: "That's helpful, thanks. If I send $2,000, roughly how much will my family receive in yuan after all the fees?",
            textZh: "很有帮助，谢谢。如果我汇2000美元，扣掉所有费用后我家人大约能收到多少人民币？",
            culturalNote: "美国汇款时很重要的一点是要问清楚总到账金额（net amount），因为手续费和汇率差价会让实际到账金额比你想象的少。",
            casualVersion: "If I send two grand, how much will they actually get in yuan after everything?",
            commonMistake: {
              wrong: "How much money can my family get after reducing all fees?",
              correct: "How much will my family receive in yuan after all the fees?",
              explanation: "receive after fees 是自然表达，不用 get after reducing。",
            },
            formalityVariants: {
              casual: "So if I send two thousand, what do they end up getting?",
              standard: "That's helpful, thanks. If I send $2,000, roughly how much will my family receive in yuan after all the fees?",
              formal: "Thank you, that is most informative. If I were to remit $2,000, could you calculate the approximate amount my family would receive in yuan, net of all applicable fees?",
            },
          },
          {
            speaker: "them",
            role: "银行汇款专员",
            textEn: "Let me calculate. $2,000 minus the $45 wire fee is $1,955 converted. At 7.18, that's about 14,037 yuan. The receiving bank might deduct another small fee, so figure around 13,900 to 14,000 yuan.",
            textZh: "我算一下。2000美元减去45美元手续费，实际兑换1955美元。按7.18的汇率，大约是14037元人民币。收款银行可能还会扣一小笔费用，所以大约到账13900到14000元。",
            keyPhrases: [
              { en: "converted", zh: "兑换后" },
              { en: "receiving bank", zh: "收款银行" },
            ],
            alternativeExpressions: [
              {
                textEn: "After the forty-five dollar fee, you're converting nineteen fifty-five. At today's rate that's roughly fourteen thousand yuan. Minus a small fee on their end, probably around thirteen nine to fourteen thousand.",
                textZh: "扣掉四十五美元手续费后，实际兑换一千九百五十五。按今天的汇率大约一万四千元。那边再扣点小费用，大约一万三千九到一万四。",
                actionHint: "确认到账金额是否符合预期",
                frequency: "common",
              },
            ],
            casualVersion: "So after fees, you're converting about $1,955. At 7.18, that's roughly 14,000 yuan. Might be a little less after the other bank takes their cut.",
            formalityVariants: {
              casual: "After fees you're converting about nineteen fifty-five. That's around fourteen thousand yuan. Might lose a tiny bit more on the other end.",
              standard: "Let me calculate. $2,000 minus the $45 wire fee is $1,955 converted. At 7.18, that's about 14,037 yuan. The receiving bank might deduct another small fee, so figure around 13,900 to 14,000 yuan.",
              formal: "Allow me to compute the figures. From the $2,000 principal, we deduct the $45 wire transfer fee, yielding $1,955 for conversion. At the current rate of 7.18 yuan per dollar, that equates to approximately 14,037 yuan. Accounting for potential intermediary and receiving bank charges, the net amount received would likely be in the range of 13,900 to 14,000 yuan.",
            },
          },
          {
            speaker: "you",
            textEn: "OK, let's go ahead with the transfer. Can I get a confirmation number to track it?",
            textZh: "好的，那就办理吧。我能拿到一个确认号来追踪汇款吗？",
            culturalNote: "汇款确认号（confirmation number / reference number）非常重要，一定要保存好。如果汇款出问题，银行需要这个号码来查询。",
            casualVersion: "Let's do it. Can I get some kind of tracking number?",
            commonMistake: {
              wrong: "Can I get a track number for the remittance?",
              correct: "Can I get a confirmation number to track it?",
              explanation: "confirmation number 或 reference number 是正确说法，tracking number 一般指快递。",
            },
            formalityVariants: {
              casual: "Alright, let's send it. Can I get a tracking number or something?",
              standard: "OK, let's go ahead with the transfer. Can I get a confirmation number to track it?",
              formal: "Very well, I would like to proceed with the transfer. Could you please provide me with a confirmation or reference number so that I may monitor the transaction's progress?",
            },
          },
          {
            speaker: "them",
            role: "银行汇款专员",
            textEn: "Absolutely. Once I process the wire, you'll get a confirmation receipt with a reference number. You can track the status online or call us. I'll also send a confirmation to your email on file.",
            textZh: "当然。汇款处理完后，您会收到一张带有参考号码的确认收据。您可以在线追踪状态或打电话给我们。我也会把确认信息发送到您的注册邮箱。",
            keyPhrases: [
              { en: "reference number", zh: "参考号码" },
              { en: "confirmation receipt", zh: "确认收据" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yep, you'll get a receipt with a reference number when it's done. Check the status online anytime, or just call us. I'll email you a copy too.",
                textZh: "会的，办完你会拿到一张带参考号的收据。随时可以网上查状态，或者打电话给我们。我也会发一份到你邮箱。",
                actionHint: "保存好参考号码，必要时用来查询",
                frequency: "common",
              },
            ],
            casualVersion: "For sure. You'll get a receipt with a ref number. Check it online or give us a call. I'll email you a copy too.",
            formalityVariants: {
              casual: "Yep, you'll get a ref number on your receipt. Check online or call us. I'll shoot you an email too.",
              standard: "Absolutely. Once I process the wire, you'll get a confirmation receipt with a reference number. You can track the status online or call us. I'll also send a confirmation to your email on file.",
              formal: "Certainly. Upon completion of the wire transfer processing, you will receive a confirmation receipt bearing a unique reference number. The transaction status may be monitored through our online banking portal or by contacting our customer service line. Additionally, a confirmation will be dispatched to the email address registered on your account.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 申请信用卡 ====================
  {
    id: "banking-credit-card-apply",
    tags: ["credit card", "信用卡", "APR", "rewards", "申请"],
    category: "banking",
    titleZh: "申请信用卡",
    titleEn: "Applying for a Credit Card",
    description: "在银行申请信用卡，了解信用记录要求、年利率、年费、奖励计划和担保信用卡",
    otherRole: "银行信用卡顾问",
    otherRoleIcon: "🏦",
    flows: [
      {
        id: "credit-card-basic",
        titleZh: "首次申请信用卡",
        titleEn: "First Credit Card Application",
        description: "没有信用记录的情况下首次申请信用卡",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to apply for a credit card. I'm new to the US and don't have a credit history yet. What are my options?",
            textZh: "你好，我想申请一张信用卡。我刚到美国，还没有信用记录。我有哪些选择？",
            culturalNote: "美国的信用体系（credit system）和中国完全不同。没有信用记录（credit history）在美国寸步难行，租房、买车、甚至手机合约都需要。尽早建立信用非常重要。",
            casualVersion: "Hey, I wanna get a credit card but I'm new here and have no credit. What can I do?",
            commonMistake: {
              wrong: "I don't have credit record in America.",
              correct: "I don't have a credit history in the US yet.",
              explanation: "说 credit history 而不是 credit record，in the US 比 in America 更常用。",
            },
            formalityVariants: {
              casual: "Hey, I need a credit card but I've got zero credit history. What do you got for someone like me?",
              standard: "Hi, I'd like to apply for a credit card. I'm new to the US and don't have a credit history yet. What are my options?",
              formal: "Good afternoon. I am interested in applying for a credit card. As I have recently arrived in the United States, I do not yet have an established credit history. Could you please outline the options available to me?",
            },
          },
          {
            speaker: "them",
            role: "银行信用卡顾问",
            textEn: "Welcome! For customers without credit history, I'd recommend starting with a secured credit card. You put down a deposit, and that becomes your credit limit. It's a great way to build credit.",
            textZh: "欢迎！对于没有信用记录的客户，我建议从担保信用卡开始。您存一笔押金，押金金额就是您的信用额度。这是建立信用的好方法。",
            keyPhrases: [
              { en: "secured credit card", zh: "担保信用卡" },
              { en: "build credit", zh: "建立信用" },
            ],
            alternativeExpressions: [
              {
                textEn: "No worries, lots of newcomers start this way. A secured card is your best bet — you put down a deposit and that's your limit. Use it responsibly and your credit score will grow.",
                textZh: "别担心，很多新来的人都这样。担保卡是最好的选择——你交一笔押金，那就是你的额度。按时还款，信用分就会涨。",
                actionHint: "了解担保信用卡的运作方式",
                frequency: "common",
              },
            ],
            casualVersion: "No problem! A secured card is perfect for starters. You drop a deposit — say $300 — and that's your credit limit. Helps you build credit fast.",
            formalityVariants: {
              casual: "No worries! Start with a secured card. Drop a deposit, that's your limit. Great way to build credit.",
              standard: "Welcome! For customers without credit history, I'd recommend starting with a secured credit card. You put down a deposit, and that becomes your credit limit. It's a great way to build credit.",
              formal: "Welcome to our institution. For clients who have not yet established a credit history, I would recommend considering a secured credit card. This product requires a refundable security deposit, which serves as your credit limit. It is an excellent vehicle for building a positive credit history.",
            },
          },
          {
            speaker: "you",
            textEn: "How much is the deposit for a secured card? And is there an annual fee?",
            textZh: "担保卡的押金是多少？有年费吗？",
            culturalNote: "美国很多信用卡有年费（annual fee），从0到几百美元不等。新手卡和担保卡通常没有或很低。高端卡年费高但福利多。",
            casualVersion: "How much do I need to put down? And does it have an annual fee?",
            commonMistake: {
              wrong: "How much deposit and year fee?",
              correct: "How much is the deposit? And is there an annual fee?",
              explanation: "annual fee 不能说 year fee，deposit 前不需要加 the 在问句中。",
            },
            formalityVariants: {
              casual: "How much is the deposit? Any annual fee?",
              standard: "How much is the deposit for a secured card? And is there an annual fee?",
              formal: "May I ask what the required security deposit amount is for the secured card? Additionally, does the card carry an annual fee?",
            },
          },
          {
            speaker: "them",
            role: "银行信用卡顾问",
            textEn: "The minimum deposit is $200, which gives you a $200 credit limit. No annual fee on our secured card. And the APR is 22.99% — but if you pay your balance in full each month, you won't pay any interest.",
            textZh: "最低押金200美元，也就是200美元的信用额度。我们的担保卡没有年费。年利率是22.99%——但如果每月全额还款，就不用付利息。",
            keyPhrases: [
              { en: "APR", zh: "年利率" },
              { en: "pay your balance in full", zh: "全额还款" },
            ],
            alternativeExpressions: [
              {
                textEn: "Two hundred dollars gets you started with a two hundred dollar limit. No annual fee. Interest rate is about 23%, but honestly, just pay it off every month and you'll never see that charge.",
                textZh: "两百美元起步，额度也是两百。没年费。利率大约23%，不过说实话，每月还清就不用管利率了。",
                actionHint: "记住每月全额还款是关键",
                frequency: "common",
              },
            ],
            casualVersion: "Two hundred bucks gets you a $200 limit. No annual fee. Interest is about 23%, but just pay it all off every month and you won't get charged interest.",
            formalityVariants: {
              casual: "Two hundred deposit, two hundred limit. No annual fee. APR's about 23%, but pay it off monthly and you're good.",
              standard: "The minimum deposit is $200, which gives you a $200 credit limit. No annual fee on our secured card. And the APR is 22.99% — but if you pay your balance in full each month, you won't pay any interest.",
              formal: "The minimum security deposit is $200, which establishes a corresponding credit limit of $200. Our secured card carries no annual fee. The annual percentage rate is 22.99%; however, should you settle your balance in full each billing cycle, no interest charges will be incurred.",
            },
          },
          {
            speaker: "you",
            textEn: "That sounds reasonable. How long does it take to build enough credit to qualify for a regular credit card?",
            textZh: "听起来挺合理的。需要多长时间才能积累足够的信用申请普通信用卡？",
            culturalNote: "在美国建立信用通常需要6-12个月的良好使用记录。按时还款、保持低使用率（建议低于30%）是提高信用分的关键。",
            casualVersion: "Cool. How long before I can get a real credit card?",
            commonMistake: {
              wrong: "How long to have enough credit for normal card?",
              correct: "How long does it take to build enough credit to qualify for a regular credit card?",
              explanation: "build credit 是固定搭配，qualify for 表示满足申请条件，regular 比 normal 更自然。",
            },
            formalityVariants: {
              casual: "Nice. How long till I can upgrade to a regular card?",
              standard: "That sounds reasonable. How long does it take to build enough credit to qualify for a regular credit card?",
              formal: "That appears to be a reasonable arrangement. Approximately how long would it take to establish sufficient credit history to qualify for an unsecured credit card?",
            },
          },
          {
            speaker: "them",
            role: "银行信用卡顾问",
            textEn: "Typically six months to a year of on-time payments. We'll review your account automatically and let you know when you're eligible to upgrade. At that point, you'll get your deposit back too.",
            textZh: "通常按时还款六个月到一年。我们会自动审核您的账户，并在您符合升级条件时通知您。届时，您的押金也会退还。",
            keyPhrases: [
              { en: "on-time payments", zh: "按时还款" },
              { en: "eligible to upgrade", zh: "符合升级条件" },
            ],
            alternativeExpressions: [
              {
                textEn: "About six months to a year if you always pay on time. We check automatically and when you qualify, we'll upgrade you and refund your deposit.",
                textZh: "如果一直按时还款，大约六个月到一年。我们自动审查，达标了就给你升级，押金也退给你。",
                actionHint: "坚持按时还款，等待自动升级通知",
                frequency: "common",
              },
            ],
            casualVersion: "About six months to a year. Just pay on time every month. We'll check your account and upgrade you automatically. You'll get your deposit back then too.",
            formalityVariants: {
              casual: "Six months to a year. Pay on time and we'll auto-upgrade you. Deposit comes back too.",
              standard: "Typically six months to a year of on-time payments. We'll review your account automatically and let you know when you're eligible to upgrade. At that point, you'll get your deposit back too.",
              formal: "The typical timeline is approximately six months to one year of consistent, on-time payments. Our system conducts periodic automatic reviews of your account, and we will notify you when you become eligible for an upgrade to an unsecured product. Upon such transition, your security deposit will be refunded in full.",
            },
          },
        ],
      },
      {
        id: "credit-card-intermediate",
        titleZh: "比较信用卡奖励计划",
        titleEn: "Comparing Rewards Programs",
        description: "已有信用记录后，选择有奖励的信用卡",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I've had my secured card for a year now and my credit score is 720. I'd like to apply for a rewards credit card. What do you recommend?",
            textZh: "我的担保卡已经用了一年，信用分720了。我想申请一张有奖励的信用卡。你推荐哪张？",
            culturalNote: "720分在美国算是不错的信用分（good credit），可以申请大部分中高端信用卡了。美国的信用卡奖励非常丰富，是很多人日常消费的重要考虑因素。",
            casualVersion: "My credit score's 720 now. Ready for a rewards card. What's good?",
            commonMistake: {
              wrong: "I want to apply a reward card.",
              correct: "I'd like to apply for a rewards credit card.",
              explanation: "apply for 是固定搭配，不能省略 for。rewards 用复数形式。",
            },
            formalityVariants: {
              casual: "Score's at 720. What rewards cards can I get?",
              standard: "I've had my secured card for a year now and my credit score is 720. I'd like to apply for a rewards credit card. What do you recommend?",
              formal: "Having maintained my secured card for one year, my credit score has reached 720. I would now like to explore rewards credit card options. Could you provide your recommendations?",
            },
          },
          {
            speaker: "them",
            role: "银行信用卡顾问",
            textEn: "Great score! We have two popular options. Our cashback card gives you 2% back on all purchases with no annual fee. Our travel card earns 3x points on dining and travel, but has a $95 annual fee. Which spending category matters most to you?",
            textZh: "分数不错！我们有两个热门选择。返现卡所有消费返2%，无年费。旅行卡在餐饮和旅行消费赚3倍积分，但有95美元年费。您最看重哪个消费类别？",
            keyPhrases: [
              { en: "cashback", zh: "返现/现金回馈" },
              { en: "annual fee", zh: "年费" },
            ],
            alternativeExpressions: [
              {
                textEn: "Nice! So we've got a simple 2% cashback card, no fee. Or if you travel and eat out a lot, our travel card does 3x points on those, but it's ninety-five bucks a year. What do you spend the most on?",
                textZh: "不错！我们有个简单的2%返现卡，免费。或者如果你经常旅行和外出吃饭，旅行卡这些消费3倍积分，但一年九十五。你平时花钱最多的是什么？",
                actionHint: "想想自己的消费习惯再选",
                frequency: "common",
              },
            ],
            casualVersion: "Awesome score! We've got a 2% cashback card, no annual fee. Or a travel card with 3x on food and travel for ninety-five bucks a year. What do you spend the most on?",
            formalityVariants: {
              casual: "Nice! Got a 2% cashback with no fee, or a travel card — 3x on dining and travel, ninety-five a year. What do you spend most on?",
              standard: "Great score! We have two popular options. Our cashback card gives you 2% back on all purchases with no annual fee. Our travel card earns 3x points on dining and travel, but has a $95 annual fee. Which spending category matters most to you?",
              formal: "That is an excellent credit score. We offer two distinguished options. Our cashback card provides a 2% return on all purchases with no annual fee. Alternatively, our travel rewards card offers triple points on dining and travel expenditures, accompanied by a $95 annual fee. May I inquire which spending categories are most relevant to your lifestyle?",
            },
          },
          {
            speaker: "you",
            textEn: "I eat out a lot and travel back to China once a year. Does the travel card have any foreign transaction fees?",
            textZh: "我经常在外面吃饭，每年回中国一次。旅行卡有境外交易手续费吗？",
            culturalNote: "很多美国高端旅行信用卡免境外交易费（no foreign transaction fee），这对经常出国的人很有价值。普通卡通常收取3%的境外交易费。",
            casualVersion: "I eat out a ton and go back to China once a year. Does the travel card charge extra for overseas purchases?",
            commonMistake: {
              wrong: "Does it have abroad fee?",
              correct: "Does it have any foreign transaction fees?",
              explanation: "foreign transaction fee 是专业术语，不能说 abroad fee。",
            },
            formalityVariants: {
              casual: "I eat out a lot and fly to China once a year. Any foreign transaction fees on the travel card?",
              standard: "I eat out a lot and travel back to China once a year. Does the travel card have any foreign transaction fees?",
              formal: "I dine out frequently and travel to China annually. Could you confirm whether the travel rewards card carries any foreign transaction fees?",
            },
          },
          {
            speaker: "them",
            role: "银行信用卡顾问",
            textEn: "No foreign transaction fees on the travel card — that's one of its big perks. It also comes with a 50,000-point sign-up bonus if you spend $3,000 in the first three months. Those points are worth about $500 in travel.",
            textZh: "旅行卡没有境外交易费——这是它的一大优势。而且如果您在前三个月消费3000美元，还有5万积分的开卡奖励。这些积分大约价值500美元的旅行。",
            keyPhrases: [
              { en: "sign-up bonus", zh: "开卡奖励" },
              { en: "no foreign transaction fees", zh: "无境外交易费" },
            ],
            alternativeExpressions: [
              {
                textEn: "Zero foreign transaction fees — huge plus for international travel. Plus there's a sign-up bonus: spend three grand in three months and get fifty thousand points, which is basically five hundred dollars toward flights or hotels.",
                textZh: "零境外交易费——对国际旅行超值。还有开卡奖励：三个月花三千拿五万积分，基本等于五百块机票或酒店。",
                actionHint: "计算自己是否能在三个月内自然消费3000美元",
                frequency: "common",
              },
            ],
            casualVersion: "No foreign fees — that's the big selling point. Plus, spend three grand in the first three months and you get a 50K point bonus. That's like five hundred bucks in travel.",
            formalityVariants: {
              casual: "No foreign fees at all. And there's a fifty-K point bonus if you hit three grand in three months. That's like five hundred in travel.",
              standard: "No foreign transaction fees on the travel card — that's one of its big perks. It also comes with a 50,000-point sign-up bonus if you spend $3,000 in the first three months. Those points are worth about $500 in travel.",
              formal: "The travel card carries no foreign transaction fees whatsoever — a significant advantage for international travelers. Furthermore, there is a generous introductory offer of 50,000 bonus points upon meeting a spending threshold of $3,000 within the first three months of account opening. Those points have an approximate redemption value of $500 toward travel-related expenses.",
            },
          },
          {
            speaker: "you",
            textEn: "That sign-up bonus is tempting. What's the APR on the travel card? I usually pay in full but just in case.",
            textZh: "开卡奖励很吸引人。旅行卡的年利率是多少？我一般都全额还款，但以防万一。",
            culturalNote: "美国信用卡的 APR 通常在15-25%之间，远高于中国。只要每月全额还款就不用付利息。了解 APR 是负责任用卡的标志。",
            casualVersion: "That bonus sounds great. What's the interest rate? I always pay in full, just wanna know.",
            commonMistake: {
              wrong: "What's the interest of this card?",
              correct: "What's the APR on this card?",
              explanation: "信用卡利率用 APR（Annual Percentage Rate）这个缩写，不说 the interest of。",
            },
            formalityVariants: {
              casual: "Love that bonus. What's the APR? I pay everything off, but just curious.",
              standard: "That sign-up bonus is tempting. What's the APR on the travel card? I usually pay in full but just in case.",
              formal: "The sign-up bonus is quite attractive. For due diligence purposes, could you inform me of the annual percentage rate on the travel card? I typically settle my balance in full each month, but I would like to be fully informed.",
            },
          },
          {
            speaker: "them",
            role: "银行信用卡顾问",
            textEn: "The APR ranges from 18.99% to 25.99% depending on your creditworthiness. With your 720 score, you'd likely get the lower end. But like you said, if you pay in full, the APR doesn't really matter. Shall I start the application?",
            textZh: "年利率根据信用资质在18.99%到25.99%之间浮动。以您720的信用分，很可能拿到较低的利率。但就像您说的，全额还款的话年利率其实不重要。要我帮您开始申请吗？",
            keyPhrases: [
              { en: "creditworthiness", zh: "信用资质" },
              { en: "the lower end", zh: "较低的一端" },
            ],
            alternativeExpressions: [
              {
                textEn: "It's between about 19% and 26%, based on your credit. At 720, you're probably looking at the low end. But yeah, pay it off and it's a non-issue. Want me to get you started?",
                textZh: "大约在19%到26%之间，看你的信用情况。720的话，你可能拿到低端利率。不过嘛，全额还款就无所谓了。要我帮你开始吗？",
                actionHint: "确认申请，准备好个人信息",
                frequency: "common",
              },
            ],
            casualVersion: "Between about 19% and 26%. With your score, you'll probably get the low end. But yeah, pay in full and it doesn't matter. Wanna apply?",
            formalityVariants: {
              casual: "Somewhere between 19 and 26 percent. You'll probably get the good end. But if you pay it off, who cares, right? Ready to apply?",
              standard: "The APR ranges from 18.99% to 25.99% depending on your creditworthiness. With your 720 score, you'd likely get the lower end. But like you said, if you pay in full, the APR doesn't really matter. Shall I start the application?",
              formal: "The annual percentage rate ranges from 18.99% to 25.99%, determined by the applicant's creditworthiness assessment. Given your credit score of 720, you would very likely qualify for a rate at the lower end of that spectrum. However, as you astutely noted, if you consistently pay your balance in full, the APR becomes largely inconsequential. Shall I proceed with initiating the application on your behalf?",
            },
          },
        ],
      },
    ],
  },
  // ==================== 争议扣款 ====================
  {
    id: "banking-dispute-charge",
    tags: ["dispute", "charge", "争议", "扣款", "refund"],
    category: "banking",
    titleZh: "争议扣款",
    titleEn: "Disputing a Charge",
    description: "发现银行账单上有不明扣款，联系银行发起争议流程",
    otherRole: "银行客服代表",
    otherRoleIcon: "🏦",
    flows: [
      {
        id: "dispute-charge-basic",
        titleZh: "发现不明扣款",
        titleEn: "Reporting an Unknown Charge",
        description: "在账单上发现不认识的扣款并联系银行",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I noticed a charge on my account that I don't recognize. It's for $49.99 from a company called 'DGT Services.' I didn't make this purchase.",
            textZh: "你好，我发现账户上有一笔我不认识的扣款。是一家叫'DGT Services'的公司扣了49.99美元。我没有进行过这笔消费。",
            culturalNote: "在美国，消费者有权在60天内对信用卡上不明扣款提出争议（dispute）。银行会展开调查，期间通常会先将款项退还给你。",
            casualVersion: "Hey, there's a charge on my account I don't recognize — forty-nine ninety-nine from some company called DGT Services. I definitely didn't buy anything from them.",
            commonMistake: {
              wrong: "I have a strange money taken from my account.",
              correct: "I noticed a charge on my account that I don't recognize.",
              explanation: "用 charge 表示扣款，recognize 表示认出/认识，这是银行场景的标准表达。",
            },
            formalityVariants: {
              casual: "Hey, got a weird charge — forty-nine ninety-nine from DGT Services. No idea what that is.",
              standard: "Hi, I noticed a charge on my account that I don't recognize. It's for $49.99 from a company called 'DGT Services.' I didn't make this purchase.",
              formal: "Good morning. I am contacting you regarding an unrecognized charge on my account in the amount of $49.99 from an entity identified as 'DGT Services.' I have no record of authorizing this transaction.",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "I'm sorry to hear that. Let me pull up your account. I can see the charge from DGT Services posted on April 10th. Would you like to file a dispute?",
            textZh: "很抱歉听到这个情况。让我调出您的账户。我看到DGT Services的扣款是4月10日入账的。您要提交争议吗？",
            keyPhrases: [
              { en: "file a dispute", zh: "提交争议" },
              { en: "posted on", zh: "入账于" },
            ],
            alternativeExpressions: [
              {
                textEn: "That's concerning. Let me look into your account real quick. Okay, I see the charge — April 10th, $49.99. Want me to open a dispute for you?",
                textZh: "这确实令人担忧。让我快速查看您的账户。好的，我看到了——4月10日，49.99美元。要我帮您开一个争议吗？",
                actionHint: "确认要发起争议",
                frequency: "common",
              },
            ],
            casualVersion: "Oh no, let me check. Yeah, I see it — April 10th, forty-nine ninety-nine. Wanna dispute it?",
            formalityVariants: {
              casual: "Let me check. Yep, I see it — April 10th. Want me to dispute it for you?",
              standard: "I'm sorry to hear that. Let me pull up your account. I can see the charge from DGT Services posted on April 10th. Would you like to file a dispute?",
              formal: "I sincerely apologize for this inconvenience. Allow me to access your account details. I can confirm that a charge from DGT Services was posted on April 10th. Would you like to proceed with filing a formal dispute?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please. I've never heard of that company. How long does the dispute process take?",
            textZh: "是的，麻烦了。我从没听说过这家公司。争议处理需要多长时间？",
            culturalNote: "美国银行的争议流程通常在10个工作日内给出临时退款（provisional credit），完整调查可能需要30-90天。",
            casualVersion: "Yeah, go ahead. Never heard of them. How long's this gonna take?",
            commonMistake: {
              wrong: "How long the dispute will cost?",
              correct: "How long does the dispute process take?",
              explanation: "用 take 而不是 cost 来表示时间花费，cost 用于金钱。",
            },
            formalityVariants: {
              casual: "Yeah, do it. Never heard of them. How long will it take?",
              standard: "Yes, please. I've never heard of that company. How long does the dispute process take?",
              formal: "Yes, I would like to proceed. I have no knowledge of this company whatsoever. Could you inform me of the expected timeline for the dispute resolution process?",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "We'll issue a provisional credit to your account within two business days while we investigate. The full investigation can take up to 45 days, but most cases are resolved within two weeks.",
            textZh: "我们会在两个工作日内向您的账户发放临时退款，同时进行调查。完整调查最多需要45天，但大多数案例两周内就能解决。",
            keyPhrases: [
              { en: "provisional credit", zh: "临时退款" },
              { en: "business days", zh: "工作日" },
            ],
            alternativeExpressions: [
              {
                textEn: "You'll get the money back temporarily in a couple of business days. The investigation takes up to 45 days, but honestly most of these get sorted out in about two weeks.",
                textZh: "你会在几个工作日内临时拿回这笔钱。调查最多45天，但说实话大部分两周左右就解决了。",
                actionHint: "留意临时退款是否到账",
                frequency: "common",
              },
            ],
            casualVersion: "You'll get the money back temporarily in a day or two. Full investigation could take up to 45 days, but most are done in about two weeks.",
            formalityVariants: {
              casual: "You'll get the cash back in a day or two while we look into it. Usually takes a couple weeks to sort out.",
              standard: "We'll issue a provisional credit to your account within two business days while we investigate. The full investigation can take up to 45 days, but most cases are resolved within two weeks.",
              formal: "A provisional credit will be applied to your account within two business days pending investigation. The comprehensive investigation may require up to 45 days; however, the majority of cases reach resolution within approximately two weeks.",
            },
          },
          {
            speaker: "you",
            textEn: "Should I cancel my debit card in case it's been compromised?",
            textZh: "我需要取消我的借记卡吗？以防卡信息被盗。",
            culturalNote: "如果是借记卡上的不明扣款，银行通常会建议换卡。信用卡争议的消费者保护比借记卡更强，这也是很多美国人日常消费偏好用信用卡的原因。",
            casualVersion: "Should I cancel my card? Like, what if someone has my info?",
            commonMistake: {
              wrong: "Should I close my card to be safe?",
              correct: "Should I cancel my debit card in case it's been compromised?",
              explanation: "cancel 比 close 更适合卡片，compromised 是'信息泄露/被盗'的标准表达。",
            },
            formalityVariants: {
              casual: "Should I just cancel my card? Someone might have my number.",
              standard: "Should I cancel my debit card in case it's been compromised?",
              formal: "Would you recommend canceling my current debit card as a precautionary measure in the event that my card information has been compromised?",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "That's a smart idea. I can cancel your current card and issue a new one right now. The new card will arrive in five to seven business days. Your account number stays the same — only the card number changes.",
            textZh: "这是个明智的想法。我现在就可以取消您当前的卡并给您发一张新的。新卡五到七个工作日内寄到。账户号码不变——只有卡号会变。",
            keyPhrases: [
              { en: "issue a new one", zh: "发一张新卡" },
              { en: "your account number stays the same", zh: "账户号码不变" },
            ],
            alternativeExpressions: [
              {
                textEn: "Good call. I'll cancel this card and order you a new one. Should be at your door in about a week. Same account, just a new card number.",
                textZh: "好主意。我帮你取消这张卡，给你订一张新的。大约一周到。同一个账户，只是卡号换了。",
                actionHint: "更新所有绑定了旧卡号的自动扣款",
                frequency: "common",
              },
            ],
            casualVersion: "Good thinking. I'll kill this card and send you a new one. About a week to get it. Same account, new card number.",
            formalityVariants: {
              casual: "Smart move. I'll cancel it now and order a new one. Should get it in about a week. Same account, just new card number.",
              standard: "That's a smart idea. I can cancel your current card and issue a new one right now. The new card will arrive in five to seven business days. Your account number stays the same — only the card number changes.",
              formal: "That would indeed be a prudent measure. I shall cancel your current card and initiate the issuance of a replacement immediately. The new card should arrive within five to seven business days. Please note that your account number will remain unchanged — only the card number will be updated.",
            },
          },
        ],
      },
      {
        id: "dispute-charge-intermediate",
        titleZh: "争议被拒后申诉",
        titleEn: "Appealing a Denied Dispute",
        description: "争议被银行驳回后提供证据重新申诉",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I received a letter saying my dispute was denied. But I have proof I wasn't even in the country when that charge was made. Can I appeal?",
            textZh: "我收到信说我的争议被驳回了。但我有证据证明那笔扣款发生时我根本不在美国。我可以申诉吗？",
            culturalNote: "争议被驳回后，消费者仍有权提交额外证据进行申诉。保留旅行记录、登机牌、护照盖章等证据在这种情况下非常有用。",
            casualVersion: "So my dispute got denied, but I wasn't even in the country when that charge happened. I've got proof. Can I fight it?",
            commonMistake: {
              wrong: "My dispute was rejected. I want to argue again.",
              correct: "My dispute was denied. I'd like to appeal.",
              explanation: "用 denied 而不是 rejected，appeal 是正式申诉的标准用词，比 argue 更恰当。",
            },
            formalityVariants: {
              casual: "They denied my dispute but I was literally overseas. I've got proof. Can I appeal?",
              standard: "I received a letter saying my dispute was denied. But I have proof I wasn't even in the country when that charge was made. Can I appeal?",
              formal: "I have received notification that my dispute has been denied. However, I possess documentation proving that I was outside the country at the time the charge was incurred. I would like to inquire about the formal appeals process.",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "Absolutely, you can reopen the dispute with additional evidence. If you have travel documents — passport stamps, boarding passes, hotel receipts — those would strongly support your case.",
            textZh: "当然可以，您可以提供额外证据重新开启争议。如果您有旅行文件——护照盖章、登机牌、酒店收据——这些都能有力支持您的案例。",
            keyPhrases: [
              { en: "reopen the dispute", zh: "重新开启争议" },
              { en: "additional evidence", zh: "额外证据" },
            ],
            alternativeExpressions: [
              {
                textEn: "For sure. We can reopen your case if you've got more evidence. Passport stamps, boarding passes, hotel bookings — anything that proves you were out of the country would be really helpful.",
                textZh: "当然可以。如果你有更多证据，我们可以重新开你的案例。护照章、登机牌、酒店预订——任何能证明你在国外的东西都很有帮助。",
                actionHint: "收集并整理所有旅行证据",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah, totally. Just bring in some proof you were overseas — passport stamps, boarding passes, whatever. We can reopen it.",
            formalityVariants: {
              casual: "Oh for sure, we can reopen it. Got any travel proof? Passport stamps, boarding passes, that kinda stuff?",
              standard: "Absolutely, you can reopen the dispute with additional evidence. If you have travel documents — passport stamps, boarding passes, hotel receipts — those would strongly support your case.",
              formal: "Certainly, you are entitled to reopen the dispute upon submission of supplementary evidence. Documentation such as passport stamps, boarding passes, and hotel receipts would substantially strengthen your case.",
            },
          },
          {
            speaker: "you",
            textEn: "I have my boarding passes and passport stamps. Can I upload them through online banking, or do I need to bring them to a branch?",
            textZh: "我有登机牌和护照盖章。我可以通过网上银行上传吗，还是需要去网点交？",
            culturalNote: "大部分美国银行现在支持通过网银或App上传争议证据，不需要亲自跑网点。但复杂案例去分行当面沟通可能更有效。",
            casualVersion: "I've got boarding passes and passport stamps. Can I just upload them online or do I have to go to a branch?",
            commonMistake: {
              wrong: "Can I upload in the internet bank?",
              correct: "Can I upload them through online banking?",
              explanation: "说 through online banking，不说 in the internet bank。",
            },
            formalityVariants: {
              casual: "Got my boarding passes and stamps. Can I upload them online or do I gotta go in?",
              standard: "I have my boarding passes and passport stamps. Can I upload them through online banking, or do I need to bring them to a branch?",
              formal: "I have retained my boarding passes and passport stamps. Could you advise whether these documents may be submitted through the online banking portal, or whether an in-person visit to a branch is required?",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "You can upload them directly through our mobile app under 'Dispute Center.' Just take clear photos and attach them to your case. You'll get a confirmation email once we receive them.",
            textZh: "您可以通过手机App的'争议中心'直接上传。拍清楚照片，附加到您的案例里。我们收到后会给您发确认邮件。",
            keyPhrases: [
              { en: "Dispute Center", zh: "争议中心" },
              { en: "confirmation email", zh: "确认邮件" },
            ],
            alternativeExpressions: [
              {
                textEn: "Easiest way is through the app. Go to Dispute Center, find your case, and upload photos of your documents. We'll send you an email confirming we got everything.",
                textZh: "最简单的方式是用App。去争议中心，找到你的案例，上传文件照片。我们收到后会发邮件确认。",
                actionHint: "确保照片清晰完整",
                frequency: "common",
              },
            ],
            casualVersion: "Just use the app — go to Dispute Center, snap some photos, and upload. We'll email you once we get them.",
            formalityVariants: {
              casual: "Use the app. Dispute Center, upload photos, done. We'll email you when we get them.",
              standard: "You can upload them directly through our mobile app under 'Dispute Center.' Just take clear photos and attach them to your case. You'll get a confirmation email once we receive them.",
              formal: "You may submit the documentation directly through our mobile application. Please navigate to the 'Dispute Center' section, capture clear photographs of your evidence, and attach them to your existing case file. A confirmation email will be sent upon receipt of your submission.",
            },
          },
          {
            speaker: "you",
            textEn: "How long will the appeal take? And will I get a provisional credit this time while they review?",
            textZh: "申诉需要多长时间？这次审核期间会有临时退款吗？",
            culturalNote: "根据Regulation E（借记卡）和Regulation Z（信用卡），银行在收到争议后通常必须在10个工作日内提供临时退款。",
            casualVersion: "How long for the appeal? And do I get my money back temporarily while they look at it?",
            commonMistake: {
              wrong: "Will I get temporary money back?",
              correct: "Will I get a provisional credit this time?",
              explanation: "provisional credit 是银行争议场景的专业术语，比 temporary money back 更准确。",
            },
            formalityVariants: {
              casual: "How long's the appeal gonna take? Will they give me a provisional credit while they check?",
              standard: "How long will the appeal take? And will I get a provisional credit this time while they review?",
              formal: "What is the anticipated timeline for the appeal review? Additionally, will a provisional credit be issued to my account during the review period?",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "With the strong evidence you have, the appeal usually takes about ten business days. And yes, we'll issue a provisional credit within 48 hours once the appeal is filed. I'll note in the case that you have travel documentation proving you were abroad.",
            textZh: "以您这样有力的证据，申诉通常大约十个工作日。是的，一旦提交申诉，我们会在48小时内发放临时退款。我会在案例中备注您有证明您在国外的旅行文件。",
            keyPhrases: [
              { en: "appeal is filed", zh: "提交申诉" },
              { en: "note in the case", zh: "在案例中备注" },
            ],
            alternativeExpressions: [
              {
                textEn: "Your evidence is solid, so this should take about ten business days. We'll put the money back in your account within 48 hours of filing. I'm adding a note that you have proof of being overseas.",
                textZh: "你的证据很充分，所以大约十个工作日。提交后48小时内钱会回到你账户。我在备注里写上你有出国的证明。",
                actionHint: "跟进申诉结果",
                frequency: "common",
              },
            ],
            casualVersion: "Your proof is solid, so about ten business days. You'll get a provisional credit within 48 hours once we file. I'm noting that you were out of the country.",
            formalityVariants: {
              casual: "With that proof, about ten days. Money goes back in your account within 48 hours. I'll note you were overseas.",
              standard: "With the strong evidence you have, the appeal usually takes about ten business days. And yes, we'll issue a provisional credit within 48 hours once the appeal is filed. I'll note in the case that you have travel documentation proving you were abroad.",
              formal: "Given the compelling nature of your evidence, the appeal process is anticipated to conclude within approximately ten business days. A provisional credit will be issued to your account within 48 hours of the appeal filing. I shall annotate the case file to reflect that you possess travel documentation corroborating your absence from the country during the transaction date.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 手机存支票 ====================
  {
    id: "banking-mobile-deposit",
    tags: ["mobile deposit", "check", "手机存款", "支票", "deposit"],
    category: "banking",
    titleZh: "手机存支票",
    titleEn: "Mobile Check Deposit",
    description: "通过手机银行App拍照存入纸质支票",
    otherRole: "银行客服代表",
    otherRoleIcon: "🏦",
    flows: [
      {
        id: "mobile-deposit-basic",
        titleZh: "首次手机存支票",
        titleEn: "First Mobile Deposit",
        description: "第一次使用手机App存入支票",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I received a check and I'd like to deposit it using my phone. I've never done a mobile deposit before. Can you walk me through it?",
            textZh: "你好，我收到一张支票想用手机存入。我从来没用过手机存款。你能教我怎么操作吗？",
            culturalNote: "纸质支票在美国仍然非常常见，尤其是退税、房租押金退还、个人赠礼等场景。手机存款（mobile deposit）已经是主流方式，大部分人不再跑银行柜台。",
            casualVersion: "Hey, I got a check and want to deposit it with my phone. Never done it before — can you help me out?",
            commonMistake: {
              wrong: "I want to save a check with my phone.",
              correct: "I'd like to deposit a check using my phone.",
              explanation: "deposit 是存款的正确动词，不用 save。save 是储蓄/存钱的意思。",
            },
            formalityVariants: {
              casual: "Got a check. How do I deposit it on my phone? Never done it.",
              standard: "Hi, I received a check and I'd like to deposit it using my phone. I've never done a mobile deposit before. Can you walk me through it?",
              formal: "Good afternoon. I have received a check that I would like to deposit via the mobile banking application. As I have not previously utilized the mobile deposit feature, could you please guide me through the process?",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "Of course! First, make sure you endorse the check — sign the back and write 'For mobile deposit only.' Then open our app, tap 'Deposit,' and take a photo of the front and back.",
            textZh: "当然！首先，确保在支票背面签名并写上'For mobile deposit only'。然后打开我们的App，点'存款'，拍下支票正反面的照片。",
            keyPhrases: [
              { en: "endorse the check", zh: "在支票背面签名背书" },
              { en: "For mobile deposit only", zh: "仅限手机存款" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure thing! Step one: flip the check over, sign it, and write 'For mobile deposit only' underneath. Then in the app, hit Deposit and snap a pic of both sides.",
                textZh: "没问题！第一步：把支票翻过来，签名，下面写'For mobile deposit only'。然后在App里点存款，拍两面照片。",
                actionHint: "背书时字迹要清晰",
                frequency: "common",
              },
            ],
            casualVersion: "Sure! Sign the back of the check and write 'For mobile deposit only.' Then just open the app, tap Deposit, and take pics of both sides.",
            formalityVariants: {
              casual: "Easy! Sign the back, write 'For mobile deposit only,' open the app, and snap photos of both sides.",
              standard: "Of course! First, make sure you endorse the check — sign the back and write 'For mobile deposit only.' Then open our app, tap 'Deposit,' and take a photo of the front and back.",
              formal: "Certainly. To begin, please endorse the check by signing the reverse side and inscribing 'For mobile deposit only' beneath your signature. Subsequently, open our mobile banking application, select the 'Deposit' function, and capture photographs of both the front and reverse sides of the check.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. How long until the funds are available in my account?",
            textZh: "明白了。资金多久能到账？",
            culturalNote: "手机存款的到账时间取决于金额和账户历史。小额支票通常次日到账，大额支票可能需要2-5个工作日。银行可能先释放一部分金额。",
            casualVersion: "Okay, when will the money show up in my account?",
            commonMistake: {
              wrong: "When can I use the money?",
              correct: "How long until the funds are available?",
              explanation: "funds are available 是银行标准表达，比 use the money 更准确。",
            },
            formalityVariants: {
              casual: "Cool. When do I get the money?",
              standard: "Got it. How long until the funds are available in my account?",
              formal: "Understood. Could you advise on the timeframe for the deposited funds to become available in my account?",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "For most checks, the first $225 is available the next business day, and the rest clears within two business days. If it's a large check, it might take up to five days for the full amount.",
            textZh: "大部分支票，前225美元下一个工作日就能到账，剩余金额两个工作日内到。如果是大额支票，全额到账可能需要五天。",
            keyPhrases: [
              { en: "clears", zh: "清算/到账" },
              { en: "next business day", zh: "下一个工作日" },
            ],
            alternativeExpressions: [
              {
                textEn: "Usually the first two-twenty-five is available the next day. The rest usually takes a couple of business days. Big checks might take up to five days.",
                textZh: "一般前两百二十五第二天到。剩下的几个工作日。大额支票可能要五天。",
                actionHint: "大额支票提前规划用款时间",
                frequency: "common",
              },
            ],
            casualVersion: "First two-twenty-five is there next day. Rest usually takes a couple days. Big checks might be up to five days.",
            formalityVariants: {
              casual: "First $225 shows up next day. Rest in a couple days. Big checks could take up to five.",
              standard: "For most checks, the first $225 is available the next business day, and the rest clears within two business days. If it's a large check, it might take up to five days for the full amount.",
              formal: "For standard deposits, the initial $225 will be made available on the following business day, with the remaining balance clearing within two business days. For checks exceeding certain thresholds, the complete amount may require up to five business days to fully clear.",
            },
          },
          {
            speaker: "you",
            textEn: "What should I do with the paper check after I deposit it?",
            textZh: "存完之后纸质支票怎么处理？",
            culturalNote: "美国银行通常建议手机存款后保留支票14天，确认资金到账后再销毁。不要把同一张支票存两次，这可能构成欺诈。",
            casualVersion: "What do I do with the actual check after? Like, can I toss it?",
            commonMistake: {
              wrong: "Can I throw the check?",
              correct: "What should I do with the paper check after I deposit it?",
              explanation: "throw 需要加 away（throw away），但在银行语境中用 paper check 更清晰。",
            },
            formalityVariants: {
              casual: "Do I keep the check or can I just toss it?",
              standard: "What should I do with the paper check after I deposit it?",
              formal: "Once the mobile deposit has been completed, what would you recommend regarding the retention or disposal of the physical check?",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "Hold onto it for at least 14 days until the deposit is confirmed. After that, you can shred it. And please don't deposit the same check at a branch or ATM — that would cause a duplicate deposit.",
            textZh: "至少保留14天直到存款确认。之后可以碎掉。请不要再去柜台或ATM存同一张支票——那会造成重复存款。",
            keyPhrases: [
              { en: "hold onto it", zh: "保留它" },
              { en: "duplicate deposit", zh: "重复存款" },
            ],
            alternativeExpressions: [
              {
                textEn: "Keep it for two weeks just in case. Once the deposit clears, shred it or destroy it. Whatever you do, don't deposit the same check again at an ATM or branch — that counts as a duplicate.",
                textZh: "以防万一保留两周。到账后碎掉或销毁。千万不要再去ATM或柜台存同一张——那算重复存款。",
                actionHint: "标记支票已存入避免重复",
                frequency: "common",
              },
            ],
            casualVersion: "Keep it for about two weeks. Once it clears, shred it. And don't try depositing it again at an ATM — that'll flag your account.",
            formalityVariants: {
              casual: "Hang on to it for two weeks, then shred it. And don't deposit it again anywhere — that's a big no-no.",
              standard: "Hold onto it for at least 14 days until the deposit is confirmed. After that, you can shred it. And please don't deposit the same check at a branch or ATM — that would cause a duplicate deposit.",
              formal: "Please retain the physical check for a minimum of 14 days until the deposit has been fully confirmed. Subsequently, the check may be securely destroyed. I must advise against depositing the same check through any other channel, as this would constitute a duplicate deposit and may result in account complications.",
            },
          },
        ],
      },
      {
        id: "mobile-deposit-intermediate",
        titleZh: "手机存款问题排查",
        titleEn: "Troubleshooting Mobile Deposit",
        description: "手机存款遇到问题，联系银行解决",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I tried to do a mobile deposit but the app keeps saying 'image not readable.' I've taken the photo three times. What am I doing wrong?",
            textZh: "我试了手机存款但App一直说'图片无法识别'。我已经拍了三次照片了。我哪里做错了？",
            culturalNote: "手机存款拍照失败是常见问题。最常见的原因是光线不足、背景不够平坦、或者支票没有完全在取景框内。",
            casualVersion: "The app keeps rejecting my check photo — says it can't read it. I've tried like three times. What's going on?",
            commonMistake: {
              wrong: "The app says the photo cannot read.",
              correct: "The app says the image is not readable.",
              explanation: "image is not readable 是被动语态，photo cannot read 会变成'照片不能阅读'。",
            },
            formalityVariants: {
              casual: "The app keeps saying it can't read my check. I've tried a bunch of times. Help?",
              standard: "I tried to do a mobile deposit but the app keeps saying 'image not readable.' I've taken the photo three times. What am I doing wrong?",
              formal: "I have attempted to complete a mobile deposit; however, the application repeatedly displays an error indicating that the image is not readable. Despite multiple attempts, the issue persists. Could you please advise on what might be causing this?",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "That's a common issue. Make sure you're on a dark, flat surface with good lighting. Hold your phone directly over the check — no angles. And make sure the entire check is within the frame with a little space around the edges.",
            textZh: "这是常见问题。确保把支票放在深色平坦的桌面上，光线充足。手机直接在支票正上方——不要倾斜。确保整张支票在取景框内，边缘留一点空间。",
            keyPhrases: [
              { en: "directly over", zh: "正上方" },
              { en: "within the frame", zh: "在取景框内" },
            ],
            alternativeExpressions: [
              {
                textEn: "Happens all the time. Put the check on a dark table, make sure the light's good, hold the phone straight above it, and leave a little border around the edges in the photo.",
                textZh: "经常发生。把支票放在深色桌上，确保光线好，手机在正上方拍，照片里边缘留一点空间。",
                actionHint: "用深色桌面做背景，避免阴影",
                frequency: "common",
              },
            ],
            casualVersion: "Oh that happens a lot. Dark surface, good light, hold your phone straight over it. Make sure the whole check fits in the frame. Try again.",
            formalityVariants: {
              casual: "Classic issue. Dark surface, good light, phone straight over it, whole check in the frame. Give it another shot.",
              standard: "That's a common issue. Make sure you're on a dark, flat surface with good lighting. Hold your phone directly over the check — no angles. And make sure the entire check is within the frame with a little space around the edges.",
              formal: "This is a frequently encountered issue. Please ensure the check is placed on a dark, flat surface under adequate lighting conditions. Position your device directly above the check, maintaining a perpendicular angle. The entire check should be visible within the capture frame with a modest margin around all edges.",
            },
          },
          {
            speaker: "you",
            textEn: "Okay, that worked! But now it says my daily mobile deposit limit is $2,500 and my check is for $3,000. What are my options?",
            textZh: "好的，成功了！但现在说我每日手机存款限额是2500美元，而我的支票是3000美元。我该怎么办？",
            culturalNote: "美国银行对手机存款通常设有每日和每月限额，新账户限额可能更低。限额可以通过联系银行申请提高。",
            casualVersion: "It worked! But my check's three grand and the limit's twenty-five hundred. Now what?",
            commonMistake: {
              wrong: "My check is bigger than the limit amount.",
              correct: "My check exceeds the daily mobile deposit limit.",
              explanation: "exceeds 比 is bigger than 更专业，daily mobile deposit limit 是标准术语。",
            },
            formalityVariants: {
              casual: "Sweet, it worked! But the check's three K and the limit's twenty-five hundred. What do I do?",
              standard: "Okay, that worked! But now it says my daily mobile deposit limit is $2,500 and my check is for $3,000. What are my options?",
              formal: "The image capture was successful, thank you. However, I have encountered another issue: the check amount of $3,000 exceeds my daily mobile deposit limit of $2,500. What alternatives are available to me?",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "I can submit a request to increase your mobile deposit limit. In the meantime, you could deposit this check at an ATM or branch — there's no limit for in-person deposits. The limit increase usually takes 24 hours to process.",
            textZh: "我可以提交申请提高您的手机存款限额。同时，您可以去ATM或柜台存这张支票——柜台存款没有限额。限额提高通常24小时内处理完。",
            keyPhrases: [
              { en: "increase your limit", zh: "提高限额" },
              { en: "in-person deposits", zh: "柜台存款" },
            ],
            alternativeExpressions: [
              {
                textEn: "I'll put in a request to bump up your limit. But for this check, just take it to a branch or ATM — no limits there. The limit increase should go through in about a day.",
                textZh: "我帮你申请提高限额。但这张支票直接去柜台或ATM存就行——那边没限额。限额提高大约一天就能生效。",
                actionHint: "先去柜台存入，同时等待限额提高",
                frequency: "common",
              },
            ],
            casualVersion: "I'll request a higher limit for you. For now, just take the check to an ATM or branch — no cap on those. Limit bump takes about a day.",
            formalityVariants: {
              casual: "I'll bump your limit up. For now, just hit an ATM or branch for this one. No limit there. New limit's active in about a day.",
              standard: "I can submit a request to increase your mobile deposit limit. In the meantime, you could deposit this check at an ATM or branch — there's no limit for in-person deposits. The limit increase usually takes 24 hours to process.",
              formal: "I shall submit a request to increase your mobile deposit limit on your behalf. In the interim, you may deposit the check at an ATM or branch location, as in-person deposit transactions are not subject to such limitations. The limit increase is typically processed within 24 hours.",
            },
          },
          {
            speaker: "you",
            textEn: "If I deposit it at the ATM, will it clear faster than mobile deposit?",
            textZh: "如果去ATM存，会比手机存款到账更快吗？",
            culturalNote: "ATM存款和手机存款到账时间基本相同。但如果在银行营业时间内去柜台存，到账可能更快，因为柜员可以当场处理。",
            casualVersion: "Is the ATM faster than doing it on my phone?",
            commonMistake: {
              wrong: "Will ATM deposit arrive faster?",
              correct: "Will it clear faster if I deposit it at the ATM?",
              explanation: "clear 是支票到账/清算的标准用词，比 arrive 更合适。",
            },
            formalityVariants: {
              casual: "Is the ATM any faster for clearing?",
              standard: "If I deposit it at the ATM, will it clear faster than mobile deposit?",
              formal: "Would depositing the check at an ATM result in faster clearing times compared to a mobile deposit?",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "The clearing time is about the same — one to two business days. But if you come to a branch during banking hours, a teller can verify the check right away, which sometimes speeds things up. For a $3,000 check, I'd recommend the branch.",
            textZh: "到账时间差不多——一到两个工作日。但如果在营业时间来柜台，柜员可以当场验证支票，有时能加快处理。三千美元的支票，我建议去柜台。",
            keyPhrases: [
              { en: "clearing time", zh: "清算时间" },
              { en: "banking hours", zh: "银行营业时间" },
            ],
            alternativeExpressions: [
              {
                textEn: "Same clearing time, really — a day or two. But if you go to a branch while they're open, the teller can check it on the spot, which might speed things up. For three grand, I'd go to the branch.",
                textZh: "到账时间其实一样——一两天。但如果你在营业时间去柜台，柜员可以当场看，可能会快一些。三千块的话，建议去柜台。",
                actionHint: "带上身份证件去柜台存入",
                frequency: "common",
              },
            ],
            casualVersion: "About the same — a day or two either way. But a teller can verify it on the spot, which might help. For three K, I'd just go to a branch.",
            formalityVariants: {
              casual: "Same speed, pretty much. But a teller can verify it right there, so might go a bit faster. For three grand, just go in.",
              standard: "The clearing time is about the same — one to two business days. But if you come to a branch during banking hours, a teller can verify the check right away, which sometimes speeds things up. For a $3,000 check, I'd recommend the branch.",
              formal: "The clearing timeline is comparable — approximately one to two business days. However, should you visit a branch during banking hours, a teller can perform immediate verification of the check, which may expedite the clearing process. Given the check amount of $3,000, I would recommend utilizing our branch deposit services.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 了解信用分 ====================
  // ==================== 银行欺诈通知 ====================
  {
    id: "banking-fraud-alert",
    tags: ["fraud", "alert", "欺诈", "盗刷", "security"],
    category: "banking",
    titleZh: "银行欺诈通知",
    titleEn: "Bank Fraud Alert",
    description: "收到银行的可疑交易通知后处理欺诈问题",
    otherRole: "银行安全部门代表",
    otherRoleIcon: "🏦",
    flows: [
      {
        id: "fraud-alert-basic",
        titleZh: "确认可疑交易",
        titleEn: "Confirming Suspicious Activity",
        description: "收到银行短信提醒可疑交易并确认处理",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just got a text alert from the bank about a suspicious transaction. It says someone tried to use my card for $800 at an electronics store in Florida, but I'm in California.",
            textZh: "你好，我刚收到银行短信提醒有一笔可疑交易。说有人在佛罗里达的一家电子产品店试图用我的卡消费800美元，但我人在加州。",
            culturalNote: "美国银行的欺诈检测系统非常灵敏，经常通过短信或App推送实时通知可疑交易。收到通知后应立即回复或致电银行确认。",
            casualVersion: "Hey, I got a fraud alert — says someone used my card for 800 bucks in Florida. I'm in California right now. That's not me.",
            commonMistake: {
              wrong: "Someone used my card but it's not me who use it.",
              correct: "Someone tried to use my card, but that wasn't me.",
              explanation: "用 tried to use 表示尝试，that wasn't me 是确认不是本人的自然表达。",
            },
            formalityVariants: {
              casual: "Got a fraud text — eight hundred bucks at some electronics store in Florida. Definitely not me, I'm in Cali.",
              standard: "Hi, I just got a text alert from the bank about a suspicious transaction. It says someone tried to use my card for $800 at an electronics store in Florida, but I'm in California.",
              formal: "Good afternoon. I have received a text message alert regarding a suspicious transaction on my account. The notification indicates an attempted charge of $800 at an electronics retailer in Florida. I can confirm that I am currently located in California and did not authorize this transaction.",
            },
          },
          {
            speaker: "them",
            role: "银行安全部门代表",
            textEn: "Thank you for calling right away. I can see the attempted charge was blocked by our fraud detection system. For your security, I've temporarily frozen your card. Can you confirm the last legitimate transaction you made?",
            textZh: "感谢您立即来电。我看到这笔尝试消费已被我们的欺诈检测系统拦截。为了您的安全，我已临时冻结了您的卡。您能确认最后一笔是您本人的交易吗？",
            keyPhrases: [
              { en: "fraud detection system", zh: "欺诈检测系统" },
              { en: "temporarily frozen", zh: "临时冻结" },
            ],
            alternativeExpressions: [
              {
                textEn: "Good thing you called. We caught that charge and blocked it. I've put a freeze on your card for now. Can you tell me the last purchase you actually made?",
                textZh: "好在你及时打来了。我们发现并拦截了那笔交易。现在暂时冻结了你的卡。你能告诉我你最后一笔真实消费是什么吗？",
                actionHint: "回忆最近一笔消费以帮助银行核实",
                frequency: "common",
              },
            ],
            casualVersion: "Glad you called. We blocked it already and froze your card. What was the last thing you actually bought with it?",
            formalityVariants: {
              casual: "Good, you called fast. We blocked it and froze your card. What was your last real purchase?",
              standard: "Thank you for calling right away. I can see the attempted charge was blocked by our fraud detection system. For your security, I've temporarily frozen your card. Can you confirm the last legitimate transaction you made?",
              formal: "Thank you for contacting us promptly. I can confirm that the attempted charge was intercepted by our fraud detection system. As a precautionary measure, a temporary hold has been placed on your card. For verification purposes, could you please confirm the last legitimate transaction you authorized?",
            },
          },
          {
            speaker: "you",
            textEn: "My last purchase was $45 at a grocery store here in San Jose yesterday. Everything before that was normal too. How did someone get my card information?",
            textZh: "我最后一笔消费是昨天在圣何塞的一家超市花了45美元。之前的也都正常。有人怎么拿到我的卡信息的？",
            culturalNote: "卡信息被盗的常见途径包括：数据泄露（data breach）、ATM上的盗刷器（skimmer）、钓鱼网站（phishing）、或餐厅等场所的员工复制卡号。",
            casualVersion: "Last thing I bought was groceries for 45 bucks in San Jose yesterday. Everything else is fine. How'd they get my info?",
            commonMistake: {
              wrong: "How did they steal my card number?",
              correct: "How did someone get my card information?",
              explanation: "get my card information 比 steal my card number 更中性，在银行场景中更合适。",
            },
            formalityVariants: {
              casual: "Last buy was 45 bucks at the grocery store yesterday. All good before that. Any idea how they got my info?",
              standard: "My last purchase was $45 at a grocery store here in San Jose yesterday. Everything before that was normal too. How did someone get my card information?",
              formal: "My most recent transaction was a $45 purchase at a grocery establishment in San Jose yesterday. All prior transactions appear to be legitimate. Could you provide any insight into how my card information may have been compromised?",
            },
          },
          {
            speaker: "them",
            role: "银行安全部门代表",
            textEn: "It could be from a data breach at a retailer, or a card skimmer on an ATM. Unfortunately, it's hard to pinpoint exactly. The good news is you're not liable for any fraudulent charges. I'll cancel this card and send you a new one.",
            textZh: "可能是某个商家的数据泄露，或者ATM上的盗刷器。很遗憾，很难确定具体原因。好消息是您不需要为任何欺诈交易负责。我会取消这张卡并寄一张新的给您。",
            keyPhrases: [
              { en: "data breach", zh: "数据泄露" },
              { en: "not liable for", zh: "不需要为...负责" },
            ],
            alternativeExpressions: [
              {
                textEn: "Hard to say for sure — could be a data breach, a skimmer, or even a phishing attempt. But don't worry, you won't be charged for anything you didn't buy. Let me cancel this card and get a new one out to you.",
                textZh: "很难说具体原因——可能是数据泄露、盗刷器或钓鱼。但别担心，你不用为没买的东西付钱。我帮你取消这张卡，给你寄一张新的。",
                actionHint: "记住：欺诈交易不需要你负责",
                frequency: "common",
              },
            ],
            casualVersion: "Could be a data breach or a skimmer — hard to tell. But good news: you're not on the hook for it. I'll cancel this card and ship you a new one.",
            formalityVariants: {
              casual: "Could be a bunch of things — skimmer, data breach, whatever. You're not paying for it though. Let me cancel and send a new card.",
              standard: "It could be from a data breach at a retailer, or a card skimmer on an ATM. Unfortunately, it's hard to pinpoint exactly. The good news is you're not liable for any fraudulent charges. I'll cancel this card and send you a new one.",
              formal: "The compromise could have originated from a data breach at a merchant, a skimming device on an ATM, or various other methods. Regrettably, identifying the precise source is often challenging. However, I wish to assure you that you bear no liability for any fraudulent charges. I shall immediately cancel the compromised card and arrange for a replacement to be issued.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. Will I still be able to use Apple Pay or my online subscriptions while I wait for the new card?",
            textZh: "谢谢。等新卡期间我还能用Apple Pay或者在线订阅服务吗？",
            culturalNote: "换卡后数字钱包（Apple Pay、Google Pay）通常会自动更新新卡信息，但在线订阅需要手动更新新卡号。",
            casualVersion: "Thanks. Can I still use Apple Pay and my subscriptions while the new card's coming?",
            commonMistake: {
              wrong: "Can I still pay with my phone and internet subscriptions?",
              correct: "Will I still be able to use Apple Pay and my online subscriptions?",
              explanation: "用具体品牌名 Apple Pay 更清晰，online subscriptions 比 internet subscriptions 更自然。",
            },
            formalityVariants: {
              casual: "Cool, thanks. Can I still use Apple Pay and my streaming stuff while I wait?",
              standard: "Thank you. Will I still be able to use Apple Pay or my online subscriptions while I wait for the new card?",
              formal: "Thank you for your assistance. Will my digital wallet services and recurring online subscriptions remain functional during the interim period before I receive the replacement card?",
            },
          },
          {
            speaker: "them",
            role: "银行安全部门代表",
            textEn: "Apple Pay will update automatically once the new card is issued. But you'll need to update your card number manually for any online subscriptions or recurring payments. The new card should arrive in three to five business days. Would you like us to expedite it?",
            textZh: "新卡发出后Apple Pay会自动更新。但在线订阅或定期付款需要您手动更新卡号。新卡三到五个工作日内寄到。需要加急吗？",
            keyPhrases: [
              { en: "update automatically", zh: "自动更新" },
              { en: "expedite", zh: "加急" },
            ],
            alternativeExpressions: [
              {
                textEn: "Apple Pay should switch over on its own. For your Netflix, Spotify, and whatever else — you'll need to update the card number yourself. New card's coming in three to five days. Want me to rush it?",
                textZh: "Apple Pay会自己切换。Netflix、Spotify之类的——你得自己更新卡号。新卡三到五天到。要加急吗？",
                actionHint: "列出所有需要更新卡号的服务",
                frequency: "common",
              },
            ],
            casualVersion: "Apple Pay updates itself. But Netflix, Spotify, all that stuff — you gotta update the card number. New card in three to five days. Want me to rush it?",
            formalityVariants: {
              casual: "Apple Pay handles itself. Everything else — subscriptions, auto-pay — you'll have to update. Card's there in three to five days. Want it faster?",
              standard: "Apple Pay will update automatically once the new card is issued. But you'll need to update your card number manually for any online subscriptions or recurring payments. The new card should arrive in three to five business days. Would you like us to expedite it?",
              formal: "Your Apple Pay will be updated automatically upon issuance of the replacement card. However, any online subscriptions or recurring payment arrangements will require manual updating with the new card details. The replacement card is expected to arrive within three to five business days. Should you wish, we can arrange expedited delivery.",
            },
          },
        ],
      },
      {
        id: "fraud-alert-intermediate",
        titleZh: "处理已完成的欺诈交易",
        titleEn: "Handling Completed Fraudulent Transactions",
        description: "发现已经完成的欺诈交易后追回损失",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I just noticed three charges I didn't make — a $200 hotel booking, $150 at a clothing store, and $75 for an online purchase. They all went through last week. I didn't catch them until now.",
            textZh: "我刚发现三笔不是我的消费——200美元的酒店预订、150美元的服装店消费、和75美元的网购。都是上周完成的。我现在才发现。",
            culturalNote: "即使欺诈交易已经完成，消费者仍然受到保护。美国联邦法律规定信用卡欺诈最多只承担50美元损失，很多银行提供零责任保护（zero liability）。",
            casualVersion: "Found three charges that aren't mine — two hundred for a hotel, one-fifty at a clothing store, and seventy-five online. All from last week. Just noticed them.",
            commonMistake: {
              wrong: "There are three payments I didn't do on my card.",
              correct: "I noticed three charges I didn't make on my account.",
              explanation: "charges I didn't make 是描述未授权交易的标准表达。",
            },
            formalityVariants: {
              casual: "Three charges I didn't make — hotel, clothes, and some online thing. All from last week. Just saw them.",
              standard: "I just noticed three charges I didn't make — a $200 hotel booking, $150 at a clothing store, and $75 for an online purchase. They all went through last week. I didn't catch them until now.",
              formal: "I wish to report three unauthorized transactions on my account: a $200 hotel reservation, a $150 charge at a clothing retailer, and a $75 online purchase. These transactions were processed last week, and I have only just become aware of them.",
            },
          },
          {
            speaker: "them",
            role: "银行安全部门代表",
            textEn: "I'm sorry about that. Don't worry — our zero-liability policy means you won't be responsible for any unauthorized charges. Let me flag all three transactions and start the claims process right now.",
            textZh: "很抱歉发生这种事。别担心——我们的零责任政策意味着您不需要为任何未授权的交易负责。让我立即标记这三笔交易，开始理赔流程。",
            keyPhrases: [
              { en: "zero-liability policy", zh: "零责任政策" },
              { en: "claims process", zh: "理赔流程" },
            ],
            alternativeExpressions: [
              {
                textEn: "That's frustrating, but you're covered. Zero liability on all unauthorized charges. I'm flagging all three right now and we'll get your money back.",
                textZh: "很烦人，但你是受保护的。所有未授权交易零责任。我现在标记这三笔，会帮你拿回钱。",
                actionHint: "配合银行完成理赔流程",
                frequency: "common",
              },
            ],
            casualVersion: "Ugh, sorry about that. You're totally covered though — zero liability. Let me flag these and get your money back.",
            formalityVariants: {
              casual: "That sucks, but don't sweat it. You're covered — zero liability. I'll flag all three and get you refunded.",
              standard: "I'm sorry about that. Don't worry — our zero-liability policy means you won't be responsible for any unauthorized charges. Let me flag all three transactions and start the claims process right now.",
              formal: "I sincerely apologize for this situation. Please be assured that under our zero-liability protection policy, you will not bear any financial responsibility for unauthorized transactions. I shall immediately flag all three transactions and initiate the formal claims process on your behalf.",
            },
          },
          {
            speaker: "you",
            textEn: "How long until I get the money back? And do I need to file a police report?",
            textZh: "多久能拿回这些钱？我需要报警吗？",
            culturalNote: "对于较大金额的欺诈，银行可能会建议你向当地警方报案并获取案件编号。虽然不是强制的，但报告可以帮助调查和预防。",
            casualVersion: "When do I get my money back? Do I need to go to the cops?",
            commonMistake: {
              wrong: "How fast can I get back money? Must I call police?",
              correct: "How long until I get the money back? Do I need to file a police report?",
              explanation: "file a police report 是正式表达，比 call police 更精确。",
            },
            formalityVariants: {
              casual: "When's the money coming back? And should I file a police report or anything?",
              standard: "How long until I get the money back? And do I need to file a police report?",
              formal: "What is the anticipated timeframe for reimbursement? Additionally, would you recommend filing a police report regarding these unauthorized transactions?",
            },
          },
          {
            speaker: "them",
            role: "银行安全部门代表",
            textEn: "We'll issue provisional credits within 48 hours — so you'll see the $425 back in your account soon. A police report isn't required, but for amounts this size, we do recommend it. It helps with the investigation and protects you further.",
            textZh: "我们会在48小时内发放临时退款——所以您很快就会在账户中看到425美元。不强制要求报警，但对于这个金额，我们确实建议报案。这有助于调查，也进一步保护您。",
            keyPhrases: [
              { en: "provisional credits", zh: "临时退款" },
              { en: "police report", zh: "报警记录" },
            ],
            alternativeExpressions: [
              {
                textEn: "You'll get the four-twenty-five back within 48 hours as a provisional credit. A police report isn't mandatory, but it's a good idea for this amount. Helps us investigate and gives you extra protection.",
                textZh: "48小时内你会以临时退款的形式拿回四百二十五。报警不是必须的，但这个金额建议报一下。有助于调查，也给你额外保护。",
                actionHint: "考虑去当地警局报案",
                frequency: "common",
              },
            ],
            casualVersion: "You'll get the four-twenty-five back in about 48 hours. Police report isn't required but it's smart for this amount. Helps with the investigation.",
            formalityVariants: {
              casual: "Money back in about two days. Police report's not required but recommended for this amount.",
              standard: "We'll issue provisional credits within 48 hours — so you'll see the $425 back in your account soon. A police report isn't required, but for amounts this size, we do recommend it. It helps with the investigation and protects you further.",
              formal: "Provisional credits totaling $425 will be issued to your account within 48 hours. While filing a police report is not a prerequisite for our claims process, given the aggregate amount involved, we do recommend obtaining one. A police report facilitates our investigation and provides additional documentation for your protection.",
            },
          },
          {
            speaker: "you",
            textEn: "Should I also place a fraud alert on my credit report? I'm worried whoever did this might try to open new accounts in my name.",
            textZh: "我需要在信用报告上加一个欺诈警报吗？我担心做这事的人可能会用我的名义开新账户。",
            culturalNote: "fraud alert 是免费的一年期警报，通知贷款方在批准新账户前需额外验证身份。如果更严重，可以考虑 credit freeze（冻结信用报告），完全阻止新账户开立。",
            casualVersion: "Should I put a fraud alert on my credit? I'm worried they might try to open accounts in my name.",
            commonMistake: {
              wrong: "Should I put fraud warning on my credit?",
              correct: "Should I place a fraud alert on my credit report?",
              explanation: "place a fraud alert 是固定搭配，credit report 比 credit 更精确。",
            },
            formalityVariants: {
              casual: "Should I put a fraud alert on my credit? Don't want them opening stuff in my name.",
              standard: "Should I also place a fraud alert on my credit report? I'm worried whoever did this might try to open new accounts in my name.",
              formal: "Would you advise placing a fraud alert on my credit reports as a precautionary measure? I am concerned that the perpetrator may attempt to open new accounts using my personal information.",
            },
          },
          {
            speaker: "them",
            role: "银行安全部门代表",
            textEn: "That's a smart move. You can place a free fraud alert with any one of the three credit bureaus and they'll notify the other two. It lasts one year. If you want even stronger protection, a credit freeze blocks anyone from opening new accounts entirely — and it's also free.",
            textZh: "这是个明智的做法。您可以免费向三大信用局中的任何一个加欺诈警报，他们会通知另外两个。有效期一年。如果想更强的保护，信用冻结可以完全阻止任何人开新账户——也是免费的。",
            keyPhrases: [
              { en: "fraud alert", zh: "欺诈警报" },
              { en: "credit freeze", zh: "信用冻结" },
            ],
            alternativeExpressions: [
              {
                textEn: "Definitely do it. Call one bureau and they tell the others — it's free and lasts a year. Or go even bigger with a credit freeze. That completely locks your credit so nobody can open anything. Also free.",
                textZh: "一定要做。打一个信用局的电话，他们会通知其他两个——免费的，一年有效。或者更狠一点做信用冻结。完全锁住你的信用，谁也开不了新账户。也是免费的。",
                actionHint: "在三大信用局都设置保护",
                frequency: "common",
              },
            ],
            casualVersion: "Definitely. Call one bureau, they tell the other two — free, lasts a year. Or do a credit freeze to totally lock it down. Also free.",
            formalityVariants: {
              casual: "100%. Hit up one bureau and they'll tell the others. Free, one year. Or do a credit freeze — totally locks it. Also free.",
              standard: "That's a smart move. You can place a free fraud alert with any one of the three credit bureaus and they'll notify the other two. It lasts one year. If you want even stronger protection, a credit freeze blocks anyone from opening new accounts entirely — and it's also free.",
              formal: "That would be a prudent precaution. You may place a complimentary fraud alert with any one of the three major credit bureaus, which will then notify the remaining two bureaus. The alert remains active for one year. For more comprehensive protection, you may also implement a credit freeze, which entirely prevents new account openings. Both services are provided at no cost.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 透支处理 ====================
  {
    id: "banking-overdraft",
    tags: ["overdraft", "透支", "negative balance", "fees", "手续费"],
    category: "banking",
    titleZh: "透支处理",
    titleEn: "Handling an Overdraft",
    description: "账户意外透支后了解费用并寻求解决方案",
    otherRole: "银行客服代表",
    otherRoleIcon: "🏦",
    flows: [
      {
        id: "overdraft-basic",
        titleZh: "首次透支处理",
        titleEn: "First Overdraft Experience",
        description: "第一次遇到透支，了解费用和处理流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just got a notification that my checking account is overdrawn. I didn't realize my balance was that low. There's a $35 overdraft fee — is there any way to get it waived?",
            textZh: "你好，我刚收到通知说我的支票账户透支了。我没注意到余额那么低。有一笔35美元的透支费——有没有办法免除？",
            culturalNote: "美国银行的透支费通常是35美元左右，每笔透支交易都可能产生一次。首次透支时，很多银行会给予一次免除（courtesy waiver），但你需要主动要求。",
            casualVersion: "Hey, my account's overdrawn and I just got hit with a thirty-five dollar fee. Any chance you can waive it? This is my first time.",
            commonMistake: {
              wrong: "My account is negative. Can you cancel the fee?",
              correct: "My checking account is overdrawn. Is there any way to get the overdraft fee waived?",
              explanation: "overdrawn 是透支的标准说法，get it waived 比 cancel 更合适。",
            },
            formalityVariants: {
              casual: "Account's overdrawn, got a $35 fee. Any way to waive it? First time this happened.",
              standard: "Hi, I just got a notification that my checking account is overdrawn. I didn't realize my balance was that low. There's a $35 overdraft fee — is there any way to get it waived?",
              formal: "Good morning. I received a notification that my checking account has been overdrawn. I was unaware that my balance had fallen to this level. I notice a $35 overdraft fee has been assessed. Given that this is my first occurrence, would it be possible to have this fee waived?",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "I understand. Let me check your account history. I can see you've been a customer for over a year and this is your first overdraft. I'll go ahead and waive the fee as a one-time courtesy.",
            textZh: "我理解。让我查看您的账户记录。我看到您已经是我们一年多的客户了，这是第一次透支。我给您作为一次性礼遇免除这笔费用。",
            keyPhrases: [
              { en: "one-time courtesy", zh: "一次性礼遇" },
              { en: "waive the fee", zh: "免除费用" },
            ],
            alternativeExpressions: [
              {
                textEn: "No worries. Looking at your history — you've been with us over a year and never overdrafted before. I can waive it this time as a courtesy. Just be aware it's a one-time thing.",
                textZh: "别担心。看了你的记录——跟我们一年多了，从没透支过。这次可以礼遇性免掉。但注意这只是一次性的。",
                actionHint: "记住下次透支可能无法免费",
                frequency: "common",
              },
            ],
            casualVersion: "Let me check. Yeah, first overdraft in over a year of banking with us. I'll waive it this time. Just a heads up, it's a one-time deal.",
            formalityVariants: {
              casual: "You've been with us over a year, first time this happened. I'll waive it. But just this once, okay?",
              standard: "I understand. Let me check your account history. I can see you've been a customer for over a year and this is your first overdraft. I'll go ahead and waive the fee as a one-time courtesy.",
              formal: "I completely understand. Upon reviewing your account history, I can confirm that you have been a valued customer for over one year and this constitutes your first overdraft occurrence. I am pleased to waive this fee as a one-time courtesy gesture.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you so much. How do I prevent this from happening again? Is there some kind of alert I can set up?",
            textZh: "太感谢了。怎么防止以后再发生？有什么提醒可以设置吗？",
            culturalNote: "大部分美国银行提供低余额提醒（low balance alert），可以在余额低于某个金额时发短信或推送通知。很多人还会设置透支保护（overdraft protection）。",
            casualVersion: "Awesome, thanks! How do I make sure this doesn't happen again? Can I set up some kind of alert?",
            commonMistake: {
              wrong: "How to avoid this next time?",
              correct: "How do I prevent this from happening again?",
              explanation: "prevent this from happening 是完整的表达，比 avoid this 更正式。",
            },
            formalityVariants: {
              casual: "Thanks a ton! How do I avoid this in the future? Any alerts I can turn on?",
              standard: "Thank you so much. How do I prevent this from happening again? Is there some kind of alert I can set up?",
              formal: "I greatly appreciate your assistance. Could you advise me on preventive measures to avoid future overdrafts? Are there notification services available that I could configure?",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "Absolutely. You can set up a low-balance alert in the app — we'll text or email you when your balance drops below an amount you choose. I'd also recommend linking a savings account for overdraft protection. That way, we automatically transfer funds to cover any shortfall.",
            textZh: "当然可以。您可以在App里设置低余额提醒——当余额低于您设定的金额时我们会发短信或邮件通知您。我还建议关联一个储蓄账户做透支保护。这样我们会自动转账来覆盖不足金额。",
            keyPhrases: [
              { en: "low-balance alert", zh: "低余额提醒" },
              { en: "overdraft protection", zh: "透支保护" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure! In the app, set a low-balance alert — say, when you drop below a hundred bucks. Also, link a savings account as backup. If you overdraw, we'll pull from savings instead of charging a fee.",
                textZh: "可以！在App里设个低余额提醒——比如低于一百块。还有，关联一个储蓄账户做备份。如果透支了，我们从储蓄账户扣，不收费。",
                actionHint: "立即设置低余额提醒",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah! Set a low-balance alert in the app — get a text when you're running low. And link a savings account as backup. If you overdraft, we pull from savings instead.",
            formalityVariants: {
              casual: "For sure. Set a low-balance alert in the app. And link a savings account — if you overdraw, we just pull from there. No fee.",
              standard: "Absolutely. You can set up a low-balance alert in the app — we'll text or email you when your balance drops below an amount you choose. I'd also recommend linking a savings account for overdraft protection. That way, we automatically transfer funds to cover any shortfall.",
              formal: "Certainly. Our mobile application allows you to configure a low-balance notification at a threshold of your choosing, delivered via text message or email. Additionally, I would recommend establishing overdraft protection by linking a savings account. In the event of insufficient funds, the system will automatically transfer the necessary amount from your savings account to cover the deficit.",
            },
          },
          {
            speaker: "you",
            textEn: "Can I also opt out of overdraft coverage entirely? I'd rather have my card declined than get charged a fee.",
            textZh: "我可以完全取消透支覆盖吗？我宁可刷卡被拒也不想被收费。",
            culturalNote: "根据2010年的美国联邦法规，银行必须让消费者选择是否要透支覆盖（opt in/opt out）。选择opt out后，余额不足时交易会被直接拒绝，不产生透支费。",
            casualVersion: "Can I just turn off overdraft? I'd rather my card gets declined than pay a fee.",
            commonMistake: {
              wrong: "Can I close the overdraft service?",
              correct: "Can I opt out of overdraft coverage?",
              explanation: "opt out of 是退出某项服务的标准表达，overdraft coverage 是正确术语。",
            },
            formalityVariants: {
              casual: "Can I just turn overdraft off completely? I'd rather get declined than pay fees.",
              standard: "Can I also opt out of overdraft coverage entirely? I'd rather have my card declined than get charged a fee.",
              formal: "Additionally, is it possible to opt out of overdraft coverage entirely? I would prefer that insufficient-fund transactions be declined rather than processed with an associated fee.",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "Yes, you can opt out right now. If you do, any debit card purchase or ATM withdrawal that would overdraw your account will simply be declined — no fee. Keep in mind that checks and automatic payments might still go through and incur a fee. Want me to opt you out?",
            textZh: "可以，现在就能取消。取消后，任何会导致账户透支的借记卡消费或ATM取款都会被直接拒绝——没有费用。但请注意支票和自动扣款可能仍然会通过并产生费用。要我帮您取消吗？",
            keyPhrases: [
              { en: "opt out", zh: "取消/退出" },
              { en: "simply be declined", zh: "直接被拒绝" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yep, I can do that right now. Card purchases and ATM withdrawals will just get declined if you're short — no fee. But heads up: checks and auto-pay can still overdraft you. Want me to switch it off?",
                textZh: "行，我现在就能办。卡消费和ATM取款余额不足就会被拒——不收费。但注意：支票和自动扣款还是可能透支。要关掉吗？",
                actionHint: "注意支票和自动扣款不受保护",
                frequency: "common",
              },
            ],
            casualVersion: "Yep! I'll turn it off. Card and ATM stuff will just get declined. But FYI, checks and auto-pay can still overdraft. Want me to do it?",
            formalityVariants: {
              casual: "Sure thing. Card and ATM purchases just get declined, no fee. Checks and auto-pay can still go through though. Want me to turn it off?",
              standard: "Yes, you can opt out right now. If you do, any debit card purchase or ATM withdrawal that would overdraw your account will simply be declined — no fee. Keep in mind that checks and automatic payments might still go through and incur a fee. Want me to opt you out?",
              formal: "Certainly, that can be arranged immediately. Upon opting out, any debit card transaction or ATM withdrawal that would result in an overdraft will be declined without any associated fee. Please be advised, however, that checks and pre-authorized automatic payments may still be processed and could incur overdraft charges. Shall I proceed with the opt-out?",
            },
          },
        ],
      },
      {
        id: "overdraft-intermediate",
        titleZh: "处理连锁透支费用",
        titleEn: "Managing Cascading Overdraft Fees",
        description: "多笔交易导致连锁透支费用，协商减免",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I need help. My account went negative by $20, but then four more small charges went through and now I have five overdraft fees totaling $175. That seems excessive for a $20 shortfall.",
            textZh: "我需要帮助。我的账户透支了20美元，但之后又有四笔小额扣款通过了，现在总共有五笔透支费共175美元。因为20美元的缺口产生175美元的费用感觉太多了。",
            culturalNote: "连锁透支（cascading overdrafts）是美国消费者投诉最多的银行问题之一。一笔小额透支触发后续交易也透支，每笔都产生35美元费用。",
            casualVersion: "So my account was only twenty bucks short, but then four more charges hit and now I've got five overdraft fees — 175 bucks! That's crazy for a twenty dollar shortfall.",
            commonMistake: {
              wrong: "I have too many overdraft fee because of small shortage.",
              correct: "I have five overdraft fees totaling $175 for a $20 shortfall. That seems excessive.",
              explanation: "fees 用复数，totaling 表示总计，shortfall 是差额/缺口的标准表达。",
            },
            formalityVariants: {
              casual: "Five overdraft fees for being twenty bucks short? That's a hundred seventy-five dollars in fees! That's insane.",
              standard: "I need help. My account went negative by $20, but then four more small charges went through and now I have five overdraft fees totaling $175. That seems excessive for a $20 shortfall.",
              formal: "I require assistance with a pressing matter. My account experienced a deficit of $20, following which four additional transactions were processed, resulting in a total of five overdraft fees amounting to $175. I find this disproportionate relative to the original shortfall.",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "I completely understand your frustration. Let me review the transactions. I can see five overdraft fees at $35 each. Given that the original shortfall was only $20, I can reverse three of the five fees. That would save you $105.",
            textZh: "我完全理解您的不满。让我查看交易记录。我看到五笔各35美元的透支费。考虑到原始缺口只有20美元，我可以撤销其中三笔费用。这能给您省105美元。",
            keyPhrases: [
              { en: "reverse the fees", zh: "撤销/退回费用" },
              { en: "original shortfall", zh: "原始缺口" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yeah, that is a lot. Let me see what I can do. Five fees for a twenty dollar shortfall — I can knock off three of them. That's a hundred and five back in your pocket.",
                textZh: "是的，确实太多了。让我看看能怎么办。二十块钱的缺口五笔费用——我可以免掉三笔。那就是一百零五块回到你口袋。",
                actionHint: "可以礼貌地要求免除更多",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah, I get it. Five fees for twenty bucks in the hole is rough. Let me reverse three of them — that's a hundred five back.",
            formalityVariants: {
              casual: "Yeah that's brutal. Let me knock off three of the five. That's a hundred five bucks back.",
              standard: "I completely understand your frustration. Let me review the transactions. I can see five overdraft fees at $35 each. Given that the original shortfall was only $20, I can reverse three of the five fees. That would save you $105.",
              formal: "I entirely understand your concern. Upon reviewing the transaction history, I can identify five overdraft charges of $35 each. Given that the precipitating shortfall was a modest $20, I am authorized to reverse three of the five fees, which would result in a credit of $105 to your account.",
            },
          },
          {
            speaker: "you",
            textEn: "I appreciate that, but is there any way to reverse all five? I've been a loyal customer and the original shortfall was so small. Paying $70 in fees for being $20 short still feels unfair.",
            textZh: "我很感谢，但有没有可能全部免除？我一直是忠实客户，原始缺口那么小。因为差20美元还要付70美元的费用仍然觉得不公平。",
            culturalNote: "在美国银行场景中，礼貌但坚定地协商（negotiate）是完全正常的。很多银行客服有权限免除更多费用，特别是对长期客户。",
            casualVersion: "Thanks, but can you do all five? I've been with you guys for a while and twenty bucks short shouldn't cost me seventy in fees.",
            commonMistake: {
              wrong: "Can you remove all the fees? It's not fair.",
              correct: "Is there any way to reverse all five? Paying $70 for a $20 shortfall still feels unfair.",
              explanation: "reverse 比 remove 更专业，用具体数字说明比简单说 not fair 更有说服力。",
            },
            formalityVariants: {
              casual: "Any chance you can waive all five? Seventy bucks for a twenty dollar shortfall is still a lot.",
              standard: "I appreciate that, but is there any way to reverse all five? I've been a loyal customer and the original shortfall was so small. Paying $70 in fees for being $20 short still feels unfair.",
              formal: "While I am grateful for the partial reversal, I would respectfully request that all five fees be reversed. As a longstanding customer with a strong account history, I feel that retaining any fees for a $20 shortfall would be disproportionate.",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "Let me see what I can do. Given your long account history and that this is your first overdraft situation, I'll go ahead and reverse all five fees as a special courtesy. But I strongly recommend setting up overdraft protection to avoid this in the future.",
            textZh: "让我看看能怎么做。考虑到您的长期账户记录和这是您首次透支，我会作为特别礼遇免除全部五笔费用。但我强烈建议设置透支保护以避免以后再发生。",
            keyPhrases: [
              { en: "special courtesy", zh: "特别礼遇" },
              { en: "overdraft protection", zh: "透支保护" },
            ],
            alternativeExpressions: [
              {
                textEn: "Okay, let me check. You've been with us a while and this is a first — I'll waive all five as a one-time thing. But seriously, set up overdraft protection so this doesn't happen again.",
                textZh: "好吧，让我查一下。你跟我们这么久了又是第一次——五笔全免作为一次性例外。但说真的，设置透支保护以后别再发生了。",
                actionHint: "立即设置透支保护",
                frequency: "common",
              },
            ],
            casualVersion: "Alright, since it's your first time and you've been with us a while, I'll waive all five. But definitely set up overdraft protection so this doesn't happen again.",
            formalityVariants: {
              casual: "Fine, I'll waive all five this time. But you really need to set up overdraft protection, okay?",
              standard: "Let me see what I can do. Given your long account history and that this is your first overdraft situation, I'll go ahead and reverse all five fees as a special courtesy. But I strongly recommend setting up overdraft protection to avoid this in the future.",
              formal: "Allow me to review this further. In consideration of your longstanding relationship with our institution and the unprecedented nature of this occurrence, I shall authorize the reversal of all five overdraft fees as an exceptional courtesy. However, I would strongly advise establishing overdraft protection to prevent similar situations going forward.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you, I really appreciate it. Can you also tell me what time of day transactions are processed? I want to make sure my paycheck clears before my bills hit.",
            textZh: "太感谢了。你能告诉我交易是一天中什么时候处理的吗？我想确保工资先到账再扣账单。",
            culturalNote: "美国银行通常在每个工作日特定时间（通常是午夜或清晨）批量处理交易。了解处理顺序和时间有助于避免透支。",
            casualVersion: "Thanks so much. When do transactions actually process? I wanna make sure my paycheck hits before my bills.",
            commonMistake: {
              wrong: "What time the bank calculate the transaction?",
              correct: "What time of day are transactions processed?",
              explanation: "processed 比 calculate 更合适，用被动语态更自然。",
            },
            formalityVariants: {
              casual: "Awesome, thanks! When do transactions go through? Want my paycheck to land before my bills.",
              standard: "Thank you, I really appreciate it. Can you also tell me what time of day transactions are processed? I want to make sure my paycheck clears before my bills hit.",
              formal: "I sincerely appreciate your assistance. Additionally, could you inform me of the time at which daily transactions are processed? I wish to ensure that my direct deposit is credited before any scheduled payments are debited.",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "Transactions are batched and processed overnight, usually between midnight and 6 AM Eastern. Direct deposits typically post first, followed by debits. But the safest bet is to maintain a small buffer in your account — even fifty dollars can prevent overdrafts.",
            textZh: "交易是批量在夜间处理的，通常在东部时间午夜到凌晨6点之间。工资直接存款通常先入账，然后是扣款。但最安全的做法是账户里保持一个小缓冲——哪怕五十美元就能防止透支。",
            keyPhrases: [
              { en: "batched and processed", zh: "批量处理" },
              { en: "direct deposits post first", zh: "工资直存先入账" },
            ],
            alternativeExpressions: [
              {
                textEn: "Everything processes overnight — midnight to 6 AM Eastern. Deposits usually hit before debits, so your paycheck should land first. But keep a little cushion in there, like fifty bucks, just in case.",
                textZh: "所有交易都在夜间处理——东部时间午夜到早6点。存款通常比扣款先到，所以工资应该先入账。但留个小垫底，比如五十块，以防万一。",
                actionHint: "保持至少50美元的余额缓冲",
                frequency: "common",
              },
            ],
            casualVersion: "Everything processes overnight. Deposits usually hit first, then debits. But keep a little cushion — like fifty bucks — and you'll never overdraft.",
            formalityVariants: {
              casual: "Overnight, midnight to 6 AM. Deposits first, then debits. Keep fifty bucks as a cushion and you're good.",
              standard: "Transactions are batched and processed overnight, usually between midnight and 6 AM Eastern. Direct deposits typically post first, followed by debits. But the safest bet is to maintain a small buffer in your account — even fifty dollars can prevent overdrafts.",
              formal: "Transactions are batched and processed during the overnight cycle, typically between midnight and 6:00 AM Eastern Time. Direct deposit credits are generally posted prior to debit transactions. However, the most prudent approach would be to maintain a modest buffer in your account — even a reserve of approximately $50 can serve as an effective safeguard against overdrafts.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 开银行本票 ====================
  {
    id: "banking-cashiers-check",
    tags: ["cashier's check", "本票", "certified", "payment", "大额支付"],
    category: "banking",
    titleZh: "开银行本票",
    titleEn: "Getting a Cashier's Check",
    description: "在银行开具银行本票用于大额支付",
    otherRole: "银行柜员",
    otherRoleIcon: "🏦",
    flows: [
      {
        id: "cashiers-check-basic",
        titleZh: "首次开本票",
        titleEn: "First Cashier's Check",
        description: "了解银行本票并开具用于租房押金",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, my landlord requires a cashier's check for the security deposit. I've never gotten one before. How does it work?",
            textZh: "你好，我的房东要求用银行本票支付押金。我从来没开过。怎么操作？",
            culturalNote: "银行本票（cashier's check）是由银行自身担保的支票，比个人支票更安全。在美国，租房押金、二手车买卖、大额交易中经常要求使用。",
            casualVersion: "Hey, my landlord wants a cashier's check for the deposit. Never done this before — how do I get one?",
            commonMistake: {
              wrong: "I need a bank check for my house deposit.",
              correct: "I need a cashier's check for my security deposit.",
              explanation: "cashier's check 是专有名词，security deposit 是租房押金的标准表达。",
            },
            formalityVariants: {
              casual: "Need a cashier's check for my apartment deposit. How does that work?",
              standard: "Hi, my landlord requires a cashier's check for the security deposit. I've never gotten one before. How does it work?",
              formal: "Good morning. My landlord has requested that the security deposit be remitted via cashier's check. As I have not previously obtained one, could you please explain the process?",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Sure! A cashier's check is guaranteed by the bank, so the recipient knows the funds are secure. I'll need the exact amount, the payee's name — your landlord's name — and funds will be deducted from your account. There's a $10 fee.",
            textZh: "当然！银行本票是由银行担保的，收款人知道资金是安全的。我需要准确金额、收款人姓名——也就是您房东的名字——资金会从您的账户扣除。手续费10美元。",
            keyPhrases: [
              { en: "guaranteed by the bank", zh: "银行担保的" },
              { en: "payee", zh: "收款人" },
            ],
            alternativeExpressions: [
              {
                textEn: "No problem! It's basically a check from the bank itself, so the money's guaranteed. Tell me the amount and who it's made out to, and I'll pull the funds from your account. Ten dollar fee.",
                textZh: "没问题！基本上就是银行自己开的支票，钱是担保的。告诉我金额和抬头，我从你账户扣款。手续费十块。",
                actionHint: "确认房东的准确姓名",
                frequency: "common",
              },
            ],
            casualVersion: "Easy! It's a check from the bank — money's guaranteed. Just tell me the amount, who it goes to, and I'll pull it from your account. Ten bucks for the fee.",
            formalityVariants: {
              casual: "Simple! Bank guarantees the money. Tell me how much and who to make it out to. Ten dollar fee.",
              standard: "Sure! A cashier's check is guaranteed by the bank, so the recipient knows the funds are secure. I'll need the exact amount, the payee's name — your landlord's name — and funds will be deducted from your account. There's a $10 fee.",
              formal: "Certainly. A cashier's check is a payment instrument guaranteed by the bank, providing the recipient with assurance that the funds are secure and available. To issue one, I shall require the precise amount, the full legal name of the payee — in this case, your landlord — and the corresponding funds will be debited from your account. A processing fee of $10 applies.",
            },
          },
          {
            speaker: "you",
            textEn: "The deposit is $2,400 and it should be made out to 'Pacific Property Management LLC.' Do I need to bring any ID?",
            textZh: "押金是2400美元，抬头写'Pacific Property Management LLC'。我需要带什么证件吗？",
            culturalNote: "在美国，LLC 是有限责任公司的缩写。租房时押金收款方可能是房东个人或物业管理公司。开本票时名字必须完全正确。",
            casualVersion: "Twenty-four hundred bucks, made out to Pacific Property Management LLC. Do I need my ID?",
            commonMistake: {
              wrong: "Write the name Pacific Property Management LLC.",
              correct: "It should be made out to 'Pacific Property Management LLC.'",
              explanation: "made out to 是支票抬头的标准表达，不说 write the name。",
            },
            formalityVariants: {
              casual: "Twenty-four hundred to Pacific Property Management LLC. Need an ID or anything?",
              standard: "The deposit is $2,400 and it should be made out to 'Pacific Property Management LLC.' Do I need to bring any ID?",
              formal: "The amount is $2,400, and the check should be made payable to 'Pacific Property Management LLC.' Are there any identification requirements for this transaction?",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "I'll need your government-issued photo ID — a driver's license or passport works. Let me verify your account has sufficient funds. Yes, you have enough. I'll print the cashier's check right now. Double-check the payee name when I hand it to you.",
            textZh: "我需要您的政府签发的带照片证件——驾照或护照都可以。让我确认您的账户余额充足。是的，余额足够。我现在就打印银行本票。拿到后请仔细核对收款人名称。",
            keyPhrases: [
              { en: "government-issued photo ID", zh: "政府签发的带照片证件" },
              { en: "sufficient funds", zh: "充足资金" },
            ],
            alternativeExpressions: [
              {
                textEn: "Just need your license or passport. Let me check your balance real quick. Yep, you're good. I'll print it out now — just double-check the name when I give it to you.",
                textZh: "只要你的驾照或护照。让我快速查一下余额。没问题，够了。我现在打印——拿到后核对一下名字。",
                actionHint: "仔细核对支票上所有信息",
                frequency: "common",
              },
            ],
            casualVersion: "Just need your license or passport. Balance is fine. Let me print it up. Check the name when I hand it over.",
            formalityVariants: {
              casual: "Licence or passport. Balance looks good. Printing now — double-check the name when you get it.",
              standard: "I'll need your government-issued photo ID — a driver's license or passport works. Let me verify your account has sufficient funds. Yes, you have enough. I'll print the cashier's check right now. Double-check the payee name when I hand it to you.",
              formal: "I shall require a government-issued photo identification — a driver's license or passport will suffice. Allow me to verify that sufficient funds are available in your account. The balance is confirmed adequate. I shall proceed to print the cashier's check immediately. Please carefully verify the payee name upon receipt.",
            },
          },
          {
            speaker: "you",
            textEn: "What happens if I lose the check before giving it to my landlord? Can I get a replacement?",
            textZh: "如果给房东之前丢了怎么办？能补办吗？",
            culturalNote: "银行本票丢失的处理比较麻烦，通常需要购买赔偿保证金（indemnity bond），等待30-90天，费用可能比原本票还高。所以一定要妥善保管。",
            casualVersion: "What if I lose it? Can I get another one?",
            commonMistake: {
              wrong: "If I lost the check, can I get new one?",
              correct: "What happens if I lose the check? Can I get a replacement?",
              explanation: "用 what happens if 提问假设场景，replacement 是替代品/补办的标准说法。",
            },
            formalityVariants: {
              casual: "What if I lose it? Can you just print another?",
              standard: "What happens if I lose the check before giving it to my landlord? Can I get a replacement?",
              formal: "In the event that the check is lost prior to delivery to the payee, what is the process for obtaining a replacement?",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "If it's lost, you'll need to fill out a declaration of loss and we may require an indemnity bond — which can cost around 2% of the check amount. The replacement process can take 30 to 90 days. So please keep it in a safe place!",
            textZh: "如果丢了，需要填写一份遗失声明，我们可能需要赔偿保证金——大约是支票金额的2%。补办流程可能需要30到90天。所以请妥善保管！",
            keyPhrases: [
              { en: "declaration of loss", zh: "遗失声明" },
              { en: "indemnity bond", zh: "赔偿保证金" },
            ],
            alternativeExpressions: [
              {
                textEn: "Losing a cashier's check is a pain. You'd have to file a loss claim, possibly buy an indemnity bond — about 2% of the amount — and wait one to three months for a replacement. Best advice: don't lose it!",
                textZh: "丢银行本票很麻烦。你得提交遗失索赔，可能还要买赔偿保证金——大约金额的2%——然后等一到三个月才能补办。最好的建议：别丢！",
                actionHint: "拍照留存并妥善保管",
                frequency: "common",
              },
            ],
            casualVersion: "Losing one is a hassle — you'd need a loss form, maybe an indemnity bond at 2%, and it could take a month or more. So don't lose it!",
            formalityVariants: {
              casual: "Losing it would be a huge pain. Forms, possible bond fee, could take months to replace. So keep it safe!",
              standard: "If it's lost, you'll need to fill out a declaration of loss and we may require an indemnity bond — which can cost around 2% of the check amount. The replacement process can take 30 to 90 days. So please keep it in a safe place!",
              formal: "In the event of loss, you would be required to submit a formal declaration of loss. An indemnity bond, typically costing approximately 2% of the check's face value, may also be required. The replacement process generally takes between 30 and 90 days. I strongly recommend safeguarding the check with utmost care.",
            },
          },
        ],
      },
      {
        id: "cashiers-check-intermediate",
        titleZh: "大额本票与验证",
        titleEn: "Large Cashier's Check and Verification",
        description: "开大额本票用于买车并了解验证方式",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I need a cashier's check for $28,000 to buy a used car from a private seller. Is there anything special I should know about a check this large?",
            textZh: "我需要一张28000美元的银行本票向私人卖家买二手车。这么大金额有什么特别需要注意的吗？",
            culturalNote: "在美国私人买卖二手车，银行本票是最安全的支付方式之一。超过$10,000的现金交易会触发银行的货币交易报告（CTR），本票没有这个问题。",
            casualVersion: "Need a cashier's check for twenty-eight K to buy a car from a private seller. Anything I should know for a big check like that?",
            commonMistake: {
              wrong: "I need big cashier check for buy car.",
              correct: "I need a cashier's check for $28,000 to buy a used car.",
              explanation: "cashier's check 带撇号，for + 金额 + to + 目的 是标准句式。",
            },
            formalityVariants: {
              casual: "Need a cashier's check — twenty-eight grand for a car. Anything special for one this big?",
              standard: "I need a cashier's check for $28,000 to buy a used car from a private seller. Is there anything special I should know about a check this large?",
              formal: "I require a cashier's check in the amount of $28,000 for the purchase of a vehicle from a private seller. Are there any additional considerations or requirements associated with a transaction of this magnitude?",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "For amounts over $10,000, we'll need to verify your identity and the transaction may take a bit longer to process. We might also ask about the purpose of the withdrawal for regulatory compliance. It's standard procedure — nothing to worry about.",
            textZh: "超过10000美元的金额，我们需要验证您的身份，交易处理可能稍长一些。出于合规要求，我们可能会询问取款用途。这是标准流程——不用担心。",
            keyPhrases: [
              { en: "regulatory compliance", zh: "合规要求" },
              { en: "standard procedure", zh: "标准流程" },
            ],
            alternativeExpressions: [
              {
                textEn: "Anything over ten grand requires extra ID verification and a few compliance questions — like what the money's for. Totally routine, we just have to ask. Takes a few extra minutes.",
                textZh: "超过一万都需要额外的身份验证和几个合规问题——比如钱的用途。完全是例行的，我们必须问。多花几分钟。",
                actionHint: "如实回答用途，是正常合规流程",
                frequency: "common",
              },
            ],
            casualVersion: "Over ten grand, we need extra ID and gotta ask a few questions about what it's for. Totally normal, just takes a bit longer.",
            formalityVariants: {
              casual: "Over ten K, there's extra ID stuff and a couple compliance questions. No biggie, just takes a bit.",
              standard: "For amounts over $10,000, we'll need to verify your identity and the transaction may take a bit longer to process. We might also ask about the purpose of the withdrawal for regulatory compliance. It's standard procedure — nothing to worry about.",
              formal: "For transactions exceeding $10,000, enhanced identity verification is required and the processing time may be slightly extended. Additionally, we are obligated to inquire about the purpose of the withdrawal to satisfy regulatory compliance requirements. This is standard procedure and should not be cause for concern.",
            },
          },
          {
            speaker: "you",
            textEn: "I understand. The seller also asked how they can verify the cashier's check is real. People have told me fake cashier's checks are common in car scams. What should I tell them?",
            textZh: "我理解。卖家也问怎么验证银行本票是真的。有人告诉我假本票在买车骗局中很常见。我应该告诉他们什么？",
            culturalNote: "假银行本票确实是美国二手车买卖中常见的骗局手段。买家给假本票，等资金'到账'后把车开走，几天后银行发现是假的就退款。",
            casualVersion: "Got it. The seller wants to know how to verify it's legit. I've heard fake cashier's checks are a thing. What should I tell them?",
            commonMistake: {
              wrong: "How can the seller check if it's a true check?",
              correct: "How can the seller verify the cashier's check is authentic?",
              explanation: "verify 和 authentic 是验证真伪的专业用词，比 check if it's true 更恰当。",
            },
            formalityVariants: {
              casual: "The seller's worried about fakes. How do they know it's real?",
              standard: "The seller also asked how they can verify the cashier's check is real. People have told me fake cashier's checks are common in car scams. What should I tell them?",
              formal: "The seller has expressed concern about verification of the check's authenticity. I understand that fraudulent cashier's checks are a prevalent issue in private vehicle sales. What verification methods would you recommend I convey to the seller?",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Great question. The seller can call our bank directly — using the number on our website, not the one on the check — and verify the check number and amount. They can also come to any of our branches with the check for in-person verification. We're happy to confirm it.",
            textZh: "好问题。卖家可以直接打我们银行的电话——用网站上的号码，不是支票上的——核实支票号和金额。也可以拿着支票到我们任何网点当面验证。我们很乐意确认。",
            keyPhrases: [
              { en: "verify the check number", zh: "核实支票号" },
              { en: "in-person verification", zh: "当面验证" },
            ],
            alternativeExpressions: [
              {
                textEn: "Tell them to call us — but use the number from our website, not what's printed on the check. Scam checks sometimes have fake phone numbers. They can also just walk into a branch and we'll verify it on the spot.",
                textZh: "让他们打电话给我们——但用网站上的号码，不是支票上印的。假支票有时会印假电话号码。也可以直接走进任何分行，我们当场验证。",
                actionHint: "主动提供银行网站让卖家查号码",
                frequency: "common",
              },
            ],
            casualVersion: "Tell them to call us — use the number from our website though, not what's on the check. Or they can bring it to any branch and we'll confirm it right there.",
            formalityVariants: {
              casual: "They can call us — use the website number, not the one on the check. Or just bring it to a branch.",
              standard: "Great question. The seller can call our bank directly — using the number on our website, not the one on the check — and verify the check number and amount. They can also come to any of our branches with the check for in-person verification. We're happy to confirm it.",
              formal: "An excellent question. The seller may contact our institution directly, using the telephone number listed on our official website rather than any number printed on the check itself, to verify the check number and amount. Alternatively, they are welcome to visit any of our branch locations for in-person verification. We would be pleased to provide confirmation.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect. One more thing — if the deal falls through and I don't use the check, can I get a refund?",
            textZh: "太好了。还有一件事——如果交易没成功，我没用这张支票，能退款吗？",
            culturalNote: "未使用的银行本票可以退款，但需要带着原始支票去银行办理。退款通常回到原来的账户，处理时间可能需要几个工作日。",
            casualVersion: "What if the deal doesn't happen? Can I just return the check and get my money back?",
            commonMistake: {
              wrong: "If I don't use it, can I return the money?",
              correct: "If the deal falls through, can I get a refund on the check?",
              explanation: "the deal falls through 是交易失败的地道表达，get a refund 比 return the money 更合适。",
            },
            formalityVariants: {
              casual: "What if it doesn't work out? Can I bring the check back for a refund?",
              standard: "If the deal falls through and I don't use the check, can I get a refund?",
              formal: "In the event that the transaction does not proceed, is it possible to return the unused cashier's check and receive a full refund of the amount plus the processing fee?",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Yes, just bring the original check back to any branch and we'll redeposit the funds into your account. The $10 fee is non-refundable, but the full $28,000 goes right back. Processing takes about one business day.",
            textZh: "可以，只要把原始支票带回任何网点，我们会把资金重新存入您的账户。10美元手续费不退，但28000美元全额退回。处理大约需要一个工作日。",
            keyPhrases: [
              { en: "redeposit the funds", zh: "重新存入资金" },
              { en: "non-refundable", zh: "不可退还的" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure, bring it back and we'll put the money right back in your account. You won't get the ten dollar fee back, but the twenty-eight grand goes right back in. Takes about a day.",
                textZh: "当然，把支票带回来，钱会直接放回你账户。十块手续费不退，但两万八全额回来。大约一天。",
                actionHint: "保管好支票直到交易确定",
                frequency: "common",
              },
            ],
            casualVersion: "Yep, bring it back. Full twenty-eight K goes back in your account. The ten dollar fee is gone though. Takes about a day to process.",
            formalityVariants: {
              casual: "Bring it back and the money goes right back in. Can't refund the ten bucks though. Done in a day.",
              standard: "Yes, just bring the original check back to any branch and we'll redeposit the funds into your account. The $10 fee is non-refundable, but the full $28,000 goes right back. Processing takes about one business day.",
              formal: "Certainly. Simply present the original cashier's check at any branch location and the full amount of $28,000 will be redeposited into your account. Please note that the $10 processing fee is non-refundable. The redeposit typically requires one business day to process.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 比较手机套餐 ====================
  {
    id: "banking-phone-plan-compare",
    tags: ["phone plan", "手机套餐", "carrier", "data plan", "比较"],
    category: "banking",
    titleZh: "比较手机套餐",
    titleEn: "Comparing Phone Plans",
    description: "在运营商门店咨询和比较不同手机套餐",
    otherRole: "运营商门店销售",
    otherRoleIcon: "📱",
    flows: [
      {
        id: "phone-plan-basic",
        titleZh: "了解基本套餐",
        titleEn: "Understanding Basic Plans",
        description: "初次了解美国手机套餐的选择",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just moved to the US and need a phone plan. I'm not sure what's available. Can you explain your different plans?",
            textZh: "你好，我刚搬到美国，需要一个手机套餐。我不太清楚有什么选择。你能介绍一下你们不同的套餐吗？",
            culturalNote: "美国有四大运营商：T-Mobile、AT&T、Verizon、和新的Dish/Boost。还有很多虚拟运营商（MVNO）如Mint Mobile、Cricket。套餐价格和覆盖范围差异很大。",
            casualVersion: "Hey, I'm new here and need a phone plan. What do you guys offer?",
            commonMistake: {
              wrong: "I want to know your phone packages.",
              correct: "Can you explain your different plans?",
              explanation: "在美国说 plans 而不是 packages，phone plan 是标准术语。",
            },
            formalityVariants: {
              casual: "Just moved here. What phone plans do you have?",
              standard: "Hi, I just moved to the US and need a phone plan. I'm not sure what's available. Can you explain your different plans?",
              formal: "Good afternoon. I have recently relocated to the United States and am in need of a mobile phone plan. Could you please provide an overview of the plans you currently offer?",
            },
          },
          {
            speaker: "them",
            role: "运营商门店销售",
            textEn: "Welcome! We have three tiers. Our basic plan is $40 a month with 5GB of data. Our mid-tier is $55 with unlimited data but slower speeds after 50GB. Our premium is $75 with truly unlimited high-speed data plus a hotspot.",
            textZh: "欢迎！我们有三个档次。基础套餐月费40美元包含5GB流量。中档55美元无限流量但超过50GB后会降速。高档75美元是真正的无限高速流量加热点。",
            keyPhrases: [
              { en: "unlimited data", zh: "无限流量" },
              { en: "hotspot", zh: "热点/个人热点" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure! Three options. Forty bucks for 5 gigs of data. Fifty-five for unlimited but they slow you down after 50 gigs. Or seventy-five for full unlimited with hotspot included.",
                textZh: "好的！三种选择。四十块5G流量。五十五无限但超过50G降速。或者七十五全无限加热点。",
                actionHint: "考虑自己每月的流量使用量",
                frequency: "common",
              },
            ],
            casualVersion: "Three plans. Forty for 5 gigs. Fifty-five for unlimited with a 50 gig cap before they slow you. Seventy-five for full speed unlimited plus hotspot.",
            formalityVariants: {
              casual: "Got three. Forty bucks — 5 gigs. Fifty-five — unlimited but slows after 50. Seventy-five — true unlimited plus hotspot.",
              standard: "Welcome! We have three tiers. Our basic plan is $40 a month with 5GB of data. Our mid-tier is $55 with unlimited data but slower speeds after 50GB. Our premium is $75 with truly unlimited high-speed data plus a hotspot.",
              formal: "Welcome to our store. We offer three service tiers. Our basic plan is $40 per month, which includes 5GB of data. Our mid-tier plan is $55 per month with unlimited data, though speeds may be reduced after 50GB of usage. Our premium plan is $75 per month, featuring truly unlimited high-speed data along with mobile hotspot capability.",
            },
          },
          {
            speaker: "you",
            textEn: "Do any of the plans include international calling? I need to call China regularly.",
            textZh: "套餐里有包含国际通话的吗？我需要经常打电话到中国。",
            culturalNote: "大部分美国手机套餐不包含国际通话，或者只包含到少数国家。打中国通常需要额外购买国际通话包，或使用WeChat/WhatsApp等App通话。",
            casualVersion: "Do any of these come with international calling? I call China a lot.",
            commonMistake: {
              wrong: "Does the plan have China calling?",
              correct: "Do any of the plans include international calling?",
              explanation: "include international calling 是正确表达，不说 have China calling。",
            },
            formalityVariants: {
              casual: "Any of these include calls to China? I call home a lot.",
              standard: "Do any of the plans include international calling? I need to call China regularly.",
              formal: "Do any of these plans include international calling capabilities? I have a frequent need to place calls to China.",
            },
          },
          {
            speaker: "them",
            role: "运营商门店销售",
            textEn: "Our premium plan includes unlimited calling to China and 20 other countries. For the other plans, you can add an international calling add-on for $15 a month, which covers unlimited calls to China, Japan, and most of Asia.",
            textZh: "我们的高档套餐包含无限拨打中国和其他20个国家的电话。其他套餐可以加15美元/月的国际通话附加包，覆盖中国、日本和亚洲大部分国家的无限通话。",
            keyPhrases: [
              { en: "add-on", zh: "附加包/增值服务" },
              { en: "unlimited calling to", zh: "无限拨打" },
            ],
            alternativeExpressions: [
              {
                textEn: "The seventy-five dollar plan has free calls to China and twenty-plus countries built in. On the other plans, it's an extra fifteen a month for an international package — covers China, Japan, and most of Asia.",
                textZh: "七十五的套餐自带免费打中国和二十多个国家。其他套餐加十五块一个月的国际通话包——覆盖中国、日本和亚洲大部分。",
                actionHint: "计算加了附加包后的总费用",
                frequency: "common",
              },
            ],
            casualVersion: "Premium's got free China calling built in. Otherwise it's an extra fifteen bucks a month for an international add-on. Covers China, Japan, and most of Asia.",
            formalityVariants: {
              casual: "Premium includes China calls. Others, add fifteen a month for an international package. Covers most of Asia.",
              standard: "Our premium plan includes unlimited calling to China and 20 other countries. For the other plans, you can add an international calling add-on for $15 a month, which covers unlimited calls to China, Japan, and most of Asia.",
              formal: "Our premium plan incorporates unlimited calling to China and over 20 additional countries at no extra charge. For our other plan tiers, an international calling add-on is available at $15 per month, providing unlimited calling to China, Japan, and the majority of Asian countries.",
            },
          },
          {
            speaker: "you",
            textEn: "So the mid-tier plan plus the international add-on would be $70 — that's almost the same as premium. Is there any reason not to just go with premium?",
            textZh: "那中档套餐加国际通话附加包就是70美元——跟高档差不多。有什么理由不直接选高档吗？",
            culturalNote: "美国消费者做购买决策时经常这样比较各套餐的性价比。指出价格差异很小时，销售通常会推荐更高档的选项。",
            casualVersion: "Mid-tier plus the add-on is seventy — basically the same as premium. Why not just get premium?",
            commonMistake: {
              wrong: "The middle plan plus add-on is same price to premium.",
              correct: "The mid-tier plus the add-on would be $70 — almost the same as premium.",
              explanation: "mid-tier 是中档的说法，almost the same as 比 same price to 更自然。",
            },
            formalityVariants: {
              casual: "Fifty-five plus fifteen is seventy — only five bucks less than premium. Might as well go premium, right?",
              standard: "So the mid-tier plan plus the international add-on would be $70 — that's almost the same as premium. Is there any reason not to just go with premium?",
              formal: "If I understand correctly, the mid-tier plan combined with the international calling add-on would total $70 — merely $5 less than the premium plan. Would there be any reason not to select the premium option given the minimal price differential?",
            },
          },
          {
            speaker: "them",
            role: "运营商门店销售",
            textEn: "Exactly — for five dollars more, you get truly unlimited data, 50GB of hotspot, and premium streaming quality. Most customers in your situation go with premium. Plus, if you bring your own phone, I can waive the activation fee.",
            textZh: "没错——多花5美元，你就能获得真正的无限流量、50GB热点和高清流媒体质量。你这种情况的大部分客户都选高档。而且，如果你自带手机，我可以免掉激活费。",
            keyPhrases: [
              { en: "bring your own phone", zh: "自带手机" },
              { en: "activation fee", zh: "激活费" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yeah, premium is the way to go for just five bucks more. Full speed data, hotspot, HD streaming, international calls. And if you already have a phone, no activation fee.",
                textZh: "对，多五块选高档最划算。全速流量、热点、高清流媒体、国际通话。如果你已经有手机，不收激活费。",
                actionHint: "确认自己的手机是否解锁可用",
                frequency: "common",
              },
            ],
            casualVersion: "For five bucks more, you get everything — full speed, hotspot, HD streaming, China calls. Most people go premium. And bring your own phone, no activation fee.",
            formalityVariants: {
              casual: "Five bucks more for everything unlimited. No brainer. Bring your phone and I'll skip the activation fee.",
              standard: "Exactly — for five dollars more, you get truly unlimited data, 50GB of hotspot, and premium streaming quality. Most customers in your situation go with premium. Plus, if you bring your own phone, I can waive the activation fee.",
              formal: "Precisely. For a marginal increase of $5 per month, the premium plan provides truly unlimited high-speed data, 50GB of mobile hotspot, and premium-quality streaming. The majority of customers in comparable situations select the premium tier. Furthermore, if you are utilizing your own device, I am able to waive the activation fee.",
            },
          },
        ],
      },
      {
        id: "phone-plan-intermediate",
        titleZh: "家庭套餐和合约条款",
        titleEn: "Family Plans and Contract Terms",
        description: "了解家庭套餐和合约细节",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'm interested in a family plan for four lines. My parents are visiting for six months and my spouse needs a line too. What family discounts do you offer?",
            textZh: "我想了解四条线的家庭套餐。我父母来探亲半年，我配偶也需要一条线。你们有什么家庭优惠？",
            culturalNote: "美国运营商的家庭套餐（family plan）通常每增加一条线会打折。四条线比四个单独套餐便宜很多。但要注意合约期限和提前解约费。",
            casualVersion: "Looking at a family plan — four lines. My parents are here for six months, plus my wife needs one. What kind of deals do you have?",
            commonMistake: {
              wrong: "I want family package for four phone lines.",
              correct: "I'm interested in a family plan for four lines.",
              explanation: "family plan 和 lines 是美国运营商的标准术语。",
            },
            formalityVariants: {
              casual: "What's the deal on a family plan? Need four lines — me, my wife, and my parents visiting for six months.",
              standard: "I'm interested in a family plan for four lines. My parents are visiting for six months and my spouse needs a line too. What family discounts do you offer?",
              formal: "I am interested in exploring family plan options for four lines. My parents will be visiting for approximately six months, and my spouse requires a line as well. Could you outline the available family plan discounts?",
            },
          },
          {
            speaker: "them",
            role: "运营商门店销售",
            textEn: "Great timing! Our family plan gives you a big discount — four lines on our premium plan would be $180 total instead of $300 if you paid individually. That's $45 per line. And there's no contract — you can cancel any line at any time.",
            textZh: "来得正好！我们的家庭套餐有大幅优惠——四条线用高档套餐总共180美元，而不是单独买的300美元。相当于每条线45美元。而且没有合约——随时可以取消任何一条线。",
            keyPhrases: [
              { en: "no contract", zh: "无合约" },
              { en: "cancel any line at any time", zh: "随时可取消任何线路" },
            ],
            alternativeExpressions: [
              {
                textEn: "Perfect! Family plan, four lines, premium — a hundred eighty a month total. That's forty-five per person instead of seventy-five. No contract, cancel whenever.",
                textZh: "太好了！家庭套餐，四条线，高档——每月总共一百八。每人四十五而不是七十五。没合约，随时取消。",
                actionHint: "算一下节省了多少钱",
                frequency: "common",
              },
            ],
            casualVersion: "Family plan is a steal. Four premium lines for one-eighty total — forty-five each. No contract, cancel anytime.",
            formalityVariants: {
              casual: "Four lines, premium, one-eighty a month. That's forty-five each instead of seventy-five. No contract. Cancel whenever.",
              standard: "Great timing! Our family plan gives you a big discount — four lines on our premium plan would be $180 total instead of $300 if you paid individually. That's $45 per line. And there's no contract — you can cancel any line at any time.",
              formal: "Your timing is excellent. Our family plan offers a substantial discount. Four lines on our premium plan would total $180 per month, compared to $300 for four individual plans — a savings of $45 per line. Furthermore, our plans are contract-free, allowing you to cancel any line at your convenience.",
            },
          },
          {
            speaker: "you",
            textEn: "That's a good deal. But my parents only need service for six months. Is there an early termination fee if I remove their lines later?",
            textZh: "挺划算的。但我父母只需要用六个月。以后取消他们的线路有提前终止费吗？",
            culturalNote: "美国大运营商现在大多不收合约终止费了（no contract），但如果你分期付款买了手机，取消线路时需要一次性付清剩余手机款。",
            casualVersion: "Nice deal. But my parents only need it for six months. Any fee to drop their lines later?",
            commonMistake: {
              wrong: "Is there cancel fee if I stop their lines?",
              correct: "Is there an early termination fee if I remove their lines?",
              explanation: "early termination fee 是提前终止费的专业术语。",
            },
            formalityVariants: {
              casual: "Cool. My parents only need six months though. Any fees to drop their lines later?",
              standard: "That's a good deal. But my parents only need service for six months. Is there an early termination fee if I remove their lines later?",
              formal: "That is an attractive offer. However, my parents will only require service for approximately six months. Would there be any early termination fees associated with removing their lines at that point?",
            },
          },
          {
            speaker: "them",
            role: "运营商门店销售",
            textEn: "No early termination fee at all — like I said, no contracts. The only thing to keep in mind is if they finance a phone through us. If they bring their own phones, they can leave whenever with zero fees. Your monthly bill would just drop to $120 for two lines.",
            textZh: "完全没有提前终止费——我说了，没合约。唯一要注意的是如果他们通过我们分期买手机。如果自带手机，随时走都不收费。你的月账单会降到两条线120美元。",
            keyPhrases: [
              { en: "finance a phone", zh: "分期付款买手机" },
              { en: "bring their own phones", zh: "自带手机" },
            ],
            alternativeExpressions: [
              {
                textEn: "Zero fees to cancel. Only catch is if they get a phone on payments — they'd have to pay off the balance. Own phone? Walk away anytime, no charge. Your bill goes to a hundred twenty for two lines.",
                textZh: "取消零费用。唯一的坑是如果他们分期买手机——得付清余额。自带手机？随时走，免费。你的账单降到两条线一百二十。",
                actionHint: "让父母自带手机避免分期约束",
                frequency: "common",
              },
            ],
            casualVersion: "No fees. Just don't finance phones for them — if they bring their own, they can leave anytime. Your bill drops to one-twenty for two lines after.",
            formalityVariants: {
              casual: "Zero cancel fees. Just don't get them phones on payments. Own phones? Leave anytime. Bill drops to one-twenty after.",
              standard: "No early termination fee at all — like I said, no contracts. The only thing to keep in mind is if they finance a phone through us. If they bring their own phones, they can leave whenever with zero fees. Your monthly bill would just drop to $120 for two lines.",
              formal: "There are absolutely no early termination fees, as our plans are entirely contract-free. The only consideration would be if they elect to finance a device through our installment program, in which case the remaining balance would need to be settled. If they utilize their own devices, lines may be removed at any time without penalty. Your monthly bill would subsequently adjust to $120 for two lines.",
            },
          },
          {
            speaker: "you",
            textEn: "One more question — my parents don't speak much English. Can they get customer service in Chinese if they have issues?",
            textZh: "还有一个问题——我父母英语不太好。如果他们遇到问题，能用中文客服吗？",
            culturalNote: "美国大运营商通常提供多语言客服，包括中文。可以拨打专门的中文客服热线，或在拨通后选择中文选项。门店也可能有会说中文的员工。",
            casualVersion: "Oh, my parents barely speak English. Can they get help in Chinese?",
            commonMistake: {
              wrong: "Can they have Chinese language service?",
              correct: "Can they get customer service in Chinese?",
              explanation: "customer service in Chinese 是标准表达。",
            },
            formalityVariants: {
              casual: "My parents don't really speak English. Do you guys have Chinese customer service?",
              standard: "One more question — my parents don't speak much English. Can they get customer service in Chinese if they have issues?",
              formal: "I have one additional question. My parents have limited English proficiency. Does your company offer customer service in Mandarin Chinese should they encounter any issues?",
            },
          },
          {
            speaker: "them",
            role: "运营商门店销售",
            textEn: "Absolutely! We have a dedicated Chinese-language support line. They can call and get help in Mandarin or Cantonese. The app also has a Chinese language option. And our store here actually has two Mandarin-speaking staff members, including me!",
            textZh: "当然！我们有专门的中文客服热线。他们可以打电话用普通话或粤语获得帮助。App也有中文选项。我们这家店还有两位会说普通话的员工，包括我！",
            keyPhrases: [
              { en: "dedicated support line", zh: "专线客服" },
              { en: "language option", zh: "语言选项" },
            ],
            alternativeExpressions: [
              {
                textEn: "We've got a Chinese-language hotline — Mandarin and Cantonese. The app works in Chinese too. And two of us here speak Mandarin, so they can come in anytime.",
                textZh: "我们有中文热线——普通话和粤语。App也支持中文。我们店里有两个人会说普通话，所以他们随时可以来。",
                actionHint: "保存中文客服热线号码",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah! Chinese support line for Mandarin and Cantonese. App's in Chinese too. And I speak Mandarin, so they can come see me anytime.",
            formalityVariants: {
              casual: "For sure! Chinese hotline, app in Chinese, and two of us here speak Mandarin. They're covered.",
              standard: "Absolutely! We have a dedicated Chinese-language support line. They can call and get help in Mandarin or Cantonese. The app also has a Chinese language option. And our store here actually has two Mandarin-speaking staff members, including me!",
              formal: "Certainly. We maintain a dedicated Chinese-language customer support line offering assistance in both Mandarin and Cantonese. Our mobile application also provides a Chinese language interface. Additionally, this particular store has two staff members fluent in Mandarin, myself included, who would be happy to assist your parents at any time.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 设置自动扣款 ====================
  {
    id: "banking-autopay-setup",
    tags: ["autopay", "automatic payment", "自动扣款", "recurring", "定期付款"],
    category: "banking",
    titleZh: "设置自动扣款",
    titleEn: "Setting Up Autopay",
    description: "在银行或服务提供商处设置自动扣款和管理定期付款",
    otherRole: "银行客服代表",
    otherRoleIcon: "🏦",
    flows: [
      {
        id: "autopay-basic",
        titleZh: "首次设置自动扣款",
        titleEn: "First Autopay Setup",
        description: "了解并设置第一个自动扣款",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I keep forgetting to pay my bills on time. I'd like to set up autopay for my credit card. How does it work?",
            textZh: "你好，我老是忘记按时还款。我想为信用卡设置自动扣款。怎么操作？",
            culturalNote: "在美国，autopay（自动扣款）非常普遍。信用卡通常可以选择自动还最低还款额、固定金额、或全额。设置全额自动扣款是避免忘记还款和利息的最好方法。",
            casualVersion: "I keep forgetting my bills. How do I set up autopay for my credit card?",
            commonMistake: {
              wrong: "I want to set automatic pay for credit card.",
              correct: "I'd like to set up autopay for my credit card.",
              explanation: "set up 是设置的固定搭配，autopay 是一个词不分开。",
            },
            formalityVariants: {
              casual: "I'm terrible at remembering to pay my bills. How do I do autopay?",
              standard: "Hi, I keep forgetting to pay my bills on time. I'd like to set up autopay for my credit card. How does it work?",
              formal: "Good afternoon. I have been having difficulty maintaining timely bill payments. I would like to establish automatic payments for my credit card account. Could you explain the process?",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "Smart move! You have three autopay options for your credit card: pay the minimum amount due, pay a fixed amount you choose, or pay the full statement balance each month. Which would you prefer?",
            textZh: "聪明的选择！您的信用卡有三种自动扣款选项：付最低还款额、付您选择的固定金额、或每月付清全部账单余额。您想选哪种？",
            keyPhrases: [
              { en: "minimum amount due", zh: "最低还款额" },
              { en: "full statement balance", zh: "全部账单余额" },
            ],
            alternativeExpressions: [
              {
                textEn: "Great idea! Three choices: auto-pay the minimum, a set amount, or the full balance. Most people go with full balance so they never pay interest. What sounds good?",
                textZh: "好主意！三种选择：自动付最低额、固定金额、或全额。大部分人选全额这样永远不用付利息。你觉得哪个好？",
                actionHint: "选择全额还款避免利息",
                frequency: "common",
              },
            ],
            casualVersion: "Nice! Three options: minimum, a set amount, or the full balance. Full balance means no interest ever. Which one?",
            formalityVariants: {
              casual: "Good call! Pay the minimum, a fixed amount, or the full balance. Most people do full. Which one?",
              standard: "Smart move! You have three autopay options for your credit card: pay the minimum amount due, pay a fixed amount you choose, or pay the full statement balance each month. Which would you prefer?",
              formal: "That is an excellent decision. For your credit card, we offer three autopay configurations: payment of the minimum amount due, payment of a fixed amount of your choosing, or payment of the full statement balance each billing cycle. Which option would best suit your needs?",
            },
          },
          {
            speaker: "you",
            textEn: "I'll go with the full statement balance. I never want to pay interest. Which account will it pull from — my checking or savings?",
            textZh: "我选全额还清。我不想付利息。会从哪个账户扣——支票账户还是储蓄账户？",
            culturalNote: "自动扣款通常从支票账户（checking account）扣款。从储蓄账户频繁转出有次数限制（联邦规定每月最多6次），超出可能收费。",
            casualVersion: "Full balance, for sure. Does it come out of my checking or savings?",
            commonMistake: {
              wrong: "I choose full pay. From which account it takes money?",
              correct: "I'll go with the full statement balance. Which account will it pull from?",
              explanation: "go with 表示选择，pull from 表示从哪里扣款，是银行场景的常用表达。",
            },
            formalityVariants: {
              casual: "Full balance. No interest for me. Does it pull from checking or savings?",
              standard: "I'll go with the full statement balance. I never want to pay interest. Which account will it pull from — my checking or savings?",
              formal: "I would like to select the full statement balance option. I wish to avoid any interest charges entirely. Could you specify which account the payments will be debited from — my checking or savings account?",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "You can choose either, but I'd recommend your checking account. Savings accounts have a federal limit of six outgoing transfers per month. I'll link your checking account ending in 4521. Sound good?",
            textZh: "都可以，但我建议用支票账户。储蓄账户有联邦规定的每月六次转出限制。我把您尾号4521的支票账户关联上。可以吗？",
            keyPhrases: [
              { en: "federal limit", zh: "联邦限制" },
              { en: "outgoing transfers", zh: "转出交易" },
            ],
            alternativeExpressions: [
              {
                textEn: "Either works, but checking is better. Savings has a six-transaction limit per month — you could get fees if you go over. I'll set it up with your checking account ending in 4521.",
                textZh: "都行，但支票账户更好。储蓄账户每月有六次交易限制——超了可能收费。我用你尾号4521的支票账户设置。",
                actionHint: "确认是正确的支票账户",
                frequency: "common",
              },
            ],
            casualVersion: "Go with checking. Savings has a six-transfer limit per month. I'll use your checking ending in 4521. Good?",
            formalityVariants: {
              casual: "Use checking — savings has a transfer limit. I'll link the one ending in 4521. Cool?",
              standard: "You can choose either, but I'd recommend your checking account. Savings accounts have a federal limit of six outgoing transfers per month. I'll link your checking account ending in 4521. Sound good?",
              formal: "While either account may be utilized, I would recommend linking your checking account. Savings accounts are subject to a federal regulation limiting outgoing transfers to six per statement cycle. I shall link your checking account ending in 4521 as the payment source. Does that meet your approval?",
            },
          },
          {
            speaker: "you",
            textEn: "Sounds good. When will the payment be processed each month? And will I get a notification before it's charged?",
            textZh: "好的。每月什么时候扣款？扣款前会通知我吗？",
            culturalNote: "信用卡的自动扣款通常在账单到期日（due date）当天或之前扣款。大部分银行会在扣款前几天发送提醒，让你确保账户里有足够余额。",
            casualVersion: "Cool. When does it charge me each month? Do I get a heads-up before it hits?",
            commonMistake: {
              wrong: "When will it take money each month?",
              correct: "When will the payment be processed each month?",
              explanation: "payment is processed 是扣款处理的标准表达，比 take money 更专业。",
            },
            formalityVariants: {
              casual: "When does it charge? And do I get a reminder before?",
              standard: "Sounds good. When will the payment be processed each month? And will I get a notification before it's charged?",
              formal: "That is acceptable. Could you inform me of the date on which the automatic payment will be processed each month? Additionally, will I receive advance notification prior to the deduction?",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "The payment processes on your due date, which is the 15th of each month. You'll get an email reminder three days before with the exact amount. Just make sure your checking account has enough funds by then. You're all set!",
            textZh: "扣款在您的到期日处理，也就是每月15号。扣款前三天您会收到一封包含确切金额的邮件提醒。只要确保到时支票账户里有足够余额就好。设置完成了！",
            keyPhrases: [
              { en: "due date", zh: "到期日" },
              { en: "you're all set", zh: "设置完成了" },
            ],
            alternativeExpressions: [
              {
                textEn: "It'll hit on the 15th — your due date. We'll email you three days ahead with the amount, so you can make sure you've got the funds. Done! You're all set.",
                textZh: "每月15号扣——你的到期日。提前三天邮件告诉你金额，确保你有钱就行。好了！全部设置好了。",
                actionHint: "每月12号前确认余额",
                frequency: "common",
              },
            ],
            casualVersion: "Charges on the 15th — your due date. Email reminder three days before with the amount. Make sure you've got the cash in checking. Done!",
            formalityVariants: {
              casual: "Hits on the 15th. You'll get an email three days early. Just make sure checking has enough. You're good!",
              standard: "The payment processes on your due date, which is the 15th of each month. You'll get an email reminder three days before with the exact amount. Just make sure your checking account has enough funds by then. You're all set!",
              formal: "The automatic payment will be processed on your statement due date, the 15th of each month. An email notification will be dispatched three days prior, detailing the precise amount to be debited. Please ensure that sufficient funds are available in your checking account by that date. Your autopay enrollment is now complete.",
            },
          },
        ],
      },
      {
        id: "autopay-intermediate",
        titleZh: "管理多项自动扣款",
        titleEn: "Managing Multiple Autopay Accounts",
        description: "管理和调整多个服务的自动扣款设置",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I have autopay set up for several things — rent, utilities, phone bill, and two credit cards. But last month my checking account got overdrawn because everything hit on the same day. Can I stagger the payment dates?",
            textZh: "我设了好几个自动扣款——房租、水电、手机费和两张信用卡。但上个月因为全在同一天扣导致透支了。能错开扣款日期吗？",
            culturalNote: "在美国管理多项自动扣款时，错开日期（stagger）是很重要的理财技巧。有些账单可以选择扣款日，有些（比如房租）通常固定在每月1号。",
            casualVersion: "I've got autopay on like five things and they all hit at once and I got overdrawn. Can I spread them out?",
            commonMistake: {
              wrong: "Can I separate the pay dates?",
              correct: "Can I stagger the payment dates?",
              explanation: "stagger 是错开安排的标准说法，比 separate 更准确。",
            },
            formalityVariants: {
              casual: "All my autopays hit the same day and I overdrafted. Can I space them out?",
              standard: "I have autopay set up for several things — rent, utilities, phone bill, and two credit cards. But last month my checking account got overdrawn because everything hit on the same day. Can I stagger the payment dates?",
              formal: "I currently have automatic payments configured for several obligations — rent, utilities, telephone service, and two credit cards. Unfortunately, the concurrent processing of all payments on the same date resulted in an overdraft last month. Is it possible to stagger the respective payment dates?",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "Absolutely. For your two credit cards with us, I can change the due dates to any day you want. Utility companies and phone carriers usually let you pick a date too. The only tricky one is rent — most landlords require the 1st. Let's map out a schedule.",
            textZh: "当然可以。您在我们这里的两张信用卡，我可以把到期日改到您想要的任何一天。水电公司和手机运营商通常也让你选日期。唯一麻烦的是房租——大部分房东要求1号。我们来安排一个时间表。",
            keyPhrases: [
              { en: "change the due dates", zh: "更改到期日" },
              { en: "map out a schedule", zh: "规划时间表" },
            ],
            alternativeExpressions: [
              {
                textEn: "For sure. Your credit cards with us — I can move those due dates around. Utilities and phone, you can usually change those too. Rent's usually stuck on the first. Let's spread everything out.",
                textZh: "没问题。你在我们这里的信用卡——我可以改到期日。水电和手机通常也能改。房租一般只能在一号。我们把所有的分散开。",
                actionHint: "让工资日在最多扣款日之前",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah! I can change your credit card dates. Utilities and phone usually let you pick too. Rent's almost always the first. Let's spread them out.",
            formalityVariants: {
              casual: "Sure! Credit card dates I can move. Utilities and phone, usually flexible. Rent — stuck on the 1st. Let's figure it out.",
              standard: "Absolutely. For your two credit cards with us, I can change the due dates to any day you want. Utility companies and phone carriers usually let you pick a date too. The only tricky one is rent — most landlords require the 1st. Let's map out a schedule.",
              formal: "Certainly. For your two credit card accounts held with our institution, I can adjust the due dates to any day of your choosing. Most utility providers and telecommunications carriers also offer flexible billing date options. The primary exception tends to be rent, which most landlords require on the first of the month. Allow me to assist you in mapping out an optimized payment schedule.",
            },
          },
          {
            speaker: "you",
            textEn: "My paycheck hits on the 1st and 15th. Can we put rent and utilities on the 1st, one credit card on the 10th, and the phone and other card on the 20th?",
            textZh: "我的工资每月1号和15号到账。能不能把房租和水电放在1号，一张信用卡在10号，手机费和另一张卡在20号？",
            culturalNote: "美国很多工作是bi-weekly（每两周一次）或semi-monthly（每月两次）发薪。合理安排账单日期跟工资日配合是避免透支的关键。",
            casualVersion: "I get paid on the 1st and 15th. Can we do rent and utilities on the 1st, one card on the 10th, phone and other card on the 20th?",
            commonMistake: {
              wrong: "My salary comes 1st and 15th. Can I put bills on different days?",
              correct: "My paycheck hits on the 1st and 15th. Can we spread the bills across those pay periods?",
              explanation: "paycheck hits 是工资到账的口语表达，pay periods 比 different days 更精确。",
            },
            formalityVariants: {
              casual: "Paid on the 1st and 15th. Rent and utilities on the 1st, one card on the 10th, phone and other card on the 20th. Work?",
              standard: "My paycheck hits on the 1st and 15th. Can we put rent and utilities on the 1st, one credit card on the 10th, and the phone and other card on the 20th?",
              formal: "My compensation is deposited on the 1st and 15th of each month. Could we arrange for rent and utilities on the 1st, one credit card on the 10th, and the telephone and remaining credit card on the 20th?",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "That's a smart way to spread them out. I'll change your Visa to the 10th and your Mastercard to the 20th right now. For utilities and phone, you'll need to call them directly or change it through their apps. It usually takes one billing cycle to take effect.",
            textZh: "这样分散很聪明。我现在就把您的Visa改到10号，Mastercard改到20号。水电和手机您需要直接打电话给他们或通过他们的App修改。通常需要一个账单周期生效。",
            keyPhrases: [
              { en: "billing cycle", zh: "账单周期" },
              { en: "take effect", zh: "生效" },
            ],
            alternativeExpressions: [
              {
                textEn: "Great plan. Done — Visa moves to the 10th, Mastercard to the 20th. For your utilities and phone, change it in their app or give them a call. Usually kicks in next billing cycle.",
                textZh: "好计划。搞定——Visa改到10号，Mastercard改到20号。水电和手机在他们App里改或者打电话。通常下个账单周期生效。",
                actionHint: "联系水电公司和手机运营商修改扣款日",
                frequency: "common",
              },
            ],
            casualVersion: "Smart plan. Visa is now the 10th, Mastercard the 20th. For utilities and phone, call them or use their app. Takes one cycle to kick in.",
            formalityVariants: {
              casual: "Nice plan. Done — Visa on the 10th, Mastercard on the 20th. Call your utilities and phone to change theirs. Takes a cycle.",
              standard: "That's a smart way to spread them out. I'll change your Visa to the 10th and your Mastercard to the 20th right now. For utilities and phone, you'll need to call them directly or change it through their apps. It usually takes one billing cycle to take effect.",
              formal: "That is a well-considered distribution strategy. I shall adjust your Visa due date to the 10th and your Mastercard to the 20th effective immediately. For your utility and telecommunications providers, you will need to contact them directly or modify the billing date through their respective applications. Please note that changes typically require one billing cycle to take effect.",
            },
          },
          {
            speaker: "you",
            textEn: "What happens if autopay tries to charge my account and there aren't enough funds? Will it retry or just fail?",
            textZh: "如果自动扣款时账户余额不够会怎样？会重试还是直接失败？",
            culturalNote: "自动扣款失败可能导致滞纳金（late fee）、退回费（returned payment fee），还可能影响信用分。这就是为什么保持足够余额很重要。",
            casualVersion: "What if there's not enough money when autopay tries to charge? Does it try again or just fail?",
            commonMistake: {
              wrong: "What happen if the money is not enough when autopay charge?",
              correct: "What happens if there aren't enough funds when autopay tries to charge?",
              explanation: "what happens 用第三人称单数，enough funds 是余额不足的标准表达。",
            },
            formalityVariants: {
              casual: "What if I'm short when autopay hits? Does it retry?",
              standard: "What happens if autopay tries to charge my account and there aren't enough funds? Will it retry or just fail?",
              formal: "In the event that insufficient funds are available at the time of an automatic payment attempt, what is the outcome? Would the system attempt a subsequent charge, or would the payment simply fail?",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "If there aren't enough funds, the payment will be returned and you could face a returned payment fee of $25, plus a late fee from the biller. Most billers retry once after a few days. To avoid this, I'd suggest setting up that low-balance alert we talked about — get notified when you drop below $500 so you have time to transfer money in.",
            textZh: "如果余额不够，付款会被退回，您可能被收取25美元的退回付款费，加上账单方的滞纳金。大部分账单方会在几天后重试一次。为了避免这种情况，建议设置我们之前说的低余额提醒——余额低于500美元时通知您，这样还有时间转钱进来。",
            keyPhrases: [
              { en: "returned payment fee", zh: "退回付款费" },
              { en: "low-balance alert", zh: "低余额提醒" },
            ],
            alternativeExpressions: [
              {
                textEn: "The payment bounces and you might get hit with a twenty-five dollar returned payment fee, plus whatever late fee the biller charges. They usually try again in a couple days. Set up a low-balance alert at five hundred bucks so you have a heads-up.",
                textZh: "付款被退回，可能被收二十五块退回费，再加上账单方的滞纳金。通常几天后会重试。设个五百块的低余额提醒，提前给你预警。",
                actionHint: "设置多层安全保护避免扣款失败",
                frequency: "common",
              },
            ],
            casualVersion: "Payment bounces, you get a $25 fee plus a late fee. Most will retry in a few days. Set up a low-balance alert at $500 so you see it coming.",
            formalityVariants: {
              casual: "It bounces. Twenty-five dollar fee from us, late fee from them. They'll try again in a few days. Set a low-balance alert so you're ready.",
              standard: "If there aren't enough funds, the payment will be returned and you could face a returned payment fee of $25, plus a late fee from the biller. Most billers retry once after a few days. To avoid this, I'd suggest setting up that low-balance alert we talked about — get notified when you drop below $500 so you have time to transfer money in.",
              formal: "In the event of insufficient funds, the payment would be returned, potentially incurring a $25 returned payment fee from our institution in addition to any late payment fees assessed by the billing entity. Most billers will typically reattempt the charge after several days. To mitigate this risk, I would recommend configuring a low-balance alert notification at a threshold of $500, providing you with adequate time to arrange for additional funds.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 储蓄账户 ====================
  {
    id: "banking-savings-account",
    tags: ["savings", "储蓄", "interest", "存钱", "savings account"],
    category: "banking",
    titleZh: "储蓄账户",
    titleEn: "Savings Account",
    description: "在银行咨询和开设储蓄账户，了解利率和取款限制",
    otherRole: "银行客户经理",
    otherRoleIcon: "🏦",
    flows: [
      {
        id: "savings-account-basic",
        titleZh: "咨询储蓄账户",
        titleEn: "Inquiring About Savings Accounts",
        description: "了解储蓄账户的基本类型和利率",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to open a savings account. What types of savings accounts do you offer?",
            textZh: "你好，我想开一个储蓄账户。你们有哪些类型的储蓄账户？",
            culturalNote: "美国银行的储蓄账户主要分为 regular savings、high-yield savings 和 money market account。高利率账户通常对最低余额有要求。",
            casualVersion: "Hey, I want to open a savings account. What do you have?",
            commonMistake: {
              wrong: "I want to save money in your bank.",
              correct: "I'd like to open a savings account.",
              explanation: "open a savings account 是标准说法，不能直接说 save money in your bank。",
            },
            formalityVariants: {
              casual: "Looking to open a savings account. What are my options?",
              standard: "Hi, I'd like to open a savings account. What types of savings accounts do you offer?",
              formal: "Good afternoon. I'm interested in establishing a savings account with your institution. Could you outline the savings account options currently available?",
            },
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "We have three options. Our basic savings earns 0.5% APY with no minimum balance. Our high-yield savings offers 4.5% APY but requires a $1,000 minimum. And our money market account gives 4.8% APY with a $5,000 minimum and comes with check-writing privileges.",
            textZh: "我们有三种选择。基础储蓄账户年利率0.5%，没有最低余额要求。高收益储蓄账户年利率4.5%，但要求最低余额1,000美元。还有货币市场账户，年利率4.8%，最低余额5,000美元，可以开支票。",
            keyPhrases: [
              { en: "APY (Annual Percentage Yield)", zh: "年百分比收益率" },
              { en: "minimum balance", zh: "最低余额" },
            ],
            alternativeExpressions: [
              {
                textEn: "Three choices. Basic savings — half a percent, no minimum. High-yield — four and a half percent but you need a grand to start. Money market — four point eight percent, five grand minimum, plus you can write checks from it.",
                textZh: "三种选择。基础储蓄——利率0.5%，没门槛。高收益——4.5%但最少存一千。货币市场——4.8%，最少五千，还能开支票。",
                actionHint: "对比三种账户选择适合自己的",
                frequency: "common",
              },
            ],
            casualVersion: "Three options. Basic at half a percent, no minimum. High-yield at four and a half percent, thousand dollar minimum. Money market at four point eight, five grand minimum, and you can write checks.",
            formalityVariants: {
              casual: "Basic — half percent, no minimum. High-yield — four and a half, need a grand. Money market — four-eight, five grand, plus check-writing.",
              standard: "We have three options. Our basic savings earns 0.5% APY with no minimum balance. Our high-yield savings offers 4.5% APY but requires a $1,000 minimum. And our money market account gives 4.8% APY with a $5,000 minimum and comes with check-writing privileges.",
              formal: "We offer three savings vehicles. Our standard savings account provides a 0.5% annual percentage yield with no minimum balance requirement. Our high-yield savings account offers a 4.5% APY, subject to a $1,000 minimum balance. Additionally, our money market account yields 4.8% APY with a $5,000 minimum balance and includes check-writing privileges.",
            },
          },
          {
            speaker: "you",
            textEn: "The high-yield sounds good. Are there any withdrawal limits or fees I should know about?",
            textZh: "高收益听起来不错。有什么取款限制或费用我需要知道的吗？",
            culturalNote: "美国储蓄账户以前受 Regulation D 限制每月只能取款6次，疫情后很多银行已取消此限制，但部分银行仍有类似规则。",
            casualVersion: "High-yield sounds good. Any limits or fees on withdrawals?",
            commonMistake: {
              wrong: "How many times can I take money?",
              correct: "Are there any withdrawal limits?",
              explanation: "withdrawal limits 是正确术语，take money 太口语化且不明确。",
            },
            formalityVariants: {
              casual: "I'll go with high-yield. Any catch with withdrawals?",
              standard: "The high-yield sounds good. Are there any withdrawal limits or fees I should know about?",
              formal: "The high-yield savings account appears most suitable. Could you please detail any withdrawal restrictions or associated fees I should be aware of?",
            },
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "You get six free withdrawals per month. After that, there's a $10 fee per transaction. Also, if your balance drops below $1,000, the rate falls to our basic rate of 0.5% until you bring it back up.",
            textZh: "每月有6次免费取款。之后每笔收10美元手续费。另外，如果余额低于1,000美元，利率会降到基础的0.5%，直到余额恢复。",
            keyPhrases: [
              { en: "free withdrawals per month", zh: "每月免费取款次数" },
              { en: "the rate falls to", zh: "利率降至" },
            ],
            alternativeExpressions: [
              {
                textEn: "Six free withdrawals a month. After that it's ten bucks each. And if you go under a thousand, your rate drops to the basic half percent until you top it back up.",
                textZh: "每月6次免费取款。之后每次十块。余额低于一千的话利率降到基础的0.5%，直到你补回来。",
                actionHint: "确认自己的取款频率是否合适",
                frequency: "common",
              },
            ],
            casualVersion: "Six free withdrawals a month, ten bucks each after that. Drop below a grand and you lose the high rate until you bring it back.",
            formalityVariants: {
              casual: "Six free pulls a month. Ten bucks after that. Go under a grand, rate drops to basic.",
              standard: "You get six free withdrawals per month. After that, there's a $10 fee per transaction. Also, if your balance drops below $1,000, the rate falls to our basic rate of 0.5% until you bring it back up.",
              formal: "The account permits six complimentary withdrawals per statement cycle. Subsequent transactions incur a $10 fee per occurrence. Additionally, should the account balance fall below the $1,000 minimum threshold, the yield will revert to our standard savings rate of 0.5% until the minimum balance is restored.",
            },
          },
          {
            speaker: "you",
            textEn: "That works for me. I'd like to open the high-yield account with an initial deposit of $3,000. What do I need?",
            textZh: "可以接受。我想开高收益账户，初始存入3,000美元。需要什么材料？",
            culturalNote: "在美国开银行账户通常需要两种身份证件（如护照+签证/I-20）和一个美国地址证明。有些银行接受 ITIN 代替 SSN。",
            casualVersion: "Sounds good. I'll open the high-yield with three grand. What do I need to bring?",
            commonMistake: {
              wrong: "I want to put $3,000 in this account.",
              correct: "I'd like to open the account with an initial deposit of $3,000.",
              explanation: "initial deposit 是银行开户的标准用语，比 put money in 更专业。",
            },
            formalityVariants: {
              casual: "Let's do it. Three grand to start. What do you need from me?",
              standard: "That works for me. I'd like to open the high-yield account with an initial deposit of $3,000. What do I need?",
              formal: "Those terms are acceptable. I would like to proceed with opening the high-yield savings account with an initial deposit of $3,000. What documentation will be required?",
            },
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "I'll need a valid photo ID — passport works great — and your Social Security number or ITIN. If you don't have an SSN yet, we can use your passport and visa. I'll also need a US mailing address. The whole process takes about fifteen minutes.",
            textZh: "我需要一个有效的带照片的证件——护照就可以——还有你的社会安全号码或ITIN。如果你还没有SSN，可以用护照和签证。我还需要一个美国邮寄地址。整个过程大约十五分钟。",
            keyPhrases: [
              { en: "Social Security number or ITIN", zh: "社会安全号码或个人纳税识别号" },
              { en: "US mailing address", zh: "美国邮寄地址" },
            ],
            alternativeExpressions: [
              {
                textEn: "Just bring your passport and your Social or ITIN. No Social yet? Passport plus visa works. Need a US address too. Takes about fifteen minutes to get you set up.",
                textZh: "带护照和社安号或ITIN就行。还没有社安号？护照加签证也行。还需要一个美国地址。大约十五分钟搞定。",
                actionHint: "准备好所需证件",
                frequency: "common",
              },
            ],
            casualVersion: "Passport, Social or ITIN, and a US address. No Social? Passport plus visa is fine. Fifteen minutes and you're all set.",
            formalityVariants: {
              casual: "Passport, Social or ITIN, US address. No Social yet? Passport and visa work. About fifteen minutes.",
              standard: "I'll need a valid photo ID — passport works great — and your Social Security number or ITIN. If you don't have an SSN yet, we can use your passport and visa. I'll also need a US mailing address. The whole process takes about fifteen minutes.",
              formal: "I will require a valid government-issued photo identification — a passport is perfectly acceptable — along with your Social Security number or Individual Taxpayer Identification Number. In the absence of an SSN, we can proceed with your passport and visa documentation. A United States mailing address will also be necessary. The account opening process typically takes approximately fifteen minutes.",
            },
          },
        ],
      },
      {
        id: "savings-account-intermediate",
        titleZh: "储蓄策略和CD",
        titleEn: "Savings Strategy and CDs",
        description: "讨论储蓄策略和定期存款选项",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I already have a high-yield savings account here. I'm thinking about putting some money into a CD for a better rate. What terms do you have available?",
            textZh: "我已经在这里有一个高收益储蓄账户了。我在考虑把一些钱放进CD获取更高利率。你们有什么期限可选？",
            culturalNote: "CD (Certificate of Deposit) 是美国的定期存款产品，利率通常高于储蓄账户，但提前取款会有罚金。期限从3个月到5年不等。",
            casualVersion: "I've got a high-yield savings here already. Thinking about CDs. What rates and terms do you have?",
            commonMistake: {
              wrong: "I want to make a fixed deposit.",
              correct: "I'm thinking about putting money into a CD.",
              explanation: "美国说 CD (Certificate of Deposit)，不说 fixed deposit（那是英式/亚洲说法）。",
            },
            formalityVariants: {
              casual: "Already have savings here. What's the deal with your CDs?",
              standard: "I already have a high-yield savings account here. I'm thinking about putting some money into a CD for a better rate. What terms do you have available?",
              formal: "I am an existing high-yield savings account holder at your institution. I am considering allocating a portion of my funds into a Certificate of Deposit to achieve a higher yield. Could you please outline the terms and rates currently available?",
            },
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "Great timing — our CD rates are very competitive right now. A 6-month CD is at 5.0% APY, 12-month at 5.2%, and 18-month at 4.9%. The minimum for all CDs is $500. Keep in mind, if you withdraw early, there's a penalty — typically 90 days of interest for CDs under a year, and 180 days for longer terms.",
            textZh: "时机很好——我们的CD利率现在很有竞争力。6个月CD年利率5.0%，12个月5.2%，18个月4.9%。所有CD最低500美元。注意提前取款有罚金——一年以内的CD通常罚90天利息，更长期限的罚180天。",
            keyPhrases: [
              { en: "early withdrawal penalty", zh: "提前取款罚金" },
              { en: "competitive rates", zh: "有竞争力的利率" },
            ],
            alternativeExpressions: [
              {
                textEn: "Good time for CDs. Six months at five percent, twelve months at five-two, eighteen at four-nine. Five hundred minimum. Early withdrawal costs you ninety days of interest for short CDs, one-eighty for longer ones.",
                textZh: "现在买CD是好时候。六个月5%，十二个月5.2%，十八个月4.9%。最少五百。提前取短期罚九十天利息，长期罚一百八十天。",
                actionHint: "计算不同期限的实际收益",
                frequency: "common",
              },
            ],
            casualVersion: "CDs are looking good right now. Six months — five percent. Twelve months — five-two. Eighteen months — four-nine. Five hundred minimum. Pull out early and you lose ninety to a hundred eighty days of interest.",
            formalityVariants: {
              casual: "Rates are great. Six months at five, twelve at five-two, eighteen at four-nine. Five hundred to start. Early out costs you ninety to a hundred eighty days of interest.",
              standard: "Great timing — our CD rates are very competitive right now. A 6-month CD is at 5.0% APY, 12-month at 5.2%, and 18-month at 4.9%. The minimum for all CDs is $500. Keep in mind, if you withdraw early, there's a penalty — typically 90 days of interest for CDs under a year, and 180 days for longer terms.",
              formal: "Your timing is excellent — our Certificate of Deposit rates are exceptionally competitive at present. We are offering a 6-month CD at 5.0% APY, a 12-month CD at 5.2% APY, and an 18-month CD at 4.9% APY. The minimum deposit for all CDs is $500. Please be advised that early withdrawal is subject to a penalty — typically equivalent to 90 days of accrued interest for terms under one year, and 180 days for longer-term certificates.",
            },
          },
          {
            speaker: "you",
            textEn: "The 12-month CD looks best. What happens when it matures? Does it automatically renew?",
            textZh: "12个月的CD看起来最好。到期后怎么处理？会自动续期吗？",
            culturalNote: "美国大部分银行的CD到期后会自动续期（auto-renew），通常有一个7-10天的宽限期可以取出。如果不想续期，需要提前通知银行。",
            casualVersion: "I like the 12-month. What happens when it's done? Does it roll over?",
            commonMistake: {
              wrong: "When the CD is finished, what will happen?",
              correct: "What happens when it matures?",
              explanation: "CD到期用 matures，不用 finishes。roll over 或 auto-renew 是续期的说法。",
            },
            formalityVariants: {
              casual: "Twelve-month looks good. Does it auto-renew or what?",
              standard: "The 12-month CD looks best. What happens when it matures? Does it automatically renew?",
              formal: "The 12-month certificate appears most favorable. Could you clarify the maturity procedures? Does the certificate automatically renew upon maturation?",
            },
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "Yes, it auto-renews at the prevailing rate unless you tell us otherwise. You'll get a maturity notice about two weeks before, and then you have a 10-day grace period to withdraw or change the term without penalty. I'd also recommend considering a CD ladder — splitting your money across different terms so you have regular access to portions of your funds.",
            textZh: "是的，到期后会按当时的利率自动续期，除非你另有指示。到期前两周左右会收到通知，然后有10天宽限期可以免罚金取款或更改期限。我还建议考虑CD阶梯策略——把钱分到不同期限，这样定期都有一部分资金到期可用。",
            keyPhrases: [
              { en: "grace period", zh: "宽限期" },
              { en: "CD ladder", zh: "CD阶梯策略" },
            ],
            alternativeExpressions: [
              {
                textEn: "It rolls over automatically at whatever rate we're offering then. You get a heads-up two weeks out, and ten days after maturity to pull it or switch terms, no penalty. Also, think about a CD ladder — spread your money across different terms so something's always coming due.",
                textZh: "到期自动按当时利率续。提前两周通知你，到期后十天内取或换期限都没罚金。另外考虑CD阶梯——把钱分到不同期限，这样总有一笔要到期。",
                actionHint: "考虑CD阶梯策略优化流动性",
                frequency: "common",
              },
            ],
            casualVersion: "It rolls over unless you say stop. You'll get a notice two weeks out, then ten days to grab it or change terms. Think about a CD ladder too — spread it across different terms so you always have money coming available.",
            formalityVariants: {
              casual: "Auto-renews unless you stop it. Two weeks' notice, ten-day window to pull out or switch. Also look into a CD ladder — split your money so something's always maturing.",
              standard: "Yes, it auto-renews at the prevailing rate unless you tell us otherwise. You'll get a maturity notice about two weeks before, and then you have a 10-day grace period to withdraw or change the term without penalty. I'd also recommend considering a CD ladder — splitting your money across different terms so you have regular access to portions of your funds.",
              formal: "Indeed, the certificate will automatically renew at the prevailing rate at the time of maturity unless alternative instructions are provided. A maturity notification will be issued approximately two weeks prior to the maturity date, followed by a 10-day grace period during which you may withdraw funds or modify the term without incurring any penalty. I would also recommend considering a CD ladder strategy — distributing your funds across multiple term lengths to maintain periodic access to portions of your capital.",
            },
          },
          {
            speaker: "you",
            textEn: "A CD ladder sounds smart. Could you help me set one up? I have $10,000 I'd like to allocate across different terms.",
            textZh: "CD阶梯策略听起来很聪明。你能帮我设置一个吗？我有10,000美元想分配到不同期限。",
            culturalNote: "CD ladder 是美国常见的储蓄策略，比如把钱平均分成3-5份，分别存3个月、6个月、9个月、12个月的CD，每份到期后续存最长期限。",
            casualVersion: "CD ladder sounds like the way to go. Can you set that up for me? I've got ten grand to work with.",
            commonMistake: {
              wrong: "I want to divide my money to different CDs.",
              correct: "Could you help me set up a CD ladder? I have $10,000 to allocate.",
              explanation: "set up a CD ladder 和 allocate across terms 是专业说法。",
            },
            formalityVariants: {
              casual: "Let's do the ladder thing. Got ten grand. How should I split it?",
              standard: "A CD ladder sounds smart. Could you help me set one up? I have $10,000 I'd like to allocate across different terms.",
              formal: "The CD ladder strategy appears quite prudent. Would you be able to assist me in establishing one? I have $10,000 that I would like to allocate across varying term lengths.",
            },
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "Absolutely. Here's what I'd suggest: split the $10,000 into four equal portions of $2,500. Put $2,500 into a 6-month, $2,500 into a 12-month, $2,500 into an 18-month, and $2,500 into a 24-month CD. Every six months, one CD matures and you can either use the money or roll it into a new 24-month CD at the top of the ladder. That way, you're always within six months of having some cash available.",
            textZh: "当然可以。我建议这样分：把10,000美元分成四等份，每份2,500。分别存6个月、12个月、18个月和24个月的CD。每六个月就有一个CD到期，你可以用钱或者续存到新的24个月CD。这样你最多等六个月就有一笔钱可用。",
            keyPhrases: [
              { en: "roll it into a new CD", zh: "续存到新的CD" },
              { en: "at the top of the ladder", zh: "阶梯的最长期限端" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure. Four chunks of twenty-five hundred each. Six-month, twelve-month, eighteen-month, and twenty-four-month CDs. Every six months one matures — use it or roll it into a fresh twenty-four-month. You're never more than six months from cash.",
                textZh: "好的。四份各两千五。六个月、十二个月、十八个月、二十四个月。每六个月到期一个——用掉或者续一个新的二十四个月。最多六个月就有钱到手。",
                actionHint: "确认每六个月的到期日安排",
                frequency: "common",
              },
            ],
            casualVersion: "Four pots of twenty-five hundred. Six, twelve, eighteen, and twenty-four month CDs. Every six months one comes due — use it or roll it. You're always within six months of cash.",
            formalityVariants: {
              casual: "Twenty-five hundred in four CDs — six, twelve, eighteen, twenty-four months. One matures every six months. Roll it or take it.",
              standard: "Absolutely. Here's what I'd suggest: split the $10,000 into four equal portions of $2,500. Put $2,500 into a 6-month, $2,500 into a 12-month, $2,500 into an 18-month, and $2,500 into a 24-month CD. Every six months, one CD matures and you can either use the money or roll it into a new 24-month CD at the top of the ladder. That way, you're always within six months of having some cash available.",
              formal: "Certainly. I would recommend dividing the $10,000 into four equal allocations of $2,500 each, distributed as follows: $2,500 in a 6-month CD, $2,500 in a 12-month CD, $2,500 in an 18-month CD, and $2,500 in a 24-month CD. At six-month intervals, one certificate will mature, at which point you may either access the funds or reinvest into a new 24-month CD at the longest end of the ladder. This ensures you are never more than six months from having a portion of your capital accessible.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 汇票 ====================
  {
    id: "banking-money-order",
    tags: ["money order", "汇票", "payment", "postal order"],
    category: "banking",
    titleZh: "汇票",
    titleEn: "Money Order",
    description: "在银行或邮局购买汇票用于安全支付",
    otherRole: "银行柜员",
    otherRoleIcon: "🏦",
    flows: [
      {
        id: "money-order-basic",
        titleZh: "购买汇票",
        titleEn: "Purchasing a Money Order",
        description: "第一次购买汇票，了解流程和费用",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to buy a money order for $800. Is that something I can do here?",
            textZh: "你好，我需要买一张800美元的汇票。这里可以办吗？",
            culturalNote: "美国汇票可以在银行、邮局(USPS)、Walmart、7-Eleven等处购买。银行的汇票上限通常是$1,000，邮局也是$1,000，Walmart上限$1,000。银行汇票费用通常$5-10，邮局$1.75-2.40。",
            casualVersion: "Hey, can I get a money order here? Need one for eight hundred bucks.",
            commonMistake: {
              wrong: "I want to make a money order.",
              correct: "I need to buy a money order.",
              explanation: "汇票是 buy/purchase a money order，不是 make。",
            },
            formalityVariants: {
              casual: "Can I get an eight-hundred-dollar money order here?",
              standard: "Hi, I need to buy a money order for $800. Is that something I can do here?",
              formal: "Good morning. I would like to purchase a money order in the amount of $800. Is this service available at this branch?",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Yes, absolutely. We issue money orders up to $1,000. For $800, the fee is $5. We'll need the exact amount in cash or from your checking account. Who should I make it payable to?",
            textZh: "可以的。我们可以开到1,000美元。800美元的汇票手续费是5美元。我们需要现金或从您的支票账户扣款。收款人写谁？",
            keyPhrases: [
              { en: "make it payable to", zh: "收款人写谁" },
              { en: "issue money orders", zh: "开具汇票" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure, we do money orders up to a thousand. Eight hundred will cost you five bucks for the fee. Cash or checking. Who's it going to?",
                textZh: "可以，上限一千。八百块手续费五块。现金或支票账户扣。给谁的？",
                actionHint: "准备好收款人全名",
                frequency: "common",
              },
            ],
            casualVersion: "Yep, up to a grand. Eight hundred plus a five dollar fee. Cash or from your account. Who do you want it made out to?",
            formalityVariants: {
              casual: "Sure. Eight hundred, five dollar fee. Cash or checking. Who's it for?",
              standard: "Yes, absolutely. We issue money orders up to $1,000. For $800, the fee is $5. We'll need the exact amount in cash or from your checking account. Who should I make it payable to?",
              formal: "Certainly. Our institution issues money orders in amounts up to $1,000. For your requested amount of $800, the issuance fee is $5. Payment may be rendered in cash or debited from your checking account. To whom shall the money order be made payable?",
            },
          },
          {
            speaker: "you",
            textEn: "Please make it payable to Pacific Heights Property Management. Can I pay from my checking account?",
            textZh: "请写收款人 Pacific Heights Property Management。可以从我的支票账户扣吗？",
            culturalNote: "在美国，房东或物业管理公司经常要求用 money order 或 cashier's check 支付房租，因为这比个人支票更安全，不会跳票。",
            casualVersion: "Make it out to Pacific Heights Property Management. Can you just pull it from my checking?",
            commonMistake: {
              wrong: "Write the name Pacific Heights Property Management.",
              correct: "Make it payable to Pacific Heights Property Management.",
              explanation: "make it payable to 是汇票上写收款人的标准说法。",
            },
            formalityVariants: {
              casual: "To Pacific Heights Property Management. Pull it from checking.",
              standard: "Please make it payable to Pacific Heights Property Management. Can I pay from my checking account?",
              formal: "Kindly make the money order payable to Pacific Heights Property Management. Would it be possible to debit the amount from my checking account?",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Sure, I'll debit $805 from your checking — $800 for the money order and $5 for the fee. Make sure to fill in your name and address in the purchaser section before you hand it over. Keep the receipt — that's your proof of purchase and you'll need it if the money order gets lost.",
            textZh: "好的，我从您的支票账户扣805美元——800是汇票金额，5块是手续费。交给对方之前记得在购买人那栏填上您的姓名和地址。收据留好——这是购买凭证，如果汇票丢了需要用到。",
            keyPhrases: [
              { en: "purchaser section", zh: "购买人栏" },
              { en: "proof of purchase", zh: "购买凭证" },
            ],
            alternativeExpressions: [
              {
                textEn: "Eight-oh-five total from checking. Fill in your name and address on the front before giving it to them. And hang onto the receipt — if it goes missing, that's how you track it or get a replacement.",
                textZh: "总共从支票账户扣八百零五。交出去之前在正面填上你的名字和地址。收据留着——丢了的话要靠这个追踪或补办。",
                actionHint: "保存好收据",
                frequency: "common",
              },
            ],
            casualVersion: "Eight-oh-five from checking. Fill in your info on the buyer line before handing it over. Keep the receipt — you'll need it if it gets lost.",
            formalityVariants: {
              casual: "Eight-oh-five out of checking. Put your name and address on the buyer line. Save the receipt.",
              standard: "Sure, I'll debit $805 from your checking — $800 for the money order and $5 for the fee. Make sure to fill in your name and address in the purchaser section before you hand it over. Keep the receipt — that's your proof of purchase and you'll need it if the money order gets lost.",
              formal: "Certainly. I will process a debit of $805 from your checking account — $800 for the money order and a $5 issuance fee. Please ensure that you complete the purchaser information section with your name and address prior to presenting the money order to the payee. I would strongly advise retaining the receipt, as it serves as your proof of purchase and would be essential in the event the money order is lost or requires tracing.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. One more question — what if I make a mistake filling it out? Can I get a replacement?",
            textZh: "明白了。再问一个——如果我填错了怎么办？可以换一张吗？",
            culturalNote: "汇票填错后一般不能修改涂改，需要申请退款后重新购买。退款可能需要30-60天，费用不退。",
            casualVersion: "What if I mess up writing it? Can I get another one?",
            commonMistake: {
              wrong: "If I write wrong, can I change it?",
              correct: "What if I make a mistake filling it out? Can I get a replacement?",
              explanation: "make a mistake filling it out 比 write wrong 更自然，replacement 是补发的正确说法。",
            },
            formalityVariants: {
              casual: "What if I mess it up? Can I swap it for a new one?",
              standard: "Got it. One more question — what if I make a mistake filling it out? Can I get a replacement?",
              formal: "Understood. I have one additional question — in the event that I make an error when completing the money order, would it be possible to obtain a replacement?",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Don't try to cross anything out — that voids it. Bring the money order back with your receipt, and we can cancel it and issue a new one. There's a $15 cancellation fee, and the refund takes about 30 days. So double-check the payee name before you write it.",
            textZh: "不要划掉任何内容——那样会作废。把汇票和收据带回来，我们可以取消并重新开一张。取消费15美元，退款大约30天。所以写之前仔细核对收款人名字。",
            keyPhrases: [
              { en: "voids it", zh: "作废" },
              { en: "cancellation fee", zh: "取消费" },
            ],
            alternativeExpressions: [
              {
                textEn: "Crossing stuff out kills it. Bring it and the receipt back, we'll cancel and reissue. Fifteen dollar cancel fee. Refund takes about a month. So get the name right the first time.",
                textZh: "划掉就作废了。带汇票和收据回来，我们取消重开。取消费十五块。退款大约一个月。所以第一次就写对。",
                actionHint: "仔细确认收款人全名后再填写",
                frequency: "common",
              },
            ],
            casualVersion: "Don't cross anything out or it's no good. Bring it back with the receipt, we'll cancel and redo it. Fifteen bucks to cancel, refund takes a month. So spell the name right the first time.",
            formalityVariants: {
              casual: "Crossing out voids it. Bring it back with the receipt. Fifteen to cancel, month for refund. Double-check the name.",
              standard: "Don't try to cross anything out — that voids it. Bring the money order back with your receipt, and we can cancel it and issue a new one. There's a $15 cancellation fee, and the refund takes about 30 days. So double-check the payee name before you write it.",
              formal: "Please refrain from making any alterations to the money order, as any cross-outs or modifications will render it void. Should you need a replacement, please return the original money order along with your receipt. We can process a cancellation and reissuance; however, a $15 cancellation fee applies, and the refund processing period is approximately 30 business days. I would strongly recommend verifying the payee name carefully before completing the money order.",
            },
          },
        ],
      },
      {
        id: "money-order-intermediate",
        titleZh: "汇票追踪和国际汇票",
        titleEn: "Tracking and International Money Orders",
        description: "追踪汇票状态或购买国际汇票",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I sent a money order two weeks ago but the recipient says they never received it. Can you help me track it?",
            textZh: "我两周前寄了一张汇票，但收款人说没收到。你能帮我追踪一下吗？",
            culturalNote: "追踪汇票需要收据上的序列号(serial number)。银行汇票可以直接在银行查询，USPS汇票需要填PS Form 6401。",
            casualVersion: "I sent a money order two weeks back and the person says they never got it. Can you look into it?",
            commonMistake: {
              wrong: "My money order is missing. Can you find it?",
              correct: "Can you help me track my money order?",
              explanation: "track a money order 是追踪汇票状态的标准说法。",
            },
            formalityVariants: {
              casual: "Sent a money order two weeks ago, they say it never showed up. Can you track it?",
              standard: "I sent a money order two weeks ago but the recipient says they never received it. Can you help me track it?",
              formal: "I dispatched a money order approximately two weeks ago; however, the intended recipient has indicated that it has not been received. Would you be able to assist me in tracking its status?",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "I can look that up for you. Do you have your receipt? I'll need the serial number and the exact amount. Once I pull it up, I can tell you if it's been cashed or is still outstanding.",
            textZh: "我可以帮你查。你有收据吗？我需要序列号和确切金额。查到后可以告诉你是已经兑现了还是还未兑付。",
            keyPhrases: [
              { en: "serial number", zh: "序列号" },
              { en: "cashed or still outstanding", zh: "已兑现还是未兑付" },
            ],
            alternativeExpressions: [
              {
                textEn: "Let me check. Got the receipt? Need the serial number and amount. I'll see if it's been cashed or if it's still out there.",
                textZh: "我查一下。收据有吗？给我序列号和金额。我看看是兑现了还是还没。",
                actionHint: "准备好汇票收据",
                frequency: "common",
              },
            ],
            casualVersion: "Let me look it up. Got your receipt? Need the serial number and amount. I'll tell you if it's been cashed or not.",
            formalityVariants: {
              casual: "I'll check. Got the receipt? Need the serial number and amount. I'll see if it's cashed.",
              standard: "I can look that up for you. Do you have your receipt? I'll need the serial number and the exact amount. Once I pull it up, I can tell you if it's been cashed or is still outstanding.",
              formal: "I would be happy to investigate that for you. May I have your receipt? I will need the serial number and the exact amount of the money order. Once I retrieve the record, I can determine whether it has been negotiated or remains outstanding.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, here's the receipt. The serial number is 2847563901 and the amount was $800. If it hasn't been cashed, can I cancel it and get a new one?",
            textZh: "有，收据在这里。序列号是2847563901，金额800美元。如果没被兑现的话，可以取消重新开一张吗？",
            culturalNote: "如果汇票未被兑现，可以申请 stop payment（止付）和 replacement。如果已被他人兑现，则需要走 fraud claim（欺诈索赔）流程。",
            casualVersion: "Here's the receipt — serial number 2847563901, eight hundred bucks. If nobody cashed it, can I cancel and get a new one?",
            commonMistake: {
              wrong: "If nobody used it, can I take it back?",
              correct: "If it hasn't been cashed, can I cancel it and get a new one?",
              explanation: "cashed 是汇票兑现的说法，cancel and get a new one 是标准流程。",
            },
            formalityVariants: {
              casual: "Here you go. If it's not cashed, can I just cancel and redo it?",
              standard: "Yes, here's the receipt. The serial number is 2847563901 and the amount was $800. If it hasn't been cashed, can I cancel it and get a new one?",
              formal: "Certainly, here is the receipt. The serial number is 2847563901 and the amount was $800. If the money order has not yet been negotiated, would it be possible to initiate a cancellation and obtain a replacement?",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Good news — it hasn't been cashed yet. I can place a stop payment on it and issue a replacement. There's a $30 stop payment fee, and the new money order will have a $5 issuance fee. The replacement will be ready today. I'd recommend sending it via certified mail this time so you have tracking.",
            textZh: "好消息——还没被兑现。我可以做止付处理然后重新开一张。止付费30美元，新汇票手续费5美元。今天就能拿到新的。建议这次用挂号信寄，这样有追踪。",
            keyPhrases: [
              { en: "stop payment", zh: "止付" },
              { en: "certified mail", zh: "挂号信" },
            ],
            alternativeExpressions: [
              {
                textEn: "It's uncashed. I'll stop payment and reissue. Thirty bucks for the stop, five for the new one. You'll have it today. Send it certified mail this time so you can track it.",
                textZh: "没被兑现。我做止付重开。止付三十块，新的五块。今天就好。这次寄挂号信，可以追踪。",
                actionHint: "使用挂号信寄出新汇票",
                frequency: "common",
              },
            ],
            casualVersion: "Hasn't been cashed. I'll kill the old one and make a new one. Thirty for the stop, five for the new one. Have it today. Send it certified mail this time so you can track delivery.",
            formalityVariants: {
              casual: "Not cashed. I'll stop it and make a new one. Thirty plus five. Ready today. Send certified this time.",
              standard: "Good news — it hasn't been cashed yet. I can place a stop payment on it and issue a replacement. There's a $30 stop payment fee, and the new money order will have a $5 issuance fee. The replacement will be ready today. I'd recommend sending it via certified mail this time so you have tracking.",
              formal: "I have good news — the money order has not yet been negotiated. I can initiate a stop payment and issue a replacement instrument. The stop payment fee is $30, and the replacement money order will carry a standard $5 issuance fee. The replacement can be prepared today. I would recommend dispatching it via certified mail to ensure delivery tracking and confirmation.",
            },
          },
          {
            speaker: "you",
            textEn: "Okay, let's do that. Also, can I buy an international money order here? I need to send $500 to a relative in China.",
            textZh: "好的，那就这样办。另外，这里能买国际汇票吗？我需要给中国的亲戚寄500美元。",
            culturalNote: "美国银行通常不直接发行国际汇票。USPS发行国际汇票但仅限部分国家（不含中国）。给中国汇款更常用 wire transfer 或 Western Union/MoneyGram。",
            casualVersion: "Let's do it. Oh, can I also get an international money order? Need to send five hundred to family in China.",
            commonMistake: {
              wrong: "I want to send money order to China.",
              correct: "Can I buy an international money order to send to China?",
              explanation: "international money order 是正确术语，且要说 buy 而不是 send。",
            },
            formalityVariants: {
              casual: "Do that. Also, can I get an international one for China? Five hundred bucks.",
              standard: "Okay, let's do that. Also, can I buy an international money order here? I need to send $500 to a relative in China.",
              formal: "Please proceed with that. Additionally, does your institution offer international money orders? I need to remit $500 to a family member in China.",
            },
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Unfortunately, we don't issue international money orders. For sending money to China, I'd recommend an international wire transfer — we can do that here for a $45 fee, and it usually arrives within two to three business days. Alternatively, you could use a service like Western Union or Wise, which might be cheaper depending on the amount and exchange rate.",
            textZh: "很遗憾，我们不提供国际汇票。往中国汇款的话，我建议做国际电汇——这里可以办，手续费45美元，通常两到三个工作日到账。或者你也可以用 Western Union 或 Wise 之类的服务，根据金额和汇率可能更便宜。",
            keyPhrases: [
              { en: "international wire transfer", zh: "国际电汇" },
              { en: "exchange rate", zh: "汇率" },
            ],
            alternativeExpressions: [
              {
                textEn: "We don't do international money orders. For China, a wire transfer is your best bet — forty-five bucks, two to three days. Or try Western Union or Wise — sometimes cheaper depending on the exchange rate.",
                textZh: "我们不做国际汇票。给中国的话电汇最好——四十五块，两三天到。或者试试 Western Union 或 Wise——有时候看汇率更便宜。",
                actionHint: "比较电汇和第三方汇款服务的费用",
                frequency: "common",
              },
            ],
            casualVersion: "No international money orders here. For China, do a wire — forty-five bucks, two to three days. Or check out Western Union or Wise. Might save on fees depending on the exchange rate.",
            formalityVariants: {
              casual: "Can't do international money orders. Wire transfer to China — forty-five bucks, few days. Or try Wise, usually cheaper.",
              standard: "Unfortunately, we don't issue international money orders. For sending money to China, I'd recommend an international wire transfer — we can do that here for a $45 fee, and it usually arrives within two to three business days. Alternatively, you could use a service like Western Union or Wise, which might be cheaper depending on the amount and exchange rate.",
              formal: "Regrettably, our institution does not issue international money orders. For remittances to China, I would recommend an international wire transfer, which we can facilitate here for a fee of $45, with a typical processing time of two to three business days. Alternatively, you may wish to consider third-party remittance services such as Western Union or Wise, which may offer more competitive rates depending on the transaction amount and prevailing exchange rate.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 保险箱 ====================
  {
    id: "banking-safe-deposit-box",
    tags: ["safe deposit box", "保险箱", "vault", "storage", "valuables"],
    category: "banking",
    titleZh: "保险箱",
    titleEn: "Safe Deposit Box",
    description: "在银行租用保险箱存放贵重物品和重要文件",
    otherRole: "银行客户经理",
    otherRoleIcon: "🏦",
    flows: [
      {
        id: "safe-deposit-basic",
        titleZh: "租用保险箱",
        titleEn: "Renting a Safe Deposit Box",
        description: "咨询和租用银行保险箱",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm interested in renting a safe deposit box. What sizes do you have available?",
            textZh: "你好，我想租一个保险箱。你们有什么尺寸可选？",
            culturalNote: "美国银行保险箱通常按年租，尺寸从小型(3x5英寸)到大型(10x10英寸)不等。价格从$30/年到$300+/年。需要是银行客户才能租。",
            casualVersion: "Hey, looking to rent a safe deposit box. What sizes you got?",
            commonMistake: {
              wrong: "I want to rent a safe box in the bank.",
              correct: "I'm interested in renting a safe deposit box.",
              explanation: "完整术语是 safe deposit box，不是 safe box。",
            },
            formalityVariants: {
              casual: "Got any safe deposit boxes available? What sizes?",
              standard: "Hi, I'm interested in renting a safe deposit box. What sizes do you have available?",
              formal: "Good afternoon. I would like to inquire about the availability of safe deposit boxes at your branch. Could you please provide information on the sizes and pricing?",
            },
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "We have three sizes currently available. Small is 3 by 5 inches at $60 a year — perfect for documents and jewelry. Medium is 5 by 10 at $120 a year — fits legal documents and small valuables. Large is 10 by 10 at $250 a year — good for larger items. You do need to have an account with us to rent one.",
            textZh: "目前有三种尺寸。小号3x5英寸每年60美元——适合文件和首饰。中号5x10每年120美元——放法律文件和小件贵重物品。大号10x10每年250美元——放大件物品。需要在我们这里开户才能租。",
            keyPhrases: [
              { en: "safe deposit box", zh: "保险箱" },
              { en: "have an account with us", zh: "在我们这里有账户" },
            ],
            alternativeExpressions: [
              {
                textEn: "Three sizes. Small — three by five, sixty a year, good for jewelry and papers. Medium — five by ten, one-twenty, for legal docs and small stuff. Large — ten by ten, two-fifty, for bigger items. Need a bank account here to rent.",
                textZh: "三种尺寸。小号——三乘五，年费六十，放首饰和文件。中号——五乘十，一百二十，放法律文件和小件。大号——十乘十，两百五，放大件。需要有账户才能租。",
                actionHint: "评估需要存放的物品大小",
                frequency: "common",
              },
            ],
            casualVersion: "Three sizes. Small at sixty a year, medium at one-twenty, large at two-fifty. Small's good for jewelry and documents. Large fits bigger stuff. You'll need an account with us.",
            formalityVariants: {
              casual: "Three sizes — sixty, one-twenty, two-fifty a year. Small for jewelry, medium for docs, large for bigger stuff. Need an account here.",
              standard: "We have three sizes currently available. Small is 3 by 5 inches at $60 a year — perfect for documents and jewelry. Medium is 5 by 10 at $120 a year — fits legal documents and small valuables. Large is 10 by 10 at $250 a year — good for larger items. You do need to have an account with us to rent one.",
              formal: "We currently offer three safe deposit box sizes. Our small box measures 3 by 5 inches at an annual rental of $60, ideal for documents and jewelry. Our medium box is 5 by 10 inches at $120 annually, accommodating legal documents and small valuables. Our large box measures 10 by 10 inches at $250 per year, suitable for larger items. Please note that an active account at our institution is a prerequisite for renting a safe deposit box.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take a medium one. I have a checking account here already. What's the access policy — can I come in anytime during business hours?",
            textZh: "我要一个中号的。我已经在这里有支票账户了。存取规则是什么——营业时间内随时可以来吗？",
            culturalNote: "保险箱只能在银行营业时间内进入(通常周一到周五，部分周六上午)。每次进入需要签名登记和出示身份证，部分银行需要预约。",
            casualVersion: "Medium works. I've already got a checking account. Can I just come in whenever you're open?",
            commonMistake: {
              wrong: "Can I open the box anytime?",
              correct: "Can I access my box anytime during business hours?",
              explanation: "access the box 是使用保险箱的正确说法。",
            },
            formalityVariants: {
              casual: "I'll do the medium. Already have checking here. When can I get to it?",
              standard: "I'll take a medium one. I have a checking account here already. What's the access policy — can I come in anytime during business hours?",
              formal: "I would like to rent the medium-sized box. I am an existing checking account holder. Could you please outline the access policy? Am I able to access the box at any time during regular business hours?",
            },
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "You can access your box anytime during our lobby hours — that's Monday through Friday, 9 to 5, and Saturday 9 to noon. You'll need to present your ID and sign in each visit. You'll receive two keys — please keep them safe because a replacement key costs $150. And we do require that you be present in person; no one else can access it unless they're listed as an authorized signer.",
            textZh: "大厅营业时间内随时可以来——周一到周五9点到5点，周六9点到12点。每次需要出示身份证件并签名登记。我们会给你两把钥匙——请保管好，配钥匙要150美元。另外必须本人到场，除非对方是授权签字人，否则别人不能代为访问。",
            keyPhrases: [
              { en: "authorized signer", zh: "授权签字人" },
              { en: "replacement key", zh: "配钥匙" },
            ],
            alternativeExpressions: [
              {
                textEn: "Come anytime during lobby hours — weekdays nine to five, Saturday nine to noon. Show your ID, sign in. You get two keys — losing one is a hundred fifty to replace. Only you or someone you've authorized can open it.",
                textZh: "大厅开门时间随时来——工作日九点到五点，周六九到十二。出示身份证，签名。给你两把钥匙——丢一把补配一百五。只有你或你授权的人能开。",
                actionHint: "妥善保管保险箱钥匙",
                frequency: "common",
              },
            ],
            casualVersion: "Lobby hours — weekdays nine to five, Saturday mornings. Bring your ID every time. You get two keys. Lose one, it's a hundred fifty to replace. Only you can get in unless you add someone.",
            formalityVariants: {
              casual: "Weekdays nine to five, Saturday till noon. Bring ID, sign in. Two keys — don't lose them, a hundred fifty each to replace. Only you or someone you authorize.",
              standard: "You can access your box anytime during our lobby hours — that's Monday through Friday, 9 to 5, and Saturday 9 to noon. You'll need to present your ID and sign in each visit. You'll receive two keys — please keep them safe because a replacement key costs $150. And we do require that you be present in person; no one else can access it unless they're listed as an authorized signer.",
              formal: "Access to your safe deposit box is available during our lobby hours: Monday through Friday from 9:00 AM to 5:00 PM, and Saturday from 9:00 AM to 12:00 PM. Each visit requires presentation of valid photo identification and completion of our access log. You will be issued two keys; please safeguard them carefully, as replacement keys carry a $150 fee. Access is restricted to the registered holder; no other individual may access the box unless they have been formally designated as an authorized signer on the account.",
            },
          },
          {
            speaker: "you",
            textEn: "Can I add my wife as an authorized person so she can access the box if I'm not around?",
            textZh: "我可以加我妻子为授权人吗？这样我不在的时候她也可以开保险箱。",
            culturalNote: "在美国，保险箱可以添加共同承租人(co-lessee)或授权签字人。共同承租人有完全平等的权限，授权签字人可以在主租户不在时独立访问。",
            casualVersion: "Can I add my wife so she can get in too?",
            commonMistake: {
              wrong: "Can my wife also use the box?",
              correct: "Can I add my wife as an authorized person?",
              explanation: "add as an authorized person/signer 是正确的说法。",
            },
            formalityVariants: {
              casual: "Can my wife get access too? Want to add her.",
              standard: "Can I add my wife as an authorized person so she can access the box if I'm not around?",
              formal: "Would it be possible to designate my wife as an authorized signer, enabling her to independently access the safe deposit box in my absence?",
            },
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "Absolutely. She can be added as a co-lessee, which gives her full and equal access. She'll need to come in with her ID to sign the rental agreement. There's no extra charge for adding a co-lessee. She'll get her own key as well. Just keep in mind that both of you will have independent access — either one of you can come in without the other.",
            textZh: "当然可以。她可以作为共同承租人添加，享有完全平等的访问权限。她需要带身份证件来签租赁协议。加共同承租人不额外收费。她也会拿到自己的钥匙。请注意你们俩都有独立访问权——任何一方都可以单独来。",
            keyPhrases: [
              { en: "co-lessee", zh: "共同承租人" },
              { en: "independent access", zh: "独立访问权" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure. Add her as a co-lessee — full equal access. She just needs to come in with ID and sign the agreement. No extra charge. She gets her own key. Either of you can come in alone.",
                textZh: "可以。加她为共同承租人——完全平等的权限。她带ID来签协议就行。不加钱。她有自己的钥匙。你们谁都能单独来。",
                actionHint: "安排妻子来银行签署协议",
                frequency: "common",
              },
            ],
            casualVersion: "Yep. Add her as co-lessee — same access as you. She brings her ID, signs the papers. No extra cost. Gets her own key. Either of you can come in solo.",
            formalityVariants: {
              casual: "Sure. She signs on as co-lessee. Full access, own key, no extra charge. Either of you can come in anytime.",
              standard: "Absolutely. She can be added as a co-lessee, which gives her full and equal access. She'll need to come in with her ID to sign the rental agreement. There's no extra charge for adding a co-lessee. She'll get her own key as well. Just keep in mind that both of you will have independent access — either one of you can come in without the other.",
              formal: "Certainly. Your wife may be added as a co-lessee on the safe deposit box rental agreement, which would grant her full and equal access privileges. She would need to visit the branch with valid photo identification to execute the rental agreement. There is no additional charge for designating a co-lessee. She will be issued her own key, and please note that both parties will have fully independent access — either lessee may access the box without the other being present.",
            },
          },
        ],
      },
      {
        id: "safe-deposit-intermediate",
        titleZh: "保险箱物品管理",
        titleEn: "Managing Safe Deposit Box Contents",
        description: "了解保险箱的保险、限制和注意事项",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I have a question about my safe deposit box. Are the contents insured by the bank? I'm storing some valuable jewelry and original documents in there.",
            textZh: "关于我的保险箱有个问题。里面的东西银行保险吗？我存了一些贵重首饰和原始文件。",
            culturalNote: "美国银行不为保险箱内容物投保。FDIC只保银行存款，不保保险箱。如果需要保险，客户需要自己购买 renter's/homeowner's insurance 的 rider。",
            casualVersion: "Quick question — is the stuff in my safe deposit box insured? Got some pricey jewelry and important papers in there.",
            commonMistake: {
              wrong: "Does the bank insurance cover my safe box things?",
              correct: "Are the contents of my safe deposit box insured by the bank?",
              explanation: "contents 指内容物，insured by the bank 而不是 bank insurance cover。",
            },
            formalityVariants: {
              casual: "Is the stuff in my box covered? Got some expensive things in there.",
              standard: "I have a question about my safe deposit box. Are the contents insured by the bank? I'm storing some valuable jewelry and original documents in there.",
              formal: "I have an inquiry regarding my safe deposit box. Does the bank provide insurance coverage for the contents? I am currently storing valuable jewelry and original documents within the box.",
            },
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "That's an important question. No, the bank does not insure the contents of safe deposit boxes. FDIC coverage only applies to deposit accounts, not physical items stored in our vault. I'd strongly recommend adding a rider to your homeowner's or renter's insurance policy to cover the items. You should also keep a detailed inventory with photos at home.",
            textZh: "这是个重要的问题。不，银行不为保险箱内容物投保。FDIC只保存款账户，不保存放在金库里的实物。我强烈建议在你的房屋保险或租房保险上加一个附加条款来覆盖这些物品。你也应该在家保存一份详细的清单和照片。",
            keyPhrases: [
              { en: "rider (insurance)", zh: "附加保险条款" },
              { en: "detailed inventory", zh: "详细清单" },
            ],
            alternativeExpressions: [
              {
                textEn: "No, we don't insure what's in the boxes. FDIC covers deposits, not box contents. Get a rider on your home insurance to cover it. And keep a list of what's in there with photos at home, just in case.",
                textZh: "不，我们不保箱子里的东西。FDIC保存款，不保保险箱内容。在房屋保险上加个rider。在家存一份物品清单和照片，以防万一。",
                actionHint: "联系保险公司添加保险箱附加条款",
                frequency: "common",
              },
            ],
            casualVersion: "Nope, bank doesn't insure what's inside. FDIC only covers deposits. Add a rider to your home insurance. Keep photos and a list at home of everything in the box.",
            formalityVariants: {
              casual: "No coverage from us. FDIC is deposits only. Get a rider on your home insurance. Keep a photo list at home.",
              standard: "That's an important question. No, the bank does not insure the contents of safe deposit boxes. FDIC coverage only applies to deposit accounts, not physical items stored in our vault. I'd strongly recommend adding a rider to your homeowner's or renter's insurance policy to cover the items. You should also keep a detailed inventory with photos at home.",
              formal: "That is an excellent and important question. I must inform you that the bank does not provide insurance coverage for the contents of safe deposit boxes. FDIC protection extends exclusively to deposit accounts and does not encompass physical items stored in our vault facility. I would strongly advise adding a scheduled personal property rider to your homeowner's or renter's insurance policy to ensure adequate coverage. Additionally, I recommend maintaining a comprehensive inventory with photographic documentation at your residence.",
            },
          },
          {
            speaker: "you",
            textEn: "Good to know. Are there any items I shouldn't store in the box? I was thinking of keeping some cash in there as well.",
            textZh: "了解了。有什么东西不能放进去吗？我还想放一些现金在里面。",
            culturalNote: "虽然没有法律禁止在保险箱里放现金，但银行通常不建议。现金在保险箱里不生利息，也没有FDIC保障。如果银行出事(如自然灾害)，现金可能无法追回。",
            casualVersion: "Any stuff I shouldn't keep in there? I was gonna throw some cash in too.",
            commonMistake: {
              wrong: "What things are forbidden in the box?",
              correct: "Are there any items I shouldn't store in the box?",
              explanation: "shouldn't store 比 forbidden 更自然，保险箱限制通常是建议而非禁止。",
            },
            formalityVariants: {
              casual: "Anything I shouldn't put in there? Was thinking of keeping cash too.",
              standard: "Good to know. Are there any items I shouldn't store in the box? I was thinking of keeping some cash in there as well.",
              formal: "That is very helpful information. Are there any restrictions on the types of items that may be stored in the safe deposit box? I had also considered storing a quantity of cash.",
            },
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "You cannot store anything hazardous, illegal, or perishable. As for cash — you can, but I wouldn't recommend it. Cash in a box doesn't earn interest and isn't FDIC-insured. If something happens to the vault — flood, fire — there's no guarantee of recovery. Better to keep cash in a savings account where it earns interest and is fully protected up to $250,000.",
            textZh: "不能放任何危险品、违禁品或易腐物品。至于现金——可以放，但我不建议。保险箱里的现金不产生利息也没有FDIC保障。如果金库出事——水灾、火灾——不保证能追回。不如把现金放储蓄账户，既有利息又有25万美元以内的全额保障。",
            keyPhrases: [
              { en: "hazardous, illegal, or perishable", zh: "危险品、违禁品或易腐品" },
              { en: "FDIC-insured up to $250,000", zh: "FDIC保障25万美元以内" },
            ],
            alternativeExpressions: [
              {
                textEn: "Nothing dangerous, illegal, or that can go bad. Cash — technically fine, but it just sits there. No interest, no FDIC. If the vault floods or burns, you're out of luck. Put cash in savings where it works for you and is insured to two-fifty.",
                textZh: "不放危险品、违禁品、会坏的东西。现金——技术上可以，但就搁那儿。没利息，没保险。金库水淹火烧你就亏了。放储蓄账户有利息还保到二十五万。",
                actionHint: "将现金存入储蓄账户而非保险箱",
                frequency: "common",
              },
            ],
            casualVersion: "No weapons, drugs, or anything that can rot. Cash is allowed but not smart — no interest, no insurance. Vault gets hit by a flood, that cash is gone. Keep it in savings.",
            formalityVariants: {
              casual: "Nothing dangerous or illegal. Cash? You can, but why? No interest, no FDIC. Keep cash in savings.",
              standard: "You cannot store anything hazardous, illegal, or perishable. As for cash — you can, but I wouldn't recommend it. Cash in a box doesn't earn interest and isn't FDIC-insured. If something happens to the vault — flood, fire — there's no guarantee of recovery. Better to keep cash in a savings account where it earns interest and is fully protected up to $250,000.",
              formal: "Storage of hazardous materials, illegal substances, or perishable items is strictly prohibited. Regarding cash — while it is not prohibited, I would advise against it. Currency stored in a safe deposit box does not accrue interest and is not covered by FDIC insurance. In the event of a catastrophic incident affecting the vault — such as flooding or fire — recovery of cash cannot be guaranteed. I would recommend maintaining liquid funds in an insured savings account, where they will earn interest and receive full FDIC protection up to $250,000.",
            },
          },
          {
            speaker: "you",
            textEn: "That makes sense. What about important documents like my will or power of attorney? Should those go in the box?",
            textZh: "有道理。那像遗嘱或授权委托书这样的重要文件呢？应该放保险箱里吗？",
            culturalNote: "在美国，律师通常不建议把遗嘱原件放在保险箱里，因为持有人去世后保险箱可能被法院封存，家属需要走法律程序才能打开，耽误时间。",
            casualVersion: "What about stuff like my will? Should that go in the box?",
            commonMistake: {
              wrong: "Should I put my will paper in the box?",
              correct: "Should I store my will in the safe deposit box?",
              explanation: "will 本身就是遗嘱，不需要加 paper。power of attorney 是授权委托书。",
            },
            formalityVariants: {
              casual: "What about my will and power of attorney? Good idea to keep those in there?",
              standard: "That makes sense. What about important documents like my will or power of attorney? Should those go in the box?",
              formal: "That is sensible advice. Regarding important legal documents such as my last will and testament or power of attorney — would the safe deposit box be an appropriate storage location for those?",
            },
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "Actually, I'd advise against keeping your original will in there. If something happens to you, the box could be sealed by the court, and your family would need a court order to open it — which delays everything. Keep copies in the box and the original with your attorney. Power of attorney documents are fine to store here, along with property deeds, birth certificates, and insurance policies.",
            textZh: "实际上我建议不要把遗嘱原件放这里。如果你出了什么事，保险箱可能被法院封存，家人需要法院命令才能打开——这会耽误一切。复印件可以放这里，原件交给你的律师保管。授权委托书可以放这里，还有房产证、出生证明和保险单。",
            keyPhrases: [
              { en: "sealed by the court", zh: "被法院封存" },
              { en: "court order", zh: "法院命令" },
            ],
            alternativeExpressions: [
              {
                textEn: "Don't put the original will in there. If you pass away, the box gets sealed and your family needs a court order to open it. Big hassle. Keep copies here, original with your lawyer. Power of attorney, deeds, birth certificates — those are fine.",
                textZh: "别把遗嘱原件放这里。你要是去世了，箱子被封存，家人得申请法院命令才能开。很麻烦。复印件可以放这里，原件给律师。授权委托书、房契、出生证——这些可以。",
                actionHint: "把遗嘱原件交给律师保管",
                frequency: "common",
              },
            ],
            casualVersion: "Skip the original will — if something happens to you, the box gets locked down and your family needs a court order. Big delay. Copies here, original with your lawyer. Power of attorney, deeds, birth certificates — all good in the box.",
            formalityVariants: {
              casual: "Don't put the will in here. Box gets sealed if you die. Family needs a court order. Give the original to your lawyer. Everything else is fine.",
              standard: "Actually, I'd advise against keeping your original will in there. If something happens to you, the box could be sealed by the court, and your family would need a court order to open it — which delays everything. Keep copies in the box and the original with your attorney. Power of attorney documents are fine to store here, along with property deeds, birth certificates, and insurance policies.",
              formal: "I would actually counsel against storing your original last will and testament in the safe deposit box. In the event of the account holder's passing, the box may be subject to a judicial seal, requiring your family to obtain a court order to gain access — a process that can significantly delay estate proceedings. I would recommend keeping copies in the box and entrusting the original to your attorney. Power of attorney documents, property deeds, birth certificates, and insurance policies are all appropriate items for safe deposit box storage.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 银行公证 ====================
  {
    id: "banking-notarize-document",
    tags: ["notary", "公证", "notarize", "document", "签名认证"],
    category: "banking",
    titleZh: "银行公证",
    titleEn: "Notarize Document",
    description: "在银行使用公证服务认证重要文件和签名",
    otherRole: "银行公证员",
    otherRoleIcon: "🏦",
    flows: [
      {
        id: "notarize-basic",
        titleZh: "文件公证",
        titleEn: "Getting a Document Notarized",
        description: "在银行做文件公证的基本流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to get a document notarized. Do you offer notary services here?",
            textZh: "你好，我需要做文件公证。你们这里提供公证服务吗？",
            culturalNote: "美国的 notary public 和中国公证处不同。美国公证员只是见证签名的真实性，不对文件内容做法律审查。很多银行为客户免费提供公证服务。",
            casualVersion: "Hey, I need something notarized. Do you guys do that here?",
            commonMistake: {
              wrong: "I want to certify my document.",
              correct: "I need to get a document notarized.",
              explanation: "美国说 notarize 而不是 certify。get something notarized 是标准说法。",
            },
            formalityVariants: {
              casual: "Need to get something notarized. Can I do that here?",
              standard: "Hi, I need to get a document notarized. Do you offer notary services here?",
              formal: "Good morning. I require notarization of a document. Does your branch provide notary public services?",
            },
          },
          {
            speaker: "them",
            role: "银行公证员",
            textEn: "Yes, we do. Notary services are free for account holders. Do you have an account with us? Also, please make sure you haven't signed the document yet — I need to witness the signature in person.",
            textZh: "是的，我们提供。账户持有人可以免费使用公证服务。您在我们这里有账户吗？另外请确保您还没有在文件上签名——我需要当面见证签名。",
            keyPhrases: [
              { en: "witness the signature", zh: "见证签名" },
              { en: "notary services", zh: "公证服务" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yep, free for our customers. Got an account here? And whatever you do, don't sign it yet — I need to watch you sign it. That's the whole point.",
                textZh: "有，客户免费。有账户吗？别先签——我需要看着你签。这就是公证的意义。",
                actionHint: "确保文件未签名",
                frequency: "common",
              },
            ],
            casualVersion: "Yep, free if you bank here. Just don't sign it beforehand — I have to see you sign it in person.",
            formalityVariants: {
              casual: "We do. Free for customers. Don't sign it yet — I gotta see you do it.",
              standard: "Yes, we do. Notary services are free for account holders. Do you have an account with us? Also, please make sure you haven't signed the document yet — I need to witness the signature in person.",
              formal: "Indeed, we do offer notary public services, complimentary for our account holders. May I confirm that you maintain an account with our institution? Additionally, I must request that you refrain from signing the document in advance — as the notary, I am required to personally witness the execution of the signature.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I have a checking account here. I haven't signed it yet. It's a power of attorney document — do I need any specific ID?",
            textZh: "有的，我这里有支票账户。还没签名。这是一份授权委托书——需要什么特定的身份证件吗？",
            culturalNote: "美国公证需要政府签发的带照片的身份证件(photo ID)，如驾照、护照或州身份证。过期的身份证件不被接受。部分州对特定文件（如房产交易）有额外要求。",
            casualVersion: "Yep, got checking here. Haven't signed yet. It's a power of attorney. What ID do I need?",
            commonMistake: {
              wrong: "I need to notary a power of attorney.",
              correct: "I need to get a power of attorney notarized.",
              explanation: "notarize 是动词，notary 是名词（公证员）。get something notarized 是正确结构。",
            },
            formalityVariants: {
              casual: "Got an account. Haven't signed. It's a power of attorney — what ID?",
              standard: "Yes, I have a checking account here. I haven't signed it yet. It's a power of attorney document — do I need any specific ID?",
              formal: "Yes, I am a checking account holder at this branch. The document remains unsigned. It is a power of attorney — are there specific identification requirements for this type of document?",
            },
          },
          {
            speaker: "them",
            role: "银行公证员",
            textEn: "I'll need a current, unexpired government-issued photo ID — a driver's license, passport, or state ID all work. For a power of attorney, I'll also need the other party named in the document to be present if they need to sign as well. Is it just your signature that needs notarization?",
            textZh: "我需要一份有效未过期的政府签发的带照片的证件——驾照、护照或州身份证都可以。授权委托书的话，如果文件中提到的另一方也需要签名，他们也需要到场。只是您的签名需要公证吗？",
            keyPhrases: [
              { en: "government-issued photo ID", zh: "政府签发的带照片证件" },
              { en: "unexpired", zh: "未过期的" },
            ],
            alternativeExpressions: [
              {
                textEn: "Need a valid photo ID — license, passport, or state ID. Since it's a power of attorney, if the other person needs to sign too, they have to be here. Is it just you signing?",
                textZh: "需要有效的带照片ID——驾照、护照或州ID。因为是授权委托书，如果对方也要签，他们得在场。只有你签吗？",
                actionHint: "确认是否需要其他签署方到场",
                frequency: "common",
              },
            ],
            casualVersion: "Valid photo ID — license, passport, state ID. Power of attorney might need the other person here too if they're signing. Just you?",
            formalityVariants: {
              casual: "Valid photo ID. License, passport, whatever. Other person signing too? They'd need to be here.",
              standard: "I'll need a current, unexpired government-issued photo ID — a driver's license, passport, or state ID all work. For a power of attorney, I'll also need the other party named in the document to be present if they need to sign as well. Is it just your signature that needs notarization?",
              formal: "I will require a current, unexpired government-issued photo identification — a valid driver's license, passport, or state-issued identification card are all acceptable. Given that this is a power of attorney document, any additional parties named therein who are required to execute the document must also be present during the notarization. Will only your signature require notarization today?",
            },
          },
          {
            speaker: "you",
            textEn: "Just my signature. Here's my passport. How long does the whole process take?",
            textZh: "只有我的签名。这是我的护照。整个过程需要多长时间？",
            culturalNote: "在美国，简单的文件公证通常只需5-10分钟。公证员会核实身份、让你宣誓(如需要)、见证签名、然后盖章和签名。",
            casualVersion: "Just mine. Here's my passport. How long's this gonna take?",
            commonMistake: {
              wrong: "How much time does the notary need?",
              correct: "How long does the whole process take?",
              explanation: "how long does it take 是问耗时的标准说法。",
            },
            formalityVariants: {
              casual: "Just me signing. Passport's right here. Quick process?",
              standard: "Just my signature. Here's my passport. How long does the whole process take?",
              formal: "Only my signature requires notarization. Here is my passport for identification purposes. Could you advise how long the notarization process will take?",
            },
          },
          {
            speaker: "them",
            role: "银行公证员",
            textEn: "Just a few minutes. Let me verify your passport. I'll have you raise your right hand and take a brief oath confirming your identity and that you're signing voluntarily. Then you sign, I stamp and seal it, and you're done. Let's get started.",
            textZh: "只需要几分钟。让我核实一下您的护照。我会让您举右手做一个简短的宣誓，确认您的身份以及您是自愿签名的。然后您签名，我盖章封印，就完成了。我们开始吧。",
            keyPhrases: [
              { en: "take a brief oath", zh: "做简短的宣誓" },
              { en: "stamp and seal", zh: "盖章封印" },
            ],
            alternativeExpressions: [
              {
                textEn: "Five minutes tops. I'll check your passport, you'll do a quick oath — right hand up, confirm who you are and that you're signing willingly. Sign it, I stamp it, done.",
                textZh: "最多五分钟。我看一下护照，你做个快速宣誓——举右手，确认身份和自愿签名。签字，我盖章，搞定。",
                actionHint: "准备好举右手宣誓",
                frequency: "common",
              },
            ],
            casualVersion: "Couple minutes. I'll check your passport, have you do a quick oath, you sign, I stamp it. Easy. Let's go.",
            formalityVariants: {
              casual: "Few minutes. Passport check, quick oath, sign, stamp. Done. Let's do it.",
              standard: "Just a few minutes. Let me verify your passport. I'll have you raise your right hand and take a brief oath confirming your identity and that you're signing voluntarily. Then you sign, I stamp and seal it, and you're done. Let's get started.",
              formal: "The process will require only a few minutes. Allow me to verify your passport documentation. I will then administer a brief oath, during which you will raise your right hand and affirm your identity and the voluntary nature of your signature. Following the oath, you will execute the document, after which I will apply my official stamp and notarial seal. Shall we proceed?",
            },
          },
        ],
      },
      {
        id: "notarize-intermediate",
        titleZh: "复杂文件公证",
        titleEn: "Complex Document Notarization",
        description: "处理需要额外步骤的公证事务",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I need to get an affidavit notarized and also have a document apostilled for use in China. Can you handle both?",
            textZh: "我需要公证一份宣誓书，还需要给一份要在中国使用的文件做海牙认证。两件事都能在这里办吗？",
            culturalNote: "Apostille 是海牙认证，用于在其他海牙公约国家承认的文件认证。美国的apostille由各州的Secretary of State办公室签发，银行不能做。中国于2023年加入海牙公约。",
            casualVersion: "Got an affidavit to notarize and need an apostille for something going to China. Can you do both?",
            commonMistake: {
              wrong: "I need to apostille my document at the bank.",
              correct: "I need to have a document apostilled.",
              explanation: "apostille 作动词用 have something apostilled，且银行无法办理，需要去 Secretary of State。",
            },
            formalityVariants: {
              casual: "Need an affidavit notarized plus an apostille for China. Both doable here?",
              standard: "I need to get an affidavit notarized and also have a document apostilled for use in China. Can you handle both?",
              formal: "I require notarization of an affidavit as well as apostille certification of a document intended for use in China. Is your branch able to accommodate both of these services?",
            },
          },
          {
            speaker: "them",
            role: "银行公证员",
            textEn: "I can notarize the affidavit for you right here — that's straightforward. However, we don't issue apostilles. That has to go through the Secretary of State's office. What I can do is notarize the document first, which is usually a required step before getting the apostille. Then you'd mail it to the Secretary of State or use their online portal if your state offers one.",
            textZh: "宣誓书的公证我可以在这里办——很简单。但是海牙认证我们做不了。那需要通过州务卿办公室。我能做的是先公证文件，这通常是获得海牙认证之前的必要步骤。然后你把它寄到州务卿办公室，或者如果你所在的州有在线系统就用在线申请。",
            keyPhrases: [
              { en: "Secretary of State's office", zh: "州务卿办公室" },
              { en: "online portal", zh: "在线申请系统" },
            ],
            alternativeExpressions: [
              {
                textEn: "Affidavit — easy, I'll do that now. Apostille — that's the Secretary of State, not us. But step one is notarizing it, which I can do. Then you send it to the Secretary of State — some states let you do it online.",
                textZh: "宣誓书——简单，我现在就办。海牙认证——那是州务卿的事，不是我们。但第一步是公证，我能做。然后寄给州务卿——有些州可以在线办。",
                actionHint: "了解所在州的海牙认证流程",
                frequency: "common",
              },
            ],
            casualVersion: "Affidavit, no problem. Apostille — can't do that here, that's the Secretary of State. I'll notarize it first though, which you'll need before the apostille. Then send it to them or do it online.",
            formalityVariants: {
              casual: "Affidavit, done. Apostille, gotta go to Secretary of State. I'll notarize it for you first — that's step one.",
              standard: "I can notarize the affidavit for you right here — that's straightforward. However, we don't issue apostilles. That has to go through the Secretary of State's office. What I can do is notarize the document first, which is usually a required step before getting the apostille. Then you'd mail it to the Secretary of State or use their online portal if your state offers one.",
              formal: "I am able to perform the notarization of the affidavit here at the branch — that is a standard procedure. However, apostille certification is beyond the scope of services we provide. Apostilles must be obtained through the Secretary of State's office. I can, however, notarize the document as a preliminary step, which is typically a prerequisite for apostille certification. Subsequently, you would submit the notarized document to the Secretary of State's office, either by mail or through their online portal, if available in your state.",
            },
          },
          {
            speaker: "you",
            textEn: "Okay, let's start with the affidavit. I wrote it myself — is that okay, or does it need to be drafted by a lawyer?",
            textZh: "好的，那先办宣誓书。是我自己写的——这样可以吗，还是需要律师起草？",
            culturalNote: "在美国，宣誓书(affidavit)不一定需要律师起草，但内容必须是真实的事实陈述。公证员只验证身份和见证签名，不审查内容的法律效力。",
            casualVersion: "Let's do the affidavit first. I wrote it myself — that fine, or do I need a lawyer to do it?",
            commonMistake: {
              wrong: "I wrote the affidavit by myself. Is it legal?",
              correct: "I wrote the affidavit myself — is that acceptable?",
              explanation: "acceptable 或 okay 比 legal 更准确，公证员不判断合法性。",
            },
            formalityVariants: {
              casual: "Starting with the affidavit. Wrote it myself. That cool?",
              standard: "Okay, let's start with the affidavit. I wrote it myself — is that okay, or does it need to be drafted by a lawyer?",
              formal: "Very well, let us begin with the affidavit. I prepared the document myself — is that acceptable, or is it necessary for an attorney to have drafted it?",
            },
          },
          {
            speaker: "them",
            role: "银行公证员",
            textEn: "Self-drafted affidavits are perfectly fine. I don't review the content or give legal advice — my role is to verify your identity, administer the oath, and witness your signature. Just make sure the statements are truthful, because you'll be swearing under penalty of perjury. If you want legal advice on the content, you'd need to consult an attorney separately.",
            textZh: "自己写的宣誓书完全可以。我不审查内容也不提供法律建议——我的职责是核实身份、主持宣誓和见证签名。只要确保内容是真实的，因为你要以作伪证的惩罚来宣誓。如果需要对内容的法律建议，你需要另外咨询律师。",
            keyPhrases: [
              { en: "under penalty of perjury", zh: "以作伪证的惩罚" },
              { en: "administer the oath", zh: "主持宣誓" },
            ],
            alternativeExpressions: [
              {
                textEn: "Totally fine. I don't check the content — not my job. I verify who you are, you swear it's true, I watch you sign. Just remember, you're signing under penalty of perjury, so everything in there better be true. Content questions — talk to a lawyer.",
                textZh: "完全可以。我不审内容——不是我的职责。我验证你是谁，你宣誓是真的，我看你签字。记住，你是在以伪证罪的惩罚来签的，所以内容必须真实。关于内容的问题——找律师。",
                actionHint: "确认宣誓书中所有陈述都是真实的",
                frequency: "common",
              },
            ],
            casualVersion: "Self-written is fine. I don't check the legal stuff — just your ID and signature. You're swearing under penalty of perjury, so make sure it's all true. For legal questions, see a lawyer.",
            formalityVariants: {
              casual: "No problem writing it yourself. I just do ID, oath, and signature. Make sure it's true — you're signing under penalty of perjury.",
              standard: "Self-drafted affidavits are perfectly fine. I don't review the content or give legal advice — my role is to verify your identity, administer the oath, and witness your signature. Just make sure the statements are truthful, because you'll be swearing under penalty of perjury. If you want legal advice on the content, you'd need to consult an attorney separately.",
              formal: "Self-prepared affidavits are entirely acceptable. Please understand that my role as notary does not extend to reviewing the substantive content of the document or providing legal counsel. My responsibilities are limited to verifying the affiant's identity, administering the oath or affirmation, and witnessing the signature. Please ensure that all statements contained within are truthful, as you will be attesting under penalty of perjury. Should you require legal guidance regarding the content, I would recommend consulting with a licensed attorney.",
            },
          },
          {
            speaker: "you",
            textEn: "Understood. One more thing — I have another document that was signed last week by someone else. Can you notarize that one too?",
            textZh: "明白了。还有一件事——我还有一份上周由别人签过的文件。那份也能公证吗？",
            culturalNote: "公证员必须当面见证签名，不能对已经签好的文件做公证。如果签名人不在场，需要他们亲自到公证员面前重新签名。",
            casualVersion: "Got it. I also have another document someone else signed last week. Can you notarize that too?",
            commonMistake: {
              wrong: "Can you notarize a document that was already signed?",
              correct: "Can you notarize a document that was signed by someone who isn't present?",
              explanation: "更准确的问题是签名人是否在场，而不仅仅是是否已签。",
            },
            formalityVariants: {
              casual: "Also got one that someone else signed last week. Can that get notarized?",
              standard: "Understood. One more thing — I have another document that was signed last week by someone else. Can you notarize that one too?",
              formal: "I understand. I have one additional request — I possess another document that was executed last week by a different individual. Would it be possible to have that document notarized as well?",
            },
          },
          {
            speaker: "them",
            role: "银行公证员",
            textEn: "I'm afraid not. I can only notarize a signature that I personally witness. Since the other person signed it without me present, I can't notarize it after the fact. That person would need to come in and sign it again in front of me. If they can't come to this branch, any bank or UPS Store with a notary can do it — they just need their photo ID.",
            textZh: "恐怕不行。我只能公证我亲眼见证的签名。因为对方签名时我不在场，我不能事后公证。那个人需要亲自来我面前重新签名。如果他们不方便来这个支行，任何有公证员的银行或UPS门店都可以——只需要带带照片的身份证件。",
            keyPhrases: [
              { en: "personally witness", zh: "亲眼见证" },
              { en: "after the fact", zh: "事后" },
            ],
            alternativeExpressions: [
              {
                textEn: "Can't do it. Gotta see the signature happen live. They signed without me, so it's no good. They'd have to come in and re-sign in front of me. Or any bank, any UPS Store with a notary. Just need their photo ID.",
                textZh: "不行。必须现场看到签名。他们签的时候我不在，所以不能公证。他们得过来在我面前重签。或者去任何有公证员的银行或UPS店。带照片ID就行。",
                actionHint: "联系对方安排到公证员面前签名",
                frequency: "common",
              },
            ],
            casualVersion: "Nope. I have to see them sign it. Since I wasn't there, it's a no-go. They'd need to come in and sign again in front of me. Or find a notary near them — banks, UPS Stores. Photo ID is all they need.",
            formalityVariants: {
              casual: "Can't. Gotta see it signed. They need to come in and redo it in front of me. Or any notary near them.",
              standard: "I'm afraid not. I can only notarize a signature that I personally witness. Since the other person signed it without me present, I can't notarize it after the fact. That person would need to come in and sign it again in front of me. If they can't come to this branch, any bank or UPS Store with a notary can do it — they just need their photo ID.",
              formal: "Unfortunately, that would not be permissible. As a notary public, I am only authorized to notarize signatures that I personally witness being executed. Since the other signatory completed the document without my presence, I cannot provide retroactive notarization. The individual in question would need to appear before me in person to re-execute the signature. Should visiting this branch be inconvenient, any institution with notary services — including other banks or UPS Store locations — would be able to accommodate them, provided they present valid photo identification.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 关闭账户 ====================
  {
    id: "banking-close-account",
    tags: ["close account", "关闭账户", "cancel", "account closure"],
    category: "banking",
    titleZh: "关闭账户",
    titleEn: "Close Account",
    description: "在银行关闭不再需要的账户，处理余额和相关事务",
    otherRole: "银行客户经理",
    otherRoleIcon: "🏦",
    flows: [
      {
        id: "close-account-basic",
        titleZh: "关闭支票账户",
        titleEn: "Closing a Checking Account",
        description: "关闭支票账户的基本流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to close my checking account. I'm moving back to my home country and won't need it anymore.",
            textZh: "你好，我想关闭我的支票账户。我要搬回国了，不再需要了。",
            culturalNote: "在美国关银行账户通常需要本人到银行办理。关户前要确保所有 pending transactions、auto-payments 和 direct deposits 已停止或转移，否则会产生额外费用。",
            casualVersion: "Hey, I need to close my checking account. I'm heading back home and don't need it anymore.",
            commonMistake: {
              wrong: "I want to cancel my bank account.",
              correct: "I'd like to close my checking account.",
              explanation: "银行账户用 close，不用 cancel。且要指明是 checking account 还是 savings account。",
            },
            formalityVariants: {
              casual: "Need to close my checking. Moving back home.",
              standard: "Hi, I'd like to close my checking account. I'm moving back to my home country and won't need it anymore.",
              formal: "Good afternoon. I would like to request the closure of my checking account. I am relocating to my home country and will no longer require the account.",
            },
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "I can help you with that. Before we proceed, I want to make sure there are no pending transactions. Your current balance is $1,247.50 and I see two pending transactions — a $35 payment to Netflix and a $120 auto-pay for your phone bill. I'd recommend waiting for those to clear first, or you could get hit with returned payment fees.",
            textZh: "我可以帮您办理。在继续之前，我想确认没有待处理的交易。您当前余额是1,247.50美元，我看到两笔待处理交易——35美元的Netflix付款和120美元的手机账单自动扣款。建议等这些结清后再关户，否则可能产生退回付款费。",
            keyPhrases: [
              { en: "pending transactions", zh: "待处理交易" },
              { en: "returned payment fees", zh: "退回付款费" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure. Let me check your account first. You've got twelve-forty-seven fifty in there and two things pending — thirty-five for Netflix and a hundred twenty auto-pay for your phone. If we close now, those bounce and you get hit with fees. Better to wait till they clear.",
                textZh: "好的。让我先查一下。账户里一千二百四十七块五，有两笔待处理——Netflix三十五和手机自动扣一百二十。现在关的话会退回，收你手续费。最好等结清。",
                actionHint: "先取消自动扣款再关户",
                frequency: "common",
              },
            ],
            casualVersion: "Let me pull up your account. You've got $1,247 and change, plus two pending — Netflix and your phone. Close now and those bounce. Wait a couple days for them to clear.",
            formalityVariants: {
              casual: "You've got twelve-forty-seven and two pending payments. Close now and they bounce. Wait for them to clear.",
              standard: "I can help you with that. Before we proceed, I want to make sure there are no pending transactions. Your current balance is $1,247.50 and I see two pending transactions — a $35 payment to Netflix and a $120 auto-pay for your phone bill. I'd recommend waiting for those to clear first, or you could get hit with returned payment fees.",
              formal: "I would be happy to assist you with the account closure. Prior to proceeding, I would like to review your account for any outstanding obligations. Your current balance is $1,247.50, and I note two pending transactions — a $35 payment to Netflix and a $120 automatic payment for your telecommunications bill. I would strongly recommend allowing these transactions to clear before initiating the closure to avoid any returned payment fees.",
            },
          },
          {
            speaker: "you",
            textEn: "Right, I should cancel those auto-payments first. Can you help me see all the recurring payments linked to this account?",
            textZh: "对，我应该先取消那些自动扣款。你能帮我看看这个账户关联的所有定期扣款吗？",
            culturalNote: "关账户前检查所有 recurring payments（定期扣款）非常重要。包括订阅服务、保险、房租等。银行可以看到从账户扣款的记录，但取消需要联系各个服务商。",
            casualVersion: "Oh right, gotta cancel those first. Can you pull up all the recurring stuff on this account?",
            commonMistake: {
              wrong: "Can you stop all my automatic payments?",
              correct: "Can you help me see all the recurring payments linked to this account?",
              explanation: "银行通常不能直接取消所有自动扣款，需要先查看列表再逐个联系服务商取消。",
            },
            formalityVariants: {
              casual: "Right, need to cancel those. Show me everything that auto-pays from this account?",
              standard: "Right, I should cancel those auto-payments first. Can you help me see all the recurring payments linked to this account?",
              formal: "You make an excellent point. I should address those automated payments first. Would you be able to provide a list of all recurring payment arrangements linked to this account?",
            },
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "I see four recurring payments: Netflix at $15.99, your phone bill at $120, gym membership at $49.99, and a cloud storage subscription at $9.99. You'll need to contact each of these companies directly to cancel or switch payment methods. I can put a stop payment on any of them from our end, but the companies might still try to charge you and report it as unpaid.",
            textZh: "我看到四笔定期扣款：Netflix 15.99美元、手机账单120美元、健身房会员49.99美元、云存储订阅9.99美元。你需要直接联系这些公司取消或更改支付方式。我可以从银行端设置止付，但公司可能仍会尝试扣款并报告为未付。",
            keyPhrases: [
              { en: "recurring payments", zh: "定期扣款" },
              { en: "stop payment", zh: "止付" },
            ],
            alternativeExpressions: [
              {
                textEn: "Four recurring charges: Netflix fifteen-ninety-nine, phone one-twenty, gym fifty bucks, cloud storage ten bucks. You need to call each one to cancel or change your payment. I can block them from our side, but they might still try to bill you and mark it unpaid.",
                textZh: "四笔定期扣款：Netflix十五块九毛九，手机一百二，健身房五十，云存储十块。你需要逐个打电话取消或改支付方式。我可以从银行端拦截，但他们可能还会尝试扣款并记为未付。",
                actionHint: "逐个联系服务商取消自动扣款",
                frequency: "common",
              },
            ],
            casualVersion: "Four things: Netflix, phone, gym, cloud storage. You gotta call each one to cancel or update your card. I can block them here, but they might still report it as unpaid on your end.",
            formalityVariants: {
              casual: "Four auto-pays — Netflix, phone, gym, cloud. Call each to cancel. I can block from here but they'll mark you unpaid.",
              standard: "I see four recurring payments: Netflix at $15.99, your phone bill at $120, gym membership at $49.99, and a cloud storage subscription at $9.99. You'll need to contact each of these companies directly to cancel or switch payment methods. I can put a stop payment on any of them from our end, but the companies might still try to charge you and report it as unpaid.",
              formal: "I have identified four recurring payment arrangements: Netflix at $15.99, your telecommunications bill at $120.00, a gym membership at $49.99, and a cloud storage subscription at $9.99. You will need to contact each service provider directly to either cancel the service or update your payment method. While I can initiate stop payments from our end, please be aware that the merchants may still attempt to process charges and may report the account as delinquent.",
            },
          },
          {
            speaker: "you",
            textEn: "Okay, I'll contact them today. Once everything clears, how do I get the remaining balance? Can you wire it to my overseas account?",
            textZh: "好的，我今天就联系他们。等一切结清后，剩余的钱怎么拿？可以电汇到我的海外账户吗？",
            culturalNote: "关户时的余额可以选择现金支取、银行支票(cashier's check)或电汇(wire transfer)。电汇到海外账户需要提供 SWIFT code 和完整的账户信息，通常收费$25-50。",
            casualVersion: "I'll call them today. After everything clears, how do I get my money? Can you wire it overseas?",
            commonMistake: {
              wrong: "Can you send my money to my country account?",
              correct: "Can you wire it to my overseas account?",
              explanation: "wire (transfer) to 是国际汇款的标准说法，overseas account 指海外账户。",
            },
            formalityVariants: {
              casual: "I'll handle those today. Once it's all clear, wire the rest to my account back home?",
              standard: "Okay, I'll contact them today. Once everything clears, how do I get the remaining balance? Can you wire it to my overseas account?",
              formal: "I will reach out to each provider today. Once all pending transactions have cleared, what are my options for receiving the remaining balance? Would it be possible to arrange an international wire transfer to my overseas account?",
            },
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "Yes, we can wire the balance to your overseas account. The wire transfer fee is $45. I'll need the receiving bank's name, SWIFT code, your account number there, and the recipient's name and address. Alternatively, I can issue a cashier's check for $10 if you'd rather carry it with you. The wire usually takes two to three business days to arrive.",
            textZh: "可以，我们可以把余额电汇到您的海外账户。电汇费45美元。我需要收款银行名称、SWIFT代码、您那边的账号、收款人姓名和地址。或者我可以开一张银行支票，手续费10美元，您可以随身带走。电汇通常两到三个工作日到账。",
            keyPhrases: [
              { en: "SWIFT code", zh: "SWIFT代码" },
              { en: "cashier's check", zh: "银行支票" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure. Wire fee is forty-five bucks. Need the bank name, SWIFT code, account number, and your name and address over there. Or I can cut you a cashier's check for ten bucks. Wire takes two to three days.",
                textZh: "可以。电汇费四十五。需要银行名、SWIFT代码、账号、还有你那边的姓名地址。或者给你开张银行支票十块钱。电汇两到三天到。",
                actionHint: "准备好海外银行的SWIFT代码",
                frequency: "common",
              },
            ],
            casualVersion: "Yep. Forty-five for the wire. I need the bank name, SWIFT code, account number, your name and address. Or a cashier's check for ten bucks. Wire takes two to three days.",
            formalityVariants: {
              casual: "Sure. Forty-five for a wire — need SWIFT, account number, bank name. Or ten bucks for a cashier's check. Wire takes a few days.",
              standard: "Yes, we can wire the balance to your overseas account. The wire transfer fee is $45. I'll need the receiving bank's name, SWIFT code, your account number there, and the recipient's name and address. Alternatively, I can issue a cashier's check for $10 if you'd rather carry it with you. The wire usually takes two to three business days to arrive.",
              formal: "Certainly, we are able to facilitate an international wire transfer of the remaining balance to your overseas account. The wire transfer fee is $45. I will require the following information: the receiving institution's name, SWIFT/BIC code, your account number, and the beneficiary's full name and address. Alternatively, I can issue a cashier's check for a fee of $10, should you prefer a physical instrument. The wire transfer typically processes within two to three business days.",
            },
          },
        ],
      },
      {
        id: "close-account-intermediate",
        titleZh: "复杂关户情况",
        titleEn: "Complex Account Closure",
        description: "处理有贷款或联名账户的关户情况",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'd like to close my checking and savings accounts. But I also have a credit card and an auto loan with you. What happens to those?",
            textZh: "我想关闭支票和储蓄账户。但我还有你们的信用卡和车贷。那些怎么处理？",
            culturalNote: "在美国，关闭存款账户不会自动取消贷款或信用卡。贷款需要全额偿还或继续按时还款。信用卡可以单独关闭，但未还余额仍需偿还。",
            casualVersion: "Want to close my checking and savings, but I've got a credit card and car loan here too. What about those?",
            commonMistake: {
              wrong: "If I close my account, do my loans close too?",
              correct: "What happens to my credit card and auto loan if I close my deposit accounts?",
              explanation: "deposit accounts（存款账户）和 credit accounts（信贷账户）是分开的，不要混为一谈。",
            },
            formalityVariants: {
              casual: "Closing checking and savings. Got a credit card and car loan too though. What happens with those?",
              standard: "I'd like to close my checking and savings accounts. But I also have a credit card and an auto loan with you. What happens to those?",
              formal: "I would like to close both my checking and savings accounts. However, I also maintain a credit card account and an auto loan with your institution. Could you advise how the closure would affect those accounts?",
            },
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "Good question. Your checking and savings can be closed independently. The credit card can also be closed, but any outstanding balance must be paid in full first. The auto loan is separate — it continues regardless of whether you have deposit accounts here. You'll still make monthly payments until it's paid off. I'd recommend keeping the checking account open if your auto loan payments are set up as auto-pay from it.",
            textZh: "好问题。支票和储蓄账户可以独立关闭。信用卡也可以关，但必须先还清所有欠款。车贷是独立的——不管你有没有存款账户都继续存在。你仍然需要每月还款直到还清。如果你的车贷设置了从支票账户自动扣款，我建议保留支票账户。",
            keyPhrases: [
              { en: "outstanding balance", zh: "未结余额/欠款" },
              { en: "paid in full", zh: "全额付清" },
            ],
            alternativeExpressions: [
              {
                textEn: "Checking and savings — close anytime. Credit card — close it, but pay off the balance first. Car loan keeps going no matter what. If your car payment auto-pays from checking, maybe keep checking open.",
                textZh: "支票和储蓄——随时可以关。信用卡——可以关，但先还清。车贷不管怎样继续。如果车贷从支票账户自动扣，最好留着支票账户。",
                actionHint: "检查车贷的扣款账户设置",
                frequency: "common",
              },
            ],
            casualVersion: "Checking and savings, no problem. Credit card — pay it off first, then close. Car loan keeps going either way. If your car payment comes out of checking, you might want to keep it open.",
            formalityVariants: {
              casual: "Checking and savings — done. Credit card — clear the balance first. Car loan stays. Keep checking if the car payment auto-pays from it.",
              standard: "Good question. Your checking and savings can be closed independently. The credit card can also be closed, but any outstanding balance must be paid in full first. The auto loan is separate — it continues regardless of whether you have deposit accounts here. You'll still make monthly payments until it's paid off. I'd recommend keeping the checking account open if your auto loan payments are set up as auto-pay from it.",
              formal: "That is an excellent question. Your checking and savings accounts may be closed independently at any time. The credit card account may also be closed; however, any outstanding balance must be settled in full prior to closure. The auto loan is a distinct obligation that continues irrespective of the status of your deposit accounts. Monthly payments remain due until the loan is fully satisfied. I would advise retaining the checking account if your auto loan payments are configured for automatic deduction from that account.",
            },
          },
          {
            speaker: "you",
            textEn: "My car payments are auto-pay from checking. Can I switch the auto-pay to an account at another bank before closing?",
            textZh: "我的车贷是从支票账户自动扣的。可以在关户前把自动扣款切换到其他银行的账户吗？",
            culturalNote: "在美国，大部分贷款都支持更改自动扣款账户(ACH debit)。通常需要提供新银行的 routing number 和 account number，更改生效需要1-2个付款周期。",
            casualVersion: "Car payment auto-pays from checking. Can I switch it to my other bank before I close?",
            commonMistake: {
              wrong: "Can I change the car payment to another bank?",
              correct: "Can I switch the auto-pay to an account at another bank?",
              explanation: "switch the auto-pay 更精确，指的是更改自动扣款的来源账户。",
            },
            formalityVariants: {
              casual: "Car loan comes from checking. Can I move that to my other bank?",
              standard: "My car payments are auto-pay from checking. Can I switch the auto-pay to an account at another bank before closing?",
              formal: "My auto loan payments are currently configured for automatic deduction from my checking account. Would it be possible to redirect the automatic payments to an account at another financial institution prior to closing this account?",
            },
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "Absolutely. I can update the auto-pay to any US bank account. I'll need the new bank's routing number and your account number there. The change takes one to two billing cycles to take effect, so I'd recommend keeping your checking account funded until the first payment successfully debits from the new account. I'll also send you a confirmation letter once the change is processed.",
            textZh: "完全可以。我可以把自动扣款更新到任何美国银行账户。我需要新银行的路由号码和你的账号。更改需要一到两个账单周期生效，所以建议在第一笔扣款成功从新账户扣取之前，保持支票账户有足够的余额。更改处理完后我会给你寄一封确认信。",
            keyPhrases: [
              { en: "routing number", zh: "路由号码" },
              { en: "billing cycle", zh: "账单周期" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure. Give me the routing and account number for the other bank. Takes one to two payment cycles to kick in. Keep money in checking until the new bank takes over the payment. I'll send a confirmation when it's done.",
                textZh: "可以。给我另一家银行的路由号码和账号。需要一到两个付款周期才生效。在新银行接管扣款之前保持支票账户有钱。搞定后给你发确认函。",
                actionHint: "准备好新银行的路由号码和账号",
                frequency: "common",
              },
            ],
            casualVersion: "Sure. I need the routing number and account number for the new bank. Takes a cycle or two to switch over. Keep your checking loaded until the first payment goes through on the new account.",
            formalityVariants: {
              casual: "Yep. Routing number, account number from the other bank. One or two cycles to switch. Keep checking funded till it kicks in.",
              standard: "Absolutely. I can update the auto-pay to any US bank account. I'll need the new bank's routing number and your account number there. The change takes one to two billing cycles to take effect, so I'd recommend keeping your checking account funded until the first payment successfully debits from the new account. I'll also send you a confirmation letter once the change is processed.",
              formal: "Certainly. I can redirect the automatic payment to any US bank account of your choosing. I will require the receiving institution's ABA routing number and your account number. Please note that the transition requires one to two billing cycles to take full effect. I would recommend maintaining sufficient funds in your current checking account until the first payment is successfully processed from the new account. A written confirmation will be sent to you once the change has been finalized.",
            },
          },
          {
            speaker: "you",
            textEn: "Great. And when I'm ready to close, will I get any final statements or tax documents? I want to make sure I have everything for my records.",
            textZh: "好的。等我准备关户时，会收到最终的账单或税务文件吗？我想确保所有记录都保留好。",
            culturalNote: "关户后银行会在下一个报表周期出具最终账单(final statement)。如果账户在这一年产生了利息(超过$10)，银行次年1月会寄1099-INT税表。即使账户关了，税表仍会寄出。",
            casualVersion: "When I close, do I get final statements or tax stuff? Want everything for my files.",
            commonMistake: {
              wrong: "Will you give me the final papers?",
              correct: "Will I get any final statements or tax documents?",
              explanation: "statements 是银行对账单，tax documents 指1099-INT等税务文件。",
            },
            formalityVariants: {
              casual: "Do I get a final statement and tax forms when I close? Need them for my records.",
              standard: "Great. And when I'm ready to close, will I get any final statements or tax documents? I want to make sure I have everything for my records.",
              formal: "Excellent. Upon closure of the accounts, will I receive final account statements and any applicable tax documentation? I would like to ensure I maintain complete records for my files.",
            },
          },
          {
            speaker: "them",
            role: "银行客户经理",
            textEn: "You'll receive a final statement within 30 days of closure showing the closing balance and any last transactions. If your accounts earned more than $10 in interest this year, we'll mail a 1099-INT tax form to your address on file by the end of January next year — even after the account is closed. Make sure we have your correct mailing address, especially if you'll be overseas. You can also download all your past statements from online banking before we close the account — I'd recommend doing that.",
            textZh: "关户后30天内你会收到最终对账单，显示关户余额和最后的交易。如果你的账户今年利息超过10美元，我们会在明年1月底前把1099-INT税表寄到你留的地址——即使账户已关闭。确保我们有你正确的邮寄地址，尤其是如果你在海外。你也可以在关户前从网上银行下载所有历史对账单——我建议你这么做。",
            keyPhrases: [
              { en: "1099-INT tax form", zh: "1099-INT利息税表" },
              { en: "final statement", zh: "最终对账单" },
            ],
            alternativeExpressions: [
              {
                textEn: "Final statement comes in about a month. If you earned over ten bucks in interest, a 1099-INT shows up by end of January next year at whatever address we have. Make sure it's current, especially if you're overseas. And download your old statements from online banking before we shut it down.",
                textZh: "最终对账单大约一个月后寄到。利息超过十块的话，1099-INT税表明年一月底前寄到登记地址。确保地址是最新的，特别是如果你在海外。关户前去网银下载历史对账单。",
                actionHint: "关户前下载所有历史对账单",
                frequency: "common",
              },
            ],
            casualVersion: "Final statement in about a month. 1099 tax form by January if you earned over ten bucks interest — goes to your address on file. Update it if you'll be overseas. Download your old statements from online banking before we close it.",
            formalityVariants: {
              casual: "Statement in a month. 1099 by January if you had interest. Update your address. Download old statements before we close.",
              standard: "You'll receive a final statement within 30 days of closure showing the closing balance and any last transactions. If your accounts earned more than $10 in interest this year, we'll mail a 1099-INT tax form to your address on file by the end of January next year — even after the account is closed. Make sure we have your correct mailing address, especially if you'll be overseas. You can also download all your past statements from online banking before we close the account — I'd recommend doing that.",
              formal: "A final statement will be issued within 30 days of account closure, documenting the closing balance and all final transactions. Should your accounts have accrued more than $10 in interest during the current tax year, a 1099-INT form will be mailed to the address on record by January 31st of the following year, regardless of the account's closed status. I would recommend verifying that your mailing address is current, particularly if you will be residing overseas. Additionally, I would strongly suggest downloading your complete statement history from our online banking platform prior to account closure for your personal records.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 贷款咨询 ====================
  // ==================== 房贷预批 ====================
  {
    id: "banking-mortgage-preapproval",
    tags: ["mortgage", "房贷", "home loan", "preapproval", "买房"],
    category: "banking",
    titleZh: "房贷预批",
    titleEn: "Mortgage Preapproval",
    description: "在银行申请房贷预批准，了解购房贷款流程",
    otherRole: "房贷顾问",
    otherRoleIcon: "🏦",
    flows: [
      {
        id: "mortgage-preapproval-basic",
        titleZh: "申请房贷预批",
        titleEn: "Applying for Mortgage Preapproval",
        description: "首次了解房贷预批流程和要求",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm looking to buy my first home and I was told I should get preapproved for a mortgage first. How does that work?",
            textZh: "你好，我想买第一套房子，别人说我应该先拿到房贷预批。这个流程是怎样的？",
            culturalNote: "在美国买房，mortgage preapproval 几乎是必须的第一步。卖家和房产经纪人通常要求买家提供 preapproval letter 才接受 offer。preapproval 和 prequalification 不同——preapproval 更正式，需要提交文件。",
            casualVersion: "Hey, I want to buy a house and heard I should get preapproved first. How does that work?",
            commonMistake: {
              wrong: "I want to get a house loan approval.",
              correct: "I'd like to get preapproved for a mortgage.",
              explanation: "mortgage preapproval 是标准术语，不说 house loan approval。",
            },
            formalityVariants: {
              casual: "First-time homebuyer here. Need a mortgage preapproval. What do I do?",
              standard: "Hi, I'm looking to buy my first home and I was told I should get preapproved for a mortgage first. How does that work?",
              formal: "Good afternoon. I am a prospective first-time homebuyer and I understand that obtaining a mortgage preapproval is an essential first step. Could you walk me through the process?",
            },
          },
          {
            speaker: "them",
            role: "房贷顾问",
            textEn: "Congratulations on taking that first step! Preapproval means we review your finances and tell you exactly how much you can borrow. Sellers take you more seriously with a preapproval letter. I'll need to look at your income, debts, assets, and credit history. The preapproval is usually good for 60 to 90 days. Would you like to get started today?",
            textZh: "恭喜你迈出第一步！预批就是我们审查你的财务状况，告诉你确切能借多少。有预批信的话卖家会更认真对待你。我需要看你的收入、债务、资产和信用记录。预批通常有效期60到90天。今天要开始吗？",
            keyPhrases: [
              { en: "preapproval letter", zh: "预批信" },
              { en: "how much you can borrow", zh: "能借多少" },
            ],
            alternativeExpressions: [
              {
                textEn: "Great move! Preapproval is basically us saying 'yes, we'll lend you this much.' Sellers want to see it before accepting your offer. I'll check income, debts, assets, credit. Good for sixty to ninety days. Want to start?",
                textZh: "明智之举！预批基本就是我们说'好的，我们愿意借你这么多钱'。卖家要看到它才接受你的报价。我要看收入、债务、资产、信用。有效期六十到九十天。要开始吗？",
                actionHint: "准备好财务文件",
                frequency: "common",
              },
            ],
            casualVersion: "Nice! Preapproval tells you how much you can borrow, and sellers need to see it. I'll look at income, debts, assets, credit. Good for sixty to ninety days. Ready to start?",
            formalityVariants: {
              casual: "Preapproval = we check your finances, tell you what you can borrow. Sellers want to see it. Good for sixty to ninety days.",
              standard: "Congratulations on taking that first step! Preapproval means we review your finances and tell you exactly how much you can borrow. Sellers take you more seriously with a preapproval letter. I'll need to look at your income, debts, assets, and credit history. The preapproval is usually good for 60 to 90 days. Would you like to get started today?",
              formal: "Congratulations on this important milestone. Mortgage preapproval is a comprehensive evaluation of your financial profile that determines the specific loan amount for which you qualify. A preapproval letter significantly strengthens your position as a buyer, as sellers and their agents view preapproved offers more favorably. The process requires a review of your income, existing obligations, assets, and credit history. The preapproval determination is typically valid for 60 to 90 days. Shall we begin the process today?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, let's do it. What documents do I need to bring? I'm a salaried employee, if that helps.",
            textZh: "好的，开始吧。我需要带什么文件？我是工薪族，如果有帮助的话。",
            culturalNote: "作为 W-2 employee（工薪族），美国房贷申请相对简单。自雇者(self-employed)通常需要提供更多文件，如两年的税表和利润表。收入稳定的W-2员工是贷款方最喜欢的借款人。",
            casualVersion: "Let's go. What do I need to bring? I've got a regular salaried job.",
            commonMistake: {
              wrong: "I work with salary. What papers do you need?",
              correct: "I'm a salaried employee. What documents do I need?",
              explanation: "salaried employee 是标准说法，documents 比 papers 更正式。",
            },
            formalityVariants: {
              casual: "Let's start. What do I bring? I've got a regular job with a salary.",
              standard: "Yes, let's do it. What documents do I need to bring? I'm a salaried employee, if that helps.",
              formal: "I would like to proceed. Could you provide a list of the required documentation? I should note that I am a salaried employee, which I trust may simplify the process.",
            },
          },
          {
            speaker: "them",
            role: "房贷顾问",
            textEn: "Being salaried makes it straightforward. I'll need your two most recent pay stubs, W-2 forms from the last two years, two months of bank statements showing your savings, a valid photo ID, and your Social Security number. If you have any other debts — car loan, student loans, credit cards — I'll need those account numbers too. We'll also pull your credit report, which does involve a hard inquiry.",
            textZh: "工薪族的话流程比较简单。我需要你最近两份工资单、过去两年的W-2表、两个月的银行对账单显示你的存款、有效的带照片证件、社会安全号码。如果你有其他债务——车贷、学贷、信用卡——我也需要那些账号。我们还会调取你的信用报告，这会涉及硬查询。",
            keyPhrases: [
              { en: "W-2 forms", zh: "W-2工资税表" },
              { en: "bank statements", zh: "银行对账单" },
            ],
            alternativeExpressions: [
              {
                textEn: "Easy with a salary job. Two recent pay stubs, two years of W-2s, two months of bank statements, photo ID, and your Social. Any debts — car, student loans, credit cards — bring those account numbers. We'll do a credit pull — hard inquiry.",
                textZh: "工薪族简单。两份最近工资单、两年W-2、两个月银行对账单、带照片证件、社安号。有债务的话——车贷、学贷、信用卡——带上账号。我们会做信用查询——硬查询。",
                actionHint: "收集所有需要的文件",
                frequency: "common",
              },
            ],
            casualVersion: "Easy since you're salaried. Pay stubs, W-2s for two years, bank statements for two months, ID, and Social. If you have any debts, bring those numbers too. We'll pull your credit — that's a hard inquiry.",
            formalityVariants: {
              casual: "Pay stubs, W-2s, bank statements, ID, Social. Any debts — bring those numbers. Credit pull is a hard inquiry.",
              standard: "Being salaried makes it straightforward. I'll need your two most recent pay stubs, W-2 forms from the last two years, two months of bank statements showing your savings, a valid photo ID, and your Social Security number. If you have any other debts — car loan, student loans, credit cards — I'll need those account numbers too. We'll also pull your credit report, which does involve a hard inquiry.",
              formal: "Your salaried employment status will certainly streamline the documentation process. I will require the following: your two most recent pay stubs, W-2 wage and tax statements for the preceding two tax years, bank statements covering the most recent two months reflecting your asset position, a valid government-issued photo identification, and your Social Security number. Should you carry any additional obligations — automobile loans, student loans, revolving credit — those account details will also be needed. Please be advised that we will conduct a credit report inquiry, which constitutes a hard inquiry.",
            },
          },
          {
            speaker: "you",
            textEn: "I have all of that. What about the down payment? I've saved up about $60,000. Is that enough for a home around $350,000?",
            textZh: "这些我都有。首付呢？我存了大约60,000美元。对于35万左右的房子够吗？",
            culturalNote: "美国传统房贷要求20%首付以避免PMI(私人抵押贷款保险)。FHA贷款最低3.5%首付，常规贷款可低至3%。首付不到20%需要支付PMI，通常是贷款金额的0.5%-1%/年。",
            casualVersion: "Got all that. Is sixty grand enough for a down payment on a three-fifty house?",
            commonMistake: {
              wrong: "I have $60,000 for the first payment.",
              correct: "I've saved $60,000 for the down payment.",
              explanation: "down payment 是首付的标准说法，不是 first payment。",
            },
            formalityVariants: {
              casual: "Got everything. Sixty grand for down payment on a three-fifty house — enough?",
              standard: "I have all of that. What about the down payment? I've saved up about $60,000. Is that enough for a home around $350,000?",
              formal: "I have all the requested documentation available. Regarding the down payment — I have accumulated approximately $60,000 in savings. Would that be sufficient for a property in the $350,000 range?",
            },
          },
          {
            speaker: "them",
            role: "房贷顾问",
            textEn: "Sixty thousand on a $350,000 home is about 17% down — that's solid. You're close to the 20% threshold, which is $70,000. With 20% down, you'd avoid PMI — that's private mortgage insurance, which typically adds $100 to $200 a month. With 17% down, you'd pay PMI until you build 20% equity. You could also look into lender-paid PMI where we roll it into a slightly higher rate. Let me show you both scenarios.",
            textZh: "35万的房子放6万首付大约是17%——很不错。你离20%的门槛只差一点，就是70,000美元。首付20%的话可以免PMI——就是私人抵押贷款保险，通常每月增加100到200美元。17%首付的话需要付PMI直到你积累了20%的房屋净值。你也可以考虑贷方付PMI的方案，我们把它算到略高的利率里。让我给你看两个方案。",
            keyPhrases: [
              { en: "PMI (Private Mortgage Insurance)", zh: "私人抵押贷款保险" },
              { en: "20% down / equity threshold", zh: "20%首付/净值门槛" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sixty on three-fifty is seventeen percent — close to the magic twenty. At twenty percent — seventy grand — no PMI. Under twenty, you pay PMI, about a hundred to two hundred a month until you hit twenty percent equity. Or we do lender-paid PMI — baked into a higher rate. Let me show you both.",
                textZh: "六万对三十五万是百分之十七——接近神奇的二十了。二十个点——七万——不用付PMI。低于二十的话要付PMI，每月大约一百到两百，直到房屋净值到二十个点。或者我们做贷方付PMI——算到更高的利率里。让我给你看两个方案。",
                actionHint: "比较两种PMI方案的长期成本",
                frequency: "common",
              },
            ],
            casualVersion: "Seventeen percent down — solid, close to twenty. Hit twenty percent at seventy grand and you skip PMI. Under twenty, PMI adds a hundred to two hundred a month. Or we roll PMI into a higher rate. Let me show you both options.",
            formalityVariants: {
              casual: "Seventeen percent. Close to twenty. Twenty means no PMI. Under twenty — PMI runs a hundred to two hundred a month. Or we bake it into the rate.",
              standard: "Sixty thousand on a $350,000 home is about 17% down — that's solid. You're close to the 20% threshold, which is $70,000. With 20% down, you'd avoid PMI — that's private mortgage insurance, which typically adds $100 to $200 a month. With 17% down, you'd pay PMI until you build 20% equity. You could also look into lender-paid PMI where we roll it into a slightly higher rate. Let me show you both scenarios.",
              formal: "A $60,000 down payment on a $350,000 property represents approximately 17% — a very strong position. You are approaching the 20% threshold, which would be $70,000. A 20% down payment eliminates the requirement for Private Mortgage Insurance, which typically adds $100 to $200 to your monthly payment. At 17% down, PMI would be required until you accumulate 20% equity in the property. Alternatively, we offer a lender-paid PMI option, which incorporates the cost into a marginally higher interest rate. Allow me to present both scenarios for your comparison.",
            },
          },
        ],
      },
      {
        id: "mortgage-preapproval-intermediate",
        titleZh: "房贷利率和产品比较",
        titleEn: "Comparing Mortgage Rates and Products",
        description: "深入比较不同房贷类型和锁定利率",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I've been preapproved for $320,000. Now I need to decide between a 30-year fixed and a 7/1 ARM. Can you explain the difference and help me figure out which makes more sense for my situation?",
            textZh: "我已经预批了32万。现在需要在30年固定和7/1 ARM之间选择。你能解释一下区别，帮我看哪个更适合我的情况吗？",
            culturalNote: "30-year fixed 是美国最受欢迎的房贷类型，利率锁定30年不变。ARM(Adjustable Rate Mortgage)在初始期后利率会调整。7/1 ARM 意味着前7年固定利率，之后每年调整一次。ARM 初始利率通常比固定利率低。",
            casualVersion: "Got preapproved for three-twenty. Thirty-year fixed or a 7/1 ARM — which one should I pick?",
            commonMistake: {
              wrong: "What is the difference between fixed loan and changing loan?",
              correct: "Can you explain the difference between a fixed-rate mortgage and an ARM?",
              explanation: "ARM (Adjustable Rate Mortgage) 是可调利率房贷的标准缩写，不说 changing loan。",
            },
            formalityVariants: {
              casual: "Preapproved for three-twenty. Thirty-year fixed or 7/1 ARM — what's better?",
              standard: "I've been preapproved for $320,000. Now I need to decide between a 30-year fixed and a 7/1 ARM. Can you explain the difference and help me figure out which makes more sense for my situation?",
              formal: "I have received preapproval for $320,000. I am now evaluating the merits of a 30-year fixed-rate mortgage versus a 7/1 adjustable-rate mortgage. Could you outline the key differences and assist me in determining which product best suits my circumstances?",
            },
          },
          {
            speaker: "them",
            role: "房贷顾问",
            textEn: "Sure. Our 30-year fixed is at 6.75% — your payment stays the same for 30 years, totally predictable. The 7/1 ARM starts at 5.9% for the first seven years, then adjusts annually based on market rates. The ARM has a 2% annual cap and a 5% lifetime cap, so the highest it could ever go is 10.9%. For $320,000, the fixed payment would be about $2,075 a month. The ARM starts at about $1,895. How long do you plan to stay in the home?",
            textZh: "当然。我们的30年固定利率是6.75%——月供30年不变，完全可预测。7/1 ARM前七年利率5.9%，之后每年根据市场利率调整。ARM有2%的年度上限和5%的终身上限，所以最高到10.9%。32万的话，固定月供大约2,075美元。ARM起始大约1,895美元。你计划在这个房子住多久？",
            keyPhrases: [
              { en: "annual cap / lifetime cap", zh: "年度上限 / 终身上限" },
              { en: "adjusts annually", zh: "每年调整" },
            ],
            alternativeExpressions: [
              {
                textEn: "Thirty-year fixed — six-seventy-five, same payment forever. 7/1 ARM — five-nine for seven years, then it floats with the market. Two percent cap per year, five percent lifetime, so max ten-nine. Fixed is about twenty-seventy-five a month. ARM starts at about eighteen-ninety-five. How long you staying?",
                textZh: "三十年固定——六七五，月供永远不变。7/1 ARM——前七年五九，然后跟市场走。每年上限两个点，终身五个点，最高十九。固定月供大约两千零七十五。ARM起始大约一千八百九十五。你打算住多久？",
                actionHint: "评估自己的居住计划决定房贷类型",
                frequency: "common",
              },
            ],
            casualVersion: "Fixed — six-seventy-five, same forever. ARM — five-nine for seven years, then floats. Two percent cap per year, ten-nine max ever. Fixed is about twenty-seventy-five a month. ARM starts at eighteen-ninety-five. How long you plan to live there?",
            formalityVariants: {
              casual: "Fixed is six-seventy-five, stays the same. ARM is five-nine for seven years, then adjusts. Max it can go is ten-nine. How long you staying?",
              standard: "Sure. Our 30-year fixed is at 6.75% — your payment stays the same for 30 years, totally predictable. The 7/1 ARM starts at 5.9% for the first seven years, then adjusts annually based on market rates. The ARM has a 2% annual cap and a 5% lifetime cap, so the highest it could ever go is 10.9%. For $320,000, the fixed payment would be about $2,075 a month. The ARM starts at about $1,895. How long do you plan to stay in the home?",
              formal: "Certainly. Our 30-year fixed-rate mortgage is currently offered at 6.75% APR, providing a consistent monthly payment throughout the entire loan term. Our 7/1 ARM features an initial rate of 5.9% for the first seven years, after which it adjusts annually based on prevailing market indices. The ARM includes protective caps — a 2% annual adjustment ceiling and a 5% lifetime ceiling, limiting the maximum possible rate to 10.9%. For a $320,000 loan, the fixed-rate payment would be approximately $2,075 per month, while the ARM would begin at approximately $1,895. May I ask how long you anticipate residing in the property?",
            },
          },
          {
            speaker: "you",
            textEn: "Probably five to seven years. My company might relocate me. So with the ARM, I'd save about $180 a month for those seven years and then sell before the rate adjusts?",
            textZh: "大概五到七年。我的公司可能会调我去其他地方。那用ARM的话，前七年每月省大约180美元，然后在利率调整前卖掉？",
            culturalNote: "很多美国人不会在一套房子住满30年，平均住7-10年。如果确定5-7年内会搬走，ARM可能更经济。但如果计划改变被迫住更久，利率上涨的风险就很大。",
            casualVersion: "Five to seven years, probably. Might get relocated. So I save a hundred eighty a month with the ARM and sell before it adjusts?",
            commonMistake: {
              wrong: "If I sell the house before seven years, the ARM is better?",
              correct: "So with the ARM, I'd save about $180 a month and sell before the rate adjusts?",
              explanation: "before the rate adjusts 准确描述了ARM利率调整的时间点。",
            },
            formalityVariants: {
              casual: "Five to seven years, might get moved. Save a hundred eighty a month with the ARM and bounce before it adjusts?",
              standard: "Probably five to seven years. My company might relocate me. So with the ARM, I'd save about $180 a month for those seven years and then sell before the rate adjusts?",
              formal: "I anticipate remaining in the property for approximately five to seven years, as my employer may require relocation. If I understand correctly, the ARM would yield savings of approximately $180 per month during the initial fixed period, with the intent to sell prior to the rate adjustment?",
            },
          },
          {
            speaker: "them",
            role: "房贷顾问",
            textEn: "Exactly. Over seven years, that's roughly $15,000 in savings with the ARM. If you're confident you'll sell or refinance within that window, it's a smart play. But here's the thing — if plans change and you stay past year seven, you need to be comfortable with potential rate increases. I always tell people: choose the fixed if you want to sleep well at night, choose the ARM if you want to save and have a clear exit plan.",
            textZh: "没错。七年下来ARM大约省15,000美元。如果你确定在那个时间窗口内会卖或再融资，这是个聪明的选择。但问题是——如果计划变了住超过七年，你需要能接受利率上涨的可能。我总跟客户说：想安心就选固定，想省钱且有明确退出计划就选ARM。",
            keyPhrases: [
              { en: "refinance", zh: "再融资" },
              { en: "exit plan", zh: "退出计划" },
            ],
            alternativeExpressions: [
              {
                textEn: "Right. Fifteen grand saved over seven years with the ARM. If you know you're out by then — selling or refinancing — go ARM. If not, and you're stuck past year seven, rates could jump. Fixed = peace of mind. ARM = savings with a plan.",
                textZh: "对。七年ARM省一万五。如果确定到时候会走——卖掉或再融资——选ARM。如果不确定，过了第七年利率可能跳涨。固定=安心。ARM=有计划的省钱。",
                actionHint: "根据职业发展计划做决定",
                frequency: "common",
              },
            ],
            casualVersion: "Yep. Fifteen grand saved in seven years. If you're definitely out by then, ARM is the way to go. If you might stay longer, go fixed for peace of mind. Fixed = safety. ARM = savings with a plan.",
            formalityVariants: {
              casual: "Fifteen K saved over seven years. Know you're leaving? ARM. Not sure? Fixed. Simple.",
              standard: "Exactly. Over seven years, that's roughly $15,000 in savings with the ARM. If you're confident you'll sell or refinance within that window, it's a smart play. But here's the thing — if plans change and you stay past year seven, you need to be comfortable with potential rate increases. I always tell people: choose the fixed if you want to sleep well at night, choose the ARM if you want to save and have a clear exit plan.",
              formal: "Precisely. The cumulative savings over the seven-year initial period would be approximately $15,000 with the ARM. If you are reasonably confident that you will either sell the property or refinance within that timeframe, the ARM presents a financially advantageous option. However, should circumstances change and you remain in the property beyond the initial seven-year period, you must be prepared for potential rate adjustments. As a general guideline: the fixed rate offers stability and predictability, while the ARM offers savings contingent upon a defined exit strategy.",
            },
          },
          {
            speaker: "you",
            textEn: "I think the ARM makes sense for my situation. Can I lock in that 5.9% rate today? I'm worried rates might go up before I find a house.",
            textZh: "我觉得ARM更适合我的情况。今天能锁定5.9%的利率吗？我担心找房子之前利率会涨。",
            culturalNote: "Rate lock（利率锁定）通常在正式贷款申请后才能做，有30天、45天、60天等不同时长。锁定期越长可能要加费用或利率略高。有些银行提供 float-down 选项——锁定后如果利率下降可以申请降低。",
            casualVersion: "ARM it is. Can I lock five-nine today? Don't want rates going up while I'm house hunting.",
            commonMistake: {
              wrong: "Can I keep this interest rate?",
              correct: "Can I lock in that rate today?",
              explanation: "lock in a rate 是锁定利率的标准说法。",
            },
            formalityVariants: {
              casual: "Going with the ARM. Can I lock the rate now before it goes up?",
              standard: "I think the ARM makes sense for my situation. Can I lock in that 5.9% rate today? I'm worried rates might go up before I find a house.",
              formal: "The ARM appears most appropriate for my circumstances. Is it possible to secure a rate lock at 5.9% today? I have concerns about potential rate increases during the home search period.",
            },
          },
          {
            speaker: "them",
            role: "房贷顾问",
            textEn: "We can lock your rate once you submit a formal application, but the lock has a timeframe. A 30-day lock is free, 45 days adds an eighth of a point, and 60 days adds a quarter point. If you haven't found a house yet, I'd suggest waiting to lock until you have an accepted offer — you don't want the lock to expire. We also offer a float-down option: if rates drop after you lock, you can get the lower rate for a small fee. When do you expect to make an offer?",
            textZh: "提交正式申请后就可以锁定利率，但锁定有时间限制。30天锁定免费，45天加0.125个点，60天加0.25个点。如果你还没找到房子，我建议等有了被接受的offer再锁——不然锁定到期就白费了。我们还有float-down选项：锁定后如果利率下降，可以花一小笔费用拿到更低利率。你预计什么时候出offer？",
            keyPhrases: [
              { en: "rate lock", zh: "利率锁定" },
              { en: "float-down option", zh: "浮动下调选项" },
            ],
            alternativeExpressions: [
              {
                textEn: "Lock is available after you apply. Thirty days free, forty-five costs an eighth of a point, sixty costs a quarter point. Don't lock until you have a deal — you don't want it to expire. We have a float-down too — rates drop after locking, pay a small fee and get the lower rate. When are you making an offer?",
                textZh: "申请后可以锁。三十天免费，四十五天多八分之一个点，六十天多四分之一个点。没成交别锁——到期就没了。我们有浮动下调——锁定后利率降了，付一小笔费用拿更低利率。你什么时候出价？",
                actionHint: "在有被接受的offer后再锁定利率",
                frequency: "common",
              },
            ],
            casualVersion: "Lock after you apply. Thirty days free, longer costs more. Wait till you have a deal to lock — don't want it to expire. We also have a float-down if rates drop. When are you making an offer?",
            formalityVariants: {
              casual: "Lock after applying. Free for thirty days, costs a bit more for longer. Lock when you have a deal, not before. Float-down available if rates drop.",
              standard: "We can lock your rate once you submit a formal application, but the lock has a timeframe. A 30-day lock is free, 45 days adds an eighth of a point, and 60 days adds a quarter point. If you haven't found a house yet, I'd suggest waiting to lock until you have an accepted offer — you don't want the lock to expire. We also offer a float-down option: if rates drop after you lock, you can get the lower rate for a small fee. When do you expect to make an offer?",
              formal: "A rate lock may be secured upon submission of a formal application; however, it is subject to a defined timeframe. A 30-day lock carries no additional cost. A 45-day lock adds one-eighth of a percentage point, and a 60-day lock adds one-quarter of a point. I would advise against locking prematurely — ideally, you should lock upon having an accepted purchase agreement to avoid the risk of expiration. We also offer a float-down provision: should rates decrease after your lock, you may elect the lower rate for a nominal fee. What is your anticipated timeline for making an offer on a property?",
            },
          },
        ],
      },
    ],
  },
  // ==================== 移动支付(Zelle/Venmo) ====================
  {
    id: "banking-zelle-venmo",
    tags: ["Zelle", "Venmo", "mobile payment", "移动支付", "P2P", "transfer"],
    category: "banking",
    titleZh: "移动支付(Zelle/Venmo)",
    titleEn: "Mobile Payment (Zelle/Venmo)",
    description: "在银行设置和使用Zelle等移动支付工具进行转账",
    otherRole: "银行客服代表",
    otherRoleIcon: "🏦",
    flows: [
      {
        id: "zelle-venmo-basic",
        titleZh: "设置Zelle",
        titleEn: "Setting Up Zelle",
        description: "在银行App中设置Zelle进行个人转账",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, my roommate wants me to pay rent through Zelle, but I've never used it. Can you help me set it up?",
            textZh: "你好，我室友想让我通过Zelle付房租，但我从没用过。你能帮我设置吗？",
            culturalNote: "Zelle 是美国银行间的即时转账系统，直接集成在大多数银行的App里。和 Venmo/Cash App 不同，Zelle 直接银行对银行转账，不需要第三方App。在美国，很多人用Zelle分摊房租、餐费等。",
            casualVersion: "Hey, my roommate wants rent through Zelle. Never used it. Can you help me get it going?",
            commonMistake: {
              wrong: "I want to install Zelle.",
              correct: "Can you help me set up Zelle?",
              explanation: "Zelle不需要单独安装，它内置在银行App里。说 set up Zelle 而不是 install Zelle。",
            },
            formalityVariants: {
              casual: "Roommate wants Zelle for rent. How do I set it up?",
              standard: "Hi, my roommate wants me to pay rent through Zelle, but I've never used it. Can you help me set it up?",
              formal: "Good morning. My roommate has requested that I remit rent payments via Zelle. I have not previously used the service. Could you assist me with the setup process?",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "Absolutely! Zelle is already built into our banking app, so there's nothing to download. Just open the app, go to 'Send Money' or 'Transfers,' and you'll see the Zelle option. You'll register with either your email address or phone number. Which would you prefer?",
            textZh: "当然！Zelle已经内置在我们的银行App里了，不需要下载任何东西。打开App，找到'转账'或'发送'，就能看到Zelle选项。你用电子邮箱或手机号注册就行。你想用哪个？",
            keyPhrases: [
              { en: "built into the banking app", zh: "内置在银行App里" },
              { en: "register with your email or phone number", zh: "用邮箱或手机号注册" },
            ],
            alternativeExpressions: [
              {
                textEn: "Easy — Zelle is in the app already. Open the app, find 'Send Money,' tap Zelle. Sign up with your email or phone number. Which one do you want to use?",
                textZh: "很简单——Zelle已经在App里了。打开App，找到'转账'，点Zelle。用邮箱或手机号注册。你想用哪个？",
                actionHint: "打开银行App找到Zelle选项",
                frequency: "common",
              },
            ],
            casualVersion: "It's already in the app. Open it up, go to Send Money, you'll see Zelle. Sign up with your email or phone number. Which one?",
            formalityVariants: {
              casual: "It's in the app already. Open it, find Send Money, tap Zelle. Email or phone to register?",
              standard: "Absolutely! Zelle is already built into our banking app, so there's nothing to download. Just open the app, go to 'Send Money' or 'Transfers,' and you'll see the Zelle option. You'll register with either your email address or phone number. Which would you prefer?",
              formal: "Certainly. Zelle is integrated directly into our mobile banking application, eliminating the need for any additional downloads. Simply navigate to the 'Send Money' or 'Transfers' section within the app, where you will find the Zelle option. Registration requires either an email address or mobile phone number. Which would you prefer to use for enrollment?",
            },
          },
          {
            speaker: "you",
            textEn: "I'll use my phone number. Is there a fee to send money through Zelle? And is there a daily limit?",
            textZh: "我用手机号吧。通过Zelle转账有手续费吗？有每日限额吗？",
            culturalNote: "Zelle 本身不收费，但部分小银行可能收。大部分银行的Zelle每日限额在$500-$2,500之间，部分银行可以申请提高。转账通常几分钟到账，比 Venmo 的银行转出(1-3天)快很多。",
            casualVersion: "Phone number. Does Zelle charge anything? And how much can I send at once?",
            commonMistake: {
              wrong: "Do I need to pay fee for Zelle?",
              correct: "Is there a fee to send money through Zelle?",
              explanation: "a fee to send money 是正确表达，不说 pay fee for Zelle。",
            },
            formalityVariants: {
              casual: "Phone number works. Any fees? How much can I send?",
              standard: "I'll use my phone number. Is there a fee to send money through Zelle? And is there a daily limit?",
              formal: "I will register with my phone number. Are there any fees associated with Zelle transactions? Additionally, are there daily transaction limits I should be aware of?",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "No fees at all — Zelle is free to send and receive through our app. Your daily sending limit is $2,000, and your monthly limit is $10,000. The money goes directly from your checking account to the recipient's bank account, usually within minutes. One important thing — once you send money through Zelle, you can't cancel it if the recipient is already enrolled. So always double-check the phone number or email before hitting send.",
            textZh: "完全不收费——通过我们的App使用Zelle发送和接收都是免费的。你的每日发送限额是2,000美元，每月限额10,000美元。钱直接从你的支票账户到收款人的银行账户，通常几分钟内。重要的是——一旦通过Zelle转出，如果收款人已经注册了Zelle就不能取消。所以发送前一定要仔细核对手机号或邮箱。",
            keyPhrases: [
              { en: "daily sending limit", zh: "每日发送限额" },
              { en: "can't cancel once sent", zh: "发送后不能取消" },
            ],
            alternativeExpressions: [
              {
                textEn: "Totally free. Two grand a day, ten grand a month. Money goes bank to bank in minutes. Big warning though — once it's sent and the person has Zelle, you can't take it back. Always check the number or email first.",
                textZh: "完全免费。每天两千，每月一万。钱银行对银行几分钟到。但要注意——一旦发了而且对方有Zelle，就不能撤回。一定先核对号码或邮箱。",
                actionHint: "发送前仔细确认收款人信息",
                frequency: "common",
              },
            ],
            casualVersion: "Free. Two grand a day, ten a month. Goes bank to bank in minutes. But once you send it, there's no taking it back if they're on Zelle. Double-check the number before sending.",
            formalityVariants: {
              casual: "Free. Two K a day, ten K a month. Goes in minutes. Can't undo it once sent. Check the number first.",
              standard: "No fees at all — Zelle is free to send and receive through our app. Your daily sending limit is $2,000, and your monthly limit is $10,000. The money goes directly from your checking account to the recipient's bank account, usually within minutes. One important thing — once you send money through Zelle, you can't cancel it if the recipient is already enrolled. So always double-check the phone number or email before hitting send.",
              formal: "There are no fees associated with Zelle transactions through our application — both sending and receiving are entirely complimentary. Your daily sending limit is $2,000, with a monthly aggregate limit of $10,000. Funds are transferred directly from your checking account to the recipient's bank account, typically within minutes. I must emphasize one critical point: once a Zelle payment is sent to an enrolled recipient, the transaction cannot be cancelled or reversed. I strongly advise verifying the recipient's phone number or email address carefully before initiating any transfer.",
            },
          },
          {
            speaker: "you",
            textEn: "My rent is $1,500, so the daily limit should be fine. What's the difference between Zelle and Venmo? My other friends use Venmo.",
            textZh: "我房租1,500美元，每日限额够了。Zelle和Venmo有什么区别？我其他朋友用Venmo。",
            culturalNote: "Zelle是银行系统直连，速度快且免费，但没有社交功能。Venmo是第三方App，有社交动态(可以看朋友转账)，但提现到银行需要1-3天（即时提现收1.75%费用）。年轻人社交场合更常用Venmo。",
            casualVersion: "Rent's fifteen hundred, so that works. What's the deal with Zelle versus Venmo? My friends all use Venmo.",
            commonMistake: {
              wrong: "Is Zelle same as Venmo?",
              correct: "What's the difference between Zelle and Venmo?",
              explanation: "what's the difference between 是比较两样东西的标准句型。",
            },
            formalityVariants: {
              casual: "Fifteen hundred for rent, no problem. Why Zelle over Venmo?",
              standard: "My rent is $1,500, so the daily limit should be fine. What's the difference between Zelle and Venmo? My other friends use Venmo.",
              formal: "My monthly rent is $1,500, so the daily limit is adequate. Could you explain the differences between Zelle and Venmo? Several of my acquaintances use Venmo and I would like to understand the comparative advantages.",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "Good question. Zelle goes directly bank-to-bank in minutes with no fees. Venmo is a separate app — money sits in a Venmo balance and you have to transfer it to your bank, which takes one to three days unless you pay 1.75% for instant transfer. Venmo has a social feed feature, which younger people like, but Zelle is more secure since it's built into your bank. For rent, I'd recommend Zelle — it's faster, free, and your landlord gets the money right away.",
            textZh: "好问题。Zelle直接银行对银行转账，几分钟到账，不收费。Venmo是独立App——钱先到Venmo余额里，转到银行需要一到三天，除非付1.75%做即时转账。Venmo有社交动态功能，年轻人喜欢，但Zelle更安全因为内置在银行里。付房租的话我推荐Zelle——更快、免费，房东马上能收到钱。",
            keyPhrases: [
              { en: "bank-to-bank", zh: "银行对银行" },
              { en: "social feed", zh: "社交动态" },
            ],
            alternativeExpressions: [
              {
                textEn: "Zelle — direct bank transfer, minutes, free. Venmo — separate app, money sits in Venmo, takes one to three days to move to bank or pay one-seventy-five percent for instant. Venmo has social features. Zelle is more secure. For rent, go Zelle — fast, free, money's there instantly.",
                textZh: "Zelle——直接银行转账，几分钟，免费。Venmo——独立App，钱在Venmo里，转银行一到三天或付1.75%即时到。Venmo有社交功能。Zelle更安全。付房租用Zelle——快、免费、马上到。",
                actionHint: "用Zelle付房租，Venmo用于社交场合",
                frequency: "common",
              },
            ],
            casualVersion: "Zelle — bank to bank, instant, free. Venmo — separate app, money sits there, takes days to get to your bank unless you pay for instant. Venmo's got the social thing. For rent, Zelle is the way to go.",
            formalityVariants: {
              casual: "Zelle = instant, free, bank to bank. Venmo = separate app, money sits there, costs to move fast. Zelle for rent, Venmo for splitting pizza with friends.",
              standard: "Good question. Zelle goes directly bank-to-bank in minutes with no fees. Venmo is a separate app — money sits in a Venmo balance and you have to transfer it to your bank, which takes one to three days unless you pay 1.75% for instant transfer. Venmo has a social feed feature, which younger people like, but Zelle is more secure since it's built into your bank. For rent, I'd recommend Zelle — it's faster, free, and your landlord gets the money right away.",
              formal: "Excellent question. Zelle facilitates direct bank-to-bank transfers, typically completing within minutes, at no cost. Venmo operates as a separate third-party application — received funds are held in a Venmo balance and must be transferred to your bank account, a process that takes one to three business days, unless you opt for an instant transfer at a 1.75% fee. While Venmo offers social features that appeal to younger demographics, Zelle provides enhanced security as it is integrated directly into your banking infrastructure. For recurring rent payments, I would recommend Zelle — it is faster, fee-free, and ensures your landlord receives funds immediately.",
            },
          },
          {
            speaker: "you",
            textEn: "Makes sense. I'll use Zelle for rent and keep Venmo for splitting dinners with friends. Thanks for explaining everything so clearly!",
            textZh: "有道理。我用Zelle付房租，Venmo用来跟朋友分摊饭钱。谢谢你解释得这么清楚！",
            culturalNote: "在美国，年轻人之间AA制(splitting the bill)非常常见。Venmo甚至成了动词——'Venmo me'（用Venmo转给我）是年轻人之间很常说的话。",
            casualVersion: "Got it. Zelle for rent, Venmo for dinners. Thanks!",
            commonMistake: {
              wrong: "I will Zelle for rent and Venmo for dinner.",
              correct: "I'll use Zelle for rent and Venmo for splitting dinners.",
              explanation: "use Zelle for 是正确结构。splitting dinners 表示分摊餐费。",
            },
            formalityVariants: {
              casual: "Zelle for rent, Venmo for friends. Got it. Thanks!",
              standard: "Makes sense. I'll use Zelle for rent and keep Venmo for splitting dinners with friends. Thanks for explaining everything so clearly!",
              formal: "That is very logical. I will utilize Zelle for rent payments and maintain Venmo for social expenditure sharing with friends. Thank you for your thorough and clear explanation.",
            },
          },
        ],
      },
      {
        id: "zelle-venmo-intermediate",
        titleZh: "Zelle转账问题和安全",
        titleEn: "Zelle Transfer Issues and Security",
        description: "处理Zelle转账问题和防范诈骗",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I sent $500 through Zelle to the wrong person by accident — I typed the wrong phone number. Is there any way to get it back?",
            textZh: "我通过Zelle不小心给错人转了500美元——我输错了手机号。有办法要回来吗？",
            culturalNote: "Zelle 转错钱是美国常见的问题。如果收款人已注册Zelle，钱会即时到账且不可撤回。银行通常不担保Zelle转账错误，需要联系收款人自愿退回。如果收款人未注册，转账会在14天后自动退回。",
            casualVersion: "I Zelle'd five hundred to the wrong number. Can I get it back?",
            commonMistake: {
              wrong: "I sent Zelle to wrong person. Please return my money.",
              correct: "I sent $500 through Zelle to the wrong person. Is there any way to get it back?",
              explanation: "银行不能直接退款，要用 is there any way 委婉询问解决方案。",
            },
            formalityVariants: {
              casual: "Sent five hundred to the wrong number on Zelle. What can I do?",
              standard: "I sent $500 through Zelle to the wrong person by accident — I typed the wrong phone number. Is there any way to get it back?",
              formal: "I inadvertently sent $500 via Zelle to an incorrect recipient — I entered the wrong phone number. Is there any recourse available to recover the funds?",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "I'm sorry to hear that. Let me check the status. If the recipient is already enrolled in Zelle, the money would have gone through instantly and unfortunately, we can't reverse it from our end. However, I can see the payment is still pending — it looks like that phone number isn't registered with Zelle yet. That means the recipient has 14 days to claim it. If they don't, the money automatically returns to your account.",
            textZh: "很遗憾听到这个。让我查一下状态。如果收款人已经注册了Zelle，钱会即时到账，不幸的是我们无法从银行端撤回。不过我看到这笔付款还是待处理状态——看起来那个手机号还没有注册Zelle。这意味着收款人有14天时间认领。如果他们不认领，钱会自动退回你的账户。",
            keyPhrases: [
              { en: "still pending", zh: "仍在待处理" },
              { en: "automatically returns", zh: "自动退回" },
            ],
            alternativeExpressions: [
              {
                textEn: "Let me look. If they're on Zelle, the money's gone — we can't pull it back. But looks like that number isn't registered. Payment's pending. They have fourteen days to claim it. If they don't, you get it back automatically.",
                textZh: "我查一下。如果对方有Zelle，钱就走了——我们拉不回来。但看起来那个号码没注册。付款还在待处理。他们有十四天认领。不认领的话自动退给你。",
                actionHint: "等待14天自动退回",
                frequency: "common",
              },
            ],
            casualVersion: "Let me check... good news — that number isn't on Zelle. Payment's pending. They have fourteen days to claim it. If they don't, you get it back. If they were already on Zelle, we couldn't reverse it.",
            formalityVariants: {
              casual: "Checking... that number's not on Zelle. Money's pending. Fourteen days, then it comes back. Lucky.",
              standard: "I'm sorry to hear that. Let me check the status. If the recipient is already enrolled in Zelle, the money would have gone through instantly and unfortunately, we can't reverse it from our end. However, I can see the payment is still pending — it looks like that phone number isn't registered with Zelle yet. That means the recipient has 14 days to claim it. If they don't, the money automatically returns to your account.",
              formal: "I am sorry to learn of this situation. Allow me to review the transaction status. Had the recipient been an enrolled Zelle user, the funds would have been transferred instantly, and regrettably, reversal from our end would not be possible. However, I can confirm that the payment remains in a pending state — it appears the phone number is not currently registered with Zelle. This means the recipient has a 14-day window to claim the funds. Should they not do so, the funds will be automatically returned to your account.",
            },
          },
          {
            speaker: "you",
            textEn: "Oh thank goodness. Can I cancel it right now instead of waiting 14 days?",
            textZh: "谢天谢地。我能现在就取消而不是等14天吗？",
            culturalNote: "如果Zelle转账还在 pending 状态(收款人未注册)，有些银行允许取消。但并非所有银行都支持这个功能。取消选项通常在银行App的转账历史中。",
            casualVersion: "Thank God. Can I just cancel it now?",
            commonMistake: {
              wrong: "Can you delete the transfer?",
              correct: "Can I cancel it right now?",
              explanation: "cancel 是取消交易的正确用词，不用 delete。",
            },
            formalityVariants: {
              casual: "Oh man, that's a relief. Can I just kill it now instead of waiting?",
              standard: "Oh thank goodness. Can I cancel it right now instead of waiting 14 days?",
              formal: "That is a great relief. Would it be possible to cancel the pending transaction immediately rather than waiting the full 14-day period?",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "Yes! Since it's still pending, you can cancel it right from the app. Go to your Zelle activity, find the pending payment, and tap 'Cancel.' The $500 will be back in your checking account right away. In the future, Zelle will show you the recipient's name before you confirm — always verify that name matches who you're trying to pay.",
            textZh: "可以！因为还在待处理状态，你可以直接在App里取消。去Zelle活动记录，找到待处理的付款，点'取消'。500美元会立即退回你的支票账户。以后记住，Zelle在确认前会显示收款人的名字——一定要核实名字是否匹配你要付款的人。",
            keyPhrases: [
              { en: "Zelle activity", zh: "Zelle活动记录" },
              { en: "verify the name", zh: "核实名字" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yep, since it's pending you can cancel. Go to Zelle activity, find it, hit Cancel. Money's back instantly. Pro tip — Zelle shows the recipient's name before you send. Always check it matches.",
                textZh: "可以，既然还在待处理就能取消。去Zelle活动记录，找到，点取消。钱马上回来。小贴士——Zelle在发送前会显示收款人名字。一定核对。",
                actionHint: "立即去App取消待处理的转账",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah! It's still pending so you can cancel in the app. Go to Zelle activity, find it, tap Cancel. Money's back instantly. Next time, check the name Zelle shows you before confirming.",
            formalityVariants: {
              casual: "Yep. Open the app, Zelle activity, find it, hit Cancel. Money back now. Next time check the name before sending.",
              standard: "Yes! Since it's still pending, you can cancel it right from the app. Go to your Zelle activity, find the pending payment, and tap 'Cancel.' The $500 will be back in your checking account right away. In the future, Zelle will show you the recipient's name before you confirm — always verify that name matches who you're trying to pay.",
              formal: "Yes, that is possible. Since the transaction remains in pending status, you may cancel it directly through the mobile application. Navigate to your Zelle activity log, locate the pending payment, and select the 'Cancel' option. The $500 will be restored to your checking account immediately. Going forward, I would advise always verifying the recipient's name as displayed by Zelle prior to confirming any transaction to prevent similar occurrences.",
            },
          },
          {
            speaker: "you",
            textEn: "Done — just cancelled it. By the way, I've been getting texts that say 'Your Zelle payment of $750 is pending, click here to confirm.' Is that legit?",
            textZh: "搞定了——刚取消了。对了，我一直收到短信说'你的Zelle付款750美元正在等待，点击这里确认'。这是真的吗？",
            culturalNote: "Zelle 诈骗短信在美国非常猖獗。银行和Zelle从不会通过短信发链接要求确认付款。常见诈骗包括假装银行要求验证、假装买家付款等。FBI 每年收到大量 Zelle 诈骗投诉。",
            casualVersion: "Just cancelled. Hey, I keep getting texts about Zelle payments with links to click. Is that real?",
            commonMistake: {
              wrong: "Someone sent me message about Zelle. Is it true?",
              correct: "I've been getting texts about Zelle payments. Is that legit?",
              explanation: "legit (legitimate的缩写) 是美式口语中问'是真的吗'的常用说法。",
            },
            formalityVariants: {
              casual: "Done. Oh, also — I keep getting sketchy Zelle texts with links. Real or scam?",
              standard: "Done — just cancelled it. By the way, I've been getting texts that say 'Your Zelle payment of $750 is pending, click here to confirm.' Is that legit?",
              formal: "The cancellation has been completed. I have an additional concern — I have been receiving text messages stating that a Zelle payment of $750 is pending and directing me to click a link to confirm. Are these messages legitimate?",
            },
          },
          {
            speaker: "them",
            role: "银行客服代表",
            textEn: "That is absolutely a scam — do not click that link. We will never send you a text with a link asking you to confirm a Zelle payment. Scammers use these to steal your banking credentials. If you get a text like that, delete it immediately. If you're ever unsure, open the banking app directly — never click a link in a text or email. You can also forward suspicious texts to 7726, which is the national spam reporting number. Would you like me to add extra security alerts to your account?",
            textZh: "那绝对是诈骗——不要点那个链接。我们绝不会发带链接的短信让你确认Zelle付款。骗子用这些来盗取你的银行登录信息。收到这样的短信立即删除。如果不确定，直接打开银行App——永远不要点短信或邮件中的链接。你也可以把可疑短信转发到7726，这是全国垃圾短信举报号码。需要我给你的账户加额外的安全提醒吗？",
            keyPhrases: [
              { en: "banking credentials", zh: "银行登录信息" },
              { en: "forward to 7726", zh: "转发到7726举报" },
            ],
            alternativeExpressions: [
              {
                textEn: "One hundred percent a scam. Never click links in Zelle texts. We don't send those. They're after your login info. Delete it. If you're not sure, open the app directly. Forward scam texts to 7726. Want me to set up extra security on your account?",
                textZh: "百分之百是诈骗。绝对不要点Zelle短信里的链接。我们不发那种东西。他们要你的登录信息。删掉。不确定的话直接开App。诈骗短信转发到7726。要我给你账户加安全措施吗？",
                actionHint: "删除可疑短信并转发到7726",
                frequency: "common",
              },
            ],
            casualVersion: "Total scam. Don't click it. We never text you links about Zelle. They want your login info. Delete it. When in doubt, open the app directly. Forward sketchy texts to 7726. Want me to add extra security to your account?",
            formalityVariants: {
              casual: "Scam. Don't click. We never send links. Delete it. Open the app if you're unsure. Forward to 7726. Want extra security on your account?",
              standard: "That is absolutely a scam — do not click that link. We will never send you a text with a link asking you to confirm a Zelle payment. Scammers use these to steal your banking credentials. If you get a text like that, delete it immediately. If you're ever unsure, open the banking app directly — never click a link in a text or email. You can also forward suspicious texts to 7726, which is the national spam reporting number. Would you like me to add extra security alerts to your account?",
              formal: "That is unequivocally a fraudulent message — please do not click that link under any circumstances. Our institution will never send a text message containing a link requesting confirmation of a Zelle payment. These phishing messages are designed to compromise your banking credentials. Should you receive such a message, please delete it immediately. If you are ever uncertain about the legitimacy of a communication, please access your account directly through the official banking application — never through links in text messages or emails. You may also forward suspicious text messages to 7726, which is the national spam and fraud reporting service. Would you like me to configure additional security notifications on your account?",
            },
          },
        ],
      },
    ],
  },
];
