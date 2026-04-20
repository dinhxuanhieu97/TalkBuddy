import type { PresetScene } from "../scene-types";

// ============================================================
// 教育场景 — Education Scenes
// 覆盖：学校报名、家长会、幼儿园、ESL、大学、家教、图书馆等
// ============================================================

export const EDUCATION_SCENES: PresetScene[] = [
  // ==================== 学校报名 ====================
  {
    id: "education-school-enrollment",
    category: "education",
    titleZh: "学校报名",
    titleEn: "School Enrollment",
    description: "带孩子去学校办理入学注册手续",
    otherRole: "行政人员",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "enrollment-basic",
        titleZh: "基本入学流程",
        titleEn: "Basic Enrollment Process",
        description: "首次到学校办理入学登记",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I would like to enroll my child in this school. Where do I start?",
            textZh: "你好，我想给孩子报名这所学校。我该从哪里开始？",
            casualVersion: "Hey, I want to get my kid signed up here. What do I need to do?",
            commonMistake: {
              wrong: "I want to enroll my child in this school.",
              correct: "I would like to enroll my child in this school.",
              explanation: "在美语中，'I want' 听起来过于直接，用 'I would like to' 更礼貌。",
            },
            formalityVariants: {
              casual: "Hey, wanna enroll my kid here. Where should I start?",
              standard: "Hi, I would like to enroll my child in this school. Where do I start?",
              formal:
                "Good morning/afternoon, I am here to inquire about the enrollment process for my child at this institution. Could you please direct me on where to begin?",
            },
          },
          {
            speaker: "them",
            role: "行政人员",
            textEn:
              "Welcome! First, we need to verify your address to confirm your child is in our school district. Do you have a proof of residency?",
            textZh: "欢迎！首先，我们需要验证您的地址，确认您的孩子在我们的学区内。您有居住证明吗？",
            keyPhrases: [
              { en: "proof of residency", zh: "居住证明" },
              { en: "school district", zh: "学区" },
            ],
            casualVersion:
              "Welcome! First, we gotta check your address to confirm your kid's in our district. Got proof of residency?",
            culturalNote: "美国公立学校入学需确认住址在学区内，需提供居住证明。",
            commonMistake: {
              wrong: "Do you have address proof?",
              correct: "Do you have a proof of residency?",
              explanation: "'proof of residency' 是标准用语，'address proof' 听起来不自然。",
            },
            formalityVariants: {
              casual:
                "Welcome! First, we gotta check your address to confirm your kid's in our district. Got proof of residency?",
              standard:
                "Welcome! First, we need to verify your address to confirm your child is in our school district. Do you have a proof of residency?",
              formal:
                "Welcome. To commence the enrollment process, it is requisite that we verify your residential address to ascertain that your child resides within our designated school district. Do you have documentation that serves as proof of residency?",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Hi there! Let me walk you through the process. The first step is showing us proof of address so we can confirm your district. Got a utility bill or lease?",
                textZh: "你好！让我带你了解一下流程。第一步是提供地址证明来确认学区。有水电费账单或租约吗？",
                actionHint: "准备好地址证明文件",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I have our lease agreement and a utility bill. Here you go.",
            textZh: "有的，我有租房合同和水电费账单。给您。",
            casualVersion: "Yep, got our lease and a utility bill right here.",
            commonMistake: {
              wrong: "Yes, I have lease agreement and utility bill. Give you.",
              correct: "Yes, I have our lease agreement and a utility bill. Here you go.",
              explanation: "手递物品时，'Here you go' 是自然且礼貌的说法，'Give you' 不地道。",
            },
            formalityVariants: {
              casual: "Yeah, got our lease and a utility bill. Here.",
              standard: "Yes, I have our lease agreement and a utility bill. Here you go.",
              formal:
                "Yes, I do. I have brought both our current lease agreement and a recent utility bill for your review. Please find them here.",
            },
          },
          {
            speaker: "them",
            role: "行政人员",
            textEn:
              "Great, these look good. Now I will need your child's birth certificate and immunization records. Do you have those with you?",
            textZh: "很好，这些没问题。现在我需要孩子的出生证明和免疫记录。您带了吗？",
            keyPhrases: [
              { en: "birth certificate", zh: "出生证明" },
              { en: "immunization records", zh: "免疫记录/疫苗接种记录" },
            ],
            casualVersion:
              "Okay, those look good. Next up, I'll need your kid's birth certificate and shot records. Got 'em?",
            commonMistake: {
              wrong: "Now I need child's birth certificate and vaccine records.",
              correct: "Now I will need your child's birth certificate and immunization records.",
              explanation: "'immunization records' 是更正式和常用的说法，'vaccine records' 也可以但不够地道。",
            },
            formalityVariants: {
              casual:
                "Okay, those look good. Next up, I'll need your kid's birth certificate and shot records. Got 'em?",
              standard:
                "Great, these look good. Now I will need your child's birth certificate and immunization records. Do you have them with you?",
              formal:
                "Excellent, these documents appear to be in order. The subsequent requirement will be your child's official birth certificate and their complete immunization records. Have you brought those with you today?",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Perfect, those check out. Next up, I will need the birth certificate and shot records for your child. Did you bring those along?",
                textZh: "完美，这些都没问题。接下来我需要孩子的出生证明和疫苗记录。您带来了吗？",
                actionHint: "提供出生证明和疫苗记录",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I have the birth certificate, but the immunization records are from China. Do you accept foreign vaccination records?",
            textZh: "我有出生证明，但免疫记录是中国的。你们接受国外的疫苗记录吗？",
            casualVersion: "Got the birth certificate, but the shot records are from China. Is that okay?",
            commonMistake: {
              wrong: "My immunization records are from China. Do you accept foreign records?",
              correct: "My immunization records are from China. Do you accept foreign vaccination records?",
              explanation: "添加 'vaccination' 更清晰地指明是疫苗记录，避免歧义。",
            },
            formalityVariants: {
              casual: "Got the birth cert, but the shot records are from China. You guys take foreign ones?",
              standard:
                "I have the birth certificate, but the immunization records are from China. Do you accept foreign vaccination records?",
              formal:
                "I do have the birth certificate, however, the immunization records originate from China. Is it permissible to submit foreign vaccination documentation?",
            },
          },
          {
            speaker: "them",
            role: "行政人员",
            textEn:
              "We can accept them, but they will need to be translated into English by a certified translator. You can also visit our county health department to get them verified.",
            textZh: "我们可以接受，但需要由认证翻译翻译成英文。您也可以去县卫生部门进行验证。",
            keyPhrases: [
              { en: "certified translator", zh: "认证翻译" },
              { en: "county health department", zh: "县卫生部门" },
            ],
            culturalNote:
              "In the US, schools require specific immunization records. Foreign records are generally accepted but must be officially translated.",
            casualVersion:
              "Yeah, we can take 'em, but you'll need 'em translated to English by a certified translator. Or, you can just go to the county health department to get 'em verified.",
            formalityVariants: {
              casual:
                "Yeah, we can take 'em, but you'll need 'em translated to English by a certified translator. Or, you can just go to the county health department to get 'em verified.",
              standard:
                "We can accept them, but they will need to be translated into English by a certified translator. You can also visit our county health department to get them verified.",
              formal:
                "We are indeed able to accept them, however, it is a requirement that they be translated into English by a certified professional translator. Alternatively, you may visit our county health department for verification.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Sure, we see that a lot. Just get them translated by a certified translator, or swing by the county health office — they can verify everything.",
                textZh: "当然，这种情况我们经常遇到。找认证翻译翻译一下就行，或者去县卫生办公室——他们可以帮你验证。",
                actionHint: "记下翻译和验证的两个选项",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "enrollment-intermediate",
        titleZh: "深入了解学校项目",
        titleEn: "Learning About School Programs",
        description: "询问学校的特色项目和ESL支持",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "My child doesn't speak much English yet. Does the school have any language support programs?",
            textZh: "我的孩子英语还不太好。学校有语言支持项目吗？",
            casualVersion: "My kid barely speaks English right now. Do you guys have any help for that?",
            commonMistake: {
              wrong: "My child English not good.",
              correct: "My child doesn't speak English well yet.",
              explanation: "语法错误，且“not good”比较生硬，'not well yet'更自然。",
            },
            formalityVariants: {
              casual: "Kid's English isn't great yet. Got any language support?",
              standard: "My child doesn't speak English well yet. Does the school have any language support programs?",
              formal:
                "My child has not yet achieved fluency in English. Could you please inform me if the school provides any language support programs?",
            },
          },
          {
            speaker: "them",
            role: "行政人员",
            textEn:
              "Absolutely. We have an ESL program that meets daily. Your child will be assessed first, and then placed in the appropriate level.",
            textZh: "当然有。我们有每天都有课的ESL项目。您的孩子会先接受评估，然后分配到合适的级别。",
            casualVersion: "Yeah, totally. We got an ESL program daily. Your kid'll get assessed first, then put in the right level.",
            formalityVariants: {
              casual: "Yep. We got a daily ESL program. Your kid gets assessed, then placed.",
              standard: "Absolutely. We have an ESL program that meets daily. Your child will be assessed first, and then placed in the appropriate level.",
              formal: "Certainly. We provide a daily English as a Second Language (ESL) program. Students undergo an initial assessment for appropriate level placement.",
            },
            keyPhrases: [
              { en: "ESL program", zh: "ESL项目（英语作为第二语言）" },
              { en: "assessed", zh: "评估" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yes, we do! We run a daily ESL class. We will test your child first to figure out where they fit best. It is a great program.",
                textZh: "有的！我们有每日ESL课程。我们会先测试您的孩子，看看最适合哪个级别。这个项目很好。",
                actionHint: "了解ESL评估流程",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "That sounds helpful. How long does it usually take for a child to transition out of the ESL program?",
            textZh: "听起来很有帮助。孩子通常多久可以从ESL项目中毕业？",
            commonMistake: {
              wrong: "How long can a child graduate from ESL?",
              correct: "How long does it usually take for a child to transition out of the ESL program?",
              explanation: "“Graduate”不用于这种项目，且表达不够自然，'transition out of'更常用。",
            },
            formalityVariants: {
              casual: "That's good. How long 'til kids usually get out of ESL?",
              standard: "That sounds helpful. How long does it usually take for a child to transition out of the ESL program?",
              formal: "That information is very useful. What is the typical duration for a student to successfully transition out of the English as a Second Language program?",
            },
            casualVersion: "Nice. How long do kids usually stay in ESL before they move on?",
          },
          {
            speaker: "them",
            role: "行政人员",
            textEn:
              "It varies, but most students transition within one to two years. We reassess every semester to track their progress.",
            textZh: "因人而异，但大多数学生在一到两年内过渡。我们每学期重新评估以跟踪进度。",
            casualVersion: "Depends, but usually, kids are out in a year or two. We check in every semester to see how they're doing.",
            formalityVariants: {
              casual: "Varies, but most kids transition in a year or two. We re-evaluate each semester to track progress.",
              standard: "It varies, but most students transition within one to two years. We reassess every semester to track their progress.",
              formal: "The timeframe can vary; however, the majority of students typically transition within a period of one to two academic years. We conduct reassessments each semester to monitor their progress comprehensively.",
            },
            keyPhrases: [
              { en: "transition", zh: "过渡/转出" },
              { en: "reassess every semester", zh: "每学期重新评估" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It depends on the child, honestly. Usually one to two years. We check in every semester to see how they are doing.",
                textZh: "说实话因孩子而异。通常一到两年。我们每学期都会跟进看看他们的情况。",
                actionHint: "了解评估周期",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Are there any after-school programs or tutoring available for extra support?",
            textZh: "有课后项目或辅导班可以提供额外帮助吗？",
            commonMistake: {
              wrong: "Have after-school programs or tutoring?",
              correct: "Are there any after-school programs or tutoring available for extra support?",
              explanation: "表达不完整，缺少be动词和助词'any'/'available'。",
            },
            formalityVariants: {
              casual: "Got any after-school stuff or tutoring for extra help?",
              standard: "Are there any after-school programs or tutoring available for extra support?",
              formal: "Are there any after-school programs or supplementary tutoring services provided for additional academic assistance?",
            },
            casualVersion: "Is there any after-school stuff or tutoring for extra help?",
          },
          {
            speaker: "them",
            role: "行政人员",
            textEn:
              "Yes, we offer free after-school tutoring three days a week. We also have a homework club where students can get help from older peer mentors.",
            textZh: "有的，我们每周三天提供免费课后辅导。我们还有一个作业俱乐部，学生可以得到高年级同伴导师的帮助。",
            casualVersion: "Yeah, we got free after-school tutoring three days a week. Plus, there's a homework club where older students help out.",
            formalityVariants: {
              casual: "Yep, free after-school tutoring three days a week. Plus, a homework club with older student mentors.",
              standard: "Yes, we offer free after-school tutoring three days a week. We also have a homework club where students can get help from older peer mentors.",
              formal: "Indeed, we provide complimentary after-school tutoring sessions three days per week. Furthermore, we operate a homework club where students can receive assistance from experienced peer mentors.",
            },
            keyPhrases: [
              { en: "after-school tutoring", zh: "课后辅导" },
              { en: "peer mentors", zh: "同伴导师" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Definitely! We have free tutoring on Monday, Wednesday, and Friday after school. Plus there is a homework club with older kids who help out.",
                textZh: "当然有！周一、周三和周五放学后我们有免费辅导。还有作业俱乐部，高年级学生会帮忙。",
                actionHint: "记下辅导时间安排",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 家长会 ====================
  {
    id: "education-parent-teacher",
    category: "education",
    titleZh: "家长会",
    titleEn: "Parent-Teacher Conference",
    description: "与孩子的老师面对面交流学习情况",
    otherRole: "老师",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "conference-basic",
        titleZh: "了解孩子在校表现",
        titleEn: "Learning About Your Child's Performance",
        description: "第一次参加家长会，了解孩子的基本情况",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm Wei's parent. Thank you for meeting with me today.",
            textZh: "你好，我是 Wei 的家长。感谢您今天与我会面。",
            casualVersion: "Hey, I'm Wei's dad. Thanks for taking the time.",
            formalityVariants: {
              casual: "Hey, I'm Wei's parent. Thanks for meeting.",
              standard: "Hi, I'm Wei's parent. Thank you for meeting with me today.",
              formal:
                "Good morning/afternoon, I am Wei's parent. I appreciate you taking the time to meet with me today.",
            },
          },
          {
            speaker: "them",
            role: "老师",
            textEn:
              "Of course! I'm glad you could come. Wei is doing really well overall. She is very curious and always eager to participate in class.",
            textZh: "当然！很高兴您能来。Wei 整体表现得很好。她非常好奇，总是积极参与课堂。",
            keyPhrases: [
              { en: "eager to participate", zh: "积极参与" },
              { en: "doing really well overall", zh: "整体表现很好" },
            ],
            casualVersion:
              "Of course! Glad you made it. Wei's doing really well. She's super curious and always participates actively.",
            commonMistake: {
              wrong: "Her overall performance is very good.",
              correct: "She's doing very well overall.",
              explanation: "doing well 比 performance is good 更口语化，自然。",
            },
            formalityVariants: {
              casual:
                "Sure! Glad you could make it. Wei's doing great. She's super curious and always jumps in during class.",
              standard:
                "Of course! I'm glad you could make it. Wei is doing very well overall. She's very curious and always participates actively in class.",
              formal:
                "Certainly, it's a pleasure to have you. Wei is performing exceptionally well across the board. She consistently demonstrates a strong sense of curiosity and engages proactively in classroom activities.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "So glad you made it! Wei is a great student. She is always raising her hand and asking smart questions.",
                textZh: "很高兴您来了！Wei 是个很棒的学生。她总是举手提出好问题。",
                actionHint: "对正面反馈表示感谢",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's wonderful to hear. Are there any areas where she could improve?",
            textZh: "听到这个太好了。有没有她可以改进的地方？",
            casualVersion: "Great to hear! Anything she needs to work on?",
            commonMistake: {
              wrong: "Is there any place she can improve?",
              correct: "Is there anything she could improve on?",
              explanation: "place 在此语境下不指具体地点，用 anything 更自然。",
            },
            formalityVariants: {
              casual: "Awesome! Anything she could work on?",
              standard: "That's great to hear. Is there anything she could improve on?",
              formal:
                "That's very encouraging to hear. Are there any specific areas where she might further develop or enhance her skills?",
            },
          },
          {
            speaker: "them",
            role: "老师",
            textEn:
              "She is a bit shy about speaking up during group discussions. I'd love to see her share her ideas more confidently.",
            textZh: "她在小组讨论时有点害羞，不太敢发言。我希望她能更自信地分享自己的想法。",
            keyPhrases: [
              { en: "speaking up", zh: "大声发言/发表意见" },
              { en: "group discussions", zh: "小组讨论" },
            ],
            casualVersion:
              "She's a little shy speaking up in group discussions. I hope she'll feel more confident sharing her ideas.",
            commonMistake: {
              wrong: "She is a bit shy to speak up.",
              correct: "She is a bit shy about speaking up.",
              explanation: "shy about (doing something) 是更自然的表达。",
            },
            formalityVariants: {
              casual:
                "She's a little quiet in group discussions. I'd like to see her share her ideas more confidently.",
              standard:
                "She is a bit shy about speaking up during group discussions. I hope she'll feel more confident sharing her ideas.",
              formal:
                "She tends to be somewhat reserved when it comes to contributing during collaborative discussions. My hope is that she will cultivate greater self-assurance in articulating her thoughts.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "The one area I would flag is participation in group work. She has great ideas but tends to hold back. I think with some encouragement she will open up more.",
                textZh: "我要提一下的是小组合作时的参与度。她有很好的想法但倾向于保留。我觉得多鼓励一下她会更开放的。",
                actionHint: "了解如何帮助孩子",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I think part of it is the language barrier. Is there anything I can do at home to help?",
            textZh: "我觉得部分原因是语言障碍。有什么我在家可以做的来帮助她吗？",
            casualVersion: "Yeah, I think it is the language thing. Any tips for what we can do at home?",
            commonMistake: {
              wrong: "Is there any method I can do at home to help?",
              correct: "Is there anything I can do at home to help?",
              explanation: "method 在此不合适，anything 是询问具体行动的自然表达。",
            },
            formalityVariants: {
              casual: "I bet some of it's the language. Anything I can do at home to help out?",
              standard: "I think part of it is the language barrier. Is there anything I can do at home to help?",
              formal:
                "I suspect that the language barrier may contribute to this. Do you have any recommendations for activities or strategies I could implement at home to offer support?",
            },
          },
          {
            speaker: "them",
            role: "老师",
            textEn:
              "Reading together in English every night would really help. Even twenty minutes makes a big difference. I can also send home some practice worksheets.",
            textZh: "每晚一起用英语阅读会很有帮助。即使二十分钟也会有很大不同。我也可以带一些练习册回家。",
            keyPhrases: [
              { en: "makes a big difference", zh: "有很大不同/帮助很大" },
              { en: "practice worksheets", zh: "练习册" },
            ],
            casualVersion:
              "Reading together in English every night would really help. Even twenty minutes makes a huge difference. I can also send home some practice sheets.",
            commonMistake: {
              wrong: "I can also bring some practice worksheets home to you.",
              correct: "I can also send home some practice worksheets.",
              explanation: "send home 指的是把东西给学生带回家，不是老师自己带回家给家长。",
            },
            formalityVariants: {
              casual:
                "Reading in English together nightly would really help. Even just twenty minutes totally changes things. I can send home some practice sheets too.",
              standard:
                "Reading together in English every night would really help. Even twenty minutes makes a big difference. I can also send home some practice worksheets.",
              formal:
                "Engaging in joint reading activities in English each evening would be highly beneficial. Even a brief twenty-minute session can yield significant improvements. Furthermore, I would be pleased to provide supplementary practice worksheets for use at home.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Try reading with her in English before bed — even a little bit each day adds up. I will also put together some worksheets she can practice with.",
                textZh: "试着在睡前和她一起读英语——每天一点点积累起来很厉害。我也会准备一些练习册给她练。",
                actionHint: "记下家庭辅导建议",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "conference-intermediate",
        titleZh: "讨论学习计划",
        titleEn: "Discussing an Academic Plan",
        description: "与老师讨论孩子的学术目标和个性化学习计划",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "I noticed Wei's report card shows she is struggling with math. Can we talk about what is going on?",
            textZh: "我注意到 Wei 的成绩单显示她数学有困难。我们可以谈谈是什么情况吗？",
            casualVersion: "Her report card has math pretty low. What is happening there?",
            formalityVariants: {
              casual: "Hey, I saw Wei's struggling a bit with math on her transcript. Can we chat about it?",
              standard:
                "I noticed Wei's transcript shows she's having some difficulty with math. Could we discuss what's going on?",
              formal:
                "Good morning/afternoon. I've reviewed Wei's academic transcript and observed some challenges in her mathematics performance. I'd appreciate the opportunity to discuss this further with you.",
            },
          },
          {
            speaker: "them",
            role: "老师",
            textEn:
              "Sure. She understands the concepts well, but the word problems are challenging because of the language. She often knows how to solve it but gets tripped up by the English phrasing.",
            textZh:
              "当然。她对概念理解得很好，但应用题因为语言的关系比较有挑战。她经常知道怎么解题，但被英语措辞绊住了。",
            casualVersion: "Yeah. She gets the concepts, but the word problems are tough 'cause of the English. She usually knows how to solve 'em, but the phrasing trips her up.",
            commonMistake: {
              wrong: "She often knows how to solve it but is blocked by the English phrasing.",
              correct: "She often knows how to solve it but gets tripped up by the English phrasing.",
              explanation: "\"Get tripped up by\" 表达因小细节而受阻，比 \"blocked\" 更自然。",
            },
            formalityVariants: {
              casual: "Yeah, she totally gets the concepts, but those word problems are hard 'cause of the English. She usually knows how to solve them, but the way it's worded throws her off.",
              standard: "Sure. She understands the concepts well, but the word problems are challenging because of the language. She often knows how to solve it but gets tripped up by the English phrasing.",
              formal: "Certainly. While her conceptual understanding is strong, the language barrier presents a significant challenge in solving word problems. She frequently comprehends the mathematical solution but encounters difficulty with the English articulation of the problem.",
            },
            keyPhrases: [
              { en: "word problems", zh: "应用题" },
              { en: "gets tripped up", zh: "被绊住/被困住" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yes, let me explain. Mathematically she is solid. The issue is the word problems — she struggles with the English wording, not the actual math.",
                textZh: "好的，我解释一下。数学方面她很扎实。问题在于应用题——她困难的是英语表述，不是数学本身。",
                actionHint: "理解问题根源是语言而非数学",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That makes sense. Would it help if she had extra time on tests?",
            textZh: "这说得通。如果考试给她额外时间会有帮助吗？",
            commonMistake: {
              wrong: "This is reasonable. If she had extra time on tests, would it help?",
              correct: "That makes sense. Would it help if she had extra time on tests?",
              explanation: "\"That makes sense\" 更地道自然，问句顺序也更流畅。",
            },
            formalityVariants: {
              casual: "Makes sense. Would a bit more time on tests help her out?",
              standard: "That makes sense. Would it help if she had extra time on tests?",
              formal: "I understand. Do you believe that providing additional time for her assessments would be beneficial?",
            },
            casualVersion: "Yeah, that figures. Can she get extra time on tests or something?",
          },
          {
            speaker: "them",
            role: "老师",
            textEn:
              "Absolutely. As an ESL student, she is eligible for accommodations, including extended test time and a bilingual dictionary. I can set that up for her.",
            textZh: "当然可以。作为ESL学生，她有资格获得调整措施，包括延长考试时间和使用双语词典。我可以为她安排。",
            casualVersion: "Totally. Since she's an ESL student, she qualifies for stuff like more test time and a bilingual dictionary. I can get that arranged for her.",
            commonMistake: {
              wrong: "Absolutely. As an ESL student, she has the right to get special conditions, including extended test time and a bilingual dictionary.",
              correct: "Absolutely. As an ESL student, she is eligible for accommodations, including extended test time and a bilingual dictionary.",
              explanation: "\"Eligible for accommodations\" 是正式且准确的学术用语。",
            },
            formalityVariants: {
              casual: "Oh yeah, definitely. Being an ESL student means she can get things like extra test time and a bilingual dictionary. I'll totally get that arranged for her.",
              standard: "Absolutely. As an ESL student, she is eligible for accommodations, including extended test time and a bilingual dictionary. I can set that up for her.",
              formal: "Yes, certainly. As an English as a Second Language student, she qualifies for specific academic accommodations, which include extended time for assessments and the use of a bilingual dictionary. I will ensure these arrangements are promptly implemented.",
            },
            keyPhrases: [
              { en: "accommodations", zh: "调整措施/特殊安排" },
              { en: "extended test time", zh: "延长考试时间" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yes, for sure. ESL students get accommodations like extra time and a dictionary during tests. I will make sure she is set up for those.",
                textZh: "是的，没问题。ESL学生可以享受额外时间和考试时使用词典等安排。我会确保给她安排好。",
                actionHint: "了解ESL学生的权益",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much. Should we schedule a follow-up meeting in a month to check on her progress?",
            textZh: "非常感谢。我们是否应该在一个月后安排一次跟进会议来检查她的进展？",
            commonMistake: {
              wrong: "Thank you so much. Should we schedule a next meeting in a month to check her progress?",
              correct: "Thank you so much. Should we schedule a follow-up meeting in a month to check on her progress?",
              explanation: "\"Follow-up meeting\" 比 \"next meeting\" 更准确地表达后续会议，\"check on\" 更自然。",
            },
            formalityVariants: {
              casual: "Thanks a lot! Wanna set up another chat in a month to see how she's doing?",
              standard: "Thank you so much. Should we schedule a follow-up meeting in a month to check on her progress?",
              formal: "I'm very grateful. Would it be appropriate to arrange a follow-up consultation in approximately one month's time to review her advancement?",
            },
            casualVersion: "Thanks a lot. Should we meet again in a month to see how it goes?",
          },
          {
            speaker: "them",
            role: "老师",
            textEn:
              "That is a great idea. I will also email you weekly updates on how she is doing. Don't hesitate to reach out anytime if you have questions.",
            textZh: "这是个好主意。我也会每周给您发邮件更新她的情况。如果有任何问题，随时联系我。",
            casualVersion: "Great idea! I'll also just shoot you weekly emails on how she's doing. Don't even hesitate to hit me up if you got questions.",
            commonMistake: {
              wrong: "That is a great idea. I will also email you weekly updates on how she is doing. Don't be shy to contact me if you have any questions.",
              correct: "That is a great idea. I will also email you weekly updates on how she is doing. Don't hesitate to reach out if you have any questions.",
              explanation: "\"Don't hesitate to reach out\" 是地道且专业的表达，比 \"don't be shy\" 更得体。",
            },
            formalityVariants: {
              casual: "Good call! And I'll send you a quick email every week with updates on her. Just hit me up if anything comes up.",
              standard: "That is a great idea. I will also email you weekly updates on how she is doing. Don't hesitate to reach out if you have any questions.",
              formal: "That is an excellent suggestion. Furthermore, I will provide you with weekly email updates regarding her progress. Please do not hesitate to contact me should any queries arise.",
            },
            keyPhrases: [
              { en: "weekly updates", zh: "每周更新" },
              { en: "don't hesitate to reach out", zh: "不要犹豫随时联系" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Love that plan. I will keep you posted each week by email. And seriously, reach out anytime — my door is always open.",
                textZh: "我喜欢这个计划。我会每周通过邮件跟您通报。说真的，随时联系——我随时欢迎。",
                actionHint: "记下沟通方式",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 参观幼儿园 ====================
  {
    id: "education-daycare-visit",
    category: "education",
    titleZh: "参观幼儿园",
    titleEn: "Daycare Visit",
    description: "参观幼儿园了解环境和课程安排",
    otherRole: "园长",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "daycare-visit-basic",
        titleZh: "首次参观了解",
        titleEn: "First Visit Tour",
        description: "第一次到幼儿园参观，了解基本情况",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I called earlier about visiting the daycare. I have a three-year-old daughter.",
            textZh: "你好，我之前打电话说要来参观幼儿园。我有一个三岁的女儿。",
            casualVersion: "Hey, I called earlier about checking out the daycare for my three-year-old.",
            formalityVariants: {
              casual: "Hey, I called earlier about checking out the daycare. Got a three-year-old daughter.",
              standard: "Hi, I called earlier about visiting the daycare. I have a three-year-old daughter.",
              formal:
                "Good morning, I'm here regarding my earlier call about visiting the daycare. I have a three-year-old daughter.",
            },
          },
          {
            speaker: "them",
            role: "园长",
            textEn:
              "Yes, welcome! Let me show you around. We have two classrooms for the three-to-four age group, each with a maximum of twelve children and two teachers.",
            textZh: "是的，欢迎！让我带您参观一下。我们有两间三到四岁年龄组的教室，每间最多十二个孩子和两位老师。",
            keyPhrases: [
              { en: "show you around", zh: "带你参观" },
              { en: "age group", zh: "年龄组" },
            ],
            casualVersion:
              "Yeah, welcome! Come on, I'll show ya around. We got two classrooms for the three-to-four year olds, like, max twelve kids and two teachers each.",
            formalityVariants: {
              casual:
                "Yeah, welcome! Come on, I'll show ya around. Got two rooms for the 3-4s, max twelve kids, two teachers per room.",
              standard:
                "Yes, welcome! Let me show you around. We have two classrooms for the three-to-four age group, each with a maximum of twelve children and two teachers.",
              formal:
                "Welcome. I would be pleased to provide you with a tour of our facility. We operate two classrooms specifically for the three-to-four age cohort, maintaining a maximum ratio of twelve children to two educators in each.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Of course, come on in! I will give you the full tour. For three-year-olds, we keep classes small — twelve kids max with two teachers per room.",
                textZh:
                  "当然，请进！我带你全面参观一下。对于三岁的孩子，我们保持小班制——每班最多十二个孩子配两位老师。",
                actionHint: "关注师生比例",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds like a great ratio. What does a typical day look like for the children?",
            textZh: "这个比例听起来很好。孩子们一天的日程是什么样的？",
            casualVersion: "Nice ratio. So what do the kids do all day?",
            commonMistake: {
              wrong: "What is children's daily schedule?",
              correct: "What does a typical day look like for the children?",
              explanation: '直接询问"日程表"不如用 "look like" 更自然生动地询问日常活动。',
            },
            formalityVariants: {
              casual: "Sounds like a good ratio. So, what's a typical day like for the kids?",
              standard: "That sounds like a great ratio. What does a typical day look like for the children?",
              formal:
                "That indeed appears to be an excellent ratio. Could you please elaborate on the structure of a typical day for the children?",
            },
          },
          {
            speaker: "them",
            role: "园长",
            textEn:
              "We start with free play, then circle time with songs and stories. After snack, we do structured activities like art and sensory play. Then outdoor time, lunch, nap, and more play in the afternoon.",
            textZh:
              "我们从自由游戏开始，然后是唱歌和讲故事的圆圈时间。吃完点心后，我们做手工和感官游戏等有组织的活动。然后是户外时间、午餐、午睡，下午继续玩。",
            keyPhrases: [
              { en: "circle time", zh: "圆圈时间（集体活动时间）" },
              { en: "sensory play", zh: "感官游戏" },
            ],
            culturalNote:
              "Circle time is a common practice in American preschools where children sit together for group activities like singing and storytelling.",
            casualVersion:
              "We kick off with free play, then circle time, y'know, songs and stories. After snack, we do stuff like art and sensory play. Then outdoor time, lunch, nap, and then just more play in the afternoon.",
            formalityVariants: {
              casual:
                "Kick off with free play, then circle time (songs/stories). After snack, it's structured activities like art and sensory stuff. Then outside, lunch, nap, and more play in the afternoon.",
              standard:
                "We start with free play, then circle time with songs and stories. After snack, we do structured activities like art and sensory play. Then outdoor time, lunch, nap, and more play in the afternoon.",
              formal:
                "Our daily program commences with a period of unstructured free play, followed by a dedicated circle time for communal songs and storytelling. Subsequent to a nutritional snack, we engage in structured educational activities, encompassing creative arts and sensory exploration. The schedule then transitions to outdoor recreation, lunch, a supervised rest period, and further recreational play in the afternoon.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "The day starts with free play, then we gather for circle time. After that it is snack, art projects, outdoor play, lunch, nap, and then afternoon activities.",
                textZh:
                  "一天从自由游戏开始，然后集合做圆圈时间。之后是点心、美术项目、户外活动、午餐、午睡，然后是下午活动。",
                actionHint: "了解日程安排",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "My daughter only speaks Chinese right now. Will that be a problem?",
            textZh: "我女儿现在只会说中文。这会是个问题吗？",
            casualVersion: "She only speaks Chinese right now. Is that gonna be an issue?",
            commonMistake: {
              wrong: "My daughter only speaks Chinese now. Is it a problem?",
              correct: "My daughter only speaks Chinese right now. Will that be a problem?",
              explanation: '"Will that be a problem?" 是更自然的询问方式，"Is it a problem?" 听起来较直接生硬。',
            },
            formalityVariants: {
              casual: "My daughter only speaks Chinese for now. Is that an issue?",
              standard: "My daughter only speaks Chinese right now. Will that be a problem?",
              formal:
                "Currently, my daughter's primary language is Chinese. Do you foresee any potential difficulties with this circumstance?",
            },
          },
          {
            speaker: "them",
            role: "园长",
            textEn:
              "Not at all! We have had many multilingual children. Kids pick up language incredibly fast at this age. We use lots of visual cues and gestures, and she will be speaking English in no time.",
            textZh:
              "完全不会！我们有过很多多语言的孩子。孩子在这个年龄学语言非常快。我们用大量的视觉提示和手势，她很快就会说英语的。",
            keyPhrases: [
              { en: "pick up language", zh: "学会语言" },
              { en: "visual cues", zh: "视觉提示" },
            ],
            casualVersion:
              "Nah, not a problem! We've had tons of kids who speak other languages. Little ones pick up stuff super fast at this age. We use lots of visuals and hand gestures, so she'll be speaking English in no time.",
            formalityVariants: {
              casual:
                "No way! We've had tons of multi-lingual kids. They pick up language super fast at this age. We use lots of visuals and gestures, she'll be speaking English in no time.",
              standard:
                "Not at all! We have had many multilingual children. Kids pick up language incredibly fast at this age. We use lots of visual cues and gestures, and she will be speaking English in no time.",
              formal:
                "Absolutely not. We frequently accommodate multilingual children. It has been observed that children of this age acquire new languages with remarkable rapidity. We employ extensive visual cues and gestural communication, ensuring she will achieve English proficiency expeditiously.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Don't worry about that at all. Kids this age are like sponges — they absorb everything. We use pictures, gestures, and lots of repetition. She will adjust faster than you think.",
                textZh:
                  "完全不用担心。这个年龄的孩子就像海绵一样——什么都能吸收。我们用图片、手势和大量的重复。她会比你想的适应得更快。",
                actionHint: "对孩子的语言适应放心",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "daycare-visit-intermediate",
        titleZh: "费用和入园细节",
        titleEn: "Costs and Enrollment Details",
        description: "详细了解费用、政策和入园流程",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Can you tell me about the tuition and what is included? Are meals provided?",
            textZh: "能告诉我学费和包含哪些内容吗？提供餐食吗？",
            casualVersion: "What does it cost, and does that cover meals?",
            commonMistake: {
              wrong: "What included?",
              correct: "What's included?",
              explanation: "中式英语常省略'is'或'does'，表达不完整。",
            },
            formalityVariants: {
              casual: "So, what's tuition like, and what all comes with it? Do kids get fed?",
              standard: "Can you tell me about the tuition and what is included? Are meals provided?",
              formal:
                "Could you please elaborate on the tuition structure and the services or provisions encompassed within the fees? Specifically, are meals part of the comprehensive offering?",
            },
          },
          {
            speaker: "them",
            role: "园长",
            textEn:
              "Full-time tuition is fifteen hundred per month. That includes two snacks and lunch daily. We serve fresh, nut-free meals prepared on-site.",
            textZh: "全日制学费每月一千五百美元。包含每天两次点心和午餐。我们提供现场制作的新鲜无坚果餐食。",
            casualVersion: "Full-time's fifteen hundred a month. That covers two snacks and lunch every day. We make fresh, nut-free meals right here.",
            formalityVariants: {
              casual: "Full-time's fifteen hundred a month. You get two snacks and lunch daily. We make fresh, nut-free food right here.",
              standard: "Full-time tuition is fifteen hundred per month. That includes two snacks and lunch daily. We serve fresh, nut-free meals prepared on-site.",
              formal: "The full-time tuition is USD 1,500 per month. This comprehensive fee encompasses two snacks and lunch provided on a daily basis. We are committed to offering freshly prepared, nut-free meals, all prepared within our facility.",
            },
            keyPhrases: [
              { en: "full-time tuition", zh: "全日制学费" },
              { en: "nut-free", zh: "无坚果的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It is fifteen hundred a month for full time. Meals are included — two snacks plus lunch, all made fresh in our kitchen. Everything is nut-free for safety.",
                textZh:
                  "全日制每月一千五百。餐食包含在内——两次点心加午餐，都在我们厨房现做。为了安全一切都是无坚果的。",
                actionHint: "了解费用构成",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a waitlist, or can she start right away? We just moved here last month.",
            textZh: "有等待名单吗，还是她可以马上开始？我们上个月刚搬到这里。",
            commonMistake: {
              wrong: "Can she right away start?",
              correct: "Can she start right away?",
              explanation: "状语'right away'通常放在动词之后。",
            },
            formalityVariants: {
              casual: "Got a waitlist, or can she just start? We literally just moved here last month.",
              standard: "Is there a waitlist, or can she start right away? We just moved here last month.",
              formal: "I was wondering if there is a waiting list, or if immediate enrollment is a possibility for her? We only recently relocated to this area last month.",
            },
            casualVersion: "Is there a wait, or can she start soon? We just got here.",
          },
          {
            speaker: "them",
            role: "园长",
            textEn:
              "We actually have two spots open in the three-year-old class right now. If you decide to enroll, she could start as early as next Monday after we complete the paperwork.",
            textZh: "我们三岁班目前实际上有两个空位。如果您决定报名，完成手续后她最早下周一就可以开始。",
            casualVersion: "Actually, we've got two spots in the three-year-old class open right now. If you wanna enroll, she could start next Monday, soon as we finish the paperwork.",
            formalityVariants: {
              casual: "Good news, we've actually got two openings in the three-year-old group. If you sign her up, she could start next Monday once we get the paperwork done.",
              standard: "We actually have two spots open in the three-year-old class right now. If you decide to enroll, she could start as early as next Monday after we complete the paperwork.",
              formal: "I'm pleased to inform you that we currently have two vacancies in our three-year-old program. Should you elect to proceed with enrollment, she would be eligible to commence attendance as early as next Monday, subsequent to the completion of the necessary administrative documentation.",
            },
            keyPhrases: [
              { en: "spots open", zh: "空位" },
              { en: "complete the paperwork", zh: "完成手续/文件" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Good timing — we have openings right now in that age group. Once the forms are filled out, she can start next week.",
                textZh: "来得正好——那个年龄组目前有空位。表格填完后她下周就可以开始。",
                actionHint: "确认入园时间",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That is great news! What paperwork do I need to prepare?",
            textZh: "太好了！我需要准备什么文件？",
            commonMistake: {
              wrong: "What paperwork I need prepare?",
              correct: "What paperwork do I need to prepare?",
              explanation: "询问句中助动词'do'和不定式'to'常被漏掉。",
            },
            formalityVariants: {
              casual: "Awesome! What paperwork do I gotta get ready?",
              standard: "That is great news! What paperwork do I need to prepare?",
              formal: "That is indeed excellent news! Could you please advise me on the specific documentation I should prepare?",
            },
            casualVersion: "Awesome! What forms do I need?",
          },
          {
            speaker: "them",
            role: "园长",
            textEn:
              "You will need her immunization records, a health checkup form signed by her pediatrician, and emergency contact information. I will give you the enrollment packet to take home today.",
            textZh:
              "您需要她的免疫记录、儿科医生签字的健康检查表，以及紧急联系人信息。我今天给您一份入园资料包带回家。",
            casualVersion: "You'll need her shot records, a signed health form from her pediatrician, and emergency contacts. I'll give you the enrollment stuff to take home today.",
            formalityVariants: {
              casual: "You'll need her shot records, a health form from her pediatrician, and emergency contacts. I'll give you the enrollment packet to take home today.",
              standard: "You will need her immunization records, a health checkup form signed by her pediatrician, and emergency contact information. I will give you the enrollment packet to take home today.",
              formal: "You will require her comprehensive immunization records, a health checkup form duly signed by her pediatrician, and complete emergency contact information. I shall provide you with the full enrollment packet to review at your convenience today.",
            },
            keyPhrases: [
              { en: "health checkup form", zh: "健康检查表" },
              { en: "enrollment packet", zh: "入园资料包" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Just bring her shot records, a doctor's note from her last checkup, and fill out the emergency contact forms. Here is the packet — everything you need is in there.",
                textZh:
                  "带上她的疫苗记录、上次体检的医生证明，然后填好紧急联系人表格。这是资料包——所有需要的都在里面。",
                actionHint: "记下需要的文件清单",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 幼儿园接送 ====================
  {
    id: "education-daycare-daily",
    category: "education",
    titleZh: "幼儿园接送",
    titleEn: "Daycare Drop-off and Pick-up",
    description: "每天接送孩子时与老师的日常交流",
    otherRole: "老师",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "daycare-dropoff-basic",
        titleZh: "早上送孩子",
        titleEn: "Morning Drop-off",
        description: "早上送孩子到幼儿园的日常对话",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Good morning! She had a little trouble sleeping last night, so she might be cranky today.",
            textZh: "早上好！她昨晚有点睡不好，所以今天可能会有点闹脾气。",
            casualVersion: "Morning! She didn't sleep well, so she might be a bit grumpy today.",
            commonMistake: {
              wrong: "She slept not good last night.",
              correct: "She had a little trouble sleeping last night.",
              explanation: "英文表达睡不好觉的常见方式，而非直接翻译“睡得不好”。",
            },
            formalityVariants: {
              casual: "Morning! She didn't sleep great last night, so she might be a bit cranky today.",
              standard: "Good morning! She had a little trouble sleeping last night, so she might be cranky today.",
              formal:
                "Good morning. I wanted to let you know that she experienced some difficulty sleeping last night, and as such, she may be a bit irritable today.",
            },
          },
          {
            speaker: "them",
            role: "老师",
            textEn:
              "Thanks for letting me know. We will keep an eye on her and make sure she gets some quiet time if she needs it.",
            textZh: "谢谢您告诉我。我们会关注她，如果需要的话确保她有一些安静时间。",
            keyPhrases: [
              { en: "keep an eye on", zh: "关注/留意" },
              { en: "quiet time", zh: "安静时间" },
            ],
            casualVersion:
              "Thanks for the heads-up. We'll keep an eye on her and make sure she gets quiet time if she needs it.",
            formalityVariants: {
              casual:
                "Thanks for the heads-up. We'll keep an eye on her and make sure she gets some quiet time if she needs it.",
              standard:
                "Thanks for letting me know. We will keep an eye on her and make sure she gets some quiet time if she needs it.",
              formal:
                "Thank you for informing us. We will certainly monitor her closely and ensure she receives adequate quiet time should the need arise.",
            },
            alternativeExpressions: [
              {
                textEn: "Got it, no worries. We will watch her closely and let her rest if she gets tired. It happens!",
                textZh: "知道了，不用担心。我们会密切关注她，如果她累了就让她休息。这很正常！",
                actionHint: "放心交给老师",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Also, she had breakfast already, but she did not eat much. She might be hungry during snack time.",
            textZh: "另外，她已经吃过早餐了，但吃得不多。吃点心的时候她可能会饿。",
            casualVersion: "She ate breakfast but barely touched it, so she might want extra at snack time.",
            commonMistake: {
              wrong: "She didn't eat many.",
              correct: "She did not eat much.",
              explanation: "“much”用于不可数名词，“many”用于可数名词。",
            },
            formalityVariants: {
              casual: "Oh, also, she already had breakfast but didn't eat much, so she might be hungry for snack.",
              standard:
                "Also, she had breakfast already, but she did not eat much. She might be hungry during snack time.",
              formal:
                "Furthermore, she has already had her breakfast, but her consumption was rather light. Consequently, she may experience hunger during the designated snack period.",
            },
          },
          {
            speaker: "them",
            role: "老师",
            textEn:
              "No problem. We will make sure she gets enough to eat. Is there anything she is not allowed to have? Any allergies we should know about?",
            textZh: "没问题。我们会确保她吃够。有什么她不能吃的吗？有我们应该知道的过敏吗？",
            keyPhrases: [
              { en: "allergies", zh: "过敏" },
              { en: "not allowed to have", zh: "不被允许吃/用" },
            ],
            casualVersion:
              "No problem. We'll make sure she gets enough to eat. Anything she can't have, or any allergies we should know?",
            formalityVariants: {
              casual:
                "No worries. We'll make sure she eats enough. Anything she can't have, or any allergies we should know?",
              standard:
                "No problem. We will make sure she gets enough to eat. Is there anything she is not allowed to have? Any allergies we should know about?",
              formal:
                "That is perfectly fine. We will ensure she receives adequate nourishment. Are there any dietary restrictions or allergies of which we should be aware?",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Sure thing, we will give her plenty. Just to double-check — any food allergies or things she can't eat?",
                textZh: "没问题，我们会给她足够的。再确认一下——有什么食物过敏或不能吃的东西吗？",
                actionHint: "告知过敏信息",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "No allergies, thankfully. But she does not like milk very much. Water or juice is fine.",
            textZh: "没有过敏，谢天谢地。但她不太喜欢牛奶。喝水或果汁就好。",
            casualVersion: "No allergies. She is just not big on milk — water or juice is fine.",
            commonMistake: {
              wrong: "She is not like milk.",
              correct: "She does not like milk.",
              explanation: "否定句中使用助动词“do/does”，而非直接用“is not”。",
            },
            formalityVariants: {
              casual: "No allergies, thank goodness. But she's not big on milk. Water or juice is totally fine.",
              standard: "No allergies, thankfully. But she does not like milk very much. Water or juice is fine.",
              formal:
                "Fortunately, there are no known allergies. However, she has a strong aversion to milk. Water or juice would be perfectly acceptable alternatives.",
            },
          },
          {
            speaker: "them",
            role: "老师",
            textEn:
              "Noted! Don't worry, she will have a great day. We are painting today, and she always loves that. See you at pick-up!",
            textZh: "记下了！别担心，她会过得很开心的。今天我们画画，她一直很喜欢。接她时见！",
            keyPhrases: [
              { en: "noted", zh: "记下了" },
              { en: "see you at pick-up", zh: "接孩子时见" },
            ],
            casualVersion:
              "Got it! Don't worry, she'll have fun. We're painting today, she always loves that. See ya at pick-up!",
            formalityVariants: {
              casual:
                "Got it! Don't worry, she'll have fun. We're painting today, she always loves that. See ya at pick-up!",
              standard:
                "Noted! Don't worry, she'll have a great time. We're painting today, which she always loves. See you at pick-up!",
              formal:
                "Understood. Please rest assured, she will have a very enjoyable day. Our activity for today is painting, an activity she consistently finds engaging. We look forward to seeing you at pick-up.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Got it! She is going to have a blast — we are doing art projects today and she loves those. See you this afternoon!",
                textZh: "知道了！她会玩得很开心的——今天做美术项目，她很喜欢。下午见！",
                actionHint: "放心离开",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "daycare-pickup-intermediate",
        titleZh: "下午接孩子",
        titleEn: "Afternoon Pick-up",
        description: "下午接孩子时了解当天情况",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi! How was she today? I hope she was not too fussy after the bad night.",
            textZh: "你好！她今天怎么样？希望昨晚睡不好没让她太闹。",
            casualVersion: "Hey! How did she do? Was she okay after last night?",
            formalityVariants: {
              casual: "Hey, how was she today? Hope she wasn't too fussy after that bad night.",
              standard: "Hi! How was she today? I hope she was not too fussy after the bad night.",
              formal:
                "Good afternoon. Could you please provide an update on her day? I trust she wasn't overly agitated following the challenging night she experienced.",
            },
          },
          {
            speaker: "them",
            role: "老师",
            textEn:
              "She was actually wonderful! She perked up right after morning circle time. She made a painting she is really proud of — she has been carrying it around all day.",
            textZh: "她实际上表现很棒！早上圆圈时间后就精神了。她画了一幅她非常自豪的画——一整天都带在身边。",
            casualVersion: "She was actually awesome! Perked right up after morning circle time. Made a painting she's super proud of — been carrying it around all day.",
            formalityVariants: {
              casual: "She was actually awesome! Perked right up after morning circle time. Made a painting she's super proud of — been carrying it around all day.",
              standard: "She was actually wonderful! She perked up right after morning circle time. She made a painting she is really proud of — she has been carrying it around all day.",
              formal: "Indeed, she had a truly remarkable day. Her disposition improved significantly following morning circle time. She completed a painting of which she is quite proud, and she has been accompanying it throughout the entire day.",
            },
            keyPhrases: [
              { en: "perked up", zh: "精神起来/活跃起来" },
              { en: "proud of", zh: "自豪/骄傲" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Oh, she bounced right back! After circle time she was her usual happy self. She painted something amazing today — would not let go of it!",
                textZh: "哦，她很快就恢复了！圆圈时间后就恢复了平时开心的样子。她今天画了很棒的东西——一直不肯放手！",
                actionHint: "为孩子高兴",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh, that is so sweet! Did she eat well today? I was worried since she skipped breakfast.",
            textZh: "哦，太可爱了！她今天吃得好吗？我担心她因为没吃早餐。",
            commonMistake: {
              wrong: "Did she eat good today?",
              correct: "Did she eat well today?",
              explanation: "“Good” 是形容词，通常修饰名词；“well” 是副词，修饰动词 “eat”。",
            },
            formalityVariants: {
              casual: "Aw, that's so sweet! She eat well today? Was worried since she skipped breakfast.",
              standard: "Oh, that is so sweet! Did she eat well today? I was worried since she skipped breakfast.",
              formal: "That is truly delightful to hear. Regarding her meals, did she consume her food adequately today? I had some concerns given her omission of breakfast.",
            },
            casualVersion: "Aww! Did she eat okay? I was a bit worried.",
          },
          {
            speaker: "them",
            role: "老师",
            textEn:
              "She ate all her snack and most of her lunch. She tried the carrots today for the first time and actually liked them! That was a big win.",
            textZh: "她把点心全吃了，午餐也吃了大部分。她今天第一次尝试了胡萝卜，而且居然喜欢！那是个大胜利。",
            casualVersion: "Ate all her snack and most of her lunch. Tried the carrots today for the first time and actually liked 'em! That was a big win.",
            formalityVariants: {
              casual: "Ate all her snack and most of her lunch. Tried the carrots today for the first time and actually liked 'em! That was a big win.",
              standard: "She ate all her snack and most of her lunch. She tried the carrots today for the first time and actually liked them! That was a big win.",
              formal: "She consumed her entire snack and the majority of her lunch. Notably, she sampled carrots today for the initial time and genuinely found them palatable. This represented a significant achievement.",
            },
            keyPhrases: [
              { en: "a big win", zh: "一大进步/很了不起" },
              { en: "for the first time", zh: "第一次" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "She ate really well! Finished her snacks and most of lunch. And guess what — she tried carrots and loved them! We were so excited.",
                textZh: "她吃得很好！吃完了点心和大部分午餐。而且你猜怎么着——她尝了胡萝卜还很喜欢！我们都很兴奋。",
                actionHint: "分享进步的喜悦",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Wow, she will not touch carrots at home! You must have some magic. Same time tomorrow?",
            textZh: "哇，她在家碰都不碰胡萝卜！你们一定有魔法。明天同一时间？",
            commonMistake: {
              wrong: "You have magic.",
              correct: "You must have some magic.",
              explanation: "表达“有魔法”时，加上“must have”或“have got”更自然，用“some”更地道。",
            },
            formalityVariants: {
              casual: "Whoa, she won't touch carrots at home! You guys got some magic. Same time tomorrow?",
              standard: "Wow, she will not touch carrots at home! You must have some magic. Same time tomorrow?",
              formal: "Indeed, she categorically refuses to consume carrots in our household! Your approach must incorporate some exceptional methods. Shall we maintain the same schedule for tomorrow's pick-up?",
            },
            casualVersion: "No way, she won't eat carrots at home! You guys are miracle workers. See you tomorrow?",
          },
          {
            speaker: "them",
            role: "老师",
            textEn:
              "Ha, peer pressure works wonders! Yes, same time tomorrow. Oh, and just a reminder — picture day is this Friday, so dress her up!",
            textZh: "哈，同伴影响很神奇！对，明天同一时间。哦，提醒一下——这周五是拍照日，给她穿漂亮点！",
            casualVersion: "Haha, peer pressure totally works! Yeah, same time tomorrow. Oh, and just a heads up — picture day's this Friday, so dress her up!",
            commonMistake: {
              wrong: "Picture day is this Friday, please dress her up!",
              correct: "Picture day is this Friday, so dress her up!",
              explanation: "“So” 表示因果关系，更自然地引导建议。直译“please dress her up”稍显生硬。",
            },
            formalityVariants: {
              casual: "Haha, peer pressure totally works! Yeah, same time tomorrow. Oh, and just a heads up — picture day's this Friday, so dress her up!",
              standard: "Ha, peer pressure works wonders! Yes, same time tomorrow. Oh, and just a reminder — picture day is this Friday, so dress her up!",
              formal: "Indeed, the influence of her peers appears to be quite effective. Yes, we shall adhere to the same schedule tomorrow. I would also like to remind you that Friday is designated as picture day, so kindly ensure she is appropriately attired.",
            },
            keyPhrases: [
              { en: "peer pressure", zh: "同伴影响/从众效应" },
              { en: "picture day", zh: "拍照日" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Kids copy each other — it is magic! See you tomorrow. Oh, heads up — Friday is photo day, so put her in something cute!",
                textZh: "孩子们互相模仿——很神奇！明天见。对了提醒一下——周五拍照日，给她穿可爱点！",
                actionHint: "记住周五拍照日",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== ESL课程 ====================
  {
    id: "education-esl-class",
    category: "education",
    titleZh: "ESL课程",
    titleEn: "ESL Class Registration",
    description: "咨询和报名成人ESL英语课程",
    otherRole: "教务",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "esl-inquiry-basic",
        titleZh: "咨询ESL课程",
        titleEn: "Inquiring About ESL Classes",
        description: "到社区学校咨询ESL课程信息",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hello, I am interested in taking ESL classes. Can you tell me what is available?",
            textZh: "你好，我想上ESL课程。能告诉我有哪些课可以选吗？",
            casualVersion: "Hi, I want to take some English classes. What do you have?",
            commonMistake: {
              wrong: "I want to take ESL classes.",
              correct: "I am interested in taking ESL classes.",
              explanation: "“I want to” 听起来更直接，可能不够礼貌；“I am interested in” 则表达意向，更委婉客气。",
            },
            formalityVariants: {
              casual: "Hey, I wanna take ESL. What's available?",
              standard: "Hello, I am interested in taking ESL classes. Can you tell me what is available?",
              formal:
                "Good morning/afternoon. I'm inquiring about your ESL program. Could you please provide me with information regarding course availability?",
            },
          },
          {
            speaker: "them",
            role: "教务",
            textEn:
              "Sure! We offer ESL classes at three levels: beginner, intermediate, and advanced. Classes meet twice a week in the evenings, from six to eight thirty.",
            textZh: "当然！我们提供三个级别的ESL课程：初级、中级和高级。课程每周两次，晚上六点到八点半。",
            keyPhrases: [
              { en: "three levels", zh: "三个级别" },
              { en: "meet twice a week", zh: "每周上两次课" },
            ],
            casualVersion:
              "Yeah, we got three levels: beginner, intermediate, advanced. Classes are twice a week, evenings, six to eight thirty.",
            formalityVariants: {
              casual:
                "Yep! Three levels: beginner, intermediate, advanced. Classes are twice a week, evenings, 6 to 8:30.",
              standard:
                "Sure! We offer ESL classes at three levels: beginner, intermediate, and advanced. Classes meet twice a week in the evenings, from six to eight thirty.",
              formal:
                "Certainly. Our ESL program features three distinct proficiency levels: beginner, intermediate, and advanced. All classes are conducted semi-weekly in the evenings, from 6:00 PM to 8:30 PM.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Of course! We have beginner, intermediate, and advanced ESL. They run Tuesday and Thursday evenings, six to eight thirty. Does that work with your schedule?",
                textZh: "当然有！我们有初级、中级和高级ESL。每周二和周四晚上六点到八点半。时间合适吗？",
                actionHint: "确认时间是否合适",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Evening classes would be perfect for me. How much does it cost?",
            textZh: "晚上的课对我来说很合适。费用是多少？",
            casualVersion: "Evenings work great. How much is it?",
            commonMistake: {
              wrong: "How much money?",
              correct: "How much does it cost?",
              explanation:
                "询问价格常用 “How much does it cost?” 或 “What's the cost?”，直接问 “How much money?” 不自然。",
            },
            formalityVariants: {
              casual: "Evening classes work for me. What's the cost?",
              standard: "Evening classes would be perfect for me. How much does it cost?",
              formal:
                "Evening classes would be highly suitable for my schedule. Could you please inform me of the associated fees?",
            },
          },
          {
            speaker: "them",
            role: "教务",
            textEn:
              "The program is actually free for community residents. We are funded by the city. You just need to show a valid ID and proof of address.",
            textZh: "这个项目对社区居民其实是免费的。我们由市政府资助。您只需要出示有效证件和地址证明。",
            keyPhrases: [
              { en: "funded by the city", zh: "由市政府资助" },
              { en: "valid ID", zh: "有效证件" },
            ],
            culturalNote:
              "Many communities in the US offer free ESL classes funded by local government or nonprofits. It is worth checking your local library or community center.",
            casualVersion:
              "Actually, it's free for folks in the community. The city funds us. Just gotta show a valid ID and proof of address.",
            formalityVariants: {
              casual:
                "It's actually free for community residents. City funds us. Just need valid ID and proof of address.",
              standard:
                "The program is actually free for community residents. We are funded by the city. You just need to show a valid ID and proof of address.",
              formal:
                "This program is complimentary for registered community residents. Funding is provided by the municipal government. Valid identification and proof of residency are the only prerequisites.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Good news — it is completely free! The city pays for it. All you need is an ID and something that shows your address, like a utility bill.",
                textZh: "好消息——完全免费！市政府出资。你只需要一个身份证件和一个显示地址的东西，比如水电费账单。",
                actionHint: "准备好证件",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That is wonderful! How do I sign up? Is there a placement test?",
            textZh: "太好了！我怎么报名？有分级测试吗？",
            casualVersion: "That is awesome! How do I sign up? Do I need to take a test first?",
            commonMistake: {
              wrong: "How to register?",
              correct: "How do I sign up?",
              explanation: "询问做某事的步骤时，常用 “How do I [verb]?” 而非 “How to [verb]?”。",
            },
            formalityVariants: {
              casual: "Awesome! How do I sign up? Is there a test?",
              standard: "That is wonderful! How do I sign up? Is there a placement test?",
              formal:
                "That is excellent news! Could you please advise on the enrollment procedure? Additionally, is there a mandatory placement examination?",
            },
          },
          {
            speaker: "them",
            role: "教务",
            textEn:
              "Yes, we do a short placement test — just twenty minutes of reading, writing, and a brief conversation. It helps us put you in the right class. Can you come in this Saturday morning?",
            textZh:
              "是的，我们有一个简短的分级测试——只需要二十分钟的阅读、写作和简短对话。这帮助我们把你放到合适的班级。你这周六早上能来吗？",
            keyPhrases: [
              { en: "placement test", zh: "分级测试" },
              { en: "put you in the right class", zh: "把你分到合适的班级" },
            ],
            casualVersion:
              "Yeah, we do a quick placement test – like, twenty minutes: reading, writing, little chat. Helps us get you in the right class. Can you swing by this Saturday morning?",
            formalityVariants: {
              casual:
                "Yep, short placement test — 20 mins of reading, writing, and a quick chat. Helps us put you in the right class. Can you come this Saturday morning?",
              standard:
                "Yes, we do a short placement test — just twenty minutes of reading, writing, and a brief conversation. It helps us put you in the right class. Can you come in this Saturday morning?",
              formal:
                "Yes, we do administer a brief placement assessment, comprising approximately twenty minutes of reading, writing, and a short conversational component. This helps us ensure appropriate class assignment. Would you be available to come in this Saturday morning?",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Yep, there is a quick placement test. Nothing scary — just some reading, a little writing, and we will chat for a few minutes. How about Saturday at ten?",
                textZh: "对，有一个快速分级测试。不用紧张——就是些阅读、写点东西，然后我们聊几分钟。周六十点怎么样？",
                actionHint: "约好测试时间",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "esl-registration-intermediate",
        titleZh: "注册和课程详情",
        titleEn: "Registration and Course Details",
        description: "完成注册并了解课程具体安排",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "I just finished the placement test. The proctor said I should be in the intermediate level. What does that class cover?",
            textZh: "我刚做完分级测试。监考人员说我应该上中级班。那个班教什么内容？",
            casualVersion: "Just did the test. They said intermediate for me. What will we learn in that class?",
            commonMistake: {
              wrong: "What does that class teach?",
              correct: "What does that class cover?",
              explanation: "“cover” 用于指课程内容更自然，而“teach”则通常指老师的行为。",
            },
            formalityVariants: {
              casual: "Just finished the placement test. Proctor said intermediate level. What's that class cover?",
              standard:
                "I just finished the placement test. The proctor said I should be in the intermediate level. What does that class cover?",
              formal:
                "I have just completed the placement test. The proctor informed me that I have been placed in the intermediate level. Could you please outline the curriculum for that particular class?",
            },
          },
          {
            speaker: "them",
            role: "教务",
            textEn:
              "The intermediate class focuses on conversational fluency, reading comprehension, and basic writing skills. You will also work on pronunciation and everyday vocabulary for work and daily life.",
            textZh: "中级班专注于会话流利度、阅读理解和基本写作技能。你还会练习发音和工作及日常生活中的日常词汇。",
            casualVersion: "The intermediate class? It's all about conversational fluency, reading comprehension, and basic writing. Plus, you'll work on pronunciation and everyday vocab for work and life.",
            formalityVariants: {
              casual: "For intermediate, we focus on getting you fluent in speaking, good at reading, and decent at writing. You'll also boost your pronunciation and pick up practical vocabulary for daily life and work.",
              standard: "The intermediate class focuses on conversational fluency, reading comprehension, and basic writing skills. You will also work on pronunciation and everyday vocabulary for work and daily life.",
              formal: "The curriculum for the intermediate class is designed to enhance students' conversational fluency, reading comprehension, and foundational writing skills. Furthermore, instruction will be provided in pronunciation and practical vocabulary relevant to professional and daily contexts.",
            },
            keyPhrases: [
              { en: "conversational fluency", zh: "会话流利度" },
              { en: "reading comprehension", zh: "阅读理解" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Intermediate is great. You will practice speaking and listening a lot, plus some reading and writing. We focus on real-life English — the kind you need for shopping, work, doctor visits, all that stuff.",
                textZh:
                  "中级很好。你会大量练习听说，加上一些读写。我们专注于生活英语——购物、工作、看医生需要用到的那些。",
                actionHint: "了解课程重点",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds perfect. Will there be any textbooks I need to buy?",
            textZh: "听起来很合适。需要买教材吗？",
            commonMistake: {
              wrong: "Need to buy textbook?",
              correct: "Will there be any textbooks I need to buy?",
              explanation: "英语疑问句中“will there be”是常用结构；“any”表示“任何”，常用于疑问句和否定句。",
            },
            formalityVariants: {
              casual: "Sounds good. Gotta buy any textbooks?",
              standard: "That sounds perfect. Will there be any textbooks I need to buy?",
              formal: "That sounds entirely suitable. May I inquire if there are any required textbooks that I would need to purchase?",
            },
            casualVersion: "Sounds good. Do I need to buy any books?",
          },
          {
            speaker: "them",
            role: "教务",
            textEn:
              "No, all materials are provided free of charge. We will give you a workbook on your first day. Just bring a notebook and something to write with.",
            textZh: "不需要，所有材料都是免费提供的。第一天上课我们会给你一本练习册。只需要带个笔记本和笔就行。",
            casualVersion: "Nope, all materials are free. You'll get a workbook on day one. Just bring a notebook and a pen.",
            formalityVariants: {
              casual: "Nah, everything's free. We'll hand you a workbook on your first day. Just bring a notebook and a pen.",
              standard: "No, all materials are provided free of charge. We will give you a workbook on your first day. Just bring a notebook and something to write with.",
              formal: "That will not be necessary. All requisite materials are provided complimentary. A workbook will be issued to you on your initial day of attendance. Kindly ensure you bring a notebook and a writing implement.",
            },
            keyPhrases: [
              { en: "free of charge", zh: "免费" },
              { en: "workbook", zh: "练习册" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Nope, everything is included. You will get a workbook and handouts in class. Just show up with a pen and paper and you are good to go.",
                textZh: "不用，全部包含。上课时会发练习册和讲义。带上笔和纸来就行了。",
                actionHint: "记下需要带的东西",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. One more question — if I miss a class, can I make it up?",
            textZh: "太好了。再问一个问题——如果缺课，可以补课吗？",
            commonMistake: {
              wrong: "If I miss class, can I learn it back?",
              correct: "If I miss a class, can I make it up?",
              explanation: "“make it up”是指补课的常用短语；“learn it back”不自然。",
            },
            formalityVariants: {
              casual: "Cool. Quick question — if I miss class, can I make it up?",
              standard: "Great. One more question — if I miss a class, can I make it up?",
              formal: "Excellent. I have one further inquiry — should I be unable to attend a session, is it permissible to arrange for a make-up?",
            },
            casualVersion: "Cool. What if I miss a class? Can I make it up somehow?",
          },
          {
            speaker: "them",
            role: "教务",
            textEn:
              "We do not have formal make-up sessions, but the teacher posts the class materials online every week. You can also visit our tutoring center during the day for one-on-one help if you fall behind.",
            textZh:
              "我们没有正式的补课，但老师每周都会在网上发布课堂材料。如果你落后了，你也可以白天去我们的辅导中心获得一对一帮助。",
            casualVersion: "Nah, no formal make-up classes. But the teacher puts all the stuff online weekly. And you can always hit up the tutoring center during the day for one-on-one help if you get behind.",
            commonMistake: {
              wrong: "if you are slow",
              correct: "if you fall behind",
              explanation: "“fall behind”是表示学习进度落后的地道表达。",
            },
            formalityVariants: {
              casual: "No official make-up classes, but teachers post everything online each week. Or you can drop by the tutoring center for some individual help if you're falling behind.",
              standard: "We do not have formal make-up sessions, but the teacher posts the class materials online every week. You can also visit our tutoring center during the day for one-on-one help if you fall behind.",
              formal: "Formal make-up sessions are not provided; however, instructors routinely upload class materials to our online platform on a weekly basis. Additionally, students are welcome to utilize our tutoring center during operational hours for personalized, one-on-one assistance should they find themselves behind schedule.",
            },
            keyPhrases: [
              { en: "make-up sessions", zh: "补课" },
              { en: "one-on-one help", zh: "一对一帮助" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "There are no make-up classes, but everything gets posted online so you can catch up at home. And if you need extra help, our tutoring center is open during the day — just walk in.",
                textZh:
                  "没有补课，但所有内容都会发到网上，你可以在家自学补上。如果需要额外帮助，我们的辅导中心白天开放——直接来就行。",
                actionHint: "了解补课替代方案",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 大学申请 ====================
  {
    id: "education-college-admission",
    category: "education",
    titleZh: "大学申请",
    titleEn: "College Admission",
    description: "向招生官咨询大学入学申请事宜",
    otherRole: "招生官",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "admission-inquiry-basic",
        titleZh: "基本申请咨询",
        titleEn: "Basic Admission Inquiry",
        description: "在招生办公室咨询申请流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi, I am an international student from China and I am interested in applying to this university. Can you help me understand the process?",
            textZh: "你好，我是来自中国的国际学生，我有兴趣申请这所大学。你能帮我了解一下流程吗？",
            casualVersion: "Hey, I'm from China and want to apply here. Can you walk me through how it works?",
            commonMistake: {
              wrong: "Can you introduce the process to me?",
              correct: "Can you help me understand the process?",
              explanation:
                "“介绍”在中文中常用来指说明流程，但在英文中“introduce”通常指介绍人物或新概念，不用于解释流程。",
            },
            formalityVariants: {
              casual: "Hey, I'm an int'l student from China, looking to apply here. Can you tell me about the process?",
              standard:
                "Hi, I am an international student from China and I am interested in applying to this university. Can you help me understand the process?",
              formal:
                "Good morning/afternoon. My name is [Your Name], and I am an international applicant from China. I am very keen on applying to this esteemed institution and would greatly appreciate your guidance regarding the application procedure.",
            },
          },
          {
            speaker: "them",
            role: "招生官",
            textEn:
              "Of course! For international students, you will need to submit your transcripts, a personal statement, two letters of recommendation, and proof of English proficiency — usually a TOEFL or IELTS score.",
            textZh: "当然！对于国际学生，你需要提交成绩单、个人陈述、两封推荐信和英语水平证明——通常是托福或雅思成绩。",
            keyPhrases: [
              { en: "transcripts", zh: "成绩单" },
              { en: "letters of recommendation", zh: "推荐信" },
            ],
            casualVersion:
              "Sure! For int'l students, you'll need to send in your transcripts, a personal statement, two rec letters, and proof you can speak English — usually a TOEFL or IELTS score.",
            commonMistake: {
              wrong: "recommend letters",
              correct: "letters of recommendation",
              explanation:
                "“推荐信”的英文是“letters of recommendation”或“recommendation letters”，而不是“recommend letters”。",
            },
            formalityVariants: {
              casual:
                "Sure! Int'l students gotta send in transcripts, a personal statement, two recommendation letters, and English test scores – like TOEFL or IELTS.",
              standard:
                "Of course! For international students, you will need to submit your transcripts, a personal statement, two letters of recommendation, and proof of English proficiency — usually a TOEFL or IELTS score.",
              formal:
                "Certainly! International applicants are required to furnish official academic transcripts, a compelling personal statement, two letters of recommendation, and verifiable evidence of English language proficiency, typically demonstrated through official TOEFL or IELTS scores.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Absolutely, happy to help! As an international applicant, you will need transcripts, a personal essay, two recommendation letters, and an English test score like TOEFL or IELTS.",
                textZh:
                  "当然，很乐意帮忙！作为国际申请者，你需要成绩单、个人论文、两封推荐信和英语考试成绩如托福或雅思。",
                actionHint: "记下申请材料清单",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What is the minimum TOEFL score required for admission?",
            textZh: "入学要求的最低托福分数是多少？",
            casualVersion: "What TOEFL score do I need to get in?",
            commonMistake: {
              wrong: "What is the lowest TOEFL score needed for admission?",
              correct: "What is the minimum TOEFL score required for admission?",
              explanation: "在询问最低分数时，常用“minimum”而非“lowest”，“required”也比“needed”更正式。",
            },
            formalityVariants: {
              casual: "What's the lowest TOEFL score I need to get in?",
              standard: "What is the minimum TOEFL score required for admission?",
              formal: "Could you please specify the requisite minimum TOEFL score for successful admission?",
            },
          },
          {
            speaker: "them",
            role: "招生官",
            textEn:
              "We require a minimum of eighty on the internet-based TOEFL, or six point five on IELTS. However, competitive applicants typically score higher. If your score is slightly below, we offer conditional admission with an intensive English program.",
            textZh:
              "我们要求网络版托福最低八十分，或雅思六点五分。但有竞争力的申请者通常分数更高。如果你的分数略低，我们提供附带强化英语项目的有条件录取。",
            keyPhrases: [
              { en: "conditional admission", zh: "有条件录取" },
              { en: "intensive English program", zh: "强化英语项目" },
            ],
            casualVersion:
              "We need at least 80 on the internet TOEFL, or 6.5 on IELTS. But, people who get in usually score higher. If you're a little below, we can do conditional admission with an intensive English program.",
            commonMistake: {
              wrong: "...conditional admission with intensive English program.",
              correct: "...conditional admission with an intensive English program.",
              explanation: "“intensive English program”是可数名词，前面需要加不定冠词“an”。",
            },
            formalityVariants: {
              casual:
                "We're looking for at least an 80 on internet TOEFL, or 6.5 on IELTS. Most folks who get in do better, though. If your score's just a bit low, we can still admit you conditionally with an intensive English program.",
              standard:
                "We require a minimum of eighty on the internet-based TOEFL, or six point five on IELTS. However, competitive applicants typically score higher. If your score is slightly below, we offer conditional admission with an intensive English program.",
              formal:
                "A minimum score of eighty on the internet-based TOEFL or six point five on the IELTS is mandated. Nevertheless, successful applicants generally present higher scores. Should an applicant's score fall marginally below these criteria, we do extend conditional admission, contingent upon participation in an intensive English language program.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "The minimum is eighty for TOEFL or six point five for IELTS. But honestly, most admitted students score above that. If you are close but not quite there, we have a conditional admit option with English prep classes.",
                textZh:
                  "最低要求是托福八十或雅思六点五。但说实话，大多数被录取的学生分数都高于这个。如果你接近但没到，我们有带英语预备课程的有条件录取选项。",
                actionHint: "了解有条件录取选项",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "When is the application deadline? I want to make sure I have enough time to prepare everything.",
            textZh: "申请截止日期是什么时候？我想确保有足够的时间准备所有材料。",
            casualVersion: "When is everything due? I need to know how much time I have.",
            commonMistake: {
              wrong: "When is the apply deadline?",
              correct: "When is the application deadline?",
              explanation: "“申请截止日期”的英文是“application deadline”，不是“apply deadline”。",
            },
            formalityVariants: {
              casual:
                "What's the application deadline? Just wanna make sure I have enough time to get everything ready.",
              standard:
                "When is the application deadline? I want to make sure I have enough time to prepare everything.",
              formal:
                "Could you please inform me of the official application deadline? I wish to ensure ample time for the comprehensive preparation of all requisite documents.",
            },
          },
          {
            speaker: "them",
            role: "招生官",
            textEn:
              "For fall enrollment, the priority deadline is January fifteenth, and the regular deadline is March first. I strongly recommend applying by the priority deadline — it gives you the best chance for financial aid and housing.",
            textZh:
              "秋季入学的优先截止日期是一月十五日，常规截止日期是三月一日。我强烈建议在优先截止日期前申请——这样你获得经济援助和住宿的机会最大。",
            keyPhrases: [
              { en: "priority deadline", zh: "优先截止日期" },
              { en: "financial aid", zh: "经济援助/助学金" },
            ],
            casualVersion:
              "For fall, the early deadline is Jan 15th, and the normal one is March 1st. I'd really suggest applying by the early one — it'll give you the best shot at financial aid and housing.",
            commonMistake: {
              wrong: "...it gives you the best chance get financial aid and housing.",
              correct: "...it gives you the best chance for financial aid and housing.",
              explanation: "“获得……的机会”英文常用“chance for [事物]”或“chance to [动词]”，“chance get”不自然。",
            },
            formalityVariants: {
              casual:
                "For fall, the early bird deadline's Jan 15th, and the general one's March 1st. Seriously, aim for the early one – way better odds for aid and a place to live.",
              standard:
                "For fall enrollment, the priority deadline is January fifteenth, and the regular deadline is March first. I strongly recommend applying by the priority deadline — it gives you the best chance for financial aid and housing.",
              formal:
                "For matriculation in the fall semester, the priority application deadline is January fifteenth, with the regular application deadline set for March first. I highly advise submitting your application by the priority deadline, as this significantly enhances your prospects for securing financial assistance and on-campus accommodation.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "The early deadline is January fifteenth, and the final one is March first. Try to hit the early one if you can — it really helps with scholarships and getting your first choice for dorms.",
                textZh:
                  "提前截止日期是一月十五日，最终截止日期是三月一日。如果可以的话尽量赶上提前的——对奖学金和选到理想宿舍真的很有帮助。",
                actionHint: "记下关键截止日期",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "admission-detail-intermediate",
        titleZh: "深入了解专业和奖学金",
        titleEn: "Exploring Majors and Scholarships",
        description: "详细了解专业设置和奖学金机会",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "I am interested in computer science. Can you tell me about the program and whether there are scholarships available for international students?",
            textZh: "我对计算机科学感兴趣。能告诉我关于这个专业的情况以及国际学生是否有奖学金吗？",
            casualVersion:
              "I want to study CS. What is the program like, and are there scholarships for international students?",
            commonMistake: {
              wrong: "Can you introduce me the program?",
              correct: "Can you tell me about the program?",
              explanation: "Introduce通常指介绍人或让某人了解新事物，非课程信息。",
            },
            formalityVariants: {
              casual:
                "I'm into computer science. What's the program like, and any scholarships for international students?",
              standard:
                "I am interested in computer science. Can you tell me about the program and whether there are scholarships available for international students?",
              formal:
                "Good morning/afternoon, I am writing/speaking to express my keen interest in your computer science program. Could you please provide me with more information regarding the curriculum and ascertain the availability of scholarships for international applicants?",
            },
          },
          {
            speaker: "them",
            role: "招生官",
            textEn:
              "Our computer science program is one of the strongest in the state. It offers specializations in artificial intelligence, cybersecurity, and software engineering. As for scholarships, we have merit-based awards that international students can apply for.",
            textZh:
              "我们的计算机科学项目是州内最强的之一。提供人工智能、网络安全和软件工程方向。至于奖学金，我们有国际学生可以申请的基于优秀成绩的奖项。",
            casualVersion: "Our CS program's one of the best in the state. You can specialize in AI, cybersecurity, or software engineering. And for scholarships, we've got merit-based ones international students can totally apply for.",
            formalityVariants: {
              casual: "Our CS program's killer, top in the state. You can do AI, cyber, or software engineering. And yeah, int'l students can get merit scholarships.",
              standard: "Our computer science program is one of the strongest in the state. It offers specializations in artificial intelligence, cybersecurity, and software engineering. As for scholarships, we have merit-based awards that international students can apply for.",
              formal: "Our institution's computer science program is recognized as a leader within the state, offering comprehensive specializations in artificial intelligence, cybersecurity, and software engineering. Regarding financial aid, we provide merit-based awards for which international students are eligible to apply.",
            },
            keyPhrases: [
              { en: "specializations", zh: "专业方向" },
              { en: "merit-based awards", zh: "基于优秀成绩的奖项" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "CS is one of our top programs — you can specialize in AI, cybersecurity, or software engineering. For scholarships, we do offer merit-based ones that are open to international students.",
                textZh:
                  "CS是我们最好的专业之一——你可以选AI、网络安全或软件工程方向。奖学金方面，我们确实有面向国际学生的成绩奖学金。",
                actionHint: "了解具体专业方向",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How do I apply for the scholarship? Is it a separate application?",
            textZh: "怎么申请奖学金？是单独的申请吗？",
            commonMistake: {
              wrong: "How to apply scholarship?",
              correct: "How do I apply for the scholarship?",
              explanation: "问句需主谓倒装并加助动词，'apply for'才是正确搭配。",
            },
            formalityVariants: {
              casual: "How do I apply for that? Is it a separate thing?",
              standard: "How do I apply for the scholarship? Is it a separate application?",
              formal: "Could you please elaborate on the procedure for scholarship application? Furthermore, is a distinct application required for these scholarships?",
            },
            casualVersion: "How do I apply for that? Is it a different form?",
          },
          {
            speaker: "them",
            role: "招生官",
            textEn:
              "For most scholarships, you are automatically considered when you submit your admission application. But there are a few competitive ones that require a separate essay. I can email you the full list.",
            textZh:
              "大多数奖学金，你在提交入学申请时会被自动考虑。但有几个竞争性的需要单独写论文。我可以发邮件给你完整清单。",
            casualVersion: "Most scholarships? You're automatically in the running when you apply. Just a few super competitive ones need an extra essay. I can shoot you the whole list.",
            formalityVariants: {
              casual: "Most scholarships, you're automatically considered with your application. A couple competitive ones need an essay. I'll email you the list.",
              standard: "For most scholarships, you are automatically considered when you submit your admission application. But there are a few competitive ones that require a separate essay. I can email you the full list.",
              formal: "Regarding the majority of our scholarships, applicants are automatically considered upon the submission of their admission application. However, a select number of highly competitive scholarships necessitate the submission of an additional essay. I would be pleased to forward the comprehensive list to you via email.",
            },
            keyPhrases: [
              { en: "automatically considered", zh: "自动被考虑" },
              { en: "competitive ones", zh: "竞争性的奖项" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Most of them are automatic — no extra work needed. A few special ones need their own essay. Let me send you the details by email so you have everything in one place.",
                textZh:
                  "大部分是自动的——不需要额外工作。几个特别的需要单独写文章。我发邮件把详细信息发给你，这样你所有信息都在一起。",
                actionHint: "留下邮箱获取奖学金清单",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be very helpful. Can I also schedule a campus tour to see the facilities?",
            textZh: "那太有帮助了。我还可以预约校园参观来看看设施吗？",
            commonMistake: {
              wrong: "Can I also book a campus tour?",
              correct: "Can I also schedule a campus tour?",
              explanation: "'Schedule'预约参观更地道，'book'更像预定机票酒店。",
            },
            formalityVariants: {
              casual: "Awesome, thanks. Can I also set up a campus tour to check out the place?",
              standard: "That would be very helpful. Can I also schedule a campus tour to see the facilities?",
              formal: "That information would be exceedingly beneficial. Furthermore, would it be possible to arrange a campus tour to view the facilities?",
            },
            casualVersion: "That would be great. Can I also book a campus tour?",
          },
          {
            speaker: "them",
            role: "招生官",
            textEn:
              "Absolutely! We run campus tours every weekday at ten and two. You can sign up online or I can book you in right now. Would you also like to sit in on a class?",
            textZh: "当然！我们每个工作日十点和两点有校园参观。你可以在线报名或者我现在帮你预约。你还想旁听一节课吗？",
            casualVersion: "Totally! We do campus tours weekdays, 10 and 2. Sign up online, or I can just book you in now. Wanna sit in on a class too?",
            formalityVariants: {
              casual: "Yeah, totally! Tours run weekdays at 10 & 2. Sign up online or I can slot you in now. Wanna check out a class too?",
              standard: "Absolutely! We run campus tours every weekday at ten and two. You can sign up online or I can book you in right now. Would you also like to sit in on a class?",
              formal: "Certainly! Our campus tours are conducted bi-daily on weekdays, specifically at ten hundred and fourteen hundred hours. You may register online at your convenience, or I would be pleased to reserve a slot for you immediately. Additionally, would you be interested in observing a class session?",
            },
            keyPhrases: [
              { en: "campus tour", zh: "校园参观" },
              { en: "sit in on a class", zh: "旁听一节课" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Of course! Tours go out daily at ten a.m. and two p.m. I can sign you up right now if you want. We can also arrange for you to sit in on a CS lecture — would you like that?",
                textZh:
                  "当然！每天上午十点和下午两点有参观团。如果你想的话我现在就给你报名。我们还可以安排你旁听一节CS课——你想吗？",
                actionHint: "预约参观和旁听",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 选课注册 ====================
  {
    id: "education-college-registration",
    category: "education",
    titleZh: "选课注册",
    titleEn: "Course Registration",
    description: "在学术顾问帮助下完成选课注册",
    otherRole: "学术顾问",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "registration-basic",
        titleZh: "初次选课",
        titleEn: "First-Time Course Selection",
        description: "新生第一次选课",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I am a new student and I need help choosing my classes for the fall semester.",
            textZh: "你好，我是新生，我需要帮助选择秋季学期的课程。",
            casualVersion: "Hey, I'm new here and need help picking my fall classes.",
            commonMistake: {
              wrong: "I am new student and I need help to choose my classes for the fall semester.",
              correct: "I am a new student and I need help choosing my classes for the fall semester.",
              explanation: "英语中'a new student'前需要冠词a，'need help doing sth'比'need help to do sth'更自然。",
            },
            formalityVariants: {
              casual: "Hey, I'm new here and need help picking my fall classes.",
              standard: "Hi, I am a new student and I need help choosing my classes for the fall semester.",
              formal:
                "Good morning/afternoon, I am a newly admitted student seeking assistance with course selection for the upcoming fall semester.",
            },
          },
          {
            speaker: "them",
            role: "学术顾问",
            textEn:
              "Welcome! Let me pull up your academic plan. As a freshman, you will want to take your general education requirements first — things like English Composition, College Algebra, and a lab science.",
            textZh:
              "欢迎！让我调出你的学业计划。作为大一新生，你会想先修通识教育课程——比如英语写作、大学代数和一门实验科学。",
            keyPhrases: [
              { en: "general education requirements", zh: "通识教育课程/必修通识课" },
              { en: "academic plan", zh: "学业计划" },
            ],
            casualVersion:
              "Welcome! Lemme pull up your plan. As a freshman, you'll wanna hit those general ed requirements first — stuff like English Comp, College Algebra, and a lab science.",
            culturalNote: "美国大学的学业计划（academic plan）和通识教育（general education）体系与中国不同。",
            formalityVariants: {
              casual:
                "Welcome! Let me quickly pull up your plan. As a freshman, you should probably knock out those general ed courses first — like English, Math, and a science with a lab.",
              standard:
                "Welcome! Let me pull up your academic plan. As a freshman, you will want to take your general education requirements first — things like English Composition, College Algebra, and a lab science.",
              formal:
                "Welcome! I will access your academic record. As a first-year student, it is advisable to prioritize your general education requirements, such as English Composition, College Algebra, and a laboratory science course.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Great, welcome aboard! Let me look at your degree plan. First semester, you should knock out some gen ed classes — English, math, and a science with a lab.",
                textZh:
                  "太好了，欢迎！让我看看你的学位计划。第一学期你应该先完成一些通识课——英语、数学和一门带实验的科学。",
                actionHint: "了解通识课要求",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How many classes should I take? I do not want to overload myself in the first semester.",
            textZh: "我应该选几门课？我不想第一学期就超负荷。",
            casualVersion: "How many should I take? I don't wanna go overboard my first semester.",
            commonMistake: {
              wrong: "How many classes I should take? I don't want to overwork myself in the first semester.",
              correct: "How many classes should I take? I do not want to overload myself in the first semester.",
              explanation:
                "'How many classes should I take'是疑问句语序；'overload myself'指课程过多，'overwork'多指工作。",
            },
            formalityVariants: {
              casual: "How many classes should I take? Don't wanna take too much my first semester.",
              standard: "How many classes should I take? I do not want to overload myself in the first semester.",
              formal:
                "What is the recommended course load? I am keen to avoid excessive academic pressure during my initial semester.",
            },
          },
          {
            speaker: "them",
            role: "学术顾问",
            textEn:
              "I would recommend four to five classes, which is twelve to fifteen credits. As an international student, you are required to take at least twelve credits to maintain your visa status. Fifteen is full-time and keeps you on track to graduate in four years.",
            textZh:
              "我建议四到五门课，也就是十二到十五个学分。作为国际学生，你至少需要修十二个学分来维持签证状态。十五个是全日制，可以保证你四年内毕业。",
            keyPhrases: [
              { en: "maintain your visa status", zh: "维持签证状态" },
              { en: "credits", zh: "学分" },
            ],
            casualVersion:
              "I'd say four to five classes, so twelve to fifteen credits. Since you're an international student, you gotta take at least twelve credits to keep your visa. Fifteen's full-time and keeps you on track to graduate in four years.",
            culturalNote: "美国大学的学分（credits）和全日制（full-time）要求与签证状态挂钩，非常重要。",
            formalityVariants: {
              casual:
                "I'd suggest four to five classes, that's 12 to 15 credits. For international students, you need at least 12 credits for your visa. 15 is full-time to graduate on time.",
              standard:
                "I would recommend four to five classes, which is twelve to fifteen credits. As an international student, you are required to take at least twelve credits to maintain your visa status. Fifteen is full-time and keeps you on track to graduate in four years.",
              formal:
                "My recommendation would be to enroll in four to five courses, equating to twelve to fifteen credits. It is mandatory for international students to register for a minimum of twelve credits to uphold their visa status. Fifteen credits constitutes full-time enrollment and facilitates a timely graduation within four years.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "I would say four or five classes — that is twelve to fifteen credits. Keep in mind, for your F-1 visa, you need at least twelve. Five classes will keep you on pace to finish on time.",
                textZh:
                  "我会说四到五门课——也就是十二到十五个学分。记住，你的F-1签证要求至少十二个。五门课能让你按时毕业。",
                actionHint: "注意签证对学分的要求",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Got it. Are there any sections that still have open seats? I tried registering online but some classes were full.",
            textZh: "明白了。还有哪些班次有空位吗？我试过在线注册但有些课已经满了。",
            casualVersion: "Okay. Are there any spots left? Some classes were already full when I tried online.",
            culturalNote: "美国大学的课程通常有不同的“sections”（班次），并且注册系统实时显示“open seats”（空位）。",
            commonMistake: {
              wrong:
                "I got it. Is there any sections still have empty seats? I tried register online but some classes were full.",
              correct:
                "Got it. Are there any sections that still have open seats? I tried registering online but some classes were full.",
              explanation:
                "'Got it'更口语化；'open seats'指课程空位，'empty'不自然；'Are there any sections that still have'是正确疑问句结构。",
            },
            formalityVariants: {
              casual: "Okay, are there any spots open? Some classes were full when I tried signing up online.",
              standard:
                "Got it. Are there any sections that still have open seats? I tried registering online but some classes were full.",
              formal:
                "Understood. May I inquire if there are any sections with remaining availability? My attempt at online registration indicated that several courses were at capacity.",
            },
          },
          {
            speaker: "them",
            role: "学术顾问",
            textEn:
              "Let me check. English Comp has an opening on Tuesday and Thursday at eleven. For math, the afternoon section still has a few seats. I can add you to the waitlist for the morning one if you prefer that time.",
            textZh:
              "让我查一下。英语写作周二和周四十一点的班有空位。数学下午班还有几个位子。如果你更喜欢上午的时间，我可以把你加入候补名单。",
            keyPhrases: [
              { en: "opening", zh: "空位" },
              { en: "waitlist", zh: "候补名单" },
            ],
            casualVersion:
              "Lemme check. English Comp's got an opening Tues/Thurs at eleven. For math, the afternoon section still has a few spots. I can put you on the waitlist for the morning one if you'd rather have that time.",
            culturalNote: "美国大学常见的“waitlist”（候补名单）机制，当课程满员时学生可选择加入，等待空位。",
            formalityVariants: {
              casual:
                "Let me see. English Comp has a spot open Tuesday and Thursday at 11. The math afternoon class still has some seats. I can put you on the waitlist for the morning if you prefer that.",
              standard:
                "Let me check. English Comp has an opening on Tuesday and Thursday at eleven. For math, the afternoon section still has a few seats. I can add you to the waitlist for the morning one if you prefer that time.",
              formal:
                "Allow me to verify. English Composition has an available slot on Tuesday and Thursday at eleven o'clock. Regarding mathematics, the afternoon section retains several openings. I am able to place you on the waiting list for the morning session should that time be more suitable for your schedule.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Let me look. There are spots in the Tuesday-Thursday English class at eleven. Math still has room in the two o'clock section. If you want the morning math, I can put you on the waitlist — people usually drop before the first week.",
                textZh:
                  "我看看。周二周四十一点的英语课有位子。两点的数学还有名额。如果你想上午的数学课，我可以把你放到候补名单上——通常第一周前都会有人退出。",
                actionHint: "确认选课时间",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "registration-intermediate",
        titleZh: "调整课程和学术规划",
        titleEn: "Course Adjustment and Academic Planning",
        description: "退课、换课或调整学业计划",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "I want to drop my chemistry class. I am finding it too difficult to manage with my other courses. What is the process?",
            textZh: "我想退掉化学课。我发现和其他课程一起太难管理了。退课流程是什么？",
            casualVersion: "I need to drop chem. It is too much with everything else. How do I do that?",
            commonMistake: {
              wrong: "I want to drop my chemistry class.",
              correct: "I'd like to drop my chemistry class.",
              explanation: "在表达意愿时，'I'd like to...'比'I want to...'更礼貌。",
            },
            formalityVariants: {
              casual: "Wanna drop chem. It's too hard with my other classes. How do I do that?",
              standard:
                "I want to drop my chemistry class. I am finding it too difficult to manage with my other courses. What is the process?",
              formal:
                "I would like to inquire about the procedure for dropping my chemistry course. I am finding the workload challenging to manage alongside my other academic commitments.",
            },
          },
          {
            speaker: "them",
            role: "学术顾问",
            textEn:
              "You can drop it before the deadline, which is October fifteenth, without any penalty. After that date, you would receive a W on your transcript. Let me check — if you drop it, you will be at twelve credits, which is still full-time.",
            textZh:
              "你可以在截止日期十月十五日之前退课，没有任何处罚。过了那个日期，你的成绩单上会有一个W。让我看看——如果你退了，你还有十二个学分，仍然是全日制。",
            casualVersion: "You can drop it before Oct 15th, no penalty. After that, you'll get a 'W'. Lemme check — if you drop it, you'll be at 12 credits, still full-time.",
            formalityVariants: {
              casual: "Can drop it before Oct 15th, no penalty. After that, you'll get a 'W'. If you drop, you'll be at 12 credits, still full-time.",
              standard: "You can drop it before the deadline, which is October fifteenth, without any penalty. After that date, you would receive a W on your transcript. Let me check — if you drop it, you will be at twelve credits, which is still full-time.",
              formal: "You are permitted to withdraw from the course prior to the deadline of October fifteenth without incurring any academic penalty. Subsequent to that date, a 'W' would be recorded on your transcript. Upon reviewing your current academic standing, should you opt to withdraw, you would maintain twelve credits, which still qualifies as full-time enrollment.",
            },
            keyPhrases: [
              { en: "drop deadline", zh: "退课截止日期" },
              { en: "W on your transcript", zh: "成绩单上的W（退课标记）" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure, you have until October fifteenth to drop with no mark on your record. After that it shows as a W. Dropping it would put you at twelve credits — still full-time, so your visa is fine.",
                textZh:
                  "可以，你在十月十五日之前退课记录上不会有标记。之后会显示为W。退了之后你还有十二个学分——仍然是全日制，签证没问题。",
                actionHint: "注意退课截止日期",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Good, it is still before the deadline. Can I replace it with something else? Maybe an easier science class?",
            textZh: "好的，还在截止日期之前。我可以换一门别的吗？也许一门容易一点的科学课？",
            formalityVariants: {
              casual: "Good, still before the deadline. Can I swap it for something else? Like, an easier science class?",
              standard: "Good, it is still before the deadline. Can I replace it with something else? Maybe an easier science class?",
              formal: "Excellent, that falls within the designated withdrawal period. Would it be possible to substitute it with an alternative course, perhaps a science elective that is considered less demanding?",
            },
            casualVersion: "Cool, still in time. Can I swap it for something easier? Like another science class?",
          },
          {
            speaker: "them",
            role: "学术顾问",
            textEn:
              "Sure. Environmental Science is a popular choice — it fulfills the same lab science requirement but is considered more manageable. There is an opening in the Wednesday section. Want me to add it?",
            textZh:
              "当然。环境科学是个热门选择——它满足同样的实验科学要求但被认为更易管理。周三的班有空位。要我帮你加吗？",
            casualVersion: "Yeah. Environmental Science is popular — same lab requirement, but easier. Opening on Wed. Want me to add it?",
            formalityVariants: {
              casual: "Yeah. Environmental Science is popular — same lab, easier. Opening on Wed. Want me to add it?",
              standard: "Sure. Environmental Science is a popular choice — it fulfills the same lab science requirement but is considered more manageable. There is an opening in the Wednesday section. Want me to add it?",
              formal: "Certainly. Environmental Science is indeed a frequently selected option; it satisfies the requisite laboratory science component and is generally perceived as more manageable. There is availability in the Wednesday section. Would you like me to proceed with enrolling you in that course?",
            },
            keyPhrases: [
              { en: "fulfills the same requirement", zh: "满足同样的要求" },
              { en: "more manageable", zh: "更容易管理/更轻松" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Definitely. I would suggest Environmental Science — same requirement, way less intense. There is a spot on Wednesdays. Should I switch you over?",
                textZh: "当然。我建议环境科学——同样的要求，轻松很多。周三有位子。要不要帮你换？",
                actionHint: "确认换课",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Yes, please. Also, I am thinking about declaring my major next semester. Can you advise me on that?",
            textZh: "好的，麻烦了。另外，我在考虑下学期确定专业。你能给我一些建议吗？",
            formalityVariants: {
              casual: "Yeah, please. And I'm thinking about declaring my major next semester. Can you advise me?",
              standard: "Yes, please. Also, I am thinking about declaring my major next semester. Can you advise me on that?",
              formal: "Yes, that would be excellent, thank you. Additionally, I am contemplating declaring my major next semester. Might I receive your guidance on this matter?",
            },
            casualVersion: "Yeah, go ahead. Also, I want to pick my major next semester. Any advice?",
          },
          {
            speaker: "them",
            role: "学术顾问",
            textEn:
              "You do not have to rush that decision. Most students declare by the end of sophomore year. I would suggest taking introductory courses in a few areas you are interested in this year. That way you can explore before committing.",
            textZh:
              "你不需要急着做这个决定。大多数学生在大二结束前确定专业。我建议你今年选几个感兴趣领域的入门课程。这样你可以在确定之前先探索一下。",
            casualVersion: "No need to rush that decision. Most students declare by end of sophomore year. I'd say take intro courses in a few areas you're interested in this year. That way you can explore before committing.",
            formalityVariants: {
              casual: "No need to rush that. Most students declare by end of sophomore year. I'd say take intro courses in a few areas you like this year. That way you can explore before committing.",
              standard: "You do not have to rush that decision. Most students declare by the end of sophomore year. I would suggest taking introductory courses in a few areas you are interested in this year. That way you can explore before committing.",
              formal: "There is no imperative to expedite that particular decision. A significant number of students typically finalize their major declaration by the conclusion of their sophomore year. My recommendation would be to enroll in introductory courses across several fields of interest during the current academic year. This approach would afford you the opportunity to explore various disciplines prior to making a definitive commitment.",
            },
            keyPhrases: [
              { en: "declare your major", zh: "确定/申报专业" },
              { en: "introductory courses", zh: "入门课程" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No need to rush! You have until the end of your second year. Take some intro classes in different fields this year — see what clicks. Then you will have a much better idea of what you want.",
                textZh:
                  "不用着急！你到第二年结束前都行。今年在不同领域选些入门课——看看什么吸引你。然后你会更清楚自己想要什么。",
                actionHint: "了解确定专业的时间线",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 请家教 ====================
  {
    id: "education-tutor-hire",
    category: "education",
    titleZh: "请家教",
    titleEn: "Hiring a Tutor",
    description: "为孩子找合适的家教",
    otherRole: "家教",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "tutor-inquiry-basic",
        titleZh: "咨询家教服务",
        titleEn: "Inquiring About Tutoring",
        description: "和潜在家教进行初次沟通",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi, I saw your ad for tutoring services. My son is in fifth grade and needs help with math. Are you available?",
            textZh: "你好，我看到了你的家教服务广告。我儿子五年级，数学需要帮助。你有空吗？",
            casualVersion:
              "Hey, I saw your tutoring ad. My kid is in fifth grade and struggling with math. Are you free?",
            commonMistake: {
              wrong: "Do you have time?",
              correct: "Are you available?",
              explanation: "“Available”更专业，询问服务提供者的空闲时间。直接说“Do you have time?”会听起来像私人邀约。",
            },
            formalityVariants: {
              casual: "Hey, saw your tutoring ad. My son's in fifth grade, needs math help. You free?",
              standard:
                "Hi, I saw your ad for tutoring services. My son is in fifth grade and needs help with math. Are you available?",
              formal:
                "Good morning/afternoon, I am contacting you regarding your tutoring services advertisement. My son, who is currently in fifth grade, requires assistance with mathematics. I was wondering if you have availability at this time?",
            },
          },
          {
            speaker: "them",
            role: "家教",
            textEn:
              "Hi! Yes, I am available. I have been tutoring elementary and middle school math for three years. What specific areas is he having trouble with? Fractions? Word problems?",
            textZh: "你好！是的，我有空。我已经辅导小学和初中数学三年了。他具体哪些方面有困难？分数？应用题？",
            keyPhrases: [
              { en: "specific areas", zh: "具体哪些方面" },
              { en: "having trouble with", zh: "有困难的" },
            ],
            casualVersion:
              "Hey! Yeah, I'm available. Been tutoring elementary/middle school math for three years. What areas's he struggling with? Fractions? Word problems?",
            commonMistake: {
              wrong: "What problems he has?",
              correct: "What specific areas is he having trouble with?",
              explanation:
                "“having trouble with”是地道的英语表达，表示在某方面遇到困难。直译“problems”会听起来不自然。",
            },
            formalityVariants: {
              casual:
                "Yeah, I'm available. Taught elementary/middle math for 3 years. What's he struggling with? Fractions? Word problems?",
              standard:
                "Hi! Yes, I am available. I have been tutoring elementary and middle school math for three years. What specific areas is he having trouble with? Fractions? Word problems?",
              formal:
                "Hello! Yes, I do have availability. I possess three years of experience tutoring elementary and middle school mathematics. Could you please specify which areas he is finding particularly challenging? For instance, fractions or word problems?",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Hey, thanks for reaching out! I have three years of experience with elementary math. What is he struggling with the most? I can tailor our sessions to focus on that.",
                textZh: "嘿，谢谢联系我！我有三年辅导小学数学的经验。他哪方面最困难？我可以针对性地安排辅导内容。",
                actionHint: "说明孩子的具体困难",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Mostly word problems and long division. He understands the concepts in Chinese but struggles with the English math terminology.",
            textZh: "主要是应用题和长除法。他用中文能理解概念但对英语数学术语有困难。",
            casualVersion:
              "Word problems and long division, mainly. He gets it in Chinese but the English math terms trip him up.",
            commonMistake: {
              wrong: "he has problems with English math terminology",
              correct: "struggles with the English math terminology",
              explanation: "“struggles with”更强调克服困难的过程和努力，比“has problems with”更自然和地道。",
            },
            formalityVariants: {
              casual:
                "Mainly word problems, long division. He gets the ideas in Chinese but the English math words trip him up.",
              standard:
                "Mostly word problems and long division. He understands the concepts in Chinese but struggles with the English math terminology.",
              formal:
                "His primary challenges are with word problems and long division. While he comprehends the mathematical concepts when explained in Chinese, he encounters difficulties with the corresponding English terminology.",
            },
          },
          {
            speaker: "them",
            role: "家教",
            textEn:
              "That is actually very common with bilingual kids. I can help him learn the English math vocabulary while we work through the problems together. It will help him in class too.",
            textZh: "这在双语孩子中其实很常见。我可以在一起做题的同时帮他学习英语数学词汇。这对他上课也有帮助。",
            keyPhrases: [
              { en: "bilingual kids", zh: "双语孩子" },
              { en: "math vocabulary", zh: "数学词汇" },
            ],
            casualVersion:
              "Yeah, super common with bilingual kids. I can totally help him pick up the English math vocab while we do problems. Plus, it'll help him in class.",
            commonMistake: {
              wrong: "while we solve the problems",
              correct: "while we work through the problems together",
              explanation: "“work through problems”表示逐步解决或理解问题，强调过程。直译“solve problems”稍显生硬。",
            },
            formalityVariants: {
              casual:
                "Oh yeah, super common with bilingual kids. I can help him learn the English math words as we go through the problems. Big help for class too.",
              standard:
                "That is actually very common with bilingual kids. I can help him learn the English math vocabulary while we work through the problems together. It will help him in class too.",
              formal:
                "Indeed, this is a frequently observed challenge among bilingual children. I am confident I can assist him in acquiring the necessary English mathematical vocabulary concurrently as we address the problems. This approach will also significantly benefit his classroom performance.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "I see that a lot with kids who speak another language at home. I will teach him the English terms as we go through practice problems. It makes a huge difference in class.",
                textZh:
                  "在家说其他语言的孩子经常这样。我会在做练习题的过程中教他英语术语。这在课堂上会产生很大的变化。",
                actionHint: "了解辅导方法",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds great. How much do you charge per session, and how long is each session?",
            textZh: "听起来很好。每次辅导多少钱，每次多长时间？",
            casualVersion: "Sounds good. What do you charge, and how long are the sessions?",
            commonMistake: {
              wrong: "How much is one session?",
              correct: "How much do you charge per session?",
              explanation: "询问服务价格时，使用“charge”更自然和专业。“per session”明确指明按次计费。",
            },
            formalityVariants: {
              casual: "Sounds good. What's your rate per session, and how long are they?",
              standard: "That sounds great. How much do you charge per session, and how long is each session?",
              formal:
                "That is excellent. Could you please provide information regarding your fees per session and the duration of each session?",
            },
          },
          {
            speaker: "them",
            role: "家教",
            textEn:
              "I charge thirty-five dollars per hour. Most students do one-hour sessions twice a week. I can come to your home or we can meet at the library, whichever is easier for your family.",
            textZh:
              "每小时三十五美元。大部分学生每周两次，每次一小时。我可以上门或者我们在图书馆见面，看哪种对你们家方便。",
            keyPhrases: [
              { en: "per hour", zh: "每小时" },
              { en: "whichever is easier", zh: "哪种方便就哪种" },
            ],
            casualVersion:
              "I charge thirty-five bucks an hour. Most kids do an hour twice a week. I can come to your place or we can meet at the library, whatever works for you guys.",
            commonMistake: {
              wrong: "One hour is thirty-five dollars. Which way is easier for your family?",
              correct: "I charge thirty-five dollars per hour. ... whichever is easier for your family.",
              explanation:
                "提供服务价格时，用“I charge [金额] per [时间单位]”是标准说法。“whichever is easier for your family”是很地道和客气的表达。",
            },
            formalityVariants: {
              casual:
                "It's thirty-five an hour. Most students do an hour, twice a week. I can come to your house or we can meet at the library, whatever's easiest.",
              standard:
                "I charge thirty-five dollars per hour. Most students do one-hour sessions twice a week. I can come to your home or we can meet at the library, whichever is easier for your family.",
              formal:
                "My rate is thirty-five dollars per hour. Typically, students engage in one-hour sessions twice weekly. For your convenience, I am able to conduct sessions at your residence or at the local library, depending on what best suits your family's schedule.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "It is thirty-five an hour. I usually recommend twice a week for an hour each time. I can come to you or we can do the library — whatever works best.",
                textZh: "每小时三十五。我通常建议每周两次每次一小时。我可以上门或者去图书馆——怎么方便怎么来。",
                actionHint: "确认时间和地点",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "tutor-schedule-intermediate",
        titleZh: "安排辅导计划",
        titleEn: "Setting Up a Tutoring Plan",
        description: "和家教确定具体的辅导安排和目标",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "We would like to start with twice a week. His big test is in six weeks. Can you help him prepare for that specifically?",
            textZh: "我们想先每周两次。他六周后有一个大考。你能专门帮他准备吗？",
            casualVersion: "Let us do twice a week. He has a big test in six weeks. Can you prep him for it?",
            formalityVariants: {
              casual:
                "We'd like to start with two times a week. He's got a big test in six weeks. Can you help him get ready for that specifically?",
              standard:
                "We would like to start with twice a week. His big test is in six weeks. Can you help him prepare for that specifically?",
              formal:
                "We are hoping to commence with two sessions per week. He has a significant examination scheduled in six weeks. Would you be able to specifically tailor his preparation for that?",
            },
          },
          {
            speaker: "them",
            role: "家教",
            textEn:
              "Absolutely. I will create a study plan that covers all the topics on the test. We will start with his weakest areas and build up from there. Can you send me a copy of his syllabus or recent test scores?",
            textZh:
              "当然可以。我会制定一个涵盖考试所有知识点的学习计划。我们从他最弱的部分开始，然后逐步提升。你能发给我他的课程大纲或最近的考试成绩吗？",
            casualVersion: "Totally. I'll make a study plan covering all the test topics. We'll kick off with his weak spots and go from there. Can you shoot me a copy of his syllabus or latest test scores?",
            formalityVariants: {
              casual: "Yeah, for sure. I'll make a study plan for all the test stuff. We'll hit his weak spots first and then go from there. Can you send over his syllabus or latest scores?",
              standard: "Absolutely. I will create a study plan that covers all the topics on the test. We will start with his weakest areas and build up from there. Can you send me a copy of his syllabus or recent test scores?",
              formal: "Certainly. I shall devise a comprehensive study plan encompassing all relevant examination topics. Our approach will prioritize his areas of greatest challenge, progressively strengthening his understanding. Would you be able to forward a copy of his curriculum outline or his most recent assessment results?",
            },
            keyPhrases: [
              { en: "study plan", zh: "学习计划" },
              { en: "weakest areas", zh: "最弱的部分" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For sure. I will map out a plan based on what is on the test. We will tackle the tough stuff first. If you can share his recent grades or the class syllabus, that would really help me customize things.",
                textZh:
                  "没问题。我会根据考试内容制定计划。我们先攻克难的部分。如果你能分享他最近的成绩或课程大纲，会帮助我定制内容。",
                actionHint: "提供相关资料",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Sure, I will email those to you. One more thing — should I sit in on the sessions, or is it better if he works with you alone?",
            textZh: "好的，我发邮件给你。还有一个问题——我应该在旁边看着，还是让他单独和你一起学习比较好？",
            commonMistake: {
              wrong: "Should I watch beside the sessions?",
              correct: "Should I sit in on the sessions?",
              explanation: "“sit in on” 指旁听、参与会议或课程，比直译“watch beside”更自然地道。",
            },
            formalityVariants: {
              casual: "Okay, I'll email 'em over. One more question — should I sit in, or is it better if he just works with you solo?",
              standard: "Sure, I will email those to you. One more thing — should I sit in on the sessions, or is it better if he works with you alone?",
              formal: "Certainly, I will forward those materials via email. Additionally, I have a query: would it be advisable for me to attend the sessions, or would it be more beneficial for him to engage with you individually?",
            },
            casualVersion: "I will send them over. Should I stay during the lessons or leave him with you?",
          },
          {
            speaker: "them",
            role: "家教",
            textEn:
              "I find that kids usually focus better one-on-one, but you are welcome to sit in for the first session to see how we work together. After that, most parents just check in at the end for a quick update.",
            textZh:
              "我发现孩子们通常一对一注意力更集中，但欢迎你在第一次课时旁观看看我们的合作方式。之后大多数家长就在结束时来快速了解一下情况。",
            casualVersion: "Usually, kids focus better one-on-one, but feel free to sit in on the first session to see how we do things. After that, most parents just pop in at the end for a quick rundown.",
            formalityVariants: {
              casual: "Kids usually focus better one-on-one, but you're welcome to stick around for the first one to see how it goes. Most parents just pop in at the end after that for a quick update.",
              standard: "I find that kids usually focus better one-on-one, but you are welcome to sit in for the first session to see how we work together. After that, most parents just check in at the end for a quick update.",
              formal: "In my experience, students generally achieve a higher level of focus in a one-on-one setting. However, you are most welcome to observe the inaugural session to acquaint yourself with our methodology. Subsequent to that, most parents typically request a brief progress report at the conclusion of each session.",
            },
            keyPhrases: [
              { en: "one-on-one", zh: "一对一" },
              { en: "check in", zh: "了解情况/沟通一下" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Most kids do better when it is just the two of us — fewer distractions. But feel free to watch the first time. After that, I will give you a summary at the end of each session.",
                textZh:
                  "大多数孩子只有我们两个时表现更好——干扰更少。但第一次你可以看看。之后每次课结束时我会给你一个总结。",
                actionHint: "了解辅导方式",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That makes sense. How will I know if he is making progress?",
            textZh: "有道理。我怎么知道他有没有进步？",
            commonMistake: {
              wrong: "How to know if he makes progress?",
              correct: "How will I know if he is making progress?",
              explanation: "英语疑问句需要主语和助动词，\"how will I know\" 是自然表达。",
            },
            formalityVariants: {
              casual: "Makes sense. How'll I know if he's getting better?",
              standard: "That makes sense. How will I know if he is making progress?",
              formal: "That is perfectly logical. What metrics will be utilized to ascertain his educational advancement?",
            },
            casualVersion: "Makes sense. How do I track his progress?",
          },
          {
            speaker: "them",
            role: "家教",
            textEn:
              "I will send you a brief progress report after each session — what we covered, what he did well, and what we need to keep working on. I also give practice problems for homework between sessions.",
            textZh:
              "我每次课后会给你发一份简短的进度报告——我们学了什么、他做得好的部分、以及还需要继续努力的。我还会布置课间练习题当作业。",
            casualVersion: "I'll shoot you a quick progress report after each session — what we did, what he aced, and what we gotta keep drilling. I'll also give him practice stuff for homework between sessions.",
            commonMistake: {
              wrong: "What we still need improve.",
              correct: "What we need to keep working on.",
              explanation: "“keep working on” 是地道表达，指持续改进或练习某事。",
            },
            formalityVariants: {
              casual: "I'll send you a quick progress report after each time — what we went over, what he rocked, and what we gotta keep hitting. Plus, I'll give him practice stuff to do between sessions.",
              standard: "I will send you a brief progress report after each session — what we covered, what he did well, and what we need to keep working on. I also give practice problems for homework between sessions.",
              formal: "I will provide you with a concise progress report subsequent to each session, detailing the topics addressed, areas of commendation for the student, and aspects requiring further development. Furthermore, I assign supplementary practice exercises to be completed as homework between sessions.",
            },
            keyPhrases: [
              { en: "progress report", zh: "进度报告" },
              { en: "practice problems", zh: "练习题" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "After every session, I will text you a quick recap — what went well, what needs work. I also assign a bit of practice between sessions so the skills stick.",
                textZh:
                  "每次课后我会发短信给你快速回顾——什么做得好、什么需要加强。我也会在课间布置一些练习让知识巩固。",
                actionHint: "确认沟通方式",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 图书馆资源 ====================
  {
    id: "education-library-resources",
    category: "education",
    titleZh: "图书馆资源",
    titleEn: "Library Resources",
    description: "在学校或公共图书馆咨询资源和服务",
    otherRole: "管理员",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "library-basic",
        titleZh: "办理借书证和借书",
        titleEn: "Getting a Library Card and Borrowing",
        description: "首次使用图书馆，办理借书证和借书",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just moved to the area and I would like to get a library card. What do I need?",
            textZh: "你好，我刚搬到这个地区，想办一张借书证。我需要什么？",
            casualVersion: "Hey, I'm new around here. How do I get a library card?",
            commonMistake: {
              wrong: "I want to get a library card.",
              correct: "I would like to get a library card.",
              explanation: "用 I'd like to 更礼貌和自然，避免直接的 I want。",
            },
            formalityVariants: {
              casual: "Hey, just moved here, wanna get a library card. What do I need?",
              standard: "Hi, I just moved to the area and I would like to get a library card. What do I need?",
              formal:
                "Good morning, I've recently relocated to this vicinity and am interested in obtaining a library card. Could you please inform me of the necessary requirements?",
            },
          },
          {
            speaker: "them",
            role: "管理员",
            textEn:
              "Welcome to the neighborhood! All you need is a photo ID and proof of address — a utility bill or lease will work. We can have your card ready in about five minutes.",
            textZh:
              "欢迎来到这个社区！你只需要一个带照片的证件和地址证明——水电费账单或租约都可以。大约五分钟就可以办好借书证。",
            keyPhrases: [
              { en: "photo ID", zh: "带照片的证件" },
              { en: "proof of address", zh: "地址证明" },
            ],
            casualVersion:
              "Welcome to the 'hood! Just need a photo ID and proof of address – like a utility bill or lease. We'll have your card ready in like five mins.",
            formalityVariants: {
              casual:
                "Welcome! Just need a photo ID and proof of address – utility bill or lease works. Card'll be ready in five.",
              standard:
                "Welcome to the neighborhood! All you need is a photo ID and proof of address — a utility bill or lease will work. We can have your card ready in about five minutes.",
              formal:
                "Welcome to our community. To obtain a library card, you will require a valid photo identification and documentation verifying your current address, such as a utility bill or rental agreement. The card can be processed for you within approximately five minutes.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Welcome! Just bring a photo ID and something that shows your address. A bank statement or a piece of mail works too. It only takes a few minutes to set up.",
                textZh: "欢迎！带一个带照片的证件和一个能显示地址的东西。银行对账单或信件也可以。几分钟就能办好。",
                actionHint: "准备好证件材料",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Great, here is my ID and my lease. Also, do you have books in Chinese? My kids like to read in both languages.",
            textZh: "好的，这是我的证件和租约。另外，你们有中文书吗？我的孩子喜欢双语阅读。",
            casualVersion:
              "Here you go. By the way, do you have Chinese books? My kids like reading in both languages.",
            commonMistake: {
              wrong: "Do you have Chinese books? My kids like to read two languages.",
              correct: "Do you have books in Chinese? My kids like to read in both languages.",
              explanation: "“books in Chinese” 和 “in both languages” 更自然地表达。",
            },
            formalityVariants: {
              casual: "Cool, here's my ID and lease. Hey, got any Chinese books? My kids read in both.",
              standard:
                "Great, here is my ID and my lease. Also, do you have books in Chinese? My kids like to read in both languages.",
              formal:
                "Excellent, here is my identification and my lease agreement. Furthermore, I was wondering if your collection includes books in the Chinese language, as my children enjoy reading bilingually.",
            },
          },
          {
            speaker: "them",
            role: "管理员",
            textEn:
              "Yes, we do! Our multilingual section is on the second floor. We have a nice collection of Chinese children's books and novels. If we do not have something you are looking for, we can request it from another branch through interlibrary loan.",
            textZh:
              "有的！我们的多语言区在二楼。我们有很好的中文儿童书和小说收藏。如果我们没有你找的书，可以通过馆际互借从其他分馆借调。",
            keyPhrases: [
              { en: "multilingual section", zh: "多语言区" },
              { en: "interlibrary loan", zh: "馆际互借" },
            ],
            casualVersion:
              "Yep! Multilingual section's up on the second floor. We got a good collection of Chinese kids' books and novels. And if we don't have it, we can get it from another branch via interlibrary loan.",
            formalityVariants: {
              casual:
                "Yeah! Multilingual section's on the second floor. We've got a good selection of Chinese kids' books and novels. Can always interlibrary loan if we don't have it.",
              standard:
                "Yes, we do! Our multilingual section is on the second floor. We have a nice collection of Chinese children's books and novels. If we don't have what you're looking for, we can interlibrary loan from other branches.",
              formal:
                "Indeed, we do. Our comprehensive multilingual section is situated on the second floor. We maintain a commendable collection of Chinese-language children's literature and novels. Should a specific title not be immediately available, we are able to facilitate an interlibrary loan from other branches.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "We sure do! Head upstairs to the second floor — there is a whole multilingual area with Chinese titles. And if you need something specific, we can get it from another library for you.",
                textZh:
                  "当然有！上二楼——有一整个多语言区域有中文书籍。如果你需要特定的书，我们可以从其他图书馆帮你调。",
                actionHint: "去二楼看看",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That is wonderful. How many books can I borrow at a time, and how long can I keep them?",
            textZh: "太好了。我一次可以借多少本书，可以借多长时间？",
            casualVersion: "Awesome. How many can I check out, and for how long?",
            commonMistake: {
              wrong: "How many books can I borrow at one time, and how long can I borrow them?",
              correct: "How many books can I borrow at a time, and how long can I keep them?",
              explanation: "“keep them” 在询问借期时更自然，“at a time” 更常用。",
            },
            formalityVariants: {
              casual: "Awesome. How many books can I take out, and for how long?",
              standard: "That is wonderful. How many books can I borrow at a time, and how long can I keep them?",
              formal:
                "That is excellent. Could you please inform me of the maximum number of items I may borrow concurrently, and the permissible loan duration for these materials?",
            },
          },
          {
            speaker: "them",
            role: "管理员",
            textEn:
              "You can borrow up to twenty items at a time, and the loan period is three weeks. You can renew online up to two times if no one else has a hold on it.",
            textZh: "你一次最多可以借二十件，借阅期是三周。如果没有其他人预约，你可以在线续借最多两次。",
            keyPhrases: [
              { en: "loan period", zh: "借阅期" },
              { en: "renew online", zh: "在线续借" },
            ],
            culturalNote:
              "American public libraries are free and offer far more than books — they have computers, free Wi-Fi, programs, and community events.",
            casualVersion:
              "You can grab up to twenty items at once, and you get 'em for three weeks. Can renew online twice if no one else has it on hold.",
            formalityVariants: {
              casual: "Twenty items at once, three weeks. Renew online twice if no holds.",
              standard:
                "You can borrow up to twenty items at a time, and the loan period is three weeks. You can renew online up to two times if no one else has a hold on it.",
              formal:
                "Patrons are permitted to borrow a maximum of twenty items concurrently, with a standard loan period of three weeks. Online renewals are available for up to two cycles, provided there are no outstanding holds placed on the items.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Up to twenty at once, and you get three weeks. You can renew them online twice, as long as nobody has reserved them. Easy!",
                textZh: "一次最多二十件，三周时间。可以在线续借两次，只要没人预约。很方便！",
                actionHint: "记住借阅规则",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "library-intermediate",
        titleZh: "使用图书馆学习资源",
        titleEn: "Using Library Learning Resources",
        description: "了解图书馆的学习工具和在线资源",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I heard the library offers free online learning resources. Can you tell me more about that?",
            textZh: "我听说图书馆提供免费的在线学习资源。能详细说说吗？",
            casualVersion: "Someone told me you have free online learning stuff. What do you have?",
            formalityVariants: {
              casual: "Heard the library's got free online learning stuff. What's up with that?",
              standard: "I heard the library offers free online learning resources. Can you tell me more about that?",
              formal:
                "I understand the library provides complimentary online learning resources. Would you be able to elaborate on those, please?",
            },
          },
          {
            speaker: "them",
            role: "管理员",
            textEn:
              "Yes! With your library card, you get free access to several platforms. We have Mango Languages for language learning, LinkedIn Learning for professional skills, and Libby for e-books and audiobooks.",
            textZh:
              "是的！凭借书证，你可以免费访问多个平台。我们有 Mango Languages 用于语言学习，LinkedIn Learning 用于职业技能，还有 Libby 用于电子书和有声书。",
            casualVersion: "Yep! With your library card, you get free access to stuff like Mango Languages for learning languages, LinkedIn Learning for skills, and Libby for e-books/audiobooks.",
            formalityVariants: {
              casual: "Oh yeah! Your library card gets you free access to tons of stuff. Like Mango for languages, LinkedIn Learning for job skills, and Libby for e-books and audiobooks.",
              standard: "Yes! With your library card, you get free access to several platforms. We have Mango Languages for language learning, LinkedIn Learning for professional skills, and Libby for e-books and audiobooks.",
              formal: "Indeed. Your library card grants you complimentary access to a variety of digital platforms, including Mango Languages for linguistic acquisition, LinkedIn Learning for professional development, and Libby for electronic books and audio publications.",
            },
            keyPhrases: [
              { en: "free access", zh: "免费访问" },
              { en: "professional skills", zh: "职业技能" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Absolutely! Your library card unlocks a ton of stuff. Mango for languages, LinkedIn Learning for career skills, Libby for digital books. All free, all from home.",
                textZh:
                  "当然！你的借书证可以解锁很多东西。Mango用于语言学习，LinkedIn Learning用于职业技能，Libby用于数字图书。全部免费，在家就能用。",
                actionHint: "记下可用的平台",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That is amazing. I am also looking for a quiet place to study. Do you have study rooms?",
            textZh: "太棒了。我也在找一个安静的地方学习。你们有自习室吗？",
            commonMistake: {
              wrong: "That is amazing. I am also looking for quiet place to study. Do you have study rooms?",
              correct: "That's amazing. I'm also looking for a quiet place to study. Do you have study rooms?",
              explanation: "中国人常忘了用缩写和冠词。That's/I'm 更自然；quiet place 前需加 'a'。",
            },
            formalityVariants: {
              casual: "That's awesome. I'm also hoping to find a quiet spot. Got any study rooms?",
              standard: "That is amazing. I am also looking for a quiet place to study. Do you have study rooms?",
              formal: "That is truly excellent. Furthermore, I am seeking a tranquil environment for my studies. May I inquire if private study rooms are available?",
            },
            casualVersion: "Wow, that is great. Do you have study rooms I can use?",
          },
          {
            speaker: "them",
            role: "管理员",
            textEn:
              "We have six study rooms on the third floor. You can reserve one for up to two hours at a time through our website. We also have a quiet reading room that is open all day — no reservation needed.",
            textZh:
              "我们三楼有六间自习室。你可以通过我们的网站预约，每次最多两小时。我们还有一个全天开放的安静阅览室——不需要预约。",
            casualVersion: "We've got six study rooms on the third floor. You can book one for up to two hours on our website. Plus, there's a quiet reading room that's open all day – no booking needed.",
            formalityVariants: {
              casual: "There are six study rooms on the third floor you can grab for two hours max online. And we've got a quiet reading room open all day, no reservations needed there.",
              standard: "We have six study rooms on the third floor. You can reserve one for up to two hours at a time through our website. We also have a quiet reading room that is open all day — no reservation needed.",
              formal: "A total of six study rooms are situated on the third floor. These may be reserved for a duration of up to two hours via our institutional website. Additionally, a quiet reading room is accessible throughout operating hours, requiring no prior reservation.",
            },
            keyPhrases: [
              { en: "study rooms", zh: "自习室" },
              { en: "reserve", zh: "预约" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yes, six rooms on the third floor — just book online, up to two hours each time. Or if you just need a quiet spot, the reading room on the first floor is always open.",
                textZh:
                  "有的，三楼有六间——在线预约就行，每次最多两小时。或者如果你只是需要一个安静的地方，一楼的阅览室一直开放。",
                actionHint: "了解预约方式",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Do you also offer any programs for new immigrants? Like citizenship preparation or English conversation groups?",
            textZh: "你们有为新移民提供的项目吗？比如公民考试准备或英语会话小组？",
            commonMistake: {
              wrong: "Do you also offer any programs for new immigrant? Like citizenship prepare or English conversation group?",
              correct: "Do you also offer any programs for new immigrants? Like citizenship preparation or English conversation groups?",
              explanation: "immigrant/s, group/s 需注意复数。preparation 是名词，prepare 是动词。",
            },
            formalityVariants: {
              casual: "Got any programs for new immigrants too? Like, citizenship prep or English conversation meetups?",
              standard: "Do you also offer any programs for new immigrants? Like citizenship preparation or English conversation groups?",
              formal: "Furthermore, do you provide any specialized programs for new immigrants, such as citizenship preparation courses or English language conversation circles?",
            },
            casualVersion: "Do you have stuff for new immigrants? Like citizenship prep or English groups?",
          },
          {
            speaker: "them",
            role: "管理员",
            textEn:
              "Yes, we have a weekly English conversation circle every Saturday morning — very informal and welcoming. We also run a free citizenship preparation course twice a year. The next one starts in February.",
            textZh:
              "有的，我们每周六早上有一个英语会话圈——非常随意和友好。我们每年还有两次免费的公民考试准备课程。下一期二月份开始。",
            casualVersion: "Yeah, we've got a weekly English conversation circle every Saturday morning – super informal and friendly. We also do a free citizenship prep course twice a year. Next one starts in February.",
            formalityVariants: {
              casual: "Yup, we hold an English conversation circle every Saturday morning – it's really laid-back and welcoming. Plus, we run a free citizenship prep course twice a year. February's when the next one kicks off.",
              standard: "Yes, we have a weekly English conversation circle every Saturday morning — very informal and welcoming. We also run a free citizenship preparation course twice a year. The next one starts in February.",
              formal: "Indeed, we host a weekly English conversation circle each Saturday morning, characterized by its informal and inclusive nature. Additionally, we conduct a complimentary citizenship preparation course biannually. The forthcoming session is scheduled to commence in February.",
            },
            keyPhrases: [
              { en: "conversation circle", zh: "会话圈/会话小组" },
              { en: "citizenship preparation", zh: "公民考试准备" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We do! Saturday mornings we have a casual English chat group — all levels welcome. And we offer citizenship test prep twice a year, totally free. Next round kicks off in February.",
                textZh:
                  "有的！周六早上我们有一个轻松的英语聊天小组——所有水平都欢迎。我们每年两次提供免费的公民考试辅导。下一轮二月份开始。",
                actionHint: "记下活动时间",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 学校活动 ====================
  {
    id: "education-school-event",
    category: "education",
    titleZh: "学校活动",
    titleEn: "School Events",
    description: "参与孩子学校的各类活动和志愿者机会",
    otherRole: "老师",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "school-event-basic",
        titleZh: "了解学校活动",
        titleEn: "Learning About School Events",
        description: "询问即将举行的学校活动",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi, I saw the flyer about the school science fair. Can you tell me more about it? My daughter wants to participate.",
            textZh: "你好，我看到了关于学校科学展的传单。能详细说说吗？我女儿想参加。",
            casualVersion: "Hey, I saw the science fair flyer. My daughter wants to do it. What is involved?",
            commonMistake: {
              wrong: "Can you explain more details?",
              correct: "Can you tell me more about it?",
              explanation: "直接翻译的“解释细节”不自然，“告诉我更多”更常用。",
            },
            formalityVariants: {
              casual: "Hey, saw the flyer about the school science fair. What's it all about? My daughter wants in.",
              standard:
                "Hi, I saw the flyer about the school science fair. Can you tell me more about it? My daughter wants to participate.",
              formal:
                "Good morning/afternoon, I received the flyer regarding the upcoming school science fair. Could you please provide further details on the event? My daughter has expressed an interest in participating.",
            },
          },
          {
            speaker: "them",
            role: "老师",
            textEn:
              "That is great! The science fair is on March twentieth. Students need to choose a topic, do an experiment, and create a poster board to present their findings. I can help her brainstorm ideas if she needs.",
            textZh:
              "太好了！科学展在三月二十日。学生需要选择一个主题，做一个实验，并制作一个展板来展示他们的发现。如果她需要，我可以帮她想点子。",
            keyPhrases: [
              { en: "science fair", zh: "科学展" },
              { en: "poster board", zh: "展示板" },
            ],
            casualVersion:
              "That's awesome! Science fair's March 20th. Kids gotta pick a topic, do an experiment, then make a poster board to show what they found. I can totally help her brainstorm ideas if she needs.",
            commonMistake: {
              wrong: "present their results",
              correct: "present their findings",
              explanation: "“Findings”更侧重于发现和成果，在口语和非学术场合更自然。",
            },
            formalityVariants: {
              casual:
                "That's great! It's March 20th. They gotta pick a topic, do an experiment, then make a board to show their stuff. I can help her brainstorm.",
              standard:
                "That is great! The science fair is on March twentieth. Students need to choose a topic, do an experiment, and create a poster board to present their findings. I can help her brainstorm ideas if she needs.",
              formal:
                "That's wonderful! The science fair is scheduled for March twentieth. Participants are required to select a topic, conduct an experiment, and subsequently create a poster board to effectively present their findings. I am available to assist her with brainstorming ideas, should she require it.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Awesome! It is March twentieth. She will need a topic, an experiment, and a display board. Nothing too complicated — I can help her come up with something fun.",
                textZh: "太棒了！三月二十日。她需要一个主题、一个实验和一个展示板。不会太复杂——我可以帮她想些有趣的。",
                actionHint: "了解参与要求",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds fun. Is there a deadline to sign up? And do parents need to help?",
            textZh: "听起来很有趣。有报名截止日期吗？家长需要帮忙吗？",
            casualVersion: "Sounds cool. When do we sign up, and do parents help out?",
            commonMistake: {
              wrong: "Is there a deadline for sign up?",
              correct: "Is there a deadline to sign up?",
              explanation: "“sign up”作为动词时常跟“to”连接表示目的，“for”搭配名词。",
            },
            formalityVariants: {
              casual: "Sounds fun. Any deadline to sign up? And do parents gotta help?",
              standard: "That sounds fun. Is there a deadline to sign up? And do parents need to help?",
              formal:
                "That sounds quite engaging. Could you please inform me if there is a specific deadline for registration? Additionally, is parental assistance required for this event?",
            },
          },
          {
            speaker: "them",
            role: "老师",
            textEn:
              "Sign-up is by March first. Parents are welcome to help with materials, but the research and presentation should be the student's own work. We want them to learn the process.",
            textZh:
              "报名截止三月一日。家长可以帮忙准备材料，但研究和展示应该是学生自己的成果。我们希望他们学习这个过程。",
            keyPhrases: [
              { en: "sign-up", zh: "报名" },
              { en: "own work", zh: "自己的成果" },
            ],
            casualVersion:
              "Sign up's by March 1st. Parents can help with materials, but the research and presentation should be the student's.",
            commonMistake: {
              wrong: "The deadline for sign up is March first.",
              correct: "Sign-up is by March first.",
              explanation: "“by March first”简洁明了，口语中常用。",
            },
            formalityVariants: {
              casual:
                "Sign up's by March 1st. Parents can help with materials, but the research and presentation? That's the kid's part.",
              standard:
                "Sign-up is by March first. Parents are welcome to help with materials, but the research and presentation should be the student's.",
              formal:
                "The registration deadline is March first. While parents are certainly welcome to provide assistance with materials, the research and presentation components are expected to be completed independently by the student.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Deadline is March first. Parents can definitely help out with supplies and setup, but the actual project should be their work. It is all about the learning experience.",
                textZh: "截止日期是三月一日。家长可以帮忙准备材料和布置，但项目本身应该是他们的作品。重点是学习体验。",
                actionHint: "注意截止日期",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. We also received a note about volunteering for the spring concert. How can I help?",
            textZh: "明白了。我们还收到了一封关于春季音乐会志愿者的通知。我可以怎么帮忙？",
            casualVersion: "Okay. We also got a note about volunteering for the spring concert. What can I do?",
            commonMistake: {
              wrong: "How can I do for help?",
              correct: "How can I help?",
              explanation: "“How can I help?”是标准用法，避免冗余和语法错误。",
            },
            formalityVariants: {
              casual: "Got it. Also got a note about volunteering for the spring concert. How can I help out?",
              standard: "Got it. We also received a note about volunteering for the spring concert. How can I help?",
              formal:
                "Understood. We also received a notification regarding volunteer opportunities for the spring concert. I would like to inquire about how I might be of assistance.",
            },
          },
          {
            speaker: "them",
            role: "老师",
            textEn:
              "We need help with setting up chairs, managing the snack table, and greeting families at the door. You can sign up for a shift on the volunteer sheet in the front office. Even one hour helps a lot!",
            textZh:
              "我们需要帮忙摆放椅子、管理零食桌和在门口迎接家庭。你可以在前台的志愿者表上报名一个班次。即使一个小时也帮助很大！",
            keyPhrases: [
              { en: "sign up for a shift", zh: "报名一个班次" },
              { en: "volunteer sheet", zh: "志愿者表" },
            ],
            casualVersion:
              "We need help setting up chairs, snack table, and greeting families. You can sign up for a shift on the volunteer sheet in the front office. Even an hour helps a ton!",
            culturalNote: "“shift”指一段工作时间，常用在志愿服务中。",
            commonMistake: {
              wrong: "Sign up for a time slot.",
              correct: "Sign up for a shift.",
              explanation: "“shift”在志愿服务中特指一段工作时间，更地道。",
            },
            formalityVariants: {
              casual:
                "We need help with chairs, snacks, and greeting folks. Just sign up for a spot on the sheet in the office. Even an hour's a big help!",
              standard:
                "We need help with setting up chairs, managing the snack table, and greeting families at the door. You can sign up for a shift on the volunteer sheet in the front office. Even one hour helps a lot!",
              formal:
                "We require assistance with the arrangement of seating, management of the refreshment station, and welcoming families at the entrance. You may register for a specific shift on the volunteer sign-up sheet located in the front office. Even a single hour of your time would be greatly appreciated.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "There is a bunch of stuff — setting up, running the snack station, welcoming people. Just pick a time slot on the sign-up sheet at the front desk. Any help is appreciated!",
                textZh:
                  "有很多事情——布置场地、管零食站、迎接来宾。在前台的报名表上选一个时间段就行。任何帮助都很感谢！",
                actionHint: "去前台报名",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "school-event-intermediate",
        titleZh: "参与家长委员会",
        titleEn: "Joining the PTA",
        description: "了解和加入家长教师协会",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I have been thinking about getting more involved at the school. Can you tell me about the PTA?",
            textZh: "我一直在想更多地参与学校的事务。你能告诉我关于家长教师协会的情况吗？",
            casualVersion: "I want to get more involved here. What is the PTA like?",
            commonMistake: {
              wrong: "I want to know about the PTA.",
              correct: "Can you tell me about the PTA?",
              explanation: "“I want to know” 听起来比较直接，用 “Can you tell me” 或 “I'd like to learn” 更委婉自然。",
            },
            formalityVariants: {
              casual: "Been thinking 'bout getting more involved at school. What's the deal with the PTA?",
              standard:
                "I've been thinking about getting more involved at the school. Could you tell me about the PTA?",
              formal:
                "I've been contemplating increasing my involvement with the school. Would you be so kind as to provide me with some information regarding the PTA?",
            },
          },
          {
            speaker: "them",
            role: "老师",
            textEn:
              "The PTA is a great way to get involved! They organize fundraisers, plan school events, and advocate for resources. They meet once a month, usually on the first Wednesday evening.",
            textZh: "PTA是参与的好方式！他们组织筹款、策划学校活动和争取资源。每月开一次会，通常在第一个周三晚上。",
            casualVersion: "PTA's a great way to get involved! They do fundraisers, plan events, push for resources. Meet monthly, usually first Wednesday night.",
            commonMistake: {
              wrong: "They fight for resources.",
              correct: "They advocate for resources.",
              explanation: "“fight for” 语气过强， “advocate for” 意为积极争取，更贴切。",
            },
            formalityVariants: {
              casual: "PTA's awesome for getting involved! They organize fundraisers, events, and push for resources. Meet monthly, usually first Wed evening.",
              standard: "The PTA is a great way to get involved! They organize fundraisers, plan school events, and advocate for resources. They meet once a month, typically on the first Wednesday evening.",
              formal: "The Parent Teacher Association offers an excellent avenue for engagement. Their responsibilities include organizing fundraising initiatives, planning school-wide events, and advocating for necessary resources. Meetings are convened monthly, generally on the first Wednesday evening.",
            },
            keyPhrases: [
              { en: "PTA", zh: "家长教师协会" },
              { en: "fundraisers", zh: "筹款活动" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Oh, the PTA would love to have you! They do fundraising, event planning, and work with the school to get more resources. Meetings are the first Wednesday of each month.",
                textZh: "哦，PTA一定很欢迎你加入！他们做筹款、活动策划，还和学校合作争取更多资源。每月第一个周三开会。",
                actionHint: "了解PTA活动",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I would love to join, but my English is not perfect. Will that be okay?",
            textZh: "我很想加入，但我的英语不完美。这没关系吗？",
            culturalNote: "美国学校通常鼓励家长参与，不因语言设限。",
            formalityVariants: {
              casual: "I'd love to join, but my English isn't great. Is that cool?",
              standard: "I would love to join, but my English isn't perfect. Would that be acceptable?",
              formal: "I am very interested in joining, but I must admit my English proficiency is not entirely perfect. Would this pose any difficulties?",
            },
            casualVersion: "I'd love to, but my English isn't great. Is that a problem?",
          },
          {
            speaker: "them",
            role: "老师",
            textEn:
              "Absolutely okay! We have several parents who speak different languages. The PTA president actually mentioned they want more diverse perspectives. Your input would be really valuable.",
            textZh:
              "完全没问题！我们有好几位说不同语言的家长。PTA主席还提到他们希望有更多元化的视角。你的参与会非常有价值。",
            casualVersion: "Totally fine! Got parents who speak all sorts of languages. President actually said they want more diverse views. Your input'd be super valuable.",
            commonMistake: {
              wrong: "Your opinion is very important.",
              correct: "Your input would be really valuable.",
              explanation: "“input” 指提供的信息、想法或贡献，比 “opinion” 范围更广，更贴合语境。",
            },
            formalityVariants: {
              casual: "Totally fine! We've got parents who speak all sorts of languages. President actually said they want more diverse perspectives. Your input'd be super valuable.",
              standard: "Absolutely okay! We have several parents who speak different languages. The PTA president actually mentioned they want more diverse perspectives. Your input would be really valuable.",
              formal: "That is absolutely permissible! We indeed have a number of parents who are fluent in various languages. In fact, the PTA president has explicitly expressed a desire for more diverse perspectives. Your contributions would undoubtedly be exceptionally valuable.",
            },
            keyPhrases: [
              { en: "diverse perspectives", zh: "多元化的视角" },
              { en: "your input would be valuable", zh: "你的参与会很有价值" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Don't worry about that at all! We have parents from all backgrounds. They are always looking for fresh perspectives and new ideas. Your voice matters.",
                textZh: "完全不用担心！我们有来自各种背景的家长。他们总是在寻找新鲜的视角和想法。你的声音很重要。",
                actionHint: "放心加入",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That is really encouraging. Is there a membership fee to join?",
            textZh: "这真的很鼓舞人心。加入需要交会费吗？",
            commonMistake: {
              wrong: "Is there membership fee to join?",
              correct: "Is there a membership fee to join?",
              explanation: "“membership fee” 是可数名词，前面需要加不定冠词 “a”。",
            },
            formalityVariants: {
              casual: "That's great! Gotta pay to join?",
              standard: "That is truly encouraging. Is there a membership fee required to join?",
              formal: "That is indeed quite encouraging. May I inquire as to whether there is an associated membership fee for joining?",
            },
            casualVersion: "That makes me feel better. Do I have to pay to join?",
          },
          {
            speaker: "them",
            role: "老师",
            textEn:
              "There is a small annual membership fee of fifteen dollars, but it is optional — you can still attend meetings and volunteer without paying. The fee goes directly toward school programs and supplies.",
            textZh: "有一个十五美元的年费，但这是可选的——不交也可以参加会议和做志愿者。费用直接用于学校项目和用品。",
            casualVersion: "Yeah, there's a small annual fee, fifteen bucks, but it's optional — you can still hit meetings and volunteer without paying. Money goes straight to school programs and stuff.",
            commonMistake: {
              wrong: "The fee is for school programs.",
              correct: "The fee goes directly toward school programs.",
              explanation: "“goes toward” 表示资金流向某个用途，比 “is for” 更强调资金的实际投入方向。",
            },
            formalityVariants: {
              casual: "Yeah, there's a small annual fee, fifteen bucks, but it's optional — you can still come to meetings and volunteer without paying. Money goes right to school programs and supplies.",
              standard: "There is a small annual membership fee of fifteen dollars, but it is optional — you can still attend meetings and volunteer without paying. The fee goes directly toward school programs and supplies.",
              formal: "Indeed, there is a nominal annual membership fee of fifteen dollars, however, it is entirely optional. One may still attend meetings and offer volunteer services without remitting this payment. The entirety of the fee is allocated directly to school programs and essential supplies.",
            },
            keyPhrases: [
              { en: "membership fee", zh: "会费" },
              { en: "optional", zh: "可选的" },
            ],
            culturalNote:
              "PTAs in the US are a key way for parents to be involved in their children's education and connect with other families in the community.",
            alternativeExpressions: [
              {
                textEn:
                  "It is just fifteen bucks a year, and it is totally optional. You can show up and help out either way. The money goes straight to student activities and classroom supplies.",
                textZh: "只要十五美元一年，完全自愿。不管交不交都可以来帮忙。钱直接用于学生活动和课堂用品。",
                actionHint: "了解费用用途",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 报告欺凌 ====================
  {
    id: "education-bullying-report",
    category: "education",
    titleZh: "报告欺凌",
    titleEn: "Reporting Bullying",
    description: "向学校辅导员报告孩子遇到的欺凌问题",
    otherRole: "辅导员",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "bullying-report-basic",
        titleZh: "初次报告欺凌",
        titleEn: "First Report of Bullying",
        description: "第一次向学校反映孩子被欺凌的情况",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "I need to talk to someone about a problem my son is having at school. Some kids have been picking on him because of his accent.",
            textZh: "我需要和人谈谈我儿子在学校遇到的问题。一些孩子因为他的口音在欺负他。",
            casualVersion:
              "I need to talk about something. Some kids have been messing with my son because of how he talks.",
            culturalNote: "在美国，直接向学校报告欺凌行为是很普遍的，家长不必觉得尴尬或试图私下解决。",
            commonMistake: {
              wrong: "Some kids are bullying him",
              correct: "Some kids have been picking on him",
              explanation: "Bullying 更多指严重的欺凌，picking on 更像反复的小打小闹，但也会升级。",
            },
            formalityVariants: {
              casual:
                "Wanna talk about a problem my son's having at school. Kids are picking on him 'cause of his accent.",
              standard:
                "I need to talk to someone about a problem my son is having at school. Some kids have been picking on him because of his accent.",
              formal:
                "I would like to schedule a discussion regarding a concerning issue my son is experiencing at school. He has been subjected to teasing due to his accent by some of his peers.",
            },
          },
          {
            speaker: "them",
            role: "辅导员",
            textEn:
              "I am so sorry to hear that. Thank you for coming to me. Can you tell me more about what has been happening? How long has this been going on?",
            textZh: "很抱歉听到这些。感谢您来找我。能详细说说发生了什么吗？这种情况持续多久了？",
            keyPhrases: [
              { en: "picking on", zh: "欺负/找茬" },
              { en: "how long has this been going on", zh: "这种情况持续多久了" },
            ],
            casualVersion:
              "So sorry to hear that. Thanks for coming in. Can you tell me more about what's been happening? How long's this been going on?",
            formalityVariants: {
              casual: "Sorry to hear that. Thanks for coming. What's been happening? How long?",
              standard:
                "I am so sorry to hear that. Thank you for coming to me. Can you tell me more about what has been happening? How long has this been going on?",
              formal:
                "I am truly sorry to learn of this situation. I appreciate you bringing this to my attention. Would you please elaborate on the specifics of these incidents? Furthermore, could you indicate the duration of these occurrences?",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Oh no, I am really sorry. You did the right thing by telling me. Can you walk me through what has been happening? When did it start?",
                textZh: "哦不，我真的很抱歉。你来告诉我是对的。能跟我说说具体发生了什么吗？什么时候开始的？",
                actionHint: "详细说明情况",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "It started about two weeks ago. They make fun of the way he speaks English and call him names at lunch. He does not want to go to school anymore.",
            textZh: "大约两周前开始的。他们取笑他说英语的方式，午餐时叫他绰号。他现在不想上学了。",
            casualVersion:
              "About two weeks now. They laugh at his English and call him names at lunch. He hates going to school now.",
            commonMistake: {
              wrong: "They laugh at his English",
              correct: "They make fun of the way he speaks English",
              explanation: "make fun of 更自然地表达“嘲笑”，laugh at 语义上更直接但可能显得生硬。",
            },
            formalityVariants: {
              casual:
                "Started like two weeks ago. They make fun of his English, call him names at lunch. Now he just hates school.",
              standard:
                "It started about two weeks ago. They make fun of the way he speaks English and call him names at lunch. He does not want to go to school anymore.",
              formal:
                "This behavior commenced approximately two weeks prior. They have been deriding his English pronunciation and using derogatory terms towards him during the lunch period. Consequently, his desire to attend school has significantly diminished.",
            },
          },
          {
            speaker: "them",
            role: "辅导员",
            textEn:
              "That is completely unacceptable, and I want you to know we take this very seriously. I will talk to the students involved and their parents. Does your son know who specifically is doing this?",
            textZh:
              "这完全不可接受，我想让您知道我们非常重视这件事。我会和涉事的学生及其家长谈话。您儿子知道具体是谁在做这些吗？",
            keyPhrases: [
              { en: "take this very seriously", zh: "非常重视" },
              { en: "completely unacceptable", zh: "完全不可接受" },
            ],
            casualVersion:
              "That's totally unacceptable, and I want you to know we take this super seriously. I'll talk to the kids involved and their parents. Does your son know exactly who's doing this?",
            commonMistake: {
              wrong: "we pay attention to this seriously",
              correct: "we take this very seriously",
              explanation: "take seriously 是固定搭配，表达“认真对待”之意。",
            },
            formalityVariants: {
              casual:
                "Totally unacceptable, we take this really seriously. I'll talk to those kids and their parents. Does your son know exactly who it is?",
              standard:
                "That is completely unacceptable, and I want you to know we take this very seriously. I will talk to the students involved and their parents. Does your son know who specifically is doing this?",
              formal:
                "This behavior is entirely unacceptable, and I assure you that we regard this matter with the utmost seriousness. I will be addressing this with the students implicated and their respective parents. Is your son able to identify the specific individuals involved?",
            },
            alternativeExpressions: [
              {
                textEn:
                  "That is not okay, and we have zero tolerance for bullying here. I am going to investigate this right away. Can he identify the kids involved?",
                textZh: "这不行的，我们对欺凌零容忍。我会立即调查这件事。他能认出涉事的孩子吗？",
                actionHint: "提供具体信息",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Yes, he mentioned two boys in his class. I can give you their names. What steps will the school take to protect him?",
            textZh: "是的，他提到了班上的两个男孩。我可以给你他们的名字。学校会采取什么措施来保护他？",
            casualVersion:
              "Yeah, he told me about two boys. I can tell you who. What is the school going to do about it?",
            formalityVariants: {
              casual:
                "Yeah, he said two boys in his class. I can give you their names. What's the school gonna do to protect him?",
              standard:
                "Yes, he mentioned two boys in his class. I can give you their names. What steps will the school take to protect him?",
              formal:
                "Yes, he identified two male students within his classroom. I am prepared to provide you with their names. What specific measures will the school implement to ensure his protection?",
            },
          },
          {
            speaker: "them",
            role: "辅导员",
            textEn:
              "First, I will have a conversation with those students today and notify their parents. We will increase supervision during lunch. I will also check in with your son daily to make sure he feels safe. If it continues, we have further disciplinary measures.",
            textZh:
              "首先，我今天就会和那些学生谈话并通知他们的家长。我们会加强午餐时间的监管。我也会每天和你儿子沟通，确保他感到安全。如果继续发生，我们有进一步的纪律措施。",
            keyPhrases: [
              { en: "increase supervision", zh: "加强监管" },
              { en: "disciplinary measures", zh: "纪律措施" },
            ],
            casualVersion:
              "First, I'm gonna talk to those students today and call their parents. We'll beef up supervision during lunch. I'll also check in with your son every day to make sure he feels safe. If it keeps happening, we've got more disciplinary stuff.",
            commonMistake: {
              wrong: "I will check his condition",
              correct: "I will also check in with your son daily",
              explanation: "check in with someone 表示“与某人联系/跟进”，表达关心和了解情况，更自然。",
            },
            formalityVariants: {
              casual:
                "First, I'm talking to those kids today and calling their parents. We'll watch them more at lunch. I'll check on your son daily to make sure he's safe. If it keeps up, we have more consequences.",
              standard:
                "First, I will have a conversation with those students today and notify their parents. We will increase supervision during lunch. I will also check in with your son daily to make sure he feels safe. If it continues, we have further disciplinary measures.",
              formal:
                "Initially, I will engage in discussions with the aforementioned students today and subsequently inform their parents. We shall augment the level of supervision during the lunch period. Furthermore, I will personally confer with your son on a daily basis to ascertain his sense of security. Should these incidents persist, we possess additional disciplinary protocols.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Here is what I will do: talk to those boys and call their parents today. We will have an extra eye on lunchtime. I will check on your son every day. And if this does not stop, there will be serious consequences.",
                textZh:
                  "这是我会做的：今天和那些男孩谈话并打电话给他们父母。我们会在午餐时间加强关注。我每天都会关心你儿子。如果不停止，会有严重后果。",
                actionHint: "了解后续措施",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "bullying-followup-intermediate",
        titleZh: "跟进处理情况",
        titleEn: "Following Up on the Report",
        description: "之前报告了欺凌问题后进行跟进",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "I wanted to follow up on the bullying situation I reported last week. My son says things have gotten a little better, but he is still anxious about going to school.",
            textZh: "我想跟进上周报告的欺凌情况。我儿子说情况好了一些，但他上学还是很焦虑。",
            casualVersion:
              "Just checking in about the bullying thing. He says it is a bit better but he is still nervous about school.",
            formalityVariants: {
              casual:
                "Wanted to follow up on the bullying thing from last week. Kid says it's better, but he's still nervous about school.",
              standard:
                "I wanted to follow up on the bullying situation I reported last week. My son says things have gotten a little better, but he is still anxious about going to school.",
              formal:
                "I wished to follow up regarding the bullying incident I reported last week. My son indicates that while the situation has shown some improvement, he continues to experience apprehension concerning his attendance at school.",
            },
          },
          {
            speaker: "them",
            role: "辅导员",
            textEn:
              "I am glad there has been some improvement. I spoke with both boys and their parents, and we have implemented a buddy system for your son during lunch and recess. The anxiety is normal — it takes time to feel safe again.",
            textZh:
              "很高兴有一些改善。我和两个男孩及其家长都谈过了，我们为你儿子在午餐和课间实施了伙伴制度。焦虑是正常的——需要时间才能再次感到安全。",
            casualVersion: "Glad things are better. Talked to both boys and their parents, and we set up a buddy system for your son at lunch and recess. The anxiety's normal—takes time to feel safe again.",
            formalityVariants: {
              casual: "Glad things are better. Talked to both boys and their folks, and we got a buddy system going for your son at lunch/recess. The anxiety's normal—takes time to feel safe again.",
              standard: "I am glad there has been some improvement. I spoke with both boys and their parents, and we have implemented a buddy system for your son during lunch and recess. The anxiety is normal — it takes time to feel safe again.",
              formal: "I am pleased to confirm that there has been discernible improvement. I have conferred with both students and their respective parents, and we have successfully instituted a peer support system for your son during designated break periods. The presence of anxiety is a common and understandable reaction; a full return to a sense of security naturally requires a period of adjustment.",
            },
            keyPhrases: [
              { en: "buddy system", zh: "伙伴制度" },
              { en: "feel safe again", zh: "重新感到安全" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Good to hear it is getting better. I met with both families and we have set up a buddy system so your son always has someone with him. The anxiety will ease with time — it is totally understandable.",
                textZh:
                  "很高兴在好转。我和两个家庭都见面了，我们安排了伙伴制度让你儿子始终有人陪伴。焦虑会随着时间缓解——这完全可以理解。",
                actionHint: "了解伙伴制度安排",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Thank you for setting that up. Is there anything else we can do to help him build confidence? He used to be such an outgoing kid.",
            textZh: "谢谢你安排这些。还有什么我们能做的来帮助他建立自信吗？他以前是个很外向的孩子。",
            formalityVariants: {
              casual: "Thanks for setting that up. Anything else we can do to help him get his confidence back? He used to be so outgoing.",
              standard: "Thank you for setting that up. Is there anything else we can do to help him build confidence? He used to be such an outgoing kid.",
              formal: "I appreciate you arranging those provisions. Are there any further measures we might undertake to assist him in developing his confidence? He was previously a highly gregarious child.",
            },
            casualVersion:
              "Thanks for that. Anything else we can do? He used to be so outgoing and now he is so quiet.",
          },
          {
            speaker: "them",
            role: "辅导员",
            textEn:
              "I would recommend our social skills group — it meets every Thursday. Kids practice making friends and handling conflicts in a safe setting. It might also help to connect him with an after-school club that matches his interests.",
            textZh:
              "我推荐我们的社交技能小组——每周四举行。孩子们在安全的环境中练习交朋友和处理冲突。让他参加一个符合他兴趣的课后俱乐部也可能有帮助。",
            casualVersion: "I'd recommend our social skills group—it's every Thursday. Kids practice making friends, handling conflicts in a safe space. Also might help to get him into an after-school club that matches his interests.",
            formalityVariants: {
              casual: "I'd say try our social skills group—it's Thursdays. Kids learn to make friends and deal with problems safely. Might also be good to get him into an after-school club he likes.",
              standard: "I would recommend our social skills group — it meets every Thursday. Kids practice making friends and handling conflicts in a safe setting. It might also help to connect him with an after-school club that matches his interests.",
              formal: "I would suggest enrolling him in our social skills development group, which convenes each Thursday. This program provides an environment for children to refine their abilities in forming friendships and navigating interpersonal conflicts. Furthermore, facilitating his involvement in an after-school club aligned with his particular interests could prove beneficial.",
            },
            keyPhrases: [
              { en: "social skills group", zh: "社交技能小组" },
              { en: "handling conflicts", zh: "处理冲突" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We have a social skills group on Thursdays that I think would be perfect for him. It helps kids practice friendships and deal with tough situations. Also, joining a club could really help — what is he into?",
                textZh:
                  "我们周四有一个社交技能小组，我觉得非常适合他。帮助孩子练习交友和处理困难情况。还有，加入一个俱乐部也很有帮助——他喜欢什么？",
                actionHint: "考虑社交技能小组",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "He loves drawing and basketball. Are there clubs for those?",
            textZh: "他喜欢画画和篮球。有这方面的俱乐部吗？",
            formalityVariants: {
              casual: "He's into drawing and basketball. Got clubs for that?",
              standard: "He loves drawing and basketball. Are there clubs for those?",
              formal: "He has a keen interest in both drawing and basketball. Do you offer clubs catering to those particular activities?",
            },
            casualVersion: "He is really into art and basketball. Do you have clubs for that?",
          },
          {
            speaker: "them",
            role: "辅导员",
            textEn:
              "We have both! The art club meets on Tuesdays and the basketball club is on Wednesdays. Both are great for building friendships. I will introduce him to the club leaders so he has a friendly face on his first day.",
            textZh:
              "两个都有！美术俱乐部周二活动，篮球俱乐部周三活动。两个都很适合建立友谊。我会把他介绍给俱乐部的负责人，这样他第一天就有个熟悉的面孔。",
            casualVersion: "Yep, we got both! Art club's Tuesdays, basketball's Wednesdays. Both are awesome for making friends. I'll introduce him to the leaders so he knows a friendly face on day one.",
            formalityVariants: {
              casual: "Yep, got both! Art club's Tuesdays, hoops club's Wednesdays. Both good for making friends. I'll introduce him to the leaders so he sees a friendly face on day one.",
              standard: "We have both! The art club meets on Tuesdays and the basketball club is on Wednesdays. Both are great for building friendships. I will introduce him to the club leaders so he has a friendly face on his first day.",
              formal: "Indeed, we offer both options. The art club convenes on Tuesdays, and the basketball club gathers on Wednesdays. Both activities are highly conducive to fostering interpersonal connections. I shall personally facilitate his introduction to the respective club leaders, thereby ensuring he encounters a familiar and welcoming individual on his initial day.",
            },
            keyPhrases: [
              { en: "building friendships", zh: "建立友谊" },
              { en: "friendly face", zh: "友好的面孔/熟人" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Perfect — we have an art club on Tuesdays and basketball on Wednesdays. Both are great for making friends. I will personally connect him with the coaches so he feels welcome right away.",
                textZh:
                  "太好了——周二有美术俱乐部，周三有篮球俱乐部。两个都很适合交朋友。我会亲自把他介绍给教练，让他立刻感到受欢迎。",
                actionHint: "记下俱乐部时间",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 校车 ====================
  {
    id: "education-school-bus",
    category: "education",
    titleZh: "校车",
    titleEn: "School Bus",
    description: "了解和安排孩子的校车接送服务",
    otherRole: "交通办",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "bus-registration-basic",
        titleZh: "注册校车服务",
        titleEn: "Registering for School Bus",
        description: "为孩子注册校车接送服务",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi, I would like to sign my daughter up for the school bus. We live on Oak Street. Is our address on a bus route?",
            textZh: "你好，我想给女儿注册校车。我们住在橡树街。我们的地址在校车路线上吗？",
            casualVersion:
              "Hey, I want to get my daughter on the school bus. We live on Oak Street. Does the bus come by there?",
            commonMistake: {
              wrong: "I want to sign my daughter up for the school bus.",
              correct: "I would like to sign my daughter up for the school bus.",
              explanation: "“I want” 在美国听起来很生硬，用 “I would like” 更礼貌。",
            },
            formalityVariants: {
              casual: "Hey, wanna sign my daughter up for the bus. We're on Oak Street. Is that on a route?",
              standard:
                "Hi, I would like to sign my daughter up for the school bus. We live on Oak Street. Is our address on a bus route?",
              formal:
                "Good morning/afternoon, I am calling to inquire about enrolling my daughter in the school bus service. We reside on Oak Street. Could you please confirm if our address falls within an established bus route?",
            },
          },
          {
            speaker: "them",
            role: "交通办",
            textEn:
              "Let me look that up. Yes, Oak Street is on Route Seven. The bus stop is at the corner of Oak and Maple, and pick-up time is seven fifteen in the morning.",
            textZh: "让我查一下。是的，橡树街在七号路线上。校车站在橡树街和枫树街的拐角，早上七点十五分接。",
            keyPhrases: [
              { en: "bus route", zh: "校车路线" },
              { en: "pick-up time", zh: "接送时间" },
            ],
            casualVersion:
              "Lemme check. Yep, Oak Street's on Route Seven. Stop's at Oak and Maple corner, pick-up's at seven fifteen AM.",
            commonMistake: {
              wrong: "pick-up time is at seven fifteen morning.",
              correct: "pick-up time is seven fifteen in the morning.",
              explanation: "表达上午时间要用 “in the morning” 而不是 “morning”。",
            },
            formalityVariants: {
              casual:
                "Gimme a sec to check. Yup, Oak Street's on Route Seven. Bus stop's at Oak and Maple, pick-up's 7:15 AM.",
              standard:
                "Let me look that up. Yes, Oak Street is on Route Seven. The bus stop is at the corner of Oak and Maple, and pick-up time is seven fifteen in the morning.",
              formal:
                "Allow me a moment to verify that information. Yes, Oak Street is indeed serviced by Route Seven. The designated bus stop is located at the intersection of Oak and Maple, with a scheduled morning pick-up time of seven fifteen.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Let me check. Yep, you are on Route Seven! The stop is right at Oak and Maple — the bus comes at seven fifteen. She should be there a few minutes early.",
                textZh:
                  "我查查。对，你们在七号路线上！站点就在橡树和枫树街的交叉口——校车七点十五分到。她应该提前几分钟到。",
                actionHint: "记下站点位置和时间",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What time does the bus drop off in the afternoon?",
            textZh: "下午校车几点送到？",
            casualVersion: "What time does she get dropped off after school?",
            commonMistake: {
              wrong: "What time does the bus arrive in the afternoon?",
              correct: "What time does the bus drop off in the afternoon?",
              explanation: "“drop off” 是接送孩子的专用词，比 “arrive” 更准确。",
            },
            formalityVariants: {
              casual: "When's the bus drop-off in the afternoon?",
              standard: "What time does the bus drop off in the afternoon?",
              formal: "Could you please inform me of the scheduled afternoon drop-off time for the bus service?",
            },
          },
          {
            speaker: "them",
            role: "交通办",
            textEn:
              "The afternoon drop-off is at three forty-five. If there is a schedule change due to weather or early dismissal, you will receive a text notification through our alert system.",
            textZh:
              "下午送达时间是三点四十五分。如果因为天气或提前放学而有时间变更，你会通过我们的通知系统收到短信通知。",
            keyPhrases: [
              { en: "drop-off", zh: "送达/放下" },
              { en: "early dismissal", zh: "提前放学" },
            ],
            casualVersion:
              "Afternoon drop-off's at 3:45. If the schedule changes 'cause of weather or early release, we'll text ya through our alert system.",
            commonMistake: {
              wrong: "If schedule changes because weather or early dismissal, you will get a text.",
              correct:
                "If there is a schedule change due to weather or early dismissal, you will receive a text notification through our alert system.",
              explanation: "注意冠词和介词的使用，“due to” 更正式和地道。",
            },
            formalityVariants: {
              casual:
                "Afternoon drop-off's 3:45. Any schedule changes from weather or early dismissal, you'll get a text from our alert system.",
              standard:
                "The afternoon drop-off is at three forty-five. If there is a schedule change due to weather or early dismissal, you will receive a text notification through our alert system.",
              formal:
                "The scheduled afternoon drop-off time is three forty-five. Should there be any modifications to the schedule, such as those necessitated by inclement weather or an early school dismissal, a text notification will be disseminated to you via our automated alert system.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "She will be back at three forty-five. And any time there is a change — snow days, early release, whatever — you will get a text alert right away.",
                textZh: "她三点四十五分回来。任何时候有变动——雪天、提前放学什么的——你会立刻收到短信提醒。",
                actionHint: "注册通知系统",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. She is only six years old. Is there someone on the bus to help the younger kids?",
            textZh: "很高兴知道。她才六岁。校车上有人帮助年幼的孩子吗？",
            casualVersion: "She is only six. Is there anyone on the bus to watch the little ones?",
            commonMistake: {
              wrong: "Is there people on the bus to help young kids?",
              correct: "Is there someone on the bus to help the younger kids?",
              explanation: "“people” 是复数，用 “someone” 或 “anyone” 更自然，且 “the younger kids” 更具体。",
            },
            formalityVariants: {
              casual: "Okay, good. She's only six. Is there someone on the bus for the little kids?",
              standard:
                "Good to know. She is only six years old. Is there someone on the bus to help the younger kids?",
              formal:
                "That's good to hear. My daughter is only six years old. I was wondering if there is a dedicated staff member on the bus to assist the younger children.",
            },
          },
          {
            speaker: "them",
            role: "交通办",
            textEn:
              "Yes, every bus has a driver and a bus monitor for the elementary routes. The younger children sit in the front rows, and the monitor makes sure everyone gets on and off safely.",
            textZh:
              "有的，每辆小学路线的校车都有一名司机和一名校车管理员。低年级的孩子坐前排，管理员确保每个人安全上下车。",
            keyPhrases: [
              { en: "bus monitor", zh: "校车管理员" },
              { en: "elementary routes", zh: "小学路线" },
            ],
            casualVersion:
              "Yeah, every bus for elementary routes has a driver and a monitor. Little kids sit up front, and the monitor makes sure everyone gets on/off okay.",
            culturalNote: "美国校车会有专门的“bus monitor”协助儿童。",
            commonMistake: {
              wrong: "the monitor make sure everyone go on and off safely.",
              correct: "the monitor makes sure everyone gets on and off safely.",
              explanation: "“monitor” 是单数第三人称，动词要用 “makes”；“gets on and off” 是正确表达。",
            },
            formalityVariants: {
              casual:
                "Yup, elementary routes have a driver and a monitor. Little ones are up front, and the monitor keeps an eye on 'em getting on/off safe.",
              standard:
                "Yes, every bus has a driver and a bus monitor for the elementary routes. The younger children sit in the front rows, and the monitor makes sure everyone gets on and off safely.",
              formal:
                "Affirmative, each school bus serving elementary routes is staffed by both a driver and a dedicated bus monitor. The younger students are seated in the forward rows, and the monitor's responsibility is to ensure the safe boarding and disembarking of all passengers.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Absolutely. All elementary buses have a monitor on board in addition to the driver. Little kids sit up front and the monitor helps them on and off. Safety is our top priority.",
                textZh:
                  "当然。所有小学校车除了司机还有一名管理员。小孩子坐前面，管理员帮助他们上下车。安全是我们的第一要务。",
                actionHint: "了解安全措施",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "bus-issue-intermediate",
        titleZh: "处理校车问题",
        titleEn: "Handling Bus Issues",
        description: "反映校车服务中遇到的问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "I am calling because the bus has been arriving late three times this week. My daughter has been standing outside in the cold for over twenty minutes each time.",
            textZh: "我打电话是因为这周校车已经迟到了三次。我女儿每次都在外面冷风中站了超过二十分钟。",
            casualVersion:
              "The bus has been late three times this week. My kid has been waiting outside in the cold for twenty-plus minutes.",
            commonMistake: {
              wrong: "My daughter stands outside for over twenty minutes every time.",
              correct: "My daughter has been standing outside in the cold for over twenty minutes each time.",
              explanation: '强调动作持续性，用"each time"比"every time"更自然。',
            },
            formalityVariants: {
              casual:
                "Calling 'cause the bus's been late three times this week. My daughter's been out in the cold for like twenty minutes each time.",
              standard:
                "I am calling because the bus has been arriving late three times this week. My daughter has been standing outside in the cold for over twenty minutes each time.",
              formal:
                "I am contacting you regarding a persistent issue with the bus service. The bus has arrived late on three occasions this week, resulting in my daughter waiting outdoors in inclement weather for periods exceeding twenty minutes per instance.",
            },
          },
          {
            speaker: "them",
            role: "交通办",
            textEn:
              "I am sorry about that. Let me check what has been going on with Route Seven. It looks like there has been road construction on Elm Street causing delays. I apologize for the inconvenience.",
            textZh: "很抱歉。让我查查七号路线怎么了。看起来榆树街有道路施工导致延误。给您带来不便我很抱歉。",
            casualVersion: "Oh, my bad. Let me check what's up with Route Seven. Looks like road construction on Elm Street's causing delays. Sorry for the hassle.",
            formalityVariants: {
              casual: "My apologies. Let me just check what's going on with Route 7. Looks like construction on Elm Street's causing delays. Super sorry for the inconvenience.",
              standard: "I am sorry about that. Let me check what has been going on with Route Seven. It looks like there has been road construction on Elm Street causing delays. I apologize for the inconvenience.",
              formal: "My sincerest apologies. Allow me to investigate the status of Route Seven. It appears there is ongoing road construction on Elm Street, which is contributing to these delays. I profoundly regret any inconvenience this may have caused.",
            },
            keyPhrases: [
              { en: "road construction", zh: "道路施工" },
              { en: "causing delays", zh: "导致延误" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I am so sorry about that. Let me pull up Route Seven. Okay, I see — there is construction on Elm Street that has been slowing things down. That is not acceptable and I am going to address it.",
                textZh:
                  "非常抱歉。让我调出七号路线。好的，我看到了——榆树街的施工一直在造成延误。这不可接受，我会处理的。",
                actionHint: "了解迟到原因",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I understand construction happens, but can the route be adjusted? Or at least can parents be notified when the bus will be late?",
            textZh: "我理解施工难免，但路线可以调整吗？或者至少在校车晚点时通知家长？",
            commonMistake: {
              wrong: "I understand construction happen.",
              correct: "I understand construction happens.",
              explanation: "动词要与主语单复数保持一致，此处'construction'为不可数名词，动词用单数。",
            },
            formalityVariants: {
              casual: "I get construction happens, but can we change the route? Or at least tell parents when it's gonna be late?",
              standard: "I understand construction happens, but can the route be adjusted? Or at least can parents be notified when the bus will be late?",
              formal: "While I acknowledge the necessity of construction, I inquire if an alteration to the current route is feasible. Alternatively, could a notification system be implemented to inform parents of impending delays?",
            },
            casualVersion: "I get it, but can you change the route? Or at least let us know when it is running late?",
          },
          {
            speaker: "them",
            role: "交通办",
            textEn:
              "That is a fair point. I will work with the routing team to see if we can reroute around the construction. In the meantime, I will make sure real-time delay notifications are sent out through our app.",
            textZh: "说得有道理。我会和路线团队沟通看看能否绕过施工区。同时，我会确保通过我们的APP发送实时延误通知。",
            casualVersion: "Good point. I'll talk to the routing team to see if we can go around the construction. In the meantime, I'll make sure real-time delay alerts go out on our app.",
            formalityVariants: {
              casual: "You've got a point. I'll work with the routing team to see if we can reroute around it. For now, I'll make sure real-time delay notifications are sent via our app.",
              standard: "That is a fair point. I will work with the routing team to see if we can reroute around the construction. In the meantime, I will make sure real-time delay notifications are sent out through our app.",
              formal: "That is a valid observation. I will collaborate with the routing team to explore the possibility of rerouting to circumvent the construction. Concurrently, I will ensure that real-time delay notifications are disseminated through our application.",
            },
            keyPhrases: [
              { en: "reroute", zh: "改线/绕行" },
              { en: "real-time delay notifications", zh: "实时延误通知" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You are absolutely right. I am going to talk to our routing people about an alternate path. And I will personally make sure the delay alerts go out right away when it happens.",
                textZh: "你说得完全对。我会和负责路线的人讨论替代路径。我也会亲自确保延误警报在发生时立即发出。",
                actionHint: "确认后续改进措施",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Thank you. How soon can the route change take effect? The forecast says it will be even colder next week.",
            textZh: "谢谢。路线变更多快可以生效？天气预报说下周会更冷。",
            commonMistake: {
              wrong: "How fast can the route change?",
              correct: "How soon can the route change take effect?",
              explanation: "\"take effect\"是固定搭配，表示“生效”。\"how fast\"不用于指时间。",
            },
            formalityVariants: {
              casual: "Thanks. How quick can that route change happen? Forecast says next week's even colder.",
              standard: "Thank you. How soon can the route change take effect? The forecast says it will be even colder next week.",
              formal: "Thank you. What is the estimated timeframe for the route adjustment to be implemented? The meteorological forecast indicates a further decrease in temperature for the upcoming week.",
            },
            casualVersion: "Thanks. When will the new route start? It is supposed to get even colder next week.",
          },
          {
            speaker: "them",
            role: "交通办",
            textEn:
              "I will try to have an updated route by Monday. If not, I will arrange for the bus to arrive five minutes early at your stop so your daughter does not have to wait as long. I will call you back by Friday with an update.",
            textZh:
              "我会尽量在周一之前更新路线。如果不行，我会安排校车在你的站点提前五分钟到达，这样你女儿不用等那么久。我周五之前会回电话告诉你最新情况。",
            casualVersion: "I'll try to get an updated route by Monday. If not, I'll have the bus come five mins early to your stop so your daughter doesn't wait as long. I'll call you back with an update by Friday.",
            commonMistake: {
              wrong: "I will call you back on Friday with an update.",
              correct: "I will call you back by Friday with an update.",
              explanation: "\"by Friday\"表示不迟于周五，包括周五，比\"on Friday\"（特指周五当天）更自然。",
            },
            formalityVariants: {
              casual: "I'll try to get that route updated by Monday. If not, I'll arrange for the bus to arrive five minutes early at your stop so your daughter doesn't have to wait. I'll give you a call back by Friday with an update.",
              standard: "I will try to have an updated route by Monday. If not, I will arrange for the bus to arrive five minutes early at your stop so your daughter does not have to wait as long. I will call you back by Friday with an update.",
              formal: "I will endeavor to implement an updated route by Monday. Should that not be feasible, I will make arrangements for the bus to arrive five minutes prior to its scheduled time at your stop, thereby reducing your daughter's waiting period. I will contact you with an update no later than Friday.",
            },
            keyPhrases: [
              { en: "updated route", zh: "更新的路线" },
              { en: "call you back", zh: "回电话给你" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I am aiming for Monday. Worst case, I will bump up the pick-up time at your stop by five minutes so she is not out there as long. Either way, I will give you a call Friday with the plan.",
                textZh:
                  "我争取周一。最坏的情况，我会把你站点的接送时间提前五分钟这样她不用等那么久。不管怎样，周五我会打电话告诉你方案。",
                actionHint: "等待周五的回复",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
];
