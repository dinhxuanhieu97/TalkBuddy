import type { PresetScene } from "../scene-types";

// ============================================================
// 基础模块 — Numbers & Currency Foundation
// 跨场景通用基础：数字认读、货币与价格
// ============================================================

export const FOUNDATION_SCENES: PresetScene[] = [
  // ==================== 数字认读 ====================
  {
    id: "foundation-numbers",
    category: "foundation",
    titleZh: "数字认读",
    titleEn: "Numbers in Context",
    description: "在真实场景中听懂和说出数字，包括航班号、房间号、时间等",
    otherRole: "对方",
    otherRoleIcon: "hash",
    flows: [
      // --- Flow 1: 基础数字 ---
      {
        id: "basic-numbers",
        titleZh: "基础数字",
        titleEn: "Basic Numbers (1-20)",
        description: "在实际场景中练习 1-20 的数字，如航班号、房间号、登机口",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "对方",
            textEn: "Your gate number is B7.",
            textZh: "您的登机口是 B7。",
            keyPhrases: [
              { en: "gate number", zh: "登机口号码" },
              { en: "B7", zh: "B7" },
            ],
            alternativeExpressions: [
              { textEn: "You're at gate B7.", textZh: "您在 B7 登机口。", actionHint: "意思一样，直接告诉你登机口", frequency: "common" },
              { textEn: "B7 — head to the B terminal.", textZh: "B7——去 B 航站楼。", actionHint: "顺带告诉你航站楼方向", frequency: "occasional" },
            ],
            casualVersion: "Gate B7.",
            formalityVariants: {
              casual: "It's gate B7.",
              standard: "Your gate number is B7.",
              formal: "Your departure gate will be B7.",
            },
          },
          {
            speaker: "you",
            textEn: "B7, got it. Thank you.",
            textZh: "B7，知道了。谢谢。",
            casualVersion: "B7, got it. Thanks.",
            formalityVariants: {
              casual: "B7, got it. Thanks.",
              standard: "B7, got it. Thank you.",
              formal: "Understood, B7. Thank you kindly.",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "You're in room 15, on the third floor.",
            textZh: "您在15号房间，三楼。",
            variations: [
              { textEn: "Your room number is fifteen. Take the elevator to floor three.", textZh: "您的房间号是15。乘电梯到三楼。" },
            ],
            keyPhrases: [
              { en: "room 15", zh: "15号房间" },
              { en: "third floor", zh: "三楼" },
            ],
            alternativeExpressions: [
              { textEn: "You'll be in fifteen, up on the third floor.", textZh: "您住15号，在三楼。", actionHint: "口语化说法，省略 room", frequency: "common" },
              { textEn: "I've got you in room fifteen. That's third floor.", textZh: "给您安排的是15号房，三楼。", actionHint: "前台常用说法", frequency: "common" },
            ],
            casualVersion: "Room 15, third floor.",
            formalityVariants: {
              casual: "It's room 15, third floor.",
              standard: "You're in room 15, on the third floor.",
              formal: "Your assigned room number is 15, located on the third floor.",
            },
          },
          {
            speaker: "you",
            textEn: "Room 15, third floor. Is that to the left or right out of the elevator?",
            textZh: "15号房间，三楼。出电梯后往左还是往右？",
            casualVersion: "15, third floor. Elevator: left or right?",
            formalityVariants: {
              casual: "15, third floor. Elevator: left or right?",
              standard: "Room 15, third floor. Is that to the left or right out of the elevator?",
              formal: "Room 15, on the third floor. May I inquire if that is to the left or right upon exiting the elevator?",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "Turn left. It's the fourth door on your right.",
            textZh: "往左转。右手边第四个门。",
            keyPhrases: [
              { en: "fourth door", zh: "第四个门" },
              { en: "on your right", zh: "右手边" },
            ],
            alternativeExpressions: [
              { textEn: "Go left, fourth door on the right. Can't miss it.", textZh: "往左走，右手第四个门。很好找。", actionHint: "简短指路，can't miss it 表示容易找", frequency: "common" },
              { textEn: "Hang a left, and it's the fourth one down on your right side.", textZh: "左转，右边数第四个。", actionHint: "hang a left 是口语说法=turn left", frequency: "occasional" },
            ],
            casualVersion: "Go left. Fourth door on your right.",
            formalityVariants: {
              casual: "Left. Fourth door, right side.",
              standard: "Turn left. It's the fourth door on your right.",
              formal: "Kindly proceed to the left. It will be the fourth door located on your right-hand side.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. And what's the Wi-Fi password?",
            textZh: "明白了。Wi-Fi 密码是什么？",
            casualVersion: "Got it. Wi-Fi password?",
            commonMistake: {
              wrong: "What is the Wi-Fi password?",
              correct: "What's the Wi-Fi password?",
              explanation: "口语中用缩写更自然。",
            },
            formalityVariants: {
              casual: "Got it. Wi-Fi password?",
              standard: "Got it. And what's the Wi-Fi password?",
              formal: "Understood. May I also inquire about the Wi-Fi password, please?",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "The password is 1-8-1-2-6-0. That's eighteen, twelve, sixty.",
            textZh: "密码是 1-8-1-2-6-0。就是 eighteen, twelve, sixty。",
            keyPhrases: [
              { en: "password", zh: "密码" },
              { en: "eighteen", zh: "十八" },
              { en: "twelve", zh: "十二" },
            ],
            responseTip: "英文里经常把数字两个一组念，比如 18-12-60",
            alternativeExpressions: [
              { textEn: "Wi-Fi code is one-eight-one-two-six-oh.", textZh: "Wi-Fi 密码是 1-8-1-2-6-0。", actionHint: "逐个念数字，oh 代替 zero", frequency: "common" },
              { textEn: "It's 181260 — eighteen, twelve, sixty.", textZh: "是 181260——十八、十二、六十。", actionHint: "两个一组念更快", frequency: "common" },
            ],
            casualVersion: "It's 1-8-1-2-6-0. Like, eighteen, twelve, sixty.",
            formalityVariants: {
              casual: "It's 1-8-1-2-6-0. Eighteen, twelve, sixty.",
              standard: "The password is 1-8-1-2-6-0. That's eighteen, twelve, sixty.",
              formal: "The Wi-Fi password is 1-8-1-2-6-0. For clarification, that is eighteen, twelve, sixty.",
            },
          },
          {
            speaker: "you",
            textEn: "1-8-1-2-6-0. Let me try... Great, it works!",
            textZh: "1-8-1-2-6-0。我试试……好的，连上了！",
            casualVersion: "1-8-1-2-6-0. Lemme try... Cool, it works!",
            formalityVariants: {
              casual: "1-8-1-2-6-0. Lemme try... Cool, it works!",
              standard: "1-8-1-2-6-0. Let me try... Great, it works!",
              formal: "1-8-1-2-6-0. Allow me to attempt the connection... Excellent, it is functioning correctly!",
            },
          },
        ],
      },

      // --- Flow 2: 大数和组合 ---
      {
        id: "large-numbers",
        titleZh: "大数和组合",
        titleEn: "Larger Numbers & Combinations",
        description: "几十、几百、几千的数字，用于价格、地址、电话号码",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "对方",
            textEn: "The address is 350 West Oak Street.",
            textZh: "地址是西橡树街350号。",
            variations: [
              { textEn: "It's at three-fifty West Oak Street.", textZh: "在西橡树街三五零号。" },
            ],
            keyPhrases: [
              { en: "350", zh: "三百五十" },
              { en: "address", zh: "地址" },
            ],
            responseTip: "地址中的数字 350 通常念作 three-fifty 或 three hundred fifty",
            alternativeExpressions: [
              { textEn: "It's three-fifty West Oak.", textZh: "西橡树街350号。", actionHint: "省略 Street，日常口语很常见", frequency: "common" },
              { textEn: "You wanna go to 350 West Oak? It's right off Main.", textZh: "你要去西橡树街350号？就在主街旁边。", actionHint: "wanna = want to，right off = 紧挨着", frequency: "occasional" },
            ],
            casualVersion: "Address is 350 West Oak Street.",
            formalityVariants: {
              casual: "Address is 350 West Oak Street.",
              standard: "The address is 350 West Oak Street.",
              formal: "The address for your reference is 350 West Oak Street.",
            },
          },
          {
            speaker: "you",
            textEn: "350 West Oak Street. How far is that from here?",
            textZh: "西橡树街350号。离这里多远？",
            casualVersion: "350 West Oak Street. How far from here?",
            formalityVariants: {
              casual: "350 West Oak Street. How far from here?",
              standard: "350 West Oak Street. How far is that from here?",
              formal: "350 West Oak Street. Could you please tell me the approximate distance from here?",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "About 2 miles. If you take an Uber, it should be around $14 or $15.",
            textZh: "大约2英里。打 Uber 的话大概14或15美元。",
            keyPhrases: [
              { en: "2 miles", zh: "2英里" },
              { en: "around $14 or $15", zh: "大概14或15美元" },
            ],
            alternativeExpressions: [
              { textEn: "Couple miles out. An Uber'll run you like fifteen bucks.", textZh: "几英里远。打 Uber 大概十五块。", actionHint: "bucks = dollars 的口语说法", frequency: "common" },
              { textEn: "It's not far — maybe two miles. Ride share would be around fifteen.", textZh: "不远——大概两英里。打车大约十五块。", actionHint: "ride share 泛指网约车", frequency: "common" },
            ],
            casualVersion: "Like, 2 miles. Uber's probably 'round 14, 15 bucks.",
            formalityVariants: {
              casual: "Like, 2 miles. Uber's probably 'round 14, 15 bucks.",
              standard: "About 2 miles. If you take an Uber, it should be around $14 or $15.",
              formal: "The distance is approximately 2 miles. Should you opt for an Uber, the fare is estimated to be between $14 and $15.",
            },
          },
          {
            speaker: "you",
            textEn: "Can you write down the full address for me? And maybe the phone number too?",
            textZh: "能帮我写下完整地址吗？电话号码也要。",
            casualVersion: "Can you write down the address for me? And maybe the number too?",
            commonMistake: {
              wrong: "Write down the address for me?",
              correct: "Can you write down the full address for me?",
              explanation: "直接说 Write down 是命令语气，用 Can you 更礼貌",
            },
            formalityVariants: {
              casual: "Can you write down the address for me? And maybe the number too?",
              standard: "Can you write down the full address for me? And maybe the phone number too?",
              formal: "Would you be so kind as to write down the complete address for me? And perhaps the telephone number as well?",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "Sure. The phone number is 415-867-5309. That's area code four-one-five, then eight-six-seven, five-three-oh-nine.",
            textZh: "好的。电话号码是 415-867-5309。区号 four-one-five，然后 eight-six-seven, five-three-oh-nine。",
            keyPhrases: [
              { en: "area code", zh: "区号" },
              { en: "four-one-five", zh: "415" },
            ],
            culturalNote: "美国电话号码格式：3位区号 + 7位号码（分成 3+4）。零通常读作 oh。",
            alternativeExpressions: [
              { textEn: "Yeah, it's 415-867-5309. Want me to write it down?", textZh: "是 415-867-5309。要我写下来吗？", actionHint: "对方主动提出写下来", frequency: "common" },
              { textEn: "The number's four-fifteen, eight-six-seven, fifty-three-oh-nine.", textZh: "号码是四一五，八六七，五三零九。", actionHint: "组合念法，更快但需要注意听", frequency: "occasional" },
            ],
            casualVersion: "Yeah. Number's 415-867-5309. That's area code 415, then 867, 5309.",
            commonMistake: {
              wrong: "The phone number is four one five, eight six seven, five three zero nine.",
              correct: "That's area code four-one-five, then eight-six-seven, five-three-oh-nine.",
              explanation: "电话号码中的'0'常读作'oh'，而非'zero'",
            },
            formalityVariants: {
              casual: "Yeah. Number's 415-867-5309. That's area code 415, then 867, 5309.",
              standard: "Sure. The phone number is 415-867-5309. That's area code four-one-five, then eight-six-seven, five-three-oh-nine.",
              formal: "Certainly. The telephone number is 415-867-5309. To clarify, that is area code four-one-five, followed by eight-six-seven, five-three-oh-nine.",
            },
          },
          {
            speaker: "you",
            textEn: "415-867-5309. Got it. That's a San Francisco number, right?",
            textZh: "415-867-5309。记下了。这是旧金山的号码，对吧？",
            casualVersion: "415-867-5309. Got it. SF number, right?",
            commonMistake: {
              wrong: "I got it.",
              correct: "Got it.",
              explanation: "Got it 更自然地表示理解，I got it 听起来略显多余",
            },
            formalityVariants: {
              casual: "415-867-5309. Got it. SF number, right?",
              standard: "415-867-5309. Got it. That's a San Francisco number, right?",
              formal: "415-867-5309. Understood. Am I correct in assuming that is a San Francisco area code?",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "That's right! 415 is the San Francisco area code. By the way, the restaurant seats about 200 people, so you might want a reservation. They're usually booked 2 to 3 weeks out.",
            textZh: "没错！415 是旧金山区号。对了，那家餐厅大约能坐200人，建议提前预订。通常要提前2到3周。",
            keyPhrases: [
              { en: "200 people", zh: "200人" },
              { en: "2 to 3 weeks", zh: "2到3周" },
              { en: "booked", zh: "订满了" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, 415 is SF. Oh, and that place is super popular — seats like 200 people but they're booked out two, three weeks ahead.", textZh: "对，415 是旧金山。那家店特火——能坐200人但得提前两三周订。", actionHint: "SF = San Francisco 的缩写，booked out = 订满", frequency: "common" },
              { textEn: "That's right, it's an SF number. Heads up though, that restaurant fills up fast. You'd wanna book a couple weeks in advance.", textZh: "对，旧金山的号。不过提醒一下，那家餐厅很快就满了。最好提前几周订。", actionHint: "heads up = 提醒你一下", frequency: "occasional" },
            ],
            casualVersion: "Yup! 415's SF's area code. Btw, restaurant seats like 200, so you might wanna reserve. They're usually booked 2-3 weeks out.",
            culturalNote: "美国餐厅很受欢迎时，需要提前很久预订。",
            formalityVariants: {
              casual: "Yup! 415's SF's area code. Btw, restaurant seats like 200, so you might wanna reserve. They're usually booked 2-3 weeks out.",
              standard: "That's right! 415 is the San Francisco area code. By the way, the restaurant seats about 200 people, so you might want a reservation. They're usually booked 2 to 3 weeks out.",
              formal: "Indeed. 415 is the designated area code for San Francisco. Incidentally, the restaurant accommodates approximately 200 patrons, therefore a reservation would be advisable. They are typically fully booked two to three weeks in advance.",
            },
          },
          {
            speaker: "you",
            textEn: "Two to three weeks? That's a popular place! I'll call them right away.",
            textZh: "2到3周？真够火的！我马上打电话。",
            casualVersion: "2-3 weeks? Wow, popular spot! I'll call 'em right away.",
            commonMistake: {
              wrong: "Very popular place!",
              correct: "That's a popular place!",
              explanation: "直接说 Very popular place 听起来不太自然，用 That's a popular place 更地道",
            },
            formalityVariants: {
              casual: "2-3 weeks? Wow, popular spot! I'll call 'em right away.",
              standard: "Two to three weeks? That's a popular place! I'll call them right away.",
              formal: "Two to three weeks? That certainly indicates a highly sought-after establishment! I shall contact them immediately.",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "Good idea. And just so you know, dinner for two there usually runs around $150 to $200, not including drinks.",
            textZh: "好主意。提一下，两个人的晚餐通常在150到200美元之间，不含饮料。",
            keyPhrases: [
              { en: "$150 to $200", zh: "150到200美元" },
              { en: "not including", zh: "不包含" },
              { en: "dinner for two", zh: "两人晚餐" },
            ],
            alternativeExpressions: [
              { textEn: "FYI, expect to spend a hundred fifty to two hundred bucks for two, and that's before drinks.", textZh: "提前说一下，两个人大概花一百五到两百，还不算酒水。", actionHint: "FYI = for your information 口语很常用", frequency: "common" },
              { textEn: "Just a heads up — dinner for two'll set you back around one-fifty, two hundred. Drinks are extra.", textZh: "提醒一下——两人晚餐大概要一百五到两百。酒水另算。", actionHint: "set you back = 花费你（口语）", frequency: "occasional" },
            ],
            casualVersion: "Good call. Just so you know, dinner for two there's usually around 150-200 bucks, no drinks.",
            culturalNote: "美国高档餐厅小费（15-20%）是额外付的，不包含在价格里。",
            formalityVariants: {
              casual: "Good call. Just so you know, dinner for two there's usually around 150-200 bucks, no drinks.",
              standard: "Good idea. And just so you know, dinner for two there usually runs around $150 to $200, not including drinks.",
              formal: "An excellent idea. Furthermore, for your awareness, a dinner for two at that establishment typically ranges from $150 to $200, exclusive of beverages.",
            },
          },
        ],
      },

      // --- Flow 3: 时间数字 ---
      {
        id: "time-numbers",
        titleZh: "时间数字",
        titleEn: "Time, Dates & Durations",
        description: "报时间、日期和时长，如航班时间、退房时间、预约时间",
        difficulty: "advanced",
        turns: [
          {
            speaker: "them",
            role: "对方",
            textEn: "Your flight departs at 3:45 PM from Gate C11.",
            textZh: "您的航班下午3:45从 C11 登机口起飞。",
            variations: [
              { textEn: "Departure time is three forty-five in the afternoon, Gate C11.", textZh: "起飞时间是下午三点四十五，C11登机口。" },
            ],
            keyPhrases: [
              { en: "3:45 PM", zh: "下午3:45" },
              { en: "departs", zh: "起飞/出发" },
            ],
            responseTip: "英文时间: 3:45 读作 three forty-five，也可以说 a quarter to four",
            alternativeExpressions: [
              { textEn: "You're leaving at three forty-five out of C11.", textZh: "您三点四十五从 C11 出发。", actionHint: "leaving = departs 的口语替换", frequency: "common" },
              { textEn: "Departure's at a quarter to four, Gate C11.", textZh: "起飞时间差一刻四点，C11 登机口。", actionHint: "a quarter to four = 3:45 的另一种说法", frequency: "occasional" },
            ],
            casualVersion: "Flight leaves at 3:45 from C11.",
            formalityVariants: {
              casual: "Flight's at 3:45, C11.",
              standard: "Your flight departs at 3:45 PM from Gate C11.",
              formal: "Your scheduled departure time is 3:45 PM, from Gate C11.",
            },
          },
          {
            speaker: "you",
            textEn: "3:45 PM. What time should I be at the gate?",
            textZh: "下午3:45。我应该几点到登机口？",
            casualVersion: "3:45. What time should I be at the gate?",
            commonMistake: {
              wrong: "When should I arrive the gate?",
              correct: "What time should I be at the gate?",
              explanation: "arrive at the gate 或 be at the gate，不能直接接 gate。",
            },
            formalityVariants: {
              casual: "3:45? When should I be at the gate?",
              standard: "3:45 PM. What time should I be at the gate?",
              formal: "Confirmed, 3:45 PM. Could you please advise what time I should present myself at the gate?",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "Boarding starts at 3:15, so please be there by 3:00 at the latest.",
            textZh: "3:15开始登机，所以请最迟3:00到。",
            keyPhrases: [
              { en: "boarding starts at 3:15", zh: "3:15开始登机" },
              { en: "at the latest", zh: "最迟" },
            ],
            alternativeExpressions: [
              { textEn: "They start boarding at three-fifteen, so try to be there by three.", textZh: "三点十五开始登机，尽量三点到。", actionHint: "try to be there 比 please be there 更口语", frequency: "common" },
              { textEn: "Boarding's at quarter after three. Don't be late — three o'clock sharp at the gate.", textZh: "三点一刻登机。别迟到——三点整到登机口。", actionHint: "quarter after = quarter past, sharp = 整点", frequency: "occasional" },
            ],
            casualVersion: "Boarding starts at 3:15, so just be there by 3 at the latest.",
            formalityVariants: {
              casual: "Boarding starts at 3:15, so just be there by 3.",
              standard: "Boarding starts at 3:15, so please be there by 3:00 at the latest.",
              formal: "Boarding is scheduled to commence at 3:15 PM, therefore we request that you arrive at the gate no later than 3:00 PM.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. And what time does my hotel check-out need to be?",
            textZh: "明白了。酒店退房时间是几点？",
            casualVersion: "Got it. So, what time's hotel checkout?",
            commonMistake: {
              wrong: "What time must I check-out?",
              correct: "What time does my hotel check-out need to be?",
              explanation: "must 在日常交流中通常表示强制性，听起来不太自然，用 need to 更柔和。",
            },
            formalityVariants: {
              casual: "Got it. So, what time's checkout?",
              standard: "Got it. And what time does my hotel check-out need to be?",
              formal: "Understood. Could you please inform me of the designated check-out time for my hotel?",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "Check-out is at 11 AM. But you can request a late check-out until 1 PM for an extra $30.",
            textZh: "退房时间是上午11点。但可以申请延迟退房到下午1点，额外收30美元。",
            keyPhrases: [
              { en: "check-out is at 11 AM", zh: "退房时间是上午11点" },
              { en: "late check-out", zh: "延迟退房" },
              { en: "until 1 PM", zh: "到下午1点" },
            ],
            alternativeExpressions: [
              { textEn: "You gotta be out by eleven. But for thirty bucks extra, we can push it to one.", textZh: "十一点前退房。不过多付三十块可以延到一点。", actionHint: "gotta = got to, push it 表示延后", frequency: "common" },
              { textEn: "Check-out's eleven, but we do late check-out till one if you want — it's an extra thirty.", textZh: "退房十一点，不过可以延迟到一点——多收三十。", actionHint: "we do = we offer 的口语说法", frequency: "common" },
            ],
            casualVersion: "Checkout's at 11 AM. But you can get late checkout 'til 1 for an extra $30.",
            formalityVariants: {
              casual: "Checkout's at 11 AM. Can get late checkout 'til 1 PM for $30 extra.",
              standard: "Check-out is at 11 AM. But you can request a late check-out until 1 PM for an extra $30.",
              formal: "The standard check-out time is 11:00 AM. However, a late check-out option is available until 1:00 PM for an additional charge of $30.",
            },
          },
          {
            speaker: "you",
            textEn: "I think 11 AM is fine. My flight isn't until 3:45, so I'll have plenty of time.",
            textZh: "11点就行。航班3:45才走，时间够用。",
            casualVersion: "11 AM's fine. Flight's not 'til 3:45, so I got plenty of time.",
            commonMistake: {
              wrong: "My flight is 3:45.",
              correct: "My flight isn't until 3:45.",
              explanation: "直接说 'is 3:45' 漏掉了 '直到那时才' 的时间限制感，用 'isn't until' 更自然。",
            },
            formalityVariants: {
              casual: "11 AM's fine. Flight's not 'til 3:45, so I got plenty of time.",
              standard: "I think 11 AM is fine. My flight isn't until 3:45, so I'll have plenty of time.",
              formal: "I believe 11:00 AM will be sufficient. My flight is not scheduled to depart until 3:45 PM, allowing for ample time.",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "The airport is about a 45-minute drive. With traffic, maybe an hour and fifteen minutes. So you'll want to leave by 1:30 at the latest.",
            textZh: "到机场大约开45分钟。堵车的话可能一个小时十五分钟。所以最迟1:30出发。",
            keyPhrases: [
              { en: "45-minute drive", zh: "开车45分钟" },
              { en: "an hour and fifteen minutes", zh: "一个小时十五分钟" },
              { en: "leave by 1:30", zh: "1:30之前出发" },
            ],
            culturalNote: "美国人习惯用12小时制说时间，配合 AM/PM。1:30 PM 就是下午一点半。",
            alternativeExpressions: [
              { textEn: "It's like forty-five minutes without traffic, but with traffic, could be over an hour. I'd leave by one-thirty to be safe.", textZh: "不堵车四十五分钟，堵的话可能超过一小时。保险起见一点半出发。", actionHint: "to be safe = 保险起见", frequency: "common" },
              { textEn: "Figure forty-five minutes to an hour fifteen. You'll want to head out no later than one-thirty.", textZh: "算四十五分钟到一小时十五分钟吧。最迟一点半出发。", actionHint: "figure = 估计, head out = 出发", frequency: "occasional" },
            ],
            casualVersion: "Airport's like a 45-minute drive. With traffic, maybe an hour fifteen. So you'll wanna leave by 1:30 latest.",
            formalityVariants: {
              casual: "Airport's like a 45-min drive. With traffic, maybe an hour fifteen. So you'll wanna leave by 1:30 latest.",
              standard: "The airport is about a 45-minute drive. With traffic, maybe an hour and fifteen minutes. So you'll want to leave by 1:30 at the latest.",
              formal: "The approximate travel time to the airport is 45 minutes. However, factoring in potential traffic, this could extend to one hour and fifteen minutes. Therefore, I would advise departing no later than 1:30 PM.",
            },
          },
          {
            speaker: "you",
            textEn: "So check out at 11, grab lunch, and leave by 1:30. Sounds like a good plan.",
            textZh: "那就11点退房，吃午饭，1:30出发。听起来不错。",
            casualVersion: "So, checkout at 11, grab lunch, leave by 1:30. Sounds good.",
            commonMistake: {
              wrong: "So check out 11, eat lunch, then leave 1:30.",
              correct: "So check out at 11, grab lunch, and leave by 1:30.",
              explanation: "'at 11' 和 'by 1:30' 是关键介词， 'grab lunch' 比 'eat lunch' 更地道随意。",
            },
            formalityVariants: {
              casual: "Okay, checkout at 11, lunch, leave by 1:30. Sounds good.",
              standard: "So check out at 11, grab lunch, and leave by 1:30. Sounds like a good plan.",
              formal: "Therefore, I shall check out at 11:00 AM, have lunch, and depart by 1:30 PM. That appears to be a well-structured plan.",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "By the way, today is March 15th. Your return flight is on the 22nd, right? That's exactly one week from today.",
            textZh: "对了，今天是3月15日。您的回程航班是22号，对吧？正好从今天算一周。",
            keyPhrases: [
              { en: "March 15th", zh: "3月15日" },
              { en: "the 22nd", zh: "22号" },
              { en: "one week from today", zh: "从今天起一周" },
            ],
            responseTip: "日期: March 15th 读作 March fifteenth，the 22nd 读作 the twenty-second",
            alternativeExpressions: [
              { textEn: "Oh hey, it's the fifteenth today. You're flying back on the twenty-second, yeah? That's a week from now.", textZh: "哦对了，今天十五号。你二十二号飞回去，对吧？正好一周。", actionHint: "yeah? = right? 口语确认", frequency: "common" },
              { textEn: "Just so you know, today's March fifteenth and your return is a week out — the twenty-second.", textZh: "提一下，今天三月十五号，回程是一周后——二十二号。", actionHint: "a week out = 一周后", frequency: "occasional" },
            ],
            casualVersion: "Oh, btw, today's March 15th. Return flight's on the 22nd, right? That's exactly a week from today.",
            culturalNote: "美国口语日期说 'March 15th' 更常见，写时用 '3/15'。",
            commonMistake: {
              wrong: "Today is March fifteen.",
              correct: "Today is March 15th.",
              explanation: "日期数字通常用序数词 (ordinal numbers)，如 '15th' 而非 '15'。",
            },
            formalityVariants: {
              casual: "Oh, btw, today's March 15th. Return flight's on the 22nd, right? That's exactly a week from today.",
              standard: "By the way, today is March 15th. Your return flight is on the 22nd, right? That's exactly one week from today.",
              formal: "Just to confirm, today is March 15th. Your return flight is scheduled for the 22nd, which is precisely one week from this current date, correct?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, the 22nd. A one-week trip goes by so fast!",
            textZh: "是的，22号。一周的旅行过得真快！",
            casualVersion: "Yeah, 22nd. Week flew by!",
            commonMistake: {
              wrong: "A trip of one week goes so fast!",
              correct: "A one-week trip goes by so fast!",
              explanation: "'A one-week trip' 是更自然的修饰名词的方式，类似 'a two-hour movie'。",
            },
            formalityVariants: {
              casual: "Yeah, 22nd. Week flew by!",
              standard: "Yes, the 22nd. A one-week trip goes by so fast!",
              formal: "Indeed, the 22nd. It seems that this one-week excursion has elapsed rather quickly.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 货币与价格 ====================
  {
    id: "foundation-currency",
    category: "foundation",
    titleZh: "货币与价格",
    titleEn: "Currency & Prices",
    description: "在购物、餐饮、出行中听懂和使用价格相关表达",
    otherRole: "收银员",
    otherRoleIcon: "wallet",
    flows: [
      // --- Flow 1: 听懂价格 ---
      {
        id: "understanding-prices",
        titleZh: "听懂价格",
        titleEn: "Understanding Prices",
        description: "在商店、餐厅等场景中听懂各种价格表达方式",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "How much is this T-shirt?",
            textZh: "这件T恤多少钱？",
            casualVersion: "What's this T-shirt go for?",
            formalityVariants: {
              casual: "What's this tee go for?",
              standard: "How much is this T-shirt?",
              formal: "Excuse me, could you please tell me the price of this T-shirt?",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "That one is $23.50.",
            textZh: "那件23.50美元。",
            variations: [
              { textEn: "That'll be twenty-three fifty.", textZh: "二十三块五。" },
              { textEn: "It's twenty-three dollars and fifty cents.", textZh: "二十三美元五十美分。" },
            ],
            keyPhrases: [
              { en: "$23.50", zh: "23.50美元" },
              { en: "twenty-three fifty", zh: "二十三块五" },
            ],
            responseTip: "美元价格常省略 dollars: twenty-three fifty 就是 $23.50",
            alternativeExpressions: [
              { textEn: "That's twenty-three fifty.", textZh: "二十三块五。", actionHint: "最常见的口语说法，省略 dollars", frequency: "common" },
              { textEn: "This one? It's on the rack for twenty-three and change.", textZh: "这件？标价二十三块多。", actionHint: "and change = 多一点零头", frequency: "occasional" },
            ],
            casualVersion: "That one's twenty-three fifty.",
            formalityVariants: {
              casual: "That one's $23.50.",
              standard: "That one is $23.50.",
              formal: "The price for that particular item is $23.50.",
            },
          },
          {
            speaker: "you",
            textEn: "And this jacket? It doesn't have a price tag.",
            textZh: "这件夹克呢？上面没有标价。",
            casualVersion: "This jacket? No tag.",
            commonMistake: {
              wrong: "It has no price tag.",
              correct: "It doesn't have a price tag.",
              explanation: "直接翻译“没有”听起来生硬，用'doesn't have'更自然",
            },
            formalityVariants: {
              casual: "This jacket? No price on it.",
              standard: "And this jacket? It doesn't have a price tag.",
              formal: "Pardon me, but regarding this jacket, I notice there isn't a price tag attached.",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Let me check... That jacket is $89.99. But it's on sale this week, so it's actually $67.49.",
            textZh: "我查一下……那件夹克89.99美元。不过这周打折，实际是67.49美元。",
            keyPhrases: [
              { en: "price tag", zh: "价签/标价" },
              { en: "$89.99", zh: "89.99美元" },
              { en: "on sale", zh: "打折" },
              { en: "$67.49", zh: "67.49美元" },
            ],
            alternativeExpressions: [
              { textEn: "Hmm, let me look it up... It's eighty-nine ninety-nine, but it's marked down to sixty-seven forty-nine this week.", textZh: "我查一下……原价八十九九十九，这周降到六十七四十九。", actionHint: "marked down = 降价", frequency: "common" },
              { textEn: "That one's normally ninety bucks, but we got it on sale right now — sixty-seven forty-nine.", textZh: "那件正常价九十块，不过现在打折——六十七四十九。", actionHint: "bucks = dollars，口语中常把 89.99 约说成 ninety", frequency: "common" },
            ],
            casualVersion: "Lemme check... $89.99, but it's on sale this week, so $67.49.",
            formalityVariants: {
              casual: "Hold on... It's usually $89.99, but this week, it's just $67.49.",
              standard: "Let me check... That jacket is $89.99. But it's on sale this week, so it's actually $67.49.",
              formal: "One moment, please. The jacket is originally priced at $89.99; however, we are running a special promotion this week, reducing the price to $67.49.",
            },
          },
          {
            speaker: "you",
            textEn: "Nice! I'll take both. What's the total?",
            textZh: "不错！两件都要。总共多少？",
            casualVersion: "Sweet! I'll grab both. What's the damage?",
            culturalNote: "“What's the damage?”是问总价的俚语，语气轻松幽默。",
            commonMistake: {
              wrong: "I want both.",
              correct: "I'll take both.",
              explanation: "直接说 'I want' 听起来过于生硬，'I'll take' 更礼貌自然。",
            },
            formalityVariants: {
              casual: "Cool! Yeah, I'll take 'em both. Total?",
              standard: "Nice! I'll take both. What's the total?",
              formal: "Excellent! I've decided to purchase both items. Could you please provide me with the total cost?",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "The T-shirt is $23.50 and the jacket is $67.49. Your subtotal is $90.99. With tax, your total comes to $98.87.",
            textZh: "T恤23.50美元，夹克67.49美元。小计90.99美元。加税后总计98.87美元。",
            keyPhrases: [
              { en: "subtotal", zh: "小计" },
              { en: "with tax", zh: "加税后" },
              { en: "total comes to", zh: "总计" },
            ],
            culturalNote: "美国商品标价不含税。结账时会加上当地消费税（sales tax），各州税率不同，一般 6%-10%。",
            alternativeExpressions: [
              { textEn: "OK so the shirt's twenty-three fifty, jacket's sixty-seven forty-nine, that puts you at ninety-oh-ninety-nine before tax. After tax, ninety-eight eighty-seven.", textZh: "好，T恤二十三五十，夹克六十七四十九，税前九十点九九。税后九十八八十七。", actionHint: "收银员快速报价的节奏", frequency: "common" },
              { textEn: "Your subtotal is ninety-ninety-nine. With the tax it comes out to ninety-eight eighty-seven.", textZh: "小计九十点九九。加税后是九十八八十七。", actionHint: "comes out to = 最终是", frequency: "common" },
            ],
            casualVersion: "T-shirt $23.50, jacket $67.49. Subtotal $90.99. With tax, total $98.87.",
            formalityVariants: {
              casual: "Okay, so the tee's $23.50, jacket's $67.49. Subtotal's $90.99. After tax, it'll be $98.87.",
              standard: "The T-shirt is $23.50 and the jacket is $67.49. Your subtotal is $90.99. With tax, your total comes to $98.87.",
              formal: "Certainly, the T-shirt is priced at $23.50, and the jacket is $67.49. This brings your subtotal to $90.99. Including the applicable sales tax, your grand total will be $98.87.",
            },
          },
          {
            speaker: "you",
            textEn: "$98.87? I thought it'd be around $90. Oh right, the tax.",
            textZh: "98.87美元？我以为大概90。哦对了，还有税。",
            casualVersion: "$98.87? Thought it'd be 'bout ninety. Oh, right, tax.",
            culturalNote: "美国标价通常不含税，结账时会加上。中国通常标价含税。",
            formalityVariants: {
              casual: "$98.87? Huh, figured it'd be closer to ninety. Oh, right, tax.",
              standard: "$98.87? I thought it'd be around $90. Oh right, the tax.",
              formal: "$98.87? I had estimated the total to be closer to $90. Ah, yes, I nearly forgot about the sales tax.",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Yes, the sales tax here is 8.625%. Would you like a bag?",
            textZh: "是的，这里消费税是 8.625%。需要袋子吗？",
            keyPhrases: [
              { en: "sales tax", zh: "消费税" },
              { en: "8.625%", zh: "百分之八点六二五" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, tax here is about eight and a half percent. Need a bag?", textZh: "是的，这里税差不多八个半点。要袋子吗？", actionHint: "约数说法 eight and a half percent", frequency: "common" },
              { textEn: "That's the tax — eight point six-two-five percent. Want a bag for those?", textZh: "那是税——百分之八点六二五。要装袋吗？", actionHint: "逐位念小数", frequency: "occasional" },
            ],
            casualVersion: "Yeah, sales tax here's 8.625%. Need a bag?",
            culturalNote: "在美国，商家常会问顾客是否需要购物袋，有时袋子还会收费。",
            formalityVariants: {
              casual: "Yep, sales tax is 8.625% here. Want a bag?",
              standard: "Yes, the sales tax here is 8.625%. Would you like a bag?",
              formal: "That is correct; the sales tax rate in this location is 8.625%. May I inquire if you require a bag for your purchases?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please. Here's my card.",
            textZh: "要的。给您卡。",
            casualVersion: "Yeah, thanks. Here's my card.",
            formalityVariants: {
              casual: "Yeah, please. Card's right here.",
              standard: "Yes, please. Here's my card.",
              formal: "Yes, thank you. Here is my credit card for payment.",
            },
          },
        ],
      },

      // --- Flow 2: 找零与支付 ---
      {
        id: "payment-change",
        titleZh: "找零与支付",
        titleEn: "Payment & Change",
        description: "现金找零、刷卡支付、小费等场景",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "收银员",
            textEn: "Your total is $16.75. How would you like to pay?",
            textZh: "总计16.75美元。您怎么付？",
            variations: [
              { textEn: "That'll be sixteen seventy-five. Cash or card?", textZh: "十六块七毛五。现金还是刷卡？" },
            ],
            keyPhrases: [
              { en: "how would you like to pay", zh: "怎么付款" },
              { en: "cash or card", zh: "现金还是刷卡" },
            ],
            alternativeExpressions: [
              { textEn: "Sixteen seventy-five. Cash or card?", textZh: "十六块七毛五。现金还是刷卡？", actionHint: "简洁直接的问法", frequency: "common" },
              { textEn: "That comes to sixteen seventy-five. How are you paying today?", textZh: "一共十六块七毛五。今天怎么付？", actionHint: "comes to = 总计", frequency: "common" },
            ],
            casualVersion: "Total's $16.75. How ya wanna pay?",
            formalityVariants: {
              casual: "Total's $16.75. How ya wanna pay?",
              standard: "Your total is $16.75. How would you like to pay?",
              formal: "The total amount due is $16.75. What will be your preferred method of payment?",
            },
          },
          {
            speaker: "you",
            textEn: "I'll pay cash. Here's a twenty.",
            textZh: "付现金。给您20。",
            casualVersion: "Cash. Here's twenty.",
            commonMistake: {
              wrong: "I use cash.",
              correct: "I'll pay cash.",
              explanation: "中文直接说'我付现金'，英文更常用 'I'll pay cash' 或更简洁的 'Cash'.",
            },
            formalityVariants: {
              casual: "Cash. Here's twenty.",
              standard: "I'll pay cash. Here's a twenty.",
              formal: "I'll be paying with cash. Here is a twenty-dollar bill.",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Out of twenty. Your change is $3.25. That's three dollars and a quarter.",
            textZh: "收您20。找您3.25美元。三块钱和一个25美分硬币。",
            keyPhrases: [
              { en: "out of twenty", zh: "收您20" },
              { en: "change", zh: "找零" },
              { en: "a quarter", zh: "25美分硬币" },
            ],
            culturalNote: "美国硬币: quarter(25c), dime(10c), nickel(5c), penny(1c)。日常最常用的是 quarter。",
            alternativeExpressions: [
              { textEn: "Out of a twenty. Here's three twenty-five back.", textZh: "收您二十。找您三块二毛五。", actionHint: "back = 找回", frequency: "common" },
              { textEn: "OK, twenty. Your change is three and a quarter.", textZh: "好，二十。找您三块两毛五。", actionHint: "a quarter 在这里指25美分硬币", frequency: "common" },
              { textEn: "Three dollars and twenty-five cents is your change.", textZh: "找您三美元二十五美分。", actionHint: "比较正式的说法", frequency: "occasional" },
            ],
            casualVersion: "Outta twenty. Change is $3.25. That's three bucks and a quarter.",
            formalityVariants: {
              casual: "Outta twenty. Change is $3.25. That's three bucks and a quarter.",
              standard: "Out of twenty. Your change is $3.25. That's three dollars and a quarter.",
              formal: "From your twenty-dollar payment, your change is $3.25, which is three dollars and one quarter.",
            },
          },
          {
            speaker: "you",
            textEn: "Actually, can I pay by card instead? I don't have enough cash.",
            textZh: "算了，能刷卡吗？我现金不够。",
            casualVersion: "Actually, can I just use my card? Don't have enough cash.",
            commonMistake: {
              wrong: "Can I swipe card?",
              correct: "Can I pay by card?",
              explanation: "用 'pay by card' 或 'use my card' 更自然。",
            },
            formalityVariants: {
              casual: "Actually, can I just use my card? Don't have enough cash.",
              standard: "Actually, can I pay by card instead? I don't have enough cash.",
              formal: "My apologies, I seem to be short on cash. Would it be possible to pay with a credit or debit card instead?",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Of course. Go ahead and insert or tap your card. There's a $10 minimum for card payments, and you're over that.",
            textZh: "当然。请插卡或刷卡。刷卡最低消费10美元，您已经超过了。",
            keyPhrases: [
              { en: "insert or tap", zh: "插卡或感应" },
              { en: "minimum", zh: "最低消费" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing. Just tap or insert right here. We do have a ten-dollar minimum on cards though.", textZh: "没问题。这边感应或插卡就行。不过刷卡最低消费十块。", actionHint: "sure thing = of course 的口语", frequency: "common" },
              { textEn: "Yeah, no problem. Chip or tap, either works. Minimum's ten for cards but you're good.", textZh: "好的，没问题。芯片插卡或感应都行。刷卡最低十块，你够了。", actionHint: "you're good = 你没问题/够了", frequency: "common" },
            ],
            casualVersion: "Sure. Just insert or tap your card. Card minimum's ten bucks, and you're good.",
            formalityVariants: {
              casual: "Sure. Just insert or tap your card. Card minimum's ten bucks, and you're good.",
              standard: "Of course. Go ahead and insert or tap your card. There's a $10 minimum for card payments, and you're over that.",
              formal: "Certainly. You may proceed to insert or tap your card. Please note there is a ten-dollar minimum for card transactions, which your purchase exceeds.",
            },
          },
          {
            speaker: "you",
            textEn: "Tap okay? I'll use Apple Pay.",
            textZh: "感应可以吗？我用 Apple Pay。",
            casualVersion: "Tap okay? I'm using Apple Pay.",
            commonMistake: {
              wrong: "Is tap ok?",
              correct: "Tap okay?",
              explanation: "口语中用 'Tap okay?' 问法很常见，更自然。",
            },
            formalityVariants: {
              casual: "Tap okay? I'm using Apple Pay.",
              standard: "Tap okay? I'll use Apple Pay.",
              formal: "Would it be acceptable to use the tap function for payment? I intend to use Apple Pay.",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Sure, just hold your phone near the reader... Perfect, payment confirmed. Would you like a receipt?",
            textZh: "可以，把手机靠近读卡器……好了，支付成功。需要收据吗？",
            keyPhrases: [
              { en: "reader", zh: "读卡器" },
              { en: "payment confirmed", zh: "支付成功" },
              { en: "receipt", zh: "收据" },
            ],
            alternativeExpressions: [
              { textEn: "Go ahead and hold it up to the terminal... There you go. Want your receipt?", textZh: "把手机靠近终端……好了。要收据吗？", actionHint: "there you go = 好了/搞定了", frequency: "common" },
              { textEn: "Just hover your phone over the reader... Got it. Receipt?", textZh: "手机悬在读卡器上方……收到了。要收据吗？", actionHint: "hover = 悬停, got it = 收到了", frequency: "common" },
            ],
            casualVersion: "Yeah, just hold your phone to the reader... Done, payment went through. Receipt?",
            formalityVariants: {
              casual: "Yeah, just hold your phone to the reader... Done, payment went through. Receipt?",
              standard: "Sure, just hold your phone near the reader... Perfect, payment confirmed. Would you like a receipt?",
              formal: "Certainly, please position your mobile device close to the reader... Excellent, payment has been successfully processed. May I inquire if you would like a receipt?",
            },
          },
          {
            speaker: "you",
            textEn: "Email receipt, please. Oh, one more thing -- do I tip here?",
            textZh: "发电子收据吧。对了，这里需要给小费吗？",
            casualVersion: "Email receipt, please. Oh, one more thing -- tip here?",
            culturalNote: "美国小费文化复杂，需了解何时给、给多少",
            commonMistake: {
              wrong: "Need tip?",
              correct: "Do I tip here?",
              explanation: "直接问 'Do I tip here?' 听起来更自然和礼貌。",
            },
            formalityVariants: {
              casual: "Email receipt, please. Oh, one more thing -- tip here?",
              standard: "Email receipt, please. Oh, one more thing -- do I tip here?",
              formal: "An emailed receipt would be preferable, thank you. Additionally, may I inquire if tipping is customary in this establishment?",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "It's not expected at a shop like this, but there's a tip option on the screen if you'd like. At restaurants, 15 to 20 percent is standard.",
            textZh: "在这种商店不用给，但屏幕上有小费选项。餐厅的话，15%到20%是标准。",
            keyPhrases: [
              { en: "not expected", zh: "不需要" },
              { en: "tip option", zh: "小费选项" },
              { en: "15 to 20 percent", zh: "15%到20%" },
            ],
            culturalNote: "美国小费文化: 餐厅 15-20%，咖啡店 $1-2，出租车 15%，外卖 $3-5。商店通常不给。",
            alternativeExpressions: [
              { textEn: "Nah, you don't need to tip here. But at a sit-down restaurant, twenty percent is pretty standard.", textZh: "不用，这里不用给小费。但在正式餐厅，百分之二十是标准。", actionHint: "nah = no 的口语，sit-down restaurant = 有服务员的正式餐厅", frequency: "common" },
              { textEn: "Tipping's not really a thing in retail. Restaurants, yeah — fifteen to twenty percent.", textZh: "零售店不怎么给小费。餐厅的话，百分之十五到二十。", actionHint: "not a thing = 不流行/不常见", frequency: "common" },
            ],
            casualVersion: "Nah, not really expected at a shop like this, but there's a tip option if ya wanna. Restaurants, though, 15-20% is typical.",
            formalityVariants: {
              casual: "Nah, not really expected at a shop like this, but there's a tip option if ya wanna. Restaurants, though, 15-20% is typical.",
              standard: "It's not expected at a shop like this, but there's a tip option on the screen if you'd like. At restaurants, 15 to 20 percent is standard.",
              formal: "Tipping is not customary or expected in this particular retail environment; however, a gratuity option is available on the payment screen should you wish to utilize it. For dining establishments, a gratuity of 15 to 20 percent of the total bill is generally considered standard.",
            },
          },
        ],
      },

      // --- Flow 3: 砍价与确认 ---
      {
        id: "negotiating-prices",
        titleZh: "砍价与确认",
        titleEn: "Negotiating & Confirming Prices",
        description: "在跳蚤市场、旅游区等场景中砍价，确认价格是否含税",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn: "How much are you asking for this painting?",
            textZh: "这幅画卖多少钱？",
            casualVersion: "How much for this painting?",
            commonMistake: {
              wrong: "How much is this painting sell?",
              correct: "How much is this painting?",
              explanation: "中文的“卖多少钱”直接翻译成英文会很奇怪，用cost或is更自然。",
            },
            formalityVariants: {
              casual: "How much for this painting?",
              standard: "How much are you asking for this painting?",
              formal: "Could you please inform me of the price of this particular painting?",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "That one is $120.",
            textZh: "那幅120美元。",
            variations: [
              { textEn: "I'm asking one-twenty for that piece.", textZh: "那幅要一百二。" },
            ],
            keyPhrases: [
              { en: "asking for", zh: "要价" },
              { en: "$120", zh: "120美元" },
            ],
            alternativeExpressions: [
              { textEn: "I'm looking for one-twenty on that one.", textZh: "那幅我要一百二。", actionHint: "looking for = asking for 的口语替换", frequency: "common" },
              { textEn: "That piece is a hundred and twenty.", textZh: "那幅一百二十。", actionHint: "piece 指艺术品", frequency: "common" },
            ],
            casualVersion: "That's 120.",
            formalityVariants: {
              casual: "It's 120.",
              standard: "That one is $120.",
              formal: "The price for that item is $120.",
            },
          },
          {
            speaker: "you",
            textEn: "That's a bit steep. Would you take $80?",
            textZh: "有点贵。80美元可以吗？",
            casualVersion: "Hmm, that's a lot. How about 80?",
            culturalNote: "在美国，跳蚤市场或独立小店可以砍价，但大型连锁店或服务业通常不能。",
            commonMistake: {
              wrong: "Can you take $80?",
              correct: "Would you take $80?",
              explanation: "“Can you”听起来像在质疑对方的能力，用“Would you”更礼貌地提问意愿。",
            },
            formalityVariants: {
              casual: "Kinda pricey. How about 80?",
              standard: "That's a bit steep. Would you take $80?",
              formal: "That price appears somewhat high. Would you be amenable to accepting $80 for it?",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "I can't go that low. How about $100? That's already a good deal.",
            textZh: "不能那么低。100美元怎么样？已经很划算了。",
            keyPhrases: [
              { en: "can't go that low", zh: "不能那么低" },
              { en: "good deal", zh: "划算" },
            ],
            isBranchPoint: true,
            responseTip: "砍价时可以表达犹豫，或提出折中方案",
            alternativeExpressions: [
              { textEn: "Eighty's too low. Meet me at a hundred? That's a fair price.", textZh: "八十太低了。一百行不行？很公道的价了。", actionHint: "meet me at = 折中到某个价格", frequency: "common" },
              { textEn: "Can't do eighty, sorry. Best I can do is a hundred. It's a steal at that price.", textZh: "八十不行。最低一百。这价格已经很便宜了。", actionHint: "best I can do = 我能给的最低价, it's a steal = 超值", frequency: "common" },
              { textEn: "No way I can let it go for eighty. How about a hundred flat?", textZh: "八十不可能。一百整怎么样？", actionHint: "let it go = 卖出, flat = 整数", frequency: "occasional" },
            ],
            casualVersion: "Can't go that low. How 'bout a hundred? It's a steal.",
            formalityVariants: {
              casual: "Can't do that low. How 'bout 100? It's a good deal.",
              standard: "I can't go that low. How about $100? That's already a good deal.",
              formal: "I'm afraid I cannot reduce the price to that extent. Would $100 be acceptable? That represents excellent value.",
            },
          },
          {
            speaker: "you",
            textEn: "How about $90? I'll pay cash right now.",
            textZh: "90美元怎么样？我现在就付现金。",
            casualVersion: "90? Cash, right now.",
            culturalNote: "在美国，小商贩有时更喜欢现金交易，因为可以避免信用卡手续费。",
            formalityVariants: {
              casual: "How about 90? I'll pay cash now.",
              standard: "How about $90? I'll pay cash right now.",
              formal: "Would you consider $90? I am prepared to make an immediate cash payment.",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Deal. $90 cash. Let me wrap it up for you.",
            textZh: "成交。90美元现金。我帮您包起来。",
            keyPhrases: [
              { en: "deal", zh: "成交" },
              { en: "wrap it up", zh: "包起来" },
            ],
            culturalNote: "在美国普通商店不砍价，但在跳蚤市场(flea market)、古董店、二手店可以适当讲价。",
            alternativeExpressions: [
              { textEn: "Sold! Ninety bucks it is. Lemme wrap this up real quick.", textZh: "成交！九十块。我赶紧给你包上。", actionHint: "sold = deal, lemme = let me, real quick = 马上", frequency: "common" },
              { textEn: "You got yourself a deal. Ninety cash. I'll bag it for ya.", textZh: "成交。九十现金。我给你装好。", actionHint: "you got yourself a deal 表示同意成交, for ya = for you", frequency: "common" },
            ],
            casualVersion: "Done. 90 cash. I'll wrap it.",
            formalityVariants: {
              casual: "Done. 90 cash. I'll wrap it.",
              standard: "Deal. $90 cash. Let me wrap it up for you.",
              formal: "Agreed. $90 in cash. Allow me to package that for you.",
            },
          },
          {
            speaker: "you",
            textEn: "Wait, is that $90 including tax or before tax?",
            textZh: "等一下，90美元含税吗还是税前？",
            casualVersion: "Hold on, is that 90 with tax or before?",
            culturalNote: "美国商品价格通常不含税，税会在结账时另加。但跳蚤市场可能例外。",
            commonMistake: {
              wrong: "Is this including tax?",
              correct: "Is that including tax or before tax?",
              explanation: "“Is this including tax?” 语法正确但表述不够完整和自然。",
            },
            formalityVariants: {
              casual: "Wait, 90 bucks, is that with tax or without?",
              standard: "Wait, is that $90 including tax or before tax?",
              formal: "Excuse me, could you clarify if the $90 price includes sales tax or if it is pre-tax?",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "At flea markets there's usually no sales tax. So $90 is the final price. No hidden fees.",
            textZh: "跳蚤市场通常不收消费税。所以90美元就是最终价格。没有隐藏费用。",
            keyPhrases: [
              { en: "including tax", zh: "含税" },
              { en: "before tax", zh: "税前" },
              { en: "final price", zh: "最终价格" },
              { en: "no hidden fees", zh: "没有隐藏费用" },
            ],
            alternativeExpressions: [
              { textEn: "No tax at the flea market. Ninety is ninety — what you see is what you pay.", textZh: "跳蚤市场不收税。九十就是九十——所见即所付。", actionHint: "what you see is what you pay 很直白", frequency: "common" },
              { textEn: "Don't worry, there's no sales tax here. Ninety flat, out the door.", textZh: "放心，这里没有消费税。九十整，到手价。", actionHint: "out the door = 最终到手价格", frequency: "occasional" },
            ],
            casualVersion: "Flea markets usually no tax. So 90's the final price. No hidden stuff.",
            formalityVariants: {
              casual: "Flea markets usually don't have sales tax. So 90's the final. No hidden fees.",
              standard: "At flea markets there's usually no sales tax. So $90 is the final price. No hidden fees.",
              formal: "Typically, transactions at flea markets are exempt from sales tax. Therefore, $90 will be the conclusive price, with no additional charges.",
            },
          },
          {
            speaker: "you",
            textEn: "Great. And if I buy two paintings, can you give me a discount?",
            textZh: "好的。如果买两幅，能便宜点吗？",
            casualVersion: "Cool. What if I get two? Any discount?",
            commonMistake: {
              wrong: "Can you make me cheap?",
              correct: "Can you give me a discount?",
              explanation: "“Make me cheap”听起来像让人变得廉价，用“give a discount”才是要打折。",
            },
            formalityVariants: {
              casual: "Cool. If I get two, can I get a discount?",
              standard: "Great. And if I buy two paintings, can you give me a discount?",
              formal: "Excellent. Furthermore, would you be willing to offer a discount should I decide to purchase two paintings?",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "If you take two, I'll give you both for $160. That saves you $20.",
            textZh: "如果买两幅，一起给您160美元。省了20美元。",
            keyPhrases: [
              { en: "give you a discount", zh: "打折/便宜点" },
              { en: "both for $160", zh: "两幅一起160美元" },
              { en: "saves you $20", zh: "省了20美元" },
            ],
            alternativeExpressions: [
              { textEn: "Tell you what — take both for one-sixty. That's twenty bucks off.", textZh: "这样吧——两幅一百六。便宜你二十块。", actionHint: "tell you what 表示我给你个提议", frequency: "common" },
              { textEn: "Two paintings? I can do one-sixty for the pair. You'd be saving twenty.", textZh: "两幅？一起一百六行。你省二十。", actionHint: "the pair = 这一对/两件", frequency: "common" },
            ],
            casualVersion: "Get two, 160 total. Save 20 bucks.",
            formalityVariants: {
              casual: "Two? I'll do 'em both for 160. Saves ya 20.",
              standard: "If you take two, I'll give you both for $160. That saves you $20.",
              formal: "Should you choose to acquire two items, I can offer them both for a combined total of $160, representing a savings of $20.",
            },
          },
          {
            speaker: "you",
            textEn: "Okay, you've got a deal. $160 for both. Here you go.",
            textZh: "好，成交。两幅160美元。给您钱。",
            casualVersion: "Alright, deal. 160 for both. Here's the cash.",
            formalityVariants: {
              casual: "Alright, deal. 160 for both. Here ya go.",
              standard: "Okay, you've got a deal. $160 for both. Here you go.",
              formal: "Very well, we have an agreement. $160 for both items. Please accept this payment.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 字母和发音 ====================
  {
    id: "foundation-alphabet",
    category: "foundation",
    titleZh: "字母和发音",
    titleEn: "Alphabet & Pronunciation",
    description: "练习英文字母发音、容易混淆的音、最小对立组（minimal pairs）",
    otherRole: "对方",
    otherRoleIcon: "speech",
    flows: [
      // --- Flow 1: 字母拼读 ---
      {
        id: "spelling-names",
        titleZh: "字母拼读",
        titleEn: "Spelling Out Names & Words",
        description: "在实际场景中拼读姓名、地址和单词，掌握字母发音",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "对方",
            textEn: "Can I get your last name, please?",
            textZh: "请问您的姓？",
            keyPhrases: [
              { en: "last name", zh: "姓" },
            ],
            alternativeExpressions: [
              { textEn: "What's your last name?", textZh: "你姓什么？", actionHint: "更随意的问法", frequency: "common" },
              { textEn: "And the last name is...?", textZh: "姓是……？", actionHint: "语调上扬表示等你回答", frequency: "common" },
              { textEn: "Surname, please?", textZh: "请问姓？", actionHint: "surname = last name 的正式说法", frequency: "occasional" },
            ],
            casualVersion: "Can I get your last name?",
            commonMistake: {
              wrong: "What is your last name?",
              correct: "Can I get your last name?",
              explanation: "“What is your last name?” 虽语法正确但不如 “Can I get...” 自然，后者更常用于礼貌请求信息。",
            },
            formalityVariants: {
              casual: "Last name?",
              standard: "Can I get your last name, please?",
              formal: "May I please have your last name?",
            },
          },
          {
            speaker: "you",
            textEn: "It's Wang. W-A-N-G.",
            textZh: "Wang。W-A-N-G。",
            culturalNote: "拼读字母在英语国家非常常见。登记入住、打电话、取预订都需要拼读姓名。每个字母要发准确。",
            casualVersion: "It's Wang. W-A-N-G.",
            commonMistake: {
              wrong: "It's Wang.",
              correct: "It's Wang. W-A-N-G.",
              explanation: "在英文语境中，尤其涉及姓名，主动拼写能避免误解，尤其对非英语母语者。",
            },
            formalityVariants: {
              casual: "Wang. W-A-N-G.",
              standard: "It's Wang. W-A-N-G.",
              formal: "My last name is Wang. That's W-A-N-G.",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "Was that W as in whiskey, A as in alpha, N as in November, G as in golf?",
            textZh: "是 W-whiskey、A-alpha、N-November、G-golf 吗？",
            keyPhrases: [
              { en: "as in", zh: "像……一样（用于拼读确认）" },
            ],
            vocabNotes: {
              "as in": { meaningInContext: "在这句话里表示：用一个大家都知道的单词来确认字母，比如 B as in boy", similarUsage: "类似用法：M as in Mary, not N as in Nancy." },
            },
            alternativeExpressions: [
              { textEn: "Let me make sure — W-A-N-G, is that correct?", textZh: "我确认一下——W-A-N-G，对吗？", actionHint: "确认对方拼读", frequency: "common" },
              { textEn: "Sorry, was that W or double-U?", textZh: "抱歉，是W吗？", actionHint: "重复确认", frequency: "occasional" },
            ],
            casualVersion: "W as in whiskey, A as in alpha, N as in November, G as in golf?",
            culturalNote: "英语中拼写时常会使用航空字母表（如 Alpha, Bravo）以确保字母发音清晰，避免混淆。",
            formalityVariants: {
              casual: "W for whiskey, A for alpha, N for November, G for golf, right?",
              standard: "Was that W as in whiskey, A as in alpha, N as in November, G as in golf?",
              formal: "To confirm, was that W as in Whiskey, A as in Alpha, N as in November, and G as in Golf?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, that's correct. And my first name is Wei. W-E-I.",
            textZh: "对的。我的名字是 Wei。W-E-I。",
            casualVersion: "Yep, that's right. First name's Wei. W-E-I.",
            commonMistake: {
              wrong: "Yes, that's correct. My first name is Wei.",
              correct: "Yes, that's correct. And my first name is Wei. W-E-I.",
              explanation: "提供姓名时，即使对方没要求，也最好主动拼写一遍，尤其是外国姓名。",
            },
            formalityVariants: {
              casual: "Yeah, that's right. And my first name's Wei, W-E-I.",
              standard: "Yes, that's correct. And my first name is Wei. W-E-I.",
              formal: "That is correct. My given name is Wei; that's W-E-I.",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "W-E-I. Got it. And your email address?",
            textZh: "W-E-I。记下了。您的邮箱地址呢？",
            alternativeExpressions: [
              { textEn: "OK, W-E-I. Can I grab your email too?", textZh: "好，W-E-I。能给个邮箱吗？", actionHint: "grab = get 的口语说法", frequency: "common" },
              { textEn: "Got it — Wei. And what email should we have on file?", textZh: "记下了——Wei。邮箱填什么？", actionHint: "have on file = 存档记录", frequency: "occasional" },
            ],
            casualVersion: "W-E-I. Got it. Email address?",
            formalityVariants: {
              casual: "W-E-I. Okay. Email?",
              standard: "W-E-I. Got it. And your email address?",
              formal: "W-E-I. Understood. May I please have your email address?",
            },
          },
          {
            speaker: "you",
            textEn: "It's wei.wang@email.com. That's W-E-I, dot, W-A-N-G, at E-M-A-I-L dot com.",
            textZh: "是 wei.wang@email.com。就是 W-E-I 点 W-A-N-G at E-M-A-I-L 点 com。",
            culturalNote: "拼读邮箱时：@ 读作 \"at\"，. 读作 \"dot\"，- 读作 \"dash\" 或 \"hyphen\"，_ 读作 \"underscore\"。",
            casualVersion: "Wei dot wang at email dot com. That's W-E-I, dot, W-A-N-G, at E-M-A-I-L dot com.",
            commonMistake: {
              wrong: "It's wei dian wang ai te email dian com.",
              correct: "It's wei dot wang at email dot com.",
              explanation: "“点” 对应 “dot”，“艾特” 对应 “at”，要用英文发音。",
            },
            formalityVariants: {
              casual: "Wei dot wang at email dot com. Spelled W-E-I, dot, W-A-N-G, at E-M-A-I-L dot com.",
              standard: "It's wei.wang@email.com. That's W-E-I, dot, W-A-N-G, at E-M-A-I-L dot com.",
              formal: "My email address is wei.wang@email.com. That would be W-E-I, dot, W-A-N-G, at E-M-A-I-L dot com.",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "Let me read that back to you: W-E-I dot W-A-N-G at E-M-A-I-L dot com. Is that right?",
            textZh: "我读一遍给您确认：W-E-I 点 W-A-N-G at E-M-A-I-L 点 com。对吗？",
            keyPhrases: [
              { en: "read that back", zh: "读一遍确认" },
              { en: "dot", zh: "点" },
              { en: "at", zh: "@（at符号）" },
            ],
            alternativeExpressions: [
              { textEn: "Just to confirm — W-E-I dot W-A-N-G at E-M-A-I-L dot com. Did I get that right?", textZh: "确认一下——W-E-I 点 W-A-N-G at E-M-A-I-L 点 com。我说对了吗？", actionHint: "did I get that right 确认无误", frequency: "common" },
              { textEn: "So that's wei W-E-I, dot, wang W-A-N-G, at email dot com, yeah?", textZh: "就是 wei W-E-I 点 wang W-A-N-G at email 点 com，对吧？", actionHint: "边拼边念的方式", frequency: "occasional" },
            ],
            casualVersion: "Lemme read that back: W-E-I dot W-A-N-G at E-M-A-I-L dot com. Right?",
            formalityVariants: {
              casual: "Lemme read that back: W-E-I dot W-A-N-G at E-M-A-I-L dot com. Right?",
              standard: "Let me read that back to you: W-E-I dot W-A-N-G at E-M-A-I-L dot com. Is that right?",
              formal: "Allow me to confirm: W-E-I dot W-A-N-G at E-M-A-I-L dot com. Is that correct?",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect, that's correct.",
            textZh: "完全正确。",
            casualVersion: "Perfect, yep.",
            commonMistake: {
              wrong: "Correct.",
              correct: "Perfect, that's correct.",
              explanation: "直接说“Correct”虽然正确，但“Perfect, that's correct”听起来更自然、更积极。",
            },
            formalityVariants: {
              casual: "Yep, perfect.",
              standard: "Perfect, that's correct.",
              formal: "Yes, that is absolutely correct. Thank you.",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "One more thing — can you spell the street name for your address? I didn't quite catch it.",
            textZh: "还有一个——能拼一下您地址的街道名吗？我没听清。",
            keyPhrases: [
              { en: "spell", zh: "拼写" },
              { en: "didn't quite catch it", zh: "没听清" },
            ],
            alternativeExpressions: [
              { textEn: "Oh, and can you spell out the street name? I missed that.", textZh: "哦，能把街道名拼一下吗？我没听到。", actionHint: "spell out = spell, I missed that = 我没听到", frequency: "common" },
              { textEn: "Sorry, what was the street name again? Could you spell it for me?", textZh: "抱歉，街道名再说一遍？能拼一下吗？", actionHint: "what was... again 礼貌地要求重复", frequency: "common" },
            ],
            casualVersion: "One more thing — can you spell the street name? Didn't quite catch it.",
            formalityVariants: {
              casual: "One more thing, can you spell the street name? Didn't catch it.",
              standard: "One more thing — can you spell the street name for your address? I didn't quite catch it.",
              formal: "Just one final item — could you please spell the street name for the address? I seem to have missed it.",
            },
          },
          {
            speaker: "you",
            textEn: "Sure. It's Birch Lane. B as in boy, I-R-C-H, then Lane, L-A-N-E.",
            textZh: "好的。是 Birch Lane。B-boy 的 B，I-R-C-H，然后 Lane，L-A-N-E。",
            culturalNote: "容易混淆的字母要用 NATO 拼读法（phonetic alphabet）或简单词汇确认：B as in boy, D as in dog, M as in Mary, N as in Nancy, P as in Peter。",
            casualVersion: "Sure. Birch Lane. B as in boy, I-R-C-H. Then Lane, L-A-N-E.",
            commonMistake: {
              wrong: "Sure. It's Birch Lane.",
              correct: "Sure. It's Birch Lane. B as in boy, I-R-C-H, then Lane, L-A-N-E.",
              explanation: "拼写地址或不熟悉单词时，使用“B as in boy”这样的例子能极大提高清晰度。",
            },
            formalityVariants: {
              casual: "Yeah. Birch Lane. B as in boy, I-R-C-H. Then Lane, L-A-N-E.",
              standard: "Sure. It's Birch Lane. B as in boy, I-R-C-H, then Lane, L-A-N-E.",
              formal: "Certainly. The street name is Birch Lane. That's B as in Boy, I-R-C-H, followed by Lane, L-A-N-E.",
            },
          },
        ],
      },

      // --- Flow 2: 难发音和最小对立组 ---
      {
        id: "difficult-sounds",
        titleZh: "难发音和对比",
        titleEn: "Difficult Sounds & Minimal Pairs",
        description: "练习中国人容易混淆的英语发音，在真实场景中被纠正和确认",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, where is the beach?",
            textZh: "请问，海滩在哪里？",
            casualVersion: "Hey, where's the beach?",
            commonMistake: {
              wrong: "Excuse me, where is beach?",
              correct: "Excuse me, where is the beach?",
              explanation: "问路时，地名通常需要定冠词 the，表示特指某地。",
            },
            formalityVariants: {
              casual: "Hey, where's the beach?",
              standard: "Excuse me, where is the beach?",
              formal: "Pardon me, could you please tell me where the beach is located?",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "Sorry, did you say \"beach\" or \"peach\"? The beach is that way. The peach stand is over there.",
            textZh: "抱歉，你说的是 \"beach\"（海滩）还是 \"peach\"（桃子）？海滩在那个方向。桃子摊在那边。",
            keyPhrases: [
              { en: "beach", zh: "海滩（/biːtʃ/）" },
              { en: "peach", zh: "桃子（/piːtʃ/）" },
            ],
            culturalNote: "B 和 P 是中国英语学习者常混淆的音。B 是浊音（声带振动），P 是清音（不振动但有气流）。",
            vocabNotes: {
              beach: { meaningInContext: "在这句话里表示：海滩。注意 /b/ 音声带要振动", similarUsage: "类似的对比：bed/pet, big/pig, bat/pat" },
            },
            alternativeExpressions: [
              { textEn: "Wait, the beach or a peach? 'Cause the beach is down that way, but if you want peaches, there's a fruit stand right there.", textZh: "等下，海滩还是桃子？海滩往那边走，要桃子的话旁边有个水果摊。", actionHint: "'cause = because 的口语缩写", frequency: "common" },
              { textEn: "Did you mean beach — like the ocean? Or peach, the fruit?", textZh: "你说的是 beach——海边那个？还是 peach，水果？", actionHint: "用具体描述来确认", frequency: "common" },
            ],
            casualVersion: "Huh? What'd you say?",
            formalityVariants: {
              casual: "Huh? What'd you say?",
              standard: "Sorry, could you repeat that?",
              formal: "Pardon me, would you mind repeating that?",
            },
          },
          {
            speaker: "you",
            textEn: "Beach — B-E-A-C-H. The one with sand and water.",
            textZh: "Beach——B-E-A-C-H。有沙子和水的那个。",
            casualVersion: "Beach. Y'know, sand and water.",
            commonMistake: {
              wrong: "Beach, B E A C H. The one with sand and water.",
              correct: "Beach — B-E-A-C-H. The one with sand and water.",
              explanation: "字母拼读时，通常会强调连字符，让听者明白是分开的字母。",
            },
            formalityVariants: {
              casual: "Beach. Sand and water kinda place.",
              standard: "Beach — B-E-A-C-H. The one with sand and water.",
              formal: "It's 'beach,' as in B-E-A-C-H. The coastal area with sand and water.",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "Ah, the beach! Go straight for three blocks, then turn light... I mean, turn right at the light.",
            textZh: "啊，海滩！直走三个街区，然后在红绿灯那右转。",
            keyPhrases: [
              { en: "right", zh: "右边（/raɪt/）" },
              { en: "light", zh: "灯/红绿灯（/laɪt/）" },
            ],
            alternativeExpressions: [
              { textEn: "Oh yeah! Just go straight about three blocks and make a right at the traffic light.", textZh: "哦对！直走大约三个街区，在红绿灯那儿右转。", actionHint: "make a right = turn right", frequency: "common" },
              { textEn: "The beach? Sure — three blocks down, take a right at the signal.", textZh: "海滩？好——往前三个街区，在信号灯右转。", actionHint: "signal = traffic light 的简称", frequency: "occasional" },
            ],
            casualVersion: "Oh, the beach! Go three blocks, then right at the light.",
            formalityVariants: {
              casual: "Oh, the beach! Go three blocks, then right at the light.",
              standard: "Ah, the beach! Go straight for three blocks, then turn right at the light.",
              formal: "Oh, the beach! You'll need to proceed straight for three city blocks, and then make a right turn at the traffic light.",
            },
          },
          {
            speaker: "you",
            textEn: "Turn right at the light. Got it. And is the beach free, or do I need to pay a fee?",
            textZh: "红绿灯右转。明白了。海滩免费吗，还是需要交费？",
            casualVersion: "Right at the light, got it. Beach free, or gotta pay?",
            commonMistake: {
              wrong: "Is the beach free, or need pay a fee?",
              correct: "Is the beach free, or do I need to pay a fee?",
              explanation: "询问需要做什么时，需要使用 'do I need to' 这样的句式。",
            },
            formalityVariants: {
              casual: "Right at the light, got it. Beach free, or gotta pay?",
              standard: "Turn right at the light. Got it. And is the beach free, or do I need to pay a fee?",
              formal: "So, I'll turn right at the traffic light. Understood. Regarding the beach, is public access complimentary, or is there an admission fee required?",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "It's free! No fee. Just watch out for the ships near the shore — and don't step on the sheep... ha, I mean the shells. Sorry, just joking around!",
            textZh: "免费的！不要钱。就是注意岸边的船——别踩到贝壳。抱歉，开个玩笑！",
            keyPhrases: [
              { en: "free / fee", zh: "免费 / 费用" },
              { en: "ship / sheep", zh: "船（/ʃɪp/） / 绵羊（/ʃiːp/）" },
              { en: "shell", zh: "贝壳" },
            ],
            culturalNote: "长短元音是另一个常见难点：ship(/ɪ/) vs sheep(/iː/)，sit vs seat，hit vs heat。长音要拉长。",
            alternativeExpressions: [
              { textEn: "Totally free! No charge. Oh and watch your step by the water — lots of shells and stuff on the ground.", textZh: "完全免费！不收钱。小心脚下水边——地上很多贝壳什么的。", actionHint: "no charge = no fee, and stuff = 之类的", frequency: "common" },
              { textEn: "Nope, no fee at all. Just be careful near the shoreline — it can get slippery.", textZh: "不要钱。就是靠近海岸线小心——可能很滑。", actionHint: "nope = no 的口语, slippery = 滑的", frequency: "occasional" },
            ],
            casualVersion: "It's free! No fee. Just watch out for the ships by the shore — and don't step on the sheep... ha, I mean the shells. Just kidding!",
            formalityVariants: {
              casual: "It's free! No fee. Just watch out for the ships by the shore — and don't step on the sheep... ha, I mean the shells. Just kidding!",
              standard: "It's free! No fee. Just watch out for the ships near the shore — and don't step on the sheep... ha, I mean the shells. Sorry, just joking around!",
              formal: "Access is complimentary; there is no charge. However, please be mindful of the vessels near the shoreline — and kindly avoid stepping on the sheep... my apologies, I meant the shells. That was merely a jest.",
            },
          },
          {
            speaker: "you",
            textEn: "Ha, that's funny. My English teacher always said I need to work on my L and R sounds. Do I take a left or a right after the light?",
            textZh: "哈哈，挺有趣。我的英语老师一直说我要练 L 和 R 的发音。过了红绿灯是左转还是右转？",
            casualVersion: "Haha, funny. My English teacher said I gotta work on my L's and R's. Left or right after the light?",
            commonMistake: {
              wrong: "Do I take left or right after the light?",
              correct: "Do I take a left or a right after the light?",
              explanation: "在 'take a left/right' 这种表达中，a 是必须的。",
            },
            formalityVariants: {
              casual: "Haha, funny. My English teacher said I gotta work on my L's and R's. Left or right after the light?",
              standard: "Ha, that's funny. My English teacher always said I need to work on my L and R sounds. Do I take a left or a right after the light?",
              formal: "Indeed, quite amusing. My English instructor frequently advised me to concentrate on my pronunciation of the 'L' and 'R' sounds. Could you clarify if I should turn left or right after the traffic signal?",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "Right — as in R-I-G-H-T, not left. Your L's and R's actually sound fine to me! One tip: for R, curl your tongue back a little. For L, put your tongue on the roof of your mouth behind your front teeth.",
            textZh: "右转——R-I-G-H-T，不是左转。你的 L 和 R 发音在我听来还行！一个小技巧：发 R 的时候舌头往后卷一点。发 L 的时候把舌头抵住上颚、前牙后面。",
            keyPhrases: [
              { en: "curl your tongue", zh: "舌头卷起来" },
              { en: "roof of your mouth", zh: "上颚" },
              { en: "front teeth", zh: "前牙" },
            ],
            alternativeExpressions: [
              { textEn: "Right, not left! Your L's and R's are fine, honestly. Just remember — for R, pull your tongue back. For L, touch it to the top of your mouth.", textZh: "右转，不是左转！你的 L 和 R 真的没问题。记住——发 R 舌头往后缩，发 L 舌头抵上颚。", actionHint: "honestly = 说真的，简化了发音技巧描述", frequency: "common" },
              { textEn: "Ha, it's a right turn. And honestly, your pronunciation is pretty good! A little trick for R — don't let your tongue touch anything. For L, press it up behind your teeth.", textZh: "哈，是右转。说实话你发音挺好的！R 的小技巧——舌头不要碰到任何地方。L 的话舌头顶到牙齿后面。", actionHint: "另一种解释发音的方式", frequency: "occasional" },
            ],
            casualVersion: "Right — R-I-G-H-T, not left. Your L's and R's sound fine! Tip: for R, curl your tongue back a bit. For L, tongue on the roof of your mouth behind your front teeth.",
            formalityVariants: {
              casual: "Right — R-I-G-H-T, not left. Your L's and R's sound fine! Tip: for R, curl your tongue back a bit. For L, tongue on the roof of your mouth behind your front teeth.",
              standard: "Right — as in R-I-G-H-T, not left. Your L's and R's actually sound fine to me! One tip: for R, curl your tongue back a little. For L, put your tongue on the roof of your mouth behind your front teeth.",
              formal: "It is a right turn, as in R-I-G-H-T, not left. Your pronunciation of the 'L' and 'R' sounds is actually quite clear to me! As a suggestion, for the 'R' sound, gently curl your tongue backward. For the 'L' sound, position your tongue on the alveolar ridge, directly behind your upper front teeth.",
            },
          },
          {
            speaker: "you",
            textEn: "That's really helpful. Right, right, right... I'm going to practice that the whole way to the beach!",
            textZh: "真有帮助。Right，right，right……我走去海滩一路练！",
            casualVersion: "Super helpful. Right, right, right... gonna practice that all the way to the beach!",
            formalityVariants: {
              casual: "Super helpful. Right, right, right... gonna practice that all the way to the beach!",
              standard: "That's really helpful. Right, right, right... I'm going to practice that the whole way to the beach!",
              formal: "That information is indeed very beneficial. Right, right, right... I shall endeavor to practice that pronunciation throughout my journey to the beach.",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "That's the spirit! And don't worry about being perfect. Most people will understand you from context. The fact that you're practicing is what matters. Enjoy the beach!",
            textZh: "就是这个态度！不用担心发音完美。大多数人通过上下文能听懂你。重要的是你在练习。享受海滩吧！",
            keyPhrases: [
              { en: "that's the spirit", zh: "就是这个态度" },
              { en: "from context", zh: "通过上下文" },
            ],
            alternativeExpressions: [
              { textEn: "Love it! And seriously, don't stress about your accent. People get what you're saying. Have fun at the beach!", textZh: "很棒！说真的，别纠结口音。别人能听懂你。海滩玩得开心！", actionHint: "don't stress = 别紧张/别纠结", frequency: "common" },
              { textEn: "Good for you! Honestly, nobody expects perfect English. Context does most of the work. Enjoy!", textZh: "真不错！说实话，没人要求你英语完美。上下文能帮大忙。玩得开心！", actionHint: "good for you = 为你高兴", frequency: "common" },
            ],
            casualVersion: "That's the spirit! Don't worry 'bout being perfect. Most people'll get ya from context. Just practicing is what matters. Enjoy the beach!",
            formalityVariants: {
              casual: "That's the spirit! Don't worry 'bout being perfect. Most people'll get ya from context. Just practicing is what matters. Enjoy the beach!",
              standard: "That's the spirit! And don't worry about being perfect. Most people will understand you from context. The fact that you're practicing is what matters. Enjoy the beach!",
              formal: "That's an excellent attitude! Furthermore, please do not concern yourself with achieving absolute perfection. The majority of individuals will comprehend your meaning through contextual cues. Your commitment to practice is, in fact, the most significant aspect. Do enjoy your time at the beach!",
            },
          },
        ],
      },
    ],
  },

  // ==================== 数字和时间 ====================
  {
    id: "foundation-numbers-time",
    category: "foundation",
    titleZh: "数字和时间",
    titleEn: "Numbers & Time",
    description: "在真实场景中练习报时间、说日期、念电话号码和谈论价格",
    otherRole: "对方",
    otherRoleIcon: "clock",
    flows: [
      // --- Flow 1: 时间和日期 ---
      {
        id: "telling-time-dates",
        titleZh: "报时间和日期",
        titleEn: "Telling Time & Dates",
        description: "在日常场景中听懂和说出时间、日期、持续时长",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, what time is it?",
            textZh: "请问，现在几点了？",
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "It's a quarter past two. So, 2:15.",
            textZh: "两点一刻。就是2:15。",
            keyPhrases: [
              { en: "a quarter past two", zh: "两点一刻/2:15" },
              { en: "quarter", zh: "一刻钟（15分钟）" },
            ],
            alternativeExpressions: [
              { textEn: "It's two fifteen.", textZh: "两点十五。", actionHint: "直接的说法", frequency: "common" },
              { textEn: "Just gone quarter past two.", textZh: "刚过两点一刻。", actionHint: "英式说法", frequency: "occasional" },
            ],
            vocabNotes: {
              quarter: { meaningInContext: "在这句话里表示：一刻钟，即15分钟", similarUsage: "类似用法：a quarter to three = 2:45（差一刻到三点）" },
            },
          },
          {
            speaker: "you",
            textEn: "Thanks. And what time does the museum close today?",
            textZh: "谢谢。博物馆今天几点关门？",
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "It closes at half past five — 5:30. But the last entry is at a quarter to five, so 4:45. You still have plenty of time.",
            textZh: "五点半关门——5:30。但最后入场是差一刻到五点，就是4:45。你还有很多时间。",
            keyPhrases: [
              { en: "half past five", zh: "五点半" },
              { en: "a quarter to five", zh: "差一刻到五点/4:45" },
              { en: "last entry", zh: "最后入场" },
            ],
            culturalNote: "英文时间表达：past 用于前半小时（quarter past, half past），to 用于后半小时（quarter to, ten to）。美式英语也常用 after 代替 past。",
            alternativeExpressions: [
              { textEn: "Closes at five-thirty. But heads up — last admission is four forty-five, so you gotta be in by then.", textZh: "五点半关门。不过注意——最后入场是四点四十五，得在那之前进去。", actionHint: "heads up = 提醒, gotta = got to", frequency: "common" },
              { textEn: "They shut the doors at five-thirty, but they stop letting people in at quarter to five. You've got plenty of time though.", textZh: "五点半关门，但差一刻五点就不让人进了。不过你时间还很充裕。", actionHint: "shut the doors 比 close 更口语化", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. By the way, what's today's date?",
            textZh: "好的。顺便问一下，今天几号？",
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "Today is March 12th. In American format, that's 3/12. If you're European, it's 12/3.",
            textZh: "今天是3月12日。美式写法是 3/12。欧洲写法是 12/3。",
            keyPhrases: [
              { en: "March 12th", zh: "3月12日" },
              { en: "American format", zh: "美式格式（月/日）" },
            ],
            culturalNote: "日期格式：美国用 月/日/年（3/12/2026），英国和大多数国家用 日/月/年（12/3/2026）。容易搞混！",
            alternativeExpressions: [
              { textEn: "It's March twelfth. We write it 3/12 here, but in Europe they'd write 12/3.", textZh: "今天三月十二号。我们这里写 3/12，但欧洲写 12/3。", actionHint: "直接用序数词念日期", frequency: "common" },
              { textEn: "The twelfth of March. Americans write month first — 3/12. Europeans do it the other way — 12/3.", textZh: "三月十二日。美国人月份在前——3/12。欧洲人反过来——12/3。", actionHint: "the twelfth of March 是英式说法", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That always confuses me — month first or day first. And when is the holiday parade? Someone mentioned it's this weekend.",
            textZh: "这个总搞混——月在前还是日在前。节日游行是什么时候？有人说是这个周末。",
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "The parade is this Saturday, March 15th. It starts at 10 AM and runs for about two and a half hours. You should get there by 9:30 to get a good spot.",
            textZh: "游行在这周六，3月15日。上午10点开始，持续大约两个半小时。你最好9:30之前到，找个好位置。",
            keyPhrases: [
              { en: "this Saturday", zh: "这周六" },
              { en: "two and a half hours", zh: "两个半小时" },
              { en: "get a good spot", zh: "找个好位置" },
            ],
            alternativeExpressions: [
              { textEn: "It's Saturday the fifteenth. Starts at ten, goes till like twelve-thirty. Get there early if you want a decent spot — maybe nine-thirty?", textZh: "周六十五号。十点开始，大概到十二点半。想占个好位置就早点去——九点半？", actionHint: "goes till = lasts until, decent = 不错的", frequency: "common" },
              { textEn: "This Saturday, March fifteenth. Ten AM, runs about two and a half hours. I'd show up by nine-thirty to snag a good view.", textZh: "这周六，三月十五。上午十点，持续大约两个半小时。建议九点半到，抢个好视角。", actionHint: "show up = arrive, snag = 抢到", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "10 AM to about 12:30. Got it. And what's the weather forecast for Saturday?",
            textZh: "上午10点到大约12:30。明白了。周六天气预报怎么样？",
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "They're saying high of 68 Fahrenheit — that's about 20 Celsius. Partly cloudy. Perfect for the parade!",
            textZh: "预报说最高68华氏度——大概20摄氏度。局部多云。很适合看游行！",
            keyPhrases: [
              { en: "68 Fahrenheit", zh: "华氏68度" },
              { en: "20 Celsius", zh: "摄氏20度" },
              { en: "partly cloudy", zh: "局部多云" },
            ],
            culturalNote: "温度换算：°F = °C × 9/5 + 32。常用参考：0°C=32°F, 20°C=68°F, 30°C=86°F, 37°C=98.6°F。",
            alternativeExpressions: [
              { textEn: "Forecast says sixty-eight, so around twenty Celsius. Partly cloudy. Should be great for the parade!", textZh: "预报说六十八度，大概摄氏二十度。局部多云。看游行应该很舒服！", actionHint: "should be great 表示应该不错", frequency: "common" },
              { textEn: "Looking like upper sixties — sixty-eight or so. That's about twenty C. Mix of sun and clouds. Perfect.", textZh: "大概六十八度左右。大约摄氏二十度。有太阳也有云。完美。", actionHint: "upper sixties = 接近70度", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 2: 电话号码和价格 ---
      {
        id: "phone-numbers-prices",
        titleZh: "电话号码和价格",
        titleEn: "Phone Numbers & Prices",
        description: "在实际场景中听懂和说出电话号码、价格、各种数字",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Can I have the phone number for the restaurant?",
            textZh: "能给我那家餐厅的电话号码吗？",
            casualVersion: "Can I get the restaurant's number?",
            commonMistake: {
              wrong: "Can you give me the restaurant phone number?",
              correct: "Can I have the phone number for the restaurant?",
              explanation: "“Can I have” 听起来更自然，表达索取信息更常用。",
            },
            formalityVariants: {
              casual: "Got the restaurant's number?",
              standard: "Can I have the phone number for the restaurant?",
              formal: "Could you kindly provide the telephone number for the restaurant, please?",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "Sure. It's (212) 555-0147. That's area code two-one-two, five-five-five, zero-one-four-seven.",
            textZh: "好的。(212) 555-0147。区号 two-one-two，five-five-five，zero-one-four-seven。",
            keyPhrases: [
              { en: "area code", zh: "区号" },
              { en: "two-one-two", zh: "212（逐个念）" },
            ],
            alternativeExpressions: [
              { textEn: "The number is 212-555-0147. That's two-twelve, triple-five, oh-one-forty-seven.", textZh: "号码是 212-555-0147。两百一十二，三个五，零一四七。", actionHint: "不同人念号码的方式不同", frequency: "occasional" },
            ],
            culturalNote: "美国电话号码的念法因人而异：有人逐个念(five-five-five)，有人组合念(triple five, double-oh)。0 经常读作 oh 而不是 zero。",
            casualVersion: "Yeah. It's 212-555-0147. That's 212, 555, 0147.",
            commonMistake: {
              wrong: "zero one four seven",
              correct: "zero-one-four-seven",
              explanation: "说电话号码时，数字需要清晰分段，每个数字之间有停顿。",
            },
            formalityVariants: {
              casual: "Yeah. It's 212-555-0147. That's 2-1-2, 5-5-5, 0-1-4-7.",
              standard: "Sure. It's (212) 555-0147. That's area code two-one-two, five-five-five, zero-one-four-seven.",
              formal: "Certainly. The telephone number is area code two-one-two, five-five-five, zero-one-four-seven.",
            },
          },
          {
            speaker: "you",
            textEn: "212-555-0147. Got it. And how much is dinner there per person?",
            textZh: "212-555-0147。记下了。那里每人晚餐多少钱？",
            casualVersion: "212-555-0147. Got it. And how much is dinner there?",
            commonMistake: {
              wrong: "How many is dinner there per person?",
              correct: "How much is dinner there per person?",
              explanation: "询问价格用“How much”，询问数量用“How many”。",
            },
            formalityVariants: {
              casual: "Got it. How much is dinner there?",
              standard: "212-555-0147. Got it. And how much is dinner there per person?",
              formal: "Thank you. I have recorded that. Could you please inform me of the average cost per person for dinner at that establishment?",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "Entrees range from $18 to $35. With an appetizer and drink, you're looking at about $45 to $60 per person. Don't forget to tip — 18 to 20 percent is standard.",
            textZh: "主菜从18美元到35美元不等。加上前菜和饮料，每人大约45到60美元。别忘了小费——18%到20%是标准。",
            keyPhrases: [
              { en: "entrees", zh: "主菜" },
              { en: "range from...to", zh: "从……到……不等" },
              { en: "you're looking at", zh: "大概是" },
              { en: "per person", zh: "每人" },
            ],
            vocabNotes: {
              entrees: { meaningInContext: "在这句话里表示：正餐中的主菜。注意在美式英语里 entree 就是主菜，但在法语和英式英语里 entrée 是前菜", similarUsage: "类似用法：The entrees come with a side salad." },
            },
            alternativeExpressions: [
              { textEn: "Mains are like eighteen to thirty-five bucks. With apps and drinks, probably forty-five to sixty a head. And don't forget to tip — twenty percent is the norm.", textZh: "主菜大概十八到三十五块。加上前菜和饮料，每人大约四十五到六十。别忘了小费——百分之二十是常规。", actionHint: "mains = entrees, apps = appetizers, a head = per person", frequency: "common" },
              { textEn: "You're looking at eighteen to thirty-five per entree. All in, figure forty-five to sixty per person, plus tip.", textZh: "主菜十八到三十五一份。全算上，每人大概四十五到六十，再加小费。", actionHint: "all in = 全部加起来, figure = 估计", frequency: "occasional" },
            ],
            casualVersion: "Entrees are like 18 to 35 bucks. With an appetizer and drink, you're probably looking at 45 to 60 a person. Don't forget to tip — 18-20% is normal.",
            culturalNote: "美国小费是强制性的，不给会冒犯服务人员，还会被追讨。",
            commonMistake: {
              wrong: "I don't need to tip.",
              correct: "Don't forget to tip — 18 to 20 percent is standard.",
              explanation: "在美国，小费是服务人员收入的重要部分，不给非常不礼貌。",
            },
            formalityVariants: {
              casual: "Entrees are like 18-35 bucks. With an app and a drink, you're probably looking at 45-60 a person. Don't forget to tip, 18-20% is normal.",
              standard: "Entrees range from $18 to $35. With an appetizer and drink, you're looking at about $45 to $60 per person. Don't forget to tip — 18 to 20 percent is standard.",
              formal: "The main courses are priced between $18 and $35. Including an appetizer and beverage, the estimated cost per individual would be approximately $45 to $60. Please remember that an 18 to 20 percent gratuity is customary.",
            },
          },
          {
            speaker: "you",
            textEn: "So for two people, about $90 to $120 before tip. And with 20% tip, that's... $108 to $144?",
            textZh: "那两个人大概90到120美元，不含小费。加20%小费就是……108到144美元？",
            casualVersion: "So for two, it's like 90 to 120 bucks before tip. And with a 20% tip, that's... 108 to 144?",
            formalityVariants: {
              casual: "So for two, it's like 90-120 before tip. And with 20% tip, that's... 108-144?",
              standard: "So for two people, about $90 to $120 before tip. And with 20% tip, that's... $108 to $144?",
              formal: "Therefore, for two individuals, the total would be approximately $90 to $120 prior to gratuity. Including a 20% gratuity, would the estimated cost range from $108 to $144?",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "Your math is good! A quick tip — to calculate 20%, just move the decimal point one place left to get 10%, then double it. So $100 is $10 times two, which is $20 tip.",
            textZh: "算术不错！一个小技巧——算20%的时候，先把小数点左移一位得到10%，然后翻倍。比如100美元，10美元乘以二，就是20美元小费。",
            keyPhrases: [
              { en: "move the decimal point", zh: "移小数点" },
              { en: "double it", zh: "翻倍" },
            ],
            alternativeExpressions: [
              { textEn: "Nice math! Here's a quick trick — take ten percent, then just double it. So on a hundred-dollar bill, ten bucks times two is twenty.", textZh: "算术不错！教你个快招——先算百分之十，然后翻倍。比如一百块的账单，十块乘二就是二十。", actionHint: "bill = 账单, bucks = dollars", frequency: "common" },
              { textEn: "You're good with numbers! Easy way to figure twenty percent: find ten percent first, double it. Hundred bucks? That's a twenty-dollar tip.", textZh: "你数学不错！算百分之二十的简单方法：先算百分之十，再翻倍。一百块？就是二十块小费。", actionHint: "easy way to figure = 简单的计算方法", frequency: "occasional" },
            ],
            casualVersion: "Yeah, your math's right! Quick way to do 20% — just move the decimal left one spot to get 10%, then double it. So 100 bucks is 10 times two, which is 20 for tip.",
            formalityVariants: {
              casual: "Yeah, your math's right! Quick way to do 20% — just move the decimal left one spot to get 10%, then double it. So 100 bucks is 10 times two, which is 20 for tip.",
              standard: "Your math is good! A quick tip — to calculate 20%, just move the decimal point one place left to get 10%, then double it. So $100 is $10 times two, which is $20 tip.",
              formal: "Your calculation is indeed accurate. A useful method for computing 20% is to simply shift the decimal point one position to the left to determine 10%, and then multiply that figure by two. For instance, on a $100 total, 10% would be $10, resulting in a $20 gratuity.",
            },
          },
          {
            speaker: "you",
            textEn: "That's a great trick! By the way, what's the exchange rate right now? I want to convert to yuan in my head.",
            textZh: "好方法！对了，现在汇率是多少？我想在脑子里换算成人民币。",
            casualVersion: "Oh, that's a good trick! Hey, what's the exchange rate right now? Wanna convert to yuan in my head.",
            commonMistake: {
              wrong: "How is the currency exchange?",
              correct: "What's the exchange rate?",
              explanation: "“exchange rate” 是“汇率”的标准、常用说法。",
            },
            formalityVariants: {
              casual: "Oh, that's a good trick! Hey, what's the exchange rate right now? Wanna convert to yuan in my head.",
              standard: "That's a great trick! By the way, what's the exchange rate right now? I want to convert to yuan in my head.",
              formal: "That is an excellent stratagem! Incidentally, could you please provide the current exchange rate? I wish to mentally convert the amount to Chinese yuan.",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "Last I checked, one US dollar is about 7.2 Chinese yuan. So your $120 dinner would be around 864 yuan. Not cheap! But this is New York.",
            textZh: "上次看是1美元大约兑7.2人民币。所以120美元的晚餐大概是864人民币。不便宜！但这是纽约嘛。",
            keyPhrases: [
              { en: "exchange rate", zh: "汇率" },
              { en: "7.2 Chinese yuan", zh: "7.2人民币" },
              { en: "convert", zh: "换算/兑换" },
            ],
            alternativeExpressions: [
              { textEn: "Right now it's about seven-point-two to one. So your hundred-twenty dinner is like eight-sixty-something in yuan. Yeah, New York prices!", textZh: "现在大概七点二比一。所以一百二的晚餐换成人民币八百六十多。没办法，纽约价格！", actionHint: "seven-point-two to one 汇率的口语说法", frequency: "common" },
              { textEn: "Dollar to yuan is running about seven-two right now. So a hundred twenty bucks works out to, what, eight-sixty-four yuan? This is New York though.", textZh: "美元兑人民币现在大概七块二。一百二十块换算下来，八百六十四人民币？不过这是纽约嘛。", actionHint: "running about = 大约在, works out to = 换算后是", frequency: "occasional" },
            ],
            casualVersion: "Last I checked, a US dollar's like 7.2 yuan. So your 120 dollar dinner would be around 864 yuan. Pretty pricey! But hey, it's New York.",
            formalityVariants: {
              casual: "Last I checked, a US dollar's like 7.2 yuan. So your 120 dollar dinner would be around 864 yuan. Pretty pricey! But hey, it's New York.",
              standard: "Last I checked, one US dollar is about 7.2 Chinese yuan. So your $120 dinner would be around 864 yuan. Not cheap! But this is New York.",
              formal: "To my last recollection, the approximate exchange rate is one US dollar to 7.2 Chinese yuan. Therefore, your $120 dinner would equate to approximately 864 yuan. While that is a considerable sum, one must account for the cost of living in New York.",
            },
          },
          {
            speaker: "you",
            textEn: "864 yuan for one dinner — my mom would faint! But it's a special occasion. One more question — what's the Wi-Fi password at your hotel?",
            textZh: "一顿饭864人民币——我妈要晕倒了！但这是特别的场合。最后一个问题——你们酒店的Wi-Fi密码是什么？",
            casualVersion: "864 yuan for one dinner — my mom would totally faint! But hey, it's a special occasion. Oh, one more thing — what's the Wi-Fi password here?",
            commonMistake: {
              wrong: "What is the password of Wi-Fi?",
              correct: "What's the Wi-Fi password?",
              explanation: "“Wi-Fi password” 是常见的固定搭配，听起来更自然。",
            },
            formalityVariants: {
              casual: "864 yuan for one dinner — my mom would totally faint! But hey, it's a special occasion. Oh, one more thing — what's the Wi-Fi password here?",
              standard: "864 yuan for one dinner — my mom would faint! But it's a special occasion. One more question — what's the Wi-Fi password at your hotel?",
              formal: "Indeed, 864 yuan for a single dinner would likely alarm my mother! However, this is for a special occasion. I have one additional inquiry: Could you please provide the Wi-Fi password for this hotel?",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "Ha! The password is GrandHotel2026, all one word. Capital G, capital H, then the numbers two-zero-two-six. No spaces.",
            textZh: "哈！密码是 GrandHotel2026，连在一起写。大写G，大写H，然后数字 two-zero-two-six。没有空格。",
            keyPhrases: [
              { en: "all one word", zh: "连在一起写" },
              { en: "capital", zh: "大写" },
              { en: "no spaces", zh: "没有空格" },
            ],
            alternativeExpressions: [
              { textEn: "The Wi-Fi? It's GrandHotel2026, no spaces. Big G, big H, then two-oh-two-six.", textZh: "Wi-Fi？是 GrandHotel2026，没有空格。大写G，大写H，然后 2026。", actionHint: "big = capital 的口语说法", frequency: "common" },
              { textEn: "Password's GrandHotel2026 — one word, caps on the G and H, then the year twenty twenty-six.", textZh: "密码是 GrandHotel2026——一个词，G 和 H 大写，然后年份 2026。", actionHint: "caps = capital letters, the year 说明数字含义", frequency: "occasional" },
            ],
            casualVersion: "Ha! It's GrandHotel2026, all one word. Big G, big H, then 2026. No spaces.",
            commonMistake: {
              wrong: "Big G, big H, then numbers two-zero-two-six.",
              correct: "Capital G, capital H, then the numbers two-zero-two-six.",
              explanation: "“Capital” 更正式准确，口语中 “big” 也常见，但应统一措辞。",
            },
            formalityVariants: {
              casual: "Ha! It's GrandHotel2026, all one word. Big G, big H, then 2026. No spaces.",
              standard: "Ha! The password is GrandHotel2026, all one word. Capital G, capital H, then the numbers two-zero-two-six. No spaces.",
              formal: "Indeed! The password is GrandHotel2026, which is a single contiguous word. It begins with a capital 'G', followed by a capital 'H', and then the numerical sequence two-zero-two-six. There are no intervening spaces.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 天气和季节 ====================
  {
    id: "foundation-weather",
    category: "foundation",
    titleZh: "天气和季节",
    titleEn: "Weather & Seasons",
    description: "谈论天气、理解天气预报、根据天气穿衣，掌握天气相关的日常表达",
    otherRole: "对方",
    otherRoleIcon: "cloud-sun",
    flows: [
      // --- Flow 1: 日常天气对话 ---
      {
        id: "weather-talk",
        titleZh: "日常天气对话",
        titleEn: "Everyday Weather Talk",
        description: "在日常闲聊中谈论天气，包括当天天气和穿衣建议",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "对方",
            textEn: "Beautiful day today, isn't it?",
            textZh: "今天天气真好，是吧？",
            keyPhrases: [
              { en: "beautiful day", zh: "天气好的一天" },
            ],
            culturalNote: "谈论天气是英语国家最常见的闲聊话题（small talk）。陌生人之间、电梯里、排队时都可以聊天气。",
            alternativeExpressions: [
              { textEn: "Lovely weather we're having!", textZh: "天气真不错！", actionHint: "简单附和即可", frequency: "common" },
              { textEn: "Can you believe this weather?", textZh: "这天气真是难以置信！", actionHint: "可以表示赞同", frequency: "common" },
              { textEn: "What a gorgeous day!", textZh: "多好的天啊！", actionHint: "表示赞同", frequency: "occasional" },
            ],
            casualVersion: "Nice day, huh?",
            formalityVariants: {
              casual: "Nice day, huh?",
              standard: "Beautiful day today, isn't it?",
              formal: "It is a truly lovely day, wouldn't you agree?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, it's perfect! Not too hot, not too cold. I hope it stays like this for the rest of my trip.",
            textZh: "是的，太完美了！不太热也不太冷。希望我剩下的旅程都能这样。",
            casualVersion: "Yeah, it's perfect! Not too hot, not too cold. Hope it stays like this for the trip.",
            commonMistake: {
              wrong: "I hope it keeps like this for my trip.",
              correct: "I hope it stays like this for the rest of my trip.",
              explanation: "动词'stay'更自然；'the rest of my trip'更具体。",
            },
            formalityVariants: {
              casual: "Yeah, it's perfect! Not too hot, not too cold. Hope it stays like this for the trip.",
              standard: "Yes, it's perfect! Not too hot, not too cold. I hope it stays like this for the rest of my trip.",
              formal: "Indeed, it is quite perfect. The temperature is ideal. I do hope these pleasant conditions persist for the remainder of my visit.",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "Well, don't get too comfortable — they're calling for rain tomorrow. You might want to pack an umbrella. It's supposed to be chilly too, around 50 degrees.",
            textZh: "别高兴太早——预报说明天有雨。你可能要带把伞。气温也会降下来，大约50华氏度。",
            keyPhrases: [
              { en: "calling for rain", zh: "预报有雨" },
              { en: "pack an umbrella", zh: "带把伞" },
              { en: "chilly", zh: "有点冷/凉飕飕" },
              { en: "50 degrees", zh: "50华氏度（约10摄氏度）" },
            ],
            vocabNotes: {
              chilly: { meaningInContext: "在这句话里表示：有点冷但还没到寒冷的程度，凉飕飕的", similarUsage: "类似用法：It gets chilly in the evening, so bring a jacket." },
              "calling for": { meaningInContext: "在这句话里表示：天气预报说/预测", similarUsage: "类似用法：They're calling for snow this weekend." },
            },
            alternativeExpressions: [
              { textEn: "Enjoy it while it lasts — tomorrow's supposed to rain. Grab an umbrella and maybe a jacket. It's gonna be like fifty degrees.", textZh: "趁现在好好享受——明天会下雨。带把伞，可能还要带件外套。大概五十度。", actionHint: "enjoy it while it lasts = 趁好天气享受吧, gonna = going to", frequency: "common" },
              { textEn: "Don't jinx it! Rain's coming tomorrow, and it'll cool down to about fifty. Definitely bring layers.", textZh: "别乌鸦嘴！明天要下雨，气温会降到五十度左右。一定穿多层。", actionHint: "don't jinx it = 别说破了/别乌鸦嘴", frequency: "occasional" },
            ],
            casualVersion: "Uh oh, don't get too comfy — they're sayin' rain tomorrow. Might wanna pack an umbrella. S'posed to be chilly too, like 50 degrees.",
            culturalNote: "美国常用华氏度，50华氏度约10摄氏度。",
            commonMistake: {
              wrong: "They say will rain tomorrow. It's supposed chilly.",
              correct: "They're calling for rain tomorrow. It's supposed to be chilly.",
              explanation: "表达下雨用'calling for rain'或'it will rain'；'supposed to be'更完整。",
            },
            formalityVariants: {
              casual: "Uh oh, don't get too comfy — they're sayin' rain tomorrow. Might wanna pack an umbrella. S'posed to be chilly too, like 50 degrees.",
              standard: "Well, don't get too comfortable — they're calling for rain tomorrow. You might want to pack an umbrella. It's supposed to be chilly too, around 50 degrees.",
              formal: "However, I must inform you that the forecast indicates rain for tomorrow. It would be prudent to carry an umbrella. Furthermore, the temperature is expected to drop, with highs around 50 degrees Fahrenheit.",
            },
          },
          {
            speaker: "you",
            textEn: "50 degrees Fahrenheit... so that's about 10 Celsius? I should bring a jacket. What's the warmest thing to wear that's still easy to carry?",
            textZh: "华氏50度……大概是10摄氏度？我应该带件外套。什么衣服最保暖又方便携带？",
            casualVersion: "50 F... so, like 10 C? Gotta bring a jacket then. What's the warmest thing that's still easy to carry?",
            commonMistake: {
              wrong: "What is the most warm clothes that is easy to carry?",
              correct: "What's the warmest thing to wear that's still easy to carry?",
              explanation: "'warmest'是最高级；'thing to wear'比'clothes'更自然，'easy to carry'作定语。",
            },
            formalityVariants: {
              casual: "50 F... so, like 10 C? Gotta bring a jacket then. What's the warmest thing that's still easy to carry?",
              standard: "50 degrees Fahrenheit... so that's about 10 Celsius? I should bring a jacket. What's the warmest thing to wear that's still easy to carry?",
              formal: "Fifty degrees Fahrenheit... that would equate to approximately ten degrees Celsius, correct? In that case, I presume a jacket would be advisable. Could you recommend the most insulating yet portable outerwear?",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "I'd say layer up. Wear a long-sleeve shirt, then a light sweater, and bring a windbreaker or rain jacket on top. That way you can take layers off if it warms up. And definitely wear closed-toe shoes — puddles everywhere when it rains here.",
            textZh: "建议穿多层。穿一件长袖衬衫，外面一件薄毛衣，再带一件防风衣或雨衣。这样暖和了可以脱。而且一定穿包头鞋——下雨的时候到处都是水坑。",
            keyPhrases: [
              { en: "layer up", zh: "穿多层" },
              { en: "windbreaker", zh: "防风衣" },
              { en: "rain jacket", zh: "雨衣/防水外套" },
              { en: "closed-toe shoes", zh: "包头鞋" },
              { en: "puddles", zh: "水坑" },
            ],
            alternativeExpressions: [
              { textEn: "Just dress in layers — long sleeves, a sweater, and throw on a rain jacket. And don't wear sandals, it gets puddle-y.", textZh: "穿多层就行——长袖、毛衣，再套件雨衣。别穿凉鞋，到处都是水坑。", actionHint: "throw on = 随手套上, puddle-y 是随口造的形容词", frequency: "common" },
              { textEn: "Layers are your best bet. Something waterproof on top. Oh, and closed shoes — you don't wanna step in a puddle with flip-flops.", textZh: "穿多层最靠谱。外面穿防水的。对了，穿包头鞋——你肯定不想穿人字拖踩水坑。", actionHint: "your best bet = 最好的选择, flip-flops = 人字拖", frequency: "occasional" },
            ],
            casualVersion: "Just layer up. Long-sleeve shirt, then a light sweater, and a windbreaker or rain jacket over that. Can take layers off if it warms up. And def wear closed-toe shoes — puddles'll be everywhere when it rains.",
            commonMistake: {
              wrong: "Wear clothes in layers. And definitely wear closed head shoes.",
              correct: "Layer up. And definitely wear closed-toe shoes.",
              explanation: "'layer up'是更地道的表达；'closed-toe shoes'指包头鞋。",
            },
            formalityVariants: {
              casual: "Just layer up. Long-sleeve shirt, then a light sweater, and a windbreaker or rain jacket over that. Can take layers off if it warms up. And def wear closed-toe shoes — puddles'll be everywhere when it rains.",
              standard: "I'd say layer up. Wear a long-sleeve shirt, then a light sweater, and bring a windbreaker or rain jacket on top. That way you can take layers off if it warms up. And definitely wear closed-toe shoes — puddles everywhere when it rains here.",
              formal: "My recommendation would be to dress in layers. Commence with a long-sleeved shirt, followed by a light sweater, and then an outer layer such as a windbreaker or rain jacket. This approach allows for adjustments should the temperature increase. Furthermore, I strongly advise wearing closed-toe footwear, as rainwater tends to accumulate significantly in this area.",
            },
          },
          {
            speaker: "you",
            textEn: "Good advice. What about the day after tomorrow? I'm planning to go hiking.",
            textZh: "好建议。后天呢？我打算去爬山。",
            casualVersion: "Good call. What about day after tomorrow? I'm plannin' to hike.",
            commonMistake: {
              wrong: "The day after tomorrow how about? I plan to hiking.",
              correct: "What about the day after tomorrow? I'm planning to go hiking.",
              explanation: "'How about...'是正确问句；'plan to do'或'plan on doing'是正确用法。",
            },
            formalityVariants: {
              casual: "Good call. What about day after tomorrow? I'm plannin' to hike.",
              standard: "Good advice. What about the day after tomorrow? I'm planning to go hiking.",
              formal: "That is excellent advice, thank you. Regarding the day after tomorrow, what is the forecast? I am planning a hiking excursion.",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "The day after tomorrow looks much better. Clear skies, sunny, high around 65. Perfect hiking weather! Just put on sunscreen — the UV is strong this time of year even when it doesn't feel hot.",
            textZh: "后天看起来好多了。晴天，阳光明媚，最高温大约65华氏度。完美的爬山天气！记得涂防晒——这个季节紫外线很强，即使感觉不热。",
            keyPhrases: [
              { en: "clear skies", zh: "晴天/万里无云" },
              { en: "sunny", zh: "阳光明媚" },
              { en: "sunscreen", zh: "防晒霜" },
              { en: "UV", zh: "紫外线" },
              { en: "high around 65", zh: "最高温约65度" },
            ],
            alternativeExpressions: [
              { textEn: "Day after tomorrow should be gorgeous — blue sky, sixty-five degrees. Great for a hike! Just slap on some sunscreen, the sun's pretty strong this time of year.", textZh: "后天应该是好天——蓝天，六十五度。很适合爬山！记得抹防晒，这个季节太阳挺强的。", actionHint: "gorgeous = 非常好, slap on = 涂上（口语）", frequency: "common" },
              { textEn: "Looks like it'll clear up by then — sunny, mid-sixties. Perfect hiking weather. Make sure you put on SPF though.", textZh: "到时候应该放晴了——晴天，六十五度左右。完美的爬山天气。记得涂防晒。", actionHint: "clear up = 天放晴, SPF = 防晒指数/防晒霜", frequency: "common" },
            ],
            casualVersion: "Day after tomorrow's lookin' way better. Clear skies, sunny, high around 65. Perfect for hiking! Just slap on some sunscreen — UV's strong this time of year even when it's not hot.",
            culturalNote: "美国常用华氏度，65华氏度约18摄氏度。",
            commonMistake: {
              wrong: "High around 65 degree. Just wear sunscreen.",
              correct: "High around 65 degrees. Just put on sunscreen.",
              explanation: "'degrees'是复数；'put on sunscreen'比'wear sunscreen'更自然。",
            },
            formalityVariants: {
              casual: "Day after tomorrow's lookin' way better. Clear skies, sunny, high around 65. Perfect for hiking! Just slap on some sunscreen — UV's strong this time of year even when it's not hot.",
              standard: "The day after tomorrow looks much better. Clear skies, sunny, high around 65. Perfect hiking weather! Just put on sunscreen — the UV is strong this time of year even when it doesn't feel hot.",
              formal: "The forecast for the day after tomorrow is significantly more favorable. We anticipate clear skies, abundant sunshine, and a high temperature of approximately 65 degrees Fahrenheit. This will be ideal weather for hiking. However, I must emphasize the importance of applying sunscreen, as ultraviolet radiation remains potent during this season, irrespective of the perceived temperature.",
            },
          },
          {
            speaker: "you",
            textEn: "Clear skies and 65 degrees — that sounds amazing. Thanks for the weather tip!",
            textZh: "晴天、65度——听起来太棒了。谢谢你的天气建议！",
            casualVersion: "Clear skies, 65 — sounds awesome! Thanks for the tip!",
            commonMistake: {
              wrong: "Clear skies and 65 degree. Thanks for your weather advice!",
              correct: "Clear skies and 65 degrees. Thanks for the weather tip!",
              explanation: "'degrees'是复数；'weather tip'比'weather advice'更口语化、自然。",
            },
            formalityVariants: {
              casual: "Clear skies, 65 — sounds awesome! Thanks for the tip!",
              standard: "Clear skies and 65 degrees — that sounds amazing. Thanks for the weather tip!",
              formal: "Clear skies and 65 degrees Fahrenheit — that is indeed splendid news. Thank you for providing this valuable weather information!",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "No problem! By the way, if you want to check the forecast, just search \"weather\" on your phone. It'll show the 10-day forecast for your location. Or try the Weather Channel app — it even gives hourly updates.",
            textZh: "不客气！对了，如果想查天气预报，手机上搜 \"weather\" 就行。会显示你所在位置的10天预报。或者试试 Weather Channel 的App——甚至有每小时更新。",
            keyPhrases: [
              { en: "forecast", zh: "天气预报" },
              { en: "10-day forecast", zh: "10天预报" },
              { en: "hourly updates", zh: "每小时更新" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing! Just Google \"weather\" and it'll pop right up. Or download the Weather Channel app — it's got hour-by-hour forecasts.", textZh: "没问题！Google 搜 \"weather\" 就会弹出来。或者下载 Weather Channel 的 App——有逐小时预报。", actionHint: "pop right up = 马上弹出来", frequency: "common" },
              { textEn: "Anytime! Pro tip — just type \"weather\" into your phone's browser. It auto-detects your location and shows you the ten-day outlook.", textZh: "随时！小技巧——手机浏览器里打 \"weather\" 就行。它自动检测你的位置，显示十天的天气。", actionHint: "pro tip = 小技巧, outlook = forecast", frequency: "occasional" },
            ],
            casualVersion: "No prob! Btw, wanna check the forecast, just search \\",
            commonMistake: {
              wrong: "No problem! If you want check forecast, you can search \\",
              correct: "No problem! If you want to check the forecast, just search \\",
              explanation: "'want to'是正确用法；'the forecast'需要定冠词；'just search'更地道。",
            },
            formalityVariants: {
              casual: "No prob! Btw, wanna check the forecast, just search \\",
              standard: "No problem! By the way, if you want to check the forecast, just search \\",
              formal: "You are most welcome. Incidentally, should you wish to review the weather forecast yourself, you may simply conduct a search for \\",
            },
          },
        ],
      },

      // --- Flow 2: 天气预报和极端天气 ---
      {
        id: "forecasts-extreme",
        titleZh: "天气预报和极端天气",
        titleEn: "Forecasts & Extreme Weather",
        description: "理解天气预报用语，了解极端天气警告和应对",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "对方",
            textEn: "Did you see the weather alert? There's a severe thunderstorm warning for this afternoon. Heavy rain, strong winds, and possible hail.",
            textZh: "你看到天气预警了吗？今天下午有强雷暴警告。大雨、强风，可能有冰雹。",
            keyPhrases: [
              { en: "weather alert", zh: "天气预警" },
              { en: "severe thunderstorm warning", zh: "强雷暴警告" },
              { en: "heavy rain", zh: "大雨" },
              { en: "strong winds", zh: "强风" },
              { en: "hail", zh: "冰雹" },
            ],
            vocabNotes: {
              hail: { meaningInContext: "在这句话里表示：从天上掉下来的冰粒/冰雹", similarUsage: "类似用法：The hailstones were as big as golf balls." },
            },
            alternativeExpressions: [
              { textEn: "Hey, did you check the weather? There's a big storm coming this afternoon — thunder, heavy rain, maybe even hail.", textZh: "嘿，你看天气预报了吗？今天下午有大暴风雨——打雷、大雨，可能还有冰雹。", actionHint: "big storm 比 severe thunderstorm 更口语", frequency: "common" },
              { textEn: "Heads up — nasty weather this afternoon. Thunderstorm warning. Could get pretty rough with wind and hail.", textZh: "提醒一下——今天下午天气很糟。有雷暴警告。风和冰雹可能很猛。", actionHint: "nasty = 糟糕的, rough = 恶劣的", frequency: "common" },
            ],
            casualVersion: "You see that weather alert? Severe thunderstorm warning this afternoon. Heavy rain, strong winds, maybe hail.",
            formalityVariants: {
              casual: "You see that weather alert? Got a severe thunderstorm warning for this afternoon. Heavy rain, strong winds, possible hail.",
              standard: "Did you see the weather alert? There's a severe thunderstorm warning for this afternoon. Heavy rain, strong winds, and possible hail.",
              formal: "Pardon me, have you been notified of the weather alert? We have a severe thunderstorm warning issued for this afternoon, forecasting heavy precipitation, high winds, and a possibility of hail.",
            },
          },
          {
            speaker: "you",
            textEn: "No, I didn't see it. How bad will it be? I was planning to go sightseeing this afternoon.",
            textZh: "没有，我没看到。会有多严重？我下午本来打算去观光。",
            casualVersion: "Nah, didn't see it. How bad's it gonna be? Was plannin' on sightseeing this afternoon.",
            commonMistake: {
              wrong: "I didn't see. How bad will it be? I plan to go sightseeing this afternoon.",
              correct: "No, I didn't see it. How bad will it be? I was planning to go sightseeing this afternoon.",
              explanation: "缺少代词 'it'，'I plan' 听起来像现在的计划而非过去的打算",
            },
            formalityVariants: {
              casual: "Nah, didn't see it. How bad's it gonna be? I was gonna go sightseeing this afternoon.",
              standard: "No, I didn't see it. How bad will it be? I was planning to go sightseeing this afternoon.",
              formal: "No, I was not aware of it. Could you please elaborate on the severity? I had intended to engage in sightseeing activities this afternoon.",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "I'd reschedule the sightseeing. The winds could reach 50 to 60 miles per hour. That's dangerous, especially near tall buildings. Stay indoors from about 2 PM to 6 PM. The storm should pass by evening.",
            textZh: "建议改天去观光。风速可能达到每小时50到60英里。很危险，特别是在高楼附近。从下午2点到6点待在室内。暴风雨傍晚应该就过了。",
            keyPhrases: [
              { en: "reschedule", zh: "改期" },
              { en: "miles per hour", zh: "每小时英里" },
              { en: "stay indoors", zh: "待在室内" },
              { en: "should pass by", zh: "应该就过了" },
            ],
            alternativeExpressions: [
              { textEn: "I wouldn't go out if I were you. Wind's gonna be like fifty, sixty miles an hour. Just hang tight indoors from two to six — it should blow over by evening.", textZh: "我要是你就不出去了。风速大概五六十英里每小时。两点到六点在室内待着——傍晚应该就过了。", actionHint: "hang tight = 待着别动, blow over = 暴风雨过去", frequency: "common" },
              { textEn: "Definitely skip the sightseeing today. We're talking fifty, sixty mph winds. Stay inside this afternoon — the worst of it'll be over by six or so.", textZh: "今天观光肯定取消吧。风速五六十迈。下午待在室内——最严重的六点左右就过了。", actionHint: "we're talking = 我们说的是（强调程度）, mph = miles per hour", frequency: "occasional" },
            ],
            casualVersion: "Yeah, I'd reschedule sightseeing. Winds could hit 50-60 mph. That's dangerous, 'specially near tall buildings. Stay inside 'til like, 2-6 PM. Storm should pass by evening.",
            commonMistake: {
              wrong: "I suggest you reschedule sightseeing. The wind can reach 50 to 60 miles per hour.",
              correct: "I'd reschedule the sightseeing. The winds could reach 50 to 60 miles per hour.",
              explanation: "'I'd reschedule' 更自然且语气委婉。'can' 不如 'could' 表达可能性恰当",
            },
            formalityVariants: {
              casual: "Yeah, I'd reschedule sightseeing. Winds might hit 50-60 mph. Dangerous, especially near tall buildings. Just stay inside from about 2-6 PM. Should clear up by evening.",
              standard: "I'd reschedule the sightseeing. The winds could reach 50 to 60 miles per hour. That's dangerous, especially near tall buildings. Stay indoors from about 2 PM to 6 PM. The storm should pass by evening.",
              formal: "My recommendation would be to postpone your sightseeing plans. Wind speeds are projected to reach between 50 and 60 miles per hour, which presents a considerable hazard, particularly in proximity to high-rise structures. Please remain indoors approximately between 2 PM and 6 PM. The weather system is expected to dissipate by early evening.",
            },
          },
          {
            speaker: "you",
            textEn: "I see. What's the difference between a weather \"watch\" and a \"warning\"? I keep seeing both on the news.",
            textZh: "明白了。天气 \"watch\" 和 \"warning\" 有什么区别？新闻上两个都看到过。",
            casualVersion: "Gotcha. What's the diff between a weather \\",
            formalityVariants: {
              casual: "Gotcha. So what's the diff between a weather \\",
              standard: "I see. What's the difference between a weather \\",
              formal: "I understand. Could you please clarify the distinction between a weather \\",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "Good question! A \"watch\" means conditions are favorable for severe weather — it might happen. A \"warning\" means it's already happening or about to happen. Warning is more urgent. If you hear a tornado warning, for example, take shelter immediately.",
            textZh: "好问题！\"Watch\" 意思是条件适合出现恶劣天气——可能会发生。\"Warning\" 意思是已经在发生或即将发生。Warning 更紧急。比如听到龙卷风警告（tornado warning），要立刻找掩护。",
            keyPhrases: [
              { en: "watch", zh: "预告/注意（可能发生）" },
              { en: "warning", zh: "警告（正在/即将发生）" },
              { en: "tornado", zh: "龙卷风" },
              { en: "take shelter", zh: "找掩护/避难" },
            ],
            culturalNote: "美国的天气预警系统：Watch（注意/可能）→ Warning（警告/确定）→ Emergency（紧急）。手机会收到紧急警报推送（Emergency Alert）。",
            alternativeExpressions: [
              { textEn: "So basically, a watch means it could happen. A warning means it's happening or about to. Warning's way more serious. Like, if you get a tornado warning, find shelter ASAP.", textZh: "简单说，watch 是可能发生。warning 是正在发生或马上发生。warning 严重得多。比如收到龙卷风警告，赶紧找掩护。", actionHint: "basically = 简单说, ASAP = as soon as possible", frequency: "common" },
              { textEn: "Think of it this way — watch is like 'heads up, it might happen.' Warning is 'it\'s happening, take cover.' Big difference.", textZh: "这样理解——watch 就是'注意，可能发生'，warning 就是'正在发生，赶紧躲'。区别很大。", actionHint: "think of it this way 帮助解释概念", frequency: "occasional" },
            ],
            casualVersion: "Good question! So, a \\",
            formalityVariants: {
              casual: "Good question! A \\",
              standard: "Good question! A \\",
              formal: "That's an excellent question. A \\",
            },
          },
          {
            speaker: "you",
            textEn: "That's really useful to know. What about the rest of the week? Will the weather improve?",
            textZh: "真有用。这周剩下几天呢？天气会好转吗？",
            casualVersion: "Super useful to know. What about the rest of the week? Weather gonna get better?",
            commonMistake: {
              wrong: "That's very useful. The rest of week? Weather become better?",
              correct: "That's really useful to know. What about the rest of the week? Will the weather improve?",
              explanation: "'very' 不如 'really' 口语化，'the rest of the week' 更完整，'will' 和倒装不可少",
            },
            formalityVariants: {
              casual: "That's super useful. What about the rest of the week? Will it get better?",
              standard: "That's really useful to know. What about the rest of the week? Will the weather improve?",
              formal: "I find that information most helpful. Regarding the remainder of the week, do you anticipate any improvement in the weather conditions?",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "Let me check... Thursday will be overcast with scattered showers. Friday looks dry but cold — low of 38, high of 52. The weekend should be nice — mostly sunny with temperatures in the mid-60s. Spring weather is unpredictable around here.",
            textZh: "我查一下……周四阴天，零星阵雨。周五没有雨但比较冷——最低38度，最高52度。周末应该不错——大部分晴天，温度在65度左右。这边的春天天气很难预测。",
            keyPhrases: [
              { en: "overcast", zh: "阴天" },
              { en: "scattered showers", zh: "零星阵雨" },
              { en: "dry", zh: "没雨的/干燥" },
              { en: "low / high", zh: "最低温/最高温" },
              { en: "mostly sunny", zh: "大部分晴天" },
              { en: "mid-60s", zh: "65度左右" },
              { en: "unpredictable", zh: "难以预测" },
            ],
            alternativeExpressions: [
              { textEn: "Lemme look... Thursday's gonna be gray and rainy on and off. Friday's dry but cold — thirties at night, fifties during the day. Weekend looks solid though — sunny, mid-sixties. Spring's crazy around here.", textZh: "我看看……周四阴天，断断续续下雨。周五没雨但冷——晚上三十多度，白天五十多度。周末倒是不错——晴天，六十五度左右。这边春天天气真是疯。", actionHint: "on and off = 断断续续, looks solid = 看起来不错", frequency: "common" },
              { textEn: "Thursday — overcast, showers here and there. Friday clears up but it'll be chilly, high of fifty-two. The weekend's looking great though — sunshine, sixties. Welcome to spring weather!", textZh: "周四——阴天，零星阵雨。周五放晴但比较冷，最高五十二度。周末倒是很好——阳光，六十多度。欢迎体验春天的天气！", actionHint: "here and there = 零星的, clears up = 放晴", frequency: "occasional" },
            ],
            casualVersion: "Lemme check... Thursday's gonna be cloudy, some showers. Friday looks dry but chilly — low 38, high 52. Weekend should be good — mostly sunny, temps in the mid-60s. Spring weather's kinda wild here.",
            commonMistake: {
              wrong: "Let me check... Thursday will be overcast with few showers. Friday is dry but cold.",
              correct: "Let me check... Thursday will be overcast with scattered showers. Friday looks dry but cold.",
              explanation: "'scattered showers' 比 'few showers' 更常用，'looks dry' 比 'is dry' 更符合天气预报的语境",
            },
            formalityVariants: {
              casual: "Lemme check... Thursday's gonna be cloudy, few showers. Friday's dry but chilly, like, 38-52. Weekend looks great — sunny, mid-60s. Spring's always kinda unpredictable here.",
              standard: "Let me check... Thursday will be overcast with scattered showers. Friday looks dry but cold — low of 38, high of 52. The weekend should be nice — mostly sunny with temperatures in the mid-60s. Spring weather is unpredictable around here.",
              formal: "Allow me to consult the forecast. For Thursday, we anticipate overcast conditions with intermittent, scattered showers. Friday appears to be dry, yet cool, with a low of 38 degrees and a high of 52 degrees. The weekend, however, shows promise for pleasant weather, predominantly sunny with temperatures ranging in the mid-60s. It's worth noting that spring weather in this region is typically quite variable.",
            },
          },
          {
            speaker: "you",
            textEn: "Good to know. I'll plan my outdoor activities for the weekend then. It's funny how much we talk about the weather in English!",
            textZh: "了解了。那我把户外活动安排到周末。有意思，英语里聊天气聊这么多！",
            casualVersion: "Good to know. I'll just plan my outdoor stuff for the weekend then. Funny how much we talk about the weather in English!",
            culturalNote: "美国人常用天气来开启对话，是重要的社交润滑剂",
            commonMistake: {
              wrong: "Good to know. I will plan my outdoor activities to weekend. It's funny that we talk so much about weather in English!",
              correct: "Good to know. I'll plan my outdoor activities for the weekend then. It's funny how much we talk about the weather in English!",
              explanation: "介词 'for' 比 'to' 更适合表示时间安排，'how much' 比 'that we talk so much' 更自然",
            },
            formalityVariants: {
              casual: "Good to know. So I'll just do my outdoor stuff this weekend. Lol, can't believe how much we talk about the weather in English!",
              standard: "Good to know. I'll plan my outdoor activities for the weekend then. It's funny how much we talk about the weather in English!",
              formal: "That's valuable information. I shall therefore schedule my outdoor activities for the weekend. It is rather amusing how frequently we discuss meteorological conditions in English discourse!",
            },
          },
          {
            speaker: "them",
            role: "对方",
            textEn: "Ha, you've noticed! Weather is the number one small talk topic in English. It's a safe topic that everyone can relate to. If you're ever stuck in an awkward silence, just say something about the weather — instant conversation starter!",
            textZh: "哈，你发现了！天气是英语里排名第一的闲聊话题。是一个安全的、人人都能参与的话题。如果陷入尴尬的沉默，说句天气的话就行——立刻就能开启对话！",
            keyPhrases: [
              { en: "small talk", zh: "闲聊" },
              { en: "safe topic", zh: "安全的话题" },
              { en: "awkward silence", zh: "尴尬的沉默" },
              { en: "conversation starter", zh: "开启对话的话题" },
            ],
            alternativeExpressions: [
              { textEn: "Ha, welcome to English small talk! Weather is the go-to topic. If things get quiet, just say something about the weather — works every time.", textZh: "哈，欢迎来到英语闲聊世界！天气是万能话题。冷场的时候说句天气就行——百试百灵。", actionHint: "go-to = 首选的/万能的, works every time = 每次都管用", frequency: "common" },
              { textEn: "Oh yeah, we love talking about the weather. It's like the universal icebreaker. Stuck in an elevator? Talk about the weather. Waiting in line? Weather. Never fails.", textZh: "哦对，我们超爱聊天气。就像万能破冰话题。电梯里尴尬？聊天气。排队？天气。从不失败。", actionHint: "icebreaker = 破冰话题, never fails = 百试百灵", frequency: "common" },
            ],
            casualVersion: "Haha, you noticed! Weather's like, the top small talk topic in English. It's a safe one everyone gets. If you're ever in awkward silence, just say somethin' about the weather — instant convo starter!",
            commonMistake: {
              wrong: "Ha, you noticed! Weather is number one small talk topic. If you stuck in awkward silence, just say something about weather.",
              correct: "Ha, you've noticed! Weather is the number one small talk topic in English. If you're ever stuck in an awkward silence, just say something about the weather.",
              explanation: "'the number one' 需要定冠词，'you are stuck' 更完整，'the weather' 需定冠词",
            },
            formalityVariants: {
              casual: "Haha, you noticed! Weather's totally the top small talk topic in English. It's super safe, everyone gets it. If you're ever stuck in silence, just mention the weather — instant conversation!",
              standard: "Ha, you've noticed! Weather is the number one small talk topic in English. It's a safe topic that everyone can relate to. If you're ever stuck in an awkward silence, just say something about the weather — instant conversation starter!",
              formal: "Indeed, you've astutely observed! Discussions about the weather unequivocally constitute the foremost topic for small talk in the English language. It serves as a universally accessible and innocuous subject. Should you ever find yourself in a moment of uncomfortable silence, a remark pertaining to the weather invariably functions as an effective icebreaker.",
            },
          },
        ],
      },
    ],
  },
];
