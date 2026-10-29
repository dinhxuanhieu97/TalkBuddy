import type { PresetScene } from "../scene-types";

// ============================================================
// 医疗场景 — Medical Scenes
// 覆盖：看诊、药房买药、急诊
// ============================================================

export const MEDICAL_SCENES: PresetScene[] = [
  // ==================== 看诊 ====================
  {
    id: "medical-clinic",
    category: "medical",
    titleZh: "看诊",
    titleEn: "Visiting a Clinic",
    description: "在国外身体不舒服需要看医生，包括挂号、描述症状、取药和保险问题",
    otherRole: "医生/前台",
    otherRoleIcon: "stethoscope",
    flows: [
      // --- Flow 1: 直接看诊（Walk-in）---
      {
        id: "walk-in",
        titleZh: "直接看诊",
        titleEn: "Walk-in Visit",
        description: "没有预约，直接去诊所看病，描述症状、医生检查、开处方",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I don't have an appointment. I'm not feeling well and I'd like to see a doctor.",
            textZh: "你好，我没有预约。我不太舒服，想看医生。",
            culturalNote:
              '很多国外诊所接受 walk-in（直接来），但可能需要等候。有些诊所叫 "urgent care"（紧急护理中心），专门接待没有预约的患者。',
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Of course. We accept walk-ins. Could you fill out this registration form? I'll need your name, date of birth, and any allergies.",
            textZh: "可以的，我们接受直接来看诊。请填写这张登记表。我需要您的姓名、出生日期和过敏信息。",
            variations: [
              {
                textEn: "Sure, we can fit you in. Please fill out this new patient form and bring your ID.",
                textZh: "好的，可以安排。请填写这份新患者表格，带上您的证件。",
              },
              {
                textEn: "We have a bit of a wait — about 30 minutes. Please fill out this form in the meantime.",
                textZh: "需要等一会儿——大约30分钟。请先填写这份表格。",
              },
            ],
            keyPhrases: [
              { en: "walk-ins", zh: "直接来看诊（无需预约）" },
              { en: "registration form", zh: "登记表" },
              { en: "date of birth", zh: "出生日期" },
              { en: "allergies", zh: "过敏" },
            ],
            responseTip: "准备好你的护照或身份证，以及保险信息",
            alternativeExpressions: [
              {
                textEn:
                  "Sure thing. Go ahead and fill this out for me — name, birthday, and any allergies. Got your ID on you?",
                textZh: "没问题。帮我填一下这个——姓名、生日和过敏信息。身份证带了吗？",
                actionHint: "填表并出示证件",
                frequency: "common",
              },
              {
                textEn: "No worries, we take walk-ins. Just need you to fill out some paperwork real quick.",
                textZh: "没关系，我们接受直接来的。麻烦快速填一下表格。",
                actionHint: "填写登记表",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's the form. I'm allergic to penicillin — I wrote it down.",
            textZh: "表格填好了。我对青霉素过敏——我写上去了。",
            culturalNote: '一定要主动告知药物过敏史。"penicillin allergy" 是最常见的药物过敏之一。',
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Thank you. The doctor will see you shortly. Please have a seat in the waiting area.",
            textZh: "谢谢。医生很快会叫您。请在候诊区坐一下。",
            keyPhrases: [
              { en: "see you shortly", zh: "很快叫您" },
              { en: "waiting area", zh: "候诊区" },
            ],
            alternativeExpressions: [
              {
                textEn: "Great, you're all set. Just have a seat over there and we'll call you in a few.",
                textZh: "好了，都弄好了。在那边坐一下，一会儿叫你。",
                actionHint: "在候诊区等候",
                frequency: "common",
              },
              {
                textEn: "Perfect. The doctor shouldn't be too long. Take a seat in the waiting room.",
                textZh: "好的。医生不会太久。去候诊室坐一下。",
                actionHint: "耐心等候",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "them",
            role: "护士",
            textEn:
              "Mr. Wang? The doctor is ready for you. Follow me, please. I'll take your temperature and blood pressure first.",
            textZh: "王先生？医生准备好了。请跟我来。我先量一下体温和血压。",
            keyPhrases: [
              { en: "temperature", zh: "体温" },
              { en: "blood pressure", zh: "血压" },
            ],
            alternativeExpressions: [
              {
                textEn: "Mr. Wang? Come on back. I just need to get your vitals real quick.",
                textZh: "王先生？请过来。我先快速量一下你的基本体征。",
                actionHint: "配合量体温血压",
                frequency: "common",
              },
              {
                textEn: "We're ready for you. Let me check your temp and BP before the doctor comes in.",
                textZh: "准备好了。医生来之前我先量一下体温和血压。",
                actionHint: "配合护士检查",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "Hello, Mr. Wang. What brings you in today?",
            textZh: "你好，王先生。今天怎么不舒服？",
            variations: [
              { textEn: "Hi there. Tell me what's been bothering you.", textZh: "你好。跟我说说哪里不舒服。" },
              { textEn: "Good morning. What seems to be the problem?", textZh: "早上好。哪里不舒服？" },
            ],
            keyPhrases: [{ en: "what brings you in", zh: "什么原因来看诊" }],
            responseTip: "尽量具体地描述症状：什么时候开始的、什么感觉、严重程度",
            alternativeExpressions: [
              {
                textEn: "So, what's going on? What can I help you with today?",
                textZh: "怎么了？今天我能帮你什么？",
                actionHint: "描述症状",
                frequency: "common",
              },
              {
                textEn: "Hey there. Fill me in — what's been bothering you?",
                textZh: "你好。跟我说说——哪里不舒服？",
                actionHint: "详细说明症状",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I've had a bad sore throat and a fever since yesterday. My whole body aches and I feel very tired. I think I might have the flu.",
            textZh: "从昨天开始嗓子很疼，还发烧。全身酸痛，很疲倦。我觉得可能是流感。",
            casualVersion: "My throat's been killing me since yesterday. Got a fever too, and I ache all over.",
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "I see. Let me take a look. Open your mouth and say ah... Your throat is quite red and swollen. I'm going to do a quick strep test and a flu swab. When did the fever start, and how high has it been?",
            textZh:
              "好的，让我看看。张嘴说「啊」……你的喉咙很红很肿。我给你做一个快速链球菌检测和流感拭子检测。发烧什么时候开始的，最高多少度？",
            keyPhrases: [
              { en: "sore throat", zh: "嗓子疼" },
              { en: "swollen", zh: "肿了" },
              { en: "strep test", zh: "链球菌检测" },
              { en: "flu swab", zh: "流感拭子检测" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn:
                  "Alright, let's have a look. Say 'ah' for me... Yeah, your throat's pretty inflamed. I wanna run a quick strep test and a flu swab. How long have you had the fever?",
                textZh: "好，让我看看。说'啊'……嗯，你喉咙发炎挺严重的。我想做个链球菌和流感快速检测。发烧多久了？",
                actionHint: "回答发烧时长",
                frequency: "common",
              },
              {
                textEn:
                  "Open up for me... Yep, that's really red in there. We're gonna swab for strep and flu. When did you first notice the fever?",
                textZh: "张嘴……嗯，里面很红。我们做个链球菌和流感拭子。你什么时候开始发烧的？",
                actionHint: "回忆发烧起始时间",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "It started yesterday afternoon. I measured 38.5 degrees Celsius — that's around 101 Fahrenheit, I think.",
            textZh: "昨天下午开始的。我量了38.5度——大概华氏101度。",
            culturalNote: "在美国用华氏度（Fahrenheit），其他英语国家多用摄氏度。记住 37°C = 98.6°F，38°C ≈ 100.4°F。",
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "The flu test came back positive. I'm going to prescribe Tamiflu — it's an antiviral that works best if started within 48 hours. Take it twice a day for five days. Drink plenty of fluids and get lots of rest. If your fever goes above 39.5 or you have trouble breathing, go to the emergency room immediately.",
            textZh:
              "流感检测是阳性的。我给你开达菲——是一种抗病毒药，在48小时内服用效果最好。每天两次，吃五天。多喝水，多休息。如果体温超过39.5度或者呼吸困难，立刻去急诊。",
            keyPhrases: [
              { en: "positive", zh: "阳性" },
              { en: "prescribe", zh: "开处方" },
              { en: "antiviral", zh: "抗病毒药" },
              { en: "twice a day", zh: "每天两次" },
              { en: "plenty of fluids", zh: "多喝水" },
              { en: "emergency room", zh: "急诊室" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "So your flu test came back positive. I'm gonna put you on Tamiflu — take it twice a day for five days. Push fluids, get plenty of rest. If the fever spikes or you can't breathe, head straight to the ER.",
                textZh:
                  "你的流感检测是阳性。我给你开达菲——每天两次吃五天。多喝水，好好休息。如果高烧或呼吸困难，直接去急诊。",
                actionHint: "记住用药方法",
                frequency: "common",
              },
              {
                textEn:
                  "Yep, it's the flu. I'll write you a script for Tamiflu. It works best if you start it right away. Stay hydrated, rest up, and if things get worse, don't wait — go to the ER.",
                textZh: "是的，是流感。我给你开达菲处方。越早吃效果越好。多喝水休息，如果恶化了别等——直接去急诊。",
                actionHint: "尽快取药开始服用",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay. I'm allergic to penicillin — is Tamiflu safe for me?",
            textZh: "好的。我对青霉素过敏——达菲对我安全吗？",
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "Yes, Tamiflu is not related to penicillin at all, so it's perfectly safe. I've noted your allergy in your chart. You can pick up the prescription at any pharmacy. Do you have any other questions?",
            textZh:
              "是的，达菲和青霉素完全无关，所以完全安全。我已经在病历里记录了你的过敏史。你可以去任何药房取处方药。还有其他问题吗？",
            keyPhrases: [
              { en: "not related to", zh: "无关" },
              { en: "noted your allergy", zh: "记录了你的过敏史" },
              { en: "pick up the prescription", zh: "取处方药" },
              { en: "pharmacy", zh: "药房" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Totally fine — Tamiflu has nothing to do with penicillin. I've flagged your allergy in the system. Just take this to any pharmacy and you're good to go.",
                textZh: "完全没问题——达菲和青霉素没有任何关系。我已经在系统里标记了你的过敏。拿处方去任何药房就行。",
                actionHint: "去药房取药",
                frequency: "common",
              },
              {
                textEn:
                  "No worries at all. They're completely different drugs. Your allergy's in your file now. You can fill the prescription at whatever pharmacy is convenient.",
                textZh: "完全不用担心。它们是完全不同的药。你的过敏信息已经记在病历里了。去方便的药房取药就好。",
                actionHint: "前往药房",
                frequency: "common",
              },
            ],
          },
        ],
      },

      // --- Flow 2: 保险问题 ---
      {
        id: "insurance",
        titleZh: "保险问题",
        titleEn: "Insurance Issues",
        description: "看诊时涉及旅行保险、付款方式的对话",
        difficulty: "advanced",
        turns: [
          {
            speaker: "them",
            role: "前台",
            textEn: "Before we start, do you have insurance? We accept most major providers.",
            textZh: "在开始之前，您有保险吗？我们接受大多数主要保险公司。",
            keyPhrases: [
              { en: "insurance", zh: "保险" },
              { en: "major providers", zh: "主要保险公司" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn: "Quick question — do you have any insurance on file, or will you be self-pay today?",
                textZh: "快问一下——你有保险吗，还是今天自费？",
                actionHint: "说明保险情况",
                frequency: "common",
              },
              {
                textEn: "I just need to check — are you insured, or paying out of pocket?",
                textZh: "我确认一下——你有保险还是自费？",
                actionHint: "出示保险卡或说明自费",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I'm a tourist. I have travel insurance through World Nomads. I'm not sure if you accept it — here's my insurance card.",
            textZh: "我是游客。我通过 World Nomads 买了旅行保险。不确定你们接不接——这是我的保险卡。",
            culturalNote: "出国前拍照保存保险卡和保单号码。旅行保险通常需要先自付，再事后申请理赔。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "We don't bill travel insurance directly, unfortunately. You'll need to pay out of pocket today, and then submit the receipt to your insurance company for reimbursement. We can provide a detailed receipt with diagnosis codes.",
            textZh:
              "很遗憾，我们不能直接向旅行保险公司结算。您今天需要先自费，然后把收据交给保险公司申请理赔。我们可以提供含诊断代码的详细收据。",
            variations: [
              {
                textEn:
                  "Travel insurance usually works on a reimbursement basis. You pay now and claim it back later. We'll give you all the paperwork you need.",
                textZh: "旅行保险通常是报销制的。您先付款，之后再申请理赔。我们会给您所需的全部文件。",
              },
            ],
            keyPhrases: [
              { en: "pay out of pocket", zh: "自费/先自付" },
              { en: "reimbursement", zh: "报销/理赔" },
              { en: "detailed receipt", zh: "详细收据" },
              { en: "diagnosis codes", zh: "诊断代码" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Unfortunately we can't bill your travel insurance directly. You'd pay upfront and then file a claim with them for reimbursement.",
                textZh: "很遗憾我们不能直接跟你的旅行保险结算。你先付全款，然后自己跟保险公司申请理赔。",
                actionHint: "了解自费后理赔流程",
                frequency: "common",
              },
              {
                textEn:
                  "With travel insurance, it's usually pay first, claim later. We'll make sure you get a proper receipt with all the codes you need.",
                textZh: "旅行保险一般是先付后赔。我们会给你一份带完整代码的正式收据。",
                actionHint: "保留所有收据",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I understand. How much will the visit cost?",
            textZh: "明白了。看诊费用是多少？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "The consultation fee is $150. If the doctor orders any tests, those are additional — a flu test is $40, blood work starts at $80. We accept credit cards and cash.",
            textZh: "诊费150美元。如果医生开了检查，另外收费——流感检测40美元，验血80美元起。我们接受信用卡和现金。",
            keyPhrases: [
              { en: "consultation fee", zh: "诊费/挂号费" },
              { en: "additional", zh: "额外的" },
              { en: "blood work", zh: "验血/血液检查" },
              { en: "credit cards", zh: "信用卡" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The office visit is $150. Labs and tests are extra — flu test runs about $40, bloodwork starts around $80. We take Visa, Mastercard, and cash.",
                textZh: "门诊费150美元。化验和检测另算——流感检测大约40美元，血检80美元起。我们收Visa、万事达和现金。",
                actionHint: "确认费用并选择支付方式",
                frequency: "common",
              },
              {
                textEn:
                  "Without insurance, you're looking at $150 for the visit, plus any tests the doc orders on top of that.",
                textZh: "没有保险的话，看诊150美元，加上医生开的检查费用。",
                actionHint: "准备好付款",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "That's fine. I'll pay by credit card. Could you make sure the receipt includes everything I need for the insurance claim? The doctor's name, diagnosis, and treatment details?",
            textZh: "没问题。我用信用卡付。能确保收据上包含我理赔需要的所有信息吗？医生姓名、诊断和治疗详情？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Absolutely. We'll include the doctor's name, your diagnosis, all procedures performed, itemized costs, and the clinic's tax ID number. Most travel insurance companies also need a claim form filled out by the doctor — should I ask Dr. Miller to complete one?",
            textZh:
              "当然。我们会包括医生姓名、诊断、所有诊疗项目、费用明细和诊所税号。大多数旅行保险公司还需要医生填一份理赔表——需要我请 Miller 医生填写吗？",
            keyPhrases: [
              { en: "procedures performed", zh: "诊疗项目" },
              { en: "itemized costs", zh: "费用明细" },
              { en: "tax ID number", zh: "税号" },
              { en: "claim form", zh: "理赔表" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For sure. We'll put everything on the receipt — doc's name, diagnosis, procedures, the works. Want me to have the doctor fill out an insurance claim form too?",
                textZh: "没问题。收据上什么都会写——医生姓名、诊断、治疗项目，全部。需要我让医生也填一份保险理赔表吗？",
                actionHint: "请医生填理赔表",
                frequency: "common",
              },
              {
                textEn:
                  "We do this all the time for international patients. I'll make sure the receipt has all the details your insurer needs.",
                textZh: "我们经常帮国际患者处理这些。我会确保收据有你的保险公司需要的所有信息。",
                actionHint: "确认收据内容",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. That would save me a lot of trouble. Thank you so much.",
            textZh: "好的，麻烦了。这能省我很多麻烦。非常感谢。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "No problem. I'll have everything ready for you when you check out. Also, keep all your pharmacy receipts — your insurance will probably cover medication too.",
            textZh: "没问题。您结束后我把所有材料准备好。另外，保留好药房的收据——保险可能也报销药费。",
            keyPhrases: [
              { en: "pharmacy receipts", zh: "药房收据" },
              { en: "cover medication", zh: "报销药费" },
            ],
            culturalNote: "保留所有医疗相关收据，包括药房、出租车去医院的费用等，有些旅行保险都可以理赔。",
            alternativeExpressions: [
              {
                textEn:
                  "You're all set. I'll have your paperwork at the front desk when you're done. Oh, and hang on to your pharmacy receipts — your insurance might reimburse those too.",
                textZh: "都弄好了。结束后前台有你的材料。对了，药房收据也留着——保险可能也报。",
                actionHint: "保留药房收据",
                frequency: "common",
              },
              {
                textEn:
                  "I'll get everything together for you before you leave. Don't forget to save your drug store receipts as well — they're usually covered.",
                textZh: "你走之前我把所有东西整理好。别忘了药店收据也留着——通常也能报。",
                actionHint: "保留所有收据",
                frequency: "common",
              },
            ],
          },
        ],
      },

      // --- Flow 3: 复诊 ---
      {
        id: "follow-up",
        titleZh: "复诊",
        titleEn: "Follow-up Visit",
        description: "医生要求回来复诊，检查恢复情况",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm here for a follow-up appointment. I saw Dr. Miller three days ago for the flu.",
            textZh: "你好，我来复诊。三天前因为流感看了 Miller 医生。",
            casualVersion: "Hey, here for a follow-up. Saw Dr. Miller three days ago for the flu.",
            commonMistake: {
              wrong: "I come for a follow-up appointment.",
              correct: "I'm here for a follow-up appointment.",
              explanation: "“I come” 听起来不自然，用 “I'm here for” 更地道。",
            },
            formalityVariants: {
              casual: "Hey, here for a follow-up. Saw Dr. Miller three days ago for flu.",
              standard: "Hi, I'm here for a follow-up appointment. I saw Dr. Miller three days ago for the flu.",
              formal:
                "Good morning/afternoon, I have a scheduled follow-up appointment. I was seen by Dr. Miller three days prior for influenza.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Welcome back, Mr. Wang. Dr. Miller is expecting you. Please take a seat and he'll be right with you.",
            textZh: "欢迎回来，王先生。Miller 医生在等您。请坐，他马上来。",
            keyPhrases: [
              { en: "follow-up", zh: "复诊" },
              { en: "expecting you", zh: "在等您" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Hey, welcome back! The doctor's got you on his schedule. Have a seat and he'll be out in a sec.",
                textZh: "嘿，欢迎回来！医生已经安排好了。坐一下，他马上出来。",
                actionHint: "在候诊区等候",
                frequency: "common",
              },
              {
                textEn: "Good to see you again. Dr. Miller knows you're here. Just hang tight for a moment.",
                textZh: "很高兴再见到你。Miller 医生知道你来了。稍等一下。",
                actionHint: "耐心等候",
                frequency: "common",
              },
            ],
            casualVersion: "Welcome back, Mr. Wang. Dr. Miller's waiting. Have a seat, he'll be right with ya.",
            formalityVariants: {
              casual: "Welcome back, Mr. Wang. Dr. Miller's waiting. Have a seat, he'll be right with ya.",
              standard:
                "Welcome back, Mr. Wang. Dr. Miller is expecting you. Please take a seat and he'll be right with you.",
              formal:
                "Welcome back, Mr. Wang. Dr. Miller is expecting your arrival. Kindly be seated, and he will attend to you momentarily.",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "Hi again, Mr. Wang. How are you feeling since last time? Has the fever gone down?",
            textZh: "又见面了，王先生。上次之后感觉怎么样？烧退了吗？",
            keyPhrases: [
              { en: "how are you feeling", zh: "感觉怎么样" },
              { en: "fever gone down", zh: "烧退了" },
            ],
            alternativeExpressions: [
              {
                textEn: "Hey, good to see you back. How have you been doing? Any better since last time?",
                textZh: "嘿，很高兴你回来了。最近怎么样？比上次好点了吗？",
                actionHint: "汇报恢复情况",
                frequency: "common",
              },
              {
                textEn: "Welcome back. So, how are we doing? Has the fever come down at all?",
                textZh: "欢迎回来。怎么样了？烧有退吗？",
                actionHint: "说明症状变化",
                frequency: "common",
              },
            ],
            casualVersion: "Hey again, Mr. Wang. How ya feeling since last time? Fever go down?",
            commonMistake: {
              wrong: "Is fever gone down?",
              correct: "Has the fever gone down?",
              explanation: "提问时需要正确的助动词，此处用 “has” 更自然。",
            },
            formalityVariants: {
              casual: "Hey again, Mr. Wang. How ya feeling since last time? Fever go down?",
              standard: "Hi again, Mr. Wang. How are you feeling since last time? Has the fever gone down?",
              formal:
                "Good to see you again, Mr. Wang. How have you been feeling since our last consultation? Has your fever subsided?",
            },
          },
          {
            speaker: "you",
            textEn:
              "Much better, thanks. The fever broke yesterday, and my throat is less sore. But I still have a cough that won't go away.",
            textZh: "好多了，谢谢。昨天退烧了，嗓子也没那么疼了。但还是有咳嗽，一直不好。",
            casualVersion: "Way better. Fever's gone, throat's okay, but I can't shake this cough.",
            commonMistake: {
              wrong: "My throat is not so sore.",
              correct: "My throat is less sore.",
              explanation: "“less sore” 比 “not so sore” 更准确地表达程度减轻。",
            },
            formalityVariants: {
              casual:
                "Way better, thanks. Fever broke yesterday, throat's less sore. Still got this cough that just won't quit.",
              standard:
                "Much better, thanks. The fever broke yesterday, and my throat is less sore. But I still have a cough that won't go away.",
              formal:
                "I am feeling significantly better, thank you. My fever abated yesterday, and the soreness in my throat has diminished. However, I am still experiencing a persistent cough.",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "That's normal — the cough can linger for a week or two after the flu. Let me listen to your lungs... They sound clear, no signs of infection. I'd recommend an over-the-counter cough suppressant and honey tea. If the cough gets worse or you start coughing up colored mucus, come back right away.",
            textZh:
              "这很正常——流感后咳嗽可能持续一两周。让我听一下你的肺……听起来很清楚，没有感染的迹象。建议去药店买止咳药，再喝蜂蜜茶。如果咳嗽加重或者咳出有颜色的痰，马上回来。",
            keyPhrases: [
              { en: "linger", zh: "持续/拖着" },
              { en: "listen to your lungs", zh: "听肺" },
              { en: "sound clear", zh: "听起来正常" },
              { en: "cough suppressant", zh: "止咳药" },
              { en: "colored mucus", zh: "有颜色的痰" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn:
                  "That cough is totally normal after the flu — could stick around for a couple weeks. Your lungs sound good though, no infection. Just grab some cough medicine from the store and sip on some warm tea with honey.",
                textZh:
                  "流感后咳嗽很正常——可能持续几周。你的肺听起来没问题，没有感染。去药店买点止咳药，喝点蜂蜜温茶就好。",
                actionHint: "买止咳药",
                frequency: "common",
              },
              {
                textEn:
                  "Post-flu cough is super common, don't worry about it. Lungs are clear. If it gets worse or you start seeing green or yellow stuff when you cough, come back ASAP.",
                textZh: "流感后咳嗽非常常见，不用担心。肺部正常。如果加重了或者咳出绿色黄色的痰，赶紧回来。",
                actionHint: "注意观察痰的颜色",
                frequency: "common",
              },
            ],
            casualVersion:
              "That's normal — cough can stick around for a week or two after the flu. Let me listen to your lungs... Sound clear, no infection. I'd say grab some over-the-counter cough medicine and honey tea. If it gets worse or you start spitting up colored stuff, come back ASAP.",
            commonMistake: {
              wrong: "medicine without prescription",
              correct: "over-the-counter medicine",
              explanation: "“over-the-counter” 是非处方药的专业说法，更地道。",
            },
            formalityVariants: {
              casual:
                "That's normal — cough can stick around for a week or two after the flu. Let me listen to your lungs... Sound clear, no infection. I'd say grab some over-the-counter cough medicine and honey tea. If it gets worse or you start spitting up colored stuff, come back ASAP.",
              standard:
                "That's normal — the cough can linger for a week or two after the flu. Let me listen to your lungs... They sound clear, no signs of infection. I'd recommend an over-the-counter cough suppressant and honey tea. If the cough gets worse or you start coughing up colored mucus, come back right away.",
              formal:
                "That is entirely normal; a post-influenza cough can persist for one to two weeks. Allow me to auscultate your lungs... They present as clear, with no indications of infection. I would advise an over-the-counter antitussive and consumption of honey tea. Should the cough exacerbate or you observe discolored sputum, please return immediately.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. Should I finish the rest of the Tamiflu?",
            textZh: "明白了。达菲还要继续吃完吗？",
            casualVersion: "Got it. Finish the rest of the Tamiflu?",
            commonMistake: {
              wrong: "Do I need to finish eat the Tamiflu?",
              correct: "Should I finish the rest of the Tamiflu?",
              explanation: "“eat medicine” 不自然，用 “take/finish the medicine” 更常见。",
            },
            formalityVariants: {
              casual: "Got it. Finish the rest of the Tamiflu?",
              standard: "Got it. Should I finish the rest of the Tamiflu?",
              formal: "Understood. Am I to complete the remaining course of Tamiflu?",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "Yes, always finish the full course even if you feel better. You have two more days, right? After that, you don't need any more prescription medication. You're recovering well.",
            textZh: "是的，就算感觉好了也要把整个疗程吃完。你还剩两天的量对吧？之后就不需要处方药了。你恢复得很好。",
            keyPhrases: [
              { en: "full course", zh: "整个疗程" },
              { en: "prescription medication", zh: "处方药" },
              { en: "recovering well", zh: "恢复得很好" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Definitely finish it out, even though you're feeling better. You've got two days left, right? After that, you won't need anything else. You're doing great.",
                textZh: "一定要吃完，虽然你感觉好了。还剩两天的量对吧？之后就不需要其他药了。恢复得很好。",
                actionHint: "吃完剩余药物",
                frequency: "common",
              },
              {
                textEn:
                  "Yep, always finish the full round. Don't stop early just because you feel fine — that's really important with antivirals.",
                textZh: "对，一定要吃完整个疗程。别因为感觉好了就停——抗病毒药这点很重要。",
                actionHint: "坚持完成疗程",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep, always finish the whole course even if you feel better. Got two more days, right? After that, no more prescription meds. You're recovering great.",
            commonMistake: {
              wrong: "you don't need any more doctor's medicine.",
              correct: "you don't need any more prescription medication.",
              explanation: "“prescription medication” 是处方药的标准说法。",
            },
            formalityVariants: {
              casual:
                "Yep, always finish the whole course even if you feel better. Got two more days, right? After that, no more prescription meds. You're recovering great.",
              standard:
                "Yes, always finish the full course even if you feel better. You have two more days, right? After that, you don't need any more prescription medication. You're recovering well.",
              formal:
                "Yes, it is imperative to complete the entire prescribed course of treatment, even if symptomatic improvement is observed. You have two more days remaining, correct? Subsequent to that, no further prescription medication will be required. Your recovery is progressing favorably.",
            },
          },
          {
            speaker: "you",
            textEn: "That's a relief. One more question — I'm flying home in four days. Is it safe to fly?",
            textZh: "那就放心了。再问一下——我四天后坐飞机回国。可以坐飞机吗？",
            casualVersion: "Whew, good to hear. One more thing — flying home in four days. Safe to fly?",
            commonMistake: {
              wrong: "I will take a plane back to my home country in four days.",
              correct: "I'm flying home in four days.",
              explanation: "“flying home” 是更简洁自然的表达方式。",
            },
            formalityVariants: {
              casual: "Whew, good to hear. One more thing — flying home in four days. Safe to fly?",
              standard: "That's a relief. One more question — I'm flying home in four days. Is it safe to fly?",
              formal:
                "That is reassuring news. I have one further query: I am scheduled to fly internationally in four days. Would it be advisable to travel by air?",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "By then you should be fine. Just stay hydrated on the flight and bring some cough drops. If you're still running a fever in four days, though, you should delay your flight and come see me. But I don't think that'll be necessary.",
            textZh:
              "到时候应该没问题。飞机上注意补水，带一些润喉糖。不过如果四天后还在发烧，就应该推迟航班来看我。但我觉得不太可能。",
            keyPhrases: [
              { en: "stay hydrated", zh: "注意补水" },
              { en: "cough drops", zh: "润喉糖/止咳含片" },
              { en: "running a fever", zh: "在发烧" },
              { en: "delay your flight", zh: "推迟航班" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Four days out? You should be totally fine by then. Just drink a ton of water on the plane and bring some lozenges. If you're still running a temp by then though, push the flight back and come see me.",
                textZh:
                  "四天后？到时候应该完全没问题了。飞机上多喝水，带一些含片。不过要是到时候还发烧，就改签来找我。",
                actionHint: "飞机上多补水",
                frequency: "common",
              },
              {
                textEn:
                  "You'll be good to fly. Just stay on top of your fluids during the flight and keep some cough drops handy.",
                textZh: "坐飞机没问题的。飞行途中记得多喝水，备着止咳含片。",
                actionHint: "准备润喉含片",
                frequency: "common",
              },
            ],
            casualVersion:
              "By then you should be good. Just drink lots of water on the plane and bring some cough drops. If you're still got a fever in four days though, gotta delay your flight and come see me. But I doubt that'll happen.",
            commonMistake: {
              wrong: "Just drink more water on the flight.",
              correct: "Just stay hydrated on the flight.",
              explanation: "“stay hydrated” 是更专业的表达，指保持身体水分充足。",
            },
            formalityVariants: {
              casual:
                "By then you should be good. Just drink lots of water on the plane and bring some cough drops. If you're still got a fever in four days though, gotta delay your flight and come see me. But I doubt that'll happen.",
              standard:
                "By then you should be fine. Just stay hydrated on the flight and bring some cough drops. If you're still running a fever in four days, though, you should delay your flight and come see me. But I don't think that'll be necessary.",
              formal:
                "By that time, you should be fully recovered. I advise you to maintain adequate hydration during the flight and carry some lozenges. However, if you are still febrile in four days, it would be prudent to postpone your flight and schedule another consultation. I anticipate this will not be the case.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you so much, Dr. Miller. I really appreciate your help.",
            textZh: "非常感谢，Miller 医生。真的很感谢您的帮助。",
            casualVersion: "Thanks a bunch, Dr. Miller. Really appreciate the help.",
            formalityVariants: {
              casual: "Thanks a bunch, Dr. Miller. Really appreciate the help.",
              standard: "Thank you so much, Dr. Miller. I really appreciate your help.",
              formal: "I extend my sincerest gratitude, Dr. Miller, for your invaluable assistance.",
            },
          },
        ],
      },
      {
        id: "understanding-doctor-instructions",
        titleZh: "理解医嘱与取药",
        titleEn: "Understanding Doctor Instructions",
        description: "医生解释诊断、听不懂术语怎么问、理解用药指示、药房取药",
        difficulty: "advanced",
        turns: [
          {
            speaker: "them",
            role: "医生",
            textEn: "So after reviewing your test results, it looks like you have a mild case of gastritis with some esophageal reflux. Nothing too serious, but we'll need to manage it.",
            textZh: "看了你的检查结果后，你有轻度胃炎，伴有一些食管反流。不是很严重，但我们需要管理一下。",
            keyPhrases: [{ en: "gastritis", zh: "胃炎" }, { en: "esophageal reflux", zh: "食管反流" }, { en: "manage it", zh: "管理/控制" }],
            alternativeExpressions: [
              { textEn: "Based on your results, you've got some mild stomach inflammation and acid reflux. It's very treatable — let's talk about a plan.", textZh: "根据你的结果，有些轻微的胃部炎症和反酸。完全可以治的——我们来说说方案。", actionHint: "用通俗说法解释", frequency: "common" },
            ],
            casualVersion: "So your results show a mild case of gastritis with some reflux. Not too bad, but we should deal with it.",
            formalityVariants: {
              casual: "Your results show mild gastritis and some reflux. Not bad, but let's treat it.",
              standard: "You have mild gastritis with esophageal reflux. Nothing serious, but we need to manage it.",
              formal: "Upon review of your diagnostic results, I have identified a mild case of gastritis accompanied by esophageal reflux. While not acutely serious, therapeutic management is advisable.",
            },
          },
          {
            speaker: "you",
            textEn: "Sorry, could you explain that in simpler terms? I'm not sure I understand what gastritis means.",
            textZh: "抱歉，能用简单点的话解释一下吗？我不太理解胃炎是什么意思。",
            culturalNote: "美国医生通常很快。如果听不懂，'Could you explain that in simpler terms?' 是完全正常的请求。branded 药和 generic 药成分一样但价格差很多。",
            commonMistake: {
              wrong: "I don't understand. What is that?",
              correct: "Could you explain that in simpler terms?",
              explanation: "'In simpler terms' 是请医生用通俗语言解释的礼貌说法，比直接说 'I don't understand' 更具体。",
            },
            casualVersion: "Um, can you dumb that down a bit? What's gastritis exactly?",
            formalityVariants: {
              casual: "Wait, what's gastritis? Can you explain in normal words?",
              standard: "Could you explain that in simpler terms? I'm not sure what gastritis means.",
              formal: "I apologize, but would you mind explaining that in more accessible language? I am not entirely familiar with the term gastritis.",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "Of course! So basically, the lining of your stomach is a little inflamed — think of it like your stomach is irritated. And the reflux means acid from your stomach is coming back up into your throat, which is probably causing that burning feeling you mentioned.",
            textZh: "当然！简单来说，你胃壁有点发炎——可以想象成你的胃受到了刺激。反流就是胃酸倒流到喉咙，这可能就是你说的那个烧灼感的原因。",
            keyPhrases: [{ en: "lining of your stomach", zh: "胃壁" }, { en: "inflamed", zh: "发炎" }, { en: "acid reflux", zh: "胃酸反流" }],
            alternativeExpressions: [
              { textEn: "Sure! Your stomach lining is irritated, and acid is backing up into your throat. That's what's causing the heartburn.", textZh: "当然！你的胃壁受刺激了，胃酸往喉咙倒流。这就是烧心的原因。", actionHint: "backing up = 倒流", frequency: "common" },
            ],
            casualVersion: "Sure! Your stomach's lining is kinda irritated, and acid is coming back up to your throat — that burning you feel.",
            formalityVariants: {
              casual: "Yeah! Basically your stomach's irritated and acid's coming back up. That's the burning feeling.",
              standard: "Your stomach lining is inflamed. The reflux means acid comes back up to your throat — that's the burning.",
              formal: "Certainly. In layperson's terms, the mucosal lining of your stomach is experiencing mild inflammation. The reflux refers to gastric acid ascending into the esophagus, which is the probable cause of the burning sensation you described.",
            },
          },
          {
            speaker: "you",
            textEn: "Oh, that makes sense. So what do I need to do? Is there medication for it?",
            textZh: "哦，明白了。那我需要怎么做？有药吗？",
            casualVersion: "Got it. So what now? Do I take something for it?",
            formalityVariants: {
              casual: "Okay, got it. So what do I take?",
              standard: "That makes sense. Is there medication for it?",
              formal: "I see. That is much clearer. What course of treatment would you recommend? Is medication necessary?",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "Yes. I'm going to prescribe you omeprazole — it's a proton pump inhibitor that reduces stomach acid. Take it once a day, in the morning, 30 minutes before breakfast. You'll need to take it for four weeks.",
            textZh: "是的。我给你开奥美拉唑——这是一种质子泵抑制剂，可以减少胃酸。每天吃一次，早上，早餐前30分钟。你需要吃四周。",
            keyPhrases: [
              { en: "prescribe", zh: "开处方" },
              { en: "once a day", zh: "每天一次" },
              { en: "before breakfast", zh: "早餐前" },
              { en: "proton pump inhibitor", zh: "质子泵抑制剂" },
            ],
            alternativeExpressions: [
              { textEn: "I'll write you a prescription for omeprazole. Take one pill every morning, half an hour before you eat, for four weeks.", textZh: "我给你开一张奥美拉唑的处方。每天早上吃一片，饭前半小时，吃四周。", actionHint: "用更通俗的说法", frequency: "common" },
            ],
            casualVersion: "Yep. I'll prescribe omeprazole. One pill a day, in the morning, 30 min before you eat. Four weeks.",
            formalityVariants: {
              casual: "Yeah. Gonna put you on omeprazole. One a day, morning, 30 min before food. Four weeks.",
              standard: "I'll prescribe omeprazole. Take it once daily, morning, 30 minutes before breakfast, for four weeks.",
              formal: "I shall prescribe omeprazole, a proton pump inhibitor. The dosage is once daily, administered in the morning approximately 30 minutes prior to your first meal, for a duration of four weeks.",
            },
          },
          {
            speaker: "you",
            textEn: "Okay, once a day, morning, before food. Got it. Um, are there any side effects I should watch out for?",
            textZh: "好的，每天一次，早上，饭前。明白了。嗯，有什么副作用需要注意的吗？",
            commonMistake: {
              wrong: "Does it have side effects?",
              correct: "Are there any side effects I should watch out for?",
              explanation: "'Watch out for' 更具体，表示你想知道需要注意的症状。",
            },
            casualVersion: "Once a day, morning, before food. Got it. Any side effects to worry about?",
            formalityVariants: {
              casual: "Okay — morning, before food. Any side effects?",
              standard: "Once daily, morning, before breakfast. Any side effects I should know about?",
              formal: "Understood — once daily in the morning prior to breakfast. Are there any potential side effects that I should be vigilant about?",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "Some people get mild headaches or nausea the first few days, but that usually goes away. If you notice anything severe — like difficulty breathing or a rash — stop taking it and call us immediately. Here's the prescription. You can fill it at any pharmacy.",
            textZh: "有些人头几天会有轻微头痛或恶心，但通常会消失。如果你发现严重的症状——比如呼吸困难或皮疹——立刻停药并打电话给我们。这是处方。你可以在任何药房取药。",
            keyPhrases: [
              { en: "fill the prescription", zh: "配药/取药" },
              { en: "pharmacy", zh: "药房" },
              { en: "rash", zh: "皮疹" },
              { en: "stop taking it", zh: "停药" },
            ],
            alternativeExpressions: [
              { textEn: "Minor headaches or stomach upset at first is normal. If you get a rash or can't breathe, stop the meds and call us right away. Take this prescription to any pharmacy.", textZh: "刚开始有轻微头痛或胃不舒服是正常的。如果起皮疹或不能呼吸，停药立即打电话。拿这个处方去任何药房。", actionHint: "meds = medication 的口语", frequency: "common" },
            ],
            casualVersion: "Some people get headaches or feel a little queasy at first. If you get a rash or trouble breathing, stop and call us right away. Here's the script — any pharmacy.",
            formalityVariants: {
              casual: "Might get a headache or feel nauseous first few days. If anything serious — rash, trouble breathing — stop and call us. Here's the prescription.",
              standard: "Mild headaches or nausea at first is common. For anything severe, stop and call us. Fill this at any pharmacy.",
              formal: "Some patients experience transient headaches or mild nausea during the initial days. Should you develop any severe symptoms such as respiratory difficulty or dermal rash, discontinue the medication immediately and contact our office. Here is the prescription, which may be dispensed at any licensed pharmacy.",
            },
          },
          {
            speaker: "you",
            textEn: "Actually, one more question — is there a generic version? I don't have great insurance, so cost is kind of a concern.",
            textZh: "对了，再问一个问题——有仿制药版本吗？我保险不太好，所以费用有点担心。",
            culturalNote: "branded 药和 generic 药成分一样但价格差很多。问 'Is there a generic version?' 在美国完全正常，医生不会觉得奇怪。",
            commonMistake: {
              wrong: "Is there a cheap version?",
              correct: "Is there a generic version?",
              explanation: "'Generic version' 是仿制药的正式说法。说 'cheap version' 不太得体。",
            },
            casualVersion: "Oh wait — is there a generic? My insurance isn't great, so trying to save where I can.",
            formalityVariants: {
              casual: "Is there a generic? Insurance isn't great so cost matters.",
              standard: "Is there a generic version? Cost is a concern with my insurance.",
              formal: "If I may ask one additional question — is a generic equivalent available? Given my insurance coverage, I would prefer a more cost-effective option if possible.",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "Yes, absolutely! Omeprazole is available as a generic — it's actually one of the most common ones. The generic works exactly the same as the brand name. With your insurance, it should be around $10 to $15 for a month's supply. Without insurance, it might be $20 to $30.",
            textZh: "当然可以！奥美拉唑有仿制药——其实是最常见的之一。仿制药和品牌药效果完全一样。用你的保险，一个月大概10到15美元。没保险的话可能20到30美元。",
            keyPhrases: [{ en: "generic", zh: "仿制药" }, { en: "brand name", zh: "品牌药" }, { en: "month's supply", zh: "一个月的量" }],
            alternativeExpressions: [
              { textEn: "Definitely! The generic is just as effective and way cheaper. Probably $10-15 with insurance. I always prescribe the generic unless there's a reason not to.", textZh: "当然！仿制药一样有效而且便宜多了。有保险大概10-15美元。除非有特殊原因我都开仿制药。", actionHint: "just as effective = 一样有效", frequency: "common" },
            ],
            casualVersion: "Oh yeah, generic omeprazole is super common. Same exact thing as the brand. Probably $10-15 with insurance.",
            formalityVariants: {
              casual: "Oh for sure. Generic omeprazole is everywhere. Same thing, way cheaper. $10-15 with insurance.",
              standard: "Yes, the generic is available and works the same. About $10-15 with insurance.",
              formal: "Certainly. Generic omeprazole is widely available and pharmacologically identical to the branded version. With your insurance, the cost should be approximately $10 to $15 for a one-month supply.",
            },
          },
          {
            speaker: "you",
            textEn: "That's a relief. Thank you so much, Doctor. So I just take this prescription to a pharmacy and they'll give me the medication?",
            textZh: "那就放心了。非常感谢，医生。那我就拿这个处方去药房取药就行了？",
            casualVersion: "Oh good. Thanks, Doc. So I just bring this to a pharmacy and they fill it?",
            formalityVariants: {
              casual: "Great, thanks Doc. Just take this to a pharmacy?",
              standard: "Thank you. I just take this prescription to any pharmacy?",
              formal: "That is reassuring. Thank you very much. Am I correct that I simply present this prescription at a pharmacy to have it dispensed?",
            },
          },
        ],
      },
    ],
  },

  // ==================== 药房买药 ====================
  {
    id: "medical-pharmacy",
    tags: ["pharmacy", "药房", "prescription", "处方药"],
    category: "medical",
    titleZh: "药房买药",
    titleEn: "At the Pharmacy",
    description: "去药房买药，包括非处方药、处方药和咨询药剂师",
    otherRole: "药剂师",
    otherRoleIcon: "pill",
    flows: [
      // --- Flow 1: 买非处方药 ---
      {
        id: "otc",
        titleZh: "买非处方药",
        titleEn: "Buying Over-the-Counter Medicine",
        description: "不需要处方，自己去药房买感冒药、止痛药等",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, could you recommend something for a cold? I have a runny nose and a headache.",
            textZh: "不好意思，能推荐治感冒的药吗？我流鼻涕还头疼。",
            culturalNote: "美国办理非处方药时直接说症状或需求，无需客套。药剂师会根据症状推荐。",
            commonMistake: {
              wrong: "Do you have any medicine for cold?",
              correct: "Could you recommend something for a cold?",
              explanation: "直接问“有没有药”太生硬，用“能否推荐”更自然礼貌。",
            },
            formalityVariants: {
              casual: "Hey, got anything for a cold? Got a runny nose and headache.",
              standard: "Excuse me, could you recommend something for a cold? I have a runny nose and a headache.",
              formal: "Excuse me, I was wondering if you could possibly recommend an effective remedy for a common cold. My current symptoms include a persistent runny nose and a headache.",
            },
            casualVersion: "Hey, I've got a cold — runny nose, headache. What do you recommend?",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Sure. Are you looking for something that treats multiple symptoms, or just the headache?",
            textZh: "好的。您想要综合症状的药，还是只治头疼的？",
            casualVersion: "Sure. You want something for everything, or just the headache?",
            formalityVariants: {
              casual: "Sure. Want something for everything, or just the headache?",
              standard: "Sure. Are you looking for something that treats multiple symptoms, or just the headache?",
              formal: "Certainly. Are you seeking a comprehensive multi-symptom relief medication, or primarily a solution for your headache?",
            },
            keyPhrases: [
              { en: "multiple symptoms", zh: "多种症状" },
              { en: "over-the-counter", zh: "非处方的" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn:
                  "What kind of symptoms are we dealing with? Do you need something that covers everything, or just for the headache?",
                textZh: "都有什么症状？你要管所有症状的还是只治头疼的？",
                actionHint: "说清楚全部症状",
                frequency: "common",
              },
              {
                textEn:
                  "Yeah, absolutely. Are you looking for an all-in-one thing, or do you just want something for the headache specifically?",
                textZh: "当然可以。你要一种管全部的，还是专门治头疼的？",
                actionHint: "选择综合药或单一药",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Something for everything, if possible. I also have a slight cough.",
            textZh: "最好什么都能治。我还有点咳嗽。",
            commonMistake: {
              wrong: "I want something for everything.",
              correct: "Something for everything, if possible.",
              explanation: "直接说\"I want\"听起来不太礼貌，用\"Something for everything\"更自然。",
            },
            casualVersion: "Yeah, everything if you got it. And a slight cough too.",
            formalityVariants: {
              casual: "Yeah, everything if you got it. And a slight cough too.",
              standard: "Something for everything, if possible. I also have a slight cough.",
              formal: "Ideally, a medication that addresses all symptoms would be preferable. I should also mention I have a mild cough.",
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn:
              "I'd recommend DayQuil for daytime — it covers congestion, headache, fever, and cough. For nighttime, NyQuil will help you sleep. Do you have any drug allergies?",
            textZh: "白天推荐 DayQuil——对鼻塞、头疼、发烧和咳嗽都有效。晚上用 NyQuil，帮助睡眠。您有药物过敏吗？",
            casualVersion: "DayQuil for day – hits congestion, headache, fever, cough. NyQuil for night, helps you sleep. Any allergies?",
            formalityVariants: {
              casual: "DayQuil for day – hits congestion, headache, fever, cough. NyQuil for night, helps you sleep. Any allergies?",
              standard: "I recommend DayQuil for daytime – it covers nasal congestion, headache, fever, and cough. For nighttime, NyQuil will help you sleep. Do you have any drug allergies?",
              formal: "I would recommend DayQuil for daytime use, as it effectively addresses nasal congestion, headache, fever, and cough. For evening, NyQuil is suggested to assist with sleep. Do you have any known drug allergies?",
            },
            variations: [
              {
                textEn:
                  "Try this multi-symptom cold relief. It has a decongestant, pain reliever, and cough suppressant. Are you on any other medications?",
                textZh: "试试这种综合感冒药。含有减充血剂、止痛药和止咳成分。您在吃其他药吗？",
              },
            ],
            keyPhrases: [
              { en: "congestion", zh: "鼻塞" },
              { en: "daytime / nighttime", zh: "白天用 / 夜用" },
              { en: "drug allergies", zh: "药物过敏" },
            ],
            responseTip: "一定要如实告知过敏和正在服用的其他药物",
            alternativeExpressions: [
              {
                textEn:
                  "I'd go with DayQuil for during the day and NyQuil at night. They'll cover pretty much everything — stuffiness, headache, fever, cough. Any allergies I should know about?",
                textZh: "白天推荐DayQuil，晚上NyQuil。基本什么都管——鼻塞、头疼、发烧、咳嗽。有什么过敏的吗？",
                actionHint: "告知过敏史",
                frequency: "common",
              },
              {
                textEn:
                  "For a cold with all those symptoms, a combo like DayQuil-NyQuil is your best bet. You on any other meds?",
                textZh: "这些症状的话，DayQuil-NyQuil 组合最合适。你在吃其他药吗？",
                actionHint: "说明其他用药",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm allergic to aspirin. And I'm not taking any other medication right now.",
            textZh: "我对阿司匹林过敏。目前没有在吃其他药。",
            commonMistake: {
              wrong: "I have allergy to aspirin.",
              correct: "I'm allergic to aspirin.",
              explanation: "\"allergic\"是形容词，后面用\"to\"接名词。",
            },
            casualVersion: "Allergic to aspirin. Not on anything else right now.",
            formalityVariants: {
              casual: "Allergic to aspirin. Not on anything else right now.",
              standard: "I'm allergic to aspirin. I'm not currently taking any other medications.",
              formal: "I have an allergy to aspirin. Furthermore, I am not currently taking any other medications.",
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn:
              "Good to know. DayQuil and NyQuil don't contain aspirin — they use acetaminophen instead, so you'll be fine. Just don't take more than the recommended dose, and avoid alcohol with NyQuil.",
            textZh:
              "了解。DayQuil 和 NyQuil 不含阿司匹林——用的是对乙酰氨基酚，所以没问题。注意不要超过推荐剂量，吃 NyQuil 时不要喝酒。",
            casualVersion: "Good. DayQuil and NyQuil don't have aspirin – it's acetaminophen, so you're good. Just don't go over the dose, and no booze with NyQuil.",
            formalityVariants: {
              casual: "Good. DayQuil and NyQuil don't have aspirin – it's acetaminophen, so you're good. Just don't go over the dose, and no booze with NyQuil.",
              standard: "Good to know. DayQuil and NyQuil don't contain aspirin – they use acetaminophen, so that's fine. Just be sure not to exceed the recommended dosage, and avoid alcohol when taking NyQuil.",
              formal: "Thank you for that information. DayQuil and NyQuil do not contain aspirin; they utilize acetaminophen, which is suitable. Please ensure you do not exceed the recommended dosage, and it is crucial to abstain from alcohol consumption while taking NyQuil.",
            },
            keyPhrases: [
              { en: "acetaminophen", zh: "对乙酰氨基酚" },
              { en: "recommended dose", zh: "推荐剂量" },
              { en: "avoid alcohol", zh: "不要喝酒" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You're good — no aspirin in either of those. They use Tylenol basically. Just don't go over the dosage on the box and skip the booze with NyQuil.",
                textZh: "放心——两种都不含阿司匹林。基本是泰诺成分。别超过盒子上的剂量，吃NyQuil的时候别喝酒。",
                actionHint: "按剂量服用",
                frequency: "common",
              },
              {
                textEn:
                  "Neither one has aspirin, so you'll be fine. The active ingredient is acetaminophen. Stick to the recommended dose and steer clear of alcohol.",
                textZh: "两种都没有阿司匹林，所以没问题。有效成分是对乙酰氨基酚。按推荐剂量吃，别碰酒。",
                actionHint: "注意剂量和忌酒",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. I'll take both. Also, do you have throat lozenges?",
            textZh: "明白了。两种都要。还有润喉含片吗？",
            commonMistake: {
              wrong: "I want both. Do you have throat lozenge?",
              correct: "I'll take both. Do you also have throat lozenges?",
              explanation: "\"I'll take both\"更自然，\"lozenge\"常用复数指代一类商品。",
            },
            casualVersion: "Got it. I'll grab both. You got any throat lozenges too?",
            formalityVariants: {
              casual: "Got it. I'll grab both. You got any throat lozenges too?",
              standard: "Got it. I'll take both. Do you also have any throat lozenges?",
              formal: "Understood. I would like to purchase both of those. Do you also carry any throat lozenges?",
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn:
              "Yes, aisle three on the left. We have Halls and Ricola. The Ricola honey-lemon ones are popular. Anything else?",
            textZh: "有的，左边第三排。我们有 Halls 和 Ricola。利口乐蜂蜜柠檬味的很受欢迎。还要别的吗？",
            casualVersion: "Yeah, aisle three on the left. Halls and Ricola. Honey-lemon Ricola's pretty popular. Anything else?",
            formalityVariants: {
              casual: "Yeah, aisle three on the left. Halls and Ricola. Honey-lemon Ricola's pretty popular. Anything else?",
              standard: "Yes, aisle three on the left. We have Halls and Ricola. The Ricola honey-lemon ones are popular. Anything else?",
              formal: "Yes, they are located in aisle three to your left. We stock both Halls and Ricola brands. The Ricola honey-lemon variety is quite popular. Is there anything further I can assist you with today?",
            },
            keyPhrases: [
              { en: "throat lozenges", zh: "润喉含片" },
              { en: "aisle", zh: "货架排/过道" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep, aisle three. The honey-lemon Ricola ones are really popular. Halls works too if you want something stronger.",
                textZh: "有的，第三排。蜂蜜柠檬的利口乐很受欢迎。想要劲大点的可以买Halls。",
                actionHint: "去第三排自取",
                frequency: "common",
              },
              {
                textEn:
                  "Sure, they're right over there in aisle three. We've got a bunch of brands — Ricola, Halls, Cepacol.",
                textZh: "有的，就在那边第三排。好几个牌子——利口乐、Halls、Cepacol。",
                actionHint: "选择喜欢的品牌",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's everything. How much is it altogether?",
            textZh: "就这些了。一共多少钱？",
            commonMistake: {
              wrong: "That's all. How much total?",
              correct: "That's all for now. How much is it in total?",
              explanation: "\"That's all for now\"更完整，问总价时加上\"is it in\"更自然。",
            },
            casualVersion: "That's it. How much?",
            formalityVariants: {
              casual: "That's it. How much?",
              standard: "That's all. How much will it be?",
              formal: "That will be all, thank you. What is the total cost?",
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn:
              "The DayQuil-NyQuil combo pack is $18.99 and the Ricola is $5.49. Your total is $24.48. Cash or card?",
            textZh: "DayQuil-NyQuil 组合装18.99美元，利口乐5.49美元。一共24.48美元。现金还是刷卡？",
            casualVersion: "DayQuil-NyQuil combo's $18.99, Ricola's $5.49. Total's $24.48. Cash or card?",
            formalityVariants: {
              casual: "DayQuil-NyQuil combo's $18.99, Ricola's $5.49. Total's $24.48. Cash or card?",
              standard: "The DayQuil-NyQuil combo pack is $18.99 and the Ricola is $5.49. Your total is $24.48. Cash or card?",
              formal: "The DayQuil-NyQuil combination package is $18.99, and the Ricola lozenges are $5.49. Your grand total will be $24.48. Will you be paying with cash or by card?",
            },
            keyPhrases: [
              { en: "combo pack", zh: "组合装" },
              { en: "total", zh: "总价" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Alright, the DayQuil-NyQuil combo is 18.99 and the lozenges are 5.49. That puts you at $24.48. Cash or card?",
                textZh: "好的，DayQuil-NyQuil组合18.99，含片5.49。一共24.48美元。现金还是刷卡？",
                actionHint: "选择支付方式",
                frequency: "common",
              },
              {
                textEn: "Let me ring that up for you... comes to $24.48 total. How would you like to pay?",
                textZh: "我帮你结账……总共24.48美元。怎么付？",
                actionHint: "付款",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Card, please. Thank you for your help.",
            textZh: "刷卡。谢谢你的帮助。",
            casualVersion: "Card. Thanks for the help.",
            formalityVariants: {
              casual: "Card. Thanks for the help.",
              standard: "Card, please. Thank you for your help.",
              formal: "I will be paying with a card, please. Thank you for your assistance.",
            },
          },
        ],
      },

      // --- Flow 2: 拿处方药 ---
      {
        id: "prescription",
        titleZh: "拿处方药",
        titleEn: "Filling a Prescription",
        description: "拿着医生的处方去药房取药",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have a prescription from my doctor. Can I get it filled here?",
            textZh: "你好，我有一张医生的处方。能在这里拿药吗？",
            casualVersion: "Hey, got a prescription from my doctor. Can I get it filled here?",
            commonMistake: {
              wrong: "Can I take medicine here?",
              correct: "Can I get it filled here?",
              explanation: "中文“拿药”对应的英文更常用“fill a prescription”。",
            },
            formalityVariants: {
              casual: "Hey, got a prescription from my doctor. Can I get it filled here?",
              standard: "Hi, I have a prescription from my doctor. Can I get it filled here?",
              formal: "Good morning/afternoon. I have a prescription from my physician. Would it be possible to have it filled at this establishment?",
            },
            culturalNote: '"fill a prescription" 是英语中去药房拿处方药的标准说法。',
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn:
              "Of course. Let me see the prescription... Tamiflu, 75 milligrams, twice daily for five days. Is this your first time filling a prescription here?",
            textZh: "当然。让我看看处方……达菲，75毫克，每日两次，连服五天。您是第一次在这里拿药吗？",
            casualVersion: "Sure. Lemme see the prescription... Tamiflu, 75mg, twice a day for five days. First time filling here?",
            formalityVariants: {
              casual: "Sure. Lemme see the prescription... Tamiflu, 75mg, twice a day for five days. First time filling here?",
              standard: "Of course. Let me see the prescription... Tamiflu, 75 milligrams, twice daily for five days. Is this your first time filling a prescription here?",
              formal: "Certainly. May I please see the prescription? It appears to be Tamiflu, 75 milligrams, to be taken twice daily for a duration of five days. Is this your initial prescription fill at our pharmacy?",
            },
            keyPhrases: [
              { en: "fill a prescription", zh: "拿处方药/配药" },
              { en: "milligrams", zh: "毫克" },
              { en: "twice daily", zh: "每日两次" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure thing. Let me pull that up... Tamiflu, 75 mg, twice a day for five days. Have you filled anything with us before?",
                textZh: "没问题。我看看……达菲，75毫克，每天两次，五天。你以前在我们这配过药吗？",
                actionHint: "说明是否首次",
                frequency: "common",
              },
              {
                textEn: "Let me take a look at that... Okay, Tamiflu 75 mg BID for five days. You a new patient here?",
                textZh: "我看一下……好的，达菲75毫克每日两次五天。你是新患者吗？",
                actionHint: "确认是否新患者",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, it's my first time. I'm visiting from overseas.",
            textZh: "是的，第一次。我从国外来旅游的。",
            commonMistake: {
              wrong: "Yes. I am traveling from abroad.",
              correct: "Yes, it is. I'm traveling from abroad.",
              explanation: "回答\"Is this your first time...\"用\"Yes, it is\"更自然。",
            },
            casualVersion: "Yeah, first time. I'm just traveling from out of the country.",
            formalityVariants: {
              casual: "Yeah, first time. I'm just traveling from out of the country.",
              standard: "Yes, it's my first time. I'm traveling from abroad.",
              formal: "Yes, this is my first visit. I am currently traveling from an international location.",
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn:
              "No problem. I'll need your name and date of birth. Do you have insurance, or will you be paying out of pocket?",
            textZh: "没问题。需要您的姓名和出生日期。您有保险还是自费？",
            casualVersion: "No problem. Need your name and birthdate. Got insurance or paying cash?",
            culturalNote: "在美国，药房通常会询问是否有医疗保险来支付部分药费。自费 (out of pocket) 很常见。",
            formalityVariants: {
              casual: "No problem. Need your name and birthdate. Got insurance or paying cash?",
              standard: "No problem. I'll need your name and date of birth. Do you have insurance, or will you be paying out of pocket?",
              formal: "Not a problem at all. I will require your full name and date of birth. Will you be utilizing insurance, or will this be an out-of-pocket payment?",
            },
            keyPhrases: [
              { en: "date of birth", zh: "出生日期" },
              { en: "paying out of pocket", zh: "自费" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn: "No worries. Just need your name and birthday. Are you paying cash or do you have insurance?",
                textZh: "没关系。只需要你的名字和生日。现金付还是有保险？",
                actionHint: "提供信息并说明支付方式",
                frequency: "common",
              },
              {
                textEn:
                  "That's fine. Can I get your name and date of birth? And will this be going through insurance or are you paying yourself?",
                textZh: "没问题。姓名和出生日期？走保险还是自费？",
                actionHint: "提供个人信息",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll be paying out of pocket. How much will it cost?",
            textZh: "自费。要多少钱？",
            casualVersion: "Out of pocket. How much?",
            commonMistake: {
              wrong: "I will pay myself.",
              correct: "I'll pay out of pocket.",
              explanation: "“我自费”地道表达是 “pay out of pocket” 或 “cash pay”。",
            },
            formalityVariants: {
              casual: "Out of pocket. How much?",
              standard: "I'll pay out of pocket. How much will it be?",
              formal: "I will be paying out of pocket. Could you please inform me of the total cost?",
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn:
              "Without insurance, a five-day course of Tamiflu is $95. We do have a generic version — oseltamivir — for $45. It's the same active ingredient. Would you prefer the generic?",
            textZh:
              "没有保险的话，五天的达菲是95美元。我们有仿制药版本——奥司他韦——45美元。有效成分一样。您要仿制药吗？",
            casualVersion: "No insurance, five days of Tamiflu is $95. We got a generic, oseltamivir, for $45. Same stuff. Want the generic?",
            formalityVariants: {
              casual: "No insurance, five days of Tamiflu is $95. We got a generic, oseltamivir, for $45. Same stuff. Want the generic?",
              standard: "Without insurance, a five-day course of Tamiflu is $95. We do have a generic version — oseltamivir — for $45. It's the same active ingredient. Would you prefer the generic?",
              formal: "Without insurance coverage, a five-day regimen of Tamiflu is $95. However, we do offer a generic equivalent, oseltamivir, for $45, which contains the identical active ingredient. Would you prefer the generic option?",
            },
            variations: [
              {
                textEn:
                  "The brand name is $95. The generic is $45 and works exactly the same way. Which would you like?",
                textZh: "原研药95美元。仿制药45美元，效果完全一样。您选哪个？",
              },
            ],
            keyPhrases: [
              { en: "generic version", zh: "仿制药" },
              { en: "active ingredient", zh: "有效成分" },
              { en: "brand name", zh: "原研药/品牌药" },
            ],
            culturalNote: "在美国，仿制药（generic）和原研药（brand name）成分一样但价格差很多。药剂师通常会主动推荐。",
            alternativeExpressions: [
              {
                textEn:
                  "So without insurance, the brand name Tamiflu runs $95. But we carry the generic — same exact drug, just $45. Wanna go with that instead?",
                textZh: "没保险的话，品牌达菲要95美元。不过我们有仿制药——完全一样的药，只要45美元。要这个吗？",
                actionHint: "选仿制药省钱",
                frequency: "common",
              },
              {
                textEn:
                  "Out of pocket, you're looking at $95 for the name brand. The generic's the same stuff though, and it's only $45.",
                textZh: "自费的话品牌药95美元。仿制药成分一样，只要45美元。",
                actionHint: "选择品牌或仿制",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, the generic is fine. As long as it works the same.",
            textZh: "好的，仿制药就行。只要效果一样。",
            commonMistake: {
              wrong: "Okay, generic is okay. As long as it works same.",
              correct: "Yes, the generic is fine. As long as it works the same.",
              explanation: "\"fine\"比\"okay\"更常用，\"the same\"更完整。",
            },
            casualVersion: "Yeah, generic's fine. As long as it works the same.",
            formalityVariants: {
              casual: "Yeah, generic's fine. As long as it works the same.",
              standard: "Yes, the generic is fine. As long as it works the same.",
              formal: "Yes, the generic version will be perfectly acceptable. My primary concern is that it retains the same efficacy.",
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn:
              "It'll be ready in about 10 minutes. I'll call your name. While you wait, do you have any questions about how to take it?",
            textZh: "大概10分钟准备好。到时候叫您名字。等的时候，对怎么服用有什么问题吗？",
            casualVersion: "Be about 10 minutes. I'll call your name. While you wait, got any questions on how to take it?",
            formalityVariants: {
              casual: "Be about 10 minutes. I'll call your name. While you wait, got any questions on how to take it?",
              standard: "It'll be about 10 minutes to prepare. I'll call your name when it's ready. While you wait, do you have any questions about how to take it?",
              formal: "It will take approximately 10 minutes to prepare. I will announce your name once it is ready. While you are waiting, do you have any inquiries regarding the administration of this medication?",
            },
            keyPhrases: [
              { en: "ready in about 10 minutes", zh: "大约10分钟准备好" },
              { en: "call your name", zh: "叫您名字" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Give me about 10 minutes to get this filled. I'll holler when it's ready. Got any questions about taking it?",
                textZh: "给我大约10分钟配好。好了叫你。对怎么吃有什么问题吗？",
                actionHint: "趁等药时提问",
                frequency: "common",
              },
              {
                textEn:
                  "Should be ready in 10. Feel free to browse around or grab a seat. Anything you wanna know about the medication?",
                textZh: "10分钟应该好了。可以逛逛或坐一会儿。关于这个药有什么想问的吗？",
                actionHint: "等候或咨询",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Should I take it with food?",
            textZh: "需要饭后吃吗？",
            commonMistake: {
              wrong: "Need take it with food?",
              correct: "Should I take it with food?",
              explanation: "问是否需要做某事，用\"Should I...\"更地道。",
            },
            casualVersion: "Take it with food?",
            formalityVariants: {
              casual: "Take it with food?",
              standard: "Should I take it with food?",
              formal: "Is it advisable to consume this medication with food?",
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn:
              "Yes, it's best to take it with food to avoid an upset stomach. One capsule in the morning with breakfast, one in the evening with dinner. Don't skip any doses.",
            textZh: "是的，最好随餐服用，避免胃部不适。早上早餐时一粒，晚上晚餐时一粒。不要漏服。",
            casualVersion: "Yeah, best with food so you don't get a stomachache. One with breakfast, one with dinner. Don't miss any.",
            formalityVariants: {
              casual: "Yeah, best with food so you don't get a stomachache. One with breakfast, one with dinner. Don't miss any.",
              standard: "Yes, it's best to take it with food to avoid an upset stomach. One capsule with breakfast in the morning, and one with dinner in the evening. Don't miss any doses.",
              formal: "Yes, it is recommended to take it with food to mitigate any potential gastrointestinal discomfort. Administer one capsule with breakfast in the morning and one with dinner in the evening. It is important to maintain consistent dosing.",
            },
            keyPhrases: [
              { en: "with food", zh: "随餐/饭后" },
              { en: "upset stomach", zh: "胃部不适" },
              { en: "capsule", zh: "胶囊" },
              { en: "skip any doses", zh: "漏服" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Definitely take it with food — otherwise it might upset your stomach. One with breakfast, one with dinner. And make sure you don't miss any doses.",
                textZh: "一定要随饭吃——不然可能会胃不舒服。早餐一粒晚餐一粒。别漏吃。",
                actionHint: "随餐服用",
                frequency: "common",
              },
              {
                textEn:
                  "Yeah, always with a meal. It can make you nauseous on an empty stomach. Morning and evening, don't skip any.",
                textZh: "对，一定要跟饭一起吃。空腹吃会恶心。早晚各一次，别漏吃。",
                actionHint: "勿空腹服用",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Understood. Could I also get a printed receipt? I need it for my travel insurance claim.",
            textZh: "明白了。能给我打印一张收据吗？我理赔旅行保险需要。",
            casualVersion: "Got it. Can I get a printed receipt too? Need it for my travel insurance claim.",
            commonMistake: {
              wrong: "Can you give me a receipt?",
              correct: "Could I get a receipt?",
              explanation: "直接说“give me”听起来不礼貌，用“get”或“have”更自然。",
            },
            formalityVariants: {
              casual: "Got it. Can I get a printed receipt too? Need it for my travel insurance claim.",
              standard: "Understood. Could I also get a printed receipt? I need it for my travel insurance claim.",
              formal: "Understood, thank you. Would it be possible to obtain a printed receipt as well? I require it for the purpose of my travel insurance claim.",
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn:
              "Sure, I'll include a detailed receipt with the medication name, dosage, and price. Your name — Wang? I'll call you when it's ready.",
            textZh: "当然，我会给您一张包含药名、剂量和价格的详细收据。您姓王？准备好了叫您。",
            casualVersion: "Sure, I'll give you a detailed receipt: name, dose, price. Last name? I'll call you when it's ready.",
            formalityVariants: {
              casual: "Sure, I'll give you a detailed receipt: name, dose, price. Last name? I'll call you when it's ready.",
              standard: "Sure, I'll provide you with a detailed receipt including the medication name, dosage, and price. What's your last name? I'll call you when it's ready.",
              formal: "Certainly, I will furnish you with a comprehensive receipt detailing the medication name, dosage, and price. May I please have your last name? I will call you when your prescription is prepared.",
            },
            keyPhrases: [
              { en: "detailed receipt", zh: "详细收据" },
              { en: "dosage", zh: "剂量" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Absolutely. I'll print you out a receipt with all the details — drug name, dose, price, everything. Wang, right? I'll call you when it's ready.",
                textZh: "当然。我给你打一张详细收据——药名、剂量、价格，全部。姓王对吧？好了叫你。",
                actionHint: "等候叫号",
                frequency: "common",
              },
              {
                textEn:
                  "No problem, I'll make sure the receipt has everything you need for your claim. Sit tight, I'll let you know when it's done.",
                textZh: "没问题，收据上会有理赔需要的所有信息。坐着等一下，好了我通知你。",
                actionHint: "等候取药",
                frequency: "common",
              },
            ],
          },
        ],
      },

      // --- Flow 3: 咨询药剂师 ---
      {
        id: "advice",
        titleZh: "咨询药剂师",
        titleEn: "Asking the Pharmacist for Advice",
        description: "向药剂师咨询副作用、剂量、药物相互作用等",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn:
              "Excuse me, I have a few questions about this medication I've been prescribed. Do you have a minute?",
            textZh: "不好意思，我对开的这个药有几个问题。您有时间吗？",
            commonMistake: {
              wrong: "Excuse me, I have some questions about this medicine. Do you have time?",
              correct: "Excuse me, I have a few questions about this medication I just picked up. Do you have a moment?",
              explanation: "\"a few questions\"更自然，\"I just picked up\"说明是刚拿的药，\"Do you have a moment\"更礼貌。",
            },
            casualVersion: "Hey, got some questions about this medication I just picked up. You got a minute?",
            formalityVariants: {
              casual: "Hey, got some questions about this medication I just picked up. You got a minute?",
              standard: "Excuse me, I have a few questions about this medication I just had filled. Do you have a moment?",
              formal: "Excuse me, I have a few inquiries regarding the medication I recently had filled. Would you happen to have a moment available?",
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Of course, I'm happy to help. Which medication are you asking about?",
            textZh: "当然，很乐意帮忙。您问的是哪种药？",
            casualVersion: "Sure, happy to help. Which med you talkin' about?",
            formalityVariants: {
              casual: "Sure, happy to help. Which med you talkin' about?",
              standard: "Of course, I'd be happy to help. Which medication are you referring to?",
              formal: "Certainly, I would be delighted to assist you. Could you please specify which medication you are referring to?",
            },
            alternativeExpressions: [
              {
                textEn: "Sure, fire away. What medication are you asking about?",
                textZh: "当然，问吧。你问的是哪种药？",
                actionHint: "说明具体药物",
                frequency: "common",
              },
              {
                textEn: "Yeah, what do you need to know? Which drug is it?",
                textZh: "好的，你想了解什么？哪种药？",
                actionHint: "告知药名",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "The doctor prescribed me amoxicillin for a sinus infection. What are the common side effects?",
            textZh: "医生给我开了阿莫西林治鼻窦炎。常见的副作用有哪些？",
            commonMistake: {
              wrong: "Doctor gave me amoxicillin for sinus infection. What is common side effect?",
              correct: "The doctor prescribed me amoxicillin for a sinus infection. What are the common side effects?",
              explanation: "\"prescribed me\"更专业，\"a sinus infection\"更地道，\"side effects\"常用复数。",
            },
            casualVersion: "My doctor gave me amoxicillin for a sinus infection. What're the usual side effects?",
            formalityVariants: {
              casual: "My doctor gave me amoxicillin for a sinus infection. What're the usual side effects?",
              standard: "The doctor prescribed me amoxicillin for a sinus infection. What are the common side effects?",
              formal: "My physician prescribed amoxicillin for a sinus infection. Could you please inform me of the common side effects associated with this medication?",
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn:
              "The most common side effects are nausea, diarrhea, and stomach pain. Taking it with food usually helps. Some people also get a rash — if that happens, stop taking it and call your doctor, because it could be an allergic reaction.",
            textZh:
              "最常见的副作用是恶心、腹泻和胃痛。随餐服用通常会好一些。有些人会出皮疹——如果出现，停药并打电话给医生，因为可能是过敏反应。",
            casualVersion: "Most common's nausea, diarrhea, stomach pain. Taking it with food usually helps. Some people get a rash — if that happens, stop taking it and call your doctor, 'cause it could be an allergic reaction.",
            formalityVariants: {
              casual: "Most common's nausea, diarrhea, stomach pain. Taking it with food usually helps. Some people get a rash — if that happens, stop taking it and call your doctor, 'cause it could be an allergic reaction.",
              standard: "The most common side effects are nausea, diarrhea, and stomach pain. Taking it with food usually helps. Some people also get a rash — if that happens, stop taking it and call your doctor, because it could be an allergic reaction.",
              formal: "The most frequently reported side effects include nausea, diarrhea, and abdominal pain. Administering the medication with food often alleviates these symptoms. A rash may also occur in some individuals; should this happen, discontinue use immediately and contact your physician, as it may indicate an allergic reaction.",
            },
            keyPhrases: [
              { en: "side effects", zh: "副作用" },
              { en: "nausea", zh: "恶心" },
              { en: "diarrhea", zh: "腹泻" },
              { en: "rash", zh: "皮疹" },
              { en: "allergic reaction", zh: "过敏反应" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "With amoxicillin, the main things to watch for are nausea, diarrhea, maybe some stomach cramps. Eating with it helps. If you break out in a rash, stop right away and call your doctor — could be an allergy.",
                textZh:
                  "吃阿莫西林主要注意恶心、腹泻，可能还有胃痉挛。跟饭一起吃会好一些。如果起皮疹了，马上停药打电话给医生——可能是过敏。",
                actionHint: "注意观察副作用",
                frequency: "common",
              },
              {
                textEn:
                  "Most people get a little stomach upset — nausea, loose stools. Take it with food and you should be okay. But if you get any kind of rash or hives, that's a red flag — stop taking it immediately.",
                textZh:
                  "大多数人会有点胃部不适——恶心、稀便。随饭吃应该没事。但如果出皮疹或荨麻疹，那就是危险信号——立刻停药。",
                actionHint: "随餐服用减少副作用",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm also taking ibuprofen for pain. Is it safe to take both together?",
            textZh: "我还在吃布洛芬止痛。两种药一起吃安全吗？",
            casualVersion: "Also taking ibuprofen for pain. Safe to take both?",
            commonMistake: {
              wrong: "Can I eat two medicines together?",
              correct: "Can I take both medications together?",
              explanation: "中文“吃药”对应的英文是“take medicine”，而不是“eat medicine”。",
            },
            formalityVariants: {
              casual: "Also taking ibuprofen for pain. Safe to take both?",
              standard: "I'm also taking ibuprofen for pain. Is it safe to take both medications together?",
              formal: "I am also currently taking ibuprofen for pain management. Is it safe to concurrently administer both medications?",
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn:
              "Yes, amoxicillin and ibuprofen don't interact with each other. That combination is safe. However, avoid taking amoxicillin with antacids — they can reduce absorption. And definitely no alcohol while you're on the antibiotic.",
            textZh:
              "是的，阿莫西林和布洛芬不会相互作用。这个组合是安全的。不过，不要和胃药一起吃——会降低吸收。吃抗生素期间绝对不要喝酒。",
            casualVersion: "Yeah, amoxicillin and ibuprofen don't mix. Totally safe. But don't take it with antacids – messes with absorption. And absolutely no alcohol on antibiotics.",
            formalityVariants: {
              casual: "Yeah, amoxicillin and ibuprofen don't mix. Totally safe. But don't take it with antacids – messes with absorption. And absolutely no alcohol on antibiotics.",
              standard: "Yes, amoxicillin and ibuprofen don't interact. This combination is safe. However, avoid taking it with antacids, as it can reduce absorption. And absolutely no alcohol while on antibiotics.",
              formal: "Yes, amoxicillin and ibuprofen do not exhibit adverse drug interactions; this combination is considered safe. However, it is important to avoid co-administration with antacids, as this can impede absorption. Furthermore, total abstinence from alcohol is advised while undergoing antibiotic therapy.",
            },
            keyPhrases: [
              { en: "interact", zh: "相互作用" },
              { en: "antacids", zh: "胃药/抗酸药" },
              { en: "reduce absorption", zh: "降低吸收" },
              { en: "antibiotic", zh: "抗生素" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn:
                  "Yep, those two are fine together, no interaction. Just don't mix the amoxicillin with antacids — they mess with absorption. And stay away from alcohol while you're on it.",
                textZh: "对，这两种一起吃没问题，不冲突。就是阿莫西林别跟胃药一起吃——会影响吸收。还有吃药期间别喝酒。",
                actionHint: "避免胃药和酒",
                frequency: "common",
              },
              {
                textEn:
                  "Those are totally safe to take at the same time. The only things to avoid with amoxicillin are antacids and booze.",
                textZh: "两种同时吃完全安全。跟阿莫西林要避开的就是胃药和酒。",
                actionHint: "注意忌口",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. If I miss a dose, should I double up the next time?",
            textZh: "了解了。如果漏吃了一次，下次需要加倍吗？",
            casualVersion: "Got it. Miss a dose, should I double up next time?",
            commonMistake: {
              wrong: "If I forget to eat one dose, should I eat two doses next time?",
              correct: "If I miss a dose, should I double up the next time?",
              explanation: "“漏服”是“miss a dose”，“加倍剂量”是“double up the dose”。",
            },
            formalityVariants: {
              casual: "Got it. Miss a dose, should I double up next time?",
              standard: "Good to know. If I miss a dose, should I double up the next time?",
              formal: "Thank you for that information. If I inadvertently miss a dose, would it be appropriate to take a double dose subsequently?",
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn:
              "No, never double up. If you miss a dose, take it as soon as you remember — unless it's almost time for the next dose, in which case just skip the missed one. The most important thing is to finish the entire course, even if you feel better after a few days.",
            textZh:
              "不，千万不要加倍。如果漏吃了，想起来就马上吃——除非快到下一次吃药的时间了，那就跳过漏掉的那次。最重要的是要把整个疗程吃完，即使吃了几天就感觉好了。",
            casualVersion: "Nah, never double up. Miss a dose, take it when you remember – unless it's almost time for the next one, then just skip it. Main thing is to finish the whole course, even if you feel better quick.",
            formalityVariants: {
              casual: "Nah, never double up. Miss a dose, take it when you remember – unless it's almost time for the next one, then just skip it. Main thing is to finish the whole course, even if you feel better quick.",
              standard: "No, never double up. If you miss a dose, take it as soon as you remember — unless it's almost time for your next dose, in which case skip the missed one. The most important thing is to finish the entire course, even if you feel better after a few days.",
              formal: "No, under no circumstances should you double up on a dose. If a dose is missed, take it promptly upon recollection, unless it is nearly time for your subsequent scheduled dose, in which case you should omit the missed dose. The paramount objective is to complete the entire prescribed course of medication, even if symptomatic improvement occurs within a few days.",
            },
            keyPhrases: [
              { en: "never double up", zh: "千万不要加倍" },
              { en: "miss a dose", zh: "漏吃一次" },
              { en: "skip the missed one", zh: "跳过漏掉的那次" },
              { en: "finish the entire course", zh: "吃完整个疗程" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Nope, don't double up. If you miss one, just take it when you remember. But if it's almost time for the next one, just skip it and move on. And whatever you do, finish the whole course.",
                textZh:
                  "不要加倍。如果漏了一次，想起来就吃。但如果快到下一次了，就跳过漏的那次。不管怎样，一定要把整个疗程吃完。",
                actionHint: "漏服不加倍",
                frequency: "common",
              },
              {
                textEn:
                  "Never take a double dose. Just pick up where you left off. The biggest thing is — don't quit early even if you feel great. Finish all of it.",
                textZh: "千万别吃双倍量。接着吃就行。最重要的是——就算感觉好了也别提前停。全部吃完。",
                actionHint: "完成全部疗程",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How should I store it? I'm traveling and my hotel room can get warm.",
            textZh: "怎么保存？我在旅游，酒店房间有时候比较热。",
            commonMistake: {
              wrong: "How to store it? My hotel room sometimes is warm.",
              correct: "How should I store it? I'm traveling, and my hotel room can sometimes be quite warm.",
              explanation: "\"How should I...\"更自然，\"can sometimes be quite warm\"描述更生动。",
            },
            casualVersion: "How should I store it? I'm traveling, and my hotel room gets pretty warm sometimes.",
            formalityVariants: {
              casual: "How should I store it? I'm traveling, and my hotel room gets pretty warm sometimes.",
              standard: "How should I store it? I'm traveling, and my hotel room can sometimes get quite warm.",
              formal: "What are the recommended storage instructions for this medication? I am currently traveling, and my hotel accommodations can occasionally experience elevated temperatures.",
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn:
              "Keep it at room temperature, below 25 degrees Celsius. Don't leave it in direct sunlight or in a hot car. If your hotel room gets too warm, you can store it in the minibar — just don't freeze it.",
            textZh:
              "室温保存，25摄氏度以下。不要放在阳光直射的地方或者高温的车里。如果酒店房间太热，可以放在迷你吧里——但不要冷冻。",
            casualVersion: "Room temp, under 25 Celsius. Don't leave it in direct sun or a hot car. Hotel room too warm, stick it in the mini-fridge – but no freezing.",
            formalityVariants: {
              casual: "Room temp, under 25 Celsius. Don't leave it in direct sun or a hot car. Hotel room too warm, stick it in the mini-fridge – but no freezing.",
              standard: "Keep it at room temperature, below 25 degrees Celsius. Don't leave it in direct sunlight or a hot car. If your hotel room is too warm, you can put it in the mini-fridge – but don't freeze it.",
              formal: "Please store it at room temperature, ideally below 25 degrees Celsius. Avoid exposure to direct sunlight or elevated temperatures, such as within a hot vehicle. If your hotel room is excessively warm, you may place it in a mini-refrigerator, but under no circumstances should it be frozen.",
            },
            keyPhrases: [
              { en: "room temperature", zh: "室温" },
              { en: "direct sunlight", zh: "阳光直射" },
              { en: "don't freeze", zh: "不要冷冻" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Just keep it at room temp — under 25°C or so. Out of the sun, not in a hot car. If your room gets stuffy, stick it in the minibar fridge, but don't freeze it.",
                textZh: "室温保存就行——25度以下左右。别晒太阳，别放热车里。房间太闷的话放迷你吧冰箱，但别冻。",
                actionHint: "妥善保存药物",
                frequency: "common",
              },
              {
                textEn:
                  "Room temperature is fine. Just keep it away from heat and sunlight. The hotel minibar works in a pinch, just make sure it doesn't freeze.",
                textZh: "室温就行。远离高温和阳光就好。应急可以放酒店迷你吧，别冻就行。",
                actionHint: "避免高温存放",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's very helpful. Thank you for taking the time to explain everything.",
            textZh: "非常有帮助。谢谢您花时间解释这些。",
            commonMistake: {
              wrong: "That is very help. Thank you for explain these.",
              correct: "That's very helpful. Thank you for taking the time to explain all of this.",
              explanation: "\"helpful\"是形容词，\"taking the time to explain all of this\"更完整自然。",
            },
            casualVersion: "Super helpful. Thanks for explaining all this.",
            formalityVariants: {
              casual: "Super helpful. Thanks for explaining all this.",
              standard: "That's very helpful. Thank you for taking the time to explain all of this.",
              formal: "That information is exceptionally helpful. I truly appreciate you taking the time to provide such a thorough explanation.",
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn:
              "You're welcome. If you have any concerns while taking the medication, don't hesitate to come back or call us. We're open until 9 PM every day.",
            textZh: "不客气。吃药期间如果有任何问题，随时回来或打电话。我们每天营业到晚上9点。",
            casualVersion: "No problem. Any other questions while you're taking it, just come back or call. We're open 'til 9 PM every day.",
            formalityVariants: {
              casual: "No problem. Any other questions while you're taking it, just come back or call. We're open 'til 9 PM every day.",
              standard: "You're welcome. If you have any further questions during your treatment, please don't hesitate to come back or call. We're open until 9 PM daily.",
              formal: "You are most welcome. Should any additional questions or concerns arise during your course of treatment, please do not hesitate to return to the pharmacy or contact us by telephone. Our operating hours are until 9 PM daily.",
            },
            keyPhrases: [
              { en: "don't hesitate", zh: "不要犹豫/随时" },
              { en: "concerns", zh: "担心/疑虑" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Anytime! If anything comes up while you're taking it, swing by or give us a ring. We're here till 9 every night.",
                textZh: "随时来！吃药期间有任何问题，过来或打电话。我们每晚营业到9点。",
                actionHint: "记住药房电话",
                frequency: "common",
              },
              {
                textEn:
                  "Happy to help. Don't be a stranger — if something doesn't feel right while you're on the meds, just come back. We close at 9.",
                textZh: "很高兴能帮上忙。有什么不对劲就回来——我们9点关门。",
                actionHint: "有问题及时回来咨询",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 急诊 ====================
  {
    id: "medical-emergency",
    tags: ["emergency", "急诊", "ER", "ambulance"],
    category: "medical",
    titleZh: "急诊",
    titleEn: "Emergency Room",
    description: "去急诊室，包括到达登记和帮助同伴就医",
    otherRole: "医护人员",
    otherRoleIcon: "ambulance",
    flows: [
      // --- Flow 1: 到达急诊 ---
      {
        id: "arrival",
        titleZh: "到达急诊",
        titleEn: "Arriving at the ER",
        description: "自己到急诊室，描述情况、登记、等待分诊",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I need help. I'm having severe chest pain and I feel dizzy.",
            textZh: "我需要帮助。我胸口剧烈疼痛，还感到头晕。",
            culturalNote: "急诊会根据严重程度分诊（triage）。胸痛通常被列为高优先级，会更快得到处理。",
            casualVersion: "Need help. Got really bad chest pain, and I'm super dizzy.",
            commonMistake: {
              wrong: "I have severe chest pain",
              correct: "I'm having severe chest pain",
              explanation: "描述持续或正在发生的症状时，常用现在进行时。",
            },
            formalityVariants: {
              casual: "Need help. Got really bad chest pain, and I'm super dizzy.",
              standard: "I need help. I'm having severe chest pain and I feel dizzy.",
              formal:
                "Excuse me, I require immediate assistance. I am experiencing significant chest pain and a sensation of dizziness.",
            },
          },
          {
            speaker: "them",
            role: "护士",
            textEn:
              "Okay, I need you to sit down right here. When did the chest pain start? Can you describe it — is it sharp, dull, or pressure-like?",
            textZh: "好的，请先坐在这里。胸痛什么时候开始的？能描述一下吗——是尖锐的痛、钝痛，还是有压迫感？",
            variations: [
              {
                textEn:
                  "Stay calm. We're going to take care of you. Tell me — when did this start, and on a scale of 1 to 10, how bad is the pain?",
                textZh: "保持冷静。我们会照顾你。告诉我——什么时候开始的，疼痛从1到10打几分？",
              },
            ],
            keyPhrases: [
              { en: "chest pain", zh: "胸痛" },
              { en: "sharp", zh: "尖锐的痛" },
              { en: "dull", zh: "钝痛" },
              { en: "pressure-like", zh: "有压迫感的" },
              { en: "dizzy", zh: "头晕" },
            ],
            responseTip: "尽量准确描述疼痛的位置、类型和严重程度",
            alternativeExpressions: [
              {
                textEn:
                  "Okay, sit right here for me. Tell me what's going on — when did the pain start and what does it feel like? Sharp? Squeezing?",
                textZh: "好的，先坐这儿。告诉我怎么回事——什么时候开始疼的，什么感觉？刺痛？挤压感？",
                actionHint: "描述疼痛类型",
                frequency: "common",
              },
              {
                textEn:
                  "Take a seat. I need you to tell me exactly what you're feeling and when it started. Rate the pain 1 to 10 for me.",
                textZh: "坐下。我需要你告诉我具体感觉和什么时候开始的。疼痛1到10打几分。",
                actionHint: "给疼痛评分",
                frequency: "common",
              },
            ],
            casualVersion:
              "Alright, just sit here. When'd the chest pain start? What's it feel like — sharp, dull, or like pressure?",
            commonMistake: {
              wrong: "How to describe it?",
              correct: "Can you describe it?",
              explanation: "直接问“How to...”不自然，用 Can you... 更地道。",
            },
            formalityVariants: {
              casual:
                "Alright, just sit here. When'd the chest pain start? What's it feel like — sharp, dull, or like pressure?",
              standard:
                "Okay, I need you to sit down right here. When did the chest pain start? Can you describe it — is it sharp, dull, or pressure-like?",
              formal:
                "Please have a seat here. Could you please inform me when the chest pain commenced? And would you be able to describe its nature—specifically, if it is sharp, dull, or a sensation of pressure?",
            },
          },
          {
            speaker: "you",
            textEn:
              "It started about an hour ago. It feels like pressure, right here in the center of my chest. The pain is about a 7 out of 10.",
            textZh: "大约一小时前开始的。感觉是压迫感，就在胸口正中间。疼痛大概7分。",
            casualVersion:
              "Started 'bout an hour ago. Feels like pressure, right in the middle of my chest. Pain's like a 7 outta 10.",
            culturalNote: "美国急诊常使用1-10分制来评估疼痛程度，中国患者可能不熟悉。",
            commonMistake: {
              wrong: "It's about one hour ago.",
              correct: "It started about an hour ago.",
              explanation: "描述事件发生时间点，用“started...ago”或“happened...ago”。",
            },
            formalityVariants: {
              casual:
                "Started 'bout an hour ago. Feels like pressure, right in the middle of my chest. Pain's like a 7 outta 10.",
              standard:
                "It started about an hour ago. It feels like pressure, right here in the center of my chest. The pain is about a 7 out of 10.",
              formal:
                "The onset occurred approximately one hour ago. I perceive it as a pressure sensation, located centrally in my chest. On a scale of one to ten, I would rate the pain's intensity as a seven.",
            },
          },
          {
            speaker: "them",
            role: "护士",
            textEn:
              "Does the pain spread anywhere — to your arm, jaw, or back? Have you had any nausea, shortness of breath, or sweating?",
            textZh: "疼痛有没有扩散到其他地方——手臂、下巴或背部？有没有恶心、呼吸急促或出汗？",
            keyPhrases: [
              { en: "spread", zh: "扩散" },
              { en: "jaw", zh: "下巴" },
              { en: "shortness of breath", zh: "呼吸急促" },
              { en: "sweating", zh: "出汗" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Is the pain going anywhere else — down your arm, into your neck or jaw? Any trouble breathing or have you been feeling nauseous?",
                textZh: "疼痛有没有放射到其他地方——胳膊、脖子或下巴？呼吸困难或恶心吗？",
                actionHint: "仔细感受并回答",
                frequency: "common",
              },
              {
                textEn:
                  "Does it radiate? Like to your left arm or your back? And are you short of breath or sweating at all?",
                textZh: "有没有放射痛？比如左胳膊或后背？有没有喘不上气或出汗？",
                actionHint: "描述伴随症状",
                frequency: "common",
              },
            ],
            casualVersion:
              "Pain spreading anywhere — like to your arm, jaw, or back? Any nausea, short of breath, or sweating?",
            commonMistake: {
              wrong: "Have you any nausea?",
              correct: "Have you had any nausea?",
              explanation: "询问过去发生过的症状，用现在完成时“Have you had...?”。",
            },
            formalityVariants: {
              casual:
                "Pain spreading anywhere — like to your arm, jaw, or back? Any nausea, short of breath, or sweating?",
              standard:
                "Does the pain spread anywhere — to your arm, jaw, or back? Have you had any nausea, shortness of breath, or sweating?",
              formal:
                "Is the pain radiating to any other areas, such as your arm, jaw, or back? Furthermore, have you experienced any symptoms such as nausea, dyspnea, or diaphoresis?",
            },
          },
          {
            speaker: "you",
            textEn: "My left arm feels a bit numb. And yes, I've been sweating a lot.",
            textZh: "左胳膊有点麻。是的，一直在出很多汗。",
            casualVersion: "Left arm feels kinda numb. And yeah, been sweating a ton.",
            commonMistake: {
              wrong: "My left arm feels little numb.",
              correct: "My left arm feels a bit numb.",
              explanation: "“little”常指数量少，“a bit”或“a little”指程度，更自然。",
            },
            formalityVariants: {
              casual: "Left arm feels kinda numb. And yeah, been sweating a ton.",
              standard: "My left arm feels a bit numb. And yes, I've been sweating a lot.",
              formal: "I'm experiencing some numbness in my left arm. Additionally, I have been perspiring profusely.",
            },
          },
          {
            speaker: "them",
            role: "护士",
            textEn:
              "We're going to get you in right away. I'm putting you on a heart monitor and we'll do an EKG immediately. Do you have any medical conditions — heart disease, diabetes, high blood pressure?",
            textZh: "我们马上让你进去。给你接上心脏监测仪，立刻做心电图。你有什么基础疾病吗——心脏病、糖尿病、高血压？",
            keyPhrases: [
              { en: "heart monitor", zh: "心脏监测仪" },
              { en: "EKG", zh: "心电图" },
              { en: "medical conditions", zh: "基础疾病" },
              { en: "high blood pressure", zh: "高血压" },
              { en: "diabetes", zh: "糖尿病" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We're taking you straight back. Getting you hooked up to a monitor and running an EKG right now. Any history of heart problems, diabetes, or blood pressure issues?",
                textZh: "我们马上带你进去。现在给你接上监测仪做心电图。有心脏病、糖尿病或血压问题的病史吗？",
                actionHint: "如实告知病史",
                frequency: "common",
              },
              {
                textEn:
                  "Okay, you're going in right now. We'll get an EKG going immediately. Do you have any pre-existing conditions I should know about?",
                textZh: "好的，你现在就进去。我们马上做心电图。有什么我应该知道的基础疾病吗？",
                actionHint: "告知既往病史",
                frequency: "common",
              },
            ],
            casualVersion:
              "Gonna get you in right away. Putting you on a heart monitor, do an EKG pronto. Got any medical conditions — heart disease, diabetes, high blood pressure?",
            commonMistake: {
              wrong: "Do you have any diseases?",
              correct: "Do you have any medical conditions?",
              explanation: "“disease”听起来太直接，用“medical conditions”更委婉、专业。",
            },
            formalityVariants: {
              casual:
                "Gonna get you in right away. Putting you on a heart monitor, do an EKG pronto. Got any medical conditions — heart disease, diabetes, high blood pressure?",
              standard:
                "We're going to get you in right away. I'm putting you on a heart monitor and we'll do an EKG immediately. Do you have any medical conditions — heart disease, diabetes, high blood pressure?",
              formal:
                "We shall proceed with your admission without delay. I will connect you to a cardiac monitor, and an electrocardiogram will be performed immediately. Do you have any pre-existing medical conditions, such as cardiac disease, diabetes, or hypertension?",
            },
          },
          {
            speaker: "you",
            textEn:
              "I have high blood pressure. I take medication for it, but I forgot to bring it on this trip. I haven't taken it in three days.",
            textZh: "我有高血压。在吃药，但这次旅行忘带了。已经三天没吃了。",
            casualVersion:
              "Got high blood pressure. Take meds for it, but forgot to bring 'em this trip. Haven't taken 'em in three days.",
            commonMistake: {
              wrong: "I take medicine for it.",
              correct: "I take medication for it.",
              explanation: "“medicine”可指药物本身或医学，“medication”特指治疗用的药。",
            },
            formalityVariants: {
              casual:
                "Got high blood pressure. Take meds for it, but forgot to bring 'em this trip. Haven't taken 'em in three days.",
              standard:
                "I have high blood pressure. I take medication for it, but I forgot to bring it on this trip. I haven't taken it in three days.",
              formal:
                "I have a history of hypertension. I am prescribed medication for this condition; however, I inadvertently omitted to pack it for this journey. Consequently, I have not taken it for the past three days.",
            },
          },
          {
            speaker: "them",
            role: "护士",
            textEn: "That's very important information. Do you know the name of the medication and the dosage?",
            textZh: "这个信息非常重要。你知道药名和剂量吗？",
            keyPhrases: [
              { en: "name of the medication", zh: "药名" },
              { en: "dosage", zh: "剂量" },
            ],
            alternativeExpressions: [
              {
                textEn: "That's crucial. Do you remember the name of what you take and how much?",
                textZh: "这很关键。你记得你吃的药叫什么、吃多少吗？",
                actionHint: "回忆药名和剂量",
                frequency: "common",
              },
              {
                textEn: "Okay, that's really important. What's the medication called, and what's your dose?",
                textZh: "好的，这很重要。药叫什么名字？剂量多少？",
                actionHint: "提供药物信息",
                frequency: "common",
              },
            ],
            casualVersion: "That's super important. Know the med name and dosage?",
            commonMistake: {
              wrong: "Do you know the name of medicine?",
              correct: "Do you know the name of the medication?",
              explanation: "同上，“medication”更精确。",
            },
            formalityVariants: {
              casual: "That's super important. Know the med name and dosage?",
              standard: "That's very important information. Do you know the name of the medication and the dosage?",
              formal:
                "That is critical information. Could you please provide the name of the medication and its prescribed dosage?",
            },
          },
          {
            speaker: "you",
            textEn: "Lisinopril, 10 milligrams, once a day.",
            textZh: "赖诺普利，10毫克，每天一次。",
            casualVersion: "Lisinopril, 10 mg, once a day.",
            commonMistake: {
              wrong: "10 milligram",
              correct: "10 milligrams",
              explanation: "数字大于1时，单位用复数。",
            },
            formalityVariants: {
              casual: "Lisinopril, 10 mg, once a day.",
              standard: "Lisinopril, 10 milligrams, once a day.",
              formal: "It is Lisinopril, 10 milligrams, to be taken once daily.",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "Hi, I'm Dr. Chen. We're doing an EKG and drawing blood right now. Your blood pressure is elevated at 170 over 100, which is likely related to missing your medication. We need to rule out a heart attack. I'm going to give you aspirin and nitroglycerin under your tongue to help with the chest pain. Are you allergic to any medications?",
            textZh:
              "你好，我是陈医生。我们正在做心电图和抽血。你的血压升高了，170/100，可能和停药有关。我们需要排除心脏病发作。我会给你阿司匹林和舌下含服硝酸甘油来缓解胸痛。你对什么药物过敏吗？",
            keyPhrases: [
              { en: "blood pressure is elevated", zh: "血压升高" },
              { en: "rule out", zh: "排除" },
              { en: "heart attack", zh: "心脏病发作" },
              { en: "aspirin", zh: "阿司匹林" },
              { en: "nitroglycerin", zh: "硝酸甘油" },
              { en: "under your tongue", zh: "舌下含服" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I'm Dr. Chen. We've got the EKG running and blood drawn. Your BP is way up — 170 over 100 — probably because you missed your meds. We need to make sure this isn't a heart attack. I'm giving you aspirin and nitro under the tongue. Any drug allergies?",
                textZh:
                  "我是陈医生。心电图正在做，血也抽了。你血压很高——170/100——可能是因为停药了。我们要排除心梗。现在给你阿司匹林和舌下含硝酸甘油。有药物过敏吗？",
                actionHint: "告知过敏信息",
                frequency: "common",
              },
              {
                textEn:
                  "Hi, Dr. Chen here. EKG and labs are in progress. Blood pressure's at 170/100, which makes sense if you haven't taken your meds in three days. We gotta rule out a cardiac event. Gonna start you on aspirin and some nitro. You allergic to anything?",
                textZh:
                  "你好，我是陈医生。心电图和化验正在进行。血压170/100，三天没吃药的话说得通。我们得排除心脏事件。先给你阿司匹林和硝酸甘油。你对什么过敏吗？",
                actionHint: "如实告知过敏史",
                frequency: "common",
              },
            ],
            casualVersion:
              "Hey, I'm Dr. Chen. Doing an EKG, drawing blood now. BP's high, 170 over 100, probably 'cause you missed your meds. Gotta rule out a heart attack. Gonna give you aspirin and nitro under your tongue for the chest pain. Any allergies?",
            culturalNote: "医生会直接告知病情和治疗计划，病人有问题可以直接问，不需要过分客套。",
            commonMistake: {
              wrong: "Are you sensitive to any medicine?",
              correct: "Are you allergic to any medications?",
              explanation: "“过敏”是 allergic，“sensitive”通常指敏感但非过敏。",
            },
            formalityVariants: {
              casual:
                "Hey, I'm Dr. Chen. Doing an EKG, drawing blood now. BP's high, 170 over 100, probably 'cause you missed your meds. Gotta rule out a heart attack. Gonna give you aspirin and nitro under your tongue for the chest pain. Any allergies?",
              standard:
                "Hi, I'm Dr. Chen. We're doing an EKG and drawing blood right now. Your blood pressure is elevated at 170 over 100, which is likely related to missing your medication. We need to rule out a heart attack. I'm going to give you aspirin and nitroglycerin under your tongue to help with the chest pain. Are you allergic to any medications?",
              formal:
                "Good evening, I am Dr. Chen. We are currently performing an electrocardiogram and phlebotomy. Your blood pressure is elevated to 170 over 100, which is likely attributable to your missed medication doses. It is imperative that we exclude a myocardial infarction. I shall administer aspirin and sublingual nitroglycerin to alleviate your chest discomfort. Do you have any known medication allergies?",
            },
          },
          {
            speaker: "you",
            textEn: "No, no allergies. Please, do whatever you need to do.",
            textZh: "没有，不过敏。请做需要做的一切。",
            casualVersion: "Nah, no allergies. Just do what you gotta do.",
            commonMistake: {
              wrong: "No allergy.",
              correct: "No allergies.",
              explanation: "指没有过敏情况，通常用复数形式“allergies”。",
            },
            formalityVariants: {
              casual: "Nah, no allergies. Just do what you gotta do.",
              standard: "No, no allergies. Please, do whatever you need to do.",
              formal: "No, I do not have any known allergies. Please proceed with the necessary medical interventions.",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "We're taking good care of you. Try to stay calm and breathe slowly. We'll have the results in about 15 minutes. Is there someone we should contact — a family member or a travel companion?",
            textZh:
              "我们会好好照顾你。尽量保持冷静，慢慢呼吸。大约15分钟会有结果。有没有需要我们联系的人——家人或同行旅伴？",
            keyPhrases: [
              { en: "stay calm", zh: "保持冷静" },
              { en: "breathe slowly", zh: "慢慢呼吸" },
              { en: "travel companion", zh: "同行旅伴" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You're in good hands. Just try to relax and take slow, deep breaths. We should have results pretty soon. Is there anyone we should call for you?",
                textZh: "你交给我们了。尽量放松，慢慢深呼吸。结果很快出来。需要我们帮你联系谁吗？",
                actionHint: "提供紧急联系人",
                frequency: "common",
              },
              {
                textEn:
                  "Hang in there. We're running all the tests. Just breathe nice and slow. Anybody you want us to get in touch with — family, friend?",
                textZh: "撑住。我们在做所有检查。慢慢呼吸就好。需要我们联系谁吗——家人、朋友？",
                actionHint: "告知联系人信息",
                frequency: "common",
              },
            ],
            casualVersion:
              "We got you. Try to stay calm, breathe slow. Results in like 15 mins. Anyone we should call — family or travel buddy?",
            culturalNote: "在急诊室询问紧急联系人是很标准的流程，不是额外担忧。",
            commonMistake: {
              wrong: "Who should we contact?",
              correct: "Is there someone we should contact?",
              explanation: "直接问“who”显得生硬，用“Is there someone”更委婉。",
            },
            formalityVariants: {
              casual:
                "We got you. Try to stay calm, breathe slow. Results in like 15 mins. Anyone we should call — family or travel buddy?",
              standard:
                "We're taking good care of you. Try to stay calm and breathe slowly. We'll have the results in about 15 minutes. Is there someone we should contact — a family member or a travel companion?",
              formal:
                "We are providing you with comprehensive care. Please endeavor to remain calm and regulate your breathing. The results should be available within approximately fifteen minutes. Is there anyone we should contact on your behalf, such as a family member or travel companion?",
            },
          },
          {
            speaker: "you",
            textEn: "My wife is at the hotel. Her number is... Can someone call her for me?",
            textZh: "我太太在酒店。她的号码是……能帮我打给她吗？",
            casualVersion: "My wife's at the hotel. Her number's... Can someone call her?",
            commonMistake: {
              wrong: "Can you help me call her?",
              correct: "Can someone call her for me?",
              explanation: "“help me call”听起来像需要帮忙操作电话，而“call her for me”是请求代打电话。",
            },
            formalityVariants: {
              casual: "My wife's at the hotel. Her number's... Can someone call her?",
              standard: "My wife is at the hotel. Her number is... Can someone call her for me?",
              formal:
                "My spouse is currently located at the hotel. Her contact number is... Would it be possible for someone to contact her on my behalf?",
            },
          },
        ],
      },

      // --- Flow 2: 帮别人 ---
      {
        id: "someone-else",
        titleZh: "帮别人就医",
        titleEn: "Helping Someone Else",
        description: "同行的人受伤或生病，你帮忙沟通描述情况",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn: "Please help! My friend fell down the stairs and she can't stand up. She's in a lot of pain.",
            textZh: "请帮忙！我朋友从楼梯上摔下来了，站不起来。她非常疼。",
            culturalNote: "美国急诊室直接求助即可，无需过多客套或解释。直奔主题。",
            casualVersion: "Help! My friend fell down the stairs, can't stand up. She's in a lot of pain.",
            commonMistake: {
              wrong: "My friend fall down the stairs.",
              correct: "My friend fell down the stairs.",
              explanation: "过去式动词“fell”在描述已发生的事件时是正确的。",
            },
            formalityVariants: {
              casual: "Help! My friend fell down the stairs, can't stand up, she's really hurting.",
              standard: "Please help! My friend fell down the stairs and she can't stand up. She's in a lot of pain.",
              formal:
                "Excuse me, I require immediate assistance. My companion has fallen down the stairs and is unable to stand. She appears to be experiencing significant discomfort.",
            },
          },
          {
            speaker: "them",
            role: "护士",
            textEn: "Where is she now? Don't move her — we'll bring a wheelchair. Did she hit her head?",
            textZh: "她现在在哪里？不要移动她——我们会带轮椅来。她有没有撞到头？",
            keyPhrases: [
              { en: "don't move her", zh: "不要移动她" },
              { en: "wheelchair", zh: "轮椅" },
              { en: "hit her head", zh: "撞到头" },
            ],
            responseTip: "尽量准确回忆事故经过",
            alternativeExpressions: [
              {
                textEn:
                  "Okay, where is she? Whatever you do, don't try to move her. We'll come to her with a wheelchair. Did she bang her head at all?",
                textZh: "好的，她在哪？千万别动她。我们带轮椅过去。她有没有磕到头？",
                actionHint: "描述朋友位置",
                frequency: "common",
              },
              {
                textEn:
                  "Stay with her and keep her still. We're bringing a chair right now. Did she lose consciousness or hit her head?",
                textZh: "陪着她别让她动。我们马上带椅子过去。她有没有失去意识或者撞到头？",
                actionHint: "观察伤者意识状态",
                frequency: "common",
              },
            ],
            casualVersion: "Where is she? Don't move her — we'll bring a wheelchair. Hit her head?",
            formalityVariants: {
              casual: "Where's she? Don't move her, we'll get a chair. Hit her head?",
              standard: "Where is she now? Don't move her — we'll bring a wheelchair. Did she hit her head?",
              formal:
                "Could you please indicate her current location? It is imperative that she not be moved; we will dispatch a wheelchair to her. Has she sustained any head trauma?",
            },
          },
          {
            speaker: "you",
            textEn:
              "She's right outside the entrance. I don't think she hit her head, but her right ankle is very swollen. She might have broken it.",
            textZh: "她就在门口外面。应该没有撞到头，但右脚踝肿得很厉害。可能骨折了。",
            casualVersion:
              "She's right outside the entrance. Don't think she hit her head, but her right ankle's super swollen. Might've broken it.",
            commonMistake: {
              wrong: "Her right ankle is very swelling.",
              correct: "Her right ankle is very swollen.",
              explanation: "“swollen”是形容词，表示“肿了的”，不是动词的进行时。",
            },
            formalityVariants: {
              casual:
                "She's just outside. Don't think she hit her head, but her ankle's really swollen. Might be broken.",
              standard:
                "She's right outside the entrance. I don't think she hit her head, but her right ankle is very swollen. She might have broken it.",
              formal:
                "She is located directly outside the main entrance. I do not believe she sustained a head injury; however, her right ankle is considerably swollen. We suspect a potential fracture.",
            },
          },
          {
            speaker: "them",
            role: "护士",
            textEn:
              "Okay, we'll be right there. What's her name and age? Does she have any medical conditions or allergies?",
            textZh: "好的，我们马上过去。她叫什么名字，多大年纪？有什么基础疾病或过敏吗？",
            keyPhrases: [
              { en: "ankle", zh: "脚踝" },
              { en: "swollen", zh: "肿了" },
              { en: "broken", zh: "骨折" },
              { en: "medical conditions", zh: "基础疾病" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "On our way. Quick — what's her name, how old is she? Does she have any health issues or take any medications?",
                textZh: "马上来。快说——她叫什么，多大？有什么健康问题或在吃什么药吗？",
                actionHint: "提供朋友基本信息",
                frequency: "common",
              },
              {
                textEn:
                  "We'll be right there. Can you give me her name and age? Any allergies or medical history I should know about?",
                textZh: "我们马上到。告诉我她的姓名和年龄？有什么过敏或病史我应该知道的吗？",
                actionHint: "告知过敏和病史",
                frequency: "common",
              },
            ],
            casualVersion: "Okay, be right there. Name and age? Any conditions or allergies?",
            formalityVariants: {
              casual: "Alright, we're coming. Name, age? Any conditions, allergies?",
              standard:
                "Okay, we'll be right there. What's her name and age? Does she have any medical conditions or allergies?",
              formal:
                "Understood. We are en route. May I inquire about her name and age? Does she have any pre-existing medical conditions or known allergies?",
            },
          },
          {
            speaker: "you",
            textEn:
              "Her name is Li Mei, she's 35. No medical conditions that I know of. She's not allergic to anything. She doesn't speak much English — I'll translate for her.",
            textZh: "她叫李梅，35岁。据我所知没有基础疾病。不过敏。她英语不太好——我帮她翻译。",
            culturalNote: "在急诊室帮不会说英语的同伴翻译很常见。有些医院也会提供翻译服务（interpreter services）。",
            casualVersion:
              "Li Mei, she's 35. No medical conditions I know of. Not allergic to anything. Doesn't speak much English — I'll translate.",
            commonMistake: {
              wrong: "She is not allergic anything.",
              correct: "She's not allergic to anything.",
              explanation: "“allergic”后面需要接介词“to”，表示对…过敏。",
            },
            formalityVariants: {
              casual: "Li Mei, 35. No conditions I know of. Not allergic. Her English isn't great, I'll translate.",
              standard:
                "Her name is Li Mei, she's 35. No medical conditions that I know of. She's not allergic to anything. She doesn't speak much English — I'll translate for her.",
              formal:
                "Her name is Li Mei, and she is 35 years of age. To my knowledge, she has no pre-existing medical conditions. She is not allergic to any substances. Her English proficiency is limited, so I will provide translation services.",
            },
          },
          {
            speaker: "them",
            role: "护士",
            textEn:
              "Thank you. We also have interpreter services if you need a break. Let's get her inside. Can she move her toes?",
            textZh: "谢谢。如果你需要休息，我们也有翻译服务。先把她带进来。她能动脚趾吗？",
            keyPhrases: [
              { en: "interpreter services", zh: "翻译服务" },
              { en: "move her toes", zh: "动脚趾" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Thanks for helping out. We've got translators on call if you need one. Let's get her inside first. Can she wiggle her toes at all?",
                textZh: "谢谢你帮忙。我们有随叫随到的翻译。先把她带进来。她能动动脚趾吗？",
                actionHint: "帮忙确认脚趾活动",
                frequency: "common",
              },
              {
                textEn:
                  "That's great that you can translate. We also have interpreter services available. First things first — let's bring her in. Is she able to move her toes?",
                textZh: "你能翻译太好了。我们也有翻译服务。先把她带进来。她能动脚趾吗？",
                actionHint: "询问朋友是否能动脚趾",
                frequency: "common",
              },
            ],
            casualVersion:
              "Thanks. We've got interpreter services too if you need a break. Let's get her in. Can she move her toes?",
            commonMistake: {
              wrong: "If you need rest.",
              correct: "If you need a break.",
              explanation: "“need a break”更自然地表达“需要休息一下/歇会儿”。",
            },
            formalityVariants: {
              casual: "Cheers. Got interpreters if you need a breather. Let's get her in. Toes move?",
              standard:
                "Thank you. We also have interpreter services if you need a break. Let's get her inside. Can she move her toes?",
              formal:
                "Thank you. Please be aware that we can also provide professional interpreter services should you require a respite. Let us proceed with bringing her indoors. Is she able to articulate movement in her toes?",
            },
          },
          {
            speaker: "you",
            textEn:
              "I think so, but it's very painful for her. She says the pain is mostly on the outside of her ankle.",
            textZh: "应该可以，但她很疼。她说主要是脚踝外侧疼。",
            casualVersion:
              "Think so, but it's super painful for her. Says the pain's mostly on the outside of her ankle.",
            commonMistake: {
              wrong: "She says pain is on outside her ankle.",
              correct: "She says the pain is mostly on the outside of her ankle.",
              explanation: "“on the outside of”是固定搭配，表示“在…的外部”。",
            },
            formalityVariants: {
              casual: "Yeah, think so, but it really hurts. Says it's mainly the outside of her ankle.",
              standard:
                "I think so, but it's very painful for her. She says the pain is mostly on the outside of her ankle.",
              formal:
                "I believe that is the case, however, she reports significant pain. She indicates that the primary location of discomfort is on the lateral aspect of her ankle.",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "I'm Dr. Park. I can see the swelling. We'll need to do an X-ray to check for fractures. In the meantime, we'll apply ice and elevate her foot. Can you ask her if she heard a popping sound when she fell?",
            textZh:
              "我是 Park 医生。我看到肿了。需要拍X光看有没有骨折。同时先冰敷，把脚抬高。你能问她摔倒时有没有听到弹响声？",
            keyPhrases: [
              { en: "X-ray", zh: "X光" },
              { en: "fractures", zh: "骨折" },
              { en: "apply ice", zh: "冰敷" },
              { en: "elevate", zh: "抬高" },
              { en: "popping sound", zh: "弹响声" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn:
                  "I'm Dr. Park. That's pretty swollen. We'll need X-rays to see if anything's broken. For now, let's ice it and prop her foot up. Ask her if she felt or heard a pop when it happened.",
                textZh:
                  "我是 Park 医生。肿得挺厉害。需要拍X光看有没有骨折。先冰敷把脚抬高。问问她受伤时有没有感觉到或听到弹响。",
                actionHint: "帮忙翻译询问",
                frequency: "common",
              },
              {
                textEn:
                  "Dr. Park here. Okay, I can see the swelling. We're gonna do an X-ray. In the meantime, ice and elevation. Did she hear anything pop when she fell?",
                textZh: "我是 Park 医生。好的，我看到肿了。我们拍个X光。同时先冰敷抬高。她摔的时候有没有听到弹响？",
                actionHint: "帮忙回忆摔倒细节",
                frequency: "common",
              },
            ],
            casualVersion:
              "I'm Dr. Park. See the swelling. We'll need an X-ray for fractures. Meanwhile, we'll ice and elevate her foot. Ask her if she heard a pop when she fell?",
            commonMistake: {
              wrong: "We need do X-ray.",
              correct: "We'll need to do an X-ray.",
              explanation: "“need to do”是正确搭配，表示“需要做某事”。",
            },
            formalityVariants: {
              casual:
                "Dr. Park here. Swelling's clear. Need an X-ray for breaks. We'll ice and prop her foot up. Did she hear a pop when she fell?",
              standard:
                "I'm Dr. Park. I can see the swelling. We'll need to do an X-ray to check for fractures. In the meantime, we'll apply ice and elevate her foot. Can you ask her if she heard a popping sound when she fell?",
              formal:
                "Good morning/afternoon, I am Dr. Park. I observe significant swelling. We will require an X-ray examination to ascertain the presence of any fractures. Concurrently, we will administer ice and elevate the affected limb. Would you kindly inquire if she perceived an auditory 'popping' sensation at the moment of her fall?",
            },
          },
          {
            speaker: "you",
            textEn: "She says she did hear a pop. She also says the pain is getting worse, not better.",
            textZh: "她说确实听到了弹响声。而且她说疼痛在加剧，没有减轻。",
            commonMistake: {
              wrong: "She says the pain is more and more serious.",
              correct: "She says the pain is getting worse, not better.",
              explanation: "中文的'越来越严重'在英语中常用 'getting worse' 表达，'serious' 不太用于形容疼痛。",
            },
            casualVersion: "Yeah, she says she heard a pop. And the pain's getting worse, not better.",
            formalityVariants: {
              casual: "Yep, she heard a pop. And the pain's getting worse, not better.",
              standard: "She says she did hear a pop. She also says the pain is getting worse, not better.",
              formal:
                "She confirms hearing a 'popping' sound. Furthermore, she reports that the pain is escalating rather than diminishing.",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "That could indicate a fracture or a severe ligament tear. Let's get the X-ray done first. I'll also give her something for the pain. Is she allergic to ibuprofen or any painkillers?",
            textZh: "那可能是骨折或严重的韧带撕裂。先去拍X光。我也给她开点止痛药。她对布洛芬或其他止痛药过敏吗？",
            keyPhrases: [
              { en: "ligament tear", zh: "韧带撕裂" },
              { en: "painkillers", zh: "止痛药" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "A pop plus increasing pain — could be a break or a torn ligament. Let's get that X-ray. I'll give her something for the pain first. She okay with ibuprofen?",
                textZh: "有弹响加上越来越疼——可能是骨折或韧带撕裂。先去拍X光。我先给她止痛药。她能吃布洛芬吗？",
                actionHint: "确认朋友能否吃止痛药",
                frequency: "common",
              },
              {
                textEn:
                  "That doesn't sound great — might be fractured or a bad ligament tear. X-ray first, then we'll know. Let me get her some pain relief. Any drug allergies?",
                textZh: "听起来不太好——可能骨折或严重韧带撕裂。先拍X光就知道了。我先给她止点痛。有药物过敏吗？",
                actionHint: "告知过敏情况",
                frequency: "common",
              },
            ],
            casualVersion:
              "Could be a fracture or a bad ligament tear. Let's get that X-ray first. I'll give her something for the pain too. Allergic to ibuprofen or any painkillers?",
            commonMistake: {
              wrong: "I will give her some painkiller.",
              correct: "I'll also give her something for the pain.",
              explanation: "“something for the pain”比直接说“painkiller”更常用、更自然。",
            },
            formalityVariants: {
              casual:
                "Could be a break or a bad tear. Get the X-ray first. I'll give her pain meds. Any allergies to ibuprofen or other painkillers?",
              standard:
                "That could indicate a fracture or a severe ligament tear. Let's get the X-ray done first. I'll also give her something for the pain. Is she allergic to ibuprofen or any painkillers?",
              formal:
                "That symptom could be indicative of either a fracture or a significant ligamentous tear. Our priority is to complete the X-ray examination. Additionally, I will prescribe medication for pain management. Does she have any known allergies to ibuprofen or other analgesic agents?",
            },
          },
          {
            speaker: "you",
            textEn: "No allergies. How long will the X-ray take? And will she need a cast?",
            textZh: "不过敏。X光要多久？她需要打石膏吗？",
            casualVersion: "No allergies. How long's the X-ray take? She need a cast?",
            commonMistake: {
              wrong: "Does she need cast?",
              correct: "Will she need a cast?",
              explanation: "“a cast”需要冠词。用“will”询问未来情况。",
            },
            formalityVariants: {
              casual: "Nope, no allergies. How long for the X-ray? Cast needed?",
              standard: "No allergies. How long will the X-ray take? And will she need a cast?",
              formal:
                "She has no reported allergies. Could you please inform me of the estimated duration for the X-ray procedure? Furthermore, will a cast be required for her recovery?",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "The X-ray itself takes about 5 minutes, and we'll have results in 20 minutes. If it's a fracture, she may need a cast or a boot. If it's a bad sprain, we'll wrap it and give her crutches. Either way, she should stay off the foot. Do you have travel insurance? She may need a follow-up with an orthopedic specialist.",
            textZh:
              "X光本身大约5分钟，20分钟出结果。如果是骨折，可能需要打石膏或穿矫形靴。如果是严重扭伤，会缠绷带、给她拐杖。不管哪种情况，她都不应该用那只脚走路。你们有旅行保险吗？她可能需要去骨科专科复诊。",
            keyPhrases: [
              { en: "cast", zh: "石膏" },
              { en: "boot", zh: "矫形靴" },
              { en: "sprain", zh: "扭伤" },
              { en: "crutches", zh: "拐杖" },
              { en: "stay off the foot", zh: "不要用那只脚" },
              { en: "orthopedic specialist", zh: "骨科专科" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The X-ray is quick — five minutes tops. Results in about 20. If it's broken, she'll get a cast or a walking boot. If it's just a bad sprain, we'll wrap it and give her crutches. Either way, she shouldn't walk on it. Got travel insurance? She'll probably need a follow-up.",
                textZh:
                  "X光很快——最多五分钟。20分钟出结果。如果骨折了，打石膏或穿矫形靴。如果只是严重扭伤，缠绷带给拐杖。不管怎样都不能走路。有旅行保险吗？她可能需要复诊。",
                actionHint: "准备保险材料",
                frequency: "common",
              },
              {
                textEn:
                  "X-ray's real quick. We'll know in about 20 minutes if it's broken. She might need a cast or just a boot and crutches — depends on what we see. Do you guys have insurance? She may need an ortho follow-up.",
                textZh:
                  "X光很快的。大约20分钟就知道有没有骨折了。可能要石膏或者矫形靴加拐杖——看结果。你们有保险吗？可能需要骨科复诊。",
                actionHint: "确认保险和后续安排",
                frequency: "common",
              },
            ],
            casualVersion:
              "X-ray itself takes like 5 mins, results in 20. If it's a fracture, she might need a cast or boot. Bad sprain, we'll wrap it, give her crutches. Either way, gotta stay off that foot. Got travel insurance? Might need to see an ortho specialist later.",
            culturalNote: "美国医疗费用高，保险很重要。",
            commonMistake: {
              wrong: "She need stay off the foot.",
              correct: "She should stay off the foot.",
              explanation: "“should”表示建议或必要性，结构更完整。",
            },
            formalityVariants: {
              casual:
                "X-ray's 5 mins, results in 20. Break? Cast or boot. Bad sprain? Wrap and crutches. Either way, stay off it. Got insurance? May need an ortho later.",
              standard:
                "The X-ray itself takes about 5 minutes, and we'll have results in 20 minutes. If it's a fracture, she may need a cast or a boot. If it's a bad sprain, we'll wrap it and give her crutches. Either way, she should stay off the foot. Do you have travel insurance? She may need a follow-up with an orthopedic specialist.",
              formal:
                "The radiograph procedure itself requires approximately five minutes, with results becoming available within twenty minutes. Should a fracture be confirmed, she may necessitate a cast or an orthopedic boot. In the event of a severe sprain, we will provide a supportive wrap and crutches. In either scenario, strict non-weight-bearing is advised for the affected limb. Do you possess travel insurance? A follow-up consultation with an orthopedic specialist may be indicated.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Yes, we both have travel insurance. I'll get all the documents. Thank you so much for helping her.",
            textZh: "有，我们都有旅行保险。我去准备所有材料。非常感谢你们帮忙。",
            casualVersion:
              "Yeah, we both got travel insurance. I'll grab all the documents. Thanks so much for helping her.",
            commonMistake: {
              wrong: "Thank you for help her.",
              correct: "Thank you so much for helping her.",
              explanation: "动词“help”在“for”之后要用动名词形式“helping”。",
            },
            formalityVariants: {
              casual: "Yep, we both got insurance. I'll get the docs. Thanks a ton for helping her.",
              standard:
                "Yes, we both have travel insurance. I'll get all the documents. Thank you so much for helping her.",
              formal:
                "Yes, we are both covered by travel insurance. I will procure all necessary documentation. My sincerest gratitude for your assistance with her.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 看牙医 ====================
  {
    id: "medical-dental",
    category: "medical",
    titleZh: "看牙医",
    titleEn: "Visiting the Dentist",
    description: "在国外牙疼需要看牙医，包括描述牙痛、检查、洗牙和治疗方案",
    otherRole: "牙医/前台",
    otherRoleIcon: "smile",
    flows: [
      // --- Flow 1: 牙疼看诊 ---
      {
        id: "toothache",
        titleZh: "牙疼看诊",
        titleEn: "Toothache Visit",
        description: "牙齿疼痛，到牙科诊所就诊，描述症状、检查和治疗",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi, I have a terrible toothache. I don't have an appointment, but is it possible to see a dentist today?",
            textZh: "你好，我牙疼得厉害。没有预约，但今天能看牙医吗？",
            culturalNote: "国外牙科诊所通常需要提前预约，但大多数会为急性牙痛安排紧急就诊（emergency dental visit）。",
            casualVersion: "Hey, got a terrible toothache. No appointment, but can I see a dentist today?",
            commonMistake: {
              wrong: "Hello, I have a terrible toothache. I have no appointment.",
              correct: "Hi, I have a terrible toothache. I don't have an appointment.",
              explanation: '"I have no appointment" 听起来不自然，用 "I don\'t have an appointment" 更地道。',
            },
            formalityVariants: {
              casual: "Hey, got a bad toothache. No appointment, but can I see a dentist today?",
              standard:
                "Hi, I have a terrible toothache. I don't have an appointment, but is it possible to see a dentist today?",
              formal:
                "Good morning/afternoon. I'm experiencing severe dental pain and do not have a scheduled appointment. Would it be possible to be seen by a dentist sometime today?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "We do have an emergency slot available at 2:30. Can you fill out this patient form? Have you been to a dentist recently?",
            textZh: "我们2:30有一个紧急号。能填一下这份患者表格吗？你最近看过牙医吗？",
            commonMistake: {
              wrong: "Do you can fill out this patient form?",
              correct: "Can you fill out this patient form?",
              explanation: "中文的“你能不能”常被直译为Do you can，英文问能力用Can you。",
            },
            keyPhrases: [
              { en: "emergency slot", zh: "紧急号/加急名额" },
              { en: "patient form", zh: "患者表格" },
            ],
            alternativeExpressions: [
              {
                textEn: "We can squeeze you in this afternoon. Fill out this new patient form first.",
                textZh: "今天下午可以给你加个号。先填这份新患者表格。",
                actionHint: "填表等候",
                frequency: "common",
              },
              {
                textEn: "We have an opening in about an hour. Would that work?",
                textZh: "大约一小时后有个空位。可以吗？",
                actionHint: "确认时间",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah, we got an emergency spot at 2:30. Can you fill out this form? Seen a dentist lately?",
            formalityVariants: {
              casual: "We've got an emergency slot at 2:30. Just fill out this form. Seen a dentist lately?",
              standard:
                "We do have an emergency slot available at 2:30. Can you fill out this patient form? Have you been to a dentist recently?",
              formal:
                "Yes, we do have an emergency appointment available at 2:30 PM. Would you kindly complete this new patient registration form? And, if you don't mind me asking, when was your most recent dental visit?",
            },
          },
          {
            speaker: "you",
            textEn:
              "No, it's been a while since my last checkup. The pain started two days ago and it's getting worse, especially when I eat or drink something cold.",
            textZh: "没有，上次检查已经很久了。两天前开始疼的，越来越严重，特别是吃东西或喝冷饮的时候。",
            casualVersion:
              "Nah, it's been ages since my last checkup. Pain started two days ago, getting worse, especially with cold stuff.",
            commonMistake: {
              wrong: "No, last checkup has been long time ago.",
              correct: "No, it's been a while since my last checkup.",
              explanation: '"has been long time ago" 不自然，用 "it\'s been a while since..." 更地道。',
            },
            formalityVariants: {
              casual:
                "Nope, it's been ages since my last checkup. Pain started two days ago, getting worse, especially with cold stuff.",
              standard:
                "No, it's been a while since my last checkup. The pain started two days ago and it's getting worse, especially when I eat or drink something cold.",
              formal:
                "No, I haven't had a dental checkup in quite some time. The discomfort began approximately two days ago and has progressively worsened, particularly when consuming cold foods or beverages.",
            },
          },
          {
            speaker: "them",
            role: "牙医",
            textEn:
              "Hello, I'm Dr. Adams. Let's take a look. Open wide, please... I can see a large cavity on your lower right molar. That's what's causing the pain. We'll need to take an X-ray to see how deep it is.",
            textZh:
              "你好，我是 Adams 医生。让我看看。请张大嘴……我看到你右下方的臼齿有一个很大的蛀洞。这就是疼痛的原因。我们需要拍个X光看看有多深。",
            commonMistake: {
              wrong: "Please open your mouth big",
              correct: "Please open wide",
              explanation: "Open wide 是牙医常说的张大嘴巴，open your mouth big 不自然",
            },
            keyPhrases: [
              { en: "open wide", zh: "张大嘴" },
              { en: "cavity", zh: "蛀洞/龋齿" },
              { en: "molar", zh: "臼齿/大牙" },
              { en: "X-ray", zh: "X光" },
            ],
            vocabNotes: {
              cavity: {
                meaningInContext: "在这句话里表示：牙齿上的蛀洞",
                similarUsage: "类似用法：You have several cavities that need filling.",
              },
              molar: {
                meaningInContext: "在这句话里表示：后面的大牙（臼齿）",
                similarUsage: "类似用法：My wisdom molar is coming in.",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Hi, Dr. Adams. Let's have a look — open up nice and wide... Yep, there's a pretty big cavity on your lower right molar. That's your culprit. We need an X-ray to see how far it goes.",
                textZh:
                  "你好，我是 Adams 医生。让我看看——嘴张大……嗯，你右下臼齿有个很大的蛀洞。就是它在作怪。得拍个X光看看有多深。",
                actionHint: "配合张嘴检查",
                frequency: "common",
              },
              {
                textEn:
                  "Hey there, I'm Dr. Adams. Open wide for me... Ah, I see the problem. Big cavity on the lower right. Let's X-ray it and figure out how deep it is.",
                textZh: "你好，我是 Adams 医生。张大嘴……啊，我看到问题了。右下方有个大蛀洞。拍个X光看看多深。",
                actionHint: "配合检查",
                frequency: "common",
              },
            ],
            casualVersion:
              "Hey, I'm Dr. Adams. Let's take a look. Open up for me... See a big cavity on your lower right molar. That's the pain. Gotta X-ray it to see how deep.",
            formalityVariants: {
              casual:
                "Hi, Dr. Adams here. Let's see. Open up... Big cavity on your lower right molar. That's it. Need an X-ray to see depth.",
              standard:
                "Hello, I'm Dr. Adams. Let's take a look. Open wide, please... I can see a large cavity on your lower right molar. That's what's causing the pain. We'll need to take an X-ray to see how deep it is.",
              formal:
                "Good morning/afternoon. I am Dr. Adams. If you would please open your mouth wide for me... I observe a significant carious lesion on your lower right molar, which appears to be the source of your discomfort. We will proceed with a radiographic examination to assess its precise depth.",
            },
          },
          {
            speaker: "you",
            textEn: "Is it serious? Will I need a root canal?",
            textZh: "严重吗？需要做根管治疗吗？",
            commonMistake: {
              wrong: "It is serious? Need root canal?",
              correct: "Is it serious? Will I need a root canal?",
              explanation: "疑问句缺少系动词be和助动词will。Root canal是名词，缺少动词和主语。",
            },
            casualVersion: "Serious? Root canal?",
            formalityVariants: {
              casual: "Serious? Need a root canal?",
              standard: "Is it serious? Will I need a root canal?",
              formal:
                "Is this condition particularly severe? And do you anticipate that a root canal procedure will be necessary?",
            },
          },
          {
            speaker: "them",
            role: "牙医",
            textEn:
              "The X-ray shows the cavity hasn't reached the nerve yet, so a filling should be enough. If it had reached the nerve, then yes, you'd need a root canal. I can do the filling right now if you'd like.",
            textZh:
              "X光显示蛀洞还没到神经，所以补牙就可以了。如果到了神经，那就需要根管治疗了。如果你愿意，我现在就可以补。",
            keyPhrases: [
              { en: "nerve", zh: "神经" },
              { en: "filling", zh: "补牙" },
              { en: "root canal", zh: "根管治疗" },
            ],
            alternativeExpressions: [
              {
                textEn: "Good news — it's not too deep. We can fix it with a simple filling today.",
                textZh: "好消息——不太深。今天做个简单的补牙就行。",
                actionHint: "同意当天治疗",
                frequency: "common",
              },
            ],
            casualVersion:
              "X-ray shows it hasn't hit the nerve, so a filling should do it. If it had, yeah, root canal. I can do the filling now if you want.",
            commonMistake: {
              wrong: "If it reached the nerve, then you need a root canal.",
              correct: "If it had reached the nerve, then yes, you'd need a root canal.",
              explanation: '表达虚拟语气，应使用过去完成时 "had reached" 和 "would need"。',
            },
            formalityVariants: {
              casual:
                "Good news, X-ray shows it's not at the nerve, so a filling's fine. If it were, yeah, root canal. I can fill it now if you're ready.",
              standard:
                "The X-ray shows the cavity hasn't reached the nerve yet, so a filling should be enough. If it had reached the nerve, then yes, you'd need a root canal. I can do the filling right now if you'd like.",
              formal:
                "The radiographic imaging indicates that the carious lesion has not yet extended to the dental nerve, therefore a dental filling should suffice. Had the nerve been compromised, a root canal therapy would indeed be indicated. I am available to perform the filling procedure immediately, should you consent.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please do it now. Will it hurt? I'm a bit nervous about dental work.",
            textZh: "好的，现在就做吧。会疼吗？我对牙科治疗有点紧张。",
            casualVersion: "Yeah, do it now. Gonna hurt? Kinda nervous 'bout dental stuff.",
            commonMistake: {
              wrong: "Will it be hurt?",
              correct: "Will it hurt?",
              explanation: '"hurt" 在这里是主动动词，表示 "疼痛"。没有 "be hurt" 的用法。',
            },
            formalityVariants: {
              casual: "Yeah, let's do it now. Will it hurt? I'm kinda nervous 'bout dental work.",
              standard: "Yes, please do it now. Will it hurt? I'm a bit nervous about dental work.",
              formal:
                "Yes, I would appreciate it if we could proceed with the treatment now. I confess I am somewhat apprehensive about dental procedures; will there be any significant discomfort?",
            },
          },
          {
            speaker: "them",
            role: "牙医",
            textEn:
              "Don't worry. I'll numb the area first with a local anesthetic. You'll feel a small pinch from the injection, but after that you won't feel any pain. The whole procedure takes about 30 minutes. If you feel any discomfort, just raise your left hand.",
            textZh:
              "别担心。我会先用局部麻醉把那个区域麻掉。打麻药时会有一点刺痛，之后就不会痛了。整个过程大约30分钟。如果感到不舒服，举左手示意。",
            keyPhrases: [
              { en: "numb the area", zh: "麻掉那个区域" },
              { en: "local anesthetic", zh: "局部麻醉" },
              { en: "pinch", zh: "刺痛" },
              { en: "injection", zh: "注射/打针" },
              { en: "raise your left hand", zh: "举左手" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No worries, I'll freeze the area first. You'll feel a little poke from the needle, then nothing. The whole thing takes about half an hour. If it bothers you, just give me a wave.",
                textZh:
                  "别担心，我会先把那块麻掉。打针时会有一点刺，然后就没感觉了。整个过程大概半小时。不舒服就挥挥手。",
                actionHint: "配合治疗",
                frequency: "common",
              },
              {
                textEn:
                  "You'll be totally numb — I promise you won't feel a thing after the shot. About 30 minutes and we're done. Raise your hand anytime if you need a break.",
                textZh: "会完全麻掉的——保证打完针后什么都感觉不到。大约30分钟就好了。任何时候需要休息就举手。",
                actionHint: "需要暂停就举手",
                frequency: "common",
              },
            ],
            casualVersion:
              "No worries. I'll numb it up first. You'll feel a little pinch from the shot, but no pain after that. Whole thing's about 30 mins. If you feel anything, just raise your left hand.",
            culturalNote: "牙医看诊时举手示意不舒服是普遍做法，不分国界",
            commonMistake: {
              wrong: "You will feel a small pinch when inject.",
              correct: "You'll feel a small pinch from the injection.",
              explanation: '"inject" 是动词，"injection" 是名词。这里应使用名词 "injection"。',
            },
            formalityVariants: {
              casual:
                "Relax. I'll numb it up first. Little pinch from the shot, then no pain. About 30 mins total. If anything's uncomfortable, just raise your left hand.",
              standard:
                "Don't worry. I'll numb the area first with a local anesthetic. You'll feel a small pinch from the injection, but after that you won't feel any pain. The whole procedure takes about 30 minutes. If you feel any discomfort, just raise your left hand.",
              formal:
                "Please rest assured. I will administer a local anesthetic to the area beforehand. You may experience a brief, minor sensation during the injection, but thereafter, you should not perceive any pain. The entire procedure is anticipated to last approximately 30 minutes. Should you experience any discomfort at all, please simply raise your left hand to signal me.",
            },
          },
          {
            speaker: "you",
            textEn: "Okay, I feel better knowing that. How much will the filling cost without insurance?",
            textZh: "好的，知道这些我就放心了。没有保险的话补牙多少钱？",
            casualVersion: "Alright, that makes me feel better. How much is the filling without insurance?",
            culturalNote: "美国医疗费用高昂，是否涵盖保险是关键问题",
            commonMistake: {
              wrong: "How much is the filling without insurance cost?",
              correct: "How much will the filling cost without insurance?",
              explanation: '"how much is..." 或 "how much will... cost"，但不要同时用 "is" 和 "cost"。',
            },
            formalityVariants: {
              casual: "Cool, good to know. How much is the filling without insurance?",
              standard: "Okay, I feel better knowing that. How much will the filling cost without insurance?",
              formal:
                "Thank you, that information is reassuring. Could you please inform me of the estimated cost for the filling procedure, assuming no insurance coverage?",
            },
          },
          {
            speaker: "them",
            role: "牙医",
            textEn:
              "A composite filling for this size cavity is $250. The X-ray is $85. We'll give you a detailed receipt for your travel insurance claim. After the filling, avoid eating on that side for two hours and stay away from very hot or cold food for a day.",
            textZh:
              "这个大小的蛀洞，树脂补牙250美元。X光85美元。我们会给你一份详细的收据用于旅行保险理赔。补完牙后两小时内不要用那一侧吃东西，一天内避免过冷过热的食物。",
            keyPhrases: [
              { en: "composite filling", zh: "树脂补牙" },
              { en: "detailed receipt", zh: "详细收据" },
              { en: "avoid eating on that side", zh: "不要用那一侧吃东西" },
            ],
            vocabNotes: {
              composite: {
                meaningInContext: "在这句话里表示：牙齿修补用的树脂材料（跟牙齿颜色一样）",
                similarUsage: "类似用法：We use tooth-colored composite material.",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "For this size cavity, a tooth-colored filling runs $250. The X-ray's $85 on top of that. We'll give you a receipt for insurance. Don't chew on that side for a couple hours after, and skip really hot or cold stuff for a day.",
                textZh:
                  "这个大小的蛀洞，树脂补牙250美元。X光另外85美元。我们给你收据用来报保险。补完后那一侧两小时内不要咬东西，一天内别吃太烫太冷的。",
                actionHint: "注意术后事项",
                frequency: "common",
              },
              {
                textEn:
                  "A composite filling is $250, plus the $85 for X-rays. After the procedure, take it easy on that side — no eating for two hours, and nothing super hot or cold for 24 hours.",
                textZh: "树脂补牙250美元，加上X光85美元。治疗后那一侧要小心——两小时不吃东西，24小时内别吃太烫太冷的。",
                actionHint: "遵守术后饮食限制",
                frequency: "common",
              },
            ],
            casualVersion:
              "A composite filling for this cavity is $250. X-ray's $85. We'll give you a detailed receipt for your travel insurance claim. After, don't eat on that side for two hours, and no super hot or cold food for a day.",
            culturalNote: "医疗账单用于保险理赔是常见做法，美国诊所会主动提供",
            commonMistake: {
              wrong: "Avoid eat on that side.",
              correct: "Avoid eating on that side.",
              explanation: '"avoid" 后接动名词 (gerund)，即动词加 -ing。',
            },
            formalityVariants: {
              casual:
                "Composite filling for this is $250. X-ray's $85. We'll give you a receipt for your travel insurance claim. Afterward, no eating on that side for two hours, and no super hot/cold food for a day.",
              standard:
                "A composite filling for this size cavity is $250. The X-ray is $85. We'll give you a detailed receipt for your travel insurance claim. After the filling, avoid eating on that side for two hours and stay away from very hot or cold food for a day.",
              formal:
                "The cost for a composite filling of this particular size is $250. The X-ray examination is $85. We will provide you with a comprehensive receipt for the purpose of your travel insurance claim. Following the procedure, we advise refraining from mastication on the treated side for a period of two hours, and abstaining from extremely hot or cold sustenance for the subsequent 24 hours.",
            },
          },
        ],
      },

      // --- Flow 2: 洗牙和检查 ---
      {
        id: "cleaning-checkup",
        titleZh: "洗牙和检查",
        titleEn: "Dental Cleaning & Checkup",
        description: "预约常规洗牙和口腔检查",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'd like to schedule a dental cleaning and checkup, please.",
            textZh: "我想预约一次洗牙和口腔检查。",
            casualVersion: "Wanna schedule a cleaning and checkup.",
            commonMistake: {
              wrong: "I want to schedule a dental cleaning",
              correct: "I'd like to schedule a dental cleaning",
              explanation: "中文的“我想”直接翻译成 I want 听起来会比较生硬，用 I'd like 更礼貌。",
            },
            formalityVariants: {
              casual: "Wanna schedule a cleaning and checkup.",
              standard: "I'd like to schedule a dental cleaning and checkup, please.",
              formal:
                "I would like to schedule an appointment for a dental cleaning and comprehensive oral examination, if possible.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Sure. We have openings on Thursday at 10 AM or Friday at 2 PM. Which works better for you? A cleaning and checkup takes about 45 minutes to an hour.",
            textZh: "好的。周四上午10点或周五下午2点有空位。哪个更方便？洗牙和检查大约需要45分钟到一个小时。",
            commonMistake: {
              wrong: "Which is better for you?",
              correct: "Which works better for you?",
              explanation: "问哪一个更“方便”或“合适”时，'works better'更地道。",
            },
            keyPhrases: [
              { en: "dental cleaning", zh: "洗牙" },
              { en: "checkup", zh: "检查" },
              { en: "openings", zh: "空位" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure thing. We've got a Thursday morning slot at 10 or Friday afternoon at 2. A cleaning plus checkup usually takes about 45 minutes to an hour.",
                textZh: "没问题。周四上午10点或周五下午2点有空。洗牙加检查通常45分钟到一小时。",
                actionHint: "选择合适时间",
                frequency: "common",
              },
              {
                textEn:
                  "Let me check the schedule... How about Thursday at 10 AM or Friday at 2 PM? Plan for about an hour.",
                textZh: "我看看排班……周四上午10点或者周五下午2点怎么样？预留大约一小时。",
                actionHint: "确认预约时间",
                frequency: "common",
              },
            ],
            casualVersion:
              "Sure, we got openings Thursday 10 AM or Friday 2 PM. Which is better? Cleaning and checkup takes like 45 mins to an hour.",
            formalityVariants: {
              casual:
                "Yeah, we've got Thursday 10 AM or Friday 2 PM. Which one works for ya? It's about 45 mins to an hour.",
              standard:
                "Sure. We have openings on Thursday at 10 AM or Friday at 2 PM. Which works better for you? A cleaning and checkup takes about 45 minutes to an hour.",
              formal:
                "Certainly. We have availability on Thursday morning at 10:00 AM or Friday afternoon at 2:00 PM. Please advise which of these times would be most suitable for your schedule. The estimated duration for a cleaning and comprehensive checkup is approximately 45 minutes to one hour.",
            },
          },
          {
            speaker: "you",
            textEn: "Thursday at 10 works. How much is a cleaning without insurance?",
            textZh: "周四10点可以。没有保险的话洗牙多少钱？",
            casualVersion: "Thursday 10 works. How much for a cleaning without insurance?",
            commonMistake: {
              wrong: "How much money is a cleaning without insurance?",
              correct: "How much is a cleaning without insurance?",
              explanation: "直接问 'How much' 即可，不需要加 'money'。",
            },
            formalityVariants: {
              casual: "Thursday 10 works. How much for a cleaning without insurance?",
              standard: "Thursday at 10 works. How much is a cleaning without insurance?",
              formal:
                "Thursday at 10:00 AM would be acceptable. May I inquire about the cost of a dental cleaning for an uninsured patient?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "A standard cleaning is $120, and the checkup including X-rays is $180. So the total would be $300. If you need a deep cleaning, that's more — around $400 to $600, depending on the condition of your gums.",
            textZh:
              "标准洗牙120美元，包含X光的检查180美元。所以总共300美元。如果需要深度洁牙，会更贵——大约400到600美元，取决于牙龈状况。",
            commonMistake: {
              wrong: "If need deep cleaning, that will more expensive.",
              correct: "If you need a deep cleaning, that will be more expensive.",
              explanation: "条件句缺少主语'you'，且'more expensive'前缺少系动词'be'。",
            },
            keyPhrases: [
              { en: "standard cleaning", zh: "标准洗牙" },
              { en: "deep cleaning", zh: "深度洁牙" },
              { en: "gums", zh: "牙龈" },
            ],
            alternativeExpressions: [
              {
                textEn: "Without insurance, a routine cleaning runs about $120. X-rays and the exam are extra.",
                textZh: "没有保险的话，常规洗牙大约120美元。X光和检查另算。",
                actionHint: "确认费用",
                frequency: "common",
              },
            ],
            casualVersion:
              "Standard cleaning's $120, checkup with X-rays is $180. So, $300 total. Deep cleaning's more, like $400-600, depends on your gums.",
            formalityVariants: {
              casual:
                "Standard cleaning's $120, checkup with X-rays is $180. That's $300 total. A deep cleaning's more, like $400-600, depends on your gums.",
              standard:
                "A standard cleaning is $120, and the checkup including X-rays is $180. So the total would be $300. If you need a deep cleaning, that's more — around $400 to $600, depending on the condition of your gums.",
              formal:
                "A standard prophylactic cleaning is priced at $120, and the comprehensive oral examination, which includes necessary X-rays, is $180. This brings the total to $300. Should a deep cleaning, or scaling and root planing, be required, the cost ranges from approximately $400 to $600, contingent upon the specific condition of your periodontal health.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll go with the standard cleaning and checkup. Can you explain what happens during the cleaning?",
            textZh: "就标准洗牙和检查吧。能说一下洗牙的过程吗？",
            casualVersion: "I'll just do the standard cleaning and checkup. What happens during it?",
            commonMistake: {
              wrong: "Can you explain what happen during the cleaning?",
              correct: "Can you explain what happens during the cleaning?",
              explanation: "第三人称单数动词变位，'happen' 需加 's'。",
            },
            formalityVariants: {
              casual: "I'll just do the standard cleaning and checkup. What happens during it?",
              standard:
                "I'll go with the standard cleaning and checkup. Can you explain what happens during the cleaning?",
              formal:
                "I will opt for the standard cleaning and comprehensive checkup. Would you mind elucidating the procedural steps involved during the cleaning process?",
            },
          },
          {
            speaker: "them",
            role: "牙医",
            textEn:
              "Of course. First, we'll do a full examination and take X-rays. Then the hygienist will remove plaque and tartar using a scaler — you'll hear a scraping sound, which is normal. After that, we polish your teeth and finish with a fluoride treatment. It shouldn't be painful, but let us know if your gums are sensitive.",
            textZh:
              "当然。首先我们做全面检查和拍X光。然后洁牙师会用刮治器清除牙菌斑和牙石——你会听到刮擦的声音，这是正常的。之后我们会给牙齿抛光，最后做氟化处理。应该不会疼，但如果你的牙龈敏感就告诉我们。",
            commonMistake: {
              wrong: "Do the full examination",
              correct: "We'll do a full examination",
              explanation: "直接说 Do something 听起来像命令，用 We'll do 更礼貌自然",
            },
            keyPhrases: [
              { en: "plaque", zh: "牙菌斑" },
              { en: "tartar", zh: "牙石/牙结石" },
              { en: "scaler", zh: "刮治器" },
              { en: "polish", zh: "抛光" },
              { en: "fluoride treatment", zh: "氟化处理" },
              { en: "sensitive", zh: "敏感" },
            ],
            vocabNotes: {
              plaque: {
                meaningInContext: "在这句话里表示：黏在牙齿表面的细菌膜",
                similarUsage: "类似用法：Brushing twice a day helps prevent plaque buildup.",
              },
              tartar: {
                meaningInContext: "在这句话里表示：牙菌斑钙化后变硬的牙结石",
                similarUsage: "类似用法：Only a dentist can remove hardened tartar.",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Sure. So we start with X-rays and a full exam. Then the hygienist scrapes off the buildup — you'll hear some scraping, totally normal. After that, we polish everything up and do a fluoride rinse. Shouldn't hurt, but let us know if you're sensitive.",
                textZh:
                  "好的。先拍X光做全面检查。然后洁牙师清除堆积物——会有刮擦声，很正常。之后抛光，最后氟化漱口。应该不疼，但如果你敏感就告诉我们。",
                actionHint: "了解洗牙流程",
                frequency: "common",
              },
              {
                textEn:
                  "Basically — exam and X-rays first, then we clean off all the plaque and tartar. You might hear some scraping, that's the scaler doing its job. Then a polish and fluoride. Easy peasy.",
                textZh:
                  "基本上是先检查和拍X光，然后清掉所有牙菌斑和牙石。可能会听到刮擦声，那是刮治器在工作。然后抛光和氟化处理。很简单。",
                actionHint: "放松配合",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Sure. First, we'll do a full exam and X-rays. Then the hygienist'll get rid of plaque and tartar with a scaler — you'll hear some scraping, totally normal. After that, we polish your teeth and do a fluoride treatment. Shouldn't hurt, but tell us if your gums are sensitive.",
            formalityVariants: {
              casual:
                "Sure. First, we'll do an exam and X-rays. Then the hygienist'll scrape off plaque and tartar – you'll hear a scraping sound, that's normal. After that, we polish your teeth and do a fluoride treatment. Shouldn't be painful, but let us know if your gums are sensitive.",
              standard:
                "Of course. First, we'll do a full examination and take X-rays. Then the hygienist will remove plaque and tartar using a scaler — you'll hear a scraping sound, which is normal. After that, we polish your teeth and finish with a fluoride treatment. It shouldn't be painful, but let us know if your gums are sensitive.",
              formal:
                "Certainly. The procedure commences with a comprehensive oral examination and radiographic imaging. Subsequently, our dental hygienist will meticulously remove any accumulated plaque and calculus using a specialized scaler; a faint scraping sound is to be expected and is entirely normal. This will be followed by a professional dental polishing and a fluoride application. While discomfort is typically minimal, please inform us immediately if you experience any sensitivity in your gums.",
            },
          },
          {
            speaker: "you",
            textEn: "My gums bleed a little when I brush. Is that something to worry about?",
            textZh: "我刷牙时牙龈会出一点血。需要担心吗？",
            casualVersion: "My gums bleed a bit when I brush. Should I worry?",
            commonMistake: {
              wrong: "My gums have a little blood when I brush. Need to worry?",
              correct: "My gums bleed a little when I brush. Is that something to worry about?",
              explanation: "直接说 'bleed' 更自然。'Need to worry?' 不够完整。",
            },
            formalityVariants: {
              casual: "My gums bleed a bit when I brush. Should I worry?",
              standard: "My gums bleed a little when I brush. Is that something to worry about?",
              formal: "My gums exhibit minor bleeding during brushing. Is this a cause for concern?",
            },
          },
          {
            speaker: "them",
            role: "牙医",
            textEn:
              "Bleeding gums are often a sign of gingivitis — early-stage gum disease. It's very common and usually reversible with regular cleanings and good brushing habits. I'll check your gum health during the exam. Do you floss daily?",
            textZh:
              "牙龈出血通常是牙龈炎的信号——早期牙周病。很常见，通过定期洗牙和良好的刷牙习惯一般可以恢复。检查时我会看看你的牙龈健康状况。你每天用牙线吗？",
            commonMistake: {
              wrong: "It's common very much",
              correct: "It's quite common",
              explanation: "very much 一般修饰动词或形容词，quite common 更自然地表达“很常见”",
            },
            keyPhrases: [
              { en: "bleeding gums", zh: "牙龈出血" },
              { en: "gingivitis", zh: "牙龈炎" },
              { en: "gum disease", zh: "牙周病" },
              { en: "reversible", zh: "可逆的" },
              { en: "floss", zh: "用牙线" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That's usually a sign of gingivitis — basically early gum disease. Pretty common, and the good news is it's totally fixable with regular cleanings and better brushing. How often do you floss?",
                textZh:
                  "这通常是牙龈炎的表现——就是早期牙周病。很常见，好消息是定期洗牙和改善刷牙习惯完全可以恢复。你多久用一次牙线？",
                actionHint: "如实回答牙线使用频率",
                frequency: "common",
              },
              {
                textEn:
                  "Bleeding when you brush? That's usually gingivitis — nothing to panic about but you definitely wanna get on top of it. Are you flossing?",
                textZh: "刷牙出血？通常是牙龈炎——不用慌但一定要重视。你用牙线吗？",
                actionHint: "养成用牙线习惯",
                frequency: "common",
              },
            ],
            casualVersion:
              "Bleeding gums are usually a sign of gingivitis — early gum disease. Super common, and you can usually reverse it with regular cleanings and good brushing. I'll check 'em during the exam. Do you floss every day?",
            formalityVariants: {
              casual:
                "Bleeding gums are usually a sign of gingivitis — early gum disease. It's really common and usually gets better with regular cleanings and good brushing. I'll check your gums during the exam. Do you floss every day?",
              standard:
                "Bleeding gums are often a sign of gingivitis — early-stage gum disease. It's very common and usually reversible with regular cleanings and good brushing habits. I'll check your gum health during the exam. Do you floss daily?",
              formal:
                "Gingival bleeding frequently indicates the presence of gingivitis, which is an early stage of periodontal disease. This condition is quite prevalent and is generally reversible through consistent professional cleanings and diligent oral hygiene practices. I will conduct a thorough assessment of your gum health during the examination. May I inquire if you incorporate daily flossing into your routine?",
            },
          },
          {
            speaker: "you",
            textEn: "Not as often as I should. I'll try to do it more regularly. Thank you, doctor.",
            textZh: "不太经常。我会尽量多用。谢谢医生。",
            casualVersion: "Not enough. I'll try to do it more. Thanks, doc.",
            culturalNote: "在美国，牙医通常也可以被称为 'doctor' 或 'doc'。",
            commonMistake: {
              wrong: "I will try to do it more regularly.",
              correct: "I'll try to do it more regularly.",
              explanation: "口语中 'I will' 通常缩写为 'I'll'，更自然。",
            },
            formalityVariants: {
              casual: "Nah, not enough. I'll try to do it more. Thanks, doc.",
              standard: "Not as often as I should. I'll try to do it more regularly. Thank you, doctor.",
              formal:
                "Regrettably, I do not. I will endeavor to incorporate it into my routine more consistently. Thank you for your professional advice, Doctor.",
            },
          },
          {
            speaker: "them",
            role: "牙医",
            textEn:
              "Flossing once a day makes a big difference. I'd also recommend using a soft-bristle toothbrush and brushing for at least two minutes. We'll see you Thursday at 10. If the bleeding gets worse before then, give us a call.",
            textZh:
              "每天用一次牙线差别很大。我还建议用软毛牙刷，每次刷至少两分钟。周四10点见。如果出血在那之前加重了，打电话给我们。",
            commonMistake: {
              wrong: "I suggest use soft toothbrush. Call us if bleeding worse.",
              correct: "I also suggest using a soft-bristle toothbrush. Call us if the bleeding gets worse.",
              explanation: "suggest后跟动名词或从句，'soft toothbrush'缺少'a'和'bristle'。'worse'前缺少系动词'gets'。",
            },
            keyPhrases: [
              { en: "soft-bristle toothbrush", zh: "软毛牙刷" },
              { en: "at least two minutes", zh: "至少两分钟" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Honestly, just flossing once a day will make a huge difference. Get a soft toothbrush and brush for a solid two minutes. See you Thursday at 10. Call us if the bleeding gets worse.",
                textZh:
                  "说实话，每天用一次牙线就会有很大改善。买个软毛牙刷，刷够两分钟。周四10点见。出血加重了就打电话。",
                actionHint: "养成每日牙线习惯",
                frequency: "common",
              },
              {
                textEn:
                  "Start flossing daily — you'll notice a difference pretty quickly. And use a soft-bristle brush, not a hard one. See you Thursday!",
                textZh: "开始每天用牙线——你会很快看到变化的。用软毛牙刷，别用硬的。周四见！",
                actionHint: "买软毛牙刷",
                frequency: "common",
              },
            ],
            casualVersion:
              "Flossing once a day makes a huge difference. I'd also say use a soft toothbrush and brush for at least two minutes. We'll see ya Thursday at 10. If the bleeding gets worse, call us.",
            formalityVariants: {
              casual:
                "Flossing daily makes a huge difference. Also, use a soft toothbrush and brush for at least two minutes. We'll see you Thursday at 10. If the bleeding gets worse, give us a call.",
              standard:
                "Flossing once a day makes a big difference. I'd also recommend using a soft-bristle toothbrush and brushing for at least two minutes. We'll see you Thursday at 10. If the bleeding gets worse before then, give us a call.",
              formal:
                "Consistent daily flossing can significantly impact your oral health. Additionally, I advise the use of a soft-bristle toothbrush and brushing for a minimum of two minutes per session. We look forward to seeing you on Thursday at 10:00 AM. Should you experience an exacerbation of the bleeding prior to your appointment, please do not hesitate to contact our office.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 医疗保险 ====================
  {
    id: "medical-insurance",
    tags: ["insurance", "保险", "medical insurance", "理赔"],
    category: "medical",
    titleZh: "医疗保险",
    titleEn: "Medical Insurance",
    description: "在国外处理旅行保险理赔、咨询保险覆盖范围和报销流程",
    otherRole: "保险客服/诊所前台",
    otherRoleIcon: "shield-check",
    flows: [
      // --- Flow 1: 保险理赔 ---
      {
        id: "filing-claim",
        titleZh: "保险理赔",
        titleEn: "Filing an Insurance Claim",
        description: "看完病后，联系旅行保险公司提交理赔申请",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hello, I'd like to file a claim on my travel insurance. I saw a doctor while I'm traveling in the US.",
            textZh: "你好，我想提交旅行保险理赔。我在美国旅行期间看了医生。",
            casualVersion: "Hey, wanna file a claim on my travel insurance. Saw a doc while I was traveling in the US.",
            culturalNote: "外国人表达目的更直接，说'想'而非'请问'，但过于直白会显得不礼貌，'I'd like to'是礼貌表达。",
            commonMistake: {
              wrong: "I want to file a claim",
              correct: "I'd like to file a claim",
              explanation: "中文的'我想'直译成英文'I want to'显得不礼貌，用'I'd like to'更委婉和礼貌。",
            },
            formalityVariants: {
              casual: "Hey, wanna file a claim on my travel insurance. Saw a doc while I was traveling in the US.",
              standard:
                "Hello, I'd like to file a claim on my travel insurance. I saw a doctor while I'm traveling in the US.",
              formal:
                "Good morning/afternoon, I am calling to initiate a claim regarding my travel insurance policy. I required medical attention during my recent travels in the United States.",
            },
          },
          {
            speaker: "them",
            role: "保险客服",
            textEn: "Of course. Can I have your policy number and the date of your medical visit?",
            textZh: "好的。请提供您的保单号和就诊日期。",
            commonMistake: {
              wrong: "Can I have your policy number and your medical visit date?",
              correct: "Can I have your policy number and the date of your medical visit?",
              explanation: "“date of your medical visit” 更自然，直接说 “medical visit date” 略显生硬。",
            },
            keyPhrases: [
              { en: "policy number", zh: "保单号" },
              { en: "date of your medical visit", zh: "就诊日期" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure. I'll need your insurance ID number and when you visited the doctor.",
                textZh: "好的。我需要您的保险ID号和看医生的时间。",
                actionHint: "提供保单信息",
                frequency: "common",
              },
            ],
            casualVersion: "Sure. Can I get your policy number and when you saw the doc?",
            formalityVariants: {
              casual: "Sure. Can I get your policy number and when you saw the doc?",
              standard: "Of course. Can I have your policy number and the date of your medical visit?",
              formal:
                "Certainly. May I please have your policy number and the exact date of your medical consultation?",
            },
          },
          {
            speaker: "you",
            textEn:
              "My policy number is TI-88234. I visited the clinic on March 5th. I had the flu and the total cost was $285 — $150 for the consultation, $40 for a flu test, and $95 for medication.",
            textZh:
              "保单号是 TI-88234。3月5日去的诊所。我得了流感，总费用285美元——诊费150美元，流感检测40美元，药费95美元。",
            casualVersion:
              "Policy's TI-88234. Went to the clinic March 5th. Had the flu. Total was $285 — $150 for the visit, $40 for a flu test, $95 for meds.",
            commonMistake: {
              wrong: "The cost was 285 dollars for consultation 150, flu test 40, medication 95.",
              correct:
                "The total cost was $285 — $150 for the consultation, $40 for a flu test, and $95 for medication.",
              explanation: "中文常省略介词，英文需要用 for 来连接费用和具体项目。",
            },
            formalityVariants: {
              casual:
                "Policy's TI-88234. Went to the clinic March 5th. Had the flu. Total was $285 — $150 for the visit, $40 for a flu test, $95 for meds.",
              standard:
                "My policy number is TI-88234. I visited the clinic on March 5th. I had the flu and the total cost was $285 — $150 for the consultation, $40 for a flu test, and $95 for medication.",
              formal:
                "My policy number is TI-88234. I attended the clinic on March 5th. My diagnosis was influenza, and the total expenditure amounted to $285, comprising $150 for the consultation, $40 for the influenza test, and $95 for prescribed medication.",
            },
          },
          {
            speaker: "them",
            role: "保险客服",
            textEn:
              "Thank you. Your policy covers medical expenses up to $50,000 with a $100 deductible. So you'll pay the first $100, and we'll reimburse the remaining $185. Do you have all the original receipts and the doctor's report?",
            textZh:
              "谢谢。您的保单覆盖最高5万美元的医疗费用，有100美元的免赔额。所以您自付前100美元，我们报销剩余的185美元。您有所有的原始收据和医生报告吗？",
            commonMistake: {
              wrong: "So you pay by yourself the first $100.",
              correct: "So you'll pay the first $100.",
              explanation: "“pay by yourself” 不自然，直接说 “pay the first $100” 即可。",
            },
            keyPhrases: [
              { en: "medical expenses", zh: "医疗费用" },
              { en: "deductible", zh: "免赔额" },
              { en: "reimburse", zh: "报销/理赔" },
              { en: "original receipts", zh: "原始收据" },
              { en: "doctor's report", zh: "医生报告" },
            ],
            vocabNotes: {
              deductible: {
                meaningInContext: "在这句话里表示：保险公司报销前你自己需要先付的金额",
                similarUsage: "类似用法：My health insurance has a $500 deductible.",
              },
              reimburse: {
                meaningInContext: "在这句话里表示：保险公司把你先垫付的钱还给你",
                similarUsage: "类似用法：The company will reimburse your travel expenses.",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Okay, so your plan covers up to $50K in medical costs. There's a $100 deductible, so you'd cover the first hundred and we'd pay back the other $185. Do you have all the receipts and the doctor's notes?",
                textZh:
                  "好的，你的计划覆盖最高5万美元的医疗费。有100美元免赔额，所以你付前100美元，我们退还剩余185美元。你有所有收据和医生的记录吗？",
                actionHint: "准备好所有单据",
                frequency: "common",
              },
              {
                textEn:
                  "Your policy has a $100 deductible. After that, we reimburse the rest. So out of your $285, you'd get $185 back. Got your receipts and the doctor's report handy?",
                textZh:
                  "你的保单有100美元免赔额。之后我们报销剩余部分。285美元里你能拿回185美元。收据和医生报告带了吗？",
                actionHint: "整理好材料",
                frequency: "common",
              },
            ],
            casualVersion:
              "Thanks. Policy covers up to $50K with a $100 deductible. So you pay the first $100, we'll cover the rest ($185). Got all the original receipts and the doctor's report?",
            culturalNote: "Deductible（免赔额）在美国保险中很常见，指保险公司开始赔付前，你需要自己承担的费用。",
            formalityVariants: {
              casual:
                "Thanks. Policy covers up to $50K with a $100 deductible. So you pay the first $100, we'll cover the rest ($185). Got all the original receipts and the doctor's report?",
              standard:
                "Thank you. Your policy covers medical expenses up to $50,000 with a $100 deductible. So you'll pay the first $100, and we'll reimburse the remaining $185. Do you have all the original receipts and the doctor's report?",
              formal:
                "Thank you for that information. Your policy provides coverage for medical expenses up to $50,000, subject to a $100 deductible. Therefore, you will be responsible for the initial $100, and we will reimburse the outstanding $185. Do you have all the original receipts and the physician's report available?",
            },
          },
          {
            speaker: "you",
            textEn:
              "Yes, I have the receipts from the clinic and the pharmacy. The clinic also gave me a form with diagnosis codes. How do I submit everything?",
            textZh: "有的，诊所和药房的收据都有。诊所还给了我一份有诊断代码的表格。怎么提交这些材料？",
            casualVersion:
              "Yeah, got the receipts from the clinic and pharmacy. Clinic also gave me a form with diagnosis codes. How do I send all this in?",
            commonMistake: {
              wrong: "How to submit everything?",
              correct: "How do I submit everything?",
              explanation: "疑问句中通常需要助动词 do/did/will 等，不能直接将疑问词与动词连接。",
            },
            formalityVariants: {
              casual:
                "Yeah, got the receipts from the clinic and pharmacy. Clinic also gave me a form with diagnosis codes. How do I send all this in?",
              standard:
                "Yes, I have the receipts from the clinic and the pharmacy. The clinic also gave me a form with diagnosis codes. How do I submit everything?",
              formal:
                "Yes, I possess the receipts from both the clinic and the pharmacy. Additionally, the clinic provided a form containing diagnosis codes. What is the appropriate procedure for submitting these documents?",
            },
          },
          {
            speaker: "them",
            role: "保险客服",
            textEn:
              "You can submit them through our app or website. Just upload photos of all receipts, the doctor's report, and the claim form. Make sure everything is clear and legible. Processing usually takes 5 to 10 business days.",
            textZh:
              "您可以通过我们的App或网站提交。上传所有收据、医生报告和理赔表的照片就行。确保内容清晰可读。处理通常需要5到10个工作日。",
            commonMistake: {
              wrong: "Upload photos of all receipts, doctor report, and claim form.",
              correct: "Upload photos of all receipts, the doctor's report, and the claim form.",
              explanation: "“doctor's report” 意为“医生的报告”，通常需要所有格 's。",
            },
            keyPhrases: [
              { en: "upload photos", zh: "上传照片" },
              { en: "claim form", zh: "理赔表" },
              { en: "legible", zh: "清晰可读" },
              { en: "business days", zh: "工作日" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Easiest way is through our app — just snap photos of everything and upload them. Make sure the pictures are clear. We usually process claims within 5 to 10 business days.",
                textZh:
                  "最简单的方式是用我们的App——拍好所有材料的照片上传就行。确保照片清晰。我们通常5到10个工作日处理完。",
                actionHint: "下载保险App上传",
                frequency: "common",
              },
              {
                textEn:
                  "You can do it all online — our website or app. Upload the receipts, doctor's report, and claim form. Just make sure they're readable. Should take about a week to process.",
                textZh: "都可以在网上办——我们的网站或App。上传收据、医生报告和理赔表。确保能看清楚。大约一周处理完。",
                actionHint: "在线提交理赔",
                frequency: "common",
              },
            ],
            casualVersion:
              "You can send 'em through our app or website. Just upload pics of all the receipts, doctor's report, and the claim form. Make sure everything's clear. Takes about 5 to 10 business days.",
            formalityVariants: {
              casual:
                "You can send 'em through our app or website. Just upload pics of all the receipts, doctor's report, and the claim form. Make sure everything's clear. Takes about 5 to 10 business days.",
              standard:
                "You can submit them through our app or website. Just upload photos of all receipts, the doctor's report, and the claim form. Make sure everything is clear and legible. Processing usually takes 5 to 10 business days.",
              formal:
                "You may submit these documents via our mobile application or our official website. Please upload clear and legible photographs of all receipts, the physician's report, and the completed claim form. The processing timeframe typically ranges from 5 to 10 business days.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Got it. Will the reimbursement be sent to my bank account, or do I need to provide a mailing address?",
            textZh: "明白了。报销的钱是打到我的银行账户，还是需要提供邮寄地址？",
            casualVersion:
              "Okay, so will the money go straight to my bank, or do I need to give you a mailing address?",
            commonMistake: {
              wrong: "Will reimbursement send to my bank account?",
              correct: "Will the reimbursement be sent to my bank account?",
              explanation: "reimbursement（报销款）是名词，不能主动发送，需要用被动语态 'be sent to'。",
            },
            formalityVariants: {
              casual: "Okay, so will the money go straight to my bank, or do I need to give you a mailing address?",
              standard:
                "Got it. Will the reimbursement be sent to my bank account, or do I need to provide a mailing address?",
              formal:
                "Understood. Will the reimbursement be processed via direct bank transfer, or is a physical mailing address required for remittance?",
            },
          },
          {
            speaker: "them",
            role: "保险客服",
            textEn:
              "We can do a direct bank transfer. You'll just need to enter your bank details in the claim form — account number, routing number if it's a US bank, or your SWIFT code for international transfers. Is there anything else I can help with?",
            textZh:
              "我们可以直接银行转账。您只需要在理赔表里填写银行信息——如果是美国银行就填账户号和routing number，国际转账的话填SWIFT代码。还有什么需要帮忙的吗？",
            commonMistake: {
              wrong: "You just need to fill in your bank information.",
              correct: "You just need to fill in your bank details.",
              explanation: "“bank details” 听起来更具体、更自然，指明是账户信息。",
            },
            keyPhrases: [
              { en: "direct bank transfer", zh: "银行直接转账" },
              { en: "bank details", zh: "银行信息" },
              { en: "routing number", zh: "银行路由号" },
              { en: "SWIFT code", zh: "SWIFT代码（国际汇款代码）" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We can wire it straight to your bank. Just put your bank info on the claim form — account number and SWIFT code for international. Anything else I can help with?",
                textZh:
                  "我们可以直接汇到你的银行。在理赔表上填好银行信息——国际转账填账号和SWIFT代码。还有别的需要帮忙的吗？",
                actionHint: "填写银行信息",
                frequency: "common",
              },
              {
                textEn:
                  "Yeah, we do bank transfers. You'll just need to include your banking details in the form — account number, and if it's overseas, your SWIFT code. Need anything else?",
                textZh:
                  "可以的，我们做银行转账。你只需要在表格里写上银行信息——账号，如果是海外的话加SWIFT代码。还需要什么？",
                actionHint: "准备好SWIFT代码",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, we can just do a direct bank transfer. Just put your bank info on the claim form — account number, routing number for US banks, or SWIFT for international. Anything else?",
            culturalNote:
              "Routing number（银行路由号）和SWIFT code（国际银行代码）是在美国进行银行转账的特有概念，对中国旅",
            formalityVariants: {
              casual:
                "Yeah, we can just do a direct bank transfer. Just put your bank info on the claim form — account number, routing number for US banks, or SWIFT for international. Anything else?",
              standard:
                "We can do a direct bank transfer. You'll just need to enter your bank details in the claim form — account number, routing number if it's a US bank, or your SWIFT code for international transfers. Is there anything else I can help with?",
              formal:
                "We are able to facilitate a direct bank transfer. You will simply need to input your banking details onto the claim form, including your account number, routing number if applicable for a US bank, or your SWIFT code for international wire transfers. Is there anything further I may assist you with today?",
            },
          },
          {
            speaker: "you",
            textEn: "One more question — if I need to see the doctor again, does the deductible apply each time?",
            textZh: "再问一个——如果我再去看医生，每次都要扣免赔额吗？",
            casualVersion: "One more thing — if I gotta see the doc again, does the deductible apply every time?",
            commonMistake: {
              wrong: "Deductible need to apply each time?",
              correct: "Does the deductible apply each time?",
              explanation: "疑问句通常需要助动词 do/does/did，且主语 deductible 后动词需要 apply。",
            },
            formalityVariants: {
              casual: "One more thing — if I gotta see the doc again, does the deductible apply every time?",
              standard: "One more question — if I need to see the doctor again, does the deductible apply each time?",
              formal:
                "I have one additional query: should I require another medical consultation, will the deductible be reapplied for each subsequent visit?",
            },
          },
          {
            speaker: "them",
            role: "保险客服",
            textEn:
              "No, the deductible is per policy period, not per visit. Since you've already met the $100 deductible, any additional covered medical expenses during this trip will be reimbursed in full, up to your policy limit.",
            textZh:
              "不会，免赔额是按保单周期算的，不是按每次就诊。既然您已经达到了100美元的免赔额，这次旅行中任何额外的承保医疗费用都会全额报销，直到保单上限。",
            commonMistake: {
              wrong: "No, the deductible is according to policy period, not per visit.",
              correct: "No, the deductible is per policy period, not per visit.",
              explanation: "“per policy period” 比 “according to policy period” 更地道。",
            },
            keyPhrases: [
              { en: "per policy period", zh: "按保单周期" },
              { en: "per visit", zh: "按每次就诊" },
              { en: "met the deductible", zh: "达到免赔额" },
              { en: "reimbursed in full", zh: "全额报销" },
              { en: "policy limit", zh: "保单上限" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Nope, it's a one-time thing for the whole trip. You've already hit your $100 deductible, so from now on, everything covered gets reimbursed 100%, up to the policy max.",
                textZh:
                  "不会，整个旅程只扣一次。你已经达到100美元免赔额了，所以接下来覆盖的费用全额报销，直到保单上限。",
                actionHint: "后续就医无需再付免赔额",
                frequency: "common",
              },
              {
                textEn:
                  "Good news — the deductible is per policy, not per visit. Since you've already met it, any other medical costs this trip are fully covered up to your limit.",
                textZh:
                  "好消息——免赔额是按保单周期算的，不是每次就诊。你已经达到了，这次旅行后续的医疗费用都会全额报销直到上限。",
                actionHint: "放心就医",
                frequency: "common",
              },
            ],
            casualVersion:
              "Nah, deductible's per policy period, not each visit. Since you already hit the $100 deductible, any other covered medical stuff this trip gets fully reimbursed, up to your limit.",
            culturalNote:
              "明确免赔额是按保单周期而非每次就诊来计算，这在中国和美国保险体系中可能存在差异，容易造成混淆。",
            formalityVariants: {
              casual:
                "Nah, deductible's per policy period, not each visit. Since you already hit the $100 deductible, any other covered medical stuff this trip gets fully reimbursed, up to your limit.",
              standard:
                "No, the deductible is per policy period, not per visit. Since you've already met the $100 deductible, any additional covered medical expenses during this trip will be reimbursed in full, up to your policy limit.",
              formal:
                "No, the deductible is applied per policy period, not on a per-visit basis. As you have already satisfied the $100 deductible, any subsequent covered medical expenses incurred during this specific trip will be reimbursed in full, up to your designated policy limit.",
            },
          },
        ],
      },

      // --- Flow 2: 咨询保险覆盖 ---
      {
        id: "coverage-questions",
        titleZh: "咨询保险覆盖",
        titleEn: "Insurance Coverage Questions",
        description: "看诊前咨询旅行保险覆盖哪些项目，不覆盖哪些",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi, I'm about to see a doctor here in the US. Before I go, I want to make sure I understand what my travel insurance covers.",
            textZh: "你好，我在美国准备去看医生。去之前，我想确认一下我的旅行保险覆盖哪些项目。",
            casualVersion:
              "Hey, I'm 'bout to see a doc here in the US. Wanna make sure I get what my travel insurance covers first.",
            commonMistake: {
              wrong: "Hi, I will see a doctor.",
              correct: "Hi, I'm about to see a doctor.",
              explanation: "“will” 听起来像承诺或意愿，而 “am about to” 更自然地表达即将发生的、有计划的行动。",
            },
            formalityVariants: {
              casual: "Hey, seeing a doc here in the US soon. Just wanna double-check my travel insurance coverage.",
              standard:
                "Hi, I'm about to see a doctor here in the US. Before I go, I want to make sure I understand what my travel insurance covers.",
              formal:
                "Good morning/afternoon, I will be consulting with a physician here in the United States shortly. Prior to my appointment, I would appreciate a comprehensive overview of my travel insurance coverage.",
            },
          },
          {
            speaker: "them",
            role: "保险客服",
            textEn: "Of course. What's your policy number? I'll pull up your coverage details.",
            textZh: "当然。您的保单号是多少？我来调出您的保障详情。",
            commonMistake: {
              wrong: "What is your policy number? I will pull out your coverage details.",
              correct: "What is your policy number? I'll pull up your coverage details.",
              explanation: "“pull up” 更常用于在电脑系统里查找信息，“pull out” 指物理取出。",
            },
            keyPhrases: [
              { en: "coverage details", zh: "保障详情" },
              { en: "pull up", zh: "调出/查询" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure, happy to walk you through that. Can I get your policy number? I'll look up exactly what you're covered for.",
                textZh: "当然，很高兴帮你了解。保单号是多少？我查一下你具体覆盖哪些。",
                actionHint: "提供保单号",
                frequency: "common",
              },
              {
                textEn: "Absolutely. Give me your policy number and I'll pull everything up for you.",
                textZh: "当然。给我你的保单号，我帮你全部调出来。",
                actionHint: "准备好保单号",
                frequency: "common",
              },
            ],
            casualVersion: "Sure. What's your policy number? I'll pull up your coverage.",
            formalityVariants: {
              casual: "Sure thing. Policy number? I'll check your coverage.",
              standard: "Of course. What's your policy number? I'll pull up your coverage details.",
              formal:
                "Certainly. Could you please provide your policy number? I will then access your comprehensive coverage information.",
            },
          },
          {
            speaker: "you",
            textEn: "It's TI-88234. I think I need to see a specialist — possibly a dermatologist. Is that covered?",
            textZh: "TI-88234。我觉得需要看专科医生——可能是皮肤科。这个覆盖吗？",
            culturalNote: "在美国看专科医生通常需要全科医生的转诊（referral），否则保险可能不报销。",
            casualVersion: "It's TI-88234. Think I need a specialist—maybe a derm. Is that covered?",
            commonMistake: {
              wrong: "This is TI-88234.",
              correct: "It's TI-88234.",
              explanation: "在报数字、电话或ID时，英文更常用 “It's” 而非 “This is”。",
            },
            formalityVariants: {
              casual: "TI-88234. I might need a specialist, like a skin doctor. Covered?",
              standard:
                "It's TI-88234. I think I need to see a specialist — possibly a dermatologist. Is that covered?",
              formal:
                "My policy number is TI-88234. I anticipate requiring the consultation of a specialist, potentially a dermatologist. Could you confirm if such a visit is included in my coverage?",
            },
          },
          {
            speaker: "them",
            role: "保险客服",
            textEn:
              "Let me check... Your policy covers specialist visits if you're referred by a general practitioner. So you'd need to see a GP first, and if they refer you to a dermatologist, that visit would be covered. Without a referral, you'd have to pay out of pocket.",
            textZh:
              "我查一下……您的保单覆盖专科就诊，但需要全科医生的转介。所以您需要先看全科医生，如果他们转介您去皮肤科，那次就诊就可以报销。没有转介的话，需要自费。",
            keyPhrases: [
              { en: "specialist", zh: "专科医生" },
              { en: "referred", zh: "转介" },
              { en: "general practitioner", zh: "全科医生（GP）" },
              { en: "dermatologist", zh: "皮肤科医生" },
              { en: "referral", zh: "转介信" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Specialist visits require a referral from a primary care doctor. Without one, it's not covered.",
                textZh: "看专科需要主治医生的转介。没有的话不报销。",
                actionHint: "先去看全科医生",
                frequency: "common",
              },
            ],
            casualVersion:
              "Lemme check... Specialist visits are covered if your GP refers you. So, see a GP first. If they send you to a derm, that's covered. No referral, you pay yourself.",
            culturalNote: "美国医疗系统常需要GP（全科医生）转介才能看专科，不然不报销。",
            commonMistake: {
              wrong: "You need to see GP first.",
              correct: "You'd need to see a GP first.",
              explanation: "“GP” (General Practitioner) 是可数名词，前面需要使用不定冠词 “a”。",
            },
            formalityVariants: {
              casual:
                "Hang on... Specialist visits are covered *with* a GP referral. So, GP first, then if they send you to a specialist, you're good. Otherwise, you're paying.",
              standard:
                "Let me check... Your policy covers specialist visits if you're referred by a general practitioner. So you'd need to see a GP first, and if they refer you to a dermatologist, that visit would be covered. Without a referral, you'd have to pay out of pocket.",
              formal:
                "Please allow me a moment to verify... Your policy stipulates coverage for specialist consultations contingent upon a prior referral from a general practitioner. Therefore, an initial consultation with a GP is requisite; should they issue a referral to a dermatologist, that subsequent visit would be covered. Absent such a referral, the expenses would be borne personally.",
            },
          },
          {
            speaker: "you",
            textEn: "What about dental and vision? I also chipped a tooth yesterday.",
            textZh: "牙科和眼科呢？我昨天还磕了一颗牙。",
            commonMistake: {
              wrong: "My tooth broke yesterday.",
              correct: "I also chipped a tooth yesterday.",
              explanation: "用 'chipped a tooth' 更地道自然，'broke' 听起来可能更严重或不常见。",
            },
            culturalNote: "美国旅行保险通常只覆盖紧急牙科（emergency dental），不包括常规检查或美容项目。",
            casualVersion: "Dental, vision? Also chipped a tooth yesterday.",
            formalityVariants: {
              casual: "And dental/vision? Oh, chipped a tooth yesterday too.",
              standard: "What about dental and vision? I also chipped a tooth yesterday.",
              formal:
                "Could you also clarify the coverage for dental and vision services? Additionally, I experienced a chipped tooth yesterday.",
            },
          },
          {
            speaker: "them",
            role: "保险客服",
            textEn:
              "Dental is covered only for emergency treatment — like your chipped tooth, an abscess, or severe pain. Routine cleanings are not covered. Vision is not included in your plan. For the chipped tooth, you should see a dentist and keep all receipts. That would qualify as emergency dental care.",
            textZh:
              "牙科只覆盖紧急治疗——比如您的磕牙、脓肿或剧烈疼痛。常规洗牙不包含。眼科不在您的计划内。磕掉的牙建议去看牙医，保留所有收据。这属于紧急牙科护理，可以理赔。",
            culturalNote: "美国旅行保险的牙科和眼科覆盖范围通常非常有限，仅限于紧急情况，与中国普遍的全面医保不同。",
            keyPhrases: [
              { en: "emergency treatment", zh: "紧急治疗" },
              { en: "chipped tooth", zh: "磕掉的牙/牙缺角" },
              { en: "abscess", zh: "脓肿" },
              { en: "routine cleanings", zh: "常规洗牙" },
              { en: "qualify as", zh: "属于/符合" },
            ],
            vocabNotes: {
              chipped: {
                meaningInContext: "在这句话里表示：牙齿磕掉了一小块",
                similarUsage: "类似用法：I chipped my front tooth on a bottle cap.",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Dental's only covered if it's an emergency — a chipped tooth, an infection, or really bad pain. Regular cleanings and checkups aren't included. Vision isn't covered at all. But your chipped tooth definitely counts as an emergency, so go see a dentist and save every receipt.",
                textZh:
                  "牙科只有紧急情况才覆盖——磕牙、感染或剧烈疼痛。常规洗牙和检查不包。眼科完全不包。不过你磕的牙肯定算紧急，去看牙医把收据都留着。",
                actionHint: "尽快看牙医",
                frequency: "common",
              },
              {
                textEn:
                  "For dental, we only cover emergencies. Your chipped tooth would fall under that. Routine stuff like cleanings? Not covered. Vision isn't part of your plan either.",
                textZh: "牙科我们只覆盖紧急情况。你磕的牙算在内。常规的比如洗牙？不覆盖。眼科也不在你的计划里。",
                actionHint: "保留紧急牙科收据",
                frequency: "common",
              },
            ],
            casualVersion:
              "Dental's only for emergencies—like your chipped tooth, an abscess, or bad pain. No routine cleanings. Vision's not in your plan. For the chipped tooth, see a dentist, keep receipts. That counts as emergency dental.",
            commonMistake: {
              wrong: "Dental only covers emergency treatment.",
              correct: "Dental is covered only for emergency treatment.",
              explanation: "“Dental” 在这里是保险的一个类别，作为主语时需搭配被动语态 “is covered” 表明其被保险覆盖。",
            },
            formalityVariants: {
              casual:
                "Dental's just for emergencies—like that chipped tooth, an abscess, or bad pain. No regular cleanings. Vision's not covered at all. For the chipped tooth, definitely see a dentist and hold onto all your receipts. That's emergency dental.",
              standard:
                "Dental is covered only for emergency treatment — like your chipped tooth, an abscess, or severe pain. Routine cleanings are not covered. Vision is not included in your plan. For the chipped tooth, you should see a dentist and keep all receipts. That would qualify as emergency dental care.",
              formal:
                "Dental coverage is strictly limited to emergency treatment, such as your chipped tooth, an abscess, or instances of severe pain. Routine prophylactic cleanings are explicitly excluded. Furthermore, vision services are not encompassed within your current plan. Regarding the chipped tooth, it is advisable to consult a dentist and meticulously retain all documentation of expenses incurred, as this situation qualifies as emergency dental care.",
            },
          },
          {
            speaker: "you",
            textEn: "Good to know. What's the maximum amount the insurance will pay for this trip?",
            textZh: "了解了。这次旅行保险最多能报多少？",
            casualVersion: "Got it. What's the max the insurance'll pay for this trip?",
            commonMistake: {
              wrong: "What's the maximum amount the insurance can pay?",
              correct: "What's the maximum amount the insurance will pay?",
              explanation: "“will pay” 指保险合同中规定的最高赔付额度，而不是能力上的“can pay”。",
            },
            formalityVariants: {
              casual: "Got it. So, what's the insurance's total payout limit for this trip?",
              standard: "Good to know. What's the maximum amount the insurance will pay for this trip?",
              formal:
                "Understood. Could you please specify the maximum aggregate coverage amount provided by this policy for the duration of this trip?",
            },
          },
          {
            speaker: "them",
            role: "保险客服",
            textEn:
              "Your policy has a $50,000 limit for medical expenses, a $5,000 limit for emergency dental, and $500 for emergency evacuation per incident. There's also a 24-hour emergency hotline — if something serious happens, call us first and we can direct you to an approved hospital.",
            textZh:
              "您的保单医疗费用上限为5万美元，紧急牙科上限5千美元，紧急救援每次事件上限500美元。还有24小时紧急热线——如果发生严重情况，先打电话给我们，我们可以指引您去指定医院。",
            culturalNote: "紧急情况下先致电保险公司，由其指导就医，而非自行决定，这在一些国家是常见操作，以确保费用覆盖和流程合规。",
            commonMistake: {
              wrong: "Your policy has a $50,000 limit for medical expense.",
              correct: "Your policy has a $50,000 limit for medical expenses.",
              explanation: "“medical expenses” 是复数形式，指医疗费用。",
            },
            keyPhrases: [
              { en: "policy limit", zh: "保单上限" },
              { en: "emergency evacuation", zh: "紧急救援/紧急转运" },
              { en: "per incident", zh: "每次事件" },
              { en: "approved hospital", zh: "指定医院" },
              { en: "24-hour emergency hotline", zh: "24小时紧急热线" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You've got $50K for medical, $5K for emergency dental, and $500 per incident for emergency evacuation. And we have a 24/7 hotline — if anything serious goes down, call us first and we'll point you to an in-network hospital.",
                textZh:
                  "医疗5万美元，紧急牙科5千美元，紧急转运每次500美元。还有24小时热线——出了严重情况先打给我们，我们会指引你去合作医院。",
                actionHint: "记下紧急热线号码",
                frequency: "common",
              },
              {
                textEn:
                  "Your caps are $50,000 medical, $5,000 dental emergencies, $500 for emergency transport. Pro tip — if something big happens, call our 24-hour line first so we can get you to an approved facility.",
                textZh:
                  "你的上限是医疗5万、紧急牙科5千、紧急转运500。建议——出大事先打我们24小时热线，我们帮你安排去指定医院。",
                actionHint: "保存紧急联系方式",
                frequency: "common",
              },
            ],
            casualVersion:
              "You've got a $50K limit for medical, $5K for emergency dental, and $500 for emergency evacuation per incident. There's a 24-hour hotline too—if something serious happens, call us first, and we'll point you to an approved hospital.",
            formalityVariants: {
              casual:
                "So, $50K max for medical, $5K for emergency dental, and $500 for emergency evacuation per incident. Plus, a 24/7 hotline—if something bad goes down, call us first; we'll tell you where to go.",
              standard:
                "Your policy has a $50,000 limit for medical expenses, a $5,000 limit for emergency dental, and $500 for emergency evacuation per incident. There's also a 24-hour emergency hotline — if something serious happens, call us first and we can direct you to an approved hospital.",
              formal:
                "Your policy includes a $50,000 aggregate limit for medical expenses, a $5,000 limit for emergency dental procedures, and $500 for emergency evacuation, each on a per-incident basis. Furthermore, a 24-hour emergency hotline is available; in the event of a serious incident, please contact us immediately for guidance to an approved medical facility.",
            },
          },
          {
            speaker: "you",
            textEn:
              "That's very clear. Can you also email me a summary of my coverage? It would be helpful to show the doctor.",
            textZh: "非常清楚。能把保障摘要发到我邮箱吗？给医生看的时候会有用。",
            casualVersion: "Super clear. Can you email me a coverage summary too? Be good to show the doc.",
            commonMistake: {
              wrong: "Can you send me an email summary?",
              correct: "Can you email me a summary?",
              explanation:
                "在美式英语中，“email” 常直接作动词，后接接收者和内容，不需要 “send me an email” 这样多余的表达。",
            },
            formalityVariants: {
              casual:
                "Got it, totally clear. Could you just shoot me an email with the coverage summary? Handy for the doc.",
              standard:
                "That's very clear. Can you also email me a summary of my coverage? It would be helpful to show the doctor.",
              formal:
                "Thank you, that clarifies everything thoroughly. Would it be possible for you to electronically transmit a summary of my coverage? This would be highly beneficial for presentation to the physician.",
            },
          },
          {
            speaker: "them",
            role: "保险客服",
            textEn:
              "Absolutely. I'll send a coverage summary and a pre-authorization letter to your email right away. The letter will confirm that your insurance is active and list what's covered. Most doctors accept this as proof of insurance.",
            textZh:
              "当然。我马上把保障摘要和预授权信发到您的邮箱。信函会确认您的保险有效，并列出覆盖项目。大多数医生接受这个作为保险证明。",
            culturalNote: "美国看病时，通常需要出示保险证明。预授权信（pre-authorization letter）可以作为有效证明。",
            commonMistake: {
              wrong: "I'll send you a coverage summary and a pre-authorization letter to your email immediately.",
              correct: "I'll send you a coverage summary and a pre-authorization letter to your email right away.",
              explanation: "“right away” 比 “immediately” 更口语化和自然。",
            },
            keyPhrases: [
              { en: "coverage summary", zh: "保障摘要" },
              { en: "pre-authorization letter", zh: "预授权信" },
              { en: "proof of insurance", zh: "保险证明" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For sure. I'll shoot you an email with a coverage summary and a pre-auth letter right now. You can show it to the doctor — it proves your insurance is active and spells out what's covered.",
                textZh:
                  "当然。我现在就给你发邮件，有保障摘要和预授权信。可以给医生看——证明你的保险有效，列明覆盖项目。",
                actionHint: "打印带去看诊",
                frequency: "common",
              },
              {
                textEn:
                  "Absolutely. I'll email you a summary and a letter confirming your coverage. Most doctors will take that as proof of insurance.",
                textZh: "没问题。我会邮件发给你摘要和确认覆盖的信件。大多数医生接受这个作为保险证明。",
                actionHint: "保存邮件给医生看",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep. I'll send a coverage summary and a pre-auth letter to your email ASAP. It'll confirm your insurance is active and list what's covered. Most docs take that as proof.",
            formalityVariants: {
              casual:
                "Totally. I'll fire off that coverage summary and pre-auth letter to your email right away. It'll confirm your active insurance and what's covered. Most docs are good with that as proof.",
              standard:
                "Absolutely. I'll send a coverage summary and a pre-authorization letter to your email right away. The letter will confirm that your insurance is active and list what's covered. Most doctors accept this as proof of insurance.",
              formal:
                "Certainly. I will promptly dispatch both a coverage summary and a pre-authorization letter to your designated email address. This letter will serve to confirm the active status of your insurance and delineate the covered benefits. Such documentation is generally accepted by medical practitioners as valid proof of insurance.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 配眼镜 ====================
  {
    id: "medical-optician",
    category: "medical",
    titleZh: "配眼镜",
    titleEn: "Getting Glasses",
    description: "在国外做眼科检查、获取处方并选配眼镜",
    otherRole: "验光师/眼镜店员",
    otherRoleIcon: "glasses",
    flows: [
      // --- Flow 1: 验光检查 ---
      {
        id: "eye-exam",
        titleZh: "验光检查",
        titleEn: "Eye Exam",
        description: "做视力检查，获取配镜处方",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to get an eye exam. My glasses broke and I need a new prescription.",
            textZh: "你好，我想做个视力检查。我的眼镜坏了，需要一个新的配镜处方。",
            culturalNote:
              "在美国，配眼镜需要有效的验光处方（prescription），通常有效期1-2年。验光师（optometrist）和眼镜店（optical shop）通常是分开的。",
            casualVersion: "Hey, need an eye exam. My glasses broke, so I need a new prescription.",
            commonMistake: {
              wrong: "Hi, I want to get an eye exam. My glasses broken, I need a new prescription.",
              correct: "Hi, I'd like to get an eye exam. My glasses broke and I need a new prescription.",
              explanation: '"I want" 显得生硬；"broken" 是形容词，需要动词形式。',
            },
            formalityVariants: {
              casual: "Hey, need an eye exam. Glasses broke, gotta get a new prescription.",
              standard: "Hi, I'd like to get an eye exam. My glasses broke and I need a new prescription.",
              formal:
                "Good morning/afternoon. I require an eye examination. My current spectacles are damaged, and I am in need of an updated prescription.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Sure. We have an optometrist available in about 20 minutes. The eye exam is $75 without insurance. Have you had an eye exam before?",
            textZh: "好的。大约20分钟后有验光师空出来。没有保险的话，视力检查75美元。您以前做过验光检查吗？",
            keyPhrases: [
              { en: "optometrist", zh: "验光师" },
              { en: "eye exam", zh: "视力检查/验光" },
              { en: "prescription", zh: "处方/验光单" },
            ],
            alternativeExpressions: [
              {
                textEn: "We can fit you in for an exam shortly. Do you know your current prescription?",
                textZh: "我们很快可以安排验光。您知道您现在的度数吗？",
                actionHint: "提供现有度数信息",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep. Optometrist's free in like 20. Exam's 75 bucks if you don't have insurance. Had one before?",
            formalityVariants: {
              casual: "Yeah. Optometrist'll be free in like 20. Exam's 75 bucks if no insurance. Done one before?",
              standard:
                "Sure. We have an optometrist available in about 20 minutes. The eye exam is $75 without insurance. Have you had an eye exam before?",
              formal:
                "Certainly. An optometrist will be available to assist you in approximately 20 minutes. The eye examination fee is $75 for patients without insurance coverage. May I inquire if you have undergone an eye examination previously?",
            },
          },
          {
            speaker: "you",
            textEn:
              "Yes, but it was a long time ago. I think my vision has gotten worse. Things are blurry at a distance.",
            textZh: "做过，但很久以前了。我觉得视力变差了。远处的东西看不清。",
            casualVersion:
              "Yeah, but it's been ages. Pretty sure my vision's gotten worse. Everything's blurry far away.",
            commonMistake: {
              wrong: "Yes, but it was long time ago. I think my vision became worse. The far things are blurry.",
              correct:
                "Yes, but it was a long time ago. I think my vision has gotten worse. Things are blurry at a distance.",
              explanation:
                '"a long time ago"是固定搭配；"become worse"较书面化；"things are blurry at a distance"更自然。',
            },
            formalityVariants: {
              casual: "Yeah, but it's been ages. Vision's worse now, definitely. Blurry stuff far away.",
              standard:
                "Yes, but it was a long time ago. I think my vision has gotten worse. Things are blurry at a distance.",
              formal:
                "Indeed, though a significant period has elapsed. I suspect a deterioration in my visual acuity. Distant objects appear indistinct.",
            },
          },
          {
            speaker: "them",
            role: "验光师",
            textEn:
              "Hello, I'm Dr. Lee. Let's start with the eye exam. Please sit in this chair and look at the chart on the wall. Can you read the letters on the third line?",
            textZh: "你好，我是 Lee 医生。我们开始验光吧。请坐在这把椅子上，看墙上的图表。能读出第三行的字母吗？",
            keyPhrases: [
              { en: "eye chart", zh: "视力表" },
              { en: "read the letters", zh: "读字母" },
              { en: "third line", zh: "第三行" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Hey, I'm Dr. Lee. Have a seat right here and look straight at the chart. Read the letters on the third line for me if you can.",
                textZh: "嘿，我是 Lee 医生。请坐这里，看正前方的图表。试试读一下第三行的字母。",
                actionHint: "尽力辨认字母",
                frequency: "common",
              },
              {
                textEn:
                  "Hi there. Let's get started. Sit here, eyes on the wall chart. Can you make out the third row?",
                textZh: "你好。我们开始吧。坐这儿，看墙上的表。第三行能看清吗？",
                actionHint: "尝试读出字母",
                frequency: "common",
              },
            ],
            casualVersion:
              "Hi, I'm Dr. Lee. Let's get this eye exam going. Have a seat here, look at the chart. Can you read that third line?",
            formalityVariants: {
              casual:
                "Hey, Dr. Lee. Let's start the eye exam. Grab a seat, look at the chart. Third line, can you read it?",
              standard:
                "Hello, I'm Dr. Lee. Let's start with the eye exam. Please sit in this chair and look at the chart on the wall. Can you read the letters on the third line?",
              formal:
                "Good morning/afternoon, I am Dr. Lee. We shall now commence the ocular examination. Kindly be seated in this chair and direct your attention to the visual acuity chart displayed on the wall. Would you be able to identify the letters presented on the third line?",
            },
          },
          {
            speaker: "you",
            textEn: "E, F, P... I can't make out the rest. It's too blurry.",
            textZh: "E、F、P……后面看不清了。太模糊了。",
            casualVersion: "E, F, P... Can't really see the others. Too blurry.",
            commonMistake: {
              wrong: "E, F, P... I can't see clear the rest. It's too blurry.",
              correct: "E, F, P... I can't make out the rest. It's too blurry.",
              explanation: '"see clear"不自然，"make out"表示辨认清楚。',
            },
            formalityVariants: {
              casual: "E, F, P... Can't see the others. Super blurry.",
              standard: "E, F, P... I can't make out the rest. It's too blurry.",
              formal: "E, F, P... I am unable to discern the remaining characters. The image is excessively blurred.",
            },
          },
          {
            speaker: "them",
            role: "验光师",
            textEn:
              "That's okay. Now I'm going to place different lenses in front of your eyes. Tell me which is clearer — option one, or option two?",
            textZh: "没关系。现在我会在你眼前放不同的镜片。告诉我哪个更清楚——第一个，还是第二个？",
            keyPhrases: [
              { en: "lenses", zh: "镜片" },
              { en: "which is clearer", zh: "哪个更清楚" },
              { en: "option one or option two", zh: "第一个还是第二个" },
            ],
            vocabNotes: {
              lenses: {
                meaningInContext: "在这句话里表示：验光时用来测试的试戴镜片",
                similarUsage: "类似用法：These lenses correct your astigmatism.",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "No worries. I'm gonna flip through some lenses now. Just tell me — one or two? Which one's sharper?",
                textZh: "没关系。我现在换不同的镜片。告诉我——一还是二？哪个更清楚？",
                actionHint: "选择更清晰的",
                frequency: "common",
              },
              {
                textEn:
                  "That's fine, that tells me a lot. Now I'm going to test different lenses. Just say which looks better — A or B.",
                textZh: "没事，这就说明很多了。现在我要测试不同镜片。告诉我哪个看起来更好——A还是B。",
                actionHint: "如实对比选择",
                frequency: "common",
              },
            ],
            casualVersion:
              "No worries. Okay, putting some lenses in front of your eyes. Tell me, which is clearer — one or two?",
            formalityVariants: {
              casual: "Alright. Putting lenses in front. Which is clearer, one or two?",
              standard:
                "That's okay. Now I'm going to place different lenses in front of your eyes. Tell me which is clearer — option one, or option two?",
              formal:
                "That is perfectly acceptable. I shall now proceed to introduce various ophthalmic lenses before your eyes. Kindly indicate which presentation, option one or option two, offers superior clarity.",
            },
          },
          {
            speaker: "you",
            textEn: "Option two is clearer.",
            textZh: "第二个更清楚。",
            commonMistake: {
              wrong: "The second one is more clear.",
              correct: "The second one is clearer.",
              explanation: "形容词比较级，'clear' 直接加 '-er'。'more clear' 不自然。",
            },
            casualVersion: "Two's clearer.",
            formalityVariants: {
              casual: "Two's better.",
              standard: "Option two is clearer.",
              formal: "Option two provides superior clarity.",
            },
          },
          {
            speaker: "them",
            role: "验光师",
            textEn:
              "Your prescription is -3.25 for the right eye and -2.75 for the left, with slight astigmatism in both eyes. Here's your prescription — it's valid for one year. You can get glasses made at any optical shop with this.",
            textZh:
              "你的处方是右眼 -3.25，左眼 -2.75，两只眼睛都有轻微散光。这是你的验光单——有效期一年。拿着这个可以去任何眼镜店配镜。",
            commonMistake: {
              wrong: "Your eye prescription is...",
              correct: "Your prescription is...",
              explanation: "在中文语境中'眼科处方'可能更常见，但英文直接说'prescription'就够了",
            },
            keyPhrases: [
              { en: "prescription", zh: "验光处方/度数" },
              { en: "right eye / left eye", zh: "右眼/左眼" },
              { en: "astigmatism", zh: "散光" },
              { en: "valid for one year", zh: "有效期一年" },
              { en: "optical shop", zh: "眼镜店" },
            ],
            vocabNotes: {
              astigmatism: {
                meaningInContext: "在这句话里表示：角膜形状不规则导致的散光",
                similarUsage: "类似用法：My astigmatism makes lights look streaky at night.",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Alright, so you're -3.25 in the right eye and -2.75 in the left, with a bit of astigmatism in both. Here's your script — it's good for a year. You can take it anywhere to get glasses made.",
                textZh:
                  "好的，右眼 -3.25，左眼 -2.75，两只眼都有一点散光。这是你的处方——有效期一年。拿着它可以去任何地方配眼镜。",
                actionHint: "保管好处方单",
                frequency: "common",
              },
              {
                textEn:
                  "So here's what we're looking at: minus 3.25 right, minus 2.75 left, slight astigmatism both sides. Your prescription's good for 12 months. Take it to any optical shop.",
                textZh: "情况是这样：右眼 -3.25，左眼 -2.75，两侧都有轻微散光。处方有效期12个月。拿去任何眼镜店都行。",
                actionHint: "一年内配镜有效",
                frequency: "common",
              },
            ],
            casualVersion:
              "Okay, so your prescription is -3.25 right, -2.75 left, plus a little astigmatism in both. Here's the prescription, good for a year. You can get glasses made with this at any optical shop.",
            culturalNote: "美国验光单有效期通常一年，中国通常没有有效期",
            formalityVariants: {
              casual:
                "Alright, prescription's -3.25 right, -2.75 left, slight astigmatism in both. Here's the paper, good for a year. Take it to any optical shop for glasses.",
              standard:
                "Your prescription is -3.25 for the right eye and -2.75 for the left, with slight astigmatism in both eyes. Here's your prescription — it's valid for one year. You can get glasses made at any optical shop with this.",
              formal:
                "Your optical prescription indicates a power of -3.25 diopters for the right eye and -2.75 diopters for the left, accompanied by a minor astigmatism in both eyes. This official prescription is enclosed; it remains valid for a period of one year. You may present this at any optical establishment to acquire corrective eyewear.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. Do you sell glasses here too, or do I need to go somewhere else?",
            textZh: "谢谢。你们这里也卖眼镜吗，还是需要去别的地方？",
            casualVersion: "Thanks. Do you guys sell glasses here, or do I have to go somewhere else?",
            commonMistake: {
              wrong: "Thank you. Do you sell glasses here also, or do I need to go somewhere else?",
              correct: "Thank you. Do you sell glasses here too, or do I need to go somewhere else?",
              explanation: '"too"在句末更自然，"also"听起来有点正式或不连贯。',
            },
            formalityVariants: {
              casual: "Thanks. Got glasses here, or gotta go somewhere else?",
              standard: "Thank you. Do you sell glasses here too, or do I need to go somewhere else?",
              formal:
                "Thank you. Do you provide optical dispensing services on-site, or will I be required to seek those services elsewhere?",
            },
          },
          {
            speaker: "them",
            role: "验光师",
            textEn:
              "We have an optical shop right next door. They have a great selection of frames. Just give them your prescription and they'll help you pick out frames and lenses. New glasses usually take 3 to 5 days to make.",
            textZh:
              "我们隔壁就有一家眼镜店。镜框选择很多。把处方给他们就行，他们会帮你选镜框和镜片。新眼镜通常3到5天做好。",
            commonMistake: {
              wrong: "They will choose the frames for you.",
              correct: "They'll help you pick out frames.",
              explanation: "'Choose'听起来像完全由对方决定，'help pick out'更自然，表示协助你挑选。",
            },
            keyPhrases: [
              { en: "frames", zh: "镜框" },
              { en: "selection", zh: "选择/种类" },
              { en: "3 to 5 days to make", zh: "3到5天做好" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "There's actually an optical shop right next door. They've got tons of frames. Just hand them your prescription and they'll take care of the rest. Usually takes 3 to 5 days.",
                textZh: "隔壁就有一家眼镜店。镜框超级多。把处方给他们就行了，其他他们会搞定。通常3到5天。",
                actionHint: "去隔壁眼镜店",
                frequency: "common",
              },
              {
                textEn:
                  "We don't sell glasses here, but next door does. Big selection. Give them this prescription and they'll sort you out. Figure 3 to 5 days for new glasses.",
                textZh: "我们这不卖眼镜，但隔壁有。选择很多。把这个处方给他们就行。新眼镜大约3到5天。",
                actionHint: "带处方去隔壁",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, there's an optical shop right next door. They've got tons of frames. Just hand them your prescription, they'll help you pick out frames and lenses. Usually takes 3 to 5 days for new glasses.",
            culturalNote: "美国配眼镜通常需要等待几天，不像中国立等可取",
            formalityVariants: {
              casual:
                "Yep, optical shop's right next door. Lots of frames. Just show 'em your prescription, they'll help with frames/lenses. New glasses usually take 3-5 days.",
              standard:
                "We have an optical shop right next door. They have a great selection of frames. Just give them your prescription and they'll help you pick out frames and lenses. New glasses usually take 3 to 5 days to make.",
              formal:
                "Indeed, we have an affiliated optical dispensary located immediately adjacent to our premises. They offer an extensive array of frames. Simply present your prescription, and their staff will assist you in selecting appropriate frames and lenses. The fabrication of new spectacles typically requires a period of three to five business days.",
            },
          },
        ],
      },

      // --- Flow 2: 选配镜框 ---
      {
        id: "frame-selection",
        titleZh: "选配镜框",
        titleEn: "Choosing Frames & Lenses",
        description: "拿着处方到眼镜店选镜框和镜片",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi, I just got my eye exam done next door. Here's my prescription. I'd like to get a new pair of glasses.",
            textZh: "你好，我刚在隔壁做完验光。这是我的处方。我想配一副新眼镜。",
            casualVersion: "Hey, just got my eye exam done next door. Here's the prescription. Wanna get new glasses.",
            culturalNote: "与服务人员直接说明目的，而不是用客套话。如“I’d like to”比“I want to”更客气。",
            commonMistake: {
              wrong: "I want to get new glasses.",
              correct: "I'd like to get a new pair of glasses.",
              explanation: "直接说 'I want' 听起来过于生硬，用 'I'd like to' 更礼貌和自然。",
            },
            formalityVariants: {
              casual: "Hey, just got my eye exam next door. Here's my prescription. Need new glasses.",
              standard:
                "Hi, I just had my eye exam done next door. Here is my prescription. I'd like to get a new pair of glasses.",
              formal:
                "Good morning/afternoon. I have recently completed my eye examination next door, and I have brought my prescription with me. I am interested in acquiring a new pair of eyeglasses.",
            },
          },
          {
            speaker: "them",
            role: "眼镜店员",
            textEn:
              "Welcome! Let me see your prescription... -3.25 and -2.75 with astigmatism. No problem. Do you have a preference for frame style — full-rim, half-rim, or rimless?",
            textZh: "欢迎！让我看看您的处方……-3.25和-2.75，有散光。没问题。您对镜框款式有偏好吗——全框、半框还是无框？",
            commonMistake: {
              wrong: "Do you like frame style?",
              correct: "Do you have a preference for frame style?",
              explanation: "中国人问'你喜欢...吗'可能直译为'Do you like...'，但在挑选物品时用'preference'更地道和礼貌。",
            },
            keyPhrases: [
              { en: "full-rim", zh: "全框" },
              { en: "half-rim", zh: "半框" },
              { en: "rimless", zh: "无框" },
              { en: "frame style", zh: "镜框款式" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Hey, welcome! Let me take a look... -3.25 and -2.75, some astigmatism. Totally doable. So what kind of look are you going for — full frames, half-rim, or rimless?",
                textZh: "嘿，欢迎！我看看……-3.25和-2.75，有些散光。完全没问题。你喜欢什么款式——全框、半框还是无框？",
                actionHint: "选择喜欢的款式",
                frequency: "common",
              },
              {
                textEn:
                  "Welcome in! Let's see your script... Yep, we can definitely work with this. Any idea what style you're after?",
                textZh: "欢迎！让我看看处方……嗯，完全可以做。你想要什么风格的？",
                actionHint: "描述偏好",
                frequency: "common",
              },
            ],
            casualVersion:
              "Welcome! Lemme see your prescription... -3.25 and -2.75 with astigmatism. No problem. Any preference for frame style — full-rim, half-rim, or rimless?",
            formalityVariants: {
              casual:
                "Welcome! Lemme see your prescription... -3.25 and -2.75 with astigmatism. Cool. Got a frame style you like — full-rim, half-rim, or rimless?",
              standard:
                "Welcome! May I see your prescription? ... -3.25 and -2.75 with astigmatism. That's fine. Do you have a preference for frame style — full-rim, half-rim, or rimless?",
              formal:
                "Welcome! If you would be so kind as to provide your prescription... I see, -3.25 and -2.75 with astigmatism. That presents no issue. Do you have a particular preference regarding frame styles, such as full-rim, half-rim, or rimless designs?",
            },
          },
          {
            speaker: "you",
            textEn: "I prefer full-rim frames. Something lightweight and not too flashy. What's a good material?",
            textZh: "我喜欢全框的。要轻便的，不要太花哨。什么材质好？",
            commonMistake: {
              wrong: "What material is good?",
              correct: "What kind of material is good?",
              explanation: "'What material is good' 听起来像在问哪一种具体的材料，而 'what kind of material is good' 询问的是材质种类，更自然。",
            },
            casualVersion: "Full-rim for me. Something light, not too flashy. What's a good material?",
            formalityVariants: {
              casual: "Yeah, full-rim. Light, not flashy. What material's best?",
              standard:
                "I prefer full-rim frames. I'm looking for something lightweight and not too flashy. What would be a good material?",
              formal:
                "My preference would be for full-rim frames. I am seeking a design that is both lightweight and understated in appearance. Could you recommend a suitable material?",
            },
          },
          {
            speaker: "them",
            role: "眼镜店员",
            textEn:
              "For lightweight, I'd recommend titanium — it's very durable and hypoallergenic. These frames here are titanium, starting at $180. We also have acetate frames that are more affordable, starting at $80. Would you like to try a few on?",
            textZh:
              "要轻的话，推荐钛金属——非常耐用而且防过敏。这些钛金属镜框起价180美元。我们也有醋酸纤维镜框，更实惠，起价80美元。想试戴几副吗？",
            keyPhrases: [
              { en: "titanium", zh: "钛金属" },
              { en: "durable", zh: "耐用" },
              { en: "hypoallergenic", zh: "防过敏的" },
              { en: "acetate", zh: "醋酸纤维（板材）" },
              { en: "try a few on", zh: "试戴几副" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "If you want light, go titanium — super strong and won't bother your skin. These start at $180. Or if you want something cheaper, we've got acetate starting at $80. Wanna try some on?",
                textZh:
                  "要轻的话选钛金属——超结实而且不刺激皮肤。这些起价180美元。想便宜点的话有醋酸纤维的80美元起。要试戴吗？",
                actionHint: "试戴比较",
                frequency: "common",
              },
              {
                textEn:
                  "Titanium's your best bet for lightweight — practically indestructible and hypoallergenic. Starts at $180. We also have plastic acetate frames from $80 if that's more your budget. Try a few!",
                textZh:
                  "要轻的话钛金属最好——几乎不会坏还防过敏。180美元起。预算有限的话也有塑料醋酸纤维框80美元起。试试看！",
                actionHint: "根据预算选择",
                frequency: "common",
              },
            ],
            casualVersion:
              "For light, I'd say titanium — super durable, hypoallergenic. These titanium ones here start at $180. Got acetate too, cheaper, from $80. Wanna try some on?",
            formalityVariants: {
              casual:
                "For light, titanium's your best bet — real durable, no allergies. These titanium frames start at $180. We got acetate frames too, from $80, if you wanna save some cash. Wanna try some?",
              standard:
                "For a lightweight option, I would recommend titanium — it is very durable and hypoallergenic. These frames here are titanium, starting at $180. We also offer acetate frames which are more affordable, beginning at $80. Would you care to try a few on?",
              formal:
                "Regarding a lightweight option, I would highly recommend titanium, as it offers exceptional durability and hypoallergenic properties. Our titanium frames commence at $180. Additionally, we provide acetate frames, which are a more economical alternative, starting from $80. Would you be interested in trying on a selection?",
            },
          },
          {
            speaker: "you",
            textEn: "I'll try the titanium ones. This dark brown pair looks nice. How do they look on me?",
            textZh: "我试试钛金属的。这副深棕色的不错。戴上好看吗？",
            commonMistake: {
              wrong: "Is it good-looking on me?",
              correct: "Does it look good on me?",
              explanation: "中文常说“好看”，直译“good-looking”是形容人的，形容物品用“look good”更自然。",
            },
            casualVersion: "I'll try titanium. This dark brown pair looks good. How's it look?",
            formalityVariants: {
              casual: "Okay, titanium. This dark brown pair's cool. How's it look?",
              standard: "I'll try the titanium ones. This dark brown pair appears appealing. How do they look on me?",
              formal:
                "I shall proceed with trying on the titanium options. This particular dark brown pair presents quite nicely. What is your assessment of their appearance on me?",
            },
          },
          {
            speaker: "them",
            role: "眼镜店员",
            textEn:
              "They suit your face shape very well. The size is right too — not too wide, not too narrow. Now, for the lenses, would you like standard lenses or anti-reflective coating? I'd also recommend blue-light blocking lenses if you use a computer a lot.",
            textZh:
              "非常适合您的脸型。大小也合适——不会太宽也不会太窄。镜片方面，您要普通镜片还是加防反光涂层？如果经常用电脑，我还推荐防蓝光镜片。",
            commonMistake: {
              wrong: "They are suitable for your face.",
              correct: "They suit your face shape very well.",
              explanation: "'Suitable for' 指合适或适当，而 'suit' 直接表示衬托、好看，更符合表达'戴上好看'。",
            },
            keyPhrases: [
              { en: "face shape", zh: "脸型" },
              { en: "anti-reflective coating", zh: "防反光涂层" },
              { en: "blue-light blocking", zh: "防蓝光" },
              { en: "standard lenses", zh: "普通镜片" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Great fit! For lenses, do you want basic or premium? Premium includes anti-glare and scratch resistance.",
                textZh: "很合适！镜片要基础款还是高级款？高级款含防眩光和防刮。",
                actionHint: "选择镜片类型",
                frequency: "common",
              },
            ],
            casualVersion:
              "They really suit your face. Size is good too — not too wide, not too narrow. Now, for lenses, wanna go standard or anti-reflective? I'd also say blue-light blocking if you're on the computer a lot.",
            formalityVariants: {
              casual:
                "They look great on you. Size is perfect. For lenses, standard or anti-reflective? And I'd add blue-light blocking if you're always on the computer.",
              standard:
                "They suit your face shape very well. The size is also appropriate — neither too wide nor too narrow. Now, regarding the lenses, would you prefer standard lenses or an anti-reflective coating? I would also recommend blue-light blocking lenses if you frequently use a computer.",
              formal:
                "They are exceptionally complementary to your facial contours. The fit is also ideal, being neither excessively wide nor narrow. Now, concerning the selection of lenses, would you prefer standard lenses or an anti-reflective coating? Furthermore, I would suggest considering blue-light blocking lenses, particularly if your computer usage is extensive.",
            },
          },
          {
            speaker: "you",
            textEn: "Anti-reflective and blue-light blocking, please. What's the total with the frames?",
            textZh: "要防反光和防蓝光的。加镜框一共多少？",
            casualVersion: "Anti-reflective and blue-light blocking, please. What's the total with frames?",
            commonMistake: {
              wrong: "How much total with frames?",
              correct: "What's the total with the frames?",
              explanation: "中文习惯问'多少钱'，但英文说'How much total'不够自然，用'What's the total'更地道。",
            },
            formalityVariants: {
              casual: "Yeah, anti-reflective and blue-light. Total with frames?",
              standard:
                "I'd like anti-reflective and blue-light blocking lenses, please. What is the total cost including the frames?",
              formal:
                "I would appreciate the inclusion of both anti-reflective and blue-light blocking features. Could you please provide the comprehensive total, inclusive of the frames?",
            },
          },
          {
            speaker: "them",
            role: "眼镜店员",
            textEn:
              "The titanium frames are $220, standard lenses with your prescription are $120, anti-reflective coating is $40, and blue-light blocking is $30. The total comes to $410. Your glasses will be ready in 4 business days. We'll send you a text when they're ready to pick up.",
            textZh:
              "钛金属镜框220美元，您度数的标准镜片120美元，防反光涂层40美元，防蓝光30美元。总共410美元。您的眼镜4个工作日后可以取。做好了会发短信通知您。",
            commonMistake: {
              wrong: "Total is 410 dollars.",
              correct: "The total comes to $410.",
              explanation: "直接说 'Total is...' 虽然能理解，但 'The total comes to...' 或 'That brings the total to...' 更常用且自然。",
            },
            keyPhrases: [
              { en: "total comes to", zh: "总共" },
              { en: "business days", zh: "工作日" },
              { en: "ready to pick up", zh: "可以来取" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "So the frames are $220, lenses $120, anti-reflective $40, blue-light $30 — that's $410 all in. They'll be done in 4 business days and we'll text you when they're ready.",
                textZh: "镜框220，镜片120，防反光40，防蓝光30——总共410美元。4个工作日做好，好了给你发短信。",
                actionHint: "确认总价",
                frequency: "common",
              },
              {
                textEn:
                  "Let me add that up — $220 frames, $120 lenses, plus $40 and $30 for the coatings. $410 total. Ready in about 4 business days. We'll shoot you a text.",
                textZh:
                  "我算一下——镜框220，镜片120，加上涂层40和30。总共410美元。大约4个工作日好。我们会发短信通知你。",
                actionHint: "等待短信通知",
                frequency: "common",
              },
            ],
            casualVersion:
              "Okay, titanium frames are $220, standard lenses with your prescription, $120, anti-reflective, $40, and blue-light blocking, $30. So, $410 total. Glasses'll be ready in 4 business days. We'll text you when they're good to go.",
            formalityVariants: {
              casual:
                "Alright, titanium frames, $220. Standard lenses with your prescription, $120. Anti-reflective, $40. Blue-light blocking, $30. Grand total: $410. Glasses ready in 4 biz days. We'll text you when they're here.",
              standard:
                "The titanium frames are $220. Standard lenses with your prescription are $120. The anti-reflective coating is $40, and blue-light blocking is $30. The total amounts to $410. Your glasses will be prepared within 4 business days. We will send you a text message notification once they are available for collection.",
              formal:
                "The titanium frames are priced at $220. The standard prescription lenses are $120. The anti-reflective coating is an additional $40, and the blue-light blocking feature is $30. This brings the grand total to $410. Your eyeglasses will be available for collection within four business days. You will receive a text message notification upon their readiness.",
            },
          },
          {
            speaker: "you",
            textEn: "I'm leaving the country in 3 days. Is there any way to get them faster?",
            textZh: "我3天后就出境了。有办法快一点吗？",
            casualVersion: "I'm leaving the country in 3 days. Can I get 'em faster?",
            commonMistake: {
              wrong: "Can I get them quick?",
              correct: "Is there any way to get them faster?",
              explanation:
                "中文常说'快一点'，直译'get them quick'在英文里不自然，不如'get them faster'或'sooner'更地道。",
            },
            formalityVariants: {
              casual: "Gotta leave the country in 3 days. Can I get 'em sooner?",
              standard:
                "I will be leaving the country in three days. Is there any possibility of expediting the process?",
              formal:
                "I am scheduled to depart the country within three days. Would it be possible to arrange for an expedited service for the completion of my order?",
            },
          },
          {
            speaker: "them",
            role: "眼镜店员",
            textEn:
              "We can do rush service for an additional $60. They'd be ready by tomorrow afternoon. Alternatively, we can ship them to your home address internationally — shipping is about $25 and takes 7 to 10 days.",
            textZh:
              "我们可以加急，额外60美元。明天下午就能好。或者我们可以国际快递寄到您的家——运费大约25美元，7到10天到。",
            commonMistake: {
              wrong: "They will be good tomorrow afternoon.",
              correct: "They'll be ready tomorrow afternoon.",
              explanation: "'Good' 在这里不自然，通常指物品状态良好，而 'ready' 表示完成、可取用。",
            },
            keyPhrases: [
              { en: "rush service", zh: "加急服务" },
              { en: "additional", zh: "额外的" },
              { en: "ship them", zh: "快递寄送" },
              { en: "internationally", zh: "国际的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We can rush them for an extra $60 — ready by tomorrow afternoon. Or if you'd rather, we can ship them to your home overseas. Shipping's about $25, takes 7 to 10 days.",
                textZh: "加急的话额外60美元——明天下午好。或者我们可以寄到你海外的家。运费大约25美元，7到10天到。",
                actionHint: "选择加急或邮寄",
                frequency: "common",
              },
              {
                textEn:
                  "There's a rush option — $60 extra, done by tomorrow. Otherwise, we can FedEx them to your address back home for about $25.",
                textZh: "有加急选项——多60美元，明天就好。不然的话可以联邦快递寄到你老家地址，大约25美元。",
                actionHint: "根据行程选择",
                frequency: "common",
              },
            ],
            casualVersion:
              "We can do a rush service for another $60. They'd be ready by tomorrow afternoon. Or, we can ship 'em internationally to your home — shipping's around $25, takes 7 to 10 days.",
            formalityVariants: {
              casual:
                "We can do a rush job for an extra $60. They'll be ready tomorrow afternoon. Or we can just ship 'em internationally to your place — about $25, 7-10 days.",
              standard:
                "We can offer a rush service for an additional $60. They would be ready by tomorrow afternoon. As an alternative, we can ship them to your home address internationally — the shipping cost is approximately $25 and typically takes 7 to 10 days.",
              formal:
                "We are able to provide an expedited service for an additional charge of $60, in which case they would be prepared by tomorrow afternoon. Alternatively, we can arrange for international shipment to your designated home address; the shipping fee is approximately $25, with a delivery timeframe of 7 to 10 business days.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll do the rush service. Tomorrow afternoon works perfectly. Thank you!",
            textZh: "那就加急吧。明天下午正好。谢谢！",
            commonMistake: {
              wrong: "Okay, rush service. Tomorrow afternoon is just right. Thanks!",
              correct: "I'll just do the rush service then. Tomorrow afternoon works perfectly. Thanks!",
              explanation: "'Just right' 在这里用作“正好合适”时，听起来不够自然，用 'works perfectly' 或 'is perfect' 更地道。",
            },
            casualVersion: "I'll do the rush service. Tomorrow afternoon's perfect. Thanks!",
            formalityVariants: {
              casual: "Yeah, rush service it is. Tomorrow afternoon works great. Thanks!",
              standard: "I will opt for the rush service. Tomorrow afternoon is perfectly suitable. Thank you.",
              formal:
                "I shall proceed with the expedited rush service. Tomorrow afternoon would be entirely satisfactory. Thank you very much.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 心理咨询 ====================
  {
    id: "medical-mental",
    category: "medical",
    titleZh: "心理咨询",
    titleEn: "Mental Health Counseling",
    description: "在国外感到压力或焦虑，寻找心理咨询师或了解心理健康服务",
    otherRole: "心理咨询师/热线客服",
    otherRoleIcon: "brain",
    flows: [
      // --- Flow 1: 预约咨询 ---
      {
        id: "finding-therapist",
        titleZh: "预约咨询",
        titleEn: "Finding a Therapist",
        description: "在国外感到焦虑或压力大，通过热线或诊所找心理咨询师",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi, I've been feeling very anxious and stressed lately. I'm traveling alone and I think I need to talk to someone. Do you offer counseling services?",
            textZh: "你好，我最近感到非常焦虑和压力大。我一个人在旅行，觉得需要找人谈谈。你们提供心理咨询服务吗？",
            culturalNote:
              "在欧美国家，寻求心理咨询是很正常的事。很多人定期看心理咨询师（therapist），就像定期看医生一样。",
            casualVersion:
              "Hey, been super anxious and stressed lately. Traveling alone, really feel like I need to chat with someone. Do you guys do counseling?",
            commonMistake: {
              wrong: "Do you have counseling services?",
              correct: "Do you offer counseling services?",
              explanation: "中式英语常直译“有/提供服务”，offer更自然。",
            },
            formalityVariants: {
              casual:
                "Hey, I'm kinda stressed and anxious lately, traveling solo. Need to talk to someone. You guys do counseling?",
              standard:
                "Hi, I've been feeling very anxious and stressed lately. I'm traveling alone and I think I need to talk to someone. Do you offer counseling services?",
              formal:
                "Good morning/afternoon, I am experiencing significant anxiety and stress at present. As I am traveling alone, I believe it would be beneficial to speak with a professional. Do you provide mental health counseling services here?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "I'm sorry to hear you're going through that. Yes, we do have counselors available. Are you in any immediate danger or having thoughts of harming yourself?",
            textZh: "很抱歉听到你正经历这些。是的，我们有咨询师。你现在有没有处于紧急危险中，或者有伤害自己的想法？",
            keyPhrases: [
              { en: "counselors", zh: "咨询师" },
              { en: "immediate danger", zh: "紧急危险" },
              { en: "thoughts of harming yourself", zh: "伤害自己的想法" },
            ],
            alternativeExpressions: [
              {
                textEn: "Thank you for reaching out. Before we schedule, I need to ask — are you safe right now?",
                textZh: "感谢你联系我们。在安排之前我需要问一下——你现在安全吗？",
                actionHint: "如实回答自己的状态",
                frequency: "common",
              },
            ],
            vocabNotes: {
              counselors: {
                meaningInContext: "在这句话里表示：提供心理咨询的专业人员",
                similarUsage: "类似用法：Our school has counselors for students who need support.",
              },
            },
            casualVersion:
              "Aw, man, sorry you're dealing with that. Yeah, we've got counselors. Are you in immediate danger or thinking of hurting yourself?",
            culturalNote: "美国心理咨询初次问诊会确认是否有自杀倾向，这是标准流程，不必惊慌。",
            commonMistake: {
              wrong: "Are you thinking to harm yourself?",
              correct: "Are you having thoughts of harming yourself?",
              explanation: "“thinking to do something” 在英语中不常用，通常用 “thinking of doing something”。",
            },
            formalityVariants: {
              casual:
                "Oh, sorry to hear that. Yeah, we have counselors. Any immediate danger or thoughts of self-harm?",
              standard:
                "I'm sorry to hear you're going through that. Yes, we do have counselors available. Are you in any immediate danger or having thoughts of harming yourself?",
              formal:
                "I regret to hear that you are experiencing such difficulties. Indeed, we do have qualified counselors available. Could you please confirm if you are currently in any immediate danger or experiencing ideations of self-harm?",
            },
          },
          {
            speaker: "you",
            textEn:
              "No, nothing like that. I'm just feeling overwhelmed. I can't sleep well and I keep worrying about everything. I think it's the stress of being in a foreign country alone.",
            textZh: "没有，不是那样。就是感觉压力很大。睡不好觉，一直在担心各种事情。我觉得是一个人在国外的压力。",
            casualVersion:
              "Nah, not like that. Just totally overwhelmed. Can't sleep, constantly worrying 'bout everything. Think it's just the whole solo foreign country stress.",
            commonMistake: {
              wrong: "I feel overwhelmed.",
              correct: "I'm just feeling overwhelmed.",
              explanation: "“I'm feeling” 更强调当下的状态和感受，“I feel” 更像陈述事实。",
            },
            formalityVariants: {
              casual:
                "Nah, not like that. Just super overwhelmed. Can't sleep, worry 'bout everything. Must be the solo foreign country stress.",
              standard:
                "No, nothing like that. I'm just feeling overwhelmed. I can't sleep well and I keep worrying about everything. I think it's the stress of being in a foreign country alone.",
              formal:
                "No, I am not experiencing anything of that nature. I am simply feeling overwhelmed. My sleep has been disrupted, and I find myself continuously preoccupied with various concerns. I attribute this to the inherent stress of being an expatriate traveling independently.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "I understand. That's actually quite common for travelers. We have a counselor who specializes in adjustment issues and anxiety. She's available tomorrow at 3 PM. Would you prefer an in-person session or a video call?",
            textZh:
              "我理解。对旅行者来说这其实很常见。我们有一位专门处理适应问题和焦虑的咨询师。她明天下午3点有空。你想面对面咨询还是视频通话？",
            keyPhrases: [
              { en: "specializes in", zh: "专门处理" },
              { en: "adjustment issues", zh: "适应问题" },
              { en: "anxiety", zh: "焦虑" },
              { en: "in-person session", zh: "面对面咨询" },
              { en: "video call", zh: "视频通话" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That's totally normal, especially for solo travelers. We've got a counselor who deals with exactly this — anxiety, adjustment stuff. She's free tomorrow at 3. Do you want to come in or would a video session work?",
                textZh:
                  "这完全正常，特别是独自旅行的人。我们有位咨询师专门处理这类问题——焦虑、适应之类的。她明天3点有空。你想来面谈还是视频？",
                actionHint: "选择咨询方式",
                frequency: "common",
              },
              {
                textEn:
                  "You'd be surprised how many travelers feel the same way. We have a therapist who works with anxiety and cultural adjustment. She has an opening tomorrow afternoon — in person or video?",
                textZh:
                  "你会惊讶有多少旅行者有同样的感受。我们有位专门处理焦虑和文化适应的咨询师。明天下午有空——面谈还是视频？",
                actionHint: "预约明天的时间",
                frequency: "common",
              },
            ],
            casualVersion:
              "Gotcha. Yeah, super common for travelers. We've got a counselor who's great with adjustment stuff and anxiety. She's free tomorrow at 3 PM. Wanna do in-person or a video call?",
            commonMistake: {
              wrong: "She is free tomorrow at 3 PM.",
              correct: "She's available tomorrow at 3 PM.",
              explanation: "“有空”在预约语境中通常用 available，free 听起来更口语化。",
            },
            formalityVariants: {
              casual:
                "Gotcha. Yeah, that's really common for travelers. We've got a counselor specializing in adjustment and anxiety. She's free tomorrow at 3 PM. In-person or video?",
              standard:
                "I understand. That's actually quite common for travelers. We have a counselor who specializes in adjustment issues and anxiety. She's available tomorrow at 3 PM. Would you prefer an in-person session or a video call?",
              formal:
                "I comprehend. Such experiences are, in fact, quite prevalent among international travelers. We have a dedicated counselor who possesses expertise in addressing adjustment challenges and anxiety. She has an opening tomorrow at 3 PM. Do you have a preference for an in-person consultation or a tele-consultation via video conference?",
            },
          },
          {
            speaker: "you",
            textEn:
              "In-person would be better. How much does a session cost? And is there a language barrier? My English is okay but sometimes I struggle to express emotions in English.",
            textZh: "面对面更好。一次咨询多少钱？语言会有障碍吗？我英语还行，但有时候用英语表达情绪有困难。",
            casualVersion:
              "In-person's better. How much is a session? And will language be an issue? My English is alright, but sometimes it's hard to get emotions out in English.",
            commonMistake: {
              wrong: "How much is one session?",
              correct: "How much does a session cost?",
              explanation: "“How much does X cost” 是询问价格的标准句型，比中式直译更自然。",
            },
            formalityVariants: {
              casual:
                "In-person's better. What's a session cost? Any language barrier? My English is decent, but sometimes expressing feelings in English is tough.",
              standard:
                "In-person would be better. How much does a session cost? And is there a language barrier? My English is okay but sometimes I struggle to express emotions in English.",
              formal:
                "An in-person session would be preferable. May I inquire about the cost per session? Additionally, I am concerned about a potential language barrier. While my English proficiency is adequate, I occasionally find it challenging to articulate complex emotional states in English.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "A 50-minute session is $150. We don't have a Mandarin-speaking therapist on site, but Dr. Chen offers teletherapy in Mandarin. If you'd prefer English, our counselor Ms. Rivera is very experienced with international clients. She speaks slowly and clearly.",
            textZh:
              "50分钟的咨询150美元。我们这里没有说普通话的咨询师，但陈医生提供普通话的远程心理咨询。如果你更喜欢英语的话，我们的咨询师 Rivera 女士跟国际客户打交道经验很丰富。她说话慢而清楚。",
            keyPhrases: [
              { en: "session", zh: "咨询（一次）" },
              { en: "teletherapy", zh: "远程心理咨询" },
              { en: "international clients", zh: "国际客户" },
              { en: "Mandarin-speaking", zh: "说普通话的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It's $150 for 50 minutes. We don't have a Mandarin-speaking therapist in the office, but we can set up a remote session in Mandarin with Dr. Chen. Or Ms. Rivera is great with international clients — she keeps things simple and easy to follow.",
                textZh:
                  "50分钟150美元。我们办公室没有说中文的咨询师，但可以安排跟陈医生中文远程咨询。或者 Rivera 女士跟国际客户合作很棒——她说话简单容易懂。",
                actionHint: "选择语言和咨询师",
                frequency: "common",
              },
              {
                textEn:
                  "A session runs $150. For Mandarin, we can do teletherapy with Dr. Chen. If English works for you, Ms. Rivera has tons of experience with folks who aren't native speakers.",
                textZh:
                  "一次咨询150美元。要中文的话可以跟陈医生远程。英语没问题的话，Rivera 女士跟非母语人士合作经验丰富。",
                actionHint: "根据语言偏好选择",
                frequency: "common",
              },
            ],
            casualVersion:
              "A 50-min session is $150. We don't have a Mandarin-speaking therapist here, but Dr. Chen does teletherapy in Mandarin. If you'd rather do English, Ms. Rivera's super experienced with international clients. She talks slow and clear.",
            commonMistake: {
              wrong: "We don't have Mandarin therapist.",
              correct: "We don't have a Mandarin-speaking therapist on site.",
              explanation: "“Mandarin-speaking” 才是正确搭配，且需要冠词 “a”。",
            },
            formalityVariants: {
              casual:
                "Fifty minutes is 150 bucks. No Mandarin therapist here, but Dr. Chen does teletherapy. If English works, Ms. Rivera's awesome with international folks, speaks slow and clear.",
              standard:
                "A 50-minute session is $150. We don't have a Mandarin-speaking therapist on site, but Dr. Chen offers teletherapy in Mandarin. If you'd prefer English, our counselor Ms. Rivera is very experienced with international clients. She speaks slowly and clearly.",
              formal:
                "A fifty-minute session is priced at $150. We do not currently have a Mandarin-speaking therapist physically present at this location; however, Dr. Chen provides teletherapy services in Mandarin. Should you prefer to proceed in English, our esteemed counselor, Ms. Rivera, possesses extensive experience working with international clientele. She is known for her deliberate and articulate communication style.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'll try the in-person session with Ms. Rivera in English. If I really can't express something, can I use my phone to translate?",
            textZh: "我试试跟 Rivera 女士用英语面谈。如果实在表达不了，可以用手机翻译吗？",
            casualVersion:
              "I'll try the in-person with Ms. Rivera, in English. If I really can't get something out, can I just use my phone to translate?",
            commonMistake: {
              wrong: "If I cannot express something...",
              correct: "If I really can't express something...",
              explanation: "“really can't” 语气更自然，表示尽力了仍无法做到，比单纯的 “cannot” 更口语化。",
            },
            formalityVariants: {
              casual:
                "I'll do the in-person with Ms. Rivera in English. If I totally get stuck, can I use my phone to translate?",
              standard:
                "I'll try the in-person session with Ms. Rivera in English. If I really can't express something, can I use my phone to translate?",
              formal:
                "I will proceed with the in-person session with Ms. Rivera, conducted in English. Should I encounter significant difficulty in articulating a particular thought or emotion, would it be permissible to utilize my mobile device for translation purposes?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Of course, that's totally fine. Many of our international clients do that. Ms. Rivera will make you feel comfortable. She'll go at your pace. Should I book the 3 PM slot for tomorrow?",
            textZh:
              "当然，完全可以。我们很多国际客户都这样做。Rivera 女士会让你感到舒适的。她会按你的节奏来。我帮你预约明天下午3点的吗？",
            keyPhrases: [
              { en: "go at your pace", zh: "按你的节奏来" },
              { en: "book the slot", zh: "预约时间段" },
              { en: "feel comfortable", zh: "感到舒适" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Oh absolutely, use your phone whenever you need to. Lots of our international clients do that. Ms. Rivera's super patient — she'll match your speed. Want me to lock in that 3 PM for you?",
                textZh:
                  "当然可以，需要的时候随时用手机翻译。我们很多国际客户都这样。Rivera 女士超有耐心——她会配合你的节奏。帮你锁定3点的吗？",
                actionHint: "确认预约",
                frequency: "common",
              },
              {
                textEn:
                  "For sure, that's no problem at all. She's used to working with people who use translation tools. She'll take it slow. Shall I book you in for 3 PM tomorrow?",
                textZh: "完全没问题。她习惯了跟使用翻译工具的人合作。她会慢慢来。帮你预约明天3点的吗？",
                actionHint: "确认预约时间",
                frequency: "common",
              },
            ],
            casualVersion:
              "Totally, that's fine! Loads of our international clients do that. Ms. Rivera will make you comfy. She'll totally go at your pace. So, should I book that 3 PM slot for tomorrow?",
            commonMistake: {
              wrong: "Many international clients do that.",
              correct: "Many of our international clients do that.",
              explanation: "“many of our clients” 更自然，强调这是我们诊所的经验，而非泛泛而谈。",
            },
            formalityVariants: {
              casual:
                "Yeah, totally fine! Lots of our international clients do that. Ms. Rivera'll make you comfy. She'll go at your pace. Book the 3 PM for tomorrow?",
              standard:
                "Of course, that's totally fine. Many of our international clients do that. Ms. Rivera will make you feel comfortable. She'll go at your pace. Should I book the 3 PM slot for tomorrow?",
              formal:
                "Certainly, that is entirely permissible. Many of our international clientele regularly utilize such aids. Ms. Rivera is adept at ensuring clients feel at ease and will proceed at a pace comfortable for you. Shall I reserve the 3 PM appointment for you tomorrow?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please. Thank you for being so understanding.",
            textZh: "好的，麻烦了。谢谢你这么理解。",
            casualVersion: "Yep, please. Thanks for getting it.",
            commonMistake: {
              wrong: "Thank you for understanding me.",
              correct: "Thank you for being so understanding.",
              explanation: "“understanding” 作为形容词更自然，“understanding me” 听起来不够地道。",
            },
            formalityVariants: {
              casual: "Yep, please. Thanks for getting it.",
              standard: "Yes, please. Thank you for being so understanding.",
              formal: "Yes, kindly proceed. I am very grateful for your exceptional understanding.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "You're doing the right thing by reaching out. Here's our crisis hotline number in case you need help before your appointment: 988. It's free, available 24/7, and they have multilingual support. See you tomorrow at 3.",
            textZh:
              "你主动寻求帮助是对的。这是我们的危机热线号码，以防你在预约前需要帮助：988。免费的，全天24小时服务，有多语言支持。明天3点见。",
            keyPhrases: [
              { en: "reaching out", zh: "主动求助" },
              { en: "crisis hotline", zh: "危机热线" },
              { en: "24/7", zh: "全天候/24小时" },
              { en: "multilingual support", zh: "多语言支持" },
            ],
            culturalNote:
              "988 是美国全国自杀和危机生命线（Suicide & Crisis Lifeline）。在英国是 116 123（Samaritans）。遇到心理危机可以随时拨打。",
            alternativeExpressions: [
              {
                textEn:
                  "I'm really glad you reached out. Just in case you need someone before tomorrow — call 988, it's free, 24 hours, and they've got people who speak multiple languages. See you at 3.",
                textZh: "真的很高兴你主动联系了。以防万一明天前需要帮助——打988，免费的，24小时，有多语言服务。3点见。",
                actionHint: "记下988热线",
                frequency: "common",
              },
              {
                textEn:
                  "You're taking a really brave step. Here — take this card with the 988 crisis line number. It's free and they're there around the clock. We'll see you tomorrow afternoon.",
                textZh: "你迈出了很勇敢的一步。拿着这张卡片，上面有988危机热线号码。免费全天候服务。明天下午见。",
                actionHint: "保存危机热线号码",
                frequency: "common",
              },
            ],
            casualVersion:
              "You're doing good by reaching out. Here's our crisis hotline in case you need help before your appointment: 988. It's free, 24/7, and they've got multilingual support. See ya tomorrow at 3.",
            commonMistake: {
              wrong: "You did the right thing to reach out.",
              correct: "You're doing the right thing by reaching out.",
              explanation: "“by doing something” 表示通过某种方式做某事，更符合语境。",
            },
            formalityVariants: {
              casual:
                "Good job reaching out. Here's the crisis hotline if you need anything before your appointment: 988. Free, 24/7, multilingual. See ya tomorrow at 3.",
              standard:
                "You're doing the right thing by reaching out. Here's our crisis hotline number in case you need help before your appointment: 988. It's free, available 24/7, and they have multilingual support. See you tomorrow at 3.",
              formal:
                "It is commendable that you are proactively seeking assistance. Please make note of our crisis hotline number, 988, should you require any support prior to your scheduled appointment. This service is complimentary, operates 24 hours a day, seven days a week, and offers multilingual assistance. We anticipate seeing you tomorrow at 3 PM.",
            },
          },
        ],
      },

      // --- Flow 2: 首次咨询 ---
      {
        id: "first-session",
        titleZh: "首次咨询",
        titleEn: "First Counseling Session",
        description: "第一次与心理咨询师面谈，描述自己的感受和问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "咨询师",
            textEn:
              "Hello, I'm Ms. Rivera. Welcome. This is a safe space — everything you share here is confidential. How are you feeling today?",
            textZh: "你好，我是 Rivera 女士。欢迎。这里是一个安全的空间——你分享的一切都是保密的。今天感觉怎么样？",
            commonMistake: {
              wrong: "How do you feel today?",
              correct: "How are you feeling today?",
              explanation: "How are you feeling 更侧重当下的感受，在咨询语境下更自然。",
            },
            casualVersion: "Hey, I'm Ms. Rivera. Welcome. This is a safe space – anything you say stays between us. How ya doing today?",
            culturalNote: "强调隐私对中国文化尤其重要。",
            formalityVariants: {
              casual: "Hey, I'm Ms. Rivera. Welcome. Safe space here – everything's confidential. How ya feeling?",
              standard: "Hello, I'm Ms. Rivera. Welcome. This is a safe space – everything you share is confidential. How are you feeling today?",
              formal: "Good afternoon, I am Ms. Rivera. Welcome. Please be assured that this is a confidential and secure environment, and all information shared will remain private. How are you feeling this afternoon?",
            },
            keyPhrases: [
              { en: "safe space", zh: "安全的空间" },
              { en: "confidential", zh: "保密的" },
            ],
            vocabNotes: {
              confidential: {
                meaningInContext: "在这句话里表示：你说的话不会告诉别人，受法律保护的隐私",
                similarUsage: "类似用法：All patient records are strictly confidential.",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Hi there. I'm Ms. Rivera. Come on in, have a seat. Everything we talk about stays between us. So... how are you doing today?",
                textZh: "你好。我是 Rivera 女士。进来吧，请坐。我们谈的一切都是保密的。那……你今天怎么样？",
                actionHint: "放松表达感受",
                frequency: "common",
              },
              {
                textEn:
                  "Welcome. I'm glad you came in. Just so you know, this is completely confidential — nothing leaves this room. Tell me, how are you feeling right now?",
                textZh: "欢迎。很高兴你来了。先说一下，这里完全保密——什么都不会外传。告诉我，你现在感觉怎么样？",
                actionHint: "如实表达感受",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Thank you. I'm feeling a bit nervous, actually. I've never done this before. In my culture, we don't usually talk about our feelings with strangers.",
            textZh: "谢谢。说实话有点紧张。我从来没做过心理咨询。在我的文化里，我们通常不跟陌生人谈论自己的感受。",
            casualVersion: "Thanks. Kinda nervous, honestly. Never done counseling. In my culture, we usually don't just talk feelings with strangers.",
            culturalNote: "中国人更倾向于向家人或密友倾诉，心理咨询相对不普及。",
            formalityVariants: {
              casual: "Thanks. Kinda nervous, honestly. Never done counseling. In my culture, we don't usually talk feelings with strangers.",
              standard: "Thank you. I'm a bit nervous, to be honest. I've never done counseling before. In my culture, we usually don't talk about our feelings with strangers.",
              formal: "Thank you. To be candid, I am feeling somewhat apprehensive. I have not previously engaged in counseling. Within my cultural context, it is not customary to discuss one's emotions with individuals outside of one's immediate acquaintance.",
            },
          },
          {
            speaker: "them",
            role: "咨询师",
            textEn:
              "That's completely okay. Many people feel that way at first. There's no pressure to share anything you're not ready for. Let's start simple — can you tell me what brought you here today?",
            textZh:
              "完全没关系。很多人一开始都这样。没有压力，不用分享你还没准备好说的。我们从简单的开始——能告诉我是什么让你来这里的吗？",
            culturalNote: "美国心理咨询师会通过“没有压力”来建立信任，鼓励患者按自己的节奏分享。",
            commonMistake: {
              wrong: "That is perfectly okay.",
              correct: "That's perfectly okay.",
              explanation: "That's 是口语中更自然的缩写。",
            },
            casualVersion: "Totally fine. Lots of folks feel that way at first. No pressure to share anything you're not ready for. Let's just start simple – what brings you in today?",
            formalityVariants: {
              casual: "Totally fine. Many feel that way. No pressure to share what you're not ready for. Let's start simple – what brings you in?",
              standard: "That's perfectly alright. Many people feel that way at first. There's no pressure to share anything you're not ready for. Let's start simply – can you tell me what brings you here today?",
              formal: "That is entirely understandable. It is quite common for individuals to experience such sentiments initially. There is absolutely no obligation to disclose anything you are not prepared to discuss. We can begin with a straightforward inquiry – would you be able to articulate the primary reason for your visit today?",
            },
            keyPhrases: [
              { en: "no pressure", zh: "没有压力" },
              { en: "not ready for", zh: "还没准备好的" },
              { en: "what brought you here", zh: "什么让你来这里" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That's totally normal — a lot of people feel nervous the first time. You don't have to share anything you're not comfortable with. Why don't you start by telling me what made you decide to come in?",
                textZh: "这很正常——很多人第一次都会紧张。不用说你不想说的。不如先告诉我是什么让你决定来的？",
                actionHint: "从简单的开始说",
                frequency: "common",
              },
              {
                textEn:
                  "Hey, that's okay. First time is always a little awkward. There's zero pressure here. Just tell me, in your own words, what's been going on.",
                textZh: "没关系的。第一次总是有点尴尬。这里完全没有压力。用你自己的话告诉我最近怎么了。",
                actionHint: "用自己的方式表达",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I've been traveling alone for three weeks. At first it was exciting, but now I feel lonely and anxious. I can't stop worrying — about safety, about money, about whether I'm wasting my time. I wake up at 3 AM and can't go back to sleep.",
            textZh:
              "我一个人旅行了三周。一开始很兴奋，但现在觉得孤独和焦虑。我停不下来地担心——安全、钱、是不是在浪费时间。凌晨3点醒来就再也睡不着了。",
            commonMistake: {
              wrong: "I cannot stop worry.",
              correct: "I can't stop worrying.",
              explanation: "cannot stop 后面接动词的 ing 形式 (gerund)。",
            },
            casualVersion: "Been traveling solo for three weeks. Was stoked at first, but now I'm just lonely and anxious. Can't stop worrying 'bout safety, money, if I'm wasting time. Wake up at 3 AM and can't get back to sleep.",
            formalityVariants: {
              casual: "Been traveling solo three weeks. Was excited, now lonely and anxious. Can't stop worrying 'bout safety, money, wasting time. Wake at 3 AM, can't sleep.",
              standard: "I've been traveling alone for three weeks. I was excited at first, but now I feel lonely and anxious. I can't stop worrying – about safety, money, and whether I'm wasting my time. I wake up at 3 AM and can't go back to sleep.",
              formal: "I have been traveling independently for three weeks. Initially, I experienced enthusiasm, but I now find myself feeling isolated and anxious. I am plagued by persistent concerns regarding my safety, financial matters, and the perceived utility of my time. Furthermore, I consistently awaken at 3 AM and am unable to return to sleep.",
            },
          },
          {
            speaker: "them",
            role: "咨询师",
            textEn:
              "It sounds like you're carrying a lot of stress. The sleep disruption and constant worrying are signs that your anxiety is affecting your daily life. Have you experienced anxiety like this before, or is this new?",
            textZh:
              "听起来你承受了很大的压力。睡眠紊乱和持续的担忧是焦虑影响日常生活的表现。你以前有过这样的焦虑吗，还是这次是新的？",
            commonMistake: {
              wrong: "It sounds like you carry a lot of stress.",
              correct: "It sounds like you're carrying a lot of stress.",
              explanation: "carrying 表示正在承受的状态，更符合语境。",
            },
            casualVersion: "Sounds like you're under a ton of pressure. Not sleeping and constant worrying totally shows anxiety messing with your daily life. Had this kind of anxiety before, or is it new?",
            formalityVariants: {
              casual: "Sounds like you're super stressed. Sleep issues and constant worry mean anxiety's hitting hard. Had this anxiety before, or is it new?",
              standard: "It sounds like you're under a lot of pressure. Sleep disturbances and constant worrying are indicators of anxiety affecting your daily life. Have you experienced this kind of anxiety before, or is this new for you?",
              formal: "It appears you are experiencing significant stress. Disruptions to sleep patterns and persistent apprehension are symptomatic of anxiety impacting your daily functioning. Has this particular manifestation of anxiety occurred previously, or is this a novel experience for you?",
            },
            keyPhrases: [
              { en: "carrying a lot of stress", zh: "承受很大的压力" },
              { en: "sleep disruption", zh: "睡眠紊乱" },
              { en: "constant worrying", zh: "持续的担忧" },
              { en: "affecting your daily life", zh: "影响日常生活" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That sounds really heavy. The insomnia and the nonstop worrying — those are classic signs that your anxiety is kind of running the show. Has this ever happened to you before, or is this a new thing?",
                textZh:
                  "听起来压力真的很大。失眠和不停地担心——这些是焦虑在主导一切的典型表现。你以前有过这样的情况吗，还是新出现的？",
                actionHint: "回忆以往经历",
                frequency: "common",
              },
              {
                textEn:
                  "I hear you. What you're describing — the sleep problems, the constant worry — that's your anxiety really kicking in. Is this something you've dealt with before?",
                textZh: "我理解。你描述的——睡眠问题、持续的担忧——是焦虑在强烈影响你。你以前有过这种经历吗？",
                actionHint: "思考是否有焦虑史",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I've always been a worrier, but not this bad. I think being away from home and not speaking the language fluently makes everything harder.",
            textZh: "我一直都爱操心，但没有这么严重。我觉得离开家、语言又不太好，什么事都变得更难了。",
            commonMistake: {
              wrong: "I'm always a worrier.",
              correct: "I've always been a worrier.",
              explanation: "have always been 表示从过去到现在一直都是如此，更符合表达“一直爱操心”的语境。",
            },
            casualVersion: "I've always worried a lot, but not this bad. Being away from home, plus the language thing, just makes everything feel way harder.",
            formalityVariants: {
              casual: "Always been a worrier, but never this bad. Being away from home, language issues, just makes everything harder.",
              standard: "I've always been a worrier, but never this severe. I feel like being away from home, with the language barrier, just makes everything harder.",
              formal: "I have historically been prone to worrying, however, not to this severe extent. I perceive that being geographically separated from home, coupled with the language barrier, exacerbates the difficulty of every situation.",
            },
          },
          {
            speaker: "them",
            role: "咨询师",
            textEn:
              "That makes perfect sense. Being in a foreign environment without your support system can amplify existing anxiety. Let me teach you a simple grounding technique you can use when the worry gets overwhelming. It's called the 5-4-3-2-1 method — name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, and 1 you taste. It brings you back to the present moment.",
            textZh:
              "完全可以理解。在一个没有支持系统的陌生环境里会放大已有的焦虑。让我教你一个简单的扎根技巧，在担忧感太强的时候用。叫做5-4-3-2-1方法——说出5个你看到的东西，4个你能触摸的，3个你听到的，2个你闻到的，1个你尝到的。这会把你拉回当下。",
            commonMistake: {
              wrong: "That is perfect sense.",
              correct: "That makes perfect sense.",
              explanation: "makes perfect sense 是一个固定短语，表示“完全说得通”。",
            },
            casualVersion: "Totally makes sense. Being in a new country without your usual support can crank up anxiety. Let me show you a quick grounding trick for when you're super worried. It's the 5-4-3-2-1 method – find 5 things you see, 4 you touch, 3 you hear, 2 you smell, and 1 you taste. Helps bring you back to now.",
            formalityVariants: {
              casual: "Makes total sense. Foreign place, no support, ups the anxiety. Let me teach you a simple grounding trick for when worry's too much. It's the 5-4-3-2-1 method – 5 see, 4 touch, 3 hear, 2 smell, 1 taste. Pulls you back to now.",
              standard: "That makes perfect sense. Being in a foreign environment without your support system can amplify existing anxiety. Let me teach you a simple grounding technique you can use when the worry gets overwhelming. It's called the 5-4-3-2-1 method – name 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 thing you can taste. This will bring you back to the present moment.",
              formal: "That is entirely logical. Operating within an unfamiliar environment, absent one's customary support network, can indeed intensify pre-existing anxieties. Allow me to introduce a straightforward grounding technique, beneficial when feelings of apprehension become overwhelming. It is termed the 5-4-3-2-1 method – identify 5 observable objects, 4 tactile sensations, 3 auditory perceptions, 2 discernible aromas, and 1 taste. This exercise is designed to re-orient you to the current moment.",
            },
            keyPhrases: [
              { en: "support system", zh: "支持系统" },
              { en: "amplify", zh: "放大" },
              { en: "grounding technique", zh: "扎根技巧" },
              { en: "overwhelming", zh: "难以承受的" },
              { en: "present moment", zh: "当下" },
            ],
            vocabNotes: {
              grounding: {
                meaningInContext: "在这句话里表示：让人回到当下、脚踏实地的一种心理技巧",
                similarUsage: "类似用法：Grounding exercises help with panic attacks.",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "That totally makes sense. Being alone in a new place without your people around — that can really crank up any anxiety you already had. Here's something you can try when it gets bad — it's called 5-4-3-2-1. You name 5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste. It pulls you back to right now.",
                textZh:
                  "完全说得通。一个人在陌生的地方、身边没有熟悉的人——会把已有的焦虑放大。给你一个方法，焦虑严重的时候试试——叫5-4-3-2-1。说出5个你看到的、4个你摸到的、3个你听到的、2个你闻到的、1个你尝到的。把你拉回到当下。",
                actionHint: "今晚试试这个方法",
                frequency: "common",
              },
              {
                textEn:
                  "Being away from home without your support network makes everything feel bigger. I want to give you a tool — the 5-4-3-2-1 grounding exercise. When the worry spirals, focus on your senses: 5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste.",
                textZh:
                  "离开家没有支持网络会让一切感觉更严重。教你一个工具——5-4-3-2-1扎根练习。当担忧开始旋转时，关注你的感官：5个看到的、4个摸到的、3个听到的、2个闻到的、1个尝到的。",
                actionHint: "学习并练习扎根技巧",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "That sounds helpful. I'll try it tonight when I can't sleep. Should I continue seeing a therapist when I go home?",
            textZh: "听起来很有帮助。今晚睡不着的时候我试试。回国后需要继续看心理咨询师吗？",
            commonMistake: {
              wrong: "I will try it tonight when I cannot sleep.",
              correct: "I'll try it tonight when I can't sleep.",
              explanation: "can't 是口语中更自然的缩写。",
            },
            casualVersion: "Sounds helpful. I'll try it tonight if I can't sleep. Should I keep seeing a counselor when I get back home?",
            formalityVariants: {
              casual: "Sounds good. I'll try it if I can't sleep tonight. Keep seeing a counselor when I'm home?",
              standard: "That sounds helpful. I'll try it tonight if I can't sleep. Do I need to continue seeing a counselor once I return home?",
              formal: "That technique sounds potentially beneficial. I will attempt it this evening should I experience insomnia. Regarding my return home, is it advisable to continue professional counseling?",
            },
          },
          {
            speaker: "them",
            role: "咨询师",
            textEn:
              "I'd recommend it. What you're feeling is manageable, but it helps to have ongoing support. When you go home, look for a therapist who specializes in anxiety — many offer online sessions now, so you can continue even remotely. You're already taking the most important step by talking about it.",
            textZh:
              "我建议继续。你的情况是可以处理的，但有持续的支持会有帮助。回国后找一个专攻焦虑的咨询师——很多现在提供线上咨询，所以可以远程继续。你已经迈出了最重要的一步——把它说出来。",
            commonMistake: {
              wrong: "Your situation can be managed.",
              correct: "Your situation is manageable.",
              explanation: "is manageable 更直接、自然地表达“可以处理”。",
            },
            casualVersion: "I'd totally recommend it. Your situation's manageable, but continued support would help. Find an anxiety specialist back home – lots do online sessions now, so you can keep going remotely. You already did the biggest thing – spoke up.",
            formalityVariants: {
              casual: "Yeah, I'd keep going. Your situation's fixable, but ongoing support helps. Find an anxiety counselor back home – many do online, so you can keep it up. You already took the biggest step – talking.",
              standard: "I recommend continuing. Your situation is manageable, but ongoing support would be helpful. Find a counselor specializing in anxiety when you return home – many now offer online sessions, so you can continue remotely. You've already taken the most important step – speaking up.",
              formal: "I would advise continuation. Your present circumstances are indeed manageable, however, sustained professional support would prove beneficial. Upon your return home, I suggest seeking a counselor who specializes in anxiety – many now provide tele-counseling, allowing for remote continuation of therapy. You have already accomplished the most crucial initial step by articulating your concerns.",
            },
            keyPhrases: [
              { en: "manageable", zh: "可以处理的" },
              { en: "ongoing support", zh: "持续的支持" },
              { en: "online sessions", zh: "线上咨询" },
              { en: "taking the most important step", zh: "迈出最重要的一步" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I'd definitely keep it going. You've made a really good start, and having someone to talk to regularly makes a huge difference.",
                textZh: "我建议继续。你已经开了个好头，定期有人聊聊真的很有帮助。",
                actionHint: "表达感谢",
                frequency: "common",
              },
              {
                textEn:
                  "For sure — what you're dealing with is totally treatable. A therapist back home can pick up right where we left off.",
                textZh: "当然——你的情况完全可以治疗。回国后的咨询师可以接着继续。",
                actionHint: "询问如何找咨询师",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Thank you, Ms. Rivera. I already feel a bit lighter just from talking. I'll definitely look into continuing therapy back home.",
            textZh: "谢谢 Rivera 女士。光是说出来就已经轻松一些了。回国后我一定会考虑继续做咨询。",
            commonMistake: {
              wrong: "I already feel a little lighter.",
              correct: "I already feel a bit lighter.",
              explanation: "a bit 和 a little 都表示“一点点”，但 a bit 在口语中更常见。",
            },
            casualVersion: "Thanks, Ms. Rivera. Already feel a bit better just talking it out. I'll for sure look into continuing counseling when I get back home.",
            formalityVariants: {
              casual: "Thanks, Ms. Rivera. Already feel better just talking. I'll definitely look into continuing counseling when I'm home.",
              standard: "Thank you, Ms. Rivera. I already feel a bit lighter just from talking. I will definitely consider continuing counseling once I return home.",
              formal: "Thank you, Ms. Rivera. I already perceive a degree of alleviation simply from this discussion. I shall certainly give serious consideration to continuing counseling upon my return home.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 急诊 ====================
  {
    id: "medical-urgent-care",
    tags: ["urgent care", "急诊", "walk-in clinic"],
    category: "medical",
    titleZh: "急诊",
    titleEn: "Urgent Care Visit",
    description: "身体突然不适去急诊或紧急护理中心，描述症状、等候和处理",
    otherRole: "急诊医护人员",
    otherRoleIcon: "alert-triangle",
    flows: [
      // --- Flow 1: 急诊就医 ---
      {
        id: "urgent-visit",
        titleZh: "急诊就医",
        titleEn: "Going to Urgent Care",
        description: "突然不舒服去急诊中心，挂号、候诊和就诊",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi, I need to see a doctor urgently. I've been having really bad stomach pain for the past few hours and it's getting worse.",
            textZh: "你好，我需要紧急看医生。过去几小时一直胃痛得厉害，而且越来越严重了。",
            culturalNote:
              "在美国，Urgent Care（紧急护理中心）和 Emergency Room/ER（急诊室）不同。Urgent Care 处理紧急但不危及生命的情况，费用更低、等候时间更短。",
            casualVersion:
              "Hey, I really need a doctor ASAP. My stomach's been hurting super bad for hours, and it's getting worse.",
            commonMistake: {
              wrong: "My stomach pain is very bad.",
              correct: "I've been having really bad stomach pain.",
              explanation: '"very bad"不如"really bad"自然，尤其是在口语中描述这种疼痛。',
            },
            formalityVariants: {
              casual: "Hey, I really need to see a doc. My stomach's been killing me for hours, getting worse.",
              standard:
                "Hi, I need to see a doctor urgently. I've been having really bad stomach pain for the past few hours and it's getting worse.",
              formal:
                "Good morning/afternoon, I require immediate medical attention. I've been experiencing severe abdominal pain for several hours, and it appears to be intensifying.",
            },
          },
          {
            speaker: "them",
            role: "分诊护士",
            textEn:
              "I'm sorry you're in pain. Can you rate your pain on a scale of 1 to 10? And can you point to exactly where it hurts?",
            textZh: "很抱歉你这么痛。能给你的疼痛打个分吗，1到10分？能指一下确切哪里痛吗？",
            culturalNote: "美国医院问疼痛程度是常规流程，不必觉得奇怪或不适。",
            keyPhrases: [
              { en: "rate your pain", zh: "给疼痛打分" },
              { en: "on a scale of 1 to 10", zh: "1到10分" },
              { en: "point to", zh: "指出" },
            ],
            variations: [
              {
                textEn: "How severe is the pain? One being mild and ten being the worst you've ever felt.",
                textZh: "疼痛有多严重？1分是轻微的，10分是你经历过最痛的。",
              },
            ],
            alternativeExpressions: [
              {
                textEn: "On a scale of one to ten, how bad is it right now? And show me where it hurts.",
                textZh: "从1到10，现在有多痛？给我指一下哪里痛。",
                actionHint: "描述疼痛程度和位置",
                frequency: "common",
              },
              {
                textEn: "Can you describe the pain for me? Is it sharp, dull, crampy? And where exactly?",
                textZh: "能描述一下疼痛吗？是刺痛、钝痛还是绞痛？具体哪个位置？",
                actionHint: "描述疼痛类型",
                frequency: "occasional",
              },
            ],
            casualVersion: "Sorry you're hurting. How bad is it, 1 to 10? And where exactly does it hurt?",
            commonMistake: {
              wrong: "Can you rate your pain on 1 to 10?",
              correct: "Can you rate your pain on a scale of 1 to 10?",
              explanation: '固定搭配是 "on a scale of X to Y"，不能省略"a scale of"。',
            },
            formalityVariants: {
              casual: "Sorry you're hurting. On a scale of 1 to 10, how bad? And point to where it hurts.",
              standard:
                "I'm sorry you're in pain. Can you rate your pain on a scale of 1 to 10? And can you point to exactly where it hurts?",
              formal:
                "I regret that you are experiencing discomfort. Could you please quantify your pain level on a scale from one to ten? Furthermore, would you be able to indicate the precise location of the pain?",
            },
          },
          {
            speaker: "you",
            textEn: "About a 7. It's right here — the lower right side. It started as a dull ache but now it's sharp.",
            textZh: "大概7分。就在这里——右下方。一开始是隐隐作痛，现在变成刺痛了。",
            vocabNotes: {
              "dull ache": {
                meaningInContext: "在这句话里表示：隐隐作痛，不尖锐的钝痛",
                similarUsage: "类似用法：I have a dull ache in my back.",
              },
              sharp: {
                meaningInContext: "在这句话里表示：尖锐的、剧烈的（疼痛）",
                similarUsage: "类似用法：a sharp pain in my chest",
              },
            },
            casualVersion: "Like a 7. It's right here – lower right. Started dull, but now it's sharp.",
            commonMistake: {
              wrong: "It started dull pain but now it's sharp pain.",
              correct: "It started as a dull ache but now it's sharp.",
              explanation: '描述疼痛性质时，用形容词"dull"和"sharp"即可，不必重复"pain"。',
            },
            formalityVariants: {
              casual: "Around a 7. Lower right, right here. Was dull, now it's sharp.",
              standard:
                "About a 7. It's right here — the lower right side. It started as a dull ache but now it's sharp.",
              formal:
                "Approximately a seven. The discomfort is located precisely here—on the lower right quadrant. It commenced as a persistent, low-grade ache, but has since progressed to a more acute, piercing sensation.",
            },
          },
          {
            speaker: "them",
            role: "分诊护士",
            textEn:
              "Lower right — that could be a few things. Do you have any nausea, vomiting, or fever? Any changes in appetite?",
            textZh: "右下方——可能是几种情况。有恶心、呕吐或发烧吗？食欲有变化吗？",
            keyPhrases: [
              { en: "nausea", zh: "恶心" },
              { en: "vomiting", zh: "呕吐" },
              { en: "appetite", zh: "食欲" },
            ],
            alternativeExpressions: [
              {
                textEn: "OK, lower right side. Any nausea? Throwing up? Fever?",
                textZh: "好的，右下方。恶心吗？呕吐吗？发烧吗？",
                actionHint: "如实回答症状",
                frequency: "common",
              },
              {
                textEn:
                  "That area could be a number of things. Have you been nauseous at all? Any vomiting or loss of appetite?",
                textZh: "那个位置可能有几种情况。有恶心吗？有呕吐或没食欲吗？",
                actionHint: "描述伴随症状",
                frequency: "common",
              },
            ],
            casualVersion: "Lower right, hmm, could be a few things. Nausea, throwing up, fever? Appetite changes?",
            commonMistake: {
              wrong: "Do you have nausea, vomit or fever?",
              correct: "Do you have any nausea, vomiting, or fever?",
              explanation: '在这里，"vomiting"是名词形式，指呕吐症状，"vomit"通常是动词。',
            },
            formalityVariants: {
              casual: "Lower right, could be a few things. Nausea, throwing up, fever? Appetite changed at all?",
              standard:
                "Lower right — that could be a few things. Do you have any nausea, vomiting, or fever? Any changes in appetite?",
              formal:
                "The lower right quadrant pain is indicative of several potential etiologies. Are you experiencing any symptoms such as nausea, emesis, or pyrexia? Have there been any alterations in your appetite?",
            },
          },
          {
            speaker: "you",
            textEn:
              "Yes, I've felt nauseous since this morning and I threw up once. No fever though. I haven't been able to eat anything.",
            textZh: "是的，从今早开始感觉恶心，吐了一次。没有发烧。什么都吃不下。",
            casualVersion:
              "Yeah, been nauseous since morning, and I puked once. No fever, though. Haven't been able to eat anything.",
            commonMistake: {
              wrong: "I feel nauseous since this morning.",
              correct: "I've felt nauseous since this morning.",
              explanation: "强调从过去某个时间点持续到现在的情况，需要用现在完成时态。",
            },
            formalityVariants: {
              casual: "Yeah, felt sick to my stomach since morning, and puked once. No fever. Can't eat a thing.",
              standard:
                "Yes, I've felt nauseous since this morning and I threw up once. No fever though. I haven't been able to eat anything.",
              formal:
                "Affirmative, I have experienced nausea since this morning and a single episode of emesis. However, I am not febrile. I have been unable to consume any food.",
            },
          },
          {
            speaker: "them",
            role: "分诊护士",
            textEn:
              "Given the location and symptoms, we need to check for appendicitis. I'm going to bump you up in the queue. The doctor will see you within 15 minutes. In the meantime, please don't eat or drink anything — just in case you need surgery.",
            textZh:
              "根据疼痛位置和症状，我们需要检查是否是阑尾炎。我会把你的优先级提高。医生15分钟内会看你。这期间请不要吃喝任何东西——以防需要手术。",
            culturalNote: "美国医院等待时间可能很长，但急症会优先处理。",
            keyPhrases: [
              { en: "appendicitis", zh: "阑尾炎" },
              { en: "bump you up in the queue", zh: "提高你的排队优先级" },
              { en: "just in case", zh: "以防万一" },
            ],
            responseTip: "如果被告知可能需要手术，保持冷静。如有旅行保险，这时候可以提出来。",
            alternativeExpressions: [
              {
                textEn:
                  "With pain in that spot plus the nausea, we need to rule out appendicitis. I'm moving you up — the doc will see you real soon. Don't eat or drink anything for now.",
                textZh: "那个位置的疼痛加上恶心，我们要排除阑尾炎。我帮你插队——医生很快来看你。先不要吃喝任何东西。",
                actionHint: "保持冷静配合检查",
                frequency: "common",
              },
              {
                textEn:
                  "That sounds like it could be your appendix. I'm gonna get you in to see the doctor right away. Nothing to eat or drink in the meantime, OK?",
                textZh: "听起来可能是阑尾的问题。我马上安排医生来看你。这期间不要吃喝，好吗？",
                actionHint: "提供保险信息",
                frequency: "common",
              },
            ],
            casualVersion:
              "Okay, with that location and your symptoms, we gotta check for appendicitis. I'm moving you up. Doc'll be in here in about 15. For now, no eating or drinking, just in case you need surgery.",
            commonMistake: {
              wrong: "I will bump you up in the queue.",
              correct: "I'm going to bump you up in the queue.",
              explanation: '口语中表示即将进行的计划，"I\'m going to"比"I will"更自然。',
            },
            formalityVariants: {
              casual:
                "Location, symptoms... gotta check appendicitis. Moving you up. Doc'll be here in 15. No eating/drinking till then, just in case.",
              standard:
                "Given the location and symptoms, we need to check for appendicitis. I'm going to bump you up in the queue. The doctor will see you within 15 minutes. In the meantime, please don't eat or drink anything — just in case you need surgery.",
              formal:
                "Considering the anatomical location and presenting symptoms, we must investigate the possibility of appendicitis. I will expedite your position in the patient queue. The physician will attend to you within approximately fifteen minutes. Concurrently, please refrain from oral intake of any food or liquids, as a precautionary measure should surgical intervention become necessary.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I have travel insurance — will it cover this? Also, I have a friend who can translate if needed. My English is okay but I'm worried about missing important medical terms.",
            textZh:
              "我有旅行保险——这个能报销吗？另外，如果需要的话我有朋友可以帮忙翻译。我英语还行，但担心漏掉重要的医学术语。",
            casualVersion:
              "Got travel insurance – will it cover this? Also, my friend can translate if needed. My English is alright, but I'm worried about missing important medical stuff.",
            culturalNote: "美国就医时直接提保险，不用太客气。",
            commonMistake: {
              wrong: "My English is good, but...",
              correct: "My English is okay but I'm worried about missing important medical terms.",
              explanation: '"okay"或"alright"比"good"更自然地表达“还可以，但有顾虑”的语气。',
            },
            formalityVariants: {
              casual:
                "Travel insurance – will it cover this? My friend can translate too, if needed. English is fine, but I don't wanna miss medical terms.",
              standard:
                "I have travel insurance — will it cover this? Also, I have a friend who can translate if needed. My English is okay but I'm worried about missing important medical terms.",
              formal:
                "I possess travel insurance; will this incident be covered under my policy? Additionally, I have a friend available to provide translation services if required. While my English proficiency is adequate, I am concerned about potentially misunderstanding critical medical terminology.",
            },
          },
          {
            speaker: "them",
            role: "分诊护士",
            textEn:
              "We'll check your insurance details — do you have the policy card or number? And don't worry, we also have interpreter services available by phone if you need them. You're doing great communicating. Let me get the doctor.",
            textZh:
              "我们来核实保险信息——你有保单卡或保单号吗？别担心，如果需要的话我们也有电话翻译服务。你的沟通能力很好。我去叫医生来。",
            keyPhrases: [
              { en: "policy card", zh: "保单卡" },
              { en: "interpreter services", zh: "翻译服务" },
              { en: "by phone", zh: "通过电话" },
            ],
            culturalNote:
              "美国大部分医疗机构都提供翻译服务，通常是电话翻译，按法律要求免费提供。不要犹豫提出需要翻译。",
            alternativeExpressions: [
              {
                textEn:
                  "Sure, we'll look into your insurance. Got your policy info handy? And hey, we have phone interpreters available too — totally free.",
                textZh: "好的，我们来查你的保险。保险信息方便拿一下吗？对了，我们有电话翻译服务——完全免费。",
                actionHint: "提供保险卡",
                frequency: "common",
              },
              {
                textEn:
                  "Do you have your insurance card on you? Also, just so you know, we can get a translator on the phone anytime — no charge.",
                textZh: "保险卡带了吗？顺便说一下，我们随时可以接通电话翻译——不收费。",
                actionHint: "出示保险信息",
                frequency: "common",
              },
            ],
            casualVersion:
              "We'll check your insurance – got the card or number? And don't worry, we got phone interpreters if you need 'em. You're doing fine. Let me grab the doc.",
            commonMistake: {
              wrong: "We have interpreter services by phone.",
              correct: "we also have interpreter services available by phone",
              explanation: '"available by phone"表达服务类型和可得性更自然。',
            },
            formalityVariants: {
              casual:
                "We'll check your insurance – card/number? Don't stress, we got phone interpreters if you need. You're doing great. I'll get the doc.",
              standard:
                "We'll check your insurance details — do you have the policy card or number? And don't worry, we also have interpreter services available by phone if you need them. You're doing great communicating. Let me get the doctor.",
              formal:
                "We will verify your insurance information; do you possess your policy card or policy number? Furthermore, please be assured that we provide telephonic interpreter services should you require them. Your communication thus far has been excellent. I will now retrieve the physician.",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "Hello, I'm Dr. Chen. I've reviewed your symptoms. I'm going to do a physical exam and order some blood work and a CT scan to check for appendicitis. We'll have results within an hour. Are you allergic to any medications or contrast dye?",
            textZh:
              "你好，我是陈医生。我看过你的症状了。我给你做个体检，然后安排血液检查和CT扫描来检查阑尾炎。大约一小时出结果。你对任何药物或造影剂过敏吗？",
            culturalNote: "美国医生通常直呼其名，或只说姓氏，不会有“陈医生好”这样的客套。",
            keyPhrases: [
              { en: "physical exam", zh: "体检" },
              { en: "blood work", zh: "血液检查" },
              { en: "CT scan", zh: "CT扫描" },
              { en: "contrast dye", zh: "造影剂" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Hi there, I'm Dr. Chen. So I've gone over your chart. I want to examine you and run some tests — bloodwork and a CT scan. Any drug allergies I should know about?",
                textZh: "你好，我是陈医生。我看了你的病历。我想检查一下，做一些化验——验血和CT扫描。有什么药物过敏吗？",
                actionHint: "告知过敏史",
                frequency: "common",
              },
              {
                textEn:
                  "Hey, I'm Dr. Chen. Based on what they've told me, I'd like to get some imaging done and draw some blood. Quick question — allergic to anything?",
                textZh: "嘿，我是陈医生。根据他们告诉我的情况，我想做个影像检查和抽血。先问一下——对什么过敏吗？",
                actionHint: "回答过敏问题",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Hey, I'm Dr. Chen. Reviewed your symptoms. Gonna do a physical, order blood work and a CT to check for appendicitis. Results in an hour. Allergies to meds or contrast dye?",
            commonMistake: {
              wrong: "I'm going to do physical exam.",
              correct: "I'm going to do a physical exam",
              explanation: '"physical exam"是可数名词，前面需要加不定冠词"a"。',
            },
            formalityVariants: {
              casual:
                "Hi, Dr. Chen. Saw your symptoms. Gonna do an exam, blood work, CT for appendicitis. Results in an hour. Any allergies to meds or dye?",
              standard:
                "Hello, I'm Dr. Chen. I've reviewed your symptoms. I'm going to do a physical exam and order some blood work and a CT scan to check for appendicitis. We'll have results within an hour. Are you allergic to any medications or contrast dye?",
              formal:
                "Good evening/afternoon, I am Dr. Chen. I have thoroughly reviewed your presenting symptoms. My intention is to conduct a physical examination, followed by ordering comprehensive blood work and a CT scan to evaluate for appendicitis. We anticipate having the diagnostic results available within approximately one hour. Do you have any known allergies to pharmaceutical agents or contrast media?",
            },
          },
          {
            speaker: "you",
            textEn: "No allergies that I know of. Thank you, Doctor. I'm a bit scared but I trust you.",
            textZh: "据我所知没有过敏。谢谢医生。我有点害怕，但我信任你。",
            casualVersion: "None that I know of. Thanks, Doc. Kinda scared, but I trust you.",
            commonMistake: {
              wrong: "I have a bit scared.",
              correct: "I'm a bit scared",
              explanation: '"scared"是形容词，表示状态，前面需要动词"be"。',
            },
            formalityVariants: {
              casual: "No allergies I know of. Thanks, Doc. A little scared, but I trust you.",
              standard: "No allergies that I know of. Thank you, Doctor. I'm a bit scared but I trust you.",
              formal:
                "To my knowledge, I have no existing allergies. Thank you, Doctor. While I am experiencing a degree of apprehension, I have full confidence in your professional judgment.",
            },
          },
        ],
      },

      // --- Flow 2: 等候与结果 ---
      {
        id: "waiting-results",
        titleZh: "等候与结果",
        titleEn: "Waiting & Getting Results",
        description: "在急诊等候检查结果，了解治疗方案和后续安排",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "护士",
            textEn:
              "The doctor will be in shortly with your results. How are you feeling? The pain medication should have kicked in by now.",
            textZh: "医生马上来告诉你结果。你现在感觉怎么样？止痛药现在应该起效了。",
            commonMistake: {
              wrong: "The pain medicine should have effect now.",
              correct: "The pain medication should have kicked in by now.",
              explanation: "\"kick in\"是药物开始起效的口语表达，更自然。",
            },
            keyPhrases: [
              { en: "kicked in", zh: "起效了" },
              { en: "pain medication", zh: "止痛药" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The doctor's coming in with your results any minute now. How's the pain? The meds should be kicking in.",
                textZh: "医生马上带着结果来了。疼痛怎么样？药应该起效了。",
                actionHint: "描述目前疼痛程度",
                frequency: "common",
              },
              {
                textEn:
                  "Hang tight — the doc will be right in. Are you feeling any better since we gave you the pain medication?",
                textZh: "再等一下——医生马上来。给你用了止痛药后感觉好点了吗？",
                actionHint: "说明疼痛变化",
                frequency: "common",
              },
            ],
            casualVersion:
              "Doc'll be in with your results soon. How you feelin'? Pain meds should've kicked in by now.",
            formalityVariants: {
              casual: "Doc'll be in with your results soon. How're you feelin'? Pain meds should've kicked in.",
              standard:
                "The doctor will be in shortly with your results. How are you feeling? The pain medication should have kicked in by now.",
              formal:
                "The physician will be entering momentarily to discuss your results. How are you currently feeling? The analgesic should have taken effect by this time.",
            },
          },
          {
            speaker: "you",
            textEn: "The pain is a little better now, maybe a 4 or 5. Thank you for the medication.",
            textZh: "现在好一点了，大概4到5分。谢谢给我用了药。",
            casualVersion: "Pain's a bit better, like a 4 or 5. Thanks for the meds.",
            commonMistake: {
              wrong: "Pain is better a little now.",
              correct: "The pain is a little better now.",
              explanation: "程度副词 'a little' 通常在动词后或修饰形容词前.",
            },
            formalityVariants: {
              casual: "Pain's a bit better, maybe a 4 or 5. Thanks for the meds.",
              standard: "The pain is a little better now, maybe a 4 or 5. Thank you for the medication.",
              formal:
                "My pain level has improved slightly, registering approximately a 4 or 5 on the scale. I appreciate you administering the medication.",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "Good news — it's not appendicitis. The CT scan shows it's likely a kidney stone. It's small enough that it should pass on its own within a few days. I'm going to prescribe pain medication and an anti-nausea drug.",
            textZh:
              "好消息——不是阑尾炎。CT显示可能是肾结石。结石很小，应该几天内会自己排出来。我给你开止痛药和止吐药。",
            commonMistake: {
              wrong: "The CT shows kidney stone.",
              correct: "The CT shows it's probably a kidney stone.",
              explanation: "医生通常不会说得太绝对，会用\"probably\"或\"appears to be\"。",
            },
            keyPhrases: [
              { en: "kidney stone", zh: "肾结石" },
              { en: "pass on its own", zh: "自己排出" },
              { en: "prescribe", zh: "开处方" },
              { en: "anti-nausea", zh: "止吐的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "So the CT came back — it's not your appendix, which is great. Looks like a kidney stone. The good news is it's small enough to pass on its own. I'll get you some meds for the pain.",
                textZh:
                  "CT结果出来了——不是阑尾炎，好消息。看起来是肾结石。好在结石很小，能自己排出来。我给你开点止痛药。",
                actionHint: "询问注意事项",
                frequency: "common",
              },
              {
                textEn:
                  "OK, I've got good news — not appendicitis. It looks like you're passing a kidney stone. It's small, so it should work its way out naturally in a few days.",
                textZh: "有个好消息——不是阑尾炎。看起来是在排肾结石。结石很小，几天内应该能自然排出。",
                actionHint: "询问后续治疗",
                frequency: "common",
              },
            ],
            casualVersion:
              "Good news — not appendicitis. CT shows it's probably a kidney stone. Small enough, should pass on its own in a few days. I'll prescribe pain meds and something for nausea.",
            formalityVariants: {
              casual:
                "Good news — not appendicitis. CT shows it's probably a kidney stone. Should pass on its own in a few days. I'll give you pain meds and an anti-nausea.",
              standard:
                "Good news — it's not appendicitis. The CT scan shows it's likely a kidney stone. It's small enough that it should pass on its own within a few days. I'm going to prescribe pain medication and an anti-nausea drug.",
              formal:
                "We have favorable news; it is not appendicitis. The CT scan indicates the presence of what appears to be a kidney stone. Given its size, it is anticipated to pass spontaneously within several days. I will be prescribing an analgesic and an antiemetic.",
            },
          },
          {
            speaker: "you",
            textEn: "That's a relief! What should I watch out for? I'm traveling and don't have a regular doctor here.",
            textZh: "那就放心了！我需要注意什么？我在旅行，这里没有固定的医生。",
            culturalNote: "美国就医强调连续性，初次就诊医生会提供建议，病人自行找家庭医生跟进。",
            casualVersion:
              "Whew, that's a relief! What should I watch for? I'm travelin', don't got a regular doctor here.",
            commonMistake: {
              wrong: "What should I pay attention?",
              correct: "What should I watch out for?",
              explanation: "'pay attention' 意思是注意力集中，这里是小心注意.",
            },
            formalityVariants: {
              casual: "Whew, that's a relief! What should I look out for? I'm travelin' and don't have a regular doc.",
              standard:
                "That's a relief! What should I watch out for? I'm traveling and don't have a regular doctor here.",
              formal:
                "That is indeed reassuring news. What specific symptoms or developments should I be vigilant for? I am currently traveling and do not have an established primary care physician in this area.",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "Drink lots of water — at least 2 to 3 liters a day. That helps flush the stone out. If the pain gets much worse, you see blood in your urine, or you develop a fever, come back to the ER immediately.",
            textZh: "多喝水——每天至少2到3升。这有助于冲出结石。如果疼痛明显加重、尿里有血或者发烧了，立刻回急诊。",
            commonMistake: {
              wrong: "If the pain is more worse",
              correct: "If the pain gets much worse",
              explanation: "\"more worse\"是中式英语，应说\"much worse\"或\"a lot worse\"。",
            },
            keyPhrases: [
              { en: "flush out", zh: "冲出/排出" },
              { en: "blood in your urine", zh: "尿里有血" },
              { en: "come back to the ER", zh: "回急诊" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Hydrate, hydrate, hydrate — at least 2 to 3 liters a day. That'll help push the stone through. If the pain spikes, you see blood when you pee, or you get a fever, come straight back.",
                textZh: "补水补水补水——每天至少2到3升。帮助推动结石排出。如果疼痛加剧、尿中带血或发烧，立刻回来。",
                actionHint: "询问就诊费用",
                frequency: "common",
              },
              {
                textEn:
                  "Most important thing — drink a ton of water. That helps flush it out. Red flags to watch for: way worse pain, blood in your urine, or fever. Any of those, head right back to the ER.",
                textZh:
                  "最重要的——大量喝水。帮助冲出结石。需要警惕的：疼痛明显加重、尿中有血或发烧。出现任何一种，直接回急诊。",
                actionHint: "确认注意事项",
                frequency: "common",
              },
            ],
            casualVersion:
              "Drink tons of water — like, 2-3 liters a day. Helps flush it out. If pain gets way worse, you see blood in your pee, or get a fever, come right back to the ER.",
            formalityVariants: {
              casual:
                "Drink tons of water — like, 2-3 liters daily. That helps flush the stone. If pain gets way worse, blood in your pee, or a fever, come right back to the ER.",
              standard:
                "Drink lots of water — at least 2 to 3 liters a day. That helps flush the stone out. If the pain gets much worse, you see blood in your urine, or you develop a fever, come back to the ER immediately.",
              formal:
                "It is imperative that you maintain a high fluid intake, consuming a minimum of 2 to 3 liters of water daily. This will facilitate the passage of the renal calculus. Should you experience a significant exacerbation of pain, hematuria, or the onset of a fever, please return to the emergency department without delay.",
            },
          },
          {
            speaker: "you",
            textEn: "How much will this visit cost? And can I get a medical report for my insurance company back home?",
            textZh: "这次就诊大概要多少钱？我能拿一份医疗报告给国内的保险公司吗？",
            casualVersion: "How much is this gonna cost? And can I get a report for my insurance back home?",
            culturalNote: "美国医疗费用高昂，确认账单和保险报销非常重要。",
            commonMistake: {
              wrong: "How much does this visit cost?",
              correct: "How much will this visit cost?",
              explanation: "询问未来费用多用 will, 而非 does.",
            },
            formalityVariants: {
              casual: "How much is this gonna cost? Can I get a report for my insurance back home?",
              standard:
                "How much will this visit cost? And can I get a medical report for my insurance company back home?",
              formal:
                "Could you please inform me of the estimated cost for this visit? Additionally, would it be possible to obtain a comprehensive medical report for submission to my insurance provider in my home country?",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "The billing department can give you an itemized bill. The total depends on your insurance, but we'll provide all documentation. Ask the front desk for a detailed medical report and receipts — you'll need those for your insurance claim.",
            textZh:
              "计费部门可以给你一份分项账单。总费用取决于你的保险，但我们会提供所有文件。找前台要一份详细的医疗报告和收据——申请保险理赔需要这些。",
            commonMistake: {
              wrong: "We will give all documents.",
              correct: "We will provide all the necessary documentation.",
              explanation: "\"provide documentation\"是更专业的说法，\"give documents\"过于直接。",
            },
            keyPhrases: [
              { en: "itemized bill", zh: "分项账单" },
              { en: "medical report", zh: "医疗报告" },
              { en: "insurance claim", zh: "保险理赔" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Talk to the front desk about billing — they can break it all down for you. Make sure you grab an itemized receipt and a medical report. You'll need those for your insurance back home.",
                textZh: "跟前台聊一下费用——他们会给你分项列明。记得拿分项收据和医疗报告。回国报销需要。",
                actionHint: "去前台办手续",
                frequency: "common",
              },
              {
                textEn:
                  "We'll get you all the paperwork. Just ask at checkout for an itemized bill and a letter summarizing your visit — your insurance company will want those.",
                textZh: "我们会给你所有文件。结账时跟前台要分项账单和就诊摘要信——你的保险公司需要这些。",
                actionHint: "索取文件",
                frequency: "common",
              },
            ],
            casualVersion:
              "Billing can give you an itemized bill. Total depends on your insurance, but we'll give you everything. Ask the front desk for a detailed report and receipts — you'll need 'em for your claim.",
            culturalNote: "美国医疗系统复杂，费用需与医院和保险公司多方沟通。",
            formalityVariants: {
              casual:
                "Billing can give you an itemized bill. Total depends on your insurance, but we'll give you everything. Ask the front desk for a detailed report and receipts — you'll need 'em for your claim.",
              standard:
                "The billing department can give you an itemized bill. The total depends on your insurance, but we'll provide all documentation. Ask the front desk for a detailed medical report and receipts — you'll need those for your insurance claim.",
              formal:
                "The billing department will be able to provide you with an itemized statement. The total cost will be contingent upon your insurance coverage, but we will furnish all necessary documentation. Kindly inquire at the front desk for a comprehensive medical report and all pertinent receipts, as these will be required for your insurance claim submission.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you, Doctor. Can I pick up the prescription at any pharmacy?",
            textZh: "谢谢医生。处方药可以在任何药房取吗？",
            casualVersion: "Thanks, Doc. Can I pick up the meds at any pharmacy?",
            commonMistake: {
              wrong: "Can I take the prescription at any pharmacy?",
              correct: "Can I pick up the prescription at any pharmacy?",
              explanation: "药品是 'pick up' 而不是 'take'。",
            },
            formalityVariants: {
              casual: "Thanks, Doc. Can I pick up the meds anywhere?",
              standard: "Thank you, Doctor. Can I pick up the prescription at any pharmacy?",
              formal: "Thank you, Doctor. May I inquire if I am able to fill this prescription at any pharmacy?",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "Yes, I'm sending it electronically to the CVS on Main Street — it's the closest one. It should be ready in about 30 minutes. Here's a summary of your visit, your prescriptions, and my card in case you need a follow-up. Take care and drink that water!",
            textZh:
              "是的，我已经通过电子处方发到Main Street的CVS药房了——那是最近的一家。大约30分钟就能取。这是你的就诊摘要、处方和我的名片，需要复诊的话联系我。保重，记得多喝水！",
            commonMistake: {
              wrong: "I sent the e-prescription to CVS.",
              correct: "I already sent it electronically to the CVS.",
              explanation: "用\"sent it electronically\"比\"e-prescription\"更自然。",
            },
            keyPhrases: [
              { en: "electronically", zh: "通过电子方式" },
              { en: "follow-up", zh: "复诊" },
              { en: "summary of your visit", zh: "就诊摘要" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep, I'm e-prescribing it to the CVS down the street. Should be ready in about half an hour. Here's your visit summary and my card — call if anything changes.",
                textZh: "是的，我电子处方发到附近的CVS了。大约半小时能取。这是就诊摘要和我的名片——有变化打电话给我。",
                actionHint: "前往药房取药",
                frequency: "common",
              },
              {
                textEn:
                  "I'll shoot it over to the nearest CVS electronically. Give them about 30 minutes. And here — take my card in case you need to follow up.",
                textZh: "我电子发到最近的CVS。给他们大约30分钟准备。拿着我的名片，需要复诊的话联系我。",
                actionHint: "前往取药",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep, I'm e-sending it to the CVS on Main Street — closest one. Should be ready in about 30. Here's a summary, your meds, and my card if you need to follow up. Take care, and drink that water!",
            culturalNote: "美国医生会将处方直接发送到药房，病人只需去取药。",
            formalityVariants: {
              casual:
                "Yep, sending it to the CVS on Main Street — closest one. Ready in about 30. Here's your summary, meds, and my card if you need to follow up. Take care, drink that water!",
              standard:
                "Yes, I'm sending it electronically to the CVS on Main Street — it's the closest one. It should be ready in about 30 minutes. Here's a summary of your visit, your prescriptions, and my card in case you need a follow-up. Take care and drink that water!",
              formal:
                "Yes, I have transmitted the prescription electronically to the CVS pharmacy located on Main Street, which is the most proximate option. It should be prepared for collection in approximately 30 minutes. Here is a summary of your visit, your prescriptions, and my professional card should you require a follow-up appointment. Please take care and ensure adequate hydration.",
            },
          },
          {
            speaker: "you",
            textEn: "I will. Thank you so much for your help. I feel much better knowing what it is.",
            textZh: "会的。非常感谢你的帮助。知道是什么问题后感觉安心多了。",
            commonMistake: {
              wrong: "I feel more relieved.",
              correct: "I feel much better/more relieved knowing what it is.",
              explanation: "\"much better\"更常用，或者直接说\"feel relieved\"。",
            },
            casualVersion: "Will do. Thanks a ton for your help. Feel way better knowing what it is.",
            formalityVariants: {
              casual: "Will do. Thanks a ton for your help. Feel way better knowing what it is.",
              standard: "I will. Thank you so much for your help. I feel much better knowing what it is.",
              formal:
                "I shall. I extend my sincere gratitude for your assistance. I feel significantly more at ease now that I am aware of the diagnosis.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 皮肤科 ====================
  {
    id: "medical-skin",
    category: "medical",
    titleZh: "皮肤科",
    titleEn: "Dermatologist Visit",
    description: "看皮肤科，描述皮疹、晒伤、过敏等皮肤问题，获取治疗方案",
    otherRole: "皮肤科医生",
    otherRoleIcon: "sun",
    flows: [
      // --- Flow 1: 皮疹和过敏 ---
      {
        id: "rash-allergy",
        titleZh: "皮疹和过敏",
        titleEn: "Rash & Allergic Reaction",
        description: "出现皮疹或过敏反应去看皮肤科",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Doctor, I've developed a rash on my arms and neck. It appeared two days ago and it's really itchy.",
            textZh: "医生，我胳膊和脖子上长了皮疹。两天前出现的，特别痒。",
            casualVersion: "Doc, I got this rash on my arms and neck. Popped up two days ago, and it's super itchy.",
            culturalNote: "美国就医时，可以直接称呼“Doctor”或“Doc”，无需说“Hello Doctor”或“请问医生”。",
            commonMistake: {
              wrong: "My arms and neck grow a rash.",
              correct: "I have a rash on my arms and neck.",
              explanation: "“grow”不用于描述身体部位长出东西，用“have”或“get”更自然。",
            },
            formalityVariants: {
              casual: "Hey Doc, got a rash on my arms and neck. Super itchy, showed up two days ago.",
              standard: "Doctor, I have a rash on my arms and neck. It appeared two days ago and is extremely itchy.",
              formal: "Good morning/afternoon, Doctor. I've developed a rash on both my arms and neck. It emerged approximately two days ago and has become intensely itchy.",
            },
          },
          {
            speaker: "them",
            role: "皮肤科医生",
            textEn:
              "Let me take a look. Hmm, the rash is red, raised, and slightly bumpy. Have you been exposed to anything new recently — new food, laundry detergent, plants, or skincare products?",
            textZh:
              "让我看看。嗯，皮疹是红色的，凸起的，有点小疙瘩。你最近接触了什么新东西吗——新食物、洗衣液、植物或护肤品？",
            commonMistake: {
              wrong: "Have you touched anything new recently?",
              correct: "Have you been exposed to anything new recently?",
              explanation: "直接翻译'接触'通常用exposed to，而不是touched。",
            },
            casualVersion: "Lemme see. Hmm, rash's red, raised, a little bumpy. Been 'round anything new lately? Like, new food, detergent, plants, or skincare stuff?",
            formalityVariants: {
              casual: "Let's see. Rash is red, raised, kinda bumpy. Anything new you've been around? New food, detergent, plants, skincare?",
              standard: "Let me take a look. Hmm, the rash is red, raised, and slightly bumpy. Have you been exposed to anything new recently — new food, laundry detergent, plants, or skincare products?",
              formal: "Allow me to examine it. Indeed, the rash presents as erythematous, elevated, and somewhat papular. Have you encountered any novel exposures recently, such as new dietary items, laundry detergents, botanical elements, or topical skincare preparations?",
            },
            keyPhrases: [
              { en: "rash", zh: "皮疹" },
              { en: "itchy", zh: "痒的" },
              { en: "raised", zh: "凸起的" },
              { en: "bumpy", zh: "有疙瘩的" },
              { en: "exposed to", zh: "接触到" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "OK, let me see... Yeah, it's definitely irritated — red, bumpy, slightly raised. Have you come into contact with anything new lately? New foods, soaps, plants?",
                textZh:
                  "好，我看看……嗯，确实有刺激——红的、有小疙瘩、微凸。你最近接触了什么新东西吗？新食物、肥皂、植物？",
                actionHint: "回忆近期接触物",
                frequency: "common",
              },
              {
                textEn:
                  "Hmm, I can see the rash clearly. It's raised and bumpy. Think back — any new products? Detergent, sunscreen, anything like that?",
                textZh: "嗯，我能清楚看到皮疹。凸起的，有小疙瘩。回想一下——有用什么新产品吗？洗衣液、防晒霜之类的？",
                actionHint: "列举最近用过的新产品",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I've been hiking a lot and may have touched some plants. Also, I've been using a new sunscreen I bought here.",
            textZh: "我最近经常徒步，可能碰到了一些植物。另外我一直在用在这里买的新防晒霜。",
            commonMistake: {
              wrong: "I often hike recently, maybe I touched some plants.",
              correct: "I've been hiking a lot lately, so I might have come into contact with some plants.",
              explanation: "I've been hiking 表达最近持续的活动，come into contact with 更自然。",
            },
            casualVersion: "I've been hiking a bunch lately, so might've brushed some plants. Plus, I'm using a new sunscreen I got here.",
            formalityVariants: {
              casual: "Been hiking a lot, so yeah, maybe hit some plants. And I'm using a new sunscreen I picked up here.",
              standard: "I hike a lot lately, so I might have brushed against some plants. Also, I've been using a new sunscreen I bought here.",
              formal: "I have been engaging in frequent hiking activities recently, which may have resulted in incidental contact with certain plant species. Additionally, I have commenced using a new sunscreen product acquired locally.",
            },
          },
          {
            speaker: "them",
            role: "皮肤科医生",
            textEn:
              "It looks like contact dermatitis — probably a reaction to either the plants or the sunscreen. Stop using that sunscreen immediately. I'm going to prescribe a topical steroid cream to reduce the inflammation and an antihistamine for the itching.",
            textZh:
              "看起来是接触性皮炎——可能是对植物或防晒霜的反应。立刻停用那款防晒霜。我给你开一支外用类固醇药膏来消炎，还有一种抗组胺药来止痒。",
            commonMistake: {
              wrong: "I will open a topical steroid cream for you.",
              correct: "I'll prescribe a topical steroid cream for you.",
              explanation: "开药用 'prescribe' 更地道。",
            },
            casualVersion: "Looks like contact dermatitis—prob'ly from the plants or sunscreen. Stop that sunscreen, like, now. I'll get you a steroid cream for the inflammation and an antihistamine for the itch.",
            formalityVariants: {
              casual: "Yeah, contact dermatitis, likely from plants or that sunscreen. Ditch the sunscreen ASAP. I'll prescribe a steroid cream for the swelling and an antihistamine for the itch.",
              standard: "It looks like contact dermatitis — probably a reaction to either the plants or the sunscreen. Stop using that sunscreen immediately. I will prescribe you a topical steroid cream to reduce the inflammation and an antihistamine for the itching.",
              formal: "This appears consistent with contact dermatitis, likely an immunological reaction to either botanical exposure or the sunscreen product. Discontinue the use of that sunscreen without delay. I shall prescribe a topical corticosteroid cream to mitigate the inflammation, as well as an oral antihistamine to alleviate pruritus.",
            },
            keyPhrases: [
              { en: "contact dermatitis", zh: "接触性皮炎" },
              { en: "topical steroid cream", zh: "外用类固醇药膏" },
              { en: "inflammation", zh: "炎症" },
              { en: "antihistamine", zh: "抗组胺药" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "This is classic contact dermatitis — your skin reacted to something it touched. Ditch that sunscreen right away. I'm giving you a steroid cream and some antihistamines.",
                textZh:
                  "这是典型的接触性皮炎——皮肤对接触的东西起了反应。立刻扔掉那个防晒霜。我给你开类固醇药膏和抗组胺药。",
                actionHint: "询问用药方法",
                frequency: "common",
              },
              {
                textEn:
                  "Looks like a contact allergy — could be the plants, could be the sunscreen. Stop using that sunscreen today. I'll prescribe a cream to calm it down and something for the itch.",
                textZh:
                  "看起来是接触过敏——可能是植物也可能是防晒霜。今天就停用那个防晒霜。我开个药膏消炎，再开个止痒的。",
                actionHint: "确认停用防晒霜",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How often should I apply the cream?",
            textZh: "药膏多久涂一次？",
            casualVersion: "How often do I put on the cream?",
            commonMistake: {
              wrong: "How many times I should apply the cream?",
              correct: "How often should I apply the cream?",
              explanation: "询问频率用“How often”更地道，“How many times”语序也需注意。",
            },
            formalityVariants: {
              casual: "How often for the cream?",
              standard: "How often should I apply the cream?",
              formal: "What is the recommended frequency for applying this topical medication?",
            },
          },
          {
            speaker: "them",
            role: "皮肤科医生",
            textEn:
              "Apply a thin layer twice a day — morning and evening — for one week. Don't scratch the rash even if it's tempting. Keep the area clean and dry. If it spreads or you develop blisters, come back right away.",
            textZh:
              "薄薄涂一层，每天两次——早晚各一次——涂一周。即使很痒也不要抓。保持患处清洁干燥。如果皮疹扩散或起水泡，立刻回来。",
            commonMistake: {
              wrong: "Don't scratch even it's very itchy.",
              correct: "Don't scratch, even if it's very itchy.",
              explanation: "'even if' 连词更完整；'it's' 是 it is 的缩写。",
            },
            casualVersion: "Just a thin layer, twice a day—morning and night—for a week. Don't scratch, even if it's super itchy. Keep it clean and dry. If it spreads or blisters, come right back.",
            formalityVariants: {
              casual: "Thin layer, twice a day (morning/night) for a week. Don't scratch, seriously. Keep it clean and dry. If it gets worse or blisters, come back.",
              standard: "Apply a thin layer twice a day — morning and evening — for one week. Don't scratch it, even if it's very itchy. Keep the affected area clean and dry. If the rash spreads or blisters form, come back immediately.",
              formal: "Kindly apply a thin stratum of the cream twice daily, specifically in the morning and evening, for a duration of one week. It is imperative that you refrain from scratching the affected area, irrespective of pruritus severity. Maintain the area in a clean and dry state. Should the rash disseminate or should vesicles form, please return for an immediate re-evaluation.",
            },
            keyPhrases: [
              { en: "thin layer", zh: "薄薄一层" },
              { en: "scratch", zh: "抓/挠" },
              { en: "blisters", zh: "水泡" },
              { en: "spreads", zh: "扩散" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Rub on a thin layer morning and night for a week. Try not to scratch it, even though I know it's hard. Keep the area clean and dry. If it gets worse or you see blisters, come back ASAP.",
                textZh:
                  "早晚各薄涂一次，涂一周。尽量别挠，虽然我知道很难忍。保持患处清洁干燥。如果加重或起水泡，尽快回来。",
                actionHint: "询问日常注意事项",
                frequency: "common",
              },
              {
                textEn:
                  "Twice a day — just a little bit, you don't need a lot. Morning and before bed. And whatever you do, don't scratch — that'll make it worse.",
                textZh: "每天两次——涂一点点就够了。早上和睡前。千万别挠——会更严重的。",
                actionHint: "了解涂药细节",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I still go swimming or be in the sun?",
            textZh: "我还能去游泳或晒太阳吗？",
            commonMistake: {
              wrong: "Can I still swim or sunbath?",
              correct: "Can I still go swimming or be in the sun?",
              explanation: "Sunbath是动词，通常用 'sunbathe' 或 'be in the sun'。",
            },
            casualVersion: "Can I still swim or like, go in the sun?",
            formalityVariants: {
              casual: "Swimming or sun? Is that okay?",
              standard: "Can I still go swimming or be in the sun?",
              formal: "Am I permitted to engage in aquatic activities or exposure to direct sunlight?",
            },
          },
          {
            speaker: "them",
            role: "皮肤科医生",
            textEn:
              "Avoid direct sun exposure on the affected areas for at least a week. Chlorine in pools might irritate it further. When you go outside, use a hypoallergenic, fragrance-free sunscreen — I can recommend a brand.",
            textZh:
              "至少一周内避免患处直接晒太阳。泳池里的氯可能会进一步刺激皮肤。外出时用低敏、无香精的防晒霜——我可以推荐一个牌子。",
            commonMistake: {
              wrong: "Avoid direct sun shine on the affected areas.",
              correct: "Avoid direct sun exposure on the affected areas.",
              explanation: "避免阳光直射用 'sun exposure' 更专业。",
            },
            casualVersion: "Stay outta direct sun on those spots for at least a week. Pool chlorine could make it worse. When you go out, use a hypo-allergenic, no-fragrance sunscreen—I can tell you a good one.",
            formalityVariants: {
              casual: "No direct sun on those spots for a week, minimum. Pool chlorine might irritate it. Use a hypo-allergenic, no-perfume sunscreen when you're outside. I can suggest one.",
              standard: "Avoid direct sun exposure on the affected areas for at least a week. Chlorine in pools might irritate it further. When you go outside, use a hypoallergenic, fragrance-free sunscreen — I can recommend a brand.",
              formal: "It is advisable to abstain from direct solar exposure to the affected regions for a minimum duration of one week. The presence of chlorine in swimming pools may potentially exacerbate the irritation. When outdoors, utilize a hypoallergenic, fragrance-free sunscreen product; I am able to provide a brand recommendation.",
            },
            keyPhrases: [
              { en: "sun exposure", zh: "晒太阳/日晒" },
              { en: "chlorine", zh: "氯" },
              { en: "hypoallergenic", zh: "低敏的" },
              { en: "fragrance-free", zh: "无香精的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Stay out of the sun for at least a week, especially on the rash areas. Pool chlorine could make it worse too. When you do go out, grab a hypoallergenic sunscreen — I can point you to a good one.",
                textZh: "至少一周别晒太阳，尤其是皮疹的地方。泳池的氯也可能加重。出门时用低敏防晒霜——我可以推荐一个。",
                actionHint: "请医生推荐品牌",
                frequency: "common",
              },
              {
                textEn:
                  "No direct sun on those areas for a week, minimum. And I'd skip the pool — the chlorine won't do you any favors. Use a fragrance-free sunscreen when you're outside.",
                textZh: "至少一周内那些地方不能直晒。游泳也先别去——氯水对皮肤没好处。出门用无香精防晒霜。",
                actionHint: "确认防晒注意事项",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please recommend one. Thank you, Doctor. How long until the rash goes away?",
            textZh: "好的，请推荐一个。谢谢医生。皮疹多久能好？",
            casualVersion: "Yeah, please recommend one. Thanks, Doc. How long 'til this rash is gone?",
            commonMistake: {
              wrong: "How long the rash will go away?",
              correct: "How long will the rash go away?",
              explanation: "询问持续时间用“How long will/until...”，语序和助动词很重要。",
            },
            formalityVariants: {
              casual: "Yeah, recommend one. Thanks, Doc. When will this rash clear up?",
              standard: "Yes, please recommend one. Thank you, Doctor. How long until the rash goes away?",
              formal: "Indeed, a recommendation would be appreciated. My gratitude, Doctor. What is the projected timeframe for the resolution of this dermatological condition?",
            },
          },
          {
            speaker: "them",
            role: "皮肤科医生",
            textEn:
              "With the medication, you should see improvement in 3 to 5 days. It should clear up completely within two weeks. Here's the prescription — any pharmacy can fill it.",
            textZh: "用药的话，3到5天应该能看到改善。两周内应该完全消退。这是处方——任何药房都能取。",
            culturalNote: "在美国，药房(pharmacy)通常会根据处方(prescription)给你药，而不是直接'拿药'。",
            commonMistake: {
              wrong: "You can take the prescription in any pharmacy.",
              correct: "You can fill the prescription at any pharmacy.",
              explanation: "在美国，凭处方取药用 'fill a prescription'。",
            },
            casualVersion: "With the meds, you'll see improvement in 3 to 5 days. Should be totally gone within two weeks. Here's your script—any pharmacy can fill it.",
            formalityVariants: {
              casual: "Meds should make it better in 3-5 days. Gone totally in two weeks. Here's your prescription, any pharmacy's got it.",
              standard: "With the medication, you should see improvement in 3 to 5 days. It should clear up completely within two weeks. Here is your prescription — you can fill it at any pharmacy.",
              formal: "With adherence to the prescribed medication regimen, you should observe clinical improvement within three to five days. Complete resolution is anticipated within a two-week period. This constitutes your prescription, which may be dispensed at any pharmaceutical establishment.",
            },
            keyPhrases: [
              { en: "improvement", zh: "改善" },
              { en: "clear up", zh: "消退/好转" },
              { en: "fill it", zh: "取药/配药" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You should start seeing it clear up in three to five days. Give it about two weeks to fully go away. Here's the prescription — any pharmacy can fill it for you.",
                textZh: "三到五天应该能看到好转。大约两周完全消退。这是处方——任何药房都能取。",
                actionHint: "前往药房取药",
                frequency: "common",
              },
              {
                textEn:
                  "Most people feel a lot better within a few days on the cream. It'll take a couple weeks to clear up completely. Take this to any pharmacy.",
                textZh: "大多数人涂了药膏几天内就会好很多。完全好需要两周左右。拿这个去任何药房都行。",
                actionHint: "去药房配药",
                frequency: "common",
              },
            ],
          },
        ],
      },

      // --- Flow 2: 严重晒伤 ---
      {
        id: "sunburn",
        titleZh: "严重晒伤",
        titleEn: "Severe Sunburn",
        description: "户外活动后严重晒伤，看皮肤科处理",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "I got badly sunburned at the beach yesterday. My shoulders and back are bright red, and now there are blisters forming.",
            textZh: "我昨天在海滩严重晒伤了。肩膀和后背通红，现在开始起水泡了。",
            casualVersion: "I got super sunburned at the beach yesterday. Shoulders and back are bright red, and now I'm getting blisters.",
            commonMistake: {
              wrong: "My shoulders and back are bright red, and now the blisters start to come out.",
              correct: "My shoulders and back are bright red, and now there are blisters forming.",
              explanation: "“blisters forming”更自然，“start to come out”不地道。",
            },
            formalityVariants: {
              casual: "Totally fried myself at the beach yesterday. Shoulders/back are bright red, and now I'm getting blisters.",
              standard: "I got badly sunburned at the beach yesterday. My shoulders and back are bright red, and now there are blisters forming.",
              formal: "Yesterday, I experienced a severe sunburn while at the beach. My shoulders and back are intensely erythematous, and vesicular lesions are now developing.",
            },
          },
          {
            speaker: "them",
            role: "皮肤科医生",
            textEn:
              "Let me examine the burns. This is a second-degree sunburn — the blistering tells me the deeper layers of skin are affected. Do you feel feverish or nauseous?",
            textZh: "让我检查一下。这是二度晒伤——起水泡说明伤到了更深层的皮肤。你有发烧或恶心的感觉吗？",
            commonMistake: {
              wrong: "Do you feel fever or nauseous?",
              correct: "Do you feel feverish or nauseous?",
              explanation: "'feverish' 是形容词，意为发烧的，更符合语境。",
            },
            casualVersion: "Lemme check the burns. This is a second-degree sunburn—the blisters mean it hit deeper skin layers. Feeling feverish or sick to your stomach?",
            formalityVariants: {
              casual: "Let's see those burns. Second-degree, huh? Blisters mean it's deeper. Feeling feverish or nauseous?",
              standard: "Let me examine the burns. This is a second-degree sunburn — the blistering tells me the deeper layers of skin are affected. Do you feel feverish or nauseous?",
              formal: "Allow me to examine the affected areas. This presents as a second-degree sunburn, with the presence of blistering indicating involvement of the deeper dermal layers. Are you experiencing any febrile symptoms or nausea?",
            },
            keyPhrases: [
              { en: "second-degree sunburn", zh: "二度晒伤" },
              { en: "blistering", zh: "起水泡" },
              { en: "deeper layers", zh: "更深层" },
              { en: "feverish", zh: "发烧的感觉" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "OK, let me take a look... This is pretty bad — it's a second-degree burn. The blisters mean it's gone deeper than just the surface. Are you feeling feverish or sick at all?",
                textZh: "好，我看看……这挺严重的——是二度烧伤。起水泡说明伤到了深层皮肤。你有发烧或不舒服吗？",
                actionHint: "如实描述全身症状",
                frequency: "common",
              },
              {
                textEn:
                  "Yikes — that's a second-degree sunburn. Blistering like this means the deeper skin layers got hit. Any fever or nausea?",
                textZh: "哎呀——这是二度晒伤。这样起水泡说明深层皮肤受损了。有发烧或恶心吗？",
                actionHint: "告知伴随症状",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "A little nauseous, yes. And I had a headache last night. I was out in the sun for about 4 hours and forgot to reapply sunscreen.",
            textZh: "有一点恶心。昨晚还头痛了。我在太阳下待了大约4个小时，忘了补涂防晒霜。",
            casualVersion: "Yeah, a little nauseous. And I had a headache last night. Was in the sun for like, 4 hours, and totally forgot to reapply sunscreen.",
            commonMistake: {
              wrong: "forgot to put on sunscreen again.",
              correct: "forgot to reapply sunscreen.",
              explanation: "“reapply”是一个专用词，指重新涂抹，比“put on again”更简洁准确。",
            },
            formalityVariants: {
              casual: "Kinda nauseous, yeah. Got a headache last night too. Was out in the sun for like 4 hours, and just forgot to put on more sunscreen.",
              standard: "A little nauseous, yes. And I had a headache last night. I was out in the sun for about 4 hours and forgot to reapply sunscreen.",
              formal: "I am experiencing some mild nausea, yes. I also had a headache last night. I was exposed to direct sunlight for approximately four hours and neglected to reapply sunscreen.",
            },
          },
          {
            speaker: "them",
            role: "皮肤科医生",
            textEn:
              "The nausea and headache could be signs of sun poisoning — that's a more severe reaction. I want you to drink plenty of water because dehydration makes it worse. Don't pop the blisters — they protect the skin underneath.",
            textZh:
              "恶心和头痛可能是日光中毒的症状——那是更严重的反应。多喝水，因为脱水会加重症状。不要挑破水泡——它们保护下面的皮肤。",
            commonMistake: {
              wrong: "Don't break the blisters.",
              correct: "Don't pop the blisters.",
              explanation: "弄破水泡通常用 'pop' 或 'pick'。",
            },
            casualVersion: "Nausea and headache could be sun poisoning—that's a worse reaction. Drink tons of water, 'cause dehydration makes it worse. Don't pop the blisters; they protect your skin.",
            formalityVariants: {
              casual: "Sun poisoning might be why you're nauseous/have a headache—it's more serious. Drink lots of water, dehydration will make it worse. Don't pop the blisters; they're like a shield for your skin.",
              standard: "The nausea and headache could be signs of sun poisoning — that's a more severe reaction. Drink plenty of water, as dehydration can worsen symptoms. Don't pop the blisters — they protect the skin underneath.",
              formal: "The presence of nausea and headache may indicate symptoms of sun poisoning, which represents a more severe adverse reaction. Ensure copious fluid intake, as dehydration can exacerbate these symptoms. It is critical to refrain from rupturing the blisters, as they serve a protective function for the underlying dermal layers.",
            },
            keyPhrases: [
              { en: "sun poisoning", zh: "日光中毒" },
              { en: "dehydration", zh: "脱水" },
              { en: "pop the blisters", zh: "挑破水泡" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The headache and nausea tell me this might be sun poisoning — that's a step beyond regular sunburn. You need to be drinking lots of water. And leave those blisters alone — don't pop them.",
                textZh: "头痛和恶心可能是日光中毒——比普通晒伤严重一级。你要大量喝水。水泡别碰——不要挑破。",
                actionHint: "询问护理方法",
                frequency: "common",
              },
              {
                textEn:
                  "With the nausea and headache, I'm thinking sun poisoning — it's basically your body's reaction to too much UV. Hydrate like crazy and do not touch those blisters.",
                textZh: "有恶心和头痛的话，我觉得是日光中毒——基本上是身体对过多紫外线的反应。疯狂补水，不要碰水泡。",
                actionHint: "确认注意事项",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What should I put on it? I've been using aloe vera gel.",
            textZh: "应该涂什么？我一直在涂芦荟胶。",
            casualVersion: "What should I put on it? I've been using aloe vera.",
            commonMistake: {
              wrong: "What should I paint on it?",
              correct: "What should I put on it?",
              explanation: "“paint”是刷漆，涂药用“put on”或“apply”更合适。",
            },
            formalityVariants: {
              casual: "What should I put on it? Been using aloe vera.",
              standard: "What should I put on it? I've been using aloe vera gel.",
              formal: "What topical treatment would you recommend? I have been applying aloe vera gel.",
            },
          },
          {
            speaker: "them",
            role: "皮肤科医生",
            textEn:
              "Aloe vera is good for mild sunburn, but for this severity, I'm prescribing a prescription-strength burn cream. Apply it gently three times a day. Take ibuprofen for the pain and inflammation. Wear loose, soft clothing — nothing tight on those shoulders.",
            textZh:
              "芦荟胶对轻微晒伤有用，但这个程度的话，我给你开一支处方级别的烧伤药膏。每天轻涂三次。吃布洛芬止痛消炎。穿宽松柔软的衣服——肩膀那里不要穿紧的。",
            casualVersion: "Aloe's fine for light burns, but for this bad, I'm giving you a prescription burn cream. Lightly apply it three times a day. Take ibuprofen for pain and swelling. Wear loose, soft clothes—nothing tight on your shoulders.",
            commonMistake: {
              wrong: "I will open you a prescription burn cream.",
              correct: "I'll prescribe you a prescription-strength burn cream.",
              explanation: "“开药”对应的动词是“prescribe”或“write a prescription for”。",
            },
            formalityVariants: {
              casual: "Aloe's okay for minor burns, but yours is worse, so I'll give you a stronger burn cream. Put it on lightly three times a day. Take ibuprofen for pain/swelling. Wear comfy, loose clothes, nothing tight on the shoulders.",
              standard: "Aloe vera is good for mild sunburn, but for this severity, I'll prescribe a prescription-strength burn cream. Apply it lightly three times a day. Take ibuprofen for pain and inflammation. Wear loose, soft clothing — avoid tight clothes on your shoulders.",
              formal: "While aloe vera is beneficial for mild sunburns, given the current severity, I shall prescribe a prescription-strength burn cream. Apply it gently three times daily. Ibuprofen is recommended for analgesia and anti-inflammatory purposes. Please wear loose, soft garments, particularly avoiding any constriction over the shoulder areas.",
            },
            keyPhrases: [
              { en: "prescription-strength", zh: "处方级别的" },
              { en: "burn cream", zh: "烧伤药膏" },
              { en: "ibuprofen", zh: "布洛芬" },
              { en: "loose clothing", zh: "宽松的衣服" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Aloe's fine for a regular sunburn, but yours needs something stronger. I'm writing you a script for a prescription burn cream. Apply it gently three times a day. Pop some ibuprofen for the swelling.",
                textZh:
                  "芦荟胶对普通晒伤还行，但你的需要更强效的。我给你开处方烧伤药膏。每天轻涂三次。吃点布洛芬消肿。",
                actionHint: "确认用药细节",
                frequency: "common",
              },
              {
                textEn:
                  "For a burn this bad, aloe isn't gonna cut it. I'm prescribing a medicated cream — use it three times a day, nice and gentle. And take ibuprofen to help with the pain and swelling. Loose clothes only.",
                textZh: "这么严重的晒伤，芦荟不够用。我开个药膏——每天三次，轻轻涂。吃布洛芬止痛消肿。只穿宽松衣服。",
                actionHint: "了解涂药方法",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Will I be able to continue my trip? We have outdoor activities planned for the next few days.",
            textZh: "我还能继续旅行吗？接下来几天安排了户外活动。",
            casualVersion: "Can I still do my trip? We got outdoor stuff planned for the next few days.",
            commonMistake: {
              wrong: "We planned outdoor activities for next few days.",
              correct: "We have outdoor activities planned for the next few days.",
              explanation: "常用完成时态“have planned”或被动语态“are planned”，并用“for the next few days”表示未来几天。",
            },
            formalityVariants: {
              casual: "Can I keep traveling? We've got outdoor plans.",
              standard: "Will I be able to continue my trip? We have outdoor activities planned for the next few days.",
              formal: "Will my current condition impede my ability to continue with my travel itinerary? We have scheduled outdoor activities for the forthcoming days.",
            },
          },
          {
            speaker: "them",
            role: "皮肤科医生",
            textEn:
              "You need to stay completely out of the sun for at least 3 to 4 days. After that, cover up with long sleeves, a hat, and SPF 50+ sunscreen. Reapply every two hours, and every 30 minutes if you're swimming. Your skin will be extra sensitive for several weeks.",
            textZh:
              "你至少3到4天要完全避免晒太阳。之后穿长袖、戴帽子，涂SPF 50+的防晒霜。每两个小时补涂一次，如果游泳的话每30分钟一次。你的皮肤在接下来几周会特别敏感。",
            casualVersion: "Gotta stay outta the sun, totally, for at least 3-4 days. After that, cover up: long sleeves, hat, SPF 50+ sunscreen. Reapply every two hours, and every 30 if you're swimming. Your skin's gonna be super sensitive for the next few weeks.",
            commonMistake: {
              wrong: "if swimming",
              correct: "if you're swimming",
              explanation: "在口语中，“if you're swimming”比“if swimming”更自然完整。",
            },
            formalityVariants: {
              casual: "Stay totally out of the sun for at least 3-4 days. Then, cover up with long sleeves, a hat, and SPF 50+ sunscreen. Reapply every two hours, or every 30 if swimming. Skin's gonna be really sensitive for weeks.",
              standard: "You need to stay completely out of the sun for at least 3 to 4 days. After that, cover up with long sleeves, a hat, and SPF 50+ sunscreen. Reapply every two hours, and every 30 minutes if you're swimming. Your skin will be extra sensitive for the next few weeks.",
              formal: "You must completely avoid direct solar exposure for a minimum of three to four days. Subsequent to that period, utilize protective clothing such as long sleeves and a hat, in conjunction with SPF 50+ sunscreen. Reapply the sunscreen every two hours, and every 30 minutes if engaging in aquatic activities. Your integument will exhibit heightened sensitivity for the coming weeks.",
            },
            keyPhrases: [
              { en: "cover up", zh: "遮挡/穿长袖" },
              { en: "SPF", zh: "防晒指数" },
              { en: "reapply", zh: "补涂" },
              { en: "extra sensitive", zh: "特别敏感" },
            ],
            culturalNote:
              "SPF（Sun Protection Factor）是全球通用的防晒指数。SPF 30 能阻挡约97%的UVB，SPF 50能阻挡约98%。关键是要足量、勤补涂。",
            alternativeExpressions: [
              {
                textEn:
                  "Zero sun for at least three or four days — I mean it. After that, cover up: long sleeves, hat, SPF 50 minimum. Reapply every two hours. Your skin's gonna be touchy for weeks.",
                textZh:
                  "至少三四天完全不能晒太阳——我是认真的。之后要遮挡：长袖、帽子，最少SPF 50。每两小时补涂。你的皮肤接下来几周会很敏感。",
                actionHint: "调整旅行计划",
                frequency: "common",
              },
              {
                textEn:
                  "You gotta stay inside for the next few days — no sun at all. When you do go back out, hat, long sleeves, high SPF sunscreen, and keep reapplying.",
                textZh: "接下来几天必须待在室内——完全不能晒太阳。再出门时，帽子、长袖、高倍防晒霜，记得不断补涂。",
                actionHint: "确认恢复时间",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I understand. I'll be more careful from now on. Thank you, Doctor.",
            textZh: "明白了。以后我会更小心的。谢谢医生。",
            casualVersion: "Got it. I'll be more careful next time. Thanks, Doc.",
            commonMistake: {
              wrong: "I will be more careful after this.",
              correct: "I will be more careful in the future.",
              explanation: "“after this”听起来有些生硬，用“in the future”或“next time”更自然。",
            },
            formalityVariants: {
              casual: "Understood. I'll be more careful. Thanks, Doc.",
              standard: "I understand. I will be more careful in the future. Thank you, Doctor.",
              formal: "I comprehend the instructions. I shall exercise greater caution henceforth. Thank you, Doctor.",
            },
          },
          {
            speaker: "them",
            role: "皮肤科医生",
            textEn:
              "You're welcome. And one more thing — if the blisters break on their own, keep the area clean with mild soap and apply antibiotic ointment. Come back if you see signs of infection — pus, increased redness, or fever.",
            textZh:
              "不客气。还有一件事——如果水泡自己破了，用温和的肥皂清洁患处，涂抗生素药膏。如果出现感染迹象——化脓、红肿加重或发烧——立刻回来。",
            casualVersion: "No problem. Oh, one more thing: if the blisters pop on their own, clean the spot with mild soap and put on antibiotic ointment. If you see infection signs—like pus, way more redness, or a fever—come right back.",
            commonMistake: {
              wrong: "if the blisters themselves break",
              correct: "if the blisters break on their own",
              explanation: "“on their own”是更自然的表达“自己破了”，“pop”也是指破裂。",
            },
            formalityVariants: {
              casual: "You're welcome. Just one more thing: if blisters break, clean it with mild soap, then use antibiotic ointment. Any infection signs—pus, more redness, fever—come back ASAP.",
              standard: "You're welcome. One more thing — if the blisters break on their own, clean the area with mild soap and apply antibiotic ointment. If you see signs of infection — pus, increased redness, or fever — come back immediately.",
              formal: "You are most welcome. One additional point of instruction: should the blisters spontaneously rupture, cleanse the area with a mild soap and apply an antibiotic ointment. Should any indications of infection manifest — such as purulent discharge, exacerbation of erythema, or pyrexia — please return for immediate medical attention.",
            },
            keyPhrases: [
              { en: "antibiotic ointment", zh: "抗生素药膏" },
              { en: "infection", zh: "感染" },
              { en: "pus", zh: "脓" },
              { en: "mild soap", zh: "温和的肥皂" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No problem. Oh, and if a blister pops on its own, just keep it clean — wash with gentle soap and dab on some antibiotic cream. If you see any pus or the redness gets worse, or you spike a fever, come see me right away.",
                textZh:
                  "没事。对了，如果水泡自己破了，保持清洁就行——用温和肥皂洗，抹一点抗生素药膏。如果看到化脓、红肿加重或发烧，立刻来找我。",
                actionHint: "记住感染迹象",
                frequency: "common",
              },
              {
                textEn:
                  "One last thing — don't pop the blisters, but if they burst, clean the area with mild soap and put antibiotic ointment on. Watch for signs of infection: pus, spreading redness, or fever.",
                textZh:
                  "最后一件事——别挑水泡，但如果破了，用温和肥皂清洁，涂抗生素药膏。注意感染迹象：化脓、红肿扩散或发烧。",
                actionHint: "了解后续护理",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 体检 ====================
  {
    id: "medical-physical",
    category: "medical",
    titleZh: "体检",
    titleEn: "Health Checkup",
    description: "在国外做健康体检，包括验血、各项检查和了解结果",
    otherRole: "体检中心医生/护士",
    otherRoleIcon: "clipboard",
    flows: [
      // --- Flow 1: 常规体检 ---
      {
        id: "routine-checkup",
        titleZh: "常规体检",
        titleEn: "Routine Health Checkup",
        description: "做常规年度体检，包括基本检查和抽血化验",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have an appointment for a routine health checkup. My name is Wang, and it's at 9 AM.",
            textZh: "你好，我预约了常规体检。我姓王，预约的是上午9点。",
            culturalNote: "在美国医疗机构，直接说明来意和姓名即可，无需使用客套的“请问”或过多寒暄。",
            casualVersion: "Hey, I've got a checkup. Wang, 9 AM.",
            commonMistake: {
              wrong: "Hello, I have an appointment for routine health checkup.",
              correct: "Hi, I have an appointment for a routine health checkup.",
              explanation: "中文里没有冠词，常被漏掉。health checkup 是可数名词，前面需加a。",
            },
            formalityVariants: {
              casual: "Hey, I've got a checkup. Wang, 9 AM.",
              standard: "Hi, I have an appointment for a routine health checkup. My name is Wang, at 9 AM.",
              formal:
                "Good morning. I have an appointment scheduled for a routine health checkup. My name is Wang, and my appointment is for 9:00 AM.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Good morning, Mr. Wang. Yes, I can see your appointment. Have you fasted since last night? The blood work requires an empty stomach.",
            textZh: "早上好，王先生。是的，我查到你的预约了。你从昨晚开始禁食了吗？抽血需要空腹。",
            commonMistake: {
              wrong: "You are fasting since last night?",
              correct: "Have you fasted since last night?",
              explanation: "中式英语常会忽略完成时，直接用进行时或过去时。此处应使用完成时。",
            },
            keyPhrases: [
              { en: "fasted", zh: "禁食/空腹" },
              { en: "blood work", zh: "抽血化验" },
              { en: "empty stomach", zh: "空腹" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Morning! Yep, got you right here. Quick question — have you been fasting? We need an empty stomach for the bloodwork.",
                textZh: "早上好！找到你的预约了。快问一下——空腹了吗？抽血需要空腹。",
                actionHint: "确认禁食情况",
                frequency: "common",
              },
              {
                textEn:
                  "Hi Mr. Wang, welcome in. I see your 9 AM appointment. Did you fast since last night? Nothing to eat or drink except water?",
                textZh: "王先生你好，欢迎。我看到你9点的预约了。昨晚开始禁食了吗？除了水什么都没吃喝？",
                actionHint: "确认空腹",
                frequency: "common",
              },
            ],
            casualVersion:
              "Morning, Mr. Wang. Got your appointment. You fast since last night? Gotta have an empty stomach for the blood work.",
            formalityVariants: {
              casual:
                "Morning, Mr. Wang. Got your appointment. You fast since last night? Gotta be empty stomach for the blood work.",
              standard:
                "Good morning, Mr. Wang. Yes, I see your appointment. Have you fasted since last night? The blood work requires an empty stomach.",
              formal:
                "Good morning, Mr. Wang. I have located your appointment. May I inquire if you have abstained from food and drink since last evening? The scheduled blood work necessitates a fasted state.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I haven't eaten or had coffee since 10 PM last night. Just water.",
            textZh: "是的，昨晚10点后就没有吃东西也没喝咖啡了。只喝了水。",
            casualVersion: "Yep, nothing since 10 PM last night, 'cept water.",
            commonMistake: {
              wrong: "Yes, I did not eat or drink coffee since 10 PM last night.",
              correct: "Yes, I haven't eaten or had coffee since 10 PM last night.",
              explanation: "表示从过去某时开始并持续到现在的情况，用现在完成时更自然。",
            },
            formalityVariants: {
              casual: "Yep, nothing since 10 PM last night, 'cept water.",
              standard: "Yes, I haven't eaten or had coffee since 10 PM last night. Only water.",
              formal:
                "Yes, that is correct. I have abstained from all food and beverages, excluding water, since 10:00 PM yesterday evening.",
            },
          },
          {
            speaker: "them",
            role: "护士",
            textEn:
              "Perfect. Let me start with your vitals. I'll take your blood pressure, heart rate, height, and weight. Then we'll draw blood for the lab work. Are you afraid of needles at all?",
            textZh: "很好。我先量基本生命体征。量血压、心率、身高和体重。然后抽血做化验。你怕打针吗？",
            commonMistake: {
              wrong: "I measure your vitals first.",
              correct: "Let me start with your vitals.",
              explanation: "医生通常用 Let me 或 I'll do something 表示接下来要做的动作，更自然。",
            },
            keyPhrases: [
              { en: "vitals", zh: "基本生命体征" },
              { en: "blood pressure", zh: "血压" },
              { en: "heart rate", zh: "心率" },
              { en: "draw blood", zh: "抽血" },
              { en: "lab work", zh: "化验" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Great, let's get started. I'll check your blood pressure, pulse, height and weight first, then we'll draw some blood. You OK with needles?",
                textZh: "好，开始吧。我先量血压、脉搏、身高体重，然后抽血。你怕针吗？",
                actionHint: "配合检查",
                frequency: "common",
              },
              {
                textEn:
                  "Alright, first things first — let me grab your vitals. BP, heart rate, the usual. Then we'll do the blood draw. Not too nervous about needles, are you?",
                textZh: "好的，先来基本的——量一下生命体征。血压、心率，常规的。然后抽血。不太怕打针吧？",
                actionHint: "告知是否怕针",
                frequency: "common",
              },
            ],
            casualVersion:
              "Great. Let's do your vitals first — BP, heart rate, height, weight. Then we'll draw your blood for the lab. Needles bother you?",
            formalityVariants: {
              casual:
                "Great. Let's do your vitals first — BP, heart rate, height, weight. Then we'll draw your blood for the lab. Needles bother you?",
              standard:
                "Perfect. Let me start with your vitals. I'll take your blood pressure, heart rate, height, and weight. Then we'll draw blood for the lab work. Are you afraid of needles at all?",
              formal:
                "Excellent. We shall begin by measuring your vital signs, which include your blood pressure, heart rate, height, and weight. Following this, we will proceed with drawing blood for your laboratory tests. May I ask if you have any apprehension regarding needles?",
            },
          },
          {
            speaker: "you",
            textEn: "A little, but I'll be fine. What does the blood test check for?",
            textZh: "有一点点，但没关系。验血检查什么项目？",
            casualVersion: "Kinda, but I'll be okay. What's the blood test for?",
            commonMistake: {
              wrong: "What the blood test checks?",
              correct: "What does the blood test check for?",
              explanation: "疑问词做宾语时，动词需要助动词 does/do/did 辅助倒装。",
            },
            formalityVariants: {
              casual: "Kinda, but I'll be okay. What's the blood test for?",
              standard: "A little, but I'll be fine. What does the blood test check for?",
              formal:
                "I have a slight apprehension, but I will manage. Could you please inform me what specific markers or conditions the blood test aims to identify?",
            },
          },
          {
            speaker: "them",
            role: "护士",
            textEn:
              "We're running a comprehensive metabolic panel — that checks your blood sugar, cholesterol, liver function, and kidney function. We'll also do a complete blood count to check your red and white blood cells. The whole thing takes about 5 minutes.",
            textZh:
              "我们做的是综合代谢面板——检查血糖、胆固醇、肝功能和肾功能。还有一个全血细胞计数，检查红细胞和白细胞。整个过程大约5分钟。",
            commonMistake: {
              wrong: "We check blood sugar, cholesterol...",
              correct: "That checks blood sugar, cholesterol...",
              explanation: "英语中解释从句常用关系代词（that/which），避免直接并列动词显得生硬。",
            },
            keyPhrases: [
              { en: "comprehensive metabolic panel", zh: "综合代谢面板" },
              { en: "blood sugar", zh: "血糖" },
              { en: "cholesterol", zh: "胆固醇" },
              { en: "liver function", zh: "肝功能" },
              { en: "kidney function", zh: "肾功能" },
              { en: "complete blood count", zh: "全血细胞计数" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We're doing a full metabolic panel — so that covers blood sugar, cholesterol, liver, kidneys. Plus a CBC to check your red and white cells. The whole thing's over in like five minutes.",
                textZh:
                  "我们做全套代谢面板——包括血糖、胆固醇、肝、肾。再加一个全血计数查红白细胞。整个过程大概五分钟。",
                actionHint: "询问额外检查项目",
                frequency: "common",
              },
              {
                textEn:
                  "It's a pretty standard panel — cholesterol, blood sugar, liver and kidney function. We'll also count your blood cells to make sure everything looks good there. Quick and easy.",
                textZh: "是很标准的面板——胆固醇、血糖、肝功能和肾功能。还会数一下血细胞确保正常。又快又简单。",
                actionHint: "了解检查内容",
                frequency: "common",
              },
            ],
            casualVersion:
              "We're doing a metabolic panel — that's for your blood sugar, cholesterol, liver, kidney. Plus a CBC to check your red and white blood cells. Should be like, 5 mins total.",
            formalityVariants: {
              casual:
                "We're doing a metabolic panel — that's for your blood sugar, cholesterol, liver, kidney. Plus a CBC to check your red and white blood cells. Should be like, 5 mins total.",
              standard:
                "We're running a comprehensive metabolic panel — that checks your blood sugar, cholesterol, liver function, and kidney function. We'll also do a complete blood count to check your red and white blood cells. The whole thing takes about 5 minutes.",
              formal:
                "We are conducting a comprehensive metabolic panel, which assesses your blood glucose levels, cholesterol, hepatic function, and renal function. Additionally, we will perform a complete blood count to evaluate your erythrocyte and leukocyte levels. The entire procedure should be completed within approximately five minutes.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Good to know. I've been feeling more tired than usual lately. Could that be related to something the blood test would show?",
            textZh: "了解了。我最近比平时更容易累。验血能查出原因吗？",
            casualVersion: "Got it. I've been super tired lately. Could the blood test show why?",
            commonMistake: {
              wrong: "I feel more tired than usual recently.",
              correct: "I've been feeling more tired than usual lately.",
              explanation: "表示从最近开始并持续到现在或最近发生的事，用现在完成进行时更流畅。",
            },
            formalityVariants: {
              casual: "Got it. I've been super tired lately. Could the blood test show why?",
              standard:
                "Good to know. I've been feeling more tired than usual lately. Could that be related to something the blood test would show?",
              formal:
                "Thank you for the information. I have noticed an increased level of fatigue recently. Is it possible that the blood test results could provide insight into the underlying cause of this symptom?",
            },
          },
          {
            speaker: "them",
            role: "护士",
            textEn:
              "It could be several things — low iron, thyroid issues, or vitamin D deficiency. I'll make a note for the doctor. We can add a thyroid panel and iron levels to your blood work. All done with the draw — you did great!",
            textZh:
              "可能有几种原因——缺铁、甲状腺问题或维生素D缺乏。我给医生备注一下。我们可以在验血里加上甲状腺和铁的检查。抽完了——你做得很好！",
            commonMistake: {
              wrong: "I will write a note to the doctor.",
              correct: "I'll make a note for the doctor.",
              explanation: "'make a note' 是更自然的表达，比 'write a note' 常见。",
            },
            keyPhrases: [
              { en: "low iron", zh: "缺铁" },
              { en: "thyroid", zh: "甲状腺" },
              { en: "vitamin D deficiency", zh: "维生素D缺乏" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Could be a few things — anemia, thyroid, low vitamin D. I'll flag it for the doctor. We can tack on a thyroid panel and iron levels to your bloodwork. And... all done! You did great.",
                textZh:
                  "可能有几种原因——贫血、甲状腺、维D低。我给医生备注。验血可以加上甲状腺和铁的检查。好了……抽完了！你做得很好。",
                actionHint: "等待结果",
                frequency: "common",
              },
              {
                textEn:
                  "The tiredness could be iron, could be thyroid, maybe vitamin D. Let me add those to your panel so we catch everything. Aaand... done! Not so bad, right?",
                textZh: "疲劳可能是缺铁、甲状腺或维生素D的问题。我加到化验项目里一起查。好了……完了！没那么可怕吧？",
                actionHint: "确认后续流程",
                frequency: "common",
              },
            ],
            casualVersion:
              "Could be a few things — low iron, thyroid, or low vitamin D. I'll tell the doctor. We can add thyroid and iron checks to your blood work. All done — you rocked it!",
            formalityVariants: {
              casual:
                "Could be a few things — low iron, thyroid, or low vitamin D. I'll tell the doctor. We can add thyroid and iron checks to your blood work. All done — you rocked it!",
              standard:
                "It could be several things — low iron, thyroid issues, or vitamin D deficiency. I'll make a note for the doctor. We can add a thyroid panel and iron levels to your blood work. All done with the draw — you did great!",
              formal:
                "There are several potential factors, such as iron deficiency, thyroid dysfunction, or insufficient Vitamin D levels. I will document this for the physician. We can certainly include a thyroid panel and iron level assessment in your blood work. The blood draw is now complete; you handled it very well.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. When will the results be ready?",
            textZh: "谢谢。结果什么时候出？",
            casualVersion: "Thanks. When's the results ready?",
            commonMistake: {
              wrong: "When the results out?",
              correct: "When will the results be ready?",
              explanation: "问句需要助动词 will/are，且 be ready 是常见表达。",
            },
            formalityVariants: {
              casual: "Thanks. When's the results ready?",
              standard: "Thank you. When will the results be ready?",
              formal:
                "Thank you. Could you please advise on the estimated timeframe for the availability of the results?",
            },
          },
          {
            speaker: "them",
            role: "护士",
            textEn:
              "Most results will be available within 24 to 48 hours. You can check them online through our patient portal, or we'll call you if anything needs attention. The doctor will review everything and send you a summary.",
            textZh:
              "大部分结果24到48小时内出。你可以通过我们的患者门户在线查看，如果有什么需要注意的我们会打电话给你。医生会审核所有结果，然后发一份摘要给你。",
            commonMistake: {
              wrong: "If anything needs attention we will call you.",
              correct: "Or we'll call you if anything needs attention.",
              explanation: "英文连词的使用，表明两种情况中的一种，保持句子的逻辑性和流畅性。",
            },
            culturalNote: "美国医院常用病人门户网站查报告",
            keyPhrases: [
              { en: "patient portal", zh: "患者门户/在线平台" },
              { en: "needs attention", zh: "需要注意" },
              { en: "summary", zh: "摘要" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Results usually take a day or two. You can check online through our patient portal, or we'll give you a call if anything's off. The doctor will go through everything and send you a summary.",
                textZh:
                  "结果通常一两天出。可以通过我们的患者门户在线查，如果有异常我们会打电话。医生会审核然后发摘要给你。",
                actionHint: "确认查看方式",
                frequency: "common",
              },
              {
                textEn:
                  "Give it 24 to 48 hours. You'll be able to see everything on the portal, and the doctor will reach out if anything needs follow-up.",
                textZh: "24到48小时出结果。门户上都能看到，如果有需要跟进的医生会联系你。",
                actionHint: "记录门户信息",
                frequency: "common",
              },
            ],
            casualVersion:
              "Most results should be up in 24-48 hours. You can check 'em online via our portal, or we'll give you a call if anything's up. Doc'll look it all over and send you a summary.",
            formalityVariants: {
              casual:
                "Most results should be up in 24-48 hours. You can check 'em online via our portal, or we'll give you a call if anything's up. Doc'll look it all over and send you a summary.",
              standard:
                "Most results will be available within 24 to 48 hours. You can check them online through our patient portal, or we'll call you if anything needs attention. The doctor will review everything and send you a summary.",
              formal:
                "The majority of results will typically be accessible within a 24 to 48-hour timeframe. You may conveniently view these online via our secure patient portal. Should any urgent matters arise, we will contact you directly. Subsequently, the physician will thoroughly review all findings and provide you with a comprehensive summary.",
            },
          },
        ],
      },

      // --- Flow 2: 看体检结果 ---
      {
        id: "review-results",
        titleZh: "看体检结果",
        titleEn: "Reviewing Results",
        description: "去看体检结果，医生解读各项指标并给出建议",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "医生",
            textEn:
              "Mr. Wang, thanks for coming back. I've reviewed all your lab results. The good news is that most things look normal. However, there are a couple of things I want to discuss.",
            textZh:
              "王先生，感谢回来复查。我审核了你所有的化验结果。好消息是大部分都正常。不过有几个地方我想跟你聊一下。",
            commonMistake: {
              wrong: "I reviewed your lab results.",
              correct: "I've reviewed all your lab results.",
              explanation: "用现在完成时强调已完成的动作对现在的影响，比一般过去时更自然。",
            },
            keyPhrases: [
              { en: "lab results", zh: "化验结果" },
              { en: "a couple of things", zh: "几个地方" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Hi Mr. Wang, welcome back. So I've gone through all your labs. Mostly good news — things look pretty normal overall, but there are a couple things I want to go over with you.",
                textZh:
                  "王先生你好，欢迎回来。我看完了所有化验结果。大部分是好消息——总体正常，但有几个地方想跟你聊聊。",
                actionHint: "认真听取结果",
                frequency: "common",
              },
              {
                textEn:
                  "Good to see you again. I've got your results here. Nothing alarming, but there are a few numbers I want to talk about.",
                textZh: "很高兴再见到你。结果在这里。没什么大问题，但有几个数值想跟你说一下。",
                actionHint: "询问具体情况",
                frequency: "common",
              },
            ],
            casualVersion:
              "Mr. Wang, thanks for coming back. I've looked at all your lab results. Good news is, most things look normal. But there are a couple of things I wanna talk about.",
            formalityVariants: {
              casual:
                "Hey Mr. Wang, good to see you again. I checked out your lab results. Mostly good news, everything looks pretty normal. Just a couple of things I wanna go over.",
              standard:
                "Mr. Wang, thanks for coming back. I've reviewed all your lab results. The good news is that most things look normal. However, there are a couple of things I want to discuss.",
              formal:
                "Mr. Wang, thank you for returning for your follow-up. I have thoroughly reviewed your comprehensive laboratory results. I am pleased to inform you that the majority of your indicators appear within normal limits. Nevertheless, there are a few points I would like to bring to your attention.",
            },
          },
          {
            speaker: "you",
            textEn: "Okay, please go ahead. What did you find?",
            textZh: "好的，请说。发现了什么？",
            casualVersion: "Alright, go ahead. What'd you find?",
            commonMistake: {
              wrong: "Okay, please say. What did you find?",
              correct: "Okay, please go ahead. What did you find?",
              explanation: "“请说”直译“Please say”不自然，用“Go ahead”或“Please proceed”更地道。",
            },
            formalityVariants: {
              casual: "Alright, shoot. What'd you find?",
              standard: "Okay, please go ahead. What did you find?",
              formal: "Certainly, Doctor. Please proceed. What were your findings?",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              'Your cholesterol is a bit elevated — total cholesterol is 225, and ideally we want it below 200. Your LDL, which is the "bad" cholesterol, is 140 — a bit high. Also, your vitamin D levels are quite low, which could explain the fatigue you mentioned.',
            textZh:
              '你的胆固醇偏高一点——总胆固醇225，理想情况下我们希望在200以下。你的LDL，也就是"坏"胆固醇，是140——偏高。另外你的维生素D水平很低，这可能解释了你说的疲劳感。',
            commonMistake: {
              wrong: "Your cholesterol is high a bit.",
              correct: "Your cholesterol is a bit elevated.",
              explanation: "'a bit' 作副词修饰形容词时放在形容词前面，或修饰整个动词短语。",
            },
            keyPhrases: [
              { en: "elevated", zh: "偏高的" },
              { en: "LDL", zh: "低密度脂蛋白/坏胆固醇" },
              { en: "vitamin D levels", zh: "维生素D水平" },
              { en: "fatigue", zh: "疲劳" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "So your cholesterol's running a bit high — 225 total, and your LDL — that's the bad one — is at 140. We'd like those numbers lower. Also, your vitamin D is really low, which might explain why you've been so tired.",
                textZh:
                  "你的胆固醇偏高——总共225，LDL也就是坏胆固醇是140。我们希望这些数值低一些。还有维生素D很低，这可能解释了你为什么这么累。",
                actionHint: "询问是否需要用药",
                frequency: "common",
              },
              {
                textEn:
                  "A couple of flags here — cholesterol is higher than we'd like, especially the LDL. And your vitamin D is tanked, which is probably why you're dragging.",
                textZh: "有几个指标——胆固醇比我们期望的高，特别是LDL。维生素D也很低，这大概就是你为什么没精神。",
                actionHint: "了解改善方案",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "So, your cholesterol's a bit high – total's 225, and we'd really like that under 200. Your LDL, that's the...",
            formalityVariants: {
              casual:
                "Okay, so your cholesterol's up a little – 225 total, and we really aim for under 200. Your LDL, that's the...",
              standard:
                "Your cholesterol is a bit elevated — total cholesterol is 225, and ideally we want it below 200. Your LDL, which is the ",
              formal:
                "Upon review, your cholesterol levels indicate a slight elevation. Specifically, your total cholesterol registers at 225, whereas our ideal target is below 200. Regarding your LDL, which is the...",
            },
          },
          {
            speaker: "you",
            textEn: "Do I need to take medication for the cholesterol?",
            textZh: "胆固醇需要吃药吗？",
            commonMistake: {
              wrong: "Does my cholesterol need to eat medicine?",
              correct: "Do I need to take medication for the cholesterol?",
              explanation: "中文“吃药”直译是 eat medicine，英文常用 take medication/pills.",
            },
            casualVersion: "Do I need to take meds for that cholesterol?",
            formalityVariants: {
              casual: "So, do I need meds for the cholesterol?",
              standard: "Do I need to take medication for the cholesterol?",
              formal: "Is pharmacological intervention necessary at this stage for the cholesterol?",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "Not yet — let's try lifestyle changes first. More exercise, reduce fried and processed foods, eat more fish and vegetables. I want to recheck in three months. For the vitamin D, I'm recommending a daily supplement — 2,000 IU. You should start feeling more energetic within a few weeks.",
            textZh:
              "还不用——先试试生活方式调整。多运动，减少油炸和加工食品，多吃鱼和蔬菜。我想三个月后复查。维生素D方面，我建议每天补充2000 IU。几周内你应该会感觉精力更充沛。",
            commonMistake: {
              wrong: "Try lifestyle changes first.",
              correct: "Let's try lifestyle modifications first.",
              explanation: "'Let's' 更自然地表达建议或共同行动，比直接命令或陈述更委婉。",
            },
            keyPhrases: [
              { en: "lifestyle changes", zh: "生活方式调整" },
              { en: "processed foods", zh: "加工食品" },
              { en: "recheck", zh: "复查" },
              { en: "supplement", zh: "补充剂" },
              { en: "IU", zh: "国际单位" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Let's hold off on meds for now and try some lifestyle tweaks first. More exercise, cut back on the fried stuff, eat more fish and veggies. We'll recheck in three months. For the vitamin D, just grab a daily supplement — 2,000 IU.",
                textZh:
                  "先不吃药，试试调整生活方式。多运动，少吃油炸的，多吃鱼和蔬菜。三个月后复查。维生素D的话买个每日补充剂——2000 IU。",
                actionHint: "制定改善计划",
                frequency: "common",
              },
              {
                textEn:
                  "I don't think we need medication yet. Let's start with diet and exercise. More fish, less junk food, get moving a bit more. As for the vitamin D, take a 2,000 IU supplement daily — you'll feel the difference in a few weeks.",
                textZh:
                  "我觉得还不需要吃药。先从饮食和运动开始。多吃鱼，少吃垃圾食品，多动动。维生素D每天补2000 IU——几周后你会感觉到不同。",
                actionHint: "确认复查时间",
                frequency: "common",
              },
            ],
            casualVersion:
              "Nah, not yet. Let's try changing some things first. More exercise, cut back on fried and processed stuff, eat more fish and veggies. Wanna recheck in three months. For your vitamin D, I'm suggesting a daily supplement – 2,000 IU. You should feel more energetic in a few weeks.",
            formalityVariants: {
              casual:
                "No, not right now. Let's start with lifestyle stuff. Get more exercise, cut down on fried and processed foods, eat more fish and veggies. I'll recheck you in three months. For the vitamin D, just a daily 2,000 IU supplement. You should feel better in a few weeks.",
              standard:
                "Not yet — let's try lifestyle changes first. More exercise, reduce fried and processed foods, eat more fish and vegetables. I want to recheck in three months. For the vitamin D, I'm recommending a daily supplement — 2,000 IU. You should start feeling more energetic within a few weeks.",
              formal:
                "Not at this juncture. Our initial approach will involve comprehensive lifestyle modifications. This includes increased physical activity, a reduction in the consumption of fried and processed foods, and an emphasis on incorporating more fish and vegetables into your diet. I plan to re-evaluate these parameters in three months. Regarding your vitamin D deficiency, I am prescribing a daily supplement of 2,000 International Units, and you should anticipate an improvement in energy levels within several weeks.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. Can you email me the full report? I'd like to share it with my doctor back home.",
            textZh: "明白了。能把完整报告发邮件给我吗？我想给国内的医生看。",
            casualVersion: "Got it. Can you email me the full report? Wanna share it with my doctor back home.",
            commonMistake: {
              wrong: "I want to share it with my doctor back home.",
              correct: "I'd like to share it with my doctor back home.",
              explanation: "“I want to”听起来很直接，用“I'd like to”更礼貌和委婉。",
            },
            formalityVariants: {
              casual: "Okay. Could you just email me the full report? I wanna show it to my doctor back home.",
              standard: "Got it. Can you email me the full report? I'd like to share it with my doctor back home.",
              formal:
                "Understood. Would it be possible for you to email me the complete report? I intend to share it with my primary physician in my home country.",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "Of course. I'll have the office send you the complete report with all lab values and my notes. It'll be in PDF format. If your doctor has any questions, they're welcome to contact us directly. Take care, Mr. Wang, and remember — more fish, less fried food!",
            textZh:
              "当然。我让诊所把完整报告和所有化验数据及我的备注发给你。PDF格式的。如果你的医生有问题，欢迎直接联系我们。保重，王先生，记住——多吃鱼，少吃油炸！",
            culturalNote: "“多吃鱼，少吃油炸！”这句结尾带有美国医生常见的轻松幽默和健康生活口号式的鼓励，在中国医生对话中较少见。",
            commonMistake: {
              wrong: "I will let clinic send you...",
              correct: "I'll have the clinic send you...",
              explanation: "'have someone do something' 是让某人做某事的常用表达，更地道。",
            },
            keyPhrases: [
              { en: "complete report", zh: "完整报告" },
              { en: "lab values", zh: "化验数据/指标" },
              { en: "contact us directly", zh: "直接联系我们" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Absolutely — we'll email you the full report with all the numbers and my notes. PDF format. If your doctor back home has questions, they can reach out to us directly. Stay healthy, and remember — watch that cholesterol!",
                textZh:
                  "当然——完整报告连同所有数据和我的备注会发到你邮箱。PDF格式。你国内的医生有问题可以直接联系我们。保重，记得控制胆固醇！",
                actionHint: "确认邮箱地址",
                frequency: "common",
              },
              {
                textEn:
                  "Sure thing. I'll get everything sent to your email — the full labs, my recommendations, the works. Your doctor back home can always call us if they want to discuss anything.",
                textZh:
                  "没问题。我会把所有东西发到你邮箱——全部化验数据、我的建议，一应俱全。你国内的医生想讨论什么都可以联系我们。",
                actionHint: "索取报告",
                frequency: "common",
              },
            ],
            casualVersion:
              "Sure. I'll have the office send you the full report with all your lab values and my notes. It'll be a PDF. If your doctor has questions, they're welcome to call us directly. Take care, Mr. Wang, and remember – more fish, less fried stuff!",
            formalityVariants: {
              casual:
                "Yep. The office will email you the full report, with all your labs and my notes. It'll be a PDF. And if your doctor has questions, tell 'em to call us. Take care, Mr. Wang, remember – more fish, less fried food!",
              standard:
                "Of course. I'll have the office send you the complete report with all lab values and my notes. It'll be in PDF format. If your doctor has any questions, they're welcome to contact us directly. Take care, Mr. Wang, and remember — more fish, less fried food!",
              formal:
                "Certainly. I will arrange for our administrative staff to transmit the complete report to you, encompassing all laboratory values and my comprehensive notes. It will be provided in a standard PDF format. Should your physician require any clarification or further information, they are encouraged to contact our facility directly. Please take good care, Mr. Wang, and do remember the dietary recommendations: increased fish consumption and reduced intake of fried provisions.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll do my best. Thank you for the thorough checkup, Doctor!",
            textZh: "我会尽力的。谢谢医生这么仔细的检查！",
            casualVersion: "Will do! Thanks for everything, Doc!",
            commonMistake: {
              wrong: "Thank you for so careful checkup, Doctor!",
              correct: "Thank you for the thorough checkup, Doctor!",
              explanation: "“careful”不用于形容体检，应使用“thorough”（仔细的，全面的）更自然。",
            },
            formalityVariants: {
              casual: "I'll definitely try! Thanks for the checkup, Doc!",
              standard: "I'll do my best. Thank you for the thorough checkup, Doctor!",
              formal:
                "I shall certainly endeavor to adhere to your recommendations. Thank you profoundly for such a comprehensive and meticulous examination, Doctor.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 儿科/孩子看病 ====================
  {
    id: "medical-11",
    category: "medical",
    titleZh: "带孩子看病",
    titleEn: "Pediatric Visit",
    description: "在国外带孩子看医生，描述孩子的症状、与儿科医生沟通用药和护理事项",
    otherRole: "儿科医生/护士",
    otherRoleIcon: "baby",
    flows: [
      // --- Flow 1: 孩子发烧腹泻 ---
      {
        id: "child-fever",
        titleZh: "孩子发烧腹泻",
        titleEn: "Child with Fever & Diarrhea",
        description: "孩子突然发烧拉肚子，带去看医生",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, my four-year-old daughter has had a fever and diarrhea since last night. I'm really worried.",
            textZh: "你好，我四岁的女儿从昨晚开始发烧和拉肚子。我非常担心。",
            culturalNote:
              "在美国，儿童看病通常去 pediatrician（儿科医生）的诊所，而不是综合医院。紧急情况可以去 urgent care 或 ER。",
            casualVersion: "Hey, my four-year-old's had a fever and diarrhea since last night. Super worried.",
            commonMistake: {
              wrong: "My daughter has fever and diarrhea.",
              correct: "My daughter has had a fever and diarrhea.",
              explanation: "中文里“有”可以直接说，英文发烧要加不定冠词'a'，且持续状态用完成时。",
            },
            formalityVariants: {
              casual: "Hey, my four-year-old's had a fever and diarrhea since last night. I'm super worried.",
              standard:
                "Hi, my four-year-old daughter has had a fever and diarrhea since last night. I'm really worried.",
              formal:
                "Good morning/afternoon. My four-year-old daughter has been experiencing a fever and diarrhea since last evening, and I'm quite concerned.",
            },
          },
          {
            speaker: "them",
            role: "儿科医生",
            textEn:
              "I understand your concern. Let's take a look. How high has the fever been, and how many times has she had diarrhea?",
            textZh: "理解您的担心。我来看看。发烧最高多少度？拉了几次肚子？",
            keyPhrases: [
              { en: "how high has the fever been", zh: "发烧最高多少度" },
              { en: "how many times", zh: "多少次" },
            ],
            responseTip: "尽量提供具体数字：体温、拉肚子次数、持续时间",
            alternativeExpressions: [
              {
                textEn:
                  "I totally get it — that's scary. Let me check her out. How high has the fever gotten? And roughly how many times has she had diarrhea?",
                textZh: "完全理解——这确实吓人。让我看看她。发烧最高多少度？大概拉了几次肚子？",
                actionHint: "提供具体数字",
                frequency: "common",
              },
              {
                textEn:
                  "Don't worry, we'll figure this out. First, tell me — what's the highest her temp has been? And how frequent is the diarrhea?",
                textZh: "别担心，我们来搞清楚。先告诉我——体温最高多少？拉肚子频繁吗？",
                actionHint: "描述孩子的症状",
                frequency: "common",
              },
            ],
            casualVersion:
              "Understand your concern. Let's take a look. How high's the fever been, and how many times has she pooped?",
            formalityVariants: {
              casual:
                "Understand your concern. Let's take a look. How high's the fever been, and how many times has she had diarrhea?",
              standard:
                "I understand your concern. Let's take a look. How high has the fever been, and how many times has she had diarrhea?",
              formal:
                "I fully comprehend your apprehension. We'll proceed with an examination. Could you please specify the peak temperature of the fever and the frequency of the diarrhea episodes?",
            },
          },
          {
            speaker: "you",
            textEn:
              "The fever was 39 degrees Celsius — about 102 Fahrenheit. She's had diarrhea about five or six times. She's also been vomiting and won't eat anything.",
            textZh: "发烧39摄氏度——大概华氏102度。拉了五六次肚子。她还呕吐，什么都不肯吃。",
            vocabNotes: {
              vomiting: {
                meaningInContext: "在这句话里表示：呕吐。口语中也说 throwing up",
                similarUsage: "类似用法：She's been throwing up all morning.",
              },
            },
            casualVersion:
              "Fever was 39 Celsius, 'bout 102 Fahrenheit. She's pooped five or six times. Also been throwing up, won't eat a thing.",
            commonMistake: {
              wrong: "She has vomited and doesn't want to eat anything.",
              correct: "She's also been vomiting and won't eat anything.",
              explanation: '描述持续性呕吐用完成进行时，"won\'t eat" 比 "doesn\'t want to eat" 更自然，表达拒绝。',
            },
            formalityVariants: {
              casual:
                "Fever was 39 Celsius, 'bout 102 Fahrenheit. She's had diarrhea five or six times. She's also been throwing up and won't eat a thing.",
              standard:
                "The fever was 39 degrees Celsius — about 102 Fahrenheit. She's had diarrhea about five or six times. She's also been vomiting and won't eat anything.",
              formal:
                "Her temperature registered 39 degrees Celsius, which is approximately 102 degrees Fahrenheit. She has experienced diarrheal episodes approximately five or six times. Additionally, she has been vomiting and is refusing all oral intake.",
            },
          },
          {
            speaker: "them",
            role: "儿科医生",
            textEn:
              "Has she been drinking fluids? The biggest risk with diarrhea and vomiting in young children is dehydration. Let me check her for signs of dehydration — I'll look at her mouth, skin, and eyes.",
            textZh:
              "她有喝水吗？小孩子拉肚子和呕吐最大的风险是脱水。让我检查一下脱水的迹象——我看看她的嘴巴、皮肤和眼睛。",
            keyPhrases: [
              { en: "fluids", zh: "水分/液体" },
              { en: "dehydration", zh: "脱水" },
              { en: "signs of dehydration", zh: "脱水迹象" },
            ],
            alternativeExpressions: [
              {
                textEn: "Is she keeping any liquids down? Dehydration is our main concern with little ones.",
                textZh: "她喝水能不吐出来吗？脱水是小孩子最大的隐患。",
                actionHint: "回答孩子的饮水情况",
                frequency: "common",
              },
            ],
            casualVersion:
              "She been drinking? Biggest risk with diarrhea and throwing up in little kids is dehydration. Let me check her for signs — mouth, skin, eyes.",
            formalityVariants: {
              casual:
                "She been drinking fluids? Biggest risk with diarrhea and throwing up in little kids is dehydration. Let me check her for signs — mouth, skin, eyes.",
              standard:
                "Has she been drinking fluids? The biggest risk with diarrhea and vomiting in young children is dehydration. Let me check her for signs of dehydration — I'll look at her mouth, skin, and eyes.",
              formal:
                "Has she been ingesting any fluids? The primary concern with pediatric diarrhea and emesis is the potential for dehydration. I shall now assess her for clinical indicators of dehydration, specifically examining her oral mucosa, skin turgor, and ocular appearance.",
            },
          },
          {
            speaker: "you",
            textEn: "She's had a little water but keeps throwing it up. Is there anything I can give her?",
            textZh: "她喝了一点水但一直吐出来。有什么可以给她吃的吗？",
            casualVersion: "She had a little water, but keeps throwing it up. Can I give her anything?",
            commonMistake: {
              wrong: "What can I give her?",
              correct: "Is there anything I can give her?",
              explanation: "“有什么我能给她吃的吗？” 比 “我能给她什么？” 更自然、更礼貌。",
            },
            formalityVariants: {
              casual: "She had a little water, but keeps throwing it up. Can I give her anything?",
              standard: "She's had a little water but keeps throwing it up. Is there anything I can give her?",
              formal:
                "She has consumed a small amount of water, but is continuously regurgitating it. Are there any suitable oral interventions I might administer?",
            },
          },
          {
            speaker: "them",
            role: "儿科医生",
            textEn:
              "I'm going to recommend Pedialyte — it's an oral rehydration solution made for children. Give her small sips every few minutes rather than big gulps. For the fever, you can use children's Tylenol — that's acetaminophen. I'll write down the correct dosage based on her weight.",
            textZh:
              "我推荐 Pedialyte——这是儿童口服补液盐。每隔几分钟给她小口喝，不要大口灌。发烧可以用儿童版泰诺——就是对乙酰氨基酚。我会根据她的体重写下正确的剂量。",
            keyPhrases: [
              { en: "oral rehydration solution", zh: "口服补液盐" },
              { en: "small sips", zh: "小口小口喝" },
              { en: "gulps", zh: "大口灌" },
              { en: "dosage", zh: "剂量" },
              { en: "based on her weight", zh: "根据她的体重" },
            ],
            vocabNotes: {
              Pedialyte: {
                meaningInContext: "在这句话里指一种美国常见的儿童电解质补液饮料，药店和超市都能买到",
                similarUsage: "类似用法：Give the child Pedialyte to prevent dehydration.",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Get her some Pedialyte — it's basically electrolyte water for kids. Little sips, not big drinks. For the fever, children's Tylenol is fine. I'll write down exactly how much to give based on her weight.",
                textZh:
                  "给她买 Pedialyte——基本就是儿童电解质水。小口小口喝，不要大口灌。发烧用儿童泰诺就行。我按她的体重写下具体剂量。",
                actionHint: "确认用药剂量",
                frequency: "common",
              },
              {
                textEn:
                  "Here's what I want you to do — pick up some Pedialyte and have her take tiny sips every couple minutes. And for the fever, go with children's Tylenol. I'll figure out the right dose for her.",
                textZh: "我建议这样——去买 Pedialyte，每隔几分钟让她喝一小口。发烧用儿童泰诺。我来算一下适合她的剂量。",
                actionHint: "记录用药方法",
                frequency: "common",
              },
            ],
            casualVersion:
              "Gonna recommend Pedialyte — it's an oral rehydration solution for kids. Small sips every few minutes, not big gulps. For fever, you can use children's Tylenol, that's acetaminophen. I'll write down the right dose based on her weight.",
            culturalNote: "美国医生会推荐具体品牌药，与中国不同",
            formalityVariants: {
              casual:
                "I'm gonna recommend Pedialyte — it's an oral rehydration solution for kids. Give her small sips every few minutes, not big gulps. For the fever, you can use children's Tylenol, that's acetaminophen. I'll write down the right dose based on her weight.",
              standard:
                "I'm going to recommend Pedialyte — it's an oral rehydration solution made for children. Give her small sips every few minutes rather than big gulps. For the fever, you can use children's Tylenol — that's acetaminophen. I'll write down the correct dosage based on her weight.",
              formal:
                "I would advise the use of Pedialyte, which is an oral rehydration solution specifically formulated for pediatric patients. Administer small, frequent sips rather than large quantities. Regarding the pyrexia, children's Tylenol, which is acetaminophen, is appropriate. I will provide the precise dosage, calculated according to her weight.",
            },
          },
          {
            speaker: "you",
            textEn: "Is it okay to use ibuprofen instead? I have some children's Advil at home.",
            textZh: "可以用布洛芬代替吗？我家里有儿童版的 Advil。",
            casualVersion: "Can I use ibuprofen instead? Got some children's Advil at home.",
            commonMistake: {
              wrong: "Can I use ibuprofen to replace?",
              correct: "Can I use ibuprofen instead?",
              explanation: '英文中替代药品用 "instead" 或 "in place of" 更自然，"replace" 通常指替换物品。',
            },
            formalityVariants: {
              casual: "Can I use ibuprofen instead? I've got some children's Advil at home.",
              standard: "Is it okay to use ibuprofen instead? I have some children's Advil at home.",
              formal:
                "Would ibuprofen be an acceptable alternative? I currently possess children's Advil at my residence.",
            },
          },
          {
            speaker: "them",
            role: "儿科医生",
            textEn:
              "With the vomiting and diarrhea, I'd stick with Tylenol for now. Ibuprofen can irritate the stomach. Also, don't give her any anti-diarrhea medicine — for children this young, we let the body flush out whatever's causing the problem. If the diarrhea continues for more than three days or you see blood in her stool, bring her back immediately.",
            textZh:
              "有呕吐和腹泻的情况下，我建议先用泰诺。布洛芬可能刺激胃。另外，不要给她吃止泻药——这么小的孩子，我们让身体自己把病因排出来。如果拉肚子持续超过三天或者大便带血，立刻带她回来。",
            keyPhrases: [
              { en: "stick with", zh: "坚持用/先用" },
              { en: "irritate the stomach", zh: "刺激胃" },
              { en: "anti-diarrhea medicine", zh: "止泻药" },
              { en: "flush out", zh: "排出" },
              { en: "blood in her stool", zh: "大便带血" },
            ],
            culturalMeaning:
              "在西方医学中，儿童轻度腹泻一般不建议用止泻药，理念是让身体自然排毒。这和中国家长习惯立即用药的思维不同。",
            alternativeExpressions: [
              {
                textEn:
                  "I'd go with Tylenol while her tummy's upset — ibuprofen can be rough on the stomach. And don't give her any anti-diarrhea stuff. At this age, we let it run its course. But if it lasts more than three days or there's blood in her poop, bring her right back.",
                textZh:
                  "她肚子不舒服的话先用泰诺——布洛芬可能伤胃。也不要给她吃止泻药。这个年纪我们让身体自己恢复。但如果超过三天或大便带血，立刻带回来。",
                actionHint: "询问饮食建议",
                frequency: "common",
              },
              {
                textEn:
                  "Stick with the Tylenol for now — Advil might upset her stomach more. And no anti-diarrhea meds for kids this young. Her body needs to flush whatever's causing this. If you see blood or it goes past three days, come back.",
                textZh:
                  "先用泰诺——Advil可能让她胃更不舒服。这么小的孩子不要吃止泻药。身体需要把病因排出来。如果看到血或超过三天，回来看。",
                actionHint: "了解注意事项",
                frequency: "common",
              },
            ],
            casualVersion:
              "With the throwing up and diarrhea, I'd stick with Tylenol for now. Ibuprofen can bug her stomach. Also, don't give her any anti-diarrhea stuff — for kids this young, we just let their body flush out whatever's causing it. If the diarrhea keeps going more than three days or you see blood in her poop, bring her back ASAP.",
            culturalNote: "美国不建议儿童使用止泻药，与中国观念不同",
            formalityVariants: {
              casual:
                "With the throwing up and diarrhea, I'd stick with Tylenol for now. Ibuprofen can bug her stomach. Don't give her any anti-diarrhea stuff either — for kids this young, we just let their body flush out whatever's causing it. If the diarrhea keeps going more than three days or you see blood in her poop, bring her back ASAP.",
              standard:
                "With the vomiting and diarrhea, I'd stick with Tylenol for now. Ibuprofen can irritate the stomach. Also, don't give her any anti-diarrhea medicine — for children this young, we let the body flush out whatever's causing the problem. If the diarrhea continues for more than three days or you see blood in her stool, bring her back immediately.",
              formal:
                "Given the concurrent symptoms of emesis and diarrhea, I recommend adhering to Tylenol at this time, as ibuprofen may exacerbate gastric irritation. Furthermore, please refrain from administering any anti-diarrheal agents; in pediatric patients of this age, it is preferable for the body to naturally expel the causative pathogen. Should the diarrhea persist beyond three days or if you observe hematochezia, please return with her for immediate re-evaluation.",
            },
          },
          {
            speaker: "you",
            textEn: "Understood. What about her diet? Should I keep her on a special diet?",
            textZh: "明白了。饮食方面呢？需要给她吃什么特殊的食物吗？",
            casualVersion: "Got it. What 'bout her diet? Special diet necessary?",
            commonMistake: {
              wrong: "Understood. Her diet what?",
              correct: "Understood. What about her diet?",
              explanation: '“她的饮食呢？” 直译过来不自然，应使用 "What about her diet?" 或 "Regarding her diet?"',
            },
            formalityVariants: {
              casual: "Got it. What 'bout her diet? Does she need a special diet?",
              standard: "Understood. What about her diet? Should I keep her on a special diet?",
              formal: "I comprehend. Regarding her dietary regimen, is a specialized diet indicated?",
            },
          },
          {
            speaker: "them",
            role: "儿科医生",
            textEn:
              "Once she can keep fluids down, start with bland foods — plain rice, crackers, bananas, toast. We call it the BRAT diet: Bananas, Rice, Applesauce, Toast. Avoid dairy and sugary drinks for a few days. She should bounce back in two to three days.",
            textZh:
              "等她能喝水不吐了，从清淡食物开始——白米饭、饼干、香蕉、吐司。我们叫它 BRAT 饮食：香蕉、米饭、苹果酱、吐司。几天内避免乳制品和含糖饮料。她应该两三天就能恢复了。",
            keyPhrases: [
              { en: "bland foods", zh: "清淡食物" },
              { en: "BRAT diet", zh: "BRAT饮食法" },
              { en: "keep fluids down", zh: "喝水不吐" },
              { en: "bounce back", zh: "恢复" },
              { en: "avoid dairy", zh: "避免乳制品" },
            ],
            vocabNotes: {
              "BRAT diet": {
                meaningInContext: "BRAT 是 Bananas, Rice, Applesauce, Toast 的缩写，是美国儿科常推荐的腹泻恢复期饮食",
                similarUsage: "类似用法：The doctor put him on the BRAT diet after his stomach bug.",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "When she's keeping liquids down, ease her back in with simple stuff — rice, bananas, crackers, toast. We call it the BRAT diet. Skip milk and anything sugary for a few days. She should be back to normal in two or three days.",
                textZh:
                  "等她喝水不吐了，慢慢给她吃简单的东西——米饭、香蕉、饼干、吐司。叫BRAT饮食。几天内不要喝奶和含糖饮料。两三天应该就恢复了。",
                actionHint: "记住BRAT饮食",
                frequency: "common",
              },
              {
                textEn:
                  "Start slow once she can hold fluids down — plain rice, toast, bananas. Nothing heavy. Avoid dairy and sugary drinks. Most kids bounce back within a couple days.",
                textZh:
                  "等她能喝水不吐了再慢慢吃——白米饭、吐司、香蕉。别吃油腻的。避免乳制品和甜饮料。大多数孩子几天就恢复了。",
                actionHint: "了解恢复时间",
                frequency: "common",
              },
            ],
            casualVersion:
              "Once she can keep stuff down, start with bland foods — plain rice, crackers, bananas, toast. It's called the BRAT diet: Bananas, Rice, Applesauce, Toast. No dairy or sugary drinks for a few days. She should be fine in two, three days.",
            culturalNote: "BRAT饮食是美国儿科医生常用的建议，中国较少提及",
            formalityVariants: {
              casual:
                "Once she can keep stuff down, start with bland foods — plain rice, crackers, bananas, toast. It's called the BRAT diet: Bananas, Rice, Applesauce, Toast. No dairy or sugary drinks for a few days. She should be fine in two, three days.",
              standard:
                "Once she can keep fluids down, start with bland foods — plain rice, crackers, bananas, toast. We call it the BRAT diet: Bananas, Rice, Applesauce, Toast. Avoid dairy and sugary drinks for a few days. She should bounce back in two to three days.",
              formal:
                "Once she demonstrates tolerance for fluid intake, initiate a regimen of bland foods, such as plain rice, crackers, bananas, and toast. This is commonly referred to as the BRAT diet, an acronym for Bananas, Rice, Applesauce, and Toast. It is advisable to abstain from dairy products and sweetened beverages for several days. We anticipate her recovery within two to three days.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you so much, Doctor. One more thing — should I keep her home from daycare?",
            textZh: "非常感谢医生。还有一个问题——需要让她在家不去日托吗？",
            casualVersion: "Thanks, Doc. One more thing — should I keep her home from daycare?",
            commonMistake: {
              wrong: "Thank you so much, Doctor. Also one thing...",
              correct: "Thank you so much, Doctor. One more thing...",
              explanation: '引入新问题用 "One more thing" 更地道，"Also one thing" 听起来不自然。',
            },
            formalityVariants: {
              casual: "Thanks, Doc. One more thing — should I keep her home from daycare?",
              standard: "Thank you so much, Doctor. One more thing — should I keep her home from daycare?",
              formal:
                "I'm very grateful for your assistance, Doctor. One final query, please — is it necessary to keep her home from daycare?",
            },
          },
          {
            speaker: "them",
            role: "儿科医生",
            textEn:
              "Yes, keep her home until she's been fever-free for 24 hours without medication and the diarrhea has stopped. Most daycares have the same policy. I'll give you a note for the daycare if you need one.",
            textZh:
              "是的，让她在家直到不用药的情况下退烧24小时且不再拉肚子。大多数日托中心都有同样的规定。如果需要我可以给你开一张日托中心的证明。",
            keyPhrases: [
              { en: "fever-free for 24 hours", zh: "退烧24小时" },
              { en: "without medication", zh: "不用药的情况下" },
              { en: "a note", zh: "证明/请假条" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep — no daycare until she's had no fever for a full day without meds, and the diarrhea's stopped. That's pretty standard. I can write you a note if the daycare needs one.",
                textZh: "对——不用药退烧满一天、不再拉肚子之后才能去日托。这是通用规定。如果日托需要我可以开证明。",
                actionHint: "索取证明",
                frequency: "common",
              },
              {
                textEn:
                  "Keep her out of daycare until the fever's been gone for 24 hours — no Tylenol helping — and no more diarrhea. Most places have the same rule. Happy to give you a doctor's note.",
                textZh:
                  "退烧24小时——不是靠泰诺退的——而且不再拉肚子之后才能回日托。大多数地方都是这个规定。我可以给你开医生证明。",
                actionHint: "确认返园条件",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep, keep her home until she's been fever-free for 24 hours without meds and the diarrhea's stopped. Most daycares got the same policy. I'll give you a note for 'em if you need one.",
            culturalNote: "美国日托一般有严格的生病隔离政策",
            formalityVariants: {
              casual:
                "Yep, keep her home until she's been fever-free for 24 hours without meds and the diarrhea's stopped. Most daycares got the same policy. I'll give you a note for 'em if you need one.",
              standard:
                "Yes, keep her home until she's been fever-free for 24 hours without medication and the diarrhea has stopped. Most daycares have the same policy. I'll give you a note for the daycare if you need one.",
              formal:
                "Yes, it is imperative to keep her home until she has been afebrile for a full 24-hour period without antipyretic intervention and the diarrheal episodes have resolved. Most childcare facilities enforce a similar policy. I can provide a note for the daycare, should it be required.",
            },
          },
        ],
      },

      // --- Flow 2: 孩子过敏反应 ---
      {
        id: "child-allergy",
        titleZh: "孩子过敏反应",
        titleEn: "Child Allergic Reaction",
        description: "孩子突然出现过敏反应，去诊所或急诊就医",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn:
              "Doctor, my son just ate some peanuts and his face is swelling up. He's also got red bumps all over his arms.",
            textZh: "医生，我儿子刚吃了一些花生，脸肿起来了。胳膊上还起了好多红疙瘩。",
          },
          {
            speaker: "them",
            role: "儿科医生",
            textEn:
              "This looks like an allergic reaction. Is he having any trouble breathing? Any wheezing or tightness in his chest?",
            textZh: "看起来是过敏反应。他呼吸有困难吗？有喘鸣或胸闷吗？",
            keyPhrases: [
              { en: "allergic reaction", zh: "过敏反应" },
              { en: "trouble breathing", zh: "呼吸困难" },
              { en: "wheezing", zh: "喘鸣" },
              { en: "tightness in his chest", zh: "胸闷" },
            ],
            responseTip: "过敏反应要注意呼吸问题，这是最危险的症状",
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, that looks like an allergic reaction. The big question — is he breathing OK? Any wheezing or does his chest feel tight?",
                textZh: "嗯，看起来是过敏反应。关键问题——他呼吸正常吗？有喘息或胸闷吗？",
                actionHint: "观察孩子呼吸",
                frequency: "common",
              },
              {
                textEn:
                  "OK, I can see this is an allergic response. Can he breathe alright? No funny sounds when he breathes, no throat tightness?",
                textZh: "好的，我看得出是过敏反应。他能正常呼吸吗？呼吸有没有异响？喉咙发紧吗？",
                actionHint: "确认呼吸状况",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "His breathing seems okay for now, but the swelling is getting worse. This has never happened before — I didn't know he was allergic to peanuts.",
            textZh: "他现在呼吸还可以，但是肿胀越来越严重了。以前从来没有过——我不知道他对花生过敏。",
          },
          {
            speaker: "them",
            role: "儿科医生",
            textEn:
              "We need to act quickly. I'm going to give him a dose of epinephrine and an antihistamine — Benadryl. The epinephrine will stop the reaction from getting worse. Nurse, please prepare a 0.15 milligram EpiPen.",
            textZh:
              "我们需要快速处理。我给他打一针肾上腺素和一种抗组胺药——苯海拉明。肾上腺素能阻止反应恶化。护士，请准备0.15毫克的EpiPen。",
            keyPhrases: [
              { en: "epinephrine", zh: "肾上腺素" },
              { en: "antihistamine", zh: "抗组胺药" },
              { en: "EpiPen", zh: "肾上腺素自动注射器" },
              { en: "dose", zh: "剂量" },
            ],
            vocabNotes: {
              EpiPen: {
                meaningInContext:
                  "EpiPen 是一种可以自己打的肾上腺素注射笔，用于严重过敏反应的紧急处理。在美国很多过敏体质的人随身携带",
                similarUsage: "类似用法：Always carry your EpiPen if you have a severe allergy.",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "OK, we need to move fast. I'm giving him epinephrine and Benadryl right now. The epi will keep the reaction from getting worse. Nurse — EpiPen, 0.15 milligrams, please.",
                textZh:
                  "好，我们要快速行动。我现在给他打肾上腺素和苯海拉明。肾上腺素能阻止反应恶化。护士——EpiPen，0.15毫克。",
                actionHint: "配合医生治疗",
                frequency: "common",
              },
              {
                textEn:
                  "Let's get on this right away. He needs epinephrine to stop the reaction, plus an antihistamine. I'm having the nurse prep an EpiPen now.",
                textZh: "我们马上处理。他需要肾上腺素阻止反应，加上抗组胺药。我让护士准备EpiPen。",
                actionHint: "保持冷静",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Is he going to be okay? Should I be worried about it happening again?",
            textZh: "他会没事吗？我需要担心再次发生吗？",
          },
          {
            speaker: "them",
            role: "儿科医生",
            textEn:
              "He's responding well to the medication — the swelling is going down. But yes, peanut allergies are usually lifelong. I'm prescribing an EpiPen for you to carry at all times. You'll also need to inform his school or daycare. I strongly recommend seeing an allergist for proper testing.",
            textZh:
              "他对药物反应很好——肿胀在消退。但是是的，花生过敏通常是终身的。我给你开一支EpiPen随身携带。你还需要通知他的学校或日托。我强烈建议去看过敏专科医生做正式检测。",
            keyPhrases: [
              { en: "responding well", zh: "反应良好" },
              { en: "going down", zh: "消退" },
              { en: "lifelong", zh: "终身的" },
              { en: "carry at all times", zh: "随身携带" },
              { en: "allergist", zh: "过敏专科医生" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Good news — the medicine is working. But peanut allergies tend to be permanent. We need to make a long-term plan.",
                textZh: "好消息——药起作用了。但花生过敏通常是永久的。我们需要制定长期计划。",
                actionHint: "询问具体的长期管理方案",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How do I use the EpiPen? I've never used one before.",
            textZh: "EpiPen 怎么用？我以前从来没用过。",
          },
          {
            speaker: "them",
            role: "儿科医生",
            textEn:
              "It's designed to be simple. Remove the blue safety cap, press the orange tip firmly against his outer thigh — it works through clothing. Hold it for ten seconds. The needle does everything automatically. I'll have the nurse demonstrate with a trainer pen. Make sure everyone who cares for your son knows how to use it.",
            textZh:
              "它设计得很简单。取下蓝色安全帽，把橙色端用力压在他的大腿外侧——隔着衣服也可以。按住十秒。针头会自动完成一切。我让护士用训练笔给你演示。确保所有照顾你儿子的人都会用。",
            keyPhrases: [
              { en: "safety cap", zh: "安全帽/保险盖" },
              { en: "outer thigh", zh: "大腿外侧" },
              { en: "works through clothing", zh: "隔着衣服也可以" },
              { en: "trainer pen", zh: "训练用笔" },
              { en: "demonstrate", zh: "演示" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It's super easy — pop off the blue cap, jam the orange end into his outer thigh — even through his pants — and hold for ten seconds. That's it. The nurse will show you with a practice one. Make sure anyone who watches your kid knows how to do it.",
                textZh:
                  "超级简单——拔掉蓝色帽，把橙色端用力压到大腿外侧——隔着裤子也行——按住十秒。就这样。护士会用练习笔演示。确保所有照顾孩子的人都会用。",
                actionHint: "练习使用方法",
                frequency: "common",
              },
              {
                textEn:
                  "Don't worry, it's foolproof. Blue cap off, orange tip into the thigh, hold ten seconds. Works right through clothing. We'll have you practice with a dummy pen before you leave.",
                textZh:
                  "别担心，傻瓜式操作。蓝帽拔掉，橙色端扎大腿，按住十秒。隔着衣服也行。走之前我们让你用假笔练练。",
                actionHint: "认真练习",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What foods do I need to watch out for? Is it just peanuts or other nuts too?",
            textZh: "哪些食物需要注意？只是花生还是其他坚果也要小心？",
          },
          {
            speaker: "them",
            role: "儿科医生",
            textEn:
              "Peanuts are actually legumes, not tree nuts, but some children with peanut allergies also react to tree nuts like almonds and cashews. Until we do a full panel test, avoid all nuts to be safe. Also watch out for hidden peanuts in sauces, baked goods, and Asian food — many dishes use peanut oil or crushed peanuts.",
            textZh:
              "花生实际上是豆科植物，不是坚果，但有些花生过敏的孩子也会对杏仁、腰果等坚果过敏。在做完全面检测之前，为安全起见避免所有坚果。也要注意酱料、烘焙食品和亚洲菜里隐藏的花生——很多菜用花生油或碎花生。",
            keyPhrases: [
              { en: "legumes", zh: "豆科植物" },
              { en: "tree nuts", zh: "树坚果" },
              { en: "full panel test", zh: "全面检测" },
              { en: "hidden peanuts", zh: "隐藏的花生" },
              { en: "peanut oil", zh: "花生油" },
            ],
            localVariants: {
              "en-US": "Watch out for hidden peanuts in sauces and baked goods.",
              "en-GB": "Be mindful of hidden peanut ingredients — UK food labelling is quite strict about allergens.",
              "en-AU": "Heads up — peanut can be in heaps of things. Always check the label.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Fun fact — peanuts are technically legumes, not nuts. But kids with peanut allergies sometimes react to tree nuts too, like almonds or cashews. Until we test properly, avoid all nuts. And watch for hidden peanuts — lots of sauces and baked goods have them.",
                textZh:
                  "有个冷知识——花生其实是豆科植物，不是坚果。但花生过敏的孩子有时也对杏仁、腰果等坚果过敏。在正式检测之前，所有坚果都避免。还要注意隐藏的花生——很多酱料和烘焙品里都有。",
                actionHint: "记住需要避免的食物",
                frequency: "common",
              },
              {
                textEn:
                  "So peanuts are actually a legume, but some peanut-allergic kids also react to tree nuts. Play it safe — no nuts at all until we do a full allergy panel. And be careful with sauces and Asian food — peanut oil is everywhere.",
                textZh:
                  "花生实际上是豆类，但有些花生过敏的孩子对坚果也会反应。保险起见——在做完全面过敏检测之前不要吃任何坚果。注意酱料和亚洲菜——花生油到处都是。",
                actionHint: "了解交叉过敏",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "This is a lot to take in. Can you give me all of this in writing? And is there a Chinese-speaking allergist you could refer me to?",
            textZh: "信息量好大。能把这些都写给我吗？还有，能推荐一位会说中文的过敏专科医生吗？",
            culturalNote: "在美国看病时，完全可以要求把医嘱写下来。也可以要求翻译服务。很多医院有中文翻译。",
          },
          {
            speaker: "them",
            role: "儿科医生",
            textEn:
              "Absolutely. I'll print out detailed instructions in both English and Chinese. We also have a handout specifically about peanut allergies in children. And yes, Dr. Chen at the allergy clinic on Park Avenue speaks Mandarin. I'll make the referral. In the meantime, I want to observe your son for another two hours to make sure the reaction doesn't come back.",
            textZh:
              "当然。我会打印英文和中文的详细说明。我们还有一份专门关于儿童花生过敏的资料。对了，Park Avenue 过敏诊所的陈医生会说普通话。我会帮你转介。同时，我想再观察你儿子两个小时，确保反应不会复发。",
            keyPhrases: [
              { en: "detailed instructions", zh: "详细说明" },
              { en: "handout", zh: "资料/宣传单" },
              { en: "referral", zh: "转介/转诊" },
              { en: "observe", zh: "观察" },
              { en: "come back", zh: "复发" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Of course — I'll print everything out in English and Chinese for you. We also have a pamphlet specifically about peanut allergies. And good news — Dr. Chen at the allergy clinic on Park Avenue speaks Mandarin. I'll set up the referral. For now, we want to keep an eye on your son for another two hours.",
                textZh:
                  "当然——英文和中文的都会打印给你。我们还有一份花生过敏的专门资料。好消息——Park Avenue过敏诊所的陈医生会说中文。我帮你转诊。现在我们要再观察你儿子两个小时。",
                actionHint: "在院观察",
                frequency: "common",
              },
              {
                textEn:
                  "Sure, we'll get you written instructions in both languages. And actually, there's a great allergist — Dr. Chen — who speaks Mandarin. I'll refer you. But first, we need to watch your boy for a couple more hours to be safe.",
                textZh:
                  "好的，两种语言的说明都会给你。有一位很好的过敏专科医生陈医生会说中文。我帮你转介。但先要再观察你儿子两个小时确保安全。",
                actionHint: "等候观察",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 中医/替代疗法咨询 ====================
  {
    id: "medical-12",
    category: "medical",
    titleZh: "替代疗法咨询",
    titleEn: "Alternative Medicine Consultation",
    description: "在国外想找中医、针灸或其他替代疗法时的沟通场景",
    otherRole: "针灸师/中医/前台",
    otherRoleIcon: "leaf",
    flows: [
      // --- Flow 1: 预约针灸 ---
      {
        id: "acupuncture",
        titleZh: "预约针灸",
        titleEn: "Booking Acupuncture",
        description: "在国外找针灸诊所，预约和第一次就诊",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi, I'd like to make an appointment for acupuncture. I've been having chronic back pain and a friend recommended your clinic.",
            textZh: "你好，我想预约针灸。我长期腰疼，一个朋友推荐了你们的诊所。",
            casualVersion:
              "Hey, wanna book an acupuncture session. Got this chronic back pain, and a friend told me to check you guys out.",
            culturalNote: "美国办理预约时可以直接说明目的，无需过多寒暄。",
            commonMistake: {
              wrong: "I want to make an appointment for acupuncture.",
              correct: "I'd like to make an appointment for acupuncture.",
              explanation: '"I want" 在英语中听起来直接甚至有些生硬，"I\'d like" 更礼貌客气。',
            },
            formalityVariants: {
              casual: "Hey, wanna book acupuncture. Been having back pain, friend recommended you guys.",
              standard:
                "Hi, I'd like to make an appointment for acupuncture. I've been having chronic back pain and a friend recommended your clinic.",
              formal:
                "Good morning/afternoon, I am calling to inquire about scheduling an appointment for acupuncture treatment. I understand your clinic specializes in chronic pain management, and I was referred by a mutual acquaintance regarding persistent back issues.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Welcome! Have you had acupuncture before? Our first visit includes a full consultation and treatment. It's usually about 90 minutes.",
            textZh: "欢迎！你以前做过针灸吗？我们的初诊包括完整的咨询和治疗。通常大约90分钟。",
            keyPhrases: [
              { en: "first visit", zh: "初诊" },
              { en: "consultation", zh: "咨询/问诊" },
              { en: "treatment", zh: "治疗" },
            ],
            alternativeExpressions: [
              {
                textEn: "Great! Is this your first time? We'll need a longer session for the initial assessment.",
                textZh: "好的！第一次来吗？初次评估需要更长的时间。",
                actionHint: "确认是否第一次",
                frequency: "common",
              },
            ],
            casualVersion:
              "Hey there! Ever had acupuncture? First time here, we do a whole consult and treatment. Takes about 90 minutes.",
            formalityVariants: {
              casual: "Welcome! Ever done acupuncture? First visit's a full consult and treatment, 'bout 90 mins.",
              standard:
                "Welcome! Have you had acupuncture before? Our first visit includes a full consultation and treatment. It's usually about 90 minutes.",
              formal:
                "Welcome to our clinic. May I inquire if you have received acupuncture treatments previously? Our initial consultation and comprehensive treatment session typically requires approximately 90 minutes.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Yes, I'm familiar with acupuncture — I used to get it regularly back in China. How much is a session, and does insurance cover it?",
            textZh: "是的，我对针灸很熟悉——在中国经常做。一次多少钱？保险能报销吗？",
            casualVersion:
              "Yeah, I know acupuncture — used to get it all the time back in China. What's a session cost, and does insurance even cover it?",
            commonMistake: {
              wrong: "How much is one time? Does insurance can cover it?",
              correct: "How much is a session? Does insurance cover it?",
              explanation:
                '"一次" 翻译成 "one time" 不自然，应说 "a session" 或 "a treatment"。"can cover" 是语病，直接用 "cover" 即可。',
            },
            formalityVariants: {
              casual:
                "Oh yeah, I know acupuncture — got it a bunch in China. What's it cost? And is it covered by insurance?",
              standard:
                "Yes, I'm familiar with acupuncture — I used to get it regularly back in China. How much is a session, and does insurance cover it?",
              formal:
                "Yes, I am quite familiar with acupuncture; I received regular treatments during my time in China. Could you please inform me of the cost per session, and whether these services are covered by health insurance?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "The initial consultation is $120, and follow-up sessions are $85 each. Many insurance plans now cover acupuncture — we accept Blue Cross, Aetna, and UnitedHealthcare. Can I have your insurance card to check your coverage?",
            textZh:
              "初诊120美元，之后每次85美元。现在很多保险计划都覆盖针灸——我们接受 Blue Cross、Aetna 和 UnitedHealthcare。能给我看你的保险卡让我查一下你的覆盖范围吗？",
            keyPhrases: [
              { en: "initial consultation", zh: "初诊" },
              { en: "follow-up sessions", zh: "后续疗程" },
              { en: "coverage", zh: "覆盖范围/报销范围" },
              { en: "insurance card", zh: "保险卡" },
            ],
            vocabNotes: {
              coverage: {
                meaningInContext: "在这句话里表示：保险覆盖/报销的范围和金额",
                similarUsage: "类似用法：Does your plan have dental coverage?",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "First visit is 120 bucks, then 85 for each follow-up. A lot of insurance plans cover acupuncture now — let me check your card and see what your plan pays for.",
                textZh: "初诊120美元，之后每次85。现在很多保险都覆盖针灸——给我你的卡我查查你的计划报多少。",
                actionHint: "提供保险卡",
                frequency: "common",
              },
              {
                textEn:
                  "It's $120 for the initial assessment and $85 per session after that. We take most major insurance — do you have your card? I can run it and see what's covered.",
                textZh: "初次评估120美元，之后每次85美元。我们接受大多数主要保险——有保险卡吗？我可以查一下覆盖范围。",
                actionHint: "确认保险覆盖",
                frequency: "common",
              },
            ],
            casualVersion:
              "First visit's 120 bucks, then 85 after that. Lots of insurance plans cover acupuncture now — we take Blue Cross, Aetna, UnitedHealthcare. Can I see your card to check what's covered?",
            formalityVariants: {
              casual:
                "First time's 120, then 85 a pop. Most insurances cover it now – we do Blue Cross, Aetna, UnitedHealthcare. Lemme see your card to check coverage.",
              standard:
                "The initial consultation is $120, and follow-up sessions are $85 each. Many insurance plans now cover acupuncture — we accept Blue Cross, Aetna, and UnitedHealthcare. Can I have your insurance card to check your coverage?",
              formal:
                "The initial consultation is priced at $120, with subsequent treatment sessions at $85 each. A growing number of insurance providers now include acupuncture in their coverage plans; we are pleased to accept Blue Cross, Aetna, and UnitedHealthcare. May I please request your insurance card so we can verify your specific coverage details?",
            },
          },
          {
            speaker: "you",
            textEn:
              "Here's my insurance card. Also, does your acupuncturist practice traditional Chinese medicine style, or is it more of a Western approach?",
            textZh: "这是我的保险卡。还有，你们的针灸师是传统中医手法还是更偏西方手法？",
            culturalNote:
              '美国的针灸分两种：传统中医（TCM）风格和更西化的"干针"（dry needling）。如果想要正宗中医针灸，要提前确认。',
            casualVersion: "Here's my card. So, is your acupuncturist more TCM or Western style?",
            commonMistake: {
              wrong: "Your acupuncturist is traditional Chinese medicine style, or Western approach?",
              correct:
                "Does your acupuncturist practice traditional Chinese medicine style, or is it more of a Western approach?",
              explanation: '询问手法时，动词 "practice" 或 "use" 更自然；直接用 "is" 听起来不地道。',
            },
            formalityVariants: {
              casual: "Got my card here. So, is your acupuncturist more TCM or like, Western style?",
              standard:
                "Here's my insurance card. Also, does your acupuncturist practice traditional Chinese medicine style, or is it more of a Western approach?",
              formal:
                "Certainly, here is my insurance card. Furthermore, I was wondering if your acupuncturist primarily utilizes traditional Chinese medicine methodologies, or if the approach leans more towards a Westernized practice?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Our lead practitioner, Dr. Li, is actually trained in Beijing. She practices traditional Chinese medicine — pulse diagnosis, tongue reading, the whole thing. She also does cupping and moxibustion if needed.",
            textZh:
              "我们的主治医师李医生在北京受过训练。她做的是传统中医——脉诊、看舌苔，全套的。如果需要她也做拔罐和艾灸。",
            keyPhrases: [
              { en: "practitioner", zh: "执业者/医师" },
              { en: "pulse diagnosis", zh: "脉诊" },
              { en: "tongue reading", zh: "看舌苔" },
              { en: "cupping", zh: "拔罐" },
              { en: "moxibustion", zh: "艾灸" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Dr. Li actually trained in Beijing — she does the full traditional Chinese medicine thing. Pulse reading, tongue diagnosis, the works. She also does cupping and moxa if you need it.",
                textZh: "李医生在北京受过训练——她做的是全套传统中医。把脉、看舌苔，全套。如果需要她也做拔罐和艾灸。",
                actionHint: "确认预约时间",
                frequency: "common",
              },
              {
                textEn:
                  "Oh, you'll love Dr. Li — she trained in China and practices real TCM. Pulse diagnosis, tongue reading, cupping, moxibustion — the whole nine yards.",
                textZh: "你会喜欢李医生的——她在中国受训，做正宗中医。脉诊、看舌苔、拔罐、艾灸——全部都会。",
                actionHint: "预约时间",
                frequency: "common",
              },
            ],
            casualVersion:
              "Our main acupuncturist, Dr. Li, actually trained in Beijing. She does full-on TCM — pulse diagnosis, tongue reading, the whole shebang. Plus cupping and moxibustion if you need it.",
            formalityVariants: {
              casual:
                "Our main doc, Dr. Li, actually trained in Beijing. She does full-on TCM – pulse, tongue, the works. Even cupping and moxa if you need.",
              standard:
                "Our lead practitioner, Dr. Li, is actually trained in Beijing. She practices traditional Chinese medicine — pulse diagnosis, tongue reading, the whole thing. She also does cupping and moxibustion if needed.",
              formal:
                "Our principal practitioner, Dr. Li, received her training in Beijing. Her practice adheres strictly to traditional Chinese medicine principles, encompassing pulse diagnosis, tongue reading, and a comprehensive holistic approach. Additionally, she is proficient in performing cupping and moxibustion therapies as indicated.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect, that's exactly what I was looking for. Can I get an appointment for this week?",
            textZh: "太好了，正是我想找的。这周能约到吗？",
            casualVersion: "Awesome, that's what I'm looking for! Can I get in this week?",
            commonMistake: {
              wrong: "Can I make an appointment this week?",
              correct: "Can I get an appointment for this week?",
              explanation: '"get an appointment" 或 "get in" 在口语中更常用，听起来更自然。',
            },
            formalityVariants: {
              casual: "Yes! Exactly what I wanted. Can I get in this week?",
              standard: "Perfect, that's exactly what I was looking for. Can I get an appointment for this week?",
              formal:
                "Excellent, that aligns precisely with my preferences. Would it be possible to schedule an appointment for me within the current week?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Let me check... Dr. Li has an opening Thursday at 2 PM and Friday at 10 AM. Which works better for you? And please wear loose, comfortable clothing — she'll need access to your back, arms, and legs.",
            textZh:
              "我看看……李医生周四下午2点和周五上午10点有空。哪个时间更方便？请穿宽松舒适的衣服——她需要接触你的背部、手臂和腿。",
            keyPhrases: [
              { en: "opening", zh: "空余时间/空位" },
              { en: "loose, comfortable clothing", zh: "宽松舒适的衣服" },
              { en: "access to", zh: "接触到/够得到" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Lemme see... She's got Thursday at 2 or Friday at 10 AM open. Which one works for you? Oh, and wear something loose and comfy — she'll need to get to your back, arms, and legs.",
                textZh:
                  "我看看……周四下午2点和周五上午10点有空。哪个方便？对了，穿宽松舒服的衣服来——她需要接触你的背、手臂和腿。",
                actionHint: "选择时间",
                frequency: "common",
              },
              {
                textEn:
                  "She has a couple of slots — Thursday afternoon or Friday morning. What's better? And heads up — come in loose-fitting clothes so she can work on your back and limbs.",
                textZh: "她有几个空位——周四下午或周五上午。哪个好？提醒一下——穿宽松衣服来，方便她治疗背部和四肢。",
                actionHint: "确认时间并记住穿着要求",
                frequency: "common",
              },
            ],
            casualVersion:
              "Lemme see... Dr. Li's got Thursday at 2 PM and Friday at 10 AM open. What works for you? Oh, and wear comfy, loose clothes — she'll need to get to your back, arms, and legs.",
            commonMistake: {
              wrong: "Which time is convenient for you?",
              correct: "Which works better for you?",
              explanation: '"Which works better for you?" 更自然，口语中常用。',
            },
            formalityVariants: {
              casual:
                "Lemme check... Dr. Li's open Thurs 2 PM or Fri 10 AM. Which one works? Also, wear comfy, loose stuff — she needs access to your back, arms, legs.",
              standard:
                "Let me check... Dr. Li has an opening Thursday at 2 PM and Friday at 10 AM. Which works better for you? And please wear loose, comfortable clothing — she'll need access to your back, arms, and legs.",
              formal:
                "Allow me a moment to review her schedule. Dr. Li has availability on Thursday at 2:00 PM and Friday at 10:00 AM. Please indicate which of these times would be more suitable for you. Additionally, we kindly request that you wear loose-fitting, comfortable attire, as the practitioner will require access to your back, arms, and legs during the treatment.",
            },
          },
          {
            speaker: "you",
            textEn: "Thursday at 2 PM works great. Do I need to bring anything?",
            textZh: "周四下午2点可以。我需要带什么吗？",
            casualVersion: "Thursday 2 PM's perfect. Gotta bring anything?",
            formalityVariants: {
              casual: "Thursday at 2 PM sounds good. Anything I need to bring?",
              standard: "Thursday at 2 PM works great. Do I need to bring anything?",
              formal:
                "Thursday at 2:00 PM would be most suitable. Are there any specific items I should bring with me?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Just your insurance card and ID. If you have any medical records or X-rays related to your back pain, bring those too. Please eat a light meal beforehand — acupuncture on an empty stomach can make you lightheaded. And avoid caffeine before the session.",
            textZh:
              "带上保险卡和身份证就行。如果有跟腰疼相关的病历或X光片也带上。治疗前请吃点东西——空腹做针灸可能会头晕。治疗前也避免咖啡因。",
            culturalNote: "建议针灸前吃点东西，避免空腹",
            keyPhrases: [
              { en: "medical records", zh: "病历" },
              { en: "X-rays", zh: "X光片" },
              { en: "light meal", zh: "简餐/吃点东西" },
              { en: "lightheaded", zh: "头晕" },
              { en: "caffeine", zh: "咖啡因" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Bring your insurance card and ID. If you've got any records or X-rays for your back, bring those along too. Have a light snack before you come — you don't want to do acupuncture on an empty stomach. And skip the coffee.",
                textZh:
                  "带上保险卡和身份证。如果有腰疼相关的病历或X光片也带上。来之前吃点东西——不要空腹做针灸。咖啡也别喝。",
                actionHint: "准备就诊材料",
                frequency: "common",
              },
              {
                textEn:
                  "Just your ID and insurance card. Any medical records about your back would be helpful too. Oh, and eat something light beforehand — some people get dizzy if they come in on an empty stomach. No caffeine either.",
                textZh:
                  "带身份证和保险卡就行。有腰疼的病历也有帮助。对了，来之前吃点东西——有人空腹做针灸会头晕。也不要喝咖啡。",
                actionHint: "做好就诊准备",
                frequency: "common",
              },
            ],
            casualVersion:
              "Just your insurance card and ID. Any old medical records or X-rays for your back pain, bring 'em. And eat something light before you come — don't wanna get dizzy. Also, no caffeine before.",
            commonMistake: {
              wrong: "Just bring your insurance card and ID is ok.",
              correct: "Just your insurance card and ID.",
              explanation: '"is ok" 在此句型中不自然，直接说 "Just your..." 更地道。',
            },
            formalityVariants: {
              casual:
                "Just card and ID. Any old back pain records or X-rays, bring those. Eat a light snack beforehand so you don't get dizzy. No caffeine either.",
              standard:
                "Just your insurance card and ID. If you have any medical records or X-rays related to your back pain, bring those too. Please eat a light meal beforehand — acupuncture on an empty stomach can make you lightheaded. And avoid caffeine before the session.",
              formal:
                "Kindly bring your insurance card and a form of identification. Should you possess any pertinent medical records or X-rays concerning your back pain, we would appreciate it if you could bring those as well. We strongly advise consuming a light meal prior to your appointment, as acupuncture on an empty stomach may induce lightheadedness. Furthermore, please refrain from consuming caffeine before your session.",
            },
          },
        ],
      },

      // --- Flow 2: 和西医讨论中医疗法 ---
      {
        id: "discuss-tcm",
        titleZh: "和西医讨论中医",
        titleEn: "Discussing TCM with Western Doctor",
        description: "在看西医时，想讨论同时使用中医疗法",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn:
              "Doctor, I wanted to mention that I've also been taking some Chinese herbal medicine for my condition. I want to make sure it doesn't interact with the medication you prescribed.",
            textZh: "医生，我想说一下我同时也在吃一些中药来治疗我的病。我想确认它不会和您开的药产生冲突。",
            culturalNote:
              "在国外看西医时，一定要告知你在服用的中药或保健品。很多中药和西药有相互作用（drug interaction）。",
            casualVersion:
              "Doc, just wanna say I've also been taking some Chinese herbs for my condition. Wanna make sure they don't mess with your meds.",
            commonMistake: {
              wrong: "Doctor, I want to mention that I also take...",
              correct: "Doctor, I wanted to mention that I've also been taking...",
              explanation: "“I wanted to” 表达委婉的意图，比“I want to”更礼貌自然。",
            },
            formalityVariants: {
              casual:
                "Hey Doc, just wanted to let you know I'm also on some Chinese herbs for my condition. Gotta make sure they don't interact with your meds.",
              standard:
                "Doctor, I wanted to mention that I've also been taking some Chinese herbal medicine for my condition. I want to make sure it doesn't interact with the medication you prescribed.",
              formal:
                "Dr. [Doctor's Last Name], I would like to inform you that I am currently supplementing my treatment with certain traditional Chinese herbal remedies. My primary concern is to ensure there are no contraindications or adverse interactions with the pharmaceutical prescriptions you have provided.",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "I'm glad you brought that up — it's very important. Can you tell me exactly what herbs you're taking? Do you have the packaging or a list of ingredients?",
            textZh: "很高兴你提到这个——非常重要。能告诉我你在吃什么药材吗？有包装或者成分清单吗？",
            keyPhrases: [
              { en: "brought that up", zh: "提到这个" },
              { en: "herbs", zh: "草药/药材" },
              { en: "packaging", zh: "包装" },
              { en: "list of ingredients", zh: "成分清单" },
            ],
            vocabNotes: {
              "brought that up": {
                meaningInContext: "在这句话里表示：提到/说起这件事",
                similarUsage: "类似用法：I'm glad you brought up the budget issue.",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Oh good, I'm really glad you mentioned that. It's super important. What exactly are you taking? Got the bottles or a photo of the ingredients?",
                textZh: "太好了，你提到这个非常重要。你具体在吃什么？有药瓶或成分照片吗？",
                actionHint: "展示药品信息",
                frequency: "common",
              },
              {
                textEn:
                  "Thank you for telling me — a lot of patients forget to mention supplements and herbal stuff. Can you tell me the names and show me the packaging?",
                textZh: "谢谢你告诉我——很多患者忘了提补充剂和草药。能告诉我名字并给我看包装吗？",
                actionHint: "提供药品详情",
                frequency: "common",
              },
            ],
            casualVersion:
              "Glad you mentioned that — super important. What herbs are you taking, exactly? Got the packaging or an ingredients list?",
            formalityVariants: {
              casual: "Oh, good you said something! What herbs are those? Got the packaging or a list?",
              standard:
                "I'm glad you brought that up — it's very important. Can you tell me exactly what herbs you're taking? Do you have the packaging or a list of ingredients?",
              formal:
                "I appreciate you bringing this to my attention, as it is a critical consideration. Could you please specify the exact herbal preparations you are currently utilizing? Do you possess the original packaging or a comprehensive list of their constituents?",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'm taking Suan Zao Ren Tang for sleep issues and some Huang Qi capsules for immunity. Here, I have photos of the packaging on my phone.",
            textZh: "我在吃酸枣仁汤治失眠，还有一些黄芪胶囊增强免疫力。我手机上有包装的照片。",
            casualVersion:
              "I'm on Suan Zao Ren Tang for sleep and some Huang Qi pills for immunity. Got pics of the packaging right here on my phone.",
            culturalNote: "直接说出中药名称很自然，不需要额外解释",
            commonMistake: {
              wrong: "I take Suan Zao Ren Tang for sleep...",
              correct: "I'm taking Suan Zao Ren Tang for sleep...",
              explanation: "正在进行的疗程用 “I'm taking” 更自然，而非 “I take”（表示习惯性）。",
            },
            formalityVariants: {
              casual: "Suan Zao Ren Tang for sleep, Huang Qi capsules for immunity. Pics are on my phone.",
              standard:
                "I'm taking Suan Zao Ren Tang for sleep issues and some Huang Qi capsules for immunity. Here, I have photos of the packaging on my phone.",
              formal:
                "Currently, I am administering Suan Zao Ren Tang to address my sleep disturbances, and I am also using Huang Qi capsules to bolster my immune system. I have photographic documentation of the product packaging available on my mobile device.",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "Thank you, that's helpful. Let me look these up. Huang Qi — that's astragalus, right? I need to check if it interacts with your blood pressure medication. Some Chinese herbs can affect how your liver processes certain drugs.",
            textZh:
              "谢谢，这很有帮助。让我查一下。黄芪——就是 astragalus 对吧？我需要确认它和你的降压药有没有相互作用。有些中药会影响肝脏代谢某些药物的方式。",
            keyPhrases: [
              { en: "look these up", zh: "查一下" },
              { en: "astragalus", zh: "黄芪" },
              { en: "interacts with", zh: "和...产生相互作用" },
              { en: "blood pressure medication", zh: "降压药" },
              { en: "liver processes", zh: "肝脏代谢" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "OK, let me check on these. Huang Qi — that's astragalus, yeah? I need to make sure it doesn't mess with your blood pressure meds. Some herbs can change how your liver breaks down certain drugs.",
                textZh:
                  "好，让我查一下。黄芪——就是 astragalus 对吧？我要确保它不会影响你的降压药。有些草药会改变肝脏代谢药物的方式。",
                actionHint: "等待医生查询",
                frequency: "common",
              },
              {
                textEn:
                  "Great, thanks for the photos. Let me pull these up... So the astragalus — I want to cross-reference that with what you're on. Herbal stuff can sometimes interact with prescriptions.",
                textZh:
                  "好的，谢谢照片。让我查查……黄芪这个——我要和你在吃的药对照一下。草药有时会和处方药产生相互作用。",
                actionHint: "配合查询",
                frequency: "common",
              },
            ],
            casualVersion:
              "Thanks, that helps. Let me look 'em up. Huang Qi — that's astragalus, right? Gotta check if it interacts with your blood pressure meds. Some Chinese herbs can mess with how your liver handles certain drugs.",
            formalityVariants: {
              casual:
                "Okay, thanks. I'll look 'em up. Huang Qi's astragalus, right? Just need to check for interactions with your blood pressure meds. Some herbs can affect liver processing.",
              standard:
                "Thank you, that's helpful. Let me look these up. Huang Qi — that's astragalus, right? I need to check if it interacts with your blood pressure medication. Some Chinese herbs can affect how your liver processes certain drugs.",
              formal:
                "I appreciate this information, it is indeed beneficial. Allow me to research these compounds. Regarding Huang Qi, that is Astragalus, correct? I must ascertain potential interactions with your prescribed antihypertensive medication. Certain traditional Chinese herbs possess properties that may modulate hepatic drug metabolism.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I didn't realize there could be interactions. In China, many people take both Chinese and Western medicine together.",
            textZh: "我没意识到可能有相互作用。在中国很多人同时吃中药和西药。",
            casualVersion:
              "Didn't realize there could be interactions. In China, lots of people take both Chinese and Western meds together.",
            culturalNote: "西方医学更强调药的成分和副作用，中西医合用需谨慎。",
            commonMistake: {
              wrong: "I didn't realize they have interactions.",
              correct: "I didn't realize there could be interactions.",
              explanation: "“have interactions”不如“there could be interactions”自然，后者强调可能性。",
            },
            formalityVariants: {
              casual: "Whoa, didn't know about interactions. Back home, we just mix 'em.",
              standard:
                "I didn't realize there could be interactions. In China, many people take both Chinese and Western medicine together.",
              formal:
                "I was not fully cognizant of the potential for such interactions. It is quite common in China for individuals to concurrently utilize both traditional Chinese and Western pharmaceutical treatments.",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "I understand, and I respect traditional Chinese medicine — it has thousands of years of history. My concern is specifically about drug interactions. I'm seeing that astragalus may boost immune function, which is generally fine, but could theoretically interfere with immunosuppressants. Since you're not on any, it should be okay. The sleep formula looks safe too.",
            textZh:
              "我理解，我也尊重传统中医——它有几千年的历史。我关心的是药物相互作用。我看到黄芪可能增强免疫功能，一般没问题，但理论上可能干扰免疫抑制剂。因为你没有在吃免疫抑制剂，应该没问题。那个安眠方剂看起来也安全。",
            culturalNote: "美国医生对中西药合用更谨慎，会仔细检查药物相互作用。",
            keyPhrases: [
              { en: "drug interactions", zh: "药物相互作用" },
              { en: "immune function", zh: "免疫功能" },
              { en: "immunosuppressants", zh: "免疫抑制剂" },
              { en: "interfere with", zh: "干扰" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I don't have strong views either way on herbal medicine, but I do need to make sure nothing you're taking will reduce the effectiveness of your prescriptions.",
                textZh: "我对草药没有特别的立场，但我需要确保你吃的东西不会降低处方药的效果。",
                actionHint: "继续讨论用药安全",
                frequency: "common",
              },
            ],
            casualVersion:
              "I get it, and I totally respect TCM — it's ancient. My thing is just drug interactions. Looks like astragalus might boost immunity, which is usually fine, but could mess with immunosuppressants. Since you're not on those, it's cool. Sleep stuff looks safe too.",
            formalityVariants: {
              casual:
                "Got it, and I respect TCM's history. Just worried about interactions. Astragalus might boost immunity, fine normally, but could clash with immunosuppressants. You're not on 'em, so good. Sleep formula seems okay.",
              standard:
                "I understand, and I respect traditional Chinese medicine — it has thousands of years of history. My concern is specifically about drug interactions. I'm seeing that astragalus may boost immune function, which is generally fine, but could theoretically interfere with immunosuppressants. Since you're not on any, it should be okay. The sleep formula looks safe too.",
              formal:
                "I fully comprehend your perspective, and I hold a profound respect for the extensive historical legacy of Traditional Chinese Medicine. My primary concern, however, revolves around the potential for pharmacodynamic or pharmacokinetic interactions. My current assessment indicates that Astragalus may enhance immune function, which is generally benign, yet it theoretically possesses the capacity to interfere with immunosuppressive agents. Given that you are not prescribed such medications, this should not pose an issue. The sleep formulation also appears to be benign.",
            },
          },
          {
            speaker: "you",
            textEn:
              "That's a relief. Would you be open to a collaborative approach? My acupuncturist and you could coordinate on my treatment plan.",
            textZh: "那就放心了。您愿意协同治疗吗？我的针灸师和您可以协调我的治疗方案。",
            culturalNote: "协调治疗在美国医疗体系中并非总是常规，需主动提出。",
            casualVersion:
              "Whew, good to hear. Would you be down for us all working together? My acupuncturist and you could team up on my treatment plan.",
            commonMistake: {
              wrong: "My acupuncturist and you could coordinate my treatment plan.",
              correct: "My acupuncturist and you could coordinate on my treatment plan.",
              explanation: "“coordinate on”更明确表示就某个计划进行协调，比直接跟计划协调更自然。",
            },
            formalityVariants: {
              casual: "Phew, good. Wanna try a team approach? My acupuncturist and you could work together on my plan.",
              standard:
                "That's a relief. Would you be open to a collaborative approach? My acupuncturist and you could coordinate on my treatment plan.",
              formal:
                "That is indeed reassuring. Would you be amenable to exploring a collaborative therapeutic approach? My acupuncturist and yourself could potentially liaise regarding the optimization of my comprehensive treatment regimen.",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "I think that's actually a great idea. Integrative medicine is becoming more common here. If your acupuncturist can send me their treatment notes, I'll include them in your file. Just make sure any new herbs or supplements are run by me first — better safe than sorry.",
            textZh:
              "我觉得这是个很好的想法。整合医学在这边越来越普遍了。如果你的针灸师能把治疗记录发给我，我会放进你的档案。只是要确保任何新的中药或保健品先跟我说一声——安全第一。",
            keyPhrases: [
              { en: "integrative medicine", zh: "整合医学" },
              { en: "treatment notes", zh: "治疗记录" },
              { en: "run by me first", zh: "先跟我说一声/先告知我" },
              { en: "better safe than sorry", zh: "安全第一/有备无患" },
            ],
            literalMeaning:
              '"better safe than sorry" 字面意思是「安全总比后悔好」，实际含义是「小心为上/预防胜于治疗」',
            alternativeExpressions: [
              {
                textEn:
                  "That's a great idea, actually. More and more doctors are open to integrative care. Have your acupuncturist send me their notes and I'll add them to your file. Just loop me in before starting any new herbs or supplements.",
                textZh:
                  "这个想法很好。越来越多的医生对整合治疗持开放态度。让你的针灸师把记录发给我，我加到你的档案里。开始吃任何新的草药或保健品之前先告诉我。",
                actionHint: "协调两方治疗",
                frequency: "common",
              },
              {
                textEn:
                  "Honestly, I think that's awesome. Integrative medicine is a growing thing here. Just keep me posted on any new herbs, and have your acupuncturist share their treatment plan.",
                textZh:
                  "说实话，我觉得这很好。整合医学在这边越来越流行。有新的草药告诉我一声，让你的针灸师分享治疗方案就行。",
                actionHint: "告知针灸师联系方式",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, actually, that's a great idea. Integrative medicine's getting more common. If your acupuncturist sends over their notes, I'll put 'em in your file. Just run any new herbs or supplements by me first — better safe than sorry.",
            commonMistake: {
              wrong: "Just make sure any new herbs or supplements tell me first.",
              correct: "Just make sure any new herbs or supplements are run by me first.",
              explanation: "“run by me”是地道表达，意思是先知会我/让我过目，比“tell me”更自然。",
            },
            formalityVariants: {
              casual:
                "Actually, yeah, great idea! Integrative medicine's taking off. Have your acupuncturist send notes, I'll add 'em. Just let me know about any new stuff first, okay? Better safe than sorry.",
              standard:
                "I think that's actually a great idea. Integrative medicine is becoming more common here. If your acupuncturist can send me their treatment notes, I'll include them in your file. Just make sure any new herbs or supplements are run by me first — better safe than sorry.",
              formal:
                "I concur; that is indeed an excellent proposition. The practice of integrative medicine is gaining increasing prevalence within our healthcare system. Should your acupuncturist be able to provide their treatment records, I will incorporate them into your medical file. I would, however, request that any additional herbal remedies or dietary supplements be reviewed by me prior to their initiation, as a precautionary measure.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you for being so open-minded. I'll ask Dr. Li to share her notes with you.",
            textZh: "谢谢您这么开明。我会让李医生把记录发给您。",
            casualVersion: "Thanks for being so open-minded. I'll get Dr. Li to send you her notes.",
            commonMistake: {
              wrong: "I'll let Dr. Li share her notes with you.",
              correct: "I'll ask Dr. Li to share her notes with you.",
              explanation: "“let”表示允许，而此处是请求，用“ask”或“get”更准确。",
            },
            formalityVariants: {
              casual: "Thanks for being cool with it. I'll have Dr. Li send her notes.",
              standard: "Thank you for being so open-minded. I'll ask Dr. Li to share her notes with you.",
              formal:
                "I sincerely appreciate your progressive perspective on this matter. I will promptly request Dr. Li to transmit her clinical documentation to your office.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 远程医疗/线上看诊 ====================
  {
    id: "medical-13",
    category: "medical",
    titleZh: "远程医疗",
    titleEn: "Telehealth Consultation",
    description: "在国外通过视频通话看医生，包括注册平台、描述症状和获取电子处方",
    otherRole: "远程医生",
    otherRoleIcon: "video",
    flows: [
      // --- Flow 1: 第一次使用远程医疗 ---
      {
        id: "first-telehealth",
        titleZh: "第一次远程看诊",
        titleEn: "First Telehealth Visit",
        description: "第一次使用远程医疗平台看医生",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi, this is my first time using telehealth. Can I see a doctor today? I have a bad cold and I think I might need antibiotics.",
            textZh: "你好，我第一次用远程医疗。今天能看医生吗？我感冒很严重，可能需要抗生素。",
            culturalNote:
              "在美国，Teladoc、MDLive、Amwell 等远程医疗平台很普遍。很多保险都覆盖远程问诊，费用比去诊所便宜。",
            casualVersion:
              "Hey, first time using telehealth. Can I see a doc today? Got a bad cold, think I might need antibiotics.",
            commonMistake: {
              wrong: "I need antibiotics.",
              correct: "I think I might need antibiotics.",
              explanation: "直接说“我需要”听起来有点命令式，用“I think I might need”更委婉。",
            },
            formalityVariants: {
              casual:
                "Hey, first time using telehealth. Can I see a doc today? Got a bad cold, might need antibiotics.",
              standard:
                "Hi, this is my first time using telehealth. Can I see a doctor today? I have a bad cold and I think I might need antibiotics.",
              formal:
                "Good morning/afternoon, I'm a new user and this is my first experience with your telehealth service. I'm experiencing symptoms of a severe cold and am wondering if a consultation for antibiotics might be appropriate today.",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "Welcome! Yes, we have doctors available right now. The average wait time is about 15 minutes. I just need to verify your account. Can you confirm your name, date of birth, and the state you're currently in?",
            textZh:
              "欢迎！是的，我们现在有医生在线。平均等待时间约15分钟。我需要验证您的账户。能确认您的姓名、出生日期和目前所在的州吗？",
            keyPhrases: [
              { en: "available right now", zh: "现在有空/在线" },
              { en: "average wait time", zh: "平均等待时间" },
              { en: "verify your account", zh: "验证您的账户" },
              { en: "the state you're currently in", zh: "目前所在的州" },
            ],
            vocabNotes: {
              "the state you're currently in": {
                meaningInContext: "在这句话里指美国的哪个州，因为医生的执照只在特定州有效",
                similarUsage: "类似用法：Which state are you calling from?",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Hi there! Yep, we've got docs available. Wait time is about 15 minutes. Just need to verify your info real quick — name, date of birth, and which state you're in?",
                textZh: "你好！有医生在线的。等待大约15分钟。先快速验证一下你的信息——姓名、生日和所在的州？",
                actionHint: "提供个人信息",
                frequency: "common",
              },
              {
                textEn:
                  "Welcome to the platform! We can get you connected to a doctor pretty quickly — usually about a 15-minute wait. I just need to confirm a few details first.",
                textZh: "欢迎使用平台！我们很快就能帮你连线医生——通常等15分钟左右。我先确认几个信息。",
                actionHint: "准备身份信息",
                frequency: "common",
              },
            ],
            casualVersion:
              "Welcome! Yep, docs are available. Wait's about 15 mins. Just need to verify your account. Can you confirm your name, DOB, and state you're in?",
            formalityVariants: {
              casual:
                "Welcome! Yep, docs are available. Wait's about 15 mins. Just need to verify your account. Can you confirm your name, DOB, and state you're in?",
              standard:
                "Welcome! Yes, we have doctors available right now. The average wait time is about 15 minutes. I just need to verify your account. Can you confirm your name, date of birth, and the state you're currently in?",
              formal:
                "Welcome to our telehealth platform! We do have medical professionals available for consultations at this moment, with an estimated waiting period of approximately 15 minutes. Before proceeding, I will need to verify your account details. Could you please confirm your full name, date of birth, and your current state of residence?",
            },
          },
          {
            speaker: "you",
            textEn: "My name is Wang Wei, born March 15, 1988. I'm currently in California.",
            textZh: "我叫王伟，1988年3月15日出生。我目前在加利福尼亚。",
            casualVersion: "Wang Wei, March 15, '88. I'm in Cali.",
            commonMistake: {
              wrong: "My birthday is March 15, 1988.",
              correct: "Born March 15, 1988.",
              explanation: "英文里说生日日期时，直接说 born XXXX 更简洁自然。",
            },
            formalityVariants: {
              casual: "Wang Wei, March 15, '88. In Cali.",
              standard: "My name is Wang Wei, born March 15, 1988. I'm currently in California.",
              formal:
                "Certainly, my name is Wang Wei. I was born on March 15th, 1988, and I am presently located in California.",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "Perfect, you're verified. I'm connecting you with Dr. Johnson now. You'll receive a video call link — just click it to join. Make sure your camera and microphone are on.",
            textZh:
              "好的，验证通过。我现在帮您连接 Johnson 医生。您会收到一个视频通话链接——点击就可以加入。请确保您的摄像头和麦克风是打开的。",
            keyPhrases: [
              { en: "verified", zh: "验证通过" },
              { en: "connecting you with", zh: "帮您连接" },
              { en: "video call link", zh: "视频通话链接" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "All set — you're good to go. I'm patching you through to Dr. Johnson now. You'll get a video link — just click to join. Make sure your camera and mic are working.",
                textZh:
                  "好了——验证通过。我现在帮你接 Johnson 医生。你会收到视频链接——点击加入就行。确保摄像头和麦克风正常。",
                actionHint: "点击链接加入",
                frequency: "common",
              },
              {
                textEn:
                  "You're all verified. Connecting you to Dr. Johnson — should be just a moment. Keep an eye out for the video call invite.",
                textZh: "验证通过了。正在帮你连线 Johnson 医生——稍等片刻。注意查看视频通话邀请。",
                actionHint: "等待视频连线",
                frequency: "common",
              },
            ],
            casualVersion:
              "Perfect, you're good. Connecting you with Dr. Johnson. You'll get a video link — just click to join. Make sure your camera and mic are on.",
            formalityVariants: {
              casual:
                "Perfect, you're good. Connecting you with Dr. Johnson. You'll get a video link — click to join. Make sure camera and mic are on.",
              standard:
                "Perfect, you're verified. I'm connecting you with Dr. Johnson now. You'll receive a video call link — just click it to join. Make sure your camera and microphone are on.",
              formal:
                "Excellent, your verification is complete. I am now initiating the connection to Dr. Johnson. You will shortly receive a video call link; kindly click on it to join the consultation. Please ensure your camera and microphone are activated.",
            },
          },
          {
            speaker: "them",
            role: "远程医生",
            textEn:
              "Hi Wang, I'm Dr. Johnson. I can see you on the screen. Tell me what's going on — how long have you been feeling sick?",
            textZh: "你好王，我是 Johnson 医生。屏幕上能看到你。跟我说说怎么回事——不舒服多久了？",
            keyPhrases: [
              { en: "what's going on", zh: "怎么回事" },
              { en: "how long have you been feeling sick", zh: "不舒服多久了" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Hey Wang, Dr. Johnson here. I can see you — looks like we're connected. So tell me what's going on. When did you start feeling sick?",
                textZh: "嘿王，我是 Johnson 医生。能看到你——连线成功了。跟我说说怎么回事。什么时候开始不舒服的？",
                actionHint: "描述症状",
                frequency: "common",
              },
              {
                textEn:
                  "Hi there, I'm Dr. Johnson. Can you see and hear me OK? Great. Walk me through your symptoms — when did this all start?",
                textZh: "你好，我是 Johnson 医生。能看到和听到我吗？好的。跟我说说你的症状——什么时候开始的？",
                actionHint: "详细描述病情",
                frequency: "common",
              },
            ],
            casualVersion:
              "Hey Wang, Dr. Johnson here. Can see ya on screen. So, what's up? How long's this been going on?",
            culturalNote: "美国医生会直接称呼病人姓氏，很少用Mr/Ms+姓",
            formalityVariants: {
              casual: "Hey Wang, Dr. Johnson here. See ya on screen. So, what's up? How long's this been going on?",
              standard:
                "Hi Wang, I'm Dr. Johnson. I can see you on the screen. Tell me what's going on — how long have you been feeling sick?",
              formal:
                "Good morning/afternoon, Mr. Wang. I'm Dr. Johnson, and I can see you clearly on the screen. Please describe your current symptoms and indicate for how long you have been experiencing this illness.",
            },
          },
          {
            speaker: "you",
            textEn:
              "It started three days ago. I have a runny nose, sore throat, cough, and mild headache. No fever though. I thought it would go away but it's getting worse.",
            textZh: "三天前开始的。流鼻涕、嗓子疼、咳嗽、轻微头疼。没有发烧。我以为会自己好但越来越严重了。",
            commonMistake: {
              wrong: "I have a running nose",
              correct: "I have a runny nose",
              explanation: "runny nose是固定搭配，running nose是常见错误。",
            },
            casualVersion:
              "Started three days ago. Got a runny nose, sore throat, cough, mild headache. No fever, though. Thought it'd just go away but it's worse.",
            formalityVariants: {
              casual:
                "Started three days ago. Got a runny nose, sore throat, cough, mild headache. No fever, though. Thought it'd just go away but it's worse.",
              standard:
                "It started three days ago. I have a runny nose, sore throat, cough, and mild headache. No fever though. I thought it would go away but it's getting worse.",
              formal:
                "The onset of my symptoms was approximately three days ago. I am experiencing a runny nose, a sore throat, a cough, and a mild headache. Notably, I have not developed a fever. I had initially anticipated a natural resolution of these symptoms, but they appear to be exacerbating.",
            },
          },
          {
            speaker: "them",
            role: "远程医生",
            textEn:
              "Can you tilt your phone so I can see your throat? Open wide and say ah... It does look a bit red but not severely inflamed. Based on what you're describing, this sounds like a viral upper respiratory infection — a common cold.",
            textZh:
              "能把手机倾斜一下让我看看你的喉咙吗？张大嘴说啊……看起来有点红但没有严重发炎。根据你描述的，这像是病毒性上呼吸道感染——普通感冒。",
            keyPhrases: [
              { en: "tilt your phone", zh: "倾斜手机" },
              { en: "inflamed", zh: "发炎的" },
              { en: "viral upper respiratory infection", zh: "病毒性上呼吸道感染" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Hold your phone up and tilt it so I can get a look at your throat. Open wide... OK, it's a bit red but nothing too crazy. This sounds like a standard cold — viral upper respiratory infection.",
                textZh:
                  "把手机举起来倾斜一下让我看看喉咙。张大……好的，有点红但不算严重。这像是普通感冒——病毒性上呼吸道感染。",
                actionHint: "配合检查",
                frequency: "common",
              },
              {
                textEn:
                  "Flip your camera around and let me peek at your throat. Say 'ah'... A little red, but not severely inflamed. Based on everything, I think this is just a regular cold.",
                textZh: "把摄像头翻过来让我看看你的喉咙。说'啊'……有点红，但没有严重发炎。综合来看，应该就是普通感冒。",
                actionHint: "确认诊断",
                frequency: "common",
              },
            ],
            casualVersion:
              "Can you tilt your phone so I can see your throat? Open wide, say ah... Looks a bit red but not super inflamed. Based on what you're saying, sounds like a viral upper respiratory infection — just a common cold.",
            formalityVariants: {
              casual:
                "Tilt your phone so I can see your throat? Open wide, say ah... Looks a bit red, not super inflamed. Based on what you're saying, sounds like a viral URI — common cold.",
              standard:
                "Can you tilt your phone so I can see your throat? Open wide and say ah... It does look a bit red but not severely inflamed. Based on what you're describing, this sounds like a viral upper respiratory infection — a common cold.",
              formal:
                "Would you please incline your phone slightly so I may examine your pharynx? Please open your mouth widely and vocalize 'ah'. I observe some erythema, but no significant inflammation. Consistent with your reported symptoms, this presentation suggests a viral upper respiratory infection, commonly known as the common cold.",
            },
          },
          {
            speaker: "you",
            textEn: "So I don't need antibiotics?",
            textZh: "所以我不需要抗生素？",
            commonMistake: {
              wrong: "So I no need antibiotics?",
              correct: "So I don't need antibiotics?",
              explanation: "缺少助动词 \"do\" 和否定词 \"not\"，是常见语法错误。",
            },
            casualVersion: "So, no antibiotics then?",
            formalityVariants: {
              casual: "So, no antibiotics then?",
              standard: "So I don't need antibiotics?",
              formal: "Therefore, antibiotics are not indicated in this case?",
            },
          },
          {
            speaker: "them",
            role: "远程医生",
            textEn:
              "Antibiotics only work against bacteria, not viruses. Taking them unnecessarily can actually cause resistance problems. What I'd recommend is over-the-counter remedies: DayQuil during the day, NyQuil at night for sleep, and a saline nasal spray. Drink lots of warm fluids and rest.",
            textZh:
              "抗生素只对细菌有效，对病毒无效。不必要地服用反而会造成耐药性问题。我建议用非处方药：白天吃 DayQuil，晚上吃 NyQuil 帮助睡眠，再用生理盐水鼻腔喷雾。多喝温热的液体，多休息。",
            keyPhrases: [
              { en: "bacteria", zh: "细菌" },
              { en: "resistance", zh: "耐药性" },
              { en: "over-the-counter", zh: "非处方的" },
              { en: "saline nasal spray", zh: "生理盐水鼻腔喷雾" },
            ],
            vocabNotes: {
              "over-the-counter": {
                meaningInContext: "在这句话里表示：不需要处方、可以直接在药店买到的药品，缩写 OTC",
                similarUsage: "类似用法：Is this medication over-the-counter or prescription-only?",
              },
            },
            culturalMeaning: "在美国，医生不会轻易开抗生素。很多中国人习惯感冒就吃抗生素，但在美国这被视为滥用药物。",
            alternativeExpressions: [
              {
                textEn:
                  "Antibiotics won't help here — they only kill bacteria, and you've got a virus. I'd recommend DayQuil during the day, NyQuil at night, and a saline spray for your nose. Lots of fluids and rest.",
                textZh:
                  "抗生素对这个没用——只杀细菌，你是病毒感染。建议白天吃 DayQuil，晚上吃 NyQuil，用生理盐水鼻腔喷雾。多喝水多休息。",
                actionHint: "去药房买非处方药",
                frequency: "common",
              },
              {
                textEn:
                  "This is a virus, so antibiotics aren't going to do anything. Go grab some over-the-counter cold medicine — DayQuil and NyQuil work well. A saline nasal rinse helps too. And drink plenty of warm stuff.",
                textZh:
                  "这是病毒，所以抗生素没用。去买点非处方感冒药——DayQuil 和 NyQuil 挺好用的。盐水洗鼻也有帮助。多喝温的。",
                actionHint: "购买推荐药物",
                frequency: "common",
              },
            ],
            casualVersion:
              "Antibiotics only work for bacteria, not viruses. Taking 'em when you don't need 'em can cause resistance. I'd recommend OTC stuff: DayQuil during the day, NyQuil at night for sleep, and saline nasal spray. Drink tons of warm fluids and rest.",
            formalityVariants: {
              casual:
                "Antibiotics only work for bacteria, not viruses. Taking 'em when you don't need 'em can cause resistance. I'd recommend OTC stuff: DayQuil during the day, NyQuil at night for sleep, and saline nasal spray. Drink tons of warm fluids and rest.",
              standard:
                "Antibiotics only work against bacteria, not viruses. Taking them unnecessarily can actually cause resistance problems. What I'd recommend is over-the-counter remedies: DayQuil during the day, NyQuil at night for sleep, and a saline nasal spray. Drink lots of warm fluids and rest.",
              formal:
                "It is important to understand that antibiotics are effective solely against bacterial infections, not viral ones. Unnecessary use can contribute to antibiotic resistance. My recommendation would be a regimen of over-the-counter symptomatic relief: specifically, DayQuil for daytime symptoms, NyQuil to aid with nighttime sleep, and a saline nasal spray. Additionally, ensure ample intake of warm fluids and prioritize rest.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. If it doesn't get better, when should I come back?",
            textZh: "明白了。如果没好转，什么时候应该再来看？",
            commonMistake: {
              wrong: "Got it. If not getting better, when should I see doctor again?",
              correct: "Got it. If it doesn't get better, when should I see a doctor again?",
              explanation: "缺少代词 \"it\" 和助动词 \"does\"，以及介词 \"a\"。",
            },
            casualVersion: "Got it. If it doesn't get better, when should I come back?",
            formalityVariants: {
              casual: "Got it. If it doesn't get better, when should I come back?",
              standard: "Got it. If it doesn't get better, when should I come back?",
              formal: "Understood. Should my symptoms not improve, when would you advise a follow-up consultation?",
            },
          },
          {
            speaker: "them",
            role: "远程医生",
            textEn:
              "If your symptoms haven't improved in seven to ten days, or if you develop a high fever, green or yellow mucus, or significant ear pain, book another visit. You can see me again through the app — no need to go to a clinic unless it's urgent. I'm sending a summary of today's visit to your email now.",
            textZh:
              "如果七到十天内症状没有好转，或者出现高烧、绿色或黄色鼻涕、或明显的耳朵疼，再约一次。你可以通过APP再约我——不需要去诊所除非紧急。我现在把今天的就诊总结发到你的邮箱。",
            commonMistake: {
              wrong: "green or yellow nose water",
              correct: "green or yellow nasal discharge",
              explanation: "nasal discharge是医学上分泌物的说法，更专业。",
            },
            keyPhrases: [
              { en: "haven't improved", zh: "没有好转" },
              { en: "green or yellow mucus", zh: "绿色或黄色鼻涕" },
              { en: "ear pain", zh: "耳朵疼" },
              { en: "summary of today's visit", zh: "今天的就诊总结" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "If you're not better in a week to ten days, or things take a turn — high fever, colored mucus, bad ear pain — book another visit. You can see me right through the app, no need to go anywhere.",
                textZh:
                  "如果一周到十天没好转，或者恶化——高烧、有颜色的鼻涕、严重耳痛——再约一次。通过APP就能看我，不用去任何地方。",
                actionHint: "记住复诊条件",
                frequency: "common",
              },
              {
                textEn:
                  "Give it about a week. If it's not clearing up by then, or you spike a fever or get thick green mucus, schedule a follow-up through the app. I'm emailing you a recap of today's visit now.",
                textZh:
                  "给它大约一周时间。如果那时还没好，或者发高烧、流浓绿鼻涕，通过APP预约复诊。我现在把今天的就诊回顾发到你邮箱。",
                actionHint: "保存就诊记录",
                frequency: "common",
              },
            ],
            casualVersion:
              "If your symptoms aren't better in seven to ten days, or if you get a high fever, green/yellow mucus, or bad ear pain, just book another visit. You can see me again on the app — no need to go to a clinic unless it's urgent. Sending a summary of today's visit to your email now.",
            formalityVariants: {
              casual:
                "If symptoms aren't better in seven to ten days, or you get a high fever, green/yellow mucus, or bad ear pain, just book another visit. Can see me again on the app — no need to go to a clinic unless urgent. Sending summary of today's visit to your email now.",
              standard:
                "If your symptoms haven't improved in seven to ten days, or if you develop a high fever, green or yellow mucus, or significant ear pain, book another visit. You can see me again through the app — no need to go to a clinic unless it's urgent. I'm sending a summary of today's visit to your email now.",
              formal:
                "Should your symptoms not resolve within seven to ten days, or if you experience the onset of a high fever, discolored mucus (green or yellow), or notable ear pain, please schedule a follow-up appointment. You are welcome to consult with me again via the application; a physical clinic visit is unnecessary unless the situation becomes urgent. I am now transmitting a summary of today's consultation to your registered email address.",
            },
          },
          {
            speaker: "you",
            textEn: "This is so convenient — much easier than going to a clinic. Thanks, Doctor!",
            textZh: "真方便——比去诊所容易多了。谢谢医生！",
            commonMistake: {
              wrong: "This is so convenient, much easier than go to clinic. Thank you Doctor!",
              correct: "This is so convenient — much easier than going to a clinic. Thanks, Doctor!",
              explanation: "\"than\" 后接动名词 \"going\"；\"Thank you Doctor\" 口语中 \"Thanks\" 更自然。",
            },
            casualVersion: "This is so easy — way better than going to a clinic. Thanks, Doc!",
            formalityVariants: {
              casual: "This is so easy — way better than going to a clinic. Thanks, Doc!",
              standard: "This is so convenient — much easier than going to a clinic. Thanks, Doctor!",
              formal:
                "This service is remarkably convenient, proving significantly more accessible than a traditional clinic visit. My sincere thanks, Doctor.",
            },
          },
        ],
      },

      // --- Flow 2: 处方续签和药物管理 ---
      {
        id: "prescription-refill",
        titleZh: "远程续方",
        titleEn: "Prescription Refill via Telehealth",
        description: "通过远程医疗续签处方药",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi Dr. Chen, I'm calling because I need a refill on my blood pressure medication. I ran out two days ago.",
            textZh: "陈医生你好，我打电话是因为我的降压药需要续方。两天前吃完了。",
            culturalNote: "在美国，处方药到期后需要医生重新开方。不能像中国那样直接在药店买。远程医疗可以快速续方。",
            casualVersion:
              "Hey Dr. Chen, calling 'cause I need a refill on my blood pressure meds. Ran out two days ago.",
            commonMistake: {
              wrong: "I need to refill my medicine.",
              correct: "I need a refill on my medication.",
              explanation: "“refill”是动词，“a refill”是名词，此处用名词短语更自然。",
            },
            formalityVariants: {
              casual: "Hey Dr. Chen, calling 'cause I need a refill on my blood pressure meds. Ran out two days ago.",
              standard:
                "Hi Dr. Chen, I'm calling because I need a refill on my blood pressure medication. I ran out two days ago.",
              formal:
                "Good morning/afternoon, Dr. Chen. I am contacting you regarding a necessary refill for my blood pressure medication. My supply was depleted approximately two days ago.",
            },
          },
          {
            speaker: "them",
            role: "远程医生",
            textEn:
              "Hi Wang. Running out of blood pressure medication isn't ideal — it's important not to skip doses. Let me pull up your records. You're on lisinopril 10 milligrams, correct?",
            textZh: "你好王。降压药吃完了不太好——不能漏服。让我调出你的病历。你在吃赖诺普利10毫克，对吗？",
            keyPhrases: [
              { en: "refill", zh: "续方/续药" },
              { en: "skip doses", zh: "漏服" },
              { en: "pull up your records", zh: "调出你的病历" },
              { en: "milligrams", zh: "毫克" },
            ],
            vocabNotes: {
              refill: {
                meaningInContext: "在这句话里表示：续配处方药，重新开一次相同的药",
                similarUsage: "类似用法：I need a refill on my allergy medication.",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Hey Wang. Yeah, you don't want to go without your BP meds — skipping doses isn't great. Let me pull up your chart real quick. You're on lisinopril 10 mg, right?",
                textZh: "嘿王。降压药断了可不好——不能漏服。让我赶紧调出你的病历。你吃的是赖诺普利10毫克，对吧？",
                actionHint: "确认药物信息",
                frequency: "common",
              },
              {
                textEn:
                  "Oh man, running out of blood pressure meds isn't ideal. Let me look you up... OK, you're taking lisinopril 10 milligrams daily, correct?",
                textZh: "哎，降压药吃完了不太好。让我查一下你的记录……好的，你在吃赖诺普利每天10毫克，对吗？",
                actionHint: "确认用药",
                frequency: "common",
              },
            ],
            casualVersion:
              "Hey Wang. Can't run out of blood pressure meds — gotta take 'em regularly. Lemme check your records. You're on lisinopril 10mg, right?",
            formalityVariants: {
              casual:
                "Hey Wang. Can't run out of blood pressure meds — gotta take 'em regularly. Lemme check your records. You're on lisinopril 10mg, right?",
              standard:
                "Hi Wang. Running out of blood pressure medication isn't ideal — it's important not to skip doses. Let me pull up your records. You're on lisinopril 10 milligrams, correct?",
              formal:
                "Good day, Mr./Ms. Wang. It is suboptimal to deplete your supply of blood pressure medication; adherence to your prescribed dosage is crucial. Allow me to access your medical records. You are currently prescribed lisinopril at a dosage of 10 milligrams, is that correct?",
            },
          },
          {
            speaker: "you",
            textEn:
              "Yes, that's right. I've been taking it for about six months. Is it possible to get a 90-day supply this time so I don't run out again?",
            textZh: "对的。我已经吃了大约六个月了。这次能开90天的量吗？这样就不会再断药了。",
            casualVersion:
              "Yeah, that's it. Been on it 'bout six months. Can I get a 90-day supply this time so I don't run out again?",
            commonMistake: {
              wrong: "Is it possible to open a 90-day supply?",
              correct: "Is it possible to get a 90-day supply?",
              explanation: "中文“开药”常被直译为“open”，但英文通常用“get”或“prescribe”。",
            },
            formalityVariants: {
              casual:
                "Yeah, that's it. Been on it 'bout six months. Can I get a 90-day supply this time so I don't run out again?",
              standard:
                "Yes, that's right. I've been taking it for about six months. Is it possible to get a 90-day supply this time so I don't run out again?",
              formal:
                "That is correct. I have been taking this medication for approximately six months. Would it be feasible to obtain a 90-day supply on this occasion, to prevent a recurrence of running out?",
            },
          },
          {
            speaker: "them",
            role: "远程医生",
            textEn:
              "I can do that, but first — how have you been feeling on the medication? Any side effects like dizziness, dry cough, or swelling?",
            textZh: "可以，但先问一下——吃这个药感觉怎么样？有没有头晕、干咳或浮肿等副作用？",
            keyPhrases: [
              { en: "side effects", zh: "副作用" },
              { en: "dizziness", zh: "头晕" },
              { en: "dry cough", zh: "干咳" },
              { en: "swelling", zh: "浮肿" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure, 90 days is no problem. But real quick — how's it been going? Any side effects? Dizzy at all? Dry cough? Any swelling?",
                textZh: "可以，90天没问题。但先快速问一下——感觉怎么样？有副作用吗？头晕吗？干咳？浮肿？",
                actionHint: "如实反馈药物反应",
                frequency: "common",
              },
              {
                textEn:
                  "I can write you a 90-day script, but first tell me — any issues with the medication? Cough, dizziness, swelling?",
                textZh: "我可以给你开90天的量，但先告诉我——药物有什么问题吗？咳嗽、头晕、浮肿？",
                actionHint: "描述用药感受",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, I can do that, but first — how you been feeling on it? Any side effects, like dizzy, dry cough, or swelling?",
            formalityVariants: {
              casual:
                "Yeah, I can do that, but first — how you been feeling on it? Any side effects, like dizzy, dry cough, or swelling?",
              standard:
                "I can do that, but first — how have you been feeling on the medication? Any side effects like dizziness, dry cough, or swelling?",
              formal:
                "I can certainly arrange that for you. However, prior to doing so, I must inquire about your experience with the medication. Have you experienced any adverse effects such as dizziness, a persistent dry cough, or edema?",
            },
          },
          {
            speaker: "you",
            textEn:
              "No side effects. I feel good. I've been checking my blood pressure at home — it's been around 125 over 80.",
            textZh: "没有副作用。感觉挺好。我在家量血压——一般在125/80左右。",
            casualVersion:
              "Nah, no side effects. Feel good. Been checking my blood pressure at home — it's been 'round 125 over 80.",
            commonMistake: {
              wrong: "I feel good. I check blood pressure at home.",
              correct: "I feel good. I've been checking my blood pressure at home.",
              explanation: "强调持续的动作要用完成进行时，更自然。",
            },
            formalityVariants: {
              casual:
                "Nah, no side effects. Feel good. Been checking my blood pressure at home — it's been 'round 125 over 80.",
              standard:
                "No side effects. I feel good. I've been checking my blood pressure at home — it's been around 125 over 80.",
              formal:
                "I have not experienced any side effects. My overall well-being is positive. I have been monitoring my blood pressure at home, and the readings have consistently been approximately 125 over 80.",
            },
          },
          {
            speaker: "them",
            role: "远程医生",
            textEn:
              "125 over 80 is great — that's well controlled. I'll send a 90-day prescription to your pharmacy. Which pharmacy do you use?",
            textZh: "125/80 很好——控制得很好。我给你开90天的处方发到你的药房。你用哪家药房？",
            keyPhrases: [
              { en: "well controlled", zh: "控制得很好" },
              { en: "send a prescription to your pharmacy", zh: "把处方发到你的药房" },
            ],
            alternativeExpressions: [
              {
                textEn: "That's a good reading. I'll e-prescribe a 90-day supply. Just confirm your pharmacy for me.",
                textZh: "数值不错。我电子开方90天的量。跟我确认一下你的药房。",
                actionHint: "告知你的药房",
                frequency: "common",
              },
            ],
            casualVersion:
              "125 over 80's great — that's well controlled. I'll send a 90-day script to your pharmacy. Which one do you use?",
            formalityVariants: {
              casual:
                "125 over 80's great — that's well controlled. I'll send a 90-day script to your pharmacy. Which one do you use?",
              standard:
                "125 over 80 is great — that's well controlled. I'll send a 90-day prescription to your pharmacy. Which pharmacy do you use?",
              formal:
                "A reading of 125 over 80 is excellent, indicating well-controlled hypertension. I will electronically transmit a 90-day prescription to your designated pharmacy. Could you please specify which pharmacy you utilize?",
            },
          },
          {
            speaker: "you",
            textEn: "CVS on Market Street. Can I pick it up today?",
            textZh: "Market Street 的 CVS 药房。今天能取吗？",
            casualVersion: "CVS, Market Street. Can I pick it up today?",
            commonMistake: {
              wrong: "Can I take it today?",
              correct: "Can I pick it up today?",
              explanation: '取药常用 "pick up"，"take it"含义模糊，可能误解。',
            },
            formalityVariants: {
              casual: "CVS, Market Street. Can I pick it up today?",
              standard: "CVS on Market Street. Can I pick it up today?",
              formal: "The CVS Pharmacy located on Market Street. Will it be available for collection today?",
            },
          },
          {
            speaker: "them",
            role: "远程医生",
            textEn:
              "I'm sending it electronically right now. It should be ready within two to four hours. The pharmacy will text you when it's ready. One more thing — you're due for a blood test to check your kidney function and potassium levels. This medication can affect those. Can you go to a lab this week?",
            textZh:
              "我现在电子发送。应该两到四小时内准备好。药房准备好了会发短信给你。还有一件事——你该做血液检查了，查一下肾功能和钾水平。这种药可能影响这些指标。这周能去抽血吗？",
            commonMistake: {
              wrong: "you're due for some blood test",
              correct: "you're due for some blood work",
              explanation: "blood work是医学检查的统称，更常用。",
            },
            keyPhrases: [
              { en: "electronically", zh: "电子方式" },
              { en: "due for", zh: "该做...了" },
              { en: "blood test", zh: "血液检查" },
              { en: "kidney function", zh: "肾功能" },
              { en: "potassium levels", zh: "钾水平" },
            ],
            vocabNotes: {
              "due for": {
                meaningInContext: "在这句话里表示：到了该做某事的时间了",
                similarUsage: "类似用法：You're due for a dental cleaning.",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Sent! Should be good to go in two to four hours. They'll text you. Oh, one more thing — you're overdue for bloodwork. I need to check your kidneys and potassium. Can you swing by a lab this week?",
                textZh:
                  "发了！两到四小时就能取。他们会发短信通知你。对了，你该做血液检查了。我需要查肾功能和钾。这周能去趟化验室吗？",
                actionHint: "安排抽血时间",
                frequency: "common",
              },
              {
                textEn:
                  "I'm e-prescribing it now — give the pharmacy a couple hours. They'll shoot you a text. By the way, it's time for a blood test — your kidneys and potassium need checking. That doable this week?",
                textZh:
                  "我现在电子发方——给药房几小时准备。他们会发短信给你。顺便说一下，该做血检了——查肾功能和钾水平。这周能安排吗？",
                actionHint: "确认抽血安排",
                frequency: "common",
              },
            ],
            casualVersion:
              "Sending it electronically now. Should be ready in two to four hours. Pharmacy'll text you when it's ready. Oh, one more thing — you're due for a blood test to check your kidney function and potassium. This med can mess with those. Can you hit up a lab this week?",
            culturalNote: "美国看病常涉及去第三方检验所化验",
            formalityVariants: {
              casual:
                "Sending it electronically now. Should be ready in two to four hours. Pharmacy'll text you when it's ready. Oh, one more thing — you're due for a blood test to check your kidney function and potassium. This med can mess with those. Can you hit up a lab this week?",
              standard:
                "I'm sending it electronically right now. It should be ready within two to four hours. The pharmacy will text you when it's ready. One more thing — you're due for a blood test to check your kidney function and potassium levels. This medication can affect those. Can you go to a lab this week?",
              formal:
                "I am transmitting the prescription electronically at this moment. It is anticipated to be prepared for collection within two to four hours. The pharmacy will notify you via text message upon its readiness. Furthermore, you are scheduled for a blood test to assess your kidney function and potassium levels, as this medication may influence those parameters. Would you be available to visit a laboratory this week?",
            },
          },
          {
            speaker: "you",
            textEn: "I'll go on Thursday. Where should I go for the blood test?",
            textZh: "我周四去。去哪里抽血？",
            casualVersion: "I'll go Thursday. Where should I go for the blood test?",
            commonMistake: {
              wrong: "Where to draw blood?",
              correct: "Where should I go for the blood test?",
              explanation: '中文“抽血”直译不自然，英文更常用 "blood test" 或 "get my blood drawn"。',
            },
            formalityVariants: {
              casual: "I'll go Thursday. Where should I go for the blood test?",
              standard: "I'll go on Thursday. Where should I go for the blood test?",
              formal:
                "I will attend to it on Thursday. Could you please advise on the appropriate location for the blood test?",
            },
          },
          {
            speaker: "them",
            role: "远程医生",
            textEn:
              "I'll send the lab order to Quest Diagnostics — they have a location near you. Just walk in with your ID and insurance card, no appointment needed. Results usually come back in two to three days, and I'll review them and message you through the app. Any other questions?",
            textZh:
              "我把化验单发到 Quest Diagnostics——你附近有一家。带上身份证和保险卡直接去就行，不需要预约。结果通常两三天出来，我会看完后通过APP给你发消息。还有别的问题吗？",
            keyPhrases: [
              { en: "lab order", zh: "化验单/检验申请" },
              { en: "walk in", zh: "直接去（不用预约）" },
              { en: "results come back", zh: "结果出来" },
              { en: "review", zh: "查看/审阅" },
            ],
            localVariants: {
              "en-US": "I'll send the order to Quest Diagnostics.",
              "en-GB": "I'll arrange a blood test at your local GP surgery.",
              "en-AU": "I'll send a pathology request to your nearest collection centre.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "I'll order it through Quest Diagnostics — there's one near you. Just walk in with your ID and insurance card. Results come back in a couple days and I'll message you through the app. All good?",
                textZh:
                  "我发到 Quest Diagnostics——你附近有一家。带身份证和保险卡直接去就行。结果两三天出来，我通过APP给你发消息。还有别的问题吗？",
                actionHint: "确认实验室地址",
                frequency: "common",
              },
              {
                textEn:
                  "I'm sending the order to Quest — no appointment needed, just show up with your ID. I'll go over the results when they're back and ping you on the app.",
                textZh: "化验单发到 Quest——不用预约，带身份证去就行。结果出来后我看完会在APP上通知你。",
                actionHint: "前往化验室",
                frequency: "common",
              },
            ],
            casualVersion:
              "I'll send the lab order to Quest Diagnostics — they got a spot near ya. Just walk in with your ID and insurance, no appointment needed. Results usually come back in two, three days, and I'll check 'em and message you through the app. Anything else?",
            formalityVariants: {
              casual:
                "I'll send the lab order to Quest Diagnostics — they got a spot near ya. Just walk in with your ID and insurance, no appointment needed. Results usually come back in two, three days, and I'll check 'em and message you through the app. Anything else?",
              standard:
                "I'll send the lab order to Quest Diagnostics — they have a location near you. Just walk in with your ID and insurance card, no appointment needed. Results usually come back in two to three days, and I'll review them and message you through the app. Any other questions?",
              formal:
                "I will transmit the laboratory order to Quest Diagnostics; there is a facility conveniently located in your vicinity. You may proceed there as a walk-in, presenting your identification and insurance card, as an appointment is not required. The results typically become available within two to three business days, whereupon I will review them and communicate with you via the application. Do you have any further inquiries?",
            },
          },
          {
            speaker: "you",
            textEn: "No, that covers everything. Thank you, Dr. Chen. This telemedicine thing is really convenient!",
            textZh: "没有了，都清楚了。谢谢陈医生。远程医疗真的很方便！",
            casualVersion: "Nah, that covers it. Thanks, Dr. Chen. This whole telehealth thing's super convenient!",
            commonMistake: {
              wrong: "No, that's everything. Thank you, Dr. Chen. This telemedicine is very convenient!",
              correct: "No, that covers everything. Thank you, Dr. Chen. This telemedicine thing is really convenient!",
              explanation: "“covers everything”更地道，“telemedicine thing”口语化表达更自然。",
            },
            formalityVariants: {
              casual: "Nah, that covers it. Thanks, Dr. Chen. This whole telehealth thing's super convenient!",
              standard:
                "No, that covers everything. Thank you, Dr. Chen. This telemedicine thing is really convenient!",
              formal:
                "No, all my questions have been addressed. Thank you, Dr. Chen. I find this telemedicine service to be exceptionally convenient.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 新冠 / 传染病检测 ====================
  {
    id: "medical-covid-testing",
    category: "medical",
    titleZh: "新冠 / 传染病检测",
    titleEn: "COVID / Infectious Disease Testing",
    description: "旅行中需要做新冠或其他传染病检测",
    otherRole: "检测站工作人员 / 药剂师",
    otherRoleIcon: "stethoscope",
    journeyPhase: "daily",
    priority: "likely",
    flows: [
      {
        id: "rapid-test",
        titleZh: "快速检测",
        titleEn: "Getting a Rapid Test",
        description: "在药房或检测点做快速抗原检测",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi, I need a COVID test. My flight back to China requires a negative result. Do you offer rapid tests?",
            textZh: "你好，我需要做新冠检测。回中国的航班要求阴性结果。你们有快速检测吗？",
            culturalNote: "美国服务场景下，直接说明来意是很自然的，无需过多客套。",
            casualVersion: "Hey, need a COVID test. Flight back to China needs a negative result. Got rapid tests?",
            commonMistake: {
              wrong: "I need to do a COVID test.",
              correct: "I need a COVID test.",
              explanation: "中文“做检测”常直译成“do a test”, 英文多用“get/take a test”或“a test”。",
            },
            formalityVariants: {
              casual: "Hey, need a COVID test. Flight to China needs a negative. You guys do rapid tests?",
              standard:
                "Hi, I need a COVID test. My flight back to China requires a negative result. Do you offer rapid tests?",
              formal:
                "Good morning/afternoon, I require a COVID-19 test. My international flight to China necessitates a negative result. Do you provide rapid testing services?",
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn:
              "Yes, we offer rapid antigen tests. Results are ready in 15 minutes. It's $25 without insurance. Do you need an official printed certificate, or is a digital result OK?",
            textZh:
              "有的，我们有快速抗原检测。15分钟出结果。没有保险的话25美元。你需要正式打印的证明还是电子结果就行？",
            commonMistake: {
              wrong: "It costs 25 dollars if no insurance. Do you want print certificate or electronic result is okay?",
              correct: "It costs $25 if you don't have insurance. Do you need a formal printed certificate or is an electronic result okay?",
              explanation: "英文中常用 'if you don't have insurance' 而非 'if no insurance'。 'want' 不如 'need' 或 'do you prefer' 礼貌自然。",
            },
            keyPhrases: [
              { en: "rapid antigen test", zh: "快速抗原检测" },
              { en: "certificate", zh: "证明/报告" },
              { en: "digital result", zh: "电子结果" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep, we do rapid tests — 15 minutes for results. It's 25 bucks if you're paying out of pocket. You want a paper certificate or is a digital one fine?",
                textZh: "有的，快速检测——15分钟出结果。自费的话25美元。你要纸质证明还是电子版就行？",
                actionHint: "说明证明要求",
                frequency: "common",
              },
              {
                textEn:
                  "We've got rapid antigen tests available. Results in about 15 minutes, $25 without insurance. Do you need an official certificate for travel?",
                textZh: "我们有快速抗原检测。大约15分钟出结果，没保险25美元。你需要旅行用的正式证明吗？",
                actionHint: "确认证明格式",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, we got rapid antigen tests. Results in 15. Twenty-five bucks without insurance. Need a printed certificate, or is digital fine?",
            formalityVariants: {
              casual:
                "Yep, rapid antigen tests. Results in 15. $25 without insurance. Need a printout or is digital cool?",
              standard:
                "Yes, we offer rapid antigen tests. Results are ready in 15 minutes. It's $25 without insurance. Do you need an official printed certificate, or is a digital result OK?",
              formal:
                "Yes, we do provide rapid antigen testing services. Results are typically available within 15 minutes. The cost is $25 if not covered by insurance. Could you please specify if you require an official printed certificate, or if a digital result would suffice?",
            },
          },
          {
            speaker: "you",
            textEn: "I need a printed certificate with a QR code. My airline specifically asked for that.",
            textZh: "需要有二维码的打印证明。航空公司特别要求的。",
            commonMistake: {
              wrong: "I need print certificate with QR code. My airline specially asked that.",
              correct: "I need a printed certificate with a QR code. My airline specifically asked for that.",
              explanation: "需要冠词 'a'。'specifically' 是更自然的副词。'ask for something' 是固定搭配。",
            },
            casualVersion: "Gonna need a printed cert with a QR code. Airline specifically wants that.",
            formalityVariants: {
              casual: "Gonna need a printed cert with a QR code. Airline specifically wants that.",
              standard: "I need a printed certificate with a QR code. My airline specifically asked for that.",
              formal:
                "I require a printed certificate that includes a QR code. My airline has specifically mandated this requirement.",
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn:
              "No problem — we can provide that. I'll need your passport and flight information. The test is a nasal swab. Have you done one before?",
            textZh: "没问题——可以提供。需要你的护照和航班信息。检测是鼻拭子。以前做过吗？",
            commonMistake: {
              wrong: "No problem, we can provide. I need your passport and flight information. Test is nasal swab. Did you do before?",
              correct: "No problem — we can provide that. I'll need your passport and flight information. The test is a nasal swab. Have you had one before?",
              explanation: "'provide that' 更完整。'I'll need' 比 'I need' 委婉。'The test is a nasal swab' 更地道。 'Have you had one before?' 是正确时态和表达。",
            },
            keyPhrases: [
              { en: "nasal swab", zh: "鼻拭子" },
              { en: "flight information", zh: "航班信息" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure thing — just bring your passport and flight details. The test is a nasal swab. Have you done one before, or is this your first time?",
                textZh: "没问题——把护照和航班信息给我。检测是鼻拭子。以前做过吗？",
                actionHint: "提供证件",
                frequency: "common",
              },
              {
                textEn:
                  "We can do that. I'll need to see your passport and know your flight info. It's just a quick nasal swab — pretty straightforward.",
                textZh: "可以的。需要看你的护照和航班信息。就是一个快速鼻拭子——很简单。",
                actionHint: "出示护照",
                frequency: "common",
              },
            ],
            casualVersion:
              "No problem, we can do that. Just need your passport and flight info. It's a nasal swab. Done one before?",
            formalityVariants: {
              casual: "Sure, can provide that. Just need your passport, flight info. It's a nasal swab. You done one?",
              standard:
                "No problem — we can provide that. I'll need your passport and flight information. The test is a nasal swab. Have you done one before?",
              formal:
                "Certainly, we are able to provide that. I will require your passport and flight itinerary. The procedure involves a nasal swab. Have you undergone this type of test previously?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I've done it before. Go ahead.",
            textZh: "做过。来吧。",
            commonMistake: {
              wrong: "Yes, I did. You can start.",
              correct: "Yes, I have. Go ahead.",
              explanation: "对 'Have you...' 问句的肯定回答是 'I have'。'Go ahead' 是自然地表达 '请开始'。",
            },
            casualVersion: "Yep, done it. Go for it.",
            formalityVariants: {
              casual: "Yep, done it. Go for it.",
              standard: "Yes, I've done it before. Go ahead.",
              formal: "Yes, I have undergone this procedure previously. Please proceed.",
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn:
              "OK, tilt your head back slightly... I'm going to insert the swab into each nostril for about 5 seconds. It might feel a bit uncomfortable. Ready? ... All done. Please have a seat in the waiting area. Your result will be ready in about 15 minutes.",
            textZh:
              "好的，头稍微往后仰……我要把拭子伸进每个鼻孔大约5秒。可能会有点不舒服。准备好了吗？……好了。请在等候区坐一下。大约15分钟出结果。",
            commonMistake: {
              wrong: "Okay, head slightly back... I insert the swab into each nostril about 5 seconds. Maybe a little uncomfortable. Ready? ...Done. Please sit in waiting area. About 15 minutes result.",
              correct: "OK, tilt your head back slightly... I'm going to insert the swab into each nostril for about 5 seconds. It might be a little uncomfortable. Are you ready? ...All done. Please have a seat in the waiting area. Results will be ready in about 15 minutes.",
              explanation: "用进行时 'I'm going to insert' 和 'might be' 表示预测。'All done' 是完成时的自然表达。'have a seat' 和 'results will be ready' 是标准说法。",
            },
            keyPhrases: [
              { en: "tilt your head back", zh: "头往后仰" },
              { en: "nostril", zh: "鼻孔" },
              { en: "waiting area", zh: "等候区" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Alright, lean your head back a bit... I'm gonna swab each nostril for about five seconds. Not the most pleasant thing, but it's quick. Ready? ... Done! Go sit in the waiting area — results in 15.",
                textZh:
                  "好的，头往后仰一点……我在每个鼻孔里擦大约五秒。不太舒服但很快。准备好了吗？……好了！去等候区坐着——15分钟出结果。",
                actionHint: "等待结果",
                frequency: "common",
              },
              {
                textEn:
                  "Head back for me... Quick swab in each nostril, five seconds each side. Might tickle a bit. And... all done! Take a seat, we'll have your results shortly.",
                textZh: "头往后仰……每个鼻孔快速擦一下，每边五秒。可能有点痒痒。好了……完成！坐一下，很快出结果。",
                actionHint: "在等候区等待",
                frequency: "common",
              },
            ],
            casualVersion:
              "Okay, head back a little... gonna insert the swab in each nostril for like 5 seconds. Might be a bit uncomfortable. Ready? ... All done. Just grab a seat in the waiting area. Result'll be ready in about 15.",
            formalityVariants: {
              casual:
                "Alright, head back a bit... gonna put the swab in each nostril for like 5 secs. Might be a little weird. Ready? ... Done. Just wait in the waiting area. Results in 15.",
              standard:
                "OK, tilt your head back slightly... I'm going to insert the swab into each nostril for about 5 seconds. It might feel a bit uncomfortable. Ready? ... All done. Please have a seat in the waiting area. Your result will be ready in about 15 minutes.",
              formal:
                "Alright, could you please tilt your head back slightly? I will now insert the swab into each nostril for approximately five seconds. This may cause a mild sensation of discomfort. Are you prepared? ... The procedure is complete. Kindly take a seat in our waiting area. Your results will be processed and available within approximately 15 minutes.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. What if it comes back positive?",
            textZh: "谢谢。如果是阳性怎么办？",
            commonMistake: {
              wrong: "Thank you. What if it is positive?",
              correct: "Thank you. What if it comes back positive?",
              explanation: "'comes back positive' 是描述测试结果的常用表达，比 'is positive' 更自然。",
            },
            casualVersion: "Thanks. What if it's positive?",
            formalityVariants: {
              casual: "Thanks. What if it's positive?",
              standard: "Thank you. What if it comes back positive?",
              formal: "Thank you. In the event of a positive result, what protocol should I follow?",
            },
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn:
              "If it's positive, you should isolate and contact your airline about rebooking. We can also refer you to a telemedicine doctor who can prescribe antiviral medication if needed. You may also want to check your travel insurance for coverage of trip delays.",
            textZh:
              "如果阳性，你应该自我隔离并联系航空公司改签。我们也可以帮你转介远程医生，需要的话可以开抗病毒药。你可能还要查一下旅行保险是否覆盖行程延误。",
            commonMistake: {
              wrong: "If positive, you should self-isolate and contact airline to change ticket. We also can help you refer remote doctor, can open antiviral medicine if need. You may also check travel insurance whether cover trip delay.",
              correct: "If it comes back positive, you should self-isolate and contact your airline to rebook. We can also refer you to a telemedicine doctor who can prescribe antivirals if needed. You may also want to check if your travel insurance covers trip delays.",
              explanation: "'If it comes back positive' 是完整表达。'rebook' 比 'change ticket' 更地道。 'refer you to a doctor' 是标准说法。'prescribe' 用药。'if needed' 更自然。'check if/whether' 是正确用法。",
            },
            keyPhrases: [
              { en: "isolate", zh: "自我隔离" },
              { en: "rebooking", zh: "改签" },
              { en: "antiviral medication", zh: "抗病毒药" },
              { en: "trip delays", zh: "行程延误" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "If it comes back positive, you'll need to isolate and call your airline about changing your flight. We can hook you up with a telemedicine doc for antivirals if needed. Might wanna check your travel insurance about delays too.",
                textZh:
                  "如果阳性，你需要自我隔离并联系航空公司改签。需要的话我们可以帮你联系远程医生开抗病毒药。也建议查一下旅行保险是否覆盖延误。",
                actionHint: "做好两手准备",
                frequency: "common",
              },
              {
                textEn:
                  "A positive result means you should self-isolate and rebook your flight. We can refer you to a telehealth doctor who can prescribe treatment. Also double-check your travel insurance for trip delay coverage.",
                textZh:
                  "阳性的话你应该自我隔离并改签航班。我们可以转介远程医生开处方。也查一下旅行保险有没有行程延误赔偿。",
                actionHint: "了解阳性应对方案",
                frequency: "common",
              },
            ],
            casualVersion:
              "If it's positive, you gotta isolate, then hit up your airline about rebooking. We can also connect you with a telemedicine doc for antivirals if you need 'em. And maybe check your travel insurance for trip delays.",
            formalityVariants: {
              casual:
                "If it's positive, isolate, hit up your airline for rebooking. We can link you to a telemedicine doc for antivirals if needed. Also, check your travel insurance for trip delays.",
              standard:
                "If it's positive, you should isolate and contact your airline about rebooking. We can also refer you to a telemedicine doctor who can prescribe antiviral medication if needed. You may also want to check your travel insurance for coverage of trip delays.",
              formal:
                "Should the result be positive, it is advised that you self-isolate and contact your airline to arrange rebooking. Furthermore, we can facilitate a referral to a telemedicine physician capable of prescribing antiviral medication, if deemed necessary. You might also consider reviewing your travel insurance policy regarding coverage for potential trip delays.",
            },
          },
        ],
      },
      {
        id: "pcr-test",
        titleZh: "PCR核酸检测",
        titleEn: "PCR Test at a Lab",
        description: "需要更正式的PCR核酸检测报告",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "My destination requires a PCR test, not just a rapid test. Where can I get a PCR test with results within 24 hours?",
            textZh: "目的地要求PCR核酸检测，不只是快速检测。哪里可以做24小时内出结果的PCR？",
            casualVersion:
              "My destination needs a PCR, not just a rapid test. Where can I get one with results in 24 hours?",
            commonMistake: {
              wrong: "My destination requires PCR test.",
              correct: "My destination requires a PCR test.",
              explanation: "test 前需加冠词，且 require 在口语中常被 need 替代",
            },
            formalityVariants: {
              casual: "Need a PCR, not a rapid. Where can I get results in 24 hours?",
              standard:
                "My destination requires a PCR test, not just a rapid test. Where can I get a PCR test with results within 24 hours?",
              formal:
                "My travel destination mandates a PCR test, as opposed to a rapid antigen test. Could you please direct me to a facility where I can obtain PCR test results within a 24-hour timeframe?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "We partner with LabCorp. They offer expedited PCR results in 12 to 24 hours. The cost is $150 for the rush service. Standard processing is 2 to 3 days for $85. Which would you prefer?",
            textZh:
              "我们和LabCorp合作。他们提供加急PCR，12到24小时出结果。加急150美元。标准处理2到3天，85美元。你要哪种？",
            casualVersion: "We team up with LabCorp. They got rush PCR results in 12-24 hours. That's $150. Standard's 2-3 days for $85. Which one do you want?",
            commonMistake: {
              wrong: "We cooperate with LabCorp. They offer rush PCR results 12 to 24 hours. Price is $150 for rush service. Standard is 2 to 3 days for $85. Which one do you choose?",
              correct: "We partner with LabCorp. They offer expedited PCR results in 12 to 24 hours. The cost is $150 for the rush service. Standard processing is 2 to 3 days for $85. Which would you prefer?",
              explanation: "'partner with' 比 'cooperate with' 更自然。'expedited' 或 'rush' 是常用词。'The cost is' 更完整。'Which would you prefer?' 更礼貌。",
            },
            formalityVariants: {
              casual: "We team up with LabCorp. They got rush PCR results in 12-24 hours. That's $150. Standard's 2-3 days for $85. Which one do you want?",
              standard: "We partner with LabCorp. They offer expedited PCR results in 12 to 24 hours. The cost is $150 for the rush service. Standard processing is 2 to 3 days for $85. Which would you prefer?",
              formal: "We maintain a partnership with LabCorp. They provide expedited PCR results within a timeframe of 12 to 24 hours. The charge for this rush service is $150. Standard processing typically takes 2 to 3 days and costs $85. Which option would you prefer?",
            },
            keyPhrases: [
              { en: "expedited", zh: "加急" },
              { en: "rush service", zh: "加急服务" },
              { en: "standard processing", zh: "标准处理" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We work with LabCorp — they can do expedited PCR, results in 12 to 24 hours. That's $150. Or there's the regular turnaround, 2 to 3 days, for $85. What works for your timeline?",
                textZh:
                  "我们和 LabCorp 合作——他们可以做加急PCR，12到24小时出结果。150美元。普通的2到3天，85美元。哪个适合你的时间？",
                actionHint: "选择加急或标准",
                frequency: "common",
              },
              {
                textEn:
                  "Our lab partner LabCorp has a rush option — 12 to 24 hours for 150 dollars. Standard is 85 bucks but takes a couple days. Which do you need?",
                textZh:
                  "我们的合作实验室 LabCorp 有加急选项——12到24小时，150美元。标准的85美元但要两三天。你需要哪个？",
                actionHint: "根据航班选择",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I'll take the rush service. My flight is in 36 hours. Will the report include the lab's official letterhead and my passport number?",
            textZh: "我要加急的。我的航班在36小时后。报告上会有实验室的正式抬头和我的护照号码吗？",
            casualVersion: "I'll take the rush one. My flight's in 36 hours. Will the report have the lab's official letterhead and my passport number?",
            commonMistake: {
              wrong: "I want the expedited one. My flight is after 36 hours. Will report have lab official letterhead and my passport number?",
              correct: "I'll take the expedited one. My flight is in 36 hours. Will the report have the lab's official letterhead and my passport number on it?",
              explanation: "'I'll take' 比 'I want' 更自然。'in 36 hours' 表示未来时间。'The report' 需要冠词。'on it' 使句子更完整。",
            },
            formalityVariants: {
              casual: "I'll take the rush one. My flight's in 36 hours. Will the report have the lab's official letterhead and my passport number?",
              standard: "I'll take the expedited one. My flight is in 36 hours. Will the report have the lab's official letterhead and my passport number on it?",
              formal: "I would prefer the expedited option, please. My flight departs in 36 hours. Will the report include the laboratory's official letterhead and my passport number?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "Yes, the report will have the lab's letterhead, your full name as it appears on your passport, your date of birth, passport number, sample collection time, and result time. It meets international travel requirements. You'll receive it by email, and we can also print a hard copy.",
            textZh:
              "会的，报告上有实验室抬头、护照上的全名、出生日期、护照号码、采样时间和出结果时间。符合国际旅行要求。会发到你邮箱，我们也可以打印纸质版。",
            casualVersion: "Yep, the report'll have their letterhead, your full name (like on your passport), birth date, passport number, when you got tested, and when results came out. Totally good for international travel. We'll email it, and we can print a copy too.",
            commonMistake: {
              wrong: "Yes, report will have lab letterhead, full name on passport, birth date, passport number, collection time and result time. Fits international travel requirements. Will send to your email, we also can print paper version.",
              correct: "Yes, the report will have the lab's letterhead, your full name as on your passport, date of birth, passport number, collection time, and result time. It meets international travel requirements. It will be emailed to you, and we can also print a hard copy.",
              explanation: "需要冠词 'the'。'full name as on your passport' 是更自然的表达。'date of birth' 更常用。'It meets' 是正确主谓。'emailed to you' 和 'hard copy' 是标准说法。",
            },
            formalityVariants: {
              casual: "Yep, the report'll have their letterhead, your full name (like on your passport), birth date, passport number, when you got tested, and when results came out. Totally good for international travel. We'll email it, and we can print a copy too.",
              standard: "Yes, the report will have the lab's letterhead, your full name as on your passport, date of birth, passport number, collection time, and result time. It meets international travel requirements. It will be emailed to you, and we can also print a hard copy.",
              formal: "Yes, the report will indeed feature the laboratory's official letterhead, your full name precisely as it appears on your passport, your date of birth, passport number, the specimen collection time, and the result issuance time. This documentation fully complies with international travel regulations. It will be dispatched to your email address, and we can also provide a printed hard copy upon request.",
            },
            keyPhrases: [
              { en: "letterhead", zh: "正式抬头" },
              { en: "sample collection time", zh: "采样时间" },
              { en: "hard copy", zh: "纸质版" },
              { en: "international travel requirements", zh: "国际旅行要求" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep, it'll have everything — lab letterhead, your name as it is on your passport, DOB, passport number, collection time, result time. Meets all the international travel reqs. We'll email it and can print a hard copy too.",
                textZh:
                  "会的，什么都有——实验室抬头、护照上的姓名、出生日期、护照号、采样时间、出结果时间。符合所有国际旅行要求。邮件发送，也可以打印纸质版。",
                actionHint: "确认需要两种格式",
                frequency: "common",
              },
              {
                textEn:
                  "The full report includes the lab letterhead, passport details, timestamps — the whole thing. It's accepted for international travel. You'll get it by email, and we can print one out for you too.",
                textZh:
                  "完整报告包括实验室抬头、护照信息、时间戳——全部都有。国际旅行认可的。邮件发给你，也可以帮你打印一份。",
                actionHint: "索取两种格式",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. I'll need both email and a printed copy. Let's do it.",
            textZh: "太好了。邮件和纸质版都要。开始吧。",
            casualVersion: "Sweet. I'll take both the email and the printout. Let's do it.",
            commonMistake: {
              wrong: "Perfect. I want email and paper copy. Start it.",
              correct: "Perfect. I'll take both the email and the hard copy. Let's do it.",
              explanation: "'I'll take' 更自然。'hard copy' 比 'paper copy' 更常用。'Let's do it' 是更自然的开始表达。",
            },
            formalityVariants: {
              casual: "Sweet. I'll take both the email and the printout. Let's do it.",
              standard: "Perfect. I'll take both the email and the hard copy. Let's do it.",
              formal: "Excellent. I would appreciate receiving both the electronic copy via email and a physical hard copy. We may proceed.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 处方药续方 ====================
  // ==================== 过敏专科 ====================
  {
    id: "medical-allergy",
    category: "medical",
    titleZh: "过敏反应就诊",
    titleEn: "Allergy Specialist Visit",
    description: "旅行中出现过敏反应，需要看过敏专科或紧急处理",
    otherRole: "过敏科医生 / 护士",
    otherRoleIcon: "stethoscope",
    journeyPhase: "daily",
    priority: "likely",
    flows: [
      {
        id: "allergic-reaction",
        titleZh: "突发过敏反应",
        titleEn: "Sudden Allergic Reaction",
        description: "吃了某种食物后出现过敏反应",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "I think I'm having an allergic reaction. My lips are swelling and I feel itchy all over. I ate shrimp about 30 minutes ago.",
            textZh: "我好像过敏了。嘴唇肿了，浑身痒。大约30分钟前吃了虾。",
            casualVersion:
              "Think I'm having an allergic reaction. Lips are swelling, and I'm super itchy all over. Had shrimp maybe 30 minutes ago.",
            commonMistake: {
              wrong: "I am allergic now.",
              correct: "I'm having an allergic reaction.",
              explanation: "“I am allergic now” 听起来不自然，“having an allergic reaction” 是更地道的表达。",
            },
            formalityVariants: {
              casual:
                "Think I'm having an allergic reaction. Lips are swelling and I'm super itchy. Had shrimp like 30 min ago.",
              standard:
                "I think I'm having an allergic reaction. My lips are swelling and I feel itchy all over. I ate shrimp about 30 minutes ago.",
              formal:
                "I believe I am experiencing an acute allergic reaction. My labial region is becoming edematous, and I am experiencing generalized pruritus. I consumed shrimp approximately 30 minutes prior.",
            },
          },
          {
            speaker: "them",
            role: "护士",
            textEn:
              "OK, I need you to stay calm. Are you having any trouble breathing? Any tightness in your throat or chest?",
            textZh: "好的，保持冷静。有呼吸困难吗？喉咙或胸口有发紧的感觉吗？",
            commonMistake: {
              wrong: "Do you have trouble breathing? / Have or not have trouble breathing?",
              correct: "Are you having any trouble breathing?",
              explanation: "询问进行中的症状时用 `Are you having` 更自然。",
            },
            keyPhrases: [
              { en: "trouble breathing", zh: "呼吸困难" },
              { en: "tightness", zh: "发紧/紧绷" },
              { en: "throat", zh: "喉咙" },
              { en: "chest", zh: "胸口" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Take a deep breath for me. Can you breathe OK? Any tightness in your throat or chest? That's the first thing we need to check.",
                textZh: "深呼吸一下。能正常呼吸吗？喉咙或胸口有发紧吗？这是我们首先要确认的。",
                actionHint: "检查自己的呼吸",
                frequency: "common",
              },
              {
                textEn:
                  "Stay calm, I'm right here. The most important question — is your breathing OK? Any wheezing or throat tightness?",
                textZh: "别慌，我就在这里。最重要的问题——呼吸正常吗？有喘息或喉咙发紧吗？",
                actionHint: "描述呼吸状况",
                frequency: "common",
              },
            ],
            casualVersion: "Okay, gotta stay calm. Any trouble breathing? Throat or chest feel tight?",
            formalityVariants: {
              casual: "Alright, stay calm. Breathing okay? Any throat or chest tightness?",
              standard:
                "Okay, I need you to stay calm. Are you having any trouble breathing? Any tightness in your throat or chest?",
              formal:
                "Alright, it is imperative that you remain calm. Are you experiencing any dyspnea? Do you feel any constriction in your laryngeal or thoracic region?",
            },
          },
          {
            speaker: "you",
            textEn: "No, I can breathe OK. It's mostly the swelling and itching. I've also got hives on my arms.",
            textZh: "没有，呼吸还好。主要是肿和痒。手臂上还起了荨麻疹。",
            vocabNotes: {
              hives: {
                meaningInContext: "荨麻疹——皮肤上突起的红色风团",
                similarUsage: "I broke out in hives after eating peanuts.",
              },
            },
            casualVersion: "Nah, breathing's fine. Mostly just swelling and super itchy. Got hives on my arms too.",
            commonMistake: {
              wrong: "My breath is okay.",
              correct: "I can breathe okay.",
              explanation: "“My breath is okay” 听起来不自然，“I can breathe okay” 表达呼吸功能正常。",
            },
            formalityVariants: {
              casual: "Nah, breathing's fine. Mostly swelling and super itchy. Got hives on my arms too.",
              standard: "No, I can breathe okay. It's mostly the swelling and itching. I've also got hives on my arms.",
              formal:
                "No, my respiratory function is unimpaired. The primary symptoms are edema and pruritus. Furthermore, I have developed urticaria on my upper extremities.",
            },
          },
          {
            speaker: "them",
            role: "护士",
            textEn:
              "I'm going to give you an antihistamine — Benadryl — right away. That should help with the swelling and itching. Have you ever had a shellfish allergy before?",
            textZh: "我先给你一片抗组胺药——苯海拉明——马上吃。能缓解肿胀和瘙痒。你以前对贝壳类海鲜过敏过吗？",
            commonMistake: {
              wrong: "Have you ever allergic to shellfish? / You allergic to shellfish before?",
              correct: "Have you ever been allergic to shellfish before?",
              explanation: "完整的句式是 `be allergic to`，需要 `been`。`before` 通常用于询问过去经验。",
            },
            keyPhrases: [
              { en: "antihistamine", zh: "抗组胺药" },
              { en: "Benadryl", zh: "苯海拉明（美国常见的抗过敏药品牌名）" },
              { en: "shellfish allergy", zh: "贝壳类海鲜过敏" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I'm giving you Benadryl right now — it'll help with the swelling and the itch. Have you ever had a reaction to shellfish before?",
                textZh: "我现在给你一片苯海拉明——能缓解肿胀和瘙痒。你以前对贝壳类海鲜过敏过吗？",
                actionHint: "回忆过敏史",
                frequency: "common",
              },
              {
                textEn:
                  "Let me get you some Benadryl right away. That should bring down the swelling and stop the itching. Quick question — any prior shellfish allergy?",
                textZh: "我马上给你拿苯海拉明。应该能消肿止痒。快问一下——以前对贝壳类过敏过吗？",
                actionHint: "告知过敏史",
                frequency: "common",
              },
            ],
            casualVersion:
              "Gonna give you an antihistamine—Benadryl—right now. Should help with the swelling and itching. Ever had a shellfish allergy before?",
            culturalNote: "苯海拉明是美国常见的非处方抗过敏药品牌。",
            formalityVariants: {
              casual:
                "Gonna give you a Benadryl right away. That'll help with the swelling and itching. Ever been allergic to shellfish?",
              standard:
                "I'm going to give you an antihistamine — Benadryl — right away. That should help with the swelling and itching. Have you ever had a shellfish allergy before?",
              formal:
                "I will administer an antihistamine, specifically Benadryl, immediately. This should alleviate the edema and pruritus. Have you previously experienced an allergic reaction to shellfish?",
            },
          },
          {
            speaker: "you",
            textEn:
              "I've never had this reaction before. This is my first time eating shrimp in the US — maybe a different species?",
            textZh: "以前从来没过敏过。这是第一次在美国吃虾——可能品种不同？",
            casualVersion:
              "Never had this kinda reaction before. First time eating shrimp here in the US—maybe a different species?",
            commonMistake: {
              wrong: "This is my first time to eat shrimp.",
              correct: "This is my first time eating shrimp.",
              explanation:
                "“This is my first time to do something” 是中式英语，应说 “This is my first time doing something”。",
            },
            formalityVariants: {
              casual:
                "Never had this reaction before. First time eating shrimp here in the US—maybe it's a different type?",
              standard:
                "I've never had this reaction before. This is my first time eating shrimp in the US — maybe a different species?",
              formal:
                "I have not previously experienced such a reaction. This is my inaugural consumption of shrimp in the United States — could it be a divergent species?",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "It's possible — some people react to specific types of shellfish. I'm also going to prescribe an EpiPen for you to carry. If you ever feel your throat closing or have trouble breathing after eating, use it immediately and call 911. This is important.",
            textZh:
              "有可能——有些人只对特定种类的贝类过敏。我还会给你开一支肾上腺素笔随身带着。如果以后吃东西后感觉喉咙发紧或呼吸困难，立刻使用然后打911。这很重要。",
            commonMistake: {
              wrong: "Possible—some people only allergic to specific types of shellfish.",
              correct: "It's possible—some people are only allergic to specific types of shellfish.",
              explanation: "`It's possible` 更地道；`are allergic to` 是正确用法。",
            },
            keyPhrases: [
              { en: "EpiPen", zh: "肾上腺素笔（急救用自动注射器）" },
              { en: "throat closing", zh: "喉咙发紧/闭合" },
              { en: "call 911", zh: "打911急救电话" },
            ],
            culturalNote:
              "在美国，EpiPen是过敏患者常备的急救器具。如果你有严重过敏史，建议出国前咨询医生是否需要携带。",
            alternativeExpressions: [
              {
                textEn:
                  "Could be — allergies to specific shellfish types happen. I'm going to prescribe you an EpiPen to keep on you. If you ever feel your throat closing or can't breathe after eating, use it and dial 911. This is serious.",
                textZh:
                  "有可能——对特定种类的贝壳类过敏是存在的。我给你开一支EpiPen随身带着。如果以后吃东西后感觉喉咙闭合或不能呼吸，立刻使用然后打911。这很严重。",
                actionHint: "认真对待过敏",
                frequency: "common",
              },
              {
                textEn:
                  "That's definitely possible. Some people are fine with one type of shrimp but react to another. I'm writing you a script for an EpiPen — carry it everywhere. If you ever have trouble breathing after eating, use it immediately and call 911.",
                textZh:
                  "完全有可能。有人对一种虾没事但对另一种过敏。我给你开EpiPen——随身带。如果吃东西后呼吸困难，立刻使用并打911。",
                actionHint: "随身携带EpiPen",
                frequency: "common",
              },
            ],
            casualVersion:
              "Could be. Some folks only react to certain shellfish. I'm also gonna prescribe an EpiPen for you to carry. If your throat ever feels like it's closing up or you can't breathe after eating, use it right away and call 911. Super important.",
            formalityVariants: {
              casual:
                "Could be. Some people react to specific types. I'm also getting you an EpiPen. If your throat ever closes up or you can't breathe after eating, use it ASAP and call 911. Seriously important.",
              standard:
                "It's possible — some people react to specific types of shellfish. I'm also going to prescribe an EpiPen for you to carry. If you ever feel your throat closing or have trouble breathing after eating, use it immediately and call 911. This is important.",
              formal:
                "That is a possibility — certain individuals exhibit sensitivities to particular species of shellfish. I will also be prescribing an EpiPen for your personal carry. Should you ever experience laryngeal constriction or respiratory distress post-ingestion, administer the auto-injector immediately and contact emergency services via 911. This directive is of critical importance.",
            },
          },
        ],
      },
      {
        id: "allergy-testing",
        titleZh: "过敏原检测",
        titleEn: "Allergy Testing",
        description: "到过敏科做过敏原检测",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "I've been sneezing nonstop since I arrived here. I think it might be seasonal allergies. Can I get tested to find out what I'm allergic to?",
            textZh: "来了之后一直不停打喷嚏。我觉得可能是花粉过敏。能做过敏原检测吗？",
            casualVersion:
              "Man, I've been sneezing nonstop since I got here. Think it might be seasonal allergies. Can I get a test to figure out what's up?",
            commonMistake: {
              wrong: "I want to do allergy test.",
              correct: "Can I get tested for allergies?",
              explanation: "中文常说“做测试”，但在英文里“get tested”或“get a test”更自然。",
            },
            formalityVariants: {
              casual: "Been sneezing like crazy since I got here. Probably seasonal allergies. Can I get a test?",
              standard:
                "I've been sneezing nonstop since I arrived here. I think it might be seasonal allergies. Can I get tested to find out what I'm allergic to?",
              formal:
                "Good morning/afternoon, I've been experiencing persistent sneezing since my arrival. I suspect I may be suffering from seasonal allergies. Could I inquire about the possibility of undergoing allergy testing to identify the specific allergens?",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "Yes, we can do a skin prick test. We'll apply small amounts of common allergens to your forearm and see which ones cause a reaction. It takes about 30 minutes for the full test. You'll need to stop taking antihistamines at least 3 days before the test.",
            textZh:
              "可以，我们可以做皮肤点刺试验。在你前臂上滴少量常见过敏原，看哪些会引起反应。全套测试大约30分钟。测试前至少停用抗组胺药3天。",
            commonMistake: {
              wrong: "We can do a skin prick test. We will put small drops of common allergens on your forearm to see what cause a reaction.",
              correct: "We can do a skin prick test. We'll put small drops of common allergens on your forearm to see which ones cause a reaction.",
              explanation: "`which ones` 更自然地指代 `allergens`。",
            },
            casualVersion: "Yep, we can do a skin prick test. We'll just put tiny bits of common allergens on your forearm and see what reacts. Takes about 30 mins for the whole thing. Just gotta stop taking antihistamines at least 3 days before.",
            formalityVariants: {
              casual: "Yep, we can do a skin prick test. We'll put little bits of allergens on your arm and see what reacts. Takes about 30 mins. Just stop antihistamines 3 days before.",
              standard: "Yes, we can do a skin prick test. We'll apply small amounts of common allergens to your forearm and see which ones cause a reaction. It takes about 30 minutes for the full test. You'll need to stop taking antihistamines at least 3 days before the test.",
              formal: "Certainly, we can perform a skin prick test. This procedure involves the precise application of minute quantities of common allergens to your forearm to observe for any localized reactions. The entire test typically requires approximately 30 minutes to complete. It is imperative that you discontinue the use of any antihistamine medications for a minimum of three days prior to the scheduled test.",
            },
            keyPhrases: [
              { en: "skin prick test", zh: "皮肤点刺试验" },
              { en: "allergens", zh: "过敏原" },
              { en: "forearm", zh: "前臂" },
              { en: "reaction", zh: "反应" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep, we do a skin prick test — little drops of common allergens on your arm, then we see what reacts. Takes about 30 minutes total. Just make sure you haven't taken any antihistamines in the last three days.",
                textZh:
                  "可以做皮肤点刺试验——在你手臂上滴常见过敏原，看哪些有反应。总共大约30分钟。确保最近三天没吃抗过敏药。",
                actionHint: "确认停药时间",
                frequency: "common",
              },
              {
                textEn:
                  "We can test you right here. It's called a skin prick test — we put tiny amounts of allergens on your forearm and see what flares up. Quick and pretty painless. You just can't be on antihistamines.",
                textZh:
                  "我们可以在这里测。叫皮肤点刺试验——在前臂上放微量过敏原看哪些有反应。很快也基本不痛。就是不能在吃抗过敏药。",
                actionHint: "确认是否可以今天做",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I haven't taken any medication recently. Can we do it today?",
            textZh: "我最近没吃任何药。今天能做吗？",
            casualVersion: "Haven't taken any meds recently. Can we just do it today?",
            commonMistake: {
              wrong: "I haven't eaten any medicine recently.",
              correct: "I haven't taken any medication recently.",
              explanation: "药物用动词“take”或“use”，而不是“eat”。",
            },
            formalityVariants: {
              casual: "No meds for me lately. Can we do it today?",
              standard: "I haven't taken any medication recently. Can we do it today?",
              formal: "I have not consumed any medication recently. Would it be possible to proceed with the test today?",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "Yes, let's do it now. I'll test for the most common ones — tree pollen, grass pollen, ragweed, dust mites, mold, pet dander, and several food allergens. You'll feel small scratches, like a mosquito bite.",
            textZh:
              "可以，现在就做。我测最常见的——树花粉、草花粉、豚草、尘螨、霉菌、宠物皮屑，还有几种食物过敏原。你会感觉到轻微的刺痒，像蚊子叮一样。",
            commonMistake: {
              wrong: "Yes, we do it now. You will feel a slight prickling sensation, like mosquito bite.",
              correct: "Yes, let's do it now. You'll feel a slight prickling sensation, like a mosquito bite.",
              explanation: "`Let's do it now` 更自然地表达建议；`a mosquito bite` 需要冠词。",
            },
            casualVersion: "Yep, let's do it now. I'll test for the usual suspects — tree pollen, grass, ragweed, dust mites, mold, pet dander, and some food stuff. You'll just feel tiny scratches, kinda like a mosquito bite.",
            formalityVariants: {
              casual: "Sure, let's just do it now. I'll test for the common stuff – tree pollen, grass, ragweed, dust mites, mold, pet dander, and some food stuff. You'll just feel little scratches, like a mosquito bite.",
              standard: "Yes, let's do it now. I'll test for the most common ones — tree pollen, grass pollen, ragweed, dust mites, mold, pet dander, and several food allergens. You'll feel small scratches, like a mosquito bite.",
              formal: "Yes, we can proceed immediately. I will be testing for the most prevalent allergens, including tree pollen, grass pollen, ragweed, dust mites, mold, pet dander, and several food allergens. You should expect to experience minor dermal sensations, akin to a mosquito bite.",
            },
            keyPhrases: [
              { en: "tree pollen", zh: "树花粉" },
              { en: "ragweed", zh: "豚草" },
              { en: "dust mites", zh: "尘螨" },
              { en: "pet dander", zh: "宠物皮屑" },
              { en: "mold", zh: "霉菌" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Let's go ahead. I'm testing the usual suspects — tree pollen, grass, ragweed, dust mites, mold, pet dander, and some food allergens. You'll feel little scratches, kinda like tiny mosquito bites.",
                textZh:
                  "开始吧。我测最常见的——树花粉、草、豚草、尘螨、霉菌、宠物皮屑，还有几种食物过敏原。你会感觉到轻微的刺痒，像小蚊子咬一样。",
                actionHint: "放松配合检测",
                frequency: "common",
              },
              {
                textEn:
                  "Perfect, let's do it right now. I'll hit all the major ones — pollen, dust mites, mold, pet dander, some foods. Small scratches on your arm — shouldn't hurt much.",
                textZh:
                  "好的，现在就做。我测所有主要的——花粉、尘螨、霉菌、宠物皮屑、一些食物。手臂上轻微划痕——不怎么疼。",
                actionHint: "等待检测结果",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "OK, I'm ready. After we get the results, what are my treatment options?",
            textZh: "好的，准备好了。结果出来后有什么治疗方案？",
            casualVersion: "Okay, ready. Once we get the results, what are my options for treatment?",
            commonMistake: {
              wrong: "After get results, what is my treatment?",
              correct: "After we get the results, what are my treatment options?",
              explanation: "英文中 “我的治疗” 说法不自然，常用 “治疗方案”；时态和冠词需注意。",
            },
            formalityVariants: {
              casual: "Alright, I'm ready. So, once we get the results, what's next for treatment?",
              standard: "OK, I'm ready. After we get the results, what are my treatment options?",
              formal: "Very well, I am prepared. Following the receipt of the test results, could you please outline the available treatment options?",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "Depending on the results, I can recommend daily antihistamines, nasal corticosteroid sprays, or for long-term relief, immunotherapy — which is allergy shots or sublingual tablets that gradually reduce your sensitivity over time.",
            textZh:
              "根据结果，我会推荐每日服用抗组胺药、鼻用皮质类固醇喷雾，或者长期缓解的话可以做免疫治疗——就是定期打过敏针或舌下含片，逐渐降低你的敏感度。",
            casualVersion: "Depending on the results, I can suggest daily antihistamines, nasal sprays, or for long-term relief, immunotherapy – like shots or tablets to slowly reduce your sensitivity.",
            commonMistake: {
              wrong: "Immunotherapy means shots to make you better slowly.",
              correct: "Immunotherapy — which is allergy shots or sublingual tablets that gradually reduce your sensitivity over time.",
              explanation: "简化后意思不精准，原句解释更专业和完整。",
            },
            formalityVariants: {
              casual: "Based on results, I can suggest daily antihistamines, nasal sprays, or for long-term relief, immunotherapy – like shots or tablets to slowly reduce your sensitivity.",
              standard: "Depending on the results, I can recommend daily antihistamines, nasal corticosteroid sprays, or for long-term relief, immunotherapy — which is allergy shots or sublingual tablets that gradually reduce your sensitivity over time.",
              formal: "Contingent upon the findings, I can recommend daily antihistamines, nasal corticosteroid sprays, or for sustained, long-term amelioration, immunotherapy — specifically, either subcutaneous allergy injections or sublingual tablets designed to progressively attenuate your immunological sensitivity over an extended period.",
            },
            keyPhrases: [
              { en: "nasal corticosteroid spray", zh: "鼻用皮质类固醇喷雾" },
              { en: "immunotherapy", zh: "免疫治疗" },
              { en: "allergy shots", zh: "过敏针" },
              { en: "sublingual tablets", zh: "舌下含片" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Once we see what you're allergic to, we've got options — daily antihistamines, a nasal steroid spray, or for a long-term fix, immunotherapy. That's either allergy shots or tablets under your tongue that dial down your sensitivity over time.",
                textZh:
                  "看到你对什么过敏后，我们有几种选择——每天吃抗组胺药、鼻用类固醇喷雾，或者长期方案的免疫治疗。就是打过敏针或舌下含片，慢慢降低你的敏感度。",
                actionHint: "了解治疗方案",
                frequency: "common",
              },
              {
                textEn:
                  "We've got several routes depending on what lights up. Antihistamines for quick relief, nasal sprays for daily management, or if you want to tackle it long-term, immunotherapy — shots or sublingual tablets.",
                textZh:
                  "取决于哪些有反应，我们有几种方案。抗组胺药快速缓解，鼻腔喷雾日常管理，如果想长期解决，可以做免疫治疗——打针或舌下含片。",
                actionHint: "选择治疗方式",
                frequency: "common",
              },
            ],
          },
        ],
      },
      // --- Flow 3: 过敏管理计划——EpiPen使用、过敏原检测、医疗手环 ---
      {
        id: "allergy-action-plan",
        titleZh: "过敏管理计划",
        titleEn: "Allergy Action Plan Discussion",
        description: "和医生讨论长期过敏管理：EpiPen正确使用、过敏原检测跟进、医疗警示手环",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Doctor, after that allergic reaction last month, I've been really anxious about eating out. I have the EpiPen you prescribed, but honestly, I'm not sure I'd know how to use it in an emergency. Can you walk me through it?",
            textZh: "医生，上个月过敏反应之后我一直很焦虑，不敢外面吃饭。你开的EpiPen我有，但说实话我不确定紧急情况下知道怎么用。能教我一下吗？",
            culturalNote: "在美国，直接告诉医生你的焦虑（anxious）和不确定（not sure）是完全正常的，医生会感谢你的坦诚。中国文化中可能会觉得'我不会用'有点丢人，但在美国医疗场景中，问清楚是负责任的表现。",
            commonMistake: {
              wrong: "I have the EpiPen but I don't know how to use. Can you teach me?",
              correct: "I have the EpiPen, but I'm not sure I'd know how to use it in an emergency. Can you walk me through it?",
              explanation: "'walk me through it'（带我走一遍步骤）比'teach me'更适合这个场景。'I'd know'（条件语气）表示假设的紧急情况。",
            },
            casualVersion: "Doc, after that allergic reaction, I've been super nervous about eating out. Got the EpiPen but not sure I could actually use it if things went bad. Can you show me how?",
            formalityVariants: {
              casual: "Doc, I'm kinda freaked out since that reaction. Got the EpiPen but honestly not sure how to use it. Walk me through it?",
              standard: "Doctor, since the allergic reaction, I've been anxious about eating out. I have the EpiPen but I'm unsure about using it in an emergency. Could you walk me through the steps?",
              formal: "Doctor, following the allergic incident last month, I have been experiencing considerable anxiety regarding dining out. While I do have the prescribed EpiPen, I must confess uncertainty about its proper administration during an emergency. Would you be kind enough to guide me through the procedure?",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "Absolutely — let's practice right now with a trainer pen. Here's the thing: it's designed to be simple. Step one: pull off the blue safety cap — 'blue to the sky.' Step two: press the orange tip firmly against your outer thigh — 'orange to the thigh.' You can inject through clothing, no need to roll up your pants. Hold it for 10 seconds. Step three: call 911 immediately after. Even if you feel better, the reaction can come back. That's called a biphasic reaction.",
            textZh: "当然——我们现在就用训练笔练习一下。关键是：它设计得很简单。第一步：拔掉蓝色安全盖——'蓝色朝上'。第二步：把橙色端用力按在大腿外侧——'橙色对大腿'。可以隔着衣服注射，不需要卷裤腿。按住10秒。第三步：注射后立刻打911。即使感觉好转也要打，因为反应可能会复发。这叫双相反应。",
            keyPhrases: [
              { en: "trainer pen", zh: "训练笔（不含药的练习用）" },
              { en: "blue to the sky", zh: "蓝色朝上（记忆口诀）" },
              { en: "orange to the thigh", zh: "橙色对大腿（记忆口诀）" },
              { en: "outer thigh", zh: "大腿外侧" },
              { en: "biphasic reaction", zh: "双相反应（过敏好转后再次发作）" },
            ],
            alternativeExpressions: [
              {
                textEn: "No problem. I hear this concern a lot. Let me grab a practice pen. The trick is remembering two colors: blue cap off first, then orange end into your thigh. It goes through jeans, no prep needed. Hold 10 seconds. Then 911 — always, even if you feel fine. The reaction can bounce back hours later.",
                textZh: "没问题。这个担心我经常听到。让我拿一支练习笔。诀窍是记住两个颜色：蓝色盖子先拔掉，然后橙色端扎大腿。可以穿着牛仔裤直接扎，不需要准备。按住10秒。然后打911——永远要打，即使你感觉没事。反应可能几小时后复发。",
                actionHint: "记住颜色口诀",
                frequency: "common",
              },
            ],
            culturalNote: "'Blue to the sky, orange to the thigh' 是美国医疗培训中广泛使用的EpiPen记忆口诀。非常朗朗上口。在美国，很多学校老师、教练都会EpiPen使用方法——食物过敏在美国儿童中非常普遍（约8%的儿童有食物过敏）。",
            casualVersion: "For sure — let's practice now with a trainer pen. It's super simple. Blue cap off — 'blue to the sky.' Orange end into your thigh — 'orange to the thigh.' Through clothes, no need to undress. Hold 10 seconds. Then call 911 right away — even if you feel OK. The reaction can come back. That's a biphasic reaction.",
            formalityVariants: {
              casual: "Yeah, let's practice! It's easy. Blue cap off, orange to the thigh. Through your clothes. Hold 10 seconds. Call 911 after. Always. Even if you feel fine.",
              standard: "Of course. Let me get a trainer pen. Step 1: remove the blue cap. Step 2: press the orange end against your outer thigh — through clothing is fine. Hold 10 seconds. Step 3: call 911 immediately, even if symptoms improve, due to the risk of biphasic reaction.",
              formal: "Certainly. Allow me to demonstrate using a training device. The procedure is intentionally straightforward. First, remove the blue safety release by pulling it upward. Second, firmly press the orange tip against the lateral aspect of your thigh — injection through clothing is perfectly acceptable. Maintain pressure for ten seconds. Third, contact emergency services via 911 immediately following administration, even if symptoms appear to be resolving, as there is a significant risk of biphasic anaphylaxis.",
            },
          },
          {
            speaker: "you",
            textEn: "OK — blue to the sky, orange to the thigh. Got it. But wait — does the EpiPen expire? I've had mine for about 8 months now.",
            textZh: "好的——蓝色朝上，橙色对大腿。记住了。等等——EpiPen会过期吗？我这支已经有大约8个月了。",
            culturalNote: "EpiPen 通常有效期为12-18个月。过期的EpiPen药效会降低，紧急时可能救不了命。在美国，EpiPen非常贵（一支可能$300-$600没有保险），但这是过敏患者的救命工具——定期检查有效期很重要。",
            commonMistake: {
              wrong: "Does EpiPen go bad?",
              correct: "Does the EpiPen expire?",
              explanation: "'expire'（过期）是药品的标准用词。'go bad' 通常用于食物。",
            },
            casualVersion: "Blue to the sky, orange to the thigh. Got it. Quick question though — does this thing expire? Had mine like 8 months.",
            formalityVariants: {
              casual: "Blue up, orange in the leg. Got it. Does this thing expire? Had mine 8 months.",
              standard: "Understood — blue to the sky, orange to the thigh. One question: does the EpiPen have an expiration date? I've had mine for about 8 months.",
              formal: "I have committed the procedure to memory. I do have a follow-up question: does the EpiPen have a defined expiration period? Mine has been in my possession for approximately eight months.",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "Yes, check the window on the pen — there's an expiration date printed there. If the liquid looks clear, it's still good. If it's cloudy or brownish, don't use it — get a replacement right away. Typically they last about 12 to 18 months. Set a reminder on your phone so you don't forget to refill the prescription before it expires.",
            textZh: "是的，看看笔上的窗口——上面印着有效期。如果液体看起来是透明的就还能用。如果变浑浊或偏褐色就不要用了——马上换新的。通常有效期大约12-18个月。在手机上设个提醒，这样不会忘记在过期前续配处方。",
            keyPhrases: [
              { en: "expiration date", zh: "有效期/保质期" },
              { en: "cloudy or brownish", zh: "浑浊或偏褐色" },
              { en: "replacement", zh: "替换品/新的" },
              { en: "refill the prescription", zh: "续配处方" },
            ],
            alternativeExpressions: [
              {
                textEn: "There's a small window on the side — check the date and the liquid. Clear = good. Cloudy or discolored = replace ASAP. They're usually good for 12-18 months. I'd set a phone reminder a month before it expires so you have time to get a new one.",
                textZh: "侧面有个小窗口——检查日期和液体。透明=还能用。浑浊或变色=马上换。通常12-18个月有效。建议在过期前一个月设手机提醒，这样有时间拿新的。",
                actionHint: "设手机提醒",
                frequency: "common",
              },
            ],
            culturalNote: "在美国，EpiPen续配（refill）需要医生处方。你可以打电话给医生办公室说'I need a prescription refill for my EpiPen'，他们会直接发到你的药房。大多数保险会覆盖EpiPen的费用，但自付额（copay）可能在$25-$100不等。",
            casualVersion: "Yep! Check the window on the pen — there's an expiration date. If the liquid's clear, you're good. Cloudy or brownish? Get a new one ASAP. They last about 12-18 months. Set a phone reminder to refill before it expires.",
            formalityVariants: {
              casual: "Yeah, check the window. Clear liquid = fine. Cloudy = replace. Lasts 12-18 months. Set a phone reminder.",
              standard: "Yes, there's an expiration date on the pen. If the liquid is clear, it's still effective. If cloudy or discolored, replace it immediately. Typically lasts 12-18 months. Set a reminder to refill your prescription.",
              formal: "Indeed. The expiration date is printed on a viewing window on the device. If the solution remains clear, it retains its efficacy. Should it appear cloudy or discolored, it must be replaced immediately. The typical shelf life is 12 to 18 months. I would strongly recommend setting an electronic reminder to ensure timely prescription renewal.",
            },
          },
          {
            speaker: "you",
            textEn: "Good idea. Now, you mentioned allergy testing last time. I'd like to do a comprehensive panel to find out exactly what I'm allergic to. What does that involve?",
            textZh: "好主意。上次你提到过敏原检测。我想做一个全面的检测，搞清楚到底对什么过敏。需要做什么？",
            culturalNote: "在美国，做全面过敏原检测（comprehensive allergy panel）通常需要转诊到过敏专科医生（allergist）。费用取决于保险，有保险的话自付额可能$50-$150，没有保险可能$300-$1000+。",
            commonMistake: {
              wrong: "I want to check what allergy I have. What need to do?",
              correct: "I'd like to do a comprehensive panel to find out exactly what I'm allergic to. What does that involve?",
              explanation: "'comprehensive panel'（全面检测套餐）是医疗标准说法。'What does that involve' 比 'What need to do' 更自然完整。",
            },
            casualVersion: "Smart. You mentioned allergy testing before. I wanna do the full panel — figure out exactly what I'm allergic to. What's involved?",
            formalityVariants: {
              casual: "You mentioned allergy tests before. I wanna know exactly what I'm allergic to. What's involved?",
              standard: "I'd like to proceed with comprehensive allergy testing. What does the process involve?",
              formal: "I would like to pursue comprehensive allergen testing to identify all my sensitivities. Could you explain what the process entails?",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "Great idea. I'll refer you to an allergist — Dr. Patel in our network. She can do a skin prick test and a blood panel called a specific IgE test. The skin prick test covers about 40 common allergens — foods, pollens, pet dander, dust mites. Results in about 20 minutes. The blood test is more comprehensive and can test for over a hundred allergens. Between the two, we'll get a very clear picture of your triggers.",
            textZh: "好主意。我给你转诊到我们网络里的过敏专科医生——Patel 医生。她可以做皮肤点刺试验和一种叫特异性IgE的血液检测。皮肤点刺测试覆盖大约40种常见过敏原——食物、花粉、宠物皮屑、尘螨。大约20分钟出结果。血液检测更全面，可以测100多种过敏原。两个一起做，我们能非常清楚地了解你的触发因素。",
            keyPhrases: [
              { en: "refer you to", zh: "给你转诊到" },
              { en: "allergist", zh: "过敏专科医生" },
              { en: "in our network", zh: "在我们的医疗网络内（保险覆盖的）" },
              { en: "specific IgE test", zh: "特异性IgE检测" },
              { en: "triggers", zh: "触发因素/过敏原" },
            ],
            alternativeExpressions: [
              {
                textEn: "I'll set up a referral to our allergist. She does two types of tests: a skin prick test for the common stuff — takes 20 minutes, results right away — and a blood draw for a broader panel. Together, they give us a full map of what to avoid.",
                textZh: "我会安排转诊到我们的过敏科。她做两种检测：皮肤点刺测常见过敏原——20分钟出结果——和抽血做更广的套餐。两个一起做就能全面了解你要避免什么。",
                actionHint: "了解检测流程",
                frequency: "common",
              },
            ],
            culturalNote: "'In our network'（在我们网络内）在美国医疗系统中至关重要——如果看'out of network'（网络外）的医生，保险可能不覆盖或自付比例很高。一定要确认转诊的专家在你的保险网络内。中国人可能不习惯这个概念——在中国你可以直接去任何医院。",
            casualVersion: "Great idea. I'll refer you to Dr. Patel, our allergist. She does skin prick tests — like 40 allergens, results in 20 minutes — plus a blood test that covers over 100 allergens. Both together give us the full picture.",
            formalityVariants: {
              casual: "I'll send you to our allergist Dr. Patel. She does skin tests and blood work. Together they cover everything.",
              standard: "I'll refer you to our allergist for a skin prick test and specific IgE blood panel. Combined, they test for over 100 allergens and give us a comprehensive picture.",
              formal: "I shall arrange a referral to Dr. Patel, an allergist within our medical network. She will administer both a skin prick test, which screens approximately 40 common allergens, and a specific IgE blood panel capable of testing over one hundred allergens. The combination of these two methodologies will provide a comprehensive assessment of your allergic triggers.",
            },
          },
          {
            speaker: "you",
            textEn: "That sounds thorough. One last thing — my friend suggested I get a medical alert bracelet since I have a severe allergy. Is that something you'd recommend?",
            textZh: "听起来很全面。最后一件事——我朋友建议我买一个医疗警示手环，因为我有严重过敏。你也推荐吗？",
            culturalNote: "Medical alert bracelet（医疗警示手环/项链）在美国非常常见。如果你失去意识，急救人员会第一时间检查你的手腕和脖子寻找医疗信息。手环上通常刻着过敏原和紧急联系人。中国游客可能觉得戴手环'不好看'，但在美国这是救命的东西。",
            commonMistake: {
              wrong: "My friend said I should buy an allergy bracelet.",
              correct: "My friend suggested I get a medical alert bracelet.",
              explanation: "'medical alert bracelet' 是正式名称，不是 'allergy bracelet'。'suggested I get' 是虚拟语气。",
            },
            casualVersion: "Sounds good. Oh, my friend said I should get one of those medical alert bracelets. Worth it?",
            formalityVariants: {
              casual: "One more thing — medical alert bracelet. Worth getting?",
              standard: "One more thing — my friend recommended a medical alert bracelet. Would you also advise that?",
              formal: "I have one final inquiry. A friend has suggested that I obtain a medical alert bracelet given the severity of my allergy. Would you concur with that recommendation?",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "Absolutely — I strongly recommend it, especially since you're traveling abroad. If you ever have a severe reaction and can't speak, the bracelet tells paramedics exactly what you're allergic to. You can get ones that say 'Severe Shellfish Allergy — EpiPen Carrier' with your emergency contact. You can order them online — MedicAlert and Road ID are popular brands. Some are quite stylish now — they look like regular jewelry. I'll also give you a written allergy action plan card to keep in your wallet. It lists your allergens, medications, and emergency steps in both English and Chinese.",
            textZh: "绝对推荐——我强烈建议，特别是你在国外旅行。如果你有严重反应说不了话，手环会告诉急救人员你对什么过敏。你可以买刻着'严重贝壳类过敏——携带EpiPen'和紧急联系人的那种。网上可以订——MedicAlert 和 Road ID 是常见品牌。现在有些做得很时尚——看起来像普通首饰。我还会给你一张书面的过敏行动计划卡放钱包里。上面用英文和中文列出你的过敏原、药物和紧急步骤。",
            keyPhrases: [
              { en: "medical alert bracelet", zh: "医疗警示手环" },
              { en: "paramedics", zh: "急救人员" },
              { en: "EpiPen Carrier", zh: "携带EpiPen（刻在手环上的信息）" },
              { en: "allergy action plan", zh: "过敏行动计划" },
              { en: "MedicAlert", zh: "MedicAlert（医疗警示品牌）" },
            ],
            alternativeExpressions: [
              {
                textEn: "100%. A medical alert bracelet could save your life. Get one that says your specific allergy and that you carry an EpiPen. First responders are trained to check for these. MedicAlert is the gold standard. I'll also write you an allergy card — bilingual, English and Chinese — to keep in your wallet.",
                textZh: "百分之百推荐。医疗警示手环可以救你的命。买一个写明你的具体过敏原和你携带EpiPen的。急救人员接受过检查这些的培训。MedicAlert是业界标准。我还会给你写一张过敏卡——英中双语——放钱包里。",
                actionHint: "双语过敏卡非常实用",
                frequency: "common",
              },
            ],
            culturalNote: "MedicAlert Foundation 成立于1956年，是全球最大的医疗警示系统。他们的手环/项链/卡片被全球急救人员广泛认可。对于有严重过敏的旅行者，随身携带双语过敏卡（allergy card）是极其重要的——万一在非英语国家出问题，当地医院可以看中文说明。",
            casualVersion: "100% recommend. If you can't talk during a reaction, the bracelet tells EMTs what's wrong. Get one that says your allergy and that you carry an EpiPen. MedicAlert and Road ID are good brands — some look like normal jewelry now. I'll also give you a bilingual allergy card for your wallet.",
            formalityVariants: {
              casual: "Absolutely get one. It could save your life. MedicAlert or Road ID. I'll also give you a bilingual allergy card for your wallet.",
              standard: "I strongly recommend a medical alert bracelet, especially for traveling. MedicAlert and Road ID are reputable brands. I'll also provide a bilingual allergy action plan card for your wallet.",
              formal: "I would most emphatically recommend a medical alert bracelet, particularly given your international travel. Should you experience a severe reaction and be unable to communicate, the bracelet will convey critical information to emergency medical personnel. MedicAlert and Road ID are highly reputable suppliers. Additionally, I shall prepare a comprehensive allergy action plan card in both English and Chinese for you to carry in your wallet at all times.",
            },
          },
        ],
      },
    ],
  },
];
