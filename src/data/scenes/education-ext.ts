import type { PresetScene } from "../scene-types";

export const EDUCATION_SCENES_EXT: PresetScene[] = [
  // ==================== 大学经济援助 ====================
  {
    id: "education-college-financial-aid",
    category: "education",
    titleZh: "大学经济援助",
    titleEn: "College Financial Aid",
    description: "向财务援助办公室咨询奖学金和贷款",
    otherRole: "财务顾问",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "financial-aid-basic",
        titleZh: "了解援助类型",
        titleEn: "Understanding Aid Types",
        description: "第一次咨询经济援助选项",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi, I am a new student and I need help understanding what financial aid options are available to me.",
            textZh: "你好，我是新生，需要帮助了解有哪些经济援助选项。",
            casualVersion: "Hey, I need to figure out what financial aid I can get.",
            commonMistake: {
              wrong: "What financial aid options I have?",
              correct: "What financial aid options are available to me?",
              explanation: '英语疑问句语序，且"available to me"更自然。',
            },
            formalityVariants: {
              casual: "Hey, I'm a new student. Need help figuring out financial aid stuff.",
              standard:
                "Hi, I'm a new student and I need help understanding what financial aid options are available to me.",
              formal:
                "Good morning/afternoon, I am a new student and I would appreciate some assistance in understanding the financial aid options that may be available to me.",
            },
          },
          {
            speaker: "them",
            role: "财务顾问",
            textEn:
              "Welcome! There are several types of aid: grants and scholarships, which you do not have to pay back, and student loans, which you do. Have you filled out the FAFSA yet?",
            textZh: "欢迎！有几种类型的援助：助学金和奖学金不用还，学生贷款需要还。你填过FAFSA了吗？",
            keyPhrases: [
              { en: "grants and scholarships", zh: "助学金和奖学金" },
              { en: "FAFSA", zh: "联邦学生援助申请表" },
            ],
            casualVersion:
              "Hey, welcome! We got a few types of aid: grants/scholarships, don't gotta pay those back, and student loans, which, yeah, you do. Filled out the FAFSA yet?",
            culturalNote: "FAFSA是美国联邦助学金申请表，国际学生一般不能申请。",
            commonMistake: {
              wrong: "Have you filled FAFSA yet?",
              correct: "Have you filled out the FAFSA yet?",
              explanation: '填写表格常用"fill out"，且特定名词前常加"the"。',
            },
            formalityVariants: {
              casual:
                "Welcome! So there's a few types of aid: grants & scholarships, which you don't gotta pay back, and student loans, which you do. FAFSA done yet?",
              standard:
                "Welcome! There are several types of aid: grants and scholarships, which you do not have to pay back, and student loans, which you do. Have you filled out the FAFSA yet?",
              formal:
                "Welcome to the university! Regarding financial assistance, there are typically several categories: grants and scholarships, which are non-repayable funds, and student loans, which require repayment. May I ask if you have completed the Free Application for Federal Student Aid (FAFSA)?",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Great question! Basically there is free money — grants and scholarships — and then loans you pay back later. Step one is filling out the FAFSA. Have you done that?",
                textZh: "好问题！基本上有免费的钱——助学金和奖学金——然后是以后要还的贷款。第一步是填写FAFSA。你填了吗？",
                actionHint: "确认是否填过FAFSA",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Not yet. I am an international student — can I still apply for the FAFSA?",
            textZh: "还没有。我是国际学生——我还能申请FAFSA吗？",
            casualVersion: "No, not yet. I am international though — can I still do it?",
            commonMistake: {
              wrong: "Can I still apply FAFSA?",
              correct: "Can I still apply for the FAFSA?",
              explanation: '动词"apply"后接宾语前常加介词"for"；特定名词前加"the"。',
            },
            formalityVariants: {
              casual: "Nah, not yet. I'm an international student — can I even apply for FAFSA?",
              standard: "Not yet. I am an international student — can I still apply for the FAFSA?",
              formal:
                "I have not yet completed it. As an international student, I am curious if I am still eligible to apply for the FAFSA.",
            },
          },
          {
            speaker: "them",
            role: "财务顾问",
            textEn:
              "Unfortunately, international students are not eligible for federal aid through FAFSA. However, our university offers institutional scholarships and assistantships specifically for international students. Let me show you what is available.",
            textZh:
              "很遗憾，国际学生不能通过FAFSA获得联邦援助。但我们大学提供专门面向国际学生的校内奖学金和助教职位。让我给你看看有什么可用的。",
            keyPhrases: [
              { en: "institutional scholarships", zh: "校内奖学金" },
              { en: "assistantships", zh: "助教/助研职位" },
            ],
            casualVersion:
              "Unfortunately, FAFSA's not for international students. But our university *does* have its own scholarships and assistantships just for you guys. Lemme show you what's up.",
            culturalNote: "Assistantships (助教职位)常提供学费减免和生活费。",
            commonMistake: {
              wrong: "Let me show you what available.",
              correct: "Let me show you what is available.",
              explanation: '英文句子通常需要动词，"is"不可省略。',
            },
            formalityVariants: {
              casual:
                "Bummer, FAFSA's a no-go for international students. But we *do* have university scholarships and assistantships for you. I'll show you what's out there.",
              standard:
                "Unfortunately, international students are not eligible for federal aid through FAFSA. However, our university offers institutional scholarships and assistantships specifically for international students. Let me show you what is available.",
              formal:
                "Regrettably, international students are not typically eligible for federal financial aid programs administered via FAFSA. Nevertheless, our institution does provide a range of internal scholarships and graduate assistantship opportunities specifically designed for our international student population. I would be pleased to review the options with you.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "FAFSA is only for US citizens and residents, sorry. But don't worry — we have our own scholarships and TA positions for international students. Let me pull up the list.",
                textZh:
                  "FAFSA只面向美国公民和居民，抱歉。但别担心——我们有自己的面向国际学生的奖学金和助教职位。我给你调出清单。",
                actionHint: "了解替代选项",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be great. Are there any deadlines I should be aware of?",
            textZh: "那太好了。有什么截止日期我需要注意的吗？",
            casualVersion: "Yes please. When are the deadlines?",
            commonMistake: {
              wrong: "Are there any deadlines I should know?",
              correct: "Are there any deadlines I should be aware of?",
              explanation: '"Be aware of"在此语境中比"know"更自然、得体。',
            },
            formalityVariants: {
              casual: "Awesome. Any deadlines I gotta watch out for?",
              standard: "That would be great. Are there any deadlines I should be aware of?",
              formal:
                "That would be most helpful. Could you please inform me of any pertinent deadlines I should note?",
            },
          },
          {
            speaker: "them",
            role: "财务顾问",
            textEn:
              "Most scholarship deadlines are April first for the fall semester. For assistantships, you apply through your department — those are rolling, so the sooner you apply the better.",
            textZh:
              "大多数奖学金截止日期是四月一日，针对秋季学期。助教职位通过你的院系申请——那些是滚动的，所以越早申请越好。",
            keyPhrases: [
              { en: "rolling deadline", zh: "滚动截止日期" },
              { en: "the sooner the better", zh: "越早越好" },
            ],
            casualVersion:
              "Scholarship deadlines are usually April 1st for fall. Assistantships? Apply through your department — they're rolling, so earlier the better.",
            culturalNote: '"Rolling"指滚动录取/申请，没有固定截止日期，越早申请越有利。',
            commonMistake: {
              wrong: "Assistantships, you apply your department.",
              correct: "For assistantships, you apply through your department.",
              explanation: '"通过某个部门申请"需用"through your department"。',
            },
            formalityVariants: {
              casual:
                "Most scholarships are due April 1st for the fall. Assistantships are through your department — they're rolling, so get on it quick.",
              standard:
                "Most scholarship deadlines are April first for the fall semester. For assistantships, you apply through your department — those are rolling, so the sooner you apply the better.",
              formal:
                "Typically, deadlines for most scholarships for the fall semester are observed on April first. Regarding assistantship positions, applications are processed directly through your academic department; these operate on a rolling basis, so submitting your application promptly would be advantageous.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "April first for most scholarships. Assistantships are handled by each department and they fill spots as they go, so get your application in early.",
                textZh: "大多数奖学金四月一日截止。助教职位由各院系处理，名额先到先得，所以尽早提交申请。",
                actionHint: "记下关键截止日期",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "financial-aid-intermediate",
        titleZh: "申请奖学金和贷款",
        titleEn: "Applying for Scholarships and Loans",
        description: "具体了解申请流程和所需材料",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "I found a few scholarships I want to apply for. One requires an essay about leadership. Do you have any tips?",
            textZh: "我找到了几个想申请的奖学金。其中一个需要写一篇关于领导力的文章。你有什么建议吗？",
            casualVersion: "I want to apply for a couple scholarships. One needs a leadership essay. Any tips?",
            commonMistake: {
              wrong: "I have some scholarships I want to apply.",
              correct: "I found a few scholarships I want to apply for.",
              explanation: "“apply for” 是固定短语，表示“申请…”，不可省略 for。",
            },
            formalityVariants: {
              casual: "Found some scholarships wanna apply for. One needs a leadership essay. Any tips?",
              standard:
                "I've identified a few scholarships I'd like to apply for. One of them requires an essay on leadership. Do you have any advice?",
              formal:
                "I have identified several scholarship opportunities for which I intend to apply. One particular scholarship necessitates the submission of an essay concerning leadership. Could you perhaps offer some guidance on this matter?",
            },
          },
          {
            speaker: "them",
            role: "财务顾问",
            textEn:
              "Focus on specific experiences rather than general statements. Talk about a time you led a project or solved a problem. The committee wants to see real examples, not just claims.",
            textZh:
              "专注于具体经历而不是笼统的陈述。谈谈你领导一个项目或解决一个问题的经历。评委们想看到真实的例子，而不仅仅是声明。",
            casualVersion: "Just focus on real experiences, not just general stuff. Like, tell 'em 'bout a time you led a project or fixed a problem. They wanna see actual examples, not just you sayin' things.",
            commonMistake: {
              wrong: "Talk about you led a project.",
              correct: "Talk about a time you led a project.",
              explanation: "需要在一个表示时间的词组（如'a time'或'when'）之后再接引导从句的'you'。",
            },
            formalityVariants: {
              casual: "Just focus on real-life examples, not vague statements. Tell them about leading a project or solving an issue. They want solid proof, not just talk.",
              standard: "It's best to focus on specific experiences rather than making general statements. Describe a particular instance where you led a project or successfully resolved a problem. The committee is looking for concrete examples, not merely assertions.",
              formal: "It is advisable to emphasize concrete experiences as opposed to abstract generalizations. Kindly elaborate on a specific occasion where you exercised leadership in a project or successfully mitigated a challenge. The admissions committee seeks verifiable instances, not merely declarative statements.",
            },
            keyPhrases: [
              { en: "specific experiences", zh: "具体经历" },
              { en: "the committee", zh: "评审委员会" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Be specific. Don't just say you are a leader — tell a story about when you actually led something. Real examples win scholarships, not vague statements.",
                textZh:
                  "要具体。不要只说你是领导者——讲一个你真正领导过什么的故事。真实的例子能赢得奖学金，笼统的陈述不行。",
                actionHint: "准备具体案例",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Got it. I also noticed there is a work-study option. How does that work for international students?",
            textZh: "明白了。我还注意到有勤工俭学选项。国际学生怎么参与？",
            culturalNote: "国际学生参与美国勤工俭学有严格的时间和地点限制。",
            commonMistake: {
              wrong: "How is that work for international students?",
              correct: "How does that work for international students?",
              explanation: "提问时，动词“work”需要助动词“does”来构成疑问句。",
            },
            formalityVariants: {
              casual: "Got it. Also, saw there's work-study. How's that for international students?",
              standard: "Understood. I also observed there is a work-study option available. How does that typically function for international students?",
              formal: "I comprehend. Furthermore, I noted the availability of a work-study program. Could you elucidate its operational procedures for international students, please?",
            },
            casualVersion: "Makes sense. What about work-study? Can international students do that?",
          },
          {
            speaker: "them",
            role: "财务顾问",
            textEn:
              "International students on F-1 visas can work on campus up to twenty hours per week during the semester. We have positions in the library, dining hall, and research labs. It is a great way to earn while you learn.",
            textZh:
              "F-1签证的国际学生在学期内每周可以在校内工作最多二十小时。我们在图书馆、食堂和研究实验室都有职位。这是边学边赚的好方式。",
            casualVersion: "F-1 international students can work on campus, like, twenty hours a week during the semester. We've got spots in the library, dining hall, research labs. It's a good way to make some cash while you're studying.",
            commonMistake: {
              wrong: "International students F-1 visas can work.",
              correct: "International students on F-1 visas can work.",
              explanation: "“on F-1 visas” 是正确用法，表示“持有F-1签证”。",
            },
            formalityVariants: {
              casual: "F-1 international students can work campus, up to twenty hours a week during the semester. We've got library, dining, lab jobs. It's a sweet way to earn while you learn.",
              standard: "International students holding F-1 visas are permitted to work on campus for a maximum of twenty hours per week during the academic semester. Available positions include those in the library, dining facilities, and research laboratories. It presents an excellent opportunity to gain income concurrent with your studies.",
              formal: "For international students possessing F-1 visas, on-campus employment is authorized for a duration not exceeding twenty hours per week throughout the academic term. Opportunities are present within various departments, including the library, dining services, and research facilities. This arrangement offers a commendable pathway to accrue earnings while pursuing one's education.",
            },
            keyPhrases: [
              { en: "on campus", zh: "校内" },
              { en: "twenty hours per week", zh: "每周二十小时" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "With an F-1 visa, you can work on campus — up to twenty hours a week while classes are in session. Lots of options: library, cafeteria, labs. It helps with expenses and looks good on your resume.",
                textZh:
                  "拿F-1签证可以在校内工作——上课期间每周最多二十小时。选择很多：图书馆、食堂、实验室。既能帮忙付开销又能丰富简历。",
                actionHint: "了解校内工作机会",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Where do I apply for on-campus jobs? Is there a job board?",
            textZh: "在哪里申请校内工作？有招聘栏吗？",
            commonMistake: {
              wrong: "Where I apply for on-campus jobs?",
              correct: "Where do I apply for on-campus jobs?",
              explanation: "疑问句中缺少助动词“do”。",
            },
            formalityVariants: {
              casual: "Where do I apply for campus jobs? Got a job board?",
              standard: "Where would I go to apply for on-campus employment? Is there a dedicated job board for such listings?",
              formal: "Could you please inform me of the proper procedure for applying for on-campus employment? Furthermore, is there a designated job board or portal for these listings?",
            },
            casualVersion: "Where do I find campus jobs? Is there a website or something?",
          },
          {
            speaker: "them",
            role: "财务顾问",
            textEn:
              "Yes, all campus jobs are posted on our student employment portal. You log in with your student ID and can apply directly. I will write down the link for you. New positions are posted every week.",
            textZh:
              "是的，所有校内工作都发布在我们的学生就业门户上。你用学生证登录就可以直接申请。我把链接写给你。每周都有新职位发布。",
            casualVersion: "Yeah, all campus jobs are on our student employment portal. Just log in with your student ID and apply straight away. I'll get you the link. New stuff's up every week.",
            commonMistake: {
              wrong: "You log in your student ID.",
              correct: "You log in with your student ID.",
              explanation: "“log in with” 是固定搭配，表示“用…登录”。",
            },
            formalityVariants: {
              casual: "Yep, all campus jobs are on our student employment portal. Just log in with your student ID, apply right there. I'll give you the link. They post new stuff every week.",
              standard: "Yes, indeed. All available on-campus positions are advertised on our dedicated student employment portal. You may log in using your student identification number and proceed with direct application. I will provide you with the relevant link. Please note that new vacancies are posted on a weekly basis.",
              formal: "Affirmative. All available on-campus employment opportunities are disseminated via our official student employment portal. Access is granted through your unique student identification credentials, allowing for direct application. I shall furnish you with the corresponding web address. Kindly be advised that new positions are updated weekly.",
            },
            keyPhrases: [
              { en: "student employment portal", zh: "学生就业门户" },
              { en: "apply directly", zh: "直接申请" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Everything is on the student jobs website. Just log in with your student account and browse. New listings go up weekly. Here, let me write down the URL for you.",
                textZh: "所有东西都在学生招聘网站上。用学生账号登录就能浏览。每周更新新职位。来，我把网址写给你。",
                actionHint: "记下就业门户链接",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 大学住宿 ====================
  {
    id: "education-college-housing",
    category: "education",
    titleZh: "大学住宿",
    titleEn: "College Housing",
    description: "申请和了解大学宿舍住宿",
    otherRole: "住宿办",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "housing-basic",
        titleZh: "申请宿舍",
        titleEn: "Applying for Dorms",
        description: "了解宿舍选项和申请流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I am an incoming freshman and I want to apply for on-campus housing. What are my options?",
            textZh: "你好，我是即将入学的大一新生，想申请校内住宿。有什么选项？",
            casualVersion: "Hey, I'm starting in the fall and need a dorm. What do you have?",
            commonMistake: {
              wrong: "I want to apply for on-campus housing.",
              correct: "I'd like to apply for on-campus housing.",
              explanation: "“I want” 在英语中直接表示需求，有时显得不够礼貌，用 “I'd like to” 更委婉和客气。",
            },
            formalityVariants: {
              casual: "Hey, I'm an incoming freshman, wanna apply for on-campus housing. What're my options?",
              standard: "Hi, I am an incoming freshman and I want to apply for on-campus housing. What are my options?",
              formal:
                "Good morning/afternoon, I am an incoming freshman interested in applying for on-campus housing. Could you please outline the available options?",
            },
          },
          {
            speaker: "them",
            role: "住宿办",
            textEn:
              "We have three residence halls for freshmen. Single rooms are twelve hundred per month, doubles are eight hundred. All include Wi-Fi, laundry, and a meal plan.",
            textZh: "我们有三栋新生宿舍楼。单人间每月一千二百美元，双人间八百。都包含Wi-Fi、洗衣和餐饮计划。",
            keyPhrases: [
              { en: "residence halls", zh: "宿舍楼" },
              { en: "meal plan", zh: "餐饮计划" },
            ],
            casualVersion:
              "Got three halls for freshmen. Singles're twelve hundred a month, doubles eight hundred. All that includes Wi-Fi, laundry, and a meal plan.",
            formalityVariants: {
              casual:
                "We got three halls for freshmen. Singles are 1200 a month, doubles 800. All include Wi-Fi, laundry, and a meal plan.",
              standard:
                "We have three residence halls for freshmen. Single rooms are twelve hundred per month, doubles are eight hundred. All include Wi-Fi, laundry, and a meal plan.",
              formal:
                "We offer three distinct residence halls specifically for incoming freshmen. Single occupancy rooms are priced at twelve hundred dollars per month, while double occupancy rooms are eight hundred dollars per month. All rates encompass Wi-Fi, laundry facilities, and a comprehensive meal plan.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "For freshmen, we have three dorm buildings. You can go single for twelve hundred a month or share a double for eight hundred. Everything comes with Wi-Fi, laundry, and meals.",
                textZh: "新生有三栋宿舍楼。单人间每月一千二百，双人间每月八百。都附带Wi-Fi、洗衣和餐饮。",
                actionHint: "比较价格选项",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "A double room sounds fine. Can I request a roommate, or is it assigned randomly?",
            textZh: "双人间可以。我可以指定室友还是随机分配？",
            casualVersion: "I will go with a double. Can I pick my roommate?",
            commonMistake: {
              wrong: "Can I request roommate?",
              correct: "Can I request a roommate?",
              explanation: "“roommate” 是可数名词，前面需要加不定冠词 “a”。",
            },
            formalityVariants: {
              casual: "Double room sounds good. Can I ask for a specific roommate, or is it random?",
              standard: "A double room sounds fine. Can I request a roommate, or is it assigned randomly?",
              formal:
                "A double room would be acceptable. May I inquire if it's possible to request a specific roommate, or are assignments made randomly?",
            },
          },
          {
            speaker: "them",
            role: "住宿办",
            textEn:
              "You can request a specific roommate if you both list each other on the application. Otherwise we match you based on a lifestyle questionnaire — sleep schedule, study habits, things like that.",
            textZh:
              "如果你们双方都在申请中列出对方就可以指定室友。否则我们会根据生活方式问卷来匹配——作息时间、学习习惯等。",
            keyPhrases: [
              { en: "lifestyle questionnaire", zh: "生活方式问卷" },
              { en: "request a roommate", zh: "指定室友" },
            ],
            casualVersion:
              "Yeah, you can request a specific roommate if you both list each other on the app. Otherwise, we just match you based on a lifestyle questionnaire — y'know, sleep schedule, study habits, stuff like that.",
            formalityVariants: {
              casual:
                "You can request one if you both list each other on the app. Otherwise, we match based on a questionnaire — sleep, study habits, stuff like that.",
              standard:
                "You can request a specific roommate if you both list each other on the application. Otherwise we match you based on a lifestyle questionnaire — sleep schedule, study habits, things like that.",
              formal:
                "You may indeed request a specific roommate, provided both parties indicate each other on their respective applications. Otherwise, we facilitate a match based on a comprehensive lifestyle questionnaire, which considers factors such as sleep schedule, study habits, and similar criteria.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "If you know someone, just put each other's names on the form. If not, we use a survey about your habits to find a good match. It usually works out really well.",
                textZh:
                  "如果你认识人，在表格上互相填上名字就行。如果不认识，我们用一个关于你习惯的问卷来找到好的匹配。通常效果很好。",
                actionHint: "考虑是否有想指定的室友",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "When is the deadline to apply for housing? I do not want to miss out.",
            textZh: "住宿申请截止日期是什么时候？我不想错过。",
            casualVersion: "When is the housing deadline? I don't want to miss it.",
            culturalNote: "“miss out” 是一个常用口语，意为错过机会或没有参与到某事中。学习这个短语能让表达更地道。",
            commonMistake: {
              wrong: "When is deadline to apply for housing?",
              correct: "When is THE deadline to apply for housing?",
              explanation: "“deadline” 是特指的截止日期，前面需要加定冠词 “the”。",
            },
            formalityVariants: {
              casual: "When's the deadline for housing? Don't wanna miss out.",
              standard: "When is the deadline to apply for housing? I do not want to miss out.",
              formal:
                "Could you please inform me of the application deadline for on-campus housing? I am keen to ensure I submit my application in a timely manner.",
            },
          },
          {
            speaker: "them",
            role: "住宿办",
            textEn:
              "The priority deadline is May first. After that, rooms are assigned on a first-come, first-served basis. I would strongly recommend applying before then to get your first choice.",
            textZh: "优先截止日期是五月一日。之后按先到先得分配。我强烈建议在那之前申请以获得你的第一选择。",
            keyPhrases: [
              { en: "first-come, first-served", zh: "先到先得" },
              { en: "priority deadline", zh: "优先截止日期" },
            ],
            casualVersion:
              "Priority deadline's May 1st. After that, rooms are first-come, first-served. Seriously recommend applying before then to get your first pick.",
            commonMistake: {
              wrong: "I would strong recommend applying.",
              correct: "I would strongly recommend applying.",
              explanation: "“recommend” 是动词，需要用副词 “strongly” 来修饰，而不是形容词 “strong”。",
            },
            formalityVariants: {
              casual:
                "Priority deadline's May 1st. After that, it's first-come, first-served. Definitely apply before then for your top choice.",
              standard:
                "The priority deadline is May first. After that, rooms are assigned on a first-come, first-served basis. I would strongly recommend applying before then to get your first choice.",
              formal:
                "The priority deadline for applications is May 1st. Subsequent to this date, room assignments will be conducted on a first-come, first-served basis. I would highly advise submitting your application prior to the priority deadline to maximize your chances of securing your preferred choice.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Get your application in by May first for the best selection. After that it is first come first served and rooms go fast. Apply early!",
                textZh: "五月一日之前提交申请可以有最好的选择。之后就是先到先得，房间很快就没了。早点申请！",
                actionHint: "尽快提交申请",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "housing-intermediate",
        titleZh: "宿舍生活问题",
        titleEn: "Dorm Life Issues",
        description: "处理宿舍生活中遇到的问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "I am having some issues with my roommate. He stays up very late with loud music and I cannot sleep. I have tried talking to him but nothing changed.",
            textZh: "我和室友有些问题。他很晚还开着大声的音乐，我没法睡觉。我试过和他谈但没有改变。",
            casualVersion:
              "My roommate blasts music late at night and I can't sleep. I talked to him but he won't stop.",
            culturalNote: "美国大学处理室友冲突通常通过RA调解，这可能不同于国内。",
            commonMistake: {
              wrong: "I have some issues with my roommate.",
              correct: "I am having some issues with my roommate.",
              explanation: "表示正在发生的问题，用现在进行时更自然。",
            },
            formalityVariants: {
              casual:
                "Got some issues with my roommate. He's up super late, loud music, can't sleep. Tried talking to him, but it didn't change anything.",
              standard:
                "I am having some issues with my roommate. He stays up very late with loud music and I cannot sleep. I have tried talking to him but nothing changed.",
              formal:
                "I am experiencing some difficulties with my roommate. He consistently plays loud music late into the night, which significantly disrupts my sleep. I have attempted to address this matter with him directly, but unfortunately, the situation remains unresolved.",
            },
          },
          {
            speaker: "them",
            role: "住宿办",
            textEn:
              "I am sorry you are dealing with that. Since you have already tried talking to him directly, the next step is a mediation session with your Resident Advisor. They are trained to help resolve roommate conflicts.",
            textZh:
              "很抱歉你遇到这种情况。既然你已经试过直接沟通了，下一步是和你的宿舍管理员进行调解。他们受过帮助解决室友冲突的训练。",
            casualVersion: "Sorry you're dealing with that. Since you already tried talking to him, next step's mediation with your RA. They're trained to help with roommate stuff.",
            culturalNote: "RA是美国大学特有职位，通常是学生，非专业管理人员。",
            commonMistake: {
              wrong: "Sorry you are suffering that.",
              correct: "Sorry you are dealing with that.",
              explanation: "\"deal with\" 指处理问题，更自然。",
            },
            formalityVariants: {
              casual: "Ugh, sorry you're going through that. Since you already tried talking to him, you should do a mediation session with your RA. They're good at sorting out roommate drama.",
              standard: "I am sorry you are dealing with that. Since you have already tried talking to him directly, the next step is a mediation session with your Resident Advisor. They are trained to help resolve roommate conflicts.",
              formal: "I regret to hear that you are experiencing this difficulty. Given that you have already attempted direct communication with your roommate, the appropriate next course of action would be to schedule a mediation session with your designated Resident Advisor. Our RAs are specifically trained to facilitate resolutions for interpersonal conflicts among residents.",
            },
            keyPhrases: [
              { en: "mediation session", zh: "调解会议" },
              { en: "Resident Advisor", zh: "宿舍管理员/RA" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That is tough. Since talking didn't work, let me get your RA involved. They do mediation sessions all the time and can help you two work out a compromise.",
                textZh: "那挺难的。既然谈话没用，让我请你的RA介入。他们经常做调解，可以帮你们达成妥协。",
                actionHint: "联系RA安排调解",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What if mediation does not work? Is it possible to switch rooms?",
            textZh: "如果调解不起作用怎么办？可以换房间吗？",
            commonMistake: {
              wrong: "What if mediation not work?",
              correct: "What if mediation does not work?",
              explanation: "疑问句中动词\"work\"前需加助动词\"does\"且要否定。",
            },
            formalityVariants: {
              casual: "And if mediation doesn't work? Can I just switch rooms?",
              standard: "What if mediation does not work? Is it possible to switch rooms?",
              formal: "Should the mediation prove unsuccessful, would a room transfer be a viable option?",
            },
            casualVersion: "What if that doesn't fix it? Can I just switch rooms?",
          },
          {
            speaker: "them",
            role: "住宿办",
            textEn:
              "If mediation fails, yes, we can arrange a room transfer. We usually have a few open spots each semester. It takes about a week to process. You would not lose your housing deposit.",
            textZh: "如果调解失败，可以安排换房。每个学期通常有几个空位。处理大约需要一周。你不会损失住宿押金。",
            casualVersion: "If mediation fails, yeah, we can totally set up a room transfer. Usually got a few open spots each semester. Takes about a week to process. And you won't lose your housing deposit.",
            commonMistake: {
              wrong: "We usually have some empty rooms each semester.",
              correct: "We usually have a few open spots each semester.",
              explanation: "\"open spots\" 更自然地表示空缺或可用名额。",
            },
            formalityVariants: {
              casual: "If mediation doesn't work out, yeah, we can totally get you a room transfer. We usually have some openings each semester. Takes about a week to sort out. Don't worry, you won't lose your deposit.",
              standard: "If mediation fails, yes, we can arrange a room transfer. We usually have a few open spots each semester. It takes about a week to process. You would not lose your housing deposit.",
              formal: "Should mediation prove unsuccessful, we can certainly facilitate a room transfer. We typically maintain a limited number of available vacancies each semester. The processing period generally requires approximately one week. Please be assured that your housing deposit would not be forfeited.",
            },
            keyPhrases: [
              { en: "room transfer", zh: "换房" },
              { en: "housing deposit", zh: "住宿押金" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yes, room switches are an option if things don't improve. We usually have openings. It takes about a week and your deposit stays with you. Let's try mediation first though.",
                textZh:
                  "是的，如果情况没有改善，换房是一个选项。通常有空位。大约需要一周，押金会保留。不过我们先试试调解。",
                actionHint: "先尝试调解",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, let us try mediation first. How do I set that up?",
            textZh: "好的，我们先试试调解。怎么安排？",
            commonMistake: {
              wrong: "How do I make that?",
              correct: "How do I set that up?",
              explanation: "\"set up\" 指安排、组织，更符合语境。",
            },
            formalityVariants: {
              casual: "Alright, let's try mediation first. How do I get that going?",
              standard: "Okay, let us try mediation first. How do I set that up?",
              formal: "Very well, I agree that mediation should be pursued as the initial course of action. Could you please advise on the procedure for arranging this?",
            },
            casualVersion: "Alright, let's do mediation first. How do I get that going?",
          },
          {
            speaker: "them",
            role: "住宿办",
            textEn:
              "I will email your RA right now and copy you on it. They will reach out within forty-eight hours to schedule a time that works for both of you. In the meantime, if you feel unsafe, you can use our emergency room swap option.",
            textZh:
              "我现在就发邮件给你的RA并抄送你。他们会在四十八小时内联系你们安排合适的时间。同时，如果你感到不安全，可以使用我们的紧急换房选项。",
            casualVersion: "I'll email your RA right now and copy you on it. They'll hit you up within 48 hours to schedule a time that works for both of y'all. Meantime, if you feel unsafe, there's an emergency room swap option.",
            culturalNote: "强调人身安全，并提供紧急换房选项是美国大学的常见做法。",
            commonMistake: {
              wrong: "I will email your RA and let you see it.",
              correct: "I will email your RA right now and copy you on it.",
              explanation: "\"copy you on it\" 是抄送邮件的惯用表达。",
            },
            formalityVariants: {
              casual: "I'll shoot an email to your RA right now and CC you. They'll get back to you within 48 hours to figure out a good time for both of you. Oh, and if you feel unsafe at all, there's an emergency room swap option.",
              standard: "I will email your RA right now and copy you on it. They will reach out within forty-eight hours to schedule a time that works for both of you. In the meantime, if you feel unsafe, you can use our emergency room swap option.",
              formal: "I will initiate an email to your Resident Advisor immediately, and you will be included as a recipient. They will contact you within forty-eight hours to arrange a mutually convenient time for a meeting. Furthermore, should you experience any concerns regarding your safety during this period, our emergency room swap option is available for your utilization.",
            },
            keyPhrases: [
              { en: "copy you on it", zh: "抄送你" },
              { en: "emergency room swap", zh: "紧急换房" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I will shoot your RA an email right now — you will be copied. They should get back to you within two days. And just so you know, if it ever feels unsafe, we have an emergency swap process.",
                textZh:
                  "我现在就给你的RA发邮件——会抄送你。他们两天内会回复。还有，如果你感到不安全，我们有紧急换房流程。",
                actionHint: "等待RA联系",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 大学学术顾问 ====================
  {
    id: "education-college-advisor",
    category: "education",
    titleZh: "大学学术顾问",
    titleEn: "College Academic Advisor",
    description: "与学术顾问讨论学业规划和毕业要求",
    otherRole: "学术顾问",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "advisor-basic",
        titleZh: "了解毕业要求",
        titleEn: "Understanding Graduation Requirements",
        description: "咨询毕业所需的学分和课程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I want to make sure I am on track to graduate on time. Can you review my progress with me?",
            textZh: "我想确认我能按时毕业。你能和我一起看看我的进度吗？",
            casualVersion: "Can you check if I am on track to graduate on time?",
            commonMistake: {
              wrong: "I want to confirm I can graduate on time. Can you review my progress with me?",
              correct: "I want to make sure I am on track to graduate on time. Can you review my progress with me?",
              explanation:
                "“confirm” 通常用于事实的最终确认，而 “make sure I am on track” 更侧重于确保事情进展顺利，符合预期。",
            },
            formalityVariants: {
              casual: "Just wanna make sure I'm on track to graduate. Can we look at my progress?",
              standard: "I want to make sure I am on track to graduate on time. Can you review my progress with me?",
              formal:
                "Good morning/afternoon, I would appreciate it if we could review my academic progress to ensure I am meeting all requirements for a timely graduation.",
            },
          },
          {
            speaker: "them",
            role: "学术顾问",
            textEn:
              "Of course! Let me pull up your degree audit. You have completed sixty-two credits so far. You need one hundred twenty to graduate, so you are right on schedule for a junior.",
            textZh:
              "当然！让我调出你的学位审核。你到目前为止完成了六十二个学分。毕业需要一百二十个，所以你作为大三学生进度正好。",
            keyPhrases: [
              { en: "degree audit", zh: "学位审核" },
              { en: "on schedule", zh: "按计划进行" },
            ],
            casualVersion:
              "Sure thing! Lemme pull up your audit. You got 62 credits so far. Need 120 to grad, so you're totally on schedule for a junior.",
            formalityVariants: {
              casual:
                "Sure! Let me grab your degree audit real quick. You've got 62 credits done, and you need 120 total, so you're totally on track as a junior.",
              standard:
                "Of course! Let me pull up your degree audit. You have completed sixty-two credits so far. You need one hundred twenty to graduate, so you are right on schedule for a junior.",
              formal:
                "Certainly. I will access your degree audit. You have accumulated sixty-two credits to date. As the total requirement for graduation is one hundred twenty credits, your current progress is entirely appropriate for a student at the junior level.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Sure, let me check your audit. Sixty-two credits done, one twenty needed. You are right where you should be as a junior. Looking good!",
                textZh:
                  "好的，我看看你的审核。完成了六十二个学分，需要一百二十个。作为大三学生你的进度刚好。看起来不错！",
                actionHint: "确认目前进度正常",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "That is good to hear. Are there any specific requirements I still need to complete besides credits?",
            textZh: "这真好。除了学分还有什么具体要求我需要完成的吗？",
            casualVersion: "Good. Anything else I need besides the credits?",
            formalityVariants: {
              casual: "That's good. Anything else I gotta do besides credits?",
              standard:
                "That is good to hear. Are there any specific requirements I still need to complete besides credits?",
              formal:
                "That is reassuring news. In addition to the credit requirements, are there any other specific programmatic or departmental requirements that I must fulfill?",
            },
          },
          {
            speaker: "them",
            role: "学术顾问",
            textEn:
              "You still need one more humanities elective and your senior capstone project. I also see you have not fulfilled the foreign language requirement yet — two semesters of a language.",
            textZh: "你还需要一门人文选修课和毕业设计项目。我还看到你还没有完成外语要求——需要两个学期的语言课。",
            keyPhrases: [
              { en: "capstone project", zh: "毕业设计项目" },
              { en: "foreign language requirement", zh: "外语要求" },
            ],
            casualVersion:
              "Yeah, you still need one more humanities elective and your senior capstone. Also, looks like you haven't done the foreign language requirement yet — that's two semesters of a language.",
            formalityVariants: {
              casual:
                "You've still got one more humanities elective and your senior capstone project to do. And you haven't hit the foreign language requirement yet – that's two semesters.",
              standard:
                "You still need one more humanities elective and your senior capstone project. I also see you have not fulfilled the foreign language requirement yet — two semesters of a language.",
              formal:
                "You are required to complete one additional humanities elective and your senior capstone project. Furthermore, it appears you have not yet satisfied the foreign language requirement, which entails two semesters of a foreign language.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "A few things left: one humanities elective, the senior capstone, and you still owe two semesters of a foreign language. Those are all doable in your remaining time.",
                textZh: "还有几个事情：一门人文选修课、毕业设计和两个学期的外语课。这些在你剩余时间内都可以完成。",
                actionHint: "记下缺少的课程",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I speak Chinese fluently. Can I test out of the foreign language requirement?",
            textZh: "我中文很流利。我可以免修外语要求吗？",
            casualVersion: "I'm fluent in Chinese. Can I skip the language classes?",
            commonMistake: {
              wrong: "Can I exempt the foreign language requirement by test?",
              correct: "Can I test out of the foreign language requirement?",
              explanation: "“Test out of” 是地道表达，指通过考试免除某项要求，而不是用“exempt…by test”。",
            },
            formalityVariants: {
              casual: "I speak Chinese fluently. Can I just test out of the language thing?",
              standard: "I speak Chinese fluently. Can I test out of the foreign language requirement?",
              formal:
                "As I am fluent in Chinese, I would like to inquire if it is possible to fulfill the foreign language requirement by demonstrating proficiency through an examination.",
            },
          },
          {
            speaker: "them",
            role: "学术顾问",
            textEn:
              "Yes! You can take a proficiency exam in Chinese. If you pass, you get credit for both semesters and the requirement is fulfilled. I can schedule the test for you this week.",
            textZh:
              "可以！你可以参加中文水平考试。如果通过，你会获得两个学期的学分并且满足要求。我这周就可以给你安排考试。",
            keyPhrases: [
              { en: "proficiency exam", zh: "水平考试" },
              { en: "requirement is fulfilled", zh: "要求已满足" },
            ],
            casualVersion:
              "Yep! You can take a proficiency exam in Chinese. If you pass, you get credit for both semesters and that requirement's done. I can schedule it for you this week.",
            formalityVariants: {
              casual:
                "Yeah! You can do a Chinese proficiency test. Pass it, and you'll get credit for both semesters and be done with that requirement. I can set it up for you this week.",
              standard:
                "Yes! You can take a proficiency exam in Chinese. If you pass, you get credit for both semesters and the requirement is fulfilled. I can schedule the test for you this week.",
              formal:
                "Yes, certainly. You are eligible to undertake a proficiency examination in Chinese. Should you successfully pass, you will receive academic credit for both semesters, thereby fulfilling the requirement. I am able to arrange the test for you within the current week.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Absolutely. We offer a proficiency test — pass it and you get the credits automatically. Since you are a native speaker it should be straightforward. Want me to sign you up?",
                textZh: "当然可以。我们提供水平测试——通过就自动获得学分。既然你是母语者应该很简单。要我帮你报名吗？",
                actionHint: "报名水平考试",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "advisor-intermediate",
        titleZh: "讨论转专业",
        titleEn: "Discussing Changing Majors",
        description: "与顾问讨论转专业的可能性和影响",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "I have been thinking about switching my major from biology to computer science. Would that delay my graduation?",
            textZh: "我一直在考虑从生物转到计算机科学。这会推迟我毕业吗？",
            casualVersion: "I want to switch from bio to CS. Will that push back my graduation?",
            commonMistake: {
              wrong: "Will it delay my graduation?",
              correct: "Would that delay my graduation?",
              explanation: "“Would” 表示可能性或假设，在这里询问潜在结果时更自然。",
            },
            formalityVariants: {
              casual: "Been thinking 'bout switching from bio to CS. Would that push back graduation?",
              standard:
                "I have been thinking about switching my major from biology to computer science. Would that delay my graduation?",
              formal:
                "I am contemplating a change of major from Biology to Computer Science. Would this transition potentially extend my time to degree completion?",
            },
          },
          {
            speaker: "them",
            role: "学术顾问",
            textEn:
              "Let me compare the two programs. You have completed some overlapping math and science courses, which is good. But CS requires data structures and algorithms, which are prerequisites for upper-level courses. Realistically, it might add one extra semester.",
            textZh:
              "让我比较一下两个专业。你已经完成了一些重叠的数学和科学课程，这很好。但CS需要数据结构和算法，这是高级课程的先修课。实际上可能会多一个学期。",
            casualVersion: "Lemme compare 'em. You've got some overlapping math and science, which is good. But CS needs data structures and algorithms first for upper-level stuff. Honestly, it'll probably add an extra semester.",
            commonMistake: {
              wrong: "It might add one semester more.",
              correct: "It might add one extra semester.",
              explanation: "“extra semester” 更自然地表达“额外的一个学期”。",
            },
            formalityVariants: {
              casual: "Let's compare. You've got overlapping math/science, good. But CS needs data structures and algorithms first. Probably an extra semester.",
              standard: "Let me compare the two programs. You have completed some overlapping math and science courses, which is good. But CS requires data structures and algorithms, which are prerequisites for upper-level courses. Realistically, it might add one extra semester.",
              formal: "Upon review of both curricula, I note you have successfully completed foundational mathematics and science coursework, which is beneficial. However, Computer Science necessitates core competencies in data structures and algorithms as prerequisites for advanced studies. Consequently, a realistic projection would be the addition of one academic semester.",
            },
            keyPhrases: [
              { en: "prerequisites", zh: "先修课" },
              { en: "overlapping courses", zh: "重叠课程" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Good news is some of your bio credits transfer over — the math and science stuff. Bad news is you would need to catch up on core CS classes like data structures. It could add a semester, maybe two.",
                textZh:
                  "好消息是你的一些生物学分可以转过来——数学和科学的那些。坏消息是你需要补上核心CS课程如数据结构。可能多一个学期，也许两个。",
                actionHint: "评估延迟毕业的影响",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a way to speed it up? Could I take summer classes?",
            textZh: "有办法加快吗？我可以上暑期课程吗？",
            commonMistake: {
              wrong: "Can I take summer classes to speed up?",
              correct: "Could I take summer classes to speed it up?",
              explanation: "“speed it up” 表达加速过程，更地道。",
            },
            formalityVariants: {
              casual: "Can I speed it up? Like, take summer classes?",
              standard: "Is there a way to speed it up? Could I take summer classes?",
              formal: "Is there an accelerated pathway available? For instance, would enrolling in summer sessions be a viable option?",
            },
            casualVersion: "Can I speed things up? Like taking summer classes?",
          },
          {
            speaker: "them",
            role: "学术顾问",
            textEn:
              "Summer classes would definitely help. If you take two CS courses this summer and overload by one credit next fall, you could still graduate on time. It would be intense but doable.",
            textZh:
              "暑期课程肯定有帮助。如果你这个暑假选两门CS课程并在下个秋季多选一个学分，你仍然可以按时毕业。会很紧张但可以做到。",
            casualVersion: "Summer classes'll def help. If you do two CS courses this summer and take an extra credit next fall, you could still finish on time. It'd be tough, but totally doable.",
            commonMistake: {
              wrong: "It would be intensive but doable.",
              correct: "It would be intense but doable.",
              explanation: "“intense” 是更自然的口语形容词，",
            },
            formalityVariants: {
              casual: "Yeah, summer classes'd help. Two CS courses this summer, extra credit next fall, you'd be on track. Hard, but possible.",
              standard: "Summer classes would definitely help. If you take two CS courses this summer and overload by one credit next fall, you could still graduate on time. It would be intense but doable.",
              formal: "Indeed, enrolling in summer coursework would be highly beneficial. By undertaking two Computer Science courses this summer, coupled with an additional credit in the upcoming fall semester, you could maintain your original graduation timeline. While this schedule would be demanding, it remains achievable.",
            },
            keyPhrases: [
              { en: "overload", zh: "超额选课" },
              { en: "intense but doable", zh: "紧张但可行" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yes, summer courses are the way to go. Two this summer plus one extra class in the fall and you should be able to finish on time. It will be a lot of work though.",
                textZh: "是的，暑期课程是个办法。这个暑假选两门加上秋季多选一门应该可以按时完成。不过工作量会很大。",
                actionHint: "考虑暑期课程计划",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What is the process to officially change my major?",
            textZh: "正式转专业的流程是什么？",
            commonMistake: {
              wrong: "How is the process to change my major?",
              correct: "What is the process to officially change my major?",
              explanation: "“What is the process” 是询问流程的常用表达，",
            },
            formalityVariants: {
              casual: "So, how do I actually change my major?",
              standard: "What is the process to officially change my major?",
              formal: "Could you please outline the formal procedure for initiating a change of major?",
            },
            casualVersion: "How do I officially switch?",
          },
          {
            speaker: "them",
            role: "学术顾问",
            textEn:
              "You fill out a change of major form, get approval from the CS department, and then I update your degree plan. The whole thing takes about a week. Want me to start the paperwork?",
            textZh: "你填一份转专业表格，获得CS系的批准，然后我更新你的学位计划。整个过程大约一周。要我开始办手续吗？",
            casualVersion: "You fill out a change of major form, get the CS department's OK, then I'll update your plan. Takes 'bout a week. Wanna start the paperwork?",
            commonMistake: {
              wrong: "Do you want me to start the paperwork?",
              correct: "Want me to start the paperwork?",
              explanation: "在非正式语境中，",
            },
            formalityVariants: {
              casual: "Fill out the form, get CS's OK, I update your plan. 'Bout a week. Wanna get it started?",
              standard: "You fill out a change of major form, get approval from the CS department, and then I update your degree plan. The whole thing takes about a week. Want me to start the paperwork?",
              formal: "The procedure entails completing a formal change of major request form, obtaining endorsement from the Computer Science department, subsequent to which I will revise your academic degree plan. This entire process typically concludes within approximately one week. Would you like me to commence the necessary documentation?",
            },
            keyPhrases: [
              { en: "change of major form", zh: "转专业表格" },
              { en: "degree plan", zh: "学位计划" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Simple process: fill out the form, CS department signs off, and I update everything on my end. Usually done within a week. Ready to go for it?",
                textZh: "流程很简单：填表格，CS系批准，我在我这边更新所有信息。通常一周内完成。准备好了吗？",
                actionHint: "决定是否转专业",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 大学职业中心 ====================
  {
    id: "education-college-career",
    category: "education",
    titleZh: "大学职业中心",
    titleEn: "College Career Center",
    description: "在大学职业中心获取求职和实习指导",
    otherRole: "职业顾问",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "career-basic",
        titleZh: "获取实习帮助",
        titleEn: "Getting Internship Help",
        description: "咨询如何找实习机会",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I am looking for a summer internship in software engineering. Can you help me get started?",
            textZh: "你好，我在找软件工程方面的暑期实习。你能帮我起步吗？",
            casualVersion: "Hey, I need help finding a summer internship in software. Where do I start?",
            commonMistake: {
              wrong: "Hi, I want to find summer internship. Can you help me start?",
              correct: "Hi, I'm looking for a summer internship in software engineering. Can you help me get started?",
              explanation: "“寻找”用 “looking for” 更自然，“起步”用 “get started” 是固定搭配。",
            },
            formalityVariants: {
              casual: "Hey, looking for a summer software engineering internship. Can you help me out?",
              standard:
                "Hi, I am looking for a summer internship in software engineering. Can you help me get started?",
              formal:
                "Good morning/afternoon, I am seeking guidance regarding summer internship opportunities in software engineering. Would you be able to provide assistance to commence this process?",
            },
          },
          {
            speaker: "them",
            role: "职业顾问",
            textEn:
              "Absolutely! First, let us update your resume. Then I will show you our job board, which has hundreds of internship postings. We also have a career fair coming up in two weeks where you can meet employers in person.",
            textZh:
              "当然！首先让我们更新你的简历。然后我给你看看我们的招聘板，上面有数百个实习职位。我们两周后还有一个招聘会，你可以亲自见到雇主。",
            keyPhrases: [
              { en: "career fair", zh: "招聘会" },
              { en: "job board", zh: "招聘板/职位公告板" },
            ],
            casualVersion:
              "Totally! First, let's update your resume. Then I'll show ya our job board, got tons of internship postings. Plus, we've got a career fair in two weeks, you can meet employers there.",
            formalityVariants: {
              casual:
                "Sure! First, let's update your resume. Then I'll show you our job board, tons of postings. We've also got a career fair in two weeks, you can meet employers.",
              standard:
                "Absolutely! First, let us update your resume. Then I will show you our job board, which has hundreds of internship postings. We also have a career fair coming up in two weeks where you can meet employers in person.",
              formal:
                "Certainly! Our initial step will be to refine your resume. Subsequently, I will direct you to our comprehensive job board, featuring numerous internship opportunities. Additionally, we are hosting a career fair in two weeks, providing a valuable platform for direct engagement with prospective employers.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Sure thing! Step one is getting your resume polished. Step two is our job portal — tons of listings. And there is a career fair in two weeks — perfect timing.",
                textZh: "没问题！第一步是完善你的简历。第二步是我们的招聘平台——大量职位。两周后还有招聘会——时机完美。",
                actionHint: "带上简历来更新",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I have never written an American-style resume before. Is it different from a Chinese one?",
            textZh: "我从来没写过美式简历。和中文的不一样吗？",
            casualVersion: "I have only done Chinese resumes. How different is the American style?",
            culturalNote: "中西简历文化差异大，不可混淆",
            commonMistake: {
              wrong: "I never write American resume before. Is it different with Chinese one?",
              correct: "I have never written an American-style resume before. Is it different from a Chinese one?",
              explanation: "“从未做过”用 “have never done”；“不同于”用 “different from”。",
            },
            formalityVariants: {
              casual: "Never written an American-style resume. Is it different from a Chinese one?",
              standard: "I have never written an American-style resume before. Is it different from a Chinese one?",
              formal:
                "I have no prior experience in composing an American-style resume. Does it diverge significantly from a Chinese resume?",
            },
          },
          {
            speaker: "them",
            role: "职业顾问",
            textEn:
              "Yes, quite different. American resumes do not include a photo, age, or marital status. They focus on achievements with action verbs and quantifiable results. I can walk you through a template right now.",
            textZh:
              "是的，差别很大。美式简历不包含照片、年龄或婚姻状况。重点是用动词和可量化的结果来展示成就。我现在就可以带你过一遍模板。",
            keyPhrases: [
              { en: "action verbs", zh: "动词/动作词" },
              { en: "quantifiable results", zh: "可量化的结果" },
            ],
            culturalNote:
              "American resumes never include photos, age, gender, or marital status due to anti-discrimination laws. Focus on skills and achievements.",
            casualVersion:
              "Yeah, totally different. American resumes don't have photos, age, or if you're married. They're all about achievements, action verbs, and results you can measure. I can show you a template right now.",
            formalityVariants: {
              casual:
                "Yeah, super different. No photo, age, or marital status on American resumes. Focus is on achievements with action verbs and measurable results. I can walk you through a template now.",
              standard:
                "Yes, quite different. American resumes do not include a photo, age, or marital status. They focus on achievements with action verbs and quantifiable results. I can walk you through a template right now.",
              formal:
                "Indeed, there are significant distinctions. American resumes typically omit personal details such as photographs, age, or marital status. Their emphasis lies on showcasing accomplishments through strong action verbs and objectively measurable outcomes. I would be pleased to guide you through a sample template presently.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Very different! No photo, no age, no personal details like that. It is all about what you accomplished — use numbers and strong verbs. Let me show you a good example.",
                textZh:
                  "非常不一样！不放照片、不写年龄、不写那些个人信息。全是关于你取得的成就——用数字和有力的动词。让我给你看一个好的例子。",
                actionHint: "学习美式简历格式",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be really helpful. Can I also do a practice interview here?",
            textZh: "那会非常有帮助。我也可以在这里做模拟面试吗？",
            casualVersion: "That would be great. Do you do practice interviews too?",
            commonMistake: {
              wrong: "That would be very help. Can I also do mock interview here?",
              correct: "That would be really helpful. Can I also do a practice interview here?",
              explanation: "“有帮助的”是 “helpful”；“模拟面试”通常用 “practice interview” 或 “mock interview”。",
            },
            formalityVariants: {
              casual: "Awesome, that'd be super helpful. Can I do a practice interview here too?",
              standard: "That would be really helpful. Can I also do a practice interview here?",
              formal:
                "That would indeed be most beneficial. May I also inquire about the possibility of conducting a practice interview here?",
            },
          },
          {
            speaker: "them",
            role: "职业顾问",
            textEn:
              "Yes! We offer mock interviews every Thursday. You can sign up for a thirty-minute session. We even record it so you can review your performance afterwards.",
            textZh:
              "可以！我们每周四提供模拟面试。你可以报名三十分钟的环节。我们甚至会录像这样你可以事后回顾自己的表现。",
            keyPhrases: [
              { en: "mock interviews", zh: "模拟面试" },
              { en: "review your performance", zh: "回顾你的表现" },
            ],
            casualVersion:
              "Yep! We do mock interviews every Thursday. You can sign up for a 30-min session. We even record it so you can check out your performance later.",
            formalityVariants: {
              casual:
                "Yeah! We do mock interviews Thursdays. You can sign up for a 30-min session. We even record it so you can check your performance later.",
              standard:
                "Yes! We offer mock interviews every Thursday. You can sign up for a thirty-minute session. We even record it so you can review your performance afterwards.",
              formal:
                "Certainly! We facilitate mock interviews every Thursday. You are welcome to register for a thirty-minute session. We also record these sessions to enable a comprehensive review of your performance subsequently.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "We do! Mock interviews run every Thursday, thirty minutes each. We record them so you can see how you did and improve. Want me to book you in?",
                textZh: "有的！每周四有模拟面试，每次三十分钟。我们录像方便你看看哪里可以改进。要帮你预约吗？",
                actionHint: "预约模拟面试",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "career-intermediate",
        titleZh: "简历和面试指导",
        titleEn: "Resume and Interview Coaching",
        description: "获取简历修改和面试技巧指导",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "I just had a mock interview and I felt like I rambled a lot. Do you have any tips for answering questions more concisely?",
            textZh: "我刚做了模拟面试，感觉自己说了很多废话。你有什么建议能更简洁地回答问题吗？",
            casualVersion:
              "I just did a practice interview and I talked way too much. How do I keep my answers shorter?",
            formalityVariants: {
              casual:
                "Just had a mock interview, kinda felt like I rambled. Got any tips for answering questions shorter/more to the point?",
              standard:
                "I just had a mock interview and I felt like I rambled a lot. Do you have any tips for answering questions more concisely?",
              formal:
                "I recently completed a mock interview and I feel I may have been somewhat verbose in my responses. Might you have any recommendations for more concise answer formulation?",
            },
          },
          {
            speaker: "them",
            role: "职业顾问",
            textEn:
              "Try the STAR method: Situation, Task, Action, Result. For each question, describe the context briefly, explain what you did, and end with the outcome. Keep each answer under two minutes.",
            textZh:
              "试试STAR方法：情境、任务、行动、结果。对于每个问题，简要描述背景，解释你做了什么，以结果结束。每个回答控制在两分钟以内。",
            casualVersion: "Just use the STAR method: Situation, Task, Action, Result. For each question, quickly set the scene, say what you did, and finish with the outcome. Try to keep answers under two minutes.",
            commonMistake: {
              wrong: "Keep each answer within two minutes.",
              correct: "Keep each answer under two minutes.",
              explanation: "\"under\"在这里表示“少于，低于”，是更自然的表达。",
            },
            formalityVariants: {
              casual: "Just use the STAR method: Situation, Task, Action, Result. For each question, quickly set the scene, say what you did, and finish with the outcome. Try to keep answers under two minutes.",
              standard: "Try the STAR method: Situation, Task, Action, Result. For each question, describe the context briefly, explain what you did, and end with the outcome. Keep each answer under two minutes.",
              formal: "I recommend employing the STAR method: Situation, Task, Action, and Result. For each inquiry, please provide a concise contextual overview, detail your specific actions, and conclude with the tangible outcome. It is advisable to limit each response to less than two minutes.",
            },
            keyPhrases: [
              { en: "STAR method", zh: "STAR方法（情境-任务-行动-结果）" },
              { en: "under two minutes", zh: "两分钟以内" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Use the STAR framework — Situation, Task, Action, Result. It keeps you focused. Set up the context quick, talk about what you did, and land on the result. Two minutes max per answer.",
                textZh:
                  "用STAR框架——情境、任务、行动、结果。它能帮你保持聚焦。快速铺设背景，说你做了什么，然后落在结果上。每个回答最多两分钟。",
                actionHint: "练习STAR方法",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What about the question where they ask about my weakness? I never know how to answer that one.",
            textZh: "那问缺点那个问题呢？我从来不知道怎么回答。",
            commonMistake: {
              wrong: "I always don't know how to answer that one.",
              correct: "I never know how to answer that one.",
              explanation: "\"never\"比\"always don't\"更自然地表达“从不知道”。",
            },
            formalityVariants: {
              casual: "So, the weakness question? Always stumped on that one.",
              standard: "What about the question where they ask about my weakness? I never know how to answer that one.",
              formal: "Regarding the question concerning one's perceived weakness, I consistently find myself uncertain as to the most appropriate response.",
            },
            casualVersion: "What about the weakness question? I always freeze on that one.",
          },
          {
            speaker: "them",
            role: "职业顾问",
            textEn:
              "Pick a real weakness, but focus on what you are doing to improve it. For example, you could say you used to struggle with public speaking but you joined a club to practice. They want to see self-awareness and growth.",
            textZh:
              "选一个真实的弱点，但重点放在你正在做什么来改进它。例如，你可以说你以前不擅长公开演讲但你加入了一个俱乐部来练习。他们想看到自我认知和成长。",
            casualVersion: "Pick a real weakness, but show what you're doing to fix it. Like, say you used to be bad at public speaking but joined a club to get better. They wanna see you know yourself and you're growing.",
            commonMistake: {
              wrong: "They want to see your self-awareness and growth.",
              correct: "They want to see self-awareness and growth.",
              explanation: "在这种语境下，\"self-awareness and growth\"作为抽象概念，前面不加\"your\"更自然。",
            },
            formalityVariants: {
              casual: "Pick a real weakness, but show what you're doing to fix it. Like, say you used to be bad at public speaking but joined a club to get better. They wanna see you know yourself and you're growing.",
              standard: "Pick a real weakness, but focus on what you are doing to improve it. For example, you could say you used to struggle with public speaking but you joined a club to practice. They want to see self-awareness and growth.",
              formal: "It is advisable to select an authentic weakness, yet emphasize your proactive steps towards its amelioration. For instance, one might state a prior challenge with public speaking, which was addressed by joining a relevant club for practical development. Interviewers seek evidence of self-awareness and continuous professional development.",
            },
            keyPhrases: [
              { en: "self-awareness", zh: "自我认知" },
              { en: "what you are doing to improve", zh: "你在做什么来改进" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Be honest but strategic. Name something real, then immediately pivot to how you are working on it. Show that you know yourself and you take action. That is what impresses interviewers.",
                textZh:
                  "诚实但有策略。说一个真实的，然后立刻转向你如何在改进。展示你了解自己并且采取行动。这就是打动面试官的。",
                actionHint: "准备好弱点的回答",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "One more question — should I send a thank-you email after an interview?",
            textZh: "再问一个问题——面试后应该发感谢邮件吗？",
            culturalNote: "面试后发感谢信在美国职场文化中非常重要，几乎是必须的。",
            commonMistake: {
              wrong: "I still have a question.",
              correct: "One more question —",
              explanation: "\"One more question\"是口语中引出下一个问题的常见且自然的表达。",
            },
            formalityVariants: {
              casual: "Quick question — should I send a thank-you email after an interview?",
              standard: "One more question — should I send a thank-you email after an interview?",
              formal: "I have one additional query, if I may. Is it customary to dispatch a thank-you email subsequent to an interview?",
            },
            casualVersion: "Should I send a thank-you note after?",
          },
          {
            speaker: "them",
            role: "职业顾问",
            textEn:
              "Always! Send a personalized thank-you email within twenty-four hours. Mention something specific from the conversation to show you were engaged. It really sets you apart from other candidates.",
            textZh:
              "一定要！在二十四小时内发一封个性化的感谢邮件。提到对话中的具体内容来展示你的参与度。这真的能让你从其他候选人中脱颖而出。",
            casualVersion: "Definitely! Shoot 'em a personalized thank-you email within twenty-four hours. Bring up something specific from your chat to show you were paying attention. Seriously, it'll make you stand out.",
            commonMistake: {
              wrong: "It makes you special from other candidates.",
              correct: "It really sets you apart from other candidates.",
              explanation: "\"sets you apart\"是更地道且有力的表达，指让你“脱颖而出”。",
            },
            formalityVariants: {
              casual: "Definitely! Shoot 'em a personalized thank-you email within twenty-four hours. Bring up something specific from your chat to show you were paying attention. Seriously, it'll make you stand out.",
              standard: "Always! Send a personalized thank-you email within twenty-four hours. Mention something specific from the conversation to show you were engaged. It really sets you apart from other candidates.",
              formal: "Absolutely. It is imperative to dispatch a personalized thank-you email within a twenty-four-hour timeframe. Kindly reference a specific detail from your discussion to demonstrate your engagement. This practice significantly distinguishes your application from those of other prospective candidates.",
            },
            keyPhrases: [
              { en: "personalized thank-you", zh: "个性化的感谢" },
              { en: "sets you apart", zh: "让你脱颖而出" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "One hundred percent yes. Within twenty-four hours, send a short email thanking them and referencing something you discussed. It is a small thing that makes a big impression.",
                textZh:
                  "百分之百要。二十四小时内发一封简短的感谢邮件并提到你们讨论过的内容。这是一个小事但能留下很大印象。",
                actionHint: "面试后立即发感谢邮件",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 学习小组 ====================
  {
    id: "education-study-group",
    category: "education",
    titleZh: "学习小组",
    titleEn: "Study Group",
    description: "加入或组建学习小组一起复习",
    otherRole: "同学",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "study-group-basic",
        titleZh: "加入学习小组",
        titleEn: "Joining a Study Group",
        description: "请求加入同学的学习小组",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hey, I heard you guys have a study group for the chemistry exam. Can I join?",
            textZh: "嘿，我听说你们有一个化学考试的学习小组。我可以加入吗？",
            casualVersion: "Hey, can I get in on your chem study group?",
            commonMistake: {
              wrong: "I heard you guys have a study group of the chemistry exam. Can I join?",
              correct: "I heard you guys have a study group for the chemistry exam. Can I join?",
              explanation: "表示目的时，介词应为 'for' 而非 'of'。",
            },
            formalityVariants: {
              casual: "Hey, heard you guys got a study group for chem. Can I jump in?",
              standard: "Hey, I heard you guys have a study group for the chemistry exam. Can I join?",
              formal:
                "Excuse me, I overheard you discussing a study group for the upcoming chemistry examination. Would it be possible for me to participate?",
            },
          },
          {
            speaker: "them",
            role: "同学",
            textEn:
              "Of course! We meet every Wednesday at the library from four to six. We go over the lecture notes and quiz each other. The more the merrier!",
            textZh: "当然！我们每周三下午四点到六点在图书馆见面。我们复习课堂笔记并互相测试。人越多越好！",
            keyPhrases: [
              { en: "the more the merrier", zh: "人越多越好" },
              { en: "quiz each other", zh: "互相测试" },
            ],
            casualVersion:
              "Totally! Every Wed, 4-6, at the library. We hit up notes, quiz each other. More people, better it is!",
            commonMistake: {
              wrong: "We meet at Wednesday at the library.",
              correct: "We meet every Wednesday at the library.",
              explanation: "表示“每周几”时，直接说 'every Wednesday'，不加介词 'at'。",
            },
            formalityVariants: {
              casual: "Yeah! Wednesdays, 4-6, library. We hit notes, quiz each other. More people, better!",
              standard:
                "Of course! We meet every Wednesday at the library from four to six. We go over the lecture notes and quiz each other. The more the merrier!",
              formal:
                "Certainly! Our meetings are held every Wednesday from 4:00 PM to 6:00 PM in the library. During this time, we review lecture notes and engage in mutual quizzing. We welcome additional participants.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, totally! We are at the library Wednesdays, four to six. We review notes, do practice problems, and test each other. You should definitely come.",
                textZh: "当然可以！我们周三在图书馆，四点到六点。复习笔记、做练习题、互相考。你一定要来。",
                actionHint: "记下时间地点",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Awesome. I am not great at organic chemistry — is it okay if I ask a lot of questions?",
            textZh: "太好了。我有机化学不太好——如果我问很多问题可以吗？",
            casualVersion: "Nice. Fair warning, I'm terrible at organic chem. Cool if I ask a ton of questions?",
            culturalNote: "美国课堂文化鼓励提问，不必担心“麻烦”别人或显得“不懂”。",
            commonMistake: {
              wrong: "I am not good at organic chemistry. Is it okay I ask many questions?",
              correct: "I am not great at organic chemistry — is it okay if I ask a lot of questions?",
              explanation: "'not great at' 更自然口语化，'a lot of questions' 比 'many questions' 更常用。",
            },
            formalityVariants: {
              casual: "Sweet. O-chem's tough for me — can I bombard you guys with questions?",
              standard: "Awesome. I am not great at organic chemistry — is it okay if I ask a lot of questions?",
              formal:
                "Excellent. My proficiency in organic chemistry is rather limited; would it be permissible for me to pose numerous inquiries?",
            },
          },
          {
            speaker: "them",
            role: "同学",
            textEn:
              "Totally fine! That is what the group is for. Actually, explaining things to others helps everyone understand better. Don't worry about it at all.",
            textZh: "完全没问题！学习小组就是干这个的。实际上，给别人解释反而帮助每个人更好理解。完全不用担心。",
            keyPhrases: [
              { en: "that is what it is for", zh: "本来就是为了这个" },
              { en: "explaining helps everyone", zh: "解释帮助每个人" },
            ],
            casualVersion:
              "Totally! That's literally why we have it. Explaining stuff actually helps everyone get it better. Seriously, no worries.",
            commonMistake: {
              wrong: "That is the group for. Don't worry it.",
              correct: "That is what the group is for. Don't worry about it.",
              explanation: "'what...is for' 是固定表达；'worry about it' 为正确短语。",
            },
            formalityVariants: {
              casual:
                "No problem! That's exactly why we meet. Explaining stuff actually helps *us* too. Don't even sweat it.",
              standard:
                "Totally fine! That is what the group is for. Actually, explaining things to others helps everyone understand better. Don't worry about it.",
              formal:
                "Absolutely! The primary purpose of this group is indeed mutual assistance. Furthermore, the act of articulating concepts to others often enhances one's own comprehension. Please, do not hesitate.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Don't even worry about it. We all have weak spots. Teaching each other is actually the best way to learn. Come with all your questions!",
                textZh: "完全不用担心。我们都有弱项。互相教其实是最好的学习方式。带着所有问题来吧！",
                actionHint: "放心参加",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Should I bring anything? I have the textbook and my notes from class.",
            textZh: "我需要带什么吗？我有课本和课堂笔记。",
            casualVersion: "What should I bring? I have the textbook and my notes.",
            commonMistake: {
              wrong: "Do I need bring anything? I have the textbook and my notes in class.",
              correct: "Should I bring anything? I have the textbook and my notes from class.",
              explanation: "'need to bring' 或 'should bring'；'notes from class' 表达更自然。",
            },
            formalityVariants: {
              casual: "Gotta bring anything? Got my textbook and notes.",
              standard: "Should I bring anything? I have the textbook and my notes from class.",
              formal:
                "Are there any materials I should prepare or bring? I possess both the required textbook and my personal notes from the lectures.",
            },
          },
          {
            speaker: "them",
            role: "同学",
            textEn:
              "Bring your notes and any practice problems you have. We usually share a Google Doc with key formulas and concepts. I will add you to it tonight so you can review before Wednesday.",
            textZh:
              "带上你的笔记和你有的练习题。我们通常共享一个有重要公式和概念的Google文档。我今晚把你加进去这样你可以在周三之前复习。",
            keyPhrases: [
              { en: "practice problems", zh: "练习题" },
              { en: "Google Doc", zh: "共享文档" },
            ],
            casualVersion:
              "Just bring your notes and any practice problems you've got. We usually share a Google Doc with key stuff. I'll add ya tonight so you can check it out before Wed.",
            commonMistake: {
              wrong: "I will add you in it tonight so you can review on Wednesday.",
              correct: "I will add you to it tonight so you can review before Wednesday.",
              explanation: "'add to' 是正确搭配；'before Wednesday' 指周三前，'on Wednesday' 指周三当天。",
            },
            formalityVariants: {
              casual:
                "Notes and practice problems are good. We've got a shared Google Doc with key stuff. I'll get you added tonight so you can look it over before Wednesday.",
              standard:
                "Bring your notes and any practice problems you have. We usually share a Google Doc with key formulas and concepts. I will add you to it tonight so you can review before Wednesday.",
              formal:
                "Please bring your notes and any supplemental practice problems you may possess. We maintain a collaborative Google Document containing essential formulas and concepts. I will grant you access to it this evening, enabling you to review the content prior to our Wednesday session.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Just your notes and any old exams if you have them. We have a shared doc with all the important stuff. I will send you the link so you can look it over before we meet.",
                textZh:
                  "带上笔记和往年试卷如果有的话。我们有一个共享文档包含所有重要内容。我把链接发给你这样你见面前可以看看。",
                actionHint: "查看共享文档",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "study-group-intermediate",
        titleZh: "组织学习计划",
        titleEn: "Organizing Study Sessions",
        description: "在学习小组中讨论考试复习策略",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "The midterm is in two weeks. Should we increase our meetings? Maybe we could meet twice a week until the exam.",
            textZh: "期中考试两周后。我们要增加聚会次数吗？也许考试前可以每周见两次。",
            casualVersion: "Midterm is in two weeks. Should we meet more often? Maybe twice a week?",
            formalityVariants: {
              casual: "Midterm's in two weeks. Wanna meet more? Like, twice a week till then?",
              standard:
                "The midterm is in two weeks. Should we increase our meetings? Maybe we could meet twice a week until the exam.",
              formal:
                "The upcoming midterm examination is scheduled for two weeks from now. Would it be advisable for us to augment the frequency of our study group sessions? Perhaps we could convene twice weekly leading up to the examination.",
            },
          },
          {
            speaker: "them",
            role: "同学",
            textEn:
              "Great idea. How about adding a Sunday session? We could do chapters one through five on Wednesday and six through ten on Sunday. That way we cover everything.",
            textZh: "好主意。加一个周日的怎么样？周三复习第一到五章，周日复习第六到十章。这样就能覆盖所有内容。",
            casualVersion: "Yeah, good call. How 'bout adding a Sunday one? We can hit chapters 1-5 Wednesday, then 6-10 Sunday. That way, we get it all done.",
            commonMistake: {
              wrong: "In this way we cover everything.",
              correct: "That way we cover everything.",
              explanation: "“That way” 在口语中表示“那样就能”，比 \"in this way\" 更自然简洁。",
            },
            formalityVariants: {
              casual: "Yeah, good call. How 'bout adding a Sunday one? We can hit chapters 1-5 Wednesday, then 6-10 Sunday. That way, we get it all done.",
              standard: "That's a great idea. How about adding a Sunday session? We could cover chapters one through five on Wednesday and chapters six through ten on Sunday. That way, we ensure complete coverage.",
              formal: "Indeed, that's an excellent suggestion. May I propose the inclusion of a Sunday session? We could dedicate Wednesday's meeting to chapters one through five, and Sunday's to chapters six through ten, thereby ensuring comprehensive coverage of the material.",
            },
            keyPhrases: [
              { en: "cover everything", zh: "覆盖所有内容" },
              { en: "adding a session", zh: "增加一次聚会" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Love it. Let us add Sundays. We split the material — first half on Wednesday, second half on Sunday. We will be totally ready by exam day.",
                textZh: "好主意。加上周日。我们分一下内容——前半部分周三，后半部分周日。考试那天我们肯定准备好了。",
                actionHint: "确认新的时间安排",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I found some practice exams from last year online. Should I bring those for us to work through?",
            textZh: "我在网上找到了去年的模拟考试。我要带来给我们做吗？",
            commonMistake: {
              wrong: "Should I bring those for us to do?",
              correct: "Should I bring those for us to work through?",
              explanation: "\"work through\" 更强调系统性地解决问题，而不是简单地“做”。",
            },
            formalityVariants: {
              casual: "Found some old practice exams online. Should I bring 'em so we can work 'em?",
              standard: "I found some practice exams from last year online. Should I bring those for us to work through?",
              formal: "I have located several practice examinations from the previous academic year online. Would it be beneficial for me to bring these for our collaborative review and completion?",
            },
            casualVersion: "I found old practice exams online. Want me to bring them?",
          },
          {
            speaker: "them",
            role: "同学",
            textEn:
              "That would be amazing! Practice exams are the best way to prepare. Let us do one as a timed mock exam in our last session before the real thing. It will feel less stressful on exam day.",
            textZh:
              "那太棒了！模拟考试是最好的准备方式。让我们在考试前的最后一次聚会中做一次计时模拟考试。考试那天会感觉压力小一些。",
            casualVersion: "That'd be awesome! Practice tests are key. Let's do one as a timed mock in our last session before the real deal. Less stress on exam day, for sure.",
            commonMistake: {
              wrong: "Let us do one as a timed mock exam",
              correct: "Let's do one as a timed mock exam",
              explanation: "\"Let's\" 是 \"Let us\" 的缩写，在日常口语中更自然，表示提议。",
            },
            formalityVariants: {
              casual: "That'd be awesome! Practice tests are key. Let's do one as a timed mock in our last session before the real deal. Less stress on exam day, for sure.",
              standard: "That would be amazing! Practice exams are the best way to prepare. Let's do one as a timed mock exam in our last session before the actual test. It will feel less stressful on exam day.",
              formal: "That would indeed be highly advantageous! Practice examinations constitute the most effective method of preparation. I propose we conduct one as a timed mock examination during our final session prior to the actual assessment. This approach should significantly reduce stress levels on the day of the examination.",
            },
            keyPhrases: [
              { en: "timed mock exam", zh: "计时模拟考试" },
              { en: "less stressful", zh: "压力更小" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yes, bring them! Old exams are gold. For our last session, let us simulate the real test — set a timer and everything. It really helps with exam anxiety.",
                textZh:
                  "是的，带来！往年考试是宝贝。最后一次聚会我们模拟真实考试——计时什么的都来。对考试焦虑真的很有帮助。",
                actionHint: "计划模拟考试",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Perfect. Should we also ask the professor if there are any topics she will focus on for the midterm?",
            textZh: "完美。我们要不要问教授期中考试会重点考哪些内容？",
            commonMistake: {
              wrong: "if there are any topics she will test",
              correct: "if there are any topics she will focus on",
              explanation: "\"focus on\" 指教授在出题时会侧重某些知识点，更地道自然。",
            },
            formalityVariants: {
              casual: "Good call. Should we hit up the prof to see if there are any key topics for the midterm?",
              standard: "Perfect. Should we also ask the professor if there are any topics she will focus on for the midterm?",
              formal: "Excellent. Would it be prudent to also inquire with the professor regarding any particular topics she intends to emphasize for the midterm examination?",
            },
            casualVersion: "Should we ask the prof what to focus on for the midterm?",
          },
          {
            speaker: "them",
            role: "同学",
            textEn:
              "Definitely worth asking. She usually drops hints during office hours. I can go this Thursday. Want to come with me? Two heads are better than one when taking notes.",
            textZh: "绝对值得问。她通常在办公时间透露一些提示。我这周四可以去。要和我一起吗？做笔记两个人总比一个好。",
            casualVersion: "Totally worth asking. She usually gives clues during office hours. I can swing by Thursday. Wanna come? Two heads are better than one for notes.",
            culturalNote: "“Office hours”是教授专门留给学生答疑的时间段，在中国大学里不常见。",
            commonMistake: {
              wrong: "She usually gives hints during office hours.",
              correct: "She usually drops hints during office hours.",
              explanation: "\"drop hints\" 含有“不经意地透露”的意味，比 \"give hints\" 更生动自然。",
            },
            formalityVariants: {
              casual: "Totally worth asking. She usually gives clues during office hours. I can swing by Thursday. Wanna come? Two heads are better than one for notes.",
              standard: "Definitely worth asking. She usually drops hints during office hours. I can go this Thursday. Would you like to come with me? Two heads are better than one when taking notes.",
              formal: "It would certainly be worthwhile to inquire. She typically provides subtle indications during her designated office hours. I am available to attend this Thursday. Would you care to accompany me? A collaborative approach is often more effective for detailed note-taking.",
            },
            keyPhrases: [
              { en: "drops hints", zh: "透露提示" },
              { en: "office hours", zh: "办公时间/答疑时间" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Good call. Professors love when students come to office hours. I am going Thursday — join me? Between us we will catch every hint she gives.",
                textZh: "好想法。教授喜欢学生来办公时间。我周四去——一起来？我们两个一起不会漏掉她给的任何提示。",
                actionHint: "一起去办公时间",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 教授办公时间 ====================
  {
    id: "education-office-hours",
    category: "education",
    titleZh: "教授办公时间",
    titleEn: "Office Hours",
    description: "利用教授的办公时间寻求课业帮助",
    otherRole: "教授",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "office-hours-basic",
        titleZh: "请教课堂问题",
        titleEn: "Asking About Class Material",
        description: "在办公时间向教授请教不理解的内容",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Professor Chen, do you have a minute? I am confused about the supply and demand graph from today's lecture.",
            textZh: "Chen 教授，您有时间吗？我对今天课上的供需曲线图有些困惑。",
            casualVersion: "Professor Chen, got a sec? I am lost on the supply and demand stuff from today.",
            formalityVariants: {
              casual: "Professor Chen, got a sec? I'm a bit lost on the S&D graph from class today.",
              standard:
                "Professor Chen, do you have a minute? I am confused about the supply and demand graph from today.",
              formal:
                "Excuse me, Professor Chen, I was wondering if you might have a moment. I'm finding myself rather perplexed regarding the supply and demand graph discussed in today's lecture.",
            },
          },
          {
            speaker: "them",
            role: "教授",
            textEn: "Of course, come in! Which part specifically? The equilibrium point or the shift factors?",
            textZh: "当然，请进！具体哪个部分？均衡点还是移动因素？",
            keyPhrases: [
              { en: "equilibrium point", zh: "均衡点" },
              { en: "shift factors", zh: "移动因素" },
            ],
            casualVersion: "Yeah, come on in! What part, specifically? The equilibrium stuff or the shift factors?",
            formalityVariants: {
              casual: "Sure, come on in! What part is it? Equilibrium or the shift stuff?",
              standard: "Of course, come in! Which part specifically? The equilibrium point or the shift factors?",
              formal:
                "Certainly, please do come in. Could you clarify which specific aspect you're referring to? Is it the equilibrium point or the factors that cause the shifts?",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Sure, have a seat! Is it the equilibrium concept that is tripping you up, or more the reasons why the curves shift?",
                textZh: "当然，请坐！是均衡概念让你困惑，还是曲线移动的原因？",
                actionHint: "具体说明哪里不懂",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Mainly the shift factors. I understand that price changes move along the curve, but I get confused about what shifts the entire curve.",
            textZh: "主要是移动因素。我理解价格变化沿着曲线移动，但我对什么会移动整条曲线感到困惑。",
            casualVersion:
              "The shift part. I get that price moves along the curve, but I don't understand what shifts the whole thing.",
            commonMistake: {
              wrong: "I am confused what shifts the entire curve.",
              correct: "I get confused about what shifts the entire curve.",
              explanation: "confused 后常跟介词 about 表困惑内容。",
            },
            formalityVariants: {
              casual:
                "Mostly the shift factors. I get that price changes mean moving along the curve, but I'm just not sure what actually shifts the whole thing.",
              standard:
                "Mainly the shift factors. I understand that price changes move along the curve, but I get confused about what shifts the entire curve.",
              formal:
                "My primary area of concern pertains to the shift factors. While I comprehend that modifications in price result in movement along the existing curve, I find myself uncertain regarding the determinants that induce a complete shift of the entire curve.",
            },
          },
          {
            speaker: "them",
            role: "教授",
            textEn:
              "Good question. Think of it this way: price changes cause movement along the curve, but non-price factors like income, tastes, or technology cause the entire curve to shift. Does that distinction make sense?",
            textZh:
              "好问题。这样想：价格变化导致沿曲线移动，但非价格因素如收入、偏好或技术会导致整条曲线移动。这个区别能理解吗？",
            keyPhrases: [
              { en: "non-price factors", zh: "非价格因素" },
              { en: "distinction", zh: "区别" },
            ],
            casualVersion:
              "Good question. So, think of it like this: price changes move you *along* the curve, but other stuff – like income, tastes, tech – that's what *shifts* the whole thing. Clearer now?",
            formalityVariants: {
              casual:
                "Good question. Okay, so price changes make you move *on* the curve, but things like income, tastes, technology, etc. actually *shift* the whole curve. Does that click?",
              standard:
                "Good question. Think of it this way: price changes cause movement along the curve, but non-price factors like income, tastes, or technology cause the entire curve to shift. Does that distinction make sense?",
              formal:
                "That is an excellent inquiry. To clarify, consider this analogy: while price fluctuations induce movement along a static curve, it is the influence of non-price determinants, such as changes in income levels, consumer preferences, or technological advancements, that precipitates a complete displacement of the entire curve. Is this differentiation comprehensible?",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Here is the trick: price only moves you along the curve. Everything else — income, preferences, new technology — those shift the whole curve left or right. Make sense?",
                textZh:
                  "关键在这里：价格只让你沿曲线移动。其他所有东西——收入、偏好、新技术——那些让整条曲线左右移动。明白了吗？",
                actionHint: "确认理解",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, that helps a lot! Will this topic be on the midterm?",
            textZh: "是的，这帮助很大！这个话题会在期中考试中出现吗？",
            casualVersion: "Yeah, that clears it up! Is this going to be on the midterm?",
            commonMistake: {
              wrong: "This topic is on the midterm?",
              correct: "Will this topic be on the midterm?",
              explanation: '询问未来事件用 "will be"，而不是 "is"。',
            },
            formalityVariants: {
              casual: "Yeah, that helps big time! Is this gonna be on the midterm?",
              standard: "Yes, that helps a lot! Will this topic be on the midterm?",
              formal:
                "Indeed, that explanation is exceptionally helpful. May I inquire if this particular topic will be included in the upcoming midterm examination?",
            },
          },
          {
            speaker: "them",
            role: "教授",
            textEn:
              "It will definitely be on the midterm. I would recommend reviewing chapters three and four carefully. If you are still unsure after studying, come back anytime. My door is always open.",
            textZh:
              "肯定会出现在期中考试中。我建议仔细复习第三和第四章。如果学了之后还不确定，随时再来。我的门永远为你敞开。",
            keyPhrases: [
              { en: "my door is always open", zh: "我的门永远为你敞开/随时欢迎" },
              { en: "reviewing chapters", zh: "复习章节" },
            ],
            casualVersion:
              "Oh yeah, it'll totally be on the midterm. I'd suggest going over chapters three and four real carefully. If you're still fuzzy after that, just swing by whenever. My door's always open.",
            formalityVariants: {
              casual:
                "Yep, that's definitely on the midterm. Best to hit chapters three and four hard. If you're still confused later, just pop back in. My door's always open.",
              standard:
                "It will definitely be on the midterm. I would recommend reviewing chapters three and four carefully. If you are still unsure after studying, come back anytime. My door is always open.",
              formal:
                "Yes, I can confirm that this topic will indeed be featured on the midterm examination. I would strongly advise a thorough review of chapters three and four. Should you remain uncertain following your study, please do not hesitate to return at your convenience. My office is consistently accessible for further assistance.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "One hundred percent it will be tested. Focus on chapters three and four for this topic. And don't hesitate to come back if you need more help — that is what I am here for.",
                textZh:
                  "百分之百会考。这个话题重点复习第三和第四章。如果需要更多帮助别犹豫再来——我就是为这个在这里的。",
                actionHint: "复习第三和第四章",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "office-hours-intermediate",
        titleZh: "讨论论文和项目",
        titleEn: "Discussing Papers and Projects",
        description: "就论文或研究项目向教授征求意见",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "I am working on my research paper and I am not sure if my thesis is strong enough. Could you take a look at my outline?",
            textZh: "我在写研究论文，不确定我的论点是否足够有力。您能看看我的大纲吗？",
            casualVersion: "Can you check my paper outline? I am not sure my thesis is good enough.",
            culturalNote: "美国大学师生关系更直接，学生通常会主动寻求教授指导。",
            commonMistake: {
              wrong: "I not sure my thesis strong enough.",
              correct: "I am not sure if my thesis is strong enough.",
              explanation: "中文思维直接翻译成英文时，可能省略“is”或“if”，导致语法错误。",
            },
            formalityVariants: {
              casual:
                "Hey, working on my paper, not sure if the thesis is strong enough. Could you check out my outline?",
              standard:
                "I am working on my research paper and I am not sure if my thesis is strong enough. Could you take a look at my outline?",
              formal:
                "Professor, I'm currently developing my research paper and I have some concerns regarding the robustness of my thesis. Would you be so kind as to review my outline?",
            },
          },
          {
            speaker: "them",
            role: "教授",
            textEn:
              "Sure, let me see. Your topic is interesting, but the thesis needs to be more specific. Right now it is too broad. Try narrowing it down to a single argument you can support with evidence.",
            textZh:
              "好的，让我看看。你的主题很有趣，但论点需要更具体。现在太宽泛了。试着缩小到一个你可以用证据支持的单一论点。",
            casualVersion: "Yeah, lemme see. Topic's interesting, but the thesis needs to be more specific. Too broad right now. Try narrowing it down to one argument you can actually back up with evidence.",
            formalityVariants: {
              casual: "Sure, lemme see. Your topic's interesting, but the thesis needs to be more specific. It's too broad now. Try narrowing it to one argument you can support with evidence.",
              standard: "Sure, let me see. Your topic is interesting, but the thesis needs to be more specific. Right now it is too broad. Try narrowing it down to a single argument you can support with evidence.",
              formal: "Certainly, I'd be happy to review it. Your chosen topic presents considerable merit, however, the thesis requires greater specificity. Its current scope is excessively broad. I recommend refining it to a singular, defensible argument that can be substantiated with empirical evidence.",
            },
            keyPhrases: [
              { en: "thesis", zh: "论点/论文主题" },
              { en: "narrowing it down", zh: "缩小范围" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Let me take a look. The topic is solid but your thesis is trying to cover too much. Pick one angle and go deep. A focused thesis always makes for a stronger paper.",
                textZh: "让我看看。主题不错但论点试图涵盖太多。选一个角度深入研究。聚焦的论点总是能写出更有力的论文。",
                actionHint: "缩小论文主题范围",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I see. Would it be better to focus on just one case study instead of comparing three?",
            textZh: "明白了。只聚焦一个案例研究而不是比较三个会更好吗？",
            commonMistake: {
              wrong: "Is it better to focus on just one case study or not?",
              correct: "Would it be better to focus on just one case study instead of comparing three?",
              explanation: "“是不是”的直译显得冗余且不自然，用“would it be better”更地道。",
            },
            formalityVariants: {
              casual: "Gotcha. So, just one case study instead of comparing three would be better?",
              standard: "I see. Would it be better to focus on just one case study instead of comparing three?",
              formal: "I understand. Would you advise prioritizing a singular case study over a comparative analysis of three?",
            },
            casualVersion: "So should I just do one case study instead of comparing three?",
          },
          {
            speaker: "them",
            role: "教授",
            textEn:
              "For a ten-page paper, yes. One deep case study with strong analysis is much more effective than three surface-level comparisons. Quality over quantity.",
            textZh: "对于十页的论文，是的。一个有深入分析的案例研究比三个表面的比较有效得多。质量胜于数量。",
            casualVersion: "For ten pages, totally. One really deep case study with solid analysis beats three shallow comparisons, hands down. Quality, not quantity.",
            formalityVariants: {
              casual: "Yeah, for ten pages, for sure. One deep case study with strong analysis is way better than three quick comparisons. Quality over quantity.",
              standard: "For a ten-page paper, yes. One deep case study with strong analysis is much more effective than three surface-level comparisons. Quality over quantity.",
              formal: "Indeed, for a submission of ten pages, that would be advisable. A singular, thoroughly analyzed case study provides significantly greater analytical depth than three superficial comparisons. The emphasis should always be on qualitative rigor rather than quantitative breadth.",
            },
            keyPhrases: [
              { en: "deep analysis", zh: "深入分析" },
              { en: "quality over quantity", zh: "质量胜于数量" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For this paper length, absolutely. Go deep on one case rather than skimming three. You will produce much stronger arguments that way.",
                textZh: "对于这个论文长度，绝对是。深入研究一个案例而不是浅浅带过三个。这样你能产出更有力的论点。",
                actionHint: "选择一个案例深入研究",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "When is the best time to send you a draft for feedback before the final deadline?",
            textZh: "在最终截止日期之前，什么时候发给您草稿让您反馈最好？",
            commonMistake: {
              wrong: "When is best time send draft to you?",
              correct: "When is the best time to send you a draft for feedback before the final deadline?",
              explanation: "句子成分缺失且语序不自然，听起来不流畅。",
            },
            formalityVariants: {
              casual: "So, when's the best time to send you a draft for feedback before the deadline?",
              standard: "When is the best time to send you a draft for feedback before the final deadline?",
              formal: "Professor, what would be the most opportune time to submit a draft for your review prior to the ultimate deadline?",
            },
            casualVersion: "When should I send you a draft so you have time to give feedback?",
          },
          {
            speaker: "them",
            role: "教授",
            textEn:
              "Send me a draft at least one week before the due date. That gives me time to provide detailed feedback and you time to revise. I usually return comments within three days.",
            textZh: "在截止日期前至少一周发给我草稿。这样我有时间提供详细反馈，你也有时间修改。我通常三天内返回评语。",
            casualVersion: "Get me a draft at least a week before it's due. That way I've got time to give you good feedback, and you've got time to fix it up. Usually get comments back in three days.",
            formalityVariants: {
              casual: "Send me a draft at least a week before it's due. That gives me time for feedback and you time to revise. I usually get comments back in three days.",
              standard: "Send me a draft at least one week before the due date. That gives me time to provide detailed feedback and you time to revise. I usually return comments within three days.",
              formal: "Please endeavor to submit your draft no later than one week prior to the designated due date. This will afford me adequate time to furnish comprehensive feedback and allow you sufficient opportunity for revision. My typical turnaround for comments is within three business days.",
            },
            keyPhrases: [
              { en: "detailed feedback", zh: "详细反馈" },
              { en: "revise", zh: "修改" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "A week before is ideal. I need a few days to read it properly, and you need time to make changes. Send it by then and I will get you thorough comments.",
                textZh: "提前一周最理想。我需要几天仔细读，你也需要时间修改。到那时发给我，我会给你详尽的评语。",
                actionHint: "记下提交草稿的时间",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 课外活动 ====================
  {
    id: "education-extracurricular",
    category: "education",
    titleZh: "课外活动",
    titleEn: "Extracurricular Activities",
    description: "为孩子咨询和报名课外活动",
    otherRole: "活动协调员",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "extracurricular-basic",
        titleZh: "了解课外活动",
        titleEn: "Learning About Activities",
        description: "咨询学校提供的课外活动选项",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I want to sign my son up for after-school activities. What programs do you offer?",
            textZh: "你好，我想给儿子报名课后活动。你们有什么项目？",
            casualVersion: "Hey, what after-school stuff do you have for my kid?",
            culturalNote: "与中文习惯不同，直接说“I want”在美国听起来可能比较生硬，用“I'd like to”更礼貌。",
            commonMistake: {
              wrong: "Hi, I want to sign my son up for after-school activities. What programs do you offer?",
              correct: "Hi, I'd like to sign my son up for after-school activities. What programs do you offer?",
              explanation: "“I want to”过于直接，用“I'd like to”显得更客气礼貌。",
            },
            formalityVariants: {
              casual: "Hey, wanna sign my kid up for after-school stuff. What programs ya got?",
              standard: "Hi, I'd like to sign my son up for after-school activities. What programs do you offer?",
              formal:
                "Good morning/afternoon, I am interested in enrolling my son in your after-school activities. Could you please provide information on the programs available?",
            },
          },
          {
            speaker: "them",
            role: "活动协调员",
            textEn:
              "We have a great selection! Sports include soccer, basketball, and swimming. For arts, we have drama club, painting, and choir. We also have robotics and a coding club for STEM.",
            textZh:
              "我们有很多选择！体育有足球、篮球和游泳。艺术方面有话剧社、绘画和合唱团。STEM方面还有机器人和编程俱乐部。",
            keyPhrases: [
              { en: "after-school activities", zh: "课后活动" },
              { en: "STEM", zh: "STEM（科学技术工程数学）" },
            ],
            casualVersion:
              "Oh, we got tons! For sports, there's soccer, hoops, swimming. Arts? Drama club, painting, choir. Plus, robotics and a coding club for all the STEM kids.",
            formalityVariants: {
              casual:
                "We got a bunch! Sports: soccer, basketball, swimming. Arts: drama, painting, choir. And for STEM, robotics and coding.",
              standard:
                "We have a great selection! Sports include soccer, basketball, and swimming. For arts, we have drama club, painting, and choir. We also have robotics and a coding club for STEM.",
              formal:
                "Our institution offers a comprehensive range of activities. In sports, we feature soccer, basketball, and swimming. Artistic pursuits include drama club, painting, and choir. Additionally, for STEM disciplines, we provide robotics and a coding club.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Lots to choose from! We have sports — soccer, basketball, swimming. Arts — drama, art, choir. And for the techy kids, robotics and coding. Something for everyone!",
                textZh:
                  "有很多选择！体育——足球、篮球、游泳。艺术——话剧、美术、合唱。科技类的孩子有机器人和编程。总有适合的！",
                actionHint: "了解各类活动",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "He loves building things. The robotics club sounds perfect. How does he sign up?",
            textZh: "他喜欢搭建东西。机器人俱乐部听起来很合适。怎么报名？",
            casualVersion: "He loves building stuff. Robotics sounds great. How do we sign up?",
            formalityVariants: {
              casual: "He's super into building. Robotics sounds perfect. How's he sign up?",
              standard: "He loves building things. The robotics club sounds perfect. How does he sign up?",
              formal:
                "He has a strong interest in construction and engineering. The robotics club appears to be an excellent fit. What is the procedure for enrollment?",
            },
          },
          {
            speaker: "them",
            role: "活动协调员",
            textEn:
              "Just fill out this registration form. Robotics meets every Tuesday and Thursday from three thirty to five. There is a small materials fee of fifty dollars per semester to cover the kits.",
            textZh: "只需要填这个报名表。机器人俱乐部每周二和周四三点半到五点。每学期有五十美元的材料费用于工具套件。",
            keyPhrases: [
              { en: "registration form", zh: "报名表" },
              { en: "materials fee", zh: "材料费" },
            ],
            casualVersion:
              "Just fill out this form. Robotics meets Tuesdays and Thursdays, 3:30 to 5. There's a small fifty-dollar materials fee per semester for the kits.",
            formalityVariants: {
              casual:
                "Just fill out this form. Robotics is Tuesdays and Thursdays, 3:30 to 5. Fifty bucks a semester for materials to cover the kits.",
              standard:
                "Just fill out this registration form. Robotics meets every Tuesday and Thursday from three thirty to five. There is a small materials fee of fifty dollars per semester to cover the kits.",
              formal:
                "Kindly complete this registration form. The robotics program convenes every Tuesday and Thursday, from fifteen thirty to seventeen hundred. A nominal materials fee of fifty dollars per semester is assessed to cover the cost of the kits.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Easy — just fill out this form. They meet Tuesdays and Thursdays, three thirty to five. It is fifty bucks per semester for the robot kits and parts. Everything else is included.",
                textZh:
                  "很简单——填一下这个表格。周二和周四，三点半到五点。每学期五十块用于机器人套件和零件。其他都包含了。",
                actionHint: "填写报名表",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That is reasonable. Does the school provide transportation home after the activities end?",
            textZh: "这个价格合理。活动结束后学校提供送回家的交通吗？",
            casualVersion: "Not bad. Is there a bus home after the activity?",
            formalityVariants: {
              casual: "That's fair. Does the school offer a ride home after activities?",
              standard: "That is reasonable. Does the school provide transportation home after the activities end?",
              formal:
                "That seems quite reasonable. Could you please clarify if the school provides transportation services for students returning home following the conclusion of these activities?",
            },
          },
          {
            speaker: "them",
            role: "活动协调员",
            textEn:
              "We have a late bus that departs at five fifteen for students in after-school programs. It follows the regular bus routes. You just need to register for the late bus separately.",
            textZh:
              "我们有一趟五点十五分出发的晚班车，为参加课后活动的学生服务。它按照常规校车路线行驶。你只需要单独注册晚班车。",
            keyPhrases: [
              { en: "late bus", zh: "晚班车" },
              { en: "register separately", zh: "单独注册" },
            ],
            casualVersion:
              "Yep, there's a late bus at five fifteen for after-school kids. Follows the regular routes. Just gotta register for it separately.",
            formalityVariants: {
              casual:
                "We got a late bus at 5:15 for after-school programs. It follows the usual routes. You just gotta register for it separately.",
              standard:
                "We have a late bus that departs at five fifteen for students in after-school programs. It follows the regular bus routes. You just need to register for the late bus separately.",
              formal:
                "We do provide a late bus service, scheduled to depart at seventeen fifteen, specifically for participants in our after-school programs. This service adheres to the established regular bus routes. Separate registration for the late bus is required.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Yes, there is a late bus at five fifteen. Same routes as the regular bus. Just sign up for it on a separate form and he is all set.",
                textZh: "有的，五点十五分有晚班车。和常规校车一样的路线。在另一个表格上注册一下就好了。",
                actionHint: "注册晚班车",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "extracurricular-intermediate",
        titleZh: "了解竞赛和表演",
        titleEn: "Competitions and Performances",
        description: "了解孩子参加比赛或演出的详情",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "My son's robotics team made it to the regional competition. What do I need to know as a parent?",
            textZh: "我儿子的机器人队进入了地区赛。作为家长我需要知道什么？",
            casualVersion: "His robotics team made regionals! What do I need to know?",
            formalityVariants: {
              casual: "My son's robotics team made it to regionals. What should I know?",
              standard: "My son's robotics team made it to regionals. What do I need to know as a parent?",
              formal:
                "My son's robotics team has qualified for the regional competition. Could you please inform me of the necessary details for parents?",
            },
          },
          {
            speaker: "them",
            role: "活动协调员",
            textEn:
              "Congratulations! The competition is on Saturday, April twelfth at the convention center downtown. Students need to arrive by eight a.m. Parents are welcome to watch. There is a thirty dollar registration fee per student.",
            textZh:
              "恭喜！比赛在四月十二日星期六，在市中心的会议中心。学生需要早上八点到。家长可以来观看。每个学生三十美元注册费。",
            casualVersion: "Congrats! Comp's Saturday, April 12th, downtown convention center. Kids gotta be there by 8 AM. Parents can totally watch. It's $30 per student to register.",
            formalityVariants: {
              casual: "Congrats! Comp's Saturday, April 12th, downtown convention center. Kids gotta be there by 8 AM. Parents can totally watch. It's $30 per student to register.",
              standard: "Congratulations! The competition is on Saturday, April twelfth at the convention center downtown. Students need to arrive by eight a.m. Parents are welcome to watch. There is a thirty dollar registration fee per student.",
              formal: "We extend our congratulations! The competition is scheduled for Saturday, April twelfth, and will be held at the downtown convention center. Student arrival is required by eight a.m. Parental attendance is encouraged. A registration fee of thirty dollars per student applies.",
            },
            keyPhrases: [
              { en: "regional competition", zh: "地区赛" },
              { en: "registration fee", zh: "注册费" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That is awesome, congrats! It is April twelfth, Saturday, downtown convention center. Kids need to be there at eight. Parents can come cheer them on. Just thirty bucks for the registration.",
                textZh:
                  "太棒了，恭喜！四月十二日周六，市中心会议中心。孩子们八点要到。家长可以来加油。注册费就三十块。",
                actionHint: "记下比赛详情",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Will the school provide transportation, or do parents need to drive?",
            textZh: "学校提供交通吗，还是家长需要自己开车？",
            formalityVariants: {
              casual: "Does the school provide transportation, or do we parents gotta drive?",
              standard: "Will the school provide transportation, or do parents need to drive?",
              formal: "Will transportation be provided by the school, or is it incumbent upon parents to arrange travel?",
            },
            casualVersion: "Does the school drive them there or do we need to?",
          },
          {
            speaker: "them",
            role: "活动协调员",
            textEn:
              "The school will charter a bus for the team. If you want to ride along as a parent volunteer, we would love that. We need at least three parent chaperones for the trip.",
            textZh:
              "学校会为团队包一辆大巴。如果你想作为家长志愿者一起去，我们非常欢迎。这趟行程我们至少需要三名家长监护人。",
            casualVersion: "School's chartering a bus for the team. If you wanna volunteer as a parent, that'd be awesome. We need at least three chaperones for the trip.",
            culturalNote: "美国学校活动中家长志愿者很常见",
            formalityVariants: {
              casual: "School's chartering a bus for the team. If you wanna volunteer as a parent, that'd be awesome. We need at least three chaperones for the trip.",
              standard: "The school will charter a bus for the team. If you want to ride along as a parent volunteer, we would love that. We need at least three parent chaperones for the trip.",
              formal: "The school will be providing a chartered bus for the team. Should you be interested in accompanying us as a parent volunteer, your participation would be greatly appreciated. A minimum of three parent chaperones is required for this excursion.",
            },
            keyPhrases: [
              { en: "charter a bus", zh: "包一辆大巴" },
              { en: "parent chaperones", zh: "家长监护人" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We have a bus for the team. But we could use more parent chaperones — we need at least three. Want to tag along? It is a lot of fun.",
                textZh: "我们有大巴给团队。但我们需要更多家长监护人——至少三个。想一起来吗？很有意思的。",
                actionHint: "考虑做志愿者监护人",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I would love to come along. What does a chaperone need to do?",
            textZh: "我很想一起去。监护人需要做什么？",
            formalityVariants: {
              casual: "I'd love to come! What's a chaperone gotta do?",
              standard: "I would love to come along. What does a chaperone need to do?",
              formal: "I would be delighted to accompany the group. Could you please outline the responsibilities required of a chaperone?",
            },
            casualVersion: "Count me in. What do chaperones actually do?",
          },
          {
            speaker: "them",
            role: "活动协调员",
            textEn:
              "Mostly just making sure the kids stay together and follow the schedule. You will help with meals, keep an eye on them between events, and make sure everyone gets back on the bus. It is pretty straightforward.",
            textZh:
              "主要就是确保孩子们待在一起并遵守日程。你会帮忙管理用餐，在比赛间隙看着他们，确保每个人都上车。挺简单的。",
            casualVersion: "Mainly just keeping the kids together and on schedule. You'll help with meals, watch 'em between events, and make sure everyone gets back on the bus. It's pretty straightforward.",
            commonMistake: {
              wrong: "It is very simple.",
              correct: "It is pretty straightforward.",
              explanation: "'straightforward' 指直接明了，不复杂，比 'simple' 更自然地道。",
            },
            formalityVariants: {
              casual: "Mainly just keeping the kids together and on schedule. You'll help with meals, watch 'em between events, and make sure everyone gets back on the bus. It's pretty straightforward.",
              standard: "Mostly just making sure the kids stay together and follow the schedule. You will help with meals, keep an eye on them between events, and make sure everyone gets back on the bus. It is pretty straightforward.",
              formal: "The primary responsibilities involve ensuring the children remain together and adhere to the established schedule. This includes assisting with meals, supervising them during transitional periods between events, and confirming all individuals board the bus. The duties are quite manageable.",
            },
            keyPhrases: [
              { en: "keep an eye on", zh: "看着/留意" },
              { en: "pretty straightforward", zh: "很简单/直截了当" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Nothing too complicated. Keep the kids together, help at mealtimes, supervise breaks, and do a headcount before the bus leaves. Easy stuff — and you get to see them compete!",
                textZh:
                  "没什么太复杂的。让孩子们待在一起，帮忙管饭，监督休息时间，大巴走之前点个名。简单的事——而且你还能看他们比赛！",
                actionHint: "了解监护人职责",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 学校实地考察 ====================
  {
    id: "education-field-trip",
    category: "education",
    titleZh: "学校实地考察",
    titleEn: "Field Trip",
    description: "处理孩子学校实地考察的相关事宜",
    otherRole: "老师",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "field-trip-basic",
        titleZh: "签署同意书",
        titleEn: "Signing Permission Slips",
        description: "了解实地考察详情并签署同意书",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "My daughter brought home a permission slip for a field trip. Can you tell me more about where they are going?",
            textZh: "我女儿带回了一张实地考察的同意书。能详细说说他们要去哪里吗？",
            casualVersion: "My kid brought home a field trip form. Where are they going exactly?",
            commonMistake: {
              wrong: "Can you tell me more where they are going?",
              correct: "Can you tell me more about where they are going?",
              explanation: "“tell me more about something” 是固定搭配。",
            },
            formalityVariants: {
              casual: "My daughter brought home a permission slip for a field trip. So, where are they going?",
              standard:
                "My daughter brought home a permission slip for a field trip. Can you tell me more about where they are going?",
              formal:
                "My daughter recently presented a permission slip for an upcoming field trip. I would appreciate it if you could provide further details regarding the destination.",
            },
          },
          {
            speaker: "them",
            role: "老师",
            textEn:
              "We are going to the natural history museum next Friday. We will leave school at nine and return by two thirty. The students will learn about dinosaurs and geology, which ties into our science unit.",
            textZh:
              "我们下周五去自然历史博物馆。早上九点出发，两点半回来。学生会学习恐龙和地质知识，和我们的科学单元相关。",
            keyPhrases: [
              { en: "permission slip", zh: "同意书/家长许可单" },
              { en: "ties into", zh: "与……相关/衔接" },
            ],
            casualVersion:
              "We're heading to the natural history museum next Friday. Leaving school at nine, back by two-thirty. Kids'll learn about dinosaurs and geology, ties right into our science unit.",
            commonMistake: {
              wrong: "We will leave school at nine and return at two thirty.",
              correct: "We will leave school at nine and return by two thirty.",
              explanation: "“by” 表示不晚于，而 “at” 表示精确时间。",
            },
            formalityVariants: {
              casual:
                "Next Friday, we're off to the natural history museum. We'll leave at nine, be back by two-thirty. The kids will get to learn about dinosaurs and geology, totally fits our science unit.",
              standard:
                "We are going to the natural history museum next Friday. We will leave school at nine and return by two thirty. The students will learn about dinosaurs and geology, which ties into our science unit.",
              formal:
                "The upcoming field trip, scheduled for next Friday, will be to the natural history museum. We anticipate departing the school premises at 9:00 AM and returning no later than 2:30 PM. The educational focus will encompass dinosaurs and geology, directly aligning with our current science curriculum.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "We are heading to the natural history museum next Friday! Leaving at nine, back by two thirty. It connects to what we are studying in science — fossils and rocks. The kids are going to love it.",
                textZh:
                  "我们下周五去自然历史博物馆！九点出发，两点半回来。和我们科学课学的化石和岩石有关。孩子们会很喜欢的。",
                actionHint: "了解行程安排",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds educational. Does she need to bring a packed lunch, or is food provided?",
            textZh: "听起来很有教育意义。她需要自带午餐还是提供食物？",
            casualVersion: "Sounds fun. Does she need to bring lunch or is it provided?",
            commonMistake: {
              wrong: "Does she need bring packed lunch, or food supply?",
              correct: "Does she need to bring a packed lunch, or is food provided?",
              explanation: "“need to do something” 是固定搭配；“provided” 更自然地表示“提供食物”。",
            },
            formalityVariants: {
              casual: "Sounds good. Does she need a packed lunch, or is food provided?",
              standard: "That sounds educational. Does she need to bring a packed lunch, or is food provided?",
              formal:
                "That sounds like an enriching experience. Could you please clarify if she is required to bring her own packed lunch, or if provisions for food will be supplied?",
            },
          },
          {
            speaker: "them",
            role: "老师",
            textEn:
              "Please pack a lunch and a water bottle. We will eat in the museum picnic area. Also, comfortable walking shoes are a must — we will be on our feet most of the day.",
            textZh: "请准备午餐和水壶。我们在博物馆野餐区吃。另外必须穿舒适的步行鞋——大部分时间都在走路。",
            keyPhrases: [
              { en: "packed lunch", zh: "自带午餐" },
              { en: "comfortable walking shoes", zh: "舒适的步行鞋" },
            ],
            casualVersion:
              "Just pack a lunch and a water bottle. We'll eat at the museum's picnic spot. And comfy walking shoes are a must — we'll be on our feet most of the day.",
            commonMistake: {
              wrong: "You must wear comfortable walking shoes.",
              correct: "comfortable walking shoes are a must",
              explanation: "“A must” 表示“必需品”，是一种地道的表达。",
            },
            formalityVariants: {
              casual:
                "Just pack a lunch and a water bottle. We'll eat at the museum's picnic spot. And comfy walking shoes are key — we'll be on our feet all day.",
              standard:
                "Please pack a lunch and a water bottle. We will eat in the museum picnic area. Also, comfortable walking shoes are a must — we will be on our feet most of the day.",
              formal:
                "Kindly ensure a packed lunch and a water bottle are prepared. We shall be utilizing the museum's designated picnic area for meals. Furthermore, comfortable and appropriate walking footwear is imperative, as we anticipate significant time spent standing and walking.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "She will need a bag lunch and water. We eat at the picnic tables there. Oh, and make sure she wears good walking shoes — lots of walking!",
                textZh: "她需要带一份便当和水。我们在那里的野餐桌吃。哦，确保她穿好走路的鞋——要走很多路！",
                actionHint: "准备午餐和穿好鞋",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. I see on the form there is a five dollar fee. What does that cover?",
            textZh: "知道了。我看表格上有五美元的费用。这是什么费用？",
            casualVersion: "The form says five bucks. What is that for?",
            commonMistake: {
              wrong: "What is that fee?",
              correct: "What does that cover?",
              explanation: "“cover” 在这里表示“包含什么费用”，更地道。",
            },
            formalityVariants: {
              casual: "Okay. Form says there's a five dollar fee. What's that for?",
              standard: "Got it. I see on the form there is a five dollar fee. What does that cover?",
              formal:
                "Understood. I've noted a five-dollar fee indicated on the form. Could you please elaborate on what this particular charge encompasses?",
            },
          },
          {
            speaker: "them",
            role: "老师",
            textEn:
              "That covers the museum admission. The bus is paid for by the school. If the fee is a hardship, please let me know privately — we have a fund to cover costs so every child can participate.",
            textZh:
              "那是博物馆门票。校车由学校付费。如果费用有困难，请私下告诉我——我们有基金来支付费用，确保每个孩子都能参加。",
            keyPhrases: [
              { en: "museum admission", zh: "博物馆门票" },
              { en: "hardship", zh: "困难/经济困难" },
            ],
            casualVersion:
              "That's just for museum admission. The school covers the bus. If the fee's a problem, just let me know privately — we've got a fund so every kid can go.",
            culturalNote: "美国学校很注重确保所有学生都能参与活动，即使是家庭经济困难的学生。",
            commonMistake: {
              wrong: "If the fee has difficulty, please let me know privately.",
              correct: "If the fee is a hardship, please let me know privately.",
              explanation: "“hardship” 指经济困难，是地道用法。",
            },
            formalityVariants: {
              casual:
                "That's just for museum admission. School's paying for the bus. If the fee's an issue, just tell me on the side — we've got a fund so every kid can go.",
              standard:
                "That covers the museum admission. The bus is paid for by the school. If the fee is a hardship, please let me know privately — we have a fund to cover costs so every child can participate.",
              formal:
                "The aforementioned fee specifically covers the museum's admission cost. Transportation via bus is funded entirely by the school. Should this fee present any financial difficulty, please do not hesitate to inform me confidentially, as we maintain a dedicated fund to ensure universal student participation.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Just the entry ticket. Transportation is covered by the school. And if the cost is an issue, please don't hesitate to tell me — no child misses out because of money. We have it covered.",
                textZh:
                  "只是门票。交通学校承担。如果费用有问题，请不要犹豫告诉我——不会有孩子因为钱而错过。我们有办法解决。",
                actionHint: "了解费用减免政策",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "field-trip-intermediate",
        titleZh: "做志愿者陪同",
        titleEn: "Volunteering as a Chaperone",
        description: "作为家长志愿者陪同实地考察",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I would like to volunteer as a chaperone for the field trip. Is there still room?",
            textZh: "我想作为志愿者陪同实地考察。还有名额吗？",
            casualVersion: "Can I come along as a chaperone? Any spots left?",
            commonMistake: {
              wrong: "Are there still places?",
              correct: "Is there still room?",
              explanation: "“还有名额吗”更自然的说法是 room 或 spots available。",
            },
            formalityVariants: {
              casual: "Wanna volunteer as a chaperone for the field trip. Got any spots left?",
              standard: "I would like to volunteer as a chaperone for the field trip. Is there still room?",
              formal:
                "I am interested in volunteering as a chaperone for the upcoming field trip. May I inquire if there are still opportunities available?",
            },
          },
          {
            speaker: "them",
            role: "老师",
            textEn:
              "We would love to have you! We still need two more parents. You would be responsible for a group of five students. Before you can chaperone, you do need a background check on file with the school.",
            textZh: "非常欢迎你！我们还需要两名家长。你将负责一组五名学生。在陪同之前，你需要在学校有备案的背景调查。",
            casualVersion: "We'd love to have ya! Still need two more parents. You'd be in charge of five students. But first, gotta get a background check on file with the school.",
            culturalNote: "美国学校对志愿者背景调查很常见，确保学生安全",
            commonMistake: {
              wrong: "you need a background check in the school.",
              correct: "you need a background check on file with the school.",
              explanation: "“on file with”表示文件备案在某处，更地道。",
            },
            formalityVariants: {
              casual: "Awesome! Yeah, we still need two parents. You'd be responsible for like five kids. Just gotta get that background check done with the school first.",
              standard: "We would love to have you! We still need two more parents. You would be responsible for a group of five students. Before you can chaperone, you do need a background check on file with the school.",
              formal: "We would be delighted to have your assistance! We are currently seeking two additional parent volunteers. Your responsibilities would entail overseeing a group of five students. Please note that a completed background check must be on file with the institution prior to chaperoning.",
            },
            keyPhrases: [
              { en: "background check", zh: "背景调查" },
              { en: "on file", zh: "备案/存档" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yes, we need more parents! You would watch a group of five kids. Just one thing — you will need a background check with the school district first. It is standard procedure for all volunteers.",
                textZh:
                  "是的，我们需要更多家长！你负责看管一组五个孩子。只有一件事——你需要先通过学区的背景调查。这是所有志愿者的标准程序。",
                actionHint: "完成背景调查",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I have not done a background check yet. How long does it take?",
            textZh: "我还没做过背景调查。需要多长时间？",
            commonMistake: {
              wrong: "I haven't done background check yet. How long it needs?",
              correct: "I have not done a background check yet. How long does it take?",
              explanation: "“做背景调查”用 do a background check；“需要多长时间”用 how long does it take。",
            },
            formalityVariants: {
              casual: "Haven't done a background check yet. How long's that usually take?",
              standard: "I have not done a background check yet. How long does it take?",
              formal: "I have not yet completed the required background check. Could you please inform me of the approximate duration for this process?",
            },
            casualVersion: "Haven't done that yet. How long does it take?",
          },
          {
            speaker: "them",
            role: "老师",
            textEn:
              "Usually about a week. You fill out a form at the front office and show your ID. They run the check and let you know. Since the trip is in two weeks, you have plenty of time.",
            textZh:
              "通常大约一周。你在前台填一个表格并出示证件。他们运行调查后通知你。因为实地考察两周后才去，你有充足的时间。",
            casualVersion: "Usually 'bout a week. Just fill out a form at the front office, show your ID. They'll run it, let ya know. Trip's in two weeks, so you got plenty of time.",
            commonMistake: {
              wrong: "You fill in a form at the front office. They operate the check.",
              correct: "You fill out a form at the front office. They run the check.",
              explanation: "“填表格”常用 fill out；“进行调查”常用 run the check。",
            },
            formalityVariants: {
              casual: "Takes about a week. Just gotta fill out the form at the front, show your ID. They'll run it, then let you know. Trip's not for two weeks, so you're good.",
              standard: "Usually about a week. You fill out a form at the front office and show your ID. They run the check and let you know. Since the trip is in two weeks, you have plenty of time.",
              formal: "The process typically requires approximately one week. You would complete a form at the main office and present your identification. Subsequently, the school will conduct the necessary background verification and inform you of the results. As the trip is scheduled for two weeks from now, you have ample time.",
            },
            keyPhrases: [
              { en: "front office", zh: "前台/行政办公室" },
              { en: "plenty of time", zh: "充足的时间" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "About a week. Just go to the office, fill out the form, bring your ID. They will email you once it clears. You still have plenty of time before the trip.",
                textZh: "大约一周。去办公室填表，带上证件。通过后他们会发邮件。离考察还有足够时间。",
                actionHint: "尽快去前台办理",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Great, I will do that today. As a chaperone, what exactly are my responsibilities during the trip?",
            textZh: "好的，我今天就去办。作为陪同，考察期间我的具体职责是什么？",
            commonMistake: {
              wrong: "What is my specific duty?",
              correct: "What exactly are my responsibilities?",
              explanation: "“职责”用 responsibilities 更常见，“具体”可以用 exactly 修饰。",
            },
            formalityVariants: {
              casual: "Cool, I'll do it today. So, what exactly am I supposed to do as a chaperone on the trip?",
              standard: "Great, I will do that today. As a chaperone, what exactly are my responsibilities during the trip?",
              formal: "Excellent, I shall attend to that today. Regarding my role as a chaperone, could you please delineate my precise responsibilities during the excursion?",
            },
            casualVersion: "I will go today. What do I actually do as a chaperone on the day?",
          },
          {
            speaker: "them",
            role: "老师",
            textEn:
              "Keep your group together at all times, follow the schedule I give you, and make sure they behave respectfully in the museum. I will give you a checklist and emergency contact numbers the morning of the trip.",
            textZh:
              "随时保持你的小组在一起，按照我给你的日程走，确保他们在博物馆表现得体。考察当天早上我会给你一份清单和紧急联系电话。",
            casualVersion: "Keep your group together, always. Stick to the schedule I give ya, and make sure they're respectful in the museum. I'll give you a checklist and emergency numbers the morning of.",
            commonMistake: {
              wrong: "make sure they behave politely in the museum. I will give you a checklist in the morning of the trip.",
              correct: "make sure they behave respectfully in the museum. I will give you a checklist the morning of the trip.",
              explanation: "behave respectfully 更自然；“考察当天早上”直接用 the morning of the trip。",
            },
            formalityVariants: {
              casual: "Just keep your kids together, stick to my schedule, and make sure they don't mess around in the museum. I'll hand you a checklist and emergency numbers that morning.",
              standard: "Keep your group together at all times, follow the schedule I give you, and make sure they behave respectfully in the museum. I will give you a checklist and emergency contact numbers the morning of the trip.",
              formal: "Please ensure your assigned group remains cohesive throughout the duration of the outing, adhere strictly to the provided itinerary, and guarantee that the students conduct themselves with decorum within the museum premises. I will furnish you with a comprehensive checklist and pertinent emergency contact information on the morning of the excursion.",
            },
            keyPhrases: [
              { en: "keep your group together", zh: "让小组待在一起" },
              { en: "behave respectfully", zh: "表现得体" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Stick with your five kids, follow the itinerary, and make sure they are respectful and safe. I will hand out a sheet with the plan and emergency numbers that morning. Simple stuff.",
                textZh:
                  "跟着你的五个孩子，按行程走，确保他们举止得体和安全。当天早上我会发一张行程和紧急联系号码的表格。很简单。",
                actionHint: "等待当天领取资料",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 学校午餐 ====================
  {
    id: "education-school-lunch",
    category: "education",
    titleZh: "学校午餐",
    titleEn: "School Lunch",
    description: "了解学校午餐项目和餐饮选择",
    otherRole: "食堂管理员",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "lunch-basic",
        titleZh: "了解午餐项目",
        titleEn: "Understanding the Lunch Program",
        description: "了解学校提供的午餐选项和费用",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I want to learn about the school lunch program. Can my child buy lunch here every day?",
            textZh: "你好，我想了解学校午餐项目。我的孩子每天都可以在这里买午餐吗？",
            casualVersion: "Hey, can my kid buy lunch at school every day? How does it work?",
            commonMistake: {
              wrong: "I want to learn about the school lunch program.",
              correct: "I'd like to learn about the school lunch program.",
              explanation: "“I want” 语气直接，在特定语境中可能显得不够礼貌；“I'd like to” 更委婉客气。",
            },
            formalityVariants: {
              casual: "Hey, wanna know about the school lunch program. Can my kid just buy lunch here every day?",
              standard: "Hi, I want to learn about the school lunch program. Can my child buy lunch here every day?",
              formal:
                "Good morning/afternoon, I am inquiring about the school lunch program. Is it possible for my child to purchase lunch at the school on a daily basis?",
            },
          },
          {
            speaker: "them",
            role: "食堂管理员",
            textEn:
              "Yes! We serve lunch daily. The standard meal is three dollars and fifty cents and includes an entree, two sides, fruit, and milk. You can prepay online or your child can pay daily.",
            textZh:
              "可以！我们每天提供午餐。标准餐三美元五十美分，包括主菜、两个配菜、水果和牛奶。你可以在线预付或孩子每天付。",
            keyPhrases: [
              { en: "prepay online", zh: "在线预付" },
              { en: "entree", zh: "主菜" },
            ],
            casualVersion:
              "Yep! We do lunch every day. Standard meal's three fifty, comes with an entree, two sides, fruit, and milk. You can pay online ahead of time or your kid can just pay daily.",
            formalityVariants: {
              casual:
                "Yeah, we serve lunch every day. It's three-fifty for the regular meal—that's an entree, two sides, fruit, and milk. You can pay online or your kid can pay each day.",
              standard:
                "Yes! We serve lunch daily. The standard meal is three dollars and fifty cents and includes an entree, two sides, fruit, and milk. You can prepay online or your child can pay daily.",
              formal:
                "Indeed. We provide lunch services on a daily basis. The standard meal is priced at three dollars and fifty cents and comprises an entree, two side dishes, a fruit selection, and milk. Payment options include online prepayment or daily on-site payment by the student.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Absolutely! Lunch is served every day. It is three fifty for a full meal — main dish, two sides, fruit, and milk. You can load money onto an account online or she can bring cash.",
                textZh:
                  "当然！每天都有午餐。全餐三块五——主菜、两个配菜、水果和牛奶。你可以在网上充值账户或她可以带现金。",
                actionHint: "了解付款方式",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That is very affordable. My child has a peanut allergy. How do you handle food allergies?",
            textZh: "价格很合理。我的孩子对花生过敏。你们怎么处理食物过敏？",
            casualVersion: "Good price. My kid is allergic to peanuts though. How do you deal with that?",
            formalityVariants: {
              casual:
                "Wow, that's super affordable. My kid's got a peanut allergy. How do you guys deal with food allergies?",
              standard: "That is very affordable. My child has a peanut allergy. How do you handle food allergies?",
              formal:
                "That pricing is quite reasonable. I must inform you that my child has a severe peanut allergy. Could you please elaborate on your protocols for managing food allergies?",
            },
          },
          {
            speaker: "them",
            role: "食堂管理员",
            textEn:
              "We take allergies very seriously. Our kitchen is completely peanut-free. Please fill out an allergy form so we have it on file. We also have a separate prep area for meals with other common allergens.",
            textZh:
              "我们非常重视过敏。我们的厨房完全无花生。请填一份过敏表格以便我们备案。我们还有一个单独的准备区用于处理其他常见过敏原的餐食。",
            keyPhrases: [
              { en: "peanut-free", zh: "无花生的" },
              { en: "allergy form", zh: "过敏表格" },
            ],
            casualVersion:
              "Oh, we're super serious about allergies. Our kitchen's totally peanut-free. Just fill out an allergy form so we've got it on file. We also got a separate spot to prep stuff with other common allergens.",
            formalityVariants: {
              casual:
                "We're super serious about allergies. Our kitchen's totally peanut-free. Just fill out an allergy form so we have it on record. We also use a separate spot for prepping meals with other common allergens.",
              standard:
                "We take allergies very seriously. Our kitchen is completely peanut-free. Please fill out an allergy form so we have it on file. We also have a separate prep area for meals with other common allergens.",
              formal:
                "We prioritize the management of allergies with utmost seriousness. Our kitchen facilities are entirely devoid of peanuts. We request that you complete an allergy information form for our official records. Furthermore, we maintain a dedicated preparation area for meals containing other prevalent allergens.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "We are a peanut-free kitchen, so no worries there. Just fill out the allergy paperwork and we will flag your child's account. We are super careful about cross-contamination too.",
                textZh:
                  "我们是无花生厨房，所以不用担心。填一下过敏文件，我们会在孩子的账户上标记。我们对交叉污染也非常小心。",
                actionHint: "填写过敏表格",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "One more question — do you offer a free or reduced lunch program for families with lower income?",
            textZh: "再问一个问题——你们为低收入家庭提供免费或减价午餐吗？",
            casualVersion: "Do you have free or cheap lunch for families that qualify?",
            formalityVariants: {
              casual:
                "Just one more thing — do you guys have that free or reduced lunch program for families who don't make much?",
              standard:
                "One more question — do you offer a free or reduced lunch program for families with lower income?",
              formal:
                "I have one final inquiry — do you provide a free or reduced-price lunch program for families whose income levels fall below a certain threshold?",
            },
          },
          {
            speaker: "them",
            role: "食堂管理员",
            textEn:
              "Yes, we do. It is based on household income. You can apply confidentially through the front office or online. If you qualify, your child gets free or reduced-price meals. It is a great program.",
            textZh:
              "有的。根据家庭收入而定。你可以在前台或网上保密申请。如果符合条件，你的孩子会获得免费或减价餐。这是个很好的项目。",
            keyPhrases: [
              { en: "free or reduced lunch", zh: "免费或减价午餐" },
              { en: "apply confidentially", zh: "保密申请" },
            ],
            culturalNote:
              "The National School Lunch Program provides free or reduced-price meals to eligible families. Applications are confidential and widely available.",
            casualVersion:
              "Yeah, totally. It's based on how much your household makes. You can apply super confidentially at the front office or just online. If you qualify, your kid gets free or cheaper meals. It's a real good program.",
            formalityVariants: {
              casual:
                "Yep. It's based on household income. You can apply discreetly at the front office or online. If you qualify, your kid gets free or cheaper meals. It's a pretty good program.",
              standard:
                "Yes, we do. It is based on household income. You can apply confidentially through the front office or online. If you qualify, your child gets free or reduced-price meals. It is a great program.",
              formal:
                "Yes, that is correct. Eligibility is determined by household income. Applications can be submitted confidentially either in person at the front office or via our online portal. Should you meet the criteria, your child will be provided with either free or reduced-price meals. It is a highly beneficial program.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Absolutely. It is income-based and totally confidential. Apply online or at the office — nobody will know either way. Lots of families use it. Your child just gets lunch like everyone else.",
                textZh:
                  "当然。根据收入来定，完全保密。在网上或办公室申请——别人不会知道。很多家庭都在用。你的孩子就和其他人一样吃午餐。",
                actionHint: "了解申请流程",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "lunch-intermediate",
        titleZh: "讨论营养和菜单",
        titleEn: "Discussing Nutrition and Menus",
        description: "和食堂管理员讨论菜单和营养需求",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "My child says the food is too different from what she eats at home. She barely touches her lunch. Can I see the monthly menu?",
            textZh: "我的孩子说食物和家里吃的太不一样了。她午餐几乎不碰。我能看看月度菜单吗？",
            casualVersion: "My kid says the food is too different from home and she won't eat. Can I see the menu?",
            commonMistake: {
              wrong: "She almost doesn't eat her lunch.",
              correct: "She barely touches her lunch.",
              explanation: "barely touches 听起来更自然，表达几乎不吃或很少吃。",
            },
            formalityVariants: {
              casual: "Kid says the food's way different from home. She barely eats lunch. Can I see the menu?",
              standard:
                "My child says the food is too different from what she eats at home. She barely touches her lunch. Can I see the monthly menu?",
              formal:
                "My child has expressed that the food offerings are quite dissimilar to what she typically consumes at home, resulting in her eating very little of her lunch. May I please review the monthly menu?",
            },
          },
          {
            speaker: "them",
            role: "食堂管理员",
            textEn:
              "Of course. Here is this month's menu. We try to offer variety. If there are specific foods she likes, we can sometimes accommodate requests. We also allow students to bring lunch from home if they prefer.",
            textZh:
              "当然。这是这个月的菜单。我们尽量提供多样选择。如果有她喜欢的特定食物，我们有时可以满足要求。我们也允许学生自带午餐。",
            casualVersion: "Sure. Here's this month's menu. We try for lots of choices. If there's specific stuff she likes, sometimes we can do it. Kids can also bring their own lunch, too.",
            formalityVariants: {
              casual: "Sure, here's this month's menu. We aim for variety. If she has specific favorites, we might be able to make them happen. And yeah, kids can always pack their own lunch.",
              standard: "Of course. Here is this month's menu. We try to offer a variety of choices. If there are specific foods she likes, we can sometimes accommodate requests. We also allow students to bring their own lunch.",
              formal: "Certainly. This is our current monthly menu. We endeavor to provide a diverse selection of choices. Should there be any particular food preferences your child has, we may occasionally be able to fulfill such requests. Furthermore, students are also permitted to bring their own packed lunches.",
            },
            keyPhrases: [
              { en: "accommodate requests", zh: "满足要求" },
              { en: "bring lunch from home", zh: "自带午餐" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Here you go — this is the full menu. We rotate dishes to keep things interesting. She is also welcome to bring her own lunch if she prefers. Is there anything specific she would eat?",
                textZh:
                  "给你——这是完整菜单。我们轮换菜品保持新鲜感。如果她更喜欢的话也欢迎自带午餐。有什么她具体会吃的吗？",
                actionHint: "查看菜单",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "She likes rice and noodles. Are those ever on the menu?",
            textZh: "她喜欢米饭和面条。菜单上有这些吗？",
            commonMistake: {
              wrong: "Are these on the menu?",
              correct: "Are those ever on the menu?",
              explanation: "ever on the menu 询问是否“曾经”或“经常”有，比简单地问“有没有”更自然。",
            },
            formalityVariants: {
              casual: "She likes rice and noodles. Do you guys ever have 'em?",
              standard: "She likes rice and noodles. Are those ever on the menu?",
              formal: "My child enjoys rice and noodles. Are these particular items ever featured on your menu?",
            },
            casualVersion: "She is a rice and noodles kid. Do you ever serve those?",
          },
          {
            speaker: "them",
            role: "食堂管理员",
            textEn:
              "We serve rice about twice a week and we have an Asian noodle bowl option on Wednesdays. I can also make sure there is always a rice option available for her as a side if that helps.",
            textZh:
              "我们大约每周两次供应米饭，周三有亚洲面条碗的选项。如果有帮助的话，我也可以确保她总有米饭作为配菜的选择。",
            casualVersion: "We do rice 'bout twice a week, and there's an Asian noodle bowl on Wednesdays. Also, I can make sure she always has rice as a side if that works.",
            formalityVariants: {
              casual: "We usually do rice a couple times a week, and there's an Asian noodle bowl on Wednesdays. I can also make sure she always has rice as a side, if that'd be good.",
              standard: "We serve rice about twice a week and we have an Asian noodle bowl option on Wednesdays. I can also make sure there is always a rice option available for her as a side if that helps.",
              formal: "We provide rice approximately bi-weekly, and an Asian noodle bowl option is featured every Wednesday. Furthermore, I can ensure that a rice side option is consistently available for her, should that be beneficial.",
            },
            keyPhrases: [
              { en: "side option", zh: "配菜选择" },
              { en: "available for her", zh: "为她准备/可供她选择" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Rice shows up a couple times a week, and Wednesdays we do an Asian-style noodle bowl. Tell you what — I can make sure rice is always an option for her. Easy fix.",
                textZh: "米饭每周出现几次，周三有亚洲风味面条碗。这样吧——我可以确保她总能选米饭。小事一桩。",
                actionHint: "确认特殊安排",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be wonderful. Do you have any tips for helping her try new American foods gradually?",
            textZh: "那太好了。你有什么建议帮助她逐渐尝试新的美式食物吗？",
            commonMistake: {
              wrong: "Do you have any suggestions for help her try new American foods gradually?",
              correct: "Do you have any tips for helping her try new American foods gradually?",
              explanation: "tips 比 suggestions 更口语化，更常用于寻求实用建议；for helping 是正确搭配。",
            },
            formalityVariants: {
              casual: "That'd be great. Any tips for getting her to try new American stuff slowly?",
              standard: "That would be wonderful. Do you have any tips for helping her try new American foods gradually?",
              formal: "That would be most appreciated. Do you happen to have any recommendations for encouraging her to acclimate to new American culinary options progressively?",
            },
            casualVersion: "That would be great. Any tips for getting her to try new foods slowly?",
          },
          {
            speaker: "them",
            role: "食堂管理员",
            textEn:
              "We have a tasting program where kids can try small portions of new foods with no pressure. Tell her she can always take a tiny bit to try. Most kids come around eventually when they see their friends eating it.",
            textZh:
              "我们有一个品尝项目，孩子们可以无压力地尝试少量新食物。告诉她她可以每次只拿一点点尝试。大多数孩子看到朋友在吃之后最终都会接受的。",
            casualVersion: "We've got this tasting program where kids can try little bits of new stuff, no pressure. Just tell her she can grab a tiny bit to try. Most kids usually come around once they see their friends eating it.",
            formalityVariants: {
              casual: "We've got a tasting program where kids can try little bits of new stuff, zero pressure. Just tell her she can always grab a tiny piece to taste. Most kids usually get on board once they see their friends eating it.",
              standard: "We have a tasting program where kids can try small portions of new foods with no pressure. Tell her she can always take a tiny bit to try. Most kids come around eventually when they see their friends eating it.",
              formal: "We offer a dedicated tasting program designed to allow children to sample small portions of novel food items without any expectation. Please inform her that she is welcome to take a minimal amount for tasting purposes. Our experience suggests that most children eventually adapt once they observe their peers consuming these foods.",
            },
            keyPhrases: [
              { en: "tasting program", zh: "品尝项目" },
              { en: "come around eventually", zh: "最终接受/慢慢习惯" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We do a no-pressure tasting thing — kids can try a tiny bit of something new. No one has to eat anything they don't want. Once she sees other kids eating it, she will probably start trying more on her own.",
                textZh:
                  "我们有无压力品尝活动——孩子可以尝一小口新东西。没有人必须吃不想吃的。一旦她看到其他孩子在吃，她可能会自己开始尝试更多。",
                actionHint: "鼓励尝试新食物",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 特殊教育 ====================
  {
    id: "education-special-education",
    category: "education",
    titleZh: "特殊教育",
    titleEn: "Special Education",
    description: "了解和申请特殊教育服务",
    otherRole: "特教协调员",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "special-ed-basic",
        titleZh: "了解特教服务",
        titleEn: "Understanding Special Education Services",
        description: "咨询孩子是否需要和如何获得特教服务",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "My son's teacher suggested he might benefit from special education services. I am not sure what that means. Can you explain?",
            textZh: "我儿子的老师建议他可能需要特殊教育服务。我不太明白是什么意思。能解释一下吗？",
            casualVersion:
              "His teacher said he might need special ed. I don't really know what that means. Can you help?",
            commonMistake: {
              wrong:
                "My son's teacher said he might need special education services. I don't understand what means. Can you explain?",
              correct:
                "My son's teacher suggested he might need special education services. I'm not sure what that means. Can you explain?",
              explanation: "直接翻译的“what means”不自然；“what that means”更地道。",
            },
            formalityVariants: {
              casual: "My son's teacher said he might need special ed. I'm kinda lost. Can you explain?",
              standard:
                "My son's teacher suggested he might need special education services. I'm not sure what that entails. Could you please explain?",
              formal:
                "My son's teacher has indicated that he may be in need of special education services. I'm unfamiliar with the specifics of such provisions. Would you be so kind as to provide a comprehensive explanation?",
            },
          },
          {
            speaker: "them",
            role: "特教协调员",
            textEn:
              "Of course. Special education means your child gets extra support tailored to his needs. It could be extra time on tests, a smaller class, or one-on-one help with reading. First, we do an evaluation to see what support he needs.",
            textZh:
              "当然。特殊教育意味着你的孩子获得根据他需求定制的额外支持。可能是考试延长时间、小班教学或一对一阅读辅导。首先我们会做一个评估来看他需要什么支持。",
            keyPhrases: [
              { en: "tailored to his needs", zh: "根据他的需求定制" },
              { en: "evaluation", zh: "评估" },
            ],
            casualVersion:
              "Sure. Special ed just means your kid gets extra help, customized for them. Like, maybe more time on tests, a smaller class, or one-on-one reading help. First, we'll do an evaluation to figure out what support they need.",
            formalityVariants: {
              casual:
                "Sure. Special ed just means your kid gets extra help, customized for them. Like, maybe more time on tests, a smaller class, or one-on-one reading help. First, we'll do an evaluation to figure out what support they need.",
              standard:
                "Of course. Special education provides tailored support for your child's specific needs. This could include extended test time, smaller class sizes, or individualized reading assistance. We begin with an evaluation to determine the necessary support.",
              formal:
                "Certainly. Special education provisions are designed to furnish your child with individualized support commensurate with their specific requirements. This may manifest as accommodations such as extended time for assessments, enrollment in smaller instructional cohorts, or dedicated one-on-one literacy intervention. Our initial step involves a comprehensive evaluation to ascertain the optimal support framework.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Don't worry, it is a good thing. It just means extra help designed specifically for him. Could be anything from more time on tests to a reading specialist. We start with an assessment to figure out what he needs.",
                textZh:
                  "别担心，这是好事。只是意味着专门为他设计的额外帮助。可能是考试加时间到阅读专家等任何东西。我们从评估开始，弄清楚他需要什么。",
                actionHint: "了解评估流程",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What does the evaluation involve? Will it be stressful for him?",
            textZh: "评估包括什么？对他来说会有压力吗？",
            casualVersion: "What happens in the evaluation? Will it stress him out?",
            commonMistake: {
              wrong: "What does the evaluation include? Will it be stressful for him?",
              correct: "What does the evaluation involve? Will it be stressful for him?",
              explanation: "“include”更侧重包含哪些具体项目，“involve”更强调涉及的整个过程。",
            },
            formalityVariants: {
              casual: "So, what's the evaluation like? Will it be rough on him?",
              standard: "What does the evaluation process entail? Will it be a stressful experience for him?",
              formal:
                "Could you please elaborate on the components of the evaluation? Furthermore, will this process impose any undue stress upon my child?",
            },
          },
          {
            speaker: "them",
            role: "特教协调员",
            textEn:
              "It is very low-key. A specialist will work with him one-on-one through games, puzzles, and simple questions. It feels more like play than a test. It usually takes two to three sessions over a couple of weeks.",
            textZh:
              "非常轻松。专家会通过游戏、拼图和简单问题与他一对一互动。感觉更像玩耍而不是考试。通常需要两到三次，持续几周。",
            keyPhrases: [
              { en: "low-key", zh: "轻松的/低调的" },
              { en: "feels more like play", zh: "感觉更像玩耍" },
            ],
            casualVersion:
              "It's super chill. A specialist'll just hang out with him, one-on-one, doing games, puzzles, easy questions. More like playtime than a test, really. Usually a couple sessions, spread out over a few weeks.",
            formalityVariants: {
              casual:
                "It's super chill. A specialist'll just hang out with him, one-on-one, doing games, puzzles, easy questions. More like playtime than a test, really. Usually a couple sessions, spread out over a few weeks.",
              standard:
                "It's quite relaxed. A specialist will engage with him individually using games, puzzles, and straightforward questions. It's designed to feel more like play rather than an examination. This typically involves two to three sessions spread across several weeks.",
              formal:
                "The process is designed to be very unobtrusive. A qualified specialist will interact with him on an individualized basis, employing methods such as games, puzzles, and rudimentary questioning. The experience is intended to resemble recreational activity more than a formal assessment. This typically comprises two to three sessions disbursed over a period of several weeks.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "It is really relaxed — no stress at all. The specialist does activities, games, and asks some questions. Kids usually enjoy it. It takes about two or three visits over a couple weeks.",
                textZh:
                  "非常放松——完全没有压力。专家做活动、游戏和问一些问题。孩子们通常很喜欢。大约两到三次访问，持续几周。",
                actionHint: "让孩子放松面对",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "If they find he needs services, what happens next?",
            textZh: "如果他们发现他需要服务，接下来会怎样？",
            casualVersion: "What happens if they say he needs help?",
            commonMistake: {
              wrong: "If they find he needs services, what next?",
              correct: "If they find he needs services, what happens next?",
              explanation: "“What next?”太生硬，少了动词“happens”显得不完整不自然。",
            },
            formalityVariants: {
              casual: "So, if he needs services, what's the next step?",
              standard: "Should he be found to require services, what would be the subsequent steps?",
              formal:
                "In the event that the evaluation indicates a need for services, what precisely is the succeeding procedural stage?",
            },
          },
          {
            speaker: "them",
            role: "特教协调员",
            textEn:
              "We create an Individualized Education Program, called an IEP. It is a plan that outlines his goals and the support he will receive. You will be part of the team that designs it — parents are essential to the process.",
            textZh:
              "我们会制定一个个性化教育计划，叫做IEP。这是一个列出他的目标和将获得的支持的计划。你会是设计团队的一部分——家长在这个过程中至关重要。",
            keyPhrases: [
              { en: "IEP", zh: "个性化教育计划" },
              { en: "part of the team", zh: "团队的一部分" },
            ],
            casualVersion:
              "We put together an Individualized Education Program, or an IEP. It's basically a plan laying out his goals and what support he'll get. You'll be part of the team designing it – parents are super important in this.",
            culturalNote: "IEP（Individualized Education Program）是美国特殊教育的专用术语，对中国家长来说可能比",
            formalityVariants: {
              casual:
                "We put together an Individualized Education Program, or an IEP. It's basically a plan laying out his goals and what support he'll get. You'll be part of the team designing it – parents are super important in this.",
              standard:
                "We will develop an Individualized Education Program, commonly referred to as an IEP. This document delineates his specific goals and the comprehensive support he is to receive. You will be an integral member of the team responsible for its formulation, as parental involvement is paramount to this process.",
              formal:
                "We shall then proceed to formulate an Individualized Education Program, designated as an IEP. This comprehensive document will precisely delineate his educational objectives and the requisite supportive interventions. Your participation as a collaborative member of the design team is unequivocally indispensable, as parental input holds foundational importance throughout this entire undertaking.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Then we build an IEP — an Individualized Education Program. It spells out exactly what help he gets and what goals to work toward. You sit at the table with us to create it. Your voice matters.",
                textZh:
                  "然后我们制定IEP——个性化教育计划。明确他获得什么帮助和努力的目标。你和我们一起坐下来制定。你的意见很重要。",
                actionHint: "参与IEP制定",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "special-ed-intermediate",
        titleZh: "参加IEP会议",
        titleEn: "Attending an IEP Meeting",
        description: "参加孩子的IEP讨论会议",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "This is my first IEP meeting and I am a little nervous. What should I expect?",
            textZh: "这是我第一次参加IEP会议，有点紧张。我应该期待什么？",
            casualVersion: "First IEP meeting and I'm nervous. What is going to happen?",
            commonMistake: {
              wrong: "I very nervous. What I should expect?",
              correct: "I'm a little nervous. What should I expect?",
              explanation: "中文母语者常省略be动词，并可能颠倒疑问句语序。",
            },
            formalityVariants: {
              casual: "First IEP meeting, kinda nervous. What should I expect?",
              standard: "This is my first IEP meeting, and I'm a little nervous. What should I expect?",
              formal:
                "This is my initial IEP meeting, and I confess I'm feeling a bit apprehensive. Could you please outline what I should anticipate?",
            },
          },
          {
            speaker: "them",
            role: "特教协调员",
            textEn:
              "Don't be nervous — you are the expert on your child. The team will present the evaluation results, discuss your son's strengths and challenges, and propose goals. You can ask questions at any time and suggest changes.",
            textZh:
              "不要紧张——你是你孩子方面的专家。团队会展示评估结果，讨论你儿子的优势和挑战，并提出目标。你可以随时提问和建议修改。",
            casualVersion: "Don't sweat it—you're the expert on your kid. We'll show you assessment results, talk about his strengths and challenges, and suggest goals. You can ask questions or suggest changes whenever.",
            culturalNote: "美国办理登机时不需要说'请问'，直接说目的即可",
            commonMistake: {
              wrong: "Don't nervous. You are expert.",
              correct: "Don't be nervous. You are the expert.",
              explanation: "中文母语者常省略be动词和冠词。'Don't nervous'是常见错误。",
            },
            formalityVariants: {
              casual: "No worries, you're the expert on your kid. We'll show you the assessments, chat about his strengths and challenges, and propose goals. You can jump in with questions or changes anytime.",
              standard: "Don't be nervous—you are the expert on your child. The team will present assessment results, discuss your son's strengths and challenges, and propose goals. You can ask questions and suggest modifications at any time.",
              formal: "Please do not feel apprehensive; you possess invaluable expertise regarding your child. The team will comprehensively present assessment outcomes, deliberate on your son's particular strengths and areas for growth, and subsequently outline proposed objectives. You are encouraged to interject with inquiries and recommend revisions at your discretion.",
            },
            keyPhrases: [
              { en: "you are the expert on your child", zh: "你是你孩子方面的专家" },
              { en: "propose goals", zh: "提出目标" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Nothing to worry about. You know your kid best. We will go over what we found, talk about what he needs, and set goals together. Speak up any time — your input is the most important part.",
                textZh:
                  "没什么好担心的。你最了解你的孩子。我们会讨论我们发现了什么、他需要什么、一起设定目标。随时发言——你的意见是最重要的部分。",
                actionHint: "准备好提问",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "If I disagree with something in the plan, can I say so?",
            textZh: "如果我不同意计划中的某些内容，我可以说吗？",
            culturalNote: "美国文化中，家长直接提问甚至质疑是常态，体现参与感。",
            commonMistake: {
              wrong: "If I disagree something, can I say?",
              correct: "If I disagree with something, can I say so?",
              explanation: "'disagree'后需加'with'。'say so'比'say'更完整。",
            },
            formalityVariants: {
              casual: "What if I don't agree with part of the plan? Can I say something?",
              standard: "If I disagree with something in the plan, can I express that?",
              formal: "Should I find myself in disagreement with any aspect of the proposed plan, would it be permissible for me to articulate my reservations?",
            },
            casualVersion: "What if I don't agree with something? Can I push back?",
          },
          {
            speaker: "them",
            role: "特教协调员",
            textEn:
              "Absolutely. You have every right to disagree, ask for modifications, or request additional services. Nothing gets finalized without your signature. You can also bring an advocate or translator if that helps.",
            textZh:
              "当然可以。你完全有权不同意、要求修改或请求额外服务。没有你的签名什么都不会最终确定。如果有帮助的话你还可以带一个维权代表或翻译。",
            casualVersion: "Totally. You've got every right to disagree, ask for changes, or get more services. Nothing's final without your signature. You can even bring an advocate or translator if that helps.",
            culturalNote: "美国家长有权为孩子争取，甚至自带法律代表或翻译，这与一些文化不同。",
            commonMistake: {
              wrong: "You have right to disagree. Nothing final without your sign.",
              correct: "You have every right to disagree. Nothing gets finalized without your signature.",
              explanation: "'right'前常需限定词。'sign'是动词，'signature'是名词。",
            },
            formalityVariants: {
              casual: "Yep. You can totally disagree, ask for changes, or more help. Nothing's set until you sign it. Bring an advocate or translator if you want.",
              standard: "Absolutely. You have every right to disagree, ask for modifications, or request additional services. Nothing gets finalized without your signature. You can also bring an advocate or translator if that helps.",
              formal: "Indeed. You are fully entitled to express disagreement, seek modifications, or petition for supplementary services. No elements of the plan will be ratified without your explicit endorsement. Furthermore, you are welcome to be accompanied by an advocate or translator, should that facilitate your participation.",
            },
            keyPhrases: [
              { en: "nothing gets finalized without your signature", zh: "没有你的签名什么都不会最终确定" },
              { en: "advocate", zh: "维权代表" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "One hundred percent. You are a full partner in this. If something doesn't feel right, say so. You don't sign until you are comfortable. And you can bring someone with you — a friend, an advocate, a translator.",
                textZh:
                  "百分之百可以。你是这个过程中的完全合作伙伴。如果有什么感觉不对，说出来。你不满意之前不用签。你还可以带人来——朋友、维权代表、翻译。",
                actionHint: "了解家长权利",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That makes me feel much better. How often will we review the IEP to see if it is working?",
            textZh: "这让我安心多了。我们多久审查一次IEP看看它是否有效？",
            commonMistake: {
              wrong: "That make me feel better. How often we review?",
              correct: "That makes me feel better. How often will we review?",
              explanation: "主谓一致'makes'。疑问句中'will'不可省略或错位。",
            },
            formalityVariants: {
              casual: "Okay, good to know. How often do we check the IEP to see if it's working?",
              standard: "That makes me feel much better. How often will we review the IEP to ascertain its effectiveness?",
              formal: "I find that reassuring. Could you please elaborate on the frequency of the IEP reviews to evaluate its efficacy?",
            },
            casualVersion: "Good to know. How often do we check if the plan is working?",
          },
          {
            speaker: "them",
            role: "特教协调员",
            textEn:
              "We formally review the IEP once a year, but you can request a meeting anytime if you have concerns. His teachers will also send home progress reports every quarter so you can track how he is doing.",
            textZh:
              "我们每年正式审查一次IEP，但如果你有顾虑可以随时要求开会。他的老师每季度也会寄送进度报告让你跟踪他的情况。",
            casualVersion: "We formally review it once a year, but you can ask for a meeting whenever you're worried. His teachers'll also send home progress reports every quarter so you can see how he's doing.",
            culturalNote: "美国学校与家长沟通频繁，家长可随时要求会议，重视家长参与。",
            commonMistake: {
              wrong: "Review once year. Send progress report.",
              correct: "Review once a year. Send home progress reports.",
              explanation: "'once a year'是固定搭配。'progress reports'常用复数。",
            },
            formalityVariants: {
              casual: "We officially review it annually, but you can ask for a meeting anytime if you're worried. His teachers will also send quarterly progress reports so you can track his progress.",
              standard: "We formally review the IEP once a year, but you can request a meeting anytime if you have concerns. His teachers will also send home progress reports every quarter so you can track how he is doing.",
              formal: "The IEP undergoes a formal review on an annual basis; however, you are welcome to request an unscheduled meeting at any point should you have any concerns. Furthermore, his teachers will dispatch progress reports each quarter to enable you to monitor his developmental trajectory.",
            },
            keyPhrases: [
              { en: "formally review", zh: "正式审查" },
              { en: "progress reports", zh: "进度报告" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Once a year officially, but you can call a meeting whenever you want. Plus his teachers send quarterly updates on how he is progressing toward his goals. You will always know how things are going.",
                textZh:
                  "每年一次正式审查，但你随时可以召集会议。另外老师每季度发送他目标进展的更新。你随时都能了解情况。",
                actionHint: "记下审查频率",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 转学 ====================
  {
    id: "education-transfer-school",
    category: "education",
    titleZh: "转学",
    titleEn: "Transferring Schools",
    description: "办理孩子转学手续",
    otherRole: "注册办",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "transfer-basic",
        titleZh: "办理转学手续",
        titleEn: "Processing a School Transfer",
        description: "从一所学校转到另一所学校",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "We are moving to a different neighborhood next month. How do I transfer my son to a school in the new area?",
            textZh: "我们下个月要搬到另一个社区。我怎么把儿子转到新区域的学校？",
            casualVersion: "We are moving next month. How do I switch my kid's school?",
            commonMistake: {
              wrong: "How to transfer my son to a school in the new area?",
              correct: "How do I transfer my son to a school in the new area?",
              explanation: "中文没有“助动词”概念，容易漏掉 do 或 does",
            },
            formalityVariants: {
              casual: "We're moving next month. How do I get my son into a new school?",
              standard:
                "We are moving to a different neighborhood next month. How do I transfer my son to a school in the new area?",
              formal:
                "We will be relocating to a different neighborhood next month. I am inquiring about the procedure for transferring my son to a school in the new area.",
            },
          },
          {
            speaker: "them",
            role: "注册办",
            textEn:
              "First, you will need to notify your current school and request his records be transferred. Then contact the new school's enrollment office with your new address proof. They will guide you through their registration.",
            textZh:
              "首先，你需要通知现在的学校并要求转移他的档案。然后带着你的新地址证明联系新学校的注册办。他们会指导你完成注册。",
            keyPhrases: [
              { en: "request records be transferred", zh: "要求转移档案" },
              { en: "enrollment office", zh: "注册办公室" },
            ],
            casualVersion:
              "First, you'll need to tell your current school, get his records transferred. Then contact the new school.",
            formalityVariants: {
              casual: "First, tell your current school to transfer his records. Then hit up the new school.",
              standard:
                "First, you will need to notify your current school and request his records be transferred. Then contact the new school.",
              formal:
                "Initially, you will be required to formally notify your current school and request the transfer of his academic records. Subsequently, please contact the new school.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Here is what you do: tell his current school you are leaving and ask them to send his records. Then go to the new school with proof of your new address. They handle the rest.",
                textZh:
                  "你要这么做：告诉现在的学校你要走了，让他们发送档案。然后带着新地址证明去新学校。剩下的他们处理。",
                actionHint: "按步骤办理",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What records do I need from the current school?",
            textZh: "我需要从现在的学校拿什么档案？",
            casualVersion: "What paperwork do I need from his current school?",
            commonMistake: {
              wrong: "What records I need from the current school?",
              correct: "What records do I need from the current school?",
              explanation: "中文没有“助动词”概念，容易漏掉 do 或 does",
            },
            formalityVariants: {
              casual: "What records do I need from his current school?",
              standard: "What records do I need from the current school?",
              formal: "Could you please specify which records I will require from the current educational institution?",
            },
          },
          {
            speaker: "them",
            role: "注册办",
            textEn:
              "You will need his transcript, immunization records, and any IEP or special education documents if applicable. We can usually send those directly to the new school electronically.",
            textZh:
              "你需要他的成绩单、免疫记录，以及任何IEP或特殊教育文件（如果有的话）。我们通常可以电子方式直接发送给新学校。",
            keyPhrases: [
              { en: "transcript", zh: "成绩单" },
              { en: "send electronically", zh: "电子方式发送" },
            ],
            casualVersion:
              "You'll need his transcript, immunization records, and any IEP or special ed docs if he has 'em. We can usually just send 'em straight to the new school electronically.",
            culturalNote: "IEP (Individualized Education Program) 是美国特教体系中的重要文件，在中国可能不常",
            formalityVariants: {
              casual:
                "You'll need his transcript, shot records, and any special ed stuff. We can usually just zap 'em to the new school.",
              standard:
                "You will need his transcript, immunization records, and any IEP or special education documents if applicable. We can usually send those directly to the new school electronically.",
              formal:
                "You will require his academic transcript, comprehensive immunization records, and any Individualized Education Program (IEP) or special education documentation, if applicable. We are typically able to transmit these directly to the new institution via electronic means.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Transcript, shot records, and any special ed paperwork. We can zap those over to the new school digitally — you just need to sign a release form.",
                textZh: "成绩单、疫苗记录和任何特教文件。我们可以电子发送给新学校——你只需要签一个授权表。",
                actionHint: "签署档案转移授权",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How long will it take for him to be enrolled in the new school?",
            textZh: "他在新学校注册需要多长时间？",
            casualVersion: "How fast can he start at the new school?",
            commonMistake: {
              wrong: "How long will for him to be enrolled in the new school?",
              correct: "How long will it take for him to be enrolled in the new school?",
              explanation: "容易漏掉句子主语 it",
            },
            formalityVariants: {
              casual: "How long 'til he's in the new school?",
              standard: "How long will it take for him to be enrolled in the new school?",
              formal: "What is the estimated timeframe for his enrollment at the new educational institution?",
            },
          },
          {
            speaker: "them",
            role: "注册办",
            textEn:
              "If you have all the documents ready, most schools can enroll him within a day or two. Some allow same-day enrollment. I would recommend calling the new school this week so everything is ready before you move.",
            textZh:
              "如果你所有文件都准备好了，大多数学校一到两天就能完成注册。有些允许当天注册。我建议你这周就给新学校打电话，这样搬家前一切都准备好。",
            keyPhrases: [
              { en: "same-day enrollment", zh: "当天注册" },
              { en: "everything is ready", zh: "一切都准备好" },
            ],
            casualVersion:
              "If you've got all the docs ready, most schools can enroll him in a day or two. Some even do same-day. I'd call the new school this week, get everything set before you move.",
            culturalNote: "美国学校办理转学手续通常非常高效，一两天甚至当天就能完成，这可能与中国经验不同。",
            formalityVariants: {
              casual:
                "Docs ready? Most schools'll enroll him in a day or two. Some even do same-day. Seriously, call the new school this week, get it all squared away before you move.",
              standard:
                "If you have all the documents ready, most schools can enroll him within a day or two. Some allow same-day enrollment. I would recommend calling the new school this week so everything is ready before you move.",
              formal:
                "Provided all necessary documentation is prepared, most educational institutions are capable of processing enrollment within one to two business days, with some even facilitating same-day enrollment. I would highly recommend contacting the new school this week to ensure all arrangements are finalized prior to your relocation.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Pretty quick — one to two days if your papers are in order. Some schools even let kids start right away. Call them ahead of time so there is no gap in his schooling.",
                textZh: "很快——如果文件齐全一到两天。有些学校甚至让孩子马上开始。提前打电话这样他的学业不会中断。",
                actionHint: "提前联系新学校",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "transfer-intermediate",
        titleZh: "处理学分转换",
        titleEn: "Handling Credit Transfers",
        description: "确保课程学分在新学校被认可",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "I am worried that my daughter's credits from her current school might not transfer. She is in tenth grade and has taken some advanced courses.",
            textZh: "我担心女儿现在学校的学分可能不能转。她十年级了，上了一些高级课程。",
            casualVersion:
              "Will my daughter's credits transfer okay? She is in tenth grade with some advanced classes.",
            commonMistake: {
              wrong: "I am worried that her credits cannot transfer.",
              correct: "I am worried that her credits might not transfer.",
              explanation: "中文常直接说“不能”，但英文中表达不确定性时用“might not”更自然。",
            },
            formalityVariants: {
              casual: "Worried her credits won't transfer. She's in tenth grade, took some advanced courses.",
              standard:
                "I am worried that my daughter's current school credits might not transfer. She is in tenth grade and has taken some advanced courses.",
              formal:
                "I have concerns regarding the potential transferability of my daughter's current school credits. She is presently in tenth grade and has completed several advanced courses.",
            },
          },
          {
            speaker: "them",
            role: "注册办",
            textEn:
              "Most credits transfer without issues, especially standard courses. For advanced or AP classes, the new school's counselor will review the syllabi to confirm equivalency. Can you bring her course descriptions?",
            textZh:
              "大多数学分转换没有问题，特别是标准课程。对于高级或AP课程，新学校的顾问会审核课程大纲以确认等效性。你能带她的课程描述来吗？",
            casualVersion: "Most credits transfer fine, especially standard ones. For advanced/AP, the advisor'll check the syllabus to make sure they match. Can you bring her course descriptions?",
            commonMistake: {
              wrong: "confirm same",
              correct: "confirm equivalency",
              explanation: "“equivalency”指“等同性”，比直接说“same”（相同）更专业准确。",
            },
            formalityVariants: {
              casual: "Most credits transfer fine, especially standard ones. For advanced/AP, the advisor'll check the syllabus to make sure they match. Can you bring her course descriptions?",
              standard: "Most credits transfer without issues, especially standard courses. For advanced or AP classes, the new school's advisor will review the course syllabus to confirm equivalency. Could you bring her course descriptions?",
              formal: "The majority of credits are typically transferable without incident, particularly those for standard coursework. In the case of advanced placement or AP classes, the new school's academic advisor will undertake a comprehensive review of the course syllabus to ascertain equivalency. Would you be able to provide the relevant course descriptions?",
            },
            keyPhrases: [
              { en: "equivalency", zh: "等效性" },
              { en: "course descriptions", zh: "课程描述" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Standard classes usually transfer no problem. AP and honors might need a closer look. Bring her course descriptions and syllabi so the counselor can match them up. It usually works out.",
                textZh:
                  "标准课程通常没问题。AP和荣誉课程可能需要仔细看看。带上她的课程描述和大纲让顾问匹配。通常都能解决。",
                actionHint: "准备课程描述",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What if the new school does not have the same advanced courses? She was taking AP Chemistry.",
            textZh: "如果新学校没有相同的高级课程怎么办？她在上AP化学。",
            commonMistake: {
              wrong: "What if the new school no same advanced courses?",
              correct: "What if the new school does not have the same advanced courses?",
              explanation: "中文习惯省略be动词或助动词，但英文不能直接说“no same courses”。",
            },
            formalityVariants: {
              casual: "What if the new school doesn't have those advanced courses? She was doing AP Chem.",
              standard: "What if the new school does not have the same advanced courses? She was taking AP Chemistry.",
              formal: "Should the new school not offer identical advanced placement courses, what recourse would be available? Specifically, she was enrolled in AP Chemistry.",
            },
            casualVersion: "What if they don't have AP Chem at the new school?",
          },
          {
            speaker: "them",
            role: "注册办",
            textEn:
              "If the course is not offered, the school may provide an alternative like honors chemistry, or she could take the course online through an approved provider. Many students do dual enrollment with community colleges for advanced courses.",
            textZh:
              "如果不提供那门课，学校可能提供替代课程如荣誉化学，或者她可以通过认可的提供商在线上课。许多学生通过社区大学的双录取来上高级课程。",
            casualVersion: "If it's not offered, they might give her an alternative like honors chemistry, or she could do it online through an approved place. Lots of students do dual enrollment with community colleges for advanced stuff.",
            culturalNote: "“荣誉课程”, “双录取”, “社区大学” 是美国教育体系特有概念",
            commonMistake: {
              wrong: "Many students take dual enrollment.",
              correct: "Many students do dual enrollment.",
              explanation: "“dual enrollment”作为名词短语，更常用“do”而不是“take”来搭配。",
            },
            formalityVariants: {
              casual: "If it's not offered, they might give her an alternative like honors chemistry, or she could do it online through an approved place. Lots of students do dual enrollment with community colleges for advanced stuff.",
              standard: "If the course is not offered, the school may provide an alternative like honors chemistry, or she could take the course online through an approved provider. Many students do dual enrollment with community colleges for advanced courses.",
              formal: "In the event that the specific course is not available, the institution may offer an alternative, such as honors chemistry, or she could opt to undertake the course through an approved online educational provider. It is also common for students to engage in dual enrollment programs with community colleges for advanced-level coursework.",
            },
            keyPhrases: [
              { en: "dual enrollment", zh: "双录取" },
              { en: "approved provider", zh: "认可的提供商" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "There are options. She could take honors chemistry instead, do it online through an accredited program, or dual-enroll at a community college. We will find a way to keep her on track.",
                textZh: "有选项。她可以上荣誉化学、通过认证项目在线学习、或在社区大学双录取。我们会想办法让她不掉队。",
                actionHint: "了解替代选项",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That is reassuring. Will the transfer affect her GPA or class rank?",
            textZh: "那我就放心了。转学会影响她的GPA或班级排名吗？",
            culturalNote: "GPA 和 班级排名 (class rank) 是美国大学申请中的重要指标",
            commonMistake: {
              wrong: "That makes me relieved.",
              correct: "That is reassuring.",
              explanation: "“reassuring”是形容词，表示“令人安心的”；“relieved”表示“感到放松的”。",
            },
            formalityVariants: {
              casual: "That's good to hear. Will the transfer mess with her GPA or rank?",
              standard: "That is reassuring. Will the transfer affect her GPA or class rank?",
              formal: "That is indeed reassuring to learn. Could you clarify whether the credit transfer process will have an impact on her Grade Point Average or her overall class rank?",
            },
            casualVersion: "Will this mess up her GPA or ranking?",
          },
          {
            speaker: "them",
            role: "注册办",
            textEn:
              "Transfer credits are factored into her cumulative GPA at the new school. Class rank is recalculated once she is enrolled. The transition is designed to be as seamless as possible — it should not hurt her standing.",
            textZh:
              "转学学分会计入她在新学校的累积GPA。班级排名在她注册后重新计算。转学过程设计得尽可能无缝——不应该影响她的排名。",
            casualVersion: "Transfer credits get factored into her total GPA here. They'll redo class rank once she's in. It's all set up to be super smooth – shouldn't hurt her at all.",
            commonMistake: {
              wrong: "it should not hurt her position.",
              correct: "it should not hurt her standing.",
              explanation: "“standing”在这里指“地位、排名或声誉”，比“position”更恰当。",
            },
            formalityVariants: {
              casual: "Transfer credits get factored into her total GPA here. They'll redo class rank once she's in. It's all set up to be super smooth – shouldn't hurt her at all.",
              standard: "Transfer credits are factored into her cumulative GPA at the new school. Class rank is recalculated once she is enrolled. The transition is designed to be as seamless as possible — it should not hurt her standing.",
              formal: "Transfer credits will be integrated into her cumulative Grade Point Average at the new institution. Her class rank will be reassessed subsequent to her official enrollment. The entire transition process has been meticulously designed to ensure maximum seamlessness and should therefore not negatively impact her academic standing.",
            },
            keyPhrases: [
              { en: "cumulative GPA", zh: "累积GPA/绩点" },
              { en: "seamless", zh: "无缝的/顺畅的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Her grades transfer over and get folded into the new GPA. Ranking adjusts after she is in the system. It is designed to be smooth — she will not lose ground.",
                textZh: "她的成绩会转过来并纳入新的GPA。排名在她进入系统后调整。设计上是顺畅的——她不会失去优势。",
                actionHint: "放心转学不影响排名",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 毕业典礼 ====================
  {
    id: "education-graduation",
    category: "education",
    titleZh: "毕业典礼",
    titleEn: "Graduation Ceremony",
    description: "了解毕业典礼相关安排",
    otherRole: "教务处",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "graduation-basic",
        titleZh: "了解毕业流程",
        titleEn: "Understanding Graduation Process",
        description: "咨询毕业典礼的安排和准备事项",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "My daughter is graduating this spring. What do we need to prepare for the ceremony?",
            textZh: "我女儿今年春天毕业。我们需要为典礼准备什么？",
            casualVersion: "My kid is graduating in the spring. What do we need to do?",
            formalityVariants: {
              casual: "My daughter's graduating this spring. What do we need to prep for the ceremony?",
              standard: "My daughter is graduating this spring. What do we need to prepare for the ceremony?",
              formal:
                "My daughter is graduating this spring. Could you please inform me of the necessary preparations for the commencement ceremony?",
            },
          },
          {
            speaker: "them",
            role: "教务处",
            textEn:
              "Congratulations! She needs to order her cap and gown by March fifteenth from the bookstore. Each graduate gets four guest tickets. The ceremony is on June tenth at the stadium.",
            textZh:
              "恭喜！她需要在三月十五日之前从书店订购学位帽和学位袍。每位毕业生有四张来宾票。典礼在六月十日在体育场举行。",
            keyPhrases: [
              { en: "cap and gown", zh: "学位帽和学位袍" },
              { en: "guest tickets", zh: "来宾票" },
            ],
            casualVersion:
              "Congrats! She's gotta order her cap and gown by March 15th from the bookstore. Each grad gets four guest tickets. Ceremony's June 10th at the stadium.",
            commonMistake: {
              wrong: "She needs to buy her cap and gown before March fifteen.",
              correct: "She needs to order her cap and gown by March fifteenth.",
              explanation:
                "“buy”不够正式，且“before”不包含十五号当天。“order”更准确，通常学位服是租用或定制；“by”表示在指定日期或之前。",
            },
            formalityVariants: {
              casual:
                "Congrats! She needs to order her cap and gown by Mar 15th from the bookstore. Grads get four tickets. Ceremony's June 10th at the stadium.",
              standard:
                "Congratulations! She needs to order her cap and gown by March fifteenth from the bookstore. Each graduate gets four guest tickets. The ceremony is on June tenth at the stadium.",
              formal:
                "Congratulations! Please advise her to place an order for her academic regalia by March fifteenth, available through the university bookstore. Each graduating student is allotted four guest tickets. The commencement ceremony is scheduled for June tenth at the stadium.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Congrats! Order the cap and gown from the bookstore before March fifteenth. She will get four tickets for family. The big day is June tenth at the main stadium.",
                textZh: "恭喜！三月十五日前从书店订学位帽和袍。她会拿到四张家人的票。大日子是六月十日在主体育场。",
                actionHint: "记下关键日期",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Only four tickets? I have family flying in from China. Is there any way to get more?",
            textZh: "只有四张票？我有家人从中国飞过来。有办法多拿几张吗？",
            casualVersion: "Just four? My family is coming from China. Can I get more?",
            formalityVariants: {
              casual: "Only four tickets? My family's flying in from China. Can we get more?",
              standard: "Only four tickets? I have family flying in from China. Is there any way to get more?",
              formal:
                "Only four tickets are allotted? My family will be traveling from China. Might there be a possibility of obtaining additional tickets?",
            },
          },
          {
            speaker: "them",
            role: "教务处",
            textEn:
              "Extra tickets become available in late May when some graduates return their unused ones. Sign up for the waitlist and we will notify you. We also livestream the ceremony for anyone who cannot attend.",
            textZh:
              "额外的票在五月底会有一些，那时一些毕业生退回没用的票。报名候补名单我们会通知你。我们也会直播典礼，方便不能到场的人观看。",
            keyPhrases: [
              { en: "waitlist", zh: "候补名单" },
              { en: "livestream", zh: "直播" },
            ],
            casualVersion:
              "Extra tickets'll open up late May when some grads return ones they didn't use. Sign up for the waitlist, we'll hit you up. We also livestream the ceremony for anyone who can't make it.",
            commonMistake: {
              wrong: "Register for the waitlist and we will inform you.",
              correct: "Sign up for the waitlist and we will notify you.",
              explanation: "“Sign up”更常用且口语化，适合此类情况；“notify”比“inform”更直接，表示会发送通知。",
            },
            formalityVariants: {
              casual:
                "Extra tickets pop up late May when grads return 'em. Get on the waitlist, we'll tell ya. We livestream it too for those who can't come.",
              standard:
                "Extra tickets become available in late May when some graduates return their unused ones. Sign up for the waitlist and we will notify you. We also livestream the ceremony for anyone who cannot attend.",
              formal:
                "Additional tickets typically become available in late May, when some graduates may return their unused allocations. We encourage you to register for the waitlist, and we will inform you accordingly. Furthermore, we provide a livestream of the ceremony for those unable to attend in person.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Put your name on the extra ticket list. People always return some. We should have more by late May. And we stream the whole thing live, so anyone overseas can watch too.",
                textZh:
                  "把你的名字放在额外票的名单上。人们总会退一些。五月底应该会有更多。我们全程直播，所以海外的人也能看。",
                actionHint: "报名候补和分享直播链接",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "The livestream is a great idea! Where will that be available?",
            textZh: "直播是个好主意！在哪里可以看？",
            casualVersion: "Livestream sounds perfect! Where do we watch it?",
            formalityVariants: {
              casual: "Livestream's awesome! Where can I watch?",
              standard: "The livestream is a great idea! Where will that be available?",
              formal:
                "The livestreaming option is an excellent consideration! Could you please inform me of its accessibility or platform?",
            },
          },
          {
            speaker: "them",
            role: "教务处",
            textEn:
              "It will be on our university website and YouTube channel. We will share the link two weeks before the ceremony. Family members from anywhere in the world can watch in real time.",
            textZh: "会在我们大学网站和YouTube频道上。我们会在典礼两周前分享链接。世界各地的家人都可以实时观看。",
            keyPhrases: [
              { en: "in real time", zh: "实时" },
              { en: "share the link", zh: "分享链接" },
            ],
            casualVersion:
              "It'll be on our uni website and YouTube channel. We'll send the link two weeks before. Family anywhere can watch live.",
            commonMistake: {
              wrong: "We will give the link two weeks before the ceremony.",
              correct: "We will share the link two weeks before the ceremony.",
              explanation: "“Share the link”是英语中更自然、更普遍的说法，特指分享网络链接等数字内容。",
            },
            formalityVariants: {
              casual: "It'll be on our uni site and YouTube. We'll send the link two weeks out. Anyone can watch live.",
              standard:
                "It will be on our university website and YouTube channel. We will share the link two weeks before the ceremony. Family members from anywhere in the world can watch in real time.",
              formal:
                "The livestream will be accessible via our official university website and our designated YouTube channel. We will disseminate the link approximately two weeks prior to the ceremony. This ensures that family members globally can view the event contemporaneously.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Our website and YouTube. We post the link about two weeks ahead. Your family in China can watch it live — the time difference might be rough, but it will also be recorded.",
                textZh:
                  "我们的网站和YouTube。提前两周发布链接。你在中国的家人可以直播观看——时差可能有点困难，但也会录制。",
                actionHint: "分享直播链接给家人",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "graduation-intermediate",
        titleZh: "毕业典礼当天",
        titleEn: "Graduation Day Details",
        description: "了解毕业典礼当天的具体安排",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "What time should we arrive on graduation day? I want to get good seats.",
            textZh: "毕业典礼那天我们应该几点到？我想坐到好位子。",
            casualVersion: "What time should we show up? I want good seats.",
            commonMistake: {
              wrong: "I want to get good seats.",
              correct: "I'm hoping to get good seats.",
              explanation: "“I want to” 听起来比较直接和生硬，用 “I'm hoping to” 或 “I'd like to” 更委婉自然。",
            },
            formalityVariants: {
              casual: "What time should we get there on grad day? Wanna snag good seats.",
              standard: "What time should we arrive on graduation day? I want to get good seats.",
              formal:
                "Could you please advise on the recommended arrival time for the graduation ceremony? We are hoping to secure favorable seating.",
            },
          },
          {
            speaker: "them",
            role: "教务处",
            textEn:
              "Gates open at eight a.m. and the ceremony starts at ten. I would recommend arriving by eight thirty. Seating is first-come, first-served, so early is better. Graduates line up separately at nine.",
            textZh: "大门八点开放，典礼十点开始。我建议八点半到。座位先到先得，所以早到更好。毕业生九点单独排队。",
            casualVersion: "Gates open at 8 a.m., ceremony's at 10. Recommend getting there by 8:30. Seating's first-come, first-served, so earlier's better. Grads line up separately at 9.",
            formalityVariants: {
              casual: "Gates open at 8, ceremony at 10. Try to get there by 8:30. Seats are first-come, first-served, so earlier's better. Grads line up at 9, separate.",
              standard: "Gates open at eight a.m. and the ceremony starts at ten. I would recommend arriving by eight thirty. Seating is first-come, first-served, so early is better. Graduates line up separately at nine.",
              formal: "The gates will open promptly at eight o'clock a.m., with the commencement ceremony commencing at ten o'clock a.m. It is advisable to arrive by eight thirty a.m., as seating is allocated on a first-come, first-served basis. Graduates are required to assemble for lining up separately at nine o'clock a.m.",
            },
            keyPhrases: [
              { en: "gates open", zh: "大门开放" },
              { en: "line up separately", zh: "单独排队" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Doors open at eight, ceremony at ten. Get there by eight thirty for the best seats. Your daughter needs to check in at nine with her class. Parking fills up fast too.",
                textZh: "八点开门，十点典礼。八点半到坐最好的位子。你女儿需要九点和同班同学报到。停车位也很快满。",
                actionHint: "早点到场",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there parking available, or should we take public transportation?",
            textZh: "有停车位吗，还是我们应该坐公共交通？",
            formalityVariants: {
              casual: "Got parking, or should we just take public transport?",
              standard: "Is there parking available, or should we take public transportation?",
              formal: "Are parking facilities provided, or would you advise utilizing public transportation?",
            },
            casualVersion: "Is there parking or should we take the bus?",
          },
          {
            speaker: "them",
            role: "教务处",
            textEn:
              "There is a parking garage, but it fills up fast on graduation day. I would recommend arriving very early if you drive. Alternatively, there is a free shuttle from the downtown transit station every fifteen minutes starting at seven thirty.",
            textZh:
              "有停车场，但毕业典礼那天很快就满了。如果开车我建议非常早到。另外，从市中心交通站七点半开始每十五分钟有免费班车。",
            casualVersion: "Got a parking garage, but it fills up fast on grad day. If you're driving, definitely get there super early. Or, there's a free shuttle from downtown transit every fifteen minutes starting at 7:30.",
            formalityVariants: {
              casual: "There's a garage, but it gets packed on grad day. If you're driving, gotta be super early. Or, a free shuttle from downtown runs every 15 min starting 7:30.",
              standard: "There is a parking garage, but it fills up fast on graduation day. I would recommend arriving very early if you drive. Alternatively, there is a free shuttle from the downtown transit station every fifteen minutes starting at seven thirty.",
              formal: "While a parking garage is available, it tends to reach full capacity rapidly on graduation day. Should you opt to drive, arriving exceptionally early is strongly advised. As an alternative, a complimentary shuttle service operates from the downtown transit station every fifteen minutes, commencing at seven thirty a.m.",
            },
            keyPhrases: [
              { en: "fills up fast", zh: "很快就满了" },
              { en: "free shuttle", zh: "免费班车" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Parking is available but gets crazy on grad day. Honestly, the shuttle from downtown is easier — runs every fifteen minutes starting at seven thirty and it is free.",
                textZh: "有停车位但毕业那天很疯狂。说实话，从市区来的班车更方便——七点半开始每十五分钟一班，免费。",
                actionHint: "考虑坐班车",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Can we take photos with her after the ceremony? Is there a designated area?",
            textZh: "典礼后可以和她拍照吗？有指定的区域吗？",
            formalityVariants: {
              casual: "Can we get pics with her after? Is there a spot for that?",
              standard: "Can we take photos with her after the ceremony? Is there a designated area?",
              formal: "May we take photographs with her following the ceremony? Is a specific area allocated for such purposes?",
            },
            casualVersion: "Can we take pictures with her after? Is there a spot for photos?",
          },
          {
            speaker: "them",
            role: "教务处",
            textEn:
              "Absolutely! After the ceremony, graduates meet their families on the main lawn. We also set up professional photo stations with the university backdrop. You can order prints online later.",
            textZh:
              "当然！典礼结束后，毕业生在主草坪与家人见面。我们还设有专业拍照站点，有大学背景板。之后可以在网上订购照片。",
            casualVersion: "Totally! After the ceremony, grads meet families on the main lawn. We've also got pro photo stations with uni backdrops. You can order prints online later.",
            formalityVariants: {
              casual: "Yeah, definitely! Grads meet family on the main lawn after. Plus, we've got pro photo booths with university backdrops. Order prints online later.",
              standard: "Absolutely! After the ceremony, graduates meet their families on the main lawn. We also set up professional photo stations with the university backdrop. You can order prints online later.",
              formal: "Certainly! Subsequent to the ceremony, graduates will convene with their families on the main lawn. Additionally, professional photographic stations, featuring the university's backdrop, will be available. Prints may be ordered online at a later time.",
            },
            keyPhrases: [
              { en: "main lawn", zh: "主草坪" },
              { en: "photo stations", zh: "拍照站点" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For sure! Everyone gathers on the main lawn after. There are professional photo booths with the school logo backdrop. You can buy the photos online afterward. Bring your own camera too!",
                textZh:
                  "当然！典礼后大家在主草坪集合。有专业拍照亭配学校标志背景板。之后可以在网上购买照片。也带上你自己的相机！",
                actionHint: "在主草坪等候",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 社区大学 ====================
  {
    id: "education-community-college",
    category: "education",
    titleZh: "社区大学",
    titleEn: "Community College",
    description: "了解和注册社区大学课程",
    otherRole: "招生顾问",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "community-college-basic",
        titleZh: "咨询社区大学",
        titleEn: "Inquiring About Community College",
        description: "了解社区大学的课程和优势",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi, I am thinking about taking some classes at the community college. I already have a job, so I need flexible scheduling.",
            textZh: "你好，我在考虑在社区大学上几门课。我已经有工作了，所以我需要灵活的时间安排。",
            casualVersion: "Hey, I want to take classes here but I work full time. What are my options?",
            commonMistake: {
              wrong: "I need flexible time.",
              correct: "I need flexible scheduling.",
              explanation: "“flexible time”听起来不自然，英文常用“flexible scheduling”或“flexible hours”。",
            },
            formalityVariants: {
              casual:
                "Hey, I'm thinking of taking some classes at the community college. I already got a job, so I need flexible scheduling.",
              standard:
                "Hi, I am thinking about taking some classes at the community college. I already have a job, so I need flexible scheduling.",
              formal:
                "Good morning/afternoon. I am considering enrolling in some courses at the community college. Given my current employment, I require a flexible schedule.",
            },
          },
          {
            speaker: "them",
            role: "招生顾问",
            textEn:
              "We are perfect for working adults! We have evening classes, weekend classes, and fully online options. Many of our students work full time. What are you interested in studying?",
            textZh:
              "我们非常适合在职成年人！我们有晚间课程、周末课程和完全在线的选项。我们很多学生都是全职工作。你有兴趣学什么？",
            keyPhrases: [
              { en: "evening classes", zh: "晚间课程" },
              { en: "fully online", zh: "完全在线" },
            ],
            casualVersion:
              "We're great for working adults! Got evening, weekend, and online options. Lots of our students work full time. So, what d'ya wanna study?",
            commonMistake: {
              wrong: "What you want to study?",
              correct: "What are you interested in studying?",
              explanation: "英文问兴趣常用“be interested in doing sth”句型。",
            },
            formalityVariants: {
              casual:
                "We're great for working adults! Got evening, weekend, and online options. Lots of our students work full time. So, what d'ya wanna study?",
              standard:
                "We are perfect for working adults! We have evening classes, weekend classes, and fully online options. Many of our students work full time. What are you interested in studying?",
              formal:
                "Our institution offers a highly suitable environment for working professionals, providing evening, weekend, and comprehensive online course selections. A significant portion of our student body is employed full-time. Could you please specify your areas of academic interest?",
            },
            alternativeExpressions: [
              {
                textEn:
                  "You are in the right place! We are built for people who work. Nights, weekends, online — whatever fits your schedule. What do you want to study?",
                textZh:
                  "你来对地方了！我们就是为工作的人设计的。晚上、周末、在线——什么适合你的时间就选什么。你想学什么？",
                actionHint: "说明学习目标",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I want to improve my English and maybe get a certificate in accounting. How much does it cost?",
            textZh: "我想提高英语，也许拿一个会计证书。费用多少？",
            casualVersion: "I want better English and maybe an accounting certificate. How much?",
            commonMistake: {
              wrong: "I want to get accounting certificate.",
              correct: "I want to get a certificate in accounting.",
              explanation: "名词前需要冠词“a”，并且“in accounting”比“accounting certificate”更自然。",
            },
            formalityVariants: {
              casual: "Wanna improve my English, maybe get an accounting cert. What's it cost?",
              standard:
                "I want to improve my English and maybe get a certificate in accounting. How much does it cost?",
              formal:
                "I am interested in enhancing my English proficiency and potentially obtaining a certificate in accounting. Could you please provide information regarding the associated costs?",
            },
          },
          {
            speaker: "them",
            role: "招生顾问",
            textEn:
              "Tuition is one hundred twenty dollars per credit hour for residents. A typical certificate program is about thirty credits. ESL courses are actually free for residents — the state covers the cost.",
            textZh:
              "居民学费每学分一百二十美元。典型的证书项目大约三十个学分。ESL课程对居民其实是免费的——州政府承担费用。",
            keyPhrases: [
              { en: "per credit hour", zh: "每学分" },
              { en: "certificate program", zh: "证书项目" },
            ],
            casualVersion:
              "Tuition's a hundred twenty bucks a credit hour for residents. Most cert programs are like thirty credits. And get this, ESL classes are totally free for residents — the state pays for it.",
            culturalNote: "美国公立大学学费对本州居民（residents）和外州/国际学生差别很大，通常居民学费便宜很多。",
            commonMistake: {
              wrong: "the state pay the cost.",
              correct: "the state covers the cost.",
              explanation: "“cover the cost”是英语中表示支付费用的地道表达。",
            },
            formalityVariants: {
              casual:
                "Tuition's a hundred twenty bucks a credit hour for residents. Most cert programs are like thirty credits. And get this, ESL classes are totally free for residents — the state pays for it.",
              standard:
                "Tuition is one hundred twenty dollars per credit hour for residents. A typical certificate program is about thirty credits. ESL courses are actually free for residents — the state covers the cost.",
              formal:
                "For residents, tuition is assessed at one hundred twenty dollars per credit hour. A typical certificate program generally comprises approximately thirty credits. Notably, English as a Second Language courses are fully subsidized by the state for residents.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "It is one twenty per credit for local residents. The accounting certificate is about thirty credits total. And here is the great part — ESL is completely free for residents.",
                textZh: "本地居民每学分一百二十。会计证书总共大约三十个学分。好消息——ESL对居民完全免费。",
                actionHint: "了解费用结构",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Free ESL classes? That is amazing. Can I take ESL and accounting courses at the same time?",
            textZh: "免费ESL课程？太好了。我可以同时上ESL和会计课吗？",
            casualVersion: "Free ESL? Wow. Can I do both ESL and accounting at the same time?",
            commonMistake: {
              wrong: "Can I study ESL and accounting courses same time?",
              correct: "Can I take ESL and accounting courses at the same time?",
              explanation: "动词“take”更常用于“上课”，且“at the same time”是固定搭配。",
            },
            formalityVariants: {
              casual: "Free ESL? Wow, that's awesome. Can I take ESL and accounting courses at the same time?",
              standard: "Free ESL classes? That is amazing. Can I take ESL and accounting courses at the same time?",
              formal:
                "Complimentary ESL courses? That is truly remarkable. Would it be permissible for me to enroll in both ESL and accounting courses concurrently?",
            },
          },
          {
            speaker: "them",
            role: "招生顾问",
            textEn:
              "Yes, many students do that. I would suggest starting with ESL and one introductory accounting course to see how you manage the workload. You can always add more next semester.",
            textZh:
              "可以，很多学生都这样做。我建议先从ESL和一门会计入门课开始，看看你能不能管理好课业量。下学期随时可以加课。",
            keyPhrases: [
              { en: "manage the workload", zh: "管理课业量" },
              { en: "introductory course", zh: "入门课程" },
            ],
            casualVersion:
              "Yeah, lotsa students do that. I'd say start with ESL and one intro accounting course, just to see how you handle the workload. You can always add more next semester.",
            commonMistake: {
              wrong: "I suggest start ESL and one accounting course.",
              correct: "I would suggest starting with ESL and one introductory accounting course.",
              explanation: "表达建议常用“I would suggest doing sth”结构，且“start with”是固定搭配。",
            },
            formalityVariants: {
              casual:
                "Yeah, lotsa students do that. I'd say start with ESL and one intro accounting course, just to see how you handle the workload. You can always add more next semester.",
              standard:
                "Yes, many students do that. I would suggest starting with ESL and one introductory accounting course to see how you manage the workload. You can always add more next semester.",
              formal:
                "Yes, that is a common practice among our students. I would recommend commencing with English as a Second Language and a single introductory accounting course to gauge your capacity to manage the academic workload effectively. Additional courses may be enrolled in during subsequent semesters.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Absolutely. Lots of students combine ESL with career classes. Start with one accounting class plus ESL — see how it goes. No need to rush.",
                textZh: "当然可以。很多学生把ESL和职业课程结合起来。先上一门会计加ESL——看看怎么样。不用急。",
                actionHint: "从小量开始",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "community-college-intermediate",
        titleZh: "转学到四年制大学",
        titleEn: "Transferring to a Four-Year University",
        description: "了解从社区大学转到四年制大学的途径",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "I eventually want to transfer to a four-year university. Does the community college have a transfer program?",
            textZh: "我最终想转到四年制大学。社区大学有转学项目吗？",
            casualVersion: "I want to eventually transfer to a regular university. Do you have a program for that?",
            culturalNote: "在美国，社区大学转学项目是很普遍且制度化的升学途径，在中国则较少有直接对等的体系。",
            commonMistake: {
              wrong: "I want to transfer to a four-year university.",
              correct: "I eventually want to transfer to a four-year university.",
              explanation: "直接说I want听起来可能比较生硬。加上eventually或用I'd like to更自然。",
            },
            formalityVariants: {
              casual:
                "So, I wanna transfer to a four-year university eventually. Does this place have a transfer program?",
              standard:
                "I eventually want to transfer to a four-year university. Does the community college have a transfer program?",
              formal:
                "I am interested in eventually transferring to a four-year university. Could you please inform me if the community college offers a transfer program?",
            },
          },
          {
            speaker: "them",
            role: "招生顾问",
            textEn:
              "Yes! We have transfer agreements with over twenty universities. If you complete your associate degree with a certain GPA, you are guaranteed admission to several partner schools. It is a very popular path.",
            textZh:
              "有的！我们和二十多所大学有转学协议。如果你以一定的GPA完成副学士学位，你可以保证被录取到几所合作学校。这是一条非常受欢迎的路径。",
            casualVersion: "Yeah! We've got transfer agreements with over twenty universities. Finish your associate's with a good enough GPA, and you're guaranteed admission to some partner schools. It's a really popular path.",
            culturalNote: "“Associate degree (副学士学位)”在中国的教育体系中不普遍，中国学生可能不了解其在美国作为转学跳板的作",
            commonMistake: {
              wrong: "you are guaranteed to admission to several partner schools",
              correct: "you are guaranteed admission to several partner schools",
              explanation: "“guarantee admission to”是固定搭配，表示“保证录取到”。",
            },
            formalityVariants: {
              casual: "Totally! We've got agreements with like, twenty-plus universities. Finish your associate's with a decent GPA, and you're in at a bunch of partner schools, guaranteed. Super popular route.",
              standard: "Yes! We have transfer agreements with over twenty universities. If you complete your associate degree with a certain GPA, you are guaranteed admission to several partner schools. It is a very popular path.",
              formal: "Indeed. We maintain transfer articulation agreements with more than twenty universities. Should you successfully complete your associate degree program with a requisite GPA, guaranteed admission is offered to several of our esteemed partner institutions. This pathway is widely utilized.",
            },
            keyPhrases: [
              { en: "transfer agreements", zh: "转学协议" },
              { en: "associate degree", zh: "副学士学位" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We sure do. We partner with over twenty universities. Get your associate degree with a good GPA and you are guaranteed a spot at several of them. Tons of students go this route.",
                textZh: "当然有。我们和二十多所大学合作。拿到好GPA的副学士学位就保证被其中几所录取。很多学生走这条路。",
                actionHint: "了解转学协议",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What GPA do I need to be eligible for the guaranteed transfer?",
            textZh: "我需要什么GPA才有资格获得保证转学？",
            commonMistake: {
              wrong: "How much GPA do I need?",
              correct: "What GPA do I need?",
              explanation: "询问具体数值时，用“What”更地道，而不是“How much”。",
            },
            formalityVariants: {
              casual: "What GPA do I need for that guaranteed transfer?",
              standard: "What GPA do I need to be eligible for the guaranteed transfer?",
              formal: "Could you please specify the minimum GPA required to be eligible for the guaranteed transfer program?",
            },
            casualVersion: "What GPA do I need for the guaranteed transfer?",
          },
          {
            speaker: "them",
            role: "招生顾问",
            textEn:
              "Most partner schools require a three point zero or higher. The more competitive universities want a three point five. Your transfer advisor will help you map out exactly which courses to take.",
            textZh:
              "大多数合作学校要求三点零或更高。更有竞争力的大学要三点五。你的转学顾问会帮你精确规划应该选哪些课程。",
            casualVersion: "Most partner schools want a 3.0 or higher. The more competitive ones? They'll want a 3.5. Your transfer advisor will totally help you figure out exactly what classes to take.",
            commonMistake: {
              wrong: "Most partner schools need three zero GPA",
              correct: "Most partner schools require a three point zero or higher.",
              explanation: "GPA分数口语中用“point”连接，如“three point zero”。",
            },
            formalityVariants: {
              casual: "Most places want a 3.0 or more; tougher ones want a 3.5. Your advisor'll sort out your exact courses.",
              standard: "Most partner schools require a three point zero or higher. The more competitive universities want a three point five. Your transfer advisor will help you map out exactly which courses to take.",
              formal: "Typically, a GPA of three point zero or higher is required by most partner institutions. For more selective universities, a three point five may be stipulated. Your designated transfer advisor will provide comprehensive guidance on course selection.",
            },
            keyPhrases: [
              { en: "transfer advisor", zh: "转学顾问" },
              { en: "map out", zh: "规划/列出" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "A three point zero gets you into most partner schools. Aim for three point five if you want the top ones. Your advisor will plan your courses so everything transfers perfectly.",
                textZh: "三点零可以进大多数合作学校。如果想进顶尖的就争取三点五。你的顾问会规划课程确保一切完美转移。",
                actionHint: "设定GPA目标",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "This sounds like a smart way to save money. How much would I save compared to starting at a university?",
            textZh: "这听起来是省钱的聪明方法。和直接上大学相比我能省多少？",
            commonMistake: {
              wrong: "This sounds like a smart way to save the money.",
              correct: "This sounds like a smart way to save money.",
              explanation: "“save money”是一个常用短语，表示省钱，通常不加冠词“the”。",
            },
            formalityVariants: {
              casual: "This seems like a smart way to save cash. How much less would it cost than starting at a university?",
              standard: "This sounds like a smart way to save money. How much would I save compared to starting at a university?",
              formal: "This appears to be a financially prudent approach. Could you quantify the potential savings compared to commencing one's studies directly at a university?",
            },
            casualVersion: "Sounds like a good deal. How much do I save versus going straight to university?",
          },
          {
            speaker: "them",
            role: "招生顾问",
            textEn:
              "On average, students save about twenty to thirty thousand dollars by doing their first two years here. You get the same credits for a fraction of the cost, and employers care about where you graduate from, not where you started.",
            textZh:
              "平均来说，学生在这里读前两年可以节省大约两到三万美元。你以很少的费用获得相同的学分，而且雇主关心的是你从哪里毕业，而不是从哪里开始。",
            casualVersion: "On average, students here save twenty to thirty grand doing their first two years. You get the same credits for way less, and employers care about where you *finish*, not where you *start*.",
            culturalNote: "在美国，社区大学转学是一种普遍且受认可的省钱策略，最终学位大学比起始大学更受雇主关注。",
            commonMistake: {
              wrong: "You get the same credits for a fraction cost.",
              correct: "You get the same credits for a fraction of the cost.",
              explanation: "“a fraction of”是表示“一小部分”的固定短语。",
            },
            formalityVariants: {
              casual: "Roughly, students here save 20-30k on their first two years. Same credits, way cheaper. And companies care about where you graduate, not where you started.",
              standard: "On average, students save about twenty to thirty thousand dollars by doing their first two years here. You get the same credits for a fraction of the cost, and employers care about where you graduate from, not where you started.",
              formal: "Typically, students realize savings of approximately twenty to thirty thousand dollars by completing their initial two years of study at this institution. This allows for the acquisition of equivalent academic credits at a significantly reduced expenditure. Furthermore, employers primarily consider the institution from which an individual graduates, rather than their initial enrollment.",
            },
            keyPhrases: [
              { en: "fraction of the cost", zh: "很少的费用" },
              { en: "where you graduate from", zh: "你从哪里毕业" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Easily twenty to thirty grand over two years. Same classes, same credits, way less money. And at the end of the day, your diploma says the university name, not ours.",
                textZh:
                  "轻松省两到三万美元，两年。同样的课，同样的学分，少得多的钱。最终你的文凭上写的是大学的名字，不是我们的。",
                actionHint: "对比费用差异",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 成人教育 ====================
  {
    id: "education-adult-education",
    category: "education",
    titleZh: "成人教育",
    titleEn: "Adult Education",
    description: "参加成人继续教育课程",
    otherRole: "项目协调员",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "adult-ed-basic",
        titleZh: "了解成人教育项目",
        titleEn: "Learning About Adult Programs",
        description: "咨询可用的成人教育课程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I never finished high school. Is there a program where I can get my GED?",
            textZh: "我没有读完高中。有可以让我拿GED的项目吗？",
            casualVersion: "I didn't finish high school. Can I get my GED here?",
            culturalNote:
              "GED是美国特有的高中同等学历证书，在中国没有直接对应。对美国教育体系不熟悉的人可能不理解其重要性。",
            commonMistake: {
              wrong: "I cannot finish high school. Can I get my GED?",
              correct: "I never finished high school. Is there a program where I can get my GED?",
              explanation:
                "cannot finish 是现在时态，不准确；用 never finished 指过去未完成。询问项目用 'Is there a program where...' 更地道。",
            },
            formalityVariants: {
              casual: "Didn't finish high school. Can I get my GED here?",
              standard: "I never finished high school. Is there a program where I can get my GED?",
              formal:
                "I did not complete my high school education. Could you please inform me if there is a program available through which I can obtain my GED?",
            },
          },
          {
            speaker: "them",
            role: "项目协调员",
            textEn:
              "Absolutely! Our GED preparation program is free for all residents. Classes meet three times a week and cover all four test subjects: math, science, social studies, and language arts.",
            textZh:
              "当然！我们的GED准备项目对所有居民免费。每周上课三次，涵盖四个考试科目：数学、科学、社会学和语言艺术。",
            keyPhrases: [
              { en: "GED preparation", zh: "GED准备（高中同等学力）" },
              { en: "test subjects", zh: "考试科目" },
            ],
            casualVersion:
              "Totally! Our GED prep program's free for all residents. Classes are three times a week and cover all four test subjects: math, science, social studies, and language arts.",
            culturalNote: "美国许多社区项目对居民免费，但通常需要提供居住证明。'Residents' 指的是合法居民。",
            formalityVariants: {
              casual:
                "Yeah! Our GED prep's free for residents. Classes three times a week, covers all four subjects: math, science, social studies, language arts.",
              standard:
                "Absolutely! Our GED preparation program is free for all residents. Classes meet three times a week and cover all four test subjects: math, science, social studies, and language arts.",
              formal:
                "Indeed! Our GED preparation program is offered free of charge to all qualifying residents. Classes convene thrice weekly and encompass all four required examination subjects, specifically: mathematics, science, social studies, and language arts.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Yes, we have a free GED prep program. Three days a week, covers everything you need — math, science, social studies, and English. Most people are ready to test in four to six months.",
                textZh:
                  "有的，我们有免费的GED准备项目。每周三天，涵盖你需要的一切——数学、科学、社会学和英语。大多数人四到六个月就准备好考试了。",
                actionHint: "了解课程时间安排",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "My English is not very strong. Can I still do the GED program, or should I take ESL first?",
            textZh: "我英语不太好。我还能参加GED项目吗，还是应该先上ESL？",
            casualVersion: "My English isn't great. Should I do ESL first or can I jump into GED?",
            commonMistake: {
              wrong: "My English not good. Can I join GED program, or first learn ESL?",
              correct: "My English is not very strong. Can I still do the GED program, or should I take ESL first?",
              explanation: "缺少be动词，用词不准确。'still do' 和 'should I take...first' 更自然。",
            },
            formalityVariants: {
              casual: "My English isn't great. Can I still do GED, or should I do ESL first?",
              standard: "My English is not very strong. Can I still do the GED program, or should I take ESL first?",
              formal:
                "My English proficiency is not yet highly developed. Would I still be eligible to participate in the GED program, or would it be advisable to undertake ESL instruction initially?",
            },
          },
          {
            speaker: "them",
            role: "项目协调员",
            textEn:
              "We actually have a combined program for English learners. You take ESL alongside GED prep, so you build your English skills while studying for the test. It is designed exactly for people in your situation.",
            textZh:
              "我们其实有一个针对英语学习者的综合项目。你同时上ESL和GED准备课，这样你在备考的同时提高英语技能。这正是为你这种情况设计的。",
            keyPhrases: [
              { en: "combined program", zh: "综合项目" },
              { en: "designed for", zh: "为……设计" },
            ],
            casualVersion:
              "Actually, we've got a combined program for English learners. You take ESL alongside GED prep, so you're building your English skills while studying for the test. It's designed exactly for folks like you.",
            culturalNote:
              "这种ESL和学术课程结合的模式在美国很常见，旨在帮助移民快速融入。强调 'combined program' 的好处。",
            formalityVariants: {
              casual:
                "We actually have a combo program for English learners. You do ESL and GED prep at the same time, so you're improving your English while studying. It's made for people in your shoes.",
              standard:
                "We actually have a combined program for English learners. You take ESL alongside GED prep, so you build your English skills while studying for the test. It is designed exactly for people in your situation.",
              formal:
                "We do, in fact, offer an integrated program specifically for English language learners. Participants undertake ESL instruction concurrently with GED preparation, thereby fostering English language acquisition while simultaneously preparing for the examination. This program is precisely tailored for individuals in your circumstances.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "We thought of that! There is a special track that blends ESL and GED together. You learn English through the GED material. It is perfect for non-native speakers.",
                textZh: "我们想到了！有一个特别的通道把ESL和GED结合在一起。你通过GED材料学英语。非常适合非母语者。",
                actionHint: "报名综合项目",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That is exactly what I need. What does getting a GED open up for me?",
            textZh: "这正是我需要的。拿到GED对我有什么帮助？",
            casualVersion: "Perfect. What can I do once I have a GED?",
            culturalNote:
              "在美国，高中毕业证书（或GED）是进入大学、职业学校或许多工作的基本要求，因此它的重要性不言而喻。",
            commonMistake: {
              wrong: "This is what I need. What can GED open for me?",
              correct: "That is exactly what I need. What does getting a GED open up for me?",
              explanation: "表达上缺少 'exactly' 来强调，'open up for me' 是更自然的说法。",
            },
            formalityVariants: {
              casual: "That's exactly what I need. What's a GED get me?",
              standard: "That is exactly what I need. What does getting a GED open up for me?",
              formal:
                "That is precisely what I require. Could you elaborate on the opportunities and advantages that obtaining a GED would afford me?",
            },
          },
          {
            speaker: "them",
            role: "项目协调员",
            textEn:
              "A GED opens many doors. You can apply for better jobs, enroll in community college, and qualify for job training programs. Many employers treat it the same as a high school diploma.",
            textZh:
              "GED可以打开很多大门。你可以申请更好的工作、注册社区大学和获得职业培训项目的资格。许多雇主把它等同于高中文凭。",
            keyPhrases: [
              { en: "opens many doors", zh: "打开很多大门" },
              { en: "job training programs", zh: "职业培训项目" },
            ],
            casualVersion:
              "A GED opens up a lot of doors. You can apply for better jobs, get into community college, and qualify for job training programs. Lots of employers treat it like a high school diploma.",
            culturalNote:
              "社区大学（Community College）是美国高等教育体系的重要组成部分，提供两年制副学士学位和职业培训，费用相对",
            formalityVariants: {
              casual:
                "A GED opens many doors. You can get better jobs, enroll in community college, and qualify for training. Most employers see it the same as a high school diploma.",
              standard:
                "A GED opens many doors. You can apply for better jobs, enroll in community college, and qualify for job training programs. Many employers treat it the same as a high school diploma.",
              formal:
                "Possessing a GED certificate can indeed facilitate numerous opportunities. It enables individuals to pursue enhanced employment prospects, matriculate into community college programs, and gain eligibility for various job training initiatives. Furthermore, it is frequently regarded by employers as equivalent to a standard high school diploma.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "It changes everything. Better job opportunities, college access, training programs. Most employers see it as equal to a regular diploma. It is a huge step forward.",
                textZh:
                  "它改变一切。更好的工作机会、大学入学、培训项目。大多数雇主把它看作和普通文凭一样。这是一大步。",
                actionHint: "了解GED的价值",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "adult-ed-intermediate",
        titleZh: "职业技能培训",
        titleEn: "Career Skills Training",
        description: "咨询职业技能培训课程",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I want to learn a new trade. Do you offer any vocational training programs?",
            textZh: "我想学一门新技术。你们提供职业培训项目吗？",
            casualVersion: "I want to learn a trade. What vocational programs do you have?",
            culturalNote: "直接说“I want”可能显得不够礼貌，尤其是在提出请求时，美国人常用“I'd like to”或“I'm lookin",
            commonMistake: {
              wrong: "I want to learn a new skill.",
              correct: "I'd like to learn a new trade.",
              explanation:
                "“I want”听起来太直接，用“I'd like to”或“I'm interested in learning”更礼貌；“trade”指职业技能，比“skill”更具体。",
            },
            formalityVariants: {
              casual: "Wanna learn a new trade. Got any vocational training?",
              standard: "I'd like to learn a new trade. Do you offer any vocational training programs?",
              formal:
                "Good morning/afternoon. I am interested in acquiring a new vocational skill set. Could you please provide information regarding any professional training programs you might offer?",
            },
          },
          {
            speaker: "them",
            role: "项目协调员",
            textEn:
              "We have several in-demand programs: medical assistant, IT support, welding, and culinary arts. Most can be completed in six months to a year. They include both classroom instruction and hands-on training.",
            textZh:
              "我们有几个热门项目：医疗助理、IT支持、焊接和烹饪艺术。大多数六个月到一年可以完成。包括课堂教学和动手培训。",
            casualVersion: "We got a bunch of popular programs: medical assistant, IT, welding, culinary arts. Most are done in 6 months to a year. You get classroom stuff and hands-on practice.",
            formalityVariants: {
              casual: "We've got popular programs: med assistant, IT, welding, culinary arts. Most take 6 months to a year. It's classroom + hands-on.",
              standard: "We have several in-demand programs: medical assistant, IT support, welding, and culinary arts. Most can be completed in six months to a year. They include both classroom instruction and hands-on training.",
              formal: "Our institution offers a selection of highly sought-after vocational programs, including medical assistant, information technology support, welding, and culinary arts. The majority of these programs are designed for completion within a six-month to one-year timeframe, encompassing both didactic instruction and practical, hands-on application.",
            },
            keyPhrases: [
              { en: "in-demand programs", zh: "热门项目" },
              { en: "hands-on training", zh: "动手培训/实操训练" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We have great options: medical assistant, IT, welding, culinary. Six months to a year and you are job-ready. You learn in class and also get real-world practice.",
                textZh:
                  "我们有很好的选择：医疗助理、IT、焊接、烹饪。六个月到一年就可以就业。你在课堂学习也获得真实的实践。",
                actionHint: "选择感兴趣的领域",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "IT support sounds interesting. Do I need any prior experience with computers?",
            textZh: "IT支持听起来很有趣。我需要之前有电脑经验吗？",
            commonMistake: {
              wrong: "Need I have prior experience with computers?",
              correct: "Do I need any prior experience with computers?",
              explanation: "疑问句中，need 作动词时，通常需要助动词 Do/Does，而非直接倒装。",
            },
            formalityVariants: {
              casual: "IT support sounds cool. Gotta have computer experience beforehand?",
              standard: "IT support sounds interesting. Do I need any prior experience with computers?",
              formal: "The IT support program sounds quite intriguing. Is any prior computer proficiency or experience a prerequisite for enrollment?",
            },
            casualVersion: "IT sounds cool. Do I need to know computers already?",
          },
          {
            speaker: "them",
            role: "项目协调员",
            textEn:
              "No prior experience needed. We start from the basics and work up to industry certifications like CompTIA A+. By the end, you will be ready to apply for entry-level IT positions that pay forty to fifty thousand per year.",
            textZh:
              "不需要之前的经验。我们从基础开始到行业认证如CompTIA A+。完成后你就准备好申请年薪四到五万美元的入门级IT职位了。",
            casualVersion: "Nah, no experience needed. We start super basic, then get you to industry certs like CompTIA A+. After, you'll be set for entry-level IT jobs paying like 40 to 50 grand a year.",
            formalityVariants: {
              casual: "Nope, no experience. We start from scratch, get you certified. You'll be ready for entry-level IT gigs making 40-50k a year.",
              standard: "No prior experience needed. We start from the basics and work up to industry certifications like CompTIA A+. By the end, you will be ready to apply for entry-level IT positions that pay forty to fifty thousand per year.",
              formal: "No prior experience is required. Our curriculum commences with foundational principles and progressively advances to prepare students for attaining industry-recognized certifications, such as CompTIA A+. Upon program completion, graduates will be well-equipped to pursue entry-level information technology roles with an earning potential of forty to fifty thousand dollars annually.",
            },
            keyPhrases: [
              { en: "industry certifications", zh: "行业认证" },
              { en: "entry-level positions", zh: "入门级职位" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Nope, we teach everything from scratch. By the end you will earn your CompTIA A+ certification, which is the gold standard for getting hired in IT. Starting salaries are forty to fifty K.",
                textZh: "不需要，我们从零教起。完成后你会获得CompTIA A+认证，这是IT就业的金标准。起薪四到五万。",
                actionHint: "了解就业前景",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I take the program while working full time? I cannot afford to quit my job.",
            textZh: "我可以在全职工作的同时参加这个项目吗？我不能辞职。",
            commonMistake: {
              wrong: "Can I attend the program while I am working full time? I cannot afford to leave my job.",
              correct: "Can I take the program while working full time? I cannot afford to quit my job.",
              explanation: "“take the program”和“quit my job”是更自然、常用的表达，更符合口语习惯。",
            },
            formalityVariants: {
              casual: "Can I do the program while working full time? Can't afford to quit my job.",
              standard: "Can I take the program while working full time? I cannot afford to quit my job.",
              formal: "Would it be possible for me to participate in this program concurrently with a full-time employment schedule? I am currently unable to resign from my position.",
            },
            casualVersion: "Can I do this while working? I can't quit my job.",
          },
          {
            speaker: "them",
            role: "项目协调员",
            textEn:
              "We designed it for working people. Classes are in the evening, six to nine p.m., three nights a week. We also have a Saturday-only track if weeknights do not work. And financial aid is available to cover tuition.",
            textZh:
              "我们为工作的人设计了这个项目。课程在晚上六点到九点，每周三个晚上。如果工作日晚上不行，我们也有仅周六的课程。还有经济援助可以支付学费。",
            casualVersion: "Yeah, we totally made it for folks who work. Classes are evenings, 6 to 9, three nights a week. Or if weeknights are a no-go, there's a Saturday-only option. Plus, financial help's available for tuition.",
            formalityVariants: {
              casual: "Yep, it's for working folks. Classes are 6-9 PM, three nights a week. Or a Saturday-only option if weeknights don't work. Financial aid helps with tuition.",
              standard: "We designed it for working people. Classes are in the evening, six to nine p.m., three nights a week. We also have a Saturday-only track if weeknights do not work. And financial aid is available to cover tuition.",
              formal: "This program has been specifically structured to accommodate individuals with existing employment commitments. Instructional sessions are held during the evening hours, from six to nine p.m., three evenings per week. Additionally, an alternative Saturday-only schedule is offered for those whose weekday evenings are unavailable. Furthermore, financial assistance is accessible to help defray tuition costs.",
            },
            keyPhrases: [
              { en: "designed for working people", zh: "为工作的人设计" },
              { en: "financial aid", zh: "经济援助" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That is exactly who we built this for. Evening classes three nights a week, or all day Saturday if you prefer. And there is financial aid so you don't have to worry about the cost.",
                textZh:
                  "我们就是为这类人设计的。每周三个晚上的课，或者周六全天如果你更喜欢的话。还有经济援助所以不用担心费用。",
                actionHint: "了解经济援助选项",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 驾校 ====================
  {
    id: "education-driving-school",
    category: "education",
    titleZh: "驾校",
    titleEn: "Driving School",
    description: "报名驾校学习开车",
    otherRole: "教练",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "driving-basic",
        titleZh: "报名驾校",
        titleEn: "Enrolling in Driving School",
        description: "咨询驾校课程和报名",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi, I just moved to the US and I need to learn to drive. I have never driven before. Can you help?",
            textZh: "你好，我刚搬到美国，需要学开车。我以前从来没开过车。你能帮我吗？",
            casualVersion: "Hey, I'm new to the US and need to learn to drive from scratch. Can you help?",
            formalityVariants: {
              casual: "Hey, just moved to the US, gotta learn to drive. Never driven before. Can you help me out?",
              standard:
                "Hi, I just moved to the US and I need to learn to drive. I have never driven before. Can you help?",
              formal:
                "Good morning/afternoon, I've recently relocated to the United States and require driving instruction. I have no prior driving experience. Could you please advise on your available programs?",
            },
          },
          {
            speaker: "them",
            role: "教练",
            textEn:
              "Of course! We have a beginner package that includes thirty hours of classroom instruction for the written test and ten hours of behind-the-wheel training. It is designed for people with zero experience.",
            textZh: "当然！我们有初学者套餐，包括三十小时的笔试课堂教学和十小时的实车训练。专为零经验的人设计。",
            keyPhrases: [
              { en: "behind-the-wheel training", zh: "实车训练" },
              { en: "written test", zh: "笔试" },
            ],
            casualVersion:
              "Sure! We got this beginner package, like, 30 hours of classroom stuff for the written test and 10 hours behind the wheel. Totally made for folks with no experience.",
            formalityVariants: {
              casual:
                "Oh yeah! We got a beginner package – 30 hours in class for the written and 10 hours driving. Perfect for total newbies.",
              standard:
                "Of course! We have a beginner package that includes thirty hours of classroom instruction for the written test and ten hours of behind-the-wheel training. It is designed for people with zero experience.",
              formal:
                "Certainly! We offer a comprehensive beginner package, which encompasses thirty hours of classroom instruction specifically tailored for the written examination, in addition to ten hours of practical behind-the-wheel training. This program is specifically designed for individuals with no prior driving experience.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Absolutely! Our beginner course covers everything — thirty hours of classroom for the permit test and ten hours of actual driving. Perfect for someone starting from zero.",
                textZh:
                  "当然可以！我们的初学者课程涵盖一切——三十小时课堂学习准备许可证考试和十小时实际驾驶。非常适合从零开始的人。",
                actionHint: "了解课程内容",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How much does the beginner package cost? And how long does the whole process take?",
            textZh: "初学者套餐多少钱？整个过程需要多长时间？",
            casualVersion: "What is the price, and how long until I can drive on my own?",
            commonMistake: {
              wrong: "How much cost the beginner package?",
              correct: "How much does the beginner package cost?",
              explanation: "Cost 在这里是动词，需要助动词 does。",
            },
            formalityVariants: {
              casual: "So, how much is the beginner package? And how long's the whole thing take?",
              standard: "How much does the beginner package cost? And how long does the whole process take?",
              formal:
                "Could you please inform me of the cost of the beginner package? Additionally, what is the estimated duration for completing the entire process?",
            },
          },
          {
            speaker: "them",
            role: "教练",
            textEn:
              "The package is five hundred ninety-nine dollars. Most students complete it in eight to ten weeks. After that, you take the DMV driving test. We can even let you use our car for the test.",
            textZh:
              "套餐五百九十九美元。大多数学生在八到十周内完成。之后你去DMV参加路考。我们甚至可以让你用我们的车去考试。",
            keyPhrases: [
              { en: "DMV driving test", zh: "DMV路考" },
              { en: "use our car", zh: "用我们的车" },
            ],
            casualVersion:
              "It's five ninety-nine. Most folks finish up in like, eight to ten weeks. Then you go take your DMV driving test. We can even let ya use our car for it.",
            formalityVariants: {
              casual:
                "It's five ninety-nine. Most people finish in 8-10 weeks. Then you do your DMV test, and you can even use our car.",
              standard:
                "The package is five hundred ninety-nine dollars. Most students complete it in eight to ten weeks. After that, you take the DMV driving test. We can even let you use our car for the test.",
              formal:
                "The cost of the package is five hundred ninety-nine dollars. Typically, students complete the program within an eight to ten-week timeframe. Subsequent to completion, you will proceed to take the DMV driving test. We also offer the convenience of utilizing one of our vehicles for your examination.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Five ninety-nine for everything. Takes about two months. Then you go to the DMV for the road test — and you can borrow our car for it. We have a great pass rate.",
                textZh: "全部五百九十九。大约两个月。然后去DMV路考——你可以借我们的车。我们的通过率很高。",
                actionHint: "了解时间和费用",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That is helpful. Do I need to get a learner's permit first? I do not know the process here.",
            textZh: "这很有帮助。我需要先拿学习许可证吗？我不了解这里的流程。",
            casualVersion: "Do I need a permit first? I don't know how it works here.",
            commonMistake: {
              wrong: "Do I need get student license first?",
              correct: "Do I need to get a learner's permit first?",
              explanation: "learner's permit 是专用名词，且 get 后需加 to。",
            },
            formalityVariants: {
              casual: "That's good to know. So, gotta get a learner's permit first? Not sure how things work here.",
              standard:
                "That is helpful. Do I need to get a learner's permit first? I'm not familiar with the process here.",
              formal:
                "That information is quite useful. Is it a prerequisite to obtain a learner's permit beforehand? I am currently unfamiliar with the procedural requirements in this jurisdiction.",
            },
          },
          {
            speaker: "them",
            role: "教练",
            textEn:
              "Yes, you need a learner's permit from the DMV before you can start driving lessons. You take a written test on traffic rules. Our classroom course prepares you for that. Many of our students pass on the first try.",
            textZh:
              "是的，在开始驾驶课之前你需要从DMV拿到学习许可证。你参加一个交通规则的笔试。我们的课堂课程为你准备考试。我们很多学生一次就通过了。",
            keyPhrases: [
              { en: "learner's permit", zh: "学习许可证" },
              { en: "traffic rules", zh: "交通规则" },
            ],
            culturalNote:
              "In the US, you must first pass a written test to get a learner's permit before you can practice driving on the road with an instructor.",
            casualVersion:
              "Yeah, gotta get a learner's permit from the DMV before you start driving lessons. You'll take a written test on traffic laws. Our classes get you ready for it. Lots of our students pass their first time.",
            formalityVariants: {
              casual:
                "Yep, you'll need a learner's permit from the DMV before any driving lessons. There's a written test on traffic laws. Our classes'll get you ready. Most students pass first try.",
              standard:
                "Yes, you need a learner's permit from the DMV before starting your driving lessons. You take a written test on traffic laws. Our classroom courses prepare you for the exam. Many of our students pass on their first try.",
              formal:
                "Affirmative, it is necessary to acquire a learner's permit from the Department of Motor Vehicles prior to commencing your practical driving instruction. This entails undergoing a written examination on traffic regulations. Our comprehensive classroom curriculum is specifically designed to prepare you for this examination, and we are pleased to note that a significant number of our students successfully pass on their initial attempt.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Step one is getting your permit from the DMV — a short written test on road rules. Our classes prep you for it. Once you have it, we start driving lessons right away.",
                textZh: "第一步是从DMV拿到许可证——一个简短的道路规则笔试。我们的课帮你准备。拿到后我们马上开始驾驶课。",
                actionHint: "先准备笔试",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "driving-intermediate",
        titleZh: "路上练习",
        titleEn: "On-Road Practice",
        description: "实际驾驶训练中和教练交流",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I am really nervous about driving on the highway. Can we practice that today?",
            textZh: "我对在高速公路上开车真的很紧张。我们今天可以练习吗？",
            casualVersion: "Highway driving freaks me out. Can we do that today?",
            commonMistake: {
              wrong: "I am very nervous to drive on the highway.",
              correct: "I am very nervous about driving on the highway.",
              explanation: "中文里“对...感到紧张”常直译成to do，但英文习惯用about doing。",
            },
            formalityVariants: {
              casual: "Super nervous 'bout highway driving. Can we practice that today?",
              standard: "I am really nervous about driving on the highway. Can we practice that today?",
              formal:
                "I am quite apprehensive regarding highway driving. Would it be possible to focus our practice on that particular skill today?",
            },
          },
          {
            speaker: "them",
            role: "教练",
            textEn:
              "Let us start on a quieter stretch of highway first. The key is merging — you need to match the speed of traffic before entering. I will guide you through every step. Remember, I have a brake on my side too.",
            textZh:
              "我们先在安静的高速路段开始。关键是汇入——你需要在进入前匹配车流速度。我会指导你每一步。记住，我这边也有刹车。",
            casualVersion: "Let's start on a quieter stretch first. Merging's key— gotta match traffic speed before getting on. I'll guide ya. Remember, I got a brake too.",
            formalityVariants: {
              casual: "Let's hit a quieter stretch first. Merging's key – gotta match traffic speed before you get on. I'll walk you through every step. And hey, I've got a brake on my side too.",
              standard: "Let us start on a quieter stretch of highway first. The key is merging — you need to match the speed of traffic before entering. I will guide you through every step. Remember, I have a brake on my side too.",
              formal: "We shall commence on a less congested segment of the highway. The paramount aspect is merging; you must attain the prevailing speed of traffic prior to entry. I will provide comprehensive guidance throughout this process. Furthermore, please be advised that I also possess a braking mechanism on my side.",
            },
            keyPhrases: [
              { en: "merging", zh: "汇入/并入" },
              { en: "match the speed of traffic", zh: "匹配车流速度" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We will ease into it — start with a quiet highway with less traffic. Merging is the big thing to learn. Speed up on the ramp to match the flow. And don't forget, I can brake from here if needed.",
                textZh:
                  "我们慢慢来——先在车少的安静高速路段开始。汇入是要学的重点。在匝道上加速匹配车流。别忘了，需要的话我这边可以刹车。",
                actionHint: "放松心态",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What if I need to change lanes and there is a car in my blind spot?",
            textZh: "如果我需要变道但盲区有车怎么办？",
            commonMistake: {
              wrong: "What if I need to change lane and there is a car in my blind spot?",
              correct: "What if I need to change lanes and there is a car in my blind spot?",
              explanation: "“车道”是复数，且常用'a car'而非'car'。",
            },
            formalityVariants: {
              casual: "What if I gotta change lanes and there's a car in my blind spot?",
              standard: "What if I need to change lanes and there is a car in my blind spot?",
              formal: "Should I require a lane change and encounter a vehicle within my blind spot, what procedure should I follow?",
            },
            casualVersion: "What do I do if there is a car in my blind spot when I want to change lanes?",
          },
          {
            speaker: "them",
            role: "教练",
            textEn:
              "Always check your mirrors first, then do a quick shoulder check before changing lanes. If there is a car there, maintain your speed and wait for a gap. Never force a lane change — patience is safer than speed.",
            textZh:
              "总是先看后视镜，然后在变道前快速转头检查。如果有车，保持速度等待空隙。永远不要强行变道——耐心比速度更安全。",
            casualVersion: "Always check your mirrors, then a quick shoulder check before changing. If there's a car there, just keep your speed, wait for a gap. Never force it — patience is way safer than speed.",
            formalityVariants: {
              casual: "Always check your mirrors, then a quick shoulder check before changing. If there's a car there, just keep your speed, wait for a gap. Never force it — patience is way safer than speed.",
              standard: "Always check your mirrors first, then do a quick shoulder check before changing lanes. If there is a car there, maintain your speed and wait for a gap. Never force a lane change — patience is safer than speed.",
              formal: "It is imperative to consistently verify your mirrors, followed by a brief shoulder check prior to initiating a lane change. Should a vehicle occupy that space, please maintain your current speed and await an appropriate interval. Under no circumstances should a lane change be forced; exercising patience is a considerably safer approach than accelerating.",
            },
            keyPhrases: [
              { en: "shoulder check", zh: "转头检查盲区" },
              { en: "maintain your speed", zh: "保持速度" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Mirror, signal, shoulder check — in that order. If someone is there, just wait. Keep your speed steady and a gap will open up. Never rush a lane change.",
                textZh:
                  "后视镜、转向灯、转头检查——按这个顺序。如果有人在那里，就等等。保持速度稳定，空隙会出现的。永远不要急着变道。",
                actionHint: "记住变道步骤",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That makes sense. Am I ready for the driving test, or do I need more practice?",
            textZh: "有道理。我准备好路考了吗，还是需要更多练习？",
            commonMistake: {
              wrong: "That make sense. Am I ready for driving test?",
              correct: "That makes sense. Am I ready for the driving test?",
              explanation: "主谓一致'makes'和'the'是定冠词，指特定的路考。",
            },
            formalityVariants: {
              casual: "Makes sense. Am I ready for the test, or need more practice?",
              standard: "That makes sense. Am I ready for the driving test, or do I need more practice?",
              formal: "That is logical. Am I adequately prepared for the driving examination, or is additional practice warranted?",
            },
            casualVersion: "Am I ready for the test, or do I need more hours?",
          },
          {
            speaker: "them",
            role: "教练",
            textEn:
              "You have improved a lot. I would say one or two more sessions focused on parallel parking and three-point turns, and you will be ready. Those are the two things most people fail on.",
            textZh:
              "你进步很大。我觉得再来一到两次专注于侧方停车和三点掉头的课，你就准备好了。这两个是大多数人失败的原因。",
            casualVersion: "You've improved a ton. I'd say one or two more sessions focusing on parallel parking and three-point turns, and you're good. Those are what most people mess up on.",
            commonMistake: {
              wrong: "You improved a lot. Those are the two things most people fail.",
              correct: "You have improved a lot. Those are the two things most people fail on.",
              explanation: "'You improved'应为完成时，'fail on'是固定搭配，表示“在某事上失败”。",
            },
            formalityVariants: {
              casual: "You've improved a ton. I'd say one or two more sessions focusing on parallel parking and three-point turns, and you're good. Those are what most people mess up on.",
              standard: "You have improved a lot. I would say one or two more sessions focused on parallel parking and three-point turns, and you will be ready. Those are the two things most people fail on.",
              formal: "Your progress has been substantial. I would recommend one or two additional sessions, specifically concentrating on parallel parking and three-point turns, after which I anticipate you will be fully prepared. These maneuvers are typically the primary challenges for most candidates.",
            },
            keyPhrases: [
              { en: "parallel parking", zh: "侧方停车" },
              { en: "three-point turn", zh: "三点掉头" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You are almost there. Let us do a couple more sessions on parallel parking and three-point turns — those trip up most test-takers. After that, you are good to go.",
                textZh: "你快准备好了。我们再练几次侧方停车和三点掉头——这两个绊倒了大多数考生。之后你就可以去考了。",
                actionHint: "安排额外练习课",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 音乐课 ====================
  {
    id: "education-music-lesson",
    category: "education",
    titleZh: "音乐课",
    titleEn: "Music Lessons",
    description: "为孩子报名和了解音乐课程",
    otherRole: "音乐老师",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "music-basic",
        titleZh: "咨询音乐课",
        titleEn: "Inquiring About Music Lessons",
        description: "了解音乐课程选项和安排",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, my daughter wants to learn piano. Do you offer lessons for beginners?",
            textZh: "你好，我女儿想学钢琴。你们为初学者提供课程吗？",
            casualVersion: "Hey, my kid wants to learn piano. Do you teach beginners?",
            formalityVariants: {
              casual: "Hey, my daughter wants to learn piano. Got any beginner lessons?",
              standard: "Hi, my daughter wants to learn piano. Do you offer lessons for beginners?",
              formal:
                "Good morning/afternoon, I'm inquiring about piano lessons for my daughter. Could you please let me know if you provide instruction for beginners?",
            },
          },
          {
            speaker: "them",
            role: "音乐老师",
            textEn:
              "Yes, I love teaching beginners! I offer thirty-minute lessons for younger students and forty-five-minute lessons for older ones. How old is she?",
            textZh: "是的，我很喜欢教初学者！我为年龄小的学生提供三十分钟的课，年龄大的四十五分钟。她多大了？",
            keyPhrases: [
              { en: "thirty-minute lessons", zh: "三十分钟的课" },
              { en: "younger students", zh: "年龄较小的学生" },
            ],
            casualVersion:
              "Yeah, love teaching beginners! Do thirty-minute lessons for younger kids, forty-five for older ones. How old is she?",
            alternativeExpressions: [
              {
                textEn:
                  "Absolutely, beginners are my favorite! I do half-hour sessions for little kids and forty-five minutes for older ones. What age are we working with?",
                textZh: "当然，初学者是我最喜欢教的！小孩子半小时，大一点的四十五分钟。她几岁？",
                actionHint: "说明孩子年龄",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "She is seven. She has never played any instrument before. How quickly can she start playing songs?",
            textZh: "她七岁。从来没有弹过任何乐器。她多快能开始弹歌曲？",
            casualVersion: "She is seven, total beginner. How soon will she be playing real songs?",
            commonMistake: {
              wrong: "She never played any instrument before.",
              correct: "She has never played any instrument before.",
              explanation: "在描述从过去到现在都没有做过某事时，通常用现在完成时 'has never played'。",
            },
            formalityVariants: {
              casual: "She's seven. Never played an instrument before. How fast can she start playing songs?",
              standard:
                "She is seven. She has never played any instrument before. How quickly can she start playing songs?",
              formal:
                "My daughter is seven years of age and has no prior experience with any musical instrument. I was wondering what the typical timeline is for a student to begin playing simple songs?",
            },
          },
          {
            speaker: "them",
            role: "音乐老师",
            textEn:
              "At seven, she is at a perfect age to start. Most kids can play simple melodies within the first month. By six months, she should be able to play easy songs with both hands. The key is daily practice, even just fifteen minutes.",
            textZh:
              "七岁是开始的完美年龄。大多数孩子在第一个月内就能弹简单的旋律。六个月后她应该能用双手弹简单的歌曲。关键是每天练习，哪怕只有十五分钟。",
            keyPhrases: [
              { en: "simple melodies", zh: "简单的旋律" },
              { en: "daily practice", zh: "每天练习" },
            ],
            casualVersion:
              "Seven's a perfect age to start. Most kids can play simple tunes in the first month. Within six months, she should be playing easy songs with both hands. Key's daily practice, even just fifteen minutes.",
            alternativeExpressions: [
              {
                textEn:
                  "Seven is great! She will be picking out tunes within weeks. Give it six months and she will be playing real songs with both hands. Just make sure she practices a little every day.",
                textZh: "七岁很好！几周内她就能弹出曲调。六个月后她就能双手弹真正的歌曲。只要确保她每天练一点。",
                actionHint: "了解练习要求",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Do we need to buy a piano right away, or can she practice on something else at first?",
            textZh: "我们需要马上买钢琴吗，还是她一开始可以用别的东西练习？",
            casualVersion: "Do we need to buy a piano first or can she use something else?",
            commonMistake: {
              wrong: "Do we need to buy piano right away, or can she practice on another thing at first?",
              correct: "Do we need to buy a piano right away, or can she practice on something else at first?",
              explanation: "在英语中，'piano' 是可数名词，需要冠词 'a'。'something else' 比 'another thing' 更自然。",
            },
            formalityVariants: {
              casual: "Gotta buy a piano right away, or can she just practice on something else to start?",
              standard: "Do we need to buy a piano right away, or can she practice on something else at first?",
              formal:
                "Is it necessary to acquire a piano immediately, or would it be feasible for her to commence practice on an alternative instrument initially?",
            },
          },
          {
            speaker: "them",
            role: "音乐老师",
            textEn:
              "You do not need a grand piano. A digital keyboard with weighted keys works great for beginners and costs much less. I can recommend a good one for about two hundred dollars. That will last her through the first year easily.",
            textZh:
              "你不需要三角钢琴。一个带配重键的电子键盘对初学者很好，而且便宜很多。我可以推荐一个大约两百美元的好款。轻松够用第一年。",
            keyPhrases: [
              { en: "weighted keys", zh: "配重键" },
              { en: "digital keyboard", zh: "电子键盘" },
            ],
            casualVersion:
              "Don't need a grand piano. A digital keyboard with weighted keys is great for beginners and way cheaper. Can recommend a good one for like two hundred bucks. That'll last her through the first year easy.",
            alternativeExpressions: [
              {
                textEn:
                  "No need for anything fancy. A digital keyboard with weighted keys is perfect to start. Around two hundred bucks. I will send you a link to the one I recommend for my students.",
                textZh: "不需要高级的。带配重键的电子键盘起步就很好。大约两百块。我发给你我给学生推荐的那款链接。",
                actionHint: "先买电子键盘",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "music-intermediate",
        titleZh: "讨论学习进度",
        titleEn: "Discussing Progress",
        description: "和音乐老师讨论孩子的学习进步",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "She has been taking lessons for three months now. How is she doing compared to other students at her level?",
            textZh: "她已经上了三个月的课了。和同级别的其他学生相比她怎么样？",
            casualVersion: "She has been at it for three months. How is she doing compared to other kids?",
            commonMistake: {
              wrong: "She learned for three months.",
              correct: "She has been taking lessons for three months.",
              explanation: "中文习惯说“学了多久”，但英文表示持续一段时间的动作要用完成时态。",
            },
            formalityVariants: {
              casual:
                "She's been taking lessons for three months. How's she doing compared to other kids at her level?",
              standard:
                "She has been taking lessons for three months now. How is she doing compared to other students at her level?",
              formal:
                "My daughter has been enrolled in lessons for three months. Could you please provide an assessment of her progress relative to other students at a similar stage of development?",
            },
          },
          {
            speaker: "them",
            role: "音乐老师",
            textEn:
              "She is doing very well! She picks up new pieces quickly and her rhythm is excellent. She is actually a bit ahead of where most students are at three months. I think she has a real talent for music.",
            textZh:
              "她做得非常好！她学新曲子很快，节奏感很好。她实际上比大多数学了三个月的学生稍微超前。我觉得她确实有音乐天赋。",
            casualVersion: "She's doing really well! Picks up new pieces fast, and her rhythm's great. She's actually kinda ahead of most students at three months. I think she's got a real talent for music.",
            commonMistake: {
              wrong: "She is a bit more ahead of other students.",
              correct: "She is a bit ahead of where most students are.",
              explanation: "“More ahead” 说法冗余，直接用 “ahead of” 即可。",
            },
            formalityVariants: {
              casual: "She's doing great! She picks up new pieces fast and her rhythm's excellent. She's actually kinda ahead of most other kids at three months. I think she's got real musical talent.",
              standard: "She is doing very well! She picks up new pieces quickly and her rhythm is excellent. She is actually a bit ahead of where most students are at three months. I think she has a real talent for music.",
              formal: "Her progress is truly commendable. She demonstrates a remarkable aptitude for learning new repertoire and possesses an outstanding sense of rhythm. In fact, she is progressing notably faster than the typical student at this three-month juncture. I believe she exhibits significant musical promise.",
            },
            keyPhrases: [
              { en: "picks up new pieces", zh: "学新曲子" },
              { en: "a real talent", zh: "真正的天赋" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Honestly, she is ahead of the curve. She learns fast and has great rhythm. I think she has a genuine gift. Have you considered signing her up for the spring recital?",
                textZh: "说实话，她超前了。学得快，节奏感很好。我觉得她真的有天赋。你考虑过给她报名春季演奏会吗？",
                actionHint: "考虑演奏会",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "A recital? She has never performed in front of people. Would that be too much pressure?",
            textZh: "演奏会？她从来没有在人前表演过。会不会压力太大？",
            commonMistake: {
              wrong: "Will it give her too much pressure?",
              correct: "Would that be too much pressure?",
              explanation: "英文里说“带来压力”用 \"put pressure on someone\" 或 \"cause pressure\"，不用 \"give pressure\"。",
            },
            formalityVariants: {
              casual: "A recital? She's never performed for anyone. Wouldn't that be too much pressure?",
              standard: "A recital? She has never performed in front of people. Would that be too much pressure?",
              formal: "Regarding a recital, she has no prior experience performing publicly. Do you anticipate that such an event might place an undue amount of pressure upon her?",
            },
            casualVersion: "A recital? She has never played in front of anyone. Won't that be too stressful?",
          },
          {
            speaker: "them",
            role: "音乐老师",
            textEn:
              "It is very low-key — just family and friends in a small hall. Performing builds confidence like nothing else. She would play a short piece, maybe two minutes. Most kids are nervous at first but feel so proud afterward.",
            textZh:
              "非常轻松——就是家人和朋友在一个小厅里。表演像其他任何事情一样能建立自信。她会弹一首短曲，大约两分钟。大多数孩子一开始紧张但之后感到非常自豪。",
            casualVersion: "It's super low-key – just family and friends in a small room. Performing really builds confidence like nothing else. She'd just play a short piece, maybe two minutes. Most kids get nervous at first, but they feel so proud afterward.",
            commonMistake: {
              wrong: "It is very relaxed.",
              correct: "It is very low-key.",
              explanation: "\"Relaxed\" 指人或感觉放松，\"low-key\" 指活动或场合不正式、不张扬。",
            },
            formalityVariants: {
              casual: "It's super low-key – just family and friends in a small room. Performing really builds confidence like nothing else. She'd just play a short piece, maybe two minutes. Most kids get nervous at first, but they feel so proud afterward.",
              standard: "It is very low-key — just family and friends in a small hall. Performing builds confidence like nothing else. She would play a short piece, maybe two minutes. Most kids are nervous at first but feel so proud afterward.",
              formal: "The event is quite informal, involving only close family and friends within a modest venue. Public performance is unparalleled in its ability to foster self-confidence. She would perform a brief selection, approximately two minutes in duration. While initial apprehension is common among young participants, a significant sense of accomplishment invariably follows.",
            },
            keyPhrases: [
              { en: "builds confidence", zh: "建立自信" },
              { en: "feel so proud", zh: "感到非常自豪" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Don't worry, it is super casual. Small room, friendly audience. She plays for maybe two minutes. Every kid is nervous but they always come off stage beaming. It is a huge confidence booster.",
                textZh:
                  "别担心，非常随意。小房间，友好的观众。她弹大约两分钟。每个孩子都紧张但下台时都笑开了花。非常能增强自信。",
                actionHint: "考虑让孩子参加",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Maybe we will try it. Should we also think about getting her into a music exam program?",
            textZh: "也许我们可以试试。我们也应该考虑让她参加音乐考级吗？",
            culturalNote: "中国家长普遍重视考级，美国更注重兴趣培养。",
            commonMistake: {
              wrong: "Should we also let her take music exams?",
              correct: "Should we also think about getting her into a music exam program?",
              explanation: "\"Getting her into a program\" 比 \"let her take exams\" 更强调系统性参与。",
            },
            formalityVariants: {
              casual: "Might try that. Should we also think about getting her into music exams?",
              standard: "Maybe we will try it. Should we also think about getting her into a music exam program?",
              formal: "Perhaps we will proceed with that. Additionally, do you believe it would be advisable to consider enrolling her in a formal music examination program?",
            },
            casualVersion: "Let us give it a try. Should we also think about music exams?",
          },
          {
            speaker: "them",
            role: "音乐老师",
            textEn:
              "I would wait until she has been playing for at least a year. The ABRSM or RCM exams are great for tracking progress, but there is no rush. Right now the most important thing is keeping her love for music alive.",
            textZh:
              "我建议等她至少学了一年再考虑。ABRSM或RCM考试很适合跟踪进度，但不用着急。现在最重要的是保持她对音乐的热爱。",
            casualVersion: "I'd wait till she's been playing for at least a year. ABRSM or RCM exams are great for tracking progress, but no rush. Right now, the most important thing's keeping her love for music alive.",
            culturalNote: "强调兴趣培养，而非过早追求考级成绩。",
            commonMistake: {
              wrong: "I suggest wait until she learned for one year.",
              correct: "I would wait until she has been playing for at least a year.",
              explanation: "动词 \"suggest\" 后常用 \"that\" 从句或动名词，且表示持续动作要用现在完成进行时。",
            },
            formalityVariants: {
              casual: "I'd wait till she's been playing for at least a year. ABRSM or RCM exams are great for tracking progress, but no rush. Right now, the most important thing's keeping her love for music alive.",
              standard: "I would wait until she has been playing for at least a year. The ABRSM or RCM exams are great for tracking progress, but there is no rush. Right now the most important thing is keeping her love for music alive.",
              formal: "My recommendation would be to defer such considerations until she has accumulated at least one year of consistent practice. While examinations such as those offered by ABRSM or RCM can indeed be valuable for monitoring development, there is no immediate urgency. Our primary objective at this stage should be to nurture and sustain her enthusiasm for music.",
            },
            keyPhrases: [
              { en: "ABRSM", zh: "ABRSM（英皇音乐考级）" },
              { en: "keeping her love for music alive", zh: "保持她对音乐的热爱" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Let her enjoy playing for a while first. After about a year, we can look at graded exams. For now, the goal is to make her love the piano. Exams can come later.",
                textZh: "让她先享受弹琴一段时间。大约一年后我们可以考虑考级。目前的目标是让她热爱钢琴。考试以后再说。",
                actionHint: "不要急于考级",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 体育联赛 ====================
  {
    id: "education-sports-league",
    category: "education",
    titleZh: "体育联赛",
    titleEn: "Sports League",
    description: "为孩子报名社区体育联赛",
    otherRole: "联赛协调员",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "sports-basic",
        titleZh: "报名体育联赛",
        titleEn: "Signing Up for a Sports League",
        description: "咨询和报名孩子的体育联赛",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I want to sign my son up for the youth soccer league. Is registration still open?",
            textZh: "你好，我想给儿子报名青少年足球联赛。还在注册吗？",
            casualVersion: "Hey, is it too late to sign my kid up for soccer?",
            culturalNote: "在美国，表达请求时用“I'd like to”比“I want to”更礼貌和自然。",
            commonMistake: {
              wrong: "I want to sign up my son",
              correct: "I'd like to sign my son up",
              explanation: "“I want to” 听起来太直接，用 “I'd like to” 更礼貌自然。",
            },
            formalityVariants: {
              casual: "Hey, wanna sign up my son for youth soccer. Registration still open?",
              standard: "Hi, I'd like to sign my son up for the youth soccer league. Is registration still open?",
              formal:
                "Good morning/afternoon, I am inquiring about registering my son for the youth soccer league. Could you please confirm if registration is still open?",
            },
          },
          {
            speaker: "them",
            role: "联赛协调员",
            textEn:
              "You are just in time! Registration closes this Friday. The spring season runs from March to May. Games are on Saturdays and practice is on Wednesdays. Which age group is your son in?",
            textZh: "你来得正好！注册本周五截止。春季赛季从三月到五月。比赛在周六，训练在周三。你儿子在哪个年龄组？",
            keyPhrases: [
              { en: "registration closes", zh: "注册截止" },
              { en: "spring season", zh: "春季赛季" },
            ],
            casualVersion:
              "You're just in time! Reg closes this Friday. Spring season's March to May. Games are Saturdays, practice Wednesdays. What age group's your son in?",
            formalityVariants: {
              casual:
                "You're just in time! Reg closes this Friday. Spring season's March to May. Games are Saturdays, practice Wednesdays. What age group's your son in?",
              standard:
                "You're just in time! Registration closes this Friday. The spring season runs from March to May. Games are on Saturdays and practice is on Wednesdays. Which age group is your son in?",
              formal:
                "You're quite fortunate; registration is still open and will conclude this Friday. The spring season is scheduled to commence in March and run through May. Games are held on Saturdays, with practice sessions on Wednesdays. May I inquire as to your son's age group?",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Just made it — registration ends Friday. The season is March through May, games on Saturdays, practice on Wednesdays. How old is he?",
                textZh: "赶上了——注册周五截止。赛季从三月到五月，周六比赛，周三训练。他多大？",
                actionHint: "尽快注册",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "He is nine. He has played soccer before in China but never in an organized league. Does he need any special equipment?",
            textZh: "他九岁。他在中国踢过足球但从来没参加过有组织的联赛。他需要什么特别装备吗？",
            casualVersion: "He is nine. He played in China but never in a league. What gear does he need?",
            commonMistake: {
              wrong: "He nine.",
              correct: "He is nine.",
              explanation: "说年龄时动词 be 不可省略，常与 he/she 缩写为 he's/she's。",
            },
            formalityVariants: {
              casual: "He's nine. Played soccer in China before, but never in a league. Needs any special gear?",
              standard:
                "He's nine. He's played soccer before in China but never in an organized league. Does he need any special equipment?",
              formal:
                "He is nine years of age. He has prior experience playing soccer in China, however, he has not participated in an organized league previously. Are there any particular equipment requirements?",
            },
          },
          {
            speaker: "them",
            role: "联赛协调员",
            textEn:
              "He will need shin guards, cleats, and a water bottle. The league provides the team jersey. We require all players to have shin guards during games and practice for safety.",
            textZh:
              "他需要护腿板、足球鞋和水壶。联赛提供队服。出于安全考虑，我们要求所有球员在比赛和训练中都戴护腿板。",
            keyPhrases: [
              { en: "shin guards", zh: "护腿板" },
              { en: "cleats", zh: "足球鞋/钉鞋" },
            ],
            casualVersion:
              "He'll need shin guards, cleats, and a water bottle. League provides the jersey. Everyone's gotta wear shin guards during games and practice for safety.",
            formalityVariants: {
              casual:
                "He'll need shin guards, cleats, and a water bottle. League provides the jersey. Everyone's gotta wear shin guards during games and practice for safety.",
              standard:
                "He'll need shin guards, cleats, and a water bottle. The league provides the team jersey. We require all players to have shin guards during games and practice for safety.",
              formal:
                "He will require shin guards, cleats, and a water bottle. The league will furnish the team jersey. For safety precautions, it is mandatory for all players to wear shin guards during both games and practice sessions.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Shin guards are mandatory, plus cleats and water. We give him the jersey. You can find affordable shin guards and cleats at any sports store for about thirty to forty bucks total.",
                textZh:
                  "护腿板是强制的，加上足球鞋和水。我们给他队服。在任何体育用品店大约三十到四十块就能买到合适的护腿板和足球鞋。",
                actionHint: "购买必要装备",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How much is the registration fee?",
            textZh: "注册费多少钱？",
            casualVersion: "How much is it to sign up?",
            formalityVariants: {
              casual: "How much is registration?",
              standard: "How much is the registration fee?",
              formal: "Could you please inform me of the registration fee?",
            },
          },
          {
            speaker: "them",
            role: "联赛协调员",
            textEn:
              "The fee is one hundred twenty dollars for the season. That covers the jersey, referee fees, and field maintenance. We have scholarships for families who need financial assistance — just ask and we will take care of it.",
            textZh:
              "赛季费用一百二十美元。包括队服、裁判费和场地维护。我们为需要经济援助的家庭提供奖学金——开口问就好，我们会处理的。",
            keyPhrases: [
              { en: "referee fees", zh: "裁判费" },
              { en: "scholarships", zh: "奖学金/减免" },
            ],
            casualVersion:
              "It's a hundred twenty bucks for the season. That covers the jersey, ref fees, and field maintenance. We got scholarships for families needing financial help — just ask, and we'll sort it out.",
            culturalNote: "美国对经济援助很开放，鼓励有需要就提。",
            formalityVariants: {
              casual:
                "It's a hundred twenty bucks for the season. That covers the jersey, ref fees, and field maintenance. We got scholarships for families needing financial help — just ask, and we'll sort it out.",
              standard:
                "The fee is one hundred twenty dollars for the season. That covers the jersey, referee fees, and field maintenance. We have scholarships for families who need financial assistance — just ask and we will take care of it.",
              formal:
                "The seasonal fee is one hundred twenty dollars. This amount encompasses the team jersey, referee compensation, and field upkeep. We also provide scholarships for families requiring financial assistance; please do not hesitate to inquire if needed, and we will facilitate the process.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "One twenty for the whole season. Jersey, refs, and field costs are all included. And if money is tight, we have financial aid — no kid gets left out because of cost.",
                textZh:
                  "整个赛季一百二十。队服、裁判和场地费用全包。如果经济紧张我们有经济援助——不会有孩子因为费用而被排除。",
                actionHint: "了解费用减免",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "sports-intermediate",
        titleZh: "和教练沟通",
        titleEn: "Communicating with the Coach",
        description: "和教练讨论孩子的参与和发展",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "Coach, I wanted to talk about my son. He seems discouraged because he does not get as much playing time as the other kids.",
            textZh: "教练，我想聊聊我儿子的事。他似乎很沮丧因为他的上场时间没有其他孩子多。",
            casualVersion: "Coach, my kid is bummed he doesn't play as much as the other kids. Can we talk about it?",
            commonMistake: {
              wrong: "I want to talk about my son.",
              correct: "I wanted to talk about my son.",
              explanation: "“wanted to” 表达了委婉的意图，比 “want to” 更礼貌。",
            },
            formalityVariants: {
              casual:
                "Hey Coach, wanted to chat about my son. He's kinda down 'cause he's not playing as much as the other kids.",
              standard:
                "Coach, I wanted to talk about my son. He seems discouraged because he does not get as much playing time as the other kids.",
              formal:
                "Coach, I would like to discuss my son's situation. He appears to be disheartened due to a perceived disparity in playing time compared to his teammates.",
            },
          },
          {
            speaker: "them",
            role: "联赛协调员",
            textEn:
              "I appreciate you bringing this up. In our league, every player is guaranteed at least half the game time. If that has not been happening, I want to fix it right away. Let me review the last few game sheets.",
            textZh:
              "感谢你提出来。在我们的联赛中，每个球员保证至少一半的比赛时间。如果没有做到，我要马上纠正。让我查看一下最近几场的记录。",
            casualVersion: "Appreciate you bringing this up. In our league, everyone's guaranteed at least half game time. If not, wanna fix it ASAP. Let me just check the last few game sheets.",
            commonMistake: {
              wrong: "If that not happening, I want immediately fix it.",
              correct: "If that has not been happening, I want to fix it right away.",
              explanation: "“has not been” 强调持续状态，“right away” 比 “immediately” 更口语。",
            },
            formalityVariants: {
              casual: "Thanks for bringing this up. In our league, everyone gets at least half the game. If not, I wanna fix it ASAP. Lemme just check the sheets from the last few games.",
              standard: "I appreciate you bringing this up. In our league, every player is guaranteed at least half the game time. If that has not been happening, I want to fix it right away. Let me review the last few game sheets.",
              formal: "I genuinely appreciate you bringing this matter to my attention. Within the parameters of our league, each player is guaranteed a minimum of half the game time. Should this protocol not have been adhered to, I am committed to rectifying the situation immediately. I will proceed to review the game sheets from the recent matches.",
            },
            keyPhrases: [
              { en: "playing time", zh: "上场时间" },
              { en: "guaranteed", zh: "保证的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Thanks for telling me. Our policy is equal playing time for everyone. If your son has been short-changed, that is on me and I will fix it immediately. Let me check the records.",
                textZh:
                  "谢谢你告诉我。我们的政策是每个人平等的上场时间。如果你儿子被忽略了，那是我的问题，我会立刻改正。让我查一下记录。",
                actionHint: "等待教练查看",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "He is also having trouble communicating with the other players because of the language barrier. Some kids get frustrated when he does not understand plays.",
            textZh: "他还因为语言障碍与其他球员沟通有困难。一些孩子对他听不懂战术感到沮丧。",
            commonMistake: {
              wrong: "He also has trouble to communicate with the other players.",
              correct: "He is also having trouble communicating with the other players.",
              explanation: "“have trouble doing something” 是固定搭配，表示遇到困难。",
            },
            formalityVariants: {
              casual: "He's also having trouble talking to the other players 'cause of the language thing. Some kids get annoyed when he doesn't get the plays.",
              standard: "He is also having trouble communicating with the other players because of the language barrier. Some kids get frustrated when he does not understand plays.",
              formal: "Furthermore, he is encountering difficulties in communication with his teammates, primarily due to the language barrier. This occasionally leads to frustration among some children when he fails to comprehend specific plays or instructions.",
            },
            casualVersion:
              "He also can't always understand the other kids because of the language thing. Some kids get annoyed.",
          },
          {
            speaker: "them",
            role: "联赛协调员",
            textEn:
              "I will address that with the team. Sportsmanship and inclusion are core values. I can pair him with a buddy on the field who can help explain things. And I will use more visual demonstrations during practice so language is less of a barrier.",
            textZh:
              "我会和球队谈这个问题。体育精神和包容是核心价值。我可以在场上给他配一个伙伴帮他解释。训练时我也会用更多视觉演示这样语言障碍就小了。",
            casualVersion: "I'll talk to the team about that. Sportsmanship and inclusion are super important here. I can set him up with a buddy on the field to help explain stuff. Plus, I'll use more visual cues in practice so language isn't such a big deal.",
            commonMistake: {
              wrong: "I will talk about that with the team.",
              correct: "I will address that with the team.",
              explanation: "“address” 在这里表示处理、解决问题，比 “talk about” 更正式和有力。",
            },
            formalityVariants: {
              casual: "I'll definitely talk to the team about that. Sportsmanship and inclusion are huge for us. I can pair him up with a buddy on the field to help him out. And I'll use more visual stuff in practice, so language isn't an issue.",
              standard: "I will address that with the team. Sportsmanship and inclusion are core values. I can pair him with a buddy on the field who can help explain things. And I will use more visual demonstrations during practice so language is less of a barrier.",
              formal: "I will certainly discuss this matter with the entire team. We uphold sportsmanship and inclusion as fundamental values. To facilitate better integration, I can arrange for him to be partnered with a peer on the field who can assist with explanations. Furthermore, I will incorporate additional visual demonstrations during practice sessions to mitigate the language barrier.",
            },
            keyPhrases: [
              { en: "sportsmanship", zh: "体育精神" },
              { en: "visual demonstrations", zh: "视觉演示" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That is not okay and I will talk to the team about it. I will buddy him up with someone who can help during games. And I will start using more hand signals and demonstrations in practice.",
                textZh:
                  "这不行，我会和球队谈。我会在比赛中给他安排一个帮助他的伙伴。训练时我也会开始使用更多手势和演示。",
                actionHint: "感谢教练的安排",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "That would really help. He loves soccer and I do not want him to lose interest because of these issues.",
            textZh: "那会很有帮助。他热爱足球，我不想让他因为这些问题失去兴趣。",
            commonMistake: {
              wrong: "I don't want him to lose his interest because of these problems.",
              correct: "I do not want him to lose interest because of these issues.",
              explanation: "“lose interest” 是固定短语，表示失去兴趣。“issues” 更委婉正式。",
            },
            formalityVariants: {
              casual: "Yeah, that'd be a huge help. He loves soccer, and I really don't want him to get turned off 'cause of all this.",
              standard: "That would really help. He loves soccer and I do not want him to lose interest because of these issues.",
              formal: "That would indeed be most beneficial. He possesses a strong passion for soccer, and my primary concern is to prevent him from disengaging due to these particular challenges.",
            },
            casualVersion: "That would be great. He really loves soccer and I don't want him to quit.",
          },
          {
            speaker: "them",
            role: "联赛协调员",
            textEn:
              "I won't let that happen. He is a talented player with great footwork. I am going to make sure he feels like part of the team. Sports should be fun for every kid — that is the whole point at this age.",
            textZh:
              "我不会让这种事发生。他是一个脚法很好的有天赋的球员。我会确保他感觉是球队的一部分。体育对每个孩子来说都应该是有趣的——在这个年龄这才是重点。",
            casualVersion: "Ain't gonna let that happen. He's a really talented player, great footwork. I'll make sure he feels like part of the team. Sports should just be fun for every kid – that's the main thing at this age.",
            commonMistake: {
              wrong: "I will not let this thing happen. This is the point at this age.",
              correct: "I won't let that happen. That's the whole point at this age.",
              explanation: "“won't let that happen” 更简洁自然，“the whole point” 更具强调性。",
            },
            formalityVariants: {
              casual: "Nah, not gonna let that happen. He's a really good player, solid footwork. I'll make sure he feels totally part of the team. Sports should just be fun for all kids — that's what it's all about right now.",
              standard: "I won't let that happen. He's a talented player with great footwork. I'll make sure he feels like part of the team. Sports should be fun for every kid - that's the whole point at this age.",
              formal: "I assure you, I will not allow that outcome. He is clearly a gifted player demonstrating excellent footwork. My commitment is to ensure he feels fully integrated as a valuable member of the team. Ultimately, the primary objective of sports at this developmental stage is to foster enjoyment and participation for every child.",
            },
            keyPhrases: [
              { en: "part of the team", zh: "球队的一部分" },
              { en: "sports should be fun", zh: "体育应该是有趣的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Not on my watch. He has got real skill and I want him to thrive. I am going to make sure every kid on this team feels included. At this age, it is all about having fun and building friendships.",
                textZh:
                  "我不会让这种事发生。他有真正的技术，我希望他能茁壮成长。我会确保这个队里每个孩子都感到被接纳。在这个年龄，重点是玩得开心和建立友谊。",
                actionHint: "放心交给教练",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 夏令营 ====================
  {
    id: "education-summer-camp",
    category: "education",
    titleZh: "夏令营",
    titleEn: "Summer Camp",
    description: "为孩子选择和报名夏令营",
    otherRole: "营地顾问",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "summer-camp-basic",
        titleZh: "咨询夏令营",
        titleEn: "Inquiring About Summer Camp",
        description: "了解夏令营选项和报名",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I am looking for a summer camp for my eight-year-old. What programs do you have?",
            textZh: "你好，我在找适合八岁孩子的夏令营。你们有什么项目？",
            casualVersion: "Hey, what summer camps do you have for an eight-year-old?",
            commonMistake: {
              wrong: "What program do you have?",
              correct: "What programs do you have?",
              explanation: "询问项目种类时，常用复数programs，表示多种选择。",
            },
            formalityVariants: {
              casual: "Hey, I'm looking for a summer camp for my 8-year-old. What kinda programs do you offer?",
              standard: "Hi, I'm looking for a summer camp for my eight-year-old. What programs do you have?",
              formal:
                "Good morning/afternoon, I am seeking information regarding summer camp options for my eight-year-old child. Could you please inform me of the programs you currently offer?",
            },
          },
          {
            speaker: "them",
            role: "营地顾问",
            textEn:
              "We have day camps and overnight camps. Day camp runs Monday through Friday, eight to four. We offer themes like outdoor adventure, arts and crafts, sports, and STEM exploration. Which sounds interesting?",
            textZh:
              "我们有日间营和过夜营。日间营周一到周五，八点到四点。我们有户外探险、手工艺术、体育和STEM探索等主题。哪个听起来有趣？",
            keyPhrases: [
              { en: "day camp", zh: "日间营" },
              { en: "overnight camp", zh: "过夜营/住宿营" },
            ],
            casualVersion:
              "So, we got day camps and overnight camps. Day camp's Mon-Fri, 8 to 4. Themes like outdoor adventure, arts & crafts, sports, STEM stuff. What sounds good?",
            commonMistake: {
              wrong: "Which is interesting?",
              correct: "Which sounds interesting?",
              explanation: "询问哪个听起来有吸引力，用 sounds interesting 更自然地表达主观感受。",
            },
            formalityVariants: {
              casual:
                "We've got day and overnight camps. Day camp's Mon-Fri, 8-4. Themes like outdoor adventure, arts & crafts, sports, STEM. What sounds interesting to you?",
              standard:
                "We have day camps and overnight camps. Day camp runs Monday through Friday, eight to four. We offer themes like outdoor adventure, arts and crafts, sports, and STEM exploration. Which sounds interesting?",
              formal:
                "Certainly, we provide both day camp and overnight camp options. Our day camp operates Monday through Friday, from eight AM to four PM. Our programs encompass various themes, including outdoor adventure, arts and crafts, sports, and STEM exploration. Which of these options piques your interest?",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Lots of options! Day camps go eight to four, Monday to Friday. We have adventure, arts, sports, and science themes. There is also overnight camp if he wants the full experience. What is he into?",
                textZh:
                  "很多选择！日间营八点到四点，周一到周五。有探险、艺术、体育和科学主题。如果他想要完整体验也有住宿营。他喜欢什么？",
                actionHint: "选择感兴趣的主题",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Day camp would be perfect. He loves being outdoors. How many weeks does it run?",
            textZh: "日间营很合适。他喜欢户外活动。营期多长？",
            casualVersion: "Day camp works. He is an outdoors kid. How many weeks is it?",
            commonMistake: {
              wrong: "How many weeks is it?",
              correct: "How many weeks does it run?",
              explanation: "询问项目持续多长时间，用 'run' 表达更地道自然。",
            },
            formalityVariants: {
              casual: "Day camp sounds great. He's really into the outdoors. How many weeks is it?",
              standard: "Day camp would be perfect. He loves being outdoors. How many weeks does it run?",
              formal:
                "The day camp option appears to be ideal. My child particularly enjoys outdoor activities. Could you please specify the duration of the program?",
            },
          },
          {
            speaker: "them",
            role: "营地顾问",
            textEn:
              "The outdoor adventure camp runs for eight weeks in total, but you can register for individual weeks. Each week has a different focus — hiking, swimming, fishing, nature crafts. You pick the weeks that work for your family.",
            textZh:
              "户外探险营总共八周，但你可以按周注册。每周有不同的重点——徒步、游泳、钓鱼、自然手工。你选择适合你家的周数。",
            keyPhrases: [
              { en: "register for individual weeks", zh: "按周注册" },
              { en: "different focus", zh: "不同的重点" },
            ],
            casualVersion:
              "The outdoor adventure camp's eight weeks total, but you can sign up for just individual weeks. Each week's got a different focus – hiking, swimming, fishing, nature crafts. Just pick what works for your family.",
            culturalNote: "美国夏令营常可按周报名，方便灵活。",
            commonMistake: {
              wrong: "You pick the weeks that suitable for your family.",
              correct: "You pick the weeks that work for your family.",
              explanation: "'Work for' 更自然地表达“适合某个家庭的安排或时间表”。",
            },
            formalityVariants: {
              casual:
                "Outdoor adventure camp's 8 weeks, but you can sign up for individual ones. Each week's different – hiking, swimming, fishing, nature crafts. Just pick what works for you guys.",
              standard:
                "The outdoor adventure camp runs for eight weeks in total, but you can register for individual weeks. Each week has a different focus — hiking, swimming, fishing, nature crafts. You pick the weeks that work for your family.",
              formal:
                "The outdoor adventure camp encompasses an eight-week duration; however, participants have the flexibility to register for individual weeks. Each week features a distinct focus, such as hiking, swimming, fishing, and nature crafts. You are welcome to select the weeks that best accommodate your family's schedule and preferences.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Eight weeks total but you sign up week by week. Every week is a different theme — one week is hiking, next is swimming, then fishing. Super flexible.",
                textZh: "总共八周但按周报名。每周不同主题——一周徒步、下一周游泳、然后钓鱼。非常灵活。",
                actionHint: "选择想要的周数",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What is the cost per week? And is lunch included?",
            textZh: "每周费用多少？包含午餐吗？",
            casualVersion: "How much per week? Does that include lunch?",
            commonMistake: {
              wrong: "Is lunch include?",
              correct: "Is lunch included?",
              explanation: "'Included' 是过去分词作表语，表示“包含在内”，而不是动词原形。",
            },
            formalityVariants: {
              casual: "How much a week? And is lunch included?",
              standard: "What is the cost per week? And is lunch included?",
              formal:
                "Could you please inform me of the weekly cost? Furthermore, is lunch provision included in the fee?",
            },
          },
          {
            speaker: "them",
            role: "营地顾问",
            textEn:
              "It is two hundred seventy-five per week. Lunch and two snacks are included. If you register for four or more weeks, you get a ten percent discount. Early bird registration before March first saves an additional fifteen percent.",
            textZh:
              "每周两百七十五美元。包含午餐和两次点心。如果注册四周或以上打九折。三月一日前早鸟注册额外省百分之十五。",
            keyPhrases: [
              { en: "early bird registration", zh: "早鸟注册/提前注册" },
              { en: "discount", zh: "折扣" },
            ],
            casualVersion:
              "It's 275 a week. That includes lunch and two snacks. Sign up for 4+ weeks, you get 10% off. And if you do early bird before March 1st, that's another 15% off.",
            culturalNote: "美国夏令营常用“早鸟价”和多周优惠吸引报名。",
            commonMistake: {
              wrong: "saves more fifteen percent.",
              correct: "saves an additional fifteen percent.",
              explanation: "'Additional' 更准确地表达“额外的”优惠，避免歧义，使表达更地道。",
            },
            formalityVariants: {
              casual:
                "It's $275 a week. Includes lunch & two snacks. Register for 4+ weeks, get 10% off. Early bird before March 1st saves another 15%.",
              standard:
                "It is two hundred seventy-five per week. Lunch and two snacks are included. If you register for four or more weeks, you get a ten percent discount. Early bird registration before March first saves an additional fifteen percent.",
              formal:
                "The cost is two hundred seventy-five dollars per week. This fee encompasses lunch and two snack provisions. We offer a ten percent discount for registrations of four or more weeks. Furthermore, an early bird registration prior to March first will yield an additional fifteen percent savings.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Two seventy-five a week, meals included. Book four weeks or more for ten percent off. And if you sign up before March first, you save an extra fifteen percent. Best deal is to register early.",
                textZh: "每周两百七十五，含餐。预定四周以上打九折。三月一日前注册再省百分之十五。最划算的是早注册。",
                actionHint: "趁早鸟价注册",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "summer-camp-intermediate",
        titleZh: "了解安全和特殊需求",
        titleEn: "Safety and Special Needs",
        description: "了解夏令营的安全措施和特殊需求安排",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "My son does not swim very well yet. How do you handle water safety at the outdoor camp?",
            textZh: "我儿子游泳还不太好。户外营怎么处理水上安全？",
            casualVersion: "He is not a strong swimmer. How do you handle that with water stuff?",
            commonMistake: {
              wrong: "My son swim not well. How do you do water safety?",
              correct: "My son does not swim very well yet. How do you handle water safety?",
              explanation: "英语中“不擅长”用 not very well，提问方式 handle 更自然。",
            },
            formalityVariants: {
              casual: "My son can't really swim. What about water safety at camp?",
              standard: "My son does not swim very well yet. How do you handle water safety at the outdoor camp?",
              formal:
                "My son is not a strong swimmer at this point. Could you please elaborate on your water safety protocols for the outdoor camp?",
            },
          },
          {
            speaker: "them",
            role: "营地顾问",
            textEn:
              "All campers take a swim assessment on the first day. Non-swimmers and beginners stay in the shallow area with extra lifeguards. We also offer swim lessons as part of the camp so he can improve throughout the summer.",
            textZh:
              "所有营员第一天都会进行游泳评估。不会游泳的和初学者留在有额外救生员的浅水区。我们还在营期内提供游泳课这样他可以整个夏天都在进步。",
            casualVersion: "First day, all campers get a swim test. If they can't swim well, they stay in the shallow end with more lifeguards. Plus, we do swim lessons here, so he can get better all summer.",
            formalityVariants: {
              casual: "Everyone gets a swim test first day. Non-swimmers stick to the shallow end with extra lifeguards. We also offer lessons, so he'll get better over summer.",
              standard: "All campers take a swim assessment on the first day. Non-swimmers and beginners stay in the shallow area with extra lifeguards. We also offer swim lessons as part of the camp so he can improve throughout the summer.",
              formal: "A comprehensive swim assessment is administered to all campers on their initial day. Individuals identified as non-swimmers or beginners will be supervised in designated shallow areas by additional lifeguards. Furthermore, we provide structured swim instruction within the camp curriculum to facilitate continuous improvement throughout the season.",
            },
            keyPhrases: [
              { en: "swim assessment", zh: "游泳评估" },
              { en: "lifeguards", zh: "救生员" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We test everyone's swimming level on day one. If he is a beginner, he stays in the shallow end with dedicated lifeguards. And we build in swim lessons so by summer's end he will be way more confident.",
                textZh:
                  "我们第一天测试每个人的游泳水平。如果他是初学者就在浅水区有专门的救生员看守。我们还安排了游泳课这样夏天结束时他会自信得多。",
                actionHint: "了解游泳安全措施",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That is reassuring. He also has a mild egg allergy. How do you handle food allergies at camp?",
            textZh: "这让我放心了。他还对鸡蛋有轻度过敏。你们在营地怎么处理食物过敏？",
            commonMistake: {
              wrong: "He has a light egg allergy. How do you do food allergies?",
              correct: "He also has a mild egg allergy. How do you handle food allergies?",
              explanation: "英语中用 \"mild allergy\" 表示轻微过敏，\"handle\" 在询问处理方式时更地道。",
            },
            formalityVariants: {
              casual: "Good to know. He's also got a mild egg allergy. How do you guys deal with food allergies?",
              standard: "That is reassuring. He also has a mild egg allergy. How do you handle food allergies at camp?",
              formal: "That is indeed reassuring. Additionally, he has a mild egg allergy. Could you please outline your procedures for managing food allergies within the camp environment?",
            },
            casualVersion: "Good to know. He is also a little allergic to eggs. How do you deal with allergies?",
          },
          {
            speaker: "them",
            role: "营地顾问",
            textEn:
              "We take allergies very seriously. You list all allergies on the registration form. Our kitchen prepares allergen-free alternatives. His counselor will carry his allergy information card at all times, and we have EpiPens on-site.",
            textZh:
              "我们非常重视过敏。你在注册表上列出所有过敏。我们的厨房准备无过敏原的替代食品。他的辅导员会始终随身携带他的过敏信息卡，现场也备有EpiPen。",
            casualVersion: "Allergies are a big deal for us. You just put 'em on the registration form. Our kitchen makes special food, and his counselor'll always have his allergy card. Plus, we've got EpiPens here.",
            formalityVariants: {
              casual: "We're super serious about allergies. You just put 'em on the form. Our kitchen makes safe food, his counselor keeps his allergy info, and we have EpiPens.",
              standard: "We take allergies very seriously. You list all allergies on the registration form. Our kitchen prepares allergen-free alternatives. His counselor will carry his allergy information card at all times, and we have EpiPens on-site.",
              formal: "We prioritize the management of allergies with utmost seriousness. All allergic conditions should be thoroughly documented on the registration form. Our culinary staff is equipped to prepare suitable allergen-free alternatives. Furthermore, his assigned counselor will maintain constant possession of his allergy information card, and EpiPens are readily available on the premises.",
            },
            keyPhrases: [
              { en: "allergen-free alternatives", zh: "无过敏原替代品" },
              { en: "EpiPens on-site", zh: "现场备有EpiPen（肾上腺素自注射器）" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We handle it carefully. All allergies go on his file. The kitchen makes separate meals as needed. His counselor carries an allergy card, and there are EpiPens at every station. Safety first, always.",
                textZh:
                  "我们很谨慎地处理。所有过敏都记入他的档案。厨房根据需要准备单独的餐食。他的辅导员携带过敏卡，每个站点都有EpiPen。安全永远第一。",
                actionHint: "填写过敏信息",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Last question — he speaks mostly Chinese at home. Will the language be a problem for him at camp?",
            textZh: "最后一个问题——他在家主要说中文。语言在营地会是个问题吗？",
            commonMistake: {
              wrong: "Language is a problem for him?",
              correct: "Will the language be a problem for him?",
              explanation: "提问时用 \"Will... be a problem\" 是更自然的表达方式，而不是直接陈述。",
            },
            formalityVariants: {
              casual: "One more thing — he mostly speaks Chinese at home. Will language be an issue at camp?",
              standard: "Last question — he speaks mostly Chinese at home. Will the language be a problem for him at camp?",
              formal: "My final inquiry concerns his language proficiency; he predominantly speaks Chinese at home. Do you anticipate any linguistic challenges for him during his time at camp?",
            },
            casualVersion: "One more thing — he mainly speaks Chinese. Will that be an issue at camp?",
          },
          {
            speaker: "them",
            role: "营地顾问",
            textEn:
              "Not at all! We have campers from many different backgrounds. Our counselors are trained to work with kids who are still learning English. Outdoor activities are naturally hands-on, so language is less of a barrier. He will make friends fast.",
            textZh:
              "完全不会！我们有来自各种背景的营员。我们的辅导员受过培训，能和还在学英语的孩子合作。户外活动天然就是动手的，所以语言障碍更小。他会很快交到朋友。",
            casualVersion: "Nah, not a problem! We've got kids from everywhere. Our counselors know how to handle kids still learning English. Plus, outdoor stuff is super hands-on, so language isn't a big deal. He'll make friends super quick.",
            formalityVariants: {
              casual: "Nope! We get kids from all over. Counselors know how to work with kids learning English. Outdoor stuff is hands-on, so language isn't a barrier. He'll make friends quickly.",
              standard: "Not at all! We have campers from many different backgrounds. Our counselors are trained to work with kids who are still learning English. Outdoor activities are naturally hands-on, so language is less of a barrier. He will make friends fast.",
              formal: "Absolutely not. We proudly host campers from a diverse array of backgrounds. Our counselors are specifically trained to facilitate engagement with children who are still acquiring English. Given the inherently interactive nature of outdoor activities, language often presents a minimal barrier. He will undoubtedly assimilate and form friendships quite rapidly.",
            },
            keyPhrases: [
              { en: "hands-on", zh: "动手的/实操的" },
              { en: "make friends fast", zh: "很快交到朋友" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No problem at all. We see kids from all over the world. Our counselors know how to include everyone. And outdoor stuff is mostly doing, not talking — he will fit right in and make friends in no time.",
                textZh:
                  "完全没问题。我们接待来自世界各地的孩子。我们的辅导员知道如何让每个人都参与。户外活动主要是动手而不是说——他会很快融入并交到朋友。",
                actionHint: "放心送孩子参加",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 作业帮助 ====================
  {
    id: "education-homework-help",
    category: "education",
    titleZh: "作业帮助",
    titleEn: "Homework Help",
    description: "在图书馆或课后班寻求作业帮助",
    otherRole: "辅导老师",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "homework-basic",
        titleZh: "请求作业帮助",
        titleEn: "Asking for Homework Help",
        description: "孩子在课后辅导班寻求帮助",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, can you help me with my math homework? I do not understand this word problem.",
            textZh: "不好意思，你能帮我看看数学作业吗？我不理解这道应用题。",
            casualVersion: "Hey, can you help with my math? I am stuck on this word problem.",
            commonMistake: {
              wrong: "Excuse me, can you help me with my math homework? I do not understand this word problem.",
              correct: "Excuse me, could you help me with my math homework? I don't understand this word problem.",
              explanation: "I do not 在口语中听起来比较生硬，用 I don't 更自然；can改为could更礼貌。",
            },
            formalityVariants: {
              casual: "Hey, can you help with my math homework? This word problem's got me stumped.",
              standard: "Excuse me, could you help me with my math homework? I don't understand this word problem.",
              formal:
                "Pardon me, I was hoping you might be able to assist me with my mathematics assignment. I am having difficulty comprehending this particular word problem.",
            },
          },
          {
            speaker: "them",
            role: "辅导老师",
            textEn:
              "Of course! Let me take a look. Okay, this problem is about calculating the area of a rectangle. Do you remember the formula for area?",
            textZh: "当然！让我看看。好的，这道题是关于计算长方形的面积。你记得面积的公式吗？",
            keyPhrases: [
              { en: "area of a rectangle", zh: "长方形的面积" },
              { en: "formula", zh: "公式" },
            ],
            casualVersion:
              "Yeah, for sure! Lemme see. Alright, this one's about calculating a rectangle's area. Remember the formula?",
            formalityVariants: {
              casual: "Totally! Let me see. So, this problem's about a rectangle's area. Got the formula?",
              standard:
                "Of course! Let me take a look. Okay, this problem is about calculating the area of a rectangle. Do you remember the formula for area?",
              formal:
                "Certainly! Allow me to examine it. This particular problem pertains to the calculation of a rectangle's area. Are you familiar with the formula for determining area?",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Sure, show me what you are working on. Okay, so this is an area problem — length times width. Do you know those two numbers from the problem?",
                textZh: "好的，给我看看你在做什么。好的，这是一道面积题——长乘以宽。你能从题目中找到这两个数字吗？",
                actionHint: "引导思考",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I know the formula, but I do not understand what the problem is asking. The English words are confusing.",
            textZh: "我知道公式，但我不理解题目在问什么。英语词汇让我困惑。",
            casualVersion: "I know the formula but I can't figure out what the question means. The English is hard.",
            commonMistake: {
              wrong:
                "I know the formula, but I do not understand what the problem is asking. The English words are confusing.",
              correct:
                "I know the formula, but I don't understand what the problem's asking. The English is just confusing me.",
              explanation: "I do not 缩写更自然；“English words are confusing”改为“English is confusing me”更地道。",
            },
            formalityVariants: {
              casual:
                "Yeah, I know the formula, but I just don't get what the problem's asking. The English is really throwing me off.",
              standard:
                "I know the formula, but I don't understand what the problem is asking. The English words are confusing.",
              formal:
                "While I am familiar with the formula, I am struggling to comprehend the exact requirements of the problem. The English terminology is rather perplexing.",
            },
          },
          {
            speaker: "them",
            role: "辅导老师",
            textEn:
              "That is totally normal for bilingual students. Let us break it down together. The key words here are length, width, and how much carpet. When it says how much carpet, it is asking for the area. See?",
            textZh:
              "对于双语学生来说这完全正常。我们一起拆解一下。关键词是长度、宽度和多少地毯。当它说需要多少地毯时，就是在问面积。看到了吗？",
            keyPhrases: [
              { en: "break it down", zh: "拆解/分解" },
              { en: "key words", zh: "关键词" },
            ],
            casualVersion:
              "That's totally normal for bilingual students. Let's just break it down. Key words are length, width, and 'how much carpet.' When it says 'how much carpet,' it's asking for the area. Get it?",
            formalityVariants: {
              casual:
                "That's totally fine for bilingual folks. We'll just break it down. Look, key words: length, width, and 'how much carpet.' 'How much carpet' means area. Got it?",
              standard:
                "That is totally normal for bilingual students. Let us break it down together. The key words here are length, width, and how much carpet. When it says how much carpet, it is asking for the area. See?",
              formal:
                "That is an entirely common experience for students navigating multiple languages. Let us analyze it collaboratively. The pertinent terms in this context are 'length,' 'width,' and 'how much carpet.' The phrase 'how much carpet' specifically refers to the required area. Do you comprehend?",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Don't worry, lots of kids struggle with word problems. Let us find the important words. Length is the long side, width is the short side, and how much carpet means they want the area. Got it?",
                textZh:
                  "别担心，很多孩子在应用题上有困难。我们找找重要的词。Length是长边，width是短边，how much carpet意思是他们要面积。明白了吗？",
                actionHint: "注意关键词",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Oh, I get it now! So I just multiply the length by the width. The answer is forty-eight square feet, right?",
            textZh: "哦，我明白了！所以我只要长乘以宽。答案是四十八平方英尺，对吗？",
            casualVersion: "Oh, okay! So it is just length times width. Forty-eight square feet?",
            commonMistake: {
              wrong:
                "Oh, I get it now! So I just multiply length with width. The answer is forty-eight square feet, right?",
              correct:
                "Oh, I get it now! So I just multiply the length by the width. The answer is forty-eight square feet, right?",
              explanation: "“multiply by” 是正确的搭配，而不是“multiply with”。",
            },
            formalityVariants: {
              casual:
                "Oh, I totally get it now! So I just multiply length times width? Answer's forty-eight square feet, right?",
              standard:
                "Oh, I get it now! So I just multiply the length by the width. The answer is forty-eight square feet, right?",
              formal:
                "Ah, I comprehend now! Therefore, I simply need to multiply the length by the width. The resulting answer is forty-eight square feet, correct?",
            },
          },
          {
            speaker: "them",
            role: "辅导老师",
            textEn:
              "Exactly right! Great job. And you even remembered to include the units — square feet. That is important. Do you want to try the next problem on your own?",
            textZh: "完全正确！做得好。你甚至记得加上单位——平方英尺。这很重要。你想自己试试下一道题吗？",
            keyPhrases: [
              { en: "units", zh: "单位" },
              { en: "on your own", zh: "自己/独立地" },
            ],
            casualVersion:
              "Yep, exactly! Good job. And you even remembered the units — square feet. That's a big deal. Wanna try the next one by yourself?",
            formalityVariants: {
              casual:
                "Spot on! Nice one. And you remembered the units — square feet. Super important. Wanna try the next problem alone?",
              standard:
                "Exactly right! Great job. And you even remembered to include the units — square feet. That is important. Do you want to try the next problem on your own?",
              formal:
                "Precisely correct! An excellent effort. Furthermore, you accurately included the appropriate units — square feet — which is a crucial detail. Would you care to attempt the subsequent problem independently?",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Nailed it! And nice job including square feet — a lot of kids forget the units. Want to tackle the next one by yourself? I am right here if you get stuck.",
                textZh: "答对了！而且加上平方英尺做得好——很多孩子忘了单位。想自己做下一道吗？卡住了我就在这里。",
                actionHint: "尝试独立完成",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "homework-intermediate",
        titleZh: "写作作业帮助",
        titleEn: "Writing Assignment Help",
        description: "寻求英语写作作业的帮助",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I need help with my book report. I read the book but I do not know how to organize my essay.",
            textZh: "我需要帮助写读书报告。我读了那本书但不知道怎么组织我的文章。",
            casualVersion: "I need help with my book report. I read it but don't know how to write it up.",
            commonMistake: {
              wrong: "I don't know how organize my essay.",
              correct: "I do not know how to organize my essay.",
              explanation: "how to do something 是固定搭配，不能省略 to。",
            },
            formalityVariants: {
              casual: "Need help with my book report. Read the book, but not sure how to organize the essay.",
              standard: "I need help with my book report. I read the book but I do not know how to organize my essay.",
              formal:
                "I require assistance with my book report. I have read the book, however, I am uncertain regarding the proper organization of my essay.",
            },
          },
          {
            speaker: "them",
            role: "辅导老师",
            textEn:
              "No problem! A book report usually has three parts: an introduction where you say the title and author, the body where you summarize the story and share your opinion, and a conclusion. Let us start with the introduction.",
            textZh:
              "没问题！读书报告通常有三个部分：引言部分说书名和作者，主体部分概括故事并分享你的观点，以及结论。我们从引言开始。",
            casualVersion: "No prob! Book report's usually got three parts: intro (where you say title/author), body (sum up story, share opinion), and a conclusion. Let's start with the intro.",
            commonMistake: {
              wrong: "We start with the introduction.",
              correct: "Let us start with the introduction.",
              explanation: "Let's 后接动词原形，表示建议。",
            },
            formalityVariants: {
              casual: "No prob! Book reports usually have three parts: intro (title/author), body (summarize/opinion), and conclusion. Let's hit the intro first.",
              standard: "No problem! A book report usually has three parts: an introduction where you state the title and author, the body where you summarize the story and share your opinion, and a conclusion. Let us begin with the introduction.",
              formal: "Certainly. A book report typically comprises three distinct sections: an introduction, in which you present the title and author; the main body, where you provide a summary of the narrative and articulate your perspective; and a conclusion. We shall commence with the introduction.",
            },
            keyPhrases: [
              { en: "book report", zh: "读书报告" },
              { en: "introduction, body, conclusion", zh: "引言、主体、结论" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Easy, I will walk you through it. Three parts: intro with the book title and author, middle where you tell what happens and what you think, and an ending. Let us start at the top.",
                textZh:
                  "简单，我带你过一遍。三个部分：开头写书名和作者，中间讲发生了什么和你怎么想，然后结尾。我们从开头开始。",
                actionHint: "从引言开始写",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "For the body, do I tell the whole story or just the main events?",
            textZh: "主体部分我是讲整个故事还是只讲主要事件？",
            commonMistake: {
              wrong: "For the body, I tell whole story or just main events?",
              correct: "For the body, do I tell the whole story or just the main events?",
              explanation: "英语疑问句需要助动词 \"do\"，且 \"the whole story\" 需要冠词 \"the\"。",
            },
            formalityVariants: {
              casual: "For the body, should I tell the whole thing or just the main stuff?",
              standard: "Regarding the body section, should I recount the entirety of the story or merely the primary events?",
              formal: "Concerning the main body of the report, would it be appropriate for me to narrate the complete storyline, or should I confine myself to outlining only the pivotal events?",
            },
            casualVersion: "In the middle part, do I retell the whole thing or just the big stuff?",
          },
          {
            speaker: "them",
            role: "辅导老师",
            textEn:
              "Just the main events — the beginning, the climax, and how it ends. Don't give too many details. The teacher wants to see that you understood the story and can express your own thoughts about it.",
            textZh: "只讲主要事件——开头、高潮和结局。不要给太多细节。老师想看到你理解了故事并能表达自己的想法。",
            casualVersion: "Just the main stuff — start, climax, and how it wraps up. Don't go too deep into details. Your teacher just wants to see you get the story and can say what you think.",
            commonMistake: {
              wrong: "Don't give too much details.",
              correct: "Don't give too many details.",
              explanation: "\"details\" 是可数名词，用 \"many\" 而非 \"much\"。",
            },
            formalityVariants: {
              casual: "Just the key bits — beginning, peak, and ending. No need for tons of details. Teacher just wants to see you get it and can say your own thoughts.",
              standard: "Focus solely on the primary events: the inception, the climax, and the resolution. Avoid excessive detail. Your instructor wishes to ascertain your comprehension of the narrative and your ability to articulate personal insights.",
              formal: "Kindly restrict your summary to the pivotal events, specifically the genesis, the narrative climax, and the ultimate resolution. Refrain from incorporating extraneous or exhaustive particulars. The objective of your instructor is to evaluate your understanding of the narrative and your capacity to convey independent analytical perspectives.",
            },
            keyPhrases: [
              { en: "climax", zh: "高潮" },
              { en: "express your own thoughts", zh: "表达你自己的想法" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Keep it to the big moments — how it starts, the turning point, and the ending. Then add what you thought about it. Your opinion is the most important part.",
                textZh: "只写重要的时刻——怎么开始的、转折点和结局。然后加上你的看法。你的观点是最重要的部分。",
                actionHint: "专注主要事件",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Can you check my grammar when I finish writing? English grammar is really hard for me.",
            textZh: "我写完后你能帮我检查语法吗？英语语法对我来说真的很难。",
            commonMistake: {
              wrong: "Can you check my grammar when I finish write?",
              correct: "Can you check my grammar when I finish writing?",
              explanation: "\"finish\" 后通常接动名词 (verb-ing)。",
            },
            formalityVariants: {
              casual: "Can you check my grammar once I'm done writing? English grammar's tough for me.",
              standard: "Would you be able to review my grammar once I complete the writing process? English grammar presents a significant challenge for me.",
              formal: "I would be grateful if you could proofread my composition for grammatical accuracy subsequent to my completion of it. I find English grammar to be exceptionally challenging.",
            },
            casualVersion: "Can you look over my grammar after? English grammar is killing me.",
          },
          {
            speaker: "them",
            role: "辅导老师",
            textEn:
              "Absolutely. Write your first draft and focus on getting your ideas down. Don't worry about perfect grammar on the first try. Once you have the content, we will go through it together and fix any errors.",
            textZh: "当然。先写初稿，专注于把想法写下来。第一次不用担心语法完美。有了内容后，我们一起过一遍修改错误。",
            casualVersion: "Totally. Just get your first draft written, focus on getting your ideas out. Don't sweat perfect grammar first pass. Once you got the content, we can look at it together and fix mistakes.",
            commonMistake: {
              wrong: "We can go through it together and change the errors.",
              correct: "We can go through it together and refine the errors.",
              explanation: "\"change the errors\" 听起来不自然，通常用 \"fix errors\" 或 \"correct errors\"。",
            },
            formalityVariants: {
              casual: "For sure. Just get your initial draft out, focus on putting down your thoughts. Don't stress about grammar being perfect the first go. Once the content's there, we can sort out the mistakes together.",
              standard: "Certainly. Please produce your initial draft and prioritize the articulation of your ideas. Do not be overly concerned with achieving grammatical perfection at this preliminary stage. Once the substantive content is established, we can jointly review it and address any inaccuracies.",
              formal: "Unquestionably. I recommend that you compose your preliminary draft with a primary emphasis on the elucidation of your conceptual framework. It is not necessary to meticulously attend to grammatical precision during this nascent phase. Subsequent to the development of your core content, we shall collaboratively undertake a review to rectify any grammatical deviations.",
            },
            keyPhrases: [
              { en: "first draft", zh: "初稿" },
              { en: "getting your ideas down", zh: "把想法写下来" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For sure. Just write what you are thinking first — don't stress about grammar yet. Get all your ideas on paper, then we will clean it up together. That is how all good writers work.",
                textZh:
                  "当然。先写你在想的——还不用紧张语法。把所有想法写在纸上，然后我们一起润色。所有好的作家都是这么做的。",
                actionHint: "先写内容后改语法",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 申请奖学金 ====================
  {
    id: "education-scholarship-apply",
    category: "education",
    titleZh: "申请奖学金",
    titleEn: "Scholarship Application",
    description: "向学校咨询和申请奖学金",
    otherRole: "奖学金办",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "scholarship-basic",
        titleZh: "了解奖学金机会",
        titleEn: "Learning About Scholarship Opportunities",
        description: "咨询可用的奖学金",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I am looking for scholarships to help pay for college. Where do I start?",
            textZh: "你好，我在找奖学金帮助支付大学费用。我从哪里开始？",
            casualVersion: "Hey, I need scholarship money for college. Where do I start looking?",
            commonMistake: {
              wrong: "I am finding scholarships",
              correct: "I am looking for scholarships",
              explanation: "“find” 是找到结果，而 “look for” 是寻找的过程。中文里“找”可以指代两者，英文需区分。",
            },
            formalityVariants: {
              casual: "Hey, I need help finding scholarships for college. Where do I start?",
              standard: "Hi, I am looking for scholarships to help pay for college. Where do I start?",
              formal:
                "Good morning/afternoon. I am seeking information regarding scholarship opportunities to finance my college education. Could you please direct me on how to commence this process?",
            },
          },
          {
            speaker: "them",
            role: "奖学金办",
            textEn:
              "Great that you are being proactive! We have a scholarship database with over two hundred options. Some are based on academic merit, others on financial need, community service, or specific majors. Let me help you narrow it down.",
            textZh:
              "你这么积极主动很好！我们有一个包含两百多个选项的奖学金数据库。有些基于学术成绩，有些基于经济需要、社区服务或特定专业。让我帮你缩小范围。",
            keyPhrases: [
              { en: "scholarship database", zh: "奖学金数据库" },
              { en: "academic merit", zh: "学术成绩/学业优秀" },
            ],
            casualVersion:
              "Awesome you're being so on it! We've got a scholarship database with, like, over 200 options. Some are for good grades, others for financial need, volunteering, or certain majors. Lemme help you figure out which ones.",
            commonMistake: {
              wrong: "Let me help you make it small.",
              correct: "Let me help you narrow it down.",
              explanation: "“narrow down” 是固定搭配，表示缩小范围或选择，不能直译。",
            },
            formalityVariants: {
              casual:
                "Awesome you're being so on it! We've got a scholarship database with, like, over 200 options. Some are for good grades, others for financial need, volunteering, or certain majors. Lemme help you figure out which ones.",
              standard:
                "It's great that you're being proactive! We have a scholarship database with over two hundred options. Some are based on academic merit, others on financial need, community service, or specific majors. Let me help you narrow it down.",
              formal:
                "We commend your proactive approach. Our institution maintains an extensive scholarship database, offering in excess of two hundred distinct opportunities. These scholarships are categorized by criteria such as academic merit, demonstrated financial need, engagement in community service, or alignment with specific academic disciplines. I would be pleased to assist you in refining your search.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Love that you are starting early! We have over two hundred scholarships listed. Some reward grades, some are need-based, others look for leadership or community work. Let us find the right ones for you.",
                textZh:
                  "你这么早开始真好！我们列出了两百多个奖学金。有的看成绩，有的看经济需要，有的看领导力或社区工作。我们来找适合你的。",
                actionHint: "描述你的情况",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "My grades are good and I volunteer at a food bank. Are there scholarships that match that profile?",
            textZh: "我成绩不错，还在食物银行做志愿者。有符合这个条件的奖学金吗？",
            casualVersion: "I have good grades and I volunteer at a food bank. Anything for that?",
            commonMistake: {
              wrong: "Are there scholarships that match my conditions?",
              correct: "Are there scholarships that match that profile?",
              explanation: "“profile” 在此指个人情况或背景的综合描述，比 “conditions” 更自然。",
            },
            formalityVariants: {
              casual: "My grades are decent and I volunteer at a food bank. Any scholarships for that kinda stuff?",
              standard:
                "My grades are good and I volunteer at a food bank. Are there scholarships that match that profile?",
              formal:
                "I possess strong academic standing and actively engage in community service, specifically volunteering at a food bank. Are there scholarship opportunities that align with these qualifications?",
            },
          },
          {
            speaker: "them",
            role: "奖学金办",
            textEn:
              "Yes, several! The Community Impact Award is perfect for you — it is a two thousand dollar scholarship for students with strong volunteer records. There is also the Academic Excellence Grant for students with a GPA above three point five.",
            textZh:
              "有的，好几个！社区影响力奖非常适合你——这是一个两千美元的奖学金，给有出色志愿者记录的学生。还有学术卓越奖，给GPA高于三点五的学生。",
            keyPhrases: [
              { en: "Community Impact Award", zh: "社区影响力奖" },
              { en: "volunteer records", zh: "志愿者记录" },
            ],
            casualVersion:
              "Yeah, tons! The Community Impact Award's perfect for ya — it's a two grand scholarship for students with solid volunteer stuff. Plus, there's the Academic Excellence Grant for anyone with a GPA over 3.5.",
            commonMistake: {
              wrong: "students with strong volunteer experiences",
              correct: "students with strong volunteer records",
              explanation: "“volunteer records” 指的是志愿服务记录，更准确和常用。",
            },
            formalityVariants: {
              casual:
                "Yeah, tons! The Community Impact Award's perfect for ya — it's a two grand scholarship for students with solid volunteer stuff. Plus, there's the Academic Excellence Grant for anyone with a GPA over 3.5.",
              standard:
                "Yes, several! The Community Impact Award is perfect for you — it is a two thousand dollar scholarship for students with strong volunteer records. There is also the Academic Excellence Grant for students with a GPA above three point five.",
              formal:
                "Indeed, there are numerous options. The Community Impact Award would be an excellent fit, offering two thousand dollars to students demonstrating significant volunteer contributions. Additionally, we offer the Academic Excellence Grant to individuals who maintain a Grade Point Average exceeding 3.5.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "You are a great candidate! The Community Impact Award — two grand for volunteer work — is right up your alley. And with good grades, the Academic Excellence Grant is another option.",
                textZh:
                  "你是很好的候选人！社区影响力奖——两千块用于志愿工作——非常适合你。加上好成绩，学术卓越奖是另一个选项。",
                actionHint: "了解具体奖学金",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How do I apply? Is there an essay required?",
            textZh: "怎么申请？需要写文章吗？",
            casualVersion: "How do I apply? Do I have to write an essay?",
            commonMistake: {
              wrong: "Need to write essay?",
              correct: "Is there an essay required?",
              explanation: "英语句子需要有主语和动词，省略主语动词过于口语化且不完整。",
            },
            formalityVariants: {
              casual: "So, how do I apply? Gotta write an essay?",
              standard: "How do I apply? Is there an essay required?",
              formal:
                "Could you please elaborate on the application procedure? Specifically, is a written essay submission a requisite component?",
            },
          },
          {
            speaker: "them",
            role: "奖学金办",
            textEn:
              "Most require a short essay, usually five hundred words, plus two recommendation letters. I can review your essay before you submit if you want. Our office also hosts free scholarship essay workshops every month.",
            textZh:
              "大多数需要一篇短文，通常五百字，加上两封推荐信。如果你想的话我可以在提交前帮你看看文章。我们办公室每月还举办免费的奖学金文章写作工作坊。",
            keyPhrases: [
              { en: "recommendation letters", zh: "推荐信" },
              { en: "essay workshops", zh: "文章写作工作坊" },
            ],
            casualVersion:
              "Most need a short essay, usually 500 words, plus two letters of rec. I can totally look over your essay before you send it in if you want. Our office also does free scholarship essay workshops monthly.",
            commonMistake: {
              wrong: "two suggest letters",
              correct: "two recommendation letters",
              explanation: "“recommendation letter” 是英语中推荐信的固定表达，不能直译为“suggest letter”。",
            },
            formalityVariants: {
              casual:
                "Most need a short essay, usually 500 words, plus two letters of rec. I can totally look over your essay before you send it in if you want. Our office also does free scholarship essay workshops monthly.",
              standard:
                "Most require a short essay, usually five hundred words, plus two recommendation letters. I can review your essay before you submit if you want. Our office also hosts free scholarship essay workshops every month.",
              formal:
                "The majority of these applications necessitate the submission of a concise essay, typically limited to five hundred words, in addition to two letters of recommendation. I would be pleased to provide a pre-submission review of your essay, should you wish. Furthermore, our office conducts complimentary scholarship essay workshops on a monthly basis.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Usually a five-hundred-word essay and two recommendation letters. Bring me your draft and I will help you polish it. We also run monthly workshops on how to write winning scholarship essays.",
                textZh:
                  "通常是五百字文章和两封推荐信。把草稿给我，我帮你润色。我们每月还举办如何写获奖奖学金文章的工作坊。",
                actionHint: "参加写作工作坊",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "scholarship-intermediate",
        titleZh: "准备申请材料",
        titleEn: "Preparing Application Materials",
        description: "准备和完善奖学金申请材料",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "I wrote my scholarship essay but I am not sure it is strong enough. The prompt asks about overcoming a challenge. Can you give me feedback?",
            textZh: "我写了奖学金文章但不确定是否够强。题目要求写克服挑战。你能给我反馈吗？",
            casualVersion:
              "I wrote the essay about overcoming a challenge but I am not sure it is good. Can you read it?",
            commonMistake: {
              wrong: "I wrote my scholarship essay but I'm not sure if it is enough strong.",
              correct: "I wrote my scholarship essay but I am not sure it is strong enough.",
              explanation: "形容词后加 'enough'，而不是 'enough' 加形容词。",
            },
            formalityVariants: {
              casual:
                "Wrote my scholarship essay, not sure it's strong enough. Prompt's 'bout overcoming a challenge. Can you gimme feedback?",
              standard:
                "I wrote my scholarship essay but I am not sure it is strong enough. The prompt asks about overcoming a challenge. Can you give me feedback?",
              formal:
                "I have completed my scholarship essay, but I am uncertain regarding its overall strength. The prompt specifically requested a narrative addressing the overcoming of a significant challenge. Would you be able to provide your esteemed feedback on this piece?",
            },
          },
          {
            speaker: "them",
            role: "奖学金办",
            textEn:
              "Let me read it. Your story about adapting to a new country is compelling, but you need to dig deeper into how it changed you. Right now it reads more like a timeline than a reflection. Show them what you learned.",
            textZh:
              "让我读一下。你关于适应新国家的故事很有说服力，但你需要更深入挖掘它如何改变了你。现在读起来更像时间线而不是反思。展示你学到了什么。",
            casualVersion: "Lemme read it. Your story 'bout adapting to a new country's compelling, but you gotta dig deeper into how it changed you. Right now it reads more like a timeline than a reflection. Show 'em what you learned.",
            formalityVariants: {
              casual: "Lemme read it. Your story 'bout adapting to a new country's compelling, but you gotta dig deeper into how it changed you. Right now it reads more like a timeline than a reflection. Show 'em what you learned.",
              standard: "Let me read it. Your story about adapting to a new country is compelling, but you need to dig deeper into how it changed you. Right now it reads more like a timeline than a reflection. Show them what you learned.",
              formal: "Allow me to review it. Your narrative concerning your adaptation to a new country is indeed compelling; however, it requires a deeper exploration into the transformative impact this experience had upon you. Presently, it reads more as a chronological account rather than a reflective analysis. It would be beneficial to articulate the profound lessons you have gleaned.",
            },
            keyPhrases: [
              { en: "dig deeper", zh: "深入挖掘" },
              { en: "reflection", zh: "反思" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Good start. The immigration story is powerful but it needs more depth. Don't just tell what happened — show how it transformed you. What skills did you gain? How did it shape who you are today?",
                textZh:
                  "好的开始。移民故事很有力但需要更深入。不要只讲发生了什么——展示它如何改变了你。你获得了什么技能？它如何塑造了今天的你？",
                actionHint: "加入更多反思",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I see. Should I also mention my volunteer work in the essay, or keep it focused on one story?",
            textZh: "明白了。我应该在文章中提到志愿者工作吗，还是专注于一个故事？",
            formalityVariants: {
              casual: "Got it. Should I also mention volunteer work or just stick to one story?",
              standard: "I see. Should I also mention my volunteer work in the essay, or keep it focused on one story?",
              formal: "Understood. Would it be advisable to incorporate my volunteer work within the essay, or should I maintain a singular focus on the primary narrative?",
            },
            casualVersion: "Should I add the volunteer stuff or keep it to one story?",
          },
          {
            speaker: "them",
            role: "奖学金办",
            textEn:
              "You can weave it in naturally. For example, if your challenge led you to volunteer at the food bank because you understood hunger from your own experience, that creates a powerful narrative. Connect the dots for the reader.",
            textZh:
              "你可以自然地穿插进去。例如，如果你的挑战经历让你去食物银行做志愿者，因为你从自己的经历中理解了饥饿，这就创造了一个有力的叙事。为读者把点连起来。",
            casualVersion: "You can totally weave it in naturally. Like, if your challenge led you to volunteer at the food bank 'cause you got hunger from your own experience, that's a powerful narrative. Connect the dots for the reader.",
            formalityVariants: {
              casual: "You can totally weave it in naturally. Like, if your challenge led you to volunteer at the food bank 'cause you got hunger from your own experience, that's a powerful narrative. Connect the dots for the reader.",
              standard: "You can weave it in naturally. For example, if your challenge led you to volunteer at the food bank because you understood hunger from your own experience, that creates a powerful narrative. Connect the dots for the reader.",
              formal: "You may seamlessly integrate it. For instance, if your personal challenge motivated you to engage in volunteer work at a food bank, stemming from an experiential understanding of hunger, this would construct a profoundly impactful narrative. It is crucial to establish clear connections for the audience.",
            },
            keyPhrases: [
              { en: "weave it in", zh: "自然穿插" },
              { en: "connect the dots", zh: "把点连起来/建立联系" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Tie them together. If your challenge experience inspired your volunteering, that is a beautiful story arc. Show cause and effect — the committee loves seeing how hardship turned into action.",
                textZh:
                  "把它们联系起来。如果你的挑战经历启发了你的志愿服务，那就是一个漂亮的故事弧线。展示因果关系——评委喜欢看到困难如何转化为行动。",
                actionHint: "建立故事联系",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That is great advice. When should I ask my teachers for recommendation letters?",
            textZh: "这个建议太好了。我什么时候应该向老师要推荐信？",
            commonMistake: {
              wrong: "This advice is very good. When I should ask my teachers for recommendation letters?",
              correct: "That is great advice. When should I ask my teachers for recommendation letters?",
              explanation: "对他人说的建议用 'That is' 更自然。疑问句语序应为 'When should I...?'",
            },
            formalityVariants: {
              casual: "Good advice! When should I ask teachers for rec letters?",
              standard: "That is great advice. When should I ask my teachers for recommendation letters?",
              formal: "That is excellent counsel. Could you please advise on the appropriate timing for requesting letters of recommendation from my instructors?",
            },
            casualVersion: "Good idea. When should I ask teachers for recommendation letters?",
          },
          {
            speaker: "them",
            role: "奖学金办",
            textEn:
              "Give them at least three weeks before the deadline. Choose teachers who know you well and can speak to your character, not just your grades. Provide them with a list of your activities and goals so they can write a detailed letter.",
            textZh:
              "在截止日期前至少给他们三周时间。选择了解你的老师，能谈论你的品格而不仅仅是成绩的。给他们一份你的活动和目标清单这样他们可以写一封详细的推荐信。",
            casualVersion: "Give 'em at least three weeks before the deadline. Pick teachers who know you well and can speak to your character, not just your grades. Give 'em a list of your activities and goals so they can write a detailed letter.",
            formalityVariants: {
              casual: "Give 'em at least three weeks before the deadline. Pick teachers who know you well and can speak to your character, not just your grades. Give 'em a list of your activities and goals so they can write a detailed letter.",
              standard: "Give them at least three weeks before the deadline. Choose teachers who know you well and can speak to your character, not just your grades. Provide them with a list of your activities and goals so they can write a detailed letter.",
              formal: "It is advisable to provide them with a minimum of three weeks prior to the submission deadline. Select instructors who possess a thorough understanding of your capabilities and can attest to your character, beyond mere academic performance. Furnish them with a comprehensive list of your extracurricular activities and future objectives to facilitate the composition of a detailed and impactful letter.",
            },
            keyPhrases: [
              { en: "at least three weeks", zh: "至少三周" },
              { en: "speak to your character", zh: "谈论你的品格" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Ask at least three weeks early — teachers are busy. Pick someone who really knows you as a person. And give them a cheat sheet of your accomplishments so they have material to work with.",
                textZh:
                  "至少提前三周问——老师很忙。选一个真正了解你这个人的。给他们一份你的成就清单这样他们有素材可以用。",
                actionHint: "提前请求并提供信息",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 在线课程 ====================
  {
    id: "education-online-course",
    category: "education",
    titleZh: "在线课程",
    titleEn: "Online Course",
    description: "咨询和注册在线学习课程",
    otherRole: "课程顾问",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "online-course-basic",
        titleZh: "了解在线课程",
        titleEn: "Learning About Online Courses",
        description: "咨询在线课程的选项和形式",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I am interested in taking online courses but I have never done it before. How does it work?",
            textZh: "我对在线课程感兴趣但从来没上过。怎么上课？",
            casualVersion: "I want to try online classes but I have never done it. How does it work?",
            commonMistake: {
              wrong: "I am interested in online courses",
              correct: "I am interested in taking online courses",
              explanation: "中文直接说“对……感兴趣”，英文后接动词需要用动名词。",
            },
            formalityVariants: {
              casual: "I'm interested in online courses, but haven't done one before. How does it work?",
              standard: "I am interested in taking online courses but I have never done it before. How does it work?",
              formal:
                "I'm interested in exploring your online course offerings, but I lack prior experience with this format. Could you please explain the operational process?",
            },
          },
          {
            speaker: "them",
            role: "课程顾问",
            textEn:
              "It is simpler than you think! You log into our learning platform from your computer or phone. Some courses are live with a scheduled class time, and others are self-paced so you can study whenever it is convenient.",
            textZh:
              "比你想的简单！你从电脑或手机登录我们的学习平台。有些课程是有固定时间的直播课，有些是自定进度的所以你方便时就可以学习。",
            keyPhrases: [
              { en: "learning platform", zh: "学习平台" },
              { en: "self-paced", zh: "自定进度的" },
            ],
            casualVersion:
              "It's way simpler than you think! Just log into our platform from your computer or phone. Some courses are live, with a set class time, others are self-paced so you can study whenever works for you.",
            formalityVariants: {
              casual:
                "It's super easy! Just hop on our platform from your computer or phone. We've got live classes with set times, or self-paced ones you can do whenever you want.",
              standard:
                "It is simpler than you think! You log into our learning platform from your computer or phone. Some courses are live with a scheduled class time, and others are self-paced so you can study whenever it is convenient.",
              formal:
                "The process is quite straightforward. Access to our learning platform is available via your computer or mobile device. Our courses are structured in two primary formats: live sessions with predetermined schedules, and self-paced modules allowing for flexible study at your convenience.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Super easy! Just log in from any device. Some classes are live at set times, others you do on your own schedule. You get the same education either way.",
                textZh:
                  "非常简单！从任何设备登录就行。有些课是固定时间直播的，有些你按自己的时间安排。不管哪种教育质量都一样。",
                actionHint: "了解上课方式",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Self-paced sounds better for me since I work during the day. What subjects are available?",
            textZh: "自定进度对我更合适因为我白天工作。有什么科目可选？",
            casualVersion: "Self-paced works better for me. What can I study?",
            commonMistake: {
              wrong: "What subjects have?",
              correct: "What subjects are available?",
              explanation: '英文问“有什么”常用 "What is/are available?" 或 "Do you have any...?"，避免直译。',
            },
            formalityVariants: {
              casual: "Yeah, self-paced works better 'cause I work all day. What kind of stuff can I take?",
              standard: "Self-paced sounds better for me since I work during the day. What subjects are available?",
              formal:
                "A self-paced format would be more suitable for my schedule, given my daytime employment. Could you please provide a list of the available subject areas?",
            },
          },
          {
            speaker: "them",
            role: "课程顾问",
            textEn:
              "We have everything from business and IT to healthcare and creative arts. Our most popular courses right now are data analytics, digital marketing, and medical coding. Each one leads to an industry-recognized certificate.",
            textZh:
              "我们从商业和IT到医疗和创意艺术都有。目前最受欢迎的课程是数据分析、数字营销和医疗编码。每一个都可以获得行业认可的证书。",
            keyPhrases: [
              { en: "data analytics", zh: "数据分析" },
              { en: "industry-recognized certificate", zh: "行业认可的证书" },
            ],
            casualVersion:
              "We've got pretty much everything – business, IT, healthcare, creative arts, you name it. Right now, data analytics, digital marketing, and medical coding are super popular. And yeah, you get an industry cert for each one.",
            formalityVariants: {
              casual:
                "We cover a huge range: business, IT, healthcare, creative arts – the works! Our hottest courses currently are data analytics, digital marketing, and medical coding. Plus, you get an industry certificate for each.",
              standard:
                "We have everything from business and IT to healthcare and creative arts. Our most popular courses right now are data analytics, digital marketing, and medical coding. Each one leads to an industry-recognized certificate.",
              formal:
                "Our curriculum encompasses a broad spectrum of disciplines, ranging from business and information technology to healthcare and the creative arts. Our current highly sought-after courses include data analytics, digital marketing, and medical coding. Successful completion of each program culminates in the award of an industry-recognized certificate.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Tons of options — business, tech, healthcare, design. The hot ones right now are data analytics, digital marketing, and medical coding. All come with a real certificate employers respect.",
                textZh:
                  "很多选择——商业、科技、医疗、设计。现在最热门的是数据分析、数字营销和医疗编码。全部附带雇主认可的真实证书。",
                actionHint: "选择感兴趣的方向",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How long does a typical course take to complete?",
            textZh: "一个典型的课程需要多长时间完成？",
            casualVersion: "How long does a course usually take?",
            commonMistake: {
              wrong: "How long a course take to finish?",
              correct: "How long does a typical course take to complete?",
              explanation: '疑问句需要倒装，并使用动词原型 "take"。',
            },
            formalityVariants: {
              casual: "Roughly how long does a course usually take?",
              standard: "How long does a typical course take to complete?",
              formal: "Could you please inform me of the approximate duration required to complete a standard course?",
            },
          },
          {
            speaker: "them",
            role: "课程顾问",
            textEn:
              "Most certificate courses take eight to twelve weeks if you study about five hours per week. Since they are self-paced, you can finish faster if you have more time, or take longer if you need to. There is no penalty for going slow.",
            textZh:
              "大多数证书课程如果每周学习约五个小时需要八到十二周。因为是自定进度的，如果你有更多时间可以更快完成，或者需要的话可以慢慢来。慢一点没有任何惩罚。",
            keyPhrases: [
              { en: "eight to twelve weeks", zh: "八到十二周" },
              { en: "no penalty", zh: "没有惩罚" },
            ],
            casualVersion:
              "Most cert courses are 8-12 weeks if you put in like five hours a week. But since they're self-paced, you can totally speed through 'em if you've got more time, or take it easy if you need to. No worries about going slow.",
            formalityVariants: {
              casual:
                "Usually, cert courses run 8-12 weeks with about five hours of study weekly. But with self-pacing, you can zip through them quicker if you have extra time, or stretch them out if you need. No rush at all.",
              standard:
                "Most certificate courses take eight to twelve weeks if you study about five hours per week. Since they are self-paced, you can finish faster if you have more time, or take longer if you need to. There is no penalty for going slow.",
              formal:
                "Typically, certificate programs require a commitment of approximately five hours of study per week over an eight to twelve-week period. Given their self-paced nature, participants have the flexibility to accelerate their completion if their schedule permits, or extend the duration as necessary, without incurring any penalties for a slower progression.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "About two to three months at five hours a week. But it is totally flexible — go faster or slower, no pressure. Some people finish in a month, others take six. Totally up to you.",
                textZh:
                  "按每周五小时大约两到三个月。但完全灵活——快或慢都行，没有压力。有人一个月完成，有人用六个月。完全取决于你。",
                actionHint: "根据自己的节奏安排",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "online-course-intermediate",
        titleZh: "技术和学习支持",
        titleEn: "Technical and Learning Support",
        description: "解决在线学习中的技术问题和学习困难",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "I am having trouble with the online platform. The video lectures keep buffering and I cannot submit my assignments.",
            textZh: "我在线平台遇到问题。视频课一直缓冲，我也无法提交作业。",
            casualVersion: "The platform is giving me problems. Videos keep buffering and I can't turn in my work.",
            commonMistake: {
              wrong: "I have problem with the online platform.",
              correct: "I am having trouble with the online platform.",
              explanation:
                "中文里常说“有问题”，但英文表达习惯上用“have trouble with”或“am having trouble with”更地道，而非直译“have problem with”。",
            },
            formalityVariants: {
              casual:
                "Ugh, the online platform's giving me issues. Videos keep buffering, and I can't submit my assignments.",
              standard:
                "I am having trouble with the online platform. The video lectures keep buffering and I cannot submit my assignments.",
              formal:
                "I am experiencing some difficulties with the online learning platform. Specifically, the video lectures are consistently buffering, and I am unable to submit my assignments.",
            },
          },
          {
            speaker: "them",
            role: "课程顾问",
            textEn:
              "Let me help you troubleshoot. First, try clearing your browser cache and switching to Chrome if you are not already using it. For assignments, make sure the file size is under ten megabytes. If it persists, our tech support team can remote into your computer.",
            textZh:
              "让我帮你排查问题。首先，试试清除浏览器缓存，如果还没用Chrome的话换成Chrome。对于作业，确保文件大小在十兆以下。如果问题持续，我们的技术支持团队可以远程连接你的电脑。",
            casualVersion: "Lemme help ya troubleshoot. First, try clearing your browser cache, and switch to Chrome if you're not already. For assignments, just make sure the file size is under 10 megs. If it's still an issue, our tech support can remote into your computer.",
            commonMistake: {
              wrong: "our tech support team can remote control your computer.",
              correct: "our tech support team can remote into your computer.",
              explanation: "“remote into”是技术领域地道表达，指远程访问或操作，而非直译“remote control”。",
            },
            formalityVariants: {
              casual: "Lemme help ya troubleshoot. First, clear your browser cache, switch to Chrome if you haven't. For assignments, keep files under 10 megs. If it keeps happening, tech support can remote into your computer.",
              standard: "Let me help you troubleshoot. First, try clearing your browser cache and switching to Chrome if you are not already using it. For assignments, make sure the file size is under ten megabytes. If it persists, our tech support team can remote into your computer.",
              formal: "Allow me to assist you with troubleshooting. Initially, please attempt clearing your browser cache and utilizing Google Chrome if you are not already. Regarding assignments, kindly ensure the file size does not exceed ten megabytes. Should the issue persist, our technical support team is equipped to remotely access your computer.",
            },
            keyPhrases: [
              { en: "clearing your browser cache", zh: "清除浏览器缓存" },
              { en: "remote into your computer", zh: "远程连接你的电脑" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Let us fix this. Try Chrome and clear your cache first. For uploads, keep files under ten MB. If that doesn't work, our tech team can jump onto your screen remotely and sort it out.",
                textZh:
                  "我们来解决这个。先试试Chrome并清除缓存。上传文件保持在十MB以下。如果还不行，我们的技术团队可以远程到你的屏幕上帮忙解决。",
                actionHint: "按步骤排查",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks. I also find it hard to stay motivated when studying alone. Any suggestions?",
            textZh: "谢谢。我还发现一个人学习很难保持动力。有什么建议吗？",
            commonMistake: {
              wrong: "I also feel hard to stay motivated when studying alone.",
              correct: "I also find it hard to stay motivated when studying alone.",
              explanation: "表达“觉得很难”时，英文常用“find it hard”而非“feel hard”。",
            },
            formalityVariants: {
              casual: "Thanks. Also, hard to stay motivated studying alone. Any ideas?",
              standard: "Thanks. I also find it hard to stay motivated when studying alone. Any suggestions?",
              formal: "Thank you. I am also finding it challenging to maintain motivation while studying independently. Do you have any recommendations?",
            },
            casualVersion: "Also, it is hard to stay motivated studying alone. Any tips?",
          },
          {
            speaker: "them",
            role: "课程顾问",
            textEn:
              "That is one of the biggest challenges with online learning. I recommend joining our virtual study groups — they meet weekly on Zoom. Also, set small daily goals rather than trying to do everything at once. Consistency beats intensity.",
            textZh:
              "这是在线学习最大的挑战之一。我建议加入我们的虚拟学习小组——每周在Zoom上见面。另外，设定每天的小目标而不是试图一次做完所有事。坚持胜于强度。",
            casualVersion: "Yeah, that's one of the biggest challenges with online learning. I'd recommend joining our virtual study groups – they meet weekly on Zoom. Also, just set small daily goals instead of trying to do everything at once. Consistency beats intensity.",
            commonMistake: {
              wrong: "Consistency is better than intensity.",
              correct: "Consistency beats intensity.",
              explanation: "“beats”在这里是俚语用法，表示“胜过、优于”，听起来比“is better than”更地道自然。",
            },
            formalityVariants: {
              casual: "Yeah, that's a big challenge with online learning. I'd say join our virtual study groups – they meet weekly on Zoom. Set small daily goals instead of trying to do everything at once. Consistency beats intensity.",
              standard: "That is one of the biggest challenges with online learning. I recommend joining our virtual study groups — they meet weekly on Zoom. Also, set small daily goals rather than trying to do everything at once. Consistency beats intensity.",
              formal: "Indeed, that is one of the most significant challenges associated with online learning. I would highly recommend participating in our virtual study groups, which convene weekly via Zoom. Furthermore, establishing modest daily objectives, rather than attempting to accomplish everything concurrently, proves more effective. Sustained effort consistently outperforms sporadic intensity.",
            },
            keyPhrases: [
              { en: "virtual study groups", zh: "虚拟学习小组" },
              { en: "consistency beats intensity", zh: "坚持胜于强度" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Super common problem. Join our weekly Zoom study group — it really helps to have people to learn with. And try studying a little every day instead of long sessions. Small steps add up.",
                textZh:
                  "非常常见的问题。加入我们每周的Zoom学习小组——有人一起学真的很有帮助。试着每天学一点而不是长时间学习。小步骤积少成多。",
                actionHint: "加入学习小组",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a way to interact with the instructor if I have questions about the material?",
            textZh: "如果我对课程内容有问题，有办法和讲师互动吗？",
            commonMistake: {
              wrong: "Is there a way to interact with the instructor if I have questions for the material?",
              correct: "Is there a way to interact with the instructor if I have questions about the material?",
              explanation: "“对……有疑问”通常用介词“about”，而非“for”。",
            },
            formalityVariants: {
              casual: "Can I talk to the instructor if I have questions about the stuff?",
              standard: "Is there a way to interact with the instructor if I have questions about the material?",
              formal: "Is there a mechanism by which I can engage with the instructor should I possess inquiries regarding the course material?",
            },
            casualVersion: "Can I talk to the teacher if I have questions?",
          },
          {
            speaker: "them",
            role: "课程顾问",
            textEn:
              "Yes! Each course has a discussion forum where you can post questions. Instructors respond within twenty-four hours. There are also optional live Q and A sessions every other week where you can ask questions in real time.",
            textZh:
              "可以！每门课程都有讨论论坛可以发问题。讲师在二十四小时内回复。每两周还有可选的直播问答环节，你可以实时提问。",
            casualVersion: "Yup! Every course has a discussion forum where you can post questions. Instructors usually respond within 24 hours. There are also optional live Q&A sessions every other week where you can ask stuff in real time.",
            commonMistake: {
              wrong: "Instructors respond in twenty-four hours.",
              correct: "Instructors respond within twenty-four hours.",
              explanation: "“in twenty-four hours”通常指二十四小时后才回复，而“within twenty-four hours”指在二十四小时内回复，更符合语境。",
            },
            formalityVariants: {
              casual: "Yeah! Each course has a discussion forum to post questions. Instructors typically respond in 24 hours. There are also optional live Q&A sessions every other week where you can ask real-time questions.",
              standard: "Yes! Each course has a discussion forum where you can post questions. Instructors respond within twenty-four hours. There are also optional live Q and A sessions every other week where you can ask questions in real time.",
              formal: "Yes, indeed! Each course is equipped with a dedicated discussion forum where you are welcome to submit your questions. Instructors typically provide responses within a twenty-four-hour timeframe. Additionally, there are optional live question-and-answer sessions held bi-weekly, affording you the opportunity to pose inquiries in real-time.",
            },
            keyPhrases: [
              { en: "discussion forum", zh: "讨论论坛" },
              { en: "live Q and A sessions", zh: "直播问答环节" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Definitely. Post in the course forum and the instructor gets back to you within a day. There are also bi-weekly live sessions where you can ask anything. You are never on your own.",
                textZh:
                  "当然可以。在课程论坛发帖，讲师一天内回复你。每两周还有直播环节你可以问任何问题。你不是一个人在学。",
                actionHint: "善用讨论论坛",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 职业培训 ====================
  {
    id: "education-vocational-training",
    category: "education",
    titleZh: "职业培训",
    titleEn: "Vocational Training",
    description: "参加职业技能培训获得认证",
    otherRole: "培训主管",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "vocational-basic",
        titleZh: "了解职业培训",
        titleEn: "Learning About Vocational Training",
        description: "咨询可用的职业培训项目",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi, I am looking for hands-on job training. I do not want to spend four years in college. What options do you have?",
            textZh: "你好，我在找动手的职业培训。我不想花四年上大学。你们有什么选项？",
            casualVersion: "Hey, I want job training, not four years of college. What do you offer?",
            commonMistake: {
              wrong: "I want hands-on job training.",
              correct: "I am looking for hands-on job training.",
              explanation: "“I am looking for...” 比 “I want...” 更委婉礼貌，表达需求更自然。",
            },
            formalityVariants: {
              casual:
                "Hey, I'm looking for hands-on job training, don't wanna do four years of college. What's available?",
              standard:
                "Hi, I am looking for hands-on job training. I do not want to spend four years in college. What options do you have?",
              formal:
                "Good morning/afternoon, I am seeking vocational training with a strong emphasis on practical skills, as I am not interested in pursuing a four-year collegiate program at this time. Could you please outline the available opportunities?",
            },
          },
          {
            speaker: "them",
            role: "培训主管",
            textEn:
              "We have several accelerated programs. Electrician training is twelve months, HVAC technician is nine months, and certified nursing assistant is just eight weeks. All include job placement assistance after you complete the program.",
            textZh:
              "我们有几个加速项目。电工培训十二个月，暖通技术员九个月，注册护理助理只需八周。全部包括完成项目后的就业安置服务。",
            keyPhrases: [
              { en: "accelerated programs", zh: "加速项目" },
              { en: "job placement assistance", zh: "就业安置服务" },
            ],
            casualVersion:
              "We've got a bunch of fast-track programs. Electrician's a year, HVAC tech is nine months, and a CNA is only eight weeks. Plus, we help you find a job once you're done.",
            commonMistake: {
              wrong: "All include help finding job after finish.",
              correct: "All include job placement assistance after you complete the program.",
              explanation: "“job placement assistance” 是专业说法，比 “help finding job” 更正式和常见。",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Smart move. We have fast-track programs: electrician is a year, HVAC tech is nine months, CNA is eight weeks. And we help you find a job when you are done. Most graduates get hired within a month.",
                textZh:
                  "聪明的选择。我们有快速通道项目：电工一年，暖通技术员九个月，CNA八周。完成后我们帮你找工作。大多数毕业生一个月内就被雇用。",
                actionHint: "选择感兴趣的方向",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "HVAC sounds interesting. What does the training involve, and do I need any background?",
            textZh: "HVAC听起来有趣。培训包括什么，需要什么背景吗？",
            casualVersion: "HVAC sounds cool. What do I learn and do I need experience?",
            commonMistake: {
              wrong: "HVAC sounds interesting. What does the training include, and do I need any experience?",
              correct: "HVAC sounds interesting. What does the training involve, and do I need any background?",
              explanation:
                "“Involve” 比 “include” 更侧重于内容和过程。“Background” 指的是所需基础，比 “experience” 更广。",
            },
            formalityVariants: {
              casual: "HVAC sounds cool. What's the training like, and do I need any experience?",
              standard: "HVAC sounds interesting. What does the training involve, and do I need any background?",
              formal:
                "The HVAC program sounds quite promising. Could you elaborate on the curriculum and any prerequisite qualifications?",
            },
          },
          {
            speaker: "them",
            role: "培训主管",
            textEn:
              "No background needed. You will learn heating, cooling, and ventilation systems — installation, maintenance, and repair. The program is half classroom and half hands-on work in our training lab with real equipment.",
            textZh:
              "不需要背景。你将学习供暖、制冷和通风系统——安装、维护和维修。项目一半是课堂教学一半是在我们培训实验室用真实设备动手操作。",
            keyPhrases: [
              { en: "installation, maintenance, and repair", zh: "安装、维护和维修" },
              { en: "real equipment", zh: "真实设备" },
            ],
            casualVersion:
              "Nope, no background needed. You'll learn all about heating, cooling, ventilation systems — installing 'em, maintaining 'em, and fixing 'em. It's half classroom, half hands-on in our lab with actual gear.",
            commonMistake: {
              wrong: "No need background. You will learn install, maintain, repair of systems.",
              correct:
                "No background needed. You will learn heating, cooling, and ventilation systems — installation, maintenance, and repair.",
              explanation:
                "“No background needed” 更自然。“installation, maintenance, and repair” 是固定搭配，表示动词的抽象名词形式。",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Zero experience required. We teach you everything about heating and cooling systems — how to install, fix, and maintain them. Half the time is in class, half is working on actual equipment in our shop.",
                textZh:
                  "零经验要求。我们教你关于供暖和制冷系统的一切——如何安装、修理和维护。一半时间在教室，一半时间在我们的车间操作真实设备。",
                actionHint: "了解课程内容",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What kind of salary can I expect after completing the program?",
            textZh: "完成项目后我可以期望什么样的薪资？",
            casualVersion: "How much can I make after finishing?",
            culturalNote: "在美国，直接询问薪资预期在求职或职业培训咨询中很常见，不被视为失礼。",
            commonMistake: {
              wrong: "How much salary can I expect after completing the program?",
              correct: "What kind of salary can I expect after completing the program?",
              explanation:
                "“What kind of salary” 询问薪资的类型或范围更自然，“How much salary” 听起来更像在问一个具体数字。",
            },
            formalityVariants: {
              casual: "So, what kinda salary can I expect once I finish?",
              standard: "What kind of salary can I expect after completing the program?",
              formal: "Could you provide an estimated salary range upon successful completion of the program?",
            },
          },
          {
            speaker: "them",
            role: "培训主管",
            textEn:
              "Entry-level HVAC technicians in this area earn around forty-five to fifty-five thousand per year. With a few years of experience, that goes up to seventy or eighty thousand. It is a field with very high demand right now.",
            textZh:
              "这个地区入门级HVAC技术员年薪大约四万五到五万五千美元。有几年经验后会涨到七万到八万。这个领域目前需求非常高。",
            keyPhrases: [
              { en: "entry-level", zh: "入门级" },
              { en: "high demand", zh: "高需求" },
            ],
            casualVersion:
              "Entry-level HVAC techs around here make like 45 to 55K a year. After a few years, that jumps to 70 or 80K. It's super in demand right now.",
            commonMistake: {
              wrong:
                "Entry-level HVAC technicians make 45-55k. With experience, it up to 70-80k. This field has high demand now.",
              correct:
                "Entry-level HVAC technicians in this area earn around forty-five to fifty-five thousand per year. With a few years of experience, that goes up to seventy or eighty thousand. It is a field with very high demand right now.",
              explanation:
                "“earn around... per year” 是常见表达。“goes up to” 更自然地表示增长。“high demand” 前加 “very” 强调程度，且 “a field with high demand” 更完整。",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Starting pay is around forty-five to fifty-five K. After a few years, you can easily make seventy to eighty. HVAC techs are in huge demand — everyone needs heating and cooling. Job security is excellent.",
                textZh:
                  "起薪大约四万五到五万五。几年后你轻松能赚七到八万。HVAC技术员需求量巨大——每个人都需要供暖和制冷。工作稳定性非常好。",
                actionHint: "了解职业前景",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "vocational-intermediate",
        titleZh: "实习和认证",
        titleEn: "Apprenticeship and Certification",
        description: "了解实习安排和行业认证",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Does the HVAC program include any real-world work experience, like an apprenticeship?",
            textZh: "HVAC项目包含任何真实工作经验吗，比如学徒制？",
            casualVersion: "Do I get any real job experience during the program? Like working on actual jobs?",
            commonMistake: {
              wrong: "Does HVAC program include real-world work experience?",
              correct: "Does the HVAC program include any real-world work experience?",
              explanation: "在疑问句中，'any' 经常用来表示“任何”或“一些”，听起来更自然。",
            },
            formalityVariants: {
              casual: "Does the HVAC program have any real-world experience, like an apprenticeship?",
              standard: "Does the HVAC program include any real-world work experience, like an apprenticeship?",
              formal:
                "Could you please inform me if the HVAC program incorporates any practical work experience, such as an apprenticeship?",
            },
          },
          {
            speaker: "them",
            role: "培训主管",
            textEn:
              "Yes! In the last three months, you do a paid apprenticeship with one of our partner companies. You work alongside experienced technicians on real service calls. Many students get hired by their apprenticeship company.",
            textZh:
              "有的！最后三个月你在我们的合作公司做带薪学徒。你和经验丰富的技术员一起处理真实的服务请求。很多学生被学徒公司直接雇用。",
            casualVersion: "Yeah! Last three months, you do a paid apprenticeship with one of our partner companies. You work alongside experienced techs on real service calls. Lots of students get hired by their apprenticeship company.",
            formalityVariants: {
              casual: "Yeah! Last three months, you get a paid apprenticeship with one of our partners. You'll work with experienced techs on actual service calls. A lot of students even get hired by their apprenticeship company.",
              standard: "Yes! In the last three months, you do a paid apprenticeship with one of our partner companies. You work alongside experienced technicians on real service calls. Many students get hired by their apprenticeship company.",
              formal: "Indeed. The final three months of the program involve a remunerated apprenticeship with one of our esteemed partner organizations. Participants collaborate directly with seasoned technicians on authentic service engagements. A significant number of our students are subsequently employed by their apprenticeship providers.",
            },
            keyPhrases: [
              { en: "paid apprenticeship", zh: "带薪学徒" },
              { en: "service calls", zh: "服务请求/上门维修" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Absolutely. The last three months are a paid apprenticeship with a local company. You go on real jobs with experienced techs. A lot of our students get job offers before they even finish.",
                textZh:
                  "当然。最后三个月是在本地公司的带薪学徒。你跟着有经验的技术员处理真实的工作。我们很多学生还没毕业就收到工作邀请了。",
                actionHint: "了解学徒安排",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What certifications will I earn? Do employers look for specific ones?",
            textZh: "我会获得什么认证？雇主看重哪些特定的认证？",
            commonMistake: {
              wrong: "What certifications I will earn?",
              correct: "What certifications will I earn?",
              explanation: "在疑问句中，助动词 (will) 通常在主语 (I) 之前。",
            },
            formalityVariants: {
              casual: "What certs do I get? Any specific ones employers care about?",
              standard: "What certifications will I earn? Do employers look for specific ones?",
              formal: "Could you please detail which certifications I would acquire upon completion? Furthermore, are there particular certifications that prospective employers prioritize?",
            },
            casualVersion: "What certs do I get? Which ones do employers care about?",
          },
          {
            speaker: "them",
            role: "培训主管",
            textEn:
              "You will earn the EPA Section 608 certification, which is required by law to handle refrigerants. You will also be prepared for the NATE certification, which is the gold standard in the industry. Both significantly boost your earning potential.",
            textZh:
              "你将获得EPA第608条认证，这是处理制冷剂的法定要求。你还将为NATE认证做好准备，这是行业的金标准。两个都能显著提高你的收入潜力。",
            casualVersion: "You'll get your EPA Section 608 cert, which you legally need to handle refrigerants. We'll also get you ready for NATE, that's like, the top cert in the industry. Both really help your earning potential.",
            formalityVariants: {
              casual: "You'll get your EPA 608 cert – it's legally required for refrigerants. And we'll prep you for NATE, which is basically the best one in the biz. Both really hike up your earning potential.",
              standard: "You will earn the EPA Section 608 certification, which is required by law to handle refrigerants. You will also be prepared for the NATE certification, which is the gold standard in the industry. Both significantly boost your earning potential.",
              formal: "You shall obtain the EPA Section 608 certification, a statutory prerequisite for handling refrigerants. Furthermore, you will be thoroughly prepared for the NATE certification examination, widely recognized as the industry benchmark. Both credentials will substantially enhance your prospective earning capacity.",
            },
            keyPhrases: [
              { en: "EPA certification", zh: "EPA认证" },
              { en: "gold standard", zh: "金标准" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Two big ones: the EPA 608, which you legally need to work with refrigerants, and NATE, which is the top industry cert. Having both makes you way more competitive and gets you higher pay.",
                textZh:
                  "两个重要的：EPA 608，处理制冷剂的法定要求，和NATE，顶级行业认证。两个都有让你更有竞争力，薪资更高。",
                actionHint: "了解认证价值",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "This sounds like a great opportunity. Can I start the program next month?",
            textZh: "这听起来是个很好的机会。我下个月可以开始吗？",
            commonMistake: {
              wrong: "I can start the program next month?",
              correct: "Can I start the program next month?",
              explanation: "在疑问句中，情态动词 (can) 通常在主语 (I) 之前。",
            },
            formalityVariants: {
              casual: "Sounds like a good deal. Can I start next month?",
              standard: "This sounds like a great opportunity. Can I start the program next month?",
              formal: "This appears to be an excellent opportunity. May I inquire about the possibility of commencing the program next month?",
            },
            casualVersion: "This sounds perfect. Can I start next month?",
          },
          {
            speaker: "them",
            role: "培训主管",
            textEn:
              "Our next cohort starts on the first Monday of next month. You just need to complete an application, pass a basic math and reading assessment, and attend an orientation session. I can get you signed up right now.",
            textZh:
              "我们下一期在下个月的第一个周一开始。你只需要完成申请、通过基本的数学和阅读评估并参加入学说明会。我现在就可以帮你报名。",
            casualVersion: "Next group starts first Monday next month. Just gotta do an application, pass a basic math and reading test, and show up for orientation. I can sign you up right now.",
            formalityVariants: {
              casual: "Next group kicks off the first Monday next month. You just gotta fill out an application, pass a quick math and reading test, and hit up an orientation. I can get you signed up, like, right now.",
              standard: "Our next cohort starts on the first Monday of next month. You just need to complete an application, pass a basic math and reading assessment, and attend an orientation session. I can get you signed up right now.",
              formal: "Our subsequent cohort is scheduled to commence on the first Monday of the forthcoming month. Prospective participants are required to complete an application, successfully pass a fundamental mathematics and reading assessment, and attend a mandatory orientation session. I am able to initiate your enrollment process immediately.",
            },
            keyPhrases: [
              { en: "cohort", zh: "批次/队列" },
              { en: "orientation session", zh: "入学说明会" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Next group starts the first Monday of next month. Just fill out the application, take a quick math and reading test, and come to orientation. Let me get you started right now.",
                textZh:
                  "下一组下个月第一个周一开始。填写申请、做一个简短的数学和阅读测试、来参加说明会。我现在就帮你开始。",
                actionHint: "立即报名",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 语言交换 ====================
  {
    id: "education-language-exchange",
    category: "education",
    titleZh: "语言交换",
    titleEn: "Language Exchange",
    description: "参加语言交换活动练习英语",
    otherRole: "语伴",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "language-exchange-basic",
        titleZh: "找语言交换伙伴",
        titleEn: "Finding a Language Partner",
        description: "在语言交换活动中找到搭档",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi! Is this the language exchange meetup? I speak Chinese and I am looking for someone to practice English with.",
            textZh: "你好！这是语言交换聚会吗？我说中文，想找人练英语。",
            casualVersion: "Hey, is this the language exchange? I speak Chinese and want to practice my English.",
            commonMistake: {
              wrong: "I can speak Chinese",
              correct: "I speak Chinese",
              explanation: '说自己的母语时直接用 "I speak..." 更自然，"can" 暗示能力或可能性。',
            },
            formalityVariants: {
              casual: "Hey, this the language exchange meetup? I speak Chinese, wanna practice English.",
              standard:
                "Hi! Is this the language exchange meetup? I speak Chinese and I am looking for someone to practice English with.",
              formal:
                "Good afternoon. I was wondering if this is the designated venue for the language exchange meetup? I am a native Chinese speaker and am hoping to find an individual to engage in English conversation practice.",
            },
          },
          {
            speaker: "them",
            role: "语伴",
            textEn:
              "Yes, welcome! I have been wanting to learn Chinese. My name is Emily. I can help you with English and you can teach me some Chinese. Want to pair up?",
            textZh: "是的，欢迎！我一直想学中文。我叫Emily。我可以帮你练英语，你可以教我一些中文。要搭档吗？",
            keyPhrases: [
              { en: "pair up", zh: "搭档/配对" },
              { en: "language exchange", zh: "语言交换" },
            ],
            casualVersion:
              "Yeah, welcome! Been wanting to learn Chinese. Name's Emily. Can help you with English, you can teach me some Chinese. Wanna team up?",
            commonMistake: {
              wrong: "Do you want partner?",
              correct: "Want to pair up?",
              explanation: '"pair up" 表达“搭档”更地道，省略主语和助动词在口语中很常见。',
            },
            formalityVariants: {
              casual:
                "Yep, welcome! Been wanting to learn Chinese. I'm Emily. I can help you with English, and you can teach me some Chinese. Wanna partner up?",
              standard:
                "Yes, welcome! I have been wanting to learn Chinese. My name is Emily. I can help you with English and you can teach me some Chinese. Want to pair up?",
              formal:
                "Indeed, welcome! I have long held an interest in learning Chinese. My name is Emily. I would be pleased to assist you with your English proficiency, and perhaps you could instruct me in Chinese. Would you be agreeable to forming a partnership?",
            },
            alternativeExpressions: [
              {
                textEn:
                  "You are in the right place! I am Emily, and I have been dying to learn Chinese. Let us team up — I help you with English, you help me with Chinese. Deal?",
                textZh: "你来对地方了！我是Emily，一直超想学中文。我们合作吧——我帮你练英语，你帮我练中文。成交？",
                actionHint: "确认搭档",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds perfect! How does this usually work? Do we just talk, or is there a structure?",
            textZh: "听起来太好了！这通常怎么进行？我们就聊天还是有结构？",
            casualVersion: "Awesome! How does this work? Do we just chat or is there a plan?",
            commonMistake: {
              wrong: "How to do this?",
              correct: "How does this usually work?",
              explanation: '"How to do this" 在英语中听起来不自然，缺少主语和助动词。',
            },
            formalityVariants: {
              casual: "Sounds perfect! How's this usually work? Just talk, or is there a structure?",
              standard: "That sounds perfect! How does this usually work? Do we just talk, or is there a structure?",
              formal:
                "That sounds entirely suitable. Could you please explain the typical operational procedure? Are we expected to engage in unstructured conversation, or is there a predetermined framework?",
            },
          },
          {
            speaker: "them",
            role: "语伴",
            textEn:
              "Usually we split the time in half. We spend thirty minutes speaking English and thirty minutes speaking Chinese. That way we both get equal practice. Want to start with English since you are here to practice?",
            textZh:
              "通常我们把时间对半分。三十分钟说英语，三十分钟说中文。这样我们都能得到平等的练习。想先从英语开始吗，因为你来就是为了练英语？",
            keyPhrases: [
              { en: "split the time", zh: "分配时间" },
              { en: "equal practice", zh: "平等的练习" },
            ],
            casualVersion:
              "Usually we split the time. Thirty minutes English, thirty Chinese. That way we both get equal practice. Wanna start with English since you're here to practice?",
            commonMistake: {
              wrong: "Because you are here to practice, want to start with English?",
              correct: "Want to start with English since you are here to practice?",
              explanation: '"since" 更自然地表达“鉴于”或“因为...的缘故”，语序也更地道。',
            },
            formalityVariants: {
              casual:
                "We usually split the time, thirty minutes English, thirty Chinese. That way we both get practice. Wanna start with English since you're here for that?",
              standard:
                "Usually we split the time in half. We spend thirty minutes speaking English and thirty minutes speaking Chinese. That way we both get equal practice. Want to start with English since you are here to practice?",
              formal:
                "Typically, we allocate the time equally, dedicating thirty minutes to English conversation and thirty minutes to Chinese conversation, ensuring mutual benefit. Would you prefer to commence with English, given your primary objective?",
            },
            alternativeExpressions: [
              {
                textEn:
                  "We go half and half — thirty minutes in your target language, thirty in mine. Fair and balanced. Shall we kick off with English first?",
                textZh: "我们各一半——三十分钟你要练的语言，三十分钟我的。公平均衡。先从英语开始好吗？",
                actionHint: "同意时间分配",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, let us start with English. Please correct me if I make mistakes. I really want to improve.",
            textZh: "好的，我们先用英语。如果我犯错请纠正我。我真的很想提高。",
            casualVersion: "Yeah, English first. Don't be afraid to correct me — I want to get better.",
            commonMistake: {
              wrong: "Correct my mistakes if I have.",
              correct: "Please correct me if I make mistakes.",
              explanation: '"correct me" 是更自然的表达，"if I make mistakes" 比 "if I have" 更完整和地道。',
            },
            formalityVariants: {
              casual: "Yeah, let's start with English. Please correct me if I mess up. Really wanna get better.",
              standard:
                "Yes, let us start with English. Please correct me if I make mistakes. I really want to improve.",
              formal:
                "Yes, I would appreciate commencing with English. I would be grateful if you could kindly offer corrections should I make any errors. My objective is significant improvement.",
            },
          },
          {
            speaker: "them",
            role: "语伴",
            textEn:
              "I will, but gently! I find that conversations work better than drills. So let us just talk naturally. What do you do for work? Tell me about yourself.",
            textZh:
              "我会的，但会温和地纠正！我发现对话比操练更有效。所以我们就自然地聊天吧。你做什么工作？跟我说说你自己。",
            keyPhrases: [
              { en: "conversations work better than drills", zh: "对话比操练更有效" },
              { en: "tell me about yourself", zh: "跟我说说你自己" },
            ],
            casualVersion:
              "Will do, but gently! Find conversations work better than drills. So let's just talk. What do you do for work? Tell me about yourself.",
            commonMistake: {
              wrong: "What is your job?",
              correct: "What do you do for work?",
              explanation: '"What do you do for work?" 是询问职业最自然和地道的表达方式。',
            },
            formalityVariants: {
              casual:
                "I will, but nicely! Conversations are better than drills, so let's just chat. What do you do? Tell me about yourself.",
              standard:
                "I will, but gently! I find that conversations work better than drills. So let us just talk naturally. What do you do for work? Tell me about yourself.",
              formal:
                "I shall, but with discretion and encouragement. My experience suggests that authentic conversation is more efficacious than structured drills. Therefore, let us engage in a natural discussion. Could you please share some details regarding your professional occupation? And perhaps tell me a little about yourself?",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Deal — I will correct the big stuff but won't interrupt too much. The best way to learn is just talking. So, tell me your story — where are you from, what brought you here?",
                textZh:
                  "说定了——大的错误我会纠正但不会打断太多。最好的学习方式就是聊天。那么，跟我说说你的故事——你来自哪里，什么原因来这里？",
                actionHint: "开始自然对话",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "language-exchange-intermediate",
        titleZh: "深入交流和学习",
        titleEn: "Deeper Conversation and Learning",
        description: "在语言交换中讨论更深入的话题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "I notice I always struggle with small talk. Like at work, people chat about the weather and sports and I never know what to say.",
            textZh: "我注意到我总是不擅长闲聊。比如在工作中，人们聊天气和体育但我从来不知道说什么。",
            casualVersion:
              "I am terrible at small talk. People at work talk about weather and sports and I just stand there.",
            formalityVariants: {
              casual:
                "Man, I always struggle with small talk. Like at work, people just chat about the weather and sports, and I never know what to say.",
              standard:
                "I notice I always struggle with small talk. Like at work, people chat about the weather and sports and I never know what to say.",
              formal:
                "I've observed that I consistently find it challenging to engage in small talk. For instance, in professional settings, colleagues often discuss topics such as the weather and sports, and I frequently find myself unsure of how to contribute to the conversation.",
            },
          },
          {
            speaker: "them",
            role: "语伴",
            textEn:
              "Small talk is tough even for native speakers! The trick is to have a few go-to phrases ready. Like for weather, you can just say something like wow, it is really cold today, and people will jump in. You do not need to be clever.",
            textZh:
              "闲聊即使对母语者也很难！诀窍是准备几个常用的句子。比如关于天气，你只需要说类似「天哪，今天真冷」之类的，人们就会接话。你不需要很机智。",
            casualVersion: "Small talk's tough even for native speakers! The trick is to have a few go-to phrases ready. Like for weather, you can just say something like 'wow, it's really cold today,' and people'll jump in. You don't gotta be clever.",
            formalityVariants: {
              casual: "Small talk's tough even for natives! Just have a few go-to phrases ready. Like for weather, just say 'wow, it's really cold today,' and people'll jump in. You don't gotta be clever.",
              standard: "Small talk is tough even for native speakers! The trick is to have a few go-to phrases ready. For example, regarding the weather, you can simply say something like 'wow, it is really cold today,' and people will join the conversation. You do not need to be clever.",
              formal: "Engaging in small talk can indeed be challenging, even for native speakers. A useful strategy is to prepare a selection of pre-formulated expressions. For instance, in discussions about the weather, one could simply remark, 'It is quite cold today,' and others will likely contribute to the conversation. There is no requirement for exceptional cleverness.",
            },
            keyPhrases: [
              { en: "go-to phrases", zh: "常用句子/口头禅" },
              { en: "jump in", zh: "加入/接话" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Honestly, small talk is awkward for everyone. The secret is keeping it simple. Comment on the weather, ask about their weekend, or mention something from the news. People just want connection, not brilliance.",
                textZh:
                  "说实话，闲聊对每个人都有点尴尬。秘诀是保持简单。评论天气、问问他们的周末、或提到新闻里的事。人们只是想连接，不需要精彩绝伦。",
                actionHint: "记住简单开场",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "What about idioms? People use expressions I have never heard and I get confused. Like someone said it is raining cats and dogs and I had no idea what they meant.",
            textZh:
              "那成语呢？人们用我从没听过的表达，我很困惑。比如有人说 it is raining cats and dogs（下猫下狗），我完全不知道什么意思。",
            formalityVariants: {
              casual: "What about idioms? People use stuff I've never heard, and I get totally lost. Like someone said 'it's raining cats and dogs,' and I had no clue what they meant.",
              standard: "What about idioms? People use expressions I have never heard and I get confused. Like someone said 'it is raining cats and dogs' and I had no idea what they meant.",
              formal: "Regarding idiomatic expressions, I frequently encounter phrases unfamiliar to me, which often leads to confusion. For example, a recent utterance, 'it is raining cats and dogs,' left me entirely without comprehension as to its intended meaning.",
            },
            casualVersion:
              "People keep using idioms I don't know. Someone said raining cats and dogs and I was so confused.",
          },
          {
            speaker: "them",
            role: "语伴",
            textEn:
              "Ha, English idioms are wild! That one just means it is raining really hard. The best approach is to ask — most people love explaining idioms. You can say something like I am not familiar with that expression, what does it mean?",
            textZh:
              "哈，英语成语确实很疯狂！那个只是意思是雨下得很大。最好的方法是直接问——大多数人喜欢解释成语。你可以说「我不熟悉那个表达，是什么意思？」",
            casualVersion: "Ha, English idioms are wild! That one just means it's raining super hard. Best way is to just ask — most people love explaining 'em. You can say something like, 'I'm not familiar with that expression, what's it mean?'",
            formalityVariants: {
              casual: "Ha, English idioms are wild! That one just means it's raining super hard. Best way is to just ask — most people love explaining 'em. You can say something like, 'I'm not familiar with that expression, what's it mean?'",
              standard: "Ha, English idioms are indeed quite unique! That particular phrase simply signifies very heavy rainfall. The most effective approach is to inquire directly — most individuals are quite willing to explain idioms. You could phrase your question as, 'I am not familiar with that expression, what does it mean?'",
              formal: "Indeed, English idiomatic expressions can be quite distinctive. The phrase you cited specifically denotes exceptionally heavy precipitation. The most advisable course of action is to politely inquire for clarification, as many individuals are pleased to elucidate such linguistic nuances. A suitable query would be, 'I am unfamiliar with that particular expression; could you please elaborate on its meaning?'",
            },
            keyPhrases: [
              { en: "raining cats and dogs", zh: "下大雨（成语）" },
              { en: "I am not familiar with that expression", zh: "我不熟悉那个表达" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "English is full of weird idioms! Just ask when you don't know one — nobody minds. Say I haven't heard that one before, what does it mean? People actually enjoy explaining them.",
                textZh:
                  "英语有很多奇怪的成语！不懂就问——没人介意。说「我以前没听过那个，什么意思？」人们其实很喜欢解释。",
                actionHint: "不懂就大方地问",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "You are right, I should just ask. Okay, your turn for Chinese! What have you been learning so far?",
            textZh: "你说得对，我应该直接问。好的，轮到你练中文了！你到目前为止学了什么？",
            formalityVariants: {
              casual: "Yeah, you're right, I should just ask. Alright, your turn for Chinese! What've you been learning so far?",
              standard: "You are right, I should just ask. Okay, your turn for Chinese! What have you been learning so far?",
              formal: "You are quite right; I should indeed simply inquire. Now, if you would be so kind as to practice your Chinese. What have you been learning to date?",
            },
            casualVersion: "Good point. Okay, your turn! What Chinese have you learned so far?",
          },
          {
            speaker: "them",
            role: "语伴",
            textEn:
              "I can say basic greetings and order food in Chinese! But tones are killing me. I keep saying the wrong tone and people look at me funny. Can you help me with the four tones?",
            textZh:
              "我可以用中文说基本问候和点菜了！但声调快把我搞死了。我总是说错声调，别人用奇怪的眼神看我。你能帮我练四个声调吗？",
            casualVersion: "I can do basic greetings and order food in Chinese! But tones are killing me. I keep using the wrong tone, and people look at me funny. Can you help me with the four tones?",
            formalityVariants: {
              casual: "I can do basic greetings and order food in Chinese! But tones are killing me. I keep using the wrong tone, and people look at me funny. Can you help me with the four tones?",
              standard: "I can say basic greetings and order food in Chinese! However, the tones are quite challenging for me. I consistently use the incorrect tone, and people often react with confusion. Could you please assist me with the four tones?",
              formal: "I am proficient in basic Chinese greetings and can successfully order food. Nevertheless, I find the tonal aspect of the language particularly difficult to master. I frequently mispronounce tones, which often leads to perplexed reactions from native speakers. Would you be willing to provide guidance on the four tones?",
            },
            keyPhrases: [
              { en: "tones are killing me", zh: "声调快把我搞死了" },
              { en: "look at me funny", zh: "用奇怪的眼神看我" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I know some basics — greetings, food words. But tones are my kryptonite! I keep mixing up ma with four different meanings. Can we work on pronunciation?",
                textZh:
                  "我知道一些基础的——问候、食物词汇。但声调是我的克星！我总是搞混ma的四个不同意思。我们能练发音吗？",
                actionHint: "帮忙练习声调",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 大学迎新 ====================
  {
    id: "education-campus-orientation",
    category: "education",
    titleZh: "大学迎新",
    titleEn: "Campus Orientation",
    description: "参加大学迎新活动，了解校园和选课",
    otherRole: "迎新志愿者",
    otherRoleIcon: "🎓",
    flows: [
      {
        id: "campus-orientation-basic",
        titleZh: "了解校园设施",
        titleEn: "Exploring Campus Facilities",
        description: "跟随迎新志愿者了解校园基本设施",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I am a new international student. This is my first day on campus and I am a bit lost. Can you help me find the library?",
            textZh: "你好，我是新来的国际学生。今天是我在校园的第一天，有点迷路了。你能帮我找到图书馆吗？",
            culturalNote: "美国校园通常非常大，迷路很正常。主动求助比一个人乱转更高效，美国人普遍乐意帮忙。",
            casualVersion: "Hey, I'm new here and totally lost. Where's the library?",
            commonMistake: {
              wrong: "I am a bit lost. Can you help me find library?",
              correct: "I am a bit lost. Can you help me find the library?",
              explanation: "特指某个图书馆时需要加定冠词 the。",
            },
            formalityVariants: {
              casual: "Hey! I'm new — where's the library at?",
              standard: "Hi, I am a new international student. Can you help me find the library?",
              formal: "Good morning, I am a new international student and I was wondering if you could kindly direct me to the library.",
            },
          },
          {
            speaker: "them",
            role: "迎新志愿者",
            textEn: "Welcome to campus! The library is right behind the Student Union — just follow this path and take a left at the fountain. Are you here for orientation?",
            textZh: "欢迎来到校园！图书馆就在学生活动中心后面——沿着这条路走，在喷泉那里左转。你是来参加迎新的吗？",
            keyPhrases: [
              { en: "Student Union", zh: "学生活动中心" },
              { en: "orientation", zh: "迎新/新生说明会" },
            ],
            casualVersion: "Hey, welcome! Library's right behind the Student Union. Follow this path, hang a left at the fountain. You here for orientation?",
            culturalNote: "Student Union 是美国大学的学生活动中心，通常有餐厅、书店、活动室，是校园社交核心。",
            formalityVariants: {
              casual: "Welcome! Library's behind the Student Union — left at the fountain. Here for orientation?",
              standard: "Welcome to campus! The library is right behind the Student Union — just follow this path and take a left at the fountain. Are you here for orientation?",
              formal: "Welcome to our campus! The library is located directly behind the Student Union building. If you follow this pathway and turn left at the fountain, you will find it. May I ask if you are here for the new student orientation?",
            },
            alternativeExpressions: [
              {
                textEn: "Hey, welcome! So the library is super easy to find — go past the Student Union, and it is the big building on your left. You coming to orientation today?",
                textZh: "嘿，欢迎！图书馆超好找——经过学生活动中心，左边那栋大楼就是。你今天来参加迎新吗？",
                actionHint: "指路并询问是否参加迎新",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I am! But I have not registered for classes yet. When does course registration open?",
            textZh: "是的！但我还没有注册课程。选课什么时候开始？",
            culturalNote: "美国大学选课（course registration）通常在网上进行，有固定的开放时间窗口，先到先得。",
            casualVersion: "Yeah! But I haven't signed up for classes yet. When's registration?",
            commonMistake: {
              wrong: "When does the choose class begin?",
              correct: "When does course registration open?",
              explanation: "选课的标准说法是 course registration，不说 choose class；用 open 表示开始。",
            },
            formalityVariants: {
              casual: "Yep! Haven't registered for classes though. When does that open?",
              standard: "Yes, I am! But I have not registered for classes yet. When does course registration open?",
              formal: "Yes, indeed. However, I have not yet completed my course registration. Could you inform me when the registration period opens?",
            },
          },
          {
            speaker: "them",
            role: "迎新志愿者",
            textEn: "Registration opens next Monday. You will need to meet with your academic advisor first — they will help you pick the right courses for your major. The advising office is in Room 201 of the Admin Building.",
            textZh: "选课下周一开始。你需要先见你的学业导师——他们会帮你选适合你专业的课。导师办公室在行政楼201室。",
            keyPhrases: [
              { en: "academic advisor", zh: "学业导师" },
              { en: "major", zh: "专业" },
            ],
            casualVersion: "Registration's next Monday. But first you gotta see your academic advisor — they'll help you pick classes for your major. Advising's in Room 201 in the Admin Building.",
            culturalNote: "Academic advisor（学业导师）是美国大学特有的角色，每个学生都有指定的导师帮助规划课程，和中国的辅导员不同。",
            formalityVariants: {
              casual: "Reg opens Monday. See your advisor first — they'll sort out your classes. Room 201, Admin Building.",
              standard: "Registration opens next Monday. You will need to meet with your academic advisor first — they will help you pick the right courses for your major. The advising office is in Room 201 of the Admin Building.",
              formal: "Course registration is scheduled to commence next Monday. Prior to registering, I would recommend meeting with your assigned academic advisor, who will assist you in selecting appropriate courses aligned with your declared major. The academic advising office is located in Room 201 of the Administration Building.",
            },
            alternativeExpressions: [
              {
                textEn: "It opens Monday! But step one is seeing your advisor. They are in the Admin Building, Room 201. They will map out your whole schedule with you.",
                textZh: "周一开始！但第一步是去见你的导师。他们在行政楼201室。他们会帮你规划整个课表。",
                actionHint: "建议先见学业导师",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. Is there a campus map I can take? I want to find the dining hall and the gym too.",
            textZh: "好的，了解了。有校园地图可以拿吗？我还想找到食堂和健身房。",
            culturalNote: "美国大学通常提供免费的校园地图，也有手机版。dining hall 是大学食堂，和中国的食堂类似但通常是自助餐形式。",
            casualVersion: "Cool. Got a campus map? I also wanna find the dining hall and gym.",
            commonMistake: {
              wrong: "Is there a campus map I can bring?",
              correct: "Is there a campus map I can take?",
              explanation: "拿走免费资料用 take，bring 是带来。",
            },
            formalityVariants: {
              casual: "Nice. Can I grab a campus map? Need to find the dining hall and gym.",
              standard: "Good to know. Is there a campus map I can take? I want to find the dining hall and the gym too.",
              formal: "Thank you for that information. Would it be possible to obtain a campus map? I would also like to locate the dining hall and the fitness center.",
            },
          },
          {
            speaker: "them",
            role: "迎新志愿者",
            textEn: "Absolutely! Here is a map. The dining hall is right here — it is open from seven AM to nine PM. And the gym is across from the science building. You get free access with your student ID.",
            textZh: "当然！这是地图。食堂在这里——早上七点到晚上九点开放。健身房在科学楼对面。凭学生证可以免费使用。",
            keyPhrases: [
              { en: "student ID", zh: "学生证" },
              { en: "free access", zh: "免费使用" },
            ],
            casualVersion: "Sure, here ya go! Dining hall's right here — open 7 to 9. Gym's across from the science building. Free with your student ID.",
            culturalNote: "美国大学的健身房通常对学生免费开放（费用包含在学费中），凭学生证进入。设施通常非常好。",
            formalityVariants: {
              casual: "Here you go! Dining hall's here, open 7 AM to 9 PM. Gym's across from science. Free with your ID.",
              standard: "Absolutely! Here is a map. The dining hall is right here — open from seven AM to nine PM. The gym is across from the science building. Free access with your student ID.",
              formal: "Certainly, here is a campus map for you. The dining hall is located here and operates from 7:00 AM to 9:00 PM. The gymnasium is situated across from the science building. Students receive complimentary access upon presentation of a valid student identification card.",
            },
            alternativeExpressions: [
              {
                textEn: "Here, take this map! I circled the dining hall for you — open 7 to 9. The gym is right by the science building, and your student ID gets you in for free.",
                textZh: "拿着这张地图！我帮你圈出了食堂——7点到9点开放。健身房就在科学楼旁边，凭学生证免费进入。",
                actionHint: "提供地图并标注关键位置",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much! One more question — where do I get my student ID?",
            textZh: "非常感谢！再问一个问题——我在哪里拿学生证？",
            culturalNote: "美国学生证（student ID）通常在校园卡办公室（card office）办理，当天就能拿到，可以兼做借书证、健身房门禁卡、甚至校内消费卡。",
            casualVersion: "Thanks a lot! Oh, where do I get my student ID?",
            commonMistake: {
              wrong: "Where can I do my student ID?",
              correct: "Where do I get my student ID?",
              explanation: "办理学生证用 get，不用 do。",
            },
            formalityVariants: {
              casual: "Thanks! Oh wait — where do I pick up my student ID?",
              standard: "Thank you so much! One more question — where do I get my student ID?",
              formal: "Thank you very much for your assistance. I have one additional question — could you direct me to where I may obtain my student identification card?",
            },
          },
          {
            speaker: "them",
            role: "迎新志愿者",
            textEn: "The Card Office is on the first floor of the Student Union. Bring your passport and your admission letter. They will take your photo and print it right away — takes about five minutes.",
            textZh: "校园卡办公室在学生活动中心一楼。带上你的护照和录取通知书。他们会给你拍照然后当场打印——大约五分钟。",
            keyPhrases: [
              { en: "Card Office", zh: "校园卡办公室" },
              { en: "admission letter", zh: "录取通知书" },
            ],
            casualVersion: "Card Office, first floor of the Student Union. Bring your passport and admission letter. They snap a pic and print it on the spot — like five minutes.",
            culturalNote: "美国大学办理学生证速度很快，当场拍照打印。中国学生记得带护照（不是身份证）作为身份证明。",
            formalityVariants: {
              casual: "Card Office, ground floor of the Student Union. Passport plus admission letter. Quick photo, printed on the spot, five min tops.",
              standard: "The Card Office is on the first floor of the Student Union. Bring your passport and your admission letter. They will take your photo and print it right away — takes about five minutes.",
              formal: "The Card Office is located on the first floor of the Student Union building. You will need to present your passport and your official letter of admission. They will photograph you and produce your card on-site — the process typically takes approximately five minutes.",
            },
            alternativeExpressions: [
              {
                textEn: "Head to the Card Office in the Student Union, first floor. Just bring your passport and admission letter. Super quick — photo and print, done in five minutes.",
                textZh: "去学生活动中心一楼的校园卡办公室。带上护照和录取通知书就行。超快——拍照打印，五分钟搞定。",
                actionHint: "说明办理流程",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "campus-orientation-intermediate",
        titleZh: "选课和学术规划",
        titleEn: "Course Registration and Academic Planning",
        description: "和导师讨论选课策略和学分要求",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I am meeting with my academic advisor today. I need help figuring out which courses to take for my first semester.",
            textZh: "你好，我今天要见我的学业导师。我需要帮助确定第一学期选哪些课。",
            culturalNote: "美国大学第一学期通常建议选 12-15 个学分（4-5门课），国际学生有最低学分要求（full-time status）以维持签证。",
            casualVersion: "Hey, I've got a meeting with my advisor. Need help picking first-semester classes.",
            commonMistake: {
              wrong: "I need help to figure out which courses to choose.",
              correct: "I need help figuring out which courses to take.",
              explanation: "help 后面接动名词 figuring out 更自然；选课用 take courses 而不是 choose courses。",
            },
            formalityVariants: {
              casual: "Hey, seeing my advisor today. Gotta figure out my first-semester classes.",
              standard: "Hi, I am meeting with my academic advisor today. I need help figuring out which courses to take for my first semester.",
              formal: "Good morning, I have a scheduled appointment with my academic advisor today. I would appreciate some guidance in determining which courses would be most appropriate for my first semester.",
            },
          },
          {
            speaker: "them",
            role: "迎新志愿者",
            textEn: "Great! A tip: do not overload your first semester. Most advisors recommend 12 to 15 credits. Also, try to knock out your general education requirements early — things like English Comp and Intro to Psych.",
            textZh: "太好了！一个建议：第一学期不要选太多。大多数导师建议12到15个学分。还有，尽早完成通识教育要求——比如英语写作和心理学导论。",
            keyPhrases: [
              { en: "general education requirements", zh: "通识教育要求" },
              { en: "knock out", zh: "完成/搞定" },
            ],
            casualVersion: "Nice! Pro tip: don't overload first semester. Stick to 12-15 credits. And try to knock out gen-ed stuff early — English Comp, Intro Psych, that kinda thing.",
            culturalNote: "General education requirements（通识教育要求/通选课）是美国大学特有的制度，所有学生不论专业都必须修一定数量的文理通识课。和中国大学的公共必修课类似但范围更广。",
            formalityVariants: {
              casual: "Pro tip: don't go crazy first semester. 12-15 credits max. Knock out gen-ed early — English Comp, Intro Psych, stuff like that.",
              standard: "Great! A tip: do not overload your first semester. Most advisors recommend 12 to 15 credits. Also, try to knock out your general education requirements early — things like English Comp and Intro to Psych.",
              formal: "Excellent! I would advise against overloading your first semester. Most academic advisors recommend enrolling in 12 to 15 credit hours. Additionally, it would be prudent to fulfill your general education requirements early in your academic career — courses such as English Composition and Introduction to Psychology.",
            },
            alternativeExpressions: [
              {
                textEn: "Good plan! My advice — keep it light the first semester, 12 to 15 credits. Get your gen-ed requirements done first. It makes life way easier later.",
                textZh: "好计划！我的建议——第一学期轻松点，12到15个学分。先把通识课搞定，以后会轻松很多。",
                actionHint: "建议选课策略",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What is the difference between a prerequisite and a corequisite? I keep seeing those terms in the course catalog.",
            textZh: "先修课和共修课有什么区别？我在课程目录里一直看到这些术语。",
            culturalNote: "Prerequisite 是先修课（必须先上完才能选某门课），corequisite 是共修课（必须同时上）。这是美国选课系统的核心概念，中国大学也有类似制度但不那么严格。",
            casualVersion: "What's the diff between prerequisite and corequisite? I see those everywhere in the course catalog.",
            commonMistake: {
              wrong: "What is different between prerequisite and corequisite?",
              correct: "What is the difference between a prerequisite and a corequisite?",
              explanation: "the difference between A and B 是固定搭配，不说 different between。",
            },
            formalityVariants: {
              casual: "So what's a prerequisite vs a corequisite? Those keep popping up in the catalog.",
              standard: "What is the difference between a prerequisite and a corequisite? I keep seeing those terms in the course catalog.",
              formal: "Could you please clarify the distinction between a prerequisite and a corequisite? I have encountered these terms repeatedly while reviewing the course catalog.",
            },
          },
          {
            speaker: "them",
            role: "迎新志愿者",
            textEn: "A prerequisite is a course you must complete before you can enroll in another one. For example, you need Calculus I before Calculus II. A corequisite is a course you have to take at the same time — like a lab section that goes with a lecture.",
            textZh: "先修课是你必须先完成才能选另一门课的课程。比如你需要先修微积分一才能选微积分二。共修课是必须同时上的课——比如和讲座课配套的实验课。",
            keyPhrases: [
              { en: "prerequisite", zh: "先修课" },
              { en: "corequisite", zh: "共修课" },
              { en: "lab section", zh: "实验课" },
            ],
            casualVersion: "Prereq means you gotta take one class before another — like Calc I before Calc II. Coreq means you take them at the same time, like a lab with a lecture.",
            culturalNote: "美国大学的 lab section 是独立的课程编号，需要单独注册，和中国的实验课安排方式不同。",
            formalityVariants: {
              casual: "Prereq = take this first. Like Calc I before Calc II. Coreq = take them together, like a lab with a lecture.",
              standard: "A prerequisite is a course you must complete before enrolling in another. A corequisite is one you take at the same time — like a lab that goes with a lecture.",
              formal: "A prerequisite refers to a course that must be successfully completed prior to enrollment in a subsequent course — for instance, Calculus I must precede Calculus II. A corequisite, on the other hand, denotes a course that must be taken concurrently, such as a laboratory section that accompanies a lecture course.",
            },
            alternativeExpressions: [
              {
                textEn: "Think of it this way: a prerequisite is something you finish first, then you can take the next class. A corequisite is two classes you take together at the same time, like a science lecture and its lab.",
                textZh: "这样理解：先修课是先完成一门才能上下一门。共修课是两门课同时上，比如科学讲座课和配套的实验课。",
                actionHint: "解释选课术语",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That makes sense. I also heard about office hours. What exactly are those?",
            textZh: "明白了。我还听说了 office hours。那到底是什么？",
            culturalNote: "Office hours 是美国大学教授每周固定的答疑时间。学生可以直接去办公室问问题、讨论论文。中国学生往往不好意思去，但美国教授非常鼓励学生来 office hours。",
            casualVersion: "Got it. Oh, what are office hours exactly? I keep hearing about them.",
            commonMistake: {
              wrong: "What is office hours?",
              correct: "What are office hours?",
              explanation: "office hours 是复数形式，动词用 are。",
            },
            formalityVariants: {
              casual: "Makes sense. Also, what are office hours? Everyone keeps mentioning them.",
              standard: "That makes sense. I also heard about office hours. What exactly are those?",
              formal: "Thank you for that clarification. I have also heard references to office hours. Could you explain precisely what those entail?",
            },
          },
          {
            speaker: "them",
            role: "迎新志愿者",
            textEn: "Office hours are times when your professors are available in their office for one-on-one help. Seriously, go to office hours! Professors love students who show up. It is the best way to get help and build relationships with your professors.",
            textZh: "Office hours 是教授在办公室里提供一对一帮助的时间。认真地说，一定要去 office hours！教授喜欢主动来的学生。这是获得帮助和与教授建立关系的最好方式。",
            keyPhrases: [
              { en: "office hours", zh: "教授答疑时间" },
              { en: "one-on-one help", zh: "一对一帮助" },
            ],
            casualVersion: "Office hours are when profs hang out in their office and you can go ask questions. Seriously, go! They love it when students show up. Best way to get help and build connections.",
            culturalNote: "美国大学的 office hours 文化非常重要。教授会因为你经常去 office hours 而记住你，将来写推荐信时更有内容可写。",
            formalityVariants: {
              casual: "It's when profs are in their office and you can just drop in. Seriously go — they love students who show up. Great way to get help and make connections.",
              standard: "Office hours are times when your professors are available in their office for one-on-one help. Seriously, go to office hours! Professors love students who show up.",
              formal: "Office hours refer to designated periods during which professors are available in their offices to provide individualized academic assistance. I strongly encourage you to attend regularly — faculty members value students who take the initiative to seek guidance, and it is an excellent opportunity to establish meaningful academic relationships.",
            },
            alternativeExpressions: [
              {
                textEn: "Each professor sets aside a few hours a week where you can just walk in and ask questions. Trust me, go! It is the number one tip for doing well — professors remember students who come to office hours.",
                textZh: "每个教授每周留出几个小时，你可以直接走进去问问题。相信我，一定要去！这是学好的第一秘诀——教授会记住来 office hours 的学生。",
                actionHint: "强调 office hours 的重要性",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That is really helpful. I was too shy to go before, but now I will definitely try. Thanks for all the tips!",
            textZh: "真的很有用。我以前太害羞不敢去，但现在一定会尝试的。谢谢你的所有建议！",
            culturalNote: "中国学生在美国大学最常见的问题之一就是不去 office hours。克服害羞主动去，是适应美国大学文化的重要一步。",
            casualVersion: "Super helpful! I was too shy before, but I'll definitely go now. Thanks for everything!",
            commonMistake: {
              wrong: "I was too shy to go before.",
              correct: "I used to be too shy to go, but now I will definitely try.",
              explanation: "用 used to be 表达过去的状态比 was 更清晰地暗示现在已改变。不过 was 在口语中也可以接受。",
            },
            formalityVariants: {
              casual: "That's awesome! I was kinda scared to go but I'll do it now. Thanks a ton!",
              standard: "That is really helpful. I was too shy to go before, but now I will definitely try. Thanks for all the tips!",
              formal: "That is immensely helpful, thank you. I must admit I was somewhat hesitant to attend previously, but I am now determined to make the effort. I sincerely appreciate all of your guidance.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 课堂讨论 ====================
  {
    id: "education-class-discussion",
    category: "education",
    titleZh: "课堂讨论",
    titleEn: "Class Discussion",
    description: "在课堂上表达观点、提出问题、参与讨论",
    otherRole: "教授",
    otherRoleIcon: "👨‍🏫",
    flows: [
      {
        id: "class-discussion-basic",
        titleZh: "课堂提问",
        titleEn: "Asking Questions in Class",
        description: "学会在课堂上礼貌地提问和请求澄清",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "教授",
            textEn: "Alright class, so to summarize: the Industrial Revolution fundamentally changed labor markets in three key ways. Any questions before we move on?",
            textZh: "好的同学们，总结一下：工业革命从三个关键方面根本性地改变了劳动力市场。在我们继续之前有什么问题吗？",
            keyPhrases: [
              { en: "to summarize", zh: "总结一下" },
              { en: "move on", zh: "继续下一个话题" },
            ],
            casualVersion: "OK so to wrap up: the Industrial Revolution changed labor markets in three big ways. Questions before we keep going?",
            culturalNote: "美国课堂非常鼓励学生提问。教授说 any questions 时是真心希望有人问，不是客套。中国学生往往觉得提问是打断老师，但美国教授觉得提问是积极参与。",
            formalityVariants: {
              casual: "So yeah, Industrial Revolution changed labor markets three big ways. Questions?",
              standard: "To summarize: the Industrial Revolution fundamentally changed labor markets in three key ways. Any questions before we move on?",
              formal: "In summary, the Industrial Revolution brought about fundamental transformations in labor markets through three principal mechanisms. Are there any questions or points of clarification before we proceed to the next topic?",
            },
            alternativeExpressions: [
              {
                textEn: "So that covers the three ways the Industrial Revolution reshaped labor. Does anyone have questions? Now is a good time to ask.",
                textZh: "这就是工业革命重塑劳动力的三种方式。有人有问题吗？现在是提问的好时机。",
                actionHint: "邀请学生提问",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Excuse me, Professor. Could you explain the second point again? I did not quite catch the connection between mechanization and wage changes.",
            textZh: "打扰一下，教授。您能再解释一下第二点吗？我没太听懂机械化和工资变化之间的联系。",
            culturalNote: "在美国课堂上，说 I didn't quite catch... 比 I don't understand 更得体。前者暗示是没听清，后者可能显得你完全跟不上。",
            casualVersion: "Sorry Professor, can you go over the second point again? I didn't quite get the connection between mechanization and wages.",
            commonMistake: {
              wrong: "Teacher, can you say the second point again?",
              correct: "Professor, could you explain the second point again?",
              explanation: "大学里称呼老师用 Professor，不用 Teacher。请求解释用 explain 比 say again 更学术。",
            },
            formalityVariants: {
              casual: "Hey Professor, could you go over that second point? I kinda lost the thread on mechanization and wages.",
              standard: "Excuse me, Professor. Could you explain the second point again? I did not quite catch the connection between mechanization and wage changes.",
              formal: "Pardon me, Professor. Would you mind elaborating on the second point? I am not entirely clear on the relationship between mechanization and the corresponding wage adjustments.",
            },
          },
          {
            speaker: "them",
            role: "教授",
            textEn: "Great question! So basically, when factories introduced machines, they needed fewer skilled workers but more unskilled laborers. That drove down wages for craftsmen but created new jobs for factory workers. Does that make more sense now?",
            textZh: "好问题！基本上，当工厂引进机器后，需要的熟练工人少了，但需要更多非熟练劳动力。这压低了工匠的工资，但为工厂工人创造了新岗位。现在更清楚了吗？",
            keyPhrases: [
              { en: "drove down wages", zh: "压低了工资" },
              { en: "does that make more sense", zh: "现在更清楚了吗" },
            ],
            casualVersion: "Good question! So when factories got machines, they needed fewer skilled people but more unskilled ones. Wages dropped for craftsmen but new factory jobs popped up. Make more sense?",
            culturalNote: "美国教授经常说 Great question 来鼓励学生提问。这不一定表示问题真的很深刻，而是一种教学鼓励策略。",
            formalityVariants: {
              casual: "Good one! Basically, machines meant fewer skilled workers, more unskilled ones. Craftsmen's wages dropped, but factory jobs appeared. Clearer now?",
              standard: "Great question! When factories introduced machines, they needed fewer skilled workers but more unskilled laborers. That drove down wages for craftsmen but created new jobs for factory workers. Does that make more sense now?",
              formal: "An excellent question. The introduction of machinery in factories reduced the demand for skilled artisans while simultaneously increasing the need for unskilled labor. This dynamic exerted downward pressure on wages for traditional craftsmen while generating new employment opportunities for factory workers. Is that distinction clearer now?",
            },
            alternativeExpressions: [
              {
                textEn: "Glad you asked! Think of it this way: machines replaced some skilled jobs but created a ton of unskilled ones. So wages shifted — down for craftsmen, up for the new factory workers. Clear?",
                textZh: "很高兴你问了！这样想：机器取代了一些技术岗位但创造了大量非技术岗位。所以工资发生了变化——工匠下降，新工厂工人上升。清楚了吗？",
                actionHint: "用更简单的方式解释",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, that is much clearer now. Thank you, Professor.",
            textZh: "是的，现在清楚多了。谢谢教授。",
            culturalNote: "回应教授解释后及时说谢谢是美国课堂礼仪的一部分，表示你认真在听。",
            casualVersion: "Yeah, got it now. Thanks, Professor!",
            commonMistake: {
              wrong: "Yes, I understand.",
              correct: "Yes, that is much clearer now. Thank you.",
              explanation: "that is much clearer now 比 I understand 更具体地表达了你从不懂到懂的过程，也对教授的解释表示肯定。",
            },
            formalityVariants: {
              casual: "Oh yeah, that makes way more sense. Thanks!",
              standard: "Yes, that is much clearer now. Thank you, Professor.",
              formal: "Yes, that clarification is most helpful. Thank you very much for taking the time to explain it, Professor.",
            },
          },
          {
            speaker: "them",
            role: "教授",
            textEn: "Anytime. And I just want to say — do not hesitate to ask questions in this class. That is how we all learn. Now, let us move on to the social impacts.",
            textZh: "随时可以问。我想说——在这门课上不要犹豫提问。这是我们大家学习的方式。现在，让我们继续讨论社会影响。",
            keyPhrases: [
              { en: "do not hesitate", zh: "不要犹豫" },
              { en: "that is how we all learn", zh: "这是我们大家学习的方式" },
            ],
            casualVersion: "Anytime! And hey, never be afraid to ask stuff in here. That's how we learn. OK, let's talk about social impacts.",
            culturalNote: "美国教授经常鼓励学生 don't hesitate to ask。这是真诚的——课堂参与（class participation）通常计入成绩。",
            formalityVariants: {
              casual: "No prob! And seriously, ask away anytime. That's the whole point. Now, social impacts!",
              standard: "Anytime. Do not hesitate to ask questions in this class. That is how we all learn. Now, let us move on to the social impacts.",
              formal: "You are most welcome. I would like to encourage all of you to feel comfortable raising questions during our sessions — active inquiry is fundamental to the learning process. Let us now proceed to examine the social ramifications.",
            },
            alternativeExpressions: [
              {
                textEn: "Of course! And that goes for everyone — questions are always welcome. Alright, let us shift gears and look at the social side of things.",
                textZh: "当然！这话对所有人都适用——随时欢迎提问。好，让我们转换话题看看社会层面的影响。",
                actionHint: "鼓励提问并转入下一话题",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Professor, I have a follow-up question. You mentioned new factory jobs — were those jobs actually better than what the craftsmen had before?",
            textZh: "教授，我有一个追问。您提到了新的工厂岗位——那些工作真的比工匠之前的工作好吗？",
            culturalNote: "follow-up question（追问）在美国课堂中很常见也很受欢迎。它表示你在深入思考，不只是被动听讲。",
            casualVersion: "Oh wait, follow-up question — were those factory jobs actually better than what craftsmen had?",
            commonMistake: {
              wrong: "I have a continue question.",
              correct: "I have a follow-up question.",
              explanation: "追问的标准说法是 follow-up question，不是 continue question。",
            },
            formalityVariants: {
              casual: "Quick follow-up — were those factory jobs actually better than what craftsmen had?",
              standard: "Professor, I have a follow-up question. Were those new factory jobs actually better than what the craftsmen had before?",
              formal: "If I may, Professor, I have a follow-up question. Were these new factory positions genuinely an improvement over the conditions previously enjoyed by skilled craftsmen?",
            },
          },
          {
            speaker: "them",
            role: "教授",
            textEn: "Excellent follow-up! That is actually a hotly debated topic. Some historians argue conditions were terrible — long hours, low pay, dangerous. Others say it was still a step up from rural poverty. We will dig into this more next week. Great participation today!",
            textZh: "很好的追问！这实际上是一个热议的话题。一些历史学家认为条件很糟糕——长时间工作、低工资、危险。另一些人说这仍然比农村贫困好一些。我们下周会更深入讨论。今天的参与很棒！",
            keyPhrases: [
              { en: "hotly debated", zh: "热议的/争论激烈的" },
              { en: "dig into", zh: "深入研究" },
            ],
            casualVersion: "Great follow-up! That's actually super debated. Some say conditions were awful — long hours, low pay, dangerous. Others say it beat rural poverty. We'll get into this next week. Nice job today!",
            culturalNote: "教授说 Great participation 是对你课堂表现的正面评价。在美国大学，课堂参与（participation）通常占最终成绩的 10-20%。",
            formalityVariants: {
              casual: "Love that question! It's actually super debated. Some say awful conditions. Others say it was better than farm life. More on this next week. Great job today!",
              standard: "Excellent follow-up! That is a hotly debated topic. Some historians argue conditions were terrible. Others say it was a step up from rural poverty. We will dig into this more next week. Great participation today!",
              formal: "An outstanding follow-up question. This is, in fact, one of the most vigorously debated topics in economic history. Some scholars contend that factory conditions were deplorable, while others maintain they represented an improvement over agrarian destitution. We shall explore this question in greater depth in our next session. Excellent participation today.",
            },
            alternativeExpressions: [
              {
                textEn: "That is the million-dollar question! Historians are split on this. We will spend a whole class on it next week. Really good thinking today — keep it up!",
                textZh: "这才是核心问题！历史学家们对此意见不一。我们下周会花一整节课讨论。今天思考得很好——继续保持！",
                actionHint: "肯定学生思考并预告下周内容",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "class-discussion-intermediate",
        titleZh: "课堂发言和辩论",
        titleEn: "Speaking Up and Debating",
        description: "在课堂讨论中表达自己的观点并回应他人",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "教授",
            textEn: "Today we are doing a discussion-based class. The topic is: should social media companies be responsible for misinformation on their platforms? I want to hear from everyone. Who wants to start?",
            textZh: "今天我们做一次讨论式的课堂。话题是：社交媒体公司是否应该为其平台上的虚假信息负责？我想听每个人的意见。谁想先说？",
            keyPhrases: [
              { en: "discussion-based class", zh: "讨论式课堂" },
              { en: "misinformation", zh: "虚假信息" },
            ],
            casualVersion: "Today's a discussion day! Topic: should social media companies be responsible for misinformation? Let's hear it — who wants to go first?",
            culturalNote: "美国大学经常有讨论式课堂（seminar style），没有标准答案，教授看重的是你能否用证据支持观点、尊重不同意见。这对习惯了标准答案的中国学生来说是一个很大的转变。",
            formalityVariants: {
              casual: "Discussion day! Should social media companies be on the hook for misinformation? Who's going first?",
              standard: "Today we are doing a discussion-based class. The topic is: should social media companies be responsible for misinformation? Who wants to start?",
              formal: "Today's session will follow a discussion-based format. Our topic for deliberation is whether social media companies should bear responsibility for misinformation disseminated on their platforms. I would like to hear perspectives from each of you. Who would like to open the discussion?",
            },
            alternativeExpressions: [
              {
                textEn: "Alright everyone, put your books away. Today is all about discussion. Here is our question: are social media companies responsible for fake news on their sites? Jump in whenever you are ready.",
                textZh: "好的各位，把书收起来。今天全是讨论。问题是：社交媒体公司是否应该为其网站上的假新闻负责？准备好了随时发言。",
                actionHint: "开启课堂讨论",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I would like to share my perspective. I think social media companies should take more responsibility, because they profit from engagement, and misinformation tends to get more clicks.",
            textZh: "我想分享一下我的看法。我认为社交媒体公司应该承担更多责任，因为它们从用户参与中获利，而虚假信息往往能获得更多点击。",
            culturalNote: "在美国课堂发言时，以 I would like to share my perspective 开头比直接说 I think 更正式得体，也给你时间组织语言。",
            casualVersion: "I think social media companies should step up, because they make money off engagement and fake stuff gets more clicks.",
            commonMistake: {
              wrong: "I think social media companies should take responsible.",
              correct: "I think social media companies should take more responsibility.",
              explanation: "take responsibility 是固定搭配，responsibility 是名词，不用形容词 responsible。",
            },
            formalityVariants: {
              casual: "I'll go. I think they should be more responsible — they make money off clicks, and fake news gets tons of clicks.",
              standard: "I would like to share my perspective. I think social media companies should take more responsibility, because they profit from engagement and misinformation tends to get more clicks.",
              formal: "If I may, I would like to offer my perspective on this matter. I believe that social media corporations ought to assume greater responsibility, given that their revenue models are predicated on user engagement, and misinformation demonstrably generates disproportionate levels of interaction.",
            },
          },
          {
            speaker: "them",
            role: "教授",
            textEn: "Good point. Can you elaborate on that? How specifically do you think they should take responsibility — through content moderation, algorithm changes, or something else?",
            textZh: "好观点。你能展开说说吗？你具体认为他们应该如何承担责任——通过内容审核、算法调整，还是其他方式？",
            keyPhrases: [
              { en: "elaborate on", zh: "展开说明" },
              { en: "content moderation", zh: "内容审核" },
            ],
            casualVersion: "Good point. Can you dig deeper? Like, how exactly — content moderation, changing the algorithm, or what?",
            culturalNote: "教授让你 elaborate（展开说明）是好事，说明你的观点有价值。这是美国课堂训练批判性思维的方式——不只要有观点，还要能具体论证。",
            formalityVariants: {
              casual: "Nice. Can you unpack that? How should they do it — moderation, algorithm tweaks, or what?",
              standard: "Good point. Can you elaborate on that? How specifically should they take responsibility — through content moderation, algorithm changes, or something else?",
              formal: "That is a well-articulated point. Would you kindly elaborate on the specific mechanisms through which you envision these companies assuming responsibility? Are you suggesting content moderation, algorithmic adjustments, or perhaps alternative approaches?",
            },
            alternativeExpressions: [
              {
                textEn: "Interesting take. But let us push deeper — what does taking responsibility actually look like in practice?",
                textZh: "有趣的观点。但让我们深入一些——在实践中，承担责任具体是什么样的？",
                actionHint: "推动深入讨论",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I think a combination of approaches would work best. First, their algorithms could be adjusted so they do not prioritize sensational content. Second, they could invest more in fact-checking partnerships. I read a study that said labeled misinformation gets shared 13% less.",
            textZh: "我认为多种方法结合效果最好。首先，可以调整算法使其不再优先推送耸人听闻的内容。其次，可以加大对事实核查合作的投入。我读过一项研究说被标注的虚假信息分享量减少了13%。",
            culturalNote: "在美国课堂讨论中引用数据或研究（I read a study that said...）非常加分。这表明你不只是说观点，还有证据支持。",
            casualVersion: "I think a mix of stuff would work. Fix the algorithms so they don't push sensational stuff, and invest in fact-checkers. I read that labeling misinformation cuts sharing by like 13%.",
            commonMistake: {
              wrong: "I read a research said that...",
              correct: "I read a study that said...",
              explanation: "a study 比 a research 更自然；research 通常不加冠词 a，或者说 a research paper / a piece of research。",
            },
            formalityVariants: {
              casual: "A mix of stuff. Fix the algorithms, invest in fact-checkers. I saw a study that says labeling fake news cuts shares by 13%.",
              standard: "I think a combination of approaches would work best. First, adjust algorithms to not prioritize sensational content. Second, invest more in fact-checking partnerships. I read a study that said labeled misinformation gets shared 13% less.",
              formal: "I would advocate for a multifaceted approach. Firstly, algorithmic modifications could be implemented to deprioritize sensational content. Secondly, these companies could substantially increase their investment in fact-checking partnerships. A recent study I encountered indicated that explicitly labeled misinformation experiences approximately a 13% reduction in sharing.",
            },
          },
          {
            speaker: "them",
            role: "教授",
            textEn: "Excellent use of evidence! Does anyone have a counterargument? Remember, in this class we practice respectful disagreement.",
            textZh: "很好地运用了证据！有人有反对意见吗？记住，在这门课上我们练习尊重地表达不同意见。",
            keyPhrases: [
              { en: "counterargument", zh: "反对意见/反驳" },
              { en: "respectful disagreement", zh: "尊重地表达不同意见" },
            ],
            casualVersion: "Nice evidence! Anyone wanna push back on this? Remember, we keep it respectful here.",
            culturalNote: "Respectful disagreement 是美国学术文化的核心。你可以完全不同意某人的观点，但要用 I see your point, but... 或 I respectfully disagree because... 这样的框架。",
            formalityVariants: {
              casual: "Great evidence! Anyone disagree? Keep it respectful though.",
              standard: "Excellent use of evidence! Does anyone have a counterargument? Remember, we practice respectful disagreement.",
              formal: "Outstanding use of empirical evidence to support your position. Are there any students who would like to offer a counterargument? As always, I encourage respectful and constructive academic discourse.",
            },
            alternativeExpressions: [
              {
                textEn: "Well supported! Now, let us hear from the other side. Who disagrees, and why? Keep it civil and evidence-based.",
                textZh: "论证得很好！现在让我们听听另一方的观点。谁不同意，为什么？保持文明和基于证据。",
                actionHint: "邀请反方观点",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Actually, I can see the other side too. Some people would argue that content moderation could easily become censorship. Where do you draw the line between misinformation and unpopular opinions?",
            textZh: "其实，我也能理解另一面。有人会说内容审核很容易变成审查。虚假信息和不受欢迎的观点之间的界限在哪里？",
            culturalNote: "在美国课堂中，能同时看到问题的两面（seeing both sides）是批判性思维的体现，教授会非常欣赏。这和中国课堂更看重标准答案的文化很不同。",
            casualVersion: "Well, I can see the other side too. Content moderation could turn into censorship pretty easily. Where's the line between misinformation and just unpopular opinions?",
            commonMistake: {
              wrong: "Where do you draw the line of misinformation and unpopular opinions?",
              correct: "Where do you draw the line between misinformation and unpopular opinions?",
              explanation: "draw the line between A and B 是固定搭配，用 between 不用 of。",
            },
            formalityVariants: {
              casual: "I mean, I get the other side too. Moderation can easily become censorship. Where do you even draw the line?",
              standard: "Actually, I can see the other side too. Content moderation could easily become censorship. Where do you draw the line between misinformation and unpopular opinions?",
              formal: "I must acknowledge that the opposing perspective also carries merit. One could reasonably argue that content moderation risks devolving into censorship. The fundamental question becomes: where precisely does one delineate between verifiable misinformation and merely unpopular or controversial opinions?",
            },
          },
          {
            speaker: "them",
            role: "教授",
            textEn: "Now that is critical thinking! You just identified the central tension of this debate. Being able to argue both sides is a valuable skill. Great contribution today — this is exactly what I want to see in class discussions.",
            textZh: "这才是批判性思维！你刚刚找到了这场辩论的核心矛盾。能为两方辩护是一项宝贵的能力。今天贡献很大——这正是我希望在课堂讨论中看到的。",
            keyPhrases: [
              { en: "critical thinking", zh: "批判性思维" },
              { en: "central tension", zh: "核心矛盾" },
            ],
            casualVersion: "Now THAT's critical thinking! You nailed the core tension. Being able to argue both sides is huge. Awesome contribution today!",
            culturalNote: "Critical thinking 是美国大学教育最核心的目标之一。教授表扬你的 critical thinking 是最高级别的课堂肯定。",
            formalityVariants: {
              casual: "That's exactly it! You found the core tension. Arguing both sides — that's the skill. Great job today!",
              standard: "Now that is critical thinking! You identified the central tension of this debate. Being able to argue both sides is a valuable skill. Great contribution today!",
              formal: "That is a superb demonstration of critical thinking. You have astutely identified the fundamental tension at the heart of this debate. The capacity to construct and evaluate arguments on both sides of an issue is an invaluable intellectual skill. Your contribution to today's discussion has been exemplary.",
            },
            alternativeExpressions: [
              {
                textEn: "Brilliant! You just did what great thinkers do — you challenged your own argument. That is intellectual honesty, and it is exactly what higher education is about. Well done.",
                textZh: "太好了！你刚刚做了伟大思想者做的事——挑战了自己的论点。这是学术诚实，也正是高等教育的意义。做得好。",
                actionHint: "高度肯定学生的批判性思维",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 小组项目 ====================
  {
    id: "education-group-project",
    category: "education",
    titleZh: "小组项目",
    titleEn: "Group Project",
    description: "和同学一起完成小组项目，讨论分工和进度",
    otherRole: "同学",
    otherRoleIcon: "👥",
    flows: [
      {
        id: "group-project-basic",
        titleZh: "分工讨论",
        titleEn: "Dividing Tasks",
        description: "小组第一次见面，讨论项目分工",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "同学",
            textEn: "Hey everyone! So we have this group project due in three weeks. It is a 15-page research paper on renewable energy policy. Should we start by dividing up the work?",
            textZh: "嘿大家！我们有一个小组项目，三周后截止。是一篇15页的关于可再生能源政策的研究论文。我们先分工好吗？",
            keyPhrases: [
              { en: "due in three weeks", zh: "三周后截止" },
              { en: "dividing up the work", zh: "分工" },
            ],
            casualVersion: "Hey guys! So this group project is due in 3 weeks — 15-page paper on renewable energy policy. Wanna split up the work?",
            culturalNote: "美国大学的小组项目（group project）非常常见。和中国学生习惯的各做各的不同，美国大学更强调团队协作和沟通。",
            formalityVariants: {
              casual: "Hey! Group project, 3 weeks, 15-page paper on renewable energy. Let's divvy it up?",
              standard: "So we have this group project due in three weeks. It is a 15-page research paper on renewable energy policy. Should we start by dividing up the work?",
              formal: "Good afternoon, everyone. Our group project — a 15-page research paper on renewable energy policy — is due in three weeks. Shall we begin by discussing the division of responsibilities?",
            },
            alternativeExpressions: [
              {
                textEn: "OK team, let us talk about this project. 15 pages on renewable energy, due in three weeks. How do we want to tackle this?",
                textZh: "好的团队，我们来谈谈这个项目。15页关于可再生能源，三周后截止。我们想怎么完成？",
                actionHint: "发起分工讨论",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds good. I am happy to take the research part. I can look into what policies different countries have implemented and compile the data.",
            textZh: "好的。我愿意负责研究部分。我可以调查不同国家实施了哪些政策，整理数据。",
            culturalNote: "在美国小组项目中主动认领任务很重要，等别人分配显得被动。用 I am happy to 或 I can take 主动领取任务。",
            casualVersion: "Cool, I'll handle the research. I can dig into what different countries are doing and pull together the data.",
            commonMistake: {
              wrong: "I can responsible for the research part.",
              correct: "I can take the research part.",
              explanation: "can 后面接动词原形 take，不能直接接形容词 responsible。或者说 I can be responsible for。",
            },
            formalityVariants: {
              casual: "I'll grab the research part. I can look into what different countries are doing.",
              standard: "I am happy to take the research part. I can look into what policies different countries have implemented and compile the data.",
              formal: "I would be pleased to assume responsibility for the research component. I can investigate the policies various nations have implemented and compile a comprehensive data set.",
            },
          },
          {
            speaker: "them",
            role: "同学",
            textEn: "Perfect! I will handle the introduction and the policy analysis section. Sarah, do you want to do the conclusion and edit the final draft? We should also set up a shared Google Doc so we can all see each other's progress.",
            textZh: "太好了！我负责引言和政策分析部分。Sarah，你来做结论和编辑最终稿怎么样？我们还应该建一个共享的 Google Doc，这样大家都能看到彼此的进度。",
            keyPhrases: [
              { en: "shared Google Doc", zh: "共享谷歌文档" },
              { en: "final draft", zh: "最终稿" },
            ],
            casualVersion: "Awesome! I'll do the intro and policy analysis. Sarah, wanna take the conclusion and final edits? Oh, and let's set up a shared Google Doc so we can track progress.",
            culturalNote: "Google Docs 是美国大学生做小组项目最常用的协作工具。实时共同编辑，比微信传文件高效得多。",
            formalityVariants: {
              casual: "Sweet! I got the intro and policy analysis. Sarah, conclusion and editing? Let's use a shared Google Doc.",
              standard: "I will handle the introduction and policy analysis. Sarah, do you want to do the conclusion and edit the final draft? Let us also set up a shared Google Doc.",
              formal: "I shall take responsibility for the introduction and the policy analysis section. Sarah, would you be willing to compose the conclusion and oversee the final editing process? I would also suggest we establish a shared collaborative document so that we may monitor one another's progress.",
            },
            alternativeExpressions: [
              {
                textEn: "Great, I will take the intro and analysis. Sarah, you good with the conclusion and editing? And let us make a Google Doc so we stay on the same page.",
                textZh: "好，我负责引言和分析。Sarah，你做结论和编辑可以吗？我们建个 Google Doc 保持同步。",
                actionHint: "分配任务并提议协作工具",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Great idea. Should we also set a deadline for our individual sections? Maybe we can have our drafts done by next Friday so we have time to review each other's work?",
            textZh: "好主意。我们也给各自的部分设个截止日期好吗？也许我们可以在下周五前完成初稿，这样有时间互相审阅？",
            culturalNote: "主动提出时间管理方案在美国小组项目中很加分。中国学生往往等别人安排时间，但主动提议显示你是可靠的队友。",
            casualVersion: "Good call. Should we set deadlines for our parts? Maybe drafts by next Friday so we can review each other's stuff?",
            commonMistake: {
              wrong: "Should we set a deadline for our each section?",
              correct: "Should we set a deadline for our individual sections?",
              explanation: "our each section 语序错误，应该说 our individual sections 或 each of our sections。",
            },
            formalityVariants: {
              casual: "Yeah! Let's set deadlines. Drafts by next Friday? That gives us time to read each other's parts.",
              standard: "Should we also set a deadline for our individual sections? Maybe drafts done by next Friday so we have time to review each other's work?",
              formal: "That is an excellent suggestion. Shall we also establish interim deadlines for each individual section? Perhaps we could aim to have our respective drafts completed by next Friday, thereby allowing sufficient time for mutual peer review.",
            },
          },
          {
            speaker: "them",
            role: "同学",
            textEn: "That works! Drafts by next Friday, then we meet the following Monday to put it all together. Should we exchange numbers so we can text about updates?",
            textZh: "可以！下周五前完成初稿，然后下下周一见面整合。我们交换号码好吗，这样可以发短信通报进度？",
            keyPhrases: [
              { en: "put it all together", zh: "整合在一起" },
              { en: "exchange numbers", zh: "交换号码" },
            ],
            casualVersion: "Works for me! Drafts Friday, meet Monday to put it together. Wanna swap numbers for updates?",
            culturalNote: "美国同学之间通常用短信（iMessage/SMS）而不是微信沟通。交换号码是常见的小组项目第一步。",
            formalityVariants: {
              casual: "Sounds good! Drafts Friday, meet Monday. Swap numbers?",
              standard: "Drafts by next Friday, then we meet Monday to put it all together. Should we exchange numbers for updates?",
              formal: "That timeline works well. Let us plan for drafts by next Friday and convene the following Monday to consolidate our work. Shall we exchange contact information to facilitate communication regarding progress updates?",
            },
            alternativeExpressions: [
              {
                textEn: "Love it. Drafts by Friday, meet up Monday to merge everything. Let us swap numbers or maybe start a group chat?",
                textZh: "太好了。周五前交初稿，周一碰面整合。我们交换号码或者建个群聊？",
                actionHint: "确认计划并建立沟通渠道",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure! I will also create the Google Doc tonight and share it with everyone. Should I set up an outline first so we know where each section goes?",
            textZh: "好的！我今晚创建 Google Doc 并分享给大家。我要不要先写个大纲，这样大家知道每个部分放哪里？",
            culturalNote: "主动做额外的事（如建文档、写大纲）在美国团队合作中很受欢迎。这不是讨好，而是展示 initiative（主动性）。",
            casualVersion: "Sure! I'll make the Google Doc tonight. Should I throw in an outline too so we know where everything goes?",
            commonMistake: {
              wrong: "I will share it to everyone.",
              correct: "I will share it with everyone.",
              explanation: "share something with someone 是固定搭配，不用 to。",
            },
            formalityVariants: {
              casual: "Yeah! I'll set up the Doc tonight and share it. Want me to add an outline?",
              standard: "I will create the Google Doc tonight and share it with everyone. Should I set up an outline first?",
              formal: "Certainly. I shall create the Google Doc this evening and share access with all group members. Would it be helpful if I were to establish a preliminary outline to delineate where each section should be placed?",
            },
          },
        ],
      },
      {
        id: "group-project-intermediate",
        titleZh: "进度跟进和问题解决",
        titleEn: "Progress Check and Problem Solving",
        description: "项目中期碰面，解决进度问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "同学",
            textEn: "Hey, so we are meeting to check on our progress. I finished the introduction but I am stuck on the policy analysis. There is a lot of conflicting data out there. How is your research section going?",
            textZh: "嘿，我们碰面看看进度。我完成了引言，但政策分析卡住了。网上有很多互相矛盾的数据。你的研究部分怎么样了？",
            keyPhrases: [
              { en: "stuck on", zh: "卡住了" },
              { en: "conflicting data", zh: "互相矛盾的数据" },
            ],
            casualVersion: "Hey, progress check time! Got the intro done but I'm stuck on the policy analysis — so much conflicting data. How's your part going?",
            culturalNote: "美国学生在小组项目中直说自己遇到了困难（I'm stuck）是正常的，不代表能力不行。及时沟通问题比到截止日期才暴露要好得多。",
            formalityVariants: {
              casual: "Yo, progress check! Intro's done, but I'm stuck on the analysis. Too much conflicting info. You?",
              standard: "We are meeting to check on progress. I finished the introduction but I am stuck on the policy analysis. How is your research section going?",
              formal: "Thank you for meeting today. I have completed the introduction; however, I am encountering some difficulty with the policy analysis section due to conflicting data sources. How has your research section been progressing?",
            },
            alternativeExpressions: [
              {
                textEn: "OK update time! My intro is done but the policy analysis is giving me trouble. The data keeps contradicting itself. Where are you at with the research?",
                textZh: "好，汇报时间！我的引言完成了但政策分析让我头疼。数据一直自相矛盾。你的研究做到哪了？",
                actionHint: "汇报进度并求助",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I actually found some great data that might help you. I have statistics from the EU, China, and the US that compare renewable energy adoption rates. Want me to send you what I have? We could also reorganize — maybe I take some of the analysis since I already have the data.",
            textZh: "我其实找到了一些很好的数据可能对你有帮助。我有欧盟、中国和美国的可再生能源采用率对比统计。要我把我的发给你吗？我们也可以重新分工——既然我已经有数据了，也许我来做部分分析。",
            culturalNote: "在美国团队合作中，主动帮助遇到困难的队友并提议调整分工是优秀队友的表现。不需要等别人开口求助。",
            casualVersion: "Oh I actually found some great data that could help! Got stats comparing EU, China, and US renewable energy adoption. Want me to share? I could also take some of the analysis since I've got the data already.",
            commonMistake: {
              wrong: "Want me to send you what I have? We could also reorganize.",
              correct: "Want me to send you what I have? We could also reorganize.",
              explanation: "这句本身没有错误。但注意 reorganize 在小组项目语境中意为重新分工，而不是重新组织文章结构。",
            },
            formalityVariants: {
              casual: "Oh, I got some great data for that! EU, China, US comparison stuff. Want it? I could also grab some of the analysis since I already have the data.",
              standard: "I found some data that might help. I have statistics comparing EU, China, and US renewable energy adoption rates. Want me to send it? I could also take some of the analysis since I already have the data.",
              formal: "As it happens, I have compiled some data that may be quite useful for your section. I have comparative statistics on renewable energy adoption rates across the EU, China, and the United States. Shall I share these materials with you? Alternatively, we could consider redistributing the workload — I could assume responsibility for a portion of the analysis, given that I already possess the relevant data.",
            },
          },
          {
            speaker: "them",
            role: "同学",
            textEn: "That would be amazing! Yeah, send it over. And honestly, if you can take the comparative analysis part, that would take a huge load off me. I can focus more on the domestic policy section instead. Teamwork, right?",
            textZh: "那太好了！发过来吧。说实话，如果你能负责比较分析部分，我的压力就小多了。我可以更专注于国内政策部分。这就是团队合作，对吧？",
            keyPhrases: [
              { en: "take a huge load off me", zh: "减轻我很大的压力" },
              { en: "teamwork", zh: "团队合作" },
            ],
            casualVersion: "That'd be awesome! Send it! If you take the comparative part, that's a huge weight off me. I'll focus on domestic policy. Teamwork!",
            culturalNote: "Take a load off me 是常用口语，意思是减轻负担。美国人在合作中很看重 teamwork 精神，互相帮助而不是各扫门前雪。",
            formalityVariants: {
              casual: "Yes please! Send it over. If you grab the comparison part, that's such a relief. I'll do domestic policy. Team effort!",
              standard: "That would be amazing! Send it over. If you can take the comparative analysis, that would take a huge load off me. I can focus on domestic policy instead.",
              formal: "That would be tremendously helpful, thank you. Please do share those materials. If you could assume the comparative analysis component, it would significantly alleviate my workload, allowing me to concentrate more thoroughly on the domestic policy section. This is precisely how effective collaboration should function.",
            },
            alternativeExpressions: [
              {
                textEn: "You are a lifesaver! Please send that data. And yes, take the comparative part — I will go deep on domestic policy. This is why group projects work!",
                textZh: "你是救星！请发那些数据过来。是的，你来做比较部分——我会深入做国内政策。这就是小组项目的意义！",
                actionHint: "感谢并确认新分工",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Absolutely. Oh, one more thing — I noticed our citation styles are not consistent. Are we using APA or MLA? We should decide now so we do not have to redo them later.",
            textZh: "没问题。哦，还有一件事——我发现我们的引用格式不统一。我们用APA还是MLA？现在决定好，省得以后重做。",
            culturalNote: "APA 和 MLA 是美国大学最常用的两种引用格式。不同学科有不同偏好：社科用 APA，人文用 MLA。中国学生容易忽视引用格式，但在美国这是论文评分的重要部分。",
            casualVersion: "Sure thing. Oh, also — our citation styles don't match. APA or MLA? Better decide now so we don't have to fix it all later.",
            commonMistake: {
              wrong: "Our quotation styles are not consistent.",
              correct: "Our citation styles are not consistent.",
              explanation: "学术引用用 citation，不用 quotation。quotation 是直接引述某人的话。",
            },
            formalityVariants: {
              casual: "For sure. Oh, quick thing — our citations are all over the place. APA or MLA? Let's pick now.",
              standard: "One more thing — I noticed our citation styles are not consistent. Are we using APA or MLA? We should decide now so we do not have to redo them later.",
              formal: "Certainly. I should also mention that I have noticed inconsistencies in our citation formatting. Should we standardize on APA or MLA format? It would be prudent to establish this now to avoid extensive reformatting at a later stage.",
            },
          },
          {
            speaker: "them",
            role: "同学",
            textEn: "Good catch! The syllabus says APA format. I will update my section. Can you also add a shared reference list at the bottom of the Google Doc? That way we do not accidentally cite the same source differently.",
            textZh: "发现得好！课程大纲说用APA格式。我会更新我的部分。你能在 Google Doc 底部加一个共享的参考文献列表吗？这样我们不会意外地以不同方式引用同一来源。",
            keyPhrases: [
              { en: "good catch", zh: "发现得好" },
              { en: "syllabus", zh: "课程大纲" },
              { en: "reference list", zh: "参考文献列表" },
            ],
            casualVersion: "Oh good catch! Syllabus says APA. I'll fix mine. Can you throw a shared reference list at the bottom of the Doc? So we don't cite the same thing differently.",
            culturalNote: "Syllabus（课程大纲）是美国大学每门课开学时发的文件，包含作业要求、评分标准、截止日期等。引用格式要求通常写在 syllabus 里。",
            formalityVariants: {
              casual: "Oh nice catch! It's APA per the syllabus. I'll fix mine. Add a shared reference list to the Doc?",
              standard: "Good catch! The syllabus says APA format. I will update my section. Can you add a shared reference list at the bottom of the Google Doc?",
              formal: "An astute observation. According to the syllabus, we are required to use APA formatting. I shall update my section accordingly. Would you be able to create a centralized reference list at the bottom of our shared document to ensure consistency in our citations?",
            },
            alternativeExpressions: [
              {
                textEn: "Nice catch! APA — it is in the syllabus. I will switch mine over. And a shared reference list is a great idea — keeps us consistent.",
                textZh: "发现得好！APA——课程大纲里有。我会把我的改过来。共享参考文献列表是个好主意——保持一致。",
                actionHint: "确认格式并完善协作",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Will do. I will set that up tonight. So to recap: drafts by Friday, meet Monday, APA format, and I am taking the comparative analysis section. Are we all on the same page?",
            textZh: "好的。我今晚设置好。总结一下：周五前完成初稿，周一碰面，APA格式，我负责比较分析部分。大家都清楚了吗？",
            culturalNote: "会议结束时做 recap（总结）是美国职场和学术中的好习惯。Are we on the same page 意思是大家都达成一致了吗。",
            casualVersion: "On it! I'll set it up tonight. So quick recap: drafts Friday, meet Monday, APA, and I've got the comparative analysis. We good?",
            commonMistake: {
              wrong: "Are we all in the same page?",
              correct: "Are we all on the same page?",
              explanation: "on the same page 是固定搭配，用 on 不用 in。",
            },
            formalityVariants: {
              casual: "Done! Setting it up tonight. Recap: drafts Friday, meet Monday, APA, I got the comparative analysis. Everyone good?",
              standard: "I will set that up tonight. So to recap: drafts by Friday, meet Monday, APA format, and I am taking the comparative analysis section. Are we all on the same page?",
              formal: "I shall arrange that this evening. To summarize our agreements: individual drafts are due by Friday, we shall reconvene on Monday, all citations will follow APA format, and I have assumed responsibility for the comparative analysis section. Are we all in agreement?",
            },
          },
        ],
      },
    ],
  },
  // ==================== 给教授写邮件 ====================
  {
    id: "education-professor-email",
    category: "education",
    titleZh: "给教授写邮件",
    titleEn: "Emailing Your Professor",
    description: "给教授发邮件请求延期或推荐信",
    otherRole: "教授",
    otherRoleIcon: "📧",
    flows: [
      {
        id: "professor-email-basic",
        titleZh: "请求作业延期",
        titleEn: "Requesting a Deadline Extension",
        description: "因突发情况需要向教授请求延期提交作业",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Subject: Request for Extension on Research Paper — [Your Name], HIST 201\n\nDear Professor Johnson,\n\nI hope this email finds you well. I am writing to request a short extension on the research paper that is due this Friday.",
            textZh: "主题：请求延期提交研究论文——[你的名字]，HIST 201\n\n尊敬的 Johnson 教授，\n\n希望您一切顺利。我写信是想请求研究论文的短期延期，论文本周五截止。",
            culturalNote: "美国大学邮件的主题行（Subject line）应该简洁明了，包含课程编号方便教授识别。用 Dear Professor + 姓氏开头。I hope this email finds you well 是标准的邮件寒暄。",
            casualVersion: "Hi Professor Johnson, I need to ask for an extension on the research paper due Friday.",
            commonMistake: {
              wrong: "Dear Teacher Johnson, I want to ask you to delay my homework.",
              correct: "Dear Professor Johnson, I am writing to request a short extension on the research paper.",
              explanation: "称呼用 Professor 不用 Teacher；请求延期用 request an extension，不用 delay my homework。",
            },
            formalityVariants: {
              casual: "Hi Professor Johnson, Quick question — any chance I could get an extension on Friday's paper?",
              standard: "Dear Professor Johnson, I hope this email finds you well. I am writing to request a short extension on the research paper due this Friday.",
              formal: "Dear Professor Johnson, I trust this message finds you in good health. I am writing to respectfully request a brief extension for the research paper currently due this Friday in HIST 201.",
            },
          },
          {
            speaker: "them",
            role: "教授",
            textEn: "Hi [Name],\n\nThank you for reaching out. Can you tell me a bit more about your situation? I generally do not grant extensions without a valid reason, but I am willing to listen. What is going on?",
            textZh: "你好 [名字]，\n\n谢谢你联系我。你能多说说你的情况吗？我一般不会没有正当理由就批准延期，但我愿意听听。怎么了？",
            keyPhrases: [
              { en: "reaching out", zh: "联系/主动沟通" },
              { en: "grant an extension", zh: "批准延期" },
            ],
            casualVersion: "Hey, thanks for emailing me. What's going on? I don't usually give extensions without a good reason, but tell me more.",
            culturalNote: "美国教授在邮件中通常比较直接。grant an extension 是批准延期的标准说法。教授问 what is going on 是给你解释的机会，不是在质问。",
            formalityVariants: {
              casual: "Hey, thanks for the heads up. What's the deal? I don't usually do extensions without a reason, but let me know.",
              standard: "Thank you for reaching out. Can you tell me more about your situation? I generally do not grant extensions without a valid reason, but I am willing to listen.",
              formal: "Thank you for bringing this to my attention. I would appreciate it if you could provide additional context regarding your circumstances. While I do not customarily grant extensions absent a compelling reason, I am certainly open to hearing your situation.",
            },
            alternativeExpressions: [
              {
                textEn: "Thanks for letting me know ahead of time. I appreciate that. What is the situation? If there is a legitimate reason, I can usually work something out.",
                textZh: "谢谢你提前告诉我。我很感激。什么情况？如果有正当理由，我通常可以想办法。",
                actionHint: "询问具体原因",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you for understanding. I have been dealing with a family emergency — my grandmother was hospitalized back in China and I have been on the phone with my family a lot this week. I have completed about 70% of the paper but need a few more days to finish the remaining sections and proofread.",
            textZh: "谢谢您的理解。我在处理一个家庭紧急情况——我的祖母在中国住院了，这周我一直在和家人通电话。论文我已经完成了大约70%，但需要再多几天来完成剩下的部分和校对。",
            culturalNote: "在美国大学，家庭紧急情况（family emergency）是请求延期最被理解的理由之一。说明你已经完成了多少表明你不是在拖延，而是确实遇到了困难。",
            casualVersion: "Thanks. It's a family emergency — my grandma was hospitalized in China and I've been on the phone with family all week. I'm about 70% done but need a few more days.",
            commonMistake: {
              wrong: "I have been dealing a family emergency.",
              correct: "I have been dealing with a family emergency.",
              explanation: "deal with 是固定搭配，不能省略 with。",
            },
            formalityVariants: {
              casual: "Thanks. My grandma was hospitalized in China, so I've been dealing with family stuff all week. I'm 70% done but need a couple more days.",
              standard: "Thank you for understanding. I have been dealing with a family emergency — my grandmother was hospitalized in China. I have completed about 70% of the paper but need a few more days.",
              formal: "I appreciate your understanding. I have been contending with a family emergency — my grandmother was recently hospitalized in China, which has required considerable communication with my family this week. I have completed approximately 70% of the paper; however, I would greatly benefit from a few additional days to complete the remaining sections and conduct thorough proofreading.",
            },
          },
          {
            speaker: "them",
            role: "教授",
            textEn: "I am sorry to hear about your grandmother. Of course, family comes first. I can give you until next Wednesday. Please submit it by 11:59 PM through the course portal. Also, if you need any other support, the Dean of Students office can help with academic accommodations.",
            textZh: "听到你祖母的事我很抱歉。当然，家庭最重要。我可以给你延期到下周三。请在晚上11:59前通过课程平台提交。另外，如果你需要其他支持，学生事务办公室可以帮你安排学业照顾。",
            keyPhrases: [
              { en: "family comes first", zh: "家庭最重要" },
              { en: "Dean of Students", zh: "学生事务主任" },
              { en: "academic accommodations", zh: "学业照顾/特殊安排" },
            ],
            casualVersion: "So sorry about your grandma. Family first, no question. You've got until next Wednesday, 11:59 PM, submit through the portal. And if you need more help, hit up the Dean of Students office.",
            culturalNote: "Dean of Students office 可以为遇到困难的学生提供正式的 academic accommodations（学业照顾），包括延期、减课等。这是美国大学的重要支持资源，中国学生往往不知道。",
            formalityVariants: {
              casual: "Sorry about your grandma. Family first! Wednesday works — submit by 11:59 PM on the portal. Also check with the Dean of Students if you need more help.",
              standard: "I am sorry to hear about your grandmother. Family comes first. I can give you until next Wednesday, 11:59 PM, through the course portal. The Dean of Students office can also help.",
              formal: "I am deeply sorry to hear about your grandmother's hospitalization. Family obligations absolutely take precedence. I am pleased to extend your deadline to next Wednesday; please submit your paper by 11:59 PM via the course portal. Additionally, I would encourage you to contact the Dean of Students office, as they can assist with further academic accommodations if needed.",
            },
            alternativeExpressions: [
              {
                textEn: "I am really sorry about your grandmother. Take the time you need — let us say next Wednesday as the new deadline. And do not forget, the Dean of Students office is there to help if things get more complicated.",
                textZh: "我真的很抱歉听到你祖母的事。你需要的时间尽管用——新截止日期定为下周三。别忘了，学生事务办公室在那里帮忙，如果情况更复杂的话。",
                actionHint: "批准延期并提供额外资源",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much, Professor Johnson. I really appreciate your flexibility. I will have it submitted by Wednesday. I hope you have a good rest of your week.\n\nBest regards,\n[Your Name]",
            textZh: "非常感谢 Johnson 教授。我真的很感激您的灵活。我会在周三前提交。祝您这周接下来顺利。\n\n此致，\n[你的名字]",
            culturalNote: "邮件结尾用 Best regards 是标准的正式结束语。Thank you 之后再用一句祝福（have a good rest of your week）显得有礼貌。不要忘记签名。",
            casualVersion: "Thanks so much, Professor! I'll get it in by Wednesday. Have a great week!",
            commonMistake: {
              wrong: "Thank you, teacher. I will hand in it by Wednesday. Bye.",
              correct: "Thank you, Professor Johnson. I will have it submitted by Wednesday. Best regards.",
              explanation: "用 Professor + 姓氏称呼；have it submitted 比 hand in it 更正式；邮件结尾用 Best regards 而非 Bye。",
            },
            formalityVariants: {
              casual: "Thanks a ton, Professor! Will get it done by Wednesday. Have a great week! — [Name]",
              standard: "Thank you so much, Professor Johnson. I will have it submitted by Wednesday. Best regards, [Name]",
              formal: "I am most grateful for your understanding and flexibility, Professor Johnson. I shall ensure the paper is submitted by Wednesday evening at the latest. I wish you a pleasant remainder of your week. With sincere gratitude, [Name]",
            },
          },
          {
            speaker: "them",
            role: "教授",
            textEn: "You are welcome. I hope your grandmother recovers soon. Take care of yourself and do not hesitate to reach out if you need anything else.",
            textZh: "不客气。希望你祖母早日康复。照顾好自己，如果需要别的什么请随时联系我。",
            keyPhrases: [
              { en: "recovers soon", zh: "早日康复" },
              { en: "do not hesitate to reach out", zh: "请随时联系" },
            ],
            casualVersion: "No problem. Hope your grandma gets better soon. Take care and let me know if you need anything.",
            culturalNote: "Do not hesitate to reach out 是美国大学邮件中非常常见的结束语，意思是有事随时联系。教授这样说是真心的。",
            formalityVariants: {
              casual: "No worries. Hope your grandma feels better! Let me know if you need anything.",
              standard: "You are welcome. I hope your grandmother recovers soon. Do not hesitate to reach out if you need anything else.",
              formal: "You are most welcome. I sincerely hope your grandmother makes a swift and full recovery. Please do not hesitate to contact me should you require any further assistance.",
            },
            alternativeExpressions: [
              {
                textEn: "Absolutely. Wishing your grandmother a speedy recovery. My door is always open if you need to talk.",
                textZh: "当然。祝你祖母早日康复。如果你需要谈谈，我的门随时为你敞开。",
                actionHint: "表示关心和持续支持",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "professor-email-intermediate",
        titleZh: "请求推荐信",
        titleEn: "Asking for a Recommendation Letter",
        description: "向教授请求研究生申请的推荐信",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Subject: Recommendation Letter Request — [Your Name], HIST 201 Fall 2025\n\nDear Professor Johnson,\n\nI hope you are doing well. I am reaching out because I am applying to graduate programs in public policy, and I was wondering if you would be willing to write me a letter of recommendation.",
            textZh: "主题：推荐信请求——[你的名字]，HIST 201 2025秋季\n\n尊敬的 Johnson 教授，\n\n希望您一切顺利。我联系您是因为我正在申请公共政策的研究生项目，想问您是否愿意为我写一封推荐信。",
            culturalNote: "请求推荐信（letter of recommendation）是美国研究生申请的必要步骤。至少提前一个月请求，邮件主题行要清晰。asking if they would be willing 比直接要求更礼貌。",
            casualVersion: "Hi Professor Johnson, I'm applying to grad school for public policy and was hoping you could write me a recommendation letter.",
            commonMistake: {
              wrong: "Can you write me a recommend letter?",
              correct: "Would you be willing to write me a letter of recommendation?",
              explanation: "recommendation letter 或 letter of recommendation 是正确说法。用 Would you be willing to 比 Can you 更礼貌。",
            },
            formalityVariants: {
              casual: "Hi Professor Johnson, I'm applying to grad programs in public policy. Would you be up for writing me a rec letter?",
              standard: "Dear Professor Johnson, I am applying to graduate programs in public policy and was wondering if you would be willing to write me a letter of recommendation.",
              formal: "Dear Professor Johnson, I trust this message finds you well. I am writing to respectfully inquire whether you would be willing to compose a letter of recommendation on my behalf, as I am currently in the process of applying to several graduate programs in public policy.",
            },
          },
          {
            speaker: "them",
            role: "教授",
            textEn: "Hi [Name],\n\nThank you for thinking of me! I remember your excellent work in my class, especially your final paper on immigration policy. I would be happy to write you a strong letter. When are the deadlines, and could you send me your resume and a list of programs you are applying to?",
            textZh: "你好 [名字]，\n\n感谢你想到我！我记得你在我课上的优秀表现，特别是关于移民政策的期末论文。我很乐意为你写一封有力的推荐信。截止日期是什么时候？能把你的简历和申请的学校名单发给我吗？",
            keyPhrases: [
              { en: "a strong letter", zh: "一封有力的推荐信" },
              { en: "resume", zh: "简历" },
            ],
            casualVersion: "Hey, thanks for asking! I remember your great work, especially that immigration policy paper. I'd love to write you a strong letter. When's the deadline? Send me your resume and program list.",
            culturalNote: "教授说 a strong letter 意味着他们会写正面的推荐信。如果教授不想写，通常会婉拒或建议找其他人。教授要求简历和申请学校列表是标准流程，方便他们针对不同项目调整推荐信内容。",
            formalityVariants: {
              casual: "Thanks for thinking of me! Loved your immigration paper. Happy to write you a rec. Send me deadlines, your resume, and the programs.",
              standard: "Thank you for thinking of me! I remember your excellent work. I would be happy to write you a strong letter. Please send me the deadlines, your resume, and a list of programs.",
              formal: "Thank you for considering me for this request. I recall your exceptional contributions to the course, particularly your insightful final paper on immigration policy. I would be delighted to provide a strong letter of recommendation. Would you kindly share the relevant deadlines, your curriculum vitae, and a comprehensive list of the programs to which you are applying?",
            },
            alternativeExpressions: [
              {
                textEn: "Of course! Your work stood out in my class. I would be glad to write a recommendation. To write the best letter possible, could you send me your CV, your personal statement, and the list of programs with their deadlines?",
                textZh: "当然！你在我课上的表现很突出。我很乐意写推荐信。为了写出最好的推荐信，能把你的简历、个人陈述和带截止日期的学校名单发给我吗？",
                actionHint: "同意写推荐信并要求材料",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much! The earliest deadline is January 15th for Columbia. I have attached my resume and a list of five programs I am applying to. I also included a short summary of why I am interested in public policy, in case that helps.",
            textZh: "非常感谢！最早的截止日期是1月15日，哥伦比亚大学。我附上了简历和申请的五个项目清单。我还附了一个简短的个人动机说明，希望能有帮助。",
            culturalNote: "提前准备好所有材料一次发给教授是最专业的做法。附上个人动机说明（personal statement summary）可以帮助教授写出更有针对性的推荐信。",
            casualVersion: "Awesome, thanks! Earliest deadline is Jan 15 for Columbia. I've attached my resume, the program list, and a little summary of why I want to study public policy.",
            commonMistake: {
              wrong: "I have attached my resume and a list of five programs I applied.",
              correct: "I have attached my resume and a list of five programs I am applying to.",
              explanation: "正在进行的申请用现在进行时 am applying to；applied 表示已经申请完了。",
            },
            formalityVariants: {
              casual: "Thanks! Earliest deadline: Jan 15 for Columbia. Attached my resume, program list, and a quick summary of my interest in public policy.",
              standard: "Thank you so much! The earliest deadline is January 15th for Columbia. I have attached my resume and a list of five programs I am applying to, along with a brief summary of my interest in public policy.",
              formal: "I am most grateful for your willingness to assist. The earliest submission deadline is January 15th for Columbia University. I have taken the liberty of attaching my curriculum vitae, a comprehensive list of the five programs to which I am applying, and a concise summary of my motivations for pursuing a career in public policy, which I hope may be of use in crafting the letter.",
            },
          },
          {
            speaker: "them",
            role: "教授",
            textEn: "This is very helpful — thank you for being so organized. One question: should I highlight your research skills, your analytical writing, or both? Also, do any of these programs have specific forms I need to fill out, or do they all accept a general letter?",
            textZh: "这非常有帮助——感谢你这么有条理。一个问题：我应该重点突出你的研究能力、分析写作能力，还是两者都要？另外，这些项目有需要我填的专用表格吗，还是都接受通用推荐信？",
            keyPhrases: [
              { en: "research skills", zh: "研究能力" },
              { en: "analytical writing", zh: "分析写作" },
              { en: "general letter", zh: "通用推荐信" },
            ],
            casualVersion: "Super helpful, thanks! Quick question: should I focus on your research skills, your writing, or both? And do any programs need special forms, or is one letter good for all?",
            culturalNote: "美国的推荐信系统很认真，教授会根据你申请的具体方向调整推荐信内容。有些学校有专用推荐表格，有些接受通用信。提前告知教授这些细节很重要。",
            formalityVariants: {
              casual: "Love how organized you are! Should I focus on research, writing, or both? And do any schools need me to fill out forms, or is a general letter fine?",
              standard: "This is very helpful. Should I highlight your research skills, analytical writing, or both? Also, do any programs have specific forms, or do they all accept a general letter?",
              formal: "Your thoroughness is most appreciated. I have one inquiry: would you prefer that I emphasize your research capabilities, your analytical writing proficiency, or both? Additionally, do any of these programs require institution-specific recommendation forms, or will a general letter of recommendation suffice for all applications?",
            },
            alternativeExpressions: [
              {
                textEn: "Perfect, this makes my job much easier. Quick thing: what do you want me to emphasize — research, writing, both? And are there any special forms or is a letter fine?",
                textZh: "完美，这让我的工作轻松多了。一个小问题：你希望我强调什么——研究、写作，还是两者都要？有专用表格还是推荐信就行？",
                actionHint: "确认推荐信重点",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I think emphasizing both would be great, especially my ability to connect historical research with current policy debates. Three programs use a general letter upload, and two have online forms — I will send you the links separately. Thank you again for doing this.",
            textZh: "我觉得两者都强调很好，特别是我将历史研究与当前政策辩论联系起来的能力。三个项目用通用推荐信上传，两个有在线表格——我会单独发链接给您。再次感谢。",
            culturalNote: "能明确表达自己希望教授强调哪些方面是一种成熟的沟通方式。中国学生往往觉得不好意思告诉教授写什么，但在美国这是正常且受欢迎的。",
            casualVersion: "Both would be great! Especially how I connect historical research to current policy stuff. Three schools take a general letter, two have online forms — I'll send links separately. Thanks so much!",
            commonMistake: {
              wrong: "I will send you the links separately. Thank you again for doing this.",
              correct: "I will send you the links separately. Thank you again for doing this.",
              explanation: "这句没有语法错误。注意 separately 意为单独地/另外地，这里指另外发一封邮件附上链接。",
            },
            formalityVariants: {
              casual: "Both! Especially connecting history research to real policy debates. Three take a letter upload, two have forms — I'll send those links soon. Thanks!!",
              standard: "I think emphasizing both would be great, especially my ability to connect historical research with current policy debates. I will send the form links separately. Thank you again.",
              formal: "I believe highlighting both dimensions would be most advantageous, with particular emphasis on my capacity to bridge historical research with contemporary policy discourse. Three of the programs accept a general letter upload, while two utilize online recommendation forms — I shall forward the respective links in a separate correspondence. I am deeply grateful for your support.",
            },
          },
          {
            speaker: "them",
            role: "教授",
            textEn: "Sounds like a plan. I will aim to have everything done by January 10th so you do not have to worry as the deadline approaches. Good luck with your applications — I think you have a strong profile for public policy programs.",
            textZh: "就这么定了。我会争取在1月10日前完成所有的，这样截止日期临近时你就不用担心了。祝你申请顺利——我觉得你的背景很适合公共政策项目。",
            keyPhrases: [
              { en: "strong profile", zh: "有竞争力的背景" },
              { en: "aim to", zh: "争取/力争" },
            ],
            casualVersion: "Sounds good! I'll try to get it all done by Jan 10 so you're not stressing near the deadline. Good luck — you've got a great profile for this!",
            culturalNote: "教授说你有 a strong profile 是很高的评价。美国研究生申请中，教授的推荐信比标准化考试成绩更重要。和教授保持良好关系是留学的关键。",
            formalityVariants: {
              casual: "Plan set! I'll get it done by Jan 10. Good luck — you've totally got this!",
              standard: "I will aim to have everything done by January 10th. Good luck with your applications — I think you have a strong profile.",
              formal: "I shall endeavor to complete all materials by January 10th to ensure you are well within the deadline. I wish you the very best of luck with your applications. Based on my experience, I believe you present a highly competitive profile for graduate programs in public policy.",
            },
            alternativeExpressions: [
              {
                textEn: "Consider it done. I will submit everything by January 10th. You are going to do great — your combination of research skills and real-world analysis is exactly what these programs want.",
                textZh: "包在我身上。我会在1月10日前提交所有材料。你会很成功的——你的研究能力和现实世界分析的结合正是这些项目想要的。",
                actionHint: "确认时间并鼓励学生",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 留学生办公室 ====================
  {
    id: "education-international-office",
    category: "education",
    titleZh: "留学生办公室",
    titleEn: "International Student Office",
    description: "去留学生办公室咨询签证、CPT/OPT等问题",
    otherRole: "国际学生顾问",
    otherRoleIcon: "🌐",
    flows: [
      {
        id: "international-office-basic",
        titleZh: "签证和身份问题",
        titleEn: "Visa and Status Questions",
        description: "咨询 F-1 签证身份维持和相关规定",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I am an F-1 student and I have some questions about maintaining my visa status. I want to make sure I am not accidentally violating any rules.",
            textZh: "你好，我是 F-1 学生，有一些关于维持签证身份的问题。我想确保我没有不小心违反任何规定。",
            culturalNote: "F-1 是美国最常见的学生签证类型。维持身份（maintaining status）非常重要——一旦失去身份，后果很严重。国际学生办公室（ISO/ISSO）是你最重要的资源。",
            casualVersion: "Hey, I'm on an F-1 visa and have some questions about keeping my status. Don't wanna break any rules by accident.",
            commonMistake: {
              wrong: "I want to make sure I am not accident violating any rules.",
              correct: "I want to make sure I am not accidentally violating any rules.",
              explanation: "accidentally 是副词修饰动词 violating，不能用名词 accident。",
            },
            formalityVariants: {
              casual: "Hey, I'm an F-1 student with some visa questions. Wanna make sure I'm not breaking any rules without knowing.",
              standard: "Hi, I am an F-1 student and I have questions about maintaining my visa status. I want to make sure I am not accidentally violating any rules.",
              formal: "Good morning, I am currently enrolled as an F-1 student and I would appreciate some guidance regarding the maintenance of my visa status. I wish to ensure full compliance with all applicable regulations.",
            },
          },
          {
            speaker: "them",
            role: "国际学生顾问",
            textEn: "Of course, that is what we are here for! The most important rule is the full-time enrollment requirement. As an F-1 student, you must be enrolled in at least 12 credit hours per semester. Are you currently meeting that?",
            textZh: "当然，这就是我们在这里的目的！最重要的规定是全日制注册要求。作为 F-1 学生，你每学期必须注册至少12个学分。你目前满足这个要求吗？",
            keyPhrases: [
              { en: "full-time enrollment", zh: "全日制注册" },
              { en: "12 credit hours", zh: "12个学分" },
            ],
            casualVersion: "That's exactly why we're here! Number one rule: full-time enrollment. F-1 means 12 credits minimum per semester. Are you hitting that?",
            culturalNote: "F-1 学生必须保持全日制身份（full-time status），本科生通常是每学期至少 12 学分，研究生至少 9 学分。低于这个数可能导致失去签证身份。",
            formalityVariants: {
              casual: "That's what we're here for! Big rule: 12 credits minimum per semester for F-1. You good on that?",
              standard: "Of course! The most important rule is full-time enrollment — at least 12 credit hours per semester. Are you currently meeting that requirement?",
              formal: "Certainly, assisting students with these matters is precisely our purpose. The paramount requirement for F-1 students is the maintenance of full-time enrollment, which for undergraduate students means registration in no fewer than 12 credit hours per semester. May I inquire whether you are currently in compliance with this requirement?",
            },
            alternativeExpressions: [
              {
                textEn: "Absolutely, happy to help! First things first — are you taking at least 12 credits this semester? That is the number one thing for F-1 students.",
                textZh: "当然，很高兴帮忙！首先——你这学期选了至少12个学分吗？这是 F-1 学生最重要的事。",
                actionHint: "确认全日制注册状态",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I am taking 15 credits this semester. But I am thinking about dropping one class — that would put me at 12. Is that still OK?",
            textZh: "是的，我这学期选了15个学分。但我在考虑退一门课——那样会变成12个学分。那还行吗？",
            culturalNote: "在美国大学，学期中途退课（drop a class）是可以的，但 F-1 学生必须确保退课后仍然保持全日制身份。通常需要先咨询国际学生办公室。",
            casualVersion: "Yeah, I'm at 15 credits. But I wanna drop a class, which would put me at 12. Is that still fine?",
            commonMistake: {
              wrong: "I am thinking about quit one class.",
              correct: "I am thinking about dropping one class.",
              explanation: "退课用 drop a class，不用 quit。thinking about 后面接动名词 dropping。",
            },
            formalityVariants: {
              casual: "Yep, 15 credits. Thinking about dropping one though, which puts me at 12. Still OK?",
              standard: "Yes, I am taking 15 credits. But I am thinking about dropping one class, which would put me at 12. Is that still OK?",
              formal: "Yes, I am currently enrolled in 15 credit hours. However, I am considering withdrawing from one course, which would reduce my credit load to 12 hours. Would that still satisfy the full-time enrollment requirement?",
            },
          },
          {
            speaker: "them",
            role: "国际学生顾问",
            textEn: "Twelve is the minimum, so you would still be fine. But come talk to us before you officially drop it — we need to note it in your SEVIS record. Also, check with your advisor to make sure it does not affect your graduation timeline.",
            textZh: "12个是最低要求，所以你还是可以的。但正式退课前来找我们——我们需要在你的 SEVIS 记录中注明。另外，和你的导师确认一下，确保不影响毕业时间。",
            keyPhrases: [
              { en: "SEVIS record", zh: "SEVIS 记录（学生签证追踪系统）" },
              { en: "graduation timeline", zh: "毕业时间表" },
            ],
            casualVersion: "12's the minimum, so you'd be fine. But come see us before you actually drop it — we gotta update your SEVIS. And check with your advisor that it won't mess up your graduation plan.",
            culturalNote: "SEVIS（Student and Exchange Visitor Information System）是美国政府追踪国际学生的系统。任何课程变动都可能需要更新 SEVIS 记录。不更新可能导致签证问题。",
            formalityVariants: {
              casual: "12's the cutoff, so you're good. But come by before you drop it — SEVIS needs updating. Also check with your advisor about graduation timing.",
              standard: "Twelve is the minimum, so you would still be fine. But come talk to us before you officially drop it — we need to note it in your SEVIS record. Also, check with your advisor about your graduation timeline.",
              formal: "Twelve credit hours constitutes the minimum threshold, so you would remain in compliance. However, I must request that you consult with our office prior to officially withdrawing from the course, as we are required to document the change in your SEVIS record. I would also recommend verifying with your academic advisor that this adjustment does not adversely impact your anticipated graduation timeline.",
            },
            alternativeExpressions: [
              {
                textEn: "You would still be at the minimum, so that is fine. Just do not drop it without checking with us first — SEVIS updates are mandatory. And loop in your advisor to make sure your graduation stays on track.",
                textZh: "你仍然达到最低要求，所以没问题。只是别在没跟我们确认的情况下退课——SEVIS 更新是强制的。还要告知你的导师，确保毕业不受影响。",
                actionHint: "确认可以退课但需要先来办公室",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. I also wanted to ask about working. Can I get a part-time job on campus?",
            textZh: "明白了。我还想问一下工作的事。我能在校园里做兼职吗？",
            culturalNote: "F-1 学生可以在校园内工作（on-campus employment），每周不超过 20 小时（学期中）。校外工作则需要特殊授权（CPT 或 OPT）。",
            casualVersion: "OK, got it. Also, can I get a part-time job on campus?",
            commonMistake: {
              wrong: "Can I find a part-time work on campus?",
              correct: "Can I get a part-time job on campus?",
              explanation: "a part-time job 是可数名词，需要加 a 和 job。work 在这里作不可数名词不能加 a。",
            },
            formalityVariants: {
              casual: "Cool. Oh, also — can I work on campus? Like a part-time thing?",
              standard: "Got it. I also wanted to ask about working. Can I get a part-time job on campus?",
              formal: "Understood, thank you. I also have a question regarding employment. Am I permitted to obtain part-time employment on campus under my F-1 status?",
            },
          },
          {
            speaker: "them",
            role: "国际学生顾问",
            textEn: "Yes! F-1 students can work on campus up to 20 hours per week during the semester. You do not need special authorization for on-campus jobs. Check with the career center — they post campus job listings. For off-campus work, you would need CPT or OPT authorization, which is a different process.",
            textZh: "可以！F-1 学生学期中可以在校园工作，每周不超过20小时。校内工作不需要特殊授权。去就业中心看看——他们会发布校内工作列表。校外工作的话，你需要 CPT 或 OPT 授权，那是另一个流程。",
            keyPhrases: [
              { en: "CPT", zh: "课程实习训练（Curricular Practical Training）" },
              { en: "OPT", zh: "可选实习训练（Optional Practical Training）" },
              { en: "career center", zh: "就业中心" },
            ],
            casualVersion: "Yep! On campus, up to 20 hours a week during the semester. No extra paperwork needed. Check the career center for job postings. Off-campus is different — you'd need CPT or OPT, which is a whole other thing.",
            culturalNote: "CPT 是学期中的校外实习（需要和专业相关），OPT 是毕业后的工作许可（通常12个月，STEM 专业可延长至36个月）。这两个是留美工作最重要的签证授权。",
            formalityVariants: {
              casual: "Yeah, 20 hours/week on campus, no extra auth needed. Career center has listings. Off-campus needs CPT or OPT — come talk to us about that.",
              standard: "Yes! F-1 students can work on campus up to 20 hours per week. No special authorization needed. For off-campus work, you would need CPT or OPT authorization.",
              formal: "Indeed, F-1 students are authorized to engage in on-campus employment for up to 20 hours per week during the academic semester, without the need for additional authorization. I would recommend consulting the career center, which maintains current campus employment listings. For any off-campus employment, you would require either Curricular Practical Training or Optional Practical Training authorization, which involves a separate application process through our office.",
            },
            alternativeExpressions: [
              {
                textEn: "Absolutely. On-campus work is the easiest option — up to 20 hours, no extra forms. The career center website has openings. Now, if you want to work off campus, that requires CPT while you are studying or OPT after graduation. Come see us when you are ready for that.",
                textZh: "当然。校内工作是最简单的选择——最多20小时，不需要额外表格。就业中心网站有招聘信息。如果你想在校外工作，在学期间需要 CPT，毕业后用 OPT。准备好了来找我们。",
                actionHint: "解释工作授权类型",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "international-office-intermediate",
        titleZh: "OPT 申请咨询",
        titleEn: "OPT Application Consultation",
        description: "咨询毕业后 OPT 工作许可的申请流程",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I am graduating in May and I want to apply for OPT. I am a computer science major, so I think I qualify for the STEM extension too. Can you walk me through the process?",
            textZh: "你好，我五月毕业，想申请 OPT。我是计算机科学专业，我想我也有资格申请 STEM 延期。你能带我了解一下流程吗？",
            culturalNote: "OPT 允许毕业后在美国工作12个月。STEM 专业学生可以额外延期24个月（共36个月）。申请时间窗口很紧，必须提前规划。",
            casualVersion: "Hey, I'm graduating in May and want to get OPT going. I'm CS, so I should qualify for the STEM extension. Can you walk me through it?",
            commonMistake: {
              wrong: "Can you help me to understand the process?",
              correct: "Can you walk me through the process?",
              explanation: "walk me through 是更地道的说法，意思是逐步带我了解。比 help me to understand 更具体。",
            },
            formalityVariants: {
              casual: "Hey! Graduating in May, CS major, need OPT plus STEM extension. How does this work?",
              standard: "I am graduating in May and want to apply for OPT. I am a computer science major, so I think I qualify for the STEM extension. Can you walk me through the process?",
              formal: "Good afternoon. I am scheduled to graduate in May and I would like to apply for Optional Practical Training. As a computer science major, I believe I may also be eligible for the STEM extension. Would you be kind enough to guide me through the application process?",
            },
          },
          {
            speaker: "them",
            role: "国际学生顾问",
            textEn: "Great timing — you should apply for OPT no earlier than 90 days before graduation and no later than 60 days after. Here is the timeline: first, request a new I-20 from us with an OPT recommendation. Then, file Form I-765 with USCIS along with the filing fee. Processing takes about two to three months right now.",
            textZh: "时间正好——OPT 申请最早在毕业前90天，最晚在毕业后60天。流程是这样的：首先，向我们申请一份带有 OPT 推荐的新 I-20。然后，向移民局提交 I-765 表和申请费。目前处理时间大约两到三个月。",
            keyPhrases: [
              { en: "I-20", zh: "I-20 表（入学证明文件）" },
              { en: "I-765", zh: "I-765 表（工作许可申请）" },
              { en: "USCIS", zh: "美国移民局" },
            ],
            casualVersion: "Good timing! So, apply no earlier than 90 days before and no later than 60 days after graduation. Step one: get a new I-20 from us. Step two: file the I-765 with USCIS plus the fee. Takes about 2-3 months to process.",
            culturalNote: "I-20 是美国大学发给国际学生的入学/身份证明文件，非常重要。I-765 是向移民局申请工作许可（EAD 卡）的表格。这些截止日期是硬性的，错过就失去申请资格。",
            formalityVariants: {
              casual: "Perfect timing! 90 days before to 60 days after graduation. Get a new I-20 from us, file the I-765 with USCIS, pay the fee. Processing's about 2-3 months.",
              standard: "You should apply no earlier than 90 days before and no later than 60 days after graduation. Request a new I-20 from us, then file Form I-765 with USCIS. Processing takes about two to three months.",
              formal: "Your timing is indeed appropriate. The application window for OPT opens 90 days prior to your anticipated graduation date and closes 60 days following it. The process involves two primary steps: first, you must request an updated I-20 document from our office bearing an OPT recommendation; subsequently, you must submit Form I-765 to United States Citizenship and Immigration Services, accompanied by the requisite filing fee. Current processing times are approximately two to three months.",
            },
            alternativeExpressions: [
              {
                textEn: "You are in the sweet spot! The window is 90 days before to 60 days after graduation. Come to us first for the I-20, then send your I-765 and fee to USCIS. Right now it is taking about 2-3 months to get the EAD card back.",
                textZh: "你的时间正好！申请窗口是毕业前90天到毕业后60天。先来找我们拿 I-20，然后把 I-765 和费用寄给移民局。目前拿回 EAD 卡大概需要2-3个月。",
                actionHint: "说明 OPT 申请流程",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What documents do I need to prepare for the I-765 application? And is there anything that international students commonly mess up?",
            textZh: "I-765 申请需要准备哪些文件？还有，国际学生常犯的错误有哪些？",
            culturalNote: "主动问 common mistakes 是很明智的。OPT 申请被拒或延迟最常见的原因是文件不全、照片不合规、或者错过申请窗口。",
            casualVersion: "What documents do I need for the I-765? And what do international students usually mess up?",
            commonMistake: {
              wrong: "What documents I need to prepare?",
              correct: "What documents do I need to prepare?",
              explanation: "英语疑问句需要助动词 do，不能省略。",
            },
            formalityVariants: {
              casual: "What do I need for the I-765? And what do people usually screw up?",
              standard: "What documents do I need for the I-765? And is there anything students commonly mess up?",
              formal: "Could you provide a comprehensive list of the documents required for the I-765 application? Additionally, are there any common errors or pitfalls that international students frequently encounter during this process?",
            },
          },
          {
            speaker: "them",
            role: "国际学生顾问",
            textEn: "You will need your I-20 with OPT recommendation, two passport-style photos, a copy of your passport and visa, your I-94 record, and the filing fee — currently $410. The biggest mistakes? Sending the wrong photo size, forgetting to sign the I-20, and missing the mailing deadline. I always tell students: do not wait until the last week.",
            textZh: "你需要带有 OPT 推荐的 I-20、两张护照照片、护照和签证复印件、I-94 记录，以及申请费——目前是410美元。最常见的错误？照片尺寸不对、忘记在 I-20 上签名、错过邮寄截止日期。我总是告诉学生：不要等到最后一周。",
            keyPhrases: [
              { en: "I-94 record", zh: "I-94 出入境记录" },
              { en: "filing fee", zh: "申请费" },
            ],
            casualVersion: "You need the I-20 with OPT on it, two passport photos, copies of passport and visa, your I-94, and the $410 fee. Common mess-ups: wrong photo size, not signing the I-20, and procrastinating until the deadline. Don't wait!",
            culturalNote: "I-94 是你入境美国时的电子出入境记录，可以在 CBP 网站上打印。很多中国学生不知道需要这个文件。申请费不能用个人支票（需要银行支票或汇票）。",
            formalityVariants: {
              casual: "I-20, two photos, passport/visa copies, I-94, and $410. People mess up the photo size, forget to sign the I-20, or miss the deadline. Don't procrastinate!",
              standard: "You need the I-20 with OPT recommendation, two passport photos, passport and visa copies, I-94 record, and $410 filing fee. Common mistakes are wrong photo size, unsigned I-20, and missed deadlines.",
              formal: "The required documentation includes your I-20 bearing the OPT recommendation, two regulation passport-style photographs, photocopies of your passport and visa, your I-94 arrival/departure record, and the current filing fee of $410. The most frequently observed errors include submitting photographs of incorrect dimensions, neglecting to sign the I-20 document, and failing to submit the application within the prescribed timeframe. I would strongly counsel against deferring preparation until the final week.",
            },
            alternativeExpressions: [
              {
                textEn: "Here is your checklist: I-20, two photos, passport, visa, I-94, and $410. Top three mistakes I see every year: wrong photo specs, missing signature on I-20, and waiting until the absolute last minute. Start early!",
                textZh: "这是你的清单：I-20、两张照片、护照、签证、I-94，和410美元。我每年看到的前三个错误：照片规格不对、I-20 漏签名、拖到最后一刻。尽早开始！",
                actionHint: "列出文件清单和常见错误",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you, that is very clear. One last question — for the STEM extension, do I apply for that now or after my initial OPT period is ending?",
            textZh: "谢谢，非常清楚。最后一个问题——STEM 延期是现在申请还是在初始 OPT 期限快到的时候申请？",
            culturalNote: "STEM OPT extension 是在初始12个月 OPT 快到期时才申请，不是一开始就申请。时间窗口同样很紧。",
            casualVersion: "Thanks, super clear! Last thing — STEM extension: do I do that now or when my first OPT is almost up?",
            commonMistake: {
              wrong: "Do I apply it now or after my OPT ends?",
              correct: "Do I apply for that now or after my initial OPT period is ending?",
              explanation: "apply for something 是固定搭配，需要 for；用 initial OPT period 更具体。",
            },
            formalityVariants: {
              casual: "Thanks! Quick last one — STEM extension: now or later when my OPT is running out?",
              standard: "One last question — for the STEM extension, do I apply now or when my initial OPT period is ending?",
              formal: "Thank you for that thorough explanation. I have one final inquiry: regarding the STEM extension, should I submit that application concurrently, or is it to be filed as my initial OPT authorization period approaches its conclusion?",
            },
          },
          {
            speaker: "them",
            role: "国际学生顾问",
            textEn: "The STEM extension is a separate application. You apply for it during the last 90 days of your initial 12-month OPT. You must have a job at an E-Verify employer at that point. Come back to us about nine months into your OPT and we will help you get started. And congratulations on graduating — you have got this!",
            textZh: "STEM 延期是一个单独的申请。你在初始12个月 OPT 的最后90天申请。那时你必须已经在一个使用 E-Verify 系统的雇主那里工作。OPT 进行到大约第九个月时回来找我们，我们帮你开始准备。恭喜你即将毕业——你可以的！",
            keyPhrases: [
              { en: "E-Verify employer", zh: "E-Verify 认证雇主" },
              { en: "STEM extension", zh: "STEM OPT 延期（额外24个月）" },
            ],
            casualVersion: "STEM extension is a whole separate app. Apply in the last 90 days of your first 12 months of OPT. You need a job with an E-Verify company. Come back around month 9 and we'll help. And congrats on graduating!",
            culturalNote: "E-Verify 是美国政府的雇主验证系统。不是所有公司都注册了 E-Verify，申请 STEM 延期时你的雇主必须是 E-Verify 认证的。这在找工作时需要提前确认。",
            formalityVariants: {
              casual: "STEM extension is separate. Last 90 days of your 12-month OPT, need an E-Verify employer. Come see us at month 9. And congrats!",
              standard: "The STEM extension is a separate application during the last 90 days of your 12-month OPT. You must have a job with an E-Verify employer. Come back around month nine and we will help.",
              formal: "The STEM extension constitutes a distinct application process, which should be initiated during the final 90 days of your initial 12-month OPT period. A prerequisite is that you must be employed by an organization registered with the E-Verify system. I would recommend returning to our office approximately nine months into your OPT period, at which point we can guide you through the application. Allow me to congratulate you on your upcoming graduation.",
            },
            alternativeExpressions: [
              {
                textEn: "That comes later! Apply for the STEM extension in the last 90 days of your regular OPT. Key thing: your employer has to be on E-Verify. Put a reminder around month eight or nine to come see us. Good luck out there!",
                textZh: "那是后面的事！在你常规 OPT 的最后90天申请 STEM 延期。关键点：你的雇主必须在 E-Verify 上。大概第八九个月的时候设个提醒来找我们。祝你好运！",
                actionHint: "说明 STEM 延期时间和条件",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 宿舍问题找 RA ====================
  {
    id: "education-campus-housing-ra",
    category: "education",
    titleZh: "宿舍问题找 RA",
    titleEn: "Talking to Your RA",
    description: "遇到宿舍问题向 RA（住宿助理）求助",
    otherRole: "RA（住宿助理）",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "housing-ra-basic",
        titleZh: "噪音和室友问题",
        titleEn: "Noise and Roommate Issues",
        description: "因室友噪音问题向 RA 求助",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, are you the RA for this floor? I am having an issue with noise from the room next door and I was hoping you could help.",
            textZh: "你好，你是这层楼的 RA 吗？我被隔壁房间的噪音困扰，希望你能帮忙。",
            culturalNote: "RA（Resident Advisor/Assistant）是住在宿舍里的学生员工，负责帮助解决宿舍问题、调解室友矛盾。每层楼通常有一个 RA。这是美国大学宿舍特有的制度。",
            casualVersion: "Hey, you're the RA right? The room next door is super loud and I need some help.",
            commonMistake: {
              wrong: "I have a question about the noise of the next door.",
              correct: "I am having an issue with noise from the room next door.",
              explanation: "表达问题用 having an issue with 更自然；from the room next door 比 of the next door 更准确。",
            },
            formalityVariants: {
              casual: "Hey, are you the RA? The room next to me is so loud. Can you help?",
              standard: "Hi, are you the RA for this floor? I am having an issue with noise from the room next door.",
              formal: "Good evening. May I confirm that you are the Resident Advisor for this floor? I have been experiencing a persistent noise issue from the adjacent room and I would appreciate your assistance.",
            },
          },
          {
            speaker: "them",
            role: "RA（住宿助理）",
            textEn: "Yes, I am! Sorry to hear that. Can you tell me more? Is it music, talking, or something else? And how late does it usually go? We have quiet hours starting at 10 PM on weekdays.",
            textZh: "是的，我就是！很抱歉听到这个。能具体说说吗？是音乐、说话声，还是其他？通常持续到多晚？我们在工作日晚上10点开始有安静时间。",
            keyPhrases: [
              { en: "quiet hours", zh: "安静时间" },
              { en: "weekdays", zh: "工作日" },
            ],
            casualVersion: "Yep, that's me! What kinda noise is it — music, people talking? How late does it go? We have quiet hours at 10 PM on weeknights.",
            culturalNote: "Quiet hours 是美国大学宿舍的规定安静时间，通常工作日晚上10点到早上8点。在这个时间段内，噪音投诉会被更认真地处理。",
            formalityVariants: {
              casual: "That's me! What's the noise like — music? Talking? How late? Quiet hours are 10 PM weekdays.",
              standard: "Yes, I am. Can you tell me more about the noise? Is it music, talking, or something else? We have quiet hours starting at 10 PM on weekdays.",
              formal: "Indeed, I am the RA for this floor. I am sorry to hear about this issue. Could you provide some additional details? Specifically, what type of noise is it, and at what hours does it typically occur? Our residential quiet hours commence at 10 PM on weekday evenings.",
            },
            alternativeExpressions: [
              {
                textEn: "I sure am. Tell me what is going on — what kind of noise, how late, how often? Just so you know, quiet hours are 10 PM to 8 AM on weekdays.",
                textZh: "是的。告诉我怎么回事——什么噪音，多晚，多频繁？顺便说一下，安静时间是工作日晚10点到早8点。",
                actionHint: "了解详情并提及安静时间规定",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "It is mostly loud music and video games. It goes past midnight almost every night. I have a midterm next week and I really need to sleep. I tried knocking on their door once but nothing changed.",
            textZh: "主要是大声的音乐和电子游戏。几乎每天晚上都超过午夜。我下周有期中考试，真的需要睡觉。我敲过一次他们的门但没有改变。",
            culturalNote: "在找 RA 之前先自己试着解决（如敲门沟通）是被期望的。告诉 RA 你已经尝试过自己解决，说明你不是无端投诉。",
            casualVersion: "Loud music and video games, past midnight every night. I've got midterms next week and I need sleep. I knocked on their door once but nothing changed.",
            commonMistake: {
              wrong: "I have tried to knock their door but nothing changed.",
              correct: "I tried knocking on their door once but nothing changed.",
              explanation: "knock on the door 是固定搭配，需要介词 on。这里用一般过去时 tried 而不是现在完成时也可以。",
            },
            formalityVariants: {
              casual: "Music and gaming, past midnight, every night. I've got midterms and I need sleep. Already knocked — didn't help.",
              standard: "It is mostly loud music and video games, past midnight almost every night. I have midterms next week. I tried knocking on their door once but nothing changed.",
              formal: "The noise consists primarily of loud music and video games, and it typically persists well past midnight on a nearly nightly basis. With midterm examinations approaching next week, adequate sleep is essential. I did attempt to address the matter directly by knocking on their door, but unfortunately the situation has not improved.",
            },
          },
          {
            speaker: "them",
            role: "RA（住宿助理）",
            textEn: "Thank you for trying to handle it yourself first — I appreciate that. Past midnight is definitely a violation of quiet hours. Here is what I will do: I will go talk to them tonight and give them a formal warning. If it happens again after the warning, we file an incident report and it goes to the housing office.",
            textZh: "谢谢你先自己尝试解决——我很感激。超过午夜肯定是违反安静时间规定的。我会这样做：今晚我去和他们谈，给他们一个正式警告。如果警告后再犯，我们就提交事件报告，由住宿办公室处理。",
            keyPhrases: [
              { en: "formal warning", zh: "正式警告" },
              { en: "incident report", zh: "事件报告" },
              { en: "housing office", zh: "住宿办公室" },
            ],
            casualVersion: "Good on you for trying to talk to them first. Past midnight is definitely a violation. I'll go chat with them tonight and give a formal warning. If it keeps happening, we do an incident report and housing gets involved.",
            culturalNote: "美国大学宿舍有正式的投诉升级流程：口头提醒 → RA 警告 → 事件报告 → 住宿办公室处理。这不是小题大做——这是保护你权益的正常途径。",
            formalityVariants: {
              casual: "Props for trying to talk to them first. Midnight noise is a clear violation. I'll talk to them tonight, give a warning. If it continues, we write it up and housing deals with it.",
              standard: "Thank you for trying to handle it first. Past midnight is a violation. I will give them a formal warning tonight. If it continues, we file an incident report.",
              formal: "I commend you for attempting to resolve the matter independently first. Activity past midnight unequivocally constitutes a violation of our quiet hours policy. I shall speak with them this evening and issue a formal warning. Should the behavior persist following the warning, I will be obligated to file an incident report, which will then be reviewed by the housing administration office.",
            },
            alternativeExpressions: [
              {
                textEn: "Good that you tried first. Noise past midnight is a clear quiet hours violation. I will give them an official warning tonight. If they do not stop, it gets escalated to the housing office with an incident report.",
                textZh: "你先尝试了很好。午夜后的噪音是明确的安静时间违规。我今晚会给他们一个正式警告。如果不停止，就上报住宿办公室并提交事件报告。",
                actionHint: "说明处理流程",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much. I did not want to get anyone in trouble, but I really need to be able to study and sleep.",
            textZh: "非常感谢。我不想让任何人惹上麻烦，但我真的需要能学习和睡觉。",
            culturalNote: "中国学生往往觉得向 RA 投诉会让邻居讨厌自己。但在美国，使用正当渠道维护权益是完全正常的，不会被认为是告状。",
            casualVersion: "Thanks a lot. I don't wanna get anyone in trouble but I really need to study and sleep.",
            commonMistake: {
              wrong: "I don't want to let anyone get trouble.",
              correct: "I did not want to get anyone in trouble.",
              explanation: "get someone in trouble 是固定搭配，意思是让某人惹上麻烦。",
            },
            formalityVariants: {
              casual: "Thanks! Not trying to get them in trouble, I just need to sleep and study.",
              standard: "Thank you. I did not want to get anyone in trouble, but I really need to be able to study and sleep.",
              formal: "Thank you very much for your assistance. I certainly do not wish to cause difficulties for anyone, but I do need to maintain an environment conducive to studying and adequate rest.",
            },
          },
          {
            speaker: "them",
            role: "RA（住宿助理）",
            textEn: "Do not worry about that — you have every right to a quiet living space. That is why I am here. If the noise happens again tonight before I get to talk to them, text me and I will come right away. Here is my number.",
            textZh: "不用担心——你完全有权拥有安静的居住环境。这就是我在这里的原因。如果今晚我去跟他们谈之前又有噪音，发短信给我，我马上过来。这是我的号码。",
            keyPhrases: [
              { en: "you have every right", zh: "你完全有权" },
              { en: "text me", zh: "发短信给我" },
            ],
            casualVersion: "Don't stress — you totally have the right to a quiet space. That's literally my job. If it gets loud again before I talk to them, text me and I'll be right there.",
            culturalNote: "RA 通常会给你他们的手机号码，方便紧急联系。这是正常的服务流程，不是什么特殊待遇。你有权随时联系 RA 报告宿舍问题。",
            formalityVariants: {
              casual: "Don't worry about it! You deserve a quiet space — that's my whole job. If it gets loud again, just text me.",
              standard: "Do not worry — you have every right to a quiet living space. If it happens again tonight, text me and I will come right away.",
              formal: "Please do not concern yourself with that. You are absolutely entitled to a quiet and peaceful living environment, and ensuring that is precisely my role. Should the noise recur this evening before I have had the opportunity to address it, please do not hesitate to send me a text message and I shall respond immediately. Here is my contact number.",
            },
            alternativeExpressions: [
              {
                textEn: "Hey, you are not getting anyone in trouble — they are getting themselves in trouble by breaking the rules. You deserve peace and quiet. Here is my number — use it anytime.",
                textZh: "嘿，你没有让任何人惹麻烦——是他们自己违反规定惹的麻烦。你应该拥有安宁。这是我的号码——随时用。",
                actionHint: "安慰并提供联系方式",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "housing-ra-intermediate",
        titleZh: "设施维修和安全问题",
        titleEn: "Maintenance and Safety Issues",
        description: "宿舍设施坏了或有安全隐患找 RA 报修",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hey, sorry to bother you. The heater in my room has not been working for two days and my room is freezing. I also noticed the smoke detector in the hallway is beeping — I think the battery is low.",
            textZh: "嘿，抱歉打扰你。我房间的暖气两天没工作了，房间冷得要命。我还注意到走廊的烟雾探测器一直在响——我觉得电池快没了。",
            culturalNote: "美国宿舍的暖气和烟雾探测器维修是住宿管理的责任。报修不需要自己花钱。烟雾探测器问题属于安全隐患，优先级很高。",
            casualVersion: "Hey, sorry to bug you. My heater's been dead for 2 days and it's freezing. Also, the smoke detector in the hall keeps beeping — probably needs a new battery.",
            commonMistake: {
              wrong: "The heater in my room is broken for two days.",
              correct: "The heater in my room has not been working for two days.",
              explanation: "持续两天没工作用现在完成进行时 has not been working，不用一般现在时。",
            },
            formalityVariants: {
              casual: "Hey sorry — my heater's been out for 2 days. Freezing in here. Oh, and the hallway smoke detector keeps beeping.",
              standard: "Sorry to bother you. The heater in my room has not been working for two days and my room is freezing. Also, the smoke detector in the hallway is beeping.",
              formal: "I apologize for the interruption. I wanted to report that the heating unit in my room has been non-functional for approximately two days, resulting in extremely cold temperatures. Additionally, I have noticed that the smoke detector in the hallway appears to be emitting an intermittent beeping sound, which may indicate a low battery.",
            },
          },
          {
            speaker: "them",
            role: "RA（住宿助理）",
            textEn: "No bother at all! The smoke detector is a safety issue, so I will report that right now — they will fix it today. For the heater, I will submit a maintenance request for you. In the meantime, we have space heaters you can borrow from the front desk. Want me to grab one for you?",
            textZh: "一点不打扰！烟雾探测器是安全问题，所以我现在就报告——他们今天就会修。暖气的话，我会为你提交一个维修申请。在此期间，前台有你可以借的电暖器。要我帮你拿一个吗？",
            keyPhrases: [
              { en: "maintenance request", zh: "维修申请" },
              { en: "space heater", zh: "电暖器" },
              { en: "front desk", zh: "前台" },
            ],
            casualVersion: "No worries! Smoke detector's a safety thing — reporting it now, they'll fix it today. For the heater, I'll put in a maintenance request. We've got space heaters at the front desk you can borrow. Want one?",
            culturalNote: "美国大学宿舍的维修流程是：报告 RA → RA 提交 maintenance request → 维修团队处理。安全类问题（如烟雾探测器）通常当天处理。",
            formalityVariants: {
              casual: "Not a bother! Smoke detector is safety priority — reporting now. Heater, I'll file a maintenance request. Grab a space heater from the front desk in the meantime.",
              standard: "The smoke detector is a safety issue, so I will report that immediately. For the heater, I will submit a maintenance request. We have space heaters available at the front desk.",
              formal: "Not at all, this is precisely what I am here for. The smoke detector issue constitutes a safety concern, so I shall report it immediately for same-day resolution. Regarding the heating unit, I will submit a formal maintenance request on your behalf. In the interim, portable space heaters are available for loan at the front desk. Shall I procure one for you?",
            },
            alternativeExpressions: [
              {
                textEn: "Do not apologize — this is important stuff! The smoke detector is urgent, I am calling that in right now. The heater, I will get maintenance on it. And go grab a space heater from the front desk so you are not freezing tonight.",
                textZh: "别道歉——这些很重要！烟雾探测器是紧急的，我现在就打电话。暖气的话，我会让维修来处理。先去前台拿个电暖器，这样今晚不用挨冻。",
                actionHint: "区分优先级并提供临时方案",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes please, a space heater would be great. How long does a maintenance request usually take? I do not want to be without heat for another week.",
            textZh: "好的，请帮我拿一个电暖器。维修申请通常需要多长时间？我不想再没有暖气一个星期。",
            culturalNote: "询问维修时间是合理的。美国大学宿舍维修通常在 1-3 个工作日内完成，但暖气在冬天属于紧急维修，应该更快。",
            casualVersion: "Yeah, a space heater would be awesome. How long does maintenance usually take? I really can't go another week without heat.",
            commonMistake: {
              wrong: "How long does maintenance request usually take?",
              correct: "How long does a maintenance request usually take?",
              explanation: "maintenance request 是可数名词，前面需要冠词 a。",
            },
            formalityVariants: {
              casual: "Yes please! How long does maintenance usually take though? Can't do another week without heat.",
              standard: "Yes, a space heater would be great. How long does a maintenance request usually take?",
              formal: "That would be most appreciated, thank you. Might I inquire about the typical turnaround time for maintenance requests? I would prefer not to be without adequate heating for an extended period.",
            },
          },
          {
            speaker: "them",
            role: "RA（住宿助理）",
            textEn: "Heating is considered urgent, so it should be one to two business days max. If it is not fixed by Thursday, come find me and I will escalate it. You can also track the status of your request through the housing portal — I will email you the link.",
            textZh: "暖气被归为紧急维修，所以最多一到两个工作日。如果周四还没修好，来找我，我会升级处理。你也可以通过住宿平台追踪你的申请状态——我会把链接邮件发给你。",
            keyPhrases: [
              { en: "escalate it", zh: "升级处理" },
              { en: "business days", zh: "工作日" },
              { en: "housing portal", zh: "住宿平台" },
            ],
            casualVersion: "Heating's urgent, so 1-2 business days tops. If it's not fixed by Thursday, come get me and I'll escalate it. You can track it on the housing portal — I'll send you the link.",
            culturalNote: "Escalate 意思是将问题提交给更高一级处理。这是美国服务系统常用的词。housing portal 是在线系统，可以追踪维修状态。",
            formalityVariants: {
              casual: "Heat's urgent — 1-2 days max. Not fixed by Thursday? Find me, I'll push it up. Check the housing portal for status — I'll send the link.",
              standard: "Heating is urgent, so one to two business days max. If not fixed by Thursday, find me and I will escalate. You can track the status on the housing portal.",
              formal: "Heating issues are classified as urgent maintenance requests, so the expected resolution time is one to two business days at most. Should the issue remain unresolved by Thursday, please do not hesitate to contact me and I will escalate the matter to the facilities management office. You may also monitor the status of your request through the housing services portal — I shall forward you the access link via email.",
            },
            alternativeExpressions: [
              {
                textEn: "No heat is urgent — they should be out within a day or two. If Thursday comes and it is still broken, I will personally call the maintenance supervisor. I am also sending you the link to track your request online.",
                textZh: "没暖气是紧急的——他们应该一两天内来。如果周四还没修好，我会亲自打电话给维修主管。我也会发给你在线追踪申请的链接。",
                actionHint: "提供时间预期和追踪方式",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That is really helpful. Oh, I also wanted to ask — is there a way to request a room change? My roommate and I have very different schedules and it has been tough. Nothing personal, just a lifestyle mismatch.",
            textZh: "真的很有帮助。哦，我还想问——有办法申请换房间吗？我和室友的作息时间非常不同，挺困难的。不是个人问题，只是生活方式不匹配。",
            culturalNote: "在美国大学换室友（room change）是正常流程。强调 nothing personal, just a lifestyle mismatch 很重要——说明你不是在攻击室友，而是客观的生活习惯差异。",
            casualVersion: "Super helpful, thanks. Oh, also — can I get a room change? My roommate and I are on totally different schedules. Nothing personal, just doesn't work lifestyle-wise.",
            commonMistake: {
              wrong: "Can I change my room? Me and my roommate have very different schedules.",
              correct: "Is there a way to request a room change? My roommate and I have very different schedules.",
              explanation: "request a room change 比 change my room 更正式；My roommate and I 是正确的主语语序，不说 Me and my roommate。",
            },
            formalityVariants: {
              casual: "Also — can I switch rooms? My roommate and I are just on totally different schedules. No beef, just a bad fit.",
              standard: "Is there a way to request a room change? My roommate and I have very different schedules. Nothing personal, just a lifestyle mismatch.",
              formal: "I have an additional question, if you do not mind. Is it possible to request a room transfer? My roommate and I maintain substantially different daily schedules, which has proven challenging. I want to emphasize that this is not a personal matter — it is simply an incompatibility in our respective lifestyles.",
            },
          },
          {
            speaker: "them",
            role: "RA（住宿助理）",
            textEn: "Totally understandable — that is actually one of the most common reasons for room changes. You will need to fill out a room change request form on the housing portal. Fair warning though: mid-semester changes depend on availability. I would recommend also trying a roommate agreement first — we can sit down together and talk about quiet times, lights-out, guests, all that stuff.",
            textZh: "完全理解——这其实是换房间最常见的原因之一。你需要在住宿平台上填写换房间申请表。不过提醒一下：学期中换房取决于空房情况。我建议也先试试室友协议——我们可以坐下来一起谈谈安静时间、熄灯时间、来客规定等等。",
            keyPhrases: [
              { en: "roommate agreement", zh: "室友协议" },
              { en: "room change request", zh: "换房申请" },
              { en: "lights-out", zh: "熄灯时间" },
            ],
            casualVersion: "Totally get it — super common actually. Fill out the room change form on the portal. Heads up though, mid-semester spots are limited. I'd also suggest a roommate agreement first — we can talk through quiet hours, lights-out, guests, all that.",
            culturalNote: "Roommate agreement 是美国大学鼓励的室友沟通工具，把双方的生活习惯预期（熄灯时间、来客规定、清洁分工等）写成书面协议。RA 通常会帮助调解。",
            formalityVariants: {
              casual: "Super common reason. Fill out the form on the portal. But fair warning — mid-semester availability is iffy. Maybe try a roommate agreement first? We can hash it out together.",
              standard: "That is one of the most common reasons for room changes. Fill out the form on the housing portal. I also recommend trying a roommate agreement first — we can discuss quiet times, lights-out, and guests together.",
              formal: "That is entirely understandable and, in fact, one of the most frequently cited reasons for room transfer requests. The process requires completing a room change request form available on the housing portal. I should note, however, that mid-semester transfers are subject to room availability. Prior to that, I would recommend attempting to establish a formal roommate agreement — I can facilitate a mediated discussion covering expectations around quiet hours, lights-out, guest policies, and other shared living considerations.",
            },
            alternativeExpressions: [
              {
                textEn: "You are definitely not the first! Fill out the room change form online. But honestly, before going through all that, a roommate agreement often solves the problem. I have seen it work many times. Want to set up a mediation session?",
                textZh: "你绝对不是第一个！在网上填写换房表格。但说实话，在走那个流程之前，室友协议经常能解决问题。我见过很多次成功的。要安排一次调解会议吗？",
                actionHint: "建议先尝试室友协议再换房",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 学校午餐点餐 ====================
  {
    id: "education-school-lunch-order",
    category: "education",
    titleZh: "学校食堂点餐",
    titleEn: "School Cafeteria Ordering",
    description: "在学校食堂或午餐线点餐",
    otherRole: "食堂员工",
    otherRoleIcon: "🍽️",
    flows: [
      {
        id: "school-lunch-basic",
        titleZh: "食堂基本点餐",
        titleEn: "Basic Cafeteria Ordering",
        description: "第一次在美国学校食堂点餐",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "食堂员工",
            textEn: "Hi there! Welcome to the dining hall. Are you on the meal plan, or are you paying with cash or card today?",
            textZh: "嗨！欢迎来到食堂。你有餐饮计划，还是今天用现金或刷卡付？",
            keyPhrases: [
              { en: "meal plan", zh: "餐饮计划（预付费套餐）" },
              { en: "paying with cash or card", zh: "用现金或刷卡付" },
            ],
            casualVersion: "Hey! Meal plan, cash, or card?",
            culturalNote: "美国大学的 meal plan 是预付费的餐饮套餐，通常包含在住宿费中。每周有固定的 swipe 次数（刷卡次数）。不在meal plan上的学生可以现金或刷卡付。",
            formalityVariants: {
              casual: "Hey! Got a meal plan, or cash/card?",
              standard: "Welcome! Are you on the meal plan, or paying with cash or card today?",
              formal: "Good afternoon, welcome to the dining hall. Will you be utilizing your meal plan this evening, or would you prefer to pay via cash or credit card?",
            },
            alternativeExpressions: [
              {
                textEn: "Hey, welcome! Do you want to swipe your meal plan or pay separately today?",
                textZh: "嘿，欢迎！你想刷餐饮计划还是今天单独付？",
                actionHint: "询问支付方式",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I am on the meal plan. This is actually my first time eating here — how does it work? Can I just take whatever I want?",
            textZh: "我有餐饮计划。这其实是我第一次在这里吃——怎么用？我可以随便拿吗？",
            culturalNote: "美国大学食堂通常是自助餐形式——刷一次卡就可以随便吃。这和中国大学食堂按单品付费的模式很不同。",
            casualVersion: "I'm on the meal plan. First time here though — how does it work? Can I grab whatever?",
            commonMistake: {
              wrong: "How does it use?",
              correct: "How does it work?",
              explanation: "问运作方式用 how does it work，不用 how does it use。",
            },
            formalityVariants: {
              casual: "Got the meal plan! First time here — what do I do? Just grab whatever?",
              standard: "I am on the meal plan. This is my first time here — how does it work? Can I take whatever I want?",
              formal: "I am enrolled in the meal plan. This is my first visit to the dining hall, so I am not entirely certain of the procedure. Am I permitted to select freely from the available options?",
            },
          },
          {
            speaker: "them",
            role: "食堂员工",
            textEn: "Just swipe your student ID at the entrance and you are good to go! It is all-you-can-eat — we have a salad bar, a hot food station, a grill, a sandwich station, and a dessert area. Take as much as you like, but please do not take food out of the dining hall.",
            textZh: "在入口刷一下学生证就行了！这里是自助餐——我们有沙拉吧、热菜区、烧烤区、三明治区和甜品区。想拿多少拿多少，但请不要把食物带出食堂。",
            keyPhrases: [
              { en: "all-you-can-eat", zh: "自助餐/无限量" },
              { en: "salad bar", zh: "沙拉吧" },
              { en: "hot food station", zh: "热菜区" },
            ],
            casualVersion: "Swipe your ID at the door and you're in! All-you-can-eat — salad bar, hot food, grill, sandwiches, dessert. Eat as much as you want, just don't take food out.",
            culturalNote: "美国大学食堂的 no take-out 政策很普遍——你可以在里面随便吃，但不能打包带走。这是因为 meal plan 按次计费，不按量计费。",
            formalityVariants: {
              casual: "Swipe your ID and go for it! All-you-can-eat. Salad, hot food, grill, sandwiches, desserts. Just don't take food out.",
              standard: "Swipe your student ID at the entrance. It is all-you-can-eat with several stations. Take as much as you like, but please do not take food out.",
              formal: "Simply present your student identification at the entrance. Our dining hall operates on an all-you-can-eat basis, featuring a salad bar, hot food station, grill, sandwich station, and dessert area. You are welcome to enjoy as much as you wish; however, we do ask that food items not be removed from the premises.",
            },
            alternativeExpressions: [
              {
                textEn: "Easy! Swipe at the door and eat all you want. We have different stations around the room. Only rule: food stays in the dining hall.",
                textZh: "很简单！在门口刷卡然后随便吃。我们在房间各处有不同的餐台。唯一的规则：食物不能带出食堂。",
                actionHint: "说明食堂规则",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Great! What is on the hot food menu today? Also, do you have any options for someone who does not eat pork?",
            textZh: "太好了！今天热菜有什么？还有，有什么不含猪肉的选择吗？",
            culturalNote: "在美国很多人因为宗教或个人原因不吃猪肉。直接问 do you have options for someone who does not eat pork 是完全正常的。美国食堂通常标注过敏原和饮食限制。",
            casualVersion: "Awesome! What's on the hot food menu? And do you have anything without pork? I don't eat pork.",
            commonMistake: {
              wrong: "What is today's hot food?",
              correct: "What is on the hot food menu today?",
              explanation: "what is on the menu 是问菜单上有什么的标准说法。",
            },
            formalityVariants: {
              casual: "Nice! What's the hot food today? Got anything without pork?",
              standard: "What is on the hot food menu today? Do you have options for someone who does not eat pork?",
              formal: "Wonderful. Could you inform me of today's hot food offerings? Additionally, are there options available for those who abstain from pork?",
            },
          },
          {
            speaker: "them",
            role: "食堂员工",
            textEn: "Today we have roasted chicken, beef stew, and a vegetable stir-fry. The chicken and stir-fry are both pork-free. All our dishes are labeled with allergen info and dietary symbols — look for the green cards. The V means vegetarian, and the GF means gluten-free.",
            textZh: "今天有烤鸡、炖牛肉和素炒蔬菜。烤鸡和素炒都不含猪肉。我们所有菜品都标注了过敏原信息和饮食标志——看绿色卡片。V 代表素食，GF 代表无麸质。",
            keyPhrases: [
              { en: "allergen info", zh: "过敏原信息" },
              { en: "vegetarian", zh: "素食" },
              { en: "gluten-free", zh: "无麸质" },
            ],
            casualVersion: "We've got roasted chicken, beef stew, and veggie stir-fry. Chicken and stir-fry are pork-free. Check the green labels — V is vegetarian, GF is gluten-free.",
            culturalNote: "美国食堂非常重视食物标签，因为过敏和饮食限制在美国很普遍。V（vegetarian）、VG（vegan）、GF（gluten-free）是最常见的标志。",
            formalityVariants: {
              casual: "Roasted chicken, beef stew, veggie stir-fry. Chicken and stir-fry are pork-free. Green labels tell you allergens — V for vegetarian, GF for gluten-free.",
              standard: "Today we have roasted chicken, beef stew, and vegetable stir-fry. The chicken and stir-fry are pork-free. Look for the green cards with dietary symbols.",
              formal: "Today's offerings include roasted chicken, beef stew, and a vegetable stir-fry. Both the chicken and the stir-fry are pork-free. Each dish is accompanied by allergen information and dietary classification cards — the green placards. V denotes vegetarian, and GF indicates gluten-free.",
            },
            alternativeExpressions: [
              {
                textEn: "No pork? No problem! The roasted chicken and veggie stir-fry are both safe. And heads up — every dish has a label showing allergens and dietary info. Super helpful.",
                textZh: "不吃猪肉？没问题！烤鸡和素炒蔬菜都可以。提醒一下——每道菜都有标签显示过敏原和饮食信息。超方便的。",
                actionHint: "推荐不含猪肉的选择并介绍标签系统",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "The roasted chicken sounds good. I will also grab some salad. Thank you for explaining everything — this is much easier than I expected!",
            textZh: "烤鸡听起来不错。我还会拿些沙拉。谢谢你解释一切——比我想象的简单多了！",
            culturalNote: "美国食堂的自助式比中国大学食堂的窗口点餐更自由，但需要习惯自己拿盘子、取餐、找位子。",
            casualVersion: "I'll go with the chicken and grab some salad. Thanks for the rundown — way easier than I thought!",
            commonMistake: {
              wrong: "The roasted chicken sounds well.",
              correct: "The roasted chicken sounds good.",
              explanation: "sound 后面用形容词 good 而不是副词 well。sounds good 是固定搭配。",
            },
            formalityVariants: {
              casual: "Chicken it is! Plus some salad. Thanks for walking me through it — super easy!",
              standard: "The roasted chicken sounds good. I will also grab some salad. Thank you for explaining everything!",
              formal: "The roasted chicken sounds excellent. I shall also help myself to some salad. Thank you very much for your thorough explanation — this is considerably more straightforward than I had anticipated.",
            },
          },
        ],
      },
      {
        id: "school-lunch-intermediate",
        titleZh: "定制三明治和饮食限制",
        titleEn: "Custom Orders and Dietary Needs",
        description: "在三明治站定制食物并沟通饮食限制",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "食堂员工",
            textEn: "Welcome to the sandwich station! What can I make for you? We have white, wheat, and sourdough bread. Or if you prefer, we also have wraps.",
            textZh: "欢迎来到三明治站！我能帮你做什么？我们有白面包、全麦面包和酸面包。如果你喜欢，我们也有卷饼。",
            keyPhrases: [
              { en: "wheat bread", zh: "全麦面包" },
              { en: "sourdough", zh: "酸面包" },
              { en: "wrap", zh: "卷饼" },
            ],
            casualVersion: "Hey! What'll it be? White, wheat, sourdough, or a wrap?",
            culturalNote: "美国三明治店让你从面包到配料全部自选。这个定制流程对中国学生来说可能陌生，需要一步步做选择。",
            formalityVariants: {
              casual: "What can I get you? White, wheat, sourdough, or wrap?",
              standard: "Welcome to the sandwich station! We have white, wheat, and sourdough bread, or wraps. What would you like?",
              formal: "Welcome! What may I prepare for you today? Our bread selections include white, whole wheat, and sourdough, and we also offer wraps as an alternative.",
            },
            alternativeExpressions: [
              {
                textEn: "Hi! Ready to build your sandwich? Start by picking your bread — we have white, wheat, sourdough, or you can go with a wrap.",
                textZh: "嗨！准备好做你的三明治了吗？先选面包——白面包、全麦、酸面包，或者你可以选卷饼。",
                actionHint: "引导顾客选择面包",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I will have wheat bread, please. Can I get turkey and Swiss cheese? Oh, and I have a peanut allergy — does anything here contain peanuts?",
            textZh: "请给我全麦面包。我要火鸡肉和瑞士奶酪。哦，我对花生过敏——这里有什么含花生的吗？",
            culturalNote: "在美国，食物过敏是被非常认真对待的事。明确告知过敏情况是必要的，店员会特别注意。peanut allergy 是美国最常见的食物过敏之一。",
            casualVersion: "Wheat bread, turkey, Swiss cheese. Oh, I'm allergic to peanuts — anything here got peanuts?",
            commonMistake: {
              wrong: "I have peanut allergy. Does anything here have peanuts?",
              correct: "I have a peanut allergy. Does anything here contain peanuts?",
              explanation: "a peanut allergy 需要冠词 a；contain 比 have 在食物过敏语境中更精确。",
            },
            formalityVariants: {
              casual: "Wheat, turkey, Swiss. Oh, heads up — I'm allergic to peanuts. Anything here got peanuts?",
              standard: "Wheat bread please, with turkey and Swiss cheese. I also have a peanut allergy — does anything here contain peanuts?",
              formal: "I would like whole wheat bread with turkey and Swiss cheese, please. I should also mention that I have a peanut allergy. Could you advise whether any of the ingredients here contain peanuts or peanut products?",
            },
          },
          {
            speaker: "them",
            role: "食堂员工",
            textEn: "Good to know! Let me change my gloves first. The Asian sauce does contain peanuts, so we will skip that. Everything else on this station is peanut-free. What toppings would you like? We have lettuce, tomato, onion, pickles, and avocado.",
            textZh: "谢谢告知！让我先换手套。亚洲酱料含有花生，所以我们跳过那个。这个站台的其他东西都不含花生。你要什么配菜？我们有生菜、番茄、洋葱、酸黄瓜和牛油果。",
            keyPhrases: [
              { en: "change my gloves", zh: "换手套" },
              { en: "toppings", zh: "配料/加料" },
              { en: "pickles", zh: "酸黄瓜" },
            ],
            casualVersion: "Got it! Lemme swap gloves. The Asian sauce has peanuts, so we'll skip that. Rest is peanut-free. Toppings? Lettuce, tomato, onion, pickles, avocado?",
            culturalNote: "美国食品服务人员在知道过敏信息后会换手套以避免交叉污染（cross-contamination）。这是食品安全标准，说明他们很认真对待过敏。",
            formalityVariants: {
              casual: "OK, switching gloves! Asian sauce has peanuts — skipping that. Everything else is fine. What toppings?",
              standard: "Let me change my gloves. The Asian sauce contains peanuts, so we will avoid that. Everything else is peanut-free. What toppings would you like?",
              formal: "Thank you for informing me. Allow me to change my gloves to prevent any cross-contamination. I should note that our Asian sauce does contain peanut products, so we will exclude that. All other items at this station are peanut-free. Which toppings would you care for? We offer lettuce, tomato, onion, pickles, and avocado.",
            },
            alternativeExpressions: [
              {
                textEn: "Thanks for telling me — I will put on fresh gloves. Heads up: the Asian sauce has peanuts, but everything else is safe. Now, what do you want on it? Lettuce, tomato, onion, pickles, avocado?",
                textZh: "谢谢告诉我——我换一双新手套。提醒：亚洲酱料有花生，但其他都安全。你想加什么？生菜、番茄、洋葱、酸黄瓜、牛油果？",
                actionHint: "过敏安全措施并继续点餐",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you for being careful. I will have lettuce, tomato, and avocado. For the sauce, what do you recommend instead of the Asian one?",
            textZh: "谢谢你这么细心。我要生菜、番茄和牛油果。酱料的话，除了亚洲酱你推荐什么？",
            culturalNote: "asking for a recommendation 在美国是很自然的互动。食堂员工通常很乐意推荐，这也是练习英语的好机会。",
            casualVersion: "Thanks for that. Lettuce, tomato, avocado. What sauce do you recommend instead of the Asian one?",
            commonMistake: {
              wrong: "What sauce do you suggest me?",
              correct: "What sauce do you recommend?",
              explanation: "recommend 可以不接间接宾语直接用；suggest me 在这里不自然。",
            },
            formalityVariants: {
              casual: "Thanks! Lettuce, tomato, avocado. What sauce is good besides the Asian one?",
              standard: "Thank you for being careful. Lettuce, tomato, and avocado. What sauce do you recommend instead of the Asian one?",
              formal: "I appreciate your attention to safety. I would like lettuce, tomato, and avocado. Regarding the sauce, what would you recommend as an alternative to the Asian variety?",
            },
          },
          {
            speaker: "them",
            role: "食堂员工",
            textEn: "The honey mustard is really popular, and it is completely nut-free. Or if you like something lighter, we have a lemon vinaigrette. Both are great with turkey.",
            textZh: "蜂蜜芥末酱很受欢迎，而且完全不含坚果。如果你喜欢清淡一些的，我们有柠檬油醋汁。两种搭配火鸡肉都很好。",
            keyPhrases: [
              { en: "honey mustard", zh: "蜂蜜芥末酱" },
              { en: "nut-free", zh: "不含坚果" },
              { en: "vinaigrette", zh: "油醋汁" },
            ],
            casualVersion: "Honey mustard is super popular and totally nut-free. Or lemon vinaigrette if you want something lighter. Both go great with turkey.",
            culturalNote: "honey mustard 和 vinaigrette 是美国三明治店最常见的酱料。点餐时了解这些酱料名称会让体验更顺畅。",
            formalityVariants: {
              casual: "Honey mustard's the go-to, and it's nut-free. Or lemon vinaigrette for something lighter. Both are awesome with turkey.",
              standard: "The honey mustard is popular and nut-free. Or we have a lemon vinaigrette for something lighter. Both pair well with turkey.",
              formal: "Our honey mustard is particularly popular among patrons and is entirely nut-free. Alternatively, we offer a lemon vinaigrette for a lighter flavor profile. Both complement turkey exceptionally well.",
            },
            alternativeExpressions: [
              {
                textEn: "I would go with honey mustard — it is our best seller and totally safe for you. The lemon vinaigrette is also delicious if you want something refreshing.",
                textZh: "我推荐蜂蜜芥末——这是我们最畅销的，对你完全安全。如果你想要清爽的，柠檬油醋汁也很好吃。",
                actionHint: "推荐安全的酱料",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Honey mustard sounds perfect! That is my sandwich, then. Thank you for taking my allergy so seriously — I really appreciate it.",
            textZh: "蜂蜜芥末听起来完美！那就是我的三明治了。谢谢你这么认真对待我的过敏——真的很感激。",
            culturalNote: "对服务人员表示感谢在美国文化中非常重要。特别是当他们为你的特殊需求额外付出时，表达appreciation会让双方都感觉很好。",
            casualVersion: "Honey mustard it is! That's my sandwich. Thanks so much for being careful about the allergy — I really appreciate it.",
            commonMistake: {
              wrong: "Thank you for take my allergy seriously.",
              correct: "Thank you for taking my allergy so seriously.",
              explanation: "for 后面接动名词 taking，不接动词原形 take。",
            },
            formalityVariants: {
              casual: "Honey mustard! Done! Thanks for being awesome about the allergy thing.",
              standard: "Honey mustard sounds perfect. Thank you for taking my allergy so seriously — I really appreciate it.",
              formal: "Honey mustard would be ideal, thank you. I would like to express my sincere gratitude for the care you have taken regarding my peanut allergy. It is truly reassuring.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 家长志愿者活动 ====================
  {
    id: "education-parent-volunteer",
    category: "education",
    titleZh: "家长志愿者活动",
    titleEn: "Parent Volunteer Activity",
    description: "参加孩子学校的志愿者活动",
    otherRole: "班主任老师",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "parent-volunteer-basic",
        titleZh: "报名志愿者",
        titleEn: "Signing Up to Volunteer",
        description: "了解学校志愿者活动并报名参加",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi Mrs. Davis, I am Tommy's mom. I received the newsletter about the upcoming school events and I would like to volunteer. What kind of help do you need?",
            textZh: "你好 Davis 老师，我是 Tommy 的妈妈。我收到了关于即将到来的学校活动的通讯，我想做志愿者。你们需要什么帮助？",
            culturalNote: "在美国 K-12 学校，家长志愿者（parent volunteer）非常普遍。学校经常发 newsletter（通讯）邀请家长参与。自我介绍时说 I am [孩子名字]'s mom/dad 是标准说法。",
            casualVersion: "Hi Mrs. Davis! I'm Tommy's mom. Got the newsletter about the school events — I'd love to help out. What do you need?",
            commonMistake: {
              wrong: "I am Tommy's mother. I want to be volunteer.",
              correct: "I am Tommy's mom. I would like to volunteer.",
              explanation: "口语中 mom 比 mother 更自然；volunteer 做动词时前面不需要 be，或者说 be a volunteer。",
            },
            formalityVariants: {
              casual: "Hey Mrs. Davis! Tommy's mom here. Saw the newsletter — I'm totally down to volunteer. What do you need?",
              standard: "Hi Mrs. Davis, I am Tommy's mom. I received the newsletter and I would like to volunteer. What kind of help do you need?",
              formal: "Good morning, Mrs. Davis. I am Tommy's mother. I received the recent newsletter regarding the upcoming school events and I would very much like to offer my time as a volunteer. What types of assistance are you currently seeking?",
            },
          },
          {
            speaker: "them",
            role: "班主任老师",
            textEn: "Hi! Thank you so much for offering — we always need more parent volunteers! We have the fall carnival coming up next month and the book fair the week after. For the carnival, we need people to run game booths. For the book fair, we need help setting up and organizing books. Which one interests you?",
            textZh: "你好！非常感谢你主动帮忙——我们总是需要更多家长志愿者！下个月有秋季嘉年华，之后一周是书展。嘉年华需要人管理游戏摊位。书展需要帮忙布置和整理书。你对哪个感兴趣？",
            keyPhrases: [
              { en: "fall carnival", zh: "秋季嘉年华" },
              { en: "book fair", zh: "书展" },
              { en: "game booths", zh: "游戏摊位" },
            ],
            casualVersion: "Thank you so much! We've got the fall carnival next month and book fair the week after. Carnival needs people for game booths, book fair needs setup help. Which one sounds fun?",
            culturalNote: "美国学校经常举办 carnival（嘉年华）和 book fair（书展）等活动。这些是社区建设和筹款活动。家长参与被视为对孩子教育的支持。",
            formalityVariants: {
              casual: "Awesome, thanks! Fall carnival next month — need booth helpers. Book fair the week after — need setup. Which one?",
              standard: "Thank you for offering! We have the fall carnival and the book fair coming up. We need help running game booths and setting up books. Which interests you?",
              formal: "How wonderful, thank you for your generous offer. We have two upcoming events that could benefit from volunteer assistance: the fall carnival next month, where we require volunteers to manage game booths, and the book fair the following week, where assistance with setup and book organization would be most welcome. Which event would you prefer to participate in?",
            },
            alternativeExpressions: [
              {
                textEn: "You are amazing, thank you! We have two big events: the carnival needs people at game booths, and the book fair needs help organizing. You can do one or both — whatever works for your schedule!",
                textZh: "你太棒了，谢谢！我们有两个大活动：嘉年华需要游戏摊位的人手，书展需要帮忙整理。你可以参加一个或两个——看你的时间安排！",
                actionHint: "介绍志愿者机会",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I would love to help with the book fair! I am not very confident about running a game booth because my English is not perfect, but organizing books I can definitely do. Do I need a background check?",
            textZh: "我很想帮忙书展！我不太有信心管理游戏摊位，因为我的英语不太好，但整理书我肯定可以。我需要做背景调查吗？",
            culturalNote: "美国学校通常要求所有志愿者做背景调查（background check），这是保护学生安全的标准程序，不要觉得被冒犯。主动问说明你了解流程。",
            casualVersion: "I'd love to do the book fair! Not super confident running a game booth with my English, but organizing books I can totally do. Do I need a background check?",
            commonMistake: {
              wrong: "I need to do background check?",
              correct: "Do I need a background check?",
              explanation: "英语疑问句需要 do 辅助动词开头；a background check 需要冠词 a。",
            },
            formalityVariants: {
              casual: "Book fair sounds great! My English isn't perfect for running a booth, but I'm great with organizing. Need a background check?",
              standard: "I would love to help with the book fair. I am not very confident about running a game booth because my English is not perfect. Do I need a background check?",
              formal: "I would be delighted to assist with the book fair. I must confess that I am somewhat less confident about managing a game booth, as my English proficiency is still developing. However, organizing books is something I can certainly contribute to effectively. Might I ask whether a background check is required?",
            },
          },
          {
            speaker: "them",
            role: "班主任老师",
            textEn: "Your English is great, do not sell yourself short! And yes, all volunteers need a simple background check — it is just a form you fill out online. The school sends you a link. It takes about a week to process. I will add you to our volunteer email list so you get all the updates.",
            textZh: "你的英语很好，不要妄自菲薄！是的，所有志愿者都需要做一个简单的背景调查——就是在网上填个表格。学校会发链接给你。处理大约需要一周。我会把你加到志愿者邮件列表里，这样你能收到所有更新。",
            keyPhrases: [
              { en: "do not sell yourself short", zh: "不要妄自菲薄" },
              { en: "background check", zh: "背景调查" },
              { en: "volunteer email list", zh: "志愿者邮件列表" },
            ],
            casualVersion: "Your English is totally fine — don't sell yourself short! Yep, everyone does a quick background check online. School sends the link, takes about a week. I'll add you to the volunteer email list.",
            culturalNote: "Don't sell yourself short 意思是不要低估自己。美国人经常鼓励人不要过于谦虚。这和中国文化中谦虚是美德的观念不同。",
            formalityVariants: {
              casual: "Your English is fine! Don't worry about it. Quick background check online, school sends the link, done in a week. Adding you to the volunteer list!",
              standard: "Your English is great. All volunteers need a background check — just an online form that takes about a week. I will add you to the volunteer email list.",
              formal: "Please do not underestimate your English skills — they are quite good. Regarding the background check, it is a straightforward online form that the school will send to you directly. Processing typically takes approximately one week. I shall add you to our volunteer communications list so that you receive all pertinent updates.",
            },
            alternativeExpressions: [
              {
                textEn: "Oh, your English is better than you think! And yes, background check is standard — easy online form, takes a week. I will get you on the volunteer list right away.",
                textZh: "哦，你的英语比你以为的好！是的，背景调查是标准的——简单的在线表格，一周搞定。我马上把你加到志愿者列表里。",
                actionHint: "鼓励并说明流程",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you! Is there anything I should prepare or bring on the day? And what time should I arrive?",
            textZh: "谢谢！那天我需要准备或带什么吗？我应该几点到？",
            culturalNote: "在美国做志愿者时，提前问清楚时间和需要带什么是负责任的表现。美国人很看重准时和准备充分。",
            casualVersion: "Thanks! Anything I should bring? And what time should I get there?",
            commonMistake: {
              wrong: "What time should I arrive at?",
              correct: "What time should I arrive?",
              explanation: "arrive 后面不需要 at（除非接具体地点），直接问 what time should I arrive 即可。",
            },
            formalityVariants: {
              casual: "Awesome! Do I need to bring anything? What time?",
              standard: "Thank you! Is there anything I should prepare or bring? What time should I arrive?",
              formal: "Thank you very much. Are there any preparations I should make or items I should bring on the day of the event? And what would be the appropriate arrival time?",
            },
          },
          {
            speaker: "them",
            role: "班主任老师",
            textEn: "Just come in comfortable clothes and closed-toe shoes. We will start setting up at 8 AM, and the fair runs from 10 to 2. Oh, and Tommy is going to be SO excited that his mom is volunteering — the kids love seeing their parents at school!",
            textZh: "穿舒适的衣服和包头鞋就行。我们早上8点开始布置，书展从10点到2点。哦，Tommy 知道妈妈来做志愿者一定会超级兴奋的——孩子们最喜欢在学校看到爸妈了！",
            keyPhrases: [
              { en: "closed-toe shoes", zh: "包头鞋" },
              { en: "setting up", zh: "布置/准备" },
            ],
            casualVersion: "Comfy clothes, closed-toe shoes. Setup at 8 AM, fair is 10 to 2. And Tommy's gonna be SO happy his mom is there — kids love it!",
            culturalNote: "在美国，父母参与学校活动对孩子来说是很大的鼓励。教师提到 Tommy 会很开心是在肯定你的参与对孩子的积极影响。",
            formalityVariants: {
              casual: "Comfy clothes, closed shoes. 8 AM setup, fair 10-2. Tommy's gonna love having his mom there!",
              standard: "Comfortable clothes and closed-toe shoes. Setup is at 8 AM, the fair runs 10 to 2. Tommy will be thrilled to see his mom volunteering!",
              formal: "We would ask that you wear comfortable attire and closed-toe footwear. Setup begins at 8 AM, and the fair itself runs from 10 AM to 2 PM. I am certain that Tommy will be absolutely delighted to see his mother participating — children are always so proud when their parents are involved in school activities.",
            },
            alternativeExpressions: [
              {
                textEn: "Nothing fancy — comfortable clothes and sneakers are perfect. Be here at 8 for setup, fair starts at 10. Trust me, Tommy is going to brag to everyone that his mom is helping!",
                textZh: "不用穿得正式——舒适的衣服和运动鞋就完美了。8点来布置，10点开始。相信我，Tommy 会跟所有人炫耀他妈妈在帮忙！",
                actionHint: "说明当天安排并鼓励",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "parent-volunteer-intermediate",
        titleZh: "书展当天志愿服务",
        titleEn: "Volunteering at the Book Fair",
        description: "书展当天帮忙并和其他家长互动",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "班主任老师",
            textEn: "Good morning! Thank you for coming. Let me show you your station. You will be at the checkout table — helping kids count their money, making change, and putting books in bags. There is a price list right here. Do you have any questions before we start?",
            textZh: "早上好！谢谢你来。让我带你看看你的岗位。你在收银台——帮孩子们数钱、找零、把书装袋。价目表就在这里。开始之前有什么问题吗？",
            keyPhrases: [
              { en: "checkout table", zh: "收银台" },
              { en: "making change", zh: "找零" },
            ],
            casualVersion: "Morning! Thanks for being here. You're at the checkout table — help kids count money, make change, bag the books. Price list is right here. Questions?",
            culturalNote: "Making change 是找零的意思。在美国书展，小学生通常带现金来买书，志愿者需要帮他们计算是否够钱、找零等。",
            formalityVariants: {
              casual: "Hey, you're here! You're on checkout — money counting, change, bagging books. Price list here. Ready?",
              standard: "Thank you for coming. Your station is the checkout table. You will help kids count money, make change, and bag books. The price list is here.",
              formal: "Good morning and welcome. I am pleased to show you to your assigned station. You will be managing the checkout table, where your responsibilities will include assisting children with counting their money, providing correct change, and packaging their book purchases. The price list is posted here for your reference. Do you have any questions before we begin?",
            },
            alternativeExpressions: [
              {
                textEn: "Glad you made it! You are going to be our checkout helper today. Kids bring their money, you help them figure out if they have enough, make change, and bag their books. Simple and fun!",
                textZh: "很高兴你来了！你今天是我们的收银助手。孩子们带着钱来，你帮他们看够不够，找零，装袋。简单又有趣！",
                actionHint: "分配岗位并说明职责",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. I am a little nervous about the money part — the American coin system is still confusing to me. Which one is a quarter and which is a dime again?",
            textZh: "明白了。找零的部分我有点紧张——美国的硬币系统对我来说还是很混乱。哪个是 quarter 哪个是 dime 来着？",
            culturalNote: "美国硬币对很多外国人来说很困惑——它们上面没有标明面值数字。penny=1分, nickel=5分, dime=10分(最小的硬币), quarter=25分。dime 虽然面值比 nickel 大但实际尺寸更小，这让很多人困惑。",
            casualVersion: "OK! Bit nervous about the money though — American coins still confuse me. Which is a quarter and which is a dime?",
            commonMistake: {
              wrong: "The American coin system is still confused to me.",
              correct: "The American coin system is still confusing to me.",
              explanation: "confusing 形容事物令人困惑；confused 形容人感到困惑。系统是令人困惑的（confusing），不是感到困惑的（confused）。",
            },
            formalityVariants: {
              casual: "Got it. Bit nervous about the coins though — which is a quarter? Which is a dime? Still mix them up.",
              standard: "I am a little nervous about the money part. The American coin system is still confusing to me. Which one is a quarter and which is a dime?",
              formal: "I understand. I must admit I am somewhat anxious about the monetary aspect, as I still find the American coin denominations rather confusing. Could you remind me which coin is a quarter and which is a dime?",
            },
          },
          {
            speaker: "them",
            role: "班主任老师",
            textEn: "No worries! A quarter is the big silver one — 25 cents. A dime is the tiny silver one — 10 cents. Tricky, right? The dime is smaller but worth more. A nickel is the thick one — 5 cents. And a penny is the copper one — 1 cent. I made you a cheat sheet!",
            textZh: "别担心！quarter 是大的银色硬币——25分。dime 是小的银色硬币——10分。很迷惑吧？dime 更小但面值更大。nickel 是厚的那个——5分。penny 是铜色的——1分。我给你做了个速查表！",
            keyPhrases: [
              { en: "quarter", zh: "25美分硬币" },
              { en: "dime", zh: "10美分硬币" },
              { en: "cheat sheet", zh: "速查表/小抄" },
            ],
            casualVersion: "No worries! Quarter = big silver, 25 cents. Dime = tiny silver, 10 cents. Nickel = thick one, 5 cents. Penny = copper, 1 cent. Here's a cheat sheet!",
            culturalNote: "Cheat sheet 在这里不是作弊的意思，而是快速参考指南。美国人经常在志愿者活动中为新手准备 cheat sheets 来帮助他们上手。",
            formalityVariants: {
              casual: "Easy! Quarter = big silver 25c. Dime = tiny silver 10c. Nickel = thick 5c. Penny = copper 1c. Made you a cheat sheet!",
              standard: "A quarter is the big silver one, 25 cents. A dime is the tiny silver one, 10 cents. A nickel is the thick one, 5 cents. A penny is the copper one, 1 cent. Here is a cheat sheet!",
              formal: "Allow me to clarify: a quarter is the larger silver coin valued at 25 cents. A dime is the smaller silver coin worth 10 cents — which is counterintuitive, as it is physically smaller yet of greater value. A nickel is the thicker coin at 5 cents, and a penny is the copper-colored coin worth 1 cent. I have prepared a reference guide for your convenience.",
            },
            alternativeExpressions: [
              {
                textEn: "I gotcha! Here is the easy way to remember: quarter is the biggest, dime is the smallest (but worth more than a nickel!), nickel is the thick medium one, penny is copper. I taped a picture guide right by the register for you.",
                textZh: "我来帮你！简单记法：quarter 最大，dime 最小（但比 nickel 值钱！），nickel 是厚的中等大小的，penny 是铜色的。我在收银台旁边贴了一张图片指南给你。",
                actionHint: "帮助辨认硬币",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That cheat sheet is a lifesaver! OK, I think I am ready. Oh — a little boy is coming to the table. Let me try... Hi sweetie, what books did you pick?",
            textZh: "这个速查表太有用了！好，我觉得我准备好了。哦——一个小男孩走过来了。让我试试...嗨宝贝，你选了什么书？",
            culturalNote: "美国大人对不认识的小孩用 sweetie, honey, buddy 等亲切称呼是很常见的，尤其在学校环境中。这不会被认为不合适。",
            casualVersion: "That's a lifesaver! OK, I'm ready. Oh, a kid's coming! Let me try... Hey buddy, whatcha got?",
            commonMistake: {
              wrong: "Let me try... Hi kid, what books you picked?",
              correct: "Let me try... Hi sweetie, what books did you pick?",
              explanation: "对小孩用 sweetie/buddy 比 kid 更亲切；疑问句需要助动词 did。",
            },
            formalityVariants: {
              casual: "That's perfect! OK ready. Oh, here comes someone! Hey buddy, what books ya got?",
              standard: "That cheat sheet is a lifesaver. I think I am ready. Hi sweetie, what books did you pick?",
              formal: "That reference guide is invaluable, thank you. I believe I am prepared now. Hello there, what books have you selected today?",
            },
          },
          {
            speaker: "them",
            role: "班主任老师",
            textEn: "You are a natural! See, I told you your English is great. The kids do not care about perfect grammar — they just want someone who is kind and patient. You are doing amazing. I will be right over here if you need anything.",
            textZh: "你天生就适合！看，我说过你英语很好。孩子们不在乎完美的语法——他们只想要友善和耐心的人。你做得太棒了。如果需要什么我就在旁边。",
            keyPhrases: [
              { en: "you are a natural", zh: "你天生就适合" },
              { en: "doing amazing", zh: "做得太棒了" },
            ],
            casualVersion: "You're a natural! See? Kids don't care about perfect grammar — just be kind and patient. You're killing it! I'm right here if you need me.",
            culturalNote: "You're a natural 是很高的夸奖，意思是你天生就擅长这件事。在美国文化中，对新手给予大量正面鼓励是常见的。",
            formalityVariants: {
              casual: "Nailed it! See, kids just want someone nice. You're doing great! Holler if you need me.",
              standard: "You are a natural! Kids just want someone kind and patient. You are doing amazing. I am right here if you need anything.",
              formal: "You have a natural talent for this! As I mentioned, the children are far more attuned to kindness and patience than grammatical precision. You are performing wonderfully. Please do not hesitate to call upon me should you require any assistance — I shall be nearby.",
            },
            alternativeExpressions: [
              {
                textEn: "Look at you — the kids already love you! This is exactly why we need parent volunteers. You are doing fantastic. Just keep being your warm, friendly self!",
                textZh: "看你——孩子们已经喜欢你了！这就是为什么我们需要家长志愿者。你做得太好了。继续做你温暖友善的自己就好！",
                actionHint: "鼓励和肯定",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you, that means a lot to me. This is actually really fun! Maybe I can volunteer for the carnival too. I will sign up when I get home.",
            textZh: "谢谢，这对我意义重大。这真的很有趣！也许我也可以参加嘉年华的志愿者。回家后我就报名。",
            culturalNote: "在美国，志愿者活动是融入社区的最佳方式之一。通过学校志愿者认识其他家长，建立社交圈，这对新移民家庭非常有价值。",
            casualVersion: "Thanks, that really means a lot! This is so much fun! I might do the carnival too — I'll sign up tonight.",
            commonMistake: {
              wrong: "Thank you, that means a lot for me.",
              correct: "Thank you, that means a lot to me.",
              explanation: "means a lot to me 是固定搭配，用 to 不用 for。",
            },
            formalityVariants: {
              casual: "Aw thanks! This is honestly so fun. Might do the carnival too — signing up tonight!",
              standard: "Thank you, that means a lot to me. This is really fun. I might volunteer for the carnival too!",
              formal: "Thank you, your encouragement means a great deal to me. I am genuinely enjoying this experience. I am now considering volunteering for the carnival as well — I shall complete the registration this evening.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 理解成绩单 ====================
  {
    id: "education-report-card",
    category: "education",
    titleZh: "理解成绩单",
    titleEn: "Understanding Report Cards",
    description: "理解美国学校的成绩单和评分系统",
    otherRole: "班主任老师",
    otherRoleIcon: "📝",
    flows: [
      {
        id: "report-card-basic",
        titleZh: "看懂成绩单",
        titleEn: "Reading the Report Card",
        description: "第一次收到美国学校成绩单，理解评分系统",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi Mr. Chen, I received my daughter Lily's report card but I am having trouble understanding the grading system. In China we used numerical scores, but here I see letters and some comments I do not fully understand.",
            textZh: "你好陈老师，我收到了女儿 Lily 的成绩单，但我不太理解评分系统。在中国我们用数字分数，但这里我看到字母和一些我不太理解的评语。",
            culturalNote: "美国学校的评分系统和中国差异很大。中国用百分制数字（如98分），美国用字母等级（A-F）或描述性评价。这是中国家长最困惑的地方之一。",
            casualVersion: "Hi Mr. Chen, got Lily's report card but I'm confused about the grading system. In China we had numbers, here it's all letters and comments I don't totally get.",
            commonMistake: {
              wrong: "I received my daughter Lily's report card but I have trouble to understand the grading system.",
              correct: "I received my daughter Lily's report card but I am having trouble understanding the grading system.",
              explanation: "have trouble + 动名词 (understanding)，不用 to understand。用进行时 am having 表达当前的困惑。",
            },
            formalityVariants: {
              casual: "Hey Mr. Chen, Lily's report card is confusing me. Chinese schools use numbers — what do these letters and comments mean?",
              standard: "Hi Mr. Chen, I received Lily's report card but I am having trouble understanding the grading system. In China we used numerical scores.",
              formal: "Good morning, Mr. Chen. I have received Lily's report card; however, I find myself uncertain about the American grading system. In the Chinese education system, we utilized numerical scoring, and I am unfamiliar with the letter-based grades and written comments used here.",
            },
          },
          {
            speaker: "them",
            role: "班主任老师",
            textEn: "Of course, I am happy to walk you through it! In our school, we use letter grades: A means excellent, B is good, C is average, D is below average, and F means failing. Lily got mostly A's and B's, which is great! She is doing very well.",
            textZh: "当然，我很乐意带你了解！在我们学校，我们用字母等级：A 代表优秀，B 是良好，C 是中等，D 是低于平均，F 代表不及格。Lily 大部分是 A 和 B，非常好！她表现得很好。",
            keyPhrases: [
              { en: "letter grades", zh: "字母等级" },
              { en: "failing", zh: "不及格" },
              { en: "A's and B's", zh: "A 和 B" },
            ],
            casualVersion: "Sure! We use letter grades: A is excellent, B is good, C is average, D is below average, F is failing. Lily's got mostly A's and B's — she's doing great!",
            culturalNote: "美国评分没有E级——直接从D跳到F（F代表Fail）。A=90-100%, B=80-89%, C=70-79%, D=60-69%, F=59%以下。注意没有E这个等级。",
            formalityVariants: {
              casual: "Totally! A = excellent, B = good, C = average, D = below average, F = failing. Lily's mostly A's and B's — awesome!",
              standard: "In our school, letter grades go from A (excellent) to F (failing). Lily got mostly A's and B's, which is great.",
              formal: "Certainly, I would be pleased to explain. Our institution employs a letter-based grading system: A denotes excellent performance, B represents good achievement, C indicates average work, D signifies below-average performance, and F indicates a failing grade. I am pleased to report that Lily has earned predominantly A and B grades, reflecting very strong academic performance.",
            },
            alternativeExpressions: [
              {
                textEn: "Happy to explain! Think of it like this: A is the highest, then B, C, D, and F is the lowest. There is no E! Lily is right up at the top with A's and B's — you should be proud!",
                textZh: "很高兴解释！这样想：A 最高，然后是 B、C、D，F 最低。没有 E！Lily 在顶部拿了 A 和 B——你应该骄傲！",
                actionHint: "解释评分系统",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That is good to hear! But I see she got a C in math. In China, that would be considered a bad grade. Is C really that bad here?",
            textZh: "很高兴听到这个！但我看到她数学得了 C。在中国，这会被认为是差的成绩。C 在这里真的那么差吗？",
            culturalNote: "在中国教育文化中，70-79分（相当于C）会被认为不好。但在美国，C 代表 average（中等），虽然不突出但不是差。不同文化对成绩的期望值差异很大。",
            casualVersion: "That's great! But she got a C in math. In China that'd be a bad grade. Is C really that bad here?",
            commonMistake: {
              wrong: "Is C really very bad here?",
              correct: "Is C really that bad here?",
              explanation: "that bad 中的 that 用作副词加强语气，比 very bad 更自然。",
            },
            formalityVariants: {
              casual: "Nice! But a C in math — in China that'd be bad. Is it bad here too?",
              standard: "That is good to hear. But she got a C in math. In China, that would be considered bad. Is C really that bad here?",
              formal: "That is reassuring to hear. However, I notice she received a C in mathematics. In the Chinese educational context, an equivalent score would be considered quite poor. Could you help me understand how a C grade is perceived within the American system?",
            },
          },
          {
            speaker: "them",
            role: "班主任老师",
            textEn: "Great question! C is not bad — it means she is meeting grade-level expectations. But it does mean there is room for improvement. The teacher's comment says she is strong in concepts but needs to work on showing her work in problem-solving. In American schools, we care a lot about the process, not just the answer.",
            textZh: "好问题！C 不算差——说明她达到了年级标准。但确实意味着有提升空间。老师的评语说她概念掌握很好，但需要在解题时展示思路。在美国学校，我们很看重过程，不只是答案。",
            keyPhrases: [
              { en: "meeting grade-level expectations", zh: "达到年级标准" },
              { en: "showing her work", zh: "展示解题过程" },
              { en: "room for improvement", zh: "提升空间" },
            ],
            casualVersion: "C isn't bad — it means she's right where she should be. But there's room to grow. The teacher says she's great with concepts but needs to show her work more. We really care about the process here, not just getting the right answer.",
            culturalNote: "Showing your work（展示解题过程）是美国数学教育非常强调的。即使答案正确，如果不写出过程，也会扣分。这和中国数学教育更注重最终答案不同。",
            formalityVariants: {
              casual: "C is fine — it means she's meeting expectations. Teacher says she knows the concepts but needs to show her work more. It's about the process, not just the answer.",
              standard: "C is not bad — it means she is meeting expectations. The teacher notes she is strong in concepts but needs to show her work. In American schools, we value the process.",
              formal: "A C grade should not be a cause for undue concern — it indicates that Lily is meeting the grade-level expectations. However, it does suggest potential for growth. The teacher's evaluation notes that Lily demonstrates strong conceptual understanding but should focus on articulating her problem-solving process more thoroughly. In American education, we place considerable emphasis on methodology and the demonstration of reasoning, not merely the final answer.",
            },
            alternativeExpressions: [
              {
                textEn: "C is definitely not a bad grade — think of it as she is right on track but has room to grow. The key feedback is about showing her work. In math here, how you solve it matters as much as getting the right answer.",
                textZh: "C 绝对不是差成绩——可以理解为她在正轨上但有成长空间。关键反馈是关于展示解题过程。在这里的数学课上，怎么解题和得出正确答案一样重要。",
                actionHint: "解释 C 的含义和解题过程的重要性",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I see, that is very different from China. What about the GPA — I saw a number 3.4 on the report card. Is that good?",
            textZh: "明白了，这和中国很不一样。那 GPA 呢——我在成绩单上看到一个数字 3.4。这算好吗？",
            culturalNote: "GPA（Grade Point Average）是美国教育系统的核心指标。满分 4.0。A=4.0, B=3.0, C=2.0, D=1.0, F=0。3.4 的 GPA 相当于 B+ 水平，是不错的成绩。",
            casualVersion: "Oh OK, that's really different from China. What about GPA? I saw 3.4. Is that good?",
            commonMistake: {
              wrong: "What about the GPA? I saw a number 3.4 in the report card.",
              correct: "What about the GPA? I saw a number 3.4 on the report card.",
              explanation: "在成绩单上看到什么用 on the report card，不用 in。",
            },
            formalityVariants: {
              casual: "Oh, interesting. And the GPA — 3.4? Good or bad?",
              standard: "What about the GPA — I saw 3.4 on the report card. Is that good?",
              formal: "I appreciate the explanation — that is quite different from the Chinese system. I also noticed a GPA of 3.4 on the report card. Could you help me understand whether that represents a satisfactory level of achievement?",
            },
          },
          {
            speaker: "them",
            role: "班主任老师",
            textEn: "3.4 is very good! GPA goes from 0 to 4.0. Here is how it works: an A gives you 4 points, B is 3, C is 2, D is 1, and F is 0. A 3.4 means Lily is performing above average overall. For reference, a 3.5 and above is typically considered honors level. She is very close!",
            textZh: "3.4 非常好！GPA 从0到4.0。是这样算的：A 得4分，B 是3分，C 是2分，D 是1分，F 是0分。3.4 意味着 Lily 总体表现高于平均。作为参考，3.5 及以上通常被认为是荣誉水平。她非常接近了！",
            keyPhrases: [
              { en: "GPA", zh: "绩点平均分" },
              { en: "honors level", zh: "荣誉水平" },
              { en: "above average", zh: "高于平均" },
            ],
            casualVersion: "3.4 is great! GPA is 0-4. A=4, B=3, C=2, D=1, F=0. 3.4 means she's doing above average. 3.5+ is honors — she's super close!",
            culturalNote: "美国学校的 honors（荣誉）通常要求 GPA 3.5 以上。Dean's List（院长名单）是更高的荣誉，通常要求 3.7 以上。这些都是简历上的加分项。",
            formalityVariants: {
              casual: "3.4 is awesome! It's on a 0-4 scale. A=4, B=3, C=2, D=1, F=0. 3.4 is above average, and 3.5+ is honors. She's almost there!",
              standard: "3.4 is very good! GPA ranges from 0 to 4.0. A is 4, B is 3, C is 2, D is 1, F is 0. A 3.4 is above average. 3.5 and above is honors level — she is close!",
              formal: "A GPA of 3.4 is indeed quite commendable. The Grade Point Average operates on a 4.0 scale, with A corresponding to 4.0, B to 3.0, C to 2.0, D to 1.0, and F to 0. A 3.4 indicates that Lily is performing appreciably above average. For context, a GPA of 3.5 or higher is generally recognized as honors-level achievement, so she is remarkably close to that distinction.",
            },
            alternativeExpressions: [
              {
                textEn: "A 3.4 GPA is something to be proud of! It means she is doing better than average in most subjects. Just a hair below honors — if that math grade comes up even a little, she could make the honor roll!",
                textZh: "3.4 的 GPA 值得骄傲！意味着她在大多数科目上高于平均。离荣誉就差一点——如果数学成绩提高一点点，她就能上荣誉榜了！",
                actionHint: "解释 GPA 并鼓励",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That makes me feel much better. Thank you for explaining all of this, Mr. Chen. The American system is so different, but now I understand it much better!",
            textZh: "这让我放心多了。谢谢你解释这一切，陈老师。美国的系统太不一样了，但现在我理解多了！",
            culturalNote: "美国老师通常很愿意花时间帮家长理解评分系统。不要害怕问问题——学校鼓励家长参与，理解成绩单是第一步。",
            casualVersion: "That makes me feel way better! Thanks for explaining everything. The American system is so different but now I get it!",
            commonMistake: {
              wrong: "Thank you for explain all of this.",
              correct: "Thank you for explaining all of this.",
              explanation: "for 后面接动名词 explaining，不接动词原形。",
            },
            formalityVariants: {
              casual: "Oh phew, that's a relief! Thanks for walking me through it. So different from China but makes sense now!",
              standard: "That makes me feel much better. Thank you for explaining. The American system is very different but now I understand it!",
              formal: "That is most reassuring. I sincerely appreciate you taking the time to explain the American grading system to me so clearly. It is considerably different from what I was accustomed to in China, but I now have a much better understanding.",
            },
          },
        ],
      },
      {
        id: "report-card-intermediate",
        titleZh: "家长会和学业计划",
        titleEn: "Parent-Teacher Conference",
        description: "在家长会上讨论孩子的学业和进步计划",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "班主任老师",
            textEn: "Welcome to our parent-teacher conference! I have been looking forward to discussing Lily's progress with you. Overall, she is a wonderful student — attentive, hardworking, and very polite. I do have a few areas I would like to discuss though.",
            textZh: "欢迎来到家长会！我一直期待和你讨论 Lily 的进步。总体来说，她是个很棒的学生——专心、刻苦、非常有礼貌。不过我有几个方面想讨论一下。",
            keyPhrases: [
              { en: "parent-teacher conference", zh: "家长会" },
              { en: "attentive", zh: "专心的" },
            ],
            casualVersion: "Welcome! Excited to chat about Lily. She's great — focused, hardworking, super polite. I do have a couple things to go over though.",
            culturalNote: "美国的 parent-teacher conference 通常是一对一的（家长和老师单独谈），不像中国的家长会是全班家长一起开。",
            formalityVariants: {
              casual: "Hey, welcome! Lily's a great kid — attentive, hardworking, polite. Just a couple things to talk about.",
              standard: "Welcome to our conference. Lily is a wonderful student overall. I have a few areas I would like to discuss.",
              formal: "Welcome to our parent-teacher conference. I have been very much looking forward to this opportunity to discuss Lily's academic progress with you. On the whole, she is an exemplary student — consistently attentive, diligent in her studies, and unfailingly courteous. There are, however, several areas I would like to bring to your attention.",
            },
            alternativeExpressions: [
              {
                textEn: "So glad you could make it! Lily is doing really well overall. Before we get into the details, I want to say she is a joy to have in class. Now, let me share a few observations.",
                textZh: "很高兴你能来！Lily 总体做得很好。在谈细节之前，我想说她在班里是一种快乐。现在让我分享一些观察。",
                actionHint: "开始家长会",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you for the kind words. What areas are you concerned about? I want to support her as much as I can at home.",
            textZh: "谢谢你的好话。你对哪些方面有顾虑？我想在家尽可能支持她。",
            culturalNote: "在美国家长会上，表达你想在家支持孩子学习的意愿会得到老师的赞赏。美国教育强调家校合作（parent-school partnership）。",
            casualVersion: "Thanks! What's up? I want to help her as much as I can at home.",
            commonMistake: {
              wrong: "What areas are you worry about?",
              correct: "What areas are you concerned about?",
              explanation: "be concerned about 是固定搭配。worried about 也可以，但 concerned 在学校语境中更正式。",
            },
            formalityVariants: {
              casual: "Aw, thanks! So what's the concern? I want to help from my end.",
              standard: "Thank you. What areas are you concerned about? I want to support her at home.",
              formal: "Thank you for those kind remarks. Could you share which specific areas you feel require attention? I am very committed to supporting her academic development from home.",
            },
          },
          {
            speaker: "them",
            role: "班主任老师",
            textEn: "Two things. First, class participation — Lily rarely raises her hand, even when I can tell she knows the answer. Second, her writing is good technically, but she tends to play it safe. I want to see more of her own opinions and creative thinking. These are not big problems, more like areas where she can really shine.",
            textZh: "两件事。第一，课堂参与——Lily 很少举手，即使我能看出她知道答案。第二，她的写作在技术上很好，但她倾向于保守。我想看到更多她自己的观点和创造性思维。这些不是大问题，更像是她可以真正发光的地方。",
            keyPhrases: [
              { en: "class participation", zh: "课堂参与" },
              { en: "play it safe", zh: "保守/求稳" },
              { en: "creative thinking", zh: "创造性思维" },
            ],
            casualVersion: "Two things: she barely raises her hand even when she knows the answer, and her writing is technically fine but she plays it safe. I wanna see more of her own voice. Not big issues — just areas she could really shine.",
            culturalNote: "中国学生在美国课堂上不举手是非常普遍的问题。这源于中国教育文化中不鼓励出风头。但在美国，课堂参与往往直接影响成绩。play it safe（求稳）在中国文化中是美德，但美国教育更鼓励冒险和表达个人观点。",
            formalityVariants: {
              casual: "She doesn't raise her hand much, and her writing is safe — technically good but I want to see more of HER. Not bad stuff, just areas she could grow.",
              standard: "Lily rarely raises her hand, and her writing plays it safe. I want to see more of her own opinions. These are areas where she can really shine.",
              formal: "I have identified two areas for growth. First, regarding class participation — Lily tends to refrain from volunteering answers, even when it is evident she possesses the knowledge. Second, while her written work is technically proficient, she gravitates toward conservative, predictable responses. I would very much like to see her express more of her personal perspectives and demonstrate greater creative independence. I want to emphasize that these are not deficiencies, but rather opportunities for her to truly distinguish herself.",
            },
            alternativeExpressions: [
              {
                textEn: "She knows the material — I see it in her eyes! But she does not speak up. And in writing, she gives me the safe answer instead of taking risks. I think she has so much more to offer and I want to help bring that out.",
                textZh: "她懂这些内容——我从她的眼神就看得出！但她不发言。写作中，她给我安全的答案而不是冒险尝试。我觉得她有更多可以展现的，我想帮她发挥出来。",
                actionHint: "指出课堂参与和写作个性问题",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That makes sense. In China, students are taught not to speak up unless called on. I think she is just worried about making mistakes in front of her classmates. How can we encourage her?",
            textZh: "这有道理。在中国，学生被教导不要主动发言，除非被叫到。我觉得她只是担心在同学面前犯错。我们怎么鼓励她？",
            culturalNote: "向老师解释文化差异背景是很有价值的——它帮助老师理解这不是孩子性格问题，而是文化适应问题。美国老师通常很感激这种跨文化视角。",
            casualVersion: "That makes sense. In China, kids are taught to only speak when called on. I think she's just scared of making mistakes in front of others. What can we do?",
            commonMistake: {
              wrong: "How can we encourage her to speak up?",
              correct: "How can we encourage her?",
              explanation: "这句没有错误。两种说法都可以。更简洁的表达有时更有力。",
            },
            formalityVariants: {
              casual: "Yeah, in China kids only talk when asked. She's probably afraid of messing up. How can we help?",
              standard: "In China, students are taught not to speak unless called on. She is worried about making mistakes. How can we encourage her?",
              formal: "That is entirely understandable. In the Chinese educational tradition, students are generally expected to speak only when directly addressed by the teacher. I suspect Lily is apprehensive about making errors in front of her peers. What strategies would you recommend to encourage her participation?",
            },
          },
          {
            speaker: "them",
            role: "班主任老师",
            textEn: "Thank you for sharing that context — it really helps me understand! Here is my plan: I will start calling on her in low-pressure situations, like partner discussions, before whole-class sharing. At home, maybe you could ask her about her opinions on things — what she likes, dislikes, and why. The goal is to help her see that her ideas matter, even when they are not perfect.",
            textZh: "谢谢你分享这个背景——真的帮助我理解！这是我的计划：我会先在低压力的情境下叫她，比如小组讨论，然后再全班分享。在家里，也许你可以问问她对事情的看法——她喜欢什么、不喜欢什么、为什么。目标是帮她认识到她的想法很重要，即使不完美。",
            keyPhrases: [
              { en: "low-pressure situations", zh: "低压力的情境" },
              { en: "partner discussions", zh: "小组/结对讨论" },
              { en: "her ideas matter", zh: "她的想法很重要" },
            ],
            casualVersion: "Thanks for the context! Here's my plan: I'll start with low-key stuff — pair work, small groups — before bigger class discussions. At home, ask her opinions on things. Help her feel like her ideas matter, even if they're not perfect.",
            culturalNote: "美国教育的核心理念之一是 every voice matters（每个声音都重要）。老师的渐进式方案（先小组后全班）是专业的教学策略，针对不同文化背景的学生很有效。",
            formalityVariants: {
              casual: "Thanks for that! My plan: start small — pair work, then small groups, then class. At home, ask her what she thinks about stuff. She needs to know her ideas count.",
              standard: "Thank you for that context. I will start with low-pressure situations like partner discussions. At home, ask her opinions on things. The goal is helping her see her ideas matter.",
              formal: "I greatly appreciate that cultural insight. My approach will be to initially engage her in lower-pressure settings, such as partner discussions, before gradually transitioning to whole-class participation. At home, I would suggest encouraging her to articulate her opinions on various matters — her preferences, her perspectives, and her reasoning. Our shared objective should be to cultivate her confidence in the value of her own ideas, even when they may not be fully formed.",
            },
            alternativeExpressions: [
              {
                textEn: "That context is so helpful! I will scaffold it — start with partner work where it is safe, then small groups, then whole class. And at home, make it a habit to ask her what she thinks about everyday things. Build that muscle!",
                textZh: "这个背景太有帮助了！我会循序渐进——先从安全的同桌讨论开始，然后小组，然后全班。在家里，养成问她对日常事务看法的习惯。锻炼这个能力！",
                actionHint: "提供渐进式鼓励方案",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That is a wonderful plan. I will do my part at home. Thank you for understanding the cultural difference and being so patient with Lily. Is there anything else I should know?",
            textZh: "这是个很好的计划。我会在家做我的部分。谢谢你理解文化差异并对 Lily 这么耐心。还有什么我应该知道的吗？",
            culturalNote: "感谢老师理解文化差异在美国家长会中很受欢迎。美国教育系统越来越重视文化敏感性（cultural sensitivity），老师通常会感激家长提供跨文化视角。",
            casualVersion: "Great plan! I'll work on it at home too. Thanks for getting the cultural stuff and being so patient with Lily. Anything else?",
            commonMistake: {
              wrong: "Thank you for understanding the culture different.",
              correct: "Thank you for understanding the cultural difference.",
              explanation: "cultural 是形容词修饰名词 difference。culture 是名词，different 是形容词。",
            },
            formalityVariants: {
              casual: "Love that plan! I'll do my part at home. Thanks for being so understanding about the cultural stuff. Anything else I should know?",
              standard: "That is a wonderful plan. I will do my part at home. Thank you for understanding the cultural difference. Is there anything else?",
              formal: "That is an excellent and thoughtful plan. I shall certainly do my part to reinforce this at home. I am deeply grateful for your understanding of the cultural differences and your patience in working with Lily. Are there any additional matters I should be aware of?",
            },
          },
        ],
      },
    ],
  },
  // ==================== 签同意书 ====================
  {
    id: "education-permission-slip",
    category: "education",
    titleZh: "签同意书",
    titleEn: "Permission Slips",
    description: "理解和签署学校活动的家长同意书",
    otherRole: "班主任老师",
    otherRoleIcon: "✏️",
    flows: [
      {
        id: "permission-slip-basic",
        titleZh: "理解同意书",
        titleEn: "Understanding Permission Slips",
        description: "第一次收到学校的家长同意书，理解内容并签署",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi Mrs. Wang, my son brought home a permission slip but I am not sure I understand everything on it. Could you help me go through it?",
            textZh: "你好王老师，我儿子带回了一张同意书但我不太确定我理解上面所有的内容。你能帮我过一遍吗？",
            culturalNote: "Permission slip（家长同意书）是美国学校的标准文件，要求家长签字允许孩子参加课外活动、外出旅行等。中国学校较少使用这种正式的书面同意制度。",
            casualVersion: "Hi Mrs. Wang, my kid brought home a permission slip and I'm not totally sure what it all means. Can you help?",
            commonMistake: {
              wrong: "My son brings home a permission slip but I don't understand it.",
              correct: "My son brought home a permission slip but I am not sure I understand everything on it.",
              explanation: "带回家是过去时 brought（已经发生的事）；I am not sure I understand 比 I don't understand 更委婉。",
            },
            formalityVariants: {
              casual: "Hey Mrs. Wang, my son got this permission slip — can you walk me through it? Not totally sure what everything means.",
              standard: "Hi Mrs. Wang, my son brought home a permission slip but I am not sure I understand everything. Could you help me go through it?",
              formal: "Good morning, Mrs. Wang. My son brought home a permission slip and I would appreciate your assistance in understanding its contents. Some of the language is unfamiliar to me.",
            },
          },
          {
            speaker: "them",
            role: "班主任老师",
            textEn: "Of course! This is for our field trip to the Natural History Museum next Friday. Basically, you are giving permission for your child to leave the school campus with us. It also lists the departure time, return time, and what your child needs to bring.",
            textZh: "当然！这是为下周五去自然历史博物馆的实地考察。基本上，你是在许可你的孩子和我们一起离开学校。上面还列了出发时间、返回时间、以及你的孩子需要带什么。",
            keyPhrases: [
              { en: "field trip", zh: "实地考察/校外参观" },
              { en: "school campus", zh: "学校校园" },
              { en: "permission", zh: "许可/同意" },
            ],
            casualVersion: "Sure! It's for the field trip to the Natural History Museum next Friday. You're basically saying it's OK for your kid to go off campus with us. It's got departure time, return time, and a packing list.",
            culturalNote: "Field trip（实地考察/校外参观）是美国 K-12 教育的重要组成部分。学校必须获得家长书面同意才能带学生离开校园，这是法律要求。",
            formalityVariants: {
              casual: "It's for next Friday's field trip to the Natural History Museum. You're giving the OK for your kid to leave school with us. Times and a packing list are on there.",
              standard: "This is for our field trip to the Natural History Museum next Friday. You are giving permission for your child to leave campus with us. It lists the times and what to bring.",
              formal: "This permission slip pertains to our upcoming field trip to the Natural History Museum, scheduled for next Friday. By signing it, you are formally authorizing your child to leave the school campus under our supervision. The document also specifies the departure and return times, as well as any items your child will need to bring.",
            },
            alternativeExpressions: [
              {
                textEn: "This is just for our museum trip next Friday! It says your child can come with us off campus. All the details — times, what to bring — are right there. Pretty straightforward!",
                textZh: "这只是为下周五的博物馆之行！说的是你的孩子可以跟我们离开校园。所有细节——时间、带什么——都在上面。很简单的！",
                actionHint: "简单说明同意书内容",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "OK, that makes sense. But there is a section about liability waiver and emergency medical treatment authorization. What does that mean exactly?",
            textZh: "好的，这个我明白。但有一部分关于免责声明和紧急医疗授权。那具体是什么意思？",
            culturalNote: "Liability waiver（免责声明）和 emergency medical treatment authorization（紧急医疗授权）是美国同意书上常见的法律条款。中国家长通常不熟悉这些概念。",
            casualVersion: "Got it. But what's this liability waiver and emergency medical treatment part? What does that mean?",
            commonMistake: {
              wrong: "What does that mean exactly?",
              correct: "What does that mean exactly?",
              explanation: "这句语法正确。注意 liability waiver 中 liability 的发音 /ˌlaɪəˈbɪləti/。",
            },
            formalityVariants: {
              casual: "OK got it. But the liability waiver and emergency medical thing — what's that about?",
              standard: "There is a section about a liability waiver and emergency medical treatment authorization. What does that mean exactly?",
              formal: "I understand the general purpose. However, I noticed sections pertaining to a liability waiver and an emergency medical treatment authorization. Could you please explain what those entail precisely?",
            },
          },
          {
            speaker: "them",
            role: "班主任老师",
            textEn: "Good question! The liability waiver means you acknowledge there are some risks with any off-campus activity — it does not mean the school is not responsible for safety. The emergency medical part means that if your child gets hurt and you cannot be reached, you give the school permission to seek medical treatment. It is all very standard.",
            textZh: "好问题！免责声明意味着你承认任何校外活动都有一些风险——但不代表学校不对安全负责。紧急医疗部分意味着如果你的孩子受伤而联系不上你，你授权学校寻求医疗救治。这都是非常标准的。",
            keyPhrases: [
              { en: "liability waiver", zh: "免责声明/责任豁免" },
              { en: "emergency medical treatment", zh: "紧急医疗救治" },
              { en: "standard", zh: "标准的/惯例" },
            ],
            casualVersion: "Great question! Liability waiver = you know there's some risk with any trip, but school is still keeping kids safe. Medical part = if your kid gets hurt and we can't reach you, we can get them medical help. Totally standard stuff.",
            culturalNote: "美国的 liability waiver 文化非常普遍，几乎所有活动都有。签了不等于放弃追责权——只是确认你了解存在固有风险。紧急医疗授权在美国是必需的，因为没有家长授权，医院可能延迟治疗。",
            formalityVariants: {
              casual: "Liability waiver = you know there's some risk. Medical part = we can get help if we can't reach you. All super standard.",
              standard: "The liability waiver acknowledges some inherent risks with off-campus activities. The medical part authorizes emergency treatment if you cannot be reached. Both are standard.",
              formal: "The liability waiver is an acknowledgment that any off-campus activity carries some inherent risk; however, it in no way diminishes the school's obligation to maintain student safety. The emergency medical authorization grants the school permission to pursue medical treatment for your child in the event of an injury, should we be unable to contact you. Both of these provisions are entirely standard in American educational settings.",
            },
            alternativeExpressions: [
              {
                textEn: "Think of it this way: the waiver just says you understand field trips have some natural risks, like any outing. And the medical part means if something happens and we cannot call you, we can get your child help right away instead of waiting. Every school does this.",
                textZh: "这样想：免责声明只是说你理解实地考察和任何外出一样有一些自然风险。医疗部分意味着如果出了事联系不上你，我们可以马上给你的孩子寻求帮助而不是等着。每个学校都这样做。",
                actionHint: "用简单的话解释法律条款",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "OK, I understand now. I see I need to fill in emergency contact information and list any allergies. Should I sign at the bottom? Is there a deadline to return it?",
            textZh: "好的，我现在明白了。我看到我需要填写紧急联系人信息和列出过敏情况。我在下面签名就行了吗？有交回的截止日期吗？",
            culturalNote: "美国同意书通常要求填写紧急联系人和过敏/医疗信息。及时交回很重要——如果没有签好的同意书，孩子不能参加活动。",
            casualVersion: "OK, got it. I need to fill in emergency contacts and allergies. Just sign at the bottom? When do I need to turn it in?",
            commonMistake: {
              wrong: "Is there a deadline to give back it?",
              correct: "Is there a deadline to return it?",
              explanation: "return 比 give back 更正式；代词 it 在 give back 中应放在中间：give it back。",
            },
            formalityVariants: {
              casual: "Got it! Fill in contacts and allergies, sign the bottom. When's it due back?",
              standard: "I need to fill in emergency contacts and allergies, and sign at the bottom. Is there a deadline to return it?",
              formal: "I understand. I see that I am required to provide emergency contact information and document any allergies. Shall I sign at the bottom of the form? And is there a specific deadline by which the completed slip should be returned?",
            },
          },
          {
            speaker: "them",
            role: "班主任老师",
            textEn: "Yes, sign and date at the bottom. The deadline is next Wednesday — if we do not get the slip back, unfortunately your child will not be able to join the trip. Also, the form mentions a five-dollar fee for the bus. You can send cash or a check in a sealed envelope with your child's name on it.",
            textZh: "是的，在底部签名和写日期。截止日期是下周三——如果我们没收到同意书，很遗憾你的孩子不能参加。另外，表格提到了五美元的巴士费。你可以让你的孩子带现金或支票，装在写有孩子名字的密封信封里。",
            keyPhrases: [
              { en: "sign and date", zh: "签名和注明日期" },
              { en: "sealed envelope", zh: "密封信封" },
              { en: "check", zh: "支票" },
            ],
            casualVersion: "Yep, sign and date it. Due next Wednesday — no slip, no trip unfortunately. There's also a $5 bus fee. Cash or check in a sealed envelope with your kid's name.",
            culturalNote: "美国学校活动经常需要小额费用（通常是交通费或门票）。用密封信封装钱并写上孩子名字是标准做法。check（支票）在美国仍然很常用，但很多中国家长不习惯用支票。",
            formalityVariants: {
              casual: "Sign, date, due Wednesday. No slip = no trip. $5 bus fee in an envelope with your kid's name — cash or check.",
              standard: "Sign and date at the bottom. It is due next Wednesday. There is also a five-dollar bus fee — cash or check in a sealed envelope with your child's name.",
              formal: "Please sign and date the form at the bottom. The submission deadline is next Wednesday; regrettably, students without a returned permission slip will be unable to participate in the excursion. Additionally, the form indicates a five-dollar fee to cover transportation costs. This may be submitted as either cash or a personal check, enclosed in a sealed envelope bearing your child's name.",
            },
            alternativeExpressions: [
              {
                textEn: "Just sign, date it, and send it back by Wednesday. Important: no signed slip means no field trip, so do not forget! And there is a $5 fee for the bus — send it in an envelope with your kid's name.",
                textZh: "只要签名、写日期，周三之前交回。重要：没有签好的同意书就不能参加，别忘了！还有5美元的巴士费——装在写有孩子名字的信封里。",
                actionHint: "提醒截止日期和费用",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. I will sign it tonight and send it back with him tomorrow. Thank you for being so patient and explaining everything clearly!",
            textZh: "明白了。我今晚签好，明天让他带回去。谢谢你这么耐心地把一切解释清楚！",
            culturalNote: "及时交回同意书是对学校的尊重。尽早交回（而不是等到截止日期）也让学校能更好地安排活动。",
            casualVersion: "Got it! I'll sign tonight and send it back tomorrow. Thanks for being so patient and explaining everything!",
            commonMistake: {
              wrong: "I will sign it tonight and send back with him tomorrow.",
              correct: "I will sign it tonight and send it back with him tomorrow.",
              explanation: "send it back 需要代词 it；send back 中间不能省略宾语。",
            },
            formalityVariants: {
              casual: "On it! Signing tonight, sending it back tomorrow. Thanks for the help!",
              standard: "I will sign it tonight and send it back with him tomorrow. Thank you for explaining everything so clearly!",
              formal: "Understood. I shall sign the form this evening and ensure it is returned with my son tomorrow morning. I sincerely appreciate your patience and thoroughness in explaining the contents of the permission slip.",
            },
          },
        ],
      },
      {
        id: "permission-slip-intermediate",
        titleZh: "处理特殊情况",
        titleEn: "Handling Special Situations",
        description: "处理同意书上的特殊条款和疑问",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Mrs. Wang, I have another question about a different form that came home. This one says media release consent — it is asking if the school can take photos and videos of my child for the school website and social media. I am not comfortable with that.",
            textZh: "王老师，我对另一张带回来的表格有问题。这张写着媒体发布同意——问学校能否拍摄我孩子的照片和视频用于学校网站和社交媒体。我对此不太放心。",
            culturalNote: "Media release consent（媒体发布同意书）是美国学校常见的表格。你完全有权拒绝——这不会影响孩子在学校的任何权益。隐私意识在美国被尊重。",
            casualVersion: "Mrs. Wang, there's another form — media release consent? About photos and videos on the school website and social media. I'm not OK with that.",
            commonMistake: {
              wrong: "I am not comfortable about that.",
              correct: "I am not comfortable with that.",
              explanation: "comfortable with 是固定搭配，不用 about。",
            },
            formalityVariants: {
              casual: "Oh, also — this media release form about photos and videos. Not really comfortable with my kid being on social media.",
              standard: "This form says media release consent — asking if the school can photograph and video my child for the website and social media. I am not comfortable with that.",
              formal: "I have an additional question regarding a separate form that was sent home. It pertains to media release consent, requesting authorization for the school to photograph and record my child for use on the school website and social media platforms. I have some reservations about providing such consent.",
            },
          },
          {
            speaker: "them",
            role: "班主任老师",
            textEn: "That is completely your right! You can check the box that says do not consent, and we will make sure your child is not included in any photos or videos. Many families opt out — it is not unusual at all. Your child will still participate in everything, we just will not photograph them.",
            textZh: "这完全是你的权利！你可以勾选不同意的选项，我们会确保你的孩子不出现在任何照片或视频中。很多家庭选择退出——这一点也不少见。你的孩子仍然参加所有活动，我们只是不会拍他们。",
            keyPhrases: [
              { en: "do not consent", zh: "不同意" },
              { en: "opt out", zh: "选择退出" },
            ],
            casualVersion: "Totally your call! Just check 'do not consent' and we won't include your child in any photos or videos. Lots of families opt out — no big deal. Your kid still does everything, just no photos.",
            culturalNote: "Opt out（选择退出）是美国隐私文化的重要概念。学校必须尊重家长的决定，不会因为你拒绝而区别对待孩子。",
            formalityVariants: {
              casual: "No problem! Just check 'no' and we'll keep your kid out of photos. Lots of families do this. No impact on anything else.",
              standard: "That is your right. Check 'do not consent' and your child will not appear in photos or videos. Many families opt out. Your child still participates in everything.",
              formal: "That is entirely within your rights as a parent. Simply select the 'do not consent' option on the form, and we will ensure that your child is excluded from all photographic and video documentation. I want to assure you that a considerable number of families exercise this option — it is quite common. Your child's participation in all school activities will in no way be affected by this decision.",
            },
            alternativeExpressions: [
              {
                textEn: "Absolutely no problem. Just mark 'do not consent' and your child stays out of all media. You are not the only one — privacy is important and we respect that 100 percent.",
                textZh: "完全没问题。只要标记不同意，你的孩子就不会出现在任何媒体上。你不是唯一这样做的——隐私很重要，我们百分之百尊重。",
                actionHint: "确认可以拒绝且无影响",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you, I will check that box. Oh, I have one more — this form about the annual health screening. It says hearing test, vision test, and scoliosis check. Is this mandatory? And do I need to pay for it?",
            textZh: "谢谢，我会勾选那个选项。哦，我还有一个——这张关于年度健康检查的表格。上面说听力测试、视力测试和脊柱侧弯检查。这是必须的吗？我需要付费吗？",
            culturalNote: "美国公立学校通常提供免费的年度健康检查，包括听力、视力和脊柱检查。这些通常是州法律要求的，免费在学校进行。",
            casualVersion: "Thanks! One more — this annual health screening form. Hearing, vision, scoliosis check. Is it required? And do I have to pay?",
            commonMistake: {
              wrong: "Is this mandatory? And do I need pay for it?",
              correct: "Is this mandatory? And do I need to pay for it?",
              explanation: "need to pay 需要 to，不能省略。",
            },
            formalityVariants: {
              casual: "Thanks! Also — this health screening thing. Required? Free?",
              standard: "This form mentions hearing, vision, and scoliosis checks. Is this mandatory? Do I need to pay?",
              formal: "Thank you. I have one additional inquiry regarding the annual health screening form, which references hearing examinations, vision tests, and scoliosis assessments. Is participation in this screening mandatory? And are there any associated costs?",
            },
          },
          {
            speaker: "them",
            role: "班主任老师",
            textEn: "The health screening is required by state law, and it is completely free — the school nurse handles it during school hours. If anything comes up, like a possible vision issue, you will get a letter recommending you follow up with your own doctor. But it is just a screening, not a full medical exam.",
            textZh: "健康检查是州法律要求的，而且完全免费——学校护士在上课时间进行。如果发现什么问题，比如可能的视力问题，你会收到一封信建议你去自己的医生那里复查。但这只是筛查，不是全面体检。",
            keyPhrases: [
              { en: "state law", zh: "州法律" },
              { en: "school nurse", zh: "学校护士" },
              { en: "follow up", zh: "后续复查" },
            ],
            casualVersion: "It's required by law and totally free. School nurse does it during school. If they find something, you'll get a letter saying go see your doctor. It's just a screening though, not a full exam.",
            culturalNote: "美国公立学校通常有专职的 school nurse（学校护士），提供基本的健康服务。screening（筛查）只是初步检查，发现问题后会建议你去专业医生那里 follow up（复查）。",
            formalityVariants: {
              casual: "Required by law, totally free. School nurse does it during class. If anything's off, you'll get a note to see your doctor. Just a basic screening.",
              standard: "The screening is required by state law and free. The school nurse conducts it during school hours. If anything is found, you receive a letter to follow up with your doctor.",
              formal: "The health screening is mandated by state legislation and is provided at no cost to families. It is conducted by our school nurse during regular school hours. Should the screening identify any areas of concern, such as a potential vision deficiency, you will receive formal correspondence recommending that you seek follow-up evaluation with your family physician. I should note that this constitutes a preliminary screening only, not a comprehensive medical examination.",
            },
            alternativeExpressions: [
              {
                textEn: "It is free and required — the school nurse does quick checks during class. Nothing invasive. If they spot something, they send a letter home. Think of it as a heads-up, not a diagnosis.",
                textZh: "免费且必须的——学校护士在课上做快速检查。不会侵入性的。如果发现什么，会寄一封信回家。把它想成提醒，不是诊断。",
                actionHint: "说明健康检查的性质",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "OK, so I just sign the consent and they will do it at school. That is convenient. Are all these forms really common in American schools? In China, we never had this many forms to sign!",
            textZh: "好的，所以我只要签同意书他们就在学校做。那很方便。这些表格在美国学校真的很常见吗？在中国，我们从来没有这么多表格要签！",
            culturalNote: "美国学校的表格文化确实比中国多得多。这源于美国的法律环境——学校必须获得书面授权来保护自己和学生。习惯后就不觉得多了。",
            casualVersion: "So I just sign and they do it at school. Easy! Are all these forms normal? We never had so many in China!",
            commonMistake: {
              wrong: "In China, we never had so much forms to sign!",
              correct: "In China, we never had this many forms to sign!",
              explanation: "forms 是可数名词，用 many 而不是 much。this many 表示这么多。",
            },
            formalityVariants: {
              casual: "Just sign and done? Nice. Are all these forms normal though? Way more paperwork than Chinese schools!",
              standard: "So I just sign the consent. Are all these forms common in American schools? In China we never had this many.",
              formal: "I see, so I simply provide my consent and the screening will be administered at school. How convenient. I must say, are this volume of forms typical for American schools? In the Chinese education system, we had considerably fewer forms requiring parental signatures.",
            },
          },
          {
            speaker: "them",
            role: "班主任老师",
            textEn: "Ha, yes, welcome to American schools! There is a lot of paperwork, especially at the beginning of the year. But it is all to protect the kids and keep parents informed. Pro tip: I tell all parents to create a folder just for school forms. And if you ever get a form you do not understand, bring it to me or email me — I am always happy to help!",
            textZh: "哈，是的，欢迎来到美国学校！有很多文件要处理，尤其是学年开始的时候。但这都是为了保护孩子和让家长知情。小建议：我告诉所有家长专门建一个学校表格的文件夹。如果你收到不理解的表格，带来给我或发邮件——我随时乐意帮忙！",
            keyPhrases: [
              { en: "paperwork", zh: "文件/手续" },
              { en: "pro tip", zh: "专业建议/小技巧" },
              { en: "keep parents informed", zh: "让家长知情" },
            ],
            casualVersion: "Ha, welcome to American school paperwork! Lots of forms, especially at the start. All for the kids though. Pro tip: make a folder just for school stuff. And any form you don't get? Bring it to me!",
            culturalNote: "美国学校的 paperwork 文化虽然让人觉得多，但每个表格都有法律依据。老师说 bring it to me 是真心的——利用这个资源来理解学校系统。",
            formalityVariants: {
              casual: "Yep, American schools love paperwork! It's all to protect kids though. Make a folder for school forms. And bring me any form you don't understand — happy to help!",
              standard: "Yes, there is a lot of paperwork, especially at the beginning of the year. It is all to protect the kids. Create a folder for school forms, and bring me anything you do not understand.",
              formal: "Indeed, the volume of administrative forms is quite substantial, particularly at the commencement of the academic year. However, each form serves an important purpose in safeguarding our students and maintaining transparent communication with parents. I would recommend establishing a dedicated folder for school documentation. And please, should you encounter any form that you find unclear, do not hesitate to bring it to my attention or reach out via email — I am always delighted to assist.",
            },
            alternativeExpressions: [
              {
                textEn: "You are not the first parent to say that! American schools run on paperwork. But every form has a reason. My advice: scan or photograph every form you sign, keep a folder, and never hesitate to ask questions. My inbox is always open!",
                textZh: "你不是第一个这么说的家长！美国学校靠文件运作。但每个表格都有理由。我的建议：把你签的每个表格拍照或扫描，建个文件夹，有问题随时问。我的邮箱随时欢迎！",
                actionHint: "给出实用建议",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 学习小组协作 ====================
  {
    id: "education-study-group-collab",
    category: "education",
    titleZh: "学习小组",
    titleEn: "Study Group Collaboration",
    description: "在学习小组中协调分工和讨论策略",
    otherRole: "小组组长",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "study-group-collab-basic",
        titleZh: "协调小组分工",
        titleEn: "Coordinating Group Tasks",
        description: "在学习小组中讨论如何分工复习内容",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi everyone, the midterm is in two weeks. Should we split up the chapters so each person reviews a different one?",
            textZh: "大家好，期中考试还有两周。我们是不是应该把章节分开，每个人复习不同的一章？",
            culturalNote: "美国大学的学习小组通常采用分工合作模式，每人负责一部分内容后向全组讲解，这和中国学生各自独立复习的习惯不同。",
            casualVersion: "Hey guys, midterm's in two weeks. Wanna split up the chapters?",
            commonMistake: {
              wrong: "Should we separate the chapters so each person review a different one?",
              correct: "Should we split up the chapters so each person reviews a different one?",
              explanation: "'split up' 比 'separate' 更口语化；从句中 each person 是第三人称单数，动词用 reviews。",
            },
            formalityVariants: {
              casual: "Hey, midterm's coming up in two weeks. Let's split the chapters — each person takes one?",
              standard: "Hi everyone, the midterm is in two weeks. Should we split up the chapters so each person reviews a different one?",
              formal: "Good afternoon, everyone. With the midterm examination approaching in two weeks, I would like to propose that we divide the chapters among ourselves so that each member can focus on reviewing a designated section.",
            },
          },
          {
            speaker: "them",
            role: "小组组长",
            textEn: "That is a great idea. We can each make a summary sheet and share it with the group. That way everyone benefits from each person's work.",
            textZh: "这是个好主意。我们每人做一份总结提纲然后分享给全组。这样每个人都能从其他人的成果中受益。",
            keyPhrases: [
              { en: "summary sheet", zh: "总结提纲" },
              { en: "benefits from", zh: "从……中受益" },
            ],
            casualVersion: "Love it. Let's each make a summary and share. Win-win for everyone.",
            formalityVariants: {
              casual: "Great idea! Let's each do a summary sheet and pass it around. Everyone wins.",
              standard: "That is a great idea. We can each make a summary sheet and share it with the group. That way everyone benefits from each person's work.",
              formal: "That is an excellent suggestion. I propose that each member prepare a comprehensive summary document for their assigned chapter and distribute it to the group. In this manner, every member can benefit from the collective effort.",
            },
            alternativeExpressions: [
              {
                textEn: "I like that plan. How about we also set a deadline — say, this Friday — so everyone finishes their section in time?",
                textZh: "我喜欢这个计划。我们要不要也设个截止日期——比如这周五——这样每个人都能按时完成？",
                actionHint: "提议设定截止日期",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Should we meet in person or just share everything in the group chat?",
            textZh: "我们是面对面开会还是在群聊里分享就行？",
            casualVersion: "Meet up or just drop everything in the group chat?",
            commonMistake: {
              wrong: "Should we meet face to face or just share everything in group chat?",
              correct: "Should we meet in person or just share everything in the group chat?",
              explanation: "'meet in person' 比 'meet face to face' 更自然；'the group chat' 需要定冠词。",
            },
            formalityVariants: {
              casual: "Should we get together or just share stuff in the chat?",
              standard: "Should we meet in person or just share everything in the group chat?",
              formal: "Would it be preferable to convene in person, or would it suffice to share all materials through our group messaging channel?",
            },
          },
          {
            speaker: "them",
            role: "小组组长",
            textEn: "I think we should do both. Share summaries online first, then meet once before the exam to go over tricky topics together.",
            textZh: "我觉得两个都做。先在线上分享总结，然后考试前见一次面，一起过一遍难的部分。",
            keyPhrases: [
              { en: "go over", zh: "复习/过一遍" },
              { en: "tricky topics", zh: "难的部分/棘手的话题" },
            ],
            casualVersion: "Let's do both. Share online first, then meet up before the test to tackle the hard stuff.",
            formalityVariants: {
              casual: "Why not both? Post summaries online, then meet up once before the exam for the hard stuff.",
              standard: "I think we should do both. Share summaries online first, then meet once before the exam to go over tricky topics together.",
              formal: "I believe a combined approach would be most effective. We could first distribute our summaries digitally, and then convene a single in-person session prior to the examination to collaboratively review any challenging material.",
            },
            alternativeExpressions: [
              {
                textEn: "How about we upload summaries to our shared drive by Friday, then do a review session on Sunday afternoon?",
                textZh: "我们周五前把总结上传到共享云盘，然后周日下午做一次复习讨论怎么样？",
                actionHint: "提议具体时间安排",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds good. I can take chapters three and four since I already took good notes on those.",
            textZh: "听起来不错。我可以负责第三章和第四章，因为我已经记了很好的笔记。",
            culturalNote: "在美国学习小组中主动认领任务被视为积极合作的表现，而不是炫耀。",
            casualVersion: "Cool, I'll grab chapters three and four — already got solid notes on those.",
            commonMistake: {
              wrong: "I can take chapter three and four since I already take good notes.",
              correct: "I can take chapters three and four since I already took good notes on those.",
              explanation: "多个章节用复数 chapters；已经完成的动作用过去时 took。",
            },
            formalityVariants: {
              casual: "Works for me. I'll do chapters three and four — got great notes on 'em already.",
              standard: "Sounds good. I can take chapters three and four since I already took good notes on those.",
              formal: "That sounds like a solid plan. I would be happy to take responsibility for chapters three and four, as I have already prepared thorough notes on those sections.",
            },
          },
          {
            speaker: "them",
            role: "小组组长",
            textEn: "Perfect. I will assign the rest and send out a schedule in the group chat tonight. Thanks for stepping up!",
            textZh: "完美。我会分配剩下的部分，今晚在群聊里发一个时间表。谢谢你主动承担！",
            keyPhrases: [
              { en: "assign the rest", zh: "分配剩下的" },
              { en: "stepping up", zh: "主动承担/挺身而出" },
            ],
            casualVersion: "Awesome. I'll sort out the rest and drop a schedule in the chat tonight. Thanks for volunteering!",
            formalityVariants: {
              casual: "Nice! I'll divvy up the rest and post a schedule tonight. Thanks for jumping on it!",
              standard: "Perfect. I will assign the rest and send out a schedule in the group chat tonight. Thanks for stepping up!",
              formal: "Excellent. I will allocate the remaining chapters and circulate a detailed schedule via our group chat this evening. Thank you for taking the initiative.",
            },
            alternativeExpressions: [
              {
                textEn: "Great, that is settled then. I will figure out who covers what and post a plan tonight. Appreciate you volunteering!",
                textZh: "好，那就这么定了。我会安排谁负责什么，今晚发计划。感谢你主动请缨！",
                actionHint: "确认分工安排",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "study-group-collab-intermediate",
        titleZh: "小组讨论策略",
        titleEn: "Group Discussion Strategies",
        description: "在学习小组中深入讨论复习策略和答疑解惑",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I have been going over the practice problems, but I keep getting stuck on the ones about regression analysis. Can we spend extra time on that?",
            textZh: "我一直在做练习题，但回归分析的题目总是卡住。我们能在那部分多花点时间吗？",
            culturalNote: "在美国学术文化中，坦诚自己不懂的地方不会被看不起，反而被视为积极参与学习的表现。",
            casualVersion: "I keep getting stuck on regression analysis problems. Can we focus on that more?",
            commonMistake: {
              wrong: "I keep getting stuck at the ones about regression analysis.",
              correct: "I keep getting stuck on the ones about regression analysis.",
              explanation: "'get stuck on' 是固定搭配，表示在某个问题上卡住，不用 at。",
            },
            formalityVariants: {
              casual: "Regression analysis keeps tripping me up. Can we go over that more?",
              standard: "I have been going over the practice problems, but I keep getting stuck on the ones about regression analysis. Can we spend extra time on that?",
              formal: "I have been reviewing the practice problems diligently; however, I find myself consistently encountering difficulty with those pertaining to regression analysis. Would it be possible to allocate additional time to that topic during our session?",
            },
          },
          {
            speaker: "them",
            role: "小组组长",
            textEn: "Absolutely. Actually, a few of us are struggling with that section too. How about we do a deep dive on regression this Wednesday? Everyone can bring their toughest problem.",
            textZh: "当然。其实我们好几个人在那部分也不太行。这周三我们专门深入讨论回归分析怎么样？每人带一道最难的题。",
            keyPhrases: [
              { en: "deep dive", zh: "深入探讨" },
              { en: "struggling with", zh: "在……上有困难" },
            ],
            casualVersion: "For sure. A bunch of us are stuck on that too. Let's do a deep dive on it Wednesday — bring your hardest problem.",
            formalityVariants: {
              casual: "Totally. We're all kinda stuck on that. Let's deep-dive Wednesday — bring your hardest question.",
              standard: "Absolutely. Actually, a few of us are struggling with that section too. How about we do a deep dive on regression this Wednesday? Everyone can bring their toughest problem.",
              formal: "Certainly. In fact, several members have expressed similar difficulty with that section. I would suggest we dedicate this Wednesday's session to an in-depth review of regression analysis. Each member could present their most challenging problem for collaborative discussion.",
            },
            alternativeExpressions: [
              {
                textEn: "You are not alone — regression is tough. Let us block out Wednesday just for that. If anyone has figured out a good shortcut, share it with the group.",
                textZh: "你不是一个人——回归分析确实难。我们把周三专门留给这个话题。谁找到了好的捷径就分享给大家。",
                actionHint: "组织专题讨论",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be really helpful. Should we also try teaching each other? I read that explaining a concept helps you understand it better.",
            textZh: "那真的很有帮助。我们要不也互相教？我看到过解释一个概念能帮你更好地理解它。",
            casualVersion: "That'd help a lot. Should we try teaching each other? They say explaining stuff helps you learn it better.",
            commonMistake: {
              wrong: "I read that explain a concept helps you understand it better.",
              correct: "I read that explaining a concept helps you understand it better.",
              explanation: "动名词 explaining 作主语，不能用动词原形 explain。",
            },
            formalityVariants: {
              casual: "Great idea. Should we also teach each other? Apparently explaining stuff helps you learn it better.",
              standard: "That would be really helpful. Should we also try teaching each other? I read that explaining a concept helps you understand it better.",
              formal: "That would be tremendously beneficial. Additionally, might I suggest we employ peer teaching? Research indicates that articulating a concept to others significantly enhances one's own comprehension.",
            },
          },
          {
            speaker: "them",
            role: "小组组长",
            textEn: "Great idea — that is called the Feynman technique. Each of us can pick a topic and explain it to the group as if we are teaching a class. If anyone spots a gap in the explanation, they jump in.",
            textZh: "好主意——这叫费曼学习法。我们每个人选一个话题，像上课一样给全组讲解。如果谁发现讲解中有漏洞，就补充进来。",
            keyPhrases: [
              { en: "Feynman technique", zh: "费曼学习法" },
              { en: "spots a gap", zh: "发现漏洞/不足" },
            ],
            casualVersion: "Love it — that's the Feynman thing. Each of us picks a topic and teaches the group. If someone catches a mistake, they jump in.",
            formalityVariants: {
              casual: "Yes! The Feynman method. Everyone picks a topic, teaches it. If someone sees a hole, they chime in.",
              standard: "Great idea — that is called the Feynman technique. Each of us can pick a topic and explain it to the group as if we are teaching a class. If anyone spots a gap in the explanation, they jump in.",
              formal: "An excellent suggestion — this approach is known as the Feynman technique. Each member would select a topic and present it to the group in a pedagogical format. Should any participant identify an inaccuracy or gap in the explanation, they would be encouraged to offer constructive feedback.",
            },
            alternativeExpressions: [
              {
                textEn: "That is actually a proven study method. Let us each claim a topic and present it. The rest of the group can ask questions and poke holes — that way we all sharpen our understanding.",
                textZh: "这其实是被验证过的学习方法。我们各认领一个话题来讲解。其他人可以提问和挑毛病——这样我们都能加深理解。",
                actionHint: "确定互教方式",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I also think we should do a mock exam together the weekend before the test. We could time ourselves and compare answers afterward.",
            textZh: "我还觉得我们应该在考试前的周末一起做一次模拟考试。我们可以计时，然后对答案。",
            casualVersion: "We should also do a mock exam the weekend before. Time ourselves and compare answers after.",
            commonMistake: {
              wrong: "We could time ourselves and compare answers after.",
              correct: "We could time ourselves and compare answers afterward.",
              explanation: "'afterward' 作副词表示事后更正式完整，'after' 单独用作副词虽然口语可以但不够正式。",
            },
            formalityVariants: {
              casual: "Let's do a practice test the weekend before too. Time it and check answers together after.",
              standard: "I also think we should do a mock exam together the weekend before the test. We could time ourselves and compare answers afterward.",
              formal: "Furthermore, I would recommend that we conduct a simulated examination the weekend preceding the test. We could adhere to the official time constraints and subsequently compare our responses to identify areas requiring further review.",
            },
          },
          {
            speaker: "them",
            role: "小组组长",
            textEn: "That is exactly what we need. I will find a past exam paper from the professor's website. We will simulate real test conditions — no notes, strict timing. Then we go through the answers together and figure out where we went wrong.",
            textZh: "这正是我们需要的。我会从教授的网站上找一份往年试卷。我们模拟真实考试条件——不看笔记，严格计时。然后一起过答案，找出哪里做错了。",
            keyPhrases: [
              { en: "past exam paper", zh: "往年试卷" },
              { en: "simulate real test conditions", zh: "模拟真实考试条件" },
            ],
            casualVersion: "Perfect. I'll grab an old exam from the prof's site. No notes, strict time. Then we check answers together and see where we messed up.",
            formalityVariants: {
              casual: "Exactly what we need. I'll snag a past exam from the prof's site. No notes, real timing. Then we compare and see where we messed up.",
              standard: "That is exactly what we need. I will find a past exam paper from the professor's website. We will simulate real test conditions — no notes, strict timing. Then we go through the answers together and figure out where we went wrong.",
              formal: "That is precisely the approach we require. I will obtain a previous examination from the professor's academic page. We shall replicate authentic examination conditions — without reference materials and with strict adherence to the time limit. Subsequently, we will review the answers collectively and analyze any errors in our reasoning.",
            },
            alternativeExpressions: [
              {
                textEn: "Love it. I know the professor posts old exams online. Let us grab one, set a timer, and do it under test conditions. Afterward, we can debrief and help each other with mistakes.",
                textZh: "太好了。我知道教授在网上发了往年试卷。我们拿一份，设好计时器，在考试条件下做。然后互相分析错误。",
                actionHint: "安排模拟考试",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 图书馆资源 ====================
  // ==================== 助学金申请 ====================
  {
    id: "education-financial-aid",
    category: "education",
    titleZh: "助学金申请",
    titleEn: "Financial Aid Application",
    description: "申请助学金和经济援助的流程咨询",
    otherRole: "财务援助顾问",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "financial-aid-apply-basic",
        titleZh: "了解申请流程",
        titleEn: "Understanding the Application Process",
        description: "第一次了解助学金申请的基本步骤",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I would like to apply for financial aid. I am not sure where to start. Can you walk me through the process?",
            textZh: "你好，我想申请助学金。我不确定从哪里开始。你能带我走一遍流程吗？",
            culturalNote: "在美国，financial aid 是一个统称，包含助学金（grants）、奖学金（scholarships）、贷款（loans）和勤工俭学（work-study）。中国的概念更侧重于无需偿还的助学金。",
            casualVersion: "Hey, I wanna apply for financial aid but dunno where to start. Can you help?",
            commonMistake: {
              wrong: "Can you walk me the process?",
              correct: "Can you walk me through the process?",
              explanation: "'walk someone through' 是固定短语，意思是带某人逐步了解，不能省略 through。",
            },
            formalityVariants: {
              casual: "Hi, I need financial aid but I'm lost. Where do I even start?",
              standard: "Hi, I would like to apply for financial aid. I am not sure where to start. Can you walk me through the process?",
              formal: "Good morning. I am interested in applying for financial aid and I would greatly appreciate it if you could guide me through the application process, as I am unfamiliar with the requirements.",
            },
          },
          {
            speaker: "them",
            role: "财务援助顾问",
            textEn: "Sure! The first step is completing the FAFSA form online. You will need your tax returns from last year, your Social Security number, and your bank statements. The deadline is March first for priority consideration.",
            textZh: "当然！第一步是在线填写FAFSA表格。你需要去年的纳税申报单、社会安全号码和银行对账单。优先审核的截止日期是三月一日。",
            keyPhrases: [
              { en: "priority consideration", zh: "优先审核/优先考虑" },
              { en: "tax returns", zh: "纳税申报单" },
            ],
            casualVersion: "Sure! Start with the FAFSA online. You'll need last year's taxes, your SSN, and bank statements. Deadline's March first for priority.",
            formalityVariants: {
              casual: "Easy! Just fill out the FAFSA online. Grab your tax info, SSN, and bank stuff. March first deadline for top priority.",
              standard: "Sure! The first step is completing the FAFSA form online. You will need your tax returns from last year, your Social Security number, and your bank statements. The deadline is March first for priority consideration.",
              formal: "Certainly. The initial step involves completing the Free Application for Federal Student Aid, commonly known as FAFSA, through the online portal. You will be required to provide your previous year's tax returns, your Social Security number, and recent bank statements. I should note that the deadline for priority consideration is March first.",
            },
            alternativeExpressions: [
              {
                textEn: "Great question. Everything starts with the FAFSA. It is an online form that looks at your family's financial situation. Gather your tax documents and bank info, and try to submit before March first for the best chance at aid.",
                textZh: "好问题。一切从FAFSA开始。这是一个在线表格，评估你家庭的财务状况。准备好税务文件和银行信息，尽量在三月一日前提交以获得最大机会。",
                actionHint: "说明申请起点",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What if my family's financial situation has changed since last year? My father lost his job recently.",
            textZh: "如果我家的经济状况和去年不一样了怎么办？我爸爸最近失业了。",
            casualVersion: "What if things changed? My dad just lost his job.",
            commonMistake: {
              wrong: "What if my family's financial situation changed from last year?",
              correct: "What if my family's financial situation has changed since last year?",
              explanation: "'has changed since' 表示从某个时间点到现在的变化，用现在完成时更准确。",
            },
            formalityVariants: {
              casual: "But our finances have changed a lot — my dad lost his job. Does that matter?",
              standard: "What if my family's financial situation has changed since last year? My father lost his job recently.",
              formal: "I should mention that my family's financial circumstances have undergone a significant change since the previous tax year. My father has recently experienced a job loss. How might this affect my application?",
            },
          },
          {
            speaker: "them",
            role: "财务援助顾问",
            textEn: "I am sorry to hear that. You can file a special circumstances appeal. We will review your current situation instead of last year's tax data. Bring documentation of the job loss — a termination letter or unemployment benefits notice will work.",
            textZh: "很遗憾听到这个消息。你可以提交特殊情况申诉。我们会审核你目前的情况而不是去年的税务数据。带上失业的证明文件——解雇信或失业救济通知都可以。",
            keyPhrases: [
              { en: "special circumstances appeal", zh: "特殊情况申诉" },
              { en: "termination letter", zh: "解雇信" },
            ],
            casualVersion: "Sorry about that. You can file a special appeal based on your current situation instead of old tax info. Just bring proof — like a termination letter.",
            formalityVariants: {
              casual: "Oh no, sorry. There's a special appeal for that. We'll look at your current finances instead. Just bring proof your dad lost his job.",
              standard: "I am sorry to hear that. You can file a special circumstances appeal. We will review your current situation instead of last year's tax data. Bring documentation of the job loss — a termination letter or unemployment benefits notice will work.",
              formal: "I am sorry to learn of your family's situation. In such cases, you are eligible to file a special circumstances appeal, which allows our office to evaluate your current financial standing rather than relying solely on the previous year's tax information. Please provide supporting documentation, such as a formal termination letter or an unemployment benefits notification.",
            },
            alternativeExpressions: [
              {
                textEn: "That is actually more common than you think. We have a process called professional judgment where we can adjust your aid based on current income. Just bring proof of the change and we will take another look.",
                textZh: "这其实比你想的更常见。我们有一个叫专业判断的流程，可以根据当前收入调整你的援助。带上变化的证明，我们会重新评估。",
                actionHint: "介绍特殊申诉流程",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How long does it usually take to hear back after I submit everything?",
            textZh: "提交完所有材料后通常多久能收到回复？",
            casualVersion: "How long till I hear back after submitting?",
            commonMistake: {
              wrong: "How long does it take to hear back after I submit all?",
              correct: "How long does it usually take to hear back after I submit everything?",
              explanation: "'everything' 比 'all' 更自然；加 usually 询问一般情况更地道。",
            },
            formalityVariants: {
              casual: "So when would I find out after I turn everything in?",
              standard: "How long does it usually take to hear back after I submit everything?",
              formal: "Once all required documentation has been submitted, what is the typical timeline for receiving a determination on my application?",
            },
          },
          {
            speaker: "them",
            role: "财务援助顾问",
            textEn: "Typically four to six weeks after your FAFSA is processed. You will receive an award letter by email that breaks down exactly what you qualify for. If you have questions about the offer, you can always schedule a follow-up appointment with us.",
            textZh: "通常在FAFSA处理完成后四到六周。你会通过邮件收到一封奖学金通知信，详细列出你符合的所有资助项目。如果对通知有疑问，你随时可以预约我们的后续咨询。",
            keyPhrases: [
              { en: "award letter", zh: "奖学金通知信/资助通知书" },
              { en: "follow-up appointment", zh: "后续预约/跟进咨询" },
            ],
            casualVersion: "About four to six weeks. You'll get an award letter by email showing what you qualify for. Any questions, just book another appointment.",
            formalityVariants: {
              casual: "Four to six weeks usually. You'll get an email breaking down your aid package. Come back if you have questions.",
              standard: "Typically four to six weeks after your FAFSA is processed. You will receive an award letter by email that breaks down exactly what you qualify for. If you have questions about the offer, you can always schedule a follow-up appointment with us.",
              formal: "The standard processing period is approximately four to six weeks following the completion of your FAFSA review. You will subsequently receive a comprehensive award letter via email that delineates the specific forms of financial assistance for which you are eligible. Should you have any inquiries regarding the award, please do not hesitate to schedule a follow-up consultation with our office.",
            },
            alternativeExpressions: [
              {
                textEn: "Plan on about a month to six weeks. Your award letter will come by email and it lists everything — grants, loans, work-study. Read it carefully and come see us if anything is unclear.",
                textZh: "预计大约一个月到六周。奖学金通知信会通过邮件发来，上面列了所有内容——助学金、贷款、勤工俭学。仔细看，有不清楚的来找我们。",
                actionHint: "设定时间预期",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "financial-aid-apply-intermediate",
        titleZh: "申诉与复议",
        titleEn: "Appeals and Reconsideration",
        description: "对助学金结果进行申诉或请求重新评估",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I received my financial aid package, but it does not cover enough of my tuition. Is there any way to appeal for more aid?",
            textZh: "我收到了助学金方案，但不够支付学费。有没有办法申诉争取更多援助？",
            culturalNote: "在美国，对助学金方案提出申诉是完全正常的做法，不会被认为不礼貌。很多学生通过申诉获得了额外援助。",
            casualVersion: "My aid package doesn't cover enough. Can I appeal for more?",
            commonMistake: {
              wrong: "It does not cover enough my tuition.",
              correct: "It does not cover enough of my tuition.",
              explanation: "'enough of' 是固定搭配，表示足够的部分。",
            },
            formalityVariants: {
              casual: "My aid package is way short. Any way to get more?",
              standard: "I received my financial aid package, but it does not cover enough of my tuition. Is there any way to appeal for more aid?",
              formal: "I have reviewed the financial aid package I received and unfortunately it falls short of covering my tuition expenses. I would like to inquire about the possibility of filing an appeal to request additional assistance.",
            },
          },
          {
            speaker: "them",
            role: "财务援助顾问",
            textEn: "Yes, you can submit a written appeal letter. Include specific reasons — such as unexpected medical expenses, job loss, or other financial hardships. The more documentation you provide, the stronger your case will be.",
            textZh: "可以，你可以提交一封书面申诉信。包括具体原因——比如意外的医疗费用、失业或其他经济困难。你提供的证明文件越多，你的案例就越有力。",
            keyPhrases: [
              { en: "written appeal letter", zh: "书面申诉信" },
              { en: "the stronger your case", zh: "你的案例越有力" },
            ],
            casualVersion: "Yeah, write an appeal letter. Explain why — medical bills, job loss, whatever. More proof you give, better your chances.",
            formalityVariants: {
              casual: "Totally. Write an appeal. List your reasons — medical stuff, lost income, whatever. More evidence, better odds.",
              standard: "Yes, you can submit a written appeal letter. Include specific reasons — such as unexpected medical expenses, job loss, or other financial hardships. The more documentation you provide, the stronger your case will be.",
              formal: "Absolutely. You are entitled to submit a formal written appeal. I would advise including specific and well-documented justifications, such as unanticipated medical expenditures, employment termination, or other demonstrable financial hardships. The comprehensiveness of your supporting documentation will significantly strengthen your petition.",
            },
            alternativeExpressions: [
              {
                textEn: "Definitely. Appeals are very common and we take them seriously. Write a clear letter explaining what changed, attach any proof you have, and we will review it within two weeks.",
                textZh: "当然。申诉很常见，我们会认真对待。写一封清晰的信解释发生了什么变化，附上你有的证明，我们会在两周内审核。",
                actionHint: "鼓励提交申诉",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I have another offer from a different university with a better aid package. Can I use that as leverage in my appeal?",
            textZh: "我有另一所大学给了更好的助学金方案。我可以用那个作为申诉的筹码吗？",
            casualVersion: "I got a better offer from another school. Can I use that to negotiate?",
            commonMistake: {
              wrong: "Can I use that for leverage in my appeal?",
              correct: "Can I use that as leverage in my appeal?",
              explanation: "'use as leverage' 是固定搭配，意思是作为谈判筹码，介词用 as 而非 for。",
            },
            formalityVariants: {
              casual: "Another school gave me a better deal. Can I use that to get more from you guys?",
              standard: "I have another offer from a different university with a better aid package. Can I use that as leverage in my appeal?",
              formal: "I have received a competing financial aid offer from another institution that is comparatively more generous. Would it be appropriate to reference this offer as part of my appeal for reconsideration?",
            },
          },
          {
            speaker: "them",
            role: "财务援助顾问",
            textEn: "Absolutely — that is actually one of the strongest arguments you can make. Bring a copy of the competing offer letter. We cannot guarantee we will match it, but we will certainly take it into consideration when reviewing your appeal.",
            textZh: "当然——这其实是你能提出的最有力的理由之一。带一份竞争学校的录取通知书副本。我们不能保证会匹配，但在审核你的申诉时一定会考虑进去。",
            keyPhrases: [
              { en: "competing offer", zh: "竞争学校的录取方案" },
              { en: "take it into consideration", zh: "纳入考虑" },
            ],
            casualVersion: "For sure — that's one of the best cards you can play. Bring the other school's offer. We can't promise to match it but we'll definitely factor it in.",
            formalityVariants: {
              casual: "Yeah, that's your best card. Bring the other offer. No promises, but it'll definitely help your case.",
              standard: "Absolutely — that is actually one of the strongest arguments you can make. Bring a copy of the competing offer letter. We cannot guarantee we will match it, but we will certainly take it into consideration when reviewing your appeal.",
              formal: "Indeed, a competing institutional offer constitutes one of the most compelling grounds for a financial aid appeal. Please provide a copy of the alternative offer letter. While I cannot assure you that we will match the competing package, I can confirm that it will be given serious consideration during the review process.",
            },
            alternativeExpressions: [
              {
                textEn: "That is actually very helpful. Competing offers show us what the market values you at. Include it in your appeal with a polite note asking us to reconsider. Many students get additional aid this way.",
                textZh: "这其实很有帮助。竞争报价让我们看到市场如何评价你。把它附在申诉里，礼貌地请求我们重新考虑。很多学生通过这种方式获得了额外资助。",
                actionHint: "确认竞争方案的作用",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "If my appeal is denied, are there other options I should explore, like external scholarships or payment plans?",
            textZh: "如果我的申诉被拒绝了，还有其他我应该探索的选项吗，比如校外奖学金或分期付款计划？",
            casualVersion: "What if the appeal gets denied? Any other options — outside scholarships, payment plans?",
            commonMistake: {
              wrong: "If my appeal is denied, are there other options I should explore like external scholarships?",
              correct: "If my appeal is denied, are there other options I should explore, like external scholarships or payment plans?",
              explanation: "like 前需要逗号来引导举例说明，避免歧义。",
            },
            formalityVariants: {
              casual: "And if they say no? Anything else I can try — outside scholarships, payment plans?",
              standard: "If my appeal is denied, are there other options I should explore, like external scholarships or payment plans?",
              formal: "In the event that my appeal is unsuccessful, could you advise me on alternative avenues I might pursue, such as external scholarship opportunities or institutional payment plans?",
            },
          },
          {
            speaker: "them",
            role: "财务援助顾问",
            textEn: "Definitely. We have a list of external scholarships on our website — some are specifically for international students or first-generation college students. We also offer interest-free monthly payment plans so you can spread the cost over the semester instead of paying all at once.",
            textZh: "当然有。我们网站上有校外奖学金清单——有些专门针对国际学生或第一代大学生。我们还提供无息月度分期付款计划，这样你可以把费用分摊到整个学期而不是一次性付清。",
            keyPhrases: [
              { en: "first-generation college students", zh: "第一代大学生" },
              { en: "interest-free monthly payment plans", zh: "无息月度分期付款" },
            ],
            casualVersion: "Sure. Check our website for outside scholarships — some are for international or first-gen students. We also have interest-free payment plans to spread out costs.",
            formalityVariants: {
              casual: "Yeah, our website has a bunch of outside scholarships. Plus we've got interest-free payment plans so you don't have to pay everything upfront.",
              standard: "Definitely. We have a list of external scholarships on our website — some are specifically for international students or first-generation college students. We also offer interest-free monthly payment plans so you can spread the cost over the semester instead of paying all at once.",
              formal: "Certainly. Our office maintains a curated directory of external scholarship opportunities on our website, several of which are designated specifically for international students or first-generation college attendees. Additionally, we offer interest-free monthly installment plans, enabling you to distribute your tuition costs across the semester rather than remitting the full amount in a single payment.",
            },
            alternativeExpressions: [
              {
                textEn: "There are always more options. Our scholarship database lists hundreds of outside awards. And our payment plan breaks tuition into manageable monthly chunks with zero interest. Come back anytime if you need help applying for any of these.",
                textZh: "总会有更多选择。我们的奖学金数据库列出了数百个校外奖项。我们的付款计划把学费分成可控的月付，零利息。申请这些时需要帮助随时来找我们。",
                actionHint: "提供备选方案",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 学业顾问 ====================
  {
    id: "education-academic-advisor",
    category: "education",
    titleZh: "学业顾问",
    titleEn: "Academic Advisor",
    description: "与学业顾问讨论课程选择和学习规划",
    otherRole: "学业顾问",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "academic-advisor-basic",
        titleZh: "选课咨询",
        titleEn: "Course Selection Advice",
        description: "向学业顾问咨询下学期的选课建议",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have an appointment to discuss my course schedule for next semester. I am not sure which electives to take.",
            textZh: "你好，我预约了讨论下学期课程安排。我不确定选哪些选修课。",
            culturalNote: "美国大学的学业顾问（academic advisor）是每个学生的专属资源。定期见顾问讨论选课是正常且被鼓励的，不像中国大学那样主要靠学生自己决定。",
            casualVersion: "Hey, I'm here about next semester's schedule. Not sure what electives to pick.",
            commonMistake: {
              wrong: "I am not sure which electives to choose.",
              correct: "I am not sure which electives to take.",
              explanation: "选课的惯用搭配是 'take a course/class'，而非 choose。",
            },
            formalityVariants: {
              casual: "Hi, I need help picking electives for next semester.",
              standard: "Hi, I have an appointment to discuss my course schedule for next semester. I am not sure which electives to take.",
              formal: "Good morning. I have a scheduled appointment to discuss my academic plan for the upcoming semester. I would appreciate your guidance in selecting appropriate elective courses.",
            },
          },
          {
            speaker: "them",
            role: "学业顾问",
            textEn: "Welcome! Let me pull up your degree audit first. It looks like you have completed most of your core requirements. You still need one humanities elective and one lab science to graduate on time.",
            textZh: "欢迎！让我先调出你的学位审核。看起来你已经完成了大部分核心必修课。你还需要一门人文选修和一门实验科学课才能按时毕业。",
            keyPhrases: [
              { en: "degree audit", zh: "学位审核" },
              { en: "graduate on time", zh: "按时毕业" },
            ],
            casualVersion: "Hey! Let me check your degree audit. Looks like you're mostly done with core stuff. You still need a humanities elective and a lab science to graduate on time.",
            formalityVariants: {
              casual: "Let me pull up your records. You're good on most core classes. Just need a humanities elective and a lab science to finish on schedule.",
              standard: "Welcome! Let me pull up your degree audit first. It looks like you have completed most of your core requirements. You still need one humanities elective and one lab science to graduate on time.",
              formal: "Welcome. Allow me to review your degree audit. It appears that you have satisfactorily completed the majority of your core curricular requirements. However, you will need to complete one humanities elective and one laboratory science course in order to fulfill your graduation requirements within the expected timeline.",
            },
            alternativeExpressions: [
              {
                textEn: "Let me check where you stand. Looking at your transcript, you are in good shape overall. Just two more boxes to check — a humanities course and a lab science. After that, you are on track to graduate.",
                textZh: "让我看看你的进度。从你的成绩单来看，整体情况不错。只需要再勾两个框——一门人文课和一门实验科学。之后你就在按时毕业的轨道上了。",
                actionHint: "评估毕业进度",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I am interested in taking an introductory psychology course. Would that count toward my humanities requirement?",
            textZh: "我想上一门心理学入门课。这能算人文必修学分吗？",
            casualVersion: "I wanna take intro psych. Does that count for humanities?",
            commonMistake: {
              wrong: "Would that count for my humanities requirement?",
              correct: "Would that count toward my humanities requirement?",
              explanation: "'count toward' 表示算入/计入某个要求，比 count for 更准确。",
            },
            formalityVariants: {
              casual: "How about intro psych? Does that fill the humanities slot?",
              standard: "I am interested in taking an introductory psychology course. Would that count toward my humanities requirement?",
              formal: "I have been considering enrolling in an introductory psychology course. Would you be able to confirm whether this would satisfy my humanities elective requirement?",
            },
          },
          {
            speaker: "them",
            role: "学业顾问",
            textEn: "Good news — Psychology 101 does count as a humanities elective here. It is also one of our most popular courses, so I would recommend registering early. Sections fill up fast during enrollment week.",
            textZh: "好消息——心理学101在这里确实算人文选修。这也是我们最受欢迎的课程之一，所以我建议你早点注册。选课周名额很快就满了。",
            keyPhrases: [
              { en: "sections fill up fast", zh: "名额很快满了" },
              { en: "enrollment week", zh: "选课周" },
            ],
            casualVersion: "Yep, Psych 101 counts! It's super popular though, so register early. Spots go fast.",
            formalityVariants: {
              casual: "Good news — Psych 101 totally counts. But sign up early, it fills up crazy fast.",
              standard: "Good news — Psychology 101 does count as a humanities elective here. It is also one of our most popular courses, so I would recommend registering early. Sections fill up fast during enrollment week.",
              formal: "I am pleased to confirm that Psychology 101 is classified as a humanities elective at our institution. I should note, however, that it is among our most highly subscribed courses. I would strongly recommend securing your enrollment promptly, as available sections tend to reach capacity rather quickly during the registration period.",
            },
            alternativeExpressions: [
              {
                textEn: "Yes, Psych 101 satisfies that requirement. Fair warning though — it is very popular. Set a reminder for when enrollment opens and register the same day if you can.",
                textZh: "是的，心理学101满足那个要求。不过提醒你——非常热门。设个选课开放时间的提醒，尽量当天就注册。",
                actionHint: "确认课程并提醒早注册",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What about the lab science? I am worried about my GPA. Is there a course that is manageable for someone who is not a science major?",
            textZh: "实验科学课呢？我担心我的GPA。有没有对非理科专业学生比较友好的课？",
            casualVersion: "What about lab science? I'm worried about my GPA. Anything easy for non-science people?",
            commonMistake: {
              wrong: "Is there a course that is manageable for someone who is not science major?",
              correct: "Is there a course that is manageable for someone who is not a science major?",
              explanation: "'a science major' 需要不定冠词 a。",
            },
            formalityVariants: {
              casual: "For lab science — anything that won't tank my GPA? I'm not a science person.",
              standard: "What about the lab science? I am worried about my GPA. Is there a course that is manageable for someone who is not a science major?",
              formal: "Regarding the laboratory science requirement, I have some concerns about maintaining my grade point average. Could you recommend a course that would be accessible for a student outside the natural sciences?",
            },
          },
          {
            speaker: "them",
            role: "学业顾问",
            textEn: "I usually recommend Environmental Science 110 or Astronomy 101. Both have a hands-on lab component but the workload is reasonable. They also have great student reviews. Pick whichever topic interests you more — you will do better in a class you enjoy.",
            textZh: "我通常推荐环境科学110或天文学101。两门都有动手实验的部分，但课业量是合理的。它们的学生评价也很好。选你更感兴趣的——你在喜欢的课上会表现更好。",
            keyPhrases: [
              { en: "hands-on lab component", zh: "动手实验部分" },
              { en: "student reviews", zh: "学生评价" },
            ],
            casualVersion: "Try Enviro Sci 110 or Astronomy 101. Both have labs but aren't too heavy. Great reviews too. Pick what sounds fun — you'll do better that way.",
            formalityVariants: {
              casual: "Go for Enviro Sci 110 or Astro 101. Chill labs, good reviews. Just pick whatever sounds more interesting.",
              standard: "I usually recommend Environmental Science 110 or Astronomy 101. Both have a hands-on lab component but the workload is reasonable. They also have great student reviews. Pick whichever topic interests you more — you will do better in a class you enjoy.",
              formal: "I would typically suggest Environmental Science 110 or Astronomy 101 for students in your situation. Both courses incorporate a practical laboratory component while maintaining a manageable academic workload. They also receive consistently favorable evaluations from students. I would encourage you to select the subject that aligns more closely with your interests, as engagement tends to correlate positively with academic performance.",
            },
            alternativeExpressions: [
              {
                textEn: "For non-science majors, Environmental Science or Astronomy tend to work well. The labs are interesting without being overwhelming. Check the professor ratings online too — a good instructor makes a big difference.",
                textZh: "对于非理科专业的学生，环境科学或天文学通常很合适。实验有趣但不会太难。也在网上看看教授评价——好老师差别很大。",
                actionHint: "推荐合适的课程",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "academic-advisor-intermediate",
        titleZh: "学业规划与转专业",
        titleEn: "Academic Planning and Changing Majors",
        description: "讨论长期学业规划或转专业的可能性",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I have been thinking about changing my major from business to computer science. What would that look like in terms of my graduation timeline?",
            textZh: "我一直在考虑从商科转到计算机科学。从毕业时间来看会怎样？",
            culturalNote: "在美国大学转专业是很常见的——约三分之一的学生至少换一次专业。但需要和顾问详细讨论对毕业时间的影响。",
            casualVersion: "I wanna switch from business to CS. How much longer would that take to graduate?",
            commonMistake: {
              wrong: "What would that look like in terms of graduation timeline?",
              correct: "What would that look like in terms of my graduation timeline?",
              explanation: "需要所有格 my 来明确指你自己的毕业时间。",
            },
            formalityVariants: {
              casual: "Been thinking about switching to CS from business. How bad would that be for my graduation date?",
              standard: "I have been thinking about changing my major from business to computer science. What would that look like in terms of my graduation timeline?",
              formal: "I have been giving serious consideration to changing my declared major from business administration to computer science. Could you help me understand how such a change might affect my anticipated graduation date?",
            },
          },
          {
            speaker: "them",
            role: "学业顾问",
            textEn: "Let me map it out. You have completed sixty credits so far, but only about fifteen would transfer to a CS degree. You would need to take the intro programming sequence plus calculus, which would likely add two to three semesters. Have you taken any programming courses yet?",
            textZh: "让我给你理一下。你到目前为止修了六十个学分，但只有大约十五个可以转到计算机科学学位。你需要上编程入门系列课程加微积分，这可能会多两到三个学期。你上过编程课吗？",
            keyPhrases: [
              { en: "map it out", zh: "详细规划/理清" },
              { en: "transfer to", zh: "转入/可用于" },
            ],
            casualVersion: "Let me figure it out. You've done sixty credits but only fifteen carry over to CS. You'd need intro programming plus calc — probably two to three extra semesters. Taken any coding classes?",
            formalityVariants: {
              casual: "Okay, let me look. You've got sixty credits but only about fifteen work for CS. You'd need the programming sequence and calc. Probably two or three more semesters. Done any programming?",
              standard: "Let me map it out. You have completed sixty credits so far, but only about fifteen would transfer to a CS degree. You would need to take the intro programming sequence plus calculus, which would likely add two to three semesters. Have you taken any programming courses yet?",
              formal: "Allow me to conduct a thorough analysis. Based on your current transcript, you have earned sixty credits; however, approximately fifteen of those would be applicable toward a computer science degree. You would be required to complete the introductory programming course sequence in addition to calculus, which would likely extend your time to graduation by two to three additional semesters. May I ask whether you have completed any programming coursework to date?",
            },
            alternativeExpressions: [
              {
                textEn: "Good question. Looking at your credits, about fifteen would count toward CS. The rest are business-specific. You are looking at an extra year at minimum because of the programming prerequisites and math requirements.",
                textZh: "好问题。看你的学分，大约十五个可以算入计算机科学。其余是商科专用的。因为编程预修课和数学要求，至少要多一年。",
                actionHint: "评估转专业影响",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I took an online Python course over the summer, but nothing through the university. Would that count for anything?",
            textZh: "我暑假上了一个在线Python课程，但不是通过大学的。那能算点什么吗？",
            casualVersion: "I did an online Python course over summer but not through school. Does that help?",
            commonMistake: {
              wrong: "Would that count anything?",
              correct: "Would that count for anything?",
              explanation: "'count for' 是固定搭配，表示有价值/被算作。",
            },
            formalityVariants: {
              casual: "Took an online Python course this summer, not from here though. Counts for anything?",
              standard: "I took an online Python course over the summer, but nothing through the university. Would that count for anything?",
              formal: "I did complete an online Python programming course during the summer, although it was not offered through our university. Would this external coursework have any bearing on my degree requirements?",
            },
          },
          {
            speaker: "them",
            role: "学业顾问",
            textEn: "It would not count for credit, but the knowledge will give you a head start. You might be able to test out of the first programming course through a placement exam. That would save you a semester. I can connect you with the CS department to schedule one.",
            textZh: "它不能算学分，但知识会让你有一个先发优势。你也许可以通过免修考试跳过第一门编程课。那能帮你省一个学期。我可以帮你联系计算机系安排考试。",
            keyPhrases: [
              { en: "head start", zh: "先发优势" },
              { en: "placement exam", zh: "免修/分级考试" },
            ],
            casualVersion: "Won't count as credit but the knowledge helps. You might skip the first programming class through a placement test — saves a semester. I'll connect you with the CS department.",
            formalityVariants: {
              casual: "No credit, but the experience helps. You could maybe test out of the first class with a placement exam. I'll hook you up with the CS folks.",
              standard: "It would not count for credit, but the knowledge will give you a head start. You might be able to test out of the first programming course through a placement exam. That would save you a semester. I can connect you with the CS department to schedule one.",
              formal: "While the external course would not be eligible for transfer credit, the foundational knowledge you acquired will certainly provide an advantage. You may be able to demonstrate proficiency through a departmental placement examination, which could allow you to bypass the introductory programming course. This would effectively reduce your timeline by one semester. I would be happy to facilitate an introduction to the computer science department to arrange such an assessment.",
            },
            alternativeExpressions: [
              {
                textEn: "No formal credit, but your Python experience matters. The CS department offers a placement test — if you pass, you skip Intro to Programming and go straight to the next level. Want me to set that up?",
                textZh: "没有正式学分，但你的Python经验很重要。计算机系提供免修考试——通过的话可以跳过编程入门直接上下一级。要我帮你安排吗？",
                actionHint: "建议免修考试",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds promising. Is there a way to double major instead of switching completely? I have already finished a lot of business credits.",
            textZh: "听起来很有希望。有没有办法修双学位而不是完全转专业？我已经修了很多商科学分了。",
            casualVersion: "What about a double major instead? I've done a ton of business credits already.",
            commonMistake: {
              wrong: "Is there a way to double major instead of switch completely?",
              correct: "Is there a way to double major instead of switching completely?",
              explanation: "instead of 后面接动名词 switching，不是动词原形。",
            },
            formalityVariants: {
              casual: "Could I just double major? Seems like a waste to throw away all those business credits.",
              standard: "That sounds promising. Is there a way to double major instead of switching completely? I have already finished a lot of business credits.",
              formal: "That is encouraging. I would also like to explore the possibility of pursuing a double major rather than abandoning my business coursework entirely. Given the substantial number of business credits I have already accumulated, this might be a more efficient path.",
            },
          },
          {
            speaker: "them",
            role: "学业顾问",
            textEn: "That is actually a smart move. With the business credits you already have, a double major would only add about three semesters. Plus, a business and CS combination is incredibly marketable. I would say it is one of the strongest pairings in today's job market.",
            textZh: "这其实是个聪明的选择。以你已经有的商科学分，双学位只会多大约三个学期。而且商科加计算机的组合在就业市场上非常抢手。我觉得这是当今就业市场上最强的搭配之一。",
            keyPhrases: [
              { en: "incredibly marketable", zh: "非常抢手/极具市场竞争力" },
              { en: "strongest pairings", zh: "最强的搭配/组合" },
            ],
            casualVersion: "Smart idea. With your business credits, a double major only adds about three semesters. And business plus CS? Super marketable combo.",
            formalityVariants: {
              casual: "That's actually genius. Double major only adds three semesters with what you've got. And business plus CS is a killer combo for jobs.",
              standard: "That is actually a smart move. With the business credits you already have, a double major would only add about three semesters. Plus, a business and CS combination is incredibly marketable. I would say it is one of the strongest pairings in today's job market.",
              formal: "That is an astute consideration. Given your existing business credits, pursuing a double major would require approximately three additional semesters. Furthermore, the combination of business and computer science credentials is exceptionally valued in the current employment landscape. I would characterize it as one of the most competitive dual-degree pairings available to graduates today.",
            },
            alternativeExpressions: [
              {
                textEn: "Actually, I was going to suggest that. You are close to finishing business, and adding CS would make your resume stand out. Tech companies love candidates who understand both code and business strategy.",
                textZh: "其实我正想建议这个。你快完成商科了，加上计算机科学会让你的简历脱颖而出。科技公司喜欢既懂代码又懂商业策略的人才。",
                actionHint: "推荐双学位方案",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 辅导中心 ====================
  {
    id: "education-tutoring-center",
    category: "education",
    titleZh: "辅导中心",
    titleEn: "Tutoring Center",
    description: "在大学辅导中心寻求学业帮助",
    otherRole: "辅导员",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "tutoring-center-basic",
        titleZh: "预约辅导课",
        titleEn: "Booking a Tutoring Session",
        description: "第一次到辅导中心预约一对一辅导",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I am struggling with my calculus class and I heard the tutoring center offers free help. How do I sign up for a session?",
            textZh: "你好，我微积分课学得很吃力，听说辅导中心提供免费帮助。怎么预约一次辅导？",
            culturalNote: "美国大学的辅导中心（tutoring center/writing center）对在校生完全免费，这是学费包含的服务。很多学生不知道这项资源，实际上优等生也会经常使用。",
            casualVersion: "Hey, I need help with calc. How do I sign up for tutoring?",
            commonMistake: {
              wrong: "I am struggling in my calculus class.",
              correct: "I am struggling with my calculus class.",
              explanation: "'struggle with' 是固定搭配，表示在某方面有困难。",
            },
            formalityVariants: {
              casual: "Hey, calc is kicking my butt. How do I get a tutor?",
              standard: "Hi, I am struggling with my calculus class and I heard the tutoring center offers free help. How do I sign up for a session?",
              formal: "Good afternoon. I have been experiencing difficulty with my calculus coursework and I understand that the tutoring center provides complimentary academic assistance. Could you please inform me of the procedure for scheduling a tutoring session?",
            },
          },
          {
            speaker: "them",
            role: "辅导员",
            textEn: "Welcome! You can book a session through our online portal or just walk in during open hours. We have tutors available Monday through Thursday from ten to six. Would you prefer one-on-one or small group tutoring?",
            textZh: "欢迎！你可以通过我们的在线系统预约，或者在开放时间直接来。我们周一到周四十点到六点都有辅导员。你喜欢一对一还是小组辅导？",
            keyPhrases: [
              { en: "walk in", zh: "直接到场/无需预约" },
              { en: "one-on-one", zh: "一对一" },
            ],
            casualVersion: "Hey, welcome! Book online or just show up. We're here Monday through Thursday, ten to six. Want one-on-one or group help?",
            formalityVariants: {
              casual: "Hey! Book online or just drop in, Mon-Thu, 10-6. One-on-one or group — your pick.",
              standard: "Welcome! You can book a session through our online portal or just walk in during open hours. We have tutors available Monday through Thursday from ten to six. Would you prefer one-on-one or small group tutoring?",
              formal: "Welcome to the tutoring center. Sessions may be reserved through our online scheduling portal, or you are welcome to visit during our operating hours without an appointment. Our tutors are available Monday through Thursday from 10:00 AM to 6:00 PM. May I ask whether you would prefer individualized one-on-one instruction or a small group session?",
            },
            alternativeExpressions: [
              {
                textEn: "Glad you came in! We do both drop-in and scheduled appointments. Drop-ins are first come, first served. For guaranteed time, book online. What works better for you?",
                textZh: "很高兴你来了！我们既接受随到随学也接受预约。随到随学先到先得。想保证有位子就在网上预约。哪种更适合你？",
                actionHint: "介绍预约方式",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "One-on-one would be better for me. I specifically need help with integration and the chain rule. Is it okay to bring my homework?",
            textZh: "一对一对我更好。我特别需要在积分和链式法则方面的帮助。可以带我的作业来吗？",
            casualVersion: "One-on-one please. Need help with integration and chain rule. Can I bring my homework?",
            commonMistake: {
              wrong: "I specifically need help on integration and chain rule.",
              correct: "I specifically need help with integration and the chain rule.",
              explanation: "'help with' 是固定搭配；特指的数学概念前用 the。",
            },
            formalityVariants: {
              casual: "One-on-one for sure. I need help with integrals and the chain rule. Cool if I bring homework?",
              standard: "One-on-one would be better for me. I specifically need help with integration and the chain rule. Is it okay to bring my homework?",
              formal: "I believe one-on-one instruction would be most beneficial for my needs. I require particular assistance with integration techniques and the chain rule. Would it be permissible to bring my homework assignments to the session for guided practice?",
            },
          },
          {
            speaker: "them",
            role: "辅导员",
            textEn: "Absolutely, bring your homework, textbook, and any class notes. The more materials you bring, the better we can target your weak spots. Our tutors are trained to guide you through problems step by step without just giving you the answers.",
            textZh: "当然可以，带上你的作业、课本和任何课堂笔记。你带的材料越多，我们就越能针对你的薄弱环节。我们的辅导员会一步步引导你解题，而不是直接给答案。",
            keyPhrases: [
              { en: "target your weak spots", zh: "针对你的薄弱环节" },
              { en: "step by step", zh: "一步一步地" },
            ],
            casualVersion: "For sure, bring everything — homework, textbook, notes. The more you bring, the better we can help. We'll walk you through problems, not just give answers.",
            formalityVariants: {
              casual: "Yeah, bring it all — homework, book, notes. We'll zero in on your weak spots and walk you through stuff step by step.",
              standard: "Absolutely, bring your homework, textbook, and any class notes. The more materials you bring, the better we can target your weak spots. Our tutors are trained to guide you through problems step by step without just giving you the answers.",
              formal: "Certainly, please bring your homework assignments, textbook, and any relevant class notes. The comprehensiveness of the materials you provide will enable our tutors to more precisely identify and address your specific areas of difficulty. Our tutoring methodology emphasizes guided problem-solving, wherein our tutors will lead you through each step of the process rather than simply providing solutions.",
            },
            alternativeExpressions: [
              {
                textEn: "Please bring everything you have — homework, notes, even old quizzes. It helps us figure out where you are getting stuck. We focus on teaching you the process, not doing the work for you.",
                textZh: "请把你有的都带来——作业、笔记，甚至以前的小测验。这帮我们弄清楚你在哪里卡住了。我们重点教你解题过程，而不是替你做。",
                actionHint: "强调主动学习方法",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds great. Can I see the same tutor every week, or does it change each time?",
            textZh: "听起来很好。我能每周见同一个辅导员吗，还是每次都换？",
            casualVersion: "Can I get the same tutor every week or does it change?",
            commonMistake: {
              wrong: "Can I see same tutor every week?",
              correct: "Can I see the same tutor every week?",
              explanation: "same 前面必须有定冠词 the。",
            },
            formalityVariants: {
              casual: "Can I stick with one tutor or is it different people every time?",
              standard: "That sounds great. Can I see the same tutor every week, or does it change each time?",
              formal: "That sounds excellent. Would it be possible to work with a consistent tutor on a weekly basis, or are sessions assigned to different tutors each visit?",
            },
          },
          {
            speaker: "them",
            role: "辅导员",
            textEn: "If you book a recurring weekly slot, you can request the same tutor. Consistency really helps because the tutor gets to know your learning style. Let me set you up with our best calculus tutor — she has rave reviews from students.",
            textZh: "如果你预约固定的每周时间段，可以要求同一个辅导员。保持一致性很有帮助，因为辅导员会了解你的学习风格。我给你安排我们最好的微积分辅导员——她的学生评价超级好。",
            keyPhrases: [
              { en: "recurring weekly slot", zh: "固定的每周时间段" },
              { en: "rave reviews", zh: "极好的评价" },
            ],
            casualVersion: "Book a regular weekly time and you can keep the same tutor. Helps a lot because they learn how you think. I'll set you up with our top calc tutor — students love her.",
            formalityVariants: {
              casual: "Yep, book a recurring slot and keep the same tutor. Way better that way. Let me hook you up with our best calc tutor — she's amazing.",
              standard: "If you book a recurring weekly slot, you can request the same tutor. Consistency really helps because the tutor gets to know your learning style. Let me set you up with our best calculus tutor — she has rave reviews from students.",
              formal: "If you establish a recurring weekly appointment, you may certainly request the same tutor for each session. Maintaining consistency is highly advantageous, as it allows the tutor to become familiar with your individual learning style and particular challenges. Allow me to arrange sessions with our most accomplished calculus tutor, who has received exceptional feedback from students.",
            },
            alternativeExpressions: [
              {
                textEn: "Yes, we encourage that. Regular students make the best progress when they stick with one tutor. I will pair you with Sarah — she specializes in calculus and her students consistently improve their grades.",
                textZh: "是的，我们鼓励这样做。固定学生和同一个辅导员的进步最大。我给你安排Sarah——她专攻微积分，她的学生成绩一直在提高。",
                actionHint: "安排固定辅导员",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "tutoring-center-intermediate",
        titleZh: "写作辅导",
        titleEn: "Writing Center Help",
        description: "在写作中心获得论文写作方面的指导",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have a ten-page research paper due next week and I am having trouble structuring my argument. Can you help me with an outline?",
            textZh: "你好，我下周要交一篇十页的研究论文，我在组织论点方面有困难。你能帮我列个提纲吗？",
            culturalNote: "美国大学的写作中心（Writing Center）不是代写服务，而是教你如何改进写作。辅导员会引导你思考论点结构，但不会替你写。",
            casualVersion: "Hey, I've got a ten-page paper due next week and I can't figure out the structure. Help with an outline?",
            commonMistake: {
              wrong: "I am having trouble to structure my argument.",
              correct: "I am having trouble structuring my argument.",
              explanation: "'have trouble + 动名词' 是固定结构，不用 to 不定式。",
            },
            formalityVariants: {
              casual: "Got a big paper due next week and I'm stuck on the structure. Can you help me outline it?",
              standard: "Hi, I have a ten-page research paper due next week and I am having trouble structuring my argument. Can you help me with an outline?",
              formal: "Good afternoon. I am preparing a ten-page research paper with a submission deadline next week. I find myself encountering difficulty in organizing the structural framework of my argument. Would you be able to assist me in developing a comprehensive outline?",
            },
          },
          {
            speaker: "them",
            role: "辅导员",
            textEn: "Of course. Let us start with your thesis statement. What is the main argument you are trying to make? Once we nail that down, we can build your outline around it with supporting points and evidence.",
            textZh: "当然。我们先从你的论题陈述开始。你想要论证的主要观点是什么？一旦确定了这个，我们就可以围绕它用论据和证据来构建提纲。",
            keyPhrases: [
              { en: "thesis statement", zh: "论题陈述/中心论点" },
              { en: "nail that down", zh: "确定下来/敲定" },
            ],
            casualVersion: "Sure. What's your main argument — your thesis? Once we lock that in, we'll build the outline with evidence and supporting points.",
            formalityVariants: {
              casual: "Yeah! What's your thesis? Get that locked in and we'll build the rest from there.",
              standard: "Of course. Let us start with your thesis statement. What is the main argument you are trying to make? Once we nail that down, we can build your outline around it with supporting points and evidence.",
              formal: "Certainly. I suggest we begin by examining your thesis statement. Could you articulate the central argument you intend to advance? Once we have established a clear thesis, we can construct a logical outline that incorporates supporting arguments and corroborating evidence.",
            },
            alternativeExpressions: [
              {
                textEn: "Let us work backward from your conclusion. What do you want the reader to believe by the end? That is your thesis. Then we figure out what evidence you need to get them there.",
                textZh: "我们从结论倒推。你希望读者最后相信什么？那就是你的论题。然后我们弄清楚需要什么证据来让他们信服。",
                actionHint: "引导明确论题",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "My paper is about how social media affects teenage mental health. I want to argue that it does more harm than good, but I also need to address counterarguments.",
            textZh: "我的论文是关于社交媒体如何影响青少年心理健康。我想论证它弊大于利，但我也需要回应反面论点。",
            casualVersion: "It's about social media and teen mental health. I'm arguing it hurts more than helps, but I gotta deal with counterarguments too.",
            commonMistake: {
              wrong: "I want to argue that it does more harm than good, but I also need to address counter arguments.",
              correct: "I want to argue that it does more harm than good, but I also need to address counterarguments.",
              explanation: "counterarguments 是一个复合词，不分开写。",
            },
            formalityVariants: {
              casual: "It's about social media messing with teen mental health. I think it does more harm than good but I gotta cover the other side too.",
              standard: "My paper is about how social media affects teenage mental health. I want to argue that it does more harm than good, but I also need to address counterarguments.",
              formal: "My research paper examines the impact of social media on adolescent mental health. My thesis posits that the detrimental effects outweigh the benefits; however, I recognize the importance of addressing counterarguments to strengthen the overall persuasiveness of my paper.",
            },
          },
          {
            speaker: "them",
            role: "辅导员",
            textEn: "Good — acknowledging counterarguments actually makes your paper stronger. A solid structure would be: introduction with thesis, two to three body paragraphs supporting your claim, one paragraph addressing the opposing view, and a conclusion. This is called the concession-rebuttal approach.",
            textZh: "很好——承认反面论点实际上会让你的论文更有力。一个扎实的结构是：包含论题的引言，两到三段支持你观点的正文，一段回应对立观点，然后是结论。这叫做让步-反驳法。",
            keyPhrases: [
              { en: "concession-rebuttal approach", zh: "让步-反驳法" },
              { en: "opposing view", zh: "对立观点" },
            ],
            casualVersion: "Addressing counterarguments makes your paper way stronger. Go with: intro, two-three supporting paragraphs, one for the opposing view, and a conclusion. It's called concession-rebuttal.",
            formalityVariants: {
              casual: "That's actually good — showing you know the other side makes you stronger. Do intro, two or three supporting paragraphs, one for the other side, and wrap it up. Concession-rebuttal style.",
              standard: "Good — acknowledging counterarguments actually makes your paper stronger. A solid structure would be: introduction with thesis, two to three body paragraphs supporting your claim, one paragraph addressing the opposing view, and a conclusion. This is called the concession-rebuttal approach.",
              formal: "Excellent — engaging with counterarguments is a hallmark of rigorous academic writing and will substantially strengthen your argument. I would recommend the following structure: an introduction that presents your thesis, two to three body paragraphs that substantiate your position, a dedicated paragraph that acknowledges and rebuts the opposing perspective, and a synthesizing conclusion. This methodology is known as the concession-rebuttal approach.",
            },
            alternativeExpressions: [
              {
                textEn: "Smart move including counterarguments — it shows critical thinking. Structure it as: hook, thesis, evidence for your side, then a 'some people argue' paragraph where you respectfully disagree, and end strong. This is the concession-rebuttal model.",
                textZh: "聪明的做法，包含反面论点——这展示了批判性思维。结构安排为：开篇钩子、论题、支持你立场的证据，然后一个'有人认为'的段落在其中你礼貌地反驳，最后有力收尾。这是让步-反驳模型。",
                actionHint: "讲解论文结构",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That makes a lot of sense. Can you also check my grammar and citations before I submit? I always mess up APA format.",
            textZh: "很有道理。你能在我提交前帮我检查语法和引用格式吗？我老是搞错APA格式。",
            casualVersion: "Makes sense. Can you also check my grammar and citations? I always mess up APA.",
            commonMistake: {
              wrong: "I always mess APA format.",
              correct: "I always mess up APA format.",
              explanation: "'mess up' 是固定短语动词，表示弄错/搞砸，up 不能省略。",
            },
            formalityVariants: {
              casual: "Cool. Can you look over my grammar and citations too? APA always trips me up.",
              standard: "That makes a lot of sense. Can you also check my grammar and citations before I submit? I always mess up APA format.",
              formal: "That framework is very logical, thank you. Additionally, would it be possible to have my grammar and citation formatting reviewed prior to submission? I find APA format particularly challenging and would appreciate professional guidance.",
            },
          },
          {
            speaker: "them",
            role: "辅导员",
            textEn: "We can definitely review grammar and citations in your next visit. Bring your draft and your reference list. One tip for APA — use a citation generator to get the basic format right, then double-check the details like italics and hanging indents. Common mistakes are forgetting the DOI or getting the author order wrong.",
            textZh: "我们下次来访时一定可以检查语法和引用。带上你的草稿和参考文献列表。APA的一个小技巧——用引用生成器先把基本格式弄对，然后仔细检查细节如斜体和悬挂缩进。常见错误是忘记DOI或搞错作者顺序。",
            keyPhrases: [
              { en: "hanging indents", zh: "悬挂缩进" },
              { en: "citation generator", zh: "引用格式生成器" },
            ],
            casualVersion: "Yep, bring your draft next time and we'll go over grammar and citations. Use a citation generator first, then check the little stuff — italics, hanging indents, DOIs.",
            formalityVariants: {
              casual: "For sure. Bring your draft next time. Use a citation generator first, then fix the small stuff — italics, indents, DOIs. That's where everyone messes up.",
              standard: "We can definitely review grammar and citations in your next visit. Bring your draft and your reference list. One tip for APA — use a citation generator to get the basic format right, then double-check the details like italics and hanging indents. Common mistakes are forgetting the DOI or getting the author order wrong.",
              formal: "We would be pleased to review your grammar and citations during a subsequent session. Please bring your draft manuscript along with your complete reference list. As a practical suggestion for APA formatting, I recommend utilizing a citation generation tool to establish the foundational format, then meticulously verifying details such as proper use of italics and hanging indentation. The most frequently observed errors include omitting the Digital Object Identifier and incorrectly sequencing co-authors.",
            },
            alternativeExpressions: [
              {
                textEn: "Happy to help with that. APA is tricky but manageable once you learn the patterns. Come back with your full draft and we will go through it line by line. I will also show you a free tool that catches most formatting errors automatically.",
                textZh: "很乐意帮忙。APA格式确实麻烦，但一旦学会规律就好办了。带完整的草稿来，我们会逐行检查。我还会给你看一个免费工具，能自动发现大部分格式错误。",
                actionHint: "安排论文审查",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 毕业典礼 ====================
  {
    id: "education-graduation-ceremony",
    category: "education",
    titleZh: "毕业典礼",
    titleEn: "Graduation Ceremony",
    description: "了解毕业典礼的流程和准备事项",
    otherRole: "毕业典礼协调员",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "graduation-ceremony-basic",
        titleZh: "毕业典礼准备",
        titleEn: "Preparing for Graduation",
        description: "了解毕业典礼的基本流程和需要准备的事项",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I am graduating this May and I want to make sure I have everything ready for the ceremony. What do I need to do?",
            textZh: "你好，我今年五月毕业，想确保我为典礼准备好了一切。我需要做什么？",
            culturalNote: "美国的毕业典礼（commencement）是非常重要的仪式，学生需要提前几个月注册、租学位服、申请停车证等。家人从外地飞来参加是常见的。",
            casualVersion: "Hey, I'm graduating in May. What do I need to get ready for the ceremony?",
            commonMistake: {
              wrong: "I want to make sure I have everything ready to the ceremony.",
              correct: "I want to make sure I have everything ready for the ceremony.",
              explanation: "'ready for' 是固定搭配，表示为某事做好准备。",
            },
            formalityVariants: {
              casual: "Graduating in May — what do I gotta do to get ready?",
              standard: "Hi, I am graduating this May and I want to make sure I have everything ready for the ceremony. What do I need to do?",
              formal: "Good morning. I will be graduating this May and I would like to ensure that all necessary preparations for the commencement ceremony are in order. Could you please outline the steps I need to take?",
            },
          },
          {
            speaker: "them",
            role: "毕业典礼协调员",
            textEn: "Congratulations! First, make sure you have applied to graduate through the registrar's office. Then you need to order your cap and gown by March fifteenth. Guests each need a ticket — you get four complimentary tickets and can request more if available.",
            textZh: "恭喜！首先，确保你已经通过教务处申请了毕业。然后你需要在三月十五日前订购学位帽和学位服。每位来宾需要一张入场券——你有四张免费票，可以申请更多（如果有的话）。",
            keyPhrases: [
              { en: "cap and gown", zh: "学位帽和学位服" },
              { en: "complimentary tickets", zh: "免费入场券" },
            ],
            casualVersion: "Congrats! Apply to graduate through the registrar, order your cap and gown by March 15th, and grab your guest tickets — four free ones, more if they're available.",
            formalityVariants: {
              casual: "Congrats! File your grad application, get your cap and gown by March 15th, and pick up guest tickets — four free, more if there's room.",
              standard: "Congratulations! First, make sure you have applied to graduate through the registrar's office. Then you need to order your cap and gown by March fifteenth. Guests each need a ticket — you get four complimentary tickets and can request more if available.",
              formal: "Congratulations on this significant achievement. The first step is to confirm that you have submitted your graduation application through the Office of the Registrar. Subsequently, you will need to place your order for the academic regalia — cap and gown — no later than March fifteenth. Regarding guests, each attendee requires a ticket. You will be allocated four complimentary tickets, with the option to request additional tickets subject to availability.",
            },
            alternativeExpressions: [
              {
                textEn: "So exciting! Here is a quick checklist: apply to graduate, order your regalia, and get guest tickets. The deadline for cap and gown orders is March fifteenth — do not miss that or you will pay a rush fee.",
                textZh: "太令人兴奋了！这是一个快速清单：申请毕业、订购学位服、领取来宾入场券。学位服订购截止日期是三月十五日——不要错过，否则要付加急费。",
                actionHint: "列出准备清单",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "My parents are coming from overseas. Is there a livestream option in case they have trouble getting to the venue?",
            textZh: "我父母从海外来。如果他们到不了会场，有直播选项吗？",
            casualVersion: "My parents are flying in from abroad. Is there a livestream just in case?",
            commonMistake: {
              wrong: "Is there a livestream option in case they have trouble to get to the venue?",
              correct: "Is there a livestream option in case they have trouble getting to the venue?",
              explanation: "'have trouble + 动名词' 是固定结构。",
            },
            formalityVariants: {
              casual: "My folks are coming from overseas. You guys stream it online in case something goes wrong?",
              standard: "My parents are coming from overseas. Is there a livestream option in case they have trouble getting to the venue?",
              formal: "My parents will be traveling from abroad for the occasion. Might I inquire whether the university provides a livestream of the ceremony as a contingency, should they encounter any difficulties reaching the venue?",
            },
          },
          {
            speaker: "them",
            role: "毕业典礼协调员",
            textEn: "Yes, we livestream every ceremony on our university website. The link goes live thirty minutes before the start. We also record it so your family can rewatch it anytime. I would also suggest arriving early — parking fills up fast on graduation day.",
            textZh: "是的，我们在大学网站上直播每场典礼。链接在开始前三十分钟上线。我们也会录制，这样你的家人可以随时重看。我还建议早点到——毕业当天停车位很快就满了。",
            keyPhrases: [
              { en: "goes live", zh: "上线/开始直播" },
              { en: "fills up fast", zh: "很快就满了" },
            ],
            casualVersion: "Yep, we stream it on the school website. Link goes up thirty minutes early. It's recorded too. Oh, and get there early — parking is a nightmare on grad day.",
            formalityVariants: {
              casual: "Yeah, we livestream on the website — link goes live thirty minutes before. It's all recorded too. And show up early, parking's insane on grad day.",
              standard: "Yes, we livestream every ceremony on our university website. The link goes live thirty minutes before the start. We also record it so your family can rewatch it anytime. I would also suggest arriving early — parking fills up fast on graduation day.",
              formal: "Indeed. Every commencement ceremony is livestreamed on the university's official website. The streaming link becomes active approximately thirty minutes prior to the ceremony's commencement. Additionally, a full recording is archived for subsequent viewing at your family's convenience. I would strongly recommend arriving early on the day of the ceremony, as parking availability diminishes rapidly.",
            },
            alternativeExpressions: [
              {
                textEn: "Absolutely. The livestream link is posted on our commencement page. We recommend sharing it with family ahead of time. A recording is also saved for at least a year. For parking, consider the shuttle from the overflow lot — it runs every ten minutes.",
                textZh: "当然。直播链接发布在我们的毕业典礼页面上。建议提前分享给家人。录像至少保存一年。停车的话，可以考虑从溢出停车场坐校车——每十分钟一班。",
                actionHint: "提供直播和停车建议",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What about the dress code? I know there is the cap and gown, but what should I wear underneath?",
            textZh: "着装有什么要求？我知道要穿学位帽和学位服，但里面穿什么？",
            casualVersion: "What do I wear under the cap and gown? Any dress code?",
            commonMistake: {
              wrong: "What should I dress underneath?",
              correct: "What should I wear underneath?",
              explanation: "'wear' 表示穿什么衣服；'dress' 作动词常用 'dress up' 或不带宾语。",
            },
            formalityVariants: {
              casual: "So what goes under the gown? Anything specific?",
              standard: "What about the dress code? I know there is the cap and gown, but what should I wear underneath?",
              formal: "Regarding attire, I understand that the academic regalia is required. However, could you advise me on the appropriate dress code for clothing worn beneath the cap and gown?",
            },
          },
          {
            speaker: "them",
            role: "毕业典礼协调员",
            textEn: "We recommend business casual underneath — dress pants or a nice dress, and closed-toe shoes since you will be walking across a stage. Avoid jeans and flip-flops. Many students decorate their caps — that is totally allowed and encouraged, actually. Just no offensive messages.",
            textZh: "我们建议里面穿商务休闲——西裤或正式连衣裙，穿包头鞋因为你要走过舞台。避免牛仔裤和人字拖。很多学生装饰他们的学位帽——这完全可以，实际上还被鼓励。只是不能有冒犯性的内容。",
            keyPhrases: [
              { en: "business casual", zh: "商务休闲" },
              { en: "closed-toe shoes", zh: "包头鞋" },
            ],
            casualVersion: "Wear business casual underneath — nice pants or a dress, closed-toe shoes. No jeans or flip-flops. Decorating your cap is cool and even encouraged — just keep it appropriate.",
            formalityVariants: {
              casual: "Dress nice under the gown — slacks or a dress, no flip-flops. And yeah, decorate your cap! Just keep it clean.",
              standard: "We recommend business casual underneath — dress pants or a nice dress, and closed-toe shoes since you will be walking across a stage. Avoid jeans and flip-flops. Many students decorate their caps — that is totally allowed and encouraged, actually. Just no offensive messages.",
              formal: "We advise wearing business casual attire beneath your academic regalia — dress trousers or a formal dress would be appropriate, along with closed-toe footwear, as you will be traversing the stage. We would ask that you refrain from wearing denim or open-toe sandals. You are most welcome to personalize your mortarboard; this practice is embraced and encouraged by the university, provided the decoration does not contain any inappropriate or offensive content.",
            },
            alternativeExpressions: [
              {
                textEn: "Think of it this way — your gown is open in the front during photos. So wear something you would be proud to see in pictures. A lot of graduates personalize their caps with quotes, flags, or thank-you messages to their parents.",
                textZh: "这么想——拍照时你的学位服前面是敞开的。所以穿一些你在照片里看到会自豪的衣服。很多毕业生在帽子上写名言、贴国旗或给父母的感谢语。",
                actionHint: "建议着装和装饰",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "graduation-ceremony-intermediate",
        titleZh: "典礼当天流程",
        titleEn: "Ceremony Day Logistics",
        description: "了解毕业典礼当天的具体流程和注意事项",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I am a bit nervous about the ceremony. Can you walk me through what happens on the day from start to finish?",
            textZh: "我对典礼有点紧张。你能从头到尾给我讲讲那天的流程吗？",
            culturalNote: "美国毕业典礼通常持续两到三个小时。学生按学院列队入场，校长致辞，然后逐一上台接受学位。家人在观众席欢呼是完全被鼓励的行为。",
            casualVersion: "I'm kinda nervous. What exactly happens on the day?",
            commonMistake: {
              wrong: "Can you walk me through what happens in the day from start to finish?",
              correct: "Can you walk me through what happens on the day from start to finish?",
              explanation: "特指某一天用介词 on，不用 in。",
            },
            formalityVariants: {
              casual: "I'm pretty nervous about the whole thing. What's the play-by-play for the day?",
              standard: "I am a bit nervous about the ceremony. Can you walk me through what happens on the day from start to finish?",
              formal: "I must confess to some apprehension regarding the ceremony. Would you be kind enough to provide a comprehensive overview of the day's proceedings from beginning to end?",
            },
          },
          {
            speaker: "them",
            role: "毕业典礼协调员",
            textEn: "You will check in at the staging area by nine AM. We will line you up by college in alphabetical order. The processional starts at ten — that is when you walk in to 'Pomp and Circumstance.' Then there are speeches, the conferring of degrees, and the recessional. The whole thing takes about two and a half hours.",
            textZh: "你九点前在集合区签到。我们会按学院和字母顺序排列。入场仪式十点开始——就是你们伴随《威风凛凛进行曲》走进来的时候。然后有演讲、学位授予和退场。整个过程大约两个半小时。",
            keyPhrases: [
              { en: "processional", zh: "入场仪式" },
              { en: "conferring of degrees", zh: "学位授予" },
            ],
            casualVersion: "Check in at the staging area by nine. We'll line everyone up alphabetically by college. You walk in at ten to 'Pomp and Circumstance.' Speeches, degree stuff, then you walk out. About two and a half hours total.",
            formalityVariants: {
              casual: "Show up at staging by nine, line up alphabetically, walk in at ten. Speeches, degree conferral, then out you go. Two and a half hours, give or take.",
              standard: "You will check in at the staging area by nine AM. We will line you up by college in alphabetical order. The processional starts at ten — that is when you walk in to 'Pomp and Circumstance.' Then there are speeches, the conferring of degrees, and the recessional. The whole thing takes about two and a half hours.",
              formal: "Graduates are required to check in at the designated staging area no later than 9:00 AM. You will be organized by college in alphabetical order for the processional. The academic procession commences at 10:00 AM, accompanied by the traditional 'Pomp and Circumstance' march. The program includes addresses from distinguished speakers, the formal conferring of degrees, and concludes with the recessional. The entire ceremony is expected to last approximately two and a half hours.",
            },
            alternativeExpressions: [
              {
                textEn: "Here is the rundown: check-in at nine, lineup by college, march in at ten. After the speeches and the diploma walk, everyone throws their caps. The whole event wraps up around twelve thirty.",
                textZh: "流程如下：九点签到，按学院排队，十点入场。演讲和领证书之后，大家把帽子扔上天。整个活动大约十二点半结束。",
                actionHint: "概述当天流程",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "When my name is called, do I just walk across the stage and shake hands? I do not want to trip or do something embarrassing.",
            textZh: "叫到我名字时，我就走过舞台握手吗？我不想绊倒或做什么丢人的事。",
            casualVersion: "When they call my name, what do I do? I really don't wanna trip or something.",
            commonMistake: {
              wrong: "I do not want to trip or do something embarrassed.",
              correct: "I do not want to trip or do something embarrassing.",
              explanation: "'embarrassing' 描述事情让人尴尬；'embarrassed' 描述人感到尴尬。",
            },
            formalityVariants: {
              casual: "So when they say my name, I just walk up and shake hands? Please tell me I won't trip.",
              standard: "When my name is called, do I just walk across the stage and shake hands? I do not want to trip or do something embarrassing.",
              formal: "When my name is announced, am I simply to proceed across the stage and shake hands with the presenter? I must admit I am somewhat anxious about maintaining my composure during such a public moment.",
            },
          },
          {
            speaker: "them",
            role: "毕业典礼协调员",
            textEn: "You will hear your name, walk to the center of the stage, shake the dean's hand with your right hand while receiving your diploma cover with your left, pause for the photographer, then exit stage right. We will do a quick rehearsal in the morning so everyone knows the flow. You will be fine!",
            textZh: "你会听到你的名字，走到舞台中央，右手和院长握手同时左手接过学位证封套，在摄影师面前停一下，然后从舞台右侧退场。我们早上会做一个简短的排练，让每个人都知道流程。你会没事的！",
            keyPhrases: [
              { en: "diploma cover", zh: "学位证封套" },
              { en: "exit stage right", zh: "从舞台右侧退场" },
            ],
            casualVersion: "Hear your name, walk center stage, shake the dean's hand — right hand shake, left hand takes the diploma thing. Pause for the photo, walk off stage right. We'll rehearse in the morning. You'll be great!",
            formalityVariants: {
              casual: "Your name gets called, you walk up, shake with the right, grab the diploma with the left, quick photo, walk off right. We practice in the morning. No stress!",
              standard: "You will hear your name, walk to the center of the stage, shake the dean's hand with your right hand while receiving your diploma cover with your left, pause for the photographer, then exit stage right. We will do a quick rehearsal in the morning so everyone knows the flow. You will be fine!",
              formal: "Upon hearing your name announced, you will proceed to the center of the stage. You will shake the dean's hand with your right hand while simultaneously receiving your diploma cover in your left hand. Please pause briefly for the official photographer before exiting to stage right. A brief rehearsal will be conducted that morning to familiarize all graduates with the procedure. I assure you, it is quite straightforward.",
            },
            alternativeExpressions: [
              {
                textEn: "It is very simple once you see it. Walk, shake, smile, photo, walk off. We practice the whole thing that morning. Thousands of students do this every year — you will be absolutely fine.",
                textZh: "看一遍就很简单了。走、握手、微笑、拍照、走下台。那天早上我们会练习整个流程。每年成千上万的学生都这么做——你绝对没问题。",
                actionHint: "消除紧张情绪",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Where should I tell my family to sit? I want them to be able to see me and take good photos.",
            textZh: "我应该让我的家人坐哪里？我希望他们能看到我并拍到好照片。",
            casualVersion: "Where should my family sit for the best view and photos?",
            commonMistake: {
              wrong: "Where should I tell my family to sit so they can see me and take good photo?",
              correct: "Where should I tell my family to sit? I want them to be able to see me and take good photos.",
              explanation: "photos 用复数更自然；两个分句分开表达更清晰。",
            },
            formalityVariants: {
              casual: "Where's the best spot for my family to sit? I want them to get good pics of me.",
              standard: "Where should I tell my family to sit? I want them to be able to see me and take good photos.",
              formal: "Could you recommend optimal seating for my family members? I would like to ensure they have a clear vantage point from which to observe the ceremony and capture photographs.",
            },
          },
          {
            speaker: "them",
            role: "毕业典礼协调员",
            textEn: "Seating is first come, first served for general admission. I recommend having your family arrive by eight thirty for the best seats. The sections closest to the stage are on the left side of the arena. We also have a professional photographer — all photos will be posted online within a week and you can order prints.",
            textZh: "普通入场的座位先到先得。我建议你的家人八点半前到以获得最好的座位。最靠近舞台的区域在体育馆的左侧。我们还有专业摄影师——所有照片会在一周内发布到网上，你可以订购打印版。",
            keyPhrases: [
              { en: "first come, first served", zh: "先到先得" },
              { en: "order prints", zh: "订购打印版" },
            ],
            casualVersion: "Seats are first come, first served. Tell them to show up by eight thirty. Left side of the arena is closest to the stage. Pro photographers are there too — photos go online in a week.",
            formalityVariants: {
              casual: "It's first come, first served. Get your fam there by eight thirty for good seats — left side is best. Pro photos go online in about a week.",
              standard: "Seating is first come, first served for general admission. I recommend having your family arrive by eight thirty for the best seats. The sections closest to the stage are on the left side of the arena. We also have a professional photographer — all photos will be posted online within a week and you can order prints.",
              formal: "General admission seating is allocated on a first-come, first-served basis. I would recommend that your family arrive no later than 8:30 AM to secure optimal seating. The sections situated on the left side of the arena offer the closest proximity to the stage. Additionally, a professional photography service will be present throughout the ceremony. All photographs will be made available on our online platform within one week, and prints may be ordered at your convenience.",
            },
            alternativeExpressions: [
              {
                textEn: "Doors open at eight. The earlier your family gets there, the better the seats. The left-side bleachers give the best view of the stage. Do not worry about photos — our professional team captures every graduate. You will get an email with a link to download or order prints.",
                textZh: "八点开门。你的家人越早到，座位越好。左侧看台能看到舞台的最佳视角。不用担心照片——我们的专业团队会拍到每位毕业生。你会收到一封邮件，附有下载或订购照片的链接。",
                actionHint: "提供座位和拍照建议",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 申请成绩单 ====================
  {
    id: "education-transcript-request",
    category: "education",
    titleZh: "申请成绩单",
    titleEn: "Transcript Request",
    description: "向学校申请官方成绩单",
    otherRole: "教务处工作人员",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "transcript-request-basic",
        titleZh: "申请官方成绩单",
        titleEn: "Requesting an Official Transcript",
        description: "第一次向教务处申请官方成绩单",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to request an official transcript. I am applying to graduate school and they require one sent directly from my university.",
            textZh: "你好，我需要申请一份官方成绩单。我在申请研究生院，他们要求从我的大学直接寄送。",
            culturalNote: "在美国，official transcript（官方成绩单）必须由学校直接密封寄出或通过认证的电子系统发送。学生自己手中的成绩单被视为 unofficial（非官方），不被接受。",
            casualVersion: "Hey, I need an official transcript for grad school apps. They want it sent from the school directly.",
            commonMistake: {
              wrong: "I need to request official transcript.",
              correct: "I need to request an official transcript.",
              explanation: "可数名词单数前需要冠词 an。",
            },
            formalityVariants: {
              casual: "Hi, I need a transcript for my grad school applications. It has to come from you guys directly.",
              standard: "Hi, I need to request an official transcript. I am applying to graduate school and they require one sent directly from my university.",
              formal: "Good morning. I would like to request an official academic transcript. I am in the process of applying to graduate programs, and the institutions require that transcripts be transmitted directly from the issuing university.",
            },
          },
          {
            speaker: "them",
            role: "教务处工作人员",
            textEn: "Sure! You can order transcripts through our online portal using your student ID. There is a ten-dollar fee per copy. Would you like it sent electronically or by mail? Electronic delivery is faster — usually within one to two business days.",
            textZh: "当然！你可以通过我们的在线系统用学生证号订购。每份十美元。你想电子发送还是邮寄？电子发送更快——通常一到两个工作日。",
            keyPhrases: [
              { en: "electronic delivery", zh: "电子发送" },
              { en: "per copy", zh: "每份" },
            ],
            casualVersion: "Sure! Order online with your student ID. Ten bucks each. Want it emailed or mailed? Email's way faster — one to two days.",
            formalityVariants: {
              casual: "Easy! Just order online, ten dollars a copy. Electronic is faster — one or two days. Snail mail takes longer.",
              standard: "Sure! You can order transcripts through our online portal using your student ID. There is a ten-dollar fee per copy. Would you like it sent electronically or by mail? Electronic delivery is faster — usually within one to two business days.",
              formal: "Certainly. Transcript requests may be submitted through our online ordering portal using your student identification credentials. A processing fee of ten dollars is assessed per copy. May I ask your preference for delivery method? Electronic transmission is typically completed within one to two business days, whereas physical mail delivery requires additional time.",
            },
            alternativeExpressions: [
              {
                textEn: "No problem. Go to our transcript page, log in, pick electronic or paper, and pay the fee. Electronic goes through a service called Parchment — most grad schools accept it. Paper takes about a week.",
                textZh: "没问题。去我们的成绩单页面，登录，选电子或纸质，付费。电子版通过一个叫 Parchment 的服务发送——大多数研究生院都接受。纸质版大约一周。",
                actionHint: "介绍订购方式",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Electronic would be great. Can I send it to multiple schools at once, or do I need to place a separate order for each one?",
            textZh: "电子的就好。我能一次发给多所学校，还是每所学校需要单独下一个订单？",
            casualVersion: "Electronic works. Can I send to multiple schools at once or do I order each one separately?",
            commonMistake: {
              wrong: "Do I need to place separate order for each one?",
              correct: "Do I need to place a separate order for each one?",
              explanation: "不定冠词 a 不能省略。",
            },
            formalityVariants: {
              casual: "Electronic's fine. Can I blast it to a bunch of schools at once or do I gotta order each one?",
              standard: "Electronic would be great. Can I send it to multiple schools at once, or do I need to place a separate order for each one?",
              formal: "Electronic delivery would be preferable. Is it possible to transmit the transcript to multiple institutions in a single transaction, or must I submit individual orders for each recipient?",
            },
          },
          {
            speaker: "them",
            role: "教务处工作人员",
            textEn: "You will need a separate order for each school, but it is easy — just add each recipient's address in the system. Each one is ten dollars. Most schools will also email you a confirmation once they have received it.",
            textZh: "每所学校需要单独下单，但很简单——在系统里添加每个收件人的地址就行。每个十美元。大多数学校收到后也会给你发确认邮件。",
            keyPhrases: [
              { en: "recipient's address", zh: "收件人地址" },
              { en: "confirmation", zh: "确认（邮件）" },
            ],
            casualVersion: "Yeah, separate order for each school. Just plug in their addresses, ten bucks each. Most schools will email you when they get it.",
            formalityVariants: {
              casual: "One order per school, but it's quick — just add each address. Ten bucks a pop. They'll email you when it arrives.",
              standard: "You will need a separate order for each school, but it is easy — just add each recipient's address in the system. Each one is ten dollars. Most schools will also email you a confirmation once they have received it.",
              formal: "A separate order is required for each recipient institution; however, the process is quite streamlined — you simply enter each institution's designated address within the ordering system. The fee of ten dollars applies to each individual transcript. Most receiving institutions will also issue you a confirmation notification upon receipt.",
            },
            alternativeExpressions: [
              {
                textEn: "Each school needs its own order, but the system saves your info so subsequent ones are quicker. You can track the status of each delivery in your account. Schools typically confirm receipt within a few days.",
                textZh: "每所学校需要单独的订单，但系统会保存你的信息，后面的会更快。你可以在账户里追踪每份的发送状态。学校通常在几天内确认收到。",
                actionHint: "说明多校发送流程",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "One of my schools has a deadline next Friday. Will it get there in time if I order today?",
            textZh: "我有一所学校下周五截止。如果我今天下单，能按时到吗？",
            casualVersion: "One school's deadline is next Friday. Will it make it if I order now?",
            commonMistake: {
              wrong: "Will it get there on time if I order today?",
              correct: "Will it get there in time if I order today?",
              explanation: "'in time' 表示赶上截止日期；'on time' 表示准时到达（如火车准点），语义不同。",
            },
            formalityVariants: {
              casual: "One school's due next Friday. If I order now, will it make it?",
              standard: "One of my schools has a deadline next Friday. Will it get there in time if I order today?",
              formal: "One of my target institutions has a submission deadline of next Friday. If I were to place the order today, would the electronic delivery be completed within that timeframe?",
            },
          },
          {
            speaker: "them",
            role: "教务处工作人员",
            textEn: "If you order electronic delivery today, it should arrive within one to two business days — well before Friday. I would recommend ordering right now just to be safe. You will get a tracking notification by email so you can confirm it was delivered.",
            textZh: "如果你今天下单电子发送，应该在一到两个工作日内到达——远在周五之前。我建议你现在就下单以防万一。你会通过邮件收到跟踪通知，确认已送达。",
            keyPhrases: [
              { en: "just to be safe", zh: "以防万一" },
              { en: "tracking notification", zh: "跟踪通知" },
            ],
            casualVersion: "Electronic delivery? One to two days — you'll be fine before Friday. Order now to be safe. You'll get an email tracking it.",
            formalityVariants: {
              casual: "Electronic? One to two days tops. You'll make Friday easy. Do it now just in case. They email you when it's delivered.",
              standard: "If you order electronic delivery today, it should arrive within one to two business days — well before Friday. I would recommend ordering right now just to be safe. You will get a tracking notification by email so you can confirm it was delivered.",
              formal: "Should you place an electronic delivery order today, the transcript should be received within one to two business days, comfortably ahead of Friday's deadline. I would nevertheless recommend submitting the order promptly as a precautionary measure. You will receive a delivery tracking notification via email, enabling you to verify that the transcript has been successfully received by the institution.",
            },
            alternativeExpressions: [
              {
                textEn: "Electronic transcripts usually arrive same day or next day. Ordering today means you have plenty of buffer before Friday. Once it is sent, you can check the delivery status in your account.",
                textZh: "电子成绩单通常当天或第二天就到。今天下单意味着在周五之前有充足的缓冲。发送后你可以在账户里查看送达状态。",
                actionHint: "确认时间充裕",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "transcript-request-intermediate",
        titleZh: "处理特殊成绩单需求",
        titleEn: "Handling Special Transcript Needs",
        description: "处理成绩单上的特殊情况，如转学学分和成绩申诉",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I transferred from a community college and some of my credits are not showing on my university transcript. How do I get those added?",
            textZh: "我从社区大学转来的，有些学分没有出现在我的大学成绩单上。怎么把它们加上去？",
            culturalNote: "美国的转学学分（transfer credits）需要经过学校的正式评估才会出现在新学校的成绩单上。这个过程有时需要主动跟进。",
            casualVersion: "I transferred from community college and some credits aren't on my transcript. How do I fix that?",
            commonMistake: {
              wrong: "Some of my credits are not showing in my university transcript.",
              correct: "Some of my credits are not showing on my university transcript.",
              explanation: "成绩单上显示用介词 on，不用 in。",
            },
            formalityVariants: {
              casual: "I came from community college and some of my credits are missing from my transcript. What do I do?",
              standard: "I transferred from a community college and some of my credits are not showing on my university transcript. How do I get those added?",
              formal: "I previously attended a community college before transferring to this university. I have noticed that several of my transfer credits have not been reflected on my official university transcript. Could you advise me on the procedure for having these credits properly recorded?",
            },
          },
          {
            speaker: "them",
            role: "教务处工作人员",
            textEn: "That happens sometimes when transfer evaluations are delayed. You will need to submit an official transcript from your community college to our transfer credit office. They will evaluate each course and update your records. It usually takes two to three weeks to process.",
            textZh: "转学评估延迟时有时会发生这种情况。你需要向我们的转学学分办公室提交一份你社区大学的官方成绩单。他们会评估每门课程并更新你的记录。通常需要两到三周处理。",
            keyPhrases: [
              { en: "transfer evaluation", zh: "转学评估" },
              { en: "transfer credit office", zh: "转学学分办公室" },
            ],
            casualVersion: "That happens when transfer stuff gets delayed. Send your community college transcript to our transfer office. They'll check each course and update your records. Takes two to three weeks.",
            formalityVariants: {
              casual: "Yeah, that happens. Get your community college to send an official transcript to our transfer office. They'll sort it out in a couple weeks.",
              standard: "That happens sometimes when transfer evaluations are delayed. You will need to submit an official transcript from your community college to our transfer credit office. They will evaluate each course and update your records. It usually takes two to three weeks to process.",
              formal: "This discrepancy occasionally arises when transfer credit evaluations experience processing delays. To rectify this, you will need to arrange for an official transcript from your community college to be submitted to our Transfer Credit Evaluation Office. Each course will be individually assessed for equivalency, and your academic record will be updated accordingly. The typical processing timeframe is two to three weeks.",
            },
            alternativeExpressions: [
              {
                textEn: "It is likely a processing delay. Request your community college to send their official transcript directly to us. Our transfer team will review each course, decide what transfers, and add the approved credits to your record.",
                textZh: "这可能是处理延迟。让你的社区大学直接把官方成绩单寄给我们。我们的转学团队会审查每门课，决定哪些可以转，然后把批准的学分加到你的记录里。",
                actionHint: "说明转学学分流程",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I also noticed a grade on my transcript that I believe is incorrect. My professor told me he submitted a grade change, but it still shows the old grade. What should I do?",
            textZh: "我还发现成绩单上有一个我认为不正确的成绩。我的教授告诉我他已经提交了成绩变更，但仍然显示旧成绩。我该怎么办？",
            casualVersion: "There's also a wrong grade on my transcript. My prof said he fixed it but it still shows the old one. What now?",
            commonMistake: {
              wrong: "My professor told me he submitted a grade change, but it still shows old grade.",
              correct: "My professor told me he submitted a grade change, but it still shows the old grade.",
              explanation: "特指那个旧成绩，需要定冠词 the。",
            },
            formalityVariants: {
              casual: "Also, there's a wrong grade. My prof said he changed it but it hasn't updated. Help?",
              standard: "I also noticed a grade on my transcript that I believe is incorrect. My professor told me he submitted a grade change, but it still shows the old grade. What should I do?",
              formal: "Additionally, I have identified what appears to be an erroneous grade on my transcript. My professor has informed me that he submitted a formal grade change request; however, the previous grade remains on record. Could you please investigate this matter?",
            },
          },
          {
            speaker: "them",
            role: "教务处工作人员",
            textEn: "Let me look that up for you. Sometimes grade changes take a few days to process in the system. Can you tell me the course number and the semester? I will check whether the change request has been received and where it is in the pipeline.",
            textZh: "让我帮你查一下。有时候成绩变更在系统里需要几天才能处理完。你能告诉我课程号和学期吗？我会检查变更申请是否已收到以及在处理流程的哪个阶段。",
            keyPhrases: [
              { en: "in the pipeline", zh: "在处理流程中" },
              { en: "grade change", zh: "成绩变更" },
            ],
            casualVersion: "Let me check. Grade changes take a few days sometimes. What's the course and semester? I'll see where it's at in the system.",
            formalityVariants: {
              casual: "Lemme look it up. Grade changes can be slow. What course and semester? I'll track it down.",
              standard: "Let me look that up for you. Sometimes grade changes take a few days to process in the system. Can you tell me the course number and the semester? I will check whether the change request has been received and where it is in the pipeline.",
              formal: "Allow me to investigate this for you. Grade modifications occasionally require several business days for system processing. Could you kindly provide the course number and the relevant semester? I will verify whether the grade change request has been received and ascertain its current status within our processing pipeline.",
            },
            alternativeExpressions: [
              {
                textEn: "Grade changes can get stuck in the system. Give me the course info and I will trace the change request. If the professor submitted it, it is just a matter of processing time. If he did not, I will let you know so you can follow up with him.",
                textZh: "成绩变更有时会卡在系统里。把课程信息给我，我来追踪变更申请。如果教授提交了，只是处理时间的问题。如果他没提交，我会通知你，你可以跟他跟进。",
                actionHint: "追踪成绩变更",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "It is Biology 201 from last fall. He said he changed the grade from a C to a B because there was a grading error on the final exam.",
            textZh: "是去年秋季的生物学201。他说因为期末考试有评分错误，把成绩从C改成了B。",
            casualVersion: "Bio 201, last fall. He changed it from a C to a B — grading error on the final.",
            commonMistake: {
              wrong: "He changed the grade from C to B.",
              correct: "He changed the grade from a C to a B.",
              explanation: "具体等级前需要不定冠词 a。",
            },
            formalityVariants: {
              casual: "Bio 201, fall semester. It was a C but should be a B — there was a mistake on the final.",
              standard: "It is Biology 201 from last fall. He said he changed the grade from a C to a B because there was a grading error on the final exam.",
              formal: "The course in question is Biology 201 from the fall semester. According to my professor, the grade was revised from a C to a B due to an identified scoring error on the final examination.",
            },
          },
          {
            speaker: "them",
            role: "教务处工作人员",
            textEn: "I found it. The change request was submitted last Tuesday but it is pending department approval. Once the department chair signs off, it will be updated within twenty-four hours. I will flag it as urgent since you need an accurate transcript for your applications. You should see the update by end of this week.",
            textZh: "我找到了。变更申请上周二提交了，但正在等待系部批准。一旦系主任签字通过，二十四小时内就会更新。因为你需要准确的成绩单用于申请，我会把它标记为紧急。你应该在本周末之前看到更新。",
            keyPhrases: [
              { en: "signs off", zh: "签字批准" },
              { en: "flag it as urgent", zh: "标记为紧急" },
            ],
            casualVersion: "Found it. Submitted last Tuesday, waiting on department approval. Once the chair signs off, it updates in twenty-four hours. I'll mark it urgent for you. Should be fixed by end of week.",
            formalityVariants: {
              casual: "Got it. It went in last Tuesday but needs the department head's OK. Once they sign, it updates in a day. I'll push it through as urgent. Should be done by Friday.",
              standard: "I found it. The change request was submitted last Tuesday but it is pending department approval. Once the department chair signs off, it will be updated within twenty-four hours. I will flag it as urgent since you need an accurate transcript for your applications. You should see the update by end of this week.",
              formal: "I have located the record. The grade change request was submitted last Tuesday and is currently pending departmental approval from the chair. Upon receiving the necessary authorization, the system will reflect the updated grade within twenty-four hours. Given the time-sensitive nature of your graduate school applications, I will escalate this request and flag it for expedited processing. You may anticipate the correction appearing on your transcript by the conclusion of this week.",
            },
            alternativeExpressions: [
              {
                textEn: "Good news — the request is in the system. It just needs the department chair to approve it. I am going to escalate this so it gets done fast. Check your transcript Friday and it should be updated. If not, come see me.",
                textZh: "好消息——申请在系统里了。只需要系主任批准。我会加速处理。周五查看你的成绩单，应该已经更新了。如果没有，来找我。",
                actionHint: "加速处理成绩变更",
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
    id: "education-college-application",
    category: "education",
    titleZh: "大学申请",
    titleEn: "College Application",
    description: "了解和准备大学本科申请流程",
    otherRole: "招生顾问",
    otherRoleIcon: "🏫",
    flows: [
      {
        id: "college-application-basic",
        titleZh: "了解申请要求",
        titleEn: "Understanding Application Requirements",
        description: "向招生顾问了解大学申请的基本要求",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I am a high school senior and I want to apply to this university. Can you tell me what the application requirements are?",
            textZh: "你好，我是高中毕业班学生，想申请这所大学。你能告诉我申请要求是什么吗？",
            culturalNote: "美国大学申请通常需要 SAT/ACT 成绩、高中成绩单、推荐信、个人陈述（essay）和课外活动列表。近年来很多学校变成 test-optional（标化可选），不强制要求 SAT/ACT。",
            casualVersion: "Hey, I'm a senior in high school and I wanna apply here. What do I need?",
            commonMistake: {
              wrong: "Can you tell me what are the application requirements?",
              correct: "Can you tell me what the application requirements are?",
              explanation: "间接疑问句用陈述语序，不是疑问语序。",
            },
            formalityVariants: {
              casual: "Hi, I'm a senior and I'm looking to apply. What do I need to submit?",
              standard: "Hi, I am a high school senior and I want to apply to this university. Can you tell me what the application requirements are?",
              formal: "Good morning. I am currently a high school senior and I am very interested in applying to your university. Would you be so kind as to outline the admissions requirements for undergraduate applicants?",
            },
          },
          {
            speaker: "them",
            role: "招生顾问",
            textEn: "Welcome! You will need to submit your high school transcript, two letters of recommendation, a personal essay, and your SAT or ACT scores — though we are test-optional this year. The application deadline for fall admission is January fifteenth.",
            textZh: "欢迎！你需要提交高中成绩单、两封推荐信、一篇个人陈述，以及SAT或ACT成绩——不过我们今年是标化可选。秋季入学的申请截止日期是一月十五日。",
            keyPhrases: [
              { en: "test-optional", zh: "标化可选" },
              { en: "letters of recommendation", zh: "推荐信" },
            ],
            casualVersion: "Welcome! You need your transcript, two rec letters, a personal essay, and SAT/ACT scores — but we're test-optional. Deadline is January 15th.",
            formalityVariants: {
              casual: "Hey, welcome! Transcript, two rec letters, an essay, and test scores — but scores are optional now. Deadline's January 15th.",
              standard: "Welcome! You will need to submit your high school transcript, two letters of recommendation, a personal essay, and your SAT or ACT scores — though we are test-optional this year. The application deadline for fall admission is January fifteenth.",
              formal: "Welcome, and thank you for your interest in our institution. The application requires submission of your official high school transcript, two letters of recommendation, a personal essay, and your standardized test scores from the SAT or ACT — although I should note that we have adopted a test-optional admissions policy for the current cycle. The deadline for fall semester admission is January fifteenth.",
            },
            alternativeExpressions: [
              {
                textEn: "Great to hear! Here is what we need: your transcript, two teacher recommendations, one personal essay — the Common App prompt or our own — and SAT or ACT scores if you choose to submit them. We are test-optional. Everything is due January fifteenth.",
                textZh: "很高兴听到！我们需要的是：你的成绩单、两封老师推荐信、一篇个人陈述——Common App的题目或我们自己的——如果你选择提交的话还有SAT或ACT成绩。我们是标化可选。所有材料一月十五日截止。",
                actionHint: "列出申请材料清单",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What should I write about in the personal essay? I am not sure how to make mine stand out.",
            textZh: "个人陈述应该写什么？我不确定怎么让我的文章脱颖而出。",
            casualVersion: "What should I write my essay about? How do I make it stand out?",
            commonMistake: {
              wrong: "I am not sure how to make my essay stand out.",
              correct: "I am not sure how to make mine stand out.",
              explanation: "用 mine 代替 my essay 避免重复更自然（当然 my essay 也不算错）。",
            },
            formalityVariants: {
              casual: "What do I write about? How do I make it not boring?",
              standard: "What should I write about in the personal essay? I am not sure how to make mine stand out.",
              formal: "Could you offer any guidance regarding the personal essay? I am uncertain as to what subject matter would be most compelling, and I wish to ensure that my essay distinguishes itself among other applicants.",
            },
          },
          {
            speaker: "them",
            role: "招生顾问",
            textEn: "The best essays are authentic and specific. Do not try to sound impressive — tell a real story about something meaningful to you. It could be a challenge you overcame, a passion you pursued, or a moment that changed your perspective. We want to hear your voice, not a polished version of what you think we want to hear.",
            textZh: "最好的文章是真实和具体的。不要试图听起来很厉害——讲一个对你有意义的真实故事。可以是你克服的挑战、你追求的热情、或改变了你视角的一刻。我们想听到你的声音，而不是你认为我们想听的润色版本。",
            keyPhrases: [
              { en: "authentic and specific", zh: "真实和具体" },
              { en: "changed your perspective", zh: "改变了你的视角" },
            ],
            casualVersion: "Be real and specific. Tell a true story that matters to you — a challenge, a passion, a moment that changed you. Just be yourself, don't try to sound fancy.",
            formalityVariants: {
              casual: "Keep it real. Tell us a true story. A challenge you beat, something you're into, whatever changed how you see things. We wanna hear YOU, not some polished act.",
              standard: "The best essays are authentic and specific. Do not try to sound impressive — tell a real story about something meaningful to you. It could be a challenge you overcame, a passion you pursued, or a moment that changed your perspective. We want to hear your voice, not a polished version of what you think we want to hear.",
              formal: "The most compelling personal essays are characterized by authenticity and specificity. Rather than attempting to project an idealized image, I would encourage you to share a genuine narrative about a personally significant experience. This might encompass a challenge you successfully navigated, a pursuit about which you are deeply passionate, or a transformative moment that reshaped your worldview. Our admissions committee values hearing your authentic voice, not a curated presentation of what you believe we wish to read.",
            },
            alternativeExpressions: [
              {
                textEn: "Think of it this way — we read thousands of essays. The ones that stick with us are personal, honest, and show growth. Pick one moment and go deep. We do not need your whole life story.",
                textZh: "这么想——我们读几千篇文章。让我们印象深刻的是个人的、诚实的、展现成长的。选一个时刻深入写。我们不需要你的全部人生故事。",
                actionHint: "分享写作技巧",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Do extracurricular activities really matter? I do not have any big awards, but I have been volunteering at a local shelter for two years.",
            textZh: "课外活动真的重要吗？我没有什么大奖，但我已经在当地收容所做了两年志愿者。",
            casualVersion: "Do extracurriculars really matter? I don't have any big awards but I've volunteered for two years.",
            commonMistake: {
              wrong: "I do not have any big awards, but I have been volunteering in a local shelter for two years.",
              correct: "I do not have any big awards, but I have been volunteering at a local shelter for two years.",
              explanation: "在某个具体地点做志愿者用介词 at，不用 in。",
            },
            formalityVariants: {
              casual: "Are extracurriculars a big deal? I don't have trophies but I've been volunteering at a shelter for two years.",
              standard: "Do extracurricular activities really matter? I do not have any big awards, but I have been volunteering at a local shelter for two years.",
              formal: "I would like to understand the significance of extracurricular activities in the admissions process. While I have not received any notable accolades, I have maintained a consistent commitment to volunteer work at a local shelter for the past two years.",
            },
          },
          {
            speaker: "them",
            role: "招生顾问",
            textEn: "Absolutely — and consistent long-term commitment like yours is exactly what we value. We are not looking for a long list of activities. We would rather see depth over breadth. Two years of volunteering shows dedication, empathy, and follow-through. That tells us a lot about your character.",
            textZh: "当然重要——像你这样持续的长期投入正是我们重视的。我们不是在找一长串活动列表。我们更看重深度而非广度。两年的志愿服务展示了奉献精神、同理心和坚持到底。这告诉我们很多关于你品格的信息。",
            keyPhrases: [
              { en: "depth over breadth", zh: "深度优于广度" },
              { en: "follow-through", zh: "坚持到底/持续投入" },
            ],
            casualVersion: "Totally. Consistent commitment like that is way more impressive than a list of random stuff. Two years shows dedication. Quality over quantity — that's what we care about.",
            formalityVariants: {
              casual: "Yeah, for sure. Long-term stuff like yours matters way more than a trophy. We'd rather see depth than a mile-long list. Two years of volunteering? That's gold.",
              standard: "Absolutely — and consistent long-term commitment like yours is exactly what we value. We are not looking for a long list of activities. We would rather see depth over breadth. Two years of volunteering shows dedication, empathy, and follow-through. That tells us a lot about your character.",
              formal: "Unquestionably. In fact, sustained long-term engagement such as yours is precisely the quality our admissions committee values most highly. We do not prioritize an extensive enumeration of activities; rather, we prefer to observe depth of involvement over breadth. Your two-year commitment to volunteerism at a shelter demonstrates dedication, empathy, and perseverance — qualities that speak volumes about your character.",
            },
            alternativeExpressions: [
              {
                textEn: "That two-year commitment is more impressive than you think. We see plenty of students with long lists of clubs they joined for a month. What you have done shows real character. Make sure to highlight it in your application.",
                textZh: "你这两年的投入比你想的更令人印象深刻。我们看到很多学生有一长串只参加了一个月的社团。你做的展示了真正的品格。确保在申请中突出它。",
                actionHint: "肯定长期志愿服务的价值",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "college-application-intermediate",
        titleZh: "讨论申请策略",
        titleEn: "Application Strategy Discussion",
        description: "讨论申请策略、选校和面试准备",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I am applying to eight schools and I am trying to figure out the right mix of reach, match, and safety schools. How do I decide?",
            textZh: "我在申请八所学校，试图弄清楚冲刺校、匹配校和保底校的正确搭配。我怎么决定？",
            culturalNote: "美国大学申请中，学生通常会分三档选校：reach（冲刺校，录取率低于自身水平）、match（匹配校，与自身水平相当）、safety（保底校，录取率高）。一般建议比例为 2-3 个冲刺、3-4 个匹配、2 个保底。",
            casualVersion: "I'm applying to eight schools. How do I figure out the reach, match, safety balance?",
            commonMistake: {
              wrong: "I am trying to figure out the right mix of reach, match and safety school.",
              correct: "I am trying to figure out the right mix of reach, match, and safety schools.",
              explanation: "三项并列用 Oxford comma（reach, match, and safety）；schools 用复数。",
            },
            formalityVariants: {
              casual: "Eight schools on my list. How do I split between reaches, matches, and safeties?",
              standard: "I am applying to eight schools and I am trying to figure out the right mix of reach, match, and safety schools. How do I decide?",
              formal: "I intend to submit applications to eight institutions and I am endeavoring to establish an appropriate distribution among reach, match, and safety schools. Could you advise me on how best to determine this balance?",
            },
          },
          {
            speaker: "them",
            role: "招生顾问",
            textEn: "A good rule of thumb for eight schools is two to three reaches, three to four matches, and one to two safeties. Look at each school's average GPA and test scores for admitted students. If your numbers are below their range, it is a reach; within range, it is a match; above, it is a safety.",
            textZh: "八所学校的一个好的经验法则是两到三个冲刺校、三到四个匹配校、一到两个保底校。看每所学校录取学生的平均GPA和考试成绩。如果你的分数低于他们的范围，就是冲刺校；在范围内是匹配校；高于范围是保底校。",
            keyPhrases: [
              { en: "rule of thumb", zh: "经验法则" },
              { en: "admitted students", zh: "被录取的学生" },
            ],
            casualVersion: "For eight schools: two to three reaches, three to four matches, one to two safeties. Check each school's average GPA and test scores for admitted students. Below their range? Reach. In range? Match. Above? Safety.",
            formalityVariants: {
              casual: "Two to three reaches, three to four matches, one to two safeties. Compare your stats to each school's admitted student profile. Below? Reach. In range? Match. Above? Safety.",
              standard: "A good rule of thumb for eight schools is two to three reaches, three to four matches, and one to two safeties. Look at each school's average GPA and test scores for admitted students. If your numbers are below their range, it is a reach; within range, it is a match; above, it is a safety.",
              formal: "For a portfolio of eight applications, I would recommend a distribution of two to three reach institutions, three to four match institutions, and one to two safety institutions. To categorize each school, examine the median GPA and standardized test scores of their most recently admitted cohort. Should your credentials fall below their published range, classify it as a reach; within range constitutes a match; and exceeding their range designates a safety school.",
            },
            alternativeExpressions: [
              {
                textEn: "Think of it as a pyramid. Your base is one or two safety schools where you are almost certain to get in. The middle is three to four matches where you have a solid shot. The top is two or three dream schools. Make sure you would be happy at every school on your list.",
                textZh: "把它想成一个金字塔。底部是一两所你几乎确定能进的保底校。中间是三四所你有很大机会的匹配校。顶部是两三所梦想学校。确保你列表上的每所学校你都会乐意去。",
                actionHint: "解释选校策略",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Some of my reach schools offer early decision. Is it worth applying early, or should I wait for the regular deadline?",
            textZh: "我有几所冲刺校提供提前决定。值得提前申请吗，还是应该等普通轮的截止日期？",
            casualVersion: "Some reaches have early decision. Should I go for it or wait for regular?",
            commonMistake: {
              wrong: "Is it worth to apply early?",
              correct: "Is it worth applying early?",
              explanation: "'worth + 动名词' 是固定结构，不用 to 不定式。",
            },
            formalityVariants: {
              casual: "A few of my reach schools have ED. Worth it or should I just do regular?",
              standard: "Some of my reach schools offer early decision. Is it worth applying early, or should I wait for the regular deadline?",
              formal: "Several of my reach institutions offer an early decision admissions track. In your professional assessment, would it be advantageous to pursue early decision, or would it be more prudent to apply during the regular admissions cycle?",
            },
          },
          {
            speaker: "them",
            role: "招生顾问",
            textEn: "Early decision can boost your chances — acceptance rates are often higher in the ED pool. But remember, ED is binding, meaning if you get in you must attend that school. Only apply ED if it is truly your top choice and you are comfortable with the financial package they are likely to offer.",
            textZh: "提前决定能提高你的机会——ED的录取率通常更高。但记住，ED是绑定的，意味着如果你被录取你必须去那所学校。只有当它确实是你的第一选择并且你对他们可能给的经济援助方案满意时才申请ED。",
            keyPhrases: [
              { en: "binding", zh: "有绑定性的/约束性的" },
              { en: "financial package", zh: "经济援助方案" },
            ],
            casualVersion: "ED can help your odds — acceptance rates are usually higher. But it's binding — you get in, you go. Only do it if that's your number one and you're OK with whatever aid they give.",
            formalityVariants: {
              casual: "ED boosts your chances, yeah. But if you get in, you HAVE to go — it's binding. Only do it for your absolute top choice.",
              standard: "Early decision can boost your chances — acceptance rates are often higher in the ED pool. But remember, ED is binding, meaning if you get in you must attend that school. Only apply ED if it is truly your top choice and you are comfortable with the financial package they are likely to offer.",
              formal: "Applying through the early decision process can indeed enhance your probability of admission, as acceptance rates within the ED applicant pool tend to be statistically higher. However, it is essential to understand that early decision constitutes a binding commitment — acceptance obligates you to enroll at that institution. I would advise pursuing this path only if the school is unequivocally your first choice and you have reasonable confidence in the adequacy of the financial aid package they are likely to extend.",
            },
            alternativeExpressions: [
              {
                textEn: "ED shows a school you are serious, and they reward that with higher admit rates. But it is a commitment — you cannot change your mind. Also compare financial aid before committing. Some families apply ED and then struggle with the cost.",
                textZh: "ED向学校展示你是认真的，他们会用更高的录取率回报。但这是一种承诺——你不能改变主意。还要在承诺前比较经济援助。有些家庭申请了ED然后在费用上犯难。",
                actionHint: "权衡ED利弊",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "One school invited me for an alumni interview. What should I expect and how do I prepare?",
            textZh: "有一所学校邀请我参加校友面试。我应该期待什么，怎么准备？",
            casualVersion: "Got invited to an alumni interview at one school. What's it like and how do I prep?",
            commonMistake: {
              wrong: "What should I expect and how do I prepare for?",
              correct: "What should I expect and how do I prepare?",
              explanation: "prepare 可以不及物使用，结尾不需要多余的 for。",
            },
            formalityVariants: {
              casual: "I got an alumni interview invite. What should I know going in?",
              standard: "One school invited me for an alumni interview. What should I expect and how do I prepare?",
              formal: "I have received an invitation for an alumni interview from one of my prospective institutions. Could you advise me on what to anticipate during the interview and how I might best prepare?",
            },
          },
          {
            speaker: "them",
            role: "招生顾问",
            textEn: "Alumni interviews are usually casual and conversational, not high-pressure. Research the school so you can explain why it is a good fit for you. Prepare a few questions to ask the interviewer — that shows genuine interest. Dress smart casual, make eye contact, and be yourself. The interviewer is looking for curiosity and enthusiasm, not rehearsed answers.",
            textZh: "校友面试通常是轻松和对话式的，不是高压的。研究那所学校这样你能解释为什么它很适合你。准备几个问题问面试官——这展示了真正的兴趣。穿智能休闲风，保持眼神交流，做你自己。面试官在寻找好奇心和热情，而不是排练好的答案。",
            keyPhrases: [
              { en: "a good fit for you", zh: "适合你的/匹配度高的" },
              { en: "genuine interest", zh: "真正的兴趣" },
            ],
            casualVersion: "Alumni interviews are pretty chill — more like a conversation. Know why you want to go there, have some questions ready, dress neat, and just be yourself. They want to see you're curious and excited, not robotic.",
            formalityVariants: {
              casual: "Don't stress — alumni interviews are super conversational. Know why you like the school, have questions ready, look put-together, and be real. They want curiosity, not perfect answers.",
              standard: "Alumni interviews are usually casual and conversational, not high-pressure. Research the school so you can explain why it is a good fit for you. Prepare a few questions to ask the interviewer — that shows genuine interest. Dress smart casual, make eye contact, and be yourself. The interviewer is looking for curiosity and enthusiasm, not rehearsed answers.",
              formal: "Alumni interviews are typically conducted in an informal, conversational format rather than a rigorous interrogative setting. I would recommend thoroughly researching the institution so that you can articulate precisely why it represents an ideal academic environment for your goals. Preparing thoughtful questions for the interviewer demonstrates genuine engagement. Present yourself in smart casual attire, maintain appropriate eye contact, and allow your authentic personality to come through. The interviewer will be assessing your intellectual curiosity and genuine enthusiasm, rather than seeking polished or memorized responses.",
            },
            alternativeExpressions: [
              {
                textEn: "Think of it as a two-way conversation. The interviewer wants to get to know you as a person, not quiz you. Know your story, know why you picked that school, and have a couple of questions that show you have done your homework. Relax and enjoy it — interviewers can tell when you are being real.",
                textZh: "把它想成双向对话。面试官想了解你这个人，不是考你。知道自己的故事，知道为什么选了那所学校，准备几个展示你做过功课的问题。放松并享受——面试官能分辨你是否真实。",
                actionHint: "提供面试准备建议",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 大学校园里找教室/办公室 ====================
  {
    id: "education-campus-directions",
    category: "education",
    titleZh: "校园问路",
    titleEn: "Asking for Directions on Campus",
    description: "在大学校园里找教室、教授办公室，向路过的学生或工作人员问路",
    otherRole: "学生/校园工作人员",
    otherRoleIcon: "🎓",
    tags: ["campus", "directions", "university", "building", "校园", "问路", "教室"],
    flows: [
      {
        id: "finding-a-building",
        titleZh: "问路人/学生找教学楼",
        titleEn: "Finding a Building on Campus",
        description: "第一天上课找不到教学楼，向路过的学生问路",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, do you know where Smith Hall is? I'm completely lost — this is my first day.",
            textZh: "打扰一下，你知道 Smith Hall 在哪里吗？我完全迷路了——今天是我第一天。",
            culturalNote: "美国大学校园通常很大。Google Maps 在校园内不一定准确。问学生比问教职工更自然——大家都很乐意帮忙。",
            casualVersion: "Hey, any idea where Smith Hall is? Totally lost — first day here.",
            commonMistake: {
              wrong: "Excuse me, where is Smith Hall? I lost my way.",
              correct: "Excuse me, do you know where Smith Hall is? I'm completely lost.",
              explanation: "'Do you know where X is?' 比直接问 'Where is X?' 更礼貌。'I'm lost' 比 'I lost my way' 更自然。",
            },
            formalityVariants: {
              casual: "Hey, do you know where Smith Hall is? I'm so lost.",
              standard: "Excuse me, do you know where Smith Hall is? I'm completely lost — this is my first day.",
              formal: "Pardon me, would you happen to know the location of Smith Hall? I'm afraid I've become rather disoriented — it's my first day on campus.",
            },
          },
          {
            speaker: "them",
            role: "学生",
            textEn: "Oh yeah, Smith Hall! You're actually not that far. So, you see that big red building over there — past the fountain? That's the library. Smith Hall is right behind it.",
            textZh: "哦对，Smith Hall！你其实离得不远。你看到那边那个大红色建筑了吗——喷泉后面那个？那是图书馆。Smith Hall 就在它后面。",
            keyPhrases: [
              { en: "right behind it", zh: "就在它后面" },
              { en: "past the fountain", zh: "过了喷泉" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! It's actually pretty close. You know the fountain over there? Walk past it and you'll see a big brick building — that's the library. Smith Hall is directly behind the library.", textZh: "当然！其实很近。你看到那边的喷泉了吗？走过去，你会看到一个大砖楼——那是图书馆。Smith Hall 就在图书馆正后方。", actionHint: "分步指路", frequency: "common" },
              { textEn: "Yeah, no worries! See that pathway going to the left of the fountain? Follow it straight and Smith Hall is the second building on your right. Can't miss it.", textZh: "没问题！看到喷泉左边那条小路了吗？一直走，Smith Hall 是右手边第二栋楼。不会错过的。", actionHint: "用路径指引", frequency: "occasional" },
            ],
            casualVersion: "Oh yeah, you're close! See that red building past the fountain? That's the library. Smith Hall's right behind it.",
            formalityVariants: {
              casual: "Oh, Smith Hall! You're close. See the big red building past the fountain? Library. Smith Hall's right behind it.",
              standard: "Oh yeah, Smith Hall! You're actually not that far. So, you see that big red building over there — past the fountain? That's the library. Smith Hall is right behind it.",
              formal: "Certainly! Smith Hall is quite nearby. If you look in that direction, past the fountain, you'll notice a large red building — that is the main library. Smith Hall is situated directly behind it.",
            },
          },
          {
            speaker: "you",
            textEn: "Okay, past the fountain, behind the library. Got it. How long of a walk is it from here?",
            textZh: "好的，过了喷泉，在图书馆后面。知道了。从这里走过去要多久？",
            casualVersion: "Past the fountain, behind the library. Got it. How far is it?",
            commonMistake: {
              wrong: "How long time to walk there?",
              correct: "How long of a walk is it from here?",
              explanation: "'How long of a walk' 是询问步行时间的地道说法。不需要加 'time'。",
            },
            formalityVariants: {
              casual: "Past the fountain, behind the library. Cool. How far?",
              standard: "Okay, past the fountain, behind the library. Got it. How long of a walk is it from here?",
              formal: "Past the fountain and behind the library — understood. Approximately how far is the walk from here?",
            },
          },
          {
            speaker: "them",
            role: "学生",
            textEn: "Like, five minutes? Maybe less. Oh, and heads up — the main entrance to Smith Hall is actually on the side facing the parking lot, not the one facing the library. It's a little confusing.",
            textZh: "大概五分钟？可能还不到。哦对了提醒一下——Smith Hall 的正门其实是朝停车场那边的，不是朝图书馆的那面。这有点容易搞混。",
            keyPhrases: [
              { en: "heads up", zh: "提醒一下" },
              { en: "main entrance", zh: "正门/主入口" },
              { en: "facing the parking lot", zh: "朝停车场那面" },
            ],
            alternativeExpressions: [
              { textEn: "Maybe five minutes tops. Just so you know, the front door of Smith Hall is kind of hidden — it's on the parking lot side, not the library side. Threw me off my first week too.", textZh: "最多五分钟。跟你说一下，Smith Hall 的大门有点隐蔽——在停车场那面，不是图书馆那面。我第一周也被搞晕了。", actionHint: "分享自己的经历", frequency: "common" },
              { textEn: "About a five-minute walk. Quick tip though — when you get there, go around to the parking lot side. That's where the actual entrance is. The library side doesn't have a door.", textZh: "大概走五分钟。不过提个醒——到了之后绕到停车场那面。真正的入口在那儿。图书馆那面没有门。", actionHint: "用 quick tip 给建议", frequency: "occasional" },
            ],
            casualVersion: "Like five minutes. Oh, heads up — the front door's on the parking lot side, not the library side. Kinda confusing.",
            formalityVariants: {
              casual: "Five minutes tops. Oh, and the front door's on the parking lot side, not the library side. Weird, I know.",
              standard: "Like, five minutes? Maybe less. Oh, and heads up — the main entrance to Smith Hall is actually on the side facing the parking lot, not the one facing the library. It's a little confusing.",
              formal: "Approximately five minutes, perhaps less. I should mention that the primary entrance to Smith Hall is actually situated on the side facing the parking lot, rather than the library-facing side. It can be somewhat disorienting for newcomers.",
            },
          },
          {
            speaker: "you",
            textEn: "Oh, good to know — I definitely would've gone to the wrong side. Thanks so much!",
            textZh: "哦太好了——我肯定会走到错的那面。太感谢了！",
            casualVersion: "Oh nice, I'd have totally gone to the wrong side. Thanks a ton!",
            formalityVariants: {
              casual: "Oh, I would've totally gone to the wrong side. Thanks!",
              standard: "Oh, good to know — I definitely would've gone to the wrong side. Thanks so much!",
              formal: "That is extremely helpful — I certainly would have approached from the incorrect side. Thank you very much for your assistance.",
            },
          },
          {
            speaker: "them",
            role: "学生",
            textEn: "No problem! Are you a freshman or a transfer student?",
            textZh: "没问题！你是大一新生还是转学生？",
            keyPhrases: [
              { en: "freshman", zh: "大一新生" },
              { en: "transfer student", zh: "转学生" },
            ],
            alternativeExpressions: [
              { textEn: "Happy to help! You new here? Freshman?", textZh: "很高兴帮忙！你是新来的？大一新生？", actionHint: "简短追问", frequency: "common" },
              { textEn: "Sure thing! Are you starting as a freshman, or did you transfer in?", textZh: "当然！你是以新生身份入学的，还是转学来的？", actionHint: "明确两个选项", frequency: "occasional" },
            ],
            casualVersion: "No prob! You a freshman or transfer?",
            formalityVariants: {
              casual: "No prob! Freshman or transfer?",
              standard: "No problem! Are you a freshman or a transfer student?",
              formal: "You're most welcome! If you don't mind my asking, are you an incoming freshman or a transfer student?",
            },
          },
          {
            speaker: "you",
            textEn: "Actually, I'm an international graduate student — just started this semester. Everything is so spread out here. Back home, my entire university fit in one building.",
            textZh: "其实我是国际研究生——这学期刚来的。这里所有东西都太分散了。在我们国内，整个大学就一栋楼。",
            casualVersion: "I'm actually an international grad student — just got here. This place is huge. My whole university back home was one building.",
            commonMistake: {
              wrong: "I am a foreign student who just came this semester.",
              correct: "I'm an international graduate student — just started this semester.",
              explanation: "用 'international student' 而非 'foreign student'。'Foreign' 在美国语境中有些过时且不够礼貌。",
            },
            formalityVariants: {
              casual: "I'm a grad student actually — international. Just got here. This campus is massive compared to back home.",
              standard: "Actually, I'm an international graduate student — just started this semester. Everything is so spread out here. Back home, my entire university fit in one building.",
              formal: "I am actually an international graduate student — I commenced my studies this semester. I must confess, the scale of this campus is quite surprising. My home university was contained within a single building.",
            },
          },
          {
            speaker: "them",
            role: "学生",
            textEn: "Ha, yeah — this campus takes some getting used to. Pro tip: download the campus map app. It's way more accurate than Google Maps for finding buildings and rooms. It even shows you which entrances are unlocked.",
            textZh: "哈是啊——这个校园需要适应一下。小窍门：下载校园地图 app。找教学楼和教室比 Google Maps 准确多了。甚至能显示哪些入口是开着的。",
            keyPhrases: [
              { en: "takes some getting used to", zh: "需要适应一下" },
              { en: "pro tip", zh: "小窍门/专业建议" },
            ],
            alternativeExpressions: [
              { textEn: "Ha, one building! Yeah, you'll get the hang of it. Definitely grab the campus map app though — it's a lifesaver. Way better than Google Maps around here.", textZh: "哈，一栋楼！没事，你会适应的。一定要下载校园地图 app——绝对救命。在这里比 Google Maps 好用多了。", actionHint: "用 lifesaver 推荐", frequency: "common" },
            ],
            casualVersion: "Ha, yeah, this place is huge. Def download the campus map app though — way better than Google Maps for finding stuff on campus.",
            formalityVariants: {
              casual: "Ha, yeah it's big. Get the campus map app — it's way better than Google Maps. Shows you which doors are unlocked and everything.",
              standard: "Ha, yeah — this campus takes some getting used to. Pro tip: download the campus map app. It's way more accurate than Google Maps for finding buildings and rooms. It even shows you which entrances are unlocked.",
              formal: "Yes, the campus can certainly be overwhelming at first. I would strongly recommend downloading the official campus map application. It provides significantly more accurate navigation than Google Maps within campus grounds, and even indicates which building entrances are accessible.",
            },
          },
          {
            speaker: "you",
            textEn: "Oh, that's amazing — downloading it right now. Hey, I really appreciate you taking the time. You've saved my first day.",
            textZh: "哇那太棒了——我现在就下载。真的很感谢你花时间帮我。你拯救了我的第一天。",
            casualVersion: "Oh awesome, downloading it now. Seriously, thanks — you saved my first day.",
            commonMistake: {
              wrong: "Thank you for spend time to help me.",
              correct: "I really appreciate you taking the time.",
              explanation: "'Appreciate you taking the time' 是感谢别人花时间帮忙的自然表达。注意 'you taking' 的动名词用法。",
            },
            formalityVariants: {
              casual: "Oh sweet, downloading now. Seriously, thanks — you're a lifesaver.",
              standard: "Oh, that's amazing — downloading it right now. Hey, I really appreciate you taking the time. You've saved my first day.",
              formal: "That sounds extremely useful — I shall download it immediately. I truly appreciate your taking the time to assist me. You have made my first day considerably less stressful.",
            },
          },
          {
            speaker: "them",
            role: "学生",
            textEn: "Anytime! Good luck with your classes. Oh, and if you ever need coffee — the cart outside the library has the best lattes on campus. Way better than the dining hall stuff. See you around!",
            textZh: "随时都可以！祝你课程顺利。哦对了，如果你想喝咖啡——图书馆外面的咖啡车有校园里最好的拿铁。比食堂的好太多了。回见！",
            keyPhrases: [
              { en: "see you around", zh: "回见/下次见" },
              { en: "anytime", zh: "随时都可以（不客气）" },
            ],
            alternativeExpressions: [
              { textEn: "No worries at all! Hope your first day goes great. And real talk — skip the dining hall coffee and hit up the cart by the library. Best lattes on campus. Catch you later!", textZh: "完全不用客气！希望你第一天一切顺利。说真的——别喝食堂的咖啡，去图书馆旁边的咖啡车。校园最好的拿铁。回头见！", actionHint: "用 real talk 给推荐", frequency: "common" },
            ],
            casualVersion: "Anytime! Good luck. Oh — best lattes on campus? The cart outside the library. Skip the dining hall stuff. See ya!",
            formalityVariants: {
              casual: "No prob! Good luck. Oh, and the coffee cart by the library? Way better than dining hall coffee. See ya around!",
              standard: "Anytime! Good luck with your classes. Oh, and if you ever need coffee — the cart outside the library has the best lattes on campus. Way better than the dining hall stuff. See you around!",
              formal: "You're very welcome. I wish you the best with your coursework. And should you ever need a good coffee, I would recommend the cart outside the library — their lattes are considerably superior to the dining hall offerings. I hope to see you around campus!",
            },
          },
        ],
      },
      {
        id: "finding-office-inside",
        titleZh: "在大楼里找教授办公室",
        titleEn: "Finding a Professor's Office Inside a Building",
        description: "已经到了教学楼，但找不到教授的具体办公室，向楼内工作人员求助",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, sorry to bother you — I'm looking for Professor Chen's office. I have office hours at 2:00, but I can't seem to find room 312.",
            textZh: "你好，不好意思打扰——我在找 Chen 教授的办公室。我2点有 office hours，但找不到 312 室。",
            casualVersion: "Hey, sorry to bug you — looking for Professor Chen's office? Room 312? Can't find it.",
            commonMistake: {
              wrong: "I want to find Professor Chen. Where is room 312?",
              correct: "I'm looking for Professor Chen's office. I have office hours at 2:00.",
              explanation: "'I'm looking for' 比 'I want to find' 更自然。提及 'office hours' 说明你有正当理由。",
            },
            formalityVariants: {
              casual: "Hey, I'm trying to find room 312 — Professor Chen's office? I've got office hours at 2.",
              standard: "Hi, sorry to bother you — I'm looking for Professor Chen's office. I have office hours at 2:00, but I can't seem to find room 312.",
              formal: "Good afternoon, I do apologize for the interruption. I am attempting to locate Professor Chen's office — room 312. I have a scheduled appointment during office hours at 2:00, but I'm having difficulty finding the room.",
            },
          },
          {
            speaker: "them",
            role: "行政人员",
            textEn: "Oh, no worries! 312 is actually on the third floor — this is the second floor. The numbering is a little weird in this building. The first digit is the floor number.",
            textZh: "没关系！312 其实在三楼——你现在在二楼。这栋楼的编号有点怪。第一个数字是楼层号。",
            keyPhrases: [
              { en: "the first digit is the floor number", zh: "第一个数字是楼层号" },
              { en: "the numbering is weird", zh: "编号有点怪" },
            ],
            alternativeExpressions: [
              { textEn: "You're on the wrong floor! Room 312 means third floor, room 12. The room numbers here match the floors — 1xx is first floor, 2xx is second floor, and so on. Easy to mix up!", textZh: "你走错楼层了！312 意思是三楼12号房间。这里的房间号跟楼层对应——1xx 是一楼，2xx 是二楼，以此类推。很容易搞混！", actionHint: "解释编号系统", frequency: "common" },
              { textEn: "Ah, classic! Everyone does that. You're on floor two — you need floor three. Room 312 = floor 3, room 12. Take the elevator or stairs at the end of the hall.", textZh: "啊，经典错误！每个人都会犯。你在二楼——你需要去三楼。312 = 三楼12号。走廊尽头有电梯和楼梯。", actionHint: "指明楼梯位置", frequency: "occasional" },
            ],
            casualVersion: "Oh, you're on the wrong floor! 312 is third floor. The first number is the floor. Happens all the time.",
            formalityVariants: {
              casual: "You're on the wrong floor! 312 is third floor — first number is the floor. Happens all the time.",
              standard: "Oh, no worries! 312 is actually on the third floor — this is the second floor. The numbering is a little weird in this building. The first digit is the floor number.",
              formal: "Not to worry at all. Room 312 is located on the third floor — you are currently on the second floor. The room numbering convention in this building uses the first digit to indicate the floor level.",
            },
          },
          {
            speaker: "you",
            textEn: "Oh! That makes sense now. So, do I take the stairs or is there an elevator?",
            textZh: "哦！现在明白了。那我走楼梯还是有电梯？",
            casualVersion: "Oh, duh! Stairs or elevator?",
            formalityVariants: {
              casual: "Oh, that makes sense! Stairs or elevator?",
              standard: "Oh! That makes sense now. So, do I take the stairs or is there an elevator?",
              formal: "I see, that clarifies matters. Would you recommend the stairs, or is there an elevator available?",
            },
          },
          {
            speaker: "them",
            role: "行政人员",
            textEn: "There's an elevator around the corner to your left, but honestly, the stairs are faster — they're right there at the end of this hallway. When you get to the third floor, turn right, and 312 should be about halfway down the hall on the left side.",
            textZh: "你左手边拐角处有电梯，但说实话走楼梯更快——就在这条走廊尽头。到了三楼右转，312 大约在走廊中间靠左边。",
            keyPhrases: [
              { en: "around the corner", zh: "拐角处" },
              { en: "halfway down the hall", zh: "走廊中间" },
            ],
            alternativeExpressions: [
              { textEn: "Elevator's on your left, around the corner. But the stairs are quicker — end of the hall. Go up one flight, hang a right, and 312 is midway down the corridor, left side.", textZh: "电梯在你左边拐角处。但楼梯更快——走廊尽头。上一层，右转，312 在走廊中段左边。", actionHint: "用 hang a right 口语化", frequency: "common" },
            ],
            casualVersion: "Elevator's around the corner to the left, but stairs are faster — end of the hall. Third floor, turn right, 312's about halfway down on the left.",
            formalityVariants: {
              casual: "Elevator's around the corner left, but stairs are faster — end of the hall. Third floor, go right, 312's on the left about halfway.",
              standard: "There's an elevator around the corner to your left, but honestly, the stairs are faster — they're right there at the end of this hallway. When you get to the third floor, turn right, and 312 should be about halfway down the hall on the left side.",
              formal: "The elevator is located around the corner to your left. However, the stairwell at the end of this corridor would be more expedient. Upon reaching the third floor, please turn right. Room 312 should be approximately midway along the corridor on the left-hand side.",
            },
          },
          {
            speaker: "you",
            textEn: "Turn right, halfway down, left side. Got it. Actually — do you know if Professor Chen is usually on time for office hours? I don't want to knock if she's not there yet.",
            textZh: "右转，走廊中间，左边。知道了。对了——你知道 Chen 教授 office hours 通常准时吗？我不想她还没到就敲门。",
            casualVersion: "Right turn, halfway, left side. Got it. Oh — is Professor Chen usually on time? Don't wanna knock and nobody's there.",
            commonMistake: {
              wrong: "Does Professor Chen come on time?",
              correct: "Is Professor Chen usually on time for office hours?",
              explanation: "'Is someone on time' 比 'Does someone come on time' 更自然。加 'usually' 使问题不显得在质疑教授。",
            },
            formalityVariants: {
              casual: "Cool. Oh, is she usually there on time? Don't wanna knock on an empty office.",
              standard: "Turn right, halfway down, left side. Got it. Actually — do you know if Professor Chen is usually on time for office hours? I don't want to knock if she's not there yet.",
              formal: "Turn right, midway along the corridor, left side — understood. If you don't mind my asking, is Professor Chen typically punctual for her office hours? I wouldn't want to disturb her before she has arrived.",
            },
          },
          {
            speaker: "them",
            role: "行政人员",
            textEn: "Oh, Professor Chen is great — she's usually early, actually. But if her door is closed, just knock. If she's in a meeting, there'll be a little sign on the door that says 'In a meeting — please wait.' Otherwise, just go right in.",
            textZh: "Chen 教授很好的——她通常都会提前到。不过如果门关着，直接敲就行。如果她在开会，门上会有个小牌子写'会议中——请稍候'。否则就直接进去。",
            keyPhrases: [
              { en: "just knock", zh: "直接敲门" },
              { en: "go right in", zh: "直接进去" },
            ],
            alternativeExpressions: [
              { textEn: "Professor Chen? She's one of the punctual ones — usually there early. Closed door just means knock — if she's meeting with someone, there'll be a sign. Otherwise, don't be shy, just walk in.", textZh: "Chen 教授？她是准时的那种——通常提前到。门关着就敲——如果在跟人谈事，会有牌子。否则别客气，直接进。", actionHint: "用 don't be shy 鼓励", frequency: "common" },
            ],
            casualVersion: "Oh, she's great — usually early actually. If the door's closed, just knock. There'll be a sign if she's in a meeting. Otherwise, go right in.",
            formalityVariants: {
              casual: "She's awesome — usually early. Door closed? Just knock. If she's in a meeting, there'll be a sign. Otherwise, walk right in.",
              standard: "Oh, Professor Chen is great — she's usually early, actually. But if her door is closed, just knock. If she's in a meeting, there'll be a little sign on the door that says 'In a meeting — please wait.' Otherwise, just go right in.",
              formal: "Professor Chen is excellent — she tends to arrive early for her office hours. Should her door be closed, please do feel free to knock. If she is in a meeting with another student, she typically posts a notice on the door. Otherwise, you may enter directly.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect. One more question — sorry — is there a bathroom on the third floor? I want to freshen up before my meeting.",
            textZh: "好的。再问一个——不好意思——三楼有卫生间吗？我想在见面前整理一下。",
            casualVersion: "Great. Oh, one more thing — bathroom on the third floor? Wanna freshen up real quick.",
            commonMistake: {
              wrong: "Where is the toilet?",
              correct: "Is there a bathroom on the third floor?",
              explanation: "美国人几乎不说 'toilet'，用 'bathroom' 或 'restroom'。问 'Is there a bathroom' 比 'Where is the toilet' 自然得多。",
            },
            formalityVariants: {
              casual: "Oh, is there a bathroom on the third floor?",
              standard: "Perfect. One more question — sorry — is there a bathroom on the third floor? I want to freshen up before my meeting.",
              formal: "Wonderful. If I may ask one more question — are the restroom facilities available on the third floor? I would like to freshen up before my appointment.",
            },
          },
          {
            speaker: "them",
            role: "行政人员",
            textEn: "Yep! When you get to the third floor, it's to your left before you turn right toward the offices. You can't miss it — there are signs on the wall.",
            textZh: "有的！到三楼后在你右转去办公室之前，左手边就是。不会错过的——墙上有指示牌。",
            keyPhrases: [{ en: "you can't miss it", zh: "不会错过的" }],
            alternativeExpressions: [
              { textEn: "Sure, there's one right when you come up the stairs. Before you turn right, look left — it's right there. Has signs and everything.", textZh: "有，上楼梯就能看到。右转之前往左看——就在那儿。有标识的。", actionHint: "更简洁的指引", frequency: "common" },
            ],
            casualVersion: "Yeah! Top of the stairs, to your left before you go right to the offices. Signs on the wall.",
            formalityVariants: {
              casual: "Yep, top of the stairs, left side, before you turn toward offices. Can't miss it.",
              standard: "Yep! When you get to the third floor, it's to your left before you turn right toward the offices. You can't miss it — there are signs on the wall.",
              formal: "Yes, indeed. Upon reaching the third floor, the restroom is located to your left, just before the corridor leading to the faculty offices. It is clearly marked with signage.",
            },
          },
          {
            speaker: "you",
            textEn: "You've been super helpful. I really appreciate it. I feel much less nervous now — thanks!",
            textZh: "你帮了大忙。真的很感谢。我现在没那么紧张了——谢谢！",
            casualVersion: "Dude, you've been amazing. Way less nervous now. Thanks!",
            commonMistake: {
              wrong: "You helped me very much. I am not nervous now.",
              correct: "You've been super helpful. I feel much less nervous now.",
              explanation: "'You've been super helpful' 用现在完成时表示感谢对方这段时间的帮助。'Feel much less nervous' 比 'am not nervous' 更真实。",
            },
            formalityVariants: {
              casual: "You're the best. Way less stressed now. Thanks so much!",
              standard: "You've been super helpful. I really appreciate it. I feel much less nervous now — thanks!",
              formal: "You have been extraordinarily helpful. I am most grateful for your assistance. I must say, I feel considerably more at ease now. Thank you sincerely.",
            },
          },
          {
            speaker: "them",
            role: "行政人员",
            textEn: "Happy to help! And don't be nervous — Professor Chen is really approachable. She loves international students. Good luck!",
            textZh: "很高兴能帮到你！别紧张——Chen 教授人很好，很容易接近的。她很喜欢国际学生。祝你好运！",
            keyPhrases: [
              { en: "approachable", zh: "容易接近的/平易近人的" },
            ],
            alternativeExpressions: [
              { textEn: "You'll be fine! Honestly, Professor Chen is one of the nicest professors here. She really enjoys working with international students. You're in good hands!", textZh: "你会没事的！说真的，Chen 教授是这里最好的教授之一。她很喜欢跟国际学生合作。你交到对的人了！", actionHint: "强化安慰", frequency: "common" },
              { textEn: "Don't worry at all! She's super chill and really welcoming. You'll have a great meeting. If you need anything else, the front desk is right here.", textZh: "完全别担心！她超级随和而且很热情。你们的会面会很顺利的。如果还需要什么，前台就在这里。", actionHint: "提供后续帮助", frequency: "occasional" },
            ],
            casualVersion: "You'll be fine! Professor Chen is super approachable — loves international students. Good luck!",
            formalityVariants: {
              casual: "You'll be fine! She's super nice and loves international students. You got this!",
              standard: "Happy to help! And don't be nervous — Professor Chen is really approachable. She loves international students. Good luck!",
              formal: "It was my pleasure. And please don't be apprehensive — Professor Chen is known for being remarkably approachable and is particularly supportive of international students. I wish you the very best of luck.",
            },
          },
        ],
      },
    ],
  },
];
