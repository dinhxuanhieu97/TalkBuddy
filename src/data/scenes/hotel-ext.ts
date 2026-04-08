import type { PresetScene } from "../scene-types";

// ============================================================
// 酒店扩展场景 — Hotel Extended Scenes
// 覆盖：礼宾服务、客房服务、泳池健身、水疗、商务、停车、安全、
//       投诉、延住换房、包裹叫醒、会员积分、宠物无障碍、餐饮酒吧
// ============================================================

export const HOTEL_SCENES_EXT: PresetScene[] = [
  // ==================== 礼宾服务 ====================
  {
    id: "hotel-concierge-restaurant",
    category: "hotel",
    titleZh: "礼宾台：推荐餐厅",
    titleEn: "Concierge: Restaurant Recommendation",
    description: "向酒店礼宾台咨询附近餐厅推荐，包括菜系偏好、预算和预订",
    otherRole: "礼宾员",
    otherRoleIcon: "🎩",
    flows: [
      {
        id: "basic-recommendation",
        titleZh: "基础推荐",
        titleEn: "Basic Recommendation",
        description: "简单询问附近有什么好吃的餐厅",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, could you recommend a good restaurant nearby?",
            textZh: "你好，能推荐附近好吃的餐厅吗？",
            casualVersion: "Hey, any good places to eat around here?",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "Of course! What kind of cuisine are you in the mood for?",
            textZh: "当然可以！您想吃什么菜系？",
            keyPhrases: [
              { en: "cuisine", zh: "菜系" },
              { en: "in the mood for", zh: "想吃" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing! Any particular type of food you're craving?", textZh: "没问题！您特别想吃哪种菜？", actionHint: "更随意地询问偏好", frequency: "common" },
              { textEn: "Absolutely! Do you have any preferences — Asian, Italian, local?", textZh: "当然！有偏好吗——亚洲菜、意大利菜还是本地菜？", actionHint: "列举选项引导回答", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "We'd like to try some local food. Nothing too expensive.",
            textZh: "我们想试试当地菜，不要太贵的。",
            casualVersion: "Something local and not too pricey.",
            culturalNote: "\'Nothing too expensive\' 是礼貌地表达预算限制。也可以说 \'somewhere mid-range\'。",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "I'd recommend The Local Kitchen — it's about a 10-minute walk from here. Great food, and most dishes are under $20.",
            textZh: "我推荐 The Local Kitchen，从这里步行大约10分钟。菜很好吃，大部分菜品20美元以内。",
            keyPhrases: [
              { en: "10-minute walk", zh: "步行10分钟" },
              { en: "under $20", zh: "20美元以内" },
            ],
            alternativeExpressions: [
              { textEn: "There's a lovely spot called The Local Kitchen — just a short walk from here, and it won't break the bank.", textZh: "有个不错的地方叫 The Local Kitchen，走几步就到，价格也很亲民。", actionHint: "用口语化方式推荐", frequency: "common" },
              { textEn: "You might enjoy The Local Kitchen. It's nearby and has great prices — most mains are under twenty dollars.", textZh: "您可能会喜欢 The Local Kitchen。就在附近，价格实惠，大部分主菜不到二十美元。", actionHint: "换一种介绍方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds great. Do we need a reservation?",
            textZh: "听起来不错。需要预订吗？",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "It can get busy on weekends. Would you like me to make a reservation for you?",
            textZh: "周末会比较忙。要我帮您预订吗？",
            keyPhrases: [
              { en: "get busy", zh: "变得忙碌/人多" },
              { en: "make a reservation", zh: "预订" },
            ],
            alternativeExpressions: [
              { textEn: "Weekends tend to be pretty packed. Want me to book a table for you?", textZh: "周末通常人很多。要我帮您订位吗？", actionHint: "口语化表达拥挤", frequency: "common" },
              { textEn: "It fills up fast on weekends. I can call ahead and reserve a spot if you'd like.", textZh: "周末很快就满了。要的话我可以提前帮您留位。", actionHint: "主动提出帮忙", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. For two people at 7 PM tonight.",
            textZh: "好的，请帮我订今晚7点，两个人。",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "All set! Reservation for two at 7 PM. Here's the address on this card. Enjoy your dinner!",
            textZh: "订好了！今晚7点两位。地址在这张卡上。祝您晚餐愉快！",
            keyPhrases: [
              { en: "all set", zh: "都安排好了" },
              { en: "address", zh: "地址" },
            ],
            alternativeExpressions: [
              { textEn: "You're all booked! Table for two at 7. I wrote the address down for you — enjoy!", textZh: "订好了！7点两位。地址给您写下来了，祝用餐愉快！", actionHint: "确认预订并祝福", frequency: "common" },
              { textEn: "Done! I've reserved a table for two at seven. Here's a card with the directions. Have a wonderful dinner!", textZh: "搞定！帮您订了7点两位。路线在这张卡上，祝晚餐愉快！", actionHint: "提供路线卡片", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "dietary-restrictions",
        titleZh: "有饮食限制的推荐",
        titleEn: "Recommendation with Dietary Needs",
        description: "有过敏或特殊饮食需求时咨询餐厅",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I need a restaurant that can handle food allergies. My wife is allergic to shellfish.",
            textZh: "打扰一下，我需要一家能处理食物过敏的餐厅。我太太对贝类过敏。",
            culturalNote: "在国外用餐，主动告知过敏信息非常重要。\'allergic to\' 是关键表达。",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "I completely understand. Several restaurants in the area are very allergy-conscious. Do you have a preference for cuisine type?",
            textZh: "我完全理解。这附近有几家餐厅非常注意过敏问题。您有菜系偏好吗？",
            keyPhrases: [
              { en: "allergy-conscious", zh: "注意过敏的" },
              { en: "preference", zh: "偏好" },
            ],
            alternativeExpressions: [
              { textEn: "Of course, that's very important. There are a few great options nearby that take allergies seriously. Any cuisine you prefer?", textZh: "当然，这很重要。附近有几家很注重过敏问题的餐厅。您喜欢什么菜系？", actionHint: "表达重视并询问偏好", frequency: "common" },
              { textEn: "No problem at all. We have a list of allergy-friendly restaurants. Would you like Italian, Asian, or something else?", textZh: "完全没问题。我们有一份过敏友好餐厅名单。想吃意大利菜、亚洲菜还是别的？", actionHint: "提供现成名单", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Italian would be nice. Is there one within walking distance?",
            textZh: "意大利菜就好。步行范围内有吗？",
            casualVersion: "Italian sounds good. Anything we can walk to?",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "There's Bella Vita, just two blocks away. They have a dedicated allergy menu and the chef will come to your table to discuss options.",
            textZh: "有一家 Bella Vita，就在两个街区外。他们有专门的过敏菜单，主厨会到桌前和您沟通。",
            keyPhrases: [
              { en: "two blocks away", zh: "两个街区" },
              { en: "dedicated allergy menu", zh: "专门的过敏菜单" },
            ],
            alternativeExpressions: [
              { textEn: "I'd suggest Bella Vita — it's just around the corner. They're really good with allergies and even have a separate menu for it.", textZh: "我推荐 Bella Vita，就在转角。他们对过敏问题处理得很好，还有单独的过敏菜单。", actionHint: "口语化推荐", frequency: "common" },
              { textEn: "Bella Vita is your best bet — only a short walk. Their kitchen staff is trained to handle all kinds of food allergies.", textZh: "Bella Vita 是最佳选择，走一小段路就到。他们的厨房团队受过处理各种过敏的培训。", actionHint: "强调专业性", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's very reassuring. Can you book a table for us?",
            textZh: "那就放心了。能帮我们订位吗？",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "Absolutely. What time would you prefer, and should I note the shellfish allergy in the reservation?",
            textZh: "当然。您想几点？我需要在预订时备注贝类过敏吗？",
            keyPhrases: [
              { en: "note the allergy", zh: "备注过敏信息" },
            ],
            alternativeExpressions: [
              { textEn: "Of course. What time works for you? And I'll make sure to mention the shellfish allergy when I call.", textZh: "当然。您想几点？我打电话时会确保提到贝类过敏。", actionHint: "主动说明会备注", frequency: "common" },
              { textEn: "Happy to! Just tell me the time, and I'll flag the allergy so they're prepared.", textZh: "很乐意！告诉我时间，我会标注过敏信息让他们提前准备。", actionHint: "用flag表示标注", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "7:30 PM please. And yes, please note the allergy. Thank you so much.",
            textZh: "晚上7:30。是的，请备注过敏。非常感谢。",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "Done! Table for two at 7:30 with the shellfish allergy noted. I've also printed walking directions for you.",
            textZh: "搞定！7:30两位，已备注贝类过敏。我还帮您打印了步行路线。",
            keyPhrases: [
              { en: "walking directions", zh: "步行路线" },
            ],
            alternativeExpressions: [
              { textEn: "All booked! Two at 7:30, shellfish allergy on file. Here's a map to get there on foot.", textZh: "全订好了！7:30两位，贝类过敏已记录。这是步行地图。", actionHint: "简洁确认", frequency: "common" },
              { textEn: "You're all set — 7:30 for two, allergy noted. I've marked the route on this map so you can walk right over.", textZh: "安排好了——7:30两位，过敏已备注。我在地图上标了路线，走过去就行。", actionHint: "提供标注地图", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "hotel-concierge-taxi",
    category: "hotel",
    titleZh: "礼宾台：叫出租车",
    titleEn: "Concierge: Arranging a Taxi",
    description: "请礼宾台帮忙叫出租车或安排接送",
    otherRole: "礼宾员",
    otherRoleIcon: "🎩",
    flows: [
      {
        id: "basic-taxi",
        titleZh: "叫出租车去景点",
        titleEn: "Taxi to a Sightseeing Spot",
        description: "请礼宾台叫出租车去某个目的地",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Could you call a taxi for me, please?",
            textZh: "能帮我叫一辆出租车吗？",
            casualVersion: "Can you get me a cab?",
            culturalNote: "\'taxi\' 和 \'cab\' 在美式英语中通用。英式英语多用 \'taxi\'。",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "Of course. Where would you like to go?",
            textZh: "当然。您要去哪里？",
            keyPhrases: [
              { en: "where would you like to go", zh: "您要去哪里" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, no problem. Where are you headed?", textZh: "好的，没问题。您去哪儿？", actionHint: "更随意地问目的地", frequency: "common" },
              { textEn: "Right away! Do you have a destination in mind?", textZh: "马上安排！您有目的地了吗？", actionHint: "积极响应", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd like to go to the National Museum. How long does it take?",
            textZh: "我想去国家博物馆。大概要多久？",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "About 20 minutes depending on traffic. The fare should be around $15 to $18.",
            textZh: "看交通情况，大约20分钟。车费大概15到18美元。",
            keyPhrases: [
              { en: "depending on traffic", zh: "看交通情况" },
              { en: "fare", zh: "车费" },
            ],
            alternativeExpressions: [
              { textEn: "It's roughly a 20-minute ride if traffic's not too bad. You're looking at about 15 to 18 dollars.", textZh: "如果不堵车的话大概20分钟。费用大概15到18美元。", actionHint: "口语化说明时间和费用", frequency: "common" },
              { textEn: "Usually takes about 20 minutes, give or take. The meter should come out to around 15 to 18 bucks.", textZh: "通常大概20分钟左右。打表下来大约15到18块。", actionHint: "用bucks代替dollars", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's fine. When can the taxi be here?",
            textZh: "可以。出租车多久能到？",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "I'll call one right away. It should be at the front entrance in about 5 minutes.",
            textZh: "我马上叫。大约5分钟后到酒店正门。",
            keyPhrases: [
              { en: "right away", zh: "马上" },
              { en: "front entrance", zh: "正门" },
            ],
            alternativeExpressions: [
              { textEn: "Let me get one for you now. It should pull up out front in about five minutes.", textZh: "我现在就帮您叫。大概五分钟后到正门口。", actionHint: "用pull up表示停靠", frequency: "common" },
              { textEn: "I'm on it. A cab will be waiting at the main entrance in five minutes or so.", textZh: "我马上安排。出租车五分钟左右会在正门等您。", actionHint: "非正式回应", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. Should I tip the taxi driver?",
            textZh: "好的。需要给出租车司机小费吗？",
            culturalNote: "在美国，出租车一般给15-20%小费。在其他国家习惯不同，可以提前问礼宾员。",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "A 15 percent tip is customary here. I've written down the museum address in the local language — just show it to the driver.",
            textZh: "这里一般给15%的小费。我用当地语言写了博物馆地址，给司机看就行。",
            keyPhrases: [
              { en: "customary", zh: "惯例/习惯" },
              { en: "show it to the driver", zh: "给司机看" },
            ],
            alternativeExpressions: [
              { textEn: "Around here, 15 percent is the norm. I jotted down the address for you — just hand it to the driver.", textZh: "这边一般给15%。我帮您写好了地址，递给司机就行。", actionHint: "用jot down表示写下", frequency: "common" },
              { textEn: "Tipping about 15 percent is standard. Here, I've written the museum name in the local language so there's no confusion.", textZh: "小费一般给15%左右。这里我用当地语言写了博物馆名，免得沟通不清。", actionHint: "解释写地址的原因", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's so helpful. Thank you!",
            textZh: "太贴心了，谢谢！",
          },
        ],
      },
      {
        id: "airport-transfer",
        titleZh: "预约机场接送",
        titleEn: "Airport Transfer Booking",
        description: "提前预约去机场的接送服务",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I need to get to the airport tomorrow morning. Do you offer airport shuttle service?",
            textZh: "我明天早上要去机场。你们有机场接送服务吗？",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "We have two options: a shared shuttle for $25 per person, or a private car for $60. Which would you prefer?",
            textZh: "我们有两个选择：拼车25美元一人，或专车60美元。您选哪个？",
            keyPhrases: [
              { en: "shared shuttle", zh: "拼车/共乘班车" },
              { en: "private car", zh: "专车" },
            ],
            alternativeExpressions: [
              { textEn: "Yes, we do. You can take the shared shuttle for 25 dollars a head, or go with a private transfer for 60. What works best for you?", textZh: "有的。拼车每人25美元，专车60美元。您觉得哪个合适？", actionHint: "用a head表示每人", frequency: "common" },
              { textEn: "We sure do. There's a group shuttle at 25 per person or a private sedan for 60. Which do you prefer?", textZh: "当然有。拼车班车每人25美元，私人轿车60美元。您更喜欢哪个？", actionHint: "用sedan替代car", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the private car. My flight is at 10 AM. What time should I leave?",
            textZh: "我要专车。我的航班10点。我应该几点出发？",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "I'd recommend leaving by 7 AM to allow time for traffic and check-in. The drive is usually 45 minutes.",
            textZh: "我建议7点出发，留出堵车和值机的时间。车程通常45分钟。",
            keyPhrases: [
              { en: "allow time for", zh: "留出时间给" },
              { en: "check-in", zh: "值机" },
            ],
            alternativeExpressions: [
              { textEn: "For a 10 AM flight, I'd say head out around 7. That gives you plenty of time for the drive and airport security.", textZh: "10点的航班，我建议7点左右出发。这样开车和过安检的时间都够。", actionHint: "用head out替代leave", frequency: "common" },
              { textEn: "You'll want to leave by 7 at the latest. The ride's about 45 minutes, plus you need time to check in and get through security.", textZh: "最迟7点出发。车程大约45分钟，还得留时间值机和过安检。", actionHint: "详细说明原因", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, 7 AM works. Can you arrange that?",
            textZh: "好的，7点可以。能帮我安排吗？",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "Absolutely. The driver will meet you in the lobby at 6:55 AM. Would you like a wake-up call at 6 AM?",
            textZh: "当然。司机会在早上6:55在大厅等您。需要6点的叫醒服务吗？",
            keyPhrases: [
              { en: "lobby", zh: "大厅" },
              { en: "wake-up call", zh: "叫醒服务" },
            ],
            alternativeExpressions: [
              { textEn: "All arranged. Your driver will be in the lobby at 6:55. Shall I set up a morning wake-up call for you?", textZh: "都安排好了。司机6:55在大厅等您。需要我安排早上叫醒服务吗？", actionHint: "换用set up表达", frequency: "common" },
              { textEn: "Done! He'll be waiting downstairs at five to seven. Do you want us to give you a wake-up call at six?", textZh: "搞定！他会6:55在楼下等您。需要我们6点叫您起床吗？", actionHint: "用口语表达时间", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, that would be great. Can I pay now or at checkout?",
            textZh: "好的。我现在付还是退房时付？",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "We'll add it to your room bill, so you can settle everything at checkout. I'll also send a confirmation slip under your door tonight.",
            textZh: "费用会加到房费里，退房时一起结算。今晚我会把确认单塞到您门下。",
            keyPhrases: [
              { en: "room bill", zh: "房费账单" },
              { en: "settle", zh: "结算" },
              { en: "confirmation slip", zh: "确认单" },
            ],
            alternativeExpressions: [
              { textEn: "It'll go on your room tab, so you can pay everything together when you check out. I'll slide a receipt under your door.", textZh: "费用记在房间账上，退房时一起付。我会把收据塞到您门下。", actionHint: "用tab替代bill", frequency: "common" },
              { textEn: "We'll charge it to your room. You'll get a confirmation tonight — I'll leave it at your door.", textZh: "我们会记到房间账上。今晚会给您确认单，放在门口。", actionHint: "简洁说明流程", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "hotel-concierge-tour",
    category: "hotel",
    titleZh: "礼宾台：预订旅游团",
    titleEn: "Concierge: Booking a Tour",
    description: "通过酒店礼宾台了解并预订当地旅游项目",
    otherRole: "礼宾员",
    otherRoleIcon: "🎩",
    flows: [
      {
        id: "basic-tour",
        titleZh: "咨询一日游",
        titleEn: "Day Tour Inquiry",
        description: "咨询并预订一个当地一日游",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Are there any good day tours you'd recommend?",
            textZh: "有什么好的一日游推荐吗？",
            casualVersion: "What day trips can we do around here?",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "We have several popular options. There's a city highlights tour, a wine country trip, and a coastal boat tour. Which sounds interesting?",
            textZh: "我们有几个热门选择：城市精华游、酒乡之旅和海岸游船。您对哪个感兴趣？",
            keyPhrases: [
              { en: "city highlights", zh: "城市精华" },
              { en: "wine country", zh: "酒乡" },
              { en: "coastal boat tour", zh: "海岸游船" },
            ],
            alternativeExpressions: [
              { textEn: "There are a few great ones! A city tour, a trip to wine country, or a boat ride along the coast. Any of those sound good?", textZh: "有几个很棒的！城市游、酒乡之旅或沿海游船。有感兴趣的吗？", actionHint: "更轻松地列举选项", frequency: "common" },
              { textEn: "Definitely! Our most popular day trips are the city highlights tour, the wine country excursion, and a scenic coastal cruise. What appeals to you?", textZh: "当然有！最受欢迎的是城市精华游、酒乡之旅和海岸观光游。哪个吸引您？", actionHint: "用excursion和cruise替换", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The city highlights tour sounds good. How much is it and what's included?",
            textZh: "城市精华游听起来不错。多少钱？包含什么？",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "It's $65 per person. Includes hotel pickup, a guided walking tour, lunch, and admission to three museums. The tour runs from 9 AM to 4 PM.",
            textZh: "每人65美元。包含酒店接送、导游步行游览、午餐和三个博物馆门票。行程从早上9点到下午4点。",
            keyPhrases: [
              { en: "hotel pickup", zh: "酒店接送" },
              { en: "guided walking tour", zh: "导游步行游览" },
              { en: "admission", zh: "门票" },
            ],
            alternativeExpressions: [
              { textEn: "That one's 65 dollars per person. They pick you up from the hotel, take you on a walking tour with a guide, include lunch, and you get into three museums — all from 9 to 4.", textZh: "那个每人65美元。酒店接送，有导游带着步行游览，含午餐，还可以参观三个博物馆，上午9点到下午4点。", actionHint: "口语化详细介绍", frequency: "common" },
              { textEn: "It's 65 per person and covers everything — pickup, a guided walk, lunch, and three museum entries. Runs 9 AM to 4 PM.", textZh: "每人65美元，全包——接送、导游步行、午餐和三个博物馆门票。上午9点到下午4点。", actionHint: "用covers everything概括", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is the tour in English?",
            textZh: "导游讲英语吗？",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "Yes, it's conducted in English. They also have audio guides in Mandarin if you'd prefer.",
            textZh: "是的，用英语讲解。如果您需要，也有中文语音导览。",
            keyPhrases: [
              { en: "conducted in English", zh: "用英语讲解" },
              { en: "audio guides", zh: "语音导览" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, the guide speaks English. And if you'd like, they have Mandarin audio guides available too.", textZh: "是的，导游讲英语。如果需要的话也有中文语音导览。", actionHint: "更随意确认", frequency: "common" },
              { textEn: "It is — all in English. But they offer audio guides in several languages including Mandarin, just in case.", textZh: "是英语讲解。不过他们也提供多种语言的语音导览，包括中文，以防需要。", actionHint: "提到多语言选项", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, I'd like to book two spots for tomorrow.",
            textZh: "好的，我想订明天两个人的。",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "Two spots for tomorrow — got it. The bus will pick you up right here at 8:45 AM. Please bring comfortable walking shoes and sun protection.",
            textZh: "明天两位——好的。巴士早上8:45来酒店接您。请穿舒适的步行鞋，带好防晒。",
            keyPhrases: [
              { en: "pick you up", zh: "接您" },
              { en: "comfortable walking shoes", zh: "舒适步行鞋" },
              { en: "sun protection", zh: "防晒" },
            ],
            alternativeExpressions: [
              { textEn: "All booked! The tour bus comes here at 8:45 AM. Just a tip — wear comfy shoes and bring sunscreen.", textZh: "订好了！旅游巴士8:45到这里。小建议——穿舒服的鞋，带上防晒霜。", actionHint: "用tip引出建议", frequency: "common" },
              { textEn: "You're set for two tomorrow. Pickup is at 8:45 right at the hotel entrance. Make sure you've got good walking shoes and something for the sun.", textZh: "明天两位安排好了。8:45在酒店门口接您。记得穿好走路的鞋，带防晒的东西。", actionHint: "更口语化的提醒", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Can I cancel if something comes up?",
            textZh: "好的。如果有变动能取消吗？",
            culturalNote: "\'if something comes up\' 意思是 \'如果有意外情况\'，是很常用的表达。",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "Free cancellation up to 24 hours before. After that, there's a 50% cancellation fee. I'll charge it to your room.",
            textZh: "24小时前免费取消，之后收50%取消费。费用记到房费里。",
            keyPhrases: [
              { en: "free cancellation", zh: "免费取消" },
              { en: "cancellation fee", zh: "取消费" },
              { en: "charge it to your room", zh: "记到房费里" },
            ],
            alternativeExpressions: [
              { textEn: "You can cancel for free as long as it's at least 24 hours ahead. Otherwise it's half the price. I'll put it on your room.", textZh: "只要提前24小时以上就能免费取消，否则收一半费用。费用挂房间账上。", actionHint: "用ahead替代before", frequency: "common" },
              { textEn: "Sure — no charge if you cancel a day in advance. After that, there's a 50 percent fee. Everything goes on your room bill.", textZh: "可以——提前一天取消不收费。之后的话收50%。所有费用记在房间账上。", actionHint: "用a day in advance替代", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "custom-tour",
        titleZh: "定制行程",
        titleEn: "Custom Tour Request",
        description: "要求礼宾台帮忙定制个性化旅游行程",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "We have a full day free tomorrow. Could you help us plan a custom itinerary?",
            textZh: "我们明天一整天有空。能帮我们规划一个定制行程吗？",
            culturalNote: "\'itinerary\' 是旅行行程的正式说法，发音 /aɪˈtɪnəreri/。",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "I'd be happy to! What are your interests? History, food, nature, shopping?",
            textZh: "很乐意！您对什么感兴趣？历史、美食、自然、购物？",
            keyPhrases: [
              { en: "interests", zh: "兴趣" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing! What kind of stuff are you into? History, food, nature, or maybe some shopping?", textZh: "没问题！您喜欢什么？历史、美食、自然，还是逛街购物？", actionHint: "用into替代interested in", frequency: "common" },
              { textEn: "Love to help! Tell me what you enjoy — sightseeing, local food, outdoor activities, or a bit of everything?", textZh: "很乐意帮忙！告诉我您喜欢什么——观光、当地美食、户外活动，还是都来点？", actionHint: "提供更多选项", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "We love food and history. And we're traveling with our kids, so nothing too tiring.",
            textZh: "我们喜欢美食和历史。而且带着孩子，不要太累的。",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "How about this: morning at the Old Town food market, then the History Museum — they have a great kids' section — and a relaxing afternoon at the waterfront park?",
            textZh: "这样如何：上午去老城区美食市场，然后去历史博物馆——他们有很棒的儿童区——下午去滨水公园休息？",
            keyPhrases: [
              { en: "Old Town", zh: "老城区" },
              { en: "food market", zh: "美食市场" },
              { en: "kids' section", zh: "儿童区" },
              { en: "waterfront park", zh: "滨水公园" },
            ],
            alternativeExpressions: [
              { textEn: "Here's what I'd suggest: start with the food market in Old Town, then hit the History Museum — the kids will love the interactive exhibits — and wind down at the waterfront park.", textZh: "我的建议是：先去老城区的美食市场，然后去历史博物馆——孩子们会喜欢互动展览——最后在滨水公园放松。", actionHint: "用wind down表示收尾放松", frequency: "common" },
              { textEn: "I've got a great plan: Old Town food market in the morning for some tastings, the History Museum after that — it's very kid-friendly — then an easy afternoon at the waterfront.", textZh: "我有个好方案：上午去老城区美食市场品尝美食，然后去历史博物馆——很适合孩子——下午去滨水区轻松逛逛。", actionHint: "强调适合孩子", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds perfect. Can you arrange transportation between the stops?",
            textZh: "听起来太好了。能帮我们安排各站之间的交通吗？",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "Sure. I can book a private driver for the full day. It's $120 and he'll wait for you at each stop. Much easier with kids.",
            textZh: "当然。我可以帮您订全天私人司机，120美元，每站他都会等您。带孩子方便多了。",
            keyPhrases: [
              { en: "private driver", zh: "私人司机" },
              { en: "full day", zh: "全天" },
              { en: "wait for you", zh: "等您" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely. I can get you a private driver for the whole day — 120 dollars — and he'll stick around at every stop. Way easier with little ones.", textZh: "当然。我可以帮您安排全天私人司机，120美元，每站都会等着。带小孩这样方便多了。", actionHint: "用stick around替代wait", frequency: "common" },
              { textEn: "That's easy to arrange. A dedicated driver for the day is $120. He'll drop you off and wait until you're ready to move on.", textZh: "这很好安排。全天专属司机120美元。他会送您到每一站，等您准备好再出发。", actionHint: "用dedicated替代private", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That would make things easier. Let's do it.",
            textZh: "那方便多了。就这样吧。",
            casualVersion: "Yeah, let's go with that.",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "I'll have the driver here at 9 AM. I'll also prepare a printed itinerary with addresses and estimated times at each stop. Anything else?",
            textZh: "司机9点到。我还会准备一份打印行程单，有地址和每站预计时间。还需要什么？",
            keyPhrases: [
              { en: "printed itinerary", zh: "打印行程单" },
              { en: "estimated times", zh: "预计时间" },
            ],
            alternativeExpressions: [
              { textEn: "The driver will be out front at 9. I'll print out a schedule with all the addresses and how long to spend at each place. Need anything else?", textZh: "司机9点在门口。我会打印一份时间表，有所有地址和每个地方的建议时间。还需要别的吗？", actionHint: "用schedule替代itinerary", frequency: "common" },
              { textEn: "All set — driver at 9 AM. I'll put together a detailed plan with directions and times for each stop. Anything else I can help with?", textZh: "安排好了——司机9点到。我会整理一份详细计划，有每站的路线和时间。还有什么我能帮的？", actionHint: "用put together表示整理", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Could you also recommend a good spot for lunch near the museum?",
            textZh: "能推荐博物馆附近一个好的午餐地方吗？",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "There's a family-friendly bistro called Corner Table just across the street from the museum. I'll add it to your itinerary with the directions.",
            textZh: "博物馆对面有一家适合家庭的小餐馆叫 Corner Table。我会把它加到行程单上，附上路线。",
            keyPhrases: [
              { en: "family-friendly", zh: "适合家庭的" },
              { en: "bistro", zh: "小餐馆" },
              { en: "across the street", zh: "街对面" },
            ],
            alternativeExpressions: [
              { textEn: "There's a great little place called Corner Table right across from the museum. Very kid-friendly. I'll mark it on your plan.", textZh: "博物馆正对面有个不错的小店叫 Corner Table，很适合孩子。我会标在行程上。", actionHint: "强调适合孩子", frequency: "common" },
              { textEn: "I know just the place — Corner Table, steps from the museum. They have a kids' menu too. I'll add it to your itinerary.", textZh: "我正好知道一个——Corner Table，离博物馆几步路。他们还有儿童菜单。我会加到行程单上。", actionHint: "提到儿童菜单", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "hotel-concierge-tickets",
    category: "hotel",
    titleZh: "礼宾台：购买门票",
    titleEn: "Concierge: Buying Tickets",
    description: "通过酒店礼宾台购买景点或演出门票",
    otherRole: "礼宾员",
    otherRoleIcon: "🎩",
    flows: [
      {
        id: "attraction-tickets",
        titleZh: "景点门票",
        titleEn: "Attraction Tickets",
        description: "购买热门景点门票并了解优惠信息",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Can you help me get tickets for the amusement park?",
            textZh: "能帮我买游乐园的门票吗？",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "Sure! We actually sell discounted tickets here at the front desk. How many tickets do you need?",
            textZh: "当然！我们前台有折扣票。您需要几张？",
            keyPhrases: [
              { en: "discounted tickets", zh: "折扣票" },
              { en: "front desk", zh: "前台" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely! And actually, we sell tickets right here at a discount. How many do you need?", textZh: "当然可以！而且我们这里有折扣票卖。您需要几张？", actionHint: "强调当场就能买", frequency: "common" },
              { textEn: "Of course! Good news — we have discounted passes available for hotel guests. How many are you looking for?", textZh: "没问题！好消息——我们有酒店客人专属折扣票。您要几张？", actionHint: "强调住客专属优惠", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Two adults and one child. How much is the discount?",
            textZh: "两张成人票一张儿童票。打几折？",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "Adult tickets are $55 instead of $70, and kids under 12 are $35 instead of $45. That saves you about $40 total.",
            textZh: "成人票55美元而不是70美元，12岁以下儿童35美元而不是45美元。总共省大约40美元。",
            keyPhrases: [
              { en: "instead of", zh: "而不是/原价" },
              { en: "kids under 12", zh: "12岁以下儿童" },
              { en: "saves you", zh: "帮您省" },
            ],
            alternativeExpressions: [
              { textEn: "Adults are 55 bucks through us — normally 70. And kids under 12 are 35 instead of 45. You'd save about 40 dollars altogether.", textZh: "通过我们买成人票55美元，原价70。12岁以下儿童35而不是45。总共能省大约40美元。", actionHint: "用bucks口语化", frequency: "common" },
              { textEn: "The hotel rate is 55 for adults and 35 for children under 12 — that's a good 40 dollars off the gate price.", textZh: "酒店价成人55美元，12岁以下儿童35美元——比门口价便宜了整整40美元。", actionHint: "用gate price表示门市价", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a great deal. Do these tickets have a specific date?",
            textZh: "很划算。这些票有指定日期吗？",
            culturalNote: "\'That's a great deal\' 表示 \'很划算\'，是购物/订票常用表达。",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "They're valid for any day this week. Just scan the QR code at the entrance. No need to print anything.",
            textZh: "本周任何一天都有效。入口扫二维码就行，不用打印。",
            keyPhrases: [
              { en: "valid for", zh: "有效期" },
              { en: "scan the QR code", zh: "扫二维码" },
              { en: "entrance", zh: "入口" },
            ],
            alternativeExpressions: [
              { textEn: "They're good for any day this week. Just pull up the QR code on your phone at the gate — super easy.", textZh: "本周哪天都能用。到门口用手机出示二维码就行，特别方便。", actionHint: "用pull up表示调出", frequency: "common" },
              { textEn: "You can use them any day through Sunday. Everything's digital — just show the QR code at the door and you're in.", textZh: "到周日之前哪天都行。全是电子票——在门口出示二维码就能进。", actionHint: "强调全电子化", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take them. Can you charge it to my room?",
            textZh: "我买了。能记到房费里吗？",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "Of course. That's $145 total, charged to room 1208. I'll send the e-tickets to your email. What's your address?",
            textZh: "当然。一共145美元，记到1208房间。电子票发到您邮箱，请问邮箱地址？",
            keyPhrases: [
              { en: "charged to room", zh: "记到房间" },
              { en: "e-tickets", zh: "电子票" },
            ],
            alternativeExpressions: [
              { textEn: "No problem. That comes to 145, and I'll put it on room 1208. I just need your email to send the tickets over.", textZh: "没问题。一共145美元，挂在1208房。我需要您的邮箱把票发过去。", actionHint: "用send over表示发送", frequency: "common" },
              { textEn: "Sure thing — $145 on your room. Let me get your email so I can forward the e-tickets right away.", textZh: "好的——145美元记房间。给我邮箱地址，我马上把电子票转发给您。", actionHint: "用forward表示转发", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's wang@email.com. Thank you so much for the help!",
            textZh: "是 wang@email.com。太感谢了！",
          },
        ],
      },
      {
        id: "show-tickets",
        titleZh: "演出门票",
        titleEn: "Show Tickets",
        description: "咨询并购买演出或音乐会门票",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Is there anything fun to see in town tonight? A show or live music maybe?",
            textZh: "今晚城里有什么好看的吗？演出或现场音乐什么的？",
            casualVersion: "Anything cool happening tonight? Live music or a show?",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "Great timing! There's a jazz concert at the Blue Note tonight at 8 PM, and a Broadway-style musical at the Grand Theater at 7:30.",
            textZh: "时机真好！今晚8点 Blue Note 有爵士音乐会，7:30 大剧院有百老汇风格的音乐剧。",
            keyPhrases: [
              { en: "jazz concert", zh: "爵士音乐会" },
              { en: "Broadway-style musical", zh: "百老汇风格音乐剧" },
            ],
            alternativeExpressions: [
              { textEn: "You picked a great night! There's live jazz at the Blue Note at 8, and a really popular musical at the Grand Theater at 7:30.", textZh: "您选了个好晚上！Blue Note 8点有现场爵士，大剧院7:30有一部很火的音乐剧。", actionHint: "更热情地推荐", frequency: "common" },
              { textEn: "Oh, there's plenty going on tonight! A jazz show at 8 PM and a Broadway-style musical at 7:30. Both are fantastic.", textZh: "今晚节目可多了！8点有爵士演出，7:30有百老汇风格的音乐剧。都非常精彩。", actionHint: "强调都很好", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The musical sounds fun. Are there still tickets available?",
            textZh: "音乐剧听起来不错。还有票吗？",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "Let me check... Yes, there are a few seats left in the orchestra section at $95 each, and balcony seats for $60.",
            textZh: "我查一下……有的，正厅还剩几个座位，每张95美元；包厢/楼座60美元。",
            keyPhrases: [
              { en: "orchestra section", zh: "正厅前排" },
              { en: "balcony seats", zh: "楼座" },
              { en: "seats left", zh: "剩余座位" },
            ],
            alternativeExpressions: [
              { textEn: "Give me a sec... Yes, there are still some orchestra seats at 95 each, and balcony seats going for 60.", textZh: "稍等……有的，正厅还有几个座位每张95美元，楼座60美元。", actionHint: "用give me a sec表示稍等", frequency: "common" },
              { textEn: "Let me pull that up... Good news — a handful of orchestra seats left at $95, or you could grab balcony seats for $60.", textZh: "我查查……好消息——正厅还剩几个位子95美元，楼座的话60美元。", actionHint: "用pull up和grab口语化", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "We'll take two orchestra seats. Is there a dress code?",
            textZh: "我们要两张正厅的。有着装要求吗？",
            culturalNote: "\'dress code\' 是问着装要求的标准说法。有些高档场所要求 smart casual 或以上。",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "Smart casual is recommended — no shorts or flip-flops. The theater is about 15 minutes by taxi. Would you like me to arrange a ride?",
            textZh: "建议商务休闲装——不要穿短裤或人字拖。剧院打车约15分钟。需要我安排车吗？",
            keyPhrases: [
              { en: "smart casual", zh: "商务休闲" },
              { en: "flip-flops", zh: "人字拖" },
              { en: "arrange a ride", zh: "安排车" },
            ],
            alternativeExpressions: [
              { textEn: "They ask for smart casual — so no shorts or sandals. It's about a 15-minute cab ride. Want me to get you a taxi?", textZh: "他们要求商务休闲装——别穿短裤或凉鞋。打车大约15分钟。要我帮您叫车吗？", actionHint: "用cab替代taxi", frequency: "common" },
              { textEn: "Just dress smart casual — collared shirt, no flip-flops, that sort of thing. The venue's 15 minutes away. Shall I book a car for you?", textZh: "穿商务休闲就行——有领衬衫，别穿人字拖之类的。场馆15分钟车程。要我帮您订车吗？", actionHint: "具体说明着装", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. Have the taxi here at 7 PM so we're not rushed.",
            textZh: "好的。请7点让出租车到，这样不赶时间。",
          },
          {
            speaker: "them",
            role: "礼宾员",
            textEn: "Perfect. Two orchestra tickets and a taxi at 7 PM. I'll email the tickets and leave the taxi confirmation at the front desk. Have a wonderful evening!",
            textZh: "好的。两张正厅票，7点出租车。电子票发邮件，出租车确认单放前台。祝您度过愉快的夜晚！",
            keyPhrases: [
              { en: "confirmation", zh: "确认单" },
              { en: "have a wonderful evening", zh: "祝您度过愉快的夜晚" },
            ],
            alternativeExpressions: [
              { textEn: "All done! Two tickets for the orchestra and a cab at 7. I'll email your tickets and leave the taxi details at the desk. Enjoy the show!", textZh: "全搞定了！两张正厅票，7点出租车。票发邮件，车的信息放前台。好好看演出！", actionHint: "更简洁的确认", frequency: "common" },
              { textEn: "You're all set — orchestra seats for two and a taxi at seven. Check your email for the tickets. Have a fantastic night out!", textZh: "都安排好了——两张正厅票加7点出租车。请查收邮件里的票。祝您外出玩得开心！", actionHint: "用night out表示外出娱乐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "You've been incredibly helpful. Thank you!",
            textZh: "你帮了大忙了。谢谢！",
          },
        ],
      },
    ],
  },

  // ==================== 客房服务 ====================
  {
    id: "hotel-room-service-food",
    category: "hotel",
    titleZh: "客房送餐服务",
    titleEn: "Room Service: Food Order",
    description: "通过电话叫客房送餐，点餐并确认细节",
    otherRole: "客房服务员",
    otherRoleIcon: "🍽️",
    flows: [
      {
        id: "basic-food-order",
        titleZh: "基础点餐",
        titleEn: "Basic Food Order",
        description: "打电话到客房服务点一份简单的餐食",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Room service, how may I help you?",
            textZh: "客房服务，请问有什么需要？",
            keyPhrases: [
              { en: "room service", zh: "客房服务" },
            ],
            alternativeExpressions: [
              { textEn: "Good evening, room service. What can I get for you?", textZh: "晚上好，客房服务。需要点什么？", actionHint: "更简洁的开场", frequency: "common" },
              { textEn: "Room service, good evening. How may I assist you tonight?", textZh: "客房服务，晚上好。今晚有什么能帮您的？", actionHint: "更正式的问候", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Hi, I'd like to order some food to my room, please. Room 1208.",
            textZh: "你好，我想点餐送到房间。1208房间。",
            casualVersion: "Hey, can I get some food sent up? Room 1208.",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Certainly. Would you like to hear tonight's specials, or do you have the menu in your room?",
            textZh: "当然。您想听今晚的特色菜，还是房间里有菜单？",
            keyPhrases: [
              { en: "tonight's specials", zh: "今晚特色菜" },
              { en: "menu", zh: "菜单" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! Do you have the in-room menu handy, or shall I tell you what's on special tonight?", textZh: "当然！您手边有房间菜单吗，还是我告诉您今晚的特色菜？", actionHint: "用handy表示手边", frequency: "common" },
              { textEn: "Sure thing. We've got some great specials this evening. Would you like to hear them, or are you ordering from the menu?", textZh: "没问题。今晚有几道不错的特色菜。想听听还是直接从菜单点？", actionHint: "先推荐特色菜", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have the menu. I'd like the club sandwich and a bowl of tomato soup.",
            textZh: "我有菜单。我要一份总汇三明治和一碗番茄汤。",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Great choice. Would you like fries or a side salad with the sandwich?",
            textZh: "好选择。三明治配薯条还是沙拉？",
            keyPhrases: [
              { en: "fries", zh: "薯条" },
              { en: "side salad", zh: "配菜沙拉" },
            ],
            alternativeExpressions: [
              { textEn: "Nice pick! Would you like fries on the side, or would you prefer a salad?", textZh: "选得好！旁边配薯条还是沙拉？", actionHint: "用nice pick表示好选择", frequency: "common" },
              { textEn: "Excellent. The sandwich comes with a side — fries or salad. Which would you like?", textZh: "很好。三明治配一个小菜——薯条还是沙拉？", actionHint: "说明包含配菜", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Side salad, please. And a bottle of still water.",
            textZh: "沙拉吧。再来一瓶纯净水。",
            culturalNote: "\'still water\' 是不带气泡的水。\'sparkling water\' 是气泡水。在国外点水常被问这个。",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "So that's a club sandwich with side salad, tomato soup, and a bottle of still water. Your total comes to $38 plus a delivery fee of $5. It should be at your door in about 30 minutes.",
            textZh: "那就是：总汇三明治配沙拉、番茄汤、一瓶纯净水。总计38美元加5美元送餐费。大约30分钟送到。",
            keyPhrases: [
              { en: "delivery fee", zh: "送餐费" },
              { en: "at your door", zh: "送到门口" },
            ],
            alternativeExpressions: [
              { textEn: "Let me repeat that back: club sandwich with salad, tomato soup, and still water. That's $38 plus a $5 service charge. Should be up in about half an hour.", textZh: "我复述一下：总汇三明治配沙拉、番茄汤、纯净水。38美元加5美元服务费。大约半小时送到。", actionHint: "用repeat back确认", frequency: "common" },
              { textEn: "Okay — club sandwich, side salad, tomato soup, still water. Comes to 43 with the delivery charge. We'll have that to you in 30 minutes.", textZh: "好的——总汇三明治、沙拉、番茄汤、纯净水。加送餐费一共43美元。30分钟给您送到。", actionHint: "直接报总价", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds good. Please charge it to my room.",
            textZh: "好的。请记到房费里。",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Will do. Is there anything else? Any allergies we should know about?",
            textZh: "好的。还需要别的吗？有没有需要注意的过敏情况？",
            keyPhrases: [
              { en: "allergies", zh: "过敏" },
            ],
            alternativeExpressions: [
              { textEn: "Got it! Anything else you'd like? And do you have any food allergies I should let the kitchen know about?", textZh: "收到！还要别的吗？有什么食物过敏需要我告诉厨房的吗？", actionHint: "更具体地询问", frequency: "common" },
              { textEn: "All noted. Before I put this in — any dietary restrictions or allergies?", textZh: "都记下了。下单前确认一下——有什么饮食限制或过敏吗？", actionHint: "用put this in表示下单", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "No allergies. That's everything. Thank you!",
            textZh: "没有过敏。就这些。谢谢！",
          },
        ],
      },
      {
        id: "late-night-order",
        titleZh: "深夜点餐",
        titleEn: "Late Night Order",
        description: "深夜饿了但不确定厨房是否还营业",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Room service, good evening.",
            textZh: "客房服务，晚上好。",
            keyPhrases: [
              { en: "good evening", zh: "晚上好" },
            ],
            alternativeExpressions: [
              { textEn: "Hello, room service. How can I help you this evening?", textZh: "您好，客房服务。今晚有什么能帮您的？", actionHint: "稍微不同的问候", frequency: "common" },
              { textEn: "Good evening, this is room service. What can I do for you?", textZh: "晚上好，这里是客房服务。有什么需要？", actionHint: "自报身份", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Hi, I know it's late. Is the kitchen still open?",
            textZh: "你好，我知道很晚了。厨房还开着吗？",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Our full kitchen closes at 11 PM, but we have a late-night menu available until 2 AM. I can send it to your room or read you the options.",
            textZh: "正式厨房11点关，但我们有宵夜菜单到凌晨2点。我可以发到您房间或直接念给您。",
            keyPhrases: [
              { en: "late-night menu", zh: "宵夜菜单" },
              { en: "available until", zh: "供应到" },
            ],
            alternativeExpressions: [
              { textEn: "The main kitchen's closed, but we've got a late-night menu going until 2 AM. Want me to run through the options?", textZh: "主厨房已经关了，不过宵夜菜单供应到凌晨2点。要我给您念一下吗？", actionHint: "用run through表示过一遍", frequency: "common" },
              { textEn: "Our full menu ended at 11, but there's still a late-night selection until 2 AM. I can read it out or send it to your room.", textZh: "全菜单11点就结束了，但宵夜菜单到凌晨2点。我可以念给您或发到房间。", actionHint: "用selection替代menu", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Could you read me the options? I'm pretty hungry.",
            textZh: "能念给我听吗？我挺饿的。",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "We have a cheeseburger with fries, a Caesar salad, a cheese and fruit platter, or chicken wings. All between $18 and $25.",
            textZh: "有芝士汉堡配薯条、凯撒沙拉、芝士水果拼盘和鸡翅。都在18到25美元之间。",
            keyPhrases: [
              { en: "cheeseburger", zh: "芝士汉堡" },
              { en: "platter", zh: "拼盘" },
              { en: "chicken wings", zh: "鸡翅" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! Tonight we've got burgers and fries, Caesar salad, a cheese and fruit plate, or wings. Everything's in the 18 to 25 range.", textZh: "好的！今晚有汉堡配薯条、凯撒沙拉、芝士水果拼盘和鸡翅。都在18到25美元之间。", actionHint: "更口语化地列举", frequency: "common" },
              { textEn: "Of course. The late-night options are a cheeseburger, Caesar salad, cheese platter, or chicken wings — priced between 18 and 25 dollars.", textZh: "当然。宵夜选项有芝士汉堡、凯撒沙拉、芝士拼盘和鸡翅——价格18到25美元。", actionHint: "简明列出价格范围", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll have the cheeseburger, please. Can I also get a beer? What do you have on tap?",
            textZh: "我要芝士汉堡。还能来杯啤酒吗？有什么生啤？",
            culturalNote: "\'on tap\' 指生啤/扎啤，从酒桶直接打出来的。\'bottled\' 是瓶装的。",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "For room service we have bottled options — local lager, IPA, or imported pilsner. Each is $8.",
            textZh: "客房送餐有瓶装的——本地拉格、IPA 或进口皮尔森。每瓶8美元。",
            keyPhrases: [
              { en: "bottled", zh: "瓶装的" },
              { en: "lager", zh: "拉格啤酒" },
              { en: "IPA", zh: "印度淡色艾尔" },
            ],
            alternativeExpressions: [
              { textEn: "We don't have draft for room delivery, but we've got bottles — a local lager, an IPA, and an imported pilsner. They're 8 bucks each.", textZh: "送餐没有生啤，不过有瓶装的——本地拉格、IPA 和进口皮尔森。每瓶8美元。", actionHint: "解释没有生啤的原因", frequency: "common" },
              { textEn: "For room service, it's all bottled — we have a local lager, IPA, or pilsner. Eight dollars a bottle.", textZh: "客房送餐都是瓶装的——有本地拉格、IPA 或皮尔森。每瓶8美元。", actionHint: "简洁说明", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The local lager, please. How long will it take?",
            textZh: "来本地拉格吧。要多久？",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "About 25 minutes for the late-night menu. I'll have it sent right up to room 1208. Anything else?",
            textZh: "宵夜大约25分钟。马上送到1208房间。还需要什么？",
            keyPhrases: [
              { en: "sent right up", zh: "马上送上去" },
            ],
            alternativeExpressions: [
              { textEn: "The late-night stuff takes about 25 minutes. We'll bring it right to your door. Need anything else?", textZh: "宵夜大概25分钟。直接送到门口。还要别的吗？", actionHint: "更口语化", frequency: "common" },
              { textEn: "Give us about 25 minutes and it'll be at your room. Can I get you anything else with that?", textZh: "大约25分钟送到您房间。还需要加点什么吗？", actionHint: "询问是否加单", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's all, thanks. You're a lifesaver!",
            textZh: "就这些，谢谢。你救了我一命！",
            culturalNote: "\'You're a lifesaver\' 是口语表达，意思是 \'太感谢了，你帮了大忙\'。",
          },
        ],
      },
    ],
  },

  {
    id: "hotel-room-service-extra-bed",
    category: "hotel",
    titleZh: "客房服务：加床",
    titleEn: "Room Service: Extra Bed Request",
    description: "需要在房间加一张床或婴儿床",
    otherRole: "前台接待员",
    otherRoleIcon: "🛏️",
    flows: [
      {
        id: "extra-bed-basic",
        titleZh: "加折叠床",
        titleEn: "Rollaway Bed Request",
        description: "请求在房间里加一张折叠床",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hello, I need an extra bed in my room. Is that possible?",
            textZh: "你好，我房间需要加一张床。可以吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "We can send a rollaway bed to your room. There's a charge of $30 per night. Would you like me to arrange that?",
            textZh: "我们可以送一张折叠床到您房间。每晚加收30美元。要安排吗？",
            keyPhrases: [
              { en: "rollaway bed", zh: "折叠床" },
              { en: "charge of $30 per night", zh: "每晚加收30美元" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, we have rollaway beds available. It's an extra 30 dollars per night. Want me to send one up?", textZh: "有的，我们有折叠床。每晚加30美元。要我安排送上去吗？", actionHint: "用send one up表示送上去", frequency: "common" },
              { textEn: "Absolutely. We can set up a foldaway bed in your room for $30 a night. Shall I arrange that for you?", textZh: "当然可以。我们可以在您房间放一张折叠床，每晚30美元。要安排吗？", actionHint: "用foldaway替代rollaway", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. We have a friend joining us for the next two nights.",
            textZh: "好的。我们有个朋友接下来两晚会加入。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "No problem. That'll be $60 total for two nights. The bed comes with sheets, a pillow, and a blanket. When would you like it delivered?",
            textZh: "没问题。两晚一共60美元。床配有床单、枕头和毯子。您希望什么时候送？",
            keyPhrases: [
              { en: "sheets", zh: "床单" },
              { en: "pillow", zh: "枕头" },
              { en: "blanket", zh: "毯子" },
              { en: "delivered", zh: "送到" },
            ],
            alternativeExpressions: [
              { textEn: "That's 60 for two nights. It'll come with fresh linens, a pillow, and a blanket. What time works for delivery?", textZh: "两晚60美元。会配全新的床品、枕头和毯子。什么时候送方便？", actionHint: "用linens替代sheets", frequency: "common" },
              { textEn: "Sure — $60 for the two nights. The bed's fully made up with bedding. When should we bring it to your room?", textZh: "好的，两晚60美元。床已经铺好了床品。什么时候送到您房间？", actionHint: "说明床已铺好", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "This afternoon, if possible. Before 3 PM.",
            textZh: "今天下午行吗？3点之前。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'll have housekeeping bring it up before 3 PM. They'll also bring extra towels. Shall I add the charges to your room?",
            textZh: "我让客房部3点前送上去。也会多带几条毛巾。费用加到房费里可以吗？",
            keyPhrases: [
              { en: "housekeeping", zh: "客房部" },
              { en: "extra towels", zh: "额外的毛巾" },
            ],
            alternativeExpressions: [
              { textEn: "I'll get housekeeping on it right away — it'll be there before 3. They'll throw in some extra towels too. Put it on your room?", textZh: "我马上通知客房部——3点前到。他们也会多带几条毛巾。记房间账上？", actionHint: "用throw in表示附带", frequency: "common" },
              { textEn: "No problem. Our team will have it in your room by 3 PM along with fresh towels. Shall I bill it to the room?", textZh: "没问题。我们的团队会在3点前送到您房间，附带新毛巾。费用记房间吗？", actionHint: "用bill替代charge", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, that works. Also, will the room have enough hangers for three people?",
            textZh: "好的。另外，房间里有足够三个人用的衣架吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'll make sure they bring additional hangers and an extra set of toiletries as well. Anything else?",
            textZh: "我会让他们多带衣架和一套洗漱用品。还需要什么？",
            keyPhrases: [
              { en: "hangers", zh: "衣架" },
              { en: "toiletries", zh: "洗漱用品" },
            ],
            alternativeExpressions: [
              { textEn: "Good thinking! I'll have them bring more hangers and a third set of toiletries. Is there anything else you need?", textZh: "想得周到！我让他们多带衣架和第三套洗漱用品。还需要别的吗？", actionHint: "夸赞客人想得细", frequency: "common" },
              { textEn: "Of course — I'll add extra hangers and another set of bathroom amenities to the delivery. Anything else?", textZh: "当然——我会让他们一起送额外的衣架和一套浴室用品。还有什么？", actionHint: "用amenities替代toiletries", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That covers everything. Thank you!",
            textZh: "都齐了。谢谢！",
          },
        ],
      },
      {
        id: "baby-crib",
        titleZh: "加婴儿床",
        titleEn: "Baby Crib Request",
        description: "为婴儿请求婴儿床",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, we have a 10-month-old baby. Do you have cribs available?",
            textZh: "你好，我们有10个月大的宝宝。有婴儿床吗？",
            culturalNote: "\'crib\' 是美式英语的婴儿床。英式英语用 \'cot\'。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, we provide complimentary cribs for infants. I'll have one set up in your room right away.",
            textZh: "有的，我们免费提供婴儿床。马上安排送到您房间。",
            keyPhrases: [
              { en: "complimentary", zh: "免费提供的" },
              { en: "infants", zh: "婴儿" },
              { en: "set up", zh: "安装/布置" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! Cribs are free of charge for our little guests. I'll have one sent to your room right away.", textZh: "当然！婴儿床对我们的小客人免费。马上安排送到您房间。", actionHint: "用little guests亲切表达", frequency: "common" },
              { textEn: "Absolutely — we have cribs on hand and there's no charge. Let me get one up to your room now.", textZh: "当然有——我们有现成的婴儿床，不收费。我现在就安排送上去。", actionHint: "强调有现货", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's wonderful. Is there a baby-proofed outlet cover? Our baby is starting to crawl.",
            textZh: "太好了。有插座防护盖吗？我们宝宝开始爬了。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Absolutely. We have a baby safety kit with outlet covers and cabinet locks. We'll also remove the minibar items from the lower shelf.",
            textZh: "当然。我们有婴儿安全套装，包含插座防护盖和柜锁。我们还会把迷你吧下层的东西移走。",
            keyPhrases: [
              { en: "baby safety kit", zh: "婴儿安全套装" },
              { en: "outlet covers", zh: "插座防护盖" },
              { en: "cabinet locks", zh: "柜锁" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! We have a childproofing kit with plug covers and cupboard locks. We'll also clear out anything from the minibar that's within reach.", textZh: "当然！我们有防儿童套装，有插头盖和柜锁。也会把迷你吧里够得到的东西清走。", actionHint: "用childproofing表达防护", frequency: "common" },
              { textEn: "Sure thing. We'll bring a baby safety pack — covers for the outlets, locks on the cabinets, and we'll move the minibar items up high.", textZh: "没问题。我们会送婴儿安全包——插座盖、柜锁，还会把迷你吧的东西放高处。", actionHint: "描述具体措施", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Very thoughtful. Can you also warm up baby formula if we bring it to the front desk?",
            textZh: "很贴心。我们把奶粉拿到前台能帮忙加热吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course. You can also call room service anytime and they'll bring a bottle warmer to your room. We also have a microwave in the business center you're welcome to use.",
            textZh: "当然。也可以随时叫客房服务，他们会送暖奶器到房间。商务中心也有微波炉可以用。",
            keyPhrases: [
              { en: "bottle warmer", zh: "暖奶器" },
              { en: "microwave", zh: "微波炉" },
              { en: "business center", zh: "商务中心" },
            ],
            alternativeExpressions: [
              { textEn: "Definitely. Just ring room service and they'll heat it up for you. Or if you'd rather do it yourself, there's a microwave in the business center.", textZh: "完全可以。打客房服务电话就行，他们会帮您加热。如果您想自己来，商务中心有微波炉。", actionHint: "用ring替代call", frequency: "common" },
              { textEn: "Sure! We can also lend you a bottle warmer to keep in your room. And the business center microwave is available 24/7.", textZh: "当然！我们也可以借您一个暖奶器放房间里。商务中心的微波炉24小时可用。", actionHint: "提供放房间的选项", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "One more thing — is there a bathtub in our room? It's easier for bathing the baby.",
            textZh: "还有一个问题——我们房间有浴缸吗？给宝宝洗澡方便些。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Your current room has a walk-in shower. If you'd prefer a room with a bathtub, I can switch you to one on the same floor at no extra charge.",
            textZh: "您现在的房间是步入式淋浴。如果需要浴缸的，我可以免费帮您换到同楼层有浴缸的房间。",
            keyPhrases: [
              { en: "walk-in shower", zh: "步入式淋浴" },
              { en: "bathtub", zh: "浴缸" },
              { en: "no extra charge", zh: "不加收费用" },
            ],
            alternativeExpressions: [
              { textEn: "Right now you've got a shower. But I can move you to a room with a tub on the same floor — no extra cost.", textZh: "您现在的房间是淋浴。不过我可以帮您换到同楼层有浴缸的房间，不另外收费。", actionHint: "用tub口语化", frequency: "common" },
              { textEn: "Your room only has a shower, but there's a bathtub room available on your floor. I can swap you over at no charge.", textZh: "您的房间只有淋浴，但同楼层有带浴缸的房间。我可以免费帮您换过去。", actionHint: "用swap over表示换房", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be perfect. Thank you for being so accommodating.",
            textZh: "那太好了。谢谢你们这么周到。",
            culturalNote: "\'accommodating\' 表示 \'乐于通融/周到的\'，是称赞服务态度的好词。",
          },
        ],
      },
    ],
  },

  {
    id: "hotel-room-service-laundry",
    category: "hotel",
    titleZh: "客房服务：洗衣",
    titleEn: "Room Service: Laundry",
    description: "使用酒店洗衣服务，了解价格、时间和取衣方式",
    otherRole: "客房服务员",
    otherRoleIcon: "👔",
    flows: [
      {
        id: "basic-laundry",
        titleZh: "基础洗衣服务",
        titleEn: "Basic Laundry Service",
        description: "送洗日常衣物",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to get some clothes laundered. How does it work?",
            textZh: "你好，我有衣服要洗。怎么操作？",
            casualVersion: "Hey, how do I get my laundry done?",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "There's a laundry bag in your closet with a form to fill out. Just list the items and place the bag outside your door before 9 AM.",
            textZh: "衣柜里有洗衣袋和填写单。列出衣物，早上9点前放在门口就行。",
            keyPhrases: [
              { en: "laundry bag", zh: "洗衣袋" },
              { en: "form to fill out", zh: "填写单" },
              { en: "outside your door", zh: "门口" },
            ],
            alternativeExpressions: [
              { textEn: "Easy! There's a laundry bag in the closet. Just fill out the form, put your clothes in the bag, and leave it outside your door by 9 AM.", textZh: "很简单！衣柜里有洗衣袋。填好单子，把衣服放进袋子，9点前放门口就行。", actionHint: "用easy开头轻松引导", frequency: "common" },
              { textEn: "Sure. You'll find a bag and order form in your wardrobe. List what you're sending and set it outside before 9 in the morning.", textZh: "好的。衣橱里有洗衣袋和订单。列出要洗的衣物，早上9点前放门外。", actionHint: "用wardrobe替代closet", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "When will I get them back?",
            textZh: "什么时候能拿回来？",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Standard service is same-day — returned by 6 PM. We also offer express service with a 3-hour turnaround for an extra 50%.",
            textZh: "标准服务当天取，下午6点前送回。也有加急服务，3小时完成，加收50%。",
            keyPhrases: [
              { en: "same-day", zh: "当天" },
              { en: "express service", zh: "加急服务" },
              { en: "turnaround", zh: "完成周期" },
            ],
            alternativeExpressions: [
              { textEn: "If you go with standard, you'll have them back by 6 PM the same day. If you're in a rush, we can do express — 3 hours, but it's 50% more.", textZh: "选标准服务的话当天下午6点前送回。赶时间的话有加急服务，3小时，加收50%。", actionHint: "用in a rush表示赶时间", frequency: "common" },
              { textEn: "Regular service gets everything back to you by 6 tonight. Need it sooner? Express is 3 hours with a 50 percent surcharge.", textZh: "普通服务今晚6点前全部送回。要更快吗？加急3小时，加收50%附加费。", actionHint: "用surcharge替代extra charge", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Standard is fine. How much does it cost per item?",
            textZh: "标准就好。每件多少钱？",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Shirts are $6, pants are $8, and a full suit is $20 for dry cleaning. The price list is on the laundry form.",
            textZh: "衬衫6美元，裤子8美元，全套西装干洗20美元。价格表在洗衣单上。",
            keyPhrases: [
              { en: "dry cleaning", zh: "干洗" },
              { en: "price list", zh: "价格表" },
            ],
            alternativeExpressions: [
              { textEn: "Shirts run 6 dollars, pants are 8, and a full suit is 20 for dry cleaning. You'll find all the prices on the form.", textZh: "衬衫6美元，裤子8美元，西装全套干洗20美元。价格都在单子上。", actionHint: "用run表示价格为", frequency: "common" },
              { textEn: "A shirt's $6, trousers $8, and dry cleaning a suit is $20. The full price list is right there on the laundry slip.", textZh: "衬衫6美元，长裤8美元，西装干洗20美元。完整价格表在洗衣单上。", actionHint: "用trousers替代pants", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have a silk blouse — should that be dry cleaned?",
            textZh: "我有一件丝绸上衣——需要干洗吗？",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Yes, we recommend dry cleaning for silk and wool items. Just mark it on the form and we'll handle it with care.",
            textZh: "是的，丝绸和羊毛建议干洗。在单子上标注一下，我们会小心处理。",
            keyPhrases: [
              { en: "silk", zh: "丝绸" },
              { en: "wool", zh: "羊毛" },
              { en: "handle with care", zh: "小心处理" },
            ],
            alternativeExpressions: [
              { textEn: "Definitely dry clean for silk. Just note it on the form and our team will take extra care with it.", textZh: "丝绸肯定要干洗。在单子上标注一下，我们会格外小心。", actionHint: "简洁建议干洗", frequency: "common" },
              { textEn: "Yes, silk and delicates should always go to dry cleaning. Mark it on the slip and we'll treat it gently.", textZh: "是的，丝绸和娇贵面料都应该干洗。在单子上标注，我们会轻柔处理。", actionHint: "用delicates表示娇贵面料", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. I'll put the bag out tonight. Thanks!",
            textZh: "明白了。我今晚把袋子放出去。谢谢！",
          },
        ],
      },
      {
        id: "urgent-stain",
        titleZh: "紧急去污",
        titleEn: "Urgent Stain Removal",
        description: "衣服沾上污渍需要紧急处理",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I have an emergency — I spilled red wine on my white shirt and I need it for a meeting tomorrow morning.",
            textZh: "紧急情况——我白衬衫上洒了红酒，明天早上开会要穿。",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Don't worry, we deal with this quite often. Can you bring it down to the front desk right away? The sooner we treat the stain, the better.",
            textZh: "别担心，我们经常处理这种情况。能马上拿到前台吗？越早处理污渍效果越好。",
            keyPhrases: [
              { en: "treat the stain", zh: "处理污渍" },
              { en: "the sooner the better", zh: "越早越好" },
            ],
            alternativeExpressions: [
              { textEn: "Oh, don't worry — we see this all the time. Bring it to the front desk as soon as you can. Time is key with red wine stains.", textZh: "别担心，我们经常处理这种情况。尽快拿到前台来。红酒渍关键是要快。", actionHint: "强调时间紧迫", frequency: "common" },
              { textEn: "No problem, we can handle that. The sooner you get it to us, the better our chances. Can you drop it off right now?", textZh: "没问题，我们能处理。越快拿来，去掉的概率越大。现在能送过来吗？", actionHint: "用chances表达成功率", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll bring it right now. Can it be ready by tomorrow at 7 AM?",
            textZh: "我马上拿下来。明早7点能好吗？",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "We'll do our best. For rush stain treatment, there's a $15 surcharge on top of the regular cleaning fee. Is that okay?",
            textZh: "我们尽力。紧急去污在普通洗衣费基础上加收15美元。可以吗？",
            keyPhrases: [
              { en: "rush", zh: "加急" },
              { en: "surcharge", zh: "附加费" },
              { en: "on top of", zh: "在…基础上" },
            ],
            alternativeExpressions: [
              { textEn: "We'll try our best to have it ready. There's a $15 rush fee in addition to the normal cleaning charge. Sound okay?", textZh: "我们会尽力弄好。除了正常洗衣费外还有15美元加急费。可以吗？", actionHint: "用in addition to替代on top of", frequency: "common" },
              { textEn: "We'll do everything we can. Just so you know, the express stain service is an extra 15 dollars over the regular price. Shall I go ahead?", textZh: "我们会尽全力。提前说一下，紧急去污在普通价格上加15美元。要安排吗？", actionHint: "提前说明价格", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's fine. I really need this shirt.",
            textZh: "没问题。我真的很需要这件衬衫。",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "We'll hang it on your door handle by 6:30 AM. If the stain doesn't come out completely, we won't charge you for the treatment.",
            textZh: "6:30之前挂到您门把手上。如果污渍没完全去掉，去污费用不收。",
            keyPhrases: [
              { en: "door handle", zh: "门把手" },
              { en: "come out", zh: "去掉/洗掉" },
            ],
            alternativeExpressions: [
              { textEn: "It'll be hanging on your doorknob by 6:30 in the morning. And if we can't get the stain out, we won't charge for the service.", textZh: "早上6:30前会挂在门把上。如果污渍去不掉，去污部分不收钱。", actionHint: "用doorknob替代door handle", frequency: "common" },
              { textEn: "We'll have it back on your door by 6:30 AM. If the stain is stubborn and doesn't budge, the treatment is on us.", textZh: "6:30之前挂回您门上。如果污渍顽固去不掉，处理费算我们的。", actionHint: "用stubborn和on us口语化", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's really fair. I appreciate it.",
            textZh: "很公道。太感谢了。",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "No problem at all. Also, I'd suggest dabbing the area with cold water in the meantime — don't rub it. We'll take it from there.",
            textZh: "不客气。另外建议您先用冷水轻拍污渍处——别搓。剩下的交给我们。",
            keyPhrases: [
              { en: "dabbing", zh: "轻拍" },
              { en: "don't rub", zh: "别搓" },
              { en: "take it from there", zh: "剩下的交给我们" },
            ],
            alternativeExpressions: [
              { textEn: "Happy to help! In the meantime, try blotting the spot with cold water — no rubbing, just gentle pats. We'll do the rest.", textZh: "很乐意帮忙！这期间您可以用冷水轻按污渍处——别搓，轻轻拍就好。剩下的我们来。", actionHint: "用blotting替代dabbing", frequency: "common" },
              { textEn: "My pleasure. A quick tip — dab it with cold water and a clean cloth while you wait. Whatever you do, don't rub. We'll take care of the rest.", textZh: "不客气。小窍门——用干净布蘸冷水轻拍。千万别搓。其他交给我们。", actionHint: "用quick tip引导", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 泳池与健身 ====================
  {
    id: "hotel-pool-towels",
    category: "hotel",
    titleZh: "泳池：借毛巾",
    titleEn: "Pool: Getting Towels",
    description: "在酒店泳池借用毛巾和了解泳池设施",
    otherRole: "泳池服务员",
    otherRoleIcon: "🏊",
    flows: [
      {
        id: "basic-towels",
        titleZh: "借泳池毛巾",
        titleEn: "Pool Towel Pickup",
        description: "到泳池借毛巾并了解基本规则",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, where can I get pool towels?",
            textZh: "你好，在哪里拿泳池毛巾？",
          },
          {
            speaker: "them",
            role: "泳池服务员",
            textEn: "Right here! Just give me your room number and I'll check out towels for you. How many do you need?",
            textZh: "就在这里！告诉我房间号，我帮您登记。需要几条？",
            keyPhrases: [
              { en: "room number", zh: "房间号" },
              { en: "check out towels", zh: "登记借毛巾" },
            ],
            alternativeExpressions: [
              { textEn: "You've come to the right place! What room are you in? I'll get you set up. How many towels?", textZh: "找对地方了！您哪个房间？我帮您登记。要几条毛巾？", actionHint: "热情引导", frequency: "common" },
              { textEn: "Right here at the desk! Just need your room number to sign them out. How many would you like?", textZh: "就在这个台子！只需要房间号登记一下。要几条？", actionHint: "用sign out替代check out", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Room 1208. Two towels, please.",
            textZh: "1208房间。两条，谢谢。",
          },
          {
            speaker: "them",
            role: "泳池服务员",
            textEn: "Here you go. Please return them to the bin by the pool entrance when you're done. There's a $25 charge per towel if they go missing.",
            textZh: "给您。用完请放到泳池入口的回收箱里。毛巾丢失每条收25美元。",
            keyPhrases: [
              { en: "return them to the bin", zh: "放到回收箱" },
              { en: "go missing", zh: "丢失" },
            ],
            alternativeExpressions: [
              { textEn: "There you go! When you're finished, just drop them in the towel bin near the entrance. Heads up — there's a $25 fee if one doesn't come back.", textZh: "给您！用完放到入口附近的毛巾箱就行。提醒一下，丢失一条收25美元。", actionHint: "用heads up表示提醒", frequency: "common" },
              { textEn: "Here you are! Please toss them in the collection basket by the gate when done. Lost towels are charged at 25 each.", textZh: "给您！用完请扔到门口的回收篮。丢失的毛巾每条收25美元。", actionHint: "用collection basket替换", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Are there lounge chairs available?",
            textZh: "明白了。有躺椅吗？",
          },
          {
            speaker: "them",
            role: "泳池服务员",
            textEn: "Yes, first come, first served. We also have umbrellas if you'd like some shade. The poolside bar is open until 6 PM.",
            textZh: "有的，先到先得。如果需要遮阳也有太阳伞。泳池酒吧开到下午6点。",
            keyPhrases: [
              { en: "first come, first served", zh: "先到先得" },
              { en: "umbrellas", zh: "太阳伞" },
              { en: "poolside bar", zh: "泳池酒吧" },
            ],
            alternativeExpressions: [
              { textEn: "Plenty of loungers out there — just grab any open one. There are parasols too if you want shade. And the bar's open till 6.", textZh: "外面有很多躺椅——找空的坐就行。想遮阳也有太阳伞。酒吧开到6点。", actionHint: "用parasol替代umbrella", frequency: "common" },
              { textEn: "Just pick any free chair — it's first come, first served. We've got sun umbrellas too. The pool bar closes at 6 PM.", textZh: "随便找空椅子坐就行，先到先得。也有太阳伞。泳池酒吧6点关门。", actionHint: "更直接地表达", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I order drinks from the poolside bar to my chair?",
            textZh: "能从泳池酒吧点饮料送到躺椅吗？",
          },
          {
            speaker: "them",
            role: "泳池服务员",
            textEn: "Absolutely! Just flag down any staff member. We serve drinks in plastic cups by the pool for safety. You can charge to your room.",
            textZh: "当然！招呼任何工作人员就行。泳池旁出于安全用塑料杯。可以记到房费。",
            keyPhrases: [
              { en: "flag down", zh: "招呼/叫住" },
              { en: "plastic cups", zh: "塑料杯" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! Just wave over any staff and they'll bring drinks to your chair. We use plastic glasses by the pool. You can put it on your room.", textZh: "当然！招招手叫工作人员就行，他们会送到躺椅旁。泳池边用塑料杯。可以记房间账。", actionHint: "用wave over替代flag down", frequency: "common" },
              { textEn: "Absolutely — we do poolside service. Just catch the eye of a server. Everything comes in plastic for safety, and it goes on your room tab.", textZh: "当然，我们有泳池边服务。看到服务员招呼一下就行。出于安全都用塑料杯，记房间账。", actionHint: "用catch the eye表示引起注意", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "towel-issue",
        titleZh: "毛巾不够或遗失",
        titleEn: "Towel Shortage Issue",
        description: "毛巾用完或被误拿需要解决",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, someone seems to have taken our towels while we were swimming. Our stuff is still on the chairs.",
            textZh: "不好意思，我们游泳时毛巾好像被别人拿走了。我们的东西还在椅子上。",
          },
          {
            speaker: "them",
            role: "泳池服务员",
            textEn: "I'm sorry about that. It happens sometimes. I'll bring you fresh towels right away. Can you confirm your room number?",
            textZh: "很抱歉。这种情况偶尔会发生。我马上给您拿新的。能确认一下房间号吗？",
            keyPhrases: [
              { en: "fresh towels", zh: "新毛巾" },
            ],
            alternativeExpressions: [
              { textEn: "Oh no, I'm sorry about that! Let me grab you new ones right away. What's your room number?", textZh: "哎呀，很抱歉！我马上给您拿新的。您的房间号是？", actionHint: "更口语化地道歉", frequency: "common" },
              { textEn: "I apologize — that does happen once in a while. I'll replace them right now. May I have your room number?", textZh: "抱歉——偶尔会出现这种情况。我现在就换新的。能告诉我房间号吗？", actionHint: "正式道歉", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Room 1208. Will we be charged for the missing ones?",
            textZh: "1208房间。丢的那些会收我们钱吗？",
          },
          {
            speaker: "them",
            role: "泳池服务员",
            textEn: "Don't worry — since you reported it to us, we'll note it in the system and waive the charge. These things happen.",
            textZh: "别担心——既然您跟我们说了，我们会在系统里备注，免除费用。这种事难免。",
            keyPhrases: [
              { en: "waive the charge", zh: "免除费用" },
              { en: "note it in the system", zh: "在系统里备注" },
            ],
            alternativeExpressions: [
              { textEn: "No worries at all. Since you let us know, I'll log it and there won't be any charge on your end.", textZh: "完全不用担心。既然您告诉我们了，我会记录下来，不会收您费用。", actionHint: "用log替代note", frequency: "common" },
              { textEn: "Not a problem. I'll make a note of it so you won't be charged. It's not your fault.", textZh: "没问题。我会做个备注，不会向您收费的。这不是您的错。", actionHint: "强调不是客人的责任", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you, that's a relief. Is there somewhere we can lock our valuables?",
            textZh: "谢谢，那就放心了。有地方可以锁贵重物品吗？",
            culturalNote: "\'that's a relief\' 表示松了一口气，是很地道的表达。",
          },
          {
            speaker: "them",
            role: "泳池服务员",
            textEn: "There are lockers in the changing room — they're free to use. Just bring your own lock, or you can borrow one from me for a $5 deposit.",
            textZh: "更衣室有储物柜——免费使用。自带锁，或押金5美元借一把。",
            keyPhrases: [
              { en: "lockers", zh: "储物柜" },
              { en: "changing room", zh: "更衣室" },
              { en: "deposit", zh: "押金" },
            ],
            alternativeExpressions: [
              { textEn: "Yes! There are lockers in the locker room. They're free, but you'll need a lock. I can lend you one for a 5-dollar deposit.", textZh: "有的！更衣室里有储物柜。免费使用，但需要自带锁。我可以借您一把，押金5美元。", actionHint: "用locker room替代changing room", frequency: "common" },
              { textEn: "There are storage lockers in the changing area — no charge. Bring your own padlock, or grab one from me for a $5 refundable deposit.", textZh: "更衣区有储物柜——免费的。自带锁，或者5美元押金借一把，可退。", actionHint: "用refundable强调可退", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll borrow one. Here's $5.",
            textZh: "我借一把。给您5美元。",
          },
          {
            speaker: "them",
            role: "泳池服务员",
            textEn: "Here's your lock and key. Return it before the pool closes at 9 PM and you'll get your deposit back. Enjoy the rest of your swim!",
            textZh: "给您锁和钥匙。晚上9点泳池关门前还回来就退押金。游泳愉快！",
            keyPhrases: [
              { en: "lock and key", zh: "锁和钥匙" },
              { en: "pool closes", zh: "泳池关门" },
            ],
            alternativeExpressions: [
              { textEn: "Here you go — lock and key. Just bring it back before 9 tonight when the pool shuts down, and I'll give you your 5 back. Have fun!", textZh: "给您——锁和钥匙。今晚9点泳池关门前还回来，5美元退给您。玩得开心！", actionHint: "用shuts down替代closes", frequency: "common" },
              { textEn: "All yours! Return the lock by 9 PM closing time and you'll get the deposit right back. Enjoy your swim!", textZh: "给您了！9点关门前还锁就退押金。游泳愉快！", actionHint: "简洁告知", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "hotel-pool-rules",
    category: "hotel",
    titleZh: "泳池：了解规则",
    titleEn: "Pool: Understanding Rules",
    description: "了解酒店泳池的使用规则和开放时间",
    otherRole: "泳池救生员",
    otherRoleIcon: "🏊",
    flows: [
      {
        id: "basic-rules",
        titleZh: "基础泳池规则",
        titleEn: "Basic Pool Rules",
        description: "了解泳池开放时间和基本规则",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "What are the pool hours?",
            textZh: "泳池开放时间是什么？",
          },
          {
            speaker: "them",
            role: "救生员",
            textEn: "The pool is open from 7 AM to 9 PM daily. There's a lifeguard on duty from 8 AM to 7 PM.",
            textZh: "泳池每天早7点到晚9点开放。救生员值班时间是早8点到晚7点。",
            keyPhrases: [
              { en: "pool hours", zh: "泳池开放时间" },
              { en: "lifeguard on duty", zh: "救生员值班" },
            ],
            alternativeExpressions: [
              { textEn: "We're open 7 in the morning till 9 at night, every day. A lifeguard is here from 8 AM to 7 PM.", textZh: "每天早上7点到晚上9点开放。救生员在岗时间是早8点到晚7点。", actionHint: "更口语化说时间", frequency: "common" },
              { textEn: "The pool runs from 7 AM to 9 PM. There's always a lifeguard on duty between 8 and 7.", textZh: "泳池7点到晚9点开放。8点到7点之间一直有救生员。", actionHint: "用runs from表示运营", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can my children use the pool? They're 6 and 8.",
            textZh: "我的孩子能用泳池吗？他们6岁和8岁。",
          },
          {
            speaker: "them",
            role: "救生员",
            textEn: "Children under 12 must be accompanied by an adult at all times. We also have a shallow kids' pool on the other side — it's only 2 feet deep.",
            textZh: "12岁以下儿童必须全程有成人陪同。另一边还有浅水儿童池——只有两英尺深。",
            keyPhrases: [
              { en: "accompanied by an adult", zh: "成人陪同" },
              { en: "at all times", zh: "全程/始终" },
              { en: "shallow", zh: "浅的" },
              { en: "kids' pool", zh: "儿童池" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! Just make sure a grown-up is with them the whole time. There's also a kiddie pool on the far side — nice and shallow, only about 2 feet.", textZh: "可以！只要保证全程有大人陪着。对面还有个儿童池，又浅又安全，大概两英尺深。", actionHint: "用kiddie pool口语化", frequency: "common" },
              { textEn: "Absolutely — kids under 12 just need an adult with them at all times. We've got a separate shallow pool for younger children too.", textZh: "当然——12岁以下的孩子需要大人全程陪同。我们还有个单独的浅水池给小朋友。", actionHint: "强调年龄规定", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. Are there any other rules we should be aware of?",
            textZh: "好的。还有什么规则需要注意？",
          },
          {
            speaker: "them",
            role: "救生员",
            textEn: "No glass containers near the pool. No diving in the shallow end. And please shower before entering the pool — there's a rinse station right over there.",
            textZh: "泳池旁禁止玻璃容器。浅水区禁止跳水。入池前请冲淋——那边有冲洗台。",
            keyPhrases: [
              { en: "glass containers", zh: "玻璃容器" },
              { en: "no diving", zh: "禁止跳水" },
              { en: "shallow end", zh: "浅水区" },
              { en: "rinse station", zh: "冲洗台" },
            ],
            alternativeExpressions: [
              { textEn: "Just a few things: no glass by the pool, no jumping into the shallow end, and we ask everyone to rinse off before getting in. The shower's right there.", textZh: "注意几点：泳池旁不要带玻璃制品，浅水区不要跳水，下水前请冲一下。淋浴就在那边。", actionHint: "用rinse off替代shower", frequency: "common" },
              { textEn: "Main rules: keep glass away from the pool area, diving is only in the deep end, and please take a quick shower before you swim — the rinse station is just over there.", textZh: "主要规则：玻璃制品远离泳池区域，跳水只能在深水区，下水前快速冲个澡——冲洗台就在那边。", actionHint: "分条说明", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is the pool heated?",
            textZh: "泳池是温水的吗？",
          },
          {
            speaker: "them",
            role: "救生员",
            textEn: "Yes, it's heated to 82 degrees Fahrenheit year-round. The hot tub over there is set to 104 degrees. Adults only for the hot tub.",
            textZh: "是的，全年加热到82华氏度。那边的热水浴缸是104华氏度。热水浴缸仅限成人。",
            keyPhrases: [
              { en: "heated", zh: "加热的" },
              { en: "Fahrenheit", zh: "华氏度" },
              { en: "hot tub", zh: "热水浴缸/按摩浴缸" },
              { en: "adults only", zh: "仅限成人" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, it's kept at a nice 82 degrees all year. We also have a jacuzzi at 104 — that one's for adults only, though.", textZh: "是的，全年保持舒适的82华氏度。还有个按摩浴缸104度——不过那个只限成人。", actionHint: "用jacuzzi替代hot tub", frequency: "common" },
              { textEn: "It sure is — heated to 82°F year-round. And there's a hot tub right over there at 104 degrees, but it's adults only.", textZh: "当然——全年加热到82华氏度。旁边还有个热水浴缸104度，不过仅限成人使用。", actionHint: "指出位置", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, thanks for the info!",
            textZh: "好的，谢谢告知！",
          },
        ],
      },
      {
        id: "pool-incident",
        titleZh: "泳池意外情况",
        titleEn: "Pool Incident",
        description: "泳池发生小意外需要寻求帮助",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me! My son slipped on the wet floor near the pool and scraped his knee.",
            textZh: "不好意思！我儿子在泳池旁的湿地板上滑倒了，膝盖擦伤了。",
          },
          {
            speaker: "them",
            role: "救生员",
            textEn: "Let me take a look. I have a first aid kit right here. Please sit him down on this chair.",
            textZh: "我看看。我这里有急救箱。请让他坐在这把椅子上。",
            keyPhrases: [
              { en: "first aid kit", zh: "急救箱" },
            ],
            alternativeExpressions: [
              { textEn: "Oh, let me see. I've got a first aid kit here. Have him sit down for me right on this chair.", textZh: "我看看。我这有急救箱。让他坐在这把椅子上。", actionHint: "更关切的语气", frequency: "common" },
              { textEn: "Okay, don't worry. I have my first aid supplies right here. Please bring him over and have a seat.", textZh: "好的，别担心。我这里有急救用品。请带他过来坐下。", actionHint: "安抚家长", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's just a scrape, but it's bleeding a little.",
            textZh: "只是擦伤，不过有点出血。",
          },
          {
            speaker: "them",
            role: "救生员",
            textEn: "I'll clean it with antiseptic and put on a waterproof bandage. It's a minor scrape — he'll be fine.",
            textZh: "我用消毒液清洗一下，贴个防水创可贴。只是小擦伤——没事的。",
            keyPhrases: [
              { en: "antiseptic", zh: "消毒液" },
              { en: "waterproof bandage", zh: "防水创可贴" },
            ],
            alternativeExpressions: [
              { textEn: "I'll disinfect it and put a waterproof band-aid on. It's just a small scrape — nothing to worry about.", textZh: "我消毒一下贴个防水创可贴。只是小擦伤，不用担心。", actionHint: "用band-aid替代bandage", frequency: "common" },
              { textEn: "Let me clean it up with some antiseptic and cover it with a waterproof plaster. He'll be just fine.", textZh: "我用消毒液清洗一下再贴个防水贴。他会没事的。", actionHint: "用plaster（英式）替代bandage", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. Can he still go back in the pool with the bandage?",
            textZh: "谢谢。贴着创可贴还能下水吗？",
          },
          {
            speaker: "them",
            role: "救生员",
            textEn: "I'd recommend waiting about 30 minutes to make sure the bleeding has stopped. The waterproof bandage should hold up in the water after that.",
            textZh: "建议等30分钟确认止血了再下水。防水创可贴之后在水里没问题。",
            keyPhrases: [
              { en: "bleeding has stopped", zh: "止血了" },
              { en: "hold up", zh: "撑得住/没问题" },
            ],
            alternativeExpressions: [
              { textEn: "I'd give it about half an hour to make sure it's stopped bleeding. After that, the waterproof bandage will be fine in the water.", textZh: "建议等半小时确认不出血了。之后防水创可贴下水没问题。", actionHint: "用give it表示等待", frequency: "common" },
              { textEn: "Best to stay out of the pool for 30 minutes or so until the bleeding stops. The bandage is waterproof, so he can swim after that.", textZh: "最好先别下水，等30分钟左右等止血了。创可贴是防水的，之后就能游了。", actionHint: "用stay out of表示暂时别去", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Should I fill out an incident report or anything?",
            textZh: "需要填事故报告什么的吗？",
            culturalNote: "在国外酒店，即使小事故也可能需要填 incident report，这是正常流程。",
          },
          {
            speaker: "them",
            role: "救生员",
            textEn: "Yes, I'll need you to fill out a quick form — just standard procedure. It protects you in case you need to file an insurance claim later.",
            textZh: "是的，需要您填个简单表格——标准流程。万一之后需要保险理赔，这对您有保障。",
            keyPhrases: [
              { en: "standard procedure", zh: "标准流程" },
              { en: "insurance claim", zh: "保险理赔" },
            ],
            alternativeExpressions: [
              { textEn: "Yes, we do need a quick incident form — it's just routine. It's for your protection too, in case you need it for insurance.", textZh: "是的，需要填个简单的事故表——只是例行手续。也是保护您的，万一需要走保险。", actionHint: "用routine替代standard procedure", frequency: "common" },
              { textEn: "I'll need you to fill out a short report. It's standard practice and it's really there to protect you if there are any medical costs.", textZh: "需要您填一份简短报告。这是标准做法，主要是万一有医疗费用时保护您的权益。", actionHint: "提到医疗费用", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, I'll fill it out. Thanks for taking care of him so quickly.",
            textZh: "好的，我来填。谢谢你这么快就处理了。",
          },
        ],
      },
    ],
  },

  {
    id: "hotel-gym-equipment",
    category: "hotel",
    titleZh: "健身房：使用器材",
    titleEn: "Gym: Using Equipment",
    description: "使用酒店健身房的器材，了解设施和规则",
    otherRole: "健身房管理员",
    otherRoleIcon: "💪",
    flows: [
      {
        id: "basic-gym",
        titleZh: "基础健身房使用",
        titleEn: "Basic Gym Access",
        description: "第一次使用酒店健身房",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Is the gym free for hotel guests?",
            textZh: "酒店客人免费用健身房吗？",
          },
          {
            speaker: "them",
            role: "健身房管理员",
            textEn: "Yes, it's complimentary for all guests. Just swipe your room key to enter. The gym is open 24 hours.",
            textZh: "是的，所有客人免费使用。刷房卡进入。健身房24小时开放。",
            keyPhrases: [
              { en: "complimentary", zh: "免费的" },
              { en: "swipe your room key", zh: "刷房卡" },
              { en: "24 hours", zh: "24小时" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, totally free for guests! Just tap your key card at the door. It's open around the clock.", textZh: "对，住客完全免费！门口刷房卡就行。全天候开放。", actionHint: "用tap和around the clock", frequency: "common" },
              { textEn: "Yes, there's no charge at all. Use your room card to get in. The gym never closes — it's 24/7.", textZh: "是的，完全不收费。用房卡进入就行。健身房24小时不关门。", actionHint: "用24/7强调全天", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What equipment do you have?",
            textZh: "有什么器材？",
          },
          {
            speaker: "them",
            role: "健身房管理员",
            textEn: "We have treadmills, ellipticals, stationary bikes, free weights up to 50 pounds, and a cable machine. There's also a stretching area with yoga mats.",
            textZh: "有跑步机、椭圆机、动感单车、50磅以下的自由重量器械和龙门架。还有拉伸区配瑜伽垫。",
            keyPhrases: [
              { en: "treadmills", zh: "跑步机" },
              { en: "ellipticals", zh: "椭圆机" },
              { en: "free weights", zh: "自由重量/哑铃" },
              { en: "yoga mats", zh: "瑜伽垫" },
            ],
            alternativeExpressions: [
              { textEn: "We've got a pretty good setup — treadmills, ellipticals, bikes, dumbbells up to 50 pounds, and a cable machine. There's a stretching corner with mats too.", textZh: "设备挺齐全的——跑步机、椭圆机、单车、50磅以下哑铃和龙门架。还有个拉伸角有瑜伽垫。", actionHint: "用setup概括设备", frequency: "common" },
              { textEn: "Quite a lot actually! Cardio machines — treadmills, ellipticals, bikes — plus free weights and a cable station. We also have yoga mats in the stretch area.", textZh: "其实挺多的！有氧器械有跑步机、椭圆机、单车，还有自由重量和龙门架。拉伸区有瑜伽垫。", actionHint: "按类别分组介绍", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Are there towels and water available?",
            textZh: "有毛巾和水吗？",
          },
          {
            speaker: "them",
            role: "健身房管理员",
            textEn: "Towels are in the basket by the door, and there's a water dispenser in the corner. Please wipe down the equipment after use.",
            textZh: "毛巾在门口的篮子里，角落有饮水机。使用器材后请擦拭干净。",
            keyPhrases: [
              { en: "water dispenser", zh: "饮水机" },
              { en: "wipe down", zh: "擦拭" },
            ],
            alternativeExpressions: [
              { textEn: "Grab a towel from the basket at the entrance and there's a water cooler in the corner. Just make sure to wipe the machines down when you're done.", textZh: "入口的篮子里拿毛巾，角落有饮水机。用完器材请擦干净。", actionHint: "用water cooler替换", frequency: "common" },
              { textEn: "Towels are by the door, and you'll find water over in the corner. We do ask everyone to clean the equipment after each use.", textZh: "毛巾在门口，水在角落。我们要求每个人用完器材后清洁一下。", actionHint: "用clean替代wipe down", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure. Is there a time limit on the cardio machines?",
            textZh: "好的。有氧器材有时间限制吗？",
          },
          {
            speaker: "them",
            role: "健身房管理员",
            textEn: "During peak hours — 6 to 8 AM and 5 to 7 PM — we ask guests to limit sessions to 30 minutes if others are waiting.",
            textZh: "高峰时段——早6到8点和下午5到7点——如果有人等，请限制在30分钟。",
            keyPhrases: [
              { en: "peak hours", zh: "高峰时段" },
              { en: "limit sessions", zh: "限制使用时间" },
            ],
            alternativeExpressions: [
              { textEn: "When it's busy — usually mornings from 6 to 8 and evenings 5 to 7 — we ask that you keep it to 30 minutes on the cardio machines if there's a line.", textZh: "忙的时候——一般早上6到8点和傍晚5到7点——如果有人排队，有氧器材请控制在30分钟内。", actionHint: "用if there's a line表示排队", frequency: "common" },
              { textEn: "In the morning and evening rush — 6 to 8 AM, 5 to 7 PM — please try to keep your cardio to half an hour when others are waiting.", textZh: "早晚高峰——早6到8点、下午5到7点——有人等的话请尽量控制有氧在半小时内。", actionHint: "用rush替代peak hours", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "No problem. Thanks for the info.",
            textZh: "没问题。谢谢告知。",
          },
        ],
      },
      {
        id: "equipment-issue",
        titleZh: "器材问题",
        titleEn: "Equipment Problem",
        description: "发现健身器材故障需要报告",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, the second treadmill seems to be broken. The belt keeps stopping.",
            textZh: "不好意思，第二台跑步机好像坏了。传送带一直停。",
          },
          {
            speaker: "them",
            role: "健身房管理员",
            textEn: "Thank you for letting me know. I'll put an out-of-order sign on it and call maintenance. In the meantime, the other three treadmills are working fine.",
            textZh: "谢谢告知。我贴个故障标签，联系维修。其他三台跑步机正常可用。",
            keyPhrases: [
              { en: "out-of-order", zh: "故障/停用" },
              { en: "maintenance", zh: "维修" },
            ],
            alternativeExpressions: [
              { textEn: "Thanks for letting me know! I'll tag it as broken and get someone to fix it. The other three are working perfectly if you'd like to use one.", textZh: "谢谢告知！我会标记故障然后找人修。另外三台完全正常，您可以用。", actionHint: "用tag表示标记", frequency: "common" },
              { textEn: "I appreciate you telling me. I'll mark it out of service and have the repair team take a look. Feel free to use any of the other treadmills.", textZh: "感谢您告诉我。我会标记停用让维修团队来看看。请随意使用其他跑步机。", actionHint: "用out of service替代out-of-order", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Also, I'm not sure how to adjust this cable machine. Can you show me?",
            textZh: "还有，我不太会调这个龙门架。能教我一下吗？",
          },
          {
            speaker: "them",
            role: "健身房管理员",
            textEn: "Of course. Pull this pin out to change the weight — each plate is 10 pounds. This handle adjusts the height. What exercise are you trying to do?",
            textZh: "当然。拔出这个插销换重量——每片10磅。这个把手调高度。您想做什么动作？",
            keyPhrases: [
              { en: "pin", zh: "插销" },
              { en: "plate", zh: "重量片" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing! See this pin? Pull it out and move it to choose your weight — 10 pounds per stack. And this lever adjusts the height. What are you working on today?", textZh: "没问题！看到这个插销吗？拔出来移动选重量，每档10磅。这个拉杆调高度。您今天练什么？", actionHint: "用stack和lever", frequency: "common" },
              { textEn: "Happy to show you! Remove the pin here to set the weight — each block is 10 pounds. This part moves up and down. What muscle group are you targeting?", textZh: "很乐意教您！这里拔插销设定重量——每块10磅。这个部分上下调。您想练哪个肌群？", actionHint: "用muscle group专业化", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Chest press and lat pulldowns, if possible.",
            textZh: "推胸和高位下拉，可以吗？",
          },
          {
            speaker: "them",
            role: "健身房管理员",
            textEn: "Sure — for chest press, set the pulleys at chest height like this. For lat pulldowns, attach this bar and sit here. Start with a lighter weight to get the feel.",
            textZh: "好的——推胸的话，把滑轮调到胸部高度，像这样。高位下拉用这个横杆，坐这里。先用轻重量找找感觉。",
            keyPhrases: [
              { en: "pulleys", zh: "滑轮" },
              { en: "lighter weight", zh: "轻重量" },
            ],
            alternativeExpressions: [
              { textEn: "No problem! For chest press, move the cables to chest level, like so. For pulldowns, clip this wide bar on top and have a seat. Go light at first to warm up.", textZh: "没问题！推胸的话把钢索调到胸部高度，这样。下拉的话把宽横杆扣上面，坐下来。先用轻的热热身。", actionHint: "用warm up引导", frequency: "common" },
              { textEn: "Sure — chest press is pulleys at this height, and lat pulldown is up here with the bar. I'd start with something light until you get the hang of it.", textZh: "好的——推胸是滑轮在这个高度，高位下拉在上面用横杆。建议先从轻的开始，找到感觉再加。", actionHint: "用get the hang of it", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Are there any personal trainers available at the hotel?",
            textZh: "明白了。酒店有私人教练吗？",
          },
          {
            speaker: "them",
            role: "健身房管理员",
            textEn: "Yes, we have a trainer available by appointment. It's $80 for a one-hour session. I can book one for you if you're interested.",
            textZh: "有的，需要预约。一小时80美元。感兴趣的话我可以帮您预约。",
            keyPhrases: [
              { en: "by appointment", zh: "需要预约" },
            ],
            alternativeExpressions: [
              { textEn: "We do! Our trainer does one-on-one sessions at $80 an hour. Want me to set something up for you?", textZh: "有的！我们的教练提供一对一课程，每小时80美元。要我帮您安排吗？", actionHint: "用one-on-one替代", frequency: "common" },
              { textEn: "Yes, we have a personal trainer on staff. Sessions are $80 per hour and need to be booked in advance. Would you like me to schedule one?", textZh: "有的，我们有专属私人教练。每小时80美元，需要提前预约。要我帮您安排吗？", actionHint: "用on staff表示在编", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Maybe tomorrow morning. I'll think about it. Thanks for the help!",
            textZh: "也许明天早上。我考虑一下。谢谢帮忙！",
          },
        ],
      },
    ],
  },

  // ==================== 水疗中心 ====================
  {
    id: "hotel-spa-booking",
    category: "hotel",
    titleZh: "水疗中心：预约",
    titleEn: "Spa: Making a Booking",
    description: "在酒店水疗中心预约按摩或护理项目",
    otherRole: "水疗接待员",
    otherRoleIcon: "💆",
    flows: [
      {
        id: "basic-booking",
        titleZh: "基础预约",
        titleEn: "Basic Spa Booking",
        description: "简单预约按摩服务",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to book a massage. What do you offer?",
            textZh: "你好，我想预约按摩。有什么项目？",
          },
          {
            speaker: "them",
            role: "水疗接待",
            textEn: "We offer Swedish massage, deep tissue, hot stone, and aromatherapy. Sessions are 60 or 90 minutes.",
            textZh: "我们提供瑞典式按摩、深层组织按摩、热石按摩和芳香疗法。有60分钟和90分钟可选。",
            keyPhrases: [
              { en: "Swedish massage", zh: "瑞典式按摩" },
              { en: "deep tissue", zh: "深层组织按摩" },
              { en: "hot stone", zh: "热石按摩" },
              { en: "aromatherapy", zh: "芳香疗法" },
            ],
            alternativeExpressions: [
              { textEn: "We have four types: Swedish, deep tissue, hot stone, and aromatherapy. You can choose either a 60-minute or 90-minute session.", textZh: "我们有四种：瑞典式、深层组织、热石和芳香疗法。可选60分钟或90分钟。", actionHint: "分开说类型和时长", frequency: "common" },
              { textEn: "Great choice coming here! We do Swedish, deep tissue, hot stone, and aroma treatments. All available in one-hour or hour-and-a-half sessions.", textZh: "来对地方了！有瑞典式、深层组织、热石和芳香护理。都可选一小时或一个半小时。", actionHint: "热情开场", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much is a 60-minute Swedish massage?",
            textZh: "60分钟瑞典式按摩多少钱？",
          },
          {
            speaker: "them",
            role: "水疗接待",
            textEn: "It's $120 for 60 minutes. Hotel guests get a 15% discount, so it would be $102.",
            textZh: "60分钟120美元。酒店客人85折，所以是102美元。",
            keyPhrases: [
              { en: "15% discount", zh: "85折/15%折扣" },
            ],
            alternativeExpressions: [
              { textEn: "The regular price is 120 for an hour, but hotel guests get 15 percent off. So it'd come to 102.", textZh: "正价一小时120美元，但住客打85折，算下来102美元。", actionHint: "先说原价再说折扣", frequency: "common" },
              { textEn: "A 60-minute Swedish is $120. Since you're staying with us, you'd get the guest discount — 15% off, making it $102.", textZh: "60分钟瑞典式120美元。因为您是住客，享受85折优惠，102美元。", actionHint: "强调住客身份", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds good. Do you have anything available today?",
            textZh: "不错。今天有空位吗？",
          },
          {
            speaker: "them",
            role: "水疗接待",
            textEn: "Let me check... We have a 2 PM and a 4:30 PM slot open. Do you have a preference for a male or female therapist?",
            textZh: "我看看……下午2点和4:30有空位。您偏好男技师还是女技师？",
            keyPhrases: [
              { en: "slot open", zh: "空位" },
              { en: "therapist", zh: "技师" },
            ],
            alternativeExpressions: [
              { textEn: "Let me have a look... We've got 2 PM and 4:30 open today. Would you like a male or female masseuse?", textZh: "我看一下……今天下午2点和4:30有空。您想要男按摩师还是女按摩师？", actionHint: "用masseuse替代therapist", frequency: "common" },
              { textEn: "Checking now... Good news, we have a 2 o'clock and a 4:30 available. Any preference on your therapist — male or female?", textZh: "查看中……好消息，2点和4:30都有空位。技师有偏好吗——男的还是女的？", actionHint: "先报好消息", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "4:30 works. A female therapist, please.",
            textZh: "4:30可以。女技师，谢谢。",
          },
          {
            speaker: "them",
            role: "水疗接待",
            textEn: "You're all set for 4:30. Please arrive 15 minutes early to change and relax in our steam room beforehand. Wear comfortable clothing.",
            textZh: "4:30预约好了。请提前15分钟到，换衣服并在蒸汽房放松一下。穿舒适的衣服来。",
            keyPhrases: [
              { en: "arrive 15 minutes early", zh: "提前15分钟到" },
              { en: "steam room", zh: "蒸汽房" },
            ],
            alternativeExpressions: [
              { textEn: "Booked! Please come 15 minutes early so you have time to get changed and unwind in the steam room. Dress comfortably.", textZh: "预约好了！请提前15分钟来，这样有时间换衣服在蒸汽房放松一下。穿舒服的来。", actionHint: "用unwind替代relax", frequency: "common" },
              { textEn: "You're all set for 4:30. We suggest arriving at 4:15 to settle in — you can use the steam room and sauna before your session. Come in comfortable clothes.", textZh: "4:30预约好了。建议4:15到，可以先在蒸汽房和桑拿适应一下。穿舒适的衣服来。", actionHint: "提到桑拿", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Should I tip the therapist?",
            textZh: "好的。需要给技师小费吗？",
            culturalNote: "在美国，水疗和按摩一般给15-20%小费。有些酒店水疗已含服务费，可以先确认。",
          },
          {
            speaker: "them",
            role: "水疗接待",
            textEn: "Gratuity is not included but is appreciated. You can add it when you sign the bill. Most guests tip 15 to 20 percent.",
            textZh: "费用不含小费，但技师会很感激。签单时可以加上。大多数客人给15-20%。",
            keyPhrases: [
              { en: "gratuity", zh: "小费/酬金" },
              { en: "sign the bill", zh: "签单" },
            ],
            alternativeExpressions: [
              { textEn: "Tips aren't included, but they're always appreciated. You can add it to the bill when you sign. Most people leave 15 to 20 percent.", textZh: "小费不含在内，但技师很感激。签单时可以加上。大多数人给15到20%。", actionHint: "用tips替代gratuity", frequency: "common" },
              { textEn: "The price doesn't cover gratuity. If you'd like to tip, just write it in when you settle the bill. Fifteen to twenty percent is typical.", textZh: "价格不含小费。想给的话签单时写上就行。一般15到20%。", actionHint: "用settle the bill", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "couples-spa",
        titleZh: "情侣水疗预约",
        titleEn: "Couples Spa Booking",
        description: "为两个人预约水疗并了解套餐",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Do you have any couples' packages? It's our anniversary.",
            textZh: "有情侣套餐吗？今天是我们的纪念日。",
            culturalNote: "\'anniversary\' 可以指结婚纪念日或恋爱纪念日。",
          },
          {
            speaker: "them",
            role: "水疗接待",
            textEn: "Happy anniversary! We have a wonderful couples' retreat package — side-by-side massage, followed by a facial, and ending with champagne and chocolate truffles in our relaxation lounge.",
            textZh: "纪念日快乐！我们有很棒的情侣套餐——双人同步按摩，然后面部护理，最后在休息厅享用香槟和松露巧克力。",
            keyPhrases: [
              { en: "couples' retreat", zh: "情侣套餐" },
              { en: "side-by-side", zh: "并排/同步" },
              { en: "facial", zh: "面部护理" },
              { en: "relaxation lounge", zh: "休息厅" },
            ],
            alternativeExpressions: [
              { textEn: "Congratulations! We have a lovely couples' package — you get massages together, then facials, and finish with champagne and chocolates in our lounge.", textZh: "恭喜！我们有个很棒的情侣套餐——一起做按摩，再做面部护理，最后在休息厅喝香槟吃巧克力。", actionHint: "先祝贺再介绍", frequency: "common" },
              { textEn: "Oh, happy anniversary! Our couples' retreat is perfect for that — a dual massage, facials, and then champagne and truffles in a private lounge.", textZh: "纪念日快乐！我们的情侣套餐正合适——双人按摩、面部护理，然后在私人休息厅享用香槟和松露巧克力。", actionHint: "强调私人空间", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds amazing. How long is the whole experience and how much does it cost?",
            textZh: "听起来太棒了。整套多长时间？多少钱？",
          },
          {
            speaker: "them",
            role: "水疗接待",
            textEn: "It's a 2.5-hour experience for $350 per couple. That includes everything — massage, facial, refreshments, and use of our sauna and steam room all day.",
            textZh: "整套2.5小时，每对350美元。包含所有项目——按摩、面部护理、饮品，以及全天使用桑拿和蒸汽房。",
            keyPhrases: [
              { en: "per couple", zh: "每对" },
              { en: "refreshments", zh: "茶点/饮品" },
              { en: "sauna", zh: "桑拿" },
            ],
            alternativeExpressions: [
              { textEn: "The whole thing takes about two and a half hours and it's 350 for the two of you. Everything's included — treatments, drinks, and all-day access to the sauna and steam room.", textZh: "整套大约两个半小时，两位一共350美元。全包——护理、饮品，以及全天使用桑拿和蒸汽房。", actionHint: "用the two of you亲切表达", frequency: "common" },
              { textEn: "It runs about 2.5 hours, and it's $350 per couple. That covers the massage, facial, bubbly, and full use of our wellness facilities for the day.", textZh: "大约2.5小时，每对350美元。包含按摩、面部护理、起泡酒，以及全天使用健康设施。", actionHint: "用bubbly表示香槟", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Let's do it. What times are available tomorrow?",
            textZh: "就这个了。明天什么时间可以？",
          },
          {
            speaker: "them",
            role: "水疗接待",
            textEn: "We have 10 AM and 2 PM available. The morning slot is popular — I'd recommend booking it now before it fills up.",
            textZh: "有上午10点和下午2点。上午时段很抢手——建议现在就订。",
            keyPhrases: [
              { en: "fills up", zh: "订满" },
            ],
            alternativeExpressions: [
              { textEn: "Tomorrow we have 10 AM or 2 PM. The morning one tends to book up fast, so I'd grab it now if that works.", textZh: "明天有上午10点和下午2点。上午的通常很快就满了，合适的话建议现在就定。", actionHint: "用book up和grab", frequency: "common" },
              { textEn: "We've got a 10 AM and a 2 PM slot tomorrow. The 10 o'clock is very popular — shall I lock it in for you?", textZh: "明天有10点和下午2点。10点那场很抢手——要我帮您锁定吗？", actionHint: "用lock it in表示锁定", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "10 AM tomorrow, please. Can you charge it to room 1208?",
            textZh: "明天上午10点。能记到1208房间吗？",
          },
          {
            speaker: "them",
            role: "水疗接待",
            textEn: "Done! I'll also arrange for a complimentary anniversary card and rose petals in the treatment room. It's a small touch we do for celebrations.",
            textZh: "好了！我还会安排免费的纪念日贺卡和治疗室的玫瑰花瓣。这是我们为庆祝活动准备的小心意。",
            keyPhrases: [
              { en: "complimentary", zh: "免费赠送的" },
              { en: "rose petals", zh: "玫瑰花瓣" },
            ],
            alternativeExpressions: [
              { textEn: "All booked! And since it's your anniversary, I'll set up the room with rose petals and a card — our little gift to you.", textZh: "全订好了！既然是纪念日，我会在房间布置玫瑰花瓣和贺卡——我们的小礼物。", actionHint: "用our little gift表示心意", frequency: "common" },
              { textEn: "You're all set for 10 AM! As a special anniversary touch, we'll have the treatment room decorated with roses and a personalized card waiting for you.", textZh: "上午10点安排好了！作为纪念日惊喜，护理室会布置玫瑰和一张个性化贺卡等着您。", actionHint: "强调惊喜感", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Wow, that's so thoughtful. My wife will love it. Thank you!",
            textZh: "太贴心了。我太太一定很喜欢。谢谢！",
          },
        ],
      },
    ],
  },

  {
    id: "hotel-spa-treatment",
    category: "hotel",
    titleZh: "水疗中心：护理过程",
    titleEn: "Spa: During Treatment",
    description: "水疗护理过程中与技师的沟通，包括力度调整和偏好",
    otherRole: "按摩技师",
    otherRoleIcon: "💆",
    flows: [
      {
        id: "during-massage",
        titleZh: "按摩过程沟通",
        titleEn: "Communication During Massage",
        description: "按摩时表达力度和部位偏好",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "技师",
            textEn: "Welcome. Before we start, do you have any injuries or areas I should avoid?",
            textZh: "欢迎。开始之前，您有没有受伤或需要避开的部位？",
            keyPhrases: [
              { en: "injuries", zh: "受伤" },
              { en: "areas to avoid", zh: "需要避开的部位" },
            ],
            alternativeExpressions: [
              { textEn: "Hello! Before we get started, any sore spots or areas I should stay away from?", textZh: "您好！开始之前，有没有疼痛或需要我避开的地方？", actionHint: "用sore spots口语化", frequency: "common" },
              { textEn: "Hi there. Just a quick check — any health concerns, injuries, or sensitive areas I should know about before we begin?", textZh: "您好。快速确认一下——开始前有什么健康问题、受伤或敏感部位需要我知道的吗？", actionHint: "更全面地询问", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "My lower back has been a bit sore from traveling. Could you focus on that area?",
            textZh: "旅途中下背有点酸痛。能重点按那个位置吗？",
            casualVersion: "Yeah, my lower back is killing me from all the travel.",
          },
          {
            speaker: "them",
            role: "技师",
            textEn: "Absolutely. I'll spend extra time on your lower back. Let me know at any point if the pressure is too much or too little.",
            textZh: "当然。我会多花时间在您下背部。过程中力度太大或太小随时告诉我。",
            keyPhrases: [
              { en: "pressure", zh: "力度" },
              { en: "too much or too little", zh: "太大或太小" },
            ],
            alternativeExpressions: [
              { textEn: "Of course, I'll give your lower back extra attention. Don't hesitate to tell me if the pressure needs adjusting — more or less, just say the word.", textZh: "当然，我会重点关注您的下背部。力度需要调整随时说——要重要轻，说一声就好。", actionHint: "用say the word表示开口说", frequency: "common" },
              { textEn: "Sure thing. I'll work on that area more. Throughout the session, please speak up if you want me to go deeper or ease off.", textZh: "没问题。我会多按那个部位。过程中想要我加重或减轻随时说。", actionHint: "用go deeper和ease off", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, will do.",
            textZh: "好的。",
          },
          {
            speaker: "them",
            role: "技师",
            textEn: "How's the pressure right now? Would you like it harder or softer?",
            textZh: "现在力度怎么样？要重一点还是轻一点？",
            keyPhrases: [
              { en: "harder", zh: "重一点" },
              { en: "softer", zh: "轻一点" },
            ],
            alternativeExpressions: [
              { textEn: "How does the pressure feel? Want me to go deeper or keep it lighter?", textZh: "力度感觉怎么样？要我再深一点还是保持轻柔？", actionHint: "用go deeper替代harder", frequency: "common" },
              { textEn: "Is this comfortable for you? I can increase or decrease the pressure — just let me know.", textZh: "这样舒服吗？我可以加大或减小力度——跟我说就行。", actionHint: "用increase/decrease", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "A little harder, please. Especially on the shoulders.",
            textZh: "重一点。特别是肩膀部位。",
            culturalNote: "按摩时别忍着不说话。说 \'harder\' 或 \'softer\' 是完全正常的沟通。",
          },
          {
            speaker: "them",
            role: "技师",
            textEn: "How's that? I can feel a lot of tension in your shoulders. This knot right here is quite tight.",
            textZh: "这样怎么样？您肩膀很紧张。这里这个结特别紧。",
            keyPhrases: [
              { en: "tension", zh: "紧张/僵硬" },
              { en: "knot", zh: "肌肉结/硬块" },
            ],
            alternativeExpressions: [
              { textEn: "Is that good? Your shoulders are really tight. There's a big knot right here I'm going to work on.", textZh: "可以吗？您的肩膀真的很紧。这里有个大的结我来重点处理。", actionHint: "用work on表示处理", frequency: "common" },
              { textEn: "How's that feel? I'm finding a lot of tightness in your shoulders — especially this spot. I'll try to release it.", textZh: "感觉怎么样？您肩膀很多地方很紧——特别是这个点。我试着帮您松开。", actionHint: "用release表示松开", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's perfect. It hurts a little but in a good way.",
            textZh: "正好。有点痛但是是舒服的那种。",
          },
          {
            speaker: "them",
            role: "技师",
            textEn: "That's the tension releasing. I'd recommend drinking plenty of water after the massage to help flush out toxins. Would you like some herbal tea when we're done?",
            textZh: "那是紧张在释放。按摩后建议多喝水帮助排毒。结束后想来杯草本茶吗？",
            keyPhrases: [
              { en: "tension releasing", zh: "紧张释放" },
              { en: "flush out toxins", zh: "排毒" },
              { en: "herbal tea", zh: "草本茶" },
            ],
            alternativeExpressions: [
              { textEn: "That means the muscles are loosening up. Make sure to drink lots of water afterward — it helps your body recover. Shall I get you some tea when we finish?", textZh: "说明肌肉在放松。做完后记得多喝水，帮助身体恢复。结束后要来杯茶吗？", actionHint: "用loosening up替代releasing", frequency: "common" },
              { textEn: "That's a good sign — the tension is melting away. Hydrate well after this to help flush everything out. I can bring you herbal tea afterward if you'd like.", textZh: "这是好现象——紧张在消退。做完后多补水帮助排出废物。想的话我可以给您泡杯花草茶。", actionHint: "用melting away生动表达", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. This has been wonderful.",
            textZh: "好的。按得太舒服了。",
          },
        ],
      },
      {
        id: "special-requests",
        titleZh: "特殊要求",
        titleEn: "Special Requests During Treatment",
        description: "按摩过程中提出特殊要求或问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "技师",
            textEn: "I'll be using our signature essential oil blend today. Do you have any allergies to scents or essential oils?",
            textZh: "今天我会用我们的招牌精油。您对香味或精油有过敏吗？",
            keyPhrases: [
              { en: "essential oil", zh: "精油" },
              { en: "allergies to scents", zh: "对香味过敏" },
            ],
            alternativeExpressions: [
              { textEn: "Today I'll be working with our house blend of essential oils. Any allergies or sensitivities to fragrances I should know about?", textZh: "今天我会用我们的调配精油。有什么香味过敏或敏感需要注意的吗？", actionHint: "用house blend表示自调", frequency: "common" },
              { textEn: "I'm going to use our signature aromatherapy oils for the massage. Are there any scents that bother you or that you're allergic to?", textZh: "按摩时我会用我们的招牌芳疗精油。有什么气味让您不舒服或过敏的吗？", actionHint: "用bother表示不舒服", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm not sure about specific oils, but strong floral scents sometimes give me a headache.",
            textZh: "具体精油我不确定，但太浓的花香有时会让我头疼。",
          },
          {
            speaker: "them",
            role: "技师",
            textEn: "No problem. I'll use our calming eucalyptus blend instead — it's much lighter. I'll also do a small patch test on your wrist first.",
            textZh: "没问题。我换成镇静的尤加利精油——味道淡很多。我先在您手腕做个小测试。",
            keyPhrases: [
              { en: "eucalyptus", zh: "尤加利/桉树" },
              { en: "patch test", zh: "皮肤测试" },
            ],
            alternativeExpressions: [
              { textEn: "Got it. I'll switch to eucalyptus — it's very mild. Let me dab a little on your wrist first to make sure you're okay with it.", textZh: "明白。我换尤加利精油——很温和。先在您手腕上点一点确认没问题。", actionHint: "用dab表示点涂", frequency: "common" },
              { textEn: "No worries, I'll go with a lighter scent — eucalyptus. I always do a quick skin test first, just to be safe.", textZh: "没关系，我换个淡的——尤加利。我会先做个小皮肤测试，以防万一。", actionHint: "用just to be safe", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's fine, no reaction. Could you also turn the music down a little? It's a bit loud.",
            textZh: "没问题，没反应。能把音乐调小一点吗？有点吵。",
          },
          {
            speaker: "them",
            role: "技师",
            textEn: "Of course. Would you prefer a different playlist? We have nature sounds, piano, or complete silence.",
            textZh: "当然。想换个播放列表吗？有自然音效、钢琴曲，或者完全安静。",
            keyPhrases: [
              { en: "playlist", zh: "播放列表" },
              { en: "nature sounds", zh: "自然音效" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing! I can put on something different — we have forest sounds, soft piano, or I can just turn it off completely. What do you prefer?", textZh: "没问题！我可以换一个——有森林音效、轻柔钢琴曲，或者完全关掉。您喜欢哪个？", actionHint: "用put on表示播放", frequency: "common" },
              { textEn: "No problem. Would you rather hear nature sounds, gentle piano music, or would you prefer total quiet?", textZh: "没问题。您想听自然音效、轻柔钢琴曲，还是完全安静？", actionHint: "用total quiet替代silence", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Nature sounds would be great, just at a low volume.",
            textZh: "自然音效就好，音量低一点。",
          },
          {
            speaker: "them",
            role: "技师",
            textEn: "Done. Also, the room temperature — are you comfortable? I can adjust it or add another blanket to keep your feet warm.",
            textZh: "好了。还有室温——您舒服吗？我可以调温度或加一条毯子给脚保暖。",
            keyPhrases: [
              { en: "room temperature", zh: "室温" },
            ],
            alternativeExpressions: [
              { textEn: "There you go. How's the temperature? Too warm, too cold? I can also grab an extra blanket if your feet are chilly.", textZh: "调好了。温度怎么样？太热还是太冷？脚冷的话我可以加条毯子。", actionHint: "用chilly表示冷", frequency: "common" },
              { textEn: "All set. By the way, is the room comfortable temperature-wise? I can turn it up, or put a warm blanket over your feet.", textZh: "好了。对了，房间温度舒适吗？我可以调高一些，或者给您脚上盖条暖毯。", actionHint: "用temperature-wise", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "A blanket for my feet would be nice. Thank you for being so attentive.",
            textZh: "给脚盖条毯子吧。谢谢你这么细心。",
          },
          {
            speaker: "them",
            role: "技师",
            textEn: "That's what we're here for. Just relax and let me know if you need anything at all. We have about 45 minutes left.",
            textZh: "这是我们该做的。放松就好，有任何需要随时说。还有大约45分钟。",
            keyPhrases: [
              { en: "that's what we're here for", zh: "这是我们该做的" },
            ],
            alternativeExpressions: [
              { textEn: "My pleasure! Just close your eyes and enjoy. We've got about 45 minutes to go. Speak up if you need anything.", textZh: "我的荣幸！闭上眼享受吧。还有大约45分钟。有需要随时说。", actionHint: "用speak up鼓励表达", frequency: "common" },
              { textEn: "It's all about making you comfortable. Relax and enjoy — we have plenty of time left. I'm here if you need anything.", textZh: "就是为了让您舒服。放松享受吧——时间还很充裕。有需要我在这儿。", actionHint: "强调时间充裕", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 商务设施 ====================
  {
    id: "hotel-business-center",
    category: "hotel",
    titleZh: "商务中心：打印复印",
    titleEn: "Business Center: Printing & Copying",
    description: "使用酒店商务中心的打印、复印和传真服务",
    otherRole: "商务中心服务员",
    otherRoleIcon: "🖨️",
    flows: [
      {
        id: "basic-printing",
        titleZh: "基础打印服务",
        titleEn: "Basic Printing",
        description: "打印文件或登机牌",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to print my boarding pass. Can I use the business center?",
            textZh: "你好，我需要打印登机牌。可以用商务中心吗？",
          },
          {
            speaker: "them",
            role: "商务中心",
            textEn: "Of course! The business center is open 24 hours. You can use the computer here or send your file to our printer via email.",
            textZh: "当然！商务中心24小时开放。可以用这里的电脑，也可以把文件通过邮件发到我们的打印机。",
            keyPhrases: [
              { en: "boarding pass", zh: "登机牌" },
              { en: "send your file via email", zh: "通过邮件发文件" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! It's open around the clock. You can hop on one of our computers or just email your file directly to the printer.", textZh: "当然！全天开放。可以用我们的电脑，也可以直接把文件发邮件到打印机。", actionHint: "用hop on表示使用", frequency: "common" },
              { textEn: "Absolutely. The business center is 24/7. Feel free to use the workstation or send documents to print by email.", textZh: "当然可以。商务中心全天候开放。随意使用工作站，或通过邮件发送文件打印。", actionHint: "用workstation替代computer", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll use the computer. Is there a charge for printing?",
            textZh: "我用电脑吧。打印收费吗？",
          },
          {
            speaker: "them",
            role: "商务中心",
            textEn: "Black and white prints are complimentary — up to 10 pages per day. Color prints are 50 cents per page.",
            textZh: "黑白打印免费——每天最多10页。彩色打印每页50美分。",
            keyPhrases: [
              { en: "black and white", zh: "黑白" },
              { en: "complimentary", zh: "免费的" },
              { en: "color prints", zh: "彩色打印" },
              { en: "per page", zh: "每页" },
            ],
            alternativeExpressions: [
              { textEn: "B&W printing is free — up to 10 pages a day. If you need color, that's 50 cents a page.", textZh: "黑白打印免费——每天最多10页。彩色的话每页50美分。", actionHint: "用B&W缩写", frequency: "common" },
              { textEn: "For hotel guests, black and white is on the house — 10 pages daily. Color copies run 50 cents each.", textZh: "住客黑白打印免费，每天10页。彩色每页50美分。", actionHint: "用on the house表示免费", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Black and white is fine for the boarding pass. Where's the printer?",
            textZh: "登机牌黑白就行。打印机在哪？",
          },
          {
            speaker: "them",
            role: "商务中心",
            textEn: "The printer is next to the computer station. Just hit print and collect your pages from the tray. Let me know if you need help logging in.",
            textZh: "打印机在电脑旁边。点打印后从出纸口取。登录需要帮忙就叫我。",
            keyPhrases: [
              { en: "hit print", zh: "点打印" },
              { en: "tray", zh: "出纸口/纸盒" },
              { en: "logging in", zh: "登录" },
            ],
            alternativeExpressions: [
              { textEn: "It's right by the computer. Click print and your pages will come out on the side. Shout if you need a hand getting logged in.", textZh: "就在电脑旁边。点打印，纸从侧面出来。登录需要帮忙就喊我。", actionHint: "用shout表示叫我", frequency: "common" },
              { textEn: "The printer is over there, next to the workstation. Just press print and pick up your papers. Need help with the login?", textZh: "打印机在那边，工作站旁边。按打印然后取纸就行。登录需要帮忙吗？", actionHint: "直接询问是否需要帮助", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What's the Wi-Fi password for the business center?",
            textZh: "商务中心的 Wi-Fi 密码是多少？",
          },
          {
            speaker: "them",
            role: "商务中心",
            textEn: "It's the same as the hotel Wi-Fi — use your room number and last name to log in. If you prefer a wired connection, there are ethernet cables at each desk.",
            textZh: "和酒店Wi-Fi一样——用房间号和姓氏登录。如果想用有线网络，每个桌上有以太网线。",
            keyPhrases: [
              { en: "wired connection", zh: "有线网络" },
              { en: "ethernet cables", zh: "以太网线" },
            ],
            alternativeExpressions: [
              { textEn: "Same Wi-Fi as the hotel — just punch in your room number and last name. Or if you want a faster connection, each desk has an ethernet hookup.", textZh: "和酒店Wi-Fi一样——输入房间号和姓氏。想要更快的话，每个桌上有以太网接口。", actionHint: "用punch in和hookup", frequency: "common" },
              { textEn: "It uses the hotel's network — log in with your room number and surname. There are also LAN cables at each workstation if you need a more stable connection.", textZh: "用的是酒店网络——房间号和姓氏登录。每个工作站也有网线，如果需要更稳定的连接。", actionHint: "用LAN cables和stable", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect, I've got it printed. Thank you!",
            textZh: "好了，打印出来了。谢谢！",
          },
        ],
      },
      {
        id: "urgent-document",
        titleZh: "紧急文件处理",
        titleEn: "Urgent Document Needs",
        description: "需要紧急扫描或传真商务文件",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I need to scan a signed contract and email it to my office urgently. Do you have a scanner?",
            textZh: "我需要紧急扫描一份签好的合同发邮件给公司。有扫描仪吗？",
          },
          {
            speaker: "them",
            role: "商务中心",
            textEn: "Yes, our multifunction printer can scan to PDF. Would you like me to help you with it?",
            textZh: "有的，我们的多功能打印机可以扫描成PDF。需要我帮您操作吗？",
            keyPhrases: [
              { en: "multifunction printer", zh: "多功能打印机" },
              { en: "scan to PDF", zh: "扫描成PDF" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely. Our all-in-one printer does scanning — it'll save it as a PDF. Want me to walk you through it?", textZh: "当然有。我们的一体机可以扫描，保存成PDF。要我带您操作一下吗？", actionHint: "用all-in-one和walk through", frequency: "common" },
              { textEn: "Yes, the printer here can scan documents to PDF. I can handle it for you if you'd like — just hand me the contract.", textZh: "有的，这里的打印机可以扫描文件成PDF。您想的话我来操作——把合同给我就行。", actionHint: "主动代为操作", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. It's a 5-page contract. Can it scan all pages into one PDF?",
            textZh: "好的。一共5页合同。能扫到一个PDF里吗？",
          },
          {
            speaker: "them",
            role: "商务中心",
            textEn: "Absolutely. I'll set it to batch scan mode. Place all pages face down in the feeder tray. It'll create one PDF file.",
            textZh: "当然。我设置成批量扫描模式。把所有页面面朝下放到进纸口。会生成一个PDF文件。",
            keyPhrases: [
              { en: "batch scan", zh: "批量扫描" },
              { en: "face down", zh: "面朝下" },
              { en: "feeder tray", zh: "进纸口" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing. I'll put it in multi-page mode. Just stack all the pages face down in the top tray and it'll scan them into one file.", textZh: "没问题。我切换到多页模式。把所有页面面朝下放到上面的托盘，会扫成一个文件。", actionHint: "用multi-page mode和stack", frequency: "common" },
              { textEn: "No problem at all. Load the pages into the document feeder — face down — and I'll set it to combine them into a single PDF.", textZh: "完全没问题。把页面放进送纸器——面朝下——我设置成合并到一个PDF。", actionHint: "用document feeder", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. Can I email it directly from the machine or do I need to use the computer?",
            textZh: "好。能直接从机器发邮件还是要用电脑？",
          },
          {
            speaker: "them",
            role: "商务中心",
            textEn: "You can enter your email address on the touchscreen and it'll send the PDF directly to you. Then you can forward it from your phone or the computer.",
            textZh: "在触摸屏上输入邮箱地址，PDF会直接发到您邮箱。然后用手机或电脑转发。",
            keyPhrases: [
              { en: "touchscreen", zh: "触摸屏" },
              { en: "forward", zh: "转发" },
            ],
            alternativeExpressions: [
              { textEn: "Just type in your email on the screen and it'll shoot the PDF right over. Then you can forward it from your phone or laptop.", textZh: "在屏幕上输入邮箱，PDF就直接发过去了。然后用手机或电脑转发就行。", actionHint: "用shoot over口语化", frequency: "common" },
              { textEn: "You can key in your email address right on the machine. It'll send the scan straight to your inbox, and from there you can forward it to your office.", textZh: "直接在机器上输入邮箱地址。扫描件会直接发到您收件箱，然后转发给公司就行。", actionHint: "用key in和inbox", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's very convenient. Is there a charge for scanning?",
            textZh: "很方便。扫描收费吗？",
          },
          {
            speaker: "them",
            role: "商务中心",
            textEn: "Scanning is free of charge for hotel guests. If you need to send an international fax, that's $3 per page.",
            textZh: "住店客人扫描免费。如果需要发国际传真，每页3美元。",
            keyPhrases: [
              { en: "free of charge", zh: "免费" },
              { en: "international fax", zh: "国际传真" },
            ],
            alternativeExpressions: [
              { textEn: "No charge for scanning — it's complimentary for all guests. Faxing overseas is 3 dollars a page if you ever need it.", textZh: "扫描不收费——所有客人免费。如果需要发国际传真，每页3美元。", actionHint: "用overseas替代international", frequency: "common" },
              { textEn: "Scanning's on us. The only thing with a fee is international fax — that's $3 per page. But email should do the trick.", textZh: "扫描免费。唯一收费的是国际传真，每页3美元。不过发邮件应该就够了。", actionHint: "用do the trick表示够用", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "No fax needed, just the scan. Thank you so much for your help!",
            textZh: "不用传真，扫描就好。非常感谢你的帮助！",
          },
        ],
      },
    ],
  },

  {
    id: "hotel-meeting-room",
    category: "hotel",
    titleZh: "会议室：预订使用",
    titleEn: "Meeting Room: Booking & Setup",
    description: "预订酒店会议室并安排设备和餐饮",
    otherRole: "会议服务协调员",
    otherRoleIcon: "📊",
    flows: [
      {
        id: "basic-meeting",
        titleZh: "小型会议预订",
        titleEn: "Small Meeting Room Booking",
        description: "预订小型会议室进行商务会议",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I need a meeting room for tomorrow afternoon. Something for about 6 people.",
            textZh: "我明天下午需要一间会议室。大约6个人用。",
          },
          {
            speaker: "them",
            role: "会议协调员",
            textEn: "We have a boardroom that seats 8 people comfortably. It's available from 1 PM to 5 PM tomorrow. The rate is $150 for a half day.",
            textZh: "我们有一间可容纳8人的会议室。明天下午1点到5点有空。半天150美元。",
            keyPhrases: [
              { en: "boardroom", zh: "会议室" },
              { en: "seats 8 people", zh: "可坐8人" },
              { en: "half day", zh: "半天" },
            ],
            alternativeExpressions: [
              { textEn: "We've got a boardroom that fits 8. It's open from 1 to 5 PM tomorrow, and it's 150 for the afternoon.", textZh: "我们有间可容纳8人的会议室。明天下午1到5点有空，下午150美元。", actionHint: "更简洁说明", frequency: "common" },
              { textEn: "Perfect timing — our 8-person conference room is free tomorrow afternoon, 1 to 5. The half-day rate is $150.", textZh: "时间正好——我们8人会议室明天下午1到5点空着。半天价150美元。", actionHint: "强调时间凑巧", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That works. Does it have a projector and a whiteboard?",
            textZh: "可以。有投影仪和白板吗？",
          },
          {
            speaker: "them",
            role: "会议协调员",
            textEn: "Yes, it comes equipped with a projector, a whiteboard, a conference phone, and HDMI cables. I'll also make sure there are markers and notepads.",
            textZh: "有的，配备了投影仪、白板、会议电话和HDMI线。我还会准备好马克笔和记事本。",
            keyPhrases: [
              { en: "projector", zh: "投影仪" },
              { en: "conference phone", zh: "会议电话" },
              { en: "HDMI cables", zh: "HDMI线" },
              { en: "markers", zh: "马克笔" },
            ],
            alternativeExpressions: [
              { textEn: "It's fully loaded — projector, whiteboard, speakerphone, HDMI hookups. I'll make sure there are pens and pads in there too.", textZh: "设备齐全——投影仪、白板、会议电话、HDMI连接。我还会确保放好笔和本子。", actionHint: "用fully loaded和hookups", frequency: "common" },
              { textEn: "Yes, the room comes with all the tech — screen, projector, conference phone, and cables. Plus, I'll put fresh markers and notepads on the table.", textZh: "有的，房间配备了所有技术设备——屏幕、投影仪、会议电话和线缆。另外桌上会放新马克笔和记事本。", actionHint: "用all the tech概括", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can we get coffee and some snacks set up?",
            textZh: "能准备咖啡和小点心吗？",
          },
          {
            speaker: "them",
            role: "会议协调员",
            textEn: "Our standard coffee break package is $12 per person — includes coffee, tea, water, and assorted pastries. Shall I add that?",
            textZh: "标准茶歇套餐每人12美元——包含咖啡、茶、水和各式点心。要加上吗？",
            keyPhrases: [
              { en: "coffee break package", zh: "茶歇套餐" },
              { en: "assorted pastries", zh: "各式点心" },
            ],
            alternativeExpressions: [
              { textEn: "We have a nice coffee service — $12 a head. You get coffee, tea, water, and a mix of pastries. Want me to add that on?", textZh: "我们有不错的茶歇服务——每人12美元。有咖啡、茶、水和各种点心。要加上吗？", actionHint: "用a head替代per person", frequency: "common" },
              { textEn: "Sure! Our standard refreshment package is 12 per person and includes hot drinks, water, and a selection of baked goods. Shall I set that up?", textZh: "当然！标准茶点套餐每人12美元，包含热饮、水和精选糕点。要安排吗？", actionHint: "用baked goods替代pastries", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, for 6 people. Can everything be ready by 12:45?",
            textZh: "好的，6个人。12:45之前能准备好吗？",
          },
          {
            speaker: "them",
            role: "会议协调员",
            textEn: "Absolutely. The room will be set up and the refreshments ready by 12:45. The total is $222 — $150 for the room plus $72 for catering. Charged to your room?",
            textZh: "当然。12:45之前会议室和茶歇都会准备好。总计222美元——房间150加餐饮72。记到房费？",
            keyPhrases: [
              { en: "set up", zh: "布置好" },
              { en: "catering", zh: "餐饮服务" },
            ],
            alternativeExpressions: [
              { textEn: "Everything will be good to go by 12:45. The total comes to $222 — that's 150 for the room and 72 for the food and drinks. Put it on your room?", textZh: "12:45之前一切准备就绪。总计222美元——房间150加餐饮72。记到房间吗？", actionHint: "用good to go表示准备好", frequency: "common" },
              { textEn: "We'll have the room ready and refreshments laid out by quarter to one. That's $222 all in — room and catering. Shall I bill your room?", textZh: "12:45前会议室和茶歇都会布置好。全部222美元——房间加餐饮。记房间账吗？", actionHint: "用laid out和quarter to one", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, room 1208. Thank you for arranging everything.",
            textZh: "好的，1208房间。谢谢安排一切。",
          },
        ],
      },
      {
        id: "tech-setup",
        titleZh: "技术设备调试",
        titleEn: "Technology Setup Help",
        description: "在会议室调试视频会议等技术设备",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I need to set up a video conference call in the meeting room. Can someone help me connect my laptop to the screen?",
            textZh: "我需要在会议室设置视频会议。能帮我把笔记本连到屏幕上吗？",
          },
          {
            speaker: "them",
            role: "IT支持",
            textEn: "Sure! Do you have an HDMI port or USB-C on your laptop? We have adapters for both.",
            textZh: "当然！您的笔记本有HDMI接口还是USB-C？两种转接头我们都有。",
            keyPhrases: [
              { en: "HDMI port", zh: "HDMI接口" },
              { en: "USB-C", zh: "USB-C接口" },
              { en: "adapters", zh: "转接头" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! What kind of port does your laptop have — HDMI or USB-C? We've got dongles for either one.", textZh: "当然！您的笔记本是什么接口——HDMI还是USB-C？两种转接头都有。", actionHint: "用dongles替代adapters", frequency: "common" },
              { textEn: "Happy to help. Is your laptop HDMI or USB-C? We keep adapters for all major connections right here.", textZh: "很乐意帮忙。您的笔记本是HDMI还是USB-C？我们这里备有各种主流接口的转接头。", actionHint: "强调备有多种转接头", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "USB-C. Also, the Wi-Fi seems slow. Is there a faster connection for the meeting room?",
            textZh: "USB-C。另外，Wi-Fi好像很慢。会议室有更快的网络吗？",
          },
          {
            speaker: "them",
            role: "IT支持",
            textEn: "I'll connect you to our dedicated conference network — it's much faster and more stable. Here's the network name and password.",
            textZh: "我帮您连专用的会议网络——速度更快也更稳定。这是网络名和密码。",
            keyPhrases: [
              { en: "dedicated conference network", zh: "专用会议网络" },
              { en: "stable", zh: "稳定的" },
            ],
            alternativeExpressions: [
              { textEn: "No worries — we have a separate high-speed network just for meetings. Way faster than the guest Wi-Fi. Here are the login details.", textZh: "没问题——我们有专门给会议用的高速网络。比客用Wi-Fi快多了。登录信息给您。", actionHint: "用way faster强调速度", frequency: "common" },
              { textEn: "I can put you on our business-grade Wi-Fi — it's reserved for conference rooms and much more reliable. Let me write down the credentials for you.", textZh: "我帮您连我们的企业级Wi-Fi——专门给会议室用的，稳定得多。我给您写下登录信息。", actionHint: "用business-grade", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How do I use the conference phone for dial-in participants?",
            textZh: "拨入的参会者怎么用会议电话？",
          },
          {
            speaker: "them",
            role: "IT支持",
            textEn: "Press the green button to get a dial tone, then dial the number. For international calls, press 9 first for an outside line, then the country code.",
            textZh: "按绿色按钮拨号，然后输入号码。国际电话先按9转外线，再输国家代码。",
            keyPhrases: [
              { en: "dial tone", zh: "拨号音" },
              { en: "outside line", zh: "外线" },
              { en: "country code", zh: "国家代码" },
            ],
            alternativeExpressions: [
              { textEn: "Hit the green button for a dial tone and then punch in the number. For overseas calls, dial 9 first to get an outside line, then the country code.", textZh: "按绿色按钮听拨号音，然后输入号码。国际电话先拨9转外线，再输国家代码。", actionHint: "用hit和punch in", frequency: "common" },
              { textEn: "Just press the green call button, wait for the tone, and dial. If it's an international number, start with 9 for an external line, then add the country code.", textZh: "按绿色通话键，等拨号音，然后拨号。如果是国际号码，先按9转外线，然后加国家代码。", actionHint: "用external line替代outside line", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. One more thing — can you test the microphone? I want to make sure remote participants can hear us clearly.",
            textZh: "明白了。还有一个——能测一下麦克风吗？我想确保远程参会者能听清。",
          },
          {
            speaker: "them",
            role: "IT支持",
            textEn: "Sure, let me do a quick test call. The microphone picks up sound from about a 10-foot radius. If you have more than 6 people, I can bring in an extra mic.",
            textZh: "好的，我打个测试电话。麦克风能接收大约10英尺范围的声音。如果超过6人，我可以加个麦克风。",
            keyPhrases: [
              { en: "test call", zh: "测试电话" },
              { en: "picks up sound", zh: "接收声音" },
              { en: "radius", zh: "半径/范围" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely — let me run a quick test. The mic covers about 10 feet in all directions. If your group is bigger than 6, I can bring an additional microphone.", textZh: "当然——我快速测试一下。麦克风覆盖大约10英尺范围。如果超过6人，我可以加个麦克风。", actionHint: "用run a test和covers", frequency: "common" },
              { textEn: "Sure, I'll make a test call right now. This mic should pick up everyone within about a 10-foot range. Need more coverage? I have extra mics.", textZh: "好，我现在打个测试电话。这个麦克风能收到10英尺内所有人的声音。需要更大范围吗？我有备用麦。", actionHint: "用coverage和extra mics", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That should be fine. Thank you for all the tech support!",
            textZh: "应该够了。谢谢技术支持！",
          },
        ],
      },
    ],
  },

  // ==================== 停车服务 ====================
  {
    id: "hotel-parking-valet",
    category: "hotel",
    titleZh: "代客泊车",
    titleEn: "Valet Parking",
    description: "使用酒店代客泊车服务，存取车辆",
    otherRole: "泊车员",
    otherRoleIcon: "🚗",
    flows: [
      {
        id: "drop-off",
        titleZh: "交车泊车",
        titleEn: "Dropping Off Your Car",
        description: "到达酒店时交车给代客泊车",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "泊车员",
            textEn: "Welcome! Would you like valet parking?",
            textZh: "欢迎！需要代客泊车吗？",
            keyPhrases: [
              { en: "valet parking", zh: "代客泊车" },
            ],
            alternativeExpressions: [
              { textEn: "Good evening! Can I park your car for you?", textZh: "晚上好！要我帮您停车吗？", actionHint: "更简洁的问候", frequency: "common" },
              { textEn: "Welcome to the hotel! Would you like us to take care of parking for you?", textZh: "欢迎来到酒店！要我们帮您停车吗？", actionHint: "用take care of", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. How much is it per night?",
            textZh: "好的。每晚多少钱？",
          },
          {
            speaker: "them",
            role: "泊车员",
            textEn: "Valet parking is $35 per night with in-and-out privileges. Just present your ticket each time you need your car.",
            textZh: "代客泊车每晚35美元，可以随时存取。每次取车出示停车票就行。",
            keyPhrases: [
              { en: "in-and-out privileges", zh: "随时存取" },
              { en: "ticket", zh: "停车票" },
            ],
            alternativeExpressions: [
              { textEn: "It's 35 a night. You can come and go as you please — just show your ticket when you need your car back.", textZh: "每晚35美元。随时可以存取——取车时出示停车票就行。", actionHint: "用come and go替代in-and-out", frequency: "common" },
              { textEn: "That'll be $35 per night, and you get unlimited access. Keep this ticket handy — you'll need it every time you pick up your car.", textZh: "每晚35美元，不限存取次数。把这张票收好——每次取车都需要。", actionHint: "用unlimited access", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do I need to take my valuables out of the car?",
            textZh: "需要把贵重物品从车里拿出来吗？",
          },
          {
            speaker: "them",
            role: "泊车员",
            textEn: "We recommend taking any valuables with you. The garage is secure, but we're not responsible for items left in the vehicle.",
            textZh: "建议带走贵重物品。车库是安全的，但我们不对留在车内的物品负责。",
            keyPhrases: [
              { en: "valuables", zh: "贵重物品" },
              { en: "secure", zh: "安全的" },
              { en: "not responsible for", zh: "不负责" },
            ],
            alternativeExpressions: [
              { textEn: "I'd suggest taking anything valuable with you. The parking area is monitored, but we can't be held liable for personal belongings left inside.", textZh: "建议带走贵重物品。停车区有监控，但我们不对留在车内的个人物品负责。", actionHint: "用liable替代responsible", frequency: "common" },
              { textEn: "It's always best to bring your valuables along. The garage is locked and has cameras, but the hotel isn't responsible for items in the car.", textZh: "最好把贵重物品随身带着。车库有锁和监控，但酒店不对车内物品负责。", actionHint: "说明安全措施", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Let me grab my bags. Here are the keys.",
            textZh: "明白了。我拿下行李。钥匙给你。",
          },
          {
            speaker: "them",
            role: "泊车员",
            textEn: "Here's your valet ticket. When you need your car, just call the valet desk or hand this ticket to the doorman. Please allow about 10 minutes for retrieval.",
            textZh: "这是您的泊车票。取车时打泊车服务电话或把票给门卫。请预留大约10分钟取车时间。",
            keyPhrases: [
              { en: "valet ticket", zh: "泊车票" },
              { en: "doorman", zh: "门卫" },
              { en: "retrieval", zh: "取车" },
              { en: "allow about 10 minutes", zh: "预留大约10分钟" },
            ],
            alternativeExpressions: [
              { textEn: "Here's your ticket — hang onto it. When you want your car, just call us or give the ticket to the bellman. It takes about 10 minutes to get it out.", textZh: "这是您的票——收好。取车时打电话或把票给行李员就行。大约10分钟取车。", actionHint: "用hang onto和bellman", frequency: "common" },
              { textEn: "Keep this ticket safe. Whenever you need the car, hand it in at the valet desk or to the door attendant. We ask for about 10 minutes' notice.", textZh: "请保管好这张票。取车时交到泊车台或给门口服务员。请提前10分钟左右通知。", actionHint: "用door attendant", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks. I'll need the car around 8 AM tomorrow.",
            textZh: "谢谢。我明天早上8点左右需要车。",
          },
          {
            speaker: "them",
            role: "泊车员",
            textEn: "I'll make a note of that. If you call down to the valet desk at 7:45, we'll have it ready and waiting. Have a great evening!",
            textZh: "我记下了。如果您7:45打电话来泊车台，我们会提前备好车。祝您晚上愉快！",
            keyPhrases: [
              { en: "call down", zh: "打电话下来" },
              { en: "have it ready", zh: "准备好" },
            ],
            alternativeExpressions: [
              { textEn: "Got it — 8 AM tomorrow. If you ring us around 7:45, your car will be warmed up and waiting at the door. Enjoy your stay!", textZh: "记下了——明早8点。7:45左右打电话来，车会热好在门口等您。祝入住愉快！", actionHint: "用warmed up增加细节", frequency: "common" },
              { textEn: "I'll note that down. Just give us a heads-up about 15 minutes before and we'll have it out front. Have a wonderful evening!", textZh: "我记下了。提前15分钟给我们打个招呼，车会在门口备好。祝您晚上愉快！", actionHint: "用heads-up表示提前通知", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "car-issue",
        titleZh: "取车问题",
        titleEn: "Car Retrieval Issue",
        description: "取车时发现问题需要处理",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like my car, please. Here's my ticket.",
            textZh: "你好，我要取车。这是停车票。",
          },
          {
            speaker: "them",
            role: "泊车员",
            textEn: "I'll have it brought up in about 10 minutes. Would you like to wait in the lobby?",
            textZh: "大约10分钟开上来。您在大厅等可以吗？",
            keyPhrases: [
              { en: "brought up", zh: "开上来" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! I'll send someone to get it now — about 10 minutes. Would you like to have a seat in the lobby while you wait?", textZh: "好的！我现在派人去取——大约10分钟。在大厅坐着等可以吗？", actionHint: "用send someone to get it", frequency: "common" },
              { textEn: "Got it. Your car should be up front in about 10 minutes. Feel free to wait inside if you'd like.", textZh: "收到。您的车大约10分钟后到门口。想在里面等也可以。", actionHint: "用up front表示门口", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure. Actually, I noticed a small scratch on the bumper that wasn't there before. Can you take a look?",
            textZh: "好的。其实，我注意到保险杠上有一道小划痕，之前没有。能看看吗？",
          },
          {
            speaker: "them",
            role: "泊车员",
            textEn: "I'm very sorry about that. Let me get my manager. We take these reports seriously and we do have cameras in the garage.",
            textZh: "非常抱歉。我叫经理过来。我们很重视这类报告，车库里有监控。",
            keyPhrases: [
              { en: "scratch", zh: "划痕" },
              { en: "bumper", zh: "保险杠" },
              { en: "cameras", zh: "监控" },
            ],
            alternativeExpressions: [
              { textEn: "I apologize for that. Let me call the duty manager right away. We have surveillance cameras throughout the garage and we take this very seriously.", textZh: "很抱歉。我马上叫值班经理。车库里有全方位监控，我们非常重视此事。", actionHint: "用duty manager和surveillance", frequency: "common" },
              { textEn: "I'm really sorry. I need to bring my supervisor over. We've got CCTV footage that we can review to see what happened.", textZh: "真的很抱歉。我得叫主管过来。我们有闭路监控可以回看发生了什么。", actionHint: "用CCTV footage", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I appreciate that. I took a photo of the car when I arrived, so I can show you the before condition.",
            textZh: "谢谢。我到达时拍了照片，可以给你看之前的状况。",
            culturalNote: "使用代客泊车前拍照记录车辆状况是个好习惯，可以避免纠纷。",
          },
          {
            speaker: "them",
            role: "经理",
            textEn: "Thank you for the photo, that's very helpful. We'll review the security footage and file a claim with our insurance. You won't be charged for the repair.",
            textZh: "感谢您的照片，很有帮助。我们会查看监控并向保险公司报案。维修费用不会让您承担。",
            keyPhrases: [
              { en: "security footage", zh: "监控录像" },
              { en: "file a claim", zh: "报案/理赔" },
              { en: "won't be charged", zh: "不会收费" },
            ],
            alternativeExpressions: [
              { textEn: "Thanks for the photo — that really helps. We'll check the camera recordings and handle the insurance paperwork. The repair cost won't fall on you.", textZh: "感谢照片——很有帮助。我们会查看监控录像并处理保险手续。维修费用不会由您承担。", actionHint: "用fall on you表示不由您承担", frequency: "common" },
              { textEn: "That photo is great evidence. We'll pull up the garage footage and take care of the insurance claim. You won't have to pay for any repairs.", textZh: "照片是很好的证据。我们会调出车库录像并处理保险理赔。您不需要支付任何维修费用。", actionHint: "用pull up和evidence", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How will the repair be handled? I'm leaving the day after tomorrow.",
            textZh: "维修怎么安排？我后天就走了。",
          },
          {
            speaker: "them",
            role: "经理",
            textEn: "If it's a rental car, we'll coordinate directly with the rental company. If it's your own vehicle, I'll give you our insurance contact and a written incident report for your records.",
            textZh: "如果是租的车，我们直接和租车公司协调。如果是您自己的车，我给您保险联系方式和书面事故报告留档。",
            keyPhrases: [
              { en: "rental car", zh: "租的车" },
              { en: "coordinate", zh: "协调" },
              { en: "written incident report", zh: "书面事故报告" },
            ],
            alternativeExpressions: [
              { textEn: "If it's a rental, we'll sort things out directly with the rental agency. If it's yours, I'll provide our insurer's details and a formal damage report.", textZh: "如果是租来的，我们直接和租车公司沟通。如果是您的车，我提供保险方联系方式和正式损伤报告。", actionHint: "用sort things out", frequency: "common" },
              { textEn: "For a rental, we'll deal with the rental company on your behalf. For a personal vehicle, you'll get our insurance info and a written report to keep on file.", textZh: "租的车我们代您和租车公司对接。自己的车我们给您保险信息和书面报告存档。", actionHint: "用on your behalf和on file", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's a rental. Thank you for handling this so professionally.",
            textZh: "是租的车。谢谢你们这么专业地处理。",
          },
        ],
      },
    ],
  },

  {
    id: "hotel-parking-self",
    category: "hotel",
    titleZh: "自助停车",
    titleEn: "Self-Parking",
    description: "使用酒店自助停车场，了解规则和费用",
    otherRole: "前台接待员",
    otherRoleIcon: "🅿️",
    flows: [
      {
        id: "basic-parking",
        titleZh: "自助停车指引",
        titleEn: "Self-Parking Guide",
        description: "了解酒店自助停车的流程和费用",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Where is the hotel parking garage?",
            textZh: "酒店停车场在哪？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "The self-parking garage entrance is on Oak Street, around the corner from the main entrance. Take a ticket at the gate.",
            textZh: "自助停车场入口在橡树街，酒店正门拐角处。在道闸处取票。",
            keyPhrases: [
              { en: "self-parking garage", zh: "自助停车场" },
              { en: "around the corner", zh: "拐角处" },
              { en: "take a ticket at the gate", zh: "在道闸取票" },
            ],
            alternativeExpressions: [
              { textEn: "It's on Oak Street — just go around the corner from the front door. Grab a ticket from the machine when you pull in.", textZh: "在橡树街——从正门拐个弯就到。开进去时从机器取票。", actionHint: "用grab和pull in", frequency: "common" },
              { textEn: "Head to Oak Street, right around the corner. You'll see the garage entrance. Just take a parking ticket at the barrier.", textZh: "走到橡树街，就在拐角。您会看到车库入口。在栏杆处取停车票就行。", actionHint: "用barrier替代gate", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much does it cost?",
            textZh: "费用怎么算？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Self-parking is $20 per night for hotel guests. Just bring your ticket to the front desk and we'll validate it for the overnight rate.",
            textZh: "住店客人自助停车每晚20美元。把票带到前台，我们盖章按过夜费率算。",
            keyPhrases: [
              { en: "validate", zh: "盖章/验证" },
              { en: "overnight rate", zh: "过夜费率" },
            ],
            alternativeExpressions: [
              { textEn: "It's 20 bucks a night for guests. Just bring your parking ticket down to the front desk so we can stamp it for the hotel rate.", textZh: "住客每晚20美元。把停车票拿到前台来我们盖章按酒店价。", actionHint: "用stamp替代validate", frequency: "common" },
              { textEn: "For hotel guests, self-parking is $20 per night. Don't forget to get your ticket validated at reception — otherwise you'll be charged the public rate.", textZh: "住客自助停车每晚20美元。别忘了到前台验票——不然会按公共费率收费。", actionHint: "提醒不验票的后果", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Are there any height restrictions? We have a large SUV.",
            textZh: "有高度限制吗？我们是大型SUV。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "The first two levels have a 6-foot-2 clearance. For taller vehicles, use Level 3, which is the open-air level with no height restriction.",
            textZh: "前两层限高6英尺2英寸。更高的车辆请停第三层，那是露天层，没有高度限制。",
            keyPhrases: [
              { en: "clearance", zh: "限高/净空高度" },
              { en: "open-air level", zh: "露天层" },
              { en: "height restriction", zh: "高度限制" },
            ],
            alternativeExpressions: [
              { textEn: "The lower floors have a clearance of about 6 foot 2. With a big SUV, you'll want to head straight to Level 3 — it's the rooftop, so no height limit.", textZh: "低楼层限高大约6英尺2。大SUV的话直接上三层——是楼顶，没有高度限制。", actionHint: "用rooftop替代open-air", frequency: "common" },
              { textEn: "Levels 1 and 2 max out at 6-2. If your SUV is taller than that, go up to the third floor — it's an uncovered deck with no ceiling.", textZh: "一层和二层最高6英尺2。如果SUV更高，上三楼——那是无顶的露天层。", actionHint: "用uncovered deck描述", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. Is the garage secure at night?",
            textZh: "好的。车库晚上安全吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, there's 24-hour security camera coverage and the garage requires a key card to enter after 10 PM. Your room key works for garage access.",
            textZh: "是的，有24小时监控，晚上10点后需要刷卡进入。您的房卡可以用于车库门禁。",
            keyPhrases: [
              { en: "security camera coverage", zh: "监控覆盖" },
              { en: "key card", zh: "门禁卡" },
              { en: "garage access", zh: "车库门禁" },
            ],
            alternativeExpressions: [
              { textEn: "Very safe. Cameras everywhere, and after 10 PM you need a key card to get in. Your room key doubles as a garage pass.", textZh: "非常安全。到处都有监控，晚10点后需要刷卡进入。房卡同时也是车库通行证。", actionHint: "用doubles as表示兼用", frequency: "common" },
              { textEn: "Absolutely — it's well secured. Round-the-clock CCTV, and the entrance locks down at 10 PM. Just use your room key to swipe in.", textZh: "绝对安全。全天候闭路监控，10点后入口上锁。用房卡刷一下就能进。", actionHint: "用locks down表示上锁", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. I'll head over there now. Thanks!",
            textZh: "好的。我现在过去停车。谢谢！",
          },
        ],
      },
      {
        id: "ev-charging",
        titleZh: "电动车充电",
        titleEn: "EV Charging",
        description: "询问酒店电动车充电设施",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Do you have electric vehicle charging stations in the parking garage?",
            textZh: "停车场有电动车充电桩吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, we have 4 Level 2 charging stations on the first level of the garage. They're available on a first-come, first-served basis.",
            textZh: "有的，车库一层有4个二级充电桩。先到先得。",
            keyPhrases: [
              { en: "Level 2 charging stations", zh: "二级充电桩" },
              { en: "first-come, first-served", zh: "先到先得" },
            ],
            alternativeExpressions: [
              { textEn: "We do! There are 4 EV chargers on the ground floor. They're Level 2, and it's first come, first served.", textZh: "有的！一楼有4个电动车充电桩，二级充电，先到先得。", actionHint: "用EV chargers缩写", frequency: "common" },
              { textEn: "Yes, we've got 4 charging spots on Level 1 of the garage. No reservations needed — just pull into any open one.", textZh: "有，车库一层有4个充电位。不用预约——直接停到空位上就行。", actionHint: "强调无需预约", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there an extra charge for using them?",
            textZh: "使用充电桩额外收费吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Charging is complimentary for hotel guests. We just ask that you move your car once it's fully charged so others can use the station.",
            textZh: "住店客人免费充电。只是请在充满后移车，方便其他人使用。",
            keyPhrases: [
              { en: "complimentary", zh: "免费的" },
              { en: "fully charged", zh: "充满电" },
              { en: "move your car", zh: "移车" },
            ],
            alternativeExpressions: [
              { textEn: "No extra cost — it's free for all hotel guests. We just ask that you relocate your car after it's done charging so the next person can use it.", textZh: "不额外收费——住客免费。充完后请把车挪开，方便下一位使用。", actionHint: "用relocate替代move", frequency: "common" },
              { textEn: "Charging is on the house. The only thing we ask is that once your battery's full, you free up the spot for other guests.", textZh: "充电免费。唯一的要求是电池充满后让出位子给其他客人。", actionHint: "用free up the spot", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What type of connector do the chargers have? I drive a Tesla.",
            textZh: "充电桩是什么接口？我开特斯拉。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "They have J1772 connectors, which work with most EVs. Tesla vehicles will need the adapter that usually comes with the car. We don't provide adapters.",
            textZh: "是J1772接口，兼容大多数电动车。特斯拉需要随车附带的转接头。我们不提供转接头。",
            keyPhrases: [
              { en: "connector", zh: "接口/插头" },
              { en: "adapter", zh: "转接头" },
            ],
            alternativeExpressions: [
              { textEn: "They use J1772 plugs — fits most EVs. For a Tesla, you'll need your own adapter. We don't have those on hand, unfortunately.", textZh: "用的是J1772插头——兼容大多数电动车。特斯拉需要自带转接头，我们这边没有。", actionHint: "用plugs和on hand", frequency: "common" },
              { textEn: "The chargers are J1772. Works with most electric cars out of the box. Tesla owners just need the adapter that comes with the vehicle.", textZh: "充电桩是J1772接口。大多数电动车直接能用。特斯拉车主需要车上自带的转接头。", actionHint: "用out of the box表示直接兼容", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have my adapter. How long does a full charge typically take?",
            textZh: "我有转接头。一般充满要多久？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "With a Level 2 charger, most EVs take about 6 to 8 hours for a full charge. Overnight is perfect. The charger will stop automatically when the battery is full.",
            textZh: "二级充电桩大多数电动车需要6到8小时充满。过夜刚好。充满后充电桩会自动停止。",
            keyPhrases: [
              { en: "6 to 8 hours", zh: "6到8小时" },
              { en: "stop automatically", zh: "自动停止" },
            ],
            alternativeExpressions: [
              { textEn: "A full charge usually takes 6 to 8 hours on Level 2. Plug in before bed and you'll be good to go in the morning. It shuts off by itself when it's full.", textZh: "二级充电充满通常要6到8小时。睡前插上早上就好了。充满会自动关闭。", actionHint: "用good to go", frequency: "common" },
              { textEn: "Expect about 6 to 8 hours for a complete charge. The station auto-stops once the battery hits 100 percent, so you don't need to worry about it overnight.", textZh: "大概6到8小时充满。充到100%后充电桩自动停止，过夜不用担心。", actionHint: "用auto-stops", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. I'll plug in tonight. Thank you!",
            textZh: "太好了。今晚就充。谢谢！",
          },
        ],
      },
    ],
  },

  // ==================== 安全相关 ====================
  {
    id: "hotel-safety-fire-alarm",
    category: "hotel",
    titleZh: "安全：火警警报",
    titleEn: "Safety: Fire Alarm",
    description: "酒店火警警报响起时的应对和与工作人员沟通",
    otherRole: "酒店安保",
    otherRoleIcon: "🚨",
    flows: [
      {
        id: "alarm-response",
        titleZh: "火警应对",
        titleEn: "Fire Alarm Response",
        description: "火警警报响起后的标准应对流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "The fire alarm is going off! What should we do?",
            textZh: "火警警报响了！我们该怎么办？",
          },
          {
            speaker: "them",
            role: "安保",
            textEn: "Please stay calm. Take the stairs — do not use the elevator. The nearest stairwell is at the end of the hallway to your left.",
            textZh: "请保持冷静。走楼梯——不要坐电梯。最近的楼梯间在走廊左边尽头。",
            keyPhrases: [
              { en: "stay calm", zh: "保持冷静" },
              { en: "take the stairs", zh: "走楼梯" },
              { en: "do not use the elevator", zh: "不要坐电梯" },
              { en: "stairwell", zh: "楼梯间" },
            ],
            alternativeExpressions: [
              { textEn: "Don't panic. Head for the stairs — never the elevator during an alarm. The exit is down the hall on your left.", textZh: "别慌。走楼梯——警报期间不要坐电梯。出口在走廊左边。", actionHint: "用head for表示前往", frequency: "common" },
              { textEn: "Everyone, please remain calm. Use the emergency staircase, not the lifts. The closest one is at the left end of this corridor.", textZh: "请大家保持冷静。走消防楼梯，不要坐电梯。最近的在走廊左端。", actionHint: "用lifts和corridor（英式）", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Should I grab my passport and valuables?",
            textZh: "要带上护照和贵重物品吗？",
          },
          {
            speaker: "them",
            role: "安保",
            textEn: "Only if you can reach them quickly. Your safety comes first. Proceed to the assembly point in the parking lot across the street.",
            textZh: "只有在能快速拿到的情况下。安全第一。请前往街对面停车场的集合点。",
            keyPhrases: [
              { en: "safety comes first", zh: "安全第一" },
              { en: "assembly point", zh: "集合点" },
            ],
            alternativeExpressions: [
              { textEn: "Only if they're right there. Don't waste time. Your safety is the priority. Head to the meeting point in the lot across the street.", textZh: "只有在手边的情况下。别浪费时间。安全是第一位的。到街对面停车场的集合点去。", actionHint: "用meeting point替代assembly point", frequency: "common" },
              { textEn: "If you can grab them in seconds, yes. Otherwise, just get out. Everyone should gather at the designated area in the parking lot opposite.", textZh: "如果几秒钟能拿到就拿。否则直接撤离。所有人到对面停车场的指定区域集合。", actionHint: "用designated area", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is this a drill or a real emergency?",
            textZh: "这是演习还是真的紧急情况？",
          },
          {
            speaker: "them",
            role: "安保",
            textEn: "We treat every alarm as real until confirmed otherwise. The fire department has been notified and is on the way.",
            textZh: "在确认之前我们把每次警报都当真处理。消防部门已通知，正在赶来。",
            keyPhrases: [
              { en: "drill", zh: "演习" },
              { en: "fire department", zh: "消防部门" },
              { en: "on the way", zh: "在路上" },
            ],
            alternativeExpressions: [
              { textEn: "We always treat it as real until we know for sure. The fire brigade has been called and they're on their way.", textZh: "在确认之前我们始终按真实情况处理。消防队已经叫了，正在赶来。", actionHint: "用fire brigade（英式）", frequency: "common" },
              { textEn: "Until we get the all-clear, we assume it's the real thing. Emergency services have been contacted and are en route.", textZh: "在得到安全确认前我们假定是真的。已联系急救服务，正在途中。", actionHint: "用all-clear和en route", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "My children are scared. How long will we be outside?",
            textZh: "我的孩子们很害怕。要在外面待多久？",
          },
          {
            speaker: "them",
            role: "安保",
            textEn: "Usually about 15 to 20 minutes. We'll let everyone know as soon as it's safe to return. We have blankets if anyone is cold.",
            textZh: "通常15到20分钟。确认安全后会立刻通知大家回去。如果冷的话我们有毯子。",
            keyPhrases: [
              { en: "safe to return", zh: "安全可以回去" },
              { en: "blankets", zh: "毯子" },
            ],
            alternativeExpressions: [
              { textEn: "Shouldn't be more than 15 or 20 minutes. We'll announce when it's clear to go back in. There are blankets here if your kids are cold.", textZh: "不会超过15到20分钟。确认安全后我们会通知大家回去。这里有毯子，孩子冷的话可以用。", actionHint: "用clear to go back in", frequency: "common" },
              { textEn: "It typically takes about 15 to 20 minutes to get the all-clear. We've got blankets and water here at the assembly point.", textZh: "通常大约15到20分钟可以确认安全。集合点这里有毯子和水。", actionHint: "提到有水", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. We'll wait at the assembly point.",
            textZh: "谢谢。我们在集合点等。",
          },
          {
            speaker: "them",
            role: "安保",
            textEn: "Good. A staff member will be at the assembly point to take a headcount. Please check in with them so we know everyone is accounted for.",
            textZh: "好的。集合点会有工作人员清点人数。请向他们报到，确保所有人都到齐。",
            keyPhrases: [
              { en: "headcount", zh: "清点人数" },
              { en: "check in", zh: "报到" },
              { en: "accounted for", zh: "到齐/确认安全" },
            ],
            alternativeExpressions: [
              { textEn: "Great. Someone from our team will be there counting heads. Make sure to let them know you're out so we can confirm everyone's safe.", textZh: "好的。我们的人会在那边清点人数。跟他们说一声，这样我们能确认每个人都安全。", actionHint: "用counting heads口语化", frequency: "common" },
              { textEn: "Perfect. A hotel staff member at the assembly point is doing a roll call. Please report in so we know your family is all out safely.", textZh: "好的。集合点有酒店员工在点名。请过去报到，让我们知道您一家人都安全撤出了。", actionHint: "用roll call和report in", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "false-alarm",
        titleZh: "误报处理",
        titleEn: "False Alarm Follow-up",
        description: "火警误报后的后续沟通",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "经理",
            textEn: "Good news — it was a false alarm caused by a malfunctioning smoke detector on the 8th floor. It's safe to return to your rooms.",
            textZh: "好消息——是8楼烟雾探测器故障引起的误报。可以安全回房间了。",
            keyPhrases: [
              { en: "false alarm", zh: "误报" },
              { en: "malfunctioning", zh: "故障" },
              { en: "smoke detector", zh: "烟雾探测器" },
            ],
            alternativeExpressions: [
              { textEn: "Great news everyone — it was just a false alarm. A faulty smoke detector on the 8th floor triggered it. You're all safe to head back to your rooms.", textZh: "好消息——只是误报。8楼一个故障的烟雾探测器触发的。可以安全回房间了。", actionHint: "用triggered表示触发", frequency: "common" },
              { textEn: "All clear! A broken smoke sensor on floor 8 set off the alarm. No actual fire. It's safe to return to your rooms now.", textZh: "解除警报！8楼一个坏了的烟雾传感器触发了警报。没有真正的火情。现在可以安全回房了。", actionHint: "用all clear开头", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a relief. We were in the middle of sleeping. Will this happen again tonight?",
            textZh: "那就好。我们正在睡觉。今晚还会再响吗？",
          },
          {
            speaker: "them",
            role: "经理",
            textEn: "We've disabled the faulty detector and a technician will replace it first thing in the morning. I sincerely apologize for the inconvenience.",
            textZh: "我们已关闭故障探测器，技术员明天一早来更换。非常抱歉给您带来不便。",
            keyPhrases: [
              { en: "disabled", zh: "关闭/禁用" },
              { en: "faulty", zh: "故障的" },
              { en: "technician", zh: "技术员" },
              { en: "first thing in the morning", zh: "明天一早" },
            ],
            alternativeExpressions: [
              { textEn: "We've switched off the broken detector, and a repair person will swap it out first thing tomorrow. I'm truly sorry for waking you.", textZh: "我们已关掉坏了的探测器，维修人员明天一早来换。真的很抱歉吵醒您。", actionHint: "用swap it out替代replace", frequency: "common" },
              { textEn: "The defective unit has been taken offline. Our maintenance crew will have a new one installed by morning. My sincere apologies for the disturbance.", textZh: "故障设备已停用。维修团队明早会安装新的。对此打扰深表歉意。", actionHint: "用taken offline", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I understand things happen. But my kids are wide awake now and it took an hour to get them to sleep.",
            textZh: "我理解意外难免。但孩子们现在完全清醒了，之前哄了一个小时才睡着。",
          },
          {
            speaker: "them",
            role: "经理",
            textEn: "I completely understand. As a gesture of goodwill, I'd like to offer you a complimentary late checkout tomorrow and breakfast for the family.",
            textZh: "完全理解。作为补偿，我想免费提供明天的延迟退房和全家早餐。",
            keyPhrases: [
              { en: "gesture of goodwill", zh: "善意表示/补偿" },
              { en: "complimentary late checkout", zh: "免费延迟退房" },
            ],
            alternativeExpressions: [
              { textEn: "I totally understand. To make up for this, I'd like to offer your family a free late checkout and breakfast on us tomorrow.", textZh: "完全理解。作为补偿，明天给您全家提供免费延迟退房和早餐。", actionHint: "用make up for和on us", frequency: "common" },
              { textEn: "I'm so sorry about that. Please accept a complimentary late checkout and breakfast for your family as our apology.", textZh: "非常抱歉。请接受免费延迟退房和全家早餐作为我们的歉意。", actionHint: "用accept和as our apology", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's very kind of you. What time can we check out?",
            textZh: "太客气了。可以几点退房？",
          },
          {
            speaker: "them",
            role: "经理",
            textEn: "You can check out as late as 2 PM instead of the usual 11 AM. I'll note it on your reservation. Again, I'm very sorry for the disruption.",
            textZh: "可以延迟到下午2点退房，而不是通常的11点。我会备注在您的预订上。再次为打扰深表歉意。",
            keyPhrases: [
              { en: "as late as 2 PM", zh: "最迟下午2点" },
              { en: "disruption", zh: "打扰/干扰" },
            ],
            alternativeExpressions: [
              { textEn: "Take your time tomorrow — you can stay until 2 PM instead of 11. I'll update your booking. Once again, I'm very sorry for the trouble.", textZh: "明天不用着急——可以待到下午2点而不是11点。我会更新您的预订。再次为此麻烦致歉。", actionHint: "用take your time", frequency: "common" },
              { textEn: "You've got until 2 o'clock to check out, no rush. I'll make sure it's in the system. I apologize again for all the disruption tonight.", textZh: "退房延到2点，不用赶。我会确保系统里有记录。再次为今晚的打扰道歉。", actionHint: "用no rush安慰", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. We appreciate you handling it well. Good night.",
            textZh: "谢谢。感谢你们处理得当。晚安。",
          },
          {
            speaker: "them",
            role: "经理",
            textEn: "Good night. If you need anything at all — warm milk for the kids, extra pillows — please don't hesitate to call the front desk.",
            textZh: "晚安。如果需要任何东西——给孩子的热牛奶、额外的枕头——请随时打前台电话。",
            keyPhrases: [
              { en: "don't hesitate to call", zh: "随时打电话" },
            ],
            alternativeExpressions: [
              { textEn: "Sleep well. If there's anything you need — hot milk, extra blankets for the kids — just ring the front desk anytime.", textZh: "好好休息。如果需要什么——热牛奶、给孩子加毯子——随时拨打前台。", actionHint: "用ring替代call", frequency: "common" },
              { textEn: "Good night, and again, my apologies. We're here around the clock — just call if you need anything at all to help the kids settle back in.", textZh: "晚安，再次道歉。我们全天在线——需要任何帮孩子们安顿的东西请打电话。", actionHint: "用settle back in", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "hotel-safety-medical",
    category: "hotel",
    titleZh: "安全：医疗紧急情况",
    titleEn: "Safety: Medical Emergency",
    description: "在酒店遇到医疗紧急情况时求助",
    otherRole: "前台接待员",
    otherRoleIcon: "🏥",
    flows: [
      {
        id: "urgent-help",
        titleZh: "紧急医疗求助",
        titleEn: "Urgent Medical Help",
        description: "同伴突然不舒服需要紧急医疗帮助",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Help! My husband is having severe chest pain. Please call an ambulance!",
            textZh: "救命！我丈夫胸口剧痛。请叫救护车！",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'm calling 911 right now. What room are you in? I'll send someone up immediately.",
            textZh: "我马上打911。您在哪个房间？我立刻派人上去。",
            keyPhrases: [
              { en: "calling 911", zh: "打911" },
              { en: "send someone up", zh: "派人上去" },
            ],
            alternativeExpressions: [
              { textEn: "I'm dialing 911 as we speak. What's your room number? Someone from our team is on the way up right now.", textZh: "我正在拨911。您房间号是？我们的人马上上去。", actionHint: "用as we speak表示此刻", frequency: "common" },
              { textEn: "911 is being called right now. Tell me your room number and I'll have our first responder up there immediately.", textZh: "现在正在打911。告诉我房间号，我们的急救人员马上上去。", actionHint: "用first responder", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Room 1208. He's conscious but in a lot of pain. Please hurry!",
            textZh: "1208房间。他还有意识但非常痛。请快一点！",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "The paramedics are on their way — estimated 5 minutes. Our security guard has a first aid kit and is heading to your room now. Is he on any medication?",
            textZh: "急救人员在路上——大约5分钟到。我们的保安带着急救箱正往您房间赶。他有在吃什么药吗？",
            keyPhrases: [
              { en: "paramedics", zh: "急救人员" },
              { en: "on their way", zh: "在路上" },
              { en: "medication", zh: "药物" },
              { en: "first aid kit", zh: "急救箱" },
            ],
            alternativeExpressions: [
              { textEn: "An ambulance is en route — about 5 minutes out. Our security is coming to your room with first aid supplies. Does your husband take any medications?", textZh: "救护车正在路上——大约5分钟到。我们的安保正带急救用品去您房间。您丈夫有在吃什么药吗？", actionHint: "用en route", frequency: "common" },
              { textEn: "EMTs should be there in 5 minutes. I've also sent our on-site first aid team to your room right away. Is he currently on any medication?", textZh: "急救员大约5分钟到。我已经派现场急救人员去您房间了。他目前有在吃什么药吗？", actionHint: "用EMTs替代paramedics", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "He takes blood pressure medication. It's in his bag. Should I give him an aspirin?",
            textZh: "他吃降压药。在他包里。要给他吃阿司匹林吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "If he's not allergic to aspirin, one regular aspirin may help. Have him chew it, not swallow it whole. Keep him sitting upright and try to keep him calm.",
            textZh: "如果他不对阿司匹林过敏，可以吃一片。让他嚼碎，不要整颗吞。让他坐直，尽量让他保持平静。",
            keyPhrases: [
              { en: "chew it", zh: "嚼碎" },
              { en: "sitting upright", zh: "坐直" },
              { en: "keep him calm", zh: "保持平静" },
            ],
            alternativeExpressions: [
              { textEn: "If he's okay with aspirin, give him one to chew — don't let him swallow it whole. Prop him up and try to keep him relaxed until help arrives.", textZh: "如果他能吃阿司匹林，给他一片嚼着吃——别整颗咽下去。把他扶坐起来，帮助他尽量放松等救援。", actionHint: "用prop him up表示扶起", frequency: "common" },
              { textEn: "One aspirin, chewed not swallowed, should help — if he's not allergic. Keep him seated and as calm as possible. The ambulance is almost there.", textZh: "如果不过敏的话，一片阿司匹林嚼碎吃会有帮助。让他坐着尽量保持平静。救护车快到了。", actionHint: "给出安慰", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay. Where will the ambulance go? Should I meet them downstairs?",
            textZh: "好的。救护车会停在哪？我需要下去接他们吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Stay with your husband. Our staff will meet the ambulance at the entrance and bring the paramedics directly to your room. We'll also hold the elevator for them.",
            textZh: "您留在丈夫身边。我们的工作人员会在入口接救护车，直接带急救人员去您房间。我们也会预留电梯。",
            keyPhrases: [
              { en: "stay with", zh: "留在…身边" },
              { en: "hold the elevator", zh: "预留电梯" },
            ],
            alternativeExpressions: [
              { textEn: "Please stay right there with him. We'll handle everything downstairs — meet the ambulance, guide the medics up, and hold the lift for them.", textZh: "请留在他身边。楼下的事我们搞定——接救护车、带医护人员上去、预留电梯。", actionHint: "用medics和lift", frequency: "common" },
              { textEn: "Don't leave his side. Our team will escort the paramedics straight to your room — we're keeping the elevator clear for them.", textZh: "别离开他身边。我们的团队会直接把急救人员带到您房间——电梯已经为他们清空了。", actionHint: "用escort和keeping clear", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much. I also need our travel insurance information — it's in the hotel safe.",
            textZh: "太感谢了。我还需要旅行保险信息——在酒店保险箱里。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'll send someone to help you access the safe after the paramedics arrive. The nearest hospital is City General, about 8 minutes away. We'll help with anything you need.",
            textZh: "急救人员到了之后，我派人帮您开保险箱。最近的医院是市综合医院，大约8分钟车程。我们会全力协助。",
            keyPhrases: [
              { en: "access the safe", zh: "打开保险箱" },
              { en: "nearest hospital", zh: "最近的医院" },
            ],
            alternativeExpressions: [
              { textEn: "Once the medical team is with him, I'll have someone come up to help you open the safe. The closest hospital is City General — about 8 minutes by ambulance. We're here for whatever you need.", textZh: "医疗团队到了之后，我派人帮您开保险箱。最近的医院是市综合医院，救护车约8分钟。您需要什么我们都在。", actionHint: "详细说明安排", frequency: "common" },
              { textEn: "I'll send someone for the safe as soon as the paramedics arrive. They'll likely take him to City General, just 8 minutes away. Please don't worry — we'll take care of everything on our end.", textZh: "急救人员一到我就派人帮您开保险箱。他们可能会送到市综合医院，只有8分钟。请别担心——我们这边会处理好一切。", actionHint: "用on our end表示我们这边", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "minor-medical",
        titleZh: "轻微医疗需求",
        titleEn: "Minor Medical Needs",
        description: "需要药品或附近诊所信息",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I have a bad headache and I forgot to pack pain medication. Do you have anything at the front desk?",
            textZh: "我头很痛，忘了带止痛药。前台有吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "We have a small first aid kit with basic over-the-counter medications. I can offer you ibuprofen or acetaminophen. Which would you prefer?",
            textZh: "我们有小急救箱，有基本的非处方药。有布洛芬和对乙酰氨基酚。您要哪种？",
            keyPhrases: [
              { en: "over-the-counter", zh: "非处方的" },
              { en: "ibuprofen", zh: "布洛芬" },
              { en: "acetaminophen", zh: "对乙酰氨基酚" },
            ],
            alternativeExpressions: [
              { textEn: "We keep some basic meds on hand. I've got ibuprofen and Tylenol. Which one do you normally take?", textZh: "我们备有一些常用药。有布洛芬和泰诺。您平时吃哪种？", actionHint: "用Tylenol品牌名", frequency: "common" },
              { textEn: "Sure, we have a few over-the-counter options — Advil or Tylenol. Any preference?", textZh: "有的，我们有几种非处方药——Advil或泰诺。有偏好吗？", actionHint: "用Advil品牌名", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Ibuprofen, please. Also, is there a pharmacy nearby? I might need cold medicine too — I think I'm coming down with something.",
            textZh: "布洛芬吧。附近有药店吗？我可能还需要感冒药——感觉要生病了。",
            culturalNote: "\'coming down with something\' 是地道表达，意思是 \'感觉要生病了\'。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "There's a CVS pharmacy two blocks north of here — open until midnight. They have a pharmacist on duty who can recommend cold remedies.",
            textZh: "北边两个街区有一家CVS药店——营业到午夜。有药剂师在岗，可以推荐感冒药。",
            keyPhrases: [
              { en: "pharmacy", zh: "药店" },
              { en: "pharmacist on duty", zh: "值班药剂师" },
              { en: "cold remedies", zh: "感冒药" },
            ],
            alternativeExpressions: [
              { textEn: "There's a CVS about a 5-minute walk north. They're open late — till midnight. The pharmacist can help you pick out something for a cold.", textZh: "往北走5分钟有家CVS。营业到午夜很晚。药剂师可以帮您选感冒药。", actionHint: "用pick out表示选", frequency: "common" },
              { textEn: "The nearest drugstore is CVS, two blocks up. Open until midnight, and they'll have everything you need. A pharmacist can recommend what to take.", textZh: "最近的药店是CVS，往前两个街区。营业到午夜，什么都有。药剂师能推荐吃什么。", actionHint: "用drugstore替代pharmacy", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "If I get worse, is there an urgent care clinic nearby?",
            textZh: "如果更严重了，附近有急诊诊所吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, there's an urgent care clinic on Main Street, about a 5-minute drive. They accept walk-ins and most travel insurance. I can call them for you.",
            textZh: "有的，主街上有一家急诊诊所，开车约5分钟。接受直接就诊和大多数旅行保险。我可以帮您打电话。",
            keyPhrases: [
              { en: "urgent care clinic", zh: "急诊诊所" },
              { en: "walk-ins", zh: "直接就诊/无需预约" },
              { en: "travel insurance", zh: "旅行保险" },
            ],
            alternativeExpressions: [
              { textEn: "There's a walk-in clinic on Main Street, just a 5-minute drive. They take most insurance, including travel policies. Want me to call ahead for you?", textZh: "主街有个免预约诊所，开车5分钟。接受大多数保险，包括旅行险。要我提前打电话吗？", actionHint: "用walk-in clinic", frequency: "common" },
              { textEn: "If things get worse, there's an urgent care center about 5 minutes away. No appointment needed, and they usually accept traveler's insurance. I can arrange a taxi.", textZh: "如果情况加重，5分钟车程有个急诊中心。不需要预约，通常接受旅行者保险。我可以安排出租车。", actionHint: "提供打车服务", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Not yet, hopefully the medicine will help. Can I also get some hot water with lemon and honey sent to my room?",
            textZh: "先不用，希望药有用。能送一杯加柠檬和蜂蜜的热水到房间吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course — I'll have room service bring it up along with some herbal tea. No charge. Feel better soon!",
            textZh: "当然——我让客房服务送上去，再配些草本茶。不收费。祝您早日康复！",
            keyPhrases: [
              { en: "no charge", zh: "不收费" },
              { en: "feel better soon", zh: "祝早日康复" },
            ],
            alternativeExpressions: [
              { textEn: "Right away — I'll send up hot water with lemon, honey, and some herbal tea. It's on the house. Hope you feel better!", textZh: "马上安排——给您送热柠檬蜂蜜水和草本茶。免费的。希望您快点好起来！", actionHint: "用on the house表示免费", frequency: "common" },
              { textEn: "Consider it done. Hot lemon water, honey, and tea coming right up — no charge. Take care of yourself and let us know if you need anything else.", textZh: "放心吧。热柠檬水、蜂蜜和茶马上送到——不收费。好好休息，还需要什么随时说。", actionHint: "用consider it done", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "You're very kind. Thank you for all the help.",
            textZh: "你人真好。谢谢这些帮助。",
          },
        ],
      },
    ],
  },

  // ==================== 投诉 ====================
  {
    id: "hotel-complaint-noise",
    category: "hotel",
    titleZh: "投诉：噪音",
    titleEn: "Complaint: Noise Disturbance",
    description: "向前台投诉隔壁房间或外部噪音",
    otherRole: "前台接待员",
    otherRoleIcon: "📞",
    flows: [
      {
        id: "neighbor-noise",
        titleZh: "邻房噪音",
        titleEn: "Noisy Neighbors",
        description: "隔壁房间太吵影响休息",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm in room 1208 and the room next door is extremely loud. It's past midnight and I can't sleep.",
            textZh: "你好，我是1208房间，隔壁房间特别吵。已经过了午夜，我睡不着。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'm very sorry to hear that. I'll send security up to speak with the guests in that room right away.",
            textZh: "非常抱歉。我马上派安保上去跟那个房间的客人沟通。",
            keyPhrases: [
              { en: "send security", zh: "派安保" },
              { en: "speak with the guests", zh: "跟客人沟通" },
            ],
            alternativeExpressions: [
              { textEn: "I apologize for the disturbance. I'll have someone from our security team go up and talk to them immediately.", textZh: "对打扰感到抱歉。我马上让安保团队的人上去跟他们谈。", actionHint: "更正式地表达", frequency: "common" },
              { textEn: "I'm so sorry about that. Let me send someone up right away to have a word with those guests.", textZh: "非常抱歉。我马上派人上去跟那些客人谈谈。", actionHint: "用have a word with", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. They've been playing loud music and shouting for over an hour.",
            textZh: "谢谢。他们放大声音乐、喊叫已经一个多小时了。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "That's unacceptable. Our quiet hours policy starts at 10 PM. Security will ask them to keep it down. If it continues, we have the right to ask them to leave.",
            textZh: "这不可接受。我们的安静时段从晚10点开始。安保会要求他们安静。如果继续，我们有权让他们离开。",
            keyPhrases: [
              { en: "quiet hours", zh: "安静时段" },
              { en: "keep it down", zh: "安静下来" },
              { en: "ask them to leave", zh: "让他们离开" },
            ],
            alternativeExpressions: [
              { textEn: "That's absolutely not okay. We enforce quiet hours from 10 PM. Security will tell them to quiet down, and if they don't, they'll be asked to leave the hotel.", textZh: "这完全不行。我们从晚10点开始执行安静规定。安保会让他们安静，不听的话就请他们离开酒店。", actionHint: "用enforce表示执行", frequency: "common" },
              { textEn: "I understand your frustration. Our noise policy kicks in at 10 PM. We'll give them one warning, and if they don't comply, they'll be removed.", textZh: "我理解您的不满。我们的噪音规定从10点生效。我们会警告一次，不配合就让他们走。", actionHint: "用kicks in和comply", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I hope it works. I have an early flight tomorrow and really need to sleep.",
            textZh: "希望有用。我明天有早班飞机，真的需要睡觉。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I understand completely. If the noise doesn't stop within 15 minutes, call us back and we can move you to a quieter room on a different floor.",
            textZh: "完全理解。如果15分钟内噪音不停，再打来，我们可以帮您换到其他楼层安静的房间。",
            keyPhrases: [
              { en: "move you to", zh: "帮您换到" },
              { en: "quieter room", zh: "安静的房间" },
              { en: "different floor", zh: "其他楼层" },
            ],
            alternativeExpressions: [
              { textEn: "Of course. If it's still noisy after 15 minutes, just ring us and we'll switch you to a peaceful room on another floor right away.", textZh: "当然。如果15分钟后还吵，打电话来我们马上给您换到其他楼层安静的房间。", actionHint: "用switch和peaceful", frequency: "common" },
              { textEn: "If the problem persists, give us a call and we'll relocate you to a quieter part of the hotel. No hassle at all.", textZh: "如果问题持续，打电话来我们会帮您搬到酒店更安静的区域。完全不麻烦。", actionHint: "用relocate和no hassle", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be great as a backup plan. I don't want to pack up and move if I don't have to.",
            textZh: "作为备选方案很好。不到万不得已不想收拾搬房。",
            culturalNote: "\'backup plan\' 是 \'备选方案\'，常用于日常和商务场合。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Understood. If we do need to move you, a bellman will assist with your luggage. I've also set a wake-up call for you at 5:30 AM as a precaution. Is that the right time?",
            textZh: "明白。如果需要搬房，行李员会协助搬行李。我也预防性地设了5:30的叫醒服务。时间对吗？",
            keyPhrases: [
              { en: "bellman", zh: "行李员" },
              { en: "precaution", zh: "预防措施" },
            ],
            alternativeExpressions: [
              { textEn: "No problem. If a move is needed, we'll send someone to help with your bags. I've also set a wake-up call for 5:30 just in case. Does that time work?", textZh: "没问题。如果需要搬房，会派人帮您拿行李。以防万一我也设了5:30叫醒服务。这个时间可以吗？", actionHint: "用just in case", frequency: "common" },
              { textEn: "If we do switch rooms, a porter will help carry everything. And as a precaution, I've scheduled your wake-up call for 5:30 AM. Shall I adjust the time?", textZh: "如果换房的话，搬运员会帮忙搬所有东西。作为预防，我安排了5:30叫醒。需要调整时间吗？", actionHint: "用porter和scheduled", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "construction-noise",
        titleZh: "施工噪音",
        titleEn: "Construction Noise",
        description: "酒店附近施工导致噪音干扰",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "There's been construction noise outside my window since 7 AM. I wasn't told about this when I checked in.",
            textZh: "从早上7点开始窗外就有施工噪音。入住时没人告诉我。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I sincerely apologize. There's a building project next door that we were just notified about yesterday. I should have informed you at check-in.",
            textZh: "非常抱歉。隔壁有一个建筑工程，我们昨天才收到通知。入住时应该告诉您的。",
            keyPhrases: [
              { en: "building project", zh: "建筑工程" },
              { en: "notified about", zh: "收到通知" },
            ],
            alternativeExpressions: [
              { textEn: "I'm very sorry about that. There's construction going on next door — we only learned about it yesterday ourselves. I should have mentioned it when you checked in.", textZh: "非常抱歉。隔壁在施工——我们自己也是昨天才知道。入住时应该告诉您的。", actionHint: "坦诚说明情况", frequency: "common" },
              { textEn: "My apologies — that's a new building going up next door. We just got word about it yesterday. It was an oversight not to inform you at check-in.", textZh: "抱歉——隔壁在盖新楼。我们昨天才得到消息。入住时没告诉您是我们的疏忽。", actionHint: "用oversight表示疏忽", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm here for three more nights. I can't deal with jackhammers every morning.",
            textZh: "我还要住三晚。每天早上电钻声受不了。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'd like to move you to a room on the opposite side of the hotel, facing the garden. It's quieter and actually a higher room category. No extra charge.",
            textZh: "我想给您换到酒店另一侧面向花园的房间。更安静，实际上还是更高级别的房型。不加收费用。",
            keyPhrases: [
              { en: "opposite side", zh: "另一侧" },
              { en: "higher room category", zh: "更高级别房型" },
            ],
            alternativeExpressions: [
              { textEn: "Let me switch you to a room on the other side of the building with a garden view. It's actually an upgrade — no extra cost to you.", textZh: "我给您换到大楼另一侧面向花园的房间。其实是升级——不多收费。", actionHint: "用upgrade", frequency: "common" },
              { textEn: "I can put you in a room facing the garden, away from the construction. It's a better room category and there'll be no additional charge.", textZh: "我可以安排您住花园方向的房间，远离施工。是更好的房型，不另外收费。", actionHint: "强调远离施工", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That would help a lot. What about compensation for today? I couldn't sleep in and my whole morning was ruined.",
            textZh: "那帮助很大。今天的补偿呢？我没法睡懒觉，整个上午都毁了。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Absolutely fair. I'll apply a 30% discount on tonight's room rate and add complimentary dinner for two at our restaurant. Would that work for you?",
            textZh: "完全合理。我给今晚房费打7折，再加上我们餐厅的免费双人晚餐。可以吗？",
            keyPhrases: [
              { en: "30% discount", zh: "7折/30%折扣" },
              { en: "room rate", zh: "房费" },
              { en: "complimentary dinner", zh: "免费晚餐" },
            ],
            alternativeExpressions: [
              { textEn: "That's completely fair. I'll knock 30 percent off tonight's rate and throw in a free dinner for two at our restaurant. Does that sound reasonable?", textZh: "完全合理。今晚房费减30%，再送我们餐厅的双人免费晚餐。这样可以吗？", actionHint: "用knock off和throw in", frequency: "common" },
              { textEn: "You're right. Let me give you 30 percent off tonight and two complimentary dinner vouchers. It's the least we can do.", textZh: "您说得对。今晚打7折，再给您两张免费晚餐券。这是我们应该做的。", actionHint: "用vouchers和the least we can do", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I appreciate the gesture. When can I move to the new room?",
            textZh: "感谢你们的诚意。什么时候可以搬到新房间？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "The room is ready now. I'll have a bellman come up to help you move. Your new room is 2415 — same floor plan but garden view. Much more peaceful.",
            textZh: "房间已经准备好了。我让行李员上去帮您搬。新房间是2415——相同户型但是花园景。安静多了。",
            keyPhrases: [
              { en: "floor plan", zh: "户型" },
              { en: "garden view", zh: "花园景" },
              { en: "peaceful", zh: "安静的" },
            ],
            alternativeExpressions: [
              { textEn: "It's all ready! I'll get a bellman to help you move. Your new room is 2415 — same layout, but it overlooks the garden. Much quieter over there.", textZh: "都准备好了！我让行李员帮您搬。新房间2415——同样的布局，但面向花园。那边安静多了。", actionHint: "用overlooks", frequency: "common" },
              { textEn: "The room is good to go. Let me send someone up with your new key. Room 2415 — it's the same type of room but with a lovely garden view. You'll sleep much better.", textZh: "房间已经好了。我派人拿新钥匙上去。2415房间——同类型但有漂亮的花园景。您会睡得好多了。", actionHint: "用good to go和lovely", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you for resolving this so quickly.",
            textZh: "谢谢这么快解决问题。",
          },
        ],
      },
    ],
  },

  {
    id: "hotel-complaint-cleanliness",
    category: "hotel",
    titleZh: "投诉：清洁问题",
    titleEn: "Complaint: Cleanliness Issue",
    description: "房间清洁不到位需要投诉和处理",
    otherRole: "前台接待员",
    otherRoleIcon: "🧹",
    flows: [
      {
        id: "dirty-room",
        titleZh: "房间不干净",
        titleEn: "Room Not Clean",
        description: "入住后发现房间清洁有问题",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I just checked into my room and it hasn't been properly cleaned. There are used towels on the floor and the bed sheets look like they haven't been changed.",
            textZh: "我刚入住，房间没有打扫干净。地上有用过的毛巾，床单看起来没换。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'm terribly sorry about that. That's completely unacceptable. I'll send housekeeping to your room immediately. Would you prefer to wait in the lobby while they clean?",
            textZh: "非常抱歉。这完全不可接受。我马上派客房部去您房间。您愿意在大厅等打扫好吗？",
            keyPhrases: [
              { en: "unacceptable", zh: "不可接受" },
              { en: "housekeeping", zh: "客房部" },
            ],
            alternativeExpressions: [
              { textEn: "Oh, I'm so sorry about that. That should never happen. I'll get our cleaning team up there right now. Can I offer you a coffee in the lobby while they fix it?", textZh: "太抱歉了。这绝不应该发生。我马上派清洁团队上去。打扫期间在大厅请您喝杯咖啡好吗？", actionHint: "提供咖啡等待", frequency: "common" },
              { textEn: "I'm really sorry — that's not the standard we hold ourselves to. Housekeeping is on the way up. Would you like to relax in the lounge until it's sorted?", textZh: "真的很抱歉——这不是我们的标准。客房部正在上去。在休息厅等处理好可以吗？", actionHint: "用sorted表示处理好", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Actually, I'd rather just get a different room if possible. I don't feel comfortable staying in this one now.",
            textZh: "其实如果可以的话，我想换个房间。在这个房间我不太放心了。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course. Let me find you a freshly cleaned room right now. I'll personally inspect it before giving you the key.",
            textZh: "当然。我现在就给您找一间刚打扫好的房间。给您钥匙前我会亲自检查。",
            keyPhrases: [
              { en: "freshly cleaned", zh: "刚打扫好的" },
              { en: "personally inspect", zh: "亲自检查" },
            ],
            alternativeExpressions: [
              { textEn: "I totally understand. Let me find a clean room for you right away. I'll check it myself before handing over the key.", textZh: "完全理解。我马上给您找一间干净的房间。给您钥匙之前我亲自检查。", actionHint: "用handing over表示交钥匙", frequency: "common" },
              { textEn: "Absolutely — I wouldn't want to stay in that room either. Give me a moment to find a freshly prepared room. I'll make sure it meets our standards before you move in.", textZh: "当然——换我也不想住那个房间。给我一会儿找间刚准备好的。确保达标再让您入住。", actionHint: "表示感同身受", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. I'm also worried about hygiene. Can you make sure the bathroom is thoroughly sanitized?",
            textZh: "谢谢。我也担心卫生。能确保浴室彻底消毒吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Absolutely. I've found room 1412 — it was cleaned and inspected this morning. I'll walk you up and you can check it yourself before settling in.",
            textZh: "当然。我找到了1412房间——今早打扫并检查过。我陪您上去，您自己看看满意再入住。",
            keyPhrases: [
              { en: "inspected", zh: "检查过的" },
              { en: "settling in", zh: "入住/安顿" },
            ],
            alternativeExpressions: [
              { textEn: "I've got room 1412 for you — it was thoroughly cleaned and checked this morning. Let me take you up so you can have a look before you unpack.", textZh: "给您找到了1412——今早彻底打扫和检查过。我带您上去看看，满意再收拾。", actionHint: "用unpack表示收拾", frequency: "common" },
              { textEn: "Room 1412 is ready — fresh clean this morning and double-checked. I'll walk up with you so you can give it the once-over before moving in.", textZh: "1412房间好了——今早做了全新清洁和双重检查。我陪您上去过目一下再入住。", actionHint: "用once-over表示过目", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I appreciate that. Will you also look into why this happened?",
            textZh: "感谢。也能调查一下为什么会这样吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Definitely. I'll report this to our housekeeping manager. As an apology, I'm removing tonight's room charge from your bill. This shouldn't happen at our hotel.",
            textZh: "一定会。我会向客房部经理汇报。作为歉意，今晚房费免单。这在我们酒店不应该发生。",
            keyPhrases: [
              { en: "removing the charge", zh: "免单" },
              { en: "shouldn't happen", zh: "不应该发生" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely. I'll flag this with our head housekeeper. And tonight is on the house — I'm waiving the room charge completely. This isn't the experience you should have.", textZh: "一定的。我会向客房部负责人反映。今晚免单——房费全免。您不应该有这样的体验。", actionHint: "用flag和waiving", frequency: "common" },
              { textEn: "I'll look into it personally and speak with the team. To make it right, I'm taking tonight's charge off your bill entirely. We hold ourselves to a higher standard.", textZh: "我会亲自调查并和团队谈。为了弥补，今晚房费全部减免。我们对自己有更高的标准。", actionHint: "用make it right", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's fair. Let's go see the new room.",
            textZh: "很合理。那去看看新房间吧。",
          },
        ],
      },
      {
        id: "housekeeping-complaint",
        titleZh: "每日清洁投诉",
        titleEn: "Daily Housekeeping Complaint",
        description: "住了几天后对日常清洁质量不满",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I've been here for three days and the housekeeping quality has been inconsistent. Today they didn't replace the shampoo, and yesterday the trash wasn't emptied.",
            textZh: "我住了三天了，打扫质量不稳定。今天洗发水没补，昨天垃圾桶没倒。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I apologize for the inconsistency. I'll notify the housekeeping supervisor and assign a senior housekeeper to your room for the remainder of your stay.",
            textZh: "为质量不稳定道歉。我会通知客房主管，安排资深清洁员负责您的房间直到退房。",
            keyPhrases: [
              { en: "inconsistency", zh: "不稳定/不一致" },
              { en: "housekeeping supervisor", zh: "客房主管" },
              { en: "senior housekeeper", zh: "资深清洁员" },
              { en: "remainder of your stay", zh: "剩余入住期间" },
            ],
            alternativeExpressions: [
              { textEn: "I'm sorry about the uneven service. I'll bring this up with the housekeeping team leader and make sure an experienced cleaner looks after your room for the rest of your stay.", textZh: "为质量不一致道歉。我会向客房组长反映，确保有经验的清洁员照管您的房间直到退房。", actionHint: "用uneven service和looks after", frequency: "common" },
              { textEn: "That shouldn't happen. I'll have a word with the cleaning team and assign someone specifically to your room going forward. You'll see a big improvement.", textZh: "不应该这样。我会跟清洁团队谈，专门指派人负责您的房间。会有很大改善的。", actionHint: "用going forward", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Also, I put the 'Do Not Disturb' sign out yesterday morning, but housekeeping still knocked and tried to come in.",
            textZh: "而且，昨天早上我挂了「请勿打扰」牌，但清洁员还是敲门想进来。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "That's a serious policy violation. Our staff must always respect the Do Not Disturb sign. I'll address this with the team directly. Is there a preferred time for cleaning?",
            textZh: "这违反了政策。我们的员工必须尊重「请勿打扰」牌。我会直接跟团队沟通。您希望什么时间打扫？",
            keyPhrases: [
              { en: "policy violation", zh: "违反政策" },
              { en: "Do Not Disturb", zh: "请勿打扰" },
              { en: "preferred time", zh: "偏好的时间" },
            ],
            alternativeExpressions: [
              { textEn: "That's not okay at all. The DND sign should always be respected — no exceptions. I'll deal with it directly. Is there a time of day that works best for housekeeping to come?", textZh: "这完全不行。请勿打扰牌必须被尊重——没有例外。我会直接处理。您希望什么时间来打扫？", actionHint: "用DND缩写", frequency: "common" },
              { textEn: "I'm very sorry — that goes against our rules. Staff must never enter when the sign is up. I'll make sure this doesn't happen again. When would you like them to clean?", textZh: "非常抱歉——这违反了我们的规定。挂牌时员工绝不能进入。我保证不会再发生。您想什么时候来打扫？", actionHint: "用when the sign is up", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Between 1 and 3 PM would be best. We're usually out sightseeing then.",
            textZh: "下午1点到3点最好。那时我们通常出去观光。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'll note that in your preferences. Housekeeping will come between 1 and 3 PM only. I've also added extra toiletries and a fresh fruit basket to your room as an apology.",
            textZh: "我记下了。客房部只在1到3点之间来。我还送了额外的洗漱用品和新鲜水果篮到您房间表示歉意。",
            keyPhrases: [
              { en: "preferences", zh: "偏好设置" },
              { en: "toiletries", zh: "洗漱用品" },
              { en: "fruit basket", zh: "水果篮" },
            ],
            alternativeExpressions: [
              { textEn: "Noted — cleaning only between 1 and 3 PM from now on. I'm also sending up extra bathroom supplies and a fruit basket to make up for the trouble.", textZh: "记下了——从现在起只在1到3点之间打扫。另外送些额外的浴室用品和水果篮补偿一下。", actionHint: "用from now on", frequency: "common" },
              { textEn: "I'll put that in your room profile — 1 to 3 PM housekeeping only. And as a gesture of apology, you'll find some complimentary toiletries and fresh fruit waiting for you.", textZh: "我会记到您的房间档案里——只在1到3点打扫。作为歉意，给您准备了免费洗漱用品和新鲜水果。", actionHint: "用room profile", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. One more thing — can we get extra pillows? There are only two and we could really use four.",
            textZh: "谢谢。还有一件事——能多给几个枕头吗？只有两个，我们需要四个。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'll have two extra pillows brought up right away. Soft, medium, or firm? We have a pillow menu.",
            textZh: "马上送两个枕头上去。软的、中等还是硬的？我们有枕头选单。",
            keyPhrases: [
              { en: "pillow menu", zh: "枕头选单" },
              { en: "soft, medium, or firm", zh: "软的、中等、硬的" },
            ],
            alternativeExpressions: [
              { textEn: "Coming right up! We actually have a pillow selection — would you like soft, medium, or firm ones?", textZh: "马上送！我们其实有枕头可选——要软的、中等的还是硬的？", actionHint: "用pillow selection", frequency: "common" },
              { textEn: "No problem — I'll get two more up to your room. We offer different types: soft down, medium, or firm memory foam. Your pick!", textZh: "没问题——马上送两个上去。我们有不同类型：软羽绒、中等或硬记忆棉。随您选！", actionHint: "具体说明材质", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "One soft and one firm, please. Thank you for addressing everything.",
            textZh: "一个软的一个硬的。谢谢处理这些问题。",
          },
        ],
      },
    ],
  },

  {
    id: "hotel-complaint-billing",
    category: "hotel",
    titleZh: "投诉：账单问题",
    titleEn: "Complaint: Billing Dispute",
    description: "发现账单上有不正确的收费需要申诉",
    otherRole: "前台经理",
    otherRoleIcon: "💰",
    flows: [
      {
        id: "wrong-charge",
        titleZh: "错误收费",
        titleEn: "Incorrect Charge",
        description: "账单上出现未使用的服务收费",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I'd like to review my bill. There are some charges I don't recognize.",
            textZh: "我想看看账单。有些收费我不认识。",
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn: "Of course. Let me pull up your folio. Which charges look incorrect?",
            textZh: "当然。我调出您的账单。哪些费用看起来不对？",
            keyPhrases: [
              { en: "pull up your folio", zh: "调出账单" },
              { en: "charges", zh: "费用" },
              { en: "incorrect", zh: "不正确的" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, let me bring up your account. Can you point out which charges don't look right?", textZh: "好的，我调出您的账户。能指出哪些费用不对吗？", actionHint: "用bring up和account", frequency: "common" },
              { textEn: "Of course. I'll pull your billing details up right now. Tell me which items seem off.", textZh: "当然。我现在调出您的账单明细。告诉我哪些项目看起来不对。", actionHint: "用seem off表示不对", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "There's a $45 minibar charge on March 10th, but I didn't use the minibar at all. I didn't even touch anything in it.",
            textZh: "3月10日有一笔45美元的迷你吧费用，但我根本没用过迷你吧。里面的东西我碰都没碰。",
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn: "I see the charge here. Sometimes the sensors in the minibar register a charge if items are moved. Let me have housekeeping verify the contents. I'll remove it if everything is still there.",
            textZh: "我看到了。有时迷你吧的传感器在物品被移动时会自动记费。我让客房部核实。如果东西都在就删除。",
            keyPhrases: [
              { en: "sensors", zh: "传感器" },
              { en: "register a charge", zh: "记录费用" },
              { en: "verify the contents", zh: "核实内容" },
            ],
            alternativeExpressions: [
              { textEn: "I see that charge. The minibar has automatic sensors that can trigger a fee if something is even slightly moved. Let me get housekeeping to check — if nothing's missing, I'll take it off.", textZh: "我看到了。迷你吧有自动传感器，东西稍微动一下就可能触发扣费。我让客房部查一下——如果没少就删除。", actionHint: "用trigger和take it off", frequency: "common" },
              { textEn: "Those minibar charges are sensor-based and can be a bit glitchy. I'll send someone to verify the inventory. If it's all there, the charge comes right off.", textZh: "迷你吧费用是传感器自动记录的，有时不太准。我派人核对库存。如果都在就删掉。", actionHint: "用glitchy表示不太准", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I also see a 'resort fee' of $30 per night. Nobody mentioned this when I booked.",
            textZh: "我还看到每晚30美元的「度假费」。预订时没人提到这个。",
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn: "The resort fee covers pool access, gym, and Wi-Fi. It's listed in the booking terms, but I understand it can be surprising. Let me see what I can do.",
            textZh: "度假费包含泳池、健身房和Wi-Fi。预订条款里有列出，但我理解这可能让人意外。我看看能怎么处理。",
            keyPhrases: [
              { en: "resort fee", zh: "度假费" },
              { en: "booking terms", zh: "预订条款" },
            ],
            alternativeExpressions: [
              { textEn: "The resort fee is for amenities like the pool, gym, and Wi-Fi. It's in the fine print when you book, but I know it can be a surprise. Let me see what options I have.", textZh: "度假费是泳池、健身房和Wi-Fi的费用。预订时的小字里写了，但我知道这可能让人意外。我看看有什么办法。", actionHint: "用fine print表示小字条款", frequency: "common" },
              { textEn: "That fee covers access to our pool, fitness center, and internet. It was disclosed in the reservation terms, though I understand the frustration. Let me look into it for you.", textZh: "这笔费用包含泳池、健身中心和网络。预订条款里有说明，不过我理解您的不满。我帮您想想办法。", actionHint: "用disclosed", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I didn't even use the pool or gym. Can you waive it?",
            textZh: "我泳池和健身房都没用过。能免掉吗？",
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn: "I can't waive it entirely as it's a mandatory fee, but I can apply a 50% discount as a one-time courtesy since it wasn't clearly communicated to you at check-in.",
            textZh: "整个免除不行因为是强制性费用，但鉴于入住时没有清楚告知，作为一次性礼遇可以给您打5折。",
            keyPhrases: [
              { en: "mandatory fee", zh: "强制性费用" },
              { en: "one-time courtesy", zh: "一次性礼遇" },
              { en: "clearly communicated", zh: "清楚告知" },
            ],
            alternativeExpressions: [
              { textEn: "It's a required fee so I can't remove it completely, but since it wasn't explained at check-in, I'm happy to cut it in half as a goodwill gesture.", textZh: "这是必收的费用不能完全取消，但因为入住时没说清楚，我很乐意减半作为善意。", actionHint: "用cut it in half", frequency: "common" },
              { textEn: "Unfortunately it's a mandatory charge, but given the miscommunication, I'll give you 50 percent off as a one-time exception.", textZh: "很遗憾这是强制性收费，但考虑到沟通失误，我给您打5折作为一次性例外。", actionHint: "用miscommunication和exception", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the 50% off. Please also remove the minibar charge. Can I get an updated bill?",
            textZh: "那就打5折吧。请也把迷你吧费用删掉。能给我更新后的账单吗？",
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn: "Done. The minibar charge is removed, and I've applied the resort fee discount. Here's your updated bill. The new total is $428 instead of $533.",
            textZh: "好了。迷你吧费用已删除，度假费折扣已应用。这是更新后的账单。新的总额是428美元而不是533美元。",
            keyPhrases: [
              { en: "updated bill", zh: "更新后的账单" },
              { en: "new total", zh: "新的总额" },
            ],
            alternativeExpressions: [
              { textEn: "All taken care of. The minibar charge is gone and the resort fee is halved. Your revised total is $428 — down from $533. Here's the new printout.", textZh: "都处理好了。迷你吧费用取消，度假费减半。修正后总额428美元，原来是533美元。这是新打印的。", actionHint: "用revised total", frequency: "common" },
              { textEn: "Everything's been adjusted. I've removed the minibar charge and applied the 50% discount on the resort fee. New total: 428, saving you $105. Here's your corrected bill.", textZh: "全部调整好了。迷你吧费用删除，度假费打了5折。新总额428美元，省了105美元。这是更正后的账单。", actionHint: "具体说出节省金额", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "double-charge",
        titleZh: "重复扣费",
        titleEn: "Double Charge Issue",
        description: "信用卡被重复扣费需要处理",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I just checked my credit card statement and I've been charged twice for the same room service order on March 9th.",
            textZh: "我刚看了信用卡账单，3月9日的客房送餐被扣了两次。",
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn: "Let me look into that right away. Can you tell me the amounts you see on your statement?",
            textZh: "我马上查。您账单上看到的金额是多少？",
            keyPhrases: [
              { en: "credit card statement", zh: "信用卡账单" },
              { en: "look into", zh: "调查/查看" },
            ],
            alternativeExpressions: [
              { textEn: "I'll check on that immediately. Can you show me the two charges on your statement?", textZh: "我马上查。能让我看看您账单上的两笔扣费吗？", actionHint: "更简洁地回应", frequency: "common" },
              { textEn: "I'm sorry to hear that. Let me investigate right away. What amounts are showing up on your card?", textZh: "很抱歉听到这个。我马上调查。您卡上显示的金额是多少？", actionHint: "用investigate", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Two charges of $43 each. I only ordered room service once that evening.",
            textZh: "两笔各43美元。那天晚上我只点了一次客房送餐。",
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn: "You're right — I can see a duplicate transaction in our system. It looks like a processing error. I'll issue a refund for the extra charge immediately.",
            textZh: "您说得对——我在系统里看到一笔重复交易。看起来是处理错误。我立刻退还多收的费用。",
            keyPhrases: [
              { en: "duplicate transaction", zh: "重复交易" },
              { en: "processing error", zh: "处理错误" },
              { en: "issue a refund", zh: "退款" },
            ],
            alternativeExpressions: [
              { textEn: "I can confirm it's a double charge on our end. Looks like a system glitch. I'll process the refund for the extra $43 right now.", textZh: "我确认是我们这边重复扣款了。看起来是系统故障。我现在就处理退还多收的43美元。", actionHint: "用system glitch", frequency: "common" },
              { textEn: "Yes, I see the duplicate here — that was our mistake. I'll reverse the extra charge and get that $43 back to you immediately.", textZh: "是的，我看到重复了——是我们的失误。我会撤销多余的扣款，马上把43美元退给您。", actionHint: "用reverse表示撤销", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How long will the refund take to appear on my card?",
            textZh: "退款多久能到我的卡上？",
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn: "The refund will be processed today, but it typically takes 3 to 5 business days to appear on your statement, depending on your bank.",
            textZh: "退款今天处理，但通常需要3到5个工作日才能在账单上显示，取决于您的银行。",
            keyPhrases: [
              { en: "3 to 5 business days", zh: "3到5个工作日" },
              { en: "depending on your bank", zh: "取决于银行" },
            ],
            alternativeExpressions: [
              { textEn: "I'll put the refund through today. It usually takes 3 to 5 working days to show up, though it depends on your card company.", textZh: "今天就办退款。通常3到5个工作日到账，具体取决于您的信用卡公司。", actionHint: "用put through和card company", frequency: "common" },
              { textEn: "We're processing it right now. Most banks reflect it within 3 to 5 business days, but some take up to a week.", textZh: "我们正在处理。大多数银行3到5个工作日内会显示，有的可能需要一周。", actionHint: "用reflect表示显示", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I get a receipt or confirmation of the refund? I want to have it for my records.",
            textZh: "能给我退款收据或确认吗？我想留档。",
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn: "Absolutely. I'll print a refund confirmation with the transaction ID and my name on it. You can also contact us if the refund doesn't appear within 7 days.",
            textZh: "当然。我打印退款确认单，上面有交易ID和我的名字。如果7天内退款未到可以联系我们。",
            keyPhrases: [
              { en: "refund confirmation", zh: "退款确认单" },
              { en: "transaction ID", zh: "交易ID" },
            ],
            alternativeExpressions: [
              { textEn: "Of course. I'll print out a receipt with the refund details and reference number. If it's not back on your card in a week, just call us with that number.", textZh: "当然。我打印一张退款收据，上面有退款细节和参考号。如果一周内没到账，拿这个号码打电话给我们。", actionHint: "用reference number", frequency: "common" },
              { textEn: "Sure — I'll give you a signed copy with the transaction ID for your records. Don't hesitate to reach out if it doesn't appear within 7 days.", textZh: "好的——我给您一份签字的副本，有交易ID留档。如果7天内没出现请随时联系我们。", actionHint: "用signed copy", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you for sorting this out. Mistakes happen, but I'm glad it was resolved quickly.",
            textZh: "谢谢处理。失误难免，但很高兴快速解决了。",
          },
        ],
      },
    ],
  },

  // ==================== 延住与换房 ====================
  {
    id: "hotel-extend-stay",
    category: "hotel",
    titleZh: "延长住宿",
    titleEn: "Extending Your Stay",
    description: "需要延长酒店住宿天数",
    otherRole: "前台接待员",
    otherRoleIcon: "📅",
    flows: [
      {
        id: "basic-extend",
        titleZh: "基础延住",
        titleEn: "Basic Stay Extension",
        description: "顺利延长住宿",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to extend my stay. I was supposed to check out tomorrow, but I need two more nights.",
            textZh: "你好，我想延长住宿。本来明天退房，但需要再住两晚。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Let me check availability for your room type... Good news! Your room is available for two more nights. The rate will be $189 per night, same as your current rate.",
            textZh: "我查一下同房型的空房……好消息！您的房间还可以住两晚。费率和当前一样，每晚189美元。",
            keyPhrases: [
              { en: "check availability", zh: "查空房" },
              { en: "room type", zh: "房型" },
              { en: "current rate", zh: "当前费率" },
            ],
            alternativeExpressions: [
              { textEn: "Let me see what's available... Great — your room is open for two more nights. Same rate, $189 a night.", textZh: "我看看有没有空房……太好了——您的房间还能住两晚。同样价格，每晚189美元。", actionHint: "简洁确认", frequency: "common" },
              { textEn: "One moment while I check... You're in luck! We can keep you in the same room for another two nights at $189 per night, matching your original booking.", textZh: "稍等让我查查……运气不错！同一间房可以再住两晚，每晚189美元，和原来的预订一样。", actionHint: "用you're in luck", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. Can I keep the same room? I've already unpacked everything.",
            textZh: "太好了。能继续住同一间吗？我东西都摊开了。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, you can keep room 1208. I'll update your checkout date to March 17th. Your room key will continue to work.",
            textZh: "可以，继续住1208。我把退房日期改到3月17日。房卡继续有效。",
            keyPhrases: [
              { en: "checkout date", zh: "退房日期" },
              { en: "room key", zh: "房卡" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely, no need to switch rooms. I'll push your checkout to March 17th. Your key card stays active — nothing changes on your end.", textZh: "当然，不用换房间。我把退房改到3月17日。您的房卡保持有效——您这边什么都不用变。", actionHint: "用push和nothing changes", frequency: "common" },
              { textEn: "Of course — you're all set to stay in 1208. I've extended your reservation through the 17th. Same key, same everything.", textZh: "当然——1208您继续住。我把预订延到17号了。钥匙不变，一切照旧。", actionHint: "用extended through", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do I need to provide my credit card again?",
            textZh: "需要重新提供信用卡吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "No, we have your card on file. We'll just authorize the additional amount. Would you like me to send an updated confirmation to your email?",
            textZh: "不用，我们有您的卡信息。我们会授权额外金额。要我发更新后的确认单到您邮箱吗？",
            keyPhrases: [
              { en: "card on file", zh: "已保存的卡信息" },
              { en: "authorize", zh: "授权" },
              { en: "updated confirmation", zh: "更新后的确认单" },
            ],
            alternativeExpressions: [
              { textEn: "No need — we already have your payment details. We'll just pre-authorize the extra nights. Want me to email you a new confirmation?", textZh: "不用——我们已经有您的支付信息了。我们会预授权延住的金额。要我发新的确认单到邮箱吗？", actionHint: "用pre-authorize", frequency: "common" },
              { textEn: "We've got your card saved from check-in. I'll just charge the additional amount. Shall I send an updated booking confirmation to your email?", textZh: "入住时保存的卡信息还在。我直接扣额外金额。要发更新的预订确认到您邮箱吗？", actionHint: "用saved from check-in", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. I need it for my expense report.",
            textZh: "好的。我需要用来报销。",
            culturalNote: "\'expense report\' 是 \'报销单/费用报告\'，出差常用。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'll send it right away. Is there anything else you need for the extra nights? Fresh towels, room cleaning schedule?",
            textZh: "马上发送。延住期间还需要什么？换毛巾、房间清洁安排？",
            keyPhrases: [
              { en: "expense report", zh: "报销单" },
            ],
            alternativeExpressions: [
              { textEn: "On its way to your inbox now. Anything else for the extra nights? New towels, cleaning schedule adjustments?", textZh: "正在发到您邮箱。延住期间还需要什么？换毛巾、调整清洁时间？", actionHint: "用on its way", frequency: "common" },
              { textEn: "Done — you'll have it in a moment. Is there anything we can arrange for your extended stay? Extra amenities, different cleaning times?", textZh: "好了——稍后就收到。延住期间有什么需要安排的吗？额外用品、不同的清洁时间？", actionHint: "用extended stay", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Everything has been great. Just keep the same housekeeping schedule. Thanks!",
            textZh: "一切都很好。保持原来的打扫安排就行。谢谢！",
          },
        ],
      },
      {
        id: "no-availability",
        titleZh: "房间不可用",
        titleEn: "Room Not Available",
        description: "想延住但当前房间已被预订",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I need to stay one more night. My flight was cancelled due to the storm.",
            textZh: "我需要再住一晚。航班因暴风雪取消了。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'm sorry about your flight. Unfortunately, your current room is already booked for tomorrow. But let me see what else we have.",
            textZh: "您航班的事很遗憾。不巧您现在的房间明天已被预订。不过让我看看还有什么房。",
            keyPhrases: [
              { en: "already booked", zh: "已被预订" },
            ],
            alternativeExpressions: [
              { textEn: "That's really unfortunate about your flight. Your room is taken for tomorrow, but let me find something else for you.", textZh: "航班的事太遗憾了。您的房间明天已经有人订了，不过我帮您找别的。", actionHint: "用taken替代booked", frequency: "common" },
              { textEn: "Sorry to hear about the cancellation. Unfortunately, someone's already reserved your current room for tomorrow. But don't worry, I'll check what we have.", textZh: "听到取消很遗憾。不巧您现在的房间明天已被人预订了。别担心，我查查还有什么。", actionHint: "用don't worry安抚", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I understand. Anything available is fine — I just need a place to sleep.",
            textZh: "理解。有什么房都行——只要有地方睡。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I have a standard double room on the 8th floor. It's normally $210, but given your situation with the cancelled flight, I can offer it at $170.",
            textZh: "8楼有一间标准双人房。正常210美元，考虑到您航班取消的情况，我可以170美元给您。",
            keyPhrases: [
              { en: "standard double", zh: "标准双人房" },
              { en: "given your situation", zh: "考虑到您的情况" },
            ],
            alternativeExpressions: [
              { textEn: "There's a double room on the 8th floor. Regular price is 210, but since your flight was cancelled, I can do 170 for you.", textZh: "8楼有间双人房。正常210美元，既然航班取消了，给您算170。", actionHint: "用do 170 for you", frequency: "common" },
              { textEn: "I've got a standard room available on floor 8. It's usually $210, but under the circumstances, I'll give you a reduced rate of $170.", textZh: "8楼有间标准房。通常210美元，考虑到情况给您优惠价170美元。", actionHint: "用reduced rate", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's kind of you. I'll take it. Do I need to move all my things today?",
            textZh: "太好了。我要了。今天就要搬东西吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "You can stay in your current room until the regular checkout time at 11 AM tomorrow, then move to the new room. We can store your luggage during the transition.",
            textZh: "您可以在现在的房间住到明天正常退房时间11点，然后搬到新房间。过渡期间可以存行李。",
            keyPhrases: [
              { en: "regular checkout time", zh: "正常退房时间" },
              { en: "store your luggage", zh: "存行李" },
              { en: "transition", zh: "过渡期间" },
            ],
            alternativeExpressions: [
              { textEn: "Stay in your room tonight and check out at 11 AM like normal. Then just swap over to the new room. We'll hold your bags in between.", textZh: "今晚继续住，11点正常退房，然后搬到新房间。中间我们帮您保管行李。", actionHint: "用swap over", frequency: "common" },
              { textEn: "No rush — you've got until 11 tomorrow morning. After that, we'll transfer you to the new room. If there's a gap, the bell desk will keep your luggage safe.", textZh: "不急——明天上午11点之前都可以。之后转到新房间。如果中间有空档，行李台会保管好您的行李。", actionHint: "用bell desk", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can you also help me rebook my flight? I'm not sure how to contact the airline from here.",
            textZh: "能帮我改签航班吗？我不确定在这里怎么联系航空公司。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Our concierge can help with that. I'll also give you the airline's local customer service number. Many airlines are offering free rebooking due to the storm.",
            textZh: "我们礼宾台可以帮忙。我也给您航空公司的本地客服号码。很多航空公司因暴风雪免费改签。",
            keyPhrases: [
              { en: "rebook", zh: "改签" },
              { en: "free rebooking", zh: "免费改签" },
            ],
            alternativeExpressions: [
              { textEn: "Our concierge desk can help you with that. I'll also jot down the airline's local number for you. Good news — most carriers are waiving change fees because of the storm.", textZh: "礼宾台可以帮您处理。我也给您写下航空公司的本地号码。好消息是大多数航空公司因暴风雪免改签费。", actionHint: "用waiving change fees", frequency: "common" },
              { textEn: "We can definitely help! Let me get the concierge team on it. I'll also write down the airline hotline. With the storm, they should rebook you free of charge.", textZh: "我们一定能帮忙！我让礼宾团队来处理。我也给您写下航空公司热线。暴风雪期间应该免费改签。", actionHint: "用hotline和free of charge", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much. This has been a stressful day and you've made it much easier.",
            textZh: "太感谢了。今天压力很大，你帮了大忙。",
          },
        ],
      },
    ],
  },

  {
    id: "hotel-room-change",
    category: "hotel",
    titleZh: "换房间",
    titleEn: "Room Change Request",
    description: "因各种原因要求更换房间",
    otherRole: "前台接待员",
    otherRoleIcon: "🔄",
    flows: [
      {
        id: "basic-change",
        titleZh: "基础换房",
        titleEn: "Basic Room Change",
        description: "因个人偏好要求换房",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, is it possible to change my room? The street noise is quite loud on this side.",
            textZh: "你好，能换个房间吗？这边街上噪音挺大的。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I understand. Let me check what's available on the quieter side of the building. Do you have any other preferences?",
            textZh: "理解。我看看楼的安静那侧有什么空房。您还有其他偏好吗？",
            keyPhrases: [
              { en: "quieter side", zh: "安静的一侧" },
              { en: "preferences", zh: "偏好" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, I can help with that. Let me look for something on the quiet side. Any other requests — higher floor, specific bed type?", textZh: "当然，我来帮您。我找安静那边的房间。其他要求吗——高楼层、特定床型？", actionHint: "主动询问更多需求", frequency: "common" },
              { textEn: "Absolutely. I'll see what we have away from the street. Anything else you'd like in the new room?", textZh: "没问题。我看看远离街道的有什么。新房间还有什么要求吗？", actionHint: "用away from the street", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "A higher floor would be great if possible. And I'd prefer to keep the same room type.",
            textZh: "如果可以的话高楼层更好。希望保持同样的房型。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I have a king room on the 18th floor facing the courtyard. It's much quieter up there. Same rate as your current room.",
            textZh: "18楼有一间面向庭院的大床房。上面安静多了。和您现在的房间同价。",
            keyPhrases: [
              { en: "courtyard", zh: "庭院" },
              { en: "same rate", zh: "同价" },
            ],
            alternativeExpressions: [
              { textEn: "There's a king room on 18 overlooking the inner courtyard — super quiet. And it's the same price you're paying now.", textZh: "18楼有间大床房，俯瞰内庭院，非常安静。和您现在的价格一样。", actionHint: "用overlooking", frequency: "common" },
              { textEn: "I've found a nice option — 18th floor, courtyard-facing king room. You won't hear a thing up there, and there's no price difference.", textZh: "找到个不错的——18楼面向庭院的大床房。上面完全听不到声音，而且不用加钱。", actionHint: "用won't hear a thing", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds perfect. When can I move?",
            textZh: "听起来很好。什么时候能搬？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "The room is ready now. I'll program new key cards for you. Would you like help with your luggage?",
            textZh: "房间现在就可以了。我给您做新房卡。需要帮您搬行李吗？",
            keyPhrases: [
              { en: "program new key cards", zh: "做新房卡" },
            ],
            alternativeExpressions: [
              { textEn: "It's all set! Let me make you new room keys right now. Need a hand carrying your bags up?", textZh: "都准备好了！我现在给您做新房卡。需要帮忙拿行李上去吗？", actionHint: "用need a hand", frequency: "common" },
              { textEn: "Good to go. I'll get your new key cards ready in a moment. Shall I send a bellman to help with your things?", textZh: "可以了。我马上准备新房卡。要派行李员帮您搬东西吗？", actionHint: "用good to go", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I can manage. Just a couple of bags. Do I need to return the old keys?",
            textZh: "我自己来就行。就几个包。旧钥匙需要还吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, please return them here. The old cards will be deactivated automatically. Your new room is 1812 — elevators are to your right.",
            textZh: "是的，请还到这里。旧卡会自动注销。新房间是1812——电梯在您右边。",
            keyPhrases: [
              { en: "deactivated", zh: "注销/作废" },
            ],
            alternativeExpressions: [
              { textEn: "Just drop the old keys here. They'll stop working automatically. Your new room is 1812 — lifts are on your right. Enjoy the quiet!", textZh: "旧钥匙放这里就行。会自动失效的。新房间1812——电梯在右边。享受安静！", actionHint: "用lifts（英式）", frequency: "common" },
              { textEn: "Yes, please hand them back and I'll disable them. You're in room 1812 now — take the elevator to the right. I hope the new room is much better!", textZh: "是的，请交还给我，我来注销。现在您住1812——右边坐电梯。希望新房间好多了！", actionHint: "用disable", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. Thanks for making this easy!",
            textZh: "好的。谢谢这么方便！",
          },
        ],
      },
      {
        id: "upgrade-request",
        titleZh: "升级请求",
        titleEn: "Upgrade Request",
        description: "礼貌地请求房间升级",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "We're celebrating our honeymoon. Is there any chance of an upgrade to a suite?",
            textZh: "我们在度蜜月。有机会升级到套房吗？",
            culturalNote: "礼貌地提出升级请求是完全可以的。提到特殊场合（蜜月、生日）有时会帮到。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Congratulations! Let me see what we can do for you. We do have a junior suite available. The difference would be $80 per night.",
            textZh: "恭喜！我看看能帮什么忙。有一间小套房可以。差价是每晚80美元。",
            keyPhrases: [
              { en: "junior suite", zh: "小套房" },
              { en: "difference", zh: "差价" },
            ],
            alternativeExpressions: [
              { textEn: "Happy honeymoon! Let me check... We do have a junior suite open. The upgrade would be an extra $80 a night on top of your current rate.", textZh: "蜜月快乐！我查查……有一间小套房空着。升级的话在现有费率上加80美元每晚。", actionHint: "用on top of", frequency: "common" },
              { textEn: "Oh congratulations! I'd love to help. We have a junior suite available — it's $80 more per night. Shall I tell you about it?", textZh: "恭喜！很乐意帮忙。有间小套房可以——每晚多80美元。要我介绍一下吗？", actionHint: "更热情地回应", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there any chance you could offer a discount on the upgrade since it's a special occasion?",
            textZh: "因为是特殊场合，升级费能优惠一点吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I can offer the upgrade at $50 per night instead of $80. The suite has a separate living area, a soaking tub, and a city view. Perfect for a honeymoon.",
            textZh: "我可以给您每晚50美元而不是80美元。套房有独立客厅、泡澡浴缸和城市景观。蜜月很合适。",
            keyPhrases: [
              { en: "separate living area", zh: "独立客厅" },
              { en: "soaking tub", zh: "泡澡浴缸" },
              { en: "city view", zh: "城市景观" },
            ],
            alternativeExpressions: [
              { textEn: "For your honeymoon, I can do the upgrade at 50 instead of 80. The suite has its own living room, a deep soaking tub, and gorgeous city views.", textZh: "蜜月的话升级费我给您50而不是80。套房有独立客厅、深泡浴缸和漂亮的城市景观。", actionHint: "用I can do表示可以给", frequency: "common" },
              { textEn: "Since it's a special occasion, how about $50 per night for the upgrade? You'd get a lounge area, a big bathtub, and a stunning view of the city.", textZh: "既然是特殊场合，升级费每晚50美元怎么样？有休息区、大浴缸和迷人的城市景观。", actionHint: "用stunning view", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds wonderful. We'll take it for the remaining three nights.",
            textZh: "听起来太棒了。剩下三晚都要。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Wonderful! I'll also arrange complimentary champagne and chocolates in the room. A small honeymoon gift from us.",
            textZh: "太好了！我还会在房间安排免费的香槟和巧克力。我们送给蜜月的小礼物。",
            keyPhrases: [
              { en: "complimentary", zh: "免费的" },
              { en: "champagne", zh: "香槟" },
            ],
            alternativeExpressions: [
              { textEn: "Fantastic! I'll also have a bottle of bubbly and some chocolates sent to the suite. Consider it our honeymoon gift to you!", textZh: "太好了！我还会送一瓶起泡酒和巧克力到套房。算是我们送的蜜月礼物！", actionHint: "用bubbly替代champagne", frequency: "common" },
              { textEn: "Great choice! And as a little extra for the newlyweds, I'll arrange champagne and sweets in the room — on the house.", textZh: "好选择！作为给新婚夫妇的惊喜，我会在房间准备香槟和甜点——免费的。", actionHint: "用newlyweds", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's so generous! When can we move in?",
            textZh: "太慷慨了！什么时候能搬进去？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Give me about 30 minutes to prepare the room and set up the welcome amenities. I'll call your room when it's ready. Suite 2001 — top floor!",
            textZh: "给我大约30分钟准备房间和布置欢迎礼品。准备好了打电话到您房间。2001套房——顶层！",
            keyPhrases: [
              { en: "welcome amenities", zh: "欢迎礼品" },
              { en: "top floor", zh: "顶层" },
            ],
            alternativeExpressions: [
              { textEn: "Just about half an hour to get the room perfect for you. I'll ring you when it's ready. You're going to love Suite 2001 — it's on the very top floor!", textZh: "大约半小时把房间准备到最好。好了打电话给您。您一定会爱上2001套房的——在最高层！", actionHint: "用ring和very top floor", frequency: "common" },
              { textEn: "Allow me about 30 minutes to set everything up beautifully. I'll call your room the moment it's ready. Suite 2001, top floor — the best views in the house!", textZh: "给我30分钟把一切布置好。准备好了立刻打电话。2001套房，顶层——全酒店最好的景观！", actionHint: "用best views in the house", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "You've made our honeymoon even more special. Thank you so much!",
            textZh: "你让我们的蜜月更特别了。太感谢了！",
          },
        ],
      },
    ],
  },

  // ==================== 包裹与叫醒 ====================
  {
    id: "hotel-package-delivery",
    category: "hotel",
    titleZh: "包裹收取",
    titleEn: "Package Delivery",
    description: "在酒店收取快递包裹或信件",
    otherRole: "前台接待员",
    otherRoleIcon: "📦",
    flows: [
      {
        id: "receive-package",
        titleZh: "收取包裹",
        titleEn: "Receiving a Package",
        description: "有包裹寄到酒店需要领取",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm expecting a package to be delivered here. Has anything arrived for room 1208?",
            textZh: "你好，我有个包裹寄到酒店。1208房间有包裹到吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Let me check... Yes, we received a package for you this morning. Can I see your room key or ID to verify?",
            textZh: "我查一下……是的，今早收到您的包裹。能看下房卡或证件核实吗？",
            keyPhrases: [
              { en: "expecting a package", zh: "在等包裹" },
              { en: "verify", zh: "核实" },
            ],
            alternativeExpressions: [
              { textEn: "One moment... Yes, a package came in for you this morning! May I see your ID or room key to confirm?", textZh: "稍等……是的，今早到了一个您的包裹！能看下证件或房卡确认一下吗？", actionHint: "用came in for you", frequency: "common" },
              { textEn: "Let me have a look... We do have something for room 1208. I just need to check your key or ID before I hand it over.", textZh: "我查查……1208房确实有东西。交给您之前需要核实一下房卡或证件。", actionHint: "用hand it over", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's my room key. Is it a medium-sized box from Amazon?",
            textZh: "给您房卡。是亚马逊的中号箱子吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, that matches. Here it is. Would you like us to send it up to your room, or will you take it now?",
            textZh: "对，符合。在这里。要我们送到房间还是您现在带走？",
            keyPhrases: [
              { en: "matches", zh: "符合/匹配" },
              { en: "send it up", zh: "送上去" },
            ],
            alternativeExpressions: [
              { textEn: "That's the one! Here you go. Want to take it with you or shall I have someone bring it to your room?", textZh: "就是这个！给您。自己拿走还是让人送到房间？", actionHint: "更随意", frequency: "common" },
              { textEn: "Yep, this is it. Would you prefer to carry it now, or should we have it delivered to your room later?", textZh: "是的，就是这个。现在带走还是稍后送到房间？", actionHint: "用delivered", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take it now. I'm also expecting another delivery tomorrow. Will you hold it for me if I'm not here?",
            textZh: "我现在带走。明天还有一个快递。如果我不在能帮我保管吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course. We'll hold it at the front desk and leave a message in your room. For large items, we can deliver them to your room when you return.",
            textZh: "当然。我们在前台保管，在您房间留言。大件物品可以在您回来时送到房间。",
            keyPhrases: [
              { en: "hold it", zh: "保管" },
              { en: "leave a message", zh: "留言" },
            ],
            alternativeExpressions: [
              { textEn: "No problem — we'll keep it safe at the desk and drop a note in your room. If it's big, we can bring it up when you get back.", textZh: "没问题——我们在前台保管好，在您房间留个条。如果很大，等您回来送上去。", actionHint: "用drop a note", frequency: "common" },
              { textEn: "Absolutely. We'll store it here and let you know with a message. For anything heavy or bulky, we'll deliver it straight to your door.", textZh: "当然。我们存这里然后给您留言。重的或大件的，直接送到您门口。", actionHint: "用bulky表示大件", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. One more question — can I ship a package from the hotel?",
            textZh: "好的。再问一个——能从酒店寄包裹吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes! We can arrange FedEx or UPS pickup. Just bring the package to the front desk with the shipping label, and we'll handle it. There's no extra service fee.",
            textZh: "可以！我们可以安排FedEx或UPS取件。把包裹和运单带到前台，我们处理。没有额外服务费。",
            keyPhrases: [
              { en: "shipping label", zh: "运单/快递单" },
              { en: "pickup", zh: "取件" },
              { en: "service fee", zh: "服务费" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! We work with FedEx and UPS. Just drop off the package at the front desk with the label attached, and we'll arrange a pickup. No charge for the service.", textZh: "可以！我们和FedEx、UPS合作。把贴好运单的包裹拿到前台，我们安排取件。不收服务费。", actionHint: "用drop off和label attached", frequency: "common" },
              { textEn: "Yes, we can handle that. Bring it down to the desk with the shipping info, and we'll take care of the rest. There's no additional fee for the service.", textZh: "可以的，我们来处理。把包裹和快递信息拿到前台，剩下的交给我们。不另收服务费。", actionHint: "用take care of the rest", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's very convenient. Thank you!",
            textZh: "很方便。谢谢！",
          },
        ],
      },
      {
        id: "send-package",
        titleZh: "寄送包裹",
        titleEn: "Sending a Package",
        description: "需要从酒店寄送包裹回国",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I bought too many souvenirs and need to ship some home to China. Can the hotel help with international shipping?",
            textZh: "我买了太多纪念品，需要寄一些回中国。酒店能帮忙寄国际快递吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "We can arrange international shipping through FedEx or DHL. Do you have the items packed already?",
            textZh: "我们可以通过FedEx或DHL安排国际快递。东西打包好了吗？",
            keyPhrases: [
              { en: "international shipping", zh: "国际快递" },
              { en: "packed", zh: "打包好了" },
            ],
            alternativeExpressions: [
              { textEn: "We can help with that! We use FedEx and DHL for overseas shipments. Have you already boxed everything up?", textZh: "我们可以帮忙！海外寄件用FedEx和DHL。东西都装箱了吗？", actionHint: "用boxed up", frequency: "common" },
              { textEn: "Sure, we handle international parcels through FedEx or DHL. Are your things ready to go, or do you need packing help?", textZh: "当然，我们通过FedEx或DHL寄国际包裹。东西准备好了还是需要帮忙打包？", actionHint: "用parcels和ready to go", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Not yet. I need a box and some packing materials. Do you have any?",
            textZh: "还没有。我需要箱子和包装材料。你们有吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "We have some spare boxes and bubble wrap. For a proper shipping box, I can order one from FedEx — they deliver packing supplies for free.",
            textZh: "我们有一些空余箱子和气泡膜。如果要专用快递箱，我可以从FedEx订——他们免费送包装材料。",
            keyPhrases: [
              { en: "bubble wrap", zh: "气泡膜" },
              { en: "packing supplies", zh: "包装材料" },
            ],
            alternativeExpressions: [
              { textEn: "We've got a few boxes and some bubble wrap you can use. If you want a proper FedEx box, I can order one — they deliver supplies free of charge.", textZh: "我们有几个箱子和气泡膜可以用。如果要正规FedEx箱子我可以订——他们免费送包装材料。", actionHint: "用free of charge", frequency: "common" },
              { textEn: "I have spare cartons and wrapping material here. Or I can get FedEx to send over an official shipping box at no cost.", textZh: "我这有多余的纸箱和包装材料。或者我让FedEx送个正式快递箱过来，免费的。", actionHint: "用cartons和at no cost", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The spare box should be fine. How much does shipping to China usually cost?",
            textZh: "空余箱子就行。寄到中国一般多少钱？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "It depends on the weight and size. A medium box to China is usually $60 to $100 by FedEx. DHL might be slightly cheaper. Delivery takes 5 to 7 business days.",
            textZh: "取决于重量和尺寸。寄到中国的中号箱子FedEx一般60到100美元。DHL可能稍便宜。5到7个工作日到。",
            keyPhrases: [
              { en: "depends on weight and size", zh: "取决于重量和尺寸" },
              { en: "5 to 7 business days", zh: "5到7个工作日" },
            ],
            alternativeExpressions: [
              { textEn: "It varies by weight and dimensions. Ballpark for a mid-sized box to China is about $60 to $100 with FedEx. DHL could save you a bit. Takes about a week.", textZh: "取决于重量和尺寸。中号箱子寄中国FedEx大概60到100美元。DHL可能便宜点。大约一周到。", actionHint: "用ballpark表示大概", frequency: "common" },
              { textEn: "Pricing depends on how heavy and big it is. For a medium box to China, expect anywhere from 60 to 100 dollars via FedEx. DHL is another option — sometimes cheaper. Delivery is 5 to 7 days.", textZh: "价格取决于多重多大。中号箱子寄中国FedEx大概60到100美元。DHL也行，有时更便宜。5到7天到。", actionHint: "给出价格范围", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with FedEx. Are there any customs forms I need to fill out?",
            textZh: "选FedEx吧。需要填海关表格吗？",
            culturalNote: "国际邮寄需要填写海关申报单（customs declaration），列出物品内容和价值。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, you'll need to fill out a customs declaration form listing each item and its value. I have the forms here. Just be aware that electronics and food items may have restrictions.",
            textZh: "是的，需要填海关申报单，列出每件物品和价值。表格我这里有。注意电子产品和食品可能有限制。",
            keyPhrases: [
              { en: "customs declaration", zh: "海关申报单" },
              { en: "restrictions", zh: "限制" },
            ],
            alternativeExpressions: [
              { textEn: "You'll need to complete a customs form — just list what's inside and the value. I have the paperwork right here. Heads up: some things like food and electronics have import rules.", textZh: "需要填海关表——列出里面的东西和价值。表格我有。提醒一下：食品和电子产品有进口规定。", actionHint: "用heads up提醒", frequency: "common" },
              { textEn: "Yes, there's a quick customs declaration to fill in — items and their values. I'll give you the form. Just keep in mind that certain goods like food and tech may face restrictions.", textZh: "是的，需要快速填个海关申报——物品和价值。我给您表格。注意某些商品如食品和电子产品可能有限制。", actionHint: "用keep in mind", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's mostly clothing and small gifts. I'll fill out the form. When is the next pickup?",
            textZh: "主要是衣服和小礼物。我来填表。下次取件是什么时候？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "FedEx picks up daily at 4 PM. If you have everything ready by 3:30, it'll go out today. I'll weigh the box and get you an exact price before you commit.",
            textZh: "FedEx每天下午4点取件。如果3:30前准备好，今天就能寄出。我先称重给您准确报价，再决定。",
            keyPhrases: [
              { en: "picks up daily", zh: "每天取件" },
              { en: "weigh the box", zh: "称重" },
              { en: "exact price", zh: "准确报价" },
            ],
            alternativeExpressions: [
              { textEn: "FedEx comes every day at 4. If everything's packed by 3:30, it ships today. I'll weigh it first so you know the exact cost before committing.", textZh: "FedEx每天4点来。3:30前打包好今天就能寄。我先称一下让您知道准确费用再决定。", actionHint: "用committing表示决定", frequency: "common" },
              { textEn: "The daily pickup is at 4 PM. Get it ready by half past 3 and it'll be on its way today. Let me get you a quote after we weigh it.", textZh: "每天下午4点取件。3:30前准备好今天就出发。称好后给您报价。", actionHint: "用get you a quote", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "hotel-wake-up-call",
    category: "hotel",
    titleZh: "叫醒服务",
    titleEn: "Wake-Up Call",
    description: "设置酒店叫醒服务确保准时起床",
    otherRole: "前台接待员",
    otherRoleIcon: "⏰",
    flows: [
      {
        id: "basic-wakeup",
        titleZh: "基础叫醒服务",
        titleEn: "Basic Wake-Up Call",
        description: "设置简单的叫醒电话",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Can I get a wake-up call for tomorrow morning at 6 AM?",
            textZh: "能设明天早上6点的叫醒服务吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course, room 1208. I'll set a wake-up call for 6 AM. Would you like a second call as a backup?",
            textZh: "当然，1208房间。我设早上6点的叫醒服务。需要设第二次作为备份吗？",
            keyPhrases: [
              { en: "wake-up call", zh: "叫醒服务" },
              { en: "backup", zh: "备份" },
            ],
            alternativeExpressions: [
              { textEn: "Done — 6 AM wake-up for room 1208. Want me to schedule a second call as a safety net?", textZh: "好了——1208房6点叫醒。要设第二次作为保险吗？", actionHint: "用safety net", frequency: "common" },
              { textEn: "All set for 6 o'clock tomorrow morning. Shall I add a follow-up call 15 minutes later, just to be safe?", textZh: "明早6点设好了。要再加一个15分钟后的跟进电话吗，以防万一？", actionHint: "用follow-up call", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. A second one at 6:15 just in case. I'm a heavy sleeper.",
            textZh: "好的，6:15再来一次以防万一。我睡得很沉。",
            culturalNote: "\'heavy sleeper\' 是 \'睡得沉的人\'，\'light sleeper\' 是 \'睡得浅的人\'。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "No problem — 6 AM and 6:15 AM. The phone will ring in your room. Just pick up and we'll confirm you're awake.",
            textZh: "没问题——6点和6:15。房间电话会响。接起来我们确认您醒了。",
            keyPhrases: [
              { en: "ring", zh: "响铃" },
              { en: "confirm", zh: "确认" },
            ],
            alternativeExpressions: [
              { textEn: "Got it — 6 and 6:15. Your room phone will ring. Just answer and let us know you're up.", textZh: "记下了——6点和6:15。房间电话会响。接起来跟我们说一声您醒了就好。", actionHint: "更简洁", frequency: "common" },
              { textEn: "Two calls set — 6 AM and 6:15. When you pick up, the operator will make sure you're awake.", textZh: "设了两次——6点和6:15。接电话时接线员会确认您醒了。", actionHint: "用operator", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What happens if I don't pick up?",
            textZh: "如果我没接呢？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "We'll try calling three times. If there's no answer after the third attempt, we'll send someone to knock on your door.",
            textZh: "我们会打三次。三次都没接的话，会派人来敲门。",
            keyPhrases: [
              { en: "three times", zh: "三次" },
              { en: "knock on your door", zh: "敲门" },
            ],
            alternativeExpressions: [
              { textEn: "We'll keep trying — up to three calls. If you still don't answer, someone will come up and give your door a good knock.", textZh: "我们会持续尝试——最多打三次。还是没接的话会派人上来敲门。", actionHint: "用a good knock", frequency: "common" },
              { textEn: "We'll ring you three times. If there's still no response, a staff member will personally come knock on your door to wake you.", textZh: "我们会打三次电话。如果还是没反应，工作人员会亲自来敲门叫醒您。", actionHint: "强调亲自来", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good, I definitely can't miss my flight. Thanks!",
            textZh: "好的，我绝对不能错过航班。谢谢！",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "You're all set. Have a good night's rest, and we'll make sure you're up on time!",
            textZh: "设好了。祝您休息好，我们保证准时叫醒您！",
            keyPhrases: [
              { en: "all set", zh: "设好了" },
              { en: "on time", zh: "准时" },
            ],
            alternativeExpressions: [
              { textEn: "You're good to go. Sleep tight, and we'll get you up right on time tomorrow!", textZh: "都安排好了。好好睡，明天准时叫醒您！", actionHint: "用sleep tight", frequency: "common" },
              { textEn: "Everything's in place. Rest easy — we won't let you oversleep. Good night!", textZh: "一切就绪。放心休息——不会让您睡过头的。晚安！", actionHint: "用rest easy和oversleep", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "cancel-wakeup",
        titleZh: "取消叫醒",
        titleEn: "Cancel & Modify Wake-Up",
        description: "修改或取消叫醒服务",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I set a wake-up call for 6 AM, but my plans changed. Can I change it to 8 AM instead?",
            textZh: "我设了6点的叫醒，但计划变了。能改成8点吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "No problem at all. I'll cancel the 6 AM call and set a new one for 8 AM. The backup at 6:15 will also be cancelled.",
            textZh: "完全没问题。我取消6点的，改设8点。6:15的备份也一起取消。",
            keyPhrases: [
              { en: "cancel", zh: "取消" },
              { en: "set a new one", zh: "重新设一个" },
            ],
            alternativeExpressions: [
              { textEn: "Easy! I'll scrap the 6 AM and 6:15 calls and put in a new one for 8. Done.", textZh: "简单！取消6点和6:15的，重新设8点。搞定。", actionHint: "用scrap表示取消", frequency: "common" },
              { textEn: "Sure thing. I've removed both the earlier calls and scheduled 8 AM instead. All updated.", textZh: "没问题。两个早的都取消了，改成8点。全部更新好了。", actionHint: "用removed和scheduled", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Actually, can I also request something with the wake-up call? Like a pot of coffee delivered at 8 AM?",
            textZh: "其实，叫醒时能送东西吗？比如8点送一壶咖啡？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "We can arrange that! Would you like just coffee, or our 'Rise and Shine' tray — coffee, juice, and a croissant for $15?",
            textZh: "可以安排！只要咖啡，还是我们15美元的「早安套餐」——咖啡、果汁和牛角面包？",
            keyPhrases: [
              { en: "Rise and Shine", zh: "早安" },
              { en: "croissant", zh: "牛角面包" },
            ],
            alternativeExpressions: [
              { textEn: "Definitely! You can have just coffee, or try our morning tray — coffee, OJ, and a fresh croissant for $15. It's a great way to start the day.", textZh: "当然可以！可以只要咖啡，或者试试我们的早安托盘——咖啡、橙汁和新鲜牛角面包15美元。开启美好一天。", actionHint: "用OJ缩写表示橙汁", frequency: "common" },
              { textEn: "Absolutely! We have a breakfast tray option — coffee, juice, and a pastry, all for $15. Or I can send just the coffee if you prefer.", textZh: "完全可以！有早餐托盘选项——咖啡、果汁和糕点，全部15美元。如果只要咖啡也行。", actionHint: "用pastry替代croissant", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The Rise and Shine tray sounds nice. Will it be at my door at exactly 8?",
            textZh: "早安套餐不错。8点准时送到门口吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "We'll have it delivered between 7:55 and 8 AM. The tray will be placed on a stand outside your door so it's ready when you open up.",
            textZh: "7:55到8点之间送到。托盘放在门外的架子上，您开门就能拿。",
            keyPhrases: [
              { en: "delivered between", zh: "在…之间送到" },
              { en: "stand outside your door", zh: "门外架子" },
            ],
            alternativeExpressions: [
              { textEn: "It'll be at your door right around 8 — maybe a few minutes before. We leave it on a little table outside so it's ready when you step out.", textZh: "大概8点到您门口——可能提前几分钟。放在外面小桌上，您出来就能拿。", actionHint: "用step out", frequency: "common" },
              { textEn: "We'll bring it between 7:55 and 8 sharp. It'll be waiting on a stand outside your door — breakfast and coffee, all ready to go.", textZh: "7:55到8点整之间送到。放在门外架子上等您——早餐和咖啡，全准备好了。", actionHint: "用8 sharp", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. That's a much nicer way to wake up than an alarm!",
            textZh: "完美。比闹钟叫醒好多了！",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "We agree! Your wake-up call is set for 8 AM with the Rise and Shine tray. Coffee is freshly brewed. Sleep well!",
            textZh: "我们也觉得！8点叫醒加早安套餐设好了。咖啡是现磨的。睡个好觉！",
            keyPhrases: [
              { en: "freshly brewed", zh: "现磨的/新鲜冲泡的" },
            ],
            alternativeExpressions: [
              { textEn: "Couldn't agree more! So that's an 8 AM call plus the breakfast tray. The coffee will be freshly made. Have a wonderful sleep!", textZh: "太同意了！8点叫醒加早餐托盘。咖啡是现做的。好好睡一觉！", actionHint: "用freshly made", frequency: "common" },
              { textEn: "It really is! You're all set — 8 AM wake-up and a hot breakfast at your door. The coffee is always fresh. Sweet dreams!", textZh: "确实是！安排好了——8点叫醒，热早餐送到门口。咖啡一直是新鲜的。好梦！", actionHint: "用sweet dreams", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 会员积分 ====================
  {
    id: "hotel-loyalty-program",
    category: "hotel",
    titleZh: "酒店会员计划",
    titleEn: "Hotel Loyalty Program",
    description: "了解和加入酒店会员计划",
    otherRole: "前台接待员",
    otherRoleIcon: "⭐",
    flows: [
      {
        id: "join-program",
        titleZh: "加入会员",
        titleEn: "Joining the Program",
        description: "了解并加入酒店会员计划",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I noticed a sign about your loyalty program. How does it work?",
            textZh: "我看到你们会员计划的标牌。怎么运作的？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Our rewards program is free to join. You earn 10 points per dollar spent on room charges, dining, and spa services. Points can be redeemed for free nights.",
            textZh: "我们的会员计划免费加入。房费、餐饮和水疗消费每花1美元赚10积分。积分可以兑换免费住宿。",
            keyPhrases: [
              { en: "rewards program", zh: "会员计划" },
              { en: "earn points", zh: "赚积分" },
              { en: "redeemed for", zh: "兑换" },
              { en: "free nights", zh: "免费住宿" },
            ],
            alternativeExpressions: [
              { textEn: "It's totally free to join! You rack up 10 points for every dollar on rooms, meals, and spa. Then you can trade those points in for free stays.", textZh: "完全免费加入！房费、餐饮和水疗每花1美元攒10积分。然后可以用积分换免费住宿。", actionHint: "用rack up和trade in", frequency: "common" },
              { textEn: "Signing up is free. You earn points on everything — rooms, dining, the spa. Ten points per dollar, and you can use them for complimentary nights.", textZh: "注册免费。所有消费都能积分——房费、餐饮、水疗。每美元10积分，可以用来换免费住宿。", actionHint: "用signing up和everything", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How many points do I need for a free night?",
            textZh: "多少积分能换一晚免费住宿？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "A standard room starts at 20,000 points. Suites are 40,000 points. You also get member-only rates, which are typically 10% lower than the public rate.",
            textZh: "标准间起步20,000积分。套房40,000积分。还有会员专属价，通常比公开价低10%。",
            keyPhrases: [
              { en: "member-only rates", zh: "会员专属价" },
              { en: "public rate", zh: "公开价" },
            ],
            alternativeExpressions: [
              { textEn: "A standard room is 20,000 points, suites start at 40,000. Plus, as a member you get exclusive rates — about 10 percent off what everyone else pays.", textZh: "标准间20,000积分，套房从40,000起。而且作为会员有专属价——比普通价低大约10%。", actionHint: "用what everyone else pays", frequency: "common" },
              { textEn: "Free nights kick in at 20,000 points for a regular room, 40,000 for a suite. Members also unlock special pricing that's 10 percent below the standard rate.", textZh: "20,000积分可以换普通房免费住，40,000积分换套房。会员还能解锁比标准价低10%的特别价。", actionHint: "用kick in和unlock", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I get points for my current stay? I've been here four nights already.",
            textZh: "现在的住宿能积分吗？我已经住了四晚了。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "If you sign up now, I can retroactively apply points for your entire stay. That's a great way to get started!",
            textZh: "如果您现在注册，我可以追溯整个住宿的积分。很好的开始！",
            keyPhrases: [
              { en: "sign up", zh: "注册" },
              { en: "retroactively apply", zh: "追溯" },
            ],
            alternativeExpressions: [
              { textEn: "Great news — if you join today, I can backdate the points for all four nights. You'd start with a nice balance!", textZh: "好消息——今天加入的话我可以把四晚的积分都补上。开局就有不少积分！", actionHint: "用backdate和nice balance", frequency: "common" },
              { textEn: "Absolutely. Register now and I'll credit the points from your whole stay — all four nights. That's a solid head start!", textZh: "当然可以。现在注册我就把全部住宿的积分补上——四个晚上。开局很不错！", actionHint: "用credit和head start", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Let's do it. What do I need to sign up?",
            textZh: "那就注册吧。需要什么？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Just your name, email address, and phone number. I can sign you up right here — it takes about 2 minutes. You'll get a digital membership card by email.",
            textZh: "只需要姓名、邮箱和电话号码。我这里就能注册——大约2分钟。电子会员卡会发到邮箱。",
            keyPhrases: [
              { en: "digital membership card", zh: "电子会员卡" },
            ],
            alternativeExpressions: [
              { textEn: "Just need your name, email, and phone. I'll set it up right here — only takes a couple of minutes. Your membership card will come to your email.", textZh: "只需要姓名、邮箱和电话。我直接在这里注册——只要几分钟。会员卡会发到邮箱。", actionHint: "用set it up和couple of minutes", frequency: "common" },
              { textEn: "It's quick — just your name and contact info. I can do it right now and you'll have a digital card in your inbox within minutes.", textZh: "很快——只需要姓名和联系方式。我现在就办，几分钟内电子卡就到您邮箱了。", actionHint: "用within minutes", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. Here's my information. Thank you for telling me about this!",
            textZh: "好的。这是我的信息。谢谢告诉我这个！",
          },
        ],
      },
      {
        id: "member-benefits",
        titleZh: "会员权益咨询",
        titleEn: "Member Benefits Inquiry",
        description: "已是会员，了解更多权益和升级",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'm a Gold member. What benefits do I get during my stay?",
            textZh: "我是金卡会员。入住期间有什么权益？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Welcome back! As a Gold member, you enjoy complimentary breakfast, late checkout until 2 PM, free room upgrades when available, and access to our executive lounge.",
            textZh: "欢迎回来！金卡会员享有免费早餐、下午2点延迟退房、有空房时免费升级，以及行政酒廊使用权。",
            keyPhrases: [
              { en: "Gold member", zh: "金卡会员" },
              { en: "complimentary breakfast", zh: "免费早餐" },
              { en: "late checkout", zh: "延迟退房" },
              { en: "executive lounge", zh: "行政酒廊" },
            ],
            alternativeExpressions: [
              { textEn: "Great to have you back! Gold gets you free breakfast, checkout at 2 PM, complimentary upgrades when we have them, and full access to the executive lounge.", textZh: "欢迎回来！金卡包含免费早餐、2点退房、有空房时免费升级、以及行政酒廊全权使用。", actionHint: "用gets you", frequency: "common" },
              { textEn: "Welcome! As a Gold tier guest, your perks include breakfast on us, extended checkout to 2 PM, priority upgrades, and the executive lounge.", textZh: "欢迎！金卡客人的福利包括免费早餐、退房延至2点、优先升级和行政酒廊。", actionHint: "用perks和tier guest", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What's available in the executive lounge?",
            textZh: "行政酒廊有什么？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Complimentary drinks and snacks all day, evening cocktail hour from 5 to 7 PM with free wine and appetizers, and a quiet workspace with printing services.",
            textZh: "全天免费饮品和小食，下午5到7点有免费酒水和开胃菜的鸡尾酒时间，还有安静的工作区和打印服务。",
            keyPhrases: [
              { en: "cocktail hour", zh: "鸡尾酒时间" },
              { en: "appetizers", zh: "开胃菜" },
              { en: "workspace", zh: "工作区" },
            ],
            alternativeExpressions: [
              { textEn: "Free drinks and nibbles all day, plus a happy hour from 5 to 7 with wine and light bites. There's also a work area with a printer you can use.", textZh: "全天免费饮品和小食，加上5到7点的欢乐时光有酒和小吃。还有带打印机的工作区可以用。", actionHint: "用nibbles和happy hour", frequency: "common" },
              { textEn: "You get all-day refreshments, an evening cocktail reception from 5 to 7 with complimentary wine and snacks, and a business corner for getting work done.", textZh: "全天茶饮点心，傍晚5到7点有鸡尾酒招待会配免费酒水和点心，还有商务角方便办公。", actionHint: "用reception和business corner", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How close am I to Platinum status? I travel a lot for work.",
            textZh: "我离白金卡还差多少？我经常出差。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "You're currently at 42 nights this year. Platinum requires 50 nights. Just 8 more nights and you'll reach Platinum, which adds suite upgrades and 50% bonus points.",
            textZh: "您今年已住42晚。白金卡需要50晚。再住8晚就达到白金，增加套房升级和50%额外积分。",
            keyPhrases: [
              { en: "Platinum status", zh: "白金卡" },
              { en: "bonus points", zh: "额外积分" },
              { en: "suite upgrades", zh: "套房升级" },
            ],
            alternativeExpressions: [
              { textEn: "You're at 42 nights — only 8 more to hit Platinum! That unlocks suite upgrades and a 50 percent points bonus on every stay.", textZh: "您已经42晚了——再住8晚就到白金！解锁套房升级和每次住宿50%积分加成。", actionHint: "用hit和unlocks", frequency: "common" },
              { textEn: "You're really close! 42 out of 50 nights for Platinum. Eight more and you'll get automatic suite upgrades and earn points 50 percent faster.", textZh: "非常接近了！50晚白金标准已完成42晚。再8晚就能自动升级套房，积分速度快50%。", actionHint: "用earn points faster", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have two more business trips this quarter. That should do it. Is there a way to track my progress?",
            textZh: "这个季度还有两次出差。应该够了。有办法跟踪进度吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, download our app. It shows your points balance, tier progress, and you can even book rooms and request upgrades directly from it.",
            textZh: "有的，下载我们的APP。可以看积分余额、等级进度，还能直接订房和申请升级。",
            keyPhrases: [
              { en: "app", zh: "应用/APP" },
              { en: "points balance", zh: "积分余额" },
              { en: "tier progress", zh: "等级进度" },
            ],
            alternativeExpressions: [
              { textEn: "Our app is the easiest way! You can see your points, how close you are to the next tier, and even book or upgrade rooms right from your phone.", textZh: "我们的APP最方便！可以看积分、离下一级多远，还能直接用手机订房或升级。", actionHint: "用right from your phone", frequency: "common" },
              { textEn: "Grab our hotel app — it tracks your points and tier status in real time. You can also make reservations and request upgrades on the go.", textZh: "下载我们的酒店APP——实时跟踪积分和等级状态。还可以随时订房和申请升级。", actionHint: "用on the go", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll download it tonight. Thanks for the rundown on all the benefits!",
            textZh: "今晚就下载。谢谢介绍这些权益！",
            culturalNote: "\'rundown\' 在这里是 \'概述/介绍\' 的意思。",
          },
        ],
      },
    ],
  },

  {
    id: "hotel-points-redemption",
    category: "hotel",
    titleZh: "积分兑换",
    titleEn: "Points Redemption",
    description: "使用酒店积分兑换住宿或其他奖励",
    otherRole: "前台接待员",
    otherRoleIcon: "🎁",
    flows: [
      {
        id: "redeem-night",
        titleZh: "兑换免费住宿",
        titleEn: "Redeeming a Free Night",
        description: "用积分兑换免费住宿",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I'd like to use my points for a free night. I have about 25,000 points.",
            textZh: "我想用积分换一晚免费住宿。我大概有25,000积分。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Let me check your account... You have 25,400 points. A standard room is 20,000 points per night. When would you like to redeem?",
            textZh: "我查一下您的账户……您有25,400积分。标准间每晚20,000积分。您想兑换哪天？",
            keyPhrases: [
              { en: "check your account", zh: "查账户" },
              { en: "redeem", zh: "兑换" },
              { en: "per night", zh: "每晚" },
            ],
            alternativeExpressions: [
              { textEn: "Let me pull up your account... You've got 25,400 points. A standard room costs 20,000 points a night. When would you like to use them?", textZh: "我调出您的账户……有25,400积分。标准间每晚需要20,000积分。想什么时候用？", actionHint: "用costs和use them", frequency: "common" },
              { textEn: "Checking now... Nice — 25,400 points in your account. That's more than enough for a standard room at 20,000 per night. What date are you thinking?", textZh: "查看中……不错——账户里有25,400积分。标准间每晚20,000积分绰绰有余。想用在哪天？", actionHint: "用more than enough", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I use it for tonight? I'd like to add one more night to my stay using points.",
            textZh: "今晚能用吗？我想用积分多住一晚。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, I can apply 20,000 points to tonight. That removes the room charge for this evening. You'll have 5,400 points remaining.",
            textZh: "可以，我把20,000积分用在今晚。今晚房费免除。您还剩5,400积分。",
            keyPhrases: [
              { en: "apply points", zh: "使用积分" },
              { en: "removes the room charge", zh: "免除房费" },
              { en: "remaining", zh: "剩余" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing! I'll use 20,000 points for tonight — no room charge. That leaves you with 5,400 points in the bank.", textZh: "没问题！今晚用20,000积分——免房费。您账户里还剩5,400积分。", actionHint: "用in the bank", frequency: "common" },
              { textEn: "Done — 20,000 points redeemed for tonight. Your room is on the house this evening. You've still got 5,400 points left over.", textZh: "好了——今晚兑换20,000积分。今晚房费免了。您还剩5,400积分。", actionHint: "用left over", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do I still earn points on meals and services during a reward night?",
            textZh: "积分兑换的晚上，餐饮和服务消费还能积分吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes! You earn points on all non-room charges even during reward stays. So dining, spa, and minibar all count.",
            textZh: "可以！即使是积分兑换住宿期间，非房费消费也能积分。所以餐饮、水疗和迷你吧都算。",
            keyPhrases: [
              { en: "non-room charges", zh: "非房费消费" },
              { en: "reward stays", zh: "积分兑换住宿" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely! Everything except the room — restaurants, spa, minibar — still earns you points, even on a reward night.", textZh: "当然！除了房费以外的一切——餐厅、水疗、迷你吧——都照常积分，即使是兑换的晚上。", actionHint: "用reward night", frequency: "common" },
              { textEn: "Yes, you keep earning on all other spending during a free night. So dining, drinks, spa — it all counts toward your next reward.", textZh: "是的，免费住宿期间其他消费照常积分。餐饮、酒水、水疗都算在内，向下一次奖励累积。", actionHint: "用toward your next reward", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's great. Will the points redemption show on my bill?",
            textZh: "太好了。积分兑换会显示在账单上吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, it'll show as 'Points Redemption — 20,000 pts' with a $0 room charge for tonight. I'll also email you an updated points statement.",
            textZh: "会的，显示为「积分兑换——20,000点」，今晚房费0美元。我也会邮件发送更新的积分明细。",
            keyPhrases: [
              { en: "points statement", zh: "积分明细" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, you'll see it listed as a points redemption on your bill — zero charge for the room tonight. I'll also shoot you an email with your updated points balance.", textZh: "会的，账单上会显示积分兑换——今晚房费为零。我也会给您发邮件显示更新后的积分余额。", actionHint: "用shoot和zero charge", frequency: "common" },
              { textEn: "It will appear on your invoice as a points redemption with no room fee for tonight. I'll send your latest points summary by email as well.", textZh: "发票上会显示积分兑换，今晚无房费。我也会邮件发送最新的积分汇总。", actionHint: "用invoice和summary", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. It feels great to use those points! Thank you.",
            textZh: "太好了。用积分的感觉真好！谢谢。",
          },
        ],
      },
      {
        id: "points-transfer",
        titleZh: "积分转换",
        titleEn: "Points Transfer Options",
        description: "了解积分转换为航空里程等选项",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Can I transfer my hotel points to an airline frequent flyer program?",
            textZh: "我的酒店积分能转到航空公司的常旅客计划吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, we partner with over 30 airlines. You can transfer points at a ratio of 10 hotel points to 3 airline miles.",
            textZh: "可以，我们和30多家航空公司合作。转换比例是10酒店积分换3航空里程。",
            keyPhrases: [
              { en: "transfer points", zh: "积分转换" },
              { en: "frequent flyer program", zh: "常旅客计划" },
              { en: "ratio", zh: "比例" },
              { en: "airline miles", zh: "航空里程" },
            ],
            alternativeExpressions: [
              { textEn: "We do! We work with over 30 airlines. The conversion is 10 hotel points to 3 miles.", textZh: "可以！我们和30多家航空公司合作。兑换比例是10酒店积分换3里程。", actionHint: "用conversion", frequency: "common" },
              { textEn: "Absolutely — we've got partnerships with 30-plus airlines. The exchange rate is 10 to 3, points to miles.", textZh: "当然——我们和30多家航空公司有合作。兑换比例是10积分换3里程。", actionHint: "用exchange rate", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is it better to use points for hotel nights or transfer them to miles? What do you recommend?",
            textZh: "用积分换住宿好还是转里程好？你建议呢？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Generally, points are worth more when redeemed for hotel stays. A 20,000-point night saves you $189, but 20,000 points would only convert to 6,000 miles — worth about $60 in flights.",
            textZh: "一般来说积分用于兑换住宿更值。20,000积分换一晚省189美元，但转换只能得6,000里程——大约价值60美元的机票。",
            keyPhrases: [
              { en: "worth more", zh: "更值" },
              { en: "convert to", zh: "转换为" },
            ],
            alternativeExpressions: [
              { textEn: "Honestly, hotel nights give you the best bang for your buck. A 20,000-point night saves 189 bucks, while the same points would only get you about 60 dollars' worth of flights.", textZh: "说实话，换住宿最划算。20,000积分换一晚省189美元，同样的积分换机票只值大约60美元。", actionHint: "用bang for your buck", frequency: "common" },
              { textEn: "In most cases, redeeming for hotel stays is the better deal. You'd save $189 on a night here versus about $60 in air miles with the same points.", textZh: "多数情况下换住宿更划算。同样的积分在这里换一晚省189美元，换航空里程只值约60美元。", actionHint: "用better deal", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good advice. Are there any other ways to use points besides free nights?",
            textZh: "好建议。除了免费住宿，积分还有其他用法吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "You can use points for room upgrades, spa treatments, dining credits, and even gift cards. There's also a 'Points + Cash' option where you pay half with points and half with money.",
            textZh: "可以用于房间升级、水疗、餐饮抵扣，甚至礼品卡。还有「积分+现金」选项，一半积分一半现金。",
            keyPhrases: [
              { en: "dining credits", zh: "餐饮抵扣" },
              { en: "gift cards", zh: "礼品卡" },
              { en: "Points + Cash", zh: "积分+现金" },
            ],
            alternativeExpressions: [
              { textEn: "Plenty of options! Upgrades, spa sessions, restaurant credits, gift cards — even a mix of points and cash to stretch your points further.", textZh: "选择很多！升级、水疗、餐饮抵扣、礼品卡——还有积分加现金的混合方式让积分更耐用。", actionHint: "用stretch further", frequency: "common" },
              { textEn: "Besides free nights, you can spend points on upgrades, spa treatments, meals, and gift cards. We also have a hybrid option — part points, part cash.", textZh: "除了免费住宿，还可以用积分换升级、水疗、餐饮和礼品卡。也有混合选项——部分积分部分现金。", actionHint: "用hybrid option", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The Points + Cash option sounds flexible. I'll keep saving my points for now.",
            textZh: "积分+现金听起来很灵活。我先继续攒积分吧。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Smart choice. Points don't expire as long as you have at least one stay per year. Keep an eye on your email — we often run double-points promotions.",
            textZh: "明智的选择。只要每年至少住一次，积分就不会过期。留意邮件——我们经常有双倍积分活动。",
            keyPhrases: [
              { en: "don't expire", zh: "不会过期" },
              { en: "double-points promotions", zh: "双倍积分活动" },
            ],
            alternativeExpressions: [
              { textEn: "Good call. Your points never expire as long as you stay with us at least once a year. And watch for our promo emails — we often do double points.", textZh: "好主意。只要每年至少住一次，积分永不过期。留意我们的促销邮件——经常有双倍积分。", actionHint: "用good call和promo", frequency: "common" },
              { textEn: "Wise move. As long as there's activity on your account once a year, your points stay valid forever. We run double-points events regularly — keep an eye out!", textZh: "明智选择。只要账户每年有一次活动，积分就永久有效。我们定期有双倍积分活动——多留意！", actionHint: "用stay valid forever", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll definitely watch for those. Thanks for explaining everything so clearly!",
            textZh: "我一定留意。谢谢解释得这么清楚！",
          },
        ],
      },
    ],
  },

  // ==================== 宠物与无障碍 ====================
  {
    id: "hotel-pet-policy",
    category: "hotel",
    titleZh: "宠物政策",
    titleEn: "Pet Policy",
    description: "了解酒店的宠物携带政策和相关服务",
    otherRole: "前台接待员",
    otherRoleIcon: "🐕",
    flows: [
      {
        id: "bring-pet",
        titleZh: "携带宠物入住",
        titleEn: "Checking in with a Pet",
        description: "带宠物入住酒店的流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have a small dog with me. Is your hotel pet-friendly?",
            textZh: "你好，我带了一只小狗。你们酒店可以带宠物吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, we're a pet-friendly hotel! Dogs under 30 pounds are welcome. There's a pet fee of $50 per stay, not per night.",
            textZh: "是的，我们是宠物友好酒店！30磅以下的狗可以入住。宠物费每次住宿50美元，不是每晚。",
            keyPhrases: [
              { en: "pet-friendly", zh: "宠物友好的" },
              { en: "pet fee", zh: "宠物费" },
              { en: "per stay", zh: "每次住宿" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely — we love dogs here! Small pups under 30 pounds are welcome. There's a flat fee of $50 for your whole stay, not per night.", textZh: "当然——我们很欢迎狗狗！30磅以下的小狗可以入住。整个住宿期间收一笔50美元固定费，不是按天算。", actionHint: "用pups和flat fee", frequency: "common" },
              { textEn: "We sure are pet-friendly! Dogs up to 30 pounds can stay. It's a one-time $50 charge for the duration of your visit.", textZh: "我们确实是宠物友好酒店！30磅以下的狗可以住。整个住宿期间一次性收50美元。", actionHint: "用one-time charge", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "She's about 15 pounds. Are there any rules I should know about?",
            textZh: "她大约15磅。有什么规定需要注意？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Pets must be on a leash in all public areas. They cannot be left unattended in the room. And we ask that you clean up after your pet on the grounds.",
            textZh: "宠物在公共区域必须拴绳。不能单独留在房间里。也请在酒店场地上清理宠物排泄物。",
            keyPhrases: [
              { en: "on a leash", zh: "拴绳" },
              { en: "left unattended", zh: "单独留下" },
              { en: "clean up after", zh: "清理…的排泄物" },
            ],
            alternativeExpressions: [
              { textEn: "Just a few rules: keep her leashed in common areas, don't leave her alone in the room, and please pick up after her outside.", textZh: "就几条规定：公共区域拴绳，不要让她独自待在房间，外面记得清理排泄物。", actionHint: "用common areas和pick up after", frequency: "common" },
              { textEn: "She needs to be on a lead in all shared spaces, she can't be in the room by herself, and we ask all pet owners to tidy up on the hotel grounds.", textZh: "在所有共用空间要拴绳，不能单独留在房间，我们也请宠物主人在酒店场地上保持清洁。", actionHint: "用lead（英式）和tidy up", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a designated area for walking her?",
            textZh: "有专门遛狗的地方吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, there's a pet relief area behind the hotel with waste bags provided. There's also a dog park two blocks east if she needs more room to run.",
            textZh: "有的，酒店后面有宠物活动区，提供拾便袋。东边两个街区还有个狗公园，如果她需要更大空间跑。",
            keyPhrases: [
              { en: "pet relief area", zh: "宠物活动区" },
              { en: "waste bags", zh: "拾便袋" },
              { en: "dog park", zh: "狗公园" },
            ],
            alternativeExpressions: [
              { textEn: "Out the back there's a pet area with poop bags provided. And if she wants to stretch her legs, there's a nice dog park just two blocks to the east.", textZh: "后面有宠物区，提供拾便袋。如果她想活动活动，东边两个街区有个不错的狗公园。", actionHint: "用stretch her legs", frequency: "common" },
              { textEn: "We've got a doggy area behind the hotel with bags and bins. There's also a fenced-off dog park nearby if she needs a good run.", textZh: "酒店后面有遛狗区，有袋子和垃圾桶。附近还有个围起来的狗公园，如果她需要好好跑跑。", actionHint: "用fenced-off和good run", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do you provide any pet amenities? Like a water bowl or bed?",
            textZh: "有提供宠物用品吗？比如水碗或宠物床？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "We have a welcome kit for pets — a food bowl, water bowl, a small bed, and some treats. I'll have it sent to your room. We can also recommend pet-friendly restaurants nearby.",
            textZh: "我们有宠物欢迎套装——食碗、水碗、小床和零食。我送到您房间。也可以推荐附近宠物友好餐厅。",
            keyPhrases: [
              { en: "welcome kit", zh: "欢迎套装" },
              { en: "treats", zh: "零食" },
              { en: "pet-friendly restaurants", zh: "宠物友好餐厅" },
            ],
            alternativeExpressions: [
              { textEn: "We've got a little welcome package for your pup — bowls for food and water, a cozy bed, and some doggy treats. I'll send it right up. I can also suggest some restaurants where dogs are welcome.", textZh: "我们给您家狗狗准备了欢迎包——食碗、水碗、小窝和零食。马上送上去。也可以推荐允许带狗的餐厅。", actionHint: "用pup和cozy bed", frequency: "common" },
              { textEn: "Absolutely! We provide a pet welcome set with bowls, a bed, and some snacks. It'll be in your room shortly. And if you need pet-friendly dining options, just ask!", textZh: "当然！我们提供宠物欢迎套装，有碗、床和零食。很快送到您房间。如果需要宠物友好餐厅推荐随时问！", actionHint: "用shortly", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's wonderful! She's going to love it here. Thank you!",
            textZh: "太棒了！她在这里一定很开心。谢谢！",
          },
        ],
      },
      {
        id: "pet-sitting",
        titleZh: "宠物看管服务",
        titleEn: "Pet Sitting Service",
        description: "需要暂时安排宠物看管",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "We want to go to a museum today, but pets aren't allowed inside. Is there a pet sitting service?",
            textZh: "我们今天想去博物馆，但里面不让带宠物。有宠物看管服务吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "We partner with a local pet sitting service. They can watch your dog here at the hotel or take her to their daycare facility. It's $25 for a half day.",
            textZh: "我们和一家本地宠物看管服务合作。可以在酒店看管您的狗，或带到他们的日托中心。半天25美元。",
            keyPhrases: [
              { en: "pet sitting service", zh: "宠物看管服务" },
              { en: "daycare facility", zh: "日托中心" },
              { en: "half day", zh: "半天" },
            ],
            alternativeExpressions: [
              { textEn: "We work with a local pet sitter. They can either stay with her here in the hotel or take her to a dog daycare center. It's $25 for up to half a day.", textZh: "我们和本地宠物保姆合作。可以在酒店陪她，也可以带去狗狗日托。半天25美元。", actionHint: "用pet sitter和dog daycare", frequency: "common" },
              { textEn: "There's a professional pet watching service we recommend. Hotel sitting or their own facility — it's 25 dollars for a half day either way.", textZh: "有个专业宠物看管服务我们推荐。在酒店或去他们那里——半天都是25美元。", actionHint: "用either way", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Having someone watch her at the hotel would be better. She gets anxious in new places.",
            textZh: "在酒店看管更好。她到新地方会紧张。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Understood. The sitter will come to your room and stay with her. They're trained professionals — bonded and insured. Would you like me to book for this afternoon?",
            textZh: "明白。看管员会到您房间陪着她。他们是受过训练的专业人员——有担保和保险。要预约今天下午吗？",
            keyPhrases: [
              { en: "sitter", zh: "看管员" },
              { en: "bonded and insured", zh: "有担保和保险" },
            ],
            alternativeExpressions: [
              { textEn: "No problem. The sitter will come right to your room and keep her company. They're fully certified and insured. Should I book for this afternoon?", textZh: "没问题。看管员会直接到您房间陪着她。他们完全有资质且有保险。要订今天下午吗？", actionHint: "用keep her company和certified", frequency: "common" },
              { textEn: "That makes sense. A professional will stay with her in your room — all properly bonded and covered. Want me to set that up for today?", textZh: "理解。专业人员会在您房间陪着她——有完善的担保和保障。要安排今天的吗？", actionHint: "用covered", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, from about 1 to 5 PM. Should I leave her food and her medication? She takes allergy pills.",
            textZh: "好，大约下午1点到5点。要留下她的食物和药吗？她吃过敏药。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, please leave her food with feeding instructions and the medication with dosage information. Also let us know her name and any commands she responds to.",
            textZh: "是的，请留下食物和喂食说明，药物和剂量信息。也告诉我们她的名字和她听得懂的指令。",
            keyPhrases: [
              { en: "feeding instructions", zh: "喂食说明" },
              { en: "dosage", zh: "剂量" },
              { en: "commands", zh: "指令" },
            ],
            alternativeExpressions: [
              { textEn: "Please leave her food with instructions on how much and when, plus the meds with dosage details. And tell us her name and any words she knows!", textZh: "请留下食物和喂多少、什么时候喂的说明，还有药物和剂量。也告诉我们她叫什么和会什么口令！", actionHint: "用words she knows", frequency: "common" },
              { textEn: "Leave the food and medicine with clear notes on portions and timing. Also let us know what she's called and which commands she listens to.", textZh: "留下食物和药物，写清楚份量和时间。也告诉我们她叫什么名字、听什么指令。", actionHint: "用portions and timing", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Her name is Mimi. She knows 'sit,' 'stay,' and 'come.' She's very friendly but barks at doorbells.",
            textZh: "她叫Mimi。会「坐下」「等等」和「过来」。她很友好，但听到门铃会叫。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Good to know — I'll put the 'Do Not Disturb' sign on your door so nobody rings the bell. The sitter will arrive at 12:50 PM. Have a great time at the museum!",
            textZh: "好的——我会挂上「请勿打扰」牌，这样没人按门铃。看管员12:50到。祝博物馆玩得开心！",
            keyPhrases: [
              { en: "Do Not Disturb sign", zh: "请勿打扰牌" },
            ],
            alternativeExpressions: [
              { textEn: "Noted — I'll hang the DND sign so no one knocks and startles her. The pet sitter arrives at 12:50. Enjoy the museum!", textZh: "记下了——我挂上请勿打扰牌免得有人敲门吓到她。宠物保姆12:50到。祝博物馆愉快！", actionHint: "用startles", frequency: "common" },
              { textEn: "Smart thinking about the doorbell. I'll put the privacy sign up and brief the sitter. They'll be there at ten to one. Have a wonderful afternoon!", textZh: "门铃的事想得好。我会挂上隐私牌并跟看管员说明。他们12:50到。祝下午愉快！", actionHint: "用privacy sign和brief", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "You've thought of everything. Thank you so much!",
            textZh: "你想得太周到了。太感谢了！",
          },
        ],
      },
    ],
  },

  {
    id: "hotel-accessibility",
    category: "hotel",
    titleZh: "无障碍设施",
    titleEn: "Accessibility Services",
    description: "了解和使用酒店的无障碍设施和服务",
    otherRole: "前台接待员",
    otherRoleIcon: "♿",
    flows: [
      {
        id: "wheelchair-access",
        titleZh: "轮椅无障碍",
        titleEn: "Wheelchair Accessibility",
        description: "了解酒店轮椅无障碍设施",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "My mother uses a wheelchair. Do you have accessible rooms available?",
            textZh: "我母亲坐轮椅。有无障碍房间吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, we have ADA-compliant accessible rooms on every floor. They feature wider doorways, roll-in showers, grab bars, and lowered countertops.",
            textZh: "有的，每层都有符合ADA标准的无障碍房间。配有加宽门口、无门槛淋浴、扶手和降低的台面。",
            keyPhrases: [
              { en: "ADA-compliant", zh: "符合ADA（无障碍）标准" },
              { en: "accessible rooms", zh: "无障碍房间" },
              { en: "wider doorways", zh: "加宽门口" },
              { en: "roll-in showers", zh: "无门槛淋浴" },
              { en: "grab bars", zh: "扶手" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely. We have fully accessible rooms on every floor — wide doors, barrier-free showers, handrails, and lowered surfaces. Everything's designed for wheelchair users.", textZh: "当然有。每层都有全无障碍房间——宽门、无障碍淋浴、扶手和降低的台面。全部为轮椅使用者设计。", actionHint: "用barrier-free和handrails", frequency: "common" },
              { textEn: "Yes, we do. Our accessible rooms meet all ADA standards — extra-wide doorways, step-free showers with grab bars, and lower counters throughout.", textZh: "有的。我们的无障碍房间符合所有ADA标准——超宽门口、无门槛淋浴配扶手、全面降低的台面。", actionHint: "用step-free和throughout", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can she easily get to the restaurant and pool area in her wheelchair?",
            textZh: "她坐轮椅能方便地去餐厅和泳池区吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Absolutely. All public areas are wheelchair accessible with ramps and automatic doors. The pool also has a wheelchair lift for pool entry.",
            textZh: "当然。所有公共区域都有坡道和自动门，轮椅可通行。泳池也有轮椅升降机方便入水。",
            keyPhrases: [
              { en: "wheelchair accessible", zh: "轮椅可通行" },
              { en: "ramps", zh: "坡道" },
              { en: "automatic doors", zh: "自动门" },
              { en: "wheelchair lift", zh: "轮椅升降机" },
            ],
            alternativeExpressions: [
              { textEn: "No problem at all. Every public space is fully accessible — ramps, wide corridors, and auto-opening doors. The pool even has a special lift for wheelchair access.", textZh: "完全没问题。所有公共区域都完全无障碍——坡道、宽走廊、自动开门。泳池还有专用轮椅升降机。", actionHint: "用auto-opening doors", frequency: "common" },
              { textEn: "Everything is wheelchair-friendly. All common areas have ramps and powered doors, and the pool has a hoist to help her get in and out safely.", textZh: "一切都对轮椅友好。所有公共区域有坡道和电动门，泳池有升降设备帮助她安全出入水。", actionHint: "用hoist", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a charge for the accessible room? Sometimes hotels charge extra.",
            textZh: "无障碍房间加收费用吗？有些酒店会加价。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "No extra charge at all. Accessible rooms are the same rate as standard rooms. It's the law, and it's the right thing to do.",
            textZh: "完全不加收。无障碍房间和标准间同价。这是法律要求，也是应该做的。",
            keyPhrases: [
              { en: "no extra charge", zh: "不加收费用" },
              { en: "same rate", zh: "同价" },
            ],
            alternativeExpressions: [
              { textEn: "There's no additional cost whatsoever. Accessible rooms are priced the same as any other room. That's non-negotiable for us.", textZh: "完全不额外收费。无障碍房间和其他房间价格一样。这对我们来说不可商量。", actionHint: "用non-negotiable", frequency: "common" },
              { textEn: "Absolutely not — same price as a standard room. Accessibility should never come with a surcharge.", textZh: "完全不会——和标准间同价。无障碍服务不应该有附加费。", actionHint: "表达价值观", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's good to hear. Can you also arrange a wheelchair-accessible taxi for us?",
            textZh: "那就好。能帮我们安排无障碍出租车吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course. Just give us about 20 minutes' notice and we'll arrange a wheelchair-accessible vehicle. Our concierge can also recommend accessible tourist attractions.",
            textZh: "当然。提前约20分钟通知我们就行。我们的礼宾台也可以推荐无障碍旅游景点。",
            keyPhrases: [
              { en: "wheelchair-accessible vehicle", zh: "无障碍车辆" },
              { en: "notice", zh: "提前通知" },
              { en: "accessible tourist attractions", zh: "无障碍旅游景点" },
            ],
            alternativeExpressions: [
              { textEn: "Happy to! Just let us know about 20 minutes beforehand and we'll book an accessible cab. Our concierge also knows which local attractions are wheelchair-friendly.", textZh: "很乐意！提前20分钟左右告诉我们，我们预约无障碍出租车。礼宾台也知道哪些本地景点方便轮椅出行。", actionHint: "用beforehand和cab", frequency: "common" },
              { textEn: "Of course — we have a preferred service for accessible vehicles. Give us a heads-up 20 minutes out and it'll be waiting. We can also suggest barrier-free sightseeing spots.", textZh: "当然——我们有无障碍车辆合作服务。提前20分钟通知就行。也可以推荐无障碍观光景点。", actionHint: "用barrier-free sightseeing", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you for making everything so easy for us.",
            textZh: "谢谢你们让一切都这么方便。",
          },
        ],
      },
      {
        id: "hearing-impaired",
        titleZh: "听障服务",
        titleEn: "Hearing Impaired Services",
        description: "了解酒店为听障客人提供的服务",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "My father is hard of hearing. What accommodations do you offer for hearing-impaired guests?",
            textZh: "我父亲听力不好。你们为听障客人提供什么便利？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "We have rooms equipped with visual alert systems — the doorbell and phone flash a light instead of ringing. The fire alarm also has a strobe light and a bed shaker.",
            textZh: "我们有配备视觉提示系统的房间——门铃和电话闪灯而不是响铃。火警也有闪灯和床震器。",
            keyPhrases: [
              { en: "visual alert systems", zh: "视觉提示系统" },
              { en: "flash a light", zh: "闪灯" },
              { en: "strobe light", zh: "闪光灯" },
              { en: "bed shaker", zh: "床震器" },
            ],
            alternativeExpressions: [
              { textEn: "We've got special rooms for hearing-impaired guests. The doorbell and phone use flashing lights, and the fire alarm has a bright strobe plus a vibrating pad under the mattress.", textZh: "我们有专门给听障客人的房间。门铃和电话用闪灯提示，火警有强闪光灯加床垫下的振动垫。", actionHint: "用vibrating pad", frequency: "common" },
              { textEn: "Our hearing-accessible rooms have visual notifications for everything — door, phone, and alarms all use lights instead of sound. The fire alarm even vibrates the bed.", textZh: "我们的听障无障碍房间所有提示都是视觉的——门铃、电话、警报全用灯光而不是声音。火警还会振动床。", actionHint: "用visual notifications", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's very thorough. Does the TV have closed captioning?",
            textZh: "很全面。电视有字幕吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, all our TVs support closed captioning. I can also provide a written guide for all hotel services so your father doesn't need to rely on phone calls.",
            textZh: "有的，所有电视都支持字幕。我还可以提供酒店所有服务的书面指南，这样您父亲不需要依赖电话。",
            keyPhrases: [
              { en: "closed captioning", zh: "字幕" },
              { en: "written guide", zh: "书面指南" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely — captions are available on all TV channels. I can also give you a printed booklet of our hotel services so your father has everything in writing.", textZh: "当然——所有电视频道都有字幕。我还可以给您一本酒店服务手册，这样您父亲什么都有文字版。", actionHint: "用printed booklet", frequency: "common" },
              { textEn: "Yes, subtitles work on every channel. I'll also prepare a written information pack covering all our services — no need for phone calls.", textZh: "是的，每个频道都能开字幕。我还会准备一份书面信息包涵盖所有服务——不需要打电话。", actionHint: "用information pack", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "A written guide would be very helpful. He can also text instead of call, right?",
            textZh: "书面指南会很有用。他也可以发短信而不是打电话，对吧？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes! Guests can text the front desk at this number for any requests. We also have a tablet in the room that connects directly to our services — everything is visual and text-based.",
            textZh: "是的！客人可以发短信到这个号码联系前台。房间里还有一个平板电脑直连酒店服务——全是视觉和文字操作。",
            keyPhrases: [
              { en: "text the front desk", zh: "短信联系前台" },
              { en: "tablet", zh: "平板电脑" },
              { en: "text-based", zh: "基于文字的" },
            ],
            alternativeExpressions: [
              { textEn: "Definitely! He can text us anytime at this number. There's also a tablet in the room for ordering services — all done through the screen, no calls needed.", textZh: "完全可以！随时发短信到这个号码联系我们。房间里还有平板可以点服务——全屏幕操作，不用打电话。", actionHint: "用no calls needed", frequency: "common" },
              { textEn: "Yes — we have a texting line for the front desk. Plus, there's an in-room device that lets you request anything through a touchscreen. Everything is visual.", textZh: "有的——前台有短信专线。另外房间里有个设备可以通过触屏申请任何服务。全是视觉操作。", actionHint: "用texting line和in-room device", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's fantastic. He'll feel very comfortable here. One more thing — can the wake-up call be replaced with something visual?",
            textZh: "太好了。他在这里会很舒服。还有——叫醒服务能换成视觉提示的吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, we can set a vibrating alarm clock or use the bed shaker for wake-up. We can also send a staff member to knock with a flashlight signal at the peephole.",
            textZh: "可以，我们可以设震动闹钟或用床震器叫醒。也可以派工作人员来用手电筒在猫眼处打信号。",
            keyPhrases: [
              { en: "vibrating alarm clock", zh: "震动闹钟" },
              { en: "peephole", zh: "猫眼" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely. We can provide a shaking alarm or activate the bed vibrator for the morning. If you prefer, a staff member can come knock and signal through the peephole with a light.", textZh: "当然。可以提供震动闹钟或激活床震动器。如果您愿意，也可以派人来敲门并在猫眼处用灯光示意。", actionHint: "用shaking alarm", frequency: "common" },
              { textEn: "We have vibrating alarm clocks that work great. We can also arrange for someone to physically come to the room and let him know it's time with a visual cue.", textZh: "我们有效果很好的震动闹钟。也可以安排人亲自到房间用视觉信号通知他起床时间。", actionHint: "用visual cue", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The vibrating alarm would be great. Thank you for being so inclusive.",
            textZh: "震动闹钟就好。谢谢你们这么包容。",
            culturalNote: "\'inclusive\' 在这里表示 \'包容的/考虑到所有人的\'，是现代服务行业很重视的理念。",
          },
        ],
      },
    ],
  },

  // ==================== 餐饮 ====================
  {
    id: "hotel-breakfast-buffet",
    category: "hotel",
    titleZh: "酒店早餐自助",
    titleEn: "Hotel Breakfast Buffet",
    description: "在酒店享用自助早餐，了解选择和规则",
    otherRole: "餐厅服务员",
    otherRoleIcon: "🍳",
    flows: [
      {
        id: "basic-breakfast",
        titleZh: "自助早餐入门",
        titleEn: "Breakfast Buffet Basics",
        description: "第一次使用酒店自助早餐",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "服务员",
            textEn: "Good morning! Welcome to breakfast. May I see your room key, please?",
            textZh: "早上好！欢迎来用早餐。请出示房卡。",
            keyPhrases: [
              { en: "room key", zh: "房卡" },
            ],
            alternativeExpressions: [
              { textEn: "Good morning! Right this way to breakfast. Could I just see your room key?", textZh: "早上好！请这边用早餐。能看下房卡吗？", actionHint: "更随意引导", frequency: "common" },
              { textEn: "Morning! Welcome to the restaurant. May I check your room card before seating you?", textZh: "早上好！欢迎来餐厅。入座前能看下房卡吗？", actionHint: "用seating you", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here you go. Is breakfast included in our stay?",
            textZh: "给您。早餐包含在房费里吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Yes, your booking includes breakfast for two. The buffet is self-service — help yourself to anything you'd like. Would you prefer a table by the window?",
            textZh: "是的，您的预订包含两人早餐。自助餐自取——随便享用。想坐窗边的桌子吗？",
            keyPhrases: [
              { en: "included", zh: "包含的" },
              { en: "self-service", zh: "自取/自助" },
              { en: "help yourself", zh: "随便取用" },
            ],
            alternativeExpressions: [
              { textEn: "Your stay comes with breakfast for two! It's a buffet — just grab whatever looks good. How about a spot by the window?", textZh: "您的房费含两人早餐！自助餐——看什么好拿什么就行。想坐窗边吗？", actionHint: "用spot替代table", frequency: "common" },
              { textEn: "Breakfast for two is included in your booking. Everything's laid out — feel free to go back as many times as you like. Window seat?", textZh: "预订包含两人早餐。都摆好了——随意取用，可以多拿几次。坐窗边？", actionHint: "用go back as many times", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. What's available on the buffet?",
            textZh: "好的。自助餐有什么？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "We have a hot section with scrambled eggs, bacon, sausages, and pancakes. The cold section has cereals, yogurt, fresh fruit, and pastries. There's also a made-to-order omelet station.",
            textZh: "热餐区有炒蛋、培根、香肠和松饼。冷餐区有麦片、酸奶、新鲜水果和糕点。还有现做蛋饼台。",
            keyPhrases: [
              { en: "scrambled eggs", zh: "炒蛋" },
              { en: "bacon", zh: "培根" },
              { en: "pancakes", zh: "松饼" },
              { en: "made-to-order", zh: "现做的" },
              { en: "omelet station", zh: "蛋饼台" },
            ],
            alternativeExpressions: [
              { textEn: "Lots of options! Hot food includes eggs, bacon, sausages, and pancakes. On the cold side, there's cereal, yogurt, fruit, and pastries. Oh, and we have an omelet bar where the chef makes it fresh for you.", textZh: "选择很多！热食有鸡蛋、培根、香肠和松饼。冷餐有麦片、酸奶、水果和糕点。对了，还有蛋饼台厨师现做。", actionHint: "用omelet bar", frequency: "common" },
              { textEn: "We've got a great spread. The hot buffet has eggs, bacon, sausage, and pancakes. Cold options include granola, yogurt, fresh fruit, and baked goods. And there's a live cooking station for custom omelets!", textZh: "我们的自助很丰盛。热餐有蛋、培根、香肠和松饼。冷餐有格兰诺拉、酸奶、鲜果和烘焙品。还有现场烹饪台做定制蛋饼！", actionHint: "用live cooking station", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "An omelet sounds great. Do I just go to the station and order?",
            textZh: "蛋饼不错。直接去蛋饼台点吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Yes, the chef will ask you what fillings you'd like — cheese, mushrooms, peppers, ham, and more. Coffee and tea are at your table — I'll bring some right over. Regular or decaf?",
            textZh: "是的，厨师会问您要什么馅——芝士、蘑菇、甜椒、火腿等等。咖啡和茶送到桌上——我马上拿。要普通咖啡还是无咖啡因的？",
            keyPhrases: [
              { en: "fillings", zh: "馅料" },
              { en: "regular or decaf", zh: "普通还是无咖啡因" },
            ],
            alternativeExpressions: [
              { textEn: "Just head over and tell the chef what you want inside — cheese, veggies, ham, you name it. I'll bring coffee to your table. Regular or decaf?", textZh: "走过去跟厨师说想加什么——芝士、蔬菜、火腿，随您选。我给您送咖啡到桌上。普通还是无咖啡因？", actionHint: "用you name it", frequency: "common" },
              { textEn: "Exactly — just pick your toppings at the station. Meanwhile, what can I get you to drink? We have fresh-brewed regular and decaf.", textZh: "没错——在台子那选配料就行。同时想喝什么？我们有现煮的普通咖啡和无咖啡因咖啡。", actionHint: "用toppings和fresh-brewed", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Regular coffee, please. What time does breakfast end?",
            textZh: "普通咖啡。早餐到几点结束？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Breakfast is served until 10 AM on weekdays and 10:30 AM on weekends. Take your time and enjoy!",
            textZh: "工作日供应到早上10点，周末到10:30。慢慢享用！",
            keyPhrases: [
              { en: "served until", zh: "供应到" },
              { en: "weekdays", zh: "工作日" },
              { en: "take your time", zh: "慢慢来" },
            ],
            alternativeExpressions: [
              { textEn: "Weekdays we wrap up at 10, weekends at 10:30. No rush — sit back and enjoy your meal!", textZh: "工作日10点结束，周末10:30。不着急——坐下慢慢享用！", actionHint: "用wrap up和sit back", frequency: "common" },
              { textEn: "Breakfast runs till 10 during the week and 10:30 on Saturdays and Sundays. There's plenty of time — relax and help yourself!", textZh: "工作日早餐到10点，周六周日到10:30。时间很充裕——放松随意取用！", actionHint: "用during the week", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "dietary-needs",
        titleZh: "特殊饮食需求",
        titleEn: "Dietary Needs at Breakfast",
        description: "在自助早餐中询问特殊饮食选项",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, are any of these dishes gluten-free? My daughter has celiac disease.",
            textZh: "不好意思，有无麸质的菜吗？我女儿有乳糜泻。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Yes, the items marked with a green 'GF' label are gluten-free. We have gluten-free bread, fruit, yogurt, and the eggs and bacon are naturally gluten-free.",
            textZh: "有的，标有绿色「GF」标签的是无麸质的。有无麸质面包、水果、酸奶，鸡蛋和培根天然无麸质。",
            keyPhrases: [
              { en: "gluten-free", zh: "无麸质" },
              { en: "celiac disease", zh: "乳糜泻" },
              { en: "GF label", zh: "GF标签" },
            ],
            alternativeExpressions: [
              { textEn: "We've got several GF options. Look for the green labels. The fruit, yogurt, eggs, and bacon are all naturally gluten-free, and we have special GF bread too.", textZh: "有好几种无麸质选择。认准绿色标签。水果、酸奶、鸡蛋和培根都天然无麸质，也有专门的无麸质面包。", actionHint: "用GF缩写和green labels", frequency: "common" },
              { textEn: "Absolutely. Anything with a green GF sticker is safe for her. That includes our gluten-free bread, all the fresh fruit, yogurt, and the cooked eggs and bacon.", textZh: "当然有。贴了绿色GF贴纸的都是安全的。包括无麸质面包、所有新鲜水果、酸奶和煎蛋培根。", actionHint: "用sticker和safe for her", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What about cross-contamination? She's very sensitive.",
            textZh: "交叉污染呢？她很敏感。",
            culturalNote: "\'cross-contamination\' 是食物过敏场景的重要词汇，指无麸质食品接触了含麸质的食品。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "The gluten-free items are prepared in a separate area with dedicated utensils. The omelet chef can also make a gluten-free omelet using a separate pan.",
            textZh: "无麸质食品在单独区域用专用器具准备。蛋饼厨师也可以用单独的锅做无麸质蛋饼。",
            keyPhrases: [
              { en: "cross-contamination", zh: "交叉污染" },
              { en: "separate area", zh: "单独区域" },
              { en: "dedicated utensils", zh: "专用器具" },
              { en: "separate pan", zh: "单独的锅" },
            ],
            alternativeExpressions: [
              { textEn: "We take that very seriously. All GF food is prepped in its own section with separate tools. The omelet chef can use a clean pan just for her too.", textZh: "我们非常重视这个。所有无麸质食品在独立区域用单独工具准备。蛋饼厨师也可以专门用干净锅给她做。", actionHint: "用take that seriously", frequency: "common" },
              { textEn: "Great question. The gluten-free items are kept apart and handled with their own utensils. If she wants an omelet, the chef will use a fresh pan that hasn't touched any gluten.", textZh: "好问题。无麸质食品单独存放，用专用器具处理。如果她要蛋饼，厨师会用没接触过麸质的新锅。", actionHint: "用kept apart", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's reassuring. Do you also have plant-based milk? I'm lactose intolerant.",
            textZh: "那就放心了。有植物奶吗？我乳糖不耐受。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "We have oat milk, almond milk, and soy milk at the coffee station. Just ask the barista and they'll steam it for your coffee.",
            textZh: "咖啡台有燕麦奶、杏仁奶和豆奶。跟咖啡师说一声就帮您打奶泡。",
            keyPhrases: [
              { en: "plant-based milk", zh: "植物奶" },
              { en: "lactose intolerant", zh: "乳糖不耐受" },
              { en: "oat milk", zh: "燕麦奶" },
              { en: "steam", zh: "打奶泡" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! We stock oat, almond, and soy milk at the coffee bar. The barista can froth any of them for a latte or cappuccino.", textZh: "当然！咖啡吧有燕麦奶、杏仁奶和豆奶。咖啡师可以用任何一种打泡做拿铁或卡布奇诺。", actionHint: "用stock和froth", frequency: "common" },
              { textEn: "We've got you covered — oat, almond, and soy are all available. Just let the barista know and they'll make your coffee however you like it.", textZh: "我们有准备——燕麦、杏仁和豆奶都有。跟咖啡师说一声，他们会按您喜欢的方式做。", actionHint: "用we've got you covered", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Oat milk would be great. You know, a lot of hotels don't have these options. I'm impressed.",
            textZh: "燕麦奶就好。说实话，很多酒店没有这些选择。很赞。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Thank you! We believe everyone should enjoy breakfast comfortably. If you have specific needs during your stay, let the kitchen know and we'll prepare something special.",
            textZh: "谢谢！我们觉得每个人都应该舒服地享用早餐。入住期间如有特殊需求，告诉厨房我们会特别准备。",
            keyPhrases: [
              { en: "specific needs", zh: "特殊需求" },
              { en: "prepare something special", zh: "特别准备" },
            ],
            alternativeExpressions: [
              { textEn: "That means a lot! We want every guest to have a great breakfast. If there's anything special you need while you're here, just talk to the kitchen and they'll sort it out.", textZh: "太感谢了！我们希望每位客人都能享受好早餐。住宿期间有什么特殊需求跟厨房说就行。", actionHint: "用sort it out", frequency: "common" },
              { textEn: "We appreciate that! Catering to all dietary needs is important to us. Feel free to let the chef know about any requirements — we're happy to customize.", textZh: "谢谢夸奖！满足各种饮食需求对我们很重要。有任何要求随时告诉厨师——我们很乐意定制。", actionHint: "用customize", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Will do. Thank you for taking dietary needs so seriously.",
            textZh: "好的。谢谢你们这么重视饮食需求。",
          },
        ],
      },
    ],
  },

  {
    id: "hotel-bar-drinks",
    category: "hotel",
    titleZh: "酒店酒吧：点饮品",
    titleEn: "Hotel Bar: Ordering Drinks",
    description: "在酒店酒吧点饮品，了解鸡尾酒和酒水选择",
    otherRole: "酒保",
    otherRoleIcon: "🍸",
    flows: [
      {
        id: "basic-drinks",
        titleZh: "基础点酒",
        titleEn: "Basic Drink Orders",
        description: "在酒吧点简单的饮品",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "酒保",
            textEn: "Good evening! What can I get for you?",
            textZh: "晚上好！想喝什么？",
            keyPhrases: [
              { en: "what can I get for you", zh: "想喝什么" },
            ],
            alternativeExpressions: [
              { textEn: "Hey there! What'll it be tonight?", textZh: "嗨！今晚来点什么？", actionHint: "更随意的酒吧用语", frequency: "common" },
              { textEn: "Evening! Welcome to the bar. What are you in the mood for?", textZh: "晚上好！欢迎来酒吧。想喝点什么？", actionHint: "用in the mood for", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Hi, I'd like a glass of red wine, please. What do you recommend?",
            textZh: "你好，来杯红酒。有什么推荐？",
            casualVersion: "Hey, what red wines do you have?",
          },
          {
            speaker: "them",
            role: "酒保",
            textEn: "We have a nice Cabernet Sauvignon from California and a Malbec from Argentina. The Cabernet is bolder and the Malbec is smoother. Shall I pour you a taste?",
            textZh: "我们有一款不错的加州赤霞珠和一款阿根廷马尔贝克。赤霞珠更浓郁，马尔贝克更顺滑。要尝一下吗？",
            keyPhrases: [
              { en: "Cabernet Sauvignon", zh: "赤霞珠" },
              { en: "Malbec", zh: "马尔贝克" },
              { en: "bolder", zh: "更浓郁" },
              { en: "smoother", zh: "更顺滑" },
              { en: "pour you a taste", zh: "倒一点尝尝" },
            ],
            alternativeExpressions: [
              { textEn: "For reds, we've got a California Cab Sauv and an Argentine Malbec. The Cab's got more punch, the Malbec is silky. Want to try a sip of each?", textZh: "红酒的话有加州赤霞珠和阿根廷马尔贝克。赤霞珠更有力度，马尔贝克很丝滑。各尝一口？", actionHint: "用Cab Sauv缩写和punch", frequency: "common" },
              { textEn: "Two great options tonight — a full-bodied Cabernet from California or a velvety Malbec from Argentina. I can let you sample both before you decide.", textZh: "今晚有两个好选择——醇厚的加州赤霞珠或丝绒般的阿根廷马尔贝克。两种都可以先尝再决定。", actionHint: "用full-bodied和velvety", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll try the Malbec. How much is a glass?",
            textZh: "我试马尔贝克。一杯多少钱？",
          },
          {
            speaker: "them",
            role: "酒保",
            textEn: "It's $14 for a 6-ounce pour. Would you like to start a tab or pay as you go?",
            textZh: "6盎司一杯14美元。要开吧台账还是随走随付？",
            keyPhrases: [
              { en: "6-ounce pour", zh: "6盎司一杯" },
              { en: "start a tab", zh: "开吧台账" },
              { en: "pay as you go", zh: "随走随付" },
            ],
            culturalNote: "\'start a tab\' 是在酒吧常用的说法，意思是先记账最后一起付。",
            alternativeExpressions: [
              { textEn: "A glass runs $14 for a generous pour. Would you like to open a tab or settle up after each round?", textZh: "一杯14美元，量很足。要开个账还是每轮结一次？", actionHint: "用generous pour和round", frequency: "common" },
              { textEn: "That's $14 for a glass. You can start a running tab or pay per drink — whatever works for you.", textZh: "一杯14美元。可以开账挂着或者按杯付——怎么方便怎么来。", actionHint: "用running tab和per drink", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll start a tab. Can you charge it to my room? Room 1208.",
            textZh: "开吧台账吧。能记到房间吗？1208房间。",
          },
          {
            speaker: "them",
            role: "酒保",
            textEn: "Of course. Here's your Malbec. We also have happy hour specials from 5 to 7 PM — half-price well drinks and $5 off wine bottles.",
            textZh: "当然。您的马尔贝克。我们5到7点有欢乐时光——普通调酒半价，葡萄酒减5美元。",
            keyPhrases: [
              { en: "happy hour", zh: "欢乐时光" },
              { en: "half-price", zh: "半价" },
              { en: "well drinks", zh: "普通调酒" },
            ],
            alternativeExpressions: [
              { textEn: "Here you go — enjoy! By the way, we run happy hour from 5 to 7 tomorrow. House cocktails are half off and bottles are discounted.", textZh: "给您——享用！顺便说，明天5到7点有欢乐时光。基础鸡尾酒半价，瓶装酒打折。", actionHint: "用house cocktails和half off", frequency: "common" },
              { textEn: "One Malbec! Oh, and just so you know — happy hour is 5 to 7 daily. Well drinks go for half price and wine bottles are $5 off.", textZh: "马尔贝克来了！对了——每天5到7点是欢乐时光。基础调酒半价，葡萄酒每瓶减5美元。", actionHint: "用go for表示卖价", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know for tomorrow. Do you have any non-alcoholic cocktails? My wife doesn't drink alcohol.",
            textZh: "明天可以试试。有无酒精鸡尾酒吗？我太太不喝酒。",
          },
          {
            speaker: "them",
            role: "酒保",
            textEn: "We have a full mocktail menu! The Virgin Mojito and the Passion Fruit Spritz are our most popular. I'll grab the menu for you.",
            textZh: "我们有完整的无酒精鸡尾酒菜单！处女莫吉托和百香果气泡饮最受欢迎。我拿菜单给您。",
            keyPhrases: [
              { en: "mocktail", zh: "无酒精鸡尾酒" },
              { en: "Virgin Mojito", zh: "处女莫吉托" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely! We've got a great mocktail list. The Virgin Mojito and Passion Fruit Fizz are the crowd favorites. Let me get you the menu.", textZh: "当然！我们有很棒的无酒精鸡尾酒单。处女莫吉托和百香果气泡饮最受欢迎。我拿菜单给您。", actionHint: "用Fizz和crowd favorites", frequency: "common" },
              { textEn: "Of course — our zero-proof cocktails are really popular. The Mojito and Passion Fruit Spritz are top sellers. Here, take a look at the menu.", textZh: "当然——我们的无酒精鸡尾酒非常受欢迎。莫吉托和百香果气泡饮是销冠。看看菜单吧。", actionHint: "用zero-proof和top sellers", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "cocktail-order",
        titleZh: "鸡尾酒点单",
        titleEn: "Cocktail Ordering",
        description: "了解和点鸡尾酒",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'd like to try a cocktail but I'm not sure what to order. What's your specialty?",
            textZh: "我想试鸡尾酒但不知道点什么。你们的招牌是什么？",
          },
          {
            speaker: "them",
            role: "酒保",
            textEn: "Our signature cocktail is the 'City Sunset' — vodka, blood orange, elderflower liqueur, and a splash of champagne. It's refreshing and not too strong.",
            textZh: "我们的招牌鸡尾酒是「城市日落」——伏特加、血橙、接骨木花利口酒，加一点香槟。清爽不太烈。",
            keyPhrases: [
              { en: "signature cocktail", zh: "招牌鸡尾酒" },
              { en: "vodka", zh: "伏特加" },
              { en: "elderflower liqueur", zh: "接骨木花利口酒" },
              { en: "refreshing", zh: "清爽的" },
            ],
            alternativeExpressions: [
              { textEn: "You've gotta try our 'City Sunset' — it's our house special. Vodka, blood orange, elderflower, and a touch of bubbly. Light and refreshing.", textZh: "一定要试试我们的「城市日落」——是我们的镇店之宝。伏特加、血橙、接骨木花加一点气泡。清爽轻盈。", actionHint: "用you've gotta try和house special", frequency: "common" },
              { textEn: "Our most popular creation is the 'City Sunset.' It's a mix of vodka, blood orange juice, elderflower, topped with champagne. Not too heavy, very drinkable.", textZh: "我们最受欢迎的是「城市日落」。用伏特加、血橙汁、接骨木花混合，顶上加香槟。不重，很好入口。", actionHint: "用drinkable", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds interesting. I usually like sweeter drinks. Is it sweet or more on the sour side?",
            textZh: "听起来不错。我一般喜欢偏甜的。这是甜的还是偏酸的？",
          },
          {
            speaker: "them",
            role: "酒保",
            textEn: "It's balanced — slightly sweet from the elderflower with a citrus finish. If you prefer sweeter, I can also recommend our Espresso Martini or a classic Piña Colada.",
            textZh: "很平衡——接骨木花带来微甜，有柑橘收尾。如果喜欢更甜的，推荐浓缩咖啡马天尼或经典椰林飘香。",
            keyPhrases: [
              { en: "balanced", zh: "平衡的" },
              { en: "citrus finish", zh: "柑橘收尾" },
              { en: "Espresso Martini", zh: "浓缩咖啡马天尼" },
              { en: "Piña Colada", zh: "椰林飘香" },
            ],
            alternativeExpressions: [
              { textEn: "It leans toward sweet with a hint of citrus at the end. For something even sweeter, try the Espresso Martini or a Piña Colada — both are crowd-pleasers.", textZh: "偏甜，结尾有一点柑橘味。如果想更甜可以试浓缩咖啡马天尼或椰林飘香——都很受欢迎。", actionHint: "用leans toward和crowd-pleasers", frequency: "common" },
              { textEn: "It's nicely balanced — the elderflower gives it sweetness and the orange brings a fresh citrus note. If you want sweeter, our Espresso Martini or Piña Colada would be perfect.", textZh: "很好地平衡了——接骨木花带来甜味，橙子带来清新的柑橘调。想更甜的话浓缩咖啡马天尼或椰林飘香很合适。", actionHint: "用citrus note", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll try the City Sunset. Can you make it a little less strong? I'm not a big drinker.",
            textZh: "我试城市日落。能做淡一点吗？我不太能喝。",
            culturalNote: "在酒吧可以要求 \'make it lighter\' 或 \'easy on the alcohol\'，酒保会减少烈酒用量。",
          },
          {
            speaker: "them",
            role: "酒保",
            textEn: "No problem — I'll go easy on the vodka and add a bit more juice. Would you like it on the rocks or straight up?",
            textZh: "没问题——伏特加少放，多加点果汁。要加冰还是不加冰？",
            keyPhrases: [
              { en: "go easy on", zh: "少放" },
              { en: "on the rocks", zh: "加冰" },
              { en: "straight up", zh: "不加冰" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing — I'll lighten up on the vodka and top it with more juice. Want it over ice or served up without?", textZh: "没问题——伏特加少放，果汁多加。要加冰还是不加冰？", actionHint: "用lighten up和served up", frequency: "common" },
              { textEn: "I can absolutely do that — less spirit, more mixer. Ice or no ice?", textZh: "完全可以——少放烈酒，多放果汁。加冰还是不加？", actionHint: "用spirit和mixer", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "On the rocks, please. Also, do you have any bar snacks we can order?",
            textZh: "加冰。另外，有酒吧小食吗？",
          },
          {
            speaker: "them",
            role: "酒保",
            textEn: "We have a small bites menu — truffle fries, sliders, edamame, and a cheese board. The truffle fries pair really well with the City Sunset.",
            textZh: "有小食菜单——松露薯条、迷你汉堡、毛豆和芝士拼盘。松露薯条配城市日落特别搭。",
            keyPhrases: [
              { en: "small bites", zh: "小食" },
              { en: "truffle fries", zh: "松露薯条" },
              { en: "sliders", zh: "迷你汉堡" },
              { en: "cheese board", zh: "芝士拼盘" },
              { en: "pair well with", zh: "配…很搭" },
            ],
            alternativeExpressions: [
              { textEn: "We've got some great bar snacks — truffle fries, mini burgers, edamame, and a cheese plate. The fries and the City Sunset are a perfect match, by the way.", textZh: "有很棒的酒吧小食——松露薯条、迷你汉堡、毛豆和芝士盘。顺便说，薯条配城市日落绝了。", actionHint: "用mini burgers和perfect match", frequency: "common" },
              { textEn: "Our snack menu has truffle fries, sliders, edamame, and a selection of cheeses. I'd highly recommend the fries with your cocktail — they go together beautifully.", textZh: "小食菜单有松露薯条、迷你汉堡、毛豆和精选芝士。强烈推荐薯条配您的鸡尾酒——绝配。", actionHint: "用go together beautifully", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Truffle fries and the cheese board, please. This is turning into a great evening!",
            textZh: "来松露薯条和芝士拼盘。今晚真不错！",
          },
          {
            speaker: "them",
            role: "酒保",
            textEn: "Coming right up! I'll add everything to your room tab. The kitchen takes about 10 minutes for the food. Cheers!",
            textZh: "马上来！都记到您的房间账上。食物大约10分钟出来。干杯！",
            keyPhrases: [
              { en: "coming right up", zh: "马上来" },
              { en: "room tab", zh: "房间账单" },
              { en: "cheers", zh: "干杯" },
            ],
            alternativeExpressions: [
              { textEn: "On its way! Everything goes on your room. Food will be about 10 minutes. Enjoy your night!", textZh: "马上来！都记到房间账上。食物大约10分钟。祝您度过愉快的夜晚！", actionHint: "用on its way", frequency: "common" },
              { textEn: "You got it! All on the room tab. The kitchen needs about 10 minutes for the food. Sit back and enjoy — cheers!", textZh: "收到！全挂房间账。厨房需要大约10分钟准备食物。坐好享受吧——干杯！", actionHint: "用sit back and enjoy", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },
];
