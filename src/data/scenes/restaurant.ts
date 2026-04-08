import type { PresetScene } from "../scene-types";

// ============================================================
// 餐厅场景 — Restaurant Scenes
// 覆盖：电话订位、到店点餐、过敏/忌口、结账
// ============================================================

export const RESTAURANT_SCENES: PresetScene[] = [
  // ==================== 电话订位 ====================
  {
    id: "restaurant-reservation",
    category: "restaurant",
    titleZh: "电话订位",
    titleEn: "Phone Reservation",
    description: "打电话到餐厅预订位置，包括确认人数、时间和特殊要求",
    otherRole: "餐厅前台/接线员",
    otherRoleIcon: "phone",
    flows: [
      // --- Flow 1: 标准订位（有位置）---
      {
        id: "standard",
        titleZh: "标准订位",
        titleEn: "Standard Reservation",
        description: "打电话订位，一切顺利",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "接线",
            textEn: "Thank you for calling The Garden Restaurant. How may I help you?",
            textZh: "感谢致电花园餐厅。有什么可以帮您？",
            keyPhrases: [
              { en: "thank you for calling", zh: "感谢致电" },
              { en: "how may I help you", zh: "有什么可以帮您" },
            ],
            alternativeExpressions: [
              { textEn: "Good evening, Garden Restaurant. How can I help?", textZh: "晚上好，花园餐厅。有什么需要？", actionHint: "直接说想订位", frequency: "common" },
              { textEn: "Thanks for calling! Are you looking to make a reservation?", textZh: "感谢来电！您是要订位吗？", actionHint: "确认并说明人数和时间", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Hi, I'd like to make a reservation for dinner tonight.",
            textZh: "你好，我想预订今晚的晚餐。",
            culturalNote: "\"make a reservation\" 和 \"book a table\" 都是标准说法。",
            casualVersion: "Hey, do you have any tables available tonight?",
          },
          {
            speaker: "them",
            role: "接线",
            textEn: "Of course! How many guests will there be?",
            textZh: "当然！请问几位？",
            variations: [
              { textEn: "Sure! For how many people?", textZh: "好的！几个人？" },
              { textEn: "Absolutely! How large is your party?", textZh: "没问题！您一行几位？" },
            ],
            keyPhrases: [
              { en: "how many guests", zh: "几位客人" },
              { en: "how large is your party", zh: "一行几位" },
            ],
            alternativeExpressions: [
              { textEn: "Great! How many people will be dining?", textZh: "好的！几位用餐？", actionHint: "告诉对方人数", frequency: "common" },
              { textEn: "And how many will that be for?", textZh: "请问几位呢？", actionHint: "直接回答人数即可", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Four people.",
            textZh: "四个人。",
          },
          {
            speaker: "them",
            role: "接线",
            textEn: "And what time would you like to come in?",
            textZh: "您想几点来？",
            alternativeExpressions: [
              { textEn: "What time works best for you?", textZh: "您几点方便？", actionHint: "说出希望的时间", frequency: "common" },
              { textEn: "What time were you thinking?", textZh: "您想约几点？", actionHint: "告诉对方期望的用餐时间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Around 7 PM, if possible.",
            textZh: "大概晚上7点，如果可以的话。",
          },
          {
            speaker: "them",
            role: "接线",
            textEn: "Let me check... Yes, I have a table for four at 7 PM. May I have a name for the reservation?",
            textZh: "让我查一下……好的，7点有四人桌。请问预订的名字？",
            keyPhrases: [
              { en: "table for four", zh: "四人桌" },
              { en: "name for the reservation", zh: "预订的名字" },
            ],
            alternativeExpressions: [
              { textEn: "We've got a table at 7. Can I get a name?", textZh: "7点有桌子。请问贵姓？", actionHint: "告诉对方你的名字", frequency: "common" },
              { textEn: "Perfect, 7 PM for four. And what name should I put it under?", textZh: "好的，7点四位。预订放在谁的名下？", actionHint: "说名字并拼写", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Wang. W-A-N-G.",
            textZh: "王。W-A-N-G。",
            culturalNote: "拼出名字可以避免误解，尤其是非英语名字。",
          },
          {
            speaker: "them",
            role: "接线",
            textEn: "Got it. And a phone number in case we need to reach you?",
            textZh: "好的。留一个电话号码，以防我们需要联系您？",
            keyPhrases: [
              { en: "phone number", zh: "电话号码" },
              { en: "in case", zh: "以防" },
              { en: "reach you", zh: "联系您" },
            ],
            alternativeExpressions: [
              { textEn: "Can I get a contact number for the reservation?", textZh: "能留个预订联系电话吗？", actionHint: "报上手机号", frequency: "common" },
              { textEn: "What's the best number to reach you at?", textZh: "方便留个联系电话吗？", actionHint: "告诉对方你的电话号码", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, it's 415-555-0123.",
            textZh: "好的，415-555-0123。",
          },
          {
            speaker: "them",
            role: "接线",
            textEn: "Perfect. Do you have any special requests? Seating preference, dietary needs, or a special occasion?",
            textZh: "好的。有什么特别要求吗？座位偏好、饮食需求，或者特殊场合？",
            keyPhrases: [
              { en: "special requests", zh: "特别要求" },
              { en: "seating preference", zh: "座位偏好" },
              { en: "dietary needs", zh: "饮食需求" },
              { en: "special occasion", zh: "特殊场合" },
            ],
            alternativeExpressions: [
              { textEn: "Anything else we should know? Allergies, highchairs, anything like that?", textZh: "还有什么需要我们知道的吗？过敏、儿童椅之类的？", actionHint: "说出特殊需求", frequency: "common" },
              { textEn: "Any special requirements for your table?", textZh: "对座位有什么特殊要求吗？", actionHint: "提出座位或饮食方面的需求", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Could we get a table by the window if possible? And one person in our group is vegetarian.",
            textZh: "能安排靠窗的位置吗？我们有一个人吃素。",
          },
          {
            speaker: "them",
            role: "接线",
            textEn: "I'll do my best for a window table. And I'll note the vegetarian request — our chef can prepare several excellent vegetarian dishes. See you at 7!",
            textZh: "我尽量安排靠窗的。素食要求我记下来——我们厨师可以准备好几道很棒的素食菜。7点见！",
            keyPhrases: [
              { en: "do my best", zh: "尽量" },
              { en: "note", zh: "记下" },
              { en: "vegetarian", zh: "素食" },
            ],
            alternativeExpressions: [
              { textEn: "Noted! I'll request a window table and mark the vegetarian. See you tonight!", textZh: "记下了！我备注靠窗和素食。今晚见！", actionHint: "确认信息并道谢", frequency: "common" },
              { textEn: "No problem! We have plenty of veggie options. I'll put in for a window seat.", textZh: "没问题！我们素食选择很多。我帮您申请靠窗的位子。", actionHint: "简单道谢即可", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Wonderful. Thank you!",
            textZh: "太好了。谢谢！",
          },
        ],
      },

      // --- Flow 2: 没有位置 ---
      {
        id: "fully-booked",
        titleZh: "没有位置",
        titleEn: "Fully Booked",
        description: "想要的时间已经没有位置了",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "接线",
            textEn: "Thank you for calling The Garden Restaurant.",
            textZh: "感谢致电花园餐厅。",
            alternativeExpressions: [
              { textEn: "Garden Restaurant, good evening!", textZh: "花园餐厅，晚上好！", actionHint: "直接说订位需求", frequency: "common" },
              { textEn: "Hi there, thanks for calling the Garden. What can I do for you?", textZh: "你好，感谢致电花园餐厅。有什么能帮您的？", actionHint: "说明想订位", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Hi, I'd like to book a table for six tonight at 7 PM.",
            textZh: "你好，我想预订今晚7点的六人桌。",
          },
          {
            speaker: "them",
            role: "接线",
            textEn: "I'm sorry, we're fully booked at 7 PM tonight. I do have availability at 5:30 or 9:00. Would either of those work?",
            textZh: "抱歉，今晚7点已经满了。5:30和9:00有位置。这两个时间可以吗？",
            variations: [
              { textEn: "Unfortunately, 7 PM is fully reserved. Our earliest opening is at 8:45. Would that be okay?", textZh: "很遗憾，7点已经订满了。最早的空位是8:45。可以吗？" },
            ],
            keyPhrases: [
              { en: "fully booked", zh: "已经满了/订满了" },
              { en: "availability", zh: "有空位" },
              { en: "would that work", zh: "可以吗" },
            ],
            alternativeExpressions: [
              { textEn: "Sorry, 7 PM is taken. I could do 5:30 or 8:30 — any interest?", textZh: "抱歉，7点满了。5:30或8:30可以吗？", actionHint: "选一个时间或提出其他日期", frequency: "common" },
              { textEn: "We're all booked up at 7, but I can put you on the waitlist or try a different time.", textZh: "7点全订满了，可以排候补或者换个时间。", actionHint: "选择等候位或换时间", frequency: "occasional" },
            ],
            isBranchPoint: true,
            responseTip: "可以接受建议时间，或者问其他日期",
          },
          {
            speaker: "you",
            textEn: "9 PM is a bit late for us. How about tomorrow at 7 PM?",
            textZh: "9点对我们太晚了。明天晚上7点呢？",
          },
          {
            speaker: "them",
            role: "接线",
            textEn: "Let me check tomorrow... Yes, I have a table for six available at 7 PM tomorrow. Shall I book that?",
            textZh: "让我看看明天……好的，明天7点有六人桌。要订吗？",
            alternativeExpressions: [
              { textEn: "Tomorrow at 7 works! Want me to go ahead and reserve it?", textZh: "明天7点可以！要我直接帮您订吗？", actionHint: "确认订位并报名字", frequency: "common" },
              { textEn: "Good news — tomorrow's wide open at 7. Should I lock that in?", textZh: "好消息——明天7点完全没问题。帮您锁定吗？", actionHint: "确认并告知姓名", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. Under the name Wang.",
            textZh: "好的，订吧。名字是王。",
          },
          {
            speaker: "them",
            role: "接线",
            textEn: "Booked! Table for six, tomorrow at 7 PM, under Wang. We'll hold the table for 15 minutes past your reservation time. See you then!",
            textZh: "订好了！六人桌，明天7点，王先生。我们会保留预订后15分钟。明天见！",
            keyPhrases: [
              { en: "hold the table", zh: "保留位置" },
              { en: "15 minutes past", zh: "预订时间后15分钟" },
            ],
            alternativeExpressions: [
              { textEn: "All set! Six people, 7 PM tomorrow under Wang. Just a heads-up, we hold tables for 15 minutes.", textZh: "搞定！六位，明天7点，王先生。提醒一下，我们保留15分钟。", actionHint: "记下时间准时赴约", frequency: "common" },
              { textEn: "You're all booked! Please try to arrive on time — we release the table after 15 minutes.", textZh: "已经订好了！请尽量准时——超过15分钟我们会释放桌位。", actionHint: "注意准时到达", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 3: 修改/取消预订 ---
      {
        id: "modify",
        titleZh: "修改预订",
        titleEn: "Modify Reservation",
        description: "需要修改已有的预订（改时间、人数等）",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "接线",
            textEn: "The Garden Restaurant, how can I help you?",
            textZh: "花园餐厅，有什么可以帮您？",
            alternativeExpressions: [
              { textEn: "Good evening, this is the Garden. How may I assist you?", textZh: "晚上好，这里是花园餐厅。有什么能帮您的？", actionHint: "说明你有预订要修改", frequency: "common" },
              { textEn: "Garden Restaurant speaking. What can I do for you?", textZh: "花园餐厅，请讲。有什么需要？", actionHint: "直接说要改预订", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Hi, I have a reservation for tonight and I need to make a change.",
            textZh: "你好，我订了今晚的位，需要改一下。",
          },
          {
            speaker: "them",
            role: "接线",
            textEn: "Sure, what's the name on the reservation?",
            textZh: "好的，预订的名字是？",
            alternativeExpressions: [
              { textEn: "Of course. Can I have the name and time of your booking?", textZh: "当然。请问预订的名字和时间？", actionHint: "说出名字和原来的预订时间", frequency: "common" },
              { textEn: "No problem. What name is it under?", textZh: "没问题。订在谁的名下？", actionHint: "报上预订时用的名字", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Wang. It's for 7 PM, four people. I need to change it to six people, and push the time to 7:30 if possible.",
            textZh: "王。7点，四个人。我需要改成六个人，时间推迟到7:30可以吗？",
          },
          {
            speaker: "them",
            role: "接线",
            textEn: "Let me check... I can do 7:30 for six people, but I'd need to move you to a different table. Instead of the window seat, it would be in the main dining area. Is that okay?",
            textZh: "让我看看……7:30六个人可以，但需要换到另一张桌子。不是靠窗的了，会在主用餐区。可以吗？",
            keyPhrases: [
              { en: "move you to a different table", zh: "换桌子" },
              { en: "main dining area", zh: "主用餐区" },
            ],
            alternativeExpressions: [
              { textEn: "I can fit six at 7:30, but it'd be in the back section instead of by the window. That okay?", textZh: "7:30六个人可以，但得坐后面那区，不是靠窗了。行吗？", actionHint: "接受或拒绝换位", frequency: "common" },
              { textEn: "7:30 works for six, though I'll need to switch your table to the patio. Is that all right?", textZh: "7:30六位可以，不过得换到露台。可以吗？", actionHint: "确认是否接受新位置", frequency: "occasional" },
            ],
            isBranchPoint: true,
          },
          {
            speaker: "you",
            textEn: "That's fine. Thank you for accommodating the change.",
            textZh: "没问题。谢谢帮我改。",
          },
          {
            speaker: "them",
            role: "接线",
            textEn: "No problem at all. Updated to six guests at 7:30 PM. See you tonight!",
            textZh: "没问题。已更新为6位客人，7:30。今晚见！",
            alternativeExpressions: [
              { textEn: "Done! Six people at 7:30, main dining room. We'll see you then!", textZh: "改好了！六位7:30，主用餐区。到时候见！", actionHint: "道谢并确认", frequency: "common" },
              { textEn: "All updated. Your new reservation is six at 7:30. Enjoy your evening!", textZh: "全部更新了。新预订是六位7:30。祝今晚愉快！", actionHint: "简单道谢", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 到店点餐 ====================
  {
    id: "restaurant-order",
    category: "restaurant",
    titleZh: "到店点餐",
    titleEn: "Ordering at Restaurant",
    description: "到达餐厅后的点餐全流程",
    otherRole: "服务员",
    otherRoleIcon: "utensils",
    flows: [
      // --- Flow 1: 完整点餐流程 ---
      {
        id: "full-order",
        titleZh: "完整点餐",
        titleEn: "Full Ordering Process",
        description: "从入座到点饮料、前菜、主菜的完整流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, we have a reservation for four under Wang.",
            textZh: "你好，我们预订了四位，姓王。",
          },
          {
            speaker: "them",
            role: "领位",
            textEn: "Welcome! Yes, I see your reservation. Right this way, please. Here are your menus.",
            textZh: "欢迎！看到您的预订了。请这边走。给您菜单。",
            keyPhrases: [
              { en: "right this way", zh: "请这边走" },
              { en: "menus", zh: "菜单" },
            ],
            alternativeExpressions: [
              { textEn: "Hi! Reservation for Wang? Follow me, please.", textZh: "你好！王先生的预订？请跟我来。", actionHint: "跟着领位走就好", frequency: "common" },
              { textEn: "Welcome back! Your table is ready. Let me show you to your seats.", textZh: "欢迎光临！您的桌子准备好了。我带您过去。", actionHint: "跟着走入座即可", frequency: "occasional" },
            ],
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Good evening! Can I start you off with something to drink?",
            textZh: "晚上好！先来点喝的吗？",
            variations: [
              { textEn: "Welcome! Would you like to see the drink menu first?", textZh: "欢迎！先看看酒单吗？" },
            ],
            keyPhrases: [
              { en: "start you off", zh: "先来" },
              { en: "something to drink", zh: "喝的" },
            ],
            alternativeExpressions: [
              { textEn: "Hi there! Can I get you guys something to drink?", textZh: "你们好！先来点喝的吗？", actionHint: "点饮品", frequency: "common" },
              { textEn: "Evening! Would you like to start with drinks or go straight to ordering?", textZh: "晚上好！先点饮料还是直接点菜？", actionHint: "决定先喝还是先点菜", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I'll have a glass of red wine, and water for the table, please.",
            textZh: "好的，我要一杯红酒，再给桌上来一壶水。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Still or sparkling water?",
            textZh: "纯净水还是气泡水？",
            keyPhrases: [
              { en: "still", zh: "纯净水/不含气" },
              { en: "sparkling", zh: "气泡水/含气" },
            ],
            alternativeExpressions: [
              { textEn: "Flat or bubbly?", textZh: "不带气的还是带气的？", actionHint: "选一种水或要免费自来水", frequency: "common" },
              { textEn: "Would you like bottled water, or is tap water fine?", textZh: "要瓶装水还是自来水就行？", actionHint: "tap water 是免费的", frequency: "occasional" },
            ],
            culturalNote: "在国外餐厅，水通常分 still（不含气）和 sparkling（含气），且可能收费。可以要 tap water（自来水）免费。",
          },
          {
            speaker: "you",
            textEn: "Just tap water is fine, thank you.",
            textZh: "自来水就行，谢谢。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Are you ready to order, or do you need a few more minutes?",
            textZh: "准备好点菜了吗，还是再看几分钟？",
            keyPhrases: [
              { en: "ready to order", zh: "准备好点菜" },
              { en: "a few more minutes", zh: "再看几分钟" },
            ],
            alternativeExpressions: [
              { textEn: "Take your time, or are you all set to order?", textZh: "不急慢慢看，还是可以点了？", actionHint: "准备好就直接点", frequency: "common" },
              { textEn: "Have you had a chance to look at the menu?", textZh: "看过菜单了吗？", actionHint: "告诉对方准备好了或再看看", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I think we're ready. What do you recommend?",
            textZh: "我们可以点了。你推荐什么？",
            casualVersion: "What's good here?",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Our grilled salmon is very popular, and tonight's special is a rack of lamb with rosemary. Both are excellent.",
            textZh: "我们的烤三文鱼很受欢迎，今晚的特色菜是迷迭香烤羊排。都非常好。",
            keyPhrases: [
              { en: "popular", zh: "受欢迎" },
              { en: "tonight's special", zh: "今晚特色菜" },
              { en: "rack of lamb", zh: "烤羊排" },
              { en: "excellent", zh: "非常好" },
            ],
            alternativeExpressions: [
              { textEn: "The salmon is a crowd favorite, and tonight we've got a special lamb dish that's really good.", textZh: "三文鱼特别受欢迎，今晚还有一道很棒的特色羊肉。", actionHint: "可以选推荐的或自己看菜单", frequency: "common" },
              { textEn: "I'd go with the salmon — it's what most people order. The lamb special is also worth trying.", textZh: "我推荐三文鱼——大多数人都点这个。羊排特供也值得试。", actionHint: "根据推荐做选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll have the grilled salmon, please. And could I get the Caesar salad as a starter?",
            textZh: "我要烤三文鱼。还要一份凯撒沙拉做前菜。",
            culturalNote: "\"I'll have...\" 是标准点餐句式，比 \"I want...\" 更礼貌。starter = appetizer = 前菜。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "The salmon comes with your choice of sides — mashed potatoes, roasted vegetables, or rice. Which would you like?",
            textZh: "三文鱼可以选配菜——土豆泥、烤蔬菜或米饭。您要哪个？",
            keyPhrases: [
              { en: "choice of sides", zh: "可选配菜" },
              { en: "mashed potatoes", zh: "土豆泥" },
              { en: "roasted vegetables", zh: "烤蔬菜" },
            ],
            alternativeExpressions: [
              { textEn: "What side would you like with the salmon? We have mashed potatoes, veggies, or rice.", textZh: "三文鱼配什么？土豆泥、蔬菜还是米饭？", actionHint: "选一种配菜", frequency: "common" },
              { textEn: "For your side, you can pick from potatoes, roasted veggies, or rice.", textZh: "配菜可以选土豆、烤蔬菜或米饭。", actionHint: "告诉服务员你要哪个", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Roasted vegetables, please.",
            textZh: "烤蔬菜吧。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "And how would you like your salmon? We can do medium or well-done.",
            textZh: "三文鱼要几分熟？可以做五分熟或全熟。",
            keyPhrases: [
              { en: "how would you like", zh: "要几分熟" },
              { en: "medium", zh: "五分熟" },
              { en: "well-done", zh: "全熟" },
            ],
            alternativeExpressions: [
              { textEn: "How do you want your salmon cooked?", textZh: "三文鱼要几成熟？", actionHint: "说出想要的熟度", frequency: "common" },
              { textEn: "Would you prefer the salmon pink in the middle or cooked all the way through?", textZh: "三文鱼中间要嫩的还是全熟？", actionHint: "选 medium 或 well-done", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Medium, please.",
            textZh: "五分熟。",
          },
        ],
      },

      // --- Flow 2: 问菜品细节 ---
      {
        id: "ask-details",
        titleZh: "询问菜品",
        titleEn: "Asking About Dishes",
        description: "看不懂菜单，需要问服务员菜品内容",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, what exactly is the \"Surf and Turf\"? I'm not sure what that is.",
            textZh: "请问，\"Surf and Turf\" 到底是什么？我不太确定。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Great question! It's a combination of seafood and steak — in our case, a grilled lobster tail paired with a filet mignon. It's one of our most popular dishes.",
            textZh: "好问题！是海鲜和牛排的组合——我们的是烤龙虾尾配菲力牛排。这是我们最受欢迎的菜之一。",
            keyPhrases: [
              { en: "surf and turf", zh: "海陆双拼" },
              { en: "lobster tail", zh: "龙虾尾" },
              { en: "filet mignon", zh: "菲力牛排" },
              { en: "paired with", zh: "搭配" },
            ],
            alternativeExpressions: [
              { textEn: "Oh, that's our sea-and-land combo — lobster tail with a filet mignon. Super popular!", textZh: "那是我们的海陆拼盘——龙虾尾配菲力牛排。特别受欢迎！", actionHint: "决定要不要点这道菜", frequency: "common" },
              { textEn: "It's basically steak and seafood together. Ours is lobster and filet. You'll love it!", textZh: "就是牛排配海鲜。我们的是龙虾和菲力。你肯定喜欢！", actionHint: "感兴趣可以追问细节", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds good, but how big is the portion? I don't want to order too much.",
            textZh: "听起来不错，但分量大吗？我不想点太多。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "It's quite generous — enough for one person as a main course. If you're having a starter as well, you probably won't need anything else.",
            textZh: "分量挺大的——一个人做主菜足够了。如果还点了前菜，应该就不需要别的了。",
            keyPhrases: [
              { en: "generous", zh: "分量大" },
              { en: "main course", zh: "主菜" },
              { en: "starter", zh: "前菜" },
            ],
            alternativeExpressions: [
              { textEn: "It's a big dish — you won't need much else if you order a starter too.", textZh: "分量很足——如果再点个前菜基本就够了。", actionHint: "根据自己食量决定要不要点前菜", frequency: "common" },
              { textEn: "Pretty filling! Most people just have that as their main and they're good.", textZh: "挺饱的！大多数人就点这个当主菜就够了。", actionHint: "参考建议决定搭配", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is this dish spicy at all?",
            textZh: "这道菜辣吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Not at all. It's seasoned with garlic, butter, and herbs. But I can ask the chef to add some chili if you'd like it spicy.",
            textZh: "完全不辣。用的是大蒜、黄油和香草调味。但如果您想要辣的，我可以让厨师加点辣椒。",
            keyPhrases: [
              { en: "spicy", zh: "辣" },
              { en: "seasoned with", zh: "用……调味" },
              { en: "garlic", zh: "大蒜" },
              { en: "herbs", zh: "香草" },
            ],
            alternativeExpressions: [
              { textEn: "Not spicy at all. It's buttery and herby. But we can spice it up if you'd like.", textZh: "完全不辣。黄油和香草味的。不过如果想要辣的我们可以加。", actionHint: "决定是否加辣", frequency: "common" },
              { textEn: "Nope, it's pretty mild. Garlic and herb flavor mainly. Want me to ask the chef to kick it up?", textZh: "不辣的，主要是蒜香和香草味。要我让厨师加点辣吗？", actionHint: "告诉服务员你的偏好", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "No, that's fine. I'll go with the Surf and Turf, please.",
            textZh: "不用辣，就这样吧。我要这个海陆双拼。",
          },
        ],
      },
    ],
  },

  // ==================== 过敏/忌口 ====================
  {
    id: "restaurant-allergy",
    category: "restaurant",
    titleZh: "过敏与忌口",
    titleEn: "Food Allergies & Dietary Needs",
    description: "在餐厅告知过敏信息和特殊饮食需求",
    otherRole: "服务员",
    otherRoleIcon: "alert",
    flows: [
      {
        id: "allergy",
        titleZh: "食物过敏",
        titleEn: "Food Allergy",
        description: "告知服务员食物过敏信息",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Before we order, I should mention that I'm severely allergic to peanuts and tree nuts. Could you let the kitchen know?",
            textZh: "点菜之前我要说一下，我对花生和坚果严重过敏。能告诉厨房吗？",
            culturalNote: "在国外一定要主动告知过敏信息，餐厅非常重视。\"severely allergic\" 比 \"allergic\" 更能引起重视。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Absolutely, I'll flag that immediately. Let me mark it on your order. Are there any other allergies we should know about?",
            textZh: "当然，我马上标注。让我在您的单子上注明。还有其他过敏的吗？",
            keyPhrases: [
              { en: "flag", zh: "标注" },
              { en: "mark it on your order", zh: "在单子上注明" },
              { en: "any other allergies", zh: "其他过敏" },
            ],
            alternativeExpressions: [
              { textEn: "Thanks for telling me. I'll make a note right away. Anything else allergy-wise?", textZh: "谢谢告诉我。我马上备注。还有其他过敏的吗？", actionHint: "如有其他过敏一起说", frequency: "common" },
              { textEn: "Got it, I'll alert the kitchen immediately. Do you have any other food allergies?", textZh: "收到，我立刻通知厨房。还有其他食物过敏吗？", actionHint: "一次说完所有过敏信息", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's all. Which dishes on the menu are nut-free?",
            textZh: "就这些。菜单上哪些菜不含坚果？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "The grilled chicken, the pasta, and the steak are all nut-free. I'd avoid the Asian salad — it has crushed peanuts in the dressing. Let me get our allergy menu — it has all the allergen information listed.",
            textZh: "烤鸡、意面和牛排都不含坚果。亚洲沙拉要避免——酱汁里有碎花生。我去拿我们的过敏菜单——上面列了所有过敏原信息。",
            keyPhrases: [
              { en: "nut-free", zh: "不含坚果" },
              { en: "avoid", zh: "避免" },
              { en: "crushed peanuts", zh: "碎花生" },
              { en: "dressing", zh: "沙拉酱" },
              { en: "allergy menu", zh: "过敏菜单" },
              { en: "allergen information", zh: "过敏原信息" },
            ],
            alternativeExpressions: [
              { textEn: "The chicken, pasta, and steak are all safe. Stay away from the Asian salad though — it has peanuts. I'll grab our allergen chart.", textZh: "鸡肉、意面和牛排都没问题。不过别点亚洲沙拉——有花生。我去拿过敏原表。", actionHint: "从安全的菜品里选", frequency: "common" },
              { textEn: "A few dishes are completely nut-free. Let me bring you our special allergy menu so you can check everything.", textZh: "有几道菜完全不含坚果。我拿过敏专用菜单给您看。", actionHint: "等过敏菜单再做选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you for being so thorough. I'll have the grilled chicken.",
            textZh: "谢谢你这么仔细。那我要烤鸡。",
          },
        ],
      },

      // --- Flow 2: 素食/特殊饮食 ---
      {
        id: "vegetarian",
        titleZh: "素食需求",
        titleEn: "Vegetarian / Vegan",
        description: "吃素或有特殊饮食需求",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I'm vegetarian. Do you have any vegetarian options?",
            textZh: "我吃素。有素食选择吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Yes, we have several! The mushroom risotto, the vegetable curry, and the grilled halloumi salad are all vegetarian. Would you like me to check which ones are also vegan?",
            textZh: "有的，有好几个！蘑菇烩饭、蔬菜咖喱和烤哈罗米芝士沙拉都是素食。要我查查哪些也是纯素（无蛋奶）吗？",
            keyPhrases: [
              { en: "vegetarian options", zh: "素食选择" },
              { en: "mushroom risotto", zh: "蘑菇烩饭" },
              { en: "vegan", zh: "纯素/无蛋奶" },
              { en: "halloumi", zh: "哈罗米芝士" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! We've got a few veggie dishes. The risotto and the curry are both great. Need anything vegan-friendly?", textZh: "当然！我们有几道素菜。烩饭和咖喱都不错。需要纯素的吗？", actionHint: "说明是否需要纯素", frequency: "common" },
              { textEn: "Absolutely! The menu items with a little V are all vegetarian. I can point them out.", textZh: "当然！菜单上标了小V的都是素食。我可以帮您指出来。", actionHint: "看菜单上的素食标记", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I eat dairy, so vegetarian is fine. The mushroom risotto sounds great. Does it contain any meat stock?",
            textZh: "我吃奶制品，素食就行。蘑菇烩饭听起来不错。里面有肉汤吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Our risotto is made with vegetable stock, so no meat at all. It's one of our best sellers, actually!",
            textZh: "我们的烩饭用的是蔬菜高汤，完全没有肉。其实这是我们最畅销的菜之一！",
            keyPhrases: [
              { en: "vegetable stock", zh: "蔬菜高汤" },
              { en: "meat stock", zh: "肉汤" },
              { en: "best sellers", zh: "最畅销的" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, all veggie broth — no meat at all. It's one of our top dishes, actually.", textZh: "对，全是蔬菜高汤——完全没有肉。这其实是我们最火的菜之一。", actionHint: "放心点这道菜", frequency: "common" },
              { textEn: "It's 100% vegetarian — made with vegetable stock. People love it!", textZh: "百分百素食——用蔬菜高汤做的。大家都很喜欢！", actionHint: "可以放心选这道", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect, I'll have that.",
            textZh: "太好了，就要这个。",
          },
        ],
      },
    ],
  },

  // ==================== 结账 ====================
  {
    id: "restaurant-bill",
    category: "restaurant",
    titleZh: "餐厅结账",
    titleEn: "Paying the Bill",
    description: "用餐完毕后要求结账，包括小费、AA制等",
    otherRole: "服务员",
    otherRoleIcon: "credit-card",
    flows: [
      {
        id: "standard",
        titleZh: "标准结账",
        titleEn: "Standard Bill",
        description: "正常结账流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, could we get the check, please?",
            textZh: "请问，可以买单吗？",
            culturalNote: "美国说 check，英国说 bill。两个都能懂。",
            casualVersion: "Check, please.",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Of course! Here you go. Would you like to pay by card or cash?",
            textZh: "当然！给您。刷卡还是现金？",
            keyPhrases: [
              { en: "check / bill", zh: "账单" },
              { en: "card or cash", zh: "刷卡还是现金" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! Here's your check. Whenever you're ready — no rush.", textZh: "好的！账单给您。不着急，准备好了再付。", actionHint: "看完账单再付款", frequency: "common" },
              { textEn: "Here you are. Will you be paying together or separately?", textZh: "给您。你们一起付还是分开？", actionHint: "告诉服务员付款方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Card, please. Can I use Apple Pay?",
            textZh: "刷卡。可以用 Apple Pay 吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Yes, we accept Apple Pay. Just tap your phone here... Would you like to add a tip? You can select on the screen.",
            textZh: "可以的，我们接受 Apple Pay。把手机放这里……要加小费吗？可以在屏幕上选择。",
            keyPhrases: [
              { en: "tap your phone", zh: "把手机放上去" },
              { en: "add a tip", zh: "加小费" },
              { en: "select on the screen", zh: "在屏幕上选择" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, Apple Pay works! Just hold your phone over the reader. You can add a tip on the screen.", textZh: "可以用 Apple Pay！把手机靠近读卡器。小费可以在屏幕上选。", actionHint: "操作手机付款并选小费", frequency: "common" },
              { textEn: "Yep, tap right here. It'll ask about the tip on the screen — just pick an amount.", textZh: "好的，放这里感应。屏幕上会提示小费——选一个金额就行。", actionHint: "按屏幕提示操作", frequency: "common" },
            ],
            culturalNote: "在美国，餐厅小费通常是餐费的 15-20%。好的服务可以给 20%。",
          },
          {
            speaker: "you",
            textEn: "Yes, I'll add 20%.",
            textZh: "好的，加20%。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Thank you so much! Here's your receipt. Hope you enjoyed your meal!",
            textZh: "非常感谢！给您收据。希望您用餐愉快！",
            keyPhrases: [
              { en: "receipt", zh: "收据" },
              { en: "enjoyed your meal", zh: "用餐愉快" },
            ],
            alternativeExpressions: [
              { textEn: "All done! Here's your receipt. Thanks for dining with us!", textZh: "好了！收据给您。感谢光临！", actionHint: "收好收据", frequency: "common" },
              { textEn: "You're all set. Hope everything was great tonight!", textZh: "都搞定了。希望今晚一切满意！", actionHint: "可以表示感谢", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "The food was excellent. Thank you!",
            textZh: "菜非常好吃。谢谢！",
          },
        ],
      },

      // --- Flow 2: AA制 ---
      {
        id: "split-bill",
        titleZh: "分开付款",
        titleEn: "Splitting the Bill",
        description: "和朋友各付各的",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Could we split the bill, please? We'd like to pay separately.",
            textZh: "能分开付吗？我们想各付各的。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Sure! Would you like me to split it evenly, or would each person like to pay for what they ordered?",
            textZh: "当然！是平均分还是各付各的？",
            keyPhrases: [
              { en: "split the bill", zh: "分开付/AA制" },
              { en: "evenly", zh: "平均" },
              { en: "pay for what they ordered", zh: "各付各的" },
            ],
            alternativeExpressions: [
              { textEn: "No problem! Do you want me to divide it equally or by what each person had?", textZh: "没问题！按人头均分还是各算各的？", actionHint: "说明分账方式", frequency: "common" },
              { textEn: "Sure, I can split that. How many ways?", textZh: "当然，我来分。分几份？", actionHint: "告诉服务员人数和分法", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Each person pays for their own, please.",
            textZh: "各付各的吧。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "No problem. I'll bring separate checks. Just to confirm — the wine was shared, right? I'll split that evenly among the four of you.",
            textZh: "没问题。我给你们分开出单子。确认一下——酒是一起喝的对吧？那瓶酒我就四个人平分。",
            keyPhrases: [
              { en: "separate checks", zh: "分开的单子" },
              { en: "shared", zh: "共享的" },
              { en: "split evenly", zh: "平均分" },
            ],
            alternativeExpressions: [
              { textEn: "Sure. I'll print four separate bills. The shared wine — should I split that four ways?", textZh: "好的。我出四张单子。一起喝的酒——四个人分吗？", actionHint: "说明酒水怎么分", frequency: "common" },
              { textEn: "Okay, individual checks coming up. Anything that was shared I'll divide equally — sound good?", textZh: "好的，马上分单。共享的部分我就平均分——可以吗？", actionHint: "确认或提出不同分法", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Actually, I'll cover the wine. Just put it on my bill.",
            textZh: "其实酒算我的吧。放在我的账单上。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Got it! I'll add the wine to your check. Here are the four separate bills.",
            textZh: "好的！酒加到您的单子上。给您四张分开的账单。",
            alternativeExpressions: [
              { textEn: "No problem, wine's on your tab. Here are four checks.", textZh: "没问题，酒算你的。给你们四张单子。", actionHint: "各自付款", frequency: "common" },
              { textEn: "Done! The wine is on yours. Everyone else just pays their own food.", textZh: "好了！酒在你这张上。其他人只付自己的餐费。", actionHint: "各自看单付款即可", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 3: 账单有误 ---
      {
        id: "billing-error",
        titleZh: "账单有误",
        titleEn: "Bill Error",
        description: "发现账单上有多收或错误的项目",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I think there's a mistake on our bill. We didn't order the lobster appetizer.",
            textZh: "请问，我觉得账单有误。我们没有点龙虾前菜。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Let me check... You're right, I'm so sorry about that. That was for another table. Let me correct it right away.",
            textZh: "让我看看……您说得对，非常抱歉。那是另一桌的。我马上更正。",
            keyPhrases: [
              { en: "mistake", zh: "错误" },
              { en: "another table", zh: "另一桌" },
              { en: "correct it", zh: "更正" },
            ],
            alternativeExpressions: [
              { textEn: "Oh no, I'm sorry! That must have been entered wrong. Let me fix it right now.", textZh: "糟糕，抱歉！肯定是录错了。我现在就改。", actionHint: "等服务员更正账单", frequency: "common" },
              { textEn: "You're absolutely right, my mistake. I'll take that off immediately.", textZh: "您说得对，是我的失误。我马上去掉。", actionHint: "耐心等待修改", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "No problem. Also, we were told the dessert was complimentary for the birthday — but it's showing $12 on the bill.",
            textZh: "没关系。还有，之前说生日甜点是免费的——但账单上显示12美元。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Oh, you're absolutely right! The birthday dessert is on the house. I apologize for the error. Here's the corrected bill — the total is now $86.",
            textZh: "对对，您完全正确！生日甜点是免费的。为这个错误道歉。更正后的账单——现在总共86美元。",
            keyPhrases: [
              { en: "complimentary", zh: "免费的/赠送的" },
              { en: "on the house", zh: "店家请客/免费" },
              { en: "corrected bill", zh: "更正后的账单" },
            ],
            alternativeExpressions: [
              { textEn: "I'm so sorry! The birthday dessert should be free. Let me redo the bill — your new total is $86.", textZh: "非常抱歉！生日甜点应该是免费的。我重新出单——新的总额是86美元。", actionHint: "核对新账单金额", frequency: "common" },
              { textEn: "My bad! That dessert is on us. Here's the updated check — $86 total.", textZh: "我的错！甜点是我们请的。更新后的账单——一共86美元。", actionHint: "确认金额无误再付", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That looks right now. Thank you for fixing it.",
            textZh: "现在对了。谢谢更正。",
          },
        ],
      },
    ],
  },

  // ==================== 快餐店 ====================
  {
    id: "restaurant-fastfood",
    category: "restaurant",
    titleZh: "快餐店",
    titleEn: "Fast Food Restaurant",
    description: "在快餐店柜台点餐、定制需求和Drive-through点餐",
    otherRole: "收银员",
    otherRoleIcon: "utensils",
    flows: [
      // --- Flow 1: 柜台点餐 ---
      {
        id: "counter-order",
        titleZh: "柜台点餐",
        titleEn: "Counter Ordering",
        description: "标准快餐柜台点餐，包括套餐选择、大小和堂食/外带",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "收银员",
            textEn: "Hi, welcome! What can I get for you today?",
            textZh: "你好，欢迎！今天想要点什么？",
            variations: [
              { textEn: "Hey there! Ready to order?", textZh: "嗨！准备好点餐了吗？" },
              { textEn: "Welcome! Go ahead and order whenever you're ready.", textZh: "欢迎！准备好了就可以点。" },
            ],
            alternativeExpressions: [
              { textEn: "Hey! What'll it be today?", textZh: "嘿！今天吃什么？", actionHint: "直接报你想要的餐品", frequency: "common" },
              { textEn: "Welcome in! Take your time or go ahead if you know what you want.", textZh: "欢迎！慢慢看或者想好了直接说。", actionHint: "准备好就直接点", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Hi, can I get a number 3 combo, please?",
            textZh: "你好，我要一个3号套餐。",
            culturalNote: "快餐店菜单上通常有编号的combo(套餐)，直接说号码最快捷。",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Sure! What size would you like — regular or large?",
            textZh: "好的！要什么尺寸——常规还是大份？",
            keyPhrases: [
              { en: "what size", zh: "什么尺寸" },
              { en: "regular", zh: "常规/中份" },
              { en: "large", zh: "大份" },
            ],
            alternativeExpressions: [
              { textEn: "You want that regular or supersized?", textZh: "要普通的还是加大的？", actionHint: "选大小", frequency: "common" },
              { textEn: "Small, medium, or large on that combo?", textZh: "套餐要小份、中份还是大份？", actionHint: "说出想要的尺寸", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Large, please.",
            textZh: "大份。",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "And what would you like to drink with that?",
            textZh: "饮料要什么？",
            alternativeExpressions: [
              { textEn: "What drink do you want with the combo?", textZh: "套餐配什么饮料？", actionHint: "说出你要的饮料", frequency: "common" },
              { textEn: "Drink? We've got Coke, Sprite, iced tea, lemonade...", textZh: "喝什么？可乐、雪碧、冰茶、柠檬水都有……", actionHint: "从选项里挑一个", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "A Coke, please.",
            textZh: "可乐。",
            casualVersion: "Coke's fine.",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Is that for here or to go?",
            textZh: "堂食还是外带？",
            keyPhrases: [
              { en: "for here", zh: "堂食" },
              { en: "to go", zh: "外带/打包" },
            ],
            alternativeExpressions: [
              { textEn: "Eating here or taking it to go?", textZh: "在这吃还是带走？", actionHint: "说堂食或外带", frequency: "common" },
              { textEn: "Dine in or carry out?", textZh: "店里吃还是打包？", actionHint: "告诉对方你的选择", frequency: "occasional" },
            ],
            culturalNote: "美国说 \"for here or to go\"，英国说 \"eat in or take away\"。",
          },
          {
            speaker: "you",
            textEn: "For here, thanks.",
            textZh: "堂食，谢谢。",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Anything else?",
            textZh: "还要别的吗？",
            alternativeExpressions: [
              { textEn: "Want to add anything else to that?", textZh: "还要加点什么吗？", actionHint: "不需要就说 that's it", frequency: "common" },
              { textEn: "Can I get you anything else today?", textZh: "今天还需要别的吗？", actionHint: "有需要就补充，没有就结束", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "No, that's it.",
            textZh: "不用了，就这些。",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Okay, your total is $9.75. Cash or card?",
            textZh: "好的，一共9.75美元。现金还是刷卡？",
            keyPhrases: [
              { en: "your total is", zh: "一共/总共是" },
              { en: "cash or card", zh: "现金还是刷卡" },
            ],
            alternativeExpressions: [
              { textEn: "That comes to $9.75. How would you like to pay?", textZh: "一共9.75美元。怎么付？", actionHint: "告诉对方付款方式", frequency: "common" },
              { textEn: "$9.75 is your total. Card or cash today?", textZh: "总共9.75美元。今天刷卡还是现金？", actionHint: "选择付款方式", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Card, please.",
            textZh: "刷卡。",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Go ahead and tap or insert your card. Your order number is 47. We'll call your number when it's ready!",
            textZh: "请刷卡或感应。您的取餐号是47号。好了会叫号！",
            keyPhrases: [
              { en: "tap or insert", zh: "感应或插卡" },
              { en: "order number", zh: "取餐号" },
              { en: "call your number", zh: "叫号" },
            ],
            alternativeExpressions: [
              { textEn: "Tap right here. You're number 47 — we'll shout it out when it's done!", textZh: "在这里刷一下。你是47号——好了会喊号！", actionHint: "记住号码等叫号", frequency: "common" },
              { textEn: "Insert or tap your card. Your receipt has your order number — just listen for it!", textZh: "插卡或感应。收据上有取餐号——听着叫号就行！", actionHint: "看收据上的号码", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 2: 定制需求 ---
      {
        id: "customize",
        titleZh: "定制需求",
        titleEn: "Customization Requests",
        description: "要求去掉或添加配料、更换配菜等",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "收银员",
            textEn: "What can I get for you?",
            textZh: "要点什么？",
            alternativeExpressions: [
              { textEn: "Hey! Ready to order?", textZh: "嗨！准备好了吗？", actionHint: "直接报你想要的", frequency: "common" },
              { textEn: "What'll you have?", textZh: "你要什么？", actionHint: "说出你想点的东西", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll have a cheeseburger, but can I get it without pickles and without onions?",
            textZh: "我要一个芝士汉堡，但不要泡菜和洋葱。",
            culturalNote: "用 \"without\" 或 \"no\" 来去掉不想要的配料。也可以说 \"hold the pickles\"。",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "No pickles, no onions. Got it. Anything else you'd like to change?",
            textZh: "不要泡菜，不要洋葱。好的。还有什么要改的吗？",
            keyPhrases: [
              { en: "no pickles", zh: "不要泡菜" },
              { en: "anything else to change", zh: "还有什么要改的" },
            ],
            alternativeExpressions: [
              { textEn: "No pickles, no onions — done. Anything else you wanna switch up?", textZh: "不要泡菜，不要洋葱——好了。还有什么要改的吗？", actionHint: "继续提修改要求", frequency: "common" },
              { textEn: "Got it, I'll hold the pickles and onions. Want to change anything else?", textZh: "收到，去掉泡菜和洋葱。还要改别的吗？", actionHint: "说出其他定制需求", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I get extra ketchup and mayo on it? And could I substitute the fries for onion rings?",
            textZh: "能多加点番茄酱和蛋黄酱吗？还有薯条能换成洋葱圈吗？",
            keyPhrases: [
              { en: "extra", zh: "多加" },
              { en: "substitute", zh: "替换/换成" },
              { en: "onion rings", zh: "洋葱圈" },
            ],
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Extra ketchup and mayo, no problem. Swapping fries for onion rings is 50 cents extra. Is that okay?",
            textZh: "多加番茄酱和蛋黄酱，没问题。薯条换洋葱圈要加50美分。可以吗？",
            keyPhrases: [
              { en: "swapping", zh: "替换" },
              { en: "extra charge", zh: "额外费用" },
            ],
            alternativeExpressions: [
              { textEn: "Extra sauce, sure. The onion rings are 50 cents more though. Cool with that?", textZh: "多加酱料没问题。不过洋葱圈要加50美分。可以吗？", actionHint: "确认是否接受加价", frequency: "common" },
              { textEn: "Ketchup and mayo — you got it. Switching to rings is a small upcharge, just 50 cents.", textZh: "番茄酱和蛋黄酱——没问题。换洋葱圈要加一点钱，50美分。", actionHint: "同意或换回薯条", frequency: "occasional" },
            ],
            responseTip: "换配菜通常有少量额外费用，问一下就好。",
          },
          {
            speaker: "you",
            textEn: "That's fine. Oh, and can you also add bacon? How much extra is that?",
            textZh: "没问题。对了，能加培根吗？加培根多少钱？",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Bacon is an extra dollar. So your total with the onion rings upgrade and bacon comes to $11.25.",
            textZh: "培根加1美元。加上洋葱圈升级和培根，总共11.25美元。",
            alternativeExpressions: [
              { textEn: "Bacon's a buck extra. With everything, you're looking at $11.25.", textZh: "培根加一块钱。算上所有的，总共11.25美元。", actionHint: "确认或继续修改", frequency: "common" },
              { textEn: "Add a dollar for bacon. Your new total is $11.25 — that work?", textZh: "培根加1美元。新的总价是11.25——没问题吧？", actionHint: "同意就可以付款了", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds good. I'll take it.",
            textZh: "行，就这样。",
          },
        ],
      },

      // --- Flow 3: Drive-through ---
      {
        id: "drive-through",
        titleZh: "Drive-through 点餐",
        titleEn: "Drive-Through Ordering",
        description: "在开车通过窗口点餐，包括对讲机和取餐窗口互动",
        difficulty: "advanced",
        turns: [
          {
            speaker: "them",
            role: "对讲机",
            textEn: "Welcome to Burger Palace! Order whenever you're ready.",
            textZh: "欢迎来到汉堡宫！准备好了就可以点。",
            alternativeExpressions: [
              { textEn: "Hi, welcome to Burger Palace! Go ahead with your order.", textZh: "你好，欢迎来到汉堡宫！请直接点。", actionHint: "开始说你要点的东西", frequency: "common" },
              { textEn: "Hey there! Whenever you're ready!", textZh: "嗨！准备好了就说！", actionHint: "直接报出你要点的", frequency: "common" },
            ],
            culturalNote: "Drive-through的对讲机声音有时不太清楚，可能需要重复。",
          },
          {
            speaker: "you",
            textEn: "Hi, can I get two double cheeseburgers, one large fry, and a kids' meal with chicken nuggets?",
            textZh: "你好，我要两个双层芝士汉堡、一份大薯条、一份儿童套餐配鸡块。",
            keyPhrases: [
              { en: "double cheeseburger", zh: "双层芝士汉堡" },
              { en: "kids' meal", zh: "儿童套餐" },
              { en: "chicken nuggets", zh: "鸡块" },
            ],
          },
          {
            speaker: "them",
            role: "对讲机",
            textEn: "Okay, two double cheeseburgers, a large fry, and a kids' chicken nugget meal. What would the kids like to drink — milk, juice, or a small soda?",
            textZh: "好的，两个双层芝士汉堡、一份大薯条、一份鸡块儿童餐。小朋友要喝什么——牛奶、果汁还是小杯汽水？",
            alternativeExpressions: [
              { textEn: "Got it. For the kids' meal — what drink? We have milk, juice, or a small fountain drink.", textZh: "收到。儿童餐配什么喝的？有牛奶、果汁或小杯饮料。", actionHint: "选一个儿童饮品", frequency: "common" },
              { textEn: "Two doubles, large fry, kids' nuggets. And for the kids' drink — apple juice, milk, or soda?", textZh: "两个双层、大薯条、鸡块儿童餐。儿童饮料——苹果汁、牛奶还是汽水？", actionHint: "给小朋友选饮料", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Apple juice for the kids' meal. And two medium Cokes for us.",
            textZh: "儿童餐要苹果汁。我们要两杯中杯可乐。",
          },
          {
            speaker: "them",
            role: "对讲机",
            textEn: "Got it. Anything else?",
            textZh: "好的。还要别的吗？",
            alternativeExpressions: [
              { textEn: "Okay! Anything else I can add?", textZh: "好的！还要加什么吗？", actionHint: "不需要就说 that's everything", frequency: "common" },
              { textEn: "Want any dessert or extra sauces with that?", textZh: "要加甜品或者额外的酱料吗？", actionHint: "有需要就追加", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's everything.",
            textZh: "就这些了。",
          },
          {
            speaker: "them",
            role: "对讲机",
            textEn: "Your total is $18.50. Please pull forward to the first window.",
            textZh: "总共18.50美元。请开到第一个窗口。",
            keyPhrases: [
              { en: "pull forward", zh: "往前开" },
              { en: "first window", zh: "第一个窗口" },
            ],
            alternativeExpressions: [
              { textEn: "That's $18.50. Drive up to the window, please!", textZh: "一共18.50。请开到窗口！", actionHint: "把车开到付款窗口", frequency: "common" },
              { textEn: "$18.50. Please pull around to the first window to pay.", textZh: "18.50美元。请绕到第一个窗口付款。", actionHint: "开车到指定窗口", frequency: "common" },
            ],
            culturalNote: "Drive-through通常有两个窗口：第一个付钱，第二个取餐。有些只有一个窗口。",
          },
          {
            speaker: "them",
            role: "窗口",
            textEn: "$18.50, please. Out of $20? Here's $1.50 change. Please drive to the next window for your food.",
            textZh: "18.50美元。收您20？找您1.50。请开到下一个窗口取餐。",
            keyPhrases: [
              { en: "out of", zh: "收您(多少)" },
              { en: "change", zh: "找零" },
              { en: "next window", zh: "下一个窗口" },
            ],
            alternativeExpressions: [
              { textEn: "$18.50. Out of twenty — here's your change. Head to the next window for your food!", textZh: "18.50。收您20——找零给您。到下一个窗口取餐！", actionHint: "开到下一个窗口", frequency: "common" },
              { textEn: "That's $18.50. Paying with card? Tap or insert right here. Then head to the next window.", textZh: "18.50。刷卡吗？在这里刷一下。然后到下一个窗口。", actionHint: "付款后开到取餐窗口", frequency: "occasional" },
            ],
          },
          {
            speaker: "them",
            role: "窗口",
            textEn: "Here's your order! Two double cheeseburgers, large fry, kids' meal, two Cokes, and an apple juice. Napkins and ketchup are in the bag. Have a great day!",
            textZh: "这是您的餐！两个双层芝士汉堡、大薯条、儿童餐、两杯可乐和苹果汁。纸巾和番茄酱在袋子里。祝您愉快！",
            alternativeExpressions: [
              { textEn: "Here you go! Everything's in the bag. Enjoy your meal!", textZh: "给您！全在袋子里了。用餐愉快！", actionHint: "核对一下东西齐不齐", frequency: "common" },
              { textEn: "Your order is all here. Napkins and condiments are inside. Have a good one!", textZh: "您的餐齐了。纸巾和调料在里面。祝您愉快！", actionHint: "检查袋子确认无误", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you! You too!",
            textZh: "谢谢！你也是！",
          },
        ],
      },
    ],
  },

  // ==================== 咖啡店 ====================
  {
    id: "restaurant-coffee",
    category: "restaurant",
    titleZh: "咖啡店",
    titleEn: "Coffee Shop",
    description: "在咖啡店点咖啡、定制饮品和询问店内信息",
    otherRole: "咖啡师",
    otherRoleIcon: "coffee",
    flows: [
      // --- Flow 1: 标准点单 ---
      {
        id: "standard-order",
        titleZh: "标准点单",
        titleEn: "Standard Coffee Order",
        description: "标准咖啡点单，包括大小、类型、牛奶和温度选择",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Hi there! What can I get started for you?",
            textZh: "嗨！想喝点什么？",
            variations: [
              { textEn: "Good morning! What'll it be?", textZh: "早上好！要点什么？" },
              { textEn: "Hey! What are you having today?", textZh: "嗨！今天喝什么？" },
            ],
            alternativeExpressions: [
              { textEn: "Morning! What can I make for you?", textZh: "早！要我给你做什么？", actionHint: "说出你想要的咖啡", frequency: "common" },
              { textEn: "Hey! Welcome in. Know what you'd like?", textZh: "嗨！欢迎。想好了吗？", actionHint: "直接点或先看菜单", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I get a medium latte, please?",
            textZh: "我要一杯中杯拿铁。",
            culturalNote: "咖啡店的杯型各家不同。星巴克用Tall/Grande/Venti，其他店通常用Small/Medium/Large。",
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Sure! Would you like that hot or iced?",
            textZh: "好的！要热的还是冰的？",
            keyPhrases: [
              { en: "hot or iced", zh: "热的还是冰的" },
            ],
            alternativeExpressions: [
              { textEn: "You want that hot or over ice?", textZh: "要热的还是加冰的？", actionHint: "选热或冰", frequency: "common" },
              { textEn: "Hot or cold?", textZh: "热的还是凉的？", actionHint: "告诉对方你的选择", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Hot, please.",
            textZh: "热的。",
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "And what kind of milk? We have whole, skim, oat, almond, and soy.",
            textZh: "要什么奶？我们有全脂奶、脱脂奶、燕麦奶、杏仁奶和豆奶。",
            keyPhrases: [
              { en: "whole milk", zh: "全脂奶" },
              { en: "skim milk", zh: "脱脂奶" },
              { en: "oat milk", zh: "燕麦奶" },
              { en: "almond milk", zh: "杏仁奶" },
              { en: "soy milk", zh: "豆奶" },
            ],
            alternativeExpressions: [
              { textEn: "What milk would you like? We've got regular, oat, almond, or soy.", textZh: "要什么奶？有普通奶、燕麦奶、杏仁奶和豆奶。", actionHint: "选一种奶", frequency: "common" },
              { textEn: "Any milk preference? We have dairy and non-dairy options.", textZh: "奶有偏好吗？有含乳和非乳的选择。", actionHint: "说出你想要的奶种类", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Oat milk, please.",
            textZh: "燕麦奶。",
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Oat milk latte, hot, medium. Can I get a name for the order?",
            textZh: "燕麦奶拿铁，热的，中杯。名字是？",
            keyPhrases: [
              { en: "name for the order", zh: "取单的名字" },
            ],
            alternativeExpressions: [
              { textEn: "Oat milk latte, medium, hot. What name?", textZh: "燕麦奶拿铁，中杯，热的。叫什么名字？", actionHint: "说你的名字", frequency: "common" },
              { textEn: "Got it — oat latte, hot, medium. And your name is?", textZh: "收到——燕麦拿铁，热的，中杯。您贵姓？", actionHint: "报上名字方便取餐", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Wayne.",
            textZh: "Wayne。",
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Got it! That'll be $5.50. I'll have it ready at the end of the bar.",
            textZh: "好的！5.50美元。在吧台那头取。",
            keyPhrases: [
              { en: "end of the bar", zh: "吧台那头" },
            ],
            alternativeExpressions: [
              { textEn: "That's $5.50. Pick it up at the other end when your name's called.", textZh: "5.50美元。叫到你名字的时候去另一头取。", actionHint: "付款后去取餐处等", frequency: "common" },
              { textEn: "$5.50. It'll be ready in a couple minutes — just wait by the pickup counter.", textZh: "5.50。几分钟就好——在取餐台那边等一下。", actionHint: "在取餐台附近等候", frequency: "common" },
            ],
          },
        ],
      },

      // --- Flow 2: 定制饮品 ---
      {
        id: "custom-drink",
        titleZh: "定制饮品",
        titleEn: "Custom Drink",
        description: "定制饮品，包括糖浆、替代奶和脱咖啡因",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Hey! What can I get for you?",
            textZh: "嗨！要点什么？",
            alternativeExpressions: [
              { textEn: "Hi! What are we making for you today?", textZh: "你好！今天给你做什么？", actionHint: "说出你的定制饮品", frequency: "common" },
              { textEn: "What can I whip up for you?", textZh: "给你调什么？", actionHint: "描述你想要的饮品", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd like a large iced vanilla latte with oat milk, but can you make it with decaf?",
            textZh: "我要一杯大杯冰的香草拿铁，用燕麦奶，能做无咖啡因的吗？",
            keyPhrases: [
              { en: "vanilla", zh: "香草" },
              { en: "decaf", zh: "无咖啡因/低咖啡因" },
            ],
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Absolutely! How many pumps of vanilla would you like? Standard is three for a large.",
            textZh: "当然！要几泵香草糖浆？大杯标准是三泵。",
            keyPhrases: [
              { en: "pumps", zh: "泵(糖浆的计量单位)" },
              { en: "standard", zh: "标准" },
            ],
            alternativeExpressions: [
              { textEn: "For sure! Standard is three pumps of vanilla for that size. Want more or less?", textZh: "没问题！这个杯型标准是三泵香草。要多还是少？", actionHint: "说出你想要的泵数", frequency: "common" },
              { textEn: "Decaf, no problem! How sweet do you want it? Three pumps is the default.", textZh: "无咖啡因没问题！要多甜？默认是三泵。", actionHint: "调整甜度", frequency: "occasional" },
            ],
            culturalNote: "\"pump\" 是咖啡店里糖浆的计量单位。可以要求加减泵数来调甜度。",
          },
          {
            speaker: "you",
            textEn: "Just two pumps — I don't want it too sweet. And can I also add a pump of caramel?",
            textZh: "两泵就好——我不想太甜。能再加一泵焦糖吗？",
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Two vanilla, one caramel. Would you like whipped cream on top?",
            textZh: "两泵香草，一泵焦糖。要加奶油吗？",
            keyPhrases: [
              { en: "whipped cream", zh: "奶油/鲜奶油" },
            ],
            alternativeExpressions: [
              { textEn: "Two vanilla, one caramel — got it. Whip on top?", textZh: "两泵香草，一泵焦糖——好的。上面加奶油吗？", actionHint: "要或不要奶油", frequency: "common" },
              { textEn: "Okay, two and one. Do you want any toppings? Whipped cream, drizzle?", textZh: "好的，两泵一泵。要加什么吗？奶油、淋酱？", actionHint: "说出要不要加料", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "No whipped cream, thanks. But could I get an extra shot of espresso? I know it's decaf, but I want it stronger in flavor.",
            textZh: "不要奶油，谢谢。但能加一份浓缩咖啡吗？虽然是无咖啡因的，但我想要味道浓一点。",
            keyPhrases: [
              { en: "extra shot", zh: "加一份浓缩" },
              { en: "espresso", zh: "浓缩咖啡" },
            ],
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "No problem! Extra decaf shot added. So that's a large iced decaf oat milk latte, two pumps vanilla, one pump caramel, extra shot, no whip. That'll be $7.25.",
            textZh: "没问题！加一份无咖啡因浓缩。所以是大杯冰的无咖啡因燕麦奶拿铁，两泵香草，一泵焦糖，加一份浓缩，不要奶油。7.25美元。",
            keyPhrases: [
              { en: "no whip", zh: "不要奶油" },
            ],
            alternativeExpressions: [
              { textEn: "Let me repeat that back — large iced decaf oat latte, two vanilla, one caramel, extra shot, no whip. $7.25.", textZh: "我重复一下——大杯冰的无咖啡因燕麦拿铁，两泵香草，一泵焦糖，加一份浓缩，不要奶油。7.25。", actionHint: "仔细听确认无误", frequency: "common" },
              { textEn: "Okay, I've got a large iced decaf oat latte with vanilla and caramel, extra shot, skip the whip. That's $7.25.", textZh: "好的，大杯冰无咖啡因燕麦拿铁，香草加焦糖，加一份浓缩，不要奶油。7.25美元。", actionHint: "核对订单再付款", frequency: "occasional" },
            ],
            responseTip: "咖啡师重复一遍你的定制订单是为了确认，仔细听看有没有遗漏或说错的。",
          },
          {
            speaker: "you",
            textEn: "That's perfect. Thank you!",
            textZh: "完全正确。谢谢！",
          },
        ],
      },

      // --- Flow 3: 问WiFi和座位 ---
      {
        id: "wifi-seating",
        titleZh: "问WiFi和座位",
        titleEn: "WiFi & Seating",
        description: "询问WiFi密码、座位和电源插座",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, do you have WiFi here?",
            textZh: "你好，这里有WiFi吗？",
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Yes! The network name is \"CoffeeHouse-Guest\" and the password is on your receipt. I'll circle it for you.",
            textZh: "有的！网络名是 \"CoffeeHouse-Guest\"，密码在收据上。我给你圈出来。",
            keyPhrases: [
              { en: "network name", zh: "网络名" },
              { en: "password", zh: "密码" },
              { en: "receipt", zh: "收据" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah! Network is CoffeeHouse-Guest, password's on the receipt. Here, I'll write it down.", textZh: "有的！网络是 CoffeeHouse-Guest，密码在收据上。我帮你写下来。", actionHint: "看收据上的密码连WiFi", frequency: "common" },
              { textEn: "Sure! It's free WiFi. The password changes weekly — check your receipt.", textZh: "当然！免费WiFi。密码每周换——看你的收据。", actionHint: "从收据找密码", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, thanks. I need to do some work on my laptop. Are there any seats with power outlets nearby?",
            textZh: "太好了，谢谢。我需要用笔记本电脑办公。有靠近电源插座的座位吗？",
            keyPhrases: [
              { en: "power outlets", zh: "电源插座" },
              { en: "laptop", zh: "笔记本电脑" },
            ],
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Sure! The long table by the wall has outlets underneath, and there are a couple of spots in the back corner with plugs too. The back corner is usually quieter if you need to focus.",
            textZh: "有的！靠墙的长桌下面有插座，后面角落也有几个有插头的位置。后面的角落通常比较安静，如果你需要专心的话。",
            keyPhrases: [
              { en: "outlets underneath", zh: "下面有插座" },
              { en: "back corner", zh: "后面角落" },
              { en: "quieter", zh: "更安静" },
            ],
            alternativeExpressions: [
              { textEn: "The wall seats all have outlets. Or there's a quiet spot in the back with plugs too.", textZh: "靠墙的座位都有插座。后面也有个安静的位置有插头。", actionHint: "选一个有插座的座位", frequency: "common" },
              { textEn: "Check the long table by the window — outlets are under the table. Great for laptops!", textZh: "看看靠窗的长桌——桌下有插座。用笔记本电脑很方便！", actionHint: "去推荐的位置坐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a time limit for how long I can stay?",
            textZh: "有时间限制吗？能待多久？",
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "We don't have a strict limit, but during peak hours we do ask people to be mindful if it's really crowded. On a day like today, you're welcome to stay as long as you'd like!",
            textZh: "没有严格限制，但高峰时段如果很挤的话，希望大家互相体谅一下。像今天这样的话，想待多久都可以！",
            keyPhrases: [
              { en: "time limit", zh: "时间限制" },
              { en: "peak hours", zh: "高峰时段" },
              { en: "be mindful", zh: "注意/体谅" },
            ],
            alternativeExpressions: [
              { textEn: "No time limit! Just be considerate if it gets super busy. Today's pretty chill though.", textZh: "没有时间限制！人多的时候互相体谅一下就好。今天挺空的。", actionHint: "安心坐着办公", frequency: "common" },
              { textEn: "Nah, stay as long as you want! We only ask folks to grab a drink every couple hours when it's packed.", textZh: "不用担心，想待多久待多久！人多的时候每隔两小时点杯饮料就行。", actionHint: "待久了可以再点一杯", frequency: "occasional" },
            ],
            culturalNote: "欧美咖啡店通常允许长时间逗留办公，但高峰时段(如早上通勤时间)最好不要占座太久。买杯饮料是基本礼貌。",
          },
          {
            speaker: "you",
            textEn: "Good to know. One more thing — do you have any food? I might want a snack later.",
            textZh: "了解了。还有个问题——有吃的吗？我待会可能想吃点东西。",
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "We have pastries, sandwiches, and salads in the display case right there. We also have a full food menu — I can grab one for you if you'd like.",
            textZh: "展示柜里有糕点、三明治和沙拉。我们也有完整的餐食菜单——需要的话我拿给你。",
            keyPhrases: [
              { en: "pastries", zh: "糕点/面包" },
              { en: "display case", zh: "展示柜" },
              { en: "food menu", zh: "餐食菜单" },
            ],
            alternativeExpressions: [
              { textEn: "Yep! Pastries and sandwiches are in the case up front. We've also got a lunch menu if you're hungry later.", textZh: "有的！糕点和三明治在前面的柜子里。如果待会饿了我们也有午餐菜单。", actionHint: "去展示柜看看或要一份菜单", frequency: "common" },
              { textEn: "Sure do! Check out the display case. We also bake fresh muffins every hour.", textZh: "当然有！看看展示柜。我们每小时还烤新鲜的松饼。", actionHint: "去展示柜挑选", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll check the display case later. Thanks for all the help!",
            textZh: "我待会看看展示柜。谢谢！",
          },
        ],
      },
    ],
  },

  // ==================== 酒吧/Pub ====================
  {
    id: "restaurant-bar",
    category: "restaurant",
    titleZh: "酒吧/Pub",
    titleEn: "Bar / Pub",
    description: "在酒吧点酒、开Tab结账和社交互动",
    otherRole: "调酒师",
    otherRoleIcon: "wine",
    flows: [
      // --- Flow 1: 点酒 ---
      {
        id: "order-drinks",
        titleZh: "点酒",
        titleEn: "Ordering Drinks",
        description: "点啤酒、鸡尾酒或杯装红酒",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Hey! What can I get you?",
            textZh: "嗨！喝点什么？",
            variations: [
              { textEn: "What'll it be?", textZh: "要什么？" },
              { textEn: "What are you drinking tonight?", textZh: "今晚喝什么？" },
            ],
            alternativeExpressions: [
              { textEn: "Hey folks! What are we having?", textZh: "嗨！你们喝什么？", actionHint: "说出你想喝的或问推荐", frequency: "common" },
              { textEn: "What's your poison tonight?", textZh: "今晚喝什么好的？", actionHint: "这是酒吧常用的俏皮问法", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What do you have on tap?",
            textZh: "有什么生啤？",
            keyPhrases: [
              { en: "on tap", zh: "生啤/扎啤" },
            ],
            culturalNote: "\"On tap\" 指的是从酒桶直接倒出来的新鲜啤酒，和瓶装(bottled)或罐装(canned)不同。",
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "We've got a local IPA, a pilsner, a wheat beer, and Guinness on tap. We also have a full bottle and can list if you want something else.",
            textZh: "有本地IPA、皮尔森、小麦啤酒和吉尼斯生啤。也有完整的瓶装和罐装酒单。",
            keyPhrases: [
              { en: "IPA", zh: "印度淡色艾尔(一种精酿啤酒)" },
              { en: "pilsner", zh: "皮尔森(一种清爽的啤酒)" },
              { en: "wheat beer", zh: "小麦啤酒" },
              { en: "on tap", zh: "生啤" },
            ],
            alternativeExpressions: [
              { textEn: "On tap we've got IPA, pilsner, wheat, and Guinness. Plus bottles and cans if you want something different.", textZh: "生啤有IPA、皮尔森、小麦和吉尼斯。瓶装罐装的也有，如果想换口味的话。", actionHint: "选一种啤酒", frequency: "common" },
              { textEn: "We have four on tap tonight — a local IPA, pilsner, wheat beer, and a Guinness. Want to try a sample?", textZh: "今晚有四种生啤——本地IPA、皮尔森、小麦和吉尼斯。要试喝吗？", actionHint: "可以先试再选", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll try the local IPA. Can I get a pint?",
            textZh: "我试试本地IPA。来一品脱。",
            keyPhrases: [
              { en: "pint", zh: "品脱(约473毫升)" },
            ],
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Good choice. And for your friend?",
            textZh: "好选择。你朋友呢？",
            alternativeExpressions: [
              { textEn: "Nice pick! What about the other person?", textZh: "选得好！另一位呢？", actionHint: "帮朋友点酒", frequency: "common" },
              { textEn: "Great choice. And what's she having?", textZh: "好选择。她要喝什么？", actionHint: "说出朋友想喝的", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "She'll have a glass of red wine — do you have a Cabernet?",
            textZh: "她要一杯红酒——有赤霞珠吗？",
            keyPhrases: [
              { en: "glass of wine", zh: "一杯酒(杯装)" },
              { en: "Cabernet", zh: "赤霞珠" },
            ],
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "We have a Napa Valley Cabernet and a Chilean one. The Napa is $14 a glass, the Chilean is $10.",
            textZh: "有纳帕谷的赤霞珠和智利的。纳帕的一杯14美元，智利的10美元。",
            alternativeExpressions: [
              { textEn: "We've got two Cabs — a California one for $14 and a Chilean for $10. Both solid.", textZh: "赤霞珠有两款——加州的14美元，智利的10美元。都不错。", actionHint: "选一个价位", frequency: "common" },
              { textEn: "Yeah! A Napa Cab at $14 and a Chilean at $10. Want to start with a taste?", textZh: "有的！纳帕赤霞珠14美元，智利10美元。要先尝一口吗？", actionHint: "可以先试再决定", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The Chilean one is fine. Thanks!",
            textZh: "智利的就好。谢谢！",
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Coming right up!",
            textZh: "马上来！",
            keyPhrases: [
              { en: "coming right up", zh: "马上来" },
            ],
            alternativeExpressions: [
              { textEn: "On it! Give me just a sec.", textZh: "马上！稍等一下。", actionHint: "等调酒师准备", frequency: "common" },
              { textEn: "You got it! Be right back with those.", textZh: "没问题！马上给你们端来。", actionHint: "稍等取酒", frequency: "common" },
            ],
          },
        ],
      },

      // --- Flow 2: Tab结账 ---
      {
        id: "tab",
        titleZh: "Tab结账",
        titleEn: "Opening / Closing a Tab",
        description: "开Tab、加酒、关Tab和与朋友分账",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Can I open a tab?",
            textZh: "能开个Tab吗？",
            culturalNote: "\"Tab\" 是在酒吧先不付钱，最后一起结账。通常需要压一张信用卡。",
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Sure! Can I get a card to keep on file?",
            textZh: "当然！给我一张卡先压着。",
            keyPhrases: [
              { en: "open a tab", zh: "开Tab/先挂账" },
              { en: "card to keep on file", zh: "压一张卡" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! Just need a credit card to hold. I'll keep the tab open for you.", textZh: "当然！只需要一张信用卡。我帮你开着Tab。", actionHint: "递上信用卡", frequency: "common" },
              { textEn: "Sure thing! Can I see a card? I'll start a tab for you.", textZh: "没问题！给我一张卡？我帮你开个Tab。", actionHint: "把卡给调酒师", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here you go. We'll probably order a few rounds tonight.",
            textZh: "给你。我们今晚应该会再点几轮。",
            keyPhrases: [
              { en: "a few rounds", zh: "几轮(酒)" },
            ],
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "No problem. I'll keep it open. Just wave me down when you need another round.",
            textZh: "没问题。Tab开着。要续杯的时候招呼我就行。",
            keyPhrases: [
              { en: "wave me down", zh: "招呼我" },
              { en: "another round", zh: "再来一轮" },
            ],
            alternativeExpressions: [
              { textEn: "All set. Tab's open — just flag me when you want more.", textZh: "搞定了。Tab开着——想续杯的时候招呼我。", actionHint: "需要时挥手叫调酒师", frequency: "common" },
              { textEn: "You're good to go. I'll leave the tab running. Just holler when you need another drink.", textZh: "没问题。Tab开着。要喝的时候喊我就行。", actionHint: "随时可以加点", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Hey, can we close out the tab? Actually, can you split it three ways?",
            textZh: "你好，我们要结Tab了。能分成三份吗？",
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Sure! Your total is $72. Split evenly three ways, that's $24 each. Want me to run three separate cards?",
            textZh: "好的！总共72美元。三人平分的话每人24美元。分三张卡刷吗？",
            keyPhrases: [
              { en: "close out the tab", zh: "结Tab/关Tab" },
              { en: "split three ways", zh: "分成三份" },
              { en: "run the card", zh: "刷卡" },
            ],
            alternativeExpressions: [
              { textEn: "Your tab's $72. Splitting three ways is $24 each. Three cards?", textZh: "你们的Tab是72美元。三个人分就是每人24。三张卡吗？", actionHint: "递上三张卡", frequency: "common" },
              { textEn: "Total's $72 — $24 a piece if you're splitting evenly. Want me to run separate cards?", textZh: "总共72——平分的话每人24。要分开刷卡吗？", actionHint: "确认分卡方式", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. Here are the other two cards.",
            textZh: "好的。这是另外两张卡。",
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "All set! $24 on each card. The tip line is there if you'd like to add one. Thanks for coming in tonight!",
            textZh: "好了！每张卡24美元。如果要加小费的话在那一栏填。感谢今晚光临！",
            keyPhrases: [
              { en: "tip line", zh: "小费栏" },
            ],
            alternativeExpressions: [
              { textEn: "Done! $24 each. Sign at the bottom if you want to add a tip. Have a great night!", textZh: "好了！每张24美元。要加小费的话在下面签字。玩得开心！", actionHint: "填小费金额并签名", frequency: "common" },
              { textEn: "You're all squared up. Tip's optional — there's a line for it on the receipt. Thanks for coming!", textZh: "都结清了。小费随意——收据上有一栏可以填。感谢光临！", actionHint: "写上小费金额", frequency: "occasional" },
            ],
            culturalNote: "酒吧小费通常是每杯酒1-2美元，或者账单的15-20%。",
          },
        ],
      },

      // --- Flow 3: 社交场景 ---
      {
        id: "social",
        titleZh: "社交场景",
        titleEn: "Bar Socializing",
        description: "在酒吧和调酒师聊天、请教推荐",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn: "I'm not sure what to order. What do you recommend? I usually like something not too strong but flavorful.",
            textZh: "我不知道喝什么好。有什么推荐吗？我一般喜欢不太烈但有味道的。",
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Do you lean more toward beer, wine, or cocktails? That'll help me narrow it down.",
            textZh: "你比较偏好啤酒、红酒还是鸡尾酒？这样我好缩小范围。",
            keyPhrases: [
              { en: "lean toward", zh: "偏好/倾向" },
              { en: "narrow it down", zh: "缩小范围" },
            ],
            alternativeExpressions: [
              { textEn: "Are you more of a beer, wine, or cocktail person? That'll help me figure something out.", textZh: "你平时喝啤酒多还是红酒、鸡尾酒？这样我好推荐。", actionHint: "说出你的偏好", frequency: "common" },
              { textEn: "Sure! Do you usually go for something light or more on the strong side?", textZh: "好！你一般喝清淡的还是烈一点的？", actionHint: "描述你的口味偏好", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm open to cocktails. But I'm not a fan of super sweet drinks.",
            textZh: "鸡尾酒可以。但我不喜欢太甜的。",
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "How about a Moscow Mule? It's vodka, ginger beer, and fresh lime. Refreshing with a little kick, but not sweet. Or if you like something more herbal, I can make you a gin and tonic with a twist.",
            textZh: "莫斯科骡子怎么样？伏特加、姜汁啤酒和新鲜青柠。清爽带点劲，但不甜。或者如果你喜欢草本味的，我可以做一杯加了特调的金汤力。",
            keyPhrases: [
              { en: "Moscow Mule", zh: "莫斯科骡子(鸡尾酒)" },
              { en: "ginger beer", zh: "姜汁啤酒" },
              { en: "refreshing", zh: "清爽" },
              { en: "kick", zh: "劲/刺激感" },
              { en: "gin and tonic", zh: "金汤力" },
              { en: "with a twist", zh: "加了特调/变化" },
            ],
            alternativeExpressions: [
              { textEn: "If you don't like sweet, try a Moscow Mule — ginger beer and lime, nice and crisp. Or a classic gin and tonic.", textZh: "不喜欢甜的话，试试莫斯科骡子——姜汁啤酒和青柠，很清爽。或者经典金汤力。", actionHint: "选一款试试", frequency: "common" },
              { textEn: "How about an Old Fashioned? It's whiskey-based, not sweet, with a nice depth to it.", textZh: "老式鸡尾酒怎么样？威士忌底的，不甜，味道很有层次。", actionHint: "可以接受或换一个", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The Moscow Mule sounds great. I'll try that.",
            textZh: "莫斯科骡子听起来不错。就要这个。",
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Good pick! By the way, are you guys from around here or just visiting?",
            textZh: "好选择！对了，你们是本地人还是来玩的？",
            alternativeExpressions: [
              { textEn: "You'll like that one! So, you guys local or visiting?", textZh: "你肯定喜欢！对了，你们是本地的还是来玩的？", actionHint: "可以聊几句也可以简短回答", frequency: "common" },
              { textEn: "Great pick! Are you from around here?", textZh: "好选择！你们是这附近的吗？", actionHint: "随意聊聊", frequency: "common" },
            ],
            responseTip: "调酒师聊天是酒吧文化的一部分，可以随意聊聊。不想聊也可以简单回应。",
          },
          {
            speaker: "you",
            textEn: "Just visiting, actually. We got here yesterday. Any recommendations for things to do around here?",
            textZh: "来玩的。昨天刚到。这附近有什么推荐的吗？",
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Oh nice! There's a great live music spot just two blocks down — they have jazz on Thursday nights. And if you're here this weekend, there's a street food market on Saturday. Definitely worth checking out.",
            textZh: "不错！往下走两个街区有个很棒的现场音乐吧——周四晚上有爵士乐。如果这周末还在的话，周六有个街头美食市集。绝对值得去看看。",
            keyPhrases: [
              { en: "live music", zh: "现场音乐" },
              { en: "two blocks down", zh: "往下走两个街区" },
              { en: "street food market", zh: "街头美食市集" },
              { en: "worth checking out", zh: "值得去看看" },
            ],
            alternativeExpressions: [
              { textEn: "Cool! There's a jazz bar nearby and a food market this Saturday. Both are awesome.", textZh: "不错！附近有个爵士酒吧，这周六还有个美食市集。都很棒。", actionHint: "记下推荐的活动", frequency: "common" },
              { textEn: "If you like music, there's live jazz down the street on Thursdays. And Saturday's street market is a must.", textZh: "如果喜欢音乐，这条街上周四有现场爵士。周六的街头市集一定要去。", actionHint: "问清楚地址和时间", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds awesome. We'll definitely check out the food market. Thanks for the tip!",
            textZh: "听起来很棒。我们肯定去看看美食市集。谢谢推荐！",
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Anytime! Enjoy your Moscow Mule. Let me know if you want another one or want to try something different.",
            textZh: "不客气！享受你的莫斯科骡子吧。想再来一杯或者试试别的随时说。",
            alternativeExpressions: [
              { textEn: "No problem! Enjoy the Mule. Wave me down if you need anything else.", textZh: "不客气！享用吧。需要什么招呼我。", actionHint: "享受你的饮品", frequency: "common" },
              { textEn: "Happy to help! Let me know when you're ready for round two.", textZh: "乐意帮忙！想要第二杯的时候告诉我。", actionHint: "慢慢喝，想续杯再叫", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 自助餐 ====================
  {
    id: "restaurant-buffet",
    category: "restaurant",
    titleZh: "自助餐",
    titleEn: "Buffet Dining",
    description: "在自助餐厅就餐，了解规则、续杯、甜点站等",
    otherRole: "自助餐服务员",
    otherRoleIcon: "utensils",
    flows: [
      // --- Flow 1: 标准自助餐 ---
      {
        id: "standard-buffet",
        titleZh: "标准自助餐",
        titleEn: "Standard Buffet",
        description: "入座、了解规则、取餐、续杯的完整流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "前台",
            textEn: "Welcome to the Grand Buffet! Will it be just the two of you today?",
            textZh: "欢迎来到盛宴自助餐！今天两位吗？",
            keyPhrases: [
              { en: "just the two of you", zh: "就你们两位" },
            ],
            alternativeExpressions: [
              { textEn: "Hi! How many in your party?", textZh: "你好！几位？", actionHint: "告诉对方人数即可", frequency: "common" },
              { textEn: "Table for two?", textZh: "两位吗？", actionHint: "确认或纠正人数", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, two people. How much is the buffet?",
            textZh: "是的，两个人。自助餐多少钱？",
            casualVersion: "Yeah, just us two. What's the price?",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "It's $29.99 per person for adults. That includes unlimited trips to the buffet and soft drinks. Alcohol is extra.",
            textZh: "成人每位29.99美元。包含无限次取餐和软饮。酒水另算。",
            keyPhrases: [
              { en: "per person", zh: "每人" },
              { en: "unlimited trips", zh: "无限次取餐" },
              { en: "soft drinks", zh: "软饮" },
              { en: "alcohol is extra", zh: "酒水另算" },
            ],
            vocabNotes: {
              "unlimited": { meaningInContext: "在这句话里表示：无限制的、不限次数的", similarUsage: "类似用法：unlimited data plan（无限流量套餐）" },
              "extra": { meaningInContext: "在这句话里表示：额外收费的、不包含在内的", similarUsage: "类似用法：Guacamole is extra.（牛油果酱要加钱）" },
            },
            alternativeExpressions: [
              { textEn: "It's $29.99 a head. Drinks are included, but alcohol costs extra.", textZh: "每人29.99。饮料包含在内，酒水另付。", actionHint: "决定是否用餐", frequency: "common" },
              { textEn: "Adults are $29.99 — eat as much as you want. Free soft drinks. Beer and wine are separate.", textZh: "成人29.99——想吃多少吃多少。软饮免费。啤酒红酒另算。", actionHint: "确认入座", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds good. We'll take two.",
            textZh: "挺好的。我们两位。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Right this way. Here's your table. Just a few things — please use a clean plate each time you go up, and the dessert station is at the far end.",
            textZh: "这边请。这是你们的桌位。提醒一下——每次取餐请用新盘子，甜点区在最里面。",
            keyPhrases: [
              { en: "clean plate", zh: "新盘子/干净盘子" },
              { en: "each time you go up", zh: "每次去取餐" },
              { en: "dessert station", zh: "甜点区" },
              { en: "far end", zh: "最里面/最远处" },
            ],
            vocabNotes: {
              "go up": { meaningInContext: "在这句话里表示：去取餐台取食物", similarUsage: "类似用法：Go up and help yourself.（自己去取）" },
            },
            alternativeExpressions: [
              { textEn: "Here's your table! Grab a new plate each trip. Desserts are at the far end.", textZh: "这是你们的桌位！每次取餐用新盘子。甜点在最里面。", actionHint: "记住用新盘子和甜点区位置", frequency: "common" },
              { textEn: "Your table's right here. Quick reminder — fresh plates each time you go up, and the sweets station is at the back.", textZh: "桌子在这里。提醒一下——每次取餐用干净盘子，甜品区在后面。", actionHint: "按规定取餐", frequency: "occasional" },
            ],
            culturalNote: "美国自助餐通常要求每次取餐使用新盘子，这是卫生规定。",
          },
          {
            speaker: "you",
            textEn: "Got it. Can I get a refill on my soda?",
            textZh: "明白了。我的汽水可以续杯吗？",
            culturalNote: "\"refill\" 是续杯的标准用词。美国很多餐厅的软饮可以免费续杯。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Absolutely! Refills are free. I can bring you another one, or you can help yourself at the drink station over there.",
            textZh: "当然！续杯免费。我可以帮你拿一杯，或者你自己去那边的饮料区倒。",
            keyPhrases: [
              { en: "refills are free", zh: "续杯免费" },
              { en: "help yourself", zh: "自助/自己来" },
              { en: "drink station", zh: "饮料区" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing! Just head over to the soda fountain.", textZh: "没问题！去那边的饮料机就行。", actionHint: "自己去饮料机续杯", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go get it myself. Also, is the crab legs station open right now?",
            textZh: "我自己去倒。另外，蟹腿区现在开放吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "The seafood station opens at 5 PM for dinner service. It should be ready in about ten minutes. I'll let you know when it's out.",
            textZh: "海鲜区晚餐时间5点开放。大概还有十分钟。出来的时候我通知你。",
            keyPhrases: [
              { en: "seafood station", zh: "海鲜区" },
              { en: "dinner service", zh: "晚餐时段" },
            ],
            alternativeExpressions: [
              { textEn: "The crab legs come out at 5 for dinner. Should be about 10 minutes. I'll give you a heads-up!", textZh: "蟹腿5点晚餐时段出。大概还有10分钟。我到时候提醒你！", actionHint: "先吃别的等海鲜", frequency: "common" },
              { textEn: "Seafood opens at 5 PM. Almost time! I'll swing by and let you know.", textZh: "海鲜区5点开放。快了！到时候我过来告诉你。", actionHint: "先取其他食物", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect, thank you. One more question — is there a time limit for the buffet?",
            textZh: "太好了，谢谢。还有个问题——自助餐有时间限制吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "There's a two-hour limit during peak hours, but it's pretty relaxed today. Take your time and enjoy!",
            textZh: "高峰时段有两小时限制，但今天很宽松。慢慢享用吧！",
            keyPhrases: [
              { en: "time limit", zh: "时间限制" },
              { en: "peak hours", zh: "高峰时段" },
              { en: "take your time", zh: "慢慢来" },
            ],
            vocabNotes: {
              "peak hours": { meaningInContext: "在这句话里表示：就餐高峰期，人最多的时候", similarUsage: "类似用法：peak season（旺季）" },
            },
            alternativeExpressions: [
              { textEn: "Two-hour limit when we're packed, but today's quiet — take your time!", textZh: "人多的时候限两小时，但今天不忙——慢慢吃！", actionHint: "不用赶时间", frequency: "common" },
              { textEn: "Usually two hours during busy times, but no rush today. Enjoy!", textZh: "忙的时候一般限两小时，今天不赶。慢慢享用！", actionHint: "放心慢慢吃", frequency: "common" },
            ],
          },
        ],
      },

      // --- Flow 2: 特殊要求 ---
      {
        id: "buffet-special",
        titleZh: "特殊饮食与甜点",
        titleEn: "Dietary Needs & Desserts",
        description: "询问过敏原、寻找特定饮食选项、探索甜点区",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I have a shellfish allergy. Which dishes should I avoid?",
            textZh: "请问，我对贝类过敏。哪些菜我应该避免？",
            culturalNote: "在自助餐厅提前告知过敏信息很重要，因为食物可能交叉接触。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Thank you for letting me know. The dishes with shellfish are labeled with a red tag. I'd also recommend avoiding station three — there may be cross-contamination from the shrimp stir-fry.",
            textZh: "谢谢您告诉我。含贝类的菜品都有红色标签。我也建议避开三号区——可能有虾炒菜的交叉污染。",
            keyPhrases: [
              { en: "shellfish allergy", zh: "贝类过敏" },
              { en: "labeled with a red tag", zh: "有红色标签" },
              { en: "cross-contamination", zh: "交叉污染" },
            ],
            vocabNotes: {
              "cross-contamination": { meaningInContext: "在这句话里表示：不同食物之间的接触导致过敏原转移", similarUsage: "类似用法：Be careful of cross-contamination with nuts.（注意坚果的交叉污染）" },
            },
            alternativeExpressions: [
              { textEn: "Good to know. All allergens are listed on the cards by each dish.", textZh: "好的。每道菜旁边的卡片上都列了过敏原。", actionHint: "去看每道菜旁边的标签", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Are there any gluten-free options?",
            textZh: "明白了。有无麸质的选项吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Yes! The salad bar and the grilled meats are all gluten-free. We also have gluten-free rolls at the bread station — they're in the separate basket.",
            textZh: "有的！沙拉吧和烤肉都是无麸质的。面包区也有无麸质面包卷——在单独的篮子里。",
            keyPhrases: [
              { en: "gluten-free", zh: "无麸质" },
              { en: "salad bar", zh: "沙拉吧" },
              { en: "separate basket", zh: "单独的篮子" },
            ],
            alternativeExpressions: [
              { textEn: "The salad bar and grilled meats are all GF. There are also gluten-free rolls by the bread — separate basket.", textZh: "沙拉吧和烤肉都是无麸质的。面包区也有无麸质面包卷——单独的篮子。", actionHint: "去对应区域取餐", frequency: "common" },
              { textEn: "Plenty of GF options! Look for the green labels — those are all gluten-free.", textZh: "无麸质选择很多！找绿色标签的——那些都是无麸质的。", actionHint: "认准绿色标签", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. I also noticed the dessert station — can I go there anytime, or is it only after the main course?",
            textZh: "太好了。我看到甜点区了——是随时可以去，还是只能在主菜之后？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "You can go anytime! It's all-you-can-eat, so feel free to mix and match. The chocolate fountain is very popular — I'd recommend trying it with the strawberries.",
            textZh: "随时都可以去！都是无限量的，随意搭配。巧克力喷泉特别受欢迎——建议配草莓试试。",
            keyPhrases: [
              { en: "all-you-can-eat", zh: "无限量/吃到饱" },
              { en: "mix and match", zh: "随意搭配" },
              { en: "chocolate fountain", zh: "巧克力喷泉" },
            ],
            vocabNotes: {
              "all-you-can-eat": { meaningInContext: "在这句话里表示：自助餐形式，想吃多少吃多少", similarUsage: "类似用法：all-you-can-drink（无限畅饮）" },
            },
            alternativeExpressions: [
              { textEn: "Go for it anytime! It's all unlimited. The chocolate fountain is a must-try — dip some strawberries in it!", textZh: "随时去！都是无限量的。巧克力喷泉一定要试——蘸草莓吃！", actionHint: "直接去甜点区取", frequency: "common" },
              { textEn: "Desserts are open now — help yourself! Pro tip: the chocolate fountain with fruit is amazing.", textZh: "甜点区现在就开着——自己去取！建议：巧克力喷泉配水果超赞。", actionHint: "去甜点区尝尝", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yum! One more thing — can we take any food to go, or is it dine-in only?",
            textZh: "好吃！再问一下——可以打包带走吗，还是只能在这里吃？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "I'm sorry, the buffet is dine-in only. We can't allow food to be taken out. But you're welcome to eat as much as you'd like while you're here!",
            textZh: "抱歉，自助餐只限堂食，不能打包带走。但在这里想吃多少都可以！",
            keyPhrases: [
              { en: "dine-in only", zh: "只限堂食" },
              { en: "taken out", zh: "带走/打包" },
            ],
            alternativeExpressions: [
              { textEn: "Unfortunately, no to-go boxes with the buffet.", textZh: "不好意思，自助餐不提供打包盒。", actionHint: "不能打包，在店里尽量多吃", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "No problem. Everything is delicious — we'll definitely finish here. Thank you!",
            textZh: "没关系。一切都很好吃——我们肯定在这吃完。谢谢！",
          },
        ],
      },
    ],
  },

  // ==================== 早午餐 ====================
  {
    id: "restaurant-brunch",
    category: "restaurant",
    titleZh: "早午餐",
    titleEn: "Brunch",
    description: "在早午餐餐厅点餐，包括经典brunch菜品、鸡蛋的做法、含酒精饮品等",
    otherRole: "服务员",
    otherRoleIcon: "egg",
    flows: [
      // --- Flow 1: 标准早午餐点餐 ---
      {
        id: "standard-brunch",
        titleZh: "标准早午餐点餐",
        titleEn: "Standard Brunch Order",
        description: "了解菜单、点经典brunch菜品和饮品",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "服务员",
            textEn: "Good morning! Welcome to Sunday brunch. Can I start you off with some coffee or a drink?",
            textZh: "早上好！欢迎来吃周日早午餐。先来杯咖啡或者饮品？",
            keyPhrases: [
              { en: "start you off", zh: "先来/先给您上" },
            ],
            alternativeExpressions: [
              { textEn: "Morning! Can I get you something to drink while you look at the menu?", textZh: "早！看菜单的时候先来杯喝的？", actionHint: "先点饮品", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good morning! I'll have a coffee, please. And can I see the brunch menu?",
            textZh: "早上好！来杯咖啡。可以看一下早午餐菜单吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Here's the menu. Our specials today are the Eggs Benedict and the Stuffed French Toast. We also have bottomless mimosas for $18.",
            textZh: "菜单给您。今天的特色菜是班尼迪克蛋和法式吐司卷。我们还有18美元的无限量含羞草鸡尾酒。",
            keyPhrases: [
              { en: "specials", zh: "特色菜/今日特供" },
              { en: "Eggs Benedict", zh: "班尼迪克蛋" },
              { en: "bottomless mimosas", zh: "无限量含羞草鸡尾酒" },
            ],
            vocabNotes: {
              "bottomless": { meaningInContext: "在这句话里表示：无限续杯的", similarUsage: "类似用法：bottomless coffee（无限续杯咖啡）" },
              "Eggs Benedict": { meaningInContext: "在这句话里表示：一道经典早午餐菜——英式松饼配水波蛋、火腿和荷兰酱", similarUsage: "类似用法：Eggs Florentine（菠菜版本的班尼迪克蛋）" },
            },
            alternativeExpressions: [
              { textEn: "Here you go. Today we've got Eggs Benny and Stuffed French Toast. Oh, and bottomless mimosas for $18!", textZh: "给您菜单。今天有班尼蛋和法式吐司卷。还有18美元的无限量含羞草！", actionHint: "看菜单或直接点特色菜", frequency: "common" },
              { textEn: "Our brunch specials are the Benedict and the French Toast. We also do unlimited mimosas if you're interested.", textZh: "早午餐特色菜是班尼迪克蛋和法式吐司。如果有兴趣，我们还有无限量含羞草。", actionHint: "选一道特色菜", frequency: "occasional" },
            ],
            culturalNote: "Brunch 是 breakfast + lunch 的组合，通常周末供应，是美国很受欢迎的社交餐饮形式。",
          },
          {
            speaker: "you",
            textEn: "The Eggs Benedict sounds great. I'll have that. And what comes with it?",
            textZh: "班尼迪克蛋听起来不错。我要这个。配什么？",
            casualVersion: "I'll do the Eggs Benedict. What does it come with?",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "It comes with a side of roasted potatoes or a fruit cup. And how would you like your hollandaise — regular or with a little kick of sriracha?",
            textZh: "配烤土豆或水果杯。荷兰酱要普通的还是加点是拉差辣椒的？",
            keyPhrases: [
              { en: "side of", zh: "配菜" },
              { en: "fruit cup", zh: "水果杯" },
              { en: "hollandaise", zh: "荷兰酱" },
              { en: "a little kick", zh: "一点辣味" },
            ],
            vocabNotes: {
              "kick": { meaningInContext: "在这句话里表示：一点刺激的辣味或冲劲", similarUsage: "类似用法：This salsa has a nice kick.（这个莎莎酱有点辣劲）" },
            },
            alternativeExpressions: [
              { textEn: "It comes with potatoes or fruit on the side. And for the hollandaise — classic or spicy?", textZh: "配菜有土豆或水果。荷兰酱——经典的还是辣的？", actionHint: "选配菜和酱的口味", frequency: "common" },
              { textEn: "You can choose roasted potatoes or a fruit cup as your side. The hollandaise can be regular or with a sriracha kick.", textZh: "配菜可以选烤土豆或水果杯。荷兰酱可以普通的或者加是拉差辣味。", actionHint: "告诉服务员你的选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Roasted potatoes, please. And regular hollandaise is fine.",
            textZh: "烤土豆吧。荷兰酱就普通的。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Perfect. And would you like to add the bottomless mimosas? It's unlimited refills for two hours.",
            textZh: "好的。要加无限量含羞草鸡尾酒吗？两小时内无限续杯。",
            keyPhrases: [
              { en: "bottomless", zh: "无限量" },
              { en: "unlimited refills", zh: "无限续杯" },
            ],
            alternativeExpressions: [
              { textEn: "Want to add bottomless mimosas? Unlimited refills for two hours — $18.", textZh: "要加无限量含羞草吗？两小时无限续杯——18美元。", actionHint: "要或不要含酒精饮品", frequency: "common" },
              { textEn: "Can I interest you in our bottomless drink deal? Mimosas or Bloody Marys, $18 for two hours.", textZh: "要不要试试我们的无限畅饮？含羞草或血腥玛丽，两小时18美元。", actionHint: "选择是否加入畅饮", frequency: "occasional" },
            ],
            isBranchPoint: true,
            responseTip: "可以接受，也可以问有没有非酒精选项",
          },
          {
            speaker: "you",
            textEn: "Sure, why not! It's the weekend. I'll do the mimosas.",
            textZh: "好啊，反正周末嘛！我要含羞草。",
            culturalNote: "Mimosa 是橙汁加香槟，是最经典的 brunch 饮品。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Great choice! I'll bring your first one right out. The kitchen is a little backed up, so your food will be about 15 minutes. Is that okay?",
            textZh: "好选择！我马上给您端第一杯。厨房有点忙，您的菜大概要15分钟。可以吗？",
            keyPhrases: [
              { en: "backed up", zh: "积压/忙不过来" },
            ],
            vocabNotes: {
              "backed up": { meaningInContext: "在这句话里表示：订单太多，厨房忙不过来", similarUsage: "类似用法：Traffic is backed up.（交通堵塞了）" },
            },
            alternativeExpressions: [
              { textEn: "Awesome! Here's mimosa number one. Your food should be out in about 15 — kitchen's a bit slammed.", textZh: "太好了！第一杯含羞草给您。菜大概15分钟——厨房有点忙。", actionHint: "先喝着等菜", frequency: "common" },
              { textEn: "Coming right up! Just so you know, there's a short wait on food — maybe 15 minutes. The mimosa will keep you company!", textZh: "马上来！提醒一下，菜要等一小会——大概15分钟。含羞草先陪着您！", actionHint: "边喝边等", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "No rush at all. We're in no hurry. Thanks!",
            textZh: "不急的。我们不赶时间。谢谢！",
            casualVersion: "No worries, we've got time!",
          },
        ],
      },

      // --- Flow 2: 鸡蛋做法与定制 ---
      {
        id: "brunch-eggs-custom",
        titleZh: "鸡蛋做法与定制",
        titleEn: "Egg Preparations & Customization",
        description: "了解鸡蛋的各种做法，进行个性化定制",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "服务员",
            textEn: "Have you decided? Our Build Your Own Breakfast is really popular.",
            textZh: "想好了吗？我们的自选早餐套餐特别受欢迎。",
            alternativeExpressions: [
              { textEn: "Ready to order? The make-your-own breakfast plate is a great deal.", textZh: "可以点了吗？自选早餐拼盘很划算。", actionHint: "可以尝试自选套餐", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I'll do the Build Your Own. How does it work?",
            textZh: "好的，我要自选套餐。怎么选？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "You pick your eggs — scrambled, fried, poached, or an omelet. Then choose two sides: bacon, sausage, hash browns, toast, or a pancake.",
            textZh: "先选鸡蛋做法——炒蛋、煎蛋、水波蛋或蛋卷。再选两个配菜：培根、香肠、薯饼、吐司或一片煎饼。",
            keyPhrases: [
              { en: "scrambled", zh: "炒蛋" },
              { en: "fried", zh: "煎蛋" },
              { en: "poached", zh: "水波蛋" },
              { en: "omelet", zh: "蛋卷" },
              { en: "hash browns", zh: "薯饼" },
            ],
            vocabNotes: {
              "scrambled": { meaningInContext: "在这句话里表示：搅碎打散后炒的鸡蛋", similarUsage: "类似用法：scrambled eggs with cheese（芝士炒蛋）" },
              "poached": { meaningInContext: "在这句话里表示：不带壳在水中煮熟的鸡蛋（水波蛋）", similarUsage: "类似用法：poached salmon（水煮三文鱼）" },
            },
            alternativeExpressions: [
              { textEn: "Pick your eggs — scrambled, fried, poached, or an omelet. Then two sides from this list.", textZh: "先选鸡蛋——炒蛋、煎蛋、水波蛋或蛋卷。然后从列表里选两个配菜。", actionHint: "先选蛋的做法再选配菜", frequency: "common" },
              { textEn: "First, how do you want your eggs? And then pick any two sides — bacon, sausage, hash browns, toast, or a pancake.", textZh: "先说蛋怎么做？然后选两个配菜——培根、香肠、薯饼、吐司或煎饼。", actionHint: "告诉服务员蛋的做法和配菜", frequency: "common" },
            ],
            culturalNote: "在美国点早餐时，服务员几乎一定会问鸡蛋怎么做。提前知道这些词很有用。",
          },
          {
            speaker: "you",
            textEn: "I'll have scrambled eggs, please. And for sides, bacon and toast.",
            textZh: "我要炒蛋。配菜选培根和吐司。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "How would you like your toast — white, wheat, or sourdough?",
            textZh: "吐司要哪种——白面包、全麦还是酸面包？",
            keyPhrases: [
              { en: "white", zh: "白面包" },
              { en: "wheat", zh: "全麦" },
              { en: "sourdough", zh: "酸面包" },
            ],
            alternativeExpressions: [
              { textEn: "What kind of toast — white, whole wheat, or sourdough?", textZh: "吐司要哪种——白面包、全麦还是酸面包？", actionHint: "选一种面包", frequency: "common" },
              { textEn: "For your toast, we've got white, wheat, sourdough, and rye.", textZh: "吐司有白面包、全麦、酸面包和黑麦。", actionHint: "告诉服务员你的选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sourdough, please.",
            textZh: "酸面包。",
            culturalNote: "Sourdough（酸面包）在美国西海岸尤其受欢迎，旧金山的酸面包特别出名。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "You got it! And your friend — does she need a few more minutes?",
            textZh: "好嘞！你的朋友——她还需要再看看吗？",
            alternativeExpressions: [
              { textEn: "Got it! And for her — ready to order too?", textZh: "好的！她呢——也准备好了吗？", actionHint: "帮朋友点单", frequency: "common" },
              { textEn: "Perfect! Does your friend know what she'd like?", textZh: "好的！你的朋友想好了吗？", actionHint: "替朋友点或让她再看看", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "She'll have the avocado toast with a poached egg on top. And can she substitute the side salad for fruit?",
            textZh: "她要牛油果吐司配一个水波蛋。配菜可以把沙拉换成水果吗？",
            culturalNote: "\"substitute A for B\" 是换配菜的标准用法——用 A 替换 B。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Absolutely, no problem! There's a small upcharge of $1.50 for the fruit. Is that okay?",
            textZh: "完全没问题！水果要加1.5美元。可以吗？",
            keyPhrases: [
              { en: "substitute", zh: "替换" },
              { en: "upcharge", zh: "加价/补差价" },
            ],
            vocabNotes: {
              "upcharge": { meaningInContext: "在这句话里表示：替换配菜需要额外支付的费用", similarUsage: "类似用法：Is there an upcharge for oat milk?（换燕麦奶要加钱吗？）" },
            },
            alternativeExpressions: [
              { textEn: "Sure! Swapping the salad for fruit is an extra $1.50. That cool?", textZh: "没问题！沙拉换水果要加1.5美元。可以吗？", actionHint: "同意或保持原配菜", frequency: "common" },
              { textEn: "Of course! Fruit instead of salad — just a small upcharge of $1.50.", textZh: "当然！水果替换沙拉——只加1.5美元。", actionHint: "确认即可", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's fine. Thank you!",
            textZh: "没问题。谢谢！",
          },
        ],
      },
    ],
  },

  // ==================== 美食车 ====================
  {
    id: "restaurant-foodtruck",
    category: "restaurant",
    titleZh: "美食车",
    titleEn: "Food Truck",
    description: "在路边美食车点餐，包括看菜单、下单、询问食材和等餐",
    otherRole: "美食车店主",
    otherRoleIcon: "truck",
    flows: [
      // --- Flow 1: 标准美食车点餐 ---
      {
        id: "standard-foodtruck",
        titleZh: "标准点餐",
        titleEn: "Standard Food Truck Order",
        description: "在美食车前排队、看菜单、下单、取餐",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "店主",
            textEn: "Hey! What can I get for you today?",
            textZh: "嘿！今天吃点什么？",
            alternativeExpressions: [
              { textEn: "What'll it be?", textZh: "来点什么？", actionHint: "直接说你要什么", frequency: "common" },
              { textEn: "What are you in the mood for?", textZh: "想吃点什么？", actionHint: "可以说具体的或者问推荐", frequency: "occasional" },
            ],
            culturalNote: "美食车的氛围通常比餐厅随意很多，语言风格也更轻松。",
          },
          {
            speaker: "you",
            textEn: "Hi! This is my first time here. What do you recommend?",
            textZh: "你好！我第一次来。有什么推荐的？",
            casualVersion: "Hey, first time! What's good here?",
          },
          {
            speaker: "them",
            role: "店主",
            textEn: "Our Korean BBQ tacos are our best seller. The spicy pork is amazing, and the kimchi slaw really makes it. You can get two tacos for $10 or three for $13.",
            textZh: "我们的韩式烧烤塔可最畅销。辣猪肉特别好吃，泡菜沙拉才是点睛之笔。两个塔可10美元，三个13美元。",
            keyPhrases: [
              { en: "best seller", zh: "最畅销的" },
              { en: "makes it", zh: "点睛之笔/画龙点睛" },
            ],
            vocabNotes: {
              "makes it": { meaningInContext: "在这句话里表示：让整道菜变得特别好、画龙点睛", similarUsage: "类似用法：The sauce really makes this dish.（酱料是这道菜的灵魂）" },
              "slaw": { meaningInContext: "在这句话里表示：凉拌卷心菜丝沙拉（coleslaw 的简称）", similarUsage: "类似用法：coleslaw（卷心菜沙拉）" },
            },
            alternativeExpressions: [
              { textEn: "The Korean BBQ tacos are what we're known for. Spicy pork with kimchi slaw — two for $10, three for $13.", textZh: "韩式烧烤塔可是我们的招牌。辣猪肉配泡菜沙拉——两个10美元，三个13。", actionHint: "选两个或三个", frequency: "common" },
              { textEn: "Gotta try the BBQ tacos — they're our top seller. The kimchi slaw on top really takes it to the next level.", textZh: "一定要试烧烤塔可——最畅销的。上面的泡菜沙拉真的绝了。", actionHint: "点这道招牌菜", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds awesome! I'll take three tacos. Can I get one of them less spicy?",
            textZh: "听起来不错！我要三个塔可。可以有一个不那么辣的吗？",
          },
          {
            speaker: "them",
            role: "店主",
            textEn: "Sure! I'll make one mild for you. Want to add a drink? We've got homemade horchata and fresh lemonade.",
            textZh: "没问题！给你做一个不辣的。要加饮料吗？我们有自制欧恰塔和鲜榨柠檬水。",
            keyPhrases: [
              { en: "mild", zh: "不辣的/微辣" },
              { en: "homemade", zh: "自制的" },
              { en: "horchata", zh: "欧恰塔（墨西哥米浆饮料）" },
            ],
            alternativeExpressions: [
              { textEn: "No problem, one mild. Want a drink too? We have fresh lemonade and homemade horchata.", textZh: "没问题，一个不辣的。要喝的吗？有鲜榨柠檬水和自制欧恰塔。", actionHint: "选一种饮料或不要", frequency: "common" },
              { textEn: "One mild, got it. Oh, you should try our horchata — it goes great with the tacos!", textZh: "一个不辣的，好的。对了，试试我们的欧恰塔——配塔可特别好！", actionHint: "可以试试推荐的饮品", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What's horchata? I've never tried it.",
            textZh: "欧恰塔是什么？我没喝过。",
          },
          {
            speaker: "them",
            role: "店主",
            textEn: "It's a sweet rice milk drink with cinnamon. It's really refreshing, especially with spicy food. Want to try a sample?",
            textZh: "是一种甜的肉桂米浆饮料。特别解辣，配辣的东西吃很爽。要试喝一口吗？",
            keyPhrases: [
              { en: "rice milk", zh: "米浆" },
              { en: "cinnamon", zh: "肉桂" },
              { en: "try a sample", zh: "试喝/试尝一下" },
            ],
            alternativeExpressions: [
              { textEn: "It's like a sweet cinnamon rice milk. Really refreshing with spicy food. Here, try a taste!", textZh: "就像甜的肉桂米浆。配辣的特别解辣。来，尝一口！", actionHint: "试喝一小口", frequency: "common" },
              { textEn: "Imagine sweet rice milk with cinnamon — super creamy. Want a quick sample?", textZh: "想象一下甜米浆加肉桂——超级顺滑。要试喝一下吗？", actionHint: "先尝再决定", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please! Oh, that's really good. I'll take a large horchata.",
            textZh: "好的！嗯，真好喝。来一杯大杯欧恰塔。",
          },
          {
            speaker: "them",
            role: "店主",
            textEn: "Awesome. That'll be $17 total. Cash or card? We also take Venmo.",
            textZh: "好嘞。一共17美元。现金还是刷卡？我们也收 Venmo。",
            keyPhrases: [
              { en: "that'll be", zh: "一共是" },
              { en: "cash or card", zh: "现金还是刷卡" },
            ],
            vocabNotes: {
              "Venmo": { meaningInContext: "在这句话里表示：一种美国流行的手机支付应用", similarUsage: "类似用法：I'll Venmo you.（我用 Venmo 转给你）" },
            },
            alternativeExpressions: [
              { textEn: "$17 total. Cash, card, or Venmo?", textZh: "一共17美元。现金、刷卡还是Venmo？", actionHint: "选一种付款方式", frequency: "common" },
              { textEn: "That'll be $17. We take everything — cash, card, Apple Pay, Venmo.", textZh: "17美元。什么都收——现金、卡、Apple Pay、Venmo。", actionHint: "用你方便的方式付", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Card, please.",
            textZh: "刷卡。",
          },
          {
            speaker: "them",
            role: "店主",
            textEn: "Just tap or insert right here. Your order will be ready in about 5 minutes — I'll call your name. What's the name?",
            textZh: "在这里刷一下或插卡。大概5分钟好，我会叫你名字。叫什么？",
            keyPhrases: [
              { en: "tap or insert", zh: "感应或插卡" },
              { en: "call your name", zh: "叫你名字" },
            ],
            alternativeExpressions: [
              { textEn: "Tap your card here. About 5 minutes — what name should I call?", textZh: "在这里刷卡。大概5分钟——叫什么名字？", actionHint: "付款并报上名字", frequency: "common" },
              { textEn: "Card goes right there. I'll shout your name when it's ready — who am I looking for?", textZh: "卡放这里。好了我会喊你名字——叫什么？", actionHint: "说名字等叫号", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Wayne. W-A-Y-N-E. Thanks!",
            textZh: "Wayne。W-A-Y-N-E。谢谢！",
          },
        ],
      },

      // --- Flow 2: 饮食限制与过敏 ---
      {
        id: "foodtruck-dietary",
        titleZh: "饮食限制咨询",
        titleEn: "Dietary Restrictions",
        description: "在美食车询问食材、过敏原和素食选项",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm interested in the tacos, but I'm vegetarian. Do you have any meat-free options?",
            textZh: "你好，我想吃塔可，但我吃素。有没有无肉的选项？",
          },
          {
            speaker: "them",
            role: "店主",
            textEn: "Totally! We have a jackfruit taco that's vegan, and a grilled veggie taco with black beans and roasted corn. Both are really popular.",
            textZh: "当然有！我们有菠萝蜜塔可，是纯素的；还有一款烤蔬菜塔可，配黑豆和烤玉米。都很受欢迎。",
            keyPhrases: [
              { en: "jackfruit", zh: "菠萝蜜" },
              { en: "vegan", zh: "纯素" },
              { en: "black beans", zh: "黑豆" },
            ],
            alternativeExpressions: [
              { textEn: "For sure! We've got a couple veggie options on the menu.", textZh: "当然！菜单上有几个素的选择。", actionHint: "看菜单上标注 V 的选项", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "The grilled veggie sounds good. Does it contain any dairy? I'm also lactose intolerant.",
            textZh: "烤蔬菜的听起来不错。里面有奶制品吗？我也乳糖不耐受。",
          },
          {
            speaker: "them",
            role: "店主",
            textEn: "It normally comes with sour cream and cotija cheese, but I can leave those off for you. No problem at all.",
            textZh: "一般会配酸奶油和墨西哥奶酪，但我可以帮你去掉。完全没问题。",
            keyPhrases: [
              { en: "leave those off", zh: "去掉/不放" },
              { en: "sour cream", zh: "酸奶油" },
              { en: "cotija cheese", zh: "墨西哥奶酪" },
            ],
            vocabNotes: {
              "leave off": { meaningInContext: "在这句话里表示：不放、去掉某种配料", similarUsage: "类似用法：Can you leave off the onions?（可以不放洋葱吗？）" },
            },
            alternativeExpressions: [
              { textEn: "It usually has sour cream and cheese, but I can skip both — no problem.", textZh: "一般会加酸奶油和奶酪，不过两个都可以不放——没问题。", actionHint: "确认去掉奶制品", frequency: "common" },
              { textEn: "There's dairy in the toppings, but I can leave that off and add extra salsa instead.", textZh: "配料里有奶制品，但我可以不放，多加点莎莎酱代替。", actionHint: "同意或提出替代方案", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please leave off the dairy. What sauces do you have instead?",
            textZh: "好的，奶制品不要。有什么其他酱料代替吗？",
          },
          {
            speaker: "them",
            role: "店主",
            textEn: "We have a house-made avocado crema that's dairy-free, and a smoky chipotle salsa. Both are great on the veggie taco.",
            textZh: "我们有自制的牛油果酱，不含奶；还有烟熏辣椒莎莎酱。配蔬菜塔可都很好吃。",
            keyPhrases: [
              { en: "house-made", zh: "自制的" },
              { en: "dairy-free", zh: "不含奶的" },
              { en: "chipotle", zh: "烟熏辣椒" },
            ],
            alternativeExpressions: [
              { textEn: "We've got an avocado crema — totally dairy-free — and a chipotle salsa. Both are awesome on veggie tacos.", textZh: "我们有牛油果酱——完全不含奶——和烟熏辣椒莎莎酱。配蔬菜塔可都很好。", actionHint: "选一种酱料", frequency: "common" },
              { textEn: "I'd recommend the avocado crema — no dairy, and it's amazing. Or we have a smoky salsa if you like a kick.", textZh: "推荐牛油果酱——不含奶，特别好吃。或者烟熏莎莎酱，如果你喜欢辣的话。", actionHint: "根据口味选酱", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with the avocado crema. Two veggie tacos, no dairy, with avocado crema.",
            textZh: "我选牛油果酱。两个蔬菜塔可，不放奶制品，加牛油果酱。",
          },
          {
            speaker: "them",
            role: "店主",
            textEn: "Got it — two veggie tacos, dairy-free, avocado crema. That'll be $11. Give me about 5 minutes!",
            textZh: "好的——两个蔬菜塔可，不含奶，牛油果酱。11美元。大概5分钟！",
            alternativeExpressions: [
              { textEn: "Two veggie, no dairy, avo crema. $11 — be ready in 5!", textZh: "两个蔬菜，不放奶制品，牛油果酱。11美元——5分钟好！", actionHint: "付款等取餐", frequency: "common" },
              { textEn: "Perfect — two dairy-free veggie tacos with avocado crema coming up. That's $11.", textZh: "好的——两个无奶蔬菜塔可配牛油果酱马上好。11美元。", actionHint: "付款后在旁边等", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Thank you for being so accommodating!",
            textZh: "太好了。谢谢你这么周到！",
            culturalNote: "\"accommodating\" 形容服务人员愿意配合你的需求，是很好的称赞用词。",
          },
        ],
      },
    ],
  },

  // ==================== 酒店送餐 ====================
  {
    id: "restaurant-roomservice",
    category: "restaurant",
    titleZh: "酒店送餐",
    titleEn: "Room Service",
    description: "在酒店通过电话点餐送到房间，包括下单、确认送达时间和餐盘回收",
    otherRole: "客房服务接线员",
    otherRoleIcon: "bell",
    flows: [
      // --- Flow 1: 标准点餐 ---
      {
        id: "standard-roomservice",
        titleZh: "标准客房送餐",
        titleEn: "Standard Room Service Order",
        description: "打电话到酒店客房服务点餐、确认送达时间",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "接线员",
            textEn: "Room service, good evening. How may I help you?",
            textZh: "客房服务，晚上好。有什么可以帮您？",
            alternativeExpressions: [
              { textEn: "In-room dining, how can I assist you tonight?", textZh: "客房餐饮服务，今晚有什么需要？", actionHint: "直接说想点餐", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Hi, I'd like to order dinner to my room, please. I'm in room 712.",
            textZh: "你好，我想在房间点餐。我住712房间。",
          },
          {
            speaker: "them",
            role: "接线员",
            textEn: "Of course, Mr. Wang. I have your room pulled up. Would you like to hear tonight's specials, or do you have the in-room dining menu?",
            textZh: "当然，王先生。我已经调出您的房间信息了。您想听听今晚的特色菜，还是已经有客房餐饮菜单了？",
            keyPhrases: [
              { en: "pulled up", zh: "调出（信息）" },
              { en: "in-room dining menu", zh: "客房餐饮菜单" },
            ],
            vocabNotes: {
              "pulled up": { meaningInContext: "在这句话里表示：在系统里调出、查到你的信息", similarUsage: "类似用法：Let me pull up your reservation.（让我调出你的预订信息）" },
            },
            alternativeExpressions: [
              { textEn: "Of course, Mr. Wang. Do you have the room service menu, or would you like to hear our specials?", textZh: "当然，王先生。您有客房服务菜单吗，还是想听听我们的特色菜？", actionHint: "直接点菜或听推荐", frequency: "common" },
              { textEn: "Room 712, yes. I've got your info here. What would you like to order tonight?", textZh: "712房间，好的。您的信息我这里有。今晚想点什么？", actionHint: "报出你要点的菜", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have the menu. I'd like the grilled salmon and a Caesar salad to start. And a bottle of still water.",
            textZh: "我有菜单。我要烤三文鱼，先来一份凯撒沙拉。再加一瓶矿泉水。",
            culturalNote: "\"still water\" 是不含气的水，\"sparkling water\" 是气泡水。酒店经常会问你要哪种。",
          },
          {
            speaker: "them",
            role: "接线员",
            textEn: "Excellent. For the salmon, would you like it with the mashed potatoes or steamed vegetables?",
            textZh: "好的。三文鱼配土豆泥还是蒸蔬菜？",
            keyPhrases: [
              { en: "mashed potatoes", zh: "土豆泥" },
              { en: "steamed vegetables", zh: "蒸蔬菜" },
            ],
            alternativeExpressions: [
              { textEn: "The salmon comes with mashed potatoes or steamed veggies. Which would you prefer?", textZh: "三文鱼可以配土豆泥或蒸蔬菜。您要哪个？", actionHint: "选一种配菜", frequency: "common" },
              { textEn: "For the side, would you like the mash or the seasonal vegetables?", textZh: "配菜要土豆泥还是时蔬？", actionHint: "告诉对方你的选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Steamed vegetables, please. How long will the delivery take?",
            textZh: "蒸蔬菜。送餐大概多久？",
          },
          {
            speaker: "them",
            role: "接线员",
            textEn: "Your order should arrive in approximately 35 to 40 minutes. We'll knock and announce 'room service' when we're at your door.",
            textZh: "您的餐大约35到40分钟送到。到了会敲门并说'客房服务'。",
            keyPhrases: [
              { en: "approximately", zh: "大约" },
              { en: "announce", zh: "通报" },
            ],
            alternativeExpressions: [
              { textEn: "It should be at your door in about 35 to 40 minutes. We'll knock and say room service.", textZh: "大约35到40分钟送到您门口。我们会敲门说客房服务。", actionHint: "在房间等候即可", frequency: "common" },
              { textEn: "Expect about 30 to 40 minutes. Someone will knock and announce themselves at your door.", textZh: "大概30到40分钟。会有人到门口敲门通报。", actionHint: "耐心等待送餐", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That works. One more thing — is there a service charge, or should I tip separately?",
            textZh: "可以。再问一下——有服务费吗，还是需要另外给小费？",
            culturalNote: "很多酒店会自动在客房送餐账单上加18-22%的服务费。",
          },
          {
            speaker: "them",
            role: "接线员",
            textEn: "There is an 18% service charge that will be added to your bill automatically. It will be charged to your room. You're welcome to add additional gratuity if you'd like.",
            textZh: "会自动在账单上加18%的服务费，直接记到您的房间。如果您愿意，也可以额外给小费。",
            keyPhrases: [
              { en: "service charge", zh: "服务费" },
              { en: "charged to your room", zh: "记到房间账上" },
              { en: "gratuity", zh: "小费" },
            ],
            vocabNotes: {
              "gratuity": { meaningInContext: "在这句话里表示：小费（tip 的正式说法）", similarUsage: "类似用法：Gratuity is included.（已含小费）" },
            },
            alternativeExpressions: [
              { textEn: "An 18% service charge is included automatically. It goes on your room bill. Extra tip is up to you.", textZh: "自动含18%服务费，记到房间账上。额外小费随您心意。", actionHint: "了解费用即可", frequency: "common" },
              { textEn: "There's a built-in 18% gratuity. Everything gets charged to room 712. You can add more if you'd like.", textZh: "已含18%小费。全部记到712房间。如果您愿意可以额外加。", actionHint: "不需要另外付现金", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Thank you! I'll be waiting.",
            textZh: "明白了。谢谢！我等着。",
          },
        ],
      },

      // --- Flow 2: 特殊要求与托盘回收 ---
      {
        id: "roomservice-tray",
        titleZh: "用餐后托盘回收",
        titleEn: "Tray Pickup After Meal",
        description: "用完餐后请人来收餐盘，处理托盘等",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm calling from room 712. I've finished my meal and would like the tray picked up.",
            textZh: "你好，我是712房间。我吃完了，想请人来收餐盘。",
          },
          {
            speaker: "them",
            role: "接线员",
            textEn: "Certainly. I'll send someone up within 15 minutes. You can also place the tray outside your door if you prefer.",
            textZh: "好的。15分钟内会派人来收。您也可以把托盘放在门外，如果方便的话。",
            keyPhrases: [
              { en: "send someone up", zh: "派人上去" },
              { en: "place the tray outside", zh: "把托盘放门外" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! You can just set it in the hallway and we'll grab it.", textZh: "好的！放走廊里就行，我们会来收。", actionHint: "把餐盘放门外走廊", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll put it outside. Also, I noticed the steak was a bit overcooked. I had asked for medium-rare.",
            textZh: "我放门外吧。另外，我发现牛排有点过熟了。我点的是三分熟。",
          },
          {
            speaker: "them",
            role: "接线员",
            textEn: "I sincerely apologize for that. I'll let the kitchen know. Would you like us to send up a replacement, or can I offer you a complimentary dessert?",
            textZh: "非常抱歉。我会通知厨房。您需要我们重新送一份，还是我送您一份免费甜点？",
            keyPhrases: [
              { en: "sincerely apologize", zh: "真诚道歉" },
              { en: "replacement", zh: "替换品/重新做一份" },
              { en: "complimentary", zh: "免费赠送的" },
            ],
            vocabNotes: {
              "complimentary": { meaningInContext: "在这句话里表示：免费赠送的（作为补偿）", similarUsage: "类似用法：complimentary breakfast（免费早餐）" },
            },
            alternativeExpressions: [
              { textEn: "I'm very sorry about that. I can send up a new steak or offer a free dessert as an apology.", textZh: "非常抱歉。我可以重新送一份牛排，或者送一份免费甜点作为补偿。", actionHint: "选择重做或接受甜点", frequency: "common" },
              { textEn: "My apologies! Would you like us to redo the steak, or can I comp you a dessert instead?", textZh: "很抱歉！要重做牛排，还是送您一份甜点？", actionHint: "选一种补偿方式", frequency: "occasional" },
            ],
            isBranchPoint: true,
            responseTip: "可以接受重新做，也可以接受甜点补偿",
          },
          {
            speaker: "you",
            textEn: "I'm too full for another steak, but I'd love the complimentary dessert. What do you have?",
            textZh: "我已经吃饱了不需要再来一份牛排，但免费甜点我很乐意。有什么？",
          },
          {
            speaker: "them",
            role: "接线员",
            textEn: "We have a New York cheesecake, chocolate lava cake, or crème brûlée. All excellent choices.",
            textZh: "有纽约芝士蛋糕、巧克力熔岩蛋糕或焦糖布蕾。都非常好。",
            keyPhrases: [
              { en: "cheesecake", zh: "芝士蛋糕" },
              { en: "lava cake", zh: "熔岩蛋糕" },
              { en: "crème brûlée", zh: "焦糖布蕾" },
            ],
            alternativeExpressions: [
              { textEn: "We have cheesecake, chocolate lava cake, or crème brûlée. They're all amazing.", textZh: "有芝士蛋糕、巧克力熔岩蛋糕和焦糖布蕾。都非常好吃。", actionHint: "选一种甜点", frequency: "common" },
              { textEn: "For dessert, I'd recommend the lava cake or the crème brûlée — both are chef's favorites.", textZh: "甜点的话推荐熔岩蛋糕或焦糖布蕾——都是厨师最爱。", actionHint: "选一款", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The crème brûlée sounds perfect. Thank you for making it right.",
            textZh: "焦糖布蕾听起来很好。谢谢你们妥善处理。",
            culturalNote: "\"making it right\" 是称赞对方解决问题的好说法。",
          },
          {
            speaker: "them",
            role: "接线员",
            textEn: "It's my pleasure. I'll have the crème brûlée sent up to you within 20 minutes. Again, my apologies for the inconvenience.",
            textZh: "很荣幸为您服务。焦糖布蕾会在20分钟内送到。再次为不便表示歉意。",
            keyPhrases: [
              { en: "it's my pleasure", zh: "很荣幸为您服务" },
              { en: "apologies for the inconvenience", zh: "为不便表示歉意" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! The crème brûlée will be up in about 20 minutes. Sorry again for the mix-up.", textZh: "当然！焦糖布蕾大约20分钟送到。再次为失误道歉。", actionHint: "等甜点送来", frequency: "common" },
              { textEn: "Happy to help. I'll have that sent to your room shortly. Again, I apologize for the steak.", textZh: "很高兴能帮到您。马上送到您房间。再次为牛排的事道歉。", actionHint: "在房间等就好", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "No worries at all. Have a good night!",
            textZh: "没关系的。晚安！",
          },
        ],
      },
    ],
  },

  // ==================== 餐厅投诉 ====================
  {
    id: "restaurant-complaint",
    category: "restaurant",
    titleZh: "餐厅投诉",
    titleEn: "Restaurant Complaint",
    description: "在餐厅遇到问题时投诉，包括上错菜、食物质量不佳、等待太久等",
    otherRole: "服务员/经理",
    otherRoleIcon: "alert",
    flows: [
      // --- Flow 1: 上错菜 ---
      {
        id: "wrong-order",
        titleZh: "上错菜",
        titleEn: "Wrong Order",
        description: "收到的菜和点的不一样，需要纠正",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I think there's been a mix-up with my order. I ordered the grilled chicken, but this looks like the fried chicken.",
            textZh: "不好意思，我的菜好像上错了。我点的是烤鸡，但这看着像炸鸡。",
            culturalNote: "用 \"I think there's been a mix-up\" 比直接说 \"You gave me the wrong food\" 更礼貌。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Oh, I'm so sorry about that! Let me check your order... You're right, you ordered the grilled chicken. I'll fix this right away.",
            textZh: "哦，非常抱歉！让我查一下您的单……确实，您点的是烤鸡。我马上帮您换。",
            keyPhrases: [
              { en: "mix-up", zh: "搞混了" },
              { en: "fix this right away", zh: "马上解决" },
            ],
            alternativeExpressions: [
              { textEn: "My apologies! That's our mistake. Let me get the kitchen to redo it.", textZh: "抱歉！是我们的失误。我让厨房重做。", actionHint: "等新菜即可", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. Will it take long? We're kind of in a hurry.",
            textZh: "谢谢。会很久吗？我们有点赶时间。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "I'll ask the kitchen to prioritize it. Should be about 8 to 10 minutes. In the meantime, can I get you a complimentary appetizer while you wait?",
            textZh: "我让厨房优先做。大概8到10分钟。等的时候要不要来一份免费开胃菜？",
            keyPhrases: [
              { en: "prioritize", zh: "优先处理" },
              { en: "in the meantime", zh: "在此期间" },
              { en: "complimentary appetizer", zh: "免费开胃菜" },
            ],
            vocabNotes: {
              "prioritize": { meaningInContext: "在这句话里表示：让厨房优先处理你的菜，排到前面", similarUsage: "类似用法：We'll prioritize your request.（我们会优先处理你的请求）" },
            },
            alternativeExpressions: [
              { textEn: "I'll rush it to the kitchen. About 8 minutes. Want something to munch on while you wait?", textZh: "我让厨房加急。大概8分钟。等的时候要来点吃的吗？", actionHint: "接受或婉拒免费开胃菜", frequency: "common" },
              { textEn: "I'll have the kitchen put yours first. Should be quick. Can I bring you a starter on the house in the meantime?", textZh: "我让厨房优先做你的。很快。等的时候要不要来一份免费前菜？", actionHint: "接受补偿", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be great, thank you. I appreciate it.",
            textZh: "那太好了，谢谢。非常感谢。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Here's your grilled chicken. Again, I'm really sorry for the mistake. I've also spoken with my manager, and we'll be taking the chicken off your bill.",
            textZh: "您的烤鸡来了。再次为错误道歉。我也跟经理说了，烤鸡这道菜会从您的账单上去掉。",
            keyPhrases: [
              { en: "taking it off your bill", zh: "从账单上去掉/免单" },
            ],
            vocabNotes: {
              "off your bill": { meaningInContext: "在这句话里表示：从你的账单中扣除、不收这道菜的钱", similarUsage: "类似用法：We'll take 20% off your bill.（给您打八折）" },
            },
            alternativeExpressions: [
              { textEn: "Here you go. The manager said this one's on the house.", textZh: "给您。经理说这道菜免单。", actionHint: "on the house 就是免费的意思", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Wow, that's very generous. Thank you so much!",
            textZh: "哇，太大方了。非常感谢！",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "It's the least we can do. Please enjoy your meal, and let me know if there's anything else I can help with.",
            textZh: "这是我们应该做的。请享用，有需要随时叫我。",
            keyPhrases: [
              { en: "the least we can do", zh: "这是我们应该做的" },
            ],
            alternativeExpressions: [
              { textEn: "It's the least we can do. Enjoy, and just wave if you need anything.", textZh: "这是应该的。慢用，有需要招呼我。", actionHint: "享受用餐", frequency: "common" },
              { textEn: "Happy to make it right. Let me know if there's anything else I can do for you.", textZh: "很高兴能妥善解决。还有什么需要尽管说。", actionHint: "继续用餐", frequency: "common" },
            ],
          },
        ],
      },

      // --- Flow 2: 食物质量问题与等待太久 ---
      {
        id: "quality-and-wait",
        titleZh: "食物质量与等待太久",
        titleEn: "Food Quality & Long Wait",
        description: "食物不新鲜或等了太久，需要与经理沟通",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, we've been waiting over 45 minutes for our food. Is everything okay with our order?",
            textZh: "不好意思，我们等了超过45分钟了。我们的菜没问题吧？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "I'm so sorry for the wait. Let me check with the kitchen right now. I'll be right back.",
            textZh: "非常抱歉让您久等了。我马上去厨房问一下。马上回来。",
            keyPhrases: [
              { en: "sorry for the wait", zh: "抱歉让您等了" },
              { en: "check with the kitchen", zh: "去厨房问问" },
            ],
            alternativeExpressions: [
              { textEn: "I apologize for the delay. Let me go find out what's happening. Be right back.", textZh: "为延误道歉。我去问问什么情况。马上回来。", actionHint: "等服务员回来报告", frequency: "common" },
              { textEn: "So sorry about the wait. I'll check on your order right now.", textZh: "等久了真抱歉。我现在就去查你们的单。", actionHint: "耐心等一下", frequency: "common" },
            ],
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "I checked, and your order should be out in about 5 more minutes. We're very busy tonight — I apologize again. Can I get you another round of drinks on the house while you wait?",
            textZh: "我问了，您的菜大概再5分钟就好。今晚特别忙——再次道歉。等的时候再来一轮免费饮品好吗？",
            keyPhrases: [
              { en: "should be out", zh: "应该会上来" },
              { en: "round of drinks", zh: "一轮饮品" },
              { en: "on the house", zh: "免费的/店家请客" },
            ],
            vocabNotes: {
              "on the house": { meaningInContext: "在这句话里表示：由店家买单、免费的", similarUsage: "类似用法：Dessert is on the house tonight.（今晚甜品免单）" },
            },
            alternativeExpressions: [
              { textEn: "Good news — your food will be out in 5. I'm really sorry again. Can I bring free drinks while you wait?", textZh: "好消息——您的菜5分钟就到。再次抱歉。等的时候要来免费饮品吗？", actionHint: "接受免费饮品", frequency: "common" },
              { textEn: "Almost ready! Kitchen's really backed up tonight. How about a round on us to make up for the wait?", textZh: "快好了！今晚厨房确实很忙。要不来一轮免费的补偿一下？", actionHint: "接受补偿饮品", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, thank you. That would help. But when the food arrives, I hope the quality matches the wait.",
            textZh: "好的，谢谢。但是菜上来的时候，我希望质量对得起这个等待时间。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Here we are, finally! Please let me know how everything tastes.",
            textZh: "终于来了！请告诉我味道怎么样。",
            alternativeExpressions: [
              { textEn: "Sorry for the wait! Here's your order. Let me know if everything looks good.", textZh: "抱歉久等！您的菜来了。看看是否都没问题。", actionHint: "检查食物是否正确", frequency: "common" },
              { textEn: "Finally got it! Again, sorry about the delay. Enjoy!", textZh: "终于好了！再次为等待道歉。请慢用！", actionHint: "检查菜品质量", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Actually, this steak is cold in the middle, and the fries are soggy. I'm sorry, but this isn't acceptable. Could I speak with the manager?",
            textZh: "说实话，这个牛排中间是冷的，薯条也软塌塌的。不好意思，但这不能接受。我能和经理谈谈吗？",
            culturalNote: "在美国，要求见经理（speak with the manager）是处理严重问题的标准做法，不算失礼。",
          },
          {
            speaker: "them",
            role: "经理",
            textEn: "Hi, I'm Sarah, the manager on duty tonight. I understand you've had a poor experience, and I'm truly sorry. What can I do to make this right?",
            textZh: "你好，我是 Sarah，今晚的值班经理。我了解您今晚的体验不好，非常抱歉。我能做什么来弥补？",
            keyPhrases: [
              { en: "manager on duty", zh: "值班经理" },
              { en: "make this right", zh: "弥补/解决问题" },
            ],
            alternativeExpressions: [
              { textEn: "I'm the manager. I heard there was an issue — tell me what happened.", textZh: "我是经理。听说出了问题——跟我说说怎么回事。", actionHint: "详细说明你的问题", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "We waited 45 minutes, and the steak arrived cold with soggy fries. We're celebrating a birthday, and this has really put a damper on the evening.",
            textZh: "我们等了45分钟，牛排上来是冷的，薯条也不脆。我们在庆祝生日，今晚的体验真的大打折扣。",
          },
          {
            speaker: "them",
            role: "经理",
            textEn: "I completely understand, and that's not the experience we want for anyone, especially on a birthday. I'll have the kitchen redo the steak and fries right away. And I'd like to comp your entire meal tonight as an apology.",
            textZh: "我完全理解，这不是我们想给任何人的体验，尤其是在生日。我会让厨房马上重做牛排和薯条。为了道歉，今晚你们的整顿饭我来免单。",
            keyPhrases: [
              { en: "comp your meal", zh: "免单" },
              { en: "redo", zh: "重做" },
            ],
            vocabNotes: {
              "comp": { meaningInContext: "在这句话里表示：免费提供（complimentary 的简写，餐饮业常用）", similarUsage: "类似用法：I'll comp your drinks.（饮料算我的）" },
              "put a damper on": { meaningInContext: "在这句话里表示：给…泼冷水、扫兴", similarUsage: "类似用法：The rain put a damper on our picnic.（下雨扫了我们野餐的兴）" },
            },
            alternativeExpressions: [
              { textEn: "That's completely unacceptable and I'm so sorry. I'll redo everything immediately and your meal tonight is on us.", textZh: "这完全不能接受，非常抱歉。我立刻让厨房重做，今晚这顿饭我们请了。", actionHint: "接受道歉和补偿", frequency: "common" },
              { textEn: "I'm really sorry, especially on a birthday. Let me fix this — new food and the whole bill is covered.", textZh: "太抱歉了，尤其是在生日。让我来处理——重做菜品，整顿免单。", actionHint: "表达感谢", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you, Sarah. I really appreciate you handling this so well. We'll definitely give the restaurant another chance.",
            textZh: "谢谢你，Sarah。非常感谢你处理得这么好。我们一定会再给餐厅一次机会的。",
          },
        ],
      },
    ],
  },

  // ==================== 点酒 ====================
  {
    id: "restaurant-wine",
    category: "restaurant",
    titleZh: "点酒",
    titleEn: "Ordering Wine & Drinks",
    description: "在餐厅看酒单、咨询搭配、点酒和鸡尾酒",
    otherRole: "侍酒师/服务员",
    otherRoleIcon: "wine",
    flows: [
      {
        id: "wine-pairing",
        titleZh: "葡萄酒搭配",
        titleEn: "Wine Pairing",
        description: "浏览酒单、咨询侍酒师推荐搭配",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "服务员",
            textEn: "Can I get you started with something to drink? Here's our wine list.",
            textZh: "先给您来点喝的？这是我们的酒单。",
            keyPhrases: [
              { en: "get you started", zh: "先来点" },
              { en: "wine list", zh: "酒单" },
            ],
            alternativeExpressions: [
              { textEn: "Would you like to see our beverage menu? We have an extensive wine selection.", textZh: "要看看我们的饮品菜单吗？我们的葡萄酒品种很多。", actionHint: "可以先看看酒单", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. I'm not very familiar with wines. We're ordering the steak and the salmon. What would you recommend?",
            textZh: "谢谢。我对葡萄酒不太了解。我们点了牛排和三文鱼。你有什么推荐？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "For the steak, I'd suggest a full-bodied red — our Cabernet Sauvignon pairs beautifully with beef. For the salmon, a lighter Pinot Noir or a Chardonnay would work well. Would you like a glass of each, or would you prefer a bottle to share?",
            textZh: "配牛排的话，我推荐一款酒体饱满的红酒——我们的赤霞珠和牛肉非常搭。三文鱼的话，清淡一点的黑皮诺或霞多丽都不错。要各来一杯，还是开一瓶共享？",
            keyPhrases: [
              { en: "full-bodied", zh: "酒体饱满的" },
              { en: "pairs beautifully", zh: "非常搭" },
              { en: "Cabernet Sauvignon", zh: "赤霞珠" },
              { en: "Pinot Noir", zh: "黑皮诺" },
              { en: "Chardonnay", zh: "霞多丽" },
              { en: "by the glass", zh: "按杯点" },
            ],
            vocabNotes: {
              "full-bodied": {
                meaningInContext: "在这句话里表示：酒体饱满浓郁的（口感厚重），不是'身体健壮'",
                similarUsage: "类似用法：I prefer full-bodied reds over light whites.（比起清淡的白葡萄酒我更喜欢浓郁的红葡萄酒）",
              },
            },
            alternativeExpressions: [
              { textEn: "A nice Cab Sauv would be perfect with the steak, and a Chardonnay or Pinot for the salmon. Glass or bottle?", textZh: "赤霞珠配牛排最好，三文鱼配霞多丽或黑皮诺。要按杯还是来一瓶？", actionHint: "选按杯点还是整瓶", frequency: "common" },
              { textEn: "I'd pair a bold red with the beef and a lighter white with the fish. Want to go by the glass or share a bottle?", textZh: "牛肉配浓郁红酒，鱼配清淡白酒。想按杯点还是开一瓶分享？", actionHint: "告诉服务员你的选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Let's do a bottle of the Cabernet. How much is it?",
            textZh: "来一瓶赤霞珠吧。多少钱？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "The 2019 Napa Valley Cabernet is $65 a bottle. We also have a very nice Argentinian Malbec for $45 if you'd like something a bit more affordable but still excellent with steak.",
            textZh: "2019年纳帕谷赤霞珠每瓶65美元。如果想要实惠一点但同样配牛排很棒的，我们还有一款阿根廷马尔贝克45美元。",
            keyPhrases: [
              { en: "a bottle", zh: "一瓶" },
              { en: "affordable", zh: "实惠的" },
              { en: "Malbec", zh: "马尔贝克" },
            ],
            alternativeExpressions: [
              { textEn: "That one runs $65. If you want a great value, the Malbec at $45 is a solid pick.", textZh: "那款65美元。如果想要性价比高的，45美元的马尔贝克非常不错。", actionHint: "可以考虑更实惠的选项", frequency: "common" },
              { textEn: "The Cabernet's $65 — totally worth it. But our Malbec is a hidden gem at $45.", textZh: "赤霞珠65美元——绝对值。不过45美元的马尔贝克也是宝藏酒款。", actionHint: "两款都不错", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "We'll go with the Napa Cabernet. Could we also get a glass of white wine for my friend who's having the salmon?",
            textZh: "我们选纳帕赤霞珠。能再来一杯白葡萄酒吗？我朋友点了三文鱼。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Of course. Our Sonoma Chardonnay is $14 a glass — it's crisp and buttery, perfect with fish. I'll bring the bottle first so you can taste it before I pour.",
            textZh: "当然。我们的索诺玛霞多丽每杯14美元——清爽带有黄油感，配鱼非常好。我先把红酒拿来让您品尝一下再倒。",
            keyPhrases: [
              { en: "crisp", zh: "清爽的" },
              { en: "buttery", zh: "黄油感的" },
              { en: "taste", zh: "品尝" },
              { en: "pour", zh: "倒酒" },
            ],
            culturalNote: "在西式餐厅，服务员会先让点酒的人品尝一小口确认没问题再正式倒酒。这时你只需要轻啜一口，然后点头说\"That's great\"就行。",
            alternativeExpressions: [
              { textEn: "The Chardonnay by the glass is $14 — goes great with seafood. I'll let you try the red first.", textZh: "霞多丽每杯14美元——配海鲜很棒。我先让您试试红酒。", actionHint: "等服务员拿酒来品尝", frequency: "common" },
              { textEn: "For white, I'd suggest our house Chardonnay at $14. Lovely with the salmon.", textZh: "白葡萄酒的话，推荐14美元的招牌霞多丽。配三文鱼很棒。", actionHint: "接受推荐或另选", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds perfect. One more thing — do you have any dessert wines for later?",
            textZh: "太好了。再问一下——你们有甜酒配甜点吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "We have a lovely late-harvest Riesling and a port wine. I can bring the dessert wine menu when you're ready for dessert. Enjoy your wines!",
            textZh: "我们有一款很不错的晚收雷司令和波特酒。等您准备点甜点时我把甜酒单拿来。享用您的葡萄酒！",
            keyPhrases: [
              { en: "late-harvest", zh: "晚收的（葡萄酿的甜酒）" },
              { en: "port wine", zh: "波特酒" },
              { en: "dessert wine", zh: "甜酒/餐后酒" },
            ],
            alternativeExpressions: [
              { textEn: "We've got a sweet Riesling and a port — perfect for after dinner. I'll bring the list later!", textZh: "我们有甜雷司令和波特酒——很适合餐后喝。稍后给您拿酒单！", actionHint: "稍后再看甜酒单", frequency: "common" },
              { textEn: "For dessert wines, we have a few options. I'll swing by with the menu when you're wrapping up.", textZh: "甜酒有几个选择。您快吃完的时候我把菜单拿来。", actionHint: "不急，吃完再说", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "cocktails",
        titleZh: "点鸡尾酒",
        titleEn: "Ordering Cocktails",
        description: "在酒吧或餐厅点鸡尾酒、询问调酒选择",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like a cocktail but I'm not sure what to get. What are your specialties?",
            textZh: "你好，我想喝个鸡尾酒但不确定点什么。你们有什么特色？",
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Our signature cocktail is the 'Sunset Spritz' — it's made with Aperol, prosecco, and a splash of blood orange. If you prefer something stronger, our Old Fashioned is very popular. What flavors do you typically enjoy?",
            textZh: "我们的招牌鸡尾酒是'日落气泡酒'——用阿佩罗、普罗塞克和一点血橙调制。如果您喜欢烈一点的，我们的老式鸡尾酒很受欢迎。您一般喜欢什么口味？",
            keyPhrases: [
              { en: "signature cocktail", zh: "招牌鸡尾酒" },
              { en: "a splash of", zh: "一点点" },
              { en: "Old Fashioned", zh: "老式鸡尾酒" },
            ],
            vocabNotes: {
              "signature": {
                meaningInContext: "在这句话里表示：店家的招牌/特色（不是签名）",
                similarUsage: "类似用法：What's your signature dish?（你们的招牌菜是什么？）",
              },
            },
            alternativeExpressions: [
              { textEn: "We're known for our Sunset Spritz — super refreshing. Or the Old Fashioned if you like it strong. What's your vibe?", textZh: "我们以日落气泡酒出名——超级清爽。或者喜欢烈的就试老式鸡尾酒。你今天想喝什么风格？", actionHint: "告诉调酒师你的口味", frequency: "common" },
              { textEn: "Our best sellers are the Sunset Spritz and the Old Fashioned. Do you lean sweet, sour, or spirit-forward?", textZh: "卖得最好的是日落气泡酒和老式鸡尾酒。你喜欢甜的、酸的还是酒味重的？", actionHint: "说出自己喜好", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I like fruity but not too sweet. Something refreshing.",
            textZh: "我喜欢水果味但不太甜的。清爽一点的。",
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "I'd recommend our mojito — it's minty and citrusy with just a hint of sweetness. Or if you want something more tropical, the passion fruit margarita is tangy and refreshing. Both are great choices for a warm evening.",
            textZh: "我推荐我们的莫吉托——薄荷和柑橘味，带一点点甜。或者想要热带风情的话，百香果玛格丽特酸爽又清凉。温暖的夜晚两款都是好选择。",
            keyPhrases: [
              { en: "mojito", zh: "莫吉托" },
              { en: "minty", zh: "薄荷味的" },
              { en: "citrusy", zh: "柑橘味的" },
              { en: "tangy", zh: "酸爽的" },
              { en: "margarita", zh: "玛格丽特" },
            ],
            alternativeExpressions: [
              { textEn: "How about a Tom Collins? It's gin-based, light, and super refreshing with lemon.", textZh: "来一杯汤姆柯林斯怎么样？以金酒为基酒，清淡，配柠檬超级清爽。", actionHint: "也是不错的选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll try the mojito. Can you make it with less sugar?",
            textZh: "我试试莫吉托。能少放点糖吗？",
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Absolutely — I'll go light on the simple syrup. Would you like it with white rum or dark rum? Dark rum adds a bit more depth and caramel flavor.",
            textZh: "没问题——糖浆少放。要白朗姆还是黑朗姆？黑朗姆口感更有层次，带焦糖味。",
            keyPhrases: [
              { en: "simple syrup", zh: "糖浆" },
              { en: "white rum", zh: "白朗姆" },
              { en: "dark rum", zh: "黑朗姆" },
              { en: "depth", zh: "层次感" },
            ],
            alternativeExpressions: [
              { textEn: "No problem, I'll cut back on the sugar. White or dark rum? Dark gives it a richer taste.", textZh: "没问题，糖少放。白朗姆还是黑朗姆？黑朗姆味道更浓。", actionHint: "选一种朗姆酒", frequency: "common" },
              { textEn: "Sure thing — less sweet, got it. Any preference on the rum?", textZh: "好的——少甜，收到。朗姆酒有偏好吗？", actionHint: "告诉调酒师选哪种", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "White rum, please. And my friend doesn't drink alcohol — do you have any mocktails?",
            textZh: "白朗姆。我朋友不喝酒——你们有无酒精鸡尾酒吗？",
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Of course! We have a great mocktail menu. The virgin mojito is popular, and we also have a cucumber-elderflower spritz that's really refreshing. They're all $8 — same presentation as our regular cocktails, just without the alcohol.",
            textZh: "当然！我们有很棒的无酒精菜单。无酒精莫吉托很受欢迎，还有黄瓜接骨木花气泡饮非常清爽。都是8美元——和普通鸡尾酒一样精心调制，只是没有酒精。",
            keyPhrases: [
              { en: "mocktails", zh: "无酒精鸡尾酒" },
              { en: "virgin mojito", zh: "无酒精莫吉托" },
              { en: "elderflower", zh: "接骨木花" },
            ],
            alternativeExpressions: [
              { textEn: "Totally! We've got some amazing non-alcoholic drinks. The virgin mojito and the cucumber spritz are both great.", textZh: "当然！我们有很棒的无酒精饮品。无酒精莫吉托和黄瓜气泡饮都很好喝。", actionHint: "帮朋友选一款", frequency: "common" },
              { textEn: "Yeah, we have a whole mocktail section! They look and taste just like the real thing.", textZh: "有的，我们有一整个无酒精区！看起来和喝起来都跟真的一样。", actionHint: "看看无酒精菜单", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "She'll have the cucumber-elderflower spritz. Can we start a tab?",
            textZh: "她来一杯黄瓜接骨木花气泡饮。可以记账吗？",
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Sure! I'll need a credit card to hold the tab. I'll bring your drinks right out. Cheers!",
            textZh: "好的！需要一张信用卡作担保。马上为您调酒。干杯！",
            keyPhrases: [
              { en: "start a tab", zh: "记账（不立刻结账）" },
              { en: "hold the tab", zh: "作为记账担保" },
              { en: "cheers", zh: "干杯" },
            ],
            vocabNotes: {
              "tab": {
                meaningInContext: "在这句话里表示：酒吧的赊账/记账，最后统一结算（不是标签）",
                similarUsage: "类似用法：Can I close out my tab?（我可以结账了吗？）",
              },
            },
            alternativeExpressions: [
              { textEn: "Of course! Just leave a card with me and I'll keep your tab open. Coming right up!", textZh: "当然！把卡留给我，我帮你挂着账。马上来！", actionHint: "把信用卡交给调酒师", frequency: "common" },
              { textEn: "You got it! Card to start the tab, and I'll get those drinks going.", textZh: "没问题！先刷卡开账，我马上调酒。", actionHint: "递上信用卡即可", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 特殊饮食 ====================
  {
    id: "restaurant-dietary",
    category: "restaurant",
    titleZh: "特殊饮食",
    titleEn: "Dietary Requirements",
    description: "在餐厅说明素食、清真、无麸质等特殊饮食需求",
    otherRole: "服务员/经理",
    otherRoleIcon: "leaf",
    flows: [
      {
        id: "vegan-halal",
        titleZh: "素食和清真",
        titleEn: "Vegan & Halal Options",
        description: "询问素食和清真食物选项",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have some dietary restrictions. Do you have vegan options on the menu?",
            textZh: "你好，我有一些饮食限制。菜单上有素食选项吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Yes, we do! Items marked with a green leaf symbol are vegan. We have about eight vegan dishes, including our roasted vegetable pasta, a quinoa bowl, and a black bean burger. I can also ask the chef to modify some dishes to make them vegan.",
            textZh: "有的！菜单上标有绿叶标志的是素食。我们有大约八道素菜，包括烤蔬菜意面、藜麦碗和黑豆汉堡。我也可以让厨师把一些菜改成纯素的。",
            keyPhrases: [
              { en: "dietary restrictions", zh: "饮食限制" },
              { en: "vegan options", zh: "素食选项" },
              { en: "modify", zh: "修改/调整" },
              { en: "quinoa", zh: "藜麦" },
            ],
            vocabNotes: {
              "vegan": {
                meaningInContext: "在这句话里表示：纯素（不含任何动物制品，包括蛋奶蜂蜜），比vegetarian更严格",
                similarUsage: "类似用法：Is this dish vegan-friendly?（这道菜适合纯素者吗？）",
              },
            },
            alternativeExpressions: [
              { textEn: "Absolutely! Look for the 'V' symbol on the menu. Our chef is very accommodating with dietary needs.", textZh: "当然！看菜单上'V'标志的菜品。我们的厨师非常配合饮食需求。", actionHint: "找菜单上的标志", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. My friend also needs halal food. Is your meat halal?",
            textZh: "好的。我朋友需要清真食物。你们的肉是清真的吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Our chicken and lamb are halal-certified from a local supplier. However, our beef and pork are not halal. I can point out which dishes use halal meat if that would help.",
            textZh: "我们的鸡肉和羊肉是本地供应商提供的清真认证产品。但牛肉和猪肉不是清真的。如果需要的话，我可以指出哪些菜用的是清真肉。",
            keyPhrases: [
              { en: "halal-certified", zh: "清真认证的" },
              { en: "supplier", zh: "供应商" },
              { en: "point out", zh: "指出" },
            ],
            alternativeExpressions: [
              { textEn: "The chicken and lamb are halal. The beef isn't, unfortunately. Want me to highlight the halal options?", textZh: "鸡肉和羊肉是清真的。牛肉不是。要我帮您标出清真的菜吗？", actionHint: "让服务员指出来", frequency: "common" },
              { textEn: "We source halal chicken and lamb locally. I can walk you through the halal-friendly dishes.", textZh: "我们的清真鸡肉和羊肉来自本地供应商。我可以带您看看清真菜品。", actionHint: "请服务员介绍", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be very helpful. Also, does the quinoa bowl contain any dairy?",
            textZh: "那太有帮助了。另外，藜麦碗里有乳制品吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Let me check with the kitchen... The standard quinoa bowl has feta cheese on top, but we can easily leave that off. The dressing is olive oil and lemon, so it's naturally dairy-free.",
            textZh: "让我问一下厨房……标准的藜麦碗上面有羊奶酪，但我们可以不放。酱汁是橄榄油和柠檬，本身就不含乳制品。",
            keyPhrases: [
              { en: "feta cheese", zh: "羊奶酪" },
              { en: "leave that off", zh: "不放/去掉" },
              { en: "dairy-free", zh: "不含乳制品的" },
              { en: "dressing", zh: "酱汁/调味汁" },
            ],
            alternativeExpressions: [
              { textEn: "Good question — let me find out. It has cheese but we can skip that. The dressing itself is dairy-free.", textZh: "好问题——让我查一下。上面有奶酪但可以去掉。酱汁本身不含乳制品。", actionHint: "可以要求去奶酪", frequency: "common" },
              { textEn: "I'll double-check... Yes, there's feta on top, but that's easy to remove. Everything else is vegan.", textZh: "我确认一下……是的，上面有羊奶酪，但很容易去掉。其他都是纯素的。", actionHint: "告诉服务员去掉奶酪", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect — quinoa bowl without the cheese for me. And the halal chicken dish for my friend.",
            textZh: "太好了——我要不放奶酪的藜麦碗。我朋友要清真鸡肉的那道。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Got it. Just to double-check — any allergies I should be aware of? Nuts, soy, or gluten?",
            textZh: "好的。再确认一下——有需要注意的过敏吗？坚果、大豆或麸质？",
            keyPhrases: [
              { en: "double-check", zh: "再次确认" },
              { en: "allergies", zh: "过敏" },
              { en: "nuts", zh: "坚果" },
              { en: "soy", zh: "大豆" },
              { en: "gluten", zh: "麸质" },
            ],
            alternativeExpressions: [
              { textEn: "Perfect. And any food allergies I should let the kitchen know about?", textZh: "好的。还有什么食物过敏需要我告知厨房的吗？", actionHint: "如实告知过敏情况", frequency: "common" },
              { textEn: "Before I put the order in — any allergies? We want to make sure everything's safe.", textZh: "下单之前确认一下——有过敏吗？我们想确保一切安全。", actionHint: "说明有无过敏", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "No allergies, just the dietary preferences. Thank you for being so thorough!",
            textZh: "没有过敏，只是饮食偏好。谢谢你这么细心！",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Of course! We take dietary needs very seriously. I'll make sure the kitchen notes everything. Your food will be out shortly.",
            textZh: "当然！我们非常重视饮食需求。我会确保厨房记录好所有要求。菜很快就好。",
            alternativeExpressions: [
              { textEn: "Absolutely! I've noted everything down. The kitchen will be extra careful. Won't be long!", textZh: "当然！都记下来了。厨房会格外注意。很快就好！", actionHint: "等待上菜即可", frequency: "common" },
              { textEn: "No problem at all. We're used to handling dietary needs. Your order is in!", textZh: "完全没问题。我们经常处理饮食需求。您的单已经下了！", actionHint: "安心等待", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "gluten-free-kosher",
        titleZh: "无麸质和犹太洁食",
        titleEn: "Gluten-Free & Kosher",
        description: "需要无麸质或犹太洁食选项时的沟通",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I have celiac disease, so I need to be very careful about gluten. Do you have gluten-free options?",
            textZh: "我有乳糜泻，所以必须严格避免麸质。你们有无麸质选项吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "I understand how important that is. We have a separate gluten-free menu. Our kitchen also has a dedicated preparation area for gluten-free orders to prevent cross-contamination. Would you like to see it?",
            textZh: "我理解这有多重要。我们有专门的无麸质菜单。厨房也有专门的无麸质备菜区域，防止交叉污染。要看看吗？",
            keyPhrases: [
              { en: "celiac disease", zh: "乳糜泻" },
              { en: "gluten-free", zh: "无麸质的" },
              { en: "cross-contamination", zh: "交叉污染" },
              { en: "dedicated preparation area", zh: "专门备菜区域" },
            ],
            vocabNotes: {
              "cross-contamination": {
                meaningInContext: "在这句话里表示：含麸质的食物和无麸质食物在准备过程中接触，导致无麸质食物被污染",
                similarUsage: "类似用法：We use separate cutting boards to avoid cross-contamination.（我们用不同的砧板避免交叉污染）",
              },
            },
            alternativeExpressions: [
              { textEn: "We take that very seriously. We have a gluten-free menu and a separate prep area. Let me grab it for you.", textZh: "我们非常重视这个问题。我们有无麸质菜单和独立备菜区。我去给您拿。", actionHint: "等服务员拿菜单", frequency: "common" },
              { textEn: "Absolutely — we've got a dedicated GF menu. The kitchen uses separate equipment for gluten-free orders.", textZh: "没问题——我们有专门的无麸质菜单。厨房用独立设备处理无麸质订单。", actionHint: "可以放心点餐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. I'm also curious — does your soy sauce contain gluten? I've been caught out before.",
            textZh: "好的。我还想问——你们的酱油含麸质吗？我之前被坑过。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Good question! Regular soy sauce does contain wheat, but we stock tamari, which is a gluten-free soy sauce alternative. All our gluten-free dishes use tamari instead. Your awareness is really helpful for us.",
            textZh: "好问题！普通酱油确实含小麦，但我们备有天然酱油（tamari），是无麸质的酱油替代品。我们所有无麸质菜品都用tamari。您的关注对我们很有帮助。",
            keyPhrases: [
              { en: "tamari", zh: "天然酱油（无麸质）" },
              { en: "alternative", zh: "替代品" },
              { en: "wheat", zh: "小麦" },
            ],
            alternativeExpressions: [
              { textEn: "Great catch! Yeah, regular soy sauce has gluten. We use tamari for all our GF dishes — it's totally safe.", textZh: "问得好！普通酱油确实有麸质。我们所有无麸质菜都用tamari——完全安全。", actionHint: "可以放心点无麸质菜", frequency: "common" },
              { textEn: "You're smart to ask! We switched to tamari for all gluten-free cooking. No wheat at all.", textZh: "您问得很细心！我们的无麸质烹饪全部改用了tamari。完全不含小麦。", actionHint: "了解即可", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's reassuring. My other friend keeps kosher. Do you have any kosher options?",
            textZh: "这让我放心了。我另一个朋友吃犹太洁食。你们有犹太洁食选项吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "We're not a certified kosher kitchen, so I want to be transparent about that. However, we do have several dishes that follow kosher principles — no mixing of meat and dairy, no pork or shellfish. I can identify those for your friend. For strict kosher requirements, there's a certified kosher restaurant two blocks away.",
            textZh: "我们不是认证的犹太洁食厨房，这一点我要坦诚告知。不过我们有几道菜符合犹太洁食原则——肉奶不混合，不含猪肉或贝类。我可以帮您朋友指出来。如果严格要求犹太洁食，两个街区外有一家认证的犹太洁食餐厅。",
            keyPhrases: [
              { en: "kosher", zh: "犹太洁食" },
              { en: "certified", zh: "认证的" },
              { en: "transparent", zh: "坦诚/透明" },
              { en: "shellfish", zh: "贝类" },
            ],
            culturalNote: "犹太洁食（kosher）有严格的食物准备规定。如果不确定，诚实地告知客人比硬说符合要求更受尊重。",
            alternativeExpressions: [
              { textEn: "Honestly, we're not kosher-certified. But we do have dishes without pork, shellfish, or meat-dairy combos. I can show you.", textZh: "坦白说，我们没有犹太洁食认证。但有不含猪肉、贝类和肉奶混合的菜。我可以给您指出来。", actionHint: "让服务员推荐合适的菜", frequency: "common" },
              { textEn: "I want to be upfront — we're not certified kosher. But I can point out dishes that align with kosher guidelines.", textZh: "我想坦诚说——我们没有犹太洁食认证。但我可以指出符合犹太洁食原则的菜。", actionHint: "让服务员帮忙挑选", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's very honest of you. I think we can work with what you have. Can you point out those dishes?",
            textZh: "你很诚实。我想我们可以在你们这里找到合适的。能帮我指出那些菜吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Of course. The grilled salmon, the vegetable risotto, and the chicken breast with herbs all follow kosher-friendly principles. I'll also let the chef know about your table's dietary needs so everything is prepared with extra care.",
            textZh: "当然。烤三文鱼、蔬菜意式烩饭和香草鸡胸肉都符合犹太洁食原则。我也会告诉厨师您这桌的饮食需求，让一切都格外小心准备。",
            keyPhrases: [
              { en: "kosher-friendly", zh: "符合犹太洁食原则的" },
              { en: "risotto", zh: "意式烩饭" },
              { en: "with extra care", zh: "格外小心" },
            ],
            alternativeExpressions: [
              { textEn: "Sure — the salmon, risotto, and herb chicken are all safe options. I'll flag your table's needs with the kitchen.", textZh: "好的——三文鱼、烩饭和香草鸡胸肉都可以放心吃。我会把您这桌的需求告知厨房。", actionHint: "从推荐的菜品中选择", frequency: "common" },
              { textEn: "These three dishes work well for kosher diners. I'll make sure the chef knows about your requirements.", textZh: "这三道菜很适合犹太洁食者。我会确保厨师知道您的要求。", actionHint: "可以放心点这些菜", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much for accommodating all of us. We really appreciate it.",
            textZh: "非常感谢你照顾到我们所有人。真的很感激。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "It's absolutely our pleasure. Everyone deserves to enjoy a great meal, no matter their dietary needs. I'll be back with your orders shortly!",
            textZh: "这是我们的荣幸。每个人都应该享受美食，不管饮食需求是什么。我很快就来上菜！",
            alternativeExpressions: [
              { textEn: "Happy to help! We want everyone to have a great dining experience. Food will be right out!", textZh: "乐意帮忙！我们希望每个人都有美好的用餐体验。菜马上来！", actionHint: "等待上菜", frequency: "common" },
              { textEn: "That's what we're here for! Your meals will be out shortly.", textZh: "这是我们应该做的！菜很快就好。", actionHint: "安心等待", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 小费文化 ====================
  {
    id: "restaurant-tips",
    category: "restaurant",
    titleZh: "小费文化",
    titleEn: "Tipping Etiquette",
    description: "了解小费文化、分账、结账时的实用对话",
    otherRole: "服务员/同伴",
    otherRoleIcon: "receipt",
    flows: [
      {
        id: "tipping-basics",
        titleZh: "小费基础",
        titleEn: "Tipping Basics",
        description: "结账时计算和给小费的对话",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Could we get the check, please?",
            textZh: "可以结账吗？",
            casualVersion: "Can we get the bill?",
            culturalNote: "在美国说 \"check\"，在英国说 \"bill\"。两者都可以，但在美国用 \"check\" 更常见。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Of course! Here's your check. Your total comes to $86.50. I'll leave this here — no rush.",
            textZh: "好的！这是您的账单。总计86.50美元。放在这里——不着急。",
            keyPhrases: [
              { en: "check", zh: "账单" },
              { en: "total", zh: "总计" },
              { en: "no rush", zh: "不着急" },
            ],
            alternativeExpressions: [
              { textEn: "Here's your bill whenever you're ready. Take your time.", textZh: "账单在这里，您准备好了再结。慢慢来。", actionHint: "不必急着付", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much should we tip? I want to make sure I get it right.",
            textZh: "应该给多少小费？我想确保给对。",
          },
          {
            speaker: "them",
            role: "同伴",
            textEn: "In the US, the standard tip for table service is 15 to 20 percent. For good service, most people tip 18 to 20 percent. On $86.50, that would be about $15 to $17.",
            textZh: "在美国，餐桌服务的标准小费是15%到20%。服务好的话大多数人给18%到20%。86.50美元的话大约15到17美元。",
            keyPhrases: [
              { en: "standard tip", zh: "标准小费" },
              { en: "table service", zh: "餐桌服务" },
              { en: "15 to 20 percent", zh: "15%到20%" },
            ],
            culturalNote: "在美国，小费是服务员收入的重要组成部分。不给小费是非常不礼貌的行为。15%是最低标准，18-20%是正常水平。",
            alternativeExpressions: [
              { textEn: "Usually 18 to 20 percent for sit-down restaurants. So about $16 or $17 on this bill.", textZh: "正式餐厅一般18%到20%。这笔账单大概16到17美元。", actionHint: "按建议给小费", frequency: "common" },
              { textEn: "The norm here is around 20 percent for good service. Just double the tax — that gets you close.", textZh: "这里好服务一般给20%左右。把税额翻倍就差不多了。", actionHint: "用翻倍税额的方法计算", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The service was excellent, so I'll tip 20 percent. Can I add the tip to the credit card?",
            textZh: "服务很好，我给20%。可以把小费加到信用卡上吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Yes! When I run your card, you'll see a line on the receipt where you can write in the tip amount and the total. Or if you'd prefer, you can leave cash on the table.",
            textZh: "可以！刷卡后收据上有一行可以写小费金额和总额。或者如果您愿意的话，也可以把现金留在桌上。",
            keyPhrases: [
              { en: "run your card", zh: "刷卡" },
              { en: "receipt", zh: "收据" },
              { en: "write in the tip", zh: "写上小费金额" },
            ],
            vocabNotes: {
              "run your card": {
                meaningInContext: "在这句话里表示：刷信用卡进行支付（不是跑步）",
                similarUsage: "类似用法：Let me run this real quick.（我很快刷一下卡）",
              },
            },
            alternativeExpressions: [
              { textEn: "Sure! There's a tip line on the receipt after I swipe your card. Or you can just leave cash.", textZh: "没问题！刷卡后收据上有小费栏。或者直接留现金也行。", actionHint: "选择卡付或现金小费", frequency: "common" },
              { textEn: "Absolutely. I'll bring the card reader and there'll be an option to add a tip right on the screen.", textZh: "当然。我拿刷卡机过来，屏幕上会有加小费的选项。", actionHint: "在屏幕上操作即可", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll put it on the card. So I write $17 for the tip and $103.50 as the total?",
            textZh: "我用卡付。那我写17美元小费，总计103.50美元？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "That's exactly right. Thank you so much — you're very generous. I hope you enjoyed your meal. Have a wonderful evening!",
            textZh: "完全正确。非常感谢——您太慷慨了。希望您享受了这顿餐。祝您有美好的夜晚！",
            alternativeExpressions: [
              { textEn: "Perfect, thank you! That's very kind. We hope to see you again. Have a great night!", textZh: "完美，谢谢！您太客气了。希望下次再来。晚上愉快！", actionHint: "用餐结束，可以离开了", frequency: "common" },
              { textEn: "Wow, thank you so much! Enjoy the rest of your evening!", textZh: "太感谢了！祝您度过愉快的夜晚！", actionHint: "起身离开即可", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "We did, thank you. Everything was delicious!",
            textZh: "我们很享受，谢谢。一切都很好吃！",
          },
        ],
      },
      {
        id: "splitting-bill",
        titleZh: "分账",
        titleEn: "Splitting the Bill",
        description: "和朋友分账、各种分账方式",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, could we split the bill?",
            textZh: "打扰一下，可以分开结账吗？",
            casualVersion: "Can we get separate checks?",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Of course! How would you like to split it? I can divide it evenly, or I can split it by what each person ordered.",
            textZh: "当然可以！怎么分？可以平均分，也可以按各自点的来分。",
            keyPhrases: [
              { en: "split the bill", zh: "分账" },
              { en: "divide it evenly", zh: "平均分" },
              { en: "by what each person ordered", zh: "按各自点的分" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, no problem. Separate checks or one bill split in half?", textZh: "没问题。各自单独账单还是一张账单对半分？", actionHint: "说明分账方式", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Let's split it by what we each ordered. There are four of us.",
            textZh: "按各自点的分吧。我们四个人。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "No problem. I'll need a moment to sort that out. What about the shared appetizers and the bottle of wine? Should I split those evenly?",
            textZh: "没问题。我需要一点时间整理。那共享的前菜和那瓶酒呢？平均分吗？",
            keyPhrases: [
              { en: "sort that out", zh: "整理好" },
              { en: "shared appetizers", zh: "共享的前菜" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, give me a sec. How about the appetizers you all shared — split those evenly?", textZh: "好的，稍等。你们一起吃的前菜呢——平均分？", actionHint: "告诉服务员怎么分共享的", frequency: "common" },
              { textEn: "I can do that. Just need to figure out the shared items — should those be divided equally?", textZh: "没问题。共享的那些怎么分——平均分吗？", actionHint: "说明共享菜品分法", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, split the shared items evenly. Two of us are paying by card and two by cash.",
            textZh: "是的，共享的平均分。我们两个刷卡，两个付现金。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Got it. I'll bring four separate checks. For the two card payments, I'll run them separately. Here they are — each one shows the individual items plus a quarter of the shared dishes.",
            textZh: "明白了。我出四张单独的账单。两张卡分开刷。给您——每张上面有个人点的菜加上四分之一的共享菜品。",
            keyPhrases: [
              { en: "separate checks", zh: "单独账单" },
              { en: "a quarter of", zh: "四分之一" },
            ],
            alternativeExpressions: [
              { textEn: "All set — here are four bills. Each one has your own stuff plus your share of the appetizers and wine.", textZh: "好了——四张账单。每张上面有你自己点的菜加上你那份前菜和酒。", actionHint: "核对自己的账单", frequency: "common" },
              { textEn: "Here you go — four separate receipts. The shared items are divided equally on each.", textZh: "给您——四张单独的收据。共享的菜品平均分在每张上面了。", actionHint: "检查金额是否正确", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. For the tip, should each person add their own tip?",
            textZh: "谢谢。小费的话，是每个人各自加吗？",
          },
          {
            speaker: "them",
            role: "同伴",
            textEn: "Yes, each person should add a tip to their own check. The easiest way is for everyone to tip 18 or 20 percent on their individual total. That way the server gets a fair tip overall.",
            textZh: "是的，每个人在自己的账单上加小费。最简单的方法是每人按自己的小计给18%或20%。这样服务员整体会收到合理的小费。",
            keyPhrases: [
              { en: "individual total", zh: "个人小计" },
              { en: "fair tip", zh: "合理的小费" },
            ],
            culturalNote: "分账时容易出现小费不足的情况。确保每个人都在自己那份上加了合理的小费，不要只算菜钱不算税和小费。",
            alternativeExpressions: [
              { textEn: "Yeah, everyone tips on their own bill. Just add 20 percent to yours and you're good.", textZh: "对，每个人在自己账单上加小费。加20%就行了。", actionHint: "在自己的账单上加小费", frequency: "common" },
              { textEn: "Each of us should tip separately. Just round up to make it easy — like 20 percent.", textZh: "我们每个人单独给小费。取个整方便算——大概20%。", actionHint: "计算自己那份的小费", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Makes sense. Can you also Venmo me your share of the appetizers?",
            textZh: "有道理。你能用Venmo把你那份前菜钱转给我吗？",
            culturalNote: "Venmo是美国最流行的个人间转账App之一，年轻人常用它来分摊费用。类似中国的微信转账。",
          },
          {
            speaker: "them",
            role: "同伴",
            textEn: "Sure, I'll Venmo you right now. What's your username? Or I can just search by phone number.",
            textZh: "好，我现在就转。你的用户名是什么？或者我可以用手机号搜索。",
            alternativeExpressions: [
              { textEn: "Yeah, sending it now. What's your Venmo handle?", textZh: "好，正在转。你的Venmo账号是什么？", actionHint: "告诉对方你的账号", frequency: "common" },
              { textEn: "On it! I'll just Zelle you instead — easier with your phone number.", textZh: "马上！我用Zelle转吧——用手机号更方便。", actionHint: "提供手机号即可", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 得来速 ====================
  {
    id: "restaurant-drive-thru",
    category: "restaurant",
    titleZh: "得来速",
    titleEn: "Drive-Through",
    description: "在得来速窗口点餐、确认订单、取餐",
    otherRole: "得来速工作人员",
    otherRoleIcon: "car",
    flows: [
      {
        id: "standard-order",
        titleZh: "标准得来速点餐",
        titleEn: "Standard Drive-Through Order",
        description: "在麦当劳等快餐店的得来速点餐流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "喇叭",
            textEn: "Welcome to Burger Palace! Order whenever you're ready.",
            textZh: "欢迎来到汉堡宫！准备好了就点吧。",
            keyPhrases: [
              { en: "order whenever you're ready", zh: "准备好了就点" },
            ],
            alternativeExpressions: [
              { textEn: "Hi, welcome! Go ahead and order when you're ready.", textZh: "你好，欢迎！准备好了就点。", actionHint: "直接开始点餐", frequency: "common" },
              { textEn: "Good morning! Can I take your order?", textZh: "早上好！可以点餐了吗？", actionHint: "直接说要什么", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Hi! Can I get a number 3 combo with a Coke?",
            textZh: "你好！来一个3号套餐配可乐。",
            culturalNote: "在美国得来速点餐，直接说套餐编号最快，比如'number 3 combo'。",
          },
          {
            speaker: "them",
            role: "喇叭",
            textEn: "Sure! That's the double cheeseburger combo. What size — regular, medium, or large?",
            textZh: "好的！双层芝士汉堡套餐。要什么规格——小号、中号还是大号？",
            keyPhrases: [
              { en: "combo", zh: "套餐" },
              { en: "what size", zh: "什么规格" },
              { en: "regular", zh: "小号/标准" },
            ],
            alternativeExpressions: [
              { textEn: "Number 3, got it! Would you like that small, medium, or large?", textZh: "3号套餐收到！要小份、中份还是大份？", actionHint: "选择大小", frequency: "common" },
              { textEn: "The double cheese combo — great choice! What size meal?", textZh: "双层芝士套餐——好选择！要多大份的？", actionHint: "说出想要的规格", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Medium, please. And can I add a 6-piece chicken nuggets?",
            textZh: "中号。再加一份6块鸡块。",
          },
          {
            speaker: "them",
            role: "喇叭",
            textEn: "Medium number 3 and a 6-piece nuggets. What sauce would you like for the nuggets? We have BBQ, ranch, honey mustard, and sweet and sour.",
            textZh: "中号3号套餐和一份6块鸡块。鸡块要什么酱？我们有烧烤酱、牧场酱、蜂蜜芥末和酸甜酱。",
            keyPhrases: [
              { en: "sauce", zh: "酱" },
              { en: "BBQ", zh: "烧烤酱" },
              { en: "ranch", zh: "牧场酱" },
              { en: "honey mustard", zh: "蜂蜜芥末" },
              { en: "sweet and sour", zh: "酸甜酱" },
            ],
            alternativeExpressions: [
              { textEn: "Got it. What dipping sauce for the nuggets — BBQ, ranch, honey mustard, or sweet and sour?", textZh: "收到。鸡块蘸什么酱——烧烤、牧场、蜂蜜芥末还是酸甜？", actionHint: "选一种酱", frequency: "common" },
              { textEn: "Alright — and which sauce? We've got BBQ, ranch, honey mustard, and sweet and sour.", textZh: "好的——要什么酱？烧烤酱、牧场酱、蜂蜜芥末和酸甜酱都有。", actionHint: "告诉对方你要的酱", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "BBQ sauce, please. Oh, and no pickles on the burger.",
            textZh: "烧烤酱。对了，汉堡不要酸黄瓜。",
          },
          {
            speaker: "them",
            role: "喇叭",
            textEn: "Got it — no pickles. Anything else today?",
            textZh: "好的——不要酸黄瓜。还要别的吗？",
            alternativeExpressions: [
              { textEn: "No pickles, sure. Is that everything for you?", textZh: "不要酸黄瓜，好的。就这些了吗？", actionHint: "如果点完了就说就这些", frequency: "common" },
              { textEn: "Alright, no pickles on the burger. Anything else I can add?", textZh: "好的，汉堡不放酸黄瓜。还要加什么吗？", actionHint: "确认是否还需要其他", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's it, thank you.",
            textZh: "就这些，谢谢。",
          },
          {
            speaker: "them",
            role: "喇叭",
            textEn: "Okay, your total is $12.47. Please pull up to the first window. We'll have it ready for you in just a minute.",
            textZh: "好的，总计12.47美元。请开到第一个窗口。很快就好。",
            keyPhrases: [
              { en: "pull up to", zh: "开到/靠近" },
              { en: "first window", zh: "第一个窗口" },
            ],
            vocabNotes: {
              "pull up to": {
                meaningInContext: "在这句话里表示：把车往前开到指定位置（得来速常用语）",
                similarUsage: "类似用法：Pull up to the second window to pick up your food.（开到第二个窗口取餐）",
              },
            },
            alternativeExpressions: [
              { textEn: "That'll be $12.47. Go ahead and drive to the first window, please.", textZh: "一共12.47美元。请开到第一个窗口。", actionHint: "把车往前开", frequency: "common" },
              { textEn: "Your total's $12.47. Pull around to the window and we'll have it right out.", textZh: "总计12.47美元。绕过来到窗口，马上给您。", actionHint: "开车到取餐窗口", frequency: "occasional" },
            ],
          },
          {
            speaker: "them",
            role: "窗口",
            textEn: "Hi! That'll be $12.47. Tap or insert your card here... Great. Your order will be ready at the next window. Have a great day!",
            textZh: "你好！12.47美元。在这里刷卡或插卡……好了。下一个窗口取餐。祝您愉快！",
            keyPhrases: [
              { en: "tap or insert", zh: "感应或插卡" },
              { en: "next window", zh: "下一个窗口" },
            ],
            alternativeExpressions: [
              { textEn: "$12.47 — card or cash? ... Perfect. Pick up your food at the next window!", textZh: "12.47美元——刷卡还是现金？……好了。下一个窗口取餐！", actionHint: "付款后往前开", frequency: "common" },
              { textEn: "That's $12.47. Just tap right here. All done — drive to window two for your food!", textZh: "12.47美元。在这里刷一下。好了——开到二号窗口取餐！", actionHint: "刷卡后开到下一个窗口", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "order-issues",
        titleZh: "得来速订单问题",
        titleEn: "Drive-Through Order Issues",
        description: "取餐后发现漏餐或错误的处理",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I just got my order but it's wrong. I ordered a double cheeseburger but got a regular hamburger.",
            textZh: "不好意思，我刚拿到的单弄错了。我点的是双层芝士汉堡，给了普通汉堡。",
          },
          {
            speaker: "them",
            role: "窗口",
            textEn: "I'm so sorry about that! Can I see your receipt? ... Yes, you're right. Let me remake that for you right away. It'll be about 2 minutes.",
            textZh: "非常抱歉！能看一下您的收据吗？……是的，您说得对。我马上重新做一份。大概2分钟。",
            keyPhrases: [
              { en: "remake", zh: "重新做" },
              { en: "right away", zh: "马上" },
            ],
            alternativeExpressions: [
              { textEn: "Oh no, my bad! Let me fix that real quick. Just give me a couple minutes.", textZh: "哦不好意思！我马上改正。给我几分钟。", actionHint: "等一下就好", frequency: "common" },
              { textEn: "I apologize! Let me check your receipt... Yep, we messed up. I'll get the right one for you ASAP.", textZh: "抱歉！让我看看收据……对，搞错了。我尽快给您做正确的。", actionHint: "稍等片刻", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Also, I asked for no pickles but there are pickles on this. And I'm missing the chicken nuggets.",
            textZh: "另外，我说了不要酸黄瓜但上面有。而且少了鸡块。",
          },
          {
            speaker: "them",
            role: "窗口",
            textEn: "I apologize for all the mix-ups. Let me get you the correct burger with no pickles and a fresh order of nuggets with BBQ sauce. Can you pull forward and park in the numbered spot? I'll bring everything out to your car.",
            textZh: "对所有的弄错非常抱歉。我给您拿正确的没有酸黄瓜的汉堡和新做的鸡块配烧烤酱。您能往前开停在编号车位吗？我送到您车上。",
            keyPhrases: [
              { en: "mix-ups", zh: "弄错/搞混" },
              { en: "pull forward", zh: "往前开" },
              { en: "numbered spot", zh: "编号车位" },
            ],
            alternativeExpressions: [
              { textEn: "I'm sorry! Let me fix that. Can you park in spot 2? I'll bring it right out.", textZh: "抱歉！我来改正。能停在2号车位吗？马上给您送出来。", actionHint: "开到指定车位等", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, no problem. These things happen.",
            textZh: "好的，没关系。这种事难免的。",
          },
          {
            speaker: "them",
            role: "窗口",
            textEn: "Thank you for being patient. As an apology, I've added a free apple pie and upgraded your drink to a large. Here's your corrected order — a double cheeseburger no pickles, 6-piece nuggets with BBQ, and your free pie.",
            textZh: "谢谢您的耐心。作为道歉，我送了一个免费的苹果派，还把饮料升级到大杯了。这是您改正后的订单——不加酸黄瓜的双层芝士汉堡、6块鸡块配烧烤酱，还有免费的派。",
            keyPhrases: [
              { en: "being patient", zh: "耐心" },
              { en: "as an apology", zh: "作为道歉" },
              { en: "upgraded", zh: "升级" },
              { en: "corrected order", zh: "改正后的订单" },
            ],
            alternativeExpressions: [
              { textEn: "Sorry for the wait! Here's the right order, plus a free pie and a drink upgrade on us.", textZh: "抱歉让您久等！这是正确的订单，另外免费送一个派，饮料也升级了。", actionHint: "检查一下是否都对了", frequency: "common" },
              { textEn: "Thanks for your patience. We threw in a free dessert to make up for it. Everything should be right this time!", textZh: "感谢您的耐心。我们加了一个免费甜品作为补偿。这次应该都对了！", actionHint: "确认订单正确", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh, that's really nice of you! Thank you. Everything looks right this time.",
            textZh: "哦，你太好了！谢谢。这次看起来都对了。",
          },
          {
            speaker: "them",
            role: "窗口",
            textEn: "I'm glad! Again, sorry for the inconvenience. If you have any other issues, feel free to come back or you can call the number on the receipt. Have a great day!",
            textZh: "太好了！再次抱歉给您带来不便。如果还有问题，欢迎回来或者打收据上的电话。祝您有美好的一天！",
            keyPhrases: [
              { en: "inconvenience", zh: "不便" },
              { en: "the number on the receipt", zh: "收据上的电话" },
            ],
            alternativeExpressions: [
              { textEn: "Great! Sorry again. If anything else comes up, just swing by or give us a call. Enjoy!", textZh: "太好了！再次抱歉。有问题随时过来或打电话。祝用餐愉快！", actionHint: "可以离开了", frequency: "common" },
              { textEn: "Glad it's all good now! Don't hesitate to reach out if you need anything. Have a good one!", textZh: "很高兴都没问题了！有需要随时联系。祝您愉快！", actionHint: "开车离开", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "No worries at all. Thanks for fixing it so quickly!",
            textZh: "完全没关系。谢谢你这么快就解决了！",
          },
        ],
      },
    ],
  },

  // ==================== 美食广场 ====================
  {
    id: "restaurant-food-court",
    category: "restaurant",
    titleZh: "美食广场",
    titleEn: "Food Court",
    description: "在商场或机场美食广场点餐、找座位",
    otherRole: "摊位工作人员/同伴",
    otherRoleIcon: "store",
    flows: [
      {
        id: "browsing-ordering",
        titleZh: "浏览和点餐",
        titleEn: "Browsing & Ordering",
        description: "在美食广场各个摊位看菜、点餐",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "There are so many options here! Let's walk around and see what looks good.",
            textZh: "这里选择好多！我们走一圈看看什么好吃。",
          },
          {
            speaker: "them",
            role: "同伴",
            textEn: "Good idea. I see Chinese, Japanese, Mexican, Indian, and a pizza place. What are you in the mood for?",
            textZh: "好主意。我看到有中餐、日餐、墨西哥菜、印度菜，还有一家披萨店。你想吃什么？",
            keyPhrases: [
              { en: "what are you in the mood for", zh: "你想吃什么" },
            ],
            alternativeExpressions: [
              { textEn: "There's a ton of choices! Chinese, Japanese, Mexican... What do you feel like eating?", textZh: "选择太多了！中餐、日餐、墨西哥菜……你想吃啥？", actionHint: "告诉同伴你的想法", frequency: "common" },
              { textEn: "Wow, lots of options. I see Asian, Mexican, pizza... What sounds good to you?", textZh: "哇，好多选择。有亚洲菜、墨西哥菜、披萨……你觉得什么好？", actionHint: "说出你想吃的", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm thinking Japanese. Let me check out that teriyaki place. Hi, what's your most popular dish?",
            textZh: "我想吃日餐。我去看看那家照烧店。你好，你们最受欢迎的是什么？",
          },
          {
            speaker: "them",
            role: "摊位",
            textEn: "Our chicken teriyaki bowl is the best seller! It comes with rice, steamed vegetables, and teriyaki sauce. You can also add gyoza for $3 more. Would you like a sample?",
            textZh: "照烧鸡肉饭最畅销！配米饭、蒸蔬菜和照烧酱。还可以加3美元来份煎饺。要试吃吗？",
            keyPhrases: [
              { en: "best seller", zh: "最畅销的" },
              { en: "comes with", zh: "配有/搭配" },
              { en: "gyoza", zh: "煎饺" },
              { en: "sample", zh: "试吃" },
            ],
            alternativeExpressions: [
              { textEn: "The teriyaki chicken is our number one! Wanna try a taste?", textZh: "照烧鸡是我们的第一名！想尝一口吗？", actionHint: "可以先试吃", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I'd love a sample! ... Mmm, that's delicious. I'll have the chicken teriyaki bowl with gyoza, please.",
            textZh: "好的，我想试吃！……嗯，真好吃。来一份照烧鸡肉饭加煎饺。",
          },
          {
            speaker: "them",
            role: "摊位",
            textEn: "Great choice! White rice or brown rice? And for the drink, it comes with a fountain drink — help yourself at the drink station over there.",
            textZh: "好选择！白米饭还是糙米饭？套餐含自助饮料——那边的饮料机自己接。",
            keyPhrases: [
              { en: "white rice or brown rice", zh: "白米饭还是糙米饭" },
              { en: "fountain drink", zh: "自助饮料" },
              { en: "help yourself", zh: "自己来/自助" },
              { en: "drink station", zh: "饮料机" },
            ],
            vocabNotes: {
              "fountain drink": {
                meaningInContext: "在这句话里表示：从饮料机接的饮料（可乐、雪碧等），不是瓶装的",
                similarUsage: "类似用法：Refills on fountain drinks are free.（自助饮料可以免费续杯）",
              },
            },
            alternativeExpressions: [
              { textEn: "Nice! White or brown rice? You get a free drink too — the fountain's right over there.", textZh: "好的！白米饭还是糙米？还送一杯饮料——饮料机就在那边。", actionHint: "选米饭后自己去接饮料", frequency: "common" },
              { textEn: "That comes with rice and a drink. White or brown? Drinks are self-serve at the station.", textZh: "套餐含米饭和饮料。白米还是糙米？饮料自助。", actionHint: "选好后去饮料机", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "White rice, please. Is there a number system, or do I wait here?",
            textZh: "白米饭。是叫号还是在这里等？",
          },
          {
            speaker: "them",
            role: "摊位",
            textEn: "I'll make it fresh right now — it takes about 3 minutes. You can wait here or grab a seat and I'll call your number. You're number 47.",
            textZh: "我现在给您做——大概3分钟。可以在这里等，也可以先找座位，我会叫号。您是47号。",
            keyPhrases: [
              { en: "make it fresh", zh: "现做" },
              { en: "call your number", zh: "叫号" },
            ],
            alternativeExpressions: [
              { textEn: "Coming right up! About 3 minutes. Hang tight or find a seat — I'll call number 47.", textZh: "马上做！大概3分钟。在这等或去找座位——我叫47号。", actionHint: "记住自己的号码", frequency: "common" },
              { textEn: "I'll have it ready in a few. You're number 47 — listen for your number!", textZh: "一会儿就好。您是47号——注意听叫号！", actionHint: "可以先去占座", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll grab a seat. Is it hard to find tables during lunch hour?",
            textZh: "我先找座位。午餐时间找桌子难吗？",
          },
          {
            speaker: "them",
            role: "同伴",
            textEn: "It can be pretty crowded. Let's split up — I'll save us a table while you wait for your food. Look for me near the back by the windows.",
            textZh: "可能挺挤的。我们分头行动——你等餐我去占座。在后面靠窗的位置找我。",
            keyPhrases: [
              { en: "crowded", zh: "拥挤的" },
              { en: "save us a table", zh: "占座" },
              { en: "split up", zh: "分头行动" },
            ],
            alternativeExpressions: [
              { textEn: "Lunch rush is crazy here. I'll go grab a table — you wait for the food. I'll text you where I'm sitting.", textZh: "午高峰这里特别挤。我去占桌——你等餐。我发消息告诉你我坐哪。", actionHint: "分头行动效率更高", frequency: "common" },
              { textEn: "Yeah, it gets packed. Why don't I find seats while you pick up the order?", textZh: "对，会很挤。我去找座位，你拿餐怎么样？", actionHint: "一个人占座一个人取餐", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "food-court-tips",
        titleZh: "美食广场实用技巧",
        titleEn: "Food Court Practical Tips",
        description: "公共用餐区的礼仪和实用对话",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, is this seat taken?",
            textZh: "请问这个位置有人吗？",
            casualVersion: "Anyone sitting here?",
          },
          {
            speaker: "them",
            role: "陌生人",
            textEn: "No, go ahead! I'm actually just about to leave.",
            textZh: "没有，请坐！我其实马上就走了。",
            keyPhrases: [
              { en: "is this seat taken", zh: "这位置有人吗" },
              { en: "go ahead", zh: "请便" },
            ],
            alternativeExpressions: [
              { textEn: "Nope, it's all yours! I'm heading out in a sec.", textZh: "没有，归你了！我一会儿就走。", actionHint: "可以坐下了", frequency: "common" },
              { textEn: "No one's sitting here — feel free! I was just leaving anyway.", textZh: "没人坐——请便！我正好要走了。", actionHint: "直接坐下", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks! Do you know if there's a microwave somewhere? I brought my own lunch.",
            textZh: "谢谢！你知道哪里有微波炉吗？我自己带了午饭。",
          },
          {
            speaker: "them",
            role: "陌生人",
            textEn: "I think there's one near the condiment station, over by the napkins and utensils. Some food courts have them for customers who bring their own food.",
            textZh: "我想调料台那边有一个，就在餐巾纸和餐具旁边。有些美食广场给自带食物的顾客提供微波炉。",
            keyPhrases: [
              { en: "microwave", zh: "微波炉" },
              { en: "condiment station", zh: "调料台" },
              { en: "utensils", zh: "餐具" },
              { en: "napkins", zh: "餐巾纸" },
            ],
            alternativeExpressions: [
              { textEn: "I think I saw one over by the napkins and ketchup area. Check near the condiment station.", textZh: "我好像在餐巾纸和番茄酱那边看到了一个。去调料台那边找找。", actionHint: "去调料台附近找", frequency: "common" },
              { textEn: "There should be one somewhere around the self-serve area — near the forks and stuff.", textZh: "自助区那边应该有一个——在餐具旁边。", actionHint: "去自助区看看", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Found it, thanks. Hey, where do we bus our trays when we're done?",
            textZh: "找到了，谢谢。对了，吃完了餐盘放哪里？",
          },
          {
            speaker: "them",
            role: "同伴",
            textEn: "See those stations with the trash cans and the tray return? Just sort your trash — recycling on the left, trash on the right, and stack your tray on top. Some food courts have separate bins for compost too.",
            textZh: "看到那些有垃圾桶和餐盘回收的地方了吗？分类一下垃圾——左边是可回收，右边是普通垃圾，餐盘摞在上面。有些美食广场还有堆肥专用箱。",
            keyPhrases: [
              { en: "bus our trays", zh: "收拾餐盘" },
              { en: "tray return", zh: "餐盘回收处" },
              { en: "sort your trash", zh: "垃圾分类" },
              { en: "recycling", zh: "可回收物" },
              { en: "compost", zh: "堆肥" },
            ],
            vocabNotes: {
              "bus": {
                meaningInContext: "在这句话里表示：收拾用过的餐具和餐盘（餐饮业术语，不是公共汽车）",
                similarUsage: "类似用法：Please bus your own table.（请自行收拾餐桌）",
              },
            },
            alternativeExpressions: [
              { textEn: "Just take your tray to the station over there. Recycling and trash are separated — tray goes on top.", textZh: "把餐盘拿到那边的回收处就行。可回收和普通垃圾分开——餐盘放上面。", actionHint: "按分类投放垃圾", frequency: "common" },
              { textEn: "There's a tray return by the exit. Toss your trash and stack the tray — easy!", textZh: "出口旁边有餐盘回收处。扔掉垃圾，餐盘摞上去就行——很简单！", actionHint: "走的时候顺便收拾", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Do the food court vendors accept credit cards, or is it cash only?",
            textZh: "明白了。美食广场的摊位接受信用卡吗，还是只收现金？",
          },
          {
            speaker: "them",
            role: "同伴",
            textEn: "Most places accept cards nowadays, but a few small vendors might be cash-only. There's an ATM near the entrance if you need cash. Some places also take Apple Pay and Google Pay.",
            textZh: "现在大部分店都接受刷卡了，但有几个小摊位可能只收现金。入口附近有ATM机，如果需要现金的话。有些店还接受Apple Pay和Google Pay。",
            keyPhrases: [
              { en: "cash-only", zh: "只收现金" },
              { en: "ATM", zh: "自动取款机" },
            ],
            alternativeExpressions: [
              { textEn: "Almost everywhere takes cards now. A couple of the smaller stalls might be cash-only though.", textZh: "现在基本都能刷卡了。不过有几个小摊位可能只收现金。", actionHint: "带点现金以防万一", frequency: "common" },
              { textEn: "Cards and mobile pay work at most places. If a vendor only takes cash, there's an ATM by the door.", textZh: "大部分店都接受刷卡和手机支付。如果有只收现金的，门口有ATM机。", actionHint: "不用太担心付款方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "One of the vendors gave me a loyalty card. Is it worth it?",
            textZh: "有一家给了我一张会员卡。值得办吗？",
          },
          {
            speaker: "them",
            role: "同伴",
            textEn: "If you eat there regularly, definitely! Usually you get a stamp per visit and a free meal after 10 visits. Some food courts also have their own apps with deals and discounts for all the vendors.",
            textZh: "如果经常去吃的话绝对值得！通常每次消费盖一个章，10次后免费吃一次。有些美食广场还有自己的App，所有摊位都有优惠和折扣。",
            keyPhrases: [
              { en: "loyalty card", zh: "会员卡" },
              { en: "stamp", zh: "盖章" },
              { en: "deals and discounts", zh: "优惠和折扣" },
            ],
            alternativeExpressions: [
              { textEn: "For sure! You get a free meal after so many visits. Totally worth it if you come here a lot.", textZh: "当然值得！去够一定次数就免费吃一次。经常来的话太划算了。", actionHint: "考虑办一张", frequency: "common" },
              { textEn: "Yeah, it's a buy-ten-get-one-free kind of deal. Plus some places have app-only discounts.", textZh: "是的，买十送一那种。而且有些店有App专属优惠。", actionHint: "可以留着这张卡", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. This food court is really convenient — everything in one place!",
            textZh: "这个信息有用。这个美食广场真方便——什么都有！",
          },
        ],
      },
    ],
  },

  // ==================== 甜品店/面包房 ====================
  {
    id: "restaurant-18",
    category: "restaurant",
    titleZh: "甜品店/面包房",
    titleEn: "Bakery & Dessert Shop",
    description: "在甜品店或面包房选购蛋糕、面包、甜点，了解口味和定制选项",
    otherRole: "甜品店店员",
    otherRoleIcon: "cake-slice",
    flows: [
      // --- Flow 1: 柜台选购 ---
      {
        id: "counter-selection",
        titleZh: "柜台选购",
        titleEn: "Counter Selection",
        description: "在展示柜前选购各种甜点和面包",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "店员",
            textEn: "Welcome to Sweet Bloom! Everything in the display case is freshly baked this morning. Can I help you pick something?",
            textZh: "欢迎来到Sweet Bloom！展示柜里的都是今天早上新鲜烤的。需要帮您选吗？",
            keyPhrases: [
              { en: "display case", zh: "展示柜" },
              { en: "freshly baked", zh: "新鲜烤的" },
            ],
            alternativeExpressions: [
              { textEn: "Good morning! What can I get for you today?", textZh: "早上好！今天想要点什么？", actionHint: "直接告诉店员你想要什么", frequency: "common" },
              { textEn: "Hi there! Let me know when you're ready to order.", textZh: "你好！想好了告诉我。", actionHint: "可以先慢慢看", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Everything looks amazing! What's that one on the top shelf — the one with the pink frosting?",
            textZh: "全都好好看！最上面那个——粉色糖霜的那个是什么？",
            casualVersion: "Ooh, what's that pink one up top?",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "That's our signature raspberry rose cake. It's layers of vanilla sponge with raspberry jam and rose-flavored buttercream. It's one of our bestsellers.",
            textZh: "那是我们的招牌覆盆子玫瑰蛋糕。香草海绵蛋糕夹覆盆子果酱和玫瑰味奶油霜。是我们最畅销的。",
            keyPhrases: [
              { en: "signature", zh: "招牌" },
              { en: "layers of", zh: "多层的" },
              { en: "sponge", zh: "海绵蛋糕" },
              { en: "buttercream", zh: "奶油霜" },
              { en: "bestseller", zh: "最畅销" },
            ],
            vocabNotes: {
              "signature": { meaningInContext: "在这句话里表示：店家的招牌/代表作品", similarUsage: "类似用法：Our signature cocktail（我们的招牌鸡尾酒）" },
              "sponge": { meaningInContext: "在这句话里表示：松软的海绵蛋糕体", similarUsage: "类似用法：chocolate sponge cake（巧克力海绵蛋糕）" },
            },
            alternativeExpressions: [
              { textEn: "Oh, that's our raspberry rose! It's vanilla cake with raspberry and rose buttercream. Super popular!", textZh: "那是我们的覆盆子玫瑰！香草蛋糕配覆盆子和玫瑰奶油霜。超级受欢迎！", actionHint: "可以试一块", frequency: "common" },
              { textEn: "That's our number one seller — raspberry rose cake. Everyone loves it!", textZh: "那是我们的销量冠军——覆盆子玫瑰蛋糕。人人都爱！", actionHint: "值得一试", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds lovely. How much is a slice? And can I also get a whole cake for a birthday?",
            textZh: "听起来不错。一块多少钱？另外，可以买整个蛋糕过生日吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "A slice is $7.50. For a whole cake, we have 6-inch and 8-inch options — $38 and $52. If it's for a birthday, we can add a message on top for free!",
            textZh: "一块7.50美元。整个蛋糕有6英寸和8英寸的——38和52美元。如果是生日蛋糕，我们可以免费在上面写字！",
            keyPhrases: [
              { en: "a slice", zh: "一块" },
              { en: "6-inch / 8-inch", zh: "6英寸/8英寸" },
              { en: "add a message", zh: "写字/写祝福语" },
            ],
            localVariants: {
              "en-US": "A slice is $7.50.",
              "en-GB": "A slice is £6.50.",
              "en-AU": "A slice is $9.",
            },
            alternativeExpressions: [
              { textEn: "Slices are $7.50. Whole cakes start at $38 for 6-inch. We can write a birthday message for free!", textZh: "一块7.50美元。整个蛋糕6英寸起38美元。可以免费写生日祝语！", actionHint: "决定买一块还是整个", frequency: "common" },
              { textEn: "It's $7.50 a slice. If you need a whole one, we do 6 and 8-inch — and personalization is free!", textZh: "一块7.50美元。要整个的话有6寸和8寸——而且定制文字免费！", actionHint: "选择尺寸和是否定制", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take an 8-inch one for tomorrow. Can you write 'Happy Birthday Lily' on it?",
            textZh: "我要一个8英寸的，明天取。可以写'生日快乐Lily'吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Absolutely! What time would you like to pick it up? We open at 8 AM.",
            textZh: "当然可以！您想几点来取？我们早上8点开门。",
            keyPhrases: [
              { en: "pick it up", zh: "来取/自取" },
            ],
            vocabNotes: {
              "pick it up": { meaningInContext: "在这句话里表示：到店来拿预定好的东西", similarUsage: "类似用法：I'll pick up my dry cleaning after work.（下班后去取干洗的衣服）" },
            },
            alternativeExpressions: [
              { textEn: "Sure thing! When do you need it by? We're open from 8.", textZh: "没问题！什么时候需要？我们8点开门。", actionHint: "告诉店员取蛋糕时间", frequency: "common" },
              { textEn: "No problem! Just let me know the pickup time. We open at 8 AM.", textZh: "没问题！告诉我取的时间就行。我们早上8点开门。", actionHint: "说出想取的时间", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Around 3 PM would be perfect. And for now, I'll have a slice of that raspberry cake and a croissant, please.",
            textZh: "下午3点左右最好。现在的话，我要一块覆盆子蛋糕和一个羊角面包。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Great choice! Would you like the croissant plain or filled? We have chocolate, almond, and ham-and-cheese.",
            textZh: "选得好！羊角面包要原味的还是夹心的？有巧克力、杏仁和火腿芝士。",
            keyPhrases: [
              { en: "plain", zh: "原味的" },
              { en: "filled", zh: "有馅的/夹心的" },
              { en: "almond", zh: "杏仁" },
            ],
            alternativeExpressions: [
              { textEn: "We've got regular croissants and stuffed ones — chocolate or almond?", textZh: "我们有普通的和夹心的——巧克力还是杏仁？", actionHint: "选择口味即可", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Almond, please. Can I get everything to go?",
            textZh: "杏仁的。可以打包带走吗？",
            culturalNote: "\"to go\" 是美式说法，英式说 \"takeaway\"。法式面包房有时会用纸袋包装。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Of course! That'll be $12.50 for today, and I'll put you down for the 8-inch raspberry rose for 3 PM tomorrow. We'll need a deposit of $20.",
            textZh: "当然！今天一共12.50美元，我帮您登记明天下午3点取8英寸覆盆子玫瑰蛋糕。需要20美元定金。",
            keyPhrases: [
              { en: "put you down for", zh: "帮您登记" },
              { en: "deposit", zh: "定金" },
            ],
            vocabNotes: {
              "deposit": { meaningInContext: "在这句话里表示：预付的定金，取蛋糕时付余款", similarUsage: "类似用法：We require a $100 deposit for catering orders.（外卖订单需要100美元定金）" },
            },
            alternativeExpressions: [
              { textEn: "Today's total is $12.50. For tomorrow's cake, I just need $20 down and you pay the rest at pickup.", textZh: "今天一共12.50美元。明天的蛋糕先付20美元定金，取的时候付余款。", actionHint: "付今天的和定金", frequency: "common" },
              { textEn: "That's $12.50 now, plus a $20 deposit for the birthday cake. You're all set for 3 PM tomorrow!", textZh: "现在付12.50美元，加上生日蛋糕20美元定金。明天下午3点来取！", actionHint: "记住明天来取", frequency: "occasional" },
            ],
          },
        ],
      },
      // --- Flow 2: 甜品推荐与过敏咨询 ---
      {
        id: "allergy-recommendation",
        titleZh: "甜品推荐与过敏咨询",
        titleEn: "Recommendations & Allergy Inquiry",
        description: "咨询过敏原信息、寻找无糖或低糖选项",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm looking for something sweet but I have a nut allergy. What would you recommend?",
            textZh: "你好，我想买甜点但是我对坚果过敏。有什么推荐的吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Good to know — we take allergies very seriously. Let me point out the nut-free options. The lemon tart, the fruit Danish, and the vanilla eclair are all made in our nut-free section.",
            textZh: "感谢告知——我们非常重视过敏问题。我来给您指出无坚果的选项。柠檬挞、水果丹麦酥和香草闪电泡芙都是在无坚果区域制作的。",
            keyPhrases: [
              { en: "take allergies seriously", zh: "重视过敏问题" },
              { en: "nut-free", zh: "无坚果的" },
              { en: "lemon tart", zh: "柠檬挞" },
              { en: "Danish", zh: "丹麦酥" },
              { en: "eclair", zh: "闪电泡芙" },
            ],
            vocabNotes: {
              "eclair": { meaningInContext: "在这句话里表示：法式闪电泡芙，长条形中间夹奶油的甜点", similarUsage: "类似用法：chocolate eclair（巧克力闪电泡芙）" },
            },
            culturalNote: "欧美面包房通常会严格标注过敏原信息，有些店甚至有独立的无过敏原制作区域。",
            alternativeExpressions: [
              { textEn: "Thanks for telling me! We have a dedicated nut-free area. The lemon tart and eclair are safe options.", textZh: "谢谢告知！我们有专门的无坚果区。柠檬挞和闪电泡芙都是安全的选择。", actionHint: "从无坚果的选项中挑选", frequency: "common" },
              { textEn: "We're very careful with allergies here. Let me show you what's nut-free — we've got a few great options.", textZh: "我们对过敏非常谨慎。让我给您看看无坚果的——有几个很不错的选择。", actionHint: "让店员指出来", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The lemon tart looks good. Is it very sweet? I prefer things that aren't too sugary.",
            textZh: "柠檬挞看起来不错。很甜吗？我不太喜欢太甜的。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "It's actually one of our more tart options — the lemon curd gives it a nice tangy flavor. If you want something even less sweet, we also have a dark chocolate mousse that's low-sugar.",
            textZh: "其实这是我们比较酸的选项之一——柠檬凝乳带来清爽的酸味。如果想要更不甜的，我们还有低糖的黑巧克力慕斯。",
            keyPhrases: [
              { en: "tart", zh: "酸的" },
              { en: "lemon curd", zh: "柠檬凝乳" },
              { en: "tangy", zh: "酸爽的" },
              { en: "mousse", zh: "慕斯" },
              { en: "low-sugar", zh: "低糖" },
            ],
            vocabNotes: {
              "tart": { meaningInContext: "在这句话里表示：味道偏酸的（注意：和lemon tart的tart是同一个词但意思不同，这里是形容词'酸的'）", similarUsage: "类似用法：Granny Smith apples are quite tart.（青苹果很酸）" },
            },
            literalMeaning: "\"tart\" 作名词是挞/派，作形容词是酸的。同一句话里两种用法都出现了。",
            alternativeExpressions: [
              { textEn: "Not too sweet at all — it's more on the tangy side. The dark chocolate mousse is even less sweet if you prefer.", textZh: "一点都不太甜——偏酸爽。如果你喜欢更不甜的，黑巧慕斯甜度更低。", actionHint: "根据口味选择", frequency: "common" },
              { textEn: "The lemon tart is actually pretty zesty. For really low sugar, try our dark chocolate mousse.", textZh: "柠檬挞其实挺清新的。想要真正低糖的话，试试我们的黑巧慕斯。", actionHint: "两个都可以尝试", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll try the lemon tart and the dark chocolate mousse. Do you have any sugar-free options by any chance?",
            textZh: "我要一个柠檬挞和一个黑巧慕斯。顺便问一下，有无糖的选项吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "We do! We have a sugar-free cheesecake made with stevia. It's in the case on the right — it tastes surprisingly close to the regular version.",
            textZh: "有的！我们有用甜菊糖做的无糖芝士蛋糕。在右边的展示柜里——味道和普通版的非常接近。",
            keyPhrases: [
              { en: "sugar-free", zh: "无糖" },
              { en: "stevia", zh: "甜菊糖" },
              { en: "surprisingly close", zh: "出奇地接近" },
            ],
            alternativeExpressions: [
              { textEn: "We've got a couple of diabetic-friendly desserts in the low-sugar section.", textZh: "我们低糖区有几款适合糖尿病患者的甜点。", actionHint: "去低糖区看看", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's great for my friend who's diabetic. I'll add one of those too. Can I pay with Apple Pay?",
            textZh: "太好了，我朋友有糖尿病正好可以买。再加一个。可以用Apple Pay付款吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes, we accept Apple Pay, Google Pay, and all major credit cards. Just tap here on the reader. Your total is $23.75.",
            textZh: "可以，我们接受Apple Pay、Google Pay和所有主流信用卡。在读卡器上刷一下就行。一共23.75美元。",
            keyPhrases: [
              { en: "tap", zh: "轻触/刷" },
              { en: "reader", zh: "读卡器" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! Tap, insert, or swipe — whatever works. That'll be $23.75.", textZh: "当然！感应、插卡或刷卡都行。一共23.75美元。", actionHint: "在读卡器上操作", frequency: "common" },
              { textEn: "We take all major cards and mobile pay. $23.75 — just tap right here.", textZh: "我们接受所有主流卡和手机支付。23.75美元——在这里刷一下。", actionHint: "拿出手机或卡支付", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Done! Could I get the cheesecake boxed separately? It's a gift.",
            textZh: "好了！芝士蛋糕可以单独装盒吗？是送人的。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Of course! I'll put it in one of our gift boxes with a ribbon. Would you like a little card with it?",
            textZh: "当然！我帮你放进礼盒，系上丝带。需要附一张小卡片吗？",
            keyPhrases: [
              { en: "gift box", zh: "礼盒" },
              { en: "ribbon", zh: "丝带" },
            ],
            culturalNote: "很多欧美甜品店提供精美的礼盒包装服务，有些是免费的，有些会收少量费用。",
            alternativeExpressions: [
              { textEn: "Sure! I'll box it up nicely with a bow. Want a card to go with it?", textZh: "好的！我给包装漂亮一点，系个蝴蝶结。要配一张卡片吗？", actionHint: "决定是否要卡片", frequency: "common" },
              { textEn: "Happy to! We have lovely gift packaging. Shall I add a message card?", textZh: "乐意效劳！我们有精美的礼品包装。要附一张留言卡吗？", actionHint: "可以写祝福语", frequency: "occasional" },
            ],
          },
        ],
      },
      // --- Flow 3: 面包种类选购 ---
      {
        id: "bread-selection",
        titleZh: "面包种类选购",
        titleEn: "Bread Selection",
        description: "在面包房选购各种面包，了解不同面包的种类和用途",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Good morning! I need some bread for the week. What are your most popular loaves?",
            textZh: "早上好！我需要买一周的面包。你们最受欢迎的是哪些？",
          },
          {
            speaker: "them",
            role: "面包师",
            textEn: "Our sourdough is the most popular — we make it fresh every day using a 100-year-old starter. The whole wheat and the olive ciabatta are also really popular.",
            textZh: "我们的酸面团面包最受欢迎——用百年老酵母每天新鲜制作。全麦面包和橄榄夏巴塔也很受欢迎。",
            keyPhrases: [
              { en: "sourdough", zh: "酸面团面包" },
              { en: "starter", zh: "酵母/发酵种" },
              { en: "whole wheat", zh: "全麦" },
              { en: "ciabatta", zh: "夏巴塔/意式拖鞋面包" },
            ],
            vocabNotes: {
              "starter": { meaningInContext: "在这句话里表示：天然发酵的老面种，用来发酵面包的", similarUsage: "类似用法：Our starter is over 50 years old.（我们的酵母有50多年了）" },
              "sourdough": { meaningInContext: "在这句话里表示：用天然酵母长时间发酵的面包，有微酸口感", similarUsage: "类似用法：sourdough pancakes（酸面团煎饼）" },
            },
            culturalNote: "美国很多手工面包房以酵母的年份为卖点——有些'starter'真的有上百年历史，代代相传。",
            alternativeExpressions: [
              { textEn: "The sourdough flies off the shelves — it's our pride and joy. Whole wheat and ciabatta are also big sellers.", textZh: "酸面团面包卖得飞快——是我们的招牌。全麦和夏巴塔也很畅销。", actionHint: "选一种试试", frequency: "common" },
              { textEn: "Everyone loves our sourdough! We bake it fresh daily. The whole wheat is also excellent for everyday use.", textZh: "大家都爱我们的酸面团面包！每天新鲜烤制。全麦面包日常吃也很棒。", actionHint: "可以两种都买", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take a sourdough loaf. What bread would you recommend for sandwiches?",
            textZh: "我要一个酸面团面包。做三明治你推荐什么面包？",
          },
          {
            speaker: "them",
            role: "面包师",
            textEn: "For sandwiches, our multigrain or the French baguette sliced lengthwise work great. The ciabatta is also perfect for panini if you have a press at home.",
            textZh: "做三明治的话，我们的杂粮面包或者法棍纵切都很棒。如果家里有压烤机，夏巴塔做帕尼尼也很完美。",
            keyPhrases: [
              { en: "multigrain", zh: "杂粮" },
              { en: "baguette", zh: "法棍" },
              { en: "sliced lengthwise", zh: "纵切" },
              { en: "panini", zh: "帕尼尼" },
              { en: "press", zh: "压烤机" },
            ],
            localVariants: {
              "en-US": "For sandwiches, I'd go with our multigrain.",
              "en-GB": "For sarnies, the granary loaf is brilliant.",
              "en-AU": "For sandwiches, the multigrain or the Vienna loaf work a treat.",
            },
            alternativeExpressions: [
              { textEn: "The multigrain is great for sandwiches. Or grab a baguette and slice it — makes awesome subs.", textZh: "杂粮面包做三明治很好。或者买根法棍切开——做潜艇三明治特别棒。", actionHint: "选适合三明治的面包", frequency: "common" },
              { textEn: "I'd go with the multigrain for everyday sandwiches. The ciabatta makes killer paninis too.", textZh: "日常三明治我推荐杂粮面包。夏巴塔做帕尼尼也是一绝。", actionHint: "看自己需求选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take a multigrain loaf too. Can you slice it for me?",
            textZh: "我也要一个杂粮面包。可以帮我切片吗？",
          },
          {
            speaker: "them",
            role: "面包师",
            textEn: "Sure! Thin slices or regular? And would you like it in a bag to keep it fresh?",
            textZh: "当然！要薄片还是普通厚度？要不要放进保鲜袋保持新鲜？",
            keyPhrases: [
              { en: "thin slices", zh: "薄片" },
              { en: "keep it fresh", zh: "保持新鲜" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! How thick — thin for toast or regular for sandwiches? Want me to bag it?", textZh: "当然！要多厚——烤面包用的薄片还是做三明治的普通厚度？要袋子吗？", actionHint: "选厚度和包装", frequency: "common" },
              { textEn: "Happy to slice it! Sandwich thickness or thinner? I'll bag it to keep it fresh.", textZh: "乐意帮您切！三明治厚度还是更薄？我用袋子装好保鲜。", actionHint: "说出偏好的厚度", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Regular slices, please. And yes, a bag would be great. How long will it stay fresh?",
            textZh: "普通厚度。好的，装袋吧。能保鲜多久？",
          },
          {
            speaker: "them",
            role: "面包师",
            textEn: "The sourdough keeps well for about 3-4 days at room temperature, or you can freeze it for up to a month. The multigrain is best within 2-3 days. Pro tip: if you freeze slices individually, you can just toast them straight from the freezer.",
            textZh: "酸面团面包室温下可以保存3-4天，冷冻的话一个月没问题。杂粮面包最好2-3天内吃完。小建议：如果把面包片单独冷冻，直接从冷冻柜拿出来烤就行。",
            keyPhrases: [
              { en: "room temperature", zh: "室温" },
              { en: "freeze", zh: "冷冻" },
              { en: "toast", zh: "烤" },
              { en: "straight from the freezer", zh: "直接从冷冻柜" },
            ],
            vocabNotes: {
              "toast": { meaningInContext: "在这句话里表示：把面包放进烤面包机加热烤脆", similarUsage: "类似用法：I'll just toast a bagel for breakfast.（早餐烤个百吉饼）" },
            },
            alternativeExpressions: [
              { textEn: "It'll last a few days on the counter. After that, just pop it in the freezer.", textZh: "放台面上能放几天。之后就放冷冻柜。", actionHint: "了解保存方法", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great advice! One last thing — do you have any gluten-free bread?",
            textZh: "好建议！最后一个问题——有无麸质面包吗？",
          },
          {
            speaker: "them",
            role: "面包师",
            textEn: "We do! Our gluten-free loaf is made with rice flour and tapioca starch. It's right over here. Fair warning — it's a bit denser than regular bread, but the flavor is great, especially when toasted.",
            textZh: "有的！我们的无麸质面包是用米粉和木薯淀粉做的。就在这边。提醒一下——比普通面包稍微紧实一些，但味道很好，烤过之后尤其好吃。",
            keyPhrases: [
              { en: "rice flour", zh: "米粉" },
              { en: "tapioca starch", zh: "木薯淀粉" },
              { en: "denser", zh: "更紧实" },
              { en: "fair warning", zh: "提前说明/提醒一下" },
            ],
            vocabNotes: {
              "fair warning": { meaningInContext: "在这句话里表示：提前友好地告知一些可能不符合预期的信息", similarUsage: "类似用法：Fair warning, the parking lot gets full quickly.（提醒一下，停车场很快就满了）" },
            },
            culturalMeaning: "店员说 \"fair warning\" 不是在警告你，而是友善地提前管理你的期望，让你不会失望。",
            alternativeExpressions: [
              { textEn: "Yes! It's made with rice flour — a little heavier than regular bread, but really tasty toasted.", textZh: "有的！用米粉做的——比普通面包稍重一些，但烤了特别好吃。", actionHint: "可以买一个试试", frequency: "common" },
              { textEn: "We've got a GF loaf right here. It's denser but the taste is spot-on, especially warm.", textZh: "我们这边有无麸质面包。口感紧实一些但味道很好，热的时候尤其好吃。", actionHint: "建议回家烤一下再吃", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 牛排馆 ====================
  {
    id: "restaurant-19",
    category: "restaurant",
    titleZh: "牛排馆",
    titleEn: "Steakhouse",
    description: "在牛排馆点餐，选择牛排部位、熟度、配菜和酱汁",
    otherRole: "牛排馆服务员",
    otherRoleIcon: "beef",
    flows: [
      // --- Flow 1: 标准牛排点餐 ---
      {
        id: "standard-steak",
        titleZh: "标准牛排点餐",
        titleEn: "Standard Steak Order",
        description: "选择牛排部位、熟度、配菜，完整的牛排馆就餐体验",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "服务员",
            textEn: "Good evening! Welcome to Black Angus. Here are your menus. Can I start you off with something to drink?",
            textZh: "晚上好！欢迎来到黑安格斯牛排馆。这是菜单。先来点喝的？",
            keyPhrases: [
              { en: "start you off with", zh: "先来点" },
            ],
            alternativeExpressions: [
              { textEn: "Evening, folks. What can I get you to drink?", textZh: "晚上好。喝点什么？", actionHint: "先点饮品", frequency: "common" },
              { textEn: "Hi there! Would you like to see our cocktail menu first?", textZh: "您好！要先看看鸡尾酒菜单吗？", actionHint: "可以先看酒单", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Just water for now, thanks. We'd like to order. What cuts of steak do you have?",
            textZh: "先来杯水就好，谢谢。我们想点餐。你们有哪些部位的牛排？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "We have ribeye, New York strip, filet mignon, and our signature 24-ounce porterhouse for two. All our beef is USDA Prime, dry-aged for 28 days.",
            textZh: "我们有肋眼、纽约客、菲力牛排，还有招牌24盎司的双人红屋牛排。所有牛肉都是USDA Prime级别，干式熟成28天。",
            keyPhrases: [
              { en: "ribeye", zh: "肋眼" },
              { en: "New York strip", zh: "纽约客" },
              { en: "filet mignon", zh: "菲力牛排" },
              { en: "porterhouse", zh: "红屋/丁骨牛排" },
              { en: "dry-aged", zh: "干式熟成" },
              { en: "USDA Prime", zh: "美国农业部最高等级" },
            ],
            vocabNotes: {
              "dry-aged": { meaningInContext: "在这句话里表示：牛肉在特定温度和湿度下放置数周，让肉质更嫩、风味更浓", similarUsage: "类似用法：Our steaks are wet-aged for tenderness.（我们的牛排是湿式熟成的）" },
              "USDA Prime": { meaningInContext: "在这句话里表示：美国农业部最高等级的牛肉评级，脂肪纹理最丰富", similarUsage: "类似用法：USDA Choice is the second-highest grade.（USDA Choice是第二高等级）" },
            },
            alternativeExpressions: [
              { textEn: "We've got ribeye, strip, filet, and a 24-oz porterhouse to share. Everything's Prime and dry-aged.", textZh: "我们有肋眼、纽约客、菲力，还有24盎司可以分享的红屋牛排。全部Prime级，干式熟成。", actionHint: "选择你喜欢的部位", frequency: "common" },
              { textEn: "Tonight we have four cuts — all USDA Prime, aged 28 days. The porterhouse is great for two.", textZh: "今晚有四种部位——全部USDA Prime级，熟成28天。红屋牛排适合两人分享。", actionHint: "问问推荐哪一款", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll have the ribeye. How would you like that cooked — I mean, what do you recommend?",
            textZh: "我要肋眼。你推荐几分熟？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "For a ribeye, I'd recommend medium-rare — that's a warm red center. It really brings out the marbling. But we can do anything from rare to well-done.",
            textZh: "肋眼的话我推荐三分熟——中间是温热的红色。这样最能体现大理石纹。不过从一分到全熟都可以做。",
            keyPhrases: [
              { en: "medium-rare", zh: "三分熟" },
              { en: "warm red center", zh: "中间温热红色" },
              { en: "marbling", zh: "大理石纹/油花" },
              { en: "rare", zh: "一分熟" },
              { en: "well-done", zh: "全熟" },
            ],
            vocabNotes: {
              "marbling": { meaningInContext: "在这句话里表示：牛肉中像大理石纹路的脂肪花纹，是好牛排的标志", similarUsage: "类似用法：Japanese Wagyu has incredible marbling.（日本和牛的油花非常丰富）" },
            },
            culturalNote: "美国牛排馆的熟度从生到熟：rare（一分）→ medium-rare（三分）→ medium（五分）→ medium-well（七分）→ well-done（全熟）。多数牛排行家推荐medium-rare。",
            alternativeExpressions: [
              { textEn: "Medium-rare is the way to go with a ribeye — keeps it juicy and flavorful. But we'll cook it however you like.", textZh: "肋眼三分熟最好——保持多汁和风味。不过您想要几分熟都行。", actionHint: "选你喜欢的熟度", frequency: "common" },
              { textEn: "I'd say medium-rare to really enjoy the fat marbling. Of course, it's totally up to you.", textZh: "我建议三分熟，这样最能享受油花。当然，完全看您喜好。", actionHint: "告诉服务员你的偏好", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Medium-rare sounds perfect. What sides come with it?",
            textZh: "三分熟好。配什么配菜？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Each steak comes with your choice of one side. We have baked potato, garlic mashed potatoes, creamed spinach, grilled asparagus, or Caesar salad. Additional sides are $8 each.",
            textZh: "每份牛排搭配一道配菜。有烤土豆、蒜香土豆泥、奶油菠菜、烤芦笋或凯撒沙拉。加配菜每份8美元。",
            keyPhrases: [
              { en: "your choice of", zh: "您选择的" },
              { en: "baked potato", zh: "烤土豆" },
              { en: "mashed potatoes", zh: "土豆泥" },
              { en: "creamed spinach", zh: "奶油菠菜" },
              { en: "additional sides", zh: "额外配菜" },
            ],
            alternativeExpressions: [
              { textEn: "You get one side with your steak — mashed potatoes, baked potato, spinach, asparagus, or Caesar. Extra sides are $8.", textZh: "牛排配一道配菜——土豆泥、烤土豆、菠菜、芦笋或凯撒沙拉。多加一道8美元。", actionHint: "选一道配菜", frequency: "common" },
              { textEn: "It comes with a side of your choice. Our mashed potatoes and creamed spinach are especially popular.", textZh: "配一道自选配菜。我们的土豆泥和奶油菠菜特别受欢迎。", actionHint: "可以参考热门选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Garlic mashed potatoes, please. And for my wife, she'd like the filet mignon, medium, with the Caesar salad.",
            textZh: "蒜香土豆泥。我太太要菲力牛排，五分熟，配凯撒沙拉。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Excellent choices. Would either of you like a sauce on the side? We have peppercorn, béarnaise, and our house-made chimichurri.",
            textZh: "很好的选择。需要配酱汁吗？有黑胡椒酱、贝阿恩酱，还有我们自制的阿根廷青酱。",
            keyPhrases: [
              { en: "on the side", zh: "放在旁边" },
              { en: "peppercorn", zh: "黑胡椒酱" },
              { en: "béarnaise", zh: "贝阿恩酱" },
              { en: "chimichurri", zh: "阿根廷青酱" },
              { en: "house-made", zh: "自制的" },
            ],
            vocabNotes: {
              "on the side": { meaningInContext: "在这句话里表示：酱汁单独装，不浇在牛排上", similarUsage: "类似用法：Dressing on the side, please.（沙拉酱放旁边）" },
            },
            alternativeExpressions: [
              { textEn: "Great picks! Want any sauce with that? We do peppercorn, béarnaise, and a fresh chimichurri.", textZh: "选得好！要配酱汁吗？有黑胡椒酱、贝阿恩酱和新鲜阿根廷青酱。", actionHint: "选一种酱或不要", frequency: "common" },
              { textEn: "Can I interest you in a sauce? Our chimichurri is house-made and really popular with the ribeye.", textZh: "要试试酱汁吗？我们自制的阿根廷青酱配肋眼特别受欢迎。", actionHint: "接受推荐或不要酱", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll try the chimichurri. She doesn't need sauce. How long will it take?",
            textZh: "我试试阿根廷青酱。她不用酱。大概要多久？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "About 15 to 20 minutes for the steaks. In the meantime, would you like some bread for the table?",
            textZh: "牛排大概15到20分钟。在等的时候，要来点面包吗？",
            keyPhrases: [
              { en: "in the meantime", zh: "在此期间" },
              { en: "bread for the table", zh: "餐前面包" },
            ],
            alternativeExpressions: [
              { textEn: "Steaks will be about 15-20 minutes. Can I bring you some bread while you wait?", textZh: "牛排大概15到20分钟。等的时候给您拿些面包来？", actionHint: "可以先吃面包垫肚子", frequency: "common" },
              { textEn: "It'll be a little while for the steaks. How about some warm bread to start?", textZh: "牛排需要一点时间。先来点热面包？", actionHint: "接受面包或拒绝", frequency: "occasional" },
            ],
          },
        ],
      },
      // --- Flow 2: 牛排熟度不对 ---
      {
        id: "steak-doneness-issue",
        titleZh: "牛排熟度不对",
        titleEn: "Wrong Doneness",
        description: "牛排送来后发现熟度不对，需要礼貌地要求重做",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "服务员",
            textEn: "Here's your ribeye, medium-rare, and the filet mignon, medium. Enjoy your meal!",
            textZh: "这是您的肋眼三分熟和菲力五分熟。请慢用！",
            alternativeExpressions: [
              { textEn: "Ribeye medium-rare and filet medium — here you go! Enjoy!", textZh: "肋眼三分熟、菲力五分熟——给您！请慢用！", actionHint: "检查一下熟度", frequency: "common" },
              { textEn: "Here we are — ribeye and filet. Let me know if everything looks good!", textZh: "来了——肋眼和菲力。看看有没有问题！", actionHint: "切开确认熟度", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you! Hmm, actually, I think my ribeye might be a little more done than I expected. It looks more like medium to me.",
            textZh: "谢谢！嗯，不过我觉得我的肋眼好像比我想要的熟了一些。看起来像五分熟。",
            culturalNote: "在美国牛排馆，如果熟度不对，礼貌地要求重做是完全可以接受的。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Let me take a look... You're right, it does look a bit over. I'm so sorry about that. I'll have the kitchen fire a new one right away. It should only be about 10 minutes.",
            textZh: "让我看看……您说得对，确实有点过了。非常抱歉。我让厨房马上重做一份。大概10分钟就好。",
            keyPhrases: [
              { en: "a bit over", zh: "稍微过了/过熟了" },
              { en: "fire a new one", zh: "重做一份" },
              { en: "right away", zh: "马上" },
            ],
            vocabNotes: {
              "fire": { meaningInContext: "在这句话里表示：下单让厨房开始做菜（厨房用语）", similarUsage: "类似用法：Fire table 12's appetizers!（开始做12号桌的前菜！）" },
            },
            literalMeaning: "\"fire a new one\" 字面意思是'点火烧一个新的'，实际在餐饮业是让厨房开始制作的意思。",
            alternativeExpressions: [
              { textEn: "I apologize — let me send this back and get you a new one cooked properly.", textZh: "抱歉——我把这个退回去，给您重新做一份。", actionHint: "等待重做即可", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you, I appreciate that. Should I wait, or should we both start eating?",
            textZh: "谢谢，很感谢。我应该等着，还是我们都先吃？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Please, go ahead and start! Your wife's steak is perfect temperature right now. I'll bring yours out as soon as it's ready. And I'll make sure the kitchen gets it spot-on this time.",
            textZh: "请先吃！您太太的牛排现在温度正好。您的好了我马上端出来。我会确保厨房这次做到位。",
            keyPhrases: [
              { en: "go ahead and start", zh: "先开始吃吧" },
              { en: "spot-on", zh: "精准/到位" },
            ],
            vocabNotes: {
              "spot-on": { meaningInContext: "在这句话里表示：完全正确、精确到位", similarUsage: "类似用法：Your pronunciation is spot-on!（你的发音非常准确！）" },
            },
            alternativeExpressions: [
              { textEn: "Don't wait — your wife should eat while hers is hot. Yours will be out in no time.", textZh: "别等了——您太太趁热吃吧。您的很快就来。", actionHint: "让太太先吃", frequency: "common" },
              { textEn: "Start eating! No sense in both steaks getting cold. I'll rush the new one out.", textZh: "先吃吧！没必要两份都凉了。我催厨房尽快出。", actionHint: "先吃着等新的", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds good. Thank you for being so accommodating.",
            textZh: "好的。谢谢你这么配合。",
            culturalNote: "\"accommodating\" 比 \"nice\" 更正式，在高档餐厅使用显得很有礼貌。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Of course! Here's your new ribeye — beautiful medium-rare this time. And as a gesture for the wait, your dessert tonight will be on the house.",
            textZh: "当然！这是您新的肋眼——这次是漂亮的三分熟。为了补偿您的等待，今晚甜品我们请客。",
            keyPhrases: [
              { en: "as a gesture", zh: "作为表示" },
              { en: "on the house", zh: "餐厅请客/免费" },
            ],
            vocabNotes: {
              "on the house": { meaningInContext: "在这句话里表示：餐厅免费赠送，不收费", similarUsage: "类似用法：The first round is on the house.（第一轮饮料免费）" },
            },
            culturalMeaning: "在欧美高档餐厅，如果出了错，餐厅通常会主动补偿（免费甜品、折扣等），这是服务文化的一部分。",
            alternativeExpressions: [
              { textEn: "Here's the new one — perfect medium-rare. And dessert's on us tonight for the trouble.", textZh: "新的来了——完美的三分熟。今晚甜品我们请，给您添麻烦了。", actionHint: "接受补偿，享用牛排", frequency: "common" },
              { textEn: "Your corrected ribeye, sir. We'd like to comp your dessert tonight to make up for it.", textZh: "您的肋眼重新做好了。今晚甜品免单，算是我们的补偿。", actionHint: "感谢服务员", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Wow, that's very generous. This one looks perfect — thank you so much!",
            textZh: "哇，太大方了。这次看起来完美——非常感谢！",
          },
        ],
      },
    ],
  },

  // ==================== 寿司店 ====================
  {
    id: "restaurant-20",
    category: "restaurant",
    titleZh: "寿司店",
    titleEn: "Sushi Restaurant",
    description: "在日式寿司店就餐，包括吧台点餐、omakase体验和寿司礼仪",
    otherRole: "寿司店服务员/寿司师傅",
    otherRoleIcon: "fish",
    flows: [
      // --- Flow 1: 吧台Omakase体验 ---
      {
        id: "omakase",
        titleZh: "吧台Omakase体验",
        titleEn: "Omakase at the Sushi Bar",
        description: "在寿司吧台享受主厨精选omakase套餐",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "前台",
            textEn: "Good evening! Do you have a reservation? We have bar seating and table seating available tonight.",
            textZh: "晚上好！有预订吗？今晚吧台和桌位都有空。",
            keyPhrases: [
              { en: "bar seating", zh: "吧台座位" },
              { en: "table seating", zh: "桌位" },
            ],
            alternativeExpressions: [
              { textEn: "Welcome! Reservation for tonight? We've got spots at the bar and a few tables open.", textZh: "欢迎！今晚有预订吗？吧台和几张桌子都有空位。", actionHint: "说明有无预订", frequency: "common" },
              { textEn: "Hi there! Walk-in or reservation? We can seat you at the bar or a table.", textZh: "你好！有预订还是直接来的？吧台或桌位都可以。", actionHint: "选吧台还是桌位", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "We don't have a reservation, but we'd love to sit at the sushi bar if possible. We're interested in the omakase.",
            textZh: "没有预订，但如果可以的话想坐吧台。我们想试omakase。",
            culturalNote: "Omakase（おまかせ）是日语'交给你了'的意思，由寿司师傅决定上什么菜。在海外高端寿司店很流行。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "You're in luck — we have two seats right in front of Chef Tanaka. The omakase is $120 per person for 12 pieces plus miso soup and dessert. Shall I seat you?",
            textZh: "您运气好——田中师傅面前正好有两个位置。Omakase每人120美元，12贯加味噌汤和甜品。请入座吗？",
            keyPhrases: [
              { en: "you're in luck", zh: "你运气好" },
              { en: "12 pieces", zh: "12贯" },
              { en: "per person", zh: "每人" },
            ],
            vocabNotes: {
              "omakase": { meaningInContext: "在这句话里表示：厨师精选套餐，由寿司师傅根据当天最佳食材决定菜品", similarUsage: "类似用法：The omakase changes daily based on what's fresh.（Omakase每天根据新鲜食材变化）" },
            },
            alternativeExpressions: [
              { textEn: "Lucky timing! Two bar seats just opened up. The omakase is $120 each — 12 courses plus soup and dessert.", textZh: "来得真巧！刚好空出两个吧台位。Omakase每人120美元——12道加汤和甜品。", actionHint: "决定是否入座", frequency: "common" },
              { textEn: "Perfect — we have two spots at Chef Tanaka's counter. Omakase runs $120 per person. Want to sit down?", textZh: "太好了——田中师傅的台前有两个位置。Omakase每人120美元。要坐吗？", actionHint: "确认价格后入座", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please! This is our first time having omakase — any etiquette we should know?",
            textZh: "好的！这是我们第一次吃omakase——有什么礼仪需要注意的吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Chef Tanaka will place each piece directly in front of you. It's best to eat each one within a few seconds — that's when the temperature and texture are perfect. You can use your hands or chopsticks, whichever you prefer. Also, for nigiri, a light dip of soy sauce on the fish side is plenty.",
            textZh: "田中师傅会直接把每一贯放在您面前。最好在几秒内吃掉——那时温度和口感最完美。用手或筷子都可以。另外，握寿司蘸酱油时轻蘸鱼的一面就够了。",
            keyPhrases: [
              { en: "each piece", zh: "每一贯" },
              { en: "within a few seconds", zh: "几秒内" },
              { en: "texture", zh: "口感" },
              { en: "chopsticks", zh: "筷子" },
              { en: "nigiri", zh: "握寿司" },
              { en: "a light dip", zh: "轻蘸" },
            ],
            vocabNotes: {
              "nigiri": { meaningInContext: "在这句话里表示：手握寿司，米饭上放一片鱼生", similarUsage: "类似用法：The tuna nigiri is their best seller.（金枪鱼握寿司是他们的招牌）" },
            },
            culturalNote: "在正宗寿司店，握寿司蘸酱油应该鱼面朝下轻蘸，不要把米饭面泡在酱油里。在美国很多日式餐厅，师傅已经调好味，甚至不需要再蘸。",
            alternativeExpressions: [
              { textEn: "The chef will serve each piece one at a time. Eat it right away for the best experience — hands or chopsticks, your call.", textZh: "师傅会一贯一贯地上。趁新鲜马上吃体验最好——用手或筷子都行。", actionHint: "做好准备，上一贯吃一贯", frequency: "common" },
              { textEn: "Just eat each piece as soon as it's served. And go easy on the soy sauce — a tiny dip on the fish side is all you need.", textZh: "每贯上来就马上吃。酱油少蘸——在鱼那面轻点一下就够了。", actionHint: "别蘸太多酱油", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it, thank you for the tips! We're ready whenever Chef Tanaka is.",
            textZh: "明白了，谢谢你的建议！田中师傅准备好的时候我们就开始。",
          },
          {
            speaker: "them",
            role: "寿司师傅",
            textEn: "Welcome. Tonight's omakase starts with hirame — that's flounder — flown in this morning from Tsukiji. I've brushed it with a little yuzu and sea salt. Please, enjoy.",
            textZh: "欢迎。今晚的omakase从比目鱼开始——今天早上从筑地空运来的。我刷了一点柚子和海盐。请享用。",
            keyPhrases: [
              { en: "hirame", zh: "比目鱼" },
              { en: "flounder", zh: "比目鱼（英文名）" },
              { en: "flown in", zh: "空运来的" },
              { en: "brushed with", zh: "刷上一层" },
              { en: "yuzu", zh: "柚子" },
            ],
            vocabNotes: {
              "flown in": { meaningInContext: "在这句话里表示：用飞机空运新鲜食材", similarUsage: "类似用法：Our lobster is flown in daily from Maine.（我们的龙虾每天从缅因空运）" },
            },
            alternativeExpressions: [
              { textEn: "We begin with hirame — flounder, fresh from Japan this morning. Just a touch of yuzu and salt. Enjoy.", textZh: "我们从比目鱼开始——今早从日本空运的。只加了一点柚子和盐。请享用。", actionHint: "马上品尝第一贯", frequency: "common" },
              { textEn: "First up is hirame with yuzu and sea salt. The fish arrived today from Tsukiji market.", textZh: "第一道是柚子海盐比目鱼。鱼是今天从筑地市场到的。", actionHint: "趁新鲜吃", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Mmm, that's incredible. The fish just melts in your mouth. What's next?",
            textZh: "嗯，太好吃了。鱼肉入口即化。下一个是什么？",
          },
          {
            speaker: "them",
            role: "寿司师傅",
            textEn: "Next is chu-toro — medium-fatty tuna belly. This is my favorite cut. Notice how the fat creates a buttery texture. I've added just a touch of freshly grated wasabi between the fish and the rice.",
            textZh: "接下来是中腹——中等肥度的金枪鱼腹部。这是我最喜欢的部位。注意脂肪带来的黄油般的口感。我在鱼和米饭之间加了一点现磨山葵。",
            keyPhrases: [
              { en: "chu-toro", zh: "中腹/中脂金枪鱼" },
              { en: "tuna belly", zh: "金枪鱼腹" },
              { en: "buttery", zh: "黄油般细腻的" },
              { en: "grated wasabi", zh: "现磨山葵" },
            ],
            vocabNotes: {
              "buttery": { meaningInContext: "在这句话里表示：像黄油一样柔滑细腻的口感", similarUsage: "类似用法：This avocado has a buttery texture.（这个牛油果口感丝滑）" },
            },
            localVariants: {
              "en-US": "medium-fatty tuna belly",
              "en-GB": "medium-fatty tuna belly",
              "ja": "中トロ (chū-toro)",
            },
            alternativeExpressions: [
              { textEn: "This is chu-toro — the belly of the tuna. Rich and melty. I put a bit of fresh wasabi underneath.", textZh: "这是中腹——金枪鱼的腹部。浓郁入口即化。下面放了一点新鲜山葵。", actionHint: "直接吃，不用再蘸", frequency: "common" },
              { textEn: "Number two: chu-toro. Feel the melt-in-your-mouth texture — that's the beauty of tuna belly.", textZh: "第二贯：中腹。感受入口即化——这就是金枪鱼腹的魅力。", actionHint: "感受口感变化", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's amazing — you can really taste the difference from regular tuna. Can I ask what fish you'll be serving later?",
            textZh: "太棒了——和普通金枪鱼味道真的不一样。能问一下后面还有什么鱼吗？",
          },
          {
            speaker: "them",
            role: "寿司师傅",
            textEn: "I like to keep some surprises! But I will tell you — we'll work up from lighter fish to richer ones, finishing with uni and an egg custard. Any allergies I should know about?",
            textZh: "我喜欢保留一些惊喜！但可以告诉你——会从清淡的鱼到浓郁的鱼，最后是海胆和玉子烧。有什么过敏需要告诉我的吗？",
            keyPhrases: [
              { en: "work up from", zh: "从……到" },
              { en: "lighter to richer", zh: "从清淡到浓郁" },
              { en: "uni", zh: "海胆" },
              { en: "egg custard", zh: "玉子烧" },
            ],
            alternativeExpressions: [
              { textEn: "I'll let the fish speak for itself — trust the process!", textZh: "让鱼自己来说话——相信过程吧！", actionHint: "享受惊喜，不用追问", frequency: "occasional" },
            ],
          },
        ],
      },
      // --- Flow 2: 单点与卷物 ---
      {
        id: "a-la-carte-rolls",
        titleZh: "单点与卷物",
        titleEn: "A La Carte & Rolls",
        description: "在寿司店单点各种寿司和卷物",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "服务员",
            textEn: "Hi! Here's the menu. We have nigiri, sashimi, hand rolls, and special rolls. Our happy hour runs until 6 — all hand rolls are half price.",
            textZh: "你好！这是菜单。我们有握寿司、刺身、手卷和特色卷。欢乐时光到6点——所有手卷半价。",
            keyPhrases: [
              { en: "nigiri", zh: "握寿司" },
              { en: "sashimi", zh: "刺身" },
              { en: "hand rolls", zh: "手卷" },
              { en: "special rolls", zh: "特色卷" },
              { en: "happy hour", zh: "欢乐时光" },
              { en: "half price", zh: "半价" },
            ],
            vocabNotes: {
              "happy hour": { meaningInContext: "在这句话里表示：餐厅特定时段的折扣优惠时间", similarUsage: "类似用法：The bar's happy hour is from 4 to 7 PM.（酒吧欢乐时光从下午4点到7点）" },
            },
            alternativeExpressions: [
              { textEn: "Welcome! Here's the menu. FYI, hand rolls are 50% off during happy hour — that's till 6!", textZh: "欢迎！这是菜单。提一下，欢乐时光手卷五折——到6点！", actionHint: "趁打折多点手卷", frequency: "common" },
              { textEn: "Hey! Take a look at the menu. You came at a great time — hand rolls are half off till 6.", textZh: "你好！看看菜单。你们来的时间很好——手卷到6点前半价。", actionHint: "利用折扣多点", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, we'll definitely take advantage of happy hour! Can we get two salmon hand rolls and one spicy tuna roll?",
            textZh: "太好了，我们一定要利用欢乐时光！来两个三文鱼手卷和一个辣金枪鱼卷。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Sure! For the spicy tuna roll, would you like it with regular rice or brown rice? And do you want it as six pieces or eight?",
            textZh: "好的！辣金枪鱼卷要普通米饭还是糙米？要6个还是8个？",
            keyPhrases: [
              { en: "brown rice", zh: "糙米" },
              { en: "six pieces or eight", zh: "6个还是8个" },
            ],
            alternativeExpressions: [
              { textEn: "Got it! White or brown rice for the spicy tuna? And six or eight pieces?", textZh: "收到！辣金枪鱼卷要白米还是糙米？六个还是八个？", actionHint: "选米饭和数量", frequency: "common" },
              { textEn: "For the spicy tuna — regular or brown rice? We can cut it into 6 or 8.", textZh: "辣金枪鱼卷——普通米还是糙米？可以切6个或8个。", actionHint: "告诉服务员你的选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Regular rice, eight pieces. We'd also like some edamame and miso soup to start.",
            textZh: "普通米饭，8个。我们还要毛豆和味噌汤先上。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Got it. And just so you know, our Dragon Roll is today's special — it's shrimp tempura inside with avocado and eel on top, drizzled with teriyaki sauce. Would you like to add one?",
            textZh: "好的。顺便说一下，今天的特色是龙卷——里面是炸虾天妇罗，上面铺牛油果和鳗鱼，淋上照烧酱。要加一个吗？",
            keyPhrases: [
              { en: "Dragon Roll", zh: "龙卷" },
              { en: "shrimp tempura", zh: "炸虾天妇罗" },
              { en: "eel", zh: "鳗鱼" },
              { en: "drizzled with", zh: "淋上" },
              { en: "teriyaki sauce", zh: "照烧酱" },
            ],
            vocabNotes: {
              "drizzled": { meaningInContext: "在这句话里表示：少量细细地淋在上面", similarUsage: "类似用法：Drizzle some olive oil over the salad.（在沙拉上淋一些橄榄油）" },
            },
            alternativeExpressions: [
              { textEn: "Chef's special today is the Dragon Roll — want to try it?", textZh: "今天主厨推荐是龙卷——想试试吗？", actionHint: "可以接受或拒绝", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds amazing, yes please! One more question — is the wasabi real wasabi or the horseradish kind?",
            textZh: "听起来太好了，来一个！再问一下——山葵是真山葵还是辣根做的那种？",
            culturalNote: "大多数海外寿司店的'wasabi'其实是辣根加绿色素做的。真正的日本山葵（本わさび）非常昂贵，通常只在高端寿司店提供。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Good question! We use real wasabi for our omakase, but the wasabi at the tables is a blend — mostly horseradish with a bit of real wasabi mixed in. I can bring you some freshly grated wasabi for an extra $3 if you'd like.",
            textZh: "好问题！我们的omakase用的是真山葵，但桌上的是混合的——主要是辣根加一点真山葵。如果需要的话，加3美元可以给您现磨的真山葵。",
            keyPhrases: [
              { en: "real wasabi", zh: "真山葵" },
              { en: "horseradish", zh: "辣根" },
              { en: "a blend", zh: "混合的" },
              { en: "freshly grated", zh: "现磨的" },
            ],
            alternativeExpressions: [
              { textEn: "Honestly, the table wasabi is mostly horseradish. For $3 extra I can get you the real deal — fresh grated.", textZh: "说实话，桌上的山葵主要是辣根。加3美元可以给您现磨的真山葵。", actionHint: "决定是否加真山葵", frequency: "common" },
              { textEn: "The omakase uses real wasabi. For regular orders, it's a mix. Want the real stuff? It's $3 more.", textZh: "Omakase用的是真山葵。普通点单是混合的。要真的吗？加3美元。", actionHint: "看个人偏好决定", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The blend is fine for us. Oh, and can we get the check whenever you're ready? We want to catch a movie at 8.",
            textZh: "混合的就行。对了，方便的时候可以买单吗？我们8点要去看电影。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Of course! I'll have it ready by the time you finish. With happy hour, your hand rolls are half off, so the total comes to $62.50 before tax and tip.",
            textZh: "当然！你们吃完我就准备好。因为欢乐时光手卷半价，税和小费前一共62.50美元。",
            keyPhrases: [
              { en: "half off", zh: "半价" },
              { en: "before tax and tip", zh: "税和小费前" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! With the happy hour discount, you're looking at $62.50 plus tax and tip. I'll have the check ready.", textZh: "好的！算上欢乐时光折扣，是62.50美元加税和小费。我把账单准备好。", actionHint: "准备付账", frequency: "common" },
              { textEn: "No problem — $62.50 before tax. The hand roll discount saved you a nice chunk!", textZh: "没问题——税前62.50美元。手卷折扣省了不少呢！", actionHint: "吃完就可以买单", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 外卖/食品配送 ====================
  {
    id: "restaurant-21",
    category: "restaurant",
    titleZh: "外卖/食品配送",
    titleEn: "Food Delivery & Takeout",
    description: "通过电话或App点外卖，与配送员沟通取餐，处理订单问题",
    otherRole: "外卖配送员/餐厅电话接线员",
    otherRoleIcon: "bike",
    flows: [
      // --- Flow 1: 电话点外卖 ---
      {
        id: "phone-takeout",
        titleZh: "电话点外卖",
        titleEn: "Phone Takeout Order",
        description: "打电话到餐厅点外卖并自取",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "接线员",
            textEn: "Thank you for calling Lucky Dragon. Is this for dine-in, takeout, or delivery?",
            textZh: "感谢致电福龙。您是堂食、自取还是外送？",
            keyPhrases: [
              { en: "dine-in", zh: "堂食" },
              { en: "takeout", zh: "自取/打包" },
              { en: "delivery", zh: "外送" },
            ],
            alternativeExpressions: [
              { textEn: "Lucky Dragon, how can I help you?", textZh: "福龙，请问有什么需要？", actionHint: "说明你要点外卖", frequency: "common" },
              { textEn: "Hi, pickup or delivery?", textZh: "你好，自取还是外送？", actionHint: "直接说自取或外送", frequency: "common" },
            ],
            localVariants: {
              "en-US": "Is this for dine-in, takeout, or delivery?",
              "en-GB": "Is this eat-in, collection, or delivery?",
              "en-AU": "Dine-in, takeaway, or delivery?",
            },
          },
          {
            speaker: "you",
            textEn: "Takeout, please. I'd like to place an order for pickup in about 30 minutes.",
            textZh: "自取。我想点外卖，大概30分钟后来取。",
          },
          {
            speaker: "them",
            role: "接线员",
            textEn: "Sure thing. What can I get for you?",
            textZh: "好的。您要点什么？",
            alternativeExpressions: [
              { textEn: "No problem! Go ahead with your order.", textZh: "没问题！请点吧。", actionHint: "开始报你想点的菜", frequency: "common" },
              { textEn: "Sounds good. What would you like to order?", textZh: "好的。您想点什么？", actionHint: "说出你要的菜", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I get one Kung Pao chicken, one beef with broccoli, and two orders of fried rice? Oh, and an egg drop soup.",
            textZh: "来一份宫保鸡丁、一份西兰花牛肉、两份炒饭。对了，再加一份蛋花汤。",
          },
          {
            speaker: "them",
            role: "接线员",
            textEn: "Got it. For the Kung Pao, mild, medium, or spicy? And the fried rice — regular, chicken, or shrimp?",
            textZh: "好的。宫保鸡丁要微辣、中辣还是特辣？炒饭要普通的、鸡肉的还是虾仁的？",
            keyPhrases: [
              { en: "mild", zh: "微辣" },
              { en: "medium", zh: "中辣" },
              { en: "spicy", zh: "特辣" },
            ],
            alternativeExpressions: [
              { textEn: "Okay! How spicy for the Kung Pao — mild, medium, or hot? And what kind of fried rice?", textZh: "好的！宫保鸡丁要多辣——微辣、中辣还是很辣？炒饭要什么的？", actionHint: "选辣度和炒饭口味", frequency: "common" },
              { textEn: "What heat level on the Kung Pao? And the rice — plain, chicken, or shrimp fried rice?", textZh: "宫保鸡丁辣度要多少？炒饭要白的、鸡肉的还是虾仁的？", actionHint: "告诉对方你的偏好", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Medium spice for the Kung Pao, and both fried rice with chicken, please.",
            textZh: "宫保鸡丁中辣，两份都要鸡肉炒饭。",
          },
          {
            speaker: "them",
            role: "接线员",
            textEn: "Alright. Your total comes to $38.75. Would you like to pay now over the phone or when you pick up?",
            textZh: "好的。一共38.75美元。现在电话付款还是取的时候付？",
            keyPhrases: [
              { en: "over the phone", zh: "电话付款" },
              { en: "when you pick up", zh: "取的时候" },
            ],
            alternativeExpressions: [
              { textEn: "That's $38.75 total. Pay now with a card or at pickup — your choice.", textZh: "总共38.75美元。现在用卡付或者取的时候付——都可以。", actionHint: "选择付款时间", frequency: "common" },
              { textEn: "Your order is $38.75. Wanna give me a card number now, or pay when you come in?", textZh: "您的订单38.75美元。现在报卡号还是到了再付？", actionHint: "决定什么时候付款", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll pay when I pick up. What's the address again?",
            textZh: "取的时候付。地址再说一下？",
          },
          {
            speaker: "them",
            role: "接线员",
            textEn: "We're at 234 Main Street, between the bank and the shoe store. Your order will be ready in about 25 minutes. Name for the order?",
            textZh: "我们在主街234号，银行和鞋店中间。大概25分钟后好。请问订单名字？",
            keyPhrases: [
              { en: "name for the order", zh: "订单名字" },
            ],
            alternativeExpressions: [
              { textEn: "234 Main Street — you can't miss it. About 25 minutes. What name should I put on the order?", textZh: "主街234号——很好找。大概25分钟。订单用什么名字？", actionHint: "报你的名字", frequency: "common" },
              { textEn: "We're on Main between the bank and the shoe store. It'll be about half an hour. Name?", textZh: "我们在主街上，银行和鞋店之间。大概半小时。名字是？", actionHint: "说出你的姓", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Wang. W-A-N-G. See you in 25 minutes!",
            textZh: "王。W-A-N-G。25分钟后见！",
          },
        ],
      },
      // --- Flow 2: 接外卖配送 ---
      {
        id: "meet-delivery-driver",
        titleZh: "接外卖配送",
        titleEn: "Meeting the Delivery Driver",
        description: "与外卖配送员沟通取餐位置、处理订单差错",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "配送员",
            textEn: "Hi, this is your DoorDash driver. I'm at the building but I can't find the entrance. I'm on Oak Street side.",
            textZh: "你好，我是你的DoorDash配送员。我到楼下了但找不到入口。我在橡树街这边。",
            keyPhrases: [
              { en: "DoorDash driver", zh: "DoorDash配送员" },
              { en: "can't find the entrance", zh: "找不到入口" },
            ],
            vocabNotes: {
              "DoorDash": { meaningInContext: "在这句话里表示：美国最流行的外卖配送平台之一", similarUsage: "类似用法：I ordered through Uber Eats.（我通过Uber Eats点的外卖）" },
            },
            alternativeExpressions: [
              { textEn: "Hey, it's your delivery driver. I'm outside but can't figure out how to get in. Which side is the entrance?", textZh: "你好，我是你的外卖员。在外面但不知道怎么进去。入口在哪边？", actionHint: "告诉配送员怎么走", frequency: "common" },
              { textEn: "Hi! Your DoorDash is here. I'm on Oak Street — where do I go from here?", textZh: "你好！你的DoorDash到了。我在橡树街——接下来怎么走？", actionHint: "给配送员指路", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Hi! The main entrance is actually on Maple Avenue — the other side of the building. There's a glass door with a blue awning.",
            textZh: "你好！主入口其实在枫树大道那边——楼的另一面。有个蓝色遮阳篷的玻璃门。",
          },
          {
            speaker: "them",
            role: "配送员",
            textEn: "Oh, I see it now! Do I need to be buzzed in, or can I just walk up?",
            textZh: "哦，我看到了！需要按门铃还是直接进？",
            keyPhrases: [
              { en: "buzzed in", zh: "按门铃进入" },
              { en: "walk up", zh: "直接上来" },
            ],
            vocabNotes: {
              "buzzed in": { meaningInContext: "在这句话里表示：通过对讲系统远程开门让人进入", similarUsage: "类似用法：I'll buzz you in when you arrive.（你到了我帮你开门）" },
            },
            alternativeExpressions: [
              { textEn: "Found it! Can I come right in or is there a buzzer?", textZh: "找到了！可以直接进还是要按门铃？", actionHint: "告诉配送员怎么进", frequency: "common" },
              { textEn: "Got it! Is it a locked entrance? Should I ring someone?", textZh: "看到了！门锁着吗？需要按铃吗？", actionHint: "说明门禁情况", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll come down to meet you. I'm on the 5th floor, so give me two minutes. I'm wearing a red jacket.",
            textZh: "我下来接你。我在5楼，给我两分钟。我穿红色外套。",
          },
          {
            speaker: "them",
            role: "配送员",
            textEn: "Sounds good, I'll wait by the door. Oh, just a heads up — the restaurant was out of Sprite, so they substituted it with 7-Up. Hope that's okay.",
            textZh: "好的，我在门口等。对了提醒一下——餐厅没有雪碧了，换成了七喜。希望没关系。",
            keyPhrases: [
              { en: "heads up", zh: "提前提醒" },
              { en: "out of", zh: "没有了/缺货" },
              { en: "substituted", zh: "替换了" },
            ],
            vocabNotes: {
              "heads up": { meaningInContext: "在这句话里表示：提前告知/友好的预先通知", similarUsage: "类似用法：Just a heads up, the meeting is moved to 3 PM.（提醒一下，会议改到下午3点）" },
            },
            literalMeaning: "\"heads up\" 字面意思是'抬起头'，实际表示'注意/提醒你一下'。",
            alternativeExpressions: [
              { textEn: "Cool, I'll be at the door. By the way, they were out of Sprite so they swapped it for 7-Up.", textZh: "好的，我在门口。对了，他们没有雪碧了所以换成了七喜。", actionHint: "如果不接受可以说明", frequency: "common" },
              { textEn: "I'll wait here. Oh and FYI — no more Sprite at the restaurant, so they gave you 7-Up instead.", textZh: "我在这等。还有告诉你一下——餐厅没有雪碧了，给你换成了七喜。", actionHint: "接受或后续联系退款", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's totally fine. Thank you for letting me know! I'm coming down now.",
            textZh: "完全没问题。谢谢你告诉我！我现在下来。",
          },
          {
            speaker: "them",
            role: "配送员",
            textEn: "Here you go! There should be two bags — one with the food and one with the drinks. Can you double-check that everything's there?",
            textZh: "给您！应该有两个袋子——一个装食物，一个装饮料。您确认一下东西齐不齐？",
            keyPhrases: [
              { en: "here you go", zh: "给你" },
              { en: "double-check", zh: "确认一下" },
            ],
            alternativeExpressions: [
              { textEn: "Here's your order. Mind checking it real quick?", textZh: "你的单。快看一下对不对？", actionHint: "打开检查一下", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Let me see... Hmm, I ordered three containers but there are only two here. I think the beef with broccoli is missing.",
            textZh: "我看看……嗯，我点了三个盒饭但这里只有两个。西兰花牛肉好像少了。",
          },
          {
            speaker: "them",
            role: "配送员",
            textEn: "Oh no, I'm sorry about that. You can report the missing item in the app and they'll give you a refund or credit. Or I can call the restaurant right now to see if they left it out by mistake.",
            textZh: "哦不好意思。您可以在App里报告缺少的餐品，他们会退款或给积分。或者我现在打电话给餐厅看看是不是忘了。",
            keyPhrases: [
              { en: "report the missing item", zh: "报告缺少的餐品" },
              { en: "refund", zh: "退款" },
              { en: "credit", zh: "积分/抵扣" },
              { en: "left it out", zh: "漏掉了" },
            ],
            alternativeExpressions: [
              { textEn: "That's not good — sorry! You can get a refund through the app, or I can call the restaurant for you.", textZh: "这不好——抱歉！您可以通过App退款，或者我帮您打电话给餐厅。", actionHint: "选择处理方式", frequency: "common" },
              { textEn: "My bad! Best bet is to report it in the app for a quick refund. Want me to call them too?", textZh: "我的错！最好在App里报告，退款很快。要我也打电话给他们吗？", actionHint: "在App里操作最方便", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll report it in the app. Thank you for your help though — I'll make sure to give you a five-star rating!",
            textZh: "我在App里报告吧。不过还是谢谢你的帮忙——我一定给你五星好评！",
            culturalNote: "在美国外卖App中给配送员好评和小费是重要的礼仪。配送员的收入很大程度上依赖小费。",
          },
        ],
      },
    ],
  },

  // ==================== 高级西餐/Fine Dining ====================
  {
    id: "restaurant-22",
    category: "restaurant",
    titleZh: "高级西餐",
    titleEn: "Fine Dining",
    description: "在高级西餐厅就餐，体验多道式套餐、侍酒师服务和餐桌礼仪",
    otherRole: "高级餐厅服务员/侍酒师",
    otherRoleIcon: "wine",
    flows: [
      // --- Flow 1: 多道式套餐 ---
      {
        id: "tasting-menu",
        titleZh: "多道式套餐",
        titleEn: "Tasting Menu Experience",
        description: "体验高级餐厅的多道式套餐和配酒服务",
        difficulty: "advanced",
        turns: [
          {
            speaker: "them",
            role: "领位员",
            textEn: "Good evening. Welcome to La Maison. May I have the name for your reservation?",
            textZh: "晚上好。欢迎来到La Maison。请问您的预订姓名？",
            keyPhrases: [
              { en: "name for your reservation", zh: "预订姓名" },
            ],
            alternativeExpressions: [
              { textEn: "Welcome to La Maison. Do you have a reservation this evening?", textZh: "欢迎来到La Maison。今晚有预订吗？", actionHint: "报上你的姓名", frequency: "common" },
              { textEn: "Good evening, and welcome. May I ask the name on your booking?", textZh: "晚上好，欢迎光临。请问预订的姓名是？", actionHint: "告诉领位员你的名字", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Wang, party of two. We booked the 7 o'clock tasting menu.",
            textZh: "王，两位。我们订了7点的品鉴套餐。",
          },
          {
            speaker: "them",
            role: "领位员",
            textEn: "Ah yes, Mr. Wang. Right this way. Tonight's tasting menu is seven courses with an optional wine pairing. Your server Philippe will walk you through everything.",
            textZh: "好的，王先生。这边请。今晚的品鉴套餐是七道菜，可选配酒。您的服务员Philippe会为您详细介绍。",
            keyPhrases: [
              { en: "tasting menu", zh: "品鉴套餐" },
              { en: "seven courses", zh: "七道菜" },
              { en: "wine pairing", zh: "配酒" },
              { en: "walk you through", zh: "为您介绍" },
            ],
            vocabNotes: {
              "tasting menu": { meaningInContext: "在这句话里表示：由主厨设计的多道式固定套餐，每道分量小但精致", similarUsage: "类似用法：The tasting menu changes with the seasons.（品鉴套餐随季节变化）" },
              "wine pairing": { meaningInContext: "在这句话里表示：侍酒师为每道菜搭配一杯相配的葡萄酒", similarUsage: "类似用法：The wine pairing adds $85 per person.（配酒每人加85美元）" },
            },
            alternativeExpressions: [
              { textEn: "Mr. Wang, welcome. Follow me, please. You'll be having the seven-course tasting menu tonight. Philippe will take great care of you.", textZh: "王先生，欢迎。请跟我来。今晚是七道菜的品鉴套餐。Philippe会好好照顾您。", actionHint: "跟着领位员走", frequency: "common" },
              { textEn: "We have your table ready, Mr. Wang. Tonight's seven courses are wonderful. Your server will explain everything.", textZh: "您的桌子准备好了，王先生。今晚的七道菜非常精彩。服务员会为您介绍一切。", actionHint: "入座等服务员来", frequency: "occasional" },
            ],
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Good evening! I'm Philippe, your server tonight. Before we begin, are there any allergies or dietary restrictions I should inform the kitchen about?",
            textZh: "晚上好！我是Philippe，今晚的服务员。在开始之前，有什么过敏或饮食限制需要我告知厨房的吗？",
            alternativeExpressions: [
              { textEn: "Welcome! I'll be looking after you this evening. Any dietary needs or allergies I should know about?", textZh: "欢迎！今晚由我来服务。有什么饮食需求或过敏需要告诉我的吗？", actionHint: "如实告知即可", frequency: "common" },
              { textEn: "Good evening, I'm Philippe. Before we get started — any food allergies or restrictions?", textZh: "晚上好，我是Philippe。开始之前——有食物过敏或限制吗？", actionHint: "说明有无过敏", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "No allergies for either of us. We'd love to do the wine pairing. How does it work?",
            textZh: "我们都没有过敏。我们想配酒。怎么配的？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Wonderful. Our sommelier has selected a different wine for each course — you'll receive a small pour with each dish. She'll explain the pairing when she presents each wine. The pairing is $95 per person. Shall I add it?",
            textZh: "太好了。我们的侍酒师为每道菜选了不同的酒——每道菜会配一小杯。她上酒时会解释搭配理由。配酒每人95美元。要加吗？",
            keyPhrases: [
              { en: "sommelier", zh: "侍酒师" },
              { en: "a small pour", zh: "少量（一小杯）" },
              { en: "presents", zh: "呈上/介绍" },
            ],
            vocabNotes: {
              "sommelier": { meaningInContext: "在这句话里表示：专业的葡萄酒侍酒师，负责酒单和配酒建议", similarUsage: "类似用法：Ask the sommelier for a recommendation.（请侍酒师推荐）" },
              "pour": { meaningInContext: "在这句话里表示：倒出来的一杯酒（名词用法）", similarUsage: "类似用法：Can I get another pour of that Pinot?（再来一杯那个黑皮诺？）" },
            },
            culturalNote: "在高级西餐厅，侍酒师（sommelier）是非常专业的职位，持有国际认证。他们不仅推荐酒，还会讲解每款酒与菜品搭配的原因。",
            alternativeExpressions: [
              { textEn: "Our sommelier curated a wine for each course — it's $95 per person. She'll walk you through each one. Interested?", textZh: "我们的侍酒师为每道菜精选了一款酒——每人95美元。她会逐一介绍。有兴趣吗？", actionHint: "决定是否加配酒", frequency: "common" },
              { textEn: "The wine pairing is seven glasses matched to each course, $95 per person. It really elevates the experience.", textZh: "配酒是七杯酒对应七道菜，每人95美元。真的会提升用餐体验。", actionHint: "配酒能让体验更完整", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please add the pairing for both of us. This is actually our anniversary, so we want the full experience.",
            textZh: "好的，两个人都要配酒。今天是我们的结婚纪念日，想要完整的体验。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Happy anniversary! I'll let the kitchen and the sommelier know — we might have a little surprise for you later. Your first course will be out shortly: an amuse-bouche from Chef Laurent.",
            textZh: "结婚纪念日快乐！我会告诉厨房和侍酒师——稍后可能会有个小惊喜。第一道很快就来：Laurent主厨的开胃小点。",
            keyPhrases: [
              { en: "amuse-bouche", zh: "开胃小点" },
              { en: "will be out shortly", zh: "很快就来" },
            ],
            vocabNotes: {
              "amuse-bouche": { meaningInContext: "在这句话里表示：主厨赠送的一口小食，用来在正餐前唤醒味蕾", similarUsage: "类似用法：The amuse-bouche tonight is a chilled cucumber gazpacho.（今晚的开胃小点是冷黄瓜西班牙汤）" },
            },
            literalMeaning: "\"amuse-bouche\" 法语直译是'逗嘴巴开心'，指正式上菜前厨师赠送的一小口美食。",
            alternativeExpressions: [
              { textEn: "Congratulations! I'll pass that along — we love celebrating special occasions. First up: a little something from the chef.", textZh: "恭喜！我会转达的——我们很喜欢庆祝特别的日子。先来一道主厨小食。", actionHint: "期待惊喜", frequency: "common" },
              { textEn: "How wonderful — happy anniversary! We'll make tonight extra special. The amuse-bouche is on its way.", textZh: "太棒了——结婚纪念日快乐！今晚我们会让它格外特别。开胃小点马上来。", actionHint: "享受特别的夜晚", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How lovely! One question — should we use the utensils from the outside in?",
            textZh: "太好了！问一下——餐具是从外到里用吗？",
            culturalNote: "西式正餐礼仪中，餐具确实从最外侧开始用，每道菜用完换下一套。如果不确定，看服务员撤走哪套就行。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Exactly right — start from the outside and work your way in. Don't worry though, we'll clear and reset between each course. Just enjoy the food and we'll take care of the rest.",
            textZh: "完全正确——从最外面开始往里用。不过不用担心，每道菜之间我们会清理和重新摆放。您只管享受美食，其他的交给我们。",
            keyPhrases: [
              { en: "work your way in", zh: "往里用" },
              { en: "clear and reset", zh: "清理和重新摆放" },
              { en: "take care of the rest", zh: "其他的交给我们" },
            ],
            alternativeExpressions: [
              { textEn: "That's right — outside in. But honestly, don't stress about it. We'll swap everything out between courses.", textZh: "没错——从外到里。不过真的别紧张。每道菜之间我们都会换新的餐具。", actionHint: "放松享受就好", frequency: "common" },
              { textEn: "Yes, start from the outer silverware. But we'll guide you — just relax and enjoy.", textZh: "是的，从最外面的餐具开始。我们会引导您——放松享受就好。", actionHint: "不用紧张，跟着服务员走", frequency: "occasional" },
            ],
          },
          {
            speaker: "them",
            role: "侍酒师",
            textEn: "Good evening! I'm Marie, your sommelier tonight. For the first course — the seared scallop — I've paired a 2022 Chablis from Burgundy. Notice the minerality and crisp acidity — it complements the sweetness of the scallop beautifully.",
            textZh: "晚上好！我是Marie，今晚的侍酒师。配第一道菜——煎扇贝——我选了一支2022年勃艮第的夏布利。注意它的矿物感和清爽酸度——和扇贝的甜味非常搭配。",
            keyPhrases: [
              { en: "seared scallop", zh: "煎扇贝" },
              { en: "Chablis", zh: "夏布利" },
              { en: "minerality", zh: "矿物感" },
              { en: "crisp acidity", zh: "清爽酸度" },
              { en: "complements", zh: "搭配/相衬" },
            ],
            vocabNotes: {
              "minerality": { meaningInContext: "在这句话里表示：葡萄酒中类似矿石、石灰岩的风味", similarUsage: "类似用法：This Riesling has a lovely minerality.（这款雷司令有很好的矿物感）" },
              "complements": { meaningInContext: "在这句话里表示：与食物味道相互衬托、搭配和谐", similarUsage: "类似用法：The sauce complements the fish perfectly.（酱汁与鱼完美搭配）" },
            },
            culturalMeaning: "侍酒师介绍酒时提到的'矿物感'、'酸度'等是品酒术语。点头表示理解就行，不需要装作很懂酒。",
            alternativeExpressions: [
              { textEn: "For the scallop, I've chosen a Chablis — its bright acidity is a perfect match for the sweetness of the seafood.", textZh: "配扇贝我选了一支夏布利——明亮的酸度和海鲜的甜味是完美搭配。", actionHint: "品尝时注意酸度", frequency: "common" },
              { textEn: "This Chablis has a lovely mineral quality that pairs wonderfully with seared scallop. Take a sip and see.", textZh: "这款夏布利有很好的矿物质感，和煎扇贝搭配非常出色。尝一口试试。", actionHint: "先喝一口再吃", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's beautiful — I can really taste the pairing. The acidity cuts through the richness perfectly. Thank you, Marie.",
            textZh: "太棒了——真的能尝出搭配的妙处。酸度完美地化解了扇贝的油脂感。谢谢你，Marie。",
          },
        ],
      },
      // --- Flow 2: 着装要求与餐桌礼仪 ---
      {
        id: "dress-code-etiquette",
        titleZh: "着装要求与餐桌礼仪",
        titleEn: "Dress Code & Table Etiquette",
        description: "确认着装要求、处理餐桌上的常见情况",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hello, I have a reservation for tonight at 8 PM. I just wanted to check — is there a dress code?",
            textZh: "你好，我订了今晚8点的位。想确认一下——有着装要求吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, we are smart casual. Collared shirts for gentlemen — no shorts, sneakers, or flip-flops. For ladies, anything from a nice blouse to a cocktail dress works. Jackets are appreciated but not required.",
            textZh: "有的，我们是smart casual。男士需要有领衬衫——不可以穿短裤、运动鞋或拖鞋。女士从精致衬衫到小礼裙都可以。夹克推荐但不强制。",
            keyPhrases: [
              { en: "smart casual", zh: "精致休闲" },
              { en: "collared shirts", zh: "有领衬衫" },
              { en: "flip-flops", zh: "拖鞋/人字拖" },
              { en: "cocktail dress", zh: "小礼裙" },
              { en: "appreciated but not required", zh: "推荐但不强制" },
            ],
            vocabNotes: {
              "smart casual": { meaningInContext: "在这句话里表示：介于正式和休闲之间的着装风格", similarUsage: "类似用法：The event is smart casual — no need for a tie.（活动着装是精致休闲——不需要系领带）" },
            },
            localVariants: {
              "en-US": "Business casual or smart casual. No sneakers or flip-flops.",
              "en-GB": "Smart casual. No trainers or open-toed shoes, please.",
            },
            alternativeExpressions: [
              { textEn: "We're smart casual — a nice shirt and pants for men, no athletic wear. Ladies, a blouse or dress is perfect.", textZh: "我们是精致休闲——男士穿好一点的衬衫和长裤，不要运动服。女士穿衬衫或裙子就行。", actionHint: "按要求穿搭即可", frequency: "common" },
              { textEn: "Just dress nicely — button-down, no sneakers or shorts. You'll be fine.", textZh: "穿得体一点就行——扣子衬衫，不穿运动鞋和短裤。没问题的。", actionHint: "不用太紧张", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. I have a button-down shirt and dress shoes — should be fine, right?",
            textZh: "明白了。我有一件扣领衬衫和皮鞋——应该没问题吧？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "That's perfect. We look forward to seeing you tonight, Mr. Wang.",
            textZh: "完全没问题。今晚等您来，王先生。",
            alternativeExpressions: [
              { textEn: "That sounds great! See you at 8, Mr. Wang.", textZh: "听起来很好！8点见，王先生。", actionHint: "准备好出门", frequency: "common" },
              { textEn: "Absolutely fine. We'll have everything ready for you tonight.", textZh: "完全没问题。今晚一切都会为您准备好。", actionHint: "按时到达即可", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. One more thing — we might be a few minutes late. Will that be a problem?",
            textZh: "谢谢。还有一件事——我们可能会晚几分钟。有问题吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "We hold reservations for 15 minutes. If you're running later than that, please call us and we'll do our best to accommodate you. After 15 minutes without notice, we may release the table.",
            textZh: "我们会保留15分钟。如果超过15分钟请打电话，我们会尽量安排。超过15分钟未联系的话，我们可能会把桌子让出去。",
            keyPhrases: [
              { en: "hold reservations", zh: "保留预订" },
              { en: "running late", zh: "会迟到" },
              { en: "accommodate", zh: "安排/照顾" },
              { en: "release the table", zh: "让出桌位" },
            ],
            vocabNotes: {
              "accommodate": { meaningInContext: "在这句话里表示：尽量满足你的需求、做出安排", similarUsage: "类似用法：Can you accommodate a party of 10?（能安排10个人的位置吗？）" },
            },
            alternativeExpressions: [
              { textEn: "We can hold your table for about 15 minutes. Just give us a call if you'll be later than that.", textZh: "我们可以保留您的桌子大约15分钟。如果会更晚，请打个电话。", actionHint: "尽量准时到", frequency: "common" },
              { textEn: "No worries for a few minutes. But if it's more than 15, just ring us so we don't give the table away.", textZh: "晚几分钟没关系。但超过15分钟的话请打电话，免得我们把桌子让给别人了。", actionHint: "迟到就打电话", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "We'll be there on time. See you at 8!",
            textZh: "我们会准时到。8点见！",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Welcome back. Before we start, I'd like to place your napkin for you. If you need to step away during the meal, you can place your napkin on the chair — we'll refold it for you.",
            textZh: "欢迎。在开始之前，我帮您放好餐巾。如果用餐期间需要离开，把餐巾放在椅子上就好——我们会帮您重新叠好。",
            keyPhrases: [
              { en: "napkin", zh: "餐巾" },
              { en: "step away", zh: "暂时离开" },
              { en: "refold", zh: "重新叠好" },
            ],
            culturalNote: "在高级西餐厅，离开座位时把餐巾放椅子上表示你还会回来。把餐巾放桌上表示用餐结束。服务员看到椅子上的餐巾会帮你重新叠好。",
            alternativeExpressions: [
              { textEn: "Let me set your napkin. If you get up during dinner, just leave it on your chair and we'll take care of it.", textZh: "我帮您放好餐巾。用餐中途起身的话把餐巾放椅子上就行，我们会处理。", actionHint: "了解餐巾礼仪", frequency: "common" },
              { textEn: "Here's your napkin. Quick tip — chair means you're coming back, table means you're done.", textZh: "这是您的餐巾。小提示——放椅子上表示还会回来，放桌上表示用完了。", actionHint: "记住这个小规则", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you! Excuse me — I accidentally knocked over my water glass. I'm so sorry.",
            textZh: "谢谢！不好意思——我不小心打翻了水杯。真的很抱歉。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Please don't worry at all — it happens! I'll have this cleaned up in just a moment. Let me get you a fresh glass and reset the table. Is everything okay? No water on your clothes?",
            textZh: "完全不用担心——常有的事！我马上清理。给您换一杯新的，重新摆好桌子。没事吧？衣服没沾到水吧？",
            keyPhrases: [
              { en: "don't worry at all", zh: "完全不用担心" },
              { en: "cleaned up", zh: "清理" },
              { en: "fresh glass", zh: "新杯子" },
              { en: "reset the table", zh: "重新摆好桌子" },
            ],
            alternativeExpressions: [
              { textEn: "No problem at all! Accidents happen. Let me take care of it.", textZh: "没关系！意外总会有的。交给我吧。", actionHint: "不用紧张，等服务员处理", frequency: "common" },
              { textEn: "Don't give it a second thought! I'll have this sorted in a moment. Everything dry on your end?", textZh: "完全不用在意！我马上收拾好。您那边没弄湿吧？", actionHint: "说明自己没事", frequency: "occasional" },
            ],
            culturalMeaning: "高级餐厅的服务员会非常优雅地处理这种情况，让客人不觉得尴尬。这是'fine dining'服务的一部分——让客人永远感到舒适。",
          },
          {
            speaker: "you",
            textEn: "I'm fine, thank you. You handled that so gracefully — great service!",
            textZh: "没事，谢谢。你处理得太优雅了——服务真好！",
          },
        ],
      },
    ],
  },
];
