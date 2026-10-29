import type { PresetScene } from "../scene-types";

// ============================================================
// 住宿扩展场景 — Accommodation Extended Scenes
// 覆盖：Airbnb预订、青旅入住、长租公寓、民宿沟通、退房、延住、
//       噪音投诉、设施报修、洗衣、WiFi、空调暖气、钥匙门卡、
//       停车、早餐、行李寄存、叫醒、换房、客房服务、安全、取消
// ============================================================

export const ACCOMMODATION_SCENES_EXT: PresetScene[] = [
  // ==================== 1. 预订Airbnb ====================
  {
    id: "accommodation-booking-airbnb",
    category: "accommodation",
    titleZh: "预订Airbnb",
    titleEn: "Booking Airbnb",
    description: "通过Airbnb平台消息与房东沟通预订细节，确认入住时间、房屋设施和特殊需求",
    otherRole: "Airbnb房东",
    otherRoleIcon: "🏡",
    flows: [
      {
        id: "booking-inquiry",
        titleZh: "预订咨询",
        titleEn: "Booking Inquiry",
        description: "预订前与房东沟通，确认房屋细节和入住安排",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm interested in booking your place from March 20th to 25th. Is it available?",
            textZh: "你好，我想预订你的房子，3月20日到25日，请问有空吗？",
            casualVersion: "Hey! Is your place free from March 20 to 25?",
            culturalNote:
              "Airbnb上预订前先发消息沟通是好习惯，房东也更愿意接受主动沟通的客人。",
            commonMistake: {
              wrong: "I want to book your place",
              correct: "I'm interested in booking your place",
              explanation: "直接说“I want”听起来可能比较生硬，用“I'm interested in”更委婉礼貌。",
            },
            formalityVariants: {
              casual: "Hey, interested in your place March 20-25. It open?",
              standard: "Hi, I'm interested in booking your place from March 20th to 25th. Is it available?",
              formal: "Good day, I would like to inquire about the availability of your property from March 20th to March 25th. Could you please confirm?",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "Hi there! Yes, those dates are available. How many guests will be staying?",
            textZh: "你好！那些日期可以的。请问有几位客人入住？",
            keyPhrases: [
              { en: "those dates are available", zh: "那些日期可以" },
              { en: "how many guests", zh: "几位客人" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, those dates work! How many people total?", textZh: "嗯，那几天可以！一共几个人？", actionHint: "直接确认可用，口语化问法", frequency: "common" },
              { textEn: "Yep, it's open! Will it just be you or are others coming too?", textZh: "是的，空着呢！就你一个人还是还有其他人？", actionHint: "轻松确认，换种方式问人数", frequency: "common" },
              { textEn: "Hey! Those dates are free. How many of you will there be?", textZh: "嘿！那几天没人订。你们几个人？", actionHint: "友好回应，直接问人数", frequency: "occasional" },
            ],
            casualVersion: "Hey there! Yep, those dates work. How many guests?",
            commonMistake: {
              wrong: "How many people?",
              correct: "How many guests?",
              explanation: "询问住宿人数时，用“guests”比“people”更专业和礼貌。",
            },
            formalityVariants: {
              casual: "Yep, dates are good. How many guests?",
              standard: "Yes, those dates are available. How many guests will be staying?",
              formal: "Indeed, the dates you specified are available. May I inquire about the number of occupants?",
            },
          },
          {
            speaker: "you",
            textEn: "It'll be two of us. Does the apartment have a kitchen? We'd like to cook some meals.",
            textZh: "我们两个人。公寓有厨房吗？我们想自己做几顿饭。",
            casualVersion: "Just two of us. Got a kitchen? We wanna cook sometimes.",
            commonMistake: {
              wrong: "We are two persons. We want cook meals.",
              correct: "It'll be two of us. We'd like to cook some meals.",
              explanation: "“It'll be two of us”更自然；“want”不如“would like”礼貌。",
            },
            formalityVariants: {
              casual: "Just two of us. Got a kitchen? We wanna cook.",
              standard: "It will be two of us. Does the apartment have a kitchen? We would like to cook some meals.",
              formal: "There will be two occupants. Could you confirm if the apartment includes a kitchen facility? We are hoping to prepare some meals.",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "Yes, there's a fully equipped kitchen with a stove, microwave, and basic cooking utensils. You're welcome to use everything.",
            textZh: "有的，厨房设备齐全，有灶台、微波炉和基本的厨具。欢迎随便用。",
            keyPhrases: [
              { en: "fully equipped kitchen", zh: "设备齐全的厨房" },
              { en: "cooking utensils", zh: "厨具" },
              { en: "you're welcome to use", zh: "欢迎使用" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, the kitchen's got everything — stove, microwave, pots and pans. Help yourself!", textZh: "有的，厨房什么都有——灶台、微波炉、锅碗瓢盆。随便用！", actionHint: "非正式列举厨房设备", frequency: "common" },
              { textEn: "Oh yeah, it's a full kitchen. You'll find all the basics in there. Feel free to use whatever you need.", textZh: "有啊，完整的厨房。基本的东西都有。需要什么随便用。", actionHint: "轻松肯定，强调随意使用", frequency: "common" },
            ],
            casualVersion: "Yep, kitchen's fully stocked with a stove, microwave, and basic stuff. Feel free to use everything.",
            commonMistake: {
              wrong: "You can use everything.",
              correct: "You're welcome to use everything.",
              explanation: "“You're welcome to”比“You can”更热情和礼貌。",
            },
            formalityVariants: {
              casual: "Yeah, kitchen's fully stocked with a stove, microwave, and basic stuff. Use whatever!",
              standard: "Yes, there is a fully equipped kitchen with a stove, microwave, and basic cooking utensils. You are welcome to use everything.",
              formal: "Affirmative, the kitchen is comprehensively equipped with a stove, microwave, and essential cooking utensils. You are cordially invited to utilize all provisions.",
            },
          },
          {
            speaker: "you",
            textEn: "Great! What time is check-in? Our flight arrives at 3 PM.",
            textZh: "太好了！几点可以入住？我们航班下午3点到。",
            culturalNote:
              "提前告知到达时间是Airbnb的礼貌做法，方便房东安排。",
            casualVersion: "Awesome! Check-in time? Flight gets in at 3 PM.",
            commonMistake: {
              wrong: "What time check-in? Our flight 3 PM arrive.",
              correct: "What time is check-in? Our flight arrives at 3 PM.",
              explanation: "需要补足动词“is”和助动词“arrives”，句子结构才完整。",
            },
            formalityVariants: {
              casual: "Awesome! Check-in time? Flight gets in at 3 PM.",
              standard: "Great! What time is check-in? Our flight arrives at 3 PM.",
              formal: "Excellent! Could you please advise on the standard check-in time? Our flight is scheduled to arrive at 3 PM.",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "Check-in is from 3 PM onwards. I'll send you the self check-in instructions with the door code once you book.",
            textZh: "下午3点以后就可以入住。你预订后我会发自助入住说明和门禁密码。",
            keyPhrases: [
              { en: "from 3 PM onwards", zh: "下午3点以后" },
              { en: "self check-in instructions", zh: "自助入住说明" },
              { en: "door code", zh: "门禁密码" },
            ],
            alternativeExpressions: [
              { textEn: "You can get in anytime after 3. I'll message you the lockbox code once your booking goes through.", textZh: "3点以后随时可以进。预订确认后我会把钥匙盒密码发给你。", actionHint: "lockbox指门口的密码钥匙盒，Airbnb常见", frequency: "common" },
              { textEn: "Check-in's at 3. It's self check-in — I'll send you all the details and the entry code after you book.", textZh: "3点入住。自助入住的——订好后我把详细信息和进门密码发给你。", actionHint: "entry code就是门禁密码", frequency: "common" },
              { textEn: "Anytime from 3 works. I'll shoot you the access instructions and keypad code once it's confirmed.", textZh: "3点以后都行。确认后我会把进入说明和键盘密码发给你。", actionHint: "shoot you = 发给你，keypad code = 键盘密码", frequency: "occasional" },
            ],
            casualVersion: "Check-in's 3 PM onwards. I'll send self check-in details and the code once you book.",
            commonMistake: {
              wrong: "Check-in 3 PM. I will send instructions.",
              correct: "Check-in is from 3 PM onwards. I will send you the instructions.",
              explanation: "需补足“is from...onwards”来表示时间段；“instructions”通常需要加“the”或“my/your”。",
            },
            formalityVariants: {
              casual: "Check-in's 3 PM onwards. I'll send self check-in details and the code once you book.",
              standard: "Check-in is from 3 PM onwards. I will send you the self check-in instructions with the door code once you book.",
              formal: "Check-in commences from 3 PM. Upon confirmation of your reservation, I shall provide you with comprehensive self check-in instructions, including the door access code.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect. One more thing — is there parking available nearby?",
            textZh: "好的。还有一个问题——附近有停车位吗？",
            casualVersion: "Cool. One more thing – parking nearby?",
            commonMistake: {
              wrong: "Have parking nearby?",
              correct: "Is there parking available nearby?",
              explanation: "问是否有某物，通常用“Is there...”或“Do you have...”，而不是直接用“Have...”",
            },
            formalityVariants: {
              casual: "Cool. One more thing – parking nearby?",
              standard: "Perfect. One more thing — is there parking available nearby?",
              formal: "Excellent. I have one further inquiry: is parking readily available in the vicinity?",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "There's free street parking right outside, and a paid garage about two blocks away if you prefer covered parking.",
            textZh: "门外就有免费路边停车位，两个街区外有收费停车场，如果你需要有顶的车位的话。",
            keyPhrases: [
              { en: "street parking", zh: "路边停车" },
              { en: "paid garage", zh: "收费停车场" },
              { en: "covered parking", zh: "有顶停车位" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, you can park on the street right out front for free. There's also a parking garage a couple blocks away if you want something covered.", textZh: "可以的，门前路边免费停。如果想停有顶的，几个街区外有个停车场。", actionHint: "a couple blocks = 几个街区", frequency: "common" },
              { textEn: "There's plenty of street parking, no charge. Or if you'd rather have a garage spot, there's one nearby — just costs a few bucks a day.", textZh: "路边车位很多，不收费。如果你想停车库，附近就有一个——一天就几块钱。", actionHint: "a few bucks = 几美元，口语说法", frequency: "common" },
            ],
            casualVersion: "Yeah, free street parking right outside. Or a paid garage two blocks away if you want covered parking.",
            commonMistake: {
              wrong: "Outside has free parking. Two blocks away has paid garage.",
              correct: "There's free street parking right outside. A paid garage is about two blocks away.",
              explanation: "描述某处有某物，常用“There is/are...”，而不是直接用地点作主语加“has”。",
            },
            formalityVariants: {
              casual: "Yeah, free street parking right outside. Or a paid garage two blocks away if you want covered parking.",
              standard: "Yes, there is free street parking right outside, and a paid garage about two blocks away if you prefer covered parking.",
              formal: "Indeed, complimentary street parking is available directly outside the property. Alternatively, a paid parking garage is situated approximately two blocks away, should you desire covered parking.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 2. 青年旅舍入住 ====================
  {
    id: "accommodation-hostel-checkin",
    category: "accommodation",
    titleZh: "青年旅舍入住",
    titleEn: "Hostel Check-in",
    description: "到达青年旅舍办理入住，了解床位安排、公共区域和舍规",
    otherRole: "前台工作人员",
    otherRoleIcon: "🛏️",
    flows: [
      {
        id: "hostel-arrival",
        titleZh: "到达入住",
        titleEn: "Arrival & Check-in",
        description: "到达青旅后办理入住，了解床位和公共设施",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have a reservation under the name Zhang Wei. I booked a bed in a 6-bed dorm.",
            textZh: "你好，我有预订，名字是Zhang Wei。我订了一个6人间的床位。",
            culturalNote:
              "青旅的dorm（多人宿舍间）按床位收费，常见有4-bed、6-bed、8-bed dorm，分男女混住（mixed）和单性别（female-only/male-only）。",
            casualVersion: "Hey, reservation for Zhang Wei, 6-bed dorm.",
            commonMistake: {
              wrong: "My name is Zhang Wei to book a room.",
              correct: "I have a reservation under the name Zhang Wei.",
              explanation: "中文习惯把名字放前面，但英文表达通常是“我有一个以某人名字预订的房间”。",
            },
            formalityVariants: {
              casual: "Hey, I've got a reservation under Zhang Wei for a 6-bed dorm.",
              standard: "Hi, I have a reservation under the name Zhang Wei. I booked a bed in a 6-bed dorm.",
              formal: "Good evening. I have a reservation confirmed under the name Zhang Wei for a bed in a six-person dormitory.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Welcome! Let me pull up your reservation. Could I see your ID or passport, please?",
            textZh: "欢迎！我查一下你的预订。可以看一下你的身份证或护照吗？",
            keyPhrases: [
              { en: "pull up your reservation", zh: "查一下你的预订" },
              { en: "ID or passport", zh: "身份证或护照" },
            ],
            alternativeExpressions: [
              { textEn: "Hey, welcome! Let me look you up. Can I grab your passport or ID real quick?", textZh: "嘿，欢迎！我查一下。能看下你的护照或身份证吗？", actionHint: "grab = 拿一下，real quick = 很快", frequency: "common" },
              { textEn: "Hi there! Let me find your booking. Do you have some ID on you?", textZh: "你好！我找一下你的预订。带证件了吗？", actionHint: "on you = 随身带着", frequency: "common" },
            ],
            casualVersion: "Welcome! Let me check that. Got your ID or passport?",
            culturalNote: "在美国，酒店或旅社要求看身份证件是标准程序，通常是护照或驾照。",
            commonMistake: {
              wrong: "Can see my ID?",
              correct: "Could I see your ID?",
              explanation: "直接说“Can see...”听起来不礼貌，要用“Could I see...”来询问。",
            },
            formalityVariants: {
              casual: "Hey, welcome! Lemme pull that up. Got an ID or passport on ya?",
              standard: "Welcome! Let me pull up your reservation. Could I see your ID or passport, please?",
              formal: "Welcome to our establishment. I'd be happy to retrieve your reservation. May I please request your identification, such as a passport or driver's license?",
            },
          },
          {
            speaker: "you",
            textEn: "Sure, here's my passport.",
            textZh: "好的，这是我的护照。",
            casualVersion: "Yep, here it is.",
            commonMistake: {
              wrong: "My passport is here.",
              correct: "Here's my passport.",
              explanation: "直接说“我的护照在这里”听起来不自然，用“Here's...”更地道。",
            },
            formalityVariants: {
              casual: "Yeah, here you go.",
              standard: "Sure, here's my passport.",
              formal: "Certainly, here is my passport for verification.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Great, you're in Room 204, bed number 3 — that's the lower bunk on the left. Here's your key card. It also opens the main entrance after 10 PM.",
            textZh: "好的，你在204房间，3号床位——左边的下铺。这是你的门卡。晚上10点以后也可以用它开大门。",
            keyPhrases: [
              { en: "lower bunk", zh: "下铺" },
              { en: "key card", zh: "门卡" },
              { en: "main entrance", zh: "大门" },
            ],
            alternativeExpressions: [
              { textEn: "Alright, you're in 204, bed 3 — bottom bunk, left side. Here's your card. It works on the front door too after 10.", textZh: "好，你在204，3号床——左边下铺。给你卡。10点以后也能刷大门。", actionHint: "bottom bunk = lower bunk 下铺，after 10 = 10点以后", frequency: "common" },
              { textEn: "Cool, so you're bed 3 in Room 204 — that's the lower left one. Take this key card, you'll need it to get in the building after ten.", textZh: "好，你是204房间3号床——左下那个。拿着这张门卡，10点以后进大楼要用。", actionHint: "lower left one = 左下那个", frequency: "common" },
            ],
            casualVersion: "Okay, you're in Room 204, bed 3 – that's the bottom bunk on the left. Key card's for that and the main door after 10.",
            formalityVariants: {
              casual: "Alright, you're in 204, bed 3 – bottom bunk, left side. Here's your key. It'll get you in the main door after 10 too.",
              standard: "Great, you're in Room 204, bed number 3 — that's the lower bunk on the left. Here's your key card. It also opens the main entrance after 10 PM.",
              formal: "Excellent. You are assigned to Room 204, specifically bed number three, which is the lower bunk on the left-hand side. Please take this key card. It will also provide access to the main entrance after 10:00 PM.",
            },
          },
          {
            speaker: "you",
            textEn: "Thanks. Where can I store my valuables? I'm a bit worried about leaving them in the dorm.",
            textZh: "谢谢。我的贵重物品放哪里？放在宿舍里有点不放心。",
            culturalNote:
              "青旅一般有个人储物柜（locker），但通常需要自备锁。一些青旅前台也出售小锁。",
            casualVersion: "Thanks. Where can I stash my valuables? Kinda worried 'bout leaving 'em in the dorm.",
            commonMistake: {
              wrong: "How to put my valuables?",
              correct: "Where can I store my valuables?",
              explanation: "中文里“怎么放”可以泛指，但英文需要更具体的动词“store”或“keep”加上地点。",
            },
            formalityVariants: {
              casual: "Thanks. Where can I keep my stuff safe? Don't really wanna leave it just lying around in the dorm.",
              standard: "Thanks. Where can I store my valuables? I'm a bit worried about leaving them in the dorm.",
              formal: "Thank you. Could you please advise on the appropriate location for storing my valuables? I am somewhat concerned about leaving them unsecured within the dormitory.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Each bed has a personal locker underneath. You'll need your own padlock, or you can buy one from us for five dollars.",
            textZh: "每个床位下面都有个人储物柜。你需要自备挂锁，或者可以花5美元在我们这里买一个。",
            keyPhrases: [
              { en: "personal locker", zh: "个人储物柜" },
              { en: "padlock", zh: "挂锁" },
            ],
            alternativeExpressions: [
              { textEn: "There's a locker under your bed. You'll need to bring your own lock, or we sell them here for five bucks.", textZh: "你床下有个柜子。得自己带锁，不然我们这儿卖，5块钱一个。", actionHint: "five bucks = 5美元，口语说法", frequency: "common" },
              { textEn: "Every bed comes with its own locker underneath. If you don't have a lock, we've got ones for sale — five dollars.", textZh: "每个床位下面都有自己的储物柜。没带锁的话我们有卖的——5美元。", actionHint: "comes with = 配有", frequency: "common" },
              { textEn: "Yeah, there's storage under each bed with a locker. Just BYO padlock, or grab one from us for five.", textZh: "有的，每个床下面有储物柜。自己带锁，或者花5块在我们这买一个。", actionHint: "BYO = bring your own 自备", frequency: "occasional" },
            ],
            casualVersion: "Each bed's got a locker underneath. Need your own padlock, or we sell 'em for five bucks.",
            formalityVariants: {
              casual: "Every bed has a locker underneath. Just need your own lock, or you can grab one from us for five bucks.",
              standard: "Each bed has a personal locker underneath. You'll need your own padlock, or you can buy one from us for five dollars.",
              formal: "Each individual bed is equipped with a personal locker located underneath. You will need to provide your own padlock, or alternatively, you may purchase one from us for a fee of five dollars.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll buy one. Also, what are the quiet hours?",
            textZh: "那我买一个。还有，安静时段是什么时候？",
            casualVersion: "I'll buy one. What about quiet hours?",
            formalityVariants: {
              casual: "Yeah, I'll get one. What about quiet hours?",
              standard: "I'll buy one. Also, what are the quiet hours?",
              formal: "I will proceed with purchasing one. Furthermore, could you please inform me of the designated quiet hours?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Quiet hours are from 10 PM to 8 AM. No loud music or phone calls in the dorms during that time. The common room is open 24 hours if you want to hang out.",
            textZh: "安静时段是晚上10点到早上8点。期间宿舍里不能大声放音乐或打电话。公共休息室24小时开放，想玩可以去那里。",
            keyPhrases: [
              { en: "quiet hours", zh: "安静时段" },
              { en: "common room", zh: "公共休息室" },
              { en: "open 24 hours", zh: "24小时开放" },
            ],
            alternativeExpressions: [
              { textEn: "So lights out is 10 PM to 8 AM — no music or calls in the dorms. But the lounge is open all night if you wanna hang.", textZh: "熄灯时间是晚10点到早8点——宿舍里不能放音乐打电话。不过休息室通宵开着，想玩可以去那。", actionHint: "lights out = 熄灯/安静时段，wanna hang = 想待着", frequency: "common" },
              { textEn: "Keep it down in the dorms between 10 and 8 — that's quiet time. If you're a night owl, the common area never closes.", textZh: "10点到8点宿舍里要保持安静。如果你是夜猫子，公共区域不关门。", actionHint: "keep it down = 保持安静，night owl = 夜猫子", frequency: "common" },
            ],
            casualVersion: "Quiet hours are 10 PM to 8 AM. No loud music or calls in the dorms then. Common room's open 24/7 if you wanna hang out.",
            formalityVariants: {
              casual: "Quiet hours are from 10 PM to 8 AM. Gotta keep it down in the dorms – no loud music or calls. Common room's always open if you wanna chill.",
              standard: "Quiet hours are from 10 PM to 8 AM. No loud music or phone calls in the dorms during that time. The common room is open 24 hours if you want to hang out.",
              formal: "The designated quiet hours are observed from 10:00 PM to 8:00 AM. During this period, we kindly request no loud music or phone conversations within the dormitory rooms. The common room, however, is accessible 24 hours a day should you wish to socialize.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 3. 长租公寓 ====================
  {
    id: "accommodation-long-term-rental",
    category: "accommodation",
    titleZh: "长租公寓",
    titleEn: "Long-term Rental",
    description: "与房东或中介沟通长期租房事宜，包括租金、押金、租约和设施",
    otherRole: "房东/中介",
    otherRoleIcon: "🔑",
    flows: [
      {
        id: "rental-viewing",
        titleZh: "看房沟通",
        titleEn: "Apartment Viewing",
        description: "看房时与房东/中介沟通租房细节",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm here to see the one-bedroom apartment listed online. Is the rent really $1,200 a month?",
            textZh: "你好，我来看网上发布的那个一居室公寓。租金真的是每月1200美元吗？",
            culturalNote:
              "欧美租房通常说月租（per month），一般不含水电网费（utilities），要单独确认。",
            casualVersion: "Hey, here to see the 1-bed online. Rent really 1200 a month?",
            commonMistake: {
              wrong: "Is the rent 1200 dollars one month?",
              correct: "Is the rent really $1,200 a month?",
              explanation: "询问租金时，'a month' 比 'one month' 更自然，'really' 强调疑问。",
            },
            formalityVariants: {
              casual: "Hey, here for the 1-bed online. Is the rent really 1200 a month?",
              standard: "Hi, I'm here to see the one-bedroom apartment listed online. Is the rent truly $1,200 a month?",
              formal: "Good afternoon, I have an appointment to view the one-bedroom apartment advertised online. Could you please confirm if the rental rate is indeed $1,200 per month?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Yes, that's correct. The rent is $1,200 per month, and that includes water and trash. Electricity and internet are separate.",
            textZh: "是的，没错。租金每月1200美元，包含水费和垃圾费。电费和网费另算。",
            keyPhrases: [
              { en: "includes water and trash", zh: "包含水费和垃圾费" },
              { en: "electricity and internet are separate", zh: "电费和网费另算" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, twelve hundred a month. Water and trash are covered, but you'd handle electric and internet on your own.", textZh: "对，一个月一千二。水和垃圾包了，但电费和网费你自己出。", actionHint: "covered = 包含了，on your own = 自己负责", frequency: "common" },
              { textEn: "Right, $1,200. That covers water and garbage pickup. Electric and Wi-Fi you'd set up and pay separately.", textZh: "对，1200。包水费和垃圾清运。电和Wi-Fi你自己开通付费。", actionHint: "garbage pickup = 垃圾清运，set up = 开通", frequency: "common" },
            ],
            casualVersion: "Yep, that's right. Rent's 1200 a month, includes water, trash. Electric, internet's extra.",
            formalityVariants: {
              casual: "Yep, that's right. Rent's 1200 a month, includes water, trash. Electric, internet's extra.",
              standard: "Yes, that's correct. The rent is $1,200 per month, and that includes water and trash. Electricity and internet are separate.",
              formal: "Yes, that is accurate. The monthly rental fee is $1,200, which encompasses water and refuse collection. Utilities such as electricity and internet service are not included.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. What about the security deposit? And is there a minimum lease term?",
            textZh: "了解了。押金是多少？有最短租期要求吗？",
            culturalNote:
              "Security deposit（押金）在美国通常是一个月房租，签约时支付，退租时退还（扣除损坏费用）。",
            casualVersion: "Okay, cool. Deposit? Min lease term?",
            commonMistake: {
              wrong: "Security deposit how much? Minimum lease term have?",
              correct: "What about the security deposit? And is there a minimum lease term?",
              explanation: "询问押金时用 'What about...' 更自然；'minimum lease term' 是正确的说法。",
            },
            formalityVariants: {
              casual: "Okay, cool. Deposit? Min lease term?",
              standard: "Understood. What about the security deposit? And is there a minimum lease term?",
              formal: "I understand. Could you please inform me about the security deposit amount and if there is a minimum lease duration required?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "The deposit is one month's rent, so $1,200. The minimum lease is six months, but I prefer a one-year lease.",
            textZh: "押金是一个月的房租，即1200美元。最短租期是6个月，但我更希望签一年。",
            keyPhrases: [
              { en: "security deposit", zh: "押金" },
              { en: "minimum lease", zh: "最短租期" },
              { en: "one-year lease", zh: "一年的租约" },
            ],
            alternativeExpressions: [
              { textEn: "Deposit is one month — so twelve hundred. Shortest I'll do is six months, but honestly I'd rather lock in a year.", textZh: "押金一个月——就是一千二。最短六个月，但说实话我更想签一年。", actionHint: "lock in = 锁定/签下，I'd rather = 我更想", frequency: "common" },
              { textEn: "It's $1,200 for the deposit, same as the rent. Lease-wise, six months minimum, though a 12-month is preferred.", textZh: "押金1200，跟房租一样。租约的话最短六个月，不过更倾向于12个月。", actionHint: "lease-wise = 租约方面", frequency: "common" },
            ],
            casualVersion: "Deposit's a month's rent, so 1200. Min lease is six months, but I'd prefer a year.",
            formalityVariants: {
              casual: "Deposit's a month's rent, so 1200. Min lease is six months, but I'd prefer a year.",
              standard: "The deposit is one month's rent, which is $1,200. The minimum lease is six months, but I prefer a one-year lease.",
              formal: "The security deposit required is equivalent to one month's rental fee, totaling $1,200. While the minimum lease duration is six months, I personally prefer a lease agreement for one year.",
            },
          },
          {
            speaker: "you",
            textEn: "Are pets allowed? I have a small dog.",
            textZh: "可以养宠物吗？我有一只小狗。",
            casualVersion: "Pets allowed? Got a small dog.",
            commonMistake: {
              wrong: "Can pets be allowed?",
              correct: "Are pets allowed?",
              explanation: "询问是否允许宠物，'Are pets allowed?' 是最自然的问法。",
            },
            formalityVariants: {
              casual: "Pets allowed? Got a small dog.",
              standard: "Are pets allowed? I have a small dog.",
              formal: "May I inquire if pets are permitted on the premises? I own a small canine.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Small dogs are fine, but there's a $300 pet deposit. No cats, though — previous tenant had allergy issues.",
            textZh: "小狗可以，但需要交300美元的宠物押金。不过不能养猫——之前的租客有过敏问题。",
            keyPhrases: [
              { en: "pet deposit", zh: "宠物押金" },
              { en: "previous tenant", zh: "之前的租客" },
            ],
            alternativeExpressions: [
              { textEn: "A small dog? Yeah, that's fine. There's a three hundred dollar pet fee though. Just no cats — the last person who lived here had allergy problems.", textZh: "小狗？可以的。不过有300美元的宠物费。就是不能养猫——上一个住的人有过敏。", actionHint: "pet fee 和 pet deposit 意思接近", frequency: "common" },
              { textEn: "Dogs are okay as long as they're small. I do ask for a $300 pet deposit upfront. Cats are a no-go though — allergies from the last renter.", textZh: "小狗没问题。不过需要预交300美元宠物押金。猫不行——上个租客有过敏。", actionHint: "no-go = 不行/不允许", frequency: "common" },
            ],
            casualVersion: "Small dogs're good, but it's a 300 pet deposit. No cats though, old tenant had allergies.",
            formalityVariants: {
              casual: "Small dogs're good, but it's a 300 pet deposit. No cats though, old tenant had allergies.",
              standard: "Small dogs are fine, but there's a $300 pet deposit. No cats, however — a previous tenant experienced allergy issues.",
              formal: "Small canine companions are acceptable; however, a $300 pet deposit will be required. Please note that felines are not permitted due to a former occupant's allergy issues.",
            },
          },
          {
            speaker: "you",
            textEn: "That works for me. When can I move in?",
            textZh: "那没问题。我什么时候可以搬进来？",
            casualVersion: "Cool. When can I move in?",
            commonMistake: {
              wrong: "I can move in when?",
              correct: "When can I move in?",
              explanation: "询问具体时间时，'When can I...' 是正确的语序。",
            },
            formalityVariants: {
              casual: "Cool. When can I move in?",
              standard: "That works for me. When can I move in?",
              formal: "That is acceptable to me. Could you please advise on the earliest date of occupancy?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "The apartment will be ready on the 1st. I'll need first month's rent, the security deposit, and the pet deposit upfront. I'll email you the lease to sign.",
            textZh: "公寓1号就可以入住了。我需要你预付第一个月的房租、押金和宠物押金。我会把租约发邮件给你签字。",
            keyPhrases: [
              { en: "first month's rent", zh: "第一个月的房租" },
              { en: "upfront", zh: "预付" },
              { en: "lease to sign", zh: "需要签字的租约" },
            ],
            alternativeExpressions: [
              { textEn: "It'll be ready on the 1st. I'll need first and last month's rent plus the deposits before you move in. I'll email over the lease for you to sign.", textZh: "1号就好了。搬进来之前需要交首尾两个月房租加押金。我会把租约发邮件给你签。", actionHint: "first and last = 首尾两个月，常见租房要求", frequency: "common" },
              { textEn: "Move-in date is the 1st. You'd owe first month, security deposit, and the pet deposit up front. I'll get the paperwork to you by email.", textZh: "1号可以搬入。你需要预付第一个月房租、押金和宠物押金。文件我邮件发给你。", actionHint: "paperwork = 文件/合同", frequency: "common" },
            ],
            casualVersion: "Apartment's ready on the 1st. I'll need first month's rent, security deposit, pet deposit up front. I'll email you the lease to sign.",
            formalityVariants: {
              casual: "Apartment's ready on the 1st. I'll need first month's rent, security deposit, pet deposit up front. I'll email you the lease to sign.",
              standard: "The apartment will be ready on the 1st. I'll require the first month's rent, the security deposit, and the pet deposit upfront. I will email you the lease agreement for your signature.",
              formal: "The apartment will be available for occupancy on the first day of the month. I will require the initial month's rent, the security deposit, and the pet deposit to be remitted in advance. I shall forward the lease agreement to you via email for your review and endorsement.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 4. 民宿沟通 ====================
  {
    id: "accommodation-bnb-communication",
    category: "accommodation",
    titleZh: "民宿沟通",
    titleEn: "B&B Communication",
    description: "入住民宿（Bed & Breakfast）时与主人沟通，了解早餐安排、房屋规则和周边信息",
    otherRole: "民宿主人",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "bnb-arrival",
        titleZh: "到达沟通",
        titleEn: "Arrival Communication",
        description: "到达民宿后与主人面对面沟通入住事宜",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hello, I'm your guest for tonight. This is such a lovely place!",
            textZh: "你好，我是今晚入住的客人。这地方真漂亮！",
            culturalNote:
              "B&B（Bed and Breakfast）通常由主人经营，住在自己家里接待客人，氛围温馨像做客一样。夸赞一下房子是很好的开场。",
            casualVersion: "Hey, I'm your guest for tonight. This place is super lovely!",
            commonMistake: {
              wrong: "Hello, I am guest for tonight.",
              correct: "Hello, I'm your guest for tonight.",
              explanation: "中文里没有冠词，常被省略；“your”表示所有格。",
            },
            formalityVariants: {
              casual: "Hey, I'm your guest. Love this place!",
              standard: "Hello, I'm your guest for tonight. This is such a lovely place!",
              formal: "Good evening, I am your confirmed guest for this evening. I must say, your accommodations are quite charming.",
            },
          },
          {
            speaker: "them",
            role: "民宿主人",
            textEn: "Thank you so much! Welcome, welcome. Let me show you to your room. Breakfast is served between 7:30 and 9:30 in the dining room.",
            textZh: "太谢谢了！欢迎欢迎。我带你去房间。早餐在餐厅供应，时间是7:30到9:30。",
            keyPhrases: [
              { en: "show you to your room", zh: "带你去房间" },
              { en: "breakfast is served", zh: "早餐供应" },
              { en: "dining room", zh: "餐厅" },
            ],
            alternativeExpressions: [
              { textEn: "Aw, thank you! Come on in, let me take you to your room. Brekkie's between 7:30 and 9:30 in the dining area.", textZh: "谢谢！快进来，我带你去房间。早餐在餐厅，7:30到9:30。", actionHint: "brekkie = breakfast 的口语缩写，澳洲/英式常用", frequency: "occasional" },
              { textEn: "That's so sweet of you! Welcome! Follow me, I'll show you where you're staying. Breakfast is from half seven to half nine, just downstairs.", textZh: "你太客气了！欢迎！跟我来，带你看房间。早餐7:30到9:30，就在楼下。", actionHint: "half seven = 7:30，英式说法", frequency: "common" },
              { textEn: "Oh thank you so much! Let me walk you up to your room. We do breakfast in the dining room, 7:30 to 9:30.", textZh: "太谢谢了！我带你上楼去房间。我们在餐厅供应早餐，7:30到9:30。", actionHint: "walk you up = 带你上楼", frequency: "common" },
            ],
            casualVersion: "Thanks a bunch! Welcome, welcome. I'll show ya your room. Breakfast is 7:30 to 9:30 in the dining room.",
            formalityVariants: {
              casual: "Thanks! C'mon, I'll show you your room. Breakfast is 7:30-9:30 in the dining room.",
              standard: "Thank you so much! Welcome, welcome. Let me show you to your room. Breakfast is served between 7:30 and 9:30 in the dining room.",
              formal: "Thank you very much. A warm welcome to you. Allow me to escort you to your room. Please note that breakfast is served daily from 7:30 AM to 9:30 AM in the dining room.",
            },
          },
          {
            speaker: "you",
            textEn: "That sounds wonderful. Is breakfast included in the room rate?",
            textZh: "太好了。早餐包含在房费里吗？",
            casualVersion: "Oh, that's awesome. Breakfast included with the room?",
            commonMistake: {
              wrong: "Breakfast included?",
              correct: "Is breakfast included in the room rate?",
              explanation: "直接问“Included?”在英文中显得太突兀，缺乏礼貌。",
            },
            formalityVariants: {
              casual: "Oh, awesome. Breakfast included?",
              standard: "That sounds wonderful. Is breakfast included in the room rate?",
              formal: "That sounds most delightful. May I inquire if breakfast is indeed inclusive of the room rate?",
            },
          },
          {
            speaker: "them",
            role: "民宿主人",
            textEn: "Absolutely, breakfast is included. Tomorrow I'm making pancakes with fresh berries. Do you have any dietary restrictions I should know about?",
            textZh: "当然包含。明天我会做新鲜浆果煎饼。你有什么饮食禁忌需要告诉我的吗？",
            keyPhrases: [
              { en: "breakfast is included", zh: "早餐包含在内" },
              { en: "dietary restrictions", zh: "饮食禁忌" },
            ],
            alternativeExpressions: [
              { textEn: "Oh yes, breakfast comes with the room! I'm doing pancakes and fresh berries tomorrow. Any food allergies or anything I should know?", textZh: "当然包的！明天我做煎饼配新鲜浆果。你有什么过敏或我需要知道的吗？", actionHint: "comes with the room = 包含在房费里", frequency: "common" },
              { textEn: "It sure is! Tomorrow's menu is pancakes with berries. Just let me know if there's anything you can't eat.", textZh: "当然包含！明天是浆果煎饼。有什么不能吃的告诉我就行。", actionHint: "it sure is = 当然是的，强调肯定", frequency: "common" },
            ],
            casualVersion: "Yep, breakfast's included. Tomorrow, makin' pancakes with fresh berries. Any dietary restrictions I should know?",
            culturalNote: "美国服务业非常注重个人饮食偏好，务必主动告知。",
            formalityVariants: {
              casual: "Yeah, breakfast's in. Tomorrow, pancakes with berries. Any dietary stuff I should know?",
              standard: "Absolutely, breakfast is included. Tomorrow I'm making pancakes with fresh berries. Do you have any dietary restrictions I should know about?",
              formal: "Yes, indeed, breakfast is fully inclusive. For tomorrow morning, I shall be preparing pancakes with fresh berries. Do you happen to have any dietary restrictions of which I should be made aware?",
            },
          },
          {
            speaker: "you",
            textEn: "No allergies, but I don't eat pork. Other than that, I'm easy!",
            textZh: "没有过敏，但我不吃猪肉。其他都好说！",
            casualVersion: "Nah, no allergies. Just no pork, please!",
            commonMistake: {
              wrong: "I don't eat pig meat.",
              correct: "I don't eat pork.",
              explanation: "“Pig meat”是中式英语，“pork”才是正确的表达。",
            },
            formalityVariants: {
              casual: "No allergies, just no pork. Everything else is fine!",
              standard: "No allergies, but I don't eat pork. Other than that, I'm easy!",
              formal: "I have no known allergies, however, I do abstain from consuming pork. Beyond that, I am quite flexible.",
            },
          },
          {
            speaker: "them",
            role: "民宿主人",
            textEn: "No problem at all. Also, feel free to use the garden and the patio. Just please take your shoes off at the front door — it's a house rule.",
            textZh: "完全没问题。另外，花园和露台随便用。只是请在门口脱鞋——这是我们家的规矩。",
            keyPhrases: [
              { en: "feel free to use", zh: "随便用" },
              { en: "take your shoes off", zh: "脱鞋" },
              { en: "house rule", zh: "家规" },
            ],
            alternativeExpressions: [
              { textEn: "Not a problem! Oh, and the garden and patio are all yours. We just ask that you kick your shoes off at the door — it's our thing.", textZh: "完全没问题！花园和露台随便用。就是到门口把鞋脱了——我们家的习惯。", actionHint: "kick your shoes off = 脱鞋的口语说法，it's our thing = 我们家的规矩", frequency: "common" },
              { textEn: "Totally fine! Make yourself at home — you can hang out in the garden or the patio whenever. Just shoes off at the door, if you don't mind.", textZh: "完全没问题！就像在自己家一样——花园和露台随时可以去。门口脱鞋就行。", actionHint: "make yourself at home = 像在自己家一样", frequency: "common" },
            ],
            casualVersion: "No biggie. Feel free to use the garden and patio. Just, uh, shoes off at the front door – house rule.",
            culturalNote: "美国人通常不习惯进屋脱鞋，但民宿可能有此规定。入乡随俗很重要。",
            formalityVariants: {
              casual: "No prob. Use the garden/patio. Just kick off your shoes at the door, house rule.",
              standard: "No problem at all. Also, feel free to use the garden and the patio. Just please take your shoes off at the front door — it's a house rule.",
              formal: "That is perfectly fine. Furthermore, you are most welcome to utilize the garden and the patio at your leisure. I merely request, as a house policy, that you kindly remove your footwear upon entering at the front door.",
            },
          },
          {
            speaker: "you",
            textEn: "Of course! One question — are there any good hiking trails nearby?",
            textZh: "当然！问一下——附近有好的徒步路线吗？",
            casualVersion: "Totally! Quick question — any good hiking trails around here?",
            commonMistake: {
              wrong: "One question, is there good hiking trails nearby?",
              correct: "One question — are there any good hiking trails nearby?",
              explanation: "“trails”是复数，应使用“are there”而非“is there”。",
            },
            formalityVariants: {
              casual: "Yeah, for sure! Any good hikes close by?",
              standard: "Of course! One question — are there any good hiking trails nearby?",
              formal: "Certainly! I do have a quick inquiry: are there any commendable hiking trails situated in the vicinity?",
            },
          },
          {
            speaker: "them",
            role: "民宿主人",
            textEn: "Oh yes! There's a beautiful trail about a 10-minute drive from here. I have a map I can give you. It takes about two hours and the views are stunning.",
            textZh: "有的！开车大约10分钟有一条很美的步道。我有地图可以给你。走完大约两小时，风景特别美。",
            keyPhrases: [
              { en: "hiking trail", zh: "徒步步道" },
              { en: "10-minute drive", zh: "开车10分钟" },
              { en: "stunning views", zh: "美到窒息的风景" },
            ],
            alternativeExpressions: [
              { textEn: "Oh definitely! There's a gorgeous trail just a short drive away. I've got a map for you. It's like a two-hour hike with incredible scenery.", textZh: "绝对有！开车一小会儿就有条很美的步道。我有地图给你。大概走两小时，风景超棒。", actionHint: "gorgeous = 非常美的，incredible = 难以置信的好", frequency: "common" },
              { textEn: "For sure! About 10 minutes by car, there's this amazing trail. Takes a couple hours, but the views are absolutely worth it. Let me grab you a map.", textZh: "当然！开车大概10分钟有条很棒的步道。走两个小时左右，风景绝对值得。我给你拿张地图。", actionHint: "for sure = 当然，grab you a map = 给你拿张地图", frequency: "common" },
            ],
            casualVersion: "Oh yeah! There's this gorgeous trail, like, 10-minute drive away. Got a map for ya. Takes 'bout two hours, views are sick.",
            formalityVariants: {
              casual: "Oh yeah! Super nice trail, 10 min drive. Got a map. Two hours, views are amazing.",
              standard: "Oh yes! There's a beautiful trail about a 10-minute drive from here. I have a map I can give you. It takes about two hours and the views are stunning.",
              formal: "Indeed, there is! There's a particularly beautiful trail located approximately a 10-minute drive from this location. I possess a map I can provide you. The trek typically takes around two hours, and the vistas are truly magnificent.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 5. 退房流程 ====================
  {
    id: "accommodation-checkout",
    category: "accommodation",
    titleZh: "退房流程",
    titleEn: "Check-out Process",
    description: "退房时与前台沟通，处理账单、检查房间和归还钥匙",
    otherRole: "前台",
    otherRoleIcon: "🧾",
    flows: [
      {
        id: "standard-checkout",
        titleZh: "标准退房",
        titleEn: "Standard Check-out",
        description: "正常退房、结清账单、归还门卡",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Good morning, I'd like to check out. I'm in Room 512.",
            textZh: "早上好，我要退房。我住512房间。",
            casualVersion: "Morning! Checking out — Room 512.",
            commonMistake: {
              wrong: "Good morning, I want to check out. I'm Room 512.",
              correct: "Good morning, I'd like to check out. I'm in Room 512.",
              explanation: "“I want”听起来比较生硬，用“I'd like to”更礼貌。房间号前通常用“in”。",
            },
            formalityVariants: {
              casual: "Morning, checking out from 512.",
              standard: "Good morning, I'd like to check out. I'm in Room 512.",
              formal: "Good morning, I wish to proceed with my check-out. My room number is 512.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Good morning! Let me pull up your bill. Did you have anything from the minibar or use room service during your stay?",
            textZh: "早上好！我查一下您的账单。您住店期间有使用迷你吧或客房服务吗？",
            keyPhrases: [
              { en: "pull up your bill", zh: "调出您的账单" },
              { en: "minibar", zh: "迷你吧" },
              { en: "room service", zh: "客房服务" },
            ],
            alternativeExpressions: [
              { textEn: "Morning! Let me get your bill. Did you use the minibar at all, or order any room service while you were here?", textZh: "早上好！我看下您的账单。住店期间有用迷你吧或者叫过客房服务吗？", actionHint: "at all = 有没有（加强语气）", frequency: "common" },
              { textEn: "Good morning! I'll bring up your charges. Any minibar items or room service we should add?", textZh: "早上好！我调一下您的消费。有需要加上的迷你吧或客房服务吗？", actionHint: "bring up charges = 调出消费记录", frequency: "common" },
            ],
            casualVersion: "Morning! Lemme pull up your bill. Anything from the minibar or room service?",
            formalityVariants: {
              casual: "Morning! Lemme pull up your bill. Anything from the minibar or room service?",
              standard: "Good morning! Let me pull up your bill. Did you have anything from the minibar or use room service during your stay?",
              formal: "Good morning! I will retrieve your billing statement. May I inquire if you utilized the minibar or any room service amenities during your patronage?",
            },
          },
          {
            speaker: "you",
            textEn: "I had two bottles of water from the minibar. That's it.",
            textZh: "我喝了迷你吧里两瓶水。就这些。",
            casualVersion: "Just two waters from the minibar. That's all.",
            commonMistake: {
              wrong: "Only have two bottles water from minibar.",
              correct: "I had two bottles of water from the minibar.",
              explanation: "需要主语“I”和介词“of”，时态用过去式“had”，更自然。",
            },
            formalityVariants: {
              casual: "Just two waters from the minibar. That's all.",
              standard: "I had two bottles of water from the minibar. That's it.",
              formal: "I consumed two bottles of water from the minibar. Beyond that, there were no other charges incurred.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Alright, your total comes to $456.80 including the minibar charges. Would you like to pay with the card on file?",
            textZh: "好的，您的总费用是456.80美元，包含迷你吧费用。您要用预留的卡支付吗？",
            keyPhrases: [
              { en: "total comes to", zh: "总费用是" },
              { en: "card on file", zh: "预留的信用卡" },
            ],
            alternativeExpressions: [
              { textEn: "Okay, so your bill is $456.80 with the minibar. Want me to charge the card we have on file?", textZh: "好的，加上迷你吧您的账单是456.80美元。要用我们存档的卡扣款吗？", actionHint: "card we have on file = 存档的卡", frequency: "common" },
              { textEn: "That'll be $456.80 all in, including the minibar. Should I put it on the same card you checked in with?", textZh: "总共456.80美元，含迷你吧。用您入住时的那张卡付吗？", actionHint: "all in = 全部包含，checked in with = 入住时用的", frequency: "common" },
            ],
            casualVersion: "Okay, total's $456.80, minibar included. Wanna use the card on file?",
            formalityVariants: {
              casual: "Okay, total's $456.80, minibar included. Wanna use the card on file?",
              standard: "Alright, your total comes to $456.80 including the minibar charges. Would you like to pay with the card on file?",
              formal: "Very well, your total balance is $456.80, which includes the minibar charges. Would you prefer to settle the payment using the credit card we have on record?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, charge it to the card on file, please. Could I also get a printed receipt?",
            textZh: "是的，请用那张卡扣款。能给我一张打印的收据吗？",
            culturalNote:
              "如果需要报销，记得要printed receipt（打印收据），有些酒店默认只发电子收据。",
            casualVersion: "Yeah, just charge it to the card on file. Can I get a printed receipt too?",
            commonMistake: {
              wrong: "Yes, use card. Give me a receipt.",
              correct: "Yes, charge it to the card on file, please. Could I also get a printed receipt?",
              explanation: "“use card”和“give me”不够礼貌，用完整句和礼貌表达。",
            },
            formalityVariants: {
              casual: "Yeah, just charge it to the card on file. Can I get a printed receipt too?",
              standard: "Yes, charge it to the card on file, please. Could I also get a printed receipt?",
              formal: "Yes, kindly process the payment using the credit card you have on record. Additionally, would it be possible to obtain a printed receipt?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course. Here's your receipt. And could I have the key cards back, please?",
            textZh: "当然。这是您的收据。可以把门卡还给我吗？",
            keyPhrases: [
              { en: "receipt", zh: "收据" },
              { en: "key cards", zh: "门卡" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing. Here's your receipt. Oh, and can I grab the room keys back?", textZh: "好的。这是您的收据。对了，房卡能还给我吗？", actionHint: "grab the keys back = 收回钥匙", frequency: "common" },
              { textEn: "No problem, here you go. Do you have the key cards? I'll need those back.", textZh: "没问题，给您。门卡带了吗？需要收回。", actionHint: "here you go = 给您", frequency: "common" },
            ],
            casualVersion: "Sure. Here's your receipt. Can I get the key cards back?",
            formalityVariants: {
              casual: "Sure. Here's your receipt. Can I get the key cards back?",
              standard: "Of course. Here's your receipt. And could I have the key cards back, please?",
              formal: "Certainly. Here is your finalized receipt. May I kindly request the return of the room key cards?",
            },
          },
          {
            speaker: "you",
            textEn: "Here you go. Thank you for a great stay!",
            textZh: "给你。住得很好，谢谢！",
            casualVersion: "Here. Thanks for a great stay!",
            commonMistake: {
              wrong: "Here. Thank you for a great stay.",
              correct: "Here you go. Thank you for a great stay!",
              explanation: "“Here you go”是递东西时的常用语，更自然，而非简单说“Here”。",
            },
            formalityVariants: {
              casual: "Here. Thanks for a great stay!",
              standard: "Here you go. Thank you for a great stay!",
              formal: "Here they are. I truly appreciate your excellent hospitality during my stay!",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Thank you! We hope to see you again. Would you like us to call a taxi for you?",
            textZh: "谢谢！希望再次见到您。需要我们帮您叫出租车吗？",
            keyPhrases: [
              { en: "hope to see you again", zh: "希望再次见到您" },
              { en: "call a taxi", zh: "叫出租车" },
            ],
            alternativeExpressions: [
              { textEn: "Thanks so much! Hope you had a great stay. Need a cab or anything?", textZh: "太感谢了！希望您住得愉快。需要叫车吗？", actionHint: "cab = taxi 出租车", frequency: "common" },
              { textEn: "Thank you for staying with us! Can we get you a ride to the airport or anywhere?", textZh: "感谢您的入住！需要我们帮您安排去机场或其他地方的车吗？", actionHint: "get you a ride = 帮你叫车/安排交通", frequency: "common" },
              { textEn: "You're all set! Come back anytime. Want me to call an Uber or a taxi for you?", textZh: "好了！随时欢迎再来。要我帮您叫个Uber或出租车吗？", actionHint: "you're all set = 全部搞定了", frequency: "occasional" },
            ],
            casualVersion: "Thanks! Hope to see you again. Want us to call a taxi?",
            formalityVariants: {
              casual: "Thanks! Hope to see you again. Want us to call a taxi?",
              standard: "Thank you! We hope to see you again. Would you like us to call a taxi for you?",
              formal: "Thank you! We sincerely hope to have the pleasure of welcoming you back in the future. May we arrange a taxi service for your departure?",
            },
          },
        ],
      },
    ],
  },

  // ==================== 6. 延长入住 ====================
  {
    id: "accommodation-extend-stay",
    category: "accommodation",
    titleZh: "延长入住",
    titleEn: "Extending Stay",
    description: "向酒店或民宿申请延长入住时间，沟通价格和房间可用性",
    otherRole: "前台",
    otherRoleIcon: "📅",
    flows: [
      {
        id: "extend-stay",
        titleZh: "延长入住",
        titleEn: "Extending Stay",
        description: "临时决定多住几天，与前台沟通",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm currently in Room 308 and I was supposed to check out tomorrow. Is it possible to extend my stay for two more nights?",
            textZh: "你好，我现在住在308房间，原本明天退房。可以延住两晚吗？",
            culturalNote:
              "\"Is it possible to…\" 是礼貌请求的万能句式，比直接说 \"I want to\" 更得体。",
            casualVersion: "Hey, I'm in Room 308. Was supposed to check out tomorrow. Can I extend my stay two more nights?",
            commonMistake: {
              wrong: "I want to extend for two nights.",
              correct: "Can I extend for two more nights?",
              explanation: "强调需要主语，且用“Can I”或“Is it possible”更礼貌",
            },
            formalityVariants: {
              casual: "Hey, I'm in 308. Was gonna check out tomorrow, but can I get two more nights?",
              standard: "Hi, I'm currently in Room 308 and I was supposed to check out tomorrow. Is it possible to extend my stay for two more nights?",
              formal: "Good morning/afternoon, I am a guest in Room 308. My scheduled departure is tomorrow, and I would like to inquire about the possibility of extending my reservation for an additional two nights.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Let me check availability for those dates. Could you hold on just a moment?",
            textZh: "我查一下那几天的空房情况。您稍等一下好吗？",
            keyPhrases: [
              { en: "check availability", zh: "查看空房情况" },
              { en: "hold on", zh: "稍等" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, let me take a look and see if we have room. Give me one sec.", textZh: "好的，我看看有没有空房。稍等一下。", actionHint: "give me one sec = 等我一秒", frequency: "common" },
              { textEn: "Let me see what's open for those nights. Bear with me just a moment.", textZh: "我看看那几晚有什么空的。请稍等一下。", actionHint: "bear with me = 请耐心等一下", frequency: "common" },
            ],
            casualVersion: "Lemme check availability for those dates. Hold on a sec, okay?",
            formalityVariants: {
              casual: "Hold on a sec, let me check that for ya.",
              standard: "Let me check availability for those dates. Could you hold on just a moment?",
              formal: "Certainly, allow me to verify the availability for those particular dates. Would you mind holding for just a brief moment?",
            },
          },
          {
            speaker: "you",
            textEn: "Sure, take your time.",
            textZh: "好的，不急。",
            casualVersion: "No worries, take your time.",
            formalityVariants: {
              casual: "Yeah, take your time.",
              standard: "Sure, take your time.",
              formal: "Of course, please do so at your convenience.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Good news — we can keep you in the same room. However, the rate for those nights would be $159 per night instead of $129, as we're entering peak season.",
            textZh: "好消息——您可以继续住同一间房。不过那几晚的房价是每晚159美元，不是129美元了，因为即将进入旺季。",
            keyPhrases: [
              { en: "keep you in the same room", zh: "继续住同一间房" },
              { en: "rate", zh: "房价" },
              { en: "peak season", zh: "旺季" },
            ],
            alternativeExpressions: [
              { textEn: "Great news — your room's available. Just so you know, the rate goes up to $159 a night since it's high season.", textZh: "好消息——你的房间还有。不过提醒一下，因为是旺季，价格涨到每晚159美元了。", actionHint: "just so you know = 提醒你一下，high season = peak season 旺季", frequency: "common" },
              { textEn: "Yep, you can stay! Same room, no problem. The nightly rate will be a bit higher though — $159 because we're heading into peak season.", textZh: "可以续住！同一间房没问题。不过每晚价格会高一点——159美元，因为快到旺季了。", actionHint: "heading into = 即将进入", frequency: "common" },
            ],
            casualVersion: "Good news – you can stay in the same room. But, it'll be $159/night instead of $129 for those nights 'cause it's peak season now.",
            formalityVariants: {
              casual: "Good news, you can stay in your room! Bad news, it's $159 a night now, not $129, 'cause it's peak season.",
              standard: "Good news — we can keep you in the same room. However, the rate for those nights would be $159 per night instead of $129, as we're entering peak season.",
              formal: "I have good news regarding your request: you will be able to remain in your current room. However, please be advised that the rate for those additional nights will be $159 per night, an increase from the $129 rate, due to the upcoming peak season.",
            },
          },
          {
            speaker: "you",
            textEn: "That's a bit more than I expected. Is there any chance of getting a discount since I'm already staying here?",
            textZh: "比我预想的贵了一点。因为我已经住在这里了，能打个折吗？",
            casualVersion: "Hmm, that's a bit steep. Any chance of a discount for a returning guest?",
            commonMistake: {
              wrong: "It is expensive than I expected.",
              correct: "That's a bit more than I expected.",
              explanation: "注意比较级 'more than' 或使用形容词 'pricier'，避免直接说 'expensive'。",
            },
            formalityVariants: {
              casual: "Whoa, that's kinda high. Can I get a discount, since I'm already a guest?",
              standard: "That's a bit more than I expected. Is there any chance of getting a discount since I'm already staying here?",
              formal: "That rate is a bit higher than I had anticipated. Given that I am an existing guest, I was wondering if there might be any flexibility regarding the pricing or the possibility of a courtesy discount.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I understand. Let me see what I can do. I can offer you $145 per night as a loyalty rate. How does that sound?",
            textZh: "我理解。让我想想办法。我可以给您每晚145美元的老客户价。您觉得怎么样？",
            keyPhrases: [
              { en: "loyalty rate", zh: "老客户价" },
              { en: "how does that sound", zh: "您觉得怎么样" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, I hear you. Tell you what — I can do $145 a night as a repeat guest discount. Would that work?", textZh: "理解。这样吧——作为回头客优惠，我可以给你每晚145。行吗？", actionHint: "tell you what = 这样吧，repeat guest discount = 回头客优惠", frequency: "common" },
              { textEn: "I totally get it. Let me see... Best I can do is $145 per night since you're already a guest here. Fair enough?", textZh: "完全理解。让我看看……最多能给到每晚145，因为你已经是我们的客人了。可以吗？", actionHint: "best I can do = 我能给的最低价", frequency: "common" },
            ],
            casualVersion: "I get it. Let me see what I can do. I can do $145 a night as a loyalty rate. Sound good?",
            formalityVariants: {
              casual: "I hear ya. Let me check. How about $145/night as a loyalty thing? Deal?",
              standard: "I understand. Let me see what I can do. I can offer you $145 per night as a loyalty rate. How does that sound?",
              formal: "I certainly understand your concern. Please allow me a moment to explore available options. I can offer you a loyalty rate of $145 per night. Would that be acceptable?",
            },
          },
          {
            speaker: "you",
            textEn: "That works. Please go ahead and extend my reservation.",
            textZh: "可以。请帮我延长预订吧。",
            casualVersion: "Yeah, that works. Go ahead and extend it.",
            commonMistake: {
              wrong: "That works. Please help me extend my reservation.",
              correct: "That works. Please go ahead and extend my reservation.",
              explanation: "“go ahead and”让语气更自然，更像指示而不是请求帮忙。",
            },
            formalityVariants: {
              casual: "Perfect. Just extend it for me.",
              standard: "That works. Please go ahead and extend my reservation.",
              formal: "That would be acceptable. Please proceed with extending my reservation accordingly.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Done! Your new checkout date is the 27th. I'll update the key card so it stays active. Enjoy the rest of your stay!",
            textZh: "搞定了！您的新退房日期是27号。我会更新门卡确保继续有效。祝您住得愉快！",
            keyPhrases: [
              { en: "checkout date", zh: "退房日期" },
              { en: "update the key card", zh: "更新门卡" },
            ],
            alternativeExpressions: [
              { textEn: "All set! You're now booked through the 27th. I'll reprogram your key card so it keeps working. Enjoy!", textZh: "搞定了！您现在预订到27号了。我重新设下门卡让它继续有效。祝愉快！", actionHint: "all set = 搞定了，reprogram = 重新设置", frequency: "common" },
              { textEn: "You're good to go — new checkout is the 27th. Let me just re-do your key card real quick. Have a great rest of your stay!", textZh: "没问题了——新退房日是27号。我快速重设一下门卡。祝接下来住得开心！", actionHint: "re-do = 重新弄，real quick = 很快", frequency: "common" },
            ],
            casualVersion: "All set! New checkout's the 27th. I'll update your key card. Enjoy the rest of your stay!",
            formalityVariants: {
              casual: "Done! Your checkout's now the 27th. I'll fix your key. Enjoy the rest!",
              standard: "Done! Your new checkout date is the 27th. I'll update the key card so it stays active. Enjoy the rest of your stay!",
              formal: "It's done! Your revised checkout date is now the 27th. I will ensure your key card is updated to reflect this extension. Please enjoy the remainder of your stay with us!",
            },
          },
        ],
      },
    ],
  },

  // ==================== 7. 投诉噪音 ====================
  {
    id: "accommodation-noise-complaint",
    category: "accommodation",
    titleZh: "投诉噪音",
    titleEn: "Noise Complaint",
    description: "因为隔壁房间或周围环境噪音太大，向前台或房东投诉",
    otherRole: "前台",
    otherRoleIcon: "🔊",
    flows: [
      {
        id: "noise-complaint",
        titleZh: "噪音投诉",
        titleEn: "Noise Complaint",
        description: "深夜邻房太吵，向前台投诉",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Sorry to bother you so late, but the guests in the room next to mine are being extremely loud. I can't sleep at all.",
            textZh: "不好意思这么晚打扰了，但我隔壁房间的客人太吵了。我根本睡不着。",
            culturalNote:
              "投诉时先说 \"sorry to bother you\" 显得礼貌，然后直接说明问题。不需要委婉到对方听不懂。",
            casualVersion: "Super sorry to bother you this late, but the folks next door are super loud. Can't sleep a wink.",
            commonMistake: {
              wrong: "I can't sleep anything.",
              correct: "I can't sleep at all.",
              explanation: "\"at all\" 或 \"a wink\" 更自然，\"anything\" 在此不适用。",
            },
            formalityVariants: {
              casual: "So sorry to bother you this late, but my next-door neighbors are being really loud. I literally can't sleep.",
              standard: "Sorry to bother you so late, but the guests in the room next to mine are being extremely loud. I can't sleep at all.",
              formal: "Pardon me for disturbing you at such a late hour, but the occupants of the adjacent room are generating a considerable amount of noise. Consequently, I am unable to rest.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'm really sorry to hear that. Do you know which room the noise is coming from?",
            textZh: "非常抱歉听到这种情况。您知道噪音是从哪个房间传来的吗？",
            keyPhrases: [
              { en: "sorry to hear that", zh: "很抱歉听到这种情况" },
              { en: "which room", zh: "哪个房间" },
            ],
            alternativeExpressions: [
              { textEn: "Oh no, I'm so sorry about that. Do you happen to know which room it's coming from?", textZh: "哎呀，真抱歉。你知道是哪个房间传出来的吗？", actionHint: "do you happen to know = 你碰巧知道吗", frequency: "common" },
              { textEn: "I apologize for the disturbance. Can you tell which room it is? We'll deal with it right away.", textZh: "很抱歉打扰到您了。能确认是哪个房间吗？我们马上处理。", actionHint: "deal with it = 处理", frequency: "common" },
            ],
            casualVersion: "Oh, I'm really sorry to hear that. Do you know which room it's coming from?",
            formalityVariants: {
              casual: "Oh, that sucks. Which room's it coming from?",
              standard: "I'm really sorry to hear that. Do you know which room the noise is coming from?",
              formal: "I sincerely apologize for this inconvenience. Would you happen to know the specific room number from which the disturbance is originating?",
            },
          },
          {
            speaker: "you",
            textEn: "I think it's Room 410, right next door. It sounds like they're having a party — loud music and shouting.",
            textZh: "我觉得是410房间，就在隔壁。听起来他们在开派对——音乐很大声还有人在喊叫。",
            casualVersion: "Pretty sure it's 410, like, right next door. Sounds like a party in there – loud music and yelling.",
            commonMistake: {
              wrong: "They are making a party.",
              correct: "They're having a party.",
              explanation: "表达“开派对”用 \"have a party\" 是固定搭配，不能用 \"make\"。",
            },
            formalityVariants: {
              casual: "Pretty sure it's 410, right next door. Sounds like a party in there – super loud music and yelling.",
              standard: "I think it's Room 410, right next door. It sounds like they're having a party — loud music and shouting.",
              formal: "I believe it is Room 410, immediately adjacent. It appears they may be hosting a social gathering, given the discernible loud music and vocalizations.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'll send someone up to speak with them right away. If the noise continues after that, please call us back and we'll find you another room.",
            textZh: "我马上派人上去跟他们沟通。如果之后还是吵，请再打电话给我们，我们会给您换房间。",
            keyPhrases: [
              { en: "send someone up", zh: "派人上去" },
              { en: "call us back", zh: "再打电话给我们" },
              { en: "find you another room", zh: "给您换房间" },
            ],
            alternativeExpressions: [
              { textEn: "I'll have someone go talk to them right now. If it doesn't stop, just ring us again and we'll get you a different room.", textZh: "我现在就派人去跟他们说。如果还不停，再打给我们，我们给您换房。", actionHint: "ring us = 打电话给我们", frequency: "common" },
              { textEn: "We'll send security up to handle it immediately. And if they keep it up, give us a call back — we can always move you.", textZh: "我们会马上派安保上去处理。如果他们继续闹，再打给我们——我们随时可以给您换房。", actionHint: "keep it up = 继续（闹）", frequency: "common" },
            ],
            casualVersion: "I'll send someone up to talk to 'em ASAP. If it's still loud after that, just call us, and we'll get you a new room.",
            formalityVariants: {
              casual: "I'll send someone up to talk to them right away. If it's still loud, just call us back, and we'll switch your room.",
              standard: "I'll send someone up to speak with them right away. If the noise continues after that, please call us back and we'll find you another room.",
              formal: "I shall dispatch a staff member to address the matter with them immediately. Should the disturbance persist, please do not hesitate to contact us again, and we will gladly relocate you to an alternative room.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. I really appreciate you handling this. I have an early flight tomorrow.",
            textZh: "谢谢。真的很感激你处理这件事。我明天一早有航班。",
            casualVersion: "Thanks. Really appreciate you handling this. Gotta early flight tomorrow.",
            commonMistake: {
              wrong: "I have a flight early tomorrow.",
              correct: "I have an early flight tomorrow.",
              explanation: "\"early\" 修饰 \"flight\"，放在 \"flight\" 前。这是常见语序错误。",
            },
            formalityVariants: {
              casual: "Thanks. Really appreciate you dealing with this. Gotta early flight tomorrow.",
              standard: "Thank you. I really appreciate you handling this. I have an early flight tomorrow.",
              formal: "My sincere thanks. I am truly grateful for your prompt assistance with this matter, particularly as I have an early departure scheduled for tomorrow morning.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I completely understand. We'll take care of it. If you're not satisfied, we'll also look into a partial refund for tonight.",
            textZh: "完全理解。我们会处理好的。如果您不满意，我们也会考虑退还今晚的部分房费。",
            keyPhrases: [
              { en: "take care of it", zh: "处理好这件事" },
              { en: "partial refund", zh: "部分退款" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely, we'll handle it. And we'll definitely look at giving you some money back for tonight's stay.", textZh: "一定会处理好的。今晚的房费我们肯定会给您退一部分。", actionHint: "some money back = 退一些钱", frequency: "common" },
              { textEn: "Don't worry, we're on it. We may also comp part of tonight's room charge for the trouble.", textZh: "别担心，我们正在处理。因为这个麻烦，今晚房费可能会给您减免一部分。", actionHint: "comp = 免费提供/减免（compensate缩写）", frequency: "occasional" },
            ],
            casualVersion: "Totally get it. We'll handle it. If you're still not happy, we can even look into a partial refund for tonight.",
            formalityVariants: {
              casual: "I totally get it. We'll handle it. If you're not happy, we can even do a partial refund.",
              standard: "I completely understand. We'll take care of it. If you're not satisfied, we'll also look into a partial refund for tonight.",
              formal: "I perfectly understand your predicament. We will ensure this situation is resolved. Furthermore, should you remain dissatisfied, we would be pleased to explore the possibility of a partial refund for this evening's accommodations.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 8. 设施报修 ====================
  {
    id: "accommodation-maintenance",
    category: "accommodation",
    titleZh: "设施报修",
    titleEn: "Reporting Maintenance",
    description: "发现房间内设施损坏或异常时向前台或房东报修",
    otherRole: "前台/维修人员",
    otherRoleIcon: "🔧",
    flows: [
      {
        id: "report-issue",
        titleZh: "报告问题",
        titleEn: "Report an Issue",
        description: "发现浴室水龙头漏水，向前台报修",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm in Room 605. The faucet in the bathroom is dripping non-stop. The hot water tap won't turn off completely.",
            textZh: "你好，我住605房间。卫生间的水龙头一直滴水，热水龙头关不紧。",
            culturalNote:
              "描述故障时用具体动词：dripping（滴水）、leaking（漏水）、not working（不工作）、stuck（卡住）。",
            casualVersion: "Hey, I'm in 605. My bathroom faucet's dripping non-stop. The hot water tap won't shut all the way.",
            commonMistake: {
              wrong: "The hot water head is dripping water.",
              correct: "The hot water tap won't turn off completely.",
              explanation: "“head” 不用于水龙头，用 “tap” 或 “faucet”；“dripping water” 英文通常只说 “is dripping”.",
            },
            formalityVariants: {
              casual: "Hey, room 605, my bathroom faucet's dripping. The hot water tap won't shut all the way.",
              standard: "Hi, I'm in Room 605. The faucet in the bathroom is dripping non-stop. The hot water tap won't turn off completely.",
              formal: "Good morning/afternoon, I am calling from Room 605. I've noticed an issue with the bathroom faucet; specifically, the hot water tap appears to be continuously dripping and cannot be fully closed.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'm sorry about that. I'll send a maintenance person to your room. Would you like them to come now, or would a specific time be better?",
            textZh: "抱歉给您带来不便。我会派维修人员去您房间。您希望现在就去，还是约一个具体时间？",
            keyPhrases: [
              { en: "maintenance person", zh: "维修人员" },
              { en: "come now", zh: "现在就来" },
              { en: "a specific time", zh: "一个具体时间" },
            ],
            alternativeExpressions: [
              { textEn: "Sorry about that! I'll get someone up there to fix it. Is now a good time, or would you prefer they come later?", textZh: "抱歉！我让人上去修。现在方便吗，还是晚点来比较好？", actionHint: "get someone up there = 派人上去", frequency: "common" },
              { textEn: "Oh I'm sorry, we'll send our handyman right over. Do you want them now, or should we schedule a time?", textZh: "抱歉，我们马上派维修师傅过去。您要现在来还是约个时间？", actionHint: "handyman = 维修师傅", frequency: "common" },
            ],
            casualVersion: "Sorry 'bout that. I'll get maintenance up there. Want 'em to come now, or set a time?",
            formalityVariants: {
              casual: "Sorry 'bout that. I'll get someone from maintenance up there. Want 'em to come now, or set a time?",
              standard: "I'm sorry about that. I'll send a maintenance person to your room. Would you like them to come now, or would a specific time be better?",
              formal: "My apologies for the inconvenience. I will dispatch a member of our maintenance team to your room immediately. Would you prefer they attend to it now, or would you like to schedule a more convenient time?",
            },
          },
          {
            speaker: "you",
            textEn: "Now would be great. I'm in the room.",
            textZh: "现在就好。我在房间里。",
            casualVersion: "Now's good. I'm here.",
            commonMistake: {
              wrong: "Now is good. I am in the room.",
              correct: "Now would be great. I'm in the room.",
              explanation: "“Now is good” 稍显生硬， “Now would be great” 或 “Now works” 更自然。",
            },
            formalityVariants: {
              casual: "Now's good. I'm here.",
              standard: "Now would be great. I'm in the room.",
              formal: "Now would be perfectly suitable. I am currently in the room.",
            },
          },
          {
            speaker: "them",
            role: "维修人员",
            textEn: "Hello, I'm from maintenance. May I come in and take a look at the faucet?",
            textZh: "你好，我是维修部的。可以进来看看水龙头吗？",
            keyPhrases: [
              { en: "I'm from maintenance", zh: "我是维修部的" },
              { en: "take a look", zh: "看看" },
            ],
            alternativeExpressions: [
              { textEn: "Hi there, maintenance here. Mind if I come in and check out the faucet?", textZh: "你好，维修的来了。我进来看看水龙头行吗？", actionHint: "maintenance here = 维修的来了，check out = 检查", frequency: "common" },
              { textEn: "Hey, I'm the fix-it guy. I heard you've got a leaky faucet? Can I take a look?", textZh: "嘿，我是修东西的。听说水龙头漏水？我看看？", actionHint: "fix-it guy = 修东西的人，口语化", frequency: "occasional" },
            ],
            casualVersion: "Hi, maintenance. Can I come in and take a look at the faucet?",
            formalityVariants: {
              casual: "Hi, maintenance. Can I come in and take a look at the faucet?",
              standard: "Hello, I'm from maintenance. May I come in and take a look at the faucet?",
              formal: "Good morning/afternoon. I am from the maintenance department. May I enter to inspect the faucet?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please come in. It's the hot water handle — I can't turn it off all the way.",
            textZh: "请进。是热水那个把手——我怎么拧都关不紧。",
            casualVersion: "Yeah, come on in. It's the hot water handle — won't turn off all the way.",
            commonMistake: {
              wrong: "It is the hot water. I can't close it tight.",
              correct: "It's the hot water handle — I can't turn it off all the way.",
              explanation: "“close it tight” 不自然， “turn it off all the way” 是更地道的说法，强调完全关闭。",
            },
            formalityVariants: {
              casual: "Yeah, come on in. It's the hot water handle — won't turn off all the way.",
              standard: "Yes, please come in. It's the hot water handle — I can't turn it off all the way.",
              formal: "Certainly, please come in. The issue pertains to the hot water handle, which I am unable to fully close.",
            },
          },
          {
            speaker: "them",
            role: "维修人员",
            textEn: "I see the problem — the washer is worn out. I'll replace it right now. It should only take about ten minutes.",
            textZh: "我看到问题了——垫圈磨损了。我现在就换。大概需要10分钟。",
            keyPhrases: [
              { en: "washer is worn out", zh: "垫圈磨损了" },
              { en: "replace it", zh: "更换" },
              { en: "ten minutes", zh: "10分钟" },
            ],
            alternativeExpressions: [
              { textEn: "Ah yeah, the rubber seal's gone. Quick fix — I'll swap it out. Should take maybe 10 minutes.", textZh: "啊，橡胶密封圈坏了。小问题——我换一下。大概10分钟。", actionHint: "rubber seal = 橡胶密封圈，swap it out = 换掉", frequency: "common" },
              { textEn: "I see what's wrong — the washer's shot. Let me put a new one in. Won't take long, 10 minutes tops.", textZh: "我看出问题了——垫圈坏了。我换个新的。不会太久，最多10分钟。", actionHint: "shot = 坏了/报废了，tops = 最多", frequency: "common" },
            ],
            casualVersion: "Ah, I see it — washer's worn out. I'll swap it out now. Should only take ten minutes.",
            formalityVariants: {
              casual: "Ah, I see it — washer's worn out. I'll swap it out now. Should only take ten minutes.",
              standard: "I see the problem — the washer is worn out. I'll replace it right now. It should only take about ten minutes.",
              formal: "I have identified the issue; the washer appears to be worn. I will proceed with its replacement immediately, which should require approximately ten minutes.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you so much. I appreciate you coming so quickly.",
            textZh: "太谢谢了。感谢你这么快就来了。",
            casualVersion: "Thanks so much. Appreciate you coming so quick.",
            commonMistake: {
              wrong: "Thank you very much. Thank you for coming quickly.",
              correct: "Thank you so much. I appreciate you coming so quickly.",
              explanation: "“I appreciate you doing X” 往往比 “Thank you for doing X” 更地道口语化。 “so quickly” 比 “quickly” 更强调。",
            },
            formalityVariants: {
              casual: "Thanks so much. Appreciate you coming so quick.",
              standard: "Thank you so much. I appreciate you coming so quickly.",
              formal: "I'm very grateful for your assistance. Thank you for your prompt response.",
            },
          },
          {
            speaker: "them",
            role: "维修人员",
            textEn: "All fixed! Give it a try. If you have any other issues, just dial zero for the front desk.",
            textZh: "修好了！试试看。如果还有其他问题，拨0找前台就行。",
            keyPhrases: [
              { en: "all fixed", zh: "修好了" },
              { en: "give it a try", zh: "试试看" },
              { en: "dial zero", zh: "拨0" },
            ],
            alternativeExpressions: [
              { textEn: "There you go, good as new! Try it out. If anything else comes up, just call the front desk — hit zero.", textZh: "好了，跟新的一样！试试看。有别的问题打前台——按0。", actionHint: "good as new = 跟新的一样，hit zero = 按0", frequency: "common" },
              { textEn: "All done! Go ahead and test it. Any more problems, just ring down to reception.", textZh: "修好了！试一下。还有问题打电话到前台就行。", actionHint: "ring down to reception = 打电话到前台", frequency: "common" },
            ],
            casualVersion: "All set! Try it out. Any other issues, just hit zero for the front desk.",
            formalityVariants: {
              casual: "All set! Try it out. Any other issues, just hit zero for the front desk.",
              standard: "All fixed! Give it a try. If you have any other issues, just dial zero for the front desk.",
              formal: "The repair is complete. Please test it. Should you encounter any further issues, kindly contact the front desk by dialing zero.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 9. 洗衣服务 ====================
  {
    id: "accommodation-laundry",
    category: "accommodation",
    titleZh: "洗衣服务",
    titleEn: "Laundry Service",
    description: "使用酒店洗衣服务或公共洗衣房，了解收费和取衣时间",
    otherRole: "前台/客房服务",
    otherRoleIcon: "👔",
    flows: [
      {
        id: "laundry-service",
        titleZh: "洗衣服务",
        titleEn: "Laundry Service",
        description: "使用酒店洗衣服务",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hello, I need some clothes washed. Do you offer laundry service?",
            textZh: "你好，我有些衣服需要洗。你们提供洗衣服务吗？",
            casualVersion: "Hey, got some clothes that need washing. Y'all do laundry service?",
            commonMistake: {
              wrong: "I need wash clothes.",
              correct: "I need some clothes washed.",
              explanation: "中式英语，缺少be动词和ed形式，或用被动语态。",
            },
            formalityVariants: {
              casual: "Hey, got some clothes that need washing. You guys do laundry service?",
              standard: "Hello, I have some clothes I'd like to have washed. Do you offer laundry service?",
              formal: "Good morning/afternoon, I am inquiring about the availability of laundry service for some garments.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, we do! You'll find a laundry bag and a price list in your closet. Just fill out the form, put your clothes in the bag, and leave it on the bed.",
            textZh: "有的！衣柜里有洗衣袋和价目表。填好表格，把衣服放进袋子里，放在床上就行。",
            keyPhrases: [
              { en: "laundry bag", zh: "洗衣袋" },
              { en: "price list", zh: "价目表" },
              { en: "fill out the form", zh: "填好表格" },
            ],
            alternativeExpressions: [
              { textEn: "We sure do! Check your closet — there's a laundry bag and a price sheet in there. Just fill in the slip, bag it up, and leave it on the bed.", textZh: "有的！看看衣柜——里面有洗衣袋和价格表。填好单子，装袋，放床上就行。", actionHint: "price sheet = 价格表，slip = 单子/表格", frequency: "common" },
              { textEn: "Yep, absolutely. In your room you'll find a laundry bag in the wardrobe along with a form and pricing. Just fill it out, toss your clothes in, and we'll pick it up.", textZh: "可以的。房间衣柜里有洗衣袋、表格和价目。填好后把衣服放进去，我们会来取。", actionHint: "toss your clothes in = 把衣服扔进去", frequency: "common" },
            ],
            casualVersion: "Yep! Laundry bag and prices are in your closet. Just fill out the form, toss your clothes in the bag, and leave it on the bed.",
            formalityVariants: {
              casual: "Yeah, totally! Laundry bag and price info are in your closet. Just fill out the paper, throw your clothes in the bag, and put it on the bed.",
              standard: "Yes, we do! You'll find a laundry bag and a price list in your closet. Please fill out the form, place your clothes in the bag, and leave it on the bed.",
              formal: "Indeed, we offer full laundry services. A laundry bag and a comprehensive price list are provided for your convenience within your wardrobe. Kindly complete the accompanying form, place your garments within the bag, and position it on your bed for collection.",
            },
          },
          {
            speaker: "you",
            textEn: "How long does it usually take? I need a shirt for a dinner tomorrow evening.",
            textZh: "通常要多久？我明晚有个晚餐需要一件衬衫。",
            culturalNote:
              "如果赶时间可以要求express service（快洗服务），通常加收50%费用但当天可取。",
            casualVersion: "How long's it usually take? Need a shirt for dinner tomorrow night.",
            commonMistake: {
              wrong: "How long need?",
              correct: "How long does it usually take?",
              explanation: "缺少主语和谓语，英文表达需要完整的句子。",
            },
            formalityVariants: {
              casual: "How long's that usually take? I need a shirt for dinner tomorrow night.",
              standard: "How long does it usually take? I need a shirt for a dinner tomorrow evening.",
              formal: "Could you please advise on the typical turnaround time? I require a particular shirt for a dinner engagement tomorrow evening.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Regular service is returned within 24 hours. If you need it sooner, we have express service — same-day return for an additional 50% charge. Items dropped off before 9 AM will be ready by 6 PM.",
            textZh: "普通洗衣24小时内送回。如果您更急，我们有快洗服务——当天送回，加收50%费用。早上9点前送洗，下午6点前可取。",
            keyPhrases: [
              { en: "regular service", zh: "普通洗衣" },
              { en: "express service", zh: "快洗服务" },
              { en: "same-day return", zh: "当天送回" },
              { en: "additional charge", zh: "额外收费" },
            ],
            alternativeExpressions: [
              { textEn: "Standard turnaround is 24 hours. If you need it faster, we do same-day for a 50% surcharge — just drop it off before 9 AM and it'll be back by 6.", textZh: "标准周转时间是24小时。急的话我们有当天取的，加50%费用——9点前送来，6点前拿回。", actionHint: "turnaround = 周转时间，surcharge = 附加费，drop it off = 送来", frequency: "common" },
              { textEn: "Normally it's next-day service. But we've got a rush option — costs 50% more, and you'll get it back the same evening if you bring it in by 9.", textZh: "正常是隔天取。不过有加急的——多收50%，早上9点前送来晚上就能拿。", actionHint: "rush option = 加急选项，bring it in = 送来", frequency: "common" },
            ],
            casualVersion: "Regular service, you'll get it back within 24 hours. Need it faster? Express service is same-day, but it's 50% extra. Drop stuff off before 9 AM, it'll be ready by 6 PM.",
            formalityVariants: {
              casual: "Normal service, you get it back in a day. If you need it quicker, express is same-day for 50% more. Drop it by 9 AM, get it by 6 PM.",
              standard: "Regular service provides a 24-hour turnaround. For expedited service, we offer same-day return with an additional 50% charge. Items submitted prior to 9 AM will be available for collection by 6 PM.",
              formal: "Our standard laundry service guarantees return within a 24-hour period. For more immediate requirements, an express service is available, providing same-day return for an additional surcharge of 50%. Garments submitted before 9:00 AM will be ready for retrieval by 6:00 PM.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll go with the express service for the shirt. Can it be ironed as well?",
            textZh: "衬衫我选快洗服务。能一起熨烫吗？",
            casualVersion: "Okay, express service for the shirt. Can it get ironed too?",
            commonMistake: {
              wrong: "Can iron it?",
              correct: "Can it be ironed as well?",
              explanation: "缺少主语和助动词，英文表达中动词需要有主语。",
            },
            formalityVariants: {
              casual: "Yeah, express for the shirt. Can you guys iron it too?",
              standard: "I'll opt for the express service for the shirt. Will it also be ironed?",
              formal: "I will proceed with the express service for this particular shirt. May I also inquire if pressing is included in this service?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Absolutely, pressing is included with the express service. We'll have it hanging in your closet by this evening.",
            textZh: "当然可以，快洗服务包含熨烫。今晚之前我们会挂在您的衣柜里。",
            keyPhrases: [
              { en: "pressing", zh: "熨烫" },
              { en: "hanging in your closet", zh: "挂在您的衣柜里" },
            ],
            alternativeExpressions: [
              { textEn: "Of course, ironing's part of the express deal. We'll have it pressed and hung up in your room by tonight.", textZh: "当然，快洗包含熨烫。今晚之前会熨好挂在您房间里。", actionHint: "part of the deal = 包含在服务里", frequency: "common" },
              { textEn: "Sure thing — express includes pressing. It'll be back on a hanger in your closet this evening.", textZh: "没问题——快洗包含熨烫。今晚就会挂在你衣柜里。", actionHint: "on a hanger = 挂在衣架上", frequency: "common" },
            ],
            casualVersion: "Totally, pressing's included with express. It'll be hanging in your closet by tonight.",
            formalityVariants: {
              casual: "Yeah, pressing's part of express. We'll have it in your closet by tonight.",
              standard: "Absolutely, pressing is indeed included with the express service. It will be returned, hanging, to your closet by this evening.",
              formal: "Certainly, pressing is fully encompassed within our express service. We anticipate returning the item, on a hanger, to your wardrobe prior to this evening.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect. Also, is there a self-service laundry room in the hotel?",
            textZh: "太好了。另外，酒店里有自助洗衣房吗？",
            casualVersion: "Sweet. Also, is there a self-serve laundry here?",
            commonMistake: {
              wrong: "Hotel have laundry room?",
              correct: "Is there a self-service laundry room in the hotel?",
              explanation: "缺少主语和助动词，英文疑问句需要完整结构。",
            },
            formalityVariants: {
              casual: "Cool. And, is there a self-serve laundry around?",
              standard: "Excellent. Additionally, does the hotel provide a self-service laundry facility?",
              formal: "Splendid. Furthermore, may I inquire if a self-service laundry facility is available on the premises?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, there's a coin-operated laundry room on the second floor, next to the ice machine. Washers are $3 per load and dryers are $2.",
            textZh: "有的，二楼有一个投币洗衣房，在制冰机旁边。洗衣机每次3美元，烘干机2美元。",
            keyPhrases: [
              { en: "coin-operated", zh: "投币式" },
              { en: "per load", zh: "每次/每筒" },
              { en: "washer", zh: "洗衣机" },
              { en: "dryer", zh: "烘干机" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, second floor by the ice machine. It's coin-op — three bucks to wash, two to dry.", textZh: "有，二楼制冰机旁边。投币的——洗3块，烘2块。", actionHint: "coin-op = coin-operated 投币式缩写，bucks = 美元", frequency: "common" },
              { textEn: "There is! It's just down the hall on the 2nd floor, next to the ice machine. Washers are $3 and dryers $2 per cycle.", textZh: "有的！二楼走廊尽头，制冰机旁边。洗衣机3美元、烘干机2美元一次。", actionHint: "per cycle = 每个周期/每次", frequency: "common" },
            ],
            casualVersion: "Yep, coin laundry's on the second floor, next to the ice machine. Washers are 3 bucks a load, dryers are 2.",
            culturalNote: "美国酒店的自助洗衣房通常是投币式的。",
            formalityVariants: {
              casual: "Yeah, coin laundry's up on the second floor, by the ice machine. Washers are $3, dryers $2.",
              standard: "Yes, there is a coin-operated laundry facility located on the second floor, adjacent to the ice machine. Washers are priced at $3 per load, and dryers at $2.",
              formal: "Indeed, a coin-operated laundry facility is situated on the second level of the premises, conveniently located beside the ice machine. The cost for washing machines is $3 per load, and for drying machines, it is $2.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 10. WiFi问题 ====================
  {
    id: "accommodation-wifi-issues",
    category: "accommodation",
    titleZh: "WiFi问题",
    titleEn: "WiFi Issues",
    description: "入住后遇到WiFi连接不上或速度慢的问题，向前台求助",
    otherRole: "前台",
    otherRoleIcon: "📶",
    flows: [
      {
        id: "wifi-troubleshoot",
        titleZh: "WiFi故障",
        titleEn: "WiFi Troubleshooting",
        description: "WiFi连不上或速度太慢，联系前台解决",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm having trouble connecting to the WiFi in my room. It keeps saying \"incorrect password.\"",
            textZh: "你好，我房间的WiFi连不上。一直显示「密码错误」。",
            casualVersion: "Hey, WiFi in my room's not working. Keeps saying 'password error'.",
            commonMistake: {
              wrong: "It keeps saying 'password wrong'.",
              correct: "It keeps saying 'password error'.",
              explanation: "“password error” 更地道，直接翻译的 “password wrong” 听起来不自然。",
            },
            formalityVariants: {
              casual: "Hey, WiFi in my room's not working. Keeps saying 'password error'.",
              standard: "Hi, I'm having trouble connecting to the WiFi in my room. It keeps saying 'password error'.",
              formal: "Good morning/afternoon, I am experiencing difficulty connecting to the wireless internet in my room. The system repeatedly indicates 'password error'.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'm sorry about that. Let me give you the correct network name and password. The network is \"HotelGuest\" — all one word, capital H and G. The password is \"welcome2026\" — all lowercase, no spaces.",
            textZh: "抱歉。我告诉您正确的网络名和密码。网络名是\"HotelGuest\"——一个词，H和G大写。密码是\"welcome2026\"——全小写，没有空格。",
            keyPhrases: [
              { en: "network name", zh: "网络名" },
              { en: "all one word", zh: "一个词连写" },
              { en: "all lowercase", zh: "全小写" },
              { en: "no spaces", zh: "没有空格" },
            ],
            alternativeExpressions: [
              { textEn: "No worries, happens all the time. The Wi-Fi name is \"HotelGuest\" — capital H, capital G, no space. Password's \"welcome2026\", all lower case.", textZh: "没事，常有的事。WiFi名是\"HotelGuest\"——大写H、大写G、不带空格。密码\"welcome2026\"，全小写。", actionHint: "happens all the time = 经常发生", frequency: "common" },
              { textEn: "Oh sorry about that! Let me give you the right info. Connect to \"HotelGuest\" — one word — and the password is \"welcome2026\" in all small letters.", textZh: "抱歉！我告诉你正确的。连\"HotelGuest\"——一个词——密码是\"welcome2026\"，全部小写字母。", actionHint: "small letters = lowercase 小写字母", frequency: "common" },
            ],
            casualVersion: "Oh, sorry 'bout that. Lemme get you the right network name and password. It's \"\".",
            commonMistake: {
              wrong: "I'm sorry about that. I give you the correct network name and password.",
              correct: "I'm sorry about that. Let me give you the correct network name and password.",
              explanation: "“Let me” 是主动提出帮忙，更自然礼貌，避免直译的生硬感。",
            },
            formalityVariants: {
              casual: "Oh, sorry 'bout that. Lemme get you the right network name and password. It's \"\".",
              standard: "I'm sorry about that. Let me give you the correct network name and password. The network is \"\".",
              formal: "My apologies for the inconvenience. Allow me to provide you with the accurate network name and password. The network is \"\".",
            },
          },
          {
            speaker: "you",
            textEn: "Okay, let me try again... It connected now, but the speed is really slow. I can barely load a webpage.",
            textZh: "好，我再试试……连上了，但速度特别慢。网页都快打不开。",
            casualVersion: "Alright, let me try... Okay, it's connected, but man, it's super slow. Can barely get a page to load.",
            commonMistake: {
              wrong: "It connected now, but the speed is very slow. Webpage cannot open.",
              correct: "It connected now, but the speed is really slow. I can barely load a webpage.",
              explanation: "“can barely load” 比 “cannot open” 更地道，表达艰难、几乎打不开的意思。",
            },
            formalityVariants: {
              casual: "Alright, let me try... Okay, it's connected, but man, it's super slow. Can barely get a page to load.",
              standard: "Okay, let me try again... It connected now, but the speed is really slow. I can barely load a webpage.",
              formal: "Understood, I shall attempt to reconnect... It appears to have connected, however, the internet speed is exceptionally slow; I am having significant difficulty loading a webpage.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I understand that's frustrating. Try forgetting the network and reconnecting. If it's still slow, we have a premium WiFi option for $5 per day with faster speeds.",
            textZh: "理解您的困扰。试试忘记网络然后重新连接。如果还是慢，我们有高级WiFi选项，每天5美元，速度更快。",
            keyPhrases: [
              { en: "forgetting the network", zh: "忘记网络" },
              { en: "reconnecting", zh: "重新连接" },
              { en: "premium WiFi", zh: "高级WiFi" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah that can be annoying. Try deleting the network and reconnecting from scratch. If it's still laggy, we sell a premium Wi-Fi upgrade for 5 bucks a day.", textZh: "确实挺烦的。试试删掉网络重新连。还是卡的话，我们有高级WiFi升级，5块一天。", actionHint: "laggy = 卡顿的，from scratch = 从头开始", frequency: "common" },
              { textEn: "I hear ya, that's no fun. Have you tried disconnecting and reconnecting? We also have a faster paid option — $5 per day.", textZh: "理解，确实不好用。试过断开重连吗？我们也有更快的付费选项——每天5美元。", actionHint: "I hear ya = 我理解你，no fun = 不好受", frequency: "common" },
            ],
            casualVersion: "Yeah, totally get that's annoying. Try forgetting the network and re-connecting. If it's still slow, we've got a premium WiFi for 5 bucks a day, way faster.",
            commonMistake: {
              wrong: "Try to forget the network and connect again.",
              correct: "Try forgetting the network and reconnecting.",
              explanation: "“forgetting the network” 是电子设备设置中的专业术语，直接使用即可。",
            },
            formalityVariants: {
              casual: "Yeah, totally get that's annoying. Try forgetting the network and re-connecting. If it's still slow, we've got a premium WiFi for 5 bucks a day, way faster.",
              standard: "I understand that's frustrating. Try forgetting the network and reconnecting. If it's still slow, we have a premium WiFi option for $5 per day with faster speeds.",
              formal: "I certainly empathize with your frustration. I recommend attempting to forget the network on your device and then reconnecting. Should the issue persist, we offer a premium wireless internet service for $5 daily, which provides significantly higher speeds.",
            },
          },
          {
            speaker: "you",
            textEn: "I need it for a video call tomorrow. Will the premium WiFi be fast enough for that?",
            textZh: "我明天要开视频会议。高级WiFi够快吗？",
            culturalNote:
              "如果需要稳定网络开会，也可以问酒店是否有商务中心（business center）提供有线网络。",
            casualVersion: "Gotta do a video call tomorrow. Will that premium WiFi be fast enough?",
            commonMistake: {
              wrong: "I need it for video meeting tomorrow. Is the premium WiFi fast enough to do that?",
              correct: "I need it for a video call tomorrow. Will the premium WiFi be fast enough for that?",
              explanation: "“video call” 比 “video meeting” 更常用， “fast enough for that” 更自然地表达是否足够快。",
            },
            formalityVariants: {
              casual: "Gotta do a video call tomorrow. Will that premium WiFi be fast enough?",
              standard: "I need it for a video call tomorrow. Will the premium WiFi be fast enough for that?",
              formal: "I have a video conference scheduled for tomorrow. Would the premium wireless internet service be sufficiently robust to support that activity?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, the premium tier should handle video calls without any issues. You can also use our business center on the ground floor — it has wired internet connections.",
            textZh: "可以的，高级WiFi开视频会议没问题。您也可以使用一楼的商务中心——那里有有线网络接口。",
            keyPhrases: [
              { en: "premium tier", zh: "高级套餐" },
              { en: "business center", zh: "商务中心" },
              { en: "wired internet", zh: "有线网络" },
            ],
            alternativeExpressions: [
              { textEn: "Oh yeah, the premium Wi-Fi can totally handle video calls. Or if you want rock-solid internet, our business center downstairs has ethernet.", textZh: "当然，高级WiFi完全能应付视频会议。或者你要特别稳的网络，楼下商务中心有网线。", actionHint: "rock-solid = 非常稳定的，ethernet = 以太网/网线", frequency: "common" },
              { textEn: "For sure, the upgraded Wi-Fi is plenty fast for video calls. There's also a business lounge on the first floor with hardwired connections if you prefer.", textZh: "当然可以，升级WiFi速度够做视频通话。一楼还有商务休息室提供有线连接。", actionHint: "plenty fast = 足够快，hardwired = 有线的", frequency: "common" },
            ],
            casualVersion: "Yeah, the premium tier should totally handle video calls, no problem. You could also just use our business center downstairs, it's got wired internet.",
            commonMistake: {
              wrong: "Yes, the premium tier can support video calls.",
              correct: "Yes, the premium tier should handle video calls without any issues.",
              explanation: "“handle… without any issues” 是更地道的表达，表示能顺利处理，没有问题。",
            },
            formalityVariants: {
              casual: "Yeah, the premium tier should totally handle video calls, no problem. You could also just use our business center downstairs, it's got wired internet.",
              standard: "Yes, the premium tier should handle video calls without any issues. You can also use our business center on the ground floor — it has wired internet connections.",
              formal: "Certainly, the premium tier is designed to accommodate video calls seamlessly. Additionally, you are welcome to utilize our business center located on the ground floor, which provides wired internet connections for enhanced stability.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 11. 空调/暖气问题 ====================
  {
    id: "accommodation-ac-heating",
    category: "accommodation",
    titleZh: "空调/暖气问题",
    titleEn: "AC/Heating Issues",
    description: "房间空调不制冷、暖气不热或温度调节问题，联系前台解决",
    otherRole: "前台",
    otherRoleIcon: "🌡️",
    flows: [
      {
        id: "ac-not-working",
        titleZh: "空调故障",
        titleEn: "AC Not Working",
        description: "空调不工作或不制冷，向前台求助",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, the air conditioning in my room isn't working. I've tried adjusting the thermostat but it's just blowing warm air.",
            textZh: "你好，我房间的空调不工作了。我试着调了温控器，但它只出热风。",
            culturalNote:
              "thermostat（温控器）在北美酒店很常见，是墙上的控制面板。有些需要调到\"cool\"模式才会制冷。",
            casualVersion: "Hey, my room's AC isn't working. I tried the thermostat, but it's just blowing warm air.",
            commonMistake: {
              wrong: "My room air conditioning not work.",
              correct: "My room's AC isn't working.",
              explanation: "中式英语常省略 be 动词和冠词，且 air conditioning 口语常用 AC。",
            },
            formalityVariants: {
              casual: "Hey, my room's AC is broken. Tried the thermostat, still warm air.",
              standard: "Hi, the air conditioning in my room isn't working. I've tried adjusting the thermostat but it's just blowing warm air.",
              formal: "Good evening/afternoon, I regret to inform you that the air conditioning unit in my room appears to be malfunctioning. Despite my attempts to adjust the thermostat, it is only circulating warm air.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'm sorry about that. Have you tried switching the mode to \"cool\"? Sometimes guests accidentally leave it on \"fan only.\"",
            textZh: "抱歉。您试过把模式切换到\"制冷\"吗？有时候客人不小心设成了\"仅送风\"模式。",
            keyPhrases: [
              { en: "switching the mode", zh: "切换模式" },
              { en: "cool", zh: "制冷" },
              { en: "fan only", zh: "仅送风" },
            ],
            alternativeExpressions: [
              { textEn: "Oh no! Did you check if it's set to cool? A lot of guests accidentally leave it on fan mode.", textZh: "哦不！你看了是不是调到制冷模式了？很多客人不小心设成了风扇模式。", actionHint: "fan mode = 送风模式", frequency: "common" },
              { textEn: "Sorry about that. Quick question — is it on the \"cool\" setting? Sometimes it gets switched to just fan by mistake.", textZh: "抱歉。问一下——调到\"制冷\"了吗？有时候会不小心被切到纯送风。", actionHint: "by mistake = 不小心", frequency: "common" },
            ],
            casualVersion: "Oh, sorry. Did you try switching modes to...?",
            formalityVariants: {
              casual: "Oh, shoot. Did you try changing the mode to...?",
              standard: "I'm sorry about that. Have you tried switching the mode to...",
              formal: "My apologies for the inconvenience. May I inquire if you have attempted to switch the operating mode to...",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I've set it to cool and turned the temperature all the way down, but it's still warm air.",
            textZh: "是的，我已经设了制冷模式，温度也调到最低了，但还是热风。",
            casualVersion: "Yeah, I set it to cool and turned the temp all the way down, but it's still blowing warm air.",
            commonMistake: {
              wrong: "I set cool mode and lowest temperature, but still warm.",
              correct: "I've set it to cool and turned the temperature all the way down, but it's still warm air.",
              explanation: "中式英语常省略动词宾语、冠词和关键名词（如 air），导致表达不自然。",
            },
            formalityVariants: {
              casual: "Yeah, set it to cool, temp's all the way down, still warm air.",
              standard: "Yes, I've set it to cool and turned the temperature all the way down, but it's still warm air.",
              formal: "Affirmative, I have indeed set the unit to its cooling function and lowered the temperature to its minimum setting; however, it continues to emit only warm air.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "It sounds like a mechanical issue. I'll send someone from maintenance right away. In the meantime, I can bring you a portable fan if you'd like.",
            textZh: "听起来是机械故障。我马上派维修人员过去。同时如果您需要的话，我可以送一台便携风扇过去。",
            keyPhrases: [
              { en: "mechanical issue", zh: "机械故障" },
              { en: "send someone from maintenance", zh: "派维修人员" },
              { en: "portable fan", zh: "便携风扇" },
            ],
            alternativeExpressions: [
              { textEn: "Hmm, sounds like there's something wrong with the unit itself. I'll get maintenance up there ASAP. Want me to bring up a fan in the meantime?", textZh: "嗯，听起来是机器本身有问题。我尽快让维修过去。同时要不要我送个风扇上去？", actionHint: "unit = 机器/设备，ASAP = as soon as possible 尽快", frequency: "common" },
              { textEn: "That doesn't sound right — probably a hardware problem. Let me page maintenance. I can also send up a standing fan while you wait.", textZh: "这不对劲——可能是硬件问题。我呼叫维修。等的时候我可以送个立式风扇上去。", actionHint: "page = 呼叫/传呼，standing fan = 立式风扇", frequency: "occasional" },
            ],
            casualVersion: "Sounds like a mechanical issue. I'll send maintenance right over. I can also bring a fan if you want.",
            formalityVariants: {
              casual: "Sounds like a mech problem. I'll get maintenance on it pronto. Can bring a fan if you want.",
              standard: "It sounds like a mechanical issue. I'll send someone from maintenance right away. In the meantime, I can bring you a portable fan if you'd like.",
              formal: "This certainly suggests a mechanical malfunction. I shall dispatch a member of our maintenance team to your room immediately. Concurrently, would you appreciate the provision of a portable fan?",
            },
          },
          {
            speaker: "you",
            textEn: "A fan would be great, thank you. How long until the maintenance person gets here?",
            textZh: "有风扇就太好了，谢谢。维修人员多久能到？",
            casualVersion: "A fan'd be great, thanks. How long till maintenance gets here?",
            commonMistake: {
              wrong: "Fan is great. When maintenance come?",
              correct: "A fan would be great, thank you. How long until the maintenance person gets here?",
              explanation: "中式英语常省略情态动词、be 动词和介词，导致句子不完整且不自然。",
            },
            formalityVariants: {
              casual: "Fan's good, thanks. How soon can they get here?",
              standard: "A fan would be great, thank you. How long until the maintenance person gets here?",
              formal: "That would be most appreciated, thank you. Could you please provide an estimated time of arrival for the maintenance technician?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Within 15 to 20 minutes. If they can't fix it tonight, we'll move you to another room. Would that be okay?",
            textZh: "15到20分钟之内。如果今晚修不好，我们会给您换房间。可以吗？",
            keyPhrases: [
              { en: "within 15 to 20 minutes", zh: "15到20分钟之内" },
              { en: "move you to another room", zh: "给您换房间" },
            ],
            alternativeExpressions: [
              { textEn: "They should be there in 15, 20 minutes. Worst case, if they can't get it going tonight, we'll switch you to a different room. Sound okay?", textZh: "他们15到20分钟到。最坏的情况，今晚修不好我们给你换房间。行吗？", actionHint: "get it going = 让它运转起来，worst case = 最坏的情况", frequency: "common" },
              { textEn: "Give them about 15 to 20 minutes. If it's not fixable tonight, we'll absolutely get you into another room. Is that alright?", textZh: "大概等15到20分钟。如果今晚修不好，我们肯定会给您换房间。可以吗？", actionHint: "fixable = 可以修好的", frequency: "common" },
            ],
            casualVersion: "About 15-20 minutes. If they can't fix it tonight, we'll just move ya to another room. Cool with that?",
            formalityVariants: {
              casual: "Like 15-20 min. If they can't fix it, we'll swap your room. Sound good?",
              standard: "Within 15 to 20 minutes. If they can't fix it tonight, we'll move you to another room. Would that be okay?",
              formal: "They should arrive within 15 to 20 minutes. In the event that a repair cannot be completed this evening, we would be pleased to relocate you to an alternative room. Would that arrangement be satisfactory?",
            },
          },
          {
            speaker: "you",
            textEn: "That would be fine. I'd rather have a working AC than stay in this room.",
            textZh: "可以的。我宁可换房间也不想待在没空调的房间里。",
            casualVersion: "Yeah, that's fine. I'd rather have working AC than stay here.",
            commonMistake: {
              wrong: "OK. I prefer working AC not this room.",
              correct: "That would be fine. I'd rather have a working AC than stay in this room.",
              explanation: "“I'd rather... than...” 是常用句型，直接翻译中文意思容易不自然。",
            },
            formalityVariants: {
              casual: "Fine by me. Just want working AC, not this room.",
              standard: "That would be fine. I'd rather have a working AC than stay in this room.",
              formal: "That arrangement would be perfectly acceptable. My preference would certainly be for a room with functional air conditioning, rather than remaining in the current accommodation.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Completely understandable. I'll have a room ready just in case. We're also happy to offer a discount on tonight's stay for the inconvenience.",
            textZh: "完全理解。我会准备好一个房间以防万一。因为给您带来不便，今晚的房费我们也会打折。",
            keyPhrases: [
              { en: "just in case", zh: "以防万一" },
              { en: "discount on tonight's stay", zh: "今晚的房费打折" },
              { en: "inconvenience", zh: "不便" },
            ],
            alternativeExpressions: [
              { textEn: "Totally get it. I'll prep a backup room just in case. And we'll knock something off tonight's rate for the hassle.", textZh: "完全理解。我准备好备用房间以防万一。今晚房价也会给您减一些，因为这个麻烦。", actionHint: "knock something off = 减免一些，hassle = 麻烦", frequency: "common" },
              { textEn: "Of course, makes total sense. We'll have another room standing by. And for the trouble, we're happy to give you a discount tonight.", textZh: "当然，完全理解。我们会准备好另一个房间。因为这个麻烦，今晚我们很乐意给您打折。", actionHint: "standing by = 准备好/待命", frequency: "common" },
            ],
            casualVersion: "Totally understandable. I'll get a room ready just in case. And we'll give ya a discount for tonight for the hassle.",
            culturalNote: "美国酒店在服务出问题时常主动提供补偿，例如折扣或免费服务，顾客无需主动索要。",
            formalityVariants: {
              casual: "Makes total sense. I'll prep a backup room. Plus, we'll discount your stay tonight for the trouble.",
              standard: "Completely understandable. I'll have a room ready just in case. We're also happy to offer a discount on tonight's stay for the inconvenience.",
              formal: "That is entirely comprehensible. I will ensure an alternative room is prepared as a contingency. Furthermore, we would be pleased to extend a complimentary discount on this evening's accommodation as recompense for the inconvenience.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 12. 钥匙/门卡问题 ====================
  {
    id: "accommodation-key-card",
    category: "accommodation",
    titleZh: "钥匙/门卡问题",
    titleEn: "Key/Card Problems",
    description: "门卡失效、钥匙丢失或锁在房间外面时向前台求助",
    otherRole: "前台",
    otherRoleIcon: "🗝️",
    flows: [
      {
        id: "key-issue",
        titleZh: "门卡/钥匙问题",
        titleEn: "Key Card Issue",
        description: "门卡打不开门或钥匙丢失",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, my key card isn't working. I've tried it several times but the light stays red.",
            textZh: "你好，我的门卡不好使了。试了好几次，灯一直是红的。",
            culturalNote:
              "酒店门卡如果靠近手机放（和手机放同一个口袋），磁条容易消磁。这是最常见的门卡失效原因。",
            casualVersion: "Hey, my key card's not workin'. Tried it a bunch, but the light just stays red.",
            commonMistake: {
              wrong: "My key card is broken. The light is red.",
              correct: "My key card isn't working. The light stays red.",
              explanation: "Key card is broken 听起来像彻底坏了。isn't working 更自然。light stays red 强调持续性。",
            },
            formalityVariants: {
              casual: "Hey, my key card's dead. Tried it a bunch, light's still red.",
              standard: "Hi, my key card isn't working. I've tried it several times, but the light remains red.",
              formal: "Excuse me, I'm encountering an issue with my room key card. Despite multiple attempts, the indicator light consistently displays red.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "That happens sometimes — the card may have been demagnetized. Can I see your ID so I can verify your room and issue a new card?",
            textZh: "这种情况有时会发生——卡可能消磁了。可以看一下您的证件吗？我需要核实房间信息然后重新发卡。",
            keyPhrases: [
              { en: "demagnetized", zh: "消磁" },
              { en: "verify your room", zh: "核实房间信息" },
              { en: "issue a new card", zh: "重新发卡" },
            ],
            alternativeExpressions: [
              { textEn: "Oh, that's probably just a demagnetized card. It happens a lot. Let me see some ID and I'll make you a new one real quick.", textZh: "哦，可能就是消磁了。经常发生。给我看下证件，我马上给您做张新的。", actionHint: "make you a new one = 给你做张新的", frequency: "common" },
              { textEn: "Sounds like the magnetic strip went bad. No worries — can I just confirm your room number and see your ID? I'll get you a fresh card.", textZh: "听起来磁条坏了。没关系——确认一下房间号和证件？我给您换张新卡。", actionHint: "magnetic strip went bad = 磁条失效了，fresh card = 新卡", frequency: "common" },
            ],
            casualVersion: "Yeah, that happens sometimes. Card might be demagnetized. Can I see your ID to check your room and get you a new one?",
            commonMistake: {
              wrong: "Can I see your ID card?",
              correct: "Can I see your ID?",
              explanation: "ID card 是中式英文，美国人通常直接说 ID。",
            },
            formalityVariants: {
              casual: "Oh, that happens. Card's probably demagnetized. Need your ID to confirm your room and get you a fresh one.",
              standard: "That sometimes occurs—the card may have become demagnetized. May I please see your identification to verify your room details and issue a replacement card?",
              formal: "This is not uncommon; the key card may have been demagnetized. Could I please request to see your identification for verification of your room assignment, so that I may issue a new card?",
            },
          },
          {
            speaker: "you",
            textEn: "Here's my passport. I'm in Room 712.",
            textZh: "这是我的护照。我住712房间。",
            casualVersion: "Here's my passport. I'm in 712.",
            commonMistake: {
              wrong: "I live in Room 712.",
              correct: "I'm in Room 712.",
              explanation: "live in 表示长期居住，酒店用 I'm in 更自然。",
            },
            formalityVariants: {
              casual: "Passport's here. I'm in 712.",
              standard: "Here is my passport. My room number is 712.",
              formal: "Certainly, here is my passport for your review. My room is number 712.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Thank you, Mr. Zhang. Here are two new key cards. Try to keep them away from your phone — that's usually what causes them to stop working.",
            textZh: "谢谢，张先生。这是两张新门卡。尽量不要和手机放在一起——通常就是手机导致的消磁。",
            keyPhrases: [
              { en: "keep them away from your phone", zh: "不要和手机放在一起" },
              { en: "stop working", zh: "失效" },
            ],
            alternativeExpressions: [
              { textEn: "All set, Mr. Zhang! Here's two new ones. Pro tip — don't keep them next to your phone, that's usually what kills them.", textZh: "搞定了，张先生！给您两张新的。小建议——别放手机旁边，通常就是手机搞坏的。", actionHint: "pro tip = 小建议/专业提示，kills them = 搞坏它们", frequency: "common" },
              { textEn: "Here you go — two fresh cards. Just a heads up, phones tend to mess with the magnetic strip, so try to keep them separate.", textZh: "给您——两张新卡。提醒一下，手机会干扰磁条，尽量分开放。", actionHint: "heads up = 提醒，mess with = 干扰/搞乱", frequency: "common" },
            ],
            casualVersion: "Thanks, Mr. Zhang. Here's two new key cards. Try keepin' 'em away from your phone — that's usually why they quit workin'.",
            commonMistake: {
              wrong: "Keep it far from your phone.",
              correct: "Keep it away from your phone.",
              explanation: "away from your phone 是更地道的表达，而不是 far from。",
            },
            formalityVariants: {
              casual: "Thanks, Mr. Zhang. Got two new cards here. Just keep 'em off your phone, that's usually the problem.",
              standard: "Thank you, Mr. Zhang. Here are two new key cards. Please try to keep them separate from your mobile phone, as that is frequently the cause of them deactivating.",
              formal: "Thank you, Mr. Zhang. I have prepared two replacement key cards for you. I recommend keeping them distanced from your mobile phone, as electromagnetic interference is a common reason for their malfunction.",
            },
          },
          {
            speaker: "you",
            textEn: "Oh, that explains it — I had it in the same pocket as my phone. Thank you for the tip.",
            textZh: "哦，难怪——我和手机放在同一个口袋里了。谢谢提醒。",
            casualVersion: "Oh, that makes sense. Had it in the same pocket as my phone. Thanks for the tip.",
            commonMistake: {
              wrong: "Thank you for your reminder.",
              correct: "Thank you for the tip.",
              explanation: "tip 指实用建议，reminder 更多指提醒忘记的事情。这里用 tip 更合适。",
            },
            formalityVariants: {
              casual: "Ah, that's why. It was with my phone. Thanks for the heads-up.",
              standard: "Oh, that clarifies the situation. I had them in the same pocket as my phone. Thank you for the advice.",
              formal: "Indeed, that fully elucidates the situation; I had inadvertently placed it in the same pocket as my mobile device. I appreciate you sharing that valuable information.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "No problem! If it happens again, just come down and we'll replace it right away. There's no charge for replacement cards.",
            textZh: "没关系！如果再出现这种情况，直接下来找我们就好，马上给您换。换卡不收费的。",
            keyPhrases: [
              { en: "replace it right away", zh: "马上更换" },
              { en: "no charge", zh: "不收费" },
            ],
            alternativeExpressions: [
              { textEn: "Anytime! If it acts up again, just pop down and we'll swap it out. It's free, no worries.", textZh: "随时来！再出问题就下来找我们换。免费的，不用担心。", actionHint: "acts up = 出问题/不好使，pop down = 下来一趟，swap it out = 换掉", frequency: "common" },
              { textEn: "Don't hesitate to come back if it happens again. Replacements are always free — takes like 30 seconds.", textZh: "再出问题别客气直接来。换卡一直是免费的——30秒搞定。", actionHint: "don't hesitate = 别犹豫/别客气", frequency: "common" },
            ],
            casualVersion: "No prob! Happens again, just come down. We'll swap it out right then. No charge for new cards.",
            commonMistake: {
              wrong: "It does not matter! We will change it immediately.",
              correct: "No problem! We'll replace it right away.",
              explanation: "No problem 是对感谢的自然回应。replace 更准确，right away 更口语化。",
            },
            formalityVariants: {
              casual: "No worries! Happens again, just pop down. We'll get you a new one, no charge.",
              standard: "You're welcome! Should this occur again, please simply return to the front desk, and we will replace it for you immediately. There is no fee for replacement cards.",
              formal: "It's entirely my pleasure. Should you encounter this issue once more, kindly return to the reception, and we will promptly provide a replacement. There is no additional charge for replacement key cards.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 13. 停车安排 ====================
  {
    id: "accommodation-parking",
    category: "accommodation",
    titleZh: "停车安排",
    titleEn: "Parking Arrangement",
    description: "入住时询问停车方式、费用和位置安排",
    otherRole: "前台/泊车员",
    otherRoleIcon: "🅿️",
    flows: [
      {
        id: "parking-arrangement",
        titleZh: "停车安排",
        titleEn: "Parking Arrangement",
        description: "入住时了解停车选项和费用",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm checking in and I have a rental car. Where should I park?",
            textZh: "你好，我来办入住，有一辆租的车。应该停哪里？",
            casualVersion: "Hi, checking in. Got a rental car. Where do I park?",
            commonMistake: {
              wrong: "Where can I park?",
              correct: "Where should I park?",
              explanation: "Asking for instructions/direction, so 'should' is more natural than 'can' (possibility).",
            },
            formalityVariants: {
              casual: "Hey, checking in. Got a rental car. Where do I park?",
              standard: "Hi, I'm checking in and I have a rental car. Where should I park?",
              formal: "Good evening/morning, I'm checking in and require information regarding parking for my rental vehicle. Could you please advise on the appropriate parking location?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "We have two options: self-parking in our underground garage for $25 per night, or valet parking for $40 per night.",
            textZh: "我们有两个选项：地下车库自助停车每晚25美元，或者代客泊车每晚40美元。",
            keyPhrases: [
              { en: "self-parking", zh: "自助停车" },
              { en: "underground garage", zh: "地下车库" },
              { en: "valet parking", zh: "代客泊车" },
            ],
            alternativeExpressions: [
              { textEn: "So you can either park yourself in our garage downstairs for 25 a night, or do valet for 40 — they'll park it for you.", textZh: "你可以自己停地下车库25一晚，或者选代客泊车40——他们帮你停。", actionHint: "park yourself = 自己停车", frequency: "common" },
              { textEn: "We've got an underground lot — that's $25 a night if you park it yourself. Or if you want the valet to handle it, that's $40.", textZh: "我们有地下停车场——自己停25一晚。如果要代客泊车就是40。", actionHint: "lot = parking lot 停车场", frequency: "common" },
            ],
            casualVersion: "Two options: self-park underground, twenty-five bucks a night. Or valet, forty.",
            formalityVariants: {
              casual: "Two ways to park: self-park underground for 25 bucks a night, or valet for 40.",
              standard: "We have two options: self-parking in our underground garage for $25 per night, or valet parking for $40 per night.",
              formal: "Certainly, we offer two distinct parking options: self-parking within our subterranean garage, priced at $25 per evening, or our full-service valet parking, available for $40 per evening.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take self-parking. How do I access the garage?",
            textZh: "我选自助停车。怎么进车库？",
            culturalNote:
              "valet parking（代客泊车）在美国酒店很常见，你把车钥匙给泊车员，他帮你停车。取车时通常要给$2-5小费。",
            casualVersion: "Self-parking for me. How do I get to the garage?",
            commonMistake: {
              wrong: "How to enter the garage?",
              correct: "How do I access the garage?",
              explanation: "中文常直接翻译'怎么进入', 但英文'How do I access/get to'更自然。",
            },
            formalityVariants: {
              casual: "I'll go with self-park. How do I get in?",
              standard: "I'll take self-parking. How do I access the garage?",
              formal: "I'll opt for the self-parking accommodation. Kindly inform me of the procedure for accessing the garage facility.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'll give you a parking pass. Just place it on your dashboard. The garage entrance is around the back of the building on Oak Street. Any spot on Level 2 or 3 is fine.",
            textZh: "我给您一张停车证。放在仪表盘上就行。车库入口在大楼后面Oak Street那一侧。2层或3层随便停。",
            keyPhrases: [
              { en: "parking pass", zh: "停车证" },
              { en: "dashboard", zh: "仪表盘" },
              { en: "garage entrance", zh: "车库入口" },
            ],
            alternativeExpressions: [
              { textEn: "Here's a parking permit — just stick it on your dash. The garage is around back on Oak Street. Park anywhere on levels 2 or 3.", textZh: "给你停车许可——贴在挡风玻璃下面就行。车库在后面Oak Street那边。2层或3层随便停。", actionHint: "stick it on your dash = 放在仪表盘上，permit = 许可证", frequency: "common" },
              { textEn: "Take this parking tag and put it where it's visible on the dashboard. Drive around to Oak Street and you'll see the garage entrance. Levels 2 and 3 are all guest parking.", textZh: "拿这个停车牌放在仪表盘上看得见的地方。开到Oak Street那边就能看到车库入口。2层和3层都是客人停车区。", actionHint: "parking tag = 停车牌", frequency: "common" },
            ],
            casualVersion: "Here's your pass. Stick it on the dash. Garage entrance is 'round back, on Oak Street. Levels two or three, any spot's good.",
            commonMistake: {
              wrong: "I will give you a parking certificate.",
              correct: "I'll give you a parking pass.",
              explanation: "'parking pass'或'parking permit'是常用说法，'certificate'不用于此。",
            },
            formalityVariants: {
              casual: "Here's the pass, dash it. Garage entrance? Back of the building, on Oak. Any spot on 2 or 3 works.",
              standard: "I'll give you a parking pass. Just place it on your dashboard. The garage entrance is around the back of the building on Oak Street. Any spot on Level 2 or 3 is fine.",
              formal: "I shall provide you with a parking pass. Please ensure it is displayed prominently on your vehicle's dashboard. The designated garage entrance is located at the rear of the building, accessible via Oak Street. You may utilize any available space on levels two or three.",
            },
          },
          {
            speaker: "you",
            textEn: "Is my car safe there overnight? Any security cameras?",
            textZh: "车停那里过夜安全吗？有监控摄像头吗？",
            casualVersion: "Car safe overnight? Got cameras?",
            commonMistake: {
              wrong: "My car is safe there overnight?",
              correct: "Is my car safe there overnight?",
              explanation: "直接陈述句不能作疑问句。英文疑问句需要倒装或使用助动词。",
            },
            formalityVariants: {
              casual: "Is my car good overnight? Cameras?",
              standard: "Is my car safe there overnight? Any security cameras?",
              formal: "May I inquire about the security measures for my vehicle overnight? Specifically, are there surveillance cameras installed?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, the garage is gated and has 24-hour security cameras. Just make sure not to leave any valuables visible in the car.",
            textZh: "安全的，车库有门禁，24小时监控。不过注意别把贵重物品留在车里显眼的位置。",
            keyPhrases: [
              { en: "gated", zh: "有门禁的" },
              { en: "security cameras", zh: "监控摄像头" },
              { en: "valuables visible", zh: "贵重物品放在显眼位置" },
            ],
            alternativeExpressions: [
              { textEn: "Totally safe — it's a secured garage with cameras everywhere. Just don't leave anything valuable out in the open.", textZh: "非常安全——安保车库到处都有摄像头。就是别把值钱的东西放在明面上。", actionHint: "out in the open = 在明面上/显眼处", frequency: "common" },
              { textEn: "Yeah, it's very secure — gated entry and CCTV running 24/7. The usual advice applies though: keep valuables out of sight.", textZh: "很安全——门禁加24小时监控。不过老话，贵重物品别放在看得到的地方。", actionHint: "CCTV = 监控摄像，out of sight = 看不到的地方", frequency: "common" },
            ],
            casualVersion: "Yeah, it's gated, 24/7 cameras. Just don't leave anything valuable out in the open in the car.",
            culturalNote: "美国酒店通常对车内物品失窃不负责，即使有监控。",
            commonMistake: {
              wrong: "Don't leave visible valuable things in the car.",
              correct: "Just make sure not to leave any valuables visible in the car.",
              explanation: "'valuables visible'是更地道的表达，指“可见的贵重物品”。",
            },
            formalityVariants: {
              casual: "Yep, gated, cameras all day. Just don't leave visible stuff in the car.",
              standard: "Yes, the garage is gated and has 24-hour security cameras. Just make sure not to leave any valuables visible in the car.",
              formal: "Indeed, the garage is secured with gated access and equipped with 24-hour surveillance cameras. However, we strongly advise against leaving any valuable items visibly exposed within your vehicle.",
            },
          },
          {
            speaker: "you",
            textEn: "Good to know. Can I come and go as I please, or is there a curfew for the garage?",
            textZh: "那就好。我可以随时进出吗，还是车库有时间限制？",
            casualVersion: "Good to know. Can I come and go whenever, or is there a garage curfew?",
            commonMistake: {
              wrong: "Can I come and go freely?",
              correct: "Can I come and go as I please?",
              explanation: "'as I please'是更地道且常用的口语表达，指“随心所欲，按我意愿”。",
            },
            formalityVariants: {
              casual: "Okay, cool. Can I get in and out whenever, or is there a closing time?",
              standard: "Good to know. Can I come and go as I please, or is there a curfew for the garage?",
              formal: "That is reassuring. May I inquire if there are any restrictions on access times for the garage, or if continuous ingress and egress are permitted?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "It's accessible 24/7. Your parking pass will open the gate anytime. Just drive up to the sensor and it'll open automatically.",
            textZh: "24小时都可以进出。停车证随时可以开门。开到感应器前面，门会自动打开。",
            keyPhrases: [
              { en: "accessible 24/7", zh: "24小时可进出" },
              { en: "sensor", zh: "感应器" },
              { en: "open automatically", zh: "自动打开" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, it's open around the clock. Just drive up to the gate with your pass and it'll open on its own.", textZh: "是的，全天开放。拿着停车证开到大门前，门会自动开。", actionHint: "around the clock = 24小时，on its own = 自动", frequency: "common" },
              { textEn: "You can come and go whenever you want — no time restrictions. The gate has a reader, just hold up your pass and you're in.", textZh: "随时进出——没有时间限制。门上有感应器，举起停车证就能进。", actionHint: "reader = 读卡器/感应器，hold up = 举起", frequency: "common" },
            ],
            casualVersion: "It's 24/7. Your pass opens the gate anytime. Just pull up to the sensor, it'll open itself.",
            commonMistake: {
              wrong: "It's accessible 24 hours 7 days.",
              correct: "It's accessible 24/7.",
              explanation: "'24/7'是英文中表示'24 hours a day, 7 days a week'的常用缩写。",
            },
            formalityVariants: {
              casual: "Yeah, it's open all the time. Pass opens the gate. Just drive to the sensor, it pops open.",
              standard: "It's accessible 24/7. Your parking pass will open the gate anytime. Just drive up to the sensor and it'll open automatically.",
              formal: "The facility operates on a 24-hour, seven-day-a-week basis. Your provided parking pass grants unrestricted access to the gate at any hour. Simply approach the sensor, and the gate will activate and open automatically.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 14. 早餐服务 ====================
  {
    id: "accommodation-breakfast",
    category: "accommodation",
    titleZh: "早餐服务",
    titleEn: "Breakfast Service",
    description: "了解酒店早餐的时间、地点和用餐方式",
    otherRole: "餐厅服务员",
    otherRoleIcon: "🍳",
    flows: [
      {
        id: "breakfast-inquiry",
        titleZh: "早餐咨询",
        titleEn: "Breakfast Inquiry",
        description: "询问早餐时间、种类和安排",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Good morning! Is this where breakfast is served?",
            textZh: "早上好！早餐是在这里吗？",
            casualVersion: "Morning! Is breakfast here?",
            culturalNote: "美国办理入住时常会直接说明目的，不必过多寒暄",
            commonMistake: {
              wrong: "Is breakfast here?",
              correct: "Is this where breakfast is served?",
              explanation: "直接问“早餐在这里吗？”有点生硬，用'Is this where...'更自然。",
            },
            formalityVariants: {
              casual: "Morning! Is breakfast here?",
              standard: "Good morning! Is this where breakfast is served?",
              formal: "Good morning. Could you please confirm if this is the designated area for breakfast service?",
            },
          },
          {
            speaker: "them",
            role: "餐厅服务员",
            textEn: "Good morning! Yes, welcome to the breakfast area. May I see your room key, please? Breakfast is included for hotel guests.",
            textZh: "早上好！是的，欢迎来到早餐区。可以看一下您的房卡吗？酒店住客早餐是含在房费里的。",
            keyPhrases: [
              { en: "room key", zh: "房卡" },
              { en: "breakfast is included", zh: "早餐包含在内" },
            ],
            alternativeExpressions: [
              { textEn: "Morning! Yep, this is it. Can I see your room card? Breakfast's on the house for guests.", textZh: "早上好！是的，就是这。看下房卡？住客早餐免费。", actionHint: "on the house = 免费的（店家请客）", frequency: "common" },
              { textEn: "Good morning, welcome! You're in the right place. Just need to see your key — brekkie's included with your stay.", textZh: "早上好，欢迎！没走错。看下房卡——住店包含早餐。", actionHint: "brekkie = breakfast 口语缩写", frequency: "occasional" },
            ],
            casualVersion: "Morning! Yep, this is it. Room key, please? Breakfast's included for guests.",
            formalityVariants: {
              casual: "Morning! Yep, this is the breakfast spot. Can I see your room key? Breakfast is included.",
              standard: "Good morning! Yes, welcome to the breakfast area. May I see your room key, please? Breakfast is included for hotel guests.",
              formal: "Good morning. Yes, welcome to our breakfast service area. May I kindly request to see your room key for verification? Breakfast is indeed complimentary for our hotel guests.",
            },
          },
          {
            speaker: "you",
            textEn: "Here you go. Is it buffet style, or do we order from a menu?",
            textZh: "给你。是自助餐还是点餐？",
            culturalNote:
              "大多数酒店提供continental breakfast（欧陆式早餐：面包、果汁、咖啡）或full buffet（全自助）。高端酒店可能提供à la carte（单点菜品）。",
            casualVersion: "Here. Buffet, or do we order?",
            commonMistake: {
              wrong: "It is buffet or order from menu?",
              correct: "Is it buffet style, or do we order from a menu?",
              explanation: "英语疑问句需要主谓语和助动词，直接翻译中文易省略。",
            },
            formalityVariants: {
              casual: "Here you go. Buffet, or order off a menu?",
              standard: "Here you go. Is it buffet style, or do we order from a menu?",
              formal: "Certainly, here is my room key. Could you clarify if breakfast is served buffet style or if we order à la carte from a menu?",
            },
          },
          {
            speaker: "them",
            role: "餐厅服务员",
            textEn: "It's a buffet. We have hot items like scrambled eggs, bacon, and sausages, plus a cereal and fruit station. Coffee and juice are self-serve over there.",
            textZh: "自助餐。热菜有炒蛋、培根和香肠，还有麦片和水果区。咖啡和果汁在那边自取。",
            keyPhrases: [
              { en: "buffet", zh: "自助餐" },
              { en: "hot items", zh: "热菜" },
              { en: "self-serve", zh: "自取" },
            ],
            alternativeExpressions: [
              { textEn: "It's all-you-can-eat buffet style! We've got eggs, bacon, sausage — all the hot stuff. Help yourself to coffee and juice over there.", textZh: "自助餐随便吃！有鸡蛋、培根、香肠——热的都有。咖啡和果汁在那边自取。", actionHint: "all-you-can-eat = 随便吃，help yourself = 自取", frequency: "common" },
              { textEn: "Buffet! Hot breakfast is over there — scrambled eggs, bacon, the works. Coffee and OJ are self-serve by the window.", textZh: "自助餐！热早餐在那边——炒蛋、培根什么都有。咖啡和橙汁在窗户旁自取。", actionHint: "the works = 什么都有/全套，OJ = orange juice 橙汁", frequency: "common" },
            ],
            casualVersion: "It's buffet. Got hot stuff like eggs, bacon, sausages, plus cereal and fruit. Coffee/juice are self-serve, over there.",
            formalityVariants: {
              casual: "It's buffet. We've got eggs, bacon, sausages, plus cereal and fruit. Coffee and juice are self-serve, over there.",
              standard: "It's a buffet. We have hot items like scrambled eggs, bacon, and sausages, plus a cereal and fruit station. Coffee and juice are self-serve over there.",
              formal: "It is indeed a buffet service. Our selection includes hot items such as scrambled eggs, bacon, and sausages, in addition to a dedicated station for cereals and fresh fruits. Coffee and juice beverages are available for self-service in that area.",
            },
          },
          {
            speaker: "you",
            textEn: "Great. Do you have any gluten-free options?",
            textZh: "好的。有无麸质的选项吗？",
            casualVersion: "Awesome. Any gluten-free stuff?",
            culturalNote: "“无麸质”饮食在西方很常见，中国游客可能不熟悉。",
            commonMistake: {
              wrong: "You have gluten-free options?",
              correct: "Do you have any gluten-free options?",
              explanation: "疑问句需要助动词'do'，不能直接用'you have...?'。",
            },
            formalityVariants: {
              casual: "Cool. Any gluten-free options?",
              standard: "Great. Do you have any gluten-free options?",
              formal: "Excellent. Might I inquire if you offer any gluten-free options within your breakfast selection?",
            },
          },
          {
            speaker: "them",
            role: "餐厅服务员",
            textEn: "Yes, we have gluten-free bread and muffins on the separate tray marked with a green label. The fruit and yogurt are also gluten-free, of course.",
            textZh: "有的，无麸质面包和松饼在标有绿色标签的单独托盘上。水果和酸奶当然也是无麸质的。",
            keyPhrases: [
              { en: "gluten-free", zh: "无麸质" },
              { en: "marked with a green label", zh: "标有绿色标签" },
            ],
            alternativeExpressions: [
              { textEn: "We do! Look for the green labels — that's where the GF bread and muffins are. And obviously the fruit and yogurt are safe too.", textZh: "有的！找绿色标签——那里有无麸质面包和松饼。水果和酸奶当然也没问题。", actionHint: "GF = gluten-free 无麸质缩写", frequency: "common" },
              { textEn: "Absolutely, we've got gluten-free options on a separate tray with green tags. Plus all the fruit and yogurt are naturally gluten-free.", textZh: "当然有，无麸质的放在单独托盘上，有绿色标签。所有水果和酸奶本身就是无麸质的。", actionHint: "green tags = 绿色标签", frequency: "common" },
            ],
            casualVersion: "Yep, gluten-free bread and muffins are on that separate tray, green label. Fruit and yogurt are GF too, obviously.",
            formalityVariants: {
              casual: "Yep, GF bread and muffins are on that separate tray with the green label. Fruit and yogurt are also GF.",
              standard: "Yes, we have gluten-free bread and muffins on the separate tray marked with a green label. The fruit and yogurt are also gluten-free, of course.",
              formal: "Yes, certainly. We provide gluten-free bread and muffins, which are located on a separate tray clearly marked with a green label. Furthermore, our fresh fruit and yogurt selections are naturally gluten-free.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect. What time does breakfast end? I don't want to miss it tomorrow.",
            textZh: "太好了。早餐到几点结束？明天不想错过。",
            casualVersion: "Awesome. What time's breakfast end? Don't wanna miss it tomorrow.",
            commonMistake: {
              wrong: "Breakfast end what time?",
              correct: "What time does breakfast end?",
              explanation: "疑问句语序是'What time + do/does + 主语 + 动词原形'。",
            },
            formalityVariants: {
              casual: "Sweet. When's breakfast stop? Don't wanna miss it.",
              standard: "Perfect. What time does breakfast end? I don't want to miss it tomorrow.",
              formal: "Excellent. Could you please inform me of the breakfast service closing time? I wish to ensure I do not miss it tomorrow.",
            },
          },
          {
            speaker: "them",
            role: "餐厅服务员",
            textEn: "Breakfast is from 6:30 to 10 AM on weekdays, and until 11 AM on weekends. We start clearing the buffet at closing time, so try to arrive at least 15 minutes before.",
            textZh: "工作日早餐是6:30到10点，周末到11点。到了结束时间我们就开始收了，建议至少提前15分钟过来。",
            keyPhrases: [
              { en: "clearing the buffet", zh: "收自助餐" },
              { en: "closing time", zh: "结束时间" },
              { en: "at least 15 minutes before", zh: "至少提前15分钟" },
            ],
            alternativeExpressions: [
              { textEn: "Weekdays it's 6:30 to 10, weekends we go till 11. We start wrapping up right at closing, so I'd say get here 15 minutes early to be safe.", textZh: "工作日6:30到10点，周末到11点。一到点我们就开始收了，所以建议提前15分钟来比较保险。", actionHint: "wrapping up = 收尾/收拾，to be safe = 保险起见", frequency: "common" },
              { textEn: "We serve from 6:30 to 10 during the week, 11 on the weekends. Fair warning — once it hits closing time, we clear the food pretty quick.", textZh: "工作日6:30到10点供应，周末到11点。提醒一下——一到结束时间，我们收得很快。", actionHint: "fair warning = 提前告知/提醒", frequency: "common" },
            ],
            casualVersion: "Breakfast is 6:30 to 10 AM weekdays, till 11 on weekends. We start clearing at closing, so try to get here at least 15 mins before.",
            formalityVariants: {
              casual: "Breakfast runs 6:30-10 AM weekdays, 11 on weekends. We start packing up at closing, so try to show up 15 mins early.",
              standard: "Breakfast is from 6:30 to 10 AM on weekdays, and until 11 AM on weekends. We start clearing the buffet at closing time, so try to arrive at least 15 minutes before.",
              formal: "Breakfast is served from 6:30 AM to 10 AM on weekdays, and extends until 11 AM on weekends. We commence clearing the buffet precisely at the stated closing time, therefore, we recommend arriving at least 15 minutes prior.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 15. 行李寄存 ====================
  {
    id: "accommodation-luggage-storage",
    category: "accommodation",
    titleZh: "行李寄存",
    titleEn: "Luggage Storage",
    description: "退房后需要寄存行李，或提前到达时存放行李",
    otherRole: "前台/行李员",
    otherRoleIcon: "🧳",
    flows: [
      {
        id: "luggage-store",
        titleZh: "行李寄存",
        titleEn: "Luggage Storage",
        description: "退房后寄存行李以便继续游览",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just checked out but my flight isn't until 9 PM. Can I leave my luggage here for a few hours?",
            textZh: "你好，我刚退房，但我的航班晚上9点才起飞。行李可以寄存几个小时吗？",
            culturalNote:
              "大多数酒店提供免费行李寄存服务，即使已经退房也可以。这是行业标准做法。",
            casualVersion: "Hey, just checked out, but my flight's not 'til 9 PM. Can I leave my bags here for a bit?",
            formalityVariants: {
              casual: "Hey, just checked out, but my flight's not till 9. Mind if I leave my bags here for a few hours?",
              standard: "Hi, I just checked out, but my flight isn't until 9 PM. Can I leave my luggage here for a few hours?",
              formal: "Good morning/afternoon. I have just checked out, and my flight doesn't depart until 9 PM. Would it be possible to store my luggage here for the afternoon?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course! We offer complimentary luggage storage for guests. How many bags do you have?",
            textZh: "当然可以！我们为住客提供免费行李寄存服务。您有几件行李？",
            keyPhrases: [
              { en: "complimentary", zh: "免费的" },
              { en: "luggage storage", zh: "行李寄存" },
              { en: "how many bags", zh: "几件行李" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, no problem at all! We can hold your bags for free. How much luggage are we talking?", textZh: "当然没问题！我们可以免费帮您存行李。几件行李？", actionHint: "hold your bags = 帮你保管行李", frequency: "common" },
              { textEn: "Absolutely, we do that all the time. It's free for guests. How many pieces do you need to store?", textZh: "当然可以，我们经常帮客人存。住客免费。需要存几件？", actionHint: "pieces = 件（行李的量词）", frequency: "common" },
            ],
            casualVersion: "Totally! We do free luggage storage for guests. How many bags ya got?",
            formalityVariants: {
              casual: "Sure thing! We've got free luggage storage for our guests. How many bags are we talking?",
              standard: "Of course! We offer complimentary luggage storage for guests. How many bags do you have?",
              formal: "Certainly, we would be delighted to assist you. We provide complimentary luggage storage as a service to our esteemed guests. Could you please let me know the number of items you wish to store?",
            },
          },
          {
            speaker: "you",
            textEn: "Two suitcases and a backpack. Is the storage area secure?",
            textZh: "两个行李箱和一个背包。寄存的地方安全吗？",
            casualVersion: "Two suitcases, one backpack. Is it safe back there?",
            commonMistake: {
              wrong: "Is the storage place safe?",
              correct: "Is the storage area secure?",
              explanation: "“Safe” 常用于人或一般情况，而 “secure” 更适用于指物品存放地点的防盗、防损功能。",
            },
            formalityVariants: {
              casual: "Two suitcases, one backpack. It's safe, right?",
              standard: "Two suitcases and a backpack. Is the storage area secure?",
              formal: "I have two suitcases and one backpack. May I inquire as to the security measures in place for the storage area?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, we keep everything in a locked room behind the front desk. Only our staff has access. I'll give you a claim tag for each piece.",
            textZh: "安全的，所有行李都放在前台后面的上锁房间里。只有我们的工作人员能进去。每件行李我给您一个取件牌。",
            keyPhrases: [
              { en: "locked room", zh: "上锁的房间" },
              { en: "claim tag", zh: "取件牌" },
            ],
            alternativeExpressions: [
              { textEn: "Totally secure — everything goes in a locked storage room that only staff can access. I'll tag each bag so you can pick them up easily.", textZh: "绝对安全——所有东西放在上锁的储物间里，只有工作人员能进。每件行李我会贴标签方便你取。", actionHint: "tag each bag = 给每件行李贴标签", frequency: "common" },
              { textEn: "It's very safe — we lock it all up behind the desk. Here, I'll give you a ticket for each piece so you can claim them later.", textZh: "很安全——我们全锁在前台后面。给你每件行李一张凭证，之后凭这个取。", actionHint: "ticket = claim tag 取件凭证", frequency: "common" },
            ],
            casualVersion: "Yeah, it's all in a locked room behind the desk. Only staff can get in. I'll give ya a claim tag for each one.",
            formalityVariants: {
              casual: "Yep, it's all in a locked room right behind the front desk. Only staff gets in there. You'll get a claim tag for each bag.",
              standard: "Yes, we keep everything in a locked room behind the front desk. Only our staff has access. I'll give you a claim tag for each piece.",
              formal: "Indeed. All stored items are kept in a secure, locked facility situated directly behind the front desk, with access strictly limited to authorized personnel. I shall provide you with a unique claim tag for each individual item.",
            },
          },
          {
            speaker: "you",
            textEn: "Great. I'll pick them up around 6 PM. Is that okay?",
            textZh: "好的。我大概下午6点来取。可以吗？",
            casualVersion: "Cool. I'll grab 'em around 6. That work?",
            commonMistake: {
              wrong: "I'll pick up around 6 PM.",
              correct: "I'll pick them up around 6 PM.",
              explanation: "动词短语 “pick up” 需要一个宾语，不能直接接时间。",
            },
            formalityVariants: {
              casual: "Awesome. I'll swing by for them around six. That okay with you?",
              standard: "Great. I'll pick them up around 6 PM. Is that okay?",
              formal: "Excellent. I intend to retrieve my belongings around 6 PM. Will that timeframe be convenient?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "That's perfectly fine. Just bring the claim tags to the front desk when you're ready. We're here 24 hours.",
            textZh: "完全没问题。取行李时把取件牌交到前台就行。我们24小时都有人。",
            keyPhrases: [
              { en: "bring the claim tags", zh: "带上取件牌" },
              { en: "we're here 24 hours", zh: "我们24小时都有人" },
            ],
            alternativeExpressions: [
              { textEn: "No problem at all. Just show up with the tags whenever you're ready. Someone's always at the desk.", textZh: "完全没问题。准备好了拿着取件牌过来就行。前台随时有人。", actionHint: "show up = 出现/过来", frequency: "common" },
              { textEn: "Sure thing, 6 PM works. Just bring your claim tickets to the front desk — we're staffed 24/7.", textZh: "当然，6点没问题。拿取件凭证到前台就行——我们24小时都有人值班。", actionHint: "staffed 24/7 = 24小时有人值班", frequency: "common" },
            ],
            casualVersion: "Perfectly fine. Just bring the tags to the desk when you're ready. We're here all day, all night.",
            formalityVariants: {
              casual: "No problem at all. Just bring your tags to the front desk whenever you're ready. We're open 'round the clock.",
              standard: "That's perfectly fine. Just bring the claim tags to the front desk when you're ready. We're here 24 hours.",
              formal: "That will be entirely acceptable. Kindly present your claim tags to the front desk attendant upon your return. Our reception services are available twenty-four hours a day.",
            },
          },
          {
            speaker: "you",
            textEn: "One more thing — I have a laptop in my backpack. Should I take it out?",
            textZh: "还有一件事——我背包里有笔记本电脑。需要取出来吗？",
            casualVersion: "Oh, one more thing. Got a laptop in my backpack. Should I take it out?",
            commonMistake: {
              wrong: "Should I take it?",
              correct: "Should I take it out?",
              explanation: "“take out” 是取出物品的常用短语。",
            },
            formalityVariants: {
              casual: "Just one more quick question: I've got a laptop in my backpack. Should I pull it out?",
              standard: "One more thing — I have a laptop in my backpack. Should I take it out?",
              formal: "I have one additional query, if I may. I possess a laptop computer within my backpack. Would you advise that I remove it prior to storage?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "We recommend keeping valuables like laptops and electronics with you, just to be safe. You can leave the other bags with us.",
            textZh: "我们建议您随身携带笔记本电脑等贵重电子产品，保险起见。其他行李都可以放在这里。",
            keyPhrases: [
              { en: "keeping valuables with you", zh: "随身携带贵重物品" },
              { en: "just to be safe", zh: "保险起见" },
            ],
            alternativeExpressions: [
              { textEn: "I'd suggest taking the laptop with you, just in case. We can store the rest no problem.", textZh: "建议把笔记本电脑随身带着，以防万一。其他的我们都可以帮您存。", actionHint: "just in case = 以防万一", frequency: "common" },
              { textEn: "Honestly, anything expensive like laptops — better to keep it on you. The suitcases and stuff are totally fine to leave with us.", textZh: "说实话，笔记本电脑这种贵的东西最好自己带着。行李箱什么的放我们这完全没问题。", actionHint: "keep it on you = 随身带着，stuff = 东西", frequency: "common" },
            ],
            casualVersion: "Yeah, we usually suggest keeping anything valuable, like laptops and electronics, with ya, just to be safe. The other bags are fine to leave.",
            formalityVariants: {
              casual: "Honestly, it's probably best to keep your valuables, like laptops and other electronics, on you. The rest of your bags can definitely stay with us.",
              standard: "We recommend keeping valuables like laptops and electronics with you, just to be safe. You can leave the other bags with us.",
              formal: "For optimal security, we strongly advise that you retain possession of any high-value items, such as laptop computers and other electronic devices. The remainder of your luggage may be securely stored with us.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 16. 叫醒服务 ====================
  {
    id: "accommodation-wakeup-call",
    category: "accommodation",
    titleZh: "叫醒服务",
    titleEn: "Wake-up Call",
    description: "预约酒店叫醒服务以确保不会错过早起行程",
    otherRole: "前台",
    otherRoleIcon: "⏰",
    flows: [
      {
        id: "wakeup-call",
        titleZh: "预约叫醒",
        titleEn: "Schedule Wake-up Call",
        description: "电话联系前台预约明早叫醒服务",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to request a wake-up call for tomorrow morning. I have an early flight to catch.",
            textZh: "你好，我想预约明天早上的叫醒服务。我有一趟早班飞机要赶。",
            culturalNote:
              "虽然现在大家用手机闹钟，但酒店叫醒服务是很好的双保险，尤其是重要行程。直接拨前台或按叫醒按钮即可。",
            casualVersion: "Hey, can I get a wake-up call for tomorrow? Got an early flight.",
            commonMistake: {
              wrong: "I want to request a wake-up call.",
              correct: "I'd like to request a wake-up call.",
              explanation: "\"I want\" 听起来太直接，用 \"I'd like to\" 更礼貌客气。",
            },
            formalityVariants: {
              casual: "Hey, can I get a wake-up call tomorrow? Got an early flight.",
              standard: "Hi, I'd like to request a wake-up call for tomorrow morning. I have an early flight to catch.",
              formal: "Good evening. I would like to arrange a wake-up call for tomorrow morning, as I have an early flight departure.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course. What time would you like the call?",
            textZh: "当然可以。您想几点叫醒？",
            keyPhrases: [
              { en: "what time would you like", zh: "您想几点" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing! What time do you need the call?", textZh: "好的！几点打给您？", actionHint: "简洁直接的问法", frequency: "common" },
              { textEn: "No problem, we can do that. What time should we ring you?", textZh: "没问题，可以的。几点叫您？", actionHint: "ring you = 打电话给你", frequency: "common" },
              { textEn: "Absolutely. What time works for you?", textZh: "当然可以。几点方便？", actionHint: "what time works for you = 几点方便", frequency: "common" },
            ],
            casualVersion: "Sure thing. What time?",
            formalityVariants: {
              casual: "Sure thing. What time?",
              standard: "Of course. What time would you like the call?",
              formal: "Certainly. At what specific time would you prefer to receive your wake-up call?",
            },
          },
          {
            speaker: "you",
            textEn: "5:30 AM, please. And could you do a second call at 5:45 just in case I fall back asleep?",
            textZh: "早上5:30。能不能5:45再打一次？怕我又睡过去。",
            casualVersion: "5:30, and maybe another one at 5:45? I'm terrible at waking up.",
            commonMistake: {
              wrong: "5:30 AM, please. Also, can you call me again at 5:45?",
              correct: "5:30 AM, please. And could you do a second call at 5:45?",
              explanation: "\"Also\" 在口语中连接句子不如 \"And\" 流畅自然，\"do a second call\" 是常见说法。",
            },
            formalityVariants: {
              casual: "Make it 5:30. And can you hit me again at 5:45? Just in case I doze off.",
              standard: "5:30 AM, please. And could you do a second call at 5:45 just in case I fall back asleep?",
              formal: "I would appreciate the first call at 5:30 AM, and if possible, a follow-up call at 5:45 AM, merely as a precaution.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "No problem, I'll schedule both — 5:30 and 5:45 AM. Would you also like us to arrange an airport shuttle?",
            textZh: "没问题，两次都设好了——早上5:30和5:45。您需要我们安排机场接驳车吗？",
            keyPhrases: [
              { en: "schedule both", zh: "两次都设好" },
              { en: "airport shuttle", zh: "机场接驳车" },
            ],
            alternativeExpressions: [
              { textEn: "Done — you're set for 5:30 and 5:45. By the way, do you need a ride to the airport? We have a shuttle.", textZh: "搞定——5:30和5:45。对了，需要去机场的车吗？我们有接驳车。", actionHint: "you're set = 设好了，ride = 搭车", frequency: "common" },
              { textEn: "I've got both calls in the system — 5:30 and 5:45 AM. Oh, would you also like us to book the airport shuttle for you?", textZh: "两次叫醒都设好了——早上5:30和5:45。要不要我们帮您预订机场大巴？", actionHint: "in the system = 在系统里了", frequency: "common" },
            ],
            casualVersion: "No prob, got 'em both scheduled for 5:30 and 5:45. Need an airport shuttle too?",
            formalityVariants: {
              casual: "No prob, got 'em both scheduled for 5:30 and 5:45. Need an airport shuttle too?",
              standard: "No problem, I'll schedule both — 5:30 and 5:45 AM. Would you also like us to arrange an airport shuttle?",
              formal: "Certainly, I have scheduled both wake-up calls for 5:30 and 5:45 AM. Would you also be interested in our airport shuttle service?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, that would be helpful! What time should I book the shuttle for a 9 AM flight?",
            textZh: "好的，那就太好了！9点的航班，接驳车应该订几点？",
            casualVersion: "Yeah, that'd be super helpful! What time should I get the shuttle for a 9 AM flight?",
            commonMistake: {
              wrong: "Yes, that is helpful! What time should I book the shuttle for 9 AM flight?",
              correct: "Yes, that would be helpful! What time should I book the shuttle for a 9 AM flight?",
              explanation: "\"that would be helpful\" 是更委婉的表达。9 AM flight 前需要冠词 \"a\"。",
            },
            formalityVariants: {
              casual: "Yeah, that'd be super helpful! What time should I get the shuttle for a 9 AM flight?",
              standard: "Yes, that would be helpful! What time should I book the shuttle for a 9 AM flight?",
              formal: "Yes, that would be most advantageous. Regarding my 9 AM flight, what would be the recommended departure time for the airport shuttle?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "For a 9 AM flight, I'd suggest the 6:15 AM shuttle. It takes about 30 minutes to the airport, and you'll want to arrive at least two hours before an international flight.",
            textZh: "9点的航班，我建议坐6:15的接驳车。到机场大约30分钟，国际航班建议至少提前两小时到。",
            keyPhrases: [
              { en: "shuttle", zh: "接驳车" },
              { en: "at least two hours before", zh: "至少提前两小时" },
              { en: "international flight", zh: "国际航班" },
            ],
            alternativeExpressions: [
              { textEn: "For a 9 o'clock flight, I'd say grab the 6:15 shuttle. It's about half an hour to the airport, and you'll want a good two hours for an international flight.", textZh: "9点的航班，我建议坐6:15的接驳车。到机场大概半小时，国际航班你得留两个小时。", actionHint: "grab the shuttle = 坐接驳车，a good two hours = 足足两小时", frequency: "common" },
              { textEn: "I'd recommend the 6:15 one. Takes about 30 minutes to get there, and for international you really want to be two hours early at least.", textZh: "我推荐6:15那趟。到那边大概30分钟，国际航班真的要至少提前两小时到。", actionHint: "the 6:15 one 指6:15的那趟车", frequency: "common" },
            ],
            casualVersion: "For a 9 AM flight, I'd say the 6:15 AM shuttle. It's about 30 min to the airport, and you wanna be there at least two hours before an international flight.",
            culturalNote: "国际航班要提前两小时到",
            formalityVariants: {
              casual: "For a 9 AM flight, I'd say the 6:15 AM shuttle. It's about 30 min to the airport, and you wanna be there at least two hours before an international flight.",
              standard: "For a 9 AM flight, I'd suggest the 6:15 AM shuttle. It takes about 30 minutes to the airport, and you'll want to arrive at least two hours before an international flight.",
              formal: "Regarding your 9 AM flight, I would recommend the 6:15 AM shuttle. The journey to the airport typically takes approximately 30 minutes, and for international flights, we advise arriving at least two hours prior to departure.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect, please book me on the 6:15 shuttle. Where do I meet it?",
            textZh: "好的，请帮我订6:15的。在哪里等车？",
            casualVersion: "Sounds good, book me on the 6:15 shuttle. Where do I catch it?",
            commonMistake: {
              wrong: "Perfect, please book 6:15 shuttle. Where do I meet it?",
              correct: "Perfect, please book me on the 6:15 shuttle.",
              explanation: "\"book me on the shuttle\" 是正确的搭配，而不是 \"book shuttle\"；6:15 前需要冠词 \"the\"。",
            },
            formalityVariants: {
              casual: "Sounds good, book me on the 6:15 shuttle. Where do I catch it?",
              standard: "Perfect, please book me on the 6:15 shuttle. Where do I meet it?",
              formal: "Excellent, kindly reserve a seat for me on the 6:15 AM shuttle. Could you please inform me of the designated meeting point?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Just come to the main lobby by 6:10. The shuttle departs from the front entrance. The driver will be holding a sign.",
            textZh: "6:10之前到大堂就行。接驳车从正门出发。司机会举牌子。",
            keyPhrases: [
              { en: "main lobby", zh: "大堂" },
              { en: "front entrance", zh: "正门" },
              { en: "holding a sign", zh: "举牌子" },
            ],
            alternativeExpressions: [
              { textEn: "Be in the lobby by 6:10 and the shuttle will be right out front. You can't miss it — the driver holds up a sign.", textZh: "6:10到大堂，接驳车就在正门口。不会错过的——司机会举牌子。", actionHint: "you can't miss it = 不会错过的", frequency: "common" },
              { textEn: "Just head down to the lobby around 6:10. The van picks up at the main entrance. Look for the driver with a hotel sign.", textZh: "大概6:10到大堂就行。面包车在正门接人。找举着酒店牌子的司机。", actionHint: "van = 面包车/小巴", frequency: "common" },
            ],
            casualVersion: "Just head to the main lobby by 6:10. Shuttle leaves from the front. Driver'll have a sign.",
            formalityVariants: {
              casual: "Just head to the main lobby by 6:10. Shuttle leaves from the front. Driver'll have a sign.",
              standard: "Just come to the main lobby by 6:10. The shuttle departs from the front entrance. The driver will be holding a sign.",
              formal: "Please proceed to the main lobby no later than 6:10 AM. The shuttle will be departing from the front entrance, and the driver will be identifiable by a sign.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 17. 换房请求 ====================
  {
    id: "accommodation-room-change",
    category: "accommodation",
    titleZh: "换房请求",
    titleEn: "Room Change Request",
    description: "因房间不满意或有问题，向前台申请换房",
    otherRole: "前台",
    otherRoleIcon: "🔄",
    flows: [
      {
        id: "room-change",
        titleZh: "换房请求",
        titleEn: "Room Change Request",
        description: "对当前房间不满意，要求换房",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just checked into Room 203, but there's a strong cigarette smell. I specifically requested a non-smoking room.",
            textZh: "你好，我刚入住了203房间，但有很重的烟味。我特别要求了无烟房间的。",
            culturalNote:
              "在欧美大多数酒店，non-smoking room（无烟房间）是标配。如果分到有烟味的房间，你有权要求换房。",
            casualVersion: "Hey, just checked into Room 203, but it smells super smoky. I totally asked for non-smoking.",
            commonMistake: {
              wrong: "I just entered Room 203, but has a strong cigarette smell. I specially asked a non-smoking room.",
              correct: "I just checked into Room 203, but there's a strong cigarette smell. I specifically requested a non-smoking room.",
              explanation: "“entered”不如“checked into”自然。“has”应为“there's”。“specially asked”不如“specifically requested”地道。",
            },
            formalityVariants: {
              casual: "Hey, just checked into 203, but it reeks of smoke. I asked for non-smoking.",
              standard: "Hi, I just checked into Room 203, but there's a strong cigarette smell. I specifically requested a non-smoking room.",
              formal: "Good evening, I've just accessed Room 203, and I'm quite concerned as there's a pronounced cigarette odor. My reservation clearly indicated a preference for a non-smoking accommodation.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I sincerely apologize for that. You're right, your reservation does specify non-smoking. Let me see what we have available.",
            textZh: "非常抱歉。您说得对，您的预订确实注明了无烟房间。我看看还有什么空房。",
            keyPhrases: [
              { en: "sincerely apologize", zh: "真诚道歉" },
              { en: "reservation does specify", zh: "预订确实注明了" },
              { en: "what we have available", zh: "还有什么空房" },
            ],
            alternativeExpressions: [
              { textEn: "Oh, I'm so sorry about that. You're absolutely right — it says non-smoking right here. Let me find you a different room right away.", textZh: "哦，真的很抱歉。您说得对——这里确实写着无烟房。我马上给您找另一间。", actionHint: "right here = 就在这里（指系统记录）", frequency: "common" },
              { textEn: "I apologize, that shouldn't have happened. Your booking clearly says non-smoking. Give me a moment and I'll see what else is open.", textZh: "很抱歉，这不应该发生。您的预订明确写了无烟房。给我一会儿，我看看还有什么空房。", actionHint: "what else is open = 还有什么空的", frequency: "common" },
            ],
            casualVersion: "So sorry about that. You're right, your booking totally says non-smoking. Let me check what's open.",
            formalityVariants: {
              casual: "My bad, so sorry. Your booking definitely says non-smoking. Let me see what's open.",
              standard: "I sincerely apologize for that. You're right, your reservation does specify non-smoking. Let me see what we have available.",
              formal: "Please accept my sincerest apologies for this oversight. You are absolutely correct; your reservation explicitly indicates a non-smoking preference. Allow me a moment to ascertain our current room availability.",
            },
          },
          {
            speaker: "you",
            textEn: "If possible, I'd also prefer a higher floor. Room 203 is right by the elevator and it's a bit noisy.",
            textZh: "如果可以的话，我还想换高一点的楼层。203房间就在电梯旁边，有点吵。",
            casualVersion: "If you can, I'd also like a higher floor. 203's right by the elevator, kinda loud.",
            commonMistake: {
              wrong: "If possible, I also want a higher floor. 203 room by the elevator, it's a bit noisy.",
              correct: "If possible, I'd also prefer a higher floor. Room 203 is right by the elevator and it's a bit noisy.",
              explanation: "“I want”不如“I'd prefer”礼貌。“203 room”语序不自然，应为“Room 203”。",
            },
            formalityVariants: {
              casual: "If there's an option, a higher floor would be great too. 203's next to the elevator, so it's kinda loud.",
              standard: "If possible, I'd also prefer a higher floor. Room 203 is right by the elevator and it's a bit noisy.",
              formal: "Should it be feasible, I would additionally appreciate a room on a higher floor. Room 203 is situated in close proximity to the elevator, which results in a notable level of ambient noise.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I have Room 815 available — it's a non-smoking room on the 8th floor, away from the elevator. It also has a city view. Would you like that one?",
            textZh: "815房间可以——8楼的无烟房间，离电梯也远。还有城市景观。您要这间吗？",
            keyPhrases: [
              { en: "away from the elevator", zh: "离电梯远" },
              { en: "city view", zh: "城市景观" },
            ],
            alternativeExpressions: [
              { textEn: "How about Room 815? It's up on the 8th floor, non-smoking, nice and quiet — nowhere near the elevator. Plus it's got a great view of the city.", textZh: "815怎么样？8楼，无烟房，很安静——离电梯也远。而且有很好的城市景观。", actionHint: "nice and quiet = 又好又安静，nowhere near = 离得很远", frequency: "common" },
              { textEn: "I've got 815 free — 8th floor, no-smoking room, not next to the lift, and it overlooks the city. Want to take that one?", textZh: "815空着——8楼无烟房，不在电梯旁，而且能俯瞰城市。要这间吗？", actionHint: "lift = elevator 电梯（英式说法），overlooks = 俯瞰", frequency: "common" },
            ],
            casualVersion: "Got Room 815 — non-smoking, 8th floor, away from the elevator. Plus, city view. Sound good?",
            formalityVariants: {
              casual: "Room 815's open – non-smoking, 8th floor, not by the elevator. And it's got a city view. Want it?",
              standard: "I have Room 815 available — it's a non-smoking room on the 8th floor, away from the elevator. It also has a city view. Would you like that one?",
              formal: "I do have Room 815 currently available; it is a designated non-smoking room located on the eighth floor, positioned away from the elevator, and it offers a pleasant city view. Would this accommodation be suitable for you?",
            },
          },
          {
            speaker: "you",
            textEn: "That sounds much better. Will there be any additional charge for the upgrade?",
            textZh: "听起来好多了。升级需要加钱吗？",
            casualVersion: "Sounds way better. Any extra charge for the upgrade?",
            commonMistake: {
              wrong: "That sounds better. Will need pay more money for upgrade?",
              correct: "That sounds much better. Will there be any additional charge for the upgrade?",
              explanation: "“much better”比“better”强调效果更强。“Will need pay”语法错误，应为“Will there be any additional charge”或“Do I need to pay extra”。",
            },
            formalityVariants: {
              casual: "Way better! Extra charge for this?",
              standard: "That sounds much better. Will there be any additional charge for the upgrade?",
              formal: "That sounds considerably more suitable. May I inquire if there will be any supplementary charges associated with this room upgrade?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "No additional charge at all — this is on us since it was our mistake. I'll have your new key cards ready in just a moment. Would you like help moving your luggage?",
            textZh: "完全不需要加钱——这是我们的失误，算我们的。新门卡马上就好。需要帮您搬行李吗？",
            keyPhrases: [
              { en: "no additional charge", zh: "不需要加钱" },
              { en: "this is on us", zh: "算我们的" },
              { en: "help moving your luggage", zh: "帮您搬行李" },
            ],
            alternativeExpressions: [
              { textEn: "Zero extra cost — it's totally our fault, so this one's on the house. Need a hand with your bags?", textZh: "完全不加费——是我们的错，这个我们请。需要帮忙搬行李吗？", actionHint: "on the house = 免费/我们承担，need a hand = 需要帮忙吗", frequency: "common" },
              { textEn: "No charge at all, we owe you that. I'll get your new cards ready now. Want someone to help you move your stuff?", textZh: "完全不收费，这是我们应该的。我现在给您准备新门卡。要不要人帮您搬东西？", actionHint: "we owe you that = 这是我们欠你的/应该的", frequency: "common" },
            ],
            casualVersion: "Nope, no extra charge — it's on us, our mistake. Your new keys'll be ready in a sec. Need help with your bags?",
            formalityVariants: {
              casual: "Nah, no charge, it's our bad. Keys'll be ready in a minute. Need help with luggage?",
              standard: "No additional charge at all — this is on us since it was our mistake. I'll have your new key cards ready in just a moment. Would you like help moving your luggage?",
              formal: "There will be no additional charge whatsoever; this is entirely at our expense, given it was an error on our part. Your new key cards will be prepared momentarily. May I offer assistance with relocating your luggage?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please. I haven't unpacked yet, so it should be quick.",
            textZh: "好的，麻烦了。我还没拆行李，应该很快。",
            casualVersion: "Yeah, please. Haven't unpacked, so it'll be quick.",
            commonMistake: {
              wrong: "Yes. I didn't unpack, so it should be fast.",
              correct: "Yes, please. I haven't unpacked yet, so it should be quick.",
              explanation: "“didn't unpack”表达的是已完成的动作，“haven't unpacked yet”表达的是到目前为止还没做。“quick”更常用于指时间短暂。",
            },
            formalityVariants: {
              casual: "Yeah, that'd be great. Haven't even unpacked, so super quick.",
              standard: "Yes, please. I haven't unpacked yet, so it should be quick.",
              formal: "Yes, that would be greatly appreciated. As I have not yet unpacked, the transfer should be quite expedient.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'll send a bellhop right up. Here are your new key cards for Room 815. Again, I'm very sorry for the inconvenience.",
            textZh: "我马上派行李员上去。这是815房间的新门卡。再次为给您带来的不便道歉。",
            keyPhrases: [
              { en: "bellhop", zh: "行李员" },
              { en: "sorry for the inconvenience", zh: "为不便道歉" },
            ],
            alternativeExpressions: [
              { textEn: "I'll have someone come help with your bags right now. Here's your new keys for 815. And again, I'm really sorry about all this.", textZh: "我马上派人来帮您搬行李。这是815的新门卡。再次为这一切道歉。", actionHint: "all this = 这一切（指造成的不便）", frequency: "common" },
              { textEn: "Let me send a porter up to help you move. Here are your keys for Room 815. I do apologize for the trouble.", textZh: "我让行李员上去帮您搬。这是815房间的门卡。为给您添麻烦道歉。", actionHint: "porter = bellhop 行李员", frequency: "common" },
            ],
            casualVersion: "I'll send a bellhop right up. Here are your new keys for 815. Again, super sorry for the hassle.",
            formalityVariants: {
              casual: "Sending up a bellhop now. Here's your 815 keys. Seriously, sorry for the trouble.",
              standard: "I'll send a bellhop right up. Here are your new key cards for Room 815. Again, I'm very sorry for the inconvenience.",
              formal: "I shall dispatch a bellhop to your current room immediately. Here are your new key cards for Room 815. Once more, I extend my profound apologies for any inconvenience this situation may have caused.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 18. 客房服务 ====================
  {
    id: "accommodation-room-service",
    category: "accommodation",
    titleZh: "客房服务",
    titleEn: "Room Service",
    description: "通过电话或平板点客房送餐服务",
    otherRole: "客房服务",
    otherRoleIcon: "🍽️",
    flows: [
      {
        id: "order-room-service",
        titleZh: "点客房送餐",
        titleEn: "Order Room Service",
        description: "电话点餐到房间",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hello, I'd like to order room service. I'm in Room 1020.",
            textZh: "你好，我想点客房送餐。我在1020房间。",
            casualVersion: "Hey, wanna order some room service. I'm in 1020.",
            commonMistake: {
              wrong: "Hello, I want to order room service.",
              correct: "Hello, I'd like to order room service.",
              explanation: "“I want” 听起来不够礼貌，用 “I'd like to” 更客气。",
            },
            formalityVariants: {
              casual: "Hey, room service for 1020 here.",
              standard: "Hello, I'd like to order room service. I'm in Room 1020.",
              formal: "Good evening, this is Room 1020. I would like to place an order for room service, please.",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Good evening, Room 1020. What can I get for you tonight?",
            textZh: "晚上好，1020房间。今晚想点什么？",
            keyPhrases: [
              { en: "what can I get for you", zh: "想点什么" },
            ],
            alternativeExpressions: [
              { textEn: "Hi there, Room 1020! What are we having tonight?", textZh: "你好，1020房间！今晚想吃什么？", actionHint: "what are we having = 我们吃什么（友好问法）", frequency: "common" },
              { textEn: "Good evening! Room 1020, right? What would you like to order?", textZh: "晚上好！1020房间对吧？想点什么？", actionHint: "直接确认房间号再问点餐", frequency: "common" },
            ],
            casualVersion: "Hi there, Room 1020. What can I get for you?",
            formalityVariants: {
              casual: "Hi there, Room 1020. What can I get for you?",
              standard: "Good evening, Room 1020. What can I get for you tonight?",
              formal: "Good evening, Room 1020. How may I be of assistance with your room service order this evening?",
            },
          },
          {
            speaker: "you",
            textEn: "Could I get a club sandwich and a Caesar salad? And a pot of green tea, please.",
            textZh: "能来一份俱乐部三明治和凯撒沙拉吗？再来一壶绿茶。",
            culturalNote:
              "客房送餐通常比餐厅贵15-30%，还可能收取delivery fee（送餐费）和自动加的gratuity（小费）。点餐前可以确认。",
            casualVersion: "Can I get a club sandwich and a Caesar salad? And a green tea pot, too.",
            commonMistake: {
              wrong: "I want a club sandwich and a Caesar salad.",
              correct: "Could I get a club sandwich and a Caesar salad?",
              explanation: "“I want” 听起来像命令，不礼貌。用 “Could I get” 或 “I'd like” 更客气。",
            },
            formalityVariants: {
              casual: "Lemme get a club sandwich, Caesar salad, and a green tea.",
              standard: "Could I get a club sandwich and a Caesar salad? And a pot of green tea, please.",
              formal: "I would like to request a club sandwich and a Caesar salad. Additionally, a pot of green tea, if you please.",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Certainly. The club sandwich comes with fries or a side salad. Which would you prefer?",
            textZh: "好的。俱乐部三明治配薯条或配菜沙拉，您选哪个？",
            keyPhrases: [
              { en: "comes with", zh: "搭配/附带" },
              { en: "fries or a side salad", zh: "薯条或配菜沙拉" },
            ],
            alternativeExpressions: [
              { textEn: "Great choice! For the club sandwich — do you want fries with that, or a side salad?", textZh: "选得好！俱乐部三明治——配薯条还是配菜沙拉？", actionHint: "great choice = 选得好，with that = 搭配着", frequency: "common" },
              { textEn: "Sure! The club sandwich comes with a side — you can do fries or salad. Which one?", textZh: "好的！俱乐部三明治有一个配菜——可以选薯条或沙拉。选哪个？", actionHint: "you can do = 你可以选", frequency: "common" },
            ],
            casualVersion: "Okay. So, club sandwich comes with fries or a side salad. Which one?",
            formalityVariants: {
              casual: "Okay. So, club sandwich comes with fries or a side salad. Which one?",
              standard: "Certainly. The club sandwich comes with fries or a side salad. Which would you prefer?",
              formal: "Certainly. The club sandwich offers a choice of either french fries or a side salad. May I inquire as to your preference?",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take the fries. How long will it take to arrive?",
            textZh: "配薯条吧。大概多久能送到？",
            casualVersion: "Fries. How long 'til it gets here?",
            commonMistake: {
              wrong: "How long time will it take?",
              correct: "How long will it take?",
              explanation: "“How long time” 是常见中式英语，应直接说 “How long”。",
            },
            formalityVariants: {
              casual: "Just the fries. How long's that gonna be?",
              standard: "I'll take the fries. How long will it take to arrive?",
              formal: "I will opt for the french fries. Could you please advise on the estimated delivery time?",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "It should be about 30 to 40 minutes. There's a $5 delivery charge plus 18% gratuity that will be added to your bill. Is that okay?",
            textZh: "大概30到40分钟。会在账单上加收5美元的送餐费和18%的服务费。可以吗？",
            keyPhrases: [
              { en: "delivery charge", zh: "送餐费" },
              { en: "gratuity", zh: "服务费/小费" },
              { en: "added to your bill", zh: "加到账单上" },
            ],
            alternativeExpressions: [
              { textEn: "It'll be around 30 to 40 minutes. Just a heads up — there's a $5 delivery fee and an 18% service charge on top. That cool?", textZh: "大概30到40分钟。提醒一下——有5美元送餐费和18%服务费。行吗？", actionHint: "heads up = 提醒，on top = 额外加上，that cool = 可以吗", frequency: "common" },
              { textEn: "Give us about half an hour to 40 minutes. There'll be a $5 room service fee plus 18% gratuity tacked onto the bill. Is that alright?", textZh: "大概半小时到40分钟。账单上会加5美元客房服务费和18%小费。可以吗？", actionHint: "tacked onto = 附加到", frequency: "common" },
            ],
            casualVersion: "Figure around 30, 40 minutes. You'll see a $5 delivery fee and 18% tip on the bill. Cool?",
            culturalNote: "送餐费和小费在账单中额外收取是酒店惯例。",
            formalityVariants: {
              casual: "Figure around 30, 40 minutes. You'll see a $5 delivery fee and 18% tip on the bill. Cool?",
              standard: "It should be about 30 to 40 minutes. There's a $5 delivery charge plus 18% gratuity that will be added to your bill. Is that okay?",
              formal: "The estimated delivery time is approximately 30 to 40 minutes. Please be advised that a $5 delivery charge and an 18% gratuity will be appended to your total bill. Do you find this acceptable?",
            },
          },
          {
            speaker: "you",
            textEn: "That's fine. Just charge it to the room, please.",
            textZh: "没问题。请记到房间账上。",
            casualVersion: "Sure, just put it on the room.",
            commonMistake: {
              wrong: "Charge it to my room.",
              correct: "Charge it to the room.",
              explanation: "表达记账到房间时，用 “charge it to the room” 更自然地道。",
            },
            formalityVariants: {
              casual: "Yeah, that's fine. Just put it on the room tab.",
              standard: "That's fine. Just charge it to the room, please.",
              formal: "That is perfectly acceptable. Kindly charge the total amount to my room account.",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Will do. We'll knock and announce \"room service\" when we arrive. Is there anything else you'd like?",
            textZh: "好的。送到时我们会敲门并说\"客房服务\"。还需要其他的吗？",
            keyPhrases: [
              { en: "charge it to the room", zh: "记到房间账上" },
              { en: "knock and announce", zh: "敲门并报知" },
            ],
            alternativeExpressions: [
              { textEn: "No problem, it's on the room. We'll knock when we get there. Anything else I can add to the order?", textZh: "没问题，记房间账上。到了我们会敲门。还要加点别的吗？", actionHint: "it's on the room = 记房间账上", frequency: "common" },
              { textEn: "Got it — charged to the room. When we arrive we'll give a knock and say \"room service.\" Need anything else?", textZh: "好的——记房间账。到了会敲门说\"客房服务\"。还要别的吗？", actionHint: "give a knock = 敲一下门", frequency: "common" },
            ],
            casualVersion: "Got it. We'll knock and yell \\",
            formalityVariants: {
              casual: "Got it. We'll knock and yell \\",
              standard: "Will do. We'll knock and announce \\",
              formal: "Understood. We shall knock and announce our presence prior to entry \\",
            },
          },
        ],
      },
    ],
  },

  // ==================== 19. 安全投诉 ====================
  {
    id: "accommodation-safety-concerns",
    category: "accommodation",
    titleZh: "安全投诉",
    titleEn: "Safety Concerns",
    description: "发现安全隐患或感到不安全时向前台或管理方反映",
    otherRole: "前台/经理",
    otherRoleIcon: "🛡️",
    flows: [
      {
        id: "safety-issue",
        titleZh: "安全问题",
        titleEn: "Safety Issue",
        description: "发现房间门锁有问题或感到不安全",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have a safety concern about my room. The deadbolt on the door doesn't seem to lock properly. I can push the door open even when it's locked.",
            textZh: "你好，我对房间的安全有个问题。门上的防盗锁好像锁不好。锁上了门还是能推开。",
            culturalNote:
              "酒店房间通常有两道锁：电子门锁和deadbolt（防盗锁/门栓）。如果门锁有任何问题，应该立即反映，这关系到人身安全。",
            casualVersion: "Hey, got a safety issue with my room. The deadbolt's messed up; can push the door open even when it's locked.",
            commonMistake: {
              wrong: "I have a room safety problem.",
              correct: "I have a safety concern about my room.",
              explanation: "直接翻译的\"问题\"听起来太生硬。\"concern\" 或 \"issue\" 更自然、礼貌。",
            },
            formalityVariants: {
              casual: "Hey, got a safety issue with my room. The deadbolt's messed up; can push the door open even when it's locked.",
              standard: "Hi, I have a safety concern about my room. The deadbolt on the door doesn't seem to lock properly. I can push the door open even when it's locked.",
              formal: "Good morning/afternoon/evening, I need to report a significant safety concern regarding my room. The deadbolt on the door appears to be malfunctioning, as I am able to open the door despite it being locked.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'm very sorry to hear that. Your safety is our top priority. I'll send security and maintenance to check it immediately.",
            textZh: "非常抱歉。您的安全是我们的第一要务。我会立刻派安保和维修人员去检查。",
            keyPhrases: [
              { en: "your safety is our top priority", zh: "您的安全是第一要务" },
              { en: "send security", zh: "派安保" },
              { en: "immediately", zh: "立刻" },
            ],
            alternativeExpressions: [
              { textEn: "Oh that's really concerning. We take safety very seriously. I'm sending someone from security and maintenance to your room right now.", textZh: "这确实令人担忧。我们非常重视安全。我现在就派安保和维修人员去您房间。", actionHint: "that's really concerning = 令人担忧", frequency: "common" },
              { textEn: "I'm so sorry — that's absolutely unacceptable. Let me get security and a repair person up there ASAP. We'll sort this out immediately.", textZh: "非常抱歉——这绝对不能接受。我马上让安保和维修人员上去。立刻解决这个问题。", actionHint: "sort this out = 解决这个问题", frequency: "common" },
            ],
            casualVersion: "Oh wow, so sorry about that. Your safety's super important to us. Sending security and maintenance right up to check it out.",
            formalityVariants: {
              casual: "Oh wow, so sorry. Your safety's key. Sending security and maintenance up now.",
              standard: "I'm very sorry to hear that. Your safety is our top priority. I'll send security and maintenance to check it immediately.",
              formal: "Please accept my sincerest apologies for this inconvenience. Your safety and well-being are paramount to us. I will dispatch security personnel and maintenance staff to your room without delay to address this matter.",
            },
          },
          {
            speaker: "you",
            textEn: "Also, I noticed the fire exit on my floor seems to be blocked by furniture. Is that normal?",
            textZh: "另外，我发现我这层的消防出口好像被家具堵住了。这正常吗？",
            casualVersion: "Also, saw the fire exit on my floor's blocked by furniture. Is that normal?",
            commonMistake: {
              wrong: "It is normal?",
              correct: "Is that normal?",
              explanation: "中文常省略主语，但在英文中通常需要主语和助动词倒装构成疑问句。",
            },
            formalityVariants: {
              casual: "Oh, and the fire exit on my floor's blocked. Normal?",
              standard: "Also, I noticed the fire exit on my floor seems to be blocked by furniture. Is that normal?",
              formal: "Furthermore, I observed that the fire exit on my floor appears to be obstructed by furniture. Is this an acceptable condition?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Absolutely not — fire exits must be clear at all times. Thank you for reporting that. I'll have it addressed immediately and inform the duty manager.",
            textZh: "绝对不正常——消防出口必须随时保持畅通。谢谢您报告这个问题。我会立刻处理并通知值班经理。",
            keyPhrases: [
              { en: "fire exits must be clear", zh: "消防出口必须畅通" },
              { en: "addressed immediately", zh: "立刻处理" },
              { en: "duty manager", zh: "值班经理" },
            ],
            alternativeExpressions: [
              { textEn: "No, that's definitely not okay. Fire exits should never be blocked. Thanks for letting us know — I'll get it cleared right away and loop in the manager.", textZh: "不，这绝对不正常。消防出口不应该被堵住。感谢告知——我马上让人清理，并通知经理。", actionHint: "loop in = 通知/让...参与", frequency: "common" },
              { textEn: "That's a serious safety violation. I appreciate you reporting it. I'll have it taken care of right now and notify the manager on duty.", textZh: "这是严重的安全违规。感谢您报告。我马上处理并通知值班经理。", actionHint: "safety violation = 安全违规，manager on duty = 值班经理", frequency: "common" },
            ],
            casualVersion: "No way, absolutely not—fire exits gotta be clear always. Thanks for the heads-up. I'll get it handled ASAP and tell the manager.",
            formalityVariants: {
              casual: "No way, absolutely not. Fire exits gotta be clear. Thanks for reporting. I'll get it fixed and tell the manager.",
              standard: "Absolutely not — fire exits must be clear at all times. Thank you for reporting that. I'll have it addressed immediately and inform the duty manager.",
              formal: "That is absolutely unacceptable; fire exits are legally mandated to remain unobstructed at all times. We deeply appreciate you bringing this critical matter to our attention. I will ensure it is rectified immediately and notify the duty manager.",
            },
          },
          {
            speaker: "you",
            textEn: "I'd feel much safer in a different room. Is that possible?",
            textZh: "换一个房间我会安心很多。可以吗？",
            casualVersion: "I'd feel way safer in another room. Can I switch?",
            commonMistake: {
              wrong: "Can I change room?",
              correct: "Can I switch rooms?",
              explanation: "\"change room\" 听起来像“改变房间”，而 \"switch rooms\" 更自然地表达换房间。",
            },
            formalityVariants: {
              casual: "I'd feel way safer in another room. Can I switch?",
              standard: "I'd feel much safer in a different room. Is that possible?",
              formal: "Considering these circumstances, I would feel significantly more secure if I were relocated to a different room. Would that be a feasible option?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course. I'll move you to a room on a different floor right now. Let me also get the manager — I want to make sure you're completely taken care of.",
            textZh: "当然可以。我现在就给您换到另一层楼的房间。我也叫经理过来——我要确保完全照顾好您。",
            keyPhrases: [
              { en: "move you to a different floor", zh: "换到另一层楼" },
              { en: "completely taken care of", zh: "完全照顾好" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely. I'll get you into a room on another floor right away. And I want to bring the manager over — we want to make sure everything's properly handled.", textZh: "当然。我马上给您安排另一层楼的房间。我还要叫经理过来——我们要确保一切处理妥当。", actionHint: "properly handled = 妥当处理", frequency: "common" },
              { textEn: "Of course, let's get you moved ASAP. I'm also going to call the manager to come see you personally — your safety matters to us.", textZh: "当然，我们尽快给您换房。我也会叫经理亲自来见您——您的安全对我们很重要。", actionHint: "ASAP = as soon as possible 尽快", frequency: "common" },
            ],
            casualVersion: "Totally. I'll get you into a room on a different floor right now. Also, let me grab the manager—wanna make sure you're totally looked after.",
            formalityVariants: {
              casual: "Sure. Getting you a new room on a different floor now. And I'll grab the manager—wanna make sure you're all good.",
              standard: "Of course. I'll move you to a room on a different floor right now. Let me also get the manager — I want to make sure you're completely taken care of.",
              formal: "Certainly. I will arrange for your immediate relocation to a room on an alternative floor. Additionally, I will summon the duty manager to ensure all your needs are thoroughly addressed and that you are entirely comfortable.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. I appreciate you taking this seriously.",
            textZh: "谢谢。感谢你们认真对待这件事。",
            casualVersion: "Thanks. Appreciate you taking this seriously.",
            formalityVariants: {
              casual: "Thanks. Appreciate you taking this seriously.",
              standard: "Thank you. I appreciate you taking this seriously.",
              formal: "Thank you. I am grateful for your prompt and serious attention to these matters.",
            },
          },
          {
            speaker: "them",
            role: "经理",
            textEn: "Sir, I'm the duty manager. I want to personally apologize. We've prepared Room 1105 for you — it's on a secure floor with new locks. We'll also waive tonight's charges.",
            textZh: "先生，我是值班经理。我亲自向您道歉。我们为您准备好了1105房间——在安全楼层，锁是新的。今晚的房费也全免。",
            keyPhrases: [
              { en: "personally apologize", zh: "亲自道歉" },
              { en: "secure floor", zh: "安全楼层" },
              { en: "waive tonight's charges", zh: "免除今晚房费" },
            ],
            alternativeExpressions: [
              { textEn: "Sir, I'm the manager on duty. I'm terribly sorry about this. We've set up Room 1105 for you — it's on a high-security floor with brand-new locks. Tonight is completely on us.", textZh: "先生，我是值班经理。非常抱歉。我们给您准备了1105房间——高安全楼层，全新的锁。今晚完全免费。", actionHint: "terribly sorry = 非常抱歉，brand-new = 全新的，on us = 我们承担", frequency: "common" },
              { textEn: "Hello, I'm the duty manager. Please accept my personal apology. Room 1105 is ready — secure floor, new locks, everything checked. And we're comping your entire night.", textZh: "您好，我是值班经理。请接受我个人的道歉。1105房间准备好了——安全楼层、新锁、全部检查过了。今晚全部免单。", actionHint: "comping = 免费提供（compensate缩写）", frequency: "common" },
            ],
            casualVersion: "Sir/Ma'am, I'm the duty manager. Just wanna personally apologize. Got Room 1105 ready for you—it's on a secure floor, new locks. And we're waiving tonight's charges.",
            formalityVariants: {
              casual: "Sir/Ma'am, I'm the manager. My apologies. Got Room 1105 ready, secure floor, new locks. Tonight's free.",
              standard: "Sir, I'm the duty manager. I want to personally apologize. We've prepared Room 1105 for you — it's on a secure floor with new locks. We'll also waive tonight's charges.",
              formal: "Sir/Madam, I am the duty manager. I extend my sincere personal apologies for the distressing experience you have encountered. We have prepared Room 1105 for your immediate occupancy, situated on a rigorously secure floor with newly installed locking mechanisms. Furthermore, we will, of course, waive all charges for tonight's stay as a gesture of our profound regret.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 20. 预订取消 ====================
  {
    id: "accommodation-cancellation",
    category: "accommodation",
    titleZh: "预订取消",
    titleEn: "Cancellation",
    description: "因行程变化需要取消酒店或住宿预订，了解取消政策和退款",
    otherRole: "前台/客服",
    otherRoleIcon: "❌",
    flows: [
      {
        id: "cancel-reservation",
        titleZh: "取消预订",
        titleEn: "Cancel Reservation",
        description: "电话或现场取消住宿预订",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to cancel my reservation. My plans have changed and I won't be able to make it.",
            textZh: "你好，我需要取消预订。我的计划变了，来不了了。",
            casualVersion: "Hey, gotta cancel my booking. Plans changed, can't make it.",
            commonMistake: {
              wrong: "I need to cancel my reservation. My plan changed.",
              correct: "I need to cancel my reservation. My plans have changed.",
              explanation: "常用复数'plans'指行程安排，用'plan'则指具体某一个计划。",
            },
            formalityVariants: {
              casual: "Hey, need to cancel my reservation. Plans changed, can't make it.",
              standard: "Hi, I need to cancel my reservation. My plans have changed and I won't be able to make it.",
              formal: "Good morning/afternoon. I would like to request a cancellation for an existing reservation. Unfortunately, my travel arrangements have unexpectedly changed, and I am no longer able to honor the booking.",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "I'm sorry to hear that. Could I have your reservation number or the name it's booked under?",
            textZh: "很遗憾听到这个消息。可以告诉我您的预订号或预订人姓名吗？",
            keyPhrases: [
              { en: "reservation number", zh: "预订号" },
              { en: "name it's booked under", zh: "预订人姓名" },
            ],
            alternativeExpressions: [
              { textEn: "Oh no, sorry to hear that. Can I get your booking reference or the name on the reservation?", textZh: "哦，很遗憾。能告诉我预订参考号或预订人的名字吗？", actionHint: "booking reference = reservation number 预订参考号", frequency: "common" },
              { textEn: "I understand, things happen. What's the confirmation number? Or I can look it up by name.", textZh: "理解，计划赶不上变化。确认号是多少？或者我可以用名字查。", actionHint: "things happen = 这种事时有发生，look it up = 查一下", frequency: "common" },
            ],
            casualVersion: "Aw, too bad. Can I get your reservation number or the name on it?",
            formalityVariants: {
              casual: "Oh, too bad. Reservation number or name it's under?",
              standard: "I'm sorry to hear that. Could I have your reservation number or the name it's booked under?",
              formal: "I regret to hear that your plans have changed. May I please have your reservation confirmation number or the full name under which the booking was made?",
            },
          },
          {
            speaker: "you",
            textEn: "The reservation is under Zhang Wei. The confirmation number is HT-229845.",
            textZh: "预订人是Zhang Wei。确认号是HT-229845。",
            casualVersion: "It's under Zhang Wei. Confirmation's HT-229845.",
            commonMistake: {
              wrong: "My name is Zhang Wei. The confirmation number is HT-229845.",
              correct: "The reservation is under Zhang Wei.",
              explanation: "回答“谁预订的”更直接的说法是“预订在某人名下”。",
            },
            formalityVariants: {
              casual: "Zhang Wei. Confirmation's HT-229845.",
              standard: "The reservation is under Zhang Wei. The confirmation number is HT-229845.",
              formal: "Certainly. The reservation was made under the name of Zhang Wei, and the confirmation number is HT-229845.",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "I found it — a three-night stay starting April 5th. Now, your booking was made with a flexible rate, so you can cancel free of charge up to 48 hours before check-in.",
            textZh: "找到了——4月5日起住三晚。您的预订是灵活价格，入住前48小时以上免费取消。",
            keyPhrases: [
              { en: "flexible rate", zh: "灵活价格" },
              { en: "cancel free of charge", zh: "免费取消" },
              { en: "48 hours before check-in", zh: "入住前48小时" },
            ],
            alternativeExpressions: [
              { textEn: "Okay, I've got it — three nights from April 5th. Good news: you booked the flexible rate, so as long as you cancel at least 48 hours out, there's no penalty.", textZh: "好的，找到了——4月5日起三晚。好消息：您订的是灵活价格，只要提前48小时以上取消就没有罚款。", actionHint: "48 hours out = 提前48小时，no penalty = 没有罚款", frequency: "common" },
              { textEn: "Found it — April 5th, three nights. Since it's a flex booking, you're free to cancel without any charges as long as it's more than 48 hours before check-in.", textZh: "找到了——4月5日，三晚。因为是弹性预订，入住前48小时以上取消不收任何费用。", actionHint: "flex booking = 弹性预订", frequency: "common" },
            ],
            casualVersion: "Got it — three nights from April 5th. Good news, your booking's flexible, so you can cancel for free up to 48 hours before check-in.",
            formalityVariants: {
              casual: "Found it—three nights starting April 5th. Your booking's flexible, so you can cancel free up to 48 hours before check-in.",
              standard: "I found it — a three-night stay starting April 5th. Now, your booking was made with a flexible rate, so you can cancel free of charge up to 48 hours before check-in.",
              formal: "Yes, I have located your reservation; a three-night stay commencing April 5th. I can confirm that your booking was made under a flexible rate, which permits cancellation without charge up to 48 hours prior to your scheduled check-in.",
            },
          },
          {
            speaker: "you",
            textEn: "Great, my check-in date is still more than a week away. So I should get a full refund, right?",
            textZh: "好的，离入住还有一个多星期。那应该可以全额退款吧？",
            culturalNote:
              "取消政策（cancellation policy）因预订类型而异。non-refundable rate（不可退价格）通常更便宜但不能取消退款。预订时要注意这一点。",
            casualVersion: "Sweet, I'm still over a week out from check-in. So, full refund then, right?",
            commonMistake: {
              wrong: "I still have more than one week. So, I will get a full refund, right?",
              correct: "My check-in date is still more than a week away.",
              explanation: "描述离某事还有多久，常用“... is still X time away”。",
            },
            formalityVariants: {
              casual: "Awesome, check-in's still over a week away. Full refund then, right?",
              standard: "Great, my check-in date is still more than a week away. So I should get a full refund, right?",
              formal: "Excellent. As my scheduled check-in date is still more than a week in advance, I presume a full refund will be issued, correct?",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "That's correct. You'll receive a full refund to your original payment method within 5 to 10 business days.",
            textZh: "没错。全额退款将在5到10个工作日内退回到您的原支付方式。",
            keyPhrases: [
              { en: "full refund", zh: "全额退款" },
              { en: "original payment method", zh: "原支付方式" },
              { en: "business days", zh: "工作日" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, you'll get all your money back. It'll go back to the card you paid with — usually takes 5 to 10 business days to show up.", textZh: "是的，全额退。会退到你付款的那张卡上——通常5到10个工作日到账。", actionHint: "show up = 到账/出现", frequency: "common" },
              { textEn: "That's right — full refund, no questions asked. It'll hit your account in about a week, maybe two. Same card you booked with.", textZh: "没错——全额退款，没有问题。大概一到两周到账。退到你预订用的那张卡。", actionHint: "no questions asked = 没有附加条件，hit your account = 到账", frequency: "common" },
            ],
            casualVersion: "Yep, that's right. Full refund back to your original payment, usually in 5 to 10 business days.",
            formalityVariants: {
              casual: "Yep, that's right. Full refund back to your original payment, within 5-10 business days.",
              standard: "That's correct. You'll receive a full refund to your original payment method within 5 to 10 business days.",
              formal: "Precisely. A full refund will be processed and credited back to your original payment method within five to ten business days.",
            },
          },
          {
            speaker: "you",
            textEn: "Will I receive a cancellation confirmation by email?",
            textZh: "会收到取消确认的邮件吗？",
            casualVersion: "Gonna get a cancellation email confirmation?",
            commonMistake: {
              wrong: "Will you send me a cancellation email?",
              correct: "Will I receive a cancellation confirmation by email?",
              explanation: "问是否“收到”确认信比问是否“发”确认信更直接。",
            },
            formalityVariants: {
              casual: "Will I get an email confirmation for the cancellation?",
              standard: "Will I receive a cancellation confirmation by email?",
              formal: "May I expect to receive a cancellation confirmation via email?",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Yes, I'll send you a cancellation confirmation email right now. Please save it for your records. Your cancellation reference number is CX-884201.",
            textZh: "会的，我现在就给您发取消确认邮件。请保存好留档。您的取消参考号是CX-884201。",
            keyPhrases: [
              { en: "cancellation confirmation", zh: "取消确认" },
              { en: "for your records", zh: "留档" },
              { en: "cancellation reference number", zh: "取消参考号" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, I'll shoot you an email right now with the cancellation details. Hang onto it just in case. Your reference number is CX-884201.", textZh: "会的，我现在就发邮件给您确认取消详情。留好以备不时之需。您的参考号是CX-884201。", actionHint: "shoot you an email = 给你发邮件，hang onto it = 保存好", frequency: "common" },
              { textEn: "Absolutely — you'll get a confirmation email in a few minutes. Your cancellation number is CX-884201. Keep it handy in case you need it.", textZh: "当然——几分钟后您会收到确认邮件。取消号是CX-884201。留着以防需要。", actionHint: "keep it handy = 放在手边/留着", frequency: "common" },
            ],
            casualVersion: "Yep, sending that cancellation email right now. Keep it for your records. Ref number's CX-884201.",
            formalityVariants: {
              casual: "Yep, sending that email right now. Keep it for your records. Ref number's CX-884201.",
              standard: "Yes, I'll send you a cancellation confirmation email right now. Please save it for your records. Your cancellation reference number is CX-884201.",
              formal: "Yes, I will issue a cancellation confirmation email to you momentarily. Kindly retain this for your records. Your cancellation reference number is CX-884201.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 21. 邻居互动（共享空间） ====================
  {
    id: "accommodation-shared-space",
    category: "accommodation",
    titleZh: "共享空间互动",
    titleEn: "Shared Space Interaction",
    description: "在青旅或合租公寓的公共区域与其他住客交流",
    otherRole: "其他住客",
    otherRoleIcon: "👥",
    flows: [
      {
        id: "common-area-chat",
        titleZh: "公共区域聊天",
        titleEn: "Common Area Chat",
        description: "在青旅厨房或休息室与其他旅客搭话",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hey, is this seat taken? Mind if I sit here?",
            textZh: "嘿，这个位子有人吗？我可以坐这里吗？",
            culturalNote:
              "在青旅公共区域主动搭话很正常，这也是青旅文化的一部分。大家都是旅行者，很容易聊起来。",
            casualVersion: "Hey, this seat taken? Can I sit here?",
            commonMistake: {
              wrong: "Is this seat has someone?",
              correct: "Is this seat taken?",
              explanation: "中式英语常将“有人”直译为\"has someone\"，不自然。",
            },
            formalityVariants: {
              casual: "Hey, anyone sitting here? Can I grab it?",
              standard: "Hey, is this seat taken? Mind if I sit here?",
              formal: "Excuse me, is this seat occupied? Would you mind if I took a seat here?",
            },
          },
          {
            speaker: "them",
            role: "其他住客",
            textEn: "Go ahead! I'm just making some pasta. Are you just arriving or have you been here a while?",
            textZh: "请坐！我正在做意面。你是刚到还是已经住了一阵了？",
            keyPhrases: [
              { en: "go ahead", zh: "请便" },
              { en: "just arriving", zh: "刚到" },
            ],
            alternativeExpressions: [
              { textEn: "Nope, all yours! I'm just cooking up some pasta. Did you just get here or have you been around for a bit?", textZh: "没人，随便坐！我正做意面呢。你刚到还是已经来了一阵了？", actionHint: "all yours = 随便坐/归你了，been around = 待在这里", frequency: "common" },
              { textEn: "Not at all, have a seat! Making some pasta here. You new to the hostel or been here a while?", textZh: "没有，坐吧！在做意面。你是新来的还是住了一阵了？", actionHint: "not at all = 完全没有（人坐）", frequency: "common" },
            ],
            casualVersion: "Go for it! Just makin' some pasta. Just got here or been around a bit?",
            commonMistake: {
              wrong: "You just arrive or already here for a while?",
              correct: "Are you just arriving or have you been here a while?",
              explanation: "中国学生常犯时态错误，且省略主语和助动词。",
            },
            formalityVariants: {
              casual: "Yeah, go for it! Just cookin' some pasta. Just got here or been around a bit?",
              standard: "Go ahead! I'm just making some pasta. Are you just arriving or have you been here a while?",
              formal: "Please, make yourself comfortable. I'm just preparing some pasta. May I ask if you've recently arrived or have been residing here for some time?",
            },
          },
          {
            speaker: "you",
            textEn: "I just got in today. First time in this city, actually. Any recommendations on what to see?",
            textZh: "今天刚到。其实是第一次来这个城市。有什么推荐去看的吗？",
            casualVersion: "Just got here today! Any must-see spots?",
            commonMistake: {
              wrong: "I just arrive today.",
              correct: "I just got in today.",
              explanation: "\"just arrive\" 语法不自然，推荐用 \"got in\"。",
            },
            formalityVariants: {
              casual: "Just got here today. Never been to this city before, actually. Any good recommendations?",
              standard: "I just got in today. First time in this city, actually. Any recommendations on what to see?",
              formal: "I've only just arrived today. This is actually my first visit to this city. Do you have any recommendations for points of interest?",
            },
          },
          {
            speaker: "them",
            role: "其他住客",
            textEn: "Oh, you have to check out the old town — it's amazing. And there's a free walking tour every morning at 10. I did it yesterday and it was totally worth it.",
            textZh: "哦，你一定要去老城区——太棒了。每天早上10点有免费步行导览。我昨天去了，非常值得。",
            keyPhrases: [
              { en: "old town", zh: "老城区" },
              { en: "free walking tour", zh: "免费步行导览" },
              { en: "totally worth it", zh: "非常值得" },
            ],
            alternativeExpressions: [
              { textEn: "Dude, the old town is a must! And there's this free walking tour at 10 every morning — I went yesterday and it was sick.", textZh: "兄弟，老城区必去！每天早上10点有个免费步行游——我昨天去了，太棒了。", actionHint: "dude = 兄弟（口语），sick = 太棒了（年轻人俚语）", frequency: "occasional" },
              { textEn: "Oh man, definitely hit up the old town. There's also a free walking tour every day at 10 AM — did it yesterday and loved it.", textZh: "哦天，一定要去老城区。每天早上10点还有免费步行游——我昨天去了超喜欢。", actionHint: "hit up = 去/逛（口语），loved it = 超喜欢", frequency: "common" },
              { textEn: "For sure — the historic district is amazing. Oh, and they do a free walking tour every morning at ten. Highly recommend it.", textZh: "当然——历史街区太棒了。对了，每天早上10点有免费步行游。强烈推荐。", actionHint: "historic district = 历史街区，highly recommend = 强烈推荐", frequency: "common" },
            ],
            casualVersion: "Oh, you gotta check out the old town – it's awesome. Plus, there's a free walking tour every morning at 10. Did it yesterday, totally worth it.",
            commonMistake: {
              wrong: "You must to see the old town. / It's worthy.",
              correct: "You have to check out the old town. / It was totally worth it.",
              explanation: "\"must to\" 语法错误；“值得”用 \"worth it\" 更自然。",
            },
            formalityVariants: {
              casual: "Oh, you gotta check out the old town – it's awesome. And there's a free walking tour daily at 10. Did it yesterday, totally worth it.",
              standard: "Oh, you have to check out the old town — it's amazing. And there's a free walking tour every morning at 10. I did it yesterday and it was totally worth it.",
              formal: "Oh, I highly recommend visiting the old town; it's quite remarkable. Additionally, there's a complimentary walking tour offered daily at 10 AM. I participated yesterday, and it proved to be an exceptionally worthwhile experience.",
            },
          },
          {
            speaker: "you",
            textEn: "A free walking tour? That sounds great! Where does it start?",
            textZh: "免费步行导览？听起来不错！从哪里出发？",
            casualVersion: "A free walking tour? Sounds awesome! Where's it start?",
            commonMistake: {
              wrong: "Where it start?",
              correct: "Where does it start?",
              explanation: "疑问句中缺少助动词 \"does\" 是常见错误。",
            },
            formalityVariants: {
              casual: "Free walking tour? Sounds awesome! Where's it start?",
              standard: "A free walking tour? That sounds great! Where does it start?",
              formal: "A complimentary walking tour, you say? That sounds absolutely splendid! Could you please inform me of its starting location?",
            },
          },
          {
            speaker: "them",
            role: "其他住客",
            textEn: "It starts at the main square — the guide wears a red umbrella so they're easy to spot. Just tip them at the end, whatever you think it's worth.",
            textZh: "从主广场出发——导游举红伞，很好认。结束时随意给小费就行，你觉得值多少就给多少。",
            keyPhrases: [
              { en: "main square", zh: "主广场" },
              { en: "easy to spot", zh: "很好认/很显眼" },
              { en: "tip them at the end", zh: "结束时给小费" },
            ],
            alternativeExpressions: [
              { textEn: "Meet at the main square — look for the person with a red umbrella. It's tip-based, so you just pay what you think it was worth at the end.", textZh: "在主广场集合——找拿红伞的那个人。是小费制的，结束时你觉得值多少就给多少。", actionHint: "tip-based = 小费制的", frequency: "common" },
              { textEn: "It kicks off at the big square downtown. The guide has a red umbrella so you can't miss them. It's technically free but you tip afterwards.", textZh: "在市中心大广场开始。导游拿红伞，不会找不到。名义上免费但结束后给小费。", actionHint: "kicks off = 开始，technically free = 名义上免费", frequency: "common" },
            ],
            casualVersion: "Starts at the main square – guide'll have a red umbrella, so they're easy to spot. Just tip 'em at the end, whatever you think it's worth.",
            culturalNote: "在西方国家，参与免费导览通常仍需付小费。",
            commonMistake: {
              wrong: "Just give tip at the end.",
              correct: "Just tip them at the end.",
              explanation: "“给小费”常说 \"tip someone\"，而不是 \"give tip\"。",
            },
            formalityVariants: {
              casual: "Main square. Guide'll have a red umbrella, easy to spot. Just tip 'em at the end, whatever you feel like.",
              standard: "It starts at the main square — the guide wears a red umbrella so they're easy to spot. Just tip them at the end, whatever you think it's worth.",
              formal: "The tour commences at the main square. The guide will be easily identifiable by a red umbrella. Participants are encouraged to offer a gratuity at the conclusion of the tour, commensurate with their perceived value of the experience.",
            },
          },
          {
            speaker: "you",
            textEn: "Thanks for the tip! By the way, I'm Wei. Nice to meet you.",
            textZh: "谢谢推荐！顺便说一下，我叫Wei。很高兴认识你。",
            casualVersion: "Thanks for the heads-up! Btw, I'm Wei. Nice to meet ya.",
            commonMistake: {
              wrong: "Thank you for your tip. / I am Wei.",
              correct: "Thanks for the tip! / I'm Wei.",
              explanation: "随意的对话中 \"Thanks for the tip!\" 更自然。\"I am\" 通常缩略为 \"I'm\"。",
            },
            formalityVariants: {
              casual: "Cheers for the heads-up! Btw, I'm Wei. Nice to meet ya.",
              standard: "Thanks for the tip! By the way, I'm Wei. Nice to meet you.",
              formal: "Thank you for that valuable information! Apropos of nothing, my name is Wei. It's a pleasure to make your acquaintance.",
            },
          },
          {
            speaker: "them",
            role: "其他住客",
            textEn: "I'm Sarah! Nice to meet you too. If you want company tomorrow, I'm actually going to a local market in the morning. You're welcome to join!",
            textZh: "我叫Sarah！也很高兴认识你。如果明天想有伴，我早上要去一个当地市场。欢迎一起来！",
            keyPhrases: [
              { en: "if you want company", zh: "如果你想有伴" },
              { en: "you're welcome to join", zh: "欢迎一起来" },
              { en: "local market", zh: "当地市场" },
            ],
            alternativeExpressions: [
              { textEn: "I'm Sarah! Nice to meet you! Hey, I'm heading to a local market tomorrow morning if you wanna tag along!", textZh: "我叫Sarah！很高兴认识你！嘿，明早我要去一个当地市场，你要不要一起来？", actionHint: "tag along = 跟着一起去", frequency: "common" },
              { textEn: "Sarah! Great to meet you, Wei. Oh — I'm checking out a market in the morning tomorrow. You should totally come if you're free!", textZh: "Sarah！很高兴认识你，Wei。对了——明天早上我要去逛个市场。有空的话一定来！", actionHint: "checking out = 去看看/去逛，you should totally come = 你一定得来", frequency: "common" },
            ],
            casualVersion: "I'm Sarah! You too. If you wanna come along tomorrow, I'm actually hitting up a local market in the morning. Feel free to join!",
            commonMistake: {
              wrong: "If you want companion tomorrow. / Welcome to join!",
              correct: "If you want company tomorrow. / You're welcome to join!",
              explanation: "\"company\" 指陪伴，而 \"companion\" 是指同伴。\"Welcome to join\" 需加 \"You're\"。",
            },
            formalityVariants: {
              casual: "I'm Sarah! You too. If you wanna tag along tomorrow, I'm actually checking out a local market in the morning. Come on down!",
              standard: "I'm Sarah! Nice to meet you too. If you want company tomorrow, I'm actually going to a local market in the morning. You're welcome to join!",
              formal: "I'm Sarah, and it's a pleasure to meet you as well. Should you desire companionship tomorrow, I plan to visit a local market in the morning. You would be most welcome to accompany me!",
            },
          },
        ],
      },
    ],
  },

  // ==================== 22. 特殊需求（无障碍/婴儿床） ====================
  {
    id: "accommodation-special-requests",
    category: "accommodation",
    titleZh: "特殊需求",
    titleEn: "Special Requests",
    description: "入住前或入住时提出特殊需求，如无障碍房间、婴儿床、额外毛巾等",
    otherRole: "前台",
    otherRoleIcon: "♿",
    flows: [
      {
        id: "special-needs",
        titleZh: "特殊需求沟通",
        titleEn: "Special Needs Communication",
        description: "入住时提出各种特殊住宿需求",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm checking in and I wanted to confirm a few special requests I made when I booked.",
            textZh: "你好，我来办入住，想确认一下预订时提的几个特殊要求。",
            casualVersion: "Hey, checking in, just wanna confirm some special requests I made booking.",
            commonMistake: {
              wrong: "I want to confirm some requests.",
              correct: "I wanted to confirm some requests.",
              explanation: "在美国，直接说 'I want' 听起来可能过于直接或生硬，用 'I wanted to' 或 'I'd like to' 更礼貌委婉。",
            },
            formalityVariants: {
              casual: "Hey, checking in, just wanna confirm some special requests I made booking.",
              standard: "Hi, I'm checking in and I wanted to confirm a few special requests I made when I booked.",
              formal: "Good afternoon. I am checking in and would appreciate it if you could confirm the special requests submitted with my reservation.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course, let me pull up your reservation. What requests did you make?",
            textZh: "当然，我查一下您的预订。您提了哪些要求？",
            keyPhrases: [
              { en: "pull up your reservation", zh: "查您的预订" },
              { en: "what requests", zh: "哪些要求" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, let me look up your booking. What special requests did you have?", textZh: "好的，我查一下您的预订。您有哪些特殊要求？", actionHint: "look up = 查询", frequency: "common" },
              { textEn: "Of course! Give me a sec to find your reservation. What did you ask for?", textZh: "当然！等我一下找到您的预订。您之前要求了什么？", actionHint: "give me a sec = 等一下", frequency: "common" },
            ],
            casualVersion: "Sure, let me pull up your res. What requests did you have?",
            formalityVariants: {
              casual: "Sure, let me pull up your res. What'd you request?",
              standard: "Of course, let me pull up your reservation. What requests did you make?",
              formal: "Certainly, allow me a moment to retrieve your reservation. Could you please specify the requests you submitted?",
            },
          },
          {
            speaker: "you",
            textEn: "I requested an accessible room on a lower floor, and I also asked for a baby crib in the room. We're traveling with our 10-month-old.",
            textZh: "我要了一个低楼层的无障碍房间，还要求放一张婴儿床。我们带着10个月大的宝宝一起旅行。",
            culturalNote:
              "accessible room（无障碍房间）有更宽的门、扶手和无门槛淋浴。即使不是残障人士也可以预订，带老人旅行时很实用。",
            casualVersion: "Requested an accessible room, lower floor, and a baby crib. Got a 10-month-old with us.",
            formalityVariants: {
              casual: "Accessible room, lower floor, and a crib. Got our 10-month-old with us.",
              standard: "I requested an accessible room on a lower floor, and I also asked for a baby crib in the room. We're traveling with our 10-month-old.",
              formal: "I had requested an accessible room situated on a lower floor, and additionally, a baby crib to be placed in the room. We are traveling with our infant, who is 10 months of age.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, I can see both requests here. We have you in Room 108 — it's an accessible room on the ground floor with a roll-in shower. The crib has already been set up in the room.",
            textZh: "是的，两个要求都在这里。给您安排了108房间——一楼的无障碍房间，有无门槛淋浴。婴儿床已经放在房间里了。",
            keyPhrases: [
              { en: "accessible room", zh: "无障碍房间" },
              { en: "ground floor", zh: "一楼" },
              { en: "roll-in shower", zh: "无门槛淋浴" },
              { en: "crib", zh: "婴儿床" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, got both noted here. You're in 108 — ground floor, wheelchair accessible with a walk-in shower. And the baby bed's already in there waiting for you.", textZh: "是的，两个都记了。您在108——一楼，轮椅无障碍房间有步入式淋浴。婴儿床已经放好了。", actionHint: "walk-in shower = roll-in shower 步入式淋浴", frequency: "common" },
              { textEn: "I see them both right here. Room 108 — first floor, ADA-accessible room with a roll-in shower. And the crib is all set up and ready to go.", textZh: "两个要求都在这里。108房间——一楼，ADA无障碍房间有无门槛淋浴。婴儿床已经布置好了。", actionHint: "ADA-accessible = 符合美国无障碍标准的，ready to go = 准备好了", frequency: "common" },
            ],
            casualVersion: "Yep, see 'em both. You're in 108 — ground floor, accessible, roll-in shower. Crib's already in there.",
            formalityVariants: {
              casual: "Yep, see 'em both. You're in 108 — ground floor, accessible, roll-in shower. Crib's already in there.",
              standard: "Yes, I can see both requests here. We have you in Room 108 — it's an accessible room on the ground floor with a roll-in shower. The crib has already been set up in the room.",
              formal: "Indeed, both requests are noted on your reservation. You have been assigned Room 108, which is an accessible room located on the ground floor, equipped with a roll-in shower. The baby crib has already been placed and prepared within the room.",
            },
          },
          {
            speaker: "you",
            textEn: "That's wonderful. Could we also get some extra towels and an extra pillow?",
            textZh: "太好了。能再多给几条毛巾和一个枕头吗？",
            casualVersion: "Awesome. Could we get some extra towels and another pillow?",
            formalityVariants: {
              casual: "Awesome. Can we get some extra towels and another pillow?",
              standard: "That's wonderful. Could we also get some extra towels and an extra pillow?",
              formal: "That is excellent. Would it be possible to request additional towels and an extra pillow, please?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Absolutely. I'll have housekeeping bring those to your room within the next 20 minutes. Anything else?",
            textZh: "当然可以。我让客房部在20分钟内送到您的房间。还需要别的吗？",
            keyPhrases: [
              { en: "housekeeping", zh: "客房部" },
              { en: "within the next 20 minutes", zh: "20分钟内" },
            ],
            alternativeExpressions: [
              { textEn: "No problem! I'll have someone bring those up to you in about 20 minutes. Need anything else?", textZh: "没问题！我让人大概20分钟送上去。还需要别的吗？", actionHint: "bring those up = 送上去", frequency: "common" },
              { textEn: "Sure thing. I'll get housekeeping to drop off extra towels and a pillow right away. Shouldn't take more than 20 minutes.", textZh: "好的。我让客房部马上送额外的毛巾和枕头过去。不超过20分钟。", actionHint: "drop off = 送过去", frequency: "common" },
            ],
            casualVersion: "Definitely. Housekeeping'll bring 'em up in the next 20. Need anything else?",
            formalityVariants: {
              casual: "Definitely. Housekeeping'll bring 'em up in the next 20. Need anything else?",
              standard: "Absolutely. I'll have housekeeping bring those to your room within the next 20 minutes. Anything else?",
              formal: "Certainly. I will arrange for housekeeping to deliver those items to your room within the next 20 minutes. Is there anything further you require?",
            },
          },
          {
            speaker: "you",
            textEn: "Actually, is there somewhere we could heat up baby formula? A microwave maybe?",
            textZh: "对了，有什么地方可以加热婴儿奶粉吗？比如微波炉？",
            casualVersion: "Oh, actually, is there somewhere to heat up baby formula? Like, a microwave?",
            commonMistake: {
              wrong: "Where is the microwave for baby formula?",
              correct: "Is there somewhere we could heat up baby formula? A microwave maybe?",
              explanation: "直接问 'Where is the microwave?' 过于生硬。委婉地询问是否有地方或设备可以做某事更自然。",
            },
            formalityVariants: {
              casual: "Oh, actually, is there somewhere to heat up baby formula? Like, a microwave?",
              standard: "Actually, is there somewhere we could heat up baby formula? A microwave maybe?",
              formal: "Excuse me, I was wondering if there is a facility available for heating baby formula. Perhaps a microwave, for instance?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "There's a microwave in the breakfast lounge that's available 24 hours. We also have a bottle warmer at the front desk you can borrow anytime.",
            textZh: "早餐休息室有一个24小时可用的微波炉。我们前台也有暖奶器，随时可以借用。",
            keyPhrases: [
              { en: "bottle warmer", zh: "暖奶器" },
              { en: "borrow anytime", zh: "随时借用" },
            ],
            alternativeExpressions: [
              { textEn: "There's a microwave in the breakfast area you can use anytime — it's open 24 hours. We've also got a bottle warmer here at the front desk if you want to borrow it.", textZh: "早餐区有个微波炉随时可以用——24小时开放。前台这里也有暖奶器，需要的话随时来借。", actionHint: "随时指24小时都可以", frequency: "common" },
              { textEn: "The breakfast lounge has a microwave that's always available. And just ask us at the desk — we keep a bottle warmer that parents can use whenever.", textZh: "早餐休息室有个微波炉一直可以用。来前台问就行——我们有暖奶器，家长随时可以用。", actionHint: "whenever = 任何时候", frequency: "common" },
            ],
            casualVersion: "There's a microwave in the breakfast lounge, it's 24/7. And we got a bottle warmer at the front desk you can borrow whenever.",
            formalityVariants: {
              casual: "There's a microwave in the breakfast lounge, it's 24/7. And we got a bottle warmer at the front desk you can borrow whenever.",
              standard: "There's a microwave in the breakfast lounge that's available 24 hours. We also have a bottle warmer at the front desk you can borrow anytime.",
              formal: "There is a microwave located in our breakfast lounge, which is accessible 24 hours a day. Additionally, we have a bottle warmer available for loan at the front desk at your convenience.",
            },
          },
        ],
      },
    ],
  },
];
