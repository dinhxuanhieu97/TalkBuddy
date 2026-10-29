import type { PresetScene } from "../scene-types";

/**
 * 🏛️ 政府事务扩展场景（Government Extension）
 * 31 个政府事务扩展场景
 */
export const GOVERNMENT_SCENES_EXT: PresetScene[] = [
  // ==================== 1. 护照更新 ====================
  {
    id: "government-passport-renewal",
    category: "government",
    titleZh: "护照更新",
    titleEn: "Passport Renewal",
    description: "在邮局办理护照更新，了解所需材料和处理时间",
    otherRole: "邮局人员",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "基本更新流程",
        titleEn: "Basic Renewal Process",
        description: "护照即将过期，前往邮局办理更新",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to renew my passport. It expires in two months.",
            textZh: "你好，我需要更新护照。还有两个月就过期了。",
            casualVersion: "Hey, my passport is about to expire. I need to renew it.",
          },
          {
            speaker: "them",
            role: "邮局人员",
            textEn: "Sure, I can help with that. Do you have your current passport and a recent passport photo?",
            textZh: "好的，我可以帮您。您带了现在的护照和近期的护照照片吗？",
            keyPhrases: [
              { en: "current passport", zh: "现有护照" },
              { en: "passport photo", zh: "护照照片" },
            ],
            alternativeExpressions: [
              {
                textEn: "No problem. Did you bring your old passport and a new photo?",
                textZh: "没问题。带了旧护照和新照片吗？",
                actionHint: "old passport 指现有护照",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I have both. What forms do I need to fill out?",
            textZh: "都带了。我需要填什么表格？",
            casualVersion: "Yep, got them. What paperwork do I need?",
          },
          {
            speaker: "them",
            role: "邮局人员",
            textEn:
              "You need to complete Form DS-82. Since your previous passport was issued less than fifteen years ago, you qualify for renewal by mail. The fee is one hundred and thirty dollars.",
            textZh: "您需要填写DS-82表格。因为您上一本护照签发不超过15年，可以邮寄更新。费用是130美元。",
            keyPhrases: [
              { en: "Form DS-82", zh: "DS-82表格" },
              { en: "renewal by mail", zh: "邮寄更新" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Fill out the DS-82. If your last passport is under fifteen years old, you can just mail it in. It costs a hundred and thirty bucks.",
                textZh: "填DS-82就行。如果上一本护照不超过15年，直接邮寄就行。130块。",
                actionHint: "mail it in 指通过邮寄提交",
                frequency: "common",
              },
            ],
            culturalNote:
              "美国护照更新可通过邮寄或亲自到邮局办理。如果上一本护照签发时不满16岁或已超过15年，则需亲自到场并填写DS-11表。",
          },
          {
            speaker: "you",
            textEn: "How long does it take to get the new passport?",
            textZh: "拿到新护照要多久？",
            casualVersion: "When will I get the new one?",
          },
          {
            speaker: "them",
            role: "邮局人员",
            textEn:
              "Standard processing takes eight to eleven weeks. If you need it sooner, expedited service is an extra sixty dollars and takes five to seven weeks.",
            textZh: "标准处理需要8到11周。如果您急用，加急服务额外60美元，需要5到7周。",
            keyPhrases: [
              { en: "standard processing", zh: "标准处理" },
              { en: "expedited service", zh: "加急服务" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Normally it takes about two to three months. You can pay sixty extra to rush it — then it is five to seven weeks.",
                textZh: "一般要两到三个月。加60块可以加急——大概5到7周。",
                actionHint: "rush it 意思是加急处理",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "urgent",
        titleZh: "紧急更新",
        titleEn: "Urgent Renewal",
        description: "护照已过期或即将出行，需要紧急更新",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I have a trip in three weeks and just realized my passport expired. What can I do?",
            textZh: "我三周后要出行，刚发现护照过期了。怎么办？",
            casualVersion: "I just found out my passport is expired and I fly out in three weeks. Help!",
          },
          {
            speaker: "them",
            role: "邮局人员",
            textEn:
              "In that case, you should make an appointment at the nearest passport agency. They offer life-or-death emergency service and urgent travel service for departures within fourteen days.",
            textZh: "这种情况，您应该预约最近的护照办事处。他们提供生死紧急服务和14天内出行的紧急旅行服务。",
            keyPhrases: [
              { en: "passport agency", zh: "护照办事处" },
              { en: "life-or-death emergency", zh: "生死紧急情况" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You will need to go to an actual passport agency for that. They can do rush jobs if you are traveling within two weeks.",
                textZh: "这种情况您得去护照办事处。如果两周内出行可以加急办理。",
                actionHint: "rush jobs 意思是加急处理",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Where is the nearest passport agency? And what should I bring?",
            textZh: "最近的护照办事处在哪？需要带什么？",
            casualVersion: "Where do I go and what do I need to bring?",
          },
          {
            speaker: "them",
            role: "邮局人员",
            textEn:
              "The closest one is downtown. Bring your expired passport, a new photo, proof of travel like a flight itinerary, and a completed DS-11 form. The total fee is about two hundred and seven dollars including the expedite fee.",
            textZh:
              "最近的在市中心。带上过期护照、新照片、旅行证明比如机票行程单，还有填好的DS-11表。包括加急费总共大约207美元。",
            keyPhrases: [
              { en: "proof of travel", zh: "旅行证明" },
              { en: "flight itinerary", zh: "机票行程单" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "There is one downtown. You will need your old passport, a photo, your flight info to prove you are actually traveling, and the DS-11 filled out. Runs about two hundred bucks total.",
                textZh: "市中心有一个。带旧护照、照片、航班信息证明你确实要出行，还有填好的DS-11。总共大约200块左右。",
                actionHint: "runs about 意思是大约花费",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I book the appointment online?",
            textZh: "可以网上预约吗？",
            casualVersion: "Can I just book it online?",
          },
          {
            speaker: "them",
            role: "邮局人员",
            textEn:
              "Yes, go to travel.state.gov and schedule an appointment. Slots fill up fast, so I would recommend checking first thing in the morning. They release new appointments daily.",
            textZh: "可以，去travel.state.gov预约。名额很快就满，建议一早就查看。他们每天会放出新名额。",
            keyPhrases: [
              { en: "schedule an appointment", zh: "预约" },
              { en: "slots fill up fast", zh: "名额很快就满" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, just hop on the State Department website. Check early in the morning though — those spots go really fast.",
                textZh: "对，上国务院网站就行。不过一早就去看——名额抢得很快。",
                actionHint: "hop on 意思是上（网站）",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 2. 绿卡申请 ====================
  {
    id: "government-green-card",
    category: "government",
    titleZh: "绿卡申请",
    titleEn: "Green Card Application",
    description: "咨询移民律师关于绿卡申请流程和资格",
    otherRole: "移民律师",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "基本咨询",
        titleEn: "Basic Consultation",
        description: "首次咨询绿卡申请的基本流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I am on an H-1B visa and my employer wants to sponsor me for a green card. Where do we start?",
            textZh: "我持H-1B签证，雇主愿意帮我申请绿卡。从哪里开始？",
            casualVersion: "My company wants to sponsor my green card. What is the first step?",
          },
          {
            speaker: "them",
            role: "移民律师",
            textEn:
              "Great. The first step is the PERM labor certification. Your employer needs to prove that no qualified US worker is available for your position. This involves posting job advertisements and documenting the recruitment process.",
            textZh:
              "很好。第一步是PERM劳工证明。您的雇主需要证明没有符合条件的美国工人可以胜任您的职位。这需要发布招聘广告并记录招聘过程。",
            keyPhrases: [
              { en: "PERM labor certification", zh: "PERM劳工证明" },
              { en: "qualified US worker", zh: "符合条件的美国工人" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "So the process starts with PERM — basically your company has to show they could not find an American to fill your role. They will run some job ads and keep records of the whole thing.",
                textZh: "流程从PERM开始——基本上你公司得证明找不到美国人做你的工作。他们会发招聘广告并记录整个过程。",
                actionHint: "run some job ads 意思是发布招聘广告",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How long does the whole green card process take?",
            textZh: "整个绿卡流程要多久？",
            casualVersion: "How long are we looking at for the whole thing?",
          },
          {
            speaker: "them",
            role: "移民律师",
            textEn:
              "For Chinese nationals, the wait can be quite long due to per-country limits. After PERM approval, which takes about eight to twelve months, you file the I-140 petition. Then you wait for your priority date to become current, which could take several years.",
            textZh:
              "对中国公民来说，由于国别限额，等待时间可能很长。PERM批准大约需要8到12个月，然后提交I-140申请。接着等排期到了才能继续，这可能要好几年。",
            keyPhrases: [
              { en: "per-country limits", zh: "国别限额" },
              { en: "priority date", zh: "排期/优先日期" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Honestly, for folks from China it takes a while because of the country caps. PERM alone is about a year, then you file I-140, and then you wait for your date to come up — could be years.",
                textZh:
                  "说实话，中国来的等的时间比较长，因为有国别限额。光PERM就要一年左右，然后交I-140，再等排期——可能要好几年。",
                actionHint: "come up 指排期到了",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there any way to speed up the process?",
            textZh: "有没有办法加快进度？",
            casualVersion: "Any way to make it go faster?",
          },
          {
            speaker: "them",
            role: "移民律师",
            textEn:
              "If you qualify for EB-1, which is for individuals with extraordinary ability or outstanding researchers, you can skip the PERM step entirely. There is also premium processing for the I-140, which guarantees a response within fifteen business days for an extra fee of two thousand eight hundred and five dollars.",
            textZh:
              "如果您符合EB-1类别——适用于杰出人才或优秀研究人员——可以完全跳过PERM步骤。I-140还有加急处理，额外支付2805美元可保证15个工作日内答复。",
            keyPhrases: [
              { en: "extraordinary ability", zh: "杰出能力" },
              { en: "premium processing", zh: "加急处理" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Well, if you are really accomplished in your field, you might qualify for EB-1 — that skips PERM completely. And for the I-140, you can pay about twenty-eight hundred to get a fast answer.",
                textZh: "如果你在自己领域很有成就，可能够格EB-1——完全跳过PERM。I-140的话，花大约2800块可以加快。",
                actionHint: "twenty-eight hundred 是2800的口语说法",
                frequency: "common",
              },
            ],
            culturalNote:
              "美国绿卡申请按国籍有年度配额限制，中国和印度的申请人等待时间通常最长。EB-1类别无需劳工证明且排期较短。",
          },
          {
            speaker: "you",
            textEn: "What happens if I change jobs during the process?",
            textZh: "如果申请过程中换工作怎么办？",
            casualVersion: "What if I switch jobs while this is going on?",
          },
          {
            speaker: "them",
            role: "移民律师",
            textEn:
              "It depends on which stage you are at. If PERM is still pending, you would have to start over with the new employer. If the I-140 is already approved, you can port your priority date to a new application under certain conditions.",
            textZh:
              "取决于您在哪个阶段。如果PERM还在审批中，您需要和新雇主重新开始。如果I-140已经批准，在特定条件下可以将排期转到新的申请中。",
            keyPhrases: [
              { en: "start over", zh: "重新开始" },
              { en: "port your priority date", zh: "转移排期" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It really depends on where you are in the process. Before I-140 approval, switching jobs means starting from scratch. After that, you can usually keep your place in line.",
                textZh: "关键看你在流程的哪一步。I-140批准之前换工作意味着从头来。之后的话，通常可以保留你的排队位置。",
                actionHint: "keep your place in line 意思是保留排队位置",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "family-based",
        titleZh: "亲属移民咨询",
        titleEn: "Family-Based Immigration",
        description: "咨询通过家庭关系申请绿卡",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "My spouse is a US citizen. Can she sponsor me for a green card?",
            textZh: "我的配偶是美国公民。她能帮我申请绿卡吗？",
            casualVersion: "My wife is American. Can she help me get a green card?",
          },
          {
            speaker: "them",
            role: "移民律师",
            textEn:
              "Absolutely. Spouses of US citizens are considered immediate relatives, which means there is no waiting list. She would file Form I-130, and you would file Form I-485 for adjustment of status simultaneously.",
            textZh:
              "当然可以。美国公民的配偶属于直系亲属，不需要排队等候。她提交I-130表，您同时提交I-485身份调整申请。",
            keyPhrases: [
              { en: "immediate relatives", zh: "直系亲属" },
              { en: "adjustment of status", zh: "身份调整" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For sure. Since your wife is a citizen, you are an immediate relative — no line, no wait. She files the I-130 and you file I-485 at the same time.",
                textZh: "当然。因为你妻子是公民，你是直系亲属——不用排队不用等。她交I-130你交I-485，同时提交。",
                actionHint: "no line, no wait 强调无需等待",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How long will it take to get the green card this way?",
            textZh: "这样申请绿卡要多久？",
            casualVersion: "How fast can I get it through my wife?",
          },
          {
            speaker: "them",
            role: "移民律师",
            textEn:
              "Typically twelve to eighteen months from filing to approval. During this time, you will have a biometrics appointment for fingerprints and an interview at your local USCIS office. You will also receive a work permit while the application is pending.",
            textZh:
              "通常从提交到批准需要12到18个月。期间需要去做生物识别采集指纹，还有在当地移民局面谈。申请审理期间您还会收到工作许可。",
            keyPhrases: [
              { en: "biometrics appointment", zh: "生物识别预约" },
              { en: "work permit", zh: "工作许可" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Usually about a year to a year and a half. They will call you in for fingerprints and an interview. And the good news is you get a work permit while you wait.",
                textZh: "一般一年到一年半。会叫你去按指纹和面谈。好消息是等待期间你会拿到工作许可。",
                actionHint: "call you in 意思是通知你到场",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What documents do we need for the interview?",
            textZh: "面谈需要什么材料？",
            casualVersion: "What should we bring to the interview?",
          },
          {
            speaker: "them",
            role: "移民律师",
            textEn:
              "Bring your marriage certificate, joint bank statements, shared lease or mortgage documents, photos together, and any other evidence of a genuine marriage. The officer will ask both of you questions about your relationship to verify it is legitimate.",
            textZh:
              "带上结婚证、共同银行账单、共同租约或房贷文件、合照，以及其他证明真实婚姻的材料。移民官会分别问你们关于关系的问题来验证婚姻真实性。",
            keyPhrases: [
              { en: "joint bank statements", zh: "共同银行账单" },
              { en: "genuine marriage", zh: "真实婚姻" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You will want to bring everything that shows you two actually live together — bank stuff, lease, photos, that kind of thing. They will ask you both questions separately to make sure it is the real deal.",
                textZh:
                  "带上所有能证明你们确实住在一起的东西——银行材料、租约、照片之类的。他们会分别问你们问题，确认是真的。",
                actionHint: "the real deal 意思是真实的",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Will I get a permanent green card right away?",
            textZh: "马上就能拿到永久绿卡吗？",
            casualVersion: "Do I get a permanent one right away?",
          },
          {
            speaker: "them",
            role: "移民律师",
            textEn:
              "If you have been married for less than two years at the time of approval, you will receive a conditional green card valid for two years. Before it expires, you file Form I-751 jointly with your spouse to remove the conditions and get a permanent ten-year card.",
            textZh:
              "如果批准时结婚不到两年，您会拿到有效期两年的临时绿卡。到期前需要和配偶共同提交I-751表去除条件，然后获得十年永久绿卡。",
            keyPhrases: [
              { en: "conditional green card", zh: "临时绿卡" },
              { en: "remove the conditions", zh: "去除条件" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "If you have been married under two years, you get a temporary card first — good for two years. Then you and your wife file together to make it permanent.",
                textZh: "如果结婚不到两年，先拿临时卡——有效两年。然后你和妻子一起申请转成永久的。",
                actionHint: "make it permanent 意思是转为永久",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 3. 入籍面谈 ====================
  {
    id: "government-naturalization",
    category: "government",
    titleZh: "入籍面谈",
    titleEn: "Naturalization Interview",
    description: "参加入籍面谈，回答公民知识测试和英语能力测试",
    otherRole: "移民官",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "面谈流程",
        titleEn: "Interview Process",
        description: "入籍面谈的标准流程和常见问题",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Good morning. I am here for my naturalization interview.",
            textZh: "早上好。我来参加入籍面谈。",
            casualVersion: "Hi, I have my citizenship interview today.",
          },
          {
            speaker: "them",
            role: "移民官",
            textEn:
              "Good morning. Please have a seat. Before we begin, I need to put you under oath. Do you swear that everything you say today will be the truth?",
            textZh: "早上好。请坐。开始之前，我需要让您宣誓。您是否宣誓今天所说的一切都是事实？",
            keyPhrases: [
              { en: "under oath", zh: "宣誓" },
              { en: "the truth", zh: "事实" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Morning. Go ahead and have a seat. I am going to swear you in first. Do you promise to tell the truth during this interview?",
                textZh: "早。请坐。我先让你宣誓。你承诺在面谈中说实话吗？",
                actionHint: "swear you in 意思是让你宣誓",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I do.",
            textZh: "是的，我宣誓。",
            casualVersion: "Yes, I swear.",
          },
          {
            speaker: "them",
            role: "移民官",
            textEn:
              "Thank you. Let me verify some information on your N-400 application. What is your full legal name, and have you used any other names?",
            textZh: "谢谢。让我核实一下您N-400申请表上的一些信息。您的全名是什么？使用过其他名字吗？",
            keyPhrases: [
              { en: "N-400 application", zh: "N-400申请表" },
              { en: "full legal name", zh: "法定全名" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Alright, let us go through your application. Can you tell me your legal name and whether you have ever gone by any other name?",
                textZh: "好，我们来过一遍你的申请。告诉我你的法定姓名，还有是否用过其他名字？",
                actionHint: "gone by 意思是使用过（某个名字）",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "My name is Wei Zhang. I have not used any other names.",
            textZh: "我叫张伟。没有用过其他名字。",
            casualVersion: "Wei Zhang. No other names.",
          },
          {
            speaker: "them",
            role: "移民官",
            textEn:
              "Now I will ask you some civics questions. You need to answer six out of ten correctly. Here is the first one: what is the supreme law of the land?",
            textZh: "现在我问您一些公民知识问题。您需要十道题中答对六道。第一题：国家的最高法律是什么？",
            keyPhrases: [
              { en: "civics questions", zh: "公民知识问题" },
              { en: "supreme law of the land", zh: "国家最高法律" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Okay, time for the civics test. I will give you ten questions and you need to get at least six right. First question: what is the highest law in the United States?",
                textZh: "好，现在做公民知识测试。给你十个问题，至少答对六个。第一题：美国最高的法律是什么？",
                actionHint: "highest law 和 supreme law 意思一样",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "oath-ceremony",
        titleZh: "宣誓仪式",
        titleEn: "Oath Ceremony",
        description: "面谈通过后的宣誓入籍仪式",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I received a notice for my oath ceremony. What should I expect?",
            textZh: "我收到了宣誓仪式的通知。有什么需要注意的？",
            casualVersion: "I got my ceremony notice. What happens there?",
          },
          {
            speaker: "them",
            role: "移民官",
            textEn:
              "Congratulations on passing your interview. At the ceremony, you will turn in your green card, take the Oath of Allegiance, and receive your Certificate of Naturalization. Please arrive thirty minutes early.",
            textZh: "恭喜您通过了面谈。在仪式上，您会交回绿卡，进行效忠宣誓，然后领取入籍证书。请提前30分钟到场。",
            keyPhrases: [
              { en: "Oath of Allegiance", zh: "效忠宣誓" },
              { en: "Certificate of Naturalization", zh: "入籍证书" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Congrats! So at the ceremony, you hand back your green card, say the oath, and they give you your citizenship certificate. Just show up half an hour early.",
                textZh: "恭喜！仪式上你交回绿卡，宣读誓词，他们给你公民证书。提前半小时到就行。",
                actionHint: "hand back 意思是交回",
                frequency: "common",
              },
            ],
            culturalNote:
              "宣誓入籍仪式是成为美国公民的最后一步。仪式后可以立即申请美国护照。入籍证书非常重要，一旦丢失补办费用高昂且耗时长。",
          },
          {
            speaker: "you",
            textEn: "Can I apply for a US passport right after the ceremony?",
            textZh: "仪式结束后马上能申请美国护照吗？",
            casualVersion: "Can I get my passport right after?",
          },
          {
            speaker: "them",
            role: "移民官",
            textEn:
              "Yes. Many ceremony locations have a passport acceptance facility on site. Bring your passport photo and the application fee, and you can apply the same day. Otherwise, you can go to any post office that accepts passport applications.",
            textZh:
              "可以。很多仪式场地现场就有护照受理点。带上护照照片和申请费，当天就能申请。否则，您也可以去任何接受护照申请的邮局。",
            keyPhrases: [
              { en: "passport acceptance facility", zh: "护照受理点" },
              { en: "application fee", zh: "申请费" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep, a lot of places let you do it right there. Just have your photo and the fee ready. If not, any post office that does passports can help you out.",
                textZh: "是的，很多地方当场就能办。准备好照片和费用就行。不行的话，任何办护照的邮局都可以。",
                actionHint: "help you out 意思是帮你办理",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Do I need to update my Social Security card after becoming a citizen?",
            textZh: "成为公民后需要更新社保卡吗？",
            casualVersion: "Should I update my Social Security card too?",
          },
          {
            speaker: "them",
            role: "移民官",
            textEn:
              "Yes, you should visit a Social Security office to update your citizenship status. The card number stays the same, but they will remove any work restrictions. Bring your Certificate of Naturalization as proof.",
            textZh: "是的，您应该去社保局更新公民身份。卡号不变，但他们会取消工作限制。带上入籍证书作为证明。",
            keyPhrases: [
              { en: "citizenship status", zh: "公民身份" },
              { en: "work restrictions", zh: "工作限制" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, definitely do that. Just take your naturalization certificate to Social Security. Same card number, they just update the records so there are no more work limits.",
                textZh: "对，一定要去。拿入籍证书去社保局就行。卡号一样，只是更新记录去掉工作限制。",
                actionHint: "work limits 和 work restrictions 意思一样",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you for all the information. I am really excited about this.",
            textZh: "谢谢您提供的信息。我真的很期待。",
            casualVersion: "Thanks so much. I can not wait!",
          },
          {
            speaker: "them",
            role: "移民官",
            textEn:
              "You are welcome. It is a big milestone. Just remember to register to vote once you have your certificate — that is one of the most important rights of citizenship.",
            textZh: "不客气。这是一个重要的里程碑。记得拿到证书后登记投票——那是公民最重要的权利之一。",
            keyPhrases: [
              { en: "register to vote", zh: "登记投票" },
              { en: "rights of citizenship", zh: "公民权利" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No problem. It is a huge deal — congrats again. Just make sure you sign up to vote. That is one of the best parts of being a citizen.",
                textZh: "没问题。这是大事——再次恭喜。记得去登记投票。那是当公民最好的部分之一。",
                actionHint: "sign up to vote 和 register to vote 一样",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 4. 工作许可 ====================
  {
    id: "government-work-permit",
    category: "government",
    titleZh: "工作许可",
    titleEn: "Work Permit Application",
    description: "在移民局申请或更新工作许可（EAD卡）",
    otherRole: "移民官",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "申请工作许可",
        titleEn: "Applying for EAD",
        description: "首次申请工作许可的标准流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I need to apply for a work permit. My current visa does not allow me to work off campus.",
            textZh: "我需要申请工作许可。我现在的签证不允许在校外工作。",
            casualVersion: "I want to get a work permit. My visa only lets me work on campus.",
          },
          {
            speaker: "them",
            role: "移民官",
            textEn:
              "I see. What type of visa are you on, and what is the reason for requesting employment authorization? That will determine which category you fall under on Form I-765.",
            textZh: "明白。您持什么类型的签证？申请工作许可的原因是什么？这决定了您在I-765表上属于哪个类别。",
            keyPhrases: [
              { en: "employment authorization", zh: "工作许可" },
              { en: "Form I-765", zh: "I-765表格" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Okay. What visa do you have and why do you need to work? That helps me figure out which box you check on the I-765.",
                textZh: "好的。你什么签证，为什么需要工作？这帮我确定你在I-765上勾哪个选项。",
                actionHint: "which box you check 意思是选择哪个类别",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I am on an F-1 student visa and I would like to apply for OPT after graduation.",
            textZh: "我持F-1学生签证，毕业后想申请OPT。",
            casualVersion: "F-1 visa. I want OPT after I graduate.",
          },
          {
            speaker: "them",
            role: "移民官",
            textEn:
              "For post-completion OPT, you need to file Form I-765 along with your I-20 endorsed by your designated school official. You should apply no earlier than ninety days before graduation and no later than sixty days after.",
            textZh:
              "申请毕业后OPT，您需要提交I-765表和经学校指定官员签字的I-20。最早毕业前90天、最晚毕业后60天内申请。",
            keyPhrases: [
              { en: "post-completion OPT", zh: "毕业后OPT" },
              { en: "designated school official", zh: "学校指定官员（DSO）" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For OPT after graduation, you will need the I-765 and your I-20 signed by your school adviser. Make sure you apply within the window — ninety days before to sixty days after your program end date.",
                textZh: "毕业后OPT需要I-765和学校顾问签字的I-20。注意在时间窗口内申请——项目结束前90天到结束后60天。",
                actionHint: "within the window 意思是在规定时间范围内",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How long does it take to get the EAD card?",
            textZh: "拿到EAD卡要多久？",
            casualVersion: "How long until I get my work card?",
          },
          {
            speaker: "them",
            role: "移民官",
            textEn:
              "Processing times vary, but typically three to five months. You cannot start working until you have the EAD card in hand and your OPT start date has arrived. You can check your case status online using the receipt number.",
            textZh:
              "处理时间不等，通常三到五个月。在拿到EAD卡且OPT开始日期到来之前不能工作。您可以用收据号在网上查询案件状态。",
            keyPhrases: [
              { en: "EAD card in hand", zh: "拿到EAD卡" },
              { en: "receipt number", zh: "收据号" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It usually takes about three to five months. Just remember, you can not work until the card arrives and your start date kicks in. Track it online with your receipt number.",
                textZh: "一般三到五个月。记住，卡到了而且开始日期到了才能工作。用收据号在网上查进度。",
                actionHint: "kicks in 意思是生效",
                frequency: "common",
              },
            ],
            culturalNote:
              "OPT是美国留学生毕业后最常用的工作许可。STEM专业毕业生可额外申请24个月的OPT延期（STEM OPT Extension），总共可工作36个月。",
          },
          {
            speaker: "you",
            textEn: "What if my EAD card does not arrive before my start date?",
            textZh: "如果EAD卡在开始日期前还没到怎么办？",
            casualVersion: "What if it is late?",
          },
          {
            speaker: "them",
            role: "移民官",
            textEn:
              "Unfortunately, you must wait. Working without a valid EAD is a violation of your status. If it has been more than ninety days since filing, you can contact USCIS to request an expedite based on financial hardship.",
            textZh:
              "很遗憾，您必须等。没有有效EAD就工作属于违反身份。如果提交超过90天，可以联系移民局以经济困难为由申请加急。",
            keyPhrases: [
              { en: "violation of your status", zh: "违反身份" },
              { en: "financial hardship", zh: "经济困难" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You have to wait, unfortunately. Working without it can get you in trouble. But if it has been over ninety days, you can try calling USCIS and asking them to speed it up.",
                textZh: "很遗憾只能等。没有卡就工作会有麻烦。但如果超过90天了，可以打电话给移民局请他们加快。",
                actionHint: "get you in trouble 意思是惹上麻烦",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "renewal",
        titleZh: "更新工作许可",
        titleEn: "EAD Renewal",
        description: "工作许可即将到期，办理更新",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "My EAD card expires next month. How do I renew it?",
            textZh: "我的EAD卡下个月就到期了。怎么更新？",
            casualVersion: "My work permit is expiring soon. How do I renew?",
          },
          {
            speaker: "them",
            role: "移民官",
            textEn:
              "You should file a new I-765 as a renewal. We recommend filing at least six months before expiration to avoid any gap in your work authorization. The filing fee is four hundred and ten dollars.",
            textZh:
              "您需要重新提交I-765作为更新申请。建议在到期前至少六个月提交，以免工作许可出现空档。申请费是410美元。",
            keyPhrases: [
              { en: "filing fee", zh: "申请费" },
              { en: "gap in work authorization", zh: "工作许可空档" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "File another I-765 for renewal. Honestly, you should have done it six months out to be safe. The fee is four hundred and ten bucks.",
                textZh: "再交一份I-765申请更新。说实话应该提前六个月交的才安全。费用410块。",
                actionHint: "six months out 意思是提前六个月",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I continue working while the renewal is pending?",
            textZh: "更新审理期间我能继续工作吗？",
            casualVersion: "Can I keep working while I wait?",
          },
          {
            speaker: "them",
            role: "移民官",
            textEn:
              "If you filed the renewal before your current EAD expired, you may be eligible for an automatic extension of up to one hundred and eighty days. Your receipt notice serves as proof of continued work authorization during that time.",
            textZh:
              "如果您在当前EAD到期前提交了更新申请，可能有资格获得最长180天的自动延期。收据通知在此期间可作为继续工作许可的证明。",
            keyPhrases: [
              { en: "automatic extension", zh: "自动延期" },
              { en: "receipt notice", zh: "收据通知" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "As long as you filed before the old one expired, you usually get an automatic extension — up to a hundred and eighty days. Just show your employer the receipt as proof.",
                textZh: "只要在旧的到期前提交了，通常会自动延期——最多180天。给雇主看收据作为证明就行。",
                actionHint: "show your employer the receipt 意思是出示收据给雇主",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What documents do I need for the renewal application?",
            textZh: "更新申请需要什么材料？",
            casualVersion: "What do I need to submit?",
          },
          {
            speaker: "them",
            role: "移民官",
            textEn:
              "You will need a copy of your current EAD card, two passport-style photos, the I-765 form, and supporting documents based on your eligibility category. If your status has changed since the last filing, include updated evidence.",
            textZh:
              "您需要现有EAD卡复印件、两张护照照片、I-765表格，以及基于您资格类别的支持文件。如果上次申请后身份有变化，需要提供更新的证据。",
            keyPhrases: [
              { en: "supporting documents", zh: "支持文件" },
              { en: "eligibility category", zh: "资格类别" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Copy of your current card, two photos, the form, and whatever documents match your category. If anything has changed since last time, include the new stuff.",
                textZh: "现有卡的复印件、两张照片、表格，还有你类别对应的材料。如果有任何变化，加上新的东西。",
                actionHint: "the new stuff 指更新后的材料",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I file online or does it have to be by mail?",
            textZh: "可以网上提交还是必须邮寄？",
            casualVersion: "Can I do it online?",
          },
          {
            speaker: "them",
            role: "移民官",
            textEn:
              "USCIS now offers online filing for most I-765 categories. You can create an account on uscis.gov, upload your documents, and pay the fee electronically. It is actually faster and easier to track than paper filing.",
            textZh:
              "移民局现在大多数I-765类别都支持网上提交。您可以在uscis.gov注册账户，上传文件，在线支付费用。实际上比纸质申请更快，也更方便追踪。",
            keyPhrases: [
              { en: "online filing", zh: "网上提交" },
              { en: "upload your documents", zh: "上传文件" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, you can do most of it online now. Just make an account, upload everything, and pay. Way easier than mailing stuff in.",
                textZh: "是的，现在大部分都能网上办了。注册账户、上传材料、付费。比邮寄方便多了。",
                actionHint: "way easier 意思是方便得多",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 5. 税务审计 ====================
  {
    id: "government-tax-audit",
    category: "government",
    titleZh: "税务审计",
    titleEn: "Tax Audit",
    description: "收到IRS审计通知，了解流程和准备材料",
    otherRole: "IRS人员",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "审计通知",
        titleEn: "Audit Notification",
        description: "收到审计信后与IRS人员沟通",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I received a letter saying I am being audited. Can you explain what this means?",
            textZh: "我收到一封信说我被审计了。能解释一下这是什么意思吗？",
            casualVersion: "I got a letter about an audit. What does that mean?",
          },
          {
            speaker: "them",
            role: "IRS人员",
            textEn:
              "An audit means we are reviewing your tax return to verify the information is accurate. Your letter should specify which tax year and which items we are examining. This is a correspondence audit, so everything can be handled by mail.",
            textZh:
              "审计意味着我们在审查您的报税表以核实信息是否准确。信上应该说明了审查的税务年度和项目。这是通信审计，所有事项都可以通过邮件处理。",
            keyPhrases: [
              { en: "tax return", zh: "报税表" },
              { en: "correspondence audit", zh: "通信审计" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Basically we are double-checking your tax return to make sure everything adds up. Check the letter — it tells you which year and what we are looking at. Since it is a mail audit, you do not have to come in.",
                textZh: "基本上就是复查你的报税表确保都对。看看信上写了哪一年和审查什么。因为是邮件审计，你不用来。",
                actionHint: "adds up 意思是数据对得上",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What documents do I need to provide?",
            textZh: "我需要提供什么材料？",
            casualVersion: "What do you need from me?",
          },
          {
            speaker: "them",
            role: "IRS人员",
            textEn:
              "We need receipts, bank statements, and any records that support the deductions you claimed. For example, if we are questioning your charitable donations, provide donation receipts and acknowledgment letters from the organizations.",
            textZh:
              "我们需要收据、银行对账单以及支持您所申报扣除项的任何记录。例如，如果我们质疑您的慈善捐款，请提供捐款收据和组织的确认信。",
            keyPhrases: [
              { en: "deductions you claimed", zh: "您申报的扣除项" },
              { en: "charitable donations", zh: "慈善捐款" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Just pull together your receipts, bank records, and anything that backs up what you put on your return. If it is about donations, grab those receipts and thank-you letters from the charities.",
                textZh:
                  "把收据、银行记录和能证明报税内容的东西都找出来。如果是关于捐款，把慈善机构的收据和感谢信找到。",
                actionHint: "backs up 意思是支持/证明",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How long do I have to respond?",
            textZh: "我有多长时间回复？",
            casualVersion: "When is the deadline?",
          },
          {
            speaker: "them",
            role: "IRS人员",
            textEn:
              "You have thirty days from the date on the letter to respond. If you need more time, call us before the deadline and we can usually grant a thirty-day extension. It is important not to ignore the letter, as that could result in additional penalties.",
            textZh:
              "从信件日期起有30天回复时间。如果需要更多时间，在截止日前打电话给我们，通常可以延期30天。不要忽略这封信很重要，否则可能导致额外罚款。",
            keyPhrases: [
              { en: "thirty-day extension", zh: "30天延期" },
              { en: "additional penalties", zh: "额外罚款" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You have got thirty days. If that is not enough, just give us a call before it is due and we can usually push it back another month. Whatever you do, do not just ignore it — that makes things worse.",
                textZh: "你有30天。如果不够，到期前给我们打电话通常能再延一个月。不管怎样，别不理这封信——那样会更糟。",
                actionHint: "push it back 意思是往后延",
                frequency: "common",
              },
            ],
            culturalNote:
              "收到IRS审计信不必恐慌，大多数是通信审计只需邮寄材料。但务必按时回复，必要时可聘请注册会计师（CPA）或税务律师协助。",
          },
          {
            speaker: "you",
            textEn: "What happens if the audit finds that I owe more taxes?",
            textZh: "如果审计发现我欠税怎么办？",
            casualVersion: "What if I end up owing more?",
          },
          {
            speaker: "them",
            role: "IRS人员",
            textEn:
              "If we determine you owe additional taxes, we will send a notice with the amount due plus any interest and penalties. You can pay in full, set up a payment plan, or dispute the findings if you disagree.",
            textZh:
              "如果我们确定您欠额外税款，会发送通知说明应付金额加上利息和罚款。您可以全额支付、设立分期付款计划，或者如果不同意可以提出异议。",
            keyPhrases: [
              { en: "payment plan", zh: "分期付款计划" },
              { en: "dispute the findings", zh: "对结果提出异议" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "If you owe more, we will let you know how much including interest. You can pay it all at once, work out a payment plan, or appeal if you think we got it wrong.",
                textZh:
                  "如果你欠更多，我们会告诉你多少钱包括利息。可以一次付清、协商分期，或者如果觉得我们搞错了可以上诉。",
                actionHint: "work out a payment plan 意思是协商分期方案",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "in-person",
        titleZh: "现场审计",
        titleEn: "In-Person Audit",
        description: "需要亲自到IRS办公室进行面对面审计",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I have an in-person audit scheduled. Can I bring my accountant with me?",
            textZh: "我有一个现场审计预约。可以带我的会计师一起去吗？",
            casualVersion: "I have to go in for an audit. Can my accountant come?",
          },
          {
            speaker: "them",
            role: "IRS人员",
            textEn:
              "Absolutely. In fact, we encourage taxpayers to bring a tax professional. You can bring a CPA, an enrolled agent, or a tax attorney. They can even represent you without you being present if you sign Form 2848, Power of Attorney.",
            textZh:
              "当然可以。实际上，我们鼓励纳税人带税务专业人士。您可以带注册会计师、注册代理人或税务律师。如果您签署2848表（授权委托书），他们甚至可以在您不在场的情况下代表您。",
            keyPhrases: [
              { en: "enrolled agent", zh: "注册代理人" },
              { en: "Power of Attorney", zh: "授权委托书" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yes, definitely bring them. A CPA or tax lawyer can really help. And if you sign a power of attorney form, they can even handle the whole thing without you.",
                textZh: "对，一定带上。CPA或税务律师很有帮助。签了授权委托书的话，他们甚至可以全程替你处理。",
                actionHint: "handle the whole thing 意思是全程处理",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What should I expect during the meeting?",
            textZh: "面谈过程是什么样的？",
            casualVersion: "What is the meeting going to be like?",
          },
          {
            speaker: "them",
            role: "IRS人员",
            textEn:
              "The examiner will go through your return line by line for the items in question. They will ask you to explain certain entries and show supporting documentation. Be honest and only answer what is asked — do not volunteer extra information.",
            textZh:
              "审查员会逐项审查您报税表上有疑问的条目。他们会要求您解释某些项目并出示支持文件。要诚实，只回答被问到的问题——不要主动提供额外信息。",
            keyPhrases: [
              { en: "line by line", zh: "逐项/逐行" },
              { en: "supporting documentation", zh: "支持文件" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "They will go through the items they flagged and ask you to explain and show proof. Just answer their questions honestly and keep it simple — do not say more than you need to.",
                textZh: "他们会审查标记的项目，让你解释并出示证明。诚实回答就行，说得简单点——不需要多说。",
                actionHint: "flagged 意思是被标记/有疑问的",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How long does the whole process usually take?",
            textZh: "整个过程通常要多久？",
            casualVersion: "How long does this usually take?",
          },
          {
            speaker: "them",
            role: "IRS人员",
            textEn:
              "An office audit typically takes a few hours for the initial meeting. However, the overall process from start to resolution can take several months, depending on the complexity of your case and whether additional information is needed.",
            textZh:
              "办公室审计初次会面通常需要几个小时。但从开始到结案的整个过程可能需要几个月，取决于案件复杂程度以及是否需要补充信息。",
            keyPhrases: [
              { en: "office audit", zh: "办公室审计" },
              { en: "start to resolution", zh: "从开始到结案" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The meeting itself is usually a few hours. But the whole thing from start to finish could drag on for months, especially if they need more paperwork from you.",
                textZh: "会面本身通常几个小时。但从头到尾可能拖几个月，特别是如果他们需要你补交材料。",
                actionHint: "drag on 意思是拖延",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What are my rights during the audit?",
            textZh: "审计期间我有什么权利？",
            casualVersion: "What rights do I have?",
          },
          {
            speaker: "them",
            role: "IRS人员",
            textEn:
              "You have the right to professional and courteous treatment, the right to know why we are asking for information, the right to appeal our decision, and the right to representation. These are outlined in IRS Publication 1, Your Rights as a Taxpayer.",
            textZh:
              "您有权获得专业礼貌的对待、有权知道我们为什么要求提供信息、有权对我们的决定提出上诉、有权获得代理。这些都在IRS出版物1号《纳税人权利》中列明。",
            keyPhrases: [
              { en: "right to appeal", zh: "上诉权" },
              { en: "right to representation", zh: "代理权" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You have plenty of rights — to be treated fairly, to understand why we need things, to bring a representative, and to appeal if you disagree with us. It is all in the taxpayer bill of rights.",
                textZh:
                  "你有很多权利——被公平对待、了解我们为什么需要东西、带代理人、不同意的话上诉。都在纳税人权利法案里。",
                actionHint: "taxpayer bill of rights 指纳税人权利法案",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 6. 退税查询 ====================
  {
    id: "government-tax-refund",
    category: "government",
    titleZh: "退税查询",
    titleEn: "Tax Refund Inquiry",
    description: "查询退税状态和解决退税延迟问题",
    otherRole: "IRS客服",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "查询退税状态",
        titleEn: "Checking Refund Status",
        description: "电话查询退税进度",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi, I filed my tax return two months ago and still have not received my refund. Can you check the status?",
            textZh: "你好，我两个月前提交了报税表，但还没收到退税。能查一下状态吗？",
            casualVersion: "Hey, I filed my taxes two months ago and no refund yet. Can you look it up?",
          },
          {
            speaker: "them",
            role: "IRS客服",
            textEn:
              "Of course. Can you provide me with your Social Security number, your filing status, and the exact refund amount shown on your return?",
            textZh: "当然。请提供您的社保号、报税身份和报税表上显示的确切退税金额。",
            keyPhrases: [
              { en: "filing status", zh: "报税身份" },
              { en: "refund amount", zh: "退税金额" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure thing. I just need your Social, how you filed — single, married, that kind of thing — and the dollar amount of the refund.",
                textZh: "没问题。我需要你的社保号、怎么报的——单身、已婚之类的——还有退税金额。",
                actionHint: "your Social 是 Social Security number 的简称",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Sure. My Social Security number is ending in four-seven-two-one. I filed as married filing jointly, and the refund should be three thousand two hundred dollars.",
            textZh: "好的。我的社保号末四位是4721。我是已婚联合报税，退税应该是3200美元。",
            casualVersion:
              "My Social ends in four-seven-two-one. Married filing jointly. Refund is thirty-two hundred.",
          },
          {
            speaker: "them",
            role: "IRS客服",
            textEn:
              "I see your return. It looks like your refund is being held because we need to verify your identity. We sent a letter — Form 5071C — to your address on file. You need to verify online at idverify.irs.gov or call the number on the letter.",
            textZh:
              "我看到您的申报了。看起来您的退税被暂扣了因为我们需要验证您的身份。我们寄了一封信——5071C表——到您登记的地址。您需要在idverify.irs.gov网上验证或拨打信上的电话。",
            keyPhrases: [
              { en: "verify your identity", zh: "验证身份" },
              { en: "address on file", zh: "登记地址" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Okay, I see it. It is being held up because of an identity check. We mailed you a letter about it. You just need to go online or call to confirm you are who you say you are.",
                textZh: "好的，我看到了。因为身份核查被扣住了。我们给你寄了封信。你只需要上网或打电话确认你的身份。",
                actionHint: "held up 意思是被扣住/延迟了",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I never received that letter. What should I do?",
            textZh: "我没收到那封信。该怎么办？",
            casualVersion: "I never got it. What now?",
          },
          {
            speaker: "them",
            role: "IRS客服",
            textEn:
              "No worries. I can resend the letter to your current address. Alternatively, you can verify your identity right now over the phone. I will need to ask you several questions to confirm your identity based on your tax records and personal information.",
            textZh:
              "没关系。我可以把信重新寄到您现在的地址。或者您现在就可以通过电话验证身份。我需要根据您的税务记录和个人信息问几个问题来确认身份。",
            keyPhrases: [
              { en: "resend the letter", zh: "重新寄信" },
              { en: "verify your identity over the phone", zh: "电话验证身份" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That is okay. I can mail it again or we can just do the verification right now on this call. I will ask you some questions about your taxes and personal details.",
                textZh: "没事。我可以再寄一次或者我们现在电话上就做验证。我会问你一些关于税务和个人信息的问题。",
                actionHint: "do the verification 意思是进行验证",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Let us do it over the phone now. How long after verification will I get my refund?",
            textZh: "那现在电话验证吧。验证后多久能收到退税？",
            casualVersion: "Let us just do it now. How soon will I get the money after that?",
          },
          {
            speaker: "them",
            role: "IRS客服",
            textEn:
              "Once your identity is verified, your refund should be processed within six to nine weeks. If you chose direct deposit, it will go straight to your bank account. If you opted for a check, add a few extra days for mailing.",
            textZh:
              "身份验证通过后，退税应在6到9周内处理。如果您选了直接存款，会直接打到您的银行账户。如果选了支票，邮寄需要多几天。",
            keyPhrases: [
              { en: "direct deposit", zh: "直接存款" },
              { en: "opted for a check", zh: "选择支票" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "After we confirm your identity, figure about six to nine weeks. If it is going to your bank, that is the fastest. A paper check takes a bit longer because of the mail.",
                textZh: "确认身份后大约六到九周。如果打到银行账户最快。纸质支票因为邮寄会慢一点。",
                actionHint: "paper check 指纸质支票",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "amended",
        titleZh: "修正报税退税",
        titleEn: "Amended Return Refund",
        description: "提交修正报税表后查询退税",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I filed an amended return three months ago. When should I expect my additional refund?",
            textZh: "我三个月前提交了修正报税表。什么时候能收到追加退税？",
            casualVersion: "I amended my return three months ago. Where is my refund?",
          },
          {
            speaker: "them",
            role: "IRS客服",
            textEn:
              "Amended returns take significantly longer to process — typically sixteen to twenty weeks. You can check the status using the Where is My Amended Return tool on irs.gov. Can you give me the tax year of your amended return?",
            textZh:
              '修正报税表处理时间明显更长——通常16到20周。您可以在irs.gov上用"我的修正报税在哪"工具查询状态。能告诉我修正的是哪个税务年度吗？',
            keyPhrases: [
              { en: "amended return", zh: "修正报税表" },
              { en: "sixteen to twenty weeks", zh: "16到20周" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Amended returns take way longer — like four to five months. There is a tracking tool on the IRS website. Which year did you amend?",
                textZh: "修正申报时间长得多——大约四五个月。IRS网站上有追踪工具。你修正的是哪一年？",
                actionHint: "take way longer 意思是时间长得多",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "It is for tax year 2024. I forgot to claim a tax credit for education expenses.",
            textZh: "是2024年的。我忘了申报教育费用的税收抵免。",
            casualVersion: "Twenty twenty-four. I missed an education credit.",
          },
          {
            speaker: "them",
            role: "IRS客服",
            textEn:
              "Let me check. I see your amended return was received and is currently in the initial review stage. It has not been assigned to an examiner yet. At this point, you just need to wait — there is no way to expedite an amended return.",
            textZh:
              "让我查一下。我看到您的修正申报已收到，目前在初步审查阶段。还没分配给审查员。目前只能等——修正申报无法加急。",
            keyPhrases: [
              { en: "initial review stage", zh: "初步审查阶段" },
              { en: "assigned to an examiner", zh: "分配给审查员" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Okay, I can see it was received. It is in the early review phase but nobody has picked it up yet. Unfortunately, there is not really a way to speed these up.",
                textZh: "好的，我看到收到了。还在早期审查阶段，还没人处理。很遗憾这种没办法加快。",
                actionHint: "picked it up 意思是接手处理",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there anything else I should do in the meantime?",
            textZh: "在此期间我还需要做什么吗？",
            casualVersion: "Anything I should do while I wait?",
          },
          {
            speaker: "them",
            role: "IRS客服",
            textEn:
              "Just make sure your contact information is current. If the examiner needs additional documentation, they will send a letter. Do not file a duplicate amended return — that will actually slow things down. Check the status every few weeks online.",
            textZh:
              "确保您的联系信息是最新的就好。如果审查员需要补充材料会寄信通知。不要重复提交修正申报——那实际上会拖慢进度。每隔几周在网上查查状态就行。",
            keyPhrases: [
              { en: "duplicate amended return", zh: "重复提交修正申报" },
              { en: "contact information", zh: "联系信息" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Keep your info up to date in case they need to reach you. And whatever you do, do not send in another amended return — that will mess things up. Just check the website now and then.",
                textZh: "保持信息最新以防他们需要联系你。千万不要再交一份修正申报——那会搞乱的。偶尔上网查一下就行。",
                actionHint: "mess things up 意思是搞乱",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Thank you for your help.",
            textZh: "明白了。谢谢你的帮助。",
            casualVersion: "Okay, thanks a lot.",
          },
          {
            speaker: "them",
            role: "IRS客服",
            textEn:
              "You are welcome. If you have any other questions, you can call us back or visit irs.gov. Have a good day.",
            textZh: "不客气。如果还有其他问题，可以再打电话或访问irs.gov。祝您愉快。",
            keyPhrases: [
              { en: "call us back", zh: "再打电话给我们" },
              { en: "have a good day", zh: "祝您愉快" },
            ],
            alternativeExpressions: [
              {
                textEn: "No problem. Feel free to call again or check the website. Take care.",
                textZh: "没问题。随时再打电话或上网站查。保重。",
                actionHint: "take care 是日常告别用语",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 7. 车辆注册 ====================
  {
    id: "government-vehicle-registration",
    category: "government",
    titleZh: "车辆注册",
    titleEn: "Vehicle Registration",
    description: "在DMV办理新车或二手车的注册手续",
    otherRole: "DMV职员",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "新车注册",
        titleEn: "New Vehicle Registration",
        description: "购买新车后到DMV办理注册",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I just bought a new car and need to register it. What do I need?",
            textZh: "我刚买了一辆新车，需要注册。需要什么材料？",
            casualVersion: "Just got a new car. What do I need to get it registered?",
          },
          {
            speaker: "them",
            role: "DMV职员",
            textEn:
              "Congratulations on the new car. You will need the title or manufacturer statement of origin from the dealer, proof of insurance, a valid photo ID, and a completed registration application. Did you buy from a dealership or a private seller?",
            textZh:
              "恭喜买了新车。您需要经销商提供的车辆产权证明或制造商原产证明、保险证明、有效带照片证件，以及填好的注册申请表。您是从经销商还是私人卖家买的？",
            keyPhrases: [
              { en: "title", zh: "车辆产权证明" },
              { en: "proof of insurance", zh: "保险证明" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Nice! Bring the title from the dealer, your insurance card, your ID, and fill out the registration form. Was it from a dealership?",
                textZh: "不错！带上经销商给的产权证、保险卡、身份证，填好注册表。是从经销商买的吗？",
                actionHint: "insurance card 指保险证明卡",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I bought it from a dealership. They gave me a stack of paperwork.",
            textZh: "从经销商买的。他们给了我一堆文件。",
            casualVersion: "From a dealer. They gave me a ton of papers.",
          },
          {
            speaker: "them",
            role: "DMV职员",
            textEn:
              "Good, the dealership usually handles most of the paperwork. Let me see what you have. I will need the bill of sale, the title application, and your emissions test results if applicable in your county.",
            textZh:
              "好的，经销商通常会处理大部分文件。让我看看您有什么。我需要购车发票、产权申请表，如果您所在的县要求的话还需要排放检测结果。",
            keyPhrases: [
              { en: "bill of sale", zh: "购车发票" },
              { en: "emissions test", zh: "排放检测" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That is good — dealers usually take care of most of it. Let me take a look. I need the sales receipt, title form, and depending on where you live, you might need a smog check.",
                textZh:
                  "那就好——经销商通常处理大部分。让我看看。我需要销售收据、产权表，根据你住哪里可能还要尾气检测。",
                actionHint: "smog check 和 emissions test 意思一样",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How much is the registration fee?",
            textZh: "注册费多少钱？",
            casualVersion: "How much is it going to cost?",
          },
          {
            speaker: "them",
            role: "DMV职员",
            textEn:
              "The registration fee depends on the vehicle type and value. For a new car, you are typically looking at the registration fee plus sales tax. In our state, the base registration is around fifty dollars, but with taxes and other fees, it can be several hundred dollars. I can give you the exact amount once I process the paperwork.",
            textZh:
              "注册费取决于车辆类型和价值。新车的话，通常包括注册费加销售税。在我们州，基本注册费大约50美元，但加上税和其他费用可能要几百美元。处理完文件后我能给您确切金额。",
            keyPhrases: [
              { en: "sales tax", zh: "销售税" },
              { en: "base registration", zh: "基本注册费" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It depends on what the car is worth. The registration itself is like fifty bucks, but once you add sales tax and all the little fees, it adds up to a few hundred. Let me run it and I will tell you the exact number.",
                textZh:
                  "取决于车值多少钱。注册本身大约50块，但加上销售税和各种小费用，加起来几百块。我算一下给你确切数字。",
                actionHint: "run it 意思是计算",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Will I get my license plates today?",
            textZh: "今天能拿到车牌吗？",
            casualVersion: "Do I get my plates today?",
          },
          {
            speaker: "them",
            role: "DMV职员",
            textEn:
              "You will receive temporary plates or a temporary registration tag today that is valid for thirty days. Your permanent plates will be mailed to you within two to three weeks. You can also order personalized plates for an additional fee if you are interested.",
            textZh:
              "今天您会拿到临时车牌或临时注册标签，有效期30天。正式车牌会在两到三周内邮寄给您。如果感兴趣，也可以额外付费定制个性化车牌。",
            keyPhrases: [
              { en: "temporary plates", zh: "临时车牌" },
              { en: "personalized plates", zh: "个性化车牌" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You will get a temp tag today — good for thirty days. Real plates come in the mail in a couple weeks. Want custom plates? That is extra but people love them.",
                textZh: "今天给你一个临时标签——有效30天。正式车牌几周后寄到。要定制车牌吗？要加钱但很多人喜欢。",
                actionHint: "temp tag 是 temporary tag 的口语说法",
                frequency: "common",
              },
            ],
            culturalNote:
              "美国各州车辆注册规定不同。有些州要求前后两块车牌，有些只要后面一块。注册后通常每年需要续期，部分州还要求年检。",
          },
        ],
      },
      {
        id: "used-car",
        titleZh: "二手车过户",
        titleEn: "Used Car Transfer",
        description: "从私人卖家购买二手车后办理过户",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I bought a used car from a private seller. How do I transfer the title to my name?",
            textZh: "我从私人卖家买了一辆二手车。怎么把产权过户到我名下？",
            casualVersion: "I bought a car off someone. How do I get it in my name?",
          },
          {
            speaker: "them",
            role: "DMV职员",
            textEn:
              "You will need the signed title from the seller with the odometer reading, a bill of sale showing the purchase price, your valid ID, proof of insurance, and a completed title transfer application. Did the seller sign the back of the title?",
            textZh:
              "您需要卖家签字的产权证（含里程表读数）、显示购买价格的购车发票、有效证件、保险证明，以及填好的过户申请表。卖家在产权证背面签字了吗？",
            keyPhrases: [
              { en: "odometer reading", zh: "里程表读数" },
              { en: "title transfer", zh: "产权过户" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Bring the title signed by the seller — make sure the mileage is on there — plus a receipt, your ID, insurance, and the transfer form. Did they sign the title over to you?",
                textZh: "带卖家签了字的产权证——确保上面有里程数——加上收据、证件、保险和过户表。他们签了产权转让吗？",
                actionHint: "sign over 意思是签字转让",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, the seller signed it. Do I also need a smog check?",
            textZh: "是的，卖家签了。还需要尾气检测吗？",
            casualVersion: "Yeah, they signed it. Do I need a smog test?",
          },
          {
            speaker: "them",
            role: "DMV职员",
            textEn:
              "In our state, the seller is responsible for providing a valid smog certificate at the time of sale. If the car is less than four years old, it may be exempt. Do you have the smog certificate from the seller?",
            textZh:
              "在我们州，卖家有责任在出售时提供有效的尾气检测证书。如果车龄不到四年可能免检。您有卖家的尾气检测证书吗？",
            keyPhrases: [
              { en: "smog certificate", zh: "尾气检测证书" },
              { en: "exempt", zh: "免检" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The seller should have given you a smog cert. If the car is pretty new — under four years — you might not need one. Did they give you one?",
                textZh: "卖家应该给你尾气检测证明。如果车比较新——不到四年——可能不用。他们给你了吗？",
                actionHint: "smog cert 是 smog certificate 的缩写",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "The car is a 2019 model, so I think it might be exempt.",
            textZh: "车是2019年的，我觉得可能免检。",
            casualVersion: "It is a 2019. I think it is too new to need one.",
          },
          {
            speaker: "them",
            role: "DMV职员",
            textEn:
              "Let me check. A 2019 would need a smog check since it is over four years old now. The seller should have provided it, but if not, you will need to get one before we can complete the transfer. There are smog stations nearby if you need one.",
            textZh:
              "让我查一下。2019年的车现在超过四年了，需要做尾气检测。卖家应该提供的，如果没有，您需要先做一个才能完成过户。附近有尾气检测站如果您需要的话。",
            keyPhrases: [
              { en: "smog stations", zh: "尾气检测站" },
              { en: "complete the transfer", zh: "完成过户" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Actually a 2019 is over the four-year mark now, so it does need a smog check. If the seller did not give you one, just hit up a smog place before coming back. There are a few around here.",
                textZh:
                  "其实2019年的已经超过四年了，需要尾气检测。如果卖家没给你，回来之前去一个检测站就行。附近有几家。",
                actionHint: "hit up 意思是去一趟",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How much is the transfer fee?",
            textZh: "过户费多少钱？",
            casualVersion: "What is the fee for the transfer?",
          },
          {
            speaker: "them",
            role: "DMV职员",
            textEn:
              "The title transfer fee is fifteen dollars, plus registration fees and use tax based on the purchase price. Use tax is similar to sales tax — it is calculated on the price you paid for the vehicle. Bring the bill of sale so we can calculate the exact amount.",
            textZh:
              "过户费是15美元，加上注册费和基于购买价格的使用税。使用税类似于销售税——按您支付的车价计算。带上购车发票以便我们计算确切金额。",
            keyPhrases: [
              { en: "use tax", zh: "使用税" },
              { en: "purchase price", zh: "购买价格" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Fifteen bucks for the transfer itself. Then there is registration and a use tax based on what you paid. It is like sales tax. Bring your receipt so I can figure out the total.",
                textZh: "过户本身15块。然后有注册费和按你付的价格算的使用税。类似销售税。带上收据我算总价。",
                actionHint: "figure out 意思是计算/弄清楚",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 8. 车辆年检 ====================
  {
    id: "government-vehicle-inspection",
    category: "government",
    titleZh: "车辆年检",
    titleEn: "Vehicle Inspection",
    description: "到检测站进行车辆年度检查",
    otherRole: "检测员",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "标准年检",
        titleEn: "Standard Inspection",
        description: "车辆年检的基本流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to get my car inspected. My registration renewal requires it.",
            textZh: "你好，我需要给车做年检。注册续期要求的。",
            casualVersion: "Hey, I need a car inspection for my registration.",
          },
          {
            speaker: "them",
            role: "检测员",
            textEn: "Sure thing. Is this a safety inspection, an emissions test, or both? Some counties require both.",
            textZh: "没问题。是安全检查、排放检测还是两个都要？有些县要求两项都做。",
            keyPhrases: [
              { en: "safety inspection", zh: "安全检查" },
              { en: "emissions test", zh: "排放检测" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No problem. Do you need the safety check, the smog test, or the whole deal? Depends on where you live.",
                textZh: "没问题。你需要安全检查、尾气检测，还是全套？取决于你住哪里。",
                actionHint: "the whole deal 意思是全套",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I think I need both. How long does it take?",
            textZh: "我觉得两个都要。需要多长时间？",
            casualVersion: "Probably both. How long will it take?",
          },
          {
            speaker: "them",
            role: "检测员",
            textEn:
              "The whole thing usually takes about thirty to forty-five minutes. We will check your brakes, tires, lights, horn, windshield wipers, and then run the emissions diagnostic. Just pull your car into bay three.",
            textZh:
              "整个过程通常需要30到45分钟。我们会检查刹车、轮胎、灯光、喇叭、雨刷，然后做排放检测。把车开到3号检测位就行。",
            keyPhrases: [
              { en: "brakes", zh: "刹车" },
              { en: "emissions diagnostic", zh: "排放诊断" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "About half an hour to forty-five minutes. We go through brakes, tires, all your lights, horn, wipers, and then hook it up for emissions. Go ahead and drive into bay three.",
                textZh:
                  "大约半小时到45分钟。我们检查刹车、轮胎、所有灯、喇叭、雨刷，然后接上做排放检测。开到3号位就行。",
                actionHint: "hook it up 意思是接上检测设备",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How much does the inspection cost?",
            textZh: "检测费多少钱？",
            casualVersion: "What is the price?",
          },
          {
            speaker: "them",
            role: "检测员",
            textEn:
              "The safety inspection is twenty-five dollars and the emissions test is another thirty. So fifty-five total. If your vehicle fails, we will let you know what needs to be fixed and you can come back for a free retest within thirty days.",
            textZh:
              "安全检查25美元，排放检测再加30美元。总共55美元。如果没通过，我们会告诉您需要修什么，30天内可以免费复检。",
            keyPhrases: [
              { en: "free retest", zh: "免费复检" },
              { en: "fails", zh: "没通过" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Twenty-five for safety and thirty for emissions — fifty-five total. If it does not pass, we tell you what is wrong and you get a free recheck within a month.",
                textZh: "安全检查25，排放30——总共55。如果没过，我们告诉你哪里有问题，一个月内免费复查。",
                actionHint: "recheck 和 retest 意思一样",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What are the most common reasons a car fails inspection?",
            textZh: "车辆年检不通过最常见的原因是什么？",
            casualVersion: "What usually makes cars fail?",
          },
          {
            speaker: "them",
            role: "检测员",
            textEn:
              "The most common failures are a check engine light being on, worn brake pads, burnt-out headlights or taillights, cracked windshield, and expired or worn tires. If your check engine light is on, that is an automatic fail for emissions.",
            textZh:
              "最常见的不通过原因是发动机故障灯亮、刹车片磨损、大灯或尾灯烧了、挡风玻璃裂了、轮胎过期或磨损。如果发动机故障灯亮着，排放检测自动不通过。",
            keyPhrases: [
              { en: "check engine light", zh: "发动机故障灯" },
              { en: "worn brake pads", zh: "磨损的刹车片" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Usually it is the check engine light, bad brakes, busted lights, cracked windshield, or bald tires. If that engine light is on, you automatically fail the smog part.",
                textZh: "通常是发动机灯亮、刹车不行、灯坏了、挡风裂了或轮胎光了。如果发动机灯亮着，尾气检测自动不过。",
                actionHint: "bald tires 指磨光的轮胎",
                frequency: "common",
              },
            ],
            culturalNote:
              "美国不同州的年检要求差异很大。有些州（如德州）要求年度安全检查，有些州（如加州）只要求排放检测，还有些州完全不要求年检。",
          },
        ],
      },
      {
        id: "failed",
        titleZh: "年检未通过",
        titleEn: "Failed Inspection",
        description: "车辆年检不通过后的处理流程",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "My car did not pass the inspection. What do I do now?",
            textZh: "我的车没通过年检。现在怎么办？",
            casualVersion: "My car failed. Now what?",
          },
          {
            speaker: "them",
            role: "检测员",
            textEn:
              "Your vehicle failed on two items — the left brake light is burnt out and your front tires are below the minimum tread depth. Here is the inspection report listing everything. Once you get those fixed, bring the car back for a free retest.",
            textZh:
              "您的车有两项没通过——左刹车灯烧了，前轮胎低于最低胎纹深度。这是检测报告列出了所有问题。修好后把车开回来免费复检。",
            keyPhrases: [
              { en: "brake light", zh: "刹车灯" },
              { en: "minimum tread depth", zh: "最低胎纹深度" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It failed on two things — a busted brake light on the left and your front tires are too worn down. Here is the report. Fix those and come back — the recheck is free.",
                textZh: "两项没过——左边刹车灯坏了，前轮胎磨损太严重。这是报告。修好再来——复检免费。",
                actionHint: "worn down 意思是磨损严重",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How long do I have to get it fixed and come back?",
            textZh: "我有多长时间修好再回来？",
            casualVersion: "How much time do I have?",
          },
          {
            speaker: "them",
            role: "检测员",
            textEn:
              "You have thirty days from today to get the repairs done and come back for the free retest. After thirty days, you would have to pay for a new full inspection. I would suggest getting it done sooner rather than later since you cannot legally drive with failed inspection past your renewal date.",
            textZh:
              "从今天起30天内修好并回来免费复检。超过30天就要重新付费做全套检测。建议尽快修好，因为过了续期日期驾驶没有通过年检的车是违法的。",
            keyPhrases: [
              { en: "free retest", zh: "免费复检" },
              { en: "renewal date", zh: "续期日期" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Thirty days for the free redo. After that, you pay full price again. Do not wait too long — driving without a valid inspection past your deadline can get you a ticket.",
                textZh: "30天内免费重做。之后要重新全价。别拖太久——过了截止日期开没过年检的车会吃罚单。",
                actionHint: "get you a ticket 意思是被开罚单",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I fix the brake light myself or do I need to go to a mechanic?",
            textZh: "刹车灯我能自己换还是必须去修车店？",
            casualVersion: "Can I do the brake light myself?",
          },
          {
            speaker: "them",
            role: "检测员",
            textEn:
              "A brake light bulb is an easy fix — you can buy one at any auto parts store for a few dollars and replace it yourself. The tires, though, you will need to go to a tire shop. Make sure the new tires meet the minimum tread depth of two thirty-seconds of an inch.",
            textZh:
              "刹车灯泡很好换——在任何汽车零件店花几块钱就能买到自己换。但轮胎需要去轮胎店。确保新轮胎的胎纹深度不低于2/32英寸。",
            keyPhrases: [
              { en: "auto parts store", zh: "汽车零件店" },
              { en: "tire shop", zh: "轮胎店" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The light is super easy — grab a bulb at AutoZone or wherever for a couple bucks and swap it out. For the tires, you will need a tire place. Just make sure the tread is thick enough.",
                textZh: "灯非常简单——去AutoZone或哪里买个灯泡几块钱自己换就行。轮胎得去轮胎店。确保胎纹够厚就行。",
                actionHint: "swap it out 意思是替换",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "When I come back, do you inspect the whole car again or just the failed items?",
            textZh: "回来的时候是重新检查全车还是只查不合格项目？",
            casualVersion: "Do you check everything again or just the stuff that failed?",
          },
          {
            speaker: "them",
            role: "检测员",
            textEn:
              "For the free retest, we only check the items that failed. It should only take about ten minutes. Just bring the original inspection report with you so we know what to look at.",
            textZh: "免费复检只查不合格项目。大约只需要10分钟。带上原来的检测报告，这样我们知道查什么。",
            keyPhrases: [
              { en: "original inspection report", zh: "原始检测报告" },
              { en: "items that failed", zh: "不合格项目" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Just the stuff that did not pass — way quicker, like ten minutes. Bring your report so we can find it in the system.",
                textZh: "只查没过的项目——快很多，大约十分钟。带上报告以便我们在系统里找到。",
                actionHint: "way quicker 意思是快很多",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 9. 停车罚单 ====================
  {
    id: "government-parking-ticket",
    category: "government",
    titleZh: "停车罚单",
    titleEn: "Parking Ticket",
    description: "处理停车罚单，了解缴费和申诉流程",
    otherRole: "交通执法",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "缴纳罚款",
        titleEn: "Paying the Fine",
        description: "收到停车罚单后缴纳罚款",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I got a parking ticket yesterday. How do I pay it?",
            textZh: "我昨天收到了一张停车罚单。怎么交罚款？",
            casualVersion: "I got a ticket. How do I pay?",
          },
          {
            speaker: "them",
            role: "交通执法",
            textEn:
              "You can pay online at our city website, by mail with a check, or in person at the traffic violations bureau. The fine amount and due date are on the ticket. Do you have it with you?",
            textZh:
              "您可以在我们的市政网站上在线支付，邮寄支票，或者亲自到交通违规局缴纳。罚款金额和截止日期在罚单上。您带着罚单吗？",
            keyPhrases: [
              { en: "traffic violations bureau", zh: "交通违规局" },
              { en: "due date", zh: "截止日期" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You can pay it online, mail in a check, or come to our office. Check the ticket for how much and when it is due. Got it on you?",
                textZh: "可以网上交、寄支票或来我们办公室。看看罚单上多少钱什么时候到期。带着吗？",
                actionHint: "got it on you 意思是带在身上吗",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes. It says sixty-five dollars for an expired meter. When is the deadline?",
            textZh: "带着。上面写的咪表过期罚65美元。截止日期是什么时候？",
            casualVersion: "Yeah, sixty-five bucks for an expired meter. When do I have to pay?",
          },
          {
            speaker: "them",
            role: "交通执法",
            textEn:
              "You have thirty days from the date of the citation to pay. If you pay within ten days, some cities offer a reduced fine. After thirty days, the amount increases with late fees. If you do not pay at all, it could go to collections and affect your credit.",
            textZh:
              "从开罚单之日起30天内缴纳。如果10天内缴纳，有些城市提供减免。超过30天，会因滞纳金而增加金额。如果完全不交，可能被送到催收机构并影响信用。",
            keyPhrases: [
              { en: "late fees", zh: "滞纳金" },
              { en: "go to collections", zh: "被送到催收机构" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Thirty days to pay. If you get it done in ten, you might save some money. Wait too long and they tack on late fees. Ignore it completely and it hits your credit score.",
                textZh: "30天内缴。10天内交的话可能省点钱。拖太久会加滞纳金。完全不理的话会影响信用分。",
                actionHint: "tack on 意思是加上/附加",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I would like to pay online. What information do I need?",
            textZh: "我想网上支付。需要什么信息？",
            casualVersion: "I will pay online. What do I need?",
          },
          {
            speaker: "them",
            role: "交通执法",
            textEn:
              "You will need the citation number from your ticket and your license plate number. The website accepts credit cards, debit cards, and electronic checks. There is a small convenience fee for online payments, usually about two to three dollars.",
            textZh:
              "您需要罚单上的违规编号和您的车牌号。网站接受信用卡、借记卡和电子支票。在线支付有少量手续费，通常2到3美元。",
            keyPhrases: [
              { en: "citation number", zh: "违规编号" },
              { en: "convenience fee", zh: "手续费" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Just grab the number off the ticket and your plate number. You can use a card or e-check. There is a small processing fee — a couple bucks.",
                textZh: "拿到罚单上的编号和车牌号就行。可以刷卡或电子支票。有一小笔手续费——几块钱。",
                actionHint: "grab the number off 意思是找到上面的编号",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What if I think the ticket was given unfairly? Can I contest it?",
            textZh: "如果我觉得罚单开得不合理怎么办？可以申诉吗？",
            casualVersion: "What if I think it is unfair? Can I fight it?",
          },
          {
            speaker: "them",
            role: "交通执法",
            textEn:
              "Yes, you have the right to contest it. You can request a hearing within thirty days. Fill out the appeal form on the back of the ticket or submit one online. Bring any evidence — photos, receipts, or witness statements — to support your case.",
            textZh:
              "可以，您有权申诉。在30天内申请听证会。填写罚单背面的申诉表或在网上提交。带上任何证据——照片、收据或证人陈述——来支持您的案件。",
            keyPhrases: [
              { en: "contest it", zh: "申诉" },
              { en: "request a hearing", zh: "申请听证会" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Absolutely. You can fight it — just request a hearing within thirty days. Fill out the appeal form and bring proof, like photos or anything that backs you up.",
                textZh: "当然可以。你可以申诉——30天内申请听证会。填申诉表，带上证据，比如照片或任何能支持你的东西。",
                actionHint: "backs you up 意思是支持你",
                frequency: "common",
              },
            ],
            culturalNote:
              "美国停车罚单的金额因城市而异，从25美元到几百美元不等。大城市罚款通常更高。很多人不知道停车罚单是可以申诉的，成功率其实不低。",
          },
        ],
      },
      {
        id: "appeal",
        titleZh: "罚单申诉",
        titleEn: "Ticket Appeal",
        description: "对不合理罚单提出申诉",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "I am here to appeal my parking ticket. The sign was blocked by a tree branch and I could not see it.",
            textZh: "我来申诉停车罚单。标志被树枝挡住了我看不到。",
            casualVersion: "I want to fight my ticket. The sign was hidden behind a tree.",
          },
          {
            speaker: "them",
            role: "交通执法",
            textEn:
              "I understand. Do you have any evidence to support your claim? Photos of the obstructed sign would be very helpful. We also accept statements from witnesses who were with you at the time.",
            textZh: "我理解。您有证据支持您的说法吗？被遮挡标志的照片会很有帮助。我们也接受当时在您身边的证人陈述。",
            keyPhrases: [
              { en: "obstructed sign", zh: "被遮挡的标志" },
              { en: "statements from witnesses", zh: "证人陈述" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Okay, I hear you. Do you have pictures of the blocked sign? That would really help your case. If someone was with you who can back you up, that works too.",
                textZh: "好的，我听到了。有被挡住的标志的照片吗？对你的案子很有帮助。如果有人在场能作证也行。",
                actionHint: "I hear you 表示我理解你的情况",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I took photos right after I found the ticket. Here they are on my phone.",
            textZh: "有，我发现罚单后马上拍了照。在我手机上。",
            casualVersion: "Yeah, I got pictures right when I saw the ticket. Here.",
          },
          {
            speaker: "them",
            role: "交通执法",
            textEn:
              "These are clear photos showing the sign is indeed obstructed. I will attach these to your appeal file. The hearing officer will review your case and you should receive a decision by mail within two to three weeks.",
            textZh:
              "这些照片很清楚地显示标志确实被遮挡了。我会把这些附在您的申诉档案中。听证官会审查您的案件，您应该在两到三周内通过邮件收到裁决。",
            keyPhrases: [
              { en: "appeal file", zh: "申诉档案" },
              { en: "hearing officer", zh: "听证官" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, you can clearly see the sign is blocked. I will add these to your file. Someone will look at it and you will get the decision in the mail in a couple weeks.",
                textZh: "是的，能清楚看到标志被挡住了。我会加到你的档案里。有人会审查，几周内邮件通知你结果。",
                actionHint: "a couple weeks 意思是几周",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "If the appeal is denied, do I still have options?",
            textZh: "如果申诉被驳回，我还有其他选择吗？",
            casualVersion: "What if they say no?",
          },
          {
            speaker: "them",
            role: "交通执法",
            textEn:
              "If your initial appeal is denied, you can request an in-person hearing before an administrative law judge. That is your final opportunity to present your case. If that is also denied, you would need to pay the fine to avoid further penalties.",
            textZh:
              "如果初次申诉被驳回，您可以要求在行政法官面前进行当面听证。那是您陈述案件的最后机会。如果也被驳回，您需要缴纳罚款以避免进一步处罚。",
            keyPhrases: [
              { en: "in-person hearing", zh: "当面听证" },
              { en: "administrative law judge", zh: "行政法官" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You can ask for a face-to-face hearing with a judge. That is your last shot. If they still say no, then you have got to pay up or the penalties keep growing.",
                textZh: "可以要求和法官面对面听证。那是最后的机会。如果还是不行，就得交钱不然罚款会越来越多。",
                actionHint: "last shot 意思是最后的机会",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you for explaining everything. I hope the photos will be enough.",
            textZh: "谢谢你解释这些。希望照片就够了。",
            casualVersion: "Thanks. Hopefully the pictures will do it.",
          },
          {
            speaker: "them",
            role: "交通执法",
            textEn:
              "Your evidence looks strong. Cases with photographic proof of obstructed signs have a high success rate. You will hear back soon. Good luck.",
            textZh: "您的证据看起来很有力。有照片证明标志被遮挡的案件成功率很高。您很快会收到回复。祝好运。",
            keyPhrases: [
              { en: "photographic proof", zh: "照片证据" },
              { en: "high success rate", zh: "高成功率" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Honestly, your case looks pretty good. When you have got photos, your chances are way better. We will be in touch. Good luck!",
                textZh: "说实话你的案子看起来挺好的。有照片的话胜算大很多。我们会联系你。祝好运！",
                actionHint: "we will be in touch 意思是我们会联系你",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 10. 交通法庭 ====================
  {
    id: "government-traffic-court",
    category: "government",
    titleZh: "交通法庭",
    titleEn: "Traffic Court",
    description: "因交通违规出庭，了解法庭流程",
    otherRole: "法官",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "出庭应诉",
        titleEn: "Court Appearance",
        description: "因超速罚单出庭的基本流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Good morning, Your Honor. I am here regarding a speeding ticket I received last month.",
            textZh: "法官大人早上好。我是因为上个月收到的超速罚单来的。",
            casualVersion: "Good morning, Your Honor. I am here about a speeding ticket.",
          },
          {
            speaker: "them",
            role: "法官",
            textEn:
              "Good morning. I have your case file here. You were cited for doing fifty in a thirty-five-mile-per-hour zone. How do you plead — guilty, not guilty, or no contest?",
            textZh:
              "早上好。您的案件材料在这里。您被记录在35英里限速区开到了50英里。您怎么答辩——有罪、无罪还是不抗辩？",
            keyPhrases: [
              { en: "how do you plead", zh: "您怎么答辩" },
              { en: "no contest", zh: "不抗辩" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Morning. According to the citation, you were going fifty in a thirty-five zone. Are you pleading guilty, not guilty, or no contest?",
                textZh: "早。根据罚单，你在35英里限速区开到了50英里。你要认罪、不认罪还是不抗辩？",
                actionHint: "according to the citation 意思是根据罚单",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I would like to plead not guilty, Your Honor. I believe the speed reading was inaccurate.",
            textZh: "法官大人，我想答辩无罪。我认为测速读数不准确。",
            casualVersion: "Not guilty, Your Honor. I think the speed was wrong.",
          },
          {
            speaker: "them",
            role: "法官",
            textEn:
              "Very well. You have the right to present your case. Do you have any evidence or witnesses? The officer who issued the citation is also present if you would like to cross-examine.",
            textZh: "好的。您有权陈述您的案情。您有证据或证人吗？开罚单的警察也在场，如果您想交叉询问的话。",
            keyPhrases: [
              { en: "present your case", zh: "陈述案情" },
              { en: "cross-examine", zh: "交叉询问" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Alright. Go ahead and tell me your side. Do you have anything to back it up? The officer is here too if you want to ask them questions.",
                textZh: "好的。说说你这边的情况。有什么能支持你的吗？警察也在这里如果你想问他们问题。",
                actionHint: "your side 意思是你这边的说法",
                frequency: "common",
              },
            ],
            culturalNote:
              "在美国交通法庭，称呼法官为Your Honor（法官大人）。出庭时应穿着得体，态度尊重。即使不认罪，也不要与法官争辩。",
          },
          {
            speaker: "you",
            textEn: "I have a dashcam recording showing my speedometer at the time. May I show it to the court?",
            textZh: "我有行车记录仪录像显示当时的速度表读数。可以展示给法庭看吗？",
            casualVersion: "I have dashcam footage showing my speed. Can I show it?",
          },
          {
            speaker: "them",
            role: "法官",
            textEn:
              "Yes, you may present that as evidence. Please bring it forward. I will also hear from the officer. After reviewing all the evidence, I will make my ruling. If found guilty, the fine is two hundred dollars plus court costs, or you may be eligible for traffic school to keep it off your record.",
            textZh:
              "可以，您可以作为证据提交。请拿上来。我也会听取警察的陈述。审查所有证据后我会做出裁决。如果判定有罪，罚款200美元加上法庭费用，或者您可能有资格上交通安全课来避免记录在案。",
            keyPhrases: [
              { en: "make my ruling", zh: "做出裁决" },
              { en: "traffic school", zh: "交通安全课" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure, go ahead and show me. I will hear from both sides and then decide. If you are found guilty, it is a two-hundred-dollar fine plus fees. But you might be able to do traffic school to keep it clean.",
                textZh:
                  "好的，给我看。我会听双方的然后决定。如果你有罪，200块罚款加费用。但你可能可以上交通安全课来保持记录干净。",
                actionHint: "keep it clean 意思是保持记录无污点",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "plea-bargain",
        titleZh: "认罪协商",
        titleEn: "Plea Negotiation",
        description: "与检察官协商减轻处罚",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "The prosecutor offered to reduce the charge to a non-moving violation. Should I take the deal?",
            textZh: "检察官提出把指控降为非移动违规。我应该接受吗？",
            casualVersion: "They offered to drop it to a non-moving violation. Should I take it?",
          },
          {
            speaker: "them",
            role: "法官",
            textEn:
              "I cannot advise you on whether to accept, but I can explain the difference. A non-moving violation does not add points to your license and typically does not affect your insurance. The fine may be the same or slightly reduced. Do you understand the terms of the offer?",
            textZh:
              "我不能建议您是否接受，但可以解释区别。非移动违规不会给您的驾照加分，通常不影响保险。罚款可能一样或略减。您理解协议条款吗？",
            keyPhrases: [
              { en: "non-moving violation", zh: "非移动违规" },
              { en: "points to your license", zh: "驾照扣分" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I can not tell you what to do, but here is the deal — a non-moving violation means no points on your license and your insurance probably will not go up. The fine might stay the same. Clear on what they are offering?",
                textZh:
                  "我不能告诉你怎么做，但情况是——非移动违规意味着驾照不扣分，保险可能也不会涨。罚款可能不变。清楚他们提供的是什么吗？",
                actionHint: "here is the deal 意思是情况是这样的",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I understand. I would like to accept the reduced charge.",
            textZh: "是的，我理解。我想接受降低的指控。",
            casualVersion: "Yeah, I get it. I will take the deal.",
          },
          {
            speaker: "them",
            role: "法官",
            textEn:
              "Very well. By accepting this plea, you agree to plead guilty to a non-moving violation. The fine is one hundred and fifty dollars plus thirty-five dollars in court costs, due within sixty days. No points will be added to your driving record. Do you accept these terms?",
            textZh:
              "好的。接受此协议意味着您承认非移动违规。罚款150美元加35美元法庭费用，60天内缴纳。不会在驾驶记录上加分。您接受这些条款吗？",
            keyPhrases: [
              { en: "accept this plea", zh: "接受此协议" },
              { en: "court costs", zh: "法庭费用" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Okay. So you are pleading guilty to a non-moving violation. That is a hundred and fifty dollar fine and thirty-five in court fees, paid in sixty days. No points. Sound good?",
                textZh: "好的。你认非移动违规的罪。150块罚款加35法庭费，60天内交。不扣分。可以吗？",
                actionHint: "sound good 意思是可以吗/同意吗",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, Your Honor. I accept.",
            textZh: "是的，法官大人。我接受。",
            casualVersion: "Yes, I accept.",
          },
          {
            speaker: "them",
            role: "法官",
            textEn:
              "The court accepts your plea. You may pay the fine at the clerk window on your way out or online within sixty days. This matter is now closed. You are free to go.",
            textZh: "法庭接受您的认罪。出去时可以在书记员窗口缴纳罚款，或60天内在线支付。此案现已结案。您可以走了。",
            keyPhrases: [
              { en: "clerk window", zh: "书记员窗口" },
              { en: "free to go", zh: "可以走了" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Accepted. Pay at the counter on your way out or do it online before the deadline. Case closed. You are good to go.",
                textZh: "接受了。出去时在柜台交或截止前网上交。结案。你可以走了。",
                actionHint: "you are good to go 意思是你可以走了",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you, Your Honor.",
            textZh: "谢谢法官大人。",
            casualVersion: "Thank you.",
          },
          {
            speaker: "them",
            role: "法官",
            textEn: "Drive safely. Next case, please.",
            textZh: "安全驾驶。下一个案件。",
            keyPhrases: [
              { en: "drive safely", zh: "安全驾驶" },
              { en: "next case", zh: "下一个案件" },
            ],
            alternativeExpressions: [
              {
                textEn: "Be safe out there. Alright, who is next?",
                textZh: "在外面注意安全。好的，下一位是谁？",
                actionHint: "be safe out there 是常见的告别叮嘱",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 11. 小额法庭 ====================
  {
    id: "government-small-claims",
    category: "government",
    titleZh: "小额法庭",
    titleEn: "Small Claims Court",
    description: "在小额法庭起诉或应诉，处理小金额纠纷",
    otherRole: "法院书记",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "提起诉讼",
        titleEn: "Filing a Claim",
        description: "在小额法庭提起诉讼的流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I want to file a small claims case. My landlord will not return my security deposit.",
            textZh: "我想提起小额诉讼。我的房东不退还押金。",
            casualVersion: "I need to sue my landlord for my deposit back. How do I do that?",
          },
          {
            speaker: "them",
            role: "法院书记",
            textEn:
              "Small claims court is the right place for that. In our jurisdiction, you can sue for up to ten thousand dollars. You will need to fill out a claim form and pay a filing fee. How much is the deposit you are trying to recover?",
            textZh:
              "小额法庭就是处理这种事的。在我们的管辖区，最多可以诉讼一万美元。您需要填写索赔表并缴纳立案费。您要追回的押金是多少？",
            keyPhrases: [
              { en: "filing fee", zh: "立案费" },
              { en: "jurisdiction", zh: "管辖区" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, small claims is perfect for deposit disputes. You can claim up to ten grand here. Fill out the form and pay the fee. How much are we talking about?",
                textZh: "是的，小额法庭最适合押金纠纷。这里最高可以告一万。填表交费就行。多少钱的事？",
                actionHint: "ten grand 意思是一万美元",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "The deposit was two thousand dollars. He kept it all and the apartment was in good condition.",
            textZh: "押金是2000美元。他全扣了，但公寓状况很好。",
            casualVersion: "Two thousand. He kept the whole thing but I left the place in great shape.",
          },
          {
            speaker: "them",
            role: "法院书记",
            textEn:
              "Okay. The filing fee for a claim of two thousand dollars is seventy-five dollars. You will need the defendant full name and address for service. Do you have photos of the apartment condition when you moved out and a copy of your lease?",
            textZh:
              "好的。2000美元索赔的立案费是75美元。您需要被告的全名和地址以便送达。您有搬出时公寓状况的照片和租约副本吗？",
            keyPhrases: [
              { en: "defendant", zh: "被告" },
              { en: "service", zh: "送达（法律文件）" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For two thousand, the fee is seventy-five bucks. I need the landlord full name and address so we can serve them. Do you have move-out photos and your lease?",
                textZh: "两千的话立案费75块。我需要房东全名和地址以便送达文件。你有搬出照片和租约吗？",
                actionHint: "serve them 意思是向他们送达法律文件",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I took photos and videos on move-out day. I also have the lease agreement.",
            textZh: "有，我搬出那天拍了照片和视频。租约也有。",
            casualVersion: "Yeah, I documented everything when I left. Got the lease too.",
          },
          {
            speaker: "them",
            role: "法院书记",
            textEn:
              "Great, that is strong evidence. Fill out this form with the details of your claim. Once filed, the court will set a hearing date, usually within thirty to seventy days. The defendant will be served and given time to respond.",
            textZh:
              "很好，那是很有力的证据。在这张表上填写您的索赔详情。立案后法庭会设定开庭日期，通常在30到70天内。被告会被送达并有时间回应。",
            keyPhrases: [
              { en: "hearing date", zh: "开庭日期" },
              { en: "served", zh: "被送达" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Good stuff — that will help a lot. Just fill this out and we will get it on the calendar. Expect a court date in about one to two months. We will notify the landlord.",
                textZh: "很好——那会很有帮助。填好这个我们就排上日程。大约一两个月后开庭。我们会通知房东。",
                actionHint: "get it on the calendar 意思是排上日程",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Do I need a lawyer for small claims court?",
            textZh: "小额法庭需要律师吗？",
            casualVersion: "Do I need to hire a lawyer?",
          },
          {
            speaker: "them",
            role: "法院书记",
            textEn:
              "No, small claims court is designed for people to represent themselves. In fact, in some states, lawyers are not even allowed in small claims court. Just bring your evidence organized and be ready to explain your case clearly to the judge.",
            textZh:
              "不需要，小额法庭就是为当事人自行代理设计的。实际上在一些州，小额法庭甚至不允许律师出庭。只需把证据整理好，准备好向法官清楚陈述您的案情。",
            keyPhrases: [
              { en: "represent themselves", zh: "自行代理" },
              { en: "organized evidence", zh: "整理好的证据" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Nope, the whole point of small claims is that regular people can do it on their own. Some places do not even let lawyers in. Just organize your stuff and explain what happened.",
                textZh:
                  "不用，小额法庭的目的就是普通人自己能搞定。有些地方甚至不让律师进来。把材料整理好解释清楚就行。",
                actionHint: "the whole point 意思是关键就在于",
                frequency: "common",
              },
            ],
            culturalNote:
              "美国小额法庭是解决小金额纠纷的简便途径，各州上限不同（通常3000到10000美元）。程序简单，不需要律师，费用低。常见纠纷包括押金、车祸损失、服务质量问题等。",
          },
        ],
      },
      {
        id: "hearing",
        titleZh: "出庭听证",
        titleEn: "Court Hearing",
        description: "小额法庭开庭当天的流程",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Today is my hearing. What should I do when I get into the courtroom?",
            textZh: "今天是我的开庭日。进法庭后我该怎么做？",
            casualVersion: "My case is today. What do I do in the courtroom?",
          },
          {
            speaker: "them",
            role: "法院书记",
            textEn:
              "Check in with me at the front desk first. Then take a seat in the gallery and wait for your case to be called. When you hear your name, approach the plaintiff table. The judge will ask you to state your case first since you are the one who filed.",
            textZh:
              "先在前台跟我签到。然后在旁听席坐下等叫到您的案件。听到名字后走到原告席。法官会先让您陈述案情因为您是提起诉讼的一方。",
            keyPhrases: [
              { en: "gallery", zh: "旁听席" },
              { en: "plaintiff table", zh: "原告席" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sign in with me when you get here. Sit in the audience area until your name is called, then go up to the table on the left. You go first since you are the one suing.",
                textZh: "到了先跟我签到。在观众区坐着等叫名字，然后到左边的桌子。你先说因为你是原告。",
                actionHint: "you go first 意思是你先陈述",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How much time do I have to present my case?",
            textZh: "我有多少时间陈述案情？",
            casualVersion: "How long do I get to talk?",
          },
          {
            speaker: "them",
            role: "法院书记",
            textEn:
              "Each side usually gets about ten to fifteen minutes. Keep it focused — state what happened, show your evidence, and explain what you are asking for. The judge may ask you questions. Then the defendant gets their turn to respond.",
            textZh:
              "每方通常有大约10到15分钟。保持重点——陈述发生了什么，展示证据，解释您的诉求。法官可能会问问题。然后被告轮到回应。",
            keyPhrases: [
              { en: "state what happened", zh: "陈述发生了什么" },
              { en: "gets their turn", zh: "轮到他们" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You get about ten to fifteen minutes. Keep it short and sweet — what happened, here is my proof, here is what I want. The judge will probably jump in with questions. Then the other side goes.",
                textZh:
                  "大约十到十五分钟。简明扼要——发生了什么，这是证据，这是我要的。法官可能会插进来问问题。然后对方说。",
                actionHint: "short and sweet 意思是简明扼要",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What if the defendant does not show up?",
            textZh: "如果被告不来怎么办？",
            casualVersion: "What if they do not come?",
          },
          {
            speaker: "them",
            role: "法院书记",
            textEn:
              "If the defendant does not appear, the judge will likely rule in your favor by default. You still need to present your case briefly, but a default judgment is usually straightforward. The defendant can request to have the judgment set aside within thirty days if they had a valid reason for missing court.",
            textZh:
              "如果被告不出庭，法官通常会缺席判您胜诉。您仍需简要陈述案情，但缺席判决通常比较直接。被告如果有正当理由缺席，可以在30天内请求撤销判决。",
            keyPhrases: [
              { en: "default judgment", zh: "缺席判决" },
              { en: "set aside", zh: "撤销" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "If they are a no-show, you basically win by default. Just give a quick rundown of your case and the judge will rule for you. They have thirty days to try to undo it if they had a good excuse.",
                textZh:
                  "如果他们没来，你基本上自动赢。快速说一下你的案情法官就会判你赢。如果他们有好的理由，30天内可以试着推翻。",
                actionHint: "no-show 意思是没出现的人",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "If I win, how do I collect the money?",
            textZh: "如果我赢了，怎么收到钱？",
            casualVersion: "If I win, how do I actually get the money?",
          },
          {
            speaker: "them",
            role: "法院书记",
            textEn:
              "The court does not collect money for you. If the defendant does not pay voluntarily, you can file for a wage garnishment or a bank levy. You can also place a lien on their property. We have information sheets at the front desk on collection methods.",
            textZh:
              "法院不会替您收钱。如果被告不自愿支付，您可以申请工资扣押或银行冻结。也可以在其财产上设立留置权。前台有关于催收方法的资料。",
            keyPhrases: [
              { en: "wage garnishment", zh: "工资扣押" },
              { en: "lien on their property", zh: "财产留置权" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Winning is one thing — collecting is another. If they will not pay, you can go after their wages or bank account, or put a lien on their stuff. We have handouts on how to do all that.",
                textZh:
                  "赢是一回事——收钱是另一回事。如果他们不付，可以追他们的工资或银行账户，或者在他们的财产上设留置权。我们有相关资料。",
                actionHint: "go after 意思是追讨",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 12. 结婚证 ====================
  {
    id: "government-marriage-license",
    category: "government",
    titleZh: "结婚证",
    titleEn: "Marriage License",
    description: "在市政厅申请结婚证",
    otherRole: "市政职员",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "申请结婚证",
        titleEn: "Applying for Marriage License",
        description: "到市政厅申请结婚许可证",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "We would like to apply for a marriage license. What do we need to bring?",
            textZh: "我们想申请结婚证。需要带什么？",
            casualVersion: "We want to get married. What do we need for the license?",
          },
          {
            speaker: "them",
            role: "市政职员",
            textEn:
              "Congratulations! Both of you need to be present with valid photo IDs. If either of you was previously married, bring your divorce decree or death certificate of the former spouse. The fee is thirty-five dollars.",
            textZh:
              "恭喜！你们两个人都需要到场并带有效带照片证件。如果任何一方曾经结过婚，需要带离婚判决书或前配偶的死亡证明。费用是35美元。",
            keyPhrases: [
              { en: "divorce decree", zh: "离婚判决书" },
              { en: "both of you need to be present", zh: "你们两个人都需要到场" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Congrats! You both need to come in with your IDs. If either of you was married before, bring proof it ended — divorce papers or a death certificate. It is thirty-five dollars.",
                textZh:
                  "恭喜！你们两个都要带证件来。如果之前结过婚，带上证明已经结束的文件——离婚文件或死亡证明。35美元。",
                actionHint: "proof it ended 意思是证明（前段婚姻）已结束",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Neither of us has been married before. Can we get the license today and have the ceremony right away?",
            textZh: "我们都没结过婚。今天能拿到证明后马上举行仪式吗？",
            casualVersion: "We are both first-timers. Can we do it all today?",
          },
          {
            speaker: "them",
            role: "市政职员",
            textEn:
              "In our state, there is a twenty-four-hour waiting period after the license is issued before you can have the ceremony. However, you can apply for a waiver from a judge if you have special circumstances. The license is valid for sixty days once issued.",
            textZh:
              "在我们州，结婚证签发后有24小时等待期才能举行仪式。不过如果有特殊情况，您可以向法官申请豁免。结婚证签发后60天内有效。",
            keyPhrases: [
              { en: "waiting period", zh: "等待期" },
              { en: "waiver", zh: "豁免" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "There is a one-day waiting period after you get the license. You could ask a judge to waive it if there is a good reason. Once you have it, the license is good for sixty days.",
                textZh: "拿到证明后有一天等待期。有正当理由的话可以让法官免除。拿到后60天内有效。",
                actionHint: "good for sixty days 意思是60天内有效",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "We are fine with waiting. Can we have the ceremony performed here at city hall?",
            textZh: "等一天没问题。可以在市政厅举行仪式吗？",
            casualVersion: "That is fine. Can we do the ceremony here?",
          },
          {
            speaker: "them",
            role: "市政职员",
            textEn:
              "Yes, we offer civil ceremonies here. A judge or justice of the peace can perform the ceremony. It takes about ten minutes and costs an additional twenty-five dollars. You will need at least one witness over the age of eighteen.",
            textZh:
              "可以，我们这里提供民事婚礼。法官或治安法官可以主持仪式。大约十分钟，额外收费25美元。您需要至少一名18岁以上的证人。",
            keyPhrases: [
              { en: "civil ceremony", zh: "民事婚礼" },
              { en: "justice of the peace", zh: "治安法官" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure, we do weddings here. A judge handles it — takes about ten minutes, twenty-five bucks extra. Just bring a witness who is eighteen or older.",
                textZh: "当然，我们这里可以办婚礼。法官主持——大约十分钟，额外25块。带一个18岁以上的证人就行。",
                actionHint: "handles it 意思是负责办理",
                frequency: "common",
              },
            ],
            culturalNote:
              "美国的marriage license（结婚许可证）和marriage certificate（结婚证书）不同。License是在仪式前申请的许可，Certificate是仪式后由主持人签署并提交的正式文件。",
          },
          {
            speaker: "you",
            textEn: "After the ceremony, do we receive the marriage certificate right away?",
            textZh: "仪式结束后马上能拿到结婚证书吗？",
            casualVersion: "Do we get the certificate right after?",
          },
          {
            speaker: "them",
            role: "市政职员",
            textEn:
              "The officiant will sign the license after the ceremony and file it with the county. Your official marriage certificate will be mailed to you within two to four weeks. You can also order certified copies for ten dollars each — most people order a few extras for legal purposes.",
            textZh:
              "主持人会在仪式后在执照上签字并提交给县政府。您的正式结婚证书会在两到四周内邮寄给您。您也可以每份10美元订购认证副本——大多数人为了法律用途多订几份。",
            keyPhrases: [
              { en: "officiant", zh: "婚礼主持人" },
              { en: "certified copies", zh: "认证副本" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "After the ceremony, the person who married you signs it and sends it to the county. The actual certificate comes in the mail in a few weeks. Get a couple extra copies — ten bucks each — you will need them for name changes and stuff.",
                textZh: "仪式后主持人签字提交给县里。正式证书几周后寄到。多订几份副本——每份10块——改名什么的会用到。",
                actionHint: "and stuff 意思是之类的事情",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "international",
        titleZh: "外国人结婚",
        titleEn: "International Marriage",
        description: "外国公民在美国申请结婚证的特殊要求",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I am a foreign national. Can I get married in the United States? Do I need special documents?",
            textZh: "我是外国公民。可以在美国结婚吗？需要特殊文件吗？",
            casualVersion: "I am not a US citizen. Can I still get married here?",
          },
          {
            speaker: "them",
            role: "市政职员",
            textEn:
              "Yes, you do not need to be a US citizen to get married here. You will need your valid passport and, depending on your country of origin, a certificate of no impediment — basically proof that you are legally free to marry. Some countries call it a single status certificate.",
            textZh:
              "可以，在这里结婚不需要是美国公民。您需要有效护照，根据您的国籍可能还需要无婚姻障碍证明——基本上是证明您在法律上可以自由结婚。有些国家叫单身证明。",
            keyPhrases: [
              { en: "certificate of no impediment", zh: "无婚姻障碍证明" },
              { en: "single status certificate", zh: "单身证明" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Absolutely. Citizenship does not matter for getting married here. Just bring your passport and you might need a letter from your home country saying you are not already married.",
                textZh: "完全可以。结婚不需要看国籍。带上护照就行，可能还需要你本国出具的证明你还没结婚的信函。",
                actionHint: "citizenship does not matter 意思是国籍无关",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "My documents are in Chinese. Do I need to get them translated?",
            textZh: "我的文件是中文的。需要翻译吗？",
            casualVersion: "My papers are all in Chinese. Do I need translations?",
          },
          {
            speaker: "them",
            role: "市政职员",
            textEn:
              "Yes, all foreign-language documents must be accompanied by a certified English translation. The translator needs to include a signed statement certifying the translation is accurate. We also recommend getting your documents apostilled by your consulate for additional authentication.",
            textZh:
              "是的，所有外语文件必须附有认证的英文翻译。翻译人员需要附上签名声明证明翻译准确。我们还建议让您的领事馆对文件进行海牙认证以增加认证效力。",
            keyPhrases: [
              { en: "certified English translation", zh: "认证英文翻译" },
              { en: "apostilled", zh: "海牙认证" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep, everything needs to be in English. Get a certified translation — the translator has to sign off that it is accurate. It also helps to get your docs apostilled through the consulate.",
                textZh:
                  "对，所有东西需要英文版。做一个认证翻译——翻译人员要签字保证准确。通过领事馆做海牙认证也有帮助。",
                actionHint: "sign off 意思是签字认可",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Will this marriage be recognized in my home country?",
            textZh: "这个婚姻在我的祖国被承认吗？",
            casualVersion: "Will my country recognize the marriage?",
          },
          {
            speaker: "them",
            role: "市政职员",
            textEn:
              "Most countries recognize marriages performed in the United States. However, you should check with your country consulate or embassy to confirm. You may need to register the marriage in your home country separately. We can provide extra certified copies of the marriage certificate for that purpose.",
            textZh:
              "大多数国家承认在美国举行的婚姻。但您应该向您国家的领事馆或大使馆确认。您可能需要在本国另外登记婚姻。我们可以提供额外的结婚证认证副本用于此目的。",
            keyPhrases: [
              { en: "consulate or embassy", zh: "领事馆或大使馆" },
              { en: "register the marriage", zh: "登记婚姻" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Usually yes, but double-check with your embassy. You might have to register it back home too. We can give you as many certified copies as you need.",
                textZh: "通常是的，但跟你的大使馆确认一下。可能还要在国内登记。我们可以给你需要的多份认证副本。",
                actionHint: "double-check 意思是再确认一下",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How many certified copies should I get?",
            textZh: "应该拿几份认证副本？",
            casualVersion: "How many copies do I need?",
          },
          {
            speaker: "them",
            role: "市政职员",
            textEn:
              "I would recommend at least three to five. You will need them for updating your immigration documents, changing your name if you choose to, registering the marriage in your home country, and keeping one for your personal records. They are ten dollars each.",
            textZh:
              "我建议至少三到五份。您需要用来更新移民文件、如果选择改名的话、在本国登记婚姻，还有留一份个人存档。每份10美元。",
            keyPhrases: [
              { en: "immigration documents", zh: "移民文件" },
              { en: "personal records", zh: "个人存档" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Get at least three to five. You will use them for immigration stuff, name changes, registering back home — and always keep a spare. Ten bucks each.",
                textZh: "至少拿三到五份。移民的事、改名、回国登记都用得上——还有备一份。每份10块。",
                actionHint: "keep a spare 意思是留一份备用",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 13. 出生证明 ====================
  {
    id: "government-birth-certificate",
    category: "government",
    titleZh: "出生证明",
    titleEn: "Birth Certificate",
    description: "申请或补办出生证明",
    otherRole: "市政职员",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "申请出生证明",
        titleEn: "Requesting Birth Certificate",
        description: "为新生儿或补办申请出生证明",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "I need a certified copy of my child birth certificate. She was born at City General Hospital three weeks ago.",
            textZh: "我需要一份我孩子的出生证明认证副本。她三周前在市立综合医院出生。",
            casualVersion: "I need my baby birth certificate. She was born three weeks ago.",
          },
          {
            speaker: "them",
            role: "市政职员",
            textEn:
              "The hospital should have filed the birth registration with our office. Let me look it up. Can you give me the child full name, date of birth, and the names of both parents?",
            textZh:
              "医院应该已经向我们办公室提交了出生登记。让我查一下。能告诉我孩子的全名、出生日期和父母双方的姓名吗？",
            keyPhrases: [
              { en: "birth registration", zh: "出生登记" },
              { en: "certified copy", zh: "认证副本" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The hospital usually sends that over to us. Let me check. What is the baby name, birthday, and both parents names?",
                textZh: "医院通常会把那个发过来。让我查查。宝宝叫什么名字、生日是什么、父母叫什么？",
                actionHint: "sends that over 意思是把文件发过来",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Her name is Emily Chen, born on March fifth. I am the father, David Chen, and her mother is Sarah Chen.",
            textZh: "她叫Emily Chen，3月5日出生。我是父亲David Chen，母亲是Sarah Chen。",
            casualVersion: "Emily Chen, born March fifth. I am David and mom is Sarah.",
          },
          {
            speaker: "them",
            role: "市政职员",
            textEn:
              "I found the record. Everything looks complete. A certified copy is twenty-one dollars. How many copies do you need? Most parents get at least two — one for their records and one for things like passport applications or school enrollment.",
            textZh:
              "找到记录了。一切完整。认证副本每份21美元。您需要几份？大多数父母至少拿两份——一份自己留档，一份用于护照申请或入学登记等。",
            keyPhrases: [
              { en: "school enrollment", zh: "入学登记" },
              { en: "passport applications", zh: "护照申请" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Got it right here. Looks good. Copies are twenty-one dollars each. I would get at least two — you will need them for the passport, school, all that stuff.",
                textZh: "就在这里。没问题。每份21美元。我建议至少拿两份——护照、入学什么的都用得上。",
                actionHint: "all that stuff 意思是所有那些事情",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I will take three copies. How long does it take to get them?",
            textZh: "我要三份。多久能拿到？",
            casualVersion: "Give me three. How long?",
          },
          {
            speaker: "them",
            role: "市政职员",
            textEn:
              "Since the record is already in our system, I can print the certified copies right now. It will just be a few minutes. That will be sixty-three dollars total. We accept cash, check, or credit card.",
            textZh:
              "因为记录已经在我们系统里了，我现在就可以打印认证副本。只需要几分钟。总共63美元。我们接受现金、支票或信用卡。",
            keyPhrases: [
              { en: "print the certified copies", zh: "打印认证副本" },
              { en: "right now", zh: "马上/现在" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It is already in the system so I can do it right now — just a couple minutes. Sixty-three bucks total. Cash, check, or card all work.",
                textZh: "已经在系统里了所以马上就能办——就几分钟。总共63块。现金、支票或卡都行。",
                actionHint: "all work 意思是都可以",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. I also need to get her a Social Security number. Can I do that here?",
            textZh: "太好了。我还需要给她申请社保号。可以在这里办吗？",
            casualVersion: "Perfect. Can I also get her Social Security number here?",
          },
          {
            speaker: "them",
            role: "市政职员",
            textEn:
              "The hospital usually offers to apply for the Social Security number at the time of birth. If they did, the card should arrive by mail in six to eight weeks. If not, you can apply at your nearest Social Security office with the birth certificate and your ID.",
            textZh:
              "医院通常在出生时会提供申请社保号的选项。如果办了，卡应该在6到8周内邮寄到。如果没有，您可以带出生证明和您的身份证去最近的社保局申请。",
            keyPhrases: [
              { en: "Social Security number", zh: "社保号" },
              { en: "Social Security office", zh: "社保局" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Usually the hospital takes care of that when the baby is born. If they did, the card comes in the mail in about two months. If not, take the birth certificate to Social Security and they will set it up.",
                textZh:
                  "通常医院在宝宝出生时会处理。如果办了，卡大约两个月后寄到。如果没有，拿出生证明去社保局他们会办理。",
                actionHint: "set it up 意思是办理/设置",
                frequency: "common",
              },
            ],
            culturalNote:
              "在美国，出生证明是最重要的身份文件之一。建议多订几份认证副本妥善保管。申请护照、入学、申请社保号都需要出生证明。",
          },
        ],
      },
      {
        id: "replacement",
        titleZh: "补办出生证明",
        titleEn: "Replacement Certificate",
        description: "出生证明遗失后补办",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I lost my birth certificate and need a replacement. I was born in this county thirty years ago.",
            textZh: "我弄丢了出生证明需要补办。我30年前在这个县出生。",
            casualVersion: "I lost my birth certificate. I was born here thirty years ago.",
          },
          {
            speaker: "them",
            role: "市政职员",
            textEn:
              "We can help with that. I will need to verify your identity first. Please provide a valid government-issued photo ID and answer a few security questions. We keep records going back over a hundred years, so yours should definitely be in our system.",
            textZh:
              "我们可以帮您。首先需要验证您的身份。请出示有效的政府颁发的带照片证件，并回答几个安全问题。我们的记录可以追溯一百多年，所以您的肯定在系统里。",
            keyPhrases: [
              { en: "government-issued photo ID", zh: "政府颁发的带照片证件" },
              { en: "security questions", zh: "安全问题" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No problem. I just need to make sure you are who you say you are. Show me a photo ID and I will ask a couple of verification questions. Records go way back so we will find yours.",
                textZh:
                  "没问题。我只需要确认你是本人。出示一个带照片的证件，我问几个验证问题。记录保存了很久所以一定能找到你的。",
                actionHint: "way back 意思是很久以前",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Here is my driver license. What kind of questions will you ask?",
            textZh: "这是我的驾照。会问什么样的问题？",
            casualVersion: "Here is my license. What do you need to know?",
          },
          {
            speaker: "them",
            role: "市政职员",
            textEn:
              "I will ask for your full name at birth, date of birth, the hospital where you were born, and your parents full names including your mother maiden name. This is to match our records and prevent fraudulent requests.",
            textZh:
              "我会问您出生时的全名、出生日期、出生的医院，以及父母的全名包括母亲的婚前姓。这是为了匹配记录防止欺诈性申请。",
            keyPhrases: [
              { en: "mother maiden name", zh: "母亲的婚前姓" },
              { en: "fraudulent requests", zh: "欺诈性申请" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Just basic stuff — your birth name, birthday, which hospital, and your parents names. I need your mom maiden name too. It is just to make sure nobody else is trying to get your documents.",
                textZh:
                  "就是基本信息——出生时的名字、生日、哪家医院、父母的名字。还需要你妈妈的婚前姓。只是为了确保没有其他人试图拿你的文件。",
                actionHint: "just basic stuff 意思是只是基本信息",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I can answer all of those. How soon can I get the replacement?",
            textZh: "这些我都能回答。多快能拿到补办的？",
            casualVersion: "I know all that. How fast can I get it?",
          },
          {
            speaker: "them",
            role: "市政职员",
            textEn:
              "If everything checks out, I can issue it today — same-day service. It will take about twenty minutes to process. The fee for a replacement certified copy is twenty-one dollars. Would you like to order multiple copies while you are here?",
            textZh:
              "如果一切核实无误，今天就能发给您——当天服务。处理大约需要20分钟。补办认证副本的费用是21美元。趁您在这里要多订几份吗？",
            keyPhrases: [
              { en: "same-day service", zh: "当天服务" },
              { en: "checks out", zh: "核实无误" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "If it all matches up, you can have it today. About twenty minutes. Twenty-one dollars per copy. Want a few extras since you are already here?",
                textZh: "如果都对得上，今天就能拿到。大约20分钟。每份21美元。既然已经来了要不多拿几份？",
                actionHint: "matches up 意思是信息吻合",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I will get two copies this time. I do not want to lose it again.",
            textZh: "好的，这次我拿两份。不想再弄丢了。",
            casualVersion: "Give me two this time. Not making that mistake again.",
          },
          {
            speaker: "them",
            role: "市政职员",
            textEn:
              "Smart move. That will be forty-two dollars total. I would suggest keeping one in a fireproof safe or a safety deposit box at your bank. I will have both copies ready in about twenty minutes.",
            textZh: "明智的选择。总共42美元。建议把一份放在防火保险箱或银行的保险柜里。大约20分钟两份都能准备好。",
            keyPhrases: [
              { en: "fireproof safe", zh: "防火保险箱" },
              { en: "safety deposit box", zh: "银行保险柜" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Good call. Forty-two bucks. Keep one somewhere safe — like a lockbox or your bank safe. I will have them done in twenty.",
                textZh: "好主意。42块。放在安全的地方——比如保险箱或银行保险柜。20分钟就好。",
                actionHint: "good call 意思是好决定",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 14. 更名申请 ====================
  {
    id: "government-name-change",
    category: "government",
    titleZh: "更名申请",
    titleEn: "Name Change Application",
    description: "在法院申请合法更改姓名",
    otherRole: "法院书记",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "更名流程",
        titleEn: "Name Change Process",
        description: "了解合法更名的申请流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I would like to legally change my name. What is the process?",
            textZh: "我想合法更改我的名字。流程是什么？",
            casualVersion: "How do I change my name legally?",
          },
          {
            speaker: "them",
            role: "法院书记",
            textEn:
              "You need to file a petition for name change with the court. The form is called a Name Change Petition, and the filing fee is four hundred and thirty-five dollars. You will also need to publish the name change in a local newspaper for a certain number of weeks as required by law.",
            textZh:
              "您需要向法院提交更名申请书。表格叫做更名申请书，立案费435美元。您还需要按法律要求在当地报纸上公布更名信息若干周。",
            keyPhrases: [
              { en: "petition for name change", zh: "更名申请书" },
              { en: "publish in a local newspaper", zh: "在当地报纸上公布" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "File a name change petition with us. It costs four hundred and thirty-five dollars. Then you have to run an announcement in a newspaper for a few weeks — it is a legal requirement.",
                textZh: "在我们这里提交更名申请。费用435美元。然后要在报纸上登几周的公告——法律要求的。",
                actionHint: "run an announcement 意思是刊登公告",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Why do I have to publish it in a newspaper?",
            textZh: "为什么要在报纸上公布？",
            casualVersion: "Why the newspaper thing?",
          },
          {
            speaker: "them",
            role: "法院书记",
            textEn:
              "The publication requirement exists so that anyone who might be affected — like creditors — has a chance to object. After the publication period, you will have a court hearing where a judge reviews your petition and issues the order if everything is in order.",
            textZh:
              "公布要求是为了让可能受影响的人——比如债权人——有机会提出异议。公布期结束后，您会有一次法庭听证，法官审查您的申请并在一切妥当时签发命令。",
            keyPhrases: [
              { en: "creditors", zh: "债权人" },
              { en: "court hearing", zh: "法庭听证" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It is so people who might care — like anyone you owe money to — can raise a flag. Once the notice period is done, you go before a judge who gives the final okay.",
                textZh: "这样可能在意的人——比如你欠钱的人——可以提出异议。公告期结束后，你去见法官拿最终批准。",
                actionHint: "raise a flag 意思是提出异议/警示",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How long does the whole process take from start to finish?",
            textZh: "整个流程从头到尾要多久？",
            casualVersion: "How long does it all take?",
          },
          {
            speaker: "them",
            role: "法院书记",
            textEn:
              "Typically two to three months. The newspaper publication runs for four consecutive weeks, and the court hearing is scheduled a few weeks after that. Once the judge approves it, you receive a court order that you can use to update all your documents.",
            textZh:
              "通常两到三个月。报纸公告连续刊登四周，听证会在之后几周安排。法官批准后您会收到法院命令，可以用来更新所有文件。",
            keyPhrases: [
              { en: "consecutive weeks", zh: "连续几周" },
              { en: "court order", zh: "法院命令" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "About two to three months total. The newspaper ad runs four weeks straight, then you wait for the hearing. After the judge signs off, you get the order and can start changing everything.",
                textZh:
                  "总共大约两到三个月。报纸广告连续登四周，然后等听证。法官签字后你拿到命令就可以开始改所有东西了。",
                actionHint: "signs off 意思是签字批准",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "After the name change is approved, what documents do I need to update?",
            textZh: "更名批准后，需要更新哪些文件？",
            casualVersion: "What do I need to change after I get the new name?",
          },
          {
            speaker: "them",
            role: "法院书记",
            textEn:
              "You will need to update your Social Security card first, then your driver license, passport, bank accounts, credit cards, employment records, and any other official documents. The court order is your proof — bring it everywhere. Start with Social Security since many other agencies require the updated card.",
            textZh:
              "首先更新社保卡，然后是驾照、护照、银行账户、信用卡、就业记录以及其他官方文件。法院命令就是您的证明——到处都要带着。先从社保局开始因为很多其他机构需要更新后的社保卡。",
            keyPhrases: [
              { en: "court order", zh: "法院命令" },
              { en: "employment records", zh: "就业记录" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Social Security first, then your license, passport, bank stuff, credit cards, work records — basically everything. The court order is your golden ticket. Do Social Security first because everyone else wants to see the new card.",
                textZh:
                  "先社保，然后驾照、护照、银行的东西、信用卡、工作记录——基本上所有的。法院命令就是你的通行证。先办社保因为其他地方都要看新的卡。",
                actionHint: "golden ticket 意思是通行证/关键凭证",
                frequency: "common",
              },
            ],
            culturalNote:
              "美国合法更名的原因有很多：结婚/离婚后改姓、宗教原因、性别转换、或纯粹个人喜好。只要不是为了欺诈或逃避债务，法院通常会批准。",
          },
        ],
      },
      {
        id: "marriage-related",
        titleZh: "婚后改姓",
        titleEn: "Marriage Name Change",
        description: "结婚后更改姓氏的简化流程",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "I just got married and want to take my spouse last name. Is the process different from a regular name change?",
            textZh: "我刚结婚想随配偶的姓。和普通更名流程不同吗？",
            casualVersion: "I got married and want to change my last name. Is it easier?",
          },
          {
            speaker: "them",
            role: "法院书记",
            textEn:
              "Yes, it is much simpler. When you change your name through marriage, you do not need a court petition or newspaper publication. Your marriage certificate serves as the legal document for the name change. You just need to update your records at each agency.",
            textZh:
              "是的，简单得多。通过婚姻更名不需要法院申请书或报纸公告。结婚证就是更名的法律文件。您只需要到各个机构更新记录。",
            keyPhrases: [
              { en: "marriage certificate", zh: "结婚证" },
              { en: "court petition", zh: "法院申请书" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Way easier. No petition, no newspaper, no hearing. Your marriage certificate is all you need. Just take it around and update your stuff.",
                textZh: "简单多了。不用申请书、不用登报、不用听证。结婚证就够了。拿着去到处更新就行。",
                actionHint: "take it around 意思是带着到处去",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Where do I start?",
            textZh: "从哪里开始？",
            casualVersion: "What do I do first?",
          },
          {
            speaker: "them",
            role: "法院书记",
            textEn:
              "Go to Social Security first with your marriage certificate and current ID. They will update your name and issue a new card for free. After that, go to the DMV for a new license. Then update your passport, bank accounts, and employer records.",
            textZh:
              "先带着结婚证和现有证件去社保局。他们会免费更新您的姓名并发新卡。之后去DMV办新驾照。然后更新护照、银行账户和雇主记录。",
            keyPhrases: [
              { en: "issue a new card for free", zh: "免费发新卡" },
              { en: "employer records", zh: "雇主记录" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Start at Social Security — bring the marriage cert and your ID. Free new card. Then DMV for a new license. After that, passport, bank, work — the whole list.",
                textZh: "先去社保局——带上结婚证和身份证。免费换新卡。然后DMV换新驾照。之后护照、银行、工作——一整串。",
                actionHint: "the whole list 意思是一整串/所有的",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a deadline for changing my name after marriage?",
            textZh: "婚后改名有期限吗？",
            casualVersion: "Do I have to do it right away?",
          },
          {
            speaker: "them",
            role: "法院书记",
            textEn:
              "There is no legal deadline. You can change your name any time after the marriage. However, the sooner you do it, the fewer mismatched documents you will have to deal with. Some people wait years, but it just gets more complicated over time.",
            textZh:
              "没有法律期限。婚后任何时候都可以改。不过越早改需要处理的不匹配文件越少。有些人等了好几年，但时间越长越麻烦。",
            keyPhrases: [
              { en: "no legal deadline", zh: "没有法律期限" },
              { en: "mismatched documents", zh: "不匹配的文件" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No rush legally, but the longer you wait, the more of a hassle it becomes. You will have IDs with different names and that gets confusing. I would do it sooner rather than later.",
                textZh: "法律上不急，但等得越久越麻烦。你会有不同名字的证件很容易搞混。建议早点办。",
                actionHint: "hassle 意思是麻烦事",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I keep my maiden name as a middle name?",
            textZh: "我可以把婚前姓作为中间名保留吗？",
            casualVersion: "Can I keep my old name as a middle name?",
          },
          {
            speaker: "them",
            role: "法院书记",
            textEn:
              "In most states, you can take your spouse last name and move your maiden name to a middle name position. This is quite common. Just indicate that on your Social Security application and the other agencies will follow.",
            textZh:
              "在大多数州，您可以使用配偶的姓并将婚前姓移到中间名位置。这很常见。只需在社保申请上注明，其他机构会跟着改。",
            keyPhrases: [
              { en: "maiden name", zh: "婚前姓" },
              { en: "middle name position", zh: "中间名位置" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Totally. A lot of people do that — keep your maiden name as your middle and take the new last name. Just put it that way on the Social Security form and everything else follows.",
                textZh: "完全可以。很多人这么做——把婚前姓作为中间名，用新的姓。在社保表上这样写其他的都跟着改。",
                actionHint: "everything else follows 意思是其他的都跟着改",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 15. 建筑许可 ====================
  {
    id: "government-building-permit",
    category: "government",
    titleZh: "建筑许可",
    titleEn: "Building Permit",
    description: "申请房屋装修或建筑的许可证",
    otherRole: "市政人员",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "申请建筑许可",
        titleEn: "Applying for Permit",
        description: "房屋装修前申请建筑许可",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I want to remodel my kitchen and add a bathroom. Do I need a building permit?",
            textZh: "我想改造厨房并加一个卫生间。需要建筑许可吗？",
            casualVersion: "I am redoing my kitchen and adding a bathroom. Do I need a permit?",
          },
          {
            speaker: "them",
            role: "市政人员",
            textEn:
              "Yes, both of those projects require permits. Any work involving structural changes, plumbing, or electrical requires a permit in our city. You will need to submit plans showing the proposed changes.",
            textZh:
              "是的，这两个项目都需要许可。在我们市，任何涉及结构变更、水管或电气的工程都需要许可。您需要提交显示拟议变更的图纸。",
            keyPhrases: [
              { en: "structural changes", zh: "结构变更" },
              { en: "submit plans", zh: "提交图纸" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Definitely need a permit for both. Anytime you touch plumbing, electrical, or load-bearing walls, you need one. Bring in your plans showing what you want to do.",
                textZh: "两个都绝对需要许可。只要涉及水管、电线或承重墙，就需要。带上你的图纸说明想做什么。",
                actionHint: "load-bearing walls 指承重墙",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I am hiring a contractor. Can they handle the permit application?",
            textZh: "我请了承包商。他们能代办许可申请吗？",
            casualVersion: "My contractor can do the permit stuff, right?",
          },
          {
            speaker: "them",
            role: "市政人员",
            textEn:
              "Yes, licensed contractors often pull permits on behalf of homeowners. Make sure your contractor is licensed and insured. They should be familiar with our code requirements and can prepare the necessary drawings and specifications.",
            textZh:
              "是的，持证承包商通常可以代替业主申请许可。确保您的承包商有执照和保险。他们应该熟悉我们的建筑规范要求，可以准备必要的图纸和规格说明。",
            keyPhrases: [
              { en: "pull permits", zh: "申请许可" },
              { en: "code requirements", zh: "建筑规范要求" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure, most good contractors handle permits all the time. Just make sure they are legit — licensed and insured. They will know the codes and what paperwork we need.",
                textZh:
                  "当然，大多数好承包商经常办许可。确保他们是正规的——有执照有保险。他们知道规范和我们需要什么文件。",
                actionHint: "legit 意思是正规的/合法的",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How much does a building permit cost?",
            textZh: "建筑许可多少钱？",
            casualVersion: "What does the permit cost?",
          },
          {
            speaker: "them",
            role: "市政人员",
            textEn:
              "Permit fees are based on the estimated project cost. For a kitchen remodel and bathroom addition, you are probably looking at five hundred to fifteen hundred dollars in permit fees. There are also separate fees for plumbing and electrical permits.",
            textZh:
              "许可费按预估项目成本计算。厨房改造加卫生间的话，许可费大约500到1500美元。水管和电气许可还有单独的费用。",
            keyPhrases: [
              { en: "estimated project cost", zh: "预估项目成本" },
              { en: "plumbing and electrical permits", zh: "水管和电气许可" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It depends on how much the project costs. For what you are doing, figure somewhere between five hundred and fifteen hundred. Plumbing and electrical are extra permits on top of that.",
                textZh: "取决于项目花多少钱。你做的这些大概500到1500之间。水管和电气许可还要另外交。",
                actionHint: "on top of that 意思是除此之外",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How long does it take to get the permit approved?",
            textZh: "许可批准要多久？",
            casualVersion: "How long until I get the green light?",
          },
          {
            speaker: "them",
            role: "市政人员",
            textEn:
              "Simple projects can be approved in one to two weeks. More complex projects that require plan review can take four to six weeks. Once approved, the permit is valid for six months. We will also schedule inspections at key stages of the construction.",
            textZh:
              "简单项目一到两周可以批准。需要图纸审查的复杂项目可能需要四到六周。批准后许可有效期六个月。我们还会在施工的关键阶段安排检查。",
            keyPhrases: [
              { en: "plan review", zh: "图纸审查" },
              { en: "schedule inspections", zh: "安排检查" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Easy stuff gets approved in a week or two. If we need to do a full plan review, more like a month to six weeks. Permit is good for six months, and we come out to inspect at different stages.",
                textZh:
                  "简单的一两周就批。如果需要全面图纸审查，大约一到六周。许可有效六个月，我们会在不同阶段来检查。",
                actionHint: "come out to inspect 意思是到现场检查",
                frequency: "common",
              },
            ],
            culturalNote:
              "在美国，未经许可进行装修可能导致罚款、要求拆除、房屋出售时影响估价，甚至保险理赔问题。即使是看似简单的改造，也建议先咨询当地市政部门。",
          },
        ],
      },
      {
        id: "inspection",
        titleZh: "施工检查",
        titleEn: "Construction Inspection",
        description: "建筑许可要求的施工阶段检查",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "My contractor says we are ready for the rough-in inspection. How do I schedule that?",
            textZh: "承包商说我们可以做粗装检查了。怎么预约？",
            casualVersion: "We need a rough-in inspection. How do I set that up?",
          },
          {
            speaker: "them",
            role: "市政人员",
            textEn:
              "You can schedule inspections online through our permit portal or by calling our inspection line. We need at least twenty-four hours notice. What is your permit number? I can check what inspections are required for your project.",
            textZh:
              "您可以通过我们的许可门户网站在线预约或拨打检查热线。至少需要提前24小时。您的许可号是多少？我可以查看您的项目需要哪些检查。",
            keyPhrases: [
              { en: "rough-in inspection", zh: "粗装检查" },
              { en: "permit portal", zh: "许可门户网站" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Book it online or give us a call — just need a day heads up. What is your permit number? I will pull up what inspections you still need.",
                textZh: "网上预约或打电话——提前一天通知就行。许可号是多少？我看看你还需要哪些检查。",
                actionHint: "heads up 意思是提前通知",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "The permit number is BP-2026-0315. What exactly does the inspector look for?",
            textZh: "许可号是BP-2026-0315。检查员具体看什么？",
            casualVersion: "It is BP-2026-0315. What do they check?",
          },
          {
            speaker: "them",
            role: "市政人员",
            textEn:
              "For a rough-in, the inspector checks the framing, plumbing pipes, and electrical wiring before the walls are closed up. Everything must meet current building codes. Make sure all the work is visible and accessible — do not cover anything with drywall yet.",
            textZh:
              "粗装检查时，检查员会在封墙之前检查框架结构、水管和电线。一切必须符合现行建筑规范。确保所有工作可见且可触及——先不要用石膏板覆盖。",
            keyPhrases: [
              { en: "framing", zh: "框架结构" },
              { en: "building codes", zh: "建筑规范" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "They look at the framing, pipes, and wires before you cover everything up. It all has to be up to code. Do not put drywall up yet — they need to see everything.",
                textZh: "他们在你封上之前看框架、管道和电线。一切必须符合规范。先别上石膏板——他们需要看到所有东西。",
                actionHint: "up to code 意思是符合规范",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What happens if the inspection fails?",
            textZh: "如果检查不通过怎么办？",
            casualVersion: "What if we do not pass?",
          },
          {
            speaker: "them",
            role: "市政人员",
            textEn:
              "The inspector will note the violations on a correction notice. Your contractor fixes the issues and then you schedule a re-inspection. There is no additional fee for the first re-inspection. Do not proceed with any further work until the inspection passes.",
            textZh:
              "检查员会在整改通知上记录违规项。承包商修复问题后您再预约复检。第一次复检不收额外费用。在检查通过前不要继续后续工作。",
            keyPhrases: [
              { en: "correction notice", zh: "整改通知" },
              { en: "re-inspection", zh: "复检" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "They will write up what needs fixing. Your contractor takes care of it and you call us back for another look. First re-check is free. Just do not keep building until it passes.",
                textZh: "他们会写下需要修什么。承包商修好后再叫我们来看。第一次复查免费。通过之前别继续施工。",
                actionHint: "write up 意思是写出/记录",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "After all the inspections are done, is there a final step?",
            textZh: "所有检查都完成后还有最后一步吗？",
            casualVersion: "Is there anything else after all the inspections?",
          },
          {
            speaker: "them",
            role: "市政人员",
            textEn:
              "Yes, there is a final inspection after the project is complete. The inspector verifies everything is finished properly and issues a certificate of occupancy or completion. Keep that document — you will need it if you ever sell the house or refinance.",
            textZh:
              "是的，项目完成后有一次最终检查。检查员确认一切正确完工并签发入住许可证或完工证明。保留好那份文件——如果将来卖房或再融资会用到。",
            keyPhrases: [
              { en: "final inspection", zh: "最终检查" },
              { en: "certificate of occupancy", zh: "入住许可证" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "One last check when everything is done. If it all looks good, you get a certificate of completion. Hold onto it — you will need it when you sell or refi.",
                textZh: "全部完成后最后一次检查。如果都没问题，你会拿到完工证明。保存好——卖房或再贷款时会用到。",
                actionHint: "refi 是 refinance 的缩写，意思是再融资",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 16. 营业执照 ====================
  {
    id: "government-business-license",
    category: "government",
    titleZh: "营业执照",
    titleEn: "Business License",
    description: "申请开业所需的营业执照",
    otherRole: "市政人员",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "申请营业执照",
        titleEn: "Applying for Business License",
        description: "开店前申请营业执照",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I want to open a small restaurant. What licenses and permits do I need?",
            textZh: "我想开一家小餐厅。需要什么执照和许可？",
            casualVersion: "I am opening a restaurant. What paperwork do I need?",
          },
          {
            speaker: "them",
            role: "市政人员",
            textEn:
              "For a restaurant, you will need a general business license from the city, a food service permit from the health department, a food handler certificate for all employees, and a fire inspection certificate. If you plan to serve alcohol, you will also need a liquor license.",
            textZh:
              "开餐厅需要市政的一般营业执照、卫生部门的餐饮服务许可、所有员工的食品处理证书，以及消防检查证明。如果计划卖酒，还需要酒类许可证。",
            keyPhrases: [
              { en: "food service permit", zh: "餐饮服务许可" },
              { en: "liquor license", zh: "酒类许可证" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "A restaurant needs a bunch of stuff — city business license, health permit, food handler certs for your staff, and fire clearance. Selling booze? You will need a liquor license too.",
                textZh:
                  "餐厅需要一堆东西——市营业执照、卫生许可、员工的食品处理证书、消防合格证。卖酒？还需要酒类许可证。",
                actionHint: "a bunch of stuff 意思是一堆东西",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How much does the business license cost and how do I apply?",
            textZh: "营业执照多少钱？怎么申请？",
            casualVersion: "How much and how do I get it?",
          },
          {
            speaker: "them",
            role: "市政人员",
            textEn:
              "The general business license fee varies by business type. For a restaurant, it is typically one hundred and fifty to three hundred dollars annually. You can apply online or in person. You will need your business name, address, owner information, and your employer identification number.",
            textZh:
              "一般营业执照费用因行业而异。餐厅通常每年150到300美元。可以网上或亲自申请。需要您的企业名称、地址、业主信息和雇主识别号。",
            keyPhrases: [
              { en: "employer identification number", zh: "雇主识别号（EIN）" },
              { en: "annually", zh: "每年" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For a restaurant, the license runs about one fifty to three hundred a year. Apply online or come in. We need your business name, address, your info, and your EIN.",
                textZh: "餐厅的话执照大约每年150到300。网上申请或来办公室。需要企业名称、地址、你的信息和EIN号。",
                actionHint: "runs about 意思是大约花费",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I do not have an EIN yet. Where do I get one?",
            textZh: "我还没有EIN。在哪里获取？",
            casualVersion: "I do not have an EIN. How do I get one?",
          },
          {
            speaker: "them",
            role: "市政人员",
            textEn:
              "You can apply for an EIN for free on the IRS website. It is an instant process — you fill out the online application and get your number right away. You will need it for taxes, hiring employees, and opening a business bank account.",
            textZh:
              "您可以在IRS网站上免费申请EIN。是即时的——填写在线申请马上就能拿到号码。报税、雇员工和开商业银行账户都需要它。",
            keyPhrases: [
              { en: "EIN", zh: "雇主识别号" },
              { en: "instant process", zh: "即时办理" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Go to the IRS website — it is free and takes like five minutes. You get the number immediately. You will need it for everything — taxes, payroll, bank account.",
                textZh: "去IRS网站——免费的大约五分钟。马上就能拿到号码。什么都需要它——报税、发工资、银行账户。",
                actionHint: "payroll 意思是员工薪资/发工资",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How long does it take to get all the permits together before I can open?",
            textZh: "把所有许可证办齐需要多久才能开业？",
            casualVersion: "How long before I can actually open?",
          },
          {
            speaker: "them",
            role: "市政人员",
            textEn:
              "Plan for at least two to three months. The business license is the quickest — about one to two weeks. The health permit requires an inspection of your kitchen, which can take a few weeks to schedule. The liquor license, if you need one, can take three to six months on its own.",
            textZh:
              "至少计划两到三个月。营业执照最快——大约一到两周。卫生许可需要检查您的厨房，排期可能需要几周。酒类许可证如果需要的话，单独就要三到六个月。",
            keyPhrases: [
              { en: "health permit", zh: "卫生许可" },
              { en: "kitchen inspection", zh: "厨房检查" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Give yourself two to three months minimum. Business license is fast, health inspection takes a bit to schedule, and the liquor license is the slowest — could be six months. Start that one first.",
                textZh:
                  "至少留两到三个月。营业执照很快，卫生检查排期需要一些时间，酒类许可最慢——可能六个月。那个先申请。",
                actionHint: "give yourself 意思是给自己留出（时间）",
                frequency: "common",
              },
            ],
            culturalNote:
              "美国开餐厅的许可证要求因州和市不同而差异很大。建议在选址前就了解当地要求。有些地区对餐厅位置有分区限制（zoning restrictions）。",
          },
        ],
      },
      {
        id: "renewal",
        titleZh: "执照续期",
        titleEn: "License Renewal",
        description: "营业执照到期续期",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I received a renewal notice for my business license. Can I renew online?",
            textZh: "我收到了营业执照续期通知。可以网上续期吗？",
            casualVersion: "My business license is up for renewal. Can I do it online?",
          },
          {
            speaker: "them",
            role: "市政人员",
            textEn:
              "Yes, you can renew online if your business information has not changed. Log into the business portal with your license number and update any necessary information. The renewal fee is the same as the original license fee.",
            textZh:
              "可以，如果您的企业信息没有变化就可以在线续期。用执照号登录商业门户网站并更新必要信息。续期费和原始执照费一样。",
            keyPhrases: [
              { en: "renewal notice", zh: "续期通知" },
              { en: "business portal", zh: "商业门户网站" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep, if nothing has changed with your business, do it online. Just log in with your license number and pay. Same price as before.",
                textZh: "是的，如果企业没有变化，网上续就行。用执照号登录付费。和之前一样的价格。",
                actionHint: "same price as before 意思是跟之前一样的费用",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I moved my business to a new location last month. Does that change anything?",
            textZh: "上个月我的店搬到了新地址。有什么影响吗？",
            casualVersion: "I moved to a new spot. Does that matter?",
          },
          {
            speaker: "them",
            role: "市政人员",
            textEn:
              "Yes, a change of address is significant. You may need a new zoning approval for the new location and potentially a new health inspection. Come in with your new lease agreement and we will update your license. There might be an additional fee for the address change.",
            textZh:
              "是的，地址变更很重要。新地址可能需要新的分区批准，可能还需要新的卫生检查。带上新的租约来我们会更新您的执照。地址变更可能有额外费用。",
            keyPhrases: [
              { en: "zoning approval", zh: "分区批准" },
              { en: "change of address", zh: "地址变更" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Moving is a big deal for your license. The new spot might need zoning clearance and another health check. Bring your new lease in and we will sort it out. Could be an extra fee.",
                textZh:
                  "搬家对你的执照来说是大事。新地方可能需要分区许可和再次卫生检查。带新租约来我们帮你处理。可能有额外费用。",
                actionHint: "sort it out 意思是处理/搞定",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What happens if I forget to renew on time?",
            textZh: "如果忘记按时续期会怎样？",
            casualVersion: "What if I miss the deadline?",
          },
          {
            speaker: "them",
            role: "市政人员",
            textEn:
              "There is a thirty-day grace period after expiration. During that time, you can renew with a late fee of fifty dollars. After the grace period, your license is considered lapsed and you would need to apply for a new one. Operating without a valid license can result in fines of up to five hundred dollars per day.",
            textZh:
              "过期后有30天宽限期。期间可以续期但要交50美元滞纳金。宽限期后执照视为失效，需要重新申请。没有有效执照经营可能被罚款每天最高500美元。",
            keyPhrases: [
              { en: "grace period", zh: "宽限期" },
              { en: "lapsed", zh: "失效" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You get thirty days of grace with a fifty-dollar late fee. After that, your license is dead and you start over. Running your business without one could cost you five hundred bucks a day in fines.",
                textZh: "有30天宽限期加50块滞纳金。之后执照就作废了要重新申请。没有执照经营可能每天罚500块。",
                actionHint: "your license is dead 意思是执照失效了",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. I will make sure to renew on time.",
            textZh: "了解了。我会确保按时续期。",
            casualVersion: "Got it. I will not forget.",
          },
          {
            speaker: "them",
            role: "市政人员",
            textEn:
              "We send renewal notices sixty days before expiration by email and mail. You can also set up auto-renewal through the portal if you prefer. Is there anything else I can help you with today?",
            textZh:
              "我们会在到期前60天通过电子邮件和邮件发送续期通知。如果您愿意，也可以通过门户网站设置自动续期。今天还有其他需要帮忙的吗？",
            keyPhrases: [
              { en: "renewal notices", zh: "续期通知" },
              { en: "auto-renewal", zh: "自动续期" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We will remind you sixty days out by email and mail. You can also turn on auto-renew online so you never have to think about it. Need anything else?",
                textZh: "我们会提前60天通过邮件提醒你。也可以网上开启自动续期就不用操心了。还需要别的吗？",
                actionHint: "never have to think about it 意思是不用操心",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 17. 失业金申请 ====================
  {
    id: "government-unemployment",
    category: "government",
    titleZh: "失业金申请",
    titleEn: "Unemployment Benefits",
    description: "失业后申请失业保险金",
    otherRole: "就业办",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "申请失业金",
        titleEn: "Filing for Unemployment",
        description: "首次申请失业保险金的流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I was laid off from my job last week. How do I apply for unemployment benefits?",
            textZh: "我上周被裁员了。怎么申请失业金？",
            casualVersion: "I just got laid off. How do I get unemployment?",
          },
          {
            speaker: "them",
            role: "就业办",
            textEn:
              "I am sorry to hear that. You can file your initial claim online at our state unemployment website. You will need your Social Security number, your employer information for the past eighteen months, and your bank account details for direct deposit.",
            textZh:
              "很遗憾听到这个消息。您可以在我们州的失业网站上提交初始申请。需要您的社保号、过去18个月的雇主信息，以及银行账户信息用于直接存款。",
            keyPhrases: [
              { en: "laid off", zh: "被裁员" },
              { en: "initial claim", zh: "初始申请" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sorry about that. Go to the state unemployment site and file online. Have your Social, your old job info from the last year and a half, and your bank details ready.",
                textZh: "很遗憾。去州失业网站在线申请。准备好社保号、过去一年半的工作信息和银行信息。",
                actionHint: "your old job info 指前雇主信息",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How much will I receive and how long can I collect benefits?",
            textZh: "我能拿到多少？能领多久？",
            casualVersion: "How much do I get and for how long?",
          },
          {
            speaker: "them",
            role: "就业办",
            textEn:
              "Benefits are typically about fifty percent of your previous weekly wage, up to a maximum of four hundred and fifty dollars per week in our state. You can collect benefits for up to twenty-six weeks. The exact amount depends on your earnings history.",
            textZh:
              "福利通常是您之前周薪的大约50%，在我们州最高每周450美元。最多可以领取26周。具体金额取决于您的收入历史。",
            keyPhrases: [
              { en: "weekly wage", zh: "周薪" },
              { en: "twenty-six weeks", zh: "26周" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Usually about half your old paycheck, capped at four fifty a week here. You can get it for up to six months. It all depends on what you were making before.",
                textZh: "通常是你之前工资的一半，我们这里上限每周450。最多拿六个月。取决于你之前赚多少。",
                actionHint: "capped at 意思是上限是",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a waiting period before I start receiving payments?",
            textZh: "开始收到付款前有等待期吗？",
            casualVersion: "How long before I actually get money?",
          },
          {
            speaker: "them",
            role: "市政人员",
            textEn:
              "Yes, there is typically a one-week waiting period after your claim is approved. After that, you certify your eligibility every two weeks — confirming you are actively looking for work. Payments are then deposited within two to three business days of certification.",
            textZh:
              "是的，申请批准后通常有一周等待期。之后每两周认证一次资格——确认您在积极找工作。认证后两到三个工作日内会打款。",
            keyPhrases: [
              { en: "certify your eligibility", zh: "认证资格" },
              { en: "actively looking for work", zh: "积极找工作" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "There is a one-week wait after approval. Then every two weeks you check in to say you are still job hunting. Money hits your account a few days after that.",
                textZh: "批准后等一周。然后每两周报告一次你还在找工作。几天后钱就到账了。",
                actionHint: "check in 意思是报告/认证",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What counts as actively looking for work?",
            textZh: "什么算积极找工作？",
            casualVersion: "What do I have to do to prove I am looking?",
          },
          {
            speaker: "them",
            role: "就业办",
            textEn:
              "You need to make at least three work search contacts per week — applying for jobs, attending interviews, networking events, or using our job center services. Keep a log of all your activities. We may ask you to verify your job search at any time.",
            textZh:
              "每周至少需要三次求职联系——投递简历、参加面试、参加社交活动或使用我们的就业中心服务。记录所有活动日志。我们可能随时要求您核实求职活动。",
            keyPhrases: [
              { en: "work search contacts", zh: "求职联系" },
              { en: "keep a log", zh: "记录日志" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "At least three job search activities a week — apply for jobs, go to interviews, networking, whatever. Write it all down because they might check. Use our job center too — that counts.",
                textZh:
                  "每周至少三次求职活动——投简历、面试、社交什么的。都记下来因为他们可能会查。用我们的就业中心也算。",
                actionHint: "that counts 意思是那也算",
                frequency: "common",
              },
            ],
            culturalNote:
              "美国失业保险由雇主缴纳的税款资助。只有被非自愿终止雇佣关系（如裁员）才有资格，主动辞职通常不符合条件。领取期间必须证明在积极找工作。",
          },
        ],
      },
      {
        id: "issues",
        titleZh: "失业金问题",
        titleEn: "Benefit Issues",
        description: "失业金被拒或延迟的处理",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "My unemployment claim was denied. It says I was terminated for misconduct, but that is not true. What can I do?",
            textZh: "我的失业金申请被拒了。上面说我因不当行为被解雇，但事实不是这样。我能怎么办？",
            casualVersion:
              "They denied me because they said I was fired for misconduct. That is not right. What do I do?",
          },
          {
            speaker: "them",
            role: "就业办",
            textEn:
              "You have the right to appeal the decision within thirty days. File an appeal online or at our office. You will have a hearing where you and your former employer can both present your sides. Bring any documentation — emails, performance reviews, or termination letters — that supports your case.",
            textZh:
              "您有权在30天内对决定提出上诉。在线或在我们办公室提交上诉。会有一个听证会，您和前雇主都可以陈述各自的情况。带上任何支持您案件的文件——邮件、绩效评估或解雇信。",
            keyPhrases: [
              { en: "appeal the decision", zh: "对决定提出上诉" },
              { en: "termination letters", zh: "解雇信" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You can fight it — file an appeal within thirty days. There will be a hearing where both sides get to talk. Bring whatever you have — emails, reviews, anything showing it was not misconduct.",
                textZh:
                  "你可以争取——30天内上诉。会有听证会双方都能说。带上你有的任何东西——邮件、评估、任何能证明不是不当行为的。",
                actionHint: "fight it 意思是争取/抗辩",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I was not given any warnings before being let go. Does that help my case?",
            textZh: "被解雇前没有收到任何警告。这对我的案件有帮助吗？",
            casualVersion: "They never even warned me. Does that matter?",
          },
          {
            speaker: "them",
            role: "就业办",
            textEn:
              "That could definitely help. If your employer cannot show progressive discipline — verbal warnings, written warnings, then termination — it weakens their misconduct claim. The burden of proof is on the employer to demonstrate that you were fired for valid misconduct.",
            textZh:
              "这肯定有帮助。如果雇主不能证明渐进式惩戒——口头警告、书面警告，然后解雇——他们的不当行为指控就会被削弱。雇主有举证责任证明您是因为正当的不当行为被解雇。",
            keyPhrases: [
              { en: "progressive discipline", zh: "渐进式惩戒" },
              { en: "burden of proof", zh: "举证责任" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That is actually really good for you. If they did not give you any warnings first, it is hard for them to prove misconduct. They are the ones who have to prove it, not you.",
                textZh: "这对你其实很有利。如果他们事先没有给你任何警告，很难证明是不当行为。要举证的是他们不是你。",
                actionHint: "they are the ones who have to prove it 意思是举证责任在他们",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How does the hearing work? Is it like going to court?",
            textZh: "听证会怎么进行？像上法庭吗？",
            casualVersion: "What is the hearing like?",
          },
          {
            speaker: "them",
            role: "就业办",
            textEn:
              "It is less formal than court but still taken seriously. Most hearings are done by phone. A hearing officer will swear you in, listen to both sides, review the evidence, and issue a written decision within a few weeks. You do not need a lawyer, but you can bring one if you want.",
            textZh:
              "比法庭不那么正式但仍然很严肃。大多数听证通过电话进行。听证官会让您宣誓，听取双方陈述，审查证据，并在几周内发出书面裁决。不需要律师，但如果想要可以带。",
            keyPhrases: [
              { en: "hearing officer", zh: "听证官" },
              { en: "written decision", zh: "书面裁决" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It is more relaxed than real court. Usually over the phone. Someone hears both sides, looks at the evidence, and sends you a decision in a couple weeks. No lawyer needed but you can have one.",
                textZh:
                  "比真正的法庭轻松。通常通过电话。有人听取双方意见，看证据，几周后发决定。不用律师但可以请一个。",
                actionHint: "more relaxed 意思是更轻松/不那么正式",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "If I win the appeal, will I get back pay for the weeks I missed?",
            textZh: "如果上诉赢了，错过的那几周的钱会补发吗？",
            casualVersion: "If I win, do I get the money I missed?",
          },
          {
            speaker: "them",
            role: "就业办",
            textEn:
              "Yes, if the decision is reversed in your favor, you will receive retroactive benefits for all the weeks you were eligible but did not receive payments. The back pay is usually issued within one to two weeks after the appeal decision.",
            textZh:
              "是的，如果裁决翻转对您有利，您会收到所有您有资格但未收到付款的那几周的补发福利。补发通常在上诉裁决后一到两周内发放。",
            keyPhrases: [
              { en: "retroactive benefits", zh: "补发福利" },
              { en: "reversed in your favor", zh: "翻转对您有利" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Absolutely. If you win, they pay you back for every week you should have been getting benefits. That money usually comes pretty quick — a week or two after the ruling.",
                textZh: "当然。如果你赢了，会补发你应该拿到福利的每一周。那笔钱通常来得挺快——裁决后一两周。",
                actionHint: "pay you back 意思是补发给你",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 18. 食品券申请 ====================
  {
    id: "government-food-stamps",
    category: "government",
    titleZh: "食品券申请",
    titleEn: "Food Stamps Application",
    description: "申请SNAP补充营养援助计划（食品券）",
    otherRole: "社会服务",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "申请流程",
        titleEn: "Application Process",
        description: "首次申请食品券的流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I lost my job recently and I am struggling to buy groceries. Can I apply for food stamps?",
            textZh: "我最近失业了，买食物很困难。我能申请食品券吗？",
            casualVersion: "I am having a hard time affording food. Can I get food stamps?",
          },
          {
            speaker: "them",
            role: "社会服务",
            textEn:
              "I am sorry to hear about your situation. Yes, you may qualify for SNAP benefits — that is what food stamps are officially called now. Eligibility is based on your household size and income. How many people are in your household?",
            textZh:
              "很遗憾听到您的情况。是的，您可能有资格获得SNAP福利——这是食品券现在的正式名称。资格取决于您的家庭人数和收入。您家里有多少人？",
            keyPhrases: [
              { en: "SNAP benefits", zh: "SNAP福利（补充营养援助）" },
              { en: "household size", zh: "家庭人数" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sorry you are going through that. You might be eligible for SNAP — the food assistance program. It depends on how many people live with you and what everyone makes. How big is your household?",
                textZh:
                  "很遗憾你在经历这些。你可能有资格申请SNAP——食品援助计划。取决于家里住多少人和大家的收入。你家里几口人？",
                actionHint: "going through that 意思是正在经历这些",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "It is just me and my two children. I have no income right now.",
            textZh: "就我和两个孩子。我现在没有收入。",
            casualVersion: "Me and two kids. No money coming in.",
          },
          {
            speaker: "them",
            role: "社会服务",
            textEn:
              "A household of three with no income would very likely qualify. The maximum monthly benefit for a family of three is six hundred and fifty-eight dollars. You can apply online, by mail, or in person here. I can help you start the application right now if you have your ID and proof of residency.",
            textZh:
              "三口之家没有收入很可能符合资格。三人家庭的最高月度福利是658美元。您可以在线、邮寄或亲自到这里申请。如果您带了证件和居住证明，我现在就可以帮您开始申请。",
            keyPhrases: [
              { en: "maximum monthly benefit", zh: "最高月度福利" },
              { en: "proof of residency", zh: "居住证明" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "With three people and no income, you should definitely qualify. You could get up to six hundred and fifty-eight a month. Want to do the application now? Just need your ID and something showing your address.",
                textZh:
                  "三个人没收入的话肯定能申请到。每月最多能拿658。现在就做申请吗？只需要证件和一个能显示你地址的东西。",
                actionHint: "something showing your address 指居住证明",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I have those with me. How long does it take to start receiving benefits?",
            textZh: "有，我都带着。多久能开始领取福利？",
            casualVersion: "I have them. How soon can I get the benefits?",
          },
          {
            speaker: "them",
            role: "社会服务",
            textEn:
              "If you are in an emergency situation with very low resources, you may qualify for expedited processing within seven days. Otherwise, standard processing takes up to thirty days. You will receive an EBT card — it works like a debit card at grocery stores.",
            textZh:
              "如果您处于紧急情况且资源很少，可能有资格在七天内获得加急处理。否则标准处理最多30天。您会收到一张EBT卡——在超市像借记卡一样使用。",
            keyPhrases: [
              { en: "expedited processing", zh: "加急处理" },
              { en: "EBT card", zh: "EBT卡（电子福利转移卡）" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Since you have no income, you might get it fast — within a week through the emergency process. Otherwise it is up to a month. They give you an EBT card that you swipe at the store like a regular card.",
                textZh:
                  "因为你没有收入，可能很快就能拿到——通过紧急程序一周内。不然的话最多一个月。他们给你一张EBT卡，在商店像普通卡一样刷。",
                actionHint: "swipe at the store 意思是在商店刷卡",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What can I buy with the EBT card?",
            textZh: "EBT卡可以买什么？",
            casualVersion: "What does the card cover?",
          },
          {
            speaker: "them",
            role: "社会服务",
            textEn:
              "You can buy most food items — bread, cereal, fruits, vegetables, meat, dairy, and snacks. You cannot use it for alcohol, tobacco, vitamins, prepared hot food, or non-food items like cleaning supplies. Some farmers markets also accept EBT.",
            textZh:
              "可以购买大多数食品——面包、谷物、水果、蔬菜、肉、奶制品和零食。不能用于购买酒类、烟草、维生素、准备好的热食或清洁用品等非食品类。一些农贸市场也接受EBT。",
            keyPhrases: [
              { en: "food items", zh: "食品类" },
              { en: "farmers markets", zh: "农贸市场" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Pretty much any groceries — bread, meat, produce, snacks, whatever. No alcohol, no cigarettes, no hot ready-to-eat meals, no household stuff. Some farmers markets take it too which is cool.",
                textZh:
                  "基本上所有杂货——面包、肉、蔬果、零食都行。不能买酒、烟、热的即食餐、家用品。一些农贸市场也收。",
                actionHint: "produce 指新鲜蔬菜水果",
                frequency: "common",
              },
            ],
            culturalNote:
              "SNAP（原食品券）是美国最大的营养援助计划。现在使用EBT电子卡而非纸质券。申请时不必感到不好意思，这是每个符合条件的人的权利。",
          },
        ],
      },
      {
        id: "recertification",
        titleZh: "资格复审",
        titleEn: "Recertification",
        description: "SNAP福利到期后的资格复审",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I got a notice saying I need to recertify for SNAP. What does that mean?",
            textZh: "我收到通知说需要重新认证SNAP。这是什么意思？",
            casualVersion: "They say I need to recertify. What do I do?",
          },
          {
            speaker: "them",
            role: "社会服务",
            textEn:
              "SNAP benefits are not permanent — they need to be renewed periodically, usually every six to twelve months. Recertification means we review your current situation to see if you still qualify. You need to submit updated income and household information.",
            textZh:
              "SNAP福利不是永久的——需要定期更新，通常每六到十二个月。重新认证意味着我们审查您当前的情况看是否仍然符合资格。您需要提交更新的收入和家庭信息。",
            keyPhrases: [
              { en: "recertification", zh: "重新认证" },
              { en: "updated income", zh: "更新的收入信息" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Your benefits need to be renewed every so often. Basically we check in to make sure you still qualify. Just send us your latest income info and anything that has changed.",
                textZh:
                  "你的福利需要定期续。基本上我们核实你是否仍然符合资格。把最新的收入信息和任何变化发给我们就行。",
                actionHint: "every so often 意思是每隔一段时间",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I found a part-time job since my last application. Will I still qualify?",
            textZh: "上次申请后我找到了一份兼职。还能继续符合资格吗？",
            casualVersion: "I am working part-time now. Do I still get benefits?",
          },
          {
            speaker: "them",
            role: "社会服务",
            textEn:
              "Possibly. Having a job does not automatically disqualify you. It depends on how much you earn. For a household of three, the gross income limit is about two thousand three hundred and eleven dollars per month. If you earn less than that, you may still be eligible for reduced benefits.",
            textZh:
              "有可能。有工作不会自动取消资格。取决于您赚多少。三口之家的总收入限额大约每月2311美元。如果您赚的少于这个数，可能仍有资格获得减少的福利。",
            keyPhrases: [
              { en: "gross income limit", zh: "总收入限额" },
              { en: "reduced benefits", zh: "减少的福利" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Maybe. Working does not mean you lose it. For three people, you can make up to about twenty-three hundred a month and still get something. The benefit amount goes down as your income goes up.",
                textZh: "也许。工作不意味着失去福利。三口人每月收入大约2300以下仍然能拿到一些。收入越高福利越少。",
                actionHint: "get something 意思是仍能获得一些福利",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What documents do I need for recertification?",
            textZh: "重新认证需要什么文件？",
            casualVersion: "What do I need to bring?",
          },
          {
            speaker: "them",
            role: "社会服务",
            textEn:
              "Bring your recent pay stubs from the last thirty days, proof of any other income, current rent or mortgage statement, and utility bills. If anything in your household has changed — like someone moved in or out — let us know that too.",
            textZh:
              "带上最近30天的工资单、其他收入证明、当前的房租或房贷账单，以及水电账单。如果家庭情况有变化——比如有人搬进来或搬出去——也要告诉我们。",
            keyPhrases: [
              { en: "pay stubs", zh: "工资单" },
              { en: "utility bills", zh: "水电账单" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Last month of pay stubs, any other money coming in, what you pay for rent, and your utility bills. And if anyone moved in or out of your place, tell us.",
                textZh: "上个月的工资单、其他收入、房租多少、水电账单。如果有人搬进来或搬走也要说。",
                actionHint: "money coming in 意思是收入",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What happens if I miss the recertification deadline?",
            textZh: "如果错过重新认证的截止日期会怎样？",
            casualVersion: "What if I miss the deadline?",
          },
          {
            speaker: "them",
            role: "社会服务",
            textEn:
              "If you miss the deadline, your benefits will stop at the end of the certification period. You would need to reapply as a new applicant, which means going through the full thirty-day processing time again. So try to submit your recertification before the date on the notice.",
            textZh:
              "如果错过截止日期，福利会在认证期结束时停止。您需要作为新申请人重新申请，这意味着再次经历完整的30天处理时间。所以请尽量在通知上的日期前提交重新认证。",
            keyPhrases: [
              { en: "certification period", zh: "认证期" },
              { en: "reapply as a new applicant", zh: "作为新申请人重新申请" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Your benefits just stop and you have to start all over from scratch. That means another month wait. So do not miss it — get it done before the deadline on your letter.",
                textZh: "福利直接停掉你得从头来。又要等一个月。所以别错过——在信上的截止日前搞定。",
                actionHint: "from scratch 意思是从头开始",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 19. 医保申请 ====================
  {
    id: "government-medicare-medicaid",
    category: "government",
    titleZh: "医保申请",
    titleEn: "Medicare and Medicaid",
    description: "申请政府医疗保险计划",
    otherRole: "社会服务",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "了解医保选项",
        titleEn: "Understanding Options",
        description: "了解Medicare和Medicaid的区别和申请条件",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "I do not have health insurance. Can you tell me about government health programs I might qualify for?",
            textZh: "我没有医疗保险。能告诉我可能符合资格的政府医疗计划吗？",
            casualVersion: "I need health insurance but can not afford it. What programs are out there?",
          },
          {
            speaker: "them",
            role: "社会服务",
            textEn:
              "There are two main government programs. Medicare is for people sixty-five and older or those with certain disabilities. Medicaid is for low-income individuals and families. How old are you, and can you tell me about your income situation?",
            textZh:
              "有两个主要的政府计划。Medicare是给65岁及以上或有某些残疾的人。Medicaid是给低收入个人和家庭的。您多大了？能告诉我您的收入情况吗？",
            keyPhrases: [
              { en: "Medicare", zh: "联邦医疗保险（65岁以上）" },
              { en: "Medicaid", zh: "医疗补助（低收入）" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Two big ones — Medicare for seniors and disabled folks, Medicaid for people with low income. How old are you and what is your income like?",
                textZh: "两个主要的——Medicare给老年人和残疾人，Medicaid给低收入人群。你多大？收入怎么样？",
                actionHint: "seniors 指老年人",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I am thirty-two years old and I make about twenty thousand dollars a year.",
            textZh: "我32岁，年收入大约两万美元。",
            casualVersion: "Thirty-two, making about twenty grand a year.",
          },
          {
            speaker: "them",
            role: "社会服务",
            textEn:
              "At your income level, you would likely qualify for Medicaid or subsidized coverage through the health insurance marketplace. In our state, the income limit for Medicaid for an individual is about twenty thousand dollars. You are right at the threshold, so let us check your eligibility.",
            textZh:
              "以您的收入水平，您可能有资格获得Medicaid或通过医疗保险市场获得补贴保险。在我们州，个人的Medicaid收入限额大约是两万美元。您刚好在门槛上，让我们来核实您的资格。",
            keyPhrases: [
              { en: "health insurance marketplace", zh: "医疗保险市场" },
              { en: "subsidized coverage", zh: "补贴保险" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You are right around the cutoff for Medicaid in our state. If you do not quite qualify, you could get a subsidized plan through the marketplace — that is Obamacare basically. Let me run the numbers.",
                textZh:
                  "你在我们州Medicaid的门槛附近。如果不太够格，可以通过市场拿到补贴计划——基本上就是奥巴马医保。让我算算。",
                actionHint: "run the numbers 意思是计算",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What does Medicaid cover?",
            textZh: "Medicaid涵盖什么？",
            casualVersion: "What do I get with Medicaid?",
          },
          {
            speaker: "them",
            role: "社会服务",
            textEn:
              "Medicaid covers doctor visits, hospital stays, prescriptions, lab tests, mental health services, and preventive care. In most cases, there is no monthly premium and very low or no copays. Coverage begins as soon as you are approved.",
            textZh:
              "Medicaid涵盖看诊、住院、处方药、化验、心理健康服务和预防保健。大多数情况下没有月保费，共付额很低或没有。批准后立即开始保障。",
            keyPhrases: [
              { en: "monthly premium", zh: "月保费" },
              { en: "copays", zh: "共付额" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Basically everything — doctors, hospital, prescriptions, tests, therapy, checkups. And the best part is there is usually no monthly cost and little to no copay when you go in.",
                textZh:
                  "基本上全覆盖——看医生、住院、处方药、检查、治疗、体检。最好的是通常没有月费，看病时也几乎不用掏钱。",
                actionHint: "go in 意思是去看病",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How do I apply?",
            textZh: "怎么申请？",
            casualVersion: "How do I sign up?",
          },
          {
            speaker: "them",
            role: "社会服务",
            textEn:
              "You can apply online at healthcare.gov or your state Medicaid website, by phone, or in person here. You will need your Social Security number, proof of income like pay stubs or a tax return, proof of residency, and identification. Applications are processed within forty-five days.",
            textZh:
              "您可以在healthcare.gov或州Medicaid网站在线申请，打电话或亲自到这里申请。需要社保号、收入证明如工资单或报税表、居住证明和身份证件。申请在45天内处理。",
            keyPhrases: [
              { en: "healthcare.gov", zh: "医保申请网站" },
              { en: "proof of income", zh: "收入证明" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Go to healthcare.gov, call, or come in. Bring your Social, something showing your income, proof of where you live, and your ID. Takes about forty-five days to process.",
                textZh: "上healthcare.gov、打电话或来这里。带上社保号、收入证明、住址证明和身份证。大约45天处理。",
                actionHint: "something showing your income 指收入证明文件",
                frequency: "common",
              },
            ],
            culturalNote:
              "Medicare和Medicaid是美国两大政府医疗计划，很多人容易混淆。Medicare面向65岁以上老人（不论收入），Medicaid面向低收入人群（不论年龄）。两者可以同时拥有。",
          },
        ],
      },
      {
        id: "medicare-enrollment",
        titleZh: "Medicare注册",
        titleEn: "Medicare Enrollment",
        description: "65岁后注册Medicare的流程",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I am turning sixty-five next month. When should I sign up for Medicare?",
            textZh: "我下个月就65岁了。什么时候应该注册Medicare？",
            casualVersion: "I turn sixty-five next month. When do I get Medicare?",
          },
          {
            speaker: "them",
            role: "社会服务",
            textEn:
              "Your initial enrollment period starts three months before the month you turn sixty-five and ends three months after. So you are right in the window. If you delay enrollment without qualifying coverage, you may face a late enrollment penalty — a permanent increase in your premiums.",
            textZh:
              "您的初始注册期从您满65岁那个月前三个月开始，到之后三个月结束。所以您正好在窗口期内。如果没有符合条件的保险而延迟注册，可能面临迟注册罚款——保费永久增加。",
            keyPhrases: [
              { en: "initial enrollment period", zh: "初始注册期" },
              { en: "late enrollment penalty", zh: "迟注册罚款" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You have a seven-month window around your birthday to sign up — three months before, your birthday month, and three months after. Do not miss it because they charge you more forever if you are late.",
                textZh:
                  "你有一个围绕生日的七个月窗口期——前三个月、生日当月和后三个月。别错过因为迟了他们会永久多收你钱。",
                actionHint: "charge you more forever 意思是永久多收费",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What is the difference between Part A, Part B, and Part D?",
            textZh: "Part A、Part B和Part D有什么区别？",
            casualVersion: "What are all these different parts?",
          },
          {
            speaker: "them",
            role: "社会服务",
            textEn:
              "Part A covers hospital stays and is usually free if you paid Medicare taxes for at least ten years. Part B covers doctor visits and outpatient services — the standard premium is about one hundred and seventy-four dollars per month. Part D covers prescription drugs and is optional but recommended.",
            textZh:
              "Part A覆盖住院，如果您缴纳了至少十年的Medicare税通常免费。Part B覆盖看诊和门诊服务——标准保费大约每月174美元。Part D覆盖处方药，是可选的但建议注册。",
            keyPhrases: [
              { en: "Part A", zh: "A部分（住院保险）" },
              { en: "outpatient services", zh: "门诊服务" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "A is hospital — free if you worked long enough. B is doctors and clinics — about a hundred seventy-four a month. D is prescriptions — optional but smart to get.",
                textZh: "A是住院——工作时间够长就免费。B是看医生和诊所——每月大约174。D是处方药——可选但建议办。",
                actionHint: "smart to get 意思是办了比较明智",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Should I also consider a Medicare Advantage plan?",
            textZh: "我还应该考虑Medicare Advantage计划吗？",
            casualVersion: "What about Medicare Advantage?",
          },
          {
            speaker: "them",
            role: "社会服务",
            textEn:
              "Medicare Advantage, also called Part C, is an alternative offered by private insurance companies. It bundles Part A, Part B, and usually Part D together, often with extra benefits like dental, vision, and hearing. Some plans have zero additional premiums. However, they use provider networks, so you may need to use specific doctors.",
            textZh:
              "Medicare Advantage也叫Part C，是私人保险公司提供的替代方案。它把A部分、B部分通常还有D部分捆绑在一起，通常有额外福利如牙科、视力和听力。有些计划没有额外保费。但它们使用医疗网络，所以您可能需要使用指定的医生。",
            keyPhrases: [
              { en: "Medicare Advantage", zh: "Medicare优势计划" },
              { en: "provider networks", zh: "医疗提供者网络" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That is Part C. Private companies run it and they bundle everything together — hospital, doctor, drugs — sometimes with extras like dental and vision. Some are free on top of your Part B premium. But you might have to stick with their network of doctors.",
                textZh:
                  "那是Part C。私人公司运营，把所有的打包在一起——住院、看诊、药——有时还有牙科和视力之类的额外福利。有些在B部分保费之上不另外收费。但你可能得用他们网络内的医生。",
                actionHint: "stick with 意思是坚持使用",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "This is a lot of information. Is there someone who can help me compare my options?",
            textZh: "信息量好大。有人能帮我比较选项吗？",
            casualVersion: "This is confusing. Can someone help me figure it out?",
          },
          {
            speaker: "them",
            role: "社会服务",
            textEn:
              "Absolutely. We have free counselors through the SHIP program — State Health Insurance Assistance Program. They are trained to help you compare Original Medicare versus Advantage plans and find the best option for your situation. I can schedule an appointment for you.",
            textZh:
              "当然。我们通过SHIP计划——州健康保险援助计划——有免费顾问。他们经过培训帮助您比较原始Medicare和Advantage计划，找到最适合您情况的选项。我可以帮您预约。",
            keyPhrases: [
              { en: "SHIP program", zh: "州健康保险援助计划" },
              { en: "free counselors", zh: "免费顾问" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Totally understandable. There is a free program called SHIP — they have counselors who help you figure out the best plan. Want me to set up an appointment?",
                textZh: "完全理解。有一个叫SHIP的免费项目——有顾问帮你找到最好的计划。要我帮你约一个吗？",
                actionHint: "set up an appointment 意思是预约",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 20. 社保福利 ====================
  {
    id: "government-social-security",
    category: "government",
    titleZh: "社保福利",
    titleEn: "Social Security Benefits",
    description: "了解和申请社会保障福利",
    otherRole: "SSA职员",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "退休福利咨询",
        titleEn: "Retirement Benefits",
        description: "咨询社保退休福利和领取时间",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I am sixty-two and thinking about retiring. Can I start collecting Social Security?",
            textZh: "我62岁了正在考虑退休。可以开始领取社保吗？",
            casualVersion: "I am sixty-two. Can I start getting Social Security?",
          },
          {
            speaker: "them",
            role: "SSA职员",
            textEn:
              "You can start collecting at sixty-two, but your benefits will be permanently reduced compared to waiting until your full retirement age. For people born in 1964 or later, full retirement age is sixty-seven. If you claim at sixty-two, your monthly benefit would be about thirty percent less.",
            textZh:
              "您可以在62岁开始领取，但与等到完全退休年龄相比，福利会被永久减少。1964年或之后出生的人，完全退休年龄是67岁。如果62岁领取，月度福利会少大约30%。",
            keyPhrases: [
              { en: "full retirement age", zh: "完全退休年龄" },
              { en: "permanently reduced", zh: "永久减少" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You can, but you will get less money every month — about thirty percent less than if you wait until sixty-seven. And that cut is permanent. It does not go back up later.",
                textZh: "可以，但每月拿的钱会少——比等到67岁少大约30%。而且减少是永久的。以后不会回升。",
                actionHint: "that cut is permanent 意思是减少是永久的",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What if I wait until sixty-seven or even seventy?",
            textZh: "如果等到67岁甚至70岁呢？",
            casualVersion: "What do I get if I wait longer?",
          },
          {
            speaker: "them",
            role: "SSA职员",
            textEn:
              "At sixty-seven, you receive one hundred percent of your calculated benefit. If you delay until seventy, you get an extra eight percent per year — so twenty-four percent more than at sixty-seven. After seventy, there is no additional increase, so there is no reason to wait past that.",
            textZh:
              "67岁时您获得100%的计算福利。如果延迟到70岁，每年多8%——所以比67岁多24%。70岁后不再增加，所以没有理由等到超过70岁。",
            keyPhrases: [
              { en: "eight percent per year", zh: "每年8%" },
              { en: "no additional increase", zh: "不再增加" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "At sixty-seven you get the full amount. Wait until seventy and it goes up another eight percent each year you wait — that is twenty-four percent more total. After seventy, it stops growing.",
                textZh: "67岁拿全额。等到70岁的话每等一年多8%——总共多24%。70岁后就不长了。",
                actionHint: "stops growing 意思是不再增长",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How much would my monthly benefit be?",
            textZh: "我每月的福利是多少？",
            casualVersion: "How much would I actually get?",
          },
          {
            speaker: "them",
            role: "SSA职员",
            textEn:
              "It depends on your lifetime earnings. You can check your personalized estimate by creating an account at ssa.gov. Your Social Security statement shows your projected benefits at ages sixty-two, sixty-seven, and seventy. The average retirement benefit right now is about one thousand nine hundred dollars per month.",
            textZh:
              "取决于您一生的收入。您可以在ssa.gov注册账户查看个人化估算。您的社保声明显示62岁、67岁和70岁的预计福利。目前平均退休福利大约每月1900美元。",
            keyPhrases: [
              { en: "lifetime earnings", zh: "一生收入" },
              { en: "Social Security statement", zh: "社保声明" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It is based on how much you earned over your career. Go to ssa.gov and make an account — it shows you exactly what you would get at different ages. Average is about nineteen hundred a month.",
                textZh: "基于你职业生涯赚了多少。上ssa.gov注册账户——会显示不同年龄能拿多少。平均大约每月1900。",
                actionHint: "nineteen hundred 是1900的另一种说法",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I work and collect Social Security at the same time?",
            textZh: "可以一边工作一边领社保吗？",
            casualVersion: "Can I still work while getting Social Security?",
          },
          {
            speaker: "them",
            role: "SSA职员",
            textEn:
              "Yes, but if you claim before full retirement age and earn above a certain limit — currently about twenty-two thousand dollars a year — your benefits will be temporarily reduced. One dollar is withheld for every two dollars you earn above the limit. After reaching full retirement age, there is no earnings limit.",
            textZh:
              "可以，但如果在完全退休年龄前领取且收入超过一定限额——目前大约每年22000美元——福利会暂时减少。超过限额每赚2美元扣减1美元。达到完全退休年龄后没有收入限制。",
            keyPhrases: [
              { en: "earnings limit", zh: "收入限额" },
              { en: "temporarily reduced", zh: "暂时减少" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yes, but before sixty-seven, if you make too much — over about twenty-two grand a year — they hold back some of your benefits. After sixty-seven, earn as much as you want with no reduction.",
                textZh: "可以，但67岁之前如果赚太多——超过大约22000一年——他们会扣一部分福利。67岁后赚多少都行不会减少。",
                actionHint: "hold back 意思是扣留/减少",
                frequency: "common",
              },
            ],
            culturalNote:
              "社保退休福利领取时间的选择对一生的收入影响很大。一般建议：如果健康状况好且有其他收入来源，延迟领取通常更划算。可以在ssa.gov上用计算器比较不同领取时间的总收入。",
          },
        ],
      },
      {
        id: "survivor",
        titleZh: "遗属福利",
        titleEn: "Survivor Benefits",
        description: "配偶去世后申请遗属社保福利",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "My husband passed away recently. Am I eligible for survivor benefits?",
            textZh: "我丈夫最近去世了。我有资格领取遗属福利吗？",
            casualVersion: "My husband just passed. Can I get his Social Security?",
          },
          {
            speaker: "them",
            role: "SSA职员",
            textEn:
              "I am sorry for your loss. Yes, as a surviving spouse, you may be eligible for survivor benefits. If you are sixty or older, you can receive benefits based on your husband earnings record. If you are caring for a child under sixteen, you may qualify at any age.",
            textZh:
              "对您的损失深表遗憾。是的，作为遗属配偶，您可能有资格获得遗属福利。如果您60岁或以上，可以根据您丈夫的收入记录领取福利。如果您在抚养16岁以下的孩子，任何年龄都可能符合资格。",
            keyPhrases: [
              { en: "survivor benefits", zh: "遗属福利" },
              { en: "earnings record", zh: "收入记录" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I am so sorry. Yes, as his surviving spouse, you can likely get benefits based on his work record. If you are over sixty, you qualify. Or if you have kids under sixteen at home, you can get them at any age.",
                textZh:
                  "非常抱歉。是的，作为他的遗属配偶，你很可能可以根据他的工作记录领取福利。60岁以上就符合条件。或者如果家里有16岁以下的孩子，任何年龄都可以。",
                actionHint: "his work record 指他的工作收入记录",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I am fifty-eight and we have no minor children. What are my options?",
            textZh: "我58岁，没有未成年子女。我有什么选择？",
            casualVersion: "I am fifty-eight with no young kids. What can I do?",
          },
          {
            speaker: "them",
            role: "SSA职员",
            textEn:
              "At fifty-eight, you are not yet eligible for regular survivor benefits — that starts at sixty. However, you are entitled to a one-time lump-sum death payment of two hundred and fifty-five dollars. When you turn sixty, you can apply for survivor benefits, or you can wait until your full retirement age to receive the full amount.",
            textZh:
              "58岁您还不符合常规遗属福利的条件——那从60岁开始。不过您有权获得一次性255美元的丧葬补助金。到60岁时您可以申请遗属福利，或者等到完全退休年龄领取全额。",
            keyPhrases: [
              { en: "lump-sum death payment", zh: "一次性丧葬补助金" },
              { en: "full amount", zh: "全额" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "At fifty-eight, you are two years short for survivor benefits. You can get a small one-time payment of two hundred and fifty-five dollars now. Once you hit sixty, you can start collecting, or wait for full retirement age to get more per month.",
                textZh:
                  "58岁差两年才能领遗属福利。现在可以拿到一次性255美元。到60岁就可以开始领，或者等到完全退休年龄每月拿更多。",
                actionHint: "two years short 意思是差两年",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I collect survivor benefits and my own retirement benefits at the same time?",
            textZh: "可以同时领取遗属福利和自己的退休福利吗？",
            casualVersion: "Can I get both his and mine?",
          },
          {
            speaker: "them",
            role: "SSA职员",
            textEn:
              "You cannot receive both full amounts simultaneously, but you can strategize. For example, you could take survivor benefits at sixty and then switch to your own retirement benefits at seventy if yours would be higher. We can help you figure out which combination gives you the most money over time.",
            textZh:
              "您不能同时领取两个全额，但可以制定策略。例如，您可以在60岁领遗属福利，然后在70岁时如果您自己的更高就切换到自己的退休福利。我们可以帮您计算哪种组合随时间能给您最多的钱。",
            keyPhrases: [
              { en: "switch to", zh: "切换到" },
              { en: "strategize", zh: "制定策略" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Not both at once, but you can be smart about it. Start with one and switch to the other later if it pays more. Come in and we can crunch the numbers for you to see what works best.",
                textZh:
                  "不能同时拿两个，但可以聪明地安排。先领一个之后如果另一个更多就切换。来我们这里帮你算算哪种最好。",
                actionHint: "crunch the numbers 意思是仔细计算",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What documents do I need to bring when I apply?",
            textZh: "申请时需要带什么文件？",
            casualVersion: "What do I need to bring?",
          },
          {
            speaker: "them",
            role: "SSA职员",
            textEn:
              "Bring the death certificate, your marriage certificate, both Social Security numbers, your birth certificate, and your most recent tax return. If you have his most recent Social Security statement, that would be helpful too. You can apply in person or start the process by calling us.",
            textZh:
              "带上死亡证明、结婚证、双方的社保号、您的出生证明和最近的报税表。如果有他最近的社保声明也会有帮助。您可以亲自来申请或打电话开始流程。",
            keyPhrases: [
              { en: "death certificate", zh: "死亡证明" },
              { en: "marriage certificate", zh: "结婚证" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Death certificate, marriage certificate, both your Socials, your birth certificate, and last year tax return. If you can find his Social Security statement, bring that too. You can come in or call to start.",
                textZh:
                  "死亡证明、结婚证、两个人的社保号、出生证明和去年的报税表。如果能找到他的社保声明也带上。来办公室或打电话都行。",
                actionHint: "both your Socials 指两个人的社保号",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 21. 子女抚养费 ====================
  {
    id: "government-child-support",
    category: "government",
    titleZh: "子女抚养费",
    titleEn: "Child Support",
    description: "申请或修改子女抚养费令",
    otherRole: "法院人员",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "申请抚养费",
        titleEn: "Filing for Child Support",
        description: "申请子女抚养费的基本流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I need to file for child support. My ex is not contributing to our child expenses.",
            textZh: "我需要申请子女抚养费。我前任没有为孩子的费用出钱。",
            casualVersion: "My ex is not helping with the kid. How do I get child support?",
          },
          {
            speaker: "them",
            role: "法院人员",
            textEn:
              "You can open a child support case through our office or the state child support agency. We will need information about both parents — names, addresses, employers, and income. Do you already have a custody order in place?",
            textZh:
              "您可以通过我们办公室或州儿童抚养机构开设案件。我们需要双方父母的信息——姓名、地址、雇主和收入。您已经有监护权令了吗？",
            keyPhrases: [
              { en: "child support case", zh: "子女抚养费案件" },
              { en: "custody order", zh: "监护权令" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We can help you set that up. I need info on both of you — where you live, where you work, how much you make. Do you already have a custody agreement?",
                textZh: "我们可以帮你搞定。我需要你们双方的信息——住哪里、在哪工作、赚多少。已经有监护协议了吗？",
                actionHint: "set that up 意思是安排/办理",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, we have a custody agreement from our divorce. I have primary custody.",
            textZh: "有，我们离婚时有监护协议。我有主要监护权。",
            casualVersion: "Yeah, from the divorce. I have the kid most of the time.",
          },
          {
            speaker: "them",
            role: "法院人员",
            textEn:
              "Good. The child support amount is calculated using a state formula based on both parents incomes, the number of children, and the custody arrangement. Bring your divorce decree, your income information, and your ex employer and income details if you know them.",
            textZh:
              "好的。子女抚养费金额使用州公式计算，基于双方父母收入、子女数量和监护安排。带上离婚判决书、您的收入信息，如果知道的话还有前任的雇主和收入信息。",
            keyPhrases: [
              { en: "state formula", zh: "州公式" },
              { en: "custody arrangement", zh: "监护安排" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The amount is calculated by a formula — it looks at what both of you make and how much time the kid spends with each parent. Bring your divorce papers, your pay info, and whatever you know about your ex income.",
                textZh:
                  "金额是按公式算的——看你们两个赚多少和孩子跟每个父母待多少时间。带离婚文件、你的收入信息，还有你知道的前任收入情况。",
                actionHint: "whatever you know 意思是你知道的任何信息",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What if my ex refuses to pay?",
            textZh: "如果前任拒绝支付怎么办？",
            casualVersion: "What if they just do not pay?",
          },
          {
            speaker: "them",
            role: "法院人员",
            textEn:
              "Once a court order is in place, payments are usually taken directly from their paycheck through wage withholding. If they still do not pay, enforcement actions include intercepting tax refunds, suspending their driver license, placing liens on their property, and in extreme cases, jail time for contempt of court.",
            textZh:
              "一旦有法院命令，付款通常通过工资扣留直接从他们的工资中扣除。如果仍不支付，执行措施包括截留退税、暂停驾照、在其财产上设置留置权，极端情况下因藐视法庭可被判入狱。",
            keyPhrases: [
              { en: "wage withholding", zh: "工资扣留" },
              { en: "contempt of court", zh: "藐视法庭" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The money usually comes straight out of their check. If they dodge it, we can grab their tax refund, take their license, put a lien on their stuff, or even put them in jail. The court takes this seriously.",
                textZh:
                  "钱通常直接从他们工资里扣。如果逃避，我们可以截他们的退税、吊销驾照、在他们的东西上设留置权，甚至把他们送进监狱。法院对此很认真。",
                actionHint: "dodge it 意思是逃避",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How long does it take to get the support order set up?",
            textZh: "建立抚养费令需要多长时间？",
            casualVersion: "How soon can I start getting payments?",
          },
          {
            speaker: "them",
            role: "法院人员",
            textEn:
              "If both parties agree on the amount, it can be finalized in a few weeks. If the other parent contests it, there will be a hearing where a judge decides. That can take one to three months. Once the order is in place, payments typically start within thirty days.",
            textZh:
              "如果双方同意金额，几周内就能确定。如果对方有异议，会有一个法官裁决的听证会。那可能需要一到三个月。一旦命令生效，付款通常在30天内开始。",
            keyPhrases: [
              { en: "contests it", zh: "提出异议" },
              { en: "finalized", zh: "确定/最终确定" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "If everyone agrees, could be done in a few weeks. If your ex fights it, a judge has to decide — takes one to three months. After that, money starts coming in within about a month.",
                textZh: "如果都同意，几周就搞定。如果前任反对，法官来裁决——一到三个月。之后大约一个月内钱就开始来了。",
                actionHint: "fights it 意思是反对/抗争",
                frequency: "common",
              },
            ],
            culturalNote:
              "在美国，子女抚养费是法律义务，不支付可以有严重后果。金额根据州公式计算，通常包括基本生活费，有时还包括医疗保险和教育费用。如果收入变化可以申请修改。",
          },
        ],
      },
      {
        id: "modification",
        titleZh: "修改抚养费",
        titleEn: "Modifying Child Support",
        description: "因收入变化申请修改抚养费金额",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I lost my job and can not afford the current child support payments. Can the amount be changed?",
            textZh: "我失业了，付不起现在的抚养费。金额可以改吗？",
            casualVersion: "I lost my job and can not pay the current amount. Can I get it lowered?",
          },
          {
            speaker: "them",
            role: "法院人员",
            textEn:
              "Yes, you can file a motion to modify child support if there has been a significant change in circumstances — like job loss. However, you must continue making payments at the current amount until the court approves a modification. Do not just stop paying.",
            textZh:
              "可以，如果情况有重大变化——比如失业——您可以提交修改子女抚养费的动议。但在法院批准修改之前，您必须继续按当前金额支付。不要直接停止支付。",
            keyPhrases: [
              { en: "motion to modify", zh: "修改动议" },
              { en: "significant change in circumstances", zh: "情况重大变化" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You can ask the court to lower it, but until they say yes, you still owe the original amount. File a modification request and explain the situation. Whatever you do, do not just stop paying — that makes things worse.",
                textZh:
                  "你可以请求法院降低金额，但在他们同意之前你还是欠原来的数目。提交修改申请说明情况。不管怎样别直接停付——那样会更糟。",
                actionHint: "makes things worse 意思是会让情况更糟",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What evidence do I need to show that I can not pay?",
            textZh: "我需要什么证据证明我付不起？",
            casualVersion: "What do I need to prove?",
          },
          {
            speaker: "them",
            role: "法院人员",
            textEn:
              "Bring your layoff notice or termination letter, your last few pay stubs, unemployment benefit statements if you are receiving them, bank statements showing your current financial situation, and any evidence of your job search efforts.",
            textZh:
              "带上裁员通知或解雇信、最近几份工资单、如果在领取失业金的话失业金声明、显示当前财务状况的银行对账单，以及求职努力的证据。",
            keyPhrases: [
              { en: "layoff notice", zh: "裁员通知" },
              { en: "job search efforts", zh: "求职努力" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Your layoff letter, recent pay stubs, unemployment statements if you have them, bank records showing where you stand financially, and proof that you are actually looking for work.",
                textZh:
                  "裁员信、最近工资单、失业金声明（如果有的话）、显示你经济状况的银行记录，以及你确实在找工作的证明。",
                actionHint: "where you stand financially 意思是你的经济状况",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How long does the modification process take?",
            textZh: "修改流程需要多久？",
            casualVersion: "How long until it gets changed?",
          },
          {
            speaker: "them",
            role: "法院人员",
            textEn:
              "If the other parent agrees to the modification, it can be done in a few weeks. If they oppose it, a hearing will be scheduled — typically within thirty to sixty days. The judge will review both incomes and the children needs before making a decision.",
            textZh:
              "如果对方同意修改，几周内就能完成。如果反对，会安排听证会——通常在30到60天内。法官会审查双方的收入和孩子的需求后做出决定。",
            keyPhrases: [
              { en: "oppose", zh: "反对" },
              { en: "review both incomes", zh: "审查双方收入" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "If your ex agrees, pretty quick. If not, there is a hearing in a month or two. The judge looks at what both of you make and what the kids need.",
                textZh: "如果前任同意就很快。如果不同意，一两个月内有听证会。法官看你们双方赚多少和孩子需要什么。",
                actionHint: "pretty quick 意思是相当快",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Will the new amount be retroactive to when I lost my job?",
            textZh: "新金额会追溯到我失业的时候吗？",
            casualVersion: "Does it go back to when I lost my job?",
          },
          {
            speaker: "them",
            role: "法院人员",
            textEn:
              "Modifications are only effective from the date the motion is filed, not from when the change in circumstances occurred. That is why it is important to file as soon as possible after a major change. Any amounts owed before the modification date remain your obligation.",
            textZh:
              "修改只从提交动议之日起生效，不是从情况变化发生时起。这就是为什么在重大变化后尽快提交很重要。修改日期之前所欠的金额仍然是您的义务。",
            keyPhrases: [
              { en: "retroactive", zh: "追溯的" },
              { en: "date the motion is filed", zh: "提交动议之日" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No, it only changes from the day you file the paperwork. Everything you owed before that still counts. That is why you should file right away — do not wait.",
                textZh: "不会，只从你提交文件那天开始改。之前欠的还是得付。所以应该马上提交——别拖。",
                actionHint: "still counts 意思是仍然算数",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 22. 限制令 ====================
  {
    id: "government-restraining-order",
    category: "government",
    titleZh: "限制令",
    titleEn: "Restraining Order",
    description: "申请人身保护令/限制令",
    otherRole: "法院人员",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "申请限制令",
        titleEn: "Filing for Restraining Order",
        description: "了解和申请人身保护令",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I feel unsafe and need a restraining order against someone. How do I get one?",
            textZh: "我感到不安全，需要对某人申请限制令。怎么获得？",
            casualVersion: "I need a restraining order. What do I do?",
          },
          {
            speaker: "them",
            role: "法院人员",
            textEn:
              "I am sorry you are in this situation. You can file for a restraining order right here at the courthouse. There are different types depending on your relationship with the person — domestic violence, harassment, or civil harassment. Can you tell me about your situation?",
            textZh:
              "很遗憾您处于这种情况。您可以在法院这里申请限制令。根据您与对方的关系有不同类型——家庭暴力、骚扰或民事骚扰。能告诉我您的情况吗？",
            keyPhrases: [
              { en: "restraining order", zh: "限制令" },
              { en: "domestic violence", zh: "家庭暴力" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I am sorry. You can get one here. There are a few kinds — depends on who you need protection from. A partner, an ex, a neighbor? Tell me what is going on.",
                textZh:
                  "很抱歉。你可以在这里获得。有几种类型——取决于你需要保护免受谁的侵害。伴侣、前任、邻居？告诉我怎么回事。",
                actionHint: "what is going on 意思是怎么回事/发生了什么",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "It is my ex-partner. They have been following me and sending threatening messages.",
            textZh: "是我的前任。他一直跟踪我并发送威胁信息。",
            casualVersion: "My ex. They are stalking me and sending threats.",
          },
          {
            speaker: "them",
            role: "法院人员",
            textEn:
              "That would fall under a domestic violence restraining order since you had an intimate relationship. You fill out the petition describing the abuse and any incidents. A judge can review it today and issue a temporary restraining order immediately. There is no filing fee for domestic violence cases.",
            textZh:
              "因为你们有过亲密关系，这属于家庭暴力限制令。您填写申请书描述虐待行为和任何事件。法官今天就可以审查并立即签发临时限制令。家庭暴力案件不收立案费。",
            keyPhrases: [
              { en: "temporary restraining order", zh: "临时限制令" },
              { en: "no filing fee", zh: "不收立案费" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Since it is an ex, that is a domestic violence order. Write down everything that happened on the form. A judge can look at it today and give you a temp order right away. No cost for DV cases.",
                textZh:
                  "因为是前任，属于家庭暴力令。在表格上写下发生的一切。法官今天就能看并马上给你临时令。家暴案件不收费。",
                actionHint: "DV 是 domestic violence 的缩写",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What does the restraining order actually prevent them from doing?",
            textZh: "限制令实际上禁止他们做什么？",
            casualVersion: "What exactly does the order stop them from doing?",
          },
          {
            speaker: "them",
            role: "法院人员",
            textEn:
              "The order can require them to stay a certain distance from you — typically one hundred yards — from your home, workplace, and children school. It prohibits any contact including calls, texts, emails, and social media. They may also be required to surrender any firearms.",
            textZh:
              "命令可以要求他们与您保持一定距离——通常100码——远离您的家、工作地点和孩子的学校。禁止任何联系包括电话、短信、电子邮件和社交媒体。他们还可能被要求交出所有枪支。",
            keyPhrases: [
              { en: "stay a certain distance", zh: "保持一定距离" },
              { en: "surrender any firearms", zh: "交出枪支" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "They have to stay away from you — usually a hundred yards — and away from your home, job, and your kids school. No calling, texting, emailing, nothing on social media. And they have to give up any guns.",
                textZh:
                  "他们必须远离你——通常100码——远离你的家、工作地点和孩子的学校。不能打电话、发短信、发邮件、社交媒体也不行。还得交出所有枪。",
                actionHint: "give up 意思是交出",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How long does the temporary order last?",
            textZh: "临时限制令持续多久？",
            casualVersion: "How long does the temp order last?",
          },
          {
            speaker: "them",
            role: "法院人员",
            textEn:
              "The temporary order lasts until the court hearing, which is scheduled within twenty-one days. At the hearing, both sides can present evidence. If the judge grants a permanent order, it typically lasts three to five years and can be renewed. There are also victim advocates available to help you through the process for free.",
            textZh:
              "临时令持续到法庭听证会，通常在21天内安排。听证会上双方可以提交证据。如果法官批准永久令，通常持续三到五年，可以续期。还有免费的受害者援助人员帮助您完成整个过程。",
            keyPhrases: [
              { en: "permanent order", zh: "永久限制令" },
              { en: "victim advocates", zh: "受害者援助人员" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It lasts until the hearing — about three weeks out. At the hearing, if the judge agrees, you get a longer-term order — usually three to five years. And there are free advocates here who can walk you through everything.",
                textZh:
                  "持续到听证会——大约三周后。听证会上如果法官同意，你会拿到更长期的命令——通常三到五年。这里还有免费的援助人员帮你走完整个流程。",
                actionHint: "walk you through 意思是引导你完成",
                frequency: "common",
              },
            ],
            culturalNote:
              "在美国，限制令是保护受害者的重要法律工具。违反限制令是刑事犯罪，可被逮捕。如果处于紧急危险中，应先拨打911，然后再去法院申请限制令。很多法院和社区组织提供免费的法律援助。",
          },
        ],
      },
      {
        id: "hearing",
        titleZh: "限制令听证",
        titleEn: "Restraining Order Hearing",
        description: "参加限制令的正式听证会",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "My restraining order hearing is next week. How should I prepare?",
            textZh: "我的限制令听证会下周。我该怎么准备？",
            casualVersion: "I have my hearing next week. What do I do?",
          },
          {
            speaker: "them",
            role: "法院人员",
            textEn:
              "Gather all your evidence — save screenshots of threatening messages, print any emails, bring photos of any injuries, and get copies of police reports if you filed any. Organize everything in chronological order. If you have witnesses, they should come to court or provide written statements.",
            textZh:
              "收集所有证据——保存威胁信息的截图、打印任何邮件、带上受伤照片，如果报过警就获取警察报告副本。按时间顺序整理所有东西。如果有证人，他们应该到庭或提供书面陈述。",
            keyPhrases: [
              { en: "chronological order", zh: "时间顺序" },
              { en: "police reports", zh: "警察报告" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Get everything together — screenshots, emails, photos, police reports. Put it all in order by date. If anyone saw what happened, bring them or get them to write a statement.",
                textZh:
                  "把所有东西收集好——截图、邮件、照片、报警记录。按日期排好顺序。如果有人看到了发生的事，带他们来或让他们写一份陈述。",
                actionHint: "put it all in order 意思是按顺序整理好",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Will the other person be there too? I am scared to be in the same room.",
            textZh: "对方也会在场吗？我害怕和他在同一个房间。",
            casualVersion: "Will they be there? That scares me.",
          },
          {
            speaker: "them",
            role: "法院人员",
            textEn:
              "Yes, they have the right to be there and respond. But the court takes your safety seriously. Let us know when you arrive and we can arrange for you to wait in a separate area. A bailiff will be in the courtroom at all times. You can also request to testify via video link in some cases.",
            textZh:
              "是的，他们有权到场并回应。但法院非常重视您的安全。到达时告诉我们，我们可以安排您在单独的区域等候。法庭里始终有法警在场。在某些情况下您也可以要求通过视频连线作证。",
            keyPhrases: [
              { en: "bailiff", zh: "法警" },
              { en: "testify via video link", zh: "通过视频连线作证" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "They will be there, but you are protected. Tell us when you get here and we will keep you apart. There is security in the courtroom. Some judges also let you do it over video if you are really worried.",
                textZh:
                  "他们会在，但你是受保护的。到了告诉我们，我们会让你们分开。法庭里有保安。有些法官也允许通过视频参加如果你真的很担心。",
                actionHint: "keep you apart 意思是让你们分开",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What will the judge ask me?",
            textZh: "法官会问我什么？",
            casualVersion: "What kind of questions will the judge ask?",
          },
          {
            speaker: "them",
            role: "法院人员",
            textEn:
              "The judge will ask you to describe the incidents that made you fear for your safety — when they happened, what was said or done, and how it affected you. Be specific with dates, times, and details. Speak calmly and clearly. The other side may also ask you questions through the judge.",
            textZh:
              "法官会让您描述让您担心自身安全的事件——什么时候发生的，说了或做了什么，以及对您有什么影响。要具体说明日期、时间和细节。冷静清晰地发言。对方也可能通过法官向您提问。",
            keyPhrases: [
              { en: "fear for your safety", zh: "担心自身安全" },
              { en: "specific with dates", zh: "具体说明日期" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "They will want to know what happened, when, and why it scared you. Be as detailed as you can — dates, times, exact words. Stay calm and stick to the facts. The other person might get to ask you stuff too.",
                textZh:
                  "他们想知道发生了什么、什么时候、为什么让你害怕。尽可能详细——日期、时间、原话。保持冷静，说事实。对方也可能问你一些问题。",
                actionHint: "stick to the facts 意思是坚持说事实",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What if the judge does not grant the permanent order?",
            textZh: "如果法官不批准永久令怎么办？",
            casualVersion: "What if the judge says no?",
          },
          {
            speaker: "them",
            role: "法院人员",
            textEn:
              "If the order is not granted, the temporary order expires. You can still report any new incidents to the police and file a new petition if circumstances change. I would also recommend connecting with a domestic violence hotline — they offer safety planning, counseling, and legal resources even without a court order.",
            textZh:
              "如果未批准，临时令到期。您仍然可以向警方报告任何新事件，如果情况变化可以提交新的申请。我还建议联系家庭暴力热线——即使没有法院命令，他们也提供安全规划、心理咨询和法律资源。",
            keyPhrases: [
              { en: "temporary order expires", zh: "临时令到期" },
              { en: "domestic violence hotline", zh: "家庭暴力热线" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The temp order goes away but you can still call the cops for any new problems and try again. I really recommend calling the DV hotline — they help with safety plans and free legal help whether or not you have a court order.",
                textZh:
                  "临时令会失效但如果有新问题还是可以报警并再次申请。强烈建议打家暴热线——不管有没有法院命令他们都帮做安全计划和免费法律援助。",
                actionHint: "DV hotline 是家暴热线的缩写",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 23. 翻译服务 ====================
  {
    id: "government-translation-service",
    category: "government",
    titleZh: "翻译服务",
    titleEn: "Translation Services",
    description: "在政府机构使用翻译服务",
    otherRole: "翻译员",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "请求翻译",
        titleEn: "Requesting Translation",
        description: "在政府机构请求翻译服务",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I do not speak English very well. Is there a translator available?",
            textZh: "打扰一下，我英语说得不太好。有翻译吗？",
            casualVersion: "Sorry, my English is not great. Can I get a translator?",
          },
          {
            speaker: "them",
            role: "翻译员",
            textEn:
              "Of course. What language do you need? We have interpreters available for many languages, and if we do not have one on site, we can arrange a phone interpreter right away.",
            textZh: "当然。您需要什么语言？我们有多种语言的口译员，如果现场没有，可以马上安排电话翻译。",
            keyPhrases: [
              { en: "interpreter", zh: "口译员" },
              { en: "phone interpreter", zh: "电话翻译" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure, no problem. What language? We have people here who speak a bunch of languages, or we can get someone on the phone if we need to.",
                textZh: "当然，没问题。什么语言？我们这里有人说很多种语言，需要的话也可以找电话翻译。",
                actionHint: "a bunch of languages 意思是很多种语言",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I need Mandarin Chinese, please. I am here to apply for a driver license.",
            textZh: "我需要普通话翻译。我来申请驾照的。",
            casualVersion: "Chinese — Mandarin. I need to get a driver license.",
          },
          {
            speaker: "them",
            role: "翻译员",
            textEn:
              "Let me check if our Mandarin interpreter is available today. Yes, she is here. I will bring her over. This service is completely free — government agencies are required by law to provide language assistance to anyone who needs it.",
            textZh:
              "让我看看我们的普通话口译员今天在不在。在的。我把她请过来。这项服务完全免费——政府机构依法必须为需要的人提供语言协助。",
            keyPhrases: [
              { en: "language assistance", zh: "语言协助" },
              { en: "completely free", zh: "完全免费" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Let me see. Yeah, our Mandarin translator is here. I will grab her. And just so you know, this does not cost you anything — it is your right to have this.",
                textZh: "让我看看。好的，我们的普通话翻译在。我去叫她。而且你知道的，这不花你一分钱——这是你的权利。",
                actionHint: "it is your right 意思是这是你的权利",
                frequency: "common",
              },
            ],
            culturalNote:
              "根据美国联邦法律（Executive Order 13166），所有接受联邦资金的政府机构必须为英语能力有限的人提供免费语言服务。这包括DMV、法院、医院、学校等。不要害羞，这是您的合法权利。",
          },
          {
            speaker: "you",
            textEn: "Thank you so much. I was worried I would not be able to communicate.",
            textZh: "太感谢了。我之前担心没法沟通。",
            casualVersion: "Thank you! I was really worried about the language thing.",
          },
          {
            speaker: "them",
            role: "翻译员",
            textEn:
              "No need to worry. Many people use our language services every day. The interpreter will help you communicate with the staff member handling your application. Just speak in your language and she will translate everything back and forth.",
            textZh:
              "不用担心。每天有很多人使用我们的语言服务。口译员会帮助您与处理您申请的工作人员沟通。您用自己的语言说就行，她会两边翻译。",
            keyPhrases: [
              { en: "translate everything back and forth", zh: "两边翻译" },
              { en: "language services", zh: "语言服务" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Do not worry at all. Tons of people come in needing help with English. Just talk in Chinese and the interpreter handles the rest. She will go back and forth between you and the staff.",
                textZh:
                  "完全不用担心。很多人来的时候需要英语帮助。你说中文就行翻译会处理剩下的。她会在你和工作人员之间来回翻译。",
                actionHint: "handles the rest 意思是处理剩下的",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I also request translated documents? The forms are all in English.",
            textZh: "我也能要求翻译文件吗？表格都是英文的。",
            casualVersion: "Are the forms available in Chinese too?",
          },
          {
            speaker: "them",
            role: "翻译员",
            textEn:
              "Many of our common forms are available in Chinese and other languages. Let me get you the Chinese version of the driver license application. For forms that are not translated, the interpreter can go through each question with you and help you fill them out in English.",
            textZh:
              "我们很多常用表格有中文和其他语言版本。我去给您拿驾照申请表的中文版。对于没有翻译的表格，口译员可以逐题帮您看并帮您用英文填写。",
            keyPhrases: [
              { en: "Chinese version", zh: "中文版" },
              { en: "fill them out", zh: "填写" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Actually, a lot of our stuff comes in Chinese. I will grab the Chinese driver license form for you. Anything that is only in English, the interpreter will walk you through it and help you write the answers.",
                textZh: "实际上我们很多东西有中文版。我去拿中文驾照表给你。只有英文的，翻译会带你过一遍帮你填答案。",
                actionHint: "walk you through it 意思是带你逐步了解",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "document-translation",
        titleZh: "文件翻译",
        titleEn: "Document Translation",
        description: "获取官方文件的认证翻译",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "I need my Chinese birth certificate translated into English for an official application. Where can I get a certified translation?",
            textZh: "我需要把中文出生证明翻译成英文用于正式申请。在哪里可以做认证翻译？",
            casualVersion: "I need my birth certificate translated from Chinese. Where do I go?",
          },
          {
            speaker: "them",
            role: "翻译员",
            textEn:
              "Government offices do not provide document translation services, but I can point you in the right direction. You need a certified translation from a professional translator. They must include a signed statement that the translation is complete and accurate to the best of their knowledge.",
            textZh:
              "政府办公室不提供文件翻译服务，但我可以指引您正确的方向。您需要专业翻译人员的认证翻译。他们必须附上签名声明翻译据其所知是完整和准确的。",
            keyPhrases: [
              { en: "certified translation", zh: "认证翻译" },
              { en: "signed statement", zh: "签名声明" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We do not do that here, but I can tell you where to go. You need a professional translator to do a certified translation — that means they sign off saying it is accurate. I have a list of local translators I can give you.",
                textZh:
                  "我们这里不做，但我可以告诉你去哪。你需要专业翻译做认证翻译——就是他们签字说翻译是准确的。我有一份本地翻译的名单可以给你。",
                actionHint: "sign off saying 意思是签字声明",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How much does a certified translation usually cost?",
            textZh: "认证翻译通常多少钱？",
            casualVersion: "How much does it cost?",
          },
          {
            speaker: "them",
            role: "翻译员",
            textEn:
              "For a standard document like a birth certificate, certified translations typically cost twenty to forty dollars per page. More complex legal documents can be fifty to seventy-five dollars per page. Most translators can complete a birth certificate within one to two business days.",
            textZh:
              "像出生证明这样的标准文件，认证翻译通常每页20到40美元。更复杂的法律文件每页可能50到75美元。大多数翻译人员一到两个工作日就能完成出生证明。",
            keyPhrases: [
              { en: "per page", zh: "每页" },
              { en: "business days", zh: "工作日" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For a birth certificate, probably twenty to forty bucks a page. Legal stuff is more — fifty to seventy-five. Most people get it back in a day or two.",
                textZh: "出生证明的话大概每页20到40块。法律文件贵一些——50到75。大多数一两天就能拿到。",
                actionHint: "get it back 意思是拿回（翻译好的文件）",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Does the translation need to be notarized as well?",
            textZh: "翻译还需要公证吗？",
            casualVersion: "Do I need it notarized too?",
          },
          {
            speaker: "them",
            role: "翻译员",
            textEn:
              "It depends on the receiving agency. USCIS, for example, accepts certified translations without notarization. Some state agencies or courts may require notarization. Check with the specific office where you are submitting the document. If you do need notarization, many banks and shipping stores offer that service for about five to fifteen dollars.",
            textZh:
              "取决于接收机构。比如USCIS接受认证翻译不需要公证。一些州机构或法院可能要求公证。请向您提交文件的具体办公室确认。如果需要公证，很多银行和快递店提供该服务大约5到15美元。",
            keyPhrases: [
              { en: "notarization", zh: "公证" },
              { en: "receiving agency", zh: "接收机构" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Depends on where you are sending it. Immigration does not need it notarized. Some places do. Ask them first. If you do need notarization, your bank can probably do it for a few bucks.",
                textZh:
                  "取决于你发给谁。移民局不需要公证。有些地方需要。先问他们。如果需要公证，你的银行大概几块钱就能办。",
                actionHint: "a few bucks 意思是几块钱",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I use an online translation service or does it have to be a local translator?",
            textZh: "可以用在线翻译服务还是必须用本地翻译？",
            casualVersion: "Can I just use an online service?",
          },
          {
            speaker: "them",
            role: "翻译员",
            textEn:
              "Online certified translation services are perfectly acceptable as long as they provide a proper certification statement. Many reputable companies offer this — you upload the document, pay, and receive the certified translation digitally or by mail. Just make sure the service is well-reviewed and provides the certification letter.",
            textZh:
              "在线认证翻译服务完全可以接受，只要它们提供正式的认证声明。很多信誉良好的公司提供这项服务——您上传文件、付款，然后通过电子版或邮寄收到认证翻译。只需确保服务评价好并提供认证信。",
            keyPhrases: [
              { en: "certification statement", zh: "认证声明" },
              { en: "well-reviewed", zh: "评价好的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Online works fine. Just make sure it is a legit company with good reviews. You upload your document, pay, and they send you the certified version. Easy and usually cheaper than local.",
                textZh:
                  "在线的没问题。确保是评价好的正规公司。你上传文件、付款，他们发给你认证版本。简单方便通常比本地便宜。",
                actionHint: "legit company 意思是正规公司",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== USCIS 预约面谈 ====================
  {
    id: "government-uscis-infopass",
    tags: ["USCIS", "移民局", "immigration", "appointment", "infopass", "面谈"],
    category: "government",
    titleZh: "USCIS 移民局预约",
    titleEn: "USCIS Office Appointment",
    description: "预约并参加 USCIS 移民局面谈",
    otherRole: "USCIS 工作人员",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "check-in",
        titleZh: "到达签到",
        titleEn: "Check-in at USCIS",
        description: "到 USCIS 办公室签到并等待被叫号",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "保安",
            textEn: "Good morning. Do you have an appointment today?",
            textZh: "早上好。您今天有预约吗？",
            alternativeExpressions: [
              {
                textEn: "Welcome to USCIS. Appointment or walk-in?",
                textZh: "欢迎来到USCIS。有预约还是直接来的？",
                actionHint: "出示预约确认信",
                frequency: "common",
              },
            ],
            culturalNote:
              "USCIS 需要提前预约（通过 my.uscis.gov 网站），不能直接 walk-in。到达后要过安检（类似机场）。手机可以带但不能拍照。",
            casualVersion: "Morning. Got an appointment?",
            formalityVariants: {
              casual: "Morning. Appointment?",
              standard: "Do you have an appointment today?",
              formal: "Good morning. May I ask whether you have a scheduled appointment with us today?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I have a 10 AM appointment. Here's my appointment notice.",
            textZh: "是的，我有10点的预约。这是我的预约通知。",
            keyPhrases: [{ en: "appointment notice", zh: "预约通知" }],
            culturalNote:
              "一定要带好预约通知信（打印版或手机截图）和有效身份证件。USCIS 要求出示 government-issued ID。",
            casualVersion: "Yeah, 10 AM. Here's my notice.",
            formalityVariants: {
              casual: "Yeah, 10 o'clock. Here's my paper.",
              standard: "Yes, 10 AM appointment. Here's my notice.",
              formal: "Yes, I have an appointment scheduled for 10 AM. Here is my appointment notice for your review.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Please take a number and have a seat. We'll call your number when it's your turn. Do you have your appointment notice and a government-issued photo ID?",
            textZh: "请取号入座。轮到您时会叫号。您带了预约通知和政府颁发的带照片的身份证件吗？",
            keyPhrases: [
              { en: "take a number", zh: "取号" },
              { en: "government-issued photo ID", zh: "政府颁发的带照片身份证件" },
            ],
            culturalNote:
              "government-issued photo ID 包括：驾照、州身份证、护照、绿卡。大学学生证不算。如果没有美国证件，护照是最稳妥的。",
            casualVersion: "Grab a number and sit. We'll call you. Got your ID?",
            formalityVariants: {
              casual: "Take a number, sit down. We'll call you. ID ready?",
              standard: "Take a number and have a seat. Do you have your ID?",
              formal:
                "Please take a numbered ticket and have a seat in the waiting area. We will call your number when an officer is available. May I confirm that you have your appointment notice and a government-issued photo identification?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I have my passport and the appointment notice. How long is the wait usually?",
            textZh: "有的，我带了护照和预约通知。通常要等多久？",
            casualVersion: "Yep, got my passport and the notice. How long's the wait?",
            formalityVariants: {
              casual: "Got everything. How long's the wait?",
              standard: "I have my passport and notice. How long is the wait usually?",
              formal:
                "Yes, I have my passport and appointment notice. Could you give me an estimate of the waiting time?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "It varies, but usually about 30 to 45 minutes. Please keep your phone on silent and no photography is allowed inside the building.",
            textZh: "不一定，通常大约30到45分钟。请把手机调成静音，楼内禁止拍照。",
            keyPhrases: [
              { en: "no photography", zh: "禁止拍照" },
              { en: "keep your phone on silent", zh: "手机调静音" },
            ],
            culturalNote: "USCIS 楼内严禁拍照或录像，违反可能影响你的案件。等待时间可能很长，带本书或充好电。",
            casualVersion: "Maybe 30-45 minutes. No photos, keep your phone quiet.",
            formalityVariants: {
              casual: "Half hour to 45 minutes. No pics, phone on silent.",
              standard: "About 30 to 45 minutes. Phone on silent, no photography please.",
              formal:
                "The wait time typically ranges from 30 to 45 minutes. Please ensure your phone is set to silent mode, and please be aware that photography is strictly prohibited within the facility.",
            },
          },
        ],
      },
      {
        id: "interview",
        titleZh: "面谈问答",
        titleEn: "Interview Questions",
        description: "在 USCIS 面谈中回答移民官的问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "移民官",
            textEn: "Please raise your right hand. Do you swear that everything you are about to say is the truth?",
            textZh: "请举起右手。你是否宣誓你将要说的一切都是事实？",
            keyPhrases: [
              { en: "raise your right hand", zh: "举起右手" },
              { en: "swear", zh: "宣誓" },
            ],
            culturalNote: "USCIS 面谈开始前都要宣誓（oath）。这是法律程序——说谎是联邦犯罪。保持冷静，如实回答即可。",
            casualVersion: "Right hand up. Do you swear to tell the truth?",
            formalityVariants: {
              casual: "Right hand up. Everything you say will be the truth?",
              standard: "Raise your right hand. Do you swear to tell the truth?",
              formal:
                "Please raise your right hand. Do you solemnly swear that the testimony you are about to give shall be the truth, the whole truth, and nothing but the truth?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I do.",
            textZh: "是的，我宣誓。",
            culturalNote: '回答宣誓时说 "Yes, I do" 或 "I do" 即可。不要说 "Yes, sir/ma\'am" 就好——简洁有力。',
            formalityVariants: { casual: "I do.", standard: "Yes, I do.", formal: "Yes, I do swear." },
          },
          {
            speaker: "them",
            role: "移民官",
            textEn: "Good. Can you state your full legal name as it appears on your application?",
            textZh: "好的。请报出您申请表上的完整法定姓名。",
            keyPhrases: [
              { en: "full legal name", zh: "完整法定姓名" },
              { en: "as it appears on your application", zh: "和申请表上一致的" },
            ],
            casualVersion: "What's your full name as it is on the application?",
            formalityVariants: {
              casual: "Full name as on the application?",
              standard: "State your full legal name as it appears on your application.",
              formal:
                "Would you please state your full legal name exactly as it appears on your submitted application?",
            },
          },
          {
            speaker: "you",
            textEn: "My name is Wei Zhang. Z-H-A-N-G.",
            textZh: "我的名字是 Wei Zhang。Z-H-A-N-G。",
            culturalNote:
              "中国姓名顺序和英语相反。在美国法律文件中，given name（名）在前，family name（姓）在后。务必按申请表上的顺序说。",
            commonMistake: {
              wrong: "Zhang Wei.",
              correct: "Wei Zhang.",
              explanation:
                "美国法律文件是 first name + last name 顺序。如果你申请表上写的是 Wei Zhang，面谈时也要说 Wei Zhang，不要说成 Zhang Wei。",
            },
            formalityVariants: {
              casual: "Wei Zhang. Z-H-A-N-G.",
              standard: "My name is Wei Zhang. Z-H-A-N-G.",
              formal: "My full legal name is Wei Zhang. The last name is spelled Z-H-A-N-G.",
            },
          },
          {
            speaker: "them",
            role: "移民官",
            textEn: "And what is the purpose of today's appointment?",
            textZh: "今天预约的目的是什么？",
            alternativeExpressions: [
              {
                textEn: "What brings you in today?",
                textZh: "今天为什么来？",
                actionHint: "说明你的案件类型",
                frequency: "common",
              },
            ],
            casualVersion: "What brings you in today?",
            formalityVariants: {
              casual: "So what are you here for today?",
              standard: "What is the purpose of today's appointment?",
              formal: "Could you please explain the purpose of your visit today?",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'm here for my green card interview. My I-485 was filed in January, and I received a notice for today's interview.",
            textZh: "我来参加绿卡面谈。我的 I-485 是一月份提交的，收到了今天的面谈通知。",
            keyPhrases: [
              { en: "I-485", zh: "调整身份申请表" },
              { en: "green card interview", zh: "绿卡面谈" },
            ],
            culturalNote:
              "I-485 是调整身份（Adjustment of Status）申请表，用于在美国境内申请绿卡。面谈是流程的最后一步。",
            casualVersion: "Here for my green card interview. Filed my I-485 in January.",
            formalityVariants: {
              casual: "Green card interview. I-485, filed in January.",
              standard: "I'm here for my green card interview. I-485 filed in January.",
              formal:
                "I am here to attend my scheduled interview for my I-485 application for adjustment of status. The application was filed in January of this year, and I received an interview notice for today's date.",
            },
          },
          {
            speaker: "them",
            role: "移民官",
            textEn:
              "Alright. I'm going to go through the questions on your application to verify your answers. If you don't understand a question, just let me know and I'll rephrase it.",
            textZh: "好的。我会逐一核实您申请表上的问题和答案。如果您不理解某个问题，告诉我，我会换个说法。",
            keyPhrases: [
              { en: "verify your answers", zh: "核实你的回答" },
              { en: "rephrase", zh: "换个说法" },
            ],
            culturalNote:
              '移民官通常会把申请表上的问题重新问一遍，确认你的回答和书面一致。如果不理解问题，说 "Could you rephrase that?" 完全合法，不会扣分。',
            casualVersion:
              "I'll go through your application questions. If you don't get something, just ask me to rephrase.",
            formalityVariants: {
              casual: "I'll run through the questions on your app. Ask me to repeat if needed.",
              standard: "I'll verify your application answers. Let me know if you don't understand anything.",
              formal:
                "I will now proceed to review the questions on your application to verify your responses. Should you not understand any question, please do not hesitate to ask me to rephrase it.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 查询移民案件状态 ====================
  {
    id: "government-uscis-case-status",
    tags: ["USCIS", "案件状态", "case status", "immigration", "processing time", "审批进度"],
    category: "government",
    titleZh: "查询移民案件状态",
    titleEn: "Checking USCIS Case Status",
    description: "打电话或在线查询移民申请的审批进度",
    otherRole: "USCIS 客服",
    otherRoleIcon: "📋",
    flows: [
      {
        id: "phone-inquiry",
        titleZh: "电话查询",
        titleEn: "Phone Inquiry",
        description: "拨打 USCIS 客服热线查询案件进度",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "自动语音",
            textEn: 'Thank you for calling USCIS. For case status information, say "case status" or press 1.',
            textZh: '感谢致电 USCIS。查询案件状态请说 "case status" 或按1。',
            keyPhrases: [{ en: "case status", zh: "案件状态" }],
            culturalNote:
              'USCIS 客服电话是 1-800-375-5283。自动系统支持语音识别，直接说 "case status" 或 "live agent" 可以跳过菜单。',
            formalityVariants: {
              casual: "Press 1 for case status.",
              standard: "For case status, say case status or press 1.",
              formal: "For information regarding your case status, please say case status or press 1.",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "Thank you for calling USCIS. Can I have your receipt number? It starts with three letters followed by ten digits.",
            textZh: "感谢致电 USCIS。请提供您的收据号码。以三个字母开头，后面跟十位数字。",
            keyPhrases: [
              { en: "receipt number", zh: "收据号码" },
              { en: "three letters followed by ten digits", zh: "三个字母加十位数字" },
            ],
            culturalNote:
              "receipt number 在 I-797 通知（Notice of Action）上。格式是 EAC/WAC/LIN/SRC + 10位数字。找不到的话看 I-797 表格右上角。",
            casualVersion: "What's your receipt number? Three letters and ten numbers.",
            formalityVariants: {
              casual: "Receipt number? Letters and numbers on your notice.",
              standard: "Can I have your receipt number? Three letters, ten digits.",
              formal:
                "May I have your case receipt number, please? It begins with three letters followed by ten digits.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, it's E-A-C-0-9-1-2-3-4-5-6-7-8.",
            textZh: "好的，是 E-A-C-0-9-1-2-3-4-5-6-7-8。",
            culturalNote:
              "念收据号码时字母和数字都要逐个念清楚。A 和 8、B 和 D 容易混淆，用 NATO 字母表更好：A as in Alpha, B as in Bravo。",
            commonMistake: {
              wrong: "EAC zero nine one two three...",
              correct: "E-A-C-0-9-1-2-3-4-5-6-7-8",
              explanation: "逐个字符念，不要连读。客服需要准确输入每个字符。",
            },
            formalityVariants: {
              casual: "E-A-C-0-9-1-2-3-4-5-6-7-8.",
              standard: "Yes, it's E-A-C-0-9-1-2-3-4-5-6-7-8.",
              formal:
                "Certainly. My receipt number is E as in Echo, A as in Alpha, C as in Charlie, 0-9-1-2-3-4-5-6-7-8.",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "Thank you. I can see your I-485 was received on January 15th and is currently being actively reviewed. The current processing time for your service center is 8 to 14 months.",
            textZh: "谢谢。我看到您的 I-485 是1月15日收到的，目前正在审理中。您所在服务中心的当前处理时间是8到14个月。",
            keyPhrases: [
              { en: "actively reviewed", zh: "正在审理中" },
              { en: "processing time", zh: "处理时间" },
              { en: "service center", zh: "服务中心" },
            ],
            culturalNote:
              '美国移民审批等待时间非常长且不确定。"actively reviewed" 基本就是"在排队"的意思。不要频繁打电话催——这不会加速处理。',
            casualVersion: "Your I-485 came in January 15. It's being reviewed. Processing time is 8 to 14 months.",
            formalityVariants: {
              casual: "Got your I-485 from January 15. Being reviewed. 8 to 14 months.",
              standard: "Your I-485 was received January 15 and is being reviewed. Processing time is 8-14 months.",
              formal:
                "Your I-485 application was received on January 15th and is currently under active review. The estimated processing time at your designated service center is between 8 and 14 months.",
            },
          },
          {
            speaker: "you",
            textEn: "Is there any way to expedite the process? I have a job offer that requires my green card.",
            textZh: "有没有办法加急？我有一份工作机会需要绿卡。",
            keyPhrases: [{ en: "expedite", zh: "加急" }],
            culturalNote:
              "USCIS 有 expedite request 流程，但很少被批准。合理理由包括：严重经济损失、医疗紧急情况、国防需要。普通工作机会通常不够格。",
            casualVersion: "Can I speed this up somehow? I got a job waiting on my green card.",
            formalityVariants: {
              casual: "Any way to speed this up? Got a job offer.",
              standard: "Is there any way to expedite? I have a job offer.",
              formal:
                "Is there any possibility of expediting the processing? I have a pending employment opportunity that is contingent upon the approval of my green card.",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "You can submit an expedite request through your USCIS online account or by calling us. You'll need to provide evidence of severe financial loss, a medical emergency, or other qualifying criteria. A job offer alone typically doesn't qualify, but you can try.",
            textZh:
              "您可以通过 USCIS 在线账户或打电话提交加急请求。您需要提供严重经济损失、医疗紧急情况或其他符合条件的证据。仅凭工作机会通常不够资格，但您可以试试。",
            keyPhrases: [
              { en: "expedite request", zh: "加急请求" },
              { en: "severe financial loss", zh: "严重经济损失" },
              { en: "qualifying criteria", zh: "符合条件的标准" },
            ],
            casualVersion:
              "You can request an expedite online or by phone. You need proof of financial hardship or emergency. A job offer usually isn't enough, but worth a shot.",
            formalityVariants: {
              casual:
                "Try an expedite request online. Needs proof of hardship. Job offer alone prob won't work but you can try.",
              standard:
                "Submit an expedite request with evidence of hardship. A job offer alone usually doesn't qualify.",
              formal:
                "You may submit a formal expedite request through your USCIS online account. You will be required to provide substantive evidence of severe financial loss, medical emergency, or other qualifying circumstances as defined by USCIS policy.",
            },
          },
        ],
      },
      {
        id: "outside-processing",
        titleZh: "超出处理时间",
        titleEn: "Outside Processing Time",
        description: "案件超出正常处理时间，提交服务请求",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi, I'm calling because my case appears to be outside the normal processing time. My I-485 has been pending for 16 months, and the posted processing time is 8 to 14 months.",
            textZh:
              "你好，我打电话是因为我的案件似乎超出了正常处理时间。我的 I-485 已经等了16个月，公示的处理时间是8到14个月。",
            keyPhrases: [
              { en: "outside normal processing time", zh: "超出正常处理时间" },
              { en: "pending", zh: "待处理/悬而未决" },
            ],
            culturalNote:
              '如果你的案件超出了 USCIS 公示的处理时间，你有权提交 "service request"（服务请求），USCIS 必须在30天内回应。这是合法维权。',
            commonMistake: {
              wrong: "Why is my case taking so long? This is not fair!",
              correct: "My case appears to be outside the normal processing time.",
              explanation:
                '用 "outside normal processing time" 是 USCIS 的官方术语，客服会立即理解你的意思。发脾气没用，引用官方标准更有效。',
            },
            casualVersion: "Hey, my I-485 has been sitting for 16 months. You guys say 8-14 months. What's going on?",
            formalityVariants: {
              casual: "My case is at 16 months. Your website says 8-14. What gives?",
              standard: "My case is outside normal processing time. I-485, 16 months, posted time is 8-14.",
              formal:
                "I am contacting you because my I-485 application appears to have exceeded the normal processing timeframe. It has been pending for 16 months, while the currently posted processing time is 8 to 14 months.",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "I understand your concern. Since your case is outside the posted processing time, I can submit a service request on your behalf. This will prompt the service center to review your case. You should receive a response within 30 days.",
            textZh:
              "我理解您的担忧。由于您的案件超出了公示处理时间，我可以为您提交服务请求。这会促使服务中心审查您的案件。您应该在30天内收到回应。",
            keyPhrases: [
              { en: "service request", zh: "服务请求" },
              { en: "on your behalf", zh: "代表你/为你" },
            ],
            casualVersion:
              "Yeah, it's outside processing time. I'll put in a service request. They'll review it and get back to you in 30 days.",
            formalityVariants: {
              casual: "I see that. Let me file a service request. 30 days for a response.",
              standard: "I can submit a service request. You'll get a response within 30 days.",
              formal:
                "I understand. As your case has exceeded the posted processing time, I will submit a service request to the appropriate service center on your behalf. You should anticipate a response within 30 calendar days.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please submit that. And is there a reference number I can use to track this request?",
            textZh: "好的，请提交。有没有参考号码可以追踪这个请求？",
            casualVersion: "Yeah, please do that. Can I get a tracking number?",
            formalityVariants: {
              casual: "Do it. Can I get a reference number?",
              standard: "Yes, please. Is there a reference number to track this?",
              formal:
                "Yes, please proceed with the submission. May I obtain a reference number to track the status of this service request?",
            },
          },
        ],
      },
    ],
  },

  // ==================== 找报税师 ====================
  {
    id: "government-tax-preparer",
    tags: ["tax", "报税", "tax preparer", "CPA", "W-2", "1099", "tax return"],
    category: "government",
    titleZh: "找报税师",
    titleEn: "Meeting a Tax Preparer",
    description: "第一次找专业报税师帮忙报税",
    otherRole: "报税师",
    otherRoleIcon: "📊",
    flows: [
      {
        id: "first-meeting",
        titleZh: "初次咨询",
        titleEn: "First Consultation",
        description: "第一次和报税师见面，了解需要准备什么材料",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "报税师",
            textEn: "Welcome! Is this your first time filing taxes in the United States?",
            textZh: "欢迎！这是您第一次在美国报税吗？",
            alternativeExpressions: [
              {
                textEn: "Hi! Have you filed a US tax return before?",
                textZh: "嗨！您以前报过美国税吗？",
                actionHint: "如实回答",
                frequency: "common",
              },
            ],
            culturalNote:
              "在美国，报税是每个有收入的人的法律义务。报税截止日通常是4月15日。第一次报税建议找专业人士（CPA 或 tax preparer），以后熟悉了可以自己用 TurboTax。",
            casualVersion: "Hey! First time doing US taxes?",
            formalityVariants: {
              casual: "First time filing here?",
              standard: "Is this your first time filing in the US?",
              formal:
                "Welcome. May I ask whether this will be your first time filing a tax return in the United States?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I moved here last year for work. I have no idea what documents I need.",
            textZh: "是的，我去年因为工作搬来的。我完全不知道需要什么文件。",
            casualVersion: "Yeah, just moved here last year. No clue what I need.",
            formalityVariants: {
              casual: "Yeah, moved here last year. Don't know what to bring.",
              standard: "Yes, I moved here last year. I'm not sure what documents I need.",
              formal:
                "Yes, I relocated to the United States last year for employment. I am unfamiliar with the documentation requirements for filing.",
            },
          },
          {
            speaker: "them",
            role: "报税师",
            textEn:
              "No worries, that's very common! Here's what you'll need: your W-2 from your employer — that shows your income and taxes withheld. Your Social Security number or ITIN. And any 1099 forms if you had freelance income, interest, or investments.",
            textZh:
              "别担心，这很常见！你需要：雇主给你的 W-2 表 — 上面显示你的收入和扣税。你的社会安全号码或 ITIN。如果你有自由职业收入、利息或投资收入，还需要 1099 表。",
            keyPhrases: [
              { en: "W-2", zh: "工资收入报告表（雇主发的）" },
              { en: "taxes withheld", zh: "预扣的税" },
              { en: "ITIN", zh: "个人纳税识别号（没有SSN的人用的）" },
              { en: "1099", zh: "非工资收入报告表" },
            ],
            culturalNote:
              "W-2 是雇主每年1月底寄给你的（纸质或电子版）。上面显示你全年赚了多少，已经预扣了多少税。这是报税最重要的文件。在中国，个税由公司代扣代缴，个人不需要自己报。",
            casualVersion: "Don't worry! You'll need your W-2 from work, your SSN or ITIN, and any 1099s.",
            formalityVariants: {
              casual: "Easy! W-2, SSN, any 1099s. That's the basics.",
              standard: "You'll need your W-2, SSN or ITIN, and any 1099 forms.",
              formal:
                "You will need the following documentation: your W-2 form from your employer, which reflects your annual income and taxes withheld; your Social Security Number or ITIN; and any 1099 forms for supplemental income sources.",
            },
          },
          {
            speaker: "you",
            textEn: 'I got my W-2 in the mail. What does "taxes withheld" mean? Is that money I already paid?',
            textZh: '我收到了邮寄的 W-2。"taxes withheld" 是什么意思？那是我已经交的税吗？',
            culturalNote:
              "美国采用预扣税制度（withholding）——每次发工资时雇主自动扣一部分交给IRS。年底报税时算总账：扣多了退给你（refund），扣少了补交。",
            casualVersion: "Got my W-2. What's taxes withheld? Money I already paid?",
            formalityVariants: {
              casual: "What's taxes withheld on the W-2?",
              standard: "What does taxes withheld mean? Is that money I already paid?",
              formal:
                "I have received my W-2. Could you explain what taxes withheld means? Is that the amount I have already paid?",
            },
          },
          {
            speaker: "them",
            role: "报税师",
            textEn:
              "Exactly! Your employer takes out estimated taxes from each paycheck throughout the year. When we file your return, we calculate what you actually owe. If they withheld too much, you get a refund. If too little, you'll owe the difference.",
            textZh:
              "没错！你的雇主在全年每次发工资时预扣了估算的税款。我们报税时计算你实际该付多少。如果预扣多了，你会收到退税。如果少了，你需要补交差额。",
            keyPhrases: [
              { en: "tax return", zh: "报税表/税务申报" },
              { en: "refund", zh: "退税" },
              { en: "owe the difference", zh: "补交差额" },
            ],
            culturalNote:
              "很多新移民不知道自己可能有退税（refund）。第一年的退税金额经常超出预期，因为刚到美国可能只工作了部分月份，但预扣税是按全年税率算的。",
            casualVersion:
              "Yep! They took taxes out all year. If they took too much, you get money back. Too little, you owe.",
            formalityVariants: {
              casual: "Right! Too much withheld = refund. Too little = you owe.",
              standard:
                "Your employer withholds estimated taxes. We calculate the actual amount. Overpaid means refund, underpaid means you owe.",
              formal:
                "That is correct. Your employer deducts estimated taxes from each pay period. Upon filing your return, we will determine your actual tax liability. If the withheld amount exceeds your obligation, you will receive a refund. If it falls short, you will be responsible for the difference.",
            },
          },
        ],
      },
      {
        id: "deductions",
        titleZh: "讨论扣除项",
        titleEn: "Discussing Deductions",
        description: "了解可以申报哪些扣除项来减少税款",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "报税师",
            textEn:
              "Now, let's talk about deductions. Do you want to take the standard deduction or itemize? For most people, the standard deduction is better — it's $14,600 for a single filer this year.",
            textZh:
              "现在来谈谈扣除项。你想用标准扣除还是逐项扣除？对大多数人来说，标准扣除更划算——今年单身申报者是14,600美元。",
            keyPhrases: [
              { en: "standard deduction", zh: "标准扣除额（固定金额）" },
              { en: "itemize", zh: "逐项扣除（逐一列出各项可扣费用）" },
              { en: "single filer", zh: "单身申报者" },
            ],
            culturalNote:
              "美国税制有两种扣除方式：标准扣除（拿固定金额）和逐项扣除（列出所有可扣费用如房贷利息、医疗费等）。大多数工薪族用标准扣除更划算。",
            casualVersion: "Standard deduction or itemized? Standard is $14,600 for single. Usually better.",
            formalityVariants: {
              casual: "Standard or itemized deduction? Standard is usually the way to go.",
              standard: "Standard deduction or itemize? The standard is $14,600 for single filers.",
              formal:
                "We should discuss your deduction preference. Would you like to claim the standard deduction or itemize your deductions? For a single filer, the standard deduction this year is $14,600, which is advantageous for most taxpayers.",
            },
          },
          {
            speaker: "you",
            textEn: "I'm not sure what those mean. I do pay rent — can I deduct that?",
            textZh: "我不太明白什么意思。我付房租——能扣除吗？",
            culturalNote:
              "很遗憾，美国联邦税不能扣除房租（某些州可以）。这是中国人常有的误解。能扣除的包括：房贷利息、州和地方税、慈善捐赠等。",
            casualVersion: "I don't really get it. Can I deduct my rent?",
            formalityVariants: {
              casual: "What's the difference? Can rent be deducted?",
              standard: "I'm not sure what those mean. Can I deduct rent?",
              formal: "I am not entirely familiar with those terms. Am I able to deduct my rent payments?",
            },
          },
          {
            speaker: "them",
            role: "报税师",
            textEn:
              "Unfortunately, rent is not deductible on your federal return. But don't worry — with the standard deduction, you're already getting a good deal. Do you have any student loan interest, charitable donations, or a retirement account like a 401k?",
            textZh:
              "很遗憾，联邦税不能扣除房租。但别担心——标准扣除已经很划算了。你有学生贷款利息、慈善捐赠、或退休账户比如 401k 吗？",
            keyPhrases: [
              { en: "student loan interest", zh: "学生贷款利息" },
              { en: "charitable donations", zh: "慈善捐赠" },
              { en: "401k", zh: "退休储蓄账户" },
            ],
            culturalNote:
              "401k 是美国雇主提供的退休储蓄计划。你放进 401k 的钱是税前的（减少当年应税收入），很多雇主还会 match（匹配你的一部分存款作为福利）。不参加等于白白丢钱。",
            casualVersion:
              "No rent deduction, sorry. Standard deduction covers you though. Got a 401k? Student loans? Donations?",
            formalityVariants: {
              casual: "Rent's not deductible, sadly. But standard deduction's good. 401k? Loans? Donations?",
              standard:
                "Rent isn't deductible federally. Standard deduction is usually better. Do you have a 401k, student loans, or donations?",
              formal:
                "I am afraid rent payments are not deductible on your federal tax return. However, the standard deduction provides substantial tax relief. May I inquire whether you have student loan interest, charitable contributions, or an employer-sponsored retirement account such as a 401k?",
            },
          },
          {
            speaker: "you",
            textEn:
              "Yes, I have a 401k through my company. They match 4%. And I made some donations to our local church.",
            textZh: "有，公司有 401k。他们匹配4%。我还给本地教会做了些捐赠。",
            casualVersion: "Yeah, got a 401k with 4% match. Also donated to church.",
            formalityVariants: {
              casual: "401k with 4% match. Some church donations too.",
              standard: "I have a 401k with 4% match and some church donations.",
              formal:
                "Yes, I participate in my employer's 401k plan with a 4% match. I have also made charitable contributions to my local church.",
            },
          },
          {
            speaker: "them",
            role: "报税师",
            textEn:
              "Great. Your 401k contributions are already pre-tax, so they're automatically reducing your taxable income. For the church donations, do you have receipts or a year-end statement? If your total itemized deductions don't exceed $14,600, we'll stick with the standard deduction.",
            textZh:
              "很好。你的 401k 供款是税前的，已经自动减少了你的应税收入。教会捐赠需要收据或年终声明。如果你的逐项扣除总额不超过14,600美元，我们就用标准扣除。",
            keyPhrases: [
              { en: "pre-tax", zh: "税前的" },
              { en: "taxable income", zh: "应税收入" },
              { en: "receipts", zh: "收据" },
            ],
            casualVersion:
              "401k is already pre-tax, you're good. Got receipts for church donations? If itemized is less than $14,600, standard deduction wins.",
            formalityVariants: {
              casual: "401k's already pre-tax. Church donations — got receipts? Standard deduction probably wins.",
              standard: "401k is pre-tax. For church donations, bring receipts. Standard deduction is likely better.",
              formal:
                "Your 401k contributions are made on a pre-tax basis and already reduce your taxable income. Regarding the charitable contributions, do you have documentation such as receipts or a year-end statement? If your total itemizable deductions do not exceed $14,600, it would be more advantageous to claim the standard deduction.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 24. 路考过程 ====================
  {
    id: "government-dmv-road-test",
    category: "government",
    titleZh: "路考过程：理解考官指令",
    titleEn: "DMV Road Test: Understanding Examiner Instructions",
    description: "参加驾照路考时理解考官的英语指令",
    otherRole: "路考考官",
    otherRoleIcon: "🚗",
    flows: [
      {
        id: "basic",
        titleZh: "基本路考指令",
        titleEn: "Basic Road Test Instructions",
        description: "理解路考中最常见的考官指令",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "路考考官",
            textEn: "Good morning. I'm your examiner today. Before we start, I need to see your learner's permit, proof of insurance, and vehicle registration. Is this your car?",
            textZh: "早上好。我是今天的考官。在我们开始之前，我需要看你的学习驾照、保险证明和车辆登记。这是你的车吗？",
            keyPhrases: [
              { en: "learner's permit", zh: "学习驾照/临时驾照" },
              { en: "proof of insurance", zh: "保险证明" },
              { en: "vehicle registration", zh: "车辆登记" },
            ],
            alternativeExpressions: [
              { textEn: "Morning. I'll be conducting your road test. Can I see your permit, insurance card, and registration? And this is your vehicle?", textZh: "早上好。我来做你的路考。能看看你的临时驾照、保险卡和登记证吗？这是你的车？", actionHint: "conducting 进行/主持", frequency: "common" },
            ],
            casualVersion: "Hi, I'm doing your road test today. Let me see your permit, insurance, and registration. This your car?",
            formalityVariants: {
              casual: "Hey, I'm your examiner. Permit, insurance, and registration please. Your car?",
              standard: "Good morning, I'm your examiner. I need your learner's permit, proof of insurance, and vehicle registration.",
              formal: "Good morning. I will be your designated examiner for today's driving examination. Prior to commencing, I will require your learner's permit, documentation of vehicle insurance, and current registration.",
            },
          },
          {
            speaker: "you",
            textEn: "Good morning. Yes, this is my car. Here are my documents — learner's permit, insurance card, and registration.",
            textZh: "早上好。是的，这是我的车。这是我的证件——学习驾照、保险卡和登记证。",
            casualVersion: "Morning! Yep, it's my car. Here's everything — permit, insurance, and registration.",
            culturalNote: "路考前一定要准备好所有证件。在美国，没带齐证件会直接取消考试资格。保险必须在有效期内，车辆登记也要是当前有效的。和中国不同，美国路考用自己的车或驾校的车，不是考场提供的。",
            commonMistake: {
              wrong: "Yes this is mine car. Here is my documents.",
              correct: "Yes, this is my car. Here are my documents.",
              explanation: "'my car' 不是 'mine car'。'documents' 是复数所以用 'Here are' 不是 'Here is'。",
            },
            formalityVariants: {
              casual: "Yep, my car. Here you go — permit, insurance, registration.",
              standard: "Yes, this is my car. Here are my documents — learner's permit, insurance card, and registration.",
              formal: "Yes, this is my vehicle. I have my learner's permit, proof of insurance, and vehicle registration right here for your review.",
            },
          },
          {
            speaker: "them",
            role: "路考考官",
            textEn: "Thank you. Before we pull out, I'd like you to show me your turn signals — left, then right. Now your brake lights — step on the brake. Good. Hazard lights. Horn. OK, everything checks out. When you're ready, start the engine, check your mirrors, and pull out of the parking space to the right.",
            textZh: "谢谢。在我们出发之前，请给我看看你的转向灯——先左后右。现在刹车灯——踩一下刹车。好的。双闪灯。喇叭。好，都没问题。准备好了就启动引擎，检查后视镜，向右驶出停车位。",
            keyPhrases: [
              { en: "turn signals", zh: "转向灯" },
              { en: "hazard lights", zh: "双闪灯/应急灯" },
              { en: "pull out", zh: "驶出/开出" },
            ],
            alternativeExpressions: [
              { textEn: "Let's check your signals. Left blinker. Right blinker. Tap the brakes. Hazards. Horn. All good. Go ahead and start the car, adjust your mirrors, and back out to the right when you're ready.", textZh: "检查一下信号灯。左转灯。右转灯。踩下刹车。双闪。喇叭。都好。启动车，调好镜子，准备好了向右倒出去。", actionHint: "blinker 转向灯的口语说法; back out 倒车出去", frequency: "common" },
            ],
            casualVersion: "OK, show me left signal, right signal. Brakes. Hazards. Horn. All good. Start it up, check mirrors, and pull out to the right when you're ready.",
            formalityVariants: {
              casual: "Left signal. Right signal. Brakes. Hazards. Horn. Good. Start up and pull out to the right.",
              standard: "Show me your turn signals, brake lights, hazard lights, and horn. Then start the engine, check mirrors, and pull out to the right.",
              formal: "Please demonstrate your left and right turn signals, followed by your brake lights, hazard indicators, and horn. Once everything is verified, please start the engine, verify your mirror positions, and proceed out of the parking space to the right.",
            },
          },
          {
            speaker: "you",
            textEn: "OK. Just to confirm — you want me to turn right when I pull out of the spot?",
            textZh: "好的。确认一下——你要我从车位出去后右转吗？",
            casualVersion: "Got it. So right turn out of the spot?",
            culturalNote: "路考时如果听不清指令，完全可以请考官重复。宁可确认也不要猜错方向。考官不会因为你确认指令而扣分。",
            commonMistake: {
              wrong: "You mean I should turn right after going out?",
              correct: "Just to confirm — you want me to turn right when I pull out of the spot?",
              explanation: "'Just to confirm' 是礼貌确认的说法。'pull out of the spot' 是从车位出去的地道表达。",
            },
            formalityVariants: {
              casual: "So, right turn out of the spot?",
              standard: "Just to confirm, you want me to turn right when I pull out?",
              formal: "If I may confirm — you'd like me to make a right turn upon exiting the parking space?",
            },
          },
          {
            speaker: "them",
            role: "路考考官",
            textEn: "That's correct, turn right. I'll give you directions as we go. I'll tell you well in advance when to turn so you have time to signal and check your mirrors. If you don't understand something I say, just ask me to repeat it — that's perfectly fine. Drive the way you normally would. Ready?",
            textZh: "对，右转。我会边走边给你指路。需要转弯时我会提前告诉你，让你有时间打转向灯和检查后视镜。如果你听不懂我说什么，让我重复就行——完全没问题。正常开就好。准备好了吗？",
            keyPhrases: [
              { en: "well in advance", zh: "提前很早/充分提前" },
              { en: "signal", zh: "打转向灯" },
              { en: "drive the way you normally would", zh: "按你平时的方式开" },
            ],
            alternativeExpressions: [
              { textEn: "Right, go right. I'll direct you as we drive. I'll give you plenty of heads-up before any turns. If you miss something I say, just ask. No penalty for asking. Drive like you'd drive any other day.", textZh: "对，右转。我会在开的过程中给你指路。转弯前会给你充分提醒。没听清就问，不扣分。像平时一样开。", actionHint: "plenty of heads-up 充分的提前通知; no penalty 不扣分", frequency: "common" },
            ],
            casualVersion: "Yep, right turn. I'll tell you where to go as we drive. I'll give you plenty of notice before turns. If you can't hear me or don't understand, just ask. Drive like you normally do. Let's go when you're ready.",
            formalityVariants: {
              casual: "Right turn, yep. I'll guide you. Ask if you don't understand. Drive normal. Ready?",
              standard: "Correct, turn right. I'll direct you and give advance notice for turns. Feel free to ask me to repeat anything. Drive as you normally would.",
              formal: "That is correct. I will provide directional guidance throughout the examination, with ample advance notice for all required maneuvers. Should you need any instruction repeated, please don't hesitate to ask. Simply drive as you would under normal circumstances. Shall we begin?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I'm ready. Thank you for explaining that.",
            textZh: "是的，准备好了。谢谢你的说明。",
            casualVersion: "Yep, let's do this. Thanks.",
            commonMistake: {
              wrong: "I'm ready. Thank you for your explain.",
              correct: "I'm ready. Thank you for explaining that.",
              explanation: "'thank you for explaining' 用动名词形式，不是 'thank you for your explain'。",
            },
            formalityVariants: {
              casual: "Ready. Thanks!",
              standard: "Yes, I'm ready. Thank you for explaining that.",
              formal: "Yes, I'm prepared to begin. I appreciate you taking the time to explain the process.",
            },
          },
          {
            speaker: "them",
            role: "路考考官",
            textEn: "At the end of this block, I'd like you to make a left turn. Check your mirrors, signal, and make sure you yield to oncoming traffic before turning.",
            textZh: "在这个街区尽头，请左转。检查后视镜，打转向灯，转弯前确保让行对面来车。",
            keyPhrases: [
              { en: "at the end of this block", zh: "在这个街区尽头" },
              { en: "yield to oncoming traffic", zh: "让行对面来车" },
              { en: "signal", zh: "打转向灯" },
            ],
            alternativeExpressions: [
              { textEn: "When you get to the intersection up here, take a left. Don't forget to signal and watch for cars coming the other way.", textZh: "到前面路口时左转。别忘了打灯，注意对面来的车。", actionHint: "take a left 左转; up here 前面这里", frequency: "common" },
            ],
            casualVersion: "Left turn at the end of the block. Check mirrors, signal, and yield to oncoming traffic.",
            formalityVariants: {
              casual: "Left at the end of the block. Mirror, signal, yield.",
              standard: "Please make a left turn at the end of this block. Check mirrors, signal, and yield to oncoming traffic.",
              formal: "At the conclusion of this block, I'd like you to execute a left turn. Please verify your mirrors, engage your turn signal, and ensure you yield the right-of-way to any oncoming traffic prior to making the turn.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "复杂路考操作",
        titleEn: "Advanced Road Test Maneuvers",
        description: "路考中的平行泊车、三点掉头和高速公路操作",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "路考考官",
            textEn: "OK, I'd like you to parallel park between those two cars up ahead. Pull alongside the car in front, then back in. Take your time — there's no rush.",
            textZh: "好的，请在前面那两辆车之间做侧方停车。先开到前车旁边，然后倒进去。慢慢来——不着急。",
            keyPhrases: [
              { en: "parallel park", zh: "侧方停车/平行泊车" },
              { en: "pull alongside", zh: "开到旁边/并排停靠" },
              { en: "back in", zh: "倒车停入" },
            ],
            alternativeExpressions: [
              { textEn: "See those two cars ahead? I need you to parallel park between them. Line up next to the front car and back it in. No need to rush — take as much time as you need.", textZh: "看到前面两辆车了吗？我需要你在中间侧方停车。先和前面的车并排，然后倒进去。不需要急——用多少时间都行。", actionHint: "line up 对齐/排列", frequency: "common" },
            ],
            casualVersion: "Alright, parallel park between those two cars. Pull up next to the front one, then back in. Take your time.",
            formalityVariants: {
              casual: "Parallel park between those two cars. Pull up, back in. No rush.",
              standard: "Please parallel park between those two vehicles ahead. Pull alongside the front car and back into the space.",
              formal: "I'd now like you to demonstrate parallel parking. Please position your vehicle alongside the forward vehicle, then reverse into the space between the two cars. There is no time constraint for this maneuver.",
            },
          },
          {
            speaker: "you",
            textEn: "OK. Can I adjust if I don't get it on the first try? Or do I have to get it in one go?",
            textZh: "好的。如果一次没停好可以调整吗？还是必须一次到位？",
            casualVersion: "What if I don't nail it the first time — can I adjust?",
            culturalNote: "在美国路考中，侧方停车允许多次调整，但不能碰到前后车或骑上路缘石。不要怕问考官规则——这不会扣分。",
            commonMistake: {
              wrong: "If I cannot park one time, can I adjust again?",
              correct: "Can I adjust if I don't get it on the first try?",
              explanation: "'on the first try' 是第一次尝试的地道说法。'get it' 在这里指成功停好。",
            },
            formalityVariants: {
              casual: "Can I try again if I mess up the first time?",
              standard: "Can I adjust if I don't get it on the first try?",
              formal: "If I'm unable to position the vehicle correctly on my initial attempt, am I permitted to make adjustments?",
            },
          },
          {
            speaker: "them",
            role: "路考考官",
            textEn: "You can adjust — that's fine. What I'm looking for is that you end up reasonably close to the curb, within eighteen inches, and that you don't hit either car or hop the curb. Use your mirrors and check your blind spot. Ready when you are.",
            textZh: "可以调整——没问题。我看的是你最终停得离路缘石合理距离内，18英寸以内，不能碰到前后车或骑上路缘石。用好后视镜并检查盲区。你准备好就开始。",
            keyPhrases: [
              { en: "curb", zh: "路缘石/马路牙子" },
              { en: "eighteen inches", zh: "18英寸（约46厘米）" },
              { en: "blind spot", zh: "盲区" },
            ],
            alternativeExpressions: [
              { textEn: "Adjustments are fine. Just get within about eighteen inches of the curb, don't touch the other cars, and don't ride up on the curb. Check your mirrors and blind spots. Go ahead.", textZh: "调整没问题。距路缘石18英寸以内就行，别碰到其他车，别骑上去。查好镜子和盲区。开始吧。", actionHint: "ride up on 骑上去", frequency: "common" },
            ],
            casualVersion: "Yeah you can adjust. Just end up within 18 inches of the curb, don't hit the other cars or hop the curb. Use your mirrors and check your blind spot. Go for it.",
            formalityVariants: {
              casual: "Adjustments are fine. Stay within 18 inches of the curb, don't hit anything. Go ahead.",
              standard: "You may adjust. End up within eighteen inches of the curb, avoid contact with either vehicle, and don't mount the curb. Use mirrors and check blind spots.",
              formal: "Corrections are permissible. The key criteria are: final positioning within eighteen inches of the curb, no contact with adjacent vehicles, and the tires must not mount the curb. Please utilize your mirrors and verify your blind spots throughout the maneuver.",
            },
          },
          {
            speaker: "you",
            textEn: "I think I'm in. Does this look OK?",
            textZh: "我觉得停好了。这样可以吗？",
            casualVersion: "Think I'm good. Does that look alright?",
            commonMistake: {
              wrong: "I think I parked well. Is this OK position?",
              correct: "I think I'm in. Does this look OK?",
              explanation: "'I'm in' 简洁表达停好了。'Does this look OK?' 比 'Is this OK position?' 更自然。",
            },
            formalityVariants: {
              casual: "Am I good?",
              standard: "I think I'm in. Does this look OK?",
              formal: "I believe I've completed the maneuver. Is the positioning acceptable?",
            },
          },
          {
            speaker: "them",
            role: "路考考官",
            textEn: "That's good — nicely done. Now, I'd like you to pull out, make a U-turn at the next intersection — check that it's legal first, look for the sign — and then we'll head back toward the DMV. When you merge back into traffic, make sure you check over your shoulder, not just the mirrors.",
            textZh: "很好——做得不错。现在请你开出来，在下一个路口做一个U型掉头——先确认是否合法，看看有没有标志——然后我们回DMV方向。汇入车流时确保回头看，不要只看后视镜。",
            keyPhrases: [
              { en: "U-turn", zh: "U型掉头" },
              { en: "merge back into traffic", zh: "汇入车流" },
              { en: "check over your shoulder", zh: "回头看/扭头检查" },
            ],
            alternativeExpressions: [
              { textEn: "Nice job. Pull out and make a U-turn at the next cross street — make sure it's allowed. Then we'll head back. When you pull out, look over your shoulder before merging — mirrors aren't enough.", textZh: "做得好。开出来在下个十字路口掉头——确认是允许的。然后我们回去。出去时汇入车流前要回头看——光看镜子不够。", actionHint: "cross street 交叉路口", frequency: "common" },
            ],
            casualVersion: "Nice. Pull out, U-turn at the next intersection — check the sign first to make sure it's legal. Then we're heading back. When you merge, check over your shoulder, not just the mirrors.",
            formalityVariants: {
              casual: "Good job. Pull out, U-turn next intersection — check the sign. Then back to DMV. Shoulder check when merging.",
              standard: "Well done. Pull out and make a legal U-turn at the next intersection, then we'll head back. Check over your shoulder when merging into traffic.",
              formal: "Excellent execution. Please exit the parking space and perform a U-turn at the next intersection, ensuring it is legally permitted by checking for signage. We'll then proceed back toward the DMV. When rejoining the flow of traffic, please perform a shoulder check in addition to verifying your mirrors.",
            },
          },
          {
            speaker: "you",
            textEn: "Understood. I'll check for a 'no U-turn' sign first. Should I get into the left lane now to prepare?",
            textZh: "明白了。我先看有没有'禁止掉头'的标志。我现在是不是应该先并到左车道准备？",
            casualVersion: "Got it. I'll check for a no-U-turn sign. Should I move to the left lane now?",
            culturalNote: "美国不是所有路口都允许掉头，有些地方有明确的 'No U-Turn' 标志。即使没有禁止标志，也要确保视野安全。中国的交规对掉头规定不同，有些路口有专门的掉头灯。",
            commonMistake: {
              wrong: "I understand. Should I change to left lane to prepare U-turn?",
              correct: "Understood. Should I get into the left lane now to prepare?",
              explanation: "'get into the left lane' 比 'change to left lane' 更自然。'Understood' 比 'I understand' 在路考中更简洁有力。",
            },
            formalityVariants: {
              casual: "OK. I'll look for a no-U-turn sign. Get in the left lane now?",
              standard: "Understood. I'll check for a 'no U-turn' sign. Should I get into the left lane now?",
              formal: "Understood. I'll verify there's no prohibition on U-turns at the intersection. Would you like me to position in the left lane in anticipation of the maneuver?",
            },
          },
          {
            speaker: "them",
            role: "路考考官",
            textEn: "That's good thinking — yes, go ahead and move to the left lane when it's safe. Signal, check your mirrors and blind spot, then change lanes. After the U-turn, stay in the right lane and continue straight. I'll let you know when to turn into the DMV parking lot.",
            textZh: "想得好——对，安全的时候并到左车道。打灯，看后视镜和盲区，然后换道。掉头后保持在右车道直行。到了DMV停车场我会告诉你什么时候转进去。",
            keyPhrases: [
              { en: "change lanes", zh: "换道/变道" },
              { en: "stay in the right lane", zh: "保持在右车道" },
              { en: "good thinking", zh: "想得好" },
            ],
            alternativeExpressions: [
              { textEn: "Smart. Yeah, get into the left lane — signal, mirror, blind spot, then go. After the U-turn, stick to the right lane. I'll tell you when to turn into the DMV lot.", textZh: "聪明。对，并到左车道——打灯、看镜、查盲区，然后并过去。掉头后保持右车道。到DMV停车场时我告诉你。", actionHint: "stick to 保持在/坚持", frequency: "common" },
            ],
            casualVersion: "Yeah, go ahead. Signal, mirror, blind spot, switch lanes. After the U-turn, stay right. I'll tell you when to pull into the DMV lot.",
            formalityVariants: {
              casual: "Yeah, left lane now. Signal, mirror, blind spot. After the U-turn, stay right. I'll tell you when to pull in.",
              standard: "Yes, move to the left lane when safe. Signal, check mirrors and blind spot. After the U-turn, stay right. I'll direct you into the DMV lot.",
              formal: "That demonstrates excellent anticipation. Please proceed to the left lane when conditions permit — engage your signal, verify mirrors and blind spot, then execute the lane change. Following the U-turn, maintain the right lane and proceed straight. I will indicate when to enter the DMV parking facility.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 25. 笔试：理解交规题目 ====================
  {
    id: "government-dmv-written-test",
    category: "government",
    titleZh: "笔试：理解交规题目",
    titleEn: "DMV Written Test: Understanding Questions",
    description: "理解驾照笔试中的英文交规题目和选项",
    otherRole: "DMV工作人员",
    otherRoleIcon: "📝",
    flows: [
      {
        id: "basic",
        titleZh: "基本交规词汇",
        titleEn: "Basic Traffic Rule Vocabulary",
        description: "了解笔试中常见的交通术语和题目格式",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm here to take the written test for my driver's license. I'm a bit nervous because English isn't my first language. Can I get the test in Chinese?",
            textZh: "你好，我来考驾照笔试。我有点紧张因为英语不是我的母语。可以考中文版的吗？",
            casualVersion: "Hey, I'm here for the written test. My English isn't great — is there a Chinese version?",
            culturalNote: "很多州的DMV提供多语言版本的笔试，包括中文。但不是所有州都有，而且有些州只有英语和西班牙语。提前在DMV网站查看你所在州的语言选项。即使有中文版，了解英文交通术语也非常重要，因为路上的标志都是英文的。",
            commonMistake: {
              wrong: "I come here to take driver license written test. Can I have Chinese test?",
              correct: "I'm here to take the written test for my driver's license. Can I get the test in Chinese?",
              explanation: "'I'm here to' 比 'I come here to' 更自然。'driver's license' 需要所有格 's。'get the test in Chinese' 是请求其他语言版本的自然说法。",
            },
            formalityVariants: {
              casual: "Here for the written test. Any chance I can take it in Chinese?",
              standard: "I'm here to take the written test for my driver's license. Is the test available in Chinese?",
              formal: "Good morning, I'm here to sit for the written examination for a driver's license. Given that English is not my native language, I was wondering if the exam is offered in Chinese.",
            },
          },
          {
            speaker: "them",
            role: "DMV工作人员",
            textEn: "Yes, we do offer the written test in Chinese — simplified and traditional. You can choose either version. However, I'd recommend familiarizing yourself with the English terms too, because all the road signs you'll see while driving are in English. The test has forty-six questions, and you need to get at least thirty-eight right to pass. You'll have as much time as you need.",
            textZh: "是的，我们有中文版笔试——简体和繁体都有。你可以选任一版本。不过我建议你也熟悉一下英文术语，因为开车时看到的路标都是英文的。考试有46道题，至少答对38道才能通过。时间不限。",
            keyPhrases: [
              { en: "simplified and traditional", zh: "简体和繁体" },
              { en: "road signs", zh: "路标/交通标志" },
              { en: "as much time as you need", zh: "时间不限/需要多久都行" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, Chinese is available — simplified or traditional. But learn the English road sign words too since signs on the road are all in English. It's forty-six questions, thirty-eight to pass, and there's no time limit.", textZh: "有中文版——简体或繁体。但也要学英文路标词汇因为路上的标志都是英文的。46题，38题及格，没有时间限制。", actionHint: "no time limit 没有时间限制", frequency: "common" },
            ],
            casualVersion: "Yeah, we have it in Chinese — simplified and traditional. But definitely learn the English terms too for the actual road signs. Forty-six questions, need thirty-eight to pass. Take your time, no time limit.",
            formalityVariants: {
              casual: "Yep, Chinese is available. Forty-six questions, thirty-eight to pass. No time limit.",
              standard: "Yes, the test is available in Chinese — both simplified and traditional. Forty-six questions, thirty-eight correct to pass, no time limit.",
              formal: "Indeed, the written examination is available in Chinese, in both simplified and traditional character sets. The test comprises forty-six questions, with a minimum of thirty-eight correct answers required to pass. There is no time constraint imposed on the examination.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take the English version actually — I want to practice. But can you help me understand some of the road sign terms? I keep getting confused by 'yield' and 'merge' and 'right of way.'",
            textZh: "我还是考英文版吧——我想练习一下。但你能帮我理解一些路标术语吗？我总是搞混 yield、merge 和 right of way。",
            casualVersion: "I'll do the English one. But what's the difference between yield, merge, and right of way? I keep mixing them up.",
            culturalNote: "yield（让行）、merge（汇入）和 right of way（路权）是中国驾考中也有的概念，但英文表达很不同。yield 在中国对应让行标志，merge 对应合流，right of way 对应优先通行权。",
            commonMistake: {
              wrong: "I will take English test. Can you explain me what is yield and merge and right of way?",
              correct: "I'll take the English version. Can you help me understand 'yield,' 'merge,' and 'right of way'?",
              explanation: "'explain to me' 或 'help me understand' 而不是 'explain me'。用引号标出具体术语更清楚。",
            },
            formalityVariants: {
              casual: "I'll do English. But what exactly is yield, merge, and right of way?",
              standard: "I'll take the English version. Can you help me understand the terms yield, merge, and right of way?",
              formal: "I'd prefer to attempt the English version for practice. However, could you clarify the distinction between the terms 'yield,' 'merge,' and 'right of way'? I find them somewhat confusing.",
            },
          },
          {
            speaker: "them",
            role: "DMV工作人员",
            textEn: "Sure! 'Yield' means you slow down and let other traffic go first — you don't have to stop completely, but you must give way. The yield sign is an upside-down triangle. 'Merge' means two lanes are becoming one, and you need to smoothly blend into the traffic flow — like getting onto the highway from an on-ramp. 'Right of way' is who gets to go first at an intersection or when lanes merge. For example, at a four-way stop, the car that stopped first has the right of way.",
            textZh: "当然！'Yield' 是让行，减速让其他车先走——不一定要完全停下，但必须让行。让行标志是倒三角形。'Merge' 是合流，两条车道变成一条，你需要平顺地汇入车流——比如从匝道上高速。'Right of way' 是优先通行权，决定谁先走，比如在十字路口或合流时。比如四面停车标志路口，先停的车有优先通行权。",
            keyPhrases: [
              { en: "yield", zh: "让行" },
              { en: "merge", zh: "合流/汇入" },
              { en: "right of way", zh: "优先通行权/路权" },
            ],
            alternativeExpressions: [
              { textEn: "OK so yield means let other cars go first. The sign's an upside-down triangle. Merge is when two lanes become one and you blend in. Right of way is about who goes first — like at a stop sign, whoever stopped first goes first.", textZh: "yield 就是让其他车先走。标志是倒三角形。merge 是两条道变一条你要融入。right of way 是谁先走——比如停车标志处先停的先走。", actionHint: "blend in 融入", frequency: "common" },
            ],
            casualVersion: "OK so yield = slow down and let others go first. That upside-down triangle sign. Merge = two lanes into one, blend in. Right of way = who gets to go first. Like at a four-way stop, whoever stopped first goes first.",
            formalityVariants: {
              casual: "Yield = let others go. Merge = lanes combining. Right of way = who goes first.",
              standard: "Yield means slowing to let others go first. Merge means two lanes becoming one. Right of way determines who proceeds first at intersections.",
              formal: "Yield requires you to reduce speed and cede priority to other traffic — the sign is an inverted triangle. Merge refers to the convergence of two lanes into one, requiring a smooth integration into the traffic flow. Right of way designates which party has priority to proceed, particularly at intersections and lane convergences.",
            },
          },
          {
            speaker: "you",
            textEn: "That helps a lot. One more question — what does 'no passing zone' mean? And what about a solid yellow line versus a dashed yellow line?",
            textZh: "这很有帮助。再问一个——no passing zone 是什么意思？还有实线和虚线黄线有什么区别？",
            casualVersion: "OK that makes sense. What about 'no passing zone'? And what's the difference between a solid yellow line and a dashed one?",
            commonMistake: {
              wrong: "What means 'no passing zone'? What is difference between yellow full line and yellow broken line?",
              correct: "What does 'no passing zone' mean? What about a solid yellow line versus a dashed yellow line?",
              explanation: "'What does X mean' 是标准语序，不是 'What means X'。黄线说 'solid'（实线）和 'dashed'（虚线），不是 'full' 和 'broken'。",
            },
            formalityVariants: {
              casual: "What's a no passing zone? And solid vs dashed yellow line?",
              standard: "What does 'no passing zone' mean? And what's the difference between a solid yellow line and a dashed one?",
              formal: "Could you also explain what 'no passing zone' signifies? Additionally, I'd like to understand the distinction between solid and dashed yellow center lines.",
            },
          },
          {
            speaker: "them",
            role: "DMV工作人员",
            textEn: "A 'no passing zone' means you cannot pass or overtake the car in front of you — usually on a two-lane road where visibility is limited, like a curve or a hill. A solid yellow line means no passing — you must stay in your lane. A dashed yellow line means you're allowed to pass when it's safe to do so. If you see a solid line on your side and a dashed line on the other side, only the drivers on the dashed side can pass. These come up a lot on the test, so make sure you know them.",
            textZh: "'No passing zone' 是禁止超车区域——通常在双向两车道路上视线受限的地方，比如弯道或山坡。黄色实线表示禁止超车——必须保持在自己车道。黄色虚线表示在安全时可以超车。如果你这边是实线对面是虚线，只有虚线一边的车可以超车。这些在考试中经常出现，一定要记住。",
            keyPhrases: [
              { en: "no passing zone", zh: "禁止超车区域" },
              { en: "solid yellow line", zh: "黄色实线" },
              { en: "dashed yellow line", zh: "黄色虚线" },
            ],
            alternativeExpressions: [
              { textEn: "No passing zone = don't try to get around the car ahead of you. Solid yellow = stay in your lane. Dashed yellow = OK to pass if it's safe. If your side's solid but the other side's dashed, only they can pass. Know this stuff cold for the test.", textZh: "禁止超车区 = 别超前面的车。实线黄 = 保持车道。虚线黄 = 安全时可以超。你这边实线对面虚线，只有对面能超。考试必考，要背熟。", actionHint: "know cold 背得滚瓜烂熟", frequency: "common" },
            ],
            culturalNote: "美国的道路标线系统和中国有相似之处但也有差异。黄色线在美国分隔对向车流，白色线分隔同向车流。中国也使用类似系统但有些细节不同。'No passing zone' 的概念在中国也有但主要出现在特定路段标志上。",
            casualVersion: "No passing zone means don't pass the car in front of you — usually on winding or hilly roads. Solid yellow = don't cross. Dashed yellow = you can pass if it's safe. If your side's solid and the other's dashed, only the other side can pass. These are definitely on the test.",
            formalityVariants: {
              casual: "No passing = stay behind the car ahead. Solid yellow = no crossing. Dashed yellow = you can pass safely.",
              standard: "No passing zone prohibits overtaking. Solid yellow means stay in lane. Dashed yellow permits passing when safe. These are frequently tested.",
              formal: "A no passing zone prohibits overtaking the vehicle ahead, typically in areas with limited visibility. A solid yellow center line indicates that lane crossing is prohibited. A dashed yellow line permits passing when conditions are safe. When lines differ on each side, only drivers on the dashed side may legally pass. These distinctions are heavily represented on the examination.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "模拟笔试题练习",
        titleEn: "Practice Test Questions",
        description: "练习理解DMV笔试中的典型题目和选项",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "DMV工作人员",
            textEn: "Let me give you a few practice questions that are similar to what you'll see on the test. Question one: 'When approaching a school zone with flashing lights, you must — A) slow to twenty-five miles per hour, B) stop completely and wait for the lights to stop, C) slow to fifteen miles per hour, D) proceed at normal speed if no children are visible.' What do you think?",
            textZh: "我给你几道和考试类似的练习题。第一题：'接近学校区域闪烁灯时，你必须——A) 减速到25英里/时，B) 完全停车等灯停止，C) 减速到15英里/时，D) 如果看不到孩子就正常车速通过。' 你怎么想？",
            keyPhrases: [
              { en: "school zone", zh: "学校区域" },
              { en: "flashing lights", zh: "闪烁灯" },
              { en: "proceed", zh: "前进/继续行驶" },
            ],
            alternativeExpressions: [
              { textEn: "Here's a sample question: 'When a school zone has flashing lights activated, what must you do?' A through D are your options. Take your time.", textZh: "这是一道样题：'学校区域闪烁灯亮起时你必须怎么做？' A到D是选项。慢慢想。", actionHint: "activated 被激活/亮起", frequency: "common" },
            ],
            casualVersion: "Let me quiz you. School zone with flashing lights — what do you do? A) 25 mph, B) full stop, C) 15 mph, D) go normal if no kids. Which one?",
            formalityVariants: {
              casual: "OK quiz time. School zone, flashing lights. A) 25 mph, B) stop, C) 15 mph, D) keep going if no kids. Pick one.",
              standard: "Here's a practice question about school zones. When the lights are flashing, do you: A) slow to 25, B) stop, C) slow to 15, or D) proceed normally if no children?",
              formal: "I'd like to present a practice question representative of the examination. When approaching a designated school zone with activated flashing signals, the correct protocol is: A) reduce speed to twenty-five, B) come to a complete stop, C) reduce speed to fifteen, or D) maintain normal speed in the absence of visible pedestrians.",
            },
          },
          {
            speaker: "you",
            textEn: "I think it's C — fifteen miles per hour. In most states the school zone speed limit is fifteen when the lights are flashing.",
            textZh: "我觉得是C——15英里/时。大部分州学校区域闪灯时限速是15。",
            casualVersion: "Gotta be C, right? Fifteen when the lights are going.",
            culturalNote: "美国学校区域限速非常严格，处罚很重（通常是双倍罚款）。大部分州限速是15-25英里/时，具体因州而异。在中国学校附近限速通常是30公里/时。一定要注意闪灯和学校区域标志。",
            commonMistake: {
              wrong: "I think is C. School zone speed is fifteen miles per hour when light is flashing.",
              correct: "I think it's C. In most states the school zone speed limit is fifteen when the lights are flashing.",
              explanation: "'I think it's' 不是 'I think is'。'speed limit' 比 'speed' 更准确。'lights are flashing' 用复数。",
            },
            formalityVariants: {
              casual: "C — fifteen, right?",
              standard: "I think it's C — fifteen miles per hour when the lights are flashing.",
              formal: "I believe the correct answer is C — the speed limit in a school zone is typically reduced to fifteen miles per hour when the warning lights are activated.",
            },
          },
          {
            speaker: "them",
            role: "DMV工作人员",
            textEn: "Correct! Good job. Let's try another one. 'You are approaching an intersection and the traffic light turns yellow. You should — A) speed up to make it through, B) stop if you can do so safely, C) honk and proceed through, D) immediately slam on the brakes.' This one trips up a lot of people.",
            textZh: "正确！很好。再来一道。'你接近路口时交通灯变黄。你应该——A) 加速通过，B) 如果能安全停下就停车，C) 按喇叭继续通过，D) 立即急刹车。' 这道题很多人搞错。",
            keyPhrases: [
              { en: "traffic light turns yellow", zh: "交通灯变黄" },
              { en: "slam on the brakes", zh: "急刹车/猛踩刹车" },
              { en: "trips up", zh: "难住/绊倒（引申为搞错）" },
            ],
            alternativeExpressions: [
              { textEn: "Right! Next one: yellow light as you're approaching an intersection. Do you A) gun it, B) stop safely, C) honk and go, or D) slam the brakes? Think carefully.", textZh: "对！下一题：接近路口黄灯。A) 加速冲过 B) 安全停下 C) 按喇叭冲 D) 猛踩刹车？仔细想。", actionHint: "gun it 猛加油门", frequency: "common" },
            ],
            casualVersion: "Yep! Here's another: yellow light at an intersection. A) speed up, B) stop if safe, C) honk and go, D) slam the brakes. A lot of people get this wrong.",
            formalityVariants: {
              casual: "Nice! Next: yellow light. Speed up, stop safely, honk through, or slam brakes? Lots of people mess this up.",
              standard: "Correct. Next question: approaching an intersection when the light turns yellow. A) speed up, B) stop safely, C) honk and proceed, D) slam the brakes.",
              formal: "That is correct. Let me present another common examination question: upon approaching an intersection where the traffic signal transitions to yellow, should you: A) accelerate to clear the intersection, B) stop if safely possible, C) sound your horn and proceed, or D) apply brakes abruptly? This particular question frequently results in incorrect responses.",
            },
          },
          {
            speaker: "you",
            textEn: "B — stop if you can do so safely. You're not supposed to speed up for a yellow light. But if you're already too close to stop safely, you should proceed through carefully.",
            textZh: "B——如果能安全停下就停车。黄灯不应该加速。但如果你已经太近停不住了，应该小心通过。",
            casualVersion: "B — stop if you can. You're not supposed to speed through a yellow. But if you're right there already, just go through.",
            commonMistake: {
              wrong: "B is correct. We should stop when yellow light. But if too near can continue.",
              correct: "B — stop if you can do so safely. But if you're already too close to stop safely, you should proceed through carefully.",
              explanation: "'stop if you can do so safely' 是条件性表达，比 'should stop when yellow' 更准确。'proceed through carefully' 比 'can continue' 更专业。",
            },
            formalityVariants: {
              casual: "B. Stop if you can. If you're too close, just go through careful.",
              standard: "B — stop if you can do so safely. If you're too close to stop, proceed through carefully.",
              formal: "The answer is B — one should stop if it can be accomplished safely. However, if the vehicle is in such proximity to the intersection that stopping would be unsafe or cause a rear-end collision, the driver should proceed through with caution.",
            },
          },
          {
            speaker: "them",
            role: "DMV工作人员",
            textEn: "Excellent — and your explanation is spot on. One more. This is a common one that people from overseas often get wrong: 'At a four-way stop, if two cars arrive at the same time, who goes first? A) The car on the left, B) the car on the right, C) whoever honks first, D) the larger vehicle.' Take a moment.",
            textZh: "非常好——你的解释也完全正确。再来一道。这道是海外来的人经常答错的：'在四面停车标志路口，如果两辆车同时到达，谁先走？A) 左边的车，B) 右边的车，C) 先按喇叭的，D) 更大的车。' 想一下。",
            keyPhrases: [
              { en: "four-way stop", zh: "四面停车标志路口" },
              { en: "spot on", zh: "完全正确/一针见血" },
              { en: "arrive at the same time", zh: "同时到达" },
            ],
            alternativeExpressions: [
              { textEn: "Perfect explanation. Here's one that gets a lot of international drivers: four-way stop, two cars arrive together — who has the right of way? A) left car, B) right car, C) first to honk, D) bigger car.", textZh: "完美的解释。这道经常难住国际驾驶员：四面停车路口，两车同时到——谁有路权？A) 左边的 B) 右边的 C) 先按喇叭的 D) 更大的车。", actionHint: "gets a lot of people 难住很多人", frequency: "common" },
            ],
            casualVersion: "Nailed it. OK last one — this trips up a lot of foreign drivers. Four-way stop, two cars show up at the same time. Who goes? A) left car, B) right car, C) whoever honks, D) bigger car.",
            formalityVariants: {
              casual: "Perfect. Last one: four-way stop, two cars at once. Who goes? Left, right, honker, or bigger car?",
              standard: "Great answer. Final question — at a four-way stop, if two cars arrive simultaneously, who has the right of way? A) left, B) right, C) first to honk, D) larger vehicle.",
              formal: "An excellent and thorough response. For our final practice question — one that frequently challenges international applicants: at an intersection controlled by four-way stop signs, when two vehicles arrive simultaneously, which has the right of way? A) the vehicle to the left, B) the vehicle to the right, C) whichever driver signals first, or D) the larger vehicle.",
            },
          },
          {
            speaker: "you",
            textEn: "B — the car on the right has the right of way. In America, you always yield to the driver on your right if you arrive at the same time. That's different from some other countries.",
            textZh: "B——右边的车有优先通行权。在美国，如果同时到达你总是让右边的车先走。这和一些其他国家不同。",
            casualVersion: "B — yield to the right. Right side always goes first if you get there at the same time.",
            culturalNote: "美国 'yield to the right'（右侧优先）是核心交规之一。在中国没有明确的四面停车标志规则——中国的路口通常由红绿灯控制，或者有明确的主路和辅路之分。在美国的住宅区，很多路口没有红绿灯只有 stop sign，所以这个规则非常重要。",
            commonMistake: {
              wrong: "B — right side car go first. In America right side is priority.",
              correct: "B — the car on the right has the right of way. You always yield to the driver on your right.",
              explanation: "'has the right of way' 是正确的法律表达。'yield to the driver on your right' 比 'right side is priority' 更准确。",
            },
            formalityVariants: {
              casual: "B. Right goes first. Always yield to the right.",
              standard: "B — the car on the right has the right of way. You yield to the driver on your right when arriving simultaneously.",
              formal: "The correct answer is B — the vehicle positioned to the right maintains the right of way. Under American traffic law, when two vehicles arrive simultaneously at a four-way stop, the driver on the left must yield to the driver on their right.",
            },
          },
          {
            speaker: "them",
            role: "DMV工作人员",
            textEn: "Three for three — you're going to do just fine on the test. Here's a quick tip: if you're unsure about a question, eliminate the obviously wrong answers first. And remember — when in doubt, the safest answer is usually the right one. The test isn't trying to trick you; it's testing whether you know how to drive safely. Good luck!",
            textZh: "三题全对——你考试肯定没问题。给你个小技巧：如果不确定某道题，先排除明显错误的选项。记住——拿不准的时候，最安全的选项通常就是正确答案。考试不是要刁难你，是测试你是否懂得安全驾驶。祝好运！",
            keyPhrases: [
              { en: "three for three", zh: "三题全对" },
              { en: "eliminate", zh: "排除" },
              { en: "when in doubt", zh: "拿不准的时候" },
            ],
            alternativeExpressions: [
              { textEn: "Perfect score on the practice! Pro tip: if a question stumps you, cross out the dumb answers first. And usually the safest choice wins. You'll do great — go get it!", textZh: "练习满分！小技巧：遇到难题先排除明显错的。通常最安全的选项就是对的。你会考得很好的——加油！", actionHint: "stumps you 难住你; cross out 划掉", frequency: "common" },
            ],
            casualVersion: "Nice, three for three! Quick tip — if you're stuck, just cross out the obviously wrong answers and go with the safest option. The test's not trying to trick you. You got this — good luck!",
            formalityVariants: {
              casual: "Three for three, nice! When in doubt, pick the safest answer. Good luck!",
              standard: "Three for three. Eliminate wrong answers when unsure, and choose the safest option. The test is about safe driving knowledge. Good luck.",
              formal: "You've answered all three correctly — I'm confident you'll perform well. My advice: employ the process of elimination on uncertain questions, and remember that the examination prioritizes safe driving practices. Best of luck on your test.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 26. 被交警拦停 ====================
  {
    id: "government-police-traffic-stop",
    category: "government",
    titleZh: "被交警拦停的正确应对",
    titleEn: "Police Traffic Stop: Correct Response",
    description: "被警察拦停时的正确行为和沟通方式（安全关键场景）",
    otherRole: "交通警察",
    otherRoleIcon: "🚔",
    flows: [
      {
        id: "basic",
        titleZh: "基本拦停应对",
        titleEn: "Basic Traffic Stop Response",
        description: "第一次被交警拦停时的正确行为和沟通",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "[You see flashing lights behind you. You pull over to the right side of the road, turn off the engine, roll down the window, and place both hands on the steering wheel where the officer can see them.]",
            textZh: "[你看到身后有闪烁的警灯。你靠右停车，熄火，摇下车窗，把双手放在方向盘上让警察能看到。]",
            casualVersion: "[Pull over, engine off, window down, hands on wheel.]",
            culturalNote: "[CRITICAL SAFETY] 这是在美国最重要的安全场景之一。被警察拦停时的正确做法：1) 立即靠右停车，2) 熄火，3) 摇下车窗，4) 双手放在方向盘上不要动，5) 不要自行伸手拿任何东西。在中国被交警拦停时通常没有这么紧张的气氛，但在美国警察不知道你车里有什么，任何突然的动作都可能被视为威胁。保持冷静和可见是最重要的。",
            commonMistake: {
              wrong: "[Opening the car door to get out, or reaching into the glove box for documents before the officer arrives]",
              correct: "[Stay in the car, hands on the steering wheel, wait for the officer to approach]",
              explanation: "[CRITICAL] 千万不要下车或在警察到来前翻找东西。这些动作在美国可能被视为威胁。保持静止，双手可见。等警察来了告诉你该做什么。",
            },
            formalityVariants: {
              casual: "[Pull over, stop engine, roll window down, hands on the wheel. Don't move.]",
              standard: "[Pull over safely, turn off the engine, lower the window, and place both hands on the steering wheel.]",
              formal: "[Safely navigate to the right shoulder, extinguish the engine, lower the driver's window, and position both hands visibly on the steering wheel.]",
            },
          },
          {
            speaker: "them",
            role: "交通警察",
            textEn: "Good evening. I'm Officer Johnson with the city police. The reason I pulled you over is your right tail light is out. Can I see your driver's license, registration, and proof of insurance, please?",
            textZh: "晚上好。我是市警察局的 Johnson 警官。我拦你是因为你右边的尾灯不亮了。请出示你的驾照、车辆登记和保险证明。",
            keyPhrases: [
              { en: "pulled you over", zh: "拦停你" },
              { en: "tail light is out", zh: "尾灯不亮了" },
              { en: "driver's license, registration, and proof of insurance", zh: "驾照、登记证和保险证明" },
            ],
            alternativeExpressions: [
              { textEn: "Evening. Officer Johnson. I stopped you because your right tail light's burned out. License, registration, and insurance please.", textZh: "晚上好。Johnson 警官。我拦你是因为你右边尾灯灭了。驾照、登记和保险。", actionHint: "burned out 烧坏了/灭了", frequency: "common" },
            ],
            casualVersion: "Evening. Officer Johnson, city PD. Pulled you over for a busted tail light on the right. License, registration, and insurance please.",
            formalityVariants: {
              casual: "Hey, Officer Johnson. Your right tail light's out. License, registration, insurance.",
              standard: "Good evening, I'm Officer Johnson. I pulled you over because your right tail light is out. May I see your license, registration, and insurance?",
              formal: "Good evening. I am Officer Johnson of the municipal police department. The reason for this traffic stop is a malfunctioning right tail light on your vehicle. May I please see your driver's license, vehicle registration, and current proof of insurance?",
            },
          },
          {
            speaker: "you",
            textEn: "Good evening, officer. I didn't realize my tail light was out — I'm sorry about that. My license and registration are in my wallet in my back pocket, and the insurance card is in the glove compartment. Is it OK if I reach for them?",
            textZh: "晚上好，警官。我不知道尾灯不亮了——抱歉。我的驾照和登记在后裤兜的钱包里，保险卡在手套箱里。我可以去拿吗？",
            casualVersion: "Evening, officer. Didn't know my tail light was out, sorry. My stuff's in my wallet and the glove box. Can I grab them?",
            culturalNote: "[CRITICAL SAFETY] 在拿任何东西之前一定要先告诉警察你要拿什么、在哪里，并征得同意。这是美国交通拦停中最重要的安全规则之一。在中国，警察拦停时你可能会自然地直接翻包找证件，但在美国任何看不见的手部动作都可能引起警察紧张。先说再动。",
            commonMistake: {
              wrong: "[Reaching directly into pocket or glove box without saying anything]",
              correct: "My license is in my back pocket and insurance is in the glove compartment. Is it OK if I reach for them?",
              explanation: "[CRITICAL] 永远不要在没有告知警察的情况下伸手拿东西。先说清楚东西在哪，问可不可以拿，得到许可后再慢慢拿。",
            },
            formalityVariants: {
              casual: "Evening. Didn't know about the tail light, sorry. My license is in my pocket and insurance is in the glove box. OK if I grab them?",
              standard: "Good evening, officer. I didn't realize my tail light was out. My documents are in my wallet and glove compartment. May I reach for them?",
              formal: "Good evening, officer. I apologize — I was unaware of the tail light issue. My driver's license and registration are in my wallet in my rear pocket, and the insurance documentation is in the glove compartment. With your permission, may I retrieve them?",
            },
          },
          {
            speaker: "them",
            role: "交通警察",
            textEn: "Yes, go ahead — slowly, please. I appreciate you asking first.",
            textZh: "可以，请慢慢拿。谢谢你先问。",
            keyPhrases: [
              { en: "go ahead", zh: "请吧/可以拿了" },
              { en: "slowly", zh: "慢慢地" },
              { en: "I appreciate you asking first", zh: "感谢你先询问" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, go ahead and reach for those. Nice and slow. Thank you for letting me know.", textZh: "可以，去拿吧。慢慢来。谢谢你告诉我。", actionHint: "nice and slow 慢慢地", frequency: "common" },
            ],
            casualVersion: "Yeah, go ahead. Just slowly. Thanks for asking.",
            formalityVariants: {
              casual: "Yeah go ahead. Slowly. Thanks for asking.",
              standard: "Yes, go ahead slowly. Thank you for asking first.",
              formal: "Certainly, you may proceed — please do so slowly. I appreciate your courtesy in asking before reaching for your documents.",
            },
          },
          {
            speaker: "you",
            textEn: "Here you go, officer — my license, registration, and insurance card. Is my tail light something I'll get a ticket for, or is this just a warning?",
            textZh: "给您，警官——我的驾照、登记证和保险卡。尾灯的事会开罚单吗，还是只是警告？",
            casualVersion: "Here's everything. Am I getting a ticket for the tail light or just a warning?",
            culturalNote: "在美国，被拦停后可能收到 ticket（罚单）或只是 warning（口头/书面警告）。和中国不同，美国的交通罚单不能现场交钱，需要之后上网或去法院处理。千万不要试图给警察塞钱——这在美国是行贿，是严重犯罪。",
            commonMistake: {
              wrong: "Will you give me a penalty? How much should I pay?",
              correct: "Is this a ticket or just a warning?",
              explanation: "'ticket' 是交通罚单的口语说法，不说 'penalty'。不要问 'how much should I pay' ——在美国不能现场交罚款。",
            },
            formalityVariants: {
              casual: "Here's my stuff. Am I getting a ticket or is it a warning?",
              standard: "Here are my documents. Will this be a ticket or a warning?",
              formal: "Here are my driver's license, registration, and proof of insurance. May I inquire whether this will result in a citation or a warning?",
            },
          },
          {
            speaker: "them",
            role: "交通警察",
            textEn: "I'm just going to give you a fix-it ticket — that means you won't have to pay a fine as long as you get the tail light fixed within thirty days and show proof to the court or police station. It's a safety issue, so get it taken care of as soon as you can. You've been very cooperative and I appreciate that. Drive safely tonight.",
            textZh: "我只给你开一张修复罚单——意思是只要你在30天内修好尾灯并向法院或警察局出示证明就不用交罚款。这是安全问题，所以尽快处理。你很配合，我很感谢。今晚注意安全。",
            keyPhrases: [
              { en: "fix-it ticket", zh: "修复罚单（修好就不罚款）" },
              { en: "show proof", zh: "出示证明" },
              { en: "cooperative", zh: "配合的" },
            ],
            alternativeExpressions: [
              { textEn: "I'll write you a fix-it ticket. Get the light fixed in thirty days, bring proof to the station, and you're good — no fine. It's a safety thing so don't put it off. Thanks for being cooperative. Have a good night.", textZh: "我给你开个修复罚单。30天内修好灯，拿证明去警察局就行——不用罚款。是安全问题所以别拖。谢谢配合。晚安。", actionHint: "don't put it off 别拖延", frequency: "common" },
            ],
            culturalNote: "美国有一种特殊的 'fix-it ticket'（修复罚单），只要你在规定时间内修好问题并出示证明，罚款就免除。这在中国没有对应的制度。收到后一定要按时处理，否则会变成正式罚款甚至影响驾照。",
            casualVersion: "Just a fix-it ticket — get the light fixed within 30 days, show proof at the station, and you won't pay anything. Get it done soon though, it's a safety thing. You've been super cooperative, I appreciate it. Be safe tonight.",
            formalityVariants: {
              casual: "Just a fix-it ticket. Fix the light, show proof, no fine. Drive safe.",
              standard: "I'm issuing a fix-it ticket. Repair the tail light within thirty days and present proof. No fine if you comply. Drive safely.",
              formal: "I will be issuing a corrective citation. Provided you repair the tail light within thirty days and present documentation of the repair to the court or precinct, no monetary fine will be assessed. I commend your cooperation. Please drive safely this evening.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you, officer. I'll get it fixed this weekend. Have a good night.",
            textZh: "谢谢你，警官。我这周末就去修。晚安。",
            casualVersion: "Thanks, officer. I'll get it fixed ASAP. Good night.",
            commonMistake: {
              wrong: "OK thank you. I will fix it. Bye.",
              correct: "Thank you, officer. I'll get it fixed this weekend. Have a good night.",
              explanation: "保持礼貌和具体。说'this weekend'表示你认真对待。'Have a good night' 是得体的告别。不要急着开走——等警察走回他的车后再安全驶离。",
            },
            formalityVariants: {
              casual: "Thanks! I'll fix it ASAP. Night.",
              standard: "Thank you, officer. I'll get it fixed this weekend. Have a good night.",
              formal: "Thank you very much, officer. I'll have the tail light repaired at the earliest opportunity. I wish you a safe evening as well.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "复杂拦停情况",
        titleEn: "Complex Traffic Stop Situations",
        description: "处理超速被拦停和不理解英语指令的情况",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "交通警察",
            textEn: "License and registration. Do you know why I pulled you over?",
            textZh: "驾照和登记证。你知道我为什么拦你吗？",
            keyPhrases: [
              { en: "Do you know why I pulled you over?", zh: "你知道我为什么拦你吗？" },
            ],
            alternativeExpressions: [
              { textEn: "I need to see your license and registration. Any idea why I stopped you?", textZh: "我需要看你的驾照和登记证。知道我为什么拦你吗？", actionHint: "any idea 知道吗", frequency: "common" },
            ],
            casualVersion: "License and registration. Know why I stopped you?",
            culturalNote: "当警察问 'Do you know why I pulled you over?' 时，不要猜测或承认任何违法行为。这个问题的回答很重要——如果你说'因为我超速了'，这可能在法庭上被视为认罪。最好说'No, officer' 或 'I'm not sure'。",
            formalityVariants: {
              casual: "License, registration. Know why I pulled you over?",
              standard: "May I see your license and registration? Do you know why I pulled you over?",
              formal: "Good evening. I'll need your driver's license and vehicle registration, please. Are you aware of the reason for this traffic stop?",
            },
          },
          {
            speaker: "you",
            textEn: "Good evening, officer. My documents are in my wallet — may I reach for it? And no, I'm not sure why you pulled me over.",
            textZh: "晚上好，警官。证件在我钱包里——可以去拿吗？我不确定你为什么拦我。",
            casualVersion: "Evening, officer. Wallet's in my pocket — OK to grab it? Not sure why you stopped me.",
            culturalNote: "[CRITICAL SAFETY] 不要主动猜测原因或认错。说 'I'm not sure' 是最安全的回答。即使你知道自己可能超速了，承认也可能在法律上不利于你。保持礼貌但不要自证其罪。",
            commonMistake: {
              wrong: "Maybe because I was driving too fast? Sorry, officer.",
              correct: "I'm not sure why you pulled me over.",
              explanation: "[IMPORTANT] 不要猜测或主动承认违规。说 'I'm not sure' 就够了。猜测可能变成法庭上的自白。",
            },
            formalityVariants: {
              casual: "Not sure why you stopped me, officer. Can I get my wallet?",
              standard: "I'm not sure why you pulled me over, officer. My wallet is in my pocket — may I reach for it?",
              formal: "I'm not certain of the reason, officer. My identification is in my wallet in my pocket. With your permission, may I retrieve it?",
            },
          },
          {
            speaker: "them",
            role: "交通警察",
            textEn: "Go ahead. I clocked you doing fifty-two in a thirty-five zone back there. That's seventeen over the speed limit. Is there a reason you were going that fast?",
            textZh: "请拿。我测到你在限速35的路段开到了52。超速17英里。你开这么快有什么原因吗？",
            keyPhrases: [
              { en: "clocked you doing", zh: "测到你开到了" },
              { en: "seventeen over", zh: "超了17（英里/时）" },
              { en: "speed limit", zh: "限速" },
            ],
            alternativeExpressions: [
              { textEn: "My radar had you at fifty-two in a thirty-five zone. That's seventeen over. What's the rush?", textZh: "我的雷达显示你在35限速区开了52。超速17。赶什么呢？", actionHint: "What's the rush? 赶什么呢？", frequency: "common" },
            ],
            casualVersion: "Sure. Got you at fifty-two in a thirty-five. Seventeen over. Any reason you were going that fast?",
            formalityVariants: {
              casual: "Got you doing fifty-two in a thirty-five. Seventeen over. What's the deal?",
              standard: "I recorded your speed at fifty-two in a thirty-five zone. That's seventeen over the limit. Is there a reason?",
              formal: "I registered your vehicle traveling at fifty-two miles per hour in a zone posted at thirty-five. That constitutes seventeen miles per hour over the designated speed limit. Is there a particular reason you were exceeding the posted limit?",
            },
          },
          {
            speaker: "you",
            textEn: "I'm sorry, officer. I honestly didn't realize I was going that fast. I must have missed the speed limit sign when it changed. It won't happen again.",
            textZh: "对不起，警官。说实话我没意识到开这么快。限速变化时我一定是漏看了标志。不会再犯了。",
            casualVersion: "Sorry, officer. Honestly didn't realize I was going that fast. Must've missed the sign.",
            culturalNote: "保持冷静和礼貌是最重要的。不要争辩或表现出怒气。在美国，如果你觉得罚单不公，可以之后去法庭争辩，但在路边和警察争论不会有好结果，反而可能让情况更糟。",
            commonMistake: {
              wrong: "But the road was empty! Nobody was there! This is unfair!",
              correct: "I'm sorry, officer. I honestly didn't realize I was going that fast. It won't happen again.",
              explanation: "[IMPORTANT] 不要与警察争论。保持冷静和尊重。如果你不同意罚单，可以之后去法庭争辩。路边争吵只会让事情变糟。",
            },
            formalityVariants: {
              casual: "My bad, officer. Didn't realize I was going that fast. Won't happen again.",
              standard: "I'm sorry, officer. I didn't realize I was going that fast. I must have missed the sign. It won't happen again.",
              formal: "I sincerely apologize, officer. I was genuinely unaware that I had exceeded the speed limit. I must have failed to notice the speed limit change. I assure you this will not happen again.",
            },
          },
          {
            speaker: "them",
            role: "交通警察",
            textEn: "I'm going to have to write you a citation. The fine amount will be on the ticket — you can either pay it online or by mail, or you can contest it in court if you choose. You have thirty days to respond. The court date is printed on the citation. Do you have any questions?",
            textZh: "我必须给你开一张罚单。罚款金额在罚单上——你可以网上或邮寄缴纳，也可以选择去法庭申辩。你有30天的回应时间。开庭日期印在罚单上。你有什么问题吗？",
            keyPhrases: [
              { en: "citation", zh: "罚单（正式说法）" },
              { en: "contest it in court", zh: "在法庭上申辩/抗辩" },
              { en: "respond", zh: "回应/处理" },
            ],
            alternativeExpressions: [
              { textEn: "I'm writing you a ticket. You'll see the fine amount on it. Pay online, by mail, or fight it in court — your choice. Thirty days to deal with it. Court date's on the ticket. Any questions?", textZh: "我给你开罚单。上面有罚款金额。网上交、邮寄交或去法庭辩——你选。30天内处理。开庭日期在罚单上。有问题吗？", actionHint: "fight it 抗辩", frequency: "common" },
            ],
            casualVersion: "Gotta give you a ticket. Fine's on the ticket — pay online, by mail, or take it to court. Thirty days. Court date's on there. Questions?",
            formalityVariants: {
              casual: "I'm writing you up. Fine's on the ticket. Pay or go to court, thirty days. Questions?",
              standard: "I'm issuing a citation. The fine is listed on the ticket. You can pay or contest in court within thirty days.",
              formal: "I will be issuing a traffic citation. The assessed fine is indicated on the document. You may remit payment online or via mail, or you may elect to contest the citation in court. You have thirty days from today to respond. The scheduled court date is printed on the citation.",
            },
          },
          {
            speaker: "you",
            textEn: "I understand. Will this go on my driving record? And will it affect my insurance?",
            textZh: "我明白了。这会记到我的驾驶记录上吗？会影响保险费吗？",
            casualVersion: "Got it. Does this go on my record? Will my insurance go up?",
            culturalNote: "在美国，交通罚单会记入驾驶记录并可能导致保费上涨。有些州提供 traffic school（交通安全课程）的选项——上完课后罚单不会记入记录。这和中国的扣分制度不同，美国各州的点数系统也不一样。",
            commonMistake: {
              wrong: "Will this be recorded? Will insurance become expensive?",
              correct: "Will this go on my driving record? Will it affect my insurance?",
              explanation: "'go on my driving record' 是记入驾驶记录的地道说法。'affect my insurance' 比 'insurance become expensive' 更自然。",
            },
            formalityVariants: {
              casual: "Does this go on my record? Insurance gonna go up?",
              standard: "Will this go on my driving record? And will it affect my insurance?",
              formal: "I understand. Will this citation be recorded on my driving history? And might it have implications for my insurance premiums?",
            },
          },
          {
            speaker: "them",
            role: "交通警察",
            textEn: "Speeding tickets do go on your record and can affect your insurance rates. However, depending on the court, you may be eligible for traffic school — if you complete an approved course, the ticket might not count as a point on your record. That's something to ask about when you contact the court. Slow it down out there — the speed limits are posted for a reason. Have a safe night.",
            textZh: "超速罚单确实会记入记录并可能影响保险费率。不过根据法院的情况，你可能有资格上交通安全课程——如果你完成了认可的课程，罚单可能不会记点。联系法院时可以问一下。开慢点——限速标志贴在那是有原因的。注意安全。",
            keyPhrases: [
              { en: "traffic school", zh: "交通安全课程" },
              { en: "count as a point", zh: "记一分/算一个点" },
              { en: "eligible", zh: "有资格的/符合条件的" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, it goes on your record. But look into traffic school — some courts let you take a class and keep it off your record. Ask the court about it. Slow down. Be safe.", textZh: "会记录的。但看看有没有交通安全课程——有些法院让你上课后不记点。问法院。开慢点。注意安全。", actionHint: "look into 了解一下; keep it off 不记入", frequency: "common" },
            ],
            casualVersion: "Yeah it goes on your record and might bump your insurance. But check if you can do traffic school — take a class and it might not count as a point. Ask the court. Slow it down. Stay safe.",
            formalityVariants: {
              casual: "Goes on your record. Might affect insurance. Try traffic school to avoid the point. Drive safe.",
              standard: "It goes on your record and may affect insurance. Traffic school may prevent it from counting as a point — check with the court. Please observe the speed limit.",
              formal: "Speeding citations are reflected on your driving record and may influence your insurance premiums. You may wish to inquire about traffic school eligibility when you contact the court — successful completion of an approved defensive driving course may prevent the violation from adding points to your record. Please observe posted speed limits going forward. Drive safely.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 27. 法庭口译服务 ====================
  {
    id: "government-court-interpreter",
    category: "government",
    titleZh: "法庭口译服务",
    titleEn: "Court Interpreter Services",
    description: "在法庭上申请和使用口译服务",
    otherRole: "法庭书记官",
    otherRoleIcon: "⚖️",
    flows: [
      {
        id: "basic",
        titleZh: "申请口译服务",
        titleEn: "Requesting Interpreter Services",
        description: "到法院了解如何申请免费口译服务",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I have a court date next week and my English isn't very strong. Is it possible to get an interpreter?",
            textZh: "不好意思，我下周有庭审，我的英语不太好。可以申请口译吗？",
            casualVersion: "Hey, I've got a court date coming up and my English isn't great. Can I get a translator or something?",
            culturalNote: "在美国，任何人在法庭上都有权获得免费口译服务——这是联邦法律保障的权利。很多中国人不知道这个权利，或者因为不好意思而不申请。千万不要因为面子问题而放弃口译，法庭程序中的每一个词都可能影响你的权益。",
            commonMistake: {
              wrong: "I don't speak English well. Can you find someone to translate for me?",
              correct: "My English isn't very strong. Is it possible to get an interpreter?",
              explanation: "法庭中口头翻译叫 'interpreter' 不是 'translator'（translator 通常指笔译）。'Is it possible to get' 比 'Can you find' 更正式得体。",
            },
            formalityVariants: {
              casual: "I need a Chinese interpreter for my court date. Is that a thing?",
              standard: "I have a court date next week and I'd like to request an interpreter. My English is limited.",
              formal: "Good morning. I have a scheduled court appearance next week. As English is not my primary language, I would like to formally request interpreter services. Could you guide me through the process?",
            },
          },
          {
            speaker: "them",
            role: "法庭书记官",
            textEn: "Absolutely — you have the right to a free interpreter for any court proceeding. What language do you need? Mandarin or Cantonese? I'll need your case number and the date of your hearing to put in the request. We try to have interpreters arranged at least five business days in advance.",
            textZh: "当然——你有权在任何法庭程序中获得免费口译。你需要什么语言？普通话还是粤语？我需要你的案件编号和听证日期来提交申请。我们尽量在至少提前5个工作日安排好口译。",
            keyPhrases: [
              { en: "right to a free interpreter", zh: "获得免费口译的权利" },
              { en: "case number", zh: "案件编号" },
              { en: "business days in advance", zh: "提前工作日" },
            ],
            alternativeExpressions: [
              { textEn: "Of course. Interpreters are free for all court proceedings — it's your legal right. Mandarin or Cantonese? Give me your case number and hearing date and I'll get one arranged.", textZh: "当然。法庭口译是免费的——这是你的合法权利。普通话还是粤语？给我案件编号和开庭日期，我来安排。", actionHint: "legal right 合法权利; get one arranged 安排好一个", frequency: "common" },
            ],
            casualVersion: "For sure — you get a free interpreter for court. Is it Mandarin or Cantonese? Give me your case number and hearing date and I'll set it up. We need at least five business days' notice.",
            formalityVariants: {
              casual: "Yeah, free interpreter. Mandarin or Cantonese? Give me your case number and date. Five days' notice.",
              standard: "You're entitled to a free interpreter. I'll need your language preference, case number, and hearing date. We need at least five business days.",
              formal: "You are entitled to court-provided interpreter services at no cost for any judicial proceeding. May I confirm your language preference — Mandarin Chinese or Cantonese? I'll need your case number and hearing date to submit the formal request. We generally require a minimum of five business days' advance notice.",
            },
          },
          {
            speaker: "you",
            textEn: "Mandarin, please. My case number is 2025-CV-3847 and the hearing is next Thursday, June nineteenth. Is five days enough notice?",
            textZh: "普通话。我的案件编号是 2025-CV-3847，听证是下周四6月19日。五天的提前量够吗？",
            casualVersion: "Mandarin. Case number's 2025-CV-3847, hearing's next Thursday the nineteenth. Is that enough time?",
            commonMistake: {
              wrong: "I need Putonghua translate. My case is 2025-CV-3847.",
              correct: "Mandarin, please. My case number is 2025-CV-3847.",
              explanation: "在美国说普通话用 'Mandarin' 而不是 'Putonghua'。说 'interpreter' 不说 'translate'。",
            },
            formalityVariants: {
              casual: "Mandarin. Case 2025-CV-3847, next Thursday. Enough time?",
              standard: "Mandarin, please. Case number 2025-CV-3847, hearing next Thursday, June nineteenth. Is that enough notice?",
              formal: "Mandarin Chinese, please. My case number is 2025-CV-3847, and the hearing is scheduled for Thursday, June nineteenth. Would that provide sufficient advance notice for arranging interpreter services?",
            },
          },
          {
            speaker: "them",
            role: "法庭书记官",
            textEn: "That's cutting it close, but we should be able to get a Mandarin interpreter — they're one of our most requested languages. I'm putting in the request right now. You'll get a confirmation by email. On the day of your hearing, arrive at least thirty minutes early and check in at the clerk's window. The interpreter will meet you in the courtroom. If for some reason we can't find an interpreter, we'll notify you and your hearing will be rescheduled — it won't proceed without one.",
            textZh: "时间有点紧，但我们应该能安排到普通话口译——这是我们最常被申请的语言之一。我现在就提交申请。你会收到邮件确认。听证当天至少提前30分钟到，在书记官窗口签到。口译会在法庭里和你见面。如果万一找不到口译，我们会通知你并重新安排听证日期——不会在没有口译的情况下进行。",
            keyPhrases: [
              { en: "cutting it close", zh: "时间很紧/差一点来不及" },
              { en: "check in at the clerk's window", zh: "在书记官窗口签到" },
              { en: "rescheduled", zh: "重新安排日期" },
            ],
            alternativeExpressions: [
              { textEn: "It's tight but doable — Mandarin interpreters are pretty available. I'll submit it now. You'll get email confirmation. Show up thirty minutes early, check in at the window. If we can't get one in time, we'll reschedule — they can't hold the hearing without an interpreter.", textZh: "时间紧但可以——普通话口译比较好找。我现在提交。你会收到邮件。提前30分钟到，窗口签到。找不到的话会改期——没有口译不能开庭。", actionHint: "doable 可行的; hold the hearing 举行听证", frequency: "common" },
            ],
            casualVersion: "A little tight but we should be good — Mandarin's in high demand so there are lots of interpreters. I'll file it right now, you'll get an email. Show up 30 minutes early, check in at the clerk's window. Interpreter will be in the courtroom. And don't worry — they won't hold the hearing without one.",
            formalityVariants: {
              casual: "Should be fine. I'll submit it now. Show up 30 min early. If no interpreter, they'll reschedule.",
              standard: "It's tight but doable for Mandarin. I'll submit the request now. Arrive thirty minutes early and check in. The hearing won't proceed without an interpreter.",
              formal: "The timeline is somewhat compressed; however, Mandarin interpreters are among our most readily available. I will submit the request immediately, and you will receive email confirmation. Please arrive at least thirty minutes prior to your hearing and present yourself at the clerk's window. Should interpreter services prove unavailable, you will be notified and the hearing will be rescheduled accordingly.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. Can I also bring a friend who speaks English to help me, or does everything have to go through the official interpreter?",
            textZh: "谢谢。我可以带一个会说英语的朋友帮忙吗，还是所有沟通都必须通过官方口译？",
            casualVersion: "Can my friend who speaks English come and help translate, or does it have to be the official interpreter?",
            culturalNote: "在美国法庭上，只有经过认证的法庭口译才能作为官方翻译。朋友和家人可以陪你到法庭，但他们的翻译不被法庭采纳。这是为了确保翻译的准确性和中立性。",
            commonMistake: {
              wrong: "Can my friend help me translate in court?",
              correct: "Can I bring a friend who speaks English to help, or does everything have to go through the official interpreter?",
              explanation: "提出两种可能性显示你理解可能有限制。'go through the official interpreter' 是通过官方口译的正确说法。",
            },
            formalityVariants: {
              casual: "Can my friend help translate, or is it just the official interpreter?",
              standard: "Can I bring a bilingual friend, or must all communication go through the official interpreter?",
              formal: "Am I permitted to bring a bilingual acquaintance to assist, or is all communication required to be facilitated exclusively through the court-appointed interpreter?",
            },
          },
          {
            speaker: "them",
            role: "法庭书记官",
            textEn: "Your friend is welcome to come for moral support, but in the courtroom, all communication must go through the certified court interpreter. That's for accuracy and legal protection — for both you and the court. The interpreter is trained in legal terminology and is bound by confidentiality, so everything you say is protected. Outside the courtroom, your friend can absolutely help you with paperwork or understanding the process.",
            textZh: "你的朋友可以来提供精神支持，但在法庭上，所有沟通必须通过认证的法庭口译。这是为了准确性和法律保护——对你和法庭都是。口译经过法律术语培训并受保密义务约束，所以你说的一切都受到保护。在法庭外面，你的朋友完全可以帮你处理文书或理解流程。",
            keyPhrases: [
              { en: "certified court interpreter", zh: "认证法庭口译" },
              { en: "legal terminology", zh: "法律术语" },
              { en: "bound by confidentiality", zh: "受保密义务约束" },
            ],
            alternativeExpressions: [
              { textEn: "Friends can come but can't interpret in court — only the official interpreter can. It's a legal thing. The interpreter knows legal terms and has to keep everything confidential. Your friend can help you outside though — understanding forms, finding the right room, whatever you need.", textZh: "朋友可以来但不能在法庭里翻译——只有官方口译可以。这是法律要求。口译懂法律术语而且必须保密。但法庭外你的朋友可以帮你——理解表格、找对地方什么的。", actionHint: "it's a legal thing 这是法律要求", frequency: "common" },
            ],
            casualVersion: "Your friend can sit in for support but can't translate in the courtroom — only the certified interpreter can. It's a legal requirement. The interpreter knows all the legal terms and everything stays confidential. Outside the courtroom, your friend can totally help with forms and stuff.",
            formalityVariants: {
              casual: "Friend can come for support but can't translate in court. Only the official interpreter. Outside the courtroom, friends can help.",
              standard: "Your friend may attend for support, but courtroom communication must go through the certified interpreter. The interpreter is trained in legal terms and bound by confidentiality.",
              formal: "Your companion is welcome to attend for moral support; however, all courtroom communications must be conducted through the certified interpreter. This requirement ensures both linguistic accuracy and legal protection. Court interpreters are professionally trained in legal terminology and are bound by strict confidentiality obligations. Outside the courtroom, your friend is free to assist with any administrative matters.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "庭审中使用口译",
        titleEn: "Using an Interpreter During a Hearing",
        description: "在实际庭审中和口译配合沟通",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "法庭书记官",
            textEn: "All rise. The Honorable Judge Martinez presiding. Case number 2025-CV-3847. Please state your name for the record.",
            textZh: "全体起立。马丁内斯法官主持庭审。案件编号 2025-CV-3847。请为记录说出你的名字。",
            keyPhrases: [
              { en: "all rise", zh: "全体起立" },
              { en: "presiding", zh: "主持/审理" },
              { en: "state your name for the record", zh: "为记录说出你的名字" },
            ],
            alternativeExpressions: [
              { textEn: "Everyone please stand. Judge Martinez on the bench. Case 2025-CV-3847. Name for the record, please.", textZh: "请大家站起来。马丁内斯法官就位。案件 2025-CV-3847。请报姓名以记录在案。", actionHint: "on the bench 就位（法官入座）", frequency: "common" },
            ],
            casualVersion: "All rise. Judge Martinez. Case 2025-CV-3847. State your name for the record.",
            formalityVariants: {
              casual: "All rise. Judge Martinez. Case number 2025-CV-3847. Your name please.",
              standard: "All rise. The Honorable Judge Martinez presiding. Case 2025-CV-3847. Please state your name for the record.",
              formal: "All persons present shall rise. This court is now in session, the Honorable Judge Martinez presiding. The matter before the court is case number 2025-CV-3847. Would the parties please identify themselves for the record.",
            },
          },
          {
            speaker: "you",
            textEn: "My name is [your name]. Your Honor, I have requested a Mandarin interpreter. May I speak through the interpreter?",
            textZh: "我的名字是[你的名字]。法官大人，我申请了普通话口译。我可以通过口译讲话吗？",
            casualVersion: "[Your name]. I asked for a Chinese interpreter. Can I use the interpreter?",
            culturalNote: "在美国法庭上称呼法官用 'Your Honor'（法官大人），这是固定用语。中国法庭上称呼法官为'审判长'或'法官'。'Your Honor' 没有对应的中文习惯，但必须这样称呼以示尊重。",
            commonMistake: {
              wrong: "I am [name]. Judge, I need translator. Can I speak Chinese?",
              correct: "My name is [name]. Your Honor, I have requested a Mandarin interpreter. May I speak through the interpreter?",
              explanation: "称呼法官用 'Your Honor' 不是 'Judge'。'speak through the interpreter' 是通过口译说话的正确表达。",
            },
            formalityVariants: {
              casual: "[Name]. I requested an interpreter. Can I use them?",
              standard: "My name is [name]. Your Honor, I've requested a Mandarin interpreter. May I speak through the interpreter?",
              formal: "My name is [name], Your Honor. I have formally requested Mandarin interpretation services for these proceedings. May I have your permission to communicate through the court interpreter?",
            },
          },
          {
            speaker: "them",
            role: "法庭书记官",
            textEn: "[Judge speaking] Certainly. The court has arranged a Mandarin interpreter for you. Ms. Chen, please come forward. [To you] The interpreter will translate everything I say into Mandarin for you, and everything you say into English for the court. Please speak in short sentences and pause after each one to give the interpreter time. Address the court directly — speak to me, not to the interpreter. Do you understand?",
            textZh: "[法官讲话] 当然可以。法庭已经为你安排了普通话口译。陈女士请上前。[对你说] 口译会把我说的所有话翻译成普通话给你，也会把你说的话翻译成英语给法庭。请用短句说话，每句话后停顿一下给口译时间。直接对法庭说——对着我说，不是对着口译说。你明白吗？",
            keyPhrases: [
              { en: "come forward", zh: "上前" },
              { en: "speak in short sentences", zh: "用短句说话" },
              { en: "address the court directly", zh: "直接对法庭说话" },
            ],
            alternativeExpressions: [
              { textEn: "Yes, your interpreter is here. Ms. Chen, please take your position. Remember — talk in short phrases, pause for translation, and talk to me, not the interpreter. Understood?", textZh: "你的口译在这里。陈女士请就位。记住——说短句，停顿等翻译，对我说不是对口译说。明白吗？", actionHint: "take your position 就位", frequency: "common" },
            ],
            casualVersion: "Sure, your interpreter is here. Ms. Chen, come on up. [To you] She'll translate everything both ways. Keep your sentences short, pause in between, and talk to me, not her. Got it?",
            formalityVariants: {
              casual: "Interpreter's here. Short sentences, pause for translation, talk to me. Got it?",
              standard: "Your interpreter is present. Please speak in short sentences, pause for translation, and address the court directly.",
              formal: "The court has secured Mandarin interpretation services. The interpreter will render all proceedings into Mandarin for your comprehension and translate your statements into English for the record. Please structure your responses in brief, discrete sentences, allowing adequate pauses for interpretation. All statements should be directed to the court rather than the interpreter. Is that understood?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, Your Honor, I understand. Thank you for providing an interpreter.",
            textZh: "是的，法官大人，我明白了。谢谢提供口译。",
            casualVersion: "Yes, I understand. Thank you.",
            commonMistake: {
              wrong: "OK I know. Thanks.",
              correct: "Yes, Your Honor, I understand. Thank you for providing an interpreter.",
              explanation: "在法庭上始终保持正式和尊重的语气。每次回答都加 'Your Honor'。表达感谢显示你的礼貌。",
            },
            formalityVariants: {
              casual: "Yes, understood. Thanks.",
              standard: "Yes, Your Honor, I understand. Thank you.",
              formal: "Yes, Your Honor, I fully understand. I greatly appreciate the court's provision of interpreter services.",
            },
          },
          {
            speaker: "you",
            textEn: "[During the hearing, the judge uses a term you don't understand even after interpretation] I'm sorry, Your Honor. Could the interpreter please explain what 'continuance' means? I want to make sure I understand before I respond.",
            textZh: "[庭审中，法官用了一个你即使听了翻译也不理解的术语] 对不起，法官大人。能请口译解释一下 continuance 是什么意思吗？我想确保理解了再回答。",
            casualVersion: "Sorry, I don't understand what 'continuance' means. Can the interpreter explain?",
            culturalNote: "在法庭上完全可以要求解释不懂的术语。法官会理解，因为法律术语即使对母语是英语的人也可能不清楚。不要假装理解——如果你不确定某个法律概念的含义，一定要问清楚。",
            commonMistake: {
              wrong: "I don't understand 'continuance.' What means that?",
              correct: "Could the interpreter please explain what 'continuance' means? I want to make sure I understand before I respond.",
              explanation: "在法庭上请求解释时要礼貌、具体。说明你想理解后再回答显示你认真对待程序。",
            },
            formalityVariants: {
              casual: "Sorry, what does 'continuance' mean? Can you explain?",
              standard: "Your Honor, could the interpreter explain what 'continuance' means? I want to understand before responding.",
              formal: "Your Honor, I respectfully request that the interpreter clarify the meaning of the term 'continuance.' I wish to ensure complete understanding before providing my response.",
            },
          },
          {
            speaker: "them",
            role: "法庭书记官",
            textEn: "[Judge speaking] Of course. A continuance means postponing the hearing to a later date. I'm asking if you would agree to postpone this hearing to give both sides more time to prepare. The interpreter can take a moment to explain any other terms you're unsure about. The court wants to make sure you fully understand what's happening. Take your time.",
            textZh: "[法官讲话] 当然。Continuance 的意思是把听证推迟到以后的日期。我在问你是否同意推迟这次听证，给双方更多时间准备。口译可以花一点时间解释其他你不确定的术语。法庭希望确保你完全理解正在发生什么。慢慢来。",
            keyPhrases: [
              { en: "continuance", zh: "延期/推迟听证" },
              { en: "postponing", zh: "推迟" },
              { en: "both sides", zh: "双方" },
            ],
            alternativeExpressions: [
              { textEn: "Sure. A continuance is just a fancy word for postponing the hearing. I'm asking if you're OK with pushing the hearing back so everyone has more time. And feel free to ask the interpreter about any other words you don't get.", textZh: "当然。Continuance 就是推迟听证的正式说法。我在问你是否同意把听证往后推，让大家有更多时间。不懂的词随时问口译。", actionHint: "pushing back 往后推; feel free 随意/不要客气", frequency: "common" },
            ],
            casualVersion: "Sure. Continuance just means pushing the hearing to a later date. I'm asking if you're OK with that. If there's any other terms you don't get, ask the interpreter. We want to make sure you understand everything. No rush.",
            formalityVariants: {
              casual: "Continuance = postpone. I'm asking if you're OK with rescheduling. Ask the interpreter about any other terms.",
              standard: "A continuance is a postponement. I'm asking if you agree to reschedule. Please ask the interpreter about any terms you're unclear on.",
              formal: "A continuance is a procedural mechanism to postpone the hearing to a subsequent date. The question before you is whether you consent to rescheduling this hearing to allow additional preparation time for all parties. The interpreter is available to clarify any additional legal terminology. This court is committed to ensuring your full comprehension of these proceedings.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you, Your Honor. Now I understand. Yes, I would agree to a continuance if it gives me more time to prepare my documents.",
            textZh: "谢谢，法官大人。现在我明白了。是的，如果能给我更多时间准备文件，我同意延期。",
            casualVersion: "Got it. Yeah, I'm OK with postponing if I get more time to get my stuff together.",
            commonMistake: {
              wrong: "OK I agree postpone. I need more time prepare document.",
              correct: "Yes, I would agree to a continuance if it gives me more time to prepare my documents.",
              explanation: "使用法庭中出现的术语 'continuance' 显示你理解了。'I would agree to' 是法庭中表示同意的正式说法。",
            },
            formalityVariants: {
              casual: "Yeah, I'm good with pushing it back. More time to prepare would help.",
              standard: "Yes, I agree to a continuance. More time to prepare would be helpful.",
              formal: "Thank you for the clarification, Your Honor. I would indeed consent to a continuance, as the additional time would allow me to more thoroughly prepare the necessary documentation.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 28. ITIN 申请 ====================
  {
    id: "government-itin-application",
    category: "government",
    titleZh: "ITIN 申请（无 SSN 的人）",
    titleEn: "ITIN Application for Non-SSN Holders",
    description: "向 IRS 或 CAA 机构申请个人纳税识别号",
    otherRole: "税务代理",
    otherRoleIcon: "📋",
    flows: [
      {
        id: "basic",
        titleZh: "了解 ITIN 申请",
        titleEn: "Understanding ITIN Application",
        description: "了解 ITIN 是什么以及申请流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to file my taxes but I don't have a Social Security number. Someone told me I need something called an ITIN? Can you explain what that is?",
            textZh: "你好，我需要报税但没有社会安全号码。有人说我需要一个叫 ITIN 的东西？能解释一下是什么吗？",
            casualVersion: "Hey, I gotta file taxes but I don't have an SSN. Someone mentioned ITIN? What is that?",
            culturalNote: "在美国，无论移民身份如何，有收入就有报税义务。没有 SSN（社会安全号码）的人可以申请 ITIN（Individual Taxpayer Identification Number，个人纳税识别号）来报税。很多中国留学生的配偶、某些签证持有者，或无证移民都需要 ITIN。这和中国的纳税人识别号类似但申请流程不同。",
            commonMistake: {
              wrong: "I don't have social security number. How can I pay tax?",
              correct: "I need to file my taxes but I don't have a Social Security number. I was told I need an ITIN.",
              explanation: "'file taxes' 是报税的地道说法，不是 'pay tax'。'Social Security number' 每个词都要大写。",
            },
            formalityVariants: {
              casual: "No SSN. Need to file taxes. What's an ITIN?",
              standard: "I need to file taxes but don't have a Social Security number. Can you explain what an ITIN is?",
              formal: "Good morning. I have a federal tax filing obligation but do not possess a Social Security number. I understand that an Individual Taxpayer Identification Number, or ITIN, may be the appropriate solution. Could you explain the process?",
            },
          },
          {
            speaker: "them",
            role: "税务代理",
            textEn: "Of course. An ITIN — Individual Taxpayer Identification Number — is a nine-digit number issued by the IRS for people who need to file taxes but aren't eligible for a Social Security number. It starts with a nine and looks similar to an SSN in format. It's strictly for tax purposes — it doesn't give you work authorization or change your immigration status. You apply using Form W-7, and you'll need to submit it with your tax return.",
            textZh: "当然。ITIN 是 Individual Taxpayer Identification Number 的缩写——个人纳税识别号，是 IRS 发给需要报税但没有资格获得社会安全号码的人的9位数号码。它以9开头，格式和 SSN 类似。它仅用于税务目的——不给你工作许可也不改变你的移民身份。你用 W-7 表格申请，需要和你的报税表一起提交。",
            keyPhrases: [
              { en: "ITIN", zh: "个人纳税识别号" },
              { en: "Form W-7", zh: "W-7 表格（ITIN 申请表）" },
              { en: "tax return", zh: "报税表/纳税申报表" },
            ],
            alternativeExpressions: [
              { textEn: "An ITIN is basically a tax ID number for people who can't get an SSN. Nine digits, starts with 9. It's only for taxes — doesn't affect your immigration or let you work. You fill out Form W-7 and attach it to your tax return.", textZh: "ITIN 基本上是给拿不到 SSN 的人的税务 ID 号。9位数以9开头。只用于税务——不影响移民身份也不能用来工作。填 W-7 表然后附在报税表上。", actionHint: "tax ID number 税务身份号码", frequency: "common" },
            ],
            casualVersion: "So ITIN is a tax ID number the IRS gives to people without an SSN. Nine digits, starts with nine. It's only for taxes — nothing to do with immigration or work. You apply with Form W-7 and send it in with your tax return.",
            formalityVariants: {
              casual: "ITIN = tax ID for non-SSN people. Nine digits. Tax only, not immigration. Apply with W-7.",
              standard: "An ITIN is a nine-digit tax identification number for non-SSN holders. It's tax-only — no immigration or work implications. Apply with Form W-7 alongside your tax return.",
              formal: "An Individual Taxpayer Identification Number, or ITIN, is a nine-digit tax processing number issued by the Internal Revenue Service to individuals who are required to file federal tax returns but are not eligible for a Social Security number. It is designated exclusively for tax administration purposes and confers neither work authorization nor any modification to immigration status. The application is submitted on Form W-7, accompanied by a federal tax return.",
            },
          },
          {
            speaker: "you",
            textEn: "What documents do I need to apply? And do I have to send in my original passport?",
            textZh: "申请需要什么材料？需要寄原件护照吗？",
            casualVersion: "What do I need to apply? Please tell me I don't have to mail my actual passport.",
            culturalNote: "这是中国申请人最担心的问题之一——要不要寄原始护照。IRS 确实接受原件，但你也可以通过 IRS 授权的 CAA（Certifying Acceptance Agent）提交认证副本，这样不用寄原件。很多华人税务机构就是 CAA。",
            commonMistake: {
              wrong: "What document I need? Must I send original passport?",
              correct: "What documents do I need to apply? Do I have to send in my original passport?",
              explanation: "'documents' 用复数。'send in' 是提交/寄出的地道说法。'Do I have to' 比 'Must I' 更口语化。",
            },
            formalityVariants: {
              casual: "What docs do I need? Do I really gotta send my passport?",
              standard: "What documents are required? And do I need to send my original passport?",
              formal: "Could you outline the required documentation for the application? I'm particularly concerned about whether submitting the original passport is mandatory.",
            },
          },
          {
            speaker: "them",
            role: "税务代理",
            textEn: "You'll need Form W-7, your federal tax return, and identity documents. For a passport, you have three options: one, mail your original passport to the IRS — they'll return it within sixty days. Two, make an appointment at an IRS Taxpayer Assistance Center where they can verify your passport in person so you don't have to mail it. Three, and this is what I'd recommend — use a Certifying Acceptance Agent like us. We're authorized by the IRS to verify your documents and submit certified copies, so your original passport never leaves your hands.",
            textZh: "你需要 W-7 表格、联邦报税表和身份证件。护照方面你有三个选择：一是把原始护照邮寄给 IRS——他们会在60天内寄回。二是预约 IRS 纳税人服务中心，他们可以当面验证你的护照，这样就不用邮寄。三是我最推荐的——用像我们这样的 CAA（认证接收代理）。我们是 IRS 授权的，可以验证你的文件并提交认证副本，你的原始护照不用离手。",
            keyPhrases: [
              { en: "Certifying Acceptance Agent (CAA)", zh: "认证接收代理" },
              { en: "Taxpayer Assistance Center", zh: "纳税人服务中心" },
              { en: "certified copies", zh: "认证副本" },
            ],
            alternativeExpressions: [
              { textEn: "You need the W-7, your tax return, and ID — usually a passport. Now, you can mail your passport to the IRS and get it back in about two months, or go to an IRS center to show it in person, or — best option — come to a CAA like us. We certify your passport so you keep the original.", textZh: "需要 W-7、报税表和身份证——通常是护照。你可以把护照寄给 IRS 大约两个月后寄回，或去 IRS 中心当面出示，或者——最好的选择——来像我们这样的 CAA。我们给你的护照做认证这样你保留原件。", actionHint: "certify 认证/证明", frequency: "common" },
            ],
            casualVersion: "You need the W-7, your tax return, and your passport basically. You can mail the original to the IRS and wait two months, go to an IRS center in person, or — best option — use a CAA like us. We verify your passport and send copies so you keep the original.",
            formalityVariants: {
              casual: "W-7, tax return, passport. Don't mail your passport — come to a CAA like us and keep your original.",
              standard: "You need Form W-7, your tax return, and ID documents. I recommend using a CAA to avoid mailing your original passport.",
              formal: "The application requires Form W-7, a completed federal tax return, and supporting identification documentation. Regarding your passport, I would strongly recommend engaging a Certifying Acceptance Agent. As an IRS-authorized CAA, we can authenticate your identification documents and submit certified copies on your behalf, eliminating the need to surrender your original passport.",
            },
          },
          {
            speaker: "you",
            textEn: "I'd prefer not to mail my passport. How long does the ITIN application take through a CAA?",
            textZh: "我不想邮寄护照。通过 CAA 申请 ITIN 要多久？",
            casualVersion: "Definitely not mailing my passport. How long through a CAA?",
            commonMistake: {
              wrong: "I don't want to send passport. Through CAA, how long time?",
              correct: "I'd prefer not to mail my passport. How long does the ITIN application take through a CAA?",
              explanation: "'I'd prefer not to' 比 'I don't want to' 更礼貌。'How long does it take' 是问时长的标准句型。",
            },
            formalityVariants: {
              casual: "Not sending my passport. How long through you guys?",
              standard: "I'd rather not mail my passport. How long does the process take through a CAA?",
              formal: "I would prefer to retain my original passport. What is the typical processing timeline when submitting the application through a Certifying Acceptance Agent?",
            },
          },
          {
            speaker: "them",
            role: "税务代理",
            textEn: "Smart choice. Through us, the process works like this: we verify your documents and prepare your W-7 — that takes about thirty minutes. Then we submit everything to the IRS. Processing usually takes seven to eleven weeks. You'll receive your ITIN by mail once it's approved. During peak tax season it can take longer — up to fourteen weeks. I'd recommend applying as early as possible, especially before the April filing deadline.",
            textZh: "明智的选择。通过我们，流程是这样的：我们验证你的文件并准备 W-7——大概30分钟。然后我们把所有材料提交给 IRS。处理通常需要7到11周。批准后你会收到邮寄的 ITIN。报税高峰期可能更久——最多14周。我建议尽早申请，特别是在4月报税截止日期之前。",
            keyPhrases: [
              { en: "processing", zh: "处理/审批" },
              { en: "peak tax season", zh: "报税高峰期" },
              { en: "April filing deadline", zh: "4月报税截止日期" },
            ],
            alternativeExpressions: [
              { textEn: "Through a CAA, we handle your docs in about thirty minutes then send everything to the IRS. Expect seven to eleven weeks for processing, maybe longer during tax season. Apply early — don't wait till April.", textZh: "通过 CAA，我们大概30分钟处理好你的文件然后提交给 IRS。预计7到11周处理，报税季可能更久。早申请——别等到4月。", actionHint: "handle your docs 处理你的文件", frequency: "common" },
            ],
            casualVersion: "Through us it's quick on our end — about thirty minutes to check everything and prep the W-7. IRS takes seven to eleven weeks to process. During tax season it can be up to fourteen weeks. Don't wait till the last minute — the earlier the better.",
            formalityVariants: {
              casual: "Thirty minutes with us, then seven to eleven weeks for IRS. Longer during tax season. Apply early.",
              standard: "Document verification takes thirty minutes. IRS processing is seven to eleven weeks, up to fourteen in peak season. Apply before the April deadline.",
              formal: "Our document verification and W-7 preparation typically requires approximately thirty minutes. Subsequent IRS processing ranges from seven to eleven weeks under normal circumstances, potentially extending to fourteen weeks during peak filing periods. I would advise initiating the application well in advance of the April filing deadline to ensure timely processing.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "申请过程中的常见问题",
        titleEn: "Common Application Issues",
        description: "处理 ITIN 申请中的常见问题和续签",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I've heard that ITINs expire. Mine was issued in 2019 — do I need to renew it before I file this year?",
            textZh: "我听说 ITIN 会过期。我的是2019年签发的——今年报税前需要续签吗？",
            casualVersion: "Do ITINs expire? Mine's from 2019. Do I gotta renew?",
            culturalNote: "ITIN 确实会过期——如果连续三年没有在报税表上使用就会失效。2019年签发的如果一直在使用则仍然有效。很多中国人不知道这个规则，到报税时才发现 ITIN 过期了。建议每年按时报税以保持 ITIN 有效。",
            commonMistake: {
              wrong: "My ITIN is from 2019. Is it still can use?",
              correct: "My ITIN was issued in 2019. Do I need to renew it?",
              explanation: "'was issued in 2019' 是签发于某年的正确说法。'Do I need to renew it' 比 'Is it still can use' 语法正确且更清晰。",
            },
            formalityVariants: {
              casual: "My ITIN's from 2019. Still good or do I need to renew?",
              standard: "My ITIN was issued in 2019. Does it need to be renewed?",
              formal: "My ITIN was issued in 2019. Given the expiration policies, could you advise whether renewal is required prior to this year's filing?",
            },
          },
          {
            speaker: "them",
            role: "税务代理",
            textEn: "Good question. ITINs expire if they haven't been used on a federal tax return at least once in the last three consecutive years. If you've been filing every year since 2019, your ITIN is still active. But if you skipped any three years in a row, it's expired and you'll need to renew. Renewal uses the same Form W-7 but you check the 'renewal' box instead of 'new.' Let me look up your filing history — do you have your ITIN number with you?",
            textZh: "好问题。如果 ITIN 在最近连续三个纳税年度中没有在联邦报税表上使用过至少一次，就会过期。如果你从2019年起每年都报税了，你的 ITIN 还是有效的。但如果你连续跳过了三年，就过期了需要续签。续签用同样的 W-7 表格但勾选'续签'而不是'新申请'。我帮你查一下报税记录——你的 ITIN 号码带了吗？",
            keyPhrases: [
              { en: "three consecutive years", zh: "连续三年" },
              { en: "filing history", zh: "报税记录" },
              { en: "renewal", zh: "续签/续期" },
            ],
            alternativeExpressions: [
              { textEn: "ITINs expire if you don't use them for three straight years on your taxes. Been filing every year? You're good. Missed three in a row? Need to renew — same W-7 form, just check the renewal box. Got your ITIN number? I can check your records.", textZh: "连续三年不报税 ITIN 就过期。每年都报了？没问题。连续三年没报？需要续签——还是 W-7 表，勾续签。有你的 ITIN 号吗？我查一下记录。", actionHint: "three straight years 连续三年; you're good 没问题", frequency: "common" },
            ],
            casualVersion: "ITINs expire if you don't use 'em for three years in a row. If you've been filing since 2019, you're fine. Skipped three years? Gotta renew. Same W-7, just check the renewal box. Got your ITIN number? I can check your filing history.",
            formalityVariants: {
              casual: "No filing for three straight years = expired. Been filing? You're good. Not sure? I can check with your number.",
              standard: "ITINs expire after three consecutive non-filing years. If you've filed annually, it's still active. Same W-7 form for renewal. I can verify your filing history.",
              formal: "An ITIN becomes inactive if it has not been included on a federal tax return for three consecutive taxable years. If you have maintained consistent annual filings since 2019, your ITIN remains valid. Should renewal be necessary, the process utilizes the same Form W-7 with the renewal designation. I would be happy to verify your filing history if you could provide your ITIN number.",
            },
          },
          {
            speaker: "you",
            textEn: "I filed in 2019 and 2020 but then I went back to China for two years and didn't file. I came back in 2023 and filed last year. So does that mean it expired?",
            textZh: "我2019和2020年报了税，然后回中国两年没报。2023年回来去年报了税。那是过期了吗？",
            casualVersion: "I filed in 2019 and 2020, then went back to China for two years — didn't file. Came back and filed last year. Is it expired?",
            commonMistake: {
              wrong: "I reported tax in 2019 and 2020. Then I go back China two year and not report. Is it expire?",
              correct: "I filed in 2019 and 2020 but then went back to China for two years and didn't file.",
              explanation: "'filed taxes' 是报税的地道说法，不是 'reported tax'。'went back' 用过去时。'expired' 是形容词形式。",
            },
            formalityVariants: {
              casual: "Filed in '19 and '20, was in China for two years and didn't file, came back and filed last year. Expired?",
              standard: "I filed in 2019 and 2020, didn't file while in China for two years, and resumed filing last year. Has it expired?",
              formal: "I submitted tax returns for the 2019 and 2020 tax years. I then relocated to China for approximately two years during which I did not file. I returned in 2023 and filed for the most recent tax year. Based on this history, has my ITIN expired?",
            },
          },
          {
            speaker: "them",
            role: "税务代理",
            textEn: "Let me count that out. You filed for tax year 2019, filed for 2020, didn't file for 2021 or 2022, and filed again for 2023. That means you missed two years in a row — 2021 and 2022 — but not three. So your ITIN should still be valid since you filed again for 2023 before hitting that three-year mark. You're in the clear. But here's my advice: don't let it lapse again. Even if you're overseas and don't owe taxes, you may still want to file a return to keep your ITIN active.",
            textZh: "我帮你算一下。你2019纳税年度报了，2020报了，2021和2022没报，2023又报了。也就是说你连续漏了两年——2021和2022——但不是三年。所以你的 ITIN 应该还有效，因为你在到三年之前又报了2023年的税。你没问题。但我的建议是：不要再让它断了。即使你在海外没有欠税，也可以考虑报一份税表来保持 ITIN 有效。",
            keyPhrases: [
              { en: "two years in a row", zh: "连续两年" },
              { en: "in the clear", zh: "没问题/安全了" },
              { en: "let it lapse", zh: "让它失效/断了" },
            ],
            alternativeExpressions: [
              { textEn: "OK so you missed 2021 and 2022 — that's two years, not three. Your 2023 filing saved it. ITIN's still good. But don't let it happen again. File every year even if you're abroad and owe nothing — it keeps your ITIN alive.", textZh: "你漏了2021和2022——两年不是三年。2023年的报税救了。ITIN 还有效。但别再这样了。即使在国外不欠税也每年报——保持 ITIN 有效。", actionHint: "saved it 挽救了; alive 有效的/活跃的", frequency: "common" },
            ],
            casualVersion: "OK so you skipped 2021 and 2022 — that's only two years. You filed for 2023, which resets the clock. You're good. But seriously, don't skip again. File every year even if you don't owe anything — it keeps the ITIN alive.",
            formalityVariants: {
              casual: "Two years skipped, not three. You're good. Just don't skip again — file every year.",
              standard: "You missed two years, not three. Your 2023 filing kept the ITIN active. File annually going forward, even from overseas.",
              formal: "Based on your filing history, you missed two consecutive years — 2021 and 2022 — which does not trigger the three-year expiration threshold, as your 2023 filing reactivated the continuity. Your ITIN remains valid. I would strongly recommend maintaining annual filing consistency going forward, even during periods of overseas residency, to preserve your ITIN's active status.",
            },
          },
          {
            speaker: "you",
            textEn: "That's a relief. One more question — can I use my ITIN to open a bank account? And will having an ITIN help if I apply for a green card someday?",
            textZh: "那就放心了。再问一个——ITIN 可以用来开银行账户吗？如果将来申请绿卡，有 ITIN 有帮助吗？",
            casualVersion: "Oh good. Can I use the ITIN for a bank account? And does it help with getting a green card eventually?",
            culturalNote: "ITIN 在税务之外有一些有限的用途。一些银行接受 ITIN 开户，但不是所有银行都接受。ITIN 本身不直接帮助移民申请，但按时报税（用 ITIN）可以显示你在美国的纳税记录，这在某些移民审查中可能是正面因素。",
            commonMistake: {
              wrong: "Can ITIN open bank account? Does ITIN useful for green card?",
              correct: "Can I use my ITIN to open a bank account? Will having an ITIN help if I apply for a green card?",
              explanation: "'use my ITIN to open' 比 'ITIN open' 更准确。'Will having an ITIN help' 使用动名词作主语更地道。",
            },
            formalityVariants: {
              casual: "Can I open a bank account with my ITIN? Does it help with green cards?",
              standard: "Can I use my ITIN to open a bank account? And will it help with future immigration applications?",
              formal: "Is an ITIN accepted as identification for opening a bank account? Additionally, does maintaining an ITIN and consistent tax filing history carry any weight in future immigration proceedings, such as a green card application?",
            },
          },
          {
            speaker: "them",
            role: "税务代理",
            textEn: "Great questions. Some banks do accept ITINs for opening accounts — Chase, Bank of America, and Wells Fargo generally do, but policies vary by branch, so call ahead. As for immigration, the ITIN itself doesn't directly affect your immigration case. But here's the thing — having a clean tax filing history shows that you've been a responsible taxpayer, and that can be a positive factor in certain immigration applications, especially anything involving good moral character requirements. An immigration attorney would be the best person to advise you on the specifics.",
            textZh: "好问题。一些银行确实接受 ITIN 开户——Chase、Bank of America 和 Wells Fargo 一般都接受，但各分行政策不同，建议先打电话确认。至于移民，ITIN 本身不直接影响你的移民案件。但关键是——有干净的报税记录说明你是一个负责任的纳税人，这在某些移民申请中可以是正面因素，尤其是涉及良好道德品质要求的。具体情况最好咨询移民律师。",
            keyPhrases: [
              { en: "clean tax filing history", zh: "干净的报税记录" },
              { en: "good moral character", zh: "良好道德品质" },
              { en: "call ahead", zh: "提前打电话确认" },
            ],
            alternativeExpressions: [
              { textEn: "Some banks take ITINs — big ones like Chase and BofA usually do. Call first though. For immigration, the ITIN won't directly help, but a solid tax record looks good on applications. Talk to an immigration lawyer for details.", textZh: "有些银行接受 ITIN——Chase 和美银通常可以。但先打电话。移民方面 ITIN 不直接帮忙，但好的报税记录在申请中加分。具体问移民律师。", actionHint: "BofA = Bank of America; looks good 加分/看起来好", frequency: "common" },
            ],
            casualVersion: "Yep, some banks let you open with an ITIN — Chase, BofA, Wells Fargo usually do. Call to check first though. For green cards and stuff, the ITIN doesn't directly help but having a good tax record shows you're responsible, which is a plus. Talk to an immigration lawyer about the details.",
            formalityVariants: {
              casual: "Some banks take ITINs. Call first. ITIN won't directly help with immigration but good tax history is a plus. Talk to a lawyer.",
              standard: "Several major banks accept ITINs. The ITIN doesn't directly affect immigration cases, but a clean tax record is a positive factor. Consult an immigration attorney.",
              formal: "Several major financial institutions — including Chase, Bank of America, and Wells Fargo — generally accept ITINs for account establishment, though policies may vary by branch and I'd recommend confirming in advance. Regarding immigration implications, while the ITIN itself has no direct bearing on proceedings, a consistently maintained tax filing history demonstrates fiscal responsibility, which can be viewed favorably in applications requiring demonstration of good moral character. For authoritative guidance on immigration matters, I would recommend consulting a qualified immigration attorney.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you so much for all this information. Can we go ahead and start the application today? I brought my passport and last year's tax return.",
            textZh: "非常感谢这些信息。我们今天可以开始申请吗？我带了护照和去年的报税表。",
            casualVersion: "Thanks! Can we get started today? I've got my passport and last year's return.",
            commonMistake: {
              wrong: "Thank you very much. Can we do application today? I bring passport and tax report.",
              correct: "Can we go ahead and start the application today? I brought my passport and last year's tax return.",
              explanation: "'go ahead and start' 是开始办事的自然说法。'brought'（过去时）表示已经带来了。'tax return' 不是 'tax report'。",
            },
            formalityVariants: {
              casual: "Awesome. Let's do it today? Got my passport and last year's return.",
              standard: "Can we start the application today? I have my passport and last year's tax return with me.",
              formal: "I appreciate all the guidance. Would it be possible to initiate the application process today? I have my passport and previous year's tax return available.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 29. 选民登记 ====================
  // ==================== 30. 陪审团传唤 ====================
  // ==================== 31. 失业救济 ====================
  {
    id: "government-unemployment-benefits",
    category: "government",
    titleZh: "失业救济",
    titleEn: "Unemployment Benefits",
    description: "在劳工部门申请失业救济金，了解资格、金额和持续认证",
    otherRole: "劳工部门专员",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "首次申请失业救济",
        titleEn: "Filing for Unemployment",
        description: "被裁员后首次申请失业救济金，了解资格和申请流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I was laid off from my job two weeks ago and I'd like to file for unemployment benefits. Where do I start?",
            textZh: "你好，我两周前被裁员了，想申请失业救济金。从哪里开始？",
            casualVersion: "Hey, I got laid off a couple weeks ago. How do I file for unemployment?",
            culturalNote: "在美国，失业救济金（unemployment benefits/unemployment insurance）是州政府管理的。被裁员（laid off）或公司倒闭通常符合资格，但主动辞职或因严重过失被解雇通常不符合。申请要尽早——大多数州要求在失业后一周内申请。",
            commonMistake: {
              wrong: "I was fired from company two weeks before. I want apply unemployment money.",
              correct: "I was laid off two weeks ago and I'd like to file for unemployment benefits.",
              explanation: "'laid off'（裁员）和 'fired'（解雇）意义不同，裁员通常符合领取救济的资格。'file for'（申请）是正式搭配。'two weeks ago' 不是 'two weeks before'。",
            },
            formalityVariants: {
              casual: "Got laid off a couple weeks back. How do I get unemployment?",
              standard: "I was recently laid off and would like to apply for unemployment benefits. Could you guide me through the process?",
              formal: "Good morning. I was involuntarily separated from my position approximately two weeks ago and I wish to initiate a claim for unemployment insurance benefits. Could you please advise me on the application procedure?",
            },
          },
          {
            speaker: "them",
            role: "劳工部门专员",
            textEn: "I'm sorry to hear that. The fastest way to file is online through our state's workforce website. You'll need your Social Security number, your former employer's name and address, your dates of employment, and your reason for separation. The whole application takes about thirty to forty-five minutes.",
            textZh: "很遗憾听到这个消息。最快的方式是通过我们州的劳动力网站在线申请。你需要社会安全号码、前雇主的名称和地址、雇佣日期以及离职原因。整个申请大约需要30到45分钟。",
            keyPhrases: [
              { en: "reason for separation", zh: "离职原因" },
              { en: "dates of employment", zh: "雇佣日期" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sorry about that. Easiest way is to go online and file on the state workforce site. Have your Social, your old employer's info, when you started and ended, and why you left. Takes about half an hour.",
                textZh: "很遗憾。最简单的方式是上州劳动力网站在线申请。准备好你的社安号、前雇主信息、起止日期和离职原因。大概半小时。",
                actionHint: "your Social = your Social Security number",
                frequency: "common",
              },
            ],
            casualVersion: "That's tough. Quickest way is to do it online on the state website. You'll need your Social, your old company's info, your work dates, and why you were let go. Takes about thirty to forty-five minutes.",
            formalityVariants: {
              casual: "File online — state website. Need your Social, employer info, dates, and why you left. About thirty minutes.",
              standard: "The most efficient method is filing online through the state workforce portal. You'll need your Social Security number, employer details, employment dates, and separation reason.",
              formal: "I recommend filing your initial claim through our state's workforce development website, which is the most expedient method. You will need to provide your Social Security number, the name and address of your former employer, your exact dates of employment, and the circumstances of your separation. The application process typically requires thirty to forty-five minutes to complete.",
            },
          },
          {
            speaker: "you",
            textEn: "How much will I receive, and how long do benefits last? I need to plan my budget.",
            textZh: "我能拿到多少钱，救济金能持续多久？我需要规划预算。",
            casualVersion: "How much do I get and for how long? Gotta figure out my budget.",
            commonMistake: {
              wrong: "How much money I can get? How long time benefit can continue?",
              correct: "How much will I receive, and how long do benefits last?",
              explanation: "'How much will I receive' 需要助动词 'will'。'How long do benefits last' 用一般现在时问制度性问题。",
            },
            formalityVariants: {
              casual: "What's the payout and how long does it go?",
              standard: "What is the typical benefit amount and duration? I need to plan my finances accordingly.",
              formal: "Could you provide information regarding the anticipated benefit amount and the maximum duration of eligibility? I need to make informed financial plans during this transition period.",
            },
          },
          {
            speaker: "them",
            role: "劳工部门专员",
            textEn: "Benefits are calculated based on your earnings during the base period — that's usually the first four of the last five completed quarters. In this state, the maximum weekly benefit is six hundred and twenty dollars. Benefits typically last up to twenty-six weeks. You'll get a determination letter in the mail within seven to ten days showing your exact weekly amount.",
            textZh: "救济金是根据基期收入计算的——通常是最近五个完整季度中的前四个。在本州，每周最高救济金是620美元。救济金通常最多持续26周。你会在7到10天内收到一封决定书，上面显示你的确切每周金额。",
            keyPhrases: [
              { en: "base period", zh: "基期" },
              { en: "determination letter", zh: "决定书/裁定信" },
            ],
            alternativeExpressions: [
              {
                textEn: "It's based on what you earned over the past year or so — they look at your last four quarters. Max here is six-twenty a week for up to twenty-six weeks. You'll get a letter in about a week telling you exactly how much you qualify for.",
                textZh: "根据你过去一年左右的收入——看你最近四个季度。这里最高每周620，最多26周。大约一周后收到信告诉你具体金额。",
                actionHint: "six-twenty = $620; qualify for 符合...的资格",
                frequency: "common",
              },
            ],
            casualVersion: "They figure it out from what you made over the past year — the last four quarters basically. Max is six-twenty a week here, and it goes up to twenty-six weeks. You'll get a letter in a week or so with your exact amount.",
            formalityVariants: {
              casual: "Based on your last year's pay. Up to six-twenty a week, twenty-six weeks max. Letter comes in about a week.",
              standard: "Benefits are based on your base period earnings. The maximum weekly benefit is six hundred and twenty dollars for up to twenty-six weeks. A determination letter will arrive within ten days.",
              formal: "Your weekly benefit amount is calculated based on earnings during the base period, which typically comprises the first four of the five most recently completed calendar quarters. The maximum weekly benefit in this state is six hundred and twenty dollars, payable for a maximum of twenty-six weeks. You will receive a formal monetary determination letter within seven to ten business days detailing your specific weekly benefit amount.",
            },
          },
          {
            speaker: "you",
            textEn: "Once I'm approved, do I just wait for checks to come, or do I need to do something every week?",
            textZh: "批准后我是等支票寄来就行，还是每周需要做什么？",
            casualVersion: "After I'm approved, do I just sit and wait for money, or is there stuff I gotta do every week?",
            culturalNote: "美国的失业救济需要每周或每两周'认证'（certify）——回答一系列问题确认你仍然失业、仍在积极找工作。如果漏报或回答不当，救济金会被暂停。很多华人不了解这个持续要求，以为批准后就自动发钱了。",
            commonMistake: {
              wrong: "After approve, I wait check come? Or every week need do something?",
              correct: "Once I'm approved, do I just wait for checks, or do I need to do something every week?",
              explanation: "'Once I'm approved' 是条件状语从句的正确形式。'do I need to do something' 是正确的疑问句语序。",
            },
            formalityVariants: {
              casual: "So after it's approved, do checks just show up or do I gotta do stuff weekly?",
              standard: "After approval, are benefits issued automatically, or are there ongoing requirements I need to fulfill each week?",
              formal: "Following approval of my claim, are benefit payments disbursed automatically, or are there continuing obligations I must satisfy on a weekly basis to maintain eligibility?",
            },
          },
          {
            speaker: "them",
            role: "劳工部门专员",
            textEn: "You need to certify every week — it's not automatic. Log into the website each Sunday and answer questions about whether you worked, earned any money, or turned down any job offers that week. You also need to show that you're actively looking for work — at least three job contacts per week. If you miss a certification, your payment for that week will be delayed or denied.",
            textZh: "你需要每周认证——不是自动的。每周日登录网站回答问题，比如那周是否工作过、有没有收入、有没有拒绝工作机会。你还需要证明你在积极找工作——每周至少联系三个雇主。如果漏报一周的认证，那周的付款会被延迟或拒绝。",
            keyPhrases: [
              { en: "certify every week", zh: "每周认证" },
              { en: "actively looking for work", zh: "积极找工作" },
            ],
            alternativeExpressions: [
              {
                textEn: "Not automatic — you gotta certify every week. Go online on Sunday, answer if you worked or turned down any jobs, and log your job search — three contacts minimum. Skip a week and you don't get paid that week.",
                textZh: "不是自动的——每周都要认证。周日上网回答是否工作过或拒绝过工作，还有记录你的求职——至少联系三个。漏一周那周就不给钱。",
                actionHint: "gotta = got to = 必须; skip 漏掉",
                frequency: "common",
              },
            ],
            casualVersion: "Nope, you gotta certify every week. Log in on Sundays, answer a few questions — did you work, did you turn down any jobs, are you still looking. You need at least three job contacts a week. Miss a week, no payment that week.",
            formalityVariants: {
              casual: "Not automatic. Certify online every Sunday. Three job contacts a week. Miss it, no pay.",
              standard: "Weekly certification is required each Sunday. Report any work or income, and document at least three weekly job search contacts. Missed certifications result in delayed or denied payments.",
              formal: "Benefit payments require weekly certification, which must be completed each Sunday through our online portal. You will be asked to report any employment activity, income received, and job offers declined. Additionally, you must demonstrate active work search efforts by documenting a minimum of three employer contacts per week. Failure to complete the weekly certification will result in suspension or denial of payment for that period.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "处理申请问题和上诉",
        titleEn: "Handling Claim Issues and Appeals",
        description: "申请被拒或遇到问题时了解上诉流程和权利",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I received a letter saying my unemployment claim was denied because my former employer says I was fired for misconduct. That's not true — they laid off my whole department. How do I fight this?",
            textZh: "我收到一封信说我的失业申请被拒了，因为前雇主说我是因不当行为被解雇的。这不是事实——他们裁掉了整个部门。我怎么反驳？",
            casualVersion: "My claim got denied. They say I was fired for misconduct but that's a lie — the whole department got laid off. What can I do?",
            culturalNote: "雇主有时会不实地将裁员报告为'因故解雇'以避免失业保险费率上涨。被裁员工有权对此提出上诉。上诉听证会通常在30天内举行，可以提交同事证词、裁员通知等证据。",
            commonMistake: {
              wrong: "My claim is deny. Old company say I am fire for misconduct. Not true — they cut whole department. How I can fight?",
              correct: "My claim was denied. My former employer says I was fired for misconduct. That's not true — they laid off my whole department.",
              explanation: "'was denied'（被动过去时）。'former employer' 不是 'old company'。'laid off my whole department' 是描述部门裁员的准确说法。",
            },
            formalityVariants: {
              casual: "They denied me — saying I got fired for misconduct. Total BS, the whole department got cut. How do I fight it?",
              standard: "My claim was denied on the basis that my employer reported misconduct. This is inaccurate — the entire department was eliminated. What is the appeals process?",
              formal: "I have received a determination denying my unemployment claim on the grounds of alleged misconduct. I must respectfully dispute this characterization — my separation was part of a department-wide reduction in force. I would like to understand the formal appeals process available to me.",
            },
          },
          {
            speaker: "them",
            role: "劳工部门专员",
            textEn: "I'm sorry to hear that. You have the right to file an appeal. You need to do it within thirty days of the denial date on your letter. You can file online or mail in the appeal form. An administrative law judge will schedule a hearing — usually within two to four weeks — where both you and your employer can present your side. I'd strongly recommend gathering any evidence you have.",
            textZh: "很遗憾听到这个消息。你有权提出上诉。需要在信上的拒绝日期起30天内提交。可以在线提交或邮寄上诉表。一位行政法官会安排听证会——通常在两到四周内——届时你和你的雇主都可以陈述各自的情况。我强烈建议收集你有的所有证据。",
            keyPhrases: [
              { en: "file an appeal", zh: "提出上诉" },
              { en: "administrative law judge", zh: "行政法官" },
            ],
            alternativeExpressions: [
              {
                textEn: "You can appeal — you've got thirty days from the denial date. File it online or by mail. A judge will hold a hearing in a few weeks where you both tell your side. Bring any proof you've got — emails, termination letter, anything.",
                textZh: "你可以上诉——从拒绝日期起有30天。在线或邮寄都行。几周后法官会开听证会，双方陈述。带上所有证据——邮件、解雇信什么的。",
                actionHint: "tell your side 陈述你的说法; proof 证据",
                frequency: "common",
              },
            ],
            casualVersion: "That sucks. You can totally appeal though. You've got thirty days from the denial date. File online or mail it in. There'll be a hearing in a few weeks — you and the employer each get to say what happened. Bring whatever evidence you can get your hands on.",
            formalityVariants: {
              casual: "Appeal it. Thirty days to file. Hearing in a few weeks. Bring proof.",
              standard: "You may file an appeal within thirty days. A hearing will be scheduled before an administrative law judge. Gather supporting evidence such as termination notices or colleague statements.",
              formal: "You are entitled to file a formal appeal within thirty calendar days of the determination date indicated on your denial letter. The appeal may be submitted electronically or via postal mail. An administrative law judge will convene a hearing, typically within two to four weeks, at which both you and your former employer will have the opportunity to present testimony and evidence. I would strongly encourage you to compile all relevant documentation to support your case.",
            },
          },
          {
            speaker: "you",
            textEn: "What kind of evidence should I bring? I have the layoff email my manager sent to the whole team and a letter from HR confirming the department restructuring.",
            textZh: "我应该带什么证据？我有经理发给全组的裁员邮件和HR确认部门重组的信。",
            casualVersion: "What should I bring as proof? I've got the layoff email from my boss and an HR letter about the restructuring.",
            commonMistake: {
              wrong: "What evidence I should bring? I have email from manager about layoff and HR letter about department change.",
              correct: "What kind of evidence should I bring? I have the layoff email and a letter from HR confirming the restructuring.",
              explanation: "'What kind of evidence should I bring' 是正确的疑问句语序。'confirming the restructuring' 用动名词描述信的内容更简洁。",
            },
            formalityVariants: {
              casual: "What should I bring? Got the layoff email and an HR letter about the restructuring.",
              standard: "What documentation would be most helpful? I have the layoff notification email and an HR letter about the department restructuring.",
              formal: "Could you advise on the most effective types of evidence to present? I am in possession of the official layoff notification email distributed by my manager to the entire team, as well as a letter from the human resources department confirming the departmental restructuring.",
            },
          },
          {
            speaker: "them",
            role: "劳工部门专员",
            textEn: "Those are excellent. The email from your manager is strong evidence that this was a group layoff, not individual termination for misconduct. The HR letter confirms it was a restructuring. If you can also get a written statement from a coworker who was laid off at the same time, that would strengthen your case further. Print everything out and bring two copies — one for yourself and one for the judge.",
            textZh: "这些非常好。经理的邮件是有力证据，说明这是集体裁员而非个人因不当行为被解雇。HR的信确认了是部门重组。如果你还能拿到同时被裁的同事的书面证词，会进一步加强你的案子。打印所有材料带两份——一份你自己留着，一份给法官。",
            keyPhrases: [
              { en: "written statement", zh: "书面证词" },
              { en: "strengthen your case", zh: "加强你的案子" },
            ],
            alternativeExpressions: [
              {
                textEn: "Perfect. That email proves it was a group layoff. The HR letter backs it up. If someone else who got laid off can write a quick statement for you, even better. Print two copies of everything — one for you, one for the judge.",
                textZh: "完美。那封邮件证明是集体裁员。HR的信佐证了。如果被裁的同事能帮你写个简短声明就更好了。所有材料打印两份——你一份法官一份。",
                actionHint: "backs it up 佐证; even better 就更好了",
                frequency: "common",
              },
            ],
            casualVersion: "Those are great. The manager's email shows it was a group thing. The HR letter backs it up. If you can get a former coworker to write something saying they were laid off too, that's gold. Print two copies of everything.",
            formalityVariants: {
              casual: "Great stuff. Email and HR letter are solid proof. Get a coworker statement too if you can. Two copies of everything.",
              standard: "Those documents are strong evidence. A coworker statement would further support your case. Bring two copies of all materials — one for your records and one for the judge.",
              formal: "Those documents constitute compelling evidence that your separation was part of a broader workforce reduction rather than an individual termination for cause. The manager's email demonstrates the collective nature of the layoffs, and the HR correspondence corroborates the organizational restructuring. If feasible, I would recommend obtaining a written statement from a colleague who was similarly affected. Please prepare two complete sets of all documentation — one for your reference and one for submission to the presiding judge.",
            },
          },
          {
            speaker: "you",
            textEn: "If I win the appeal, will I get back pay for the weeks I've been waiting? It's been almost a month with no income.",
            textZh: "如果我上诉赢了，等待期间的周数会补发吗？已经快一个月没有收入了。",
            casualVersion: "If I win, do I get paid for the weeks I've been waiting? It's been almost a month with nothing coming in.",
            culturalNote: "上诉成功后，通常会补发从最初申请日期起所有符合条件的周数的救济金。在等待期间如果有经济困难，可以申请其他紧急援助如食品券（SNAP）或紧急救助金。",
            commonMistake: {
              wrong: "If I win, can I get back money for waiting weeks? Almost one month no income.",
              correct: "If I win the appeal, will I get back pay for the weeks I've been waiting?",
              explanation: "'back pay' 是补发工资/救济金的专业说法。'the weeks I've been waiting' 用现在完成进行时描述持续等待。",
            },
            formalityVariants: {
              casual: "Do I get back pay if I win? Been a month with zero income.",
              standard: "If the appeal is successful, will I receive retroactive benefits for the weeks that have elapsed since my initial claim?",
              formal: "In the event that my appeal is upheld, would I be entitled to retroactive payment of benefits for the period between my original filing date and the resolution of the appeal? I have been without income for nearly a month.",
            },
          },
          {
            speaker: "them",
            role: "劳工部门专员",
            textEn: "Yes, if the judge rules in your favor, you'll receive retroactive benefits going back to your original filing date. That means you'd get a lump sum covering all the weeks you were waiting. Payments usually go out within one to two weeks after the decision. In the meantime, if you're struggling financially, I can give you information about emergency assistance programs — food assistance, utility help, and other resources that might bridge the gap.",
            textZh: "是的，如果法官裁定对你有利，你会收到追溯到原始申请日期的补发救济金。也就是说你会一次性收到等待期间所有周数的金额。裁决后通常一到两周内发放。同时如果你经济困难，我可以给你一些紧急救助项目的信息——食品援助、水电费减免和其他可以过渡的资源。",
            keyPhrases: [
              { en: "retroactive benefits", zh: "追溯补发的救济金" },
              { en: "lump sum", zh: "一次性支付" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yep — if you win, they pay you for all the weeks going back to when you first filed. Big check all at once. Takes a week or two after the ruling. And if money's tight right now, I can point you to food stamps and emergency help programs to tide you over.",
                textZh: "对——赢了就从你第一次申请开始所有周数一次性付清。裁决后一两周到账。如果现在手头紧，我可以帮你找食品券和紧急救助项目过渡一下。",
                actionHint: "money's tight 手头紧; tide you over 帮你过渡",
                frequency: "common",
              },
            ],
            casualVersion: "Yep, you get back pay for every week since you first filed — all in one shot. Usually takes a week or two after you win. If you need help right now, I can hook you up with food assistance and emergency programs.",
            formalityVariants: {
              casual: "Win and you get all the back weeks in one check. A week or two after the ruling. Need help now? I can point you to food stamps and emergency stuff.",
              standard: "A favorable ruling entitles you to retroactive benefits from your filing date, paid as a lump sum within one to two weeks. I can also provide information on emergency assistance programs if needed.",
              formal: "Should the administrative law judge render a decision in your favor, you will be entitled to retroactive benefit payments calculated from your original date of filing. These accumulated benefits will be disbursed as a lump sum payment, typically within one to two weeks following the formal decision. Additionally, should you be experiencing financial hardship during this interim period, I would be pleased to provide you with information regarding emergency assistance programs, including the Supplemental Nutrition Assistance Program, utility assistance, and other available community resources.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 房产税评估 ====================
  {
    id: "government-property-tax",
    category: "government",
    titleZh: "房产税评估",
    titleEn: "Property Tax Assessment",
    description: "到县政府了解房产税评估结果并申请复议",
    otherRole: "县评估员办公室职员",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "查询房产税评估",
        titleEn: "Checking Property Tax Assessment",
        description: "首次收到房产税评估通知后到县政府咨询",
        difficulty: "basic",
        turns: [
          { speaker: "you", textEn: "Hi, I received a property tax assessment notice in the mail. The assessed value seems higher than what my house is actually worth. Can you explain how it was calculated?", textZh: "你好，我收到了一份房产税评估通知。评估价值看起来比我房子的实际价值高。你能解释一下是怎么算的吗？",
            culturalNote: "美国房产税（property tax）由县（county）征收，基于房产评估价值（assessed value）。每年会重新评估。如果你认为评估偏高，有权申请复议（appeal）。评估通知通常在年初邮寄，复议截止日期有限，要尽早行动。",
            casualVersion: "Hey, got my property tax thing in the mail. The value seems way too high. How'd you guys come up with that number?",
            commonMistake: { wrong: "My house tax is too expensive. Why you charge so much? I want less money.", correct: "The assessed value seems higher than what my house is worth. Can you explain how it was calculated?", explanation: "用 assessed value（评估价值）而非 house tax。礼貌询问计算方式比抱怨收费高更有效。" },
            formalityVariants: { casual: "Got my property tax notice — the number seems off. How was it figured out?", standard: "I received my assessment notice and the value appears higher than my home's market value. Could you explain the calculation?", formal: "I recently received my annual property tax assessment notification and I believe the assessed valuation may exceed the current fair market value of my residence. Could you please explain the methodology used to determine this assessment?" },
          },
          { speaker: "them", role: "县评估员办公室职员", textEn: "Sure. The assessed value is based on recent comparable sales in your area, the size and condition of your property, and any improvements you've made. We reassess every year. Can I have your parcel number or address so I can pull up your record?", textZh: "当然。评估价值是根据你所在区域近期的可比销售、你的房产面积和状况，以及你做过的任何改建来计算的。我们每年重新评估。你能给我你的地块编号或地址吗？我帮你调记录。",
            keyPhrases: [
              { en: "comparable sales", zh: "可比销售/类似房产的成交价" },
              { en: "parcel number", zh: "地块编号" },
            ],
            alternativeExpressions: [
              { textEn: "We look at what similar homes in your neighborhood sold for, your lot size, square footage, and any upgrades. Give me your parcel number or address and I'll look it up.", textZh: "我们看你附近类似房子的成交价、地块面积、建筑面积和改造情况。给我你的地块号或地址，我帮你查。", actionHint: "square footage 建筑面积（平方英尺）", frequency: "common" },
            ],
            casualVersion: "It's based on what nearby houses sold for, your house size, and any upgrades. What's your parcel number or address?",
            formalityVariants: { casual: "Basically we check what similar places sold for near you, plus size and upgrades. Got your address or parcel number?", standard: "The assessment is based on comparable sales, property size, condition, and improvements. May I have your parcel number or address?", formal: "The assessed value is determined through an analysis of recent comparable property transactions in your vicinity, the physical characteristics and condition of your property, and any documented improvements. Could you provide your parcel identification number or property address so I may retrieve your assessment record?" },
          },
          { speaker: "you", textEn: "It's 742 Elm Drive. The parcel number on the notice is 0845-123-456. My neighbor's house is similar to mine but their assessment is thirty thousand dollars lower.", textZh: "地址是 742 Elm Drive。通知上的地块号是 0845-123-456。我邻居的房子和我的差不多，但他们的评估低了三万美元。",
            culturalNote: "用邻居的评估做对比是提出复议的有力依据。Comparable（comp）是房产评估的核心概念。你有权在评估员办公室查看其他房产的评估记录，这是公开信息。",
            casualVersion: "742 Elm Drive, parcel 0845-123-456. My neighbor's place is basically the same and theirs is thirty grand less.",
            commonMistake: { wrong: "My number is 0845-123-456. My neighbor house is more cheap. This is not fair for me.", correct: "My parcel number is 0845-123-456. My neighbor's similar house was assessed thirty thousand dollars lower.", explanation: "用 assessed lower 而不是 more cheap。说出具体差额比笼统说 not fair 更有效。" },
            formalityVariants: { casual: "742 Elm, parcel 0845-123-456. Next door is the same kind of house but thirty K lower. What gives?", standard: "742 Elm Drive, parcel 0845-123-456. My neighbor has a comparable home but was assessed thirty thousand dollars less.", formal: "The property is located at 742 Elm Drive, parcel identification number 0845-123-456. I have observed that an adjacent property of comparable size and condition received an assessment approximately thirty thousand dollars below mine." },
          },
          { speaker: "them", role: "县评估员办公室职员", textEn: "I see your property here. It looks like a recent kitchen renovation was added to your record, which increased the assessed value. That might explain the difference between yours and your neighbor's. If you still disagree, you have the right to file a formal appeal before the deadline on June 30th.", textZh: "我看到你的房产了。看起来你最近的厨房翻新被记录在案了，这增加了评估价值。这可能是你和邻居之间差异的原因。如果你仍然不同意，你有权在6月30日截止日期前提交正式复议。",
            keyPhrases: [
              { en: "file a formal appeal", zh: "提交正式复议" },
              { en: "kitchen renovation", zh: "厨房翻新" },
            ],
            alternativeExpressions: [
              { textEn: "Ah, there's a kitchen remodel on your file — that bumped up the value. That's probably the gap between you and your neighbor. You can appeal if you think it's still wrong. Deadline's June 30th.", textZh: "啊，你的档案里有厨房改造——这把价值推高了。这可能就是你和邻居之间的差距。如果你觉得还是不对可以申请复议。截止日期是6月30号。", actionHint: "bumped up 推高了", frequency: "common" },
            ],
            casualVersion: "Oh, there's a kitchen reno on file — that pushed yours up. Probably why it's higher than next door. You can appeal before June 30th if you want.",
            formalityVariants: { casual: "Kitchen remodel on your file — that's what bumped it. Appeal by June 30th if you disagree.", standard: "A recent kitchen renovation increased your assessment. That likely explains the gap. You may file an appeal before June 30th.", formal: "Upon reviewing your record, I note that a recent kitchen renovation has been incorporated into the assessment, thereby increasing the assessed value. This improvement likely accounts for the discrepancy between your assessment and that of the neighboring property. Should you wish to contest the assessment, you are entitled to file a formal appeal with the Board of Review prior to the June 30th deadline." },
          },
          { speaker: "you", textEn: "How do I file the appeal? Is there a form I need to fill out, or can I do it online?", textZh: "怎么提交复议？需要填表格还是可以网上办？",
            culturalNote: "大多数县支持在线提交复议申请。准备好的材料包括：评估通知、你认为合理的价值和依据（如邻居的评估、近期成交价）、房屋照片。有些县允许非正式听证（informal hearing），比正式上诉更快。",
            casualVersion: "How do I appeal? Is it a form thing or can I just do it online?",
            commonMistake: { wrong: "How I can against the tax? Where is the paper?", correct: "How do I file the appeal? Is there a form or can I do it online?", explanation: "file an appeal（提交复议）是固定搭配。against the tax 不是正确表达方式。" },
            formalityVariants: { casual: "How do I do the appeal? Online or paper?", standard: "What's the process for filing an appeal? Can I submit it online?", formal: "Could you please outline the procedure for filing a formal assessment appeal? Is the submission process available through an online portal, or must it be completed via paper documentation?" },
          },
          { speaker: "them", role: "县评估员办公室职员", textEn: "You can do either. The form is on our county website under 'Property Tax Appeals.' You'll need to attach evidence — recent comparable sales, photos showing the current condition, or even a private appraisal. If you'd prefer, I can give you a paper form right now. The review board usually schedules a hearing within sixty days.", textZh: "都可以。表格在我们县网站的 Property Tax Appeals 下面。你需要附上证据——近期可比销售、显示当前状况的照片，或者私人评估报告。如果你愿意，我现在就给你一份纸质表格。审查委员会通常在六十天内安排听证。",
            keyPhrases: [
              { en: "comparable sales", zh: "可比销售" },
              { en: "review board", zh: "审查委员会" },
            ],
            alternativeExpressions: [
              { textEn: "Either way works. Go to the county site, look for 'Property Tax Appeals,' and upload your proof — comps, photos, appraisals. Or grab a paper form here. They'll set a hearing in about sixty days.", textZh: "两种都行。上县网站找 Property Tax Appeals，上传你的证据——可比销售、照片、评估报告。或者在这里拿纸质表格。大约六十天内安排听证。", actionHint: "comps = comparable sales 的缩写", frequency: "common" },
            ],
            casualVersion: "Online or paper, your call. Grab the form from the county website — attach comps, photos, whatever you've got. Or I can hand you one now. Hearing's usually within sixty days.",
            formalityVariants: { casual: "Either works. County website has the form. Attach your proof — comps, pics, appraisal. Hearing in about sixty days.", standard: "Both options are available. The form is online under Property Tax Appeals. Attach comparable sales, photos, or a private appraisal. A hearing will be scheduled within sixty days.", formal: "Both electronic and paper submissions are accepted. The appeal form is accessible on our county website under the 'Property Tax Appeals' section. You will be required to submit supporting documentation, which may include recent comparable sales data, photographic evidence of the property's current condition, or an independent appraisal. Alternatively, I can provide a physical form at this time. The Board of Review typically convenes a hearing within sixty calendar days of receipt." },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "房产税复议听证",
        titleEn: "Property Tax Appeal Hearing",
        description: "参加房产税复议听证会，向审查委员会陈述你的理由",
        difficulty: "intermediate",
        turns: [
          { speaker: "them", role: "审查委员会主席", textEn: "Good morning. This is the hearing for parcel 0845-123-456. You've filed an appeal challenging the assessed value of three hundred and fifty thousand dollars. Please present your case.", textZh: "早上好。这是地块 0845-123-456 的听证。你对35万美元的评估价值提出了复议。请陈述你的理由。",
            keyPhrases: [
              { en: "present your case", zh: "陈述你的理由" },
              { en: "challenging the assessed value", zh: "对评估价值提出质疑" },
            ],
            alternativeExpressions: [
              { textEn: "We're here for your property tax appeal. You believe the assessment of three fifty is too high. Go ahead and tell us why.", textZh: "我们在这里听取你的房产税复议。你认为35万的评估过高。请说明原因。", actionHint: "three fifty = $350,000", frequency: "common" },
            ],
            casualVersion: "Morning. Your appeal for parcel 0845-123-456. You're saying three fifty is too high. Let's hear it.",
            formalityVariants: { casual: "OK, your appeal — three fifty too high? Tell us why.", standard: "This is the hearing for your property tax appeal. You're contesting the assessed value of three hundred and fifty thousand. Please present your evidence.", formal: "Good morning. The Board of Review is now convened to hear the appeal pertaining to parcel identification number 0845-123-456. The appellant has filed a formal challenge to the assessed valuation of three hundred and fifty thousand dollars. You may now present your case and supporting evidence." },
          },
          { speaker: "you", textEn: "Thank you. I believe the fair market value is closer to three hundred and twenty thousand. I have three comparable sales within half a mile — all sold for between three ten and three twenty-five in the past six months. Here are the addresses and sale prices.", textZh: "谢谢。我认为公平市场价值更接近32万。我有半英里内的三个可比销售——过去六个月都是在31万到32.5万之间成交的。这是地址和成交价。",
            culturalNote: "听证时用数据说话最有效。准备3-5个同区域、相似面积和房龄的可比销售（comps）。数据来源可以是 Zillow、Redfin 等公开平台或MLS记录。穿着得体但不需要太正式。可以自己陈述，不需要请律师。",
            casualVersion: "Thanks. I think it should be around three twenty. Got three comps within half a mile — all sold between three ten and three twenty-five in the last six months.",
            commonMistake: { wrong: "I think my house is not so expensive. The price is wrong. You should make it lower.", correct: "I believe the fair market value is closer to three hundred and twenty thousand, based on comparable sales in the area.", explanation: "用 fair market value（公平市场价值）和 comparable sales（可比销售）专业术语，附上数据，而不是主观地说 not so expensive。" },
            formalityVariants: { casual: "I think three twenty is more like it. Here are three comps nearby — all sold for three ten to three twenty-five recently.", standard: "Based on comparable sales, I believe the value should be around three hundred and twenty thousand. I have three recent sales within half a mile as evidence.", formal: "I respectfully submit that the fair market value of my property is more accurately reflected at approximately three hundred and twenty thousand dollars. I have identified three comparable residential sales within a half-mile radius, all of which were executed within the preceding six months at prices ranging from three hundred and ten thousand to three hundred and twenty-five thousand dollars." },
          },
          { speaker: "them", role: "审查委员会主席", textEn: "Thank you for the comparables. I notice two of the three are slightly smaller in square footage than your property. Did you account for the size difference?", textZh: "谢谢你提供的可比数据。我注意到三个中有两个的建筑面积比你的房产略小。你考虑了面积差异吗？",
            keyPhrases: [
              { en: "account for", zh: "考虑到/把……计算在内" },
              { en: "square footage", zh: "建筑面积（平方英尺）" },
            ],
            alternativeExpressions: [
              { textEn: "Good comps, but two are a bit smaller than yours. Did you adjust for the size difference?", textZh: "可比数据不错，但有两个比你的房子小一点。你有没有根据面积差调整？", actionHint: "adjust for 根据……调整", frequency: "common" },
            ],
            casualVersion: "Nice comps. But two are smaller than your place. Did you factor that in?",
            formalityVariants: { casual: "Two of those are smaller though. You adjust for that?", standard: "Two of the three comparables are smaller. Did you account for the size difference?", formal: "I appreciate the comparable sales data. However, I observe that two of the three properties cited have a smaller total square footage than the subject property. Have you applied an appropriate adjustment to account for this differential in size?" },
          },
          { speaker: "you", textEn: "Yes, I adjusted for that. Even adding a price-per-square-foot premium, the value comes to about three hundred and twenty-five thousand — still twenty-five thousand below the current assessment. I also brought photos showing that my kitchen renovation was cosmetic, not structural, so it shouldn't add as much value as a full remodel.", textZh: "是的，我调整过了。即使加上每平方英尺的价格溢价，价值大约是32.5万——仍然比当前评估低2.5万。我还带了照片证明我的厨房翻新是装饰性的，不是结构性的，所以不应该像全面改造那样大幅增值。",
            culturalNote: "cosmetic renovation（装饰性翻新，如刷漆、换台面）和 structural remodel（结构性改造，如扩建、改管道）对房产价值的影响差别很大。照片证据非常有力。price per square foot（每平方英尺单价）是最常用的对比指标。",
            casualVersion: "Yep. Even with the size difference, it tops out at three twenty-five. And I've got pics showing the kitchen reno was just paint and countertops — not a gut job.",
            commonMistake: { wrong: "Yes I think about size. But still my house is too high price. Kitchen is just small change, not big change.", correct: "I adjusted for size. Even with the premium, the value is three twenty-five — still below the assessment. The renovation was cosmetic, not structural.", explanation: "用 adjusted for size 表示你做了计算。cosmetic vs structural 是专业区分，比 small vs big change 更有说服力。" },
            formalityVariants: { casual: "Yeah, factored that in. Still comes out around three twenty-five. Plus the kitchen was just cosmetic — paint and counters, no walls moved.", standard: "I adjusted for the size difference. Even with the premium, it's three twenty-five. And the kitchen was a cosmetic update, not structural.", formal: "Indeed, I have applied a per-square-foot adjustment to account for the size differential. Even with this premium factored in, the estimated value reaches approximately three hundred and twenty-five thousand dollars, which remains twenty-five thousand dollars below the current assessment. Additionally, I have prepared photographic documentation demonstrating that the kitchen renovation was cosmetic in nature rather than structural, and therefore should not warrant the degree of value increase typically associated with a comprehensive remodel." },
          },
          { speaker: "them", role: "审查委员会主席", textEn: "That's a well-prepared case. The board will review your evidence and the assessor's data. We'll mail you our decision within thirty days. If we reduce the assessment, the adjustment will apply to this tax year. If you disagree with our decision, you can appeal to the state board.", textZh: "准备得很充分。委员会会审查你的证据和评估员的数据。我们会在三十天内邮寄决定。如果我们降低评估，调整会适用于今年的税。如果你不同意我们的决定，可以上诉到州委员会。",
            keyPhrases: [
              { en: "well-prepared case", zh: "准备充分的案例" },
              { en: "appeal to the state board", zh: "上诉到州委员会" },
            ],
            alternativeExpressions: [
              { textEn: "You made a solid case. We'll look at everything and get back to you in thirty days by mail. If we lower it, it kicks in this year. Not happy with our answer? You can take it to the state level.", textZh: "你的论证很有力。我们会审查所有材料，三十天内邮件通知你。如果降低了，今年就生效。对我们的答复不满意？可以到州级上诉。", actionHint: "kicks in 生效", frequency: "common" },
            ],
            casualVersion: "Good job putting that together. We'll review it and mail you the answer in thirty days. Lower assessment means lower tax this year. Can always go to the state if you disagree.",
            formalityVariants: { casual: "Nice work. We'll look it over and get back to you in a month. If we drop it, your bill drops too. Don't like our call? State board's the next step.", standard: "Well presented. We'll review and mail our decision within thirty days. A reduced assessment applies this year. You may appeal further to the state board.", formal: "You have presented a thoroughly documented and compelling case. The Board will conduct a comprehensive review of the evidence you have submitted alongside the assessor's records. Our determination will be communicated to you via official correspondence within thirty calendar days. Should the Board elect to reduce the assessed value, the revised assessment will be retroactively applied to the current tax year. In the event that you find our decision unsatisfactory, you retain the right to pursue a subsequent appeal before the state Board of Equalization." },
          },
          { speaker: "you", textEn: "Thank you for your time. I appreciate the thorough process. I'll look out for the letter.", textZh: "谢谢你们的时间。感谢这个严谨的流程。我会留意信件的。",
            culturalNote: "听证结束后礼貌致谢是好习惯。look out for = watch for = 留意等待。无论结果如何，保持礼貌和专业。美国的行政复议流程通常对民众很友好，不需要紧张。",
            casualVersion: "Thanks for hearing me out. I'll keep an eye on the mailbox.",
            commonMistake: { wrong: "OK I wait. You should give me good result.", correct: "Thank you. I appreciate the process. I'll look out for the letter.", explanation: "礼貌感谢比提要求更合适。you should 显得强势。I'll look out for 表示你会关注后续。" },
            formalityVariants: { casual: "Thanks! I'll watch for the letter.", standard: "Thank you for your time. I'll look out for the decision letter.", formal: "I wish to express my sincere gratitude for the Board's time and the thoroughness of these proceedings. I will await your written determination with great interest." },
          },
        ],
      },
    ],
  },

  // ==================== 公证服务 ====================
  {
    id: "government-notary-public",
    category: "government",
    titleZh: "公证服务",
    titleEn: "Notary Public Services",
    description: "在银行或UPS店使用公证服务，了解公证流程和要求",
    otherRole: "公证员",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "基础公证流程",
        titleEn: "Basic Notarization",
        description: "带文件到公证处进行签名公证",
        difficulty: "basic",
        turns: [
          { speaker: "you", textEn: "Hi, I need to get a document notarized. I have a power of attorney form that requires a notary signature. Is that something you can help with?", textZh: "你好，我需要公证一份文件。我有一份授权委托书需要公证签名。你能帮忙吗？",
            culturalNote: "美国的公证（notarization）和中国的公证不同。美国公证员（notary public）只是验证签名人的身份和自愿签署，不审查文件内容。公证服务通常在银行（免费给客户）、UPS Store、律师事务所或邮局提供。费用通常 $2-$15/份。",
            casualVersion: "Hey, I need something notarized — a power of attorney. Can you do that here?",
            commonMistake: { wrong: "I want to notary my paper. Can you stamp it?", correct: "I need to get a document notarized. It requires a notary signature.", explanation: "notarize（动词）而不是 notary（名词/形容词）。get something notarized 是固定搭配。公证不只是盖章，还包括签名和证明。" },
            formalityVariants: { casual: "Need to get this power of attorney notarized. You guys do that?", standard: "I'd like to have a power of attorney document notarized. Can you assist with that?", formal: "Good afternoon. I have a power of attorney document that requires notarization. Would you be able to provide notary services for this instrument?" },
          },
          { speaker: "them", role: "公证员", textEn: "Absolutely, I can help with that. I'll need to see a valid government-issued photo ID — a driver's license or passport works. Have you already signed the document, or were you planning to sign it here?", textZh: "当然可以。我需要看一下有效的政府签发的带照片的证件——驾照或护照都行。你已经签了文件了，还是打算在这里签？",
            keyPhrases: [
              { en: "government-issued photo ID", zh: "政府签发的带照片证件" },
              { en: "sign it here", zh: "在这里签名" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, I do notarizations. Bring your ID — driver's license or passport. And don't sign it yet! You need to sign in front of me.", textZh: "可以，我做公证。带好你的证件——驾照或护照。先别签！你需要在我面前签。", actionHint: "关键提醒：必须在公证员面前签名", frequency: "common" },
            ],
            casualVersion: "Yeah, I can do that. Got your ID? License or passport. And don't sign it yet — you sign in front of me.",
            formalityVariants: { casual: "Yep! Got your ID? License or passport. Did you sign it already or not?", standard: "I can help. I'll need a government-issued photo ID. Have you signed the document yet?", formal: "Certainly, I would be happy to assist. I will require a valid government-issued photographic identification document, such as a driver's license or passport. May I inquire whether you have already executed the document, or do you intend to affix your signature in my presence?" },
          },
          { speaker: "you", textEn: "I haven't signed it yet. Someone told me I should sign in front of the notary. Here's my passport — I don't have a U.S. driver's license.", textZh: "我还没签。有人告诉我应该在公证员面前签。这是我的护照——我没有美国驾照。",
            culturalNote: "大部分需要公证的文件要求在公证员面前当场签名，已经签过的文件可能需要重新打印。护照是有效的公证用证件。有些州的公证员还接受美国境内的州ID卡和军人证件。",
            casualVersion: "No, I was told to sign in front of you. Here's my passport — no license yet.",
            commonMistake: { wrong: "I not sign. People say I sign before you. I only have passport, no driving license.", correct: "I haven't signed it yet. I was told to sign in front of the notary. Here's my passport.", explanation: "I haven't signed 而不是 I not sign。I was told 表示有人建议我。passport 已足够，不需要为没有驾照道歉。" },
            formalityVariants: { casual: "Haven't signed yet — heard I need to do it in front of you. Got my passport, no license.", standard: "I haven't signed it yet. I was told to sign in front of the notary. Here's my passport.", formal: "I have intentionally refrained from signing the document, as I was advised that the signature must be executed in the notary's presence. I am presenting my passport as identification, as I do not currently possess a United States driver's license." },
          },
          { speaker: "them", role: "公证员", textEn: "Perfect — that's exactly right, you need to sign in front of me. Your passport works fine. Let me verify your identity. Can you confirm your full name and date of birth as it appears on your passport?", textZh: "完美——完全正确，你需要在我面前签。护照可以用。让我验证一下你的身份。你能确认护照上的全名和出生日期吗？",
            keyPhrases: [
              { en: "verify your identity", zh: "验证你的身份" },
              { en: "full name and date of birth", zh: "全名和出生日期" },
            ],
            alternativeExpressions: [
              { textEn: "Great, you did the right thing. Passport is fine. I just need to check your info — tell me your name and birthday exactly as they are on your passport.", textZh: "很好，你做对了。护照没问题。我需要核实你的信息——告诉我你护照上的姓名和生日。", actionHint: "exactly as they are 必须和证件上的完全一致", frequency: "common" },
            ],
            casualVersion: "Good call not signing yet. Passport's fine. What's your full name and birthday — same as on the passport?",
            formalityVariants: { casual: "Smart — don't sign till you're here. Passport works. Name and birthday as they appear?", standard: "You did the right thing. Passport is accepted. Please confirm your full name and date of birth as shown on the passport.", formal: "Excellent — you were correctly advised. Your passport is an acceptable form of identification. To proceed with identity verification, could you please verbally confirm your full legal name and date of birth precisely as they appear on your passport?" },
          },
          { speaker: "you", textEn: "My name is Wei Zhang, and my date of birth is March 15th, 1990.", textZh: "我叫 Wei Zhang，出生日期是1990年3月15日。",
            culturalNote: "美国日期格式是月/日/年（March 15, 1990 或 3/15/1990），和中国的年/月/日相反。口头说日期时通常说 March fifteenth 而不是 March the fifteenth。公证记录上的名字必须和ID完全一致。",
            casualVersion: "Wei Zhang. Birthday March 15th, 1990.",
            commonMistake: { wrong: "My name Zhang Wei. Birthday 1990 year 3 month 15 day.", correct: "My name is Wei Zhang. Date of birth, March 15th, 1990.", explanation: "美国名字顺序是 First Last（Wei Zhang）。日期说 March 15th, 1990，不是年月日顺序。" },
            formalityVariants: { casual: "Wei Zhang. March 15, 1990.", standard: "My name is Wei Zhang, date of birth March 15th, 1990.", formal: "My full legal name is Wei Zhang, and my date of birth is March the fifteenth, nineteen ninety." },
          },
          { speaker: "them", role: "公证员", textEn: "Everything matches. Go ahead and sign right here where it says 'Signature.' I'll add my notary seal and signature below. The fee is five dollars. Do you need any copies?", textZh: "信息都对得上。在写着 Signature 的地方签名。我在下面加上我的公证印章和签名。费用是五美元。你需要复印件吗？",
            keyPhrases: [
              { en: "notary seal", zh: "公证印章" },
              { en: "everything matches", zh: "信息都对得上" },
            ],
            alternativeExpressions: [
              { textEn: "Looks good — IDs match. Sign right there. I'll stamp and sign it. Five bucks. Want copies?", textZh: "没问题——身份核实通过。在那里签名。我盖章签名。五美元。要复印件吗？", actionHint: "five bucks = $5 口语说法", frequency: "common" },
            ],
            casualVersion: "All good. Sign there, I'll stamp it. Five bucks. Need copies?",
            formalityVariants: { casual: "We're good. Sign here, I'll do my stamp. Five dollars. Copies?", standard: "Everything checks out. Please sign where indicated. I'll add my seal and signature. The fee is five dollars.", formal: "The identity verification is satisfactory. Please affix your signature in the designated area. I will then apply my official notary seal and counter-signature. The notarization fee is five dollars. Would you like me to prepare any additional certified copies of the document?" },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "远程公证与特殊情况",
        titleEn: "Remote Notarization & Special Cases",
        description: "通过在线视频进行远程公证，处理外语文件等特殊情况",
        difficulty: "intermediate",
        turns: [
          { speaker: "you", textEn: "I need to get a document notarized but I can't come in person — I'm in a different state right now. Do you offer remote online notarization?", textZh: "我需要公证一份文件，但无法到现场——我现在在另一个州。你们提供远程在线公证吗？",
            culturalNote: "远程在线公证（RON, Remote Online Notarization）在疫情后变得普遍。目前大多数州允许RON，通过视频通话验证身份并观看签名。需要稳定的网络连接、摄像头和带照片的证件。常用平台有 Notarize.com 和 DocuSign。",
            casualVersion: "I need something notarized but I'm out of state. Can we do it online?",
            commonMistake: { wrong: "I am in other state. Can you notary by internet? I send you the paper.", correct: "I can't come in person. Do you offer remote online notarization?", explanation: "remote online notarization（远程在线公证）是正式术语。不是发送文件——是通过视频通话当面完成。" },
            formalityVariants: { casual: "Can't be there in person — different state. Can we do this remotely?", standard: "I'm unable to visit in person as I'm in another state. Is remote online notarization available?", formal: "Due to being located in a different state at present, I am unable to appear in person. Does your office provide remote online notarization services via audio-visual communication?" },
          },
          { speaker: "them", role: "公证员", textEn: "Yes, we offer remote online notarization. You'll need a webcam, a stable internet connection, and your government ID. We use a secure platform that records the entire session. I'll send you a link, and we can do it over video. There's an additional ten-dollar technology fee on top of the regular notary fee.", textZh: "是的，我们提供远程在线公证。你需要摄像头、稳定的网络连接和政府签发的证件。我们使用一个安全的平台录制整个过程。我给你发个链接，我们通过视频完成。除了常规公证费外，还有十美元的技术费。",
            keyPhrases: [
              { en: "remote online notarization", zh: "远程在线公证" },
              { en: "technology fee", zh: "技术费" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, we do remote notarization. You'll hop on a video call — bring your ID to the camera. The whole thing is recorded for legal purposes. Extra ten bucks for the platform.", textZh: "可以，我们做远程公证。你上视频电话——把证件对着摄像头。全程录像作为法律记录。平台费多收十美元。", actionHint: "hop on a video call 上视频通话", frequency: "common" },
            ],
            casualVersion: "Yeah, we do it online. You need a webcam and your ID. It's all recorded. Ten bucks extra for the tech fee.",
            formalityVariants: { casual: "Yep — webcam, good Wi-Fi, your ID. I send you a link, we video-call it. Extra ten bucks for the platform.", standard: "Yes, remote notarization is available. You need a webcam, internet, and ID. A link will be sent to you. There's an additional ten-dollar technology fee.", formal: "Indeed, we do offer remote online notarization services. The requirements include a functioning webcam, a reliable internet connection, and a valid government-issued identification document. The session will be conducted via a secure, recorded audio-visual platform. I will provide you with a secure session link. Please note that an additional technology fee of ten dollars applies in addition to the standard notarization fee." },
          },
          { speaker: "you", textEn: "That works. One more thing — the document is partly in Chinese. The main text is in English but there's a Chinese translation attached. Will that be a problem?", textZh: "可以。还有一件事——文件部分是中文的。主要内容是英文，但附有中文翻译。这会有问题吗？",
            culturalNote: "美国公证员只公证签名的真实性，理论上不需要理解文件内容。但实际操作中，有些公证员会拒绝完全是外语的文件（因为无法确认签名者理解内容）。英文主体+外语翻译附件通常没问题。完全是中文的文件建议先找翻译认证服务。",
            casualVersion: "Sounds good. One thing though — part of it's in Chinese. English main text, Chinese translation attached. Is that OK?",
            commonMistake: { wrong: "My paper have Chinese. You can read Chinese? Is OK?", correct: "The main text is in English but there's a Chinese translation attached. Will that be a problem?", explanation: "公证员不需要读中文——说清楚哪部分是英文、哪部分是中文，问是否有问题。" },
            formalityVariants: { casual: "Oh also — there's some Chinese in it. English is the main part, Chinese is just the translation. Cool?", standard: "The document has English text with an attached Chinese translation. Will that be an issue?", formal: "I should mention that while the primary text of the document is in English, an appended Chinese translation accompanies it. Would the presence of a foreign-language component present any complications for the notarization process?" },
          },
          { speaker: "them", role: "公证员", textEn: "As long as the main body is in English and the signature lines are clear, that's fine. I'm notarizing your signature, not the content of the document. Just make sure you understand what you're signing. If the entire document were in a foreign language, I might need a certified translation.", textZh: "只要主体是英文的、签名行清楚就没问题。我公证的是你的签名，不是文件内容。你只要确保你理解你在签的是什么。如果整个文件都是外语的，我可能需要一份认证翻译。",
            keyPhrases: [
              { en: "notarizing your signature", zh: "公证你的签名" },
              { en: "certified translation", zh: "认证翻译" },
            ],
            alternativeExpressions: [
              { textEn: "No problem — I'm verifying your identity and watching you sign, not reading the content. English body plus a Chinese attachment is fine. Full foreign-language doc would need a certified translation though.", textZh: "没问题——我是验证你的身份和看你签名，不是审查内容。英文主体加中文附件可以。但如果全是外语文件就需要认证翻译了。", actionHint: "certified translation 由专业翻译出具的认证翻译", frequency: "common" },
            ],
            casualVersion: "English body, clear signature lines? We're good. I notarize the signature, not the document. If it were all Chinese, I'd need a certified translation.",
            formalityVariants: { casual: "English main text? Fine. I'm just watching you sign. All foreign-language? That'd need a certified translation.", standard: "That's fine as long as the main text is English. I notarize the signature, not the content. A fully foreign-language document would require a certified translation.", formal: "Provided that the principal text is in English and the signature lines are clearly delineated, there should be no impediment to notarization. My role is to authenticate your signature and verify your identity, not to evaluate the substance of the document. However, should the document be composed entirely in a foreign language, I would require an accompanying certified translation to proceed." },
          },
          { speaker: "you", textEn: "Good to know. Can I also get an apostille on this document? I need it to be recognized in China.", textZh: "了解了。这份文件可以加附加证明书（apostille）吗？我需要在中国使用。",
            culturalNote: "Apostille（附加证明书）是一种国际认证，让公证文件在海牙公约成员国被认可。中国于2023年加入海牙公约，现在接受 apostille。Apostille 由州务卿办公室签发，不是公证员。通常需要先公证，再送州务卿办公室加 apostille，费用约 $5-$20，处理时间1-4周。",
            casualVersion: "Can I get an apostille too? Need to use this in China.",
            commonMistake: { wrong: "Can you give me apostille? I need use in China, so need international stamp.", correct: "Can I get an apostille on this document? I need it recognized in China.", explanation: "apostille 不是公证员提供的，需要去 Secretary of State。recognized in China 比 use in China 更准确。" },
            formalityVariants: { casual: "Also need an apostille for China. Can you do that here?", standard: "Can I also get an apostille? This document needs to be recognized in China.", formal: "Additionally, I would like to inquire about obtaining an apostille for this document, as it needs to be recognized for legal purposes in the People's Republic of China." },
          },
          { speaker: "them", role: "公证员", textEn: "I can't issue an apostille — only the Secretary of State's office can do that. After I notarize your document, you'll need to send it to your state's Secretary of State with an apostille request form and a fee, usually around fifteen dollars. You can mail it or sometimes do it online. Processing takes about one to two weeks. Since China joined the Hague Convention, an apostille is all you need — no consulate legalization required.", textZh: "我不能签发 apostille——只有州务卿办公室可以。我公证完你的文件后，你需要把它和 apostille 申请表和费用（通常大约15美元）一起寄到你所在州的州务卿办公室。可以邮寄，有时也可以网上办理。处理时间大约一到两周。由于中国加入了海牙公约，apostille 就够了——不需要领事馆认证。",
            keyPhrases: [
              { en: "Secretary of State", zh: "州务卿办公室" },
              { en: "Hague Convention", zh: "海牙公约" },
            ],
            alternativeExpressions: [
              { textEn: "That's not me — apostilles come from the Secretary of State. After I notarize it, mail it to them with the form and about fifteen bucks. Takes a week or two. Good news: China's in the Hague Convention now, so apostille is enough — no consulate step.", textZh: "那不是我做的——apostille 从州务卿那里出。我公证后，你把文件和表格加大约15美元寄给他们。一两周处理。好消息：中国现在加入了海牙公约，所以 apostille 就够了——不需要领事馆那一步。", actionHint: "no consulate step 不需要领事馆认证这个步骤", frequency: "common" },
            ],
            casualVersion: "Can't do apostilles — that's the Secretary of State. After I notarize, you send it to them with a form and fifteen bucks. Week or two to process. China's in the Hague Convention now so the apostille's all you need.",
            formalityVariants: { casual: "Apostille is Secretary of State territory. Mail it to them after I notarize, with fifteen bucks. One to two weeks. China takes apostilles now — no consulate hassle.", standard: "Apostilles are issued by the Secretary of State. After notarization, submit the document with the request form and a fifteen-dollar fee. Processing takes one to two weeks. Since China joined the Hague Convention, an apostille is sufficient.", formal: "The issuance of apostilles falls under the exclusive jurisdiction of the Secretary of State's office. Following notarization of your document, you will need to submit it to the Secretary of State accompanied by the official apostille request form and an applicable fee of approximately fifteen dollars. The standard processing period is one to two weeks. As the People's Republic of China acceded to the Hague Apostille Convention, an apostille will provide full legal authentication, thereby eliminating the previously required consular legalization step." },
          },
        ],
      },
    ],
  },
];
