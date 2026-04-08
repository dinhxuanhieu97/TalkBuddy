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
          { speaker: "you", textEn: "Hi, what movies are showing tonight?", textZh: "你好，今晚有什么电影？", casualVersion: "Hey, what's playing tonight?" },
          { speaker: "them", role: "售票员", textEn: "We have three showings tonight: an action movie at 7, a comedy at 7:30, and a horror film at 8. Which one interests you?", textZh: "今晚有三场：7点的动作片、7:30的喜剧片和8点的恐怖片。您对哪个感兴趣？", keyPhrases: [{ en: "showings", zh: "场次" }, { en: "which one interests you", zh: "您对哪个感兴趣" }],
            alternativeExpressions: [
              { textEn: "So tonight we've got an action flick at 7, a comedy at 7:30, and a horror one at 8. What are you in the mood for?", textZh: "今晚有7点的动作片、7:30的喜剧和8点的恐怖片。你想看哪个？", actionHint: "在询问你的偏好，直接说想看的类型", frequency: "common" },
              { textEn: "There's three movies playing tonight — action at 7, comedy at 7:30, horror at 8. Any of those catch your eye?", textZh: "今晚有三部片——7点动作片、7:30喜剧、8点恐怖片。有看上的吗？", actionHint: "列出选项让你挑，直接说你的选择", frequency: "common" },
            ] },
          { speaker: "you", textEn: "The comedy sounds good. Two adult tickets, please.", textZh: "喜剧片听起来不错。请给我两张成人票。", culturalNote: "在欧美买票时要说明是成人票 adult 还是儿童票 child/kid，有些影院还有学生票 student 和老年票 senior。" },
          { speaker: "them", role: "售票员", textEn: "Sure. Would you prefer seats closer to the front or further back? We also have a few center seats left in row J.", textZh: "好的。您喜欢靠前还是靠后的位置？J排中间还有几个位置。", keyPhrases: [{ en: "closer to the front", zh: "靠前" }, { en: "further back", zh: "靠后" }, { en: "center seats", zh: "中间位置" }],
            alternativeExpressions: [
              { textEn: "Wanna sit up front or more towards the back? We still have some middle seats in row J.", textZh: "想坐前面还是后面一点？J排中间还有几个座位。", actionHint: "问你选位置偏好，直接说想坐哪里", frequency: "common" },
              { textEn: "Do you have a seating preference? There's a couple of spots open in the center of row J.", textZh: "你有座位偏好吗？J排中间有几个空位。", actionHint: "问座位偏好，说你想要的位置", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Center seats in row J would be perfect.", textZh: "J排中间的位置就太好了。" },
          { speaker: "them", role: "售票员", textEn: "Great. That comes to $28. Would you like to add a combo — popcorn and two drinks for $12?", textZh: "好的。一共28美元。要加一个套餐吗——爆米花加两杯饮料12美元？", keyPhrases: [{ en: "combo", zh: "套餐" }, { en: "that comes to", zh: "一共是" }],
            alternativeExpressions: [
              { textEn: "Alright, that's $28 total. You wanna grab a combo? Popcorn and two drinks for 12 bucks.", textZh: "好的，一共28美元。要来个套餐吗？爆米花加两杯饮料12块。", actionHint: "告诉你总价并推荐套餐，可以接受或拒绝", frequency: "common" },
              { textEn: "Your total's $28. We've got a deal on popcorn and drinks — $12 for the bundle. Interested?", textZh: "总共28美元。爆米花和饮料有个优惠——打包12美元。感兴趣吗？", actionHint: "报价后推销套餐优惠", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Sure, why not. I'll pay by card.", textZh: "好啊，为什么不呢。我刷卡。", casualVersion: "Yeah, throw that in. Card, please." },
          { speaker: "them", role: "售票员", textEn: "Here are your tickets and your receipt. Theater 3 on the left. Enjoy the movie!", textZh: "这是您的票和收据。3号厅在左边。祝观影愉快！", keyPhrases: [{ en: "theater", zh: "影厅" }, { en: "enjoy the movie", zh: "祝观影愉快" }],
            alternativeExpressions: [
              { textEn: "Here you go — tickets and receipt. Screen 3, just down the hall on your left. Have a good one!", textZh: "给您——票和收据。3号屏幕，走廊左边。祝愉快！", actionHint: "递给你票据并指路，说谢谢然后去影厅", frequency: "common" },
              { textEn: "You're all set. Theater 3 is to your left. Enjoy!", textZh: "都弄好了。3号厅在您左边。祝愉快！", actionHint: "简洁确认完成，说谢谢即可", frequency: "common" },
            ] },
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
          { speaker: "you", textEn: "Hello, one adult ticket, please. Do you have an audio guide?", textZh: "你好，一张成人票。你们有语音导览吗？", culturalNote: "很多大型博物馆提供 audio guide（语音导览），通常需要额外付费或押证件。" },
          { speaker: "them", role: "前台", textEn: "One adult ticket is $20. The audio guide is an extra $7, and it's available in eight languages including Mandarin.", textZh: "一张成人票20美元。语音导览额外7美元，有八种语言可选包括中文。", keyPhrases: [{ en: "audio guide", zh: "语音导览" }, { en: "available in", zh: "提供...语言" }],
            alternativeExpressions: [
              { textEn: "That'll be $20 for one adult. Audio guide's 7 bucks extra — we've got it in eight languages, Mandarin included.", textZh: "成人票20美元。语音导览额外7块——有八种语言，包括中文。", actionHint: "报价并介绍语音导览，决定是否要导览", frequency: "common" },
              { textEn: "It's $20 for admission. If you want the audio guide, it's $7 more — comes in eight languages, Chinese is one of them.", textZh: "门票20美元。语音导览的话多7美元——有八种语言，中文也有。", actionHint: "分开报门票和导览价格", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Great, I'll take the audio guide in English. Which exhibition do you recommend?", textZh: "好的，我要英文的语音导览。你推荐哪个展览？" },
          { speaker: "them", role: "前台", textEn: "I'd definitely recommend the special exhibition on the second floor — it's a limited-time Impressionist collection. It closes next week.", textZh: "我强烈推荐二楼的特展——是限时的印象派收藏展。下周就结束了。", keyPhrases: [{ en: "special exhibition", zh: "特展" }, { en: "limited-time", zh: "限时的" }, { en: "Impressionist", zh: "印象派" }],
            alternativeExpressions: [
              { textEn: "Oh, you should totally check out the Impressionist show upstairs — it's only here for another week.", textZh: "你一定要去看楼上的印象派展——就剩一周了。", actionHint: "热情推荐特展，强调时间紧迫", frequency: "common" },
              { textEn: "If you only see one thing, make it the Impressionist exhibit on the second floor. It wraps up next week.", textZh: "如果只能看一个，就去二楼的印象派展。下周就结束了。", actionHint: "强烈推荐，用 'if you only see one thing' 表示必看", frequency: "occasional" },
            ] },
          { speaker: "you", textEn: "That sounds wonderful. Is photography allowed inside?", textZh: "听起来太棒了。里面可以拍照吗？", culturalNote: "不同博物馆拍照规则不同：有些允许无闪光灯拍照 no flash photography，有些完全禁止。进去前问一下是好习惯。" },
          { speaker: "them", role: "前台", textEn: "Photos are fine in the permanent galleries, but no flash please. The special exhibition is no photography at all, I'm afraid.", textZh: "常设展厅可以拍照，但请不要用闪光灯。特展恐怕完全不能拍照。", keyPhrases: [{ en: "permanent galleries", zh: "常设展厅" }, { en: "no flash", zh: "不要用闪光灯" }],
            alternativeExpressions: [
              { textEn: "You can take pictures in the regular galleries — just no flash. But the special exhibit is strictly no photos.", textZh: "常规展厅可以拍照——别用闪光灯就行。但特展严格禁止拍照。", actionHint: "说明拍照规则，常设展可拍但特展不行", frequency: "common" },
              { textEn: "Feel free to snap pics in the permanent collection, no flash though. The special show is a no-photo zone, unfortunately.", textZh: "常设展随便拍，但别开闪光灯。特展不让拍照，挺遗憾的。", actionHint: "snap pics 就是拍照的口语说法", frequency: "occasional" },
            ] },
          { speaker: "you", textEn: "Got it. Where do I pick up the audio guide?", textZh: "明白了。我在哪里领取语音导览？" },
          { speaker: "them", role: "前台", textEn: "Just past the entrance on your right. You'll need to leave a photo ID as a deposit. Enjoy your visit!", textZh: "过了入口右手边。您需要留一个带照片的证件作为押金。祝您参观愉快！", keyPhrases: [{ en: "photo ID", zh: "带照片的证件" }, { en: "deposit", zh: "押金" }],
            alternativeExpressions: [
              { textEn: "Right after you walk in, it's on your right. They'll need an ID to hold onto while you use it. Have a great visit!", textZh: "进门后右手边。他们需要你留一个证件。祝参观愉快！", actionHint: "指路并说明需要押证件", frequency: "common" },
              { textEn: "The pickup counter is just inside to the right. Bring a photo ID — they hold it as a deposit. Enjoy!", textZh: "领取柜台就在里面右边。带个带照片的证件——他们会留着当押金。祝愉快！", actionHint: "说明位置和押金要求", frequency: "common" },
            ] },
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
          { speaker: "you", textEn: "Hi, two day passes, please. Do you have any fast-pass options?", textZh: "你好，两张一日票。你们有快速通道的选项吗？", culturalNote: "欧美主题公园的 fast pass / express pass 可以让你跳过排队，但通常价格不菲。" },
          { speaker: "them", role: "售票员", textEn: "Two day passes will be $180. We do have the Express Pass for $60 each, which lets you skip the line on most major rides.", textZh: "两张一日票180美元。我们有快速通行证每人60美元，可以跳过大部分主要项目的排队。", keyPhrases: [{ en: "Express Pass", zh: "快速通行证" }, { en: "skip the line", zh: "跳过排队" }, { en: "major rides", zh: "主要项目" }],
            alternativeExpressions: [
              { textEn: "That's $180 for two day passes. And yeah, we've got Express Passes — 60 bucks each, and you basically get to cut the line for the big rides.", textZh: "两张日票180美元。有快速通行证——每人60块，大项目基本可以插队。", actionHint: "cut the line = skip the line = 插队/跳过排队", frequency: "common" },
              { textEn: "Two day tickets run you $180. If you wanna skip the wait, the Express Pass is $60 a pop — works on most of the popular rides.", textZh: "两张日票180美元。想免排队的话，快速通行证每人60美元——大部分热门项目都能用。", actionHint: "a pop = each 每个的意思", frequency: "common" },
            ] },
          { speaker: "you", textEn: "That sounds worth it. We'll take two Express Passes as well. What rides do you recommend?", textZh: "听起来很值。我们也要两张快速通行证。你推荐什么项目？" },
          { speaker: "them", role: "售票员", textEn: "The roller coaster in Zone A is our most popular ride. Also, don't miss the water ride in Zone C — it's great on a warm day like today.", textZh: "A区的过山车是我们最受欢迎的项目。另外别错过C区的水上项目——像今天这样暖和的天气特别适合。", keyPhrases: [{ en: "roller coaster", zh: "过山车" }, { en: "water ride", zh: "水上项目" }, { en: "don't miss", zh: "别错过" }],
            alternativeExpressions: [
              { textEn: "Definitely hit the roller coaster in Zone A — that's the one everyone loves. And the water ride in Zone C is a must on a day like this.", textZh: "一定要去A区的过山车——大家都超爱。像今天这样的天气，C区的水上项目必须去。", actionHint: "hit = 去玩，a must = 必须体验的", frequency: "common" },
              { textEn: "You gotta try the coaster in Zone A, it's our number one. Oh, and the splash ride over in Zone C is perfect for today's weather.", textZh: "你一定要试A区的过山车，我们的第一名。C区的水上漂流今天这天气去正好。", actionHint: "gotta = got to = 必须，splash ride = 水上漂流", frequency: "common" },
            ] },
          { speaker: "you", textEn: "How long are the wait times usually?", textZh: "通常要排多长时间？" },
          { speaker: "them", role: "售票员", textEn: "Without Express Pass, around 45 minutes to an hour for the popular ones. With Express Pass, you'll wait maybe 10 minutes tops.", textZh: "没有快速通行证的话，热门项目大约45分钟到一个小时。有快速通行证的话最多等10分钟。", keyPhrases: [{ en: "wait times", zh: "等待时间" }, { en: "tops", zh: "最多" }],
            alternativeExpressions: [
              { textEn: "For the big rides, you're looking at 45 minutes to an hour without Express. With it, maybe 10 minutes max.", textZh: "大项目不带快速通行的话得等45分钟到一小时。带的话最多10分钟。", actionHint: "you're looking at = 大概需要，max = tops = 最多", frequency: "common" },
              { textEn: "The popular stuff can be a 45-minute to hour-long wait. Express Pass cuts it down to like 10 minutes.", textZh: "热门项目可能要排45分钟到一小时。快速通行证能把时间缩到10分钟左右。", actionHint: "cuts it down to = 缩短到", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Perfect. Can we get a park map?", textZh: "太好了。能给我们一张园区地图吗？" },
          { speaker: "them", role: "售票员", textEn: "Of course! Here's your map. You can also download our app for real-time wait times and show schedules. Have a magical day!", textZh: "当然！这是您的地图。您也可以下载我们的APP查看实时排队时间和演出时刻表。祝您有个奇妙的一天！", keyPhrases: [{ en: "real-time", zh: "实时的" }, { en: "show schedules", zh: "演出时刻表" }],
            alternativeExpressions: [
              { textEn: "Sure thing! Here's a map. Oh, and grab our app — it shows wait times and showtimes live. Have an awesome day!", textZh: "当然！地图给您。对了，下载我们的APP——有实时排队和演出时间。祝您玩得愉快！", actionHint: "grab = 下载/拿，live = 实时", frequency: "common" },
              { textEn: "Here you go! Pro tip: download the app so you can check the lines and show times on the go. Enjoy!", textZh: "给您！小建议：下载APP就能随时查排队和演出时间。玩得开心！", actionHint: "pro tip = 小建议，on the go = 随时随地", frequency: "occasional" },
            ] },
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
          { speaker: "you", textEn: "Excuse me, which entrance should I use? My ticket says Section B.", textZh: "请问我应该走哪个入口？我的票上写的是B区。", casualVersion: "Hey, where do I go in for Section B?" },
          { speaker: "them", role: "安保人员", textEn: "Section B is through the main entrance on your left. Can I see your ticket and ID, please?", textZh: "B区走您左边的主入口。请出示您的票和证件好吗？", keyPhrases: [{ en: "main entrance", zh: "主入口" }, { en: "can I see your ticket", zh: "请出示您的票" }],
            alternativeExpressions: [
              { textEn: "Section B? That's the main doors to your left. Let me see your ticket and ID real quick.", textZh: "B区？左边主门进去。让我看下你的票和证件。", actionHint: "real quick = 快速地，准备好票和证件出示", frequency: "common" },
              { textEn: "Head to the left — main entrance gets you to Section B. Ticket and ID, please.", textZh: "往左走——主入口进去就是B区。请出示票和证件。", actionHint: "简洁指路并要求验票", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Here you go. Is there a coat check inside?", textZh: "给您。里面有存衣处吗？", culturalNote: "欧美音乐会和剧院通常提供 coat check（存衣处），会收取1-2美元小费。" },
          { speaker: "them", role: "安保人员", textEn: "Yes, the coat check is right past the lobby on the right side. Just a heads-up, no bags larger than 12 inches are allowed inside.", textZh: "有的，存衣处在大厅右侧。提醒一下，超过12英寸的包不允许带入。", keyPhrases: [{ en: "coat check", zh: "存衣处" }, { en: "heads-up", zh: "提醒一下" }],
            alternativeExpressions: [
              { textEn: "Yeah, coat check's right through the lobby on the right. Oh, and FYI, no big bags — nothing over 12 inches.", textZh: "有，存衣处过了大厅右边。对了，大包不让带——超过12英寸不行。", actionHint: "FYI = for your information 顺便说一下", frequency: "common" },
              { textEn: "Coat check is just past the doors on the right-hand side. Quick note though — bags bigger than 12 inches aren't allowed in.", textZh: "存衣处过了门右手边。不过提醒一下——超过12英寸的包不让进。", actionHint: "quick note = 提醒一下", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Thanks. Do you know what time the opening act starts?", textZh: "谢谢。你知道暖场演出几点开始吗？" },
          { speaker: "them", role: "安保人员", textEn: "The opening act goes on at 7:30, and the main performer hits the stage around 8:45. There's a 20-minute intermission in between.", textZh: "暖场演出7:30开始，主表演大约8:45上台。中间有20分钟的中场休息。", keyPhrases: [{ en: "opening act", zh: "暖场演出" }, { en: "main performer", zh: "主表演者" }, { en: "intermission", zh: "中场休息" }],
            alternativeExpressions: [
              { textEn: "The opener starts at 7:30. The headliner comes on around 8:45, with a 20-minute break in between.", textZh: "暖场7:30开始。头牌大约8:45上台，中间休息20分钟。", actionHint: "opener = opening act, headliner = 头牌/主演", frequency: "common" },
              { textEn: "7:30 for the warm-up act, then the main show kicks off around a quarter to 9. There's a 20-minute intermission.", textZh: "7:30暖场，主表演大约8:45开始。有20分钟中场休息。", actionHint: "warm-up act = 暖场, kicks off = 开始, a quarter to 9 = 8:45", frequency: "occasional" },
            ] },
          { speaker: "you", textEn: "Great, thank you. Where can I buy drinks inside?", textZh: "好的，谢谢。里面哪里可以买饮料？" },
          { speaker: "them", role: "安保人员", textEn: "There are two bars on the ground floor and one upstairs. They accept card only — no cash. Enjoy the show!", textZh: "一楼有两个吧台，楼上有一个。只收刷卡，不收现金。祝您演出愉快！", keyPhrases: [{ en: "card only", zh: "只收刷卡" }, { en: "enjoy the show", zh: "祝演出愉快" }],
            alternativeExpressions: [
              { textEn: "There's a couple bars downstairs and one up top. Cards only though, no cash. Have a great time!", textZh: "楼下有两个吧台，楼上一个。只收卡不收现金。玩得开心！", actionHint: "up top = upstairs 楼上", frequency: "common" },
              { textEn: "Two bars on the first floor, one more upstairs. Just a heads-up, they're all cashless. Enjoy!", textZh: "一楼两个吧台，楼上还有一个。提醒一下，全部不收现金。祝愉快！", actionHint: "cashless = 无现金/只收卡", frequency: "common" },
            ] },
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
          { speaker: "you", textEn: "Hi, I'm looking for Gate 12. My ticket says upper deck, section 205.", textZh: "你好，我在找12号入口。我的票上写的是上层看台205区。", culturalNote: "美国体育场通常分为 lower deck（下层）、upper deck（上层）、suites（包厢）等。" },
          { speaker: "them", role: "引座员", textEn: "Gate 12 is just around the corner. Take the escalator up one level, then follow the signs for section 200. You'll be on the left side.", textZh: "12号入口就在拐角处。坐电梯上一层，然后跟着200区的指示牌走。在左边。", keyPhrases: [{ en: "upper deck", zh: "上层看台" }, { en: "escalator", zh: "自动扶梯" }, { en: "follow the signs", zh: "跟着指示牌走" }],
            alternativeExpressions: [
              { textEn: "Gate 12? Right around that corner. Hop on the escalator, go up one, and look for the 200-level signs — you'll be on the left.", textZh: "12号入口？就在那个拐角。坐扶梯上一层，找200区的指示牌——左边。", actionHint: "hop on = 跳上/坐上", frequency: "common" },
              { textEn: "It's right there around the bend. Escalator up one floor, then just follow signs to the 200 sections. Your side's the left.", textZh: "就在那个弯过去。扶梯上一层，跟着200区指示牌走。你在左边那侧。", actionHint: "around the bend = around the corner 拐角处", frequency: "occasional" },
            ] },
          { speaker: "you", textEn: "Thanks! What's the score right now?", textZh: "谢谢！现在比分是多少？" },
          { speaker: "them", role: "引座员", textEn: "It's still 0-0. You haven't missed anything — they just started the second quarter.", textZh: "还是0比0。您什么都没错过——刚开始第二节。", keyPhrases: [{ en: "the score", zh: "比分" }, { en: "second quarter", zh: "第二节" }],
            alternativeExpressions: [
              { textEn: "Still scoreless. You're good — they're just getting into the second quarter.", textZh: "还没有进球。你没错过——刚进入第二节。", actionHint: "scoreless = 零比零/没有进球", frequency: "common" },
              { textEn: "Nothing yet, 0-0. Second quarter just got underway, so you're right on time.", textZh: "还没有比分，0比0。第二节刚开始，你来得正好。", actionHint: "got underway = 开始了", frequency: "occasional" },
            ] },
          { speaker: "you", textEn: "Where can I get a hot dog and a beer around here?", textZh: "在这附近哪里能买热狗和啤酒？", casualVersion: "Any food stands nearby?" },
          { speaker: "them", role: "引座员", textEn: "There's a concession stand right at the top of the stairs in your section. They've got hot dogs, nachos, pretzels — the works.", textZh: "在您那区楼梯顶端有个小卖部。有热狗、玉米片、椒盐卷饼——什么都有。", keyPhrases: [{ en: "concession stand", zh: "小卖部/食品摊" }, { en: "the works", zh: "什么都有" }],
            alternativeExpressions: [
              { textEn: "Yeah, there's a food stand right up the stairs from your section. Hot dogs, nachos, pretzels — you name it.", textZh: "有的，你那区楼梯上去就有一个食品摊。热狗、玉米片、椒盐卷饼——应有尽有。", actionHint: "you name it = 你说得出的都有", frequency: "common" },
              { textEn: "Top of the stairs in your section, there's a concessions area. They've got all the usual stuff — dogs, nachos, pretzels, everything.", textZh: "你那区楼梯顶上有个餐饮区。常见的都有——热狗、玉米片、椒盐卷饼，应有尽有。", actionHint: "dogs = hot dogs 热狗的简称", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Awesome. Can I bring food back to my seat?", textZh: "太好了。我可以把食物带回座位吗？" },
          { speaker: "them", role: "引座员", textEn: "Absolutely. Just be careful on the stairs with drinks. Oh, and if you want any team merchandise, the fan shop is on the main level near Gate 1.", textZh: "当然可以。端饮料上楼梯小心点。对了，如果想买球队周边，球迷商店在1号入口附近的主层。", keyPhrases: [{ en: "team merchandise", zh: "球队周边商品" }, { en: "fan shop", zh: "球迷商店" }],
            alternativeExpressions: [
              { textEn: "For sure. Just watch it on the stairs with those drinks. By the way, the team store is down on the main level by Gate 1 if you want any gear.", textZh: "没问题。端饮料走楼梯小心点。对了，球队商店在主层1号门附近，想买周边可以去看看。", actionHint: "watch it = 小心，gear = 周边商品/装备", frequency: "common" },
              { textEn: "Yeah, no problem. Careful with the drinks though. Oh, if you wanna pick up a jersey or anything, the merch shop is by Gate 1, main level.", textZh: "可以的。不过端饮料小心。想买球衣什么的，主层1号门旁边有个周边店。", actionHint: "merch = merchandise 周边商品, jersey = 球衣", frequency: "common" },
            ] },
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
          { speaker: "you", textEn: "Excuse me, how long is the wait for this ride?", textZh: "请问，这个项目要等多久？" },
          { speaker: "them", role: "工作人员", textEn: "Currently about 30 minutes from here. But just so you know, there's a height requirement of 48 inches. Is everyone in your group tall enough?", textZh: "从这里开始大约30分钟。不过提醒一下，有48英寸的身高要求。您这组的人都够高吗？", keyPhrases: [{ en: "height requirement", zh: "身高要求" }, { en: "tall enough", zh: "够高" }],
            alternativeExpressions: [
              { textEn: "From this point, you're looking at about 30 minutes. Quick thing — you gotta be at least 48 inches to ride. Everyone in your group clear that?", textZh: "从这里开始大概30分钟。提一下——至少得48英寸才能坐。你们组都够高吗？", actionHint: "clear that = 达到那个标准", frequency: "common" },
              { textEn: "About a half-hour wait from here. Heads up though, there's a 48-inch minimum. Is your whole party good on that?", textZh: "从这里等大概半小时。提醒一下，最低48英寸。你们全部人都没问题吧？", actionHint: "party = group 一行人", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Yes, we're all adults. Are there any health restrictions?", textZh: "是的，我们都是成年人。有什么健康方面的限制吗？", culturalNote: "欧美游乐场对安全非常严格，有心脏病、高血压、孕妇等限制。上车前一定要看警告标志。" },
          { speaker: "them", role: "工作人员", textEn: "If you have a heart condition, back problems, or are pregnant, we don't recommend this ride. Also, please secure all loose items — no phones, hats, or sunglasses on the ride.", textZh: "如果您有心脏病、背部问题或怀孕，我们不建议乘坐。另外请收好所有松散物品——乘坐时不能带手机、帽子或太阳镜。", keyPhrases: [{ en: "heart condition", zh: "心脏病" }, { en: "secure all loose items", zh: "收好所有松散物品" }],
            alternativeExpressions: [
              { textEn: "Anyone with heart issues, back trouble, or who's expecting should probably sit this one out. And make sure to stash your phone, hat, glasses — anything that could fly off.", textZh: "有心脏问题、背部毛病或怀孕的人最好别坐。把手机、帽子、眼镜都收好——任何可能飞走的东西。", actionHint: "sit this one out = 不参加这个, stash = 收好/藏好", frequency: "common" },
              { textEn: "Not recommended if you've got heart problems, a bad back, or if you're pregnant. Oh, and empty your pockets — no phones, hats, or shades on the ride.", textZh: "有心脏病、腰不好或怀孕的不建议坐。还有清空口袋——不能带手机、帽子或墨镜。", actionHint: "shades = sunglasses 墨镜的口语说法", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Is there a locker nearby where I can put my bag?", textZh: "附近有储物柜可以放我的包吗？" },
          { speaker: "them", role: "工作人员", textEn: "Yes, there are lockers right behind you. They're $2 for two hours. You'll get a code to open it after the ride.", textZh: "有的，储物柜就在您身后。两小时2美元。乘坐结束后会给您一个密码来开柜。", keyPhrases: [{ en: "lockers", zh: "储物柜" }, { en: "code", zh: "密码" }],
            alternativeExpressions: [
              { textEn: "Yep, lockers are right over there behind you. Two bucks for two hours, and you get a code to unlock it when you're done.", textZh: "有，储物柜就在你身后那边。两块钱两小时，完了给你个密码开柜子。", actionHint: "two bucks = 两美元", frequency: "common" },
              { textEn: "Sure, there's lockers just behind you. It's $2 for a couple hours — they'll give you a PIN after the ride.", textZh: "有的，你后面就有储物柜。两小时2美元——坐完给你一个PIN码。", actionHint: "PIN = 密码/PIN码", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Perfect. One more question — does this ride go upside down?", textZh: "好的。再问一个——这个项目会翻转吗？" },
          { speaker: "them", role: "工作人员", textEn: "It does two inversions and a corkscrew. If that's not your thing, we have a milder version in Zone D. But this one is totally safe — just hold on tight!", textZh: "有两个翻转和一个螺旋。如果您不太适应，D区有一个温和版本。不过这个完全安全——抓紧就好！", keyPhrases: [{ en: "inversions", zh: "翻转" }, { en: "corkscrew", zh: "螺旋" }, { en: "hold on tight", zh: "抓紧" }],
            alternativeExpressions: [
              { textEn: "Yeah, you'll go upside down twice and there's a spiral. If that's too intense, there's a tamer ride in Zone D. But don't worry — it's perfectly safe, just hang on!", textZh: "会，会倒过来两次还有一个螺旋。如果太刺激，D区有个温和版。别担心——完全安全，抓紧就好！", actionHint: "tamer = 更温和的，hang on = hold on 抓紧", frequency: "common" },
              { textEn: "Two loops and a corkscrew, yeah. Not for everyone! Zone D has a gentler version if you'd rather. But honestly, it's totally safe — just grip the bar and enjoy the ride!", textZh: "两个翻转和一个螺旋。不是所有人都适合！D区有个更柔和的。不过说真的，完全安全——抓好扶手享受就行！", actionHint: "loops = inversions 翻转", frequency: "common" },
            ] },
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
          { speaker: "you", textEn: "Hi, I'd like to join the walking tour. Is there still room?", textZh: "你好，我想参加步行导览。还有名额吗？", casualVersion: "Hey, any spots left on the walking tour?" },
          { speaker: "them", role: "导游", textEn: "Yes, we have a few spots left! The tour lasts about two and a half hours and covers the main historical district. It's $25 per person.", textZh: "有的，还有几个名额！导览大约两个半小时，涵盖主要的历史街区。每人25美元。", keyPhrases: [{ en: "walking tour", zh: "步行导览" }, { en: "historical district", zh: "历史街区" }],
            alternativeExpressions: [
              { textEn: "Yeah, we've still got room! It's about two and a half hours, we hit the main historic area. 25 bucks a head.", textZh: "有名额！大概两个半小时，走主要的历史区域。每人25块。", actionHint: "a head = per person 每人", frequency: "common" },
              { textEn: "You're in luck — still a couple spots open. The walk's about two and a half hours through the old town. $25 each.", textZh: "你运气好——还有几个名额。步行穿过老城区大约两个半小时。每人25美元。", actionHint: "old town = historical district 老城区", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Sounds great. What landmarks will we see?", textZh: "听起来不错。我们会看到哪些地标？" },
          { speaker: "them", role: "导游", textEn: "We'll pass by the old cathedral, the central market, the city hall, and end at the waterfront. I'll share stories about each place along the way.", textZh: "我们会经过老教堂、中心市场、市政厅，最后到达滨水区。沿途我会分享每个地方的故事。", keyPhrases: [{ en: "landmarks", zh: "地标" }, { en: "cathedral", zh: "教堂" }, { en: "waterfront", zh: "滨水区" }],
            alternativeExpressions: [
              { textEn: "We'll swing by the cathedral, the market, city hall, and then wrap up at the waterfront. I've got great stories for each stop.", textZh: "我们会去教堂、市场、市政厅，最后在滨水区结束。每个站点我都有好故事。", actionHint: "swing by = 顺路去, wrap up = 结束", frequency: "common" },
              { textEn: "The route takes us past the old cathedral, through the market, by city hall, and finishes down at the water. Lots of cool history along the way.", textZh: "路线经过老教堂、穿过市场、路过市政厅，最后到水边。沿途有很多有趣的历史。", actionHint: "down at the water = 在水边", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Is there a restroom break during the tour?", textZh: "导览途中有休息上洗手间的时间吗？", culturalNote: "长时间的步行导览通常会安排中途休息，如果没有主动安排，直接问导游也完全没问题。" },
          { speaker: "them", role: "导游", textEn: "Yes, we'll stop at the market about halfway through — there are restrooms and cafes there. Feel free to grab a coffee during the break.", textZh: "会的，大约走到一半时我们会在市场停下——那里有洗手间和咖啡馆。休息时可以买杯咖啡。", keyPhrases: [{ en: "halfway through", zh: "走到一半" }, { en: "feel free to", zh: "可以随意" }],
            alternativeExpressions: [
              { textEn: "Yep, we take a pit stop at the market around the midway point. Restrooms and coffee shops right there — help yourself.", textZh: "会的，走到中间的时候在市场停一下。洗手间和咖啡店就在那——随意。", actionHint: "pit stop = 短暂停留, midway point = 中途", frequency: "common" },
              { textEn: "Sure thing — about halfway in, we stop at the market. There's bathrooms and you can get a coffee or a snack.", textZh: "当然——大约走到一半时在市场停。有洗手间，可以买杯咖啡或零食。", actionHint: "halfway in = halfway through 走到一半", frequency: "common" },
            ] },
          { speaker: "you", textEn: "One more thing — do you have any tips for taking good photos along the route?", textZh: "还有一件事——沿途拍照有什么好建议吗？" },
          { speaker: "them", role: "导游", textEn: "Absolutely! The cathedral looks best from the east side in the morning light. And the waterfront at sunset is stunning — I'll time our arrival there perfectly. Ready to go?", textZh: "当然！教堂从东侧在晨光中拍最好看。滨水区的日落特别美——我会精确把握我们到达的时间。准备好出发了吗？", keyPhrases: [{ en: "morning light", zh: "晨光" }, { en: "sunset", zh: "日落" }, { en: "stunning", zh: "极美的" }],
            alternativeExpressions: [
              { textEn: "Oh for sure! Shoot the cathedral from the east side — the morning light is gorgeous. And I'll make sure we hit the waterfront right at golden hour. Shall we get started?", textZh: "当然！从东侧拍教堂——早晨光线特别美。我会确保我们在黄金时段到滨水区。出发吧？", actionHint: "golden hour = 日落前的黄金光线时段", frequency: "common" },
              { textEn: "Totally! The best shot of the cathedral is from the east in the morning. And trust me, the waterfront at sunset is incredible — I'll get us there just in time. Let's go!", textZh: "绝对！教堂最佳拍摄角度是早上从东边。相信我，滨水区的日落太美了——我会把时间掐得刚好。走吧！", actionHint: "best shot = 最佳拍摄角度, just in time = 刚好赶上", frequency: "common" },
            ] },
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
          { speaker: "you", textEn: "Hello, two tickets please. Are there any special shows today?", textZh: "你好，两张票。今天有什么特别的表演吗？" },
          { speaker: "them", role: "前台", textEn: "Two tickets will be $45. We have a dolphin show at 2 PM and a shark feeding at 3:30. Both are included in your admission.", textZh: "两张票45美元。下午2点有海豚表演，3:30有鲨鱼喂食。都包含在门票里。", keyPhrases: [{ en: "dolphin show", zh: "海豚表演" }, { en: "shark feeding", zh: "鲨鱼喂食" }, { en: "included in your admission", zh: "包含在门票里" }],
            alternativeExpressions: [
              { textEn: "That's $45 for two. Today we've got the dolphin show at 2 and the shark feeding at 3:30 — both come with your ticket.", textZh: "两张45美元。今天2点有海豚表演，3:30有鲨鱼喂食——都包含在门票里。", actionHint: "come with your ticket = 包含在门票里", frequency: "common" },
              { textEn: "Two tickets, $45. And you picked a great day — there's a dolphin performance at 2 and they feed the sharks at 3:30. It's all part of the admission.", textZh: "两张票45美元。你选了个好日子——2点有海豚表演，3:30喂鲨鱼。都算在门票里。", actionHint: "part of the admission = 包含在门票中", frequency: "common" },
            ] },
          { speaker: "you", textEn: "That's great! Which way should we start? We don't want to miss the dolphin show.", textZh: "太好了！我们应该从哪个方向开始？我们不想错过海豚表演。" },
          { speaker: "them", role: "前台", textEn: "I'd suggest starting with the tropical fish gallery on the ground floor, then working your way up to the jellyfish exhibit. The dolphin arena is on level 3 — head there by 1:45 to get good seats.", textZh: "建议从一楼的热带鱼展厅开始，然后逐步走到水母展区。海豚场地在3楼——1:45之前过去可以占到好位子。", keyPhrases: [{ en: "tropical fish gallery", zh: "热带鱼展厅" }, { en: "jellyfish exhibit", zh: "水母展区" }, { en: "arena", zh: "表演场地" }],
            alternativeExpressions: [
              { textEn: "Start downstairs with the tropical fish, then make your way up to the jellyfish. For the dolphin show, get to level 3 by 1:45 if you want decent seats.", textZh: "从楼下的热带鱼开始，然后往上走到水母。海豚表演的话，1:45前到3楼才能占到好座。", actionHint: "make your way up = 往上走, decent = 还不错的", frequency: "common" },
              { textEn: "I'd start on the first floor with the tropical fish and work up from there. Oh, and the dolphin thing is on 3 — show up around 1:45 for a good spot.", textZh: "我建议先从一楼热带鱼看起，然后一层层往上。海豚表演在3楼——1:45左右去占个好位置。", actionHint: "show up = 到达/出现", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Is there a touch pool where we can interact with the animals?", textZh: "有触摸池可以跟动物互动吗？", culturalNote: "很多水族馆有 touch pool / touch tank，可以触摸海星、海参等。记得先洗手，触摸时要轻柔。" },
          { speaker: "them", role: "前台", textEn: "Yes! The touch pool is on the second floor. You can handle starfish, sea cucumbers, and small rays. Our staff there will show you the proper way to touch them.", textZh: "有的！触摸池在二楼。您可以触摸海星、海参和小魔鬼鱼。我们那里的工作人员会教您正确的触摸方式。", keyPhrases: [{ en: "touch pool", zh: "触摸池" }, { en: "starfish", zh: "海星" }, { en: "sea cucumbers", zh: "海参" }],
            alternativeExpressions: [
              { textEn: "Oh yeah, the touch tank's on the second floor! Starfish, sea cucumbers, baby rays — you can hold them all. The staff up there will show you how.", textZh: "有啊，触摸池在二楼！海星、海参、小鳐鱼——都能摸。上面的工作人员会教你怎么弄。", actionHint: "touch tank = touch pool, baby rays = 小鳐鱼", frequency: "common" },
              { textEn: "Absolutely! Head to the second floor for the touch pool. You get to feel starfish, sea cucumbers, and little rays. There's always someone there to guide you.", textZh: "当然！去二楼的触摸池。可以触摸海星、海参和小鳐鱼。那里一直有人指导。", actionHint: "get to = 可以/有机会", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Wonderful. Is there a cafe inside if we get hungry?", textZh: "太好了。如果饿了里面有餐厅吗？" },
          { speaker: "them", role: "前台", textEn: "There's an Ocean Cafe on level 2 with a view of the main tank. You can eat lunch while watching the fish swim by! Here's your map — enjoy your visit.", textZh: "2楼有个海洋餐厅，可以看到主水缸。您可以边吃午餐边看鱼游过！这是您的地图——祝您参观愉快。", keyPhrases: [{ en: "main tank", zh: "主水缸" }, { en: "swim by", zh: "游过" }],
            alternativeExpressions: [
              { textEn: "Yeah, there's a cafe on 2 that overlooks the big tank — super cool to eat with the fish right there. Here's a map. Have a great time!", textZh: "二楼有个咖啡厅正对着大水缸——边吃边看鱼特别酷。地图给你。玩得开心！", actionHint: "overlooks = 正对着/俯瞰", frequency: "common" },
              { textEn: "The Ocean Cafe on level 2 is right next to the main tank — you can literally watch the fish while you eat. Here's your map, enjoy!", textZh: "2楼的海洋餐厅紧挨着主水缸——真的可以边吃边看鱼。地图给您，祝愉快！", actionHint: "literally = 真的/确实", frequency: "common" },
            ] },
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
          { speaker: "you", textEn: "Hi, one adult and one child ticket, please. She's six years old.", textZh: "你好，一张成人票一张儿童票。她六岁。" },
          { speaker: "them", role: "售票员", textEn: "That'll be $22 for the adult and $12 for the child. Would you like to add the safari tram ride? It's an extra $8 per person.", textZh: "成人票22美元，儿童票12美元。要加游览小火车吗？每人额外8美元。", keyPhrases: [{ en: "safari tram", zh: "游览小火车" }, { en: "child ticket", zh: "儿童票" }],
            alternativeExpressions: [
              { textEn: "That's $22 for you and $12 for the little one. Wanna add the safari tram? It's 8 bucks each, totally worth it.", textZh: "你22美元，小朋友12美元。要加游览小火车吗？每人8块，很值。", actionHint: "the little one = 小朋友", frequency: "common" },
              { textEn: "Adult's $22, kid's $12. We also have a tram ride through the safari area for an extra $8 a person if you're interested.", textZh: "成人22美元，儿童12美元。另外有游览小火车穿过野生动物区，每人加8美元，感兴趣吗。", actionHint: "safari area = 野生动物区", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Yes, we'd love that. What animals will we see on the tram ride?", textZh: "好的，我们很想坐。小火车上能看到什么动物？" },
          { speaker: "them", role: "售票员", textEn: "The tram goes through the African savanna section — you'll see giraffes, zebras, rhinos, and elephants up close. The ride is about 25 minutes.", textZh: "小火车穿过非洲草原区——您可以近距离看到长颈鹿、斑马、犀牛和大象。全程大约25分钟。", keyPhrases: [{ en: "African savanna", zh: "非洲草原" }, { en: "up close", zh: "近距离" }],
            alternativeExpressions: [
              { textEn: "It takes you right through the African savanna — giraffes, zebras, rhinos, elephants, all right there. It's about a 25-minute ride.", textZh: "直接穿过非洲草原——长颈鹿、斑马、犀牛、大象，就在眼前。大约25分钟。", actionHint: "right there = 就在那里/就在眼前", frequency: "common" },
              { textEn: "You ride through the savanna zone and get to see the giraffes, zebras, rhinos, and elephants super close. Takes about 25 minutes or so.", textZh: "穿过草原区，能超近距离看到长颈鹿、斑马、犀牛和大象。大概25分钟左右。", actionHint: "super close = 非常近", frequency: "common" },
            ] },
          { speaker: "you", textEn: "My daughter loves giraffes. Is there a giraffe feeding experience?", textZh: "我女儿很喜欢长颈鹿。有长颈鹿喂食体验吗？", culturalNote: "很多动物园提供付费的喂食体验 feeding experience，可以亲手喂长颈鹿或小鹿，是孩子们最喜欢的活动之一。" },
          { speaker: "them", role: "售票员", textEn: "Yes! The giraffe feeding platform is open from 10 to 2. It's $5 for a cup of food. Your little one will love it — the giraffes are very gentle.", textZh: "有的！长颈鹿喂食平台10点到2点开放。一杯食物5美元。您的小朋友一定会喜欢——长颈鹿非常温柔。", keyPhrases: [{ en: "feeding platform", zh: "喂食平台" }, { en: "gentle", zh: "温柔的" }],
            alternativeExpressions: [
              { textEn: "Oh yeah! The giraffe feeding is open 10 to 2. Five bucks for a cup of food. Kids go crazy for it — the giraffes are super friendly.", textZh: "有啊！长颈鹿喂食10点到2点。一杯食物5块。小孩子超喜欢——长颈鹿特别友好。", actionHint: "go crazy for it = 超级喜欢/疯狂喜欢", frequency: "common" },
              { textEn: "Definitely! You can feed the giraffes from 10 AM to 2 PM — $5 for a cup. She's gonna love it, they're really sweet animals.", textZh: "当然可以！上午10点到下午2点可以喂长颈鹿——一杯5美元。她一定会喜欢的，长颈鹿很温顺。", actionHint: "she's gonna = she is going to 她一定会", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Perfect. Where should we start to make the most of our day?", textZh: "太好了。我们从哪里开始才能充分利用这一天？" },
          { speaker: "them", role: "售票员", textEn: "Start with the primates and big cats on the east side while it's still cool. Hit the giraffe feeding before noon. Then grab the tram at 1 PM. The reptile house is great for the afternoon — it's air-conditioned!", textZh: "趁天气还凉爽先去东边看灵长类和大型猫科。中午前去喂长颈鹿。然后下午1点坐小火车。爬行馆适合下午去——有空调！", keyPhrases: [{ en: "primates", zh: "灵长类动物" }, { en: "big cats", zh: "大型猫科动物" }, { en: "reptile house", zh: "爬行馆" }],
            alternativeExpressions: [
              { textEn: "Go see the monkeys and lions on the east side first while it's cool out. Feed the giraffes before lunch, catch the tram at 1, then do the reptile house in the afternoon — it's got AC!", textZh: "趁凉快先去东边看猴子和狮子。午饭前喂长颈鹿，1点坐小火车，下午去爬行馆——有空调！", actionHint: "AC = air conditioning 空调", frequency: "common" },
              { textEn: "Here's what I'd do: east side for primates and big cats early on, giraffe feeding by noon, tram at 1, and save the reptile building for the hot part of the day — nice and cool in there.", textZh: "我建议这样：早点去东边看灵长类和大猫，中午前喂长颈鹿，1点坐火车，最热的时候去爬行馆——里面很凉快。", actionHint: "save...for = 留到...的时候", frequency: "occasional" },
            ] },
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
          { speaker: "you", textEn: "Hi, I'd like to rent ski equipment for the day. I'm a beginner.", textZh: "你好，我想租一天的滑雪装备。我是初学者。", culturalNote: "在欧美滑雪场，初学者建议先上一节滑雪课 ski lesson，教练会教基本技巧和安全知识。" },
          { speaker: "them", role: "租赁员", textEn: "No problem! I'll need your shoe size and height to get you set up. For beginners, I'd recommend our basic package — skis, boots, poles, and a helmet for $65.", textZh: "没问题！我需要您的鞋码和身高来给您准备装备。初学者推荐我们的基础套餐——雪板、雪鞋、雪杖和头盔65美元。", keyPhrases: [{ en: "shoe size", zh: "鞋码" }, { en: "basic package", zh: "基础套餐" }, { en: "poles", zh: "雪杖" }],
            alternativeExpressions: [
              { textEn: "Easy! Just need your shoe size and how tall you are. For someone just starting out, I'd go with the starter package — skis, boots, poles, helmet, 65 bucks.", textZh: "简单！告诉我鞋码和身高就好。新手的话推荐入门套餐——雪板、雪鞋、雪杖、头盔，65块。", actionHint: "just starting out = 刚开始/新手, go with = 选择", frequency: "common" },
              { textEn: "Sure thing! What's your shoe size and height? Since you're new to skiing, our beginner bundle is the way to go — skis, boots, poles, and a helmet for $65.", textZh: "没问题！鞋码和身高多少？既然你是滑雪新手，初学者套餐最合适——雪板、雪鞋、雪杖和头盔65美元。", actionHint: "the way to go = 最好的选择", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Size 9, and I'm about 5 foot 10. Should I take a lesson first?", textZh: "9码，身高大约5英尺10。我应该先上一节课吗？" },
          { speaker: "them", role: "租赁员", textEn: "Definitely. Our beginner group lesson starts at 10 AM and it's $45. It's a two-hour session on the bunny slope. You'll learn how to stop, turn, and use the chairlift.", textZh: "绝对建议。我们的初学者小组课10点开始，45美元。两小时，在初学者坡道上。您会学到怎么停下、转弯和使用缆车。", keyPhrases: [{ en: "group lesson", zh: "小组课" }, { en: "bunny slope", zh: "初学者坡道" }, { en: "chairlift", zh: "缆车" }],
            alternativeExpressions: [
              { textEn: "Oh for sure. There's a beginner class at 10 — $45, two hours on the bunny hill. They'll teach you the basics: stopping, turning, getting on the lift.", textZh: "当然建议。10点有初学者课——45美元，两小时在初学者坡上。会教你基本功：停、转弯、坐缆车。", actionHint: "bunny hill = bunny slope 初学者坡道", frequency: "common" },
              { textEn: "100%. We've got a group lesson at 10 AM, 45 bucks for two hours. They'll have you on the beginner slope learning to stop, turn, and ride the chairlift.", textZh: "百分之百建议。上午10点有小组课，45块两小时。在初学者坡上教你停、转弯和坐缆车。", actionHint: "100% = absolutely 绝对", frequency: "common" },
            ] },
          { speaker: "you", textEn: "I'll take the lesson. Which trails are good for beginners after that?", textZh: "我报名上课。上完课之后哪些雪道适合初学者？" },
          { speaker: "them", role: "租赁员", textEn: "Stick to the green trails — they're the easiest. Trail 1 and Trail 3 are very gentle. Avoid the blue and black trails until you're more confident.", textZh: "走绿色雪道——那些最简单。1号道和3号道非常平缓。在您更有信心之前避免蓝色和黑色雪道。", keyPhrases: [{ en: "green trails", zh: "绿色雪道（初级）" }, { en: "blue trails", zh: "蓝色雪道（中级）" }, { en: "black trails", zh: "黑色雪道（高级）" }],
            alternativeExpressions: [
              { textEn: "Stay on the greens — those are the easy ones. Trail 1 and 3 are nice and mellow. Don't go near the blues or blacks till you've got the hang of it.", textZh: "走绿道——那些是简单的。1号和3号很平缓。没掌握之前别碰蓝道和黑道。", actionHint: "mellow = 平缓/温和, got the hang of it = 掌握了", frequency: "common" },
              { textEn: "Keep it to the green runs for now — 1 and 3 are super chill. The blue and black ones will be there when you're ready.", textZh: "现在先走绿色跑道——1号和3号超级轻松。等你准备好了再试蓝色和黑色的。", actionHint: "keep it to = stick to 只走, runs = trails 雪道", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Got it. Where do I pick up my equipment?", textZh: "明白了。我去哪里取装备？" },
          { speaker: "them", role: "租赁员", textEn: "Head to window 3 with this receipt. They'll fit everything for you. And remember — if something doesn't feel right, come back and we'll adjust it. Have a great time on the mountain!", textZh: "拿着这张收据去3号窗口。他们会帮您调试所有装备。记住——如果有什么不舒服的，回来我们帮您调整。祝您在山上玩得开心！", keyPhrases: [{ en: "fit everything", zh: "调试所有装备" }, { en: "adjust", zh: "调整" }],
            alternativeExpressions: [
              { textEn: "Take this receipt to window 3 — they'll get you all geared up. If anything feels off, just swing back and we'll fix it. Have a blast out there!", textZh: "拿收据去3号窗口——他们会帮你穿戴好。有不舒服的回来我们调。玩得开心！", actionHint: "geared up = 穿戴好装备, feels off = 感觉不对劲", frequency: "common" },
              { textEn: "Window 3, just show them this receipt. They'll size everything up for you. And hey, if the boots are pinching or anything, come on back. Enjoy the slopes!", textZh: "3号窗口，把收据给他们看。他们会帮你调好尺寸。如果雪鞋夹脚什么的，回来找我们。享受滑雪吧！", actionHint: "pinching = 夹脚/夹得紧", frequency: "common" },
            ] },
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
          { speaker: "you", textEn: "Good morning. I'd like to book a tee time for two. Do you have anything available around 9 AM?", textZh: "早上好。我想预约两个人的开球时间。9点左右有空吗？", culturalNote: "Tee time 是高尔夫术语，指预约的开球时间。建议提前预约，热门球场周末通常需要提前几天预订。" },
          { speaker: "them", role: "前台", textEn: "Let me check. We have 9:15 available. Will you be renting clubs, or did you bring your own?", textZh: "我查一下。9:15有空。您需要租球杆还是自带的？", keyPhrases: [{ en: "tee time", zh: "开球时间" }, { en: "renting clubs", zh: "租球杆" }],
            alternativeExpressions: [
              { textEn: "Let me take a look... 9:15 works. You guys need clubs or did you bring your own set?", textZh: "我看看...9:15可以。你们需要球杆还是自己带了？", actionHint: "your own set = 你自己的一套球杆", frequency: "common" },
              { textEn: "Hmm, I've got a 9:15 slot open. Are you renting or did you come with your own gear?", textZh: "嗯，9:15有个空档。你们租还是自带装备？", actionHint: "slot = 时段, gear = 装备", frequency: "common" },
            ] },
          { speaker: "you", textEn: "We'll need to rent clubs. And a golf cart too, please.", textZh: "我们需要租球杆。还需要一辆高尔夫球车。" },
          { speaker: "them", role: "前台", textEn: "Club rental is $40 per set, and the cart is $35 for 18 holes. Green fees for two are $120. So your total would be $235.", textZh: "球杆租赁每套40美元，球车18洞35美元。两人的果岭费120美元。总共235美元。", keyPhrases: [{ en: "club rental", zh: "球杆租赁" }, { en: "green fees", zh: "果岭费" }, { en: "18 holes", zh: "18洞" }],
            alternativeExpressions: [
              { textEn: "Clubs are 40 a set, cart's 35 for the full 18. Green fees run $120 for two. All in, you're at $235.", textZh: "球杆每套40，球车打满18洞35。两人果岭费120。加一起235美元。", actionHint: "all in = 全部加起来, run = 费用是", frequency: "common" },
              { textEn: "So rental clubs are $40 each set, golf cart is $35 for 18 holes, and greens fees are 60 per person. That puts you at $235 total.", textZh: "租球杆每套40美元，球车18洞35美元，果岭费每人60。总共235美元。", actionHint: "puts you at = 总计是", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Is there a 9-hole option? We might not have time for the full 18.", textZh: "有9洞的选项吗？我们可能没时间打完18洞。" },
          { speaker: "them", role: "前台", textEn: "Of course. The 9-hole rate is $35 per person, and the cart would be $20. That'd bring your total down to $170.", textZh: "当然有。9洞的费率是每人35美元，球车20美元。总共降到170美元。", keyPhrases: [{ en: "9-hole rate", zh: "9洞费率" }],
            alternativeExpressions: [
              { textEn: "Sure, we do 9 holes. That's $35 each, cart's $20. Saves you a bit — total comes to $170.", textZh: "可以打9洞。每人35美元，球车20。省一点——总共170美元。", actionHint: "saves you a bit = 能省一点", frequency: "common" },
              { textEn: "Yeah, no problem. 9 holes is 35 a person, and the cart drops to $20. So you'd be looking at $170 all together.", textZh: "没问题。9洞每人35，球车降到20。加一起170美元。", actionHint: "drops to = 降到, all together = 总共", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Let's do the 9-hole. Is there a dress code we should know about?", textZh: "那就打9洞吧。有什么着装要求我们需要知道的吗？" },
          { speaker: "them", role: "前台", textEn: "We ask for collared shirts and no jeans or flip-flops on the course. Golf shoes or sneakers are fine. The pro shop has shirts if you need one. See you at the first tee!", textZh: "我们要求穿有领衬衫，球场上不能穿牛仔裤或人字拖。高尔夫球鞋或运动鞋都行。如果需要衬衫，专卖店有卖。第一洞见！", keyPhrases: [{ en: "collared shirts", zh: "有领衬衫" }, { en: "dress code", zh: "着装要求" }, { en: "pro shop", zh: "专卖店" }],
            alternativeExpressions: [
              { textEn: "Just a collar on the shirt, no jeans or sandals out there. Sneakers work fine. If you need a polo, the shop's got some. See you out there!", textZh: "衬衫要有领，别穿牛仔裤或凉鞋。运动鞋就行。需要Polo衫的话店里有。球场见！", actionHint: "polo = 有领短袖衫, out there = 球场上", frequency: "common" },
              { textEn: "Collared shirt is required, and no denim or flip-flops on the course. Golf shoes or tennis shoes are both fine. Pro shop has everything you need. Enjoy your round!", textZh: "要穿有领衬衫，球场不能穿牛仔布或人字拖。高尔夫鞋或网球鞋都行。专卖店什么都有。打球愉快！", actionHint: "round = 一轮高尔夫/打一场球", frequency: "common" },
            ] },
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
          { speaker: "you", textEn: "Hi, we'd like to get a lane for four people. How much is it?", textZh: "你好，我们四个人想租一条球道。多少钱？" },
          { speaker: "them", role: "前台", textEn: "It's $6 per person per game, or $25 per hour for the lane — unlimited games. Shoe rental is $4 each. What sounds better?", textZh: "每人每局6美元，或者按小时租球道25美元一小时——不限局数。鞋子租赁每双4美元。您觉得哪种好？", keyPhrases: [{ en: "per game", zh: "每局" }, { en: "per hour", zh: "每小时" }, { en: "shoe rental", zh: "鞋子租赁" }],
            alternativeExpressions: [
              { textEn: "Six bucks a person per game, or 25 an hour for the whole lane — play as many games as you want. Shoes are 4 bucks. Which way works for you?", textZh: "每人每局6块，或者25块一小时整条球道——想打多少局打多少局。鞋子4块。你们选哪种？", actionHint: "which way works for you = 哪种方式适合你", frequency: "common" },
              { textEn: "We've got two options: $6 per head per game, or $25 an hour for the lane with unlimited bowling. Plus $4 for shoe rental. What do you guys prefer?", textZh: "两种选择：每人每局6美元，或每小时25美元包球道不限次数。再加4美元鞋子。你们喜欢哪种？", actionHint: "per head = per person 每人", frequency: "common" },
            ] },
          { speaker: "you", textEn: "The hourly rate sounds good. We'll do two hours. What shoe sizes do you need?", textZh: "按小时的听起来不错。我们要两个小时。你们需要什么鞋码？", culturalNote: "保龄球馆必须穿专用保龄球鞋，不能穿自己的鞋上球道。美国鞋码和中国不同，可以直接告诉工作人员你的中国码。" },
          { speaker: "them", role: "前台", textEn: "Just tell me everyone's sizes. And what weight balls would you like? We have everything from 6 pounds for kids to 16 pounds for the pros.", textZh: "告诉我每个人的鞋码就好。你们要多重的球？从6磅的儿童球到16磅的专业球都有。", keyPhrases: [{ en: "weight", zh: "重量" }, { en: "pounds", zh: "磅" }],
            alternativeExpressions: [
              { textEn: "Give me everyone's shoe sizes and I'll get you sorted. Ball-wise, we've got 6-pounders for kids all the way up to 16 for the serious bowlers.", textZh: "告诉我每个人的鞋码我帮你们搞定。球的话，从6磅小孩用的到16磅专业级的都有。", actionHint: "get you sorted = 帮你搞定, ball-wise = 球方面", frequency: "common" },
              { textEn: "Just shout out your sizes. And for balls — we go from 6 pounds all the way to 16. What's everyone comfortable with?", textZh: "直接报鞋码就好。球的话——从6磅到16磅都有。你们用多重的合适？", actionHint: "shout out = 大声说出来", frequency: "common" },
            ] },
          { speaker: "you", textEn: "We're all beginners. What weight do you recommend?", textZh: "我们都是初学者。你推荐多重的？" },
          { speaker: "them", role: "前台", textEn: "For beginners, I'd say 10 to 12 pounds. The ball should feel comfortable — not too heavy that it hurts your wrist. You can always switch if it doesn't feel right.", textZh: "初学者的话我建议10到12磅。球应该拿着舒服——不要重到伤手腕。如果觉得不合适随时可以换。", keyPhrases: [{ en: "comfortable", zh: "舒服的" }, { en: "wrist", zh: "手腕" }],
            alternativeExpressions: [
              { textEn: "Start with a 10 or 12 — you want it to feel natural in your hand, not straining your wrist. If it's too heavy or too light, just swap it out.", textZh: "从10或12磅开始——拿在手上要自然，不要让手腕费劲。太重或太轻随时换。", actionHint: "swap it out = 换掉", frequency: "common" },
              { textEn: "I'd go with a 10 or 12 pounder to start. You don't want anything that's gonna wreck your wrist. You can always try a different one.", textZh: "建议先用10或12磅的。别选太重把手腕弄伤。随时可以试别的。", actionHint: "gonna wreck = 会弄伤, pounder = 磅重的球", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Can we order food and drinks to our lane?", textZh: "我们可以在球道上点吃的喝的吗？" },
          { speaker: "them", role: "前台", textEn: "Absolutely! Here's the menu. Just flag down a server or use the tablet at your lane to order. Lane 7 is all yours — have a blast!", textZh: "当然可以！这是菜单。招呼一下服务员或者用球道上的平板电脑点餐。7号球道是你们的——玩得开心！", keyPhrases: [{ en: "flag down a server", zh: "招呼服务员" }, { en: "have a blast", zh: "玩得开心" }],
            alternativeExpressions: [
              { textEn: "For sure! Here's the menu — you can wave over a server or order from the screen at your lane. You're on lane 7. Have fun!", textZh: "当然！菜单给你——可以招手叫服务员或者用球道上的屏幕点。你们在7号球道。玩开心！", actionHint: "wave over = 招手叫过来", frequency: "common" },
              { textEn: "Yeah, totally! Check out the menu — just order at the tablet on your lane or grab a server. Lane 7's yours — go have a great time!", textZh: "当然可以！看看菜单——用球道上的平板点或者叫服务员。7号球道是你们的——好好玩！", actionHint: "grab a server = 找个服务员", frequency: "common" },
            ] },
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
          { speaker: "you", textEn: "Hi, we'd like a private room for six people. What are your rates?", textZh: "你好，我们六个人想要一个包厢。价格怎么算？", culturalNote: "在美国，卡拉OK有包厢式 private room 和开放式 open mic 两种。亚洲人通常更习惯包厢式。" },
          { speaker: "them", role: "前台", textEn: "For six people, our medium room is $40 per hour. That includes the sound system and two microphones. We have a two-hour minimum on weekends.", textZh: "六个人的话，中号包厢每小时40美元。包括音响系统和两个麦克风。周末最少两小时起。", keyPhrases: [{ en: "private room", zh: "包厢" }, { en: "two-hour minimum", zh: "最少两小时" }, { en: "sound system", zh: "音响系统" }],
            alternativeExpressions: [
              { textEn: "Six people? The mid-size room is 40 an hour — comes with speakers and two mics. Just so you know, there's a two-hour minimum on the weekends.", textZh: "六个人？中号房间一小时40——带音响和两个麦。周末最少两小时起订。", actionHint: "mics = microphones 麦克风", frequency: "common" },
              { textEn: "Our medium room fits six perfectly — $40/hour, sound system and two mics included. Weekend minimum is two hours though.", textZh: "中号房正好六个人——每小时40美元，包含音响和两个麦。不过周末最少要两小时。", actionHint: "fits...perfectly = 正好适合", frequency: "common" },
            ] },
          { speaker: "you", textEn: "We'll take two hours. Do you have songs in Chinese and English?", textZh: "我们要两个小时。有中文和英文歌吗？" },
          { speaker: "them", role: "前台", textEn: "Yes, our system has over 50,000 songs in multiple languages — English, Chinese, Korean, Japanese, Spanish. You can search by title, artist, or language on the tablet.", textZh: "有的，我们的系统有超过5万首多语言歌曲——英文、中文、韩文、日文、西班牙文。您可以在平板上按歌名、歌手或语言搜索。", keyPhrases: [{ en: "search by title", zh: "按歌名搜索" }, { en: "artist", zh: "歌手" }],
            alternativeExpressions: [
              { textEn: "Oh yeah, we've got like 50,000 songs — English, Chinese, Korean, Japanese, Spanish, you name it. Just look it up on the tablet by song name, artist, or language.", textZh: "有啊，大概5万首歌——英文、中文、韩文、日文、西班牙文，什么都有。在平板上按歌名、歌手或语言搜就行。", actionHint: "look it up = 查找/搜索", frequency: "common" },
              { textEn: "Totally! The catalog's huge — over 50K songs in a bunch of languages. The tablet in your room lets you search by title, artist, whatever.", textZh: "当然！歌库超大——5万多首歌好多种语言。房间里的平板可以按歌名、歌手什么的搜。", actionHint: "50K = 50,000, catalog = 歌库", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Great! Can we order drinks and snacks to the room?", textZh: "太好了！我们可以在房间里点饮料和零食吗？" },
          { speaker: "them", role: "前台", textEn: "Of course. Here's our menu. We have a drink package — unlimited soft drinks and juice for $8 per person. Alcohol is ordered separately.", textZh: "当然。这是我们的菜单。我们有饮料套餐——无限量软饮和果汁每人8美元。酒精饮品另外点。", keyPhrases: [{ en: "drink package", zh: "饮料套餐" }, { en: "unlimited", zh: "无限量" }],
            alternativeExpressions: [
              { textEn: "Yep! Here's the menu. We've got an all-you-can-drink deal for sodas and juice — 8 bucks a person. Booze is separate.", textZh: "可以！菜单在这。软饮和果汁有无限畅饮——每人8块。酒类单点。", actionHint: "all-you-can-drink = 无限畅饮, booze = 酒（口语）", frequency: "common" },
              { textEn: "For sure! Check out the menu — there's an unlimited soft drink and juice package for $8 each. Cocktails and beer are à la carte.", textZh: "当然！看看菜单——有无限量软饮和果汁套餐每人8美元。鸡尾酒和啤酒单点。", actionHint: "à la carte = 单点/按单品点", frequency: "occasional" },
            ] },
          { speaker: "you", textEn: "We'll take the drink package. Can we extend our time if we're having fun?", textZh: "我们要饮料套餐。如果玩得高兴可以延长时间吗？" },
          { speaker: "them", role: "前台", textEn: "Absolutely, just let us know before your time is up. If the room isn't booked after you, you can extend at the same rate. Room 5 is ready — sing your hearts out!", textZh: "当然可以，时间快到的时候跟我们说一声就好。如果你们之后这个房间没有预约，可以按同样价格延长。5号房准备好了——尽情唱吧！", keyPhrases: [{ en: "extend", zh: "延长" }, { en: "sing your hearts out", zh: "尽情唱" }],
            alternativeExpressions: [
              { textEn: "Sure, just give us a heads-up before your time runs out. If nobody's got the room after you, you can keep going at the same price. Room 5 — go have a blast!", textZh: "当然，快到时间跟我们说一声。如果后面没人订，可以按同价续。5号房——玩得开心！", actionHint: "give us a heads-up = 提前告诉我们, keep going = 继续", frequency: "common" },
              { textEn: "Totally! Just flag us down when your time's almost up. If it's open after you, same rate to stay longer. Room 5 is all set — go belt out some tunes!", textZh: "当然可以！快到时间叫我们。如果后面没人，同价续时间。5号房准备好了——去飙歌吧！", actionHint: "belt out some tunes = 放声唱歌", frequency: "occasional" },
            ] },
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
          { speaker: "you", textEn: "Hi, we have a reservation for four at 3 PM. The name is Li.", textZh: "你好，我们预约了3点四个人的。名字是李。" },
          { speaker: "them", role: "游戏管理员", textEn: "Welcome! You're booked for our most popular room — the Detective's Office. Before we start, let me go over the rules.", textZh: "欢迎！你们预约的是我们最受欢迎的房间——侦探办公室。开始之前让我讲一下规则。", keyPhrases: [{ en: "reservation", zh: "预约" }, { en: "go over the rules", zh: "讲一下规则" }],
            alternativeExpressions: [
              { textEn: "Hey, welcome! So you guys are doing the Detective's Office — that's our most popular one. Let me quickly run through the rules before we get going.", textZh: "嘿，欢迎！你们玩侦探办公室——我们最受欢迎的。开始之前让我快速过一下规则。", actionHint: "run through = go over 过一遍", frequency: "common" },
              { textEn: "Welcome in! You've got the Detective's Office — great choice, it's our number one room. Real quick, let me cover the rules.", textZh: "欢迎！你们选了侦探办公室——很好的选择，我们排名第一的房间。很快讲一下规则。", actionHint: "real quick = 很快地", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Sure, go ahead. How long do we have?", textZh: "好的，请说。我们有多长时间？" },
          { speaker: "them", role: "游戏管理员", textEn: "You have 60 minutes to solve all the puzzles and escape the room. You can ask for up to three hints using the walkie-talkie inside. No phones allowed, and please don't force open any locks.", textZh: "你们有60分钟解开所有谜题逃出房间。可以用房间里的对讲机请求最多三次提示。不能用手机，请不要强行打开任何锁。", keyPhrases: [{ en: "puzzles", zh: "谜题" }, { en: "hints", zh: "提示" }, { en: "walkie-talkie", zh: "对讲机" }],
            alternativeExpressions: [
              { textEn: "You've got one hour to crack all the puzzles and get out. There's a walkie-talkie inside — you can use it for up to three clues. Phones stay outside, and don't try to force anything open.", textZh: "你们有一小时解开所有谜题逃出去。里面有对讲机——最多可以要三次线索。手机留外面，不要强行打开任何东西。", actionHint: "crack = 解开/破解", frequency: "common" },
              { textEn: "Sixty minutes on the clock to solve everything and escape. If you get stuck, hit us up on the walkie-talkie — three hints max. No phones, and please don't brute-force the locks.", textZh: "60分钟解开所有东西逃出来。卡住了用对讲机找我们——最多三次提示。不能用手机，别硬来开锁。", actionHint: "hit us up = 联系我们, brute-force = 硬来/暴力打开", frequency: "common" },
            ] },
          { speaker: "you", textEn: "What's the success rate for this room?", textZh: "这个房间的通关率是多少？", culturalNote: "密室逃脱在欧美非常流行，通关率通常在30%-40%之间。不要有压力，享受过程最重要。" },
          { speaker: "them", role: "游戏管理员", textEn: "About 35% of groups escape in time. The record is 42 minutes. My tip: communicate with your team and don't overthink the clues — sometimes the answer is simpler than you think.", textZh: "大约35%的队伍能在时间内逃出。纪录是42分钟。我的建议：跟队友多沟通，不要过度思考线索——有时候答案比你想的简单。", keyPhrases: [{ en: "success rate", zh: "通关率" }, { en: "clues", zh: "线索" }, { en: "overthink", zh: "过度思考" }],
            alternativeExpressions: [
              { textEn: "Roughly a third of teams make it out. Fastest time is 42 minutes. Pro tip: talk to each other and keep it simple — people tend to overcomplicate things.", textZh: "大约三分之一的队伍能出来。最快纪录42分钟。建议：多交流别想太复杂——大家容易把事情搞复杂。", actionHint: "make it out = 成功逃出, overcomplicate = 搞复杂", frequency: "common" },
              { textEn: "About 1 in 3 groups get out in time — the record's 42 minutes. Best advice? Keep talking to your team, and don't read too much into the clues.", textZh: "大概三分之一的队伍能按时出来——纪录42分钟。最好的建议？跟队友保持沟通，别对线索想太多。", actionHint: "read too much into = 过度解读", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Got it. Is there anything else we should know before going in?", textZh: "明白了。进去之前还有什么我们需要知道的吗？" },
          { speaker: "them", role: "游戏管理员", textEn: "Just have fun! Everything you need is in the room. I'll be watching on the camera, so if you need a hint, just wave at the camera and use the walkie-talkie. Ready? Let's go!", textZh: "尽情玩就好！你们需要的一切都在房间里。我会通过摄像头观察，如果需要提示就对着摄像头挥手然后用对讲机。准备好了吗？走吧！", keyPhrases: [{ en: "wave at the camera", zh: "对着摄像头挥手" }, { en: "have fun", zh: "尽情玩" }],
            alternativeExpressions: [
              { textEn: "Main thing is to enjoy it! Everything you need is already in there. I'm on the cameras, so wave if you want a hint and grab the walkie. Ready to rock?", textZh: "主要是享受！你们需要的都在里面。我盯着监控呢，想要提示就挥手然后拿对讲机。准备好了吗？", actionHint: "ready to rock = 准备好了吗（兴奋的语气）", frequency: "common" },
              { textEn: "Just go in and have a good time! All the clues are inside. I'll be keeping an eye on you guys through the camera. Need help? Wave and use the walkie-talkie. Let's do this!", textZh: "进去玩得开心就好！所有线索都在里面。我通过摄像头看着你们。需要帮忙？挥手用对讲机。开始吧！", actionHint: "keeping an eye on = 盯着/关注着, let's do this = 开始吧", frequency: "common" },
            ] },
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
          { speaker: "you", textEn: "Hello, we'd like to do a wine tasting. Do we need a reservation?", textZh: "你好，我们想品酒。需要预约吗？", culturalNote: "在纳帕谷等热门酒庄区，品酒通常需要提前预约。一般品酒费 tasting fee 在15-50美元之间。" },
          { speaker: "them", role: "品酒师", textEn: "You're in luck — we have space right now. Our standard tasting is $25 per person and includes five wines. Would you prefer to sit inside or on the patio?", textZh: "你们运气好——现在正好有位置。标准品酒每人25美元，包含五款酒。您想坐室内还是露台？", keyPhrases: [{ en: "wine tasting", zh: "品酒" }, { en: "tasting fee", zh: "品酒费" }, { en: "patio", zh: "露台" }],
            alternativeExpressions: [
              { textEn: "Good timing — we've got room. The standard tasting runs $25 each, and you get to try five wines. Indoor or outdoor seating?", textZh: "来得正好——有位置。标准品酒每人25美元，可以试五款酒。坐室内还是室外？", actionHint: "good timing = 来得正好, runs = 费用是", frequency: "common" },
              { textEn: "Lucky you, we just had a table open up! It's $25 per person for the standard flight — five wines. Wanna sit inside or out on the terrace?", textZh: "你们运气好，刚好空出一桌！标准品酒套餐每人25美元——五款酒。想坐室内还是露台？", actionHint: "flight = 品酒套餐（酒类术语）, terrace = patio 露台", frequency: "occasional" },
            ] },
          { speaker: "you", textEn: "The patio sounds lovely. I'm not very experienced with wine — is that okay?", textZh: "露台听起来很好。我对葡萄酒不太了解——没关系吧？" },
          { speaker: "them", role: "品酒师", textEn: "Absolutely! That's what I'm here for. We'll start with our lightest white and work our way up to a bold red. I'll walk you through each one — the aroma, the flavors, what food pairs well.", textZh: "完全没问题！这就是我在这里的意义。我们会从最清淡的白葡萄酒开始，逐步过渡到浓郁的红葡萄酒。我会带您了解每一款——香气、风味、搭配什么食物好。", keyPhrases: [{ en: "aroma", zh: "香气" }, { en: "bold red", zh: "浓郁的红葡萄酒" }, { en: "pairs well", zh: "搭配得好" }],
            alternativeExpressions: [
              { textEn: "Of course! That's why I'm here. We'll go from light to full-bodied — starting with a crisp white and ending with a big red. I'll tell you what to look for in each one.", textZh: "当然！这就是我的工作。从清淡到醇厚——先喝爽口的白葡萄酒，最后是浓重的红酒。我会告诉你每款要注意什么。", actionHint: "full-bodied = 醇厚的, crisp = 爽口的", frequency: "common" },
              { textEn: "No worries at all! We'll ease you in with a light white and build up to the heavier reds. I'll break down the nose, the taste, and what to eat with each one.", textZh: "完全没关系！先从清淡的白酒入门，逐渐到重的红酒。我会讲解每款的香味、口感和搭配。", actionHint: "ease you in = 让你慢慢进入, the nose = 酒的香气（品酒术语）", frequency: "occasional" },
            ] },
          { speaker: "you", textEn: "This first one is really refreshing. What grape is this?", textZh: "第一款真的很清爽。这是什么葡萄酿的？" },
          { speaker: "them", role: "品酒师", textEn: "That's our Sauvignon Blanc. Notice the citrus and green apple notes? It's perfect with seafood or a light salad. If you like this style, I'll recommend our Pinot Grigio next.", textZh: "这是我们的长相思白葡萄酒。注意到柑橘和青苹果的味道了吗？搭配海鲜或清淡沙拉非常合适。如果您喜欢这种风格，接下来我推荐我们的灰皮诺。", keyPhrases: [{ en: "Sauvignon Blanc", zh: "长相思" }, { en: "citrus notes", zh: "柑橘味" }, { en: "Pinot Grigio", zh: "灰皮诺" }],
            alternativeExpressions: [
              { textEn: "That one's our Sauv Blanc. Can you taste the citrus and green apple? Goes great with fish or a salad. If this is your jam, you'll love the Pinot Grigio up next.", textZh: "那款是我们的长相思。尝到柑橘和青苹果味了吗？配鱼或沙拉很棒。如果喜欢这个风格，接下来的灰皮诺你会爱的。", actionHint: "Sauv Blanc = Sauvignon Blanc 的口语简称, your jam = 你喜欢的", frequency: "common" },
              { textEn: "You're drinking our Sauvignon Blanc. Get those lemony, green apple vibes? It's killer with seafood. I think you'd dig the Pinot Grigio too — wanna try it next?", textZh: "你喝的是我们的长相思。感受到柠檬和青苹果的味道了吗？配海鲜绝了。我觉得你也会喜欢灰皮诺——接下来试试？", actionHint: "vibes = 感觉/味道, killer = 非常棒, dig = 喜欢", frequency: "occasional" },
            ] },
          { speaker: "you", textEn: "Can we buy a bottle to take home if we find one we love?", textZh: "如果喝到喜欢的，可以买一瓶带回去吗？" },
          { speaker: "them", role: "品酒师", textEn: "Of course! And if you purchase two or more bottles, the tasting fee is waived. We can also ship to most states if you don't want to carry them. Let's continue to the next wine!", textZh: "当然！如果您买两瓶或以上，品酒费就免了。如果不想带着，我们可以邮寄到大部分州。我们继续品下一款！", keyPhrases: [{ en: "waived", zh: "免除" }, { en: "ship", zh: "邮寄" }],
            alternativeExpressions: [
              { textEn: "Absolutely! And here's the deal — buy two bottles or more and the tasting is on the house. We can ship to most states too. Ready for the next one?", textZh: "当然！而且买两瓶以上品酒就免费了。也可以邮寄到大部分州。准备好尝下一款了吗？", actionHint: "on the house = 免费的/店家请客", frequency: "common" },
              { textEn: "For sure! And FYI, if you end up buying two or more bottles, we comp the tasting fee. We do shipping too if you don't wanna lug bottles around. On to the next!", textZh: "当然可以！顺便说一下，买两瓶以上我们免品酒费。也提供邮寄，不用自己拎瓶子。下一款！", actionHint: "comp = 免费赠送, lug = 费力地搬运", frequency: "occasional" },
            ] },
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
          { speaker: "you", textEn: "Hi, this is my first time at a casino. Where do I get chips?", textZh: "你好，这是我第一次来赌场。我在哪里换筹码？", culturalNote: "在赌场可以直接在牌桌上把现金换成筹码，也可以去专门的兑换窗口 cashier cage。拉斯维加斯的赌场通常不需要会员卡。" },
          { speaker: "them", role: "荷官", textEn: "Welcome! You can buy chips right here at the table, or at the cashier cage near the entrance. This table has a $10 minimum bet. Would you like to sit down?", textZh: "欢迎！您可以直接在这个牌桌上买筹码，也可以去入口附近的兑换窗口。这张桌的最低下注是10美元。您想坐下吗？", keyPhrases: [{ en: "chips", zh: "筹码" }, { en: "minimum bet", zh: "最低下注" }, { en: "cashier cage", zh: "兑换窗口" }],
            alternativeExpressions: [
              { textEn: "Hey, welcome! You can get chips right here or hit the cage by the door. Table minimum's $10. Wanna have a seat?", textZh: "嘿，欢迎！可以在这里换筹码，或者去门口的兑换处。最低下注10美元。要坐下吗？", actionHint: "hit the cage = 去兑换窗口, table minimum = 最低下注", frequency: "common" },
              { textEn: "Welcome to the table! I can change your cash to chips right here, or there's a cashier near the entrance. This is a $10 minimum table — pull up a chair!", textZh: "欢迎来到牌桌！我可以在这直接帮你换筹码，或者去入口那边的收银台。这是10美元最低的桌——请坐！", actionHint: "pull up a chair = 拉把椅子坐下", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Sure. Can I start with $100? And could you explain the rules? I've never played blackjack before.", textZh: "好的。我可以先换100美元吗？你能解释一下规则吗？我从来没玩过21点。" },
          { speaker: "them", role: "荷官", textEn: "Of course. The goal is to get your cards as close to 21 as possible without going over. Face cards are worth 10, aces can be 1 or 11. I'll deal you two cards, and you decide to hit or stand.", textZh: "当然。目标是让你的牌尽可能接近21点但不能超过。人头牌值10，A可以是1或11。我发给您两张牌，您决定要牌还是停牌。", keyPhrases: [{ en: "hit", zh: "要牌" }, { en: "stand", zh: "停牌" }, { en: "face cards", zh: "人头牌" }, { en: "going over", zh: "爆牌/超过21" }],
            alternativeExpressions: [
              { textEn: "Sure! So basically, you want to get as close to 21 as you can without busting. Kings, queens, jacks are all 10. Aces are 1 or 11 — your choice. I deal two cards, and you say hit or stay.", textZh: "没问题！基本上就是尽量接近21但不能爆。K、Q、J都是10。A可以是1或11——你选。我发两张牌，你说要牌还是停。", actionHint: "busting = 爆牌/超过21, stay = stand 停牌", frequency: "common" },
              { textEn: "Simple — try to get to 21 or as close as possible. Go over and you bust. Face cards count as 10, ace is 1 or 11. I give you two cards, then you tell me: hit me or I'm good.", textZh: "很简单——尽量凑到21或接近。超过就爆了。人头牌算10，A是1或11。我发两张牌，你告诉我：要牌还是够了。", actionHint: "hit me = 给我一张牌, I'm good = 我够了/停牌", frequency: "common" },
            ] },
          { speaker: "you", textEn: "I have 15. Should I hit or stand?", textZh: "我有15点。我应该要牌还是停牌？" },
          { speaker: "them", role: "荷官", textEn: "That's up to you! With 15, there's a risk either way. If my face-up card is a 6 or lower, many players would stand. It's your call though — good luck!", textZh: "这取决于您！15点的话两种选择都有风险。如果我亮出的牌是6或更低，很多玩家会选择停牌。不过由您决定——祝您好运！", keyPhrases: [{ en: "face-up card", zh: "亮出的牌" }, { en: "it's your call", zh: "由您决定" }],
            alternativeExpressions: [
              { textEn: "Totally your decision! 15's a tricky spot. A lot of folks would stay if I'm showing a 6 or under. But hey, it's your money — go with your gut!", textZh: "完全你来决定！15点是个纠结的位置。我亮的牌6或以下很多人会停。不过是你的钱——跟着直觉走！", actionHint: "go with your gut = 跟着直觉走, tricky spot = 纠结的情况", frequency: "common" },
              { textEn: "That's the million-dollar question! 15 could go either way. If I'm showing something low, standing's not a bad play. Your call though — fingers crossed!", textZh: "这是个大问题！15点两种可能都有。我亮的牌低的话，停牌不是个坏选择。你决定——祝好运！", actionHint: "fingers crossed = 祝好运, not a bad play = 不是坏选择", frequency: "occasional" },
            ] },
          { speaker: "you", textEn: "I'll stand. How do I cash out my chips when I'm done?", textZh: "我停牌。玩完以后怎么把筹码换成现金？" },
          { speaker: "them", role: "荷官", textEn: "Just take your chips to the cashier cage and they'll exchange them for cash. And don't forget — if you're having a good run, it's customary to tip the dealer a chip or two. Have fun at the tables!", textZh: "把筹码拿到兑换窗口就行，他们会换成现金。别忘了——如果您赢了不少，习惯上会给荷官一两个筹码作为小费。祝您玩得开心！", keyPhrases: [{ en: "cash out", zh: "兑现" }, { en: "tip the dealer", zh: "给荷官小费" }],
            alternativeExpressions: [
              { textEn: "Bring your chips to the cage and they'll cash you out. Oh, and if you're on a hot streak, it's nice to toss the dealer a chip. Good luck out there!", textZh: "拿筹码去兑换处他们会给你换现金。对了，如果你手气好，扔给荷官一个筹码是惯例。祝好运！", actionHint: "hot streak = 连赢/手气好, toss = 扔/给", frequency: "common" },
              { textEn: "When you're done, just head to the cashier and swap your chips for cash. And hey — if Lady Luck's on your side, a tip for the dealer is always appreciated. Enjoy!", textZh: "玩完了去收银台把筹码换成现金。如果运气好的话，给荷官小费是受欢迎的。玩得开心！", actionHint: "Lady Luck = 幸运女神, swap = 交换", frequency: "occasional" },
            ] },
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
          { speaker: "you", textEn: "Excuse me, what's this dish? It smells amazing!", textZh: "请问，这是什么菜？闻起来太香了！", casualVersion: "Hey, what's cooking? Smells so good!" },
          { speaker: "them", role: "摊主", textEn: "That's our grilled lamb skewers with a special spice rub. $3 for two skewers. Want to try one?", textZh: "这是我们的烤羊肉串，用特制香料腌的。两串3美元。要试一串吗？", keyPhrases: [{ en: "skewers", zh: "串" }, { en: "spice rub", zh: "香料腌制" }],
            alternativeExpressions: [
              { textEn: "Those are lamb skewers — we season 'em with our own spice blend. Three bucks for two. Wanna give 'em a shot?", textZh: "那是羊肉串——我们自己的混合香料调味的。三块钱两串。要不要试试？", actionHint: "'em = them, give 'em a shot = 试试", frequency: "common" },
              { textEn: "Grilled lamb on a stick with our house spice mix! Two for $3. You should totally try one.", textZh: "烤羊肉串配我们的独家香料！两串3美元。你一定要试试。", actionHint: "on a stick = 串上的, house = 自家的/独家", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Yes, please! And what's in that drink over there?", textZh: "好的！那边那个饮料是什么？" },
          { speaker: "them", role: "摊主", textEn: "That's fresh mango smoothie with coconut milk. It's our bestseller — $4 each. I can make it less sweet if you prefer.", textZh: "那是新鲜芒果奶昔加椰奶。是我们的畅销款——每杯4美元。如果您喜欢可以做淡一点。", keyPhrases: [{ en: "bestseller", zh: "畅销款" }, { en: "less sweet", zh: "淡一点/少甜" }],
            alternativeExpressions: [
              { textEn: "Mango smoothie with coconut milk — it's our number one seller. Four bucks. I can dial back the sweetness if you want.", textZh: "芒果椰奶奶昔——我们卖得最好的。4块钱。想少甜点我可以调。", actionHint: "dial back = 减少/调低", frequency: "common" },
              { textEn: "That's our mango-coconut smoothie — people go nuts for it. $4 a cup. Want it less sugary? I can do that.", textZh: "那是我们的芒果椰子奶昔——大家都疯狂喜欢。每杯4美元。想少糖？可以做。", actionHint: "go nuts for it = 非常喜欢, sugary = 甜的/含糖的", frequency: "common" },
            ] },
          { speaker: "you", textEn: "I'll take one, not too sweet. Do you accept cards, or is it cash only?", textZh: "来一杯，不要太甜。你们收银行卡还是只收现金？", culturalNote: "夜市和街头摊位有些只收现金，建议提前准备好零钱。有些可能接受 Venmo 或 Zelle 等手机支付。" },
          { speaker: "them", role: "摊主", textEn: "We take both! Cash, card, or Venmo. Here's your smoothie and your skewers. Be careful — the skewers are hot!", textZh: "都收！现金、银行卡或Venmo。这是您的奶昔和烤串。小心——烤串很烫！", keyPhrases: [{ en: "Venmo", zh: "Venmo（美国手机支付）" }, { en: "be careful", zh: "小心" }],
            alternativeExpressions: [
              { textEn: "We take everything — cash, card, Venmo, whatever works. Here you go! Watch out, the skewers are fresh off the grill.", textZh: "什么都收——现金、卡、Venmo都行。给你！小心，烤串刚下炉。", actionHint: "whatever works = 什么方式都行, fresh off the grill = 刚烤好的", frequency: "common" },
              { textEn: "Cash, card, or Venmo — we're flexible. Here's your stuff! Careful with those skewers though, they're piping hot.", textZh: "现金、卡或Venmo——都行。东西给你！小心烤串，非常烫。", actionHint: "piping hot = 非常烫", frequency: "common" },
            ] },
          { speaker: "you", textEn: "This is delicious! Do you come here every weekend?", textZh: "太好吃了！你们每个周末都来这里吗？" },
          { speaker: "them", role: "摊主", textEn: "Every Friday and Saturday night! We're also at the Sunday farmers market downtown. Follow us on Instagram for our schedule. Come back anytime!", textZh: "每周五和周六晚上！我们周日也在市中心的农夫市场。关注我们的Instagram可以看时间表。随时再来！", keyPhrases: [{ en: "farmers market", zh: "农夫市场" }, { en: "follow us on Instagram", zh: "关注我们的Instagram" }],
            alternativeExpressions: [
              { textEn: "Fridays and Saturdays! We do the farmers market on Sundays too, downtown. Hit us up on Insta for where we'll be. See you next time!", textZh: "周五和周六！周日也在市中心的农夫市场。在Insta上关注我们看我们在哪。下次见！", actionHint: "hit us up on Insta = 在Instagram上找我们/关注我们", frequency: "common" },
              { textEn: "We're here every weekend — Friday and Saturday nights. Also the Sunday farmers market downtown. Check our Instagram for updates. Hope to see you again!", textZh: "每个周末都在——周五和周六晚上。周日也在市中心农夫市场。看我们Instagram了解最新。希望再见到你！", actionHint: "check our Instagram = 看我们的Instagram", frequency: "common" },
            ] },
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
          { speaker: "you", textEn: "Hi, are there any tickets left for tonight's show?", textZh: "你好，今晚的演出还有票吗？", culturalNote: "百老汇当日票 rush tickets 或彩票票 lottery tickets 通常很便宜，但需要早起排队或碰运气。TKTS摊位可以买到折扣票。" },
          { speaker: "them", role: "售票员", textEn: "Let me check. We have a few orchestra seats left at $159 each, and some mezzanine seats for $89. The mezzanine actually has a great view of the full stage.", textZh: "我查一下。还有几个正厅前排座位每张159美元，楼座有一些座位89美元。楼座其实能看到整个舞台的全景。", keyPhrases: [{ en: "orchestra seats", zh: "正厅前排座位" }, { en: "mezzanine", zh: "楼座" }, { en: "full stage", zh: "整个舞台" }],
            alternativeExpressions: [
              { textEn: "Let me pull it up... We've still got a couple orchestra seats at $159, and some mezz seats for $89. Honestly, the mezz gives you a killer view of the whole stage.", textZh: "我查一下...正厅还有几个座位159美元，楼座89美元。说实话，楼座视角看整个舞台特别好。", actionHint: "pull it up = 查一下, mezz = mezzanine 的简称, killer view = 极好的视角", frequency: "common" },
              { textEn: "Hmm, let me see. There are a handful of orchestra seats left — $159. Mezzanine's $89 and to be honest, you can see everything from up there.", textZh: "嗯，我看看。正厅还剩几个——159美元。楼座89美元，说真的从上面什么都能看到。", actionHint: "a handful of = 几个, to be honest = 说实话", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Two mezzanine seats, please. What time does the show start?", textZh: "两张楼座的票。演出几点开始？" },
          { speaker: "them", role: "售票员", textEn: "The show starts at 8 PM sharp. Doors open at 7:30. I'd recommend arriving by 7:40 at the latest — latecomers won't be seated until intermission.", textZh: "演出晚上8点准时开始。7:30开门。建议最晚7:40到——迟到的人要等到中场休息才能入座。", keyPhrases: [{ en: "sharp", zh: "准时" }, { en: "latecomers", zh: "迟到的人" }, { en: "intermission", zh: "中场休息" }],
            alternativeExpressions: [
              { textEn: "Curtain's at 8 on the dot. Doors at 7:30. Try to be here by 7:40 — if you're late, they won't let you in till intermission.", textZh: "8点准时开幕。7:30开门。尽量7:40到——迟到的话中场休息前不让进。", actionHint: "curtain's at = 开幕时间是, on the dot = 准时", frequency: "common" },
              { textEn: "8 PM start, doors open at 7:30. I'd say get here by 7:40 — they're pretty strict about seating latecomers. You'd have to wait till the break.", textZh: "8点开演，7:30开门。建议7:40到——对迟到入场管得挺严。得等到中间休息。", actionHint: "pretty strict = 挺严格的, the break = intermission 中场休息", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Good to know. How long is the show?", textZh: "好的。演出多长时间？" },
          { speaker: "them", role: "售票员", textEn: "It's about two hours and 30 minutes including a 15-minute intermission. There are restrooms on every level, and concessions in the lobby.", textZh: "大约两小时30分钟，包括15分钟的中场休息。每层都有洗手间，大厅有小卖部。", keyPhrases: [{ en: "concessions", zh: "小卖部" }, { en: "lobby", zh: "大厅" }],
            alternativeExpressions: [
              { textEn: "Around two and a half hours with a 15-minute break in the middle. Bathrooms on every floor, and there's a snack bar in the lobby.", textZh: "大约两个半小时，中间有15分钟休息。每层有洗手间，大厅有小吃吧。", actionHint: "snack bar = 小吃吧/小卖部", frequency: "common" },
              { textEn: "The whole thing runs about 2 hours 30 with a 15-minute intermission. Restrooms are on each level, and you can grab drinks and snacks out front.", textZh: "整场大约2小时30分钟，有15分钟中场休息。每层有洗手间，前面可以买饮料和零食。", actionHint: "the whole thing = 整场, out front = 前面/大厅", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Is there a dress code for Broadway?", textZh: "看百老汇有着装要求吗？" },
          { speaker: "them", role: "售票员", textEn: "No strict dress code, but most people dress smart casual — no shorts or flip-flops. You'll see everything from suits to nice jeans. Enjoy the show — it's absolutely fantastic!", textZh: "没有严格的着装要求，但大多数人穿休闲正装——不要穿短裤或人字拖。您会看到从西装到好看的牛仔裤各种穿着。祝观演愉快——这场演出真的非常精彩！", keyPhrases: [{ en: "smart casual", zh: "休闲正装" }, { en: "fantastic", zh: "精彩的" }],
            alternativeExpressions: [
              { textEn: "Nothing formal required, but people usually dress up a bit — no shorts or sandals. Anything from a blazer to nice jeans works. You're gonna love it!", textZh: "不需要正式着装，但大家通常会穿得稍微好一点——别穿短裤或凉鞋。从西装外套到好看的牛仔裤都行。你会喜欢的！", actionHint: "dress up a bit = 穿得稍微好一点, blazer = 西装外套", frequency: "common" },
              { textEn: "There's no official dress code. Most folks go smart casual — just skip the shorts and flip-flops. It's an amazing show, you're in for a treat!", textZh: "没有官方着装要求。大多数人穿休闲正装——别穿短裤和人字拖就行。演出超棒，你们有福了！", actionHint: "you're in for a treat = 你们有福了/会有惊喜", frequency: "common" },
            ] },
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
          { speaker: "you", textEn: "Hi, two tickets for the 9 PM show, please. Is there a drink minimum?", textZh: "你好，两张9点那场的票。有最低消费吗？", culturalNote: "美国喜剧俱乐部通常有 two-drink minimum（两杯最低消费），意思是每人必须至少点两杯饮料。" },
          { speaker: "them", role: "前台", textEn: "Tickets are $20 each, and yes, there's a two-drink minimum per person. Drinks start at $8. Would you like front row or further back?", textZh: "票每张20美元，是的，每人有两杯最低消费。饮料8美元起。您想坐前排还是后面一点？", keyPhrases: [{ en: "two-drink minimum", zh: "两杯最低消费" }, { en: "front row", zh: "前排" }],
            alternativeExpressions: [
              { textEn: "Twenty bucks a ticket, and yeah, there's a two-drink minimum — drinks are $8 and up. You wanna sit up front or hang back a bit?", textZh: "每张票20块，是的有两杯最低消费——饮料8美元起。想坐前面还是靠后一点？", actionHint: "hang back = 坐后面一点", frequency: "common" },
              { textEn: "It's $20 per ticket. There is a two-drink min per person, cheapest drink is $8. Front row or somewhere further back?", textZh: "每张票20美元。每人两杯最低消费，最便宜的饮料8美元。前排还是后面？", actionHint: "two-drink min = two-drink minimum 的缩写", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Maybe not the front row — I heard comedians like to pick on people up front!", textZh: "前排就算了——我听说喜剧演员喜欢调侃前排的人！" },
          { speaker: "them", role: "前台", textEn: "Ha, you heard right! The comics do love to interact with the front row. I'll put you in the middle section — close enough to see but safe from being called out.", textZh: "哈，你说得对！喜剧演员确实喜欢和前排互动。我给你们安排中间区域——看得清楚但不会被点名。", keyPhrases: [{ en: "pick on", zh: "调侃/挑逗" }, { en: "called out", zh: "被点名" }, { en: "comics", zh: "喜剧演员" }],
            alternativeExpressions: [
              { textEn: "Ha, smart move! Yeah, the comedians definitely mess with the front row. I'll seat you in the middle — good view, and you won't get dragged into any bits.", textZh: "哈，聪明！喜剧演员确实会拿前排开涮。我安排你们坐中间——看得清楚，也不会被拉进段子里。", actionHint: "mess with = 拿...开玩笑, bits = 喜剧段子", frequency: "common" },
              { textEn: "Haha, you know the deal! Front row is the danger zone. I'll stick you guys in the middle — great sightlines, no risk of being part of the act.", textZh: "哈哈，你懂行！前排是危险区。我把你们放中间——视线好，不会成为表演的一部分。", actionHint: "danger zone = 危险区（这里是幽默说法）, sightlines = 视线", frequency: "occasional" },
            ] },
          { speaker: "you", textEn: "Perfect. Is it okay to laugh loudly? I don't want to be rude.", textZh: "太好了。大声笑没关系吧？我不想不礼貌。" },
          { speaker: "them", role: "前台", textEn: "Laugh as loud as you want — that's the whole point! Just don't heckle the performers or use your phone. The comics really appreciate an enthusiastic audience.", textZh: "想多大声笑就多大声——这就是来这里的意义！只是不要起哄打断表演者或用手机。喜剧演员真的很感谢热情的观众。", keyPhrases: [{ en: "heckle", zh: "起哄打断" }, { en: "enthusiastic audience", zh: "热情的观众" }],
            alternativeExpressions: [
              { textEn: "Oh, laugh your head off — that's what they want! Just don't shout stuff at the performers or pull out your phone. They love a loud crowd.", textZh: "大笑吧——他们就要这个效果！别对表演者大喊大叫或掏手机就行。他们喜欢吵闹的观众。", actionHint: "laugh your head off = 笑到不行, loud crowd = 热闹的观众", frequency: "common" },
              { textEn: "The louder the better! Just no heckling and keep your phone away. Comedians feed off the audience energy, so go crazy with the laughs.", textZh: "越响越好！别起哄，手机收起来。喜剧演员靠观众的能量发挥，尽管笑。", actionHint: "feed off = 从中获取能量, go crazy = 尽情/放开", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Got it. Who's performing tonight?", textZh: "明白了。今晚谁表演？" },
          { speaker: "them", role: "前台", textEn: "We have three comics tonight. The headliner is Sarah Mitchell — she was on a Netflix special last year. The show runs about 90 minutes total. You're going to have a great time!", textZh: "今晚有三位喜剧演员。头牌是 Sarah Mitchell——她去年上过Netflix专场。整场演出大约90分钟。你们一定会玩得很开心！", keyPhrases: [{ en: "headliner", zh: "头牌/主演" }, { en: "Netflix special", zh: "Netflix专场" }],
            alternativeExpressions: [
              { textEn: "Three comics on the lineup tonight. The main act is Sarah Mitchell — she had a Netflix special last year, she's hilarious. About 90 minutes total. You'll have a blast!", textZh: "今晚阵容有三位喜剧演员。主角是Sarah Mitchell——去年有Netflix专场，超搞笑。总共约90分钟。你们会玩得超开心！", actionHint: "lineup = 阵容/节目单, hilarious = 超搞笑", frequency: "common" },
              { textEn: "Tonight's got three performers. Sarah Mitchell closes the show — she did a Netflix special, super funny. The whole thing is about an hour and a half. Enjoy!", textZh: "今晚有三位表演者。Sarah Mitchell压轴——做过Netflix专场，超级搞笑。整场大约一个半小时。祝愉快！", actionHint: "closes the show = 压轴表演", frequency: "common" },
            ] },
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
          { speaker: "you", textEn: "Hi, this is my first time at this festival. What's happening today?", textZh: "你好，这是我第一次来这个节日。今天有什么活动？" },
          { speaker: "them", role: "志愿者", textEn: "Welcome! Today we have live music on the main stage starting at noon, food vendors all along the park, craft workshops at 2 PM, and the big parade at 5. Here's a schedule.", textZh: "欢迎！今天中午开始主舞台有现场音乐，公园沿路都是美食摊位，下午2点有手工工作坊，5点有大游行。这是时间表。", keyPhrases: [{ en: "live music", zh: "现场音乐" }, { en: "food vendors", zh: "美食摊位" }, { en: "craft workshops", zh: "手工工作坊" }, { en: "parade", zh: "游行" }],
            alternativeExpressions: [
              { textEn: "Hey, welcome! So there's live bands on the main stage from noon, tons of food stalls through the park, crafts at 2, and the big parade kicks off at 5. Here's the rundown.", textZh: "欢迎！主舞台从中午开始有现场乐队，公园里很多美食摊，2点有手工活动，5点大游行。这是安排表。", actionHint: "kicks off = 开始, rundown = 简要安排/概况", frequency: "common" },
              { textEn: "Welcome to the festival! We've got a packed day — music starts at noon, food everywhere, craft workshops at 2, and the parade's at 5. Take a schedule!", textZh: "欢迎来节日！今天活动很满——中午开始有音乐，到处都是吃的，2点手工工作坊，5点游行。拿个时间表！", actionHint: "packed day = 排得很满的一天", frequency: "common" },
            ] },
          { speaker: "you", textEn: "The craft workshop sounds fun! Do I need to sign up in advance?", textZh: "手工工作坊听起来很有趣！需要提前报名吗？" },
          { speaker: "them", role: "志愿者", textEn: "Just show up at the craft tent — it's first come, first served. Today they're making flower crowns and tie-dye T-shirts. Materials are all free!", textZh: "直接去手工帐篷就好——先到先得。今天做花冠和扎染T恤。材料全部免费！", keyPhrases: [{ en: "first come, first served", zh: "先到先得" }, { en: "flower crowns", zh: "花冠" }, { en: "tie-dye", zh: "扎染" }],
            alternativeExpressions: [
              { textEn: "No sign-up needed — just head to the craft tent. It's first come, first served. They're doing flower crowns and tie-dye today. Everything's free!", textZh: "不用报名——直接去手工帐篷就行。先到先得。今天做花冠和扎染。全部免费！", actionHint: "no sign-up needed = 不用报名", frequency: "common" },
              { textEn: "Nope, just walk right in! The craft tent's open to everyone — first come, first served. Today it's flower crowns and tie-dye tees, and all the materials are on us.", textZh: "不用，直接去就好！手工帐篷对所有人开放——先到先得。今天做花冠和扎染T恤，所有材料免费。", actionHint: "on us = 我们请/免费", frequency: "common" },
            ] },
          { speaker: "you", textEn: "That's awesome. Where's the best spot to watch the parade?", textZh: "太棒了。看游行哪个位置最好？", culturalNote: "参加节日庆典时，提前了解最佳观看位置很重要。到得早才能占到好位置，可以带折叠椅或野餐毯。" },
          { speaker: "them", role: "志愿者", textEn: "I'd recommend the corner of Main Street and Oak Avenue. The floats slow down there for the turn, so you get the best view and photos. Get there by 4:30 to grab a good spot.", textZh: "我推荐主街和橡树大道的拐角。花车在那里转弯会减速，您可以看到最好的景色和拍照。4:30之前到那里占个好位置。", keyPhrases: [{ en: "floats", zh: "花车" }, { en: "grab a good spot", zh: "占个好位置" }],
            alternativeExpressions: [
              { textEn: "Best spot is the corner of Main and Oak — the floats have to slow down for the turn there, so you get an amazing view. Show up by 4:30 to snag a good spot.", textZh: "最好的位置是主街和橡树路的拐角——花车在那转弯得减速，视野超好。4:30前到那占个好位置。", actionHint: "snag = grab 抢到/占到", frequency: "common" },
              { textEn: "Head to where Main Street meets Oak Avenue. The floats come around the corner there and slow right down — perfect for photos. I'd get there around 4:30.", textZh: "去主街和橡树大道交叉口。花车在那拐弯会减速——拍照绝佳。建议4:30左右到。", actionHint: "where...meets... = ...和...交叉的地方", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Thanks for all the tips! One more thing — is there parking nearby?", textZh: "谢谢你的建议！还有一件事——附近有停车场吗？" },
          { speaker: "them", role: "志愿者", textEn: "The lot on 5th Street is free today for festival visitors. There's also a free shuttle running from the train station every 15 minutes. Have a wonderful time at the festival!", textZh: "第5街的停车场今天对节日游客免费。火车站也有免费接驳车每15分钟一班。祝您在节日上玩得开心！", keyPhrases: [{ en: "free shuttle", zh: "免费接驳车" }, { en: "parking lot", zh: "停车场" }],
            alternativeExpressions: [
              { textEn: "There's free parking on 5th Street for festival-goers today. Or you can take the free shuttle from the train station — it comes every 15 minutes. Have a great time!", textZh: "今天5街有免费停车给节日游客。也可以坐火车站的免费接驳车——每15分钟一班。玩得开心！", actionHint: "festival-goers = 节日参加者", frequency: "common" },
              { textEn: "The 5th Street parking lot is complimentary today. There's also a shuttle from the train station every 15 minutes — totally free. Enjoy the festival!", textZh: "5街停车场今天免费。火车站也有每15分钟一班的接驳车——完全免费。享受节日吧！", actionHint: "complimentary = free 免费的（更正式的说法）", frequency: "occasional" },
            ] },
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
          { speaker: "you", textEn: "Hi, this vintage camera looks interesting. How much are you asking for it?", textZh: "你好，这台复古相机看起来挺有意思。你要多少钱？", casualVersion: "Hey, how much for this old camera?" },
          { speaker: "them", role: "摊主", textEn: "That's a beauty! It's a 1970s Polaroid in working condition. I'm asking $45 for it.", textZh: "那台很美！是1970年代的宝丽来，还能用。我要45美元。", keyPhrases: [{ en: "vintage", zh: "复古的" }, { en: "working condition", zh: "还能用" }, { en: "I'm asking", zh: "我要价" }],
            alternativeExpressions: [
              { textEn: "Oh, that's a good eye! It's a '70s Polaroid, still works. I've got it marked at $45.", textZh: "哦，你眼光不错！70年代的宝丽来，还能用。我标价45美元。", actionHint: "good eye = 好眼光, marked at = 标价", frequency: "common" },
              { textEn: "That one's a gem! Original 1970s Polaroid, fully functional. Looking to get $45 for it.", textZh: "那台是好东西！正宗1970年代宝丽来，完全能用。想卖45美元。", actionHint: "gem = 宝贝/好东西, looking to get = 想要/打算卖", frequency: "common" },
            ] },
          { speaker: "you", textEn: "It's nice, but $45 is a bit steep for me. Would you take $30?", textZh: "挺好的，但45美元对我来说有点贵。30美元可以吗？", culturalNote: "在跳蚤市场砍价是预期内的行为。通常从标价的60-70%开始出价，但要保持礼貌和微笑。" },
          { speaker: "them", role: "摊主", textEn: "I could come down a little, but 30 is too low. The film cartridge alone is worth $15. How about $38?", textZh: "我可以降一点，但30太低了。光胶片盒就值15美元。38怎么样？", keyPhrases: [{ en: "come down", zh: "降价" }, { en: "too low", zh: "太低了" }, { en: "how about", zh: "...怎么样" }],
            alternativeExpressions: [
              { textEn: "I can budge a bit, but 30's way too low. The film alone runs you $15. Meet me at $38?", textZh: "我可以松动一点，但30太低了。光胶片就要15美元。38块行吗？", actionHint: "budge = 让步/松动, meet me at = 折中到这个价", frequency: "common" },
              { textEn: "I hear ya, but I can't go that low. That film cartridge costs $15 by itself. Tell you what — $38, and that's a fair deal.", textZh: "我理解，但不能那么低。光那个胶片盒本身就值15美元。这样吧——38美元，很公道了。", actionHint: "I hear ya = 我理解你, tell you what = 这样吧", frequency: "common" },
            ] },
          { speaker: "you", textEn: "If you throw in that leather case, I'll do $38. Deal?", textZh: "如果你把那个皮套也加上，我就出38。成交？" },
          { speaker: "them", role: "摊主", textEn: "Ha, you drive a hard bargain! Alright, you've got yourself a deal. The case is yours too.", textZh: "哈，你很会砍价！好吧，成交。皮套也是你的了。", keyPhrases: [{ en: "drive a hard bargain", zh: "很会砍价" }, { en: "you've got yourself a deal", zh: "成交" }],
            alternativeExpressions: [
              { textEn: "Haha, you're a tough negotiator! Fine, deal. I'll throw in the case.", textZh: "哈哈，你很会谈！好吧，成交。皮套我送你。", actionHint: "throw in = 附送/赠送", frequency: "common" },
              { textEn: "You're killing me! Alright, alright — $38 with the case. You got it.", textZh: "你要了我的命了！好好好——38美元连皮套。成交。", actionHint: "you're killing me = 你要了我的命（夸张地说利润太低）", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Thanks! Do you have any other vintage items I should look at?", textZh: "谢谢！你还有什么其他复古物品值得看看的吗？" },
          { speaker: "them", role: "摊主", textEn: "Check out the vinyl records in that crate — I've got some rare jazz albums. And if you like jewelry, my wife's booth is two rows over. She's got some beautiful mid-century pieces.", textZh: "看看那个箱子里的黑胶唱片——有一些稀有的爵士专辑。如果你喜欢首饰，我太太的摊位在隔两排。她有一些很漂亮的世纪中期风格的饰品。", keyPhrases: [{ en: "vinyl records", zh: "黑胶唱片" }, { en: "mid-century", zh: "世纪中期风格" }],
            alternativeExpressions: [
              { textEn: "Oh, dig through those vinyls in that crate — there's some killer jazz stuff in there. And my wife sells jewelry two rows down — some gorgeous mid-century stuff.", textZh: "翻翻那个箱子里的黑胶——有一些超棒的爵士唱片。我太太在隔两排卖首饰——有些很漂亮的世纪中期风格的东西。", actionHint: "dig through = 翻找, killer = 非常棒的, vinyls = vinyl records", frequency: "common" },
              { textEn: "If you're into records, there's some rare jazz vinyls in that bin. Oh, and if jewelry's your thing, my wife's set up two rows that way — beautiful vintage pieces.", textZh: "如果你喜欢唱片，那个箱子里有些稀有的爵士黑胶。喜欢首饰的话，我太太的摊在那边隔两排——很漂亮的复古饰品。", actionHint: "if...is your thing = 如果你喜欢..., set up = 摆摊", frequency: "common" },
            ] },
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
          { speaker: "you", textEn: "Hi, what water sports do you offer here?", textZh: "你好，你们这里有什么水上运动项目？" },
          { speaker: "them", role: "教练", textEn: "We've got kayaking, paddleboarding, jet skiing, and parasailing. For beginners, I'd recommend kayaking or paddleboarding — they're easy to pick up.", textZh: "我们有皮划艇、桨板、摩托艇和拖伞。初学者的话我推荐皮划艇或桨板——容易上手。", keyPhrases: [{ en: "kayaking", zh: "皮划艇" }, { en: "paddleboarding", zh: "桨板" }, { en: "jet skiing", zh: "摩托艇" }, { en: "parasailing", zh: "拖伞" }],
            alternativeExpressions: [
              { textEn: "We do kayaks, paddleboards, jet skis, and parasailing. If you're new to this, kayaking or paddleboarding is the way to go — super easy to learn.", textZh: "我们有皮划艇、桨板、摩托艇和拖伞。如果你是新手，皮划艇或桨板最合适——特别容易学。", actionHint: "the way to go = 最好的选择", frequency: "common" },
              { textEn: "We offer kayaking, stand-up paddleboarding, jet skis, and parasailing. For a first-timer, I'd say start with a kayak or a paddleboard — you'll get the hang of it in no time.", textZh: "我们提供皮划艇、站立式桨板、摩托艇和拖伞。第一次的话，我建议先试皮划艇或桨板——很快就能学会。", actionHint: "get the hang of it = 掌握窍门, in no time = 很快", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Paddleboarding sounds fun! How much is it, and do I need any experience?", textZh: "桨板听起来很有趣！多少钱，需要有经验吗？" },
          { speaker: "them", role: "教练", textEn: "It's $35 for an hour, including a quick 10-minute lesson. No experience needed at all. I'll teach you how to balance, paddle, and get back on if you fall off.", textZh: "一小时35美元，包含一个10分钟的快速教学。完全不需要经验。我会教你怎么平衡、划桨，还有掉下去怎么上来。", keyPhrases: [{ en: "balance", zh: "平衡" }, { en: "paddle", zh: "划桨" }, { en: "fall off", zh: "掉下去" }],
            alternativeExpressions: [
              { textEn: "35 bucks an hour, and that comes with a quick 10-minute intro. Zero experience required. I'll show you how to stay up, paddle, and climb back on if you take a tumble.", textZh: "35块一小时，包含10分钟入门教学。零经验要求。我教你怎么站稳、划桨，摔了怎么爬回去。", actionHint: "take a tumble = fall off 摔下去", frequency: "common" },
              { textEn: "It's $35 for the hour with a mini lesson upfront — about 10 minutes. You don't need to know anything. I'll get you balancing, paddling, and back up if you wipe out.", textZh: "一小时35美元，先上个大约10分钟的迷你课。什么都不用会。我教你平衡、划桨，掉了怎么上来。", actionHint: "wipe out = 摔倒/落水, upfront = 提前/一开始", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Is it safe? I'm not the strongest swimmer.", textZh: "安全吗？我游泳不是很好。", culturalNote: "参加水上运动时一定要如实告知教练自己的游泳水平。教练会提供救生衣 life jacket，安全第一。" },
          { speaker: "them", role: "教练", textEn: "Absolutely safe. You'll wear a life jacket the whole time, and I'll be right there on the water with you. We stay in the calm bay area — no big waves or currents.", textZh: "绝对安全。全程穿救生衣，我会在水上一直陪着你。我们待在平静的海湾区域——没有大浪和水流。", keyPhrases: [{ en: "life jacket", zh: "救生衣" }, { en: "calm bay", zh: "平静的海湾" }, { en: "currents", zh: "水流" }],
            alternativeExpressions: [
              { textEn: "Super safe. You'll have a life vest on the whole time, and I'll be right next to you out there. We stick to the protected bay — nice and calm, no surf.", textZh: "非常安全。全程穿救生衣，我在外面一直在你旁边。我们待在有保护的海湾——很平静，没有浪。", actionHint: "life vest = life jacket 救生衣, surf = 浪", frequency: "common" },
              { textEn: "Totally safe, don't worry. Life jacket on at all times, and I'm right there with you. The bay's really sheltered — flat water, no waves, no current.", textZh: "完全安全，别担心。救生衣全程穿着，我就在你旁边。海湾很受保护——水面平静，没浪没水流。", actionHint: "sheltered = 受保护的/有遮蔽的, flat water = 平静的水面", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Great, I'll try it! Should I leave my phone and wallet somewhere?", textZh: "好的，我试试！我的手机和钱包应该放在哪？" },
          { speaker: "them", role: "教练", textEn: "We have a dry locker right here — it's free for customers. Put your valuables in there. And put on some waterproof sunscreen before we head out. Ready to hit the water?", textZh: "我们这里有防水储物柜——对客人免费。把贵重物品放进去。出发前抹点防水防晒霜。准备好下水了吗？", keyPhrases: [{ en: "dry locker", zh: "防水储物柜" }, { en: "waterproof sunscreen", zh: "防水防晒霜" }, { en: "hit the water", zh: "下水" }],
            alternativeExpressions: [
              { textEn: "There's a locker right here, no charge. Stash your phone and wallet in there. Oh, and slap on some waterproof sunscreen before we go. Let's do this!", textZh: "这里有个柜子，免费。手机钱包放进去。出发前抹点防水防晒。走吧！", actionHint: "stash = 藏好/放好, slap on = 快速涂上", frequency: "common" },
              { textEn: "Lock your stuff up in our dry locker — it's complimentary. Make sure you've got waterproof sunscreen on, the sun's no joke out there. Ready to get out on the water?", textZh: "东西锁在我们的防水柜里——免费的。确保抹了防水防晒，外面太阳很猛。准备好下水了吗？", actionHint: "no joke = 不是开玩笑的/很厉害", frequency: "common" },
            ] },
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
          { speaker: "you", textEn: "Good morning. I'm looking for a moderate hiking trail — something scenic but not too difficult.", textZh: "早上好。我想找一条中等难度的徒步路线——风景好但不要太难。" },
          { speaker: "them", role: "护林员", textEn: "I'd recommend the Lakeside Loop Trail. It's 5 miles round trip, takes about three hours, and has stunning views of the lake and mountains. Elevation gain is around 600 feet.", textZh: "我推荐湖畔环线。往返5英里，大约三小时，可以看到湖和山的绝美风景。海拔爬升约600英尺。", keyPhrases: [{ en: "round trip", zh: "往返" }, { en: "elevation gain", zh: "海拔爬升" }, { en: "stunning views", zh: "绝美风景" }],
            alternativeExpressions: [
              { textEn: "The Lakeside Loop is perfect for what you're looking for. Five miles out and back, about three hours, incredible lake and mountain views. You gain about 600 feet in elevation.", textZh: "湖畔环线正好符合你的要求。往返五英里，约三小时，湖和山的景色太美了。海拔升高大约600英尺。", actionHint: "out and back = round trip 往返", frequency: "common" },
              { textEn: "Try the Lakeside Loop — it's a solid moderate hike. 5 miles, three-ish hours, gorgeous scenery. Not too much climbing, maybe 600 feet of elevation.", textZh: "试试湖畔环线——是很好的中等难度徒步。5英里，大约三小时，风景美极了。爬升不太多，大概600英尺。", actionHint: "three-ish = 大约三小时, solid = 很好的/实在的", frequency: "common" },
            ] },
          { speaker: "you", textEn: "That sounds perfect. Is the trail well-marked?", textZh: "听起来很合适。路线标记清楚吗？", culturalNote: "美国国家公园和州立公园的步道通常有颜色标记 trail blazes。跟着同颜色的标记走就不会迷路。" },
          { speaker: "them", role: "护林员", textEn: "Yes, just follow the blue blazes on the trees. There are trail markers every quarter mile. One thing — there's a river crossing at mile 2 that can be slippery. Wear good shoes.", textZh: "是的，跟着树上的蓝色标记走。每四分之一英里有一个路标。提醒一下——在第2英里处有一个过河点可能会滑。穿好鞋。", keyPhrases: [{ en: "blazes", zh: "标记" }, { en: "trail markers", zh: "路标" }, { en: "river crossing", zh: "过河点" }],
            alternativeExpressions: [
              { textEn: "Yep, look for the blue markers on the trees — you can't miss them. Markers every quarter mile. Heads up though, there's a creek crossing around mile 2 that gets a bit slick. Good footwear is a must.", textZh: "对，找树上的蓝色标记——很明显。每四分之一英里有标记。不过注意，大约第2英里有个过溪点会有点滑。好鞋是必须的。", actionHint: "slick = slippery 滑的, creek = 小河/溪", frequency: "common" },
              { textEn: "Well-marked — just follow the blue blazes. There's signs every quarter mile so you'll always know where you are. Watch out at mile 2 though, the river crossing can be tricky when it's wet.", textZh: "标记很清楚——跟蓝色标记走。每四分之一英里有指示牌所以你一直能知道自己在哪。不过第2英里小心，过河点潮湿时不太好走。", actionHint: "tricky = 不太好走/有点难", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Should I bring anything specific?", textZh: "我需要带什么特别的东西吗？" },
          { speaker: "them", role: "护林员", textEn: "Bring at least two liters of water, sunscreen, a hat, and some snacks. Cell service is spotty up there, so download the trail map on your phone before you go. And always tell someone your plan.", textZh: "至少带两升水、防晒霜、帽子和一些零食。上面手机信号不稳定，出发前在手机上下载好步道地图。而且一定要告诉别人你的计划。", keyPhrases: [{ en: "cell service", zh: "手机信号" }, { en: "spotty", zh: "不稳定的" }, { en: "trail map", zh: "步道地图" }],
            alternativeExpressions: [
              { textEn: "Make sure you've got plenty of water — at least two liters — plus sunscreen, a hat, and some food. Reception's pretty hit or miss up there, so grab the trail map offline. And let somebody know where you're headed.", textZh: "确保带够水——至少两升——再加防晒、帽子和吃的。上面信号时有时无，先下载离线地图。告诉别人你去哪。", actionHint: "hit or miss = 时有时无/不稳定, headed = 去的方向", frequency: "common" },
              { textEn: "Water's the big one — two liters minimum. Sunscreen, hat, snacks. You won't have great phone signal, so save the map to your phone ahead of time. Oh, and always tell someone your route.", textZh: "水是最重要的——至少两升。防晒、帽子、零食。手机信号不太好，提前把地图存到手机上。还有一定告诉别人你的路线。", actionHint: "the big one = 最重要的, ahead of time = 提前", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Good advice. What about wildlife? Any bears or snakes?", textZh: "好建议。那野生动物呢？有熊或蛇吗？" },
          { speaker: "them", role: "护林员", textEn: "Black bears have been spotted in the area. Make noise while hiking and store food in bear canisters. Snakes are rare on this trail. If you see any wildlife, keep your distance and never feed them. Enjoy the hike!", textZh: "这个区域有人发现过黑熊。徒步时制造声响，食物放在防熊罐里。这条路线上蛇很少见。如果看到野生动物，保持距离，绝对不要喂食。祝徒步愉快！", keyPhrases: [{ en: "black bears", zh: "黑熊" }, { en: "bear canisters", zh: "防熊罐" }, { en: "keep your distance", zh: "保持距离" }],
            alternativeExpressions: [
              { textEn: "We've had some black bear sightings recently. Be loud on the trail — talk, clap, whatever — and keep your food in a bear canister. Snakes aren't really an issue here. If you spot anything, give it space and don't feed it. Have a great hike!", textZh: "最近有过黑熊目击。在步道上弄出声响——说话、拍手什么的——食物放在防熊罐里。蛇在这不是问题。看到动物给它空间别喂。祝徒步愉快！", actionHint: "sightings = 目击, give it space = 给它空间/保持距离", frequency: "common" },
              { textEn: "There are bears in the area, so make plenty of noise and use a bear canister for food. Snakes you don't really need to worry about on this trail. General rule: if you see wildlife, admire from a distance and never feed. Enjoy out there!", textZh: "这一带有熊，所以多制造声响，用防熊罐放食物。蛇在这条路上基本不用担心。基本规则：看到野生动物远远欣赏就好，不要喂食。在外面玩得开心！", actionHint: "admire from a distance = 远远欣赏", frequency: "common" },
            ] },
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
          { speaker: "you", textEn: "Hello, I'd like to go fishing nearby. Where's a good spot?", textZh: "你好，我想在附近钓鱼。哪里是好地方？" },
          { speaker: "them", role: "店主", textEn: "The lake just north of town is great for bass and trout. The pier downtown is good for saltwater fishing. Do you have your own gear or need to rent?", textZh: "城北的湖钓鲈鱼和鳟鱼很好。市区的码头适合海钓。您有自己的装备还是需要租？", keyPhrases: [{ en: "bass", zh: "鲈鱼" }, { en: "trout", zh: "鳟鱼" }, { en: "pier", zh: "码头" }, { en: "gear", zh: "装备" }],
            alternativeExpressions: [
              { textEn: "For freshwater, the lake up north is your best bet — tons of bass and trout. Or if you want saltwater, the downtown pier is solid. You got your own stuff or need to rent?", textZh: "淡水的话城北的湖是最好的选择——很多鲈鱼和鳟鱼。想海钓的话市区码头不错。你有自己的装备还是要租？", actionHint: "your best bet = 最好的选择, solid = 很好的/靠谱的", frequency: "common" },
              { textEn: "The lake north of here is where the bass and trout are biting. Downtown pier's great for saltwater stuff. Did you bring gear, or do you need to get set up?", textZh: "城北的湖鲈鱼和鳟鱼在咬钩。市区码头海钓很好。你自己带装备了还是要准备一套？", actionHint: "biting = 在咬钩/容易上钩, get set up = 准备好装备", frequency: "common" },
            ] },
          { speaker: "you", textEn: "I'll need to rent everything. What do you have for a beginner?", textZh: "我需要全部租。有适合初学者的吗？", culturalNote: "在美国大多数州钓鱼需要钓鱼证 fishing license。短期游客可以买一日证或一周证，通常在钓具店就能办理。" },
          { speaker: "them", role: "店主", textEn: "I'll set you up with a basic rod and reel, tackle box with hooks and sinkers, and some live bait. Full-day rental is $25. You'll also need a fishing license — I can sell you a one-day pass for $15.", textZh: "我给您准备一套基础鱼竿和渔线轮、带鱼钩和铅坠的工具箱，还有一些活饵。全天租赁25美元。您还需要钓鱼证——我可以卖给您一日证15美元。", keyPhrases: [{ en: "rod and reel", zh: "鱼竿和渔线轮" }, { en: "tackle box", zh: "工具箱" }, { en: "live bait", zh: "活饵" }, { en: "fishing license", zh: "钓鱼证" }],
            alternativeExpressions: [
              { textEn: "I'll get you all set — rod, reel, tackle box with hooks and weights, plus some live bait. That's $25 for the day. Oh, and you'll need a license — I can do a day pass for $15.", textZh: "我帮你全部准备好——鱼竿、渔线轮、带鱼钩和铅坠的工具箱，加活饵。全天25美元。对了你需要钓鱼证——一日证15美元。", actionHint: "weights = sinkers 铅坠, get you all set = 帮你全部准备好", frequency: "common" },
              { textEn: "I'll hook you up with a starter kit — rod, reel, tackle, and live bait. Twenty-five bucks for the day. Don't forget you need a fishing license though — one-day permit is $15, and I've got 'em right here.", textZh: "我给你准备一套入门装备——鱼竿、渔线轮、钓具和活饵。全天25块。别忘了你需要钓鱼证——一日许可15美元，这里就能办。", actionHint: "hook you up = 帮你准备好（也是钓鱼的双关语）, permit = license 许可证", frequency: "common" },
            ] },
          { speaker: "you", textEn: "I'll take all of that. Are there any rules about what fish I can keep?", textZh: "全部要了。有什么关于可以留什么鱼的规定吗？" },
          { speaker: "them", role: "店主", textEn: "Yes — bass must be at least 12 inches to keep, and you're limited to five per day. Trout is catch-and-release only right now. I'll write the limits on a card for you.", textZh: "有的——鲈鱼至少12英寸才能带走，每天最多五条。鳟鱼目前只能钓了放回去。我把限制写在一张卡片上给您。", keyPhrases: [{ en: "catch-and-release", zh: "钓了放回去" }, { en: "size limit", zh: "尺寸限制" }, { en: "daily limit", zh: "每日限额" }],
            alternativeExpressions: [
              { textEn: "Yeah, for bass you gotta throw back anything under 12 inches, and the limit's five a day. Trout's strictly catch-and-release right now. Here, I'll jot down the rules for you.", textZh: "对，鲈鱼12英寸以下得放回去，每天最多留五条。鳟鱼目前必须放回去。我给你记下来。", actionHint: "throw back = 放回去, jot down = 快速写下", frequency: "common" },
              { textEn: "Yep, there are limits. Bass has to be 12 inches minimum — five per day max. Trout? Gotta put 'em all back right now, catch-and-release only. I'll write it all down for you.", textZh: "是的，有限制。鲈鱼最小12英寸——每天最多五条。鳟鱼？现在全部得放回去，只允许钓了放。我都写给你。", actionHint: "put 'em all back = 全部放回去", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Very helpful. Any tips for a first-timer?", textZh: "非常有帮助。有什么给新手的建议吗？" },
          { speaker: "them", role: "店主", textEn: "Go early morning — that's when the fish are most active. Find a shady spot near some rocks or fallen trees — fish love to hide there. And be patient! Some days the fish just aren't biting. Good luck out there!", textZh: "早上早点去——那时候鱼最活跃。找一个靠近岩石或倒树的阴凉处——鱼喜欢藏在那里。还有要有耐心！有时候鱼就是不上钩。祝您好运！", keyPhrases: [{ en: "biting", zh: "上钩/咬钩" }, { en: "shady spot", zh: "阴凉处" }, { en: "be patient", zh: "要有耐心" }],
            alternativeExpressions: [
              { textEn: "Hit the water first thing in the morning — the fish are way more active early. Look for shaded areas near rocks or downed trees, that's where they hang out. And don't get discouraged if nothing bites right away — that's fishing! Good luck!", textZh: "一大早就去——鱼早上活跃得多。找岩石或倒树附近的阴凉处，鱼喜欢待在那。如果一开始没上钩别灰心——钓鱼就是这样！祝好运！", actionHint: "hit the water = 去钓鱼, downed trees = 倒树, hang out = 待着", frequency: "common" },
              { textEn: "Early bird catches the fish, literally! Get out there at sunrise. Fish hang around cover — rocks, logs, anything shady. And just enjoy the peace and quiet. Sometimes they bite, sometimes they don't. That's the beauty of it. Tight lines!", textZh: "早起的鸟儿有鱼钓！日出就去。鱼喜欢待在有遮挡的地方——岩石、木头、阴凉处。享受安静就好。有时候鱼上钩有时候不上。这就是钓鱼的魅力。祝紧线！", actionHint: "tight lines = 钓鱼者之间的祝福语（祝好运的意思）", frequency: "occasional" },
            ] },
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
          { speaker: "you", textEn: "Hi, we have a reservation for two nights. The name is Li.", textZh: "你好，我们预约了两晚。名字是李。" },
          { speaker: "them", role: "管理员", textEn: "Welcome! I see your reservation — campsite 14, right by the creek. It's a great spot. Do you have your own tent, or do you need to rent one?", textZh: "欢迎！我看到您的预约了——14号营位，就在小溪边。那是个好位置。您自带帐篷还是需要租？", keyPhrases: [{ en: "campsite", zh: "营位" }, { en: "creek", zh: "小溪" }, { en: "reservation", zh: "预约" }],
            alternativeExpressions: [
              { textEn: "Hey, welcome! Got your reservation right here — site 14, right next to the creek. Nice spot! Did you bring a tent, or do you need one from us?", textZh: "嘿，欢迎！你的预约在这——14号营位，紧挨小溪。好位置！你带帐篷了还是需要租一个？", actionHint: "site = campsite 营位, got your reservation = 看到你的预约了", frequency: "common" },
              { textEn: "Welcome to the campground! I've got you down for campsite 14, creek-side. You'll love it. Do you have your own tent or will you be renting?", textZh: "欢迎来到营地！你的是14号营位，溪边的。你会喜欢的。自带帐篷还是要租？", actionHint: "I've got you down for = 你预约的是, creek-side = 溪边的", frequency: "common" },
            ] },
          { speaker: "you", textEn: "We brought our own tent. What facilities are available?", textZh: "我们自带了帐篷。有什么设施？" },
          { speaker: "them", role: "管理员", textEn: "Each site has a fire pit, a picnic table, and a bear box for food storage. Restrooms and showers are in the building near the parking lot. Showers are coin-operated — 25 cents for 3 minutes.", textZh: "每个营位有一个火坑、一张野餐桌和一个防熊箱用来存放食物。洗手间和淋浴在停车场附近的建筑里。淋浴是投币的——25美分3分钟。", keyPhrases: [{ en: "fire pit", zh: "火坑" }, { en: "bear box", zh: "防熊箱" }, { en: "coin-operated", zh: "投币的" }],
            alternativeExpressions: [
              { textEn: "Your site comes with a fire ring, picnic table, and a bear-proof food locker. Bathrooms and showers are in the building by the parking area. Showers take quarters — 25 cents gets you 3 minutes.", textZh: "你的营位有火圈、野餐桌和防熊食物柜。洗手间和淋浴在停车区旁边的建筑里。淋浴投25美分硬币用3分钟。", actionHint: "fire ring = fire pit 火坑, takes quarters = 投25美分硬币", frequency: "common" },
              { textEn: "Every site's got a fire pit, a table, and a bear box — that's where all your food goes. The restroom and shower building is right by the parking lot. Bring some quarters for the showers, they're 25 cents for 3 minutes.", textZh: "每个营位都有火坑、桌子和防熊箱——所有食物都放那里。洗手间和淋浴的建筑就在停车场旁。带些硬币洗澡用，25美分3分钟。", actionHint: "bring some quarters = 带些25美分硬币", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Can we have a campfire? And is firewood available?", textZh: "我们可以生营火吗？有柴火卖吗？", culturalNote: "美国很多露营地在干燥季节会实施 fire ban（禁火令）。即使允许生火，也只能在指定的火坑里。千万不要带外地的柴火，可能携带害虫。" },
          { speaker: "them", role: "管理员", textEn: "Campfires are allowed in the fire pit only. We sell firewood bundles for $8 at the camp store. Important — please don't bring firewood from outside the area to prevent the spread of invasive insects.", textZh: "只允许在火坑里生营火。我们的营地商店有柴火捆卖8美元一捆。重要提示——请不要从外地带柴火，防止外来害虫传播。", keyPhrases: [{ en: "fire pit", zh: "火坑" }, { en: "firewood bundles", zh: "柴火捆" }, { en: "invasive insects", zh: "外来害虫" }],
            alternativeExpressions: [
              { textEn: "Fires are fine, but only in the fire pit. We've got firewood at the store — $8 a bundle. One big rule: don't bring wood from outside. It can carry bugs that aren't native here.", textZh: "可以生火，但只能在火坑里。商店有柴火——8美元一捆。一个重要规定：不要从外面带木头。会带来非本地的虫子。", actionHint: "bugs = 虫子, native = 本地的", frequency: "common" },
              { textEn: "You can have a campfire — just keep it in the fire ring. Firewood's available at the camp store for 8 bucks. Oh, and super important: buy local wood only. Outside firewood can introduce pests we don't want around here.", textZh: "可以生营火——在火圈里就好。营地商店有柴火8块钱。非常重要：只买本地木头。外面的柴火会带来我们不想要的害虫。", actionHint: "buy local = 买本地的, pests = 害虫", frequency: "common" },
            ] },
          { speaker: "you", textEn: "Got it. Anything else we should know about the rules?", textZh: "明白了。还有什么规则我们需要知道的？" },
          { speaker: "them", role: "管理员", textEn: "Quiet hours are from 10 PM to 6 AM. All food must go in the bear box at night — never leave food in your tent. And pack out everything you bring in. Here's your campsite tag — have a wonderful time in the great outdoors!", textZh: "安静时间是晚上10点到早上6点。所有食物晚上必须放进防熊箱——绝对不要把食物留在帐篷里。把你们带来的所有东西都带走。这是您的营位标签——祝您在户外玩得开心！", keyPhrases: [{ en: "quiet hours", zh: "安静时间" }, { en: "pack out", zh: "带走（垃圾等）" }, { en: "the great outdoors", zh: "户外/大自然" }],
            alternativeExpressions: [
              { textEn: "Keep it down after 10 PM — quiet hours till 6 AM. Food goes in the bear box every night, no exceptions — never in your tent. Leave no trace — take everything out with you. Here's your tag. Enjoy the great outdoors!", textZh: "晚上10点后保持安静——安静时间到早上6点。食物每晚放防熊箱，没有例外——绝对不能放帐篷里。不留痕迹——所有东西带走。标签给你。享受大自然吧！", actionHint: "keep it down = 保持安静, leave no trace = 不留痕迹（露营原则）", frequency: "common" },
              { textEn: "Quiet time is 10 to 6. Big one: all food in the bear box at night — nothing in the tent, not even a granola bar. And please, pack it in, pack it out. Here's your campsite pass — have an amazing trip!", textZh: "安静时段10点到6点。重要的：所有食物晚上放防熊箱——帐篷里什么都不能放，连能量棒都不行。还有请带走所有垃圾。这是你的营位通行证——祝旅途愉快！", actionHint: "pack it in, pack it out = 带进来的都带走（露营箴言）, big one = 重要的", frequency: "common" },
            ] },
        ],
      },
    ],
  },
];
