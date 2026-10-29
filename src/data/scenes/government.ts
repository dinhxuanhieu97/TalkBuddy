import type { PresetScene } from "../scene-types";

/**
 * 🏛️ 政府事务（Government Services）
 * 12 个场景：DMV、移民局、税务、邮局、法院等
 */
export const GOVERNMENT_SCENES: PresetScene[] = [
  // ==================== 1. 考驾照 ====================
  {
    id: "government-dmv-license",
    category: "government",
    titleZh: "考驾照",
    titleEn: "Getting a Driver's License",
    description: "第一次去DMV考驾照，了解考试流程和所需材料",
    otherRole: "DMV职员",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "基本申请流程",
        titleEn: "Basic Application Process",
        description: "去DMV申请驾照的标准流程对话",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to apply for a driver's license. This is my first time.",
            textZh: "你好，我想申请驾照。这是我第一次来。",
            culturalNote: "美国DMV办事通常直奔主题，无需过多寒暄。",
            casualVersion: "Hey, I need to get a driver's license. Where do I start?",
            commonMistake: {
              wrong: "I want to apply for a driver's license. This is my first time.",
              correct: "I'd like to apply for a driver's license. This is my first time.",
              explanation: "“I want to” 听起来太直接，不够礼貌。用 “I'd like to” 更委婉客气。",
            },
            formalityVariants: {
              casual: "Hi, wanna get a driver's license. First time here.",
              standard: "Hi, I'd like to apply for a driver's license. This is my first time.",
              formal:
                "Good morning/afternoon, I am here to initiate the process of applying for a driver's license. This marks my initial visit to your establishment.",
            },
          },
          {
            speaker: "them",
            role: "DMV职员",
            textEn:
              "Welcome. Have you taken the written test yet, or are you here to start the whole process from scratch?",
            textZh: "欢迎。您已经考过笔试了，还是从头开始整个流程？",
            commonMistake: {
              wrong: "start from zero",
              correct: "start from scratch",
              explanation: "“从零开始”用 from scratch 更地道，而不是 from zero。",
            },
            keyPhrases: [
              { en: "written test", zh: "笔试" },
              { en: "from scratch", zh: "从头开始" },
            ],
            alternativeExpressions: [
              {
                textEn: "First time? Okay, have you done the written portion yet, or do you need to do everything?",
                textZh: "第一次来？好的，笔试考过了吗，还是全部都要做？",
                actionHint: "written portion 和 written test 意思一样",
                frequency: "common",
              },
            ],
            casualVersion: "Hey. Written test done, or you starting from scratch?",
            formalityVariants: {
              casual: "Yo. Written test done, or are you starting from scratch?",
              standard:
                "Welcome. Have you taken the written test yet, or are you here to start the whole process from scratch?",
              formal:
                "Welcome. May I inquire if you have already completed the written examination, or if you are here to commence the entire application procedure?",
            },
          },
          {
            speaker: "you",
            textEn: "I haven't taken anything yet. What do I need to bring?",
            textZh: "我什么都还没考。需要带什么材料？",
            casualVersion: "Nothing yet. What do I need?",
            commonMistake: {
              wrong: "I haven't taken anything yet. What things need to bring?",
              correct: "I haven't taken anything yet. What do I need to bring?",
              explanation: "表达“需要带什么”时，通常用“What do I need to bring?”或“What should I bring?”",
            },
            formalityVariants: {
              casual: "Nah, haven't done anything yet. What do I gotta bring?",
              standard: "I haven't taken anything yet. What do I need to bring?",
              formal:
                "I have not yet completed any part of the process. Could you please inform me of the required documentation?",
            },
          },
          {
            speaker: "them",
            role: "DMV职员",
            textEn:
              "You'll need proof of identity — a passport works — proof of residency like a utility bill, and your Social Security card. There's also a twenty-eight-dollar application fee.",
            textZh: "您需要身份证明——护照就行——居住证明比如水电账单，还有社保卡。另外有28美元的申请费。",
            keyPhrases: [
              { en: "proof of identity", zh: "身份证明" },
              { en: "proof of residency", zh: "居住证明" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Bring your passport, something that shows your address — like a utility bill — your Social Security card, and twenty-eight bucks for the fee.",
                textZh: "带上护照，能证明地址的东西——比如水电账单——社保卡，还有28块钱的费用。",
                actionHint: "bucks 是美元的口语说法",
                frequency: "common",
              },
            ],
            culturalNote:
              "美国各州DMV要求略有不同，但通常需要护照/身份证明、地址证明（水电账单或银行对账单）、SSN。建议提前在DMV官网查看本州要求。",
            casualVersion:
              "Need proof of ID – passport's fine – proof of residency, like a utility bill, and your Social Security card. Plus, it's twenty-eight bucks for the application fee.",
            commonMistake: {
              wrong:
                "You'll need identity proof — passport works — residency proof like water or electricity bill, and your Social Security card.",
              correct:
                "You'll need proof of identity — a passport works — proof of residency like a utility bill, and your Social Security card.",
              explanation: "“Proof of identity/residency”是更地道的表达。“utility bill”涵盖所有水电煤账单。",
            },
            formalityVariants: {
              casual:
                "You'll need ID — passport works — residency proof like a bill, and your SSN card. And it's twenty-eight bucks.",
              standard:
                "You'll need proof of identity — a passport works — proof of residency like a utility bill, and your Social Security card. There's also a twenty-eight-dollar application fee.",
              formal:
                "You will require documentation verifying your identity — a passport is acceptable — proof of residency, such as a utility bill, and your Social Security card. Additionally, there is an application fee of twenty-eight dollars.",
            },
          },
          {
            speaker: "you",
            textEn: "I have all of those. Can I take the written test today?",
            textZh: "这些我都有。今天能考笔试吗？",
            casualVersion: "Got all that. Can I do the test today?",
            commonMistake: {
              wrong: "I have all of them. Can I test today?",
              correct: "I have all of those. Can I take the written test today?",
              explanation:
                "指代上文提到的物品通常用“those”更自然。“test today”应补上“take the written test”或“take the test”。",
            },
            formalityVariants: {
              casual: "Got all that. Can I take the test today?",
              standard: "I have all of those. Can I take the written test today?",
              formal:
                "I possess all of the aforementioned documents. Is it permissible for me to take the written examination today?",
            },
          },
          {
            speaker: "them",
            role: "DMV职员",
            textEn:
              "Yes, you can take it today. The test is thirty-six questions, and you need to get at least thirty correct to pass. It's available in multiple languages. Would you like to take it in English or another language?",
            textZh:
              "可以，今天就能考。笔试共36道题，至少答对30道才能通过。提供多种语言版本。您想用英语还是其他语言考？",
            keyPhrases: [
              { en: "thirty-six questions", zh: "36道题" },
              { en: "available in multiple languages", zh: "提供多种语言版本" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure, we can get you in today. It's thirty-six questions — you gotta get at least thirty right. And you can take it in a bunch of different languages if you want.",
                textZh: "没问题，今天就能安排。36道题——至少答对30道。你可以选很多不同的语言。",
                actionHint: "gotta = got to，口语中的'必须'",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, you can take it today. Test's 36 questions, gotta get at least 30 right to pass. Multiple languages. English or something else?",
            commonMistake: {
              wrong:
                "Yes, you can take today. The test is thirty-six questions, and you need to pass thirty correct. Would you like to take in English or other language?",
              correct:
                "Yes, you can take it today. The test is thirty-six questions, and you need to get at least thirty correct to pass. Would you like to take it in English or another language?",
              explanation:
                "“take it”中的“it”指代考试。通过考试是“to pass”，答对题目是“get correct”。“other language”前需加“another”或“other languages”。",
            },
            formalityVariants: {
              casual: "Yep, can take it today. 36 questions, need 30 right. Any language? English or other?",
              standard:
                "Yes, you can take it today. The test is thirty-six questions, and you need to get at least thirty correct to pass. It's available in multiple languages. Would you like to take it in English or another language?",
              formal:
                "Yes, you are authorized to take the examination today. The test comprises thirty-six questions, of which a minimum of thirty must be answered correctly to achieve a passing score. It is offered in various linguistic options. Would you prefer to take it in English or an alternative language?",
            },
          },
        ],
      },
      {
        id: "road-test",
        titleZh: "路考预约",
        titleEn: "Road Test Appointment",
        description: "笔试通过后预约路考的对话",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I passed the written test. I'd like to schedule my road test now.",
            textZh: "我笔试通过了。我想预约路考。",
            casualVersion: "I passed! When can I do the driving test?",
            commonMistake: {
              wrong: "I passed the written test. I want to schedule my road test now.",
              correct: "I passed the written test. I'd like to schedule my road test now.",
              explanation: "用 'I want to' 听起来太直接，不够礼貌。'I'd like to' 更委婉客气。",
            },
            formalityVariants: {
              casual: "Passed the written. Wanna schedule my road test now.",
              standard: "I've passed the written test. I'd like to schedule my road test now.",
              formal:
                "I have successfully completed the written examination. I would now like to proceed with scheduling my road test.",
            },
          },
          {
            speaker: "them",
            role: "DMV职员",
            textEn:
              "Congratulations. The earliest available appointment is in about three weeks. You'll need to bring a licensed driver and an insured vehicle for the test. Would you like me to book that for you?",
            textZh:
              "恭喜。最早的预约大约在三周后。路考时您需要带一位有驾照的驾驶员和一辆有保险的车。需要我帮您预约吗？",
            casualVersion: "Congrats. Earliest appointment's in like three weeks. Need a licensed driver and an insured car for the road test. Want me to book it?",
            culturalNote: "美国路考需自带持照司机和有保险的车，与中国不同。",
            commonMistake: {
              wrong: "a driver with license",
              correct: "a licensed driver",
              explanation: "“持照司机”是 licensed driver，而不是 driver with license。",
            },
            formalityVariants: {
              casual: "Congrats. Earliest slot's in three weeks. Gotta bring a licensed driver and insured car. Want me to book it?",
              standard: "Congratulations. The earliest available appointment is in about three weeks. You'll need to bring a licensed driver and an insured vehicle for the road test. Would you like me to schedule that for you?",
              formal: "Congratulations. The earliest available appointment is approximately three weeks from now. For the road test, you will be required to be accompanied by a licensed driver and to provide an insured vehicle. May I proceed with scheduling this for you?",
            },
            keyPhrases: [
              { en: "licensed driver", zh: "有驾照的驾驶员" },
              { en: "insured vehicle", zh: "有保险的车辆" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Nice, congrats! So the soonest we can get you in is about three weeks out. Just make sure you bring someone with a license and a car that's insured. Want me to lock that in?",
                textZh: "不错，恭喜！最快大概三周后能安排。记得带一个有驾照的人和有保险的车。要我帮你定下来吗？",
                actionHint: "lock that in 意思是确定预约",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. What exactly does the road test involve?",
            textZh: "好的，麻烦了。路考具体考什么内容？",
            commonMistake: {
              wrong: "What content does road test have?",
              correct: "What exactly does the road test involve?",
              explanation: "询问考试内容时，用 involve (包含) 比 have (有) 更自然。",
            },
            formalityVariants: {
              casual: "Yeah, please. What's the road test actually like?",
              standard: "Yes, please. What exactly does the road test involve?",
              formal: "Yes, I would appreciate that. Could you please elaborate on the specific maneuvers and requirements of the road test?",
            },
            casualVersion: "Yeah, book it. What's the road test like?",
          },
          {
            speaker: "them",
            role: "DMV职员",
            textEn:
              "The examiner will ride with you and ask you to perform basic maneuvers — parallel parking, three-point turns, lane changes, and stopping at intersections. The whole thing takes about fifteen to twenty minutes.",
            textZh:
              "考官会坐在您旁边，要求您做一些基本操作——侧方停车、三点掉头、变道、路口停车。整个过程大约15到20分钟。",
            casualVersion: "Examiner'll ride with ya, ask you to do basic stuff — parallel park, three-point turn, change lanes, stop at intersections. Takes like fifteen, twenty minutes.",
            culturalNote: "“三点掉头”（three-point turn）是美国驾考中常见的特定操作。",
            commonMistake: {
              wrong: "3-point turning",
              correct: "three-point turns",
              explanation: "“三点掉头”的常用表达是 three-point turn（单数）或 three-point turns（复数）。",
            },
            formalityVariants: {
              casual: "Examiner rides with you, asks for basic stuff: parallel parking, three-point turns, lane changes, stopping at intersections. Takes like 15-20 mins.",
              standard: "The examiner will ride with you and ask you to perform basic maneuvers — parallel parking, three-point turns, lane changes, and stopping at intersections. The whole thing takes about fifteen to twenty minutes.",
              formal: "The examining official will accompany you and instruct you to execute fundamental driving maneuvers, including parallel parking, three-point turns, lane changes, and proper stopping procedures at intersections. The entire assessment typically spans a duration of approximately fifteen to twenty minutes.",
            },
            keyPhrases: [
              { en: "parallel parking", zh: "侧方停车" },
              { en: "three-point turn", zh: "三点掉头" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The instructor will hop in and have you do stuff like parallel park, make some turns, change lanes — the basics. Usually takes about fifteen, twenty minutes.",
                textZh: "教练会上车让你做侧方停车、转弯、变道这些——都是基本操作。一般15到20分钟。",
                actionHint: "hop in 意思是上车（口语）",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "If I fail the road test, how soon can I retake it?",
            textZh: "如果路考没过，多久能重考？",
            commonMistake: {
              wrong: "how soon can I take it again?",
              correct: "how soon can I retake it?",
              explanation: "“重考”常用 retake，比 take it again 更专业地道。",
            },
            formalityVariants: {
              casual: "If I fail the road test, how fast can I retake it?",
              standard: "If I fail the road test, how soon can I retake it?",
              formal: "Should I unfortunately fail the road test, what is the earliest opportunity for me to retake it?",
            },
            casualVersion: "What if I don't pass? How long before I can try again?",
          },
          {
            speaker: "them",
            role: "DMV职员",
            textEn:
              "You can retake it after two weeks. You get three attempts before you have to reapply and pay the fee again. Most people pass on their first or second try, so don't worry too much.",
            textZh:
              "两周后可以重考。三次机会用完后需要重新申请并再付费。大多数人第一次或第二次就能过，所以不用太担心。",
            casualVersion: "Can retake it after two weeks. Get three tries before you gotta reapply and pay again. Most people pass first or second time, so don't stress.",
            culturalNote: "美国路考通常会给予多次机会，但超过次数需重新申请。",
            commonMistake: {
              wrong: "three chances",
              correct: "three attempts",
              explanation: "“机会”在考试语境中，常用 attempts 更准确，而不是 chances。",
            },
            formalityVariants: {
              casual: "Two weeks, you can retake it. Three tries total before you reapply and pay up again. Most pass on the first or second, so no biggie.",
              standard: "You can retake it after two weeks. You get three attempts before you have to reapply and pay the fee again. Most people pass on their first or second try, so don't worry too much.",
              formal: "You are eligible to retake the examination after a period of two weeks. You are allotted three attempts before it becomes necessary to reapply and incur the associated fees once more. A significant majority of applicants successfully pass on their initial or second attempt, therefore, excessive concern is unwarranted.",
            },
            keyPhrases: [
              { en: "retake", zh: "重考" },
              { en: "three attempts", zh: "三次机会" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You gotta wait two weeks, then you can try again. You get three shots total — after that you'd need to start over with a new application. But honestly, most people pass the first or second time.",
                textZh: "得等两周才能再试。总共三次机会——用完了得重新申请。不过说实话，大多数人一两次就过了。",
                actionHint: "three shots = 三次机会（口语）",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 2. 驾照续期 ====================
  {
    id: "government-dmv-renewal",
    category: "government",
    titleZh: "驾照续期",
    titleEn: "Driver's License Renewal",
    description: "去DMV续期即将过期的驾照",
    otherRole: "DMV职员",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "标准续期流程",
        titleEn: "Standard Renewal Process",
        description: "驾照到期前去DMV续期的标准对话",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, my driver's license is about to expire. I need to renew it.",
            textZh: "你好，我的驾照快过期了。我需要续期。",
            casualVersion: "Hey, my license is expiring soon. I need to renew it.",
            commonMistake: {
              wrong: "My driver's license soon expire, I need renew.",
              correct: "My driver's license is about to expire. I need to renew it.",
              explanation: "“is about to expire”和“renew it”更完整自然，避免直译或省略。",
            },
            formalityVariants: {
              casual: "Hey, my license is expiring soon. Gotta renew.",
              standard: "Hi, my driver's license is about to expire. I need to renew it.",
              formal:
                "Good morning/afternoon. I am here today because my driver's license is approaching its expiration date, and I would like to initiate the renewal process.",
            },
          },
          {
            speaker: "them",
            role: "DMV职员",
            textEn:
              "Sure, I can help with that. Can I see your current license? And do you have any changes to your address or name since it was last issued?",
            textZh: "没问题，我来帮您。我能看一下您现在的驾照吗？自上次办理以来，您的地址或姓名有变更吗？",
            commonMistake: {
              wrong: "I can see your license?",
              correct: "Can I see your license?",
              explanation: "询问时用 Can I 更自然，直接说 I can 会变成陈述句",
            },
            keyPhrases: [
              { en: "renew", zh: "续期" },
              { en: "changes to your address", zh: "地址变更" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No problem. Let me see your old license. Has anything changed — your address, name, anything like that?",
                textZh: "没问题。让我看看你旧驾照。有什么变化吗——地址、名字之类的？",
                actionHint: "anything like that 是口语中常见的补充说法",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, I can help. Lemme see your current license. Any changes to your address or name since you got it?",
            formalityVariants: {
              casual: "Yeah, I can help. Lemme see your license. Any address or name changes since you got it?",
              standard:
                "Sure, I can help with that. Can I see your current license? And do you have any changes to your address or name since it was last issued?",
              formal:
                "Certainly, I would be pleased to assist you. May I please see your current driver's license? Additionally, have there been any alterations to your residential address or legal name since its last issuance?",
            },
          },
          {
            speaker: "you",
            textEn: "Here it is. Everything is the same — no changes.",
            textZh: "给您。都没变——没有变更。",
            casualVersion: "Here you go. Nothing's changed.",
            commonMistake: {
              wrong: "Give you. All same, no change.",
              correct: "Here it is. Everything is the same — no changes.",
              explanation: "“Here it is”是递交物品时常用语；“no changes”用复数。",
            },
            formalityVariants: {
              casual: "Here ya go. Nope, all good.",
              standard: "Here it is. Everything is the same — no changes.",
              formal:
                "Certainly, here is my driver's license. I can confirm that there have been no changes to my personal information or residential address.",
            },
          },
          {
            speaker: "them",
            role: "DMV职员",
            textEn:
              "Great. We'll need to take a new photo and do a quick vision test. The renewal fee is thirty-five dollars. You can pay with cash, check, or card.",
            textZh: "好的。我们需要重新拍照并做一个简单的视力测试。续期费用是35美元。可以用现金、支票或银行卡支付。",
            commonMistake: {
              wrong: "We need take a new photo.",
              correct: "We need to take a new photo.",
              explanation: "need 后跟动词原形要加 to，否则会语法错误",
            },
            keyPhrases: [
              { en: "vision test", zh: "视力测试" },
              { en: "renewal fee", zh: "续期费用" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Alright, we just need a new picture and a quick eye test. That'll be thirty-five dollars — cash, check, or card works.",
                textZh: "好的，拍个新照片、做个快速视力检查就行。35块——现金、支票、刷卡都行。",
                actionHint: "eye test 和 vision test 意思一样",
                frequency: "common",
              },
            ],
            culturalNote:
              "美国驾照续期通常需要做视力测试（读字母表），部分州允许在线续期。续期费用各州不同，一般25-50美元。",
            casualVersion: "Alright. New photo, quick eye test. Fee's thirty-five bucks. Cash, check, or card works.",
            formalityVariants: {
              casual: "Okay, new pic, quick eye test. Thirty-five bucks. Cash, check, or card, whatever.",
              standard:
                "Great. We'll need to take a new photo and do a quick vision test. The renewal fee is thirty-five dollars. You can pay with cash, check, or card.",
              formal:
                "Excellent. We will require a new photograph and a brief vision assessment. The renewal fee amounts to thirty-five dollars, which may be settled via cash, personal check, or credit/debit card.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll pay with my card. How long until I get the new license?",
            textZh: "我用卡付。新驾照多久能拿到？",
            casualVersion: "Card, please. When do I get the new one?",
            commonMistake: {
              wrong: "I use card pay. How long I can get new license?",
              correct: "I'll pay with my card. How long until I get the new license?",
              explanation: "“pay with card”是固定搭配；“until I get”比“I can get”更自然。",
            },
            formalityVariants: {
              casual: "Card's fine. When do I get the new one?",
              standard: "I'll pay with my card. How long until I get the new license?",
              formal:
                "I will be paying by credit card. Could you please inform me of the approximate timeframe for receiving the new driver's license?",
            },
          },
          {
            speaker: "them",
            role: "DMV职员",
            textEn:
              "We'll give you a temporary paper license today that's valid for sixty days. Your new card will be mailed to you within two to three weeks.",
            textZh: "我们今天会给您一个临时纸质驾照，有效期60天。新卡会在两到三周内邮寄给您。",
            commonMistake: {
              wrong: "New card will mail to you.",
              correct: "New card will be mailed to you.",
              explanation: "卡是被寄出的，所以要用被动语态 will be mailed",
            },
            keyPhrases: [
              { en: "temporary paper license", zh: "临时纸质驾照" },
              { en: "valid for sixty days", zh: "有效期60天" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You'll get a paper one today — it's good for sixty days. The actual card shows up in the mail in a couple weeks.",
                textZh: "今天先给你一张纸质的——60天有效。正式卡两周左右寄到。",
                actionHint: "good for 意思是有效期为",
                frequency: "common",
              },
            ],
            casualVersion:
              "You'll get a temp paper license today, good for sixty days. New card'll be mailed in two to three weeks.",
            formalityVariants: {
              casual: "You'll get a temp paper license today, good for sixty days. Card's mailed in 2-3 weeks.",
              standard:
                "We'll give you a temporary paper license today that's valid for sixty days. Your new card will be mailed to you within two to three weeks.",
              formal:
                "We will issue you a temporary paper license today, which will be valid for a period of sixty days. Your permanent driver's license card will be sent to you by mail within a timeframe of two to three weeks.",
            },
          },
        ],
      },
      {
        id: "expired-renewal",
        titleZh: "过期驾照续期",
        titleEn: "Expired License Renewal",
        description: "驾照已经过期后来续期，可能需要额外步骤",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'm afraid my license has already expired. Is it too late to renew it?",
            textZh: "我的驾照已经过期了。现在续期还来得及吗？",
            casualVersion: "So my license already expired. Can I still renew it?",
            culturalNote: "美国人常用“I'm afraid”来委婉地表达一个不好的消息或情况，听起来更礼貌，而不是直接陈述事实。",
            commonMistake: {
              wrong: "My license expired. Can I renew it?",
              correct: "I'm afraid my license has already expired. Is it too late to renew it?",
              explanation: "直接说 'My license expired' 听起来有些生硬，用 'I'm afraid' 表达担忧和委婉更自然。",
            },
            formalityVariants: {
              casual: "License expired. Can I still renew it?",
              standard: "I'm afraid my license has already expired. Is it too late to renew it?",
              formal:
                "Excuse me, I'm concerned that my driver's license has already expired. Would it still be possible to renew it at this point?",
            },
          },
          {
            speaker: "them",
            role: "DMV职员",
            textEn:
              "It depends on how long it's been expired. If it's been less than a year, you can still renew it, but there's a late fee. If it's been more than a year, you may need to retake the written test.",
            textZh: "取决于过期多久了。如果不到一年，还可以续期，但有滞纳金。超过一年的话，可能需要重新考笔试。",
            commonMistake: {
              wrong: "It depends how long.",
              correct: "It depends on how long.",
              explanation: "depend 后面接宾语时，通常需要加介词 on",
            },
            casualVersion: "Depends how long it's been expired. Under a year, you can still renew, but there's a late fee. Over a year, might need to retake the written test.",
            formalityVariants: {
              casual: "Depends how long. Under a year, you can renew, but there's a late fee. Over a year, you might have to retake the written test.",
              standard: "It depends on how long it's been expired. If it's been less than a year, you can still renew it, but there's a late fee. If it's been more than a year, you may need to retake the written test.",
              formal: "The renewal process is contingent upon the duration of the expiration. Should the license have expired within the past year, renewal is permissible, albeit with an applicable late fee. However, if the expiration period exceeds one year, a re-examination of the written test may be mandated.",
            },
            keyPhrases: [
              { en: "late fee", zh: "滞纳金" },
              { en: "retake the written test", zh: "重新考笔试" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Depends how long ago it expired. Under a year, you just pay extra. Over a year, you might have to redo the written exam.",
                textZh: "看过期多久了。不到一年的话多付点钱就行。超过一年可能得重考笔试。",
                actionHint: "redo 意思是重新做",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "It expired about three months ago. How much is the late fee?",
            textZh: "大概过期三个月了。滞纳金是多少？",
            commonMistake: {
              wrong: "How many is the late fee?",
              correct: "How much is the late fee?",
              explanation: "fee 是不可数名词，询问价格用 how much",
            },
            formalityVariants: {
              casual: "Expired 'bout three months back. What's the late fee?",
              standard: "It expired about three months ago. How much is the late fee?",
              formal: "My license expired approximately three months ago. Could you please inform me of the applicable late fee?",
            },
            casualVersion: "It's been about three months. How much extra do I have to pay?",
          },
          {
            speaker: "them",
            role: "DMV职员",
            textEn:
              "Three months is fine — you're well within the grace period. The late penalty is an additional fifteen dollars on top of the regular renewal fee. So your total will be fifty dollars.",
            textZh: "三个月没问题——还在宽限期内。滞纳金是在正常续期费基础上加15美元。所以您总共需要50美元。",
            commonMistake: {
              wrong: "You are still in grace period.",
              correct: "You're still within the grace period.",
              explanation: "grace period 是特指，需要加定冠词 the",
            },
            casualVersion: "Three months? No problem, you're good. Late penalty's just fifteen bucks on top of the regular fee. So, fifty total.",
            formalityVariants: {
              casual: "Three months is fine, you're good. Late fee's fifteen bucks on top of the regular. So, fifty total.",
              standard: "Three months is fine — you're well within the grace period. The late penalty is an additional fifteen dollars on top of the regular renewal fee. So your total will be fifty dollars.",
              formal: "Three months is certainly acceptable, as you are well within the designated grace period. The late penalty amounts to an additional fifteen dollars, which will be added to the standard renewal fee, bringing your total to fifty dollars.",
            },
            keyPhrases: [
              { en: "grace period", zh: "宽限期" },
              { en: "late penalty", zh: "滞纳金/逾期罚款" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Three months? No big deal, you're still in the grace window. It's just an extra fifteen bucks on top of the usual fee — fifty total.",
                textZh: "三个月？没事，还在宽限期内。就是在正常费用上多15块——总共50。",
                actionHint: "no big deal 意思是没什么大不了",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a relief. Do I still need to take the vision test?",
            textZh: "那就放心了。还需要做视力测试吗？",
            commonMistake: {
              wrong: "I still need do a vision test?",
              correct: "Do I still need to do a vision test?",
              explanation: "need 后接动词原形时，要加 to",
            },
            formalityVariants: {
              casual: "Good to hear. Still gotta do the eye test?",
              standard: "That's a relief. Do I still need to take the vision test?",
              formal: "That is reassuring. Am I still required to undergo a vision examination?",
            },
            casualVersion: "Oh good. Do I still have to do the eye test?",
          },
          {
            speaker: "them",
            role: "DMV职员",
            textEn:
              "Yes, the vision test is required for all renewals regardless of timing. If you wear glasses or contacts, make sure you have them on. We also need a new photo — no hats or sunglasses, please.",
            textZh:
              "是的，视力测试是所有续期都需要的，不管什么时候来。如果您戴眼镜或隐形眼镜，请确保戴好。我们还需要拍新照片——不能戴帽子或墨镜。",
            commonMistake: {
              wrong: "Make sure you wear them.",
              correct: "Make sure you have them on.",
              explanation: "wear 描述状态，have on 强调已穿戴好，更符合指令语境",
            },
            casualVersion: "Yeah, gotta do the vision test for all renewals, no matter when. If you wear glasses or contacts, make sure they're on. And we need a new photo — no hats or shades.",
            formalityVariants: {
              casual: "Yep, vision test is always required for renewals. Wear your glasses/contacts if you got 'em. And new photo — no hats or shades.",
              standard: "Yes, the vision test is required for all renewals regardless of timing. If you wear glasses or contacts, make sure you have them on. We also need a new photo — no hats or sunglasses, please.",
              formal: "Indeed, a vision examination is a mandatory component for all license renewals, irrespective of the timing of the renewal. Should you utilize corrective lenses, kindly ensure they are worn. Furthermore, a new photograph is required, and we kindly request that no head coverings or eyewear such as hats or sunglasses be worn.",
            },
            keyPhrases: [
              { en: "regardless of timing", zh: "不管什么时候" },
              { en: "glasses or contacts", zh: "眼镜或隐形眼镜" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep, everyone does the eye test no matter what. Just make sure you've got your glasses on if you need them. And for the photo — no hats or shades.",
                textZh: "对，不管怎样大家都要做视力测试。需要的话记得戴眼镜。拍照时不能戴帽子或墨镜。",
                actionHint: "shades 是太阳镜的口语说法",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 3. 办身份证 ====================
  {
    id: "government-dmv-id-card",
    category: "government",
    titleZh: "办身份证",
    titleEn: "Getting a State ID Card",
    description: "不开车也需要的州政府身份证件",
    otherRole: "DMV职员",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "申请州身份证",
        titleEn: "State ID Application",
        description: "申请州政府身份证的标准流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I don't drive, but I need a government-issued ID. Can I get a state ID card here?",
            textZh: "你好，我不开车，但我需要一个政府签发的身份证件。可以在这里办州身份证吗？",
            casualVersion: "Hey, I don't have a license. Can I just get a state ID?",
            commonMistake: {
              wrong: "Can I make a state ID card here?",
              correct: "Can I get a state ID card here?",
              explanation: '"make" 通常指制造物品，不用于办理证件。办理或获得证件更常用 "get" 或 "obtain"。',
            },
            formalityVariants: {
              casual: "Hey, I don't drive, but I need a government ID. Can I get a state ID here?",
              standard: "Hi, I don't drive, but I need a government-issued ID. Can I get a state ID card here?",
              formal:
                "Good morning/afternoon. I do not operate a motor vehicle, but I require an official government-issued identification document. May I inquire if it is possible to obtain a state identification card at this location?",
            },
          },
          {
            speaker: "them",
            role: "DMV职员",
            textEn:
              "Absolutely. A state ID card works just like a driver's license for identification purposes. You'll need your passport, proof of address, and Social Security number.",
            textZh: "当然可以。州身份证和驾照一样可以用来证明身份。您需要护照、地址证明和社保号。",
            keyPhrases: [
              { en: "state ID card", zh: "州身份证" },
              { en: "identification purposes", zh: "身份证明用途" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, for sure. A state ID is basically the same as a license for ID purposes. Just bring your passport, proof of where you live, and your Social.",
                textZh: "当然可以。州身份证用来证明身份和驾照是一样的。带上护照、住址证明和社保号就行。",
                actionHint: "your Social 是 Social Security number 的口语简称",
                frequency: "common",
              },
            ],
            culturalNote:
              "美国没有全国统一的身份证，驾照或州身份证（State ID）是最常用的身份证明。不开车的人可以在DMV办State ID，功能和驾照一样，只是不能开车。",
            casualVersion:
              "Oh yeah, for sure. A state ID's just like a driver's license for ID. You'll need your passport, address proof, and SSN.",
            commonMistake: {
              wrong: "address proof",
              correct: "proof of address",
              explanation: '"proof of [noun]"是表示"[noun]的证明"的常用结构，比"[noun] proof"更自然。',
            },
            formalityVariants: {
              casual:
                "Oh yeah, for sure. A state ID's just like a driver's license for ID. You'll need your passport, address proof, and SSN.",
              standard:
                "Absolutely. A state ID card works just like a driver's license for identification purposes. You'll need your passport, proof of address, and Social Security number.",
              formal:
                "Yes, certainly. A state identification card serves the same function as a driver's license for purposes of personal identification. Please ensure you have your valid passport, documented proof of residency, and your Social Security number.",
            },
          },
          {
            speaker: "you",
            textEn: "How much does it cost, and how long does it take?",
            textZh: "多少钱？要多久？",
            casualVersion: "What's it gonna cost me, and how long's the wait?",
            commonMistake: {
              wrong: "How much money and how long time?",
              correct: "How much does it cost and how long does it take?",
              explanation: '询问价格常用"cost"，"How much time?"是错误的表达，应为"How long does it take?"。',
            },
            formalityVariants: {
              casual: "Cost and time?",
              standard: "How much does it cost, and how long does it take?",
              formal: "Could you please inform me of the associated fee and the estimated processing time?",
            },
          },
          {
            speaker: "them",
            role: "DMV职员",
            textEn:
              "The fee is twenty dollars. We'll process your application today, take your photo, and the card will be mailed to you in about two weeks.",
            textZh: "费用是20美元。我们今天处理您的申请、拍照，卡大约两周后邮寄给您。",
            keyPhrases: [
              { en: "process your application", zh: "处理您的申请" },
              { en: "mailed to you", zh: "邮寄给您" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It's twenty bucks. We'll get everything done today — photo and all — and you'll get the card in the mail in a couple weeks.",
                textZh: "20块。今天全部搞定——包括拍照——两周左右卡就寄到了。",
                actionHint: "get everything done 意思是全部办完",
                frequency: "common",
              },
            ],
            casualVersion:
              "It's twenty bucks. We'll do your application today, snap your pic, and the card'll get mailed to you in 'bout two weeks.",
            commonMistake: {
              wrong: "the card will send to you",
              correct: "the card will be mailed to you",
              explanation: '邮件寄送用动词"mail"，且卡片是“被邮寄”，所以需要使用被动语态"be mailed"。',
            },
            formalityVariants: {
              casual:
                "It's twenty bucks. We'll do your application today, snap your pic, and the card'll get mailed to you in 'bout two weeks.",
              standard:
                "The fee is twenty dollars. We'll process your application today, take your photo, and the card will be mailed to you in about two weeks.",
              formal:
                "The cost for this service is twenty dollars. Your application will be processed this afternoon, your photograph will be taken, and the identification card will be dispatched to your provided address via postal service within approximately two weeks.",
            },
          },
          {
            speaker: "you",
            textEn: "Can I use the state ID to fly within the United States?",
            textZh: "州身份证可以用来在美国国内坐飞机吗？",
            casualVersion: "Can I fly with this ID?",
            commonMistake: {
              wrong: "Can I use the state ID to take plane in United States?",
              correct: "Can I use the state ID to fly within the United States?",
              explanation: '乘坐飞机常用"fly"或"board a flight"；表示“在美国境内”应为"within the United States"。',
            },
            formalityVariants: {
              casual: "Can I use the state ID for domestic flights?",
              standard: "Can I use the state ID to fly within the United States?",
              formal:
                "Would this state identification card be sufficient for air travel within the continental United States?",
            },
          },
          {
            speaker: "them",
            role: "DMV职员",
            textEn:
              "Yes, but only if it's a REAL ID. Starting this year, you need a REAL ID-compliant card to board domestic flights. I'd recommend upgrading to a REAL ID — it just requires a couple more documents.",
            textZh:
              "可以，但必须是REAL ID。从今年开始，乘坐国内航班需要符合REAL ID标准的证件。我建议您升级到REAL ID——只需要多提供几份材料。",
            keyPhrases: [
              { en: "REAL ID", zh: "真实身份证（联邦标准）" },
              { en: "domestic flights", zh: "国内航班" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You can, but it has to be a REAL ID version. The regular one won't cut it for flights anymore. Want me to set you up with a REAL ID instead? Just need a few extra papers.",
                textZh: "可以，但必须是REAL ID版本。普通的不能坐飞机了。要不直接办REAL ID？多带几份材料就行。",
                actionHint: "won't cut it 意思是不够用/不合格",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, but only if it's a REAL ID. This year, you gotta have a REAL ID to fly domestic. I'd totally suggest getting one — it's just a couple more docs.",
            culturalNote: "REAL ID是美国联邦政府为了加强安保推出的身份证明标准，涉及国内航空旅行。",
            commonMistake: {
              wrong: "REAL ID standard card",
              correct: "REAL ID-compliant card",
              explanation: '"compliant"表示“符合标准的”，是形容词，比直译“standard card”更自然和专业。',
            },
            formalityVariants: {
              casual:
                "Yeah, but only if it's a REAL ID. This year, you gotta have a REAL ID to fly domestic. I'd totally suggest getting one — it's just a couple more docs.",
              standard:
                "Yes, but only if it's a REAL ID. Starting this year, you need a REAL ID-compliant card to board domestic flights. I'd recommend upgrading to a REAL ID — it just requires a couple more documents.",
              formal:
                "Affirmative, however, this is contingent upon the card being a REAL ID. Effective this year, a REAL ID-compliant document is mandated for boarding domestic air travel. I would strongly advise considering an upgrade to a REAL ID, as it merely necessitates the submission of a few additional supporting documents.",
            },
          },
        ],
      },
      {
        id: "real-id-upgrade",
        titleZh: "升级REAL ID",
        titleEn: "REAL ID Upgrade",
        description: "将普通州身份证升级为符合联邦标准的REAL ID",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'd like to upgrade my state ID to a REAL ID. What additional documents do I need?",
            textZh: "我想把州身份证升级成REAL ID。还需要什么额外的材料？",
            casualVersion: "I wanna upgrade to a REAL ID. What else do I need to bring?",
            commonMistake: {
              wrong: "What other materials do I need?",
              correct: "What additional documents do I need?",
              explanation: "“材料”直译成“materials”不用于证件文件，应是“documents”或“paperwork”。",
            },
            formalityVariants: {
              casual: "Wanna upgrade my state ID to a REAL ID. What else do I need?",
              standard: "I'd like to upgrade my state ID to a REAL ID. What additional documents do I need?",
              formal:
                "I would like to upgrade my standard state identification to a REAL ID compliant one. Could you please inform me of any supplementary documentation required?",
            },
          },
          {
            speaker: "them",
            role: "DMV职员",
            textEn:
              "For the REAL ID, you'll need your original birth certificate or passport, a document with your Social Security number, and two proofs of California residency — like a bank statement and a utility bill.",
            textZh:
              "办REAL ID，您需要出生证明原件或护照、一份带社保号的文件、以及两份加州居住证明——比如银行对账单和水电账单。",
            casualVersion: "For the REAL ID, you'll need your original birth certificate or passport, something with your Social Security Number, and two things showing you live in California – like a bank statement and a utility bill.",
            culturalNote: "银行账单和水电费单在美国常用来证明住址",
            commonMistake: {
              wrong: "two residence proof",
              correct: "two proofs of residency",
              explanation: "proof是不可数名词，但表示'证据、证物'时是可数的",
            },
            formalityVariants: {
              casual: "For the REAL ID, you'll need your original birth certificate or passport, something showing your SSN, and two things proving your CA residency – like a bank statement and a utility bill.",
              standard: "For the REAL ID, you will need your original birth certificate or passport, one document proving your Social Security Number, and two proofs of California residency – such as a bank statement and a utility bill.",
              formal: "In order to obtain the REAL ID, it is requisite that you provide your original birth certificate or passport, one document verifying your Social Security Number, and two forms of evidence demonstrating California residency – for instance, a bank statement and a utility bill.",
            },
            keyPhrases: [
              { en: "original birth certificate", zh: "出生证明原件" },
              { en: "two proofs of residency", zh: "两份居住证明" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You'll need your birth certificate or passport — originals only — something showing your Social Security number, and two things proving you live here, like a bank statement and a bill.",
                textZh:
                  "需要出生证明或护照——必须是原件——能显示社保号的文件，还有两份证明你住这儿的东西，比如银行对账单和账单。",
                actionHint: "originals only 强调必须是原件不接受复印件",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm not a US citizen, so I don't have a birth certificate. Will my passport and visa work?",
            textZh: "我不是美国公民，没有出生证明。护照和签证可以吗？",
            commonMistake: {
              wrong: "I have no birth certificate.",
              correct: "I don't have a birth certificate.",
              explanation: "英语否定句动词前常用 don't/doesn't，have no 听起来不够自然。",
            },
            formalityVariants: {
              casual: "I'm not a U.S. citizen, so no birth certificate. Passport and visa okay?",
              standard: "I'm not a U.S. citizen, so I don't have a birth certificate. Will my passport and visa work?",
              formal: "As I am not a United States citizen, I do not possess a birth certificate. Would my passport and visa be considered acceptable documentation?",
            },
            casualVersion: "I'm not from here — can I just use my passport and visa?",
          },
          {
            speaker: "them",
            role: "DMV职员",
            textEn:
              "Yes, your foreign passport along with your visa or I-94 arrival record will work as your primary identity document. We'll also need your immigration documents to verify your legal presence.",
            textZh:
              "可以，您的外国护照加上签证或I-94入境记录可以作为主要身份证明文件。我们还需要您的移民文件来验证合法居留身份。",
            casualVersion: "Yeah, your foreign passport plus your visa or I-94 will work as your main ID. We'll also need your immigration docs to check your lawful status.",
            culturalNote: "I-94是外国人入境美国后的记录，非常重要",
            commonMistake: {
              wrong: "We need your immigration documents to prove your legal status.",
              correct: "We will also need your immigration documents to verify lawful status.",
              explanation: "prove '证明'，verify '核实、查证'，verify更准确",
            },
            formalityVariants: {
              casual: "Yep, your foreign passport with your visa or I-94 is good for primary ID. And we'll need your immigration docs to confirm your legal status.",
              standard: "Yes, your foreign passport along with your visa or I-94 arrival record will work as your primary identity document. We will also need your immigration documents to verify lawful status.",
              formal: "Affirmative, your foreign passport, accompanied by your visa or I-94 arrival record, will suffice as your primary form of identification. Furthermore, we shall require your pertinent immigration documents to substantiate your lawful residency status.",
            },
            keyPhrases: [
              { en: "I-94 arrival record", zh: "I-94入境记录" },
              { en: "legal presence", zh: "合法居留身份" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Totally fine. Your passport plus your visa or I-94 works for the identity part. We'll just need to see your immigration paperwork to confirm your status.",
                textZh: "完全没问题。护照加签证或I-94就能证明身份。我们只需要看一下移民文件确认你的身份状态。",
                actionHint: "paperwork 指各种文件书面材料",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How long is the REAL ID valid for?",
            textZh: "REAL ID有效期多长？",
            commonMistake: {
              wrong: "How long is the REAL ID validity?",
              correct: "How long is the REAL ID valid for?",
              explanation: "validity是名词，不能直接跟is，要用形容词valid",
            },
            formalityVariants: {
              casual: "How long's the REAL ID good for?",
              standard: "How long is the REAL ID valid for?",
              formal: "What is the period of validity for the REAL ID?",
            },
            casualVersion: "How long does the REAL ID last?",
          },
          {
            speaker: "them",
            role: "DMV职员",
            textEn:
              "For non-citizens, the REAL ID is valid until the expiration date on your immigration documents. So if your visa is good for two years, your ID will match that. You'll need to renew it when your status is extended.",
            textZh:
              "对于非公民，REAL ID的有效期到您移民文件的到期日为止。所以如果签证有效期是两年，身份证也是两年。身份延期后需要续办。",
            casualVersion: "For non-citizens, your REAL ID is good until your immigration docs expire. So if your visa's for two years, your ID'll be the same. Gotta renew it after your status gets extended.",
            culturalNote: "外国人的证件有效期通常与签证或居留身份挂钩",
            commonMistake: {
              wrong: "You need renew it after your status extended.",
              correct: "You'll need to renew it after your status is extended.",
              explanation: "need to do something，status是被动延长，用is extended",
            },
            formalityVariants: {
              casual: "If you're not a citizen, your REAL ID's good 'til your immigration docs run out. So if your visa's two years, your ID'll be too. Just renew it once your status is extended.",
              standard: "For non-citizens, the REAL ID is valid until the expiration date on your immigration documents. So if your visa is good for two years, your ID will match that. You'll need to renew it after your status is extended.",
              formal: "For individuals who are not citizens, the REAL ID's validity shall extend until the expiration date indicated on your immigration documentation. Therefore, should your visa be valid for a period of two years, your identification card will correspond accordingly. It will be incumbent upon you to renew the identification card subsequent to the extension of your immigration status.",
            },
            keyPhrases: [
              { en: "expiration date", zh: "到期日" },
              { en: "status is extended", zh: "身份延期" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For folks who aren't citizens, it matches your visa dates. So if your visa runs out in two years, the ID does too. Once you extend your visa, come back and we'll update it.",
                textZh: "不是公民的话，跟你签证日期一致。签证两年到期，身份证也两年。签证延期后回来更新就行。",
                actionHint: "runs out 意思是到期/用完",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 4. 申请社安号 ====================
  {
    id: "government-ssn-application",
    category: "government",
    titleZh: "申请社安号",
    titleEn: "Social Security Number Application",
    description: "到社会安全局申请SSN",
    otherRole: "SSA职员",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "首次申请SSN",
        titleEn: "First-Time SSN Application",
        description: "新到美国首次申请社保号的流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just arrived in the US on a work visa. I need to apply for a Social Security number.",
            textZh: "你好，我刚拿工作签证到美国。我需要申请社保号。",
            casualVersion: "Hey, I'm new here on a work visa and need a Social Security number.",
            commonMistake: {
              wrong: "Hi, I just arrived in the US on a work visa. I want to apply for a Social Security number.",
              correct: "Hi, I just arrived in the US on a work visa. I need to apply for a Social Security number.",
              explanation: '在正式场合，用 "I want" 听起来可能过于直接或生硬，"I need to" 或 "I\'d like to" 更常见。',
            },
            formalityVariants: {
              casual: "Hey, just got to the US on a work visa. Need to get a Social Security number.",
              standard: "Hi, I just arrived in the US on a work visa. I need to apply for a Social Security number.",
              formal:
                "Good morning/afternoon, I recently arrived in the United States on a work visa and require assistance with applying for a Social Security number.",
            },
          },
          {
            speaker: "them",
            role: "SSA职员",
            textEn:
              "Welcome. You'll need to fill out Form SS-5 — that's our application for a Social Security card. Did you bring your passport and work authorization documents?",
            textZh: "欢迎。您需要填写SS-5表格——这是社保卡申请表。您带了护照和工作授权文件吗？",
            commonMistake: {
              wrong: "Do you have your passport and work permission document?",
              correct: "Do you have your passport and employment authorization document?",
              explanation: "“工作许可文件”的正式说法是“employment authorization document”。",
            },
            keyPhrases: [
              { en: "Form SS-5", zh: "SS-5表格（社保卡申请表）" },
              { en: "work authorization", zh: "工作授权" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure thing. First step is filling out the SS-5 form. Do you have your passport and your work permit with you?",
                textZh: "没问题。第一步是填SS-5表格。护照和工作许可带了吗？",
                actionHint: "work permit 和 work authorization 意思相近",
                frequency: "common",
              },
            ],
            culturalNote:
              "SSN（社保号）在美国极其重要，相当于你的财务身份证号。开银行账户、报税、租房、找工作都需要。一般入境后10天才能申请，因为移民记录需要同步。",
            casualVersion:
              "Welcome. You just gotta fill out Form SS-5, that's for the SS card. Got your passport and work authorization stuff with you?",
            formalityVariants: {
              casual:
                "Welcome! You just gotta fill out Form SS-5, that's our application for the SS card. You got your passport and work authorization stuff with you?",
              standard:
                "Welcome. You'll need to fill out Form SS-5 — that's our application for a Social Security card. Did you bring your passport and work authorization documents?",
              formal:
                "Welcome. You will be required to complete Form SS-5, which serves as the application for a Social Security card. May I inquire if you have brought your passport and your official work authorization documentation?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I have my passport, visa, and I-94 form. Here they are.",
            textZh: "是的，护照、签证和I-94表都带了。给您。",
            casualVersion: "Yep, got everything right here.",
            commonMistake: {
              wrong: "Yes, I have my passport, visa, and I-94 form. Here you are.",
              correct: "Yes, I have my passport, visa, and I-94 form. Here they are.",
              explanation: '列举完多个物品后，用 "Here they are" 指代这些物品更自然、更精确。',
            },
            formalityVariants: {
              casual: "Yep, got my passport, visa, and I-94. Here ya go.",
              standard: "Yes, I have my passport, visa, and I-94 form. Here they are.",
              formal: "Yes, I do have my passport, visa, and Form I-94 with me. They are all here for your review.",
            },
          },
          {
            speaker: "them",
            role: "SSA职员",
            textEn:
              "Perfect. Let me verify these. Your immigration status needs to be confirmed through the Department of Homeland Security. This process usually takes about two to four weeks.",
            textZh: "很好。我来核实一下。您的移民身份需要通过国土安全部确认。这个过程通常需要两到四周。",
            commonMistake: {
              wrong: "I confirm these.",
              correct: "Let me verify these.",
              explanation: "核实文件要用 verify，不是 confirm。Confirm 更多是指确认信息。",
            },
            keyPhrases: [
              { en: "immigration status", zh: "移民身份" },
              { en: "Department of Homeland Security", zh: "国土安全部" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Great, let me look these over. We have to verify your status with Homeland Security, which takes a couple weeks — usually two to four.",
                textZh: "好的，我看一下。我们得跟国土安全部核实你的身份，通常要两到四周。",
                actionHint: "look these over 意思是检查/审核",
                frequency: "common",
              },
            ],
            casualVersion:
              "Cool. Lemme just check these. Gotta confirm your immigration status with Homeland Security. Usually takes a couple weeks, like two to four.",
            formalityVariants: {
              casual:
                "Alright. Just gonna verify these. We gotta confirm your immigration status with Homeland Security. That usually takes a couple of weeks, two to four.",
              standard:
                "Perfect. Let me verify these. Your immigration status needs to be confirmed through the Department of Homeland Security. This process usually takes about two to four weeks.",
              formal:
                "Excellent. Allow me to verify these documents. Your immigration status is subject to confirmation via the Department of Homeland Security. This particular process typically spans a duration of two to four weeks.",
            },
          },
          {
            speaker: "you",
            textEn: "Two to four weeks? Is there any way to speed it up? I need it to start working.",
            textZh: "两到四周？有什么办法加快吗？我需要它才能开始工作。",
            casualVersion: "That long? I kinda need it for work. Any way to get it faster?",
            commonMistake: {
              wrong: "Two to four weeks? Any way to speed up? I need start working.",
              correct: "Two to four weeks? Is there any way to speed it up? I need it to start working.",
              explanation: '句子中缺少代词"it"和动词不定式"to"，听起来不完整且不自然。',
            },
            formalityVariants: {
              casual: "Wait, two to four weeks? Can't we speed this up? I gotta get to work.",
              standard: "Two to four weeks? Is there any way to speed it up? I need it to start working.",
              formal:
                "Two to four weeks, you say? Would it be possible to expedite this process? I require the Social Security number to commence my employment.",
            },
          },
          {
            speaker: "them",
            role: "SSA职员",
            textEn:
              "Unfortunately, we can't expedite it. But here's the thing — you can actually start working as long as you've applied. Your employer can use your receipt letter as proof that you've submitted the application.",
            textZh:
              "很遗憾，我们没办法加快。但有一点——只要您已经提交了申请就可以开始工作。您的雇主可以用我们的回执信作为已提交申请的证明。",
            commonMistake: {
              wrong: "We cannot faster it.",
              correct: "We can't speed it up.",
              explanation: "“加快”用“speed up”或“expedite”，不是“faster it”。",
            },
            keyPhrases: [
              { en: "expedite", zh: "加急" },
              { en: "receipt letter", zh: "回执信/申请确认信" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No way to rush it, sorry. But good news — you can start working now. Just give your employer the receipt we'll give you today. That proves you've applied.",
                textZh:
                  "没法加急，抱歉。但好消息是——你现在就能开始工作。把我们今天给你的回执给雇主就行，证明你已经申请了。",
                actionHint: "rush it 意思是催快/加急（口语）",
                frequency: "common",
              },
            ],
            casualVersion:
              "Nah, can't speed it up. But check this out – you can actually start working once you've applied. Your boss can just use your receipt letter as proof you sent it in.",
            culturalNote: "美国政策允许凭社保号申请回执开始工作。",
            formalityVariants: {
              casual:
                "Nope, no way to speed it up. But hey, good news: you can actually start working once you've applied! Your employer can just use your receipt letter as proof you sent the application in.",
              standard:
                "Unfortunately, we can't expedite it. But here's the thing — you can actually start working as long as you've applied. Your employer can use your receipt letter as proof that you've submitted the application.",
              formal:
                "Regrettably, we are unable to expedite the processing of your application. However, it is important to note that you are permitted to commence employment as soon as your application has been submitted. Your employer may utilize your receipt letter as official documentation of your application submission.",
            },
          },
        ],
      },
      {
        id: "ssn-replacement",
        titleZh: "补办社保卡",
        titleEn: "SSN Card Replacement",
        description: "社保卡丢失或损坏后补办",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I lost my Social Security card. How do I get a replacement?",
            textZh: "我的社保卡丢了。怎么补办？",
            casualVersion: "I lost my Social Security card. Can I get a new one?",
            commonMistake: {
              wrong: "My Social Security card lost.",
              correct: "I lost my Social Security card.",
              explanation: "中文习惯说“XX丢了”，英文要用“我丢了XX”",
            },
            formalityVariants: {
              casual: "Lost my SSN card. How do I get a new one?",
              standard: "I lost my Social Security card. How do I get a replacement?",
              formal:
                "I've misplaced my Social Security card and would like to inquire about the process for obtaining a replacement.",
            },
          },
          {
            speaker: "them",
            role: "SSA职员",
            textEn:
              "You can apply for a replacement card. You'll need a valid photo ID — a driver's license or passport. If you're a non-citizen, we'll also need your current immigration documents.",
            textZh: "您可以申请补办。需要一个有效的带照片证件——驾照或护照。如果您不是公民，还需要当前的移民文件。",
            casualVersion: "You can apply for a replacement. You'll need a valid photo ID, like a driver's license or passport. If you're not a citizen, you'll also need your current immigration docs.",
            commonMistake: {
              wrong: "You need a effective photo ID.",
              correct: "You need a valid photo ID.",
              explanation: "“有效的”文件或证件要用“valid”，而不是“effective”。",
            },
            formalityVariants: {
              casual: "Can apply for a replacement. Need a valid photo ID—driver's license or passport. If not a citizen, also your current immigration papers.",
              standard: "You can apply for a replacement card. You'll need a valid photo ID — a driver's license or passport. If you're not a citizen, you'll also need current immigration documents.",
              formal: "You may apply for a replacement card. This will necessitate a valid form of photographic identification, such as a driver's license or passport. Non-citizens will additionally require current immigration documentation.",
            },
            keyPhrases: [
              { en: "replacement card", zh: "补办的卡" },
              { en: "valid photo ID", zh: "有效的带照片证件" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No worries, we can get you a new one. Just need a photo ID — license or passport is fine. And if you're not a citizen, bring your immigration stuff too.",
                textZh: "别担心，我们可以帮你办一张新的。带个证件——驾照或护照就行。不是公民的话，移民文件也要带。",
                actionHint: "immigration stuff 是口语中指各种移民相关文件",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a fee for the replacement? And how many times can I replace it?",
            textZh: "补办收费吗？能补办几次？",
            commonMistake: {
              wrong: "Is it charge for replacement?",
              correct: "Is there a fee for the replacement?",
              explanation: "询问费用要用“Is there a fee?”或“Does it cost anything?”，不是“charge”。",
            },
            formalityVariants: {
              casual: "Does it cost to replace it? And how many times can I get a new one?",
              standard: "Is there a fee for the replacement? And how many times can I replace it?",
              formal: "Is there a charge associated with the replacement? Furthermore, are there any limitations on the number of times I may obtain a replacement?",
            },
            casualVersion: "Does it cost anything? Is there a limit on replacements?",
          },
          {
            speaker: "them",
            role: "SSA职员",
            textEn:
              "No, it's free. But there is a limit — you can get up to three replacement cards per year and ten over your lifetime. So it's important to keep it in a safe place.",
            textZh: "不收费。但有限制——每年最多补办3次，一生最多10次。所以一定要放在安全的地方。",
            casualVersion: "Nope, it's free. But there are limits: three times a year, ten times total in your life. So definitely keep it somewhere safe.",
            commonMistake: {
              wrong: "It's no fee.",
              correct: "No, it's free.",
              explanation: "说“不收费”最常用“It's free”或“There's no fee”。",
            },
            formalityVariants: {
              casual: "Nah, no fee. But you're limited: 3 times a year, 10 for life. So really, keep it safe.",
              standard: "No, it's free. However, there are limits — a maximum of three replacements per year and ten over your lifetime. So please ensure you keep it in a secure location.",
              formal: "No, there is no fee for the replacement. Nonetheless, restrictions apply: a maximum of three replacements are permitted within a calendar year, and a total of ten replacements throughout your lifetime. Therefore, it is advisable to store it securely.",
            },
            keyPhrases: [
              { en: "three per year", zh: "每年三次" },
              { en: "ten over your lifetime", zh: "一生最多十次" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It's free, but they do cap it — three a year, ten total in your lifetime. So try not to lose it again!",
                textZh: "免费的，但有上限——每年3次，一辈子10次。所以别再弄丢了！",
                actionHint: "cap it 意思是设定上限",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Can I also apply for the replacement online?",
            textZh: "明白了。可以在网上补办吗？",
            commonMistake: {
              wrong: "I got it. Can I apply online replacement too?",
              correct: "Got it. Can I also apply for the replacement online?",
              explanation: "动词 apply for replacement 后加 online，或者用 apply online for replacement。",
            },
            formalityVariants: {
              casual: "Got it. Can I get a replacement online?",
              standard: "Got it. Can I also apply for the replacement online?",
              formal: "Understood. Is it also possible to apply for the replacement online?",
            },
            casualVersion: "Can I just do it online instead?",
          },
          {
            speaker: "them",
            role: "SSA职员",
            textEn:
              "Yes, if you're a US citizen over eighteen with a valid driver's license or state ID, you can do it through our my Social Security website. Otherwise, you'll need to come in person like today.",
            textZh:
              "可以，如果您是18岁以上的美国公民并且有有效驾照或州身份证，可以通过我们的'my Social Security'网站办理。否则需要像今天这样亲自来。",
            casualVersion: "Yeah, if you're a US citizen, 18 or over, with a valid driver's license or state ID, you can do it through our...",
            commonMistake: {
              wrong: "If you are 18 years old above.",
              correct: "If you are 18 or over.",
              explanation: "“18岁以上”常用“18 or over”或“over 18”。",
            },
            formalityVariants: {
              casual: "Yep, if you're a US citizen, 18+, with a valid driver's license or state ID, you can use our...",
              standard: "Yes, if you are a U.S. citizen aged 18 or older and possess a valid driver's license or state-issued identification card, you can apply through our...",
              formal: "Affirmative, provided you are a U.S. citizen, 18 years of age or older, and hold a valid driver's license or state-issued identification, you are eligible to apply via our...",
            },
            keyPhrases: [
              { en: "my Social Security website", zh: "'my Social Security'网站" },
              { en: "in person", zh: "亲自/本人到场" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "If you're a citizen with a license or state ID, yeah, you can do it online at ssa.gov. But for non-citizens, you gotta come in.",
                textZh: "如果你是公民有驾照或州身份证，可以在ssa.gov上办。但非公民得亲自来。",
                actionHint: "gotta come in 意思是必须亲自到场",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 5. 签证续签 ====================
  {
    id: "government-visa-renewal",
    category: "government",
    titleZh: "签证续签",
    titleEn: "Visa Renewal",
    description: "到移民局或大使馆办理签证续签",
    otherRole: "移民官",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "签证续签咨询",
        titleEn: "Visa Renewal Inquiry",
        description: "询问签证续签的基本流程和要求",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hello, my visa is expiring in two months. I'd like to find out how to renew it.",
            textZh: "你好，我的签证还有两个月到期。我想了解一下怎么续签。",
            casualVersion: "Hi, my visa expires in two months. How do I renew it?",
            commonMistake: {
              wrong: "How to renew it?",
              correct: "I'd like to find out how to renew it.",
              explanation:
                '直接问"How to renew it"不够礼貌；"I want to know"听起来有些生硬，"I\'d like to find out"更自然。',
            },
            formalityVariants: {
              casual: "Hey, my visa's up in two months. How do I renew it?",
              standard: "Hello, my visa is expiring in two months. I'd like to find out how to renew it.",
              formal:
                "Good morning/afternoon, I am contacting you regarding my visa, which is due to expire in approximately two months. I would appreciate information on the renewal process.",
            },
          },
          {
            speaker: "them",
            role: "移民官",
            textEn:
              "What type of visa do you currently hold? The renewal process varies depending on your visa category.",
            textZh: "您目前持什么类型的签证？续签流程根据签证类别不同有所不同。",
            commonMistake: {
              wrong: "What type visa you have?",
              correct: "What type of visa do you currently hold?",
              explanation: "中文表达习惯中常省略'的'和'动词'，但英文需要明确'of'和助动词。",
            },
            keyPhrases: [
              { en: "visa category", zh: "签证类别" },
              { en: "renewal process", zh: "续签流程" },
            ],
            alternativeExpressions: [
              {
                textEn: "Which visa are you on? The steps are different depending on your visa type.",
                textZh: "你持的是哪种签证？步骤取决于签证类型。",
                actionHint: "which visa are you on 是更口语的问法",
                frequency: "common",
              },
            ],
            casualVersion: "What visa you got? Renewing depends on the type.",
            formalityVariants: {
              casual: "What visa do you have? Renewal depends on the type.",
              standard:
                "What type of visa do you currently hold? The renewal process varies depending on your visa category.",
              formal:
                "Could you please specify your current visa classification? The renewal procedure is contingent upon the particular visa category.",
            },
          },
          {
            speaker: "you",
            textEn: "I have an H-1B work visa. My employer is sponsoring my renewal.",
            textZh: "我持H-1B工作签证。我的雇主正在担保续签。",
            commonMistake: {
              wrong: "I am H-1B work visa. My employer sponsoring my renewal.",
              correct: "I have an H-1B work visa. My employer is sponsoring my renewal.",
              explanation: "动词'to be'和'to have'常混淆；现在进行时'is sponsoring'不能省略'is'。",
            },
            casualVersion: "I'm on an H-1B. My company is handling the renewal.",
            formalityVariants: {
              casual: "It's an H-1B work visa. My employer's sponsoring the renewal.",
              standard: "I have an H-1B work visa. My employer is sponsoring my renewal.",
              formal:
                "My current visa is an H-1B non-immigrant work visa. My employer is initiating the sponsorship for its renewal.",
            },
          },
          {
            speaker: "them",
            role: "移民官",
            textEn:
              "For an H-1B extension, your employer needs to file Form I-129 with USCIS. The processing time is typically four to six months, but you can request premium processing for an additional fee to get a response within fifteen business days.",
            textZh:
              "H-1B延期需要您的雇主向USCIS提交I-129表格。处理时间通常是四到六个月，但您可以申请加急处理，额外付费后15个工作日内得到回复。",
            commonMistake: {
              wrong: "Your employer need file Form I-129.",
              correct: "Your employer needs to file Form I-129.",
              explanation: "'need'作动词时第三人称单数要加's'，后面接动词要用'to do'形式。",
            },
            keyPhrases: [
              { en: "Form I-129", zh: "I-129表格" },
              { en: "premium processing", zh: "加急处理" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Your company files an I-129 with USCIS. Regular processing takes four to six months. If you need it faster, there's a premium option — costs extra but you hear back in fifteen days.",
                textZh:
                  "你公司向USCIS提交I-129。正常处理要四到六个月。如果需要快一点，有加急选项——多花钱但15天内就有回复。",
                actionHint: "hear back 意思是收到回复",
                frequency: "common",
              },
            ],
            culturalNote:
              "USCIS的加急处理（Premium Processing）费用约2,805美元，可以在15个工作日内收到审批结果。这笔费用通常由雇主支付。",
            casualVersion:
              "So for an H-1B extension, your employer files Form I-129 with USCIS. Usually takes 4-6 months to process. But you can pay extra for premium processing and get an answer in 15 business days.",
            formalityVariants: {
              casual:
                "Your employer just needs to file Form I-129 for an H-1B extension. It usually takes 4-6 months, but you can pay for premium processing to get it in 15 business days.",
              standard:
                "For an H-1B extension, your employer needs to file Form I-129 with USCIS. The processing time is typically four to six months, but you can request premium processing for an additional fee to get a response within fifteen business days.",
              formal:
                "Regarding an H-1B extension, your employer is required to submit Form I-129 to USCIS. The standard processing duration is generally estimated to be between four to six months; however, an expedited review can be obtained through premium processing, which guarantees a decision within fifteen business days for an additional charge.",
            },
          },
          {
            speaker: "you",
            textEn: "Can I keep working while the renewal is being processed?",
            textZh: "续签审批期间我还能继续工作吗？",
            casualVersion: "Am I allowed to keep working while we wait?",
            commonMistake: {
              wrong: "Can I continue work while the renewal is being processed?",
              correct: "Can I keep working while the renewal is being processed?",
              explanation: "“continue” 后接动词通常是 “-ing” 形式或 “to + 动词原形”。",
            },
            formalityVariants: {
              casual: "Can I still work while it's processing?",
              standard: "Can I keep working while the renewal is being processed?",
              formal: "Am I permitted to maintain employment during the pendency of the renewal application?",
            },
          },
          {
            speaker: "them",
            role: "移民官",
            textEn:
              "Yes, as long as your employer files the extension before your current visa expires, you're covered under what's called the two-hundred-and-forty-day rule. You can continue working while the petition is pending.",
            textZh:
              "可以，只要您的雇主在当前签证到期前提交延期申请，根据所谓的240天规则，您在申请审批期间可以继续工作。",
            commonMistake: {
              wrong: "Yes, if your employer files before visa expires, you can work.",
              correct: "Yes, as long as your employer files the extension before your current visa expires, you can continue working during the processing period under the '240-day rule'.",
              explanation: "“只要”用'as long as'更地道，句子结构需完整，不能省略'the'和'your'等冠词和形容词。",
            },
            keyPhrases: [
              { en: "two-hundred-and-forty-day rule", zh: "240天规则" },
              { en: "petition is pending", zh: "申请在审批中" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, you're fine as long as they file before your visa runs out. There's a rule that lets you keep working for up to two hundred and forty days while it's being reviewed.",
                textZh: "是的，只要他们在签证到期前提交就没问题。有个规则允许你在审批期间继续工作最多240天。",
                actionHint: "you're fine 意思是你没问题/放心",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, as long as your employer files the extension before your visa runs out, you're good under the 240-day rule. You can keep working while they're deciding.",
            formalityVariants: {
              casual:
                "Yep, if your employer files the extension before your visa expires, you're fine thanks to the 240-day rule. You can keep working while it's pending.",
              standard:
                "Yes, as long as your employer files the extension before your current visa expires, you're covered under what's called the two-hundred-and-forty-day rule. You can continue working while the petition is pending.",
              formal:
                "Affirmative, provided your employer submits the extension application prior to the expiration of your current visa, you are authorized to continue employment under the provisions of the two-hundred-and-forty-day rule while the petition remains in pending status.",
            },
          },
        ],
      },
      {
        id: "visa-interview",
        titleZh: "签证面谈准备",
        titleEn: "Visa Interview Preparation",
        description: "到领事馆进行签证续签面谈",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I have my visa interview today. Do I need to bring anything besides my passport?",
            textZh: "我今天有签证面谈。除了护照还需要带什么？",
            casualVersion: "My visa interview is today. What should I bring?",
            commonMistake: {
              wrong: "Do I need bring anything else besides my passport?",
              correct: "Do I need to bring anything besides my passport?",
              explanation: "动词'need'后接动词原型通常需要'to'，即'need to do'。",
            },
            formalityVariants: {
              casual: "Got my visa interview today. Need anything else besides my passport?",
              standard: "I have my visa interview today. Do I need to bring anything besides my passport?",
              formal:
                "I have my visa interview scheduled for today. Could you please advise if there are any additional items I should bring, apart from my passport?",
            },
          },
          {
            speaker: "them",
            role: "移民官",
            textEn:
              "Yes, please have your DS-160 confirmation page, your appointment letter, a recent passport photo, and any supporting documents — employment letter, pay stubs, bank statements — that demonstrate your ties to the US.",
            textZh:
              "是的，请带上DS-160确认页、预约信、一张近期护照照片，以及任何支持性文件——雇佣信、工资单、银行对账单——证明您与美国的联系。",
            casualVersion: "Yeah, bring your DS-160 confirmation, appointment letter, a recent passport pic, and any docs showing your ties to the US — like employment letters, pay stubs, bank statements.",
            commonMistake: {
              wrong: "Yes, bring DS-160, appointment letter, photo, and documents show your ties to US.",
              correct: "Yes, please have your DS-160 confirmation page, your appointment letter, a recent passport photo, and any supporting documents — employment letter, pay stubs, bank statements — that demonstrate your ties to the US.",
              explanation: "列举物品时要用完整短语；'that demonstrate'引导定语从句，'show'作动词时需要介词或更完整的结构。",
            },
            formalityVariants: {
              casual: "Yeah, bring your DS-160 confirmation, appointment letter, a recent passport pic, and any docs showing your ties to the US — like employment letters, pay stubs, bank statements.",
              standard: "Yes, please have your DS-160 confirmation page, your appointment letter, a recent passport photo, and any supporting documents — employment letter, pay stubs, bank statements — that demonstrate your ties to the US.",
              formal: "Yes, kindly ensure you have your DS-160 confirmation page, your official appointment letter, a recent passport-sized photograph, and all pertinent supporting documentation, such as employment letters, pay stubs, and bank statements, to corroborate your connections to the United States.",
            },
            keyPhrases: [
              { en: "DS-160 confirmation page", zh: "DS-160确认页" },
              { en: "supporting documents", zh: "支持性文件" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Bring your DS-160 printout, your appointment confirmation, a passport photo, and anything that shows your connection here — like a job letter, pay stubs, bank records.",
                textZh:
                  "带上DS-160打印件、预约确认、护照照片，以及任何能证明你在这里关系的东西——比如工作信、工资单、银行记录。",
                actionHint: "printout 指打印件",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What kind of questions will the officer ask me?",
            textZh: "面谈官会问我什么问题？",
            commonMistake: {
              wrong: "What questions officer ask me?",
              correct: "What kind of questions will the officer ask me?",
              explanation: "疑问句需要助动词'will'和正确的词序。'kind of'让表达更自然。",
            },
            formalityVariants: {
              casual: "What kind of questions will the officer ask me?",
              standard: "What kind of questions will the officer ask me?",
              formal: "Could you please inform me what types of questions the interviewing officer typically poses?",
            },
            casualVersion: "What are they gonna ask me?",
          },
          {
            speaker: "them",
            role: "移民官",
            textEn:
              "They'll typically ask about your job — what you do, who you work for, how long you've been with the company. They may also ask about your travel history and future plans. Just answer honestly and keep your responses brief.",
            textZh:
              "通常会问您的工作——做什么、为谁工作、在公司多久了。也可能问您的旅行记录和未来计划。诚实回答，保持简洁就好。",
            casualVersion: "They'll usually ask about your job — what you do, who you work for, how long you've been there. Might ask about your travel and future plans too. Just be honest and keep it short.",
            commonMistake: {
              wrong: "They usually ask your job. Say honest and brief.",
              correct: "They'll usually ask about your job—what you do, who you work for, how long you've been with the company. They might also ask about your travel history and future plans. Just answer honestly and keep it brief.",
              explanation: "动词后需介词'about'；表达建议时常用'just be'或'keep it'；'brief'是形容词，不能直接作动词。",
            },
            formalityVariants: {
              casual: "They'll usually ask about your job — what you do, who you work for, how long you've been there. Might ask about your travel and future plans too. Just be honest and keep it short.",
              standard: "They'll usually ask about your job—what you do, who you work for, how long you've been with the company. They might also ask about your travel history and future plans. Just answer honestly and keep it brief.",
              formal: "Interviewers typically inquire about your professional role, including your responsibilities, employer, and tenure. Questions regarding your travel history and future intentions may also arise. It is advisable to respond truthfully and concisely.",
            },
            keyPhrases: [
              { en: "travel history", zh: "旅行记录" },
              { en: "keep your responses brief", zh: "回答保持简洁" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Pretty standard stuff — your job, your employer, how long you've been working there. Maybe some questions about where you've traveled. Just be honest and don't over-explain.",
                textZh: "都是常规问题——你的工作、雇主、工作多久了。可能问你去过哪些地方。诚实回答，别说太多。",
                actionHint: "don't over-explain 意思是不要解释过多",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How long does the interview usually take?",
            textZh: "面谈通常多长时间？",
            commonMistake: {
              wrong: "Interview how long?",
              correct: "How long does the interview usually take?",
              explanation: "直接翻译中文的疑问句结构不符合英文习惯，需要助动词和正确的词序。",
            },
            formalityVariants: {
              casual: "How long's the interview usually?",
              standard: "How long does the interview usually take?",
              formal: "What is the typical duration of the interview process?",
            },
            casualVersion: "How long is it gonna take?",
          },
          {
            speaker: "them",
            role: "移民官",
            textEn:
              "The interview itself is usually just five to ten minutes. But plan to be at the consulate for at least two to three hours total because of security screening and wait times. Make sure you arrive at least fifteen minutes before your appointment.",
            textZh:
              "面谈本身通常只有5到10分钟。但由于安检和等候时间，请准备在领事馆待至少两到三个小时。确保至少提前15分钟到。",
            casualVersion: "Interview itself's usually just 5-10 minutes. But plan on being at the consulate for at least 2-3 hours total 'cause of security and waiting. Make sure you get there at least 15 minutes before your appointment.",
            commonMistake: {
              wrong: "Interview 5-10 minutes. But must stay in consulate 2-3 hours because security and wait. Arrive 15 minutes before appointment.",
              correct: "The interview itself is usually just five to ten minutes. But plan to be at the consulate for at least two to three hours total because of security screening and wait times. Make sure you arrive at least fifteen minutes before your appointment.",
              explanation: "英文句子结构需要更完整，如'plan to be'、'because of'，并使用名词形式'wait times'。",
            },
            formalityVariants: {
              casual: "Interview itself's usually just 5-10 minutes. But plan on being at the consulate for at least 2-3 hours total 'cause of security and waiting. Make sure you get there at least 15 minutes before your appointment.",
              standard: "The interview itself is usually just five to ten minutes. But plan to be at the consulate for at least two to three hours total because of security screening and wait times. Make sure you arrive at least fifteen minutes before your appointment.",
              formal: "The interview component typically lasts five to ten minutes. However, it is advisable to allocate a minimum of two to three hours for your consulate visit due to security procedures and potential wait times. Please ensure your arrival at least fifteen minutes prior to your scheduled appointment.",
            },
            keyPhrases: [
              { en: "security screening", zh: "安全检查/安检" },
              { en: "arrive at least fifteen minutes before", zh: "至少提前15分钟到达" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The actual interview? Like five, ten minutes tops. But the whole thing — security, waiting — can take a couple hours. So get there early, at least fifteen minutes ahead of time.",
                textZh:
                  "面谈本身？最多五到十分钟。但整个过程——安检、等待——可能要几个小时。所以早点到，至少提前15分钟。",
                actionHint: "tops 意思是最多",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 6. 移民面谈 ====================
  {
    id: "government-immigration-interview",
    category: "government",
    titleZh: "移民面谈",
    titleEn: "Immigration Interview",
    description: "移民局面谈，涉及绿卡或身份调整",
    otherRole: "移民官",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "面谈基本流程",
        titleEn: "Basic Interview Process",
        description: "移民面谈的标准流程和常见问题",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Good morning. I'm here for my immigration interview. Here's my appointment notice.",
            textZh: "早上好。我来参加移民面谈。这是我的预约通知。",
            casualVersion: "Morning. I have my immigration interview today. Here's my notice.",
            commonMistake: {
              wrong: "I come for my immigration interview.",
              correct: "I'm here for my immigration interview.",
              explanation: "中文“来”对应英文多种表达，在此情境“I'm here for”更自然。",
            },
            formalityVariants: {
              casual: "Morning. Here for my immigration interview. Got the appointment notice.",
              standard: "Good morning. I'm here for my immigration interview. Here's my appointment notice.",
              formal:
                "Good morning. I have an appointment for an immigration interview. I have my appointment notice here for your review.",
            },
          },
          {
            speaker: "them",
            role: "移民官",
            textEn:
              "Good morning. Please have a seat. I'll need to review your file first. Can you confirm your full legal name and date of birth for the record?",
            textZh: "早上好。请坐。我先看一下您的档案。请确认一下您的完整法定姓名和出生日期，做记录用。",
            commonMistake: {
              wrong: "confirm your full legal name and date of birth to record?",
              correct: "confirm your full legal name and date of birth for the record?",
              explanation: "“for the record” 是固定搭配，表示“作为记录、供备案”。",
            },
            keyPhrases: [
              { en: "full legal name", zh: "完整法定姓名" },
              { en: "for the record", zh: "做记录用" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Morning. Go ahead and take a seat. Let me pull up your file. Can you state your full name and date of birth?",
                textZh: "早上好。请坐。我调出你的档案。请说一下你的全名和出生日期。",
                actionHint: "pull up your file 意思是调出档案",
                frequency: "common",
              },
            ],
            casualVersion:
              "Morning. Have a seat. Gotta check your file first. Can you just confirm your full legal name and DOB for the record?",
            formalityVariants: {
              casual: "Morning. Grab a seat. Need to check your file. Just confirm your full name and DOB, okay?",
              standard:
                "Good morning. Please have a seat. I'll need to review your file first. Can you confirm your full legal name and date of birth for the record?",
              formal:
                "Good morning. Would you please take a seat? I will require a moment to review your documentation. Could you kindly verify your complete legal name and date of birth for official recording purposes?",
            },
          },
          {
            speaker: "you",
            textEn: "Sure. My name is [name], and my date of birth is [date].",
            textZh: "好的。我叫[姓名]，出生日期是[日期]。",
            commonMistake: {
              wrong: "My name is [name], my date of birth is [date].",
              correct: "My name is [name], and my date of birth is [date].",
              explanation: "连接两个独立句子时需要连词，常用“and”。",
            },
            casualVersion: "Sure, it's [name], born on [date].",
            formalityVariants: {
              casual: "Yeah. [Name], and my DOB is [date].",
              standard: "Sure. My name is [name], and my date of birth is [date].",
              formal: "Certainly. My full legal name is [name], and my date of birth is [date].",
            },
          },
          {
            speaker: "them",
            role: "移民官",
            textEn:
              "Thank you. Now, I need to put you under oath. Do you swear that all the information you provided in your application is true and correct to the best of your knowledge?",
            textZh: "谢谢。现在我需要您宣誓。您是否宣誓，您在申请中提供的所有信息据您所知都是真实准确的？",
            keyPhrases: [
              { en: "under oath", zh: "宣誓" },
              { en: "to the best of your knowledge", zh: "据您所知" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Thanks. Before we begin, I need to swear you in. Do you swear everything in your application is true and accurate?",
                textZh: "谢谢。开始之前，我需要让你宣誓。你是否宣誓申请中的一切都是真实准确的？",
                actionHint: "swear you in 意思是让你宣誓",
                frequency: "common",
              },
            ],
            culturalNote:
              "移民面谈开始前会要求宣誓（under oath），这意味着后续回答都有法律效力。如果被发现提供虚假信息，可能导致申请被拒甚至驱逐出境。",
            casualVersion:
              "Alright. Gotta put you under oath. Do you swear everything you put in the application is true and correct, as far as you know?",
            commonMistake: {
              wrong: "Do you swear all information is true to your best knowledge?",
              correct: "Do you swear that all the information... is true and correct to the best of your knowledge?",
              explanation: "“to the best of your knowledge”是固定短语，表示“据您所知”，不能省略冠词或介词。",
            },
            formalityVariants: {
              casual:
                "Thanks. Okay, oath time. Do you swear that everything in your application is true and correct, as far as you know?",
              standard:
                "Thank you. Now, I need to put you under oath. Do you swear that all the information you provided in your application is true and correct to the best of your knowledge?",
              formal:
                "Thank you. At this point, I must administer the oath. Do you solemnly swear or affirm that all statements and information provided in your application are true and accurate to the utmost extent of your personal knowledge?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I do. Everything I provided is true and correct.",
            textZh: "是的，我宣誓。我提供的一切都是真实准确的。",
            commonMistake: {
              wrong: "Yes. All my provide is true and correct.",
              correct: "Yes, I do. Everything I provided is true and correct.",
              explanation: "“Yes, I do”是对问题的直接肯定回答，更完整。“provided”是过去分词作定语。",
            },
            casualVersion: "Yes, I swear everything is true.",
            formalityVariants: {
              casual: "Yep, I do. It's all true.",
              standard: "Yes, I do. Everything I provided is true and correct.",
              formal: "Yes, I solemnly affirm that all information I have provided is indeed true and accurate.",
            },
          },
          {
            speaker: "them",
            role: "移民官",
            textEn:
              "Very well. Let's begin. Can you tell me why you're applying for adjustment of status? And please describe your current employment situation.",
            textZh: "好的。我们开始吧。请告诉我您为什么申请身份调整？请描述一下您目前的工作情况。",
            culturalNote: "“Adjustment of status”是移民法律术语。",
            keyPhrases: [
              { en: "adjustment of status", zh: "身份调整" },
              { en: "employment situation", zh: "工作情况/就业状况" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Alright, let's get started. Walk me through why you're seeking an adjustment of status. And what's your current job situation?",
                textZh: "好，开始吧。跟我说说你为什么申请身份调整。你目前的工作情况是怎样的？",
                actionHint: "walk me through 意思是详细给我讲讲",
                frequency: "common",
              },
            ],
            casualVersion:
              "Alright. Let's get started. So, why are you applying for adjustment of status? And what's your current job situation?",
            commonMistake: {
              wrong: "Why you apply status adjust?",
              correct: "Can you tell me why you're applying for adjustment of status?",
              explanation: "英文句子需要完整结构，例如动词和介词。法律术语“adjustment of status”也需完整使用。",
            },
            formalityVariants: {
              casual: "Okay, let's start. Why are you applying for status adjustment? And tell me about your job now.",
              standard:
                "Very well. Let's begin. Can you tell me why you're applying for adjustment of status? And please describe your current employment situation.",
              formal:
                "Excellent. We shall now proceed. Could you please articulate your reasons for seeking an adjustment of status? Furthermore, I would appreciate a detailed account of your current employment circumstances.",
            },
          },
        ],
      },
      {
        id: "detailed-questions",
        titleZh: "深入面谈问题",
        titleEn: "Detailed Interview Questions",
        description: "移民面谈中的深入问题和情况说明",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'd like to ask — how long will it take to get a decision after today's interview?",
            textZh: "我想问一下——今天面谈结束后多久能得到结果？",
            casualVersion: "When will I find out if I'm approved?",
            commonMistake: {
              wrong: "How long will take to get a decision?",
              correct: "How long will it take to get a decision?",
              explanation: '提问时很多时候会漏掉主语"it"。',
            },
            formalityVariants: {
              casual: "So, how long 'til I hear back after this interview?",
              standard: "I'd like to ask — how long will it take to get a decision after today's interview?",
              formal:
                "Could you please inform me of the approximate timeframe for receiving a decision following today's interview?",
            },
          },
          {
            speaker: "them",
            role: "移民官",
            textEn:
              "In most cases, you'll receive a decision within one hundred and twenty days. If we need additional evidence or a background check takes longer, it could be extended. You can check your case status online at any time.",
            textZh:
              "大多数情况下，您会在120天内收到结果。如果我们需要额外证据或背景调查时间更长，可能会延长。您可以随时在线查看案件状态。",
            casualVersion: "Usually, you'll get a decision within 120 days. Might be longer if we need more info or background checks take a while. You can always check your case status online.",
            commonMistake: {
              wrong: "you will receive decision 120 days inside.",
              correct: "you will receive a decision within 120 days.",
              explanation: "“在...之内”用“within”。“要求证据”用“require additional evidence”更正式。",
            },
            formalityVariants: {
              casual: "Usually, you'll get a decision within 120 days. Might be longer if we need more info or background checks take a while. You can always check your case status online.",
              standard: "In most cases, you will receive a decision within 120 days. It may take longer if we require additional evidence or a longer background check. You can check your case status online at any time.",
              formal: "Typically, a final determination is rendered within a period of 120 days. However, delays may occur should supplementary documentation or an extended background investigation be necessitated. You retain the ability to monitor your case status via our online portal at your convenience.",
            },
            keyPhrases: [
              { en: "additional evidence", zh: "额外证据" },
              { en: "case status", zh: "案件状态" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Usually within a hundred and twenty days. Sometimes it takes longer if we need more documents or if the background check isn't done yet. You can always check online for updates.",
                textZh: "通常120天内。有时候需要更多文件或背景调查没完成的话会更久。你随时可以网上查进度。",
                actionHint: "check online for updates 意思是网上查看最新进展",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What happens if my application is denied? Can I appeal?",
            textZh: "如果申请被拒怎么办？可以上诉吗？",
            commonMistake: {
              wrong: "What if my application no pass? Can I fight it?",
              correct: "What happens if my application is denied? Can I appeal?",
              explanation: "“申请被拒”用“denied”，“上诉”用“appeal”，这是法律术语。",
            },
            formalityVariants: {
              casual: "What if my application gets rejected? Can I fight that?",
              standard: "What happens if my application is denied? Can I appeal?",
              formal: "Should my application be subject to a denial, what recourse or appeal options are available?",
            },
            casualVersion: "What if I get denied? Can I fight it?",
          },
          {
            speaker: "them",
            role: "移民官",
            textEn:
              "If denied, you'll receive a written explanation of the reasons. Depending on the type of denial, you may be able to file a motion to reopen or reconsider. I'd strongly recommend consulting with an immigration attorney in that situation.",
            textZh:
              "如果被拒，您会收到书面的拒绝理由说明。根据拒绝类型，您可能可以提交重新审理或复议动议。在那种情况下，我强烈建议咨询移民律师。",
            casualVersion: "If it's denied, you'll get a letter explaining why. Depending on the reason, you might be able to file a motion to reopen or reconsider. If that happens, seriously, get an immigration lawyer.",
            culturalNote: "涉及到法律程序，务必咨询专业移民律师。",
            commonMistake: {
              wrong: "you can ask again or think again.",
              correct: "you may be able to file a motion to reopen or reconsider.",
              explanation: "移民申请的法律程序有特定术语，如 “file a motion”；遇到法律问题需咨询专业律师。",
            },
            formalityVariants: {
              casual: "If it's denied, you'll get a letter explaining why. Depending on the reason, you might be able to file a motion to reopen or reconsider. If that happens, seriously, get an immigration lawyer.",
              standard: "If denied, you will receive a written explanation for the denial. Depending on the type of denial, you may be able to file a motion to reopen or reconsider. In such a scenario, I strongly advise consulting an immigration attorney.",
              formal: "In the event of a denial, you shall be furnished with a comprehensive written explanation outlining the grounds for such a decision. Contingent upon the nature of the denial, you may possess the option to submit a motion to reopen or a motion to reconsider. Under such circumstances, I would unequivocally recommend seeking counsel from a qualified immigration attorney.",
            },
            keyPhrases: [
              { en: "motion to reopen", zh: "重新审理动议" },
              { en: "immigration attorney", zh: "移民律师" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You'd get a letter explaining why. You might be able to appeal or file a motion to reopen the case. Honestly, I'd say get a lawyer if that happens.",
                textZh:
                  "你会收到一封说明原因的信。你可能可以上诉或提交重新审理动议。说实话，如果发生这种情况我建议找个律师。",
                actionHint: "I'd say 在这里是建议的口语说法",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I see. Is there anything else I should be aware of while waiting for the decision?",
            textZh: "明白了。等待结果期间还有什么需要注意的吗？",
            commonMistake: {
              wrong: "I see. Other things I need know when wait result?",
              correct: "I see. Is there anything else I should be aware of while waiting for the decision?",
              explanation: "“注意/了解”用“be aware of”，“在等待期间”用“while waiting”。",
            },
            formalityVariants: {
              casual: "Got it. Anything else I should know while I'm waiting?",
              standard: "I see. Is there anything else I should be aware of while waiting for the decision?",
              formal: "Understood. Are there any additional considerations or precautions I should be mindful of during the adjudication period?",
            },
            casualVersion: "Anything I should watch out for while I wait?",
          },
          {
            speaker: "them",
            role: "移民官",
            textEn:
              "Make sure your address is current in our system — if we can't reach you, it could delay your case. Don't travel internationally without advance parole if your status is pending. And keep copies of every document you've submitted.",
            textZh:
              "确保我们系统里您的地址是最新的——如果联系不上您，可能会延误您的案件。身份待审期间不要在没有回美证的情况下出国旅行。保留您提交的每份文件的副本。",
            casualVersion: "Keep your address updated with us — if we can't get ahold of you, your case might get delayed. Don't leave the U.S. without advance parole while your status is pending. And hang onto copies of everything you send in.",
            culturalNote: "提交身份调整申请后，没有“回美证”（advance parole）就离境，申请可能自动作废，非常重要。",
            commonMistake: {
              wrong: "address correct in system. Don't go outside US no advance parole. Remember copy documents.",
              correct: "Make sure your address is current in our system — if we cannot reach you, it could delay your case. Do not travel outside the U.S. without advance parole while your status is pending. Keep copies of every document you submit.",
              explanation: "词汇使用要准确，如“current”而非“correct”，“without advance parole”，“status is pending”以及“keep copies”。",
            },
            formalityVariants: {
              casual: "Keep your address updated with us — if we can't get ahold of you, your case might get delayed. Don't leave the U.S. without advance parole while your status is pending. And hang onto copies of everything you send in.",
              standard: "Make sure your address is current in our system — if we cannot reach you, it could delay your case. Do not travel outside the U.S. without advance parole while your status is pending. Keep copies of every document you submit.",
              formal: "Ensure that your current residential address is accurately recorded within our system, as an inability to establish communication could significantly impede the progression of your case. It is imperative that you refrain from international travel without obtaining advance parole permission while your adjustment of status application remains pending. Furthermore, retain duplicate copies of all submitted documentation.",
            },
            keyPhrases: [
              { en: "advance parole", zh: "回美证/提前离境许可" },
              { en: "keep copies", zh: "保留副本" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Keep your address updated with us — that's a big one. Don't leave the country without advance parole while your case is open. And hang on to copies of everything.",
                textZh: "地址一定要更新给我们——这很重要。案件进行中别在没有回美证的情况下出国。所有材料都留好副本。",
                actionHint: "hang on to 意思是保留/留住",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 7. 报税 ====================
  {
    id: "government-tax-filing",
    category: "government",
    titleZh: "报税",
    titleEn: "Tax Filing",
    description: "找税务顾问协助报税",
    otherRole: "税务顾问",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "基本报税咨询",
        titleEn: "Basic Tax Filing",
        description: "第一次在美国报税的基本流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, this is my first time filing taxes in the US. I'm not sure where to start.",
            textZh: "你好，这是我第一次在美国报税。我不知道从哪里开始。",
            culturalNote: "美国报税制度复杂，与中国税务系统差异大，首次报税者常感无从下手。",
            commonMistake: {
              wrong: "This is my first time file taxes in US. I don't know how to start.",
              correct: "This is my first time filing taxes in the US. I don't know where to start.",
              explanation: "file taxes 需用动名词 filing taxes；不知道从何开始应用 where to start。",
            },
            formalityVariants: {
              casual: "Hi, this is my first time filing taxes here. Don't know where to even begin.",
              standard: "Hi, this is my first time filing taxes in the US. I don't know where to start.",
              formal: "Good morning/afternoon. This is my inaugural experience filing taxes within the United States, and I am uncertain as to the initial steps.",
            },
            casualVersion: "Hey, I've never filed taxes here before. Can you help me out?",
          },
          {
            speaker: "them",
            role: "税务顾问",
            textEn:
              "Of course. First, let me ask — are you a US citizen, a permanent resident, or here on a visa? Your tax obligation depends on your residency status.",
            textZh: "当然。首先让我问一下——您是美国公民、永久居民还是持签证在这里？您的纳税义务取决于您的居住身份。",
            casualVersion: "Sure. First, gotta ask – citizen, green card, or on a visa? Your tax stuff depends on your residency status.",
            commonMistake: {
              wrong: "Your tax obligation depend on your residency status.",
              correct: "Your tax obligation depends on your residency status.",
              explanation: "主语 obligation 是单数，谓语动词 depend 需用第三人称单数形式 depends。",
            },
            formalityVariants: {
              casual: "Got it. First, are you a citizen, green card holder, or here on a visa? Your tax situation depends on that.",
              standard: "Of course. First, let me ask — are you a US citizen, a permanent resident, or here on a visa? Your tax obligation depends on your residency status.",
              formal: "Certainly. To begin, could you please clarify your immigration status? Specifically, whether you are a United States citizen, a permanent resident, or currently residing under a visa. Your tax obligations are contingent upon your residency status.",
            },
            keyPhrases: [
              { en: "tax obligation", zh: "纳税义务" },
              { en: "residency status", zh: "居住身份" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure thing. So first off — are you a citizen, green card holder, or on a visa? That changes how you file.",
                textZh: "没问题。首先——你是公民、绿卡持有者还是持签证的？这决定你怎么报税。",
                actionHint: "first off 意思是首先（口语）",
                frequency: "common",
              },
            ],
            culturalNote:
              "美国税务年度是1月1日到12月31日，报税截止日通常是4月15日。在美国有收入的非公民也需要报税，即使是持短期签证。",
          },
          {
            speaker: "you",
            textEn: "I'm on an H-1B work visa. I've been working here for about eight months.",
            textZh: "我持H-1B工作签证。在这里工作了大约八个月。",
            culturalNote: "H-1B 签证是美国工作签证的一种，常与报税身份（如税务居民）概念混淆。",
            commonMistake: {
              wrong: "I am H-1B work visa holder. I work here about eight months.",
              correct: "I'm on an H-1B work visa. I've been working here for about eight months.",
              explanation: "持签证用 on an H-1B visa。表示持续时间用现在完成进行时。",
            },
            formalityVariants: {
              casual: "I'm on an H-1B work visa. Been here working for like eight months.",
              standard: "I'm on an H-1B work visa. I've been working here for about eight months.",
              formal: "I am currently holding an H-1B work visa. I have been employed in the United States for approximately eight months.",
            },
            casualVersion: "I'm on an H-1B. Been working here about eight months.",
          },
          {
            speaker: "them",
            role: "税务顾问",
            textEn:
              "Got it. As an H-1B holder, you're generally considered a resident for tax purposes if you've been here for at least a hundred and eighty-three days. You'll need your W-2 form from your employer. Have you received that yet?",
            textZh:
              "明白了。作为H-1B持有者，如果您在美国待了至少183天，通常被视为税务居民。您需要雇主提供的W-2表格。您收到了吗？",
            casualVersion: "Okay. H-1B holders, you're usually tax residents if you've been here 183+ days. You'll need your employer's W-2. Got it yet?",
            culturalNote: "W-2 表格是美国雇主提供给员工的年度工资及报税总结，中国无对应概念。",
            commonMistake: {
              wrong: "You are considered tax resident if you stay in US for 183 days.",
              correct: "You're usually considered a tax resident if you've been in the US for at least 183 days.",
              explanation: "“被认为是”用 considered a。Stay 更口语化，用 been in 更正式。",
            },
            formalityVariants: {
              casual: "Right. H-1B? If you've been here 183 days, you're probably a tax resident. Need your W-2 from work. Have it?",
              standard: "Got it. As an H-1B holder, you're usually considered a tax resident if you've been in the US for at least 183 days. You'll need the W-2 form from your employer. Have you received it?",
              formal: "Understood. As an H-1B visa holder, if your physical presence in the United States has extended beyond 183 days, you are typically classified as a tax resident. You will require the Form W-2 from your employer. Have you obtained this document?",
            },
            keyPhrases: [
              { en: "resident for tax purposes", zh: "税务居民" },
              { en: "W-2 form", zh: "W-2表格（工资和税务报表）" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Okay, so H-1B — if you've been here over a hundred and eighty-three days, you file as a resident. Your employer should've given you a W-2. Got that?",
                textZh: "好的，H-1B——如果在这里超过183天，按居民报税。你雇主应该给你W-2了。拿到了吗？",
                actionHint: "should've 是 should have 的缩写",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I have my W-2. Is that all I need?",
            textZh: "是的，我有W-2。只需要这个就够了吗？",
            commonMistake: {
              wrong: "Yes, I have my W-2. Is this all I need?",
              correct: "Yes, I have my W-2. Is that all I need?",
              explanation: "指代上文提到的 W-2 用 that 更自然，而非 this。",
            },
            formalityVariants: {
              casual: "Yeah, got my W-2. Is that it?",
              standard: "Yes, I have my W-2. Is that all I need?",
              formal: "Yes, I possess my W-2 form. Is this the only document required?",
            },
            casualVersion: "Yep, got my W-2. That's all I need, right?",
          },
          {
            speaker: "them",
            role: "税务顾问",
            textEn:
              "The W-2 is the main one. But also bring any 1099 forms if you had freelance income, bank interest statements, and your Social Security number or ITIN. If you had any foreign bank accounts with over ten thousand dollars, we'll need to report those too.",
            textZh:
              "W-2是最主要的。但如果有自由职业收入还需要1099表格、银行利息单、社保号或ITIN。如果您有超过一万美元的海外银行账户，也需要申报。",
            casualVersion: "W-2's key. But also bring any 1099s if you did freelance, bank interest statements, and your SSN or ITIN. If you had over ten grand in foreign bank accounts, we gotta report that too.",
            culturalNote: "海外账户申报（FBAR）是美国一项独特且严格的规定，中国居民通常不了解。",
            commonMistake: {
              wrong: "Also need bring any 1099 forms. If you had foreign bank accounts over ten thousand dollars.",
              correct: "But also bring any 1099 forms if you had freelance income, bank interest statements, and your Social Security number or ITIN. If you had any foreign bank accounts with over ten thousand dollars, we'll need to report that too.",
              explanation: "表达“也需要带”用 also bring 更简洁。关于银行账户的陈述应构成完整句子。",
            },
            formalityVariants: {
              casual: "W-2's the main one. But also grab any 1099s if you earned freelance cash, bank statements for interest, and your SSN or ITIN. And any foreign bank accounts with over 10K, we'll need to report those.",
              standard: "The W-2 is the main one. But also bring any 1099 forms if you had freelance income, bank interest statements, and your Social Security number or ITIN. If you had any foreign bank accounts with over ten thousand dollars, we'll need to report that too.",
              formal: "While the W-2 is primary, please also furnish any 1099 forms if you engaged in freelance work, statements detailing bank interest, and your Social Security number or ITIN. Additionally, any foreign bank accounts exceeding a balance of ten thousand dollars will necessitate reporting.",
            },
            keyPhrases: [
              { en: "1099 forms", zh: "1099表格（自由职业/其他收入）" },
              { en: "foreign bank accounts", zh: "海外银行账户" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That's the big one. But also grab any 1099s if you did any side work, bank statements showing interest, and your SSN. Oh, and if you've got more than ten grand in foreign bank accounts, we gotta report that.",
                textZh:
                  "那是最主要的。但如果有副业的话也带上1099，还有银行利息对账单和SSN。对了，如果海外账户超过一万块，也得申报。",
                actionHint: "ten grand = 一万美元（口语）",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "deductions",
        titleZh: "退税和减免",
        titleEn: "Deductions and Refunds",
        description: "了解可以申请的税务减免和退税",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I've heard I can get a tax refund. How does that work?",
            textZh: "我听说可以拿到退税。是怎么回事？",
            commonMistake: {
              wrong: "I heard can get tax refund. How it work?",
              correct: "I heard I can get a tax refund. How does that work?",
              explanation: "缺少主语 I， refund 前需加冠词 a。询问运作方式用 How does that work。",
            },
            formalityVariants: {
              casual: "Heard I can get a tax refund. How's that happen?",
              standard: "I heard I can get a tax refund. How does that work?",
              formal: "I have been informed of the possibility of receiving a tax refund. Could you please explain the process involved?",
            },
            casualVersion: "Someone told me I can get money back on my taxes. How?",
          },
          {
            speaker: "them",
            role: "税务顾问",
            textEn:
              "If your employer withheld more tax from your paycheck than you actually owe, you'll get a refund. We'll calculate your actual tax liability and compare it to what was already paid. Most W-2 employees do get something back.",
            textZh:
              "如果您的雇主从工资中扣缴的税比您实际应缴的多，您就会得到退税。我们会计算您的实际税款并与已缴纳的进行比较。大多数W-2员工都能拿回一些。",
            casualVersion: "If your employer took out more tax than you actually owe, you'll get money back. We figure out your real tax, compare it to what's paid. Most W-2 folks get something back.",
            culturalNote: "美国有“预扣税”（withholding）制度，即雇主预先从工资中扣除税款。",
            commonMistake: {
              wrong: "If employer withheld more tax than you owe, you will get refund.",
              correct: "If your employer withheld more tax from your paycheck than you actually owe, you'll receive a refund.",
              explanation: "employer 前需加 your，refund 前需加 a。",
            },
            formalityVariants: {
              casual: "If your job took too much tax, you'll get a refund. We'll crunch the numbers, see what you actually owe versus what's paid. Most W-2 employees usually get some cash back.",
              standard: "If your employer withheld more tax from your paycheck than you actually owe, you'll receive a refund. We'll calculate your actual tax and compare it with what's been paid. Most W-2 employees get something back.",
              formal: "Should your employer have withheld an amount greater than your actual tax liability, you will be issued a refund. We will accurately compute your definitive tax obligation and reconcile it with the amounts already remitted. A significant majority of W-2 employees are eligible for a return of funds.",
            },
            keyPhrases: [
              { en: "withheld", zh: "预扣/代扣" },
              { en: "tax liability", zh: "应纳税额" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Basically, if your company took out more tax than you actually owed, the IRS gives you the difference back. We figure out your real tax bill and compare it to what they already took. Most people get a refund.",
                textZh:
                  "简单说，如果公司扣的税比你实际该交的多，IRS会把差额还给你。我们算出你真正的税额，跟已扣的比较。大多数人都能拿到退税。",
                actionHint: "took out 在这里意思是扣除",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Are there any deductions I should know about? I work from home sometimes.",
            textZh: "有什么减免项目我应该了解的吗？我有时在家办公。",
            culturalNote: "美国税法中，各项减免（deductions）非常复杂，需要专业人士协助理解和申报。",
            commonMistake: {
              wrong: "Any deductions I should know? I sometimes work from home.",
              correct: "Are there any deductions I should know about? I work from home sometimes.",
              explanation: "询问是否存在用 Are there any。work from home sometimes 比 sometimes work from home 更自然。",
            },
            formalityVariants: {
              casual: "Any deductions I should know about? I sometimes work from home.",
              standard: "Are there any deductions I should know about? I work from home sometimes.",
              formal: "Are there any particular deductions or credits of which I should be aware? I do occasionally perform work remotely from my residence.",
            },
            casualVersion: "Any deductions I can claim? I work from home a lot.",
          },
          {
            speaker: "them",
            role: "税务顾问",
            textEn:
              "As a W-2 employee, the home office deduction isn't available to you — that's only for self-employed individuals. However, you can claim the standard deduction, which is fourteen thousand six hundred dollars for a single filer this year. That's the easiest route for most people.",
            textZh:
              "作为W-2员工，家庭办公室减免不适用于您——那只针对自雇人士。不过，您可以申请标准扣除额，今年单身申报者是14,600美元。对大多数人来说这是最简单的方式。",
            casualVersion: "As a W-2 employee, home office deductions aren't for you—that's self-employed stuff. But you can claim the standard deduction, which is $14,600 for single filers this year. That's usually easiest for most.",
            culturalNote: "家庭办公室费用减免只适用于自雇人士，W-2员工通常不能申请，这是常见误区。",
            commonMistake: {
              wrong: "Home office deduction not apply to you. You can claim standard deduction.",
              correct: "The home office deduction isn't applicable to you — that's for self-employed individuals only. However, you can claim the standard deduction.",
              explanation: "不适用用 isn't applicable to you 或 doesn't apply to you。Claim the standard deduction 是固定用法。",
            },
            formalityVariants: {
              casual: "For W-2 folks, home office deductions aren't a thing – that's just for self-employed. But you can just take the standard deduction, which is $14,600 for singles this year. Easiest for most.",
              standard: "As a W-2 employee, the home office deduction isn't applicable to you — that's for self-employed individuals only. However, you can claim the standard deduction, which for single filers this year is $14,600. It's the simplest way for most people.",
              formal: "As a W-2 employee, the home office deduction is not applicable to your situation; it is exclusively designated for self-employed individuals. Nevertheless, you are eligible to claim the standard deduction, which for single filers this year amounts to $14,600. This typically represents the most straightforward approach for the majority.",
            },
            keyPhrases: [
              { en: "standard deduction", zh: "标准扣除额" },
              { en: "single filer", zh: "单身申报者" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Unfortunately, W-2 workers can't claim the home office thing — that's for freelancers. But the standard deduction this year is fourteen-six, and for most people that works out better than itemizing anyway.",
                textZh:
                  "很遗憾，W-2员工不能用家庭办公室减免——那是给自由职业者的。但今年标准扣除是14,600，对大多数人来说比逐项扣除合算。",
                actionHint: "fourteen-six 是 14,600 的口语简称",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "When will I receive my refund after filing?",
            textZh: "报税后多久能收到退税？",
            commonMistake: {
              wrong: "When I receive my refund after file?",
              correct: "When will I receive my refund after filing?",
              explanation: "缺少 will，after 后面动词用动名词 filing。",
            },
            formalityVariants: {
              casual: "When do I get my refund after filing?",
              standard: "When will I receive my refund after filing?",
              formal: "What is the anticipated timeframe for receiving my refund subsequent to the submission of my tax return?",
            },
            casualVersion: "How long till I get my money back?",
          },
          {
            speaker: "them",
            role: "税务顾问",
            textEn:
              "If you file electronically and choose direct deposit, you'll typically get your refund within twenty-one days. Paper filing takes much longer — six to eight weeks. I'd recommend e-filing with direct deposit for the fastest turnaround.",
            textZh:
              "如果您电子申报并选择直接存款，通常21天内就能收到退税。纸质申报要久得多——六到八周。我建议电子申报加直接存款，最快。",
            casualVersion: "If you e-file and do direct deposit, you'll usually get your refund within 21 days. Paper filing's way longer—6 to 8 weeks. I'd go with e-file and direct deposit, fastest way.",
            culturalNote: "电子报税 (e-filing) 和直接存款 (direct deposit) 是美国官方推荐的最快退税方式。",
            commonMistake: {
              wrong: "If you file electronic and choose direct deposit, you will receive refund in 21 days.",
              correct: "If you file electronically and choose direct deposit, you'll usually get your refund within 21 days.",
              explanation: "electronically 是副词修饰动词 file。in 21 days 不如 within 21 days 精确。",
            },
            formalityVariants: {
              casual: "E-file and direct deposit? You'll see your refund in like 21 days. Paper takes forever – 6-8 weeks. So yeah, do e-file and direct deposit for speed.",
              standard: "If you file electronically and choose direct deposit, you'll usually get your refund within 21 days. Paper filing takes much longer — six to eight weeks. I recommend e-filing with direct deposit, for the quickest return.",
              formal: "Should you opt for electronic filing and select direct deposit, your refund will typically be processed within 21 days. Conversely, paper-based submissions require a considerably longer processing period, generally six to eight weeks. I strongly advise electronic filing accompanied by direct deposit for the most expedited return.",
            },
            keyPhrases: [
              { en: "file electronically", zh: "电子申报" },
              { en: "direct deposit", zh: "直接存款" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "E-file plus direct deposit? About three weeks. If you do it on paper, you're looking at six to eight weeks. Definitely go with e-file — way faster.",
                textZh: "电子报税加直接存款？大约三周。纸质的话要六到八周。一定要选电子报税——快得多。",
                actionHint: "way faster 意思是快多了",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 8. 市政厅办事 ====================
  {
    id: "government-city-hall",
    category: "government",
    titleZh: "市政厅办事",
    titleEn: "City Hall Services",
    description: "到市政厅办理各类市政服务",
    otherRole: "市政人员",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "市政服务咨询",
        titleEn: "General City Hall Inquiry",
        description: "去市政厅咨询办事流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, this is my first time at City Hall. I'm not sure which department I need to go to.",
            textZh: "你好，我第一次来市政厅。不确定需要去哪个部门。",
            casualVersion: "Hey, I've never been here. Where do I go?",
            commonMistake: {
              wrong: "I'm not sure which department I need go.",
              correct: "I'm not sure which department I need to go to.",
              explanation: "动词 “go” 后面通常需要搭配介词 “to” 来表示方向或目的地。",
            },
            formalityVariants: {
              casual: "Hey, first time here at City Hall. Not sure which department to hit up.",
              standard: "Hi, this is my first time at City Hall. I'm not sure which department I need to go to.",
              formal:
                "Good morning/afternoon, I am visiting City Hall for the first time and would appreciate guidance on which department I should consult.",
            },
          },
          {
            speaker: "them",
            role: "市政人员",
            textEn:
              "No problem. What are you here for today? We handle everything from permits and licenses to utility accounts and parking citations.",
            textZh: "没问题。您今天来办什么事？我们这里处理各种业务，从许可证、执照到水电账户和停车罚单。",
            keyPhrases: [
              { en: "permits and licenses", zh: "许可证和执照" },
              { en: "parking citations", zh: "停车罚单" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure, what do you need? We do permits, licenses, utility stuff, parking tickets — pretty much everything city-related.",
                textZh: "好的，你需要什么？我们办许可证、执照、水电事务、停车罚单——基本上所有市政相关的。",
                actionHint: "pretty much everything 意思是几乎所有的",
                frequency: "common",
              },
            ],
            casualVersion:
              "No worries. What brings ya in today? We got everything from permits and licenses to utilities and parking tickets.",
            formalityVariants: {
              casual:
                "No worries. What brings ya in today? We got permits, licenses, utilities, parking tickets, all that stuff.",
              standard:
                "No problem. What are you here for today? We handle everything from permits and licenses to utility accounts and parking citations.",
              formal:
                "Certainly, how may I assist you this afternoon? Our services encompass a broad range of municipal functions, including permits, licenses, utility accounts, and parking citations.",
            },
          },
          {
            speaker: "you",
            textEn: "I need to set up a water and trash service account for my new apartment.",
            textZh: "我需要为我的新公寓开通水费和垃圾处理账户。",
            casualVersion: "I just moved in and need to set up water and trash pickup.",
            commonMistake: {
              wrong: "I need to open water and trash account.",
              correct: "I need to set up a water and trash service account.",
              explanation: "开通水电等服务账户常用 “set up an account”，而非 “open an account”。",
            },
            formalityVariants: {
              casual: "Gotta set up water and trash for my new place.",
              standard: "I need to set up a water and trash service account for my new apartment.",
              formal:
                "I require assistance in establishing a water and refuse collection service account for my newly acquired apartment.",
            },
          },
          {
            speaker: "them",
            role: "市政人员",
            textEn:
              "That's handled by our Public Utilities department, which is on the second floor, room two-oh-five. You'll need your lease agreement and a photo ID. There's a small deposit — usually around fifty to a hundred dollars.",
            textZh:
              "这归我们公共事业部门管，在二楼205室。您需要带租赁合同和带照片的证件。有一笔小额押金——通常50到100美元左右。",
            keyPhrases: [
              { en: "Public Utilities", zh: "公共事业部门" },
              { en: "lease agreement", zh: "租赁合同" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Head up to the second floor, room two-oh-five — that's Utilities. Bring your lease and an ID. They'll ask for a deposit, usually fifty to a hundred bucks.",
                textZh: "上二楼205室——公共事业部门。带上租约和证件。他们会要押金，通常50到100块。",
                actionHint: "head up to 意思是前往（口语）",
                frequency: "common",
              },
            ],
            culturalNote:
              "美国很多城市的水费和垃圾处理由市政府管理，需要在市政厅（City Hall）开户。搬进新公寓后应尽快办理，否则可能影响正常供水。",
            casualVersion:
              "That's with Public Utilities, second floor, room 205. You'll need your lease and a photo ID. There's a small deposit, usually fifty to a hundred bucks.",
            formalityVariants: {
              casual:
                "Public Utilities handles that, second floor, 205. Bring your lease, photo ID. Small deposit, like 50-100 bucks.",
              standard:
                "That's handled by our Public Utilities department, which is on the second floor, room two-oh-five. You'll need your lease agreement and a photo ID. There's a small deposit — usually around fifty to a hundred dollars.",
              formal:
                "That particular service is managed by our Public Utilities department, located on the second floor in room two-zero-five. Please ensure you bring your lease agreement and a valid photo identification. A nominal deposit, typically ranging from fifty to one hundred dollars, will also be required.",
            },
          },
          {
            speaker: "you",
            textEn: "Great, thank you. Is there a long wait up there?",
            textZh: "好的，谢谢。上面排队要等很久吗？",
            casualVersion: "Thanks. Is there a big line up there?",
            commonMistake: {
              wrong: "Is it long wait up there?",
              correct: "Is there a long wait up there?",
              explanation: "询问是否有等待时间常用 “Is there a long wait?”，而不是直接翻译主语“it”.",
            },
            formalityVariants: {
              casual: "Cool, thanks. Long wait up there?",
              standard: "Great, thank you. Is there a long wait up there?",
              formal:
                "Excellent, I appreciate that information. May I inquire if there is typically a significant waiting period at that location?",
            },
          },
          {
            speaker: "them",
            role: "市政人员",
            textEn:
              "It depends on the day. Mondays and Fridays tend to be busiest. You can also take a number and wait in the lobby — they'll call you when it's your turn. Or you could try doing it online through the city website.",
            textZh:
              "看情况。周一和周五通常最忙。您也可以取个号在大厅等——轮到您时会叫号。或者您可以试试通过市政府网站在线办理。",
            keyPhrases: [
              { en: "take a number", zh: "取号" },
              { en: "call you when it's your turn", zh: "轮到你时叫号" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Mondays and Fridays are the worst. Grab a number and have a seat — they'll call you. Or honestly, you might wanna just do it online if you can.",
                textZh: "周一和周五最挤。拿个号坐着等——他们会叫的。说实话，能网上办的话可以试试。",
                actionHint: "the worst 在这里意思是最忙/最挤",
                frequency: "common",
              },
            ],
            casualVersion:
              "Depends on the day. Mondays, Fridays are usually packed. You can grab a number and chill in the lobby, they'll call you. Or just do it online on the city site.",
            formalityVariants: {
              casual:
                "Depends. Mon, Fri are craziest. Grab a number, wait in the lobby, they'll call you. Or just do it online.",
              standard:
                "It depends on the day. Mondays and Fridays tend to be busiest. You can also take a number and wait in the lobby — they'll call you when it's your turn. Or you could try doing it online through the city website.",
              formal:
                "The waiting time is contingent upon the specific day. Mondays and Fridays generally experience the highest volume of visitors. Alternatively, you may obtain a queue number and wait in the lobby; you will be summoned when your turn arrives. An online application process is also available via the city's official website.",
            },
          },
        ],
      },
      {
        id: "complaint",
        titleZh: "市政投诉",
        titleEn: "Filing a Complaint",
        description: "向市政厅提交关于市政服务的投诉",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "I'd like to file a complaint about the street lights on my block. They've been out for three weeks.",
            textZh: "我想投诉我那条街的路灯问题。已经坏了三周了。",
            casualVersion: "The street lights on my block have been broken for three weeks. Who do I talk to?",
            commonMistake: {
              wrong: "I want to complain about street lights on my block. They are broken for three weeks.",
              correct:
                "I'd like to file a complaint about the street lights on my block. They've been out for three weeks.",
              explanation: "正式投诉常用 “file a complaint”，灯不亮用 “out” 更地道。",
            },
            formalityVariants: {
              casual: "Wanna complain about the street lights on my block. Been out three weeks.",
              standard:
                "I'd like to file a complaint about the street lights on my block. They've been out for three weeks.",
              formal:
                "I wish to formally register a complaint regarding the malfunctioning street lights on my residential block, which have been inoperative for a period of three weeks.",
            },
          },
          {
            speaker: "them",
            role: "市政人员",
            textEn:
              "I'm sorry to hear that. You can file a service request with our Public Works department. Can you give me the exact address or intersection where the lights are out?",
            textZh: "很抱歉听到这个情况。您可以向我们公共工程部门提交服务请求。能告诉我路灯故障的具体地址或路口吗？",
            keyPhrases: [
              { en: "service request", zh: "服务请求/工单" },
              { en: "Public Works", zh: "公共工程部门" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That's frustrating. Let me put in a work order for you. What's the address or cross streets where the lights are out?",
                textZh: "真烦人。我来帮你提交工单。路灯坏的地方是什么地址或哪个路口？",
                actionHint: "work order 和 service request 意思相近",
                frequency: "common",
              },
            ],
            casualVersion:
              "Oh, sorry about that. You can file a service request with Public Works. Can you give me the exact address or intersection where the lights are out?",
            formalityVariants: {
              casual:
                "Man, sorry to hear that. Just file a service request with Public Works. Need the exact address or intersection where the lights are out.",
              standard:
                "I'm sorry to hear that. You can file a service request with our Public Works department. Can you give me the exact address or intersection where the lights are out?",
              formal:
                "I apologize to learn of this inconvenience. You may submit a service request to our Public Works department. Could you please provide the precise address or intersection where these street lights are currently inoperative?",
            },
          },
          {
            speaker: "you",
            textEn: "It's on Oak Street between Third and Fourth Avenue. About five lights are not working.",
            textZh: "在Oak街，第三大道和第四大道之间。大约有五盏灯不亮。",
            casualVersion: "Oak Street, between Third and Fourth. Like five lights are out.",
            commonMistake: {
              wrong: "It's Oak Street between Third and Fourth Avenue. Five lights not working.",
              correct: "It's on Oak Street between Third and Fourth Avenue. About five lights are not working.",
              explanation: "街道地点前应使用介词 “on”，句子结构需要完整的动词 “are”。",
            },
            formalityVariants: {
              casual: "Oak Street, between Third and Fourth Ave. Like five lights are out.",
              standard: "It's on Oak Street between Third and Fourth Avenue. About five lights are not working.",
              formal:
                "The location is Oak Street, situated between Third and Fourth Avenue. Approximately five street lights are currently non-functional.",
            },
          },
          {
            speaker: "them",
            role: "市政人员",
            textEn:
              "I've noted that down. I'll submit this as a priority request since it's a safety concern. Our maintenance crew should be out within five to seven business days. We'll send you an email when the work is scheduled.",
            textZh:
              "我记下来了。因为涉及安全问题，我会把这作为优先请求提交。维修团队应该会在5到7个工作日内处理。安排好工作后会给您发邮件通知。",
            keyPhrases: [
              { en: "priority request", zh: "优先请求" },
              { en: "maintenance crew", zh: "维修团队" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Got it. Since it's a safety thing, I'll flag it as high priority. The crew should be out there within a week. We'll email you when they schedule it.",
                textZh: "知道了。因为是安全问题，我标记为高优先级。维修人员一周内应该到。安排好后会发邮件给你。",
                actionHint: "flag it 意思是标记/标注",
                frequency: "common",
              },
            ],
            casualVersion:
              "Got it down. I'll flag this as a priority 'cause it's a safety thing. Maintenance crew should be out in 5-7 business days. We'll shoot you an email when it's scheduled.",
            formalityVariants: {
              casual:
                "Got it. Priority request 'cause safety first. Crew should be out in 5-7 business days. We'll email you when it's set.",
              standard:
                "I've noted that down. I'll submit this as a priority request since it's a safety concern. Our maintenance crew should be out within five to seven business days. We'll send you an email when the work is scheduled.",
              formal:
                "I have duly recorded this information. I shall escalate this as a priority request due to its inherent safety implications. Our maintenance crew is anticipated to deploy within five to seven business days. You will receive an email notification once the work has been formally scheduled.",
            },
          },
          {
            speaker: "you",
            textEn: "Can I also report a pothole on the same street while I'm here?",
            textZh: "我在这里顺便也报告一下同条街上的一个路面坑洞可以吗？",
            casualVersion: "There's also a pothole on that street. Can I report that too?",
            commonMistake: {
              wrong: "Can I report a pothole in same street?",
              correct: "Can I also report a pothole on the same street while I'm here?",
              explanation: "街道上用 “on the street”，且 “same street” 前需加冠词 “the”。",
            },
            formalityVariants: {
              casual: "While I'm here, can I also report a pothole on the same street?",
              standard: "Can I also report a pothole on the same street while I'm here?",
              formal: "May I also take this opportunity to report a pothole on the aforementioned street?",
            },
          },
          {
            speaker: "them",
            role: "市政人员",
            textEn:
              "Absolutely. I can add that to the same request. For future reference, you can also report these issues through our three-one-one hotline or the city's mobile app — it's actually faster and you can upload photos.",
            textZh:
              "当然可以。我把它加到同一个请求里。以后您也可以通过311热线或市政府的手机App报告这些问题——实际上更快，还能上传照片。",
            keyPhrases: [
              { en: "three-one-one hotline", zh: "311热线" },
              { en: "for future reference", zh: "以后参考/以备将来" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure, I'll tack that on. By the way, next time you can just call three-one-one or use the city app. You can snap a photo and submit it right from your phone.",
                textZh: "没问题，我加上去。顺便说，下次你可以直接打311或用市政App。手机拍个照就能提交。",
                actionHint: "tack that on 意思是附加上去",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep. I can just add it to this request. FYI, you can also report stuff through our 311 hotline or the city app – it's quicker and you can upload pics.",
            culturalNote: "311热线在美国很常见，市民用于报告非紧急市政问题",
            formalityVariants: {
              casual:
                "Totally. I'll add it to this. Heads up, you can also report these on 311 or the city app – way faster, and you can add pics.",
              standard:
                "Absolutely. I can add that to the same request. For future reference, you can also report these issues through our three-one-one hotline or the city's mobile app — it's actually faster and you can upload photos.",
              formal:
                "Certainly. I will incorporate that into the existing service request. For your future convenience, such issues can also be reported via our three-one-one hotline or the city's official mobile application, which offers a more expedited process and the capability to upload photographic evidence.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 9. 邮局寄件 ====================
  {
    id: "government-post-office",
    category: "government",
    titleZh: "邮局寄件",
    titleEn: "Post Office Mailing",
    description: "到邮局寄包裹或信件",
    otherRole: "邮局人员",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "寄国内包裹",
        titleEn: "Domestic Package Shipping",
        description: "在邮局寄一个国内包裹",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to mail this package to New York.",
            textZh: "你好，我想把这个包裹寄到纽约。",
            casualVersion: "Hey, I need to ship this to New York.",
            commonMistake: {
              wrong: "I want to mail this package to New York.",
              correct: "I'd like to mail this package to New York.",
              explanation: "I want 听起来太直接，I'd like to 更礼貌客气。",
            },
            formalityVariants: {
              casual: "Hey, wanna mail this to New York.",
              standard: "Hi, I'd like to mail this package to New York.",
              formal: "Good morning/afternoon, I would like to send this package to New York, please.",
            },
          },
          {
            speaker: "them",
            role: "邮局人员",
            textEn:
              "Sure. Let me weigh it first. Do you have a preference for shipping speed? We have Priority Mail, which takes one to three days, or First-Class, which is cheaper but takes three to five days.",
            textZh:
              "好的。让我先称一下。您对邮寄速度有要求吗？我们有优先邮件，一到三天到达，还有一等邮件，更便宜但需要三到五天。",
            commonMistake: {
              wrong: "Do you like shipping speed?",
              correct: "Do you have a preference for shipping speed?",
              explanation: "中文喜欢直译'你喜欢...'，但英文表达'有偏好'更自然。",
            },
            keyPhrases: [
              { en: "Priority Mail", zh: "优先邮件（快速）" },
              { en: "First-Class", zh: "一等邮件（普通）" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Let me throw it on the scale. How fast do you need it there? Priority gets it there in one to three days. First-Class is cheaper — three to five days.",
                textZh: "让我放秤上称一下。你需要多快到？优先一到三天。一等便宜些——三到五天。",
                actionHint: "throw it on the scale 是口语中称重的说法",
                frequency: "common",
              },
            ],
            casualVersion:
              "Okay. I'll weigh it. Any preference on speed? Got Priority, one to three days, or First-Class, cheaper, but three to five.",
            culturalNote: "美国邮政有不同的邮件等级，速度价格不同。",
            formalityVariants: {
              casual:
                "Okay, I'll weigh it up. Any preference on how fast it gets there? Got Priority, one to three days, or First-Class, cheaper, but takes three to five.",
              standard:
                "Sure. Let me weigh it first. Do you have a preference for shipping speed? We have Priority Mail, which takes one to three days, or First-Class, which is cheaper but takes three to five days.",
              formal:
                "Certainly. I shall weigh the item initially. Do you have a particular preference regarding the shipping expeditedness? Our services include Priority Mail, which typically arrives within one to three business days, and First-Class Mail, which is more economical but has an estimated delivery time of three to five business days.",
            },
          },
          {
            speaker: "you",
            textEn: "First-Class is fine. How much will it cost?",
            textZh: "一等邮件就行。多少钱？",
            casualVersion: "First-Class works. What's it gonna cost?",
            commonMistake: {
              wrong: "How much money?",
              correct: "How much will it cost?",
              explanation: "How much money 不自然，直接问 How much is it/will it cost 即可。",
            },
            formalityVariants: {
              casual: "First-Class is good. What's the damage?",
              standard: "First-Class is fine. How much will it cost?",
              formal: "First-Class Mail will be perfectly acceptable. May I inquire about the total cost?",
            },
          },
          {
            speaker: "them",
            role: "邮局人员",
            textEn:
              "It weighs about two pounds, so First-Class Package will be seven dollars and fifty cents. Would you like to add tracking or insurance? Tracking is included, and insurance starts at three dollars for up to fifty dollars of coverage.",
            textZh: "大约两磅重，一等邮件是7.50美元。您要加追踪或保险吗？追踪是包含的，保险从3美元起，最高保50美元。",
            commonMistake: {
              wrong: "Would you like add tracking or insurance?",
              correct: "Would you like to add tracking or insurance?",
              explanation: "中文常省略动词不定式to，英文中此处to不能省。",
            },
            keyPhrases: [
              { en: "tracking", zh: "追踪/快递跟踪" },
              { en: "insurance", zh: "保险" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Two pounds — that'll be seven-fifty. Tracking comes with it automatically. Want insurance? It's three bucks for up to fifty dollars of coverage.",
                textZh: "两磅——7.50美元。追踪自动包含。要保险吗？3块钱保最高50美元。",
                actionHint: "seven-fifty 意思是 $7.50",
                frequency: "common",
              },
            ],
            culturalNote:
              "USPS（美国邮政）的一等邮件包含免费追踪号。Priority Mail还包含最高50美元的免费保险。国际邮件建议加保险。",
            casualVersion:
              "It's about two pounds, so First-Class is seven-fifty. Want tracking or insurance? Tracking's already in, insurance starts at three bucks for fifty dollars coverage.",
            formalityVariants: {
              casual:
                "It's around two pounds, so First-Class will be seven-fifty. Wanna add tracking or insurance? Tracking's included, and insurance is three bucks for fifty dollars coverage.",
              standard:
                "It weighs about two pounds, so First-Class Package will be seven dollars and fifty cents. Would you like to add tracking or insurance? Tracking is included, and insurance starts at three dollars for up to fifty dollars of coverage.",
              formal:
                "The parcel's weight is approximately two pounds, therefore the cost for First-Class Package service will be seven dollars and fifty cents. Would you care to opt for additional tracking or insurance? Please note that basic tracking is already encompassed, and supplemental insurance begins at three dollars for coverage up to fifty dollars.",
            },
          },
          {
            speaker: "you",
            textEn: "Just the tracking is fine. No insurance needed. Can I pay with a card?",
            textZh: "有追踪就行。不需要保险。可以刷卡吗？",
            casualVersion: "No insurance, just tracking. Can I use my card?",
            commonMistake: {
              wrong: "Can I use card?",
              correct: "Can I pay with a card?",
              explanation: "use card 不如 pay with a card 自然，口语也常说 pay by card。",
            },
            formalityVariants: {
              casual: "Tracking's good. Don't need insurance. Card okay?",
              standard: "Just the tracking is fine. No insurance needed. Can I pay with a card?",
              formal:
                "The inclusion of tracking will suffice. Insurance is not required at this time. Am I able to complete the payment using a credit or debit card?",
            },
          },
          {
            speaker: "them",
            role: "邮局人员",
            textEn:
              "Yes, we accept credit and debit cards. Here's your receipt with the tracking number. You can check the delivery status on our website or the USPS app.",
            textZh:
              "可以，我们接受信用卡和借记卡。这是您的收据，上面有追踪号。您可以在我们网站或USPS App上查看送达状态。",
            commonMistake: {
              wrong: "Yes, we accept card.",
              correct: "Yes, we accept cards.",
              explanation: "在提及多种支付卡时，常用复数'cards'。",
            },
            keyPhrases: [
              { en: "tracking number", zh: "追踪号" },
              { en: "delivery status", zh: "送达状态" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep, card works. Here's your receipt — your tracking number is on there. Just pop it into the USPS website or app to see where it is.",
                textZh: "可以刷卡。给你收据——追踪号在上面。去USPS网站或App输入就能看到进度。",
                actionHint: "pop it into 意思是输入（口语）",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep, cards are fine. Here's your receipt, tracking number's on it. You can check delivery on our site or the app.",
            formalityVariants: {
              casual:
                "Yeah, cards work. Here's your receipt with the tracking number. You can track it on our site or the app.",
              standard:
                "Yes, we accept credit and debit cards. Here's your receipt with the tracking number. You can check the delivery status on our website or the USPS app.",
              formal:
                "Certainly, we do accept all major credit and debit cards. Please find enclosed your receipt, which includes the tracking number. You may monitor the delivery status conveniently via our official website or the dedicated USPS application.",
            },
          },
        ],
      },
      {
        id: "international",
        titleZh: "国际包裹",
        titleEn: "International Package",
        description: "从美国寄包裹到中国",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I need to send a package to China. What are my options?",
            textZh: "我需要寄一个包裹到中国。有什么选择？",
            casualVersion: "I wanna ship something to China. What can I do?",
            commonMistake: {
              wrong: "What options I have?",
              correct: "What are my options?",
              explanation: "句子结构错误，英文疑问句语序需调整，What are 更自然。",
            },
            formalityVariants: {
              casual: "Gotta send a package to China. What's available?",
              standard: "I need to send a package to China. What are my options?",
              formal:
                "I require assistance with dispatching a parcel to China. Could you please inform me of the available shipping options?",
            },
          },
          {
            speaker: "them",
            role: "邮局人员",
            textEn:
              "For China, we have three options. Priority Mail International takes six to ten days and costs around fifty-five dollars for this weight. First-Class International is cheaper at about twenty-five dollars but takes two to four weeks. We also have Priority Mail Express International for guaranteed delivery in three to five days.",
            textZh:
              "寄中国有三个选择。国际优先邮件6到10天到达，这个重量大约55美元。国际一等邮件便宜些约25美元，但需要两到四周。还有国际特快专递优先邮件，保证3到5天到达。",
            commonMistake: {
              wrong: "Priority Mail International is 6 to 10 days.",
              correct: "Priority Mail International takes six to ten days.",
              explanation: "表达时间跨度时，'take' 比 'is' 更自然地表示所需时间。",
            },
            keyPhrases: [
              { en: "Priority Mail International", zh: "国际优先邮件" },
              { en: "guaranteed delivery", zh: "保证送达" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "To China? You've got a few choices. Priority International is about fifty-five bucks, gets there in six to ten days. First-Class International is twenty-five but takes a few weeks. Or Express if you need it fast — three to five days guaranteed.",
                textZh:
                  "寄中国？有几个选择。国际优先大约55块，6到10天到。国际一等25块但要几周。或者特快——保证3到5天到。",
                actionHint: "you've got a few choices 是常见的口语表达",
                frequency: "common",
              },
            ],
            casualVersion:
              "For China, you got three choices. Priority Mail International, six to ten days, about fifty-five bucks for this. First-Class International's cheaper, around twenty-five, but two to four weeks. And Priority Mail Express International for guaranteed three to five days.",
            culturalNote: "美国国际邮寄服务多样，速度价格差异大。",
            formalityVariants: {
              casual:
                "To China, three ways to go. Priority Mail International, six to ten days, around fifty-five for this weight. First-Class International, cheaper, like twenty-five, but it's two to four weeks. Or Priority Mail Express International for sure delivery in three to five days.",
              standard:
                "For China, we have three options. Priority Mail International takes six to ten days and costs around fifty-five dollars for this weight. First-Class International is cheaper at about twenty-five dollars but takes two to four weeks. We also have Priority Mail Express International for guaranteed delivery in three to five days.",
              formal:
                "Regarding shipments to China, we offer three distinct service levels. Priority Mail International typically delivers within six to ten business days, at an approximate cost of fifty-five dollars for an item of this weight. Alternatively, First-Class International provides a more economical option at approximately twenty-five dollars, though the transit time extends to two to four weeks. For expedited and guaranteed delivery, we recommend Priority Mail Express International, with an estimated delivery timeframe of three to five business days.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll go with Priority Mail International. Do I need to fill out a customs form?",
            textZh: "我选国际优先邮件。需要填海关申报单吗？",
            casualVersion: "Priority International. Do I need to do any customs paperwork?",
            culturalNote: "国际邮件必填海关单，这是国际寄件与国内寄件的主要区别。",
            commonMistake: {
              wrong: "Need fill out customs form?",
              correct: "Do I need to fill out a customs form?",
              explanation: "缺少主语和助动词，听起来不自然。",
            },
            formalityVariants: {
              casual: "I'll take Priority Mail International. Gotta fill out a customs form?",
              standard: "I'll go with Priority Mail International. Do I need to fill out a customs form?",
              formal:
                "I will proceed with the Priority Mail International service. Is it necessary for me to complete a customs declaration form?",
            },
          },
          {
            speaker: "them",
            role: "邮局人员",
            textEn:
              "Yes, you'll need to fill out a customs declaration form — a CN22 or PS Form 2976. You'll list what's inside, the value, and the weight. Be specific — Chinese customs can hold the package if the description is vague.",
            textZh:
              "是的，需要填海关申报单——CN22或PS2976表格。列出包裹内容、价值和重量。描述要具体——如果描述模糊，中国海关可能会扣留包裹。",
            commonMistake: {
              wrong: "List package content, value and weight.",
              correct: "List the contents, value, and weight of the package.",
              explanation: "英文表达'内容、价值和重量'时，常用'the'和'of the package'更清晰。",
            },
            keyPhrases: [
              { en: "customs declaration form", zh: "海关申报单" },
              { en: "hold the package", zh: "扣留包裹" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, there's a customs form to fill out. List everything that's in there, how much it's worth, and the weight. Be as specific as you can — if it's too vague, customs in China might hold it up.",
                textZh: "对，有个海关表要填。列出里面所有东西、价值和重量。尽量具体——太模糊的话中国海关可能会扣住。",
                actionHint: "hold it up 意思是扣留/延误",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep, gotta fill out a customs form — CN22 or PS Form 2976. List what's in it, the value, and the weight. Be super clear, 'cause Chinese customs might hold it if you're too vague.",
            culturalNote: "CN22/PS2976是美国海关单。写清内容防中国海关扣留。",
            formalityVariants: {
              casual:
                "Yeah, you'll need a customs form, either a CN22 or PS Form 2976. Just list what's in it, the value, and the weight. Be really specific, because Chinese customs might hold it if your description isn't clear.",
              standard:
                "Yes, you'll need to fill out a customs declaration form — a CN22 or PS Form 2976. You'll list what's inside, the value, and the weight. Be specific — Chinese customs can hold the package if the description is vague.",
              formal:
                "Yes, it is requisite to complete a customs declaration form, specifically a CN22 or PS Form 2976. On this form, you will be required to enumerate the contents, declare the monetary value, and specify the weight. It is imperative to be highly precise in your descriptions, as Chinese customs authorities may detain parcels with ambiguous content declarations.",
            },
          },
          {
            speaker: "you",
            textEn: "Are there any items I can't send to China through USPS?",
            textZh: "有什么东西不能通过USPS寄到中国吗？",
            casualVersion: "Anything I can't ship to China?",
            culturalNote: "国际邮件有禁运品，且各国清单不同。",
            commonMistake: {
              wrong: "What items cannot send?",
              correct: "Are there any items I can't send?",
              explanation: "语法结构错误，应为被动语态或使用 cannot send 主动语态时需要主语。",
            },
            formalityVariants: {
              casual: "Any stuff I can't send to China via USPS?",
              standard: "Are there any items I can't send to China through USPS?",
              formal:
                "Are there any specific items that are prohibited from being sent to China via the United States Postal Service?",
            },
          },
          {
            speaker: "them",
            role: "邮局人员",
            textEn:
              "Yes, there are restrictions. You can't send lithium batteries, liquids over certain quantities, perishable food, or anything with a value over four hundred dollars without additional documentation. Also, China prohibits importing certain supplements and printed materials.",
            textZh:
              "是的，有一些限制。不能寄锂电池、超过一定量的液体、易腐食品，或者超过400美元的物品（需要额外文件）。另外，中国禁止进口某些保健品和印刷品。",
            commonMistake: {
              wrong: "China prohibits import certain health products.",
              correct: "China prohibits importing certain health products.",
              explanation: "动词'prohibit'后跟动名词'importing'，而非动词原形。",
            },
            keyPhrases: [
              { en: "restrictions", zh: "限制" },
              { en: "lithium batteries", zh: "锂电池" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, a bunch of stuff is restricted. No lithium batteries, no big amounts of liquids, no food that goes bad. And if it's worth more than four hundred bucks, you need extra paperwork. China also has its own rules on supplements and printed stuff.",
                textZh:
                  "是的，很多东西有限制。不能寄锂电池、大量液体、容易坏的食物。超过400块的需要额外文件。中国对保健品和印刷品也有自己的规定。",
                actionHint: "goes bad 意思是变质/腐坏",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, there are limits. No lithium batteries, too much liquid, perishable food, or anything over four hundred bucks without extra paperwork. Plus, China bans some supplements and printed stuff.",
            culturalNote: "寄中国禁运品多：锂电池、超量液体、高价值品、中国禁保健品/印刷品等。",
            formalityVariants: {
              casual:
                "Yep, limits exist. Can't send lithium batteries, big amounts of liquids, perishable food, or anything worth over four hundred bucks without more forms. And China won't let in certain supplements or printed materials.",
              standard:
                "Yes, there are restrictions. You can't send lithium batteries, liquids over certain quantities, perishable food, or anything with a value over four hundred dollars without additional documentation. Also, China prohibits importing certain supplements and printed materials.",
              formal:
                "Affirmative, there are indeed several restrictions. Items such as lithium batteries, liquids exceeding specified quantities, perishable foodstuffs, or articles with a declared value surpassing four hundred dollars are not permissible without supplementary documentation. Furthermore, it is important to note that China specifically prohibits the importation of certain dietary supplements and printed materials.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 10. 陪审团义务 ====================
  {
    id: "government-jury-duty",
    category: "government",
    titleZh: "陪审团义务",
    titleEn: "Jury Duty",
    description: "收到陪审团传票后到法院报到",
    otherRole: "法院人员",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "首次陪审报到",
        titleEn: "First-Time Jury Check-In",
        description: "第一次收到陪审传票到法院报到",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I received a jury summons. This is my first time. I'm not sure what to do.",
            textZh: "你好，我收到了陪审团传票。这是我第一次。不知道该怎么做。",
            casualVersion: "Hey, I got a jury summons. Never done this before. What do I do?",
            culturalNote:
              "在美国，陪审团义务（Jury Duty）是公民的法律义务。收到传票后必须按时到法院报到，无故缺席可能被罚款甚至拘留。非公民通常不会被传唤。",
            commonMistake: {
              wrong: "I don't know how to do.",
              correct: "I'm not sure what to do.",
              explanation: "“不知道该怎么做”翻译成英文时，用 “what to do” 更自然，而不是 “how to do”。",
            },
            formalityVariants: {
              casual: "Hey, got a jury summons. First time, no idea what to do.",
              standard: "Hi, I received a jury summons. This is my first time, and I'm not sure what to do.",
              formal:
                "Good morning/afternoon, I've received a jury summons. As this is my inaugural experience, I am uncertain of the appropriate procedures.",
            },
          },
          {
            speaker: "them",
            role: "法院人员",
            textEn:
              "Welcome. First, I'll need to see your summons and a photo ID. Then you'll check in at the registration desk over there. After that, you'll wait in the jury assembly room until your group number is called.",
            textZh:
              "欢迎。首先，我需要看一下您的传票和带照片的证件。然后到那边的登记处签到。之后在陪审等候室等候，直到叫到您的组号。",
            commonMistake: {
              wrong: "I need to see your summons and ID.",
              correct: "I'll need to see your summons and photo ID.",
              explanation: "中文常直接说“我需要”，英文中用 “I'll need to” 更委婉有礼。",
            },
            keyPhrases: [
              { en: "jury summons", zh: "陪审团传票" },
              { en: "jury assembly room", zh: "陪审等候室" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No worries, it's pretty straightforward. Show me your summons and ID, then check in at that desk. After that, just hang out in the waiting room till they call your number.",
                textZh: "别担心，挺简单的。给我看看传票和证件，然后在那个柜台签到。之后在等候室坐着等叫号就行。",
                actionHint: "hang out 在这里意思是待着/等着",
                frequency: "common",
              },
            ],
            casualVersion:
              "Alright. First, lemme see your summons and an ID. Then, go check in at the registration desk over there. After that, just wait in the assembly room till they call your group.",
            formalityVariants: {
              casual:
                "Okay, first, summons and ID. Then, check in at the desk. After that, wait in the assembly room 'til your group's called.",
              standard:
                "Welcome. First, I'll need to see your summons and a photo ID. Then you'll check in at the registration desk over there. After that, you'll wait in the jury assembly room until your group number is called.",
              formal:
                "Welcome. To commence, I will require your summons and a valid form of photographic identification. Subsequently, kindly proceed to the registration desk for check-in. Following that, you will await the announcement of your group number in the designated jury assembly room.",
            },
          },
          {
            speaker: "you",
            textEn: "How long will I be here today? I need to let my employer know.",
            textZh: "我今天要在这里待多久？我需要告诉雇主。",
            casualVersion: "How long is this gonna take? I gotta let work know.",
            commonMistake: {
              wrong: "How long I will stay here today?",
              correct: "How long will I be here today?",
              explanation: "询问“待多久”时，用 “be here” 更地道，而不是 “stay here”。",
            },
            formalityVariants: {
              casual: "So, how long am I stuck here? Gotta tell my boss.",
              standard: "How long will I be here today? I need to let my employer know.",
              formal:
                "Could you please inform me of the estimated duration of my presence here today? I am required to notify my employer.",
            },
          },
          {
            speaker: "them",
            role: "法院人员",
            textEn:
              "It varies. Some people are dismissed by lunchtime, while others may be selected for a trial that lasts several days. Plan to be here the full day just in case. By law, your employer must allow you time off for jury duty.",
            textZh:
              "不一定。有些人午饭前就解散了，有些可能被选中参加持续几天的审判。以防万一，请计划待一整天。根据法律，您的雇主必须准许您请假参加陪审。",
            culturalNote: "美国法律强制雇主准许员工参加陪审义务，并保障其职位。中国无此制度。",
            commonMistake: {
              wrong: "You need to plan to be here the full day.",
              correct: "Plan to be here the full day just in case.",
              explanation: "“You need to” 语气太强，直接说“Plan to” 更自然。",
            },
            keyPhrases: [
              { en: "dismissed", zh: "解散/免除" },
              { en: "selected for a trial", zh: "被选中参加审判" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Hard to say. Could be out by lunch, could be here all day — depends on if you get picked for a case. And don't worry about work — they legally have to let you off for this.",
                textZh: "不好说。可能午饭前就走，也可能待一天——取决于你有没有被选中。工作别担心——法律规定必须放你假。",
                actionHint: "let you off 意思是让你请假/放你走",
                frequency: "common",
              },
            ],
            casualVersion:
              "Kinda varies. Some folks get outta here by lunch, others might get picked for a trial that goes on for days. Just plan on being here all day, y'know, just in case. Your boss has to give you the time off for this, it's the law.",
            formalityVariants: {
              casual:
                "It varies. Some leave by lunch, others might be picked for a trial that lasts days. Plan on being here all day, just in case. Your employer's legally obligated to give you time off for this.",
              standard:
                "It varies. Some people are dismissed by lunchtime, while others may be selected for a trial that lasts several days. Plan to be here the full day just in case. By law, your employer must allow you time off for jury duty.",
              formal:
                "The duration is subject to variability. Certain individuals are excused prior to the midday meal, whereas others may be empanelled for a trial extending over multiple days. It is advisable to anticipate a full day's attendance as a precautionary measure. Legally, your employer is mandated to grant you leave for jury service.",
            },
          },
          {
            speaker: "you",
            textEn: "What if I'm selected? What happens next?",
            textZh: "如果我被选中了呢？接下来会怎样？",
            culturalNote: "“voir dire” (选任陪审员过程) 对不熟悉美国司法系统的华人是全新概念。",
            casualVersion: "What happens if they pick me?",
            commonMistake: {
              wrong: "If I am selected? Next what happens?",
              correct: "What if I'm selected? What happens next?",
              explanation: "“接下来会怎样”用 “What happens next?” 更自然，避免直译。",
            },
            formalityVariants: {
              casual: "And if I get picked? Then what?",
              standard: "What if I'm selected? What happens next?",
              formal: "Should I be selected, could you please explain the subsequent procedures?",
            },
          },
          {
            speaker: "them",
            role: "法院人员",
            textEn:
              "If selected, you'll go through a process called voir dire, where the judge and attorneys will ask you questions to see if you can be fair and impartial. If both sides accept you, you'll serve on the jury for the duration of the trial.",
            textZh:
              "如果被选中，您会经历一个叫'voir dire'的程序，法官和律师会问您一些问题，看您是否能公正客观。如果双方都接受您，您将在审判期间担任陪审员。",
            commonMistake: {
              wrong: "If selected, you will go through a process called 'voir dire'.",
              correct: "If selected, you'll go through something called 'voir dire'.",
              explanation: "口语中用 'something called' 更自然，比 'a process called' 常见。",
            },
            keyPhrases: [
              { en: "voir dire", zh: "陪审员遴选（法语，意为'说真话'）" },
              { en: "fair and impartial", zh: "公正客观" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You'd go into a courtroom for what's called voir dire — basically, the lawyers and judge ask you some questions to make sure you can be fair. If they're cool with you, you're on the jury.",
                textZh:
                  "你会进法庭参加'voir dire'——基本上就是律师和法官问你一些问题确保你能公正。如果他们觉得没问题，你就是陪审员了。",
                actionHint: "they're cool with you 意思是他们觉得你没问题",
                frequency: "common",
              },
            ],
            casualVersion:
              "If you get picked, you'll do something called 'voir dire.' That's where the judge and lawyers ask you questions to see if you can be fair. If everyone's cool with you, then you're on the jury for the whole trial.",
            culturalNote: "“Voir dire”是法语，在美国法律体系中常见。",
            formalityVariants: {
              casual:
                "If picked, you'll do 'voir dire' – judge and lawyers ask if you can be fair. If both sides agree, you'll be on the jury for the trial.",
              standard:
                "If selected, you'll go through a process called voir dire, where the judge and attorneys will ask you questions to see if you can be fair and impartial. If both sides accept you, you'll serve on the jury for the duration of the trial.",
              formal:
                "Should you be selected, you will participate in a process known as 'voir dire,' during which the presiding judge and legal counsel will pose inquiries to ascertain your capacity for fairness and impartiality. Upon mutual acceptance by both parties, you will then serve as a juror for the entirety of the trial proceedings.",
            },
          },
        ],
      },
      {
        id: "exemption",
        titleZh: "申请免除陪审",
        titleEn: "Requesting Exemption",
        description: "因为特殊情况申请免除或推迟陪审义务",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I received a jury summons, but I'm not a US citizen. Am I still required to serve?",
            textZh: "我收到了陪审团传票，但我不是美国公民。我还需要参加吗？",
            culturalNote: "在美国，陪审团义务是公民权利和义务，非公民不需要履行。",
            casualVersion: "I got a summons but I'm not a citizen. Do I still have to go?",
            commonMistake: {
              wrong: "I not US citizen. Still I need to serve?",
              correct: "I'm not a US citizen. Am I still required to serve?",
              explanation: "“我不是美国公民”需要冠词 “a”。询问是否“仍需”时，用 “still required to” 更规范。",
            },
            formalityVariants: {
              casual: "Got a summons, but I'm not a US citizen. Do I still gotta serve?",
              standard: "I received a jury summons, but I'm not a US citizen. Am I still required to serve?",
              formal:
                "I have received a jury summons; however, I am not a citizen of the United States. Am I nevertheless obligated to render service?",
            },
          },
          {
            speaker: "them",
            role: "法院人员",
            textEn:
              "No, only US citizens are eligible for jury service. If you're not a citizen, you're automatically disqualified. You'll need to fill out the questionnaire that came with your summons and indicate that you're not a citizen. We'll remove you from the list.",
            textZh:
              "不需要，只有美国公民才有资格担任陪审员。如果您不是公民，自动取消资格。您需要填写传票附带的问卷，标注您不是公民。我们会把您从名单上删除。",
            commonMistake: {
              wrong: "You don't need to come, because only US citizens are eligible.",
              correct: "No, only US citizens are eligible for jury service.",
              explanation: "直接否定并给出理由更简洁自然，避免“because”的解释性。",
            },
            keyPhrases: [
              { en: "disqualified", zh: "取消资格" },
              { en: "questionnaire", zh: "问卷" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Nope, you have to be a citizen to serve. Just fill out the questionnaire from your summons and mark that you're not a citizen. We'll take you off the list.",
                textZh:
                  "不用，必须是公民才能当陪审员。填好传票附带的问卷，标注你不是公民就行。我们会把你从名单里删掉。",
                actionHint: "take you off the list 意思是从名单中删除",
                frequency: "common",
              },
            ],
            casualVersion:
              "Nah, only US citizens can do jury duty. If you're not a citizen, you're automatically out. Just fill out that questionnaire that came with it, mark that you're not a citizen. We'll take you off the list.",
            formalityVariants: {
              casual:
                "Nope, only citizens are eligible. If you're not, you're out. Fill out the questionnaire, mark non-citizen, and we'll remove you.",
              standard:
                "No, only US citizens are eligible for jury service. If you're not a citizen, you're automatically disqualified. You'll need to fill out the questionnaire that came with your summons and indicate that you're not a citizen. We'll remove you from the list.",
              formal:
                "No, eligibility for jury service is restricted to citizens of the United States. Consequently, non-citizens are automatically disqualified. You are required to complete the questionnaire enclosed with your summons, indicating your non-citizen status. We will then proceed to remove your name from the roster.",
            },
          },
          {
            speaker: "you",
            textEn: "Will I get in trouble if the summons keeps coming even after I respond?",
            textZh: "如果回复了之后传票还一直来，我会不会有麻烦？",
            culturalNote: "华人常担心不清楚美国系统流程会“惹麻烦”，需要明确的保证。",
            casualVersion: "What if they keep sending me summons after I tell them?",
            commonMistake: {
              wrong: "Will I get trouble if the summons keeps coming?",
              correct: "Will I get in trouble if the summons keeps coming?",
              explanation: "表达“有麻烦”时，用 “get in trouble” 是固定搭配，而不是 “get trouble”。",
            },
            formalityVariants: {
              casual: "Will I get in trouble if they keep sending summonses even after I reply?",
              standard: "Will I get in trouble if the summons keeps coming even after I respond?",
              formal:
                "Might I face any repercussions if subsequent summonses continue to be issued following my initial response?",
            },
          },
          {
            speaker: "them",
            role: "法院人员",
            textEn:
              "No, you won't be in trouble. The system sometimes sends duplicate notices. Just respond each time confirming your non-citizen status. After a couple of responses, the system should stop sending them. Keep a copy of your response for your records.",
            textZh:
              "不会有麻烦的。系统有时会发重复通知。每次收到都确认您的非公民身份就行。回复几次后系统应该就不再发了。保留回复的副本以备记录。",
            commonMistake: {
              wrong: "You will not get in trouble.",
              correct: "No, you won't get in trouble.",
              explanation: "口语中用 “No, you won't” 更简短有力，比“You will not”更自然。",
            },
            keyPhrases: [
              { en: "duplicate notices", zh: "重复通知" },
              { en: "keep a copy", zh: "保留副本" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Don't worry, you're fine. Sometimes the system glitches and sends extras. Just respond every time and say you're not a citizen. It should stop eventually. Hang on to a copy just in case.",
                textZh: "别担心，没事的。系统有时出错会多发。每次回复说你不是公民就行。最终会停的。留个副本以防万一。",
                actionHint: "glitches 意思是出错/小故障",
                frequency: "common",
              },
            ],
            casualVersion:
              "Nah, you'll be fine. The system sometimes just sends double notices. Just keep replying, confirming you're not a citizen. After a few times, it should stop. Keep a copy of what you send, just for your records.",
            formalityVariants: {
              casual:
                "Nah, no trouble. System sometimes duplicates notices. Just respond each time confirming non-citizen status. It should stop after a few. Keep a copy.",
              standard:
                "No, you won't be in trouble. The system sometimes sends duplicate notices. Just respond each time confirming your non-citizen status. After a couple of responses, the system should stop sending them. Keep a copy of your response for your records.",
              formal:
                "No, there will be no adverse consequences. The automated system occasionally dispatches duplicate notifications. Simply reiterate your non-citizen status with each subsequent receipt. Following a few such responses, the system is expected to cease transmitting them. Kindly retain a copy of your correspondence for your personal records.",
            },
          },
          {
            speaker: "you",
            textEn: "Should I mail the questionnaire back or bring it here in person?",
            textZh: "问卷是邮寄回去还是亲自送来？",
            casualVersion: "Do I mail it back or bring it in?",
            commonMistake: {
              wrong: "Should I mail back the questionnaire or bring personally here?",
              correct: "Should I mail the questionnaire back or bring it here in person?",
              explanation: "“亲自”用 “in person” 是地道表达，避免直译 “personally” 或 “by myself”。",
            },
            formalityVariants: {
              casual: "Should I mail the form back or just bring it in?",
              standard: "Should I mail the questionnaire back or bring it here in person?",
              formal:
                "Would it be preferable for me to mail the questionnaire back, or should I deliver it here in person?",
            },
          },
          {
            speaker: "them",
            role: "法院人员",
            textEn:
              "You can do either. Mailing it is the easiest — the return envelope should be included with your summons. You can also respond online if you have the juror ID number on your summons. Or you can drop it off here at the clerk's office.",
            textZh:
              "都可以。邮寄最方便——传票里应该有回邮信封。如果有传票上的陪审员ID号，也可以在线回复。或者送到这里的书记官办公室。",
            commonMistake: {
              wrong: "Mailing it is the most easy.",
              correct: "Mailing it is the easiest.",
              explanation: "“most easy” 是错的，最高级是“easiest”。",
            },
            keyPhrases: [
              { en: "return envelope", zh: "回邮信封" },
              { en: "clerk's office", zh: "书记官办公室" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Whatever works for you. Easiest thing is to pop it in the mail — there should be a return envelope in there. Or do it online with your juror number. Or just drop it off at the front desk.",
                textZh:
                  "怎么方便怎么来。最简单是寄回去——里面应该有回邮信封。或者用陪审员号码网上回复。或直接送到前台。",
                actionHint: "pop it in the mail 意思是寄出去（口语）",
                frequency: "common",
              },
            ],
            casualVersion:
              "Either works. Mailing's easiest—there should be a return envelope with your summons. You can also do it online if you've got that juror ID number. Or, yeah, just drop it off here at the clerk's office.",
            formalityVariants: {
              casual:
                "Either's fine. Mailing's easiest—envelope's included. Or do it online with your juror ID. Or just drop it off at the clerk's.",
              standard:
                "You can do either. Mailing it is the easiest — the return envelope should be included with your summons. You can also respond online if you have the juror ID number on your summons. Or you can drop it off here at the clerk's office.",
              formal:
                "You have the option of either method. Mailing it is the most convenient, and a pre-addressed return envelope should have been provided with your summons. Alternatively, online submission is available if you possess the juror identification number listed on your summons. A final option is to submit it directly at the clerk's office located here.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 11. 选民登记 ====================
  {
    id: "government-voter-registration",
    category: "government",
    titleZh: "选民登记",
    titleEn: "Voter Registration",
    description: "到选举办公室进行选民登记",
    otherRole: "选举办人员",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "首次选民登记",
        titleEn: "First-Time Voter Registration",
        description: "第一次进行选民登记的流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I recently became a US citizen and I'd like to register to vote. How do I do that?",
            textZh: "你好，我最近成为美国公民，想注册投票。怎么办理？",
            culturalNote: "在美国，成为公民后即可登记投票，这是一个重要权利。中国人可能不熟悉公民身份与投票权的直接关联。",
            casualVersion: "Hey, I just got my citizenship and wanna register to vote.",
            commonMistake: {
              wrong: "I want register to vote. How to do?",
              correct: "I'd like to register to vote. How do I do that?",
              explanation: "中式英语常省略主语和助动词，或用want听起来不够礼貌。",
            },
            formalityVariants: {
              casual: "Hey, I just became a US citizen. Wanna register to vote. How do I do it?",
              standard: "Hi, I recently became a US citizen and I'd like to register to vote. How do I do that?",
              formal:
                "Good morning/afternoon, I recently attained US citizenship and would like to inquire about the process for voter registration. Could you please provide guidance on how to proceed?",
            },
          },
          {
            speaker: "them",
            role: "选举办人员",
            textEn:
              "Congratulations on your citizenship! You can fill out a voter registration form right here. I'll need your name, address, date of birth, and the last four digits of your Social Security number.",
            textZh: "恭喜您成为公民！您可以在这里填写选民登记表。需要您的姓名、地址、出生日期和社保号后四位。",
            commonMistake: {
              wrong: "I want your name, address...",
              correct: "I'll need your name, address...",
              explanation: "直接说“I want”不礼貌，用“I'll need”或“Can I have”更客气。",
            },
            keyPhrases: [
              { en: "voter registration form", zh: "选民登记表" },
              { en: "last four digits", zh: "后四位数字" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Congrats! So we just need you to fill out a quick form — name, address, birthday, and the last four of your Social. That's it.",
                textZh: "恭喜！只需要填个简单表格——姓名、地址、生日和社保号后四位。就这些。",
                actionHint: "the last four of your Social 是社保号后四位的口语说法",
                frequency: "common",
              },
            ],
            culturalNote:
              "在美国，只有公民才有投票权。新公民入籍后需要主动登记才能投票。大多数州要求在选举日前15-30天完成登记。",
            casualVersion:
              "Congrats on the citizenship! You can fill out a voter registration form right here. Need your name, address, DOB, and the last four of your SSN.",
            formalityVariants: {
              casual:
                "Congrats on the citizenship! Just fill out this form here. Need your name, address, DOB, and last four of your SSN.",
              standard:
                "Congratulations on your citizenship! You can fill out a voter registration form right here. I'll need your name, address, date of birth, and the last four digits of your Social Security number.",
              formal:
                "Congratulations on acquiring your citizenship! You may complete a voter registration application here. We will require your full name, current address, date of birth, and the last four digits of your Social Security number.",
            },
          },
          {
            speaker: "you",
            textEn: "Do I need to choose a political party when I register?",
            textZh: "登记时需要选择政党吗？",
            culturalNote: "中国政治体制不同，可能不理解选民登记时选择政党的重要性或意义。在美国，选择政党会影响你参加初选的资格。",
            casualVersion: "Do I have to pick a party?",
            commonMistake: {
              wrong: "Need select political party?",
              correct: "Do I need to choose a political party?",
              explanation: "中式英语常省略助动词或主语，select不如choose常用。",
            },
            formalityVariants: {
              casual: "Gotta pick a party when I sign up?",
              standard: "Do I need to choose a political party when I register?",
              formal: "Is it a requirement to select a political party affiliation during the registration process?",
            },
          },
          {
            speaker: "them",
            role: "选举办人员",
            textEn:
              "It's optional. You can register with a party, or you can choose to register with no party preference. Just keep in mind that in some states, if you're not registered with a party, you may not be able to vote in that party's primary election.",
            textZh:
              "这是可选的。您可以登记一个政党，也可以选择不指定政党。但请注意，在一些州，如果您没有登记政党，可能不能参加该党的初选投票。",
            keyPhrases: [
              { en: "no party preference", zh: "不指定政党" },
              { en: "primary election", zh: "初选" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You don't have to. You can go independent — no party preference. Just heads up though, in some states that means you can't vote in the primaries for a specific party.",
                textZh: "不是必须的。你可以选无党派。但提醒一下，有些州这样的话就不能参加特定政党的初选。",
                actionHint: "go independent 意思是选择无党派",
                frequency: "common",
              },
            ],
            casualVersion:
              "Totally optional. Can register with one, or just go 'no preference'. But heads up, in some states, if you're not with a party, you might not get to vote in their primary.",
            commonMistake: {
              wrong: "I can choose no party.",
              correct: "You can choose to register with no party preference.",
              explanation: "'No party preference' 是专有名词，指不隶属任何党派。",
            },
            formalityVariants: {
              casual:
                "Optional. Can register with a party or not. Just remember, some states, no party means no primary voting for that party.",
              standard:
                "It's optional. You can register with a party, or you can choose to register with no party preference. Just keep in mind that in some states, if you're not registered with a party, you may not be able to vote in that party's primary election.",
              formal:
                "Party affiliation is entirely optional. You have the option to register with a specific party or to indicate 'no party preference.' However, please be advised that in certain jurisdictions, non-affiliated voters may be ineligible to participate in partisan primary elections.",
            },
          },
          {
            speaker: "you",
            textEn: "When is the next election, and where do I go to vote?",
            textZh: "下一次选举是什么时候？去哪里投票？",
            casualVersion: "When's the next vote, and where do I go?",
            commonMistake: {
              wrong: "Next election when? Where vote?",
              correct: "When is the next election, and where do I go to vote?",
              explanation: "中式英语常省略主语和助动词，或用how to代替where do I go to。",
            },
            formalityVariants: {
              casual: "When's the next election? And where do I vote?",
              standard: "When is the next election, and where do I go to vote?",
              formal:
                "Could you please inform me of the date of the upcoming election, and where the designated polling locations are situated?",
            },
          },
          {
            speaker: "them",
            role: "选举办人员",
            textEn:
              "The next election is on November fifth. Once you're registered, we'll mail you a voter information guide and a sample ballot about a month before the election. Your polling place will be listed on those materials, or you can look it up on our website.",
            textZh:
              "下次选举是11月5日。登记后，我们会在选举前一个月左右邮寄选民信息指南和样本选票给您。投票地点会在那些材料上列出，或者您可以在我们网站上查。",
            commonMistake: {
              wrong: "The next election is November five.",
              correct: "The next election is on November fifth.",
              explanation: "说日期时要用序数词'fifth'而不是基数词'five'，且前面通常加'on'。",
            },
            keyPhrases: [
              { en: "polling place", zh: "投票站" },
              { en: "sample ballot", zh: "样本选票" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "November fifth is the next one. We'll send you all the info — a voter guide, sample ballot, where your polling station is — about a month out. You can also find your voting location online.",
                textZh:
                  "下一次是11月5日。我们会提前一个月寄给你所有信息——选民指南、样本选票、投票站位置。也可以网上查投票地点。",
                actionHint: "a month out 意思是提前一个月",
                frequency: "common",
              },
            ],
            casualVersion:
              "Election's November fifth. Once you're signed up, we'll mail ya a voter guide and a sample ballot, 'bout a month before. Your polling place'll be on those, or just check our site.",
            formalityVariants: {
              casual:
                "Election's Nov 5th. After you're registered, we'll mail a guide and sample ballot 'bout a month before. Polling place will be on those, or check our site.",
              standard:
                "The next election is on November fifth. Once you're registered, we'll mail you a voter information guide and a sample ballot about a month before the election. Your polling place will be listed on those materials, or you can look it up on our website.",
              formal:
                "The forthcoming election is scheduled for November the fifth. Upon successful registration, a voter information guide and a sample ballot will be dispatched to your address approximately one month prior to the election. Your designated polling place will be indicated on these materials, or you may locate it on our official website.",
            },
          },
        ],
      },
      {
        id: "absentee",
        titleZh: "邮寄投票",
        titleEn: "Absentee / Mail-In Voting",
        description: "申请邮寄选票进行投票",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I won't be in town on election day. Can I vote by mail?",
            textZh: "选举日我不在城里。可以邮寄投票吗？",
            culturalNote: "中国通常没有邮寄投票这种形式。解释邮寄投票（mail-in ballot）或缺席投票（absentee voting）的",
            casualVersion: "I'll be out of town when the vote happens. Can I mail it in?",
            commonMistake: {
              wrong: "Can I mail vote?",
              correct: "Can I vote by mail?",
              explanation: "vote by mail是固定表达，意为邮寄投票。",
            },
            formalityVariants: {
              casual: "Won't be here election day. Can I mail in my vote?",
              standard: "I won't be in town on election day. Can I vote by mail?",
              formal:
                "I will be absent from the area on election day. Is it permissible for me to cast my vote via mail?",
            },
          },
          {
            speaker: "them",
            role: "选举办人员",
            textEn:
              "Yes, you can request a mail-in ballot. In our state, all registered voters are automatically sent a mail ballot about four weeks before the election. You can fill it out at home and either mail it back or drop it in an official ballot drop box.",
            textZh:
              "可以，您可以申请邮寄选票。在我们州，所有登记选民会在选举前四周自动收到邮寄选票。您可以在家填好，然后邮寄回来或投入官方选票投递箱。",
            commonMistake: {
              wrong: "You can apply mail-in ballot.",
              correct: "You can request a mail-in ballot.",
              explanation: "动词搭配'request a ballot'更地道，'apply'通常用于申请工作或学校。",
            },
            keyPhrases: [
              { en: "mail-in ballot", zh: "邮寄选票" },
              { en: "ballot drop box", zh: "选票投递箱" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep, no problem. In this state, everyone gets a mail ballot automatically about a month before. Just fill it out and either mail it or drop it in one of the official drop boxes around town.",
                textZh:
                  "没问题。在我们州，每个人都会在一个月前自动收到邮寄选票。填好后邮寄回来或投到市里的官方投递箱就行。",
                actionHint: "around town 意思是城市各处",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep, you can get a mail-in ballot. Here in our state, everyone registered automatically gets one 'bout four weeks before election. Fill it out at home, then mail it or drop it in a ballot box.",
            culturalNote: "在一些州，所有注册选民都会自动收到邮寄选票。",
            formalityVariants: {
              casual:
                "Yeah, you can get a mail-in ballot. In our state, everyone registered gets one automatically 'bout a month before. Fill it out at home, mail it back, or use a drop box.",
              standard:
                "Yes, you can request a mail-in ballot. In our state, all registered voters are automatically sent a mail ballot about four weeks before the election. You can fill it out at home and either mail it back or drop it in an official ballot drop box.",
              formal:
                "Affirmative, you are eligible to request an absentee ballot. In this state, all registered constituents are automatically issued a mail ballot approximately four weeks preceding the election. You may complete it at your residence and subsequently return it either by postal service or by depositing it into an authorized ballot drop box.",
            },
          },
          {
            speaker: "you",
            textEn: "Is there a deadline for returning the mail-in ballot?",
            textZh: "邮寄选票有退回截止日期吗？",
            casualVersion: "When's the latest I can send it back?",
            commonMistake: {
              wrong: "Return back deadline?",
              correct: "Is there a deadline for returning the mail-in ballot?",
              explanation: "return ballot是固定表达，deadline指截止日期。",
            },
            formalityVariants: {
              casual: "Is there a deadline to send back the mail ballot?",
              standard: "Is there a deadline for returning the mail-in ballot?",
              formal: "Is there a stipulated deadline for the submission of the mail-in ballot?",
            },
          },
          {
            speaker: "them",
            role: "选举办人员",
            textEn:
              "Your ballot must be postmarked by election day and received within seven days after. For drop boxes, the deadline is eight PM on election day. I'd recommend mailing it at least a week early to be safe.",
            textZh:
              "选票必须在选举日当天盖邮戳，并在之后七天内收到。投递箱的截止时间是选举日晚上8点。我建议至少提前一周寄出比较保险。",
            keyPhrases: [
              { en: "postmarked", zh: "盖邮戳" },
              { en: "deadline", zh: "截止日期" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It has to be postmarked by election day and show up within a week. If you're using a drop box, get it in by eight PM on voting day. Honestly, send it early — don't risk it.",
                textZh: "必须在选举日前盖邮戳，一周内到达。如果用投递箱，投票日晚8点前投入。说实话，早点寄——别冒险。",
                actionHint: "don't risk it 意思是别冒险/别拖",
                frequency: "common",
              },
            ],
            casualVersion:
              "Gotta be postmarked by election day and they need to get it within seven days after. For drop boxes, it's 8 PM on election day. Honestly, just mail it a week early to be safe.",
            commonMistake: {
              wrong: "Ballot must be received by election day.",
              correct: "Your ballot must be postmarked by election day and received within seven days after.",
              explanation: "postmarked by 意为邮戳日期在此之前，不代表当天收到。",
            },
            formalityVariants: {
              casual:
                "Ballot needs a postmark by election day and they gotta get it within seven days. Drop boxes, it's 8 PM election day. Better mail it a week early to be safe.",
              standard:
                "Your ballot must be postmarked by election day and received within seven days after. For drop boxes, the deadline is eight PM on election day. I'd recommend mailing it at least a week early to be safe.",
              formal:
                "Your ballot is required to bear a postmark no later than election day and must be successfully received within seven days thereafter. For drop box submissions, the cut-off time is 8:00 PM on election day. I would strongly advise mailing it at least one week in advance to ensure timely processing.",
            },
          },
          {
            speaker: "you",
            textEn: "How do I know my ballot was actually counted?",
            textZh: "我怎么知道我的选票被计入了？",
            casualVersion: "How can I make sure my vote actually gets counted?",
            commonMistake: {
              wrong: "How to know my ballot count?",
              correct: "How do I know my ballot was actually counted?",
              explanation: "中式英语常省略主语和助动词，count作动词时需要被动语态。",
            },
            formalityVariants: {
              casual: "How do I know my vote actually got counted?",
              standard: "How do I know my ballot was actually counted?",
              formal: "What is the procedure for verifying that my ballot has been officially counted?",
            },
          },
          {
            speaker: "them",
            role: "选举办人员",
            textEn:
              "You can track your ballot online using the registration lookup tool on our website. It'll show you when your ballot was mailed, received, and counted. You'll also get an email or text notification if you opted in.",
            textZh:
              "您可以在我们网站上使用登记查询工具在线追踪选票。它会显示选票何时寄出、收到和计入。如果您选择了通知，还会收到邮件或短信提醒。",
            commonMistake: {
              wrong: "It will show when your ballot send, receive and count.",
              correct: "It'll show when your ballot was sent, received, and counted.",
              explanation: "这里需要用被动语态'was sent/received/counted'，表明选票是被寄出、收到和计数的。",
            },
            keyPhrases: [
              { en: "track your ballot", zh: "追踪选票" },
              { en: "opted in", zh: "选择接收（通知）" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Go to our website and use the ballot tracker — type in your info and it'll show you the whole journey: when it was sent, when we got it, and when it was counted. You can also sign up for text alerts.",
                textZh:
                  "去我们网站用选票追踪器——输入你的信息就能看到全过程：什么时候寄出、什么时候收到、什么时候计入。也可以注册短信提醒。",
                actionHint: "the whole journey 形象地指选票的全过程",
                frequency: "common",
              },
            ],
            casualVersion:
              "Can track your ballot online with the lookup tool on our site. It'll show you when it was mailed, received, and counted. Plus, you'll get an email or text if you opted in.",
            formalityVariants: {
              casual:
                "Track your ballot online with the tool on our site. Shows when it was mailed, received, and counted. Get an email/text if you opted in.",
              standard:
                "You can track your ballot online using the registration lookup tool on our website. It'll show you when your ballot was mailed, received, and counted. You'll also get an email or text notification if you opted in.",
              formal:
                "You are able to monitor the status of your ballot online by utilizing the registration lookup tool available on our official website. This system will indicate the dates your ballot was dispatched, received, and subsequently tabulated. Furthermore, an email or text notification will be provided if you elected to receive such alerts.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 12. 公证服务 ====================
  {
    id: "government-notary",
    category: "government",
    titleZh: "公证服务",
    titleEn: "Notary Services",
    description: "需要公证文件签名时找公证人",
    otherRole: "公证人",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "基本公证流程",
        titleEn: "Basic Notarization",
        description: "第一次找公证人公证文件",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to get a document notarized. Is a notary available?",
            textZh: "你好，我需要对一份文件进行公证。有公证人吗？",
            casualVersion: "Hey, I need something notarized. Is anyone available?",
            commonMistake: {
              wrong: "I want to notarize a document. Is there a notary?",
              correct: "I need to get a document notarized. Is a notary available?",
              explanation: "“want”不够礼貌，“get done”是更自然的表达。询问是否有公证人时，“available”比“there”更常用。",
            },
            formalityVariants: {
              casual: "Hey, gotta get something notarized. Got a notary around?",
              standard: "Hi, I need to get a document notarized. Is a notary available?",
              formal:
                "Good morning/afternoon. I require a document to be notarized. May I inquire if a notary public is currently on duty?",
            },
          },
          {
            speaker: "them",
            role: "公证人",
            textEn:
              "Yes, I'm a notary public. What type of document do you need notarized? And please make sure you haven't signed it yet — I need to witness your signature.",
            textZh: "是的，我是公证人。您需要公证什么类型的文件？请确保您还没有签名——我需要亲眼见证您的签名。",
            keyPhrases: [
              { en: "notary public", zh: "公证人" },
              { en: "witness your signature", zh: "见证您的签名" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That's me! What do you need notarized? Just make sure you haven't signed it yet — I have to watch you sign it.",
                textZh: "我就是！需要公证什么？确保还没签名——我必须看着你签。",
                actionHint: "that's me 是很口语化的自我介绍方式",
                frequency: "common",
              },
            ],
            culturalNote:
              "美国的公证（Notarization）和中国的公证不同。美国公证人只是见证签名的真实性，不验证文件内容。签名必须在公证人面前完成，事先签好的文件不能公证。",
            casualVersion:
              "Yep, I'm a notary. What kinda doc? And super important: don't sign it beforehand—I gotta see you do it.",
            commonMistake: {
              wrong:
                "Yes, I am a notary. What kind of document do you need notarized? Don't sign it yet, I need to see you sign.",
              correct:
                "Yes, I'm a notary public. What type of document do you need notarized? And please make sure you haven't signed it yet — I need to witness your signature.",
              explanation: "“notary public”是完整称谓，更正式。“witness your signature”是公证人常用术语。",
            },
            formalityVariants: {
              casual:
                "Yep, I'm a notary. What kinda doc? Just make sure it's not signed already—I gotta see you sign it.",
              standard:
                "Yes, I'm a notary public. What type of document do you need notarized? And please make sure you haven't signed it yet — I need to witness your signature.",
              formal:
                "Yes, I am a commissioned notary public. Could you please specify the nature of the document requiring notarization? It is imperative that the document remains unsigned until I can personally observe your execution of the signature.",
            },
          },
          {
            speaker: "you",
            textEn: "It's a power of attorney document. I haven't signed it yet. What do I need to bring?",
            textZh: "是一份委托书。我还没有签名。需要带什么？",
            casualVersion: "It's a power of attorney. Haven't signed it. What do I need?",
            commonMistake: {
              wrong: "It is a document for attorney's power. I haven't signed. What I need bring?",
              correct: "It's a power of attorney document. I haven't signed it yet. What do I need to bring?",
              explanation: "“power of attorney”是固定说法，指委托书。“What do I need to bring”是自然问法。",
            },
            formalityVariants: {
              casual: "It's a POA. Haven't signed it. What stuff do I need?",
              standard: "It's a power of attorney document. I haven't signed it yet. What do I need to bring?",
              formal:
                "The document in question is a power of attorney. I have not yet affixed my signature. Could you please inform me of the necessary identification or materials I should present?",
            },
          },
          {
            speaker: "them",
            role: "公证人",
            textEn:
              "You'll need a valid government-issued photo ID — a driver's license, passport, or state ID will work. I'll verify your identity, watch you sign the document, and then apply my official notary seal and signature.",
            textZh:
              "您需要一个有效的政府签发的带照片证件——驾照、护照或州身份证都行。我会验证您的身份，看您签署文件，然后盖上我的官方公证章并签名。",
            keyPhrases: [
              { en: "government-issued photo ID", zh: "政府签发的带照片证件" },
              { en: "notary seal", zh: "公证章" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Just bring a valid ID — license, passport, state ID, whatever. I'll check your identity, you sign in front of me, and then I stamp and sign it with my notary seal.",
                textZh: "带个有效证件就行——驾照、护照、州身份证都可以。我核实身份后你当面签，然后我盖章签名。",
                actionHint: "whatever 在这里表示随便哪种都行",
                frequency: "common",
              },
            ],
            casualVersion:
              "Just need a valid government photo ID—like your driver's license, passport, or a state ID. I'll just check who you are, watch you sign, then put my stamp on it.",
            commonMistake: {
              wrong:
                "You need official photo ID from government — driving license, passport or state ID is fine. I will check your identity, see you sign the document, then put my seal and signature.",
              correct:
                "You'll need a valid government-issued photo ID — a driver's license, passport, or state ID will work. I'll verify your identity, watch you sign the document, and then apply my official notary seal and signature.",
              explanation:
                "“government-issued photo ID”是固定搭配。“will work”更自然。“verify identity”和“apply seal and signature”是专业用语。",
            },
            formalityVariants: {
              casual:
                "Just need your valid government photo ID—like a driver's license, passport, or state ID. I'll verify you, watch you sign, then put my stamp and signature on it.",
              standard:
                "You'll need a valid government-issued photo ID — a driver's license, passport, or state ID will work. I'll verify your identity, watch you sign the document, and then apply my official notary seal and signature.",
              formal:
                "A valid, government-issued photographic identification document will be required, such as a driver's license, passport, or state identification card. I will then proceed to verify your identity, observe your signature, and subsequently affix my official notary seal and signature to the document.",
            },
          },
          {
            speaker: "you",
            textEn: "How much does notarization cost?",
            textZh: "公证费用是多少？",
            casualVersion: "What's it gonna cost me?",
            commonMistake: {
              wrong: "How much is to notarize?",
              correct: "How much does notarization cost?",
              explanation: "“notarization”是名词，指公证行为，“does...cost”是询问价格的常见句型。",
            },
            formalityVariants: {
              casual: "What's the cost for notarizing?",
              standard: "How much does notarization cost?",
              formal: "Could you please inform me of the fee for this notarization service?",
            },
          },
          {
            speaker: "them",
            role: "公证人",
            textEn:
              "It's fifteen dollars per signature that needs to be notarized. If you have multiple signatures on the document, each one is charged separately. Some banks and UPS stores offer free or lower-cost notary services, by the way.",
            textZh:
              "每个需要公证的签名15美元。如果文件上有多个签名，每个单独收费。顺便说一下，有些银行和UPS店提供免费或更便宜的公证服务。",
            keyPhrases: [
              { en: "per signature", zh: "每个签名" },
              { en: "charged separately", zh: "单独收费" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Fifteen bucks per signature. If there's more than one, each one is its own charge. Oh, and some banks do it for free if you've got an account — might wanna check that out.",
                textZh: "每个签名15块。不止一个的话每个单独收费。对了，有些银行开户的话免费公证——你可以看看。",
                actionHint: "might wanna check that out 意思是可以去了解一下",
                frequency: "common",
              },
            ],
            casualVersion:
              "It's fifteen bucks a signature. So if there's a bunch, each one costs you. Oh, and sometimes banks or UPS stores do it cheaper, or even free.",
            culturalNote: "在美国，公证费通常按签名次数而非文件数量计算。银行和UPS店常提供公证服务。",
            commonMistake: {
              wrong:
                "It's fifteen dollars one signature that needs notarized. If you have many signatures, each one is separate pay. Also some banks or UPS have free or cheaper notary.",
              correct:
                "It's fifteen dollars per signature that needs to be notarized. If you have multiple signatures on the document, each one is charged separately. Some banks and UPS stores offer free or lower-cost notary services, by the way.",
              explanation:
                "“per signature”指每个签名。“charged separately”是常用说法。“multiple signatures”指多个签名。",
            },
            formalityVariants: {
              casual:
                "It's fifteen bucks a signature. If there are a few, each one gets charged. FYI, sometimes banks or UPS places do it for less, or even free.",
              standard:
                "It's fifteen dollars per signature that needs to be notarized. If you have multiple signatures on the document, each one is charged separately. Some banks and UPS stores offer free or lower-cost notary services, by the way.",
              formal:
                "The fee is fifteen dollars for each signature requiring notarization. Should the document contain multiple signatures, each will incur a separate charge. Additionally, it is worth noting that certain financial institutions and UPS retail locations may provide complimentary or reduced-rate notary services.",
            },
          },
        ],
      },
      {
        id: "remote-notary",
        titleZh: "远程公证",
        titleEn: "Remote Online Notarization",
        description: "通过视频通话进行在线公证",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I heard you can do notarization online now. Is that true? I can't come in person.",
            textZh: "我听说现在可以在线公证了。是真的吗？我没法亲自到场。",
            casualVersion: "Can I get something notarized online? I can't make it in person.",
            commonMistake: {
              wrong: "I am not convenient to come myself.",
              correct: "I can't come in person.",
              explanation: "中式英语常说“不方便”，但英语里不这样形容人，应说“无法亲自到场”。",
            },
            formalityVariants: {
              casual: "Heard you can do online notarization now. True? Can't make it in person.",
              standard: "I heard you can do notarization online now. Is that true? I can't come in person.",
              formal:
                "I understand that remote online notarization is now available. Could you confirm this? Unfortunately, I am unable to attend in person.",
            },
          },
          {
            speaker: "them",
            role: "公证人",
            textEn:
              "Yes, remote online notarization — or RON — is legal in most states now. We do it through a secure video call. You'll need a computer with a camera, a valid ID, and the document in digital format.",
            textZh:
              "是的，远程在线公证——简称RON——现在在大多数州是合法的。我们通过安全的视频通话进行。您需要一台有摄像头的电脑、有效证件和电子版文件。",
            casualVersion: "Yep, RON's legal in most states now. We just do a secure video call. You'll need a computer with a camera, good ID, and your document as a file.",
            culturalNote: "RON（远程在线公证）是美国特有服务",
            commonMistake: {
              wrong: "You need computer with camera.",
              correct: "You'll need a computer with a camera",
              explanation: "在英语中，单数可数名词前通常需要冠词“a”或“the”。",
            },
            formalityVariants: {
              casual: "Yep, RON's legal in most states now. We just do a secure video call. You'll need a computer with a camera, good ID, and your document as a file.",
              standard: "Yes, remote online notarization — or RON — is legal in most states now. We do it through a secure video call. You'll need a computer with a camera, a valid ID, and your document in electronic format.",
              formal: "Indeed, remote online notarization, commonly referred to as RON, is now legally permissible in the majority of states. Our process involves a secure video conference. You will require a computer equipped with a camera, a valid form of identification, and your document in an electronic format.",
            },
            keyPhrases: [
              { en: "remote online notarization", zh: "远程在线公证" },
              { en: "secure video call", zh: "安全的视频通话" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, it's called remote online notarization. Totally legit in most states. We hop on a video call, you show me your ID, and you sign electronically. Just need a computer with a webcam.",
                textZh:
                  "是的，叫远程在线公证。在大多数州完全合法。我们视频连线，你出示证件，然后电子签名。只要有带摄像头的电脑就行。",
                actionHint: "totally legit 意思是完全合法",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How do I sign the document if it's all online?",
            textZh: "如果全部在线的话，文件怎么签名？",
            commonMistake: {
              wrong: "How to sign document online?",
              correct: "How do I sign the document if it's all online?",
              explanation: "疑问句需要倒装“do I”，且“document”前需冠词“the”。",
            },
            formalityVariants: {
              casual: "How do I sign it if it's all online?",
              standard: "How do I sign the document if it's all online?",
              formal: "In an entirely online process, what is the procedure for affixing my signature to the document?",
            },
            casualVersion: "But how do I sign it if it's all digital?",
          },
          {
            speaker: "them",
            role: "公证人",
            textEn:
              "You'll use an electronic signature through our platform. The system will guide you to place your signature and initials where needed. The whole session is recorded for legal purposes, and you'll receive a digitally sealed copy when we're done.",
            textZh:
              "您通过我们的平台使用电子签名。系统会引导您在需要的地方放置签名和首字母缩写。整个过程出于法律目的会被录像，完成后您会收到一份电子加密副本。",
            casualVersion: "You just use an e-signature on our platform. The system shows you where to put your signature and initials. Everything's recorded for legal stuff, and you get an encrypted digital copy when you're done.",
            commonMistake: {
              wrong: "System will guide you put your signature.",
              correct: "The system will guide you to place your signature",
              explanation: "“guide”后接不定式“to + 动词原形”。",
            },
            formalityVariants: {
              casual: "You just use an e-signature on our platform. The system shows you where to put your signature and initials. Everything's recorded for legal stuff, and you get an encrypted digital copy when you're done.",
              standard: "You'll use an electronic signature through our platform. The system will guide you to place your signature and initials where required. The entire process is recorded for legal purposes, and you'll receive a digitally encrypted copy afterward.",
              formal: "You will utilize an electronic signature function provided within our platform. The system is designed to intuitively direct you to the appropriate locations for your signature and initials. For legal compliance, the entirety of the process is recorded, and upon completion, you will be issued a digitally encrypted copy.",
            },
            keyPhrases: [
              { en: "electronic signature", zh: "电子签名" },
              { en: "digitally sealed", zh: "电子加密/数字密封" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You e-sign through the platform — it shows you exactly where to click to sign. Everything's recorded, and at the end you get a sealed digital copy. Super easy.",
                textZh: "通过平台电子签名——会告诉你在哪里点击签名。全程录像，最后你会收到一份加密数字副本。非常简单。",
                actionHint: "super easy 强调过程很简单",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Is the online notarized document accepted everywhere? Some places seem to only want paper copies.",
            textZh: "网上公证的文件在哪里都承认吗？有些地方好像只要纸质的。",
            commonMistake: {
              wrong: "Online notarized document accepted everywhere?",
              correct: "Is the online notarized document accepted everywhere?",
              explanation: "疑问句需要助动词“is”，“document”前需要冠词“the”，且“accepted”是过去分词构成被动语态。",
            },
            formalityVariants: {
              casual: "Does the online notarization work everywhere? Some places still just want paper.",
              standard: "Is the online notarized document accepted everywhere? Some places seem to only want paper copies.",
              formal: "Are documents notarized through remote online services universally accepted? I've encountered instances where only physical paper copies are preferred.",
            },
            casualVersion: "Will places actually accept the online version?",
          },
          {
            speaker: "them",
            role: "公证人",
            textEn:
              "Electronically notarized documents are legally valid in all fifty states for most purposes. However, some institutions — like certain banks or foreign governments — may still require a traditional wet-ink notarization. I'd recommend checking with the receiving party first.",
            textZh:
              "电子公证文件在所有50个州对大多数用途都具有法律效力。不过，一些机构——比如某些银行或外国政府——可能仍然要求传统的手写签名公证。我建议先跟接收方确认。",
            casualVersion: "E-notarized docs are good in all 50 states for most things. But some places — like certain banks or foreign governments — might still want an old-school 'wet-ink' notarization. Best to check with whoever's getting it first.",
            culturalNote: "美国各州对电子公证的法律效力有规定",
            commonMistake: {
              wrong: "Electronically notarized documents legally valid.",
              correct: "Electronically notarized documents are legally valid.",
              explanation: "句子的主语是复数名词“documents”，需要动词“are”来构成完整的陈述句。",
            },
            formalityVariants: {
              casual: "E-notarized docs are good in all 50 states for most things. But some places — like certain banks or foreign governments — might still want an old-school 'wet-ink' notarization. Best to check with whoever's getting it first.",
              standard: "Electronically notarized documents are legally valid in all fifty states for most purposes. However, some institutions — like certain banks or foreign governments — may still require a traditional wet-ink notarization. I recommend confirming with the receiving party first.",
              formal: "Electronically notarized documents possess legal validity across all fifty states for the vast majority of applications. Nevertheless, certain institutions, such as particular banking entities or foreign governmental bodies, may yet stipulate the requirement for a traditional 'wet-ink' notarization. Therefore, I highly advise pre-confirmation with the intended recipient.",
            },
            keyPhrases: [
              { en: "wet-ink notarization", zh: "手写签名公证/传统公证" },
              { en: "receiving party", zh: "接收方" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For the most part, yes — it's accepted everywhere. But some places are old school and want a physical stamp with a real signature. Best bet is to ask whoever needs the document before you go online.",
                textZh: "基本上都承认。但有些地方比较传统，要实体印章和真实签名。最好先问需要文件的人再决定用哪种。",
                actionHint: "old school 意思是传统的/守旧的",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
];
