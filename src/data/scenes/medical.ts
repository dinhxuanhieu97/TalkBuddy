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
            culturalNote: "很多国外诊所接受 walk-in（直接来），但可能需要等候。有些诊所叫 \"urgent care\"（紧急护理中心），专门接待没有预约的患者。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course. We accept walk-ins. Could you fill out this registration form? I'll need your name, date of birth, and any allergies.",
            textZh: "可以的，我们接受直接来看诊。请填写这张登记表。我需要您的姓名、出生日期和过敏信息。",
            variations: [
              { textEn: "Sure, we can fit you in. Please fill out this new patient form and bring your ID.", textZh: "好的，可以安排。请填写这份新患者表格，带上您的证件。" },
              { textEn: "We have a bit of a wait — about 30 minutes. Please fill out this form in the meantime.", textZh: "需要等一会儿——大约30分钟。请先填写这份表格。" },
            ],
            keyPhrases: [
              { en: "walk-ins", zh: "直接来看诊（无需预约）" },
              { en: "registration form", zh: "登记表" },
              { en: "date of birth", zh: "出生日期" },
              { en: "allergies", zh: "过敏" },
            ],
            responseTip: "准备好你的护照或身份证，以及保险信息",
            alternativeExpressions: [
              { textEn: "Sure thing. Go ahead and fill this out for me — name, birthday, and any allergies. Got your ID on you?", textZh: "没问题。帮我填一下这个——姓名、生日和过敏信息。身份证带了吗？", actionHint: "填表并出示证件", frequency: "common" },
              { textEn: "No worries, we take walk-ins. Just need you to fill out some paperwork real quick.", textZh: "没关系，我们接受直接来的。麻烦快速填一下表格。", actionHint: "填写登记表", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's the form. I'm allergic to penicillin — I wrote it down.",
            textZh: "表格填好了。我对青霉素过敏——我写上去了。",
            culturalNote: "一定要主动告知药物过敏史。\"penicillin allergy\" 是最常见的药物过敏之一。",
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
              { textEn: "Great, you're all set. Just have a seat over there and we'll call you in a few.", textZh: "好了，都弄好了。在那边坐一下，一会儿叫你。", actionHint: "在候诊区等候", frequency: "common" },
              { textEn: "Perfect. The doctor shouldn't be too long. Take a seat in the waiting room.", textZh: "好的。医生不会太久。去候诊室坐一下。", actionHint: "耐心等候", frequency: "common" },
            ],
          },
          {
            speaker: "them",
            role: "护士",
            textEn: "Mr. Wang? The doctor is ready for you. Follow me, please. I'll take your temperature and blood pressure first.",
            textZh: "王先生？医生准备好了。请跟我来。我先量一下体温和血压。",
            keyPhrases: [
              { en: "temperature", zh: "体温" },
              { en: "blood pressure", zh: "血压" },
            ],
            alternativeExpressions: [
              { textEn: "Mr. Wang? Come on back. I just need to get your vitals real quick.", textZh: "王先生？请过来。我先快速量一下你的基本体征。", actionHint: "配合量体温血压", frequency: "common" },
              { textEn: "We're ready for you. Let me check your temp and BP before the doctor comes in.", textZh: "准备好了。医生来之前我先量一下体温和血压。", actionHint: "配合护士检查", frequency: "occasional" },
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
            keyPhrases: [
              { en: "what brings you in", zh: "什么原因来看诊" },
            ],
            responseTip: "尽量具体地描述症状：什么时候开始的、什么感觉、严重程度",
            alternativeExpressions: [
              { textEn: "So, what's going on? What can I help you with today?", textZh: "怎么了？今天我能帮你什么？", actionHint: "描述症状", frequency: "common" },
              { textEn: "Hey there. Fill me in — what's been bothering you?", textZh: "你好。跟我说说——哪里不舒服？", actionHint: "详细说明症状", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I've had a bad sore throat and a fever since yesterday. My whole body aches and I feel very tired. I think I might have the flu.",
            textZh: "从昨天开始嗓子很疼，还发烧。全身酸痛，很疲倦。我觉得可能是流感。",
            casualVersion: "My throat's been killing me since yesterday. Got a fever too, and I ache all over.",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "I see. Let me take a look. Open your mouth and say ah... Your throat is quite red and swollen. I'm going to do a quick strep test and a flu swab. When did the fever start, and how high has it been?",
            textZh: "好的，让我看看。张嘴说「啊」……你的喉咙很红很肿。我给你做一个快速链球菌检测和流感拭子检测。发烧什么时候开始的，最高多少度？",
            keyPhrases: [
              { en: "sore throat", zh: "嗓子疼" },
              { en: "swollen", zh: "肿了" },
              { en: "strep test", zh: "链球菌检测" },
              { en: "flu swab", zh: "流感拭子检测" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "Alright, let's have a look. Say 'ah' for me... Yeah, your throat's pretty inflamed. I wanna run a quick strep test and a flu swab. How long have you had the fever?", textZh: "好，让我看看。说'啊'……嗯，你喉咙发炎挺严重的。我想做个链球菌和流感快速检测。发烧多久了？", actionHint: "回答发烧时长", frequency: "common" },
              { textEn: "Open up for me... Yep, that's really red in there. We're gonna swab for strep and flu. When did you first notice the fever?", textZh: "张嘴……嗯，里面很红。我们做个链球菌和流感拭子。你什么时候开始发烧的？", actionHint: "回忆发烧起始时间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It started yesterday afternoon. I measured 38.5 degrees Celsius — that's around 101 Fahrenheit, I think.",
            textZh: "昨天下午开始的。我量了38.5度——大概华氏101度。",
            culturalNote: "在美国用华氏度（Fahrenheit），其他英语国家多用摄氏度。记住 37°C = 98.6°F，38°C ≈ 100.4°F。",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "The flu test came back positive. I'm going to prescribe Tamiflu — it's an antiviral that works best if started within 48 hours. Take it twice a day for five days. Drink plenty of fluids and get lots of rest. If your fever goes above 39.5 or you have trouble breathing, go to the emergency room immediately.",
            textZh: "流感检测是阳性的。我给你开达菲——是一种抗病毒药，在48小时内服用效果最好。每天两次，吃五天。多喝水，多休息。如果体温超过39.5度或者呼吸困难，立刻去急诊。",
            keyPhrases: [
              { en: "positive", zh: "阳性" },
              { en: "prescribe", zh: "开处方" },
              { en: "antiviral", zh: "抗病毒药" },
              { en: "twice a day", zh: "每天两次" },
              { en: "plenty of fluids", zh: "多喝水" },
              { en: "emergency room", zh: "急诊室" },
            ],
            alternativeExpressions: [
              { textEn: "So your flu test came back positive. I'm gonna put you on Tamiflu — take it twice a day for five days. Push fluids, get plenty of rest. If the fever spikes or you can't breathe, head straight to the ER.", textZh: "你的流感检测是阳性。我给你开达菲——每天两次吃五天。多喝水，好好休息。如果高烧或呼吸困难，直接去急诊。", actionHint: "记住用药方法", frequency: "common" },
              { textEn: "Yep, it's the flu. I'll write you a script for Tamiflu. It works best if you start it right away. Stay hydrated, rest up, and if things get worse, don't wait — go to the ER.", textZh: "是的，是流感。我给你开达菲处方。越早吃效果越好。多喝水休息，如果恶化了别等——直接去急诊。", actionHint: "尽快取药开始服用", frequency: "common" },
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
            textEn: "Yes, Tamiflu is not related to penicillin at all, so it's perfectly safe. I've noted your allergy in your chart. You can pick up the prescription at any pharmacy. Do you have any other questions?",
            textZh: "是的，达菲和青霉素完全无关，所以完全安全。我已经在病历里记录了你的过敏史。你可以去任何药房取处方药。还有其他问题吗？",
            keyPhrases: [
              { en: "not related to", zh: "无关" },
              { en: "noted your allergy", zh: "记录了你的过敏史" },
              { en: "pick up the prescription", zh: "取处方药" },
              { en: "pharmacy", zh: "药房" },
            ],
            alternativeExpressions: [
              { textEn: "Totally fine — Tamiflu has nothing to do with penicillin. I've flagged your allergy in the system. Just take this to any pharmacy and you're good to go.", textZh: "完全没问题——达菲和青霉素没有任何关系。我已经在系统里标记了你的过敏。拿处方去任何药房就行。", actionHint: "去药房取药", frequency: "common" },
              { textEn: "No worries at all. They're completely different drugs. Your allergy's in your file now. You can fill the prescription at whatever pharmacy is convenient.", textZh: "完全不用担心。它们是完全不同的药。你的过敏信息已经记在病历里了。去方便的药房取药就好。", actionHint: "前往药房", frequency: "common" },
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
              { textEn: "Quick question — do you have any insurance on file, or will you be self-pay today?", textZh: "快问一下——你有保险吗，还是今天自费？", actionHint: "说明保险情况", frequency: "common" },
              { textEn: "I just need to check — are you insured, or paying out of pocket?", textZh: "我确认一下——你有保险还是自费？", actionHint: "出示保险卡或说明自费", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm a tourist. I have travel insurance through World Nomads. I'm not sure if you accept it — here's my insurance card.",
            textZh: "我是游客。我通过 World Nomads 买了旅行保险。不确定你们接不接——这是我的保险卡。",
            culturalNote: "出国前拍照保存保险卡和保单号码。旅行保险通常需要先自付，再事后申请理赔。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "We don't bill travel insurance directly, unfortunately. You'll need to pay out of pocket today, and then submit the receipt to your insurance company for reimbursement. We can provide a detailed receipt with diagnosis codes.",
            textZh: "很遗憾，我们不能直接向旅行保险公司结算。您今天需要先自费，然后把收据交给保险公司申请理赔。我们可以提供含诊断代码的详细收据。",
            variations: [
              { textEn: "Travel insurance usually works on a reimbursement basis. You pay now and claim it back later. We'll give you all the paperwork you need.", textZh: "旅行保险通常是报销制的。您先付款，之后再申请理赔。我们会给您所需的全部文件。" },
            ],
            keyPhrases: [
              { en: "pay out of pocket", zh: "自费/先自付" },
              { en: "reimbursement", zh: "报销/理赔" },
              { en: "detailed receipt", zh: "详细收据" },
              { en: "diagnosis codes", zh: "诊断代码" },
            ],
            alternativeExpressions: [
              { textEn: "Unfortunately we can't bill your travel insurance directly. You'd pay upfront and then file a claim with them for reimbursement.", textZh: "很遗憾我们不能直接跟你的旅行保险结算。你先付全款，然后自己跟保险公司申请理赔。", actionHint: "了解自费后理赔流程", frequency: "common" },
              { textEn: "With travel insurance, it's usually pay first, claim later. We'll make sure you get a proper receipt with all the codes you need.", textZh: "旅行保险一般是先付后赔。我们会给你一份带完整代码的正式收据。", actionHint: "保留所有收据", frequency: "common" },
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
            textEn: "The consultation fee is $150. If the doctor orders any tests, those are additional — a flu test is $40, blood work starts at $80. We accept credit cards and cash.",
            textZh: "诊费150美元。如果医生开了检查，另外收费——流感检测40美元，验血80美元起。我们接受信用卡和现金。",
            keyPhrases: [
              { en: "consultation fee", zh: "诊费/挂号费" },
              { en: "additional", zh: "额外的" },
              { en: "blood work", zh: "验血/血液检查" },
              { en: "credit cards", zh: "信用卡" },
            ],
            alternativeExpressions: [
              { textEn: "The office visit is $150. Labs and tests are extra — flu test runs about $40, bloodwork starts around $80. We take Visa, Mastercard, and cash.", textZh: "门诊费150美元。化验和检测另算——流感检测大约40美元，血检80美元起。我们收Visa、万事达和现金。", actionHint: "确认费用并选择支付方式", frequency: "common" },
              { textEn: "Without insurance, you're looking at $150 for the visit, plus any tests the doc orders on top of that.", textZh: "没有保险的话，看诊150美元，加上医生开的检查费用。", actionHint: "准备好付款", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's fine. I'll pay by credit card. Could you make sure the receipt includes everything I need for the insurance claim? The doctor's name, diagnosis, and treatment details?",
            textZh: "没问题。我用信用卡付。能确保收据上包含我理赔需要的所有信息吗？医生姓名、诊断和治疗详情？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Absolutely. We'll include the doctor's name, your diagnosis, all procedures performed, itemized costs, and the clinic's tax ID number. Most travel insurance companies also need a claim form filled out by the doctor — should I ask Dr. Miller to complete one?",
            textZh: "当然。我们会包括医生姓名、诊断、所有诊疗项目、费用明细和诊所税号。大多数旅行保险公司还需要医生填一份理赔表——需要我请 Miller 医生填写吗？",
            keyPhrases: [
              { en: "procedures performed", zh: "诊疗项目" },
              { en: "itemized costs", zh: "费用明细" },
              { en: "tax ID number", zh: "税号" },
              { en: "claim form", zh: "理赔表" },
            ],
            alternativeExpressions: [
              { textEn: "For sure. We'll put everything on the receipt — doc's name, diagnosis, procedures, the works. Want me to have the doctor fill out an insurance claim form too?", textZh: "没问题。收据上什么都会写——医生姓名、诊断、治疗项目，全部。需要我让医生也填一份保险理赔表吗？", actionHint: "请医生填理赔表", frequency: "common" },
              { textEn: "We do this all the time for international patients. I'll make sure the receipt has all the details your insurer needs.", textZh: "我们经常帮国际患者处理这些。我会确保收据有你的保险公司需要的所有信息。", actionHint: "确认收据内容", frequency: "common" },
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
            textEn: "No problem. I'll have everything ready for you when you check out. Also, keep all your pharmacy receipts — your insurance will probably cover medication too.",
            textZh: "没问题。您结束后我把所有材料准备好。另外，保留好药房的收据——保险可能也报销药费。",
            keyPhrases: [
              { en: "pharmacy receipts", zh: "药房收据" },
              { en: "cover medication", zh: "报销药费" },
            ],
            culturalNote: "保留所有医疗相关收据，包括药房、出租车去医院的费用等，有些旅行保险都可以理赔。",
            alternativeExpressions: [
              { textEn: "You're all set. I'll have your paperwork at the front desk when you're done. Oh, and hang on to your pharmacy receipts — your insurance might reimburse those too.", textZh: "都弄好了。结束后前台有你的材料。对了，药房收据也留着——保险可能也报。", actionHint: "保留药房收据", frequency: "common" },
              { textEn: "I'll get everything together for you before you leave. Don't forget to save your drug store receipts as well — they're usually covered.", textZh: "你走之前我把所有东西整理好。别忘了药店收据也留着——通常也能报。", actionHint: "保留所有收据", frequency: "common" },
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
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Welcome back, Mr. Wang. Dr. Miller is expecting you. Please take a seat and he'll be right with you.",
            textZh: "欢迎回来，王先生。Miller 医生在等您。请坐，他马上来。",
            keyPhrases: [
              { en: "follow-up", zh: "复诊" },
              { en: "expecting you", zh: "在等您" },
            ],
            alternativeExpressions: [
              { textEn: "Hey, welcome back! The doctor's got you on his schedule. Have a seat and he'll be out in a sec.", textZh: "嘿，欢迎回来！医生已经安排好了。坐一下，他马上出来。", actionHint: "在候诊区等候", frequency: "common" },
              { textEn: "Good to see you again. Dr. Miller knows you're here. Just hang tight for a moment.", textZh: "很高兴再见到你。Miller 医生知道你来了。稍等一下。", actionHint: "耐心等候", frequency: "common" },
            ],
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
              { textEn: "Hey, good to see you back. How have you been doing? Any better since last time?", textZh: "嘿，很高兴你回来了。最近怎么样？比上次好点了吗？", actionHint: "汇报恢复情况", frequency: "common" },
              { textEn: "Welcome back. So, how are we doing? Has the fever come down at all?", textZh: "欢迎回来。怎么样了？烧有退吗？", actionHint: "说明症状变化", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Much better, thanks. The fever broke yesterday, and my throat is less sore. But I still have a cough that won't go away.",
            textZh: "好多了，谢谢。昨天退烧了，嗓子也没那么疼了。但还是有咳嗽，一直不好。",
            casualVersion: "Way better. Fever's gone, throat's okay, but I can't shake this cough.",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "That's normal — the cough can linger for a week or two after the flu. Let me listen to your lungs... They sound clear, no signs of infection. I'd recommend an over-the-counter cough suppressant and honey tea. If the cough gets worse or you start coughing up colored mucus, come back right away.",
            textZh: "这很正常——流感后咳嗽可能持续一两周。让我听一下你的肺……听起来很清楚，没有感染的迹象。建议去药店买止咳药，再喝蜂蜜茶。如果咳嗽加重或者咳出有颜色的痰，马上回来。",
            keyPhrases: [
              { en: "linger", zh: "持续/拖着" },
              { en: "listen to your lungs", zh: "听肺" },
              { en: "sound clear", zh: "听起来正常" },
              { en: "cough suppressant", zh: "止咳药" },
              { en: "colored mucus", zh: "有颜色的痰" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "That cough is totally normal after the flu — could stick around for a couple weeks. Your lungs sound good though, no infection. Just grab some cough medicine from the store and sip on some warm tea with honey.", textZh: "流感后咳嗽很正常——可能持续几周。你的肺听起来没问题，没有感染。去药店买点止咳药，喝点蜂蜜温茶就好。", actionHint: "买止咳药", frequency: "common" },
              { textEn: "Post-flu cough is super common, don't worry about it. Lungs are clear. If it gets worse or you start seeing green or yellow stuff when you cough, come back ASAP.", textZh: "流感后咳嗽非常常见，不用担心。肺部正常。如果加重了或者咳出绿色黄色的痰，赶紧回来。", actionHint: "注意观察痰的颜色", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Should I finish the rest of the Tamiflu?",
            textZh: "明白了。达菲还要继续吃完吗？",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "Yes, always finish the full course even if you feel better. You have two more days, right? After that, you don't need any more prescription medication. You're recovering well.",
            textZh: "是的，就算感觉好了也要把整个疗程吃完。你还剩两天的量对吧？之后就不需要处方药了。你恢复得很好。",
            keyPhrases: [
              { en: "full course", zh: "整个疗程" },
              { en: "prescription medication", zh: "处方药" },
              { en: "recovering well", zh: "恢复得很好" },
            ],
            alternativeExpressions: [
              { textEn: "Definitely finish it out, even though you're feeling better. You've got two days left, right? After that, you won't need anything else. You're doing great.", textZh: "一定要吃完，虽然你感觉好了。还剩两天的量对吧？之后就不需要其他药了。恢复得很好。", actionHint: "吃完剩余药物", frequency: "common" },
              { textEn: "Yep, always finish the full round. Don't stop early just because you feel fine — that's really important with antivirals.", textZh: "对，一定要吃完整个疗程。别因为感觉好了就停——抗病毒药这点很重要。", actionHint: "坚持完成疗程", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a relief. One more question — I'm flying home in four days. Is it safe to fly?",
            textZh: "那就放心了。再问一下——我四天后坐飞机回国。可以坐飞机吗？",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "By then you should be fine. Just stay hydrated on the flight and bring some cough drops. If you're still running a fever in four days, though, you should delay your flight and come see me. But I don't think that'll be necessary.",
            textZh: "到时候应该没问题。飞机上注意补水，带一些润喉糖。不过如果四天后还在发烧，就应该推迟航班来看我。但我觉得不太可能。",
            keyPhrases: [
              { en: "stay hydrated", zh: "注意补水" },
              { en: "cough drops", zh: "润喉糖/止咳含片" },
              { en: "running a fever", zh: "在发烧" },
              { en: "delay your flight", zh: "推迟航班" },
            ],
            alternativeExpressions: [
              { textEn: "Four days out? You should be totally fine by then. Just drink a ton of water on the plane and bring some lozenges. If you're still running a temp by then though, push the flight back and come see me.", textZh: "四天后？到时候应该完全没问题了。飞机上多喝水，带一些含片。不过要是到时候还发烧，就改签来找我。", actionHint: "飞机上多补水", frequency: "common" },
              { textEn: "You'll be good to fly. Just stay on top of your fluids during the flight and keep some cough drops handy.", textZh: "坐飞机没问题的。飞行途中记得多喝水，备着止咳含片。", actionHint: "准备润喉含片", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much, Dr. Miller. I really appreciate your help.",
            textZh: "非常感谢，Miller 医生。真的很感谢您的帮助。",
          },
        ],
      },
    ],
  },

  // ==================== 药房买药 ====================
  {
    id: "medical-pharmacy",
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
            casualVersion: "Hey, I've got a cold — runny nose, headache. What do you recommend?",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Sure. Are you looking for something that treats multiple symptoms, or just the headache?",
            textZh: "好的。您想要综合症状的药，还是只治头疼的？",
            keyPhrases: [
              { en: "multiple symptoms", zh: "多种症状" },
              { en: "over-the-counter", zh: "非处方的" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "What kind of symptoms are we dealing with? Do you need something that covers everything, or just for the headache?", textZh: "都有什么症状？你要管所有症状的还是只治头疼的？", actionHint: "说清楚全部症状", frequency: "common" },
              { textEn: "Yeah, absolutely. Are you looking for an all-in-one thing, or do you just want something for the headache specifically?", textZh: "当然可以。你要一种管全部的，还是专门治头疼的？", actionHint: "选择综合药或单一药", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Something for everything, if possible. I also have a slight cough.",
            textZh: "最好什么都能治。我还有点咳嗽。",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "I'd recommend DayQuil for daytime — it covers congestion, headache, fever, and cough. For nighttime, NyQuil will help you sleep. Do you have any drug allergies?",
            textZh: "白天推荐 DayQuil——对鼻塞、头疼、发烧和咳嗽都有效。晚上用 NyQuil，帮助睡眠。您有药物过敏吗？",
            variations: [
              { textEn: "Try this multi-symptom cold relief. It has a decongestant, pain reliever, and cough suppressant. Are you on any other medications?", textZh: "试试这种综合感冒药。含有减充血剂、止痛药和止咳成分。您在吃其他药吗？" },
            ],
            keyPhrases: [
              { en: "congestion", zh: "鼻塞" },
              { en: "daytime / nighttime", zh: "白天用 / 夜用" },
              { en: "drug allergies", zh: "药物过敏" },
            ],
            responseTip: "一定要如实告知过敏和正在服用的其他药物",
            alternativeExpressions: [
              { textEn: "I'd go with DayQuil for during the day and NyQuil at night. They'll cover pretty much everything — stuffiness, headache, fever, cough. Any allergies I should know about?", textZh: "白天推荐DayQuil，晚上NyQuil。基本什么都管——鼻塞、头疼、发烧、咳嗽。有什么过敏的吗？", actionHint: "告知过敏史", frequency: "common" },
              { textEn: "For a cold with all those symptoms, a combo like DayQuil-NyQuil is your best bet. You on any other meds?", textZh: "这些症状的话，DayQuil-NyQuil 组合最合适。你在吃其他药吗？", actionHint: "说明其他用药", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm allergic to aspirin. And I'm not taking any other medication right now.",
            textZh: "我对阿司匹林过敏。目前没有在吃其他药。",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Good to know. DayQuil and NyQuil don't contain aspirin — they use acetaminophen instead, so you'll be fine. Just don't take more than the recommended dose, and avoid alcohol with NyQuil.",
            textZh: "了解。DayQuil 和 NyQuil 不含阿司匹林——用的是对乙酰氨基酚，所以没问题。注意不要超过推荐剂量，吃 NyQuil 时不要喝酒。",
            keyPhrases: [
              { en: "acetaminophen", zh: "对乙酰氨基酚" },
              { en: "recommended dose", zh: "推荐剂量" },
              { en: "avoid alcohol", zh: "不要喝酒" },
            ],
            alternativeExpressions: [
              { textEn: "You're good — no aspirin in either of those. They use Tylenol basically. Just don't go over the dosage on the box and skip the booze with NyQuil.", textZh: "放心——两种都不含阿司匹林。基本是泰诺成分。别超过盒子上的剂量，吃NyQuil的时候别喝酒。", actionHint: "按剂量服用", frequency: "common" },
              { textEn: "Neither one has aspirin, so you'll be fine. The active ingredient is acetaminophen. Stick to the recommended dose and steer clear of alcohol.", textZh: "两种都没有阿司匹林，所以没问题。有效成分是对乙酰氨基酚。按推荐剂量吃，别碰酒。", actionHint: "注意剂量和忌酒", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. I'll take both. Also, do you have throat lozenges?",
            textZh: "明白了。两种都要。还有润喉含片吗？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Yes, aisle three on the left. We have Halls and Ricola. The Ricola honey-lemon ones are popular. Anything else?",
            textZh: "有的，左边第三排。我们有 Halls 和 Ricola。利口乐蜂蜜柠檬味的很受欢迎。还要别的吗？",
            keyPhrases: [
              { en: "throat lozenges", zh: "润喉含片" },
              { en: "aisle", zh: "货架排/过道" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, aisle three. The honey-lemon Ricola ones are really popular. Halls works too if you want something stronger.", textZh: "有的，第三排。蜂蜜柠檬的利口乐很受欢迎。想要劲大点的可以买Halls。", actionHint: "去第三排自取", frequency: "common" },
              { textEn: "Sure, they're right over there in aisle three. We've got a bunch of brands — Ricola, Halls, Cepacol.", textZh: "有的，就在那边第三排。好几个牌子——利口乐、Halls、Cepacol。", actionHint: "选择喜欢的品牌", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's everything. How much is it altogether?",
            textZh: "就这些了。一共多少钱？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "The DayQuil-NyQuil combo pack is $18.99 and the Ricola is $5.49. Your total is $24.48. Cash or card?",
            textZh: "DayQuil-NyQuil 组合装18.99美元，利口乐5.49美元。一共24.48美元。现金还是刷卡？",
            keyPhrases: [
              { en: "combo pack", zh: "组合装" },
              { en: "total", zh: "总价" },
            ],
            alternativeExpressions: [
              { textEn: "Alright, the DayQuil-NyQuil combo is 18.99 and the lozenges are 5.49. That puts you at $24.48. Cash or card?", textZh: "好的，DayQuil-NyQuil组合18.99，含片5.49。一共24.48美元。现金还是刷卡？", actionHint: "选择支付方式", frequency: "common" },
              { textEn: "Let me ring that up for you... comes to $24.48 total. How would you like to pay?", textZh: "我帮你结账……总共24.48美元。怎么付？", actionHint: "付款", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Card, please. Thank you for your help.",
            textZh: "刷卡。谢谢你的帮助。",
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
            culturalNote: "\"fill a prescription\" 是英语中去药房拿处方药的标准说法。",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Of course. Let me see the prescription... Tamiflu, 75 milligrams, twice daily for five days. Is this your first time filling a prescription here?",
            textZh: "当然。让我看看处方……达菲，75毫克，每日两次，连服五天。您是第一次在这里拿药吗？",
            keyPhrases: [
              { en: "fill a prescription", zh: "拿处方药/配药" },
              { en: "milligrams", zh: "毫克" },
              { en: "twice daily", zh: "每日两次" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing. Let me pull that up... Tamiflu, 75 mg, twice a day for five days. Have you filled anything with us before?", textZh: "没问题。我看看……达菲，75毫克，每天两次，五天。你以前在我们这配过药吗？", actionHint: "说明是否首次", frequency: "common" },
              { textEn: "Let me take a look at that... Okay, Tamiflu 75 mg BID for five days. You a new patient here?", textZh: "我看一下……好的，达菲75毫克每日两次五天。你是新患者吗？", actionHint: "确认是否新患者", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, it's my first time. I'm visiting from overseas.",
            textZh: "是的，第一次。我从国外来旅游的。",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "No problem. I'll need your name and date of birth. Do you have insurance, or will you be paying out of pocket?",
            textZh: "没问题。需要您的姓名和出生日期。您有保险还是自费？",
            keyPhrases: [
              { en: "date of birth", zh: "出生日期" },
              { en: "paying out of pocket", zh: "自费" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "No worries. Just need your name and birthday. Are you paying cash or do you have insurance?", textZh: "没关系。只需要你的名字和生日。现金付还是有保险？", actionHint: "提供信息并说明支付方式", frequency: "common" },
              { textEn: "That's fine. Can I get your name and date of birth? And will this be going through insurance or are you paying yourself?", textZh: "没问题。姓名和出生日期？走保险还是自费？", actionHint: "提供个人信息", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll be paying out of pocket. How much will it cost?",
            textZh: "自费。要多少钱？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Without insurance, a five-day course of Tamiflu is $95. We do have a generic version — oseltamivir — for $45. It's the same active ingredient. Would you prefer the generic?",
            textZh: "没有保险的话，五天的达菲是95美元。我们有仿制药版本——奥司他韦——45美元。有效成分一样。您要仿制药吗？",
            variations: [
              { textEn: "The brand name is $95. The generic is $45 and works exactly the same way. Which would you like?", textZh: "原研药95美元。仿制药45美元，效果完全一样。您选哪个？" },
            ],
            keyPhrases: [
              { en: "generic version", zh: "仿制药" },
              { en: "active ingredient", zh: "有效成分" },
              { en: "brand name", zh: "原研药/品牌药" },
            ],
            culturalNote: "在美国，仿制药（generic）和原研药（brand name）成分一样但价格差很多。药剂师通常会主动推荐。",
            alternativeExpressions: [
              { textEn: "So without insurance, the brand name Tamiflu runs $95. But we carry the generic — same exact drug, just $45. Wanna go with that instead?", textZh: "没保险的话，品牌达菲要95美元。不过我们有仿制药——完全一样的药，只要45美元。要这个吗？", actionHint: "选仿制药省钱", frequency: "common" },
              { textEn: "Out of pocket, you're looking at $95 for the name brand. The generic's the same stuff though, and it's only $45.", textZh: "自费的话品牌药95美元。仿制药成分一样，只要45美元。", actionHint: "选择品牌或仿制", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, the generic is fine. As long as it works the same.",
            textZh: "好的，仿制药就行。只要效果一样。",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "It'll be ready in about 10 minutes. I'll call your name. While you wait, do you have any questions about how to take it?",
            textZh: "大概10分钟准备好。到时候叫您名字。等的时候，对怎么服用有什么问题吗？",
            keyPhrases: [
              { en: "ready in about 10 minutes", zh: "大约10分钟准备好" },
              { en: "call your name", zh: "叫您名字" },
            ],
            alternativeExpressions: [
              { textEn: "Give me about 10 minutes to get this filled. I'll holler when it's ready. Got any questions about taking it?", textZh: "给我大约10分钟配好。好了叫你。对怎么吃有什么问题吗？", actionHint: "趁等药时提问", frequency: "common" },
              { textEn: "Should be ready in 10. Feel free to browse around or grab a seat. Anything you wanna know about the medication?", textZh: "10分钟应该好了。可以逛逛或坐一会儿。关于这个药有什么想问的吗？", actionHint: "等候或咨询", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Should I take it with food?",
            textZh: "需要饭后吃吗？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Yes, it's best to take it with food to avoid an upset stomach. One capsule in the morning with breakfast, one in the evening with dinner. Don't skip any doses.",
            textZh: "是的，最好随餐服用，避免胃部不适。早上早餐时一粒，晚上晚餐时一粒。不要漏服。",
            keyPhrases: [
              { en: "with food", zh: "随餐/饭后" },
              { en: "upset stomach", zh: "胃部不适" },
              { en: "capsule", zh: "胶囊" },
              { en: "skip any doses", zh: "漏服" },
            ],
            alternativeExpressions: [
              { textEn: "Definitely take it with food — otherwise it might upset your stomach. One with breakfast, one with dinner. And make sure you don't miss any doses.", textZh: "一定要随饭吃——不然可能会胃不舒服。早餐一粒晚餐一粒。别漏吃。", actionHint: "随餐服用", frequency: "common" },
              { textEn: "Yeah, always with a meal. It can make you nauseous on an empty stomach. Morning and evening, don't skip any.", textZh: "对，一定要跟饭一起吃。空腹吃会恶心。早晚各一次，别漏吃。", actionHint: "勿空腹服用", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Understood. Could I also get a printed receipt? I need it for my travel insurance claim.",
            textZh: "明白了。能给我打印一张收据吗？我理赔旅行保险需要。",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Sure, I'll include a detailed receipt with the medication name, dosage, and price. Your name — Wang? I'll call you when it's ready.",
            textZh: "当然，我会给您一张包含药名、剂量和价格的详细收据。您姓王？准备好了叫您。",
            keyPhrases: [
              { en: "detailed receipt", zh: "详细收据" },
              { en: "dosage", zh: "剂量" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely. I'll print you out a receipt with all the details — drug name, dose, price, everything. Wang, right? I'll call you when it's ready.", textZh: "当然。我给你打一张详细收据——药名、剂量、价格，全部。姓王对吧？好了叫你。", actionHint: "等候叫号", frequency: "common" },
              { textEn: "No problem, I'll make sure the receipt has everything you need for your claim. Sit tight, I'll let you know when it's done.", textZh: "没问题，收据上会有理赔需要的所有信息。坐着等一下，好了我通知你。", actionHint: "等候取药", frequency: "common" },
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
            textEn: "Excuse me, I have a few questions about this medication I've been prescribed. Do you have a minute?",
            textZh: "不好意思，我对开的这个药有几个问题。您有时间吗？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Of course, I'm happy to help. Which medication are you asking about?",
            textZh: "当然，很乐意帮忙。您问的是哪种药？",
            alternativeExpressions: [
              { textEn: "Sure, fire away. What medication are you asking about?", textZh: "当然，问吧。你问的是哪种药？", actionHint: "说明具体药物", frequency: "common" },
              { textEn: "Yeah, what do you need to know? Which drug is it?", textZh: "好的，你想了解什么？哪种药？", actionHint: "告知药名", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "The doctor prescribed me amoxicillin for a sinus infection. What are the common side effects?",
            textZh: "医生给我开了阿莫西林治鼻窦炎。常见的副作用有哪些？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "The most common side effects are nausea, diarrhea, and stomach pain. Taking it with food usually helps. Some people also get a rash — if that happens, stop taking it and call your doctor, because it could be an allergic reaction.",
            textZh: "最常见的副作用是恶心、腹泻和胃痛。随餐服用通常会好一些。有些人会出皮疹——如果出现，停药并打电话给医生，因为可能是过敏反应。",
            keyPhrases: [
              { en: "side effects", zh: "副作用" },
              { en: "nausea", zh: "恶心" },
              { en: "diarrhea", zh: "腹泻" },
              { en: "rash", zh: "皮疹" },
              { en: "allergic reaction", zh: "过敏反应" },
            ],
            alternativeExpressions: [
              { textEn: "With amoxicillin, the main things to watch for are nausea, diarrhea, maybe some stomach cramps. Eating with it helps. If you break out in a rash, stop right away and call your doctor — could be an allergy.", textZh: "吃阿莫西林主要注意恶心、腹泻，可能还有胃痉挛。跟饭一起吃会好一些。如果起皮疹了，马上停药打电话给医生——可能是过敏。", actionHint: "注意观察副作用", frequency: "common" },
              { textEn: "Most people get a little stomach upset — nausea, loose stools. Take it with food and you should be okay. But if you get any kind of rash or hives, that's a red flag — stop taking it immediately.", textZh: "大多数人会有点胃部不适——恶心、稀便。随饭吃应该没事。但如果出皮疹或荨麻疹，那就是危险信号——立刻停药。", actionHint: "随餐服用减少副作用", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm also taking ibuprofen for pain. Is it safe to take both together?",
            textZh: "我还在吃布洛芬止痛。两种药一起吃安全吗？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Yes, amoxicillin and ibuprofen don't interact with each other. That combination is safe. However, avoid taking amoxicillin with antacids — they can reduce absorption. And definitely no alcohol while you're on the antibiotic.",
            textZh: "是的，阿莫西林和布洛芬不会相互作用。这个组合是安全的。不过，不要和胃药一起吃——会降低吸收。吃抗生素期间绝对不要喝酒。",
            keyPhrases: [
              { en: "interact", zh: "相互作用" },
              { en: "antacids", zh: "胃药/抗酸药" },
              { en: "reduce absorption", zh: "降低吸收" },
              { en: "antibiotic", zh: "抗生素" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "Yep, those two are fine together, no interaction. Just don't mix the amoxicillin with antacids — they mess with absorption. And stay away from alcohol while you're on it.", textZh: "对，这两种一起吃没问题，不冲突。就是阿莫西林别跟胃药一起吃——会影响吸收。还有吃药期间别喝酒。", actionHint: "避免胃药和酒", frequency: "common" },
              { textEn: "Those are totally safe to take at the same time. The only things to avoid with amoxicillin are antacids and booze.", textZh: "两种同时吃完全安全。跟阿莫西林要避开的就是胃药和酒。", actionHint: "注意忌口", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. If I miss a dose, should I double up the next time?",
            textZh: "了解了。如果漏吃了一次，下次需要加倍吗？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "No, never double up. If you miss a dose, take it as soon as you remember — unless it's almost time for the next dose, in which case just skip the missed one. The most important thing is to finish the entire course, even if you feel better after a few days.",
            textZh: "不，千万不要加倍。如果漏吃了，想起来就马上吃——除非快到下一次吃药的时间了，那就跳过漏掉的那次。最重要的是要把整个疗程吃完，即使吃了几天就感觉好了。",
            keyPhrases: [
              { en: "never double up", zh: "千万不要加倍" },
              { en: "miss a dose", zh: "漏吃一次" },
              { en: "skip the missed one", zh: "跳过漏掉的那次" },
              { en: "finish the entire course", zh: "吃完整个疗程" },
            ],
            alternativeExpressions: [
              { textEn: "Nope, don't double up. If you miss one, just take it when you remember. But if it's almost time for the next one, just skip it and move on. And whatever you do, finish the whole course.", textZh: "不要加倍。如果漏了一次，想起来就吃。但如果快到下一次了，就跳过漏的那次。不管怎样，一定要把整个疗程吃完。", actionHint: "漏服不加倍", frequency: "common" },
              { textEn: "Never take a double dose. Just pick up where you left off. The biggest thing is — don't quit early even if you feel great. Finish all of it.", textZh: "千万别吃双倍量。接着吃就行。最重要的是——就算感觉好了也别提前停。全部吃完。", actionHint: "完成全部疗程", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "How should I store it? I'm traveling and my hotel room can get warm.",
            textZh: "怎么保存？我在旅游，酒店房间有时候比较热。",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Keep it at room temperature, below 25 degrees Celsius. Don't leave it in direct sunlight or in a hot car. If your hotel room gets too warm, you can store it in the minibar — just don't freeze it.",
            textZh: "室温保存，25摄氏度以下。不要放在阳光直射的地方或者高温的车里。如果酒店房间太热，可以放在迷你吧里——但不要冷冻。",
            keyPhrases: [
              { en: "room temperature", zh: "室温" },
              { en: "direct sunlight", zh: "阳光直射" },
              { en: "don't freeze", zh: "不要冷冻" },
            ],
            alternativeExpressions: [
              { textEn: "Just keep it at room temp — under 25°C or so. Out of the sun, not in a hot car. If your room gets stuffy, stick it in the minibar fridge, but don't freeze it.", textZh: "室温保存就行——25度以下左右。别晒太阳，别放热车里。房间太闷的话放迷你吧冰箱，但别冻。", actionHint: "妥善保存药物", frequency: "common" },
              { textEn: "Room temperature is fine. Just keep it away from heat and sunlight. The hotel minibar works in a pinch, just make sure it doesn't freeze.", textZh: "室温就行。远离高温和阳光就好。应急可以放酒店迷你吧，别冻就行。", actionHint: "避免高温存放", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's very helpful. Thank you for taking the time to explain everything.",
            textZh: "非常有帮助。谢谢您花时间解释这些。",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "You're welcome. If you have any concerns while taking the medication, don't hesitate to come back or call us. We're open until 9 PM every day.",
            textZh: "不客气。吃药期间如果有任何问题，随时回来或打电话。我们每天营业到晚上9点。",
            keyPhrases: [
              { en: "don't hesitate", zh: "不要犹豫/随时" },
              { en: "concerns", zh: "担心/疑虑" },
            ],
            alternativeExpressions: [
              { textEn: "Anytime! If anything comes up while you're taking it, swing by or give us a ring. We're here till 9 every night.", textZh: "随时来！吃药期间有任何问题，过来或打电话。我们每晚营业到9点。", actionHint: "记住药房电话", frequency: "common" },
              { textEn: "Happy to help. Don't be a stranger — if something doesn't feel right while you're on the meds, just come back. We close at 9.", textZh: "很高兴能帮上忙。有什么不对劲就回来——我们9点关门。", actionHint: "有问题及时回来咨询", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 急诊 ====================
  {
    id: "medical-emergency",
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
          },
          {
            speaker: "them",
            role: "护士",
            textEn: "Okay, I need you to sit down right here. When did the chest pain start? Can you describe it — is it sharp, dull, or pressure-like?",
            textZh: "好的，请先坐在这里。胸痛什么时候开始的？能描述一下吗——是尖锐的痛、钝痛，还是有压迫感？",
            variations: [
              { textEn: "Stay calm. We're going to take care of you. Tell me — when did this start, and on a scale of 1 to 10, how bad is the pain?", textZh: "保持冷静。我们会照顾你。告诉我——什么时候开始的，疼痛从1到10打几分？" },
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
              { textEn: "Okay, sit right here for me. Tell me what's going on — when did the pain start and what does it feel like? Sharp? Squeezing?", textZh: "好的，先坐这儿。告诉我怎么回事——什么时候开始疼的，什么感觉？刺痛？挤压感？", actionHint: "描述疼痛类型", frequency: "common" },
              { textEn: "Take a seat. I need you to tell me exactly what you're feeling and when it started. Rate the pain 1 to 10 for me.", textZh: "坐下。我需要你告诉我具体感觉和什么时候开始的。疼痛1到10打几分。", actionHint: "给疼痛评分", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It started about an hour ago. It feels like pressure, right here in the center of my chest. The pain is about a 7 out of 10.",
            textZh: "大约一小时前开始的。感觉是压迫感，就在胸口正中间。疼痛大概7分。",
          },
          {
            speaker: "them",
            role: "护士",
            textEn: "Does the pain spread anywhere — to your arm, jaw, or back? Have you had any nausea, shortness of breath, or sweating?",
            textZh: "疼痛有没有扩散到其他地方——手臂、下巴或背部？有没有恶心、呼吸急促或出汗？",
            keyPhrases: [
              { en: "spread", zh: "扩散" },
              { en: "jaw", zh: "下巴" },
              { en: "shortness of breath", zh: "呼吸急促" },
              { en: "sweating", zh: "出汗" },
            ],
            alternativeExpressions: [
              { textEn: "Is the pain going anywhere else — down your arm, into your neck or jaw? Any trouble breathing or have you been feeling nauseous?", textZh: "疼痛有没有放射到其他地方——胳膊、脖子或下巴？呼吸困难或恶心吗？", actionHint: "仔细感受并回答", frequency: "common" },
              { textEn: "Does it radiate? Like to your left arm or your back? And are you short of breath or sweating at all?", textZh: "有没有放射痛？比如左胳膊或后背？有没有喘不上气或出汗？", actionHint: "描述伴随症状", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "My left arm feels a bit numb. And yes, I've been sweating a lot.",
            textZh: "左胳膊有点麻。是的，一直在出很多汗。",
          },
          {
            speaker: "them",
            role: "护士",
            textEn: "We're going to get you in right away. I'm putting you on a heart monitor and we'll do an EKG immediately. Do you have any medical conditions — heart disease, diabetes, high blood pressure?",
            textZh: "我们马上让你进去。给你接上心脏监测仪，立刻做心电图。你有什么基础疾病吗——心脏病、糖尿病、高血压？",
            keyPhrases: [
              { en: "heart monitor", zh: "心脏监测仪" },
              { en: "EKG", zh: "心电图" },
              { en: "medical conditions", zh: "基础疾病" },
              { en: "high blood pressure", zh: "高血压" },
              { en: "diabetes", zh: "糖尿病" },
            ],
            alternativeExpressions: [
              { textEn: "We're taking you straight back. Getting you hooked up to a monitor and running an EKG right now. Any history of heart problems, diabetes, or blood pressure issues?", textZh: "我们马上带你进去。现在给你接上监测仪做心电图。有心脏病、糖尿病或血压问题的病史吗？", actionHint: "如实告知病史", frequency: "common" },
              { textEn: "Okay, you're going in right now. We'll get an EKG going immediately. Do you have any pre-existing conditions I should know about?", textZh: "好的，你现在就进去。我们马上做心电图。有什么我应该知道的基础疾病吗？", actionHint: "告知既往病史", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have high blood pressure. I take medication for it, but I forgot to bring it on this trip. I haven't taken it in three days.",
            textZh: "我有高血压。在吃药，但这次旅行忘带了。已经三天没吃了。",
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
              { textEn: "That's crucial. Do you remember the name of what you take and how much?", textZh: "这很关键。你记得你吃的药叫什么、吃多少吗？", actionHint: "回忆药名和剂量", frequency: "common" },
              { textEn: "Okay, that's really important. What's the medication called, and what's your dose?", textZh: "好的，这很重要。药叫什么名字？剂量多少？", actionHint: "提供药物信息", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Lisinopril, 10 milligrams, once a day.",
            textZh: "赖诺普利，10毫克，每天一次。",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "Hi, I'm Dr. Chen. We're doing an EKG and drawing blood right now. Your blood pressure is elevated at 170 over 100, which is likely related to missing your medication. We need to rule out a heart attack. I'm going to give you aspirin and nitroglycerin under your tongue to help with the chest pain. Are you allergic to any medications?",
            textZh: "你好，我是陈医生。我们正在做心电图和抽血。你的血压升高了，170/100，可能和停药有关。我们需要排除心脏病发作。我会给你阿司匹林和舌下含服硝酸甘油来缓解胸痛。你对什么药物过敏吗？",
            keyPhrases: [
              { en: "blood pressure is elevated", zh: "血压升高" },
              { en: "rule out", zh: "排除" },
              { en: "heart attack", zh: "心脏病发作" },
              { en: "aspirin", zh: "阿司匹林" },
              { en: "nitroglycerin", zh: "硝酸甘油" },
              { en: "under your tongue", zh: "舌下含服" },
            ],
            alternativeExpressions: [
              { textEn: "I'm Dr. Chen. We've got the EKG running and blood drawn. Your BP is way up — 170 over 100 — probably because you missed your meds. We need to make sure this isn't a heart attack. I'm giving you aspirin and nitro under the tongue. Any drug allergies?", textZh: "我是陈医生。心电图正在做，血也抽了。你血压很高——170/100——可能是因为停药了。我们要排除心梗。现在给你阿司匹林和舌下含硝酸甘油。有药物过敏吗？", actionHint: "告知过敏信息", frequency: "common" },
              { textEn: "Hi, Dr. Chen here. EKG and labs are in progress. Blood pressure's at 170/100, which makes sense if you haven't taken your meds in three days. We gotta rule out a cardiac event. Gonna start you on aspirin and some nitro. You allergic to anything?", textZh: "你好，我是陈医生。心电图和化验正在进行。血压170/100，三天没吃药的话说得通。我们得排除心脏事件。先给你阿司匹林和硝酸甘油。你对什么过敏吗？", actionHint: "如实告知过敏史", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "No, no allergies. Please, do whatever you need to do.",
            textZh: "没有，不过敏。请做需要做的一切。",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "We're taking good care of you. Try to stay calm and breathe slowly. We'll have the results in about 15 minutes. Is there someone we should contact — a family member or a travel companion?",
            textZh: "我们会好好照顾你。尽量保持冷静，慢慢呼吸。大约15分钟会有结果。有没有需要我们联系的人——家人或同行旅伴？",
            keyPhrases: [
              { en: "stay calm", zh: "保持冷静" },
              { en: "breathe slowly", zh: "慢慢呼吸" },
              { en: "travel companion", zh: "同行旅伴" },
            ],
            alternativeExpressions: [
              { textEn: "You're in good hands. Just try to relax and take slow, deep breaths. We should have results pretty soon. Is there anyone we should call for you?", textZh: "你交给我们了。尽量放松，慢慢深呼吸。结果很快出来。需要我们帮你联系谁吗？", actionHint: "提供紧急联系人", frequency: "common" },
              { textEn: "Hang in there. We're running all the tests. Just breathe nice and slow. Anybody you want us to get in touch with — family, friend?", textZh: "撑住。我们在做所有检查。慢慢呼吸就好。需要我们联系谁吗——家人、朋友？", actionHint: "告知联系人信息", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "My wife is at the hotel. Her number is... Can someone call her for me?",
            textZh: "我太太在酒店。她的号码是……能帮我打给她吗？",
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
              { textEn: "Okay, where is she? Whatever you do, don't try to move her. We'll come to her with a wheelchair. Did she bang her head at all?", textZh: "好的，她在哪？千万别动她。我们带轮椅过去。她有没有磕到头？", actionHint: "描述朋友位置", frequency: "common" },
              { textEn: "Stay with her and keep her still. We're bringing a chair right now. Did she lose consciousness or hit her head?", textZh: "陪着她别让她动。我们马上带椅子过去。她有没有失去意识或者撞到头？", actionHint: "观察伤者意识状态", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "She's right outside the entrance. I don't think she hit her head, but her right ankle is very swollen. She might have broken it.",
            textZh: "她就在门口外面。应该没有撞到头，但右脚踝肿得很厉害。可能骨折了。",
          },
          {
            speaker: "them",
            role: "护士",
            textEn: "Okay, we'll be right there. What's her name and age? Does she have any medical conditions or allergies?",
            textZh: "好的，我们马上过去。她叫什么名字，多大年纪？有什么基础疾病或过敏吗？",
            keyPhrases: [
              { en: "ankle", zh: "脚踝" },
              { en: "swollen", zh: "肿了" },
              { en: "broken", zh: "骨折" },
              { en: "medical conditions", zh: "基础疾病" },
            ],
            alternativeExpressions: [
              { textEn: "On our way. Quick — what's her name, how old is she? Does she have any health issues or take any medications?", textZh: "马上来。快说——她叫什么，多大？有什么健康问题或在吃什么药吗？", actionHint: "提供朋友基本信息", frequency: "common" },
              { textEn: "We'll be right there. Can you give me her name and age? Any allergies or medical history I should know about?", textZh: "我们马上到。告诉我她的姓名和年龄？有什么过敏或病史我应该知道的吗？", actionHint: "告知过敏和病史", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Her name is Li Mei, she's 35. No medical conditions that I know of. She's not allergic to anything. She doesn't speak much English — I'll translate for her.",
            textZh: "她叫李梅，35岁。据我所知没有基础疾病。不过敏。她英语不太好——我帮她翻译。",
            culturalNote: "在急诊室帮不会说英语的同伴翻译很常见。有些医院也会提供翻译服务（interpreter services）。",
          },
          {
            speaker: "them",
            role: "护士",
            textEn: "Thank you. We also have interpreter services if you need a break. Let's get her inside. Can she move her toes?",
            textZh: "谢谢。如果你需要休息，我们也有翻译服务。先把她带进来。她能动脚趾吗？",
            keyPhrases: [
              { en: "interpreter services", zh: "翻译服务" },
              { en: "move her toes", zh: "动脚趾" },
            ],
            alternativeExpressions: [
              { textEn: "Thanks for helping out. We've got translators on call if you need one. Let's get her inside first. Can she wiggle her toes at all?", textZh: "谢谢你帮忙。我们有随叫随到的翻译。先把她带进来。她能动动脚趾吗？", actionHint: "帮忙确认脚趾活动", frequency: "common" },
              { textEn: "That's great that you can translate. We also have interpreter services available. First things first — let's bring her in. Is she able to move her toes?", textZh: "你能翻译太好了。我们也有翻译服务。先把她带进来。她能动脚趾吗？", actionHint: "询问朋友是否能动脚趾", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I think so, but it's very painful for her. She says the pain is mostly on the outside of her ankle.",
            textZh: "应该可以，但她很疼。她说主要是脚踝外侧疼。",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "I'm Dr. Park. I can see the swelling. We'll need to do an X-ray to check for fractures. In the meantime, we'll apply ice and elevate her foot. Can you ask her if she heard a popping sound when she fell?",
            textZh: "我是 Park 医生。我看到肿了。需要拍X光看有没有骨折。同时先冰敷，把脚抬高。你能问她摔倒时有没有听到弹响声？",
            keyPhrases: [
              { en: "X-ray", zh: "X光" },
              { en: "fractures", zh: "骨折" },
              { en: "apply ice", zh: "冰敷" },
              { en: "elevate", zh: "抬高" },
              { en: "popping sound", zh: "弹响声" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "I'm Dr. Park. That's pretty swollen. We'll need X-rays to see if anything's broken. For now, let's ice it and prop her foot up. Ask her if she felt or heard a pop when it happened.", textZh: "我是 Park 医生。肿得挺厉害。需要拍X光看有没有骨折。先冰敷把脚抬高。问问她受伤时有没有感觉到或听到弹响。", actionHint: "帮忙翻译询问", frequency: "common" },
              { textEn: "Dr. Park here. Okay, I can see the swelling. We're gonna do an X-ray. In the meantime, ice and elevation. Did she hear anything pop when she fell?", textZh: "我是 Park 医生。好的，我看到肿了。我们拍个X光。同时先冰敷抬高。她摔的时候有没有听到弹响？", actionHint: "帮忙回忆摔倒细节", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "She says she did hear a pop. She also says the pain is getting worse, not better.",
            textZh: "她说确实听到了弹响声。而且她说疼痛在加剧，没有减轻。",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "That could indicate a fracture or a severe ligament tear. Let's get the X-ray done first. I'll also give her something for the pain. Is she allergic to ibuprofen or any painkillers?",
            textZh: "那可能是骨折或严重的韧带撕裂。先去拍X光。我也给她开点止痛药。她对布洛芬或其他止痛药过敏吗？",
            keyPhrases: [
              { en: "ligament tear", zh: "韧带撕裂" },
              { en: "painkillers", zh: "止痛药" },
            ],
            alternativeExpressions: [
              { textEn: "A pop plus increasing pain — could be a break or a torn ligament. Let's get that X-ray. I'll give her something for the pain first. She okay with ibuprofen?", textZh: "有弹响加上越来越疼——可能是骨折或韧带撕裂。先去拍X光。我先给她止痛药。她能吃布洛芬吗？", actionHint: "确认朋友能否吃止痛药", frequency: "common" },
              { textEn: "That doesn't sound great — might be fractured or a bad ligament tear. X-ray first, then we'll know. Let me get her some pain relief. Any drug allergies?", textZh: "听起来不太好——可能骨折或严重韧带撕裂。先拍X光就知道了。我先给她止点痛。有药物过敏吗？", actionHint: "告知过敏情况", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "No allergies. How long will the X-ray take? And will she need a cast?",
            textZh: "不过敏。X光要多久？她需要打石膏吗？",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "The X-ray itself takes about 5 minutes, and we'll have results in 20 minutes. If it's a fracture, she may need a cast or a boot. If it's a bad sprain, we'll wrap it and give her crutches. Either way, she should stay off the foot. Do you have travel insurance? She may need a follow-up with an orthopedic specialist.",
            textZh: "X光本身大约5分钟，20分钟出结果。如果是骨折，可能需要打石膏或穿矫形靴。如果是严重扭伤，会缠绷带、给她拐杖。不管哪种情况，她都不应该用那只脚走路。你们有旅行保险吗？她可能需要去骨科专科复诊。",
            keyPhrases: [
              { en: "cast", zh: "石膏" },
              { en: "boot", zh: "矫形靴" },
              { en: "sprain", zh: "扭伤" },
              { en: "crutches", zh: "拐杖" },
              { en: "stay off the foot", zh: "不要用那只脚" },
              { en: "orthopedic specialist", zh: "骨科专科" },
            ],
            alternativeExpressions: [
              { textEn: "The X-ray is quick — five minutes tops. Results in about 20. If it's broken, she'll get a cast or a walking boot. If it's just a bad sprain, we'll wrap it and give her crutches. Either way, she shouldn't walk on it. Got travel insurance? She'll probably need a follow-up.", textZh: "X光很快——最多五分钟。20分钟出结果。如果骨折了，打石膏或穿矫形靴。如果只是严重扭伤，缠绷带给拐杖。不管怎样都不能走路。有旅行保险吗？她可能需要复诊。", actionHint: "准备保险材料", frequency: "common" },
              { textEn: "X-ray's real quick. We'll know in about 20 minutes if it's broken. She might need a cast or just a boot and crutches — depends on what we see. Do you guys have insurance? She may need an ortho follow-up.", textZh: "X光很快的。大约20分钟就知道有没有骨折了。可能要石膏或者矫形靴加拐杖——看结果。你们有保险吗？可能需要骨科复诊。", actionHint: "确认保险和后续安排", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, we both have travel insurance. I'll get all the documents. Thank you so much for helping her.",
            textZh: "有，我们都有旅行保险。我去准备所有材料。非常感谢你们帮忙。",
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
            textEn: "Hi, I have a terrible toothache. I don't have an appointment, but is it possible to see a dentist today?",
            textZh: "你好，我牙疼得厉害。没有预约，但今天能看牙医吗？",
            culturalNote: "国外牙科诊所通常需要提前预约，但大多数会为急性牙痛安排紧急就诊（emergency dental visit）。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "We do have an emergency slot available at 2:30. Can you fill out this patient form? Have you been to a dentist recently?",
            textZh: "我们2:30有一个紧急号。能填一下这份患者表格吗？你最近看过牙医吗？",
            keyPhrases: [
              { en: "emergency slot", zh: "紧急号/加急名额" },
              { en: "patient form", zh: "患者表格" },
            ],
            alternativeExpressions: [
              { textEn: "We can squeeze you in this afternoon. Fill out this new patient form first.", textZh: "今天下午可以给你加个号。先填这份新患者表格。", actionHint: "填表等候", frequency: "common" },
              { textEn: "We have an opening in about an hour. Would that work?", textZh: "大约一小时后有个空位。可以吗？", actionHint: "确认时间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "No, it's been a while since my last checkup. The pain started two days ago and it's getting worse, especially when I eat or drink something cold.",
            textZh: "没有，上次检查已经很久了。两天前开始疼的，越来越严重，特别是吃东西或喝冷饮的时候。",
          },
          {
            speaker: "them",
            role: "牙医",
            textEn: "Hello, I'm Dr. Adams. Let's take a look. Open wide, please... I can see a large cavity on your lower right molar. That's what's causing the pain. We'll need to take an X-ray to see how deep it is.",
            textZh: "你好，我是 Adams 医生。让我看看。请张大嘴……我看到你右下方的臼齿有一个很大的蛀洞。这就是疼痛的原因。我们需要拍个X光看看有多深。",
            keyPhrases: [
              { en: "open wide", zh: "张大嘴" },
              { en: "cavity", zh: "蛀洞/龋齿" },
              { en: "molar", zh: "臼齿/大牙" },
              { en: "X-ray", zh: "X光" },
            ],
            vocabNotes: {
              cavity: { meaningInContext: "在这句话里表示：牙齿上的蛀洞", similarUsage: "类似用法：You have several cavities that need filling." },
              molar: { meaningInContext: "在这句话里表示：后面的大牙（臼齿）", similarUsage: "类似用法：My wisdom molar is coming in." },
            },
            alternativeExpressions: [
              { textEn: "Hi, Dr. Adams. Let's have a look — open up nice and wide... Yep, there's a pretty big cavity on your lower right molar. That's your culprit. We need an X-ray to see how far it goes.", textZh: "你好，我是 Adams 医生。让我看看——嘴张大……嗯，你右下臼齿有个很大的蛀洞。就是它在作怪。得拍个X光看看有多深。", actionHint: "配合张嘴检查", frequency: "common" },
              { textEn: "Hey there, I'm Dr. Adams. Open wide for me... Ah, I see the problem. Big cavity on the lower right. Let's X-ray it and figure out how deep it is.", textZh: "你好，我是 Adams 医生。张大嘴……啊，我看到问题了。右下方有个大蛀洞。拍个X光看看多深。", actionHint: "配合检查", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is it serious? Will I need a root canal?",
            textZh: "严重吗？需要做根管治疗吗？",
          },
          {
            speaker: "them",
            role: "牙医",
            textEn: "The X-ray shows the cavity hasn't reached the nerve yet, so a filling should be enough. If it had reached the nerve, then yes, you'd need a root canal. I can do the filling right now if you'd like.",
            textZh: "X光显示蛀洞还没到神经，所以补牙就可以了。如果到了神经，那就需要根管治疗了。如果你愿意，我现在就可以补。",
            keyPhrases: [
              { en: "nerve", zh: "神经" },
              { en: "filling", zh: "补牙" },
              { en: "root canal", zh: "根管治疗" },
            ],
            alternativeExpressions: [
              { textEn: "Good news — it's not too deep. We can fix it with a simple filling today.", textZh: "好消息——不太深。今天做个简单的补牙就行。", actionHint: "同意当天治疗", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please do it now. Will it hurt? I'm a bit nervous about dental work.",
            textZh: "好的，现在就做吧。会疼吗？我对牙科治疗有点紧张。",
          },
          {
            speaker: "them",
            role: "牙医",
            textEn: "Don't worry. I'll numb the area first with a local anesthetic. You'll feel a small pinch from the injection, but after that you won't feel any pain. The whole procedure takes about 30 minutes. If you feel any discomfort, just raise your left hand.",
            textZh: "别担心。我会先用局部麻醉把那个区域麻掉。打麻药时会有一点刺痛，之后就不会痛了。整个过程大约30分钟。如果感到不舒服，举左手示意。",
            keyPhrases: [
              { en: "numb the area", zh: "麻掉那个区域" },
              { en: "local anesthetic", zh: "局部麻醉" },
              { en: "pinch", zh: "刺痛" },
              { en: "injection", zh: "注射/打针" },
              { en: "raise your left hand", zh: "举左手" },
            ],
            alternativeExpressions: [
              { textEn: "No worries, I'll freeze the area first. You'll feel a little poke from the needle, then nothing. The whole thing takes about half an hour. If it bothers you, just give me a wave.", textZh: "别担心，我会先把那块麻掉。打针时会有一点刺，然后就没感觉了。整个过程大概半小时。不舒服就挥挥手。", actionHint: "配合治疗", frequency: "common" },
              { textEn: "You'll be totally numb — I promise you won't feel a thing after the shot. About 30 minutes and we're done. Raise your hand anytime if you need a break.", textZh: "会完全麻掉的——保证打完针后什么都感觉不到。大约30分钟就好了。任何时候需要休息就举手。", actionHint: "需要暂停就举手", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, I feel better knowing that. How much will the filling cost without insurance?",
            textZh: "好的，知道这些我就放心了。没有保险的话补牙多少钱？",
          },
          {
            speaker: "them",
            role: "牙医",
            textEn: "A composite filling for this size cavity is $250. The X-ray is $85. We'll give you a detailed receipt for your travel insurance claim. After the filling, avoid eating on that side for two hours and stay away from very hot or cold food for a day.",
            textZh: "这个大小的蛀洞，树脂补牙250美元。X光85美元。我们会给你一份详细的收据用于旅行保险理赔。补完牙后两小时内不要用那一侧吃东西，一天内避免过冷过热的食物。",
            keyPhrases: [
              { en: "composite filling", zh: "树脂补牙" },
              { en: "detailed receipt", zh: "详细收据" },
              { en: "avoid eating on that side", zh: "不要用那一侧吃东西" },
            ],
            vocabNotes: {
              composite: { meaningInContext: "在这句话里表示：牙齿修补用的树脂材料（跟牙齿颜色一样）", similarUsage: "类似用法：We use tooth-colored composite material." },
            },
            alternativeExpressions: [
              { textEn: "For this size cavity, a tooth-colored filling runs $250. The X-ray's $85 on top of that. We'll give you a receipt for insurance. Don't chew on that side for a couple hours after, and skip really hot or cold stuff for a day.", textZh: "这个大小的蛀洞，树脂补牙250美元。X光另外85美元。我们给你收据用来报保险。补完后那一侧两小时内不要咬东西，一天内别吃太烫太冷的。", actionHint: "注意术后事项", frequency: "common" },
              { textEn: "A composite filling is $250, plus the $85 for X-rays. After the procedure, take it easy on that side — no eating for two hours, and nothing super hot or cold for 24 hours.", textZh: "树脂补牙250美元，加上X光85美元。治疗后那一侧要小心——两小时不吃东西，24小时内别吃太烫太冷的。", actionHint: "遵守术后饮食限制", frequency: "common" },
            ],
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
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Sure. We have openings on Thursday at 10 AM or Friday at 2 PM. Which works better for you? A cleaning and checkup takes about 45 minutes to an hour.",
            textZh: "好的。周四上午10点或周五下午2点有空位。哪个更方便？洗牙和检查大约需要45分钟到一个小时。",
            keyPhrases: [
              { en: "dental cleaning", zh: "洗牙" },
              { en: "checkup", zh: "检查" },
              { en: "openings", zh: "空位" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing. We've got a Thursday morning slot at 10 or Friday afternoon at 2. A cleaning plus checkup usually takes about 45 minutes to an hour.", textZh: "没问题。周四上午10点或周五下午2点有空。洗牙加检查通常45分钟到一小时。", actionHint: "选择合适时间", frequency: "common" },
              { textEn: "Let me check the schedule... How about Thursday at 10 AM or Friday at 2 PM? Plan for about an hour.", textZh: "我看看排班……周四上午10点或者周五下午2点怎么样？预留大约一小时。", actionHint: "确认预约时间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thursday at 10 works. How much is a cleaning without insurance?",
            textZh: "周四10点可以。没有保险的话洗牙多少钱？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "A standard cleaning is $120, and the checkup including X-rays is $180. So the total would be $300. If you need a deep cleaning, that's more — around $400 to $600, depending on the condition of your gums.",
            textZh: "标准洗牙120美元，包含X光的检查180美元。所以总共300美元。如果需要深度洁牙，会更贵——大约400到600美元，取决于牙龈状况。",
            keyPhrases: [
              { en: "standard cleaning", zh: "标准洗牙" },
              { en: "deep cleaning", zh: "深度洁牙" },
              { en: "gums", zh: "牙龈" },
            ],
            alternativeExpressions: [
              { textEn: "Without insurance, a routine cleaning runs about $120. X-rays and the exam are extra.", textZh: "没有保险的话，常规洗牙大约120美元。X光和检查另算。", actionHint: "确认费用", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with the standard cleaning and checkup. Can you explain what happens during the cleaning?",
            textZh: "就标准洗牙和检查吧。能说一下洗牙的过程吗？",
          },
          {
            speaker: "them",
            role: "牙医",
            textEn: "Of course. First, we'll do a full examination and take X-rays. Then the hygienist will remove plaque and tartar using a scaler — you'll hear a scraping sound, which is normal. After that, we polish your teeth and finish with a fluoride treatment. It shouldn't be painful, but let us know if your gums are sensitive.",
            textZh: "当然。首先我们做全面检查和拍X光。然后洁牙师会用刮治器清除牙菌斑和牙石——你会听到刮擦的声音，这是正常的。之后我们会给牙齿抛光，最后做氟化处理。应该不会疼，但如果你的牙龈敏感就告诉我们。",
            keyPhrases: [
              { en: "plaque", zh: "牙菌斑" },
              { en: "tartar", zh: "牙石/牙结石" },
              { en: "scaler", zh: "刮治器" },
              { en: "polish", zh: "抛光" },
              { en: "fluoride treatment", zh: "氟化处理" },
              { en: "sensitive", zh: "敏感" },
            ],
            vocabNotes: {
              plaque: { meaningInContext: "在这句话里表示：黏在牙齿表面的细菌膜", similarUsage: "类似用法：Brushing twice a day helps prevent plaque buildup." },
              tartar: { meaningInContext: "在这句话里表示：牙菌斑钙化后变硬的牙结石", similarUsage: "类似用法：Only a dentist can remove hardened tartar." },
            },
            alternativeExpressions: [
              { textEn: "Sure. So we start with X-rays and a full exam. Then the hygienist scrapes off the buildup — you'll hear some scraping, totally normal. After that, we polish everything up and do a fluoride rinse. Shouldn't hurt, but let us know if you're sensitive.", textZh: "好的。先拍X光做全面检查。然后洁牙师清除堆积物——会有刮擦声，很正常。之后抛光，最后氟化漱口。应该不疼，但如果你敏感就告诉我们。", actionHint: "了解洗牙流程", frequency: "common" },
              { textEn: "Basically — exam and X-rays first, then we clean off all the plaque and tartar. You might hear some scraping, that's the scaler doing its job. Then a polish and fluoride. Easy peasy.", textZh: "基本上是先检查和拍X光，然后清掉所有牙菌斑和牙石。可能会听到刮擦声，那是刮治器在工作。然后抛光和氟化处理。很简单。", actionHint: "放松配合", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "My gums bleed a little when I brush. Is that something to worry about?",
            textZh: "我刷牙时牙龈会出一点血。需要担心吗？",
          },
          {
            speaker: "them",
            role: "牙医",
            textEn: "Bleeding gums are often a sign of gingivitis — early-stage gum disease. It's very common and usually reversible with regular cleanings and good brushing habits. I'll check your gum health during the exam. Do you floss daily?",
            textZh: "牙龈出血通常是牙龈炎的信号——早期牙周病。很常见，通过定期洗牙和良好的刷牙习惯一般可以恢复。检查时我会看看你的牙龈健康状况。你每天用牙线吗？",
            keyPhrases: [
              { en: "bleeding gums", zh: "牙龈出血" },
              { en: "gingivitis", zh: "牙龈炎" },
              { en: "gum disease", zh: "牙周病" },
              { en: "reversible", zh: "可逆的" },
              { en: "floss", zh: "用牙线" },
            ],
            alternativeExpressions: [
              { textEn: "That's usually a sign of gingivitis — basically early gum disease. Pretty common, and the good news is it's totally fixable with regular cleanings and better brushing. How often do you floss?", textZh: "这通常是牙龈炎的表现——就是早期牙周病。很常见，好消息是定期洗牙和改善刷牙习惯完全可以恢复。你多久用一次牙线？", actionHint: "如实回答牙线使用频率", frequency: "common" },
              { textEn: "Bleeding when you brush? That's usually gingivitis — nothing to panic about but you definitely wanna get on top of it. Are you flossing?", textZh: "刷牙出血？通常是牙龈炎——不用慌但一定要重视。你用牙线吗？", actionHint: "养成用牙线习惯", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Not as often as I should. I'll try to do it more regularly. Thank you, doctor.",
            textZh: "不太经常。我会尽量多用。谢谢医生。",
          },
          {
            speaker: "them",
            role: "牙医",
            textEn: "Flossing once a day makes a big difference. I'd also recommend using a soft-bristle toothbrush and brushing for at least two minutes. We'll see you Thursday at 10. If the bleeding gets worse before then, give us a call.",
            textZh: "每天用一次牙线差别很大。我还建议用软毛牙刷，每次刷至少两分钟。周四10点见。如果出血在那之前加重了，打电话给我们。",
            keyPhrases: [
              { en: "soft-bristle toothbrush", zh: "软毛牙刷" },
              { en: "at least two minutes", zh: "至少两分钟" },
            ],
            alternativeExpressions: [
              { textEn: "Honestly, just flossing once a day will make a huge difference. Get a soft toothbrush and brush for a solid two minutes. See you Thursday at 10. Call us if the bleeding gets worse.", textZh: "说实话，每天用一次牙线就会有很大改善。买个软毛牙刷，刷够两分钟。周四10点见。出血加重了就打电话。", actionHint: "养成每日牙线习惯", frequency: "common" },
              { textEn: "Start flossing daily — you'll notice a difference pretty quickly. And use a soft-bristle brush, not a hard one. See you Thursday!", textZh: "开始每天用牙线——你会很快看到变化的。用软毛牙刷，别用硬的。周四见！", actionHint: "买软毛牙刷", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 医疗保险 ====================
  {
    id: "medical-insurance",
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
            textEn: "Hello, I'd like to file a claim on my travel insurance. I saw a doctor while I'm traveling in the US.",
            textZh: "你好，我想提交旅行保险理赔。我在美国旅行期间看了医生。",
          },
          {
            speaker: "them",
            role: "保险客服",
            textEn: "Of course. Can I have your policy number and the date of your medical visit?",
            textZh: "好的。请提供您的保单号和就诊日期。",
            keyPhrases: [
              { en: "policy number", zh: "保单号" },
              { en: "date of your medical visit", zh: "就诊日期" },
            ],
            alternativeExpressions: [
              { textEn: "Sure. I'll need your insurance ID number and when you visited the doctor.", textZh: "好的。我需要您的保险ID号和看医生的时间。", actionHint: "提供保单信息", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "My policy number is TI-88234. I visited the clinic on March 5th. I had the flu and the total cost was $285 — $150 for the consultation, $40 for a flu test, and $95 for medication.",
            textZh: "保单号是 TI-88234。3月5日去的诊所。我得了流感，总费用285美元——诊费150美元，流感检测40美元，药费95美元。",
          },
          {
            speaker: "them",
            role: "保险客服",
            textEn: "Thank you. Your policy covers medical expenses up to $50,000 with a $100 deductible. So you'll pay the first $100, and we'll reimburse the remaining $185. Do you have all the original receipts and the doctor's report?",
            textZh: "谢谢。您的保单覆盖最高5万美元的医疗费用，有100美元的免赔额。所以您自付前100美元，我们报销剩余的185美元。您有所有的原始收据和医生报告吗？",
            keyPhrases: [
              { en: "medical expenses", zh: "医疗费用" },
              { en: "deductible", zh: "免赔额" },
              { en: "reimburse", zh: "报销/理赔" },
              { en: "original receipts", zh: "原始收据" },
              { en: "doctor's report", zh: "医生报告" },
            ],
            vocabNotes: {
              deductible: { meaningInContext: "在这句话里表示：保险公司报销前你自己需要先付的金额", similarUsage: "类似用法：My health insurance has a $500 deductible." },
              reimburse: { meaningInContext: "在这句话里表示：保险公司把你先垫付的钱还给你", similarUsage: "类似用法：The company will reimburse your travel expenses." },
            },
            alternativeExpressions: [
              { textEn: "Okay, so your plan covers up to $50K in medical costs. There's a $100 deductible, so you'd cover the first hundred and we'd pay back the other $185. Do you have all the receipts and the doctor's notes?", textZh: "好的，你的计划覆盖最高5万美元的医疗费。有100美元免赔额，所以你付前100美元，我们退还剩余185美元。你有所有收据和医生的记录吗？", actionHint: "准备好所有单据", frequency: "common" },
              { textEn: "Your policy has a $100 deductible. After that, we reimburse the rest. So out of your $285, you'd get $185 back. Got your receipts and the doctor's report handy?", textZh: "你的保单有100美元免赔额。之后我们报销剩余部分。285美元里你能拿回185美元。收据和医生报告带了吗？", actionHint: "整理好材料", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I have the receipts from the clinic and the pharmacy. The clinic also gave me a form with diagnosis codes. How do I submit everything?",
            textZh: "有的，诊所和药房的收据都有。诊所还给了我一份有诊断代码的表格。怎么提交这些材料？",
          },
          {
            speaker: "them",
            role: "保险客服",
            textEn: "You can submit them through our app or website. Just upload photos of all receipts, the doctor's report, and the claim form. Make sure everything is clear and legible. Processing usually takes 5 to 10 business days.",
            textZh: "您可以通过我们的App或网站提交。上传所有收据、医生报告和理赔表的照片就行。确保内容清晰可读。处理通常需要5到10个工作日。",
            keyPhrases: [
              { en: "upload photos", zh: "上传照片" },
              { en: "claim form", zh: "理赔表" },
              { en: "legible", zh: "清晰可读" },
              { en: "business days", zh: "工作日" },
            ],
            alternativeExpressions: [
              { textEn: "Easiest way is through our app — just snap photos of everything and upload them. Make sure the pictures are clear. We usually process claims within 5 to 10 business days.", textZh: "最简单的方式是用我们的App——拍好所有材料的照片上传就行。确保照片清晰。我们通常5到10个工作日处理完。", actionHint: "下载保险App上传", frequency: "common" },
              { textEn: "You can do it all online — our website or app. Upload the receipts, doctor's report, and claim form. Just make sure they're readable. Should take about a week to process.", textZh: "都可以在网上办——我们的网站或App。上传收据、医生报告和理赔表。确保能看清楚。大约一周处理完。", actionHint: "在线提交理赔", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Will the reimbursement be sent to my bank account, or do I need to provide a mailing address?",
            textZh: "明白了。报销的钱是打到我的银行账户，还是需要提供邮寄地址？",
          },
          {
            speaker: "them",
            role: "保险客服",
            textEn: "We can do a direct bank transfer. You'll just need to enter your bank details in the claim form — account number, routing number if it's a US bank, or your SWIFT code for international transfers. Is there anything else I can help with?",
            textZh: "我们可以直接银行转账。您只需要在理赔表里填写银行信息——如果是美国银行就填账户号和routing number，国际转账的话填SWIFT代码。还有什么需要帮忙的吗？",
            keyPhrases: [
              { en: "direct bank transfer", zh: "银行直接转账" },
              { en: "bank details", zh: "银行信息" },
              { en: "routing number", zh: "银行路由号" },
              { en: "SWIFT code", zh: "SWIFT代码（国际汇款代码）" },
            ],
            alternativeExpressions: [
              { textEn: "We can wire it straight to your bank. Just put your bank info on the claim form — account number and SWIFT code for international. Anything else I can help with?", textZh: "我们可以直接汇到你的银行。在理赔表上填好银行信息——国际转账填账号和SWIFT代码。还有别的需要帮忙的吗？", actionHint: "填写银行信息", frequency: "common" },
              { textEn: "Yeah, we do bank transfers. You'll just need to include your banking details in the form — account number, and if it's overseas, your SWIFT code. Need anything else?", textZh: "可以的，我们做银行转账。你只需要在表格里写上银行信息——账号，如果是海外的话加SWIFT代码。还需要什么？", actionHint: "准备好SWIFT代码", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "One more question — if I need to see the doctor again, does the deductible apply each time?",
            textZh: "再问一个——如果我再去看医生，每次都要扣免赔额吗？",
          },
          {
            speaker: "them",
            role: "保险客服",
            textEn: "No, the deductible is per policy period, not per visit. Since you've already met the $100 deductible, any additional covered medical expenses during this trip will be reimbursed in full, up to your policy limit.",
            textZh: "不会，免赔额是按保单周期算的，不是按每次就诊。既然您已经达到了100美元的免赔额，这次旅行中任何额外的承保医疗费用都会全额报销，直到保单上限。",
            keyPhrases: [
              { en: "per policy period", zh: "按保单周期" },
              { en: "per visit", zh: "按每次就诊" },
              { en: "met the deductible", zh: "达到免赔额" },
              { en: "reimbursed in full", zh: "全额报销" },
              { en: "policy limit", zh: "保单上限" },
            ],
            alternativeExpressions: [
              { textEn: "Nope, it's a one-time thing for the whole trip. You've already hit your $100 deductible, so from now on, everything covered gets reimbursed 100%, up to the policy max.", textZh: "不会，整个旅程只扣一次。你已经达到100美元免赔额了，所以接下来覆盖的费用全额报销，直到保单上限。", actionHint: "后续就医无需再付免赔额", frequency: "common" },
              { textEn: "Good news — the deductible is per policy, not per visit. Since you've already met it, any other medical costs this trip are fully covered up to your limit.", textZh: "好消息——免赔额是按保单周期算的，不是每次就诊。你已经达到了，这次旅行后续的医疗费用都会全额报销直到上限。", actionHint: "放心就医", frequency: "common" },
            ],
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
            textEn: "Hi, I'm about to see a doctor here in the US. Before I go, I want to make sure I understand what my travel insurance covers.",
            textZh: "你好，我在美国准备去看医生。去之前，我想确认一下我的旅行保险覆盖哪些项目。",
          },
          {
            speaker: "them",
            role: "保险客服",
            textEn: "Of course. What's your policy number? I'll pull up your coverage details.",
            textZh: "当然。您的保单号是多少？我来调出您的保障详情。",
            keyPhrases: [
              { en: "coverage details", zh: "保障详情" },
              { en: "pull up", zh: "调出/查询" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, happy to walk you through that. Can I get your policy number? I'll look up exactly what you're covered for.", textZh: "当然，很高兴帮你了解。保单号是多少？我查一下你具体覆盖哪些。", actionHint: "提供保单号", frequency: "common" },
              { textEn: "Absolutely. Give me your policy number and I'll pull everything up for you.", textZh: "当然。给我你的保单号，我帮你全部调出来。", actionHint: "准备好保单号", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's TI-88234. I think I need to see a specialist — possibly a dermatologist. Is that covered?",
            textZh: "TI-88234。我觉得需要看专科医生——可能是皮肤科。这个覆盖吗？",
          },
          {
            speaker: "them",
            role: "保险客服",
            textEn: "Let me check... Your policy covers specialist visits if you're referred by a general practitioner. So you'd need to see a GP first, and if they refer you to a dermatologist, that visit would be covered. Without a referral, you'd have to pay out of pocket.",
            textZh: "我查一下……您的保单覆盖专科就诊，但需要全科医生的转介。所以您需要先看全科医生，如果他们转介您去皮肤科，那次就诊就可以报销。没有转介的话，需要自费。",
            keyPhrases: [
              { en: "specialist", zh: "专科医生" },
              { en: "referred", zh: "转介" },
              { en: "general practitioner", zh: "全科医生（GP）" },
              { en: "dermatologist", zh: "皮肤科医生" },
              { en: "referral", zh: "转介信" },
            ],
            alternativeExpressions: [
              { textEn: "Specialist visits require a referral from a primary care doctor. Without one, it's not covered.", textZh: "看专科需要主治医生的转介。没有的话不报销。", actionHint: "先去看全科医生", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "What about dental and vision? I also chipped a tooth yesterday.",
            textZh: "牙科和眼科呢？我昨天还磕了一颗牙。",
          },
          {
            speaker: "them",
            role: "保险客服",
            textEn: "Dental is covered only for emergency treatment — like your chipped tooth, an abscess, or severe pain. Routine cleanings are not covered. Vision is not included in your plan. For the chipped tooth, you should see a dentist and keep all receipts. That would qualify as emergency dental care.",
            textZh: "牙科只覆盖紧急治疗——比如您的磕牙、脓肿或剧烈疼痛。常规洗牙不包含。眼科不在您的计划内。磕掉的牙建议去看牙医，保留所有收据。这属于紧急牙科护理，可以理赔。",
            keyPhrases: [
              { en: "emergency treatment", zh: "紧急治疗" },
              { en: "chipped tooth", zh: "磕掉的牙/牙缺角" },
              { en: "abscess", zh: "脓肿" },
              { en: "routine cleanings", zh: "常规洗牙" },
              { en: "qualify as", zh: "属于/符合" },
            ],
            vocabNotes: {
              chipped: { meaningInContext: "在这句话里表示：牙齿磕掉了一小块", similarUsage: "类似用法：I chipped my front tooth on a bottle cap." },
            },
            alternativeExpressions: [
              { textEn: "Dental's only covered if it's an emergency — a chipped tooth, an infection, or really bad pain. Regular cleanings and checkups aren't included. Vision isn't covered at all. But your chipped tooth definitely counts as an emergency, so go see a dentist and save every receipt.", textZh: "牙科只有紧急情况才覆盖——磕牙、感染或剧烈疼痛。常规洗牙和检查不包。眼科完全不包。不过你磕的牙肯定算紧急，去看牙医把收据都留着。", actionHint: "尽快看牙医", frequency: "common" },
              { textEn: "For dental, we only cover emergencies. Your chipped tooth would fall under that. Routine stuff like cleanings? Not covered. Vision isn't part of your plan either.", textZh: "牙科我们只覆盖紧急情况。你磕的牙算在内。常规的比如洗牙？不覆盖。眼科也不在你的计划里。", actionHint: "保留紧急牙科收据", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. What's the maximum amount the insurance will pay for this trip?",
            textZh: "了解了。这次旅行保险最多能报多少？",
          },
          {
            speaker: "them",
            role: "保险客服",
            textEn: "Your policy has a $50,000 limit for medical expenses, a $5,000 limit for emergency dental, and $500 for emergency evacuation per incident. There's also a 24-hour emergency hotline — if something serious happens, call us first and we can direct you to an approved hospital.",
            textZh: "您的保单医疗费用上限为5万美元，紧急牙科上限5千美元，紧急救援每次事件上限500美元。还有24小时紧急热线——如果发生严重情况，先打电话给我们，我们可以指引您去指定医院。",
            keyPhrases: [
              { en: "policy limit", zh: "保单上限" },
              { en: "emergency evacuation", zh: "紧急救援/紧急转运" },
              { en: "per incident", zh: "每次事件" },
              { en: "approved hospital", zh: "指定医院" },
              { en: "24-hour emergency hotline", zh: "24小时紧急热线" },
            ],
            alternativeExpressions: [
              { textEn: "You've got $50K for medical, $5K for emergency dental, and $500 per incident for emergency evacuation. And we have a 24/7 hotline — if anything serious goes down, call us first and we'll point you to an in-network hospital.", textZh: "医疗5万美元，紧急牙科5千美元，紧急转运每次500美元。还有24小时热线——出了严重情况先打给我们，我们会指引你去合作医院。", actionHint: "记下紧急热线号码", frequency: "common" },
              { textEn: "Your caps are $50,000 medical, $5,000 dental emergencies, $500 for emergency transport. Pro tip — if something big happens, call our 24-hour line first so we can get you to an approved facility.", textZh: "你的上限是医疗5万、紧急牙科5千、紧急转运500。建议——出大事先打我们24小时热线，我们帮你安排去指定医院。", actionHint: "保存紧急联系方式", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's very clear. Can you also email me a summary of my coverage? It would be helpful to show the doctor.",
            textZh: "非常清楚。能把保障摘要发到我邮箱吗？给医生看的时候会有用。",
          },
          {
            speaker: "them",
            role: "保险客服",
            textEn: "Absolutely. I'll send a coverage summary and a pre-authorization letter to your email right away. The letter will confirm that your insurance is active and list what's covered. Most doctors accept this as proof of insurance.",
            textZh: "当然。我马上把保障摘要和预授权信发到您的邮箱。信函会确认您的保险有效，并列出覆盖项目。大多数医生接受这个作为保险证明。",
            keyPhrases: [
              { en: "coverage summary", zh: "保障摘要" },
              { en: "pre-authorization letter", zh: "预授权信" },
              { en: "proof of insurance", zh: "保险证明" },
            ],
            alternativeExpressions: [
              { textEn: "For sure. I'll shoot you an email with a coverage summary and a pre-auth letter right now. You can show it to the doctor — it proves your insurance is active and spells out what's covered.", textZh: "当然。我现在就给你发邮件，有保障摘要和预授权信。可以给医生看——证明你的保险有效，列明覆盖项目。", actionHint: "打印带去看诊", frequency: "common" },
              { textEn: "Absolutely. I'll email you a summary and a letter confirming your coverage. Most doctors will take that as proof of insurance.", textZh: "没问题。我会邮件发给你摘要和确认覆盖的信件。大多数医生接受这个作为保险证明。", actionHint: "保存邮件给医生看", frequency: "common" },
            ],
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
            culturalNote: "在美国，配眼镜需要有效的验光处方（prescription），通常有效期1-2年。验光师（optometrist）和眼镜店（optical shop）通常是分开的。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Sure. We have an optometrist available in about 20 minutes. The eye exam is $75 without insurance. Have you had an eye exam before?",
            textZh: "好的。大约20分钟后有验光师空出来。没有保险的话，视力检查75美元。您以前做过验光检查吗？",
            keyPhrases: [
              { en: "optometrist", zh: "验光师" },
              { en: "eye exam", zh: "视力检查/验光" },
              { en: "prescription", zh: "处方/验光单" },
            ],
            alternativeExpressions: [
              { textEn: "We can fit you in for an exam shortly. Do you know your current prescription?", textZh: "我们很快可以安排验光。您知道您现在的度数吗？", actionHint: "提供现有度数信息", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, but it was a long time ago. I think my vision has gotten worse. Things are blurry at a distance.",
            textZh: "做过，但很久以前了。我觉得视力变差了。远处的东西看不清。",
          },
          {
            speaker: "them",
            role: "验光师",
            textEn: "Hello, I'm Dr. Lee. Let's start with the eye exam. Please sit in this chair and look at the chart on the wall. Can you read the letters on the third line?",
            textZh: "你好，我是 Lee 医生。我们开始验光吧。请坐在这把椅子上，看墙上的图表。能读出第三行的字母吗？",
            keyPhrases: [
              { en: "eye chart", zh: "视力表" },
              { en: "read the letters", zh: "读字母" },
              { en: "third line", zh: "第三行" },
            ],
            alternativeExpressions: [
              { textEn: "Hey, I'm Dr. Lee. Have a seat right here and look straight at the chart. Read the letters on the third line for me if you can.", textZh: "嘿，我是 Lee 医生。请坐这里，看正前方的图表。试试读一下第三行的字母。", actionHint: "尽力辨认字母", frequency: "common" },
              { textEn: "Hi there. Let's get started. Sit here, eyes on the wall chart. Can you make out the third row?", textZh: "你好。我们开始吧。坐这儿，看墙上的表。第三行能看清吗？", actionHint: "尝试读出字母", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "E, F, P... I can't make out the rest. It's too blurry.",
            textZh: "E、F、P……后面看不清了。太模糊了。",
          },
          {
            speaker: "them",
            role: "验光师",
            textEn: "That's okay. Now I'm going to place different lenses in front of your eyes. Tell me which is clearer — option one, or option two?",
            textZh: "没关系。现在我会在你眼前放不同的镜片。告诉我哪个更清楚——第一个，还是第二个？",
            keyPhrases: [
              { en: "lenses", zh: "镜片" },
              { en: "which is clearer", zh: "哪个更清楚" },
              { en: "option one or option two", zh: "第一个还是第二个" },
            ],
            vocabNotes: {
              lenses: { meaningInContext: "在这句话里表示：验光时用来测试的试戴镜片", similarUsage: "类似用法：These lenses correct your astigmatism." },
            },
            alternativeExpressions: [
              { textEn: "No worries. I'm gonna flip through some lenses now. Just tell me — one or two? Which one's sharper?", textZh: "没关系。我现在换不同的镜片。告诉我——一还是二？哪个更清楚？", actionHint: "选择更清晰的", frequency: "common" },
              { textEn: "That's fine, that tells me a lot. Now I'm going to test different lenses. Just say which looks better — A or B.", textZh: "没事，这就说明很多了。现在我要测试不同镜片。告诉我哪个看起来更好——A还是B。", actionHint: "如实对比选择", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Option two is clearer.",
            textZh: "第二个更清楚。",
          },
          {
            speaker: "them",
            role: "验光师",
            textEn: "Your prescription is -3.25 for the right eye and -2.75 for the left, with slight astigmatism in both eyes. Here's your prescription — it's valid for one year. You can get glasses made at any optical shop with this.",
            textZh: "你的处方是右眼 -3.25，左眼 -2.75，两只眼睛都有轻微散光。这是你的验光单——有效期一年。拿着这个可以去任何眼镜店配镜。",
            keyPhrases: [
              { en: "prescription", zh: "验光处方/度数" },
              { en: "right eye / left eye", zh: "右眼/左眼" },
              { en: "astigmatism", zh: "散光" },
              { en: "valid for one year", zh: "有效期一年" },
              { en: "optical shop", zh: "眼镜店" },
            ],
            vocabNotes: {
              astigmatism: { meaningInContext: "在这句话里表示：角膜形状不规则导致的散光", similarUsage: "类似用法：My astigmatism makes lights look streaky at night." },
            },
            alternativeExpressions: [
              { textEn: "Alright, so you're -3.25 in the right eye and -2.75 in the left, with a bit of astigmatism in both. Here's your script — it's good for a year. You can take it anywhere to get glasses made.", textZh: "好的，右眼 -3.25，左眼 -2.75，两只眼都有一点散光。这是你的处方——有效期一年。拿着它可以去任何地方配眼镜。", actionHint: "保管好处方单", frequency: "common" },
              { textEn: "So here's what we're looking at: minus 3.25 right, minus 2.75 left, slight astigmatism both sides. Your prescription's good for 12 months. Take it to any optical shop.", textZh: "情况是这样：右眼 -3.25，左眼 -2.75，两侧都有轻微散光。处方有效期12个月。拿去任何眼镜店都行。", actionHint: "一年内配镜有效", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. Do you sell glasses here too, or do I need to go somewhere else?",
            textZh: "谢谢。你们这里也卖眼镜吗，还是需要去别的地方？",
          },
          {
            speaker: "them",
            role: "验光师",
            textEn: "We have an optical shop right next door. They have a great selection of frames. Just give them your prescription and they'll help you pick out frames and lenses. New glasses usually take 3 to 5 days to make.",
            textZh: "我们隔壁就有一家眼镜店。镜框选择很多。把处方给他们就行，他们会帮你选镜框和镜片。新眼镜通常3到5天做好。",
            keyPhrases: [
              { en: "frames", zh: "镜框" },
              { en: "selection", zh: "选择/种类" },
              { en: "3 to 5 days to make", zh: "3到5天做好" },
            ],
            alternativeExpressions: [
              { textEn: "There's actually an optical shop right next door. They've got tons of frames. Just hand them your prescription and they'll take care of the rest. Usually takes 3 to 5 days.", textZh: "隔壁就有一家眼镜店。镜框超级多。把处方给他们就行了，其他他们会搞定。通常3到5天。", actionHint: "去隔壁眼镜店", frequency: "common" },
              { textEn: "We don't sell glasses here, but next door does. Big selection. Give them this prescription and they'll sort you out. Figure 3 to 5 days for new glasses.", textZh: "我们这不卖眼镜，但隔壁有。选择很多。把这个处方给他们就行。新眼镜大约3到5天。", actionHint: "带处方去隔壁", frequency: "common" },
            ],
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
            textEn: "Hi, I just got my eye exam done next door. Here's my prescription. I'd like to get a new pair of glasses.",
            textZh: "你好，我刚在隔壁做完验光。这是我的处方。我想配一副新眼镜。",
          },
          {
            speaker: "them",
            role: "眼镜店员",
            textEn: "Welcome! Let me see your prescription... -3.25 and -2.75 with astigmatism. No problem. Do you have a preference for frame style — full-rim, half-rim, or rimless?",
            textZh: "欢迎！让我看看您的处方……-3.25和-2.75，有散光。没问题。您对镜框款式有偏好吗——全框、半框还是无框？",
            keyPhrases: [
              { en: "full-rim", zh: "全框" },
              { en: "half-rim", zh: "半框" },
              { en: "rimless", zh: "无框" },
              { en: "frame style", zh: "镜框款式" },
            ],
            alternativeExpressions: [
              { textEn: "Hey, welcome! Let me take a look... -3.25 and -2.75, some astigmatism. Totally doable. So what kind of look are you going for — full frames, half-rim, or rimless?", textZh: "嘿，欢迎！我看看……-3.25和-2.75，有些散光。完全没问题。你喜欢什么款式——全框、半框还是无框？", actionHint: "选择喜欢的款式", frequency: "common" },
              { textEn: "Welcome in! Let's see your script... Yep, we can definitely work with this. Any idea what style you're after?", textZh: "欢迎！让我看看处方……嗯，完全可以做。你想要什么风格的？", actionHint: "描述偏好", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I prefer full-rim frames. Something lightweight and not too flashy. What's a good material?",
            textZh: "我喜欢全框的。要轻便的，不要太花哨。什么材质好？",
          },
          {
            speaker: "them",
            role: "眼镜店员",
            textEn: "For lightweight, I'd recommend titanium — it's very durable and hypoallergenic. These frames here are titanium, starting at $180. We also have acetate frames that are more affordable, starting at $80. Would you like to try a few on?",
            textZh: "要轻的话，推荐钛金属——非常耐用而且防过敏。这些钛金属镜框起价180美元。我们也有醋酸纤维镜框，更实惠，起价80美元。想试戴几副吗？",
            keyPhrases: [
              { en: "titanium", zh: "钛金属" },
              { en: "durable", zh: "耐用" },
              { en: "hypoallergenic", zh: "防过敏的" },
              { en: "acetate", zh: "醋酸纤维（板材）" },
              { en: "try a few on", zh: "试戴几副" },
            ],
            alternativeExpressions: [
              { textEn: "If you want light, go titanium — super strong and won't bother your skin. These start at $180. Or if you want something cheaper, we've got acetate starting at $80. Wanna try some on?", textZh: "要轻的话选钛金属——超结实而且不刺激皮肤。这些起价180美元。想便宜点的话有醋酸纤维的80美元起。要试戴吗？", actionHint: "试戴比较", frequency: "common" },
              { textEn: "Titanium's your best bet for lightweight — practically indestructible and hypoallergenic. Starts at $180. We also have plastic acetate frames from $80 if that's more your budget. Try a few!", textZh: "要轻的话钛金属最好——几乎不会坏还防过敏。180美元起。预算有限的话也有塑料醋酸纤维框80美元起。试试看！", actionHint: "根据预算选择", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll try the titanium ones. This dark brown pair looks nice. How do they look on me?",
            textZh: "我试试钛金属的。这副深棕色的不错。戴上好看吗？",
          },
          {
            speaker: "them",
            role: "眼镜店员",
            textEn: "They suit your face shape very well. The size is right too — not too wide, not too narrow. Now, for the lenses, would you like standard lenses or anti-reflective coating? I'd also recommend blue-light blocking lenses if you use a computer a lot.",
            textZh: "非常适合您的脸型。大小也合适——不会太宽也不会太窄。镜片方面，您要普通镜片还是加防反光涂层？如果经常用电脑，我还推荐防蓝光镜片。",
            keyPhrases: [
              { en: "face shape", zh: "脸型" },
              { en: "anti-reflective coating", zh: "防反光涂层" },
              { en: "blue-light blocking", zh: "防蓝光" },
              { en: "standard lenses", zh: "普通镜片" },
            ],
            alternativeExpressions: [
              { textEn: "Great fit! For lenses, do you want basic or premium? Premium includes anti-glare and scratch resistance.", textZh: "很合适！镜片要基础款还是高级款？高级款含防眩光和防刮。", actionHint: "选择镜片类型", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Anti-reflective and blue-light blocking, please. What's the total with the frames?",
            textZh: "要防反光和防蓝光的。加镜框一共多少？",
          },
          {
            speaker: "them",
            role: "眼镜店员",
            textEn: "The titanium frames are $220, standard lenses with your prescription are $120, anti-reflective coating is $40, and blue-light blocking is $30. The total comes to $410. Your glasses will be ready in 4 business days. We'll send you a text when they're ready to pick up.",
            textZh: "钛金属镜框220美元，您度数的标准镜片120美元，防反光涂层40美元，防蓝光30美元。总共410美元。您的眼镜4个工作日后可以取。做好了会发短信通知您。",
            keyPhrases: [
              { en: "total comes to", zh: "总共" },
              { en: "business days", zh: "工作日" },
              { en: "ready to pick up", zh: "可以来取" },
            ],
            alternativeExpressions: [
              { textEn: "So the frames are $220, lenses $120, anti-reflective $40, blue-light $30 — that's $410 all in. They'll be done in 4 business days and we'll text you when they're ready.", textZh: "镜框220，镜片120，防反光40，防蓝光30——总共410美元。4个工作日做好，好了给你发短信。", actionHint: "确认总价", frequency: "common" },
              { textEn: "Let me add that up — $220 frames, $120 lenses, plus $40 and $30 for the coatings. $410 total. Ready in about 4 business days. We'll shoot you a text.", textZh: "我算一下——镜框220，镜片120，加上涂层40和30。总共410美元。大约4个工作日好。我们会发短信通知你。", actionHint: "等待短信通知", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm leaving the country in 3 days. Is there any way to get them faster?",
            textZh: "我3天后就出境了。有办法快一点吗？",
          },
          {
            speaker: "them",
            role: "眼镜店员",
            textEn: "We can do rush service for an additional $60. They'd be ready by tomorrow afternoon. Alternatively, we can ship them to your home address internationally — shipping is about $25 and takes 7 to 10 days.",
            textZh: "我们可以加急，额外60美元。明天下午就能好。或者我们可以国际快递寄到您的家——运费大约25美元，7到10天到。",
            keyPhrases: [
              { en: "rush service", zh: "加急服务" },
              { en: "additional", zh: "额外的" },
              { en: "ship them", zh: "快递寄送" },
              { en: "internationally", zh: "国际的" },
            ],
            alternativeExpressions: [
              { textEn: "We can rush them for an extra $60 — ready by tomorrow afternoon. Or if you'd rather, we can ship them to your home overseas. Shipping's about $25, takes 7 to 10 days.", textZh: "加急的话额外60美元——明天下午好。或者我们可以寄到你海外的家。运费大约25美元，7到10天到。", actionHint: "选择加急或邮寄", frequency: "common" },
              { textEn: "There's a rush option — $60 extra, done by tomorrow. Otherwise, we can FedEx them to your address back home for about $25.", textZh: "有加急选项——多60美元，明天就好。不然的话可以联邦快递寄到你老家地址，大约25美元。", actionHint: "根据行程选择", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll do the rush service. Tomorrow afternoon works perfectly. Thank you!",
            textZh: "那就加急吧。明天下午正好。谢谢！",
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
            textEn: "Hi, I've been feeling very anxious and stressed lately. I'm traveling alone and I think I need to talk to someone. Do you offer counseling services?",
            textZh: "你好，我最近感到非常焦虑和压力大。我一个人在旅行，觉得需要找人谈谈。你们提供心理咨询服务吗？",
            culturalNote: "在欧美国家，寻求心理咨询是很正常的事。很多人定期看心理咨询师（therapist），就像定期看医生一样。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'm sorry to hear you're going through that. Yes, we do have counselors available. Are you in any immediate danger or having thoughts of harming yourself?",
            textZh: "很抱歉听到你正经历这些。是的，我们有咨询师。你现在有没有处于紧急危险中，或者有伤害自己的想法？",
            keyPhrases: [
              { en: "counselors", zh: "咨询师" },
              { en: "immediate danger", zh: "紧急危险" },
              { en: "thoughts of harming yourself", zh: "伤害自己的想法" },
            ],
            alternativeExpressions: [
              { textEn: "Thank you for reaching out. Before we schedule, I need to ask — are you safe right now?", textZh: "感谢你联系我们。在安排之前我需要问一下——你现在安全吗？", actionHint: "如实回答自己的状态", frequency: "common" },
            ],
            vocabNotes: {
              counselors: { meaningInContext: "在这句话里表示：提供心理咨询的专业人员", similarUsage: "类似用法：Our school has counselors for students who need support." },
            },
          },
          {
            speaker: "you",
            textEn: "No, nothing like that. I'm just feeling overwhelmed. I can't sleep well and I keep worrying about everything. I think it's the stress of being in a foreign country alone.",
            textZh: "没有，不是那样。就是感觉压力很大。睡不好觉，一直在担心各种事情。我觉得是一个人在国外的压力。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I understand. That's actually quite common for travelers. We have a counselor who specializes in adjustment issues and anxiety. She's available tomorrow at 3 PM. Would you prefer an in-person session or a video call?",
            textZh: "我理解。对旅行者来说这其实很常见。我们有一位专门处理适应问题和焦虑的咨询师。她明天下午3点有空。你想面对面咨询还是视频通话？",
            keyPhrases: [
              { en: "specializes in", zh: "专门处理" },
              { en: "adjustment issues", zh: "适应问题" },
              { en: "anxiety", zh: "焦虑" },
              { en: "in-person session", zh: "面对面咨询" },
              { en: "video call", zh: "视频通话" },
            ],
            alternativeExpressions: [
              { textEn: "That's totally normal, especially for solo travelers. We've got a counselor who deals with exactly this — anxiety, adjustment stuff. She's free tomorrow at 3. Do you want to come in or would a video session work?", textZh: "这完全正常，特别是独自旅行的人。我们有位咨询师专门处理这类问题——焦虑、适应之类的。她明天3点有空。你想来面谈还是视频？", actionHint: "选择咨询方式", frequency: "common" },
              { textEn: "You'd be surprised how many travelers feel the same way. We have a therapist who works with anxiety and cultural adjustment. She has an opening tomorrow afternoon — in person or video?", textZh: "你会惊讶有多少旅行者有同样的感受。我们有位专门处理焦虑和文化适应的咨询师。明天下午有空——面谈还是视频？", actionHint: "预约明天的时间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "In-person would be better. How much does a session cost? And is there a language barrier? My English is okay but sometimes I struggle to express emotions in English.",
            textZh: "面对面更好。一次咨询多少钱？语言会有障碍吗？我英语还行，但有时候用英语表达情绪有困难。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "A 50-minute session is $150. We don't have a Mandarin-speaking therapist on site, but Dr. Chen offers teletherapy in Mandarin. If you'd prefer English, our counselor Ms. Rivera is very experienced with international clients. She speaks slowly and clearly.",
            textZh: "50分钟的咨询150美元。我们这里没有说普通话的咨询师，但陈医生提供普通话的远程心理咨询。如果你更喜欢英语的话，我们的咨询师 Rivera 女士跟国际客户打交道经验很丰富。她说话慢而清楚。",
            keyPhrases: [
              { en: "session", zh: "咨询（一次）" },
              { en: "teletherapy", zh: "远程心理咨询" },
              { en: "international clients", zh: "国际客户" },
              { en: "Mandarin-speaking", zh: "说普通话的" },
            ],
            alternativeExpressions: [
              { textEn: "It's $150 for 50 minutes. We don't have a Mandarin-speaking therapist in the office, but we can set up a remote session in Mandarin with Dr. Chen. Or Ms. Rivera is great with international clients — she keeps things simple and easy to follow.", textZh: "50分钟150美元。我们办公室没有说中文的咨询师，但可以安排跟陈医生中文远程咨询。或者 Rivera 女士跟国际客户合作很棒——她说话简单容易懂。", actionHint: "选择语言和咨询师", frequency: "common" },
              { textEn: "A session runs $150. For Mandarin, we can do teletherapy with Dr. Chen. If English works for you, Ms. Rivera has tons of experience with folks who aren't native speakers.", textZh: "一次咨询150美元。要中文的话可以跟陈医生远程。英语没问题的话，Rivera 女士跟非母语人士合作经验丰富。", actionHint: "根据语言偏好选择", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll try the in-person session with Ms. Rivera in English. If I really can't express something, can I use my phone to translate?",
            textZh: "我试试跟 Rivera 女士用英语面谈。如果实在表达不了，可以用手机翻译吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course, that's totally fine. Many of our international clients do that. Ms. Rivera will make you feel comfortable. She'll go at your pace. Should I book the 3 PM slot for tomorrow?",
            textZh: "当然，完全可以。我们很多国际客户都这样做。Rivera 女士会让你感到舒适的。她会按你的节奏来。我帮你预约明天下午3点的吗？",
            keyPhrases: [
              { en: "go at your pace", zh: "按你的节奏来" },
              { en: "book the slot", zh: "预约时间段" },
              { en: "feel comfortable", zh: "感到舒适" },
            ],
            alternativeExpressions: [
              { textEn: "Oh absolutely, use your phone whenever you need to. Lots of our international clients do that. Ms. Rivera's super patient — she'll match your speed. Want me to lock in that 3 PM for you?", textZh: "当然可以，需要的时候随时用手机翻译。我们很多国际客户都这样。Rivera 女士超有耐心——她会配合你的节奏。帮你锁定3点的吗？", actionHint: "确认预约", frequency: "common" },
              { textEn: "For sure, that's no problem at all. She's used to working with people who use translation tools. She'll take it slow. Shall I book you in for 3 PM tomorrow?", textZh: "完全没问题。她习惯了跟使用翻译工具的人合作。她会慢慢来。帮你预约明天3点的吗？", actionHint: "确认预约时间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. Thank you for being so understanding.",
            textZh: "好的，麻烦了。谢谢你这么理解。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "You're doing the right thing by reaching out. Here's our crisis hotline number in case you need help before your appointment: 988. It's free, available 24/7, and they have multilingual support. See you tomorrow at 3.",
            textZh: "你主动寻求帮助是对的。这是我们的危机热线号码，以防你在预约前需要帮助：988。免费的，全天24小时服务，有多语言支持。明天3点见。",
            keyPhrases: [
              { en: "reaching out", zh: "主动求助" },
              { en: "crisis hotline", zh: "危机热线" },
              { en: "24/7", zh: "全天候/24小时" },
              { en: "multilingual support", zh: "多语言支持" },
            ],
            culturalNote: "988 是美国全国自杀和危机生命线（Suicide & Crisis Lifeline）。在英国是 116 123（Samaritans）。遇到心理危机可以随时拨打。",
            alternativeExpressions: [
              { textEn: "I'm really glad you reached out. Just in case you need someone before tomorrow — call 988, it's free, 24 hours, and they've got people who speak multiple languages. See you at 3.", textZh: "真的很高兴你主动联系了。以防万一明天前需要帮助——打988，免费的，24小时，有多语言服务。3点见。", actionHint: "记下988热线", frequency: "common" },
              { textEn: "You're taking a really brave step. Here — take this card with the 988 crisis line number. It's free and they're there around the clock. We'll see you tomorrow afternoon.", textZh: "你迈出了很勇敢的一步。拿着这张卡片，上面有988危机热线号码。免费全天候服务。明天下午见。", actionHint: "保存危机热线号码", frequency: "common" },
            ],
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
            textEn: "Hello, I'm Ms. Rivera. Welcome. This is a safe space — everything you share here is confidential. How are you feeling today?",
            textZh: "你好，我是 Rivera 女士。欢迎。这里是一个安全的空间——你分享的一切都是保密的。今天感觉怎么样？",
            keyPhrases: [
              { en: "safe space", zh: "安全的空间" },
              { en: "confidential", zh: "保密的" },
            ],
            vocabNotes: {
              confidential: { meaningInContext: "在这句话里表示：你说的话不会告诉别人，受法律保护的隐私", similarUsage: "类似用法：All patient records are strictly confidential." },
            },
            alternativeExpressions: [
              { textEn: "Hi there. I'm Ms. Rivera. Come on in, have a seat. Everything we talk about stays between us. So... how are you doing today?", textZh: "你好。我是 Rivera 女士。进来吧，请坐。我们谈的一切都是保密的。那……你今天怎么样？", actionHint: "放松表达感受", frequency: "common" },
              { textEn: "Welcome. I'm glad you came in. Just so you know, this is completely confidential — nothing leaves this room. Tell me, how are you feeling right now?", textZh: "欢迎。很高兴你来了。先说一下，这里完全保密——什么都不会外传。告诉我，你现在感觉怎么样？", actionHint: "如实表达感受", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. I'm feeling a bit nervous, actually. I've never done this before. In my culture, we don't usually talk about our feelings with strangers.",
            textZh: "谢谢。说实话有点紧张。我从来没做过心理咨询。在我的文化里，我们通常不跟陌生人谈论自己的感受。",
          },
          {
            speaker: "them",
            role: "咨询师",
            textEn: "That's completely okay. Many people feel that way at first. There's no pressure to share anything you're not ready for. Let's start simple — can you tell me what brought you here today?",
            textZh: "完全没关系。很多人一开始都这样。没有压力，不用分享你还没准备好说的。我们从简单的开始——能告诉我是什么让你来这里的吗？",
            keyPhrases: [
              { en: "no pressure", zh: "没有压力" },
              { en: "not ready for", zh: "还没准备好的" },
              { en: "what brought you here", zh: "什么让你来这里" },
            ],
            alternativeExpressions: [
              { textEn: "That's totally normal — a lot of people feel nervous the first time. You don't have to share anything you're not comfortable with. Why don't you start by telling me what made you decide to come in?", textZh: "这很正常——很多人第一次都会紧张。不用说你不想说的。不如先告诉我是什么让你决定来的？", actionHint: "从简单的开始说", frequency: "common" },
              { textEn: "Hey, that's okay. First time is always a little awkward. There's zero pressure here. Just tell me, in your own words, what's been going on.", textZh: "没关系的。第一次总是有点尴尬。这里完全没有压力。用你自己的话告诉我最近怎么了。", actionHint: "用自己的方式表达", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I've been traveling alone for three weeks. At first it was exciting, but now I feel lonely and anxious. I can't stop worrying — about safety, about money, about whether I'm wasting my time. I wake up at 3 AM and can't go back to sleep.",
            textZh: "我一个人旅行了三周。一开始很兴奋，但现在觉得孤独和焦虑。我停不下来地担心——安全、钱、是不是在浪费时间。凌晨3点醒来就再也睡不着了。",
          },
          {
            speaker: "them",
            role: "咨询师",
            textEn: "It sounds like you're carrying a lot of stress. The sleep disruption and constant worrying are signs that your anxiety is affecting your daily life. Have you experienced anxiety like this before, or is this new?",
            textZh: "听起来你承受了很大的压力。睡眠紊乱和持续的担忧是焦虑影响日常生活的表现。你以前有过这样的焦虑吗，还是这次是新的？",
            keyPhrases: [
              { en: "carrying a lot of stress", zh: "承受很大的压力" },
              { en: "sleep disruption", zh: "睡眠紊乱" },
              { en: "constant worrying", zh: "持续的担忧" },
              { en: "affecting your daily life", zh: "影响日常生活" },
            ],
            alternativeExpressions: [
              { textEn: "That sounds really heavy. The insomnia and the nonstop worrying — those are classic signs that your anxiety is kind of running the show. Has this ever happened to you before, or is this a new thing?", textZh: "听起来压力真的很大。失眠和不停地担心——这些是焦虑在主导一切的典型表现。你以前有过这样的情况吗，还是新出现的？", actionHint: "回忆以往经历", frequency: "common" },
              { textEn: "I hear you. What you're describing — the sleep problems, the constant worry — that's your anxiety really kicking in. Is this something you've dealt with before?", textZh: "我理解。你描述的——睡眠问题、持续的担忧——是焦虑在强烈影响你。你以前有过这种经历吗？", actionHint: "思考是否有焦虑史", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I've always been a worrier, but not this bad. I think being away from home and not speaking the language fluently makes everything harder.",
            textZh: "我一直都爱操心，但没有这么严重。我觉得离开家、语言又不太好，什么事都变得更难了。",
          },
          {
            speaker: "them",
            role: "咨询师",
            textEn: "That makes perfect sense. Being in a foreign environment without your support system can amplify existing anxiety. Let me teach you a simple grounding technique you can use when the worry gets overwhelming. It's called the 5-4-3-2-1 method — name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, and 1 you taste. It brings you back to the present moment.",
            textZh: "完全可以理解。在一个没有支持系统的陌生环境里会放大已有的焦虑。让我教你一个简单的扎根技巧，在担忧感太强的时候用。叫做5-4-3-2-1方法——说出5个你看到的东西，4个你能触摸的，3个你听到的，2个你闻到的，1个你尝到的。这会把你拉回当下。",
            keyPhrases: [
              { en: "support system", zh: "支持系统" },
              { en: "amplify", zh: "放大" },
              { en: "grounding technique", zh: "扎根技巧" },
              { en: "overwhelming", zh: "难以承受的" },
              { en: "present moment", zh: "当下" },
            ],
            vocabNotes: {
              grounding: { meaningInContext: "在这句话里表示：让人回到当下、脚踏实地的一种心理技巧", similarUsage: "类似用法：Grounding exercises help with panic attacks." },
            },
            alternativeExpressions: [
              { textEn: "That totally makes sense. Being alone in a new place without your people around — that can really crank up any anxiety you already had. Here's something you can try when it gets bad — it's called 5-4-3-2-1. You name 5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste. It pulls you back to right now.", textZh: "完全说得通。一个人在陌生的地方、身边没有熟悉的人——会把已有的焦虑放大。给你一个方法，焦虑严重的时候试试——叫5-4-3-2-1。说出5个你看到的、4个你摸到的、3个你听到的、2个你闻到的、1个你尝到的。把你拉回到当下。", actionHint: "今晚试试这个方法", frequency: "common" },
              { textEn: "Being away from home without your support network makes everything feel bigger. I want to give you a tool — the 5-4-3-2-1 grounding exercise. When the worry spirals, focus on your senses: 5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste.", textZh: "离开家没有支持网络会让一切感觉更严重。教你一个工具——5-4-3-2-1扎根练习。当担忧开始旋转时，关注你的感官：5个看到的、4个摸到的、3个听到的、2个闻到的、1个尝到的。", actionHint: "学习并练习扎根技巧", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds helpful. I'll try it tonight when I can't sleep. Should I continue seeing a therapist when I go home?",
            textZh: "听起来很有帮助。今晚睡不着的时候我试试。回国后需要继续看心理咨询师吗？",
          },
          {
            speaker: "them",
            role: "咨询师",
            textEn: "I'd recommend it. What you're feeling is manageable, but it helps to have ongoing support. When you go home, look for a therapist who specializes in anxiety — many offer online sessions now, so you can continue even remotely. You're already taking the most important step by talking about it.",
            textZh: "我建议继续。你的情况是可以处理的，但有持续的支持会有帮助。回国后找一个专攻焦虑的咨询师——很多现在提供线上咨询，所以可以远程继续。你已经迈出了最重要的一步——把它说出来。",
            keyPhrases: [
              { en: "manageable", zh: "可以处理的" },
              { en: "ongoing support", zh: "持续的支持" },
              { en: "online sessions", zh: "线上咨询" },
              { en: "taking the most important step", zh: "迈出最重要的一步" },
            ],
            alternativeExpressions: [
              { textEn: "I'd definitely keep it going. You've made a really good start, and having someone to talk to regularly makes a huge difference.", textZh: "我建议继续。你已经开了个好头，定期有人聊聊真的很有帮助。", actionHint: "表达感谢", frequency: "common" },
              { textEn: "For sure — what you're dealing with is totally treatable. A therapist back home can pick up right where we left off.", textZh: "当然——你的情况完全可以治疗。回国后的咨询师可以接着继续。", actionHint: "询问如何找咨询师", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you, Ms. Rivera. I already feel a bit lighter just from talking. I'll definitely look into continuing therapy back home.",
            textZh: "谢谢 Rivera 女士。光是说出来就已经轻松一些了。回国后我一定会考虑继续做咨询。",
          },
        ],
      },
    ],
  },

  // ==================== 急诊 ====================
  {
    id: "medical-urgent-care",
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
            textEn: "Hi, I need to see a doctor urgently. I've been having really bad stomach pain for the past few hours and it's getting worse.",
            textZh: "你好，我需要紧急看医生。过去几小时一直胃痛得厉害，而且越来越严重了。",
            culturalNote: "在美国，Urgent Care（紧急护理中心）和 Emergency Room/ER（急诊室）不同。Urgent Care 处理紧急但不危及生命的情况，费用更低、等候时间更短。",
          },
          {
            speaker: "them",
            role: "分诊护士",
            textEn: "I'm sorry you're in pain. Can you rate your pain on a scale of 1 to 10? And can you point to exactly where it hurts?",
            textZh: "很抱歉你这么痛。能给你的疼痛打个分吗，1到10分？能指一下确切哪里痛吗？",
            keyPhrases: [
              { en: "rate your pain", zh: "给疼痛打分" },
              { en: "on a scale of 1 to 10", zh: "1到10分" },
              { en: "point to", zh: "指出" },
            ],
            variations: [
              { textEn: "How severe is the pain? One being mild and ten being the worst you've ever felt.", textZh: "疼痛有多严重？1分是轻微的，10分是你经历过最痛的。" },
            ],
            alternativeExpressions: [
              { textEn: "On a scale of one to ten, how bad is it right now? And show me where it hurts.", textZh: "从1到10，现在有多痛？给我指一下哪里痛。", actionHint: "描述疼痛程度和位置", frequency: "common" },
              { textEn: "Can you describe the pain for me? Is it sharp, dull, crampy? And where exactly?", textZh: "能描述一下疼痛吗？是刺痛、钝痛还是绞痛？具体哪个位置？", actionHint: "描述疼痛类型", frequency: "occasional" },
            ],
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
              "sharp": {
                meaningInContext: "在这句话里表示：尖锐的、剧烈的（疼痛）",
                similarUsage: "类似用法：a sharp pain in my chest",
              },
            },
          },
          {
            speaker: "them",
            role: "分诊护士",
            textEn: "Lower right — that could be a few things. Do you have any nausea, vomiting, or fever? Any changes in appetite?",
            textZh: "右下方——可能是几种情况。有恶心、呕吐或发烧吗？食欲有变化吗？",
            keyPhrases: [
              { en: "nausea", zh: "恶心" },
              { en: "vomiting", zh: "呕吐" },
              { en: "appetite", zh: "食欲" },
            ],
            alternativeExpressions: [
              { textEn: "OK, lower right side. Any nausea? Throwing up? Fever?", textZh: "好的，右下方。恶心吗？呕吐吗？发烧吗？", actionHint: "如实回答症状", frequency: "common" },
              { textEn: "That area could be a number of things. Have you been nauseous at all? Any vomiting or loss of appetite?", textZh: "那个位置可能有几种情况。有恶心吗？有呕吐或没食欲吗？", actionHint: "描述伴随症状", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I've felt nauseous since this morning and I threw up once. No fever though. I haven't been able to eat anything.",
            textZh: "是的，从今早开始感觉恶心，吐了一次。没有发烧。什么都吃不下。",
          },
          {
            speaker: "them",
            role: "分诊护士",
            textEn: "Given the location and symptoms, we need to check for appendicitis. I'm going to bump you up in the queue. The doctor will see you within 15 minutes. In the meantime, please don't eat or drink anything — just in case you need surgery.",
            textZh: "根据疼痛位置和症状，我们需要检查是否是阑尾炎。我会把你的优先级提高。医生15分钟内会看你。这期间请不要吃喝任何东西——以防需要手术。",
            keyPhrases: [
              { en: "appendicitis", zh: "阑尾炎" },
              { en: "bump you up in the queue", zh: "提高你的排队优先级" },
              { en: "just in case", zh: "以防万一" },
            ],
            responseTip: "如果被告知可能需要手术，保持冷静。如有旅行保险，这时候可以提出来。",
            alternativeExpressions: [
              { textEn: "With pain in that spot plus the nausea, we need to rule out appendicitis. I'm moving you up — the doc will see you real soon. Don't eat or drink anything for now.", textZh: "那个位置的疼痛加上恶心，我们要排除阑尾炎。我帮你插队——医生很快来看你。先不要吃喝任何东西。", actionHint: "保持冷静配合检查", frequency: "common" },
              { textEn: "That sounds like it could be your appendix. I'm gonna get you in to see the doctor right away. Nothing to eat or drink in the meantime, OK?", textZh: "听起来可能是阑尾的问题。我马上安排医生来看你。这期间不要吃喝，好吗？", actionHint: "提供保险信息", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have travel insurance — will it cover this? Also, I have a friend who can translate if needed. My English is okay but I'm worried about missing important medical terms.",
            textZh: "我有旅行保险——这个能报销吗？另外，如果需要的话我有朋友可以帮忙翻译。我英语还行，但担心漏掉重要的医学术语。",
          },
          {
            speaker: "them",
            role: "分诊护士",
            textEn: "We'll check your insurance details — do you have the policy card or number? And don't worry, we also have interpreter services available by phone if you need them. You're doing great communicating. Let me get the doctor.",
            textZh: "我们来核实保险信息——你有保单卡或保单号吗？别担心，如果需要的话我们也有电话翻译服务。你的沟通能力很好。我去叫医生来。",
            keyPhrases: [
              { en: "policy card", zh: "保单卡" },
              { en: "interpreter services", zh: "翻译服务" },
              { en: "by phone", zh: "通过电话" },
            ],
            culturalNote: "美国大部分医疗机构都提供翻译服务，通常是电话翻译，按法律要求免费提供。不要犹豫提出需要翻译。",
            alternativeExpressions: [
              { textEn: "Sure, we'll look into your insurance. Got your policy info handy? And hey, we have phone interpreters available too — totally free.", textZh: "好的，我们来查你的保险。保险信息方便拿一下吗？对了，我们有电话翻译服务——完全免费。", actionHint: "提供保险卡", frequency: "common" },
              { textEn: "Do you have your insurance card on you? Also, just so you know, we can get a translator on the phone anytime — no charge.", textZh: "保险卡带了吗？顺便说一下，我们随时可以接通电话翻译——不收费。", actionHint: "出示保险信息", frequency: "common" },
            ],
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "Hello, I'm Dr. Chen. I've reviewed your symptoms. I'm going to do a physical exam and order some blood work and a CT scan to check for appendicitis. We'll have results within an hour. Are you allergic to any medications or contrast dye?",
            textZh: "你好，我是陈医生。我看过你的症状了。我给你做个体检，然后安排血液检查和CT扫描来检查阑尾炎。大约一小时出结果。你对任何药物或造影剂过敏吗？",
            keyPhrases: [
              { en: "physical exam", zh: "体检" },
              { en: "blood work", zh: "血液检查" },
              { en: "CT scan", zh: "CT扫描" },
              { en: "contrast dye", zh: "造影剂" },
            ],
            alternativeExpressions: [
              { textEn: "Hi there, I'm Dr. Chen. So I've gone over your chart. I want to examine you and run some tests — bloodwork and a CT scan. Any drug allergies I should know about?", textZh: "你好，我是陈医生。我看了你的病历。我想检查一下，做一些化验——验血和CT扫描。有什么药物过敏吗？", actionHint: "告知过敏史", frequency: "common" },
              { textEn: "Hey, I'm Dr. Chen. Based on what they've told me, I'd like to get some imaging done and draw some blood. Quick question — allergic to anything?", textZh: "嘿，我是陈医生。根据他们告诉我的情况，我想做个影像检查和抽血。先问一下——对什么过敏吗？", actionHint: "回答过敏问题", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "No allergies that I know of. Thank you, Doctor. I'm a bit scared but I trust you.",
            textZh: "据我所知没有过敏。谢谢医生。我有点害怕，但我信任你。",
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
            textEn: "The doctor will be in shortly with your results. How are you feeling? The pain medication should have kicked in by now.",
            textZh: "医生马上来告诉你结果。你现在感觉怎么样？止痛药现在应该起效了。",
            keyPhrases: [
              { en: "kicked in", zh: "起效了" },
              { en: "pain medication", zh: "止痛药" },
            ],
            alternativeExpressions: [
              { textEn: "The doctor's coming in with your results any minute now. How's the pain? The meds should be kicking in.", textZh: "医生马上带着结果来了。疼痛怎么样？药应该起效了。", actionHint: "描述目前疼痛程度", frequency: "common" },
              { textEn: "Hang tight — the doc will be right in. Are you feeling any better since we gave you the pain medication?", textZh: "再等一下——医生马上来。给你用了止痛药后感觉好点了吗？", actionHint: "说明疼痛变化", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "The pain is a little better now, maybe a 4 or 5. Thank you for the medication.",
            textZh: "现在好一点了，大概4到5分。谢谢给我用了药。",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "Good news — it's not appendicitis. The CT scan shows it's likely a kidney stone. It's small enough that it should pass on its own within a few days. I'm going to prescribe pain medication and an anti-nausea drug.",
            textZh: "好消息——不是阑尾炎。CT显示可能是肾结石。结石很小，应该几天内会自己排出来。我给你开止痛药和止吐药。",
            keyPhrases: [
              { en: "kidney stone", zh: "肾结石" },
              { en: "pass on its own", zh: "自己排出" },
              { en: "prescribe", zh: "开处方" },
              { en: "anti-nausea", zh: "止吐的" },
            ],
            alternativeExpressions: [
              { textEn: "So the CT came back — it's not your appendix, which is great. Looks like a kidney stone. The good news is it's small enough to pass on its own. I'll get you some meds for the pain.", textZh: "CT结果出来了——不是阑尾炎，好消息。看起来是肾结石。好在结石很小，能自己排出来。我给你开点止痛药。", actionHint: "询问注意事项", frequency: "common" },
              { textEn: "OK, I've got good news — not appendicitis. It looks like you're passing a kidney stone. It's small, so it should work its way out naturally in a few days.", textZh: "有个好消息——不是阑尾炎。看起来是在排肾结石。结石很小，几天内应该能自然排出。", actionHint: "询问后续治疗", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a relief! What should I watch out for? I'm traveling and don't have a regular doctor here.",
            textZh: "那就放心了！我需要注意什么？我在旅行，这里没有固定的医生。",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "Drink lots of water — at least 2 to 3 liters a day. That helps flush the stone out. If the pain gets much worse, you see blood in your urine, or you develop a fever, come back to the ER immediately.",
            textZh: "多喝水——每天至少2到3升。这有助于冲出结石。如果疼痛明显加重、尿里有血或者发烧了，立刻回急诊。",
            keyPhrases: [
              { en: "flush out", zh: "冲出/排出" },
              { en: "blood in your urine", zh: "尿里有血" },
              { en: "come back to the ER", zh: "回急诊" },
            ],
            alternativeExpressions: [
              { textEn: "Hydrate, hydrate, hydrate — at least 2 to 3 liters a day. That'll help push the stone through. If the pain spikes, you see blood when you pee, or you get a fever, come straight back.", textZh: "补水补水补水——每天至少2到3升。帮助推动结石排出。如果疼痛加剧、尿中带血或发烧，立刻回来。", actionHint: "询问就诊费用", frequency: "common" },
              { textEn: "Most important thing — drink a ton of water. That helps flush it out. Red flags to watch for: way worse pain, blood in your urine, or fever. Any of those, head right back to the ER.", textZh: "最重要的——大量喝水。帮助冲出结石。需要警惕的：疼痛明显加重、尿中有血或发烧。出现任何一种，直接回急诊。", actionHint: "确认注意事项", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much will this visit cost? And can I get a medical report for my insurance company back home?",
            textZh: "这次就诊大概要多少钱？我能拿一份医疗报告给国内的保险公司吗？",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "The billing department can give you an itemized bill. The total depends on your insurance, but we'll provide all documentation. Ask the front desk for a detailed medical report and receipts — you'll need those for your insurance claim.",
            textZh: "计费部门可以给你一份分项账单。总费用取决于你的保险，但我们会提供所有文件。找前台要一份详细的医疗报告和收据——申请保险理赔需要这些。",
            keyPhrases: [
              { en: "itemized bill", zh: "分项账单" },
              { en: "medical report", zh: "医疗报告" },
              { en: "insurance claim", zh: "保险理赔" },
            ],
            alternativeExpressions: [
              { textEn: "Talk to the front desk about billing — they can break it all down for you. Make sure you grab an itemized receipt and a medical report. You'll need those for your insurance back home.", textZh: "跟前台聊一下费用——他们会给你分项列明。记得拿分项收据和医疗报告。回国报销需要。", actionHint: "去前台办手续", frequency: "common" },
              { textEn: "We'll get you all the paperwork. Just ask at checkout for an itemized bill and a letter summarizing your visit — your insurance company will want those.", textZh: "我们会给你所有文件。结账时跟前台要分项账单和就诊摘要信——你的保险公司需要这些。", actionHint: "索取文件", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you, Doctor. Can I pick up the prescription at any pharmacy?",
            textZh: "谢谢医生。处方药可以在任何药房取吗？",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "Yes, I'm sending it electronically to the CVS on Main Street — it's the closest one. It should be ready in about 30 minutes. Here's a summary of your visit, your prescriptions, and my card in case you need a follow-up. Take care and drink that water!",
            textZh: "是的，我已经通过电子处方发到Main Street的CVS药房了——那是最近的一家。大约30分钟就能取。这是你的就诊摘要、处方和我的名片，需要复诊的话联系我。保重，记得多喝水！",
            keyPhrases: [
              { en: "electronically", zh: "通过电子方式" },
              { en: "follow-up", zh: "复诊" },
              { en: "summary of your visit", zh: "就诊摘要" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, I'm e-prescribing it to the CVS down the street. Should be ready in about half an hour. Here's your visit summary and my card — call if anything changes.", textZh: "是的，我电子处方发到附近的CVS了。大约半小时能取。这是就诊摘要和我的名片——有变化打电话给我。", actionHint: "前往药房取药", frequency: "common" },
              { textEn: "I'll shoot it over to the nearest CVS electronically. Give them about 30 minutes. And here — take my card in case you need to follow up.", textZh: "我电子发到最近的CVS。给他们大约30分钟准备。拿着我的名片，需要复诊的话联系我。", actionHint: "前往取药", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I will. Thank you so much for your help. I feel much better knowing what it is.",
            textZh: "会的。非常感谢你的帮助。知道是什么问题后感觉安心多了。",
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
            textEn: "Doctor, I've developed a rash on my arms and neck. It appeared two days ago and it's really itchy.",
            textZh: "医生，我胳膊和脖子上长了皮疹。两天前出现的，特别痒。",
          },
          {
            speaker: "them",
            role: "皮肤科医生",
            textEn: "Let me take a look. Hmm, the rash is red, raised, and slightly bumpy. Have you been exposed to anything new recently — new food, laundry detergent, plants, or skincare products?",
            textZh: "让我看看。嗯，皮疹是红色的，凸起的，有点小疙瘩。你最近接触了什么新东西吗——新食物、洗衣液、植物或护肤品？",
            keyPhrases: [
              { en: "rash", zh: "皮疹" },
              { en: "itchy", zh: "痒的" },
              { en: "raised", zh: "凸起的" },
              { en: "bumpy", zh: "有疙瘩的" },
              { en: "exposed to", zh: "接触到" },
            ],
            alternativeExpressions: [
              { textEn: "OK, let me see... Yeah, it's definitely irritated — red, bumpy, slightly raised. Have you come into contact with anything new lately? New foods, soaps, plants?", textZh: "好，我看看……嗯，确实有刺激——红的、有小疙瘩、微凸。你最近接触了什么新东西吗？新食物、肥皂、植物？", actionHint: "回忆近期接触物", frequency: "common" },
              { textEn: "Hmm, I can see the rash clearly. It's raised and bumpy. Think back — any new products? Detergent, sunscreen, anything like that?", textZh: "嗯，我能清楚看到皮疹。凸起的，有小疙瘩。回想一下——有用什么新产品吗？洗衣液、防晒霜之类的？", actionHint: "列举最近用过的新产品", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I've been hiking a lot and may have touched some plants. Also, I've been using a new sunscreen I bought here.",
            textZh: "我最近经常徒步，可能碰到了一些植物。另外我一直在用在这里买的新防晒霜。",
          },
          {
            speaker: "them",
            role: "皮肤科医生",
            textEn: "It looks like contact dermatitis — probably a reaction to either the plants or the sunscreen. Stop using that sunscreen immediately. I'm going to prescribe a topical steroid cream to reduce the inflammation and an antihistamine for the itching.",
            textZh: "看起来是接触性皮炎——可能是对植物或防晒霜的反应。立刻停用那款防晒霜。我给你开一支外用类固醇药膏来消炎，还有一种抗组胺药来止痒。",
            keyPhrases: [
              { en: "contact dermatitis", zh: "接触性皮炎" },
              { en: "topical steroid cream", zh: "外用类固醇药膏" },
              { en: "inflammation", zh: "炎症" },
              { en: "antihistamine", zh: "抗组胺药" },
            ],
            alternativeExpressions: [
              { textEn: "This is classic contact dermatitis — your skin reacted to something it touched. Ditch that sunscreen right away. I'm giving you a steroid cream and some antihistamines.", textZh: "这是典型的接触性皮炎——皮肤对接触的东西起了反应。立刻扔掉那个防晒霜。我给你开类固醇药膏和抗组胺药。", actionHint: "询问用药方法", frequency: "common" },
              { textEn: "Looks like a contact allergy — could be the plants, could be the sunscreen. Stop using that sunscreen today. I'll prescribe a cream to calm it down and something for the itch.", textZh: "看起来是接触过敏——可能是植物也可能是防晒霜。今天就停用那个防晒霜。我开个药膏消炎，再开个止痒的。", actionHint: "确认停用防晒霜", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "How often should I apply the cream?",
            textZh: "药膏多久涂一次？",
          },
          {
            speaker: "them",
            role: "皮肤科医生",
            textEn: "Apply a thin layer twice a day — morning and evening — for one week. Don't scratch the rash even if it's tempting. Keep the area clean and dry. If it spreads or you develop blisters, come back right away.",
            textZh: "薄薄涂一层，每天两次——早晚各一次——涂一周。即使很痒也不要抓。保持患处清洁干燥。如果皮疹扩散或起水泡，立刻回来。",
            keyPhrases: [
              { en: "thin layer", zh: "薄薄一层" },
              { en: "scratch", zh: "抓/挠" },
              { en: "blisters", zh: "水泡" },
              { en: "spreads", zh: "扩散" },
            ],
            alternativeExpressions: [
              { textEn: "Rub on a thin layer morning and night for a week. Try not to scratch it, even though I know it's hard. Keep the area clean and dry. If it gets worse or you see blisters, come back ASAP.", textZh: "早晚各薄涂一次，涂一周。尽量别挠，虽然我知道很难忍。保持患处清洁干燥。如果加重或起水泡，尽快回来。", actionHint: "询问日常注意事项", frequency: "common" },
              { textEn: "Twice a day — just a little bit, you don't need a lot. Morning and before bed. And whatever you do, don't scratch — that'll make it worse.", textZh: "每天两次——涂一点点就够了。早上和睡前。千万别挠——会更严重的。", actionHint: "了解涂药细节", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I still go swimming or be in the sun?",
            textZh: "我还能去游泳或晒太阳吗？",
          },
          {
            speaker: "them",
            role: "皮肤科医生",
            textEn: "Avoid direct sun exposure on the affected areas for at least a week. Chlorine in pools might irritate it further. When you go outside, use a hypoallergenic, fragrance-free sunscreen — I can recommend a brand.",
            textZh: "至少一周内避免患处直接晒太阳。泳池里的氯可能会进一步刺激皮肤。外出时用低敏、无香精的防晒霜——我可以推荐一个牌子。",
            keyPhrases: [
              { en: "sun exposure", zh: "晒太阳/日晒" },
              { en: "chlorine", zh: "氯" },
              { en: "hypoallergenic", zh: "低敏的" },
              { en: "fragrance-free", zh: "无香精的" },
            ],
            alternativeExpressions: [
              { textEn: "Stay out of the sun for at least a week, especially on the rash areas. Pool chlorine could make it worse too. When you do go out, grab a hypoallergenic sunscreen — I can point you to a good one.", textZh: "至少一周别晒太阳，尤其是皮疹的地方。泳池的氯也可能加重。出门时用低敏防晒霜——我可以推荐一个。", actionHint: "请医生推荐品牌", frequency: "common" },
              { textEn: "No direct sun on those areas for a week, minimum. And I'd skip the pool — the chlorine won't do you any favors. Use a fragrance-free sunscreen when you're outside.", textZh: "至少一周内那些地方不能直晒。游泳也先别去——氯水对皮肤没好处。出门用无香精防晒霜。", actionHint: "确认防晒注意事项", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please recommend one. Thank you, Doctor. How long until the rash goes away?",
            textZh: "好的，请推荐一个。谢谢医生。皮疹多久能好？",
          },
          {
            speaker: "them",
            role: "皮肤科医生",
            textEn: "With the medication, you should see improvement in 3 to 5 days. It should clear up completely within two weeks. Here's the prescription — any pharmacy can fill it.",
            textZh: "用药的话，3到5天应该能看到改善。两周内应该完全消退。这是处方——任何药房都能取。",
            keyPhrases: [
              { en: "improvement", zh: "改善" },
              { en: "clear up", zh: "消退/好转" },
              { en: "fill it", zh: "取药/配药" },
            ],
            alternativeExpressions: [
              { textEn: "You should start seeing it clear up in three to five days. Give it about two weeks to fully go away. Here's the prescription — any pharmacy can fill it for you.", textZh: "三到五天应该能看到好转。大约两周完全消退。这是处方——任何药房都能取。", actionHint: "前往药房取药", frequency: "common" },
              { textEn: "Most people feel a lot better within a few days on the cream. It'll take a couple weeks to clear up completely. Take this to any pharmacy.", textZh: "大多数人涂了药膏几天内就会好很多。完全好需要两周左右。拿这个去任何药房都行。", actionHint: "去药房配药", frequency: "common" },
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
            textEn: "I got badly sunburned at the beach yesterday. My shoulders and back are bright red, and now there are blisters forming.",
            textZh: "我昨天在海滩严重晒伤了。肩膀和后背通红，现在开始起水泡了。",
          },
          {
            speaker: "them",
            role: "皮肤科医生",
            textEn: "Let me examine the burns. This is a second-degree sunburn — the blistering tells me the deeper layers of skin are affected. Do you feel feverish or nauseous?",
            textZh: "让我检查一下。这是二度晒伤——起水泡说明伤到了更深层的皮肤。你有发烧或恶心的感觉吗？",
            keyPhrases: [
              { en: "second-degree sunburn", zh: "二度晒伤" },
              { en: "blistering", zh: "起水泡" },
              { en: "deeper layers", zh: "更深层" },
              { en: "feverish", zh: "发烧的感觉" },
            ],
            alternativeExpressions: [
              { textEn: "OK, let me take a look... This is pretty bad — it's a second-degree burn. The blisters mean it's gone deeper than just the surface. Are you feeling feverish or sick at all?", textZh: "好，我看看……这挺严重的——是二度烧伤。起水泡说明伤到了深层皮肤。你有发烧或不舒服吗？", actionHint: "如实描述全身症状", frequency: "common" },
              { textEn: "Yikes — that's a second-degree sunburn. Blistering like this means the deeper skin layers got hit. Any fever or nausea?", textZh: "哎呀——这是二度晒伤。这样起水泡说明深层皮肤受损了。有发烧或恶心吗？", actionHint: "告知伴随症状", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "A little nauseous, yes. And I had a headache last night. I was out in the sun for about 4 hours and forgot to reapply sunscreen.",
            textZh: "有一点恶心。昨晚还头痛了。我在太阳下待了大约4个小时，忘了补涂防晒霜。",
          },
          {
            speaker: "them",
            role: "皮肤科医生",
            textEn: "The nausea and headache could be signs of sun poisoning — that's a more severe reaction. I want you to drink plenty of water because dehydration makes it worse. Don't pop the blisters — they protect the skin underneath.",
            textZh: "恶心和头痛可能是日光中毒的症状——那是更严重的反应。多喝水，因为脱水会加重症状。不要挑破水泡——它们保护下面的皮肤。",
            keyPhrases: [
              { en: "sun poisoning", zh: "日光中毒" },
              { en: "dehydration", zh: "脱水" },
              { en: "pop the blisters", zh: "挑破水泡" },
            ],
            alternativeExpressions: [
              { textEn: "The headache and nausea tell me this might be sun poisoning — that's a step beyond regular sunburn. You need to be drinking lots of water. And leave those blisters alone — don't pop them.", textZh: "头痛和恶心可能是日光中毒——比普通晒伤严重一级。你要大量喝水。水泡别碰——不要挑破。", actionHint: "询问护理方法", frequency: "common" },
              { textEn: "With the nausea and headache, I'm thinking sun poisoning — it's basically your body's reaction to too much UV. Hydrate like crazy and do not touch those blisters.", textZh: "有恶心和头痛的话，我觉得是日光中毒——基本上是身体对过多紫外线的反应。疯狂补水，不要碰水泡。", actionHint: "确认注意事项", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What should I put on it? I've been using aloe vera gel.",
            textZh: "应该涂什么？我一直在涂芦荟胶。",
          },
          {
            speaker: "them",
            role: "皮肤科医生",
            textEn: "Aloe vera is good for mild sunburn, but for this severity, I'm prescribing a prescription-strength burn cream. Apply it gently three times a day. Take ibuprofen for the pain and inflammation. Wear loose, soft clothing — nothing tight on those shoulders.",
            textZh: "芦荟胶对轻微晒伤有用，但这个程度的话，我给你开一支处方级别的烧伤药膏。每天轻涂三次。吃布洛芬止痛消炎。穿宽松柔软的衣服——肩膀那里不要穿紧的。",
            keyPhrases: [
              { en: "prescription-strength", zh: "处方级别的" },
              { en: "burn cream", zh: "烧伤药膏" },
              { en: "ibuprofen", zh: "布洛芬" },
              { en: "loose clothing", zh: "宽松的衣服" },
            ],
            alternativeExpressions: [
              { textEn: "Aloe's fine for a regular sunburn, but yours needs something stronger. I'm writing you a script for a prescription burn cream. Apply it gently three times a day. Pop some ibuprofen for the swelling.", textZh: "芦荟胶对普通晒伤还行，但你的需要更强效的。我给你开处方烧伤药膏。每天轻涂三次。吃点布洛芬消肿。", actionHint: "确认用药细节", frequency: "common" },
              { textEn: "For a burn this bad, aloe isn't gonna cut it. I'm prescribing a medicated cream — use it three times a day, nice and gentle. And take ibuprofen to help with the pain and swelling. Loose clothes only.", textZh: "这么严重的晒伤，芦荟不够用。我开个药膏——每天三次，轻轻涂。吃布洛芬止痛消肿。只穿宽松衣服。", actionHint: "了解涂药方法", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Will I be able to continue my trip? We have outdoor activities planned for the next few days.",
            textZh: "我还能继续旅行吗？接下来几天安排了户外活动。",
          },
          {
            speaker: "them",
            role: "皮肤科医生",
            textEn: "You need to stay completely out of the sun for at least 3 to 4 days. After that, cover up with long sleeves, a hat, and SPF 50+ sunscreen. Reapply every two hours, and every 30 minutes if you're swimming. Your skin will be extra sensitive for several weeks.",
            textZh: "你至少3到4天要完全避免晒太阳。之后穿长袖、戴帽子，涂SPF 50+的防晒霜。每两个小时补涂一次，如果游泳的话每30分钟一次。你的皮肤在接下来几周会特别敏感。",
            keyPhrases: [
              { en: "cover up", zh: "遮挡/穿长袖" },
              { en: "SPF", zh: "防晒指数" },
              { en: "reapply", zh: "补涂" },
              { en: "extra sensitive", zh: "特别敏感" },
            ],
            culturalNote: "SPF（Sun Protection Factor）是全球通用的防晒指数。SPF 30 能阻挡约97%的UVB，SPF 50能阻挡约98%。关键是要足量、勤补涂。",
            alternativeExpressions: [
              { textEn: "Zero sun for at least three or four days — I mean it. After that, cover up: long sleeves, hat, SPF 50 minimum. Reapply every two hours. Your skin's gonna be touchy for weeks.", textZh: "至少三四天完全不能晒太阳——我是认真的。之后要遮挡：长袖、帽子，最少SPF 50。每两小时补涂。你的皮肤接下来几周会很敏感。", actionHint: "调整旅行计划", frequency: "common" },
              { textEn: "You gotta stay inside for the next few days — no sun at all. When you do go back out, hat, long sleeves, high SPF sunscreen, and keep reapplying.", textZh: "接下来几天必须待在室内——完全不能晒太阳。再出门时，帽子、长袖、高倍防晒霜，记得不断补涂。", actionHint: "确认恢复时间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I understand. I'll be more careful from now on. Thank you, Doctor.",
            textZh: "明白了。以后我会更小心的。谢谢医生。",
          },
          {
            speaker: "them",
            role: "皮肤科医生",
            textEn: "You're welcome. And one more thing — if the blisters break on their own, keep the area clean with mild soap and apply antibiotic ointment. Come back if you see signs of infection — pus, increased redness, or fever.",
            textZh: "不客气。还有一件事——如果水泡自己破了，用温和的肥皂清洁患处，涂抗生素药膏。如果出现感染迹象——化脓、红肿加重或发烧——立刻回来。",
            keyPhrases: [
              { en: "antibiotic ointment", zh: "抗生素药膏" },
              { en: "infection", zh: "感染" },
              { en: "pus", zh: "脓" },
              { en: "mild soap", zh: "温和的肥皂" },
            ],
            alternativeExpressions: [
              { textEn: "No problem. Oh, and if a blister pops on its own, just keep it clean — wash with gentle soap and dab on some antibiotic cream. If you see any pus or the redness gets worse, or you spike a fever, come see me right away.", textZh: "没事。对了，如果水泡自己破了，保持清洁就行——用温和肥皂洗，抹一点抗生素药膏。如果看到化脓、红肿加重或发烧，立刻来找我。", actionHint: "记住感染迹象", frequency: "common" },
              { textEn: "One last thing — don't pop the blisters, but if they burst, clean the area with mild soap and put antibiotic ointment on. Watch for signs of infection: pus, spreading redness, or fever.", textZh: "最后一件事——别挑水泡，但如果破了，用温和肥皂清洁，涂抗生素药膏。注意感染迹象：化脓、红肿扩散或发烧。", actionHint: "了解后续护理", frequency: "common" },
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
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Good morning, Mr. Wang. Yes, I can see your appointment. Have you fasted since last night? The blood work requires an empty stomach.",
            textZh: "早上好，王先生。是的，我查到你的预约了。你从昨晚开始禁食了吗？抽血需要空腹。",
            keyPhrases: [
              { en: "fasted", zh: "禁食/空腹" },
              { en: "blood work", zh: "抽血化验" },
              { en: "empty stomach", zh: "空腹" },
            ],
            alternativeExpressions: [
              { textEn: "Morning! Yep, got you right here. Quick question — have you been fasting? We need an empty stomach for the bloodwork.", textZh: "早上好！找到你的预约了。快问一下——空腹了吗？抽血需要空腹。", actionHint: "确认禁食情况", frequency: "common" },
              { textEn: "Hi Mr. Wang, welcome in. I see your 9 AM appointment. Did you fast since last night? Nothing to eat or drink except water?", textZh: "王先生你好，欢迎。我看到你9点的预约了。昨晚开始禁食了吗？除了水什么都没吃喝？", actionHint: "确认空腹", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I haven't eaten or had coffee since 10 PM last night. Just water.",
            textZh: "是的，昨晚10点后就没有吃东西也没喝咖啡了。只喝了水。",
          },
          {
            speaker: "them",
            role: "护士",
            textEn: "Perfect. Let me start with your vitals. I'll take your blood pressure, heart rate, height, and weight. Then we'll draw blood for the lab work. Are you afraid of needles at all?",
            textZh: "很好。我先量基本生命体征。量血压、心率、身高和体重。然后抽血做化验。你怕打针吗？",
            keyPhrases: [
              { en: "vitals", zh: "基本生命体征" },
              { en: "blood pressure", zh: "血压" },
              { en: "heart rate", zh: "心率" },
              { en: "draw blood", zh: "抽血" },
              { en: "lab work", zh: "化验" },
            ],
            alternativeExpressions: [
              { textEn: "Great, let's get started. I'll check your blood pressure, pulse, height and weight first, then we'll draw some blood. You OK with needles?", textZh: "好，开始吧。我先量血压、脉搏、身高体重，然后抽血。你怕针吗？", actionHint: "配合检查", frequency: "common" },
              { textEn: "Alright, first things first — let me grab your vitals. BP, heart rate, the usual. Then we'll do the blood draw. Not too nervous about needles, are you?", textZh: "好的，先来基本的——量一下生命体征。血压、心率，常规的。然后抽血。不太怕打针吧？", actionHint: "告知是否怕针", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "A little, but I'll be fine. What does the blood test check for?",
            textZh: "有一点点，但没关系。验血检查什么项目？",
          },
          {
            speaker: "them",
            role: "护士",
            textEn: "We're running a comprehensive metabolic panel — that checks your blood sugar, cholesterol, liver function, and kidney function. We'll also do a complete blood count to check your red and white blood cells. The whole thing takes about 5 minutes.",
            textZh: "我们做的是综合代谢面板——检查血糖、胆固醇、肝功能和肾功能。还有一个全血细胞计数，检查红细胞和白细胞。整个过程大约5分钟。",
            keyPhrases: [
              { en: "comprehensive metabolic panel", zh: "综合代谢面板" },
              { en: "blood sugar", zh: "血糖" },
              { en: "cholesterol", zh: "胆固醇" },
              { en: "liver function", zh: "肝功能" },
              { en: "kidney function", zh: "肾功能" },
              { en: "complete blood count", zh: "全血细胞计数" },
            ],
            alternativeExpressions: [
              { textEn: "We're doing a full metabolic panel — so that covers blood sugar, cholesterol, liver, kidneys. Plus a CBC to check your red and white cells. The whole thing's over in like five minutes.", textZh: "我们做全套代谢面板——包括血糖、胆固醇、肝、肾。再加一个全血计数查红白细胞。整个过程大概五分钟。", actionHint: "询问额外检查项目", frequency: "common" },
              { textEn: "It's a pretty standard panel — cholesterol, blood sugar, liver and kidney function. We'll also count your blood cells to make sure everything looks good there. Quick and easy.", textZh: "是很标准的面板——胆固醇、血糖、肝功能和肾功能。还会数一下血细胞确保正常。又快又简单。", actionHint: "了解检查内容", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. I've been feeling more tired than usual lately. Could that be related to something the blood test would show?",
            textZh: "了解了。我最近比平时更容易累。验血能查出原因吗？",
          },
          {
            speaker: "them",
            role: "护士",
            textEn: "It could be several things — low iron, thyroid issues, or vitamin D deficiency. I'll make a note for the doctor. We can add a thyroid panel and iron levels to your blood work. All done with the draw — you did great!",
            textZh: "可能有几种原因——缺铁、甲状腺问题或维生素D缺乏。我给医生备注一下。我们可以在验血里加上甲状腺和铁的检查。抽完了——你做得很好！",
            keyPhrases: [
              { en: "low iron", zh: "缺铁" },
              { en: "thyroid", zh: "甲状腺" },
              { en: "vitamin D deficiency", zh: "维生素D缺乏" },
            ],
            alternativeExpressions: [
              { textEn: "Could be a few things — anemia, thyroid, low vitamin D. I'll flag it for the doctor. We can tack on a thyroid panel and iron levels to your bloodwork. And... all done! You did great.", textZh: "可能有几种原因——贫血、甲状腺、维D低。我给医生备注。验血可以加上甲状腺和铁的检查。好了……抽完了！你做得很好。", actionHint: "等待结果", frequency: "common" },
              { textEn: "The tiredness could be iron, could be thyroid, maybe vitamin D. Let me add those to your panel so we catch everything. Aaand... done! Not so bad, right?", textZh: "疲劳可能是缺铁、甲状腺或维生素D的问题。我加到化验项目里一起查。好了……完了！没那么可怕吧？", actionHint: "确认后续流程", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. When will the results be ready?",
            textZh: "谢谢。结果什么时候出？",
          },
          {
            speaker: "them",
            role: "护士",
            textEn: "Most results will be available within 24 to 48 hours. You can check them online through our patient portal, or we'll call you if anything needs attention. The doctor will review everything and send you a summary.",
            textZh: "大部分结果24到48小时内出。你可以通过我们的患者门户在线查看，如果有什么需要注意的我们会打电话给你。医生会审核所有结果，然后发一份摘要给你。",
            keyPhrases: [
              { en: "patient portal", zh: "患者门户/在线平台" },
              { en: "needs attention", zh: "需要注意" },
              { en: "summary", zh: "摘要" },
            ],
            alternativeExpressions: [
              { textEn: "Results usually take a day or two. You can check online through our patient portal, or we'll give you a call if anything's off. The doctor will go through everything and send you a summary.", textZh: "结果通常一两天出。可以通过我们的患者门户在线查，如果有异常我们会打电话。医生会审核然后发摘要给你。", actionHint: "确认查看方式", frequency: "common" },
              { textEn: "Give it 24 to 48 hours. You'll be able to see everything on the portal, and the doctor will reach out if anything needs follow-up.", textZh: "24到48小时出结果。门户上都能看到，如果有需要跟进的医生会联系你。", actionHint: "记录门户信息", frequency: "common" },
            ],
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
            textEn: "Mr. Wang, thanks for coming back. I've reviewed all your lab results. The good news is that most things look normal. However, there are a couple of things I want to discuss.",
            textZh: "王先生，感谢回来复查。我审核了你所有的化验结果。好消息是大部分都正常。不过有几个地方我想跟你聊一下。",
            keyPhrases: [
              { en: "lab results", zh: "化验结果" },
              { en: "a couple of things", zh: "几个地方" },
            ],
            alternativeExpressions: [
              { textEn: "Hi Mr. Wang, welcome back. So I've gone through all your labs. Mostly good news — things look pretty normal overall, but there are a couple things I want to go over with you.", textZh: "王先生你好，欢迎回来。我看完了所有化验结果。大部分是好消息——总体正常，但有几个地方想跟你聊聊。", actionHint: "认真听取结果", frequency: "common" },
              { textEn: "Good to see you again. I've got your results here. Nothing alarming, but there are a few numbers I want to talk about.", textZh: "很高兴再见到你。结果在这里。没什么大问题，但有几个数值想跟你说一下。", actionHint: "询问具体情况", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, please go ahead. What did you find?",
            textZh: "好的，请说。发现了什么？",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "Your cholesterol is a bit elevated — total cholesterol is 225, and ideally we want it below 200. Your LDL, which is the \"bad\" cholesterol, is 140 — a bit high. Also, your vitamin D levels are quite low, which could explain the fatigue you mentioned.",
            textZh: "你的胆固醇偏高一点——总胆固醇225，理想情况下我们希望在200以下。你的LDL，也就是\"坏\"胆固醇，是140——偏高。另外你的维生素D水平很低，这可能解释了你说的疲劳感。",
            keyPhrases: [
              { en: "elevated", zh: "偏高的" },
              { en: "LDL", zh: "低密度脂蛋白/坏胆固醇" },
              { en: "vitamin D levels", zh: "维生素D水平" },
              { en: "fatigue", zh: "疲劳" },
            ],
            alternativeExpressions: [
              { textEn: "So your cholesterol's running a bit high — 225 total, and your LDL — that's the bad one — is at 140. We'd like those numbers lower. Also, your vitamin D is really low, which might explain why you've been so tired.", textZh: "你的胆固醇偏高——总共225，LDL也就是坏胆固醇是140。我们希望这些数值低一些。还有维生素D很低，这可能解释了你为什么这么累。", actionHint: "询问是否需要用药", frequency: "common" },
              { textEn: "A couple of flags here — cholesterol is higher than we'd like, especially the LDL. And your vitamin D is tanked, which is probably why you're dragging.", textZh: "有几个指标——胆固醇比我们期望的高，特别是LDL。维生素D也很低，这大概就是你为什么没精神。", actionHint: "了解改善方案", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do I need to take medication for the cholesterol?",
            textZh: "胆固醇需要吃药吗？",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "Not yet — let's try lifestyle changes first. More exercise, reduce fried and processed foods, eat more fish and vegetables. I want to recheck in three months. For the vitamin D, I'm recommending a daily supplement — 2,000 IU. You should start feeling more energetic within a few weeks.",
            textZh: "还不用——先试试生活方式调整。多运动，减少油炸和加工食品，多吃鱼和蔬菜。我想三个月后复查。维生素D方面，我建议每天补充2000 IU。几周内你应该会感觉精力更充沛。",
            keyPhrases: [
              { en: "lifestyle changes", zh: "生活方式调整" },
              { en: "processed foods", zh: "加工食品" },
              { en: "recheck", zh: "复查" },
              { en: "supplement", zh: "补充剂" },
              { en: "IU", zh: "国际单位" },
            ],
            alternativeExpressions: [
              { textEn: "Let's hold off on meds for now and try some lifestyle tweaks first. More exercise, cut back on the fried stuff, eat more fish and veggies. We'll recheck in three months. For the vitamin D, just grab a daily supplement — 2,000 IU.", textZh: "先不吃药，试试调整生活方式。多运动，少吃油炸的，多吃鱼和蔬菜。三个月后复查。维生素D的话买个每日补充剂——2000 IU。", actionHint: "制定改善计划", frequency: "common" },
              { textEn: "I don't think we need medication yet. Let's start with diet and exercise. More fish, less junk food, get moving a bit more. As for the vitamin D, take a 2,000 IU supplement daily — you'll feel the difference in a few weeks.", textZh: "我觉得还不需要吃药。先从饮食和运动开始。多吃鱼，少吃垃圾食品，多动动。维生素D每天补2000 IU——几周后你会感觉到不同。", actionHint: "确认复查时间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Can you email me the full report? I'd like to share it with my doctor back home.",
            textZh: "明白了。能把完整报告发邮件给我吗？我想给国内的医生看。",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "Of course. I'll have the office send you the complete report with all lab values and my notes. It'll be in PDF format. If your doctor has any questions, they're welcome to contact us directly. Take care, Mr. Wang, and remember — more fish, less fried food!",
            textZh: "当然。我让诊所把完整报告和所有化验数据及我的备注发给你。PDF格式的。如果你的医生有问题，欢迎直接联系我们。保重，王先生，记住——多吃鱼，少吃油炸！",
            keyPhrases: [
              { en: "complete report", zh: "完整报告" },
              { en: "lab values", zh: "化验数据/指标" },
              { en: "contact us directly", zh: "直接联系我们" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely — we'll email you the full report with all the numbers and my notes. PDF format. If your doctor back home has questions, they can reach out to us directly. Stay healthy, and remember — watch that cholesterol!", textZh: "当然——完整报告连同所有数据和我的备注会发到你邮箱。PDF格式。你国内的医生有问题可以直接联系我们。保重，记得控制胆固醇！", actionHint: "确认邮箱地址", frequency: "common" },
              { textEn: "Sure thing. I'll get everything sent to your email — the full labs, my recommendations, the works. Your doctor back home can always call us if they want to discuss anything.", textZh: "没问题。我会把所有东西发到你邮箱——全部化验数据、我的建议，一应俱全。你国内的医生想讨论什么都可以联系我们。", actionHint: "索取报告", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll do my best. Thank you for the thorough checkup, Doctor!",
            textZh: "我会尽力的。谢谢医生这么仔细的检查！",
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
            culturalNote: "在美国，儿童看病通常去 pediatrician（儿科医生）的诊所，而不是综合医院。紧急情况可以去 urgent care 或 ER。",
          },
          {
            speaker: "them",
            role: "儿科医生",
            textEn: "I understand your concern. Let's take a look. How high has the fever been, and how many times has she had diarrhea?",
            textZh: "理解您的担心。我来看看。发烧最高多少度？拉了几次肚子？",
            keyPhrases: [
              { en: "how high has the fever been", zh: "发烧最高多少度" },
              { en: "how many times", zh: "多少次" },
            ],
            responseTip: "尽量提供具体数字：体温、拉肚子次数、持续时间",
            alternativeExpressions: [
              { textEn: "I totally get it — that's scary. Let me check her out. How high has the fever gotten? And roughly how many times has she had diarrhea?", textZh: "完全理解——这确实吓人。让我看看她。发烧最高多少度？大概拉了几次肚子？", actionHint: "提供具体数字", frequency: "common" },
              { textEn: "Don't worry, we'll figure this out. First, tell me — what's the highest her temp has been? And how frequent is the diarrhea?", textZh: "别担心，我们来搞清楚。先告诉我——体温最高多少？拉肚子频繁吗？", actionHint: "描述孩子的症状", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "The fever was 39 degrees Celsius — about 102 Fahrenheit. She's had diarrhea about five or six times. She's also been vomiting and won't eat anything.",
            textZh: "发烧39摄氏度——大概华氏102度。拉了五六次肚子。她还呕吐，什么都不肯吃。",
            vocabNotes: {
              "vomiting": {
                meaningInContext: "在这句话里表示：呕吐。口语中也说 throwing up",
                similarUsage: "类似用法：She's been throwing up all morning.",
              },
            },
          },
          {
            speaker: "them",
            role: "儿科医生",
            textEn: "Has she been drinking fluids? The biggest risk with diarrhea and vomiting in young children is dehydration. Let me check her for signs of dehydration — I'll look at her mouth, skin, and eyes.",
            textZh: "她有喝水吗？小孩子拉肚子和呕吐最大的风险是脱水。让我检查一下脱水的迹象——我看看她的嘴巴、皮肤和眼睛。",
            keyPhrases: [
              { en: "fluids", zh: "水分/液体" },
              { en: "dehydration", zh: "脱水" },
              { en: "signs of dehydration", zh: "脱水迹象" },
            ],
            alternativeExpressions: [
              { textEn: "Is she keeping any liquids down? Dehydration is our main concern with little ones.", textZh: "她喝水能不吐出来吗？脱水是小孩子最大的隐患。", actionHint: "回答孩子的饮水情况", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "She's had a little water but keeps throwing it up. Is there anything I can give her?",
            textZh: "她喝了一点水但一直吐出来。有什么可以给她吃的吗？",
          },
          {
            speaker: "them",
            role: "儿科医生",
            textEn: "I'm going to recommend Pedialyte — it's an oral rehydration solution made for children. Give her small sips every few minutes rather than big gulps. For the fever, you can use children's Tylenol — that's acetaminophen. I'll write down the correct dosage based on her weight.",
            textZh: "我推荐 Pedialyte——这是儿童口服补液盐。每隔几分钟给她小口喝，不要大口灌。发烧可以用儿童版泰诺——就是对乙酰氨基酚。我会根据她的体重写下正确的剂量。",
            keyPhrases: [
              { en: "oral rehydration solution", zh: "口服补液盐" },
              { en: "small sips", zh: "小口小口喝" },
              { en: "gulps", zh: "大口灌" },
              { en: "dosage", zh: "剂量" },
              { en: "based on her weight", zh: "根据她的体重" },
            ],
            vocabNotes: {
              "Pedialyte": {
                meaningInContext: "在这句话里指一种美国常见的儿童电解质补液饮料，药店和超市都能买到",
                similarUsage: "类似用法：Give the child Pedialyte to prevent dehydration.",
              },
            },
            alternativeExpressions: [
              { textEn: "Get her some Pedialyte — it's basically electrolyte water for kids. Little sips, not big drinks. For the fever, children's Tylenol is fine. I'll write down exactly how much to give based on her weight.", textZh: "给她买 Pedialyte——基本就是儿童电解质水。小口小口喝，不要大口灌。发烧用儿童泰诺就行。我按她的体重写下具体剂量。", actionHint: "确认用药剂量", frequency: "common" },
              { textEn: "Here's what I want you to do — pick up some Pedialyte and have her take tiny sips every couple minutes. And for the fever, go with children's Tylenol. I'll figure out the right dose for her.", textZh: "我建议这样——去买 Pedialyte，每隔几分钟让她喝一小口。发烧用儿童泰诺。我来算一下适合她的剂量。", actionHint: "记录用药方法", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is it okay to use ibuprofen instead? I have some children's Advil at home.",
            textZh: "可以用布洛芬代替吗？我家里有儿童版的 Advil。",
          },
          {
            speaker: "them",
            role: "儿科医生",
            textEn: "With the vomiting and diarrhea, I'd stick with Tylenol for now. Ibuprofen can irritate the stomach. Also, don't give her any anti-diarrhea medicine — for children this young, we let the body flush out whatever's causing the problem. If the diarrhea continues for more than three days or you see blood in her stool, bring her back immediately.",
            textZh: "有呕吐和腹泻的情况下，我建议先用泰诺。布洛芬可能刺激胃。另外，不要给她吃止泻药——这么小的孩子，我们让身体自己把病因排出来。如果拉肚子持续超过三天或者大便带血，立刻带她回来。",
            keyPhrases: [
              { en: "stick with", zh: "坚持用/先用" },
              { en: "irritate the stomach", zh: "刺激胃" },
              { en: "anti-diarrhea medicine", zh: "止泻药" },
              { en: "flush out", zh: "排出" },
              { en: "blood in her stool", zh: "大便带血" },
            ],
            culturalMeaning: "在西方医学中，儿童轻度腹泻一般不建议用止泻药，理念是让身体自然排毒。这和中国家长习惯立即用药的思维不同。",
            alternativeExpressions: [
              { textEn: "I'd go with Tylenol while her tummy's upset — ibuprofen can be rough on the stomach. And don't give her any anti-diarrhea stuff. At this age, we let it run its course. But if it lasts more than three days or there's blood in her poop, bring her right back.", textZh: "她肚子不舒服的话先用泰诺——布洛芬可能伤胃。也不要给她吃止泻药。这个年纪我们让身体自己恢复。但如果超过三天或大便带血，立刻带回来。", actionHint: "询问饮食建议", frequency: "common" },
              { textEn: "Stick with the Tylenol for now — Advil might upset her stomach more. And no anti-diarrhea meds for kids this young. Her body needs to flush whatever's causing this. If you see blood or it goes past three days, come back.", textZh: "先用泰诺——Advil可能让她胃更不舒服。这么小的孩子不要吃止泻药。身体需要把病因排出来。如果看到血或超过三天，回来看。", actionHint: "了解注意事项", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Understood. What about her diet? Should I keep her on a special diet?",
            textZh: "明白了。饮食方面呢？需要给她吃什么特殊的食物吗？",
          },
          {
            speaker: "them",
            role: "儿科医生",
            textEn: "Once she can keep fluids down, start with bland foods — plain rice, crackers, bananas, toast. We call it the BRAT diet: Bananas, Rice, Applesauce, Toast. Avoid dairy and sugary drinks for a few days. She should bounce back in two to three days.",
            textZh: "等她能喝水不吐了，从清淡食物开始——白米饭、饼干、香蕉、吐司。我们叫它 BRAT 饮食：香蕉、米饭、苹果酱、吐司。几天内避免乳制品和含糖饮料。她应该两三天就能恢复了。",
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
              { textEn: "When she's keeping liquids down, ease her back in with simple stuff — rice, bananas, crackers, toast. We call it the BRAT diet. Skip milk and anything sugary for a few days. She should be back to normal in two or three days.", textZh: "等她喝水不吐了，慢慢给她吃简单的东西——米饭、香蕉、饼干、吐司。叫BRAT饮食。几天内不要喝奶和含糖饮料。两三天应该就恢复了。", actionHint: "记住BRAT饮食", frequency: "common" },
              { textEn: "Start slow once she can hold fluids down — plain rice, toast, bananas. Nothing heavy. Avoid dairy and sugary drinks. Most kids bounce back within a couple days.", textZh: "等她能喝水不吐了再慢慢吃——白米饭、吐司、香蕉。别吃油腻的。避免乳制品和甜饮料。大多数孩子几天就恢复了。", actionHint: "了解恢复时间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much, Doctor. One more thing — should I keep her home from daycare?",
            textZh: "非常感谢医生。还有一个问题——需要让她在家不去日托吗？",
          },
          {
            speaker: "them",
            role: "儿科医生",
            textEn: "Yes, keep her home until she's been fever-free for 24 hours without medication and the diarrhea has stopped. Most daycares have the same policy. I'll give you a note for the daycare if you need one.",
            textZh: "是的，让她在家直到不用药的情况下退烧24小时且不再拉肚子。大多数日托中心都有同样的规定。如果需要我可以给你开一张日托中心的证明。",
            keyPhrases: [
              { en: "fever-free for 24 hours", zh: "退烧24小时" },
              { en: "without medication", zh: "不用药的情况下" },
              { en: "a note", zh: "证明/请假条" },
            ],
            alternativeExpressions: [
              { textEn: "Yep — no daycare until she's had no fever for a full day without meds, and the diarrhea's stopped. That's pretty standard. I can write you a note if the daycare needs one.", textZh: "对——不用药退烧满一天、不再拉肚子之后才能去日托。这是通用规定。如果日托需要我可以开证明。", actionHint: "索取证明", frequency: "common" },
              { textEn: "Keep her out of daycare until the fever's been gone for 24 hours — no Tylenol helping — and no more diarrhea. Most places have the same rule. Happy to give you a doctor's note.", textZh: "退烧24小时——不是靠泰诺退的——而且不再拉肚子之后才能回日托。大多数地方都是这个规定。我可以给你开医生证明。", actionHint: "确认返园条件", frequency: "common" },
            ],
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
            textEn: "Doctor, my son just ate some peanuts and his face is swelling up. He's also got red bumps all over his arms.",
            textZh: "医生，我儿子刚吃了一些花生，脸肿起来了。胳膊上还起了好多红疙瘩。",
          },
          {
            speaker: "them",
            role: "儿科医生",
            textEn: "This looks like an allergic reaction. Is he having any trouble breathing? Any wheezing or tightness in his chest?",
            textZh: "看起来是过敏反应。他呼吸有困难吗？有喘鸣或胸闷吗？",
            keyPhrases: [
              { en: "allergic reaction", zh: "过敏反应" },
              { en: "trouble breathing", zh: "呼吸困难" },
              { en: "wheezing", zh: "喘鸣" },
              { en: "tightness in his chest", zh: "胸闷" },
            ],
            responseTip: "过敏反应要注意呼吸问题，这是最危险的症状",
            alternativeExpressions: [
              { textEn: "Yeah, that looks like an allergic reaction. The big question — is he breathing OK? Any wheezing or does his chest feel tight?", textZh: "嗯，看起来是过敏反应。关键问题——他呼吸正常吗？有喘息或胸闷吗？", actionHint: "观察孩子呼吸", frequency: "common" },
              { textEn: "OK, I can see this is an allergic response. Can he breathe alright? No funny sounds when he breathes, no throat tightness?", textZh: "好的，我看得出是过敏反应。他能正常呼吸吗？呼吸有没有异响？喉咙发紧吗？", actionHint: "确认呼吸状况", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "His breathing seems okay for now, but the swelling is getting worse. This has never happened before — I didn't know he was allergic to peanuts.",
            textZh: "他现在呼吸还可以，但是肿胀越来越严重了。以前从来没有过——我不知道他对花生过敏。",
          },
          {
            speaker: "them",
            role: "儿科医生",
            textEn: "We need to act quickly. I'm going to give him a dose of epinephrine and an antihistamine — Benadryl. The epinephrine will stop the reaction from getting worse. Nurse, please prepare a 0.15 milligram EpiPen.",
            textZh: "我们需要快速处理。我给他打一针肾上腺素和一种抗组胺药——苯海拉明。肾上腺素能阻止反应恶化。护士，请准备0.15毫克的EpiPen。",
            keyPhrases: [
              { en: "epinephrine", zh: "肾上腺素" },
              { en: "antihistamine", zh: "抗组胺药" },
              { en: "EpiPen", zh: "肾上腺素自动注射器" },
              { en: "dose", zh: "剂量" },
            ],
            vocabNotes: {
              "EpiPen": {
                meaningInContext: "EpiPen 是一种可以自己打的肾上腺素注射笔，用于严重过敏反应的紧急处理。在美国很多过敏体质的人随身携带",
                similarUsage: "类似用法：Always carry your EpiPen if you have a severe allergy.",
              },
            },
            alternativeExpressions: [
              { textEn: "OK, we need to move fast. I'm giving him epinephrine and Benadryl right now. The epi will keep the reaction from getting worse. Nurse — EpiPen, 0.15 milligrams, please.", textZh: "好，我们要快速行动。我现在给他打肾上腺素和苯海拉明。肾上腺素能阻止反应恶化。护士——EpiPen，0.15毫克。", actionHint: "配合医生治疗", frequency: "common" },
              { textEn: "Let's get on this right away. He needs epinephrine to stop the reaction, plus an antihistamine. I'm having the nurse prep an EpiPen now.", textZh: "我们马上处理。他需要肾上腺素阻止反应，加上抗组胺药。我让护士准备EpiPen。", actionHint: "保持冷静", frequency: "common" },
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
            textEn: "He's responding well to the medication — the swelling is going down. But yes, peanut allergies are usually lifelong. I'm prescribing an EpiPen for you to carry at all times. You'll also need to inform his school or daycare. I strongly recommend seeing an allergist for proper testing.",
            textZh: "他对药物反应很好——肿胀在消退。但是是的，花生过敏通常是终身的。我给你开一支EpiPen随身携带。你还需要通知他的学校或日托。我强烈建议去看过敏专科医生做正式检测。",
            keyPhrases: [
              { en: "responding well", zh: "反应良好" },
              { en: "going down", zh: "消退" },
              { en: "lifelong", zh: "终身的" },
              { en: "carry at all times", zh: "随身携带" },
              { en: "allergist", zh: "过敏专科医生" },
            ],
            alternativeExpressions: [
              { textEn: "Good news — the medicine is working. But peanut allergies tend to be permanent. We need to make a long-term plan.", textZh: "好消息——药起作用了。但花生过敏通常是永久的。我们需要制定长期计划。", actionHint: "询问具体的长期管理方案", frequency: "common" },
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
            textEn: "It's designed to be simple. Remove the blue safety cap, press the orange tip firmly against his outer thigh — it works through clothing. Hold it for ten seconds. The needle does everything automatically. I'll have the nurse demonstrate with a trainer pen. Make sure everyone who cares for your son knows how to use it.",
            textZh: "它设计得很简单。取下蓝色安全帽，把橙色端用力压在他的大腿外侧——隔着衣服也可以。按住十秒。针头会自动完成一切。我让护士用训练笔给你演示。确保所有照顾你儿子的人都会用。",
            keyPhrases: [
              { en: "safety cap", zh: "安全帽/保险盖" },
              { en: "outer thigh", zh: "大腿外侧" },
              { en: "works through clothing", zh: "隔着衣服也可以" },
              { en: "trainer pen", zh: "训练用笔" },
              { en: "demonstrate", zh: "演示" },
            ],
            alternativeExpressions: [
              { textEn: "It's super easy — pop off the blue cap, jam the orange end into his outer thigh — even through his pants — and hold for ten seconds. That's it. The nurse will show you with a practice one. Make sure anyone who watches your kid knows how to do it.", textZh: "超级简单——拔掉蓝色帽，把橙色端用力压到大腿外侧——隔着裤子也行——按住十秒。就这样。护士会用练习笔演示。确保所有照顾孩子的人都会用。", actionHint: "练习使用方法", frequency: "common" },
              { textEn: "Don't worry, it's foolproof. Blue cap off, orange tip into the thigh, hold ten seconds. Works right through clothing. We'll have you practice with a dummy pen before you leave.", textZh: "别担心，傻瓜式操作。蓝帽拔掉，橙色端扎大腿，按住十秒。隔着衣服也行。走之前我们让你用假笔练练。", actionHint: "认真练习", frequency: "common" },
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
            textEn: "Peanuts are actually legumes, not tree nuts, but some children with peanut allergies also react to tree nuts like almonds and cashews. Until we do a full panel test, avoid all nuts to be safe. Also watch out for hidden peanuts in sauces, baked goods, and Asian food — many dishes use peanut oil or crushed peanuts.",
            textZh: "花生实际上是豆科植物，不是坚果，但有些花生过敏的孩子也会对杏仁、腰果等坚果过敏。在做完全面检测之前，为安全起见避免所有坚果。也要注意酱料、烘焙食品和亚洲菜里隐藏的花生——很多菜用花生油或碎花生。",
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
              { textEn: "Fun fact — peanuts are technically legumes, not nuts. But kids with peanut allergies sometimes react to tree nuts too, like almonds or cashews. Until we test properly, avoid all nuts. And watch for hidden peanuts — lots of sauces and baked goods have them.", textZh: "有个冷知识——花生其实是豆科植物，不是坚果。但花生过敏的孩子有时也对杏仁、腰果等坚果过敏。在正式检测之前，所有坚果都避免。还要注意隐藏的花生——很多酱料和烘焙品里都有。", actionHint: "记住需要避免的食物", frequency: "common" },
              { textEn: "So peanuts are actually a legume, but some peanut-allergic kids also react to tree nuts. Play it safe — no nuts at all until we do a full allergy panel. And be careful with sauces and Asian food — peanut oil is everywhere.", textZh: "花生实际上是豆类，但有些花生过敏的孩子对坚果也会反应。保险起见——在做完全面过敏检测之前不要吃任何坚果。注意酱料和亚洲菜——花生油到处都是。", actionHint: "了解交叉过敏", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "This is a lot to take in. Can you give me all of this in writing? And is there a Chinese-speaking allergist you could refer me to?",
            textZh: "信息量好大。能把这些都写给我吗？还有，能推荐一位会说中文的过敏专科医生吗？",
            culturalNote: "在美国看病时，完全可以要求把医嘱写下来。也可以要求翻译服务。很多医院有中文翻译。",
          },
          {
            speaker: "them",
            role: "儿科医生",
            textEn: "Absolutely. I'll print out detailed instructions in both English and Chinese. We also have a handout specifically about peanut allergies in children. And yes, Dr. Chen at the allergy clinic on Park Avenue speaks Mandarin. I'll make the referral. In the meantime, I want to observe your son for another two hours to make sure the reaction doesn't come back.",
            textZh: "当然。我会打印英文和中文的详细说明。我们还有一份专门关于儿童花生过敏的资料。对了，Park Avenue 过敏诊所的陈医生会说普通话。我会帮你转介。同时，我想再观察你儿子两个小时，确保反应不会复发。",
            keyPhrases: [
              { en: "detailed instructions", zh: "详细说明" },
              { en: "handout", zh: "资料/宣传单" },
              { en: "referral", zh: "转介/转诊" },
              { en: "observe", zh: "观察" },
              { en: "come back", zh: "复发" },
            ],
            alternativeExpressions: [
              { textEn: "Of course — I'll print everything out in English and Chinese for you. We also have a pamphlet specifically about peanut allergies. And good news — Dr. Chen at the allergy clinic on Park Avenue speaks Mandarin. I'll set up the referral. For now, we want to keep an eye on your son for another two hours.", textZh: "当然——英文和中文的都会打印给你。我们还有一份花生过敏的专门资料。好消息——Park Avenue过敏诊所的陈医生会说中文。我帮你转诊。现在我们要再观察你儿子两个小时。", actionHint: "在院观察", frequency: "common" },
              { textEn: "Sure, we'll get you written instructions in both languages. And actually, there's a great allergist — Dr. Chen — who speaks Mandarin. I'll refer you. But first, we need to watch your boy for a couple more hours to be safe.", textZh: "好的，两种语言的说明都会给你。有一位很好的过敏专科医生陈医生会说中文。我帮你转介。但先要再观察你儿子两个小时确保安全。", actionHint: "等候观察", frequency: "common" },
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
            textEn: "Hi, I'd like to make an appointment for acupuncture. I've been having chronic back pain and a friend recommended your clinic.",
            textZh: "你好，我想预约针灸。我长期腰疼，一个朋友推荐了你们的诊所。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Welcome! Have you had acupuncture before? Our first visit includes a full consultation and treatment. It's usually about 90 minutes.",
            textZh: "欢迎！你以前做过针灸吗？我们的初诊包括完整的咨询和治疗。通常大约90分钟。",
            keyPhrases: [
              { en: "first visit", zh: "初诊" },
              { en: "consultation", zh: "咨询/问诊" },
              { en: "treatment", zh: "治疗" },
            ],
            alternativeExpressions: [
              { textEn: "Great! Is this your first time? We'll need a longer session for the initial assessment.", textZh: "好的！第一次来吗？初次评估需要更长的时间。", actionHint: "确认是否第一次", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I'm familiar with acupuncture — I used to get it regularly back in China. How much is a session, and does insurance cover it?",
            textZh: "是的，我对针灸很熟悉——在中国经常做。一次多少钱？保险能报销吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "The initial consultation is $120, and follow-up sessions are $85 each. Many insurance plans now cover acupuncture — we accept Blue Cross, Aetna, and UnitedHealthcare. Can I have your insurance card to check your coverage?",
            textZh: "初诊120美元，之后每次85美元。现在很多保险计划都覆盖针灸——我们接受 Blue Cross、Aetna 和 UnitedHealthcare。能给我看你的保险卡让我查一下你的覆盖范围吗？",
            keyPhrases: [
              { en: "initial consultation", zh: "初诊" },
              { en: "follow-up sessions", zh: "后续疗程" },
              { en: "coverage", zh: "覆盖范围/报销范围" },
              { en: "insurance card", zh: "保险卡" },
            ],
            vocabNotes: {
              "coverage": {
                meaningInContext: "在这句话里表示：保险覆盖/报销的范围和金额",
                similarUsage: "类似用法：Does your plan have dental coverage?",
              },
            },
            alternativeExpressions: [
              { textEn: "First visit is 120 bucks, then 85 for each follow-up. A lot of insurance plans cover acupuncture now — let me check your card and see what your plan pays for.", textZh: "初诊120美元，之后每次85。现在很多保险都覆盖针灸——给我你的卡我查查你的计划报多少。", actionHint: "提供保险卡", frequency: "common" },
              { textEn: "It's $120 for the initial assessment and $85 per session after that. We take most major insurance — do you have your card? I can run it and see what's covered.", textZh: "初次评估120美元，之后每次85美元。我们接受大多数主要保险——有保险卡吗？我可以查一下覆盖范围。", actionHint: "确认保险覆盖", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's my insurance card. Also, does your acupuncturist practice traditional Chinese medicine style, or is it more of a Western approach?",
            textZh: "这是我的保险卡。还有，你们的针灸师是传统中医手法还是更偏西方手法？",
            culturalNote: "美国的针灸分两种：传统中医（TCM）风格和更西化的\"干针\"（dry needling）。如果想要正宗中医针灸，要提前确认。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Our lead practitioner, Dr. Li, is actually trained in Beijing. She practices traditional Chinese medicine — pulse diagnosis, tongue reading, the whole thing. She also does cupping and moxibustion if needed.",
            textZh: "我们的主治医师李医生在北京受过训练。她做的是传统中医——脉诊、看舌苔，全套的。如果需要她也做拔罐和艾灸。",
            keyPhrases: [
              { en: "practitioner", zh: "执业者/医师" },
              { en: "pulse diagnosis", zh: "脉诊" },
              { en: "tongue reading", zh: "看舌苔" },
              { en: "cupping", zh: "拔罐" },
              { en: "moxibustion", zh: "艾灸" },
            ],
            alternativeExpressions: [
              { textEn: "Dr. Li actually trained in Beijing — she does the full traditional Chinese medicine thing. Pulse reading, tongue diagnosis, the works. She also does cupping and moxa if you need it.", textZh: "李医生在北京受过训练——她做的是全套传统中医。把脉、看舌苔，全套。如果需要她也做拔罐和艾灸。", actionHint: "确认预约时间", frequency: "common" },
              { textEn: "Oh, you'll love Dr. Li — she trained in China and practices real TCM. Pulse diagnosis, tongue reading, cupping, moxibustion — the whole nine yards.", textZh: "你会喜欢李医生的——她在中国受训，做正宗中医。脉诊、看舌苔、拔罐、艾灸——全部都会。", actionHint: "预约时间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect, that's exactly what I was looking for. Can I get an appointment for this week?",
            textZh: "太好了，正是我想找的。这周能约到吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Let me check... Dr. Li has an opening Thursday at 2 PM and Friday at 10 AM. Which works better for you? And please wear loose, comfortable clothing — she'll need access to your back, arms, and legs.",
            textZh: "我看看……李医生周四下午2点和周五上午10点有空。哪个时间更方便？请穿宽松舒适的衣服——她需要接触你的背部、手臂和腿。",
            keyPhrases: [
              { en: "opening", zh: "空余时间/空位" },
              { en: "loose, comfortable clothing", zh: "宽松舒适的衣服" },
              { en: "access to", zh: "接触到/够得到" },
            ],
            alternativeExpressions: [
              { textEn: "Lemme see... She's got Thursday at 2 or Friday at 10 AM open. Which one works for you? Oh, and wear something loose and comfy — she'll need to get to your back, arms, and legs.", textZh: "我看看……周四下午2点和周五上午10点有空。哪个方便？对了，穿宽松舒服的衣服来——她需要接触你的背、手臂和腿。", actionHint: "选择时间", frequency: "common" },
              { textEn: "She has a couple of slots — Thursday afternoon or Friday morning. What's better? And heads up — come in loose-fitting clothes so she can work on your back and limbs.", textZh: "她有几个空位——周四下午或周五上午。哪个好？提醒一下——穿宽松衣服来，方便她治疗背部和四肢。", actionHint: "确认时间并记住穿着要求", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thursday at 2 PM works great. Do I need to bring anything?",
            textZh: "周四下午2点可以。我需要带什么吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Just your insurance card and ID. If you have any medical records or X-rays related to your back pain, bring those too. Please eat a light meal beforehand — acupuncture on an empty stomach can make you lightheaded. And avoid caffeine before the session.",
            textZh: "带上保险卡和身份证就行。如果有跟腰疼相关的病历或X光片也带上。治疗前请吃点东西——空腹做针灸可能会头晕。治疗前也避免咖啡因。",
            keyPhrases: [
              { en: "medical records", zh: "病历" },
              { en: "X-rays", zh: "X光片" },
              { en: "light meal", zh: "简餐/吃点东西" },
              { en: "lightheaded", zh: "头晕" },
              { en: "caffeine", zh: "咖啡因" },
            ],
            alternativeExpressions: [
              { textEn: "Bring your insurance card and ID. If you've got any records or X-rays for your back, bring those along too. Have a light snack before you come — you don't want to do acupuncture on an empty stomach. And skip the coffee.", textZh: "带上保险卡和身份证。如果有腰疼相关的病历或X光片也带上。来之前吃点东西——不要空腹做针灸。咖啡也别喝。", actionHint: "准备就诊材料", frequency: "common" },
              { textEn: "Just your ID and insurance card. Any medical records about your back would be helpful too. Oh, and eat something light beforehand — some people get dizzy if they come in on an empty stomach. No caffeine either.", textZh: "带身份证和保险卡就行。有腰疼的病历也有帮助。对了，来之前吃点东西——有人空腹做针灸会头晕。也不要喝咖啡。", actionHint: "做好就诊准备", frequency: "common" },
            ],
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
            textEn: "Doctor, I wanted to mention that I've also been taking some Chinese herbal medicine for my condition. I want to make sure it doesn't interact with the medication you prescribed.",
            textZh: "医生，我想说一下我同时也在吃一些中药来治疗我的病。我想确认它不会和您开的药产生冲突。",
            culturalNote: "在国外看西医时，一定要告知你在服用的中药或保健品。很多中药和西药有相互作用（drug interaction）。",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "I'm glad you brought that up — it's very important. Can you tell me exactly what herbs you're taking? Do you have the packaging or a list of ingredients?",
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
              { textEn: "Oh good, I'm really glad you mentioned that. It's super important. What exactly are you taking? Got the bottles or a photo of the ingredients?", textZh: "太好了，你提到这个非常重要。你具体在吃什么？有药瓶或成分照片吗？", actionHint: "展示药品信息", frequency: "common" },
              { textEn: "Thank you for telling me — a lot of patients forget to mention supplements and herbal stuff. Can you tell me the names and show me the packaging?", textZh: "谢谢你告诉我——很多患者忘了提补充剂和草药。能告诉我名字并给我看包装吗？", actionHint: "提供药品详情", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm taking Suan Zao Ren Tang for sleep issues and some Huang Qi capsules for immunity. Here, I have photos of the packaging on my phone.",
            textZh: "我在吃酸枣仁汤治失眠，还有一些黄芪胶囊增强免疫力。我手机上有包装的照片。",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "Thank you, that's helpful. Let me look these up. Huang Qi — that's astragalus, right? I need to check if it interacts with your blood pressure medication. Some Chinese herbs can affect how your liver processes certain drugs.",
            textZh: "谢谢，这很有帮助。让我查一下。黄芪——就是 astragalus 对吧？我需要确认它和你的降压药有没有相互作用。有些中药会影响肝脏代谢某些药物的方式。",
            keyPhrases: [
              { en: "look these up", zh: "查一下" },
              { en: "astragalus", zh: "黄芪" },
              { en: "interacts with", zh: "和...产生相互作用" },
              { en: "blood pressure medication", zh: "降压药" },
              { en: "liver processes", zh: "肝脏代谢" },
            ],
            alternativeExpressions: [
              { textEn: "OK, let me check on these. Huang Qi — that's astragalus, yeah? I need to make sure it doesn't mess with your blood pressure meds. Some herbs can change how your liver breaks down certain drugs.", textZh: "好，让我查一下。黄芪——就是 astragalus 对吧？我要确保它不会影响你的降压药。有些草药会改变肝脏代谢药物的方式。", actionHint: "等待医生查询", frequency: "common" },
              { textEn: "Great, thanks for the photos. Let me pull these up... So the astragalus — I want to cross-reference that with what you're on. Herbal stuff can sometimes interact with prescriptions.", textZh: "好的，谢谢照片。让我查查……黄芪这个——我要和你在吃的药对照一下。草药有时会和处方药产生相互作用。", actionHint: "配合查询", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I didn't realize there could be interactions. In China, many people take both Chinese and Western medicine together.",
            textZh: "我没意识到可能有相互作用。在中国很多人同时吃中药和西药。",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "I understand, and I respect traditional Chinese medicine — it has thousands of years of history. My concern is specifically about drug interactions. I'm seeing that astragalus may boost immune function, which is generally fine, but could theoretically interfere with immunosuppressants. Since you're not on any, it should be okay. The sleep formula looks safe too.",
            textZh: "我理解，我也尊重传统中医——它有几千年的历史。我关心的是药物相互作用。我看到黄芪可能增强免疫功能，一般没问题，但理论上可能干扰免疫抑制剂。因为你没有在吃免疫抑制剂，应该没问题。那个安眠方剂看起来也安全。",
            keyPhrases: [
              { en: "drug interactions", zh: "药物相互作用" },
              { en: "immune function", zh: "免疫功能" },
              { en: "immunosuppressants", zh: "免疫抑制剂" },
              { en: "interfere with", zh: "干扰" },
            ],
            alternativeExpressions: [
              { textEn: "I don't have strong views either way on herbal medicine, but I do need to make sure nothing you're taking will reduce the effectiveness of your prescriptions.", textZh: "我对草药没有特别的立场，但我需要确保你吃的东西不会降低处方药的效果。", actionHint: "继续讨论用药安全", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a relief. Would you be open to a collaborative approach? My acupuncturist and you could coordinate on my treatment plan.",
            textZh: "那就放心了。您愿意协同治疗吗？我的针灸师和您可以协调我的治疗方案。",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "I think that's actually a great idea. Integrative medicine is becoming more common here. If your acupuncturist can send me their treatment notes, I'll include them in your file. Just make sure any new herbs or supplements are run by me first — better safe than sorry.",
            textZh: "我觉得这是个很好的想法。整合医学在这边越来越普遍了。如果你的针灸师能把治疗记录发给我，我会放进你的档案。只是要确保任何新的中药或保健品先跟我说一声——安全第一。",
            keyPhrases: [
              { en: "integrative medicine", zh: "整合医学" },
              { en: "treatment notes", zh: "治疗记录" },
              { en: "run by me first", zh: "先跟我说一声/先告知我" },
              { en: "better safe than sorry", zh: "安全第一/有备无患" },
            ],
            literalMeaning: "\"better safe than sorry\" 字面意思是「安全总比后悔好」，实际含义是「小心为上/预防胜于治疗」",
            alternativeExpressions: [
              { textEn: "That's a great idea, actually. More and more doctors are open to integrative care. Have your acupuncturist send me their notes and I'll add them to your file. Just loop me in before starting any new herbs or supplements.", textZh: "这个想法很好。越来越多的医生对整合治疗持开放态度。让你的针灸师把记录发给我，我加到你的档案里。开始吃任何新的草药或保健品之前先告诉我。", actionHint: "协调两方治疗", frequency: "common" },
              { textEn: "Honestly, I think that's awesome. Integrative medicine is a growing thing here. Just keep me posted on any new herbs, and have your acupuncturist share their treatment plan.", textZh: "说实话，我觉得这很好。整合医学在这边越来越流行。有新的草药告诉我一声，让你的针灸师分享治疗方案就行。", actionHint: "告知针灸师联系方式", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you for being so open-minded. I'll ask Dr. Li to share her notes with you.",
            textZh: "谢谢您这么开明。我会让李医生把记录发给您。",
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
            textEn: "Hi, this is my first time using telehealth. Can I see a doctor today? I have a bad cold and I think I might need antibiotics.",
            textZh: "你好，我第一次用远程医疗。今天能看医生吗？我感冒很严重，可能需要抗生素。",
            culturalNote: "在美国，Teladoc、MDLive、Amwell 等远程医疗平台很普遍。很多保险都覆盖远程问诊，费用比去诊所便宜。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Welcome! Yes, we have doctors available right now. The average wait time is about 15 minutes. I just need to verify your account. Can you confirm your name, date of birth, and the state you're currently in?",
            textZh: "欢迎！是的，我们现在有医生在线。平均等待时间约15分钟。我需要验证您的账户。能确认您的姓名、出生日期和目前所在的州吗？",
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
              { textEn: "Hi there! Yep, we've got docs available. Wait time is about 15 minutes. Just need to verify your info real quick — name, date of birth, and which state you're in?", textZh: "你好！有医生在线的。等待大约15分钟。先快速验证一下你的信息——姓名、生日和所在的州？", actionHint: "提供个人信息", frequency: "common" },
              { textEn: "Welcome to the platform! We can get you connected to a doctor pretty quickly — usually about a 15-minute wait. I just need to confirm a few details first.", textZh: "欢迎使用平台！我们很快就能帮你连线医生——通常等15分钟左右。我先确认几个信息。", actionHint: "准备身份信息", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "My name is Wang Wei, born March 15, 1988. I'm currently in California.",
            textZh: "我叫王伟，1988年3月15日出生。我目前在加利福尼亚。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Perfect, you're verified. I'm connecting you with Dr. Johnson now. You'll receive a video call link — just click it to join. Make sure your camera and microphone are on.",
            textZh: "好的，验证通过。我现在帮您连接 Johnson 医生。您会收到一个视频通话链接——点击就可以加入。请确保您的摄像头和麦克风是打开的。",
            keyPhrases: [
              { en: "verified", zh: "验证通过" },
              { en: "connecting you with", zh: "帮您连接" },
              { en: "video call link", zh: "视频通话链接" },
            ],
            alternativeExpressions: [
              { textEn: "All set — you're good to go. I'm patching you through to Dr. Johnson now. You'll get a video link — just click to join. Make sure your camera and mic are working.", textZh: "好了——验证通过。我现在帮你接 Johnson 医生。你会收到视频链接——点击加入就行。确保摄像头和麦克风正常。", actionHint: "点击链接加入", frequency: "common" },
              { textEn: "You're all verified. Connecting you to Dr. Johnson — should be just a moment. Keep an eye out for the video call invite.", textZh: "验证通过了。正在帮你连线 Johnson 医生——稍等片刻。注意查看视频通话邀请。", actionHint: "等待视频连线", frequency: "common" },
            ],
          },
          {
            speaker: "them",
            role: "远程医生",
            textEn: "Hi Wang, I'm Dr. Johnson. I can see you on the screen. Tell me what's going on — how long have you been feeling sick?",
            textZh: "你好王，我是 Johnson 医生。屏幕上能看到你。跟我说说怎么回事——不舒服多久了？",
            keyPhrases: [
              { en: "what's going on", zh: "怎么回事" },
              { en: "how long have you been feeling sick", zh: "不舒服多久了" },
            ],
            alternativeExpressions: [
              { textEn: "Hey Wang, Dr. Johnson here. I can see you — looks like we're connected. So tell me what's going on. When did you start feeling sick?", textZh: "嘿王，我是 Johnson 医生。能看到你——连线成功了。跟我说说怎么回事。什么时候开始不舒服的？", actionHint: "描述症状", frequency: "common" },
              { textEn: "Hi there, I'm Dr. Johnson. Can you see and hear me OK? Great. Walk me through your symptoms — when did this all start?", textZh: "你好，我是 Johnson 医生。能看到和听到我吗？好的。跟我说说你的症状——什么时候开始的？", actionHint: "详细描述病情", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It started three days ago. I have a runny nose, sore throat, cough, and mild headache. No fever though. I thought it would go away but it's getting worse.",
            textZh: "三天前开始的。流鼻涕、嗓子疼、咳嗽、轻微头疼。没有发烧。我以为会自己好但越来越严重了。",
          },
          {
            speaker: "them",
            role: "远程医生",
            textEn: "Can you tilt your phone so I can see your throat? Open wide and say ah... It does look a bit red but not severely inflamed. Based on what you're describing, this sounds like a viral upper respiratory infection — a common cold.",
            textZh: "能把手机倾斜一下让我看看你的喉咙吗？张大嘴说啊……看起来有点红但没有严重发炎。根据你描述的，这像是病毒性上呼吸道感染——普通感冒。",
            keyPhrases: [
              { en: "tilt your phone", zh: "倾斜手机" },
              { en: "inflamed", zh: "发炎的" },
              { en: "viral upper respiratory infection", zh: "病毒性上呼吸道感染" },
            ],
            alternativeExpressions: [
              { textEn: "Hold your phone up and tilt it so I can get a look at your throat. Open wide... OK, it's a bit red but nothing too crazy. This sounds like a standard cold — viral upper respiratory infection.", textZh: "把手机举起来倾斜一下让我看看喉咙。张大……好的，有点红但不算严重。这像是普通感冒——病毒性上呼吸道感染。", actionHint: "配合检查", frequency: "common" },
              { textEn: "Flip your camera around and let me peek at your throat. Say 'ah'... A little red, but not severely inflamed. Based on everything, I think this is just a regular cold.", textZh: "把摄像头翻过来让我看看你的喉咙。说'啊'……有点红，但没有严重发炎。综合来看，应该就是普通感冒。", actionHint: "确认诊断", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "So I don't need antibiotics?",
            textZh: "所以我不需要抗生素？",
          },
          {
            speaker: "them",
            role: "远程医生",
            textEn: "Antibiotics only work against bacteria, not viruses. Taking them unnecessarily can actually cause resistance problems. What I'd recommend is over-the-counter remedies: DayQuil during the day, NyQuil at night for sleep, and a saline nasal spray. Drink lots of warm fluids and rest.",
            textZh: "抗生素只对细菌有效，对病毒无效。不必要地服用反而会造成耐药性问题。我建议用非处方药：白天吃 DayQuil，晚上吃 NyQuil 帮助睡眠，再用生理盐水鼻腔喷雾。多喝温热的液体，多休息。",
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
              { textEn: "Antibiotics won't help here — they only kill bacteria, and you've got a virus. I'd recommend DayQuil during the day, NyQuil at night, and a saline spray for your nose. Lots of fluids and rest.", textZh: "抗生素对这个没用——只杀细菌，你是病毒感染。建议白天吃 DayQuil，晚上吃 NyQuil，用生理盐水鼻腔喷雾。多喝水多休息。", actionHint: "去药房买非处方药", frequency: "common" },
              { textEn: "This is a virus, so antibiotics aren't going to do anything. Go grab some over-the-counter cold medicine — DayQuil and NyQuil work well. A saline nasal rinse helps too. And drink plenty of warm stuff.", textZh: "这是病毒，所以抗生素没用。去买点非处方感冒药——DayQuil 和 NyQuil 挺好用的。盐水洗鼻也有帮助。多喝温的。", actionHint: "购买推荐药物", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. If it doesn't get better, when should I come back?",
            textZh: "明白了。如果没好转，什么时候应该再来看？",
          },
          {
            speaker: "them",
            role: "远程医生",
            textEn: "If your symptoms haven't improved in seven to ten days, or if you develop a high fever, green or yellow mucus, or significant ear pain, book another visit. You can see me again through the app — no need to go to a clinic unless it's urgent. I'm sending a summary of today's visit to your email now.",
            textZh: "如果七到十天内症状没有好转，或者出现高烧、绿色或黄色鼻涕、或明显的耳朵疼，再约一次。你可以通过APP再约我——不需要去诊所除非紧急。我现在把今天的就诊总结发到你的邮箱。",
            keyPhrases: [
              { en: "haven't improved", zh: "没有好转" },
              { en: "green or yellow mucus", zh: "绿色或黄色鼻涕" },
              { en: "ear pain", zh: "耳朵疼" },
              { en: "summary of today's visit", zh: "今天的就诊总结" },
            ],
            alternativeExpressions: [
              { textEn: "If you're not better in a week to ten days, or things take a turn — high fever, colored mucus, bad ear pain — book another visit. You can see me right through the app, no need to go anywhere.", textZh: "如果一周到十天没好转，或者恶化——高烧、有颜色的鼻涕、严重耳痛——再约一次。通过APP就能看我，不用去任何地方。", actionHint: "记住复诊条件", frequency: "common" },
              { textEn: "Give it about a week. If it's not clearing up by then, or you spike a fever or get thick green mucus, schedule a follow-up through the app. I'm emailing you a recap of today's visit now.", textZh: "给它大约一周时间。如果那时还没好，或者发高烧、流浓绿鼻涕，通过APP预约复诊。我现在把今天的就诊回顾发到你邮箱。", actionHint: "保存就诊记录", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "This is so convenient — much easier than going to a clinic. Thanks, Doctor!",
            textZh: "真方便——比去诊所容易多了。谢谢医生！",
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
            textEn: "Hi Dr. Chen, I'm calling because I need a refill on my blood pressure medication. I ran out two days ago.",
            textZh: "陈医生你好，我打电话是因为我的降压药需要续方。两天前吃完了。",
            culturalNote: "在美国，处方药到期后需要医生重新开方。不能像中国那样直接在药店买。远程医疗可以快速续方。",
          },
          {
            speaker: "them",
            role: "远程医生",
            textEn: "Hi Wang. Running out of blood pressure medication isn't ideal — it's important not to skip doses. Let me pull up your records. You're on lisinopril 10 milligrams, correct?",
            textZh: "你好王。降压药吃完了不太好——不能漏服。让我调出你的病历。你在吃赖诺普利10毫克，对吗？",
            keyPhrases: [
              { en: "refill", zh: "续方/续药" },
              { en: "skip doses", zh: "漏服" },
              { en: "pull up your records", zh: "调出你的病历" },
              { en: "milligrams", zh: "毫克" },
            ],
            vocabNotes: {
              "refill": {
                meaningInContext: "在这句话里表示：续配处方药，重新开一次相同的药",
                similarUsage: "类似用法：I need a refill on my allergy medication.",
              },
            },
            alternativeExpressions: [
              { textEn: "Hey Wang. Yeah, you don't want to go without your BP meds — skipping doses isn't great. Let me pull up your chart real quick. You're on lisinopril 10 mg, right?", textZh: "嘿王。降压药断了可不好——不能漏服。让我赶紧调出你的病历。你吃的是赖诺普利10毫克，对吧？", actionHint: "确认药物信息", frequency: "common" },
              { textEn: "Oh man, running out of blood pressure meds isn't ideal. Let me look you up... OK, you're taking lisinopril 10 milligrams daily, correct?", textZh: "哎，降压药吃完了不太好。让我查一下你的记录……好的，你在吃赖诺普利每天10毫克，对吗？", actionHint: "确认用药", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, that's right. I've been taking it for about six months. Is it possible to get a 90-day supply this time so I don't run out again?",
            textZh: "对的。我已经吃了大约六个月了。这次能开90天的量吗？这样就不会再断药了。",
          },
          {
            speaker: "them",
            role: "远程医生",
            textEn: "I can do that, but first — how have you been feeling on the medication? Any side effects like dizziness, dry cough, or swelling?",
            textZh: "可以，但先问一下——吃这个药感觉怎么样？有没有头晕、干咳或浮肿等副作用？",
            keyPhrases: [
              { en: "side effects", zh: "副作用" },
              { en: "dizziness", zh: "头晕" },
              { en: "dry cough", zh: "干咳" },
              { en: "swelling", zh: "浮肿" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, 90 days is no problem. But real quick — how's it been going? Any side effects? Dizzy at all? Dry cough? Any swelling?", textZh: "可以，90天没问题。但先快速问一下——感觉怎么样？有副作用吗？头晕吗？干咳？浮肿？", actionHint: "如实反馈药物反应", frequency: "common" },
              { textEn: "I can write you a 90-day script, but first tell me — any issues with the medication? Cough, dizziness, swelling?", textZh: "我可以给你开90天的量，但先告诉我——药物有什么问题吗？咳嗽、头晕、浮肿？", actionHint: "描述用药感受", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "No side effects. I feel good. I've been checking my blood pressure at home — it's been around 125 over 80.",
            textZh: "没有副作用。感觉挺好。我在家量血压——一般在125/80左右。",
          },
          {
            speaker: "them",
            role: "远程医生",
            textEn: "125 over 80 is great — that's well controlled. I'll send a 90-day prescription to your pharmacy. Which pharmacy do you use?",
            textZh: "125/80 很好——控制得很好。我给你开90天的处方发到你的药房。你用哪家药房？",
            keyPhrases: [
              { en: "well controlled", zh: "控制得很好" },
              { en: "send a prescription to your pharmacy", zh: "把处方发到你的药房" },
            ],
            alternativeExpressions: [
              { textEn: "That's a good reading. I'll e-prescribe a 90-day supply. Just confirm your pharmacy for me.", textZh: "数值不错。我电子开方90天的量。跟我确认一下你的药房。", actionHint: "告知你的药房", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "CVS on Market Street. Can I pick it up today?",
            textZh: "Market Street 的 CVS 药房。今天能取吗？",
          },
          {
            speaker: "them",
            role: "远程医生",
            textEn: "I'm sending it electronically right now. It should be ready within two to four hours. The pharmacy will text you when it's ready. One more thing — you're due for a blood test to check your kidney function and potassium levels. This medication can affect those. Can you go to a lab this week?",
            textZh: "我现在电子发送。应该两到四小时内准备好。药房准备好了会发短信给你。还有一件事——你该做血液检查了，查一下肾功能和钾水平。这种药可能影响这些指标。这周能去抽血吗？",
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
              { textEn: "Sent! Should be good to go in two to four hours. They'll text you. Oh, one more thing — you're overdue for bloodwork. I need to check your kidneys and potassium. Can you swing by a lab this week?", textZh: "发了！两到四小时就能取。他们会发短信通知你。对了，你该做血液检查了。我需要查肾功能和钾。这周能去趟化验室吗？", actionHint: "安排抽血时间", frequency: "common" },
              { textEn: "I'm e-prescribing it now — give the pharmacy a couple hours. They'll shoot you a text. By the way, it's time for a blood test — your kidneys and potassium need checking. That doable this week?", textZh: "我现在电子发方——给药房几小时准备。他们会发短信给你。顺便说一下，该做血检了——查肾功能和钾水平。这周能安排吗？", actionHint: "确认抽血安排", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go on Thursday. Where should I go for the blood test?",
            textZh: "我周四去。去哪里抽血？",
          },
          {
            speaker: "them",
            role: "远程医生",
            textEn: "I'll send the lab order to Quest Diagnostics — they have a location near you. Just walk in with your ID and insurance card, no appointment needed. Results usually come back in two to three days, and I'll review them and message you through the app. Any other questions?",
            textZh: "我把化验单发到 Quest Diagnostics——你附近有一家。带上身份证和保险卡直接去就行，不需要预约。结果通常两三天出来，我会看完后通过APP给你发消息。还有别的问题吗？",
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
              { textEn: "I'll order it through Quest Diagnostics — there's one near you. Just walk in with your ID and insurance card. Results come back in a couple days and I'll message you through the app. All good?", textZh: "我发到 Quest Diagnostics——你附近有一家。带身份证和保险卡直接去就行。结果两三天出来，我通过APP给你发消息。还有别的问题吗？", actionHint: "确认实验室地址", frequency: "common" },
              { textEn: "I'm sending the order to Quest — no appointment needed, just show up with your ID. I'll go over the results when they're back and ping you on the app.", textZh: "化验单发到 Quest——不用预约，带身份证去就行。结果出来后我看完会在APP上通知你。", actionHint: "前往化验室", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "No, that covers everything. Thank you, Dr. Chen. This telemedicine thing is really convenient!",
            textZh: "没有了，都清楚了。谢谢陈医生。远程医疗真的很方便！",
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
            textEn: "Hi, I need a COVID test. My flight back to China requires a negative result. Do you offer rapid tests?",
            textZh: "你好，我需要做新冠检测。回中国的航班要求阴性结果。你们有快速检测吗？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Yes, we offer rapid antigen tests. Results are ready in 15 minutes. It's $25 without insurance. Do you need an official printed certificate, or is a digital result OK?",
            textZh: "有的，我们有快速抗原检测。15分钟出结果。没有保险的话25美元。你需要正式打印的证明还是电子结果就行？",
            keyPhrases: [
              { en: "rapid antigen test", zh: "快速抗原检测" },
              { en: "certificate", zh: "证明/报告" },
              { en: "digital result", zh: "电子结果" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, we do rapid tests — 15 minutes for results. It's 25 bucks if you're paying out of pocket. You want a paper certificate or is a digital one fine?", textZh: "有的，快速检测——15分钟出结果。自费的话25美元。你要纸质证明还是电子版就行？", actionHint: "说明证明要求", frequency: "common" },
              { textEn: "We've got rapid antigen tests available. Results in about 15 minutes, $25 without insurance. Do you need an official certificate for travel?", textZh: "我们有快速抗原检测。大约15分钟出结果，没保险25美元。你需要旅行用的正式证明吗？", actionHint: "确认证明格式", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I need a printed certificate with a QR code. My airline specifically asked for that.",
            textZh: "需要有二维码的打印证明。航空公司特别要求的。",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "No problem — we can provide that. I'll need your passport and flight information. The test is a nasal swab. Have you done one before?",
            textZh: "没问题——可以提供。需要你的护照和航班信息。检测是鼻拭子。以前做过吗？",
            keyPhrases: [
              { en: "nasal swab", zh: "鼻拭子" },
              { en: "flight information", zh: "航班信息" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing — just bring your passport and flight details. The test is a nasal swab. Have you done one before, or is this your first time?", textZh: "没问题——把护照和航班信息给我。检测是鼻拭子。以前做过吗？", actionHint: "提供证件", frequency: "common" },
              { textEn: "We can do that. I'll need to see your passport and know your flight info. It's just a quick nasal swab — pretty straightforward.", textZh: "可以的。需要看你的护照和航班信息。就是一个快速鼻拭子——很简单。", actionHint: "出示护照", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I've done it before. Go ahead.",
            textZh: "做过。来吧。",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "OK, tilt your head back slightly... I'm going to insert the swab into each nostril for about 5 seconds. It might feel a bit uncomfortable. Ready? ... All done. Please have a seat in the waiting area. Your result will be ready in about 15 minutes.",
            textZh: "好的，头稍微往后仰……我要把拭子伸进每个鼻孔大约5秒。可能会有点不舒服。准备好了吗？……好了。请在等候区坐一下。大约15分钟出结果。",
            keyPhrases: [
              { en: "tilt your head back", zh: "头往后仰" },
              { en: "nostril", zh: "鼻孔" },
              { en: "waiting area", zh: "等候区" },
            ],
            alternativeExpressions: [
              { textEn: "Alright, lean your head back a bit... I'm gonna swab each nostril for about five seconds. Not the most pleasant thing, but it's quick. Ready? ... Done! Go sit in the waiting area — results in 15.", textZh: "好的，头往后仰一点……我在每个鼻孔里擦大约五秒。不太舒服但很快。准备好了吗？……好了！去等候区坐着——15分钟出结果。", actionHint: "等待结果", frequency: "common" },
              { textEn: "Head back for me... Quick swab in each nostril, five seconds each side. Might tickle a bit. And... all done! Take a seat, we'll have your results shortly.", textZh: "头往后仰……每个鼻孔快速擦一下，每边五秒。可能有点痒痒。好了……完成！坐一下，很快出结果。", actionHint: "在等候区等待", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. What if it comes back positive?",
            textZh: "谢谢。如果是阳性怎么办？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "If it's positive, you should isolate and contact your airline about rebooking. We can also refer you to a telemedicine doctor who can prescribe antiviral medication if needed. You may also want to check your travel insurance for coverage of trip delays.",
            textZh: "如果阳性，你应该自我隔离并联系航空公司改签。我们也可以帮你转介远程医生，需要的话可以开抗病毒药。你可能还要查一下旅行保险是否覆盖行程延误。",
            keyPhrases: [
              { en: "isolate", zh: "自我隔离" },
              { en: "rebooking", zh: "改签" },
              { en: "antiviral medication", zh: "抗病毒药" },
              { en: "trip delays", zh: "行程延误" },
            ],
            alternativeExpressions: [
              { textEn: "If it comes back positive, you'll need to isolate and call your airline about changing your flight. We can hook you up with a telemedicine doc for antivirals if needed. Might wanna check your travel insurance about delays too.", textZh: "如果阳性，你需要自我隔离并联系航空公司改签。需要的话我们可以帮你联系远程医生开抗病毒药。也建议查一下旅行保险是否覆盖延误。", actionHint: "做好两手准备", frequency: "common" },
              { textEn: "A positive result means you should self-isolate and rebook your flight. We can refer you to a telehealth doctor who can prescribe treatment. Also double-check your travel insurance for trip delay coverage.", textZh: "阳性的话你应该自我隔离并改签航班。我们可以转介远程医生开处方。也查一下旅行保险有没有行程延误赔偿。", actionHint: "了解阳性应对方案", frequency: "common" },
            ],
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
            textEn: "My destination requires a PCR test, not just a rapid test. Where can I get a PCR test with results within 24 hours?",
            textZh: "目的地要求PCR核酸检测，不只是快速检测。哪里可以做24小时内出结果的PCR？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "We partner with LabCorp. They offer expedited PCR results in 12 to 24 hours. The cost is $150 for the rush service. Standard processing is 2 to 3 days for $85. Which would you prefer?",
            textZh: "我们和LabCorp合作。他们提供加急PCR，12到24小时出结果。加急150美元。标准处理2到3天，85美元。你要哪种？",
            keyPhrases: [
              { en: "expedited", zh: "加急" },
              { en: "rush service", zh: "加急服务" },
              { en: "standard processing", zh: "标准处理" },
            ],
            alternativeExpressions: [
              { textEn: "We work with LabCorp — they can do expedited PCR, results in 12 to 24 hours. That's $150. Or there's the regular turnaround, 2 to 3 days, for $85. What works for your timeline?", textZh: "我们和 LabCorp 合作——他们可以做加急PCR，12到24小时出结果。150美元。普通的2到3天，85美元。哪个适合你的时间？", actionHint: "选择加急或标准", frequency: "common" },
              { textEn: "Our lab partner LabCorp has a rush option — 12 to 24 hours for 150 dollars. Standard is 85 bucks but takes a couple days. Which do you need?", textZh: "我们的合作实验室 LabCorp 有加急选项——12到24小时，150美元。标准的85美元但要两三天。你需要哪个？", actionHint: "根据航班选择", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the rush service. My flight is in 36 hours. Will the report include the lab's official letterhead and my passport number?",
            textZh: "我要加急的。我的航班在36小时后。报告上会有实验室的正式抬头和我的护照号码吗？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Yes, the report will have the lab's letterhead, your full name as it appears on your passport, your date of birth, passport number, sample collection time, and result time. It meets international travel requirements. You'll receive it by email, and we can also print a hard copy.",
            textZh: "会的，报告上有实验室抬头、护照上的全名、出生日期、护照号码、采样时间和出结果时间。符合国际旅行要求。会发到你邮箱，我们也可以打印纸质版。",
            keyPhrases: [
              { en: "letterhead", zh: "正式抬头" },
              { en: "sample collection time", zh: "采样时间" },
              { en: "hard copy", zh: "纸质版" },
              { en: "international travel requirements", zh: "国际旅行要求" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, it'll have everything — lab letterhead, your name as it is on your passport, DOB, passport number, collection time, result time. Meets all the international travel reqs. We'll email it and can print a hard copy too.", textZh: "会的，什么都有——实验室抬头、护照上的姓名、出生日期、护照号、采样时间、出结果时间。符合所有国际旅行要求。邮件发送，也可以打印纸质版。", actionHint: "确认需要两种格式", frequency: "common" },
              { textEn: "The full report includes the lab letterhead, passport details, timestamps — the whole thing. It's accepted for international travel. You'll get it by email, and we can print one out for you too.", textZh: "完整报告包括实验室抬头、护照信息、时间戳——全部都有。国际旅行认可的。邮件发给你，也可以帮你打印一份。", actionHint: "索取两种格式", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. I'll need both email and a printed copy. Let's do it.",
            textZh: "太好了。邮件和纸质版都要。开始吧。",
          },
        ],
      },
    ],
  },

  // ==================== 处方药续方 ====================
  {
    id: "medical-prescription-refill",
    category: "medical",
    titleZh: "处方药续方",
    titleEn: "Prescription Refill",
    description: "在国外需要续方开药，包括慢性病用药",
    otherRole: "药剂师 / 医生",
    otherRoleIcon: "pill",
    journeyPhase: "daily",
    priority: "likely",
    flows: [
      {
        id: "refill-pharmacy",
        titleZh: "在药房续方",
        titleEn: "Refilling at a Pharmacy",
        description: "拿着中国的处方去美国药房续方",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm from China and I'm running out of my blood pressure medication. I have my Chinese prescription here. Can you refill it?",
            textZh: "你好，我从中国来，降压药快吃完了。我有中国的处方。能帮我续方吗？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "I'm sorry, but we can't fill a foreign prescription directly. You'll need a US doctor to write a new prescription. However, I can tell you the generic name of your medication to help the doctor here.",
            textZh: "抱歉，我们不能直接用外国处方配药。你需要美国医生开新处方。不过我可以帮你确认你的药的通用名，方便这里的医生开。",
            keyPhrases: [
              { en: "foreign prescription", zh: "外国处方" },
              { en: "generic name", zh: "通用名（药品的国际通用名称）" },
              { en: "fill a prescription", zh: "配药/取药" },
            ],
            culturalNote: "大多数国家不承认其他国家的处方。建议出国前让医生开英文处方，注明药品通用名和剂量。",
            alternativeExpressions: [
              { textEn: "Unfortunately we can't accept prescriptions from other countries. You'd need a local doctor to write a new one. But I can help you figure out the generic name of your medication so the doctor here knows exactly what to prescribe.", textZh: "很遗憾我们不能接受其他国家的处方。你需要当地医生重新开。但我可以帮你确认药物的通用名，方便这里的医生开同样的药。", actionHint: "提供药物名称", frequency: "common" },
              { textEn: "Yeah, foreign scripts don't work here, sorry. You'll need a US doctor to write it. Quickest way would be urgent care or a telehealth visit. I can look up the English name for your medication though.", textZh: "是的，外国处方在这里不能用，抱歉。你需要美国医生开。最快的方式是去紧急诊所或远程看诊。我可以帮你查药品的英文名。", actionHint: "考虑看诊方式", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I take amlodipine 5mg once daily. Is that available here?",
            textZh: "我吃氨氯地平5mg每天一次。这里有吗？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Yes, amlodipine is very common here. The brand name is Norvasc, but the generic is much cheaper. Your quickest option would be to visit an urgent care clinic — they can see you today and write a prescription. Or you could try a telemedicine visit — some can prescribe within an hour.",
            textZh: "有的，氨氯地平在这里很常见。品牌名是Norvasc，但通用药便宜很多。最快的方式是去紧急诊所——今天就能看，能开处方。或者试试远程医疗——有些一小时内就能开处方。",
            keyPhrases: [
              { en: "brand name", zh: "品牌名" },
              { en: "generic", zh: "通用药/仿制药" },
              { en: "urgent care clinic", zh: "紧急诊所" },
              { en: "telemedicine", zh: "远程医疗" },
            ],
            alternativeExpressions: [
              { textEn: "Oh yeah, amlodipine is super common here. Brand name's Norvasc but the generic is way cheaper. Your fastest bet? Hit up an urgent care — they can see you today and write the script. Or try a telehealth app — some of them can prescribe within the hour.", textZh: "氨氯地平在这里很常见。品牌名 Norvasc，但仿制药便宜得多。最快的办法？去紧急诊所——今天就能看，能开方。或者试试远程医疗APP——有些一小时内就能开。", actionHint: "选择就诊方式", frequency: "common" },
              { textEn: "Amlodipine? Yeah, that's everywhere. Go generic — it's much cheaper than brand-name Norvasc. You'll need a US prescription though. An urgent care visit or telehealth app is probably your quickest route.", textZh: "氨氯地平？到处都有。买仿制药——比品牌药 Norvasc 便宜很多。不过你需要美国处方。紧急诊所或远程医疗APP可能是最快的。", actionHint: "确认用药", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much will the medication cost without insurance?",
            textZh: "没有保险的话药多少钱？",
          },
          {
            speaker: "them",
            role: "药剂师",
            textEn: "Generic amlodipine is about $10 to $15 for a 30-day supply. I'd also recommend downloading the GoodRx app — it gives you coupons that can lower the price at most pharmacies. Even without insurance, you can often get a good deal.",
            textZh: "通用版氨氯地平30天量大约10到15美元。建议下载GoodRx App——它提供优惠券，大多数药房都能用来降价。即使没保险也经常能拿到好价格。",
            keyPhrases: [
              { en: "30-day supply", zh: "30天的量" },
              { en: "coupons", zh: "优惠券" },
              { en: "GoodRx", zh: "美国常用的药品比价App" },
            ],
            alternativeExpressions: [
              { textEn: "The generic runs about 10 to 15 bucks for a month's supply. Pro tip — download GoodRx. It's a free app that gives you coupons for prescriptions. Works at most pharmacies, even without insurance.", textZh: "仿制药一个月大约10到15美元。一个小窍门——下载 GoodRx。免费APP，给你处方药优惠券。大多数药房都能用，没保险也行。", actionHint: "下载GoodRx", frequency: "common" },
              { textEn: "It's pretty affordable — like ten to fifteen dollars for 30 days. Oh, and check out GoodRx if you don't have insurance. It can knock the price down even more.", textZh: "挺便宜的——30天大概10到15美元。对了，如果没保险看看 GoodRx。能再降价。", actionHint: "使用优惠券", frequency: "common" },
            ],
          },
        ],
      },
      {
        id: "controlled-medication",
        titleZh: "管控药品说明",
        titleEn: "Controlled Medication Explanation",
        description: "随身携带的管控类药品在入境时被询问",
        difficulty: "advanced",
        turns: [
          {
            speaker: "them",
            role: "海关官员",
            textEn: "What are these pills in your bag? I need to see a prescription for these.",
            textZh: "你包里这些药片是什么？我需要看处方。",
            alternativeExpressions: [
              { textEn: "Sir/Ma'am, what's this medication? I'm going to need to see a prescription or a doctor's letter for these.", textZh: "先生/女士，这是什么药？我需要看这些药的处方或医生证明。", actionHint: "出示处方信", frequency: "common" },
              { textEn: "Can you tell me what these pills are? Do you have documentation — a prescription or letter from your doctor?", textZh: "能告诉我这些药片是什么吗？有证明文件吗——处方或者医生的信？", actionHint: "提供英文处方信", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "These are my ADHD medication — methylphenidate. I have the prescription letter from my doctor in China, translated into English. Here it is.",
            textZh: "这是我的ADHD药物——哌甲酯。我有中国医生的处方信，翻译成了英文。给您。",
            vocabNotes: {
              "methylphenidate": { meaningInContext: "哌甲酯，一种用于治疗ADHD的药物，属于管控类药品" },
            },
          },
          {
            speaker: "them",
            role: "海关官员",
            textEn: "I see. How much do you have? In the US, you're allowed to bring up to a 90-day personal supply of prescription medication. It must be in its original packaging with the pharmacy label.",
            textZh: "明白了。带了多少？在美国，你可以带最多90天个人用量的处方药。必须在原包装里，有药房标签。",
            keyPhrases: [
              { en: "90-day personal supply", zh: "90天的个人用量" },
              { en: "original packaging", zh: "原包装" },
              { en: "pharmacy label", zh: "药房标签" },
              { en: "controlled substance", zh: "管控药品" },
            ],
            culturalNote: "出国携带处方药（尤其是精神类、止痛类）一定要带上英文处方信，药品保留原包装。有些国家对某些在中国合法的药品有严格限制。",
            alternativeExpressions: [
              { textEn: "OK. How much have you got? The rule is up to 90 days' worth for personal use. And it needs to be in the original bottle with the pharmacy label on it.", textZh: "好的。带了多少？规定是最多90天的个人用量。必须在原瓶里，上面有药房标签。", actionHint: "说明携带量", frequency: "common" },
              { textEn: "Alright. What quantity did you bring? You're allowed a 90-day personal supply max. It should be in its original container with proper labeling.", textZh: "好的。带了多少量？最多允许90天的个人用量。应该在原包装里，有正规标签。", actionHint: "展示原包装", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have a 60-day supply in the original bottles. Everything has the pharmacy labels from China.",
            textZh: "我带了60天的量，都在原瓶里。上面都有中国药房的标签。",
          },
          {
            speaker: "them",
            role: "海关官员",
            textEn: "That all checks out. You're good to go. Just keep the medication in your carry-on, not checked luggage, and keep the prescription letter with you at all times in case you're asked again.",
            textZh: "都没问题。你可以走了。药品放在随身行李里，不要托运，处方信随身带着以防再被问到。",
            keyPhrases: [
              { en: "checks out", zh: "没问题/核实通过" },
              { en: "carry-on", zh: "随身行李" },
              { en: "checked luggage", zh: "托运行李" },
            ],
            alternativeExpressions: [
              { textEn: "Everything looks fine — you're all set. Just keep the meds in your carry-on, not your checked bags, and hold onto that prescription letter in case anyone asks.", textZh: "都没问题——你可以走了。药放在随身行李里别托运，处方信随身带着以防被问。", actionHint: "妥善保管文件", frequency: "common" },
              { textEn: "Looks good. You're free to go. My advice — always keep the prescription letter on you and keep the medication in your hand luggage.", textZh: "没问题。可以走了。我的建议——处方信随身带，药物放在手提行李里。", actionHint: "顺利通关", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

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
            textEn: "I think I'm having an allergic reaction. My lips are swelling and I feel itchy all over. I ate shrimp about 30 minutes ago.",
            textZh: "我好像过敏了。嘴唇肿了，浑身痒。大约30分钟前吃了虾。",
          },
          {
            speaker: "them",
            role: "护士",
            textEn: "OK, I need you to stay calm. Are you having any trouble breathing? Any tightness in your throat or chest?",
            textZh: "好的，保持冷静。有呼吸困难吗？喉咙或胸口有发紧的感觉吗？",
            keyPhrases: [
              { en: "trouble breathing", zh: "呼吸困难" },
              { en: "tightness", zh: "发紧/紧绷" },
              { en: "throat", zh: "喉咙" },
              { en: "chest", zh: "胸口" },
            ],
            alternativeExpressions: [
              { textEn: "Take a deep breath for me. Can you breathe OK? Any tightness in your throat or chest? That's the first thing we need to check.", textZh: "深呼吸一下。能正常呼吸吗？喉咙或胸口有发紧吗？这是我们首先要确认的。", actionHint: "检查自己的呼吸", frequency: "common" },
              { textEn: "Stay calm, I'm right here. The most important question — is your breathing OK? Any wheezing or throat tightness?", textZh: "别慌，我就在这里。最重要的问题——呼吸正常吗？有喘息或喉咙发紧吗？", actionHint: "描述呼吸状况", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "No, I can breathe OK. It's mostly the swelling and itching. I've also got hives on my arms.",
            textZh: "没有，呼吸还好。主要是肿和痒。手臂上还起了荨麻疹。",
            vocabNotes: {
              "hives": { meaningInContext: "荨麻疹——皮肤上突起的红色风团", similarUsage: "I broke out in hives after eating peanuts." },
            },
          },
          {
            speaker: "them",
            role: "护士",
            textEn: "I'm going to give you an antihistamine — Benadryl — right away. That should help with the swelling and itching. Have you ever had a shellfish allergy before?",
            textZh: "我先给你一片抗组胺药——苯海拉明——马上吃。能缓解肿胀和瘙痒。你以前对贝壳类海鲜过敏过吗？",
            keyPhrases: [
              { en: "antihistamine", zh: "抗组胺药" },
              { en: "Benadryl", zh: "苯海拉明（美国常见的抗过敏药品牌名）" },
              { en: "shellfish allergy", zh: "贝壳类海鲜过敏" },
            ],
            alternativeExpressions: [
              { textEn: "I'm giving you Benadryl right now — it'll help with the swelling and the itch. Have you ever had a reaction to shellfish before?", textZh: "我现在给你一片苯海拉明——能缓解肿胀和瘙痒。你以前对贝壳类海鲜过敏过吗？", actionHint: "回忆过敏史", frequency: "common" },
              { textEn: "Let me get you some Benadryl right away. That should bring down the swelling and stop the itching. Quick question — any prior shellfish allergy?", textZh: "我马上给你拿苯海拉明。应该能消肿止痒。快问一下——以前对贝壳类过敏过吗？", actionHint: "告知过敏史", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I've never had this reaction before. This is my first time eating shrimp in the US — maybe a different species?",
            textZh: "以前从来没过敏过。这是第一次在美国吃虾——可能品种不同？",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "It's possible — some people react to specific types of shellfish. I'm also going to prescribe an EpiPen for you to carry. If you ever feel your throat closing or have trouble breathing after eating, use it immediately and call 911. This is important.",
            textZh: "有可能——有些人只对特定种类的贝类过敏。我还会给你开一支肾上腺素笔随身带着。如果以后吃东西后感觉喉咙发紧或呼吸困难，立刻使用然后打911。这很重要。",
            keyPhrases: [
              { en: "EpiPen", zh: "肾上腺素笔（急救用自动注射器）" },
              { en: "throat closing", zh: "喉咙发紧/闭合" },
              { en: "call 911", zh: "打911急救电话" },
            ],
            culturalNote: "在美国，EpiPen是过敏患者常备的急救器具。如果你有严重过敏史，建议出国前咨询医生是否需要携带。",
            alternativeExpressions: [
              { textEn: "Could be — allergies to specific shellfish types happen. I'm going to prescribe you an EpiPen to keep on you. If you ever feel your throat closing or can't breathe after eating, use it and dial 911. This is serious.", textZh: "有可能——对特定种类的贝壳类过敏是存在的。我给你开一支EpiPen随身带着。如果以后吃东西后感觉喉咙闭合或不能呼吸，立刻使用然后打911。这很严重。", actionHint: "认真对待过敏", frequency: "common" },
              { textEn: "That's definitely possible. Some people are fine with one type of shrimp but react to another. I'm writing you a script for an EpiPen — carry it everywhere. If you ever have trouble breathing after eating, use it immediately and call 911.", textZh: "完全有可能。有人对一种虾没事但对另一种过敏。我给你开EpiPen——随身带。如果吃东西后呼吸困难，立刻使用并打911。", actionHint: "随身携带EpiPen", frequency: "common" },
            ],
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
            textEn: "I've been sneezing nonstop since I arrived here. I think it might be seasonal allergies. Can I get tested to find out what I'm allergic to?",
            textZh: "来了之后一直不停打喷嚏。我觉得可能是花粉过敏。能做过敏原检测吗？",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "Yes, we can do a skin prick test. We'll apply small amounts of common allergens to your forearm and see which ones cause a reaction. It takes about 30 minutes for the full test. You'll need to stop taking antihistamines at least 3 days before the test.",
            textZh: "可以，我们可以做皮肤点刺试验。在你前臂上滴少量常见过敏原，看哪些会引起反应。全套测试大约30分钟。测试前至少停用抗组胺药3天。",
            keyPhrases: [
              { en: "skin prick test", zh: "皮肤点刺试验" },
              { en: "allergens", zh: "过敏原" },
              { en: "forearm", zh: "前臂" },
              { en: "reaction", zh: "反应" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, we do a skin prick test — little drops of common allergens on your arm, then we see what reacts. Takes about 30 minutes total. Just make sure you haven't taken any antihistamines in the last three days.", textZh: "可以做皮肤点刺试验——在你手臂上滴常见过敏原，看哪些有反应。总共大约30分钟。确保最近三天没吃抗过敏药。", actionHint: "确认停药时间", frequency: "common" },
              { textEn: "We can test you right here. It's called a skin prick test — we put tiny amounts of allergens on your forearm and see what flares up. Quick and pretty painless. You just can't be on antihistamines.", textZh: "我们可以在这里测。叫皮肤点刺试验——在前臂上放微量过敏原看哪些有反应。很快也基本不痛。就是不能在吃抗过敏药。", actionHint: "确认是否可以今天做", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I haven't taken any medication recently. Can we do it today?",
            textZh: "我最近没吃任何药。今天能做吗？",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "Yes, let's do it now. I'll test for the most common ones — tree pollen, grass pollen, ragweed, dust mites, mold, pet dander, and several food allergens. You'll feel small scratches, like a mosquito bite.",
            textZh: "可以，现在就做。我测最常见的——树花粉、草花粉、豚草、尘螨、霉菌、宠物皮屑，还有几种食物过敏原。你会感觉到轻微的刺痒，像蚊子叮一样。",
            keyPhrases: [
              { en: "tree pollen", zh: "树花粉" },
              { en: "ragweed", zh: "豚草" },
              { en: "dust mites", zh: "尘螨" },
              { en: "pet dander", zh: "宠物皮屑" },
              { en: "mold", zh: "霉菌" },
            ],
            alternativeExpressions: [
              { textEn: "Let's go ahead. I'm testing the usual suspects — tree pollen, grass, ragweed, dust mites, mold, pet dander, and some food allergens. You'll feel little scratches, kinda like tiny mosquito bites.", textZh: "开始吧。我测最常见的——树花粉、草、豚草、尘螨、霉菌、宠物皮屑，还有几种食物过敏原。你会感觉到轻微的刺痒，像小蚊子咬一样。", actionHint: "放松配合检测", frequency: "common" },
              { textEn: "Perfect, let's do it right now. I'll hit all the major ones — pollen, dust mites, mold, pet dander, some foods. Small scratches on your arm — shouldn't hurt much.", textZh: "好的，现在就做。我测所有主要的——花粉、尘螨、霉菌、宠物皮屑、一些食物。手臂上轻微划痕——不怎么疼。", actionHint: "等待检测结果", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "OK, I'm ready. After we get the results, what are my treatment options?",
            textZh: "好的，准备好了。结果出来后有什么治疗方案？",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "Depending on the results, I can recommend daily antihistamines, nasal corticosteroid sprays, or for long-term relief, immunotherapy — which is allergy shots or sublingual tablets that gradually reduce your sensitivity over time.",
            textZh: "根据结果，我会推荐每日服用抗组胺药、鼻用皮质类固醇喷雾，或者长期缓解的话可以做免疫治疗——就是定期打过敏针或舌下含片，逐渐降低你的敏感度。",
            keyPhrases: [
              { en: "nasal corticosteroid spray", zh: "鼻用皮质类固醇喷雾" },
              { en: "immunotherapy", zh: "免疫治疗" },
              { en: "allergy shots", zh: "过敏针" },
              { en: "sublingual tablets", zh: "舌下含片" },
            ],
            alternativeExpressions: [
              { textEn: "Once we see what you're allergic to, we've got options — daily antihistamines, a nasal steroid spray, or for a long-term fix, immunotherapy. That's either allergy shots or tablets under your tongue that dial down your sensitivity over time.", textZh: "看到你对什么过敏后，我们有几种选择——每天吃抗组胺药、鼻用类固醇喷雾，或者长期方案的免疫治疗。就是打过敏针或舌下含片，慢慢降低你的敏感度。", actionHint: "了解治疗方案", frequency: "common" },
              { textEn: "We've got several routes depending on what lights up. Antihistamines for quick relief, nasal sprays for daily management, or if you want to tackle it long-term, immunotherapy — shots or sublingual tablets.", textZh: "取决于哪些有反应，我们有几种方案。抗组胺药快速缓解，鼻腔喷雾日常管理，如果想长期解决，可以做免疫治疗——打针或舌下含片。", actionHint: "选择治疗方式", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },
];
