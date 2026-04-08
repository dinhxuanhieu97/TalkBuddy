import type { PresetScene } from "../scene-types";

// ============================================================
// 娱乐场景 — Entertainment Scenes
// 覆盖：电影院、博物馆、酒吧夜生活、SPA按摩
// ============================================================

export const ENTERTAINMENT_SCENES: PresetScene[] = [
  // ==================== 电影院看电影 ====================
  {
    id: "entertainment-cinema",
    category: "entertainment",
    titleZh: "电影院看电影",
    titleEn: "Going to the Cinema",
    description: "在国外电影院买票、选座、购买零食，享受观影体验",
    otherRole: "电影院工作人员",
    otherRoleIcon: "film",
    flows: [
      {
        id: "buy-tickets",
        titleZh: "买票选座买零食",
        titleEn: "Buy Tickets & Snacks",
        description: "在售票窗口买票、选座位、到零食柜台买爆米花和饮料",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, two tickets for the 7:30 showing of \"Dune\", please.",
            textZh: "你好，我要两张7:30那场《沙丘》的票。",
            casualVersion: "Hey, can I get two for Dune at 7:30?",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "Sure! Would you like standard or IMAX? IMAX is five dollars extra per ticket.",
            textZh: "好的！您要普通厅还是IMAX？IMAX每张票加5美元。",
            keyPhrases: [
              { en: "standard", zh: "普通厅" },
              { en: "IMAX", zh: "IMAX巨幕" },
              { en: "extra per ticket", zh: "每张票加钱" },
            ],
            variations: [
              { textEn: "Of course. Regular screen or IMAX? There's a surcharge for IMAX.", textZh: "当然。普通银幕还是IMAX？IMAX有附加费。" },
            ],
            alternativeExpressions: [
              { textEn: "You want regular or IMAX? IMAX is gonna be an extra five bucks a ticket.", textZh: "你要普通的还是IMAX？IMAX每张票多五块。", actionHint: "选择厅型", frequency: "common" },
              { textEn: "We've got standard and IMAX. IMAX runs a little more — five dollars on top.", textZh: "有普通和IMAX。IMAX稍贵——多五美元。", actionHint: "了解差价", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "IMAX, please. Can we pick our seats?",
            textZh: "IMAX的，谢谢。我们可以选座吗？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "Absolutely. Here's the seating chart on the screen. The gray seats are taken, and the blue ones are available. I'd recommend row G or H — they're right in the sweet spot.",
            textZh: "当然可以。屏幕上是座位图。灰色的已售出，蓝色的可以选。我推荐G排或H排——那是最佳观影区。",
            keyPhrases: [
              { en: "seating chart", zh: "座位图" },
              { en: "taken", zh: "已售出" },
              { en: "available", zh: "可选的" },
              { en: "sweet spot", zh: "最佳位置" },
            ],
            culturalNote: "在欧美电影院，大多数都可以自选座位。工作人员通常会推荐中间偏后的位置（sweet spot），因为那里视角和音响效果最好。",
            alternativeExpressions: [
              { textEn: "Here's what we've got — gray means taken, blue means open. Rows G and H are your best bet.", textZh: "这是座位情况——灰色是已售，蓝色是空的。G排和H排最好。", actionHint: "看屏幕选座", frequency: "common" },
              { textEn: "Pull up the seat map on the screen. Anything in blue is up for grabs. G and H are the sweet spot.", textZh: "看屏幕上的座位图。蓝色的都能选。G和H排是最佳位置。", actionHint: "自己选座", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "G5 and G6 look good. We'll take those.",
            textZh: "G5和G6看起来不错。我们选这两个。",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "Great choice. That'll be $34 total. Cash or card?",
            textZh: "选得好。一共34美元。现金还是刷卡？",
            keyPhrases: [
              { en: "total", zh: "总共" },
              { en: "cash or card", zh: "现金还是刷卡" },
            ],
            alternativeExpressions: [
              { textEn: "That comes to $34. How would you like to pay?", textZh: "一共34美元。怎么付？", actionHint: "告知付款方式", frequency: "common" },
              { textEn: "All right, $34 for the two. Card or cash?", textZh: "好的，两张34美元。刷卡还是现金？", actionHint: "准备付款", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Card, please. And where's the concession stand?",
            textZh: "刷卡。请问零食柜台在哪儿？",
            culturalNote: "concession stand 是电影院卖零食饮料的柜台，这个词在美国很常用。英国人可能说 snack bar 或 pick 'n' mix counter。",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "Just around the corner to your left. Enjoy the movie!",
            textZh: "左转就到了。祝观影愉快！",
            keyPhrases: [
              { en: "around the corner", zh: "拐角处" },
              { en: "enjoy the movie", zh: "观影愉快" },
            ],
            alternativeExpressions: [
              { textEn: "It's right over there on the left. Have a great movie!", textZh: "就在左边那儿。祝观影愉快！", actionHint: "去买零食", frequency: "common" },
              { textEn: "Hang a left and you'll see it. Enjoy the show!", textZh: "左转就看到了。祝观影愉快！", actionHint: "找零食柜台", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Hi, can I get a large popcorn and two medium Cokes?",
            textZh: "你好，来一个大份爆米花和两杯中杯可乐。",
            casualVersion: "Large popcorn and two medium Cokes, please.",
          },
          {
            speaker: "them",
            role: "零食柜台",
            textEn: "Would you like butter on your popcorn? And we have a combo deal — large popcorn plus two drinks for $18 instead of $22.",
            textZh: "爆米花要加黄油吗？我们有套餐优惠——大份爆米花加两杯饮料18美元，比单买22美元划算。",
            keyPhrases: [
              { en: "butter", zh: "黄油" },
              { en: "combo deal", zh: "套餐优惠" },
              { en: "instead of", zh: "而不是（比……划算）" },
            ],
            culturalNote: "美国电影院的爆米花默认可以加黄油（melted butter），这跟国内直接吃不太一样。很多人会加，口感更香但也更油。",
            alternativeExpressions: [
              { textEn: "Butter on the popcorn? Oh, and heads up — we've got a deal on the combo, saves you a few bucks.", textZh: "爆米花加黄油吗？对了告诉你——我们有套餐优惠，能省几块钱。", actionHint: "问清楚套餐内容", frequency: "common" },
              { textEn: "You want butter? Also, just so you know, the combo's $18 for a large popcorn and two drinks — way better than buying separate.", textZh: "要黄油吗？另外跟你说一下，套餐18美元包括大份爆米花和两杯饮料——比单买划算多了。", actionHint: "考虑买套餐", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "The combo sounds great. Light butter on the popcorn, please.",
            textZh: "套餐不错。爆米花少放点黄油。",
          },
          {
            speaker: "them",
            role: "零食柜台",
            textEn: "You got it. Theater 5 is down the hall on your right. The previews start in about ten minutes.",
            textZh: "没问题。5号厅在走廊右手边。预告片大概10分钟后开始。",
            keyPhrases: [
              { en: "theater", zh: "放映厅" },
              { en: "down the hall", zh: "沿走廊走" },
              { en: "previews", zh: "预告片" },
            ],
            alternativeExpressions: [
              { textEn: "You're in Theater 5 — down the hall on your right. Trailers should start in like ten minutes.", textZh: "你在5号厅——走廊右手边。预告片大概十分钟后开始。", actionHint: "找放映厅", frequency: "common" },
              { textEn: "Theater 5, take a right down the hall. You've got about ten minutes before it starts.", textZh: "5号厅，沿走廊右转。大约十分钟后开始。", actionHint: "准备入场", frequency: "common" },
            ],
          },
        ],
      },

      // --- Flow 2: 电影已开场/换场次 ---
      {
        id: "late-arrival",
        titleZh: "迟到换场次",
        titleEn: "Late Arrival / Change Showtime",
        description: "到了发现电影已经开始，想换下一场或处理其他问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I think we missed the start of our movie. We had tickets for the 7:30 showing but it's almost 8 o'clock now.",
            textZh: "不好意思，我们好像错过了电影开头。我们买的是7:30的票，但现在都快8点了。",
          },
          {
            speaker: "them",
            role: "服务台",
            textEn: "Let me check. Yeah, that movie started about 25 minutes ago. You've missed the opening but not the main plot yet. Would you still like to go in, or would you prefer to switch to a later showing?",
            textZh: "我看一下。是的，那部电影已经开始大约25分钟了。您错过了开头，但主要剧情还没开始。您想直接进去，还是换到下一场？",
            keyPhrases: [
              { en: "missed the opening", zh: "错过了开头" },
              { en: "main plot", zh: "主要剧情" },
              { en: "switch to", zh: "换到" },
              { en: "later showing", zh: "下一场" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, it's been going for about 25 minutes. You could still go in, or I can switch you to the next one.", textZh: "是的，已经放了大约25分钟了。你可以直接进去，或者我帮你换下一场。", actionHint: "决定是否换场", frequency: "common" },
              { textEn: "That one started a while ago. Want to catch the next showing instead?", textZh: "那场已经开了一会儿了。要换下一场吗？", actionHint: "考虑换场次", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a later showing we could switch to? I'd rather watch it from the beginning.",
            textZh: "有下一场可以换吗？我还是想从头看。",
          },
          {
            speaker: "them",
            role: "服务台",
            textEn: "Sure, the next one is at 9:45 PM. Same theater. I can transfer your tickets at no extra charge since it's the same format.",
            textZh: "当然，下一场是晚上9:45。同一个厅。因为是同一种格式，我可以免费帮您换票。",
            keyPhrases: [
              { en: "transfer your tickets", zh: "帮您换票" },
              { en: "no extra charge", zh: "不加钱/免费" },
              { en: "same format", zh: "同一种格式" },
            ],
            variations: [
              { textEn: "The next available showing is 9:45. I can swap your tickets — no fee since it's the same screen type.", textZh: "下一个可选场次是9:45。我可以帮您换票——同一种银幕类型不收费。" },
            ],
            alternativeExpressions: [
              { textEn: "Next one's at 9:45. I can move your tickets over, no charge.", textZh: "下一场9:45。我帮你挪过去，不收费。", actionHint: "确认换票", frequency: "common" },
              { textEn: "9:45 works? Same screen, so I can just swap them for free.", textZh: "9:45可以吗？同一种银幕，我免费帮你换。", actionHint: "同意换票", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be perfect. Can we keep the same seats?",
            textZh: "太好了。能保留同样的座位吗？",
          },
          {
            speaker: "them",
            role: "服务台",
            textEn: "Let me see... G5 and G6 are open for that showing. You're all set. Here are your new tickets.",
            textZh: "我看看……那场G5和G6是空的。搞定了。给您新票。",
            keyPhrases: [
              { en: "open", zh: "空着的/可选的" },
              { en: "you're all set", zh: "搞定了" },
            ],
            culturalNote: "\"You're all set\" 是美国服务行业非常常见的说法，意思是\"全部办好了\"。在各种场景都会听到。",
            alternativeExpressions: [
              { textEn: "Looks like G5 and G6 are free. Done — here are your new tickets.", textZh: "G5和G6是空的。搞定——给你新票。", actionHint: "拿好新票", frequency: "common" },
              { textEn: "Good news, same seats are available. You're all good to go.", textZh: "好消息，同样的座位有空。你们没问题了。", actionHint: "确认新票", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. We've got about an hour to kill. Is there anywhere nearby to grab a coffee?",
            textZh: "好的。我们还有大约一个小时。附近有地方喝咖啡吗？",
            casualVersion: "Cool. Got an hour to kill — anywhere good for coffee around here?",
          },
          {
            speaker: "them",
            role: "服务台",
            textEn: "There's a Starbucks in the lobby and a couple of restaurants upstairs on the third floor. Just make sure you're back by 9:30 so you don't miss the start again!",
            textZh: "大厅有一家星巴克，三楼还有几家餐厅。记得9:30之前回来，别再错过开场了！",
            keyPhrases: [
              { en: "lobby", zh: "大厅" },
              { en: "upstairs", zh: "楼上" },
              { en: "make sure", zh: "确保/记得" },
            ],
            alternativeExpressions: [
              { textEn: "There's a coffee shop right in the lobby, and a food court on the third floor. Just be back by 9:30!", textZh: "大厅有个咖啡店，三楼有美食广场。9:30前回来就行！", actionHint: "去打发时间", frequency: "common" },
              { textEn: "Yeah, Starbucks is downstairs. Just don't lose track of time!", textZh: "嗯，楼下有星巴克。别忘了时间就好！", actionHint: "注意时间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Ha, we definitely won't be late this time. Thanks so much for your help!",
            textZh: "哈哈，这次绝对不会迟到了。非常感谢！",
          },
          {
            speaker: "them",
            role: "服务台",
            textEn: "No problem at all. Enjoy the movie!",
            textZh: "没问题。祝观影愉快！",
            keyPhrases: [
              { en: "no problem at all", zh: "完全没问题" },
            ],
            alternativeExpressions: [
              { textEn: "Happy to help! Have a great time.", textZh: "乐意效劳！祝你们玩得开心。", actionHint: "礼貌告别", frequency: "common" },
              { textEn: "Anytime! Enjoy the movie.", textZh: "随时来找我！观影愉快。", actionHint: "友好道别", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 参观博物馆 ====================
  {
    id: "entertainment-museum",
    category: "entertainment",
    titleZh: "参观博物馆",
    titleEn: "Visiting a Museum",
    description: "在国外参观博物馆，购票、租借语音导览、了解展览信息",
    otherRole: "博物馆工作人员",
    otherRoleIcon: "landmark",
    flows: [
      {
        id: "admission-audioguide",
        titleZh: "买票+语音导览+参观须知",
        titleEn: "Admission & Audio Guide",
        description: "在博物馆入口购票、租借语音导览设备、了解参观规则",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, two adult tickets, please. How much is admission?",
            textZh: "你好，两张成人票。门票多少钱？",
            casualVersion: "Hey, two adults please. What's the entry fee?",
          },
          {
            speaker: "them",
            role: "售票处",
            textEn: "General admission is $25 per adult. We also have a special exhibition on Impressionism right now — that's an additional $10. Would you like to include that?",
            textZh: "普通门票每位成人25美元。我们目前有一个印象派特展——需要另加10美元。您要加上吗？",
            keyPhrases: [
              { en: "general admission", zh: "普通门票" },
              { en: "special exhibition", zh: "特展" },
              { en: "additional", zh: "另加的" },
              { en: "include", zh: "包含/加上" },
            ],
            culturalNote: "欧美很多大型博物馆除了常设展览（permanent collection）外，还有需要额外购票的特展（special/temporary exhibition）。有些博物馆如大都会艺术博物馆的门票是\"建议捐赠\"（suggested donation），理论上可以少付。",
            alternativeExpressions: [
              { textEn: "It's $25 a head. There's also an Impressionism show on right now for an extra ten — totally worth it.", textZh: "每人25美元。现在还有印象派展另加十块——绝对值得看。", actionHint: "考虑是否加特展", frequency: "common" },
              { textEn: "Regular admission is 25. We've got a temporary exhibit going on too if you're interested — $10 more.", textZh: "普通门票25。如果你感兴趣我们还有临时展——多10美元。", actionHint: "了解特展信息", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, we'll add the special exhibition. Do you have an audio guide?",
            textZh: "好的，加上特展。你们有语音导览吗？",
          },
          {
            speaker: "them",
            role: "售票处",
            textEn: "We do! The audio guide is $7 each, and it's available in 12 languages including Mandarin Chinese. You can also download our free app and use your own headphones — it has the same content.",
            textZh: "有的！语音导览每台7美元，支持12种语言，包括中文普通话。您也可以下载我们的免费App，用自己的耳机——内容是一样的。",
            keyPhrases: [
              { en: "audio guide", zh: "语音导览" },
              { en: "available in", zh: "支持（语言）" },
              { en: "Mandarin Chinese", zh: "中文普通话" },
              { en: "download our app", zh: "下载我们的App" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah! Seven bucks each, comes in a bunch of languages. Or just grab our free app — same thing.", textZh: "有的！每台七块，好多语言可选。或者下载我们免费App——内容一样。", actionHint: "选择导览方式", frequency: "common" },
              { textEn: "We do — $7 a piece. But honestly, most people just use the app now. It's free and it has everything.", textZh: "有的——7美元一台。不过说实话，现在大多数人用App。免费的，什么都有。", actionHint: "下载App", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll use the app. Are there any rules I should know about? Like, can I take photos?",
            textZh: "我用App吧。有什么参观规则需要注意吗？比如，可以拍照吗？",
          },
          {
            speaker: "them",
            role: "售票处",
            textEn: "Photography is allowed in the permanent collection, but no flash and no tripods. The special exhibition is no photography at all, I'm afraid. Also, please don't touch the artworks, and large bags need to be checked at the cloakroom over there.",
            textZh: "常设展厅允许拍照，但不能用闪光灯和三脚架。特展区域很遗憾完全禁止拍照。另外请不要触摸艺术品，大件行李需要寄存在那边的衣帽间。",
            keyPhrases: [
              { en: "no flash", zh: "不能用闪光灯" },
              { en: "no tripods", zh: "不能用三脚架" },
              { en: "no photography", zh: "禁止拍照" },
              { en: "don't touch", zh: "不要触摸" },
              { en: "cloakroom", zh: "衣帽间/寄存处" },
            ],
            alternativeExpressions: [
              { textEn: "You can take pictures in the main galleries — just no flash. The special exhibit is a no-photo zone though.", textZh: "主展厅可以拍照——不能用闪光灯。但特展区不能拍。", actionHint: "注意拍照规则", frequency: "common" },
              { textEn: "Photos are cool in the permanent stuff, but leave the camera off in the special exhibit. And please don't touch anything.", textZh: "常设展可以拍照，特展区就别拍了。还有请不要碰任何东西。", actionHint: "遵守参观规则", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. What time does the museum close today?",
            textZh: "明白了。今天博物馆几点关门？",
          },
          {
            speaker: "them",
            role: "售票处",
            textEn: "We close at 6 PM, but last entry is at 5:15. The special exhibition closes a bit earlier — at 5:30. You've got about four hours, so plenty of time.",
            textZh: "我们6点关门，但最后入场时间是5:15。特展稍早一些——5:30关闭。您还有大约四个小时，时间很充裕。",
            keyPhrases: [
              { en: "last entry", zh: "最后入场时间" },
              { en: "closes earlier", zh: "更早关闭" },
              { en: "plenty of time", zh: "时间充裕" },
            ],
            alternativeExpressions: [
              { textEn: "We shut down at 6, last entry's at 5:15. You've got tons of time.", textZh: "我们6点关门，最后入场5:15。你们时间很充裕。", actionHint: "合理安排时间", frequency: "common" },
              { textEn: "Doors close at 6. Just make sure you're in before 5:15 — that's the cutoff.", textZh: "6点关门。确保5:15前进来——那是截止时间。", actionHint: "留意截止时间", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Where should we start? Any recommendations?",
            textZh: "太好了。我们从哪里开始看比较好？有推荐吗？",
          },
          {
            speaker: "them",
            role: "售票处",
            textEn: "I'd suggest starting on the second floor with the Renaissance gallery — that's our most popular section. Then work your way down. The special exhibition is on the ground floor, Wing B. Here's a floor map.",
            textZh: "我建议从二楼的文艺复兴展厅开始——那是我们最受欢迎的区域。然后往下看。特展在一楼B翼。给您一份楼层导览图。",
            keyPhrases: [
              { en: "second floor", zh: "二楼" },
              { en: "gallery", zh: "展厅" },
              { en: "work your way down", zh: "往下一层层看" },
              { en: "wing", zh: "翼/展区" },
              { en: "floor map", zh: "楼层导览图" },
            ],
            alternativeExpressions: [
              { textEn: "Start with the Renaissance stuff on the second floor — everyone loves that. Here's a map.", textZh: "先从二楼的文艺复兴开始——大家都喜欢。给你一份地图。", actionHint: "拿地图出发", frequency: "common" },
              { textEn: "I'd hit the second floor first — the Renaissance gallery is a must-see. Work your way down from there.", textZh: "我建议先去二楼——文艺复兴展厅必看。然后往下看。", actionHint: "规划路线", frequency: "common" },
            ],
          },
        ],
      },

      // --- Flow 2: 问路/问展品/纪念品店 ---
      {
        id: "exploring-museum",
        titleZh: "参观中问路问展品",
        titleEn: "Exploring & Asking Questions",
        description: "在博物馆内问路、询问展品信息、找纪念品商店",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, could you tell me where the Egyptian collection is?",
            textZh: "打扰一下，请问埃及展厅在哪里？",
          },
          {
            speaker: "them",
            role: "展厅引导员",
            textEn: "The Egyptian collection is on the third floor, in the East Wing. Take the elevator at the end of this corridor, then turn right when you get out. You can't miss it — there's a big replica of a pharaoh at the entrance.",
            textZh: "埃及展厅在三楼东翼。走到这条走廊尽头乘电梯，出来后右转。很好找——入口处有一个法老的大型复制品。",
            keyPhrases: [
              { en: "East Wing", zh: "东翼" },
              { en: "elevator", zh: "电梯" },
              { en: "corridor", zh: "走廊" },
              { en: "replica", zh: "复制品" },
              { en: "you can't miss it", zh: "很好找" },
            ],
            alternativeExpressions: [
              { textEn: "Egypt's on the third floor, East Wing. Take the lift up, hang a right — big pharaoh statue out front, can't miss it.", textZh: "埃及在三楼东翼。坐电梯上去，右转——门口有个大法老像，很好找。", actionHint: "记住路线", frequency: "common" },
              { textEn: "Third floor, go right out of the elevator. You'll see a huge pharaoh replica — that's the entrance.", textZh: "三楼，电梯出来右转。你会看到一个巨大的法老复制品——那就是入口。", actionHint: "找电梯上去", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks! Also, I'm curious about this painting here. There's no label on it. Do you know what it is?",
            textZh: "谢谢！另外，我对这幅画很好奇。旁边没有标签。您知道这是什么作品吗？",
          },
          {
            speaker: "them",
            role: "展厅引导员",
            textEn: "Oh, that's actually on loan from a private collector. It's a Dutch Golden Age piece — we just put it up last week and the placard is being printed. If you scan the QR code on the wall next to it, you'll get the full description on your phone.",
            textZh: "哦，那幅实际上是从私人收藏家那里借来的。是荷兰黄金时代的作品——上周才挂上的，说明牌正在制作中。如果您扫旁边墙上的二维码，手机上就能看到完整介绍。",
            keyPhrases: [
              { en: "on loan", zh: "借展的" },
              { en: "private collector", zh: "私人收藏家" },
              { en: "placard", zh: "说明牌" },
              { en: "QR code", zh: "二维码" },
            ],
            alternativeExpressions: [
              { textEn: "That one's a loaner from a private collection. Just went up last week — the info card isn't ready yet. Scan the QR code for the details.", textZh: "那是私人收藏借来的。上周才挂上——介绍牌还没好。扫二维码看详情。", actionHint: "扫码了解", frequency: "common" },
              { textEn: "It's on loan — Dutch Golden Age. The label is still being made. There's a QR code on the wall with all the info.", textZh: "是借展的——荷兰黄金时代。标签还在做。墙上有二维码有所有信息。", actionHint: "找二维码扫描", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's really cool. Is there a guided tour available? I feel like I'd learn more with a guide.",
            textZh: "太好了。有导览团可以参加吗？我觉得有导游讲解会学到更多。",
          },
          {
            speaker: "them",
            role: "展厅引导员",
            textEn: "Yes! We have free guided tours in English at 11 AM and 2 PM. They last about an hour and cover the highlights. The next one starts in 20 minutes at the main lobby. Just look for the guide holding a blue flag.",
            textZh: "有的！我们有免费英语导览团，每天上午11点和下午2点。大约一小时，会讲解重点展品。下一场20分钟后在大厅出发。找举蓝旗的导游就行。",
            keyPhrases: [
              { en: "guided tour", zh: "导览团" },
              { en: "highlights", zh: "重点/精华" },
              { en: "main lobby", zh: "大厅" },
              { en: "blue flag", zh: "蓝旗" },
            ],
            alternativeExpressions: [
              { textEn: "We do free English tours at 11 and 2. About an hour — hits all the highlights. Next one's in 20 minutes.", textZh: "有免费英语导览，11点和2点。大约一小时——涵盖所有精华。下一场20分钟后。", actionHint: "考虑参加导览", frequency: "common" },
              { textEn: "There's a docent-led tour starting soon — totally free. Meet in the lobby, look for the blue flag.", textZh: "马上有一个讲解员带的团——完全免费。在大厅集合，找蓝旗。", actionHint: "去大厅等导览", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd love to catch that. One more thing — where's the gift shop? I'd like to pick up some souvenirs.",
            textZh: "我想赶上那场。还有个问题——纪念品商店在哪儿？我想买点纪念品。",
          },
          {
            speaker: "them",
            role: "展厅引导员",
            textEn: "The main gift shop is on the ground floor near the exit. There's also a smaller one right next to the special exhibition. They have some beautiful art prints and postcards — quite popular with visitors.",
            textZh: "主要纪念品店在一楼出口附近。特展旁边还有一个小的。他们有很漂亮的艺术版画和明信片——游客很喜欢。",
            keyPhrases: [
              { en: "gift shop", zh: "纪念品商店" },
              { en: "near the exit", zh: "出口附近" },
              { en: "art prints", zh: "艺术版画" },
              { en: "postcards", zh: "明信片" },
            ],
            alternativeExpressions: [
              { textEn: "The big gift shop is near the exit on the ground floor. There's a smaller one by the special exhibit too.", textZh: "大的礼品店在一楼出口附近。特展旁边也有个小的。", actionHint: "记住位置", frequency: "common" },
              { textEn: "Two shops — one by the exit, one next to the special exhibition. Great postcards and prints.", textZh: "两个店——一个在出口旁，一个在特展旁边。有很好的明信片和版画。", actionHint: "结束后去逛", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, I'll check it out after the tour. Thanks for all your help!",
            textZh: "好的，导览结束后我去看看。谢谢你的帮助！",
          },
          {
            speaker: "them",
            role: "展厅引导员",
            textEn: "My pleasure! If you have any more questions, feel free to ask any of the staff in blue vests. Enjoy your visit!",
            textZh: "不客气！如果还有问题，随时找穿蓝色背心的工作人员。祝参观愉快！",
            keyPhrases: [
              { en: "my pleasure", zh: "不客气（很正式、礼貌）" },
              { en: "feel free to", zh: "随时/不用客气" },
              { en: "blue vests", zh: "蓝色背心" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! If you need anything else, just grab anyone in a blue vest. Enjoy!", textZh: "当然！需要什么找穿蓝色背心的就行。祝参观愉快！", actionHint: "记住找蓝色背心", frequency: "common" },
              { textEn: "You're welcome! Have a wonderful time. Don't hesitate to ask if you need help.", textZh: "不客气！祝参观愉快。需要帮助别犹豫直接问。", actionHint: "放心逛", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 酒吧夜生活 ====================
  {
    id: "entertainment-nightlife",
    category: "entertainment",
    titleZh: "酒吧夜生活",
    titleEn: "Bar & Nightlife",
    description: "在国外酒吧点酒、社交、认识新朋友",
    otherRole: "酒吧服务员",
    otherRoleIcon: "wine",
    flows: [
      {
        id: "ordering-drinks",
        titleZh: "点酒+社交",
        titleEn: "Ordering Drinks & Socializing",
        description: "在酒吧吧台点酒、了解酒单、和调酒师简单聊天",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi there! What do you have on tap?",
            textZh: "你好！你们有什么扎啤？",
            casualVersion: "Hey, what's on tap?",
            culturalNote: "\"on tap\" 指的是直接从酒桶里倒出来的扎啤/生啤（draft beer），跟瓶装啤酒（bottled beer）相对。在酒吧点啤酒时，这是最常见的问法。",
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "We've got six on tap tonight — two IPAs, a lager, a stout, a wheat beer, and a local craft pale ale. The pale ale is our most popular. Want to try a sample before you commit?",
            textZh: "今晚有六种扎啤——两款IPA、一款拉格、一款世涛、一款小麦啤酒、还有一款本地精酿淡色艾尔。淡色艾尔最受欢迎。要不要先试一小杯再决定？",
            keyPhrases: [
              { en: "on tap", zh: "扎啤/生啤" },
              { en: "IPA", zh: "印度淡色艾尔啤酒" },
              { en: "lager", zh: "拉格啤酒" },
              { en: "stout", zh: "世涛（黑啤）" },
              { en: "craft", zh: "精酿" },
              { en: "sample", zh: "试饮小杯" },
            ],
            culturalNote: "在欧美酒吧，点啤酒前可以请调酒师倒一小口试喝（sample/taster），这是完全正常的做法，不需要额外付费。",
            alternativeExpressions: [
              { textEn: "We've got six on tap. The local pale ale's been flying tonight. Wanna taste it first?", textZh: "有六种扎啤。本地淡色艾尔今晚卖得特别好。要先尝尝吗？", actionHint: "先试喝再决定", frequency: "common" },
              { textEn: "Six on draft tonight. Couple IPAs, a stout, lager, wheat, and a craft pale ale. Want a sample?", textZh: "今晚六种生啤。几款IPA、世涛、拉格、小麦和一款精酿淡色艾尔。要试一口吗？", actionHint: "选择试喝", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, I'll try the pale ale. And could I also see your cocktail menu?",
            textZh: "好的，我先试试淡色艾尔。另外能看一下鸡尾酒单吗？",
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Here you go — the sample and the cocktail menu. If you're into something refreshing, I'd recommend the Mojito or the Gin & Tonic. If you want something stronger, the Old Fashioned is a classic.",
            textZh: "给您——试饮杯和鸡尾酒单。如果您想喝清爽的，推荐莫吉托或金汤力。如果想喝烈一点的，老式鸡尾酒（Old Fashioned）是经典款。",
            keyPhrases: [
              { en: "refreshing", zh: "清爽的" },
              { en: "stronger", zh: "更烈的/酒精度更高的" },
              { en: "classic", zh: "经典款" },
            ],
            alternativeExpressions: [
              { textEn: "Here's your taster and the cocktail list. If you like light and fruity, go Mojito. Something with a kick? Old Fashioned, no question.", textZh: "这是试饮和鸡尾酒单。喜欢清爽水果味的就选莫吉托。想要有劲的？老式鸡尾酒，没得说。", actionHint: "看菜单选择", frequency: "common" },
              { textEn: "There you go. The Mojito's super refreshing if that's your thing. For something stiffer, try the Old Fashioned.", textZh: "给你。莫吉托超清爽如果你喜欢那种。想要烈一点的试试老式鸡尾酒。", actionHint: "决定点什么", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with the pale ale — it's really good. A pint, please. And a Mojito for my friend.",
            textZh: "我就喝这个淡色艾尔吧——真不错。来一品脱。再给我朋友来一杯莫吉托。",
            culturalNote: "pint（品脱）是英美酒吧常用的啤酒量词。美式品脱约473毫升，英式品脱约568毫升。也可以点 half pint（半品脱）。",
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Coming right up. Want to keep a tab open, or pay as you go?",
            textZh: "马上来。要开个吧台账单，还是每次单独付？",
            keyPhrases: [
              { en: "coming right up", zh: "马上来" },
              { en: "keep a tab open", zh: "开吧台账单（最后一起结）" },
              { en: "pay as you go", zh: "每次单独付" },
            ],
            culturalNote: "在美国酒吧，\"open a tab\" 意思是把你的信用卡放在吧台，消费全部记账，最后走时一起结。这是非常常见的做法。",
            alternativeExpressions: [
              { textEn: "Right away. You wanna start a tab or just pay now?", textZh: "马上来。要开账单还是现在就付？", actionHint: "选择付款方式", frequency: "common" },
              { textEn: "On its way. Tab or cash as you go?", textZh: "马上好。开账单还是每次付？", actionHint: "给卡开账单", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll open a tab. Here's my card.",
            textZh: "开个账单吧。这是我的卡。",
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Got it. I'll hold onto this. Just let me know when you're ready to close out. By the way, we have live music starting at 10 — should be a good time.",
            textZh: "好的，卡我先留着。想结账时告诉我就行。对了，10点有现场音乐表演——应该会很不错。",
            keyPhrases: [
              { en: "hold onto", zh: "先保管" },
              { en: "close out", zh: "结账/结清" },
              { en: "live music", zh: "现场音乐表演" },
            ],
            alternativeExpressions: [
              { textEn: "Cool, I'll keep your card. Just holler when you wanna close out. Oh, and there's a band playing at 10.", textZh: "好的，卡我收着。想结账时叫我。对了，10点有乐队表演。", actionHint: "留下来听音乐", frequency: "common" },
              { textEn: "I've got your card. Flag me down whenever you're ready to cash out. Heads up — live music kicks off at 10.", textZh: "卡在我这儿。想结账随时招呼我。提醒你——10点有现场音乐。", actionHint: "注意表演时间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Awesome, we'll stick around for that. Cheers!",
            textZh: "太好了，我们会留下来听的。干杯！",
            casualVersion: "Nice, we'll hang out for that. Cheers!",
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Cheers! Enjoy your night. Wave me down if you need anything.",
            textZh: "干杯！祝你们玩得开心。需要什么跟我招手就行。",
            keyPhrases: [
              { en: "cheers", zh: "干杯" },
              { en: "wave me down", zh: "跟我招手" },
            ],
            alternativeExpressions: [
              { textEn: "Cheers, guys! Let me know if you need anything — just give me a wave.", textZh: "干杯！需要什么跟我说——招招手就行。", actionHint: "需要时招手", frequency: "common" },
              { textEn: "Have a good one! Holler if you need a refill.", textZh: "玩得开心！要续杯就叫我。", actionHint: "享受夜晚", frequency: "common" },
            ],
          },
        ],
      },

      // --- Flow 2: 认识新朋友/聊天 ---
      {
        id: "meeting-people",
        titleZh: "认识新朋友",
        titleEn: "Meeting New People",
        description: "在酒吧和陌生人聊天、交朋友，练习社交英语",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hey, is this seat taken?",
            textZh: "嘿，这个位子有人吗？",
          },
          {
            speaker: "them",
            role: "陌生人",
            textEn: "No, go ahead! Are you here for the live music too?",
            textZh: "没有，请坐！你也是来听现场音乐的吗？",
            keyPhrases: [
              { en: "go ahead", zh: "请便/请坐" },
              { en: "here for", zh: "为了……而来" },
            ],
            alternativeExpressions: [
              { textEn: "Nah, all yours! You here for the band tonight?", textZh: "没有，随便坐！你也是来听今晚的乐队的？", actionHint: "回答并聊天", frequency: "common" },
              { textEn: "It's free! Yeah, sit down. Waiting for the music?", textZh: "空的！坐吧。等音乐呢？", actionHint: "坐下聊天", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yeah, my friend and I just got here. This place has a great vibe. Do you come here often?",
            textZh: "是啊，我和朋友刚到。这地方氛围很好。你常来吗？",
            casualVersion: "Yeah, we just got here. Love the vibe. You a regular here?",
          },
          {
            speaker: "them",
            role: "陌生人",
            textEn: "Pretty regularly, yeah. They have the best live music in the neighborhood. I'm Alex, by the way. Where are you guys from?",
            textZh: "算是常客吧。这里的现场音乐是附近最好的。对了，我叫Alex。你们从哪来的？",
            keyPhrases: [
              { en: "pretty regularly", zh: "算是常来" },
              { en: "neighborhood", zh: "这一带/附近" },
              { en: "by the way", zh: "对了/顺便说一下" },
              { en: "where are you from", zh: "你从哪来" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, I'm here like every week. Best live music spot around. I'm Alex — where you guys from?", textZh: "嗯，我基本每周都来。附近最好的现场音乐地方。我叫Alex——你们从哪来的？", actionHint: "自我介绍", frequency: "common" },
              { textEn: "I come here a lot, yeah. The music's always solid. Alex, by the way. You visiting or do you live around here?", textZh: "我经常来。音乐一直很棒。我叫Alex。你们是旅游还是住这附近？", actionHint: "介绍自己", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Nice to meet you, Alex. I'm Wayne. We're from China — just traveling here for a week. Any recommendations for things to do around here?",
            textZh: "很高兴认识你，Alex。我叫Wayne。我们从中国来的——在这旅游一周。你有什么好玩的地方推荐吗？",
          },
          {
            speaker: "them",
            role: "陌生人",
            textEn: "Oh cool! Welcome! You should definitely check out the flea market on Saturday mornings — it's just two blocks from here. And if you like seafood, there's an amazing oyster bar on 5th Street. Oh, and the sunset from the waterfront park is unreal.",
            textZh: "哦酷！欢迎！你们一定要去周六早上的跳蚤市场——离这里就两个街区。如果你们喜欢海鲜，5号街上有一家超棒的生蚝酒吧。还有，滨水公园的日落简直美到不真实。",
            keyPhrases: [
              { en: "check out", zh: "去看看" },
              { en: "flea market", zh: "跳蚤市场" },
              { en: "blocks", zh: "街区" },
              { en: "oyster bar", zh: "生蚝酒吧" },
              { en: "waterfront", zh: "滨水/海滨" },
              { en: "unreal", zh: "美到不真实" },
            ],
            alternativeExpressions: [
              { textEn: "Oh man, you gotta hit the Saturday flea market — it's two blocks away. And there's this killer oyster place on 5th Street.", textZh: "伙计，你们一定要去周六跳蚤市场——两个街区远。5号街还有家超棒的生蚝店。", actionHint: "记下推荐", frequency: "common" },
              { textEn: "Definitely the flea market on Saturday, and the sunset at the waterfront is insane. Oh, and 5th Street has amazing seafood.", textZh: "一定要去周六跳蚤市场，滨水区日落美到疯。还有5号街海鲜超赞。", actionHint: "规划行程", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Those all sound amazing! We'll definitely hit up the flea market. Can I get your number or Instagram? Maybe you could show us around sometime.",
            textZh: "听起来都很棒！我们一定去跳蚤市场。能加你的手机号或Instagram吗？也许你可以带我们逛逛。",
            casualVersion: "That sounds sick! We're totally hitting the flea market. Hey, can I grab your Insta?",
            culturalNote: "在欧美社交场合，要联系方式时通常会说 \"Can I get your number?\" 或 \"What's your Instagram?\"。这是很自然的交友方式，不会显得唐突。",
          },
          {
            speaker: "them",
            role: "陌生人",
            textEn: "For sure! Here, scan my QR code. I'm actually off this Saturday, so I could totally take you guys to the flea market if you're down.",
            textZh: "当然！来，扫我的二维码。我这个周六正好休息，如果你们愿意的话，我可以带你们去跳蚤市场。",
            keyPhrases: [
              { en: "for sure", zh: "当然/没问题" },
              { en: "I'm off", zh: "我休息/不上班" },
              { en: "if you're down", zh: "如果你们愿意的话" },
            ],
            alternativeExpressions: [
              { textEn: "Totally! Here's my Instagram — just add me. I'm free Saturday if you wanna go to the market together.", textZh: "当然！这是我的Instagram——加我就行。周六我有空，要一起去市场的话。", actionHint: "加联系方式", frequency: "common" },
              { textEn: "Yeah, no problem! Scan this. I could actually take you to the flea market this Saturday — I'm not working.", textZh: "没问题！扫这个。这周六我能带你们去跳蚤市场——我不上班。", actionHint: "确认周六", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be awesome! We'd really appreciate that. Let me get you a drink — what are you having?",
            textZh: "那太好了！真的很感谢。我请你喝一杯——你喝什么？",
          },
          {
            speaker: "them",
            role: "陌生人",
            textEn: "Oh, that's so nice of you! I'll have whatever IPA they have on tap. Cheers to new friends!",
            textZh: "你太客气了！我喝他们有的任何一款IPA扎啤就好。为新朋友干杯！",
            keyPhrases: [
              { en: "that's so nice of you", zh: "你太客气了" },
              { en: "whatever they have", zh: "他们有什么都行" },
              { en: "cheers to", zh: "为……干杯" },
            ],
            alternativeExpressions: [
              { textEn: "Aw, you don't have to! But I'll take an IPA if you're buying. To new friends!", textZh: "你太客气了！那我要杯IPA吧。敬新朋友！", actionHint: "去吧台点酒", frequency: "common" },
              { textEn: "That's really sweet of you! Whatever IPA they've got is perfect. Cheers!", textZh: "你真好！他们有什么IPA都行。干杯！", actionHint: "帮忙点酒", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== SPA/按摩 ====================
  {
    id: "entertainment-spa",
    category: "entertainment",
    titleZh: "SPA/按摩",
    titleEn: "Spa & Massage",
    description: "在国外做SPA或按摩，预约、选择项目、过程中沟通需求",
    otherRole: "SPA前台",
    otherRoleIcon: "sparkles",
    flows: [
      {
        id: "booking-spa",
        titleZh: "预约选项目",
        titleEn: "Booking & Choosing Treatments",
        description: "到SPA前台预约、了解项目和价格、确认注意事项",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, we don't have a reservation, but we'd like to get a massage. Do you have any availability this afternoon?",
            textZh: "你好，我们没有预约，但想做个按摩。今天下午有空位吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Welcome! Let me check for you... Yes, we have openings at 2 PM and 3:30 PM. How many people?",
            textZh: "欢迎！我帮您看一下……有的，下午2点和3:30有空位。请问几位？",
            keyPhrases: [
              { en: "reservation", zh: "预约" },
              { en: "availability", zh: "空位/可预约时间" },
              { en: "openings", zh: "空档" },
            ],
            alternativeExpressions: [
              { textEn: "Let me see... We've got some slots open at 2 and 3:30 today. How many of you?", textZh: "我看看……今天2点和3:30有空位。几位？", actionHint: "告知人数", frequency: "common" },
              { textEn: "Walk-ins are welcome! We can fit you in at 2 or 3:30. Just the two of you?", textZh: "不预约也欢迎！2点或3:30可以安排。就你们两位吗？", actionHint: "选择时间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Two of us. What kinds of massage do you offer?",
            textZh: "两个人。你们有哪些按摩项目？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "We have several options. Our most popular is the Swedish massage — that's a gentle, relaxing full-body massage. We also have deep tissue, which is more intense and great for muscle tension. There's also hot stone, Thai massage, and aromatherapy. Prices range from $80 to $150 for a 60-minute session.",
            textZh: "我们有多种选择。最受欢迎的是瑞典式按摩——温和放松的全身按摩。还有深层组织按摩，力度更大，适合肌肉紧张。另外有热石按摩、泰式按摩和芳香疗法。60分钟的价格从80到150美元不等。",
            keyPhrases: [
              { en: "Swedish massage", zh: "瑞典式按摩" },
              { en: "deep tissue", zh: "深层组织按摩" },
              { en: "hot stone", zh: "热石按摩" },
              { en: "aromatherapy", zh: "芳香疗法" },
              { en: "muscle tension", zh: "肌肉紧张" },
              { en: "session", zh: "一次疗程" },
            ],
            culturalNote: "欧美SPA最常见的是瑞典式按摩（Swedish），手法比中式按摩轻柔很多。如果喜欢力度大的，要选deep tissue。泰式按摩（Thai massage）在欧美也很流行，但可能跟在泰国做的略有不同。",
            alternativeExpressions: [
              { textEn: "We've got a bunch. Swedish is the classic relaxation one. Deep tissue if you want something more intense. Prices start at 80 for an hour.", textZh: "我们有好多种。瑞典式是经典放松的。想要更有力度的选深层组织。一小时80起。", actionHint: "选择按摩类型", frequency: "common" },
              { textEn: "For a chill experience, go Swedish. If you've got knots and tension, deep tissue is the way to go. 60 minutes runs $80 to $150.", textZh: "想放松选瑞典式。有结和紧张选深层组织。60分钟80到150美元。", actionHint: "根据需求选择", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with the deep tissue massage, and my friend wants the Swedish. Both 60 minutes. Is there anything we should know beforehand?",
            textZh: "我做深层组织按摩，我朋友做瑞典式。都做60分钟。有什么需要提前了解的吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course. Please arrive 15 minutes early to fill out a health form and change into a robe. We provide robes, slippers, and lockers. If you have any allergies or injuries, please let your therapist know. Also, we recommend not eating a heavy meal right before your session.",
            textZh: "当然。请提前15分钟到，填写一份健康表并换上浴袍。我们提供浴袍、拖鞋和储物柜。如果您有过敏或受伤情况，请告知您的理疗师。另外，我们建议做按摩前不要吃太饱。",
            keyPhrases: [
              { en: "health form", zh: "健康表" },
              { en: "robe", zh: "浴袍" },
              { en: "slippers", zh: "拖鞋" },
              { en: "lockers", zh: "储物柜" },
              { en: "allergies", zh: "过敏" },
              { en: "therapist", zh: "理疗师/按摩师" },
            ],
            alternativeExpressions: [
              { textEn: "Come about 15 minutes early — there's a form to fill out. We've got robes and everything. Just let your therapist know about any injuries.", textZh: "提前15分钟来——要填个表。浴袍什么的我们都有。有伤的话告诉按摩师就行。", actionHint: "记住提前到", frequency: "common" },
              { textEn: "Show up a bit early to get changed and fill out a quick health questionnaire. Oh, and don't eat too much before.", textZh: "早点来换衣服填个健康问卷。还有按摩前别吃太多。", actionHint: "做好准备", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Is tipping expected here?",
            textZh: "明白了。这里需要给小费吗？",
            culturalNote: "在美国做SPA，给小费是普遍惯例，通常是费用的15-20%。可以在前台付完后单独给现金小费，或者加在刷卡金额里。在欧洲很多地方小费不是必须的。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Tips are appreciated but not mandatory. Most guests leave around 15 to 20 percent. You can add it to your bill at checkout or give it directly to your therapist. Shall I book you both in for the 2 PM slot?",
            textZh: "小费不是必须的，但如果给的话我们很感激。大多数客人给15%到20%。您可以结账时加在账单上，或者直接给理疗师。要帮你们订下午2点的吗？",
            keyPhrases: [
              { en: "appreciated but not mandatory", zh: "不是必须但很感谢" },
              { en: "add it to your bill", zh: "加在账单上" },
              { en: "checkout", zh: "结账" },
              { en: "slot", zh: "时间段" },
            ],
            alternativeExpressions: [
              { textEn: "It's not required, but most people tip 15 to 20 percent. You can add it to the bill or tip in cash. Want me to book you for 2 o'clock?", textZh: "不是必须的，但大多数人给15到20%。可以加在账单上或给现金。帮你订2点的吗？", actionHint: "确认预约", frequency: "common" },
              { textEn: "Tips aren't mandatory but always appreciated — 15 to 20 percent is standard. Shall I put you down for the 2 PM slot?", textZh: "小费不是必须的但总是感激——15到20%是标准。帮你安排2点的吗？", actionHint: "预约时间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. 2 PM works perfectly.",
            textZh: "好的，2点很合适。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "You're all booked. Here are your locker keys. The changing rooms are down the hall to your left. You're welcome to use the sauna and relaxation lounge before your treatment. See you at 2!",
            textZh: "已经预约好了。给您储物柜钥匙。更衣室在走廊左边。按摩前您可以自由使用桑拿房和休息室。2点见！",
            keyPhrases: [
              { en: "locker keys", zh: "储物柜钥匙" },
              { en: "changing rooms", zh: "更衣室" },
              { en: "sauna", zh: "桑拿房" },
              { en: "relaxation lounge", zh: "休息室" },
              { en: "treatment", zh: "护理/疗程" },
            ],
            alternativeExpressions: [
              { textEn: "All set! Here are your locker keys. Changing room's down the hall to the left. Feel free to use the sauna before your treatment.", textZh: "搞定了！储物柜钥匙给你。更衣室沿走廊左边。按摩前可以先用桑拿。", actionHint: "先去换衣服", frequency: "common" },
              { textEn: "You're booked. Lockers and changing area are that way. The sauna and steam room are open if you want to relax before your session.", textZh: "预约好了。储物柜和更衣区在那边。按摩前想放松的话桑拿和蒸汽房都开着。", actionHint: "提前享受设施", frequency: "common" },
            ],
          },
        ],
      },

      // --- Flow 2: 按摩过程中沟通 ---
      {
        id: "during-treatment",
        titleZh: "过程中沟通",
        titleEn: "Communication During Treatment",
        description: "按摩过程中与理疗师沟通力度、温度、身体不适等",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "按摩师",
            textEn: "Hi, I'm Sarah, and I'll be your therapist today. I see from your form that you'd like a deep tissue massage. Are there any areas you'd like me to focus on, or any spots I should avoid?",
            textZh: "你好，我是Sarah，今天由我为您做按摩。我从表格上看到您要做深层组织按摩。有没有需要重点按的部位，或者需要避开的地方？",
            keyPhrases: [
              { en: "focus on", zh: "重点按/关注" },
              { en: "avoid", zh: "避开" },
              { en: "areas", zh: "部位" },
            ],
            alternativeExpressions: [
              { textEn: "Hey there, I'm Sarah. So where's bothering you most? Any spots I should stay away from?", textZh: "你好，我是Sarah。哪里最不舒服？有需要避开的地方吗？", actionHint: "说明身体情况", frequency: "common" },
              { textEn: "Hi! I'll be working on you today. Any problem areas? Anything I should avoid?", textZh: "嗨！今天我来给你做。有哪里特别需要按的吗？有要避开的吗？", actionHint: "告知重点部位", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "My shoulders and lower back have been really tight from traveling. Could you spend more time on those areas? Also, my right knee is a bit sore, so please be gentle around there.",
            textZh: "旅途中肩膀和腰特别紧。能在这些部位多花点时间吗？另外我右膝盖有点疼，那里请轻一些。",
          },
          {
            speaker: "them",
            role: "按摩师",
            textEn: "Absolutely. I'll concentrate on your shoulders and lower back. And I'll be very careful with your right knee. I'm going to start with medium pressure. Please let me know at any time if it's too much or if you'd like more pressure. Ready?",
            textZh: "没问题。我会重点按肩膀和腰部。右膝盖我会非常小心。我先用中等力度开始。过程中如果觉得太重或想加重，随时告诉我。准备好了吗？",
            keyPhrases: [
              { en: "concentrate on", zh: "重点按" },
              { en: "medium pressure", zh: "中等力度" },
              { en: "too much", zh: "太重了" },
              { en: "more pressure", zh: "加重力度" },
            ],
            alternativeExpressions: [
              { textEn: "Got it — shoulders and lower back are the focus, and I'll be careful with that knee. I'll start moderate — just tell me if you need it lighter or deeper.", textZh: "明白——重点是肩膀和腰，膝盖我会小心。先用中等力度——需要轻一点或重一点随时说。", actionHint: "随时反馈力度", frequency: "common" },
              { textEn: "No problem. I'll work those areas extra. Starting with medium pressure — speak up anytime if it's too much or not enough.", textZh: "没问题。那些部位我多花时间。先中等力度——太重或不够随时说。", actionHint: "开始享受", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Ready. Go ahead.",
            textZh: "准备好了，开始吧。",
          },
          {
            speaker: "them",
            role: "按摩师",
            textEn: "I can feel a lot of tension in your upper back. There's a big knot right here. I'm going to work on it a bit — it might feel a little uncomfortable at first. How's the pressure? Too much?",
            textZh: "我能感觉到您上背部很紧。这里有一个很大的结。我要花点时间按开它——一开始可能会有点不舒服。力度怎么样？太重了吗？",
            keyPhrases: [
              { en: "tension", zh: "紧张/紧绷" },
              { en: "knot", zh: "结/硬块" },
              { en: "work on it", zh: "按开它" },
              { en: "uncomfortable", zh: "不舒服" },
              { en: "pressure", zh: "力度" },
            ],
            alternativeExpressions: [
              { textEn: "Wow, you've got a really tight knot right here. I'm gonna work it out — might be a bit tender. Is the pressure okay?", textZh: "哇，这里有个很紧的结。我来按开它——可能会有点酸疼。力度还好吗？", actionHint: "反馈力度", frequency: "common" },
              { textEn: "Your upper back is super tight. There's a big knot — I'll need to spend some time on it. Let me know if it's too intense.", textZh: "你上背超紧。有一个大结——我要花点时间。太重了告诉我。", actionHint: "配合按摩师", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It hurts a little, but in a good way. You can go a bit harder on that spot actually.",
            textZh: "有点疼，但是是那种舒服的疼。那个位置其实可以再重一点。",
            culturalNote: "\"It hurts in a good way\" 或 \"good pain\" 是做按摩时常说的，指的是按到酸疼的地方但其实很舒服。理疗师完全能理解这个表达。",
          },
          {
            speaker: "them",
            role: "按摩师",
            textEn: "Okay, I'll increase the pressure a bit. And I'm going to apply some warm oil now — is that alright? Some people prefer to go without oil.",
            textZh: "好的，我加重一些力度。现在我要上一些温热的精油——可以吗？有些人不喜欢用油。",
            keyPhrases: [
              { en: "increase the pressure", zh: "加重力度" },
              { en: "warm oil", zh: "温热精油" },
              { en: "go without", zh: "不用/不要" },
            ],
            alternativeExpressions: [
              { textEn: "I'll turn it up a notch. Mind if I use some warm oil? Or would you rather go without?", textZh: "我加重一点。介意我用温热精油吗？还是不用油？", actionHint: "告知是否用油", frequency: "common" },
              { textEn: "Sure, more pressure. I'm also going to add some oil now — is that alright with you?", textZh: "好的，加重。我现在要上一些油——你可以吗？", actionHint: "同意或拒绝", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Oil is fine. Actually, could you turn the room temperature up slightly? I'm a little cold.",
            textZh: "用油没问题。对了，房间温度能稍微调高一点吗？我有点冷。",
          },
          {
            speaker: "them",
            role: "按摩师",
            textEn: "Of course. Let me adjust that for you. I can also put an extra blanket over your legs if you'd like. We're about halfway through — how are you feeling?",
            textZh: "当然可以。我帮您调一下。如果需要的话，我还可以在您腿上加一条毯子。我们做到一半了——感觉怎么样？",
            keyPhrases: [
              { en: "adjust", zh: "调整" },
              { en: "extra blanket", zh: "多一条毯子" },
              { en: "halfway through", zh: "做到一半了" },
            ],
            alternativeExpressions: [
              { textEn: "No problem, I'll bump up the heat. Want an extra blanket on your legs? We're about halfway done — how's everything feeling?", textZh: "没问题，我调高温度。腿上要加条毯子吗？做了一半了——感觉怎么样？", actionHint: "反馈感受", frequency: "common" },
              { textEn: "Sure thing, let me turn that up for you. I can throw a blanket over your legs too. Half done — you doing alright?", textZh: "当然，我帮你调。腿上也可以盖条毯子。做了一半——你还好吗？", actionHint: "说出感受", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "A blanket would be great, thanks. I'm feeling much more relaxed already. My shoulders feel so much better.",
            textZh: "加个毯子就好了，谢谢。我已经感觉放松多了。肩膀舒服多了。",
          },
          {
            speaker: "them",
            role: "按摩师",
            textEn: "I'm glad to hear that. I'll spend the rest of the time on your lower back and legs. When we're done, take your time getting up — drink some water and rest in the relaxation lounge for a bit. No rush at all.",
            textZh: "很高兴听到这个。剩下的时间我来按腰部和腿。结束后不用急着起来——喝点水，在休息室休息一会儿。完全不用赶时间。",
            keyPhrases: [
              { en: "take your time", zh: "不用急/慢慢来" },
              { en: "getting up", zh: "起来" },
              { en: "no rush", zh: "不用赶时间" },
            ],
            alternativeExpressions: [
              { textEn: "Good to hear. I'll finish up with your lower back and legs. After we're done, just take it easy — no need to rush. Grab some water and chill in the lounge.", textZh: "很好。剩下的时间按腰和腿。结束后慢慢来——不用急。喝点水在休息室待一会儿。", actionHint: "按摩后休息", frequency: "common" },
              { textEn: "That's great. We'll wrap up with your back and legs. When I'm done, take your time — rest, drink water, no hurry.", textZh: "太好了。最后按背和腿。结束后不用急——休息一下，喝点水，慢慢来。", actionHint: "慢慢恢复", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 音乐会/演唱会 ====================
  {
    id: "entertainment-concert",
    category: "entertainment",
    titleZh: "音乐会/演唱会",
    titleEn: "Concert & Live Music",
    description: "在国外看音乐会或演唱会，买票、进场、购买周边纪念品",
    otherRole: "场馆工作人员",
    otherRoleIcon: "microphone",
    flows: [
      {
        id: "concert-tickets-entry",
        titleZh: "买票入场",
        titleEn: "Tickets & Venue Entry",
        description: "购买音乐会门票、到达场馆后入场、找座位",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to buy two tickets for tonight's concert. Are there any seats still available?",
            textZh: "你好，我想买两张今晚演唱会的票。还有座位吗？",
            casualVersion: "Hey, got any tickets left for tonight's show?",
          },
          {
            speaker: "them",
            role: "售票处",
            textEn: "Let me check... We have a few seats left in the upper balcony for $45 each, and some standing room tickets in the pit for $75 each. The floor seats are sold out, unfortunately.",
            textZh: "我查一下……上层包厢还有几个座位，每张45美元，前排站区的站票每张75美元。楼下座位很遗憾已经卖完了。",
            keyPhrases: [
              { en: "upper balcony", zh: "上层包厢" },
              { en: "standing room", zh: "站票区" },
              { en: "pit", zh: "前排站区（舞台前方）" },
              { en: "floor seats", zh: "楼下/地面座位" },
              { en: "sold out", zh: "卖完了" },
            ],
            vocabNotes: {
              pit: {
                meaningInContext: "在这句话里表示：舞台前方的站立区域，离舞台最近",
                similarUsage: "类似用法：We were right in the pit, so close to the band!",
              },
            },
            alternativeExpressions: [
              { textEn: "We still have some balcony seats and general admission standing.", textZh: "我们还有包厢座位和通票站区。", actionHint: "问清楚standing是站着的", frequency: "common" },
            ],
            culturalNote: "欧美演唱会常见 general admission（通票/自由站位）和 reserved seating（对号入座）两种形式。GA意味着先到先得，需要提前排队占好位置。",
          },
          {
            speaker: "you",
            textEn: "We'll take two standing room tickets. Do we need to pick them up somewhere, or are they digital?",
            textZh: "我们要两张站票。需要去哪里取票，还是电子票？",
          },
          {
            speaker: "them",
            role: "售票处",
            textEn: "They're e-tickets. I'll email them to you right now. Just show the QR code on your phone at the entrance. Make sure your screen brightness is turned up — the scanners sometimes have trouble with dim screens.",
            textZh: "是电子票。我现在就发到您邮箱。入口出示手机上的二维码就行。确保屏幕亮度调高——扫描器有时候扫不了暗屏幕。",
            keyPhrases: [
              { en: "e-tickets", zh: "电子票" },
              { en: "QR code", zh: "二维码" },
              { en: "screen brightness", zh: "屏幕亮度" },
              { en: "scanners", zh: "扫描器" },
            ],
            alternativeExpressions: [
              { textEn: "They're digital — I'll shoot them to your email right now. Just pull up the QR code at the door.", textZh: "是电子票——我现在发到你邮箱。到门口打开二维码就行。", actionHint: "查收邮件", frequency: "common" },
              { textEn: "All electronic. Check your email — I just sent them over. Show the barcode at the entrance.", textZh: "全部是电子的。查一下邮箱——刚发了。入口出示条形码。", actionHint: "确认收到邮件", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. What time do the doors open? The show starts at 8, right?",
            textZh: "好的。几点开门？演出8点开始对吧？",
          },
          {
            speaker: "them",
            role: "售票处",
            textEn: "Doors open at 7 PM. There's an opening act at 7:30, and the main performer goes on at 8:30. I'd suggest getting there early if you want a good spot in the standing section.",
            textZh: "7点开门。7:30有暖场嘉宾，主演出8:30开始。如果想在站区占个好位置，建议早点到。",
            keyPhrases: [
              { en: "doors open", zh: "开门时间" },
              { en: "opening act", zh: "暖场嘉宾/开场表演" },
              { en: "main performer", zh: "主要演出者" },
              { en: "goes on", zh: "上台/开始演出" },
            ],
            vocabNotes: {
              "opening act": {
                meaningInContext: "在这句话里表示：在主要演出者之前表演的嘉宾或乐队",
                similarUsage: "类似用法：The opening act was actually really good tonight.",
              },
            },
            alternativeExpressions: [
              { textEn: "Doors at 7, opener at 7:30, headliner at 8:30. Get there early for a good spot.", textZh: "7点开门，7:30暖场，8:30主演。想占好位置就早点去。", actionHint: "记下时间", frequency: "common" },
              { textEn: "7 PM for doors. There's a warm-up act first, then the main show kicks off around 8:30.", textZh: "7点开门。先有暖场表演，主演大约8:30开始。", actionHint: "安排到达时间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a bag policy? I have a small backpack with me.",
            textZh: "有包包限制吗？我背了一个小双肩包。",
          },
          {
            speaker: "them",
            role: "售票处",
            textEn: "Bags smaller than 12 by 12 inches are allowed, so a small backpack should be fine. But no professional cameras, no outside food or drinks, and no umbrellas. There's a coat check inside if you need to store anything.",
            textZh: "12×12英寸以下的包可以带入，小双肩包应该没问题。但不允许带专业相机、外带食物饮料和雨伞。里面有寄存处，如果需要存东西的话。",
            keyPhrases: [
              { en: "bag policy", zh: "包包限制政策" },
              { en: "professional cameras", zh: "专业相机" },
              { en: "outside food or drinks", zh: "外带食物饮料" },
              { en: "coat check", zh: "寄存处" },
            ],
            culturalNote: "欧美大型演出场馆通常有严格的安检和包包限制。透明包（clear bag）在美国很多场馆是优先通行的，建议提前查看场馆政策。",
            alternativeExpressions: [
              { textEn: "Small bags are fine. No pro cameras, no outside drinks. There's a coat check if you need to stash anything.", textZh: "小包没问题。不能带专业相机和外带饮料。有寄存处可以放东西。", actionHint: "准备安检", frequency: "common" },
              { textEn: "A small backpack should be okay — just no food, no umbrellas, no real cameras. There's storage inside.", textZh: "小双肩包应该没事——不能带食物、雨伞和专业相机。里面有寄存。", actionHint: "注意禁带物品", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. One more thing — is there parking nearby, or should we take an Uber?",
            textZh: "好的。再问一下——附近有停车场吗，还是打Uber比较好？",
          },
          {
            speaker: "them",
            role: "售票处",
            textEn: "There's a parking garage across the street — $20 for the evening. But honestly, rideshare is easier because traffic gets really bad after the show. The drop-off zone for Uber and Lyft is on the north side of the building.",
            textZh: "对面有个停车场——晚上20美元。但说实话，打车更方便，因为散场后交通会很拥堵。Uber和Lyft的下车区在大楼北面。",
            keyPhrases: [
              { en: "parking garage", zh: "停车场" },
              { en: "rideshare", zh: "打车/网约车" },
              { en: "drop-off zone", zh: "下车区" },
            ],
            alternativeExpressions: [
              { textEn: "Parking's $20 across the street, but I'd Uber honestly — traffic's a nightmare after the show. Drop-off is on the north side.", textZh: "对面停车场20美元，但说实话建议打车——散场后交通太堵了。下车区在北面。", actionHint: "选择打车", frequency: "common" },
              { textEn: "There's a garage nearby but rideshare is way easier post-show. The pickup zone is on the north end.", textZh: "附近有停车场但散场后打车方便多了。上车区在北面。", actionHint: "记住上车区位置", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, we'll Uber then. Thanks for all the info!",
            textZh: "好的，我们打Uber吧。谢谢你提供的信息！",
          },
          {
            speaker: "them",
            role: "售票处",
            textEn: "You're welcome! Enjoy the show tonight!",
            textZh: "不客气！祝你们今晚玩得开心！",
            alternativeExpressions: [
              { textEn: "No problem! Have an amazing night!", textZh: "没问题！祝你们玩得开心！", actionHint: "出发去看演出", frequency: "common" },
              { textEn: "Anytime! It's gonna be a great show — have fun!", textZh: "随时来！今晚演出会很棒——玩得开心！", actionHint: "期待演出", frequency: "common" },
            ],
          },
        ],
      },

      // --- Flow 2: 买周边纪念品+散场 ---
      {
        id: "concert-merch",
        titleZh: "买周边纪念品",
        titleEn: "Buying Merchandise",
        description: "在演唱会现场购买周边纪念品、T恤等，以及散场后的情况",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hey, can I see what T-shirts you have? I want to grab something as a souvenir.",
            textZh: "嘿，能看看你们有什么T恤吗？我想买个纪念品。",
            casualVersion: "What merch do you have?",
          },
          {
            speaker: "them",
            role: "周边摊位",
            textEn: "Sure! We've got the tour T-shirt in black and white — $40 each. There's also a hoodie for $65, a poster for $20, and a limited edition vinyl for $35. The black T-shirts are selling fast — we're almost out of mediums.",
            textZh: "当然！巡演T恤有黑色和白色的——每件40美元。还有帽衫65美元、海报20美元、限量版黑胶唱片35美元。黑色T恤卖得很快——M码快没了。",
            keyPhrases: [
              { en: "tour T-shirt", zh: "巡演T恤" },
              { en: "hoodie", zh: "帽衫/卫衣" },
              { en: "limited edition", zh: "限量版" },
              { en: "vinyl", zh: "黑胶唱片" },
              { en: "almost out of", zh: "快没了" },
            ],
            vocabNotes: {
              merch: {
                meaningInContext: "在这句话里表示：merchandise的缩写，指演唱会周边商品",
                similarUsage: "类似用法：The merch table is by the entrance.",
              },
              vinyl: {
                meaningInContext: "在这句话里表示：黑胶唱片，实体音乐收藏品",
                similarUsage: "类似用法：I collect vinyl records.",
              },
            },
            alternativeExpressions: [
              { textEn: "We've got tees in black and white for 40, hoodies for 65, and some limited vinyl. Black mediums are almost gone, heads up.", textZh: "有黑白T恤40，帽衫65，还有限量黑胶唱片。黑色M码快没了，提醒一下。", actionHint: "赶紧选尺码", frequency: "common" },
              { textEn: "Tour tees are $40, hoodies $65. We've also got posters and vinyl. Grab the black tee quick — selling out fast.", textZh: "巡演T恤40，帽衫65。还有海报和唱片。黑色T恤赶紧选——卖得很快。", actionHint: "快点做决定", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take a black T-shirt in large and one poster. Can I pay with card?",
            textZh: "我要一件L码黑色T恤和一张海报。能刷卡吗？",
          },
          {
            speaker: "them",
            role: "周边摊位",
            textEn: "Yep, card is fine. That's $60 total. Want a bag for those? Also, if you want the T-shirt signed, the artist sometimes does a meet-and-greet after the show by the stage door.",
            textZh: "可以，刷卡没问题。一共60美元。要袋子吗？另外，如果你想让T恤签名，艺人有时候会在演出结束后在舞台门那边做见面会。",
            keyPhrases: [
              { en: "signed", zh: "签名的" },
              { en: "meet-and-greet", zh: "见面会" },
              { en: "stage door", zh: "舞台门/后台出口" },
            ],
            culturalNote: "在欧美，很多艺人会在演出后在stage door（后台出口）和粉丝互动或签名，这是接近偶像的好机会。",
            alternativeExpressions: [
              { textEn: "Card's fine. $60. Need a bag? By the way, the artist sometimes signs stuff at the stage door after the show.", textZh: "刷卡没问题。60美元。要袋子吗？对了，有时候艺人会在舞台门签名。", actionHint: "问stage door在哪", frequency: "common" },
              { textEn: "That's 60 total. Want it signed? Sometimes the band does a meet-and-greet after — worth checking out.", textZh: "一共60。想签名吗？有时候乐队演完会做见面会——值得去看看。", actionHint: "了解见面会", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be amazing! Where exactly is the stage door?",
            textZh: "那太棒了！舞台门具体在哪里？",
          },
          {
            speaker: "them",
            role: "周边摊位",
            textEn: "Go out the main exit and turn left. Walk around to the back of the building — you'll see a small alley with a security guard. That's where artists come out. No guarantees though — it depends on the artist's mood and schedule.",
            textZh: "从正门出去左转。绕到大楼后面——你会看到一个有保安的小巷子。艺人从那里出来。不过不保证一定能见到——取决于艺人的心情和行程。",
            keyPhrases: [
              { en: "main exit", zh: "正门出口" },
              { en: "alley", zh: "小巷子" },
              { en: "security guard", zh: "保安" },
              { en: "no guarantees", zh: "不保证" },
            ],
            alternativeExpressions: [
              { textEn: "Out the main door, take a left, go around back. There's an alley with a security guard — that's where they come out. No promises though.", textZh: "正门出去左转，绕到后面。有个小巷有保安——他们从那出来。不过不保证能见到。", actionHint: "去碰碰运气", frequency: "common" },
              { textEn: "The stage door's around the back of the building. Just follow the crowd — there's always people waiting. No guarantee they'll come out, but worth a shot.", textZh: "舞台门在大楼后面。跟着人群走就行——总有人等着。不保证出来但值得一试。", actionHint: "跟着人群", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Worth a shot! Oh wow, the show was incredible. How do we get out of here? It's so crowded.",
            textZh: "值得试试！哇，演出太精彩了。怎么出去？人太多了。",
          },
          {
            speaker: "them",
            role: "场馆引导员",
            textEn: "There are exits on all four sides of the venue. The south exit is usually the least crowded. If you're getting picked up, the rideshare area is on the north side. Just follow the signs. And please don't push — everyone will get out.",
            textZh: "场馆四面都有出口。南面出口通常人最少。如果有人来接你，网约车区域在北面。跟着指示牌走就行。请不要推挤——大家都能出去。",
            keyPhrases: [
              { en: "exits on all four sides", zh: "四面都有出口" },
              { en: "least crowded", zh: "人最少" },
              { en: "rideshare area", zh: "网约车区域" },
              { en: "follow the signs", zh: "跟着指示牌走" },
            ],
            alternativeExpressions: [
              { textEn: "Use the side exits to avoid the crowd.", textZh: "用侧面出口避开人群。", actionHint: "找侧门出去", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks! What a night — totally worth it.",
            textZh: "谢谢！太棒的一个晚上——完全值了。",
          },
          {
            speaker: "them",
            role: "场馆引导员",
            textEn: "Glad you enjoyed it! Stay safe getting home. Have a great night!",
            textZh: "很高兴你们玩得开心！回家注意安全。晚安！",
            alternativeExpressions: [
              { textEn: "Awesome! Get home safe — have a great rest of your night!", textZh: "太好了！回家注意安全——祝今晚剩下时间也愉快！", actionHint: "安全回家", frequency: "common" },
              { textEn: "So glad you had a good time! Be safe out there. Night!", textZh: "很高兴你们玩得开心！路上注意安全。晚安！", actionHint: "道别", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 看体育赛事 ====================
  {
    id: "entertainment-sports",
    category: "entertainment",
    titleZh: "看体育赛事",
    titleEn: "Watching a Sports Game",
    description: "在国外体育场观看比赛，购票、找座位、融入现场氛围",
    otherRole: "体育场工作人员",
    otherRoleIcon: "trophy",
    flows: [
      {
        id: "sports-tickets-seating",
        titleZh: "买票入场找座位",
        titleEn: "Tickets & Finding Your Seat",
        description: "在体育场买票或取票、通过安检、找到自己的座位",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, we bought tickets online for today's basketball game. Where do we pick them up?",
            textZh: "你好，我们网上买了今天篮球赛的票。在哪里取票？",
            casualVersion: "Hey, we got tickets online — where do we get them?",
          },
          {
            speaker: "them",
            role: "入口工作人员",
            textEn: "If you have mobile tickets, just pull them up on your phone — you don't need to pick up anything. If you bought through a third-party site, you might need to go to the Will Call window over there on the left.",
            textZh: "如果是手机电子票，直接在手机上打开就行——不需要取票。如果是通过第三方网站买的，可能需要去左边那个Will Call窗口。",
            keyPhrases: [
              { en: "mobile tickets", zh: "手机电子票" },
              { en: "third-party site", zh: "第三方网站" },
              { en: "Will Call window", zh: "取票窗口" },
            ],
            vocabNotes: {
              "Will Call": {
                meaningInContext: "在这句话里表示：现场取票窗口，网上买的票在这里凭身份证领取",
                similarUsage: "类似用法：I left the tickets at Will Call under my name.",
              },
            },
            culturalNote: "Will Call 是美国演出和体育场馆常见的取票方式，需要出示购买时用的身份证件和确认号。",
            alternativeExpressions: [
              { textEn: "If they're on your phone, you're good — just have them ready at the gate. If not, Will Call's over to the left.", textZh: "如果在手机上就没问题——到入口准备好就行。如果不是，取票窗口在左边。", actionHint: "打开手机票", frequency: "common" },
              { textEn: "Got mobile tickets? Just pull them up. Otherwise, head to Will Call with your ID.", textZh: "有手机票吗？打开就行。没有的话带身份证去取票窗口。", actionHint: "准备好票", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "We have them on our phones. Do we go through security here?",
            textZh: "我们有手机票。从这里过安检吗？",
          },
          {
            speaker: "them",
            role: "安检人员",
            textEn: "Yes, please have your bags open and ready. No outside food or beverages, and bottles of water need to be sealed. You can keep your phone and wallet in your pockets — just walk through the metal detector.",
            textZh: "是的，请把包打开准备好。不能带外面的食物或饮料，水瓶需要是未开封的。手机和钱包可以放口袋里——直接走过金属探测器就行。",
            keyPhrases: [
              { en: "bags open", zh: "把包打开" },
              { en: "outside food or beverages", zh: "外带食物或饮料" },
              { en: "sealed", zh: "未开封的" },
              { en: "metal detector", zh: "金属探测器" },
            ],
            alternativeExpressions: [
              { textEn: "Open your bags, please. No outside food or drinks. Water's fine if it's sealed. Just walk through the detector.", textZh: "请打开包。不能带外面的食物和饮料。未开封的水可以。直接走过探测器。", actionHint: "配合安检", frequency: "common" },
              { textEn: "Bags open and ready. Phone and wallet can stay in your pockets — just step through.", textZh: "包打开准备好。手机钱包放口袋就行——直接走过去。", actionHint: "快速过安检", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "We're through. Our tickets say Section 215, Row F. How do we get there?",
            textZh: "过了安检了。我们的票写着Section 215, Row F。怎么走？",
          },
          {
            speaker: "them",
            role: "场内引导员",
            textEn: "Section 215 is on the upper level. Take the escalator up to the 200 level, then follow the signs to your right. An usher at the section entrance can help you find your exact seats.",
            textZh: "215区在上层。乘自动扶梯上到200层，然后跟着右边的指示牌走。区域入口处的引座员可以帮你找到具体座位。",
            keyPhrases: [
              { en: "upper level", zh: "上层" },
              { en: "escalator", zh: "自动扶梯" },
              { en: "200 level", zh: "200层区域" },
              { en: "usher", zh: "引座员" },
            ],
            alternativeExpressions: [
              { textEn: "215 is upstairs. Escalator up, follow the signs to the right. There's an usher up there who'll help you find your row.", textZh: "215在楼上。坐扶梯上去，跟着右边的指示牌走。上面有引座员帮你找排号。", actionHint: "找自动扶梯", frequency: "common" },
              { textEn: "Take the escalator to the 200 level. Go right, and someone at the section entrance will point you to your seats.", textZh: "乘扶梯到200层。右转，区域入口有人给你指座位。", actionHint: "上楼找座位", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you! Also, where can I grab a beer and a hot dog?",
            textZh: "谢谢！另外，哪里可以买到啤酒和热狗？",
          },
          {
            speaker: "them",
            role: "场内引导员",
            textEn: "There are concession stands on every level. The closest one to your section is right next to the escalator on the 200 level. They've got hot dogs, nachos, pretzels, beer — the works. Just heads up, they stop selling alcohol after the third quarter.",
            textZh: "每层都有餐饮摊位。离你们最近的在200层自动扶梯旁边。有热狗、玉米片、椒盐卷饼、啤酒——什么都有。提醒一下，第三节之后就停止卖酒了。",
            keyPhrases: [
              { en: "concession stands", zh: "餐饮摊位" },
              { en: "nachos", zh: "玉米片" },
              { en: "pretzels", zh: "椒盐卷饼" },
              { en: "the works", zh: "什么都有/应有尽有" },
              { en: "stop selling alcohol", zh: "停止卖酒" },
              { en: "third quarter", zh: "第三节" },
            ],
            culturalNote: "美国体育场馆通常在比赛后半段停止售卖酒精饮料，这是安全管理的标准做法。",
            alternativeExpressions: [
              { textEn: "Food stands on every level — closest one to you is by the escalator. Hot dogs, nachos, beer, you name it. Just FYI, they cut off beer after the third quarter.", textZh: "每层都有餐饮摊——离你最近的在扶梯旁。热狗、玉米片、啤酒，应有尽有。提醒一下，第三节后就不卖酒了。", actionHint: "趁早买啤酒", frequency: "common" },
              { textEn: "Concessions are right by the escalator on your level. Grab your beers early though — they stop selling after Q3.", textZh: "餐饮摊在你那层扶梯旁边。不过啤酒要早点买——第三节后就不卖了。", actionHint: "尽早去买", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. This is our first NBA game — any tips?",
            textZh: "了解了。这是我们第一次看NBA——有什么建议吗？",
          },
          {
            speaker: "them",
            role: "场内引导员",
            textEn: "Oh, you're in for a treat! The energy is amazing. When the home team scores, everyone cheers — just join in! There's usually a big screen showing fan cams and trivia during timeouts. Oh, and if you catch a T-shirt from the T-shirt cannon, it's yours to keep!",
            textZh: "哦，你们有福了！现场氛围太棒了。主队进球时大家都会欢呼——加入进去就对了！暂停时大屏幕会放粉丝镜头和问答。对了，如果你接到T恤大炮射出来的T恤，就是你的了！",
            keyPhrases: [
              { en: "you're in for a treat", zh: "你们有福了/有好看的了" },
              { en: "home team", zh: "主队" },
              { en: "fan cams", zh: "粉丝镜头" },
              { en: "timeouts", zh: "暂停" },
              { en: "T-shirt cannon", zh: "T恤大炮" },
            ],
            alternativeExpressions: [
              { textEn: "Oh man, your first game? You're gonna love it! When the crowd goes wild, just go with it. And watch out for the T-shirt cannon during timeouts!", textZh: "天哪，第一次看比赛？你们会爱上的！人群疯狂的时候跟着一起就对了。暂停时注意T恤大炮！", actionHint: "融入氛围", frequency: "common" },
              { textEn: "First NBA game?! Lucky you! Just cheer when everyone cheers. The big screen does fun stuff during breaks — fan cams, trivia, all that.", textZh: "第一次看NBA？！太幸运了！大家欢呼你就跟着欢呼。休息时大屏幕会做有趣的互动——粉丝镜头、问答什么的。", actionHint: "享受比赛氛围", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Haha, that sounds awesome! Let's go find our seats. Thanks!",
            textZh: "哈哈，听起来太棒了！我们去找座位吧。谢谢！",
          },
        ],
      },

      // --- Flow 2: 比赛中+与球迷互动 ---
      {
        id: "sports-cheering",
        titleZh: "比赛互动与加油",
        titleEn: "Cheering & Fan Interaction",
        description: "比赛期间与周围球迷互动、学习加油口号、享受现场体验",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "旁边球迷",
            textEn: "Hey, are you rooting for the home team or the visitors?",
            textZh: "嘿，你支持主队还是客队？",
            keyPhrases: [
              { en: "rooting for", zh: "支持/为……加油" },
              { en: "home team", zh: "主队" },
              { en: "visitors", zh: "客队" },
            ],
            alternativeExpressions: [
              { textEn: "Who are you here to cheer for?", textZh: "你来给谁加油的？", actionHint: "说出你支持的队", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "The home team! This is actually our first time watching a game live. We're visiting from China.",
            textZh: "主队！这其实是我们第一次现场看比赛。我们从中国来旅游的。",
          },
          {
            speaker: "them",
            role: "旁边球迷",
            textEn: "No way, that's awesome! Welcome! You picked a great game — this is a huge rivalry. When we're on defense, everyone yells \"DE-FENSE!\" and stomps their feet. Just follow along!",
            textZh: "不会吧，太棒了！欢迎！你们选了一场好比赛——这是一场重要的对抗。防守的时候大家都喊\"DE-FENSE！\"然后跺脚。跟着一起就行！",
            keyPhrases: [
              { en: "rivalry", zh: "对抗/宿敌之战" },
              { en: "on defense", zh: "在防守" },
              { en: "DE-FENSE", zh: "防守加油口号" },
              { en: "stomps their feet", zh: "跺脚" },
            ],
            culturalNote: "\"DE-FENSE!\" 是美国体育赛事中最常见的加油口号之一，球迷会有节奏地喊出来。还有 \"Let's go [队名]!\" 也很常见。",
            alternativeExpressions: [
              { textEn: "Dude, your first game?! This is a huge rivalry game. When we're defending, everyone screams 'DE-FENSE!' — just join in!", textZh: "兄弟，第一次看？！这可是宿敌对决。防守时大家都喊'DE-FENSE！'——跟着一起喊！", actionHint: "学会加油口号", frequency: "common" },
              { textEn: "Welcome! You picked an awesome game — these two teams hate each other. On defense, we all yell 'DE-FENSE' and stomp our feet.", textZh: "欢迎！你们选了场好比赛——这两支队互相看不顺眼。防守时我们都喊'DE-FENSE'然后跺脚。", actionHint: "跟着喊", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's so fun! What just happened? Everyone is booing.",
            textZh: "太有意思了！刚才怎么了？大家都在嘘。",
          },
          {
            speaker: "them",
            role: "旁边球迷",
            textEn: "The ref just made a terrible call — that was obviously not a foul! See, they're showing the replay on the big screen. Watch... Yeah, he clearly didn't touch him. The refs have been awful tonight.",
            textZh: "裁判刚做了一个很差的判罚——那明显不是犯规！你看，大屏幕正在放回放。看……对吧，他明显没碰到。今晚裁判太差了。",
            keyPhrases: [
              { en: "ref", zh: "裁判" },
              { en: "terrible call", zh: "很差的判罚" },
              { en: "foul", zh: "犯规" },
              { en: "replay", zh: "回放" },
              { en: "awful", zh: "糟糕的" },
            ],
            vocabNotes: {
              call: {
                meaningInContext: "在这句话里表示：裁判的判罚/裁决，不是打电话",
                similarUsage: "类似用法：That was a bad call by the umpire.",
              },
            },
            alternativeExpressions: [
              { textEn: "Oh come on, ref! That was NOT a foul! Look at the replay — he didn't even touch him. These refs are killing me tonight.", textZh: "拜托，裁判！那根本不是犯规！看回放——他都没碰到。今晚裁判太离谱了。", actionHint: "看大屏幕回放", frequency: "common" },
              { textEn: "Terrible call. Watch the replay — clearly not a foul. The officiating has been rough all night.", textZh: "太差的判罚。看回放——明显不是犯规。今晚裁判一直很差。", actionHint: "一起吐槽裁判", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I see it now! That was a bad call. What's the score right now?",
            textZh: "我看到了！确实是误判。现在比分多少？",
          },
          {
            speaker: "them",
            role: "旁边球迷",
            textEn: "We're down by 5 — 78 to 83. But there's still a whole quarter left. Our guy number 23 has been on fire tonight — watch him, he's incredible.",
            textZh: "我们落后5分——78比83。但还有整整一节。我们的23号今晚状态太好了——看他，太厉害了。",
            keyPhrases: [
              { en: "down by 5", zh: "落后5分" },
              { en: "a whole quarter left", zh: "还有整整一节" },
              { en: "on fire", zh: "状态火热/手感超好" },
            ],
            vocabNotes: {
              "on fire": {
                meaningInContext: "在这句话里表示：表现极好、状态火热，不是着火了",
                similarUsage: "类似用法：She's been on fire all season.",
              },
            },
            alternativeExpressions: [
              { textEn: "We're down 5 right now — 78 to 83. Still got a whole quarter though. Number 23 is absolutely cooking tonight.", textZh: "我们落后5分——78比83。不过还有整整一节。23号今晚简直开挂了。", actionHint: "关注23号球员", frequency: "common" },
              { textEn: "83-78, we're trailing. But watch number 23 — dude can't miss tonight. Plenty of time to come back.", textZh: "83比78，我们落后。但看23号——今晚怎么投怎么进。还有很多时间翻盘。", actionHint: "继续看比赛", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Wow, what a three-pointer! Everyone's going crazy!",
            textZh: "哇，好一个三分球！大家都疯了！",
          },
          {
            speaker: "them",
            role: "旁边球迷",
            textEn: "LET'S GOOO! That's what I'm talking about! We're only down by 2 now! This is going to be a close one. High five!",
            textZh: "走你！就是这个！现在只差2分了！这场要打到最后了。击掌！",
            keyPhrases: [
              { en: "let's go", zh: "走你/加油（激动欢呼）" },
              { en: "that's what I'm talking about", zh: "就是这个/说的就是这个" },
              { en: "a close one", zh: "比分很接近的比赛" },
              { en: "high five", zh: "击掌" },
            ],
            alternativeExpressions: [
              { textEn: "YES! That's what I'm talking about! Only down 2 now! This game is gonna go down to the wire! High five!", textZh: "耶！就是这个！只差2分了！这场要打到最后一刻了！击掌！", actionHint: "跟着激动", frequency: "common" },
              { textEn: "LET'S GOOOO! Two-point game now! We're right back in it!", textZh: "走你！现在只差两分了！我们又有戏了！", actionHint: "一起欢呼", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "High five! This is so much better than watching on TV. The atmosphere is electric!",
            textZh: "击掌！现场看比电视上好多了。气氛太火爆了！",
          },
          {
            speaker: "them",
            role: "旁边球迷",
            textEn: "Right?! Nothing beats being here live. Hey, if you guys want, I can take a photo of you with the court in the background. Great souvenir!",
            textZh: "对吧？！现场看完全不一样。嘿，如果你们想的话，我可以帮你们拍张照，背景是球场。很好的纪念！",
            keyPhrases: [
              { en: "nothing beats", zh: "没有什么比得上" },
              { en: "being here live", zh: "亲临现场" },
              { en: "the court", zh: "球场" },
            ],
            alternativeExpressions: [
              { textEn: "Told you! Nothing like seeing it in person. Want me to snap a pic of you two with the court behind you?", textZh: "说了吧！现场看完全不一样。要我帮你们拍张照片，背景是球场？", actionHint: "让他帮忙拍照", frequency: "common" },
              { textEn: "Right?! TV doesn't do it justice. Hey, want a photo? I'll take one for you guys.", textZh: "对吧？！电视根本不能比。嘿，要拍张照吗？我帮你们拍。", actionHint: "准备合影", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be great, thank you! This has been an unforgettable experience.",
            textZh: "太好了，谢谢你！这是一次难忘的经历。",
          },
        ],
      },
    ],
  },

  // ==================== 主题公园 ====================
  {
    id: "entertainment-theme-park",
    category: "entertainment",
    titleZh: "主题公园",
    titleEn: "Theme Park",
    description: "在国外主题公园购票、使用快速通行证、乘坐游乐设施",
    otherRole: "主题公园工作人员",
    otherRoleIcon: "ferris-wheel",
    flows: [
      {
        id: "park-tickets-fastpass",
        titleZh: "购票与快速通行",
        titleEn: "Tickets & Fast Pass",
        description: "在主题公园入口购票、了解快速通行证系统、规划游玩路线",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, two adult tickets for the park, please. What are our options?",
            textZh: "你好，两张成人票。有什么选择？",
          },
          {
            speaker: "them",
            role: "售票处",
            textEn: "We have a standard one-day pass for $110 per person, which gives you access to all rides and shows. There's also a premium pass for $160 that includes our Lightning Lane — that lets you skip the regular lines on up to three popular attractions.",
            textZh: "标准一日票每人110美元，可以玩所有游乐设施和看所有表演。还有高级票160美元，包含我们的Lightning Lane快速通道——可以在最多三个热门项目上跳过普通排队。",
            keyPhrases: [
              { en: "one-day pass", zh: "一日票" },
              { en: "all rides and shows", zh: "所有游乐设施和表演" },
              { en: "premium pass", zh: "高级票" },
              { en: "Lightning Lane", zh: "快速通道" },
              { en: "skip the regular lines", zh: "跳过普通排队" },
            ],
            vocabNotes: {
              "Lightning Lane": {
                meaningInContext: "在这句话里表示：快速通行通道，付费后可以减少排队时间",
                similarUsage: "类似用法：We used Lightning Lane for the roller coaster and only waited 10 minutes.",
              },
            },
            culturalNote: "迪士尼的快速通行系统叫Lightning Lane/Genie+，环球影城叫Express Pass，不同公园名称不同但概念类似。旺季排队可能1-2小时，快速通行非常值得。",
            alternativeExpressions: [
              { textEn: "Standard is $110 — gets you on everything. Premium is $160 and includes the skip-the-line pass for three big rides.", textZh: "标准票110——什么都能玩。高级票160，包含三个热门项目的免排队通道。", actionHint: "权衡哪种票", frequency: "common" },
              { textEn: "One-day pass is 110 a person. If you upgrade to premium for 160, you get Lightning Lane — lets you cut the line on the popular stuff.", textZh: "一日票每人110。升级到160的高级票就有快速通道——热门项目可以插队。", actionHint: "考虑是否升级", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is the Lightning Lane worth it? How long are the regular wait times today?",
            textZh: "快速通道值得买吗？今天普通排队要多久？",
          },
          {
            speaker: "them",
            role: "售票处",
            textEn: "It's a Saturday, so the park is pretty busy. The top rides have wait times of 60 to 90 minutes right now. With Lightning Lane, those same rides are about 10 to 15 minutes. I'd definitely recommend it on a busy day like today.",
            textZh: "今天是周六，所以公园比较拥挤。热门项目现在排队要60到90分钟。用快速通道的话，同样的项目大概10到15分钟。像今天这么忙的时候，我绝对推荐。",
            keyPhrases: [
              { en: "wait times", zh: "等候时间" },
              { en: "top rides", zh: "热门项目" },
              { en: "busy day", zh: "繁忙的日子" },
            ],
            alternativeExpressions: [
              { textEn: "Today's packed — the big rides are 60 to 90 minutes right now. With Lightning Lane, you're looking at like 10 minutes. Definitely worth it on a Saturday.", textZh: "今天人超多——热门项目现在排60到90分钟。有快速通道的话大概10分钟。周六绝对值得买。", actionHint: "买快速通道", frequency: "common" },
              { textEn: "Saturday's always busy. You'll wait over an hour for the top rides. Lightning Lane cuts that down to 10-15 min. I'd get it for sure.", textZh: "周六总是很忙。热门项目要等一个多小时。快速通道能缩到10-15分钟。我肯定会买。", actionHint: "决定买高级票", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "We'll go with the premium pass then. Do kids under 3 need a ticket?",
            textZh: "那我们买高级票。3岁以下需要买票吗？",
          },
          {
            speaker: "them",
            role: "售票处",
            textEn: "Kids under 3 get in free — no ticket needed. We also have stroller rentals for $20 a day if you need one. There are designated stroller parking areas outside each ride.",
            textZh: "3岁以下免费入园——不需要票。如果需要的话，我们有婴儿车出租，每天20美元。每个项目外面都有专门的婴儿车停放区。",
            keyPhrases: [
              { en: "get in free", zh: "免费入园" },
              { en: "stroller rentals", zh: "婴儿车出租" },
              { en: "stroller parking", zh: "婴儿车停放区" },
            ],
            alternativeExpressions: [
              { textEn: "Under 3 is free — no ticket needed. We also rent strollers if you need one, $20 a day.", textZh: "3岁以下免费——不需要票。如果需要我们也租婴儿车，每天20美元。", actionHint: "考虑是否租婴儿车", frequency: "common" },
              { textEn: "No charge for kids under 3. Want a stroller? Twenty bucks for the day. Stroller parking's at every ride.", textZh: "3岁以下不收费。要婴儿车吗？一天二十块。每个项目都有婴儿车停放区。", actionHint: "了解婴儿车", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. Can you recommend the must-do rides?",
            textZh: "好的。能推荐几个必玩的项目吗？",
          },
          {
            speaker: "them",
            role: "售票处",
            textEn: "Absolutely! The Thunderbolt roller coaster is our most popular — definitely use your Lightning Lane for that one. The 4D dark ride in Adventure Land is brand new and incredible. And don't miss the fireworks show at 9 PM — it's spectacular. I'd suggest using the park app to check real-time wait times throughout the day.",
            textZh: "当然！雷霆过山车是最受欢迎的——一定要在那个上面用快速通道。冒险乐园的4D暗黑骑乘是全新的，非常精彩。还有晚上9点的烟花表演不要错过——非常壮观。建议用公园App全天查看实时等候时间。",
            keyPhrases: [
              { en: "roller coaster", zh: "过山车" },
              { en: "4D dark ride", zh: "4D暗黑骑乘" },
              { en: "brand new", zh: "全新的" },
              { en: "fireworks show", zh: "烟花表演" },
              { en: "real-time wait times", zh: "实时等候时间" },
            ],
            alternativeExpressions: [
              { textEn: "Number one is the Thunderbolt roller coaster — save your Lightning Lane for that. The new 4D ride is insane. And the 9 PM fireworks are a must.", textZh: "第一名是雷霆过山车——快速通道留给那个。新的4D骑乘超酷。还有9点的烟花必看。", actionHint: "规划游玩顺序", frequency: "common" },
              { textEn: "Definitely hit Thunderbolt first — use your fast pass. The 4D dark ride just opened and it's incredible. Don't miss fireworks at 9.", textZh: "一定先去雷霆——用你的快速通道。4D暗黑骑乘刚开放超赞。9点烟花不要错过。", actionHint: "下载App查排队", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a map of the park?",
            textZh: "有公园地图吗？",
          },
          {
            speaker: "them",
            role: "售票处",
            textEn: "Here's a paper map, and you can also download the park app — it has an interactive map with GPS navigation, wait times, show schedules, and mobile food ordering. It's really handy. Enjoy your day at the park!",
            textZh: "这是纸质地图，你也可以下载公园App——有带GPS导航的互动地图、等候时间、演出时间表和手机点餐功能。非常方便。祝你们在公园玩得开心！",
            keyPhrases: [
              { en: "paper map", zh: "纸质地图" },
              { en: "interactive map", zh: "互动地图" },
              { en: "GPS navigation", zh: "GPS导航" },
              { en: "show schedules", zh: "演出时间表" },
              { en: "mobile food ordering", zh: "手机点餐" },
            ],
            alternativeExpressions: [
              { textEn: "Here's a paper map. But honestly, just download the app — it's got everything. GPS, wait times, food ordering. Super handy.", textZh: "这是纸质地图。不过说实话下载App就行——什么都有。GPS、等候时间、点餐。超方便。", actionHint: "下载App", frequency: "common" },
              { textEn: "Grab a map here, and get the app too — it shows real-time wait times and lets you order food from your phone. Have a blast!", textZh: "地图拿一份，App也下一个——能看实时排队时间还能手机点餐。玩得开心！", actionHint: "两个都用", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks so much! We can't wait to get started!",
            textZh: "非常感谢！我们迫不及待了！",
          },
        ],
      },

      // --- Flow 2: 游乐设施排队+身高限制+安全须知 ---
      {
        id: "park-rides",
        titleZh: "乘坐游乐设施",
        titleEn: "Riding Attractions",
        description: "排队乘坐游乐设施时的沟通，包括身高限制、安全须知和存放物品",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, my daughter wants to ride this. Is there a height requirement?",
            textZh: "打扰一下，我女儿想玩这个。有身高限制吗？",
          },
          {
            speaker: "them",
            role: "项目工作人员",
            textEn: "Yes, riders must be at least 42 inches tall — that's about 107 centimeters. We have a height check station right here. Let's measure her.",
            textZh: "有的，乘坐者身高至少需要42英寸——大约107厘米。这里有身高测量点。我们来量一下。",
            keyPhrases: [
              { en: "height requirement", zh: "身高限制" },
              { en: "42 inches", zh: "42英寸（约107厘米）" },
              { en: "height check station", zh: "身高测量点" },
            ],
            culturalNote: "美国游乐园的身高限制用英寸（inches），1英寸=2.54厘米。常见限制：36\"(91cm)、42\"(107cm)、48\"(122cm)、54\"(137cm)。",
            alternativeExpressions: [
              { textEn: "Yeah, there's a minimum height — 42 inches, about 107 centimeters. Let's check her real quick right here.", textZh: "有的，最低身高42英寸，大约107厘米。我们在这里给她快速量一下。", actionHint: "配合量身高", frequency: "common" },
              { textEn: "Gotta be at least 42 inches. We have a measuring spot right here — let's see if she makes it.", textZh: "至少42英寸。这里有量身高的——看看她够不够。", actionHint: "去量身高", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "She just barely made it! What about loose items — do we need to store our bags somewhere?",
            textZh: "她刚好够！随身物品怎么办——需要把包存在哪里吗？",
          },
          {
            speaker: "them",
            role: "项目工作人员",
            textEn: "There are free lockers right next to the ride entrance. You'll need to store all loose items — bags, hats, sunglasses, phones. Nothing in your pockets either, please. The lockers are free for the duration of the ride, but after 2 hours they charge $5.",
            textZh: "游乐设施入口旁边有免费储物柜。所有随身物品都需要存放——包、帽子、太阳镜、手机。口袋里也不要放东西。储物柜在乘坐时间内免费，超过2小时收费5美元。",
            keyPhrases: [
              { en: "free lockers", zh: "免费储物柜" },
              { en: "loose items", zh: "随身物品" },
              { en: "nothing in your pockets", zh: "口袋里不要放东西" },
              { en: "duration of the ride", zh: "乘坐时间内" },
            ],
            alternativeExpressions: [
              { textEn: "Lockers are right by the entrance — free while you ride. Everything loose needs to go in there. No phones in pockets either.", textZh: "储物柜就在入口旁——乘坐期间免费。所有随身物品都要放进去。口袋里也不能放手机。", actionHint: "存好所有物品", frequency: "common" },
              { textEn: "Yeah, there are free lockers right here. Bags, hats, sunglasses, phones — everything goes in. Nothing in your pockets.", textZh: "有的，这里有免费储物柜。包、帽子、太阳镜、手机——全部放进去。口袋也要清空。", actionHint: "把东西存好", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. How intense is this ride? My daughter is a little nervous.",
            textZh: "明白了。这个项目刺激程度怎么样？我女儿有点紧张。",
          },
          {
            speaker: "them",
            role: "项目工作人员",
            textEn: "This is a medium-intensity ride — there are some drops and twists, but it's not as extreme as the big roller coasters. It lasts about three minutes. If your daughter is nervous, I'd suggest sitting in the middle rows — the front and back are more intense. And don't worry, the safety restraints are very secure.",
            textZh: "这是中等刺激程度的项目——有一些下降和转弯，但没有大型过山车那么极端。大约三分钟。如果你女儿紧张的话，建议坐中间几排——前排和后排更刺激。别担心，安全束带非常牢固。",
            keyPhrases: [
              { en: "medium-intensity", zh: "中等刺激程度" },
              { en: "drops and twists", zh: "下降和转弯" },
              { en: "middle rows", zh: "中间几排" },
              { en: "safety restraints", zh: "安全束带/安全装置" },
              { en: "secure", zh: "牢固的" },
            ],
            alternativeExpressions: [
              { textEn: "It's a moderate thrill ride — fun but not too scary.", textZh: "这是适度刺激的——好玩但不太吓人。", actionHint: "可以放心乘坐", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "She says she's ready! One more question — can we buy the ride photos after?",
            textZh: "她说准备好了！再问一下——乘坐后可以买照片吗？",
          },
          {
            speaker: "them",
            role: "项目工作人员",
            textEn: "Yes! There's a photo kiosk at the exit. Your ride photos show up automatically — just enter your seat number. Single photos are $20, or you can buy a Memory Maker pass for $70 that covers all ride photos for the whole day.",
            textZh: "可以！出口处有照片打印点。你的乘坐照片会自动显示——输入你的座位号就行。单张照片20美元，或者可以买70美元的记忆制造者通行证，包含全天所有项目的照片。",
            keyPhrases: [
              { en: "photo kiosk", zh: "照片打印点" },
              { en: "seat number", zh: "座位号" },
              { en: "Memory Maker", zh: "记忆制造者（全天照片套餐）" },
            ],
            alternativeExpressions: [
              { textEn: "There's a screen at the exit — just punch in your seat number and your photos pop up. $20 each, or the all-day pass is $70.", textZh: "出口有个屏幕——输入座位号照片就出来。每张20，全天通行证70。", actionHint: "出来后去看照片", frequency: "common" },
              { textEn: "Yep! Check the kiosk when you get off. If you're riding all day, the Memory Maker's the way to go — 70 bucks for unlimited ride photos.", textZh: "可以！下来后去看打印点。如果玩一整天的话买记忆制造者划算——70块不限量。", actionHint: "考虑全天套餐", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "The Memory Maker sounds like a good deal since we're here all day. Let's do it!",
            textZh: "记忆制造者听起来很划算，反正我们要玩一整天。买了！",
          },
          {
            speaker: "them",
            role: "项目工作人员",
            textEn: "Great choice! You can purchase it at the kiosk after the ride. Alright, please step into Row 4 and pull your safety bar down until it clicks. Enjoy the ride!",
            textZh: "好选择！乘坐后在打印点那里就可以买。好了，请走进第4排，把安全杆往下拉直到听到咔嗒声。祝你们玩得开心！",
            keyPhrases: [
              { en: "step into", zh: "走进" },
              { en: "safety bar", zh: "安全杆" },
              { en: "pull down", zh: "往下拉" },
              { en: "clicks", zh: "咔嗒声（锁定）" },
            ],
            alternativeExpressions: [
              { textEn: "You can grab it at the kiosk after. Alright, hop into Row 4. Pull the bar down till you hear a click. Arms and legs inside at all times. Have fun!", textZh: "下来后在打印点买。好了，跳进第4排。把安全杆拉下来直到听到咔嗒声。手脚全程不要伸出去。玩得开心！", actionHint: "拉好安全杆", frequency: "common" },
              { textEn: "Row 4, please! Safety bar all the way down — make sure it clicks. Keep your hands inside. Enjoy the ride!", textZh: "请到第4排！安全杆拉到底——确保咔嗒锁上。手不要伸出去。祝乘坐愉快！", actionHint: "系好安全装置", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That was amazing! She loved it — she wants to go again!",
            textZh: "太棒了！她超喜欢——还想再玩一次！",
          },
        ],
      },
    ],
  },

  // ==================== KTV/卡拉OK ====================
  {
    id: "entertainment-karaoke",
    category: "entertainment",
    titleZh: "KTV/卡拉OK",
    titleEn: "Karaoke",
    description: "在国外唱卡拉OK，预订包间、点歌、点饮品",
    otherRole: "KTV工作人员",
    otherRoleIcon: "mic",
    flows: [
      {
        id: "karaoke-booking",
        titleZh: "预订包间+点饮品",
        titleEn: "Room Booking & Drinks",
        description: "到达KTV后预订包间、了解收费方式、点饮品和小食",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, we'd like to book a karaoke room for tonight. There are six of us.",
            textZh: "你好，我们想预订今晚的卡拉OK包间。我们六个人。",
            casualVersion: "Hey, got any rooms for six people tonight?",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Welcome! For six people, I'd recommend our medium room. It fits up to eight comfortably. We charge by the hour — $40 per hour on weeknights, $55 on weekends. Tonight being Friday, it's the weekend rate.",
            textZh: "欢迎！六个人的话，推荐我们的中型包间。最多坐8个人比较舒服。按小时收费——工作日每小时40美元，周末55美元。今天是周五，算周末价。",
            keyPhrases: [
              { en: "medium room", zh: "中型包间" },
              { en: "fits up to eight", zh: "最多坐8个人" },
              { en: "charge by the hour", zh: "按小时收费" },
              { en: "weeknights", zh: "工作日晚上" },
              { en: "weekend rate", zh: "周末价" },
            ],
            culturalNote: "美国和日本的卡拉OK通常是包间制（private room），而非像酒吧卡拉OK那样在公共场合唱。在欧美城市的日式/韩式KTV比较受欢迎。",
            alternativeExpressions: [
              { textEn: "For six, you'd want the medium room — fits eight. It's $55 an hour tonight since it's the weekend. How many hours?", textZh: "六个人的话中型包间合适——坐8个人。今晚周末价每小时55美元。几个小时？", actionHint: "选择时间", frequency: "common" },
              { textEn: "We've got a medium room that fits your group. Weekend rate's $55 an hour. Want to book for a couple hours?", textZh: "有个中型包间适合你们。周末价每小时55。要订两个小时吗？", actionHint: "确认订房", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "We'll take it for two hours. Is there a minimum drink order?",
            textZh: "我们订两个小时。有最低消费吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "There's a two-drink minimum per person. We have cocktails, beer, wine, soft drinks, and juice. There's also a food menu — fries, wings, and sliders are popular. I can send a server to your room once you're settled in.",
            textZh: "每人最低消费两杯饮品。我们有鸡尾酒、啤酒、红酒、软饮和果汁。还有食物菜单——薯条、鸡翅和小汉堡很受欢迎。等你们安顿好了，我可以派服务员去包间。",
            keyPhrases: [
              { en: "two-drink minimum", zh: "最低消费两杯" },
              { en: "soft drinks", zh: "软饮/无酒精饮料" },
              { en: "wings", zh: "鸡翅" },
              { en: "sliders", zh: "小汉堡" },
              { en: "settled in", zh: "安顿好了" },
            ],
            vocabNotes: {
              sliders: {
                meaningInContext: "在这句话里表示：迷你小汉堡，是美国酒吧和KTV常见的小食",
                similarUsage: "类似用法：We ordered a plate of sliders to share.",
              },
            },
            alternativeExpressions: [
              { textEn: "There's a two-drink minimum per person. We've got cocktails, beer, soft drinks — plus food if you're hungry. I'll send someone to your room once you're in.", textZh: "每人最低消费两杯饮品。有鸡尾酒、啤酒、软饮——还有吃的。安顿好了我派人过去。", actionHint: "等服务员过来点", frequency: "common" },
              { textEn: "Just a heads up — two drinks per person minimum. We've got a full bar and some solid bar food. The wings are fire.", textZh: "提醒一下——每人至少点两杯。有完整吧台和不错的小食。鸡翅超赞。", actionHint: "准备点饮料", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds good. Do you have songs in different languages? We'd like some Chinese songs too.",
            textZh: "好的。你们有不同语言的歌吗？我们也想唱中文歌。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes! Our system has songs in English, Chinese, Korean, Japanese, Spanish, and more. You can search by language, artist, or song title on the touch screen in the room. We have over 50,000 songs.",
            textZh: "有的！我们的系统有英文、中文、韩文、日文、西班牙语等多种语言的歌。可以在包间里的触摸屏上按语言、歌手或歌名搜索。我们有超过5万首歌。",
            keyPhrases: [
              { en: "search by language", zh: "按语言搜索" },
              { en: "touch screen", zh: "触摸屏" },
              { en: "artist", zh: "歌手/艺术家" },
              { en: "song title", zh: "歌名" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely! Chinese, Korean, Japanese, English, Spanish — you name it. Over 50K songs. Search by language on the touchscreen.", textZh: "当然！中文、韩文、日文、英文、西班牙语——你说的都有。5万多首歌。触摸屏上按语言搜。", actionHint: "去包间试试", frequency: "common" },
              { textEn: "We've got songs in like a dozen languages including Chinese. The touchscreen lets you search by artist, title, or language.", textZh: "有十几种语言的歌包括中文。触摸屏可以按歌手、歌名或语言搜索。", actionHint: "在包间里操作", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Can we extend our time if we're having fun?",
            textZh: "太好了。如果玩得开心的话可以延长时间吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Absolutely, just press the service button in your room or come to the front desk. We'll extend in 30-minute blocks as long as the room is available. I'll give you a heads-up 10 minutes before your time is up.",
            textZh: "当然可以，按包间里的服务按钮或者来前台说一声就行。只要包间有空，30分钟一个单位地延长。你们时间快到前10分钟我会提醒你们。",
            keyPhrases: [
              { en: "service button", zh: "服务按钮" },
              { en: "extend", zh: "延长" },
              { en: "30-minute blocks", zh: "30分钟一个单位" },
              { en: "heads-up", zh: "提前提醒" },
              { en: "time is up", zh: "时间到了" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! Just buzz the service button or come out front. We do 30-minute add-ons. I'll give you a 10-minute warning.", textZh: "当然！按服务按钮或出来跟前台说。30分钟一个单位加。时间快到前10分钟我会提醒你们。", actionHint: "记住延时方式", frequency: "common" },
              { textEn: "Totally — just let us know. We extend in half-hour blocks. I'll knock on your door when you've got 10 minutes left.", textZh: "没问题——跟我们说就行。半小时一个单位延长。剩10分钟时我敲门提醒你们。", actionHint: "到时再说", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. Where's our room?",
            textZh: "好的。我们的包间在哪？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Room 8, down the hallway on the right. The microphones and remote are on the table. If you need help with the system, there's a guide in English on the wall, or just call us. Have fun tonight!",
            textZh: "8号房，沿走廊右手边。话筒和遥控器在桌上。如果系统不会用，墙上有英文指南，或者直接叫我们。今晚玩得开心！",
            keyPhrases: [
              { en: "microphones", zh: "话筒/麦克风" },
              { en: "remote", zh: "遥控器" },
              { en: "guide", zh: "使用指南" },
            ],
            alternativeExpressions: [
              { textEn: "You're in Room 8 — down the hall, on the right. Mics and remote are all set up. Need help? Just call us. Have a blast!", textZh: "8号房——沿走廊右手边。话筒和遥控器都准备好了。需要帮助就叫我们。玩得开心！", actionHint: "去包间开始", frequency: "common" },
              { textEn: "Room 8, take a right down the hall. Everything's on the table. There's an English guide on the wall if you get stuck.", textZh: "8号房，走廊右转。东西都在桌上。如果搞不明白，墙上有英文指南。", actionHint: "找到包间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you! We're going to have a blast!",
            textZh: "谢谢！我们一定会玩得超开心！",
            culturalNote: "\"have a blast\" 是很地道的美式表达，意思是玩得非常开心。",
          },
        ],
      },

      // --- Flow 2: 点歌+设备问题+结账 ---
      {
        id: "karaoke-singing",
        titleZh: "点歌与设备问题",
        titleEn: "Song Selection & Equipment Issues",
        description: "在包间里点歌、处理设备问题、结账离开",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, we can't figure out how to queue up songs. The touch screen seems stuck.",
            textZh: "不好意思，我们不知道怎么排歌。触摸屏好像卡住了。",
            casualVersion: "Hey, we can't get the song queue to work — the screen's frozen.",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Let me restart the system for you — it takes about 30 seconds. In the meantime, you can also use our app on your phone to search and queue songs. Just connect to our Wi-Fi — the password is on the table card.",
            textZh: "我帮你们重启一下系统——大概要30秒。同时你们也可以用手机上我们的App搜歌和排歌。连我们的Wi-Fi就行——密码在桌上的卡片上。",
            keyPhrases: [
              { en: "restart the system", zh: "重启系统" },
              { en: "queue songs", zh: "排歌/点歌排队" },
              { en: "table card", zh: "桌上的卡片" },
            ],
            vocabNotes: {
              queue: {
                meaningInContext: "在这句话里表示：把歌曲加入播放列表排队等唱",
                similarUsage: "类似用法：I queued up three songs so we don't have to wait between turns.",
              },
            },
            alternativeExpressions: [
              { textEn: "Let me reboot it real quick — 30 seconds. In the meantime, you can use the app on your phone. Wi-Fi password's on the card.", textZh: "我快速重启一下——30秒。同时你们可以用手机App。Wi-Fi密码在卡上。", actionHint: "连Wi-Fi用App", frequency: "common" },
              { textEn: "Screen's frozen? Happens sometimes. Give me a sec to restart it. You can also queue songs from our app — grab the Wi-Fi password off the table.", textZh: "屏幕卡了？有时候会这样。让我重启一下。你们也可以用我们App点歌——桌上有Wi-Fi密码。", actionHint: "下载App点歌", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's working now. How do I adjust the volume and the key? The music is too loud and the key is too high for me.",
            textZh: "好了，能用了。怎么调音量和音调？伴奏太响了，调太高了我唱不上去。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Use the remote control — the volume buttons are on the side. For the key, press the up and down arrows next to the music note symbol. You can lower it by one or two steps. The echo and mic volume are also adjustable on the remote.",
            textZh: "用遥控器——音量键在侧面。调音调的话，按音符符号旁边的上下箭头。可以降一到两个调。混响和话筒音量也可以在遥控器上调。",
            keyPhrases: [
              { en: "volume buttons", zh: "音量键" },
              { en: "key", zh: "音调/调" },
              { en: "lower it by one or two steps", zh: "降一到两个调" },
              { en: "echo", zh: "混响/回声" },
              { en: "mic volume", zh: "话筒音量" },
            ],
            alternativeExpressions: [
              { textEn: "Volume's on the side of the remote. For the key, hit the arrows by the music note icon — you can drop it a step or two. Echo's adjustable too.", textZh: "音量在遥控器侧面。调音调的话按音符图标旁的箭头——可以降一两个调。混响也能调。", actionHint: "用遥控器调节", frequency: "common" },
              { textEn: "Use the remote — volume buttons are on the side. To lower the key, press the down arrow next to the note. Drop it a couple steps.", textZh: "用遥控器——音量键在侧面。降调的话按音符旁的下箭头。降一两个调。", actionHint: "调到合适的调", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Can we also order another round of drinks? Two beers, one cocktail, and three soft drinks.",
            textZh: "好了。我们还想再点一轮饮料。两瓶啤酒、一杯鸡尾酒、三杯软饮。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Sure thing! Which cocktail would you like? Our most popular ones are the Mojito and the Long Island Iced Tea. And for soft drinks, we have Coke, Sprite, ginger ale, and juice.",
            textZh: "没问题！想要哪款鸡尾酒？最受欢迎的是莫吉托和长岛冰茶。软饮有可乐、雪碧、姜汁汽水和果汁。",
            keyPhrases: [
              { en: "another round", zh: "再来一轮" },
              { en: "Long Island Iced Tea", zh: "长岛冰茶" },
              { en: "ginger ale", zh: "姜汁汽水" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! What cocktail? Mojito and Long Island are both popular. For soft drinks we've got Coke, Sprite, and ginger ale.", textZh: "当然！要哪款鸡尾酒？莫吉托和长岛冰茶都很受欢迎。软饮有可乐、雪碧和姜汁汽水。", actionHint: "点具体的", frequency: "common" },
              { textEn: "Another round, got it! Which cocktail — Mojito? Long Island? And for soft drinks, we have Coke, Sprite, juice, ginger ale.", textZh: "再来一轮，收到！哪款鸡尾酒——莫吉托？长岛？软饮有可乐、雪碧、果汁、姜汁汽水。", actionHint: "具体选择", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "One Mojito, please. And three Cokes. How much time do we have left?",
            textZh: "一杯莫吉托。三杯可乐。我们还剩多少时间？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "You have about 40 minutes left. Would you like to extend? The next slot is open, so you could add another hour if you'd like.",
            textZh: "还剩大约40分钟。要延长吗？下一个时段有空，可以再加一个小时。",
            keyPhrases: [
              { en: "time left", zh: "剩余时间" },
              { en: "next slot", zh: "下一个时段" },
              { en: "add another hour", zh: "再加一个小时" },
            ],
            alternativeExpressions: [
              { textEn: "About 40 minutes left. The next time slot's free if you wanna keep going — another hour?", textZh: "还剩大约40分钟。下一个时段空着如果你们想继续——再加一小时？", actionHint: "决定是否续时", frequency: "common" },
              { textEn: "You've got 40 minutes. Wanna extend? The room after yours is open, so we can add on easily.", textZh: "还有40分钟。要延长吗？你们后面的时段是空的，可以轻松加时。", actionHint: "加时间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Let's extend for one more hour. When we're done, how do we settle the bill?",
            textZh: "再加一个小时吧。结束后怎么结账？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Just come to the front desk when you're finished. I'll bring your bill to the room 5 minutes before your time ends so you can review it. We accept cash, cards, and Apple Pay. Tips are appreciated but not required.",
            textZh: "结束后来前台就行。时间结束前5分钟我会把账单送到包间，方便你们核对。我们接受现金、刷卡和Apple Pay。小费不是必须的但欢迎给。",
            keyPhrases: [
              { en: "settle the bill", zh: "结账" },
              { en: "review it", zh: "核对" },
              { en: "Apple Pay", zh: "Apple Pay" },
              { en: "tips are appreciated", zh: "欢迎给小费" },
            ],
            alternativeExpressions: [
              { textEn: "Just come to the desk when you're done. I'll drop the bill off 5 minutes before time's up. We take cards and Apple Pay.", textZh: "结束后来前台就行。时间快到5分钟前我把账单送过来。我们接受刷卡和Apple Pay。", actionHint: "到时再结账", frequency: "common" },
              { textEn: "Head to the front desk when you're ready. I'll bring you the bill before your time's up so you can check it over.", textZh: "准备好了来前台。时间到之前我会送账单给你们核对。", actionHint: "核对后付款", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds good. This has been such a fun night. We'll definitely come back!",
            textZh: "好的。今晚太开心了。我们一定会再来的！",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Glad to hear it! We have a happy hour special on Tuesdays and Wednesdays — half-price room rates before 8 PM. Great for a weeknight outing!",
            textZh: "很高兴听到这个！我们周二周三有欢乐时光特惠——晚上8点前包间半价。工作日出来玩很合适！",
            keyPhrases: [
              { en: "happy hour", zh: "欢乐时光（优惠时段）" },
              { en: "half-price", zh: "半价" },
              { en: "weeknight outing", zh: "工作日晚上出来玩" },
            ],
            culturalNote: "Happy hour 是欧美酒吧和娱乐场所常见的促销时段，通常在下午到傍晚，饮品和服务有折扣。",
            alternativeExpressions: [
              { textEn: "So glad! Hey, we do half-price rooms on Tuesdays and Wednesdays before 8. Great deal for a weeknight.", textZh: "太好了！对了，周二周三8点前包间半价。工作日很划算。", actionHint: "记住优惠日", frequency: "common" },
              { textEn: "Awesome! Come back on a Tuesday or Wednesday — happy hour pricing, rooms are half off before 8 PM.", textZh: "太棒了！周二周三再来——欢乐时光价，8点前包间半价。", actionHint: "下次选工作日", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 海滩 ====================
  {
    id: "entertainment-beach",
    category: "entertainment",
    titleZh: "海滩",
    titleEn: "Beach Activities",
    description: "在海滩享受各种活动，包括冲浪、租借设备和注意安全事项",
    otherRole: "救生员/租借店员",
    otherRoleIcon: "waves",
    flows: [
      // --- Flow 1: 海滩活动和租借 ---
      {
        id: "beach-fun",
        titleZh: "海滩活动",
        titleEn: "Beach Activities & Rentals",
        description: "在海滩租借设备、了解安全规则和享受活动",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to rent a surfboard. I'm a complete beginner — what do you recommend?",
            textZh: "你好，我想租一块冲浪板。我是完全的新手——你推荐什么？",
          },
          {
            speaker: "them",
            role: "租借店员",
            textEn: "For beginners, I'd suggest a soft-top longboard — it's wider and more stable. We also offer surf lessons if you're interested. A 90-minute group lesson with board rental is $65.",
            textZh: "新手的话，我建议软顶长板——更宽更稳。我们也提供冲浪课，如果你感兴趣的话。90分钟的团体课包含冲浪板租借是65美元。",
            keyPhrases: [
              { en: "soft-top longboard", zh: "软顶长板" },
              { en: "stable", zh: "稳定的" },
              { en: "surf lessons", zh: "冲浪课" },
              { en: "group lesson", zh: "团体课" },
            ],
            alternativeExpressions: [
              { textEn: "If you're just starting out, grab a soft-top longboard — super stable. Or we do surf lessons, $65 for 90 minutes with the board.", textZh: "如果你刚开始，拿软顶长板——超稳。或者上我们的冲浪课，90分钟65美元包含冲浪板。", actionHint: "考虑上课", frequency: "common" },
              { textEn: "For a beginner? Definitely a longboard — way easier. We also have lessons if you want someone to teach you the basics.", textZh: "新手？一定要长板——容易多了。我们也有教学课如果你想有人教基础。", actionHint: "选择租板或上课", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "A lesson sounds great! When does the next one start? And do I need to bring anything?",
            textZh: "上课听起来不错！下一节什么时候开始？我需要带什么吗？",
          },
          {
            speaker: "them",
            role: "租借店员",
            textEn: "The next class is at 10 AM — that's in about 45 minutes. Just bring sunscreen and wear a swimsuit. We provide the wetsuit, board, and a rash guard. Apply waterproof sunscreen before you put on the wetsuit.",
            textZh: "下一节课10点——大约45分钟后。带上防晒霜，穿泳衣就行。我们提供潜水衣、冲浪板和防磨衣。穿潜水衣之前先涂好防水防晒霜。",
            keyPhrases: [
              { en: "wetsuit", zh: "潜水衣" },
              { en: "rash guard", zh: "防磨衣" },
              { en: "waterproof sunscreen", zh: "防水防晒霜" },
            ],
            alternativeExpressions: [
              { textEn: "10 AM, about 45 minutes from now. Just wear your swimsuit and bring sunscreen. We've got wetsuits and boards for you.", textZh: "10点，大约45分钟后。穿泳衣带防晒霜就行。潜水衣和冲浪板我们提供。", actionHint: "准备好出发", frequency: "common" },
              { textEn: "Next one's at 10. You don't need to bring much — swimsuit and waterproof sunscreen. We provide everything else.", textZh: "下一节10点。不用带太多——泳衣和防水防晒霜。其他的我们都提供。", actionHint: "涂好防晒", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Also, is it safe to swim in this area? I see some flags on the beach.",
            textZh: "好的。另外，这个区域游泳安全吗？我看到沙滩上有一些旗子。",
          },
          {
            speaker: "them",
            role: "救生员",
            textEn: "The green flag means conditions are calm and safe. Yellow means moderate — swim with caution. Red means dangerous — stay out of the water. Right now it's yellow, so the current is a bit strong. Always swim between the red and yellow flags — that's the supervised area.",
            textZh: "绿旗表示海况平静安全。黄旗表示中等——小心游泳。红旗表示危险——不要下水。现在是黄旗，水流有点强。始终在红黄旗之间游泳——那是有人监护的区域。",
            keyPhrases: [
              { en: "green flag", zh: "绿旗" },
              { en: "current", zh: "水流/洋流" },
              { en: "supervised area", zh: "有人监护的区域" },
            ],
            culturalNote: "海滩旗帜是全球通用的安全标志。如果不确定，一定要问救生员。被水流卷走时不要逆流游，而是平行于海岸游出水流区。",
            alternativeExpressions: [
              { textEn: "Green flag = safe, yellow = be careful, red = don't go in. Right now it's yellow — current's a bit strong. Stick between the flags.", textZh: "绿旗=安全，黄旗=小心，红旗=别下水。现在是黄旗——水流有点强。在旗子之间游。", actionHint: "注意旗帜颜色", frequency: "common" },
              { textEn: "See the flags? Yellow today — means the water's a bit rough. Swim between the red and yellow flags where we can see you.", textZh: "看到旗子了吗？今天是黄旗——水有点猛。在红黄旗之间游，我们能看到你。", actionHint: "在监护区域内游", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "What should I do if I get caught in a rip current?",
            textZh: "如果被离岸流卷走了怎么办？",
          },
          {
            speaker: "them",
            role: "救生员",
            textEn: "Great question. Don't panic and don't try to swim directly back to shore — you'll exhaust yourself. Swim parallel to the beach until you're out of the current, then swim back at an angle. If you can't escape, float and wave for help. We're always watching.",
            textZh: "问得好。不要恐慌，不要试图直接游回岸边——你会筋疲力尽。平行于海滩游，直到离开水流区，然后斜着游回来。如果游不出去，浮在水面上挥手求救。我们一直在看着。",
            keyPhrases: [
              { en: "rip current", zh: "离岸流" },
              { en: "swim parallel to the beach", zh: "平行于海滩游" },
              { en: "float and wave for help", zh: "浮在水面挥手求救" },
              { en: "exhaust yourself", zh: "筋疲力尽" },
            ],
            alternativeExpressions: [
              { textEn: "Don't fight it — you'll tire yourself out. Swim sideways, parallel to the shore, until you're out of it. If you can't, just float and wave. We're watching.", textZh: "不要硬拼——你会累垮。横着游，平行于岸边，直到出去。游不出去就浮着挥手。我们一直在看。", actionHint: "记住自救方法", frequency: "common" },
              { textEn: "Number one rule: don't panic and don't swim toward shore. Swim parallel to the beach. Can't get out? Float on your back and wave for help.", textZh: "第一条：不要慌，不要朝岸边游。平行于海滩游。出不来？仰躺浮着挥手求救。", actionHint: "牢记安全要点", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you, that's really helpful. Can I rent a beach umbrella and two chairs too?",
            textZh: "谢谢，太有帮助了。我还能租一把沙滩伞和两把椅子吗？",
          },
          {
            speaker: "them",
            role: "租借店员",
            textEn: "Sure! An umbrella and two chairs for the day is $25. I'll set them up wherever you'd like on the beach. Also, please don't leave valuables unattended — we have a locker service for $5 if you need it.",
            textZh: "当然！一把伞加两把椅子一天25美元。你指哪里我帮你摆好。另外请不要把贵重物品留在无人看管的地方——我们有储物柜服务，5美元。",
            keyPhrases: [
              { en: "beach umbrella", zh: "沙滩伞" },
              { en: "unattended", zh: "无人看管的" },
              { en: "locker service", zh: "储物柜服务" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah! $25 for an umbrella and two chairs for the day. Where do you want them? And don't leave valuables out — we've got lockers for five bucks.", textZh: "可以！伞加两把椅子一天25美元。放哪里？贵重物品别留在外面——有储物柜5美元。", actionHint: "选位置放好", frequency: "common" },
              { textEn: "Umbrella set with two chairs is $25 for the whole day. I'll set them up wherever you want. Definitely use the lockers for your phone and wallet.", textZh: "伞套装加两把椅子全天25美元。你说放哪我帮你摆。手机钱包一定要用储物柜。", actionHint: "指定位置", frequency: "common" },
            ],
          },
        ],
      },

      // --- Flow 2: 水上活动 ---
      {
        id: "water-sports",
        titleZh: "水上活动",
        titleEn: "Water Sports",
        description: "参加浮潜、划皮艇等水上活动",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "We'd like to try some water activities. What's available today?",
            textZh: "我们想试一些水上活动。今天有什么可以玩的？",
          },
          {
            speaker: "them",
            role: "活动教练",
            textEn: "Today we have snorkeling, kayaking, paddleboarding, and jet ski rentals. The snorkeling tour goes to a reef about 10 minutes offshore — you might see sea turtles. Kayaks and paddleboards are self-guided.",
            textZh: "今天有浮潜、皮划艇、桨板和摩托艇租借。浮潜团去离岸大约10分钟的珊瑚礁——可能会看到海龟。皮划艇和桨板是自助的。",
            keyPhrases: [
              { en: "snorkeling", zh: "浮潜" },
              { en: "kayaking", zh: "皮划艇" },
              { en: "paddleboarding", zh: "桨板" },
              { en: "jet ski", zh: "摩托艇/水上摩托" },
              { en: "offshore", zh: "离岸" },
            ],
            alternativeExpressions: [
              { textEn: "We've got snorkeling, kayaking, paddleboarding, and jet skis. The snorkel tour's awesome — might see some turtles out at the reef.", textZh: "有浮潜、皮划艇、桨板和水上摩托。浮潜团超棒——在珊瑚礁可能看到海龟。", actionHint: "选择活动", frequency: "common" },
              { textEn: "Lots to do! Snorkeling tour goes to the reef, kayaks and paddleboards are self-guided, and we've got jet ski rentals.", textZh: "活动很多！浮潜团去珊瑚礁，皮划艇和桨板自助的，还有水上摩托出租。", actionHint: "了解各项活动", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "The snorkeling tour sounds amazing! We've never snorkeled before — is it hard?",
            textZh: "浮潜团听起来太棒了！我们没浮潜过——难吗？",
          },
          {
            speaker: "them",
            role: "活动教练",
            textEn: "Not at all! We start with a quick lesson on the beach. You just need to be comfortable floating in water. We provide masks, snorkels, fins, and life vests. The water is about 10 feet deep at the reef, but you float on the surface the whole time.",
            textZh: "一点都不难！我们先在沙滩上做个简短的教学。你只要能在水里漂浮就行。我们提供面镜、呼吸管、脚蹼和救生衣。珊瑚礁处水深大约10英尺，但全程浮在水面上。",
            keyPhrases: [
              { en: "life vests", zh: "救生衣" },
              { en: "float on the surface", zh: "浮在水面上" },
              { en: "masks, snorkels, fins", zh: "面镜、呼吸管、脚蹼" },
            ],
            alternativeExpressions: [
              { textEn: "Super easy! We teach you on the beach first. As long as you can float, you'll be fine. We give you everything — mask, fins, life vest.", textZh: "超简单！先在沙滩上教你。能浮在水上就没问题。我们提供一切——面镜、脚蹼、救生衣。", actionHint: "放心报名", frequency: "common" },
              { textEn: "Not hard at all. You basically just float and look down. We do a quick lesson first, and you'll have a life vest on the whole time.", textZh: "一点不难。基本就是浮着往下看。先做个快速教学，全程穿救生衣。", actionHint: "消除顾虑", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds fun! How long is the tour, and how much per person?",
            textZh: "听起来很有趣！活动多长时间，每人多少钱？",
          },
          {
            speaker: "them",
            role: "活动教练",
            textEn: "It's a 2-hour tour — $55 per person, all equipment included. The boat leaves at 1 PM. A few things to note: no touching the coral, no feeding the fish, and apply reef-safe sunscreen only. We take ocean conservation seriously here.",
            textZh: "2小时的行程——每人55美元，包含所有装备。船下午1点出发。几个注意事项：不要触摸珊瑚，不要喂鱼，只能用对珊瑚友好的防晒霜。我们这里非常重视海洋保护。",
            keyPhrases: [
              { en: "reef-safe sunscreen", zh: "珊瑚友好防晒霜" },
              { en: "ocean conservation", zh: "海洋保护" },
              { en: "no touching the coral", zh: "不要触摸珊瑚" },
            ],
            alternativeExpressions: [
              { textEn: "Two hours, $55 a person, gear included. Boat leaves at 1. Quick heads up — reef-safe sunscreen only, and please don't touch the coral.", textZh: "两小时，每人55，装备包含。1点发船。提醒——只能用珊瑚友好防晒霜，别碰珊瑚。", actionHint: "买对防晒霜", frequency: "common" },
              { textEn: "It's $55 per person for 2 hours. Everything's included. One thing — only use reef-safe sunscreen. We take ocean conservation pretty seriously.", textZh: "每人55美元2小时。全部包含。一件事——只能用对珊瑚友好的防晒霜。我们很重视海洋保护。", actionHint: "确认防晒霜类型", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "We'll be careful. Can we also book kayaks for after the snorkeling tour?",
            textZh: "我们会注意的。浮潜结束后能再预约皮划艇吗？",
          },
          {
            speaker: "them",
            role: "活动教练",
            textEn: "Absolutely. Kayak rental is $30 per hour for a double kayak. I'd recommend the sunset hour — 5 to 6 PM. The water is calmer and the views are incredible. I'll hold a kayak for you.",
            textZh: "当然。双人皮划艇每小时30美元。我推荐日落时段——下午5到6点。水面更平静，景色也特别美。我帮你留一艘。",
            keyPhrases: [
              { en: "double kayak", zh: "双人皮划艇" },
              { en: "sunset hour", zh: "日落时段" },
              { en: "hold a kayak for you", zh: "帮你留一艘" },
            ],
            alternativeExpressions: [
              { textEn: "For sure! A tandem kayak is $30 an hour. I'd go out around sunset — the water's way calmer and the views are insane. I'll save one for you.", textZh: "当然！双人皮划艇每小时30。建议日落时出去——水面平静多了，景色美到爆。我帮你留一艘。", actionHint: "预约日落时段", frequency: "common" },
              { textEn: "Absolutely. Double kayak's $30 per hour. Try the sunset paddle — 5 to 6 PM is the sweet spot. I'll hold a kayak.", textZh: "没问题。双人皮划艇每小时30。试试日落划船——5到6点最好。我帮你留。", actionHint: "确认预约", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect, book us in for both. This is going to be the best day of the trip!",
            textZh: "太好了，两个都帮我们订。这将是旅行中最棒的一天！",
          },
          {
            speaker: "them",
            role: "活动教练",
            textEn: "You're all set! Meet at the dock at 12:45 for snorkeling, and come back here at 4:45 for the kayak. Stay hydrated — it's a long day in the sun. Here are your wristbands.",
            textZh: "搞定了！12:45在码头集合浮潜，4:45回这里划皮划艇。多喝水——在太阳下待一整天呢。这是你们的手环。",
            keyPhrases: [
              { en: "dock", zh: "码头" },
              { en: "stay hydrated", zh: "多喝水" },
              { en: "wristbands", zh: "手环" },
            ],
            alternativeExpressions: [
              { textEn: "Done! 12:45 at the dock for snorkeling, 4:45 back here for kayaking. Drink lots of water — you're gonna be out in the sun all day. Here's your wristbands.", textZh: "搞定！12:45码头集合浮潜，4:45回来划皮划艇。多喝水——你们一整天都在太阳下。手环给你们。", actionHint: "戴好手环", frequency: "common" },
              { textEn: "All booked! Snorkeling at 12:45, kayaking at 4:45. Stay hydrated and keep your wristbands on — they're your passes.", textZh: "全部预订好了！12:45浮潜，4:45皮划艇。多喝水，手环戴好——是你们的通行证。", actionHint: "不要摘手环", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 徒步 ====================
  {
    id: "entertainment-hiking",
    category: "entertainment",
    titleZh: "徒步",
    titleEn: "Trail Hiking",
    description: "在国外进行徒步活动，了解路线、装备要求和天气情况",
    otherRole: "公园管理员/同行者",
    otherRoleIcon: "mountain",
    flows: [
      // --- Flow 1: 了解路线和准备 ---
      {
        id: "trail-info",
        titleZh: "了解路线",
        titleEn: "Trail Information & Prep",
        description: "在游客中心了解徒步路线、难度和注意事项",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, we're planning to do some hiking today. Can you recommend a trail for intermediate hikers?",
            textZh: "你好，我们今天想去徒步。能推荐一条适合中等水平的步道吗？",
          },
          {
            speaker: "them",
            role: "公园管理员",
            textEn: "I'd recommend the Eagle Point Trail — it's about 6 miles round trip with a 1,200-foot elevation gain. Beautiful views at the summit. It takes most people 3 to 4 hours. How's your fitness level?",
            textZh: "我推荐鹰角步道——往返大约6英里，海拔升高1200英尺。山顶景色很美。大多数人走3到4小时。你们体力怎么样？",
            keyPhrases: [
              { en: "round trip", zh: "往返" },
              { en: "elevation gain", zh: "海拔升高" },
              { en: "summit", zh: "山顶" },
              { en: "fitness level", zh: "体力水平" },
            ],
            alternativeExpressions: [
              { textEn: "Eagle Point's great for intermediate — about 6 miles round trip, nice views at the top. Takes 3 to 4 hours. How fit are you guys?", textZh: "鹰角步道很适合中等水平——往返大约6英里，山顶景色很好。3到4小时。你们体力怎么样？", actionHint: "评估自己的体力", frequency: "common" },
              { textEn: "I'd say Eagle Point. Moderate difficulty, amazing summit views, about 3-4 hours. You up for a 6-mile hike?", textZh: "我推荐鹰角。中等难度，山顶景色超赞，大约3-4小时。6英里走得动吗？", actionHint: "确认是否合适", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "We're in decent shape but not super athletic. What should we bring?",
            textZh: "我们体力还可以但不是特别运动型。应该带什么？",
          },
          {
            speaker: "them",
            role: "公园管理员",
            textEn: "Essentials: at least 2 liters of water per person, snacks, sunscreen, a hat, and sturdy hiking shoes — no flip-flops or sandals. I'd also bring a light rain jacket — the weather can change quickly up there. And download the offline trail map, because cell signal is weak on the trail.",
            textZh: "必需品：每人至少2升水、零食、防晒霜、帽子和结实的登山鞋——不能穿人字拖或凉鞋。还建议带一件轻便雨衣——山上天气变化很快。下载离线步道地图，因为步道上信号很弱。",
            keyPhrases: [
              { en: "sturdy hiking shoes", zh: "结实的登山鞋" },
              { en: "rain jacket", zh: "雨衣" },
              { en: "offline trail map", zh: "离线步道地图" },
              { en: "weather can change quickly", zh: "天气变化很快" },
            ],
            alternativeExpressions: [
              { textEn: "Bring plenty of water — at least 2 liters each. Snacks, sunscreen, hat, and real hiking shoes. Oh, and a rain jacket just in case. Download the offline map too.", textZh: "多带水——每人至少2升。零食、防晒霜、帽子和正经的登山鞋。带件雨衣以防万一。也下载离线地图。", actionHint: "准备装备", frequency: "common" },
              { textEn: "Water's the big one — 2 liters minimum per person. Good shoes, sunscreen, hat. Toss in a rain jacket — mountain weather's unpredictable.", textZh: "水最重要——每人至少2升。好鞋子、防晒霜、帽子。带件雨衣——山上天气说变就变。", actionHint: "检查装备清单", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "What about wildlife? Are there bears or snakes we should worry about?",
            textZh: "野生动物呢？需要担心熊或蛇吗？",
          },
          {
            speaker: "them",
            role: "公园管理员",
            textEn: "There are black bears in the area, but they're usually shy. Make noise as you hike — talk, clap — and they'll avoid you. Store your food in a bear canister, which you can borrow from us for free. Rattlesnakes are possible on the lower sections — just watch where you step and stay on the trail.",
            textZh: "这个区域有黑熊，但它们通常怕人。徒步时制造点声音——说话、拍手——它们就会躲开。把食物放在防熊罐里，你可以免费从我们这里借。低海拔段可能有响尾蛇——注意脚下，待在步道上。",
            keyPhrases: [
              { en: "black bears", zh: "黑熊" },
              { en: "bear canister", zh: "防熊罐" },
              { en: "rattlesnakes", zh: "响尾蛇" },
              { en: "stay on the trail", zh: "待在步道上" },
            ],
            culturalNote: "在美国国家公园徒步，遵守步道规则非常重要。不要抄近路、不要带走自然物品、不要喂野生动物。'Leave no trace'（不留痕迹）是基本原则。",
            alternativeExpressions: [
              { textEn: "Black bears are around but they're shy — just make noise and they'll stay away. Grab a free bear canister for your food. Watch for rattlesnakes on the lower trail.", textZh: "有黑熊但怕人——制造点声响它们就躲了。免费借个防熊罐装食物。低海拔段注意响尾蛇。", actionHint: "借防熊罐", frequency: "common" },
              { textEn: "Yeah, there are bears. Just be loud — talk, clap, they'll avoid you. Snakes on the lower sections too, so stick to the trail and watch where you step.", textZh: "有熊。声音大一点——说话、拍手，它们就躲了。低处也有蛇，所以待在步道上注意脚下。", actionHint: "保持警觉", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. What time should we start to avoid hiking in the dark?",
            textZh: "了解了。我们应该几点出发以免天黑还在山上？",
          },
          {
            speaker: "them",
            role: "公园管理员",
            textEn: "Sunset is at 6:30 today, so I'd recommend starting no later than 2 PM. Earlier is better — morning is the best time to hike. Sign the trail register at the trailhead so we know you're out there. And let someone know your plans.",
            textZh: "今天日落6:30，所以建议最晚下午2点出发。越早越好——上午是最佳徒步时间。在步道入口的登记簿上签名，这样我们知道你们在外面。还有让其他人知道你们的计划。",
            keyPhrases: [
              { en: "sunset", zh: "日落" },
              { en: "trail register", zh: "步道登记簿" },
              { en: "trailhead", zh: "步道入口" },
              { en: "let someone know your plans", zh: "让人知道你们的计划" },
            ],
            alternativeExpressions: [
              { textEn: "Sunset's at 6:30, so head out by 2 at the latest. Sign the register at the trailhead, and tell someone where you're going.", textZh: "日落6:30，最晚2点出发。在步道入口签名，告诉别人你们去哪。", actionHint: "记住截止时间", frequency: "common" },
              { textEn: "Don't start later than 2 PM — you don't want to be up there after dark. Sign in at the trailhead so we know you're out there.", textZh: "不要晚于下午2点出发——天黑后你不想还在山上。在步道入口登记这样我们知道你们在外面。", actionHint: "登记后出发", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "We'll sign in. Thanks for all the information — we're excited!",
            textZh: "我们会登记的。谢谢所有这些信息——我们好期待！",
          },
          {
            speaker: "them",
            role: "公园管理员",
            textEn: "Have a great hike! Remember: pack it in, pack it out — take all your trash with you. And if you see any trail damage or wildlife issues, report it to us when you get back. Enjoy the views!",
            textZh: "祝徒步愉快！记住：带进去的都带出来——所有垃圾自己带走。如果看到步道损坏或野生动物问题，回来时跟我们报告。好好欣赏风景！",
            keyPhrases: [
              { en: "pack it in, pack it out", zh: "带进去的都带出来" },
              { en: "trail damage", zh: "步道损坏" },
            ],
            alternativeExpressions: [
              { textEn: "Have a great hike! Remember — whatever you bring in, bring back out. Leave no trace. And report anything weird when you get back.", textZh: "祝徒步愉快！记住——带进去的都带出来。不留痕迹。回来时有什么异常跟我们说。", actionHint: "遵守原则", frequency: "common" },
              { textEn: "Enjoy! Pack out all your trash. If the trail looks damaged anywhere or you spot wildlife acting strange, let us know after.", textZh: "玩得开心！垃圾都带走。如果步道哪里有损坏或看到动物行为异常，回来告诉我们。", actionHint: "注意观察", frequency: "common" },
            ],
          },
        ],
      },

      // --- Flow 2: 徒步途中遇到天气变化 ---
      {
        id: "weather-change",
        titleZh: "遇到天气变化",
        titleEn: "Weather Changes on Trail",
        description: "徒步途中天气突变，与同行者商量对策",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "同行者",
            textEn: "Hey, look at those dark clouds rolling in from the west. The weather forecast didn't mention rain, did it?",
            textZh: "嘿，看那些从西边过来的乌云。天气预报没说要下雨吧？",
            keyPhrases: [
              { en: "dark clouds", zh: "乌云" },
              { en: "rolling in", zh: "涌来" },
              { en: "weather forecast", zh: "天气预报" },
            ],
            alternativeExpressions: [
              { textEn: "Whoa, check out those clouds coming in. Didn't the forecast say it'd be clear?", textZh: "哇，看那些乌云过来了。天气预报不是说晴天吗？", actionHint: "观察天气变化", frequency: "common" },
              { textEn: "Uh oh — those clouds don't look good. The weather's changing fast. Was rain in the forecast?", textZh: "不妙——那些云不太好看。天气变得很快。预报说有雨吗？", actionHint: "判断是否安全", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "The forecast said partly cloudy but no rain. But it looks like a storm is coming. Should we turn back?",
            textZh: "预报说局部多云但不下雨。但看起来暴风雨要来了。我们要不要往回走？",
          },
          {
            speaker: "them",
            role: "同行者",
            textEn: "We're about two-thirds of the way to the summit. If we go back, it's about an hour and a half. If we push forward, we could reach the top in 30 minutes, but we'd be exposed up there if lightning hits.",
            textZh: "我们已经走了大约三分之二到山顶了。如果往回走，大约一个半小时。如果继续走，30分钟能到顶，但到了上面如果打雷就暴露了。",
            keyPhrases: [
              { en: "two-thirds of the way", zh: "三分之二的路程" },
              { en: "push forward", zh: "继续前进" },
              { en: "exposed", zh: "暴露的/无遮挡的" },
              { en: "lightning", zh: "闪电/雷电" },
            ],
            alternativeExpressions: [
              { textEn: "We're about two-thirds up. Going back takes an hour and a half. The summit's only 30 minutes away, but we'd be totally exposed if there's lightning.", textZh: "我们大约走了三分之二。回去要一个半小时。山顶只有30分钟，但有雷电的话完全没遮挡。", actionHint: "做出判断", frequency: "common" },
              { textEn: "We're pretty far up. We could push on to the top in 30 min, or it's about 90 minutes back. The summit's not safe in a thunderstorm though.", textZh: "我们走了挺远了。30分钟能到顶，或者90分钟下山。但雷暴天山顶不安全。", actionHint: "选择安全路线", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I think we should head back. Lightning in the mountains is really dangerous. Is there any shelter along the way down?",
            textZh: "我觉得我们应该往回走。山上的雷电很危险。下山路上有避雨的地方吗？",
          },
          {
            speaker: "them",
            role: "同行者",
            textEn: "There's a ranger cabin about 20 minutes back — we passed it on the way up. Let's head for that. Put on your rain jacket now and pack away anything electronic. If you hear thunder, stay away from tall trees and metal objects.",
            textZh: "回去大约20分钟有个护林员小屋——上来的时候经过的。我们往那儿走。现在穿上雨衣，把电子设备收好。如果听到雷声，远离高大的树和金属物品。",
            keyPhrases: [
              { en: "ranger cabin", zh: "护林员小屋" },
              { en: "shelter", zh: "避雨处" },
              { en: "thunder", zh: "雷声" },
              { en: "stay away from", zh: "远离" },
            ],
            alternativeExpressions: [
              { textEn: "There's a ranger station about 20 minutes back. Let's make for that. Get your rain gear on. And if it starts thundering, stay away from tall trees.", textZh: "回去大约20分钟有个护林站。朝那儿走。穿上雨具。打雷的话远离高大的树。", actionHint: "赶紧出发", frequency: "common" },
              { textEn: "Remember that cabin we passed on the way up? About 20 min back. Let's head there. Rain jacket on, electronics put away.", textZh: "记得上来时经过的小屋吗？回去大约20分钟。往那儿走。穿上雨衣，电子设备收好。", actionHint: "立即行动", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's starting to rain. The trail is getting slippery — we need to be careful.",
            textZh: "开始下雨了。步道变滑了——我们要小心。",
          },
          {
            speaker: "them",
            role: "同行者",
            textEn: "Use your trekking poles and watch your footing. Step on the rocks, not the mud. If the trail floods, we'll have to go off-trail to higher ground. Let's stick together and keep talking.",
            textZh: "用你的登山杖，注意脚下。踩石头，别踩泥。如果步道积水了，我们要离开步道到高处。我们待在一起，保持说话。",
            keyPhrases: [
              { en: "trekking poles", zh: "登山杖" },
              { en: "footing", zh: "脚下/立足点" },
              { en: "floods", zh: "积水/发洪水" },
              { en: "higher ground", zh: "高处" },
            ],
            alternativeExpressions: [
              { textEn: "Careful — it's slick. Step on rocks, not mud. Use your poles. If the trail floods, we go high. Stay close and keep talking to me.", textZh: "小心——很滑。踩石头别踩泥。用登山杖。积水了就往高处走。靠近我保持说话。", actionHint: "注意脚下", frequency: "common" },
              { textEn: "Watch your step — step on the dry rocks. If water starts pooling on the trail, we'll need to find higher ground. Stick together.", textZh: "看脚下——踩干的石头。如果步道开始积水，我们要找高处。待在一起。", actionHint: "小心行走", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I can see the cabin! Let's hurry. The lightning is getting closer.",
            textZh: "我看到小屋了！快走。闪电越来越近了。",
          },
          {
            speaker: "them",
            role: "同行者",
            textEn: "We made it! Let's wait here until the storm passes. These mountain storms usually blow over in 30 to 45 minutes. Good call heading back — the summit would have been really dangerous.",
            textZh: "到了！我们在这里等暴风雨过去。这些山上的暴风雨通常30到45分钟就过了。你说往回走是对的——山顶会很危险。",
            keyPhrases: [
              { en: "storm passes", zh: "暴风雨过去" },
              { en: "blow over", zh: "过去/消散" },
              { en: "good call", zh: "明智的决定" },
            ],
            alternativeExpressions: [
              { textEn: "Made it! These mountain storms usually pass in half an hour. Smart move heading back — the summit would've been sketchy.", textZh: "到了！山上暴风雨通常半小时就过了。往回走是明智的——山顶会很危险。", actionHint: "等暴风雨过去", frequency: "common" },
              { textEn: "We're safe! Let's wait it out here. Good call turning around — being on the summit right now would be crazy dangerous.", textZh: "安全了！在这儿等它过去。你说得对往回走——现在在山顶会超级危险。", actionHint: "耐心等待", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "We can try the summit another day. Safety first! At least we have a good story to tell now.",
            textZh: "改天再冲顶。安全第一！至少我们现在有了一个好故事可以讲。",
          },
        ],
      },
    ],
  },

  // ==================== 画廊/展览 ====================
  {
    id: "entertainment-gallery",
    category: "entertainment",
    titleZh: "画廊/展览",
    titleEn: "Art Gallery & Exhibition",
    description: "参观画廊和艺术展览，了解导览、拍照规则和艺术品购买",
    otherRole: "画廊工作人员/导览员",
    otherRoleIcon: "palette",
    flows: [
      // --- Flow 1: 参观画廊 ---
      {
        id: "gallery-visit",
        titleZh: "参观画廊",
        titleEn: "Visiting a Gallery",
        description: "走进画廊参观，了解展品和购买艺术品",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, is this gallery free to enter, or is there an admission fee?",
            textZh: "你好，这个画廊免费参观吗，还是要买门票？",
          },
          {
            speaker: "them",
            role: "画廊工作人员",
            textEn: "The permanent collection is free. We have a special exhibition on contemporary photography right now — that's $15 for adults. It's really worth seeing. Would you like a ticket?",
            textZh: "常设展是免费的。我们现在有一个当代摄影特展——成人15美元。非常值得看。要买票吗？",
            keyPhrases: [
              { en: "permanent collection", zh: "常设展/永久收藏" },
              { en: "special exhibition", zh: "特展" },
              { en: "contemporary photography", zh: "当代摄影" },
              { en: "admission fee", zh: "门票/入场费" },
            ],
            alternativeExpressions: [
              { textEn: "The main collection is free. We've got a photography exhibition on right now — that's $15 if you're interested.", textZh: "主展区免费。我们现在有个摄影展——感兴趣的话15美元。", actionHint: "决定是否看特展", frequency: "common" },
              { textEn: "No charge for the permanent stuff. There's a special photo exhibit for $15 though — really good, I'd recommend it.", textZh: "常设展不收费。不过有个15美元的摄影特展——很好看，推荐。", actionHint: "买特展票", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I'll take one. Is photography allowed inside?",
            textZh: "好的，买一张。里面可以拍照吗？",
          },
          {
            speaker: "them",
            role: "画廊工作人员",
            textEn: "Photos without flash are fine in the permanent collection. But in the special exhibition, no photography is allowed — it's in the artists' contracts. We have a gift shop with exhibition catalogs and postcards if you want to remember the works.",
            textZh: "常设展区可以无闪光灯拍照。但特展区不允许拍照——这是和艺术家的合同约定。礼品店有展览画册和明信片，如果你想记住这些作品的话。",
            keyPhrases: [
              { en: "without flash", zh: "无闪光灯" },
              { en: "no photography allowed", zh: "不允许拍照" },
              { en: "exhibition catalogs", zh: "展览画册" },
            ],
            alternativeExpressions: [
              { textEn: "No-flash photos in the permanent collection, but no photos at all in the special exhibit — artist contracts. The gift shop has catalogs if you want to remember anything.", textZh: "常设展可以无闪光灯拍照，但特展完全不能拍——艺术家合同规定。礼品店有画册如果你想记住什么。", actionHint: "遵守拍照规则", frequency: "common" },
              { textEn: "Photos without flash are fine in the regular galleries. The special exhibition is strictly no photography. We sell great postcards in the shop though.", textZh: "普通展厅可以无闪光灯拍照。特展严格禁止拍照。不过我们店里有很好的明信片。", actionHint: "去礼品店看看", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do you have guided tours? I'd love to learn more about the art.",
            textZh: "有导览吗？我想更多了解这些艺术品。",
          },
          {
            speaker: "them",
            role: "画廊工作人员",
            textEn: "We have a free guided tour at 2 PM — it covers the highlights of both the permanent collection and the special exhibition. About 45 minutes. Or you can use our audio guide — $5, available in eight languages including Mandarin Chinese.",
            textZh: "下午2点有一个免费导览——涵盖常设展和特展的精华。大约45分钟。或者你可以用我们的语音导览——5美元，有八种语言包括普通话。",
            keyPhrases: [
              { en: "guided tour", zh: "导览" },
              { en: "highlights", zh: "精华/亮点" },
              { en: "audio guide", zh: "语音导览" },
            ],
            alternativeExpressions: [
              { textEn: "We do a free tour at 2 PM — about 45 minutes, covers the best stuff. Or grab the audio guide for $5 — available in Mandarin.", textZh: "2点有免费导览——大约45分钟，涵盖精华。或者拿语音导览5美元——有普通话。", actionHint: "选择导览方式", frequency: "common" },
              { textEn: "Yeah! There's a docent tour at 2 that's free, or the audio guide is $5 and comes in eight languages including Chinese.", textZh: "有的！2点有免费讲解团，或者语音导览5美元有八种语言包括中文。", actionHint: "决定参加哪个", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll do the 2 PM tour. Also, I noticed some of the paintings have price tags. Are those for sale?",
            textZh: "我参加2点的导览。另外，我注意到有些画有价格标签。那些是卖的吗？",
          },
          {
            speaker: "them",
            role: "画廊工作人员",
            textEn: "Yes! Many of our works are available for purchase. The gallery takes a commission, and the rest goes directly to the artist. If you're interested in a piece, I can introduce you to our sales consultant. We also handle international shipping.",
            textZh: "是的！我们很多作品可以购买。画廊收取佣金，其余直接归艺术家。如果你对某件作品感兴趣，我可以介绍我们的销售顾问给你。我们也办理国际运输。",
            keyPhrases: [
              { en: "available for purchase", zh: "可以购买" },
              { en: "commission", zh: "佣金" },
              { en: "sales consultant", zh: "销售顾问" },
              { en: "international shipping", zh: "国际运输" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, a lot of what's on the walls is for sale! The gallery takes a cut and the artist gets the rest. We ship internationally too.", textZh: "是的，墙上很多作品都卖！画廊抽成，其余归艺术家。我们也可以国际快递。", actionHint: "看中了就问", frequency: "common" },
              { textEn: "Many of them are! If something catches your eye, I can connect you with our sales team. We handle shipping worldwide.", textZh: "很多都在卖！看中了什么我可以介绍我们的销售团队。全球快递我们都能安排。", actionHint: "找销售了解", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's interesting! I'll look around first and maybe ask about a piece after the tour. Thanks!",
            textZh: "有意思！我先看看，导览结束后可能会问某件作品。谢谢！",
          },
          {
            speaker: "them",
            role: "画廊工作人员",
            textEn: "Take your time. And please don't touch the artworks — keep at least one foot of distance. Enjoy your visit!",
            textZh: "慢慢看。请不要触碰艺术品——保持至少一英尺的距离。祝参观愉快！",
            keyPhrases: [
              { en: "don't touch the artworks", zh: "不要触碰艺术品" },
              { en: "keep distance", zh: "保持距离" },
            ],
            alternativeExpressions: [
              { textEn: "No rush — look around as long as you like. Just please don't get too close to the pieces. Enjoy!", textZh: "不急——随便看多久都行。只是请不要靠作品太近。祝参观愉快！", actionHint: "保持距离欣赏", frequency: "common" },
              { textEn: "Take your time! Just a reminder — keep about a foot from the artworks and no touching. Have a great visit!", textZh: "慢慢看！提醒一下——离作品保持一英尺距离不要触碰。祝参观愉快！", actionHint: "注意距离", frequency: "common" },
            ],
          },
        ],
      },

      // --- Flow 2: 导览互动 ---
      {
        id: "guided-tour",
        titleZh: "参加导览",
        titleEn: "Joining a Guided Tour",
        description: "参加画廊导览，与导览员互动提问",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "导览员",
            textEn: "Welcome to our guided tour! We'll be exploring six key works today. Let's start with this large oil painting from 1923. Notice the bold use of color and the way the light falls on the subject's face. Any first impressions?",
            textZh: "欢迎参加导览！今天我们会探索六件重要作品。先从这幅1923年的大幅油画开始。注意大胆的色彩运用和光线落在人物脸上的方式。第一印象是什么？",
            keyPhrases: [
              { en: "oil painting", zh: "油画" },
              { en: "bold use of color", zh: "大胆的色彩运用" },
              { en: "first impressions", zh: "第一印象" },
            ],
            alternativeExpressions: [
              { textEn: "Alright, welcome everyone! Six key pieces today. Starting with this beauty from 1923. Look at those colors — what's your first reaction?", textZh: "好的，欢迎大家！今天六件重要作品。先从这幅1923年的美作开始。看看那些色彩——你的第一反应是什么？", actionHint: "分享你的感受", frequency: "common" },
              { textEn: "Thanks for joining! We'll look at six works. This oil painting from 1923 kicks us off. Notice how the light hits the face. What do you guys think?", textZh: "感谢参加！我们看六件作品。先从1923年的这幅油画开始。注意光线打在脸上的方式。你们觉得怎么样？", actionHint: "大胆发表意见", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "The colors are very striking — almost like they're glowing. What style is this? Is it Impressionism?",
            textZh: "颜色非常醒目——几乎像在发光。这是什么风格？是印象派吗？",
          },
          {
            speaker: "them",
            role: "导览员",
            textEn: "Great observation! It's actually Post-Impressionism — the artist was influenced by Van Gogh and Cézanne. While Impressionism focused on capturing light, Post-Impressionists like this artist added more structure and emotional intensity. See how the brushstrokes are thicker and more deliberate?",
            textZh: "观察得很好！其实是后印象派——这位艺术家受了梵高和塞尚的影响。印象派注重捕捉光线，而像这位艺术家这样的后印象派增加了更多结构和情感张力。看到笔触更粗更有意识吗？",
            keyPhrases: [
              { en: "Post-Impressionism", zh: "后印象派" },
              { en: "brushstrokes", zh: "笔触" },
              { en: "emotional intensity", zh: "情感张力" },
              { en: "deliberate", zh: "有意识的/刻意的" },
            ],
            alternativeExpressions: [
              { textEn: "Good eye! It's actually Post-Impressionist — think Van Gogh, Cézanne. See how the brushstrokes are thicker and more intentional? More emotional than regular Impressionism.", textZh: "眼光不错！其实是后印象派——想想梵高、塞尚。看到笔触更粗更有意识吗？比普通印象派更有情感。", actionHint: "仔细看笔触", frequency: "common" },
              { textEn: "Close! It's Post-Impressionism. While Impressionists captured light, these artists added more structure and feeling. Notice how thick those brushstrokes are.", textZh: "接近了！是后印象派。印象派捕捉光线，这些艺术家加了更多结构和情感。注意那些笔触有多厚。", actionHint: "比较两种风格", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Fascinating. How did this painting end up in this gallery?",
            textZh: "太有意思了。这幅画是怎么到这个画廊的？",
          },
          {
            speaker: "them",
            role: "导览员",
            textEn: "It was donated by a private collector in 1985. It had passed through several hands since the artist's death and was actually found in an attic in Paris. The gallery spent two years restoring it — you can see how vibrant the colors are now compared to the 'before' photo in the catalog.",
            textZh: "1985年由一位私人收藏家捐赠的。自从艺术家去世后经过了好几手，实际上是在巴黎一个阁楼里发现的。画廊花了两年修复它——你可以看画册里'修复前'的照片对比，现在颜色多鲜艳。",
            keyPhrases: [
              { en: "donated", zh: "捐赠" },
              { en: "private collector", zh: "私人收藏家" },
              { en: "restoring", zh: "修复" },
              { en: "attic", zh: "阁楼" },
            ],
            alternativeExpressions: [
              { textEn: "Great story — it was found in an attic in Paris and donated in '85. The gallery spent two years restoring it. Compare the 'before' photo in the catalog!", textZh: "很好的故事——在巴黎一个阁楼发现的，85年捐赠。画廊花了两年修复。看画册里修复前的对比！", actionHint: "看画册对比", frequency: "common" },
              { textEn: "It was donated by a collector. Changed hands many times after the artist died — even sat in a Parisian attic for decades. Took two years to restore.", textZh: "是一个收藏家捐赠的。艺术家死后经手多次——甚至在巴黎阁楼放了几十年。花了两年修复。", actionHint: "了解作品背景", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "What an incredible story. Can I buy prints of this painting in the gift shop?",
            textZh: "太不可思议了。礼品店能买到这幅画的复制品吗？",
          },
          {
            speaker: "them",
            role: "导览员",
            textEn: "Yes, we have high-quality prints in various sizes, as well as posters. Let's move on to the next piece — a sculpture that'll really surprise you. Follow me to the east wing.",
            textZh: "有的，我们有各种尺寸的高质量复制品和海报。我们去看下一件——一个会让你惊喜的雕塑。跟我到东翼。",
            keyPhrases: [
              { en: "prints", zh: "复制品/印刷品" },
              { en: "sculpture", zh: "雕塑" },
              { en: "east wing", zh: "东翼" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, the shop has prints in all sizes plus posters. Alright, let's head to the east wing — the next piece is a sculpture that'll blow your mind.", textZh: "有的，店里各种尺寸的复制品和海报。好了，去东翼——下一件是一个会让你震惊的雕塑。", actionHint: "跟着走", frequency: "common" },
              { textEn: "Gift shop has great prints. OK, follow me — next up is a sculpture in the east wing. You're gonna love this one.", textZh: "礼品店有很好的复制品。好，跟我来——下一个是东翼的雕塑。你们会喜欢的。", actionHint: "前往下一件", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "This tour is wonderful. Do you do these every day?",
            textZh: "这个导览太棒了。每天都有吗？",
          },
          {
            speaker: "them",
            role: "导览员",
            textEn: "Tuesday through Saturday at 11 AM and 2 PM. We also have special evening tours on Fridays with wine and cheese — those are $35 but they sell out fast. I recommend booking online in advance.",
            textZh: "周二到周六的上午11点和下午2点。我们周五还有特别的晚间导览配红酒和奶酪——35美元，但很快就卖完。建议提前在线订票。",
            keyPhrases: [
              { en: "evening tours", zh: "晚间导览" },
              { en: "sell out fast", zh: "很快卖完" },
              { en: "booking online in advance", zh: "提前在线订票" },
            ],
            alternativeExpressions: [
              { textEn: "Tuesday through Saturday, 11 and 2. We also do special wine-and-cheese tours on Friday nights — $35, book online early because they sell out fast.", textZh: "周二到周六，11点和2点。周五晚上还有红酒奶酪特别导览——35美元，网上提前订因为很快卖完。", actionHint: "提前订票", frequency: "common" },
              { textEn: "Most days at 11 AM and 2 PM. Oh, and the Friday evening tours are amazing — wine, cheese, art. $35 but they go quick.", textZh: "大多数天11点和2点。对了，周五晚间导览超棒——红酒、奶酪、艺术。35美元但很快卖完。", actionHint: "考虑周五来", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 烹饪课 ====================
  {
    id: "entertainment-cooking",
    category: "entertainment",
    titleZh: "烹饪课",
    titleEn: "Cooking Class",
    description: "参加当地烹饪课，学习当地菜的做法、食材和烹饪技巧",
    otherRole: "厨师/烹饪老师",
    otherRoleIcon: "chef-hat",
    flows: [
      // --- Flow 1: 参加烹饪课 ---
      {
        id: "cooking-lesson",
        titleZh: "上烹饪课",
        titleEn: "Taking a Cooking Lesson",
        description: "参加烹饪课学做当地菜，了解食材和做法",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I booked the Italian cooking class for today. I'm Wang.",
            textZh: "你好，我预约了今天的意大利烹饪课。我叫王。",
          },
          {
            speaker: "them",
            role: "烹饪老师",
            textEn: "Welcome, Wang! I'm Chef Marco. Today we're making fresh pasta from scratch, a classic tomato basil sauce, and tiramisu for dessert. Have you cooked Italian food before?",
            textZh: "欢迎，王！我是主厨Marco。今天我们要从头做新鲜意面、经典番茄罗勒酱和提拉米苏甜点。你以前做过意大利菜吗？",
            keyPhrases: [
              { en: "from scratch", zh: "从头做/从零开始" },
              { en: "fresh pasta", zh: "新鲜意面" },
              { en: "basil", zh: "罗勒" },
              { en: "tiramisu", zh: "提拉米苏" },
            ],
            alternativeExpressions: [
              { textEn: "Welcome! I'm Chef Marco. Today's menu: homemade pasta, tomato basil sauce, and tiramisu. Ever made Italian food before?", textZh: "欢迎！我是主厨Marco。今天的菜单：手工意面、番茄罗勒酱和提拉米苏。以前做过意大利菜吗？", actionHint: "介绍自己的经验", frequency: "common" },
              { textEn: "Hey, Wang! Marco here. We're making everything from scratch today — fresh pasta, sauce, tiramisu. Have you cooked Italian before?", textZh: "嘿，王！我是Marco。今天全部从零做——新鲜意面、酱汁、提拉米苏。做过意大利菜吗？", actionHint: "说说你的经验", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Just simple spaghetti at home. I'm excited to learn the real thing! Do I need any cooking experience?",
            textZh: "只在家做过简单的意面。好期待学正宗的做法！需要烹饪经验吗？",
          },
          {
            speaker: "them",
            role: "烹饪老师",
            textEn: "Not at all — this class is designed for all levels. First, let me show you our ingredients. The key to great Italian cooking is simple, high-quality ingredients: tipo 00 flour, farm-fresh eggs, San Marzano tomatoes, and fresh basil from our garden.",
            textZh: "完全不需要——这节课适合所有水平。首先让我介绍我们的食材。好的意大利菜关键是简单、高质量的食材：00号面粉、农场新鲜鸡蛋、圣马尔扎诺番茄和我们花园里的新鲜罗勒。",
            keyPhrases: [
              { en: "ingredients", zh: "食材" },
              { en: "tipo 00 flour", zh: "00号面粉" },
              { en: "farm-fresh", zh: "农场新鲜的" },
              { en: "high-quality ingredients", zh: "高质量食材" },
            ],
            alternativeExpressions: [
              { textEn: "No experience needed — this class works for everyone. First up, let me show you the ingredients. Good Italian food is all about simple, quality stuff.", textZh: "不需要经验——这节课适合所有人。先看食材。好的意大利菜就是简单高质量的食材。", actionHint: "看食材介绍", frequency: "common" },
              { textEn: "Don't worry, all levels welcome! OK, here's the secret to Italian cooking — amazing ingredients. Check out this flour, these eggs, these tomatoes.", textZh: "别担心，所有水平都欢迎！好了，意大利菜的秘诀——好食材。看看这面粉、鸡蛋、番茄。", actionHint: "了解食材", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "By the way, I'm allergic to shellfish. Will that be an issue with anything we're making today?",
            textZh: "顺便说一下，我对贝壳类过敏。今天做的菜有问题吗？",
          },
          {
            speaker: "them",
            role: "烹饪老师",
            textEn: "No shellfish in today's menu, so you're perfectly safe. Thanks for letting me know — that's always important to mention in a cooking class. Now, let's start by making the pasta dough. Create a well in the flour and crack the eggs in the center.",
            textZh: "今天的菜单没有贝壳类，所以完全安全。谢谢你告诉我——在烹饪课上这一点很重要。现在开始做面团。在面粉中间挖一个坑，把鸡蛋打在中间。",
            keyPhrases: [
              { en: "shellfish", zh: "贝壳类" },
              { en: "pasta dough", zh: "面团" },
              { en: "create a well", zh: "挖一个坑" },
              { en: "crack the eggs", zh: "打鸡蛋" },
            ],
            alternativeExpressions: [
              { textEn: "Nope, no shellfish today — you're totally safe. Thanks for telling me. Now, let's make the dough — make a little well in the flour and crack the eggs right in.", textZh: "今天没有贝壳类——完全安全。谢谢告诉我。现在做面团——在面粉里挖个坑把鸡蛋打进去。", actionHint: "开始动手做", frequency: "common" },
              { textEn: "Good to know — today's all pasta and veggies, no shellfish at all. Always tell your cooking teacher about allergies. OK, dough time — flour well, eggs in the middle.", textZh: "了解了——今天全是意面和蔬菜，完全没有贝壳类。过敏的事一定要跟烹饪老师说。好了，做面团——面粉挖坑，鸡蛋放中间。", actionHint: "跟着做", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Like this? How long do I knead the dough?",
            textZh: "这样吗？面团要揉多久？",
          },
          {
            speaker: "them",
            role: "烹饪老师",
            textEn: "About 10 minutes until it's smooth and elastic — you'll feel the difference. Then we wrap it in plastic and let it rest for 30 minutes. While it rests, we'll make the sauce. The secret is to cook the garlic slowly in olive oil — don't let it burn!",
            textZh: "大约10分钟，直到它变得光滑有弹性——你会感觉到区别。然后用保鲜膜包好静置30分钟。趁面团静置的时候我们做酱汁。秘诀是用橄榄油慢慢煎大蒜——别烧焦了！",
            keyPhrases: [
              { en: "knead", zh: "揉" },
              { en: "smooth and elastic", zh: "光滑有弹性" },
              { en: "let it rest", zh: "静置" },
              { en: "olive oil", zh: "橄榄油" },
              { en: "garlic", zh: "大蒜" },
            ],
            alternativeExpressions: [
              { textEn: "About 10 minutes — you'll feel it get smooth and springy. Then wrap it up and let it rest. While we wait, we'll do the sauce. The trick? Cook the garlic slow in olive oil.", textZh: "大约10分钟——你会感觉它变光滑有弹性。然后包好静置。等的时候做酱汁。诀窍？橄榄油里慢慢煎大蒜。", actionHint: "跟着节奏来", frequency: "common" },
              { textEn: "Keep kneading till it's smooth and elastic — about 10 min. Then it rests. In the meantime, sauce time. Rule number one: never burn the garlic.", textZh: "一直揉到光滑有弹性——大约10分钟。然后静置。趁这时候做酱汁。第一条规则：绝对不要烧焦大蒜。", actionHint: "注意火候", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "This smells incredible! Can I get the recipes to take home?",
            textZh: "太香了！我能把食谱带回去吗？",
          },
          {
            speaker: "them",
            role: "烹饪老师",
            textEn: "Absolutely! I'll email you the full recipes with photos. The best part is coming up — rolling the pasta through the machine and cutting it. Then we cook, eat, and celebrate with a glass of wine!",
            textZh: "当然！我会把完整的带图片的食谱发邮件给你。最精彩的部分来了——用压面机压面和切面。然后煮、吃，再配一杯红酒庆祝！",
            keyPhrases: [
              { en: "recipes", zh: "食谱" },
              { en: "pasta machine", zh: "压面机" },
              { en: "rolling the pasta", zh: "压面" },
            ],
            alternativeExpressions: [
              { textEn: "Of course — I'll email everything with photos. Now for the fun part: rolling and cutting the pasta. Then we eat and open a bottle of wine!", textZh: "当然——我会把带照片的食谱发邮件给你。现在是最好玩的部分：压面和切面。然后吃饭配红酒！", actionHint: "期待吃成果", frequency: "common" },
              { textEn: "I'll send you the full recipes after. OK, best part coming up — the pasta machine! Then we cook it, eat it, and celebrate with wine.", textZh: "课后我把完整食谱发你。好了，最精彩的来了——压面机！然后煮、吃，配红酒庆祝。", actionHint: "动手压面", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "This is the best experience of my trip! I can't wait to make this at home for my family.",
            textZh: "这是我旅途中最棒的体验！迫不及待回家做给家人吃。",
          },
        ],
      },

      // --- Flow 2: 市场采购+烹饪 ---
      {
        id: "market-cooking",
        titleZh: "市场采购+烹饪",
        titleEn: "Market Visit & Cook",
        description: "先去当地市场买食材，然后一起做菜",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "烹饪老师",
            textEn: "Before we cook, we're going to the local farmers' market to pick out our ingredients. This is how real home cooking starts — with the freshest produce. Follow me!",
            textZh: "做菜之前，我们先去当地农贸市场挑选食材。真正的家庭烹饪就是这样开始的——用最新鲜的食材。跟我来！",
            keyPhrases: [
              { en: "farmers' market", zh: "农贸市场" },
              { en: "pick out", zh: "挑选" },
              { en: "freshest produce", zh: "最新鲜的食材/农产品" },
            ],
            alternativeExpressions: [
              { textEn: "First stop — the local farmers' market. This is how real Italians cook: start with the best, freshest stuff. Come on!", textZh: "第一站——当地农贸市场。这就是真正的意大利人做菜的方式：从最好最新鲜的食材开始。走！", actionHint: "跟着去市场", frequency: "common" },
              { textEn: "Before we hit the kitchen, we're going shopping! The market has the freshest ingredients — that's where great cooking starts.", textZh: "进厨房之前我们先去采购！市场有最新鲜的食材——好的烹饪从这里开始。", actionHint: "一起去采购", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "This market is amazing! How do I know which tomatoes are the best?",
            textZh: "这个市场太棒了！怎么知道哪些番茄是最好的？",
          },
          {
            speaker: "them",
            role: "烹饪老师",
            textEn: "Look for ones that are deep red, firm but not hard, and have a nice earthy smell at the stem. Here, smell this one — see? That's a tomato that's been ripened on the vine, not in a warehouse. Buy these from this vendor — she has the best in the market.",
            textZh: "找深红色的，结实但不硬的，茎部有好闻的泥土味的。来，闻闻这个——感觉到了吗？这是在藤上成熟的，不是在仓库里催熟的。从这个摊主这里买——她的番茄是市场上最好的。",
            keyPhrases: [
              { en: "firm but not hard", zh: "结实但不硬" },
              { en: "earthy smell", zh: "泥土味" },
              { en: "ripened on the vine", zh: "在藤上成熟的" },
              { en: "vendor", zh: "摊主/商贩" },
            ],
            alternativeExpressions: [
              { textEn: "Look for deep red, firm but not hard, with an earthy smell at the stem. Smell this one — that's vine-ripened, not warehouse. Get these, this vendor's the best.", textZh: "找深红色的，结实但不硬，茎部有泥土味的。闻闻这个——是藤上成熟的，不是仓库催的。从这个摊买，她最好。", actionHint: "学会挑选", frequency: "common" },
              { textEn: "Give it a sniff right here at the stem. If it smells earthy and sweet, it's a good one. These are vine-ripened — totally different from supermarket tomatoes.", textZh: "闻闻茎部这里。如果有泥土香和甜味就是好的。这些是在藤上成熟的——跟超市番茄完全不同。", actionHint: "用鼻子挑食材", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I never thought about smelling tomatoes! What else do we need?",
            textZh: "我从没想过闻番茄！我们还需要什么？",
          },
          {
            speaker: "them",
            role: "烹饪老师",
            textEn: "We need fresh herbs — basil and oregano. Some good olive oil — look for cold-pressed extra virgin. Mozzarella from the dairy stand over there — it was made this morning. And some locally cured pancetta for our carbonara.",
            textZh: "我们需要新鲜香草——罗勒和牛至。好的橄榄油——选冷压初榨的。那边乳制品摊的马苏里拉奶酪——今天早上做的。还有本地腌制的培根做卡博纳拉。",
            keyPhrases: [
              { en: "fresh herbs", zh: "新鲜香草" },
              { en: "oregano", zh: "牛至" },
              { en: "cold-pressed extra virgin", zh: "冷压初榨" },
              { en: "mozzarella", zh: "马苏里拉奶酪" },
              { en: "pancetta", zh: "意式培根" },
              { en: "carbonara", zh: "卡博纳拉" },
            ],
            alternativeExpressions: [
              { textEn: "Fresh herbs — basil and oregano. Cold-pressed olive oil. Fresh mozzarella from that dairy stand — made this morning. And pancetta for the carbonara.", textZh: "新鲜香草——罗勒和牛至。冷压橄榄油。那个乳品摊的新鲜马苏里拉——今天早上做的。还有培根做卡博纳拉。", actionHint: "逐个采购", frequency: "common" },
              { textEn: "We need basil, oregano, a good extra virgin olive oil, some fresh mozzarella — see that dairy stand? — and pancetta for our carbonara.", textZh: "我们需要罗勒、牛至、好的初榨橄榄油、新鲜马苏里拉——看到那个乳品摊了吗？——还有培根做卡博纳拉。", actionHint: "记住食材清单", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I taste the olive oil before buying? And how do I ask the vendor for a sample in English?",
            textZh: "我可以先尝一下橄榄油再买吗？英语怎么跟摊主要试吃？",
          },
          {
            speaker: "them",
            role: "烹饪老师",
            textEn: "Just say: 'May I try a sample?' or 'Could I taste this before buying?' Most vendors are happy to let you. Good olive oil should taste a little peppery at the back of your throat — that's the polyphenols, which means it's fresh and high quality.",
            textZh: "就说：'May I try a sample?' 或者 'Could I taste this before buying?' 大多数摊主都很乐意。好的橄榄油在喉咙后面应该有一点辣味——那是多酚，说明它新鲜且高质量。",
            keyPhrases: [
              { en: "May I try a sample", zh: "我可以尝一下吗" },
              { en: "peppery", zh: "辣味的/胡椒味的" },
              { en: "polyphenols", zh: "多酚" },
            ],
            culturalNote: "在欧洲的农贸市场，试吃（sampling）是非常正常的。大胆地请求试吃，这也是尊重手工食品传统的表现。",
            alternativeExpressions: [
              { textEn: "Just say 'May I try a sample?' — they love that. Good olive oil should tickle the back of your throat a little. That peppery feeling means it's fresh.", textZh: "就说'May I try a sample?'——他们很乐意。好的橄榄油喉咙后面会有点辣。那种辣味说明很新鲜。", actionHint: "大胆试吃", frequency: "common" },
              { textEn: "Absolutely — just ask 'Could I taste this first?' Vendors expect it. Look for a peppery kick at the back of your throat — that means quality.", textZh: "当然——就说'Could I taste this first?'摊主都习惯了。注意喉咙后面有没有辣味——那说明品质好。", actionHint: "学会品油", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "This one is delicious! Alright, I think we have everything. Let's go cook!",
            textZh: "这个好好喝！好了，我觉得东西齐了。走，做菜去！",
          },
          {
            speaker: "them",
            role: "烹饪老师",
            textEn: "That's the spirit! Back to the kitchen. Today you'll learn that great cooking isn't about complicated techniques — it's about starting with beautiful ingredients and treating them simply. Let's make something delicious!",
            textZh: "就是这个劲头！回厨房。今天你会学到好的烹饪不是复杂的技巧——而是从好食材开始，简单处理。我们来做美味的菜！",
            keyPhrases: [
              { en: "that's the spirit", zh: "就是这个劲头" },
              { en: "complicated techniques", zh: "复杂的技巧" },
              { en: "treating them simply", zh: "简单处理" },
            ],
            alternativeExpressions: [
              { textEn: "Love the energy! Back to the kitchen. The whole point is: start with beautiful ingredients and don't overcomplicate things. Let's cook!", textZh: "喜欢你的劲头！回厨房。核心就是：从好食材开始，不要过度复杂化。开始做菜！", actionHint: "回厨房动手", frequency: "common" },
              { textEn: "That's the spirit! Great cooking isn't about fancy techniques. It's about letting the ingredients shine. Let's make something amazing!", textZh: "就是这个劲头！好的烹饪不是靠花哨技巧。而是让食材本身发光。做点美味的吧！", actionHint: "享受烹饪", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I love this approach. Simple ingredients, cooked with love — that's the best food anywhere in the world.",
            textZh: "我喜欢这种理念。简单的食材，用心烹饪——这就是世界上最好的食物。",
          },
        ],
      },
    ],
  },

  // ==================== 密室逃脱 ====================
  {
    id: "entertainment-13",
    category: "entertainment",
    titleZh: "密室逃脱",
    titleEn: "Escape Room",
    description: "在国外体验密室逃脱，包括预约、规则说明、游戏过程中的沟通",
    otherRole: "密室逃脱工作人员/游戏伙伴",
    otherRoleIcon: "lock",
    flows: [
      // --- Flow 1: 预约与规则说明 ---
      {
        id: "booking-rules",
        titleZh: "预约与规则说明",
        titleEn: "Booking & Rules Briefing",
        description: "到店预约密室、选择主题、听取游戏规则",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "前台",
            textEn: "Welcome to MindTrap Escape Rooms! Have you guys played escape rooms before, or is this your first time?",
            textZh: "欢迎来到MindTrap密室逃脱！你们以前玩过密室逃脱吗，还是第一次？",
            keyPhrases: [
              { en: "escape room", zh: "密室逃脱" },
              { en: "first time", zh: "第一次" },
            ],
            alternativeExpressions: [
              { textEn: "Hey! First-timers or escape room veterans?", textZh: "嘿！新手还是老手？", actionHint: "说明经验水平", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "First time for all four of us! We're really excited. What themes do you have available right now?",
            textZh: "我们四个都是第一次！非常期待。现在有哪些主题可以选？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Awesome! We have three rooms open today. 'The Haunted Library' is our beginner room — perfect for first-timers. 'Bank Heist' is intermediate, and 'Area 51' is our hardest room. Each game is 60 minutes. Which one sounds fun?",
            textZh: "太好了！今天有三个房间开放。'闹鬼图书馆'是新手房——适合第一次玩的。'银行抢劫'是中级，'51区'是最难的。每局60分钟。哪个听起来有趣？",
            keyPhrases: [
              { en: "beginner room", zh: "新手房" },
              { en: "intermediate", zh: "中级" },
              { en: "hardest room", zh: "最难的房间" },
              { en: "60 minutes", zh: "60分钟" },
            ],
            vocabNotes: {
              "heist": { meaningInContext: "在这句话里表示：精心策划的抢劫/盗窃行动（游戏主题）", similarUsage: "类似用法：Have you seen the movie \"The Italian Job\"? Classic heist film.（看过《意大利任务》吗？经典抢劫片）" },
            },
            alternativeExpressions: [
              { textEn: "We've got three rooms today. Haunted Library is beginner-friendly. Bank Heist is mid-level. Area 51 is for hardcore players. All 60 minutes.", textZh: "今天有三个房间。闹鬼图书馆适合新手。银行抢劫中级。51区给硬核玩家。都是60分钟。", actionHint: "选择难度", frequency: "common" },
              { textEn: "Three rooms open! For first-timers, I'd go with the Haunted Library — it's our easiest. 60 minutes each. What sounds fun?", textZh: "三个房间开放！第一次玩的话推荐闹鬼图书馆——最简单的。每局60分钟。哪个感兴趣？", actionHint: "选新手房", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "The Haunted Library sounds good for beginners. How much is it per person?",
            textZh: "'闹鬼图书馆'听起来适合新手。每人多少钱？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "It's $32 per person. For a group of four, I can offer you a group discount — $110 total instead of $128. You'll have the room to yourselves.",
            textZh: "每人32美元。四个人的话我给你们团体折扣——总共110美元，不是128。房间只有你们。",
            keyPhrases: [
              { en: "per person", zh: "每人" },
              { en: "group discount", zh: "团体折扣" },
              { en: "to yourselves", zh: "只有你们/专属" },
            ],
            alternativeExpressions: [
              { textEn: "$32 a person, but for four I'll do $110 total — saves you 18 bucks. The room's all yours.", textZh: "每人32，四个人的话总共110——省18块。房间只有你们。", actionHint: "接受折扣", frequency: "common" },
              { textEn: "Normally $32 each but I can do a group rate — $110 for all four of you. Private room, just your team.", textZh: "正常每人32但可以给团体价——四个人110。私人房间，只有你们的团队。", actionHint: "确认购买", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, we'll take it! Do we need to sign anything?",
            textZh: "好的，我们要了！需要签什么吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, just a quick waiver on this tablet. It basically says you won't damage the props and you understand nothing in the room will actually hurt you. Once everyone signs, I'll brief you on the rules.",
            textZh: "是的，在这个平板上签个简单的免责声明。基本内容是你不会损坏道具，而且你了解房间里不会真的伤害你。大家都签完后，我给你们讲规则。",
            keyPhrases: [
              { en: "waiver", zh: "免责声明" },
              { en: "props", zh: "道具" },
              { en: "brief you on", zh: "给你们讲" },
            ],
            vocabNotes: {
              "waiver": { meaningInContext: "在这句话里表示：免责声明/责任豁免书，参加活动前签的文件", similarUsage: "类似用法：You'll need to sign a liability waiver before skydiving.（跳伞前需要签免责声明）" },
              "props": { meaningInContext: "在这句话里表示：游戏中的道具和装饰物", similarUsage: "类似用法：The props in this room are so realistic!（这个房间的道具太逼真了！）" },
            },
            alternativeExpressions: [
              { textEn: "Just a quick waiver on the tablet — standard stuff. Don't break the props, and nothing's gonna hurt you. Once you all sign, I'll go over the rules.", textZh: "在平板上签个简单声明——标准流程。别弄坏道具，不会受伤。大家签完我讲规则。", actionHint: "签字", frequency: "common" },
              { textEn: "Quick signature on this — just a liability waiver. Basically, be nice to the props. Then I'll brief you on how it works.", textZh: "在这上面签个字——就是免责声明。基本上就是爱护道具。然后我给你们讲怎么玩。", actionHint: "快速签完", frequency: "common" },
            ],
          },
          {
            speaker: "them",
            role: "游戏主持",
            textEn: "Alright, here are the ground rules. You have 60 minutes. Everything you need is in the room — no need to force anything open or climb on furniture. If you get stuck, you can ask for up to three hints through the intercom on the wall. Any questions before we lock you in?",
            textZh: "好了，基本规则来了。你们有60分钟。需要的东西都在房间里——不需要强行打开任何东西或爬家具。如果卡住了，可以通过墙上的对讲机要求最多三次提示。在我们把你们锁进去之前有问题吗？",
            keyPhrases: [
              { en: "ground rules", zh: "基本规则" },
              { en: "force anything open", zh: "强行打开" },
              { en: "get stuck", zh: "卡住" },
              { en: "hints", zh: "提示" },
              { en: "intercom", zh: "对讲机" },
              { en: "lock you in", zh: "把你们锁进去" },
            ],
            vocabNotes: {
              "ground rules": { meaningInContext: "在这句话里表示：基本规则/底线规定，必须遵守的", similarUsage: "类似用法：Let me set some ground rules for the meeting.（让我先定下会议的基本规则）" },
            },
            alternativeExpressions: [
              { textEn: "OK, quick rules: 60 minutes on the clock. Don't force anything open. If you're stuck, hit the intercom for a hint — you get three. Ready to go in?", textZh: "好，简单规则：60分钟倒计时。别强行打开任何东西。卡住了按对讲机要提示——有三次机会。准备好进去了吗？", actionHint: "准备开始", frequency: "common" },
              { textEn: "Here's the deal: you've got 60 minutes. Everything you need is in the room. Don't climb or break stuff. Need a hint? Use the walkie on the wall. Three max. Let's do this!", textZh: "规则来了：你们有60分钟。需要的都在房间里。别爬也别弄坏。要提示？用墙上的对讲机。最多三次。开始吧！", actionHint: "记住提示次数", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "If we really can't figure it out, can we leave the room early?",
            textZh: "如果我们真的解不出来，可以提前离开吗？",
          },
          {
            speaker: "them",
            role: "游戏主持",
            textEn: "Absolutely — there's an emergency exit you can use at any time. But trust me, most groups make it out! Even if you don't solve every puzzle, we'll come in after 60 minutes and walk you through the rest. Ready? The clock starts... now!",
            textZh: "当然——有一个紧急出口随时可以用。不过相信我，大多数队伍都能出来！就算没解完所有谜题，60分钟后我们会进去给你们讲解。准备好了？倒计时开始——现在！",
            keyPhrases: [
              { en: "emergency exit", zh: "紧急出口" },
              { en: "make it out", zh: "成功逃出来" },
              { en: "walk you through", zh: "给你们讲解" },
              { en: "the clock starts", zh: "倒计时开始" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! You can leave whenever. But you've got this — good luck!", textZh: "当然！随时可以走。但你们没问题的——加油！", actionHint: "开始游戏", frequency: "common" },
            ],
          },
        ],
      },
      // --- Flow 2: 游戏过程中的沟通 ---
      {
        id: "during-game",
        titleZh: "游戏过程中的沟通",
        titleEn: "Communication During the Game",
        description: "在密室逃脱中与队友沟通、请求提示、庆祝胜利",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Okay team, let's split up and search the room. I'll check the bookshelf, you two look at the desk, and you check behind the paintings.",
            textZh: "好了团队，我们分开找线索。我查书架，你们两个看桌子，你看画后面。",
          },
          {
            speaker: "them",
            role: "队友",
            textEn: "Hey, I found a four-digit code written inside this drawer! It says '1847'. Does anyone see a lock that needs four numbers?",
            textZh: "嘿，我在这个抽屉里发现了一个四位数密码！写着'1847'。有人看到需要四位数的锁吗？",
            keyPhrases: [
              { en: "four-digit code", zh: "四位数密码" },
              { en: "lock", zh: "锁" },
            ],
            alternativeExpressions: [
              { textEn: "Guys, found something! There's a code inside this drawer — '1847'. Anyone see a four-number lock?", textZh: "大家，发现东西了！这个抽屉里有个密码——'1847'。有人看到四位数的锁吗？", actionHint: "找对应的锁", frequency: "common" },
              { textEn: "Check this out — '1847' written inside the drawer! There's gotta be a combination lock somewhere.", textZh: "看这个——抽屉里写着'1847'！肯定哪里有密码锁。", actionHint: "四处找锁", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes! There's a padlock on this chest over here. Let me try it... It worked! There's a key and a UV flashlight inside.",
            textZh: "有！这边箱子上有一个密码锁。让我试试……打开了！里面有一把钥匙和一个紫外线手电筒。",
            culturalNote: "密室逃脱中常见的道具包括各种锁（padlock, combination lock）、紫外线灯、镜子和隐藏的字条。",
          },
          {
            speaker: "them",
            role: "队友",
            textEn: "A UV flashlight — nice! Try shining it on the walls and paintings. Sometimes there are hidden messages that only show up under UV light.",
            textZh: "紫外线手电筒——好！试试照墙壁和画。有时候有隐藏的信息只在紫外线下才能看到。",
            keyPhrases: [
              { en: "UV flashlight", zh: "紫外线手电筒" },
              { en: "hidden messages", zh: "隐藏的信息" },
              { en: "show up", zh: "显现出来" },
            ],
            vocabNotes: {
              "show up": { meaningInContext: "在这句话里表示：显现出来/变得可见", similarUsage: "类似用法：The stain didn't show up until I washed it.（直到洗了才看到那个污渍）" },
            },
            alternativeExpressions: [
              { textEn: "UV flashlight — sweet! Try it on the walls and paintings. These rooms usually have hidden stuff that only shows up under blacklight.", textZh: "紫外线手电筒——好！试试照墙壁和画。这些房间通常有只在紫外线下才能看到的隐藏信息。", actionHint: "到处照照", frequency: "common" },
              { textEn: "Nice find! Shine it everywhere — walls, paintings, even the floor. Escape rooms love hiding UV messages.", textZh: "好发现！到处照——墙壁、画、甚至地板。密室逃脱最喜欢藏紫外线信息了。", actionHint: "仔细搜索", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I found something! There are letters glowing on the map — it spells 'NORTH'. But I don't know what to do with it. Should we use a hint?",
            textZh: "我发现了！地图上有字母在发光——拼出来是'NORTH'。但我不知道用在哪里。我们要用一次提示吗？",
          },
          {
            speaker: "them",
            role: "队友",
            textEn: "Wait, hold on! Look at the compass on the wall — the needle is pointing to a specific book on the north side of the shelf. Let me pull it out... Yes! There's a hidden compartment!",
            textZh: "等等！看墙上的指南针——指针指向书架北面的一本特定的书。让我抽出来……有了！有一个暗格！",
            keyPhrases: [
              { en: "compass", zh: "指南针" },
              { en: "hidden compartment", zh: "暗格/隐藏空间" },
              { en: "pull it out", zh: "抽出来" },
            ],
            alternativeExpressions: [
              { textEn: "Hold on! The compass on the wall — it's pointing to a book on the north side. Let me pull it... Yes! Secret compartment!", textZh: "等一下！墙上的指南针——指向北面的一本书。让我抽出来……有了！暗格！", actionHint: "检查里面的东西", frequency: "common" },
              { textEn: "Wait wait wait — NORTH! The compass! Look, it's pointing at a specific book. Pull it out... Boom, hidden compartment!", textZh: "等等等——NORTH！指南针！看，指向一本特定的书。抽出来……太好了，有暗格！", actionHint: "看暗格里有什么", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's brilliant! How much time do we have left?",
            textZh: "太聪明了！我们还剩多少时间？",
          },
          {
            speaker: "them",
            role: "队友",
            textEn: "The clock on the screen says 22 minutes. We've solved four puzzles out of seven. I think we can make it if we hurry!",
            textZh: "屏幕上的计时器显示22分钟。我们七个谜题解了四个。如果快点的话我觉得能出来！",
            keyPhrases: [
              { en: "how much time", zh: "还剩多少时间" },
              { en: "puzzles", zh: "谜题" },
              { en: "make it", zh: "成功完成" },
            ],
            alternativeExpressions: [
              { textEn: "22 minutes! Four puzzles down, three to go. We can totally do this if we hustle!", textZh: "22分钟！四个谜题解了，还剩三个。加紧的话完全没问题！", actionHint: "加快速度", frequency: "common" },
              { textEn: "Clock says 22 minutes. We've cracked four out of seven. Gonna be tight but I think we can make it!", textZh: "时钟显示22分钟。七个解了四个。时间紧但我觉得能行！", actionHint: "抓紧时间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Let's use the intercom for a hint on this last puzzle — I'm completely stumped.",
            textZh: "最后这个谜题我们用对讲机要个提示吧——我完全没头绪。",
          },
          {
            speaker: "them",
            role: "游戏主持",
            textEn: "Here's your hint: 'The answer is not always in front of you — sometimes you need to look at things from a different angle.' Good luck!",
            textZh: "提示来了：'答案不总是在你面前——有时候你需要从不同的角度看事物。'加油！",
            keyPhrases: [
              { en: "stumped", zh: "被难住了/没头绪" },
              { en: "from a different angle", zh: "从不同角度" },
            ],
            vocabNotes: {
              "stumped": { meaningInContext: "在这句话里表示：完全没有头绪、被难住了", similarUsage: "类似用法：The math problem really stumped me.（那道数学题把我难住了）" },
            },
            alternativeExpressions: [
              { textEn: "Here's your clue: 'Not everything is what it seems at first glance. Try looking at it differently.' You've got this!", textZh: "线索来了：'不是所有东西乍一看就是真相。试着换个方式看。'你们行的！", actionHint: "换个角度思考", frequency: "common" },
              { textEn: "Hint time: 'Sometimes the answer is right in front of you — you just need to flip your perspective.' Good luck!", textZh: "提示时间：'有时候答案就在你面前——你只需要换个视角。'加油！", actionHint: "找镜子或反转", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "A different angle... wait, the mirror! If I hold the mirror up to this backwards text, it's readable! The final code is '3927'!",
            textZh: "不同角度……等等，镜子！如果用镜子对着这些反转的文字看就能读了！最终密码是'3927'！",
          },
          {
            speaker: "them",
            role: "游戏主持",
            textEn: "Congratulations! You escaped The Haunted Library with 4 minutes and 37 seconds to spare! That's actually in the top 20% of all groups. Great teamwork — would you like a group photo by the scoreboard?",
            textZh: "恭喜！你们成功逃出了闹鬼图书馆，还剩4分37秒！这其实在所有队伍中排前20%。团队合作太棒了——要在记分牌旁边拍张合照吗？",
            keyPhrases: [
              { en: "escaped", zh: "逃出来了" },
              { en: "to spare", zh: "剩余" },
              { en: "top 20%", zh: "前20%" },
              { en: "scoreboard", zh: "记分牌" },
            ],
            vocabNotes: {
              "to spare": { meaningInContext: "在这句话里表示：多余的、剩下的（时间）", similarUsage: "类似用法：We arrived at the airport with an hour to spare.（我们到机场还多出一个小时）" },
            },
            culturalMeaning: "密室逃脱结束后，工作人员通常会邀请你在主题背景前拍照留念，有些店会发到社交媒体上（需要你同意）。",
            alternativeExpressions: [
              { textEn: "You made it! 4 minutes and 37 seconds left — that's top 20%! Amazing teamwork. Want a group photo by the scoreboard?", textZh: "你们成功了！还剩4分37秒——排前20%！团队合作太棒了。要在记分牌旁拍张合照吗？", actionHint: "拍照留念", frequency: "common" },
              { textEn: "YES! You escaped with time to spare! That was seriously impressive for first-timers. Come grab a photo to celebrate!", textZh: "耶！你们在时间内逃出来了！对第一次玩的人来说太厉害了。来拍张照庆祝吧！", actionHint: "去拍合影", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 保龄球馆 ====================
  {
    id: "entertainment-14",
    category: "entertainment",
    titleZh: "保龄球馆",
    titleEn: "Bowling Alley",
    description: "在国外保龄球馆体验打保龄球，包括租鞋、选球、计分和社交",
    otherRole: "保龄球馆工作人员/球友",
    otherRoleIcon: "target",
    flows: [
      // --- Flow 1: 租鞋开局 ---
      {
        id: "lane-setup",
        titleZh: "租鞋开局",
        titleEn: "Lane Setup & Shoe Rental",
        description: "到保龄球馆租鞋、选球道、了解基本规则",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "前台",
            textEn: "Hey, welcome to Strike Zone! How many bowlers today?",
            textZh: "嘿，欢迎来到Strike Zone！今天几个人打？",
            keyPhrases: [
              { en: "bowlers", zh: "打球的人" },
            ],
            alternativeExpressions: [
              { textEn: "Welcome in! How many in your group for bowling?", textZh: "欢迎！你们几个人打保龄球？", actionHint: "告诉人数", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Three of us. We've never bowled in the U.S. before — how does it work here?",
            textZh: "三个人。我们没在美国打过保龄球——这里怎么玩？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Easy! You rent a lane by the hour — $25 per hour for a lane. Shoe rental is $5 per person. We'll set you up on a lane and the scoring is all automatic on the screen above. Would you like one hour or two?",
            textZh: "很简单！按小时租球道——每小时25美元一条道。鞋子每人5美元。我们给你安排球道，计分全是自动的，在上方屏幕上。你们要一小时还是两小时？",
            keyPhrases: [
              { en: "rent a lane", zh: "租球道" },
              { en: "by the hour", zh: "按小时" },
              { en: "shoe rental", zh: "租鞋" },
              { en: "scoring is automatic", zh: "计分是自动的" },
            ],
            vocabNotes: {
              "lane": { meaningInContext: "在这句话里表示：保龄球场的一条球道", similarUsage: "类似用法：We got lane 7, right next to the snack bar.（我们分到7号道，就在零食吧旁边）" },
            },
            alternativeExpressions: [
              { textEn: "Simple! It's $25 an hour for the lane, $5 a person for shoes. Scoring's automatic — it's all on the screen. One hour or two?", textZh: "很简单！球道每小时25，鞋子每人5。计分是自动的——都在屏幕上。一小时还是两小时？", actionHint: "选择时长", frequency: "common" },
              { textEn: "You rent a lane by the hour — 25 bucks. Shoe rental's 5 per person. Everything's computerized, so you just bowl and the screen keeps score.", textZh: "按小时租球道——25块。鞋子每人5块。全部电脑化的，你只管打球屏幕自动计分。", actionHint: "决定打多久", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Let's do two hours. What shoe sizes do you need from us?",
            textZh: "两小时吧。你们需要我们的鞋码是多少？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "What sizes do you guys wear? We use U.S. sizes here — if you know your European size, I can convert it for you.",
            textZh: "你们穿多大的？我们这里用美国码——如果你们知道欧洲码，我可以帮你们换算。",
            keyPhrases: [
              { en: "U.S. sizes", zh: "美国码" },
              { en: "European size", zh: "欧洲码" },
              { en: "convert", zh: "换算" },
            ],
            culturalNote: "美国鞋码和中国/欧洲鞋码不同。男士中国42码大约是美国8.5-9码，女士中国38码大约是美国7-7.5码。",
            alternativeExpressions: [
              { textEn: "What shoe sizes? We use American sizes here. If you know your European size, I can figure it out for you.", textZh: "穿多大的？我们这里用美国码。如果你知道欧洲码我可以帮你换算。", actionHint: "告知鞋码", frequency: "common" },
              { textEn: "Cool. What size shoes do you guys wear? If you're not sure of your US size, tell me your Euro size and I'll convert it.", textZh: "好的。你们穿几码的鞋？如果不确定美国码，告诉我欧洲码我帮你换。", actionHint: "说出鞋码", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I wear a size 42 in European — I think that's about a 9 in U.S.?",
            textZh: "我穿欧洲42码——美国码大概是9吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yep, that's right! A men's 9. Here are your shoes. The balls are on the racks by your lane — you'll want to pick one that's not too heavy. For beginners, I'd say 10 to 12 pounds is a good range. Put your fingers in the holes and make sure the grip feels comfortable.",
            textZh: "对的！男士9码。鞋子给你。球就在球道旁边的架子上——选一个不太重的。新手的话我建议10到12磅比较合适。手指放进球洞里，确保握着舒服。",
            keyPhrases: [
              { en: "racks", zh: "球架" },
              { en: "pounds", zh: "磅" },
              { en: "grip", zh: "握感" },
              { en: "holes", zh: "球洞" },
            ],
            alternativeExpressions: [
              { textEn: "Men's 9, got it! Here's your shoes. Balls are by your lane — for beginners, 10 to 12 pounds is good. Make sure the finger holes feel comfortable.", textZh: "男士9码，好的！鞋子给你。球在球道旁——新手10到12磅合适。确保手指洞握着舒服。", actionHint: "试球的手感", frequency: "common" },
              { textEn: "That's right, men's 9. Shoes, there you go. Pick a ball from the rack — not too heavy, maybe 10 or 11 pounds. Fingers in the holes, make sure it feels right.", textZh: "对的，男士9码。鞋子给你。从架子上选球——别太重，10或11磅差不多。手指放进去确保手感好。", actionHint: "选合适的球", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "This 11-pound one feels good. Quick question — what do the bumpers do? Can we use them?",
            textZh: "这个11磅的手感不错。快问一下——挡板是干什么的？我们可以用吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Bumpers are the guardrails in the gutters — they stop the ball from going into the gutter. They're usually for kids, but honestly, no judgment here! I can turn them on for your lane if you want.",
            textZh: "挡板是沟槽里的护栏——防止球滚进沟里。通常是给小朋友用的，但说实话，我们不介意！如果你们想要我可以开。",
            keyPhrases: [
              { en: "bumpers", zh: "挡板" },
              { en: "guardrails", zh: "护栏" },
              { en: "gutters", zh: "沟槽" },
              { en: "no judgment", zh: "不会评价你/不介意" },
            ],
            vocabNotes: {
              "gutter": { meaningInContext: "在这句话里表示：保龄球道两侧的沟，球掉进去就不得分", similarUsage: "类似用法：I threw a gutter ball — zero points!（我扔了个沟球——零分！）" },
              "no judgment": { meaningInContext: "在这句话里表示：我不会觉得你这样不好/没什么可丢脸的", similarUsage: "类似用法：You can order pineapple on pizza — no judgment here.（你可以点菠萝披萨——我不评价）" },
            },
            literalMeaning: "\"no judgment\" 字面意思是'没有评判'，实际表达'我们不会因此看低你，放心用吧'。",
            alternativeExpressions: [
              { textEn: "Bumpers keep the ball out of the gutters — they're mainly for kids, but hey, no shame in using them! Want me to turn them on?", textZh: "挡板防止球滚进沟里——主要给小朋友用，但用也不丢人！要我开吗？", actionHint: "决定要不要挡板", frequency: "common" },
              { textEn: "Those are the bumper rails — they stop gutter balls. Usually for kids, but honestly, adults use them too. No judgment here, want them on?", textZh: "那是挡板护栏——防止球进沟。通常给小朋友，但说实话大人也用。不介意的，要开吗？", actionHint: "选择难度", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Haha, no bumpers for us — we'll learn the hard way! Let's get started.",
            textZh: "哈哈，我们不用挡板——自己慢慢学！开始吧。",
          },
        ],
      },
      // --- Flow 2: 打球与社交 ---
      {
        id: "bowling-social",
        titleZh: "打球与社交",
        titleEn: "Bowling & Socializing",
        description: "打保龄球过程中与旁边球道的人社交、学习保龄球术语",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "隔壁球友",
            textEn: "Nice shot! You almost got a spare there. Are you guys from out of town?",
            textZh: "好球！差点就补中了。你们是外地来的吗？",
            keyPhrases: [
              { en: "spare", zh: "补中（第二球打倒剩余球瓶）" },
              { en: "out of town", zh: "外地来的" },
            ],
            vocabNotes: {
              "spare": { meaningInContext: "在这句话里表示：保龄球中第一球没全倒，第二球把剩下的全打倒", similarUsage: "类似用法：I'm so close to a spare! Just one pin left.（差一点补中！还剩一个球瓶）" },
            },
            alternativeExpressions: [
              { textEn: "Hey, nice throw! Almost picked that one up. You guys from around here?", textZh: "嘿，好球！差点就全倒了。你们是本地人吗？", actionHint: "聊天交朋友", frequency: "common" },
              { textEn: "So close to a spare! Good shot though. Are you visiting or do you live around here?", textZh: "差一点就补中了！打得不错。你们是旅游还是住附近？", actionHint: "自我介绍", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks! Yeah, we're visiting from China. I'm still trying to figure out how to throw a straight ball — mine keeps curving to the right.",
            textZh: "谢谢！是的，我们从中国来旅游。我还在学怎么扔直球——我的球老是往右弯。",
          },
          {
            speaker: "them",
            role: "隔壁球友",
            textEn: "Ah, that's a common issue. Try keeping your thumb at 12 o'clock when you release the ball. And follow through — swing your arm straight toward the pins, like you're shaking someone's hand at the end.",
            textZh: "这很常见。试试松球的时候大拇指保持在12点钟方向。要有跟随动作——手臂直直地朝球瓶挥过去，就像最后在跟人握手一样。",
            keyPhrases: [
              { en: "release the ball", zh: "松球" },
              { en: "follow through", zh: "跟随动作" },
              { en: "swing your arm", zh: "挥臂" },
              { en: "pins", zh: "球瓶" },
            ],
            vocabNotes: {
              "follow through": { meaningInContext: "在这句话里表示：球出手后继续完成挥臂动作，不要中途停下", similarUsage: "类似用法：In golf, the follow-through is as important as the backswing.（高尔夫里收杆和挥杆一样重要）" },
            },
            alternativeExpressions: [
              { textEn: "That's super common. Keep your thumb pointing straight up when you let go. Follow through like you're reaching for a handshake at the end.", textZh: "这很常见。松球时大拇指朝上。收势的时候像在跟人握手一样。", actionHint: "练习姿势", frequency: "common" },
              { textEn: "Classic beginner thing. Try keeping your arm straight and your thumb at 12 o'clock. Swing it right toward the pins — don't twist your wrist.", textZh: "新手经典问题。试着手臂伸直，大拇指保持在12点钟。直直朝球瓶挥——手腕不要转。", actionHint: "按建议试试", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Like this? Oh wow, it went so much straighter! And I knocked down 8 pins!",
            textZh: "像这样？哇，直多了！而且我打倒了8个球瓶！",
          },
          {
            speaker: "them",
            role: "隔壁球友",
            textEn: "Nice! Now try to pick up the spare — aim slightly to the left of the remaining two pins. If you get this, you'll have a great frame!",
            textZh: "不错！现在试试补中——瞄准剩下两个球瓶稍微偏左的位置。这个打到了的话这一轮就很棒了！",
            keyPhrases: [
              { en: "pick up the spare", zh: "补中" },
              { en: "aim", zh: "瞄准" },
              { en: "frame", zh: "一轮" },
            ],
            vocabNotes: {
              "frame": { meaningInContext: "在这句话里表示：保龄球的一轮（共10轮，每轮最多投两次球）", similarUsage: "类似用法：I got a strike in the 7th frame!（我在第七轮打了个全中！）" },
            },
            alternativeExpressions: [
              { textEn: "8 pins, nice! Now go for the spare — aim a little left of the two that are standing. Nail this and you'll have a great frame!", textZh: "8个球瓶，不错！现在补中——瞄准站着的两个偏左一点。打到了这一轮就很棒了！", actionHint: "瞄准剩余球瓶", frequency: "common" },
              { textEn: "Now try to clean up the spare. See those two pins? Aim just to the left. If you get this, that's a great frame!", textZh: "现在试着补中。看到那两个球瓶了吗？瞄准偏左一点。打到了这一轮就很棒！", actionHint: "集中注意力", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes! I got them both! What's the scoring here — I see different numbers on the screen.",
            textZh: "耶！两个都倒了！计分怎么看——屏幕上显示不同的数字。",
          },
          {
            speaker: "them",
            role: "隔壁球友",
            textEn: "So the basics: knock down all 10 with the first ball — that's a strike, shown as an X. Get them all in two throws — that's a spare, shown as a slash. Strikes and spares give you bonus points from your next throws. A perfect game is 300 — all strikes. My personal best is 192.",
            textZh: "基本规则：第一球全倒叫全中（strike），显示X。两球全倒叫补中（spare），显示斜杠。全中和补中会从下次投球中获得加分。满分是300分——全是全中。我个人最高192。",
            keyPhrases: [
              { en: "strike", zh: "全中" },
              { en: "spare", zh: "补中" },
              { en: "bonus points", zh: "加分" },
              { en: "perfect game", zh: "满分局（300分）" },
              { en: "personal best", zh: "个人最高分" },
            ],
            alternativeExpressions: [
              { textEn: "OK, so — all ten pins first ball is a strike, that's an X. Get them all in two throws, that's a spare, shown as a slash. Both give you bonus points. Perfect game is 300.", textZh: "好的——第一球全倒叫全中，显示X。两球全倒叫补中，显示斜杠。两个都有额外加分。满分300。", actionHint: "理解计分规则", frequency: "common" },
              { textEn: "An X means strike — all ten down in one shot. A slash is a spare — cleaned up on the second throw. Strikes and spares earn you bonus points. 300 is a perfect game.", textZh: "X是全中——一球全倒。斜杠是补中——第二球清完。全中和补中都有加分。300是满分。", actionHint: "看懂屏幕", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "192, that's impressive! We're still trying to break 100. By the way, can we order food right here at the lane?",
            textZh: "192，太厉害了！我们还在努力突破100分。对了，可以直接在球道这里点吃的吗？",
          },
          {
            speaker: "them",
            role: "隔壁球友",
            textEn: "Yeah! There's a menu on the table behind your seats. Nachos and pitchers of beer are basically bowling essentials. You can order from the bar or sometimes a server walks around.",
            textZh: "可以！座位后面桌子上有菜单。芝士玉米片和大壶啤酒基本上是保龄球标配。可以去吧台点或者有时候服务员会过来。",
            keyPhrases: [
              { en: "nachos", zh: "芝士玉米片" },
              { en: "pitchers of beer", zh: "大壶啤酒" },
              { en: "bowling essentials", zh: "打保龄球标配" },
            ],
            alternativeExpressions: [
              { textEn: "Totally! Just flag down a server or go up to the counter. The loaded fries here are awesome.", textZh: "当然！招一下服务员或者去柜台。这里的加料薯条超好吃。", actionHint: "可以点餐", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Nachos and beer it is! This is so much fun — maybe we should come back for cosmic bowling tonight. What's that?",
            textZh: "那就来芝士片和啤酒！太好玩了——也许今晚我们应该再来玩夜光保龄球。那是什么？",
          },
          {
            speaker: "them",
            role: "隔壁球友",
            textEn: "Cosmic bowling is the best — they turn off the regular lights, switch on blacklights and neon, play music, and it's like bowling in a nightclub. Usually starts around 9 PM on weekends. Highly recommend it!",
            textZh: "夜光保龄球超棒——关掉普通灯，打开紫外灯和霓虹灯，放音乐，就像在夜店里打保龄球。通常周末晚上9点开始。强烈推荐！",
            keyPhrases: [
              { en: "cosmic bowling", zh: "夜光保龄球" },
              { en: "blacklights", zh: "紫外灯/黑光灯" },
              { en: "neon", zh: "霓虹灯" },
            ],
            vocabNotes: {
              "cosmic bowling": { meaningInContext: "在这句话里表示：灯光效果保龄球，在黑光和音乐中打球，氛围像迪厅", similarUsage: "类似用法：Does this alley do cosmic bowling on Saturdays?（这家保龄球馆周六有夜光保龄球吗？）" },
            },
            alternativeExpressions: [
              { textEn: "Dude, cosmic bowling is SO fun. Blacklights, neon, loud music — it's like a nightclub but you're bowling. Usually starts at 9 on weekends. Highly recommend.", textZh: "兄弟，夜光保龄球超好玩。紫外灯、霓虹灯、劲爆音乐——像夜店但在打保龄球。通常周末9点开始。强烈推荐。", actionHint: "晚上再来", frequency: "common" },
              { textEn: "Oh man, cosmic bowling is the best. They turn off the lights, blast music, blacklights everywhere. It's amazing. You should totally come back tonight!", textZh: "天哪，夜光保龄球太棒了。关灯，放音乐，到处紫外灯。太赞了。你们今晚一定要再来！", actionHint: "计划晚上再来", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 赌场 ====================
  {
    id: "entertainment-15",
    category: "entertainment",
    titleZh: "赌场",
    titleEn: "Casino",
    description: "在赌场体验各种游戏，包括老虎机、桌游、筹码兑换和基本礼仪",
    otherRole: "赌场工作人员/荷官",
    otherRoleIcon: "spade",
    flows: [
      // --- Flow 1: 入场与筹码兑换 ---
      {
        id: "entry-chips",
        titleZh: "入场与筹码兑换",
        titleEn: "Entry & Getting Chips",
        description: "进入赌场、兑换筹码、了解基本规则和老虎机",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "安保",
            textEn: "Good evening! May I see your ID, please? You must be 21 or older to enter the casino floor.",
            textZh: "晚上好！请出示您的身份证件。进入赌场区域需要年满21岁。",
            keyPhrases: [
              { en: "ID", zh: "身份证件" },
              { en: "21 or older", zh: "年满21岁" },
              { en: "casino floor", zh: "赌场区域" },
            ],
            alternativeExpressions: [
              { textEn: "Welcome! ID check, please.", textZh: "欢迎！请查证件。", actionHint: "出示护照或ID", frequency: "common" },
            ],
            culturalNote: "在美国（包括拉斯维加斯），赌场的合法年龄是21岁。需要出示护照或有效身份证件。外国游客用护照即可。",
          },
          {
            speaker: "you",
            textEn: "Sure, here's my passport. This is our first time at a casino — where do we start?",
            textZh: "好的，这是我的护照。这是我们第一次来赌场——从哪里开始？",
          },
          {
            speaker: "them",
            role: "安保",
            textEn: "Welcome! You'll want to head to the cashier's cage over there to get chips for the table games. For slot machines, you can just insert cash or your player's card directly into the machine.",
            textZh: "欢迎！你们可以先去那边的兑换窗口换桌游筹码。老虎机的话，直接把现金或会员卡插进机器就行。",
            keyPhrases: [
              { en: "cashier's cage", zh: "兑换窗口" },
              { en: "chips", zh: "筹码" },
              { en: "table games", zh: "桌游/桌面游戏" },
              { en: "slot machines", zh: "老虎机" },
              { en: "player's card", zh: "会员卡" },
            ],
            vocabNotes: {
              "cage": { meaningInContext: "在这句话里表示：赌场中兑换筹码的窗口/柜台（因为有铁栏杆围着像笼子）", similarUsage: "类似用法：Cash out your chips at the cage when you're done.（结束后去窗口兑现筹码）" },
            },
            alternativeExpressions: [
              { textEn: "Welcome in! Head to the cashier's cage over there for chips. For slots, just stick cash right in the machine.", textZh: "欢迎！去那边的兑换窗口换筹码。老虎机的话直接把现金插进机器就行。", actionHint: "去换筹码", frequency: "common" },
              { textEn: "For table games, get chips at the cage. Slot machines take cash or your player's card directly. Have fun, but gamble responsibly!", textZh: "桌游去兑换窗口换筹码。老虎机直接用现金或会员卡。玩得开心，但理性消费！", actionHint: "了解流程", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd like to exchange $200 for chips, please. What denominations do you have?",
            textZh: "我想换200美元的筹码。有什么面额的？",
          },
          {
            speaker: "them",
            role: "出纳员",
            textEn: "We have $1, $5, $25, and $100 chips. How would you like them? For beginners at the tables, I'd suggest mostly $5 and some $1 chips — the minimum bet at most tables is $10 or $15.",
            textZh: "有1、5、25和100美元的筹码。您想怎么换？如果是新手上桌，我建议以5美元为主加一些1美元的——大多数桌最低下注是10或15美元。",
            keyPhrases: [
              { en: "denominations", zh: "面额" },
              { en: "minimum bet", zh: "最低下注" },
            ],
            vocabNotes: {
              "denomination": { meaningInContext: "在这句话里表示：筹码的面值/面额", similarUsage: "类似用法：What denomination bills do you need?（你要什么面额的钞票？）" },
            },
            alternativeExpressions: [
              { textEn: "We've got $1, $5, $25, and $100 chips. For beginners, I'd load up on fives and ones. Most tables are $10 or $15 minimum.", textZh: "有1、5、25和100美元的。新手建议多换5和1美元的。大多数桌最低下注10或15。", actionHint: "选择面额", frequency: "common" },
              { textEn: "$1, $5, $25, $100. If you're just starting out, mostly fives is the way to go. Table minimums are usually $10 to $15.", textZh: "1、5、25、100美元。如果刚开始玩，以5美元为主比较好。桌最低通常10到15美元。", actionHint: "按建议换", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take thirty $5 chips and twenty $1 chips, please. Also, what's this player's card everyone's talking about?",
            textZh: "给我三十个5美元和二十个1美元的。还有，大家说的会员卡是什么？",
          },
          {
            speaker: "them",
            role: "出纳员",
            textEn: "A player's card tracks your play and earns you rewards — free drinks, meal comps, even hotel upgrades. It's free to sign up and there's no obligation to bet more. I'd recommend getting one — you can sign up at the rewards desk right next to us.",
            textZh: "会员卡记录你的游戏记录，赚取奖励——免费饮料、免费餐食，甚至酒店升级。注册免费而且不需要你多下注。建议办一张——旁边的奖励柜台就可以注册。",
            keyPhrases: [
              { en: "tracks your play", zh: "记录你的游戏" },
              { en: "rewards", zh: "奖励" },
              { en: "comps", zh: "免费赠送（的餐食等）" },
              { en: "no obligation", zh: "没有义务/不要求" },
            ],
            vocabNotes: {
              "comps": { meaningInContext: "在这句话里表示：赌场赠送的免费服务（complimentary的缩写）", similarUsage: "类似用法：We got comped a room at the hotel!（酒店免费送了我们一间房！）" },
            },
            culturalMeaning: "赌场通过'comps'（免费赠送）来奖励常客。不是因为你赢了钱，而是因为你在赌场消费了时间和金钱。办卡是免费的，即使小额游戏也能积累。",
            alternativeExpressions: [
              { textEn: "It tracks what you play and earns you perks — free drinks, food, maybe a hotel upgrade. Totally free to sign up. The rewards desk is right next to us.", textZh: "记录你的游戏赚取福利——免费饮料、餐食，也许酒店升级。注册完全免费。奖励柜台就在旁边。", actionHint: "去办一张", frequency: "common" },
              { textEn: "Get a player's card — it's free and you earn comps as you play. Free drinks, meals, all that. No obligation. Sign up right over there.", textZh: "办张会员卡——免费的，玩的时候赚积分。免费饮料、餐食什么的。没义务。就在那边注册。", actionHint: "顺便办卡", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know! Let's start with the slot machines — they look less intimidating than the tables.",
            textZh: "好的！先从老虎机开始吧——看起来比桌游没那么吓人。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Just insert your cash or ticket, choose your bet amount, and press spin. The machine will tell you if you win. Oh, and while you're playing — would you like a complimentary drink? We have beer, wine, cocktails, or soft drinks.",
            textZh: "把现金或票据插进去，选择下注金额，按旋转。赢了机器会告诉你。对了，玩的时候——想来一杯免费饮料吗？有啤酒、葡萄酒、鸡尾酒和软饮。",
            keyPhrases: [
              { en: "spin", zh: "旋转" },
              { en: "complimentary drink", zh: "免费饮料" },
            ],
            vocabNotes: {
              "complimentary": { meaningInContext: "在这句话里表示：免费的、赠送的", similarUsage: "类似用法：The hotel offers a complimentary breakfast.（酒店提供免费早餐）" },
            },
            culturalNote: "在拉斯维加斯等赌城，赌场在你游戏时会提供免费饮料。记得给送饮料的服务员小费（通常1-2美元一杯）。",
            alternativeExpressions: [
              { textEn: "Easy — just put your cash in, pick your bet, and hit spin. Can I get you a free drink while you play? Beer, cocktail, whatever you like.", textZh: "很简单——放钱进去，选注额，按旋转。玩的时候来杯免费饮料吗？啤酒、鸡尾酒都行。", actionHint: "要杯免费的", frequency: "common" },
              { textEn: "Insert cash, choose your bet amount, spin. Machine does the rest. Oh — want a comp drink? We've got beer, wine, cocktails, soft drinks.", textZh: "插入现金，选注额，旋转。机器搞定其他的。哦——要杯免费饮料吗？有啤酒、红酒、鸡尾酒、软饮。", actionHint: "点一杯", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "A beer would be great, thank you! Do I tip for the free drinks?",
            textZh: "来杯啤酒，谢谢！免费饮料需要给小费吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "It's customary to tip $1 or $2 per drink. A chip works too — we don't mind! Enjoy your game.",
            textZh: "通常给1到2美元小费。给筹码也行——我们不介意！祝游戏愉快。",
            keyPhrases: [
              { en: "customary", zh: "习惯上" },
              { en: "a chip works", zh: "给筹码也行" },
            ],
            alternativeExpressions: [
              { textEn: "Usually a buck or two per drink. Handing over a chip works too. Enjoy!", textZh: "通常每杯一两块。给个筹码也行。玩得开心！", actionHint: "准备小费", frequency: "common" },
              { textEn: "A dollar or two is the norm. You can tip with cash or a chip — either works. Have fun!", textZh: "一两美元是惯例。给现金或筹码都行。玩得开心！", actionHint: "随手给小费", frequency: "common" },
            ],
          },
        ],
      },
      // --- Flow 2: 桌游体验 ---
      {
        id: "table-games",
        titleZh: "桌游体验",
        titleEn: "Table Games Experience",
        description: "在赌桌上体验21点，了解基本玩法和礼仪",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, can I join this blackjack table? I'm a complete beginner though.",
            textZh: "你好，我可以加入这桌21点吗？不过我是完全的新手。",
          },
          {
            speaker: "them",
            role: "荷官",
            textEn: "Of course! Take a seat. This is a $10 minimum table. The goal is simple: get your cards as close to 21 as possible without going over. Face cards are worth 10, aces are 1 or 11. Place your bet in the circle to start.",
            textZh: "当然！请坐。这是最低10美元的桌。规则很简单：让你的牌尽量接近21点但不能超过。花牌值10点，A值1点或11点。把筹码放在圆圈里开始。",
            keyPhrases: [
              { en: "blackjack", zh: "21点" },
              { en: "minimum table", zh: "最低下注桌" },
              { en: "face cards", zh: "花牌（J/Q/K）" },
              { en: "aces", zh: "A牌" },
              { en: "going over", zh: "超过（爆牌）" },
            ],
            vocabNotes: {
              "face cards": { meaningInContext: "在这句话里表示：有人脸的牌——J（Jack）、Q（Queen）、K（King）", similarUsage: "类似用法：I was dealt two face cards — that's 20!（我拿到两张花牌——20点！）" },
            },
            alternativeExpressions: [
              { textEn: "Have a seat! This is a $10 minimum table. Simple goal: get as close to 21 as you can without going over. Face cards are 10, aces are 1 or 11. Put your bet in the circle.", textZh: "请坐！这桌最低10。规则简单：尽量接近21点但别超过。花牌10点，A是1或11。筹码放圆圈里。", actionHint: "放筹码开始", frequency: "common" },
              { textEn: "Welcome! Beginners are totally welcome. $10 minimum. Try to beat the dealer by getting closer to 21 without busting. Bet goes in the circle.", textZh: "欢迎！新手完全没问题。最低10美元。尽量比荷官接近21点但别爆牌。筹码放圆圈里。", actionHint: "学习基本规则", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, I'll start with $10. What do 'hit' and 'stand' mean?",
            textZh: "好的，我先下10美元。'hit'和'stand'是什么意思？",
          },
          {
            speaker: "them",
            role: "荷官",
            textEn: "\"Hit\" means you want another card. \"Stand\" means you're happy with what you have. You can also \"double down\" — double your bet and get exactly one more card. Or \"split\" if you get two of the same card. Let's deal!",
            textZh: "\"Hit\"是再要一张牌。\"Stand\"是你对手上的牌满意了。还可以\"double down\"——加倍下注但只能再拿一张牌。如果拿到两张一样的可以\"split\"分牌。开始发牌！",
            keyPhrases: [
              { en: "hit", zh: "要牌" },
              { en: "stand", zh: "停牌" },
              { en: "double down", zh: "加倍下注" },
              { en: "split", zh: "分牌" },
            ],
            vocabNotes: {
              "double down": { meaningInContext: "在这句话里表示：把赌注翻倍，但只能再拿一张牌", similarUsage: "类似用法：在日常英语中 double down 也表示'加倍努力/坚持立场'：She doubled down on her decision.（她更加坚持了自己的决定）" },
            },
            culturalMeaning: "\"double down\" 在日常英语中已经超越赌场用语，成为常用表达，意思是'更加坚定地做某事'。",
            alternativeExpressions: [
              { textEn: "Hit means another card. Stand means you're good. You can also double down — double your bet, one more card. Same cards? Split 'em. Let's go!", textZh: "Hit是再来一张。Stand是够了。还可以double down——赌注翻倍再来一张。两张一样？可以分牌。开始！", actionHint: "记住术语", frequency: "common" },
              { textEn: "Hit for another card, stand to keep what you've got. There's also double down and split. Don't worry — I'll walk you through it as we go.", textZh: "Hit要牌，stand停牌。还有加倍和分牌。别担心——打的过程中我会教你。", actionHint: "边玩边学", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have a 7 and a 9 — that's 16. The dealer is showing a 10. Should I hit or stand?",
            textZh: "我有7和9——16点。荷官显示的是10。我应该要牌还是停牌？",
          },
          {
            speaker: "them",
            role: "旁边玩家",
            textEn: "Tough spot! Basic strategy says hit on 16 against a dealer's 10. It's risky, but statistically it's the better play. Good luck!",
            textZh: "不好选！基本策略说对着荷官10点时16点应该要牌。有风险，但统计上这是更好的选择。祝你好运！",
            keyPhrases: [
              { en: "tough spot", zh: "不好选的位置" },
              { en: "basic strategy", zh: "基本策略" },
              { en: "statistically", zh: "统计上" },
            ],
            vocabNotes: {
              "tough spot": { meaningInContext: "在这句话里表示：很难做决定的处境", similarUsage: "类似用法：He put me in a tough spot by asking that question.（他那个问题让我很为难）" },
            },
            alternativeExpressions: [
              { textEn: "Ooh, tough one. 16 against a 10 — the book says hit. It's risky but it's the better play long-term. Go for it!", textZh: "哦，不好选。16对10——教科书说要牌。有风险但长期来看是更好的选择。打吧！", actionHint: "决定要牌", frequency: "common" },
              { textEn: "16 is the worst hand in blackjack. Against a dealer 10, you should hit. Yeah it's scary, but statistically it's the right move.", textZh: "16点是21点里最差的手牌。对着荷官10点应该要牌。是挺吓人但统计上是对的。", actionHint: "听从建议", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Hit me! ...A 4! That makes 20. I'll stand.",
            textZh: "要牌！……4！变成20点了。我停牌。",
          },
          {
            speaker: "them",
            role: "荷官",
            textEn: "Dealer has 10 showing... flips... a 7, that's 17. You win! Nice hand — 20 beats 17. Here's your payout.",
            textZh: "荷官显示10点……翻牌……7点，17点。你赢了！好牌——20点赢17点。这是你的赢额。",
            keyPhrases: [
              { en: "payout", zh: "赢额/赔付" },
              { en: "nice hand", zh: "好牌" },
            ],
            alternativeExpressions: [
              { textEn: "Dealer flips a 7 — that's 17. Your 20 wins. Nice play! Here's your payout.", textZh: "荷官翻牌是7——17点。你的20点赢了。打得好！这是你的赢额。", actionHint: "收好筹码", frequency: "common" },
              { textEn: "Dealer has 17. You've got 20 — winner! Good hand. Here you go.", textZh: "荷官17点。你20点——赢了！好牌。给你。", actionHint: "庆祝一下", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Awesome! This is exciting. One more question — should I tip the dealer?",
            textZh: "太棒了！真刺激。再问一下——需要给荷官小费吗？",
          },
          {
            speaker: "them",
            role: "旁边玩家",
            textEn: "It's customary, yeah. Most people tip by placing a small bet for the dealer — just put a $1 chip in front of your bet circle. If you win, the dealer gets the winnings from that chip too. Or you can just hand them a chip when you leave the table.",
            textZh: "习惯上是的。大多数人通过帮荷官下个小注来给小费——在你下注圈前面放一个1美元筹码。如果你赢了，荷官也能拿到那个筹码的赢额。或者离桌的时候直接递个筹码。",
            keyPhrases: [
              { en: "place a bet for the dealer", zh: "帮荷官下注" },
              { en: "winnings", zh: "赢得的钱" },
              { en: "leave the table", zh: "离桌" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, it's good etiquette. Just toss a chip to the dealer after a big win.", textZh: "是的，这是好习惯。赢大了之后扔个筹码给荷官就行。", actionHint: "赢钱后给荷官小费", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 动物园/水族馆 ====================
  {
    id: "entertainment-16",
    category: "entertainment",
    titleZh: "动物园/水族馆",
    titleEn: "Zoo & Aquarium",
    description: "参观动物园或水族馆，包括买票、看动物表演、参加互动体验",
    otherRole: "动物园/水族馆工作人员",
    otherRoleIcon: "fish",
    flows: [
      // --- Flow 1: 购票与参观 ---
      {
        id: "admission-visiting",
        titleZh: "购票与参观",
        titleEn: "Admission & Visiting",
        description: "购票、了解园区地图、观看动物喂食和表演",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "售票员",
            textEn: "Welcome to the San Diego Zoo! How many tickets today? We also have a combo pass that includes the zoo and the Safari Park for a discounted price.",
            textZh: "欢迎来到圣迭戈动物园！今天几张票？我们还有动物园加野生动物园的联票，有折扣价。",
            keyPhrases: [
              { en: "combo pass", zh: "联票" },
              { en: "Safari Park", zh: "野生动物园" },
              { en: "discounted price", zh: "折扣价" },
            ],
            alternativeExpressions: [
              { textEn: "Hi! Single-day or two-day pass? We've got some great deals right now.", textZh: "你好！一日票还是两日票？我们现在有很好的优惠。", actionHint: "选择票种", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Two adults and one child, please. How old does a child have to be for a free ticket?",
            textZh: "两个成人一个儿童。儿童多大可以免票？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "Children under 3 get in free. Ages 3-11 are child price — $46. Adults are $62. How old is your little one?",
            textZh: "3岁以下免费。3-11岁是儿童价——46美元。成人62美元。您家小朋友多大？",
            keyPhrases: [
              { en: "get in free", zh: "免费入场" },
              { en: "child price", zh: "儿童价" },
              { en: "little one", zh: "小朋友" },
            ],
            alternativeExpressions: [
              { textEn: "Under 3 is free. Kids 3 to 11 are $46, adults are $62. How old's your kiddo?", textZh: "3岁以下免费。3到11岁46美元，成人62美元。你家宝贝多大？", actionHint: "告知年龄", frequency: "common" },
              { textEn: "Kids under 3 get in free. 3-11 is child rate at $46, adults $62. How old is the little one?", textZh: "3岁以下免费入园。3-11岁儿童价46美元，成人62美元。小朋友几岁？", actionHint: "说出年龄", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "She's 5. So that's two adults and one child ticket. Is there a map of the zoo?",
            textZh: "她5岁。那就两张成人票一张儿童票。有动物园的地图吗？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "Here's a park map! I've highlighted today's animal encounters and feeding times. The penguin feeding is at 11 AM — very popular, so I'd get there early. And the dolphin show at the amphitheater is at 2 PM — it's the highlight of the day!",
            textZh: "这是园区地图！我标注了今天的动物互动和喂食时间。企鹅喂食是上午11点——非常热门，建议早点去。海豚表演在露天剧场下午2点——是全天的亮点！",
            keyPhrases: [
              { en: "animal encounters", zh: "动物互动" },
              { en: "feeding times", zh: "喂食时间" },
              { en: "amphitheater", zh: "露天剧场" },
              { en: "highlight of the day", zh: "全天亮点" },
            ],
            vocabNotes: {
              "encounters": { meaningInContext: "在这句话里表示：近距离接触和互动动物的机会", similarUsage: "类似用法：The shark encounter was terrifying but amazing!（鲨鱼近距离互动吓人但太棒了！）" },
              "amphitheater": { meaningInContext: "在这句话里表示：圆形露天表演场地", similarUsage: "类似用法：The concert was at the outdoor amphitheater.（音乐会在露天剧场举办）" },
            },
            alternativeExpressions: [
              { textEn: "Here's a map! I marked the feeding times for you. Penguin feeding is at 11 — get there early, it's popular. Dolphin show at 2 is the highlight.", textZh: "地图给你！我标了喂食时间。企鹅喂食11点——早点去，很热门。2点海豚表演是全天亮点。", actionHint: "规划路线", frequency: "common" },
              { textEn: "Take this map — I've highlighted the must-see stuff. Don't miss the 11 AM penguin feeding or the 2 PM dolphin show!", textZh: "拿着地图——我标了必看的。不要错过11点企鹅喂食和2点海豚表演！", actionHint: "看地图规划", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect timing — it's 10:30 now so we can make it to the penguin feeding. Is there a shuttle or tram around the zoo, or do we walk everywhere?",
            textZh: "时间刚好——现在10:30可以赶上企鹅喂食。园里有接驳车或游览车吗，还是全部步行？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "We have a free hop-on hop-off bus that loops around the zoo every 15 minutes. There's also the Skyfari aerial tram — it's included in your ticket and gives you an amazing bird's-eye view. The stop is to your left, just past the gift shop.",
            textZh: "有免费的随上随下巴士，每15分钟绕园区一圈。还有Skyfari空中缆车——包含在票价里，可以鸟瞰整个园区。站点在你左边，过了礼品店就是。",
            keyPhrases: [
              { en: "hop-on hop-off", zh: "随上随下" },
              { en: "loops around", zh: "绕一圈" },
              { en: "aerial tram", zh: "空中缆车" },
              { en: "bird's-eye view", zh: "鸟瞰" },
            ],
            vocabNotes: {
              "bird's-eye view": { meaningInContext: "在这句话里表示：从高处俯瞰的全景视角", similarUsage: "类似用法：The observation deck offers a bird's-eye view of the city.（观景台可以鸟瞰整个城市）" },
            },
            literalMeaning: "\"bird's-eye view\" 字面意思是'鸟的眼睛看到的景色'，即像鸟一样从上往下看的视角。",
            alternativeExpressions: [
              { textEn: "There's a free bus that loops the park every 15 minutes. Or try the Skyfari tram — it's included in your ticket and the view from up there is amazing.", textZh: "有免费巴士每15分钟绕园一圈。或者试试Skyfari缆车——包含在票价里，上面的景色超美。", actionHint: "先坐缆车", frequency: "common" },
              { textEn: "We have a shuttle bus and an aerial tram — both free with your ticket. The tram gives you a bird's-eye view of the whole zoo. It's right over there.", textZh: "有接驳车和空中缆车——都含在票里。缆车可以鸟瞰整个动物园。就在那边。", actionHint: "先去坐缆车", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "The aerial tram sounds fun! One more question — can we bring our own food, or do we need to eat at the restaurants inside?",
            textZh: "空中缆车听起来好玩！再问一下——可以带自己的食物吗，还是必须在园内餐厅吃？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "You can absolutely bring your own food! There are picnic areas throughout the park. We just ask that you don't feed any of the animals your food — it can make them sick. Our food court has some good options too if you need anything.",
            textZh: "完全可以带！园内到处有野餐区。只是请不要把你的食物喂给动物——会让它们生病。如果需要的话，美食广场也有不错的选择。",
            keyPhrases: [
              { en: "picnic areas", zh: "野餐区" },
              { en: "don't feed the animals", zh: "不要喂动物" },
              { en: "food court", zh: "美食广场" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely, bring whatever you want. There are picnic spots everywhere. Just don't feed the animals — it makes them sick. The food court's also pretty decent.", textZh: "当然可以，随便带。到处有野餐区。只是别喂动物——会让它们生病。美食广场也不错。", actionHint: "记住不喂动物", frequency: "common" },
              { textEn: "You can bring your own food, no problem! Lots of picnic areas. Only rule: don't share it with the animals. We also have restaurants if you need them.", textZh: "可以自带食物，没问题！很多野餐区。唯一规则：别分给动物。需要的话园内也有餐厅。", actionHint: "找野餐区吃", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it, no feeding the animals. Let's head to the penguins first — my daughter is so excited!",
            textZh: "明白了，不喂动物。先去看企鹅吧——我女儿超兴奋！",
          },
        ],
      },
      // --- Flow 2: 互动体验 ---
      {
        id: "interactive-experience",
        titleZh: "互动体验",
        titleEn: "Interactive Experience",
        description: "参加动物互动项目、看海豚表演、在水族馆体验触摸池",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "饲养员",
            textEn: "Welcome to the Touch Pool! This is our shallow pool where you can gently touch sea stars, sea cucumbers, and hermit crabs. Just a few rules: only use two fingers, touch gently, and don't try to pick anything up.",
            textZh: "欢迎来到触摸池！这是我们的浅水池，可以轻轻触摸海星、海参和寄居蟹。几个规则：只用两根手指，轻触，不要试图拿起任何东西。",
            keyPhrases: [
              { en: "touch pool", zh: "触摸池" },
              { en: "sea stars", zh: "海星" },
              { en: "sea cucumbers", zh: "海参" },
              { en: "hermit crabs", zh: "寄居蟹" },
              { en: "two fingers", zh: "两根手指" },
            ],
            vocabNotes: {
              "sea stars": { meaningInContext: "在这句话里表示：海星（现在生物学上更倾向叫sea star而不是starfish，因为它们不是鱼）", similarUsage: "类似用法：The sea star has regenerative abilities — it can grow back a lost arm!（海星有再生能力——断臂能长回来！）" },
            },
            alternativeExpressions: [
              { textEn: "Welcome to the Touch Pool! You can gently touch the sea stars and sea cucumbers. Just two fingers, nice and gentle. Don't pick anything up.", textZh: "欢迎来到触摸池！可以轻轻摸海星和海参。只用两根手指，轻轻的。不要拿起任何东西。", actionHint: "轻轻触摸", frequency: "common" },
              { textEn: "This is our Touch Pool! Feel free to touch the animals in here — just use two fingers and be super gentle. No grabbing or lifting.", textZh: "这是我们的触摸池！可以随便摸里面的动物——只用两根手指要超级轻。不要抓或拿起来。", actionHint: "遵守规则触摸", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "This is so cool! Can my daughter touch them too? She's five — is that okay?",
            textZh: "太酷了！我女儿也可以摸吗？她5岁——可以吗？",
          },
          {
            speaker: "them",
            role: "饲养员",
            textEn: "Absolutely! Just help her reach in. The sea stars are the softest — she might like those best. The sea cucumbers feel a bit squishy, which kids usually think is funny. And if you look closely, you might see the hermit crabs switching shells!",
            textZh: "当然！帮她伸手就行。海星最柔软——她可能最喜欢。海参摸着有点软软的，小朋友通常觉得很好玩。仔细看的话，你可能会看到寄居蟹在换壳！",
            keyPhrases: [
              { en: "squishy", zh: "软软的/有弹性的" },
              { en: "switching shells", zh: "换壳" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! Kids love this part. Just make sure she wets her hands first so it's gentler on the animals.", textZh: "当然！小朋友最喜欢这个。让她先湿一下手，对动物更温和。", actionHint: "先把手弄湿再触摸", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "She loves it! We also wanted to see the dolphins. Is the show included in our ticket, or is it extra?",
            textZh: "她超喜欢！我们还想看海豚。表演包含在门票里还是另外付费？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "The dolphin show is included! It starts in about 20 minutes at the Ocean Theater. Seating is first come, first served — I'd suggest heading over now to get good seats. The front rows might get splashed, which kids usually love!",
            textZh: "海豚表演包含在门票里！大约20分钟后在海洋剧场开始。座位先到先得——建议现在就过去占好位置。前排可能会被溅到水，小朋友通常很喜欢！",
            keyPhrases: [
              { en: "first come, first served", zh: "先到先得" },
              { en: "get splashed", zh: "被溅到水" },
              { en: "heading over", zh: "过去" },
            ],
            vocabNotes: {
              "first come, first served": { meaningInContext: "在这句话里表示：先到的人先选位置，不预留座位", similarUsage: "类似用法：The free samples are first come, first served.（免费样品先到先得）" },
            },
            alternativeExpressions: [
              { textEn: "It's included in your ticket! Starts in 20 minutes at Ocean Theater. Get there early for good seats — front rows get wet, which kids love!", textZh: "包含在门票里！20分钟后在海洋剧场开始。早点去占好座——前排会被溅水，小朋友超喜欢！", actionHint: "赶快去占座", frequency: "common" },
              { textEn: "The dolphin show's free with admission. It's first come, first served, so head over soon. If your daughter likes getting splashed, sit up front!", textZh: "海豚表演含在门票里。先到先得，赶紧过去。如果你女儿喜欢被溅水就坐前排！", actionHint: "抓紧时间去", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Let's go to the front row — she'll love getting splashed! Is it okay to take photos and videos during the show?",
            textZh: "我们去前排吧——她肯定喜欢被溅水！表演期间可以拍照和录像吗？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Photos and videos are totally fine — no flash photography though, as it can startle the animals. We also have a professional photographer who takes shots during the show. You can view them at the exit and buy prints or digital copies if you want.",
            textZh: "拍照和录像完全可以——不过请不要用闪光灯，会吓到动物。我们也有专业摄影师在表演期间拍照。出口处可以看照片，想要的话可以买打印版或电子版。",
            keyPhrases: [
              { en: "no flash photography", zh: "不要用闪光灯" },
              { en: "startle the animals", zh: "吓到动物" },
              { en: "prints", zh: "打印版/照片" },
              { en: "digital copies", zh: "电子版" },
            ],
            alternativeExpressions: [
              { textEn: "Photos and videos are fine — just no flash, it scares the dolphins. There's also a pro photographer during the show — check the exit for prints.", textZh: "拍照录像都可以——不能用闪光灯，会吓到海豚。表演期间也有专业摄影师——出口可以看照片。", actionHint: "关掉闪光灯", frequency: "common" },
              { textEn: "Go ahead and film — just turn off the flash. We have a photographer too, so you can buy pro shots at the exit if you want.", textZh: "随便拍——关掉闪光灯就行。我们也有摄影师，出口可以买专业照片。", actionHint: "记得关闪光灯", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Understood. Oh, we also saw a sign for 'dolphin encounters' — what's that?",
            textZh: "明白了。对了，我们看到一个'海豚互动'的牌子——那是什么？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "That's our VIP experience — you get to go backstage, meet the dolphins up close, and even touch them. It's $85 per person and kids must be at least 6 years old with an accompanying adult. Unfortunately your daughter is a bit too young this time, but you could do it next year!",
            textZh: "那是我们的VIP体验——可以去后台，近距离接触海豚，甚至可以摸它们。每人85美元，儿童必须至少6岁并有成人陪同。可惜你女儿这次还小了一点，但明年就可以了！",
            keyPhrases: [
              { en: "VIP experience", zh: "VIP体验" },
              { en: "backstage", zh: "后台" },
              { en: "up close", zh: "近距离" },
              { en: "accompanying adult", zh: "陪同的成人" },
            ],
            vocabNotes: {
              "backstage": { meaningInContext: "在这句话里表示：动物展区后方的工作区域，通常游客看不到", similarUsage: "类似用法：We got a backstage tour of the aquarium!（我们参加了水族馆的幕后游览！）" },
            },
            alternativeExpressions: [
              { textEn: "That's our VIP experience — you go backstage, meet the dolphins up close, even pet them. $85 per person. Kids have to be at least 6 though, sorry.", textZh: "那是我们的VIP体验——去后台近距离接触海豚，甚至可以摸。每人85美元。不过小朋友至少要6岁，抱歉。", actionHint: "了解年龄限制", frequency: "common" },
              { textEn: "It's a behind-the-scenes dolphin experience. You get to touch them and take photos up close. $85 a person. Minimum age is 6 with an adult, so next year for your daughter!", textZh: "是幕后海豚体验。可以摸它们近距离拍照。每人85美元。最低6岁要有大人陪，你女儿明年就可以了！", actionHint: "明年再来", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "What a shame — but we'll definitely come back next year! Thank you for all the information.",
            textZh: "太可惜了——但我们明年一定再来！谢谢你的介绍。",
          },
        ],
      },
    ],
  },

  // ==================== 百老汇/剧场 ====================
  {
    id: "entertainment-17",
    category: "entertainment",
    titleZh: "百老汇/剧场",
    titleEn: "Broadway & Theater",
    description: "在百老汇或剧场看演出，包括买票、入场礼仪、中场休息和观后感",
    otherRole: "剧场工作人员/引座员",
    otherRoleIcon: "drama",
    flows: [
      // --- Flow 1: 购票与入场 ---
      {
        id: "tickets-entry",
        titleZh: "购票与入场",
        titleEn: "Tickets & Entering the Theater",
        description: "在TKTS折扣亭或剧场购票、入场、找座位",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, we're looking for tickets to a Broadway show tonight. What's available?",
            textZh: "你好，我们想买今晚百老汇演出的票。有什么可以选的？",
          },
          {
            speaker: "them",
            role: "TKTS售票员",
            textEn: "Let me check tonight's availability. We have discounted tickets for 'Wicked', 'Hamilton', and 'The Lion King'. 'Wicked' has the best availability — mezzanine seats at 40% off, that's $89 per ticket. 'Hamilton' only has a few rear mezzanine seats left.",
            textZh: "让我查一下今晚的票。有折扣票的是《魔法坏女巫》、《汉密尔顿》和《狮子王》。《魔法坏女巫》票最多——楼厅座位打六折，每张89美元。《汉密尔顿》只剩几张后排楼厅了。",
            keyPhrases: [
              { en: "availability", zh: "余票" },
              { en: "discounted tickets", zh: "折扣票" },
              { en: "mezzanine", zh: "楼厅/二层" },
              { en: "40% off", zh: "打六折" },
              { en: "rear mezzanine", zh: "后排楼厅" },
            ],
            vocabNotes: {
              "mezzanine": { meaningInContext: "在这句话里表示：剧场的第二层座位区，通常在正厅上方", similarUsage: "类似用法：The mezzanine has a great view of the whole stage.（楼厅能看到整个舞台）" },
              "TKTS": { meaningInContext: "在这句话里表示：时代广场著名的当日折扣票亭，可以以25-50%的折扣买到百老汇演出票", similarUsage: "类似用法：We got amazing seats through TKTS for half price!（我们在TKTS以半价买到了很棒的座位！）" },
            },
            culturalNote: "TKTS是纽约时代广场著名的折扣票亭，专门卖当天或次日百老汇演出的折扣票。通常有25%-50%的折扣，但热门剧目（如Hamilton）很难拿到折扣票。",
            alternativeExpressions: [
              { textEn: "Let me see what's available tonight... Wicked's got the most seats — mezzanine at 40% off, $89 each. Hamilton's nearly sold out, just a few back mezz left.", textZh: "看看今晚有什么……《魔法坏女巫》票最多——楼厅打六折，每张89。《汉密尔顿》快卖完了，后排楼厅剩几张。", actionHint: "趁有票赶紧买", frequency: "common" },
              { textEn: "Tonight we've got discounts on Wicked, Hamilton, and Lion King. Best deal is Wicked mezzanine — $89 a ticket, that's 40% off.", textZh: "今晚有折扣的是《魔法坏女巫》、《汉密尔顿》和《狮子王》。最划算的是《魔法坏女巫》楼厅——每张89，六折。", actionHint: "选一个剧", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Two tickets for 'Wicked', please! Are mezzanine seats good? I've never been to a Broadway show before.",
            textZh: "来两张《魔法坏女巫》！楼厅座位好吗？我从来没看过百老汇。",
          },
          {
            speaker: "them",
            role: "TKTS售票员",
            textEn: "Mezzanine is actually one of my favorite spots — you get a great overview of the stage, including the flying scenes in 'Wicked'. The sound is also excellent up there. Orchestra seats are closer but mezzanine has the best overall view.",
            textZh: "楼厅其实是我最喜欢的位置之一——能看到舞台全景，包括《魔法坏女巫》里的飞行场景。那里的音效也非常好。正厅更近，但楼厅整体视角最好。",
            keyPhrases: [
              { en: "overview of the stage", zh: "舞台全景" },
              { en: "flying scenes", zh: "飞行场景" },
              { en: "orchestra seats", zh: "正厅座位" },
              { en: "overall view", zh: "整体视角" },
            ],
            vocabNotes: {
              "orchestra": { meaningInContext: "在这句话里表示：剧场正厅/一层座位区（不是管弦乐队）", similarUsage: "类似用法：We splurged on orchestra seats, row C!（我们奢侈了一把，买了正厅第三排！）" },
            },
            literalMeaning: "\"orchestra\" 在剧场里不是指管弦乐队，而是指一层正厅的座位区域（因为乐队通常在这一层的乐池里）。",
            alternativeExpressions: [
              { textEn: "Mezzanine's actually my favorite. You see the whole stage — especially great for Wicked with all the flying scenes. Sound's excellent up there too.", textZh: "楼厅其实是我最喜欢的。能看到整个舞台——特别适合看《魔法坏女巫》的飞行场景。音效也很好。", actionHint: "放心选楼厅", frequency: "common" },
              { textEn: "Mezz is great! Better overall view than orchestra, honestly. For Wicked, you really want to see the stage from above — the flying scenes are incredible.", textZh: "楼厅很棒！说实话整体视角比正厅好。看《魔法坏女巫》你真的想从上面看——飞行场景太精彩了。", actionHint: "确认买票", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds perfect. What time does the show start, and is there anything we should know about the theater?",
            textZh: "听起来很好。演出几点开始，剧场有什么需要注意的吗？",
          },
          {
            speaker: "them",
            role: "TKTS售票员",
            textEn: "Curtain is at 7 PM — I'd suggest arriving by 6:30. Doors open 30 minutes before. Absolutely no photos or recording once the show starts. Phones must be completely silenced — not just on vibrate. And there's an intermission halfway through, about 15 minutes.",
            textZh: "开演7点——建议6:30到。提前30分钟开门。演出开始后绝对不能拍照录像。手机必须完全静音——不只是振动模式。中间有一次中场休息，大约15分钟。",
            keyPhrases: [
              { en: "curtain", zh: "开演" },
              { en: "doors open", zh: "开门" },
              { en: "no photos or recording", zh: "不能拍照录像" },
              { en: "silenced", zh: "静音" },
              { en: "intermission", zh: "中场休息" },
            ],
            vocabNotes: {
              "curtain": { meaningInContext: "在这句话里表示：幕布升起/演出开始", similarUsage: "类似用法：Curtain call was incredible — the audience gave a standing ovation!（谢幕太精彩了——观众起立鼓掌！）" },
              "intermission": { meaningInContext: "在这句话里表示：演出中间的休息时间，可以上洗手间、买饮料", similarUsage: "类似用法：Let's grab a drink during intermission.（中场休息时去买杯饮料吧）" },
            },
            localVariants: {
              "en-US": "intermission",
              "en-GB": "interval",
            },
            alternativeExpressions: [
              { textEn: "Curtain's at 7, get there by 6:30. No photos once the show starts. Phones on silent — not vibrate, fully silent. There's a 15-minute intermission in the middle.", textZh: "7点开演，6:30到。演出开始后不能拍照。手机完全静音——不是振动，是完全静音。中间有15分钟休息。", actionHint: "记住规则", frequency: "common" },
              { textEn: "Show starts at 7, doors open at 6:30. Absolutely no recording. Kill your phone — not vibrate, off or silent. 15-minute intermission halfway through.", textZh: "7点开演，6:30开门。绝对不能录像。手机关机或静音——不是振动模式。中间有15分钟休息。", actionHint: "提前到场", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it — we'll be there early. Is there a dress code?",
            textZh: "明白了——我们会早到。有着装要求吗？",
          },
          {
            speaker: "them",
            role: "TKTS售票员",
            textEn: "Broadway is pretty relaxed — no formal dress code. You'll see everything from jeans to suits. Most people go smart casual. Just be comfortable and enjoy the show!",
            textZh: "百老汇很随意——没有正式着装要求。从牛仔裤到西装什么都有。大多数人穿精致休闲。穿舒服的就好，享受演出！",
            keyPhrases: [
              { en: "no formal dress code", zh: "没有正式着装要求" },
              { en: "smart casual", zh: "精致休闲" },
            ],
            alternativeExpressions: [
              { textEn: "No dress code really. You'll see jeans, you'll see suits. Just wear whatever's comfortable. It's pretty relaxed.", textZh: "没什么着装要求。你会看到穿牛仔裤的也有穿西装的。穿舒服的就好。很随意。", actionHint: "不用担心穿着", frequency: "common" },
              { textEn: "Broadway's super casual. Some people dress up, some come in jeans and sneakers. No one cares — just enjoy the show!", textZh: "百老汇超随意。有人穿正装有人穿牛仔裤运动鞋。没人在意——享受演出就好！", actionHint: "穿什么都行", frequency: "common" },
            ],
          },
          {
            speaker: "them",
            role: "引座员",
            textEn: "Welcome to the Gershwin Theatre! May I see your tickets? You're in mezzanine, row D, seats 108 and 110. Up the stairs to your right, and the usher on the mezzanine level will guide you to your seats.",
            textZh: "欢迎来到格什温剧场！请出示您的票。您在楼厅D排108和110号。右边上楼，楼厅的引座员会带您到座位。",
            keyPhrases: [
              { en: "usher", zh: "引座员" },
              { en: "mezzanine level", zh: "楼厅层" },
              { en: "guide you to your seats", zh: "带你到座位" },
            ],
            vocabNotes: {
              "usher": { meaningInContext: "在这句话里表示：剧场的引座员，帮你找到座位并维持秩序", similarUsage: "类似用法：The usher helped us find our row in the dark.（引座员帮我们在黑暗中找到了排号）" },
            },
            alternativeExpressions: [
              { textEn: "Welcome! Tickets, please? Mezzanine, row D, seats 108 and 110. Up the stairs on your right — the usher at the top will show you to your seats.", textZh: "欢迎！请出示票？楼厅D排108和110号。右边上楼——上面的引座员会带你到座位。", actionHint: "上楼找座", frequency: "common" },
              { textEn: "Hi there! Let me check your tickets. You're in the mezz — take the stairs right here. Someone up there will help you find your exact row.", textZh: "你好！让我看看票。你们在楼厅——从这里上楼。上面有人帮你找排号。", actionHint: "走右边楼梯", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you! Oh, are there programs or playbills available?",
            textZh: "谢谢！对了，有节目单或宣传册吗？",
          },
          {
            speaker: "them",
            role: "引座员",
            textEn: "Yes! The Playbill is free — there's a stack at each entrance. It has the cast list, the story synopsis, and some behind-the-scenes info. Enjoy 'Wicked' — you're going to love it!",
            textZh: "有的！Playbill节目单是免费的——每个入口都有一叠。上面有演员表、故事概要和一些幕后信息。祝您享受《魔法坏女巫》——您一定会喜欢的！",
            keyPhrases: [
              { en: "Playbill", zh: "节目单" },
              { en: "cast list", zh: "演员表" },
              { en: "synopsis", zh: "故事概要" },
              { en: "behind-the-scenes", zh: "幕后" },
            ],
            vocabNotes: {
              "Playbill": { meaningInContext: "在这句话里表示：百老汇演出的官方节目册，黄色封面，是百老汇的标志之一", similarUsage: "类似用法：I collect Playbills from every show I see.（我收集每场演出的Playbill）" },
            },
            culturalMeaning: "Playbill是百老汇的文化符号，黄色边框设计自1884年沿用至今。很多观众会收藏每场看过的Playbill作为纪念。",
            alternativeExpressions: [
              { textEn: "Grab a Playbill at the entrance — they're free! It has the cast, the story summary, behind-the-scenes stuff. Enjoy the show!", textZh: "入口处拿一份Playbill——免费的！有演员表、故事摘要、幕后信息。祝观演愉快！", actionHint: "拿一份Playbill", frequency: "common" },
              { textEn: "Playbills are by the door, totally free. Great souvenir! It has all the cast info and the plot summary. You're going to love Wicked!", textZh: "Playbill在门口，完全免费。很好的纪念品！有演员信息和剧情介绍。你一定会喜欢《魔法坏女巫》！", actionHint: "收藏Playbill", frequency: "common" },
            ],
          },
        ],
      },
      // --- Flow 2: 中场休息与观后感 ---
      {
        id: "intermission-aftershow",
        titleZh: "中场休息与观后感",
        titleEn: "Intermission & After the Show",
        description: "中场休息买饮料、演出结束后的讨论和舞台门等待",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Wow, that first act was incredible! I had chills during 'Defying Gravity'. Should we get something to drink during intermission?",
            textZh: "哇，第一幕太精彩了！《Defying Gravity》那首歌让我起鸡皮疙瘩。中场休息去买点喝的吗？",
          },
          {
            speaker: "them",
            role: "同伴",
            textEn: "Definitely! But let's hurry — the line at the bar gets really long during intermission. We only have about 15 minutes before the second act starts.",
            textZh: "一定去！但要快——中场休息时酒吧排队的人很多。第二幕开始前我们只有大约15分钟。",
            keyPhrases: [
              { en: "first act / second act", zh: "第一幕/第二幕" },
              { en: "bar", zh: "酒吧" },
            ],
            alternativeExpressions: [
              { textEn: "Yes! But let's hurry — the bar line gets insane during intermission. We only have like 15 minutes.", textZh: "一定去！但要快——中场休息酒吧排队疯了。我们只有大约15分钟。", actionHint: "赶快去排队", frequency: "common" },
              { textEn: "Let's hit the bar quick — everyone rushes there during intermission and we've only got 15 minutes till act two.", textZh: "赶紧去酒吧——中场休息大家都往那涌，离第二幕只有15分钟。", actionHint: "抓紧时间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I get a glass of Prosecco and a sparkling water, please?",
            textZh: "来一杯普罗塞克和一杯气泡水。",
          },
          {
            speaker: "them",
            role: "酒吧服务员",
            textEn: "Sure! That'll be $22 for the Prosecco and $6 for the sparkling water. Cash or card? I'd also recommend pre-ordering your intermission drinks before the show next time — you can skip the line and pick them up right away.",
            textZh: "好的！普罗塞克22美元，气泡水6美元。现金还是刷卡？下次建议演出前预点中场休息的饮料——可以免排队直接取。",
            keyPhrases: [
              { en: "pre-ordering", zh: "预点" },
              { en: "skip the line", zh: "免排队" },
              { en: "pick them up", zh: "取" },
            ],
            vocabNotes: {
              "pre-ordering": { meaningInContext: "在这句话里表示：提前下单，避免高峰排队", similarUsage: "类似用法：You can pre-order your meals on the airline app.（可以在航空公司App上预点餐食）" },
            },
            culturalNote: "百老汇剧场酒水价格偏高。很多剧场允许开演前预点中场休息的饮品，这样中场时直接去指定柜台取就行，不用排长队。",
            alternativeExpressions: [
              { textEn: "Prosecco's $22, sparkling water's $6. Pro tip — next time, pre-order your intermission drinks before the show. No waiting in line!", textZh: "普罗塞克22美元，气泡水6美元。小窍门——下次演出前预点中场饮料。不用排队！", actionHint: "下次记住预点", frequency: "common" },
              { textEn: "That's $28 total. Cash or card? FYI, you can order intermission drinks ahead of time before the show — skip the whole line situation.", textZh: "总共28美元。现金还是刷卡？顺便说一下，可以在演出前预点中场休息的饮料——完全不用排队。", actionHint: "记住这个技巧", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great tip, I'll remember that! Card, please.",
            textZh: "好建议，我记住了！刷卡。",
          },
          {
            speaker: "them",
            role: "同伴",
            textEn: "That was absolutely amazing! The special effects, the singing, everything! Do you want to try to meet the cast at the stage door?",
            textZh: "太精彩了！特效、歌唱、一切！想不想去舞台门试试见到演员？",
            keyPhrases: [
              { en: "special effects", zh: "特效" },
              { en: "cast", zh: "演员" },
              { en: "stage door", zh: "舞台门" },
            ],
            vocabNotes: {
              "stage door": { meaningInContext: "在这句话里表示：剧场后门，演员演完出来的地方，粉丝可以在这里等签名合影", similarUsage: "类似用法：We waited at the stage door for an hour and got autographs!（我们在舞台门等了一小时拿到了签名！）" },
            },
            alternativeExpressions: [
              { textEn: "That was UNREAL! The singing, the effects, everything! Should we go wait at the stage door and try to meet the cast?", textZh: "太不真实了！歌唱、特效、一切！我们去舞台门等等试试见演员？", actionHint: "赶紧去排队", frequency: "common" },
              { textEn: "I'm still shaking! That was incredible! Hey, wanna try the stage door? Sometimes you can meet the actors after.", textZh: "我还在发抖！太精彩了！嘿，要不去舞台门试试？有时候可以见到演员。", actionHint: "去等演员", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is that a thing? Can you actually meet the actors after the show?",
            textZh: "真的可以吗？演出后真的可以见到演员？",
          },
          {
            speaker: "them",
            role: "同伴",
            textEn: "Yes! It's a Broadway tradition. Most actors come out through the stage door after the show — usually 20-30 minutes after curtain call. They sign Playbills and take photos. Not every actor comes out every night, but it's worth a try!",
            textZh: "可以！这是百老汇的传统。大多数演员演出后会从舞台门出来——通常是谢幕后20-30分钟。他们会签名和合影。不是每个演员每晚都会出来，但值得一试！",
            keyPhrases: [
              { en: "Broadway tradition", zh: "百老汇传统" },
              { en: "curtain call", zh: "谢幕" },
              { en: "sign Playbills", zh: "在节目单上签名" },
              { en: "worth a try", zh: "值得一试" },
            ],
            vocabNotes: {
              "curtain call": { meaningInContext: "在这句话里表示：演出结束后演员回到舞台向观众鞠躬致谢", similarUsage: "类似用法：The lead actress got three curtain calls — the audience wouldn't stop clapping!（女主角谢了三次幕——观众不停地鼓掌！）" },
            },
            culturalMeaning: "在百老汇，观众给予\"standing ovation\"（起立鼓掌）是对演出最高的赞赏。对于特别精彩的表演，观众可能会反复要求演员谢幕。",
            alternativeExpressions: [
              { textEn: "For sure! It's a Broadway thing. Most actors come out the stage door 20-30 minutes after the show. They'll sign your Playbill and take pics. Worth the wait!", textZh: "当然可以！这是百老汇的传统。大多数演员谢幕后20-30分钟从舞台门出来。会签名和拍照。值得等！", actionHint: "准备好Playbill", frequency: "common" },
              { textEn: "Yep, it's totally a thing! The cast usually comes out the stage door after the curtain call. Not guaranteed, but most nights they do.", textZh: "对，完全可以！演员通常谢幕后从舞台门出来。不保证但大多数晚上都会。", actionHint: "去碰运气", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Let's go wait! I have my Playbill ready. How should I ask for an autograph politely?",
            textZh: "我们去等吧！Playbill准备好了。怎么礼貌地请求签名？",
          },
          {
            speaker: "them",
            role: "同伴",
            textEn: "Just be warm and genuine. Something like: 'Hi, you were absolutely incredible tonight! Would you mind signing my Playbill?' If they seem rushed, be respectful of their time. And have your phone ready for a selfie — most actors are really nice about it.",
            textZh: "真诚热情就好。比如说：'嗨，你今晚的表演太精彩了！可以在我的节目单上签个名吗？'如果他们看起来很赶，尊重他们的时间。手机准备好拍合影——大多数演员都很乐意。",
            keyPhrases: [
              { en: "would you mind signing", zh: "可以签个名吗" },
              { en: "absolutely incredible", zh: "太精彩了" },
              { en: "respectful of their time", zh: "尊重他们的时间" },
              { en: "selfie", zh: "自拍/合影" },
            ],
            alternativeExpressions: [
              { textEn: "Just be nice and genuine. Tell them how much you loved the show, and ask if they'd mind signing. Have your phone ready for a photo too — most actors are cool with it.", textZh: "真诚友好就好。告诉他们你多喜欢这场演出，问能不能签名。手机也准备好拍照——大多数演员都很乐意。", actionHint: "准备好手机", frequency: "common" },
              { textEn: "Say something like 'You were amazing tonight — would you mind signing my Playbill?' Keep it short and sweet. And don't be pushy if they're in a rush.", textZh: "比如说'你今晚太棒了——可以签我的节目单吗？'简短真诚。如果他们赶时间不要硬来。", actionHint: "礼貌请求", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Excuse me, hi! You were absolutely incredible as Elphaba tonight. The flying scene gave me chills! Would you mind signing my Playbill?",
            textZh: "不好意思，你好！你今晚演的Elphaba太精彩了。飞行那场让我起鸡皮疙瘩！可以在我的节目单上签个名吗？",
          },
          {
            speaker: "them",
            role: "演员",
            textEn: "Thank you so much, that's so sweet! Of course — here you go. Where are you visiting from?",
            textZh: "太感谢了，你太好了！当然——给你签好了。你从哪里来的？",
            alternativeExpressions: [
              { textEn: "Aw, that means so much! Of course I'll sign it. Where are you guys from?", textZh: "太暖心了！当然签。你们从哪来的？", actionHint: "告诉来自哪里", frequency: "common" },
              { textEn: "Thank you, that's so kind! Here, let me sign that for you. Are you visiting New York?", textZh: "谢谢你，太好了！来，我帮你签。你们是来纽约旅游的吗？", actionHint: "回答并聊天", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "We're from China — this is our first time seeing a Broadway show. It was truly magical. Could we take a quick photo together?",
            textZh: "我们从中国来——这是我们第一次看百老汇。真的太神奇了。可以快速合个影吗？",
          },
          {
            speaker: "them",
            role: "演员",
            textEn: "Your first Broadway show? I'm so honored it was ours! Of course, let's take a photo. Say 'Wicked'!",
            textZh: "第一次看百老汇？很荣幸是我们的剧！当然，来合影。说'Wicked'！",
            keyPhrases: [
              { en: "I'm so honored", zh: "我很荣幸" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely! Scoot in closer. There we go — great photo!", textZh: "当然！靠近一点。好了——拍得好！", actionHint: "配合拍照", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 极限运动 / 冒险活动 ====================
  {
    id: "entertainment-adventure-sports",
    category: "entertainment",
    titleZh: "极限运动 / 冒险活动",
    titleEn: "Adventure Sports & Activities",
    description: "参加跳伞、蹦极、漂流等冒险类活动",
    otherRole: "教练 / 活动组织者",
    otherRoleIcon: "flag",
    journeyPhase: "daily",
    priority: "likely",
    flows: [
      {
        id: "booking-briefing",
        titleZh: "预订与安全说明",
        titleEn: "Booking & Safety Briefing",
        description: "预订冒险活动并了解安全须知",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to book a tandem skydiving experience. Is there availability tomorrow morning?",
            textZh: "你好，我想预订双人跳伞体验。明天上午有名额吗？",
            vocabNotes: {
              "tandem skydiving": { meaningInContext: "双人跳伞——和教练绑在一起跳，适合初学者", similarUsage: "We did a tandem jump over the beach." },
            },
          },
          {
            speaker: "them",
            role: "组织者",
            textEn: "Yes, we have spots at 9 AM and 11 AM. The tandem jump is $299 per person, which includes the instructor, all equipment, and a 60-second freefall from 15,000 feet. If you want video and photos, that's an extra $99.",
            textZh: "有的，9点和11点都有名额。双人跳伞每人299美元，包含教练、全部装备和从15000英尺自由落体60秒。如果要视频和照片加99美元。",
            keyPhrases: [
              { en: "spots", zh: "名额" },
              { en: "freefall", zh: "自由落体" },
              { en: "15,000 feet", zh: "15000英尺（约4572米）" },
              { en: "equipment", zh: "装备" },
            ],
            alternativeExpressions: [
              { textEn: "We've got 9 AM and 11 AM tomorrow. Tandem jump's $299 — that's the instructor, gear, everything. 60 seconds of freefall from 15,000 feet. Video package is extra $99.", textZh: "明天9点和11点都有。双人跳299——包含教练、装备、所有。15000英尺自由落体60秒。视频套餐加99。", actionHint: "选时间", frequency: "common" },
              { textEn: "Yep, spots at 9 and 11. $299 a person for the tandem experience. Add video and photos for $99 — trust me, you'll want those.", textZh: "有的，9点和11点。双人跳每人299。加99的视频照片——相信我，你会想要的。", actionHint: "加视频套餐", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the 9 AM slot with the video package. Is there a weight limit or any restrictions?",
            textZh: "我要9点的，加视频套餐。有体重限制或什么限制条件吗？",
          },
          {
            speaker: "them",
            role: "组织者",
            textEn: "The weight limit is 230 pounds — that's about 104 kilos. You must be at least 18. No recent surgeries, no heart conditions. You'll need to sign a liability waiver when you arrive. Also, wear comfortable clothes and closed-toe shoes — no sandals.",
            textZh: "体重限制230磅——大约104公斤。必须满18岁。不能有近期手术或心脏病。到了要签免责声明。穿舒适衣服和包头鞋——不要穿凉鞋。",
            keyPhrases: [
              { en: "weight limit", zh: "体重限制" },
              { en: "liability waiver", zh: "免责声明/弃权书" },
              { en: "closed-toe shoes", zh: "包头鞋" },
              { en: "heart conditions", zh: "心脏病" },
            ],
            culturalNote: "在欧美参加极限运动前都需要签免责声明（waiver）。这是法律要求，不签不能参加。仔细阅读条款，了解风险。",
            alternativeExpressions: [
              { textEn: "Max weight is 230 pounds, about 104 kilos. Must be 18+, no heart problems, no recent surgeries. Sign a waiver when you arrive. Wear comfy clothes and closed-toe shoes.", textZh: "最大体重230磅约104公斤。必须18+，没心脏病，没近期手术。到了签免责声明。穿舒服衣服和包头鞋。", actionHint: "确认符合条件", frequency: "common" },
              { textEn: "230 pounds max, 18 or older. No flip-flops — closed-toe shoes only. You'll sign a waiver on arrival. Any medical conditions I should know about?", textZh: "最重230磅，满18岁。不能穿人字拖——只能包头鞋。到了签免责声明。有什么健康问题要告诉我吗？", actionHint: "说明健康状况", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "No problem. I'm 75 kilos and healthy. Should I eat before the jump?",
            textZh: "没问题。我75公斤，身体健康。跳之前要吃东西吗？",
          },
          {
            speaker: "them",
            role: "组织者",
            textEn: "Have a light breakfast — nothing too heavy. And don't drink alcohol the night before. Arrive 30 minutes early for the safety briefing and gear fitting. Any questions?",
            textZh: "吃个简单的早餐——别吃太饱。前一晚不要喝酒。提前30分钟到，有安全培训和装备调试。还有什么问题吗？",
            keyPhrases: [
              { en: "safety briefing", zh: "安全培训" },
              { en: "gear fitting", zh: "装备调试" },
              { en: "light breakfast", zh: "简单的早餐" },
            ],
            alternativeExpressions: [
              { textEn: "Eat light — nothing greasy. Skip the booze tonight. Show up 30 minutes early for the briefing and gear fitting. Questions?", textZh: "吃清淡——别吃油腻的。今晚别喝酒。提前30分钟来做培训和装备调试。有问题吗？", actionHint: "记住注意事项", frequency: "common" },
              { textEn: "A light meal before is fine — just nothing heavy. No alcohol the night before. Be here at 8:30 for the safety briefing and gear setup.", textZh: "之前吃点清淡的没问题——别吃太撑。前一晚不要喝酒。8:30到做安全培训和装备准备。", actionHint: "安排好时间", frequency: "common" },
            ],
          },
        ],
      },
      {
        id: "during-activity",
        titleZh: "活动过程中",
        titleEn: "During the Activity",
        description: "跳伞前的最后准备和空中体验",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "教练",
            textEn: "OK, I'm your tandem instructor, Jake. I've done over 5,000 jumps. Here's what's going to happen: we'll be attached at four points. When I tap your shoulder, arch your back and spread your arms wide. Ready?",
            textZh: "好的，我是你的双人跳教练Jake。我跳过5000多次了。流程是这样的：我们在四个点连接。我拍你肩膀时，弓背然后双臂张开。准备好了吗？",
            keyPhrases: [
              { en: "tandem instructor", zh: "双人跳教练" },
              { en: "attached", zh: "连接的" },
              { en: "arch your back", zh: "弓背/挺胸" },
              { en: "spread your arms", zh: "张开双臂" },
            ],
            alternativeExpressions: [
              { textEn: "I'm Jake, your instructor. 5,000 jumps under my belt. We're clipped together at four points. When I tap your shoulder, arch back and spread out. Simple!", textZh: "我是Jake，你的教练。跳了5000多次了。我们在四个点连接。我拍你肩膀时弓背张开双臂。很简单！", actionHint: "记住动作", frequency: "common" },
              { textEn: "Hey, I'm Jake — done this over 5,000 times. You're strapped to me at four connection points. On my signal, lean back and spread your arms wide. Ready?", textZh: "嘿，我是Jake——做过5000多次了。你在四个点和我绑着。我发信号时往后仰张开双臂。准备好了？", actionHint: "准备好", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm nervous but excited! What if I want to stop halfway?",
            textZh: "又紧张又兴奋！如果中途想停下来怎么办？",
          },
          {
            speaker: "them",
            role: "教练",
            textEn: "Once we're out the door, there's no going back — but trust me, everyone loves it once they're flying. Just breathe and enjoy. The parachute opens automatically at 5,000 feet. After that, we have a nice peaceful glide down for about 5 minutes. You can even steer us if you want!",
            textZh: "出了舱门就没法回头了——但相信我，一飞起来谁都喜欢。正常呼吸享受就好。降落伞在5000英尺自动打开。之后我们会平稳滑翔大约5分钟。你甚至可以操控方向！",
            keyPhrases: [
              { en: "parachute", zh: "降落伞" },
              { en: "opens automatically", zh: "自动打开" },
              { en: "glide down", zh: "滑翔降落" },
              { en: "steer", zh: "操控方向" },
            ],
            alternativeExpressions: [
              { textEn: "Once you're out the door, it's happening! But trust me, everyone loves it. Just breathe. Parachute opens at 5,000 feet, then we float down for about 5 minutes. You can even steer!", textZh: "出了门就没有回头路了！但相信我，所有人都喜欢。正常呼吸就好。5000英尺降落伞打开，然后飘5分钟。你甚至可以操控方向！", actionHint: "放松享受", frequency: "common" },
              { textEn: "No turning back once we jump — but that's the fun part! Freefall's about a minute, then the chute opens and we have a beautiful 5-minute glide. You're gonna love it.", textZh: "跳了就没法回头——但那才是精彩的！自由落体大约一分钟，然后伞打开我们美美地飘5分钟。你会爱上的。", actionHint: "享受自由落体", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That was absolutely incredible! I can't believe I just did that! How do I get the video?",
            textZh: "太不可思议了！不敢相信我刚刚做了这个！怎么拿视频？",
          },
          {
            speaker: "them",
            role: "教练",
            textEn: "You did amazing! The video team will have everything edited within an hour. They'll send you a link to download it. You can also pick up a USB drive at the front desk. Congratulations on your first skydive!",
            textZh: "你太棒了！视频团队一个小时内就能剪辑好。会发一个下载链接给你。也可以在前台拿U盘。恭喜你完成第一次跳伞！",
            keyPhrases: [
              { en: "edited", zh: "剪辑好的" },
              { en: "download link", zh: "下载链接" },
              { en: "USB drive", zh: "U盘" },
            ],
            alternativeExpressions: [
              { textEn: "You crushed it! The video crew will have everything ready in about an hour. They'll send you a download link, or grab a USB at the front desk. Congrats!", textZh: "你太棒了！视频组大约一小时搞定。会发下载链接给你，或者去前台拿U盘。恭喜！", actionHint: "等待视频", frequency: "common" },
              { textEn: "That was awesome! Your video will be edited within the hour — check your email for the link. You can also get a USB drive up front. Congrats on your first jump!", textZh: "太赞了！视频一小时内剪好——查邮箱看链接。也可以去前台拿U盘。恭喜第一次跳伞！", actionHint: "查收邮件", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 导游 / 跟团游 ====================
  {
    id: "entertainment-tour-guide",
    category: "entertainment",
    titleZh: "跟团游 / 导游沟通",
    titleEn: "Guided Tour",
    description: "参加当地的步行团、巴士团或私人导游行程",
    otherRole: "导游",
    otherRoleIcon: "flag",
    journeyPhase: "daily",
    priority: "must",
    flows: [
      {
        id: "joining-tour",
        titleZh: "报名参团",
        titleEn: "Joining a Tour",
        description: "预订并参加当地的步行观光团",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, do you still have spots for the historical walking tour this afternoon?",
            textZh: "你好，今天下午的历史步行团还有名额吗？",
          },
          {
            speaker: "them",
            role: "导游",
            textEn: "Yes! We have room for two more. The tour starts at 2 PM from this exact spot. It's a 2-hour walk covering the old town, the cathedral, and the waterfront. $35 per person.",
            textZh: "有的！还能加两个人。下午2点就在这个位置出发。步行2小时，走老城区、大教堂和滨水区。每人35美元。",
            keyPhrases: [
              { en: "walking tour", zh: "步行团" },
              { en: "old town", zh: "老城区" },
              { en: "cathedral", zh: "大教堂" },
              { en: "waterfront", zh: "滨水区" },
            ],
            alternativeExpressions: [
              { textEn: "We've got room! Tour leaves at 2 from right here. Two-hour walk through old town, the cathedral, and the waterfront. $35 per person.", textZh: "有位置！2点从这里出发。两小时走老城区、大教堂和滨水区。每人35美元。", actionHint: "了解路线", frequency: "common" },
              { textEn: "Two spots left! We start at 2 PM, right from this corner. It's a 2-hour walking tour — old town, cathedral, and the waterfront. Thirty-five bucks.", textZh: "还剩两个名额！下午2点从这个路口出发。2小时步行团——老城区、大教堂、滨水区。35块。", actionHint: "赶紧报名", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds great. Is the tour in English? And how big is the group?",
            textZh: "听起来不错。是英语讲解吗？团有多少人？",
          },
          {
            speaker: "them",
            role: "导游",
            textEn: "Yes, all in English. We keep the groups small — maximum 15 people, so everyone can hear and ask questions. We also make a few stops where you can take photos. Comfortable walking shoes are a must — there are some cobblestone streets.",
            textZh: "是的，全程英语。我们控制团的规模——最多15人，这样每个人都能听清楚和提问。途中会停几次让大家拍照。一定要穿舒适的走路鞋——有些鹅卵石街道。",
            keyPhrases: [
              { en: "keep the groups small", zh: "控制团的规模" },
              { en: "cobblestone streets", zh: "鹅卵石街道" },
              { en: "comfortable walking shoes", zh: "舒适的走路鞋" },
            ],
            alternativeExpressions: [
              { textEn: "All English, yeah. We keep it small — 15 max, so everyone can hear. Wear good walking shoes — some of the streets are cobblestone. We make photo stops too.", textZh: "全程英语，是的。我们控制人数——最多15人，大家都能听清。穿好走路鞋——有些路是鹅卵石。途中会停下来拍照。", actionHint: "穿好鞋子", frequency: "common" },
              { textEn: "Yep, English only. Small group — 15 people max. Make sure you've got comfy shoes on, there's some uneven ground. We'll stop for photos along the way.", textZh: "是的，只有英语。小团——最多15人。确保穿舒服的鞋，有些地面不平。途中会停下来拍照。", actionHint: "检查鞋子", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll sign up for one. Do you accept credit cards?",
            textZh: "我报名一个人。可以刷信用卡吗？",
          },
          {
            speaker: "them",
            role: "导游",
            textEn: "Cash or Venmo preferred, but I do have a card reader. Don't forget to bring water — it's warm today. And if you have any questions during the tour, just ask! That's what I'm here for.",
            textZh: "最好现金或Venmo，不过我有刷卡器。别忘了带水——今天比较热。导览过程中有任何问题随时问！这就是我在这里的意义。",
            keyPhrases: [
              { en: "Venmo", zh: "美国常用的手机转账App" },
              { en: "card reader", zh: "刷卡器" },
            ],
            alternativeExpressions: [
              { textEn: "Cash or Venmo is easiest, but I've got a card reader too. Bring water — it's hot today. And ask all the questions you want during the tour!", textZh: "现金或Venmo最方便，不过我也有刷卡器。带水——今天很热。导览中随便提问！", actionHint: "带上水", frequency: "common" },
              { textEn: "I take cash, Venmo, or card. Don't forget to hydrate — grab a water bottle before we go. And feel free to ask anything during the walk!", textZh: "现金、Venmo或刷卡都行。别忘了带水——出发前买瓶水。途中有什么问题随时问！", actionHint: "准备出发", frequency: "common" },
            ],
          },
        ],
      },
      {
        id: "during-tour",
        titleZh: "导览中互动",
        titleEn: "Interacting During the Tour",
        description: "参团过程中向导游提问和互动",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "导游",
            textEn: "And this building right here was built in 1823. It was originally a merchant's warehouse. If you look up, you can still see the original iron hooks they used to hoist cargo to the upper floors. Any questions so far?",
            textZh: "这栋建筑建于1823年。最初是商人的仓库。抬头看，还能看到当年用来把货物吊到楼上的铁钩。到目前为止有什么问题吗？",
            keyPhrases: [
              { en: "merchant's warehouse", zh: "商人的仓库" },
              { en: "iron hooks", zh: "铁钩" },
              { en: "hoist cargo", zh: "吊起货物" },
            ],
            alternativeExpressions: [
              { textEn: "So this building here is from 1823 — originally a warehouse for merchants. Look up — see those iron hooks? They used them to pull cargo up to the upper floors. Questions?", textZh: "这栋建筑是1823年的——最初是商人的仓库。抬头看——看到那些铁钩了吗？用来把货物吊到楼上的。有问题吗？", actionHint: "抬头看看", frequency: "common" },
              { textEn: "Check out this building — 1823, used to be a merchant's warehouse. If you look up, you can still see the original hooks they used to hoist cargo. Cool, right?", textZh: "看看这栋建筑——1823年，以前是商人的仓库。抬头看还能看到当年吊货物的钩子。酷吧？", actionHint: "拍个照", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes — how long has this area been a tourist district? Was it always like this?",
            textZh: "有一个——这片区域成为旅游区多久了？一直都是这样的吗？",
          },
          {
            speaker: "them",
            role: "导游",
            textEn: "Great question! Actually, this area was pretty run-down until the 1990s. The city invested heavily in restoration — they preserved the historical facades but modernized the interiors. Now it's one of the most popular neighborhoods. You'll notice that mix of old and new everywhere here.",
            textZh: "好问题！其实这片区域在1990年代之前挺破旧的。城市在修复上投入了大量资金——保留了历史外观但内部做了现代化改造。现在是最受欢迎的街区之一。你会注意到这里到处都是新旧交融。",
            keyPhrases: [
              { en: "run-down", zh: "破旧的" },
              { en: "restoration", zh: "修复" },
              { en: "facades", zh: "外观/立面" },
              { en: "modernized", zh: "现代化改造" },
            ],
            alternativeExpressions: [
              { textEn: "Great question! This whole area was run-down till the '90s. The city poured money into restoration — kept the old facades, modernized everything inside. Now it's one of the hottest neighborhoods.", textZh: "好问题！整片区域到90年代还很破旧。城市投了大量钱修复——保留了旧外观，内部全部现代化。现在是最火的街区之一。", actionHint: "注意新旧对比", frequency: "common" },
              { textEn: "Believe it or not, this was a pretty rough area until the 1990s. Huge restoration project — preserved the historic look but updated the insides. Now it's the most popular part of town.", textZh: "信不信由你，这里到1990年代还挺破败的。大规模修复项目——保留了历史外观但更新了内部。现在是城里最受欢迎的地方。", actionHint: "对比今昔", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's fascinating. Can you recommend a good local restaurant in this area for dinner?",
            textZh: "很有意思。能推荐这附近一家好的当地餐厅吃晚饭吗？",
          },
          {
            speaker: "them",
            role: "导游",
            textEn: "Absolutely! There's a family-run place called 'The Old Mill' just around the corner. They serve traditional food with a modern twist — and the prices are very reasonable for tourists. Tell them Marco sent you and you might get a free dessert!",
            textZh: "当然！拐角处有一家家族经营的叫'The Old Mill'。他们做传统菜式加现代创新——价格对游客来说很合理。说Marco介绍来的可能会送一份甜点！",
            keyPhrases: [
              { en: "family-run", zh: "家族经营的" },
              { en: "modern twist", zh: "现代创新/新花样" },
              { en: "reasonable", zh: "合理的" },
            ],
            alternativeExpressions: [
              { textEn: "There's a great family-run spot called The Old Mill — right around the corner. Traditional food with a twist. Tell them Marco sent you, might get a free dessert!", textZh: "拐角有家很好的家族餐厅叫The Old Mill。传统菜式加创新。说Marco介绍来的可能送甜点！", actionHint: "记住餐厅名", frequency: "common" },
              { textEn: "Definitely check out The Old Mill, just down the street. Local food, great prices. Mention my name — they usually hook my tour guests up with something extra.", textZh: "一定要去看看The Old Mill，就在街上。本地菜，价格好。提我的名——他们通常会给我带的游客一些额外的。", actionHint: "晚上去吃", frequency: "common" },
            ],
          },
        ],
      },
      {
        id: "private-tour",
        titleZh: "预订私人导游",
        titleEn: "Booking a Private Guide",
        description: "预订一整天的私人导游，定制行程",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn: "I'm interested in hiring a private guide for a full day. We're a family of four with two young kids. Can you customize the tour?",
            textZh: "我想请一个私人导游一整天。我们一家四口有两个小孩。能定制行程吗？",
          },
          {
            speaker: "them",
            role: "导游公司",
            textEn: "Of course! A full-day private guide is $350 for up to 5 people. We can absolutely customize the itinerary. For families with young kids, I'd suggest the interactive history tour with hands-on activities, plus the chocolate factory visit and a stop at the playground park. Does that sound good?",
            textZh: "当然！全天私人导游5人以内350美元。行程完全可以定制。有小孩的家庭，我建议互动历史游加手工活动，再加巧克力工厂参观和一个游乐场。听起来怎么样？",
            keyPhrases: [
              { en: "customize the itinerary", zh: "定制行程" },
              { en: "hands-on activities", zh: "动手活动/互动体验" },
              { en: "chocolate factory", zh: "巧克力工厂" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely! $350 for up to 5 people, totally customizable. With young kids, I'd suggest the interactive history tour, chocolate factory, and a playground stop. Sound good?", textZh: "当然！5人以内350美元，完全可以定制。有小孩的话建议互动历史游、巧克力工厂和一个游乐场。怎么样？", actionHint: "确认行程", frequency: "common" },
              { textEn: "Of course! A full day is $350 for your family. We can totally build the itinerary around your kids — fun stuff with hands-on activities.", textZh: "当然！全天350美元你们全家。我们完全可以围绕你们孩子来安排——有趣的动手活动。", actionHint: "讨论细节", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's perfect. Does the price include transportation and entrance fees?",
            textZh: "太好了。价格包含交通和门票吗？",
          },
          {
            speaker: "them",
            role: "导游公司",
            textEn: "The guide fee includes transportation in a comfortable minivan with child seats. Entrance fees are extra — budget about $80 total for all four of you. Lunch is on your own, but your guide will recommend the best local spots. We can also arrange a picnic lunch for $25 per person if you prefer.",
            textZh: "导游费包含舒适小巴接送和儿童座椅。门票另付——四个人预算大约总共80美元。午餐自理，但导游会推荐最好的当地餐厅。如果你们想的话也可以安排野餐午餐，每人25美元。",
            keyPhrases: [
              { en: "minivan", zh: "小巴/商务车" },
              { en: "child seats", zh: "儿童座椅" },
              { en: "entrance fees", zh: "门票" },
              { en: "on your own", zh: "自理" },
            ],
            alternativeExpressions: [
              { textEn: "The $350 covers the guide and transportation with a kid-friendly van. Entrance fees are extra — about $80 total. Lunch is on you, but we can set up a picnic for $25 a head.", textZh: "350包含导游和带儿童座椅的车。门票另付——总共大约80。午餐自理，但可以安排野餐每人25。", actionHint: "考虑野餐", frequency: "common" },
              { textEn: "Guide and transport included — with child seats. Entrance fees are separate, roughly $80 for all four. Your guide picks the best lunch spots, or we can arrange a picnic for $25 per person.", textZh: "导游和交通包含——有儿童座椅。门票另算，四个人大约80。导游会推荐最好的午餐地点，或者每人25安排野餐。", actionHint: "选午餐方式", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "We'll do the picnic lunch — the kids would love that. What time should we be ready in the morning?",
            textZh: "安排野餐午餐吧——孩子们会喜欢的。早上几点准备好？",
          },
          {
            speaker: "them",
            role: "导游公司",
            textEn: "Your guide will pick you up at your hotel at 9 AM. The tour ends around 5 PM. Your guide speaks English and Mandarin, so communication won't be an issue for your family. Please share your hotel address and I'll confirm everything by email tonight.",
            textZh: "导游早上9点到你们酒店接。下午5点左右结束。你们的导游会说英语和普通话，沟通没问题。请把酒店地址发给我，今晚我邮件确认所有细节。",
            keyPhrases: [
              { en: "pick you up", zh: "来接你们" },
              { en: "Mandarin", zh: "普通话" },
              { en: "confirm everything", zh: "确认所有细节" },
            ],
            alternativeExpressions: [
              { textEn: "Your guide will be at your hotel at 9 AM. Tour wraps around 5 PM. Bonus — your guide speaks Mandarin too. Just send me the hotel address and I'll confirm everything tonight.", textZh: "导游早上9点到你们酒店。大约下午5点结束。额外好处——你们的导游也会说普通话。把酒店地址发给我今晚确认。", actionHint: "发送酒店地址", frequency: "common" },
              { textEn: "9 AM pickup from your hotel, done by about 5. Good news — your guide speaks English and Mandarin, so the whole family's covered. Email me your hotel details and I'll confirm.", textZh: "早上9点酒店接，大约5点结束。好消息——导游会说英语和普通话，全家都搞定。把酒店信息发我确认。", actionHint: "发邮件确认", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 水上乐园 ====================
  {
    id: "entertainment-water-park",
    category: "entertainment",
    titleZh: "水上乐园",
    titleEn: "Water Park",
    description: "在水上乐园玩水上滑梯、漂流等项目",
    otherRole: "售票员 / 救生员",
    otherRoleIcon: "wave",
    journeyPhase: "daily",
    priority: "likely",
    flows: [
      {
        id: "entry-facilities",
        titleZh: "入园与设施介绍",
        titleEn: "Entry & Facility Introduction",
        description: "买票入园，了解园内设施",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Two adults and one child, please. How much is it?",
            textZh: "两个大人一个小孩。多少钱？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "Adults are $45 each, and children under 12 are $30. That's $120 total. Would you like to add the all-day cabana rental for $75? It includes a shaded tent, lounge chairs, and a safe for your valuables.",
            textZh: "成人每人45美元，12岁以下儿童30美元。总共120美元。要加全天凉棚吗？75美元，包含遮阳帐篷、躺椅和保险箱。",
            keyPhrases: [
              { en: "cabana", zh: "凉棚/遮阳帐篷" },
              { en: "lounge chairs", zh: "躺椅" },
              { en: "safe", zh: "保险箱" },
              { en: "valuables", zh: "贵重物品" },
            ],
            alternativeExpressions: [
              { textEn: "Adults are $45, kids under 12 are $30. That's $120 for you guys. Want to add a cabana? $75 for the whole day — shaded tent, chairs, and a safe for your stuff.", textZh: "成人45，12岁以下30。你们总共120。要加凉棚吗？全天75——遮阳帐篷、椅子和存贵重物品的保险箱。", actionHint: "考虑加凉棚", frequency: "common" },
              { textEn: "$45 for adults, $30 for kids. We've also got all-day cabanas for $75 — includes a shaded spot, lounge chairs, and a lockbox. Super worth it on a hot day.", textZh: "成人45，儿童30。也有全天凉棚75——包含遮阳区、躺椅和保险箱。大热天超值。", actionHint: "买凉棚", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, we'll take the cabana. Are there lockers available too?",
            textZh: "好的，加凉棚。也有储物柜吗？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "Yes, lockers are $10 for all day. Here's your wristband — it works as your entry pass, locker key, and you can load money onto it for food and drinks so you don't need to carry cash. The lazy river is straight ahead, water slides are to the left, and the wave pool is on the right.",
            textZh: "有的，储物柜全天10美元。这是你的手环——可以用来入园、开储物柜，还能充值买吃喝的，不用带现金。漂流河往前直走，水滑梯在左边，造浪池在右边。",
            keyPhrases: [
              { en: "wristband", zh: "手环" },
              { en: "lazy river", zh: "漂流河" },
              { en: "water slides", zh: "水滑梯" },
              { en: "wave pool", zh: "造浪池" },
            ],
            alternativeExpressions: [
              { textEn: "Lockers are $10 all day. Here's your wristband — it's your ticket, locker key, and you can load cash on it for food. Lazy river's straight ahead, slides left, wave pool right.", textZh: "储物柜全天10。手环给你——是门票、储物柜钥匙，还能充值买吃的。漂流河往前直走，滑梯左边，造浪池右边。", actionHint: "不要弄丢手环", frequency: "common" },
              { textEn: "Here's your wristband — it does everything. Entry, locker, even pay for food. Lockers are ten bucks for the day. Water slides to the left, wave pool right, lazy river straight ahead. Have fun!", textZh: "手环给你——什么都能用。入场、储物柜、甚至买吃的。储物柜全天十块。水滑梯左边，造浪池右边，漂流河往前。玩得开心！", actionHint: "规划路线", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Are there any height restrictions for the slides? My son is about 120 cm.",
            textZh: "滑梯有身高限制吗？我儿子大约120厘米。",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "Most slides require a minimum height of 42 inches — that's about 107 cm. So he should be fine for most of them! The extreme slides require 48 inches, which is about 122 cm. There's a height measuring station near each slide entrance. The kids' splash zone has no height requirement.",
            textZh: "大多数滑梯要求最低42英寸——大约107厘米。他大部分都能玩！极限滑梯要求48英寸，大约122厘米。每个滑梯入口旁有量身高的。儿童戏水区没有身高要求。",
            keyPhrases: [
              { en: "height restrictions", zh: "身高限制" },
              { en: "minimum height", zh: "最低身高" },
              { en: "measuring station", zh: "量身高处" },
              { en: "splash zone", zh: "戏水区" },
            ],
            alternativeExpressions: [
              { textEn: "Most slides need 42 inches minimum — that's about 107 cm. Your son should be fine for most! The extreme ones are 48 inches. There's a measuring spot at each entrance.", textZh: "大多数滑梯最低42英寸——约107厘米。你儿子大部分都能玩！极限的要48英寸。每个入口有量身高的。", actionHint: "去量身高", frequency: "common" },
              { textEn: "At 120 cm, he's good for most slides — the minimum is usually 107 cm. The big extreme ones need 122 cm, so he's right on the edge. Kids' splash zone has no restrictions.", textZh: "120厘米的话大部分滑梯没问题——最低通常107厘米。极限的要122厘米，他刚好在边缘。儿童戏水区没限制。", actionHint: "量一下确认", frequency: "common" },
            ],
          },
        ],
      },
      {
        id: "safety-incident",
        titleZh: "安全须知与意外",
        titleEn: "Safety Rules & Incidents",
        description: "了解安全规则，处理小意外",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "救生员",
            textEn: "Excuse me, sir! No running on the pool deck, please. The surface is slippery when wet.",
            textZh: "先生！请不要在泳池边跑。地面湿了很滑。",
            keyPhrases: [
              { en: "pool deck", zh: "泳池边/泳池甲板" },
              { en: "slippery when wet", zh: "湿了很滑" },
            ],
            alternativeExpressions: [
              { textEn: "Hey, no running please! It's super slippery out here when it's wet.", textZh: "嘿，请不要跑！地面湿了特别滑。", actionHint: "放慢速度", frequency: "common" },
              { textEn: "Walk, please! The deck gets really slick when it's wet — we don't want anyone getting hurt.", textZh: "请走路！泳池边湿了会很滑——我们不想让人受伤。", actionHint: "注意安全", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sorry about that! My son was excited. He actually scraped his knee. Do you have a first aid station?",
            textZh: "抱歉！我儿子太兴奋了。他膝盖擦破了。有急救站吗？",
          },
          {
            speaker: "them",
            role: "救生员",
            textEn: "No worries — let me take a look. It's just a minor scrape. I'll clean it and put a waterproof bandage on it. The first aid station is by the main entrance if you need anything else. We also have ice packs there.",
            textZh: "没关系——我看看。只是轻微擦伤。我清洗一下贴个防水创可贴。急救站在大门旁，有需要可以去。那里也有冰袋。",
            keyPhrases: [
              { en: "minor scrape", zh: "轻微擦伤" },
              { en: "waterproof bandage", zh: "防水创可贴" },
              { en: "first aid station", zh: "急救站" },
              { en: "ice packs", zh: "冰袋" },
            ],
            alternativeExpressions: [
              { textEn: "Let me look — it's just a small scrape. I'll clean it up and put a waterproof Band-Aid on it. First aid station's by the main entrance if you need anything else.", textZh: "让我看看——只是小擦伤。我清洗一下贴个防水创可贴。急救站在大门旁如果需要别的。", actionHint: "让他处理", frequency: "common" },
              { textEn: "No worries, happens all the time. That's just a minor scrape — I'll patch it up with a waterproof bandage. Good as new!", textZh: "没事，经常有。只是轻微擦伤——我贴个防水创可贴。跟新的一样！", actionHint: "安心继续玩", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much. Can he still go in the water with the bandage on?",
            textZh: "太感谢了。贴着创可贴还能下水吗？",
          },
          {
            speaker: "them",
            role: "救生员",
            textEn: "Yes, this bandage is waterproof so it'll stay on. Just check it every hour or so to make sure it's still sealed. And remember — always walk, don't run! Have a great time!",
            textZh: "可以，这个创可贴是防水的，能粘住。每隔一小时左右检查一下确保还贴着。还有记住——走路，不要跑！玩得开心！",
            keyPhrases: [
              { en: "sealed", zh: "密封的/粘住的" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, totally fine — it's waterproof, it'll hold. Just check on it every now and then. And remember — walk, don't run! Have a good time!", textZh: "可以，完全没问题——防水的，能粘住。隔一会儿检查一下。还有记住——走路别跑！玩得开心！", actionHint: "定期检查", frequency: "common" },
              { textEn: "This bandage is made for water — he's good to go. Just peek at it every hour or so. And please, walk this time! Have fun!", textZh: "这个创可贴就是防水的——没问题。每隔一小时左右看一下就行。还有这次请走路！玩得开心！", actionHint: "注意走路", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },
];
