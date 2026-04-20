import type { PresetScene } from "../scene-types";

export const ENTERTAINMENT_SCENES_EXT: PresetScene[] = [
  // ==================== 购买电影票 ====================
  {
    id: "entertainment-movie-tickets",
    category: "entertainment",
    titleZh: "购买电影票",
    titleEn: "Buying Movie Tickets",
    description: "在电影院柜台或自助机购买电影票",
    otherRole: "售票员",
    otherRoleIcon: "🎬",
    flows: [
      {
        id: "counter-tickets",
        titleZh: "柜台买票",
        titleEn: "Counter Ticket Purchase",
        description: "在电影院柜台向工作人员购买电影票",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, what movies are showing tonight?",
            textZh: "你好，今晚有什么电影？",
            culturalNote: "美国人购票时通常直接说明目的，无需过多寒暄。",
            commonMistake: {
              wrong: "What movies are there tonight?",
              correct: "What movies are showing tonight?",
              explanation: "电影上映用 'showing' 或 'playing' 更地道，'there' 听起来不自然。",
            },
            formalityVariants: {
              casual: "Hey, what's playing tonight?",
              standard: "Hi, what movies are showing tonight?",
              formal: "Excuse me, could you please tell me what films are scheduled to be shown this evening?",
            },
            casualVersion: "Hey, what's playing tonight?",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "We have three showings tonight: an action movie at 7, a comedy at 7:30, and a horror film at 8. Which one interests you?",
            textZh: "今晚有三场：7点的动作片、7:30的喜剧片和8点的恐怖片。您对哪个感兴趣？",
            casualVersion: "Okay, so tonight's got three showings: action at 7, comedy at 7:30, and horror at 8. Anything sound good?",
            formalityVariants: {
              casual: "Tonight, we've got action at 7, comedy at 7:30, and horror at 8. See anything you like?",
              standard: "We have three showings tonight: an action movie at 7, a comedy at 7:30, and a horror film at 8. Which one interests you?",
              formal: "Certainly, we are scheduled to present three features this evening: an action film at 7 PM, a comedic presentation at 7:30 PM, and a horror film at 8 PM. Do any of these options appeal to you?",
            },
            keyPhrases: [
              { en: "showings", zh: "场次" },
              { en: "which one interests you", zh: "您对哪个感兴趣" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "So tonight we've got an action flick at 7, a comedy at 7:30, and a horror one at 8. What are you in the mood for?",
                textZh: "今晚有7点的动作片、7:30的喜剧和8点的恐怖片。你想看哪个？",
                actionHint: "在询问你的偏好，直接说想看的类型",
                frequency: "common",
              },
              {
                textEn:
                  "There's three movies playing tonight — action at 7, comedy at 7:30, horror at 8. Any of those catch your eye?",
                textZh: "今晚有三部片——7点动作片、7:30喜剧、8点恐怖片。有看上的吗？",
                actionHint: "列出选项让你挑，直接说你的选择",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "The comedy sounds good. Two adult tickets, please.",
            textZh: "喜剧片听起来不错。请给我两张成人票。",
            casualVersion: "Comedy sounds good. Two adult tickets.",
            commonMistake: {
              wrong: "Comedy is good. I want two adult tickets.",
              correct: "The comedy sounds good. Two adult tickets, please.",
              explanation: "'sounds good' 更自然。'I want' 较生硬，礼貌用语重要。",
            },
            formalityVariants: {
              casual: "Comedy sounds good. Two adults.",
              standard: "The comedy sounds good. Two adult tickets, please.",
              formal: "Yes, the comedy sounds quite appealing. May I request two adult tickets, please?",
            },
            culturalNote:
              "在欧美买票时要说明是成人票 adult 还是儿童票 child/kid，有些影院还有学生票 student 和老年票 senior。",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "Sure. Would you prefer seats closer to the front or further back? We also have a few center seats left in row J.",
            textZh: "好的。您喜欢靠前还是靠后的位置？J排中间还有几个位置。",
            casualVersion: "Okay. Front or back seats? Got some center ones left in J, too.",
            formalityVariants: {
              casual: "Okay. Front or back? We've also got some center seats in J.",
              standard: "Sure. Would you prefer seats closer to the front or further back? We also have a few center seats left in row J.",
              formal: "Certainly. Regarding seating preferences, would you prefer a location closer to the front of the auditorium or toward the rear? We also have a limited number of center seats available in row J.",
            },
            keyPhrases: [
              { en: "closer to the front", zh: "靠前" },
              { en: "further back", zh: "靠后" },
              { en: "center seats", zh: "中间位置" },
            ],
            alternativeExpressions: [
              {
                textEn: "Wanna sit up front or more towards the back? We still have some middle seats in row J.",
                textZh: "想坐前面还是后面一点？J排中间还有几个座位。",
                actionHint: "问你选位置偏好，直接说想坐哪里",
                frequency: "common",
              },
              {
                textEn: "Do you have a seating preference? There's a couple of spots open in the center of row J.",
                textZh: "你有座位偏好吗？J排中间有几个空位。",
                actionHint: "问座位偏好，说你想要的位置",
                frequency: "common",
              },
            ],
          },
          { speaker: "you", textEn: "Center seats in row J would be perfect.", textZh: "J排中间的位置就太好了。",
            casualVersion: "Center seats in J? Perfect.",
            commonMistake: {
              wrong: "Center seats in row J are too good.",
              correct: "Center seats in row J would be perfect.",
              explanation: "表示“太好了”用 'perfect' 更自然，'too good' 通常有负面含义。",
            },
            formalityVariants: {
              casual: "J row center? Perfect.",
              standard: "Center seats in row J would be perfect.",
              formal: "The center seats in row J would be entirely suitable, thank you.",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "Great. That comes to $28. Would you like to add a combo — popcorn and two drinks for $12?",
            textZh: "好的。一共28美元。要加一个套餐吗——爆米花加两杯饮料12美元？",
            casualVersion: "Alright. That's $28. Wanna add a combo — popcorn and two drinks for twelve?",
            formalityVariants: {
              casual: "Okay. $28. Want a combo? Popcorn and two drinks for twelve bucks?",
              standard: "Great. That comes to $28. Would you like to add a combo — popcorn and two drinks for $12?",
              formal: "Excellent. Your total will be $28. Would you be interested in adding a concession combo, which includes popcorn and two beverages for an additional $12?",
            },
            keyPhrases: [
              { en: "combo", zh: "套餐" },
              { en: "that comes to", zh: "一共是" },
            ],
            alternativeExpressions: [
              {
                textEn: "Alright, that's $28 total. You wanna grab a combo? Popcorn and two drinks for 12 bucks.",
                textZh: "好的，一共28美元。要来个套餐吗？爆米花加两杯饮料12块。",
                actionHint: "告诉你总价并推荐套餐，可以接受或拒绝",
                frequency: "common",
              },
              {
                textEn: "Your total's $28. We've got a deal on popcorn and drinks — $12 for the bundle. Interested?",
                textZh: "总共28美元。爆米花和饮料有个优惠——打包12美元。感兴趣吗？",
                actionHint: "报价后推销套餐优惠",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, why not. I'll pay by card.",
            textZh: "好啊，为什么不呢。我刷卡。",
            culturalNote: "“Why not” 是一种非常地道的、表示接受建议的口语表达。",
            commonMistake: {
              wrong: "Sure, why not. I swipe card.",
              correct: "Sure, why not. I'll pay by card.",
              explanation: "'刷卡' 英语惯用 'pay by card' 或直接说 'card'。",
            },
            formalityVariants: {
              casual: "Yeah, why not. Card.",
              standard: "Sure, why not. I'll pay by card.",
              formal: "Yes, that sounds agreeable. I will pay by credit card, please.",
            },
            casualVersion: "Yeah, throw that in. Card, please.",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "Here are your tickets and your receipt. Theater 3 on the left. Enjoy the movie!",
            textZh: "这是您的票和收据。3号厅在左边。祝观影愉快！",
            casualVersion: "Tickets and receipt. Theater 3's left. Enjoy!",
            formalityVariants: {
              casual: "Here's your stuff. Theater 3, left. Enjoy!",
              standard: "Here are your tickets and your receipt. Theater 3 on the left. Enjoy the movie!",
              formal: "Here are your tickets and your purchase receipt. The screening will take place in Theater 3, which is located to your left. Please enjoy your cinematic experience.",
            },
            keyPhrases: [
              { en: "theater", zh: "影厅" },
              { en: "enjoy the movie", zh: "祝观影愉快" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Here you go — tickets and receipt. Screen 3, just down the hall on your left. Have a good one!",
                textZh: "给您——票和收据。3号屏幕，走廊左边。祝愉快！",
                actionHint: "递给你票据并指路，说谢谢然后去影厅",
                frequency: "common",
              },
              {
                textEn: "You're all set. Theater 3 is to your left. Enjoy!",
                textZh: "都弄好了。3号厅在您左边。祝愉快！",
                actionHint: "简洁确认完成，说谢谢即可",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 参观博物馆 ====================
  {
    id: "entertainment-museum-visit",
    category: "entertainment",
    titleZh: "参观博物馆",
    titleEn: "Visiting a Museum",
    description: "在博物馆购票、咨询展览信息、参加导览",
    otherRole: "博物馆工作人员",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "museum-entry",
        titleZh: "博物馆入馆",
        titleEn: "Museum Entry",
        description: "购票入馆并了解展览信息",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hello, one adult ticket, please. Do you have an audio guide?",
            textZh: "你好，一张成人票。你们有语音导览吗？",
            casualVersion: "Hey, just one adult ticket. Got audio guides?",
            commonMistake: {
              wrong: "I want one adult ticket",
              correct: "I'd like one adult ticket",
              explanation: "“I want” 在英语中直接表示需求，听起来比较生硬，用 “I'd like” 更礼貌。",
            },
            formalityVariants: {
              casual: "Hey, just one adult ticket. Got audio guides?",
              standard: "Hello, one adult ticket, please. Do you have an audio guide?",
              formal: "Good morning/afternoon, I would like to purchase one adult admission ticket, please. Do you offer audio guides?",
            },
            culturalNote: "很多大型博物馆提供 audio guide（语音导览），通常需要额外付费或押证件。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "One adult ticket is $20. The audio guide is an extra $7, and it's available in eight languages including Mandarin.",
            textZh: "一张成人票20美元。语音导览额外7美元，有八种语言可选包括中文。",
            casualVersion: "It's 20 bucks for an adult ticket. Audio guide's another seven, and yeah, it's got eight languages, Chinese too.",
            formalityVariants: {
              casual: "Twenty bucks for an adult ticket. Audio guide's seven more, comes in eight languages, Chinese included.",
              standard: "One adult ticket is $20. The audio guide is an additional $7, and it comes in eight languages, including Chinese.",
              formal: "An adult admission ticket is $20. The audio guide is available for an additional charge of $7 and is offered in eight languages, including Mandarin Chinese.",
            },
            keyPhrases: [
              { en: "audio guide", zh: "语音导览" },
              { en: "available in", zh: "提供...语言" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That'll be $20 for one adult. Audio guide's 7 bucks extra — we've got it in eight languages, Mandarin included.",
                textZh: "成人票20美元。语音导览额外7块——有八种语言，包括中文。",
                actionHint: "报价并介绍语音导览，决定是否要导览",
                frequency: "common",
              },
              {
                textEn:
                  "It's $20 for admission. If you want the audio guide, it's $7 more — comes in eight languages, Chinese is one of them.",
                textZh: "门票20美元。语音导览的话多7美元——有八种语言，中文也有。",
                actionHint: "分开报门票和导览价格",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, I'll take the audio guide in English. Which exhibition do you recommend?",
            textZh: "好的，我要英文的语音导览。你推荐哪个展览？",
            casualVersion: "Cool, I'll get the English one. What exhibition would you recommend?",
            commonMistake: {
              wrong: "Which exhibition you recommend?",
              correct: "Which exhibition do you recommend?",
              explanation: "提问时需要助动词 “do”，不能直接说 “you recommend”。",
            },
            formalityVariants: {
              casual: "Cool, I'll take the English one. What exhibition do you recommend?",
              standard: "Great, I'll take the English audio guide. Which exhibition do you recommend?",
              formal: "Excellent, I would like the English audio guide, please. May I inquire which exhibition you would personally recommend?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "I'd definitely recommend the special exhibition on the second floor — it's a limited-time Impressionist collection. It closes next week.",
            textZh: "我强烈推荐二楼的特展——是限时的印象派收藏展。下周就结束了。",
            casualVersion: "Definitely check out the special exhibit upstairs, on the second floor. It's a limited-time Impressionist thing and it wraps up next week.",
            formalityVariants: {
              casual: "You should totally see the special exhibit upstairs. It's a limited Impressionist collection, ending next week.",
              standard: "I highly recommend the special exhibition on the second floor – it's a limited-time Impressionist collection that ends next week.",
              formal: "I would strongly recommend visiting the special exhibition located on the second floor. It features a limited-time Impressionist collection and will conclude its display next week.",
            },
            keyPhrases: [
              { en: "special exhibition", zh: "特展" },
              { en: "limited-time", zh: "限时的" },
              { en: "Impressionist", zh: "印象派" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Oh, you should totally check out the Impressionist show upstairs — it's only here for another week.",
                textZh: "你一定要去看楼上的印象派展——就剩一周了。",
                actionHint: "热情推荐特展，强调时间紧迫",
                frequency: "common",
              },
              {
                textEn:
                  "If you only see one thing, make it the Impressionist exhibit on the second floor. It wraps up next week.",
                textZh: "如果只能看一个，就去二楼的印象派展。下周就结束了。",
                actionHint: "强烈推荐，用 'if you only see one thing' 表示必看",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds wonderful. Is photography allowed inside?",
            textZh: "听起来太棒了。里面可以拍照吗？",
            casualVersion: "Sounds awesome! Can I take pictures inside?",
            commonMistake: {
              wrong: "Can take photos inside?",
              correct: "Can I take photos inside?",
              explanation: "英语疑问句通常需要主语，不能直接省略“I”。",
            },
            formalityVariants: {
              casual: "Sounds awesome! Can I take pictures inside?",
              standard: "That sounds wonderful. Is photography allowed inside?",
              formal: "That sounds absolutely fascinating. May I inquire if photography is permitted within the exhibition halls?",
            },
            culturalNote:
              "不同博物馆拍照规则不同：有些允许无闪光灯拍照 no flash photography，有些完全禁止。进去前问一下是好习惯。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Photos are fine in the permanent galleries, but no flash please. The special exhibition is no photography at all, I'm afraid.",
            textZh: "常设展厅可以拍照，但请不要用闪光灯。特展恐怕完全不能拍照。",
            casualVersion: "Permanent galleries are cool for photos, just no flash. But no pics at all in the special exhibit, sorry.",
            formalityVariants: {
              casual: "You can take photos in the permanent galleries, just no flash. But the special exhibit's a no-photo zone, unfortunately.",
              standard: "Photography is permitted in the permanent galleries, but please refrain from using a flash. The special exhibition, I'm afraid, does not allow any photography.",
              formal: "Photography is permitted within the permanent galleries, however, we kindly request that you do not use flash. Regrettably, photography is strictly prohibited within the special exhibition.",
            },
            keyPhrases: [
              { en: "permanent galleries", zh: "常设展厅" },
              { en: "no flash", zh: "不要用闪光灯" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You can take pictures in the regular galleries — just no flash. But the special exhibit is strictly no photos.",
                textZh: "常规展厅可以拍照——别用闪光灯就行。但特展严格禁止拍照。",
                actionHint: "说明拍照规则，常设展可拍但特展不行",
                frequency: "common",
              },
              {
                textEn:
                  "Feel free to snap pics in the permanent collection, no flash though. The special show is a no-photo zone, unfortunately.",
                textZh: "常设展随便拍，但别开闪光灯。特展不让拍照，挺遗憾的。",
                actionHint: "snap pics 就是拍照的口语说法",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Where do I pick up the audio guide?",
            textZh: "明白了。我在哪里领取语音导览？",
            casualVersion: "Gotcha. Where do I grab the audio guide?",
            commonMistake: {
              wrong: "Where pick up audio guide?",
              correct: "Where do I pick up the audio guide?",
              explanation: "疑问句中需要助动词 “do” 和主语 “I”。",
            },
            formalityVariants: {
              casual: "Okay, where do I pick up the audio guide?",
              standard: "Got it. Where do I pick up the audio guide?",
              formal: "Understood. Could you please direct me to where I may collect the audio guide?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Just past the entrance on your right. You'll need to leave a photo ID as a deposit. Enjoy your visit!",
            textZh: "过了入口右手边。您需要留一个带照片的证件作为押金。祝您参观愉快！",
            casualVersion: "Right past the entrance on your right. You'll need to leave an ID for deposit. Have fun!",
            culturalNote: "美国租借物品常需要押证件或信用卡，而非现金押金。",
            formalityVariants: {
              casual: "It's just past the entrance on your right. You'll need to leave a photo ID for deposit. Enjoy!",
              standard: "It's just past the entrance on your right. You'll need to leave a photo ID as a deposit. Enjoy your visit!",
              formal: "You will find it just past the entrance to your right. We kindly require a photo identification to be held as a deposit. We hope you thoroughly enjoy your visit.",
            },
            keyPhrases: [
              { en: "photo ID", zh: "带照片的证件" },
              { en: "deposit", zh: "押金" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Right after you walk in, it's on your right. They'll need an ID to hold onto while you use it. Have a great visit!",
                textZh: "进门后右手边。他们需要你留一个证件。祝参观愉快！",
                actionHint: "指路并说明需要押证件",
                frequency: "common",
              },
              {
                textEn:
                  "The pickup counter is just inside to the right. Bring a photo ID — they hold it as a deposit. Enjoy!",
                textZh: "领取柜台就在里面右边。带个带照片的证件——他们会留着当押金。祝愉快！",
                actionHint: "说明位置和押金要求",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 主题公园 ====================
  {
    id: "entertainment-theme-park-rides",
    category: "entertainment",
    titleZh: "主题公园",
    titleEn: "Theme Park",
    description: "在主题公园购票、排队、体验游乐项目",
    otherRole: "公园工作人员",
    otherRoleIcon: "🎢",
    flows: [
      {
        id: "theme-park-entry",
        titleZh: "主题公园入园",
        titleEn: "Theme Park Entry",
        description: "购买门票、了解快速通道和园区信息",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, two day passes, please. Do you have any fast-pass options?",
            textZh: "你好，两张一日票。你们有快速通道的选项吗？",
            casualVersion: "Hey, two day passes, please. Got any fast-pass options?",
            commonMistake: {
              wrong: "I want two day passes",
              correct: "Two day passes, please",
              explanation: "“I want” 语气生硬，直接说物品或用“Can I get”更礼貌",
            },
            formalityVariants: {
              casual: "Two day passes, and uh, fast passes?",
              standard: "Hello, two day passes, please. Do you offer any fast-pass options?",
              formal: "Good morning/afternoon, I would like to purchase two day passes. Furthermore, I was wondering if you offer any accelerated access options?",
            },
            culturalNote: "欧美主题公园的 fast pass / express pass 可以让你跳过排队，但通常价格不菲。",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "Two day passes will be $180. We do have the Express Pass for $60 each, which lets you skip the line on most major rides.",
            textZh: "两张一日票180美元。我们有快速通行证每人60美元，可以跳过大部分主要项目的排队。",
            casualVersion: "Two day passes'll be 180. We got the Express Pass for 60 each, lets ya skip lines on most big rides.",
            formalityVariants: {
              casual: "Okay, so two day passes are 180. Express Pass is 60 a pop, lets you jump the lines on most rides.",
              standard: "Certainly, two day passes will be $180. We do offer the Express Pass for $60 per person, which allows you to bypass queues for the majority of our popular attractions.",
              formal: "The total for two day passes will be $180. Additionally, we provide an Express Pass option at $60 per person, which grants expedited access to most of our premier attractions by allowing you to bypass the standard queue.",
            },
            keyPhrases: [
              { en: "Express Pass", zh: "快速通行证" },
              { en: "skip the line", zh: "跳过排队" },
              { en: "major rides", zh: "主要项目" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That's $180 for two day passes. And yeah, we've got Express Passes — 60 bucks each, and you basically get to cut the line for the big rides.",
                textZh: "两张日票180美元。有快速通行证——每人60块，大项目基本可以插队。",
                actionHint: "cut the line = skip the line = 插队/跳过排队",
                frequency: "common",
              },
              {
                textEn:
                  "Two day tickets run you $180. If you wanna skip the wait, the Express Pass is $60 a pop — works on most of the popular rides.",
                textZh: "两张日票180美元。想免排队的话，快速通行证每人60美元——大部分热门项目都能用。",
                actionHint: "a pop = each 每个的意思",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds worth it. We'll take two Express Passes as well. What rides do you recommend?",
            textZh: "听起来很值。我们也要两张快速通行证。你推荐什么项目？",
            casualVersion: "Sounds worth it. We'll take two Express Passes too. What rides d'ya recommend?",
            commonMistake: {
              wrong: "What rides you recommend?",
              correct: "What rides do you recommend?",
              explanation: "询问句中动词前需要助动词“do”。",
            },
            formalityVariants: {
              casual: "Yeah, totally worth it. Grab two Express Passes. What's good here?",
              standard: "That sounds like a good option. We'll also take two Express Passes. Could you recommend any specific rides or attractions?",
              formal: "That appears to be a beneficial proposition. We will proceed with two Express Passes in addition to our day passes. Could you kindly offer some recommendations regarding your premier attractions?",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "The roller coaster in Zone A is our most popular ride. Also, don't miss the water ride in Zone C — it's great on a warm day like today.",
            textZh: "A区的过山车是我们最受欢迎的项目。另外别错过C区的水上项目——像今天这样暖和的天气特别适合。",
            casualVersion: "Zone A's roller coaster's our most popular. Also, definitely hit the water rides in Zone C—perfect for a day like today.",
            formalityVariants: {
              casual: "Roller coaster in A, biggest hit. And yeah, water rides in C, great for this kinda day.",
              standard: "The roller coaster located in Zone A is our most frequently visited attraction. Additionally, I highly recommend experiencing the water rides in Zone C, which are particularly enjoyable on a warm day such as today.",
              formal: "Our signature attraction, the roller coaster situated in Zone A, garners the highest popularity. Furthermore, I would strongly advise visiting the aquatic attractions in Zone C, as they are exceptionally well-suited for the pleasant weather we are experiencing today.",
            },
            keyPhrases: [
              { en: "roller coaster", zh: "过山车" },
              { en: "water ride", zh: "水上项目" },
              { en: "don't miss", zh: "别错过" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Definitely hit the roller coaster in Zone A — that's the one everyone loves. And the water ride in Zone C is a must on a day like this.",
                textZh: "一定要去A区的过山车——大家都超爱。像今天这样的天气，C区的水上项目必须去。",
                actionHint: "hit = 去玩，a must = 必须体验的",
                frequency: "common",
              },
              {
                textEn:
                  "You gotta try the coaster in Zone A, it's our number one. Oh, and the splash ride over in Zone C is perfect for today's weather.",
                textZh: "你一定要试A区的过山车，我们的第一名。C区的水上漂流今天这天气去正好。",
                actionHint: "gotta = got to = 必须，splash ride = 水上漂流",
                frequency: "common",
              },
            ],
          },
          { speaker: "you", textEn: "How long are the wait times usually?", textZh: "通常要排多长时间？",
            casualVersion: "How long are waits usually?",
            commonMistake: {
              wrong: "How long wait time?",
              correct: "How long are the wait times?",
              explanation: "询问时间长度时，wait times 是复数，且需用 are。",
            },
            formalityVariants: {
              casual: "How long's the wait?",
              standard: "What are the typical wait times for the attractions?",
              formal: "Could you please inform me of the average queue durations for your various attractions?",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "Without Express Pass, around 45 minutes to an hour for the popular ones. With Express Pass, you'll wait maybe 10 minutes tops.",
            textZh: "没有快速通行证的话，热门项目大约45分钟到一个小时。有快速通行证的话最多等10分钟。",
            casualVersion: "No Express Pass, you're looking at 45 to an hour for popular ones. With it, you're only waiting like 10 max.",
            formalityVariants: {
              casual: "No Express Pass, expect 45-60 for popular rides. With it, like 10 mins tops.",
              standard: "Without an Express Pass, the wait times for popular attractions typically range from 45 minutes to an hour. However, with an Express Pass, your wait will not exceed 10 minutes.",
              formal: "Absent an Express Pass, one could anticipate queueing for approximately 45 minutes to an hour for our most sought-after attractions. Conversely, with the acquisition of an Express Pass, the maximum waiting period is generally no more than 10 minutes.",
            },
            keyPhrases: [
              { en: "wait times", zh: "等待时间" },
              { en: "tops", zh: "最多" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For the big rides, you're looking at 45 minutes to an hour without Express. With it, maybe 10 minutes max.",
                textZh: "大项目不带快速通行的话得等45分钟到一小时。带的话最多10分钟。",
                actionHint: "you're looking at = 大概需要，max = tops = 最多",
                frequency: "common",
              },
              {
                textEn:
                  "The popular stuff can be a 45-minute to hour-long wait. Express Pass cuts it down to like 10 minutes.",
                textZh: "热门项目可能要排45分钟到一小时。快速通行证能把时间缩到10分钟左右。",
                actionHint: "cuts it down to = 缩短到",
                frequency: "common",
              },
            ],
          },
          { speaker: "you", textEn: "Perfect. Can we get a park map?", textZh: "太好了。能给我们一张园区地图吗？",
            casualVersion: "Perfect. Can we get a map?",
            commonMistake: {
              wrong: "Can give me a map?",
              correct: "Can we get a map?",
              explanation: "询问句中需要主语和动词，且用 “get” 来表达索取更自然。",
            },
            formalityVariants: {
              casual: "Awesome. Map, please?",
              standard: "Excellent. May we please obtain a park map?",
              formal: "That is most satisfactory. Would it be possible to procure a comprehensive park map?",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "Of course! Here's your map. You can also download our app for real-time wait times and show schedules. Have a magical day!",
            textZh: "当然！这是您的地图。您也可以下载我们的APP查看实时排队时间和演出时刻表。祝您有个奇妙的一天！",
            casualVersion: "Sure! Here's your map. Also, you can download our app for real-time waits and show times. Have a magical day!",
            formalityVariants: {
              casual: "Yep! Map's here. App's got live waits and show times. Enjoy!",
              standard: "Certainly! Here is your map. Additionally, I encourage you to download our mobile application for access to real-time wait times and entertainment schedules. We hope you have a truly magical day!",
              formal: "Indeed! Please accept this park map. Furthermore, I would highly recommend utilizing our proprietary mobile application, which provides access to real-time attraction queue durations and comprehensive entertainment schedules. We sincerely hope you experience an exceptionally magical day!",
            },
            keyPhrases: [
              { en: "real-time", zh: "实时的" },
              { en: "show schedules", zh: "演出时刻表" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure thing! Here's a map. Oh, and grab our app — it shows wait times and showtimes live. Have an awesome day!",
                textZh: "当然！地图给您。对了，下载我们的APP——有实时排队和演出时间。祝您玩得愉快！",
                actionHint: "grab = 下载/拿，live = 实时",
                frequency: "common",
              },
              {
                textEn:
                  "Here you go! Pro tip: download the app so you can check the lines and show times on the go. Enjoy!",
                textZh: "给您！小建议：下载APP就能随时查排队和演出时间。玩得开心！",
                actionHint: "pro tip = 小建议，on the go = 随时随地",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 音乐会 ====================
  {
    id: "entertainment-concert-entry",
    category: "entertainment",
    titleZh: "音乐会",
    titleEn: "Attending a Concert",
    description: "参加音乐会时入场、找座位、与工作人员交流",
    otherRole: "场馆工作人员",
    otherRoleIcon: "🎵",
    flows: [
      {
        id: "concert-entry",
        titleZh: "音乐会入场",
        titleEn: "Concert Entry",
        description: "在音乐会场馆入场并找到座位",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, which entrance should I use? My ticket says Section B.",
            textZh: "请问我应该走哪个入口？我的票上写的是B区。",
            commonMistake: {
              wrong: "Excuse me, where is entrance? My ticket writes Section B.",
              correct: "Excuse me, which entrance should I use? My ticket says Section B.",
              explanation: "“which entrance” 比 “where is entrance” 更自然；“ticket says” 比 “ticket writes” 更常用。",
            },
            formalityVariants: {
              casual: "Hey, which entrance? Ticket says Section B.",
              standard: "Excuse me, which entrance should I use? My ticket says Section B.",
              formal: "Pardon me, could you please direct me to the appropriate entrance? My ticket indicates Section B.",
            },
            casualVersion: "Hey, where do I go in for Section B?",
          },
          {
            speaker: "them",
            role: "安保人员",
            textEn: "Section B is through the main entrance on your left. Can I see your ticket and ID, please?",
            textZh: "B区走您左边的主入口。请出示您的票和证件好吗？",
            casualVersion: "Section B's through the main entrance, on your left. Can I see your ticket and ID?",
            formalityVariants: {
              casual: "B's through the main entrance, on your left. Need to see your ticket and ID.",
              standard: "Section B is through the main entrance on your left. Can I see your ticket and ID, please?",
              formal: "Section B can be accessed via the main entrance to your left. May I please see your ticket and a form of identification?",
            },
            keyPhrases: [
              { en: "main entrance", zh: "主入口" },
              { en: "can I see your ticket", zh: "请出示您的票" },
            ],
            alternativeExpressions: [
              {
                textEn: "Section B? That's the main doors to your left. Let me see your ticket and ID real quick.",
                textZh: "B区？左边主门进去。让我看下你的票和证件。",
                actionHint: "real quick = 快速地，准备好票和证件出示",
                frequency: "common",
              },
              {
                textEn: "Head to the left — main entrance gets you to Section B. Ticket and ID, please.",
                textZh: "往左走——主入口进去就是B区。请出示票和证件。",
                actionHint: "简洁指路并要求验票",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Here you go. Is there a coat check inside?",
            textZh: "给您。里面有存衣处吗？",
            casualVersion: "Here. Got a coat check?",
            commonMistake: {
              wrong: "Here is ticket. Is there coat check inside?",
              correct: "Here you go. Is there a coat check inside?",
              explanation: "“Here you go” 比 “Here is” 更常用；“coat check” 前需要加不定冠词 “a”。",
            },
            formalityVariants: {
              casual: "Here. Got a coat check?",
              standard: "Here you go. Is there a coat check inside?",
              formal: "Certainly, here are my documents. Could you inform me if there is a cloakroom facility within the venue?",
            },
            culturalNote: "欧美音乐会和剧院通常提供 coat check（存衣处），会收取1-2美元小费。",
          },
          {
            speaker: "them",
            role: "安保人员",
            textEn:
              "Yes, the coat check is right past the lobby on the right side. Just a heads-up, no bags larger than 12 inches are allowed inside.",
            textZh: "有的，存衣处在大厅右侧。提醒一下，超过12英寸的包不允许带入。",
            casualVersion: "Yeah, coat check's past the lobby, right side. Heads up, bags over 12 inches ain't allowed in.",
            culturalNote: "美国很多场馆对包的尺寸有严格限制。",
            formalityVariants: {
              casual: "Yep, coat check's past the lobby, on the right. Heads up, no bags bigger than 12 inches allowed.",
              standard: "Yes, the coat check is right past the lobby on the right side. Just a heads-up, no bags larger than 12 inches are allowed inside.",
              formal: "Indeed, the cloakroom facility is located just beyond the main lobby, to your right. Please be advised that bags exceeding 12 inches in dimension are not permitted within the premises.",
            },
            keyPhrases: [
              { en: "coat check", zh: "存衣处" },
              { en: "heads-up", zh: "提醒一下" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, coat check's right through the lobby on the right. Oh, and FYI, no big bags — nothing over 12 inches.",
                textZh: "有，存衣处过了大厅右边。对了，大包不让带——超过12英寸不行。",
                actionHint: "FYI = for your information 顺便说一下",
                frequency: "common",
              },
              {
                textEn:
                  "Coat check is just past the doors on the right-hand side. Quick note though — bags bigger than 12 inches aren't allowed in.",
                textZh: "存衣处过了门右手边。不过提醒一下——超过12英寸的包不让进。",
                actionHint: "quick note = 提醒一下",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks. Do you know what time the opening act starts?",
            textZh: "谢谢。你知道暖场演出几点开始吗？",
            casualVersion: "Thanks. What time's the opener start?",
            commonMistake: {
              wrong: "Do you know what time does the opening act start?",
              correct: "Do you know what time the opening act starts?",
              explanation: "“Do you know” 后面的从句语序是陈述句，不是疑问句。",
            },
            formalityVariants: {
              casual: "Cheers. What time's the opener?",
              standard: "Thanks. Do you know what time the opening act starts?",
              formal: "Thank you. Could you please inform me of the scheduled start time for the opening performance?",
            },
          },
          {
            speaker: "them",
            role: "安保人员",
            textEn:
              "The opening act goes on at 7:30, and the main performer hits the stage around 8:45. There's a 20-minute intermission in between.",
            textZh: "暖场演出7:30开始，主表演大约8:45上台。中间有20分钟的中场休息。",
            casualVersion: "Opener's on at 7:30, main guy's on around 8:45. Twenty-min break in between.",
            formalityVariants: {
              casual: "Opener's at 7:30, main act's around 8:45. Twenty-minute break.",
              standard: "The opening act goes on at 7:30, and the main performer hits the stage around 8:45. There's a 20-minute intermission.",
              formal: "The preliminary performance is scheduled to commence at 7:30 PM, with the principal artist taking the stage at approximately 8:45 PM. There will be a 20-minute interval.",
            },
            keyPhrases: [
              { en: "opening act", zh: "暖场演出" },
              { en: "main performer", zh: "主表演者" },
              { en: "intermission", zh: "中场休息" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The opener starts at 7:30. The headliner comes on around 8:45, with a 20-minute break in between.",
                textZh: "暖场7:30开始。头牌大约8:45上台，中间休息20分钟。",
                actionHint: "opener = opening act, headliner = 头牌/主演",
                frequency: "common",
              },
              {
                textEn:
                  "7:30 for the warm-up act, then the main show kicks off around a quarter to 9. There's a 20-minute intermission.",
                textZh: "7:30暖场，主表演大约8:45开始。有20分钟中场休息。",
                actionHint: "warm-up act = 暖场, kicks off = 开始, a quarter to 9 = 8:45",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, thank you. Where can I buy drinks inside?",
            textZh: "好的，谢谢。里面哪里可以买饮料？",
            casualVersion: "Cool, thanks. Where can I get a drink?",
            commonMistake: {
              wrong: "Where can I buy drink inside?",
              correct: "Where can I buy drinks inside?",
              explanation: "“drink” 作可数名词时，要么用复数 “drinks”，要么用 “a drink”。",
            },
            formalityVariants: {
              casual: "Alright, thanks. Can I grab a drink in here?",
              standard: "Great, thank you. Where can I buy drinks inside?",
              formal: "Excellent, I appreciate your assistance. Could you please direct me to the location where beverages are available for purchase within the venue?",
            },
          },
          {
            speaker: "them",
            role: "安保人员",
            textEn:
              "There are two bars on the ground floor and one upstairs. They accept card only — no cash. Enjoy the show!",
            textZh: "一楼有两个吧台，楼上有一个。只收刷卡，不收现金。祝您演出愉快！",
            casualVersion: "Two bars downstairs, one up. Card only, no cash. Enjoy!",
            culturalNote: "美国很多场馆只接受刷卡，不收现金或支付宝微信。",
            formalityVariants: {
              casual: "Got two bars downstairs, one up. Card only, no cash. Have fun!",
              standard: "There are two bars on the ground floor and one upstairs. They accept card only — no cash. Enjoy the show!",
              formal: "There are two establishments serving beverages on the ground level, and an additional one on the upper level. Please be aware that only card payments are accepted; cash transactions are not permitted. We hope you enjoy the performance.",
            },
            keyPhrases: [
              { en: "card only", zh: "只收刷卡" },
              { en: "enjoy the show", zh: "祝演出愉快" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "There's a couple bars downstairs and one up top. Cards only though, no cash. Have a great time!",
                textZh: "楼下有两个吧台，楼上一个。只收卡不收现金。玩得开心！",
                actionHint: "up top = upstairs 楼上",
                frequency: "common",
              },
              {
                textEn: "Two bars on the first floor, one more upstairs. Just a heads-up, they're all cashless. Enjoy!",
                textZh: "一楼两个吧台，楼上还有一个。提醒一下，全部不收现金。祝愉快！",
                actionHint: "cashless = 无现金/只收卡",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 观看体育比赛 ====================
  {
    id: "entertainment-sports-game",
    category: "entertainment",
    titleZh: "观看体育比赛",
    titleEn: "Watching a Sports Game",
    description: "在体育场观看比赛、买食物饮料、与球迷互动",
    otherRole: "体育场工作人员",
    otherRoleIcon: "🏟️",
    flows: [
      {
        id: "sports-game-experience",
        titleZh: "体育赛事体验",
        titleEn: "Sports Game Experience",
        description: "进入体育场、找到座位、买食物并享受比赛",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm looking for Gate 12. My ticket says upper deck, section 205.",
            textZh: "你好，我在找12号入口。我的票上写的是上层看台205区。",
            casualVersion: "Hi, lookin' for Gate 12. Ticket says upper deck, 205.",
            commonMistake: {
              wrong: "I'm finding Gate 12.",
              correct: "I'm looking for Gate 12.",
              explanation: "中文的“找”在英文中表达寻找过程时通常用“look for”，而非“find”。",
            },
            formalityVariants: {
              casual: "Hey, tryna find Gate 12. Ticket's for upper deck, 205.",
              standard: "Hi, I'm looking for Gate 12. My ticket indicates upper deck, section 205.",
              formal: "Good afternoon, I am seeking directions to Gate 12. My seating information states upper deck, section 205.",
            },
            culturalNote: "美国体育场通常分为 lower deck（下层）、upper deck（上层）、suites（包厢）等。",
          },
          {
            speaker: "them",
            role: "引座员",
            textEn:
              "Gate 12 is just around the corner. Take the escalator up one level, then follow the signs for section 200. You'll be on the left side.",
            textZh: "12号入口就在拐角处。坐电梯上一层，然后跟着200区的指示牌走。在左边。",
            casualVersion: "Gate 12's right 'round the corner. Escalator up a level, then follow signs for 200. It's on your left.",
            commonMistake: {
              wrong: "You'll find it on your left side.",
              correct: "You'll find it on your left.",
              explanation: "英文中表示“在左边/右边”直接用“on your left/right”，无需加“side”。",
            },
            formalityVariants: {
              casual: "Gate 12's right there. Go up the escalator, then follow 200 signs. Left side.",
              standard: "Gate 12 is just around the corner. Take the escalator up one level, then follow the signs for section 200. You'll find it on your left.",
              formal: "Gate 12 is located just around the corner. Please proceed up the escalator to the next level, then follow the directional signage for section 200. It will be situated on your left-hand side.",
            },
            keyPhrases: [
              { en: "upper deck", zh: "上层看台" },
              { en: "escalator", zh: "自动扶梯" },
              { en: "follow the signs", zh: "跟着指示牌走" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Gate 12? Right around that corner. Hop on the escalator, go up one, and look for the 200-level signs — you'll be on the left.",
                textZh: "12号入口？就在那个拐角。坐扶梯上一层，找200区的指示牌——左边。",
                actionHint: "hop on = 跳上/坐上",
                frequency: "common",
              },
              {
                textEn:
                  "It's right there around the bend. Escalator up one floor, then just follow signs to the 200 sections. Your side's the left.",
                textZh: "就在那个弯过去。扶梯上一层，跟着200区指示牌走。你在左边那侧。",
                actionHint: "around the bend = around the corner 拐角处",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Thanks! What's the score right now?", textZh: "谢谢！现在比分是多少？",
            casualVersion: "Thanks! What's the score?",
            commonMistake: {
              wrong: "What is the score now?",
              correct: "What's the score right now?",
              explanation: "口语中“What's”比“What is”更常用，“right now”比“now”更能强调当下。",
            },
            formalityVariants: {
              casual: "Cheers! Score?",
              standard: "Thanks! What's the current score?",
              formal: "Thank you. Could you please inform me of the current score?",
            },
          },
          {
            speaker: "them",
            role: "引座员",
            textEn: "It's still 0-0. You haven't missed anything — they just started the second quarter.",
            textZh: "还是0比0。您什么都没错过——刚开始第二节。",
            casualVersion: "Still 0-0. Haven't missed squat - just started the second quarter.",
            commonMistake: {
              wrong: "You didn't miss anything.",
              correct: "You haven't missed a thing.",
              explanation: "“haven't missed a thing”是更自然、口语化的表达，意为“什么都没错过”。",
            },
            formalityVariants: {
              casual: "Still nil-nil. You're good, second quarter just started.",
              standard: "It's currently 0-0. You haven't missed anything; the second quarter has just commenced.",
              formal: "The score remains 0-0. You are precisely on time, as the second quarter has just begun.",
            },
            keyPhrases: [
              { en: "the score", zh: "比分" },
              { en: "second quarter", zh: "第二节" },
            ],
            alternativeExpressions: [
              {
                textEn: "Still scoreless. You're good — they're just getting into the second quarter.",
                textZh: "还没有进球。你没错过——刚进入第二节。",
                actionHint: "scoreless = 零比零/没有进球",
                frequency: "common",
              },
              {
                textEn: "Nothing yet, 0-0. Second quarter just got underway, so you're right on time.",
                textZh: "还没有比分，0比0。第二节刚开始，你来得正好。",
                actionHint: "got underway = 开始了",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Where can I get a hot dog and a beer around here?",
            textZh: "在这附近哪里能买热狗和啤酒？",
            commonMistake: {
              wrong: "Where can I buy hot dog and beer?",
              correct: "Where can I get a hot dog and a beer?",
              explanation: "可数名词前需要冠词“a”。口语中“get”常代替“buy”来表示购买。",
            },
            formalityVariants: {
              casual: "Hot dog and a beer? Where's the spot?",
              standard: "Where might I find a hot dog and a beer in this vicinity?",
              formal: "Could you please direct me to the nearest concession stand where I might purchase a hot dog and a beer?",
            },
            casualVersion: "Any food stands nearby?",
          },
          {
            speaker: "them",
            role: "引座员",
            textEn:
              "There's a concession stand right at the top of the stairs in your section. They've got hot dogs, nachos, pretzels — the works.",
            textZh: "在您那区楼梯顶端有个小卖部。有热狗、玉米片、椒盐卷饼——什么都有。",
            casualVersion: "Concession stand's at the top of the stairs in your section. They got hot dogs, nachos, pretzels - everything.",
            commonMistake: {
              wrong: "They have hot dogs, nachos, pretzels, all.",
              correct: "They have hot dogs, nachos, pretzels - you name it.",
              explanation: "“you name it”是地道口语，意为“应有尽有”，比直接用“all”更自然。",
            },
            formalityVariants: {
              casual: "Up the stairs in your section, there's a stand. Got hot dogs, nachos, pretzels, whatever.",
              standard: "There's a concession stand located at the top of the stairs within your section. They offer hot dogs, nachos, pretzels, and a variety of other items.",
              formal: "You will find a concession stand conveniently located at the summit of the stairs in your designated section. Their offerings include hot dogs, nachos, pretzels, and numerous other provisions.",
            },
            keyPhrases: [
              { en: "concession stand", zh: "小卖部/食品摊" },
              { en: "the works", zh: "什么都有" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, there's a food stand right up the stairs from your section. Hot dogs, nachos, pretzels — you name it.",
                textZh: "有的，你那区楼梯上去就有一个食品摊。热狗、玉米片、椒盐卷饼——应有尽有。",
                actionHint: "you name it = 你说得出的都有",
                frequency: "common",
              },
              {
                textEn:
                  "Top of the stairs in your section, there's a concessions area. They've got all the usual stuff — dogs, nachos, pretzels, everything.",
                textZh: "你那区楼梯顶上有个餐饮区。常见的都有——热狗、玉米片、椒盐卷饼，应有尽有。",
                actionHint: "dogs = hot dogs 热狗的简称",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Awesome. Can I bring food back to my seat?",
            textZh: "太好了。我可以把食物带回座位吗？",
            casualVersion: "Cool. Can I take food back to my seat?",
            commonMistake: {
              wrong: "Can I bring food to my seat?",
              correct: "Can I bring food back to my seat?",
              explanation: "“bring back”更准确地表达了从售卖处带回座位的情景，强调“带回去”。",
            },
            formalityVariants: {
              casual: "Alright. Can I take my food to my seat?",
              standard: "Excellent. Am I permitted to bring food items back to my seating area?",
              formal: "That is wonderful. May I inquire if it is permissible to transport purchased food items to my assigned seating location?",
            },
          },
          {
            speaker: "them",
            role: "引座员",
            textEn:
              "Absolutely. Just be careful on the stairs with drinks. Oh, and if you want any team merchandise, the fan shop is on the main level near Gate 1.",
            textZh: "当然可以。端饮料上楼梯小心点。对了，如果想买球队周边，球迷商店在1号入口附近的主层。",
            casualVersion: "Totally. Just watch the stairs with drinks. Oh, if you want any team stuff, fan shop's on the main level by Gate 1.",
            commonMistake: {
              wrong: "Be careful with drinks on the stairs.",
              correct: "Be careful on the stairs with drinks.",
              explanation: "介词短语“on the stairs”更自然地放在动词短语“be careful”之后，表达“在楼梯上要小心”。",
            },
            formalityVariants: {
              casual: "Yep. Just careful with drinks on the stairs. And if you want team gear, the shop's on the main level near Gate 1.",
              standard: "Certainly. Please exercise caution on the stairs when carrying beverages. Additionally, should you desire to purchase any team merchandise, the fan shop is situated on the main level adjacent to Gate 1.",
              formal: "Affirmatively. I must advise you to exercise prudence when navigating the stairwells, particularly whilst carrying beverages. Furthermore, for the acquisition of official team merchandise, the fan shop is conveniently located on the main concourse, in proximity to Gate 1.",
            },
            keyPhrases: [
              { en: "team merchandise", zh: "球队周边商品" },
              { en: "fan shop", zh: "球迷商店" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For sure. Just watch it on the stairs with those drinks. By the way, the team store is down on the main level by Gate 1 if you want any gear.",
                textZh: "没问题。端饮料走楼梯小心点。对了，球队商店在主层1号门附近，想买周边可以去看看。",
                actionHint: "watch it = 小心，gear = 周边商品/装备",
                frequency: "common",
              },
              {
                textEn:
                  "Yeah, no problem. Careful with the drinks though. Oh, if you wanna pick up a jersey or anything, the merch shop is by Gate 1, main level.",
                textZh: "可以的。不过端饮料小心。想买球衣什么的，主层1号门旁边有个周边店。",
                actionHint: "merch = merchandise 周边商品, jersey = 球衣",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 游乐设施 ====================
  {
    id: "entertainment-amusement-rides",
    category: "entertainment",
    titleZh: "游乐设施",
    titleEn: "Amusement Rides",
    description: "在游乐场排队、了解乘坐规则和安全须知",
    otherRole: "游乐设施工作人员",
    otherRoleIcon: "🎠",
    flows: [
      {
        id: "ride-queue",
        titleZh: "排队乘坐游乐设施",
        titleEn: "Queuing for a Ride",
        description: "排队等候并了解安全规则",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, how long is the wait for this ride?",
            textZh: "请问，这个项目要等多久？",
            casualVersion: "Hey, how long's the wait for this ride?",
            commonMistake: {
              wrong: "How much time I need to wait?",
              correct: "How long is the wait?",
              explanation: "“How much time”通常指总耗时量， “How long”指等待的持续时间。",
            },
            formalityVariants: {
              casual: "Hey, how long's the wait for this ride?",
              standard: "Excuse me, how long is the wait for this ride?",
              formal: "Pardon me, could you please tell me the estimated waiting time for this attraction?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "Currently about 30 minutes from here. But just so you know, there's a height requirement of 48 inches. Is everyone in your group tall enough?",
            textZh: "从这里开始大约30分钟。不过提醒一下，有48英寸的身高要求。您这组的人都够高吗？",
            casualVersion: "Like, 30 minutes from here. Heads up though, gotta be 48 inches. Everyone in your group hit that?",
            commonMistake: {
              wrong: "Need 48 inch high.",
              correct: "There's a 48-inch height requirement.",
              explanation: "height requirement 是固定说法，用于表达身高的要求。",
            },
            formalityVariants: {
              casual: "About 30 min from here. FYI, 48 inches height minimum. Everyone in your group meet that?",
              standard: "Currently about 30 minutes from here. But just so you know, there's a 48-inch height requirement. Is everyone in your group tall enough?",
              formal: "The current estimated waiting time from this point is approximately 30 minutes. Please be advised, however, that a height restriction of 48 inches is strictly enforced. May I inquire if all members of your party meet this requirement?",
            },
            keyPhrases: [
              { en: "height requirement", zh: "身高要求" },
              { en: "tall enough", zh: "够高" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "From this point, you're looking at about 30 minutes. Quick thing — you gotta be at least 48 inches to ride. Everyone in your group clear that?",
                textZh: "从这里开始大概30分钟。提一下——至少得48英寸才能坐。你们组都够高吗？",
                actionHint: "clear that = 达到那个标准",
                frequency: "common",
              },
              {
                textEn:
                  "About a half-hour wait from here. Heads up though, there's a 48-inch minimum. Is your whole party good on that?",
                textZh: "从这里等大概半小时。提醒一下，最低48英寸。你们全部人都没问题吧？",
                actionHint: "party = group 一行人",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, we're all adults. Are there any health restrictions?",
            textZh: "是的，我们都是成年人。有什么健康方面的限制吗？",
            casualVersion: "Yep, we're all grown-ups. Any health stuff we should know about?",
            commonMistake: {
              wrong: "Have any health problems?",
              correct: "Are there any health restrictions?",
              explanation: "“health restrictions”是指乘坐游乐设施的健康限制，更准确。",
            },
            formalityVariants: {
              casual: "Yeah, we're all adults. Any health restrictions?",
              standard: "Yes, we're all adults. Are there any health restrictions?",
              formal: "Yes, we are all adults. Could you please inform me of any health-related restrictions that may apply?",
            },
            culturalNote: "欧美游乐场对安全非常严格，有心脏病、高血压、孕妇等限制。上车前一定要看警告标志。",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "If you have a heart condition, back problems, or are pregnant, we don't recommend this ride. Also, please secure all loose items — no phones, hats, or sunglasses on the ride.",
            textZh:
              "如果您有心脏病、背部问题或怀孕，我们不建议乘坐。另外请收好所有松散物品——乘坐时不能带手机、帽子或太阳镜。",
            casualVersion: "If you got a heart condition, bad back, or pregnant, probably best not to ride. And stash all your stuff—no phones, hats, shades on the ride.",
            commonMistake: {
              wrong: "Loose things cannot bring.",
              correct: "Please secure all loose items.",
              explanation: "“loose items”指易掉落物品，“secure”是固定、保管，是常见说法。",
            },
            formalityVariants: {
              casual: "Got a heart condition, bad back, or pregnant? Don't ride. Also, stash your loose stuff—no phones, hats, sunglasses on the ride.",
              standard: "If you have a heart condition, back problems, or are pregnant, we don't recommend riding. Also, please secure all loose items—no phones, hats, or sunglasses while riding.",
              formal: "Individuals with heart conditions, back problems, or those who are pregnant are advised against riding this attraction. Furthermore, for your safety, all loose articles, including but not limited to mobile phones, hats, and sunglasses, must be securely stored prior to boarding.",
            },
            keyPhrases: [
              { en: "heart condition", zh: "心脏病" },
              { en: "secure all loose items", zh: "收好所有松散物品" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Anyone with heart issues, back trouble, or who's expecting should probably sit this one out. And make sure to stash your phone, hat, glasses — anything that could fly off.",
                textZh: "有心脏问题、背部毛病或怀孕的人最好别坐。把手机、帽子、眼镜都收好——任何可能飞走的东西。",
                actionHint: "sit this one out = 不参加这个, stash = 收好/藏好",
                frequency: "common",
              },
              {
                textEn:
                  "Not recommended if you've got heart problems, a bad back, or if you're pregnant. Oh, and empty your pockets — no phones, hats, or shades on the ride.",
                textZh: "有心脏病、腰不好或怀孕的不建议坐。还有清空口袋——不能带手机、帽子或墨镜。",
                actionHint: "shades = sunglasses 墨镜的口语说法",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a locker nearby where I can put my bag?",
            textZh: "附近有储物柜可以放我的包吗？",
            casualVersion: "Locker around here for my bag?",
            commonMistake: {
              wrong: "Is there a locker can put my bag?",
              correct: "Is there a locker nearby where I can put my bag?",
              explanation: "“where I can put”是正确的从句结构，比直接用“can put”更自然。",
            },
            formalityVariants: {
              casual: "Locker nearby for my bag?",
              standard: "Is there a locker nearby where I can put my bag?",
              formal: "May I inquire if there are any locker facilities available in the vicinity for storing personal belongings?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "Yes, there are lockers right behind you. They're $2 for two hours. You'll get a code to open it after the ride.",
            textZh: "有的，储物柜就在您身后。两小时2美元。乘坐结束后会给您一个密码来开柜。",
            casualVersion: "Yeah, lockers are right behind ya. Two bucks for two hours. Get a code to open it once you're done with the ride.",
            commonMistake: {
              wrong: "Give you a code to open.",
              correct: "You'll get a code to open it.",
              explanation: "“get a code”更自然，描述价格时常用“$X for Y”结构。",
            },
            formalityVariants: {
              casual: "Yep, lockers right behind ya. Two bucks for two hours. You'll get a code when you're done.",
              standard: "Yes, there are lockers right behind you. They're $2 for two hours. You'll get a code to open it after the ride.",
              formal: "Indeed, locker facilities are located directly behind you. The cost is $2 for a two-hour period, and you will be provided with an access code to retrieve your belongings upon completion of the ride.",
            },
            keyPhrases: [
              { en: "lockers", zh: "储物柜" },
              { en: "code", zh: "密码" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep, lockers are right over there behind you. Two bucks for two hours, and you get a code to unlock it when you're done.",
                textZh: "有，储物柜就在你身后那边。两块钱两小时，完了给你个密码开柜子。",
                actionHint: "two bucks = 两美元",
                frequency: "common",
              },
              {
                textEn:
                  "Sure, there's lockers just behind you. It's $2 for a couple hours — they'll give you a PIN after the ride.",
                textZh: "有的，你后面就有储物柜。两小时2美元——坐完给你一个PIN码。",
                actionHint: "PIN = 密码/PIN码",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. One more question — does this ride go upside down?",
            textZh: "好的。再问一个——这个项目会翻转吗？",
            casualVersion: "Cool. One more thing—this ride go upside down?",
            commonMistake: {
              wrong: "This ride will turn over?",
              correct: "Does this ride go upside down?",
              explanation: "“go upside down”是指游乐设施翻转的常用表达。",
            },
            formalityVariants: {
              casual: "Awesome. One last thing—this ride flip upside down?",
              standard: "Perfect. One more question — does this ride go upside down?",
              formal: "Excellent. I have one further inquiry: does this particular attraction feature inversions or go upside down?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "It does two inversions and a corkscrew. If that's not your thing, we have a milder version in Zone D. But this one is totally safe — just hold on tight!",
            textZh: "有两个翻转和一个螺旋。如果您不太适应，D区有一个温和版本。不过这个完全安全——抓紧就好！",
            casualVersion: "Yeah, it's got two flips and a corkscrew. If that's too much, there's a chiller one in Zone D. But this one's totally safe—just hang on!",
            commonMistake: {
              wrong: "If you not like that.",
              correct: "If that's not for you.",
              explanation: "“If that's not for you”意为“如果你不喜欢或不适应这种”，是地道表达。",
            },
            formalityVariants: {
              casual: "Yep, two flips and a corkscrew. Too intense? Milder one's in Zone D. It's safe though—just hold tight!",
              standard: "It does two inversions and a corkscrew. If that's not for you, there's a milder version in Zone D. But this one's completely safe—just hold on tight!",
              formal: "This attraction features two full inversions and a corkscrew maneuver. Should that be unsuitable, a more moderate version is available in Zone D. Rest assured, this ride is entirely safe; simply ensure you maintain a firm grip throughout.",
            },
            keyPhrases: [
              { en: "inversions", zh: "翻转" },
              { en: "corkscrew", zh: "螺旋" },
              { en: "hold on tight", zh: "抓紧" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, you'll go upside down twice and there's a spiral. If that's too intense, there's a tamer ride in Zone D. But don't worry — it's perfectly safe, just hang on!",
                textZh: "会，会倒过来两次还有一个螺旋。如果太刺激，D区有个温和版。别担心——完全安全，抓紧就好！",
                actionHint: "tamer = 更温和的，hang on = hold on 抓紧",
                frequency: "common",
              },
              {
                textEn:
                  "Two loops and a corkscrew, yeah. Not for everyone! Zone D has a gentler version if you'd rather. But honestly, it's totally safe — just grip the bar and enjoy the ride!",
                textZh:
                  "两个翻转和一个螺旋。不是所有人都适合！D区有个更柔和的。不过说真的，完全安全——抓好扶手享受就行！",
                actionHint: "loops = inversions 翻转",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 城市导览 ====================
  {
    id: "entertainment-city-tour",
    category: "entertainment",
    titleZh: "城市导览",
    titleEn: "City Tour",
    description: "参加城市观光团、与导游交流、了解景点信息",
    otherRole: "导游",
    otherRoleIcon: "🗺️",
    flows: [
      {
        id: "joining-city-tour",
        titleZh: "参加城市观光团",
        titleEn: "Joining a City Tour",
        description: "报名参加城市观光团并与导游交流",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to join the walking tour. Is there still room?",
            textZh: "你好，我想参加步行导览。还有名额吗？",
            commonMistake: {
              wrong: "I want to join the walking tour. Any spots left?",
              correct: "I'd like to join the walking tour. Are there any spots left?",
              explanation: "“I want to” 在美国听起来直接，用 “I'd like to” 更礼貌。",
            },
            formalityVariants: {
              casual: "Hey, wanna join the walking tour? Got any spots?",
              standard: "Hi, I'd like to join the walking tour. Are there any spots left?",
              formal: "Good morning/afternoon, I am interested in joining your walking tour. Do you happen to have any available spots?",
            },
            casualVersion: "Hey, any spots left on the walking tour?",
          },
          {
            speaker: "them",
            role: "导游",
            textEn:
              "Yes, we have a few spots left! The tour lasts about two and a half hours and covers the main historical district. It's $25 per person.",
            textZh: "有的，还有几个名额！导览大约两个半小时，涵盖主要的历史街区。每人25美元。",
            casualVersion: "Yeah, we got a few spots left! Tour's like two and a half hours, hits up the main historical district. Twenty-five bucks a head.",
            formalityVariants: {
              casual: "Yep, got a few spots! It's about two and a half hours, hits the main historical part. Twenty-five bucks a person.",
              standard: "Yes, we have a few spots left! The tour lasts about two and a half hours and covers the main historical district. It's $25 per person.",
              formal: "Indeed, we do have several vacancies remaining. The guided tour is approximately two and a half hours in duration and encompasses the primary historical district. The cost is $25 per individual.",
            },
            keyPhrases: [
              { en: "walking tour", zh: "步行导览" },
              { en: "historical district", zh: "历史街区" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, we've still got room! It's about two and a half hours, we hit the main historic area. 25 bucks a head.",
                textZh: "有名额！大概两个半小时，走主要的历史区域。每人25块。",
                actionHint: "a head = per person 每人",
                frequency: "common",
              },
              {
                textEn:
                  "You're in luck — still a couple spots open. The walk's about two and a half hours through the old town. $25 each.",
                textZh: "你运气好——还有几个名额。步行穿过老城区大约两个半小时。每人25美元。",
                actionHint: "old town = historical district 老城区",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds great. What landmarks will we see?",
            textZh: "听起来不错。我们会看到哪些地标？",
            casualVersion: "Cool. What landmarks we hitting up?",
            formalityVariants: {
              casual: "Cool. What landmarks we hitting up?",
              standard: "Sounds great. What landmarks will we see?",
              formal: "That sounds excellent. Could you please specify which landmarks will be included in the itinerary?",
            },
          },
          {
            speaker: "them",
            role: "导游",
            textEn:
              "We'll pass by the old cathedral, the central market, the city hall, and end at the waterfront. I'll share stories about each place along the way.",
            textZh: "我们会经过老教堂、中心市场、市政厅，最后到达滨水区。沿途我会分享每个地方的故事。",
            casualVersion: "We'll hit the Old Church, Central Market, City Hall, then finish up at the waterfront. I'll tell you stories about each spot as we go.",
            formalityVariants: {
              casual: "We'll hit the Old Church, Central Market, City Hall, then finish up at the waterfront. I'll tell you stories about each spot as we go.",
              standard: "We'll pass by the Old Church, Central Market, City Hall, and end up at the waterfront. I'll share stories about each place along the way.",
              formal: "Our route will encompass the Old Church, the Central Market, City Hall, and culminate at the waterfront area. I shall be providing historical anecdotes and information pertaining to each location throughout the journey.",
            },
            keyPhrases: [
              { en: "landmarks", zh: "地标" },
              { en: "cathedral", zh: "教堂" },
              { en: "waterfront", zh: "滨水区" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We'll swing by the cathedral, the market, city hall, and then wrap up at the waterfront. I've got great stories for each stop.",
                textZh: "我们会去教堂、市场、市政厅，最后在滨水区结束。每个站点我都有好故事。",
                actionHint: "swing by = 顺路去, wrap up = 结束",
                frequency: "common",
              },
              {
                textEn:
                  "The route takes us past the old cathedral, through the market, by city hall, and finishes down at the water. Lots of cool history along the way.",
                textZh: "路线经过老教堂、穿过市场、路过市政厅，最后到水边。沿途有很多有趣的历史。",
                actionHint: "down at the water = 在水边",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a restroom break during the tour?",
            textZh: "导览途中有休息上洗手间的时间吗？",
            casualVersion: "Any bathroom breaks during this?",
            commonMistake: {
              wrong: "Can I go to the toilet during the tour?",
              correct: "Is there a restroom break during the tour?",
              explanation: "“toilet” 在美国不如 “restroom” 或 “bathroom” 常用。问休息时间更自然。",
            },
            formalityVariants: {
              casual: "Any bathroom breaks during this?",
              standard: "Is there a restroom break during the tour?",
              formal: "Will there be an opportunity for a comfort stop or a restroom break during the duration of the tour?",
            },
            culturalNote: "长时间的步行导览通常会安排中途休息，如果没有主动安排，直接问导游也完全没问题。",
          },
          {
            speaker: "them",
            role: "导游",
            textEn:
              "Yes, we'll stop at the market about halfway through — there are restrooms and cafes there. Feel free to grab a coffee during the break.",
            textZh: "会的，大约走到一半时我们会在市场停下——那里有洗手间和咖啡馆。休息时可以买杯咖啡。",
            casualVersion: "Yeah, we'll hit the market 'bout halfway — they got bathrooms and coffee shops. You can grab a coffee then.",
            formalityVariants: {
              casual: "Yeah, we'll hit the market 'bout halfway — they got bathrooms and coffee shops. You can grab a coffee then.",
              standard: "Yes, we'll stop at the market about halfway through – there are restrooms and cafes there. You can grab a coffee during the break.",
              formal: "Certainly, we will make a stop at the market approximately midway through the tour, where both public restrooms and cafes are available. You are welcome to purchase refreshments during that interlude.",
            },
            keyPhrases: [
              { en: "halfway through", zh: "走到一半" },
              { en: "feel free to", zh: "可以随意" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep, we take a pit stop at the market around the midway point. Restrooms and coffee shops right there — help yourself.",
                textZh: "会的，走到中间的时候在市场停一下。洗手间和咖啡店就在那——随意。",
                actionHint: "pit stop = 短暂停留, midway point = 中途",
                frequency: "common",
              },
              {
                textEn:
                  "Sure thing — about halfway in, we stop at the market. There's bathrooms and you can get a coffee or a snack.",
                textZh: "当然——大约走到一半时在市场停。有洗手间，可以买杯咖啡或零食。",
                actionHint: "halfway in = halfway through 走到一半",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "One more thing — do you have any tips for taking good photos along the route?",
            textZh: "还有一件事——沿途拍照有什么好建议吗？",
            casualVersion: "Oh, also, any tips for good pics along the way?",
            formalityVariants: {
              casual: "Oh, also, any tips for good pics along the way?",
              standard: "One more thing — do you have any tips for taking good photos along the route?",
              formal: "Additionally, I was wondering if you could offer any recommendations or tips for capturing optimal photographs during the tour?",
            },
          },
          {
            speaker: "them",
            role: "导游",
            textEn:
              "Absolutely! The cathedral looks best from the east side in the morning light. And the waterfront at sunset is stunning — I'll time our arrival there perfectly. Ready to go?",
            textZh:
              "当然！教堂从东侧在晨光中拍最好看。滨水区的日落特别美——我会精确把握我们到达的时间。准备好出发了吗？",
            casualVersion: "Totally! Cathedral's best from the east in the morning light. And the waterfront at sunset? So good — I'll totally get us there at the right time. Ready?",
            formalityVariants: {
              casual: "Totally! Cathedral's best from the east in the morning light. And the waterfront at sunset? So good — I'll totally get us there at the right time. Ready?",
              standard: "Absolutely! The cathedral looks best from the east side in the morning light. And the waterfront at sunset is stunning — I'll time our arrival perfectly. Ready to go?",
              formal: "Indeed! The cathedral presents its most favorable photographic perspective from the east side during the morning hours. Furthermore, the waterfront at sunset offers a truly magnificent vista — I assure you our arrival will be precisely timed. Shall we commence?",
            },
            keyPhrases: [
              { en: "morning light", zh: "晨光" },
              { en: "sunset", zh: "日落" },
              { en: "stunning", zh: "极美的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Oh for sure! Shoot the cathedral from the east side — the morning light is gorgeous. And I'll make sure we hit the waterfront right at golden hour. Shall we get started?",
                textZh: "当然！从东侧拍教堂——早晨光线特别美。我会确保我们在黄金时段到滨水区。出发吧？",
                actionHint: "golden hour = 日落前的黄金光线时段",
                frequency: "common",
              },
              {
                textEn:
                  "Totally! The best shot of the cathedral is from the east in the morning. And trust me, the waterfront at sunset is incredible — I'll get us there just in time. Let's go!",
                textZh: "绝对！教堂最佳拍摄角度是早上从东边。相信我，滨水区的日落太美了——我会把时间掐得刚好。走吧！",
                actionHint: "best shot = 最佳拍摄角度, just in time = 刚好赶上",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 水族馆 ====================
  {
    id: "entertainment-aquarium",
    category: "entertainment",
    titleZh: "水族馆",
    titleEn: "Visiting an Aquarium",
    description: "参观水族馆、了解海洋生物、观看表演",
    otherRole: "水族馆工作人员",
    otherRoleIcon: "🐠",
    flows: [
      {
        id: "aquarium-visit",
        titleZh: "水族馆参观",
        titleEn: "Aquarium Visit",
        description: "购票、参观展区并观看表演",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hello, two tickets please. Are there any special shows today?",
            textZh: "你好，两张票。今天有什么特别的表演吗？",
            casualVersion: "Hey, two tickets. Any special shows today?",
            culturalNote: "美国人买票不会说“请问”，直接说需求就好。",
            commonMistake: {
              wrong: "Two tickets.",
              correct: "Two tickets, please.",
              explanation: "直接说 'Two tickets.' 听起来不够礼貌，加 'please' 或 'I'd like' 更好。",
            },
            formalityVariants: {
              casual: "Hey, two tickets. Any special shows today?",
              standard: "Hello, two tickets please. Are there any special shows today?",
              formal: "Good morning/afternoon. I'd like to purchase two admission tickets, please. Could you inform me if there are any special presentations scheduled for today?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Two tickets will be $45. We have a dolphin show at 2 PM and a shark feeding at 3:30. Both are included in your admission.",
            textZh: "两张票45美元。下午2点有海豚表演，3:30有鲨鱼喂食。都包含在门票里。",
            casualVersion: "Two tickets'll be $45. Dolphin show's at 2, shark feeding at 3:30. Both included with admission.",
            formalityVariants: {
              casual: "That'll be $45 for two. Dolphin show at 2, shark feeding at 3:30. All included.",
              standard: "Two tickets will be $45. We have a dolphin show at 2 PM and a shark feeding at 3:30. Both are included in your admission.",
              formal: "The total for two admission tickets is $45. We have a dolphin presentation scheduled for 2 PM and a shark feeding demonstration at 3:30 PM. Both events are fully encompassed within your admission fee.",
            },
            keyPhrases: [
              { en: "dolphin show", zh: "海豚表演" },
              { en: "shark feeding", zh: "鲨鱼喂食" },
              { en: "included in your admission", zh: "包含在门票里" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That's $45 for two. Today we've got the dolphin show at 2 and the shark feeding at 3:30 — both come with your ticket.",
                textZh: "两张45美元。今天2点有海豚表演，3:30有鲨鱼喂食——都包含在门票里。",
                actionHint: "come with your ticket = 包含在门票里",
                frequency: "common",
              },
              {
                textEn:
                  "Two tickets, $45. And you picked a great day — there's a dolphin performance at 2 and they feed the sharks at 3:30. It's all part of the admission.",
                textZh: "两张票45美元。你选了个好日子——2点有海豚表演，3:30喂鲨鱼。都算在门票里。",
                actionHint: "part of the admission = 包含在门票中",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's great! Which way should we start? We don't want to miss the dolphin show.",
            textZh: "太好了！我们应该从哪个方向开始？我们不想错过海豚表演。",
            casualVersion: "Awesome! Where should we start? Don't wanna miss the dolphin show.",
            commonMistake: {
              wrong: "Which direction should we start?",
              correct: "Which way should we start?",
              explanation: "'Which direction' 用于物理方向，问路或辨别方位；'Which way' 更自然地问开始参观的路线。",
            },
            formalityVariants: {
              casual: "Cool! Where to start? Don't wanna miss the dolphin show.",
              standard: "That's great! Which way should we start? We don't want to miss the dolphin show.",
              formal: "That sounds wonderful. Could you please advise us on the optimal starting point for our visit? We are particularly keen on ensuring we do not miss the dolphin presentation.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "I'd suggest starting with the tropical fish gallery on the ground floor, then working your way up to the jellyfish exhibit. The dolphin arena is on level 3 — head there by 1:45 to get good seats.",
            textZh: "建议从一楼的热带鱼展厅开始，然后逐步走到水母展区。海豚场地在3楼——1:45之前过去可以占到好位子。",
            casualVersion: "Start with the tropical fish on the first floor, then head to the jellyfish. Dolphin stadium's on the third – try to get there by 1:45 for good seats.",
            formalityVariants: {
              casual: "Start with the tropical fish on floor one, then hit the jellyfish. Dolphin show's upstairs on three – be there by 1:45 for a good spot.",
              standard: "I recommend starting with the tropical fish exhibit on the first floor, then gradually making your way to the jellyfish area. The dolphin stadium is on the third floor – try to get there by 1:45 for good seats.",
              formal: "I would suggest commencing your visit with the tropical fish exhibit located on the first floor, subsequently proceeding to the jellyfish area. The dolphin stadium is situated on the third floor, and I would advise arriving by 1:45 PM to secure optimal seating.",
            },
            keyPhrases: [
              { en: "tropical fish gallery", zh: "热带鱼展厅" },
              { en: "jellyfish exhibit", zh: "水母展区" },
              { en: "arena", zh: "表演场地" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Start downstairs with the tropical fish, then make your way up to the jellyfish. For the dolphin show, get to level 3 by 1:45 if you want decent seats.",
                textZh: "从楼下的热带鱼开始，然后往上走到水母。海豚表演的话，1:45前到3楼才能占到好座。",
                actionHint: "make your way up = 往上走, decent = 还不错的",
                frequency: "common",
              },
              {
                textEn:
                  "I'd start on the first floor with the tropical fish and work up from there. Oh, and the dolphin thing is on 3 — show up around 1:45 for a good spot.",
                textZh: "我建议先从一楼热带鱼看起，然后一层层往上。海豚表演在3楼——1:45左右去占个好位置。",
                actionHint: "show up = 到达/出现",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a touch pool where we can interact with the animals?",
            textZh: "有触摸池可以跟动物互动吗？",
            casualVersion: "Got a touch pool where we can interact with animals?",
            commonMistake: {
              wrong: "Is there touch pool?",
              correct: "Is there a touch pool?",
              explanation: "在英文中，可数名词单数前通常需要冠词 'a' 或 'the'。",
            },
            formalityVariants: {
              casual: "Got a touch pool to interact with animals?",
              standard: "Is there a touch pool where we can interact with the animals?",
              formal: "Do you have a designated touch pool facility where visitors are permitted to interact with marine life?",
            },
            culturalNote: "很多水族馆有 touch pool / touch tank，可以触摸海星、海参等。记得先洗手，触摸时要轻柔。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Yes! The touch pool is on the second floor. You can handle starfish, sea cucumbers, and small rays. Our staff there will show you the proper way to touch them.",
            textZh: "有的！触摸池在二楼。您可以触摸海星、海参和小魔鬼鱼。我们那里的工作人员会教您正确的触摸方式。",
            casualVersion: "Yeah! Touch pool's on the second floor. You can handle starfish, sea cucumbers, little rays. Staff there'll show ya how to touch 'em right.",
            formalityVariants: {
              casual: "Yep! Touch pool's on floor two. You can touch starfish, sea cukes, small rays. Staff'll tell ya how.",
              standard: "Yes! The touch pool is on the second floor. You can handle starfish, sea cucumbers, and small rays. Our staff there will show you the proper way to touch them.",
              formal: "Indeed. The touch pool is located on the second floor. Guests are welcome to gently interact with various species such as starfish, sea cucumbers, and juvenile rays. Our onsite educational staff will provide guidance on the appropriate handling techniques.",
            },
            keyPhrases: [
              { en: "touch pool", zh: "触摸池" },
              { en: "starfish", zh: "海星" },
              { en: "sea cucumbers", zh: "海参" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Oh yeah, the touch tank's on the second floor! Starfish, sea cucumbers, baby rays — you can hold them all. The staff up there will show you how.",
                textZh: "有啊，触摸池在二楼！海星、海参、小鳐鱼——都能摸。上面的工作人员会教你怎么弄。",
                actionHint: "touch tank = touch pool, baby rays = 小鳐鱼",
                frequency: "common",
              },
              {
                textEn:
                  "Absolutely! Head to the second floor for the touch pool. You get to feel starfish, sea cucumbers, and little rays. There's always someone there to guide you.",
                textZh: "当然！去二楼的触摸池。可以触摸海星、海参和小鳐鱼。那里一直有人指导。",
                actionHint: "get to = 可以/有机会",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Wonderful. Is there a cafe inside if we get hungry?",
            textZh: "太好了。如果饿了里面有餐厅吗？",
            casualVersion: "Awesome. Got a cafe inside if we get hungry?",
            commonMistake: {
              wrong: "Is there cafe inside?",
              correct: "Is there a cafe inside?",
              explanation: "'cafe' 是可数名词，单数形式前需要冠词 'a'。",
            },
            formalityVariants: {
              casual: "Cool. Cafe inside if we get hungry?",
              standard: "Wonderful. Is there a cafe inside if we get hungry?",
              formal: "Excellent. May I inquire if there is a cafeteria or dining establishment available within the premises, should we require refreshments?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "There's an Ocean Cafe on level 2 with a view of the main tank. You can eat lunch while watching the fish swim by! Here's your map — enjoy your visit.",
            textZh: "2楼有个海洋餐厅，可以看到主水缸。您可以边吃午餐边看鱼游过！这是您的地图——祝您参观愉快。",
            casualVersion: "Ocean Cafe's on the 2nd floor, looks right into the main tank. You can eat lunch watching fish swim by! Here's your map – enjoy!",
            formalityVariants: {
              casual: "Ocean Cafe's upstairs on two, right by the main tank. Grab lunch, watch the fish! Map's here – have fun.",
              standard: "There's an Ocean Cafe on the 2nd floor with a view of the main tank. You can eat lunch while watching fish swim by! Here's your map – enjoy your visit.",
              formal: "Certainly. We have an Ocean Cafe located on the second floor, which offers an excellent vantage point overlooking our main aquarium tank. You are welcome to dine there while observing the marine life. Here is a complimentary map for your convenience – please do enjoy your visit.",
            },
            keyPhrases: [
              { en: "main tank", zh: "主水缸" },
              { en: "swim by", zh: "游过" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, there's a cafe on 2 that overlooks the big tank — super cool to eat with the fish right there. Here's a map. Have a great time!",
                textZh: "二楼有个咖啡厅正对着大水缸——边吃边看鱼特别酷。地图给你。玩得开心！",
                actionHint: "overlooks = 正对着/俯瞰",
                frequency: "common",
              },
              {
                textEn:
                  "The Ocean Cafe on level 2 is right next to the main tank — you can literally watch the fish while you eat. Here's your map, enjoy!",
                textZh: "2楼的海洋餐厅紧挨着主水缸——真的可以边吃边看鱼。地图给您，祝愉快！",
                actionHint: "literally = 真的/确实",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 动物园 ====================
  {
    id: "entertainment-zoo",
    category: "entertainment",
    titleZh: "动物园",
    titleEn: "Visiting a Zoo",
    description: "参观动物园、了解动物信息、参加喂食体验",
    otherRole: "动物园工作人员",
    otherRoleIcon: "🦁",
    flows: [
      {
        id: "zoo-visit",
        titleZh: "动物园参观",
        titleEn: "Zoo Visit",
        description: "购票入园、咨询动物展区信息",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, one adult and one child ticket, please. She's six years old.",
            textZh: "你好，一张成人票一张儿童票。她六岁。",
            casualVersion: "Hey, one adult, one kid ticket. She's six.",
            commonMistake: {
              wrong: "I want one adult ticket and one child ticket.",
              correct: "One adult and one child ticket, please.",
              explanation: "直接说需要的物品更自然，用 I want 听起来有点生硬。",
            },
            formalityVariants: {
              casual: "Hey, one adult, one kid ticket. She's six.",
              standard: "Hi, one adult and one child ticket, please. She's six.",
              formal: "Good morning/afternoon, I'd like to purchase one adult ticket and one child ticket, please. My daughter is six years old.",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "That'll be $22 for the adult and $12 for the child. Would you like to add the safari tram ride? It's an extra $8 per person.",
            textZh: "成人票22美元，儿童票12美元。要加游览小火车吗？每人额外8美元。",
            casualVersion: "Okay, that's $22 for adult, $12 for the kid. Wanna add the tram? It's another $8 a person.",
            formalityVariants: {
              casual: "Okay, that's $22 adult, $12 kid. Wanna add the tram? Another $8 a person.",
              standard: "That'll be $22 for the adult ticket and $12 for the child ticket. Would you like to add the tram tour for an additional $8 per person?",
              formal: "The total will be $22 for the adult admission and $12 for the child admission. We also offer an optional tram tour for an additional charge of $8 per individual, should you be interested.",
            },
            keyPhrases: [
              { en: "safari tram", zh: "游览小火车" },
              { en: "child ticket", zh: "儿童票" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That's $22 for you and $12 for the little one. Wanna add the safari tram? It's 8 bucks each, totally worth it.",
                textZh: "你22美元，小朋友12美元。要加游览小火车吗？每人8块，很值。",
                actionHint: "the little one = 小朋友",
                frequency: "common",
              },
              {
                textEn:
                  "Adult's $22, kid's $12. We also have a tram ride through the safari area for an extra $8 a person if you're interested.",
                textZh: "成人22美元，儿童12美元。另外有游览小火车穿过野生动物区，每人加8美元，感兴趣吗。",
                actionHint: "safari area = 野生动物区",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, we'd love that. What animals will we see on the tram ride?",
            textZh: "好的，我们很想坐。小火车上能看到什么动物？",
            casualVersion: "Yeah, we'd totally love to. What kinda animals can we see from it?",
            commonMistake: {
              wrong: "What animal can we see from the tram?",
              correct: "What kind of animals can we see from the tram?",
              explanation: "问种类用 'kind of animals' 更自然，'What animal' 听起来像问'哪只动物'。",
            },
            formalityVariants: {
              casual: "Yeah, we'd totally love to. What kinda animals can we see from it?",
              standard: "Yes, we'd love to. What kind of animals can we see from the tram?",
              formal: "Yes, that sounds wonderful, we would certainly enjoy that. Could you please inform us which species of animals are typically visible from the tram?",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "The tram goes through the African savanna section — you'll see giraffes, zebras, rhinos, and elephants up close. The ride is about 25 minutes.",
            textZh: "小火车穿过非洲草原区——您可以近距离看到长颈鹿、斑马、犀牛和大象。全程大约25分钟。",
            casualVersion: "It goes through the African savanna — you'll get super close to giraffes, zebras, rhinos, elephants. 'Bout 25 mins.",
            formalityVariants: {
              casual: "It goes through the African savanna — you'll get super close to giraffes, zebras, rhinos, elephants. 'Bout 25 mins.",
              standard: "The tram goes through the African savanna section — you'll get up close with giraffes, zebras, rhinos, and elephants. The ride is about 25 minutes long.",
              formal: "The tram route encompasses the African savanna section, offering excellent opportunities to observe giraffes, zebras, rhinoceroses, and elephants at close proximity. The duration of the excursion is approximately 25 minutes.",
            },
            keyPhrases: [
              { en: "African savanna", zh: "非洲草原" },
              { en: "up close", zh: "近距离" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It takes you right through the African savanna — giraffes, zebras, rhinos, elephants, all right there. It's about a 25-minute ride.",
                textZh: "直接穿过非洲草原——长颈鹿、斑马、犀牛、大象，就在眼前。大约25分钟。",
                actionHint: "right there = 就在那里/就在眼前",
                frequency: "common",
              },
              {
                textEn:
                  "You ride through the savanna zone and get to see the giraffes, zebras, rhinos, and elephants super close. Takes about 25 minutes or so.",
                textZh: "穿过草原区，能超近距离看到长颈鹿、斑马、犀牛和大象。大概25分钟左右。",
                actionHint: "super close = 非常近",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "My daughter loves giraffes. Is there a giraffe feeding experience?",
            textZh: "我女儿很喜欢长颈鹿。有长颈鹿喂食体验吗？",
            casualVersion: "My daughter's obsessed with giraffes. Can we feed 'em?",
            commonMistake: {
              wrong: "Has a giraffe feeding experience?",
              correct: "Is there a giraffe feeding experience?",
              explanation: "询问是否有某物存在，用 'Is there/Are there' 而不是 'has'。",
            },
            formalityVariants: {
              casual: "My daughter's obsessed with giraffes. Can we feed 'em?",
              standard: "My daughter loves giraffes. Is there a giraffe feeding experience?",
              formal: "My daughter is particularly fond of giraffes. May I inquire if a giraffe feeding experience is offered?",
            },
            culturalNote:
              "很多动物园提供付费的喂食体验 feeding experience，可以亲手喂长颈鹿或小鹿，是孩子们最喜欢的活动之一。",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "Yes! The giraffe feeding platform is open from 10 to 2. It's $5 for a cup of food. Your little one will love it — the giraffes are very gentle.",
            textZh: "有的！长颈鹿喂食平台10点到2点开放。一杯食物5美元。您的小朋友一定会喜欢——长颈鹿非常温柔。",
            casualVersion: "Yep! Feeding platform's open 10 to 2. Five bucks for a cup of food. Your kid'll love it — they're super gentle.",
            formalityVariants: {
              casual: "Yep! Feeding platform's open 10 to 2. Five bucks for a cup of food. Your kid'll love it — they're super gentle.",
              standard: "Yes! The giraffe feeding platform is open from 10 to 2. It's $5 for a cup of food. Your little one will love it — giraffes are very gentle.",
              formal: "Indeed! The giraffe feeding platform operates between 10:00 AM and 2:00 PM. The cost for a cup of feed is $5. Your child is certain to enjoy the experience, as giraffes are known for their docile nature.",
            },
            keyPhrases: [
              { en: "feeding platform", zh: "喂食平台" },
              { en: "gentle", zh: "温柔的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Oh yeah! The giraffe feeding is open 10 to 2. Five bucks for a cup of food. Kids go crazy for it — the giraffes are super friendly.",
                textZh: "有啊！长颈鹿喂食10点到2点。一杯食物5块。小孩子超喜欢——长颈鹿特别友好。",
                actionHint: "go crazy for it = 超级喜欢/疯狂喜欢",
                frequency: "common",
              },
              {
                textEn:
                  "Definitely! You can feed the giraffes from 10 AM to 2 PM — $5 for a cup. She's gonna love it, they're really sweet animals.",
                textZh: "当然可以！上午10点到下午2点可以喂长颈鹿——一杯5美元。她一定会喜欢的，长颈鹿很温顺。",
                actionHint: "she's gonna = she is going to 她一定会",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Where should we start to make the most of our day?",
            textZh: "太好了。我们从哪里开始才能充分利用这一天？",
            casualVersion: "Awesome. So, where should we start to get the most outta our day?",
            commonMistake: {
              wrong: "Where should we start to use our day best?",
              correct: "Where should we start to make the most of our day?",
              explanation: "'make the most of' 是一个常用习语，表示充分利用时间，'use best' 不自然。",
            },
            formalityVariants: {
              casual: "Awesome. So, where should we start to get the most outta our day?",
              standard: "Perfect. Where should we start to make the most of our day?",
              formal: "Excellent. Could you please advise on an optimal itinerary to maximize our experience today?",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "Start with the primates and big cats on the east side while it's still cool. Hit the giraffe feeding before noon. Then grab the tram at 1 PM. The reptile house is great for the afternoon — it's air-conditioned!",
            textZh:
              "趁天气还凉爽先去东边看灵长类和大型猫科。中午前去喂长颈鹿。然后下午1点坐小火车。爬行馆适合下午去——有空调！",
            casualVersion: "Hit the primates and big cats on the east side first, while it's still cool. Do the giraffe feeding before noon. Then tram around 1. The reptile house is great for afternoon — it's got AC!",
            culturalNote: "美国动物园往往面积很大，提前规划路线很重要，尤其是有喂食表演等限时活动。",
            formalityVariants: {
              casual: "Hit the primates and big cats on the east side first, while it's still cool. Do the giraffe feeding before noon. Then tram around 1. The reptile house is great for afternoon — it's got AC!",
              standard: "Start with the primates and big cats on the east side while it's still cool. Head to the giraffe feeding before noon. Then take the tram around 1 PM. The reptile house is good for the afternoon — it's air-conditioned!",
              formal: "I recommend commencing with the primate and large feline exhibits on the east side during the cooler morning hours. Proceed to the giraffe feeding experience prior to noon. Subsequently, the tram tour at approximately 1:00 PM would be advisable. The reptile house is a suitable option for the afternoon, as it offers air-conditioned comfort.",
            },
            keyPhrases: [
              { en: "primates", zh: "灵长类动物" },
              { en: "big cats", zh: "大型猫科动物" },
              { en: "reptile house", zh: "爬行馆" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Go see the monkeys and lions on the east side first while it's cool out. Feed the giraffes before lunch, catch the tram at 1, then do the reptile house in the afternoon — it's got AC!",
                textZh: "趁凉快先去东边看猴子和狮子。午饭前喂长颈鹿，1点坐小火车，下午去爬行馆——有空调！",
                actionHint: "AC = air conditioning 空调",
                frequency: "common",
              },
              {
                textEn:
                  "Here's what I'd do: east side for primates and big cats early on, giraffe feeding by noon, tram at 1, and save the reptile building for the hot part of the day — nice and cool in there.",
                textZh:
                  "我建议这样：早点去东边看灵长类和大猫，中午前喂长颈鹿，1点坐火车，最热的时候去爬行馆——里面很凉快。",
                actionHint: "save...for = 留到...的时候",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 滑雪场 ====================
  {
    id: "entertainment-ski-resort",
    category: "entertainment",
    titleZh: "滑雪场",
    titleEn: "Ski Resort",
    description: "在滑雪场租装备、买缆车票、了解雪道信息",
    otherRole: "滑雪场工作人员",
    otherRoleIcon: "⛷️",
    flows: [
      {
        id: "ski-rental",
        titleZh: "租装备上雪道",
        titleEn: "Equipment Rental & Slopes",
        description: "租赁滑雪装备并了解雪道信息",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to rent ski equipment for the day. I'm a beginner.",
            textZh: "你好，我想租一天的滑雪装备。我是初学者。",
            casualVersion: "Hey, wanna rent ski gear for the day. I'm a total beginner.",
            commonMistake: {
              wrong: "I want to rent ski equipment",
              correct: "I'd like to rent ski equipment",
              explanation: "'I want to...' 听起来比较直接和不礼貌，'I'd like to...' 更委婉礼貌。",
            },
            formalityVariants: {
              casual: "Hey, I wanna rent ski gear for today. First timer here.",
              standard: "Hi, I'd like to rent ski equipment for one day. I'm a beginner.",
              formal: "Good morning, I would like to inquire about renting ski equipment for the entire day. I am new to skiing.",
            },
            culturalNote: "在欧美滑雪场，初学者建议先上一节滑雪课 ski lesson，教练会教基本技巧和安全知识。",
          },
          {
            speaker: "them",
            role: "租赁员",
            textEn:
              "No problem! I'll need your shoe size and height to get you set up. For beginners, I'd recommend our basic package — skis, boots, poles, and a helmet for $65.",
            textZh:
              "没问题！我需要您的鞋码和身高来给您准备装备。初学者推荐我们的基础套餐——雪板、雪鞋、雪杖和头盔65美元。",
            casualVersion: "No prob! Just need your shoe size and height to get ya hooked up. For beginners, the basic package—skis, boots, poles, helmet—is $65.",
            formalityVariants: {
              casual: "No prob! Just need your shoe size and height to get you set up. Basic package, $65, includes everything.",
              standard: "No problem! I'll need your shoe size and height to get you set up. For beginners, we recommend our basic package—skis, boots, poles, and helmet for $65.",
              formal: "Certainly. I will require your shoe size and height to properly fit you with the equipment. For those new to skiing, we highly recommend our comprehensive basic package, which includes skis, boots, poles, and a helmet, for $65.",
            },
            keyPhrases: [
              { en: "shoe size", zh: "鞋码" },
              { en: "basic package", zh: "基础套餐" },
              { en: "poles", zh: "雪杖" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Easy! Just need your shoe size and how tall you are. For someone just starting out, I'd go with the starter package — skis, boots, poles, helmet, 65 bucks.",
                textZh: "简单！告诉我鞋码和身高就好。新手的话推荐入门套餐——雪板、雪鞋、雪杖、头盔，65块。",
                actionHint: "just starting out = 刚开始/新手, go with = 选择",
                frequency: "common",
              },
              {
                textEn:
                  "Sure thing! What's your shoe size and height? Since you're new to skiing, our beginner bundle is the way to go — skis, boots, poles, and a helmet for $65.",
                textZh: "没问题！鞋码和身高多少？既然你是滑雪新手，初学者套餐最合适——雪板、雪鞋、雪杖和头盔65美元。",
                actionHint: "the way to go = 最好的选择",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Size 9, and I'm about 5 foot 10. Should I take a lesson first?",
            textZh: "9码，身高大约5英尺10。我应该先上一节课吗？",
            casualVersion: "Size 9, 'bout 5'10\". Think I should take a lesson first?",
            formalityVariants: {
              casual: "Size 9, 'bout 5'10\". Should I take a lesson?",
              standard: "Size 9, and I'm about 5 feet 10. Should I take a lesson first?",
              formal: "My shoe size is 9, and my height is approximately 5 feet 10 inches. Would you recommend I partake in a lesson beforehand?",
            },
          },
          {
            speaker: "them",
            role: "租赁员",
            textEn:
              "Definitely. Our beginner group lesson starts at 10 AM and it's $45. It's a two-hour session on the bunny slope. You'll learn how to stop, turn, and use the chairlift.",
            textZh:
              "绝对建议。我们的初学者小组课10点开始，45美元。两小时，在初学者坡道上。您会学到怎么停下、转弯和使用缆车。",
            casualVersion: "Oh yeah, totally. Beginner group lesson's at 10 AM, forty-five bucks. Two hours on the bunny hill. You'll learn stops, turns, and how to use the lift.",
            formalityVariants: {
              casual: "Oh yeah, definitely. Beginner group lesson's at 10 AM, $45. Two hours on the bunny hill, covers stops, turns, and the lift.",
              standard: "Definitely. Our beginner group lesson starts at 10 AM and it's $45. It's two hours long, on the bunny hill. You'll learn how to stop, turn, and use the lift.",
              formal: "Absolutely. We highly recommend it. Our beginner group lesson commences at 10 AM and is priced at $45. This two-hour session, conducted on the designated beginner slope, will instruct you on proper stopping techniques, turning maneuvers, and the safe operation of the ski lift.",
            },
            keyPhrases: [
              { en: "group lesson", zh: "小组课" },
              { en: "bunny slope", zh: "初学者坡道" },
              { en: "chairlift", zh: "缆车" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Oh for sure. There's a beginner class at 10 — $45, two hours on the bunny hill. They'll teach you the basics: stopping, turning, getting on the lift.",
                textZh: "当然建议。10点有初学者课——45美元，两小时在初学者坡上。会教你基本功：停、转弯、坐缆车。",
                actionHint: "bunny hill = bunny slope 初学者坡道",
                frequency: "common",
              },
              {
                textEn:
                  "100%. We've got a group lesson at 10 AM, 45 bucks for two hours. They'll have you on the beginner slope learning to stop, turn, and ride the chairlift.",
                textZh: "百分之百建议。上午10点有小组课，45块两小时。在初学者坡上教你停、转弯和坐缆车。",
                actionHint: "100% = absolutely 绝对",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the lesson. Which trails are good for beginners after that?",
            textZh: "我报名上课。上完课之后哪些雪道适合初学者？",
            casualVersion: "Cool, I'll do the lesson. Which trails are good for beginners after that?",
            formalityVariants: {
              casual: "Okay, I'll take the lesson. What trails are good for beginners afterward?",
              standard: "I'll sign up for the lesson. Which trails are suitable for beginners after the lesson?",
              formal: "I would like to register for the lesson. Subsequent to the lesson, could you please advise which trails are most appropriate for beginner skiers?",
            },
          },
          {
            speaker: "them",
            role: "租赁员",
            textEn:
              "Stick to the green trails — they're the easiest. Trail 1 and Trail 3 are very gentle. Avoid the blue and black trails until you're more confident.",
            textZh: "走绿色雪道——那些最简单。1号道和3号道非常平缓。在您更有信心之前避免蓝色和黑色雪道。",
            casualVersion: "Just stick to the green ones — they're super easy. Trails 1 and 3 are really mellow. Stay off the blue and black until you feel more confident.",
            formalityVariants: {
              casual: "Stick to the green trails — they're the easiest. 1 and 3 are super mellow. Avoid blue/black till you're good.",
              standard: "Stick to the green trails — they're the easiest. Trails 1 and 3 are very mellow. Avoid blue and black trails until you're more confident.",
              formal: "Please remain on the green trails, as they are designated as the easiest. Specifically, Trails 1 and 3 are quite gentle. It is advisable to refrain from attempting blue or black trails until you have developed a greater level of confidence in your abilities.",
            },
            keyPhrases: [
              { en: "green trails", zh: "绿色雪道（初级）" },
              { en: "blue trails", zh: "蓝色雪道（中级）" },
              { en: "black trails", zh: "黑色雪道（高级）" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Stay on the greens — those are the easy ones. Trail 1 and 3 are nice and mellow. Don't go near the blues or blacks till you've got the hang of it.",
                textZh: "走绿道——那些是简单的。1号和3号很平缓。没掌握之前别碰蓝道和黑道。",
                actionHint: "mellow = 平缓/温和, got the hang of it = 掌握了",
                frequency: "common",
              },
              {
                textEn:
                  "Keep it to the green runs for now — 1 and 3 are super chill. The blue and black ones will be there when you're ready.",
                textZh: "现在先走绿色跑道——1号和3号超级轻松。等你准备好了再试蓝色和黑色的。",
                actionHint: "keep it to = stick to 只走, runs = trails 雪道",
                frequency: "common",
              },
            ],
          },
          { speaker: "you", textEn: "Got it. Where do I pick up my equipment?", textZh: "明白了。我去哪里取装备？",
            casualVersion: "Got it. So, where do I grab my gear?",
            formalityVariants: {
              casual: "Got it. Where do I grab my stuff?",
              standard: "Got it. Where do I pick up my equipment?",
              formal: "Understood. Could you please direct me to the location for equipment collection?",
            },
          },
          {
            speaker: "them",
            role: "租赁员",
            textEn:
              "Head to window 3 with this receipt. They'll fit everything for you. And remember — if something doesn't feel right, come back and we'll adjust it. Have a great time on the mountain!",
            textZh:
              "拿着这张收据去3号窗口。他们会帮您调试所有装备。记住——如果有什么不舒服的，回来我们帮您调整。祝您在山上玩得开心！",
            casualVersion: "Go to window 3 with this receipt. They'll get ya all set. Remember, if anything feels weird, just come back and we'll fix it. Have fun out there!",
            formalityVariants: {
              casual: "Window 3 with this receipt. They'll set you up. If anything's off, come back. Have fun!",
              standard: "Head to window 3 with this receipt. They'll get you all set up. Remember—if anything feels off, come back and we'll adjust it for you. Have fun on the mountain!",
              formal: "Kindly proceed to window number 3 with this receipt. The staff there will ensure all your equipment is properly fitted. Please note, should any item feel uncomfortable, do not hesitate to return, and we will make the necessary adjustments. We wish you an enjoyable experience on the slopes.",
            },
            keyPhrases: [
              { en: "fit everything", zh: "调试所有装备" },
              { en: "adjust", zh: "调整" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Take this receipt to window 3 — they'll get you all geared up. If anything feels off, just swing back and we'll fix it. Have a blast out there!",
                textZh: "拿收据去3号窗口——他们会帮你穿戴好。有不舒服的回来我们调。玩得开心！",
                actionHint: "geared up = 穿戴好装备, feels off = 感觉不对劲",
                frequency: "common",
              },
              {
                textEn:
                  "Window 3, just show them this receipt. They'll size everything up for you. And hey, if the boots are pinching or anything, come on back. Enjoy the slopes!",
                textZh: "3号窗口，把收据给他们看。他们会帮你调好尺寸。如果雪鞋夹脚什么的，回来找我们。享受滑雪吧！",
                actionHint: "pinching = 夹脚/夹得紧",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 高尔夫球 ====================
  {
    id: "entertainment-golf",
    category: "entertainment",
    titleZh: "高尔夫球",
    titleEn: "Playing Golf",
    description: "在高尔夫球场预约、租装备、了解规则",
    otherRole: "高尔夫球场工作人员",
    otherRoleIcon: "⛳",
    flows: [
      {
        id: "golf-tee-time",
        titleZh: "预约开球时间",
        titleEn: "Booking a Tee Time",
        description: "在高尔夫球场预约并准备开球",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Good morning. I'd like to book a tee time for two. Do you have anything available around 9 AM?",
            textZh: "早上好。我想预约两个人的开球时间。9点左右有空吗？",
            casualVersion: "Mornin'. Wanna book a tee time for two. Got anything 'round 9?",
            commonMistake: {
              wrong: "I want to book tee time",
              correct: "I'd like to book a tee time",
              explanation: "中文的'我想'直译成'I want'听起来太直接，用'I'd like'更礼貌。",
            },
            formalityVariants: {
              casual: "Hey, booking a tee time for two. Got anything around 9?",
              standard: "Good morning. I'd like to book a tee time for two. Do you have anything available around 9 AM?",
              formal: "Good morning. I would like to inquire about booking a tee time for two individuals. Do you have any availability approximately at 9:00 AM?",
            },
            culturalNote: "Tee time 是高尔夫术语，指预约的开球时间。建议提前预约，热门球场周末通常需要提前几天预订。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Let me check. We have 9:15 available. Will you be renting clubs, or did you bring your own?",
            textZh: "我查一下。9:15有空。您需要租球杆还是自带的？",
            casualVersion: "Lemme check. 9:15's open. Renting clubs or got your own?",
            formalityVariants: {
              casual: "Hold on, let me check. We've got 9:15. Need to rent clubs or bring your own?",
              standard: "Let me check. We have 9:15 available. Will you be renting clubs, or did you bring your own?",
              formal: "Please allow me a moment to confirm. We do have an opening at 9:15. May I ask if you will require club rentals, or will you be utilizing your personal equipment?",
            },
            keyPhrases: [
              { en: "tee time", zh: "开球时间" },
              { en: "renting clubs", zh: "租球杆" },
            ],
            alternativeExpressions: [
              {
                textEn: "Let me take a look... 9:15 works. You guys need clubs or did you bring your own set?",
                textZh: "我看看...9:15可以。你们需要球杆还是自己带了？",
                actionHint: "your own set = 你自己的一套球杆",
                frequency: "common",
              },
              {
                textEn: "Hmm, I've got a 9:15 slot open. Are you renting or did you come with your own gear?",
                textZh: "嗯，9:15有个空档。你们租还是自带装备？",
                actionHint: "slot = 时段, gear = 装备",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "We'll need to rent clubs. And a golf cart too, please.",
            textZh: "我们需要租球杆。还需要一辆高尔夫球车。",
            casualVersion: "We'll need clubs. And a golf cart too.",
            commonMistake: {
              wrong: "We need rent clubs",
              correct: "We'll need to rent clubs",
              explanation: "动词'rent'前需要'to'，或用'renting'；'need'后常跟动词不定式。",
            },
            formalityVariants: {
              casual: "Yeah, we'll need to rent clubs. And a cart.",
              standard: "We'll need to rent clubs. We'll also need a golf cart.",
              formal: "Yes, we will require club rentals. Additionally, we will need a golf cart.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Club rental is $40 per set, and the cart is $35 for 18 holes. Green fees for two are $120. So your total would be $235.",
            textZh: "球杆租赁每套40美元，球车18洞35美元。两人的果岭费120美元。总共235美元。",
            casualVersion: "Clubs are $40 a set, cart's $35 for 18. Green fees for two, $120. Total's $235.",
            formalityVariants: {
              casual: "Clubs are forty bucks a set, cart thirty-five for eighteen. Green fees for two are a hundred twenty. Comes to two-thirty-five.",
              standard: "Club rental is $40 per set, and the cart is $35 for 18 holes. Green fees for two are $120. So your total would be $235.",
              formal: "Club rentals are priced at $40 per set, and the golf cart is $35 for an 18-hole round. The green fees for two individuals amount to $120. Therefore, your grand total will be $235.",
            },
            keyPhrases: [
              { en: "club rental", zh: "球杆租赁" },
              { en: "green fees", zh: "果岭费" },
              { en: "18 holes", zh: "18洞" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Clubs are 40 a set, cart's 35 for the full 18. Green fees run $120 for two. All in, you're at $235.",
                textZh: "球杆每套40，球车打满18洞35。两人果岭费120。加一起235美元。",
                actionHint: "all in = 全部加起来, run = 费用是",
                frequency: "common",
              },
              {
                textEn:
                  "So rental clubs are $40 each set, golf cart is $35 for 18 holes, and greens fees are 60 per person. That puts you at $235 total.",
                textZh: "租球杆每套40美元，球车18洞35美元，果岭费每人60。总共235美元。",
                actionHint: "puts you at = 总计是",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a 9-hole option? We might not have time for the full 18.",
            textZh: "有9洞的选项吗？我们可能没时间打完18洞。",
            casualVersion: "Got a 9-hole option? Might not have time for all 18.",
            commonMistake: {
              wrong: "We maybe not have time",
              correct: "We might not have time",
              explanation: "中文'可能'在否定句中常用'might not'或'may not'，而不是'maybe not'。",
            },
            formalityVariants: {
              casual: "Is there a 9-hole option? Probably won't have time for all eighteen.",
              standard: "Is there a 9-hole option? We might not have time for the full 18.",
              formal: "Would there be an option for a 9-hole round? We may not have sufficient time to complete the full 18 holes.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Of course. The 9-hole rate is $35 per person, and the cart would be $20. That'd bring your total down to $170.",
            textZh: "当然有。9洞的费率是每人35美元，球车20美元。总共降到170美元。",
            casualVersion: "Yep. 9-hole's $35 a head, cart's $20. Total drops to $170.",
            formalityVariants: {
              casual: "Sure thing. Nine-hole rate's thirty-five bucks a person, cart's twenty. Drops the total to one-seventy.",
              standard: "Of course. The 9-hole rate is $35 per person, and the cart would be $20. That brings your total down to $170.",
              formal: "Certainly. The rate for a 9-hole round is $35 per person, and the golf cart would be an additional $20. This would reduce your total to $170.",
            },
            keyPhrases: [{ en: "9-hole rate", zh: "9洞费率" }],
            alternativeExpressions: [
              {
                textEn: "Sure, we do 9 holes. That's $35 each, cart's $20. Saves you a bit — total comes to $170.",
                textZh: "可以打9洞。每人35美元，球车20。省一点——总共170美元。",
                actionHint: "saves you a bit = 能省一点",
                frequency: "common",
              },
              {
                textEn:
                  "Yeah, no problem. 9 holes is 35 a person, and the cart drops to $20. So you'd be looking at $170 all together.",
                textZh: "没问题。9洞每人35，球车降到20。加一起170美元。",
                actionHint: "drops to = 降到, all together = 总共",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Let's do the 9-hole. Is there a dress code we should know about?",
            textZh: "那就打9洞吧。有什么着装要求我们需要知道的吗？",
            casualVersion: "Okay, let's do 9 holes. Any dress code we should know 'bout?",
            culturalNote: "在美国，许多高尔夫球场对穿着有严格要求，与国内一些球场相比可能更正式。",
            commonMistake: {
              wrong: "Any dress code need to know?",
              correct: "Any dress code we should be aware of?",
              explanation: "表达'需要知道的'时，更自然的说法是'we should be aware of'或'we need to know about'。",
            },
            formalityVariants: {
              casual: "Yeah, 9 holes works. Anything we gotta wear?",
              standard: "Let's do the 9-hole option then. Are there any dress code requirements we should be aware of?",
              formal: "We will proceed with the 9-hole option. Could you please inform us of any specific dress code requirements for the course?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "We ask for collared shirts and no jeans or flip-flops on the course. Golf shoes or sneakers are fine. The pro shop has shirts if you need one. See you at the first tee!",
            textZh:
              "我们要求穿有领衬衫，球场上不能穿牛仔裤或人字拖。高尔夫球鞋或运动鞋都行。如果需要衬衫，专卖店有卖。第一洞见！",
            casualVersion: "Collared shirts only, no jeans or flip-flops on the course. Golf shoes or sneakers are fine. Pro shop's got shirts if you need one. See ya at the first tee!",
            formalityVariants: {
              casual: "Gotta wear collared shirts; no jeans or flip-flops on the course. Golf shoes or sneakers are cool. Pro shop's got 'em if you need one. See ya at the first tee!",
              standard: "We ask for collared shirts and no jeans or flip-flops on the course. Golf shoes or sneakers are fine. The pro shop has shirts if you need one. See you at the first tee!",
              formal: "We kindly request that all golfers wear collared shirts, and refrain from wearing jeans or flip-flops while on the course. Golf shoes or athletic sneakers are permissible. Should you require a shirt, they are available for purchase in our pro shop. We look forward to seeing you at the first tee!",
            },
            keyPhrases: [
              { en: "collared shirts", zh: "有领衬衫" },
              { en: "dress code", zh: "着装要求" },
              { en: "pro shop", zh: "专卖店" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Just a collar on the shirt, no jeans or sandals out there. Sneakers work fine. If you need a polo, the shop's got some. See you out there!",
                textZh: "衬衫要有领，别穿牛仔裤或凉鞋。运动鞋就行。需要Polo衫的话店里有。球场见！",
                actionHint: "polo = 有领短袖衫, out there = 球场上",
                frequency: "common",
              },
              {
                textEn:
                  "Collared shirt is required, and no denim or flip-flops on the course. Golf shoes or tennis shoes are both fine. Pro shop has everything you need. Enjoy your round!",
                textZh: "要穿有领衬衫，球场不能穿牛仔布或人字拖。高尔夫鞋或网球鞋都行。专卖店什么都有。打球愉快！",
                actionHint: "round = 一轮高尔夫/打一场球",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 保龄球 ====================
  {
    id: "entertainment-bowling",
    category: "entertainment",
    titleZh: "保龄球",
    titleEn: "Going Bowling",
    description: "在保龄球馆租球道、选球鞋、打保龄球",
    otherRole: "保龄球馆工作人员",
    otherRoleIcon: "🎳",
    flows: [
      {
        id: "bowling-lane",
        titleZh: "租球道打保龄",
        titleEn: "Renting a Lane",
        description: "在保龄球馆租球道并开始玩",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, we'd like to get a lane for four people. How much is it?",
            textZh: "你好，我们四个人想租一条球道。多少钱？",
            casualVersion: "Hey, four of us wanna rent a lane. How much is it?",
            culturalNote: "美国服务业不强求使用“请问”，直接表达需求即可。",
            commonMistake: {
              wrong: "How much is it for rent a lane?",
              correct: "How much is it to rent a lane?",
              explanation: "中式英语常混淆to do和for doing的用法。",
            },
            formalityVariants: {
              casual: "Hey, four of us wanna get a lane. Price?",
              standard: "Hi, we have four people and would like to rent a lane. How much is it?",
              formal: "Good evening, we are a party of four and are interested in renting a bowling lane. Could you please inform us of the pricing options?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "It's $6 per person per game, or $25 per hour for the lane — unlimited games. Shoe rental is $4 each. What sounds better?",
            textZh: "每人每局6美元，或者按小时租球道25美元一小时——不限局数。鞋子租赁每双4美元。您觉得哪种好？",
            casualVersion: "It's six bucks a person a game, or twenty-five an hour for the lane, all you can bowl. Shoes are four bucks a pair. What'cha think?",
            formalityVariants: {
              casual: "Six bucks a game each, or twenty-five an hour for the whole lane, unlimited. Shoes are four. What's better?",
              standard: "It's $6 per person per game, or $25 an hour for the lane, which includes unlimited games. Shoe rental is $4 per pair. Which option do you prefer?",
              formal: "We offer two pricing structures: $6 per individual per game, or a lane rental at $25 per hour, which permits unlimited games. Shoe rental is an additional $4 per pair. Which option would you prefer to proceed with?",
            },
            keyPhrases: [
              { en: "per game", zh: "每局" },
              { en: "per hour", zh: "每小时" },
              { en: "shoe rental", zh: "鞋子租赁" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Six bucks a person per game, or 25 an hour for the whole lane — play as many games as you want. Shoes are 4 bucks. Which way works for you?",
                textZh: "每人每局6块，或者25块一小时整条球道——想打多少局打多少局。鞋子4块。你们选哪种？",
                actionHint: "which way works for you = 哪种方式适合你",
                frequency: "common",
              },
              {
                textEn:
                  "We've got two options: $6 per head per game, or $25 an hour for the lane with unlimited bowling. Plus $4 for shoe rental. What do you guys prefer?",
                textZh: "两种选择：每人每局6美元，或每小时25美元包球道不限次数。再加4美元鞋子。你们喜欢哪种？",
                actionHint: "per head = per person 每人",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "The hourly rate sounds good. We'll do two hours. What shoe sizes do you need?",
            textZh: "按小时的听起来不错。我们要两个小时。你们需要什么鞋码？",
            casualVersion: "Hourly sounds good. We'll do two hours. What shoe sizes do you need?",
            formalityVariants: {
              casual: "Hourly sounds good. We'll go for two hours. What sizes for shoes?",
              standard: "The hourly rate sounds good. We'll take two hours. What shoe sizes do you need?",
              formal: "The hourly rate appears suitable. We would like to reserve the lane for two hours. May I inquire about your required shoe sizes?",
            },
            culturalNote:
              "保龄球馆必须穿专用保龄球鞋，不能穿自己的鞋上球道。美国鞋码和中国不同，可以直接告诉工作人员你的中国码。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Just tell me everyone's sizes. And what weight balls would you like? We have everything from 6 pounds for kids to 16 pounds for the pros.",
            textZh: "告诉我每个人的鞋码就好。你们要多重的球？从6磅的儿童球到16磅的专业球都有。",
            casualVersion: "Just gimme everyone's shoe sizes. What ball weight you want? Got 6 lb kids' balls up to 16 lb pro balls.",
            commonMistake: {
              wrong: "What heavy bowling balls do you want?",
              correct: "What weight bowling balls would you like?",
              explanation: "问球的“重量”应使用weight，而不是直接用heavy。",
            },
            formalityVariants: {
              casual: "Just need shoe sizes. And for balls, what weight? Got 6-pounders for kids, all the way to 16-pound pro balls.",
              standard: "Please provide everyone's shoe sizes. Regarding bowling balls, what weight would you prefer? We offer a range from 6-pound children's balls to 16-pound professional balls.",
              formal: "Kindly provide the shoe sizes for each individual. Regarding the bowling balls, what preferred weight would you require? Our selection ranges from 6-pound junior balls to 16-pound professional-grade balls.",
            },
            keyPhrases: [
              { en: "weight", zh: "重量" },
              { en: "pounds", zh: "磅" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Give me everyone's shoe sizes and I'll get you sorted. Ball-wise, we've got 6-pounders for kids all the way up to 16 for the serious bowlers.",
                textZh: "告诉我每个人的鞋码我帮你们搞定。球的话，从6磅小孩用的到16磅专业级的都有。",
                actionHint: "get you sorted = 帮你搞定, ball-wise = 球方面",
                frequency: "common",
              },
              {
                textEn:
                  "Just shout out your sizes. And for balls — we go from 6 pounds all the way to 16. What's everyone comfortable with?",
                textZh: "直接报鞋码就好。球的话——从6磅到16磅都有。你们用多重的合适？",
                actionHint: "shout out = 大声说出来",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "We're all beginners. What weight do you recommend?",
            textZh: "我们都是初学者。你推荐多重的？",
            casualVersion: "We're all noobs. What weight d'you think?",
            commonMistake: {
              wrong: "How heavy do you recommend?",
              correct: "What weight do you recommend?",
              explanation: "同上，问物品重量用\"what weight\"，而不是\"how heavy\"。",
            },
            formalityVariants: {
              casual: "We're total beginners. What weight ball should we use?",
              standard: "We're all beginners. What weight do you recommend?",
              formal: "Given that we are all novices, what weight would you recommend for the bowling balls?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "For beginners, I'd say 10 to 12 pounds. The ball should feel comfortable — not too heavy that it hurts your wrist. You can always switch if it doesn't feel right.",
            textZh: "初学者的话我建议10到12磅。球应该拿着舒服——不要重到伤手腕。如果觉得不合适随时可以换。",
            casualVersion: "For beginners, I'd say 10 to 12 pounds. Should feel comfy, not too heavy it strains your wrist. Just switch it if it doesn't feel right.",
            formalityVariants: {
              casual: "Beginners, go for 10-12 pounds. Keep it comfy, no wrist strain. Can always swap if it's off.",
              standard: "For beginners, I recommend 10 to 12 pounds. The ball should feel comfortable – not so heavy that it strains your wrist. You can switch if it doesn't feel right.",
              formal: "For those new to bowling, I would suggest a ball weight of 10 to 12 pounds. It is crucial that the ball feels comfortable and does not exert undue strain on your wrist. Should the selected weight not feel appropriate, a replacement can be requested at any time.",
            },
            keyPhrases: [
              { en: "comfortable", zh: "舒服的" },
              { en: "wrist", zh: "手腕" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Start with a 10 or 12 — you want it to feel natural in your hand, not straining your wrist. If it's too heavy or too light, just swap it out.",
                textZh: "从10或12磅开始——拿在手上要自然，不要让手腕费劲。太重或太轻随时换。",
                actionHint: "swap it out = 换掉",
                frequency: "common",
              },
              {
                textEn:
                  "I'd go with a 10 or 12 pounder to start. You don't want anything that's gonna wreck your wrist. You can always try a different one.",
                textZh: "建议先用10或12磅的。别选太重把手腕弄伤。随时可以试别的。",
                actionHint: "gonna wreck = 会弄伤, pounder = 磅重的球",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Can we order food and drinks to our lane?",
            textZh: "我们可以在球道上点吃的喝的吗？",
            casualVersion: "Can we get food 'n drinks at our lane?",
            commonMistake: {
              wrong: "Can we order food and drinks at our lane?",
              correct: "Can we order food and drinks to our lane?",
              explanation: "表示送到某个位置，介词用to更自然。",
            },
            formalityVariants: {
              casual: "Can we get food/drinks at the lane?",
              standard: "Can we order food and drinks to our lane?",
              formal: "Is it permissible to order food and beverages for delivery directly to our assigned lane?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Absolutely! Here's the menu. Just flag down a server or use the tablet at your lane to order. Lane 7 is all yours — have a blast!",
            textZh: "当然可以！这是菜单。招呼一下服务员或者用球道上的平板电脑点餐。7号球道是你们的——玩得开心！",
            casualVersion: "Totally! Here's the menu. Just wave down a server or use your tablet there. Lane 7's yours – have fun!",
            formalityVariants: {
              casual: "Yep! Menu's right here. Grab a server or use the tablet. Lane 7, have a blast!",
              standard: "Absolutely! Here's a menu. Just flag down a server or use the tablet at your lane to order. Lane 7 is yours – have fun!",
              formal: "Certainly! I have a menu for you here. You may signal a server or utilize the tablet provided at your lane to place an order. Your designated lane is number 7. Please enjoy your experience!",
            },
            keyPhrases: [
              { en: "flag down a server", zh: "招呼服务员" },
              { en: "have a blast", zh: "玩得开心" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For sure! Here's the menu — you can wave over a server or order from the screen at your lane. You're on lane 7. Have fun!",
                textZh: "当然！菜单给你——可以招手叫服务员或者用球道上的屏幕点。你们在7号球道。玩开心！",
                actionHint: "wave over = 招手叫过来",
                frequency: "common",
              },
              {
                textEn:
                  "Yeah, totally! Check out the menu — just order at the tablet on your lane or grab a server. Lane 7's yours — go have a great time!",
                textZh: "当然可以！看看菜单——用球道上的平板点或者叫服务员。7号球道是你们的——好好玩！",
                actionHint: "grab a server = 找个服务员",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 卡拉OK ====================
  {
    id: "entertainment-karaoke-party",
    category: "entertainment",
    titleZh: "卡拉OK",
    titleEn: "Karaoke Night",
    description: "在国外KTV唱歌、点歌、享受派对氛围",
    otherRole: "KTV工作人员",
    otherRoleIcon: "🎤",
    flows: [
      {
        id: "karaoke-room",
        titleZh: "包厢唱歌",
        titleEn: "Private Karaoke Room",
        description: "在KTV租包厢唱歌并点饮品",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, we'd like a private room for six people. What are your rates?",
            textZh: "你好，我们六个人想要一个包厢。价格怎么算？",
            casualVersion: "Hey, six of us wanna room. How much is it?",
            commonMistake: {
              wrong: "How to calculate the price?",
              correct: "How much is it?",
              explanation: "直接问价格用 How much is it? 或 What's the price? 更自然。",
            },
            formalityVariants: {
              casual: "Hey, we got six people. Wanna get a room. What's the price?",
              standard: "Hi, we have six people and would like a private room. What's the price?",
              formal: "Good evening, we are a party of six and are interested in reserving a private room. Could you please provide information regarding your pricing structure?",
            },
            culturalNote: "在美国，卡拉OK有包厢式 private room 和开放式 open mic 两种。亚洲人通常更习惯包厢式。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "For six people, our medium room is $40 per hour. That includes the sound system and two microphones. We have a two-hour minimum on weekends.",
            textZh: "六个人的话，中号包厢每小时40美元。包括音响系统和两个麦克风。周末最少两小时起。",
            casualVersion: "For six, medium room's 40 bucks an hour. Comes with sound system, two mics. Weekends, gotta do at least two hours.",
            formalityVariants: {
              casual: "Medium room for six is $40/hr. Sound system, two mics included. Weekends, minimum two hours.",
              standard: "For six people, our medium room is $40 per hour. That includes the sound system and two microphones. We have a two-hour minimum on weekends.",
              formal: "Regarding a party of six, our medium-sized private room is available at a rate of $40 per hour. This rate encompasses the use of our sound system and two microphones. Please be advised that there is a two-hour minimum reservation requirement on weekends.",
            },
            keyPhrases: [
              { en: "private room", zh: "包厢" },
              { en: "two-hour minimum", zh: "最少两小时" },
              { en: "sound system", zh: "音响系统" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Six people? The mid-size room is 40 an hour — comes with speakers and two mics. Just so you know, there's a two-hour minimum on the weekends.",
                textZh: "六个人？中号房间一小时40——带音响和两个麦。周末最少两小时起订。",
                actionHint: "mics = microphones 麦克风",
                frequency: "common",
              },
              {
                textEn:
                  "Our medium room fits six perfectly — $40/hour, sound system and two mics included. Weekend minimum is two hours though.",
                textZh: "中号房正好六个人——每小时40美元，包含音响和两个麦。不过周末最少要两小时。",
                actionHint: "fits...perfectly = 正好适合",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "We'll take two hours. Do you have songs in Chinese and English?",
            textZh: "我们要两个小时。有中文和英文歌吗？",
            casualVersion: "We'll do two hours. Got any Chinese and English songs?",
            commonMistake: {
              wrong: "Have you Chinese and English songs?",
              correct: "Do you have Chinese and English songs?",
              explanation: "询问有没有什么东西，通常用 'Do you have...?' 而不是 'Have you...?'",
            },
            formalityVariants: {
              casual: "Two hours for us. Got Chinese and English songs?",
              standard: "We'll take it for two hours. Do you have Chinese and English songs?",
              formal: "We would like to reserve the room for two hours. May I inquire if your song selection includes Chinese and English titles?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Yes, our system has over 50,000 songs in multiple languages — English, Chinese, Korean, Japanese, Spanish. You can search by title, artist, or language on the tablet.",
            textZh:
              "有的，我们的系统有超过5万首多语言歌曲——英文、中文、韩文、日文、西班牙文。您可以在平板上按歌名、歌手或语言搜索。",
            casualVersion: "Yeah, our system's got over 50k songs, tons of languages — English, Chinese, Korean, Japanese, Spanish. Just search by title, artist, or language on the tablet.",
            formalityVariants: {
              casual: "Yep, 50k+ songs, lots of languages. Search on the tablet: title, artist, or language.",
              standard: "Yes, our system has over 50,000 songs in multiple languages — English, Chinese, Korean, Japanese, Spanish. You can search by title, artist, or language on the tablet.",
              formal: "Yes, indeed. Our comprehensive system features an extensive catalog of over 50,000 songs available in various languages, including English, Chinese, Korean, Japanese, and Spanish. You may conveniently search for songs by title, artist, or language directly on the provided tablet interface.",
            },
            keyPhrases: [
              { en: "search by title", zh: "按歌名搜索" },
              { en: "artist", zh: "歌手" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Oh yeah, we've got like 50,000 songs — English, Chinese, Korean, Japanese, Spanish, you name it. Just look it up on the tablet by song name, artist, or language.",
                textZh:
                  "有啊，大概5万首歌——英文、中文、韩文、日文、西班牙文，什么都有。在平板上按歌名、歌手或语言搜就行。",
                actionHint: "look it up = 查找/搜索",
                frequency: "common",
              },
              {
                textEn:
                  "Totally! The catalog's huge — over 50K songs in a bunch of languages. The tablet in your room lets you search by title, artist, whatever.",
                textZh: "当然！歌库超大——5万多首歌好多种语言。房间里的平板可以按歌名、歌手什么的搜。",
                actionHint: "50K = 50,000, catalog = 歌库",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Great! Can we order drinks and snacks to the room?",
            textZh: "太好了！我们可以在房间里点饮料和零食吗？",
            casualVersion: "Awesome! Can we get drinks and snacks delivered to the room?",
            commonMistake: {
              wrong: "Can we order drinks and snacks in the room?",
              correct: "Can we order drinks and snacks to the room?",
              explanation: "'order to the room' 或 'delivered to the room' 更自然。",
            },
            formalityVariants: {
              casual: "Sweet! Can we get drinks and snacks sent to our room?",
              standard: "Great! Can we order drinks and snacks to the room?",
              formal: "Excellent! May we request food and beverage service directly to our private room?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Of course. Here's our menu. We have a drink package — unlimited soft drinks and juice for $8 per person. Alcohol is ordered separately.",
            textZh: "当然。这是我们的菜单。我们有饮料套餐——无限量软饮和果汁每人8美元。酒精饮品另外点。",
            casualVersion: "Totally. Menu's here. Got drink packages — unlimited sodas and juice, $8 a head. Alcohol's extra.",
            formalityVariants: {
              casual: "Sure. Menu right here. Drink packages are $8/person for unlimited soft drinks/juices. Alcohol costs extra.",
              standard: "Of course. Here's our menu. We have drink packages — unlimited soft drinks and juices for $8 per person. Alcoholic beverages are extra.",
              formal: "Certainly. Please find our menu attached. We offer comprehensive drink packages, including unlimited soft drinks and juices at $8 per person. Alcoholic beverages are available for an additional charge.",
            },
            keyPhrases: [
              { en: "drink package", zh: "饮料套餐" },
              { en: "unlimited", zh: "无限量" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep! Here's the menu. We've got an all-you-can-drink deal for sodas and juice — 8 bucks a person. Booze is separate.",
                textZh: "可以！菜单在这。软饮和果汁有无限畅饮——每人8块。酒类单点。",
                actionHint: "all-you-can-drink = 无限畅饮, booze = 酒（口语）",
                frequency: "common",
              },
              {
                textEn:
                  "For sure! Check out the menu — there's an unlimited soft drink and juice package for $8 each. Cocktails and beer are à la carte.",
                textZh: "当然！看看菜单——有无限量软饮和果汁套餐每人8美元。鸡尾酒和啤酒单点。",
                actionHint: "à la carte = 单点/按单品点",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "We'll take the drink package. Can we extend our time if we're having fun?",
            textZh: "我们要饮料套餐。如果玩得高兴可以延长时间吗？",
            casualVersion: "We'll get the drink package. Can we extend our time if we wanna keep going?",
            commonMistake: {
              wrong: "Can we extend the time if we play happy?",
              correct: "Can we extend our time if we're having fun?",
              explanation: "'玩得高兴' 对应的英文是 'having fun' 或 'enjoying ourselves'。",
            },
            formalityVariants: {
              casual: "We'll do the drink package. Can we extend if we're still having a good time?",
              standard: "We'll take the drink package. Can we extend our time if we're having fun?",
              formal: "We would like to opt for the drink package. Is it possible to extend our reservation if we wish to continue our session?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Absolutely, just let us know before your time is up. If the room isn't booked after you, you can extend at the same rate. Room 5 is ready — sing your hearts out!",
            textZh:
              "当然可以，时间快到的时候跟我们说一声就好。如果你们之后这个房间没有预约，可以按同样价格延长。5号房准备好了——尽情唱吧！",
            casualVersion: "For sure, just tell us before your time's up. If nobody's got the room after you, you can just extend at the same price. Room #5's ready — have a blast!",
            formalityVariants: {
              casual: "Yeah, just tell us before your time's over. If no one's booked it, you can extend for the same price. Room 5's good — go have fun!",
              standard: "Absolutely, just let us know before your time is up. If the room isn't booked after you, you can extend at the same rate. Room #5 is ready — have fun!",
              formal: "Certainly, please inform us prior to the conclusion of your allotted time. Should the room remain unreserved subsequent to your booking, you are welcome to extend your session at the same hourly rate. Room #5 is now prepared for your use — we hope you thoroughly enjoy your experience!",
            },
            keyPhrases: [
              { en: "extend", zh: "延长" },
              { en: "sing your hearts out", zh: "尽情唱" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure, just give us a heads-up before your time runs out. If nobody's got the room after you, you can keep going at the same price. Room 5 — go have a blast!",
                textZh: "当然，快到时间跟我们说一声。如果后面没人订，可以按同价续。5号房——玩得开心！",
                actionHint: "give us a heads-up = 提前告诉我们, keep going = 继续",
                frequency: "common",
              },
              {
                textEn:
                  "Totally! Just flag us down when your time's almost up. If it's open after you, same rate to stay longer. Room 5 is all set — go belt out some tunes!",
                textZh: "当然可以！快到时间叫我们。如果后面没人，同价续时间。5号房准备好了——去飙歌吧！",
                actionHint: "belt out some tunes = 放声唱歌",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 密室逃脱 ====================
  {
    id: "entertainment-escape-room",
    category: "entertainment",
    titleZh: "密室逃脱",
    titleEn: "Escape Room",
    description: "参加密室逃脱游戏、听取规则、与队友协作",
    otherRole: "密室逃脱工作人员",
    otherRoleIcon: "🔐",
    flows: [
      {
        id: "escape-room-intro",
        titleZh: "密室逃脱体验",
        titleEn: "Escape Room Experience",
        description: "了解规则并开始密室逃脱游戏",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, we have a reservation for four at 3 PM. The name is Li.",
            textZh: "你好，我们预约了3点四个人的。名字是李。",
            casualVersion: "Hey, we got a 3 PM res for four under Li.",
            commonMistake: {
              wrong: "We have reservation for four people.",
              correct: "We have a reservation for four.",
              explanation: "预约用 \"a reservation\"，\"four people\" 常省略为 \"four\"。",
            },
            formalityVariants: {
              casual: "Hey, got a 3 PM res for four, under Li.",
              standard: "Hi, we have a reservation for four at 3 PM. The name is Li.",
              formal: "Good afternoon, we have a reservation for four individuals at 3:00 PM under the name of Li.",
            },
          },
          {
            speaker: "them",
            role: "游戏管理员",
            textEn:
              "Welcome! You're booked for our most popular room — the Detective's Office. Before we start, let me go over the rules.",
            textZh: "欢迎！你们预约的是我们最受欢迎的房间——侦探办公室。开始之前让我讲一下规则。",
            casualVersion: "Welcome! You guys got our most popular room, 'The Detective's Office.' Lemme just run through the rules real quick before we kick off.",
            formalityVariants: {
              casual: "Welcome! You got our popular room, 'The Detective's Office.' Lemme just go over the rules real quick.",
              standard: "Welcome! You've booked our most popular room, 'The Detective's Office.' Let me go over the rules before we start.",
              formal: "Welcome! You have reserved our most sought-after experience, 'The Detective's Office.' I shall now review the guidelines prior to your commencement.",
            },
            keyPhrases: [
              { en: "reservation", zh: "预约" },
              { en: "go over the rules", zh: "讲一下规则" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Hey, welcome! So you guys are doing the Detective's Office — that's our most popular one. Let me quickly run through the rules before we get going.",
                textZh: "嘿，欢迎！你们玩侦探办公室——我们最受欢迎的。开始之前让我快速过一下规则。",
                actionHint: "run through = go over 过一遍",
                frequency: "common",
              },
              {
                textEn:
                  "Welcome in! You've got the Detective's Office — great choice, it's our number one room. Real quick, let me cover the rules.",
                textZh: "欢迎！你们选了侦探办公室——很好的选择，我们排名第一的房间。很快讲一下规则。",
                actionHint: "real quick = 很快地",
                frequency: "common",
              },
            ],
          },
          { speaker: "you", textEn: "Sure, go ahead. How long do we have?", textZh: "好的，请说。我们有多长时间？",
            casualVersion: "Yeah, go for it. How much time we got?",
            commonMistake: {
              wrong: "Okay, please say. How long time do we have?",
              correct: "Sure, go ahead. How long do we have?",
              explanation: "“请说” 直接用 \"go ahead\" 即可。\"How long\" 指时间长度。",
            },
            formalityVariants: {
              casual: "Yeah, go for it. How much time we got?",
              standard: "Sure, go ahead. How long do we have?",
              formal: "Certainly, please proceed. What is the allocated duration for our session?",
            },
          },
          {
            speaker: "them",
            role: "游戏管理员",
            textEn:
              "You have 60 minutes to solve all the puzzles and escape the room. You can ask for up to three hints using the walkie-talkie inside. No phones allowed, and please don't force open any locks.",
            textZh:
              "你们有60分钟解开所有谜题逃出房间。可以用房间里的对讲机请求最多三次提示。不能用手机，请不要强行打开任何锁。",
            casualVersion: "You get 60 mins to solve everything and get out. Can ask for up to three hints with the walkie-talkie in there. No phones, and don't try to force any locks open, alright?",
            commonMistake: {
              wrong: "You have 60 minutes to finish puzzles.",
              correct: "You have 60 minutes to solve all the puzzles.",
              explanation: "“解开谜题” 更常用 \"solve puzzles\"。",
            },
            formalityVariants: {
              casual: "You get 60 mins to solve everything and get out. Can ask for up to three hints via walkie-talkie. No phones, no forcing locks.",
              standard: "You have 60 minutes to solve all the puzzles and escape the room. You can ask for up to three hints using the walkie-talkie inside. No phones allowed, and please don't force open any locks.",
              formal: "You are allotted 60 minutes to successfully solve all given puzzles and exit the room. A maximum of three hints may be requested via the provided walkie-talkie. Mobile phones are prohibited, and please refrain from forcibly tampering with any locking mechanisms.",
            },
            keyPhrases: [
              { en: "puzzles", zh: "谜题" },
              { en: "hints", zh: "提示" },
              { en: "walkie-talkie", zh: "对讲机" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You've got one hour to crack all the puzzles and get out. There's a walkie-talkie inside — you can use it for up to three clues. Phones stay outside, and don't try to force anything open.",
                textZh:
                  "你们有一小时解开所有谜题逃出去。里面有对讲机——最多可以要三次线索。手机留外面，不要强行打开任何东西。",
                actionHint: "crack = 解开/破解",
                frequency: "common",
              },
              {
                textEn:
                  "Sixty minutes on the clock to solve everything and escape. If you get stuck, hit us up on the walkie-talkie — three hints max. No phones, and please don't brute-force the locks.",
                textZh: "60分钟解开所有东西逃出来。卡住了用对讲机找我们——最多三次提示。不能用手机，别硬来开锁。",
                actionHint: "hit us up = 联系我们, brute-force = 硬来/暴力打开",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What's the success rate for this room?",
            textZh: "这个房间的通关率是多少？",
            casualVersion: "So, what's the escape rate for this one?",
            commonMistake: {
              wrong: "How many people can pass this room?",
              correct: "What's the success rate for this room?",
              explanation: "“通关率” 对应的英文是 \"success rate\" 或 \"escape rate\"。",
            },
            formalityVariants: {
              casual: "So, what's the escape rate for this one?",
              standard: "What's the success rate for this room?",
              formal: "Could you please inform me of the success rate for this particular room?",
            },
            culturalNote: "密室逃脱在欧美非常流行，通关率通常在30%-40%之间。不要有压力，享受过程最重要。",
          },
          {
            speaker: "them",
            role: "游戏管理员",
            textEn:
              "About 35% of groups escape in time. The record is 42 minutes. My tip: communicate with your team and don't overthink the clues — sometimes the answer is simpler than you think.",
            textZh:
              "大约35%的队伍能在时间内逃出。纪录是42分钟。我的建议：跟队友多沟通，不要过度思考线索——有时候答案比你想的简单。",
            casualVersion: "Roughly 35% of groups make it out on time. Record's 42 minutes. My advice: talk to your team, and don't overthink stuff – sometimes it's simpler than ya think.",
            formalityVariants: {
              casual: "Around 35% make it out. Record's 42 mins. My tip: talk to your team, don't overthink – sometimes it's simpler.",
              standard: "About 35% of groups escape in time. The record is 42 minutes. My tip: communicate with your team and don't overthink the clues – sometimes the answer is simpler than you think.",
              formal: "Approximately 35% of groups successfully complete the challenge within the allotted time. The current record for completion stands at 42 minutes. My recommendation is to foster clear communication within your team and avoid excessive rumination on the clues, as the solution can occasionally be more straightforward than anticipated.",
            },
            keyPhrases: [
              { en: "success rate", zh: "通关率" },
              { en: "clues", zh: "线索" },
              { en: "overthink", zh: "过度思考" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Roughly a third of teams make it out. Fastest time is 42 minutes. Pro tip: talk to each other and keep it simple — people tend to overcomplicate things.",
                textZh: "大约三分之一的队伍能出来。最快纪录42分钟。建议：多交流别想太复杂——大家容易把事情搞复杂。",
                actionHint: "make it out = 成功逃出, overcomplicate = 搞复杂",
                frequency: "common",
              },
              {
                textEn:
                  "About 1 in 3 groups get out in time — the record's 42 minutes. Best advice? Keep talking to your team, and don't read too much into the clues.",
                textZh: "大概三分之一的队伍能按时出来——纪录42分钟。最好的建议？跟队友保持沟通，别对线索想太多。",
                actionHint: "read too much into = 过度解读",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Is there anything else we should know before going in?",
            textZh: "明白了。进去之前还有什么我们需要知道的吗？",
            casualVersion: "Alright, anything else we should know before we head in?",
            commonMistake: {
              wrong: "Understood. Is there anything else we need know before enter?",
              correct: "Got it. Is there anything else we should know before going in?",
              explanation: "“明白了” 用 \"Got it\" 很自然。\"need to know\" 或 \"should know\"，\"before going in\" 更完整。",
            },
            formalityVariants: {
              casual: "Alright, anything else before we go in?",
              standard: "Got it. Is there anything else we should know before going in?",
              formal: "Understood. Are there any further instructions or pertinent details we should be aware of prior to our entry?",
            },
          },
          {
            speaker: "them",
            role: "游戏管理员",
            textEn:
              "Just have fun! Everything you need is in the room. I'll be watching on the camera, so if you need a hint, just wave at the camera and use the walkie-talkie. Ready? Let's go!",
            textZh:
              "尽情玩就好！你们需要的一切都在房间里。我会通过摄像头观察，如果需要提示就对着摄像头挥手然后用对讲机。准备好了吗？走吧！",
            casualVersion: "Just have fun! Everything you need's in there. I'll be watching on camera, so if you need a hint, just wave at it then use the walkie-talkie. Ready? Let's do this!",
            formalityVariants: {
              casual: "Just have fun! Everything you need's in there. I'll be watching, so wave at the camera for a hint then use the walkie-talkie. Ready? Let's do this!",
              standard: "Just have fun! Everything you need is in the room. I'll be watching via camera, so if you need a hint, wave at the camera and then use the walkie-talkie. Ready? Let's go!",
              formal: "Most importantly, enjoy yourselves! All necessary items and information are contained within the room. I will be observing your progress remotely via camera; should you require assistance, please wave at the camera and subsequently utilize the provided walkie-talkie. Are you prepared to begin? Let us proceed!",
            },
            keyPhrases: [
              { en: "wave at the camera", zh: "对着摄像头挥手" },
              { en: "have fun", zh: "尽情玩" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Main thing is to enjoy it! Everything you need is already in there. I'm on the cameras, so wave if you want a hint and grab the walkie. Ready to rock?",
                textZh: "主要是享受！你们需要的都在里面。我盯着监控呢，想要提示就挥手然后拿对讲机。准备好了吗？",
                actionHint: "ready to rock = 准备好了吗（兴奋的语气）",
                frequency: "common",
              },
              {
                textEn:
                  "Just go in and have a good time! All the clues are inside. I'll be keeping an eye on you guys through the camera. Need help? Wave and use the walkie-talkie. Let's do this!",
                textZh: "进去玩得开心就好！所有线索都在里面。我通过摄像头看着你们。需要帮忙？挥手用对讲机。开始吧！",
                actionHint: "keeping an eye on = 盯着/关注着, let's do this = 开始吧",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 品酒 ====================
  {
    id: "entertainment-wine-tasting",
    category: "entertainment",
    titleZh: "品酒",
    titleEn: "Wine Tasting",
    description: "在酒庄或品酒室参加品酒体验",
    otherRole: "品酒师",
    otherRoleIcon: "🍷",
    flows: [
      {
        id: "winery-tasting",
        titleZh: "酒庄品酒",
        titleEn: "Winery Tasting",
        description: "在酒庄参加品酒体验并了解葡萄酒知识",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hello, we'd like to do a wine tasting. Do we need a reservation?",
            textZh: "你好，我们想品酒。需要预约吗？",
            casualVersion: "Hey, we wanna do a tasting. Need a reservation?",
            commonMistake: {
              wrong: "We want wine tasting. Need reservation?",
              correct: "We'd like to do a wine tasting. Do we need a reservation?",
              explanation: "中文常省略主语，但英文中通常需要主语。直接说“want”不够礼貌。",
            },
            formalityVariants: {
              casual: "Hi, wanna do a tasting. Reservations needed?",
              standard: "Hello, we'd like to do a wine tasting. Do we need a reservation?",
              formal: "Good afternoon, we are interested in a wine tasting. Do you require a reservation?",
            },
            culturalNote: "在纳帕谷等热门酒庄区，品酒通常需要提前预约。一般品酒费 tasting fee 在15-50美元之间。",
          },
          {
            speaker: "them",
            role: "品酒师",
            textEn:
              "You're in luck — we have space right now. Our standard tasting is $25 per person and includes five wines. Would you prefer to sit inside or on the patio?",
            textZh: "你们运气好——现在正好有位置。标准品酒每人25美元，包含五款酒。您想坐室内还是露台？",
            casualVersion: "You're in luck! Got space right now. Standard tasting's $25 a person, comes with five wines. Wanna sit inside or on the patio?",
            formalityVariants: {
              casual: "Lucky you! We've got openings. Standard tasting's twenty-five bucks, five wines. Inside or patio?",
              standard: "You're in luck – we currently have availability. The standard tasting is $25 per person, which includes five wines. Would you prefer to sit inside or on the patio?",
              formal: "You're most fortunate, we currently have immediate availability. The standard tasting experience is $25 per individual, comprising a selection of five wines. May I inquire if you prefer seating indoors or on our outdoor patio?",
            },
            keyPhrases: [
              { en: "wine tasting", zh: "品酒" },
              { en: "tasting fee", zh: "品酒费" },
              { en: "patio", zh: "露台" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Good timing — we've got room. The standard tasting runs $25 each, and you get to try five wines. Indoor or outdoor seating?",
                textZh: "来得正好——有位置。标准品酒每人25美元，可以试五款酒。坐室内还是室外？",
                actionHint: "good timing = 来得正好, runs = 费用是",
                frequency: "common",
              },
              {
                textEn:
                  "Lucky you, we just had a table open up! It's $25 per person for the standard flight — five wines. Wanna sit inside or out on the terrace?",
                textZh: "你们运气好，刚好空出一桌！标准品酒套餐每人25美元——五款酒。想坐室内还是露台？",
                actionHint: "flight = 品酒套餐（酒类术语）, terrace = patio 露台",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "The patio sounds lovely. I'm not very experienced with wine — is that okay?",
            textZh: "露台听起来很好。我对葡萄酒不太了解——没关系吧？",
            casualVersion: "Patio sounds awesome. I don't really know much 'bout wine, that okay?",
            commonMistake: {
              wrong: "I don't know wine much, it's okay?",
              correct: "I don't know much about wine – is that okay?",
              explanation: "about wine 更自然。中文“没关系吧”不能直译成it's okay，要用is that okay。",
            },
            formalityVariants: {
              casual: "Patio sounds great. Not a wine expert, is that cool?",
              standard: "The patio sounds lovely. I don't know much about wine – is that okay?",
              formal: "The patio sounds delightful. I must admit I have limited knowledge of wines; will that be an issue?",
            },
          },
          {
            speaker: "them",
            role: "品酒师",
            textEn:
              "Absolutely! That's what I'm here for. We'll start with our lightest white and work our way up to a bold red. I'll walk you through each one — the aroma, the flavors, what food pairs well.",
            textZh:
              "完全没问题！这就是我在这里的意义。我们会从最清淡的白葡萄酒开始，逐步过渡到浓郁的红葡萄酒。我会带您了解每一款——香气、风味、搭配什么食物好。",
            casualVersion: "Totally! That's literally why I'm here. We'll start with the lightest whites, then move to the richer reds. I'll walk you through each one—what to smell, taste, what food pairs well.",
            formalityVariants: {
              casual: "For sure! That's my job. We'll go from light whites to heavy reds. I'll tell you all about 'em—smells, tastes, food pairings.",
              standard: "Absolutely! That's exactly why I'm here. We'll begin with the lightest white wines and gradually transition to the richer reds. I'll guide you through each one—discussing the aroma, flavor profiles, and ideal food pairings.",
              formal: "Absolutely, that is precisely my role here. We will commence with the most delicate white wines and progressively advance to our more robust red selections. I shall provide comprehensive guidance for each, elucidating their aromatic notes, flavor characteristics, and appropriate culinary accompaniments.",
            },
            keyPhrases: [
              { en: "aroma", zh: "香气" },
              { en: "bold red", zh: "浓郁的红葡萄酒" },
              { en: "pairs well", zh: "搭配得好" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Of course! That's why I'm here. We'll go from light to full-bodied — starting with a crisp white and ending with a big red. I'll tell you what to look for in each one.",
                textZh:
                  "当然！这就是我的工作。从清淡到醇厚——先喝爽口的白葡萄酒，最后是浓重的红酒。我会告诉你每款要注意什么。",
                actionHint: "full-bodied = 醇厚的, crisp = 爽口的",
                frequency: "common",
              },
              {
                textEn:
                  "No worries at all! We'll ease you in with a light white and build up to the heavier reds. I'll break down the nose, the taste, and what to eat with each one.",
                textZh: "完全没关系！先从清淡的白酒入门，逐渐到重的红酒。我会讲解每款的香味、口感和搭配。",
                actionHint: "ease you in = 让你慢慢进入, the nose = 酒的香气（品酒术语）",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "This first one is really refreshing. What grape is this?",
            textZh: "第一款真的很清爽。这是什么葡萄酿的？",
            casualVersion: "This first one's super refreshing. What's the grape?",
            commonMistake: {
              wrong: "What's this grape?",
              correct: "What grape is this?",
              explanation: "更自然的语序是 What + noun + is this/that。",
            },
            formalityVariants: {
              casual: "First one's really fresh. What grape is it?",
              standard: "This first one is really refreshing. What grape is this?",
              formal: "This initial offering is quite refreshing. Could you please inform me of the grape varietal?",
            },
          },
          {
            speaker: "them",
            role: "品酒师",
            textEn:
              "That's our Sauvignon Blanc. Notice the citrus and green apple notes? It's perfect with seafood or a light salad. If you like this style, I'll recommend our Pinot Grigio next.",
            textZh:
              "这是我们的长相思白葡萄酒。注意到柑橘和青苹果的味道了吗？搭配海鲜或清淡沙拉非常合适。如果您喜欢这种风格，接下来我推荐我们的灰皮诺。",
            casualVersion: "That's our Sauvignon Blanc. Notice the citrus and green apple notes? It's awesome with seafood or light salads. If you're into this, I'd suggest our Pinot Grigio next.",
            formalityVariants: {
              casual: "That's our Sauv Blanc. Catch the citrus, green apple? Great with seafood/light salads. Like this? Try our Pinot Grigio next.",
              standard: "That's our Sauvignon Blanc. Do you notice the citrus and green apple notes? It pairs wonderfully with seafood or light salads. If you enjoy this style, I'd recommend our Pinot Grigio next.",
              formal: "That particular selection is our Sauvignon Blanc. Do you discern the prominent citrus and green apple characteristics? It harmonizes exceptionally well with seafood or delicate salads. Should you find this style appealing, I would be pleased to recommend our Pinot Grigio for your next tasting.",
            },
            keyPhrases: [
              { en: "Sauvignon Blanc", zh: "长相思" },
              { en: "citrus notes", zh: "柑橘味" },
              { en: "Pinot Grigio", zh: "灰皮诺" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That one's our Sauv Blanc. Can you taste the citrus and green apple? Goes great with fish or a salad. If this is your jam, you'll love the Pinot Grigio up next.",
                textZh:
                  "那款是我们的长相思。尝到柑橘和青苹果味了吗？配鱼或沙拉很棒。如果喜欢这个风格，接下来的灰皮诺你会爱的。",
                actionHint: "Sauv Blanc = Sauvignon Blanc 的口语简称, your jam = 你喜欢的",
                frequency: "common",
              },
              {
                textEn:
                  "You're drinking our Sauvignon Blanc. Get those lemony, green apple vibes? It's killer with seafood. I think you'd dig the Pinot Grigio too — wanna try it next?",
                textZh:
                  "你喝的是我们的长相思。感受到柠檬和青苹果的味道了吗？配海鲜绝了。我觉得你也会喜欢灰皮诺——接下来试试？",
                actionHint: "vibes = 感觉/味道, killer = 非常棒, dig = 喜欢",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Can we buy a bottle to take home if we find one we love?",
            textZh: "如果喝到喜欢的，可以买一瓶带回去吗？",
            casualVersion: "Can we grab a bottle to take home if we really like one?",
            commonMistake: {
              wrong: "Can we buy a bottle to take away?",
              correct: "Can we buy a bottle to take home?",
              explanation: "“take away”多指餐厅外卖，带回家用“take home”更地道。",
            },
            formalityVariants: {
              casual: "If we love one, can we buy a bottle to go?",
              standard: "Can we buy a bottle to take home if we find one we love?",
              formal: "Should we discover a particular wine we enjoy, would it be possible to purchase a bottle to take with us?",
            },
          },
          {
            speaker: "them",
            role: "品酒师",
            textEn:
              "Of course! And if you purchase two or more bottles, the tasting fee is waived. We can also ship to most states if you don't want to carry them. Let's continue to the next wine!",
            textZh: "当然！如果您买两瓶或以上，品酒费就免了。如果不想带着，我们可以邮寄到大部分州。我们继续品下一款！",
            casualVersion: "Totally! Buy two or more bottles, and the tasting fee's on us. We can also ship to most states if you don't wanna lug 'em. Let's try the next one!",
            culturalNote: "美国酒庄常见促销策略，鼓励购买。邮寄服务也很普遍。",
            formalityVariants: {
              casual: "Yeah! Two bottles or more, tasting's free. We can ship too, if you don't wanna carry 'em. Next!",
              standard: "Of course! And if you purchase two or more bottles, the tasting fee is waived. We can also ship to most states if you don't wish to carry them. Let's continue with the next selection!",
              formal: "Certainly! Furthermore, should you decide to purchase two or more bottles, your tasting fee will be complimentary. We are also able to facilitate shipping to the majority of states, should you prefer not to transport them yourselves. Shall we proceed to the next tasting?",
            },
            keyPhrases: [
              { en: "waived", zh: "免除" },
              { en: "ship", zh: "邮寄" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Absolutely! And here's the deal — buy two bottles or more and the tasting is on the house. We can ship to most states too. Ready for the next one?",
                textZh: "当然！而且买两瓶以上品酒就免费了。也可以邮寄到大部分州。准备好尝下一款了吗？",
                actionHint: "on the house = 免费的/店家请客",
                frequency: "common",
              },
              {
                textEn:
                  "For sure! And FYI, if you end up buying two or more bottles, we comp the tasting fee. We do shipping too if you don't wanna lug bottles around. On to the next!",
                textZh: "当然可以！顺便说一下，买两瓶以上我们免品酒费。也提供邮寄，不用自己拎瓶子。下一款！",
                actionHint: "comp = 免费赠送, lug = 费力地搬运",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 赌场 ====================
  {
    id: "entertainment-casino",
    category: "entertainment",
    titleZh: "赌场",
    titleEn: "Visiting a Casino",
    description: "在赌场了解游戏规则、换筹码、体验桌游",
    otherRole: "赌场工作人员",
    otherRoleIcon: "🎰",
    flows: [
      {
        id: "casino-basics",
        titleZh: "赌场体验",
        titleEn: "Casino Experience",
        description: "第一次进赌场、换筹码、了解基本规则",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, this is my first time at a casino. Where do I get chips?",
            textZh: "你好，这是我第一次来赌场。我在哪里换筹码？",
            casualVersion: "Hey, first time at a casino. Where can I get chips?",
            commonMistake: {
              wrong: "Where I get chips?",
              correct: "Where do I get chips?",
              explanation: "直接问句需要do/does/did助动词。",
            },
            formalityVariants: {
              casual: "First time here. Where do I get chips?",
              standard: "Hi, this is my first time at a casino. Where do I get chips?",
              formal: "Excuse me, this is my inaugural visit to a casino. Could you please direct me to where I might acquire chips?",
            },
            culturalNote:
              "在赌场可以直接在牌桌上把现金换成筹码，也可以去专门的兑换窗口 cashier cage。拉斯维加斯的赌场通常不需要会员卡。",
          },
          {
            speaker: "them",
            role: "荷官",
            textEn:
              "Welcome! You can buy chips right here at the table, or at the cashier cage near the entrance. This table has a $10 minimum bet. Would you like to sit down?",
            textZh:
              "欢迎！您可以直接在这个牌桌上买筹码，也可以去入口附近的兑换窗口。这张桌的最低下注是10美元。您想坐下吗？",
            casualVersion: "Welcome! Can grab chips right here at the table, or at the cage by the entrance. $10 minimum bet here. Wanna sit?",
            commonMistake: {
              wrong: "You like sit down?",
              correct: "Would you like to sit down?",
              explanation: "询问意愿时，\"Would you like to...\" 是更自然和礼貌的表达。",
            },
            formalityVariants: {
              casual: "Welcome! You can get chips at the table or the cage. $10 minimum. Wanna sit?",
              standard: "Welcome! You can buy chips right here at the table, or at the cashier cage near the entrance. This table has a $10 minimum bet. Would you like to sit down?",
              formal: "Welcome! You may acquire chips directly at this table, or alternatively, at the main cashier cage situated near the entrance. Please note this particular table has a $10 minimum wager. Would you care to be seated?",
            },
            keyPhrases: [
              { en: "chips", zh: "筹码" },
              { en: "minimum bet", zh: "最低下注" },
              { en: "cashier cage", zh: "兑换窗口" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Hey, welcome! You can get chips right here or hit the cage by the door. Table minimum's $10. Wanna have a seat?",
                textZh: "嘿，欢迎！可以在这里换筹码，或者去门口的兑换处。最低下注10美元。要坐下吗？",
                actionHint: "hit the cage = 去兑换窗口, table minimum = 最低下注",
                frequency: "common",
              },
              {
                textEn:
                  "Welcome to the table! I can change your cash to chips right here, or there's a cashier near the entrance. This is a $10 minimum table — pull up a chair!",
                textZh: "欢迎来到牌桌！我可以在这直接帮你换筹码，或者去入口那边的收银台。这是10美元最低的桌——请坐！",
                actionHint: "pull up a chair = 拉把椅子坐下",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure. Can I start with $100? And could you explain the rules? I've never played blackjack before.",
            textZh: "好的。我可以先换100美元吗？你能解释一下规则吗？我从来没玩过21点。",
            casualVersion: "Yeah. Can I start with a hundred? And, uh, rules? Never played Blackjack.",
            commonMistake: {
              wrong: "I never played Blackjack.",
              correct: "I've never played Blackjack before.",
              explanation: "表示\"从未做过某事\"时，需要使用完成时态 \"have never + 过去分词\"。",
            },
            formalityVariants: {
              casual: "Yeah. Can I do $100? And rules, please? Never played Blackjack.",
              standard: "Sure. Can I start with $100? And could you explain the rules? I've never played Blackjack before.",
              formal: "Certainly. May I begin with $100 in chips? Additionally, would you be so kind as to elucidate the rules? I am entirely unfamiliar with the game of Blackjack.",
            },
          },
          {
            speaker: "them",
            role: "荷官",
            textEn:
              "Of course. The goal is to get your cards as close to 21 as possible without going over. Face cards are worth 10, aces can be 1 or 11. I'll deal you two cards, and you decide to hit or stand.",
            textZh:
              "当然。目标是让你的牌尽可能接近21点但不能超过。人头牌值10，A可以是1或11。我发给您两张牌，您决定要牌还是停牌。",
            casualVersion: "Sure. Goal's get your cards near 21, but not over. Face cards are 10, aces are 1 or 11. I'll deal you two, then you say 'hit' or 'stand'.",
            commonMistake: {
              wrong: "Face cards worth 10.",
              correct: "Face cards are worth 10.",
              explanation: "\"Be worth\" 是固定搭配，表示“值多少钱/点”。",
            },
            formalityVariants: {
              casual: "Sure. Get your cards near 21, don't go over. Face cards 10, aces 1 or 11. I'll deal two, then you say hit or stand.",
              standard: "Of course. The goal is to get your cards as close to 21 as possible without going over. Face cards are worth 10, aces can be 1 or 11. I'll deal you two cards, and you decide if you want to hit or stand.",
              formal: "Certainly. The objective of the game is to attain a hand total as close to 21 as possible without exceeding it. Face cards are assigned a value of 10, while aces may be valued as either 1 or 11. I shall now deal you two initial cards, and you will then indicate whether you wish to 'hit' or 'stand'.",
            },
            keyPhrases: [
              { en: "hit", zh: "要牌" },
              { en: "stand", zh: "停牌" },
              { en: "face cards", zh: "人头牌" },
              { en: "going over", zh: "爆牌/超过21" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure! So basically, you want to get as close to 21 as you can without busting. Kings, queens, jacks are all 10. Aces are 1 or 11 — your choice. I deal two cards, and you say hit or stay.",
                textZh:
                  "没问题！基本上就是尽量接近21但不能爆。K、Q、J都是10。A可以是1或11——你选。我发两张牌，你说要牌还是停。",
                actionHint: "busting = 爆牌/超过21, stay = stand 停牌",
                frequency: "common",
              },
              {
                textEn:
                  "Simple — try to get to 21 or as close as possible. Go over and you bust. Face cards count as 10, ace is 1 or 11. I give you two cards, then you tell me: hit me or I'm good.",
                textZh:
                  "很简单——尽量凑到21或接近。超过就爆了。人头牌算10，A是1或11。我发两张牌，你告诉我：要牌还是够了。",
                actionHint: "hit me = 给我一张牌, I'm good = 我够了/停牌",
                frequency: "common",
              },
            ],
          },
          { speaker: "you", textEn: "I have 15. Should I hit or stand?", textZh: "我有15点。我应该要牌还是停牌？",
            casualVersion: "Got 15. Hit or stand?",
            commonMistake: {
              wrong: "I have 15 points.",
              correct: "I have 15.",
              explanation: "在二十一点中，玩家通常直接说牌点总数，不必加上“points”。",
            },
            formalityVariants: {
              casual: "Got 15. Hit or stand?",
              standard: "I have 15. Should I hit or stand?",
              formal: "My current hand total is 15. Would it be advisable for me to 'hit' or 'stand'?",
            },
          },
          {
            speaker: "them",
            role: "荷官",
            textEn:
              "That's up to you! With 15, there's a risk either way. If my face-up card is a 6 or lower, many players would stand. It's your call though — good luck!",
            textZh:
              "这取决于您！15点的话两种选择都有风险。如果我亮出的牌是6或更低，很多玩家会选择停牌。不过由您决定——祝您好运！",
            casualVersion: "Totally up to you! Fifteen's risky either way. If my card's a 6 or lower, lotsa players stand. But your call—good luck!",
            commonMistake: {
              wrong: "It's depend on you.",
              correct: "That's up to you!",
              explanation: "\"It depends on you\" 或 \"That's up to you\" 是正确表达“由你决定”的方式。",
            },
            formalityVariants: {
              casual: "Your call! Fifteen's tough. Most stand if my card's low, but it's up to you. Good luck!",
              standard: "That's up to you! With 15, both options have risks. If my upcard is 6 or lower, many players choose to stand. But it's your decision - good luck!",
              formal: "That is entirely at your discretion. A hand total of 15 presents a challenging situation, with inherent risks for both actions. Should my visible card be a 6 or lower, many experienced players would opt to stand. However, the ultimate decision rests with you. Best of luck!",
            },
            keyPhrases: [
              { en: "face-up card", zh: "亮出的牌" },
              { en: "it's your call", zh: "由您决定" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Totally your decision! 15's a tricky spot. A lot of folks would stay if I'm showing a 6 or under. But hey, it's your money — go with your gut!",
                textZh: "完全你来决定！15点是个纠结的位置。我亮的牌6或以下很多人会停。不过是你的钱——跟着直觉走！",
                actionHint: "go with your gut = 跟着直觉走, tricky spot = 纠结的情况",
                frequency: "common",
              },
              {
                textEn:
                  "That's the million-dollar question! 15 could go either way. If I'm showing something low, standing's not a bad play. Your call though — fingers crossed!",
                textZh: "这是个大问题！15点两种可能都有。我亮的牌低的话，停牌不是个坏选择。你决定——祝好运！",
                actionHint: "fingers crossed = 祝好运, not a bad play = 不是坏选择",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll stand. How do I cash out my chips when I'm done?",
            textZh: "我停牌。玩完以后怎么把筹码换成现金？",
            casualVersion: "I'll stand. So, when I'm done, how do I cash these chips in?",
            commonMistake: {
              wrong: "How to change chips to cash?",
              correct: "How do I cash out these chips?",
              explanation: "\"How to do something\" 不适用于直接提问；\"cash out\" 是更地道的表达。",
            },
            formalityVariants: {
              casual: "Stand. How do I cash out later?",
              standard: "I'll stand. After I'm done playing, how do I cash out these chips?",
              formal: "I shall stand. Subsequent to my play, what is the procedure for exchanging these chips for currency?",
            },
          },
          {
            speaker: "them",
            role: "荷官",
            textEn:
              "Just take your chips to the cashier cage and they'll exchange them for cash. And don't forget — if you're having a good run, it's customary to tip the dealer a chip or two. Have fun at the tables!",
            textZh:
              "把筹码拿到兑换窗口就行，他们会换成现金。别忘了——如果您赢了不少，习惯上会给荷官一两个筹码作为小费。祝您玩得开心！",
            casualVersion: "Just take your chips to the cage, they'll cash 'em out. Oh, and if you win big, usually you tip the dealer a chip or two. Enjoy!",
            culturalNote: "在赌场，荷官小费是惯例。赢了钱，通常给1-2个筹码。",
            commonMistake: {
              wrong: "They will give you cash.",
              correct: "They'll exchange them for cash.",
              explanation: "\"Exchange for cash\" 或 \"cash out\" 更准确描述赌场换筹码的行为。",
            },
            formalityVariants: {
              casual: "Just take your chips to the cage, they'll cash 'em. Tip the dealer if you win big. Have fun!",
              standard: "Just take your chips to the cashier cage and they'll exchange them for cash. Don't forget - if you win big, it's customary to tip the dealer a chip or two. Have fun!",
              formal: "Kindly proceed to the cashier cage with your chips, where they will be exchanged for currency. Please be aware that should you experience substantial winnings, it is customary to offer the dealer a gratuity of one or two chips. Enjoy your gaming experience!",
            },
            keyPhrases: [
              { en: "cash out", zh: "兑现" },
              { en: "tip the dealer", zh: "给荷官小费" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Bring your chips to the cage and they'll cash you out. Oh, and if you're on a hot streak, it's nice to toss the dealer a chip. Good luck out there!",
                textZh: "拿筹码去兑换处他们会给你换现金。对了，如果你手气好，扔给荷官一个筹码是惯例。祝好运！",
                actionHint: "hot streak = 连赢/手气好, toss = 扔/给",
                frequency: "common",
              },
              {
                textEn:
                  "When you're done, just head to the cashier and swap your chips for cash. And hey — if Lady Luck's on your side, a tip for the dealer is always appreciated. Enjoy!",
                textZh: "玩完了去收银台把筹码换成现金。如果运气好的话，给荷官小费是受欢迎的。玩得开心！",
                actionHint: "Lady Luck = 幸运女神, swap = 交换",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 夜市 ====================
  {
    id: "entertainment-night-market",
    category: "entertainment",
    titleZh: "夜市",
    titleEn: "Night Market",
    description: "在国外夜市逛摊位、品尝街头美食、讨价还价",
    otherRole: "摊位老板",
    otherRoleIcon: "🏮",
    flows: [
      {
        id: "night-market-browsing",
        titleZh: "夜市逛吃",
        titleEn: "Night Market Browsing",
        description: "在夜市品尝美食并购买小物件",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, what's this dish? It smells amazing!",
            textZh: "请问，这是什么菜？闻起来太香了！",
            formalityVariants: {
              casual: "Hey, what's this? Smells amazing!",
              standard: "Excuse me, what is this dish? It smells wonderful!",
              formal: "Excuse me, could you please tell me what this dish is? It has a most delightful aroma.",
            },
            casualVersion: "Hey, what's cooking? Smells so good!",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "That's our grilled lamb skewers with a special spice rub. $3 for two skewers. Want to try one?",
            textZh: "这是我们的烤羊肉串，用特制香料腌的。两串3美元。要试一串吗？",
            casualVersion: "That's our lamb skewers, special marinade. Two for three bucks. Wanna try one?",
            formalityVariants: {
              casual: "It's our lamb skewers, special marinade. Two bucks for two. Wanna try?",
              standard: "That's our grilled lamb skewer, marinated with special spices. Two for $3. Would you like to try one?",
              formal: "That is our signature grilled lamb skewer, which has been marinated in our proprietary blend of spices. They are priced at two for three dollars. Would you care to sample one?",
            },
            keyPhrases: [
              { en: "skewers", zh: "串" },
              { en: "spice rub", zh: "香料腌制" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Those are lamb skewers — we season 'em with our own spice blend. Three bucks for two. Wanna give 'em a shot?",
                textZh: "那是羊肉串——我们自己的混合香料调味的。三块钱两串。要不要试试？",
                actionHint: "'em = them, give 'em a shot = 试试",
                frequency: "common",
              },
              {
                textEn: "Grilled lamb on a stick with our house spice mix! Two for $3. You should totally try one.",
                textZh: "烤羊肉串配我们的独家香料！两串3美元。你一定要试试。",
                actionHint: "on a stick = 串上的, house = 自家的/独家",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please! And what's in that drink over there?",
            textZh: "好的！那边那个饮料是什么？",
            casualVersion: "Yeah, please! And what's that drink?",
            formalityVariants: {
              casual: "Yeah, please! What's that drink?",
              standard: "Yes, please! And what is that drink over there?",
              formal: "Certainly! And might I inquire as to the nature of that beverage situated over there?",
            },
          },
          {
            speaker: "them",
            role: "摊主",
            textEn:
              "That's fresh mango smoothie with coconut milk. It's our bestseller — $4 each. I can make it less sweet if you prefer.",
            textZh: "那是新鲜芒果奶昔加椰奶。是我们的畅销款——每杯4美元。如果您喜欢可以做淡一点。",
            casualVersion: "That's a fresh mango smoothie, with coconut milk. Bestseller, four bucks. Can make it less sweet if you want.",
            formalityVariants: {
              casual: "Mango smoothie, fresh, with coconut milk. Super popular, four bucks. Can make it lighter if you want.",
              standard: "That's a fresh mango smoothie with coconut milk. It's our bestseller – $4 a cup. We can make it less sweet if you prefer.",
              formal: "That is our fresh mango smoothie, prepared with coconut milk. It is one of our most popular items, priced at four dollars per cup. We are able to adjust the sweetness level to your preference, should you desire.",
            },
            keyPhrases: [
              { en: "bestseller", zh: "畅销款" },
              { en: "less sweet", zh: "淡一点/少甜" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Mango smoothie with coconut milk — it's our number one seller. Four bucks. I can dial back the sweetness if you want.",
                textZh: "芒果椰奶奶昔——我们卖得最好的。4块钱。想少甜点我可以调。",
                actionHint: "dial back = 减少/调低",
                frequency: "common",
              },
              {
                textEn:
                  "That's our mango-coconut smoothie — people go nuts for it. $4 a cup. Want it less sugary? I can do that.",
                textZh: "那是我们的芒果椰子奶昔——大家都疯狂喜欢。每杯4美元。想少糖？可以做。",
                actionHint: "go nuts for it = 非常喜欢, sugary = 甜的/含糖的",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take one, not too sweet. Do you accept cards, or is it cash only?",
            textZh: "来一杯，不要太甜。你们收银行卡还是只收现金？",
            casualVersion: "I'll take one, not too sweet. Y'all take card or just cash?",
            commonMistake: {
              wrong: "I want one, not too sweet. Do you receive card or just receive cash?",
              correct: "I'll take one, not too sweet. Do you take card or just cash?",
              explanation: "“收”在口语中表示“接受支付”，应译为“take”，而非“receive”。",
            },
            formalityVariants: {
              casual: "One, not too sweet. Card or cash?",
              standard: "I'll take one, not too sweet. Do you take card or just cash?",
              formal: "I would like one, please, prepared with reduced sweetness. Do you accept credit card payments, or is it cash only?",
            },
            culturalNote: "夜市和街头摊位有些只收现金，建议提前准备好零钱。有些可能接受 Venmo 或 Zelle 等手机支付。",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn:
              "We take both! Cash, card, or Venmo. Here's your smoothie and your skewers. Be careful — the skewers are hot!",
            textZh: "都收！现金、银行卡或Venmo。这是您的奶昔和烤串。小心——烤串很烫！",
            casualVersion: "Yeah, both! Cash, card, Venmo. Here's your stuff. Watch out – skewers are hot!",
            formalityVariants: {
              casual: "Both! Cash, card, Venmo. Here ya go. Skewers are super hot!",
              standard: "We take both! Cash, card, or Venmo. Here are your smoothie and skewers. Be careful – the skewers are hot!",
              formal: "We accept all three payment methods: cash, card, and Venmo. Here are your mango smoothie and lamb skewers. Please exercise caution, as the skewers are extremely hot.",
            },
            keyPhrases: [
              { en: "Venmo", zh: "Venmo（美国手机支付）" },
              { en: "be careful", zh: "小心" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We take everything — cash, card, Venmo, whatever works. Here you go! Watch out, the skewers are fresh off the grill.",
                textZh: "什么都收——现金、卡、Venmo都行。给你！小心，烤串刚下炉。",
                actionHint: "whatever works = 什么方式都行, fresh off the grill = 刚烤好的",
                frequency: "common",
              },
              {
                textEn:
                  "Cash, card, or Venmo — we're flexible. Here's your stuff! Careful with those skewers though, they're piping hot.",
                textZh: "现金、卡或Venmo——都行。东西给你！小心烤串，非常烫。",
                actionHint: "piping hot = 非常烫",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "This is delicious! Do you come here every weekend?",
            textZh: "太好吃了！你们每个周末都来这里吗？",
            casualVersion: "So good! Y'all here every weekend?",
            formalityVariants: {
              casual: "This is so good! You guys here every weekend?",
              standard: "This is delicious! Do you come here every weekend?",
              formal: "This is quite delicious! Do you frequent this location every weekend?",
            },
          },
          {
            speaker: "them",
            role: "摊主",
            textEn:
              "Every Friday and Saturday night! We're also at the Sunday farmers market downtown. Follow us on Instagram for our schedule. Come back anytime!",
            textZh: "每周五和周六晚上！我们周日也在市中心的农夫市场。关注我们的Instagram可以看时间表。随时再来！",
            casualVersion: "Every Friday and Saturday! We're at the downtown farmers market Sundays too. Check our Insta for the schedule. Come back whenever!",
            culturalNote: "Instagram是美国小商家分享信息、保持顾客联系的流行平台。",
            formalityVariants: {
              casual: "Fridays and Saturdays! Sundays, we're at the downtown farmers market. Hit up our Instagram for the schedule. Stop by again soon!",
              standard: "Every Friday and Saturday night! We're also at the downtown farmers market on Sundays. Follow our Instagram for our schedule. Please come back anytime!",
              formal: "We operate here every Friday and Saturday evening. Additionally, we are present at the downtown farmers market on Sundays. For our complete schedule, please refer to our Instagram page. We welcome your return visit at any time.",
            },
            keyPhrases: [
              { en: "farmers market", zh: "农夫市场" },
              { en: "follow us on Instagram", zh: "关注我们的Instagram" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Fridays and Saturdays! We do the farmers market on Sundays too, downtown. Hit us up on Insta for where we'll be. See you next time!",
                textZh: "周五和周六！周日也在市中心的农夫市场。在Insta上关注我们看我们在哪。下次见！",
                actionHint: "hit us up on Insta = 在Instagram上找我们/关注我们",
                frequency: "common",
              },
              {
                textEn:
                  "We're here every weekend — Friday and Saturday nights. Also the Sunday farmers market downtown. Check our Instagram for updates. Hope to see you again!",
                textZh: "每个周末都在——周五和周六晚上。周日也在市中心农夫市场。看我们Instagram了解最新。希望再见到你！",
                actionHint: "check our Instagram = 看我们的Instagram",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 百老汇 ====================
  {
    id: "entertainment-broadway",
    category: "entertainment",
    titleZh: "百老汇",
    titleEn: "Broadway Show",
    description: "观看百老汇演出、购票、了解剧场礼仪",
    otherRole: "剧场工作人员",
    otherRoleIcon: "🎭",
    flows: [
      {
        id: "broadway-experience",
        titleZh: "百老汇观剧",
        titleEn: "Broadway Experience",
        description: "购买百老汇门票并入场观看演出",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, are there any tickets left for tonight's show?",
            textZh: "你好，今晚的演出还有票吗？",
            casualVersion: "Hi, any tickets left for tonight?",
            commonMistake: {
              wrong: "Hi, have tickets for tonight?",
              correct: "Hi, are there any tickets left for tonight?",
              explanation: "中文思维常省略“有”或“是否”的主语和助动词，英文需要补全。",
            },
            formalityVariants: {
              casual: "Hey, got any tickets for tonight?",
              standard: "Hi, are there any tickets left for tonight?",
              formal: "Good evening, I was wondering if there are any tickets still available for this evening's performance.",
            },
            culturalNote:
              "百老汇当日票 rush tickets 或彩票票 lottery tickets 通常很便宜，但需要早起排队或碰运气。TKTS摊位可以买到折扣票。",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "Let me check. We have a few orchestra seats left at $159 each, and some mezzanine seats for $89. The mezzanine actually has a great view of the full stage.",
            textZh: "我查一下。还有几个正厅前排座位每张159美元，楼座有一些座位89美元。楼座其实能看到整个舞台的全景。",
            casualVersion: "Lemme check. Got a few orchestra seats at $159, and some mezzanine for $89. Mezzanine actually has a great view of the whole stage.",
            formalityVariants: {
              casual: "Lemme check. Got some orchestra for $159, mezzanine for $89. Mezzanine's got a great view, actually.",
              standard: "Let me check. We have a few orchestra seats left at $159 each, and some mezzanine seats for $89. The mezzanine actually has a great view of the full stage.",
              formal: "Certainly, please allow me a moment to confirm availability. We currently have a limited number of orchestra seats remaining at $159 per ticket, and several mezzanine seats available for $89 each. The mezzanine section, in fact, offers an excellent panoramic view of the entire stage.",
            },
            keyPhrases: [
              { en: "orchestra seats", zh: "正厅前排座位" },
              { en: "mezzanine", zh: "楼座" },
              { en: "full stage", zh: "整个舞台" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Let me pull it up... We've still got a couple orchestra seats at $159, and some mezz seats for $89. Honestly, the mezz gives you a killer view of the whole stage.",
                textZh: "我查一下...正厅还有几个座位159美元，楼座89美元。说实话，楼座视角看整个舞台特别好。",
                actionHint: "pull it up = 查一下, mezz = mezzanine 的简称, killer view = 极好的视角",
                frequency: "common",
              },
              {
                textEn:
                  "Hmm, let me see. There are a handful of orchestra seats left — $159. Mezzanine's $89 and to be honest, you can see everything from up there.",
                textZh: "嗯，我看看。正厅还剩几个——159美元。楼座89美元，说真的从上面什么都能看到。",
                actionHint: "a handful of = 几个, to be honest = 说实话",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Two mezzanine seats, please. What time does the show start?",
            textZh: "两张楼座的票。演出几点开始？",
            casualVersion: "Two mezzanine. What time's the show start?",
            commonMistake: {
              wrong: "Two mezzanine tickets. Show start time?",
              correct: "Two mezzanine seats, please. What time does the show start?",
              explanation: "中文习惯直接说名词或省略动词，英文需要完整句子结构。",
            },
            formalityVariants: {
              casual: "Yeah, two mezzanine. When's it start?",
              standard: "Two mezzanine seats, please. What time does the show start?",
              formal: "I would like two mezzanine seats, if you please. And could you inform me of the scheduled start time for the performance?",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "The show starts at 8 PM sharp. Doors open at 7:30. I'd recommend arriving by 7:40 at the latest — latecomers won't be seated until intermission.",
            textZh: "演出晚上8点准时开始。7:30开门。建议最晚7:40到——迟到的人要等到中场休息才能入座。",
            casualVersion: "Show's at 8 PM sharp. Doors open 7:30. Definitely get there by 7:40, 'cause if you're late, you gotta wait 'til intermission to get in.",
            culturalNote: "美国剧院对迟到者非常严格，会等到中场休息才允许入场。",
            formalityVariants: {
              casual: "It's 8 PM sharp. Doors 7:30. Get there by 7:40, or you're stuck 'til intermission.",
              standard: "The show starts at 8 PM sharp. Doors open at 7:30. I recommend arriving by 7:40 at the latest – latecomers will have to wait until intermission to be seated.",
              formal: "The performance is scheduled to commence precisely at 8:00 PM. The theater doors will open at 7:30 PM. We strongly advise patrons to arrive no later than 7:40 PM, as latecomers will regrettably not be permitted entry until the scheduled intermission.",
            },
            keyPhrases: [
              { en: "sharp", zh: "准时" },
              { en: "latecomers", zh: "迟到的人" },
              { en: "intermission", zh: "中场休息" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Curtain's at 8 on the dot. Doors at 7:30. Try to be here by 7:40 — if you're late, they won't let you in till intermission.",
                textZh: "8点准时开幕。7:30开门。尽量7:40到——迟到的话中场休息前不让进。",
                actionHint: "curtain's at = 开幕时间是, on the dot = 准时",
                frequency: "common",
              },
              {
                textEn:
                  "8 PM start, doors open at 7:30. I'd say get here by 7:40 — they're pretty strict about seating latecomers. You'd have to wait till the break.",
                textZh: "8点开演，7:30开门。建议7:40到——对迟到入场管得挺严。得等到中间休息。",
                actionHint: "pretty strict = 挺严格的, the break = intermission 中场休息",
                frequency: "common",
              },
            ],
          },
          { speaker: "you", textEn: "Good to know. How long is the show?", textZh: "好的。演出多长时间？",
            casualVersion: "Good to know. How long's the show?",
            commonMistake: {
              wrong: "Show how long?",
              correct: "How long is the show?",
              explanation: "英文疑问句需要倒装并使用助动词。",
            },
            formalityVariants: {
              casual: "Got it. How long is it?",
              standard: "Good to know. How long is the show?",
              formal: "Thank you for that information. Could you please tell me the approximate duration of the performance?",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "It's about two hours and 30 minutes including a 15-minute intermission. There are restrooms on every level, and concessions in the lobby.",
            textZh: "大约两小时30分钟，包括15分钟的中场休息。每层都有洗手间，大厅有小卖部。",
            casualVersion: "It's 'bout two and a half hours, with a 15-min intermission. Restrooms on every level, concessions in the lobby.",
            formalityVariants: {
              casual: "About two and a half hours, 15-min break. Restrooms everywhere, snacks in the lobby.",
              standard: "It's approximately two hours and thirty minutes, including a 15-minute intermission. Restrooms are available on every level, and there's a concession stand in the lobby.",
              formal: "The performance runs for approximately two hours and thirty minutes, which includes a fifteen-minute intermission. For your convenience, restrooms are located on each level of the theater, and a concession stand is available in the main lobby.",
            },
            keyPhrases: [
              { en: "concessions", zh: "小卖部" },
              { en: "lobby", zh: "大厅" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Around two and a half hours with a 15-minute break in the middle. Bathrooms on every floor, and there's a snack bar in the lobby.",
                textZh: "大约两个半小时，中间有15分钟休息。每层有洗手间，大厅有小吃吧。",
                actionHint: "snack bar = 小吃吧/小卖部",
                frequency: "common",
              },
              {
                textEn:
                  "The whole thing runs about 2 hours 30 with a 15-minute intermission. Restrooms are on each level, and you can grab drinks and snacks out front.",
                textZh: "整场大约2小时30分钟，有15分钟中场休息。每层有洗手间，前面可以买饮料和零食。",
                actionHint: "the whole thing = 整场, out front = 前面/大厅",
                frequency: "common",
              },
            ],
          },
          { speaker: "you", textEn: "Is there a dress code for Broadway?", textZh: "看百老汇有着装要求吗？",
            casualVersion: "Dress code for Broadway?",
            commonMistake: {
              wrong: "Broadway dress code?",
              correct: "Is there a dress code for Broadway?",
              explanation: "英文疑问句需要助动词或动词be的倒装。",
            },
            formalityVariants: {
              casual: "Dress code for Broadway shows?",
              standard: "Is there a dress code for Broadway?",
              formal: "Do you have a specific dress code policy for attending Broadway performances?",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "No strict dress code, but most people dress smart casual — no shorts or flip-flops. You'll see everything from suits to nice jeans. Enjoy the show — it's absolutely fantastic!",
            textZh:
              "没有严格的着装要求，但大多数人穿休闲正装——不要穿短裤或人字拖。您会看到从西装到好看的牛仔裤各种穿着。祝观演愉快——这场演出真的非常精彩！",
            casualVersion: "No super strict dress code, but most folks go smart casual – definitely no shorts or flip-flops. You'll see everything from suits to nice jeans. Enjoy the show, it's really good!",
            culturalNote: "观看百老汇演出通常会穿得比平时更讲究，以示尊重和场合感。",
            formalityVariants: {
              casual: "Nah, no strict dress code, but most people do 'smart casual' – no shorts/flip-flops. You'll see all sorts, from suits to good jeans. Enjoy, it's a great show!",
              standard: "No strict dress code, but most people dress smart casual — no shorts or flip-flops. You'll see everything from suits to nice jeans. Enjoy the show – it's really great!",
              formal: "There is no strictly enforced dress code; however, patrons typically opt for smart casual attire, avoiding items such as shorts or flip-flops. You will observe a range of apparel, from formal business suits to well-maintained denim. We sincerely hope you enjoy the performance, as it is truly exceptional!",
            },
            keyPhrases: [
              { en: "smart casual", zh: "休闲正装" },
              { en: "fantastic", zh: "精彩的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Nothing formal required, but people usually dress up a bit — no shorts or sandals. Anything from a blazer to nice jeans works. You're gonna love it!",
                textZh:
                  "不需要正式着装，但大家通常会穿得稍微好一点——别穿短裤或凉鞋。从西装外套到好看的牛仔裤都行。你会喜欢的！",
                actionHint: "dress up a bit = 穿得稍微好一点, blazer = 西装外套",
                frequency: "common",
              },
              {
                textEn:
                  "There's no official dress code. Most folks go smart casual — just skip the shorts and flip-flops. It's an amazing show, you're in for a treat!",
                textZh: "没有官方着装要求。大多数人穿休闲正装——别穿短裤和人字拖就行。演出超棒，你们有福了！",
                actionHint: "you're in for a treat = 你们有福了/会有惊喜",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 喜剧俱乐部 ====================
  {
    id: "entertainment-comedy-club",
    category: "entertainment",
    titleZh: "喜剧俱乐部",
    titleEn: "Comedy Club",
    description: "在喜剧俱乐部观看脱口秀表演",
    otherRole: "喜剧俱乐部工作人员",
    otherRoleIcon: "😂",
    flows: [
      {
        id: "comedy-show",
        titleZh: "看脱口秀",
        titleEn: "Comedy Show",
        description: "在喜剧俱乐部看脱口秀并了解规矩",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, two tickets for the 9 PM show, please. Is there a drink minimum?",
            textZh: "你好，两张9点那场的票。有最低消费吗？",
            casualVersion: "Hey, two tickets for the 9pm. Drink minimum?",
            commonMistake: {
              wrong: "Is there drink minimum?",
              correct: "Is there a drink minimum?",
              explanation: "\"drink minimum\" 是一个名词短语，需要冠词 \"a\"。",
            },
            formalityVariants: {
              casual: "Hey, two tickets for the 9pm. Drink minimum?",
              standard: "Hi, two tickets for the 9 PM show, please. Is there a drink minimum?",
              formal: "Good evening, I'd like to purchase two tickets for the 9 PM performance. Could you please inform me if there is a minimum beverage requirement?",
            },
            culturalNote: "美国喜剧俱乐部通常有 two-drink minimum（两杯最低消费），意思是每人必须至少点两杯饮料。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Tickets are $20 each, and yes, there's a two-drink minimum per person. Drinks start at $8. Would you like front row or further back?",
            textZh: "票每张20美元，是的，每人有两杯最低消费。饮料8美元起。您想坐前排还是后面一点？",
            casualVersion: "Twenty bucks a ticket. Yep, two-drink minimum per person. Drinks start at eight. Wanna sit up front or more in the back?",
            commonMistake: {
              wrong: "Drinks from $8.",
              correct: "Drinks start at $8.",
              explanation: "\"start at\" 表达价格或范围的起始点更自然。",
            },
            formalityVariants: {
              casual: "Twenty bucks a ticket. Yeah, two-drink minimum each. Drinks start at eight. Front or back?",
              standard: "Tickets are $20 each, and yes, there is a two-drink minimum per person. Drinks start at $8. Would you prefer to sit up front or a bit further back?",
              formal: "Each ticket is priced at $20, and indeed, there is a mandatory two-drink minimum per patron. Beverages commence at $8. Would you care to be seated in the front section or perhaps a bit further toward the rear?",
            },
            keyPhrases: [
              { en: "two-drink minimum", zh: "两杯最低消费" },
              { en: "front row", zh: "前排" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Twenty bucks a ticket, and yeah, there's a two-drink minimum — drinks are $8 and up. You wanna sit up front or hang back a bit?",
                textZh: "每张票20块，是的有两杯最低消费——饮料8美元起。想坐前面还是靠后一点？",
                actionHint: "hang back = 坐后面一点",
                frequency: "common",
              },
              {
                textEn:
                  "It's $20 per ticket. There is a two-drink min per person, cheapest drink is $8. Front row or somewhere further back?",
                textZh: "每张票20美元。每人两杯最低消费，最便宜的饮料8美元。前排还是后面？",
                actionHint: "two-drink min = two-drink minimum 的缩写",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Maybe not the front row — I heard comedians like to pick on people up front!",
            textZh: "前排就算了——我听说喜剧演员喜欢调侃前排的人！",
            casualVersion: "Nah, probably not front row. Heard comics love to pick on folks up there!",
            culturalNote: "美国脱口秀文化，喜剧演员会和前排观众互动",
            commonMistake: {
              wrong: "comedians like to joke with people in front",
              correct: "comedians like to pick on people up front",
              explanation: "\"pick on\" 指“戏弄，找茬”，更符合喜剧演员的调侃行为。",
            },
            formalityVariants: {
              casual: "Nah, not front row. Heard comics pick on folks up there!",
              standard: "Maybe not the front row — I heard comedians like to pick on people up front!",
              formal: "I believe I shall refrain from selecting a front-row seat, as I've been informed that comedians frequently engage in playful banter with those in the immediate vicinity of the stage.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Ha, you heard right! The comics do love to interact with the front row. I'll put you in the middle section — close enough to see but safe from being called out.",
            textZh: "哈，你说得对！喜剧演员确实喜欢和前排互动。我给你们安排中间区域——看得清楚但不会被点名。",
            casualVersion: "Haha, yep, you got it! They do love the front row. I'll put y'all in the middle – good view, but no spotlight on you.",
            commonMistake: {
              wrong: "won't be called name",
              correct: "won't be singled out",
              explanation: "\"singled out\" 指“被特别关注或挑选出来（通常指负面）”，在此指不会被喜剧演员点名调侃。",
            },
            formalityVariants: {
              casual: "Haha, yep, you got it! They love the front row. I'll put y'all in the middle – good view, no spotlight.",
              standard: "Ha, you heard right! The comics do love to interact with the front row. I can seat you in the middle area — you'll have a clear view but won't be singled out.",
              formal: "Indeed, you are quite correct! Performers do frequently engage with the audience members seated in the very first row. I shall arrange for your seating in a central section, which will afford you an excellent vantage point without the risk of individual attention from the stage.",
            },
            keyPhrases: [
              { en: "pick on", zh: "调侃/挑逗" },
              { en: "called out", zh: "被点名" },
              { en: "comics", zh: "喜剧演员" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Ha, smart move! Yeah, the comedians definitely mess with the front row. I'll seat you in the middle — good view, and you won't get dragged into any bits.",
                textZh: "哈，聪明！喜剧演员确实会拿前排开涮。我安排你们坐中间——看得清楚，也不会被拉进段子里。",
                actionHint: "mess with = 拿...开玩笑, bits = 喜剧段子",
                frequency: "common",
              },
              {
                textEn:
                  "Haha, you know the deal! Front row is the danger zone. I'll stick you guys in the middle — great sightlines, no risk of being part of the act.",
                textZh: "哈哈，你懂行！前排是危险区。我把你们放中间——视线好，不会成为表演的一部分。",
                actionHint: "danger zone = 危险区（这里是幽默说法）, sightlines = 视线",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Is it okay to laugh loudly? I don't want to be rude.",
            textZh: "太好了。大声笑没关系吧？我不想不礼貌。",
            casualVersion: "Sweet. Can I laugh loud? Don't wanna be rude.",
            commonMistake: {
              wrong: "Can I loudly laugh?",
              correct: "Can I laugh loudly?",
              explanation: "副词 \"loudly\" 修饰动词 \"laugh\"，通常放在动词之后。",
            },
            formalityVariants: {
              casual: "Sweet. Can I laugh loud? Don't wanna be rude.",
              standard: "Perfect. Is it okay to laugh loudly? I don't want to be rude.",
              formal: "Excellent. Would it be considered acceptable to express my amusement audibly? I wish to ensure I do not inadvertently cause any offense.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Laugh as loud as you want — that's the whole point! Just don't heckle the performers or use your phone. The comics really appreciate an enthusiastic audience.",
            textZh:
              "想多大声笑就多大声——这就是来这里的意义！只是不要起哄打断表演者或用手机。喜剧演员真的很感谢热情的观众。",
            casualVersion: "Laugh your head off — that's why you're here! Just no heckling or phones. Comics love an engaged crowd.",
            culturalNote: "美国脱口秀规则：可大笑但不能起哄或用手机",
            commonMistake: {
              wrong: "don't make noise to interrupt",
              correct: "don't heckle",
              explanation: "\"heckle\" 特指在表演中大声打断或嘲讽表演者。",
            },
            formalityVariants: {
              casual: "Laugh your head off — that's why you're here! Just no heckling or phones. Comics love an engaged crowd.",
              standard: "Laugh as loud as you want — that's what you're here for! Just don't heckle or use your phone. Comics really appreciate an engaged audience.",
              formal: "Please feel free to express your enjoyment with as much volume as you desire; that is, after all, the primary purpose of your attendance! We merely request that you refrain from heckling the performers or using mobile devices. Comedians genuinely value an enthusiastic and responsive audience.",
            },
            keyPhrases: [
              { en: "heckle", zh: "起哄打断" },
              { en: "enthusiastic audience", zh: "热情的观众" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Oh, laugh your head off — that's what they want! Just don't shout stuff at the performers or pull out your phone. They love a loud crowd.",
                textZh: "大笑吧——他们就要这个效果！别对表演者大喊大叫或掏手机就行。他们喜欢吵闹的观众。",
                actionHint: "laugh your head off = 笑到不行, loud crowd = 热闹的观众",
                frequency: "common",
              },
              {
                textEn:
                  "The louder the better! Just no heckling and keep your phone away. Comedians feed off the audience energy, so go crazy with the laughs.",
                textZh: "越响越好！别起哄，手机收起来。喜剧演员靠观众的能量发挥，尽管笑。",
                actionHint: "feed off = 从中获取能量, go crazy = 尽情/放开",
                frequency: "common",
              },
            ],
          },
          { speaker: "you", textEn: "Got it. Who's performing tonight?", textZh: "明白了。今晚谁表演？",
            casualVersion: "Got it. Who's on tonight?",
            commonMistake: {
              wrong: "Who performs tonight?",
              correct: "Who's performing tonight?",
              explanation: "\"Who's performing\" (进行时) 更自然地询问今晚的安排，而非一般性的事实。",
            },
            formalityVariants: {
              casual: "Got it. Who's on tonight?",
              standard: "Got it. Who's performing tonight?",
              formal: "Understood. Could you please inform me of the scheduled performers for this evening?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "We have three comics tonight. The headliner is Sarah Mitchell — she was on a Netflix special last year. The show runs about 90 minutes total. You're going to have a great time!",
            textZh:
              "今晚有三位喜剧演员。头牌是 Sarah Mitchell——她去年上过Netflix专场。整场演出大约90分钟。你们一定会玩得很开心！",
            casualVersion: "Got three comics tonight. Sarah Mitchell's the headliner — she had a Netflix special last year. Whole show's about 90 minutes. You guys'll have a blast!",
            culturalNote: "Headliner是主要表演者，类似压轴大咖",
            commonMistake: {
              wrong: "the main performer is",
              correct: "the headliner is",
              explanation: "\"headliner\" 特指演出的主要或压轴表演者。",
            },
            formalityVariants: {
              casual: "Got three comics tonight. Sarah Mitchell's the headliner — Netflix special last year. Whole show's about 90 minutes. You guys'll have a blast!",
              standard: "We have three comics tonight. The headliner is Sarah Mitchell — she was on a Netflix special last year. The show runs about 90 minutes total. You're going to have a great time!",
              formal: "This evening's program features three comedic performers. Our esteemed headliner is Sarah Mitchell, who, notably, featured in a Netflix special last year. The entire performance is estimated to run for approximately 90 minutes. I am confident you will find it to be a most enjoyable experience.",
            },
            keyPhrases: [
              { en: "headliner", zh: "头牌/主演" },
              { en: "Netflix special", zh: "Netflix专场" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Three comics on the lineup tonight. The main act is Sarah Mitchell — she had a Netflix special last year, she's hilarious. About 90 minutes total. You'll have a blast!",
                textZh:
                  "今晚阵容有三位喜剧演员。主角是Sarah Mitchell——去年有Netflix专场，超搞笑。总共约90分钟。你们会玩得超开心！",
                actionHint: "lineup = 阵容/节目单, hilarious = 超搞笑",
                frequency: "common",
              },
              {
                textEn:
                  "Tonight's got three performers. Sarah Mitchell closes the show — she did a Netflix special, super funny. The whole thing is about an hour and a half. Enjoy!",
                textZh: "今晚有三位表演者。Sarah Mitchell压轴——做过Netflix专场，超级搞笑。整场大约一个半小时。祝愉快！",
                actionHint: "closes the show = 压轴表演",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 节日庆典 ====================
  {
    id: "entertainment-festival",
    category: "entertainment",
    titleZh: "节日庆典",
    titleEn: "Festival",
    description: "参加当地节日庆典、了解活动安排、融入氛围",
    otherRole: "节日志愿者",
    otherRoleIcon: "🎪",
    flows: [
      {
        id: "festival-experience",
        titleZh: "节日庆典体验",
        titleEn: "Festival Experience",
        description: "参加当地节日、了解活动安排并参与互动",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, this is my first time at this festival. What's happening today?",
            textZh: "你好，这是我第一次来这个节日。今天有什么活动？",
            casualVersion: "Hey, first time here. What's going on today?",
            commonMistake: {
              wrong: "What activity today?",
              correct: "What's happening today?",
              explanation: "“活动”直译为 activity 在此不自然，应问“发生了什么”或“有什么安排”。",
            },
            formalityVariants: {
              casual: "Hey, first time here. What's going on today?",
              standard: "Hi, this is my first time at this festival. What's happening today?",
              formal: "Excuse me, I'm attending this festival for the first time. Could you please inform me of the day's schedule?",
            },
          },
          {
            speaker: "them",
            role: "志愿者",
            textEn:
              "Welcome! Today we have live music on the main stage starting at noon, food vendors all along the park, craft workshops at 2 PM, and the big parade at 5. Here's a schedule.",
            textZh:
              "欢迎！今天中午开始主舞台有现场音乐，公园沿路都是美食摊位，下午2点有手工工作坊，5点有大游行。这是时间表。",
            casualVersion: "Welcome! We got live music on the main stage from noon, food vendors all over the park, craft workshops at 2, and the big parade's at 5. Here's a schedule.",
            formalityVariants: {
              casual: "Welcome! Live music from noon, food vendors all over, crafts at 2, parade at 5. Here's the schedule.",
              standard: "Welcome! Today we have live music on the main stage starting at noon, food vendors all along the park, craft workshops at 2 PM, and the big parade at 5. Here's the schedule.",
              formal: "Welcome to the festival! This afternoon's program includes live musical performances on the main stage commencing at noon, an array of food vendors situated throughout the park, craft workshops beginning at 2 PM, and our grand parade at 5 PM. A detailed schedule is available here.",
            },
            keyPhrases: [
              { en: "live music", zh: "现场音乐" },
              { en: "food vendors", zh: "美食摊位" },
              { en: "craft workshops", zh: "手工工作坊" },
              { en: "parade", zh: "游行" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Hey, welcome! So there's live bands on the main stage from noon, tons of food stalls through the park, crafts at 2, and the big parade kicks off at 5. Here's the rundown.",
                textZh: "欢迎！主舞台从中午开始有现场乐队，公园里很多美食摊，2点有手工活动，5点大游行。这是安排表。",
                actionHint: "kicks off = 开始, rundown = 简要安排/概况",
                frequency: "common",
              },
              {
                textEn:
                  "Welcome to the festival! We've got a packed day — music starts at noon, food everywhere, craft workshops at 2, and the parade's at 5. Take a schedule!",
                textZh: "欢迎来节日！今天活动很满——中午开始有音乐，到处都是吃的，2点手工工作坊，5点游行。拿个时间表！",
                actionHint: "packed day = 排得很满的一天",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "The craft workshop sounds fun! Do I need to sign up in advance?",
            textZh: "手工工作坊听起来很有趣！需要提前报名吗？",
            casualVersion: "Craft workshop sounds fun! Gotta sign up beforehand?",
            commonMistake: {
              wrong: "Do I need sign up in advance?",
              correct: "Do I need to sign up in advance?",
              explanation: "'need' 后接动词原形时，通常需要加 'to'。",
            },
            formalityVariants: {
              casual: "Craft workshop sounds fun! Gotta sign up beforehand?",
              standard: "The craft workshop sounds fun! Do I need to sign up in advance?",
              formal: "The craft workshop sounds most appealing. Is pre-registration required for participation?",
            },
          },
          {
            speaker: "them",
            role: "志愿者",
            textEn:
              "Just show up at the craft tent — it's first come, first served. Today they're making flower crowns and tie-dye T-shirts. Materials are all free!",
            textZh: "直接去手工帐篷就好——先到先得。今天做花冠和扎染T恤。材料全部免费！",
            casualVersion: "Just hit up the craft tent — it's first-come, first-served. Making flower crowns and tie-dye tees today. Materials are all free!",
            culturalNote: "“first-come, first-served”是一个常用短语。",
            formalityVariants: {
              casual: "Just go to the craft tent — first-come, first-served. We're doing flower crowns and tie-dye tees. Free materials!",
              standard: "Just show up at the craft tent — it's first-come, first-served. Today we're making flower crowns and tie-dye T-shirts. All materials are free!",
              formal: "You may proceed directly to the craft tent; participation is on a first-come, first-served basis. Today's activities include crafting flower crowns and tie-dye T-shirts. All necessary materials are provided at no charge.",
            },
            keyPhrases: [
              { en: "first come, first served", zh: "先到先得" },
              { en: "flower crowns", zh: "花冠" },
              { en: "tie-dye", zh: "扎染" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No sign-up needed — just head to the craft tent. It's first come, first served. They're doing flower crowns and tie-dye today. Everything's free!",
                textZh: "不用报名——直接去手工帐篷就行。先到先得。今天做花冠和扎染。全部免费！",
                actionHint: "no sign-up needed = 不用报名",
                frequency: "common",
              },
              {
                textEn:
                  "Nope, just walk right in! The craft tent's open to everyone — first come, first served. Today it's flower crowns and tie-dye tees, and all the materials are on us.",
                textZh: "不用，直接去就好！手工帐篷对所有人开放——先到先得。今天做花冠和扎染T恤，所有材料免费。",
                actionHint: "on us = 我们请/免费",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's awesome. Where's the best spot to watch the parade?",
            textZh: "太棒了。看游行哪个位置最好？",
            casualVersion: "Awesome. Best spot for the parade?",
            commonMistake: {
              wrong: "Which place is best to watch the parade?",
              correct: "What's the best spot to watch the parade?",
              explanation: "询问“地点”时，用 What's the best spot/place 更自然。",
            },
            formalityVariants: {
              casual: "Awesome. Best spot for the parade?",
              standard: "That's great. What's the best spot to watch the parade?",
              formal: "That's wonderful. Could you recommend the optimal viewing location for the parade?",
            },
            culturalNote: "参加节日庆典时，提前了解最佳观看位置很重要。到得早才能占到好位置，可以带折叠椅或野餐毯。",
          },
          {
            speaker: "them",
            role: "志愿者",
            textEn:
              "I'd recommend the corner of Main Street and Oak Avenue. The floats slow down there for the turn, so you get the best view and photos. Get there by 4:30 to grab a good spot.",
            textZh:
              "我推荐主街和橡树大道的拐角。花车在那里转弯会减速，您可以看到最好的景色和拍照。4:30之前到那里占个好位置。",
            casualVersion: "I'd say the corner of Main and Oak. Floats slow down for the turn there, so you get the best views and pics. Head over by 4:30 to grab a good spot.",
            culturalNote: "“Main Street”和“Oak Avenue”是美国城镇常见的街道名。",
            formalityVariants: {
              casual: "Corner of Main and Oak's best. Floats slow down there for turns, good for photos. Get there by 4:30 for a spot.",
              standard: "I recommend the corner of Main Street and Oak Avenue. The floats slow down there when they turn, offering you the best views and photo opportunities. Get there by 4:30 to secure a good spot.",
              formal: "I would suggest the intersection of Main Street and Oak Avenue. The parade floats typically decelerate at that corner for the turn, which provides excellent viewing and photographic prospects. Kindly ensure your arrival by 4:30 PM to secure a favorable position.",
            },
            keyPhrases: [
              { en: "floats", zh: "花车" },
              { en: "grab a good spot", zh: "占个好位置" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Best spot is the corner of Main and Oak — the floats have to slow down for the turn there, so you get an amazing view. Show up by 4:30 to snag a good spot.",
                textZh: "最好的位置是主街和橡树路的拐角——花车在那转弯得减速，视野超好。4:30前到那占个好位置。",
                actionHint: "snag = grab 抢到/占到",
                frequency: "common",
              },
              {
                textEn:
                  "Head to where Main Street meets Oak Avenue. The floats come around the corner there and slow right down — perfect for photos. I'd get there around 4:30.",
                textZh: "去主街和橡树大道交叉口。花车在那拐弯会减速——拍照绝佳。建议4:30左右到。",
                actionHint: "where...meets... = ...和...交叉的地方",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks for all the tips! One more thing — is there parking nearby?",
            textZh: "谢谢你的建议！还有一件事——附近有停车场吗？",
            casualVersion: "Thanks for the tips! Oh, one more thing — got parking nearby?",
            commonMistake: {
              wrong: "Thanks for your suggestions!",
              correct: "Thanks for the tips!",
              explanation: "“tips” 在口语中比 “suggestions” 更常用，表示有用的建议。",
            },
            formalityVariants: {
              casual: "Thanks for the tips! Oh, one more thing — got parking nearby?",
              standard: "Thanks for all the tips! One more thing — is there parking nearby?",
              formal: "Thank you for all of your helpful suggestions! Additionally, I was wondering if there is any parking available in the vicinity?",
            },
          },
          {
            speaker: "them",
            role: "志愿者",
            textEn:
              "The lot on 5th Street is free today for festival visitors. There's also a free shuttle running from the train station every 15 minutes. Have a wonderful time at the festival!",
            textZh: "第5街的停车场今天对节日游客免费。火车站也有免费接驳车每15分钟一班。祝您在节日上玩得开心！",
            casualVersion: "The 5th Street lot's free for festival folks today. Plus, there's a free shuttle from the train station every 15 mins. Have fun at the festival!",
            culturalNote: "“Enjoy the festival!”是很常见的道别语，表示祝愿。",
            formalityVariants: {
              casual: "5th Street lot's free. Free shuttle from the train station every 15. Enjoy!",
              standard: "The lot on 5th Street is free today for festival visitors. There's also a free shuttle service from the train station every 15 minutes. Enjoy the festival!",
              formal: "The parking facility situated on 5th Street is complimentary for festival attendees today. Furthermore, a free shuttle service operates from the train station at 15-minute intervals. We sincerely hope you thoroughly enjoy the festival!",
            },
            keyPhrases: [
              { en: "free shuttle", zh: "免费接驳车" },
              { en: "parking lot", zh: "停车场" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "There's free parking on 5th Street for festival-goers today. Or you can take the free shuttle from the train station — it comes every 15 minutes. Have a great time!",
                textZh: "今天5街有免费停车给节日游客。也可以坐火车站的免费接驳车——每15分钟一班。玩得开心！",
                actionHint: "festival-goers = 节日参加者",
                frequency: "common",
              },
              {
                textEn:
                  "The 5th Street parking lot is complimentary today. There's also a shuttle from the train station every 15 minutes — totally free. Enjoy the festival!",
                textZh: "5街停车场今天免费。火车站也有每15分钟一班的接驳车——完全免费。享受节日吧！",
                actionHint: "complimentary = free 免费的（更正式的说法）",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 跳蚤市场 ====================
  {
    id: "entertainment-flea-market",
    category: "entertainment",
    titleZh: "跳蚤市场",
    titleEn: "Flea Market",
    description: "在跳蚤市场淘宝、讨价还价、了解物品故事",
    otherRole: "摊位商家",
    otherRoleIcon: "🛍️",
    flows: [
      {
        id: "flea-market-bargaining",
        titleZh: "跳蚤市场淘宝",
        titleEn: "Flea Market Bargaining",
        description: "在跳蚤市场逛摊位、砍价并购买物品",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, this vintage camera looks interesting. How much are you asking for it?",
            textZh: "你好，这台复古相机看起来挺有意思。你要多少钱？",
            commonMistake: {
              wrong: "How much money for this?",
              correct: "How much are you asking for it?",
              explanation: "直接问 \"How much money?\" 听起来不太自然，用 \"How much is it?\" 或 \"How much are you asking for it?\" 更地道。",
            },
            formalityVariants: {
              casual: "Hey, this vintage camera's cool. How much for it?",
              standard: "Hi, this vintage camera looks interesting. How much are you asking for it?",
              formal: "Good morning/afternoon, I find this vintage camera quite appealing. May I inquire about its price?",
            },
            casualVersion: "Hey, how much for this old camera?",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "That's a beauty! It's a 1970s Polaroid in working condition. I'm asking $45 for it.",
            textZh: "那台很美！是1970年代的宝丽来，还能用。我要45美元。",
            casualVersion: "That's a beauty! It's a '70s Polaroid, still works. Asking 45.",
            commonMistake: {
              wrong: "My price is $45.",
              correct: "I'm asking $45 for it.",
              explanation: "\"My price is...\" 不太自然，用 \"I'm asking...\" 或 \"It's...\" 更常用。",
            },
            formalityVariants: {
              casual: "Gorgeous, right? '70s Polaroid, still good. I want 45.",
              standard: "That's a beauty! It's a 1970s Polaroid, and it still works. I'm asking $45 for it.",
              formal: "Indeed, it is quite a striking piece. This is a fully functional 1970s Polaroid camera. My asking price is $45.",
            },
            keyPhrases: [
              { en: "vintage", zh: "复古的" },
              { en: "working condition", zh: "还能用" },
              { en: "I'm asking", zh: "我要价" },
            ],
            alternativeExpressions: [
              {
                textEn: "Oh, that's a good eye! It's a '70s Polaroid, still works. I've got it marked at $45.",
                textZh: "哦，你眼光不错！70年代的宝丽来，还能用。我标价45美元。",
                actionHint: "good eye = 好眼光, marked at = 标价",
                frequency: "common",
              },
              {
                textEn: "That one's a gem! Original 1970s Polaroid, fully functional. Looking to get $45 for it.",
                textZh: "那台是好东西！正宗1970年代宝丽来，完全能用。想卖45美元。",
                actionHint: "gem = 宝贝/好东西, looking to get = 想要/打算卖",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "It's nice, but $45 is a bit steep for me. Would you take $30?",
            textZh: "挺好的，但45美元对我来说有点贵。30美元可以吗？",
            casualVersion: "It's cool, but 45's kinda high for me. How about 30?",
            commonMistake: {
              wrong: "Too expensive. Can you $30?",
              correct: "It's a bit steep for me. Would you consider $30?",
              explanation: "直接说 \"Too expensive\" 不礼貌。\"Can you $30?\" 语法错误，用 \"Would you consider...\" 更委婉。",
            },
            formalityVariants: {
              casual: "It's cool, but 45's kinda high for me. How about 30?",
              standard: "It's nice, but $45 is a bit steep for me. Would you consider $30?",
              formal: "While it is indeed a lovely item, $45 is slightly beyond my current budget. Would you be open to an offer of $30?",
            },
            culturalNote: "在跳蚤市场砍价是预期内的行为。通常从标价的60-70%开始出价，但要保持礼貌和微笑。",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn:
              "I could come down a little, but 30 is too low. The film cartridge alone is worth $15. How about $38?",
            textZh: "我可以降一点，但30太低了。光胶片盒就值15美元。38怎么样？",
            casualVersion: "Can drop a bit, but 30's too low. Film alone's 15. How 'bout 38?",
            commonMistake: {
              wrong: "I give you $38.",
              correct: "How about $38?",
              explanation: "\"I give you...\" 听起来不自然，用 \"How about...?\" 或 \"What about...?\" 提出反建议更自然。",
            },
            formalityVariants: {
              casual: "Can drop a bit, but 30's too low. Film alone's 15. How 'bout 38?",
              standard: "I could come down a little, but 30 is too low. The film cartridge alone is worth $15. How about $38?",
              formal: "I am willing to negotiate the price; however, $30 is quite low given its value. The film cartridge itself is valued at $15. Perhaps $38 would be a more equitable offer?",
            },
            keyPhrases: [
              { en: "come down", zh: "降价" },
              { en: "too low", zh: "太低了" },
              { en: "how about", zh: "...怎么样" },
            ],
            alternativeExpressions: [
              {
                textEn: "I can budge a bit, but 30's way too low. The film alone runs you $15. Meet me at $38?",
                textZh: "我可以松动一点，但30太低了。光胶片就要15美元。38块行吗？",
                actionHint: "budge = 让步/松动, meet me at = 折中到这个价",
                frequency: "common",
              },
              {
                textEn:
                  "I hear ya, but I can't go that low. That film cartridge costs $15 by itself. Tell you what — $38, and that's a fair deal.",
                textZh: "我理解，但不能那么低。光那个胶片盒本身就值15美元。这样吧——38美元，很公道了。",
                actionHint: "I hear ya = 我理解你, tell you what = 这样吧",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "If you throw in that leather case, I'll do $38. Deal?",
            textZh: "如果你把那个皮套也加上，我就出38。成交？",
            casualVersion: "If you throw in that leather case, I'll do 38. Deal?",
            commonMistake: {
              wrong: "If you add that leather case, I'll take $38.",
              correct: "If you throw in that leather case, I'll do $38.",
              explanation: "\"throw in\" 是指免费附赠某个物品，比 \"add\" 更地道。",
            },
            formalityVariants: {
              casual: "If you throw in that leather case, I'll do 38. Deal?",
              standard: "If you throw in that leather case, I'll do $38. Deal?",
              formal: "Should you be willing to include the leather case, I would be prepared to accept $38. Do we have an agreement?",
            },
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "Ha, you drive a hard bargain! Alright, you've got yourself a deal. The case is yours too.",
            textZh: "哈，你很会砍价！好吧，成交。皮套也是你的了。",
            casualVersion: "Ha, you drive a hard bargain! Alright, deal. Case is yours too.",
            commonMistake: {
              wrong: "OK, agree. Leather case give you.",
              correct: "Alright, you've got yourself a deal. The leather case is yours too.",
              explanation: "\"agree\" 听起来生硬，\"you've got yourself a deal\" 是更自然的同意方式。",
            },
            formalityVariants: {
              casual: "Ha, you drive a hard bargain! Alright, deal. Case is yours too.",
              standard: "Ha, you drive a hard bargain! Alright, you've got yourself a deal. The leather case is yours too.",
              formal: "Indeed, you are quite the astute negotiator! Very well, we have a mutual agreement. The leather case shall be included as well.",
            },
            keyPhrases: [
              { en: "drive a hard bargain", zh: "很会砍价" },
              { en: "you've got yourself a deal", zh: "成交" },
            ],
            alternativeExpressions: [
              {
                textEn: "Haha, you're a tough negotiator! Fine, deal. I'll throw in the case.",
                textZh: "哈哈，你很会谈！好吧，成交。皮套我送你。",
                actionHint: "throw in = 附送/赠送",
                frequency: "common",
              },
              {
                textEn: "You're killing me! Alright, alright — $38 with the case. You got it.",
                textZh: "你要了我的命了！好好好——38美元连皮套。成交。",
                actionHint: "you're killing me = 你要了我的命（夸张地说利润太低）",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks! Do you have any other vintage items I should look at?",
            textZh: "谢谢！你还有什么其他复古物品值得看看的吗？",
            casualVersion: "Thanks! Got any other cool vintage stuff I should check out?",
            commonMistake: {
              wrong: "What else do you have?",
              correct: "Do you have any other vintage items I should look at?",
              explanation: "\"What else do you have?\" 比较直接，\"any other items I should look at?\" 更委婉自然。",
            },
            formalityVariants: {
              casual: "Thanks! Got any other cool vintage stuff I should check out?",
              standard: "Thanks! Do you have any other vintage items I should look at?",
              formal: "Thank you! Might you have any other noteworthy vintage items that warrant my attention?",
            },
          },
          {
            speaker: "them",
            role: "摊主",
            textEn:
              "Check out the vinyl records in that crate — I've got some rare jazz albums. And if you like jewelry, my wife's booth is two rows over. She's got some beautiful mid-century pieces.",
            textZh:
              "看看那个箱子里的黑胶唱片——有一些稀有的爵士专辑。如果你喜欢首饰，我太太的摊位在隔两排。她有一些很漂亮的世纪中期风格的饰品。",
            casualVersion: "Check out the vinyls in that crate — got some rare jazz albums. If you're into jewelry, my wife's stall's two rows over. She's got some cool mid-century stuff.",
            commonMistake: {
              wrong: "My wife's stall is in two rows.",
              correct: "My wife's stall is two rows over.",
              explanation: "\"in two rows\" 听起来语法错误，\"two rows over\" 是指隔着两排。",
            },
            formalityVariants: {
              casual: "Check out the vinyls in that crate — got some rare jazz albums. If you're into jewelry, my wife's stall's two rows over. She's got some cool mid-century stuff.",
              standard: "Check out the vinyl records in that crate — I have some rare jazz albums. And if you like jewelry, my wife's stall is two rows over. She has some beautiful mid-century modern pieces.",
              formal: "I highly recommend examining the vinyl records within that particular crate; I possess several rare jazz albums. Furthermore, should you have an appreciation for jewelry, my wife operates a stall situated two aisles away, featuring exquisite mid-century modern pieces.",
            },
            keyPhrases: [
              { en: "vinyl records", zh: "黑胶唱片" },
              { en: "mid-century", zh: "世纪中期风格" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Oh, dig through those vinyls in that crate — there's some killer jazz stuff in there. And my wife sells jewelry two rows down — some gorgeous mid-century stuff.",
                textZh:
                  "翻翻那个箱子里的黑胶——有一些超棒的爵士唱片。我太太在隔两排卖首饰——有些很漂亮的世纪中期风格的东西。",
                actionHint: "dig through = 翻找, killer = 非常棒的, vinyls = vinyl records",
                frequency: "common",
              },
              {
                textEn:
                  "If you're into records, there's some rare jazz vinyls in that bin. Oh, and if jewelry's your thing, my wife's set up two rows that way — beautiful vintage pieces.",
                textZh:
                  "如果你喜欢唱片，那个箱子里有些稀有的爵士黑胶。喜欢首饰的话，我太太的摊在那边隔两排——很漂亮的复古饰品。",
                actionHint: "if...is your thing = 如果你喜欢..., set up = 摆摊",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 水上运动 ====================
  {
    id: "entertainment-water-sports",
    category: "entertainment",
    titleZh: "水上运动",
    titleEn: "Water Sports",
    description: "在海滩或湖边体验水上运动项目",
    otherRole: "教练",
    otherRoleIcon: "🏄",
    flows: [
      {
        id: "water-sports-booking",
        titleZh: "预约水上运动",
        titleEn: "Booking Water Sports",
        description: "在海滩预约水上运动项目并了解安全须知",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, what water sports do you offer here?",
            textZh: "你好，你们这里有什么水上运动项目？",
            casualVersion: "Hey, what kinda water sports ya got here?",
            commonMistake: {
              wrong: "What water sports do you have?",
              correct: "What water sports do you offer?",
              explanation: "在询问服务时，'offer' 比 'have' 更自然、地道，尤其是在商业语境中。",
            },
            formalityVariants: {
              casual: "Hey, what kinda water sports ya got?",
              standard: "Hi, what water sports do you offer here?",
              formal: "Good morning/afternoon, could you please tell me what water sports activities are available at this location?",
            },
          },
          {
            speaker: "them",
            role: "教练",
            textEn:
              "We've got kayaking, paddleboarding, jet skiing, and parasailing. For beginners, I'd recommend kayaking or paddleboarding — they're easy to pick up.",
            textZh: "我们有皮划艇、桨板、摩托艇和拖伞。初学者的话我推荐皮划艇或桨板——容易上手。",
            casualVersion: "We got kayaking, paddleboarding, jet skis, and parasailing. Beginners? I'd say kayaking or paddleboarding—super easy to pick up.",
            formalityVariants: {
              casual: "Got kayaking, paddleboarding, jet skis, parasailing. Beginners? Kayaking or paddleboarding are easy.",
              standard: "We have kayaking, paddleboarding, jet skis, and parasailing. For beginners, I recommend kayaking or paddleboarding – they're easy to pick up.",
              formal: "Our establishment offers a selection of water sports activities, including kayaking, paddleboarding, jet skiing, and parasailing. For individuals new to these activities, I would highly recommend commencing with either kayaking or paddleboarding, as they are relatively straightforward to learn.",
            },
            keyPhrases: [
              { en: "kayaking", zh: "皮划艇" },
              { en: "paddleboarding", zh: "桨板" },
              { en: "jet skiing", zh: "摩托艇" },
              { en: "parasailing", zh: "拖伞" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We do kayaks, paddleboards, jet skis, and parasailing. If you're new to this, kayaking or paddleboarding is the way to go — super easy to learn.",
                textZh: "我们有皮划艇、桨板、摩托艇和拖伞。如果你是新手，皮划艇或桨板最合适——特别容易学。",
                actionHint: "the way to go = 最好的选择",
                frequency: "common",
              },
              {
                textEn:
                  "We offer kayaking, stand-up paddleboarding, jet skis, and parasailing. For a first-timer, I'd say start with a kayak or a paddleboard — you'll get the hang of it in no time.",
                textZh: "我们提供皮划艇、站立式桨板、摩托艇和拖伞。第一次的话，我建议先试皮划艇或桨板——很快就能学会。",
                actionHint: "get the hang of it = 掌握窍门, in no time = 很快",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Paddleboarding sounds fun! How much is it, and do I need any experience?",
            textZh: "桨板听起来很有趣！多少钱，需要有经验吗？",
            casualVersion: "Paddleboarding sounds fun! How much is it, and do I need experience?",
            formalityVariants: {
              casual: "Paddleboarding sounds fun! How much is it, and do I need experience?",
              standard: "Paddleboarding sounds fun! How much is it, and do I need any experience?",
              formal: "Paddleboarding sounds like an enjoyable activity. Could you please inform me of the cost, and whether prior experience is a prerequisite?",
            },
          },
          {
            speaker: "them",
            role: "教练",
            textEn:
              "It's $35 for an hour, including a quick 10-minute lesson. No experience needed at all. I'll teach you how to balance, paddle, and get back on if you fall off.",
            textZh:
              "一小时35美元，包含一个10分钟的快速教学。完全不需要经验。我会教你怎么平衡、划桨，还有掉下去怎么上来。",
            casualVersion: "It's $35 an hour, includes a quick 10-min lesson. No experience needed at all. I'll teach ya how to balance, paddle, and get back on if you fall off.",
            formalityVariants: {
              casual: "It's $35/hr, includes a quick 10-min lesson. No experience needed. I'll show you how to balance, paddle, and get back on.",
              standard: "It's $35 an hour, including a 10-minute quick lesson. No experience is needed at all. I'll teach you how to balance, paddle, and how to get back on if you fall off.",
              formal: "The rate is $35 per hour, which encompasses a complimentary 10-minute introductory lesson. No prior experience is required whatsoever. I will provide comprehensive instruction on balance, paddling techniques, and safe re-entry procedures in the event of a dismount.",
            },
            keyPhrases: [
              { en: "balance", zh: "平衡" },
              { en: "paddle", zh: "划桨" },
              { en: "fall off", zh: "掉下去" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "35 bucks an hour, and that comes with a quick 10-minute intro. Zero experience required. I'll show you how to stay up, paddle, and climb back on if you take a tumble.",
                textZh: "35块一小时，包含10分钟入门教学。零经验要求。我教你怎么站稳、划桨，摔了怎么爬回去。",
                actionHint: "take a tumble = fall off 摔下去",
                frequency: "common",
              },
              {
                textEn:
                  "It's $35 for the hour with a mini lesson upfront — about 10 minutes. You don't need to know anything. I'll get you balancing, paddling, and back up if you wipe out.",
                textZh: "一小时35美元，先上个大约10分钟的迷你课。什么都不用会。我教你平衡、划桨，掉了怎么上来。",
                actionHint: "wipe out = 摔倒/落水, upfront = 提前/一开始",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Is it safe? I'm not the strongest swimmer.",
            textZh: "安全吗？我游泳不是很好。",
            casualVersion: "It safe? My swimming's not great.",
            commonMistake: {
              wrong: "My swimming not good.",
              correct: "I'm not a very good swimmer.",
              explanation: "表达“游泳不好”时，'I'm not a very good swimmer' 更自然地道。",
            },
            formalityVariants: {
              casual: "It safe? My swimming's not great.",
              standard: "Is it safe? I'm not a very good swimmer.",
              formal: "May I inquire about the safety protocols? I must disclose that my swimming proficiency is rather limited.",
            },
            culturalNote: "参加水上运动时一定要如实告知教练自己的游泳水平。教练会提供救生衣 life jacket，安全第一。",
          },
          {
            speaker: "them",
            role: "教练",
            textEn:
              "Absolutely safe. You'll wear a life jacket the whole time, and I'll be right there on the water with you. We stay in the calm bay area — no big waves or currents.",
            textZh: "绝对安全。全程穿救生衣，我会在水上一直陪着你。我们待在平静的海湾区域——没有大浪和水流。",
            casualVersion: "Totally safe. You'll wear a life vest the whole time, and I'll be right there with ya. We'll stick to the calm bay area—no big waves or currents.",
            formalityVariants: {
              casual: "Totally safe. You'll wear a life vest the whole time, I'll be with ya. We'll stick to the calm bay, no big waves or currents.",
              standard: "Absolutely safe. You'll be wearing a life vest the entire time, and I'll be with you on the water. We'll stay in the calm bay area – no big waves or currents.",
              formal: "It is entirely safe. You will be provided with and required to wear a life vest throughout the duration of the activity, and I will be present with you on the water. We shall remain within the protected bay area, which is devoid of significant waves or strong currents.",
            },
            keyPhrases: [
              { en: "life jacket", zh: "救生衣" },
              { en: "calm bay", zh: "平静的海湾" },
              { en: "currents", zh: "水流" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Super safe. You'll have a life vest on the whole time, and I'll be right next to you out there. We stick to the protected bay — nice and calm, no surf.",
                textZh: "非常安全。全程穿救生衣，我在外面一直在你旁边。我们待在有保护的海湾——很平静，没有浪。",
                actionHint: "life vest = life jacket 救生衣, surf = 浪",
                frequency: "common",
              },
              {
                textEn:
                  "Totally safe, don't worry. Life jacket on at all times, and I'm right there with you. The bay's really sheltered — flat water, no waves, no current.",
                textZh: "完全安全，别担心。救生衣全程穿着，我就在你旁边。海湾很受保护——水面平静，没浪没水流。",
                actionHint: "sheltered = 受保护的/有遮蔽的, flat water = 平静的水面",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, I'll try it! Should I leave my phone and wallet somewhere?",
            textZh: "好的，我试试！我的手机和钱包应该放在哪？",
            casualVersion: "Cool, I'll try it! Where should I put my phone 'n' wallet?",
            formalityVariants: {
              casual: "Cool, I'll try it! Where should I put my phone 'n' wallet?",
              standard: "Great, I'll try it! Where should I put my phone and wallet?",
              formal: "Excellent, I would like to proceed with this activity. Could you please advise me on where I may secure my mobile phone and wallet?",
            },
          },
          {
            speaker: "them",
            role: "教练",
            textEn:
              "We have a dry locker right here — it's free for customers. Put your valuables in there. And put on some waterproof sunscreen before we head out. Ready to hit the water?",
            textZh: "我们这里有防水储物柜——对客人免费。把贵重物品放进去。出发前抹点防水防晒霜。准备好下水了吗？",
            casualVersion: "Got a dry locker right here — it's free for guests. Chuck your valuables in there. Slap on some waterproof sunscreen before we go. Ready to hit the water?",
            culturalNote: "防水储物柜这类设施在美国水上活动中很常见",
            formalityVariants: {
              casual: "Got a dry locker right here — free for guests. Chuck your valuables in. Slap on some waterproof sunscreen. Ready to hit the water?",
              standard: "We have a dry locker right here — it's free for guests. Put your valuables in there. Apply some waterproof sunscreen before we go. Ready to get in the water?",
              formal: "We provide a complimentary dry locker facility immediately accessible for our guests. Please deposit any valuable personal belongings there. I recommend applying a waterproof sunscreen prior to embarking. Are you prepared to enter the water?",
            },
            keyPhrases: [
              { en: "dry locker", zh: "防水储物柜" },
              { en: "waterproof sunscreen", zh: "防水防晒霜" },
              { en: "hit the water", zh: "下水" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "There's a locker right here, no charge. Stash your phone and wallet in there. Oh, and slap on some waterproof sunscreen before we go. Let's do this!",
                textZh: "这里有个柜子，免费。手机钱包放进去。出发前抹点防水防晒。走吧！",
                actionHint: "stash = 藏好/放好, slap on = 快速涂上",
                frequency: "common",
              },
              {
                textEn:
                  "Lock your stuff up in our dry locker — it's complimentary. Make sure you've got waterproof sunscreen on, the sun's no joke out there. Ready to get out on the water?",
                textZh: "东西锁在我们的防水柜里——免费的。确保抹了防水防晒，外面太阳很猛。准备好下水了吗？",
                actionHint: "no joke = 不是开玩笑的/很厉害",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 徒步 ====================
  {
    id: "entertainment-hiking-safety",
    category: "entertainment",
    titleZh: "徒步",
    titleEn: "Hiking",
    description: "在国外参加徒步活动、了解路线和安全须知",
    otherRole: "公园护林员",
    otherRoleIcon: "🥾",
    flows: [
      {
        id: "hiking-trail-info",
        titleZh: "徒步路线咨询",
        titleEn: "Trail Information",
        description: "在游客中心咨询徒步路线和注意事项",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Good morning. I'm looking for a moderate hiking trail — something scenic but not too difficult.",
            textZh: "早上好。我想找一条中等难度的徒步路线——风景好但不要太难。",
            casualVersion: "Morning. Lookin' for a moderate hike – somethin' scenic but not too hard.",
            commonMistake: {
              wrong: "I want to find a moderate trail",
              correct: "I'm looking for a moderate trail",
              explanation: "“I want” 听起来太直接，\"I'm looking for\" 或 \"I'd like\" 更自然礼貌。",
            },
            formalityVariants: {
              casual: "Morning. Lookin' for a moderate hike – scenic but not too hard.",
              standard: "Good morning. I'm looking for a moderate hiking trail – scenic but not too difficult.",
              formal: "Good morning. I am seeking a moderate hiking trail that offers scenic views without presenting excessive difficulty.",
            },
          },
          {
            speaker: "them",
            role: "护林员",
            textEn:
              "I'd recommend the Lakeside Loop Trail. It's 5 miles round trip, takes about three hours, and has stunning views of the lake and mountains. Elevation gain is around 600 feet.",
            textZh: "我推荐湖畔环线。往返5英里，大约三小时，可以看到湖和山的绝美风景。海拔爬升约600英尺。",
            casualVersion: "Definitely check out the Lakeside Loop. Five miles round trip, takes 'bout three hours. You'll get awesome lake and mountain views. 'Bout 600 feet elevation gain.",
            formalityVariants: {
              casual: "Definitely check out the Lakeside Loop. Five miles round trip, takes 'bout three hours. You'll get awesome lake and mountain views. 'Bout 600 feet elevation gain.",
              standard: "I recommend the Lakeside Loop. It's 5 miles round trip, about three hours, with stunning views of the lake and mountains. The elevation gain is about 600 feet.",
              formal: "I would highly recommend the Lakeside Loop. It encompasses a 5-mile round trip, typically requiring approximately three hours to complete, and offers truly magnificent panoramic views of both the lake and the surrounding mountains. The cumulative elevation gain is approximately 600 feet.",
            },
            keyPhrases: [
              { en: "round trip", zh: "往返" },
              { en: "elevation gain", zh: "海拔爬升" },
              { en: "stunning views", zh: "绝美风景" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The Lakeside Loop is perfect for what you're looking for. Five miles out and back, about three hours, incredible lake and mountain views. You gain about 600 feet in elevation.",
                textZh: "湖畔环线正好符合你的要求。往返五英里，约三小时，湖和山的景色太美了。海拔升高大约600英尺。",
                actionHint: "out and back = round trip 往返",
                frequency: "common",
              },
              {
                textEn:
                  "Try the Lakeside Loop — it's a solid moderate hike. 5 miles, three-ish hours, gorgeous scenery. Not too much climbing, maybe 600 feet of elevation.",
                textZh: "试试湖畔环线——是很好的中等难度徒步。5英里，大约三小时，风景美极了。爬升不太多，大概600英尺。",
                actionHint: "three-ish = 大约三小时, solid = 很好的/实在的",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds perfect. Is the trail well-marked?",
            textZh: "听起来很合适。路线标记清楚吗？",
            casualVersion: "Sounds perfect. Trail well-marked?",
            commonMistake: {
              wrong: "Is the trail marking clear?",
              correct: "Is the trail well-marked?",
              explanation: "英语用 \"well-marked\" 形容路线有清晰标记，不是 \"marking clear\"。",
            },
            formalityVariants: {
              casual: "Sounds perfect. Trail well-marked?",
              standard: "That sounds perfect. Is the trail well-marked?",
              formal: "That sounds entirely suitable. May I inquire if the trail is clearly marked?",
            },
            culturalNote: "美国国家公园和州立公园的步道通常有颜色标记 trail blazes。跟着同颜色的标记走就不会迷路。",
          },
          {
            speaker: "them",
            role: "护林员",
            textEn:
              "Yes, just follow the blue blazes on the trees. There are trail markers every quarter mile. One thing — there's a river crossing at mile 2 that can be slippery. Wear good shoes.",
            textZh:
              "是的，跟着树上的蓝色标记走。每四分之一英里有一个路标。提醒一下——在第2英里处有一个过河点可能会滑。穿好鞋。",
            casualVersion: "Yeah, just follow the blue blazes on the trees. Markers every quarter mile. Heads up though — river crossing at mile 2's kinda slippery. Wear good shoes.",
            commonMistake: {
              wrong: "Wear shoes good.",
              correct: "Wear good shoes.",
              explanation: "形容词 'good' 在名词 'shoes' 之前。",
            },
            formalityVariants: {
              casual: "Yeah, just follow the blue blazes on the trees. Markers every quarter mile. Heads up though — river crossing at mile 2's kinda slippery. Wear good shoes.",
              standard: "Yes, just follow the blue blazes on the trees. There are trail markers every quarter mile. One thing — there's a river crossing at mile 2 that can be slippery. Wear good shoes.",
              formal: "Indeed, simply follow the blue blazes affixed to the trees. Trail markers are positioned approximately every quarter mile. Please be advised, however, that there is a river crossing at the two-mile mark that may present slippery conditions. Appropriate footwear is strongly recommended.",
            },
            keyPhrases: [
              { en: "blazes", zh: "标记" },
              { en: "trail markers", zh: "路标" },
              { en: "river crossing", zh: "过河点" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep, look for the blue markers on the trees — you can't miss them. Markers every quarter mile. Heads up though, there's a creek crossing around mile 2 that gets a bit slick. Good footwear is a must.",
                textZh:
                  "对，找树上的蓝色标记——很明显。每四分之一英里有标记。不过注意，大约第2英里有个过溪点会有点滑。好鞋是必须的。",
                actionHint: "slick = slippery 滑的, creek = 小河/溪",
                frequency: "common",
              },
              {
                textEn:
                  "Well-marked — just follow the blue blazes. There's signs every quarter mile so you'll always know where you are. Watch out at mile 2 though, the river crossing can be tricky when it's wet.",
                textZh:
                  "标记很清楚——跟蓝色标记走。每四分之一英里有指示牌所以你一直能知道自己在哪。不过第2英里小心，过河点潮湿时不太好走。",
                actionHint: "tricky = 不太好走/有点难",
                frequency: "common",
              },
            ],
          },
          { speaker: "you", textEn: "Should I bring anything specific?", textZh: "我需要带什么特别的东西吗？",
            casualVersion: "Need to bring anything specific?",
            formalityVariants: {
              casual: "Need to bring anything specific?",
              standard: "Should I bring anything specific?",
              formal: "Are there any specific items I should consider bringing?",
            },
          },
          {
            speaker: "them",
            role: "护林员",
            textEn:
              "Bring at least two liters of water, sunscreen, a hat, and some snacks. Cell service is spotty up there, so download the trail map on your phone before you go. And always tell someone your plan.",
            textZh:
              "至少带两升水、防晒霜、帽子和一些零食。上面手机信号不稳定，出发前在手机上下载好步道地图。而且一定要告诉别人你的计划。",
            casualVersion: "Bring at least two liters of water, sunscreen, a hat, and snacks. Cell service is spotty up there, so download the map on your phone before you go. Always tell someone your plan.",
            culturalNote: "告知他人在美户外活动很重要",
            commonMistake: {
              wrong: "Tell someone your plan always.",
              correct: "Always tell someone your plan.",
              explanation: "副词 \"always\" 通常放在动词 \"tell\" 之前。",
            },
            formalityVariants: {
              casual: "Bring at least two liters of water, sunscreen, a hat, and snacks. Cell service is spotty up there, so download the map on your phone before you go. Always tell someone your plan.",
              standard: "Bring at least two liters of water, sunscreen, a hat, and some snacks. Cell service is spotty up there, so download the trail map on your phone before you go. And always tell someone your plan.",
              formal: "Please ensure you carry at least two liters of water, sunscreen, a hat, and some light provisions. Cellular service is quite unreliable in that area, so it is advisable to download the trail map onto your phone prior to your departure. Furthermore, it is imperative to always inform someone of your hiking itinerary.",
            },
            keyPhrases: [
              { en: "cell service", zh: "手机信号" },
              { en: "spotty", zh: "不稳定的" },
              { en: "trail map", zh: "步道地图" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Make sure you've got plenty of water — at least two liters — plus sunscreen, a hat, and some food. Reception's pretty hit or miss up there, so grab the trail map offline. And let somebody know where you're headed.",
                textZh:
                  "确保带够水——至少两升——再加防晒、帽子和吃的。上面信号时有时无，先下载离线地图。告诉别人你去哪。",
                actionHint: "hit or miss = 时有时无/不稳定, headed = 去的方向",
                frequency: "common",
              },
              {
                textEn:
                  "Water's the big one — two liters minimum. Sunscreen, hat, snacks. You won't have great phone signal, so save the map to your phone ahead of time. Oh, and always tell someone your route.",
                textZh:
                  "水是最重要的——至少两升。防晒、帽子、零食。手机信号不太好，提前把地图存到手机上。还有一定告诉别人你的路线。",
                actionHint: "the big one = 最重要的, ahead of time = 提前",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Good advice. What about wildlife? Any bears or snakes?",
            textZh: "好建议。那野生动物呢？有熊或蛇吗？",
            casualVersion: "Good advice. Wildlife? Bears or snakes?",
            commonMistake: {
              wrong: "Good suggestion. How about wildlife?",
              correct: "Good advice. What about wildlife?",
              explanation: "“Good advice” 更常用。\"What about\" 在询问一个话题时更自然。",
            },
            formalityVariants: {
              casual: "Good advice. Wildlife? Bears or snakes?",
              standard: "Good advice. What about wildlife? Any bears or snakes?",
              formal: "That is excellent counsel. Regarding wildlife, should I be aware of any particular species, such as bears or snakes?",
            },
          },
          {
            speaker: "them",
            role: "护林员",
            textEn:
              "Black bears have been spotted in the area. Make noise while hiking and store food in bear canisters. Snakes are rare on this trail. If you see any wildlife, keep your distance and never feed them. Enjoy the hike!",
            textZh:
              "这个区域有人发现过黑熊。徒步时制造声响，食物放在防熊罐里。这条路线上蛇很少见。如果看到野生动物，保持距离，绝对不要喂食。祝徒步愉快！",
            casualVersion: "Black bears've been spotted 'round here. Make noise while you're hiking and keep food in bear canisters. Snakes are rare on this trail. See any wildlife, keep your distance and never feed 'em. Enjoy!",
            culturalNote: "在美喂食野生动物是违法行为",
            commonMistake: {
              wrong: "Never feed them animals.",
              correct: "Never feed them.",
              explanation: "提到 'wildlife' 后，直接用 'them' 指代即可，不需要重复 'animals'。",
            },
            formalityVariants: {
              casual: "Black bears've been spotted 'round here. Make noise while you're hiking and keep food in bear canisters. Snakes are rare on this trail. See any wildlife, keep your distance and never feed 'em. Enjoy!",
              standard: "Black bears have been spotted in the area. Make noise while hiking and store food in bear canisters. Snakes are rare on this trail. If you see any wildlife, keep your distance and never feed them. Enjoy the hike!",
              formal: "It has been reported that black bears are present in this vicinity. It is therefore advisable to generate noise while hiking and to store any food items in designated bear-resistant canisters. Snakes are infrequent along this particular trail. Should you encounter any wildlife, please maintain a respectful distance and under no circumstances offer them food. I hope you thoroughly enjoy your hike.",
            },
            keyPhrases: [
              { en: "black bears", zh: "黑熊" },
              { en: "bear canisters", zh: "防熊罐" },
              { en: "keep your distance", zh: "保持距离" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We've had some black bear sightings recently. Be loud on the trail — talk, clap, whatever — and keep your food in a bear canister. Snakes aren't really an issue here. If you spot anything, give it space and don't feed it. Have a great hike!",
                textZh:
                  "最近有过黑熊目击。在步道上弄出声响——说话、拍手什么的——食物放在防熊罐里。蛇在这不是问题。看到动物给它空间别喂。祝徒步愉快！",
                actionHint: "sightings = 目击, give it space = 给它空间/保持距离",
                frequency: "common",
              },
              {
                textEn:
                  "There are bears in the area, so make plenty of noise and use a bear canister for food. Snakes you don't really need to worry about on this trail. General rule: if you see wildlife, admire from a distance and never feed. Enjoy out there!",
                textZh:
                  "这一带有熊，所以多制造声响，用防熊罐放食物。蛇在这条路上基本不用担心。基本规则：看到野生动物远远欣赏就好，不要喂食。在外面玩得开心！",
                actionHint: "admire from a distance = 远远欣赏",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 钓鱼 ====================
  {
    id: "entertainment-fishing",
    category: "entertainment",
    titleZh: "钓鱼",
    titleEn: "Fishing",
    description: "在国外体验钓鱼、租装备、了解钓鱼规则",
    otherRole: "钓具店老板",
    otherRoleIcon: "🎣",
    flows: [
      {
        id: "fishing-trip",
        titleZh: "钓鱼体验",
        titleEn: "Fishing Trip",
        description: "租赁钓具并了解当地钓鱼规则",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hello, I'd like to go fishing nearby. Where's a good spot?",
            textZh: "你好，我想在附近钓鱼。哪里是好地方？",
            casualVersion: "Hey, wanna fish around here. Where's a good spot?",
            commonMistake: {
              wrong: "Hello, I want to fish around here.",
              correct: "Hello, I'd like to do some fishing around here.",
              explanation: "I want to 听起来有些生硬，用 I'd like to 更礼貌客气。",
            },
            formalityVariants: {
              casual: "Hey, wanna fish around here. Any good spots?",
              standard: "Hello, I'd like to do some fishing around here. Where's a good spot?",
              formal: "Good morning/afternoon, I was hoping to inquire about suitable fishing locations in this vicinity. Could you recommend any good spots?",
            },
          },
          {
            speaker: "them",
            role: "店主",
            textEn:
              "The lake just north of town is great for bass and trout. The pier downtown is good for saltwater fishing. Do you have your own gear or need to rent?",
            textZh: "城北的湖钓鲈鱼和鳟鱼很好。市区的码头适合海钓。您有自己的装备还是需要租？",
            casualVersion: "Lake north of town's good for bass and trout. Downtown pier's for saltwater. Got your own gear or need to rent?",
            formalityVariants: {
              casual: "North lake's good for bass/trout. Downtown pier's for saltwater. Gear or rental?",
              standard: "The lake just north of town is great for bass and trout. The pier downtown is good for saltwater fishing. Do you have your own gear or need to rent?",
              formal: "The freshwater lake located north of the township offers excellent opportunities for bass and trout. Alternatively, the municipal pier provides an optimal location for saltwater fishing. May I inquire if you possess your own equipment, or if you require rental services?",
            },
            keyPhrases: [
              { en: "bass", zh: "鲈鱼" },
              { en: "trout", zh: "鳟鱼" },
              { en: "pier", zh: "码头" },
              { en: "gear", zh: "装备" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For freshwater, the lake up north is your best bet — tons of bass and trout. Or if you want saltwater, the downtown pier is solid. You got your own stuff or need to rent?",
                textZh:
                  "淡水的话城北的湖是最好的选择——很多鲈鱼和鳟鱼。想海钓的话市区码头不错。你有自己的装备还是要租？",
                actionHint: "your best bet = 最好的选择, solid = 很好的/靠谱的",
                frequency: "common",
              },
              {
                textEn:
                  "The lake north of here is where the bass and trout are biting. Downtown pier's great for saltwater stuff. Did you bring gear, or do you need to get set up?",
                textZh: "城北的湖鲈鱼和鳟鱼在咬钩。市区码头海钓很好。你自己带装备了还是要准备一套？",
                actionHint: "biting = 在咬钩/容易上钩, get set up = 准备好装备",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll need to rent everything. What do you have for a beginner?",
            textZh: "我需要全部租。有适合初学者的吗？",
            casualVersion: "Yeah, I'll need to rent everything. Got anything for beginners?",
            commonMistake: {
              wrong: "I need rent everything. Do you have suitable for beginners?",
              correct: "I'll need to rent everything. Do you have anything suitable for beginners?",
              explanation: "need 后跟动词需加 to。 suitable for beginners 前加 anything 更自然。",
            },
            formalityVariants: {
              casual: "Yeah, I'll need to rent everything. Got anything for beginners?",
              standard: "I'll need to rent everything. Do you have anything suitable for beginners?",
              formal: "I will require a complete rental package. Do you offer any equipment suitable for novice individuals?",
            },
            culturalNote:
              "在美国大多数州钓鱼需要钓鱼证 fishing license。短期游客可以买一日证或一周证，通常在钓具店就能办理。",
          },
          {
            speaker: "them",
            role: "店主",
            textEn:
              "I'll set you up with a basic rod and reel, tackle box with hooks and sinkers, and some live bait. Full-day rental is $25. You'll also need a fishing license — I can sell you a one-day pass for $15.",
            textZh:
              "我给您准备一套基础鱼竿和渔线轮、带鱼钩和铅坠的工具箱，还有一些活饵。全天租赁25美元。您还需要钓鱼证——我可以卖给您一日证15美元。",
            casualVersion: "Okay, I can set you up with a basic rod, reel, tackle box (hooks, sinkers), and some live bait. $25 for the day. You'll also need a license—I can sell you a day pass for $15.",
            culturalNote: "在美国钓鱼需要执照，通常按天/年购买。",
            formalityVariants: {
              casual: "Alright, I'll hook you up with a basic rod, reel, tackle, and live bait. $25 for the day. And you'll need a license—I can do a $15 day one.",
              standard: "I can set you up with a basic rod and reel, a tackle box with hooks and sinkers, and some live bait. It's $25 for a full day's rental. You'll also need a fishing license—I can sell you a one-day license for $15.",
              formal: "I am able to provide you with a fundamental fishing rod and reel, a tackle box containing hooks and sinkers, and an allotment of live bait. The full-day rental fee for this equipment is $25. Additionally, a fishing license is mandatory; I can issue you a one-day permit for $15.",
            },
            keyPhrases: [
              { en: "rod and reel", zh: "鱼竿和渔线轮" },
              { en: "tackle box", zh: "工具箱" },
              { en: "live bait", zh: "活饵" },
              { en: "fishing license", zh: "钓鱼证" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I'll get you all set — rod, reel, tackle box with hooks and weights, plus some live bait. That's $25 for the day. Oh, and you'll need a license — I can do a day pass for $15.",
                textZh:
                  "我帮你全部准备好——鱼竿、渔线轮、带鱼钩和铅坠的工具箱，加活饵。全天25美元。对了你需要钓鱼证——一日证15美元。",
                actionHint: "weights = sinkers 铅坠, get you all set = 帮你全部准备好",
                frequency: "common",
              },
              {
                textEn:
                  "I'll hook you up with a starter kit — rod, reel, tackle, and live bait. Twenty-five bucks for the day. Don't forget you need a fishing license though — one-day permit is $15, and I've got 'em right here.",
                textZh:
                  "我给你准备一套入门装备——鱼竿、渔线轮、钓具和活饵。全天25块。别忘了你需要钓鱼证——一日许可15美元，这里就能办。",
                actionHint: "hook you up = 帮你准备好（也是钓鱼的双关语）, permit = license 许可证",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take all of that. Are there any rules about what fish I can keep?",
            textZh: "全部要了。有什么关于可以留什么鱼的规定吗？",
            casualVersion: "I'll take it all. Any rules on what fish I can keep?",
            commonMistake: {
              wrong: "All I want. Any rules about what fish can keep?",
              correct: "I'll take it all. Are there any regulations regarding what fish I can keep?",
              explanation: "All I want 不自然，应说 I'll take it all。关于规定常说 rules on/regarding。",
            },
            formalityVariants: {
              casual: "Yeah, I'll take it all. Any rules on what I can keep?",
              standard: "I'll take it all. Are there any regulations regarding what fish I can keep?",
              formal: "I will proceed with the full acquisition. Could you please inform me of any specific regulations concerning the retention of caught fish?",
            },
          },
          {
            speaker: "them",
            role: "店主",
            textEn:
              "Yes — bass must be at least 12 inches to keep, and you're limited to five per day. Trout is catch-and-release only right now. I'll write the limits on a card for you.",
            textZh: "有的——鲈鱼至少12英寸才能带走，每天最多五条。鳟鱼目前只能钓了放回去。我把限制写在一张卡片上给您。",
            casualVersion: "Yeah—bass gotta be 12 inches minimum to keep, five max a day. Trout's catch-and-release only right now. I'll write the limits down for ya.",
            culturalNote: "Catch-and-release 是西方钓鱼常见规范，为保护资源。",
            formalityVariants: {
              casual: "Yep, bass gotta be 12in+ to keep, 5 max/day. Trout's just C&R. I'll write that down.",
              standard: "Yes — bass must be at least 12 inches to keep, and you can only keep five per day. Trout are currently catch-and-release only. I'll write the limits on a card for you.",
              formal: "Affirmative. Bass must meet a minimum length requirement of 12 inches for retention, with a daily limit of five specimens. Trout, however, are presently subject to a strict catch-and-release policy. I shall document these regulations on a card for your reference.",
            },
            keyPhrases: [
              { en: "catch-and-release", zh: "钓了放回去" },
              { en: "size limit", zh: "尺寸限制" },
              { en: "daily limit", zh: "每日限额" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, for bass you gotta throw back anything under 12 inches, and the limit's five a day. Trout's strictly catch-and-release right now. Here, I'll jot down the rules for you.",
                textZh: "对，鲈鱼12英寸以下得放回去，每天最多留五条。鳟鱼目前必须放回去。我给你记下来。",
                actionHint: "throw back = 放回去, jot down = 快速写下",
                frequency: "common",
              },
              {
                textEn:
                  "Yep, there are limits. Bass has to be 12 inches minimum — five per day max. Trout? Gotta put 'em all back right now, catch-and-release only. I'll write it all down for you.",
                textZh:
                  "是的，有限制。鲈鱼最小12英寸——每天最多五条。鳟鱼？现在全部得放回去，只允许钓了放。我都写给你。",
                actionHint: "put 'em all back = 全部放回去",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Very helpful. Any tips for a first-timer?",
            textZh: "非常有帮助。有什么给新手的建议吗？",
            casualVersion: "Super helpful. Any tips for a newbie?",
            commonMistake: {
              wrong: "Very helpful. Any tips for beginner?",
              correct: "Very helpful. Any tips for a first-timer?",
              explanation: "beginner 是可数名词，前面需要加不定冠词 a。",
            },
            formalityVariants: {
              casual: "Thanks! Any tips for a newbie?",
              standard: "Very helpful. Any tips for a first-timer?",
              formal: "That is most insightful. Do you have any particular recommendations or advice for an individual new to this activity?",
            },
          },
          {
            speaker: "them",
            role: "店主",
            textEn:
              "Go early morning — that's when the fish are most active. Find a shady spot near some rocks or fallen trees — fish love to hide there. And be patient! Some days the fish just aren't biting. Good luck out there!",
            textZh:
              "早上早点去——那时候鱼最活跃。找一个靠近岩石或倒树的阴凉处——鱼喜欢藏在那里。还有要有耐心！有时候鱼就是不上钩。祝您好运！",
            casualVersion: "Go early, fish are most active then. Look for shade near rocks or downed trees, they hide there. And gotta be patient! Sometimes they just ain't biting. Good luck!",
            commonMistake: {
              wrong: "Go early morning. That time fish most active.",
              correct: "Go early morning — that's when the fish are most active.",
              explanation: "that time 前需加连词或介词，that's when 更自然流畅。",
            },
            formalityVariants: {
              casual: "Hit it early, fish are active then. Shade by rocks or trees, they hide. Be patient! Sometimes they don't bite. Good luck!",
              standard: "Go early morning — that's when the fish are most active. Find a shady spot near rocks or fallen trees — fish like to hide there. And be patient! Sometimes the fish just aren't biting. Good luck!",
              formal: "I recommend commencing your activity during the early morning hours, as this period typically exhibits the highest level of fish activity. Furthermore, seek out shaded areas adjacent to rock formations or submerged timber, as these provide preferred habitats for fish. Patience is also paramount, as fish may not always be actively feeding. I extend my best wishes for your success!",
            },
            keyPhrases: [
              { en: "biting", zh: "上钩/咬钩" },
              { en: "shady spot", zh: "阴凉处" },
              { en: "be patient", zh: "要有耐心" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Hit the water first thing in the morning — the fish are way more active early. Look for shaded areas near rocks or downed trees, that's where they hang out. And don't get discouraged if nothing bites right away — that's fishing! Good luck!",
                textZh:
                  "一大早就去——鱼早上活跃得多。找岩石或倒树附近的阴凉处，鱼喜欢待在那。如果一开始没上钩别灰心——钓鱼就是这样！祝好运！",
                actionHint: "hit the water = 去钓鱼, downed trees = 倒树, hang out = 待着",
                frequency: "common",
              },
              {
                textEn:
                  "Early bird catches the fish, literally! Get out there at sunrise. Fish hang around cover — rocks, logs, anything shady. And just enjoy the peace and quiet. Sometimes they bite, sometimes they don't. That's the beauty of it. Tight lines!",
                textZh:
                  "早起的鸟儿有鱼钓！日出就去。鱼喜欢待在有遮挡的地方——岩石、木头、阴凉处。享受安静就好。有时候鱼上钩有时候不上。这就是钓鱼的魅力。祝紧线！",
                actionHint: "tight lines = 钓鱼者之间的祝福语（祝好运的意思）",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 露营 ====================
  {
    id: "entertainment-camping",
    category: "entertainment",
    titleZh: "露营",
    titleEn: "Camping",
    description: "在国外露营地预约营位、了解设施和规则",
    otherRole: "营地管理员",
    otherRoleIcon: "⛺",
    flows: [
      {
        id: "campsite-checkin",
        titleZh: "营地入住",
        titleEn: "Campsite Check-in",
        description: "在露营地办理入住并了解营地设施和规则",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, we have a reservation for two nights. The name is Li.",
            textZh: "你好，我们预约了两晚。名字是李。",
          },
          {
            speaker: "them",
            role: "管理员",
            textEn:
              "Welcome! I see your reservation — campsite 14, right by the creek. It's a great spot. Do you have your own tent, or do you need to rent one?",
            textZh: "欢迎！我看到您的预约了——14号营位，就在小溪边。那是个好位置。您自带帐篷还是需要租？",
            keyPhrases: [
              { en: "campsite", zh: "营位" },
              { en: "creek", zh: "小溪" },
              { en: "reservation", zh: "预约" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Hey, welcome! Got your reservation right here — site 14, right next to the creek. Nice spot! Did you bring a tent, or do you need one from us?",
                textZh: "嘿，欢迎！你的预约在这——14号营位，紧挨小溪。好位置！你带帐篷了还是需要租一个？",
                actionHint: "site = campsite 营位, got your reservation = 看到你的预约了",
                frequency: "common",
              },
              {
                textEn:
                  "Welcome to the campground! I've got you down for campsite 14, creek-side. You'll love it. Do you have your own tent or will you be renting?",
                textZh: "欢迎来到营地！你的是14号营位，溪边的。你会喜欢的。自带帐篷还是要租？",
                actionHint: "I've got you down for = 你预约的是, creek-side = 溪边的",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "We brought our own tent. What facilities are available?",
            textZh: "我们自带了帐篷。有什么设施？",
          },
          {
            speaker: "them",
            role: "管理员",
            textEn:
              "Each site has a fire pit, a picnic table, and a bear box for food storage. Restrooms and showers are in the building near the parking lot. Showers are coin-operated — 25 cents for 3 minutes.",
            textZh:
              "每个营位有一个火坑、一张野餐桌和一个防熊箱用来存放食物。洗手间和淋浴在停车场附近的建筑里。淋浴是投币的——25美分3分钟。",
            keyPhrases: [
              { en: "fire pit", zh: "火坑" },
              { en: "bear box", zh: "防熊箱" },
              { en: "coin-operated", zh: "投币的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Your site comes with a fire ring, picnic table, and a bear-proof food locker. Bathrooms and showers are in the building by the parking area. Showers take quarters — 25 cents gets you 3 minutes.",
                textZh:
                  "你的营位有火圈、野餐桌和防熊食物柜。洗手间和淋浴在停车区旁边的建筑里。淋浴投25美分硬币用3分钟。",
                actionHint: "fire ring = fire pit 火坑, takes quarters = 投25美分硬币",
                frequency: "common",
              },
              {
                textEn:
                  "Every site's got a fire pit, a table, and a bear box — that's where all your food goes. The restroom and shower building is right by the parking lot. Bring some quarters for the showers, they're 25 cents for 3 minutes.",
                textZh:
                  "每个营位都有火坑、桌子和防熊箱——所有食物都放那里。洗手间和淋浴的建筑就在停车场旁。带些硬币洗澡用，25美分3分钟。",
                actionHint: "bring some quarters = 带些25美分硬币",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Can we have a campfire? And is firewood available?",
            textZh: "我们可以生营火吗？有柴火卖吗？",
            culturalNote:
              "美国很多露营地在干燥季节会实施 fire ban（禁火令）。即使允许生火，也只能在指定的火坑里。千万不要带外地的柴火，可能携带害虫。",
          },
          {
            speaker: "them",
            role: "管理员",
            textEn:
              "Campfires are allowed in the fire pit only. We sell firewood bundles for $8 at the camp store. Important — please don't bring firewood from outside the area to prevent the spread of invasive insects.",
            textZh:
              "只允许在火坑里生营火。我们的营地商店有柴火捆卖8美元一捆。重要提示——请不要从外地带柴火，防止外来害虫传播。",
            keyPhrases: [
              { en: "fire pit", zh: "火坑" },
              { en: "firewood bundles", zh: "柴火捆" },
              { en: "invasive insects", zh: "外来害虫" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Fires are fine, but only in the fire pit. We've got firewood at the store — $8 a bundle. One big rule: don't bring wood from outside. It can carry bugs that aren't native here.",
                textZh:
                  "可以生火，但只能在火坑里。商店有柴火——8美元一捆。一个重要规定：不要从外面带木头。会带来非本地的虫子。",
                actionHint: "bugs = 虫子, native = 本地的",
                frequency: "common",
              },
              {
                textEn:
                  "You can have a campfire — just keep it in the fire ring. Firewood's available at the camp store for 8 bucks. Oh, and super important: buy local wood only. Outside firewood can introduce pests we don't want around here.",
                textZh:
                  "可以生营火——在火圈里就好。营地商店有柴火8块钱。非常重要：只买本地木头。外面的柴火会带来我们不想要的害虫。",
                actionHint: "buy local = 买本地的, pests = 害虫",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Anything else we should know about the rules?",
            textZh: "明白了。还有什么规则我们需要知道的？",
          },
          {
            speaker: "them",
            role: "管理员",
            textEn:
              "Quiet hours are from 10 PM to 6 AM. All food must go in the bear box at night — never leave food in your tent. And pack out everything you bring in. Here's your campsite tag — have a wonderful time in the great outdoors!",
            textZh:
              "安静时间是晚上10点到早上6点。所有食物晚上必须放进防熊箱——绝对不要把食物留在帐篷里。把你们带来的所有东西都带走。这是您的营位标签——祝您在户外玩得开心！",
            keyPhrases: [
              { en: "quiet hours", zh: "安静时间" },
              { en: "pack out", zh: "带走（垃圾等）" },
              { en: "the great outdoors", zh: "户外/大自然" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Keep it down after 10 PM — quiet hours till 6 AM. Food goes in the bear box every night, no exceptions — never in your tent. Leave no trace — take everything out with you. Here's your tag. Enjoy the great outdoors!",
                textZh:
                  "晚上10点后保持安静——安静时间到早上6点。食物每晚放防熊箱，没有例外——绝对不能放帐篷里。不留痕迹——所有东西带走。标签给你。享受大自然吧！",
                actionHint: "keep it down = 保持安静, leave no trace = 不留痕迹（露营原则）",
                frequency: "common",
              },
              {
                textEn:
                  "Quiet time is 10 to 6. Big one: all food in the bear box at night — nothing in the tent, not even a granola bar. And please, pack it in, pack it out. Here's your campsite pass — have an amazing trip!",
                textZh:
                  "安静时段10点到6点。重要的：所有食物晚上放防熊箱——帐篷里什么都不能放，连能量棒都不行。还有请带走所有垃圾。这是你的营位通行证——祝旅途愉快！",
                actionHint: "pack it in, pack it out = 带进来的都带走（露营箴言）, big one = 重要的",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 电影院 ====================
  {
    id: "entertainment-movie-theater",
    category: "entertainment",
    titleZh: "电影院",
    titleEn: "At the Movie Theater",
    description: "在电影院内找座位、买零食、讨论电影",
    otherRole: "影院工作人员",
    otherRoleIcon: "🎬",
    flows: [
      {
        id: "movie-theater-snacks",
        titleZh: "买零食入场",
        titleEn: "Getting Snacks & Finding Seats",
        description: "在影院柜台购买零食并找到自己的座位",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, could I get a medium popcorn and a large Coke?",
            textZh: "你好，我要一个中号爆米花和一杯大可乐。",
            culturalNote: "美国影院零食用 small/medium/large 区分大小，价格通常比外面贵很多。",
            casualVersion: "Hey, medium popcorn and a large Coke, please.",
            commonMistake: {
              wrong: "I want a middle popcorn and a big Coke.",
              correct: "Could I get a medium popcorn and a large Coke?",
              explanation: "尺寸用 'medium/large'，不用 'middle/big'。'Could I get' 比 'I want' 更礼貌。",
            },
            formalityVariants: {
              casual: "Medium popcorn, large Coke, please.",
              standard: "Hi, could I get a medium popcorn and a large Coke?",
              formal: "Good evening. May I please have a medium popcorn and a large Coca-Cola?",
            },
          },
          {
            speaker: "them",
            role: "柜台员工",
            textEn: "Sure thing! Would you like butter on your popcorn? And we have a combo deal — add nachos for just two dollars more.",
            textZh: "没问题！爆米花要加黄油吗？我们有套餐优惠——加两块钱就能加玉米片。",
            casualVersion: "Sure! Butter on the popcorn? Oh and for two bucks more you can throw in nachos.",
            formalityVariants: {
              casual: "Got it! Butter? And hey, two bucks more gets you nachos too.",
              standard: "Sure thing! Would you like butter on your popcorn? And we have a combo deal — add nachos for just two dollars more.",
              formal: "Certainly. Would you care for butter on your popcorn? Additionally, we have a promotional combo — you may add nachos for just two dollars extra.",
            },
            keyPhrases: [
              { en: "butter on your popcorn", zh: "爆米花加黄油" },
              { en: "combo deal", zh: "套餐优惠" },
            ],
            alternativeExpressions: [
              {
                textEn: "You got it. Want butter? We've got a deal going — nachos for two bucks extra if you want.",
                textZh: "收到。要黄油吗？有个优惠——加两块钱可以加玉米片。",
                actionHint: "推荐附加产品，可以接受或拒绝",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes to butter, no thanks on the nachos. Where is Theater 5?",
            textZh: "黄油要的，玉米片不用了。5号厅在哪？",
            culturalNote: "美国人常用 'yes to X, no on Y' 简洁地回复多个选项。",
            casualVersion: "Butter, yeah. Skip the nachos. Where's Theater 5?",
            commonMistake: {
              wrong: "I want butter but I don't want nachos. Theater 5 is where?",
              correct: "Yes to butter, no thanks on the nachos. Where is Theater 5?",
              explanation: "'Yes to / no on' 是简洁地道的表达。问路用 'Where is...' 而不是倒装。",
            },
            formalityVariants: {
              casual: "Butter yeah, no nachos. Where's 5?",
              standard: "Yes to butter, no thanks on the nachos. Where is Theater 5?",
              formal: "I would like butter, please, but I will pass on the nachos. Could you kindly direct me to Theater 5?",
            },
          },
          {
            speaker: "them",
            role: "柜台员工",
            textEn: "Theater 5 is down the hall on your right. Your movie starts in about ten minutes, so you've got plenty of time.",
            textZh: "5号厅沿走廊右手边。你的电影大约十分钟后开始，时间很充裕。",
            casualVersion: "It's down the hall, right side. You've got like ten minutes, no rush.",
            formalityVariants: {
              casual: "Down the hall, right side. Ten minutes till showtime, you're good.",
              standard: "Theater 5 is down the hall on your right. Your movie starts in about ten minutes, so you've got plenty of time.",
              formal: "Theater 5 is located down the corridor to your right. Your screening commences in approximately ten minutes, so there is no need to rush.",
            },
            keyPhrases: [
              { en: "down the hall", zh: "沿走廊" },
              { en: "plenty of time", zh: "时间充裕" },
            ],
            alternativeExpressions: [
              {
                textEn: "Take a right down the hallway, you can't miss it. Show doesn't start for another ten, so you're fine.",
                textZh: "走廊右转，不会错过的。还有十分钟才开演，不急。",
                actionHint: "指路并安慰你不用赶时间",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks! Oh, one more thing — is there a restroom nearby?",
            textZh: "谢谢！哦对了——附近有洗手间吗？",
            culturalNote: "美国说 restroom 或 bathroom，英国说 toilet 或 loo。在公共场所用 restroom 最安全。",
            casualVersion: "Thanks! Quick question — where's the restroom?",
            commonMistake: {
              wrong: "Where is the toilet?",
              correct: "Is there a restroom nearby?",
              explanation: "在美国公共场所用 'restroom' 更得体，'toilet' 太直接。",
            },
            formalityVariants: {
              casual: "Thanks! Hey, where's the bathroom?",
              standard: "Thanks! Oh, one more thing — is there a restroom nearby?",
              formal: "Thank you very much. If I may ask, could you point me to the nearest restroom?",
            },
          },
          {
            speaker: "them",
            role: "柜台员工",
            textEn: "Right next to Theater 5, actually. You'll see the signs. Enjoy the movie!",
            textZh: "就在5号厅旁边。你会看到标识的。祝观影愉快！",
            casualVersion: "Right by Theater 5, actually. Can't miss it. Enjoy!",
            formalityVariants: {
              casual: "It's right there by Theater 5. Have fun!",
              standard: "Right next to Theater 5, actually. You'll see the signs. Enjoy the movie!",
              formal: "The restroom is situated directly adjacent to Theater 5. Signage is clearly posted. I hope you enjoy the film.",
            },
            keyPhrases: [
              { en: "right next to", zh: "就在旁边" },
              { en: "enjoy the movie", zh: "祝观影愉快" },
            ],
            alternativeExpressions: [
              {
                textEn: "It's literally right beside Theater 5. You'll walk right past it. Have a great time!",
                textZh: "就在5号厅正旁边。你会路过的。祝愉快！",
                actionHint: "指路并道别",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "movie-theater-discussion",
        titleZh: "讨论电影",
        titleEn: "Discussing the Movie",
        description: "与朋友或陌生人讨论刚看完的电影",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Wow, that was intense! What did you think of the ending?",
            textZh: "哇，太紧张了！你觉得结局怎么样？",
            culturalNote: "在美国，散场后和旁边的人聊几句是很常见的社交行为。",
            casualVersion: "Dude, that ending though! What'd you think?",
            commonMistake: {
              wrong: "How do you think about the ending?",
              correct: "What did you think of the ending?",
              explanation: "'What did you think of...' 是征求看法的地道表达，不用 'How do you think about'。",
            },
            formalityVariants: {
              casual: "That ending, right?! Thoughts?",
              standard: "Wow, that was intense! What did you think of the ending?",
              formal: "That was quite an experience. I'm curious — what were your thoughts on the conclusion?",
            },
          },
          {
            speaker: "them",
            role: "观众",
            textEn: "I honestly didn't see that twist coming. I thought the villain was going to win for sure. The whole third act had me on the edge of my seat.",
            textZh: "说实话我完全没想到那个反转。我以为反派肯定会赢。整个第三幕让我坐立不安。",
            casualVersion: "No way I saw that twist. Totally thought the bad guy had it. Third act had me freaking out.",
            formalityVariants: {
              casual: "Dude, that twist?! Didn't see it coming at all. The third act was nuts.",
              standard: "I honestly didn't see that twist coming. The whole third act had me on the edge of my seat.",
              formal: "I must admit, the twist was entirely unexpected. The third act was remarkably suspenseful.",
            },
            keyPhrases: [
              { en: "didn't see that twist coming", zh: "没预料到那个反转" },
              { en: "on the edge of my seat", zh: "紧张得坐立不安" },
            ],
            alternativeExpressions: [
              {
                textEn: "That twist blew my mind! I was sure the villain had it in the bag. Super intense finale.",
                textZh: "那个反转太震撼了！我以为反派稳赢了。结局超紧张。",
                actionHint: "表达对剧情的惊叹",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Same here! The special effects were amazing too. That car chase scene was unreal.",
            textZh: "我也是！特效也太棒了。那段飙车戏简直不真实。",
            culturalNote: "'Unreal' 在口语中表示'太棒了/难以置信'，是褒义。",
            casualVersion: "Right?! And those effects — the car chase was insane.",
            commonMistake: {
              wrong: "The special effects were very good. The car chase scene was not real.",
              correct: "The special effects were amazing. That car chase scene was unreal.",
              explanation: "'unreal' 作为俚语表示'太棒了'，不是'不真实'。用 'amazing' 比 'very good' 更生动。",
            },
            formalityVariants: {
              casual: "For real! That car chase was nuts. Effects were top-notch.",
              standard: "Same here! The special effects were amazing too. That car chase scene was unreal.",
              formal: "I share your sentiment entirely. The visual effects were truly remarkable, and the car chase sequence was extraordinary.",
            },
          },
          {
            speaker: "them",
            role: "观众",
            textEn: "Totally. I heard they actually did some of those stunts for real — no CGI. That makes it even more impressive. Have you seen the director's previous films?",
            textZh: "完全同意。我听说有些特技是实拍的——没用特效。这让它更令人印象深刻。你看过这个导演之前的作品吗？",
            casualVersion: "Yeah, apparently some stunts were real — no CGI. Wild, right? Seen the director's other stuff?",
            formalityVariants: {
              casual: "Yeah, some of those stunts were legit real. Crazy. You seen the director's other movies?",
              standard: "I heard they actually did some of those stunts for real — no CGI. Have you seen the director's previous films?",
              formal: "Indeed, I understand that several stunts were performed practically, without digital effects. Are you familiar with the director's earlier body of work?",
            },
            keyPhrases: [
              { en: "stunts", zh: "特技" },
              { en: "CGI", zh: "电脑特效" },
            ],
            alternativeExpressions: [
              {
                textEn: "Word is they did those stunts practically — no computer effects. Pretty impressive. You a fan of this director?",
                textZh: "据说那些特技是实拍的——没用电脑特效。挺厉害的。你喜欢这个导演吗？",
                actionHint: "分享幕后知识并转向新话题",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yeah, I loved the last one. This one might be even better. I'd give it a solid 8 out of 10.",
            textZh: "看过，我很喜欢上一部。这部可能更好。我给8分（满分10分）。",
            culturalNote: "用 'out of 10' 打分是英语世界常见的评价方式，'solid' 表示确切的、可靠的。",
            casualVersion: "Yeah, loved the last one. This might be better honestly. Solid 8 out of 10 for me.",
            commonMistake: {
              wrong: "I give it 8 points.",
              correct: "I'd give it a solid 8 out of 10.",
              explanation: "评分说 'X out of 10'，不说 'X points'。加 'solid' 表示确信。",
            },
            formalityVariants: {
              casual: "Loved the last one. This one's even better. Easy 8 out of 10.",
              standard: "Yeah, I loved the last one. This one might be even better. I'd give it a solid 8 out of 10.",
              formal: "Yes, I greatly admired the previous installment. I would venture to say this one surpasses it. I would rate it a solid 8 out of 10.",
            },
          },
          {
            speaker: "them",
            role: "观众",
            textEn: "I'd go even higher — maybe a 9. Well, nice chatting with you. I'll definitely watch it again when it comes out on streaming.",
            textZh: "我打更高——可能9分。聊得很开心。等上了流媒体我肯定再看一遍。",
            casualVersion: "I'd say 9, honestly. Anyway, good talking! Gonna rewatch it when it hits streaming for sure.",
            formalityVariants: {
              casual: "I'm going 9. Fun chat! Definitely rewatching on streaming.",
              standard: "I'd go even higher — maybe a 9. Well, nice chatting with you. I'll definitely watch it again when it comes out on streaming.",
              formal: "I might rate it even higher, perhaps a 9. It has been a pleasure conversing with you. I shall certainly revisit it once it becomes available on streaming platforms.",
            },
            keyPhrases: [
              { en: "nice chatting with you", zh: "聊得很开心" },
              { en: "comes out on streaming", zh: "上了流媒体" },
            ],
            alternativeExpressions: [
              {
                textEn: "I'd bump it to a 9, honestly. Anyway, great chat! Totally rewatching when it drops on streaming.",
                textZh: "我给9分，说真的。总之，聊得不错！上流媒体了肯定重看。",
                actionHint: "表达更高评价并友好告别",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 演唱会 ====================
  {
    id: "entertainment-concert-venue",
    category: "entertainment",
    titleZh: "演唱会",
    titleEn: "At a Concert",
    description: "参加演唱会，从入场到找座位、享受演出",
    otherRole: "场馆工作人员",
    otherRoleIcon: "🎵",
    flows: [
      {
        id: "concert-arrival",
        titleZh: "到达入场",
        titleEn: "Arriving & Getting In",
        description: "到达演唱会场馆、过安检、找到座位",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have my tickets on my phone. Where do I scan them?",
            textZh: "你好，我的票在手机上。在哪里扫码？",
            culturalNote: "现在大多数演唱会都用电子票，手机上显示二维码即可入场。",
            casualVersion: "Hey, got my tickets on my phone. Where do I scan?",
            commonMistake: {
              wrong: "I have ticket in my phone. Where to scan?",
              correct: "I have my tickets on my phone. Where do I scan them?",
              explanation: "'on my phone' 不是 'in my phone'。完整问句用 'Where do I scan them?'。",
            },
            formalityVariants: {
              casual: "Tickets are on my phone — where do I go?",
              standard: "Hi, I have my tickets on my phone. Where do I scan them?",
              formal: "Good evening. I have my tickets stored digitally on my phone. Could you direct me to the scanning area?",
            },
          },
          {
            speaker: "them",
            role: "入口工作人员",
            textEn: "Right here! Just pull up the QR code and hold it under the scanner. Also, quick bag check — no outside food or drinks allowed.",
            textZh: "就在这！调出二维码放在扫描仪下面。另外，快速检查下包——不允许带外面的食物和饮料。",
            casualVersion: "Right here, just show the QR code. Oh, and gotta check your bag real quick — no outside food or drinks.",
            formalityVariants: {
              casual: "Here, show the QR. And lemme peek in your bag — no outside food or drinks.",
              standard: "Right here! Just pull up the QR code and hold it under the scanner. Also, quick bag check — no outside food or drinks allowed.",
              formal: "Please present your QR code and hold it beneath the scanner. We also need to conduct a brief bag inspection — outside food and beverages are not permitted.",
            },
            keyPhrases: [
              { en: "QR code", zh: "二维码" },
              { en: "bag check", zh: "检查包" },
            ],
            alternativeExpressions: [
              {
                textEn: "You can scan right at this station. Have the QR code ready. And I'll need to take a quick look in your bag — venue policy, no outside food or drinks.",
                textZh: "在这个站点扫就行。准备好二维码。我需要看一下你的包——场馆规定，不能带外面的食物饮料。",
                actionHint: "引导扫码流程并说明规定",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "No problem. Here's my bag. Can you tell me how to get to Section B?",
            textZh: "没问题。这是我的包。你能告诉我怎么去B区吗？",
            culturalNote: "演唱会场馆通常按 Section（区）+ Row（排）+ Seat（座）定位。",
            casualVersion: "Sure, here you go. How do I get to Section B?",
            commonMistake: {
              wrong: "How can I go to B area?",
              correct: "Can you tell me how to get to Section B?",
              explanation: "场馆分区叫 'Section'，不叫 'area'。用 'get to' 而不是 'go to' 更自然。",
            },
            formalityVariants: {
              casual: "Here. So where's Section B?",
              standard: "No problem. Here's my bag. Can you tell me how to get to Section B?",
              formal: "Certainly. Here is my bag for inspection. Would you be so kind as to direct me to Section B?",
            },
          },
          {
            speaker: "them",
            role: "入口工作人员",
            textEn: "Section B is up the stairs to the left, second level. An usher up there can help you find your exact seats.",
            textZh: "B区在左边上楼梯，二层。上面有引导员可以帮你找到具体座位。",
            casualVersion: "B's upstairs, take a left. There's someone up there who'll point you to your seats.",
            formalityVariants: {
              casual: "Upstairs, left. Someone up there will show you your seats.",
              standard: "Section B is up the stairs to the left, second level. An usher up there can help you find your exact seats.",
              formal: "Section B is located on the second level, accessible via the staircase to your left. An usher will be available to assist you in locating your designated seats.",
            },
            keyPhrases: [
              { en: "usher", zh: "引导员" },
              { en: "second level", zh: "二层" },
            ],
            alternativeExpressions: [
              {
                textEn: "Head up the stairs on the left side. Second floor. There'll be an usher to walk you to your seats.",
                textZh: "从左边上楼。二楼。会有引导员带你去座位。",
                actionHint: "给出具体方向指引",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, thanks. Do you know what time the main act goes on?",
            textZh: "好的，谢谢。你知道主要演出几点开始吗？",
            culturalNote: "'Main act' 指主要演出者，'opening act' 指暖场嘉宾。演唱会通常先有暖场。",
            casualVersion: "Cool, thanks. When does the main act start?",
            commonMistake: {
              wrong: "When does the singer start singing?",
              correct: "What time does the main act go on?",
              explanation: "'go on' 在演出语境中指'上台表演'，'main act' 是主角演出。",
            },
            formalityVariants: {
              casual: "Thanks! When's the headliner on?",
              standard: "Great, thanks. Do you know what time the main act goes on?",
              formal: "Thank you. Would you happen to know when the principal performer is scheduled to take the stage?",
            },
          },
          {
            speaker: "them",
            role: "入口工作人员",
            textEn: "The opening act starts at 7:30, and the headliner should be on around 9. Have a great time tonight!",
            textZh: "暖场7:30开始，主角大约9点上台。今晚玩得开心！",
            casualVersion: "Opener's at 7:30, headliner around 9. Have fun!",
            formalityVariants: {
              casual: "Opener at 7:30, main act around 9. Enjoy!",
              standard: "The opening act starts at 7:30, and the headliner should be on around 9. Have a great time tonight!",
              formal: "The opening performance is scheduled for 7:30 PM, and the headlining artist is expected to take the stage at approximately 9 PM. I hope you have a wonderful evening.",
            },
            keyPhrases: [
              { en: "opening act", zh: "暖场演出" },
              { en: "headliner", zh: "主角/头牌" },
            ],
            alternativeExpressions: [
              {
                textEn: "Warm-up act kicks off at 7:30. The main show should start around 9. Enjoy the concert!",
                textZh: "暖场7:30开始。正式演出大约9点。享受演唱会！",
                actionHint: "告知时间安排并祝你愉快",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "concert-merch",
        titleZh: "买周边",
        titleEn: "Buying Merchandise",
        description: "在演唱会周边商品摊位购买纪念品",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hey, how much is the tour T-shirt?",
            textZh: "嘿，巡演T恤多少钱？",
            culturalNote: "演唱会周边商品通常在 merch stand/booth 售卖，价格偏高但很有纪念意义。",
            casualVersion: "How much for the tour tee?",
            commonMistake: {
              wrong: "How much money is the concert T-shirt?",
              correct: "How much is the tour T-shirt?",
              explanation: "不需要加 'money'。演唱会专属衣服叫 'tour T-shirt/tee'。",
            },
            formalityVariants: {
              casual: "What's the tour tee going for?",
              standard: "Hey, how much is the tour T-shirt?",
              formal: "Excuse me, could you tell me the price of the tour T-shirt, please?",
            },
          },
          {
            speaker: "them",
            role: "周边摊贩",
            textEn: "The tour tees are $45. We've got them in S through XXL. The black ones are almost sold out though — just a few mediums and larges left.",
            textZh: "巡演T恤45美元。S到XXL号都有。不过黑色的快卖完了——只剩几件M和L了。",
            casualVersion: "Forty-five bucks. S to XXL. Black's almost gone — got a few Ms and Ls left.",
            formalityVariants: {
              casual: "$45. All sizes S to XXL but black's nearly sold out. Few Ms and Ls left.",
              standard: "The tour tees are $45. We've got them in S through XXL. The black ones are almost sold out though.",
              formal: "The tour T-shirts are priced at $45. They are available in sizes small through double extra-large. However, the black variant is nearly sold out, with only a few medium and large sizes remaining.",
            },
            keyPhrases: [
              { en: "sold out", zh: "卖完了" },
              { en: "S through XXL", zh: "S到XXL号" },
            ],
            alternativeExpressions: [
              {
                textEn: "Those are $45 each. Sizes run S to XXL, but heads up — black is going fast. Only medium and large left in that color.",
                textZh: "每件45美元。尺码S到XXL，提醒一下——黑色卖得很快。那个颜色只剩M和L了。",
                actionHint: "报价并提醒热门款快售罄",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take a large in black. Do you accept cards, or is it cash only?",
            textZh: "我要一件黑色L号。刷卡还是只收现金？",
            culturalNote: "有些演唱会周边摊位只收现金，最好提前准备。近年来越来越多支持刷卡。",
            casualVersion: "Large black, please. Cards okay or cash only?",
            commonMistake: {
              wrong: "Give me a big black. Can I use credit card?",
              correct: "I'll take a large in black. Do you accept cards?",
              explanation: "尺码用 'large' 不用 'big'。'I'll take' 比 'give me' 更礼貌。",
            },
            formalityVariants: {
              casual: "Large in black. You guys take cards?",
              standard: "I'll take a large in black. Do you accept cards, or is it cash only?",
              formal: "I would like a large in black, please. Do you accept card payments, or is this a cash-only transaction?",
            },
          },
          {
            speaker: "them",
            role: "周边摊贩",
            textEn: "We take cards — just tap or insert. There's a $5 minimum for cards though. Want anything else? We've got posters and wristbands too.",
            textZh: "可以刷卡——感应或插卡都行。不过刷卡最低消费5美元。还要别的吗？我们也有海报和手环。",
            casualVersion: "Cards are fine — tap or insert. Five-buck minimum though. Want a poster or wristband too?",
            formalityVariants: {
              casual: "Yeah, we take cards. Tap or insert. Minimum's five bucks. Posters and wristbands too if you want.",
              standard: "We take cards — just tap or insert. There's a $5 minimum for cards. Want anything else?",
              formal: "Yes, we accept card payments via contactless or chip insert. Please note there is a $5 minimum for card transactions. May I interest you in any additional items, such as posters or wristbands?",
            },
            keyPhrases: [
              { en: "tap or insert", zh: "感应或插卡" },
              { en: "minimum", zh: "最低消费" },
            ],
            alternativeExpressions: [
              {
                textEn: "Cards work, tap or chip. Just so you know, there's a five-dollar card minimum. We also have posters for $20 and wristbands for $10.",
                textZh: "卡可以，感应或芯片。提醒一下，刷卡最低五美元。海报20美元，手环10美元。",
                actionHint: "说明支付方式并推荐其他商品",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Just the T-shirt is fine. Here, I'll tap.",
            textZh: "就要T恤就好。来，我感应一下。",
            culturalNote: "美国越来越多使用 tap to pay（感应支付），Apple Pay 和 Google Pay 也很普遍。",
            casualVersion: "Nah, just the shirt. Here, tapping.",
            commonMistake: {
              wrong: "Only the T-shirt. I touch the card.",
              correct: "Just the T-shirt is fine. Here, I'll tap.",
              explanation: "感应支付说 'tap'，不说 'touch'。'just X is fine' 是礼貌拒绝其他推荐。",
            },
            formalityVariants: {
              casual: "Just the tee. Tapping now.",
              standard: "Just the T-shirt is fine. Here, I'll tap.",
              formal: "Just the T-shirt, please. I will use contactless payment.",
            },
          },
          {
            speaker: "them",
            role: "周边摊贩",
            textEn: "All set! Here's your shirt. Pro tip — put it on now so you don't lose it in the crowd. Enjoy the show!",
            textZh: "搞定！给你衣服。小贴士——现在就穿上，免得在人群中弄丢。享受演出！",
            casualVersion: "Done! Here you go. Honestly, just wear it now so you don't lose it. Have fun!",
            formalityVariants: {
              casual: "Here ya go! Just throw it on now. Have a blast!",
              standard: "All set! Here's your shirt. Pro tip — put it on now so you don't lose it in the crowd. Enjoy the show!",
              formal: "Your purchase is complete. Here is your shirt. I would recommend wearing it now to avoid misplacing it during the event. Enjoy the performance.",
            },
            keyPhrases: [
              { en: "all set", zh: "搞定了" },
              { en: "pro tip", zh: "小贴士" },
            ],
            alternativeExpressions: [
              {
                textEn: "You're good to go! Seriously though, wear it — stuff gets lost in the pit. Have an awesome night!",
                textZh: "你可以走了！说真的，穿上吧——人群中容易丢东西。祝你度过美好的夜晚！",
                actionHint: "完成交易并给出实用建议",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 看体育比赛 ====================
  {
    id: "entertainment-sports-game-day",
    category: "entertainment",
    titleZh: "看体育比赛",
    titleEn: "Attending a Sports Game",
    description: "现场观看体育比赛，买票入场、找座位、买小吃",
    otherRole: "场馆工作人员",
    otherRoleIcon: "🏟️",
    flows: [
      {
        id: "sports-entry-seats",
        titleZh: "入场找座",
        titleEn: "Entry & Finding Seats",
        description: "在体育场入口检票并找到自己的座位",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, is this the right gate for Section 215?",
            textZh: "你好，这是去215区的正确入口吗？",
            culturalNote: "大型体育场有多个入口（gate），每个入口对应不同的区域，进错了要绕很远。",
            casualVersion: "Hey, is this the gate for 215?",
            commonMistake: {
              wrong: "Is this the door for area 215?",
              correct: "Is this the right gate for Section 215?",
              explanation: "体育场入口叫 'gate'，不叫 'door'。区域叫 'Section'。",
            },
            formalityVariants: {
              casual: "This the right gate for 215?",
              standard: "Hi, is this the right gate for Section 215?",
              formal: "Excuse me, would this be the correct entrance for Section 215?",
            },
          },
          {
            speaker: "them",
            role: "检票员",
            textEn: "Yep, you're in the right place! Can I see your tickets? And just a heads up — no bags larger than 12 by 12 inches.",
            textZh: "是的，你来对地方了！我看看你的票？提醒一下——超过12x12英寸的包不能带入。",
            casualVersion: "Yeah, right place! Lemme see your tickets. Oh and no big bags — 12 by 12 max.",
            formalityVariants: {
              casual: "Yep! Tickets? And FYI, no big bags — 12 by 12 max.",
              standard: "Yep, you're in the right place! Can I see your tickets? Just a heads up — no bags larger than 12 by 12 inches.",
              formal: "Yes, you are at the correct entrance. May I inspect your tickets? Please be advised that bags exceeding 12 by 12 inches are not permitted inside the venue.",
            },
            keyPhrases: [
              { en: "heads up", zh: "提醒" },
              { en: "12 by 12 inches", zh: "12x12英寸" },
            ],
            alternativeExpressions: [
              {
                textEn: "Right gate! Let me scan your tickets. Quick reminder — clear bag policy, nothing bigger than 12 by 12.",
                textZh: "入口没错！让我扫一下你的票。温馨提示——透明包政策，不能超过12x12。",
                actionHint: "确认入口正确，检票并说明规定",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Here you go. Which way do I go once I'm inside?",
            textZh: "给你。进去以后往哪边走？",
            culturalNote: "大型体育场内部很大，工作人员通常会告诉你具体的方向和楼层。",
            casualVersion: "Here. Where do I go from here?",
            commonMistake: {
              wrong: "Which direction should I walk after entering?",
              correct: "Which way do I go once I'm inside?",
              explanation: "'Which way do I go' 比 'which direction should I walk' 更自然口语化。",
            },
            formalityVariants: {
              casual: "Here. So where do I head?",
              standard: "Here you go. Which way do I go once I'm inside?",
              formal: "Here are my tickets. Could you please advise me on the best route to my section once I enter?",
            },
          },
          {
            speaker: "them",
            role: "检票员",
            textEn: "Take the escalator up to the second level, then go left. You'll see the section numbers on the signs. Row F, seats 8 and 9 — nice view!",
            textZh: "坐电梯到二层，然后左转。你会看到标识牌上的区号。F排8和9号座——视野不错！",
            casualVersion: "Escalator up, second level, hang a left. Signs will point you. Row F, seats 8 and 9 — great seats!",
            formalityVariants: {
              casual: "Up the escalator, left on the second level. F row, seats 8 and 9. Good spot!",
              standard: "Take the escalator up to the second level, then go left. Row F, seats 8 and 9 — nice view!",
              formal: "Please proceed via the escalator to the second level and turn left. You will find section signage clearly posted. Your seats are Row F, seats 8 and 9 — an excellent vantage point.",
            },
            keyPhrases: [
              { en: "escalator", zh: "自动扶梯" },
              { en: "nice view", zh: "视野不错" },
            ],
            alternativeExpressions: [
              {
                textEn: "Head up the escalator to level 2, make a left, follow the signs. You're in Row F, 8 and 9. You'll love the view from there.",
                textZh: "坐扶梯到2层，左转，跟着指示牌。你在F排8和9号。从那里看视野很好。",
                actionHint: "详细指路",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Awesome. Is there a food stand near our section?",
            textZh: "太好了。我们那个区附近有卖吃的吗？",
            culturalNote: "美国体育赛事的经典小吃包括热狗 hot dog、花生 peanuts、啤酒 beer，还有流动小贩在看台间叫卖。",
            casualVersion: "Cool. Any food nearby?",
            commonMistake: {
              wrong: "Is there a restaurant near our area?",
              correct: "Is there a food stand near our section?",
              explanation: "体育场里的食物摊位叫 'food stand/concession stand'，不是 'restaurant'。",
            },
            formalityVariants: {
              casual: "Nice. Food anywhere close?",
              standard: "Awesome. Is there a food stand near our section?",
              formal: "Wonderful. Are there any concession stands in proximity to our section?",
            },
          },
          {
            speaker: "them",
            role: "检票员",
            textEn: "There's a concession stand right at the top of Section 215. Hot dogs, nachos, beer — the works. Enjoy the game!",
            textZh: "215区顶部就有一个小吃摊。热狗、玉米片、啤酒——应有尽有。享受比赛！",
            casualVersion: "Yeah, concessions right at the top of 215. Hot dogs, nachos, beer, all that. Have fun!",
            formalityVariants: {
              casual: "Food stand's right at the top of your section. Everything you need. Enjoy!",
              standard: "There's a concession stand right at the top of Section 215. Hot dogs, nachos, beer — the works. Enjoy the game!",
              formal: "A concession stand is conveniently located at the top of Section 215, offering a variety of refreshments including hot dogs, nachos, and beverages. Please enjoy the event.",
            },
            keyPhrases: [
              { en: "concession stand", zh: "小吃摊" },
              { en: "the works", zh: "应有尽有" },
            ],
            alternativeExpressions: [
              {
                textEn: "Concessions are right up top when you get to your section. They've got everything — dogs, nachos, drinks. Have a great game!",
                textZh: "到你们区的时候顶上就有小吃摊。什么都有——热狗、玉米片、饮料。祝观赛愉快！",
                actionHint: "介绍小吃摊位置并祝你愉快",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "sports-cheering",
        titleZh: "看台互动",
        titleEn: "Cheering & Socializing",
        description: "在看台上和邻座球迷交流、为球队加油",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, is this your first time at this stadium?",
            textZh: "不好意思，你是第一次来这个体育场吗？",
            culturalNote: "美国人看比赛时很喜欢和邻座聊天，特别是支持同一队伍的时候。",
            casualVersion: "Hey, first time here?",
            commonMistake: {
              wrong: "Is this your first time to come this stadium?",
              correct: "Is this your first time at this stadium?",
              explanation: "'first time at' 而不是 'first time to come'。",
            },
            formalityVariants: {
              casual: "First time here?",
              standard: "Excuse me, is this your first time at this stadium?",
              formal: "Pardon me — is this your inaugural visit to this stadium?",
            },
          },
          {
            speaker: "them",
            role: "邻座球迷",
            textEn: "No way, I'm a season ticket holder! Been coming here for twelve years. You must be new though — welcome! Who are you rooting for?",
            textZh: "怎么可能，我是季票持有者！来了十二年了。不过你应该是新来的——欢迎！你支持哪边？",
            casualVersion: "Nah, season ticket holder here! Twelve years. You new? Welcome! Who you rooting for?",
            formalityVariants: {
              casual: "Haha no, I'm a lifer. Twelve years. You new? Who you cheering for?",
              standard: "No way, I'm a season ticket holder! Been coming for twelve years. Welcome! Who are you rooting for?",
              formal: "Not at all — I have held season tickets for the past twelve years. It appears this may be your first visit. Welcome. Which team do you support?",
            },
            keyPhrases: [
              { en: "season ticket holder", zh: "季票持有者" },
              { en: "rooting for", zh: "支持/为...加油" },
            ],
            alternativeExpressions: [
              {
                textEn: "Ha, I wish I had that new-stadium excitement! Nah, I've been a regular for over a decade. First time? Cool! So who's your team?",
                textZh: "哈，我真希望还有那种第一次来的兴奋感！不，我来了十多年了。第一次？酷！你支持哪个队？",
                actionHint: "热情回应并询问你支持的队伍",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm going for the home team! A friend recommended I come see a live game. It's so much better than watching on TV.",
            textZh: "我支持主队！朋友推荐我来看现场比赛。比电视上看好太多了。",
            culturalNote: "'Home team' 指主队，'away/visiting team' 指客队。现场看比赛的氛围是电视无法比拟的。",
            casualVersion: "Home team all the way! A buddy told me I had to see it live. Way better than TV.",
            commonMistake: {
              wrong: "I support the local team. It's much more good than TV.",
              correct: "I'm going for the home team. It's so much better than watching on TV.",
              explanation: "'go for' 或 'root for' 更口语化。'much better' 不是 'much more good'。",
            },
            formalityVariants: {
              casual: "Home team, obviously! Way better live than on TV.",
              standard: "I'm going for the home team! It's so much better than watching on TV.",
              formal: "I am supporting the home team. A friend suggested I attend a live match, and I must say, the experience far exceeds watching a broadcast.",
            },
          },
          {
            speaker: "them",
            role: "邻座球迷",
            textEn: "Oh, you picked a great game to start with! This is a rivalry match — things are going to get loud. When the wave starts, just go with it!",
            textZh: "你选了一场好比赛入门！这是一场宿敌对决——会很热闹。人浪开始的时候，跟着做就行！",
            casualVersion: "Great first game! This one's a rivalry — it's gonna be crazy loud. Just follow the wave when it comes around!",
            formalityVariants: {
              casual: "Awesome pick for your first game! Rivalry match, gonna be wild. Just follow the wave!",
              standard: "You picked a great game to start with! This is a rivalry match — things are going to get loud.",
              formal: "You have chosen an excellent match for your first experience. This is a rivalry fixture, so expect a particularly energetic atmosphere. When the wave begins, simply join in.",
            },
            keyPhrases: [
              { en: "rivalry match", zh: "宿敌对决" },
              { en: "the wave", zh: "人浪" },
            ],
            alternativeExpressions: [
              {
                textEn: "Perfect game for your first time! This is a big rivalry, so the crowd's gonna be insane. When people start doing the wave, just stand up and throw your arms up!",
                textZh: "你第一次来就赶上这场太完美了！这是大宿敌对决，观众会很疯狂。人浪开始时站起来举手就行！",
                actionHint: "介绍比赛背景和看台文化",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "This is awesome! What's that chant everyone keeps doing?",
            textZh: "太棒了！大家一直在喊的那个口号是什么？",
            culturalNote: "每个球队都有自己的加油口号和歌曲，跟着喊是融入氛围的最好方式。",
            casualVersion: "This is wild! What's that chant?",
            commonMistake: {
              wrong: "What is that shouting everyone does?",
              correct: "What's that chant everyone keeps doing?",
              explanation: "加油口号叫 'chant'，不叫 'shouting'。'keeps doing' 表示反复进行。",
            },
            formalityVariants: {
              casual: "Dude, this rules! What's that chant?",
              standard: "This is awesome! What's that chant everyone keeps doing?",
              formal: "This is magnificent! Could you explain the chant that everyone seems to be participating in?",
            },
          },
          {
            speaker: "them",
            role: "邻座球迷",
            textEn: "It goes: 'Let's go, Eagles! Let's go!' — clap clap — then repeat. I'll teach you the other ones too. By the end of tonight, you'll be a real fan!",
            textZh: "是这样的：'Let's go, Eagles! Let's go!'——拍两下——然后重复。其他的我也教你。今晚结束你就是真球迷了！",
            casualVersion: "'Let's go, Eagles! Let's go!' — clap clap — repeat. I'll show you the rest. You'll be hooked after tonight!",
            formalityVariants: {
              casual: "'Let's go Eagles!' Clap clap. Repeat. I'll teach ya the rest. You're gonna love it.",
              standard: "It goes: 'Let's go, Eagles!' — clap clap — then repeat. I'll teach you the others. You'll be a real fan by tonight!",
              formal: "The chant is: 'Let's go, Eagles! Let's go!' accompanied by two claps, then repeated. I would be happy to teach you the additional chants as well. I suspect you will become a devoted fan by the evening's end.",
            },
            keyPhrases: [
              { en: "chant", zh: "加油口号" },
              { en: "real fan", zh: "真球迷" },
            ],
            alternativeExpressions: [
              {
                textEn: "Easy one: 'Let's go Eagles!' then two claps. Over and over. Stick with me, I'll make you a superfan by the ninth inning!",
                textZh: "简单的：'Let's go Eagles!'然后拍两下。反复喊。跟着我，到第九局你就是超级粉丝了！",
                actionHint: "教你口号并欢迎你加入",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 参观博物馆 ====================
  {
    id: "entertainment-museum-guided-tour",
    category: "entertainment",
    titleZh: "参观博物馆",
    titleEn: "Museum Visit",
    description: "在博物馆参观展览、参加导览、了解展品",
    otherRole: "博物馆导览员",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "museum-tour-join",
        titleZh: "参加导览",
        titleEn: "Joining a Guided Tour",
        description: "在博物馆前台咨询并参加导览团",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, do you have any guided tours available today?",
            textZh: "你好，今天有导览团吗？",
            culturalNote: "大型博物馆通常提供免费或收费的导览服务，有些需要提前预约。",
            casualVersion: "Hey, any tours running today?",
            commonMistake: {
              wrong: "Do you have guide tour today?",
              correct: "Do you have any guided tours available today?",
              explanation: "是 'guided tour'（形容词+名词），不是 'guide tour'。加 'available' 更完整。",
            },
            formalityVariants: {
              casual: "Any tours today?",
              standard: "Hi, do you have any guided tours available today?",
              formal: "Good morning. I was wondering whether there are any guided tours available for today?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes! We have a highlights tour starting in 15 minutes. It covers the main galleries and lasts about an hour. It's free with your admission.",
            textZh: "有的！15分钟后有一个精华导览。涵盖主要展厅，大约一个小时。门票已含。",
            casualVersion: "Yeah! Highlights tour in 15 minutes — main galleries, about an hour, free with your ticket.",
            formalityVariants: {
              casual: "Yep! One starts in 15 — hits the main stuff, takes about an hour. Free with your ticket.",
              standard: "Yes! We have a highlights tour starting in 15 minutes. It covers the main galleries and lasts about an hour.",
              formal: "Indeed, we offer a highlights tour commencing in approximately 15 minutes. It encompasses the principal galleries and lasts roughly one hour. It is complimentary with your admission ticket.",
            },
            keyPhrases: [
              { en: "highlights tour", zh: "精华导览" },
              { en: "free with your admission", zh: "门票已含" },
            ],
            alternativeExpressions: [
              {
                textEn: "We do! There's a highlights tour kicking off in about 15 minutes. Covers the must-sees, takes about an hour, and it's included with your ticket.",
                textZh: "有的！大约15分钟后有个精华导览。涵盖必看展品，约一小时，包含在门票里。",
                actionHint: "介绍导览信息",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds perfect. Where does the tour meet?",
            textZh: "听起来太好了。导览在哪集合？",
            culturalNote: "导览通常在大厅特定地点集合，注意看举牌子的导览员。",
            casualVersion: "Perfect. Where do we meet up?",
            commonMistake: {
              wrong: "Where does the tour gather?",
              correct: "Where does the tour meet?",
              explanation: "导览集合用 'meet' 或 'meet up'，不用 'gather'（太正式）。",
            },
            formalityVariants: {
              casual: "Cool, where do we meet?",
              standard: "That sounds perfect. Where does the tour meet?",
              formal: "That sounds wonderful. Could you tell me where the tour group assembles?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "The guide will be waiting by the big sculpture in the main lobby. She'll be holding a blue flag — you can't miss her.",
            textZh: "导览员会在大厅的大雕塑旁等。她会举着蓝色旗子——你不会错过的。",
            casualVersion: "By the big sculpture in the lobby. Look for the blue flag — can't miss it.",
            formalityVariants: {
              casual: "Big sculpture, main lobby, look for the blue flag. Easy.",
              standard: "The guide will be waiting by the big sculpture in the main lobby. She'll be holding a blue flag.",
              formal: "The guide will be stationed beside the large sculpture in the main lobby. She will be identifiable by a blue flag she will be carrying.",
            },
            keyPhrases: [
              { en: "you can't miss her", zh: "你不会错过的" },
              { en: "sculpture", zh: "雕塑" },
            ],
            alternativeExpressions: [
              {
                textEn: "Meet by the sculpture in the main hall. The guide has a blue flag, so she's easy to spot.",
                textZh: "在大厅的雕塑旁集合。导览员拿着蓝旗，很容易找到。",
                actionHint: "告知集合地点和识别方式",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. One more question — is photography allowed in the galleries?",
            textZh: "好的。再问一个——展厅里可以拍照吗？",
            culturalNote: "很多博物馆允许拍照但禁止闪光灯和三脚架。特展可能完全禁止拍照。",
            casualVersion: "Cool. Can I take photos inside?",
            commonMistake: {
              wrong: "Can I take photo inside?",
              correct: "Is photography allowed in the galleries?",
              explanation: "'Is photography allowed' 比 'can I take photo' 更正式得体。注意 'photo' 要加 s。",
            },
            formalityVariants: {
              casual: "Can I take pics in there?",
              standard: "Is photography allowed in the galleries?",
              formal: "May I inquire whether photography is permitted within the gallery spaces?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Photos are fine in the permanent collection — just no flash. The special exhibition on the third floor is no photography though. Your guide will remind you.",
            textZh: "常设展可以拍照——只是不能用闪光灯。三楼的特展不能拍照。导览员会提醒你的。",
            casualVersion: "Regular galleries, sure, no flash though. Third floor special exhibit — no photos at all. The guide will let you know.",
            formalityVariants: {
              casual: "Yeah, no flash though. Special exhibit upstairs is no photos. Guide'll tell you.",
              standard: "Photos are fine in the permanent collection — just no flash. The special exhibition on the third floor is no photography though.",
              formal: "Photography is permitted in the permanent collection galleries, provided flash is not used. However, photography is strictly prohibited in the special exhibition on the third floor. Your guide will provide reminders.",
            },
            keyPhrases: [
              { en: "permanent collection", zh: "常设展" },
              { en: "no flash", zh: "禁止闪光灯" },
            ],
            alternativeExpressions: [
              {
                textEn: "Snap away in the main galleries, just keep the flash off. The special exhibit upstairs is a no-photo zone. Don't worry, the guide mentions it.",
                textZh: "主展厅随便拍，把闪光灯关了就行。楼上特展不能拍照。别担心，导览员会说的。",
                actionHint: "说明拍照规则",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "museum-exhibit-questions",
        titleZh: "展品提问",
        titleEn: "Asking About Exhibits",
        description: "在导览过程中向导览员提问关于展品的信息",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, what period is this painting from?",
            textZh: "请问，这幅画是什么时期的？",
            culturalNote: "在导览中提问是被鼓励的，好的导览员会欢迎互动。",
            casualVersion: "Hey, when's this painting from?",
            commonMistake: {
              wrong: "This painting is from what time?",
              correct: "What period is this painting from?",
              explanation: "问年代用 'what period' 或 'when is this from'，不用 'what time'。",
            },
            formalityVariants: {
              casual: "When's this one from?",
              standard: "Excuse me, what period is this painting from?",
              formal: "Pardon me — could you tell me the historical period to which this painting belongs?",
            },
          },
          {
            speaker: "them",
            role: "导览员",
            textEn: "Great question! This is from the Impressionist period, around 1880. Notice how the brushstrokes are loose and the colors focus on capturing natural light rather than precise details.",
            textZh: "好问题！这是印象派时期的，大约1880年。注意看笔触很松散，色彩注重捕捉自然光线而不是精确细节。",
            casualVersion: "Good one! Impressionist, around 1880. See how the brushwork is loose? They were all about light, not details.",
            formalityVariants: {
              casual: "Impressionist, 1880-ish. See the loose brushstrokes? All about capturing light.",
              standard: "This is from the Impressionist period, around 1880. Notice the loose brushstrokes and focus on natural light.",
              formal: "An excellent question. This work dates to the Impressionist period, circa 1880. Please observe the characteristically loose brushwork and the emphasis on capturing natural luminosity rather than precise detail.",
            },
            keyPhrases: [
              { en: "Impressionist period", zh: "印象派时期" },
              { en: "brushstrokes", zh: "笔触" },
            ],
            alternativeExpressions: [
              {
                textEn: "This one's Impressionist — late 1800s. The key thing to notice is how the artist uses color and light instead of sharp lines. Very typical of the movement.",
                textZh: "这幅是印象派——19世纪晚期。要注意的是艺术家如何用色彩和光线替代清晰的线条。非常典型的风格。",
                actionHint: "解释艺术风格特征",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's fascinating. Is there a gift shop where I can get a print of this?",
            textZh: "太迷人了。有礼品店可以买这幅画的复制品吗？",
            culturalNote: "博物馆礼品店通常有展品的明信片、海报和复制品，是受欢迎的纪念品。",
            casualVersion: "Love it. Can I get a print of this somewhere?",
            commonMistake: {
              wrong: "Can I buy a copy of this painting?",
              correct: "Is there a gift shop where I can get a print of this?",
              explanation: "画作复制品叫 'print'，'copy' 通常指文件副本。",
            },
            formalityVariants: {
              casual: "Cool. Where can I grab a print?",
              standard: "That's fascinating. Is there a gift shop where I can get a print of this?",
              formal: "How fascinating. Would the museum gift shop carry reproductions or prints of this particular work?",
            },
          },
          {
            speaker: "them",
            role: "导览员",
            textEn: "Absolutely! The gift shop is on the ground floor near the exit. They have prints, postcards, and even some high-quality reproductions. This painting is one of our best sellers.",
            textZh: "当然！礼品店在一楼出口附近。有复制品、明信片，甚至一些高质量仿制品。这幅画是我们最畅销的之一。",
            casualVersion: "Yeah, gift shop's by the exit, ground floor. Prints, postcards, the works. This one's a bestseller, actually.",
            formalityVariants: {
              casual: "For sure! Gift shop's downstairs by the exit. This one's super popular — they'll have it.",
              standard: "The gift shop is on the ground floor near the exit. They have prints, postcards, and reproductions.",
              formal: "Certainly. The museum gift shop is located on the ground floor, adjacent to the exit. They stock prints, postcards, and high-quality reproductions. This particular painting is among our most popular items.",
            },
            keyPhrases: [
              { en: "reproductions", zh: "仿制品/复制品" },
              { en: "best sellers", zh: "最畅销的" },
            ],
            alternativeExpressions: [
              {
                textEn: "Oh yes, the shop on the ground floor by the exit has great prints. This one is actually one of our top sellers — very popular with visitors.",
                textZh: "当然，一楼出口旁的商店有很棒的复制品。这幅其实是我们最畅销的——很受游客欢迎。",
                actionHint: "介绍礼品店位置和热门商品",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll definitely check it out. How much longer does the tour go?",
            textZh: "我一定去看看。导览还有多久结束？",
            culturalNote: "如果你想提前离开导览也是完全可以的，不需要特别说明，安静离开即可。",
            casualVersion: "For sure. How much longer is the tour?",
            commonMistake: {
              wrong: "How long more is the tour?",
              correct: "How much longer does the tour go?",
              explanation: "'How much longer' 是正确表达，不是 'how long more'。",
            },
            formalityVariants: {
              casual: "Will do. How much longer we got?",
              standard: "I'll definitely check it out. How much longer does the tour go?",
              formal: "I shall certainly visit. May I ask how much time remains in the tour?",
            },
          },
          {
            speaker: "them",
            role: "导览员",
            textEn: "About 20 more minutes. We have two more galleries to see, including the modern art wing, which is my personal favorite. Feel free to ask more questions along the way!",
            textZh: "大约还有20分钟。还有两个展厅要看，包括现代艺术馆——那是我个人最喜欢的。沿途随时提问！",
            casualVersion: "About 20 more minutes. Two more galleries, including the modern art wing — my fave. Keep the questions coming!",
            formalityVariants: {
              casual: "Like 20 minutes. Two more rooms, modern art's next — my favorite part. Ask away!",
              standard: "About 20 more minutes. Two more galleries to see, including the modern art wing. Feel free to ask questions!",
              formal: "Approximately 20 minutes remain. We shall be visiting two additional galleries, including the modern art wing, which I must confess is my personal favorite. Please do not hesitate to pose any further questions.",
            },
            keyPhrases: [
              { en: "modern art wing", zh: "现代艺术馆" },
              { en: "feel free to", zh: "随时可以" },
            ],
            alternativeExpressions: [
              {
                textEn: "We've got about 20 minutes left. Still two galleries ahead — the modern art section is next, and it's amazing. Don't be shy about asking questions!",
                textZh: "还有大约20分钟。前面还有两个展厅——接下来是现代艺术区，非常精彩。别不好意思提问！",
                actionHint: "告知剩余时间并鼓励互动",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 主题乐园 ====================
  // ==================== 保龄球馆 ====================
  {
    id: "entertainment-bowling-alley",
    category: "entertainment",
    titleZh: "保龄球馆",
    titleEn: "Bowling Alley",
    description: "在保龄球馆租球道、租鞋、享受保龄球运动",
    otherRole: "保龄球馆员工",
    otherRoleIcon: "🎳",
    flows: [
      {
        id: "bowling-lane-rental",
        titleZh: "租球道",
        titleEn: "Renting a Lane",
        description: "在前台预约球道、租鞋并了解价格",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, we'd like to bowl. Do you have any lanes available?",
            textZh: "你好，我们想打保龄球。有空的球道吗？",
            culturalNote: "保龄球是美国非常大众的休闲活动，适合朋友聚会和家庭活动。",
            casualVersion: "Hey, got any lanes open?",
            commonMistake: {
              wrong: "We want to play bowling. Do you have road?",
              correct: "We'd like to bowl. Do you have any lanes available?",
              explanation: "'bowl' 可以直接做动词，不用 'play bowling'。球道叫 'lane'。",
            },
            formalityVariants: {
              casual: "Any lanes free?",
              standard: "Hi, we'd like to bowl. Do you have any lanes available?",
              formal: "Good evening. We would like to bowl. Are there any lanes currently available?",
            },
          },
          {
            speaker: "them",
            role: "前台员工",
            textEn: "Let me check. Yep, lane 12 just opened up. How many people in your group? And do you need to rent bowling shoes?",
            textZh: "我查一下。有的，12号球道刚空出来。你们几个人？需要租保龄球鞋吗？",
            casualVersion: "Lemme check. Yeah, lane 12's open. How many of you? Need shoes?",
            formalityVariants: {
              casual: "Lane 12 just freed up. How many? Need shoes?",
              standard: "Lane 12 just opened up. How many in your group? Do you need to rent bowling shoes?",
              formal: "Allow me to check. Indeed, lane 12 has just become available. How many individuals are in your party? And will you require rental bowling shoes?",
            },
            keyPhrases: [
              { en: "opened up", zh: "空出来了" },
              { en: "bowling shoes", zh: "保龄球鞋" },
            ],
            alternativeExpressions: [
              {
                textEn: "Good news — lane 12 is free. How big is your group? And will you be needing shoe rentals?",
                textZh: "好消息——12号球道空着。你们一共几个人？需要租鞋吗？",
                actionHint: "确认有空球道并询问人数和租鞋需求",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Four of us. Yes, we all need shoes. What are the sizes you have?",
            textZh: "我们四个人。都需要租鞋。你们有什么尺码？",
            culturalNote: "美国鞋码和中国不同，女鞋约加1.5码，男鞋约加0.5码。不确定可以试穿。",
            casualVersion: "Four people, all need shoes. What sizes you got?",
            commonMistake: {
              wrong: "We are four people. We all need shoes. What number do you have?",
              correct: "Four of us. We all need shoes. What sizes do you have?",
              explanation: "'Four of us' 更简洁。鞋码说 'size' 不说 'number'。",
            },
            formalityVariants: {
              casual: "Four of us, all need shoes. Sizes?",
              standard: "Four of us. Yes, we all need shoes. What sizes do you have?",
              formal: "There are four of us, and we will all require shoe rentals. What sizes are available?",
            },
          },
          {
            speaker: "them",
            role: "前台员工",
            textEn: "We carry everything from size 5 to 15. Just tell me each person's size and I'll get them for you. Shoe rental is $4 per pair.",
            textZh: "5号到15号都有。告诉我每个人的尺码，我给你们拿。租鞋每双4美元。",
            casualVersion: "Sizes 5 to 15. Just give me everyone's sizes. Four bucks a pair for rental.",
            formalityVariants: {
              casual: "5 to 15, we've got everything. What sizes? Four bucks each.",
              standard: "We carry sizes 5 to 15. Just tell me each person's size. Shoe rental is $4 per pair.",
              formal: "We stock sizes ranging from 5 to 15. Kindly provide each individual's size and I shall retrieve the appropriate footwear. The rental fee is $4 per pair.",
            },
            keyPhrases: [
              { en: "shoe rental", zh: "租鞋" },
              { en: "per pair", zh: "每双" },
            ],
            alternativeExpressions: [
              {
                textEn: "We've got all sizes, 5 through 15. Give me the sizes and I'll grab 'em. It's $4 a pair for rental.",
                textZh: "所有尺码都有，5号到15号。告诉我尺码我去拿。租鞋每双4美元。",
                actionHint: "说明尺码范围和价格",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "We need sizes 8, 9, 7, and 10. How much is it per game?",
            textZh: "我们需要8号、9号、7号和10号。每局多少钱？",
            culturalNote: "保龄球按 game（局）或时间计费。一局大约15-20分钟。",
            casualVersion: "8, 9, 7, and 10. How much per game?",
            commonMistake: {
              wrong: "We need size 8, 9, 7, 10. How much is one round?",
              correct: "We need sizes 8, 9, 7, and 10. How much is it per game?",
              explanation: "保龄球计费用 'per game'，不用 'per round'。多个尺码时 'sizes' 用复数。",
            },
            formalityVariants: {
              casual: "8, 9, 7, 10. Price per game?",
              standard: "We need sizes 8, 9, 7, and 10. How much is it per game?",
              formal: "We require sizes 8, 9, 7, and 10, please. Could you tell me the cost per game?",
            },
          },
          {
            speaker: "them",
            role: "前台员工",
            textEn: "It's $6 per person per game. But we have a special tonight — unlimited bowling for $20 per person until closing. Way better deal if you're staying a while. Want to go with that?",
            textZh: "每人每局6美元。不过今晚有特惠——每人20美元不限局数打到关门。如果你们要待一段时间的话划算多了。要选那个吗？",
            casualVersion: "Six bucks a game per person. But tonight there's unlimited bowling for 20 bucks till close — way better deal. You down?",
            formalityVariants: {
              casual: "6 a game, or 20 for unlimited till close. Unlimited's the move if you're staying.",
              standard: "It's $6 per person per game. But we have unlimited bowling tonight for $20 per person until closing.",
              formal: "The standard rate is $6 per person per game. However, this evening we are offering an unlimited bowling promotion at $20 per person until closing time. It represents considerably better value for an extended visit.",
            },
            keyPhrases: [
              { en: "unlimited bowling", zh: "不限局数" },
              { en: "way better deal", zh: "划算多了" },
            ],
            alternativeExpressions: [
              {
                textEn: "Normally $6 per game, but tonight's special is $20 all-you-can-bowl till we close. If you guys are planning to hang for a bit, that's definitely the way to go.",
                textZh: "通常每局6美元，但今晚特惠20美元随便打到关门。如果你们打算待一会的话，那绝对是最好的选择。",
                actionHint: "报价并推荐优惠套餐",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "bowling-playing",
        titleZh: "打球互动",
        titleEn: "Playing & Socializing",
        description: "在球道上打保龄球，和朋友互动交流",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I've never bowled before. Any tips on how to throw the ball?",
            textZh: "我从没打过保龄球。投球有什么技巧吗？",
            culturalNote: "保龄球馆的员工通常很乐意教新手基本技巧。",
            casualVersion: "First time bowling — any tips?",
            commonMistake: {
              wrong: "I never played bowling before. How to throw?",
              correct: "I've never bowled before. Any tips on how to throw the ball?",
              explanation: "用 'bowled'（动词过去分词）而不是 'played bowling'。完整句子更自然。",
            },
            formalityVariants: {
              casual: "Total newbie here. How do you throw this thing?",
              standard: "I've never bowled before. Any tips on how to throw the ball?",
              formal: "This is my first time bowling. Would you be kind enough to share some pointers on proper technique?",
            },
          },
          {
            speaker: "them",
            role: "球友",
            textEn: "Sure! Hold the ball with your fingers in the three holes, take about four steps forward, and release the ball smoothly when your arm swings forward. Aim for the arrows on the lane, not the pins.",
            textZh: "当然！手指插进三个洞里握住球，向前大约走四步，手臂前摆时顺畅地放球。瞄准球道上的箭头，不要瞄球瓶。",
            casualVersion: "Easy! Fingers in the holes, take four steps, let it go when your arm comes forward. Aim at the arrows, not the pins.",
            formalityVariants: {
              casual: "Fingers in the holes, four steps forward, release smooth. Aim at the arrows, not the pins — trust me.",
              standard: "Hold the ball with fingers in the holes, take four steps, release smoothly. Aim for the arrows on the lane.",
              formal: "Certainly. Insert your fingers into the three holes, take approximately four measured steps toward the foul line, and release the ball with a smooth forward motion. A useful tip: aim for the directional arrows printed on the lane rather than the pins themselves.",
            },
            keyPhrases: [
              { en: "release the ball", zh: "放球/松手" },
              { en: "aim for the arrows", zh: "瞄准箭头" },
            ],
            alternativeExpressions: [
              {
                textEn: "Okay so — fingers in, walk up, let go nice and easy. The trick is to look at the arrows on the lane, not the pins at the end. You'll be way more accurate.",
                textZh: "好——手指插进去，走上去，轻松松手。诀窍是看球道上的箭头，不要看尽头的球瓶。这样准得多。",
                actionHint: "教授基本投球技巧",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I knocked down 7 pins! Not bad for a first try, right?",
            textZh: "我打倒了7个瓶！第一次打还不错吧？",
            culturalNote: "保龄球共10个球瓶 pins，全倒叫 strike，第二球全倒叫 spare。",
            casualVersion: "Seven pins! Not bad for my first time, huh?",
            commonMistake: {
              wrong: "I hit 7 bottles! Not bad for first time?",
              correct: "I knocked down 7 pins! Not bad for a first try, right?",
              explanation: "球瓶叫 'pins'，不叫 'bottles'。击倒用 'knocked down'。",
            },
            formalityVariants: {
              casual: "7 pins down! Pretty good for a beginner, yeah?",
              standard: "I knocked down 7 pins! Not bad for a first try, right?",
              formal: "I managed to knock down 7 pins. That is rather respectable for a first attempt, wouldn't you say?",
            },
          },
          {
            speaker: "them",
            role: "球友",
            textEn: "That's actually really good! Most beginners end up in the gutter. You've got natural talent! Try to pick up the spare on your second ball — aim a little more to the left.",
            textZh: "真的很好！大多数新手都打到沟里去了。你有天赋！第二球试试补中剩下的——稍微往左瞄一点。",
            casualVersion: "Dude, that's solid! Most newbies gutter-ball it. You're a natural! Go for the spare — aim left a bit.",
            formalityVariants: {
              casual: "That's awesome for a first go! Most people gutter. Go for the spare — aim left.",
              standard: "That's really good! Most beginners end up in the gutter. Try for the spare — aim a little left.",
              formal: "That is quite impressive for a debut attempt. Most beginners tend to deliver gutter balls. You appear to have a natural aptitude. For your second delivery, try to convert the spare by aiming slightly to the left.",
            },
            keyPhrases: [
              { en: "gutter", zh: "沟球/球沟" },
              { en: "spare", zh: "补中（第二球全倒）" },
            ],
            alternativeExpressions: [
              {
                textEn: "Wow, 7 on your first ball? That's legit! A lot of people can't even keep it out of the gutter. Now go for the spare — shift your aim a little left for those last three.",
                textZh: "哇，第一球7个？真不错！很多人球都出不了沟。现在争取补中——瞄准稍微左移一点去打那三个。",
                actionHint: "鼓励并给出技术指导",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes! I got the spare! This is actually really fun. Want to make it interesting and keep score?",
            textZh: "耶！我补中了！真的很好玩。要不要搞有趣点，记分比赛？",
            culturalNote: "现代保龄球馆都有自动记分系统，但朋友间的'赌注'（通常是输的人买饮料）让比赛更有趣。",
            casualVersion: "Got the spare! This is awesome. Wanna make it a competition?",
            commonMistake: {
              wrong: "I cleaned! This is very fun. Do you want to compete score?",
              correct: "I got the spare! This is actually really fun. Want to make it interesting?",
              explanation: "'got the spare' 是补中的固定说法。'make it interesting' 暗示友好竞争。",
            },
            formalityVariants: {
              casual: "Spare! Let's go! Wanna make it a competition?",
              standard: "I got the spare! This is really fun. Want to make it interesting and keep score?",
              formal: "I converted the spare! I am truly enjoying this. Shall we introduce a friendly competition and track our scores?",
            },
          },
          {
            speaker: "them",
            role: "球友",
            textEn: "You're on! Loser buys the next round of drinks. The screen keeps score automatically, so no cheating! Let's see if your beginner's luck holds up.",
            textZh: "比就比！输的人买下一轮饮料。屏幕自动记分，别想作弊！看看你的新手运气能不能持续。",
            casualVersion: "You're on! Loser buys drinks. Screen keeps score, so no funny business. Let's see that beginner's luck!",
            formalityVariants: {
              casual: "Deal! Loser buys drinks. Game on!",
              standard: "You're on! Loser buys the next round of drinks. The screen keeps score automatically. Let's see if your luck holds!",
              formal: "Challenge accepted. The loser shall purchase the next round of beverages. The scoring system tracks everything automatically, ensuring fairness. Let us see whether your beginner's fortune persists.",
            },
            keyPhrases: [
              { en: "you're on", zh: "比就比/接受挑战" },
              { en: "beginner's luck", zh: "新手运气" },
            ],
            alternativeExpressions: [
              {
                textEn: "Oh it's on! Loser gets the drinks. Score's right up there on the screen — fair and square. Don't count on that beginner's luck lasting!",
                textZh: "那就开始！输的人买饮料。分数就在屏幕上——公平公正。别指望新手运气一直有！",
                actionHint: "接受挑战并设定赌注",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 密室逃脱 ====================
  {
    id: "entertainment-escape-room-adventure",
    category: "entertainment",
    titleZh: "密室逃脱",
    titleEn: "Escape Room",
    description: "参加密室逃脱游戏，听规则说明、团队配合解谜",
    otherRole: "密室游戏主持人",
    otherRoleIcon: "🔐",
    flows: [
      {
        id: "escape-room-briefing",
        titleZh: "规则说明",
        titleEn: "Pre-Game Briefing",
        description: "听密室逃脱的游戏规则和安全说明",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, we're here for the 7 o'clock escape room. We have a booking under the name Chen.",
            textZh: "你好，我们来参加7点的密室逃脱。预约名是陈。",
            culturalNote: "密室逃脱需要提前预约并准时到达，通常需要提前10-15分钟签到。",
            casualVersion: "Hey, 7 o'clock escape room, booked under Chen.",
            commonMistake: {
              wrong: "We booked the 7 PM escape room. Name is Chen.",
              correct: "We're here for the 7 o'clock escape room. We have a booking under the name Chen.",
              explanation: "'booking under the name' 是预约登记的标准表达。",
            },
            formalityVariants: {
              casual: "7 o'clock escape room, name's Chen.",
              standard: "Hi, we're here for the 7 o'clock escape room. Booking under Chen.",
              formal: "Good evening. We have a reservation for the 7 PM escape room session. The booking should be under the name Chen.",
            },
          },
          {
            speaker: "them",
            role: "主持人",
            textEn: "Welcome! I see your booking — party of five for the Mystery Mansion room. Before we start, I need to go over some rules. First, no phones inside. Second, don't force any locks or props — if it doesn't open easily, you're on the wrong track.",
            textZh: "欢迎！看到你们的预约了——五人组玩神秘公馆。开始前我需要说明一些规则。第一，里面不能用手机。第二，不要强力破坏锁或道具——如果打不开，说明方向不对。",
            casualVersion: "Welcome! Got your booking — five of you, Mystery Mansion. Quick rules: no phones, don't force anything. If it won't open, you're doing it wrong.",
            formalityVariants: {
              casual: "Hey, welcome! Five for Mystery Mansion. Rules: no phones, don't break stuff. If it's stuck, try something else.",
              standard: "Welcome! Party of five for Mystery Mansion. Quick rules: no phones inside, and don't force any locks or props.",
              formal: "Welcome to our facility. I have your reservation — a party of five for the Mystery Mansion experience. Before we commence, allow me to outline our guidelines. Mobile phones are not permitted inside. Additionally, please refrain from applying excessive force to any locks or props.",
            },
            keyPhrases: [
              { en: "party of five", zh: "五人组" },
              { en: "on the wrong track", zh: "方向不对" },
            ],
            alternativeExpressions: [
              {
                textEn: "Hey, welcome! Found your reservation — five people, Mystery Mansion. Real quick: leave your phones out here, and if something doesn't budge, don't force it — means you need a different clue.",
                textZh: "嘿，欢迎！找到你们的预约了——五人，神秘公馆。简单说：手机留在外面，打不开的东西不要硬来——意味着需要找别的线索。",
                actionHint: "确认预约并说明基本规则",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. What happens if we get stuck? Can we ask for hints?",
            textZh: "明白了。如果我们卡住了怎么办？可以要提示吗？",
            culturalNote: "大多数密室逃脱都提供一定数量的免费提示，通过对讲机或屏幕提供。",
            casualVersion: "Cool. What if we get stuck? Can we get hints?",
            commonMistake: {
              wrong: "If we cannot solve, can we get help?",
              correct: "What happens if we get stuck? Can we ask for hints?",
              explanation: "'get stuck' 比 'cannot solve' 更口语化。密室逃脱的帮助叫 'hints/clues'。",
            },
            formalityVariants: {
              casual: "And if we're stuck? Hints?",
              standard: "What happens if we get stuck? Can we ask for hints?",
              formal: "And in the event that we find ourselves unable to progress, is it possible to request hints?",
            },
          },
          {
            speaker: "them",
            role: "主持人",
            textEn: "Absolutely! You get three free hints. Just look at the camera and wave, and I'll send a hint to the screen inside. After that, you can still ask but it'll affect your final score.",
            textZh: "当然可以！你们有三次免费提示。对着摄像头挥挥手，我会把提示发到里面的屏幕上。之后还可以要，但会影响最终分数。",
            casualVersion: "Yep, three free hints. Just wave at the camera. After three, you can still ask but it dings your score.",
            formalityVariants: {
              casual: "Yeah, three free hints. Wave at the camera, I'll send one. More than three starts hurting your score.",
              standard: "You get three free hints. Wave at the camera and I'll send a hint to the screen. After three, it affects your score.",
              formal: "Certainly. Your team is entitled to three complimentary hints. Simply face the surveillance camera and wave, and I shall transmit a hint to the display inside. Additional hints beyond three will impact your final score.",
            },
            keyPhrases: [
              { en: "free hints", zh: "免费提示" },
              { en: "affect your score", zh: "影响分数" },
            ],
            alternativeExpressions: [
              {
                textEn: "For sure! You've got three hints on the house. If you need one, just wave at the camera and I'll pop it on the screen. After three, you can keep asking but your score takes a hit.",
                textZh: "当然！三次免费提示。需要就对摄像头挥手，我会弹到屏幕上。三次之后还能问，但分数会扣。",
                actionHint: "解释提示系统",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How much time do we have?",
            textZh: "我们有多少时间？",
            culturalNote: "密室逃脱通常给60分钟，也有45分钟或90分钟的。",
            casualVersion: "How long do we get?",
            commonMistake: {
              wrong: "How many time we have?",
              correct: "How much time do we have?",
              explanation: "时间用 'how much time'，不用 'how many time'。时间是不可数名词。",
            },
            formalityVariants: {
              casual: "How long?",
              standard: "How much time do we have?",
              formal: "What is the allotted time for the challenge?",
            },
          },
          {
            speaker: "them",
            role: "主持人",
            textEn: "You've got 60 minutes on the clock. I'll give you a warning at the 10-minute mark. Our record for this room is 42 minutes — think you can beat it? Good luck, and have fun in there!",
            textZh: "你们有60分钟。剩10分钟时我会提醒你们。这个房间的纪录是42分钟——你们能打破吗？祝好运，里面玩得开心！",
            casualVersion: "60 minutes. I'll warn you at 10 minutes left. Record's 42 minutes — try to beat it! Have fun!",
            formalityVariants: {
              casual: "One hour. Heads up at 10 minutes left. Record's 42 — good luck beating that! Have a blast!",
              standard: "You've got 60 minutes. I'll warn you at the 10-minute mark. The record is 42 minutes. Good luck!",
              formal: "You have been allotted 60 minutes. I will provide a notification when 10 minutes remain. The current record for this particular room is 42 minutes. Best of luck, and please enjoy the experience.",
            },
            keyPhrases: [
              { en: "on the clock", zh: "计时" },
              { en: "10-minute mark", zh: "10分钟节点" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sixty minutes total. When you're down to 10, I'll let you know. Fun fact: fastest team cleared it in 42 minutes. No pressure! Seriously though, have a great time!",
                textZh: "一共60分钟。剩10分钟我会通知你们。有趣的是：最快的队42分钟通关。别有压力！说真的，好好玩！",
                actionHint: "说明时间限制和纪录",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "escape-room-teamwork",
        titleZh: "团队解谜",
        titleEn: "Teamwork & Puzzle Solving",
        description: "在密室内与队友讨论线索、合作解谜",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Okay team, let's split up and search the room. I'll check the bookshelf, you take the desk.",
            textZh: "好的团队，我们分头搜索。我查书架，你去看桌子。",
            culturalNote: "密室逃脱的关键策略是分工搜索，然后把发现的线索集中讨论。",
            casualVersion: "Alright, let's split up. I got the bookshelf, you hit the desk.",
            commonMistake: {
              wrong: "Let's separate and find things. I look at bookshelf, you look at desk.",
              correct: "Let's split up and search the room. I'll check the bookshelf, you take the desk.",
              explanation: "'split up' 比 'separate' 更口语化。'check/take' 比 'look at' 更有行动感。",
            },
            formalityVariants: {
              casual: "Split up! I'll do the bookshelf, you handle the desk. Go!",
              standard: "Let's split up and search the room. I'll check the bookshelf, you take the desk.",
              formal: "I suggest we divide our efforts. I shall examine the bookshelf while you investigate the desk area.",
            },
          },
          {
            speaker: "them",
            role: "队友",
            textEn: "Found something! There's a four-digit code written on the back of this painting. And look — there's a locked box on the desk that needs a four-digit combination. This has to be it!",
            textZh: "发现了！这幅画背面写着一个四位数密码。而且看——桌上有个上锁的盒子需要四位数密码。一定是它！",
            casualVersion: "Hey, found it! Four-digit code behind this painting. And there's a locked box on the desk. Has to be the combo!",
            formalityVariants: {
              casual: "Yo! Code behind the painting — four digits. Locked box on the desk needs four digits. Bingo!",
              standard: "Found something! A four-digit code on the back of this painting, and there's a locked box on the desk. This has to be it!",
              formal: "I have made a discovery. There is a four-digit code inscribed on the reverse side of this painting. Additionally, there is a locked box on the desk requiring a four-digit combination. This must be the connection.",
            },
            keyPhrases: [
              { en: "combination", zh: "密码组合" },
              { en: "this has to be it", zh: "一定是它" },
            ],
            alternativeExpressions: [
              {
                textEn: "Wait — there's numbers on the back of this painting! Four digits. And this box needs a four-digit code. Try it!",
                textZh: "等等——画背面有数字！四位。这个盒子需要四位密码。试试！",
                actionHint: "发现线索并建立关联",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "It worked! There's a key inside the box. Now which lock does this key fit?",
            textZh: "打开了！盒子里有把钥匙。现在这把钥匙开哪个锁？",
            culturalNote: "密室逃脱是一环扣一环的，每个线索通往下一个谜题。",
            casualVersion: "Yes! Key inside the box. Which lock does it go to?",
            commonMistake: {
              wrong: "It opened! There is a key. Which lock is this key for?",
              correct: "It worked! There's a key inside the box. Now which lock does this key fit?",
              explanation: "'It worked' 比 'it opened' 更自然。钥匙匹配锁用 'fit'。",
            },
            formalityVariants: {
              casual: "Boom! Got a key! Which lock?",
              standard: "It worked! There's a key inside. Which lock does this key fit?",
              formal: "Excellent, it opened! Inside is a key. The question now is — which lock does this key correspond to?",
            },
          },
          {
            speaker: "them",
            role: "队友",
            textEn: "Try the cabinet in the corner — it has a keyhole! We only have 20 minutes left, so let's stay focused. Everyone, gather your clues and let's figure out the next step together.",
            textZh: "试试角落的柜子——上面有钥匙孔！我们只剩20分钟了，保持专注。大家把线索集中起来，一起想下一步。",
            casualVersion: "Corner cabinet has a keyhole — try it! 20 minutes left, let's focus. Everyone share what you've found.",
            formalityVariants: {
              casual: "That cabinet in the corner! It has a keyhole. Hurry, 20 minutes! Everyone, what have you got?",
              standard: "Try the cabinet in the corner — it has a keyhole! We have 20 minutes left, let's stay focused.",
              formal: "I suggest trying the cabinet in the corner — I noticed it has a keyhole. We have approximately 20 minutes remaining. I recommend we consolidate our findings and strategize our next move collectively.",
            },
            keyPhrases: [
              { en: "keyhole", zh: "钥匙孔" },
              { en: "stay focused", zh: "保持专注" },
            ],
            alternativeExpressions: [
              {
                textEn: "Check the corner cabinet — it's got a lock! Clock's ticking, 20 minutes. Let's pool everything we've found and figure out the next puzzle.",
                textZh: "检查角落的柜子——有个锁！时间在走，20分钟。把发现的都集中起来，想下一个谜题。",
                actionHint: "推进游戏并提醒时间",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Wait, I think this UV light reveals hidden writing on the wall! Can someone read what it says?",
            textZh: "等等，我觉得这个紫外线灯能照出墙上的隐藏文字！有人能读出来是什么吗？",
            culturalNote: "密室逃脱常用紫外线灯（UV light/blacklight）来隐藏线索。",
            casualVersion: "Hold on — UV light shows something on the wall! What does it say?",
            commonMistake: {
              wrong: "This purple light shows hidden words on wall!",
              correct: "This UV light reveals hidden writing on the wall!",
              explanation: "紫外线灯叫 'UV light' 或 'blacklight'，不叫 'purple light'。隐藏文字用 'hidden writing'。",
            },
            formalityVariants: {
              casual: "Whoa — UV light! There's writing on the wall! What's it say?",
              standard: "Wait, this UV light reveals hidden writing on the wall! Can someone read it?",
              formal: "One moment — it appears this ultraviolet light is revealing concealed text on the wall. Could someone assist in deciphering what it reads?",
            },
          },
          {
            speaker: "them",
            role: "队友",
            textEn: "It says 'The answer is where time stands still.' The clock on the wall! It's stuck at 3:15. Quick, try 3-1-5 on that padlock! We've got 8 minutes — we can do this!",
            textZh: "上面写着'答案在时间静止之处。'墙上的钟！停在了3:15。快，在那个密码锁上试3-1-5！还有8分钟——我们能行！",
            casualVersion: "'The answer is where time stands still.' The clock! It's stuck at 3:15. Try 315 on the padlock! 8 minutes, let's go!",
            formalityVariants: {
              casual: "Time stands still — the clock! It's at 3:15! Try 315! We got 8 minutes, go go go!",
              standard: "It says 'where time stands still.' The clock is stuck at 3:15. Try 3-1-5 on the padlock! 8 minutes left!",
              formal: "The inscription reads: 'The answer is where time stands still.' Observe the wall clock — it is fixed at 3:15. I suggest trying the combination 3-1-5 on the padlock immediately. We have 8 minutes remaining. We can accomplish this.",
            },
            keyPhrases: [
              { en: "padlock", zh: "密码锁/挂锁" },
              { en: "we can do this", zh: "我们能行" },
            ],
            alternativeExpressions: [
              {
                textEn: "Where time stands still — look at the clock, it's frozen at 3:15! The padlock combo must be 315! Hurry, 8 minutes on the clock! Let's finish this!",
                textZh: "时间静止之处——看那个钟，停在3:15！密码锁一定是315！快，还有8分钟！我们搞定它！",
                actionHint: "破解谜题并催促团队行动",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 徒步远足 ====================
  {
    id: "entertainment-hiking-trail",
    category: "entertainment",
    titleZh: "徒步远足",
    titleEn: "Hiking Trail",
    description: "在户外徒步，与游客中心员工或同行者交流",
    otherRole: "游客中心工作人员",
    otherRoleIcon: "🥾",
    flows: [
      {
        id: "hiking-trailhead",
        titleZh: "出发准备",
        titleEn: "At the Trailhead",
        description: "在步道起点向工作人员咨询路线和注意事项",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, we're looking for a moderate trail, about 2 to 3 hours. What do you recommend?",
            textZh: "你好，我们想走一条中等难度的步道，大约2-3小时。你推荐什么？",
            culturalNote: "美国步道分 easy（简单）、moderate（中等）、strenuous（困难），标识在步道入口。",
            casualVersion: "Hey, any moderate trails? Looking for about 2-3 hours.",
            commonMistake: {
              wrong: "We want a not-too-hard walking road for 2-3 hours.",
              correct: "We're looking for a moderate trail, about 2 to 3 hours.",
              explanation: "步道叫 'trail'，不叫 'walking road'。难度用 'moderate' 而不是 'not-too-hard'。",
            },
            formalityVariants: {
              casual: "Got any moderate hikes? 2-3 hours-ish?",
              standard: "We're looking for a moderate trail, about 2 to 3 hours. What do you recommend?",
              formal: "Good morning. We are interested in a moderately difficult trail lasting approximately 2 to 3 hours. Could you offer a recommendation?",
            },
          },
          {
            speaker: "them",
            role: "游客中心员工",
            textEn: "I'd recommend Eagle Point Trail. It's a 5-mile loop with some nice views and a waterfall about halfway through. Moderate elevation gain — nothing too steep. Should take about 2.5 hours at a comfortable pace.",
            textZh: "推荐鹰点步道。5英里环线，有不错的风景，走到一半有个瀑布。海拔变化适中——不会太陡。轻松走大约2.5小时。",
            casualVersion: "Eagle Point Trail's your best bet. Five-mile loop, nice views, waterfall halfway. Not too steep. About 2.5 hours if you take it easy.",
            formalityVariants: {
              casual: "Do Eagle Point. Five miles, loop trail, waterfall, great views. Like 2.5 hours, easy pace.",
              standard: "I'd recommend Eagle Point Trail. It's a 5-mile loop with a waterfall halfway through. About 2.5 hours.",
              formal: "I would recommend the Eagle Point Trail. It is a five-mile loop that features scenic views and a waterfall at the midpoint. The elevation gain is moderate without any excessively steep sections. At a comfortable pace, it should take approximately two and a half hours.",
            },
            keyPhrases: [
              { en: "loop", zh: "环线" },
              { en: "elevation gain", zh: "海拔变化/爬升" },
            ],
            alternativeExpressions: [
              {
                textEn: "Eagle Point Trail would be perfect. It's a five-mile loop — moderate difficulty, gorgeous views, and there's a waterfall about halfway. You'll be back in about 2.5 hours if you don't rush.",
                textZh: "鹰点步道很合适。五英里环线——中等难度，风景很美，中途有瀑布。不赶的话大约2.5小时回来。",
                actionHint: "推荐适合的步道并描述特色",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds great. Is the trail well-marked? We don't want to get lost.",
            textZh: "听起来不错。步道标识清楚吗？我们不想迷路。",
            culturalNote: "美国国家公园和州立公园的步道通常有彩色标记（blaze）在树上或石头上，跟着标记走就不会迷路。",
            casualVersion: "Cool. Is it easy to follow? Don't wanna get lost.",
            commonMistake: {
              wrong: "Is the road clearly signed? We don't want to lose way.",
              correct: "Is the trail well-marked? We don't want to get lost.",
              explanation: "步道标记用 'well-marked'。迷路是 'get lost'，不是 'lose way'。",
            },
            formalityVariants: {
              casual: "Easy to follow? We're not trying to get lost out there.",
              standard: "Is the trail well-marked? We don't want to get lost.",
              formal: "Is the trail clearly marked? We want to ensure we can navigate it without difficulty.",
            },
          },
          {
            speaker: "them",
            role: "游客中心员工",
            textEn: "Very well-marked — follow the blue blazes on the trees. There's only one tricky junction about a mile in. Stay left there and you'll be fine. Here, take a trail map just in case.",
            textZh: "标识非常清楚——跟着树上的蓝色标记走。大约一英里处有一个容易走错的岔口。在那里走左边就行。来，带一张步道地图以防万一。",
            casualVersion: "Super well-marked — blue blazes on the trees. There's one fork about a mile in, stay left. Here, grab a map.",
            formalityVariants: {
              casual: "Yeah, super clear. Blue marks on trees. One fork a mile in — go left. Take a map.",
              standard: "Very well-marked. Follow the blue blazes. One tricky junction about a mile in — stay left. Take a trail map.",
              formal: "The trail is exceptionally well-marked. Please follow the blue blazes affixed to the trees. There is one potentially confusing junction approximately one mile from the trailhead — please bear left at that point. I recommend taking a trail map as a precaution.",
            },
            keyPhrases: [
              { en: "blazes", zh: "步道标记" },
              { en: "junction", zh: "岔口" },
            ],
            alternativeExpressions: [
              {
                textEn: "It's really well-marked, you'll see blue blazes painted on the trees. Only spot to watch is a fork about a mile in — stick to the left. And definitely take a map, just in case.",
                textZh: "标识很清楚，你们会看到树上画的蓝色标记。唯一要注意的是一英里处的岔路——走左边。一定带张地图以防万一。",
                actionHint: "说明标记系统并给出关键提示",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks. Do we need to worry about any wildlife on this trail?",
            textZh: "谢谢。这条步道需要担心野生动物吗？",
            culturalNote: "在美国徒步时可能遇到熊、山狮、蛇等。了解当地动物情况和应对方式很重要。",
            casualVersion: "Any wildlife we should know about?",
            commonMistake: {
              wrong: "Are there dangerous animals on this road?",
              correct: "Do we need to worry about any wildlife on this trail?",
              explanation: "'wildlife' 比 'dangerous animals' 更自然。步道是 'trail'。",
            },
            formalityVariants: {
              casual: "Any animals to watch out for?",
              standard: "Do we need to worry about any wildlife on this trail?",
              formal: "Should we be concerned about any wildlife encounters on this particular trail?",
            },
          },
          {
            speaker: "them",
            role: "游客中心员工",
            textEn: "There are black bears in the area, but they're shy and avoid people. Just make noise as you hike and keep your food sealed. If you see one, stay calm, don't run — just back away slowly. You'll most likely see deer and maybe a hawk. Have a great hike!",
            textZh: "这一带有黑熊，但它们怕人会躲开。走路时制造点声响，食物密封好。如果遇到，保持冷静，不要跑——慢慢后退就行。你们最可能看到的是鹿和鹰。祝徒步愉快！",
            casualVersion: "Black bears around, but they're more scared of you. Make noise, seal your food. See one? Stay cool, back away slowly. You'll probably just see deer. Have fun out there!",
            formalityVariants: {
              casual: "Bears are around but they avoid people. Just be noisy and keep food sealed. Deer and hawks are what you'll mostly see. Enjoy!",
              standard: "Black bears are in the area but they're shy. Make noise while hiking and keep food sealed. If you see one, back away slowly. Enjoy your hike!",
              formal: "Black bears do inhabit this area; however, they are generally timid and tend to avoid human contact. I recommend making audible noise while hiking and ensuring all food is properly sealed. Should you encounter a bear, remain calm and retreat slowly — do not run. You will most likely encounter deer and possibly raptors. I wish you a most enjoyable hike.",
            },
            keyPhrases: [
              { en: "back away slowly", zh: "慢慢后退" },
              { en: "keep your food sealed", zh: "把食物密封好" },
            ],
            alternativeExpressions: [
              {
                textEn: "We do have black bears, but honestly they don't want anything to do with people. Make some noise on the trail, lock up your snacks. If one shows up, just chill and walk backward. You'll probably only see deer. Happy trails!",
                textZh: "确实有黑熊，但说实话它们不想跟人打交道。在步道上弄出声响，把零食锁好。如果遇到，保持冷静慢慢后退。你们大概只会看到鹿。祝徒步愉快！",
                actionHint: "提供野生动物安全建议并祝好",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "hiking-on-trail",
        titleZh: "途中交流",
        titleEn: "On the Trail",
        description: "在徒步途中与其他徒步者交流",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Beautiful day for a hike! Do you know how far the waterfall is from here?",
            textZh: "今天天气很好，适合徒步！你知道瀑布离这里还有多远吗？",
            culturalNote: "在步道上和对面来的人打招呼是一种默认礼仪，通常说 'hi' 或 'beautiful day'。",
            casualVersion: "Great day, right? How far's the waterfall from here?",
            commonMistake: {
              wrong: "The weather is good for walking! How far is waterfall?",
              correct: "Beautiful day for a hike! Do you know how far the waterfall is from here?",
              explanation: "说 'beautiful day for a hike' 更地道。加 'from here' 明确参照点。",
            },
            formalityVariants: {
              casual: "Gorgeous day! Waterfall far from here?",
              standard: "Beautiful day for a hike! Do you know how far the waterfall is from here?",
              formal: "What a lovely day for hiking. Would you happen to know the distance to the waterfall from this point?",
            },
          },
          {
            speaker: "them",
            role: "同行徒步者",
            textEn: "It sure is! The waterfall is about 20 minutes ahead. The path gets a bit rocky near the end, so watch your step. Totally worth it though — the view is incredible.",
            textZh: "确实是！瀑布大约在前面20分钟处。快到的时候路有点多石头，注意脚下。不过绝对值得——风景太美了。",
            casualVersion: "For real! Waterfall's like 20 minutes that way. Gets rocky near the end, so careful. But the view? Amazing.",
            formalityVariants: {
              casual: "Yeah! About 20 minutes ahead. Gets rocky but the view's insane.",
              standard: "The waterfall is about 20 minutes ahead. Path gets rocky near the end, but the view is incredible.",
              formal: "Indeed it is. The waterfall is approximately 20 minutes ahead on the trail. The terrain becomes somewhat rocky as you approach, so please exercise caution. The view, however, is truly spectacular and well worth the effort.",
            },
            keyPhrases: [
              { en: "watch your step", zh: "注意脚下" },
              { en: "totally worth it", zh: "绝对值得" },
            ],
            alternativeExpressions: [
              {
                textEn: "Oh yeah, great day! The falls are maybe 20 minutes up. Trail gets a little rough toward the end — just watch your footing. But seriously, the payoff is amazing.",
                textZh: "是啊，好天气！瀑布大概上去20分钟。最后一段路有点难走——注意脚步。但说真的，回报太棒了。",
                actionHint: "提供距离信息和路况提示",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. By the way, is this trail a loop or do we need to go back the same way?",
            textZh: "好的。顺便问一下，这条步道是环线还是需要原路返回？",
            culturalNote: "步道有 loop（环线，不走回头路）和 out-and-back（原路返回）两种常见形式。",
            casualVersion: "Cool. Is this a loop or out and back?",
            commonMistake: {
              wrong: "Is this trail a circle or we go back same road?",
              correct: "Is this trail a loop or do we need to go back the same way?",
              explanation: "环线叫 'loop'，不叫 'circle'。原路返回说 'go back the same way' 或 'out-and-back'。",
            },
            formalityVariants: {
              casual: "Loop or out-and-back?",
              standard: "Is this trail a loop or do we need to go back the same way?",
              formal: "If I may ask, is this trail configured as a loop, or will we need to retrace our route?",
            },
          },
          {
            speaker: "them",
            role: "同行徒步者",
            textEn: "It's a loop! After the waterfall, the trail curves around and brings you back to the parking lot from a different direction. The second half is mostly downhill, so it goes pretty quick.",
            textZh: "是环线！过了瀑布，步道会绕一圈从不同方向回到停车场。后半段大部分是下坡，走得很快。",
            casualVersion: "It loops! After the falls, the trail wraps around back to the parking lot. Second half is mostly downhill — goes fast.",
            formalityVariants: {
              casual: "It's a loop — comes back around after the waterfall. Mostly downhill on the way back, easy.",
              standard: "It's a loop! After the waterfall, the trail curves around back to the parking lot. Second half is mostly downhill.",
              formal: "It is indeed a loop trail. After the waterfall, the trail arcs back toward the parking area via an alternate route. The return portion is predominantly downhill, making for a rather brisk journey back.",
            },
            keyPhrases: [
              { en: "curves around", zh: "绕一圈" },
              { en: "mostly downhill", zh: "大部分是下坡" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yep, it loops around! You won't have to retrace your steps. Past the waterfall, the trail takes you back from the other side. Coming back is easier — it's mostly downhill.",
                textZh: "是的，是环线！不用走回头路。过了瀑布，步道从另一边带你回去。回程更轻松——主要是下坡。",
                actionHint: "确认是环线并描述回程",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a relief. Oh wow, look at that view! Do you mind taking a photo of us with the valley in the background?",
            textZh: "那就放心了。哇，看那个景色！你介意帮我们拍张照吗？山谷做背景。",
            culturalNote: "在景点请人拍照是很常见的，大多数人都很乐意帮忙。递手机时可以先打开相机。",
            casualVersion: "Nice. Whoa, that view! Mind taking a photo of us with the valley back there?",
            commonMistake: {
              wrong: "Can you help us take a picture? The valley is behind.",
              correct: "Do you mind taking a photo of us with the valley in the background?",
              explanation: "'Do you mind...' 更礼貌。'in the background' 是固定搭配。",
            },
            formalityVariants: {
              casual: "That view! Hey, can you snap a pic of us real quick?",
              standard: "Do you mind taking a photo of us with the valley in the background?",
              formal: "What a breathtaking view. Would you be so kind as to take a photograph of us with the valley as a backdrop?",
            },
          },
          {
            speaker: "them",
            role: "同行徒步者",
            textEn: "Of course! Move a little to the left so I can get the whole valley in. Say cheese! Great shot. Want me to take another one just in case? Happy trails, enjoy the rest of the hike!",
            textZh: "当然！往左移一点，这样我能拍到整个山谷。说 cheese！拍得不错。要不要再拍一张以防万一？祝徒步愉快，享受后面的路程！",
            casualVersion: "Sure! Scoot left a bit. Say cheese! Got it. Another one? Cool. Happy trails!",
            formalityVariants: {
              casual: "Totally! Move left a bit. Cheese! Nice. One more? Alright, enjoy the rest!",
              standard: "Of course! Move a little left. Say cheese! Good one. Want another? Happy trails!",
              formal: "I would be delighted to. Please shift slightly to the left to capture the full valley panorama. Wonderful. Shall I take an additional photograph as a precaution? I wish you a most pleasant remainder of your hike.",
            },
            keyPhrases: [
              { en: "say cheese", zh: "说cheese（拍照口号）" },
              { en: "happy trails", zh: "祝徒步愉快" },
            ],
            alternativeExpressions: [
              {
                textEn: "Absolutely! Step a bit to your left — perfect. Smile! That's a great one. Do you want a backup shot? Awesome. Have a wonderful hike, you guys!",
                textZh: "当然！往左一步——完美。笑一个！拍得很好。要再来一张备用的吗？好的。祝你们徒步愉快！",
                actionHint: "帮忙拍照并友好告别",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 露营 ====================
  {
    id: "entertainment-camping-trip",
    category: "entertainment",
    titleZh: "露营",
    titleEn: "Camping Trip",
    description: "在露营地搭帐篷、生篝火、享受户外活动",
    otherRole: "营地管理员",
    otherRoleIcon: "🏕️",
    flows: [
      {
        id: "camping-trip-basic",
        titleZh: "营地入住",
        titleEn: "Campsite Check-in",
        description: "到达露营地办理入住并了解设施",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, we have a reservation for a campsite. The name is under Johnson.",
            textZh: "你好，我们预约了一个营位。名字是 Johnson。",
            culturalNote: "美国营地通常需要提前预约，到达后向管理处报到。",
            casualVersion: "Hey, we booked a spot — under Johnson.",
            commonMistake: {
              wrong: "We reserved a camp.",
              correct: "We have a reservation for a campsite.",
              explanation: "'campsite' 是具体的营位，'camp' 通常指整个营地或夏令营。",
            },
            formalityVariants: {
              casual: "Hey, got a campsite booked under Johnson.",
              standard: "Hi, we have a reservation for a campsite. The name is under Johnson.",
              formal: "Good afternoon, we have a campsite reservation under the name Johnson.",
            },
          },
          {
            speaker: "them",
            role: "营地管理员",
            textEn: "Welcome! You're in site 14, right by the lake. Fires are allowed in the fire pit only. Quiet hours start at 10 PM.",
            textZh: "欢迎！你们在14号营位，就在湖边。篝火只能在火坑里烧。晚上10点开始是安静时间。",
            casualVersion: "Hey, welcome! Site 14, lakeside. Keep fires in the pit, and keep it down after 10.",
            formalityVariants: {
              casual: "Welcome! You're at site 14 by the lake. Fires in the pit only, quiet after 10.",
              standard: "Welcome! You're in site 14, right by the lake. Fires are allowed in the fire pit only. Quiet hours start at 10 PM.",
              formal: "Welcome to our campground. You have been assigned site number 14, situated adjacent to the lake. Please note that campfires are permitted exclusively within the designated fire pit, and quiet hours commence at 10 PM.",
            },
            keyPhrases: [
              { en: "fire pit", zh: "火坑" },
              { en: "quiet hours", zh: "安静时间" },
            ],
            alternativeExpressions: [
              {
                textEn: "You're all set at site 14. It's a lakeside spot. Just remember: fires in the ring only, and noise down by 10.",
                textZh: "你们14号营位已经准备好了，湖边位置。记住：火只在火圈里烧，10点后保持安静。",
                actionHint: "alternative expression",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Great! Is firewood available for purchase here?",
            textZh: "太好了！这里有柴火可以买吗？",
            culturalNote: "大多数美国营地禁止自带外地木材以防止害虫传播，建议在营地购买。",
            casualVersion: "Nice! Can we buy firewood here?",
            commonMistake: {
              wrong: "Can I buy some woods?",
              correct: "Can I buy some firewood?",
              explanation: "'firewood' 是柴火，'woods' 指树林/森林，意思完全不同。",
            },
            formalityVariants: {
              casual: "Cool! Got firewood for sale?",
              standard: "Great! Is firewood available for purchase here?",
              formal: "Wonderful. Would it be possible to purchase firewood at the campground?",
            },
          },
          {
            speaker: "them",
            role: "营地管理员",
            textEn: "Yes, bundles are $8 each at the camp store. We also have ice and basic supplies.",
            textZh: "有的，营地商店每捆8美元。我们也有冰块和基本用品。",
            casualVersion: "Yeah, 8 bucks a bundle at the store. They've got ice and stuff too.",
            formalityVariants: {
              casual: "Yep, 8 bucks a bundle at the store. Ice and basics too.",
              standard: "Yes, bundles are $8 each at the camp store. We also have ice and basic supplies.",
              formal: "Certainly. Firewood bundles are available at the camp store for $8 each. Additionally, we carry ice and essential camping supplies.",
            },
            keyPhrases: [
              { en: "bundles", zh: "捆" },
              { en: "camp store", zh: "营地商店" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure thing — firewood's $8 a bundle. The store also stocks ice and other camping essentials.",
                textZh: "当然——柴火每捆8美元。商店还有冰块和其他露营必需品。",
                actionHint: "alternative expression",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "One more question — where are the restrooms and showers?",
            textZh: "再问一下——洗手间和淋浴在哪？",
            culturalNote: "美国营地的公共浴室通常叫 restroom 或 bathhouse，有些需要投币使用热水淋浴。",
            casualVersion: "Oh, where are the bathrooms and showers?",
            commonMistake: {
              wrong: "Where is the toilet?",
              correct: "Where are the restrooms?",
              explanation: "美国人很少直接说 toilet，用 restroom 或 bathroom 更礼貌。",
            },
            formalityVariants: {
              casual: "Where are the bathrooms?",
              standard: "One more question — where are the restrooms and showers?",
              formal: "If I may ask one more question, could you direct me to the restroom and shower facilities?",
            },
          },
          {
            speaker: "them",
            role: "营地管理员",
            textEn: "The bathhouse is about a two-minute walk from your site, just follow the path past the playground. Showers are coin-operated — 25 cents for 3 minutes.",
            textZh: "浴室离你们营位大约两分钟路程，沿着经过游乐场的小路走就到了。淋浴是投币的——25美分3分钟。",
            casualVersion: "Bathhouse is a quick walk past the playground. Showers take quarters — 25 cents gets you 3 minutes.",
            formalityVariants: {
              casual: "It's just past the playground, two-minute walk. Showers run on quarters.",
              standard: "The bathhouse is about a two-minute walk from your site, just follow the path past the playground. Showers are coin-operated.",
              formal: "The bathhouse facility is approximately a two-minute walk from your campsite. Please follow the pathway past the playground area. The showers operate on a coin-based system at 25 cents for three minutes.",
            },
            keyPhrases: [
              { en: "bathhouse", zh: "浴室/公共澡堂" },
              { en: "coin-operated", zh: "投币式的" },
            ],
            alternativeExpressions: [
              {
                textEn: "Head down the trail past the playground — you'll see the bathhouse. Bring quarters for the showers.",
                textZh: "沿着小路走过游乐场就能看到浴室。淋浴要带硬币。",
                actionHint: "alternative expression",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "camping-trip-inter",
        titleZh: "露营活动与安全",
        titleEn: "Camping Activities & Safety",
        description: "了解露营地的活动安排和安全须知",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Are there any hiking trails nearby that you'd recommend?",
            textZh: "附近有什么推荐的徒步路线吗？",
            culturalNote: "美国营地通常有标记好的步道系统，按难度分级（easy/moderate/strenuous）。",
            casualVersion: "Any good hikes around here?",
            commonMistake: {
              wrong: "Is there a good mountain to climb?",
              correct: "Are there any hiking trails nearby?",
              explanation: "美国人说去徒步一般用 'hiking trail'，不会说 'climb a mountain' 除非是专业登山。",
            },
            formalityVariants: {
              casual: "Any good trails around here?",
              standard: "Are there any hiking trails nearby that you'd recommend?",
              formal: "Could you recommend any hiking trails in the vicinity of the campground?",
            },
          },
          {
            speaker: "them",
            role: "营地管理员",
            textEn: "The Lakeview Loop is great for beginners — about 2 miles, mostly flat. If you want more of a challenge, the Ridge Trail is 5 miles with some elevation gain.",
            textZh: "湖景环线很适合初学者——大约2英里，基本平坦。如果想要更有挑战性的，山脊步道5英里，有一些爬升。",
            casualVersion: "Lakeview Loop's easy — 2 miles, pretty flat. Ridge Trail's tougher, 5 miles with some hills.",
            formalityVariants: {
              casual: "Lakeview Loop's chill, 2 miles. Ridge Trail's harder, 5 miles with some climbing.",
              standard: "The Lakeview Loop is great for beginners — about 2 miles, mostly flat. The Ridge Trail is 5 miles with some elevation gain.",
              formal: "I would recommend the Lakeview Loop for a leisurely experience — approximately 2 miles of relatively flat terrain. For a more vigorous hike, the Ridge Trail covers 5 miles with notable elevation changes.",
            },
            keyPhrases: [
              { en: "elevation gain", zh: "爬升/海拔增加" },
              { en: "mostly flat", zh: "基本平坦" },
            ],
            alternativeExpressions: [
              {
                textEn: "For an easy one, try the Lakeview Loop — 2 miles, no steep parts. The Ridge Trail is more demanding at 5 miles.",
                textZh: "想走轻松的，试试湖景环线——2英里，没有陡坡。山脊步道更有难度，5英里。",
                actionHint: "alternative expression",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "We might do the Ridge Trail. Should we be worried about wildlife — bears or anything?",
            textZh: "我们可能会走山脊步道。需要担心野生动物吗——有熊什么的吗？",
            culturalNote: "在美国国家公园和营地，熊类安全是严肃话题。食物必须存放在防熊容器中。",
            casualVersion: "Might try Ridge Trail. Any bears or wild stuff we should know about?",
            commonMistake: {
              wrong: "Are there dangerous animals?",
              correct: "Should we be worried about wildlife?",
              explanation: "'wildlife' 是指野生动物的常用词，比 'dangerous animals' 更自然。",
            },
            formalityVariants: {
              casual: "We might do the Ridge Trail. Any bears around here?",
              standard: "We might do the Ridge Trail. Should we be worried about wildlife?",
              formal: "We are considering the Ridge Trail. Are there any wildlife safety concerns we should be aware of?",
            },
          },
          {
            speaker: "them",
            role: "营地管理员",
            textEn: "We do have black bears in the area. Keep all food in the bear lockers at your site. If you see one, make noise and back away slowly — don't run.",
            textZh: "这个区域确实有黑熊。所有食物都要放在营位的防熊柜里。如果看到熊，发出声响慢慢后退——不要跑。",
            casualVersion: "Yeah, black bears are around. Use the bear lockers for food. See one? Make noise, back up slow. Don't run.",
            formalityVariants: {
              casual: "Yeah, there are black bears. Lock up your food. If you see one, be loud and back away. Don't run.",
              standard: "We do have black bears in the area. Keep all food in the bear lockers. If you see one, make noise and back away slowly.",
              formal: "Black bears are indeed present in this area. Please ensure all food items are securely stored in the bear-proof lockers provided at your campsite. In the event of an encounter, create audible noise and retreat slowly. Under no circumstances should you attempt to run.",
            },
            keyPhrases: [
              { en: "bear lockers", zh: "防熊柜" },
              { en: "back away slowly", zh: "慢慢后退" },
            ],
            alternativeExpressions: [
              {
                textEn: "Black bears live here, so store food in the bear boxes. If one shows up, stay calm, get loud, and move back slowly.",
                textZh: "这里有黑熊，所以食物要存放在防熊箱里。如果遇到，保持冷静，大声喊叫，慢慢后退。",
                actionHint: "alternative expression",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. What about campfires — are there any restrictions right now?",
            textZh: "了解了。篝火方面呢——现在有什么限制吗？",
            culturalNote: "美国西部旱季经常发布禁火令（fire ban），违反可能被罚款。",
            casualVersion: "Got it. What about fires — any rules right now?",
            commonMistake: {
              wrong: "Can we make fire?",
              correct: "Are there any fire restrictions right now?",
              explanation: "'fire restrictions' 是营地用语，比 'Can we make fire' 更地道。",
            },
            formalityVariants: {
              casual: "Cool. Any fire rules we should know?",
              standard: "Good to know. What about campfires — are there any restrictions right now?",
              formal: "Thank you for that information. Are there any current campfire restrictions we should be aware of?",
            },
          },
          {
            speaker: "them",
            role: "营地管理员",
            textEn: "Campfires are allowed right now, but always keep water or a shovel nearby. Make sure the fire is completely out before you leave or go to sleep — drown it, stir it, and feel it with your hand.",
            textZh: "目前允许篝火，但要随时备好水或铲子。离开或睡觉前确保火完全熄灭——浇水、搅拌，用手感受确认。",
            casualVersion: "Fires are fine now. Keep water handy, and totally put it out before bed — pour, stir, touch.",
            formalityVariants: {
              casual: "Fires are good right now. Just have water ready and make sure it's dead out before bed.",
              standard: "Campfires are allowed right now, but keep water nearby. Make sure the fire is completely out before leaving or sleeping.",
              formal: "Campfires are presently permitted. However, I must emphasize the importance of maintaining water or a fire suppression tool nearby at all times. Before retiring for the evening or departing your site, please fully extinguish the fire by dousing it with water, stirring the ashes, and verifying by touch that no heat remains.",
            },
            keyPhrases: [
              { en: "completely out", zh: "完全熄灭" },
              { en: "drown it, stir it", zh: "浇水、搅拌" },
            ],
            alternativeExpressions: [
              {
                textEn: "Fires are allowed, just be safe. Pour water on it, mix the ashes, and make sure it's cold before you walk away.",
                textZh: "可以生火，注意安全就好。浇水，搅拌灰烬，确认冷了再走。",
                actionHint: "alternative expression",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 海滩 ====================
  {
    id: "entertainment-beach-day",
    category: "entertainment",
    titleZh: "海滩",
    titleEn: "Beach Day",
    description: "在海滩租设备、了解安全信息、享受海边活动",
    otherRole: "海滩救生员/租赁店员",
    otherRoleIcon: "🏖️",
    flows: [
      {
        id: "beach-day-basic",
        titleZh: "海滩租赁与安全",
        titleEn: "Beach Rentals & Safety",
        description: "在海滩租用躺椅和遮阳伞，了解安全须知",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, how much is it to rent two beach chairs and an umbrella for the day?",
            textZh: "你好，租两把沙滩椅和一把遮阳伞一天多少钱？",
            culturalNote: "美国海滩的椅子和遮阳伞通常按天租赁，有些热门海滩需要提前预订。",
            casualVersion: "Hey, what's it cost for two chairs and an umbrella for the day?",
            commonMistake: {
              wrong: "How much for borrowing two chairs?",
              correct: "How much is it to rent two chairs?",
              explanation: "'rent' 是付费租用，'borrow' 是免费借用。商业场合一定用 rent。",
            },
            formalityVariants: {
              casual: "What do chairs and an umbrella run for the day?",
              standard: "Hi, how much is it to rent two beach chairs and an umbrella for the day?",
              formal: "Good morning. I would like to inquire about the daily rental rate for two beach chairs and a parasol.",
            },
          },
          {
            speaker: "them",
            role: "租赁店员",
            textEn: "It's $15 per chair and $20 for the umbrella. We have a package deal — two chairs plus an umbrella for $40.",
            textZh: "椅子每把15美元，遮阳伞20美元。我们有套餐——两把椅子加一把遮阳伞40美元。",
            casualVersion: "15 a chair, 20 for an umbrella. Or grab the combo — two chairs and umbrella for 40.",
            formalityVariants: {
              casual: "Chairs are 15 each, umbrella's 20. Combo deal is 40 for all three.",
              standard: "It's $15 per chair and $20 for the umbrella. The package deal is two chairs plus umbrella for $40.",
              formal: "Individual chairs are $15 each, and umbrellas are $20. We also offer a package that includes two chairs and one umbrella for a total of $40.",
            },
            keyPhrases: [
              { en: "package deal", zh: "套餐/组合优惠" },
              { en: "per chair", zh: "每把椅子" },
            ],
            alternativeExpressions: [
              {
                textEn: "Chairs run $15 apiece and umbrellas are $20. But the bundle saves you $10 — two chairs and an umbrella for $40.",
                textZh: "椅子每把15美元，遮阳伞20美元。但套餐能省10美元——两椅一伞40美元。",
                actionHint: "alternative expression",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "We'll take the package deal. Can we set up anywhere on the beach?",
            textZh: "我们要套餐。可以在海滩任何地方设置吗？",
            culturalNote: "有些美国海滩分私人区域和公共区域，设置前最好确认。",
            casualVersion: "We'll do the combo. Can we put them anywhere?",
            commonMistake: {
              wrong: "Can we put the chairs in any place?",
              correct: "Can we set up anywhere on the beach?",
              explanation: "'set up' 是布置/安置的常用说法，比 'put in any place' 更自然。",
            },
            formalityVariants: {
              casual: "Yeah, the combo. Where can we plop down?",
              standard: "We'll take the package deal. Can we set up anywhere on the beach?",
              formal: "We would like the package, please. Are there designated areas where we should place our chairs?",
            },
          },
          {
            speaker: "them",
            role: "租赁店员",
            textEn: "You can set up anywhere past the lifeguard tower. Just stay behind the flags — the red ones mean no swimming in that area.",
            textZh: "救生塔往前的地方都可以。注意旗子——红旗表示那个区域禁止游泳。",
            casualVersion: "Anywhere past the lifeguard tower. Watch the flags — red means no swimming there.",
            formalityVariants: {
              casual: "Past the lifeguard tower, anywhere's fine. Red flags mean don't swim there.",
              standard: "You can set up anywhere past the lifeguard tower. Stay behind the flags — red ones mean no swimming.",
              formal: "You are welcome to arrange your chairs anywhere beyond the lifeguard tower. Please take note of the beach flags — red flags indicate areas where swimming is prohibited.",
            },
            keyPhrases: [
              { en: "lifeguard tower", zh: "救生塔" },
              { en: "red flags", zh: "红旗" },
            ],
            alternativeExpressions: [
              {
                textEn: "Anywhere beyond the lifeguard stand is fine. Just pay attention to the warning flags — red means the water's off-limits.",
                textZh: "救生站往前都行。注意警示旗——红色表示水域禁止进入。",
                actionHint: "alternative expression",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Is the water safe to swim in today?",
            textZh: "明白了。今天水里游泳安全吗？",
            culturalNote: "美国海滩每天会根据水质和海浪条件发布安全评级。",
            casualVersion: "Cool. Safe to swim today?",
            commonMistake: {
              wrong: "Can we swim in the water today?",
              correct: "Is the water safe to swim in today?",
              explanation: "问 'safe to swim' 更具体地关注安全条件，而不仅仅是问能不能。",
            },
            formalityVariants: {
              casual: "Is it good to swim today?",
              standard: "Is the water safe to swim in today?",
              formal: "Could you advise on whether the current water conditions are suitable for swimming?",
            },
          },
          {
            speaker: "them",
            role: "租赁店员",
            textEn: "The green flag is up, so conditions are calm. Just watch out for the current near the jetty. Lifeguards are on duty until 6 PM.",
            textZh: "绿旗升起了，海况平静。注意防波堤附近的水流。救生员值班到下午6点。",
            casualVersion: "Green flag's up — water's calm. Just be careful near the jetty. Lifeguards are here till 6.",
            formalityVariants: {
              casual: "Green flag, water's great. Don't go near the jetty though. Lifeguards here till 6.",
              standard: "The green flag is up, so conditions are calm. Watch out for the current near the jetty. Lifeguards are on duty until 6 PM.",
              formal: "The green flag is currently displayed, indicating calm conditions. I would advise caution near the jetty area due to currents. Our lifeguards will be on active duty until 6 PM.",
            },
            keyPhrases: [
              { en: "on duty", zh: "值班中" },
              { en: "current near the jetty", zh: "防波堤附近的水流" },
            ],
            alternativeExpressions: [
              {
                textEn: "It's a green flag day — nice and calm. Stay away from the jetty though, the current's tricky. Guards are here till 6.",
                textZh: "今天是绿旗日——很平静。不过远离防波堤，那边水流复杂。救生员在到6点。",
                actionHint: "alternative expression",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "beach-day-inter",
        titleZh: "海滩活动与防护",
        titleEn: "Beach Activities & Sun Protection",
        description: "参与海滩活动并了解防晒和安全注意事项",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, do you offer any water sports rentals like paddleboards or kayaks?",
            textZh: "打扰一下，你们有水上运动租赁吗？比如桨板或皮划艇？",
            culturalNote: "桨板（paddleboard/SUP）在美国海滩非常流行，通常按小时租赁。",
            casualVersion: "Hey, do you guys rent paddleboards or kayaks?",
            commonMistake: {
              wrong: "Do you have paddleboard to borrow?",
              correct: "Do you offer paddleboard rentals?",
              explanation: "商业出租用 'offer rentals'，borrow 暗示免费借用。",
            },
            formalityVariants: {
              casual: "You guys got paddleboards or kayaks for rent?",
              standard: "Do you offer any water sports rentals like paddleboards or kayaks?",
              formal: "I was wondering whether you provide rental services for water sports equipment, such as stand-up paddleboards or kayaks?",
            },
          },
          {
            speaker: "them",
            role: "租赁店员",
            textEn: "We sure do! Paddleboards are $25 an hour and kayaks are $30. We include a life vest and a quick safety briefing with every rental.",
            textZh: "当然有！桨板每小时25美元，皮划艇30美元。每次租赁都包含救生衣和简短的安全说明。",
            casualVersion: "Yep! Paddleboards are 25 an hour, kayaks 30. Life vest and quick safety talk included.",
            formalityVariants: {
              casual: "Yeah! SUPs are 25/hour, kayaks 30. Comes with a vest and quick safety rundown.",
              standard: "We sure do! Paddleboards are $25 an hour and kayaks are $30. We include a life vest and safety briefing.",
              formal: "Indeed we do. Stand-up paddleboards are available at $25 per hour, and kayaks at $30 per hour. Each rental includes a complimentary life vest and a brief safety orientation.",
            },
            keyPhrases: [
              { en: "safety briefing", zh: "安全说明" },
              { en: "life vest", zh: "救生衣" },
            ],
            alternativeExpressions: [
              {
                textEn: "Absolutely — paddleboards run $25/hour and kayaks are $30. Every rental comes with a life jacket and a quick rundown on safety.",
                textZh: "当然——桨板每小时25美元，皮划艇30美元。每次租赁都附带救生衣和快速安全讲解。",
                actionHint: "alternative expression",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I've never tried paddleboarding before. Is it hard to learn?",
            textZh: "我从来没试过桨板。学起来难吗？",
            culturalNote: "美国人对待水上运动很开放，店员通常会鼓励新手并提供基础指导。",
            casualVersion: "Never tried it — is it tough to pick up?",
            commonMistake: {
              wrong: "Is it difficult to study?",
              correct: "Is it hard to learn?",
              explanation: "'study' 用于学术学习，运动类技能用 'learn' 或 'pick up'。",
            },
            formalityVariants: {
              casual: "Never done it. Hard to get the hang of?",
              standard: "I've never tried paddleboarding before. Is it hard to learn?",
              formal: "I haven't had the opportunity to try paddleboarding previously. Would you say it is difficult for a beginner to learn?",
            },
          },
          {
            speaker: "them",
            role: "租赁店员",
            textEn: "Not at all! Most people get the hang of it in about 10 minutes. Start on your knees and work your way up to standing. The water's calm today, so it's perfect for beginners.",
            textZh: "一点也不难！大多数人10分钟就能上手。先跪着，然后慢慢站起来。今天水很平静，非常适合初学者。",
            casualVersion: "Nah, super easy! Most folks figure it out in 10 minutes. Start on your knees, then stand up. Water's chill today — perfect for first-timers.",
            formalityVariants: {
              casual: "Nope, really easy. Kneel first, then stand. Today's water is perfect for newbies.",
              standard: "Not at all! Most people get the hang of it in about 10 minutes. Start on your knees and stand up gradually.",
              formal: "Not at all. The majority of first-time users become comfortable within approximately 10 minutes. I recommend beginning in a kneeling position before transitioning to standing. Today's calm water conditions are ideal for beginners.",
            },
            keyPhrases: [
              { en: "get the hang of it", zh: "上手/掌握窍门" },
              { en: "work your way up", zh: "逐步进阶" },
            ],
            alternativeExpressions: [
              {
                textEn: "It's really beginner-friendly. You'll be standing up in no time. Today's perfect since the water is so calm.",
                textZh: "对初学者很友好。你很快就能站起来。今天水面很平静，正合适。",
                actionHint: "alternative expression",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, I'll try the paddleboard! Also, could you recommend a good sunscreen? I forgot mine.",
            textZh: "好的，我试试桨板！另外，能推荐一款好的防晒霜吗？我忘带了。",
            culturalNote: "美国人很重视防晒，SPF 30+ 是推荐的最低标准，海滩活动建议用防水款。",
            casualVersion: "I'll go for the paddleboard! Oh, and got any sunscreen recs? Left mine at the hotel.",
            commonMistake: {
              wrong: "Do you have sun cream?",
              correct: "Do you have sunscreen?",
              explanation: "美国用 'sunscreen'，英国说 'sun cream'。在美国用 sun cream 会让人困惑。",
            },
            formalityVariants: {
              casual: "I'll do the paddleboard. Any sunscreen I can grab? Forgot mine.",
              standard: "I'll try the paddleboard! Could you recommend a good sunscreen?",
              formal: "I would like to rent the paddleboard, please. Additionally, might you recommend a quality sunscreen product? I neglected to bring mine.",
            },
          },
          {
            speaker: "them",
            role: "租赁店员",
            textEn: "We sell reef-safe SPF 50 right here — it's $12. It's water-resistant for 80 minutes, so you won't need to reapply too often while you're out on the board.",
            textZh: "我们这里卖珊瑚友好型SPF 50防晒霜——12美元。防水80分钟，在桨板上不用频繁补涂。",
            casualVersion: "Got reef-safe SPF 50 for 12 bucks. Lasts 80 minutes in water, so you're set on the board.",
            formalityVariants: {
              casual: "We've got reef-safe SPF 50 for 12 bucks. Holds up 80 minutes in water.",
              standard: "We sell reef-safe SPF 50 for $12. It's water-resistant for 80 minutes, so you won't need to reapply too often.",
              formal: "We carry a reef-safe SPF 50 sunscreen priced at $12. It offers 80 minutes of water resistance, which should provide adequate protection during your paddleboarding session without the need for frequent reapplication.",
            },
            keyPhrases: [
              { en: "reef-safe", zh: "珊瑚友好型" },
              { en: "water-resistant", zh: "防水的" },
            ],
            alternativeExpressions: [
              {
                textEn: "We've got a great reef-friendly SPF 50 for $12. It stays on for 80 minutes in water, so you're covered while boarding.",
                textZh: "我们有一款很好的珊瑚友好型SPF 50，12美元。水中可持续80分钟，桨板时够用了。",
                actionHint: "alternative expression",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 本地节日/集市 ====================
  {
    id: "entertainment-local-festival",
    category: "entertainment",
    titleZh: "本地节日/集市",
    titleEn: "Local Festival",
    description: "参加当地节日庆典或集市，体验美食和文化活动",
    otherRole: "摊位老板/活动工作人员",
    otherRoleIcon: "🎪",
    flows: [
      {
        id: "local-festival-basic",
        titleZh: "集市美食体验",
        titleEn: "Festival Food Experience",
        description: "在集市逛摊位、点美食",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi! This all looks amazing. What's your most popular item?",
            textZh: "你好！这些看起来都很棒。你们最受欢迎的是什么？",
            culturalNote: "美国集市上跟摊主聊天很常见，他们通常很乐意推荐和介绍食物。",
            casualVersion: "Hey! Everything looks great — what's the best seller?",
            commonMistake: {
              wrong: "What is your most famous food?",
              correct: "What's your most popular item?",
              explanation: "小摊位用 'popular' 比 'famous' 更合适，famous 暗示全国知名度。",
            },
            formalityVariants: {
              casual: "Wow, what do people usually go for?",
              standard: "Hi! What's your most popular item?",
              formal: "Good afternoon. Everything looks wonderful. Could you tell me which item you would recommend most highly?",
            },
          },
          {
            speaker: "them",
            role: "摊位老板",
            textEn: "Thanks! Our pulled pork tacos are the crowd favorite — slow-smoked for 12 hours. We also have a killer mac and cheese if you're into comfort food.",
            textZh: "谢谢！我们的手撕猪肉卷饼最受欢迎——慢熏12小时。如果你喜欢安慰食物，我们的芝士通心粉也超棒。",
            casualVersion: "Pulled pork tacos are the hit — 12-hour smoke. Mac and cheese is killer too.",
            formalityVariants: {
              casual: "Pulled pork tacos for sure — smoked 12 hours. Mac and cheese slaps too.",
              standard: "Our pulled pork tacos are the crowd favorite — slow-smoked for 12 hours. The mac and cheese is also great.",
              formal: "Our most sought-after offering is the pulled pork taco, which features pork that has been slow-smoked for 12 hours. I would also highly recommend our artisan macaroni and cheese for those who enjoy comfort cuisine.",
            },
            keyPhrases: [
              { en: "crowd favorite", zh: "最受欢迎的" },
              { en: "slow-smoked", zh: "慢熏的" },
            ],
            alternativeExpressions: [
              {
                textEn: "Everyone goes crazy for the pulled pork tacos. And if you like cheesy stuff, the mac and cheese is a must-try.",
                textZh: "大家都疯狂喜欢手撕猪肉卷饼。如果你喜欢芝士类的，通心粉必须试。",
                actionHint: "alternative expression",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll have two pulled pork tacos, please. Are they spicy?",
            textZh: "给我两个手撕猪肉卷饼。辣吗？",
            culturalNote: "美国摊位的辣度差异很大，问清楚辣度很常见，不会被认为挑剔。",
            casualVersion: "Two pulled pork tacos. Are they spicy at all?",
            commonMistake: {
              wrong: "Give me two tacos.",
              correct: "I'll have two tacos, please.",
              explanation: "'Give me' 在美国听起来比较粗鲁，用 'I'll have' 或 'Could I get' 更礼貌。",
            },
            formalityVariants: {
              casual: "Lemme get two pulled pork tacos. They hot?",
              standard: "I'll have two pulled pork tacos, please. Are they spicy?",
              formal: "I would like to order two of the pulled pork tacos, please. May I ask about the spice level?",
            },
          },
          {
            speaker: "them",
            role: "摊位老板",
            textEn: "They've got a little kick, but nothing too crazy. We have hot sauce on the side if you want more heat. That'll be $14.",
            textZh: "有一点辣，但不会太夸张。如果想更辣，旁边有辣酱。一共14美元。",
            casualVersion: "A little kick, nothing wild. Hot sauce on the side if you want it. 14 bucks.",
            formalityVariants: {
              casual: "Bit of a kick but chill. Hot sauce is right there. 14 bucks.",
              standard: "They've got a little kick, but nothing too crazy. Hot sauce is on the side. That'll be $14.",
              formal: "They feature a mild level of spice. Additional hot sauce is available on the condiment table should you desire more heat. Your total comes to $14.",
            },
            keyPhrases: [
              { en: "a little kick", zh: "有一点辣" },
              { en: "hot sauce on the side", zh: "旁边有辣酱" },
            ],
            alternativeExpressions: [
              {
                textEn: "There's a hint of spice but it's pretty mild. Extra hot sauce is over there if you want to dial it up. $14 total.",
                textZh: "有一点辣但很温和。如果想加辣，辣酱在那边。一共14美元。",
                actionHint: "alternative expression",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Here you go. Do you accept card or just cash?",
            textZh: "给你。你们收卡还是只收现金？",
            culturalNote: "美国集市越来越多摊位接受手机支付和信用卡，但小摊位可能只收现金。",
            casualVersion: "Here. Do you take card?",
            commonMistake: {
              wrong: "Can I pay by credit card?",
              correct: "Do you accept card?",
              explanation: "集市场景下 'Do you take/accept card?' 比 'Can I pay by credit card?' 更简洁自然。",
            },
            formalityVariants: {
              casual: "Here — you guys take card?",
              standard: "Here you go. Do you accept card or just cash?",
              formal: "Here you are. Do you accept credit card payments, or is cash preferred?",
            },
          },
          {
            speaker: "them",
            role: "摊位老板",
            textEn: "We take both! Card, cash, Apple Pay — whatever works for you. Enjoy the tacos, and make sure to check out the live music by the main stage later!",
            textZh: "都收！卡、现金、Apple Pay——怎么方便怎么来。享用卷饼，晚点别忘了去主舞台看现场音乐表演！",
            casualVersion: "We take everything — card, cash, Apple Pay. Enjoy! Oh, and there's live music at the main stage later.",
            formalityVariants: {
              casual: "Card, cash, whatever. Enjoy! Catch the live music at the stage later.",
              standard: "We take both! Card, cash, Apple Pay. Enjoy the tacos, and check out the live music later!",
              formal: "We accept all major payment methods, including cards, cash, and mobile payments. Please enjoy your tacos, and I would recommend visiting the main stage area later this evening for the live musical performance.",
            },
            keyPhrases: [
              { en: "whatever works for you", zh: "怎么方便怎么来" },
              { en: "live music", zh: "现场音乐" },
            ],
            alternativeExpressions: [
              {
                textEn: "All good — we take card, cash, and tap-to-pay. Enjoy! And don't miss the band at the main stage tonight.",
                textZh: "都行——卡、现金、感应支付都收。享用！今晚别错过主舞台的乐队表演。",
                actionHint: "alternative expression",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "local-festival-inter",
        titleZh: "节日文化体验",
        titleEn: "Festival Cultural Experience",
        description: "了解节日活动安排和参与互动项目",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, what events are happening today? We just got here and don't want to miss anything good.",
            textZh: "打扰一下，今天有什么活动？我们刚到，不想错过精彩的。",
            culturalNote: "美国节日/集市通常有印刷或电子版的活动日程表，在入口或信息台可以拿到。",
            casualVersion: "Hey, what's going on today? We just showed up.",
            commonMistake: {
              wrong: "What activities are there today?",
              correct: "What events are happening today?",
              explanation: "集市/节日用 'events' 比 'activities' 更常见，activities 偏向运动或课程。",
            },
            formalityVariants: {
              casual: "What's on today? We just rolled in.",
              standard: "What events are happening today? We just got here.",
              formal: "We have just arrived and would love to know what events are scheduled for today. We wouldn't want to miss any highlights.",
            },
          },
          {
            speaker: "them",
            role: "活动工作人员",
            textEn: "Welcome! There's a pie-eating contest at 2 PM, a local craft beer tasting at 3, and the headliner band goes on at 7. Pick up a schedule at the info booth by the entrance.",
            textZh: "欢迎！2点有吃派比赛，3点有当地精酿啤酒品鉴，7点有压轴乐队表演。在入口的信息台可以拿活动日程。",
            casualVersion: "Welcome! Pie-eating contest at 2, craft beer tasting at 3, band at 7. Grab a schedule at the info booth.",
            formalityVariants: {
              casual: "Hey, welcome! Pie contest at 2, beer tasting at 3, big band at 7. Schedule's at the info booth.",
              standard: "Welcome! There's a pie-eating contest at 2, craft beer tasting at 3, and the headliner at 7. Schedules are at the info booth.",
              formal: "Welcome to the festival. Today's agenda includes a pie-eating competition at 2 PM, a craft beer tasting session at 3 PM, and our featured musical performance at 7 PM. Printed schedules are available at the information booth near the entrance.",
            },
            keyPhrases: [
              { en: "headliner", zh: "压轴/主角" },
              { en: "info booth", zh: "信息台/咨询台" },
            ],
            alternativeExpressions: [
              {
                textEn: "Tons going on! There's a pie contest at 2, beer tasting at 3, and the main act plays at 7. Stop by the front booth for a full lineup.",
                textZh: "活动很多！2点有派比赛，3点啤酒品鉴，7点主表演。去前面的展台拿完整时间表。",
                actionHint: "alternative expression",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "The craft beer tasting sounds fun! How does that work — do we need tickets?",
            textZh: "精酿啤酒品鉴听起来不错！怎么参加——需要买票吗？",
            culturalNote: "美国节日的啤酒品鉴通常需要额外购票，参与者必须出示21岁以上的身份证件。",
            casualVersion: "Beer tasting sounds awesome! How's it work — need tickets?",
            commonMistake: {
              wrong: "How to participate in the beer tasting?",
              correct: "How does the beer tasting work?",
              explanation: "'How does it work' 是问流程的地道说法，比 'How to participate' 更口语化。",
            },
            formalityVariants: {
              casual: "Beer tasting sounds sick! Do we need tickets or anything?",
              standard: "The craft beer tasting sounds fun! How does that work — do we need tickets?",
              formal: "The craft beer tasting is quite appealing. Could you explain how participation works? Is advance ticketing required?",
            },
          },
          {
            speaker: "them",
            role: "活动工作人员",
            textEn: "It's $15 for a tasting wristband — you get 8 samples from different local breweries. Just make sure to bring your ID. You have to be 21 or older.",
            textZh: "品鉴手环15美元——可以在不同的本地酿酒厂品尝8杯。记得带身份证。必须21岁以上。",
            casualVersion: "15 bucks for a wristband, 8 samples. Bring your ID — gotta be 21.",
            formalityVariants: {
              casual: "Wristband's 15 bucks, 8 tastings. Bring ID, 21 and up.",
              standard: "It's $15 for a tasting wristband — 8 samples from local breweries. Bring your ID, must be 21+.",
              formal: "The tasting experience is $15 per person, which includes a wristband providing access to 8 sample servings from various local breweries. Please have a valid photo identification available, as participants must be 21 years of age or older.",
            },
            keyPhrases: [
              { en: "tasting wristband", zh: "品鉴手环" },
              { en: "21 or older", zh: "21岁以上" },
            ],
            alternativeExpressions: [
              {
                textEn: "For $15 you get a wristband and 8 pours from local breweries. Don't forget your ID — they check everyone.",
                textZh: "15美元拿一个手环，可以品尝8杯本地酿酒。别忘带证件——每个人都要查。",
                actionHint: "alternative expression",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds great. Is there a kids' area too? We have our daughter with us.",
            textZh: "听起来不错。有儿童区吗？我们带了女儿。",
            culturalNote: "美国社区节日通常设有儿童区（kids' zone），有充气城堡、手工和游戏等。",
            casualVersion: "Awesome. Is there a kids' section? We've got our daughter.",
            commonMistake: {
              wrong: "Is there a children playground?",
              correct: "Is there a kids' area?",
              explanation: "集市上的儿童活动区叫 kids' area/zone，playground 特指固定游乐设施。",
            },
            formalityVariants: {
              casual: "Nice. Anything for kids? Our daughter's with us.",
              standard: "Is there a kids' area too? We have our daughter with us.",
              formal: "That sounds wonderful. Would there happen to be a children's activity area as well? We are accompanied by our daughter.",
            },
          },
          {
            speaker: "them",
            role: "活动工作人员",
            textEn: "Absolutely! The kids' zone is by the south entrance — they've got face painting, a bounce house, and a petting zoo. It's free with festival admission.",
            textZh: "当然有！儿童区在南入口——有脸部彩绘、充气城堡和宠物动物园。凭入场券免费。",
            casualVersion: "Yeah! Kids' zone is at the south entrance — face painting, bounce house, petting zoo. All free.",
            formalityVariants: {
              casual: "Totally! South entrance — face painting, bounce house, petting zoo. Free with your ticket.",
              standard: "Absolutely! The kids' zone is by the south entrance — face painting, bounce house, and petting zoo. Free with admission.",
              formal: "Certainly. The children's area is situated near the south entrance and features face painting, an inflatable bounce house, and a petting zoo. All activities are complimentary with your festival admission.",
            },
            keyPhrases: [
              { en: "bounce house", zh: "充气城堡" },
              { en: "petting zoo", zh: "宠物动物园/互动小动物区" },
            ],
            alternativeExpressions: [
              {
                textEn: "For sure! Head to the south entrance for the kids' zone. They have face painting, a bouncy castle, and animals to pet — all included in the entry fee.",
                textZh: "没问题！去南入口找儿童区。有彩绘、充气城堡和可以互动的小动物——都包含在门票里。",
                actionHint: "alternative expression",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 脱口秀/喜剧表演 ====================
  {
    id: "entertainment-comedy-show",
    category: "entertainment",
    titleZh: "脱口秀/喜剧表演",
    titleEn: "Comedy Show",
    description: "观看脱口秀或即兴喜剧表演，了解现场礼仪",
    otherRole: "场馆工作人员",
    otherRoleIcon: "🎤",
    flows: [
      {
        id: "comedy-show-basic",
        titleZh: "买票入场",
        titleEn: "Tickets & Seating",
        description: "在喜剧俱乐部买票并了解入场须知",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, do you still have tickets for tonight's show?",
            textZh: "你好，今晚的演出还有票吗？",
            culturalNote: "美国喜剧俱乐部（comedy club）通常较小，热门表演经常售罄，建议提前购票。",
            casualVersion: "Hey, any tickets left for tonight?",
            commonMistake: {
              wrong: "Are there still tickets for tonight?",
              correct: "Do you still have tickets for tonight's show?",
              explanation: "加 'show' 更明确，因为有些场馆一晚有多场演出。",
            },
            formalityVariants: {
              casual: "Got any tix left for tonight?",
              standard: "Hi, do you still have tickets for tonight's show?",
              formal: "Good evening. I was wondering whether tickets are still available for this evening's performance.",
            },
          },
          {
            speaker: "them",
            role: "场馆工作人员",
            textEn: "You're in luck — we have a few seats left! It's $25 per ticket, and there's a two-drink minimum. The show starts at 8, doors open at 7:30.",
            textZh: "你运气好——还剩几个位子！每张票25美元，最低消费两杯饮品。演出8点开始，7:30开门。",
            casualVersion: "Yeah, got a few left! 25 a ticket, two-drink minimum. Doors at 7:30, show at 8.",
            formalityVariants: {
              casual: "Lucky you — a few left. 25 bucks, two-drink min. Show's at 8, doors at 7:30.",
              standard: "We have a few seats left! $25 per ticket with a two-drink minimum. Show at 8, doors at 7:30.",
              formal: "You are fortunate — we do have a limited number of seats remaining. Tickets are $25 each, and we have a two-drink minimum policy. The doors will open at 7:30 PM, with the performance commencing at 8 PM.",
            },
            keyPhrases: [
              { en: "two-drink minimum", zh: "最低消费两杯饮品" },
              { en: "doors open", zh: "开门/入场时间" },
            ],
            alternativeExpressions: [
              {
                textEn: "We've still got some spots! Tickets are $25, and you'll need to order at least two drinks. We open the doors at 7:30 for the 8 o'clock show.",
                textZh: "还有位子！票价25美元，需要至少点两杯饮品。7:30开门，8点演出。",
                actionHint: "alternative expression",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Two tickets, please. What does the two-drink minimum mean exactly?",
            textZh: "两张票，谢谢。两杯最低消费具体是什么意思？",
            culturalNote: "Two-drink minimum 是美国喜剧俱乐部的常见规定，意思是每人必须至少消费两杯饮品（含酒精或不含均可）。",
            casualVersion: "Two tickets. So the two-drink thing — what's that about?",
            commonMistake: {
              wrong: "What means two-drink minimum?",
              correct: "What does the two-drink minimum mean?",
              explanation: "英语疑问句语序是 'What does X mean'，不是 'What means X'。",
            },
            formalityVariants: {
              casual: "I'll take two. What's the deal with the drink minimum?",
              standard: "Two tickets, please. What does the two-drink minimum mean exactly?",
              formal: "I would like to purchase two tickets, please. Could you clarify the two-drink minimum policy?",
            },
          },
          {
            speaker: "them",
            role: "场馆工作人员",
            textEn: "Each person has to order at least two drinks during the show — could be cocktails, beer, or non-alcoholic. A server will come to your table to take your order.",
            textZh: "每个人在演出期间至少要点两杯饮品——鸡尾酒、啤酒或无酒精饮品都行。服务员会到你桌前点单。",
            casualVersion: "Everyone orders at least two drinks — alcohol or not. A server comes to your table.",
            formalityVariants: {
              casual: "Just order two drinks each — doesn't have to be booze. They'll come to your table.",
              standard: "Each person orders at least two drinks during the show — alcoholic or not. A server will take your order at the table.",
              formal: "The policy requires each guest to purchase a minimum of two beverages during the performance. These may be alcoholic or non-alcoholic selections. A member of our service staff will attend to your table to take your order.",
            },
            keyPhrases: [
              { en: "non-alcoholic", zh: "无酒精的" },
              { en: "take your order", zh: "点单" },
            ],
            alternativeExpressions: [
              {
                textEn: "You each need to buy two drinks — beer, cocktails, soda, whatever. Your server will swing by your table once you're seated.",
                textZh: "每个人至少买两杯——啤酒、鸡尾酒、汽水都行。入座后服务员会来你桌前。",
                actionHint: "alternative expression",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Is there anything we should know about the seating — like, are the front rows different?",
            textZh: "明白了。座位有什么要注意的吗——比如前排有什么不同吗？",
            culturalNote: "喜剧俱乐部前排经常被叫做 'splash zone'，表演者可能会和前排观众互动甚至开玩笑。",
            casualVersion: "Anything about seating? Like, is the front row a thing?",
            commonMistake: {
              wrong: "Is the first line different?",
              correct: "Are the front rows different?",
              explanation: "座位的前排说 'front rows' 或 'front seats'，不说 'first line'。",
            },
            formalityVariants: {
              casual: "Anything about the seats? Front row a trap?",
              standard: "Is there anything we should know about the seating — are the front rows different?",
              formal: "Is there anything particular we should be aware of regarding the seating arrangement? Do the front rows differ from the rest?",
            },
          },
          {
            speaker: "them",
            role: "场馆工作人员",
            textEn: "Fair warning — the front rows are the 'splash zone.' The comedian will probably talk to you and crack jokes at your expense. If you'd rather just watch, grab a seat toward the back.",
            textZh: "提醒一下——前排是'飞溅区'。喜剧演员可能会跟你说话，拿你开玩笑。如果只想看的话，坐后面比较好。",
            casualVersion: "Heads up — front row's the splash zone. The comic will totally mess with you. Sit in the back if you wanna chill.",
            formalityVariants: {
              casual: "Front row? You'll get picked on. Sit in the back if you wanna stay out of it.",
              standard: "Fair warning — the front rows are the splash zone. The comedian may joke at your expense. Sit toward the back if you'd rather just watch.",
              formal: "I should advise you that the front rows are often referred to as the 'splash zone.' The performer may engage directly with front-row guests, often incorporating them into comedic material. If you would prefer a more observational experience, I would recommend selecting seats toward the rear of the venue.",
            },
            keyPhrases: [
              { en: "splash zone", zh: "飞溅区（容易被互动的区域）" },
              { en: "at your expense", zh: "拿你开玩笑" },
            ],
            alternativeExpressions: [
              {
                textEn: "Just so you know, front-row folks often become part of the act. The comic might single you out. Back rows are safer if that's not your thing.",
                textZh: "说一下，前排观众经常成为表演的一部分。演员可能会选中你。如果不喜欢这样，后排更安全。",
                actionHint: "alternative expression",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "comedy-show-inter",
        titleZh: "观演礼仪与互动",
        titleEn: "Show Etiquette & Interaction",
        description: "了解喜剧表演的礼仪规范和观后交流",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Is it okay to record parts of the show? I'd love to share a clip with friends.",
            textZh: "可以录一部分表演吗？我想分享给朋友看。",
            culturalNote: "美国绝大多数喜剧俱乐部严格禁止录音录像，因为喜剧演员的段子是他们的知识产权。",
            casualVersion: "Can I record any of it? Wanna share with friends.",
            commonMistake: {
              wrong: "Can I take a video of the show?",
              correct: "Is it okay to record parts of the show?",
              explanation: "'Is it okay to' 是征求许可的礼貌说法，比直接问 'Can I' 更得体。",
            },
            formalityVariants: {
              casual: "Mind if I film a bit?",
              standard: "Is it okay to record parts of the show?",
              formal: "Would it be permissible to capture a brief recording during the performance? I would like to share it with friends.",
            },
          },
          {
            speaker: "them",
            role: "场馆工作人员",
            textEn: "Sorry, no recording is allowed — no photos or videos during the performance. The comedians work really hard on their material, and they don't want it leaked online. Phones need to be put away once the show starts.",
            textZh: "抱歉，不允许录制——演出期间不能拍照或录像。喜剧演员在段子上花了很多心血，不希望泄露到网上。演出开始后手机要收起来。",
            casualVersion: "No can do — no pics, no video. Comics don't want their stuff online. Phones away once it starts.",
            formalityVariants: {
              casual: "Sorry, strict no-phone rule. They don't want their material leaked. Phones gotta be put away.",
              standard: "Sorry, no recording — no photos or videos. Comedians don't want their material online. Phones need to be put away.",
              formal: "I apologize, but we maintain a strict no-recording policy. Photography and videography are prohibited throughout the performance. Our performers invest considerable effort in developing their material and understandably wish to protect it from unauthorized distribution. We kindly ask that all mobile devices be stowed once the show commences.",
            },
            keyPhrases: [
              { en: "no recording is allowed", zh: "不允许录制" },
              { en: "put away", zh: "收起来" },
            ],
            alternativeExpressions: [
              {
                textEn: "We have a no-phone policy during shows. The performers' material is their livelihood. You'll be asked to keep your phone in your pocket.",
                textZh: "演出期间有无手机政策。表演者的段子是他们的生计。请把手机放在口袋里。",
                actionHint: "alternative expression",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Totally understand. One more thing — is heckling the comedian normal here? I've seen it in movies.",
            textZh: "完全理解。再问一个——在这里起哄是正常的吗？我在电影里看过。",
            culturalNote: "Heckling（对表演者起哄）在美国喜剧界通常不受欢迎，可能会被赶出场馆。",
            casualVersion: "Makes sense. So is heckling a thing here? Seen it in movies.",
            commonMistake: {
              wrong: "Is it normal to shout at the comedian?",
              correct: "Is heckling the comedian normal?",
              explanation: "'heckling' 是专门指在表演中起哄的词，比 'shout at' 更精准。",
            },
            formalityVariants: {
              casual: "Fair enough. So can you heckle here or nah?",
              standard: "Totally understand. Is heckling the comedian normal here?",
              formal: "I completely understand. If I may ask one more question — is audience heckling a customary part of the experience at this venue?",
            },
          },
          {
            speaker: "them",
            role: "场馆工作人员",
            textEn: "Please don't. Heckling is really frowned upon — most comedians will shut you down hard, and we'll ask you to leave if it disrupts the show. Just laugh and enjoy!",
            textZh: "请不要。起哄是非常不受欢迎的——大多数喜剧演员会狠狠怼回去，如果影响了演出我们会请你离开。笑着享受就好！",
            casualVersion: "Yeah, don't do that. Comics will roast you, and we'll kick you out. Just laugh and have fun.",
            formalityVariants: {
              casual: "Nah, bad idea. They'll destroy you and we'll boot you out. Just enjoy the show.",
              standard: "Please don't. Heckling is frowned upon — comedians will shut you down, and you may be asked to leave.",
              formal: "I would strongly advise against it. Heckling is not condoned at our establishment. Performers are well-equipped to respond to such interruptions, and persistent disruption will result in removal from the venue. We encourage you to simply relax, laugh, and enjoy the performance.",
            },
            keyPhrases: [
              { en: "frowned upon", zh: "不受欢迎的/不赞成的" },
              { en: "shut you down", zh: "怼回去/让你哑口无言" },
            ],
            alternativeExpressions: [
              {
                textEn: "Heckling is a big no. The comic will embarrass you, and security may show you the door. Best to just sit back and enjoy.",
                textZh: "起哄是大忌。演员会让你难堪，保安可能请你出去。最好坐下来好好享受。",
                actionHint: "alternative expression",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Ha, good to know! Can we meet the comedian after the show? I'm a huge fan.",
            textZh: "哈，长知识了！演出后能见到喜剧演员吗？我是他的超级粉丝。",
            culturalNote: "很多喜剧演员在演出后会在酒吧区和观众交流，或者在merchandise桌（周边商品桌）签名。",
            casualVersion: "Haha noted! Can we meet the comic after? Big fan.",
            commonMistake: {
              wrong: "Can we see the comedian after show?",
              correct: "Can we meet the comedian after the show?",
              explanation: "'meet' 比 'see' 更适合表达见面交流，'the show' 需要冠词 the。",
            },
            formalityVariants: {
              casual: "Cool, cool. Can we say hi to the comic after?",
              standard: "Can we meet the comedian after the show? I'm a huge fan.",
              formal: "That is helpful to know. Would there be an opportunity to meet the performer after the show? I am quite an admirer of their work.",
            },
          },
          {
            speaker: "them",
            role: "场馆工作人员",
            textEn: "Usually, yes! Most performers hang out at the merch table after the show to sign stuff and take photos. Just be respectful of their time — they love meeting fans but they've got a long night too.",
            textZh: "通常可以！大多数表演者会在演出后的周边商品桌和观众签名拍照。尊重他们的时间就好——他们喜欢见粉丝，但一晚也很辛苦。",
            casualVersion: "Yeah, usually! They hang at the merch table — signings, photos, the whole deal. Just be cool about their time.",
            formalityVariants: {
              casual: "Usually yeah! They chill at the merch table. Just don't take forever — they've had a long night.",
              standard: "Usually, yes! Most performers hang out at the merch table after to sign things and take photos. Be respectful of their time.",
              formal: "In most cases, yes. Our performers typically make themselves available at the merchandise table following the show for autographs and photographs. We do ask that guests be mindful of the performer's time, as they have had a demanding evening.",
            },
            keyPhrases: [
              { en: "merch table", zh: "周边商品桌" },
              { en: "respectful of their time", zh: "尊重他们的时间" },
            ],
            alternativeExpressions: [
              {
                textEn: "Most comics stick around after the show by the merch area. Great chance for photos and autographs — just keep it brief so everyone gets a turn.",
                textZh: "大多数演员会在演出后留在周边区域。很好的拍照签名机会——简短一点，让每个人都有机会。",
                actionHint: "alternative expression",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
];
