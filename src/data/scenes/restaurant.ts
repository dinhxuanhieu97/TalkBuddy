import type { PresetScene } from "../scene-types";

// ============================================================
// 餐厅场景 — Restaurant Scenes
// 覆盖：电话订位、到店点餐、过敏/忌口、结账
// ============================================================

export const RESTAURANT_SCENES: PresetScene[] = [
  // ==================== 电话订位 ====================
  {
    id: "restaurant-reservation",
    tags: ["reservation", "预订", "订位", "book a table"],
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
              {
                textEn: "Good evening, Garden Restaurant. How can I help?",
                textZh: "晚上好，花园餐厅。有什么需要？",
                actionHint: "直接说想订位",
                frequency: "common",
              },
              {
                textEn: "Thanks for calling! Are you looking to make a reservation?",
                textZh: "感谢来电！您是要订位吗？",
                actionHint: "确认并说明人数和时间",
                frequency: "occasional",
              },
            ],
            casualVersion: "Thanks for calling Garden Restaurant. What can I do for ya?",
            formalityVariants: {
              casual: "Thanks for calling Garden Restaurant. What can I do for ya?",
              standard: "Thank you for calling The Garden Restaurant. How may I help you?",
              formal: "Good evening. Thank you for contacting The Garden Restaurant. How may I be of assistance?",
            },
          },
          {
            speaker: "you",
            textEn: "Hi, I'd like to make a reservation for dinner tonight.",
            textZh: "你好，我想预订今晚的晚餐。",
            culturalNote: '"make a reservation" 和 "book a table" 都是标准说法。',
            casualVersion: "Hey, do you have any tables available tonight?",
            commonMistake: {
              wrong: "I want to make a reservation for dinner tonight.",
              correct: "I'd like to make a reservation for dinner tonight.",
              explanation: "“I want”听起来比较直接和不礼貌，“I'd like”更委婉客气。",
            },
            formalityVariants: {
              casual: "Hey, wanna make a dinner res for tonight.",
              standard: "Hi, I'd like to make a reservation for dinner tonight.",
              formal: "Good evening. I would like to inquire about making a dinner reservation for this evening.",
            },
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
              {
                textEn: "Great! How many people will be dining?",
                textZh: "好的！几位用餐？",
                actionHint: "告诉对方人数",
                frequency: "common",
              },
              {
                textEn: "And how many will that be for?",
                textZh: "请问几位呢？",
                actionHint: "直接回答人数即可",
                frequency: "common",
              },
            ],
            casualVersion: "Sure! How many folks?",
            formalityVariants: {
              casual: "Sure! How many folks?",
              standard: "Of course! How many guests will there be?",
              formal: "Certainly. May I ask the size of your party?",
            },
          },
          {
            speaker: "you",
            textEn: "Four people.",
            textZh: "四个人。",
            commonMistake: {
              wrong: "I have four people.",
              correct: "Four people.",
              explanation: "中国人常说“我有四个人”，英文直接说人数即可。",
            },
            casualVersion: "Four of us.",
            formalityVariants: {
              casual: "Four of us.",
              standard: "Four people.",
              formal: "There will be four individuals in our party.",
            },
          },
          {
            speaker: "them",
            role: "接线",
            textEn: "And what time would you like to come in?",
            textZh: "您想几点来？",
            alternativeExpressions: [
              {
                textEn: "What time works best for you?",
                textZh: "您几点方便？",
                actionHint: "说出希望的时间",
                frequency: "common",
              },
              {
                textEn: "What time were you thinking?",
                textZh: "您想约几点？",
                actionHint: "告诉对方期望的用餐时间",
                frequency: "common",
              },
            ],
            casualVersion: "What time you thinking?",
            formalityVariants: {
              casual: "What time you thinking?",
              standard: "And what time would you like to come in?",
              formal: "And at what preferred time would you like to dine with us?",
            },
          },
          {
            speaker: "you",
            textEn: "Around 7 PM, if possible.",
            textZh: "大概晚上7点，如果可以的话。",
            commonMistake: {
              wrong: "About 7 PM, if can.",
              correct: "Around 7 PM, if possible.",
              explanation: "“if can” 是中式英语，应说 “if possible”。",
            },
            casualVersion: "Around seven, if possible.",
            formalityVariants: {
              casual: "Around seven, if possible.",
              standard: "Around 7 PM, if possible.",
              formal: "Approximately 7:00 PM would be ideal, if that time slot is available.",
            },
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
              {
                textEn: "We've got a table at 7. Can I get a name?",
                textZh: "7点有桌子。请问贵姓？",
                actionHint: "告诉对方你的名字",
                frequency: "common",
              },
              {
                textEn: "Perfect, 7 PM for four. And what name should I put it under?",
                textZh: "好的，7点四位。预订放在谁的名下？",
                actionHint: "说名字并拼写",
                frequency: "common",
              },
            ],
            casualVersion: "Lemme check... Yep, got a 7 PM table for four. Name for the res?",
            formalityVariants: {
              casual: "Lemme check... Yep, 7 PM for four. Name for the res?",
              standard: "Let me check... Yes, I have a table for four at 7 PM. May I have a name for the reservation?",
              formal:
                "One moment while I check availability... Yes, we do have a table for four individuals at 7:00 PM. May I obtain the name under which you wish to place this reservation?",
            },
          },
          {
            speaker: "you",
            textEn: "Wang. W-A-N-G.",
            textZh: "王。W-A-N-G。",
            commonMistake: {
              wrong: "My name is Wang.",
              correct: "Wang.",
              explanation: "餐厅询问名字时直接说名字即可，无需多余主谓宾。",
            },
            culturalNote: "拼出名字可以避免误解，尤其是非英语名字。",
            casualVersion: "Wang. W-A-N-G.",
            formalityVariants: {
              casual: "Wang. W-A-N-G.",
              standard: "Wang. W-A-N-G.",
              formal: "The name is Wang, spelled W-A-N-G.",
            },
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
              {
                textEn: "Can I get a contact number for the reservation?",
                textZh: "能留个预订联系电话吗？",
                actionHint: "报上手机号",
                frequency: "common",
              },
              {
                textEn: "What's the best number to reach you at?",
                textZh: "方便留个联系电话吗？",
                actionHint: "告诉对方你的电话号码",
                frequency: "common",
              },
            ],
            casualVersion: "Gotcha. Phone number in case we gotta call?",
            formalityVariants: {
              casual: "Okay. Phone number in case we need to call?",
              standard: "Got it. And a phone number in case we need to reach you?",
              formal:
                "Understood. And may I request a contact telephone number, should it become necessary to reach you regarding your reservation?",
            },
          },
          {
            speaker: "you",
            textEn: "Sure, it's 415-555-0123.",
            textZh: "好的，415-555-0123。",
            commonMistake: {
              wrong: "My phone number is 415-555-0123.",
              correct: "Sure, it's 415-555-0123.",
              explanation: "直接给出信息更自然，避免多余的“我的电话号码是”。",
            },
            casualVersion: "Yep, 415-555-0123.",
            formalityVariants: {
              casual: "Yep, 415-555-0123.",
              standard: "Sure, it's 415-555-0123.",
              formal: "Certainly, the number is 415-555-0123.",
            },
          },
          {
            speaker: "them",
            role: "接线",
            textEn:
              "Perfect. Do you have any special requests? Seating preference, dietary needs, or a special occasion?",
            textZh: "好的。有什么特别要求吗？座位偏好、饮食需求，或者特殊场合？",
            keyPhrases: [
              { en: "special requests", zh: "特别要求" },
              { en: "seating preference", zh: "座位偏好" },
              { en: "dietary needs", zh: "饮食需求" },
              { en: "special occasion", zh: "特殊场合" },
            ],
            alternativeExpressions: [
              {
                textEn: "Anything else we should know? Allergies, highchairs, anything like that?",
                textZh: "还有什么需要我们知道的吗？过敏、儿童椅之类的？",
                actionHint: "说出特殊需求",
                frequency: "common",
              },
              {
                textEn: "Any special requirements for your table?",
                textZh: "对座位有什么特殊要求吗？",
                actionHint: "提出座位或饮食方面的需求",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Cool. Any special requests? Like where you want to sit, food issues, or a special occasion?",
            formalityVariants: {
              casual: "Cool. Any special requests? Like where you want to sit, food issues, or a special occasion?",
              standard:
                "Perfect. Do you have any special requests? Seating preference, dietary needs, or a special occasion?",
              formal:
                "Excellent. Might you have any specific requests, such as a seating preference, particular dietary requirements, or perhaps if this reservation is for a special occasion?",
            },
          },
          {
            speaker: "you",
            textEn: "Could we get a table by the window if possible? And one person in our group is vegetarian.",
            textZh: "能安排靠窗的位置吗？我们有一个人吃素。",
            casualVersion: "Can we get a window table, if possible? Also, one's vegetarian.",
            commonMistake: {
              wrong: "Can we get window table? And one person eat vegetarian.",
              correct: "Could we get a table by the window if possible? And one person in our group is vegetarian.",
              explanation:
                "缺少冠词，且 'Can' 语气更直接，不如 'Could' 礼貌。'eat vegetarian' 语法错误，应为 'is vegetarian' 或 'eats vegetarian food'。",
            },
            formalityVariants: {
              casual: "Can we get a window table, if possible? Also, one's vegetarian.",
              standard: "Could we get a table by the window if possible? And one person in our group is vegetarian.",
              formal:
                "We would appreciate a table situated by the window, if that is an option. Furthermore, one member of our party requires vegetarian accommodations.",
            },
          },
          {
            speaker: "them",
            role: "接线",
            textEn:
              "I'll do my best for a window table. And I'll note the vegetarian request — our chef can prepare several excellent vegetarian dishes. See you at 7!",
            textZh: "我尽量安排靠窗的。素食要求我记下来——我们厨师可以准备好几道很棒的素食菜。7点见！",
            keyPhrases: [
              { en: "do my best", zh: "尽量" },
              { en: "note", zh: "记下" },
              { en: "vegetarian", zh: "素食" },
            ],
            alternativeExpressions: [
              {
                textEn: "Noted! I'll request a window table and mark the vegetarian. See you tonight!",
                textZh: "记下了！我备注靠窗和素食。今晚见！",
                actionHint: "确认信息并道谢",
                frequency: "common",
              },
              {
                textEn: "No problem! We have plenty of veggie options. I'll put in for a window seat.",
                textZh: "没问题！我们素食选择很多。我帮您申请靠窗的位子。",
                actionHint: "简单道谢即可",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "I'll try for a window table. Got the vegetarian thing down — chef's got some great veggie dishes. See ya at 7!",
            formalityVariants: {
              casual:
                "I'll try for a window table. And I'll note the vegetarian request — chef's got some good veggie options. See ya at 7!",
              standard:
                "I'll do my best for a window table. And I'll note the vegetarian request — our chef can prepare several excellent vegetarian dishes. See you at 7!",
              formal:
                "I will certainly endeavor to accommodate your request for a window table. I have also noted the vegetarian requirement; our culinary team is proficient in preparing a selection of excellent vegetarian entrées. We anticipate your arrival at 7:00 PM.",
            },
          },
          {
            speaker: "you",
            textEn: "Wonderful. Thank you!",
            textZh: "太好了。谢谢！",
            commonMistake: {
              wrong: "Very good. Thank you!",
              correct: "Wonderful. Thank you!",
              explanation: "“Wonderful” 比 “very good” 更自然和地道。",
            },
            casualVersion: "Awesome, thanks!",
            formalityVariants: {
              casual: "Awesome, thanks!",
              standard: "Wonderful. Thank you!",
              formal: "That would be most satisfactory. Thank you kindly.",
            },
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
              {
                textEn: "Garden Restaurant, good evening!",
                textZh: "花园餐厅，晚上好！",
                actionHint: "直接说订位需求",
                frequency: "common",
              },
              {
                textEn: "Hi there, thanks for calling the Garden. What can I do for you?",
                textZh: "你好，感谢致电花园餐厅。有什么能帮您的？",
                actionHint: "说明想订位",
                frequency: "occasional",
              },
            ],
            casualVersion: "Thanks for calling The Garden.",
            formalityVariants: {
              casual: "Thanks for calling The Garden.",
              standard: "Thank you for calling The Garden Restaurant.",
              formal: "Good morning/afternoon/evening, The Garden Restaurant. How may I assist you?",
            },
          },
          {
            speaker: "you",
            textEn: "Hi, I'd like to book a table for six tonight at 7 PM.",
            textZh: "你好，我想预订今晚7点的六人桌。",
            casualVersion: "Hey, can I get a table for six tonight, 7 PM?",
            commonMistake: {
              wrong: "Hi, I want to book a table for six tonight at 7 PM.",
              correct: "Hi, I'd like to book a table for six tonight at 7 PM.",
              explanation: "“I want” 听起来不够礼貌和客气，用 “I'd like” 更地道委婉。",
            },
            formalityVariants: {
              casual: "Hey, can I get a table for six tonight, 7 PM?",
              standard: "Hi, I'd like to book a table for six tonight at 7 PM.",
              formal:
                "Good evening, I would like to inquire about reserving a table for six individuals this evening at 7 PM.",
            },
          },
          {
            speaker: "them",
            role: "接线",
            textEn:
              "I'm sorry, we're fully booked at 7 PM tonight. I do have availability at 5:30 or 9:00. Would either of those work?",
            textZh: "抱歉，今晚7点已经满了。5:30和9:00有位置。这两个时间可以吗？",
            commonMistake: {
              wrong: "7 PM tonight no place.",
              correct: "I'm sorry, 7 PM is fully booked tonight.",
              explanation: "直接说“没位子”不礼貌，应说“fully booked”或“no availability”。",
            },
            variations: [
              {
                textEn: "Unfortunately, 7 PM is fully reserved. Our earliest opening is at 8:45. Would that be okay?",
                textZh: "很遗憾，7点已经订满了。最早的空位是8:45。可以吗？",
              },
            ],
            keyPhrases: [
              { en: "fully booked", zh: "已经满了/订满了" },
              { en: "availability", zh: "有空位" },
              { en: "would that work", zh: "可以吗" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sorry, 7 PM is taken. I could do 5:30 or 8:30 — any interest?",
                textZh: "抱歉，7点满了。5:30或8:30可以吗？",
                actionHint: "选一个时间或提出其他日期",
                frequency: "common",
              },
              {
                textEn: "We're all booked up at 7, but I can put you on the waitlist or try a different time.",
                textZh: "7点全订满了，可以排候补或者换个时间。",
                actionHint: "选择等候位或换时间",
                frequency: "occasional",
              },
            ],
            isBranchPoint: true,
            responseTip: "可以接受建议时间，或者问其他日期",
            casualVersion: "Oh, sorry, 7 PM's totally booked tonight. Got 5:30 or 9. Either of those good?",
            formalityVariants: {
              casual: "Oh, sorry, 7 PM's totally booked tonight. Got 5:30 or 9. Either of those good?",
              standard:
                "I'm sorry, we're fully booked at 7 PM tonight. I do have availability at 5:30 or 9:00. Would either of those work?",
              formal:
                "My apologies, but we are fully committed at 7 PM this evening. However, we do have openings at 5:30 PM or 9:00 PM. Would either of those times be suitable for you?",
            },
          },
          {
            speaker: "you",
            textEn: "9 PM is a bit late for us. How about tomorrow at 7 PM?",
            textZh: "9点对我们太晚了。明天晚上7点呢？",
            casualVersion: "9's a little late. What about tomorrow at 7?",
            formalityVariants: {
              casual: "9's a little late. What about tomorrow at 7?",
              standard: "9 PM is a bit late for us. How about tomorrow at 7 PM?",
              formal:
                "9 PM would be somewhat inconvenient for our party. Do you have any availability tomorrow evening at 7 PM?",
            },
          },
          {
            speaker: "them",
            role: "接线",
            textEn:
              "Let me check tomorrow... Yes, I have a table for six available at 7 PM tomorrow. Shall I book that?",
            textZh: "让我看看明天……好的，明天7点有六人桌。要订吗？",
            alternativeExpressions: [
              {
                textEn: "Tomorrow at 7 works! Want me to go ahead and reserve it?",
                textZh: "明天7点可以！要我直接帮您订吗？",
                actionHint: "确认订位并报名字",
                frequency: "common",
              },
              {
                textEn: "Good news — tomorrow's wide open at 7. Should I lock that in?",
                textZh: "好消息——明天7点完全没问题。帮您锁定吗？",
                actionHint: "确认并告知姓名",
                frequency: "occasional",
              },
            ],
            casualVersion: "Lemme check tomorrow... Yep, got a table for six, 7 PM tomorrow. Wanna book it?",
            formalityVariants: {
              casual: "Lemme check tomorrow... Yep, got a table for six, 7 PM tomorrow. Wanna book it?",
              standard:
                "Let me check tomorrow... Yes, I have a table for six available at 7 PM tomorrow. Shall I book that?",
              formal:
                "One moment while I check tomorrow's availability... Yes, we do have a table for six available at 7 PM tomorrow evening. Would you like me to confirm this reservation for you?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please. Under the name Wang.",
            textZh: "好的，订吧。名字是王。",
            casualVersion: "Yeah, sounds good. Name's Wang.",
            commonMistake: {
              wrong: "Yes, please. Name Wang.",
              correct: "Yes, please. Under the name Wang.",
              explanation: "直接说“Name Wang”不自然，应说“under the name Wang”或“The name is Wang”。",
            },
            formalityVariants: {
              casual: "Yeah, sounds good. Name's Wang.",
              standard: "Yes, please. Under the name Wang.",
              formal: "Yes, that would be perfect. Please make the reservation under the name Wang.",
            },
          },
          {
            speaker: "them",
            role: "接线",
            textEn:
              "Booked! Table for six, tomorrow at 7 PM, under Wang. We'll hold the table for 15 minutes past your reservation time. See you then!",
            textZh: "订好了！六人桌，明天7点，王先生。我们会保留预订后15分钟。明天见！",
            keyPhrases: [
              { en: "hold the table", zh: "保留位置" },
              { en: "15 minutes past", zh: "预订时间后15分钟" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "All set! Six people, 7 PM tomorrow under Wang. Just a heads-up, we hold tables for 15 minutes.",
                textZh: "搞定！六位，明天7点，王先生。提醒一下，我们保留15分钟。",
                actionHint: "记下时间准时赴约",
                frequency: "common",
              },
              {
                textEn: "You're all booked! Please try to arrive on time — we release the table after 15 minutes.",
                textZh: "已经订好了！请尽量准时——超过15分钟我们会释放桌位。",
                actionHint: "注意准时到达",
                frequency: "occasional",
              },
            ],
            casualVersion: "All set! Six people, tomorrow at 7, for Wang. We'll hold it for 15 mins after. See ya!",
            culturalNote: "美国餐厅对预订迟到有容忍时间，一般是10-15分钟。",
            formalityVariants: {
              casual: "All set! Six people, tomorrow at 7, for Wang. We'll hold it for 15 mins after. See ya!",
              standard:
                "Booked! Table for six, tomorrow at 7 PM, under Wang. We'll hold the table for 15 minutes past your reservation time. See you then!",
              formal:
                "The reservation is confirmed. A table for six guests, for tomorrow evening at 7 PM, under the name Wang. Kindly note that we will hold your table for 15 minutes past your scheduled reservation time. We look forward to seeing you then.",
            },
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
            commonMistake: {
              wrong: "I am The Garden Restaurant.",
              correct: "The Garden Restaurant, how can I help you?",
              explanation: "接电话时直接报公司名，不用说“我是”。",
            },
            casualVersion: "Garden Restaurant, how can I help?",
            formalityVariants: {
              casual: "Garden Restaurant, how can I help?",
              standard: "The Garden Restaurant, how can I help you?",
              formal: "Good morning/afternoon/evening, The Garden Restaurant, this is [Name] speaking. How may I be of assistance?",
            },
            alternativeExpressions: [
              {
                textEn: "Good evening, this is the Garden. How may I assist you?",
                textZh: "晚上好，这里是花园餐厅。有什么能帮您的？",
                actionHint: "说明你有预订要修改",
                frequency: "common",
              },
              {
                textEn: "Garden Restaurant speaking. What can I do for you?",
                textZh: "花园餐厅，请讲。有什么需要？",
                actionHint: "直接说要改预订",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Hi, I have a reservation for tonight and I need to make a change.",
            textZh: "你好，我订了今晚的位，需要改一下。",
            casualVersion: "Hey, I got a reservation for tonight, need to change somethin'.",
            commonMistake: {
              wrong: "Hi, I have a reservation for tonight and I need to change.",
              correct: "Hi, I have a reservation for tonight and I need to make a change.",
              explanation: "“change” 作动词时可以直接用，作名词时需搭配 “make a change”。",
            },
            formalityVariants: {
              casual: "Hey, I got a reservation for tonight, need to change somethin'.",
              standard: "Hi, I have a reservation for tonight and I need to make a change.",
              formal: "Good evening, I have an existing reservation for this evening and would like to request an amendment.",
            },
          },
          {
            speaker: "them",
            role: "接线",
            textEn: "Sure, what's the name on the reservation?",
            textZh: "好的，预订的名字是？",
            casualVersion: "Okay, what name's it under?",
            formalityVariants: {
              casual: "Okay, what name's it under?",
              standard: "Sure, what's the name on the reservation?",
              formal: "Certainly, may I have the name under which the reservation was made?",
            },
            alternativeExpressions: [
              {
                textEn: "Of course. Can I have the name and time of your booking?",
                textZh: "当然。请问预订的名字和时间？",
                actionHint: "说出名字和原来的预订时间",
                frequency: "common",
              },
              {
                textEn: "No problem. What name is it under?",
                textZh: "没问题。订在谁的名下？",
                actionHint: "报上预订时用的名字",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Wang. It's for 7 PM, four people. I need to change it to six people, and push the time to 7:30 if possible.",
            textZh: "王。7点，四个人。我需要改成六个人，时间推迟到7:30可以吗？",
            casualVersion: "Wang. It's 7 PM, four people. Gotta change it to six, and push the time to 7:30 if we can.",
            commonMistake: {
              wrong: "Wang. It's 7 PM, four people. I need to change to six people.",
              correct: "Wang. It's for 7 PM, four people. I need to change it to six people.",
              explanation: "改变预订（it）的人数时，需用 “change it to”，更清晰。",
            },
            formalityVariants: {
              casual: "Wang. It's 7 PM, four people. Gotta change it to six, and push the time to 7:30 if we can.",
              standard: "Wang. It's for 7 PM, four people. I need to change it to six people, and push the time to 7:30 if possible.",
              formal: "The reservation is under the name Wang. It is currently scheduled for 7 PM for four individuals. I would like to modify it to six people and potentially extend the time to 7:30 PM, if that is feasible.",
            },
          },
          {
            speaker: "them",
            role: "接线",
            textEn:
              "Let me check... I can do 7:30 for six people, but I'd need to move you to a different table. Instead of the window seat, it would be in the main dining area. Is that okay?",
            textZh: "让我看看……7:30六个人可以，但需要换到另一张桌子。不是靠窗的了，会在主用餐区。可以吗？",
            casualVersion: "Lemme check... Yeah, can do 7:30 for six, but I'd have to switch your table. No window seat, it'd be in the main dining area. That cool?",
            formalityVariants: {
              casual: "Lemme check... Yeah, can do 7:30 for six, but I'd have to switch your table. No window seat, it'd be in the main dining area. That cool?",
              standard: "Let me check... I can do 7:30 for six people, but I'd need to move you to a different table. Instead of the window seat, it would be in the main dining area. Is that okay?",
              formal: "Allow me to verify... Yes, I can accommodate 7:30 PM for six guests; however, it would necessitate relocating you to an alternative table. This would mean a table in the main dining area, rather than a window seat. Would that be acceptable?",
            },
            keyPhrases: [
              { en: "move you to a different table", zh: "换桌子" },
              { en: "main dining area", zh: "主用餐区" },
            ],
            alternativeExpressions: [
              {
                textEn: "I can fit six at 7:30, but it'd be in the back section instead of by the window. That okay?",
                textZh: "7:30六个人可以，但得坐后面那区，不是靠窗了。行吗？",
                actionHint: "接受或拒绝换位",
                frequency: "common",
              },
              {
                textEn: "7:30 works for six, though I'll need to switch your table to the patio. Is that all right?",
                textZh: "7:30六位可以，不过得换到露台。可以吗？",
                actionHint: "确认是否接受新位置",
                frequency: "occasional",
              },
            ],
            isBranchPoint: true,
          },
          {
            speaker: "you",
            textEn: "That's fine. Thank you for accommodating the change.",
            textZh: "没问题。谢谢帮我改。",
            casualVersion: "No worries. Thanks for making it work.",
            commonMistake: {
              wrong: "That's fine. Thank you for change.",
              correct: "That's fine. Thank you for accommodating the change.",
              explanation: "感谢别人帮忙解决问题或做出调整，要用 “accommodating the change” 或 “making it work”。",
            },
            formalityVariants: {
              casual: "No worries. Thanks for making it work.",
              standard: "That's fine. Thank you for accommodating the change.",
              formal: "That is perfectly acceptable. I appreciate your flexibility in facilitating this modification.",
            },
          },
          {
            speaker: "them",
            role: "接线",
            textEn: "No problem at all. Updated to six guests at 7:30 PM. See you tonight!",
            textZh: "没问题。已更新为6位客人，7:30。今晚见！",
            commonMistake: {
              wrong: "No question.",
              correct: "No problem at all.",
              explanation: "“No question”是中式英语，表达“没问题”应说\"No problem\"或\"No worries\"。",
            },
            casualVersion: "No problem. Got you down for six at 7:30. See ya tonight!",
            formalityVariants: {
              casual: "No problem. Got you down for six at 7:30. See ya tonight!",
              standard: "No problem at all. Updated to six guests at 7:30 PM. See you tonight!",
              formal: "It's my pleasure. Your reservation has been successfully updated to six guests at 7:30 PM. We look forward to welcoming you this evening.",
            },
            alternativeExpressions: [
              {
                textEn: "Done! Six people at 7:30, main dining room. We'll see you then!",
                textZh: "改好了！六位7:30，主用餐区。到时候见！",
                actionHint: "道谢并确认",
                frequency: "common",
              },
              {
                textEn: "All updated. Your new reservation is six at 7:30. Enjoy your evening!",
                textZh: "全部更新了。新预订是六位7:30。祝今晚愉快！",
                actionHint: "简单道谢",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 到店点餐 ====================
  {
    id: "restaurant-order",
    tags: ["order", "点餐", "menu", "菜单"],
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
            culturalNote: "在美国餐厅，直接说有预订和姓名即可，无需过多寒暄。Under [Name] 是常见的表达方式。",
            casualVersion: "Hey, got a res for four, under Wang.",
            commonMistake: {
              wrong: "We have reservation for four under Wang.",
              correct: "We have a reservation for four under Wang.",
              explanation: "中文不说“一个预订”，但英文需要冠词a。",
            },
            formalityVariants: {
              casual: "Hey, reservation for four, Wang.",
              standard: "Hi, we have a reservation for four under Wang.",
              formal: "Good evening, we have a reservation for a party of four, under the name Wang.",
            },
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
              {
                textEn: "Hi! Reservation for Wang? Follow me, please.",
                textZh: "你好！王先生的预订？请跟我来。",
                actionHint: "跟着领位走就好",
                frequency: "common",
              },
              {
                textEn: "Welcome back! Your table is ready. Let me show you to your seats.",
                textZh: "欢迎光临！您的桌子准备好了。我带您过去。",
                actionHint: "跟着走入座即可",
                frequency: "occasional",
              },
            ],
            casualVersion: "Welcome! Yep, got it. Follow me. Here's your menus.",
            formalityVariants: {
              casual: "Welcome! Yep, got your reservation. Right this way. Here's your menus.",
              standard: "Welcome! Yes, I see your reservation. Right this way, please. Here are your menus.",
              formal:
                "Welcome! Indeed, your reservation is confirmed. If you'll follow me, please. Here are your menus for your perusal.",
            },
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
              {
                textEn: "Hi there! Can I get you guys something to drink?",
                textZh: "你们好！先来点喝的吗？",
                actionHint: "点饮品",
                frequency: "common",
              },
              {
                textEn: "Evening! Would you like to start with drinks or go straight to ordering?",
                textZh: "晚上好！先点饮料还是直接点菜？",
                actionHint: "决定先喝还是先点菜",
                frequency: "occasional",
              },
            ],
            casualVersion: "Evening! Can I get you started with drinks?",
            formalityVariants: {
              casual: "Evening! Drinks to start?",
              standard: "Good evening! Can I start you off with something to drink?",
              formal: "Good evening! May I offer you something to drink to begin your experience?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I'll have a glass of red wine, and water for the table, please.",
            textZh: "好的，我要一杯红酒，再给桌上来一壶水。",
            culturalNote: "点餐时用 'I'd like' 比 'I want' 更礼貌，也更自然。Pitcher of water是指一大壶水。",
            casualVersion: "Yep, glass of red, and water for the table.",
            commonMistake: {
              wrong: "I want a glass of red wine, and water for the table.",
              correct: "I'll have a glass of red wine, and water for the table, please.",
              explanation: "用I want不礼貌，I'll have或I'd like更客气。",
            },
            formalityVariants: {
              casual: "Yeah, red wine for me, and some water for everyone.",
              standard: "Yes, I'll have a glass of red wine, and water for the table, please.",
              formal:
                "Certainly, I would appreciate a glass of red wine, and still water for the table, if you please.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Still or sparkling water?",
            textZh: "纯净水还是气泡水？",
            commonMistake: {
              wrong: "Water",
              correct: "Still water / Tap water",
              explanation: "直接说water服务员会问是哪种水，不如直接说清楚",
            },
            keyPhrases: [
              { en: "still", zh: "纯净水/不含气" },
              { en: "sparkling", zh: "气泡水/含气" },
            ],
            alternativeExpressions: [
              {
                textEn: "Flat or bubbly?",
                textZh: "不带气的还是带气的？",
                actionHint: "选一种水或要免费自来水",
                frequency: "common",
              },
              {
                textEn: "Would you like bottled water, or is tap water fine?",
                textZh: "要瓶装水还是自来水就行？",
                actionHint: "tap water 是免费的",
                frequency: "occasional",
              },
            ],
            culturalNote:
              "在国外餐厅，水通常分 still（不含气）和 sparkling（含气），且可能收费。可以要 tap water（自来水）免费。",
            casualVersion: "Still or sparkling?",
            formalityVariants: {
              casual: "Still or sparkling?",
              standard: "Still or sparkling water?",
              formal: "Would you prefer still or sparkling water?",
            },
          },
          {
            speaker: "you",
            textEn: "Just tap water is fine, thank you.",
            textZh: "自来水就行，谢谢。",
            culturalNote: "在美国，餐厅免费提供的水通常是自来水（tap water），可以直接饮用，无需额外付费。",
            casualVersion: "Just tap water, thanks.",
            commonMistake: {
              wrong: "I want tap water.",
              correct: "Just tap water is fine, thank you.",
              explanation: '直接说I want不礼貌，用"just...is fine"更客气。',
            },
            formalityVariants: {
              casual: "Tap water's good, thanks.",
              standard: "Just tap water is fine, thank you.",
              formal: "Tap water would be perfectly acceptable, thank you.",
            },
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
              {
                textEn: "Take your time, or are you all set to order?",
                textZh: "不急慢慢看，还是可以点了？",
                actionHint: "准备好就直接点",
                frequency: "common",
              },
              {
                textEn: "Have you had a chance to look at the menu?",
                textZh: "看过菜单了吗？",
                actionHint: "告诉对方准备好了或再看看",
                frequency: "common",
              },
            ],
            casualVersion: "Ready to order, or need a few more minutes?",
            formalityVariants: {
              casual: "Ready to order, or need a sec?",
              standard: "Are you ready to order, or do you need a few more minutes?",
              formal: "Might I inquire if you are ready to place your order, or would you prefer a few more moments?",
            },
          },
          {
            speaker: "you",
            textEn: "I think we're ready. What do you recommend?",
            textZh: "我们可以点了。你推荐什么？",
            culturalNote: "在美国餐厅，服务员推荐的菜通常是餐厅特色或他们个人喜欢的，并非强制。Asking 'What do you recomm",
            casualVersion: "What's good here?",
            commonMistake: {
              wrong: "We are ready. What do you recommend?",
              correct: "I think we're ready. What do you recommend?",
              explanation: "“I think”让语气更柔和、自然。",
            },
            formalityVariants: {
              casual: "Yeah, ready. What's good?",
              standard: "I think we're ready. What do you recommend?",
              formal: "Yes, I believe we are prepared to order. Could you perhaps offer some recommendations?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Our grilled salmon is very popular, and tonight's special is a rack of lamb with rosemary. Both are excellent.",
            textZh: "我们的烤三文鱼很受欢迎，今晚的特色菜是迷迭香烤羊排。都非常好。",
            keyPhrases: [
              { en: "popular", zh: "受欢迎" },
              { en: "tonight's special", zh: "今晚特色菜" },
              { en: "rack of lamb", zh: "烤羊排" },
              { en: "excellent", zh: "非常好" },
            ],
            alternativeExpressions: [
              {
                textEn: "The salmon is a crowd favorite, and tonight we've got a special lamb dish that's really good.",
                textZh: "三文鱼特别受欢迎，今晚还有一道很棒的特色羊肉。",
                actionHint: "可以选推荐的或自己看菜单",
                frequency: "common",
              },
              {
                textEn: "I'd go with the salmon — it's what most people order. The lamb special is also worth trying.",
                textZh: "我推荐三文鱼——大多数人都点这个。羊排特供也值得试。",
                actionHint: "根据推荐做选择",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Grilled salmon's popular, and tonight's special's rack of lamb with rosemary. Both are great.",
            formalityVariants: {
              casual: "Our salmon's pretty popular, and we've got a lamb special tonight. Both are really good.",
              standard:
                "Our grilled salmon is very popular, and tonight's special is a rack of lamb with rosemary. Both are excellent.",
              formal:
                "Our grilled salmon is a consistently popular choice, and tonight's featured special is a delectable rack of lamb with rosemary. Both dishes are prepared to an exceptional standard.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll have the grilled salmon, please. And could I get the Caesar salad as a starter?",
            textZh: "我要烤三文鱼。还要一份凯撒沙拉做前菜。",
            culturalNote: '"I\'ll have..." 是标准点餐句式，比 "I want..." 更礼貌。starter = appetizer = 前菜。',
            casualVersion: "I'll do the grilled salmon. And can I get the Caesar salad for a starter?",
            commonMistake: {
              wrong: "I want grilled salmon. I want Caesar salad as a starter.",
              correct: "I'll have the grilled salmon, please. And could I get the Caesar salad as a starter?",
              explanation: "I want听起来不礼貌，用I'll have或could I get更客气。",
            },
            formalityVariants: {
              casual: "I'll take the salmon. And a Caesar salad for an appetizer.",
              standard: "I'll have the grilled salmon, please. And could I get the Caesar salad as a starter?",
              formal: "I will select the grilled salmon, please. And may I request the Caesar salad as an appetizer?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "The salmon comes with your choice of sides — mashed potatoes, roasted vegetables, or rice. Which would you like?",
            textZh: "三文鱼可以选配菜——土豆泥、烤蔬菜或米饭。您要哪个？",
            keyPhrases: [
              { en: "choice of sides", zh: "可选配菜" },
              { en: "mashed potatoes", zh: "土豆泥" },
              { en: "roasted vegetables", zh: "烤蔬菜" },
            ],
            alternativeExpressions: [
              {
                textEn: "What side would you like with the salmon? We have mashed potatoes, veggies, or rice.",
                textZh: "三文鱼配什么？土豆泥、蔬菜还是米饭？",
                actionHint: "选一种配菜",
                frequency: "common",
              },
              {
                textEn: "For your side, you can pick from potatoes, roasted veggies, or rice.",
                textZh: "配菜可以选土豆、烤蔬菜或米饭。",
                actionHint: "告诉服务员你要哪个",
                frequency: "common",
              },
            ],
            casualVersion:
              "Salmon comes with your choice of sides — mashed potatoes, roasted veggies, or rice. Which you want?",
            formalityVariants: {
              casual: "Salmon comes with a side — mashed, roasted veggies, or rice. What'll it be?",
              standard:
                "The salmon comes with your choice of sides — mashed potatoes, roasted vegetables, or rice. Which would you like?",
              formal:
                "The salmon entrée includes your selection of a side dish — either mashed potatoes, roasted seasonal vegetables, or rice. Which option would you prefer?",
            },
          },
          {
            speaker: "you",
            textEn: "Roasted vegetables, please.",
            textZh: "烤蔬菜吧。",
            casualVersion: "Roasted veggies, please.",
            commonMistake: {
              wrong: "I want roasted vegetables.",
              correct: "Roasted vegetables, please.",
              explanation: '直接说I want不礼貌，用"..., please"更客气。',
            },
            formalityVariants: {
              casual: "Roasted veggies.",
              standard: "Roasted vegetables, please.",
              formal: "I will have the roasted vegetables, if you please.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "And how would you like your salmon? We can do medium or well-done.",
            textZh: "三文鱼要几分熟？可以做五分熟或全熟。",
            commonMistake: {
              wrong: "Full cooked",
              correct: "Well-done",
              explanation: "Full cooked 是中式英语，熟度应使用 well-done",
            },
            keyPhrases: [
              { en: "how would you like", zh: "要几分熟" },
              { en: "medium", zh: "五分熟" },
              { en: "well-done", zh: "全熟" },
            ],
            alternativeExpressions: [
              {
                textEn: "How do you want your salmon cooked?",
                textZh: "三文鱼要几成熟？",
                actionHint: "说出想要的熟度",
                frequency: "common",
              },
              {
                textEn: "Would you prefer the salmon pink in the middle or cooked all the way through?",
                textZh: "三文鱼中间要嫩的还是全熟？",
                actionHint: "选 medium 或 well-done",
                frequency: "occasional",
              },
            ],
            casualVersion: "How do you want your salmon? We can do medium or well-done.",
            culturalNote: "点牛排、三文鱼等西餐时常会问熟度，提前了解'rare/medium rare/medium/medium well/we",
            formalityVariants: {
              casual: "How d'you want the salmon? Medium or well?",
              standard: "And how would you like your salmon? We can do medium or well-done.",
              formal: "And how would you prefer your salmon prepared? We offer options of medium or well-done.",
            },
          },
          {
            speaker: "you",
            textEn: "Medium, please.",
            textZh: "五分熟。",
            casualVersion: "Medium, please.",
            commonMistake: {
              wrong: "I want medium.",
              correct: "Medium, please.",
              explanation: '直接说I want不礼貌，用"..., please"更客气。',
            },
            formalityVariants: {
              casual: "Medium.",
              standard: "Medium, please.",
              formal: "Medium, if you please.",
            },
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
            textEn: 'Excuse me, what exactly is the "Surf and Turf"? I\'m not sure what that is.',
            textZh: '请问，"Surf and Turf" 到底是什么？我不太确定。',
            culturalNote: "Surf and turf 是一种常见的西餐组合，通常指牛排和海鲜，尤其是龙虾。",
            casualVersion: "Excuse me, what's the [dish name]?",
            commonMistake: {
              wrong: "What is [dish name]?",
              correct: "What exactly is [dish name]?",
              explanation: '直接问“What is...”听起来不礼貌，"what exactly is..."更委婉。',
            },
            formalityVariants: {
              casual: "Hey, what's the [dish name]?",
              standard: "Excuse me, what exactly is the [dish name]?",
              formal: "Pardon me, could you please elaborate on what the [dish name] entails?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Great question! It's a combination of seafood and steak — in our case, a grilled lobster tail paired with a filet mignon. It's one of our most popular dishes.",
            textZh: "好问题！是海鲜和牛排的组合——我们的是烤龙虾尾配菲力牛排。这是我们最受欢迎的菜之一。",
            keyPhrases: [
              { en: "surf and turf", zh: "海陆双拼" },
              { en: "lobster tail", zh: "龙虾尾" },
              { en: "filet mignon", zh: "菲力牛排" },
              { en: "paired with", zh: "搭配" },
            ],
            alternativeExpressions: [
              {
                textEn: "Oh, that's our sea-and-land combo — lobster tail with a filet mignon. Super popular!",
                textZh: "那是我们的海陆拼盘——龙虾尾配菲力牛排。特别受欢迎！",
                actionHint: "决定要不要点这道菜",
                frequency: "common",
              },
              {
                textEn: "It's basically steak and seafood together. Ours is lobster and filet. You'll love it!",
                textZh: "就是牛排配海鲜。我们的是龙虾和菲力。你肯定喜欢！",
                actionHint: "感兴趣可以追问细节",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Good question! It's surf 'n' turf, basically. Lobster tail with filet mignon. Super popular.",
            formalityVariants: {
              casual: "Good question! It's surf 'n' turf, lobster tail with a filet mignon. One of our most popular.",
              standard:
                "Great question! It's a combination of seafood and steak — in our case, a grilled lobster tail paired with a filet mignon. It's one of our most popular dishes.",
              formal:
                "That's an excellent inquiry. It's a culinary combination of seafood and steak, specifically featuring a grilled lobster tail accompanied by a perfectly prepared filet mignon. It is, in fact, one of our most frequently requested and highly regarded offerings.",
            },
          },
          {
            speaker: "you",
            textEn: "That sounds good, but how big is the portion? I don't want to order too much.",
            textZh: "听起来不错，但分量大吗？我不想点太多。",
            culturalNote: "询问分量（portion size）是很常见的，因为西方餐点份量通常较大，而中国人常有节约的习惯。不用担心冒犯服务员。",
            casualVersion: "Sounds good, but how big's the portion? Don't wanna order too much.",
            commonMistake: {
              wrong: "Is the portion big?",
              correct: "How big is the portion?",
              explanation: "直接问“Is it big?”不够自然，用“How big is the portion?”更地道。",
            },
            formalityVariants: {
              casual: "Sounds good, but how big's the portion? Don't wanna over-order.",
              standard: "That sounds good, but how big is the portion? I don't want to order too much.",
              formal:
                "That sounds quite appealing, but I'm curious about the portion size. I'd prefer not to over-order.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "It's quite generous — enough for one person as a main course. If you're having a starter as well, you probably won't need anything else.",
            textZh: "分量挺大的——一个人做主菜足够了。如果还点了前菜，应该就不需要别的了。",
            keyPhrases: [
              { en: "generous", zh: "分量大" },
              { en: "main course", zh: "主菜" },
              { en: "starter", zh: "前菜" },
            ],
            alternativeExpressions: [
              {
                textEn: "It's a big dish — you won't need much else if you order a starter too.",
                textZh: "分量很足——如果再点个前菜基本就够了。",
                actionHint: "根据自己食量决定要不要点前菜",
                frequency: "common",
              },
              {
                textEn: "Pretty filling! Most people just have that as their main and they're good.",
                textZh: "挺饱的！大多数人就点这个当主菜就够了。",
                actionHint: "参考建议决定搭配",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "It's pretty big – enough for one person as an entrée. If you get a starter, you probably won't need more.",
            formalityVariants: {
              casual: "It's pretty generous – enough for one person as a main. If you get an appetizer, you'll be set.",
              standard:
                "It's quite generous — enough for one person as a main course. If you're having a starter as well, you probably won't need anything else.",
              formal:
                "It is a rather generous portion, certainly sufficient for one individual as a main course. Should you also be ordering an appetizer, it is unlikely you would require any additional dishes.",
            },
          },
          {
            speaker: "you",
            textEn: "Is this dish spicy at all?",
            textZh: "这道菜辣吗？",
            culturalNote: "许多中国游客不习惯西餐的辛辣程度，所以在点餐前询问菜品的辣度是很常见的。在美国，问菜品是否辣很正常。",
            casualVersion: "Is it spicy?",
            commonMistake: {
              wrong: "Does this dish have spicy?",
              correct: "Is this dish spicy?",
              explanation: "询问“是否辣”用“Is it spicy?”更自然，避免语法错误。",
            },
            formalityVariants: {
              casual: "Is it spicy?",
              standard: "Is this dish spicy at all?",
              formal: "Could you please inform me if this dish contains any discernible spice?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Not at all. It's seasoned with garlic, butter, and herbs. But I can ask the chef to add some chili if you'd like it spicy.",
            textZh: "完全不辣。用的是大蒜、黄油和香草调味。但如果您想要辣的，我可以让厨师加点辣椒。",
            keyPhrases: [
              { en: "spicy", zh: "辣" },
              { en: "seasoned with", zh: "用……调味" },
              { en: "garlic", zh: "大蒜" },
              { en: "herbs", zh: "香草" },
            ],
            alternativeExpressions: [
              {
                textEn: "Not spicy at all. It's buttery and herby. But we can spice it up if you'd like.",
                textZh: "完全不辣。黄油和香草味的。不过如果想要辣的我们可以加。",
                actionHint: "决定是否加辣",
                frequency: "common",
              },
              {
                textEn: "Nope, it's pretty mild. Garlic and herb flavor mainly. Want me to ask the chef to kick it up?",
                textZh: "不辣的，主要是蒜香和香草味。要我让厨师加点辣吗？",
                actionHint: "告诉服务员你的偏好",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Nah, not at all. It's got garlic, butter, and herbs. But I can totally ask the chef to add some chili if you want it spicy.",
            formalityVariants: {
              casual:
                "Nope, not spicy. Just garlic, butter, herbs. But I can ask the chef to kick it up for ya if you want.",
              standard:
                "Not at all. It's seasoned with garlic, butter, and herbs. But I can ask the chef to add some chili if you'd like it spicy.",
              formal:
                "No, it is not spicy in the least. Its flavor profile is derived from garlic, butter, and various herbs. However, should you prefer a spicier rendition, I would be pleased to request the chef to incorporate some chili.",
            },
          },
          {
            speaker: "you",
            textEn: "No, that's fine. I'll go with the Surf and Turf, please.",
            textZh: "不用辣，就这样吧。我要这个海陆双拼。",
            casualVersion: "Nah, that's fine. I'll just get the Surf and Turf.",
            commonMistake: {
              wrong: "No, I don't want spicy.",
              correct: "No, that's fine.",
              explanation: "直接说“I don't want spicy”不够礼貌，用“that's fine”更委婉地表达了不需要加辣。",
            },
            formalityVariants: {
              casual: "Nah, that's fine. I'll just get the Surf and Turf.",
              standard: "No, that's fine. I'll go with the Surf and Turf, please.",
              formal: "No, that will be perfectly acceptable as is. I would like to order the Surf and Turf, please.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 过敏/忌口 ====================
  {
    id: "restaurant-allergy",
    tags: ["allergy", "过敏", "dietary", "饮食"],
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
            textEn:
              "Before we order, I should mention that I'm severely allergic to peanuts and tree nuts. Could you let the kitchen know?",
            textZh: "点菜之前我要说一下，我对花生和坚果严重过敏。能告诉厨房吗？",
            culturalNote:
              '在国外一定要主动告知过敏信息，餐厅非常重视。"severely allergic" 比 "allergic" 更能引起重视。',
            casualVersion:
              "Hey, just wanna say, I'm super allergic to peanuts and tree nuts. Can you tell the kitchen?",
            commonMistake: {
              wrong: "I am severely allergic to peanuts. Can you tell kitchen?",
              correct: "I'm severely allergic to peanuts and tree nuts. Could you let the kitchen know?",
              explanation:
                "直接说“tell kitchen”不够礼貌，用“let the kitchen know”或“could you tell the kitchen”更自然。",
            },
            formalityVariants: {
              casual: "Heads up, I'm really allergic to peanuts/tree nuts. Can you let the kitchen know?",
              standard:
                "Before we order, I should mention that I'm severely allergic to peanuts and tree nuts. Could you let the kitchen know?",
              formal:
                "Excuse me, before placing my order, I must inform you that I have a severe allergy to peanuts and tree nuts. Would you be so kind as to relay this information to the kitchen staff?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Absolutely, I'll flag that immediately. Let me mark it on your order. Are there any other allergies we should know about?",
            textZh: "当然，我马上标注。让我在您的单子上注明。还有其他过敏的吗？",
            keyPhrases: [
              { en: "flag", zh: "标注" },
              { en: "mark it on your order", zh: "在单子上注明" },
              { en: "any other allergies", zh: "其他过敏" },
            ],
            alternativeExpressions: [
              {
                textEn: "Thanks for telling me. I'll make a note right away. Anything else allergy-wise?",
                textZh: "谢谢告诉我。我马上备注。还有其他过敏的吗？",
                actionHint: "如有其他过敏一起说",
                frequency: "common",
              },
              {
                textEn: "Got it, I'll alert the kitchen immediately. Do you have any other food allergies?",
                textZh: "收到，我立刻通知厨房。还有其他食物过敏吗？",
                actionHint: "一次说完所有过敏信息",
                frequency: "common",
              },
            ],
            casualVersion: "Yep, I'll make a note of that right away. Any other allergies?",
            formalityVariants: {
              casual: "Yep, I'll just jot that down. Any other allergies?",
              standard:
                "Absolutely, I'll flag that immediately. Let me mark it on your order. Are there any other allergies we should know about?",
              formal:
                "Certainly, I will make a note of that immediately and inform the kitchen. Are there any other dietary restrictions or allergies we should be aware of?",
            },
          },
          {
            speaker: "you",
            textEn: "That's all. Which dishes on the menu are nut-free?",
            textZh: "就这些。菜单上哪些菜不含坚果？",
            casualVersion: "That's it. What on the menu is nut-free?",
            commonMistake: {
              wrong: "That's all. Which dishes don't have nuts?",
              correct: "That's all. Which dishes on the menu are nut-free?",
              explanation: "“nut-free”是更地道专业的说法，直接问“don't have nuts”听起来没那么自然。",
            },
            formalityVariants: {
              casual: "Nope, just those. Which stuff's nut-free?",
              standard: "That's all. Which dishes on the menu are nut-free?",
              formal:
                "That covers it, thank you. Could you please advise which dishes on your menu are free from nuts?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "The grilled chicken, the pasta, and the steak are all nut-free. I'd avoid the Asian salad — it has crushed peanuts in the dressing. Let me get our allergy menu — it has all the allergen information listed.",
            textZh:
              "烤鸡、意面和牛排都不含坚果。亚洲沙拉要避免——酱汁里有碎花生。我去拿我们的过敏菜单——上面列了所有过敏原信息。",
            keyPhrases: [
              { en: "nut-free", zh: "不含坚果" },
              { en: "avoid", zh: "避免" },
              { en: "crushed peanuts", zh: "碎花生" },
              { en: "dressing", zh: "沙拉酱" },
              { en: "allergy menu", zh: "过敏菜单" },
              { en: "allergen information", zh: "过敏原信息" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The chicken, pasta, and steak are all safe. Stay away from the Asian salad though — it has peanuts. I'll grab our allergen chart.",
                textZh: "鸡肉、意面和牛排都没问题。不过别点亚洲沙拉——有花生。我去拿过敏原表。",
                actionHint: "从安全的菜品里选",
                frequency: "common",
              },
              {
                textEn:
                  "A few dishes are completely nut-free. Let me bring you our special allergy menu so you can check everything.",
                textZh: "有几道菜完全不含坚果。我拿过敏专用菜单给您看。",
                actionHint: "等过敏菜单再做选择",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "The grilled chicken, pasta, and steak are all good. Avoid the Asian salad — it's got crushed peanuts in the dressing. Lemme grab our allergy menu, it lists everything.",
            formalityVariants: {
              casual:
                "Chicken, pasta, steak—all good. Asian salad's got peanuts. I'll get the allergy menu; it's all there.",
              standard:
                "The grilled chicken, the pasta, and the steak are all nut-free. I'd avoid the Asian salad — it has crushed peanuts in the dressing. Let me get our allergy menu — it has all the allergen information listed.",
              formal:
                "The grilled chicken, pasta, and steak are confirmed to be nut-free. However, I must caution against the Asian salad, as its dressing contains crushed peanuts. Allow me to retrieve our comprehensive allergy menu, which details all allergen information for your reference.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you for being so thorough. I'll have the grilled chicken.",
            textZh: "谢谢你这么仔细。那我要烤鸡。",
            casualVersion: "Thanks for being so thorough. I'll get the grilled chicken.",
            commonMistake: {
              wrong: "Thank you very thorough. I want the grilled chicken.",
              correct: "Thank you for being so thorough. I'll have the grilled chicken.",
              explanation:
                "“Thank you very thorough”不完整，应为“Thank you for being so thorough”。点菜时用“I'll have/get”更礼貌自然。",
            },
            formalityVariants: {
              casual: "Appreciate you checking. I'll take the chicken.",
              standard: "Thank you for being so thorough. I'll have the grilled chicken.",
              formal: "I truly appreciate your thoroughness. I believe I will opt for the grilled chicken.",
            },
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
            casualVersion: "I'm vegetarian. Got any veggie options?",
            commonMistake: {
              wrong: "I am vegetarian. Have you vegetarian options?",
              correct: "I'm vegetarian. Do you have any vegetarian options?",
              explanation: "“Have you...?”不是地道的问句，应使用“Do you have...?”。加上“any”更自然。",
            },
            formalityVariants: {
              casual: "I'm veggie. What vegetarian dishes do you have?",
              standard: "I'm vegetarian. Do you have any vegetarian options?",
              formal: "I am vegetarian. Could you please inform me of your vegetarian selections?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Yes, we have several! The mushroom risotto, the vegetable curry, and the grilled halloumi salad are all vegetarian. Would you like me to check which ones are also vegan?",
            textZh: "有的，有好几个！蘑菇烩饭、蔬菜咖喱和烤哈罗米芝士沙拉都是素食。要我查查哪些也是纯素（无蛋奶）吗？",
            commonMistake: {
              wrong: "Do you want me to check which ones are also vegan?",
              correct: "Would you like me to check which ones are also vegan?",
              explanation: "Do you want... 在美国常听起来像直接命令，不如 Would you like... 礼貌",
            },
            keyPhrases: [
              { en: "vegetarian options", zh: "素食选择" },
              { en: "mushroom risotto", zh: "蘑菇烩饭" },
              { en: "vegan", zh: "纯素/无蛋奶" },
              { en: "halloumi", zh: "哈罗米芝士" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure! We've got a few veggie dishes. The risotto and the curry are both great. Need anything vegan-friendly?",
                textZh: "当然！我们有几道素菜。烩饭和咖喱都不错。需要纯素的吗？",
                actionHint: "说明是否需要纯素",
                frequency: "common",
              },
              {
                textEn: "Absolutely! The menu items with a little V are all vegetarian. I can point them out.",
                textZh: "当然！菜单上标了小V的都是素食。我可以帮您指出来。",
                actionHint: "看菜单上的素食标记",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep, a few! Mushroom risotto, veg curry, and grilled halloumi salad are all vegetarian. Want me to check which are also vegan?",
            formalityVariants: {
              casual:
                "Totally, we've got some! The risotto, curry, and halloumi salad are all vegetarian. Should I see if any are vegan too?",
              standard:
                "Yes, we have several! The mushroom risotto, the vegetable curry, and the grilled halloumi salad are all vegetarian. Would you like me to check which ones are also vegan?",
              formal:
                "Yes, certainly, we offer several excellent vegetarian choices. The mushroom risotto, vegetable curry, and grilled halloumi salad are all suitable for vegetarians. Would you care for me to ascertain which of these options are also strictly vegan?",
            },
          },
          {
            speaker: "you",
            textEn:
              "I eat dairy, so vegetarian is fine. The mushroom risotto sounds great. Does it contain any meat stock?",
            textZh: "我吃奶制品，素食就行。蘑菇烩饭听起来不错。里面有肉汤吗？",
            casualVersion: "Dairy's fine for me, so veggie's good. Mushroom risotto sounds good. Any meat stock in it?",
            commonMistake: {
              wrong:
                "I eat milk, so vegetarian is fine. The mushroom risotto sounds great. Is there meat stock inside?",
              correct:
                "I eat dairy, so vegetarian is fine. The mushroom risotto sounds great. Does it contain any meat stock?",
              explanation:
                "“milk”指牛奶，“dairy”指奶制品。“Is there meat stock inside?”不自然，用“Does it contain any meat stock?”更地道。",
            },
            formalityVariants: {
              casual: "Dairy's okay, so vegetarian works. Risotto sounds yum. Does it have meat stock?",
              standard:
                "I eat dairy, so vegetarian is fine. The mushroom risotto sounds great. Does it contain any meat stock?",
              formal:
                "As I consume dairy products, vegetarian options are perfectly acceptable. The mushroom risotto sounds delightful. May I inquire whether it contains any meat stock?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Our risotto is made with vegetable stock, so no meat at all. It's one of our best sellers, actually!",
            textZh: "我们的烩饭用的是蔬菜高汤，完全没有肉。其实这是我们最畅销的菜之一！",
            keyPhrases: [
              { en: "vegetable stock", zh: "蔬菜高汤" },
              { en: "meat stock", zh: "肉汤" },
              { en: "best sellers", zh: "最畅销的" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yep, all veggie broth — no meat at all. It's one of our top dishes, actually.",
                textZh: "对，全是蔬菜高汤——完全没有肉。这其实是我们最火的菜之一。",
                actionHint: "放心点这道菜",
                frequency: "common",
              },
              {
                textEn: "It's 100% vegetarian — made with vegetable stock. People love it!",
                textZh: "百分百素食——用蔬菜高汤做的。大家都很喜欢！",
                actionHint: "可以放心选这道",
                frequency: "common",
              },
            ],
            casualVersion: "It's veg stock, so no meat at all. Actually, it's one of our best sellers!",
            formalityVariants: {
              casual: "Our risotto uses veg stock, so zero meat. It's super popular!",
              standard:
                "Our risotto is made with vegetable stock, so no meat at all. It's one of our best sellers, actually!",
              formal:
                "Our risotto is prepared exclusively with vegetable stock, ensuring it contains no meat whatsoever. It is, in fact, one of our most highly requested and popular dishes.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect, I'll have that.",
            textZh: "太好了，就要这个。",
            casualVersion: "Perfect, I'll get that.",
            commonMistake: {
              wrong: "Perfect, I want that.",
              correct: "Perfect, I'll have that.",
              explanation: "点菜时用“I'll have/get that”比“I want that”更礼貌和自然。",
            },
            formalityVariants: {
              casual: "Sounds good, I'll take it.",
              standard: "Perfect, I'll have that.",
              formal: "Excellent, I will order that, please.",
            },
          },
        ],
      },

      // --- Flow 3: 过敏紧急情况——吃到过敏原后的应对 ---
      {
        id: "allergy-emergency",
        titleZh: "过敏紧急应对",
        titleEn: "Allergy Emergency at a Restaurant",
        description: "在餐厅吃到过敏原后紧急告知服务员并要求帮助",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me! I think there are nuts in this dish. I specifically said I'm allergic to nuts. My lips are starting to tingle.",
            textZh: "不好意思！我觉得这道菜里有坚果。我明确说过对坚果过敏。我嘴唇开始发麻了。",
            culturalNote: "在美国餐厅，如果你已经告知过敏但食物仍含有过敏原，这是餐厅的严重失误。你要立刻大声说明——这不是'添麻烦'，是保命。美国人对食物过敏非常重视，餐厅有法律责任。",
            commonMistake: {
              wrong: "Sorry, I think this food has nuts. My mouth feels strange.",
              correct: "Excuse me! I think there are nuts in this dish. My lips are starting to tingle.",
              explanation: "紧急情况不需要说 sorry。'tingle'（发麻）比'feels strange'更精确地描述过敏初期症状。",
            },
            casualVersion: "Hey, wait — are there nuts in this? I told you I'm allergic! My lips are tingling!",
            formalityVariants: {
              casual: "Hey! This has nuts in it! I said I'm allergic! My lips are tingling!",
              standard: "Excuse me! I think there are nuts in this dish. I specifically said I'm allergic. My lips are starting to tingle.",
              formal: "Excuse me, I must alert you immediately — I believe this dish contains nuts. I had clearly communicated my nut allergy. My lips are beginning to tingle.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Oh my God, I'm so sorry! Let me take that away right now. Are you OK? Do you have an EpiPen with you? I'm getting the manager immediately.",
            textZh: "天哪，太抱歉了！我马上把这个撤掉。你还好吗？你身上有肾上腺素笔吗？我马上叫经理来。",
            keyPhrases: [
              { en: "EpiPen", zh: "肾上腺素笔（过敏急救自动注射器）" },
              { en: "getting the manager", zh: "叫经理来" },
              { en: "take that away", zh: "把它撤走" },
            ],
            alternativeExpressions: [
              {
                textEn: "I am so sorry! Don't eat any more of that. Do you need medical help? I'll get the manager right away.",
                textZh: "太对不起了！别再吃了。需要医疗帮助吗？我马上叫经理。",
                actionHint: "停止进食",
                frequency: "common",
              },
              {
                textEn: "Oh no, I'm really sorry about that! Let me clear this immediately. Do you have any allergy medication on you? I'm calling the manager over now.",
                textZh: "糟糕，真的很抱歉！让我马上撤掉。你有带过敏药吗？我现在叫经理过来。",
                actionHint: "检查是否带药",
                frequency: "common",
              },
            ],
            culturalNote: "美国餐厅对过敏事故非常警觉，因为可能面临巨额诉讼。服务员会立刻道歉、叫经理、询问是否需要打911。这和中国餐厅的反应可能很不同。",
            casualVersion: "Oh God, I'm so sorry! Lemme take that. You okay? Got an EpiPen? I'm grabbing the manager right now.",
            formalityVariants: {
              casual: "Oh no! I'm so sorry! You okay? EpiPen? Let me get the manager right now.",
              standard: "I'm so sorry! Let me remove that immediately. Are you OK? Do you have an EpiPen? I'm getting the manager right away.",
              formal: "I sincerely apologize. Allow me to remove this dish at once. Are you experiencing any symptoms? Do you carry an epinephrine auto-injector? I am summoning the manager immediately.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I have my EpiPen in my bag, but I don't think I need it yet — the tingling is mild. But I need you to double-check what's in that sauce. And I want to speak with the manager.",
            textZh: "有的，EpiPen在我包里，但我觉得现在还不需要用——发麻比较轻。但我需要你确认那个酱汁里有什么。我要和经理谈。",
            culturalNote: "在美国，要求和经理谈（speak with the manager）在这种情况下完全合理，不是'找茬'。经理有权做出赔偿决定（免单、代金券等）。'I want to speak with the manager' 是固定表达。",
            commonMistake: {
              wrong: "I want to find your leader.",
              correct: "I want to speak with the manager.",
              explanation: "'找你们领导'直译为 'find your leader' 在英语中听起来很奇怪。用 'speak with the manager' 是标准说法。",
            },
            casualVersion: "Yeah, I got my EpiPen. Don't think I need it yet — the tingling's mild. But check what's in that sauce. And I wanna talk to the manager.",
            formalityVariants: {
              casual: "Yeah, got my EpiPen. Don't need it yet — tingling's light. But what's in that sauce? And I need the manager.",
              standard: "Yes, I have my EpiPen. I don't think I need it yet — the tingling is mild. But please check what's in that sauce. I'd like to speak with the manager.",
              formal: "Yes, I have my epinephrine auto-injector readily available. The symptoms remain mild at present. However, I require verification of the ingredients in that sauce. Additionally, I would like to speak with your manager regarding this matter.",
            },
          },
          {
            speaker: "them",
            role: "经理",
            textEn: "I'm the manager, David. First of all, I'm deeply sorry about this. Let me explain what happened — the kitchen used peanut oil in the stir-fry sauce instead of vegetable oil. That should never have happened with an allergy flag on your order. How are you feeling right now?",
            textZh: "我是经理 David。首先非常抱歉。让我说明发生了什么——厨房在炒菜酱汁里用了花生油而不是植物油。在你的订单上已经标了过敏标记，这绝对不应该发生。你现在感觉怎么样？",
            keyPhrases: [
              { en: "allergy flag", zh: "过敏标记" },
              { en: "peanut oil", zh: "花生油" },
              { en: "should never have happened", zh: "绝对不应该发生" },
            ],
            alternativeExpressions: [
              {
                textEn: "Hi, I'm the manager. I want to sincerely apologize. It looks like there was a miscommunication with the kitchen about the allergens in your dish. This is unacceptable and I take full responsibility. Are you feeling OK?",
                textZh: "你好，我是经理。我想真诚地道歉。看起来厨房在你菜里的过敏原问题上沟通出了问题。这不可接受，我承担全部责任。你感觉还好吗？",
                actionHint: "经理主动承担责任",
                frequency: "common",
              },
            ],
            culturalNote: "美国经理在这种情况下通常会主动说明原因、道歉并承担责任，而不是推诿。'should never have happened' 是承认错误的标准表达。经理这样做一部分是出于真心，一部分是避免法律风险。",
            casualVersion: "Hey, I'm the manager, David. Really sorry about this. So what happened — the kitchen used peanut oil in the stir-fry instead of vegetable oil. With an allergy flag on your order, that's totally unacceptable. How you feeling?",
            formalityVariants: {
              casual: "I'm the manager, David. Really sorry. Kitchen used peanut oil instead of veggie oil. Shouldn't have happened with the allergy flag. How you doing?",
              standard: "I'm the manager, David. I'm deeply sorry. The kitchen used peanut oil instead of vegetable oil in the sauce. With an allergy flag on your order, this should never have happened. How are you feeling?",
              formal: "Good evening, I am the manager, David. Please allow me to extend my deepest apologies. Upon investigation, I have determined that the kitchen inadvertently used peanut oil in the sauce rather than vegetable oil. Given that your order was clearly flagged for a nut allergy, this is an inexcusable error. May I inquire about your current condition?",
            },
          },
          {
            speaker: "you",
            textEn: "The tingling hasn't gotten worse, so I think I'll be OK. But honestly, this is really concerning. I clearly told the server about my allergy when I ordered.",
            textZh: "发麻没加重，所以应该没事。但说实话，这真的很让人担心。我点菜时明确告诉了服务员我的过敏情况。",
            culturalNote: "在美国，表达不满时说 'this is really concerning' 或 'I'm not happy about this' 比发脾气更有效。冷静但坚定地说明问题，经理反而更会重视你。",
            commonMistake: {
              wrong: "This makes me very angry. I told the waiter already!",
              correct: "This is really concerning. I clearly told the server about my allergy.",
              explanation: "'concerning' 比 'angry' 更有分量。用 'server' 比 'waiter' 更中性。冷静坚定比愤怒更有效。",
            },
            casualVersion: "Tingling hasn't gotten worse, so I think I'm OK. But this is pretty scary, man. I told the server about my allergy.",
            formalityVariants: {
              casual: "Tingling's the same, so probably OK. But seriously, this is scary. I told the server.",
              standard: "The tingling hasn't worsened, so I believe I'll be fine. But this is very concerning — I clearly communicated my allergy.",
              formal: "The symptoms have not progressed, so I anticipate I will be alright. However, I must express my serious concern. I explicitly informed our server of my allergy at the time of ordering.",
            },
          },
          {
            speaker: "them",
            role: "经理",
            textEn: "You're absolutely right to be concerned, and again, I'm very sorry. Here's what I'd like to do — your entire meal is on us tonight, of course. I'm also going to give you a $50 gift card for a future visit. And I'm having a conversation with the kitchen right now about our allergy protocols. Would you like me to call an ambulance just to be safe?",
            textZh: "您的担心完全合理，再次道歉。我想这样处理——今晚整餐当然由我们买单。我还会给您一张50美元的礼品卡供下次使用。我现在就会和厨房谈过敏操作流程。您要不要我叫救护车以防万一？",
            keyPhrases: [
              { en: "on us", zh: "我们买单/免费" },
              { en: "gift card", zh: "礼品卡" },
              { en: "allergy protocols", zh: "过敏操作流程" },
              { en: "just to be safe", zh: "以防万一" },
            ],
            alternativeExpressions: [
              {
                textEn: "You have every right to be upset. We're comping your entire dinner, and I want to give you a gift card as well. I'll be retraining the kitchen on allergy procedures tonight. Can I call 911 for you, or do you feel stable?",
                textZh: "你完全有理由生气。我们免掉你们整顿饭，另外给你一张礼品卡。今晚我会重新培训厨房的过敏流程。要我给你打911吗，还是你感觉稳定？",
                actionHint: "经理主动赔偿",
                frequency: "common",
              },
            ],
            culturalNote: "美国餐厅在过敏事故后通常会主动免单（comp the meal）并提供额外补偿。这不仅是善意，也是避免法律诉讼。作为顾客，接受这些补偿是正常的。如果过敏严重，一定要接受叫救护车的提议。",
            casualVersion: "Totally fair. Your dinner's on us, obviously. Here's a $50 gift card too. I'm gonna talk to the kitchen about this right now. Want me to call an ambulance just in case?",
            formalityVariants: {
              casual: "Totally understandable. Dinner's on us. Here's a $50 gift card too. I'm talking to the kitchen tonight. Want me to call 911?",
              standard: "You're absolutely right to be concerned. Your meal is on us, and I'm providing a $50 gift card for a future visit. I'll be addressing this with the kitchen immediately. Would you like me to call an ambulance?",
              formal: "Your concern is entirely justified, and please accept my sincerest apologies. Your entire meal this evening will be complimentary. Additionally, I would like to present you with a $50 gift card for a future visit. I will be conducting a thorough review of our allergy handling protocols with the kitchen staff. Shall I arrange for emergency medical services as a precautionary measure?",
            },
          },
          {
            speaker: "you",
            textEn: "No ambulance — I think I'm stable, and I have my EpiPen if things get worse. I appreciate you handling this seriously. I'll take the gift card, thank you. But please make sure this doesn't happen to anyone else.",
            textZh: "不用叫救护车——我觉得稳定了，如果恶化还有EpiPen。谢谢你认真处理。礼品卡我收了，谢谢。但请确保这种事不再发生在其他人身上。",
            culturalNote: "在美国，说 'please make sure this doesn't happen to anyone else' 比 'I'm going to sue you' 更成熟有效。你展现出关心他人的态度，同时暗示了法律后果。经理会更加重视。",
            commonMistake: {
              wrong: "No need ambulance. I appreciate you serious handle. Give me the gift card.",
              correct: "No ambulance. I appreciate you handling this seriously. I'll take the gift card, thank you.",
              explanation: "'handling this seriously' 是正确的动名词用法。'I'll take' 比 'Give me' 更礼貌。",
            },
            casualVersion: "No ambulance, I'm good. Got my EpiPen if it gets worse. Thanks for taking this seriously. I'll take the gift card. Just make sure nobody else goes through this.",
            formalityVariants: {
              casual: "Nah, no ambulance. I'm stable. Got the EpiPen. Thanks for the card. Just make sure it doesn't happen again.",
              standard: "No ambulance needed. I'm stable and I have my EpiPen. Thank you for handling this seriously. I'll accept the gift card. Please ensure this doesn't happen again.",
              formal: "An ambulance will not be necessary. I am stable and have my epinephrine auto-injector available. I appreciate the gravity with which you are treating this matter. I will accept the gift card, thank you. I would, however, strongly urge that measures be taken to prevent a recurrence for future patrons.",
            },
          },
          {
            speaker: "them",
            role: "经理",
            textEn: "Absolutely. I'm implementing a double-check system tonight — the server and a kitchen lead will both verify allergen flags before any dish leaves the kitchen. Here's my business card with my direct number. If you feel any symptoms later tonight, please don't hesitate to call 911. And please call me tomorrow so I know you're doing OK.",
            textZh: "一定的。我今晚就实施双重检查制度——服务员和厨房领班都要在出菜前确认过敏标记。这是我的名片和直线号码。如果今晚之后有任何症状，请一定打911。明天也请打电话告诉我你没事。",
            keyPhrases: [
              { en: "double-check system", zh: "双重检查制度" },
              { en: "business card", zh: "名片" },
              { en: "direct number", zh: "直线号码" },
              { en: "don't hesitate to", zh: "不要犹豫/一定要" },
            ],
            alternativeExpressions: [
              {
                textEn: "You have my word. Starting tonight, every allergy-flagged order gets verified twice before it's served. Here's my card — call me anytime. And if anything changes tonight, call 911 immediately.",
                textZh: "我向你保证。从今晚开始，每个标了过敏的订单出餐前都会被双重确认。这是我的卡——随时打给我。如果今晚有任何变化，立刻打911。",
                actionHint: "留下联系方式",
                frequency: "common",
              },
            ],
            culturalNote: "美国经理主动给名片和私人号码是表示诚意的做法。他真心希望你后续确认安全，同时也是留下记录以防后续法律问题。如果你之后有不适，打911是最正确的做法——在美国，过敏反应可能在数小时后加重。",
            casualVersion: "For sure. Starting tonight, double-check system — server and kitchen lead both verify allergy flags before any dish goes out. Here's my card with my direct number. If anything feels off tonight, call 911. And call me tomorrow so I know you're OK.",
            formalityVariants: {
              casual: "Absolutely. Double-check system starting tonight. Here's my card. Call 911 if anything feels off later. And check in with me tomorrow, OK?",
              standard: "Without question. I'm implementing a double-check system immediately. Here's my card. If you experience any symptoms later, call 911. Please call me tomorrow to let me know you're alright.",
              formal: "You have my assurance. I am instituting a mandatory dual-verification protocol for all allergen-flagged orders, effective immediately. Please accept my business card with my direct telephone number. Should you experience any symptoms this evening, please contact emergency services without hesitation. I would also be grateful if you could contact me tomorrow to confirm your well-being.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 结账 ====================
  {
    id: "restaurant-bill",
    tags: ["bill", "买单", "结账", "check", "split", "AA"],
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
            commonMistake: {
              wrong: "Excuse me, I want to pay the bill.",
              correct: "Excuse me, could we get the check, please?",
              explanation: '"pay the bill" 听起来不自然，用 "get the check/bill" 更地道。',
            },
            formalityVariants: {
              casual: "Hey, can we get the check?",
              standard: "Excuse me, could we get the check, please?",
              formal: "Pardon me, might we trouble you for the bill at your earliest convenience?",
            },
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
              {
                textEn: "Sure! Here's your check. Whenever you're ready — no rush.",
                textZh: "好的！账单给您。不着急，准备好了再付。",
                actionHint: "看完账单再付款",
                frequency: "common",
              },
              {
                textEn: "Here you are. Will you be paying together or separately?",
                textZh: "给您。你们一起付还是分开？",
                actionHint: "告诉服务员付款方式",
                frequency: "occasional",
              },
            ],
            casualVersion: "Sure! Here ya go. Card or cash?",
            formalityVariants: {
              casual: "Sure! Here ya go. Card or cash?",
              standard: "Of course! Here you go. Would you like to pay by card or cash?",
              formal:
                "Certainly, here is your bill. May I inquire if you prefer to pay with a credit/debit card or with cash?",
            },
          },
          {
            speaker: "you",
            textEn: "Card, please. Can I use Apple Pay?",
            textZh: "刷卡。可以用 Apple Pay 吗？",
            casualVersion: "Card. Can I use Apple Pay?",
            commonMistake: {
              wrong: "I use card. Can I use my Apple Pay?",
              correct: "Card, please. Can I use Apple Pay?",
              explanation: '"use my Apple Pay" 是直译，说 "use Apple Pay" 即可。',
            },
            formalityVariants: {
              casual: "Card. Apple Pay okay?",
              standard: "Card, please. Can I use Apple Pay?",
              formal: "Yes, I'll be paying with a card. Do you accept Apple Pay as a payment method?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Yes, we accept Apple Pay. Just tap your phone here... Would you like to add a tip? You can select on the screen.",
            textZh: "可以的，我们接受 Apple Pay。把手机放这里……要加小费吗？可以在屏幕上选择。",
            commonMistake: {
              wrong: "Do you need a tip?",
              correct: "Would you like to add a tip?",
              explanation: "Do you need a tip听起来很奇怪，美式更委婉。",
            },
            keyPhrases: [
              { en: "tap your phone", zh: "把手机放上去" },
              { en: "add a tip", zh: "加小费" },
              { en: "select on the screen", zh: "在屏幕上选择" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure, Apple Pay works! Just hold your phone over the reader. You can add a tip on the screen.",
                textZh: "可以用 Apple Pay！把手机靠近读卡器。小费可以在屏幕上选。",
                actionHint: "操作手机付款并选小费",
                frequency: "common",
              },
              {
                textEn: "Yep, tap right here. It'll ask about the tip on the screen — just pick an amount.",
                textZh: "好的，放这里感应。屏幕上会提示小费——选一个金额就行。",
                actionHint: "按屏幕提示操作",
                frequency: "common",
              },
            ],
            culturalNote: "在美国，餐厅小费通常是餐费的 15-20%。好的服务可以给 20%。",
            casualVersion: "Yep, we take Apple Pay. Just tap your phone... Wanna add a tip? Pick on the screen.",
            formalityVariants: {
              casual: "Yeah, we take Apple Pay. Tap your phone here. Wanna add a tip? Just pick on the screen.",
              standard:
                "Yes, we accept Apple Pay. Just tap your phone here... Would you like to add a tip? You can select on the screen.",
              formal:
                "Yes, we do accept Apple Pay. Kindly tap your device on the reader here. Regarding gratuity, you may add it through the prompts displayed on the screen.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I'll add 20%.",
            textZh: "好的，加20%。",
            casualVersion: "Yeah, 20% is good.",
            culturalNote: "在美国，用餐小费通常为15-20%。",
            commonMistake: {
              wrong: "I give 20 percent.",
              correct: "Yes, I'll add 20%.",
              explanation: '通常用 "add" 或 "do"，直接说 "give" 听起来不自然。',
            },
            formalityVariants: {
              casual: "Yeah, 20%.",
              standard: "Yes, I'll add 20%.",
              formal: "Indeed, I would like to include a 20% gratuity.",
            },
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
              {
                textEn: "All done! Here's your receipt. Thanks for dining with us!",
                textZh: "好了！收据给您。感谢光临！",
                actionHint: "收好收据",
                frequency: "common",
              },
              {
                textEn: "You're all set. Hope everything was great tonight!",
                textZh: "都搞定了。希望今晚一切满意！",
                actionHint: "可以表示感谢",
                frequency: "common",
              },
            ],
            casualVersion: "Thanks a bunch! Here's your receipt. Hope you liked your meal!",
            formalityVariants: {
              casual: "Thanks a lot! Receipt's right here. Hope you enjoyed it!",
              standard: "Thank you so much! Here's your receipt. Hope you enjoyed your meal!",
              formal:
                "Thank you kindly. Here is your transaction receipt. We sincerely hope you had a delightful dining experience!",
            },
          },
          {
            speaker: "you",
            textEn: "The food was excellent. Thank you!",
            textZh: "菜非常好吃。谢谢！",
            casualVersion: "Food was awesome! Thanks!",
            commonMistake: {
              wrong: "The food is very delicious. Thank you!",
              correct: "The food was excellent. Thank you!",
              explanation: '用餐后用 "was" 更自然，"excellent" 比 "delicious" 更地道。',
            },
            formalityVariants: {
              casual: "Food was great! Thanks!",
              standard: "The food was excellent. Thank you!",
              formal: "The culinary experience was superb. My sincere thanks to you!",
            },
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
            culturalNote: "美国服务员很习惯分账，但要尽早提出。",
            casualVersion: "Can we split the bill? Pay separately.",
            commonMistake: {
              wrong: "Can we pay separately?",
              correct: "Could we split the bill, please?",
              explanation: "直接说“分开付”不如说“分开结账”更礼貌。",
            },
            formalityVariants: {
              casual: "Can we just split the bill? Pay separately.",
              standard: "Could we split the bill, please? We'd like to pay separately.",
              formal: "Excuse me, would it be possible to divide the bill, as we'd prefer to pay individually?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Sure! Would you like me to split it evenly, or would each person like to pay for what they ordered?",
            textZh: "当然！是平均分还是各付各的？",
            commonMistake: {
              wrong: "evenly split or pay separately?",
              correct: "split it evenly, or would each person like to pay for what they ordered?",
              explanation: "直接翻译听起来不自然，需要加上谓语动词。",
            },
            keyPhrases: [
              { en: "split the bill", zh: "分开付/AA制" },
              { en: "evenly", zh: "平均" },
              { en: "pay for what they ordered", zh: "各付各的" },
            ],
            alternativeExpressions: [
              {
                textEn: "No problem! Do you want me to divide it equally or by what each person had?",
                textZh: "没问题！按人头均分还是各算各的？",
                actionHint: "说明分账方式",
                frequency: "common",
              },
              {
                textEn: "Sure, I can split that. How many ways?",
                textZh: "当然，我来分。分几份？",
                actionHint: "告诉服务员人数和分法",
                frequency: "common",
              },
            ],
            casualVersion: "Sure! Evenly, or y'all pay for what you got?",
            formalityVariants: {
              casual: "No problem! Even split, or everyone pays for their own stuff?",
              standard:
                "Sure! Would you like me to split it evenly, or would each person like to pay for what they ordered?",
              formal:
                "Certainly. Would you prefer the bill to be divided equally, or would each individual prefer to settle the cost of their respective items?",
            },
          },
          {
            speaker: "you",
            textEn: "Each person pays for their own, please.",
            textZh: "各付各的吧。",
            casualVersion: "Everyone pays for their own, yeah.",
            commonMistake: {
              wrong: "Everyone pay their own.",
              correct: "Each person pays for their own, please.",
              explanation: "注意动词单复数和介词“for”。",
            },
            formalityVariants: {
              casual: "Yeah, everyone pays for their own.",
              standard: "Each person pays for their own, please.",
              formal: "We would prefer that each individual settles their own respective portion.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "No problem. I'll bring separate checks. Just to confirm — the wine was shared, right? I'll split that evenly among the four of you.",
            textZh: "没问题。我给你们分开出单子。确认一下——酒是一起喝的对吧？那瓶酒我就四个人平分。",
            commonMistake: {
              wrong: "I'll split that bottle among four people.",
              correct: "I'll split that bottle among the four of you.",
              explanation: "听起来更自然地表达是“你们四人平分”或“四个人平分”。",
            },
            keyPhrases: [
              { en: "separate checks", zh: "分开的单子" },
              { en: "shared", zh: "共享的" },
              { en: "split evenly", zh: "平均分" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure. I'll print four separate bills. The shared wine — should I split that four ways?",
                textZh: "好的。我出四张单子。一起喝的酒——四个人分吗？",
                actionHint: "说明酒水怎么分",
                frequency: "common",
              },
              {
                textEn: "Okay, individual checks coming up. Anything that was shared I'll divide equally — sound good?",
                textZh: "好的，马上分单。共享的部分我就平均分——可以吗？",
                actionHint: "确认或提出不同分法",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "No prob. I'll get separate checks. Just double-checkin'—wine was shared, right? I'll just split that evenly for the four of you.",
            formalityVariants: {
              casual:
                "Cool, I'll bring out separate checks. Quick question though – the wine, you guys shared that, right? I'll just split it four ways.",
              standard:
                "No problem. I'll bring separate checks. Just to confirm — the wine was shared, right? I'll split that evenly among the four of you.",
              formal:
                "Certainly. I shall prepare individual checks for you. May I just confirm that the wine was a shared item? I will then divide its cost equally among all four of you.",
            },
          },
          {
            speaker: "you",
            textEn: "Actually, I'll cover the wine. Just put it on my bill.",
            textZh: "其实酒算我的吧。放在我的账单上。",
            casualVersion: "Actually, I'll get the wine. Just put it on my tab.",
            commonMistake: {
              wrong: "I take the wine.",
              correct: "I'll cover the wine.",
              explanation: "“我来付”有很多地道表达，不要直译。",
            },
            formalityVariants: {
              casual: "Nah, I'll grab the wine. Just put it on my check.",
              standard: "Actually, I'll cover the wine. Just put it on my bill.",
              formal:
                "Upon second thought, I would prefer to cover the cost of the wine myself. Kindly add it to my individual bill.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Got it! I'll add the wine to your check. Here are the four separate bills.",
            textZh: "好的！酒加到您的单子上。给您四张分开的账单。",
            alternativeExpressions: [
              {
                textEn: "No problem, wine's on your tab. Here are four checks.",
                textZh: "没问题，酒算你的。给你们四张单子。",
                actionHint: "各自付款",
                frequency: "common",
              },
              {
                textEn: "Done! The wine is on yours. Everyone else just pays their own food.",
                textZh: "好了！酒在你这张上。其他人只付自己的餐费。",
                actionHint: "各自看单付款即可",
                frequency: "occasional",
              },
            ],
            casualVersion: "Got it! I'll just add the wine to your check. Here's your four separate bills.",
            formalityVariants: {
              casual: "Okay, wine on your check then. Here's your separate bills.",
              standard: "Got it! I'll add the wine to your check. Here are the four separate bills.",
              formal: "Understood. The wine will be added to your check. Herewith are the four individual bills.",
            },
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
            casualVersion: "Hey, I think there's a mistake. We didn't get the lobster app.",
            commonMistake: {
              wrong: "I think bill has mistake.",
              correct: "I think there's a mistake on the bill.",
              explanation: "'has mistake' 不自然，应说 'there's a mistake on' 或 'the bill is incorrect'",
            },
            formalityVariants: {
              casual: "Hey, I think there's a mistake. We didn't get the lobster app.",
              standard: "Excuse me, I think there's a mistake on the bill. We didn't order the lobster appetizer.",
              formal: "Excuse me, I believe there may be an inaccuracy on the bill. We did not order the lobster appetizer.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Let me check... You're right, I'm so sorry about that. That was for another table. Let me correct it right away.",
            textZh: "让我看看……您说得对，非常抱歉。那是另一桌的。我马上更正。",
            casualVersion: "Lemme check... Oh, you're right, my bad. That was for a different table. I'll fix it now.",
            formalityVariants: {
              casual: "Lemme check... Oh, you're right, my bad. That was for a different table. I'll fix it now.",
              standard: "Let me check... You're right, I apologize. That was for another table. I'll correct it right away.",
              formal: "Allow me to review... You are absolutely correct, my apologies. That particular item was intended for a different table. I shall rectify this immediately.",
            },
            keyPhrases: [
              { en: "mistake", zh: "错误" },
              { en: "another table", zh: "另一桌" },
              { en: "correct it", zh: "更正" },
            ],
            alternativeExpressions: [
              {
                textEn: "Oh no, I'm sorry! That must have been entered wrong. Let me fix it right now.",
                textZh: "糟糕，抱歉！肯定是录错了。我现在就改。",
                actionHint: "等服务员更正账单",
                frequency: "common",
              },
              {
                textEn: "You're absolutely right, my mistake. I'll take that off immediately.",
                textZh: "您说得对，是我的失误。我马上去掉。",
                actionHint: "耐心等待修改",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "No problem. Also, we were told the dessert was complimentary for the birthday — but it's showing $12 on the bill.",
            textZh: "没关系。还有，之前说生日甜点是免费的——但账单上显示12美元。",
            casualVersion: "No worries. And, we were told the birthday dessert was free — but it's $12 on the bill.",
            commonMistake: {
              wrong: "dessert was free for birthday",
              correct: "dessert was complimentary for the birthday",
              explanation: "'complimentary' 比 'free' 更礼貌，更常用语餐厅语境。",
            },
            formalityVariants: {
              casual: "No worries. And, we were told the birthday dessert was free — but it's $12 on the bill.",
              standard: "No problem. Also, we were told the dessert was complimentary for the birthday — but it shows $12 on the bill.",
              formal: "That is quite alright. Additionally, we were informed that the birthday dessert would be complimentary, yet it appears on the bill for $12.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Oh, you're absolutely right! The birthday dessert is on the house. I apologize for the error. Here's the corrected bill — the total is now $86.",
            textZh: "对对，您完全正确！生日甜点是免费的。为这个错误道歉。更正后的账单——现在总共86美元。",
            casualVersion: "Oh, totally right! Birthday dessert's on the house. My bad for the mix-up. Here's the new bill - total's $86.",
            formalityVariants: {
              casual: "Oh, totally right! Birthday dessert's on the house. My bad for the mix-up. Here's the new bill - total's $86.",
              standard: "Oh, you're absolutely right! The birthday dessert is complimentary. My apologies for that error. Here's the corrected bill - your total is now $86.",
              formal: "Indeed, you are entirely correct! The birthday dessert is complimentary. My sincere apologies for that oversight. Here is the revised bill; your new total is $86.",
            },
            keyPhrases: [
              { en: "complimentary", zh: "免费的/赠送的" },
              { en: "on the house", zh: "店家请客/免费" },
              { en: "corrected bill", zh: "更正后的账单" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I'm so sorry! The birthday dessert should be free. Let me redo the bill — your new total is $86.",
                textZh: "非常抱歉！生日甜点应该是免费的。我重新出单——新的总额是86美元。",
                actionHint: "核对新账单金额",
                frequency: "common",
              },
              {
                textEn: "My bad! That dessert is on us. Here's the updated check — $86 total.",
                textZh: "我的错！甜点是我们请的。更新后的账单——一共86美元。",
                actionHint: "确认金额无误再付",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That looks right now. Thank you for fixing it.",
            textZh: "现在对了。谢谢更正。",
            commonMistake: {
              wrong: "This is right now. Thank you for fixing it.",
              correct: "That looks right now. Thank you for fixing it.",
              explanation: "核对账单用That looks right更自然，This sounds right则用于确认口头信息。",
            },
            casualVersion: "Looks good now. Thanks for fixing it.",
            formalityVariants: {
              casual: "Looks good now. Thanks for fixing it.",
              standard: "That looks right now. Thank you for fixing it.",
              formal: "That appears to be correct now. I appreciate your prompt rectification of the matter.",
            },
          },
        ],
      },
      {
        id: "bill-errors-and-tipping",
        titleZh: "账单出错与小费计算",
        titleEn: "Bill Errors & Tipping",
        description: "发现账单多收费、叫服务员更正、计算小费、刷卡签字",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hmm, excuse me? I think there might be a mistake on the bill. We didn't order the lobster bisque — that's $18.",
            textZh: "嗯，不好意思？我觉得账单可能有错。我们没有点龙虾浓汤——那个18美元。",
            culturalNote: "小费按税前金额算。刷卡时会看到 Tip 一栏，写金额或百分比都行。Total 是餐费+小费的总数。",
            commonMistake: {
              wrong: "Hey, your bill is wrong. We didn't eat lobster bisque.",
              correct: "I think there might be a mistake on the bill. We didn't order the lobster bisque.",
              explanation: "'I think there might be a mistake' 比直接说 'your bill is wrong' 更礼貌，给对方台阶。",
            },
            casualVersion: "Hey, I think there's an error here. We didn't get the lobster bisque — that $18 charge.",
            formalityVariants: {
              casual: "Hey, think there's a mistake here. We didn't order the lobster bisque.",
              standard: "Excuse me, I think there might be a mistake on the bill. We didn't order the lobster bisque.",
              formal: "Pardon me, I believe there may be a discrepancy on the bill. We did not order the lobster bisque, which appears as an $18 charge.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Oh, let me take a look. You're right — I'm so sorry about that. That must have been from another table. Let me get this corrected right away.",
            textZh: "哦，让我看看。您说得对——非常抱歉。那应该是隔壁桌的。我马上给您改过来。",
            keyPhrases: [{ en: "let me take a look", zh: "让我看看" }, { en: "get this corrected", zh: "改正" }],
            alternativeExpressions: [
              { textEn: "Oh gosh, you're absolutely right. That's not yours. My apologies — I'll fix that immediately.", textZh: "哎呀，您完全正确。那不是你们的。抱歉——我立刻改。", actionHint: "立即道歉修正", frequency: "common" },
              { textEn: "Sorry about that! Looks like it got mixed up. Give me one sec to reprint the check.", textZh: "抱歉！看起来搞混了。给我一秒钟重打账单。", actionHint: "reprint = 重新打印", frequency: "occasional" },
            ],
            casualVersion: "Oh shoot, you're right! That's from another table. Lemme fix that real quick.",
            formalityVariants: {
              casual: "Oh man, you're right! Not yours. Lemme fix it.",
              standard: "You're right, I'm sorry. That was from another table. Let me correct that right away.",
              formal: "You are indeed correct, and I sincerely apologize. That item was erroneously charged from an adjacent table. Allow me to rectify this immediately.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Here's the corrected bill. Your new total is $72.50 before tax. Again, I'm really sorry about that.",
            textZh: "这是更正后的账单。税前新的总额是72.50美元。再次非常抱歉。",
            keyPhrases: [{ en: "before tax", zh: "税前" }, { en: "corrected bill", zh: "更正后的账单" }],
            alternativeExpressions: [
              { textEn: "Updated check right here — $72.50 pre-tax. Sorry again for the mix-up!", textZh: "更新后的账单——税前72.50美元。再次为搞混道歉！", actionHint: "pre-tax = before tax", frequency: "common" },
            ],
            casualVersion: "Here ya go — fixed bill. $72.50 before tax. Sorry 'bout that!",
            formalityVariants: {
              casual: "Fixed it — $72.50 before tax. Sorry again!",
              standard: "Here's the corrected bill. $72.50 before tax. Sorry about that.",
              formal: "Here is the amended bill. Your revised total is $72.50 prior to tax. My sincerest apologies for the error.",
            },
          },
          {
            speaker: "you",
            textEn: "No worries at all. So, the tax is $6.16, making it $78.66. I want to leave 20% — should I calculate the tip on the pre-tax amount?",
            textZh: "完全没关系。那税是6.16，加起来是78.66。我想留20%——小费是按税前金额算吗？",
            culturalNote: "小费的正式规则是按税前金额算，但很多人图方便直接按含税总额算。两种都可以，差不了几块钱。",
            casualVersion: "All good. So tax is $6.16, total $78.66. I wanna do 20% — is that on the pre-tax amount?",
            formalityVariants: {
              casual: "No biggie. Tax is $6.16, so $78.66. 20% tip — that's on the pre-tax, right?",
              standard: "No worries. The tax is $6.16, so the total is $78.66. I'd like to leave 20% — should I calculate on pre-tax?",
              formal: "Not a problem at all. With tax of $6.16, that brings us to $78.66. I would like to leave a 20% gratuity — is it customary to calculate that on the pre-tax amount?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Technically, yes — tip is usually based on the pre-tax total. But honestly, either way is totally fine. Most people just round up to make the math easier.",
            textZh: "技术上说是的——小费通常按税前算。但说实话，怎么算都行。大多数人就凑个整数方便计算。",
            keyPhrases: [{ en: "pre-tax total", zh: "税前总额" }, { en: "round up", zh: "凑整数" }],
            alternativeExpressions: [
              { textEn: "Yeah, officially it's on the pre-tax amount. But plenty of people just tip on the total. No wrong answer!", textZh: "对，官方来说是按税前。但很多人直接按总额算。没有错误答案！", actionHint: "怎么方便怎么来", frequency: "common" },
            ],
            casualVersion: "Yeah, technically pre-tax. But honestly, most people just round up. Whatever's easy!",
            formalityVariants: {
              casual: "Yeah, pre-tax technically. But just round up, most people do.",
              standard: "Tip is usually on pre-tax, but either way is fine. Most people round up.",
              formal: "Traditionally, the gratuity is calculated on the pre-tax subtotal. However, computing it on the final total is equally acceptable. Many guests simply round to a convenient figure.",
            },
          },
          {
            speaker: "you",
            textEn: "Okay, so 20% of $72.50 is $14.50. I'll just round up to $15. Can I put the tip on the card?",
            textZh: "好的，那72.50的20%是14.50。我凑到15块。小费可以刷卡吗？",
            casualVersion: "So 20% of $72.50... $14.50. I'll do $15. Can I put that on the card?",
            formalityVariants: {
              casual: "So that's like $14.50... I'll do $15. Can I just throw that on the card?",
              standard: "20% of $72.50 is $14.50. I'll round to $15. Can I put the tip on the card?",
              formal: "That would be $14.50 at 20%. I shall round it to $15. May I include the gratuity on the card?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Absolutely! When you sign the slip, you'll see a line for the tip and a line for the total. Just write $15 on the tip line and add it up for the total.",
            textZh: "当然可以！签单时你会看到一行小费栏和一行总额栏。在小费那行写15美元，然后加起来写总额就行。",
            keyPhrases: [{ en: "sign the slip", zh: "签账单" }, { en: "tip line", zh: "小费栏" }, { en: "total", zh: "总额" }],
            alternativeExpressions: [
              { textEn: "Of course! The receipt has a tip line and a total line. Just fill in $15 for the tip and write the grand total below.", textZh: "当然！小票上有小费栏和总额栏。小费写15美元，下面写合计就行。", actionHint: "grand total = 最终总额", frequency: "common" },
            ],
            casualVersion: "Sure! There's a tip line on the receipt — write $15 there and then add it all up for the total.",
            formalityVariants: {
              casual: "Yeah! Just write $15 on the tip line and add up the total. Easy.",
              standard: "Absolutely. The slip has a tip line and a total line. Write $15 for tip and sum it up.",
              formal: "Certainly. The receipt will display designated fields for the gratuity and the grand total. Please inscribe $15 on the gratuity line and compute the cumulative total below.",
            },
          },
          {
            speaker: "you",
            textEn: "So the total would be... $78.66 plus $15... $93.66. Done! Thank you for the great service tonight.",
            textZh: "那总额就是... 78.66加15... 93.66美元。好了！谢谢今晚的好服务。",
            casualVersion: "So... $78.66 plus $15... $93.66. Done! Great service, thanks!",
            formalityVariants: {
              casual: "$78.66 plus 15... $93.66. There we go! Thanks, great service.",
              standard: "So $78.66 plus $15 is $93.66. Done. Thank you for the great service.",
              formal: "That brings the total to $93.66. Thank you very much for the excellent service this evening.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Thank you so much! That's very generous. You all have a wonderful evening!",
            textZh: "非常感谢！您太慷慨了。祝你们有个愉快的晚上！",
            alternativeExpressions: [
              { textEn: "Thank you! Really appreciate it. Have a great night, and hope to see you again!", textZh: "谢谢！真的感谢。祝你们晚安，希望再见到你们！", actionHint: "表示欢迎再来", frequency: "common" },
            ],
            casualVersion: "Aw, thanks so much! Super generous. Y'all have an awesome night!",
            formalityVariants: {
              casual: "Thanks a ton! That's awesome. Have a great night!",
              standard: "Thank you so much! Very generous. Have a wonderful evening!",
              formal: "I sincerely appreciate your generosity. I wish you all a most pleasant evening!",
            },
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
            culturalNote: "美国服务人员问候语，无需回应",
            variations: [
              { textEn: "Hey there! Ready to order?", textZh: "嗨！准备好点餐了吗？" },
              { textEn: "Welcome! Go ahead and order whenever you're ready.", textZh: "欢迎！准备好了就可以点。" },
            ],
            alternativeExpressions: [
              {
                textEn: "Hey! What'll it be today?",
                textZh: "嘿！今天吃什么？",
                actionHint: "直接报你想要的餐品",
                frequency: "common",
              },
              {
                textEn: "Welcome in! Take your time or go ahead if you know what you want.",
                textZh: "欢迎！慢慢看或者想好了直接说。",
                actionHint: "准备好就直接点",
                frequency: "occasional",
              },
            ],
            casualVersion: "Hey, what can I get for ya?",
            formalityVariants: {
              casual: "Hey, what can I get for ya?",
              standard: "Hi, welcome! What can I get for you today?",
              formal: "Good morning/afternoon/evening, welcome. How may I assist you today?",
            },
          },
          {
            speaker: "you",
            textEn: "Hi, can I get a number 3 combo, please?",
            textZh: "你好，我要一个3号套餐。",
            culturalNote: "快餐店菜单上通常有编号的combo(套餐)，直接说号码最快捷。",
            casualVersion: "Hey, can I get the #3 combo?",
            commonMistake: {
              wrong: "I want number 3 combo.",
              correct: "Can I get a number 3 combo?",
              explanation: '直接说"I want"听起来比较生硬，用"Can I get"或"I\'ll have"更礼貌自然。',
            },
            formalityVariants: {
              casual: "Hey, can I get the #3 combo?",
              standard: "Hi, can I get a number 3 combo, please?",
              formal: "Good day, I would like to order the number three combo, if you please.",
            },
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
              {
                textEn: "You want that regular or supersized?",
                textZh: "要普通的还是加大的？",
                actionHint: "选大小",
                frequency: "common",
              },
              {
                textEn: "Small, medium, or large on that combo?",
                textZh: "套餐要小份、中份还是大份？",
                actionHint: "说出想要的尺寸",
                frequency: "common",
              },
            ],
            casualVersion: "Sure! Regular or large?",
            formalityVariants: {
              casual: "Sure! Regular or large?",
              standard: "Sure! What size would you like — regular or large?",
              formal: "Certainly. Would you prefer the regular or the large size?",
            },
          },
          {
            speaker: "you",
            textEn: "Large, please.",
            textZh: "大份。",
            commonMistake: {
              wrong: "I want large.",
              correct: "Large, please.",
              explanation: "I want 听起来很直接，Large, please 更礼貌简练",
            },
            casualVersion: "Large.",
            formalityVariants: {
              casual: "Large.",
              standard: "Large, please.",
              formal: "The large size, please.",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "And what would you like to drink with that?",
            textZh: "饮料要什么？",
            alternativeExpressions: [
              {
                textEn: "What drink do you want with the combo?",
                textZh: "套餐配什么饮料？",
                actionHint: "说出你要的饮料",
                frequency: "common",
              },
              {
                textEn: "Drink? We've got Coke, Sprite, iced tea, lemonade...",
                textZh: "喝什么？可乐、雪碧、冰茶、柠檬水都有……",
                actionHint: "从选项里挑一个",
                frequency: "common",
              },
            ],
            casualVersion: "And for a drink?",
            formalityVariants: {
              casual: "Drink with that?",
              standard: "And what would you like to drink with that?",
              formal: "May I inquire what beverage you would prefer with your meal?",
            },
          },
          {
            speaker: "you",
            textEn: "A Coke, please.",
            textZh: "可乐。",
            commonMistake: {
              wrong: "I want Coke.",
              correct: "A Coke, please.",
              explanation: "I want 听起来很直接，A Coke, please 更礼貌",
            },
            casualVersion: "Coke's fine.",
            formalityVariants: {
              casual: "Coke.",
              standard: "A Coke, please.",
              formal: "I would like a Coca-Cola, please.",
            },
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
              {
                textEn: "Eating here or taking it to go?",
                textZh: "在这吃还是带走？",
                actionHint: "说堂食或外带",
                frequency: "common",
              },
              {
                textEn: "Dine in or carry out?",
                textZh: "店里吃还是打包？",
                actionHint: "告诉对方你的选择",
                frequency: "occasional",
              },
            ],
            culturalNote: '美国说 "for here or to go"，英国说 "eat in or take away"。',
            casualVersion: "For here or to go?",
            commonMistake: {
              wrong: "Eat here or take away?",
              correct: "For here or to go?",
              explanation: '"Eat here"和"take away"在美式英语中不常用。',
            },
            formalityVariants: {
              casual: "For here or to go?",
              standard: "Is that for here or to go?",
              formal: "Will this order be for dine-in or take-away?",
            },
          },
          {
            speaker: "you",
            textEn: "For here, thanks.",
            textZh: "堂食，谢谢。",
            casualVersion: "For here.",
            formalityVariants: {
              casual: "For here.",
              standard: "For here, thanks.",
              formal: "Yes, it will be for here, thank you.",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Anything else?",
            textZh: "还要别的吗？",
            alternativeExpressions: [
              {
                textEn: "Want to add anything else to that?",
                textZh: "还要加点什么吗？",
                actionHint: "不需要就说 that's it",
                frequency: "common",
              },
              {
                textEn: "Can I get you anything else today?",
                textZh: "今天还需要别的吗？",
                actionHint: "有需要就补充，没有就结束",
                frequency: "common",
              },
            ],
            casualVersion: "Anything else?",
            formalityVariants: {
              casual: "Anything else?",
              standard: "Anything else?",
              formal: "Will there be anything further?",
            },
          },
          {
            speaker: "you",
            textEn: "No, that's it.",
            textZh: "不用了，就这些。",
            commonMistake: {
              wrong: "No, finish.",
              correct: "No, that's all.",
              explanation: "Chinese speakers might say 'finish' literally translating '完了', but 'that's all' is correct.",
            },
            casualVersion: "Nope, that's it.",
            formalityVariants: {
              casual: "Nope, that's it.",
              standard: "No, that's it.",
              formal: "No, that will be all, thank you.",
            },
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
              {
                textEn: "That comes to $9.75. How would you like to pay?",
                textZh: "一共9.75美元。怎么付？",
                actionHint: "告诉对方付款方式",
                frequency: "common",
              },
              {
                textEn: "$9.75 is your total. Card or cash today?",
                textZh: "总共9.75美元。今天刷卡还是现金？",
                actionHint: "选择付款方式",
                frequency: "common",
              },
            ],
            casualVersion: "Alright, $9.75. Cash or card?",
            formalityVariants: {
              casual: "Alright, $9.75. Cash or card?",
              standard: "Okay, your total is $9.75. Cash or card?",
              formal:
                "Very well, your total comes to nine dollars and seventy-five cents. Will you be paying with cash or by credit card?",
            },
          },
          {
            speaker: "you",
            textEn: "Card, please.",
            textZh: "刷卡。",
            commonMistake: {
              wrong: "I use card.",
              correct: "Card, please.",
              explanation: "更简洁的回答方式，避免直译",
            },
            casualVersion: "Card.",
            formalityVariants: {
              casual: "Card.",
              standard: "Card, please.",
              formal: "By card, please.",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn:
              "Go ahead and tap or insert your card. Your order number is 47. We'll call your number when it's ready!",
            textZh: "请刷卡或感应。您的取餐号是47号。好了会叫号！",
            culturalNote: "美国快餐店常见取餐方式，听到叫号取餐",
            keyPhrases: [
              { en: "tap or insert", zh: "感应或插卡" },
              { en: "order number", zh: "取餐号" },
              { en: "call your number", zh: "叫号" },
            ],
            alternativeExpressions: [
              {
                textEn: "Tap right here. You're number 47 — we'll shout it out when it's done!",
                textZh: "在这里刷一下。你是47号——好了会喊号！",
                actionHint: "记住号码等叫号",
                frequency: "common",
              },
              {
                textEn: "Insert or tap your card. Your receipt has your order number — just listen for it!",
                textZh: "插卡或感应。收据上有取餐号——听着叫号就行！",
                actionHint: "看收据上的号码",
                frequency: "occasional",
              },
            ],
            casualVersion: "Tap or insert. Order 47. We'll call it when it's ready!",
            formalityVariants: {
              casual: "Tap or insert. Order 47. We'll call it when it's ready!",
              standard:
                "Go ahead and tap or insert your card. Your order number is 47. We'll call your number when it's ready!",
              formal:
                "Kindly proceed to tap or insert your card. Your order number is forty-seven. We will announce your number once your order is prepared.",
            },
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
            casualVersion: "What can I get ya?",
            formalityVariants: {
              casual: "What can I get ya?",
              standard: "What can I get for you?",
              formal: "How may I assist you today?",
            },
            alternativeExpressions: [
              {
                textEn: "Hey! Ready to order?",
                textZh: "嗨！准备好了吗？",
                actionHint: "直接报你想要的",
                frequency: "common",
              },
              {
                textEn: "What'll you have?",
                textZh: "你要什么？",
                actionHint: "说出你想点的东西",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll have a cheeseburger, but can I get it without pickles and without onions?",
            textZh: "我要一个芝士汉堡，但不要泡菜和洋葱。",
            casualVersion: "Can I get a cheeseburger, but no pickles, no onions?",
            commonMistake: {
              wrong: "I want a cheeseburger, but no pickles no onions.",
              correct: "Can I get a cheeseburger, but no pickles and no onions?",
              explanation: "\"I want\"生硬。\"hold the X\"是点餐时要求去掉某物的常用表达。",
            },
            formalityVariants: {
              casual: "Can I get a cheeseburger, but no pickles, no onions?",
              standard: "I'll have a cheeseburger, but can I get it without pickles and without onions?",
              formal: "I would like to order a cheeseburger, and I request that it be prepared without pickles or onions.",
            },
            culturalNote: '用 "without" 或 "no" 来去掉不想要的配料。也可以说 "hold the pickles"。',
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "No pickles, no onions. Got it. Anything else you'd like to change?",
            textZh: "不要泡菜，不要洋葱。好的。还有什么要改的吗？",
            casualVersion: "No pickles, no onions. Gotcha. Anything else?",
            formalityVariants: {
              casual: "No pickles, no onions. Gotcha. Anything else?",
              standard: "No pickles, no onions. Got it. Anything else you'd like to change?",
              formal: "Understood, without pickles or onions. Are there any further modifications you would like to make?",
            },
            keyPhrases: [
              { en: "no pickles", zh: "不要泡菜" },
              { en: "anything else to change", zh: "还有什么要改的" },
            ],
            alternativeExpressions: [
              {
                textEn: "No pickles, no onions — done. Anything else you wanna switch up?",
                textZh: "不要泡菜，不要洋葱——好了。还有什么要改的吗？",
                actionHint: "继续提修改要求",
                frequency: "common",
              },
              {
                textEn: "Got it, I'll hold the pickles and onions. Want to change anything else?",
                textZh: "收到，去掉泡菜和洋葱。还要改别的吗？",
                actionHint: "说出其他定制需求",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I get extra ketchup and mayo on it? And could I substitute the fries for onion rings?",
            textZh: "能多加点番茄酱和蛋黄酱吗？还有薯条能换成洋葱圈吗？",
            casualVersion: "Can I get extra ketchup and mayo? And can I swap the fries for onion rings?",
            commonMistake: {
              wrong: "Can I change fries to onion rings?",
              correct: "Can I substitute the fries for onion rings?",
              explanation: "\"change to\"用于指物体的状态变化，这里用\"substitute for\"或\"swap for\"更自然。",
            },
            formalityVariants: {
              casual: "Can I get extra ketchup and mayo? And can I swap the fries for onion rings?",
              standard: "Can I get extra ketchup and mayo on it? And could I substitute the fries for onion rings?",
              formal: "May I request additional ketchup and mayonnaise? Additionally, would it be possible to substitute the french fries with onion rings?",
            },
            keyPhrases: [
              { en: "extra", zh: "多加" },
              { en: "substitute", zh: "替换/换成" },
              { en: "onion rings", zh: "洋葱圈" },
            ],
          },
          {
            speaker: "them",
            role: "收银员",
            textEn:
              "Extra ketchup and mayo, no problem. Swapping fries for onion rings is 50 cents extra. Is that okay?",
            textZh: "多加番茄酱和蛋黄酱，没问题。薯条换洋葱圈要加50美分。可以吗？",
            casualVersion: "Extra ketchup and mayo, no problem. Fries for rings is 50 cents more. Cool?",
            formalityVariants: {
              casual: "Extra ketchup and mayo, no problem. Fries for rings is 50 cents more. Cool?",
              standard: "Extra ketchup and mayo, no problem. Swapping fries for onion rings is 50 cents extra. Is that okay?",
              formal: "Additional ketchup and mayonnaise will be no issue. Please note that substituting french fries for onion rings incurs an additional charge of fifty cents. Is that acceptable?",
            },
            keyPhrases: [
              { en: "swapping", zh: "替换" },
              { en: "extra charge", zh: "额外费用" },
            ],
            alternativeExpressions: [
              {
                textEn: "Extra sauce, sure. The onion rings are 50 cents more though. Cool with that?",
                textZh: "多加酱料没问题。不过洋葱圈要加50美分。可以吗？",
                actionHint: "确认是否接受加价",
                frequency: "common",
              },
              {
                textEn: "Ketchup and mayo — you got it. Switching to rings is a small upcharge, just 50 cents.",
                textZh: "番茄酱和蛋黄酱——没问题。换洋葱圈要加一点钱，50美分。",
                actionHint: "同意或换回薯条",
                frequency: "occasional",
              },
            ],
            responseTip: "换配菜通常有少量额外费用，问一下就好。",
          },
          {
            speaker: "you",
            textEn: "That's fine. Oh, and can you also add bacon? How much extra is that?",
            textZh: "没问题。对了，能加培根吗？加培根多少钱？",
            casualVersion: "Yeah, that's fine. And can I add bacon? How much for that?",
            commonMistake: {
              wrong: "Can I add bacon? How much extra money?",
              correct: "Can I add bacon? How much extra is that?",
              explanation: "\"extra money\"冗余，直接说\"how much extra\"或\"how much for that\"即可。",
            },
            formalityVariants: {
              casual: "Yeah, that's fine. And can I add bacon? How much for that?",
              standard: "That's fine. Oh, and can you also add bacon? How much extra is that?",
              formal: "That is acceptable. Furthermore, might I inquire about the possibility of adding bacon, and what the additional cost for that would be?",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Bacon is an extra dollar. So your total with the onion rings upgrade and bacon comes to $11.25.",
            textZh: "培根加1美元。加上洋葱圈升级和培根，总共11.25美元。",
            casualVersion: "Bacon's an extra buck. So with the rings and bacon, you're at $11.25.",
            formalityVariants: {
              casual: "Bacon's an extra buck. So with the rings and bacon, you're at $11.25.",
              standard: "Bacon is an extra dollar. So your total with the onion rings upgrade and bacon comes to $11.25.",
              formal: "Adding bacon will incur an additional charge of one dollar. Therefore, your grand total, including the onion rings upgrade and the added bacon, will be eleven dollars and twenty-five cents.",
            },
            alternativeExpressions: [
              {
                textEn: "Bacon's a buck extra. With everything, you're looking at $11.25.",
                textZh: "培根加一块钱。算上所有的，总共11.25美元。",
                actionHint: "确认或继续修改",
                frequency: "common",
              },
              {
                textEn: "Add a dollar for bacon. Your new total is $11.25 — that work?",
                textZh: "培根加1美元。新的总价是11.25——没问题吧？",
                actionHint: "同意就可以付款了",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds good. I'll take it.",
            textZh: "行，就这样。",
            commonMistake: {
              wrong: "Good. I want this.",
              correct: "Sounds good. I'll take that.",
              explanation: "避免直译的生硬表达，I'll take that 更自然",
            },
            casualVersion: "Yep, sounds good.",
            formalityVariants: {
              casual: "Yep, sounds good.",
              standard: "Sounds good. I'll take it.",
              formal: "That sounds acceptable. I will proceed with the order as specified.",
            },
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
              {
                textEn: "Hi, welcome to Burger Palace! Go ahead with your order.",
                textZh: "你好，欢迎来到汉堡宫！请直接点。",
                actionHint: "开始说你要点的东西",
                frequency: "common",
              },
              {
                textEn: "Hey there! Whenever you're ready!",
                textZh: "嗨！准备好了就说！",
                actionHint: "直接报出你要点的",
                frequency: "common",
              },
            ],
            culturalNote: "Drive-through的对讲机声音有时不太清楚，可能需要重复。",
            casualVersion: "Welcome to Burger Palace! Order when you're ready.",
            formalityVariants: {
              casual: "Burger Palace! Order when ready.",
              standard: "Welcome to Burger Palace! Order whenever you're ready.",
              formal: "Welcome to Burger Palace. Please take your time and order whenever you are prepared.",
            },
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
            casualVersion: "Hey, can I get two double cheeseburgers, a large fry, and a kids' meal with nuggets?",
            culturalNote: "在美式快餐店，点餐常用 'Can I get...' 或 'I'd like...'。",
            commonMistake: {
              wrong: "I want two double cheeseburgers...",
              correct: "Can I get two double cheeseburgers...",
              explanation: "I want 听起来太直接，用 Can I get 或 I'd like 更礼貌自然。",
            },
            formalityVariants: {
              casual: "Hey, lemme get two double cheeseburgers, a large fry, and a kids' meal with nuggets.",
              standard: "Hi, can I get two double cheeseburgers, one large fry, and a kids' meal with chicken nuggets?",
              formal:
                "Good afternoon. I would like to order two double cheeseburgers, one large portion of fries, and a children's meal with chicken nuggets, please.",
            },
          },
          {
            speaker: "them",
            role: "对讲机",
            textEn:
              "Okay, two double cheeseburgers, a large fry, and a kids' chicken nugget meal. What would the kids like to drink — milk, juice, or a small soda?",
            textZh: "好的，两个双层芝士汉堡、一份大薯条、一份鸡块儿童餐。小朋友要喝什么——牛奶、果汁还是小杯汽水？",
            alternativeExpressions: [
              {
                textEn: "Got it. For the kids' meal — what drink? We have milk, juice, or a small fountain drink.",
                textZh: "收到。儿童餐配什么喝的？有牛奶、果汁或小杯饮料。",
                actionHint: "选一个儿童饮品",
                frequency: "common",
              },
              {
                textEn: "Two doubles, large fry, kids' nuggets. And for the kids' drink — apple juice, milk, or soda?",
                textZh: "两个双层、大薯条、鸡块儿童餐。儿童饮料——苹果汁、牛奶还是汽水？",
                actionHint: "给小朋友选饮料",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Alright, two double cheeseburgers, large fry, kids' nugget meal. What drink for the kids? Milk, juice, or a small soda?",
            formalityVariants: {
              casual:
                "Got it. Two double cheeseburgers, large fry, kids' nuggets. What drink for the kids? Milk, juice, or soda?",
              standard:
                "Okay, two double cheeseburgers, a large fry, and a kids' chicken nugget meal. What would the kids like to drink — milk, juice, or a small soda?",
              formal:
                "Understood. That is two double cheeseburgers, one large order of fries, and one children's chicken nugget meal. Regarding the children's beverage, would they prefer milk, juice, or a small soft drink?",
            },
          },
          {
            speaker: "you",
            textEn: "Apple juice for the kids' meal. And two medium Cokes for us.",
            textZh: "儿童餐要苹果汁。我们要两杯中杯可乐。",
            casualVersion: "Apple juice for the kids. And two medium Cokes for us.",
            commonMistake: {
              wrong: "Kids' meal wants apple juice. We want two medium Cokes.",
              correct: "Apple juice for the kids' meal. And two medium Cokes for us.",
              explanation: '中式英语常直译 "想/要"，在英语中听起来不自然。',
            },
            formalityVariants: {
              casual: "Apple juice for the kids. Two medium Cokes for us.",
              standard: "Apple juice for the kids' meal. And two medium Cokes for us.",
              formal:
                "We will have apple juice for the children's meal, and two medium Coca-Colas for ourselves, please.",
            },
          },
          {
            speaker: "them",
            role: "对讲机",
            textEn: "Got it. Anything else?",
            textZh: "好的。还要别的吗？",
            alternativeExpressions: [
              {
                textEn: "Okay! Anything else I can add?",
                textZh: "好的！还要加什么吗？",
                actionHint: "不需要就说 that's everything",
                frequency: "common",
              },
              {
                textEn: "Want any dessert or extra sauces with that?",
                textZh: "要加甜品或者额外的酱料吗？",
                actionHint: "有需要就追加",
                frequency: "occasional",
              },
            ],
            casualVersion: "Got it. Anything else?",
            formalityVariants: {
              casual: "Got it. Anything else?",
              standard: "Got it. Anything else?",
              formal: "Understood. Will there be anything further?",
            },
          },
          {
            speaker: "you",
            textEn: "That's everything.",
            textZh: "就这些了。",
            casualVersion: "That's it.",
            commonMistake: {
              wrong: "This is everything.",
              correct: "That's everything.",
              explanation: "That's everything 或 That's it 是更自然的表达方式。",
            },
            formalityVariants: {
              casual: "That's it.",
              standard: "That's everything.",
              formal: "That will be all, thank you.",
            },
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
              {
                textEn: "That's $18.50. Drive up to the window, please!",
                textZh: "一共18.50。请开到窗口！",
                actionHint: "把车开到付款窗口",
                frequency: "common",
              },
              {
                textEn: "$18.50. Please pull around to the first window to pay.",
                textZh: "18.50美元。请绕到第一个窗口付款。",
                actionHint: "开车到指定窗口",
                frequency: "common",
              },
            ],
            culturalNote: "Drive-through通常有两个窗口：第一个付钱，第二个取餐。有些只有一个窗口。",
            casualVersion: "Your total's $18.50. Pull up to the first window.",
            formalityVariants: {
              casual: "Total's $18.50. Pull up to the first window.",
              standard: "Your total is $18.50. Please pull forward to the first window.",
              formal:
                "The total for your order is eighteen dollars and fifty cents. Kindly proceed to the first window.",
            },
          },
          {
            speaker: "them",
            role: "窗口",
            textEn: "$18.50, please. Out of $20? Here's $1.50 change. Please drive to the next window for your food.",
            textZh: "18.50美元。收您20？找您1.50。请开到下一个窗口取餐。",
            culturalNote: "Drive-through中在付款窗口通常会确认收到多少钱及找零",
            keyPhrases: [
              { en: "out of", zh: "收您(多少)" },
              { en: "change", zh: "找零" },
              { en: "next window", zh: "下一个窗口" },
            ],
            alternativeExpressions: [
              {
                textEn: "$18.50. Out of twenty — here's your change. Head to the next window for your food!",
                textZh: "18.50。收您20——找零给您。到下一个窗口取餐！",
                actionHint: "开到下一个窗口",
                frequency: "common",
              },
              {
                textEn: "That's $18.50. Paying with card? Tap or insert right here. Then head to the next window.",
                textZh: "18.50。刷卡吗？在这里刷一下。然后到下一个窗口。",
                actionHint: "付款后开到取餐窗口",
                frequency: "occasional",
              },
            ],
            casualVersion: "$18.50, please. Outta $20? Here's $1.50 change. Next window for your food.",
            formalityVariants: {
              casual: "$18.50. Outta $20? Here's your $1.50 change. Next window for food.",
              standard:
                "$18.50, please. Out of $20? Here's $1.50 change. Please drive to the next window for your food.",
              formal:
                "Eighteen dollars and fifty cents, please. From a twenty-dollar payment, your change is one dollar and fifty cents. Please proceed to the subsequent window to collect your order.",
            },
          },
          {
            speaker: "them",
            role: "窗口",
            textEn:
              "Here's your order! Two double cheeseburgers, large fry, kids' meal, two Cokes, and an apple juice. Napkins and ketchup are in the bag. Have a great day!",
            textZh: "这是您的餐！两个双层芝士汉堡、大薯条、儿童餐、两杯可乐和苹果汁。纸巾和番茄酱在袋子里。祝您愉快！",
            culturalNote: "取餐时服务人员会核对餐点并祝顾客愉快",
            alternativeExpressions: [
              {
                textEn: "Here you go! Everything's in the bag. Enjoy your meal!",
                textZh: "给您！全在袋子里了。用餐愉快！",
                actionHint: "核对一下东西齐不齐",
                frequency: "common",
              },
              {
                textEn: "Your order is all here. Napkins and condiments are inside. Have a good one!",
                textZh: "您的餐齐了。纸巾和调料在里面。祝您愉快！",
                actionHint: "检查袋子确认无误",
                frequency: "common",
              },
            ],
            casualVersion:
              "Here's your order! Two double cheeseburgers, large fry, kids' meal, two Cokes, apple juice. Napkins, ketchup in the bag. Have a good one!",
            formalityVariants: {
              casual:
                "Here's your food! Two double cheeseburgers, large fry, kids' meal, two Cokes, apple juice. Napkins, ketchup in the bag. Enjoy!",
              standard:
                "Here's your order! Two double cheeseburgers, large fry, kids' meal, two Cokes, and an apple juice. Napkins and ketchup are in the bag. Have a great day!",
              formal:
                "Here is your completed order. It includes two double cheeseburgers, one large order of fries, one children's meal, two Coca-Colas, and one apple juice. Your napkins and ketchup packets are enclosed within the bag. We wish you a pleasant day!",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you! You too!",
            textZh: "谢谢！你也是！",
            commonMistake: {
              wrong: "Thank you! You also!",
              correct: "Thank you! You too!",
              explanation: "'You too!' 是更自然的对祝愿的回应",
            },
            casualVersion: "Thanks! You too!",
            formalityVariants: {
              casual: "Thanks! You too!",
              standard: "Thank you! You too!",
              formal: "Thank you very much! And the same to you!",
            },
          },
        ],
      },
    ],
  },

  // ==================== 咖啡店 ====================
  {
    id: "restaurant-coffee",
    tags: ["coffee", "咖啡", "starbucks", "latte"],
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
              {
                textEn: "Morning! What can I make for you?",
                textZh: "早！要我给你做什么？",
                actionHint: "说出你想要的咖啡",
                frequency: "common",
              },
              {
                textEn: "Hey! Welcome in. Know what you'd like?",
                textZh: "嗨！欢迎。想好了吗？",
                actionHint: "直接点或先看菜单",
                frequency: "occasional",
              },
            ],
            casualVersion: "Hey, what can I get you?",
            formalityVariants: {
              casual: "Hey, what can I get you?",
              standard: "Hi there! What can I get started for you?",
              formal: "Good morning/afternoon, how may I assist you?",
            },
          },
          {
            speaker: "you",
            textEn: "Can I get a medium latte, please?",
            textZh: "我要一杯中杯拿铁。",
            culturalNote: "咖啡店的杯型各家不同。星巴克用Tall/Grande/Venti，其他店通常用Small/Medium/Large。",
            casualVersion: "Just a medium latte.",
            commonMistake: {
              wrong: "I want a medium latte.",
              correct: "Can I get a medium latte?",
              explanation: "“I want” 语气太直接，用 “Can I get” 或 “I'd like” 更礼貌自然。",
            },
            formalityVariants: {
              casual: "Just a medium latte.",
              standard: "Can I get a medium latte, please?",
              formal: "I would like to order a medium latte, if possible.",
            },
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Sure! Would you like that hot or iced?",
            textZh: "好的！要热的还是冰的？",
            keyPhrases: [{ en: "hot or iced", zh: "热的还是冰的" }],
            alternativeExpressions: [
              {
                textEn: "You want that hot or over ice?",
                textZh: "要热的还是加冰的？",
                actionHint: "选热或冰",
                frequency: "common",
              },
              { textEn: "Hot or cold?", textZh: "热的还是凉的？", actionHint: "告诉对方你的选择", frequency: "common" },
            ],
            casualVersion: "Hot or iced?",
            formalityVariants: {
              casual: "Hot or iced?",
              standard: "Sure! Would you like that hot or iced?",
              formal: "Certainly. Would you prefer that prepared hot or iced?",
            },
          },
          {
            speaker: "you",
            textEn: "Hot, please.",
            textZh: "热的。",
            casualVersion: "Hot.",
            formalityVariants: {
              casual: "Hot.",
              standard: "Hot, please.",
              formal: "I would prefer it hot, thank you.",
            },
            commonMistake: {
              wrong: "Medium. Add 6 pieces chicken nuggets.",
              correct: "Medium, please. And can I add a 6-piece chicken nuggets?",
              explanation: "需要主语和动词，并用“can I add”来表示请求，更自然礼貌。",
            },
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
              {
                textEn: "What milk would you like? We've got regular, oat, almond, or soy.",
                textZh: "要什么奶？有普通奶、燕麦奶、杏仁奶和豆奶。",
                actionHint: "选一种奶",
                frequency: "common",
              },
              {
                textEn: "Any milk preference? We have dairy and non-dairy options.",
                textZh: "奶有偏好吗？有含乳和非乳的选择。",
                actionHint: "说出你想要的奶种类",
                frequency: "occasional",
              },
            ],
            casualVersion: "What kind of milk? We got whole, skim, oat, almond, soy.",
            formalityVariants: {
              casual: "What milk? We got whole, skim, oat, almond, soy.",
              standard: "And what kind of milk? We have whole, skim, oat, almond, and soy.",
              formal: "And regarding milk preference, we offer whole, skim, oat, almond, and soy options.",
            },
          },
          {
            speaker: "you",
            textEn: "Oat milk, please.",
            textZh: "燕麦奶。",
            casualVersion: "Oat milk.",
            formalityVariants: {
              casual: "Oat milk.",
              standard: "Oat milk, please.",
              formal: "I would prefer oat milk, please.",
            },
            commonMistake: {
              wrong: "BBQ sauce. No pickle for the burger.",
              correct: "BBQ sauce, please. Oh, and no pickles on the burger.",
              explanation: 'Pickles常用复数，且用"on the burger"指明位置。',
            },
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Oat milk latte, hot, medium. Can I get a name for the order?",
            textZh: "燕麦奶拿铁，热的，中杯。名字是？",
            commonMistake: {
              wrong: "My name is Wayne",
              correct: "Wayne",
              explanation: "直接说名字更自然，无需 My name is",
            },
            keyPhrases: [{ en: "name for the order", zh: "取单的名字" }],
            alternativeExpressions: [
              {
                textEn: "Oat milk latte, medium, hot. What name?",
                textZh: "燕麦奶拿铁，中杯，热的。叫什么名字？",
                actionHint: "说你的名字",
                frequency: "common",
              },
              {
                textEn: "Got it — oat latte, hot, medium. And your name is?",
                textZh: "收到——燕麦拿铁，热的，中杯。您贵姓？",
                actionHint: "报上名字方便取餐",
                frequency: "common",
              },
            ],
            casualVersion: "Alright, oat milk latte, hot, medium. Name?",
            culturalNote: "在美国咖啡店点单常会问名字，方便区分订单。",
            formalityVariants: {
              casual: "Oat milk latte, hot, medium. Name?",
              standard: "Oat milk latte, hot, medium. Can I get a name for the order?",
              formal: "Alright, a medium hot oat milk latte. May I please have a name for this order?",
            },
          },
          {
            speaker: "you",
            textEn: "Wayne.",
            textZh: "Wayne。",
            casualVersion: "Wayne.",
            formalityVariants: {
              casual: "Wayne.",
              standard: "Wayne.",
              formal: "My name is Wayne.",
            },
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Got it! That'll be $5.50. I'll have it ready at the end of the bar.",
            textZh: "好的！5.50美元。在吧台那头取。",
            keyPhrases: [{ en: "end of the bar", zh: "吧台那头" }],
            alternativeExpressions: [
              {
                textEn: "That's $5.50. Pick it up at the other end when your name's called.",
                textZh: "5.50美元。叫到你名字的时候去另一头取。",
                actionHint: "付款后去取餐处等",
                frequency: "common",
              },
              {
                textEn: "$5.50. It'll be ready in a couple minutes — just wait by the pickup counter.",
                textZh: "5.50。几分钟就好——在取餐台那边等一下。",
                actionHint: "在取餐台附近等候",
                frequency: "common",
              },
            ],
            casualVersion: "Okay, $5.50. Be ready at the end of the bar.",
            formalityVariants: {
              casual: "Okay, $5.50. Ready at the end of the bar.",
              standard: "Got it! That'll be $5.50. I'll have it ready at the end of the bar.",
              formal:
                "Thank you. Your total will be $5.50, and your order will be prepared and available for pickup at the far end of the counter.",
            },
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
              {
                textEn: "Hi! What are we making for you today?",
                textZh: "你好！今天给你做什么？",
                actionHint: "说出你的定制饮品",
                frequency: "common",
              },
              {
                textEn: "What can I whip up for you?",
                textZh: "给你调什么？",
                actionHint: "描述你想要的饮品",
                frequency: "occasional",
              },
            ],
            casualVersion: "Hey! What can I get ya?",
            formalityVariants: {
              casual: "What can I get ya?",
              standard: "Hey! What can I get for you?",
              formal: "Good morning/afternoon, what may I get for you today?",
            },
          },
          {
            speaker: "you",
            textEn: "I'd like a large iced vanilla latte with oat milk, but can you make it with decaf?",
            textZh: "我要一杯大杯冰的香草拿铁，用燕麦奶，能做无咖啡因的吗？",
            keyPhrases: [
              { en: "vanilla", zh: "香草" },
              { en: "decaf", zh: "无咖啡因/低咖啡因" },
            ],
            casualVersion: "Can I get a large iced vanilla latte, oat milk, but like, decaf?",
            commonMistake: {
              wrong: "I want a large iced vanilla latte with oat milk, but can you make it with decaf?",
              correct: "I'd like a large iced vanilla latte with oat milk, but can you make it with decaf?",
              explanation: "I want 听起来很直接，用 I'd like 更礼貌。'I'd like' 比 'I want' 更常用。",
            },
            formalityVariants: {
              casual: "Gimme a large iced vanilla latte, oat milk, decaf.",
              standard: "I'd like a large iced vanilla latte with oat milk, but can you make it with decaf?",
              formal:
                "Excuse me, I would appreciate a large iced vanilla latte made with oat milk, and I was wondering if it would be possible to prepare it decaffeinated?",
            },
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
              {
                textEn: "For sure! Standard is three pumps of vanilla for that size. Want more or less?",
                textZh: "没问题！这个杯型标准是三泵香草。要多还是少？",
                actionHint: "说出你想要的泵数",
                frequency: "common",
              },
              {
                textEn: "Decaf, no problem! How sweet do you want it? Three pumps is the default.",
                textZh: "无咖啡因没问题！要多甜？默认是三泵。",
                actionHint: "调整甜度",
                frequency: "occasional",
              },
            ],
            culturalNote: '"pump" 是咖啡店里糖浆的计量单位。可以要求加减泵数来调甜度。',
            casualVersion: "Sure! How many vanilla pumps? Three's standard for a large.",
            formalityVariants: {
              casual: "Sure! How many vanilla pumps? Three's standard for a large.",
              standard: "Absolutely! How many pumps of vanilla would you like? Standard is three for a large.",
              formal:
                "Certainly! Regarding the vanilla syrup, how many pumps would you prefer? The standard amount for a large size is typically three.",
            },
          },
          {
            speaker: "you",
            textEn: "Just two pumps — I don't want it too sweet. And can I also add a pump of caramel?",
            textZh: "两泵就好——我不想太甜。能再加一泵焦糖吗？",
            casualVersion: "Just two pumps, don't want it too sweet. Can I get a caramel pump too?",
            commonMistake: {
              wrong: "I want two pumps, I don't want it too sweet. And can I add a pump of caramel?",
              correct: "Just two pumps — I don't want it too sweet. And can I also add a pump of caramel?",
              explanation: "直接说 'Just two pumps' 更自然，'get' 更口语化。",
            },
            formalityVariants: {
              casual: "Just two, don't want it super sweet. And, can I get a caramel pump?",
              standard: "Just two pumps — I don't want it too sweet. And can I also add a pump of caramel?",
              formal:
                "I believe two pumps would suffice, as I prefer it not to be overly sweet. Furthermore, would it be possible to include an additional pump of caramel syrup?",
            },
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Two vanilla, one caramel. Would you like whipped cream on top?",
            textZh: "两泵香草，一泵焦糖。要加奶油吗？",
            keyPhrases: [{ en: "whipped cream", zh: "奶油/鲜奶油" }],
            alternativeExpressions: [
              {
                textEn: "Two vanilla, one caramel — got it. Whip on top?",
                textZh: "两泵香草，一泵焦糖——好的。上面加奶油吗？",
                actionHint: "要或不要奶油",
                frequency: "common",
              },
              {
                textEn: "Okay, two and one. Do you want any toppings? Whipped cream, drizzle?",
                textZh: "好的，两泵一泵。要加什么吗？奶油、淋酱？",
                actionHint: "说出要不要加料",
                frequency: "occasional",
              },
            ],
            casualVersion: "Two vanilla, one caramel. Whip cream on that?",
            formalityVariants: {
              casual: "Two vanilla, one caramel. Whip cream on that?",
              standard: "Two vanilla, one caramel. Would you like whipped cream on top?",
              formal:
                "Understood. Two pumps of vanilla and one pump of caramel. Would you care for whipped cream as a topping?",
            },
          },
          {
            speaker: "you",
            textEn:
              "No whipped cream, thanks. But could I get an extra shot of espresso? I know it's decaf, but I want it stronger in flavor.",
            textZh: "不要奶油，谢谢。但能加一份浓缩咖啡吗？虽然是无咖啡因的，但我想要味道浓一点。",
            keyPhrases: [
              { en: "extra shot", zh: "加一份浓缩" },
              { en: "espresso", zh: "浓缩咖啡" },
            ],
            casualVersion:
              "No whip, thanks. But can I get an extra shot? I know it's decaf, but I want that flavor stronger.",
            commonMistake: {
              wrong: "I don't want whipped cream, thank you. But can I add an extra shot of espresso?",
              correct: "No whipped cream, thanks. But could I get an extra shot of espresso?",
              explanation: "直接说 'No whipped cream' 更自然。 'add' 不如 'get' 口语化。",
            },
            formalityVariants: {
              casual: "No whip, thanks. Can I get an extra shot? Decaf, I know, but I want it stronger.",
              standard:
                "No whipped cream, thanks. But could I get an extra shot of espresso? I know it's decaf, but I want it stronger in flavor.",
              formal:
                "Thank you, but I will decline the whipped cream. However, I was wondering if it would be possible to include an additional shot of espresso? I am aware it is decaffeinated, yet I would appreciate a more robust flavor.",
            },
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn:
              "No problem! Extra decaf shot added. So that's a large iced decaf oat milk latte, two pumps vanilla, one pump caramel, extra shot, no whip. That'll be $7.25.",
            textZh:
              "没问题！加一份无咖啡因浓缩。所以是大杯冰的无咖啡因燕麦奶拿铁，两泵香草，一泵焦糖，加一份浓缩，不要奶油。7.25美元。",
            keyPhrases: [{ en: "no whip", zh: "不要奶油" }],
            alternativeExpressions: [
              {
                textEn:
                  "Let me repeat that back — large iced decaf oat latte, two vanilla, one caramel, extra shot, no whip. $7.25.",
                textZh: "我重复一下——大杯冰的无咖啡因燕麦拿铁，两泵香草，一泵焦糖，加一份浓缩，不要奶油。7.25。",
                actionHint: "仔细听确认无误",
                frequency: "common",
              },
              {
                textEn:
                  "Okay, I've got a large iced decaf oat latte with vanilla and caramel, extra shot, skip the whip. That's $7.25.",
                textZh: "好的，大杯冰无咖啡因燕麦拿铁，香草加焦糖，加一份浓缩，不要奶油。7.25美元。",
                actionHint: "核对订单再付款",
                frequency: "occasional",
              },
            ],
            responseTip: "咖啡师重复一遍你的定制订单是为了确认，仔细听看有没有遗漏或说错的。",
            casualVersion:
              "No prob! Extra decaf shot. So, large iced decaf oat milk latte, two vanilla, one caramel, extra shot, no whip. $7.25.",
            formalityVariants: {
              casual:
                "No prob! Extra decaf shot in there. So, large iced decaf oat milk latte, two vanilla, one caramel, extra shot, no whip. Total's $7.25.",
              standard:
                "No problem! Extra decaf shot added. So that's a large iced decaf oat milk latte, two pumps vanilla, one pump caramel, extra shot, no whip. That'll be $7.25.",
              formal:
                "Understood. An additional decaffeinated shot has been included. To confirm, your order is a large iced decaf oat milk latte, with two pumps of vanilla, one pump of caramel, an extra shot, and no whipped cream. Your total will be $7.25.",
            },
          },
          {
            speaker: "you",
            textEn: "That's perfect. Thank you!",
            textZh: "完全正确。谢谢！",
            commonMistake: {
              wrong: "Right. Thanks!",
              correct: "That's exactly right. Thanks!",
              explanation: "直接说 Right 略显生硬，That's exactly right 更自然",
            },
            casualVersion: "Perfect! Thanks!",
            formalityVariants: {
              casual: "Perfect! Thanks!",
              standard: "That's perfect. Thank you!",
              formal: "Excellent, that sounds correct. Thank you very much!",
            },
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
            casualVersion: "Hey, got WiFi here?",
            commonMistake: {
              wrong: "Hello, do you have WiFi here?",
              correct: "Hi, do you have WiFi here?",
              explanation: "“Hello”在口语中不如“Hi”自然，在提问前用“Excuse me”引起注意也很好。",
            },
            formalityVariants: {
              casual: "Hey, got WiFi?",
              standard: "Hi, do you have WiFi here?",
              formal: "Excuse me, could you tell me if there is WiFi available here?",
            },
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn:
              'Yes! The network name is "CoffeeHouse-Guest" and the password is on your receipt. I\'ll circle it for you.',
            textZh: '有的！网络名是 "CoffeeHouse-Guest"，密码在收据上。我给你圈出来。',
            keyPhrases: [
              { en: "network name", zh: "网络名" },
              { en: "password", zh: "密码" },
              { en: "receipt", zh: "收据" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yeah! Network is CoffeeHouse-Guest, password's on the receipt. Here, I'll write it down.",
                textZh: "有的！网络是 CoffeeHouse-Guest，密码在收据上。我帮你写下来。",
                actionHint: "看收据上的密码连WiFi",
                frequency: "common",
              },
              {
                textEn: "Sure! It's free WiFi. The password changes weekly — check your receipt.",
                textZh: "当然！免费WiFi。密码每周换——看你的收据。",
                actionHint: "从收据找密码",
                frequency: "occasional",
              },
            ],
            casualVersion: "Yep! Network name's \\",
            formalityVariants: {
              casual: "Yep! It's \\",
              standard: "Yes! The network name is \\",
              formal: "Yes, indeed. The network name is \\",
            },
          },
          {
            speaker: "you",
            textEn:
              "Great, thanks. I need to do some work on my laptop. Are there any seats with power outlets nearby?",
            textZh: "太好了，谢谢。我需要用笔记本电脑办公。有靠近电源插座的座位吗？",
            keyPhrases: [
              { en: "power outlets", zh: "电源插座" },
              { en: "laptop", zh: "笔记本电脑" },
            ],
            casualVersion: "Cool, thanks. Gotta do some laptop work. Any seats with outlets close by?",
            commonMistake: {
              wrong: "I want to work on my laptop. Have seats with power outlets?",
              correct: "I need to do some work on my laptop. Are there any seats with power outlets nearby?",
              explanation: "中式英语的直译，缺少主语和连接词，也不够委婉。",
            },
            formalityVariants: {
              casual: "Cool, thanks. Need to do some laptop work. Any seats with outlets nearby?",
              standard:
                "Great, thanks. I need to do some work on my laptop. Are there any seats with power outlets nearby?",
              formal:
                "Thank you. I plan to work on my laptop for a bit. Could you please advise if there are any seating areas with power outlets in proximity?",
            },
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn:
              "Sure! The long table by the wall has outlets underneath, and there are a couple of spots in the back corner with plugs too. The back corner is usually quieter if you need to focus.",
            textZh:
              "有的！靠墙的长桌下面有插座，后面角落也有几个有插头的位置。后面的角落通常比较安静，如果你需要专心的话。",
            culturalNote: "美国咖啡店是很常见的办公场所，有插座和安静环境是很受欢迎的",
            keyPhrases: [
              { en: "outlets underneath", zh: "下面有插座" },
              { en: "back corner", zh: "后面角落" },
              { en: "quieter", zh: "更安静" },
            ],
            alternativeExpressions: [
              {
                textEn: "The wall seats all have outlets. Or there's a quiet spot in the back with plugs too.",
                textZh: "靠墙的座位都有插座。后面也有个安静的位置有插头。",
                actionHint: "选一个有插座的座位",
                frequency: "common",
              },
              {
                textEn: "Check the long table by the window — outlets are under the table. Great for laptops!",
                textZh: "看看靠窗的长桌——桌下有插座。用笔记本电脑很方便！",
                actionHint: "去推荐的位置坐",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah! Long table by the wall's got outlets underneath, and a couple spots in the back corner have plugs too. Back corner's usually quieter if you gotta focus.",
            formalityVariants: {
              casual:
                "Yep! Long table by the wall has outlets, and a few spots in the back corner too. Back corner's usually quieter.",
              standard:
                "Sure! The long table by the wall has outlets underneath, and there are a couple of spots in the back corner with plugs too. The back corner is usually quieter if you need to focus.",
              formal:
                "Certainly. The extended table situated alongside the wall features power outlets beneath, and there are also a few designated areas in the rear corner equipped with electrical connections. The back corner typically offers a more serene environment should you require concentrated work.",
            },
          },
          {
            speaker: "you",
            textEn: "Is there a time limit for how long I can stay?",
            textZh: "有时间限制吗？能待多久？",
            culturalNote: "美国咖啡馆通常没有强制的停留时间限制",
            casualVersion: "Any time limit for how long I can stay?",
            commonMistake: {
              wrong: "How long can I stay?",
              correct: "Is there a time limit for how long I can stay?",
              explanation: "直接问“How long can I stay”可能听起来不礼貌，",
            },
            formalityVariants: {
              casual: "Any time limit here?",
              standard: "Is there a time limit for how long I can stay?",
              formal: "May I inquire if there is a specific time limit for patrons to remain on the premises?",
            },
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn:
              "We don't have a strict limit, but during peak hours we do ask people to be mindful if it's really crowded. On a day like today, you're welcome to stay as long as you'd like!",
            textZh: "没有严格限制，但高峰时段如果很挤的话，希望大家互相体谅一下。像今天这样的话，想待多久都可以！",
            keyPhrases: [
              { en: "time limit", zh: "时间限制" },
              { en: "peak hours", zh: "高峰时段" },
              { en: "be mindful", zh: "注意/体谅" },
            ],
            alternativeExpressions: [
              {
                textEn: "No time limit! Just be considerate if it gets super busy. Today's pretty chill though.",
                textZh: "没有时间限制！人多的时候互相体谅一下就好。今天挺空的。",
                actionHint: "安心坐着办公",
                frequency: "common",
              },
              {
                textEn:
                  "Nah, stay as long as you want! We only ask folks to grab a drink every couple hours when it's packed.",
                textZh: "不用担心，想待多久待多久！人多的时候每隔两小时点杯饮料就行。",
                actionHint: "待久了可以再点一杯",
                frequency: "occasional",
              },
            ],
            culturalNote:
              "欧美咖啡店通常允许长时间逗留办公，但高峰时段(如早上通勤时间)最好不要占座太久。买杯饮料是基本礼貌。",
            casualVersion:
              "No strict limit, but during peak hours we kinda ask people to be mindful if it's packed. Today though, stay as long as you want!",
            formalityVariants: {
              casual:
                "No strict limit, but peak hours, gotta be mindful if it's super crowded. Today, stay as long as you want!",
              standard:
                "We don't have a strict limit, but during peak hours we do ask people to be mindful if it's really crowded. On a day like today, you're welcome to stay as long as you'd like!",
              formal:
                "While we do not enforce a strict time limit, we kindly request patrons to be considerate of others during peak operating hours should the establishment become notably crowded. However, on a day such as today, you are most welcome to remain for as long as you desire.",
            },
          },
          {
            speaker: "you",
            textEn: "Good to know. One more thing — do you have any food? I might want a snack later.",
            textZh: "了解了。还有个问题——有吃的吗？我待会可能想吃点东西。",
            casualVersion: "Got it. Oh, another thing — got any food? Might want a snack later.",
            commonMistake: {
              wrong: "Do you have food?",
              correct: "Do you have any food?",
              explanation: "询问“有没有”时用“any”听起来更自然和礼貌。",
            },
            formalityVariants: {
              casual: "Got it. Another thing—any food? Might want a snack later.",
              standard: "Good to know. One more thing — do you have any food? I might want a snack later.",
              formal:
                "Thank you for the information. Additionally, I was wondering if you offer any food items? I may wish to purchase a snack at a later time.",
            },
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn:
              "We have pastries, sandwiches, and salads in the display case right there. We also have a full food menu — I can grab one for you if you'd like.",
            textZh: "展示柜里有糕点、三明治和沙拉。我们也有完整的餐食菜单——需要的话我拿给你。",
            keyPhrases: [
              { en: "pastries", zh: "糕点/面包" },
              { en: "display case", zh: "展示柜" },
              { en: "food menu", zh: "餐食菜单" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep! Pastries and sandwiches are in the case up front. We've also got a lunch menu if you're hungry later.",
                textZh: "有的！糕点和三明治在前面的柜子里。如果待会饿了我们也有午餐菜单。",
                actionHint: "去展示柜看看或要一份菜单",
                frequency: "common",
              },
              {
                textEn: "Sure do! Check out the display case. We also bake fresh muffins every hour.",
                textZh: "当然有！看看展示柜。我们每小时还烤新鲜的松饼。",
                actionHint: "去展示柜挑选",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Got pastries, sandwiches, and salads in that display case. Plus, there's a full food menu—can grab one for ya if you want.",
            formalityVariants: {
              casual: "Pastries, sandwiches, salads in that case. Full menu too—can grab one if you want.",
              standard:
                "We have pastries, sandwiches, and salads in the display case right there. We also have a full food menu — I can grab one for you if you'd like.",
              formal:
                "We offer a selection of pastries, sandwiches, and salads, which are located in the display case you see there. Furthermore, we maintain a comprehensive food menu, which I would be happy to retrieve for you should you desire.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll check the display case later. Thanks for all the help!",
            textZh: "我待会看看展示柜。谢谢！",
            casualVersion: "I'll check the display case later. Thanks for all the help!",
            commonMistake: {
              wrong: "Thank you for your help.",
              correct: "Thanks for all the help!",
              explanation: "“all the help”表示对多种帮助的感谢，听起来更真诚自然。",
            },
            formalityVariants: {
              casual: "I'll check the case later. Thanks for the help!",
              standard: "I'll check the display case later. Thanks for all the help!",
              formal:
                "I will examine the display case at a later juncture. Thank you kindly for your comprehensive assistance.",
            },
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
            casualVersion: "Hey, what can I get ya?",
            formalityVariants: {
              casual: "Hey, what can I get ya?",
              standard: "Hello there, what can I get you?",
              formal: "Good evening, how may I assist you with your order?",
            },
            variations: [
              { textEn: "What'll it be?", textZh: "要什么？" },
              { textEn: "What are you drinking tonight?", textZh: "今晚喝什么？" },
            ],
            alternativeExpressions: [
              {
                textEn: "Hey folks! What are we having?",
                textZh: "嗨！你们喝什么？",
                actionHint: "说出你想喝的或问推荐",
                frequency: "common",
              },
              {
                textEn: "What's your poison tonight?",
                textZh: "今晚喝什么好的？",
                actionHint: "这是酒吧常用的俏皮问法",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What do you have on tap?",
            textZh: "有什么生啤？",
            casualVersion: "What's on tap?",
            commonMistake: {
              wrong: "What beer do you have from tap?",
              correct: "What do you have on tap?",
              explanation: "'on tap' 是固定搭配，指生啤。",
            },
            formalityVariants: {
              casual: "What's on tap?",
              standard: "What do you have on tap?",
              formal: "Could you please list your current draft selections?",
            },
            keyPhrases: [{ en: "on tap", zh: "生啤/扎啤" }],
            culturalNote: '"On tap" 指的是从酒桶直接倒出来的新鲜啤酒，和瓶装(bottled)或罐装(canned)不同。',
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn:
              "We've got a local IPA, a pilsner, a wheat beer, and Guinness on tap. We also have a full bottle and can list if you want something else.",
            textZh: "有本地IPA、皮尔森、小麦啤酒和吉尼斯生啤。也有完整的瓶装和罐装酒单。",
            casualVersion: "Got a local IPA, Pilsner, Wheat, and Guinness on tap. Plus full bottle and can list.",
            formalityVariants: {
              casual: "Got a local IPA, Pilsner, Wheat, and Guinness on tap. Plus full bottle and can list.",
              standard: "We have a local IPA, a Pilsner, a Wheat Beer, and Guinness on tap. We also have a full bottle and can list.",
              formal: "Our draft selections include a local IPA, a Pilsner, a Wheat Beer, and Guinness. Additionally, we offer an extensive selection of bottled and canned beverages.",
            },
            keyPhrases: [
              { en: "IPA", zh: "印度淡色艾尔(一种精酿啤酒)" },
              { en: "pilsner", zh: "皮尔森(一种清爽的啤酒)" },
              { en: "wheat beer", zh: "小麦啤酒" },
              { en: "on tap", zh: "生啤" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "On tap we've got IPA, pilsner, wheat, and Guinness. Plus bottles and cans if you want something different.",
                textZh: "生啤有IPA、皮尔森、小麦和吉尼斯。瓶装罐装的也有，如果想换口味的话。",
                actionHint: "选一种啤酒",
                frequency: "common",
              },
              {
                textEn:
                  "We have four on tap tonight — a local IPA, pilsner, wheat beer, and a Guinness. Want to try a sample?",
                textZh: "今晚有四种生啤——本地IPA、皮尔森、小麦和吉尼斯。要试喝吗？",
                actionHint: "可以先试再选",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll try the local IPA. Can I get a pint?",
            textZh: "我试试本地IPA。来一品脱。",
            casualVersion: "I'll do the local IPA. Pint, please.",
            commonMistake: {
              wrong: "I want a pint IPA.",
              correct: "I'll take a pint of the IPA.",
              explanation: "点酒时常用 'I'll take/have'，而不是 'I want'。",
            },
            formalityVariants: {
              casual: "I'll do the local IPA. Pint, please.",
              standard: "I'll try the local IPA. A pint, please.",
              formal: "I would like to order a pint of the local IPA, please.",
            },
            keyPhrases: [{ en: "pint", zh: "品脱(约473毫升)" }],
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Good choice. And for your friend?",
            textZh: "好选择。你朋友呢？",
            casualVersion: "Good choice. Your friend?",
            formalityVariants: {
              casual: "Good choice. Your friend?",
              standard: "Good choice. And for your friend?",
              formal: "An excellent selection. What may I get for your companion?",
            },
            alternativeExpressions: [
              {
                textEn: "Nice pick! What about the other person?",
                textZh: "选得好！另一位呢？",
                actionHint: "帮朋友点酒",
                frequency: "common",
              },
              {
                textEn: "Great choice. And what's she having?",
                textZh: "好选择。她要喝什么？",
                actionHint: "说出朋友想喝的",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "She'll have a glass of red wine — do you have a Cabernet?",
            textZh: "她要一杯红酒——有赤霞珠吗？",
            casualVersion: "She'll do a red – got any Cab Sauv?",
            commonMistake: {
              wrong: "She wants red wine.",
              correct: "She'll have a red wine.",
              explanation: "同上，点酒时 'wants' 不太礼貌。",
            },
            formalityVariants: {
              casual: "She'll do a red – got any Cab Sauv?",
              standard: "She'll have a red wine – do you have Cabernet Sauvignon?",
              formal: "My friend would prefer a red wine; do you offer a Cabernet Sauvignon?",
            },
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
            casualVersion: "Got a Napa Cab and a Chilean. Napa's 14, Chilean's 10.",
            formalityVariants: {
              casual: "Got a Napa Cab and a Chilean. Napa's 14, Chilean's 10.",
              standard: "We have a Napa Valley Cabernet and a Chilean one. The Napa is $14 a glass, the Chilean is $10.",
              formal: "We offer a Cabernet Sauvignon from Napa Valley at $14 per glass, and a Chilean Cabernet Sauvignon at $10 per glass.",
            },
            alternativeExpressions: [
              {
                textEn: "We've got two Cabs — a California one for $14 and a Chilean for $10. Both solid.",
                textZh: "赤霞珠有两款——加州的14美元，智利的10美元。都不错。",
                actionHint: "选一个价位",
                frequency: "common",
              },
              {
                textEn: "Yeah! A Napa Cab at $14 and a Chilean at $10. Want to start with a taste?",
                textZh: "有的！纳帕赤霞珠14美元，智利10美元。要先尝一口吗？",
                actionHint: "可以先试再决定",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "The Chilean one is fine. Thanks!",
            textZh: "智利的就好。谢谢！",
            casualVersion: "Chilean's fine. Thanks!",
            formalityVariants: {
              casual: "Chilean's fine. Thanks!",
              standard: "The Chilean one is fine. Thanks!",
              formal: "The Chilean selection will be perfectly acceptable, thank you.",
            },
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Coming right up!",
            textZh: "马上来！",
            casualVersion: "Comin' right up!",
            formalityVariants: {
              casual: "Comin' right up!",
              standard: "Coming right up!",
              formal: "Your order will be prepared and served momentarily.",
            },
            keyPhrases: [{ en: "coming right up", zh: "马上来" }],
            alternativeExpressions: [
              {
                textEn: "On it! Give me just a sec.",
                textZh: "马上！稍等一下。",
                actionHint: "等调酒师准备",
                frequency: "common",
              },
              {
                textEn: "You got it! Be right back with those.",
                textZh: "没问题！马上给你们端来。",
                actionHint: "稍等取酒",
                frequency: "common",
              },
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
            casualVersion: "Can I start a tab?",
            commonMistake: {
              wrong: "Can I open a bill?",
              correct: "Can I open a tab?",
              explanation: "酒吧里'开单子'用 'open a tab'，而不是 'bill'。",
            },
            formalityVariants: {
              casual: "Can I start a tab?",
              standard: "Can I open a tab?",
              formal: "Would it be possible to initiate a tab, please?",
            },
            culturalNote: '"Tab" 是在酒吧先不付钱，最后一起结账。通常需要压一张信用卡。',
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Sure! Can I get a card to keep on file?",
            textZh: "当然！给我一张卡先压着。",
            casualVersion: "Sure! Card to keep on file?",
            culturalNote: "开tab通常需要押信用卡",
            formalityVariants: {
              casual: "Sure! Card to keep on file?",
              standard: "Sure! Can I get a card to keep on file?",
              formal: "Certainly. May I have a credit card to hold on file for your tab?",
            },
            keyPhrases: [
              { en: "open a tab", zh: "开Tab/先挂账" },
              { en: "card to keep on file", zh: "压一张卡" },
            ],
            alternativeExpressions: [
              {
                textEn: "Of course! Just need a credit card to hold. I'll keep the tab open for you.",
                textZh: "当然！只需要一张信用卡。我帮你开着Tab。",
                actionHint: "递上信用卡",
                frequency: "common",
              },
              {
                textEn: "Sure thing! Can I see a card? I'll start a tab for you.",
                textZh: "没问题！给我一张卡？我帮你开个Tab。",
                actionHint: "把卡给调酒师",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Here you go. We'll probably order a few rounds tonight.",
            textZh: "给你。我们今晚应该会再点几轮。",
            casualVersion: "Here ya go. Probably ordering a few more rounds tonight.",
            formalityVariants: {
              casual: "Here ya go. Probably ordering a few more rounds tonight.",
              standard: "Here you go. We'll probably be ordering a few more rounds tonight.",
              formal: "Here is my card. We anticipate placing additional orders throughout the evening.",
            },
            keyPhrases: [{ en: "a few rounds", zh: "几轮(酒)" }],
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "No problem. I'll keep it open. Just wave me down when you need another round.",
            textZh: "没问题。Tab开着。要续杯的时候招呼我就行。",
            casualVersion: "No problem. Tab's open. Just flag me when ya want a refill.",
            formalityVariants: {
              casual: "No problem. Tab's open. Just flag me when ya want a refill.",
              standard: "No problem. I'll keep your tab open. Just flag me down when you want a refill.",
              formal: "Understood. I will maintain your tab. Please signal me when you are ready for a replenishment.",
            },
            keyPhrases: [
              { en: "wave me down", zh: "招呼我" },
              { en: "another round", zh: "再来一轮" },
            ],
            alternativeExpressions: [
              {
                textEn: "All set. Tab's open — just flag me when you want more.",
                textZh: "搞定了。Tab开着——想续杯的时候招呼我。",
                actionHint: "需要时挥手叫调酒师",
                frequency: "common",
              },
              {
                textEn: "You're good to go. I'll leave the tab running. Just holler when you need another drink.",
                textZh: "没问题。Tab开着。要喝的时候喊我就行。",
                actionHint: "随时可以加点",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Hey, can we close out the tab? Actually, can you split it three ways?",
            textZh: "你好，我们要结Tab了。能分成三份吗？",
            casualVersion: "Hey, can we close out? Actually, split it three ways?",
            commonMistake: {
              wrong: "Can we close the tab?",
              correct: "Can we close out the tab?",
              explanation: "结账用 'close out'。",
            },
            formalityVariants: {
              casual: "Hey, can we close out? Actually, split it three ways?",
              standard: "Hey, can we close out the tab? Actually, can you split it three ways?",
              formal: "Excuse me, we would like to close our tab. Would it be possible to divide the total into three separate payments?",
            },
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn:
              "Sure! Your total is $72. Split evenly three ways, that's $24 each. Want me to run three separate cards?",
            textZh: "好的！总共72美元。三人平分的话每人24美元。分三张卡刷吗？",
            casualVersion: "Sure! Total's 72. Split three ways, that's 24 each. Three cards?",
            culturalNote: "美国结账时小费文化很重要",
            formalityVariants: {
              casual: "Sure! Total's 72. Split three ways, that's 24 each. Three cards?",
              standard: "Sure! Your total is $72. Split evenly three ways, that's $24 per person. Would you like to put that on three separate cards?",
              formal: "Certainly. Your total is $72. If we divide that evenly three ways, it comes to $24 per individual. Will you be paying with three separate cards?",
            },
            keyPhrases: [
              { en: "close out the tab", zh: "结Tab/关Tab" },
              { en: "split three ways", zh: "分成三份" },
              { en: "run the card", zh: "刷卡" },
            ],
            alternativeExpressions: [
              {
                textEn: "Your tab's $72. Splitting three ways is $24 each. Three cards?",
                textZh: "你们的Tab是72美元。三个人分就是每人24。三张卡吗？",
                actionHint: "递上三张卡",
                frequency: "common",
              },
              {
                textEn: "Total's $72 — $24 a piece if you're splitting evenly. Want me to run separate cards?",
                textZh: "总共72——平分的话每人24。要分开刷卡吗？",
                actionHint: "确认分卡方式",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. Here are the other two cards.",
            textZh: "好的。这是另外两张卡。",
            casualVersion: "Yeah, please. Here's the other two cards.",
            formalityVariants: {
              casual: "Yeah, please. Here's the other two cards.",
              standard: "Yes, please. Here are the other two cards.",
              formal: "Yes, that would be preferable. Here are the additional two cards for payment.",
            },
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn:
              "All set! $24 on each card. The tip line is there if you'd like to add one. Thanks for coming in tonight!",
            textZh: "好了！每张卡24美元。如果要加小费的话在那一栏填。感谢今晚光临！",
            casualVersion: "All set! 24 on each. Tip line's there if ya wanna add somethin'. Thanks for coming!",
            commonMistake: {
              wrong: "There is a tip line.",
              correct: "The tip line is there.",
              explanation: "描述某物在某处时，'X is there' 更自然。",
            },
            formalityVariants: {
              casual: "All set! 24 on each. Tip line's there if ya wanna add somethin'. Thanks for coming!",
              standard: "All set! $24 on each card. The tip line is there if you'd like to add a gratuity. Thanks for coming tonight!",
              formal: "Your transaction is complete. $24 has been charged to each card. The gratuity line is available should you wish to add a tip. We appreciate your patronage this evening.",
            },
            keyPhrases: [{ en: "tip line", zh: "小费栏" }],
            alternativeExpressions: [
              {
                textEn: "Done! $24 each. Sign at the bottom if you want to add a tip. Have a great night!",
                textZh: "好了！每张24美元。要加小费的话在下面签字。玩得开心！",
                actionHint: "填小费金额并签名",
                frequency: "common",
              },
              {
                textEn:
                  "You're all squared up. Tip's optional — there's a line for it on the receipt. Thanks for coming!",
                textZh: "都结清了。小费随意——收据上有一栏可以填。感谢光临！",
                actionHint: "写上小费金额",
                frequency: "occasional",
              },
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
            textEn:
              "I'm not sure what to order. What do you recommend? I usually like something not too strong but flavorful.",
            textZh: "我不知道喝什么好。有什么推荐吗？我一般喜欢不太烈但有味道的。",
            casualVersion: "Dunno what to get. Got any reccos? Usually like somethin' not too strong but flavorful.",
            formalityVariants: {
              casual: "Dunno what to get. Got any reccos? Usually like somethin' not too strong but flavorful.",
              standard: "I don't know what to get. Do you have any recommendations? I usually like something not too strong but flavorful.",
              formal: "I am somewhat undecided on my selection. Do you have any particular recommendations? I generally prefer beverages that are not overly potent, yet possess distinct flavor profiles.",
            },
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Do you lean more toward beer, wine, or cocktails? That'll help me narrow it down.",
            textZh: "你比较偏好啤酒、红酒还是鸡尾酒？这样我好缩小范围。",
            casualVersion: "Beer, wine, or cocktails? Helps me narrow it down.",
            formalityVariants: {
              casual: "Beer, wine, or cocktails? Helps me narrow it down.",
              standard: "Do you lean more toward beer, wine, or cocktails? That might help me narrow it down.",
              formal: "Would your preference be for beer, wine, or a cocktail? This information would assist me in refining my suggestions.",
            },
            keyPhrases: [
              { en: "lean toward", zh: "偏好/倾向" },
              { en: "narrow it down", zh: "缩小范围" },
            ],
            alternativeExpressions: [
              {
                textEn: "Are you more of a beer, wine, or cocktail person? That'll help me figure something out.",
                textZh: "你平时喝啤酒多还是红酒、鸡尾酒？这样我好推荐。",
                actionHint: "说出你的偏好",
                frequency: "common",
              },
              {
                textEn: "Sure! Do you usually go for something light or more on the strong side?",
                textZh: "好！你一般喝清淡的还是烈一点的？",
                actionHint: "描述你的口味偏好",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm open to cocktails. But I'm not a fan of super sweet drinks.",
            textZh: "鸡尾酒可以。但我不喜欢太甜的。",
            casualVersion: "Cocktail's fine. But nothin' too sweet.",
            commonMistake: {
              wrong: "Cocktail is OK.",
              correct: "A cocktail is fine.",
              explanation: "'fine' 比 'OK' 更自然。",
            },
            formalityVariants: {
              casual: "Cocktail's fine. But nothin' too sweet.",
              standard: "A cocktail is fine. But I don't like anything too sweet.",
              formal: "A cocktail would be acceptable. However, I would prefer to avoid anything excessively sweet.",
            },
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn:
              "How about a Moscow Mule? It's vodka, ginger beer, and fresh lime. Refreshing with a little kick, but not sweet. Or if you like something more herbal, I can make you a gin and tonic with a twist.",
            textZh:
              "莫斯科骡子怎么样？伏特加、姜汁啤酒和新鲜青柠。清爽带点劲，但不甜。或者如果你喜欢草本味的，我可以做一杯加了特调的金汤力。",
            casualVersion: "Moscow Mule? Vodka, ginger beer, fresh lime. Refreshing, kicky, not sweet. Or if you're into herbaceous, I can do a G&T with a twist.",
            formalityVariants: {
              casual: "Moscow Mule? Vodka, ginger beer, fresh lime. Refreshing, kicky, not sweet. Or if you're into herbaceous, I can do a G&T with a twist.",
              standard: "How about a Moscow Mule? It's vodka, ginger beer, and fresh lime. Refreshing with a kick, but not sweet. Or if you like something herbaceous, I can do a Gin and Tonic with a twist.",
              formal: "May I suggest a Moscow Mule? It features vodka, ginger beer, and fresh lime, offering a refreshing and invigorating profile without excessive sweetness. Alternatively, if you prefer something herbaceous, I could prepare a Gin and Tonic with a specific garnish.",
            },
            keyPhrases: [
              { en: "Moscow Mule", zh: "莫斯科骡子(鸡尾酒)" },
              { en: "ginger beer", zh: "姜汁啤酒" },
              { en: "refreshing", zh: "清爽" },
              { en: "kick", zh: "劲/刺激感" },
              { en: "gin and tonic", zh: "金汤力" },
              { en: "with a twist", zh: "加了特调/变化" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "If you don't like sweet, try a Moscow Mule — ginger beer and lime, nice and crisp. Or a classic gin and tonic.",
                textZh: "不喜欢甜的话，试试莫斯科骡子——姜汁啤酒和青柠，很清爽。或者经典金汤力。",
                actionHint: "选一款试试",
                frequency: "common",
              },
              {
                textEn: "How about an Old Fashioned? It's whiskey-based, not sweet, with a nice depth to it.",
                textZh: "老式鸡尾酒怎么样？威士忌底的，不甜，味道很有层次。",
                actionHint: "可以接受或换一个",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "The Moscow Mule sounds great. I'll try that.",
            textZh: "莫斯科骡子听起来不错。就要这个。",
            casualVersion: "Moscow Mule sounds great. I'll take it.",
            formalityVariants: {
              casual: "Moscow Mule sounds great. I'll take it.",
              standard: "The Moscow Mule sounds great. I'll have that.",
              formal: "The Moscow Mule sounds quite appealing. I will select that, please.",
            },
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Good pick! By the way, are you guys from around here or just visiting?",
            textZh: "好选择！对了，你们是本地人还是来玩的？",
            casualVersion: "Good pick! So, you guys from around here or just visitin'?",
            culturalNote: "美国人社交时常用开放式问题开启对话",
            formalityVariants: {
              casual: "Good pick! So, you guys from around here or just visitin'?",
              standard: "Good pick! By the way, are you guys from around here or just visiting?",
              formal: "An excellent choice! Incidentally, may I inquire if you are local residents or currently visiting the area?",
            },
            alternativeExpressions: [
              {
                textEn: "You'll like that one! So, you guys local or visiting?",
                textZh: "你肯定喜欢！对了，你们是本地的还是来玩的？",
                actionHint: "可以聊几句也可以简短回答",
                frequency: "common",
              },
              {
                textEn: "Great pick! Are you from around here?",
                textZh: "好选择！你们是这附近的吗？",
                actionHint: "随意聊聊",
                frequency: "common",
              },
            ],
            responseTip: "调酒师聊天是酒吧文化的一部分，可以随意聊聊。不想聊也可以简单回应。",
          },
          {
            speaker: "you",
            textEn: "Just visiting, actually. We got here yesterday. Any recommendations for things to do around here?",
            textZh: "来玩的。昨天刚到。这附近有什么推荐的吗？",
            casualVersion: "Just visitin', actually. Got here yesterday. Any reccos for stuff to do around here?",
            formalityVariants: {
              casual: "Just visitin', actually. Got here yesterday. Any reccos for stuff to do around here?",
              standard: "Just visiting, actually. We got here yesterday. Any recommendations for things to do around here?",
              formal: "We are merely visiting, having arrived yesterday. Do you have any suggestions for local attractions or activities?",
            },
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn:
              "Oh nice! There's a great live music spot just two blocks down — they have jazz on Thursday nights. And if you're here this weekend, there's a street food market on Saturday. Definitely worth checking out.",
            textZh:
              "不错！往下走两个街区有个很棒的现场音乐吧——周四晚上有爵士乐。如果这周末还在的话，周六有个街头美食市集。绝对值得去看看。",
            casualVersion: "Oh nice! Great live music bar two blocks down — jazz Thursdays. If you're still here this weekend, street food market Saturday. Def worth checking out.",
            formalityVariants: {
              casual: "Oh nice! Great live music bar two blocks down — jazz Thursdays. If you're still here this weekend, street food market Saturday. Def worth checking out.",
              standard: "Oh nice! There's a great live music bar two blocks down — jazz on Thursday nights. If you're still in town this weekend, there's a street food market on Saturday. Definitely worth checking out.",
              formal: "How wonderful! There is an excellent live music venue two blocks from here, featuring jazz performances on Thursday evenings. Should your visit extend through the weekend, a street food market is held on Saturday, which I highly recommend.",
            },
            keyPhrases: [
              { en: "live music", zh: "现场音乐" },
              { en: "two blocks down", zh: "往下走两个街区" },
              { en: "street food market", zh: "街头美食市集" },
              { en: "worth checking out", zh: "值得去看看" },
            ],
            alternativeExpressions: [
              {
                textEn: "Cool! There's a jazz bar nearby and a food market this Saturday. Both are awesome.",
                textZh: "不错！附近有个爵士酒吧，这周六还有个美食市集。都很棒。",
                actionHint: "记下推荐的活动",
                frequency: "common",
              },
              {
                textEn:
                  "If you like music, there's live jazz down the street on Thursdays. And Saturday's street market is a must.",
                textZh: "如果喜欢音乐，这条街上周四有现场爵士。周六的街头市集一定要去。",
                actionHint: "问清楚地址和时间",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds awesome. We'll definitely check out the food market. Thanks for the tip!",
            textZh: "听起来很棒。我们肯定去看看美食市集。谢谢推荐！",
            casualVersion: "Sounds awesome. Def check out the food market. Thanks for the reccos!",
            formalityVariants: {
              casual: "Sounds awesome. Def check out the food market. Thanks for the reccos!",
              standard: "That sounds awesome. We'll definitely check out the food market. Thanks for the recommendations!",
              formal: "That sounds absolutely wonderful. We will certainly explore the food market. Thank you kindly for your recommendations!",
            },
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn:
              "Anytime! Enjoy your Moscow Mule. Let me know if you want another one or want to try something different.",
            textZh: "不客气！享受你的莫斯科骡子吧。想再来一杯或者试试别的随时说。",
            casualVersion: "Anytime! Enjoy the Mule. Holler if ya want another or somethin' different.",
            formalityVariants: {
              casual: "Anytime! Enjoy the Mule. Holler if ya want another or somethin' different.",
              standard: "Anytime! Enjoy your Moscow Mule. Let me know if you want another one or want to try something different.",
              formal: "You're most welcome! Please enjoy your Moscow Mule. Do inform me if you would like another, or perhaps prefer to sample an alternative beverage.",
            },
            alternativeExpressions: [
              {
                textEn: "No problem! Enjoy the Mule. Wave me down if you need anything else.",
                textZh: "不客气！享用吧。需要什么招呼我。",
                actionHint: "享受你的饮品",
                frequency: "common",
              },
              {
                textEn: "Happy to help! Let me know when you're ready for round two.",
                textZh: "乐意帮忙！想要第二杯的时候告诉我。",
                actionHint: "慢慢喝，想续杯再叫",
                frequency: "occasional",
              },
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
            keyPhrases: [{ en: "just the two of you", zh: "就你们两位" }],
            alternativeExpressions: [
              {
                textEn: "Hi! How many in your party?",
                textZh: "你好！几位？",
                actionHint: "告诉对方人数即可",
                frequency: "common",
              },
              { textEn: "Table for two?", textZh: "两位吗？", actionHint: "确认或纠正人数", frequency: "common" },
            ],
            casualVersion: "Welcome to Grand Buffet! Just two of you today?",
            formalityVariants: {
              casual: "Hey, welcome to Grand Buffet! Just two today?",
              standard: "Welcome to the Grand Buffet! Will it be just the two of you today?",
              formal:
                "Good evening, welcome to the Grand Buffet. May I ask if there will be just two in your party this evening?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, two people. How much is the buffet?",
            textZh: "是的，两个人。自助餐多少钱？",
            casualVersion: "Yeah, just us two. What's the price?",
            commonMistake: {
              wrong: "How much is one buffet?",
              correct: "How much is the buffet?",
              explanation: "中文常说“一个”，但英文无需加“one”，直接问“the buffet”即可。",
            },
            formalityVariants: {
              casual: "Yeah, two. How much for the buffet?",
              standard: "Yes, two people. How much is the buffet?",
              formal: "Yes, there will be two of us. Could you please inform me of the cost of the buffet?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "It's $29.99 per person for adults. That includes unlimited trips to the buffet and soft drinks. Alcohol is extra.",
            textZh: "成人每位29.99美元。包含无限次取餐和软饮。酒水另算。",
            commonMistake: {
              wrong: "It is $29.99 per adult, including unlimited food and soft drinks. Alcoholic beverages are other.",
              correct: "It's $29.99 per adult. That includes unlimited food and soft drinks. Alcoholic beverages are extra.",
              explanation: "extra 指额外收费，而 other 在此不自然",
            },
            keyPhrases: [
              { en: "per person", zh: "每人" },
              { en: "unlimited trips", zh: "无限次取餐" },
              { en: "soft drinks", zh: "软饮" },
              { en: "alcohol is extra", zh: "酒水另算" },
            ],
            vocabNotes: {
              unlimited: {
                meaningInContext: "在这句话里表示：无限制的、不限次数的",
                similarUsage: "类似用法：unlimited data plan（无限流量套餐）",
              },
              extra: {
                meaningInContext: "在这句话里表示：额外收费的、不包含在内的",
                similarUsage: "类似用法：Guacamole is extra.（牛油果酱要加钱）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "It's $29.99 a head. Drinks are included, but alcohol costs extra.",
                textZh: "每人29.99。饮料包含在内，酒水另付。",
                actionHint: "决定是否用餐",
                frequency: "common",
              },
              {
                textEn: "Adults are $29.99 — eat as much as you want. Free soft drinks. Beer and wine are separate.",
                textZh: "成人29.99——想吃多少吃多少。软饮免费。啤酒红酒另算。",
                actionHint: "确认入座",
                frequency: "common",
              },
            ],
            casualVersion:
              "It's 29.99 a head for adults. That's unlimited buffet trips and soft drinks. Booze costs extra.",
            formalityVariants: {
              casual:
                "It's like 30 bucks a person for adults. You get unlimited food and soft drinks. Alcohol's separate.",
              standard:
                "It's $29.99 per person for adults. That includes unlimited trips to the buffet and soft drinks. Alcohol is extra.",
              formal:
                "The price is $29.99 per adult. This tariff includes unlimited access to the buffet selections and non-alcoholic beverages. Alcoholic beverages are available at an additional charge.",
            },
          },
          {
            speaker: "you",
            textEn: "Sounds good. We'll take two.",
            textZh: "挺好的。我们两位。",
            commonMistake: {
              wrong: "Good sound. We want two.",
              correct: "Sounds good. We'll take two.",
              explanation: "Sounds good 更自然。'We want' 在服务场景中显得生硬。",
            },
            casualVersion: "Cool. We'll do two.",
            formalityVariants: {
              casual: "Cool. We'll do two.",
              standard: "Sounds good. We'll take two.",
              formal: "That sounds perfectly acceptable. We will proceed with two admissions.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Right this way. Here's your table. Just a few things — please use a clean plate each time you go up, and the dessert station is at the far end.",
            textZh: "这边请。这是你们的桌位。提醒一下——每次取餐请用新盘子，甜点区在最里面。",
            commonMistake: {
              wrong: "Please use new plate for each visit.",
              correct: "Please use a fresh plate for each visit.",
              explanation: "a fresh plate 比 new plate 更地道，指干净的盘子。",
            },
            keyPhrases: [
              { en: "clean plate", zh: "新盘子/干净盘子" },
              { en: "each time you go up", zh: "每次去取餐" },
              { en: "dessert station", zh: "甜点区" },
              { en: "far end", zh: "最里面/最远处" },
            ],
            vocabNotes: {
              "go up": {
                meaningInContext: "在这句话里表示：去取餐台取食物",
                similarUsage: "类似用法：Go up and help yourself.（自己去取）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Here's your table! Grab a new plate each trip. Desserts are at the far end.",
                textZh: "这是你们的桌位！每次取餐用新盘子。甜点在最里面。",
                actionHint: "记住用新盘子和甜点区位置",
                frequency: "common",
              },
              {
                textEn:
                  "Your table's right here. Quick reminder — fresh plates each time you go up, and the sweets station is at the back.",
                textZh: "桌子在这里。提醒一下——每次取餐用干净盘子，甜品区在后面。",
                actionHint: "按规定取餐",
                frequency: "occasional",
              },
            ],
            culturalNote: "美国自助餐通常要求每次取餐使用新盘子，这是卫生规定。",
            casualVersion:
              "This way. Here's your table. Quick heads-up: grab a new plate every time, and desserts are way over there.",
            formalityVariants: {
              casual:
                "This way. Table's right here. Just a heads-up, use a fresh plate each time, and desserts are way in the back.",
              standard:
                "Right this way. Here's your table. Just a few things — please use a clean plate each time you go up, and the dessert station is at the far end.",
              formal:
                "If you would follow me. Here is your assigned table. A few points to note: kindly utilize a fresh plate for each subsequent visit to the buffet, and the dessert station is located at the furthest extremity of the dining area.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. Can I get a refill on my soda?",
            textZh: "明白了。我的汽水可以续杯吗？",
            culturalNote: '"refill" 是续杯的标准用词。美国很多餐厅的软饮可以免费续杯。',
            casualVersion: "Got it. Can I get a soda refill?",
            commonMistake: {
              wrong: "Can I renew my soda?",
              correct: "Can I get a refill on my soda?",
              explanation: "续杯英文用 refill，不是 renew。",
            },
            formalityVariants: {
              casual: "Got it. Can I get a refill on my soda?",
              standard: "Got it. Can I get a refill on my soda?",
              formal: "Understood. Would it be possible to obtain a refill for my soda, please?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Absolutely! Refills are free. I can bring you another one, or you can help yourself at the drink station over there.",
            textZh: "当然！续杯免费。我可以帮你拿一杯，或者你自己去那边的饮料区倒。",
            commonMistake: {
              wrong: "Absolutely! Refills are free. I can bring you another one, or you can take it by yourself at the drink station over there.",
              correct: "Absolutely! Refills are free. I can bring you another one, or you can help yourself at the drink station over there.",
              explanation: "help yourself 更自然地表示“自便、自己取用”，take it by yourself 听起来不自然。",
            },
            keyPhrases: [
              { en: "refills are free", zh: "续杯免费" },
              { en: "help yourself", zh: "自助/自己来" },
              { en: "drink station", zh: "饮料区" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure thing! Just head over to the soda fountain.",
                textZh: "没问题！去那边的饮料机就行。",
                actionHint: "自己去饮料机续杯",
                frequency: "common",
              },
            ],
            casualVersion:
              "Totally! Refills are free. I can grab you another one, or you can just get it yourself at the drink station over there.",
            formalityVariants: {
              casual:
                "Sure thing! Refills are on the house. I can get you another one, or you can just hit up the drink station.",
              standard:
                "Absolutely! Refills are free. I can bring you another one, or you can help yourself at the drink station over there.",
              formal:
                "Certainly! All refills are complimentary. I would be pleased to bring you another beverage, or you are welcome to serve yourself at the designated drink station.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll go get it myself. Also, is the crab legs station open right now?",
            textZh: "我自己去倒。另外，蟹腿区现在开放吗？",
            casualVersion: "I'll just grab it myself. Hey, are the crab legs open yet?",
            commonMistake: {
              wrong: "Is the crab legs area open?",
              correct: "Is the crab legs station open?",
              explanation: '英文更常用 "station" 或 "bar" 来指自助餐的特定区域。',
            },
            formalityVariants: {
              casual: "I'll just get it myself. Quick question, are the crab legs out yet?",
              standard: "I'll go get it myself. Also, is the crab legs station open right now?",
              formal:
                "I will procure it myself, thank you. Additionally, could you inform me if the crab legs station is currently operational?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "The seafood station opens at 5 PM for dinner service. It should be ready in about ten minutes. I'll let you know when it's out.",
            textZh: "海鲜区晚餐时间5点开放。大概还有十分钟。出来的时候我通知你。",
            commonMistake: {
              wrong: "It should be ready about ten minutes.",
              correct: "It should be ready in about ten minutes.",
              explanation: "表示在某个时间段内完成用 in about...",
            },
            keyPhrases: [
              { en: "seafood station", zh: "海鲜区" },
              { en: "dinner service", zh: "晚餐时段" },
            ],
            alternativeExpressions: [
              {
                textEn: "The crab legs come out at 5 for dinner. Should be about 10 minutes. I'll give you a heads-up!",
                textZh: "蟹腿5点晚餐时段出。大概还有10分钟。我到时候提醒你！",
                actionHint: "先吃别的等海鲜",
                frequency: "common",
              },
              {
                textEn: "Seafood opens at 5 PM. Almost time! I'll swing by and let you know.",
                textZh: "海鲜区5点开放。快了！到时候我过来告诉你。",
                actionHint: "先取其他食物",
                frequency: "common",
              },
            ],
            casualVersion:
              "Seafood station opens at 5 for dinner. Should be ready in about ten. I'll tell ya when it's out.",
            formalityVariants: {
              casual: "Seafood starts at 5 for dinner. Should be ready in ten. I'll give you a heads-up when it's out.",
              standard:
                "The seafood station opens at 5 PM for dinner service. It should be ready in about ten minutes. I'll let you know when it's out.",
              formal:
                "The seafood station commences service at 5:00 PM for the dinner period. It is anticipated to be prepared in approximately ten minutes. I will notify you once it becomes available.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect, thank you. One more question — is there a time limit for the buffet?",
            textZh: "太好了，谢谢。还有个问题——自助餐有时间限制吗？",
            casualVersion: "Cool, thanks. Quick question, is there a time limit for the buffet?",
            commonMistake: {
              wrong: "Does buffet have time limit?",
              correct: "Is there a time limit for the buffet?",
              explanation: "英文问是否有…常说 Is there a…，而不是Does…have…。",
            },
            formalityVariants: {
              casual: "Awesome, thanks. Just wondering, is there a time limit for the buffet?",
              standard: "Perfect, thank you. One more question — is there a time limit for the buffet?",
              formal:
                "Excellent, thank you. I have one additional inquiry — is there a time restriction applicable to the buffet service?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "There's a two-hour limit during peak hours, but it's pretty relaxed today. Take your time and enjoy!",
            textZh: "高峰时段有两小时限制，但今天很宽松。慢慢享用吧！",
            commonMistake: {
              wrong: "There is a two-hour limit during peak hours, but today is loose.",
              correct: "There's a two-hour limit during peak hours, but it's pretty relaxed today.",
              explanation: "'loose' 不用于形容时间限制，'relaxed' 更自然。",
            },
            keyPhrases: [
              { en: "time limit", zh: "时间限制" },
              { en: "peak hours", zh: "高峰时段" },
              { en: "take your time", zh: "慢慢来" },
            ],
            vocabNotes: {
              "peak hours": {
                meaningInContext: "在这句话里表示：就餐高峰期，人最多的时候",
                similarUsage: "类似用法：peak season（旺季）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Two-hour limit when we're packed, but today's quiet — take your time!",
                textZh: "人多的时候限两小时，但今天不忙——慢慢吃！",
                actionHint: "不用赶时间",
                frequency: "common",
              },
              {
                textEn: "Usually two hours during busy times, but no rush today. Enjoy!",
                textZh: "忙的时候一般限两小时，今天不赶。慢慢享用！",
                actionHint: "放心慢慢吃",
                frequency: "common",
              },
            ],
            casualVersion: "Two-hour limit during peak, but it's chill today. No rush, enjoy!",
            formalityVariants: {
              casual: "Usually two-hour limit at peak times, but today's super laid back. Just enjoy!",
              standard:
                "There's a two-hour limit during peak hours, but it's pretty relaxed today. Take your time and enjoy!",
              formal:
                "There is a standard two-hour dining limit enforced during peak operating hours; however, the present capacity allows for a more flexible dining experience. Please feel free to take your time and savor your meal.",
            },
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
            casualVersion: "Hey, got a shellfish allergy. What should I steer clear of?",
            commonMistake: {
              wrong: "I have shellfish allergy.",
              correct: "I have a shellfish allergy.",
              explanation:
                "allergy 是可数名词，前面需要冠词 a，或者用 be allergic to 的形式，如 I'm allergic to shellfish。",
            },
            formalityVariants: {
              casual: "Hey, shellfish allergy here. What should I avoid?",
              standard: "Excuse me, I have a shellfish allergy. Which dishes should I avoid?",
              formal:
                "Excuse me, I have a shellfish allergy. Could you please advise me on which dishes would be unsuitable?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Thank you for letting me know. The dishes with shellfish are labeled with a red tag. I'd also recommend avoiding station three — there may be cross-contamination from the shrimp stir-fry.",
            textZh: "谢谢您告诉我。含贝类的菜品都有红色标签。我也建议避开三号区——可能有虾炒菜的交叉污染。",
            commonMistake: {
              wrong: "The dishes with shellfish are marked with a red tag.",
              correct: "The dishes with shellfish are labeled with a red tag.",
              explanation: "labeled with a tag 更常用，mark 一般用于标记点或记号。",
            },
            keyPhrases: [
              { en: "shellfish allergy", zh: "贝类过敏" },
              { en: "labeled with a red tag", zh: "有红色标签" },
              { en: "cross-contamination", zh: "交叉污染" },
            ],
            vocabNotes: {
              "cross-contamination": {
                meaningInContext: "在这句话里表示：不同食物之间的接触导致过敏原转移",
                similarUsage: "类似用法：Be careful of cross-contamination with nuts.（注意坚果的交叉污染）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Good to know. All allergens are listed on the cards by each dish.",
                textZh: "好的。每道菜旁边的卡片上都列了过敏原。",
                actionHint: "去看每道菜旁边的标签",
                frequency: "common",
              },
            ],
            casualVersion:
              "Thanks for the heads-up. Shellfish dishes have red tags. Also, might wanna skip station three, shrimp stir-fry could cause cross-contamination.",
            formalityVariants: {
              casual:
                "Thanks. Shellfish dishes have red tags. Also, try to avoid station three — shrimp stir-fry might cross-contaminate.",
              standard:
                "Thank you for letting me know. The dishes with shellfish are labeled with a red tag. I'd also recommend avoiding station three — there may be cross-contamination from the shrimp stir-fry.",
              formal:
                "Thank you for informing me. All dishes containing shellfish are clearly marked with a red tag. Furthermore, I would advise you to avoid station three, as there is a potential for cross-contamination from the shrimp stir-fry preparation.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. Are there any gluten-free options?",
            textZh: "明白了。有无麸质的选项吗？",
            culturalNote: "美国对过敏源的关注度很高",
            casualVersion: "Got it. Any gluten-free stuff?",
            commonMistake: {
              wrong: "Got it. Have gluten-free?",
              correct: "Got it. Are there any gluten-free options?",
              explanation: "询问是否有某种东西，通常用 Are there any... options? 或 Do you have any...?。",
            },
            formalityVariants: {
              casual: "Okay, any gluten-free options?",
              standard: "Got it. Are there any gluten-free options?",
              formal: "Understood. Could you please inform me if there are any gluten-free options available?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Yes! The salad bar and the grilled meats are all gluten-free. We also have gluten-free rolls at the bread station — they're in the separate basket.",
            textZh: "有的！沙拉吧和烤肉都是无麸质的。面包区也有无麸质面包卷——在单独的篮子里。",
            commonMistake: {
              wrong: "We also have gluten-free rolls at the bread station — they are in a separate basket.",
              correct: "We also have gluten-free rolls at the bread station — they're in a separate basket.",
              explanation: "美式口语中用缩写 'they're' 更自然。",
            },
            keyPhrases: [
              { en: "gluten-free", zh: "无麸质" },
              { en: "salad bar", zh: "沙拉吧" },
              { en: "separate basket", zh: "单独的篮子" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The salad bar and grilled meats are all GF. There are also gluten-free rolls by the bread — separate basket.",
                textZh: "沙拉吧和烤肉都是无麸质的。面包区也有无麸质面包卷——单独的篮子。",
                actionHint: "去对应区域取餐",
                frequency: "common",
              },
              {
                textEn: "Plenty of GF options! Look for the green labels — those are all gluten-free.",
                textZh: "无麸质选择很多！找绿色标签的——那些都是无麸质的。",
                actionHint: "认准绿色标签",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep! Salad bar and grilled meats are all GF. Plus, GF rolls at the bread station are in their own basket.",
            formalityVariants: {
              casual:
                "Yeah! Salad bar and grilled meats are GF. GF rolls are at the bread station, in their own basket.",
              standard:
                "Yes! The salad bar and the grilled meats are all gluten-free. We also have gluten-free rolls at the bread station — they're in the separate basket.",
              formal:
                "Yes, certainly. The salad bar and all grilled meat selections are entirely gluten-free. Additionally, we provide gluten-free rolls at our bread station, located in a distinct, separate basket.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Great. I also noticed the dessert station — can I go there anytime, or is it only after the main course?",
            textZh: "太好了。我看到甜点区了——是随时可以去，还是只能在主菜之后？",
            casualVersion: "Awesome. Saw the dessert station — can I hit it up anytime, or only after the main meal?",
            commonMistake: {
              wrong: "Can I go there at any time, or only after main course?",
              correct: "Can I go there anytime, or is it only after the main course?",
              explanation: "anytime 更自然，而 the main course 是一个固定搭配，需要冠词 the。",
            },
            formalityVariants: {
              casual: "Cool. Saw the dessert station — can I go whenever, or just after the main meal?",
              standard:
                "Great. I also noticed the dessert station — can I go there anytime, or is it only after the main course?",
              formal:
                "Excellent. I observed the dessert station; may I inquire if it is accessible at any point during the meal, or exclusively following the main course?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "You can go anytime! It's all-you-can-eat, so feel free to mix and match. The chocolate fountain is very popular — I'd recommend trying it with the strawberries.",
            textZh: "随时都可以去！都是无限量的，随意搭配。巧克力喷泉特别受欢迎——建议配草莓试试。",
            commonMistake: {
              wrong: "It's all-you-can-eat, so mix and match. The chocolate fountain is very popular — recommend trying it with strawberries.",
              correct: "It's all-you-can-eat, so mix and match. The chocolate fountain is very popular — try it with strawberries.",
              explanation: "推荐用祈使句 'try it...' 更直接自然，recommend trying it... 听起来稍生硬。",
            },
            keyPhrases: [
              { en: "all-you-can-eat", zh: "无限量/吃到饱" },
              { en: "mix and match", zh: "随意搭配" },
              { en: "chocolate fountain", zh: "巧克力喷泉" },
            ],
            vocabNotes: {
              "all-you-can-eat": {
                meaningInContext: "在这句话里表示：自助餐形式，想吃多少吃多少",
                similarUsage: "类似用法：all-you-can-drink（无限畅饮）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Go for it anytime! It's all unlimited. The chocolate fountain is a must-try — dip some strawberries in it!",
                textZh: "随时去！都是无限量的。巧克力喷泉一定要试——蘸草莓吃！",
                actionHint: "直接去甜点区取",
                frequency: "common",
              },
              {
                textEn: "Desserts are open now — help yourself! Pro tip: the chocolate fountain with fruit is amazing.",
                textZh: "甜点区现在就开着——自己去取！建议：巧克力喷泉配水果超赞。",
                actionHint: "去甜点区尝尝",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Go whenever! It's AYCE, so mix and match however you like. Chocolate fountain's super popular — try it with strawberries.",
            formalityVariants: {
              casual:
                "Anytime! It's AYCE, so just mix and match. Chocolate fountain's a hit — definitely try it with strawberries.",
              standard:
                "You can go anytime! It's all-you-can-eat, so feel free to mix and match. The chocolate fountain is very popular — I'd recommend trying it with the strawberries.",
              formal:
                "You are welcome to visit at your leisure! As it is an all-you-can-eat offering, please feel free to select and combine items as you wish. The chocolate fountain is notably popular, and I would particularly recommend pairing it with the fresh strawberries.",
            },
          },
          {
            speaker: "you",
            textEn: "Yum! One more thing — can we take any food to go, or is it dine-in only?",
            textZh: "好吃！再问一下——可以打包带走吗，还是只能在这里吃？",
            culturalNote: "美国自助餐通常禁止外带",
            casualVersion: "Yum! Quick question — can we take food to go, or is it just dine-in?",
            commonMistake: {
              wrong: "Can we take food away?",
              correct: "Can we take any food to go?",
              explanation: "在美国，打包带走食物通常说 to go 或 takeout。",
            },
            formalityVariants: {
              casual: "Yum! Quick question — can we take food with us, or just eat here?",
              standard: "Yum! One more thing — can we take any food to go, or is it dine-in only?",
              formal:
                "That sounds delightful! One further inquiry: is it permissible to take any food items to go, or is consumption restricted exclusively to dining on the premises?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "I'm sorry, the buffet is dine-in only. We can't allow food to be taken out. But you're welcome to eat as much as you'd like while you're here!",
            textZh: "抱歉，自助餐只限堂食，不能打包带走。但在这里想吃多少都可以！",
            culturalNote: "美国自助餐通常禁止打包，因为价格基于店内消费，打包会影响利润。与中国一些地方自助餐可打包不同。",
            commonMistake: {
              wrong: "I'm sorry, the buffet is only eat in, not take out.",
              correct: "I'm sorry, the buffet is for dine-in only, no take-out.",
              explanation: "'dine-in' 和 'take-out' 是更专业的餐饮术语。",
            },
            keyPhrases: [
              { en: "dine-in only", zh: "只限堂食" },
              { en: "taken out", zh: "带走/打包" },
            ],
            alternativeExpressions: [
              {
                textEn: "Unfortunately, no to-go boxes with the buffet.",
                textZh: "不好意思，自助餐不提供打包盒。",
                actionHint: "不能打包，在店里尽量多吃",
                frequency: "common",
              },
            ],
            casualVersion: "Sorry, buffet's dine-in only. Can't take food out. But eat all you want while you're here!",
            formalityVariants: {
              casual: "My apologies, it's dine-in only. No take-out. But feel free to eat up while you're here!",
              standard:
                "I'm sorry, the buffet is dine-in only. We can't allow food to be taken out. But you're welcome to eat as much as you'd like while you're here!",
              formal:
                "My apologies, but our buffet policy strictly limits consumption to the premises; we are unable to permit food items to be taken off-site. However, you are most welcome to enjoy as much as you desire during your visit with us.",
            },
          },
          {
            speaker: "you",
            textEn: "No problem. Everything is delicious — we'll definitely finish here. Thank you!",
            textZh: "没关系。一切都很好吃——我们肯定在这吃完。谢谢！",
            casualVersion: "No worries. Everything's great — we'll totally finish it here. Thanks!",
            commonMistake: {
              wrong: "No matter. Everything delicious — we will finish eating here. Thank you!",
              correct: "No problem. Everything is delicious — we'll definitely finish here. Thank you!",
              explanation: "No problem 是常用的回应方式。 Everything is delicious 更自然。 finish here 暗示吃完。",
            },
            formalityVariants: {
              casual: "No worries. Everything's amazing — we'll definitely finish it all here. Thanks!",
              standard: "No problem. Everything is delicious — we'll definitely finish here. Thank you!",
              formal:
                "Understood, and that is perfectly fine. Everything has been exceptionally delicious, and we will certainly ensure all items are consumed on-site. Thank you very much.",
            },
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
            keyPhrases: [{ en: "start you off", zh: "先来/先给您上" }],
            alternativeExpressions: [
              {
                textEn: "Morning! Can I get you something to drink while you look at the menu?",
                textZh: "早！看菜单的时候先来杯喝的？",
                actionHint: "先点饮品",
                frequency: "common",
              },
            ],
            casualVersion: "Mornin'! Welcome to brunch. Can I get you started with coffee or a drink?",
            commonMistake: {
              wrong: "What do you want to drink?",
              correct: "Can I get you started with a drink?",
              explanation: "直接问“What do you want to drink”在美国餐厅听起来很不礼貌。",
            },
            formalityVariants: {
              casual: "Mornin'! Welcome to brunch. Coffee or a drink to start?",
              standard: "Good morning! Welcome to Sunday brunch. Can I start you off with some coffee or a drink?",
              formal:
                "Good morning, and welcome to our Sunday brunch service. May I offer you a beverage to begin, perhaps coffee or another drink?",
            },
          },
          {
            speaker: "you",
            textEn: "Good morning! I'll have a coffee, please. And can I see the brunch menu?",
            textZh: "早上好！来杯咖啡。可以看一下早午餐菜单吗？",
            casualVersion: "Mornin'! Just a coffee, please. And can I see the menu?",
            commonMistake: {
              wrong: "Give me a coffee",
              correct: "I'll have a coffee, please",
              explanation: "“Give me”听起来很生硬，用“I'll have”或“Can I get”更礼貌自然。",
            },
            formalityVariants: {
              casual: "Morning! Coffee, please. And the menu?",
              standard: "Good morning! I'll have a coffee, please. And can I see the brunch menu?",
              formal:
                "Good morning. I would appreciate a coffee, please. And may I kindly request to see the brunch menu?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Here's the menu. Our specials today are the Eggs Benedict and the Stuffed French Toast. We also have bottomless mimosas for $18.",
            textZh: "菜单给您。今天的特色菜是班尼迪克蛋和法式吐司卷。我们还有18美元的无限量含羞草鸡尾酒。",
            keyPhrases: [
              { en: "specials", zh: "特色菜/今日特供" },
              { en: "Eggs Benedict", zh: "班尼迪克蛋" },
              { en: "bottomless mimosas", zh: "无限量含羞草鸡尾酒" },
            ],
            vocabNotes: {
              bottomless: {
                meaningInContext: "在这句话里表示：无限续杯的",
                similarUsage: "类似用法：bottomless coffee（无限续杯咖啡）",
              },
              "Eggs Benedict": {
                meaningInContext: "在这句话里表示：一道经典早午餐菜——英式松饼配水波蛋、火腿和荷兰酱",
                similarUsage: "类似用法：Eggs Florentine（菠菜版本的班尼迪克蛋）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Here you go. Today we've got Eggs Benny and Stuffed French Toast. Oh, and bottomless mimosas for $18!",
                textZh: "给您菜单。今天有班尼蛋和法式吐司卷。还有18美元的无限量含羞草！",
                actionHint: "看菜单或直接点特色菜",
                frequency: "common",
              },
              {
                textEn:
                  "Our brunch specials are the Benedict and the French Toast. We also do unlimited mimosas if you're interested.",
                textZh: "早午餐特色菜是班尼迪克蛋和法式吐司。如果有兴趣，我们还有无限量含羞草。",
                actionHint: "选一道特色菜",
                frequency: "occasional",
              },
            ],
            culturalNote: "Brunch 是 breakfast + lunch 的组合，通常周末供应，是美国很受欢迎的社交餐饮形式。",
            casualVersion:
              "Here's the menu. Today's specials are Benedict and Stuffed French Toast. Also, bottomless mimosas for 18 bucks.",
            formalityVariants: {
              casual: "Menu's here. Specials are Benedict and Stuffed French Toast. Plus, bottomless mimosas, $18.",
              standard:
                "Here's the menu. Our specials today are the Eggs Benedict and the Stuffed French Toast. We also have bottomless mimosas for $18.",
              formal:
                "Here is our menu. Our featured specials for today include the Eggs Benedict and the Stuffed French Toast. Additionally, we are offering bottomless mimosas for $18.",
            },
          },
          {
            speaker: "you",
            textEn: "The Eggs Benedict sounds great. I'll have that. And what comes with it?",
            textZh: "班尼迪克蛋听起来不错。我要这个。配什么？",
            casualVersion: "I'll do the Eggs Benedict. What does it come with?",
            commonMistake: {
              wrong: "What include for it?",
              correct: "What comes with it?",
              explanation: "“include”常用于清单，询问食物搭配时用“comes with”更自然。",
            },
            formalityVariants: {
              casual: "Benedict sounds good. I'll take it. What's with it?",
              standard: "The Eggs Benedict sounds great. I'll have that. And what comes with it?",
              formal:
                "The Eggs Benedict sounds quite appealing. I will order that, please. May I inquire as to what accompaniments are served with it?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "It comes with a side of roasted potatoes or a fruit cup. And how would you like your hollandaise — regular or with a little kick of sriracha?",
            textZh: "配烤土豆或水果杯。荷兰酱要普通的还是加点是拉差辣椒的？",
            culturalNote: "点餐时对酱汁、配菜有偏好是很常见的",
            keyPhrases: [
              { en: "side of", zh: "配菜" },
              { en: "fruit cup", zh: "水果杯" },
              { en: "hollandaise", zh: "荷兰酱" },
              { en: "a little kick", zh: "一点辣味" },
            ],
            vocabNotes: {
              kick: {
                meaningInContext: "在这句话里表示：一点刺激的辣味或冲劲",
                similarUsage: "类似用法：This salsa has a nice kick.（这个莎莎酱有点辣劲）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "It comes with potatoes or fruit on the side. And for the hollandaise — classic or spicy?",
                textZh: "配菜有土豆或水果。荷兰酱——经典的还是辣的？",
                actionHint: "选配菜和酱的口味",
                frequency: "common",
              },
              {
                textEn:
                  "You can choose roasted potatoes or a fruit cup as your side. The hollandaise can be regular or with a sriracha kick.",
                textZh: "配菜可以选烤土豆或水果杯。荷兰酱可以普通的或者加是拉差辣味。",
                actionHint: "告诉服务员你的选择",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Comes with roasted potatoes or a fruit cup. And for the hollandaise—regular or sriracha kick?",
            formalityVariants: {
              casual: "Potatoes or fruit cup. Hollandaise: regular or sriracha?",
              standard:
                "It comes with a side of roasted potatoes or a fruit cup. And how would you like your hollandaise — regular or with a little kick of sriracha?",
              formal:
                "It is served with a choice of either roasted potatoes or a fresh fruit cup. Regarding your hollandaise sauce, would you prefer the traditional preparation or one with a hint of sriracha spice?",
            },
          },
          {
            speaker: "you",
            textEn: "Roasted potatoes, please. And regular hollandaise is fine.",
            textZh: "烤土豆吧。荷兰酱就普通的。",
            casualVersion: "Roasted potatoes, please. Regular hollandaise is good.",
            commonMistake: {
              wrong: "I want roasted potatoes. Regular hollandaise okay.",
              correct: "Roasted potatoes, please. Regular hollandaise is fine.",
              explanation: "点餐时避免直接说“I want”，用“please”或“is fine/good”更自然。",
            },
            formalityVariants: {
              casual: "Potatoes, please. Regular hollandaise.",
              standard: "Roasted potatoes, please. And regular hollandaise is fine.",
              formal:
                "I would prefer the roasted potatoes, please. And the regular hollandaise will be perfectly acceptable.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Perfect. And would you like to add the bottomless mimosas? It's unlimited refills for two hours.",
            textZh: "好的。要加无限量含羞草鸡尾酒吗？两小时内无限续杯。",
            culturalNote: "Bottomless mimosas 在美式早午餐很流行，是社交体验一部分",
            keyPhrases: [
              { en: "bottomless", zh: "无限量" },
              { en: "unlimited refills", zh: "无限续杯" },
            ],
            alternativeExpressions: [
              {
                textEn: "Want to add bottomless mimosas? Unlimited refills for two hours — $18.",
                textZh: "要加无限量含羞草吗？两小时无限续杯——18美元。",
                actionHint: "要或不要含酒精饮品",
                frequency: "common",
              },
              {
                textEn: "Can I interest you in our bottomless drink deal? Mimosas or Bloody Marys, $18 for two hours.",
                textZh: "要不要试试我们的无限畅饮？含羞草或血腥玛丽，两小时18美元。",
                actionHint: "选择是否加入畅饮",
                frequency: "occasional",
              },
            ],
            isBranchPoint: true,
            responseTip: "可以接受，也可以问有没有非酒精选项",
            casualVersion: "Cool. Wanna add the bottomless mimosas? Unlimited refills for two hours.",
            formalityVariants: {
              casual: "Alright. Bottomless mimosas? Unlimited for two hours.",
              standard:
                "Perfect. And would you like to add the bottomless mimosas? It's unlimited refills for two hours.",
              formal:
                "Excellent. Would you care to add the bottomless mimosas to your order? It offers unlimited refills for a duration of two hours.",
            },
          },
          {
            speaker: "you",
            textEn: "Sure, why not! It's the weekend. I'll do the mimosas.",
            textZh: "好啊，反正周末嘛！我要含羞草。",
            culturalNote: "Mimosa 是橙汁加香槟，是最经典的 brunch 饮品。",
            casualVersion: "Yeah, why not! It's the weekend. I'll get the mimosas.",
            commonMistake: {
              wrong: "I do mimosas.",
              correct: "I'll do the mimosas.",
              explanation: "“I'll do”是点餐时表示选择的常见表达，不是“我做”，而是“我要”。",
            },
            formalityVariants: {
              casual: "Yeah, why not! Weekend vibes. I'll get the mimosas.",
              standard: "Sure, why not! It's the weekend. I'll do the mimosas.",
              formal: "Indeed, why not! Given that it is the weekend, I would be pleased to partake in the mimosas.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Great choice! I'll bring your first one right out. The kitchen is a little backed up, so your food will be about 15 minutes. Is that okay?",
            textZh: "好选择！我马上给您端第一杯。厨房有点忙，您的菜大概要15分钟。可以吗？",
            keyPhrases: [{ en: "backed up", zh: "积压/忙不过来" }],
            vocabNotes: {
              "backed up": {
                meaningInContext: "在这句话里表示：订单太多，厨房忙不过来",
                similarUsage: "类似用法：Traffic is backed up.（交通堵塞了）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Awesome! Here's mimosa number one. Your food should be out in about 15 — kitchen's a bit slammed.",
                textZh: "太好了！第一杯含羞草给您。菜大概15分钟——厨房有点忙。",
                actionHint: "先喝着等菜",
                frequency: "common",
              },
              {
                textEn:
                  "Coming right up! Just so you know, there's a short wait on food — maybe 15 minutes. The mimosa will keep you company!",
                textZh: "马上来！提醒一下，菜要等一小会——大概15分钟。含羞草先陪着您！",
                actionHint: "边喝边等",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Good choice! I'll bring your first one out now. Kitchen's a bit backed up, so food'll be like 15. That cool?",
            formalityVariants: {
              casual: "Good choice! First one's coming right out. Kitchen's slow, food's like 15. Okay?",
              standard:
                "Great choice! I'll bring your first one right out. The kitchen is a little backed up, so your food will be about 15 minutes. Is that okay?",
              formal:
                "An excellent selection! I shall bring your initial drink to you immediately. Please be advised, the kitchen is experiencing a slight delay, so your food order will be approximately 15 minutes. Will that be satisfactory?",
            },
          },
          {
            speaker: "you",
            textEn: "No rush at all. We're in no hurry. Thanks!",
            textZh: "不急的。我们不赶时间。谢谢！",
            casualVersion: "No worries, we've got time!",
            commonMistake: {
              wrong: "We are not hurry.",
              correct: "We're in no hurry.",
              explanation: "“不赶时间”的正确表达是“in no hurry”或“not in a hurry”。",
            },
            formalityVariants: {
              casual: "No rush. We're good. Thanks!",
              standard: "No rush at all. We're in no hurry. Thanks!",
              formal: "There is no need to rush whatsoever. We are quite content to wait. Thank you.",
            },
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
              {
                textEn: "Ready to order? The make-your-own breakfast plate is a great deal.",
                textZh: "可以点了吗？自选早餐拼盘很划算。",
                actionHint: "可以尝试自选套餐",
                frequency: "common",
              },
            ],
            casualVersion: "Decided yet? Our Build Your Own breakfast is super popular.",
            formalityVariants: {
              casual: "Decided yet? Our Build Your Own breakfast is super popular.",
              standard: "Have you decided? Our Build Your Own Breakfast is really popular.",
              formal: "Have you made your selection? Our Build Your Own Breakfast option is quite popular.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I'll do the Build Your Own. How does it work?",
            textZh: "好的，我要自选套餐。怎么选？",
            casualVersion: "Yeah, I'll do the Build Your Own. How's it work?",
            commonMistake: {
              wrong: "How to choose it?",
              correct: "How does it work?",
              explanation: "“How to…”是中式英语，应说How does it work?或How do I…？",
            },
            formalityVariants: {
              casual: "Yeah, I'll do the Build Your Own. How's it work?",
              standard: "Yes, I'll do the Build Your Own. How does it work?",
              formal:
                "Yes, I would like to proceed with the Build Your Own option. Could you please explain the process?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "You pick your eggs — scrambled, fried, poached, or an omelet. Then choose two sides: bacon, sausage, hash browns, toast, or a pancake.",
            textZh: "先选鸡蛋做法——炒蛋、煎蛋、水波蛋或蛋卷。再选两个配菜：培根、香肠、薯饼、吐司或一片煎饼。",
            keyPhrases: [
              { en: "scrambled", zh: "炒蛋" },
              { en: "fried", zh: "煎蛋" },
              { en: "poached", zh: "水波蛋" },
              { en: "omelet", zh: "蛋卷" },
              { en: "hash browns", zh: "薯饼" },
            ],
            vocabNotes: {
              scrambled: {
                meaningInContext: "在这句话里表示：搅碎打散后炒的鸡蛋",
                similarUsage: "类似用法：scrambled eggs with cheese（芝士炒蛋）",
              },
              poached: {
                meaningInContext: "在这句话里表示：不带壳在水中煮熟的鸡蛋（水波蛋）",
                similarUsage: "类似用法：poached salmon（水煮三文鱼）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Pick your eggs — scrambled, fried, poached, or an omelet. Then two sides from this list.",
                textZh: "先选鸡蛋——炒蛋、煎蛋、水波蛋或蛋卷。然后从列表里选两个配菜。",
                actionHint: "先选蛋的做法再选配菜",
                frequency: "common",
              },
              {
                textEn:
                  "First, how do you want your eggs? And then pick any two sides — bacon, sausage, hash browns, toast, or a pancake.",
                textZh: "先说蛋怎么做？然后选两个配菜——培根、香肠、薯饼、吐司或煎饼。",
                actionHint: "告诉服务员蛋的做法和配菜",
                frequency: "common",
              },
            ],
            culturalNote: "在美国点早餐时，服务员几乎一定会问鸡蛋怎么做。提前知道这些词很有用。",
            casualVersion:
              "You pick your eggs — scrambled, fried, poached, or an omelet. Then two sides: bacon, sausage, hash browns, toast, or a pancake.",
            formalityVariants: {
              casual:
                "You pick your eggs — scrambled, fried, poached, or an omelet. Then two sides: bacon, sausage, hash browns, toast, or a pancake.",
              standard:
                "You pick your eggs — scrambled, fried, poached, or an omelet. Then choose two sides: bacon, sausage, hash browns, toast, or a pancake.",
              formal:
                "Kindly select your preferred egg preparation from scrambled, fried, poached, or an omelet. Following that, please choose two accompanying sides from the available options: bacon, sausage, hash browns, toast, or a pancake.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll have scrambled eggs, please. And for sides, bacon and toast.",
            textZh: "我要炒蛋。配菜选培根和吐司。",
            casualVersion: "Scrambled eggs, please. And for sides, bacon and toast.",
            commonMistake: {
              wrong: "My scrambled eggs are...",
              correct: "I'll have scrambled eggs, please.",
              explanation: "中文里说“我的炒蛋”，但英文里说I'll have或直接说食物，更自然。",
            },
            formalityVariants: {
              casual: "Scrambled eggs, please. And for sides, bacon and toast.",
              standard: "I'll have scrambled eggs, please. And for sides, bacon and toast.",
              formal:
                "I would like the scrambled eggs, please. For the accompanying sides, I will choose bacon and toast.",
            },
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
              {
                textEn: "What kind of toast — white, whole wheat, or sourdough?",
                textZh: "吐司要哪种——白面包、全麦还是酸面包？",
                actionHint: "选一种面包",
                frequency: "common",
              },
              {
                textEn: "For your toast, we've got white, wheat, sourdough, and rye.",
                textZh: "吐司有白面包、全麦、酸面包和黑麦。",
                actionHint: "告诉服务员你的选择",
                frequency: "occasional",
              },
            ],
            casualVersion: "What kind of toast — white, wheat, or sourdough?",
            formalityVariants: {
              casual: "What kind of toast — white, wheat, or sourdough?",
              standard: "How would you like your toast — white, wheat, or sourdough?",
              formal: "Which type of toast would you prefer — white, wheat, or sourdough?",
            },
          },
          {
            speaker: "you",
            textEn: "Sourdough, please.",
            textZh: "酸面包。",
            culturalNote: "Sourdough（酸面包）在美国西海岸尤其受欢迎，旧金山的酸面包特别出名。",
            casualVersion: "Sourdough.",
            formalityVariants: {
              casual: "Sourdough.",
              standard: "Sourdough, please.",
              formal: "Sourdough, if you please.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "You got it! And your friend — does she need a few more minutes?",
            textZh: "好嘞！你的朋友——她还需要再看看吗？",
            alternativeExpressions: [
              {
                textEn: "Got it! And for her — ready to order too?",
                textZh: "好的！她呢——也准备好了吗？",
                actionHint: "帮朋友点单",
                frequency: "common",
              },
              {
                textEn: "Perfect! Does your friend know what she'd like?",
                textZh: "好的！你的朋友想好了吗？",
                actionHint: "替朋友点或让她再看看",
                frequency: "common",
              },
            ],
            casualVersion: "Got it! Your friend — she need a few more minutes?",
            formalityVariants: {
              casual: "Got it! Your friend — she need a few more minutes?",
              standard: "You got it! And your friend — does she need a few more minutes?",
              formal: "Understood. And regarding your companion, would she require a few additional moments?",
            },
          },
          {
            speaker: "you",
            textEn:
              "She'll have the avocado toast with a poached egg on top. And can she substitute the side salad for fruit?",
            textZh: "她要牛油果吐司配一个水波蛋。配菜可以把沙拉换成水果吗？",
            culturalNote: '"substitute A for B" 是换配菜的标准用法——用 A 替换 B。',
            casualVersion: "She's getting the avocado toast with a poached egg. And can she swap the salad for fruit?",
            commonMistake: {
              wrong: "Can she change the side salad to fruit?",
              correct: "Can she substitute the side salad for fruit?",
              explanation: "“change…to…”在表示替换时不太地道，用substitute…for…或swap…for…更自然。",
            },
            formalityVariants: {
              casual: "She's getting the avocado toast with a poached egg. And can she swap the salad for fruit?",
              standard:
                "She'll have the avocado toast with a poached egg on top. And can she substitute the side salad for fruit?",
              formal:
                "She would like the avocado toast, topped with a poached egg. Furthermore, would it be possible to substitute the side salad with fruit?",
            },
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
              upcharge: {
                meaningInContext: "在这句话里表示：替换配菜需要额外支付的费用",
                similarUsage: "类似用法：Is there an upcharge for oat milk?（换燕麦奶要加钱吗？）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Sure! Swapping the salad for fruit is an extra $1.50. That cool?",
                textZh: "没问题！沙拉换水果要加1.5美元。可以吗？",
                actionHint: "同意或保持原配菜",
                frequency: "common",
              },
              {
                textEn: "Of course! Fruit instead of salad — just a small upcharge of $1.50.",
                textZh: "当然！水果替换沙拉——只加1.5美元。",
                actionHint: "确认即可",
                frequency: "common",
              },
            ],
            casualVersion: "Totally, no problem! It's an extra $1.50 for the fruit. Cool?",
            culturalNote: "美国服务业经常会问“Is that okay?”表示确认，不是询问是否真的没问题。",
            formalityVariants: {
              casual: "Totally, no problem! It's an extra $1.50 for the fruit. Cool?",
              standard: "Absolutely, no problem! There's a small upcharge of $1.50 for the fruit. Is that okay?",
              formal:
                "Certainly, that will not be an issue. Please note there will be a nominal upcharge of $1.50 for the fruit substitution. Does that meet with your approval?",
            },
          },
          {
            speaker: "you",
            textEn: "That's fine. Thank you!",
            textZh: "没问题。谢谢！",
            commonMistake: {
              wrong: "No problem.",
              correct: "That's fine.",
              explanation: "No problem 在接受条件时显得过于随意，That's fine 更自然",
            },
            casualVersion: "That's fine. Thanks!",
            formalityVariants: {
              casual: "That's fine. Thanks!",
              standard: "That's fine. Thank you!",
              formal: "That is perfectly acceptable. Thank you kindly.",
            },
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
              {
                textEn: "What are you in the mood for?",
                textZh: "想吃点什么？",
                actionHint: "可以说具体的或者问推荐",
                frequency: "occasional",
              },
            ],
            culturalNote: "美食车的氛围通常比餐厅随意很多，语言风格也更轻松。",
            casualVersion: "Hey! What can I get for ya?",
            formalityVariants: {
              casual: "What can I get for ya?",
              standard: "What can I get for you today?",
              formal: "Good morning/afternoon, how may I assist you with your order?",
            },
          },
          {
            speaker: "you",
            textEn: "Hi! This is my first time here. What do you recommend?",
            textZh: "你好！我第一次来。有什么推荐的？",
            casualVersion: "Hey, first time! What's good here?",
            commonMistake: {
              wrong: "What you recommend?",
              correct: "What do you recommend?",
              explanation: "中文里常省略“你”，但英文疑问句不能省略助动词“do”。",
            },
            formalityVariants: {
              casual: "Hey, first time here. What's good?",
              standard: "Hi! This is my first time here. What do you recommend?",
              formal: "Excuse me, I'm a first-time customer. Could you please offer some recommendations?",
            },
          },
          {
            speaker: "them",
            role: "店主",
            textEn:
              "Our Korean BBQ tacos are our best seller. The spicy pork is amazing, and the kimchi slaw really makes it. You can get two tacos for $10 or three for $13.",
            textZh: "我们的韩式烧烤塔可最畅销。辣猪肉特别好吃，泡菜沙拉才是点睛之笔。两个塔可10美元，三个13美元。",
            keyPhrases: [
              { en: "best seller", zh: "最畅销的" },
              { en: "makes it", zh: "点睛之笔/画龙点睛" },
            ],
            vocabNotes: {
              "makes it": {
                meaningInContext: "在这句话里表示：让整道菜变得特别好、画龙点睛",
                similarUsage: "类似用法：The sauce really makes this dish.（酱料是这道菜的灵魂）",
              },
              slaw: {
                meaningInContext: "在这句话里表示：凉拌卷心菜丝沙拉（coleslaw 的简称）",
                similarUsage: "类似用法：coleslaw（卷心菜沙拉）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "The Korean BBQ tacos are what we're known for. Spicy pork with kimchi slaw — two for $10, three for $13.",
                textZh: "韩式烧烤塔可是我们的招牌。辣猪肉配泡菜沙拉——两个10美元，三个13。",
                actionHint: "选两个或三个",
                frequency: "common",
              },
              {
                textEn:
                  "Gotta try the BBQ tacos — they're our top seller. The kimchi slaw on top really takes it to the next level.",
                textZh: "一定要试烧烤塔可——最畅销的。上面的泡菜沙拉真的绝了。",
                actionHint: "点这道招牌菜",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Our Korean BBQ tacos are the best. Spicy pork's amazing, kimchi slaw really makes it. Two for 10, three for 13.",
            formalityVariants: {
              casual:
                "Korean BBQ tacos are the best. Spicy pork's amazing, kimchi slaw makes it. Two for 10, three for 13.",
              standard:
                "Our Korean BBQ tacos are our best seller. The spicy pork is amazing, and the kimchi slaw really makes it. You can get two tacos for $10 or three for $13.",
              formal:
                "Our Korean BBQ tacos are our most popular item. The spicy pork filling is exceptional, and the kimchi slaw adds a distinct flavor. They are priced at $10 for two or $13 for three.",
            },
          },
          {
            speaker: "you",
            textEn: "Sounds awesome! I'll take three tacos. Can I get one of them less spicy?",
            textZh: "听起来不错！我要三个塔可。可以有一个不那么辣的吗？",
            casualVersion: "Sounds awesome! I'll get three. Can one be less spicy?",
            commonMistake: {
              wrong: "I want one less spicy.",
              correct: "Can I get one less spicy?",
              explanation: "直接说“I want”不够礼貌，用“Can I get”是更自然地请求。",
            },
            formalityVariants: {
              casual: "Sounds good! I'll get three. Can one be less spicy?",
              standard: "Sounds awesome! I'll take three tacos. Can I get one of them less spicy?",
              formal:
                "That sounds delightful! I would like to order three tacos. Would it be possible to have one prepared with a milder spice level?",
            },
          },
          {
            speaker: "them",
            role: "店主",
            textEn:
              "Sure! I'll make one mild for you. Want to add a drink? We've got homemade horchata and fresh lemonade.",
            textZh: "没问题！给你做一个不辣的。要加饮料吗？我们有自制欧恰塔和鲜榨柠檬水。",
            keyPhrases: [
              { en: "mild", zh: "不辣的/微辣" },
              { en: "homemade", zh: "自制的" },
              { en: "horchata", zh: "欧恰塔（墨西哥米浆饮料）" },
            ],
            alternativeExpressions: [
              {
                textEn: "No problem, one mild. Want a drink too? We have fresh lemonade and homemade horchata.",
                textZh: "没问题，一个不辣的。要喝的吗？有鲜榨柠檬水和自制欧恰塔。",
                actionHint: "选一种饮料或不要",
                frequency: "common",
              },
              {
                textEn: "One mild, got it. Oh, you should try our horchata — it goes great with the tacos!",
                textZh: "一个不辣的，好的。对了，试试我们的欧恰塔——配塔可特别好！",
                actionHint: "可以试试推荐的饮品",
                frequency: "occasional",
              },
            ],
            casualVersion: "Sure! I'll make one mild. Wanna drink? Got homemade horchata and fresh lemonade.",
            formalityVariants: {
              casual: "Sure! I'll make one mild. Wanna drink? Got homemade horchata and fresh lemonade.",
              standard:
                "Sure! I'll make one mild for you. Want to add a drink? We've got homemade horchata and fresh lemonade.",
              formal:
                "Certainly, I can prepare one mild for you. Would you care to add a beverage? Our options include homemade horchata and freshly squeezed lemonade.",
            },
          },
          {
            speaker: "you",
            textEn: "What's horchata? I've never tried it.",
            textZh: "欧恰塔是什么？我没喝过。",
            commonMistake: {
              wrong: "What is horchata? I never drink it.",
              correct: "What's horchata? I haven't had it before.",
              explanation: "“I never drink it” 听起来像从不喝某种酒，不自然，应说“我没喝过”。",
            },
            casualVersion: "Horchata? Never tried it.",
            formalityVariants: {
              casual: "Horchata? Never tried it.",
              standard: "What's horchata? I've never tried it.",
              formal: "Could you please explain what horchata is? I am unfamiliar with it.",
            },
          },
          {
            speaker: "them",
            role: "店主",
            textEn:
              "It's a sweet rice milk drink with cinnamon. It's really refreshing, especially with spicy food. Want to try a sample?",
            textZh: "是一种甜的肉桂米浆饮料。特别解辣，配辣的东西吃很爽。要试喝一口吗？",
            keyPhrases: [
              { en: "rice milk", zh: "米浆" },
              { en: "cinnamon", zh: "肉桂" },
              { en: "try a sample", zh: "试喝/试尝一下" },
            ],
            alternativeExpressions: [
              {
                textEn: "It's like a sweet cinnamon rice milk. Really refreshing with spicy food. Here, try a taste!",
                textZh: "就像甜的肉桂米浆。配辣的特别解辣。来，尝一口！",
                actionHint: "试喝一小口",
                frequency: "common",
              },
              {
                textEn: "Imagine sweet rice milk with cinnamon — super creamy. Want a quick sample?",
                textZh: "想象一下甜米浆加肉桂——超级顺滑。要试喝一下吗？",
                actionHint: "先尝再决定",
                frequency: "occasional",
              },
            ],
            casualVersion: "Sweet rice milk drink, cinnamon. Super refreshing, esp with spicy stuff. Wanna sample?",
            formalityVariants: {
              casual: "Sweet rice milk drink, cinnamon. Super refreshing, esp with spicy stuff. Wanna sample?",
              standard:
                "It's a sweet rice milk drink with cinnamon. It's really refreshing, especially with spicy food. Want to try a sample?",
              formal:
                "It is a sweet rice milk beverage with a hint of cinnamon. It's quite refreshing, particularly when paired with spicy dishes. Would you care for a sample?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please! Oh, that's really good. I'll take a large horchata.",
            textZh: "好的！嗯，真好喝。来一杯大杯欧恰塔。",
            commonMistake: {
              wrong: "Yes, please! Oh, it is really good. I want a large horchata.",
              correct: "Yes, please! Oh, that's really good. I'll take a large horchata.",
              explanation: "表达感受时“that's”更自然。“I want”不够礼貌，通常用“I'll take”。",
            },
            casualVersion: "Yeah, please! Oh, that's good. I'll get a large horchata.",
            formalityVariants: {
              casual: "Yeah, please! Oh, that's good. I'll get a large horchata.",
              standard: "Yes, please! Oh, that's really good. I'll take a large horchata.",
              formal: "Yes, thank you! That is quite delicious. I would like to order a large horchata.",
            },
          },
          {
            speaker: "them",
            role: "店主",
            textEn: "Awesome. That'll be $17 total. Cash or card? We also take Venmo.",
            textZh: "好嘞。一共17美元。现金还是刷卡？我们也收 Venmo。",
            commonMistake: {
              wrong: "Total is $17.",
              correct: "That'll be $17.",
              explanation: "中国人常说“总共是…”，在口语中用“That'll be...”更自然。",
            },
            culturalNote: "Venmo在美国小商户间很常见，类似微信支付但基于银行卡/账户",
            keyPhrases: [
              { en: "that'll be", zh: "一共是" },
              { en: "cash or card", zh: "现金还是刷卡" },
            ],
            vocabNotes: {
              Venmo: {
                meaningInContext: "在这句话里表示：一种美国流行的手机支付应用",
                similarUsage: "类似用法：I'll Venmo you.（我用 Venmo 转给你）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "$17 total. Cash, card, or Venmo?",
                textZh: "一共17美元。现金、刷卡还是Venmo？",
                actionHint: "选一种付款方式",
                frequency: "common",
              },
              {
                textEn: "That'll be $17. We take everything — cash, card, Apple Pay, Venmo.",
                textZh: "17美元。什么都收——现金、卡、Apple Pay、Venmo。",
                actionHint: "用你方便的方式付",
                frequency: "occasional",
              },
            ],
            casualVersion: "Cool. $17 total. Cash, card, or Venmo?",
            formalityVariants: {
              casual: "Cool. $17 total. Cash, card, or Venmo?",
              standard: "Awesome. That'll be $17 total. Cash or card? We also take Venmo.",
              formal: "Excellent. Your total comes to $17. We accept cash, credit card, or Venmo for payment.",
            },
          },
          {
            speaker: "you",
            textEn: "Card, please.",
            textZh: "刷卡。",
            casualVersion: "Card.",
            culturalNote: "中国人习惯直接说“刷卡”，美国通常会加“please”或用完整句。",
            commonMistake: {
              wrong: "Card.",
              correct: "Card, please.",
              explanation: "直接说“Card”略显生硬，加上“please”或完整句更礼貌。",
            },
            formalityVariants: {
              casual: "Card.",
              standard: "Card, please.",
              formal: "I will be paying by card, thank you.",
            },
          },
          {
            speaker: "them",
            role: "店主",
            textEn:
              "Just tap or insert right here. Your order will be ready in about 5 minutes — I'll call your name. What's the name?",
            textZh: "在这里刷一下或插卡。大概5分钟好，我会叫你名字。叫什么？",
            culturalNote: "美国服务行业常叫名字取餐，中国人可能不习惯。",
            commonMistake: {
              wrong: "How to call you?",
              correct: "What's your name?",
              explanation: "“How to call you”是中式英语，表达不自然。",
            },
            keyPhrases: [
              { en: "tap or insert", zh: "感应或插卡" },
              { en: "call your name", zh: "叫你名字" },
            ],
            alternativeExpressions: [
              {
                textEn: "Tap your card here. About 5 minutes — what name should I call?",
                textZh: "在这里刷卡。大概5分钟——叫什么名字？",
                actionHint: "付款并报上名字",
                frequency: "common",
              },
              {
                textEn: "Card goes right there. I'll shout your name when it's ready — who am I looking for?",
                textZh: "卡放这里。好了我会喊你名字——叫什么？",
                actionHint: "说名字等叫号",
                frequency: "occasional",
              },
            ],
            casualVersion: "Tap or insert here. Order in about 5 mins — I'll call your name. What's the name?",
            formalityVariants: {
              casual: "Tap or insert here. Order in about 5 mins — I'll call your name. What's the name?",
              standard:
                "Just tap or insert right here. Your order will be ready in about 5 minutes — I'll call your name. What's the name?",
              formal:
                "Please tap or insert your card here. Your order will be prepared in approximately 5 minutes, at which point I will call your name. May I have your name, please?",
            },
          },
          {
            speaker: "you",
            textEn: "Wayne. W-A-Y-N-E. Thanks!",
            textZh: "Wayne。W-A-Y-N-E。谢谢！",
            commonMistake: {
              wrong: "Wayne. W A Y N E. Thank you very much.",
              correct: "Wayne. W-A-Y-N-E. Thanks!",
              explanation: "在这种非正式场合，\"Thanks!\" 比 \"Thank you very much\" 更自然。",
            },
            casualVersion: "Wayne. W-A-Y-N-E. Thanks!",
            formalityVariants: {
              casual: "Wayne. W-A-Y-N-E. Thanks!",
              standard: "Wayne. W-A-Y-N-E. Thanks!",
              formal: "It's Wayne, spelled W-A-Y-N-E. Thank you.",
            },
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
            casualVersion: "Hey, interested in the tacos, but I'm vegetarian. Got any meat-free options?",
            commonMistake: {
              wrong: "I'm vegetarian, I want meat-free tacos.",
              correct: "I'm vegetarian. Do you have any meat-free options?",
              explanation: '直接说 "I want" 不够礼貌，"Do you have..." 或 "I was wondering if..." 更自然。',
            },
            formalityVariants: {
              casual: "Hey, interested in the tacos, but I'm vegetarian. Got any meat-free options?",
              standard: "Hi, I'm interested in the tacos, but I'm vegetarian. Do you have any meat-free options?",
              formal:
                "Good day. I am quite interested in your tacos, however, I adhere to a vegetarian diet. Would you happen to have any meat-free selections available?",
            },
          },
          {
            speaker: "them",
            role: "店主",
            textEn:
              "Totally! We have a jackfruit taco that's vegan, and a grilled veggie taco with black beans and roasted corn. Both are really popular.",
            textZh: "当然有！我们有菠萝蜜塔可，是纯素的；还有一款烤蔬菜塔可，配黑豆和烤玉米。都很受欢迎。",
            commonMistake: {
              wrong: "Both are very welcome.",
              correct: "Both are very popular.",
              explanation: "“受欢迎”用 popular 更自然，welcome 指“受人欢迎的款待”。",
            },
            keyPhrases: [
              { en: "jackfruit", zh: "菠萝蜜" },
              { en: "vegan", zh: "纯素" },
              { en: "black beans", zh: "黑豆" },
            ],
            alternativeExpressions: [
              {
                textEn: "For sure! We've got a couple veggie options on the menu.",
                textZh: "当然！菜单上有几个素的选择。",
                actionHint: "看菜单上标注 V 的选项",
                frequency: "common",
              },
            ],
            casualVersion:
              "Totally! Got a jackfruit taco, that's vegan, and a grilled veggie taco with black beans and roasted corn. Both super popular.",
            formalityVariants: {
              casual:
                "Totally! Got a jackfruit taco, that's vegan, and a grilled veggie taco with black beans and roasted corn. Both super popular.",
              standard:
                "Totally! We have a jackfruit taco that's vegan, and a grilled veggie taco with black beans and roasted corn. Both are really popular.",
              formal:
                "Certainly! We offer a jackfruit taco which is entirely vegan, in addition to a grilled vegetable taco featuring black beans and roasted corn. Both options are exceedingly well-received.",
            },
          },
          {
            speaker: "you",
            textEn: "The grilled veggie sounds good. Does it contain any dairy? I'm also lactose intolerant.",
            textZh: "烤蔬菜的听起来不错。里面有奶制品吗？我也乳糖不耐受。",
            casualVersion: "Grilled veggie sounds good. Any dairy in it? I'm lactose intolerant too.",
            commonMistake: {
              wrong: "Grilled veggie good. Have dairy inside?",
              correct: "The grilled veggie sounds good. Does it contain any dairy?",
              explanation: '直接翻译 "have dairy inside" 不自然，应用 "contain" 或 "is there any dairy in it?"。',
            },
            formalityVariants: {
              casual: "Grilled veggie sounds good. Any dairy in it? I'm lactose intolerant too.",
              standard: "The grilled veggie sounds good. Does it contain any dairy? I'm also lactose intolerant.",
              formal:
                "That grilled vegetable option sounds quite appealing. May I inquire if it contains any dairy products, as I am also lactose intolerant?",
            },
          },
          {
            speaker: "them",
            role: "店主",
            textEn:
              "It normally comes with sour cream and cotija cheese, but I can leave those off for you. No problem at all.",
            textZh: "一般会配酸奶油和墨西哥奶酪，但我可以帮你去掉。完全没问题。",
            keyPhrases: [
              { en: "leave those off", zh: "去掉/不放" },
              { en: "sour cream", zh: "酸奶油" },
              { en: "cotija cheese", zh: "墨西哥奶酪" },
            ],
            vocabNotes: {
              "leave off": {
                meaningInContext: "在这句话里表示：不放、去掉某种配料",
                similarUsage: "类似用法：Can you leave off the onions?（可以不放洋葱吗？）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "It usually has sour cream and cheese, but I can skip both — no problem.",
                textZh: "一般会加酸奶油和奶酪，不过两个都可以不放——没问题。",
                actionHint: "确认去掉奶制品",
                frequency: "common",
              },
              {
                textEn: "There's dairy in the toppings, but I can leave that off and add extra salsa instead.",
                textZh: "配料里有奶制品，但我可以不放，多加点莎莎酱代替。",
                actionHint: "同意或提出替代方案",
                frequency: "occasional",
              },
            ],
            casualVersion: "Usually comes with sour cream and cotija, but I can leave those off. No prob.",
            formalityVariants: {
              casual: "Usually comes with sour cream and cotija, but I can leave those off. No prob.",
              standard:
                "It normally comes with sour cream and cotija cheese, but I can leave those off for you. No problem at all.",
              formal:
                "Typically, it is prepared with sour cream and cotija cheese; however, I would be pleased to omit those ingredients for you. It is no trouble whatsoever.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please leave off the dairy. What sauces do you have instead?",
            textZh: "好的，奶制品不要。有什么其他酱料代替吗？",
            casualVersion: "Yeah, no dairy please. What other sauces ya got?",
            commonMistake: {
              wrong: "Don't want dairy. What other sauces?",
              correct: "Yes, please leave off the dairy. What sauces do you have instead?",
              explanation: '"Don\'t want" 不够礼貌，"please leave off" 或 "I\'ll skip" 更委婉。',
            },
            formalityVariants: {
              casual: "Yeah, no dairy please. What other sauces ya got?",
              standard: "Yes, please leave off the dairy. What sauces do you have instead?",
              formal:
                "Yes, kindly omit the dairy products. Could you inform me of the alternative sauces you have available?",
            },
          },
          {
            speaker: "them",
            role: "店主",
            textEn:
              "We have a house-made avocado crema that's dairy-free, and a smoky chipotle salsa. Both are great on the veggie taco.",
            textZh: "我们有自制的牛油果酱，不含奶；还有烟熏辣椒莎莎酱。配蔬菜塔可都很好吃。",
            keyPhrases: [
              { en: "house-made", zh: "自制的" },
              { en: "dairy-free", zh: "不含奶的" },
              { en: "chipotle", zh: "烟熏辣椒" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We've got an avocado crema — totally dairy-free — and a chipotle salsa. Both are awesome on veggie tacos.",
                textZh: "我们有牛油果酱——完全不含奶——和烟熏辣椒莎莎酱。配蔬菜塔可都很好。",
                actionHint: "选一种酱料",
                frequency: "common",
              },
              {
                textEn:
                  "I'd recommend the avocado crema — no dairy, and it's amazing. Or we have a smoky salsa if you like a kick.",
                textZh: "推荐牛油果酱——不含奶，特别好吃。或者烟熏莎莎酱，如果你喜欢辣的话。",
                actionHint: "根据口味选酱",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Got a house-made avocado crema, totally dairy-free, and a smoky chipotle salsa. Both great on the veggie taco.",
            formalityVariants: {
              casual:
                "Got a house-made avocado crema, totally dairy-free, and a smoky chipotle salsa. Both great on the veggie taco.",
              standard:
                "We have a house-made avocado crema that's dairy-free, and a smoky chipotle salsa. Both are great on the veggie taco.",
              formal:
                "We offer a house-made avocado crema, which is entirely dairy-free, as well as a smoky chipotle salsa. Both selections complement the vegetable taco exceedingly well.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll go with the avocado crema. Two veggie tacos, no dairy, with avocado crema.",
            textZh: "我选牛油果酱。两个蔬菜塔可，不放奶制品，加牛油果酱。",
            casualVersion: "Avocado crema for me. Two veggie tacos, no dairy, with that crema.",
            commonMistake: {
              wrong: "I choose avocado crema. Two veggie tacos no dairy with avocado crema.",
              correct: "I'll go with the avocado crema. Two veggie tacos, no dairy, with avocado crema.",
              explanation: '用 "I\'ll go with" 或 "I\'ll have" 比 "I choose" 更自然地表达选择。',
            },
            formalityVariants: {
              casual: "Avocado crema for me. Two veggie tacos, no dairy, with that crema.",
              standard: "I'll go with the avocado crema. Two veggie tacos, no dairy, with avocado crema.",
              formal:
                "I will select the avocado crema. I would like to order two vegetable tacos, prepared without dairy, and served with the avocado crema.",
            },
          },
          {
            speaker: "them",
            role: "店主",
            textEn: "Got it — two veggie tacos, dairy-free, avocado crema. That'll be $11. Give me about 5 minutes!",
            textZh: "好的——两个蔬菜塔可，不含奶，牛油果酱。11美元。大概5分钟！",
            commonMistake: {
              wrong: "Total is $11.",
              correct: "That'll be $11.",
              explanation: "中国人常说“总共是…”，在口语中用“That'll be...”更自然。",
            },
            alternativeExpressions: [
              {
                textEn: "Two veggie, no dairy, avo crema. $11 — be ready in 5!",
                textZh: "两个蔬菜，不放奶制品，牛油果酱。11美元——5分钟好！",
                actionHint: "付款等取餐",
                frequency: "common",
              },
              {
                textEn: "Perfect — two dairy-free veggie tacos with avocado crema coming up. That's $11.",
                textZh: "好的——两个无奶蔬菜塔可配牛油果酱马上好。11美元。",
                actionHint: "付款后在旁边等",
                frequency: "common",
              },
            ],
            casualVersion: "Okay, two veggie tacos, dairy-free, avocado crema. $11. 'Bout 5 mins!",
            formalityVariants: {
              casual: "Okay, two veggie tacos, dairy-free, avocado crema. $11. 'Bout 5 mins!",
              standard:
                "Got it — two veggie tacos, dairy-free, avocado crema. That'll be $11. Give me about 5 minutes!",
              formal:
                "Understood. That would be two vegetable tacos, prepared dairy-free, with avocado crema. The total will be eleven dollars. Your order should be ready in approximately five minutes.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect. Thank you for being so accommodating!",
            textZh: "太好了。谢谢你这么周到！",
            commonMistake: {
              wrong: "Perfect. Thank you for very considerate!",
              correct: "Perfect. Thank you for being so accommodating!",
              explanation: "\"considerate\" 通常指人，\"accommodating\" 指服务周到，且句子需要动名词\"being\"。",
            },
            culturalNote: '"accommodating" 形容服务人员愿意配合你的需求，是很好的称赞用词。',
            casualVersion: "Perfect. Thanks for being so accommodating!",
            formalityVariants: {
              casual: "Perfect. Thanks for being so accommodating!",
              standard: "Perfect. Thank you for being so accommodating!",
              formal: "That is perfectly acceptable. I greatly appreciate your accommodating nature and flexibility.",
            },
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
              {
                textEn: "In-room dining, how can I assist you tonight?",
                textZh: "客房餐饮服务，今晚有什么需要？",
                actionHint: "直接说想点餐",
                frequency: "common",
              },
            ],
            casualVersion: "Room service, hey. What can I get for ya?",
            formalityVariants: {
              casual: "Room service, hey. What can I get for ya?",
              standard: "Room service, good evening. How may I help you?",
              formal: "Good evening, room service. How may I be of assistance?",
            },
          },
          {
            speaker: "you",
            textEn: "Hi, I'd like to order dinner to my room, please. I'm in room 712.",
            textZh: "你好，我想在房间点餐。我住712房间。",
            casualVersion: "Hey, wanna order dinner for my room. I'm in 712.",
            commonMistake: {
              wrong: "Hi, I want to order dinner to my room. I am in room 712.",
              correct: "Hi, I'd like to order dinner to my room, please. I'm in room 712.",
              explanation: "“I want” 听起来比较直接甚至生硬，用 “I'd like to” 更礼貌自然。",
            },
            formalityVariants: {
              casual: "Hey, wanna order dinner to my room. Room 712.",
              standard: "Hi, I'd like to order dinner to my room, please. I'm in room 712.",
              formal:
                "Good evening, I wish to place an order for dinner delivery to my room. I am registered in room 712.",
            },
          },
          {
            speaker: "them",
            role: "接线员",
            textEn:
              "Of course, Mr. Wang. I have your room pulled up. Would you like to hear tonight's specials, or do you have the in-room dining menu?",
            textZh: "当然，王先生。我已经调出您的房间信息了。您想听听今晚的特色菜，还是已经有客房餐饮菜单了？",
            keyPhrases: [
              { en: "pulled up", zh: "调出（信息）" },
              { en: "in-room dining menu", zh: "客房餐饮菜单" },
            ],
            vocabNotes: {
              "pulled up": {
                meaningInContext: "在这句话里表示：在系统里调出、查到你的信息",
                similarUsage: "类似用法：Let me pull up your reservation.（让我调出你的预订信息）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Of course, Mr. Wang. Do you have the room service menu, or would you like to hear our specials?",
                textZh: "当然，王先生。您有客房服务菜单吗，还是想听听我们的特色菜？",
                actionHint: "直接点菜或听推荐",
                frequency: "common",
              },
              {
                textEn: "Room 712, yes. I've got your info here. What would you like to order tonight?",
                textZh: "712房间，好的。您的信息我这里有。今晚想点什么？",
                actionHint: "报出你要点的菜",
                frequency: "common",
              },
            ],
            casualVersion:
              "Sure thing, Mr. Wang. Got your room pulled up. Wanna hear the specials or you got the menu?",
            formalityVariants: {
              casual: "Sure thing, Mr. Wang. Got your room pulled up. Wanna hear the specials or you got the menu?",
              standard:
                "Of course, Mr. Wang. I have your room pulled up. Would you like to hear tonight's specials, or do you have the in-room dining menu?",
              formal:
                "Certainly, Mr. Wang. I have accessed your room details. May I offer you the evening's specials, or do you have the in-room dining menu readily available?",
            },
          },
          {
            speaker: "you",
            textEn:
              "I have the menu. I'd like the grilled salmon and a Caesar salad to start. And a bottle of still water.",
            textZh: "我有菜单。我要烤三文鱼，先来一份凯撒沙拉。再加一瓶矿泉水。",
            culturalNote: '"still water" 是不含气的水，"sparkling water" 是气泡水。酒店经常会问你要哪种。',
            casualVersion:
              "Got the menu. I'll take the grilled salmon and a Caesar to start. And a bottle of still water.",
            commonMistake: {
              wrong: "I have menu. I want grilled salmon and Caesar salad first. Also a bottle of still water.",
              correct:
                "I have the menu. I'd like the grilled salmon and a Caesar salad to start. And a bottle of still water.",
              explanation: "表达“我有菜单”需加“the”。“I want”不礼貌，“to start”更自然。",
            },
            formalityVariants: {
              casual: "Got the menu. I'll take the grilled salmon and a Caesar to start. Plus a still water.",
              standard:
                "I have the menu. I'd like the grilled salmon and a Caesar salad to start. And a bottle of still water.",
              formal:
                "I possess the menu. I would like to order the grilled salmon, commencing with a Caesar salad. Additionally, a bottle of still water, please.",
            },
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
              {
                textEn: "The salmon comes with mashed potatoes or steamed veggies. Which would you prefer?",
                textZh: "三文鱼可以配土豆泥或蒸蔬菜。您要哪个？",
                actionHint: "选一种配菜",
                frequency: "common",
              },
              {
                textEn: "For the side, would you like the mash or the seasonal vegetables?",
                textZh: "配菜要土豆泥还是时蔬？",
                actionHint: "告诉对方你的选择",
                frequency: "occasional",
              },
            ],
            casualVersion: "Perfect. For the salmon, mash or veggies?",
            formalityVariants: {
              casual: "Perfect. For the salmon, mash or veggies?",
              standard: "Excellent. For the salmon, would you like it with the mashed potatoes or steamed vegetables?",
              formal:
                "Splendid. Regarding the salmon, would you prefer the mashed potatoes or the steamed vegetables as an accompaniment?",
            },
          },
          {
            speaker: "you",
            textEn: "Steamed vegetables, please. How long will the delivery take?",
            textZh: "蒸蔬菜。送餐大概多久？",
            casualVersion: "Steamed veggies. How long for delivery?",
            commonMistake: {
              wrong: "Steamed vegetables. How long arrive?",
              correct: "Steamed vegetables, please. How long will the delivery take?",
              explanation: "直接说“How long arrive?”不完整且不自然。需要完整的句子表达。",
            },
            formalityVariants: {
              casual: "Steamed veggies. How long for delivery?",
              standard: "Steamed vegetables, please. How long will the delivery take?",
              formal: "Steamed vegetables would be preferable. What is the estimated delivery time for the order?",
            },
          },
          {
            speaker: "them",
            role: "接线员",
            textEn:
              "Your order should arrive in approximately 35 to 40 minutes. We'll knock and announce 'room service' when we're at your door.",
            textZh: "您的餐大约35到40分钟送到。到了会敲门并说'客房服务'。",
            keyPhrases: [
              { en: "approximately", zh: "大约" },
              { en: "announce", zh: "通报" },
            ],
            alternativeExpressions: [
              {
                textEn: "It should be at your door in about 35 to 40 minutes. We'll knock and say room service.",
                textZh: "大约35到40分钟送到您门口。我们会敲门说客房服务。",
                actionHint: "在房间等候即可",
                frequency: "common",
              },
              {
                textEn: "Expect about 30 to 40 minutes. Someone will knock and announce themselves at your door.",
                textZh: "大概30到40分钟。会有人到门口敲门通报。",
                actionHint: "耐心等待送餐",
                frequency: "common",
              },
            ],
            casualVersion:
              "Your order should hit your door in about 35 to 40. We'll knock and say 'room service' when we're there.",
            formalityVariants: {
              casual:
                "Your order should hit your door in about 35 to 40. We'll knock and say 'room service' when we're there.",
              standard:
                "Your order should arrive in approximately 35 to 40 minutes. We'll knock and announce 'room service' when we're at your door.",
              formal:
                "Your order is anticipated to arrive in approximately 35 to 40 minutes. We shall knock and announce 'room service' upon reaching your door.",
            },
          },
          {
            speaker: "you",
            textEn: "That works. One more thing — is there a service charge, or should I tip separately?",
            textZh: "可以。再问一下——有服务费吗，还是需要另外给小费？",
            culturalNote: "很多酒店会自动在客房送餐账单上加18-22%的服务费。",
            casualVersion: "Sounds good. One more thing – is there a service charge, or do I tip extra?",
            commonMistake: {
              wrong: "That works. One more thing — is there service charge, or I need tip separately?",
              correct: "That works. One more thing — is there a service charge, or should I tip separately?",
              explanation: "“service charge”前需加冠词“a”。“I need tip”不自然，用“should I tip”更地道。",
            },
            formalityVariants: {
              casual: "Sounds good. One more thing – is there a service charge, or do I tip extra?",
              standard: "That works. One more thing — is there a service charge, or should I tip separately?",
              formal:
                "That is acceptable. Furthermore, may I inquire if a service charge is included, or if a separate gratuity is expected?",
            },
          },
          {
            speaker: "them",
            role: "接线员",
            textEn:
              "There is an 18% service charge that will be added to your bill automatically. It will be charged to your room. You're welcome to add additional gratuity if you'd like.",
            textZh: "会自动在账单上加18%的服务费，直接记到您的房间。如果您愿意，也可以额外给小费。",
            keyPhrases: [
              { en: "service charge", zh: "服务费" },
              { en: "charged to your room", zh: "记到房间账上" },
              { en: "gratuity", zh: "小费" },
            ],
            vocabNotes: {
              gratuity: {
                meaningInContext: "在这句话里表示：小费（tip 的正式说法）",
                similarUsage: "类似用法：Gratuity is included.（已含小费）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "An 18% service charge is included automatically. It goes on your room bill. Extra tip is up to you.",
                textZh: "自动含18%服务费，记到房间账上。额外小费随您心意。",
                actionHint: "了解费用即可",
                frequency: "common",
              },
              {
                textEn:
                  "There's a built-in 18% gratuity. Everything gets charged to room 712. You can add more if you'd like.",
                textZh: "已含18%小费。全部记到712房间。如果您愿意可以额外加。",
                actionHint: "不需要另外付现金",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, there's an 18% service charge that's automatically added to your bill, goes right to your room. You can add more tip if you want.",
            culturalNote: "在美国，服务费（service charge）是强制性的，而小费（tip/gratuity）是自愿的额外表示。",
            formalityVariants: {
              casual:
                "Yeah, there's an 18% service charge that's automatically added to your bill, goes right to your room. You can add more tip if you want.",
              standard:
                "There is an 18% service charge that will be added to your bill automatically. It will be charged to your room. You're welcome to add additional gratuity if you'd like.",
              formal:
                "An 18% service charge will be automatically applied to your bill and charged directly to your room. Should you desire, you are welcome to provide additional gratuity.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. Thank you! I'll be waiting.",
            textZh: "明白了。谢谢！我等着。",
            casualVersion: "Got it. Thanks! I'll be here.",
            commonMistake: {
              wrong: "I know it. Thank you! I wait.",
              correct: "Got it. Thank you! I'll be waiting.",
              explanation: "“I know it”不常用，用“Got it”更自然。“I wait”不地道，用“I'll be waiting”表示持续状态。",
            },
            formalityVariants: {
              casual: "Got it. Thanks! I'll be here.",
              standard: "Got it. Thank you! I'll be waiting.",
              formal: "Understood. Thank you very much. I shall await its arrival.",
            },
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
            casualVersion: "Hey, room 712 here. Done with my meal, need the tray picked up.",
            culturalNote: "直接说房间号和需求即可，无需过多客套",
            commonMistake: {
              wrong: "I finished my meal.",
              correct: "I've finished my meal.",
              explanation: "中文说“吃完了”通常是完成状态，英文用 I've finished 或 I'm done with 更自然",
            },
            formalityVariants: {
              casual: "Hey, room 712. Done with my meal, can you grab the tray?",
              standard: "Hi, I'm calling from room 712. I've finished my meal and would like the tray picked up.",
              formal:
                "Good evening. This is room 712. I have completed my meal and would appreciate it if you could arrange for the tray to be collected.",
            },
          },
          {
            speaker: "them",
            role: "接线员",
            textEn:
              "Certainly. I'll send someone up within 15 minutes. You can also place the tray outside your door if you prefer.",
            textZh: "好的。15分钟内会派人来收。您也可以把托盘放在门外，如果方便的话。",
            culturalNote: "酒店建议将餐盘放门外，省去员工上门时间。",
            keyPhrases: [
              { en: "send someone up", zh: "派人上去" },
              { en: "place the tray outside", zh: "把托盘放门外" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure! You can just set it in the hallway and we'll grab it.",
                textZh: "好的！放走廊里就行，我们会来收。",
                actionHint: "把餐盘放门外走廊",
                frequency: "common",
              },
            ],
            casualVersion:
              "Sure thing. Someone'll be up in like 15. Or just stick it outside your door if that's easier.",
            formalityVariants: {
              casual: "No problem, someone'll be there in 15. Or just put it outside if you want.",
              standard:
                "Certainly. I'll send someone up within 15 minutes. You can also place the tray outside your door if you prefer.",
              formal:
                "Of course. We will dispatch a staff member to your room within 15 minutes. Alternatively, you are welcome to leave the tray outside your door if that is more convenient for you.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll put it outside. Also, I noticed the steak was a bit overcooked. I had asked for medium-rare.",
            textZh: "我放门外吧。另外，我发现牛排有点过熟了。我点的是三分熟。",
            culturalNote: "\"Medium-rare\" 在美国是很常见的牛排熟度。",
            casualVersion:
              "Yeah, I'll just put it outside. Oh, and the steak was kinda overcooked. Asked for medium-rare.",
            commonMistake: {
              wrong: "The steak was a little old.",
              correct: "The steak was a bit overcooked.",
              explanation: "中文说肉“老了”通常指纤维粗硬，英文用 overcooked 表示烹饪过度。",
            },
            formalityVariants: {
              casual: "I'll put it out there. Btw, the steak was kinda overdone. Wanted medium-rare.",
              standard:
                "I'll put it outside. Also, I noticed the steak was a bit overcooked. I had asked for medium-rare.",
              formal:
                "I will place it outside. Furthermore, I must note that the steak was somewhat overcooked, despite my request for medium-rare preparation.",
            },
          },
          {
            speaker: "them",
            role: "接线员",
            textEn:
              "I sincerely apologize for that. I'll let the kitchen know. Would you like us to send up a replacement, or can I offer you a complimentary dessert?",
            textZh: "非常抱歉。我会通知厨房。您需要我们重新送一份，还是我送您一份免费甜点？",
            culturalNote: "酒店通常会主动提供补偿，不必害怕接受。",
            keyPhrases: [
              { en: "sincerely apologize", zh: "真诚道歉" },
              { en: "replacement", zh: "替换品/重新做一份" },
              { en: "complimentary", zh: "免费赠送的" },
            ],
            vocabNotes: {
              complimentary: {
                meaningInContext: "在这句话里表示：免费赠送的（作为补偿）",
                similarUsage: "类似用法：complimentary breakfast（免费早餐）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "I'm very sorry about that. I can send up a new steak or offer a free dessert as an apology.",
                textZh: "非常抱歉。我可以重新送一份牛排，或者送一份免费甜点作为补偿。",
                actionHint: "选择重做或接受甜点",
                frequency: "common",
              },
              {
                textEn: "My apologies! Would you like us to redo the steak, or can I comp you a dessert instead?",
                textZh: "很抱歉！要重做牛排，还是送您一份甜点？",
                actionHint: "选一种补偿方式",
                frequency: "occasional",
              },
            ],
            isBranchPoint: true,
            responseTip: "可以接受重新做，也可以接受甜点补偿",
            casualVersion:
              "Oh, my bad on that. I'll tell the kitchen. Want another steak sent up, or can I hook you up with a free dessert?",
            formalityVariants: {
              casual: "Sorry about that. I'll tell the kitchen. Want a new one, or can I get you a free dessert?",
              standard:
                "I sincerely apologize for that. I'll let the kitchen know. Would you like us to send up a replacement, or can I offer you a complimentary dessert?",
              formal:
                "Please accept my sincerest apologies for that oversight. I will promptly inform the kitchen. Would you prefer we arrange for a replacement, or may I offer you a complimentary dessert as a gesture of our regret?",
            },
          },
          {
            speaker: "you",
            textEn: "I'm too full for another steak, but I'd love the complimentary dessert. What do you have?",
            textZh: "我已经吃饱了不需要再来一份牛排，但免费甜点我很乐意。有什么？",
            casualVersion: "Nah, I'm stuffed for another steak, but a free dessert? Yeah, I'm down. What's good?",
            commonMistake: {
              wrong: "I am full to have another steak. What desserts you have?",
              correct: "I'm too full for another steak, but I'd love the complimentary dessert. What do you have?",
              explanation: "“too full for”更自然。“What do you have?”在语境清晰时更地道。",
            },
            formalityVariants: {
              casual: "Too full for more steak, but a free dessert sounds awesome! What've you got?",
              standard: "I'm too full for another steak, but I'd love the complimentary dessert. What do you have?",
              formal:
                "I am quite replete for an additional steak at this moment, but I would certainly welcome a complimentary dessert. What options are available?",
            },
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
              {
                textEn: "We have cheesecake, chocolate lava cake, or crème brûlée. They're all amazing.",
                textZh: "有芝士蛋糕、巧克力熔岩蛋糕和焦糖布蕾。都非常好吃。",
                actionHint: "选一种甜点",
                frequency: "common",
              },
              {
                textEn: "For dessert, I'd recommend the lava cake or the crème brûlée — both are chef's favorites.",
                textZh: "甜点的话推荐熔岩蛋糕或焦糖布蕾——都是厨师最爱。",
                actionHint: "选一款",
                frequency: "occasional",
              },
            ],
            casualVersion: "Got New York cheesecake, chocolate lava cake, or crème brûlée. All good stuff.",
            formalityVariants: {
              casual: "Cheesecake, lava cake, or crème brûlée. They're all great.",
              standard: "We have a New York cheesecake, chocolate lava cake, or crème brûlée. All excellent choices.",
              formal:
                "Our dessert selections include a New York cheesecake, a chocolate lava cake, and a crème brûlée. All are highly recommended options.",
            },
          },
          {
            speaker: "you",
            textEn: "The crème brûlée sounds perfect. Thank you for making it right.",
            textZh: "焦糖布蕾听起来很好。谢谢你们妥善处理。",
            culturalNote: '"making it right" 是称赞对方解决问题的好说法。',
            casualVersion: "Crème brûlée sounds perfect. Thanks for sorting that out.",
            commonMistake: {
              wrong: "Thank you for doing it correct.",
              correct: "Thank you for making it right.",
              explanation: "“make it right”是一个非常地道的表达，意思是弥补过失、妥善处理。",
            },
            formalityVariants: {
              casual: "Crème brûlée's great. Thanks for fixing it.",
              standard: "The crème brûlée sounds perfect. Thank you for making it right.",
              formal:
                "The crème brûlée sounds delightful. I appreciate your diligent efforts in rectifying the situation.",
            },
          },
          {
            speaker: "them",
            role: "接线员",
            textEn:
              "It's my pleasure. I'll have the crème brûlée sent up to you within 20 minutes. Again, my apologies for the inconvenience.",
            textZh: "很荣幸为您服务。焦糖布蕾会在20分钟内送到。再次为不便表示歉意。",
            keyPhrases: [
              { en: "it's my pleasure", zh: "很荣幸为您服务" },
              { en: "apologies for the inconvenience", zh: "为不便表示歉意" },
            ],
            alternativeExpressions: [
              {
                textEn: "Of course! The crème brûlée will be up in about 20 minutes. Sorry again for the mix-up.",
                textZh: "当然！焦糖布蕾大约20分钟送到。再次为失误道歉。",
                actionHint: "等甜点送来",
                frequency: "common",
              },
              {
                textEn: "Happy to help. I'll have that sent to your room shortly. Again, I apologize for the steak.",
                textZh: "很高兴能帮到您。马上送到您房间。再次为牛排的事道歉。",
                actionHint: "在房间等就好",
                frequency: "common",
              },
            ],
            casualVersion:
              "My pleasure. I'll get that crème brûlée sent up in like 20. And seriously, sorry again about the hassle.",
            formalityVariants: {
              casual: "Anytime. Crème brûlée's coming up in 20. And really, sorry about the trouble.",
              standard:
                "It's my pleasure. I'll have the crème brûlée sent up to you within 20 minutes. Again, my apologies for the inconvenience.",
              formal:
                "The pleasure is entirely mine. I will ensure the crème brûlée is delivered to your room within 20 minutes. Once again, I extend my apologies for any inconvenience this may have caused.",
            },
          },
          {
            speaker: "you",
            textEn: "No worries at all. Have a good night!",
            textZh: "没关系的。晚安！",
            casualVersion: "No worries. Have a good one!",
            commonMistake: {
              wrong: "Don't worry.",
              correct: "No worries at all.",
              explanation: "“No worries”比 “Don't worry” 更地道、更随意，用于表示“没关系”。",
            },
            formalityVariants: {
              casual: "All good. Later!",
              standard: "No worries at all. Have a good night!",
              formal: "None taken. I wish you a pleasant evening.",
            },
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
            textEn:
              "Excuse me, I think there's been a mix-up with my order. I ordered the grilled chicken, but this looks like the fried chicken.",
            textZh: "不好意思，我的菜好像上错了。我点的是烤鸡，但这看着像炸鸡。",
            culturalNote: '用 "I think there\'s been a mix-up" 比直接说 "You gave me the wrong food" 更礼貌。',
            casualVersion:
              "Hey, I think my order got mixed up. I asked for grilled chicken, but this looks like fried.",
            commonMistake: {
              wrong: "My dish is wrong.",
              correct: "There's been a mix-up with my order.",
              explanation: '"My dish is wrong" 过于直接，用 "mix-up" 更委婉自然。',
            },
            formalityVariants: {
              casual: "Hey, I think my order's wrong. I got grilled chicken, not fried.",
              standard:
                "Excuse me, I think there's been a mix-up with my order. I ordered the grilled chicken, but this looks like the fried chicken.",
              formal:
                "Pardon me, but it appears there may have been an error with my order. I specifically requested the grilled chicken, however, what has been presented seems to be the fried chicken.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Oh, I'm so sorry about that! Let me check your order... You're right, you ordered the grilled chicken. I'll fix this right away.",
            textZh: "哦，非常抱歉！让我查一下您的单……确实，您点的是烤鸡。我马上帮您换。",
            commonMistake: {
              wrong: "Oh, I am very sorry! Let me check your order...",
              correct: "Oh, I'm so sorry! Let me check your order...",
              explanation: "中文的“非常抱歉”直译过来可能会省略be动词，听起来不自然。",
            },
            keyPhrases: [
              { en: "mix-up", zh: "搞混了" },
              { en: "fix this right away", zh: "马上解决" },
            ],
            alternativeExpressions: [
              {
                textEn: "My apologies! That's our mistake. Let me get the kitchen to redo it.",
                textZh: "抱歉！是我们的失误。我让厨房重做。",
                actionHint: "等新菜即可",
                frequency: "common",
              },
            ],
            casualVersion: "Oh, shoot, my bad! Lemme just check... Yep, grilled chicken. I'll get this sorted pronto.",
            formalityVariants: {
              casual: "Oops, my bad! Let me just look... Yep, grilled. I'll get it fixed ASAP.",
              standard:
                "Oh, I'm so sorry about that! Let me check your order... You're right, you ordered the grilled chicken. I'll fix this right away.",
              formal:
                "My sincerest apologies for this oversight! Allow me to verify your order... Indeed, you did request the grilled chicken. I will rectify this situation immediately.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. Will it take long? We're kind of in a hurry.",
            textZh: "谢谢。会很久吗？我们有点赶时间。",
            casualVersion: "Thanks. Gonna be a while? We're kinda in a rush.",
            commonMistake: {
              wrong: "Will it take a long time?",
              correct: "Will it take long?",
              explanation: '"take long" 更简洁自然，"take a long time" 虽不错但稍显累赘。',
            },
            formalityVariants: {
              casual: "Thanks. Gonna be long? We're kinda rushing.",
              standard: "Thank you. Will it take long? We're kind of in a hurry.",
              formal: "Thank you. Might this necessitate a significant wait? We are somewhat pressed for time.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "I'll ask the kitchen to prioritize it. Should be about 8 to 10 minutes. In the meantime, can I get you a complimentary appetizer while you wait?",
            textZh: "我让厨房优先做。大概8到10分钟。等的时候要不要来一份免费开胃菜？",
            commonMistake: {
              wrong: "I will let kitchen priority do it. About 8 to 10 minutes.",
              correct: "I'll have the kitchen prioritize it. About 8 to 10 minutes.",
              explanation: "中文直译“让厨房优先做”会变成逐字翻译，不够地道。",
            },
            keyPhrases: [
              { en: "prioritize", zh: "优先处理" },
              { en: "in the meantime", zh: "在此期间" },
              { en: "complimentary appetizer", zh: "免费开胃菜" },
            ],
            vocabNotes: {
              prioritize: {
                meaningInContext: "在这句话里表示：让厨房优先处理你的菜，排到前面",
                similarUsage: "类似用法：We'll prioritize your request.（我们会优先处理你的请求）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "I'll rush it to the kitchen. About 8 minutes. Want something to munch on while you wait?",
                textZh: "我让厨房加急。大概8分钟。等的时候要来点吃的吗？",
                actionHint: "接受或婉拒免费开胃菜",
                frequency: "common",
              },
              {
                textEn:
                  "I'll have the kitchen put yours first. Should be quick. Can I bring you a starter on the house in the meantime?",
                textZh: "我让厨房优先做你的。很快。等的时候要不要来一份免费前菜？",
                actionHint: "接受补偿",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "I'll tell the kitchen to rush it. Prob'ly like 8-10 mins. Wanna a free appetizer while you wait?",
            culturalNote: "美国服务业常提供免费补偿以挽回顾客",
            formalityVariants: {
              casual: "I'll tell the kitchen to hurry it up. Prob'ly 8-10 minutes. Want a free app while you wait?",
              standard:
                "I'll ask the kitchen to prioritize it. Should be about 8 to 10 minutes. In the meantime, can I get you a complimentary appetizer while you wait?",
              formal:
                "I shall request the kitchen expedite its preparation. It should require approximately 8 to 10 minutes. May I offer you a complimentary appetizer while you anticipate your meal?",
            },
          },
          {
            speaker: "you",
            textEn: "That would be great, thank you. I appreciate it.",
            textZh: "那太好了，谢谢。非常感谢。",
            casualVersion: "Yeah, that'd be awesome, thanks! Really appreciate it.",
            commonMistake: {
              wrong: "Thank you.",
              correct: "That would be great, thank you. I appreciate it.",
              explanation: '加上 "That would be great" 和 "I appreciate it" 让感谢更真诚。',
            },
            formalityVariants: {
              casual: "Yeah, awesome, thanks! Appreciate it.",
              standard: "That would be great, thank you. I appreciate it.",
              formal: "That would be most welcome, thank you. Your consideration is greatly appreciated.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Here's your grilled chicken. Again, I'm really sorry for the mistake. I've also spoken with my manager, and we'll be taking the chicken off your bill.",
            textZh: "您的烤鸡来了。再次为错误道歉。我也跟经理说了，烤鸡这道菜会从您的账单上去掉。",
            commonMistake: {
              wrong: "Your roasted chicken came. Again apologize for the mistake.",
              correct: "Here's your roasted chicken. Again, I apologize for the mistake.",
              explanation: "中文直译“烤鸡来了”不自然，美式口语常用Here you go或Here's...",
            },
            keyPhrases: [{ en: "taking it off your bill", zh: "从账单上去掉/免单" }],
            vocabNotes: {
              "off your bill": {
                meaningInContext: "在这句话里表示：从你的账单中扣除、不收这道菜的钱",
                similarUsage: "类似用法：We'll take 20% off your bill.（给您打八折）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Here you go. The manager said this one's on the house.",
                textZh: "给您。经理说这道菜免单。",
                actionHint: "on the house 就是免费的意思",
                frequency: "common",
              },
            ],
            casualVersion:
              "Here's your grilled chicken. Seriously, my bad about the screw-up. Talked to my manager, too – we're taking the chicken off your bill.",
            culturalNote: "美国餐厅常通过免单或折扣来弥补服务失误",
            formalityVariants: {
              casual:
                "Grilled chicken's here. Super sorry 'bout the screw-up. Manager said we're taking it off your bill.",
              standard:
                "Here's your grilled chicken. Again, I'm really sorry for the mistake. I've also spoken with my manager, and we'll be taking the chicken off your bill.",
              formal:
                "Here is your grilled chicken. Once more, I extend my sincerest apologies for the error. Furthermore, I have consulted with my manager, and we will be pleased to remove the charge for this item from your final bill.",
            },
          },
          {
            speaker: "you",
            textEn: "Wow, that's very generous. Thank you so much!",
            textZh: "哇，太大方了。非常感谢！",
            casualVersion: "Whoa, that's super generous! Thanks a ton!",
            commonMistake: {
              wrong: "Very kind!",
              correct: "That's very generous.",
              explanation: '"generous" 是更地道、具体的说法来形容这种好意。',
            },
            formalityVariants: {
              casual: "Wow, that's awesome! Thanks a bunch!",
              standard: "Wow, that's very generous. Thank you so much!",
              formal: "Indeed, that is most generous of you. My profound thanks!",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "It's the least we can do. Please enjoy your meal, and let me know if there's anything else I can help with.",
            textZh: "这是我们应该做的。请享用，有需要随时叫我。",
            culturalNote: "“这是我们应该做的”在英语中有很多地道说法，如“It's our pleasure”或“It's the least w",
            commonMistake: {
              wrong: "It is what we should do. Please enjoy.",
              correct: "It's our pleasure. Please enjoy.",
              explanation: "中文“这是我们应该做的”直译不自然，地道说法是It's our pleasure或It's the least we could do。",
            },
            keyPhrases: [{ en: "the least we can do", zh: "这是我们应该做的" }],
            alternativeExpressions: [
              {
                textEn: "It's the least we can do. Enjoy, and just wave if you need anything.",
                textZh: "这是应该的。慢用，有需要招呼我。",
                actionHint: "享受用餐",
                frequency: "common",
              },
              {
                textEn: "Happy to make it right. Let me know if there's anything else I can do for you.",
                textZh: "很高兴能妥善解决。还有什么需要尽管说。",
                actionHint: "继续用餐",
                frequency: "common",
              },
            ],
            casualVersion: "Least we could do. Enjoy your food, and just holler if you need anything else.",
            formalityVariants: {
              casual: "Least we could do. Enjoy your meal, and just let me know if you need anything.",
              standard:
                "It's the least we can do. Please enjoy your meal, and let me know if there's anything else I can help with.",
              formal:
                "It is merely the least we could offer. Please do enjoy your meal, and do not hesitate to inform me if there is anything further I may assist you with.",
            },
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
            casualVersion: "Excuse me, been waiting like 45 minutes for our food. Is our order okay?",
            commonMistake: {
              wrong: "Our food is not coming. Is it okay?",
              correct: "We've been waiting over 45 minutes for our food. Is everything okay with our order?",
              explanation: "中式思维可能直说“菜还没来”，但委婉表达更自然。",
            },
            formalityVariants: {
              casual: "Hey, we've been waiting like 45 mins for our food. Is it coming?",
              standard:
                "Excuse me, we've been waiting over 45 minutes for our food. Is everything okay with our order?",
              formal:
                "Pardon me, but we've been waiting in excess of forty-five minutes for our meal. May I inquire if there is any issue with our order?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "I'm so sorry for the wait. Let me check with the kitchen right now. I'll be right back.",
            textZh: "非常抱歉让您久等了。我马上去厨房问一下。马上回来。",
            commonMistake: {
              wrong: "I am very sorry make you wait long. I immediately go to kitchen ask. Come back soon.",
              correct: "I'm so sorry to keep you waiting. I'll go to the kitchen to check right away. I'll be right back.",
              explanation: "中文直译“让你久等很抱歉”听起来不自然。“我马上去厨房问”也需要地道表达。",
            },
            keyPhrases: [
              { en: "sorry for the wait", zh: "抱歉让您等了" },
              { en: "check with the kitchen", zh: "去厨房问问" },
            ],
            alternativeExpressions: [
              {
                textEn: "I apologize for the delay. Let me go find out what's happening. Be right back.",
                textZh: "为延误道歉。我去问问什么情况。马上回来。",
                actionHint: "等服务员回来报告",
                frequency: "common",
              },
              {
                textEn: "So sorry about the wait. I'll check on your order right now.",
                textZh: "等久了真抱歉。我现在就去查你们的单。",
                actionHint: "耐心等一下",
                frequency: "common",
              },
            ],
            casualVersion: "So sorry 'bout the wait. Lemme check with the kitchen now. Be right back.",
            formalityVariants: {
              casual: "Oh, sorry 'bout the wait. Lemme check the kitchen. I'll be right back.",
              standard: "I'm so sorry for the wait. Let me check with the kitchen right now. I'll be right back.",
              formal:
                "My sincerest apologies for the extended wait. I will investigate with the kitchen immediately and return momentarily.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "I checked, and your order should be out in about 5 more minutes. We're very busy tonight — I apologize again. Can I get you another round of drinks on the house while you wait?",
            textZh: "我问了，您的菜大概再5分钟就好。今晚特别忙——再次道歉。等的时候再来一轮免费饮品好吗？",
            culturalNote: "解释原因、再次道歉、提供补偿是处理顾客等待不满的有效组合拳。",
            commonMistake: {
              wrong: "I checked, your order should be out in about 5 more minutes. Tonight is special busy—again, apologize.",
              correct: "I checked, and your order should be out in about 5 more minutes. It's especially busy tonight—again, I apologize.",
              explanation: "中文直译“今晚特别忙”不够地道，通常需要be动词。",
            },
            keyPhrases: [
              { en: "should be out", zh: "应该会上来" },
              { en: "round of drinks", zh: "一轮饮品" },
              { en: "on the house", zh: "免费的/店家请客" },
            ],
            vocabNotes: {
              "on the house": {
                meaningInContext: "在这句话里表示：由店家买单、免费的",
                similarUsage: "类似用法：Dessert is on the house tonight.（今晚甜品免单）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Good news — your food will be out in 5. I'm really sorry again. Can I bring free drinks while you wait?",
                textZh: "好消息——您的菜5分钟就到。再次抱歉。等的时候要来免费饮品吗？",
                actionHint: "接受免费饮品",
                frequency: "common",
              },
              {
                textEn:
                  "Almost ready! Kitchen's really backed up tonight. How about a round on us to make up for the wait?",
                textZh: "快好了！今晚厨房确实很忙。要不来一轮免费的补偿一下？",
                actionHint: "接受补偿饮品",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Okay, checked it. Your order should be out in like 5 more. Super busy tonight, sorry 'bout that. Can I get you another round of drinks on us while you wait?",
            formalityVariants: {
              casual:
                "Alright, I checked. Your order's about 5 mins out. Super busy tonight, my bad. Can I grab you another round of drinks, on us, while you wait?",
              standard:
                "I checked, and your order should be out in about 5 more minutes. We're very busy tonight — I apologize again. Can I get you another round of drinks on the house while you wait?",
              formal:
                "I have confirmed with the kitchen, and your order is expected to be served within approximately five minutes. We are experiencing an exceptionally high volume of guests this evening, for which I extend my renewed apologies. May I offer you a complimentary round of beverages while you await your meal?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, thank you. That would help. But when the food arrives, I hope the quality matches the wait.",
            textZh: "好的，谢谢。但是菜上来的时候，我希望质量对得起这个等待时间。",
            casualVersion:
              "Yeah, thanks. That helps. But when the food gets here, it better be good, considering how long we waited.",
            commonMistake: {
              wrong: "I hope the food is good because we waited long.",
              correct: "But when the food arrives, I hope the quality matches the wait.",
              explanation: "“质量对得起等待”比“希望食物好”更精准表达不满与期望。",
            },
            formalityVariants: {
              casual:
                "Yeah, thanks. That's good. But seriously, when it finally gets here, the food better be worth the wait.",
              standard:
                "Yes, thank you. That would help. But when the food arrives, I hope the quality matches the wait.",
              formal:
                "Yes, thank you; that would be most appreciated. However, I must express my expectation that the quality of the cuisine will be commensurate with the extended waiting period.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Here we are, finally! Please let me know how everything tastes.",
            textZh: "终于来了！请告诉我味道怎么样。",
            culturalNote: "服务员通常会直接邀请顾客评价食物，表示对服务质量的关注。",
            commonMistake: {
              wrong: "Your food finally came! Please let me know how everything tastes.",
              correct: "Here we are, finally! Please let me know how everything tastes.",
              explanation: "中文直译“你的菜终于来了”不自然，美式口语常用Here we are或Here's your food。",
            },
            alternativeExpressions: [
              {
                textEn: "Sorry for the wait! Here's your order. Let me know if everything looks good.",
                textZh: "抱歉久等！您的菜来了。看看是否都没问题。",
                actionHint: "检查食物是否正确",
                frequency: "common",
              },
              {
                textEn: "Finally got it! Again, sorry about the delay. Enjoy!",
                textZh: "终于好了！再次为等待道歉。请慢用！",
                actionHint: "检查菜品质量",
                frequency: "common",
              },
            ],
            casualVersion: "Alright, here it is! Lemme know how it tastes.",
            formalityVariants: {
              casual: "Okay, here it is! Tell me how it tastes.",
              standard: "Here we are, finally! Please let me know how everything tastes.",
              formal: "Your meal has arrived. Kindly inform me if everything meets your satisfaction.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Actually, this steak is cold in the middle, and the fries are soggy. I'm sorry, but this isn't acceptable. Could I speak with the manager?",
            textZh: "说实话，这个牛排中间是冷的，薯条也软塌塌的。不好意思，但这不能接受。我能和经理谈谈吗？",
            commonMistake: {
              wrong: "Actually, this steak middle is cold, and fries are soft. I afraid this cannot accept.",
              correct: "Actually, this steak is cold in the middle, and the fries are soggy. I'm afraid this is unacceptable.",
              explanation: "中文直译“中间是冷的”或“薯条软塌塌的”都不自然。“这不能接受”也需更地道表达。",
            },
            culturalNote: "在美国，要求见经理（speak with the manager）是处理严重问题的标准做法，不算失礼。",
            casualVersion:
              "Ugh, this steak's cold in the middle, and the fries are soggy. Seriously, this isn't okay. Can I talk to your manager?",
            formalityVariants: {
              casual: "Okay, this steak's cold, fries are soggy. Not cool. Can I get the manager?",
              standard:
                "Actually, this steak is cold in the middle, and the fries are soggy. I'm sorry, but this isn't acceptable. Could I speak with the manager?",
              formal:
                "Regrettably, the steak is inadequately warm in the center, and the accompanying fries are unacceptably limp. I find this unsatisfactory and would therefore appreciate the opportunity to speak with the manager.",
            },
          },
          {
            speaker: "them",
            role: "经理",
            textEn:
              "Hi, I'm Sarah, the manager on duty tonight. I understand you've had a poor experience, and I'm truly sorry. What can I do to make this right?",
            textZh: "你好，我是 Sarah，今晚的值班经理。我了解您今晚的体验不好，非常抱歉。我能做什么来弥补？",
            culturalNote: "美国餐厅经理通常拥有较大权力，可以迅速且有效地解决顾客问题，这是服务文化的一部分。",
            commonMistake: {
              wrong: "Hello, I am Sarah, tonight's manager. I understand your experience tonight not good, very sorry.",
              correct: "Hi, I'm Sarah, tonight's manager. I understand your experience tonight hasn't been good, and I'm very sorry.",
              explanation: "中文直译“今晚的经理”不自然。“体验不好很抱歉”也需要更自然的表达。",
            },
            keyPhrases: [
              { en: "manager on duty", zh: "值班经理" },
              { en: "make this right", zh: "弥补/解决问题" },
            ],
            alternativeExpressions: [
              {
                textEn: "I'm the manager. I heard there was an issue — tell me what happened.",
                textZh: "我是经理。听说出了问题——跟我说说怎么回事。",
                actionHint: "详细说明你的问题",
                frequency: "common",
              },
            ],
            casualVersion:
              "Hey, I'm Sarah, the manager tonight. Sounds like you had a bad time, and I'm really sorry. How can I fix this for you?",
            formalityVariants: {
              casual:
                "Hey, Sarah, manager tonight. Sounds like you had a rough time, really sorry. How can I make it up to you?",
              standard:
                "Hi, I'm Sarah, the manager on duty tonight. I understand you've had a poor experience, and I'm truly sorry. What can I do to make this right?",
              formal:
                "Good evening, I am Sarah, the manager overseeing operations this evening. I am fully apprised of your dissatisfactory experience, and I extend my sincerest apologies. Please advise how I may rectify this situation for you.",
            },
          },
          {
            speaker: "you",
            textEn:
              "We waited 45 minutes, and the steak arrived cold with soggy fries. We're celebrating a birthday, and this has really put a damper on the evening.",
            textZh: "我们等了45分钟，牛排上来是冷的，薯条也不脆。我们在庆祝生日，今晚的体验真的大打折扣。",
            culturalNote: "在投诉时提及特殊场合（如生日）往往能让服务人员更重视，并提供更慷慨的补偿。",
            casualVersion:
              "We waited 45 minutes, then got a cold steak and soggy fries. And it's for a birthday, so this kinda ruined the night.",
            commonMistake: {
              wrong: "This ruined our mood for birthday.",
              correct: "This has really put a damper on the evening.",
              explanation: "“put a damper on”是常用习语，表示“扫兴、泼冷水”。",
            },
            formalityVariants: {
              casual:
                "Seriously, 45-min wait, cold steak, soggy fries. And it's a birthday, so it kinda messed up the whole night.",
              standard:
                "We waited 45 minutes, and the steak arrived cold with soggy fries. We're celebrating a birthday, and this has really put a damper on the evening.",
              formal:
                "After a forty-five minute wait, our steak was served cold and the fries were unfortunately soggy. Furthermore, we are celebrating a birthday this evening, and this sequence of events has, regrettably, significantly diminished the celebratory atmosphere.",
            },
          },
          {
            speaker: "them",
            role: "经理",
            textEn:
              "I completely understand, and that's not the experience we want for anyone, especially on a birthday. I'll have the kitchen redo the steak and fries right away. And I'd like to comp your entire meal tonight as an apology.",
            textZh:
              "我完全理解，这不是我们想给任何人的体验，尤其是在生日。我会让厨房马上重做牛排和薯条。为了道歉，今晚你们的整顿饭我来免单。",
            culturalNote: "在非常糟糕的用餐体验，尤其涉及特殊场合时，经理免掉整单是美国高级别服务恢复的常见做法。",
            commonMistake: {
              wrong: "I completely understand, and this is not we want to give anyone experience, especially on a birthday.",
              correct: "I completely understand, and that's not the experience we want for anyone, especially on a birthday.",
              explanation: "“这不是我们想给任何人的体验”的直译会省略定冠词或be动词，不够自然。",
            },
            keyPhrases: [
              { en: "comp your meal", zh: "免单" },
              { en: "redo", zh: "重做" },
            ],
            vocabNotes: {
              comp: {
                meaningInContext: "在这句话里表示：免费提供（complimentary 的简写，餐饮业常用）",
                similarUsage: "类似用法：I'll comp your drinks.（饮料算我的）",
              },
              "put a damper on": {
                meaningInContext: "在这句话里表示：给…泼冷水、扫兴",
                similarUsage: "类似用法：The rain put a damper on our picnic.（下雨扫了我们野餐的兴）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "That's completely unacceptable and I'm so sorry. I'll redo everything immediately and your meal tonight is on us.",
                textZh: "这完全不能接受，非常抱歉。我立刻让厨房重做，今晚这顿饭我们请了。",
                actionHint: "接受道歉和补偿",
                frequency: "common",
              },
              {
                textEn:
                  "I'm really sorry, especially on a birthday. Let me fix this — new food and the whole bill is covered.",
                textZh: "太抱歉了，尤其是在生日。让我来处理——重做菜品，整顿免单。",
                actionHint: "表达感谢",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Totally get it, that's not what we want for anyone, especially a birthday. I'll get the kitchen to redo your steak and fries ASAP. And your whole meal's on us tonight, as an apology.",
            formalityVariants: {
              casual:
                "I totally get it, that's just not cool for anyone, especially for a birthday. I'll have the kitchen remake your steak and fries right now. And, your whole meal's on me tonight, as an apology.",
              standard:
                "I completely understand, and that's not the experience we want for anyone, especially on a birthday. I'll have the kitchen redo the steak and fries right away. And I'd like to comp your entire meal tonight as an apology.",
              formal:
                "I fully comprehend your disappointment, and such an experience is certainly not what we aim to provide, particularly on a celebratory occasion such as a birthday. I will immediately instruct the kitchen to prepare fresh steak and fries for you. As a gesture of our sincerest apologies, your entire meal tonight will be complimentary.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Thank you, Sarah. I really appreciate you handling this so well. We'll definitely give the restaurant another chance.",
            textZh: "谢谢你，Sarah。非常感谢你处理得这么好。我们一定会再给餐厅一次机会的。",
            commonMistake: {
              wrong: "Thank you, Sarah. I really appreciate you handle this so well. We will definitely give restaurant a chance again.",
              correct: "Thank you, Sarah. I really appreciate you handling this so well. We'll definitely give the restaurant another chance.",
              explanation: "“处理得这么好”需要用动名词形式。中文“再给一次机会”直译会省略冠词和“another”显得不自然。",
            },
            casualVersion: "Thanks, Sarah. Really appreciate you fixing this. We'll definitely come back.",
            formalityVariants: {
              casual: "Thanks, Sarah. Really appreciate you sorting this out. We'll for sure come back.",
              standard:
                "Thank you, Sarah. I really appreciate you handling this so well. We'll definitely give the restaurant another chance.",
              formal:
                "Thank you, Sarah. Your professional and effective resolution of this matter is greatly appreciated. We will certainly consider returning to your establishment in the future.",
            },
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
            casualVersion: "Wanna start with a drink? Here's the menu.",
            culturalNote: "美国服务员会主动询问点喝的，很常见。",
            formalityVariants: {
              casual: "Wanna start with a drink? Here's the menu.",
              standard: "Can I get you started with something to drink? Here is our drink menu.",
              formal: "Good evening, may I offer you something to drink to begin your meal? Here is our comprehensive beverage list.",
            },
            keyPhrases: [
              { en: "get you started", zh: "先来点" },
              { en: "wine list", zh: "酒单" },
            ],
            alternativeExpressions: [
              {
                textEn: "Would you like to see our beverage menu? We have an extensive wine selection.",
                textZh: "要看看我们的饮品菜单吗？我们的葡萄酒品种很多。",
                actionHint: "可以先看看酒单",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Thank you. I'm not very familiar with wines. We're ordering the steak and the salmon. What would you recommend?",
            textZh: "谢谢。我对葡萄酒不太了解。我们点了牛排和三文鱼。你有什么推荐？",
            casualVersion: "Thanks. Not super familiar with wine. We got steak and salmon. What do you recommend?",
            commonMistake: {
              wrong: "I don't know much about wine.",
              correct: "I'm not very familiar with wine.",
              explanation: "\"Don't know\" 听起来更像完全不懂，\"not familiar\" 表达不精通更得体。",
            },
            formalityVariants: {
              casual: "Thanks. Not super familiar with wine. We got steak and salmon. What do you recommend?",
              standard: "Thank you. I'm not very familiar with wine. We've ordered steak and salmon. Do you have any recommendations?",
              formal: "Thank you. I must confess, I am not particularly conversant with wines. Given that we have ordered the steak and salmon, might you offer some recommendations?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "For the steak, I'd suggest a full-bodied red — our Cabernet Sauvignon pairs beautifully with beef. For the salmon, a lighter Pinot Noir or a Chardonnay would work well. Would you like a glass of each, or would you prefer a bottle to share?",
            textZh:
              "配牛排的话，我推荐一款酒体饱满的红酒——我们的赤霞珠和牛肉非常搭。三文鱼的话，清淡一点的黑皮诺或霞多丽都不错。要各来一杯，还是开一瓶共享？",
            casualVersion: "For the steak, I'd go with a full-bodied red, our Cabernet pairs great with beef. For the salmon, a lighter Pinot Noir or Chardonnay works well. Wanna do glasses or a bottle to share?",
            formalityVariants: {
              casual: "For the steak, I'd go with a full-bodied red, our Cabernet pairs great with beef. For the salmon, a lighter Pinot Noir or Chardonnay works well. Wanna do glasses or a bottle to share?",
              standard: "For the steak, I would recommend a full-bodied red wine — our Cabernet Sauvignon pairs wonderfully with beef. For the salmon, a lighter Pinot Noir or Chardonnay would also be excellent choices. Would you prefer a glass of each, or a bottle to share?",
              formal: "Regarding the steak, I would highly recommend a full-bodied red, such as our Cabernet Sauvignon, which complements beef superbly. For the salmon, a lighter-bodied Pinot Noir or a crisp Chardonnay would be most suitable. Would you be inclined to order by the glass for each, or perhaps a bottle to share?",
            },
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
                similarUsage:
                  "类似用法：I prefer full-bodied reds over light whites.（比起清淡的白葡萄酒我更喜欢浓郁的红葡萄酒）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "A nice Cab Sauv would be perfect with the steak, and a Chardonnay or Pinot for the salmon. Glass or bottle?",
                textZh: "赤霞珠配牛排最好，三文鱼配霞多丽或黑皮诺。要按杯还是来一瓶？",
                actionHint: "选按杯点还是整瓶",
                frequency: "common",
              },
              {
                textEn:
                  "I'd pair a bold red with the beef and a lighter white with the fish. Want to go by the glass or share a bottle?",
                textZh: "牛肉配浓郁红酒，鱼配清淡白酒。想按杯点还是开一瓶分享？",
                actionHint: "告诉服务员你的选择",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Let's do a bottle of the Cabernet. How much is it?",
            textZh: "来一瓶赤霞珠吧。多少钱？",
            casualVersion: "Let's do a bottle of the Cabernet. How much is it?",
            commonMistake: {
              wrong: "How many money?",
              correct: "How much is it?",
              explanation: "\"How many\" 用于可数名词，\"how much\" 用于不可数名词和价格。",
            },
            formalityVariants: {
              casual: "Let's do a bottle of the Cabernet. How much is it?",
              standard: "Let's have a bottle of the Cabernet Sauvignon. What is the price?",
              formal: "We shall take a bottle of the Cabernet Sauvignon. Could you please inform me of its cost?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "The 2019 Napa Valley Cabernet is $65 a bottle. We also have a very nice Argentinian Malbec for $45 if you'd like something a bit more affordable but still excellent with steak.",
            textZh:
              "2019年纳帕谷赤霞珠每瓶65美元。如果想要实惠一点但同样配牛排很棒的，我们还有一款阿根廷马尔贝克45美元。",
            casualVersion: "The Napa Cab's $65 a bottle. We also got a pretty good Argentinian Malbec for $45 if you're looking for something cheaper but still good with steak.",
            culturalNote: "美国餐厅常提供不同价位选择，服务员会主动推荐。",
            formalityVariants: {
              casual: "The Napa Cab's $65 a bottle. We also got a pretty good Argentinian Malbec for $45 if you're looking for something cheaper but still good with steak.",
              standard: "The 2019 Napa Valley Cabernet is $65 a bottle. We also have a very nice Argentinian Malbec for $45 if you prefer a more economical yet equally suitable option for the steak.",
              formal: "The 2019 Napa Valley Cabernet Sauvignon is priced at $65 per bottle. Alternatively, should you desire a more moderately priced, yet equally excellent accompaniment for the steak, we also feature a very commendable Argentinian Malbec for $45.",
            },
            keyPhrases: [
              { en: "a bottle", zh: "一瓶" },
              { en: "affordable", zh: "实惠的" },
              { en: "Malbec", zh: "马尔贝克" },
            ],
            alternativeExpressions: [
              {
                textEn: "That one runs $65. If you want a great value, the Malbec at $45 is a solid pick.",
                textZh: "那款65美元。如果想要性价比高的，45美元的马尔贝克非常不错。",
                actionHint: "可以考虑更实惠的选项",
                frequency: "common",
              },
              {
                textEn: "The Cabernet's $65 — totally worth it. But our Malbec is a hidden gem at $45.",
                textZh: "赤霞珠65美元——绝对值。不过45美元的马尔贝克也是宝藏酒款。",
                actionHint: "两款都不错",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "We'll go with the Napa Cabernet. Could we also get a glass of white wine for my friend who's having the salmon?",
            textZh: "我们选纳帕赤霞珠。能再来一杯白葡萄酒吗？我朋友点了三文鱼。",
            casualVersion: "We'll do the Napa Cab. And can we get a glass of white wine too? My friend got the salmon.",
            commonMistake: {
              wrong: "Give me a glass of white wine.",
              correct: "Can we get a glass of white wine?",
              explanation: "直接说 \"give me\" 不太礼貌，\"Can we get\" 更自然客气。",
            },
            formalityVariants: {
              casual: "We'll do the Napa Cab. And can we get a glass of white wine too? My friend got the salmon.",
              standard: "We'll take the Napa Cabernet Sauvignon. Could we also have a glass of white wine? My friend ordered the salmon.",
              formal: "We shall proceed with the Napa Valley Cabernet Sauvignon. Furthermore, might we request a glass of white wine, as my companion has ordered the salmon?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Of course. Our Sonoma Chardonnay is $14 a glass — it's crisp and buttery, perfect with fish. I'll bring the bottle first so you can taste it before I pour.",
            textZh: "当然。我们的索诺玛霞多丽每杯14美元——清爽带有黄油感，配鱼非常好。我先把红酒拿来让您品尝一下再倒。",
            casualVersion: "Sure. Our Sonoma Chardonnay's $14 a glass — it's crisp, buttery, goes great with fish. I'll bring the red for you to taste first.",
            formalityVariants: {
              casual: "Sure. Our Sonoma Chardonnay's $14 a glass — it's crisp, buttery, goes great with fish. I'll bring the red for you to taste first.",
              standard: "Of course. Our Sonoma Chardonnay is $14 a glass — it's crisp and buttery, and pairs very well with fish. I will bring the red wine for you to taste before pouring.",
              formal: "Certainly. Our Sonoma Chardonnay is priced at $14 per glass — it possesses a delightful crispness with buttery undertones, making it an excellent complement to fish. I shall first present the red wine for your approval prior to serving.",
            },
            keyPhrases: [
              { en: "crisp", zh: "清爽的" },
              { en: "buttery", zh: "黄油感的" },
              { en: "taste", zh: "品尝" },
              { en: "pour", zh: "倒酒" },
            ],
            culturalNote:
              '在西式餐厅，服务员会先让点酒的人品尝一小口确认没问题再正式倒酒。这时你只需要轻啜一口，然后点头说"That\'s great"就行。',
            alternativeExpressions: [
              {
                textEn: "The Chardonnay by the glass is $14 — goes great with seafood. I'll let you try the red first.",
                textZh: "霞多丽每杯14美元——配海鲜很棒。我先让您试试红酒。",
                actionHint: "等服务员拿酒来品尝",
                frequency: "common",
              },
              {
                textEn: "For white, I'd suggest our house Chardonnay at $14. Lovely with the salmon.",
                textZh: "白葡萄酒的话，推荐14美元的招牌霞多丽。配三文鱼很棒。",
                actionHint: "接受推荐或另选",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds perfect. One more thing — do you have any dessert wines for later?",
            textZh: "太好了。再问一下——你们有甜酒配甜点吗？",
            casualVersion: "Sounds good. Oh, do you guys have any dessert wines for later?",
            formalityVariants: {
              casual: "Sounds good. Oh, do you guys have any dessert wines for later?",
              standard: "That sounds perfect. One more thing — do you have any dessert wines for later?",
              formal: "That sounds perfectly satisfactory. Furthermore, I was wondering if you offer any dessert wines for later?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "We have a lovely late-harvest Riesling and a port wine. I can bring the dessert wine menu when you're ready for dessert. Enjoy your wines!",
            textZh: "我们有一款很不错的晚收雷司令和波特酒。等您准备点甜点时我把甜酒单拿来。享用您的葡萄酒！",
            casualVersion: "We've got a nice late-harvest Riesling and a port. I can bring the dessert wine menu when you're ready for dessert. Enjoy your wine!",
            formalityVariants: {
              casual: "We've got a nice late-harvest Riesling and a port. I can bring the dessert wine menu when you're ready for dessert. Enjoy your wine!",
              standard: "We have a lovely late-harvest Riesling and a port wine. I can bring the dessert wine menu when you're ready for dessert. Enjoy your wine!",
              formal: "We feature a delightful late-harvest Riesling and a distinguished port wine. I would be pleased to present the dessert wine menu when you are prepared to order dessert. Please do enjoy your wine!",
            },
            keyPhrases: [
              { en: "late-harvest", zh: "晚收的（葡萄酿的甜酒）" },
              { en: "port wine", zh: "波特酒" },
              { en: "dessert wine", zh: "甜酒/餐后酒" },
            ],
            alternativeExpressions: [
              {
                textEn: "We've got a sweet Riesling and a port — perfect for after dinner. I'll bring the list later!",
                textZh: "我们有甜雷司令和波特酒——很适合餐后喝。稍后给您拿酒单！",
                actionHint: "稍后再看甜酒单",
                frequency: "common",
              },
              {
                textEn:
                  "For dessert wines, we have a few options. I'll swing by with the menu when you're wrapping up.",
                textZh: "甜酒有几个选择。您快吃完的时候我把菜单拿来。",
                actionHint: "不急，吃完再说",
                frequency: "occasional",
              },
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
            casualVersion: "Hey, I wanna get a cocktail but I'm not sure what. What's special here?",
            commonMistake: {
              wrong: "What is your feature?",
              correct: "What do you have that's special?",
              explanation: "\"Feature\" 在这里不是动词，应问有什么特色推荐，而不是直接问 \"feature\"。",
            },
            formalityVariants: {
              casual: "Hey, I wanna get a cocktail but I'm not sure what. What's special here?",
              standard: "Hi, I'd like to have a cocktail but I'm not sure what to order. Do you have any signature or special drinks?",
              formal: "Good evening, I am inclined to order a cocktail but am somewhat indecisive. Do you have any particular house specialties or signature offerings you might recommend?",
            },
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn:
              "Our signature cocktail is the 'Sunset Spritz' — it's made with Aperol, prosecco, and a splash of blood orange. If you prefer something stronger, our Old Fashioned is very popular. What flavors do you typically enjoy?",
            textZh:
              "我们的招牌鸡尾酒是'日落气泡酒'——用阿佩罗、普罗塞克和一点血橙调制。如果您喜欢烈一点的，我们的老式鸡尾酒很受欢迎。您一般喜欢什么口味？",
            casualVersion: "Our signature cocktail's the...",
            formalityVariants: {
              casual: "Our signature cocktail's the...",
              standard: "Our signature cocktail is the...",
              formal: "Our signature cocktail is the...",
            },
            keyPhrases: [
              { en: "signature cocktail", zh: "招牌鸡尾酒" },
              { en: "a splash of", zh: "一点点" },
              { en: "Old Fashioned", zh: "老式鸡尾酒" },
            ],
            vocabNotes: {
              signature: {
                meaningInContext: "在这句话里表示：店家的招牌/特色（不是签名）",
                similarUsage: "类似用法：What's your signature dish?（你们的招牌菜是什么？）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "We're known for our Sunset Spritz — super refreshing. Or the Old Fashioned if you like it strong. What's your vibe?",
                textZh: "我们以日落气泡酒出名——超级清爽。或者喜欢烈的就试老式鸡尾酒。你今天想喝什么风格？",
                actionHint: "告诉调酒师你的口味",
                frequency: "common",
              },
              {
                textEn:
                  "Our best sellers are the Sunset Spritz and the Old Fashioned. Do you lean sweet, sour, or spirit-forward?",
                textZh: "卖得最好的是日落气泡酒和老式鸡尾酒。你喜欢甜的、酸的还是酒味重的？",
                actionHint: "说出自己喜好",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I like fruity but not too sweet. Something refreshing.",
            textZh: "我喜欢水果味但不太甜的。清爽一点的。",
            casualVersion: "I like fruity but not too sweet. Something refreshing.",
            formalityVariants: {
              casual: "I like fruity but not too sweet. Something refreshing.",
              standard: "I prefer something fruity but not overly sweet. Something refreshing.",
              formal: "My preference leans towards something fruity, yet not excessively sweet. I would appreciate something refreshing.",
            },
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn:
              "I'd recommend our mojito — it's minty and citrusy with just a hint of sweetness. Or if you want something more tropical, the passion fruit margarita is tangy and refreshing. Both are great choices for a warm evening.",
            textZh:
              "我推荐我们的莫吉托——薄荷和柑橘味，带一点点甜。或者想要热带风情的话，百香果玛格丽特酸爽又清凉。温暖的夜晚两款都是好选择。",
            casualVersion: "I'd suggest our Mojito — it's got mint and citrus with just a touch of sweetness. Or, if you want something tropical, the Passion Fruit Margarita is tart and cool. Both are great for a warm evening.",
            formalityVariants: {
              casual: "I'd suggest our Mojito — it's got mint and citrus with just a touch of sweetness. Or, if you want something tropical, the Passion Fruit Margarita is tart and cool. Both are great for a warm evening.",
              standard: "I would recommend our Mojito — it features mint and citrus, with just a hint of sweetness. Alternatively, if you're leaning towards a tropical flavor, our Passion Fruit Margarita is wonderfully tart and cooling. Both are excellent choices for a warm evening.",
              formal: "I might suggest our Mojito, which is prepared with mint and citrus, offering a subtle sweetness. Should you prefer something more tropical, our Passion Fruit Margarita is delightfully tart and invigorating. Both selections are indeed splendid for a balmy evening.",
            },
            keyPhrases: [
              { en: "mojito", zh: "莫吉托" },
              { en: "minty", zh: "薄荷味的" },
              { en: "citrusy", zh: "柑橘味的" },
              { en: "tangy", zh: "酸爽的" },
              { en: "margarita", zh: "玛格丽特" },
            ],
            alternativeExpressions: [
              {
                textEn: "How about a Tom Collins? It's gin-based, light, and super refreshing with lemon.",
                textZh: "来一杯汤姆柯林斯怎么样？以金酒为基酒，清淡，配柠檬超级清爽。",
                actionHint: "也是不错的选择",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll try the mojito. Can you make it with less sugar?",
            textZh: "我试试莫吉托。能少放点糖吗？",
            casualVersion: "I'll try the Mojito. Can I get it with less sugar?",
            culturalNote: "美国服务很灵活，可以提出定制需求，例如少糖或无冰。",
            commonMistake: {
              wrong: "Can you less sugar?",
              correct: "Can I get it with less sugar?",
              explanation: "动词 \"less sugar\" 语法错误，应使用 \"with less sugar\" 或 \"less sweet\"。",
            },
            formalityVariants: {
              casual: "I'll try the Mojito. Can I get it with less sugar?",
              standard: "I'll try the Mojito. Could I have it with less sugar?",
              formal: "I believe I shall try the Mojito. Would it be possible to prepare it with reduced sugar?",
            },
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn:
              "Absolutely — I'll go light on the simple syrup. Would you like it with white rum or dark rum? Dark rum adds a bit more depth and caramel flavor.",
            textZh: "没问题——糖浆少放。要白朗姆还是黑朗姆？黑朗姆口感更有层次，带焦糖味。",
            casualVersion: "Totally — I'll tell 'em to go light on the syrup. White or dark rum? Dark's got more depth, kinda caramel-y.",
            formalityVariants: {
              casual: "Totally — I'll tell 'em to go light on the syrup. White or dark rum? Dark's got more depth, kinda caramel-y.",
              standard: "Absolutely — I'll ensure they go light on the syrup. Would you prefer white rum or dark rum? The dark rum offers a more complex, caramel-like flavor profile.",
              formal: "Certainly — I shall instruct the bartender to use a reduced amount of syrup. Do you have a preference for white rum or dark rum? The dark rum typically provides a greater depth of flavor, often with caramel notes.",
            },
            keyPhrases: [
              { en: "simple syrup", zh: "糖浆" },
              { en: "white rum", zh: "白朗姆" },
              { en: "dark rum", zh: "黑朗姆" },
              { en: "depth", zh: "层次感" },
            ],
            alternativeExpressions: [
              {
                textEn: "No problem, I'll cut back on the sugar. White or dark rum? Dark gives it a richer taste.",
                textZh: "没问题，糖少放。白朗姆还是黑朗姆？黑朗姆味道更浓。",
                actionHint: "选一种朗姆酒",
                frequency: "common",
              },
              {
                textEn: "Sure thing — less sweet, got it. Any preference on the rum?",
                textZh: "好的——少甜，收到。朗姆酒有偏好吗？",
                actionHint: "告诉调酒师选哪种",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "White rum, please. And my friend doesn't drink alcohol — do you have any mocktails?",
            textZh: "白朗姆。我朋友不喝酒——你们有无酒精鸡尾酒吗？",
            casualVersion: "White rum, please. And my friend doesn't drink — do you guys have any mocktails?",
            commonMistake: {
              wrong: "My friend don't drink alcohol.",
              correct: "My friend doesn't drink.",
              explanation: "\"My friend\" 是第三人称单数，动词应加 s。美语中 \"doesn't drink\" 通常指不喝酒。",
            },
            formalityVariants: {
              casual: "White rum, please. And my friend doesn't drink — do you guys have any mocktails?",
              standard: "White rum, please. And my friend doesn't drink alcohol — do you have any non-alcoholic cocktails?",
              formal: "White rum, if you please. My companion, however, abstains from alcohol — do you perhaps offer any non-alcoholic cocktails?",
            },
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn:
              "Of course! We have a great mocktail menu. The virgin mojito is popular, and we also have a cucumber-elderflower spritz that's really refreshing. They're all $8 — same presentation as our regular cocktails, just without the alcohol.",
            textZh:
              "当然！我们有很棒的无酒精菜单。无酒精莫吉托很受欢迎，还有黄瓜接骨木花气泡饮非常清爽。都是8美元——和普通鸡尾酒一样精心调制，只是没有酒精。",
            casualVersion: "Totally! We've got a great mocktail menu. The virgin mojito's popular, and we also have a cucumber-elderflower spritz that's super refreshing. Both are $8 — same care as a regular cocktail, just no booze.",
            culturalNote: "Mocktail是无酒精鸡尾酒，对不饮酒者很友好，是常见选项。",
            formalityVariants: {
              casual: "Totally! We've got a great mocktail menu. The virgin mojito's popular, and we also have a cucumber-elderflower spritz that's super refreshing. Both are $8 — same care as a regular cocktail, just no booze.",
              standard: "Of course! We have a great mocktail menu. The virgin mojito is popular, and we also have a cucumber-elderflower spritz that is incredibly refreshing. Both are $8 — crafted with the same care as our alcoholic cocktails, simply without the alcohol.",
              formal: "Indeed! We are pleased to offer a selection from our distinguished mocktail menu. The virgin mojito is quite popular, and we also feature a particularly invigorating cucumber-elderflower spritz. Both are priced at $8 — meticulously prepared with the same attention to detail as our alcoholic beverages, albeit without the spirits.",
            },
            keyPhrases: [
              { en: "mocktails", zh: "无酒精鸡尾酒" },
              { en: "virgin mojito", zh: "无酒精莫吉托" },
              { en: "elderflower", zh: "接骨木花" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Totally! We've got some amazing non-alcoholic drinks. The virgin mojito and the cucumber spritz are both great.",
                textZh: "当然！我们有很棒的无酒精饮品。无酒精莫吉托和黄瓜气泡饮都很好喝。",
                actionHint: "帮朋友选一款",
                frequency: "common",
              },
              {
                textEn: "Yeah, we have a whole mocktail section! They look and taste just like the real thing.",
                textZh: "有的，我们有一整个无酒精区！看起来和喝起来都跟真的一样。",
                actionHint: "看看无酒精菜单",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "She'll have the cucumber-elderflower spritz. Can we start a tab?",
            textZh: "她来一杯黄瓜接骨木花气泡饮。可以记账吗？",
            casualVersion: "She'll take the cucumber-elderflower spritz. Can we put it on the tab?",
            commonMistake: {
              wrong: "Can you count to the bill?",
              correct: "Can we put it on the tab/bill?",
              explanation: "\"Count to the bill\" 语法不通，\"put on the tab/bill\" 是正确的表达方式。",
            },
            formalityVariants: {
              casual: "She'll take the cucumber-elderflower spritz. Can we put it on the tab?",
              standard: "She'll have the cucumber-elderflower spritz. Could we add this to our tab?",
              formal: "She would prefer the cucumber-elderflower spritz. Might we request that this be added to our running bill?",
            },
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Sure! I'll need a credit card to hold the tab. I'll bring your drinks right out. Cheers!",
            textZh: "好的！需要一张信用卡作担保。马上为您调酒。干杯！",
            casualVersion: "Sure! I'll just need a credit card to hold it. I'll get those drinks started right away. Cheers!",
            formalityVariants: {
              casual: "Sure! I'll just need a credit card to hold it. I'll get those drinks started right away. Cheers!",
              standard: "Certainly! I'll just need a credit card to secure the tab. I'll get those drinks prepared for you immediately. Cheers!",
              formal: "By all means! I shall simply require a credit card for account security. Your beverages will be prepared without delay. Enjoy!",
            },
            keyPhrases: [
              { en: "start a tab", zh: "记账（不立刻结账）" },
              { en: "hold the tab", zh: "作为记账担保" },
              { en: "cheers", zh: "干杯" },
            ],
            vocabNotes: {
              tab: {
                meaningInContext: "在这句话里表示：酒吧的赊账/记账，最后统一结算（不是标签）",
                similarUsage: "类似用法：Can I close out my tab?（我可以结账了吗？）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Of course! Just leave a card with me and I'll keep your tab open. Coming right up!",
                textZh: "当然！把卡留给我，我帮你挂着账。马上来！",
                actionHint: "把信用卡交给调酒师",
                frequency: "common",
              },
              {
                textEn: "You got it! Card to start the tab, and I'll get those drinks going.",
                textZh: "没问题！先刷卡开账，我马上调酒。",
                actionHint: "递上信用卡即可",
                frequency: "occasional",
              },
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
            casualVersion: "Hey, I've got some dietary stuff. Got any vegan options?",
            commonMistake: {
              wrong: "Hello, I have some dietary limitation.",
              correct: "Hi, I have some dietary restrictions.",
              explanation: "dietary restrictions 是固定搭配，表达“饮食限制”，limitation 不常用且听起来不自然。",
            },
            formalityVariants: {
              casual: "Hi, I have diet restrictions. Vegan stuff on the menu?",
              standard: "Hi, I have some dietary restrictions. Do you have vegan options on the menu?",
              formal:
                "Good afternoon. I was wondering if you might have any vegan options available on your menu, as I have certain dietary requirements.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Yes, we do! Items marked with a green leaf symbol are vegan. We have about eight vegan dishes, including our roasted vegetable pasta, a quinoa bowl, and a black bean burger. I can also ask the chef to modify some dishes to make them vegan.",
            textZh:
              "有的！菜单上标有绿叶标志的是素食。我们有大约八道素菜，包括烤蔬菜意面、藜麦碗和黑豆汉堡。我也可以让厨师把一些菜改成纯素的。",
            commonMistake: {
              wrong: "Yes, we have. You can see the green leaf symbol. We have many vegan dishes. I can ask chef change some dishes for vegan.",
              correct: "Yes, we do! Items marked with a green leaf symbol are vegan. We have about eight vegan dishes, including our roasted vegetable pasta, a quinoa bowl, and a black bean burger. I can also ask the chef to modify some dishes to make them vegan.",
              explanation: "中式英语常遗漏介词、冠词，表达生硬。",
            },
            keyPhrases: [
              { en: "dietary restrictions", zh: "饮食限制" },
              { en: "vegan options", zh: "素食选项" },
              { en: "modify", zh: "修改/调整" },
              { en: "quinoa", zh: "藜麦" },
            ],
            vocabNotes: {
              vegan: {
                meaningInContext: "在这句话里表示：纯素（不含任何动物制品，包括蛋奶蜂蜜），比vegetarian更严格",
                similarUsage: "类似用法：Is this dish vegan-friendly?（这道菜适合纯素者吗？）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Absolutely! Look for the 'V' symbol on the menu. Our chef is very accommodating with dietary needs.",
                textZh: "当然！看菜单上'V'标志的菜品。我们的厨师非常配合饮食需求。",
                actionHint: "找菜单上的标志",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep, totally! Anything with a green leaf is vegan. Like eight dishes – roasted veggie pasta, quinoa bowl, black bean burger. Chef can even tweak others for you.",
            formalityVariants: {
              casual: "Yeah, we do! Green leaf symbol means vegan. Like eight dishes. Chef can modify stuff too.",
              standard:
                "Yes, we do! Items marked with a green leaf symbol are vegan. We have about eight vegan dishes, including our roasted vegetable pasta, a quinoa bowl, and a black bean burger. I can also ask the chef to modify some dishes to make them vegan.",
              formal:
                "Indeed, we do. Any item on our menu designated with a green leaf symbol is vegan. We currently feature approximately eight vegan selections, such as our roasted vegetable pasta, a quinoa bowl, and a black bean burger. Furthermore, the chef is often able to adapt other dishes to accommodate vegan preferences upon request.",
            },
          },
          {
            speaker: "you",
            textEn: "Great. My friend also needs halal food. Is your meat halal?",
            textZh: "好的。我朋友需要清真食物。你们的肉是清真的吗？",
            casualVersion: "Cool. My friend needs halal food too. Is your meat halal?",
            commonMistake: {
              wrong: "My friend also need halal food.",
              correct: "My friend also needs halal food.",
              explanation: "第三人称单数需要用动词needs。",
            },
            formalityVariants: {
              casual: "Okay, my friend needs halal too. Is your meat halal?",
              standard: "Great. My friend also needs halal food. Is your meat halal?",
              formal:
                "Understood. My friend also requires halal food. Could you please inform me if your meat products are halal-certified?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Our chicken and lamb are halal-certified from a local supplier. However, our beef and pork are not halal. I can point out which dishes use halal meat if that would help.",
            textZh:
              "我们的鸡肉和羊肉是本地供应商提供的清真认证产品。但牛肉和猪肉不是清真的。如果需要的话，我可以指出哪些菜用的是清真肉。",
            commonMistake: {
              wrong: "Our chicken and lamb are halal. But our beef and pork not halal. I can tell you which dishes use halal meat if you need.",
              correct: "Our chicken and lamb are halal-certified from a local supplier. However, our beef and pork are not halal. I can point out which dishes use halal meat if that would help.",
              explanation: "中式英语常省略主语，或直接翻译“不是”而不是用更自然的表达。",
            },
            keyPhrases: [
              { en: "halal-certified", zh: "清真认证的" },
              { en: "supplier", zh: "供应商" },
              { en: "point out", zh: "指出" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The chicken and lamb are halal. The beef isn't, unfortunately. Want me to highlight the halal options?",
                textZh: "鸡肉和羊肉是清真的。牛肉不是。要我帮您标出清真的菜吗？",
                actionHint: "让服务员指出来",
                frequency: "common",
              },
              {
                textEn: "We source halal chicken and lamb locally. I can walk you through the halal-friendly dishes.",
                textZh: "我们的清真鸡肉和羊肉来自本地供应商。我可以带您看看清真菜品。",
                actionHint: "请服务员介绍",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Our chicken and lamb are halal-certified from a local place. Beef and pork aren't though. Happy to show you which dishes are halal if that helps.",
            formalityVariants: {
              casual:
                "Our chicken and lamb are local, halal-certified. Beef/pork aren't. I can show you the halal dishes.",
              standard:
                "Our chicken and lamb are halal-certified from a local supplier. However, our beef and pork are not halal. I can point out which dishes use halal meat if that would help.",
              formal:
                "Our chicken and lamb are sourced from a local, halal-certified supplier. However, our beef and pork selections do not meet halal standards. I would be pleased to indicate which specific dishes utilize our halal meats, if that would be of assistance.",
            },
          },
          {
            speaker: "you",
            textEn: "That would be very helpful. Also, does the quinoa bowl contain any dairy?",
            textZh: "那太有帮助了。另外，藜麦碗里有乳制品吗？",
            casualVersion: "Yeah, that'd be super helpful. And does the quinoa bowl have dairy?",
            commonMistake: {
              wrong: "That will be very helpful.",
              correct: "That would be very helpful.",
              explanation: "表达“如果那样会很有帮助”的假设性语气，用 would 更地道。",
            },
            formalityVariants: {
              casual: "That'd help a lot. Quinoa bowl got dairy?",
              standard: "That would be very helpful. Also, does the quinoa bowl contain any dairy?",
              formal:
                "That would indeed be most helpful. Additionally, could you please confirm if the quinoa bowl contains any dairy products?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Let me check with the kitchen... The standard quinoa bowl has feta cheese on top, but we can easily leave that off. The dressing is olive oil and lemon, so it's naturally dairy-free.",
            textZh: "让我问一下厨房……标准的藜麦碗上面有羊奶酪，但我们可以不放。酱汁是橄榄油和柠檬，本身就不含乳制品。",
            commonMistake: {
              wrong: "Let me check... Quinoa bowl has feta cheese, but we can remove it. The dressing is olive oil and lemon, so it's no dairy.",
              correct: "Let me check with the kitchen... The standard quinoa bowl has feta cheese on top, but we can easily leave that off. The dressing is olive oil and lemon, so it's naturally dairy-free.",
              explanation: "中式英语常省略助动词，表达不够流畅。",
            },
            keyPhrases: [
              { en: "feta cheese", zh: "羊奶酪" },
              { en: "leave that off", zh: "不放/去掉" },
              { en: "dairy-free", zh: "不含乳制品的" },
              { en: "dressing", zh: "酱汁/调味汁" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Good question — let me find out. It has cheese but we can skip that. The dressing itself is dairy-free.",
                textZh: "好问题——让我查一下。上面有奶酪但可以去掉。酱汁本身不含乳制品。",
                actionHint: "可以要求去奶酪",
                frequency: "common",
              },
              {
                textEn:
                  "I'll double-check... Yes, there's feta on top, but that's easy to remove. Everything else is vegan.",
                textZh: "我确认一下……是的，上面有羊奶酪，但很容易去掉。其他都是纯素的。",
                actionHint: "告诉服务员去掉奶酪",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Lemme check with the kitchen... So the regular quinoa bowl has feta, but we can totally leave that off. Dressing's just olive oil and lemon, so no dairy there.",
            formalityVariants: {
              casual:
                "Hold on, lemme check... Quinoa bowl normally has feta, but we can skip it. Dressing's dairy-free.",
              standard:
                "Let me check with the kitchen... The standard quinoa bowl has feta cheese on top, but we can easily leave that off. The dressing is olive oil and lemon, so it's naturally dairy-free.",
              formal:
                "Allow me to confirm with the kitchen... The standard preparation of the quinoa bowl does include feta cheese, but we are certainly able to omit that. The dressing, being olive oil and lemon-based, is inherently dairy-free.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect — quinoa bowl without the cheese for me. And the halal chicken dish for my friend.",
            textZh: "太好了——我要不放奶酪的藜麦碗。我朋友要清真鸡肉的那道。",
            commonMistake: {
              wrong: "Perfect. Quinoa bowl no cheese for me. And halal chicken dish for my friend.",
              correct: "Perfect — quinoa bowl without the cheese for me. And the halal chicken dish for my friend.",
              explanation: "中式英语常省略冠词，或表达顺序不自然。",
            },
            casualVersion: "Awesome – quinoa bowl, no cheese for me. And the halal chicken for my friend.",
            formalityVariants: {
              casual: "Perfect – quinoa bowl, no cheese. Halal chicken for my friend.",
              standard: "Perfect — quinoa bowl without the cheese for me. And the halal chicken dish for my friend.",
              formal:
                "Excellent. I will have the quinoa bowl without the cheese, please. And for my friend, the halal chicken dish.",
            },
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
              {
                textEn: "Perfect. And any food allergies I should let the kitchen know about?",
                textZh: "好的。还有什么食物过敏需要我告知厨房的吗？",
                actionHint: "如实告知过敏情况",
                frequency: "common",
              },
              {
                textEn: "Before I put the order in — any allergies? We want to make sure everything's safe.",
                textZh: "下单之前确认一下——有过敏吗？我们想确保一切安全。",
                actionHint: "说明有无过敏",
                frequency: "occasional",
              },
            ],
            casualVersion: "Got it. Just wanna double-check – any allergies I should know about? Nuts, soy, gluten?",
            commonMistake: {
              wrong: "Got it. Just to double check -- any allergy I should be aware of?",
              correct: "Got it. Just to double-check — any allergies I should be aware of?",
              explanation: "通常询问过敏时用复数allergies，表示是否有各种可能的过敏原。",
            },
            formalityVariants: {
              casual: "Okay. Just to confirm – any allergies? Nuts, soy, gluten?",
              standard: "Got it. Just to double-check — any allergies I should be aware of? Nuts, soy, or gluten?",
              formal:
                "Understood. May I just double-check if there are any allergies I should be mindful of for either of you? Such as nuts, soy, or gluten?",
            },
          },
          {
            speaker: "you",
            textEn: "No allergies, just the dietary preferences. Thank you for being so thorough!",
            textZh: "没有过敏，只是饮食偏好。谢谢你这么细心！",
            commonMistake: {
              wrong: "No allergies, only the dietary preferences. Thank you for very thorough!",
              correct: "No allergies, just the dietary preferences. Thank you for being so thorough!",
              explanation: "介词和副词的用法，以及“非常感谢”的自然表达。",
            },
            casualVersion: "Nope, no allergies, just the diet stuff. Thanks for being so thorough!",
            formalityVariants: {
              casual: "No allergies, just preferences. Thanks for checking!",
              standard: "No allergies, just the dietary preferences. Thank you for being so thorough!",
              formal:
                "There are no allergies, simply the specified dietary preferences. Thank you for your comprehensive attention to detail.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Of course! We take dietary needs very seriously. I'll make sure the kitchen notes everything. Your food will be out shortly.",
            textZh: "当然！我们非常重视饮食需求。我会确保厨房记录好所有要求。菜很快就好。",
            commonMistake: {
              wrong: "It is our pleasure. Everyone should enjoy food, no matter dietary needs. I will let kitchen know all requests.",
              correct: "It's our pleasure. Everyone should enjoy great food, regardless of their dietary needs. I'll ensure the kitchen notes all your requests, and your dishes will be out shortly!",
              explanation: "“It's our pleasure”是固定表达。介词、冠词和连词的用法。",
            },
            alternativeExpressions: [
              {
                textEn: "Absolutely! I've noted everything down. The kitchen will be extra careful. Won't be long!",
                textZh: "当然！都记下来了。厨房会格外注意。很快就好！",
                actionHint: "等待上菜即可",
                frequency: "common",
              },
              {
                textEn: "No problem at all. We're used to handling dietary needs. Your order is in!",
                textZh: "完全没问题。我们经常处理饮食需求。您的单已经下了！",
                actionHint: "安心等待",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Of course! We take diet stuff super seriously. I'll make sure the kitchen knows everything. Your food'll be out real soon.",
            formalityVariants: {
              casual: "Absolutely! We're serious about diet needs. Kitchen will get the notes. Food's coming out soon.",
              standard:
                "Of course! We take dietary needs very seriously. I'll make sure the kitchen notes everything. Your food will be out shortly.",
              formal:
                "Certainly! We prioritize addressing all dietary requirements with the utmost seriousness. I will ensure all specific requests are meticulously conveyed to the kitchen. Your meal will be presented to you shortly.",
            },
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
            textEn:
              "I have celiac disease, so I need to be very careful about gluten. Do you have gluten-free options?",
            textZh: "我有乳糜泻，所以必须严格避免麸质。你们有无麸质选项吗？",
            casualVersion: "Got celiac, so gotta watch the gluten. Y'all got anything gluten-free?",
            commonMistake: {
              wrong: "I have celiac. Do you have gluten-free food?",
              correct: "I have celiac disease. Do you have gluten-free options?",
              explanation: 'Food 太宽泛，"options"更具体且常用。',
            },
            formalityVariants: {
              casual: "Got celiac, so gotta be super careful with gluten. Any gluten-free stuff?",
              standard:
                "I have celiac disease, so I need to be very careful about gluten. Do you have gluten-free options?",
              formal:
                "Excuse me, I have a medical condition, celiac disease, which necessitates a strictly gluten-free diet. Could you please inform me if you offer any gluten-free selections?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "I understand how important that is. We have a separate gluten-free menu. Our kitchen also has a dedicated preparation area for gluten-free orders to prevent cross-contamination. Would you like to see it?",
            textZh: "我理解这有多重要。我们有专门的无麸质菜单。厨房也有专门的无麸质备菜区域，防止交叉污染。要看看吗？",
            commonMistake: {
              wrong: "I understand. We have separate gluten-free menu. Our kitchen also has dedicated area for gluten-free orders to prevent cross-contamination. You want to see?",
              correct: "I understand how important that is. We have a separate gluten-free menu. Our kitchen also has a dedicated preparation area for gluten-free orders to prevent cross-contamination. Would you like to see it?",
              explanation: "中式英语常省略冠词，或直接翻译“你想看吗”而不是更自然的提问方式。",
            },
            casualVersion: "Totally get it. We've got a whole separate GF menu. Plus, kitchen's got a dedicated area to avoid cross-contamination. Wanna see it?",
            formalityVariants: {
              casual: "Yeah, I get it. We've got a separate GF menu and a dedicated prep area. Wanna check it out?",
              standard: "I understand how important that is. We have a separate gluten-free menu. Our kitchen also has a dedicated preparation area for gluten-free orders to prevent cross-contamination. Would you like to see it?",
              formal: "I fully comprehend the criticality of this dietary requirement. We provide a distinct gluten-free menu, and our culinary team utilizes a dedicated preparation zone to meticulously prevent any cross-contamination. May I present the menu to you?",
            },
            keyPhrases: [
              { en: "celiac disease", zh: "乳糜泻" },
              { en: "gluten-free", zh: "无麸质的" },
              { en: "cross-contamination", zh: "交叉污染" },
              { en: "dedicated preparation area", zh: "专门备菜区域" },
            ],
            vocabNotes: {
              "cross-contamination": {
                meaningInContext: "在这句话里表示：含麸质的食物和无麸质食物在准备过程中接触，导致无麸质食物被污染",
                similarUsage:
                  "类似用法：We use separate cutting boards to avoid cross-contamination.（我们用不同的砧板避免交叉污染）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "We take that very seriously. We have a gluten-free menu and a separate prep area. Let me grab it for you.",
                textZh: "我们非常重视这个问题。我们有无麸质菜单和独立备菜区。我去给您拿。",
                actionHint: "等服务员拿菜单",
                frequency: "common",
              },
              {
                textEn:
                  "Absolutely — we've got a dedicated GF menu. The kitchen uses separate equipment for gluten-free orders.",
                textZh: "没问题——我们有专门的无麸质菜单。厨房用独立设备处理无麸质订单。",
                actionHint: "可以放心点餐",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. I'm also curious — does your soy sauce contain gluten? I've been caught out before.",
            textZh: "好的。我还想问——你们的酱油含麸质吗？我之前被坑过。",
            casualVersion: "Yeah, please. Also, curious: your soy sauce got gluten? I've been burned by that before.",
            commonMistake: {
              wrong: "Does your soy sauce has gluten?",
              correct: "Does your soy sauce contain gluten?",
              explanation: "中式英语中用 \"have\" 代替 \"contain\" 是常见错误。",
            },
            formalityVariants: {
              casual: "Yep, please. Quick question: is your soy sauce GF? Got caught once.",
              standard: "Yes, please. I'm also curious — does your soy sauce contain gluten? I've been caught out before.",
              formal: "Certainly, I would appreciate that. Furthermore, I must inquire: is your soy sauce a gluten-free variety? I have, regrettably, encountered issues with this in the past.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Good question! Regular soy sauce does contain wheat, but we stock tamari, which is a gluten-free soy sauce alternative. All our gluten-free dishes use tamari instead. Your awareness is really helpful for us.",
            textZh:
              "好问题！普通酱油确实含小麦，但我们备有天然酱油（tamari），是无麸质的酱油替代品。我们所有无麸质菜品都用tamari。您的关注对我们很有帮助。",
            commonMistake: {
              wrong: "Good question! Normal soy sauce has wheat, but we have tamari, it is gluten-free soy sauce. All gluten-free dishes use tamari. Your careful is helpful for us.",
              correct: "Good question! Regular soy sauce does contain wheat, but we stock tamari, which is a gluten-free soy sauce alternative. All our gluten-free dishes use tamari instead. Your awareness is really helpful for us.",
              explanation: "固定搭配使用，以及更自然的表达。",
            },
            casualVersion: "Good call! Regular soy sauce has wheat, but we use tamari, which is GF. All our GF stuff uses tamari. Thanks for asking, really helps us out.",
            formalityVariants: {
              casual: "Good point! Regular soy sauce has wheat, but we use tamari instead for all our GF dishes. Good on you for checking.",
              standard: "Good question! Regular soy sauce does contain wheat, but we stock tamari, which is a gluten-free soy sauce alternative. All our gluten-free dishes use tamari instead. Your awareness is really helpful for us.",
              formal: "That is an excellent inquiry! Standard soy sauce indeed contains wheat. However, we specifically provide tamari, which is a certified gluten-free alternative, for all our gluten-free preparations. We greatly appreciate your thoroughness, as it assists us in serving you better.",
            },
            keyPhrases: [
              { en: "tamari", zh: "天然酱油（无麸质）" },
              { en: "alternative", zh: "替代品" },
              { en: "wheat", zh: "小麦" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Great catch! Yeah, regular soy sauce has gluten. We use tamari for all our GF dishes — it's totally safe.",
                textZh: "问得好！普通酱油确实有麸质。我们所有无麸质菜都用tamari——完全安全。",
                actionHint: "可以放心点无麸质菜",
                frequency: "common",
              },
              {
                textEn: "You're smart to ask! We switched to tamari for all gluten-free cooking. No wheat at all.",
                textZh: "您问得很细心！我们的无麸质烹饪全部改用了tamari。完全不含小麦。",
                actionHint: "了解即可",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's reassuring. My other friend keeps kosher. Do you have any kosher options?",
            textZh: "这让我放心了。我另一个朋友吃犹太洁食。你们有犹太洁食选项吗？",
            culturalNote: "犹太洁食是犹太教的饮食规定，不同于清真。",
            casualVersion: "That's good to hear. My other friend's kosher. Any kosher stuff for them?",
            commonMistake: {
              wrong: "My friend eats kosher. Do you have kosher food?",
              correct: "My friend keeps kosher. Do you have any kosher options?",
              explanation: "\"kosher options\" 更自然，也包含了选择性。",
            },
            formalityVariants: {
              casual: "Okay, good. My other friend's kosher. Got anything for them?",
              standard: "That's reassuring. My other friend keeps kosher. Do you have any kosher options?",
              formal: "I find that quite reassuring. Additionally, I have a companion who observes kosher dietary laws. Do you offer any selections that adhere to kosher principles?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "We're not a certified kosher kitchen, so I want to be transparent about that. However, we do have several dishes that follow kosher principles — no mixing of meat and dairy, no pork or shellfish. I can identify those for your friend. For strict kosher requirements, there's a certified kosher restaurant two blocks away.",
            textZh:
              "我们不是认证的犹太洁食厨房，这一点我要坦诚告知。不过我们有几道菜符合犹太洁食原则——肉奶不混合，不含猪肉或贝类。我可以帮您朋友指出来。如果严格要求犹太洁食，两个街区外有一家认证的犹太洁食餐厅。",
            commonMistake: {
              wrong: "We are not certified kosher kitchen, I must tell you. But we have some dishes follow kosher rules – no meat and dairy mix, no pork or shellfish. I can show them. If strict kosher, two blocks away has a restaurant.",
              correct: "We're not a certified kosher kitchen, I must be upfront about that. However, we do have several dishes that align with kosher principles – no mixing meat and dairy, no pork or shellfish. I can point those out for your friend. If strict kosher is required, there's a certified kosher restaurant two blocks away.",
              explanation: "复杂句式及固定搭配的运用，例如“be upfront about”。",
            },
            casualVersion: "We're not a certified kosher place, just wanna be up front. But, we do have dishes that follow kosher rules — no meat and dairy together, no pork or shellfish. Can point those out. If it's super strict kosher, there's a certified place a couple blocks from here.",
            formalityVariants: {
              casual: "Not certified kosher, just so you know. But we do have some dishes that follow the rules – no meat/dairy mix, no pork/shellfish. I can show you those. For super strict kosher, there's a certified spot nearby.",
              standard: "We're not a certified kosher kitchen, so I want to be transparent about that. However, we do have several dishes that follow kosher principles — no mixing of meat and dairy, no pork or shellfish. I can identify those for your friend. For strict kosher requirements, there's a certified kosher restaurant two blocks away.",
              formal: "I must preface this by stating that we are not a certified kosher establishment, and I wish to be entirely transparent regarding that. Nevertheless, we do offer a selection of dishes that adhere to fundamental kosher principles, such as the segregation of meat and dairy, and the exclusion of pork or shellfish. I would be pleased to delineate these options for your companion. For those requiring strict kosher certification, there is a designated restaurant located two blocks from our premises.",
            },
            keyPhrases: [
              { en: "kosher", zh: "犹太洁食" },
              { en: "certified", zh: "认证的" },
              { en: "transparent", zh: "坦诚/透明" },
              { en: "shellfish", zh: "贝类" },
            ],
            culturalNote: "犹太洁食（kosher）有严格的食物准备规定。如果不确定，诚实地告知客人比硬说符合要求更受尊重。",
            alternativeExpressions: [
              {
                textEn:
                  "Honestly, we're not kosher-certified. But we do have dishes without pork, shellfish, or meat-dairy combos. I can show you.",
                textZh: "坦白说，我们没有犹太洁食认证。但有不含猪肉、贝类和肉奶混合的菜。我可以给您指出来。",
                actionHint: "让服务员推荐合适的菜",
                frequency: "common",
              },
              {
                textEn:
                  "I want to be upfront — we're not certified kosher. But I can point out dishes that align with kosher guidelines.",
                textZh: "我想坦诚说——我们没有犹太洁食认证。但我可以指出符合犹太洁食原则的菜。",
                actionHint: "让服务员帮忙挑选",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "That's very honest of you. I think we can work with what you have. Can you point out those dishes?",
            textZh: "你很诚实。我想我们可以在你们这里找到合适的。能帮我指出那些菜吗？",
            commonMistake: {
              wrong: "You are very honest. I think we can find suitable here. Can you point out those dishes for me?",
              correct: "That's very honest of you. I think we can find something suitable here. Could you point out those dishes for me?",
              explanation: "“That's honest of you”是自然表达，以及形容词位置和更礼貌的提问方式。",
            },
            casualVersion: "Appreciate the honesty. I think we can make your stuff work. Could you point those dishes out?",
            formalityVariants: {
              casual: "Thanks for being straight. We can probably work with what you got. Show us the dishes?",
              standard: "That's very honest of you. I think we can work with what you have. Can you point out those dishes?",
              formal: "I commend your candor. I believe we can accommodate our needs with the options you've described. Would you be so kind as to indicate which dishes specifically meet those criteria?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Of course. The grilled salmon, the vegetable risotto, and the chicken breast with herbs all follow kosher-friendly principles. I'll also let the chef know about your table's dietary needs so everything is prepared with extra care.",
            textZh:
              "当然。烤三文鱼、蔬菜意式烩饭和香草鸡胸肉都符合犹太洁食原则。我也会告诉厨师您这桌的饮食需求，让一切都格外小心准备。",
            commonMistake: {
              wrong: "Of course. Grilled salmon, vegetable risotto, and chicken breast with herbs all follow kosher principles. I will also tell kitchen your table's needs, prepare with extra care.",
              correct: "Of course. The grilled salmon, the vegetable risotto, and the chicken breast with herbs all follow kosher-friendly principles. I'll also inform the kitchen of your table's dietary needs to ensure everything is prepared with extra care.",
              explanation: "句子连接、介词和冠词的正确使用，以及更自然的表达。",
            },
            casualVersion: "Sure thing. The grilled salmon, veggie risotto, and chicken with herbs are all kosher-friendly. I'll tell the chef about your table's dietary needs too, so it's all super careful.",
            formalityVariants: {
              casual: "Yep. Grilled salmon, veggie risotto, and herb chicken are good. I'll tell the chef to be extra careful with your table's needs.",
              standard: "Of course. The grilled salmon, the vegetable risotto, and the chicken breast with herbs all follow kosher-friendly principles. I'll also let the chef know about your table's dietary needs so everything is prepared with extra care.",
              formal: "Certainly. The grilled salmon, the vegetable risotto, and the chicken breast prepared with herbs all adhere to kosher-friendly guidelines. Furthermore, I shall ensure the chef is fully apprised of your table's specific dietary requirements to guarantee meticulous preparation.",
            },
            keyPhrases: [
              { en: "kosher-friendly", zh: "符合犹太洁食原则的" },
              { en: "risotto", zh: "意式烩饭" },
              { en: "with extra care", zh: "格外小心" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure — the salmon, risotto, and herb chicken are all safe options. I'll flag your table's needs with the kitchen.",
                textZh: "好的——三文鱼、烩饭和香草鸡胸肉都可以放心吃。我会把您这桌的需求告知厨房。",
                actionHint: "从推荐的菜品中选择",
                frequency: "common",
              },
              {
                textEn:
                  "These three dishes work well for kosher diners. I'll make sure the chef knows about your requirements.",
                textZh: "这三道菜很适合犹太洁食者。我会确保厨师知道您的要求。",
                actionHint: "可以放心点这些菜",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much for accommodating all of us. We really appreciate it.",
            textZh: "非常感谢你照顾到我们所有人。真的很感激。",
            commonMistake: {
              wrong: "Thank you so much for help all of us. We really appreciate.",
              correct: "Thank you so much for accommodating all of us. We really appreciate it.",
              explanation: "“包容/迁就”的正确表达，以及“appreciate”后常跟宾语。",
            },
            casualVersion: "Thanks a ton for working with all of us. Really appreciate it.",
            formalityVariants: {
              casual: "Seriously, thanks for everything. Means a lot.",
              standard: "Thank you so much for accommodating all of us. We really appreciate it.",
              formal: "We are profoundly grateful for your exceptional efforts in accommodating our group's specific requirements. Your understanding and assistance are deeply valued.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "It's absolutely our pleasure. Everyone deserves to enjoy a great meal, no matter their dietary needs. I'll be back with your orders shortly!",
            textZh: "这是我们的荣幸。每个人都应该享受美食，不管饮食需求是什么。我很快就来上菜！",
            commonMistake: {
              wrong: "It is our pleasure. Everyone should enjoy food, no matter dietary needs. I will check with kitchen now, your food will be ready soon.",
              correct: "It's truly our pleasure. We believe everyone deserves a wonderful meal, regardless of their dietary requirements. I'll confirm all these details with the kitchen immediately, and your food will be out shortly!",
              explanation: "固定搭配使用，以及更流畅自然的表达。",
            },
            casualVersion: "My pleasure, honestly. Everyone should get to enjoy a good meal, no matter their dietary stuff. I'll be right back with your order!",
            formalityVariants: {
              casual: "No problem at all! Everyone deserves a good meal, right? Be back with your stuff in a sec!",
              standard: "It's absolutely our pleasure. Everyone deserves to enjoy a great meal, no matter their dietary needs. I'll be back with your orders shortly!",
              formal: "The pleasure is entirely ours. We firmly believe that every guest is entitled to an exceptional dining experience, irrespective of their dietary specifications. I shall return with your orders momentarily.",
            },
            alternativeExpressions: [
              {
                textEn: "Happy to help! We want everyone to have a great dining experience. Food will be right out!",
                textZh: "乐意帮忙！我们希望每个人都有美好的用餐体验。菜马上来！",
                actionHint: "等待上菜",
                frequency: "common",
              },
              {
                textEn: "That's what we're here for! Your meals will be out shortly.",
                textZh: "这是我们应该做的！菜很快就好。",
                actionHint: "安心等待",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 小费文化 ====================
  {
    id: "restaurant-tips",
    tags: ["tip", "小费", "tipping"],
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
            culturalNote: '在美国说 "check"，在英国说 "bill"。两者都可以，但在美国用 "check" 更常见。',
            commonMistake: {
              wrong: "Give me the check, please.",
              correct: "Could we get the check, please?",
              explanation: "直接说 “Give me...” 听起来有些生硬或命令式，不够礼貌。用 “Could we get...” 更委婉。",
            },
            formalityVariants: {
              casual: "Check, please?",
              standard: "Could we get the check, please?",
              formal: "Excuse me, may we have the check, please?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Of course! Here's your check. Your total comes to $86.50. I'll leave this here — no rush.",
            textZh: "好的！这是您的账单。总计86.50美元。放在这里——不着急。",
            culturalNote: "服务员说'Here'递账单时通常表示'给你'",
            keyPhrases: [
              { en: "check", zh: "账单" },
              { en: "total", zh: "总计" },
              { en: "no rush", zh: "不着急" },
            ],
            alternativeExpressions: [
              {
                textEn: "Here's your bill whenever you're ready. Take your time.",
                textZh: "账单在这里，您准备好了再结。慢慢来。",
                actionHint: "不必急着付",
                frequency: "common",
              },
            ],
            casualVersion: "Sure! Here's your check. Total's $86.50. I'll leave it here, no rush.",
            formalityVariants: {
              casual: "Sure! Here's your check. Total's 86.50. I'll leave it here, no rush.",
              standard: "Of course! Here's your check. Your total comes to $86.50. I'll leave this here — no rush.",
              formal:
                "Certainly, here is your bill. The total amount due is $86.50. Please take your time, there is no need to rush.",
            },
          },
          {
            speaker: "you",
            textEn: "How much should we tip? I want to make sure I get it right.",
            textZh: "应该给多少小费？我想确保给对。",
            culturalNote: "美国小费是服务人员收入的重要组成部分，不能不给或随意给。",
            casualVersion: "How much should we tip? Wanna make sure I get it right.",
            commonMistake: {
              wrong: "How much tip?",
              correct: "How much should we tip?",
              explanation: "中国人常省略动词或助动词，直接说“How much tip?”听起来不自然。",
            },
            formalityVariants: {
              casual: "How much should we tip? Wanna make sure I get it right.",
              standard: "How much should we tip? I want to make sure I get it right.",
              formal: "Could you advise on the appropriate gratuity amount? I wish to ensure I calculate it correctly.",
            },
          },
          {
            speaker: "them",
            role: "同伴",
            textEn:
              "In the US, the standard tip for table service is 15 to 20 percent. For good service, most people tip 18 to 20 percent. On $86.50, that would be about $15 to $17.",
            textZh: "在美国，餐桌服务的标准小费是15%到20%。服务好的话大多数人给18%到20%。86.50美元的话大约15到17美元。",
            keyPhrases: [
              { en: "standard tip", zh: "标准小费" },
              { en: "table service", zh: "餐桌服务" },
              { en: "15 to 20 percent", zh: "15%到20%" },
            ],
            culturalNote:
              "在美国，小费是服务员收入的重要组成部分。不给小费是非常不礼貌的行为。15%是最低标准，18-20%是正常水平。",
            alternativeExpressions: [
              {
                textEn: "Usually 18 to 20 percent for sit-down restaurants. So about $16 or $17 on this bill.",
                textZh: "正式餐厅一般18%到20%。这笔账单大概16到17美元。",
                actionHint: "按建议给小费",
                frequency: "common",
              },
              {
                textEn:
                  "The norm here is around 20 percent for good service. Just double the tax — that gets you close.",
                textZh: "这里好服务一般给20%左右。把税额翻倍就差不多了。",
                actionHint: "用翻倍税额的方法计算",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Here in the US, for table service, tips are usually 15-20%. If service's good, most people do 18-20%. So, on 86.50, that'd be like 15 to 17 bucks.",
            formalityVariants: {
              casual:
                "Here in the US, for table service, tips are usually 15-20%. Good service, people usually do 18-20%. So, on 86.50, that'd be like 15-17 bucks.",
              standard:
                "In the US, the standard tip for table service is 15 to 20 percent. For good service, most people tip 18 to 20 percent. On $86.50, that would be about $15 to $17.",
              formal:
                "In the United States, the customary gratuity for tableside service ranges from 15 to 20 percent. For particularly commendable service, a tip of 18 to 20 percent is generally extended. For a bill of $86.50, this would equate to approximately $15 to $17.",
            },
          },
          {
            speaker: "you",
            textEn: "The service was excellent, so I'll tip 20 percent. Can I add the tip to the credit card?",
            textZh: "服务很好，我给20%。可以把小费加到信用卡上吗？",
            culturalNote: "美国小费可以写在信用卡账单上，和餐费一起刷。",
            casualVersion: "Service was great, so I'll do 20%. Can I just put it on the card?",
            commonMistake: {
              wrong: "I want to add the tip to the credit card.",
              correct: "Can I add the tip to the credit card?",
              explanation: "在美国直接说 “I want to...” 听起来不礼貌，用 “Can I...” 或 “Could I...” 更委婉。",
            },
            formalityVariants: {
              casual: "Service was great, so I'll do 20%. Can I just put it on the card?",
              standard: "The service was excellent, so I'll tip 20 percent. Can I add the tip to the credit card?",
              formal:
                "The service was truly excellent, so I shall indeed provide a 20 percent gratuity. Is it permissible to include the tip on the credit card transaction?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Yes! When I run your card, you'll see a line on the receipt where you can write in the tip amount and the total. Or if you'd prefer, you can leave cash on the table.",
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
              {
                textEn: "Sure! There's a tip line on the receipt after I swipe your card. Or you can just leave cash.",
                textZh: "没问题！刷卡后收据上有小费栏。或者直接留现金也行。",
                actionHint: "选择卡付或现金小费",
                frequency: "common",
              },
              {
                textEn:
                  "Absolutely. I'll bring the card reader and there'll be an option to add a tip right on the screen.",
                textZh: "当然。我拿刷卡机过来，屏幕上会有加小费的选项。",
                actionHint: "在屏幕上操作即可",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep! When I run your card, you'll see a spot on the receipt for the tip and total. Or, if you want, just leave cash.",
            culturalNote: "美国收据上写小费和总额与中国不同",
            formalityVariants: {
              casual:
                "Yep! When I run your card, you'll see a spot on the receipt for the tip and total. Or, if you want, just leave cash.",
              standard:
                "Yes! When I run your card, you'll see a line on the receipt where you can write in the tip amount and the total. Or if you'd prefer, you can leave cash on the table.",
              formal:
                "Yes, certainly. Upon processing your card, you will find a designated line on the receipt to enter the gratuity amount and the revised total. Alternatively, should you prefer, leaving a cash gratuity on the table is also an option.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll put it on the card. So I write $17 for the tip and $103.50 as the total?",
            textZh: "我用卡付。那我写17美元小费，总计103.50美元？",
            casualVersion: "I'll put it on the card. So, like, $17 for tip and $103.50 total?",
            commonMistake: {
              wrong: "I put it on the card. So I write $17 tip and $103.50 total?",
              correct: "I'll put it on the card. So I write $17 for the tip and $103.50 as the total?",
              explanation: "中国人常省略冠词和介词，或动词用错时态，听起来不地道。",
            },
            formalityVariants: {
              casual: "I'll put it on the card. So, like, $17 for tip and $103.50 total?",
              standard: "I'll put it on the card. So I write $17 for the tip and $103.50 as the total?",
              formal:
                "I shall include it on the card. Therefore, I will write $17 for the gratuity and $103.50 as the grand total?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "That's exactly right. Thank you so much — you're very generous. I hope you enjoyed your meal. Have a wonderful evening!",
            textZh: "完全正确。非常感谢——您太慷慨了。希望您享受了这顿餐。祝您有美好的夜晚！",
            alternativeExpressions: [
              {
                textEn: "Perfect, thank you! That's very kind. We hope to see you again. Have a great night!",
                textZh: "完美，谢谢！您太客气了。希望下次再来。晚上愉快！",
                actionHint: "用餐结束，可以离开了",
                frequency: "common",
              },
              {
                textEn: "Wow, thank you so much! Enjoy the rest of your evening!",
                textZh: "太感谢了！祝您度过愉快的夜晚！",
                actionHint: "起身离开即可",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep, that's right. Thanks a bunch — you're super generous. Hope you enjoyed it! Have a good one!",
            formalityVariants: {
              casual:
                "Yep, that's right. Thanks a bunch — you're super generous. Hope you enjoyed it! Have a good one!",
              standard:
                "That's exactly right. Thank you so much — you're very generous. I hope you enjoyed your meal. Have a wonderful evening!",
              formal:
                "That is entirely correct. Thank you immensely; your generosity is greatly appreciated. I sincerely hope you thoroughly enjoyed your dining experience. Do have a most wonderful evening!",
            },
          },
          {
            speaker: "you",
            textEn: "We did, thank you. Everything was delicious!",
            textZh: "我们很享受，谢谢。一切都很好吃！",
            casualVersion: "Yeah, we did, thanks! Everything was great!",
            commonMistake: {
              wrong: "Very delicious!",
              correct: "Everything was delicious!",
              explanation:
                "中国人常直接说 “very delicious”，但在美式英语中听起来不自然，且通常会更全面地肯定用餐体验。",
            },
            formalityVariants: {
              casual: "Yeah, we did, thanks! Everything was great!",
              standard: "We did, thank you. Everything was delicious!",
              formal: "Indeed we did, thank you. Everything was absolutely delightful!",
            },
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
            culturalNote: "在美国，直接说“split the bill”或“separate checks”更自然，不必像中文一样过于强调“请问”",
            commonMistake: {
              wrong: "Can we separate bills?",
              correct: "Could we split the bill?",
              explanation: "“separate bills”说法不地道，常用“split the bill”或“separate checks”.",
            },
            formalityVariants: {
              casual: "Can we split this? / Separate checks, please.",
              standard: "Excuse me, could we split the bill?",
              formal: "Excuse me, we would like to request separate checks for our table, if that's possible.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Of course! How would you like to split it? I can divide it evenly, or I can split it by what each person ordered.",
            textZh: "当然可以！怎么分？可以平均分，也可以按各自点的来分。",
            culturalNote: "美国餐厅分账方式多样，可平均分或按个人消费分。",
            casualVersion: "Sure! How d'ya wanna split it? Can do it even, or by what everyone ordered.",
            formalityVariants: {
              casual: "Sure! How d'ya wanna split it? Can do it even, or by what everyone ordered.",
              standard: "Of course! How would you like to split it? I can divide it evenly, or I can split it by what each person ordered.",
              formal: "Certainly! How would you prefer the bill to be divided? I can split it equally among your party, or I can itemize it by each individual's order.",
            },
            keyPhrases: [
              { en: "split the bill", zh: "分账" },
              { en: "divide it evenly", zh: "平均分" },
              { en: "by what each person ordered", zh: "按各自点的分" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure, no problem. Separate checks or one bill split in half?",
                textZh: "没问题。各自单独账单还是一张账单对半分？",
                actionHint: "说明分账方式",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Let's split it by what we each ordered. There are four of us.",
            textZh: "按各自点的分吧。我们四个人。",
            casualVersion: "Let's do it by what everyone got. Four of us.",
            commonMistake: {
              wrong: "Split it by everyone's order",
              correct: "Let's split it by what each person ordered",
              explanation: "直接说“按每个人的点单分”是中式表达，英文需更完整",
            },
            formalityVariants: {
              casual: "Let's do it by what everyone got. Four of us.",
              standard: "Let's split it by what each person ordered. There are four of us.",
              formal: "We would prefer to split the bill according to each individual's order. There are four members in our party.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "No problem. I'll need a moment to sort that out. What about the shared appetizers and the bottle of wine? Should I split those evenly?",
            textZh: "没问题。我需要一点时间整理。那共享的前菜和那瓶酒呢？平均分吗？",
            casualVersion: "No prob. I'll need a sec to sort it. What about the shared app and wine? Split those even?",
            formalityVariants: {
              casual: "No prob. I'll need a sec to sort it. What about the shared app and wine? Split those even?",
              standard: "No problem. I'll need a moment to sort that out. What about the shared appetizer and the bottle of wine? Should I split those evenly?",
              formal: "Certainly. I will require a brief moment to process that. Regarding the shared appetizer and the bottle of wine, would you prefer those items to be divided equally among your party?",
            },
            keyPhrases: [
              { en: "sort that out", zh: "整理好" },
              { en: "shared appetizers", zh: "共享的前菜" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure, give me a sec. How about the appetizers you all shared — split those evenly?",
                textZh: "好的，稍等。你们一起吃的前菜呢——平均分？",
                actionHint: "告诉服务员怎么分共享的",
                frequency: "common",
              },
              {
                textEn: "I can do that. Just need to figure out the shared items — should those be divided equally?",
                textZh: "没问题。共享的那些怎么分——平均分吗？",
                actionHint: "说明共享菜品分法",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, split the shared items evenly. Two of us are paying by card and two by cash.",
            textZh: "是的，共享的平均分。我们两个刷卡，两个付现金。",
            commonMistake: {
              wrong: "Yes, we use cards for two people and cash for two people.",
              correct: "Two of us are paying by card and two by cash.",
              explanation: "英文中习惯用“pay by card/cash”或“pay with a card/cash”，而非“use card/cash”。",
            },
            casualVersion: "Yep, split the shared stuff even. Two of us are using cards, two cash.",
            formalityVariants: {
              casual: "Yep, split the shared stuff even. Two of us are using cards, two cash.",
              standard: "Yes, split the shared items evenly. Two of us are paying by card and two by cash.",
              formal: "Yes, please divide the shared items equally. Two members of our party will be paying by credit card, and two will be using cash.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Got it. I'll bring four separate checks. For the two card payments, I'll run them separately. Here they are — each one shows the individual items plus a quarter of the shared dishes.",
            textZh: "明白了。我出四张单独的账单。两张卡分开刷。给您——每张上面有个人点的菜加上四分之一的共享菜品。",
            casualVersion: "Got it. I'll print four separate checks. Run the two cards individually. Here ya go—each has your own order plus a quarter of the shared stuff.",
            formalityVariants: {
              casual: "Got it. I'll print four separate checks. Run the two cards individually. Here ya go—each has your own order plus a quarter of the shared stuff.",
              standard: "Got it. I'll print four separate checks. I'll run the two cards separately. Here you go—each one has the individual's order plus a quarter of the shared items.",
              formal: "Understood. I will prepare four individual checks for you. I will process the two credit card payments separately. Here are the checks—each reflects the individual's ordered items in addition to one-fourth of the shared items.",
            },
            keyPhrases: [
              { en: "separate checks", zh: "单独账单" },
              { en: "a quarter of", zh: "四分之一" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "All set — here are four bills. Each one has your own stuff plus your share of the appetizers and wine.",
                textZh: "好了——四张账单。每张上面有你自己点的菜加上你那份前菜和酒。",
                actionHint: "核对自己的账单",
                frequency: "common",
              },
              {
                textEn: "Here you go — four separate receipts. The shared items are divided equally on each.",
                textZh: "给您——四张单独的收据。共享的菜品平均分在每张上面了。",
                actionHint: "检查金额是否正确",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. For the tip, should each person add their own tip?",
            textZh: "谢谢。小费的话，是每个人各自加吗？",
            culturalNote: "在美国分账时，小费通常是根据每个人自己账单上的小计金额计算的，而不是整体小费再分配。",
            casualVersion: "Thanks. For tip, does everyone add their own?",
            commonMistake: {
              wrong: "Tip, everyone add their own?",
              correct: "For the tip, should each person add their own tip?",
              explanation: "中式英语常省略主语和助动词，听起来不自然。",
            },
            formalityVariants: {
              casual: "Thanks. For tip, does everyone add their own?",
              standard: "Thank you. For the tip, should each person add their own tip?",
              formal: "Thank you. Regarding the gratuity, should each individual add their own tip to their respective check?",
            },
          },
          {
            speaker: "them",
            role: "同伴",
            textEn:
              "Yes, each person should add a tip to their own check. The easiest way is for everyone to tip 18 or 20 percent on their individual total. That way the server gets a fair tip overall.",
            textZh:
              "是的，每个人在自己的账单上加小费。最简单的方法是每人按自己的小计给18%或20%。这样服务员整体会收到合理的小费。",
            casualVersion: "Yeah, everyone should add tip to their own check. Easiest way is everyone tips 18 or 20% on their own total. That way the server gets a fair tip.",
            formalityVariants: {
              casual: "Yeah, everyone should add tip to their own check. Easiest way is everyone tips 18 or 20% on their own total. That way the server gets a fair tip.",
              standard: "Yes, each person should add a tip to their own check. The easiest way is for everyone to tip 18 or 20 percent on their individual total. That way the server gets a fair tip overall.",
              formal: "Yes, it is customary for each individual to add a gratuity to their respective check. The most straightforward method is for everyone to contribute 18 to 20 percent of their individual subtotal, which ensures the server receives an equitable overall gratuity.",
            },
            keyPhrases: [
              { en: "individual total", zh: "个人小计" },
              { en: "fair tip", zh: "合理的小费" },
            ],
            culturalNote:
              "分账时容易出现小费不足的情况。确保每个人都在自己那份上加了合理的小费，不要只算菜钱不算税和小费。",
            alternativeExpressions: [
              {
                textEn: "Yeah, everyone tips on their own bill. Just add 20 percent to yours and you're good.",
                textZh: "对，每个人在自己账单上加小费。加20%就行了。",
                actionHint: "在自己的账单上加小费",
                frequency: "common",
              },
              {
                textEn: "Each of us should tip separately. Just round up to make it easy — like 20 percent.",
                textZh: "我们每个人单独给小费。取个整方便算——大概20%。",
                actionHint: "计算自己那份的小费",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Makes sense. Can you also Venmo me your share of the appetizers?",
            textZh: "有道理。你能用Venmo把你那份前菜钱转给我吗？",
            commonMistake: {
              wrong: "Can you Venmo me your appetizer part?",
              correct: "Can you Venmo me your share of the appetizers?",
              explanation: "“part”指一部分，“share”指应分摊的份额，更自然。",
            },
            casualVersion: "Makes sense. Can you also Venmo me for your share of the apps?",
            formalityVariants: {
              casual: "Makes sense. Can you also Venmo me for your share of the apps?",
              standard: "Makes sense. Can you also Venmo me your share of the appetizers?",
              formal: "That is logical. Would you also be able to Venmo me your portion for the appetizers?",
            },
            culturalNote: "Venmo是美国最流行的个人间转账App之一，年轻人常用它来分摊费用。类似中国的微信转账。",
          },
          {
            speaker: "them",
            role: "同伴",
            textEn: "Sure, I'll Venmo you right now. What's your username? Or I can just search by phone number.",
            textZh: "好，我现在就转。你的用户名是什么？或者我可以用手机号搜索。",
            casualVersion: "Sure, I'll send it now. What's your username? Or I can just find you by phone number.",
            culturalNote: "Venmo是美国常用的移动支付App，在朋友之间AA时很方便。",
            formalityVariants: {
              casual: "Sure, I'll send it now. What's your username? Or I can just find you by phone number.",
              standard: "Sure, I can do that now. What's your username? Or I can search by your phone number.",
              formal: "Certainly, I can process that transfer immediately. What is your Venmo username, or alternatively, I can search for you using your phone number.",
            },
            alternativeExpressions: [
              {
                textEn: "Yeah, sending it now. What's your Venmo handle?",
                textZh: "好，正在转。你的Venmo账号是什么？",
                actionHint: "告诉对方你的账号",
                frequency: "common",
              },
              {
                textEn: "On it! I'll just Zelle you instead — easier with your phone number.",
                textZh: "马上！我用Zelle转吧——用手机号更方便。",
                actionHint: "提供手机号即可",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 得来速 ====================
  {
    id: "restaurant-drive-thru",
    tags: ["drive through", "drive-thru", "得来速"],
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
            casualVersion: "Welcome to Burger Palace! Order when you're ready.",
            formalityVariants: {
              casual: "Burger Palace! Ready to order?",
              standard: "Welcome to Burger Palace! Please order whenever you're ready.",
              formal: "Welcome to Burger Palace, we're ready to take your order when you are.",
            },
            keyPhrases: [{ en: "order whenever you're ready", zh: "准备好了就点" }],
            alternativeExpressions: [
              {
                textEn: "Hi, welcome! Go ahead and order when you're ready.",
                textZh: "你好，欢迎！准备好了就点。",
                actionHint: "直接开始点餐",
                frequency: "common",
              },
              {
                textEn: "Good morning! Can I take your order?",
                textZh: "早上好！可以点餐了吗？",
                actionHint: "直接说要什么",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Hi! Can I get a number 3 combo with a Coke?",
            textZh: "你好！来一个3号套餐配可乐。",
            casualVersion: "Hey! Can I get a #3 combo with a Coke?",
            commonMistake: {
              wrong: "I want a number 3 combo",
              correct: "Can I get a number 3 combo",
              explanation: "直接说 I want 不礼貌，用 Can I get 更自然。",
            },
            formalityVariants: {
              casual: "Hey, can I get a #3 with a Coke?",
              standard: "Hi! Can I get a number 3 combo with a Coke?",
              formal: "Good day. I would like to order a number 3 combo, accompanied by a Coca-Cola.",
            },
            culturalNote: "在美国得来速点餐，直接说套餐编号最快，比如'number 3 combo'。",
          },
          {
            speaker: "them",
            role: "喇叭",
            textEn: "Sure! That's the double cheeseburger combo. What size — regular, medium, or large?",
            textZh: "好的！双层芝士汉堡套餐。要什么规格——小号、中号还是大号？",
            casualVersion: "Sure! That's the double cheeseburger combo. What size?",
            culturalNote: "美国快餐点餐时常问套餐大小",
            formalityVariants: {
              casual: "Got it! That's the double cheeseburger. Size?",
              standard: "Sure! That's the double cheeseburger combo. What size would you like – small, medium, or large?",
              formal: "Certainly. That is the double cheeseburger meal. May I inquire as to which size you would prefer – small, medium, or large?",
            },
            keyPhrases: [
              { en: "combo", zh: "套餐" },
              { en: "what size", zh: "什么规格" },
              { en: "regular", zh: "小号/标准" },
            ],
            alternativeExpressions: [
              {
                textEn: "Number 3, got it! Would you like that small, medium, or large?",
                textZh: "3号套餐收到！要小份、中份还是大份？",
                actionHint: "选择大小",
                frequency: "common",
              },
              {
                textEn: "The double cheese combo — great choice! What size meal?",
                textZh: "双层芝士套餐——好选择！要多大份的？",
                actionHint: "说出想要的规格",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Medium, please. And can I add a 6-piece chicken nuggets?",
            textZh: "中号。再加一份6块鸡块。",
            casualVersion: "Medium. And can I get a 6-piece nuggets, too?",
            formalityVariants: {
              casual: "Medium. Can I get a 6-piece nuggets, too?",
              standard: "Medium, please. And can I add a 6-piece chicken nuggets?",
              formal: "A medium size, please. Additionally, I would like to add a 6-piece order of chicken nuggets.",
            },
          },
          {
            speaker: "them",
            role: "喇叭",
            textEn:
              "Medium number 3 and a 6-piece nuggets. What sauce would you like for the nuggets? We have BBQ, ranch, honey mustard, and sweet and sour.",
            textZh: "中号3号套餐和一份6块鸡块。鸡块要什么酱？我们有烧烤酱、牧场酱、蜂蜜芥末和酸甜酱。",
            casualVersion: "Okay, medium #3 and the 6-piece nuggets. What sauce for those? Got BBQ, ranch, honey mustard, sweet and sour.",
            culturalNote: "美国快餐店点炸鸡常需选择酱料",
            formalityVariants: {
              casual: "Alright, medium #3, 6-piece nuggets. Sauce? We got BBQ, ranch, honey mustard, sweet and sour.",
              standard: "Medium number 3 and a 6-piece nuggets. What sauce would you like for the nuggets? We have BBQ, ranch, honey mustard, and sweet and sour.",
              formal: "Confirming your order: a medium number 3 combo and a 6-piece chicken nugget. Regarding the nuggets, which sauce would you prefer? Our selections include BBQ, ranch, honey mustard, and sweet and sour.",
            },
            keyPhrases: [
              { en: "sauce", zh: "酱" },
              { en: "BBQ", zh: "烧烤酱" },
              { en: "ranch", zh: "牧场酱" },
              { en: "honey mustard", zh: "蜂蜜芥末" },
              { en: "sweet and sour", zh: "酸甜酱" },
            ],
            alternativeExpressions: [
              {
                textEn: "Got it. What dipping sauce for the nuggets — BBQ, ranch, honey mustard, or sweet and sour?",
                textZh: "收到。鸡块蘸什么酱——烧烤、牧场、蜂蜜芥末还是酸甜？",
                actionHint: "选一种酱",
                frequency: "common",
              },
              {
                textEn: "Alright — and which sauce? We've got BBQ, ranch, honey mustard, and sweet and sour.",
                textZh: "好的——要什么酱？烧烤酱、牧场酱、蜂蜜芥末和酸甜酱都有。",
                actionHint: "告诉对方你要的酱",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "BBQ sauce, please. Oh, and no pickles on the burger.",
            textZh: "烧烤酱。对了，汉堡不要酸黄瓜。",
            casualVersion: "BBQ. And no pickles on the burger, please.",
            culturalNote: "点餐时对配料有特殊要求很常见",
            formalityVariants: {
              casual: "BBQ. Oh, and no pickles on the burger.",
              standard: "BBQ sauce, please. Oh, and no pickles on the burger.",
              formal: "I would prefer the BBQ sauce, thank you. Also, please ensure there are no pickles on the burger.",
            },
          },
          {
            speaker: "them",
            role: "喇叭",
            textEn: "Got it — no pickles. Anything else today?",
            textZh: "好的——不要酸黄瓜。还要别的吗？",
            casualVersion: "Got it — no pickles. Anything else?",
            formalityVariants: {
              casual: "Okay, no pickles. Anything else?",
              standard: "Got it — no pickles. Anything else today?",
              formal: "Understood — no pickles. Will there be anything further today?",
            },
            alternativeExpressions: [
              {
                textEn: "No pickles, sure. Is that everything for you?",
                textZh: "不要酸黄瓜，好的。就这些了吗？",
                actionHint: "如果点完了就说就这些",
                frequency: "common",
              },
              {
                textEn: "Alright, no pickles on the burger. Anything else I can add?",
                textZh: "好的，汉堡不放酸黄瓜。还要加什么吗？",
                actionHint: "确认是否还需要其他",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's it, thank you.",
            textZh: "就这些，谢谢。",
            casualVersion: "That's it, thanks.",
            commonMistake: {
              wrong: "This is all",
              correct: "That's it",
              explanation: "直接翻译听起来不自然，That's it 更地道。",
            },
            formalityVariants: {
              casual: "That's it, thanks.",
              standard: "That's all, thank you.",
              formal: "That will be all, thank you.",
            },
          },
          {
            speaker: "them",
            role: "喇叭",
            textEn:
              "Okay, your total is $12.47. Please pull up to the first window. We'll have it ready for you in just a minute.",
            textZh: "好的，总计12.47美元。请开到第一个窗口。很快就好。",
            casualVersion: "Okay, total's $12.47. Pull up to the first window. We'll be right with ya.",
            culturalNote: "美国得来速通常分付款和取餐窗口",
            formalityVariants: {
              casual: "Total's $12.47. First window. We'll be right there.",
              standard: "Okay, your total is $12.47. Please pull up to the first window. We'll be right with you.",
              formal: "Your total comes to $12.47. Kindly proceed to the first window. We will attend to you promptly.",
            },
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
              {
                textEn: "That'll be $12.47. Go ahead and drive to the first window, please.",
                textZh: "一共12.47美元。请开到第一个窗口。",
                actionHint: "把车往前开",
                frequency: "common",
              },
              {
                textEn: "Your total's $12.47. Pull around to the window and we'll have it right out.",
                textZh: "总计12.47美元。绕过来到窗口，马上给您。",
                actionHint: "开车到取餐窗口",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "them",
            role: "窗口",
            textEn:
              "Hi! That'll be $12.47. Tap or insert your card here... Great. Your order will be ready at the next window. Have a great day!",
            textZh: "你好！12.47美元。在这里刷卡或插卡……好了。下一个窗口取餐。祝您愉快！",
            casualVersion: "Hey! That's $12.47. Swipe or insert here... Okay. Next window for your food. Have a good one!",
            culturalNote: "Have a good one 是非常常见的道别语",
            formalityVariants: {
              casual: "Hey, $12.47. Swipe/insert here... Okay. Next window for food. Have a good one!",
              standard: "Hi! That's $12.47. You can swipe or insert your card here... Okay. Please proceed to the next window for your order. Have a great day!",
              formal: "Greetings. Your total is $12.47. You may swipe or insert your card here for payment... Thank you. Please proceed to the next window to collect your order. Have a pleasant day.",
            },
            keyPhrases: [
              { en: "tap or insert", zh: "感应或插卡" },
              { en: "next window", zh: "下一个窗口" },
            ],
            alternativeExpressions: [
              {
                textEn: "$12.47 — card or cash? ... Perfect. Pick up your food at the next window!",
                textZh: "12.47美元——刷卡还是现金？……好了。下一个窗口取餐！",
                actionHint: "付款后往前开",
                frequency: "common",
              },
              {
                textEn: "That's $12.47. Just tap right here. All done — drive to window two for your food!",
                textZh: "12.47美元。在这里刷一下。好了——开到二号窗口取餐！",
                actionHint: "刷卡后开到下一个窗口",
                frequency: "occasional",
              },
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
            textEn:
              "Excuse me, I just got my order but it's wrong. I ordered a double cheeseburger but got a regular hamburger.",
            textZh: "不好意思，我刚拿到的单弄错了。我点的是双层芝士汉堡，给了普通汉堡。",
            casualVersion: "Hey, my order's wrong. Got a regular burger, but I ordered a double cheeseburger.",
            commonMistake: {
              wrong: "My order is wrong. I ordered double cheeseburger.",
              correct: "Excuse me, I just got my order but it's wrong. I ordered a double cheeseburger.",
              explanation: "直接说“My order is wrong”比较生硬；点餐时用“I ordered a”而非直接说物品。",
            },
            formalityVariants: {
              casual: "Hey, my order's wrong. Got a regular burger, ordered a double cheeseburger.",
              standard:
                "Excuse me, I just got my order but it's wrong. I ordered a double cheeseburger but got a regular hamburger.",
              formal:
                "Pardon me, but it appears there has been a mistake with my order. I specifically requested a double cheeseburger, however, I received a regular hamburger instead.",
            },
          },
          {
            speaker: "them",
            role: "窗口",
            textEn:
              "I'm so sorry about that! Can I see your receipt? ... Yes, you're right. Let me remake that for you right away. It'll be about 2 minutes.",
            textZh: "非常抱歉！能看一下您的收据吗？……是的，您说得对。我马上重新做一份。大概2分钟。",
            commonMistake: {
              wrong: "I am so sorry!",
              correct: "I'm so sorry about that!",
              explanation: "直接说 I am so sorry 听起来不自然，更常用 about that.",
            },
            casualVersion: "Oh, sorry! Lemme see your receipt... Yeah, you're right. I'll get that remade for ya, like, two minutes.",
            formalityVariants: {
              casual: "Oops, sorry! Receipt? Okay, yeah, you're right. I'll get that remade, two minutes.",
              standard: "I'm so sorry about that! Can I see your receipt? ... Yes, you're right. Let me remake that for you right away. It'll be about 2 minutes.",
              formal: "My sincerest apologies for the error. May I please see your receipt for verification? ... Indeed, you are correct. I will ensure a replacement is prepared for you immediately. This should take approximately two minutes.",
            },
            keyPhrases: [
              { en: "remake", zh: "重新做" },
              { en: "right away", zh: "马上" },
            ],
            alternativeExpressions: [
              {
                textEn: "Oh no, my bad! Let me fix that real quick. Just give me a couple minutes.",
                textZh: "哦不好意思！我马上改正。给我几分钟。",
                actionHint: "等一下就好",
                frequency: "common",
              },
              {
                textEn:
                  "I apologize! Let me check your receipt... Yep, we messed up. I'll get the right one for you ASAP.",
                textZh: "抱歉！让我看看收据……对，搞错了。我尽快给您做正确的。",
                actionHint: "稍等片刻",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Also, I asked for no pickles but there are pickles on this. And I'm missing the chicken nuggets.",
            textZh: "另外，我说了不要酸黄瓜但上面有。而且少了鸡块。",
            casualVersion: "And also, I asked for no pickles, but it's got 'em. Plus, no chicken nuggets.",
            commonMistake: {
              wrong: "I said no pickles but have pickles on this. Also lost chicken nuggets.",
              correct: "I asked for no pickles but there are pickles on this. And I'm missing the chicken nuggets.",
              explanation: "“I said”听起来像命令，“I asked for”更礼貌；用“missing”比“lost”更自然。",
            },
            formalityVariants: {
              casual: "And also, I asked for no pickles, but it's got 'em. And no nuggets.",
              standard: "Also, I asked for no pickles but there are pickles on this. And I'm missing the chicken nuggets.",
              formal: "Furthermore, I specifically requested no pickles on the burger, yet they are present. Additionally, the chicken nuggets are absent from my order.",
            },
          },
          {
            speaker: "them",
            role: "窗口",
            textEn:
              "I apologize for all the mix-ups. Let me get you the correct burger with no pickles and a fresh order of nuggets with BBQ sauce. Can you pull forward and park in the numbered spot? I'll bring everything out to your car.",
            textZh:
              "对所有的弄错非常抱歉。我给您拿正确的没有酸黄瓜的汉堡和新做的鸡块配烧烤酱。您能往前开停在编号车位吗？我送到您车上。",
            commonMistake: {
              wrong: "I'm very sorry about the mistake",
              correct: "I apologize for all the mix-ups",
              explanation: "用 mix-ups 概括所有错误更自然，更口语化。",
            },
            casualVersion: "My bad, so many mix-ups. I'll get you the right burger, no pickles, and fresh nuggets with BBQ. Just pull up to a numbered spot, and I'll bring it out.",
            culturalNote: "美国快餐店通常会让你停到指定车位等待，以保持车道畅通。",
            formalityVariants: {
              casual: "My bad on all the mix-ups. I'll get you the right burger, no pickles, and fresh nuggets with BBQ. Just pull up to a numbered spot, I'll bring it out.",
              standard: "I apologize for all the mix-ups. Let me get you the correct burger with no pickles and a fresh order of nuggets with BBQ sauce. Can you pull forward and park in the numbered spot? I'll bring everything out to your car.",
              formal: "My deepest apologies for these cumulative errors. I will personally ensure the correct burger without pickles and a fresh order of chicken nuggets with BBQ sauce are prepared. Would you please proceed to park in one of the designated numbered spaces? I will deliver your complete order to your vehicle.",
            },
            keyPhrases: [
              { en: "mix-ups", zh: "弄错/搞混" },
              { en: "pull forward", zh: "往前开" },
              { en: "numbered spot", zh: "编号车位" },
            ],
            alternativeExpressions: [
              {
                textEn: "I'm sorry! Let me fix that. Can you park in spot 2? I'll bring it right out.",
                textZh: "抱歉！我来改正。能停在2号车位吗？马上给您送出来。",
                actionHint: "开到指定车位等",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, no problem. These things happen.",
            textZh: "好的，没关系。这种事难免的。",
            culturalNote: "美国人遇到小失误时常说'These things happen'",
            commonMistake: {
              wrong: "It's not problem",
              correct: "No problem",
              explanation: "No problem 比 It's not a problem 更常用和自然。",
            },
            casualVersion: "Yeah, no worries. Happens.",
            formalityVariants: {
              casual: "Yeah, no worries. Happens.",
              standard: "Sure, no problem. These things happen.",
              formal: "Certainly, I understand completely. Such occurrences are not uncommon.",
            },
          },
          {
            speaker: "them",
            role: "窗口",
            textEn:
              "Thank you for being patient. As an apology, I've added a free apple pie and upgraded your drink to a large. Here's your corrected order — a double cheeseburger no pickles, 6-piece nuggets with BBQ, and your free pie.",
            textZh:
              "谢谢您的耐心。作为道歉，我送了一个免费的苹果派，还把饮料升级到大杯了。这是您改正后的订单——不加酸黄瓜的双层芝士汉堡、6块鸡块配烧烤酱，还有免费的派。",
            culturalNote: "美国商家失误后常会提供免费赠品弥补",
            casualVersion: "Thanks for waiting. As an apology, I threw in a free apple pie and upsized your drink to a large. Here's your corrected order — double cheeseburger, no pickles, 6 nuggets with BBQ, and your free pie.",
            formalityVariants: {
              casual: "Thanks for waiting. As an apology, I threw in a free apple pie and upsized your drink to a large. Here's your corrected order — double cheeseburger, no pickles, 6 nuggets with BBQ, and your free pie.",
              standard: "Thank you for being patient. As an apology, I've added a free apple pie and upgraded your drink to a large. Here's your corrected order — a double cheeseburger no pickles, 6-piece nuggets with BBQ, and your free pie.",
              formal: "I truly appreciate your patience. As a token of our apology, I have included a complimentary apple pie and upgraded your beverage to a large size. Here is your revised order: a double cheeseburger without pickles, a 6-piece chicken nuggets with BBQ sauce, and your complimentary pie.",
            },
            keyPhrases: [
              { en: "being patient", zh: "耐心" },
              { en: "as an apology", zh: "作为道歉" },
              { en: "upgraded", zh: "升级" },
              { en: "corrected order", zh: "改正后的订单" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sorry for the wait! Here's the right order, plus a free pie and a drink upgrade on us.",
                textZh: "抱歉让您久等！这是正确的订单，另外免费送一个派，饮料也升级了。",
                actionHint: "检查一下是否都对了",
                frequency: "common",
              },
              {
                textEn:
                  "Thanks for your patience. We threw in a free dessert to make up for it. Everything should be right this time!",
                textZh: "感谢您的耐心。我们加了一个免费甜品作为补偿。这次应该都对了！",
                actionHint: "确认订单正确",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh, that's really nice of you! Thank you. Everything looks right this time.",
            textZh: "哦，你太好了！谢谢。这次看起来都对了。",
            casualVersion: "Oh, that's super nice of you! Thanks. Looks good this time.",
            commonMistake: {
              wrong: "Oh, you are very nice! Thank you.",
              correct: "Oh, that's really nice of you! Thank you.",
              explanation: "“That's nice of you”是更地道、更自然的表达，比“You are nice”更礼貌。",
            },
            formalityVariants: {
              casual: "Oh, that's super nice of you! Thanks. Looks good this time.",
              standard: "Oh, that's really nice of you! Thank you. Everything looks right this time.",
              formal: "Oh, that is incredibly thoughtful of you! My sincere gratitude. This appears to be correct on this occasion.",
            },
          },
          {
            speaker: "them",
            role: "窗口",
            textEn:
              "I'm glad! Again, sorry for the inconvenience. If you have any other issues, feel free to come back or you can call the number on the receipt. Have a great day!",
            textZh: "太好了！再次抱歉给您带来不便。如果还有问题，欢迎回来或者打收据上的电话。祝您有美好的一天！",
            culturalNote: "美国服务业强调解决问题并留沟通渠道",
            commonMistake: {
              wrong: "I am so glad!",
              correct: "I'm glad to hear that!",
              explanation: "I am so glad 单独说有些生硬，后面常接 to hear that 等。",
            },
            casualVersion: "Glad to hear it! Again, sorry for the hassle. Any other issues, just come back or call the number on the receipt. Have a good one!",
            formalityVariants: {
              casual: "Glad to hear it! Again, sorry for the hassle. Any other issues, just come back or call the number on the receipt. Have a good one!",
              standard: "I'm glad! Again, sorry for the inconvenience. If you have any other issues, feel free to come back or you can call the number on the receipt. Have a great day!",
              formal: "I am delighted to hear that! Once more, my apologies for any inconvenience caused. Should you encounter any further concerns, please do not hesitate to return or contact us using the number provided on your receipt. I wish you a pleasant remainder of your day!",
            },
            keyPhrases: [
              { en: "inconvenience", zh: "不便" },
              { en: "the number on the receipt", zh: "收据上的电话" },
            ],
            alternativeExpressions: [
              {
                textEn: "Great! Sorry again. If anything else comes up, just swing by or give us a call. Enjoy!",
                textZh: "太好了！再次抱歉。有问题随时过来或打电话。祝用餐愉快！",
                actionHint: "可以离开了",
                frequency: "common",
              },
              {
                textEn: "Glad it's all good now! Don't hesitate to reach out if you need anything. Have a good one!",
                textZh: "很高兴都没问题了！有需要随时联系。祝您愉快！",
                actionHint: "开车离开",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "No worries at all. Thanks for fixing it so quickly!",
            textZh: "完全没关系。谢谢你这么快就解决了！",
            commonMistake: {
              wrong: "Don't worry",
              correct: "No worries at all",
              explanation: "Don't worry 语气较重，No worries at all 更轻松自然。",
            },
            casualVersion: "Nah, no worries. Appreciate you fixing it fast!",
            formalityVariants: {
              casual: "Nah, no worries. Appreciate you fixing it fast!",
              standard: "No worries at all. Thanks for fixing it so quickly!",
              formal: "Not a problem whatsoever. I appreciate your prompt resolution of this matter!",
            },
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
            casualVersion: "So many options here! Let's walk around, see what looks good.",
            commonMistake: {
              wrong: "Many choices here.",
              correct: "So many options here!",
              explanation: '"Options" 比 "choices" 更常用语表达餐饮选择。',
            },
            formalityVariants: {
              casual: "So many options here! Let's just walk around, see what looks good.",
              standard: "There are so many options here! Let's walk around and see what looks good.",
              formal:
                "There is quite a selection of choices available here. Perhaps we could take a moment to survey the offerings.",
            },
          },
          {
            speaker: "them",
            role: "同伴",
            textEn:
              "Good idea. I see Chinese, Japanese, Mexican, Indian, and a pizza place. What are you in the mood for?",
            textZh: "好主意。我看到有中餐、日餐、墨西哥菜、印度菜，还有一家披萨店。你想吃什么？",
            keyPhrases: [{ en: "what are you in the mood for", zh: "你想吃什么" }],
            alternativeExpressions: [
              {
                textEn: "There's a ton of choices! Chinese, Japanese, Mexican... What do you feel like eating?",
                textZh: "选择太多了！中餐、日餐、墨西哥菜……你想吃啥？",
                actionHint: "告诉同伴你的想法",
                frequency: "common",
              },
              {
                textEn: "Wow, lots of options. I see Asian, Mexican, pizza... What sounds good to you?",
                textZh: "哇，好多选择。有亚洲菜、墨西哥菜、披萨……你觉得什么好？",
                actionHint: "说出你想吃的",
                frequency: "occasional",
              },
            ],
            casualVersion: "Good idea. See Chinese, Japanese, Mexican, Indian, and pizza. What're you feeling?",
            commonMistake: {
              wrong: "What do you want to eat?",
              correct: "What are you in the mood for?",
              explanation: '"In the mood for" 更自然委婉，"want to eat" 显得直接。',
            },
            formalityVariants: {
              casual: "Good idea. Chinese, Japanese, Mexican, Indian, pizza. What're you feelin'?",
              standard:
                "Good idea. I see Chinese, Japanese, Mexican, Indian, and a pizza place. What are you in the mood for?",
              formal:
                "That is an excellent suggestion. I observe various establishments offering Chinese, Japanese, Mexican, Indian, and Italian pizza cuisine. What type of fare are you inclined towards this evening?",
            },
          },
          {
            speaker: "you",
            textEn: "I'm thinking Japanese. Let me check out that teriyaki place. Hi, what's your most popular dish?",
            textZh: "我想吃日餐。我去看看那家照烧店。你好，你们最受欢迎的是什么？",
            casualVersion: "Hmm, Japanese. Lemme check out that teriyaki spot. Hey, what's your most popular dish?",
            culturalNote: "在美国点餐直接说'Hi'或'Hello'即可，不必加'请问'",
            commonMistake: {
              wrong: "What dish is most popular?",
              correct: "What's your most popular dish?",
              explanation: '询问店家时，习惯用 "your" 来指代他们的产品。',
            },
            formalityVariants: {
              casual: "Japanese sounds good. Lemme check out the teriyaki spot. Hey, what's most popular?",
              standard:
                "I'm thinking Japanese. Let me check out that teriyaki place. Hi, what's your most popular dish?",
              formal:
                "I am leaning towards Japanese cuisine. I shall inquire at that teriyaki establishment. Excuse me, could you inform me which dish is your most frequently requested or acclaimed?",
            },
          },
          {
            speaker: "them",
            role: "摊位",
            textEn:
              "Our chicken teriyaki bowl is the best seller! It comes with rice, steamed vegetables, and teriyaki sauce. You can also add gyoza for $3 more. Would you like a sample?",
            textZh: "照烧鸡肉饭最畅销！配米饭、蒸蔬菜和照烧酱。还可以加3美元来份煎饺。要试吃吗？",
            commonMistake: {
              wrong: "Do you want a sample?",
              correct: "Would you like a sample?",
              explanation: "Would you like 比 Do you want 更礼貌。",
            },
            keyPhrases: [
              { en: "best seller", zh: "最畅销的" },
              { en: "comes with", zh: "配有/搭配" },
              { en: "gyoza", zh: "煎饺" },
              { en: "sample", zh: "试吃" },
            ],
            alternativeExpressions: [
              {
                textEn: "The teriyaki chicken is our number one! Wanna try a taste?",
                textZh: "照烧鸡是我们的第一名！想尝一口吗？",
                actionHint: "可以先试吃",
                frequency: "common",
              },
            ],
            casualVersion:
              "Chicken teriyaki bowl's our best seller! Comes with rice, steamed veggies, teriyaki sauce. Can add gyoza for 3 bucks. Wanna sample?",
            formalityVariants: {
              casual:
                "Chicken teriyaki bowl's our best seller! Rice, steamed veggies, teriyaki sauce. Gyoza for 3 bucks. Wanna sample?",
              standard:
                "Our chicken teriyaki bowl is the best seller! It comes with rice, steamed vegetables, and teriyaki sauce. You can also add gyoza for $3 more. Would you like a sample?",
              formal:
                "Our chicken teriyaki bowl is undoubtedly our most frequently purchased item. It is served with a portion of rice, steamed seasonal vegetables, and our signature teriyaki sauce. An additional order of gyoza may be added for an incremental charge of three dollars. Might you be interested in a complimentary tasting sample?",
            },
          },
          {
            speaker: "you",
            textEn:
              "Yes, I'd love a sample! ... Mmm, that's delicious. I'll have the chicken teriyaki bowl with gyoza, please.",
            textZh: "好的，我想试吃！……嗯，真好吃。来一份照烧鸡肉饭加煎饺。",
            casualVersion:
              "Yeah, I'd love a sample! ... Mmm, that's good. I'll get the chicken teriyaki bowl with gyoza.",
            commonMistake: {
              wrong: "I want chicken teriyaki bowl...",
              correct: "I'll have the chicken teriyaki bowl...",
              explanation: '"I\'ll have/get" 是点餐时更自然礼貌的表达，比 "I want" 委婉。',
            },
            formalityVariants: {
              casual: "Yeah, I'd love a sample! ... Mmm, that's good. I'll get the chicken teriyaki bowl with gyoza.",
              standard:
                "Yes, I'd love a sample! ... Mmm, that's delicious. I'll have the chicken teriyaki bowl with gyoza, please.",
              formal:
                "Yes, I would greatly appreciate a sample. ... Indeed, that is quite delectable. I shall proceed with an order for the chicken teriyaki bowl, accompanied by the gyoza, please.",
            },
          },
          {
            speaker: "them",
            role: "摊位",
            textEn:
              "Great choice! White rice or brown rice? And for the drink, it comes with a fountain drink — help yourself at the drink station over there.",
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
              {
                textEn: "Nice! White or brown rice? You get a free drink too — the fountain's right over there.",
                textZh: "好的！白米饭还是糙米？还送一杯饮料——饮料机就在那边。",
                actionHint: "选米饭后自己去接饮料",
                frequency: "common",
              },
              {
                textEn: "That comes with rice and a drink. White or brown? Drinks are self-serve at the station.",
                textZh: "套餐含米饭和饮料。白米还是糙米？饮料自助。",
                actionHint: "选好后去饮料机",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Good choice! White or brown rice? And for the drink, it's a fountain drink — just help yourself at the station over there.",
            culturalNote: "美国快餐店的“fountain drink”通常是自助饮料机，可以续杯",
            formalityVariants: {
              casual: "Good choice! White or brown rice? Drink's a fountain drink — just help yourself over there.",
              standard:
                "Great choice! White rice or brown rice? And for the drink, it comes with a fountain drink — help yourself at the drink station over there.",
              formal:
                "An excellent selection! Would you prefer white or brown rice? Regarding your beverage, a complimentary fountain drink is included; kindly assist yourself at the designated drink station located yonder.",
            },
          },
          {
            speaker: "you",
            textEn: "White rice, please. Is there a number system, or do I wait here?",
            textZh: "白米饭。是叫号还是在这里等？",
            casualVersion: "White rice, please. Is there a number system, or just wait here?",
            commonMistake: {
              wrong: "Have number system?",
              correct: "Is there a number system?",
              explanation: '询问是否存在某物时，常用 "Is there a...?" 句型。',
            },
            formalityVariants: {
              casual: "White rice. Number system, or just wait here?",
              standard: "White rice, please. Is there a number system, or do I wait here?",
              formal:
                "White rice, if you please. May I inquire if a numbered order system is in place, or am I expected to remain at this location?",
            },
          },
          {
            speaker: "them",
            role: "摊位",
            textEn:
              "I'll make it fresh right now — it takes about 3 minutes. You can wait here or grab a seat and I'll call your number. You're number 47.",
            textZh: "我现在给您做——大概3分钟。可以在这里等，也可以先找座位，我会叫号。您是47号。",
            keyPhrases: [
              { en: "make it fresh", zh: "现做" },
              { en: "call your number", zh: "叫号" },
            ],
            alternativeExpressions: [
              {
                textEn: "Coming right up! About 3 minutes. Hang tight or find a seat — I'll call number 47.",
                textZh: "马上做！大概3分钟。在这等或去找座位——我叫47号。",
                actionHint: "记住自己的号码",
                frequency: "common",
              },
              {
                textEn: "I'll have it ready in a few. You're number 47 — listen for your number!",
                textZh: "一会儿就好。您是47号——注意听叫号！",
                actionHint: "可以先去占座",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "I'll make it fresh now — 'bout 3 minutes. Can wait here or grab a seat, I'll call your number. You're 47.",
            formalityVariants: {
              casual:
                "I'll make it fresh now — takes 'bout 3 mins. Wait here or grab a seat, I'll call your number. You're 47.",
              standard:
                "I'll make it fresh right now — it takes about 3 minutes. You can wait here or grab a seat and I'll call your number. You're number 47.",
              formal:
                "I shall prepare your order freshly at this moment; it typically requires approximately three minutes. You are welcome to either wait here or secure a table, and I will announce your order number. Your number is 47.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll grab a seat. Is it hard to find tables during lunch hour?",
            textZh: "我先找座位。午餐时间找桌子难吗？",
            casualVersion: "I'll grab a seat. Hard to find tables at lunch?",
            commonMistake: {
              wrong: "Difficult to find tables for lunch?",
              correct: "Is it hard to find tables during lunch hour?",
              explanation: '"Hard to find" 比 "difficult to find" 更口语化和常见。',
            },
            formalityVariants: {
              casual: "I'll grab a seat. Hard to find tables at lunch?",
              standard: "I'll grab a seat. Is it hard to find tables during lunch hour?",
              formal:
                "I will proceed to find a table. May I inquire if securing seating during the peak lunch period tends to be challenging?",
            },
          },
          {
            speaker: "them",
            role: "同伴",
            textEn:
              "It can be pretty crowded. Let's split up — I'll save us a table while you wait for your food. Look for me near the back by the windows.",
            textZh: "可能挺挤的。我们分头行动——你等餐我去占座。在后面靠窗的位置找我。",
            keyPhrases: [
              { en: "crowded", zh: "拥挤的" },
              { en: "save us a table", zh: "占座" },
              { en: "split up", zh: "分头行动" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Lunch rush is crazy here. I'll go grab a table — you wait for the food. I'll text you where I'm sitting.",
                textZh: "午高峰这里特别挤。我去占桌——你等餐。我发消息告诉你我坐哪。",
                actionHint: "分头行动效率更高",
                frequency: "common",
              },
              {
                textEn: "Yeah, it gets packed. Why don't I find seats while you pick up the order?",
                textZh: "对，会很挤。我去找座位，你拿餐怎么样？",
                actionHint: "一个人占座一个人取餐",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Can get pretty crowded. Let's split up — I'll save us a table while you wait for your food. Look for me near the back by the windows.",
            culturalNote: "美国朋友一起吃饭，主动帮忙占座是很常见的举动",
            formalityVariants: {
              casual:
                "Can get pretty crowded. Let's split up — I'll save us a table while you wait for your food. Look for me near the back by the windows.",
              standard:
                "It can be pretty crowded. Let's split up — I'll save us a table while you wait for your food. Look for me near the back by the windows.",
              formal:
                "It is possible that the area may become quite congested. I suggest we divide our efforts: I will secure a table for us while you await your order. Kindly locate me towards the rear, adjacent to the windows.",
            },
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
            commonMistake: {
              wrong: "Is this seat has person?",
              correct: "Is this seat taken?",
              explanation: "中文思维直接翻译“有没有人”容易出错，英文常用be taken表示“被占用”",
            },
            formalityVariants: {
              casual: "Hey, is this seat open?",
              standard: "Excuse me, is this seat taken?",
              formal: "Pardon me, I was wondering if this particular seat is currently occupied?",
            },
          },
          {
            speaker: "them",
            role: "陌生人",
            textEn: "No, go ahead! I'm actually just about to leave.",
            textZh: "没有，请坐！我其实马上就走了。",
            culturalNote: "美国人说'Go ahead'表示允许或请便。",
            commonMistake: {
              wrong: "No, please sit!",
              correct: "No, go ahead!",
              explanation: "'Please sit' 有时听起来太直接。'Go ahead' 更自然地表示请便。",
            },
            casualVersion: "Nah, go for it! I'm actually just about to head out.",
            formalityVariants: {
              casual: "Nah, go for it! I'm actually just about to head out.",
              standard: "No, go ahead! I'm actually just about to leave.",
              formal: "No, please feel free. I was just preparing to depart.",
            },
            keyPhrases: [
              { en: "is this seat taken", zh: "这位置有人吗" },
              { en: "go ahead", zh: "请便" },
            ],
            alternativeExpressions: [
              {
                textEn: "Nope, it's all yours! I'm heading out in a sec.",
                textZh: "没有，归你了！我一会儿就走。",
                actionHint: "可以坐下了",
                frequency: "common",
              },
              {
                textEn: "No one's sitting here — feel free! I was just leaving anyway.",
                textZh: "没人坐——请便！我正好要走了。",
                actionHint: "直接坐下",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks! Do you know if there's a microwave somewhere? I brought my own lunch.",
            textZh: "谢谢！你知道哪里有微波炉吗？我自己带了午饭。",
            casualVersion: "Thanks! Any microwave around? Brought my own lunch.",
            commonMistake: {
              wrong: "Do you know is there a microwave?",
              correct: "Do you know if there's a microwave?",
              explanation: "间接问句中，要用if或whether，语序是主谓宾，不能用疑问句语序。",
            },
            formalityVariants: {
              casual: "Thanks! Any microwave around? Brought my own lunch.",
              standard: "Thanks! Do you know if there's a microwave somewhere? I brought my own lunch.",
              formal: "Thank you. Would you happen to know if there is a microwave available for public use? I've brought my own meal.",
            },
          },
          {
            speaker: "them",
            role: "陌生人",
            textEn:
              "I think there's one near the condiment station, over by the napkins and utensils. Some food courts have them for customers who bring their own food.",
            textZh: "我想调料台那边有一个，就在餐巾纸和餐具旁边。有些美食广场给自带食物的顾客提供微波炉。",
            commonMistake: {
              wrong: "I think have one near the condiment station.",
              correct: "I think there's one by the condiment station.",
              explanation: "中文直接说'有'，但英文常用'there is/are'表达存在。",
            },
            casualVersion: "Pretty sure there's one near the condiment station, by the napkins and stuff. Some food courts have 'em for folks who bring their own.",
            formalityVariants: {
              casual: "Pretty sure there's one near the condiment station, by the napkins and stuff. Some food courts have 'em for folks who bring their own.",
              standard: "I think there's one near the condiment station, over by the napkins and utensils. Some food courts have them for customers who bring their own food.",
              formal: "I believe one is located adjacent to the condiment station, typically positioned near the napkins and utensils. Certain food courts provide these for patrons who bring their own meals.",
            },
            keyPhrases: [
              { en: "microwave", zh: "微波炉" },
              { en: "condiment station", zh: "调料台" },
              { en: "utensils", zh: "餐具" },
              { en: "napkins", zh: "餐巾纸" },
            ],
            alternativeExpressions: [
              {
                textEn: "I think I saw one over by the napkins and ketchup area. Check near the condiment station.",
                textZh: "我好像在餐巾纸和番茄酱那边看到了一个。去调料台那边找找。",
                actionHint: "去调料台附近找",
                frequency: "common",
              },
              {
                textEn: "There should be one somewhere around the self-serve area — near the forks and stuff.",
                textZh: "自助区那边应该有一个——在餐具旁边。",
                actionHint: "去自助区看看",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Found it, thanks. Hey, where do we bus our trays when we're done?",
            textZh: "找到了，谢谢。对了，吃完了餐盘放哪里？",
            casualVersion: "Found it, thanks. So, where do we put our trays when we're done?",
            culturalNote: "“Bus our trays”是美式表达，指餐后归还餐盘。",
            commonMistake: {
              wrong: "Where to put the tray?",
              correct: "Where do we bus our trays?",
              explanation: "直接问句更自然，'bus our trays'是地道表达。",
            },
            formalityVariants: {
              casual: "Got it, thanks. So, where do we put our trays when we're done?",
              standard: "Found it, thanks. Hey, where do we bus our trays when we're done?",
              formal: "I've located it, thank you. Could you please direct me to where we should return our trays upon completion?",
            },
          },
          {
            speaker: "them",
            role: "同伴",
            textEn:
              "See those stations with the trash cans and the tray return? Just sort your trash — recycling on the left, trash on the right, and stack your tray on top. Some food courts have separate bins for compost too.",
            textZh:
              "看到那些有垃圾桶和餐盘回收的地方了吗？分类一下垃圾——左边是可回收，右边是普通垃圾，餐盘摞在上面。有些美食广场还有堆肥专用箱。",
            commonMistake: {
              wrong: "You should classify your trash.",
              correct: "Just sort your trash.",
              explanation: "'classify' 太正式，'sort' 更适合日常垃圾分类。",
            },
            casualVersion: "See those spots with the trash cans and tray returns? Just sort your stuff — recycling left, trash right, and stack your tray. Some places even have compost bins.",
            culturalNote: "美国美食广场的垃圾分类很细致。",
            formalityVariants: {
              casual: "See those spots with the trash cans and tray returns? Just sort your stuff — recycling left, trash right, and stack your tray. Some places even have compost bins.",
              standard: "See those stations with the trash cans and the tray return? Just sort your trash — recycling on the left, trash on the right, and stack your tray on top. Some food courts have separate bins for compost too.",
              formal: "Kindly observe the designated stations equipped with waste receptacles and tray return points. Please separate your waste: recyclables to the left, general refuse to the right, and stack your tray atop the collection point. Furthermore, some food courts provide separate bins for organic compostable materials.",
            },
            keyPhrases: [
              { en: "bus our trays", zh: "收拾餐盘" },
              { en: "tray return", zh: "餐盘回收处" },
              { en: "sort your trash", zh: "垃圾分类" },
              { en: "recycling", zh: "可回收物" },
              { en: "compost", zh: "堆肥" },
            ],
            vocabNotes: {
              bus: {
                meaningInContext: "在这句话里表示：收拾用过的餐具和餐盘（餐饮业术语，不是公共汽车）",
                similarUsage: "类似用法：Please bus your own table.（请自行收拾餐桌）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Just take your tray to the station over there. Recycling and trash are separated — tray goes on top.",
                textZh: "把餐盘拿到那边的回收处就行。可回收和普通垃圾分开——餐盘放上面。",
                actionHint: "按分类投放垃圾",
                frequency: "common",
              },
              {
                textEn: "There's a tray return by the exit. Toss your trash and stack the tray — easy!",
                textZh: "出口旁边有餐盘回收处。扔掉垃圾，餐盘摞上去就行——很简单！",
                actionHint: "走的时候顺便收拾",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Do the food court vendors accept credit cards, or is it cash only?",
            textZh: "明白了。美食广场的摊位接受信用卡吗，还是只收现金？",
            culturalNote: "美国大部分地方都收信用卡，但小店可能只收现金。",
            casualVersion: "Got it. So, can you pay with cards here, or just cash?",
            commonMistake: {
              wrong: "Can I use credit card?",
              correct: "Do they accept credit cards?",
              explanation: "“Can I use...”听起来像询问能力，用“accept cards”或“pay with cards”更地道。",
            },
            formalityVariants: {
              casual: "Got it. So, can you pay with cards here, or just cash?",
              standard: "Got it. Do the food court vendors accept credit cards, or is it cash only?",
              formal: "Understood. Do the various vendors within this food court accept credit card payments, or is payment restricted solely to cash?",
            },
          },
          {
            speaker: "them",
            role: "同伴",
            textEn:
              "Most places accept cards nowadays, but a few small vendors might be cash-only. There's an ATM near the entrance if you need cash. Some places also take Apple Pay and Google Pay.",
            textZh:
              "现在大部分店都接受刷卡了，但有几个小摊位可能只收现金。入口附近有ATM机，如果需要现金的话。有些店还接受Apple Pay和Google Pay。",
            commonMistake: {
              wrong: "Most places take card.",
              correct: "Most places accept cards.",
              explanation: "通常用复数 'cards'，'accept' 或 'take' 动词都对。",
            },
            casualVersion: "Most places take cards now, but a few small spots might be cash only. There's an ATM by the entrance if you need cash. Some even take Apple Pay/Google Pay.",
            formalityVariants: {
              casual: "Most places take cards now, but a few small spots might be cash only. There's an ATM by the entrance if you need cash. Some even take Apple Pay/Google Pay.",
              standard: "Most places accept cards nowadays, but a few small vendors might be cash-only. There's an ATM near the entrance if you need cash. Some places also take Apple Pay and Google Pay.",
              formal: "The majority of establishments now accept card payments; however, a limited number of smaller vendors may operate on a cash-only basis. An ATM is conveniently located near the entrance should you require currency. Additionally, some vendors facilitate transactions via mobile payment systems such as Apple Pay and Google Pay.",
            },
            keyPhrases: [
              { en: "cash-only", zh: "只收现金" },
              { en: "ATM", zh: "自动取款机" },
            ],
            alternativeExpressions: [
              {
                textEn: "Almost everywhere takes cards now. A couple of the smaller stalls might be cash-only though.",
                textZh: "现在基本都能刷卡了。不过有几个小摊位可能只收现金。",
                actionHint: "带点现金以防万一",
                frequency: "common",
              },
              {
                textEn:
                  "Cards and mobile pay work at most places. If a vendor only takes cash, there's an ATM by the door.",
                textZh: "大部分店都接受刷卡和手机支付。如果有只收现金的，门口有ATM机。",
                actionHint: "不用太担心付款方式",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "One of the vendors gave me a loyalty card. Is it worth it?",
            textZh: "有一家给了我一张会员卡。值得办吗？",
            culturalNote: "美国商家忠诚卡很普遍，通常是集点或折扣。",
            commonMistake: {
              wrong: "Is it worthy?",
              correct: "Is it worth it?",
              explanation: "英文表达'值得'常用 'worth it'，'worthy' 更多指人或事有价值。",
            },
            casualVersion: "One of the places gave me a loyalty card. Worth getting?",
            formalityVariants: {
              casual: "One of the places gave me a loyalty card. Worth getting?",
              standard: "One of the vendors gave me a loyalty card. Is it worth it?",
              formal: "A vendor provided me with a loyalty program card. Do you believe it offers sufficient value?",
            },
          },
          {
            speaker: "them",
            role: "同伴",
            textEn:
              "If you eat there regularly, definitely! Usually you get a stamp per visit and a free meal after 10 visits. Some food courts also have their own apps with deals and discounts for all the vendors.",
            textZh:
              "如果经常去吃的话绝对值得！通常每次消费盖一个章，10次后免费吃一次。有些美食广场还有自己的App，所有摊位都有优惠和折扣。",
            commonMistake: {
              wrong: "If you often eat there, definitely!",
              correct: "If you eat there regularly, definitely!",
              explanation: "'regularly' 比 'often' 在此语境下更自然流畅。",
            },
            casualVersion: "If you eat there a lot, totally! Usually, it's a stamp per visit, then a free meal after 10. Some food courts even have apps with deals for all the spots.",
            culturalNote: "美国忠诚卡和折扣App很常见，优惠力度可能比国内更大。",
            formalityVariants: {
              casual: "If you eat there a lot, totally! Usually, it's a stamp per visit, then a free meal after 10. Some food courts even have apps with deals for all the spots.",
              standard: "If you eat there regularly, definitely! Usually you get a stamp per visit and a free meal after 10 visits. Some food courts also have their own apps with deals and discounts for all the vendors.",
              formal: "If your patronage is frequent, it is certainly advisable. Typically, one accrues a stamp per visit, culminating in a complimentary meal after ten visits. Furthermore, certain food courts offer proprietary applications providing deals and discounts across all participating vendors.",
            },
            keyPhrases: [
              { en: "loyalty card", zh: "会员卡" },
              { en: "stamp", zh: "盖章" },
              { en: "deals and discounts", zh: "优惠和折扣" },
            ],
            alternativeExpressions: [
              {
                textEn: "For sure! You get a free meal after so many visits. Totally worth it if you come here a lot.",
                textZh: "当然值得！去够一定次数就免费吃一次。经常来的话太划算了。",
                actionHint: "考虑办一张",
                frequency: "common",
              },
              {
                textEn: "Yeah, it's a buy-ten-get-one-free kind of deal. Plus some places have app-only discounts.",
                textZh: "是的，买十送一那种。而且有些店有App专属优惠。",
                actionHint: "可以留着这张卡",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. This food court is really convenient — everything in one place!",
            textZh: "这个信息有用。这个美食广场真方便——什么都有！",
            commonMistake: {
              wrong: "This information is useful.",
              correct: "Good to know.",
              explanation: "'Good to know' 是更地道的口语表达，表示'了解了'、'知道了'。",
            },
            casualVersion: "Good to know. This food court's super convenient — got everything here!",
            formalityVariants: {
              casual: "Good to know. This food court's super convenient — got everything here!",
              standard: "Good to know. This food court is really convenient — everything in one place!",
              formal: "That information is helpful. This food court offers remarkable convenience, providing comprehensive options in a single location.",
            },
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
            textEn:
              "Welcome to Sweet Bloom! Everything in the display case is freshly baked this morning. Can I help you pick something?",
            textZh: "欢迎来到Sweet Bloom！展示柜里的都是今天早上新鲜烤的。需要帮您选吗？",
            keyPhrases: [
              { en: "display case", zh: "展示柜" },
              { en: "freshly baked", zh: "新鲜烤的" },
            ],
            alternativeExpressions: [
              {
                textEn: "Good morning! What can I get for you today?",
                textZh: "早上好！今天想要点什么？",
                actionHint: "直接告诉店员你想要什么",
                frequency: "common",
              },
              {
                textEn: "Hi there! Let me know when you're ready to order.",
                textZh: "你好！想好了告诉我。",
                actionHint: "可以先慢慢看",
                frequency: "common",
              },
            ],
            casualVersion:
              "Welcome to Sweet Bloom! Everything in the case? Baked fresh this mornin'. Need help pickin' somethin'?",
            formalityVariants: {
              casual:
                "Hey, welcome to Sweet Bloom! Everything in the case is fresh this morning. Need a hand picking something out?",
              standard:
                "Welcome to Sweet Bloom! Everything in the display case is freshly baked this morning. Can I help you pick something?",
              formal:
                "Good morning, and welcome to Sweet Bloom. All items in our display case have been freshly baked this morning. May I assist you with your selection?",
            },
          },
          {
            speaker: "you",
            textEn: "Everything looks amazing! What's that one on the top shelf — the one with the pink frosting?",
            textZh: "全都好好看！最上面那个——粉色糖霜的那个是什么？",
            commonMistake: {
              wrong: "What is the top one?",
              correct: "What's that top one?",
              explanation: "直接问“what is”可能略显生硬，用'that'指代更自然",
            },
            casualVersion: "Ooh, what's that pink one up top?",
            formalityVariants: {
              casual: "Looks amazing! What's that one on top—the pink one?",
              standard: "Everything looks amazing! What's that one on the top shelf — the one with the pink frosting?",
              formal:
                "These all look quite exquisite! Could you please tell me about the item on the top shelf with the pink frosting?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "That's our signature raspberry rose cake. It's layers of vanilla sponge with raspberry jam and rose-flavored buttercream. It's one of our bestsellers.",
            textZh: "那是我们的招牌覆盆子玫瑰蛋糕。香草海绵蛋糕夹覆盆子果酱和玫瑰味奶油霜。是我们最畅销的。",
            keyPhrases: [
              { en: "signature", zh: "招牌" },
              { en: "layers of", zh: "多层的" },
              { en: "sponge", zh: "海绵蛋糕" },
              { en: "buttercream", zh: "奶油霜" },
              { en: "bestseller", zh: "最畅销" },
            ],
            vocabNotes: {
              signature: {
                meaningInContext: "在这句话里表示：店家的招牌/代表作品",
                similarUsage: "类似用法：Our signature cocktail（我们的招牌鸡尾酒）",
              },
              sponge: {
                meaningInContext: "在这句话里表示：松软的海绵蛋糕体",
                similarUsage: "类似用法：chocolate sponge cake（巧克力海绵蛋糕）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Oh, that's our raspberry rose! It's vanilla cake with raspberry and rose buttercream. Super popular!",
                textZh: "那是我们的覆盆子玫瑰！香草蛋糕配覆盆子和玫瑰奶油霜。超级受欢迎！",
                actionHint: "可以试一块",
                frequency: "common",
              },
              {
                textEn: "That's our number one seller — raspberry rose cake. Everyone loves it!",
                textZh: "那是我们的销量冠军——覆盆子玫瑰蛋糕。人人都爱！",
                actionHint: "值得一试",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "That's our signature raspberry rose cake. It's vanilla sponge, raspberry jam, rose buttercream. Total bestseller.",
            formalityVariants: {
              casual:
                "That's our signature raspberry rose cake. Vanilla sponge, raspberry jam, rose buttercream. It's a huge seller.",
              standard:
                "That's our signature raspberry rose cake. It's layers of vanilla sponge with raspberry jam and rose-flavored buttercream. It's one of our bestsellers.",
              formal:
                "That is our signature raspberry rose cake, which consists of layers of vanilla sponge, raspberry jam, and rose-flavored buttercream. It is, in fact, one of our most popular items.",
            },
          },
          {
            speaker: "you",
            textEn: "That sounds lovely. How much is a slice? And can I also get a whole cake for a birthday?",
            textZh: "听起来不错。一块多少钱？另外，可以买整个蛋糕过生日吗？",
            casualVersion: "Sounds good. How much for a slice? And can I get a whole cake for a birthday too?",
            commonMistake: {
              wrong: "How much one slice?",
              correct: "How much is a slice?",
              explanation: "中式英语常省去be动词，或用“for”代替“is a”。",
            },
            formalityVariants: {
              casual: "Sounds good. How much is a slice? Can I get a whole cake for a birthday too?",
              standard: "That sounds lovely. How much is a slice? And can I also get a whole cake for a birthday?",
              formal:
                "That sounds quite delightful. Could you please inform me of the price per slice? Also, would it be possible to purchase an entire cake for a birthday celebration?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "A slice is $7.50. For a whole cake, we have 6-inch and 8-inch options — $38 and $52. If it's for a birthday, we can add a message on top for free!",
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
              {
                textEn:
                  "Slices are $7.50. Whole cakes start at $38 for 6-inch. We can write a birthday message for free!",
                textZh: "一块7.50美元。整个蛋糕6英寸起38美元。可以免费写生日祝语！",
                actionHint: "决定买一块还是整个",
                frequency: "common",
              },
              {
                textEn:
                  "It's $7.50 a slice. If you need a whole one, we do 6 and 8-inch — and personalization is free!",
                textZh: "一块7.50美元。要整个的话有6寸和8寸——而且定制文字免费！",
                actionHint: "选择尺寸和是否定制",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Slices are $7.50. Whole cakes? We got 6-inch and 8-inch options—$38 and $52. Birthday cake? Free message on top!",
            formalityVariants: {
              casual:
                "A slice is $7.50. For a whole cake, we've got 6-inch and 8-inch options—$38 and $52. Birthday? We'll add a message for free!",
              standard:
                "A slice is $7.50. For a whole cake, we have 6-inch and 8-inch options — $38 and $52. If it's for a birthday, we can add a message on top for free!",
              formal:
                "A single slice is priced at $7.50. For a full cake, we offer both 6-inch and 8-inch options, priced at $38 and $52 respectively. Should it be for a birthday, we are pleased to offer a complimentary personalized message on the cake.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take an 8-inch one for tomorrow. Can you write 'Happy Birthday Lily' on it?",
            textZh: "我要一个8英寸的，明天取。可以写'生日快乐Lily'吗？",
            casualVersion: "I'll get an 8-inch for tomorrow. Can you write 'Happy Birthday Lily' on it?",
            commonMistake: {
              wrong: "I want 8-inch one for tomorrow.",
              correct: "I'll take an 8-inch one for tomorrow.",
              explanation: '"I want" 听起来不礼貌，"I\'ll take" 或 "I\'d like" 更委婉。',
            },
            formalityVariants: {
              casual: "I'll get an 8-inch one for tomorrow. Can you write 'Happy Birthday Lily' on it?",
              standard: "I'll take an 8-inch one for tomorrow. Can you write 'Happy Birthday Lily' on it?",
              formal:
                "I would like to order an 8-inch cake for collection tomorrow. Would it be possible to inscribe 'Happy Birthday Lily' on the cake?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Absolutely! What time would you like to pick it up? We open at 8 AM.",
            textZh: "当然可以！您想几点来取？我们早上8点开门。",
            keyPhrases: [{ en: "pick it up", zh: "来取/自取" }],
            vocabNotes: {
              "pick it up": {
                meaningInContext: "在这句话里表示：到店来拿预定好的东西",
                similarUsage: "类似用法：I'll pick up my dry cleaning after work.（下班后去取干洗的衣服）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Sure thing! When do you need it by? We're open from 8.",
                textZh: "没问题！什么时候需要？我们8点开门。",
                actionHint: "告诉店员取蛋糕时间",
                frequency: "common",
              },
              {
                textEn: "No problem! Just let me know the pickup time. We open at 8 AM.",
                textZh: "没问题！告诉我取的时间就行。我们早上8点开门。",
                actionHint: "说出想取的时间",
                frequency: "occasional",
              },
            ],
            casualVersion: "Sure thing! What time d'you wanna pick it up? We open at 8 AM.",
            formalityVariants: {
              casual: "Sure! What time d'you wanna pick it up? We open at 8 AM.",
              standard: "Absolutely! What time would you like to pick it up? We open at 8 AM.",
              formal: "Certainly! At what time would you prefer to collect it? Our establishment opens at 8 AM.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Around 3 PM would be perfect. And for now, I'll have a slice of that raspberry cake and a croissant, please.",
            textZh: "下午3点左右最好。现在的话，我要一块覆盆子蛋糕和一个羊角面包。",
            casualVersion:
              "Around 3 PM's perfect. And for now, I'll take a slice of that raspberry cake and a croissant.",
            commonMistake: {
              wrong: "I want a slice of that raspberry cake and a croissant.",
              correct: "I'll have a slice of that raspberry cake and a croissant, please.",
              explanation: '用 "I\'ll have" 或 "I\'d like" 替代 "I want" 更自然有礼。',
            },
            formalityVariants: {
              casual: "3 PM works. For now, I'll grab a slice of that raspberry cake and a croissant.",
              standard:
                "Around 3 PM would be perfect. And for now, I'll have a slice of that raspberry cake and a croissant, please.",
              formal:
                "Approximately 3 PM would be most convenient. For my immediate purchase, I would like a slice of the raspberry cake and one croissant, please.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Great choice! Would you like the croissant plain or filled? We have chocolate, almond, and ham-and-cheese.",
            textZh: "选得好！羊角面包要原味的还是夹心的？有巧克力、杏仁和火腿芝士。",
            keyPhrases: [
              { en: "plain", zh: "原味的" },
              { en: "filled", zh: "有馅的/夹心的" },
              { en: "almond", zh: "杏仁" },
            ],
            alternativeExpressions: [
              {
                textEn: "We've got regular croissants and stuffed ones — chocolate or almond?",
                textZh: "我们有普通的和夹心的——巧克力还是杏仁？",
                actionHint: "选择口味即可",
                frequency: "common",
              },
            ],
            casualVersion: "Good choice! Plain croissant or filled? We got chocolate, almond, ham-and-cheese.",
            formalityVariants: {
              casual: "Good choice! Plain or filled croissant? We got chocolate, almond, ham-and-cheese.",
              standard:
                "Great choice! Would you like the croissant plain or filled? We have chocolate, almond, and ham-and-cheese.",
              formal:
                "An excellent selection! Do you prefer the croissant plain or filled? Our available fillings include chocolate, almond, and ham-and-cheese.",
            },
          },
          {
            speaker: "you",
            textEn: "Almond, please. Can I get everything to go?",
            textZh: "杏仁的。可以打包带走吗？",
            culturalNote: '"to go" 是美式说法，英式说 "takeaway"。法式面包房有时会用纸袋包装。',
            casualVersion: "Almond. Everything to go?",
            commonMistake: {
              wrong: "Can I take away?",
              correct: "Can I get everything to go?",
              explanation: '在美国，打包带走通常说 "to go"，"take away" 是英式用法。',
            },
            formalityVariants: {
              casual: "Almond. Everything to go?",
              standard: "Almond, please. Can I get everything to go?",
              formal: "The almond, please. Might I request that all items be prepared for takeout?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Of course! That'll be $12.50 for today, and I'll put you down for the 8-inch raspberry rose for 3 PM tomorrow. We'll need a deposit of $20.",
            textZh: "当然！今天一共12.50美元，我帮您登记明天下午3点取8英寸覆盆子玫瑰蛋糕。需要20美元定金。",
            keyPhrases: [
              { en: "put you down for", zh: "帮您登记" },
              { en: "deposit", zh: "定金" },
            ],
            vocabNotes: {
              deposit: {
                meaningInContext: "在这句话里表示：预付的定金，取蛋糕时付余款",
                similarUsage: "类似用法：We require a $100 deposit for catering orders.（外卖订单需要100美元定金）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Today's total is $12.50. For tomorrow's cake, I just need $20 down and you pay the rest at pickup.",
                textZh: "今天一共12.50美元。明天的蛋糕先付20美元定金，取的时候付余款。",
                actionHint: "付今天的和定金",
                frequency: "common",
              },
              {
                textEn:
                  "That's $12.50 now, plus a $20 deposit for the birthday cake. You're all set for 3 PM tomorrow!",
                textZh: "现在付12.50美元，加上生日蛋糕20美元定金。明天下午3点来取！",
                actionHint: "记住明天来取",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep! $12.50 for today. And you're down for the 8-inch raspberry rose tomorrow at 3 PM. Need a $20 deposit.",
            formalityVariants: {
              casual:
                "Yep! $12.50 today. And you're all set for the 8-inch raspberry rose tomorrow at 3 PM. Just need a $20 deposit.",
              standard:
                "Of course! That'll be $12.50 for today, and I'll put you down for the 8-inch raspberry rose for 3 PM tomorrow. We'll need a deposit of $20.",
              formal:
                "Certainly! Your total for today's purchases will be $12.50. I have recorded your order for the 8-inch raspberry rose cake for collection tomorrow at 3 PM. A deposit of $20 will be required.",
            },
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
            culturalNote: "美国对过敏信息非常重视，直接说明即可。",
            casualVersion: "Hey, lookin' for somethin' sweet, but I got a nut allergy. What do you recommend?",
            commonMistake: {
              wrong: "I want to buy something sweet but I have nut allergy.",
              correct: "I'm looking for something sweet, but I have a nut allergy.",
              explanation: "“I want to buy”听起来生硬。表达“过敏”时，allergy前加“a”。",
            },
            formalityVariants: {
              casual: "Hey, lookin' for somethin' sweet, but I got a nut allergy. Any recommendations?",
              standard: "Hi, I'm looking for something sweet, but I have a nut allergy. What would you recommend?",
              formal:
                "Good morning/afternoon. I'm seeking a dessert item; however, I must inform you that I have a severe nut allergy. Could you kindly offer some suitable recommendations?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Good to know — we take allergies very seriously. Let me point out the nut-free options. The lemon tart, the fruit Danish, and the vanilla eclair are all made in our nut-free section.",
            textZh:
              "感谢告知——我们非常重视过敏问题。我来给您指出无坚果的选项。柠檬挞、水果丹麦酥和香草闪电泡芙都是在无坚果区域制作的。",
            keyPhrases: [
              { en: "take allergies seriously", zh: "重视过敏问题" },
              { en: "nut-free", zh: "无坚果的" },
              { en: "lemon tart", zh: "柠檬挞" },
              { en: "Danish", zh: "丹麦酥" },
              { en: "eclair", zh: "闪电泡芙" },
            ],
            vocabNotes: {
              eclair: {
                meaningInContext: "在这句话里表示：法式闪电泡芙，长条形中间夹奶油的甜点",
                similarUsage: "类似用法：chocolate eclair（巧克力闪电泡芙）",
              },
            },
            culturalNote: "欧美面包房通常会严格标注过敏原信息，有些店甚至有独立的无过敏原制作区域。",
            alternativeExpressions: [
              {
                textEn:
                  "Thanks for telling me! We have a dedicated nut-free area. The lemon tart and eclair are safe options.",
                textZh: "谢谢告知！我们有专门的无坚果区。柠檬挞和闪电泡芙都是安全的选择。",
                actionHint: "从无坚果的选项中挑选",
                frequency: "common",
              },
              {
                textEn:
                  "We're very careful with allergies here. Let me show you what's nut-free — we've got a few great options.",
                textZh: "我们对过敏非常谨慎。让我给您看看无坚果的——有几个很不错的选择。",
                actionHint: "让店员指出来",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Good to know – yeah, we're super serious about allergies. Let me show ya the nut-free stuff. Lemon tart, fruit Danish, vanilla eclair—all made in our nut-free area.",
            formalityVariants: {
              casual:
                "Got it – we're really careful with allergies. Here are the nut-free options: lemon tart, fruit Danish, vanilla eclair. All from our nut-free spot.",
              standard:
                "Good to know — we take allergies very seriously. Let me point out the nut-free options. The lemon tart, the fruit Danish, and the vanilla eclair are all made in our nut-free section.",
              formal:
                "Thank you for informing us. We maintain stringent protocols regarding food allergies. Allow me to guide you through our selection of nut-free items. Specifically, the lemon tart, the fruit Danish, and the vanilla eclair are prepared in a dedicated nut-free environment.",
            },
          },
          {
            speaker: "you",
            textEn: "The lemon tart looks good. Is it very sweet? I prefer things that aren't too sugary.",
            textZh: "柠檬挞看起来不错。很甜吗？我不太喜欢太甜的。",
            casualVersion: "Lemon tart looks good. Is it super sweet? I don't really like stuff that's too sugary.",
            commonMistake: {
              wrong: "Is it very sweet? I don't like too sweet.",
              correct: "Is it very sweet? I prefer things that aren't too sugary.",
              explanation: "表达“不喜欢太甜的”时，需要有承接词，如“things that are”。",
            },
            formalityVariants: {
              casual: "Lemon tart looks good. Super sweet? I'm not big on overly sugary stuff.",
              standard: "The lemon tart looks good. Is it very sweet? I prefer things that aren't too sugary.",
              formal:
                "The lemon tart appears quite appealing. Could you please describe its sweetness level? I typically favor less saccharine options.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "It's actually one of our more tart options — the lemon curd gives it a nice tangy flavor. If you want something even less sweet, we also have a dark chocolate mousse that's low-sugar.",
            textZh:
              "其实这是我们比较酸的选项之一——柠檬凝乳带来清爽的酸味。如果想要更不甜的，我们还有低糖的黑巧克力慕斯。",
            keyPhrases: [
              { en: "tart", zh: "酸的" },
              { en: "lemon curd", zh: "柠檬凝乳" },
              { en: "tangy", zh: "酸爽的" },
              { en: "mousse", zh: "慕斯" },
              { en: "low-sugar", zh: "低糖" },
            ],
            vocabNotes: {
              tart: {
                meaningInContext:
                  "在这句话里表示：味道偏酸的（注意：和lemon tart的tart是同一个词但意思不同，这里是形容词'酸的'）",
                similarUsage: "类似用法：Granny Smith apples are quite tart.（青苹果很酸）",
              },
            },
            literalMeaning: '"tart" 作名词是挞/派，作形容词是酸的。同一句话里两种用法都出现了。',
            alternativeExpressions: [
              {
                textEn:
                  "Not too sweet at all — it's more on the tangy side. The dark chocolate mousse is even less sweet if you prefer.",
                textZh: "一点都不太甜——偏酸爽。如果你喜欢更不甜的，黑巧慕斯甜度更低。",
                actionHint: "根据口味选择",
                frequency: "common",
              },
              {
                textEn: "The lemon tart is actually pretty zesty. For really low sugar, try our dark chocolate mousse.",
                textZh: "柠檬挞其实挺清新的。想要真正低糖的话，试试我们的黑巧慕斯。",
                actionHint: "两个都可以尝试",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Actually, it's one of our tarter ones – the lemon curd gives it a nice tangy kick. If you want somethin' even less sweet, we got a low-sugar dark chocolate mousse too.",
            formalityVariants: {
              casual:
                "Nah, it's actually pretty tart – that lemon curd gives it a good tang. Want something even less sweet? We've got a low-sugar dark choc mousse too.",
              standard:
                "It's actually one of our more tart options — the lemon curd gives it a nice tangy flavor. If you want something even less sweet, we also have a dark chocolate mousse that's low-sugar.",
              formal:
                "That particular item is among our more piquant selections; the lemon curd imparts a delightful tangy characteristic. Should you desire an option with even less sweetness, we furthermore offer a dark chocolate mousse that is specifically formulated as low-sugar.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'll try the lemon tart and the dark chocolate mousse. Do you have any sugar-free options by any chance?",
            textZh: "我要一个柠檬挞和一个黑巧慕斯。顺便问一下，有无糖的选项吗？",
            casualVersion: "I'll grab the lemon tart and the dark choc mousse. Any sugar-free options, by any chance?",
            commonMistake: {
              wrong: "I will take lemon tart and dark chocolate mousse. Do you have sugar free?",
              correct:
                "I'll try the lemon tart and the dark chocolate mousse. Do you have any sugar-free options by any chance?",
              explanation:
                '点餐时“take”听起来很直接，用“I\'ll try/have”更自然。表达无糖时，"sugar-free options"是完整说法。',
            },
            formalityVariants: {
              casual: "I'll take the lemon tart and the dark choc mousse. Got anything sugar-free?",
              standard:
                "I'll try the lemon tart and the dark chocolate mousse. Do you have any sugar-free options by any chance?",
              formal:
                "I would like to order the lemon tart and the dark chocolate mousse. I was also wondering if you happen to offer any entirely sugar-free selections?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "We do! We have a sugar-free cheesecake made with stevia. It's in the case on the right — it tastes surprisingly close to the regular version.",
            textZh: "有的！我们有用甜菊糖做的无糖芝士蛋糕。在右边的展示柜里——味道和普通版的非常接近。",
            keyPhrases: [
              { en: "sugar-free", zh: "无糖" },
              { en: "stevia", zh: "甜菊糖" },
              { en: "surprisingly close", zh: "出奇地接近" },
            ],
            alternativeExpressions: [
              {
                textEn: "We've got a couple of diabetic-friendly desserts in the low-sugar section.",
                textZh: "我们低糖区有几款适合糖尿病患者的甜点。",
                actionHint: "去低糖区看看",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah! We got a sugar-free cheesecake, made with stevia. It's right there in the case on the right — tastes surprisingly like the regular one.",
            formalityVariants: {
              casual:
                "Yep! Got a sugar-free cheesecake, stevia. It's in the case on the right, tastes super close to the regular.",
              standard:
                "We do! We have a sugar-free cheesecake made with stevia. It's in the case on the right — it tastes surprisingly close to the regular version.",
              formal:
                "Indeed we do! We offer a sugar-free cheesecake prepared with stevia, located in the display case to your right. Its flavor profile is remarkably similar to our standard cheesecake.",
            },
          },
          {
            speaker: "you",
            textEn: "That's great for my friend who's diabetic. I'll add one of those too. Can I pay with Apple Pay?",
            textZh: "太好了，我朋友有糖尿病正好可以买。再加一个。可以用Apple Pay付款吗？",
            casualVersion:
              "Oh, that's perfect for my friend who's diabetic. I'll add one of those. Can I pay with Apple Pay?",
            commonMistake: {
              wrong: "That's good for my friend has diabetic. I'll add one. Can I use Apple Pay?",
              correct:
                "That's great for my friend who's diabetic. I'll add one of those too. Can I pay with Apple Pay?",
              explanation:
                "表达“患有糖尿病”是“who is diabetic”或“who has diabetes”。“用Apple Pay支付”常用“pay with Apple Pay”。",
            },
            formalityVariants: {
              casual: "Perfect for my diabetic friend. I'll get one of those too. Apple Pay okay?",
              standard:
                "That's great for my friend who's diabetic. I'll add one of those too. Can I pay with Apple Pay?",
              formal:
                "That would be most suitable for my friend, who is diabetic. I shall include one of those as well. Is it possible to remit payment using Apple Pay?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Yes, we accept Apple Pay, Google Pay, and all major credit cards. Just tap here on the reader. Your total is $23.75.",
            textZh: "可以，我们接受Apple Pay、Google Pay和所有主流信用卡。在读卡器上刷一下就行。一共23.75美元。",
            keyPhrases: [
              { en: "tap", zh: "轻触/刷" },
              { en: "reader", zh: "读卡器" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure! Tap, insert, or swipe — whatever works. That'll be $23.75.",
                textZh: "当然！感应、插卡或刷卡都行。一共23.75美元。",
                actionHint: "在读卡器上操作",
                frequency: "common",
              },
              {
                textEn: "We take all major cards and mobile pay. $23.75 — just tap right here.",
                textZh: "我们接受所有主流卡和手机支付。23.75美元——在这里刷一下。",
                actionHint: "拿出手机或卡支付",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep, we take Apple Pay, Google Pay, all major credit cards. Just tap it here. Total's $23.75.",
            formalityVariants: {
              casual: "Yeah, Apple Pay, Google Pay, all major cards. Just tap. $23.75 total.",
              standard:
                "Yes, we accept Apple Pay, Google Pay, and all major credit cards. Just tap here on the reader. Your total is $23.75.",
              formal:
                "Certainly, we accommodate Apple Pay, Google Pay, and all prominent credit card providers. Kindly proceed by tapping your device on the reader located here. Your grand total amounts to $23.75.",
            },
          },
          {
            speaker: "you",
            textEn: "Done! Could I get the cheesecake boxed separately? It's a gift.",
            textZh: "好了！芝士蛋糕可以单独装盒吗？是送人的。",
            casualVersion: "Done! Can I get the cheesecake separate? It's a gift.",
            commonMistake: {
              wrong: "Finished! Cheesecake separate box? It's gift.",
              correct: "Done! Could I get the cheesecake boxed separately? It's a gift.",
              explanation: "口语中说“好了”用“Done”。请求帮助时用“Can/Could I get...”。",
            },
            formalityVariants: {
              casual: "Alright! Can I get the cheesecake in its own box? It's for someone.",
              standard: "Done! Could I get the cheesecake boxed separately? It's a gift.",
              formal:
                "Excellent! Would it be possible to have the cheesecake individually packaged? It is intended as a present.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Of course! I'll put it in one of our gift boxes with a ribbon. Would you like a little card with it?",
            textZh: "当然！我帮你放进礼盒，系上丝带。需要附一张小卡片吗？",
            keyPhrases: [
              { en: "gift box", zh: "礼盒" },
              { en: "ribbon", zh: "丝带" },
            ],
            culturalNote: "很多欧美甜品店提供精美的礼盒包装服务，有些是免费的，有些会收少量费用。",
            alternativeExpressions: [
              {
                textEn: "Sure! I'll box it up nicely with a bow. Want a card to go with it?",
                textZh: "好的！我给包装漂亮一点，系个蝴蝶结。要配一张卡片吗？",
                actionHint: "决定是否要卡片",
                frequency: "common",
              },
              {
                textEn: "Happy to! We have lovely gift packaging. Shall I add a message card?",
                textZh: "乐意效劳！我们有精美的礼品包装。要附一张留言卡吗？",
                actionHint: "可以写祝福语",
                frequency: "occasional",
              },
            ],
            casualVersion: "Totally! I'll put it in a gift box with a ribbon. Want a little card with it?",
            formalityVariants: {
              casual: "Sure thing! I'll box it up with a ribbon. Need a card?",
              standard:
                "Of course! I'll put it in one of our gift boxes with a ribbon. Would you like a little card with it?",
              formal:
                "Certainly! I shall place it within one of our distinctive gift boxes, complete with a decorative ribbon. May I inquire if you would also appreciate an accompanying small card?",
            },
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
            casualVersion: "Morning! Need some bread for the week. What's popular?",
            commonMistake: {
              wrong: "I need some bread for the week.",
              correct: "I'd like some bread for the week.",
              explanation: '直接说 "I need" 在英文中听起来会比较生硬，"I\'d like" 更委婉礼貌。',
            },
            formalityVariants: {
              casual: "Morning! Need some bread for the week. What's popular?",
              standard: "Good morning! I'd like to get some bread for the week. What are your most popular loaves?",
              formal:
                "Good morning. I'm looking to purchase some bread for the week. Could you please inform me of your most popular varieties?",
            },
          },
          {
            speaker: "them",
            role: "面包师",
            textEn:
              "Our sourdough is the most popular — we make it fresh every day using a 100-year-old starter. The whole wheat and the olive ciabatta are also really popular.",
            textZh: "我们的酸面团面包最受欢迎——用百年老酵母每天新鲜制作。全麦面包和橄榄夏巴塔也很受欢迎。",
            keyPhrases: [
              { en: "sourdough", zh: "酸面团面包" },
              { en: "starter", zh: "酵母/发酵种" },
              { en: "whole wheat", zh: "全麦" },
              { en: "ciabatta", zh: "夏巴塔/意式拖鞋面包" },
            ],
            vocabNotes: {
              starter: {
                meaningInContext: "在这句话里表示：天然发酵的老面种，用来发酵面包的",
                similarUsage: "类似用法：Our starter is over 50 years old.（我们的酵母有50多年了）",
              },
              sourdough: {
                meaningInContext: "在这句话里表示：用天然酵母长时间发酵的面包，有微酸口感",
                similarUsage: "类似用法：sourdough pancakes（酸面团煎饼）",
              },
            },
            culturalNote: "美国很多手工面包房以酵母的年份为卖点——有些'starter'真的有上百年历史，代代相传。",
            alternativeExpressions: [
              {
                textEn:
                  "The sourdough flies off the shelves — it's our pride and joy. Whole wheat and ciabatta are also big sellers.",
                textZh: "酸面团面包卖得飞快——是我们的招牌。全麦和夏巴塔也很畅销。",
                actionHint: "选一种试试",
                frequency: "common",
              },
              {
                textEn:
                  "Everyone loves our sourdough! We bake it fresh daily. The whole wheat is also excellent for everyday use.",
                textZh: "大家都爱我们的酸面团面包！每天新鲜烤制。全麦面包日常吃也很棒。",
                actionHint: "可以两种都买",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Sourdough's our most popular — fresh daily with a 100-year-old starter. Whole wheat and olive ciabatta are big hits too.",
            formalityVariants: {
              casual:
                "Sourdough's our most popular — fresh daily with a 100-year-old starter. Whole wheat and olive ciabatta are big hits too.",
              standard:
                "Our sourdough is the most popular — we make it fresh every day using a 100-year-old starter. The whole wheat and the olive ciabatta are also really popular.",
              formal:
                "Our sourdough is our most highly sought-after item, crafted fresh daily from a century-old starter. The whole wheat and olive ciabatta selections are also exceptionally well-received.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take a sourdough loaf. What bread would you recommend for sandwiches?",
            textZh: "我要一个酸面团面包。做三明治你推荐什么面包？",
            commonMistake: {
              wrong: "What bread you recommend for sandwiches?",
              correct: "What bread do you recommend for sandwiches?",
              explanation: "中文思维容易省略动词'do'，英文中疑问句语序需要动词'do'。",
            },
            casualVersion: "I'll grab a sourdough. What's good for sandwiches?",
            formalityVariants: {
              casual: "I'll grab a sourdough. What's good for sandwiches?",
              standard: "I'll take a sourdough loaf. What bread would you recommend for sandwiches?",
              formal:
                "I will take a sourdough loaf, please. Regarding sandwiches, which bread varieties would you recommend?",
            },
          },
          {
            speaker: "them",
            role: "面包师",
            textEn:
              "For sandwiches, our multigrain or the French baguette sliced lengthwise work great. The ciabatta is also perfect for panini if you have a press at home.",
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
              {
                textEn: "The multigrain is great for sandwiches. Or grab a baguette and slice it — makes awesome subs.",
                textZh: "杂粮面包做三明治很好。或者买根法棍切开——做潜艇三明治特别棒。",
                actionHint: "选适合三明治的面包",
                frequency: "common",
              },
              {
                textEn: "I'd go with the multigrain for everyday sandwiches. The ciabatta makes killer paninis too.",
                textZh: "日常三明治我推荐杂粮面包。夏巴塔做帕尼尼也是一绝。",
                actionHint: "看自己需求选择",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "For sandwiches, our multigrain or a lengthwise-sliced baguette are awesome. Ciabatta's also perfect for panini if you got a press.",
            formalityVariants: {
              casual:
                "For sandwiches, our multigrain or a lengthwise-sliced baguette are awesome. Ciabatta's also perfect for panini if you got a press.",
              standard:
                "For sandwiches, our multigrain or the French baguette sliced lengthwise work great. The ciabatta is also perfect for panini if you have a press at home.",
              formal:
                "For sandwich applications, our multigrain or a French baguette sliced lengthwise are highly suitable. Furthermore, the ciabatta proves excellent for panini, particularly if you possess a press at home.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take a multigrain loaf too. Can you slice it for me?",
            textZh: "我也要一个杂粮面包。可以帮我切片吗？",
            commonMistake: {
              wrong: "Can you help me slice it?",
              correct: "Can you slice it for me?",
              explanation: "英文中'help'后直接跟动词，或用'for me'更自然。",
            },
            casualVersion: "I'll take a multigrain too. Can you slice it?",
            formalityVariants: {
              casual: "I'll take a multigrain too. Can you slice it?",
              standard: "I'll take a multigrain loaf too. Can you slice it for me?",
              formal: "I would also like a multigrain loaf. Would it be possible for you to slice it for me, please?",
            },
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
              {
                textEn: "Of course! How thick — thin for toast or regular for sandwiches? Want me to bag it?",
                textZh: "当然！要多厚——烤面包用的薄片还是做三明治的普通厚度？要袋子吗？",
                actionHint: "选厚度和包装",
                frequency: "common",
              },
              {
                textEn: "Happy to slice it! Sandwich thickness or thinner? I'll bag it to keep it fresh.",
                textZh: "乐意帮您切！三明治厚度还是更薄？我用袋子装好保鲜。",
                actionHint: "说出偏好的厚度",
                frequency: "occasional",
              },
            ],
            casualVersion: "Sure! Thin or regular slices? Bag it to keep it fresh?",
            formalityVariants: {
              casual: "Sure! Thin or regular slices? Bag it to keep it fresh?",
              standard: "Sure! Thin slices or regular? And would you like it in a bag to keep it fresh?",
              formal:
                "Certainly. Do you prefer thin or regular slices? And would you care for it to be placed in a bag to maintain its freshness?",
            },
          },
          {
            speaker: "you",
            textEn: "Regular slices, please. And yes, a bag would be great. How long will it stay fresh?",
            textZh: "普通厚度。好的，装袋吧。能保鲜多久？",
            commonMistake: {
              wrong: "How long it will keep fresh?",
              correct: "How long will it stay fresh?",
              explanation: "中文句式省略'will'，英文疑问句语序需要倒装。",
            },
            casualVersion: "Regular, please. Yeah, a bag's good. How long's it stay fresh?",
            formalityVariants: {
              casual: "Regular, please. Yeah, a bag's good. How long's it stay fresh?",
              standard: "Regular slices, please. And yes, a bag would be great. How long will it stay fresh?",
              formal:
                "Regular slices, please. Yes, placing it in a bag would be appreciated. What is the approximate shelf life for optimal freshness?",
            },
          },
          {
            speaker: "them",
            role: "面包师",
            textEn:
              "The sourdough keeps well for about 3-4 days at room temperature, or you can freeze it for up to a month. The multigrain is best within 2-3 days. Pro tip: if you freeze slices individually, you can just toast them straight from the freezer.",
            textZh:
              "酸面团面包室温下可以保存3-4天，冷冻的话一个月没问题。杂粮面包最好2-3天内吃完。小建议：如果把面包片单独冷冻，直接从冷冻柜拿出来烤就行。",
            keyPhrases: [
              { en: "room temperature", zh: "室温" },
              { en: "freeze", zh: "冷冻" },
              { en: "toast", zh: "烤" },
              { en: "straight from the freezer", zh: "直接从冷冻柜" },
            ],
            vocabNotes: {
              toast: {
                meaningInContext: "在这句话里表示：把面包放进烤面包机加热烤脆",
                similarUsage: "类似用法：I'll just toast a bagel for breakfast.（早餐烤个百吉饼）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "It'll last a few days on the counter. After that, just pop it in the freezer.",
                textZh: "放台面上能放几天。之后就放冷冻柜。",
                actionHint: "了解保存方法",
                frequency: "common",
              },
            ],
            casualVersion:
              "Sourdough's good for 3-4 days at room temp, or freeze it for up to a month. Multigrain's best within 2-3. Pro tip: freeze slices separately, then just toast 'em right from the freezer.",
            culturalNote: "“Pro tip” 是常见的口语表达，表示“内行建议”或“小窍门”。",
            formalityVariants: {
              casual:
                "Sourdough's good for 3-4 days at room temp, or freeze it for up to a month. Multigrain's best within 2-3. Pro tip: freeze slices separately, then just toast 'em right from the freezer.",
              standard:
                "The sourdough keeps well for about 3-4 days at room temperature, or you can freeze it for up to a month. The multigrain is best within 2-3 days. Pro tip: if you freeze slices individually, you can just toast them straight from the freezer.",
              formal:
                "The sourdough will maintain its quality for approximately three to four days at room temperature; alternatively, it may be frozen for up to one month. The multigrain is optimally consumed within two to three days. As a professional recommendation, should you freeze the slices individually, they can be toasted directly from their frozen state.",
            },
          },
          {
            speaker: "you",
            textEn: "Great advice! One last thing — do you have any gluten-free bread?",
            textZh: "好建议！最后一个问题——有无麸质面包吗？",
            casualVersion: "Good to know! Last question — got any gluten-free bread?",
            commonMistake: {
              wrong: "Is there gluten-free bread?",
              correct: "Do you have any gluten-free bread?",
              explanation: '问商店是否有某物，用 "Do you have..." 更地道自然。',
            },
            formalityVariants: {
              casual: "Good to know! Last question — got any gluten-free bread?",
              standard: "Great advice! One last thing — do you have any gluten-free bread?",
              formal:
                "That is excellent advice, thank you. One final inquiry, do you offer any gluten-free bread options?",
            },
          },
          {
            speaker: "them",
            role: "面包师",
            textEn:
              "We do! Our gluten-free loaf is made with rice flour and tapioca starch. It's right over here. Fair warning — it's a bit denser than regular bread, but the flavor is great, especially when toasted.",
            textZh:
              "有的！我们的无麸质面包是用米粉和木薯淀粉做的。就在这边。提醒一下——比普通面包稍微紧实一些，但味道很好，烤过之后尤其好吃。",
            keyPhrases: [
              { en: "rice flour", zh: "米粉" },
              { en: "tapioca starch", zh: "木薯淀粉" },
              { en: "denser", zh: "更紧实" },
              { en: "fair warning", zh: "提前说明/提醒一下" },
            ],
            vocabNotes: {
              "fair warning": {
                meaningInContext: "在这句话里表示：提前友好地告知一些可能不符合预期的信息",
                similarUsage:
                  "类似用法：Fair warning, the parking lot gets full quickly.（提醒一下，停车场很快就满了）",
              },
            },
            culturalMeaning: '店员说 "fair warning" 不是在警告你，而是友善地提前管理你的期望，让你不会失望。',
            alternativeExpressions: [
              {
                textEn:
                  "Yes! It's made with rice flour — a little heavier than regular bread, but really tasty toasted.",
                textZh: "有的！用米粉做的——比普通面包稍重一些，但烤了特别好吃。",
                actionHint: "可以买一个试试",
                frequency: "common",
              },
              {
                textEn: "We've got a GF loaf right here. It's denser but the taste is spot-on, especially warm.",
                textZh: "我们这边有无麸质面包。口感紧实一些但味道很好，热的时候尤其好吃。",
                actionHint: "建议回家烤一下再吃",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep! Our gluten-free loaf's rice flour and tapioca starch. It's right here. Just a heads up — it's kinda dense, but tastes great, especially toasted.",
            culturalNote: "“Fair warning” 或 “Heads up” 是很地道的口语，表示提前提醒。",
            formalityVariants: {
              casual:
                "Yep! Our gluten-free loaf's rice flour and tapioca starch. It's right here. Just a heads up — it's kinda dense, but tastes great, especially toasted.",
              standard:
                "We do! Our gluten-free loaf is made with rice flour and tapioca starch. It's right over here. Fair warning — it's a bit denser than regular bread, but the flavor is great, especially when toasted.",
              formal:
                "Yes, we certainly do. Our gluten-free loaf is crafted from rice flour and tapioca starch; it is located just over here. Please be advised that it possesses a slightly denser texture than conventional bread, though its flavor is excellent, particularly when toasted.",
            },
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
            textEn:
              "Good evening! Welcome to Black Angus. Here are your menus. Can I start you off with something to drink?",
            textZh: "晚上好！欢迎来到黑安格斯牛排馆。这是菜单。先来点喝的？",
            keyPhrases: [{ en: "start you off with", zh: "先来点" }],
            alternativeExpressions: [
              {
                textEn: "Evening, folks. What can I get you to drink?",
                textZh: "晚上好。喝点什么？",
                actionHint: "先点饮品",
                frequency: "common",
              },
              {
                textEn: "Hi there! Would you like to see our cocktail menu first?",
                textZh: "您好！要先看看鸡尾酒菜单吗？",
                actionHint: "可以先看酒单",
                frequency: "occasional",
              },
            ],
            casualVersion: "Hey! Welcome to Black Angus. Menus are here. Can I get you guys somethin' to drink?",
            formalityVariants: {
              casual: "Hey! Welcome to Black Angus. Menus. Drinks to start?",
              standard:
                "Good evening! Welcome to Black Angus. Here are your menus. Can I start you off with something to drink?",
              formal:
                "Good evening, and welcome to Black Angus Steakhouse. Please allow me to present your menus. May I inquire if you would care for any beverages to begin your dining experience?",
            },
          },
          {
            speaker: "you",
            textEn: "Just water for now, thanks. We'd like to order. What cuts of steak do you have?",
            textZh: "先来杯水就好，谢谢。我们想点餐。你们有哪些部位的牛排？",
            casualVersion: "Just water for now, thanks. Ready to order. What cuts do you have?",
            commonMistake: {
              wrong: "I want to order.",
              correct: "We'd like to order.",
              explanation: "“I want” 听起来比较生硬，用 “We'd like” 更礼貌且常用。",
            },
            formalityVariants: {
              casual: "Just water for now, thanks. Ready to order. What cuts you got?",
              standard: "Just water for now, thanks. We'd like to order. What cuts of steak do you have?",
              formal:
                "We'll just have water for the moment, thank you. We are ready to place our order. Could you please elaborate on the available steak cuts?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "We have ribeye, New York strip, filet mignon, and our signature 24-ounce porterhouse for two. All our beef is USDA Prime, dry-aged for 28 days.",
            textZh:
              "我们有肋眼、纽约客、菲力牛排，还有招牌24盎司的双人红屋牛排。所有牛肉都是USDA Prime级别，干式熟成28天。",
            keyPhrases: [
              { en: "ribeye", zh: "肋眼" },
              { en: "New York strip", zh: "纽约客" },
              { en: "filet mignon", zh: "菲力牛排" },
              { en: "porterhouse", zh: "红屋/丁骨牛排" },
              { en: "dry-aged", zh: "干式熟成" },
              { en: "USDA Prime", zh: "美国农业部最高等级" },
            ],
            vocabNotes: {
              "dry-aged": {
                meaningInContext: "在这句话里表示：牛肉在特定温度和湿度下放置数周，让肉质更嫩、风味更浓",
                similarUsage: "类似用法：Our steaks are wet-aged for tenderness.（我们的牛排是湿式熟成的）",
              },
              "USDA Prime": {
                meaningInContext: "在这句话里表示：美国农业部最高等级的牛肉评级，脂肪纹理最丰富",
                similarUsage: "类似用法：USDA Choice is the second-highest grade.（USDA Choice是第二高等级）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "We've got ribeye, strip, filet, and a 24-oz porterhouse to share. Everything's Prime and dry-aged.",
                textZh: "我们有肋眼、纽约客、菲力，还有24盎司可以分享的红屋牛排。全部Prime级，干式熟成。",
                actionHint: "选择你喜欢的部位",
                frequency: "common",
              },
              {
                textEn: "Tonight we have four cuts — all USDA Prime, aged 28 days. The porterhouse is great for two.",
                textZh: "今晚有四种部位——全部USDA Prime级，熟成28天。红屋牛排适合两人分享。",
                actionHint: "问问推荐哪一款",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Got ribeye, New York strip, filet mignon, and our big 24-ounce porterhouse for two. All USDA Prime, dry-aged 28 days.",
            formalityVariants: {
              casual:
                "We've got ribeye, New York strip, filet, and our 24oz porterhouse for two. All USDA Prime, 28-day dry-aged.",
              standard:
                "We have ribeye, New York strip, filet mignon, and our signature 24-ounce porterhouse for two. All our beef is USDA Prime, dry-aged for 28 days.",
              formal:
                "Our selection includes the Ribeye, New York Strip, Filet Mignon, and our distinguished 24-ounce Porterhouse, designed for two. All our beef is certified USDA Prime and has undergone a 28-day dry-aging process.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll have the ribeye. How would you like that cooked — I mean, what do you recommend?",
            textZh: "我要肋眼。你推荐几分熟？",
            casualVersion: "I'll get the ribeye. Uh, what do *you* recommend for the doneness?",
            commonMistake: {
              wrong: "How cooked you recommend?",
              correct: "What do you recommend for doneness?",
              explanation: "询问推荐时，需要完整的句子，或直接问“What do you recommend?”。",
            },
            formalityVariants: {
              casual: "Ribeye for me. What do you recommend for doneness?",
              standard: "I'll have the ribeye. How would you like that cooked — I mean, what do you recommend?",
              formal:
                "I shall choose the ribeye. Regarding the preparation, what level of doneness would you personally recommend?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "For a ribeye, I'd recommend medium-rare — that's a warm red center. It really brings out the marbling. But we can do anything from rare to well-done.",
            textZh: "肋眼的话我推荐三分熟——中间是温热的红色。这样最能体现大理石纹。不过从一分到全熟都可以做。",
            keyPhrases: [
              { en: "medium-rare", zh: "三分熟" },
              { en: "warm red center", zh: "中间温热红色" },
              { en: "marbling", zh: "大理石纹/油花" },
              { en: "rare", zh: "一分熟" },
              { en: "well-done", zh: "全熟" },
            ],
            vocabNotes: {
              marbling: {
                meaningInContext: "在这句话里表示：牛肉中像大理石纹路的脂肪花纹，是好牛排的标志",
                similarUsage: "类似用法：Japanese Wagyu has incredible marbling.（日本和牛的油花非常丰富）",
              },
            },
            culturalNote:
              "美国牛排馆的熟度从生到熟：rare（一分）→ medium-rare（三分）→ medium（五分）→ medium-well（七分）→ well-done（全熟）。多数牛排行家推荐medium-rare。",
            alternativeExpressions: [
              {
                textEn:
                  "Medium-rare is the way to go with a ribeye — keeps it juicy and flavorful. But we'll cook it however you like.",
                textZh: "肋眼三分熟最好——保持多汁和风味。不过您想要几分熟都行。",
                actionHint: "选你喜欢的熟度",
                frequency: "common",
              },
              {
                textEn: "I'd say medium-rare to really enjoy the fat marbling. Of course, it's totally up to you.",
                textZh: "我建议三分熟，这样最能享受油花。当然，完全看您喜好。",
                actionHint: "告诉服务员你的偏好",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Ribeye, I'd say medium-rare—warm red center. Really shows off the marbling. But yeah, we can do anything from rare to well-done.",
            formalityVariants: {
              casual:
                "Medium-rare's best for ribeye — warm red center. Shows the marbling. But we do rare to well-done.",
              standard:
                "For a ribeye, I'd recommend medium-rare — that's a warm red center. It really brings out the marbling. But we can do anything from rare to well-done.",
              formal:
                "For a Ribeye, my recommendation would be medium-rare, characterized by a warm, red center. This preparation best accentuates the marbling. However, we are capable of accommodating any preference, from rare to well-done.",
            },
          },
          {
            speaker: "you",
            textEn: "Medium-rare sounds perfect. What sides come with it?",
            textZh: "三分熟好。配什么配菜？",
            casualVersion: "Medium-rare sounds great. What sides come with it?",
            commonMistake: {
              wrong: "What sides have?",
              correct: "What sides come with it?",
              explanation: "询问附带的配菜时，用 'come with' 是最自然地道的表达。",
            },
            formalityVariants: {
              casual: "Medium-rare's good. What sides you got?",
              standard: "Medium-rare sounds perfect. What sides come with it?",
              formal:
                "Medium-rare sounds absolutely perfect. What accompanying side dishes are included with this entrée?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Each steak comes with your choice of one side. We have baked potato, garlic mashed potatoes, creamed spinach, grilled asparagus, or Caesar salad. Additional sides are $8 each.",
            textZh: "每份牛排搭配一道配菜。有烤土豆、蒜香土豆泥、奶油菠菜、烤芦笋或凯撒沙拉。加配菜每份8美元。",
            keyPhrases: [
              { en: "your choice of", zh: "您选择的" },
              { en: "baked potato", zh: "烤土豆" },
              { en: "mashed potatoes", zh: "土豆泥" },
              { en: "creamed spinach", zh: "奶油菠菜" },
              { en: "additional sides", zh: "额外配菜" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You get one side with your steak — mashed potatoes, baked potato, spinach, asparagus, or Caesar. Extra sides are $8.",
                textZh: "牛排配一道配菜——土豆泥、烤土豆、菠菜、芦笋或凯撒沙拉。多加一道8美元。",
                actionHint: "选一道配菜",
                frequency: "common",
              },
              {
                textEn:
                  "It comes with a side of your choice. Our mashed potatoes and creamed spinach are especially popular.",
                textZh: "配一道自选配菜。我们的土豆泥和奶油菠菜特别受欢迎。",
                actionHint: "可以参考热门选择",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Steak comes with one side. We've got baked potato, garlic mashed, creamed spinach, grilled asparagus, or Caesar salad. Extra sides are eight bucks.",
            formalityVariants: {
              casual:
                "One side per steak. Baked potato, garlic mash, creamed spinach, grilled asparagus, Caesar salad. Extra sides $8.",
              standard:
                "Each steak comes with your choice of one side. We have baked potato, garlic mashed potatoes, creamed spinach, grilled asparagus, or Caesar salad. Additional sides are $8 each.",
              formal:
                "Each steak entrée includes your selection of one complimentary side dish. Our current offerings include baked potato, garlic mashed potatoes, creamed spinach, grilled asparagus, and Caesar salad. Any additional side orders are priced at $8 individually.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Garlic mashed potatoes, please. And for my wife, she'd like the filet mignon, medium, with the Caesar salad.",
            textZh: "蒜香土豆泥。我太太要菲力牛排，五分熟，配凯撒沙拉。",
            casualVersion:
              "Garlic mashed for me. And for my wife, she'll do the filet mignon, medium, with the Caesar salad.",
            commonMistake: {
              wrong: "My wife wants filet mignon.",
              correct: "My wife would like the filet mignon.",
              explanation: "“wants” 听起来比较直接，用 “would like” 更委婉礼貌。",
            },
            formalityVariants: {
              casual: "Garlic mash for me. Wife's having the filet, medium, with Caesar salad.",
              standard:
                "Garlic mashed potatoes, please. And for my wife, she'd like the filet mignon, medium, with the Caesar salad.",
              formal:
                "I will have the garlic mashed potatoes, please. And for my wife, she would prefer the filet mignon, prepared medium, accompanied by the Caesar salad.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Excellent choices. Would either of you like a sauce on the side? We have peppercorn, béarnaise, and our house-made chimichurri.",
            textZh: "很好的选择。需要配酱汁吗？有黑胡椒酱、贝阿恩酱，还有我们自制的阿根廷青酱。",
            keyPhrases: [
              { en: "on the side", zh: "放在旁边" },
              { en: "peppercorn", zh: "黑胡椒酱" },
              { en: "béarnaise", zh: "贝阿恩酱" },
              { en: "chimichurri", zh: "阿根廷青酱" },
              { en: "house-made", zh: "自制的" },
            ],
            vocabNotes: {
              "on the side": {
                meaningInContext: "在这句话里表示：酱汁单独装，不浇在牛排上",
                similarUsage: "类似用法：Dressing on the side, please.（沙拉酱放旁边）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Great picks! Want any sauce with that? We do peppercorn, béarnaise, and a fresh chimichurri.",
                textZh: "选得好！要配酱汁吗？有黑胡椒酱、贝阿恩酱和新鲜阿根廷青酱。",
                actionHint: "选一种酱或不要",
                frequency: "common",
              },
              {
                textEn:
                  "Can I interest you in a sauce? Our chimichurri is house-made and really popular with the ribeye.",
                textZh: "要试试酱汁吗？我们自制的阿根廷青酱配肋眼特别受欢迎。",
                actionHint: "接受推荐或不要酱",
                frequency: "occasional",
              },
            ],
            casualVersion: "Great choices. Want any sauce on the side? Got peppercorn, béarnaise, and our chimichurri.",
            formalityVariants: {
              casual: "Good choices. Any sauce? Peppercorn, béarnaise, or chimichurri.",
              standard:
                "Excellent choices. Would either of you like a sauce on the side? We have peppercorn, béarnaise, and our house-made chimichurri.",
              formal:
                "Excellent selections indeed. Might I inquire if either of you would care for a sauce accompaniment? We offer peppercorn, béarnaise, and our proprietary house-made chimichurri.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll try the chimichurri. She doesn't need sauce. How long will it take?",
            textZh: "我试试阿根廷青酱。她不用酱。大概要多久？",
            casualVersion: "I'll try the chimichurri. She's good without sauce. How long for the food?",
            commonMistake: {
              wrong: "How long need?",
              correct: "How long will it take?",
              explanation: "询问时间需要完整的句子，'how long will it take' 是标准用法。",
            },
            formalityVariants: {
              casual: "I'll do the chimichurri. She's fine without. How long till it's ready?",
              standard: "I'll try the chimichurri. She doesn't need sauce. How long will it take?",
              formal:
                "I will sample the chimichurri. My companion will not require a sauce. Approximately how long will the preparation of our meals take?",
            },
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
              {
                textEn: "Steaks will be about 15-20 minutes. Can I bring you some bread while you wait?",
                textZh: "牛排大概15到20分钟。等的时候给您拿些面包来？",
                actionHint: "可以先吃面包垫肚子",
                frequency: "common",
              },
              {
                textEn: "It'll be a little while for the steaks. How about some warm bread to start?",
                textZh: "牛排需要一点时间。先来点热面包？",
                actionHint: "接受面包或拒绝",
                frequency: "occasional",
              },
            ],
            casualVersion: "Steaks'll be about 15, 20 minutes. Wanna get some bread while you wait?",
            formalityVariants: {
              casual: "Steaks in 15-20. Want some bread while we wait?",
              standard:
                "About 15 to 20 minutes for the steaks. In the meantime, would you like some bread for the table?",
              formal:
                "The preparation of your steaks will require approximately 15 to 20 minutes. While you await your entrées, would you care for some bread service for the table?",
            },
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
            commonMistake: {
              wrong: "This is your ribeye and filet.",
              correct: "Here are your medium-rare ribeye and medium filet.",
              explanation: "英语通常会加上形容词描述食物。",
            },
            alternativeExpressions: [
              {
                textEn: "Ribeye medium-rare and filet medium — here you go! Enjoy!",
                textZh: "肋眼三分熟、菲力五分熟——给您！请慢用！",
                actionHint: "检查一下熟度",
                frequency: "common",
              },
              {
                textEn: "Here we are — ribeye and filet. Let me know if everything looks good!",
                textZh: "来了——肋眼和菲力。看看有没有问题！",
                actionHint: "切开确认熟度",
                frequency: "occasional",
              },
            ],
            casualVersion: "Got your ribeye, medium-rare, and the filet, medium. Enjoy!",
            formalityVariants: {
              casual: "Got your ribeye, medium-rare, and filet, medium. Enjoy!",
              standard: "Here is your ribeye, medium-rare, and the filet mignon, medium. Enjoy your meal.",
              formal:
                "Allow me to present your ribeye, prepared medium-rare, and the filet mignon, prepared medium. We hope you enjoy your dining experience.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Thank you! Hmm, actually, I think my ribeye might be a little more done than I expected. It looks more like medium to me.",
            textZh: "谢谢！嗯，不过我觉得我的肋眼好像比我想要的熟了一些。看起来像五分熟。",
            culturalNote: "在美国牛排馆，如果熟度不对，礼貌地要求重做是完全可以接受的。",
            casualVersion:
              "Thanks! Hmm, actually, my ribeye's a bit more done than I thought. Looks kinda like medium.",
            commonMistake: {
              wrong: "This is overcooked.",
              correct: "I think my ribeye might be a little more done than I expected.",
              explanation: "直接说“overcooked”听起来太直接，不礼貌。委婉表达更佳。",
            },
            formalityVariants: {
              casual: "Thanks! Hmm, actually, my ribeye's a bit more done than I thought. Looks kinda like medium.",
              standard:
                "Thank you. Hmm, actually, I think my ribeye might be a little more done than I expected. It looks more like medium to me.",
              formal:
                "Thank you. However, I believe my ribeye appears to be slightly more cooked than the medium-rare doneness I requested. It presents more like a medium preparation.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Let me take a look... You're right, it does look a bit over. I'm so sorry about that. I'll have the kitchen fire a new one right away. It should only be about 10 minutes.",
            textZh: "让我看看……您说得对，确实有点过了。非常抱歉。我让厨房马上重做一份。大概10分钟就好。",
            keyPhrases: [
              { en: "a bit over", zh: "稍微过了/过熟了" },
              { en: "fire a new one", zh: "重做一份" },
              { en: "right away", zh: "马上" },
            ],
            vocabNotes: {
              fire: {
                meaningInContext: "在这句话里表示：下单让厨房开始做菜（厨房用语）",
                similarUsage: "类似用法：Fire table 12's appetizers!（开始做12号桌的前菜！）",
              },
            },
            literalMeaning: "\"fire a new one\" 字面意思是'点火烧一个新的'，实际在餐饮业是让厨房开始制作的意思。",
            alternativeExpressions: [
              {
                textEn: "I apologize — let me send this back and get you a new one cooked properly.",
                textZh: "抱歉——我把这个退回去，给您重新做一份。",
                actionHint: "等待重做即可",
                frequency: "common",
              },
            ],
            casualVersion:
              "Lemme see... Yeah, you're right, it's a bit over. My bad. I'll get the kitchen to fire up a new one right away. Should be about 10.",
            formalityVariants: {
              casual:
                "Lemme see... Yeah, you're right, it's a bit over. My bad. I'll get the kitchen to fire up a new one right away. Should be about 10.",
              standard:
                "Let me take a look... You are right, it does look a bit overcooked. I am so sorry about that. I will have the kitchen prepare a new one right away. It should only be about 10 minutes.",
              formal:
                "Allow me to inspect... You are absolutely correct, it appears to be slightly beyond the requested doneness. My sincerest apologies for this oversight. I will instruct the kitchen to prepare a replacement immediately. This should take approximately 10 minutes.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you, I appreciate that. Should I wait, or should we both start eating?",
            textZh: "谢谢，很感谢。我应该等着，还是我们都先吃？",
            culturalNote: "美国用餐文化中，如果有一人餐点延误，通常会主动提出让其他人先吃，而不是全部等待。",
            commonMistake: {
              wrong: "Should I wait, or she eat first?",
              correct: "Should I wait, or should we both start eating?",
              explanation: "避免主语缺失或直接用 \"she eat first\"，不自然。",
            },
            casualVersion: "Thanks, I appreciate it. Should I wait, or should we just eat?",
            formalityVariants: {
              casual: "Thanks, I appreciate it. Should I wait, or should we just eat?",
              standard: "Thank you, I appreciate that. Should I wait, or should we both start eating?",
              formal:
                "Thank you for your prompt attention to this matter. I appreciate it. Would it be more appropriate for me to wait for the replacement, or should my companion and I commence our meal?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Please, go ahead and start! Your wife's steak is perfect temperature right now. I'll bring yours out as soon as it's ready. And I'll make sure the kitchen gets it spot-on this time.",
            textZh: "请先吃！您太太的牛排现在温度正好。您的好了我马上端出来。我会确保厨房这次做到位。",
            keyPhrases: [
              { en: "go ahead and start", zh: "先开始吃吧" },
              { en: "spot-on", zh: "精准/到位" },
            ],
            vocabNotes: {
              "spot-on": {
                meaningInContext: "在这句话里表示：完全正确、精确到位",
                similarUsage: "类似用法：Your pronunciation is spot-on!（你的发音非常准确！）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Don't wait — your wife should eat while hers is hot. Yours will be out in no time.",
                textZh: "别等了——您太太趁热吃吧。您的很快就来。",
                actionHint: "让太太先吃",
                frequency: "common",
              },
              {
                textEn: "Start eating! No sense in both steaks getting cold. I'll rush the new one out.",
                textZh: "先吃吧！没必要两份都凉了。我催厨房尽快出。",
                actionHint: "先吃着等新的",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Nah, go ahead and start! Your wife's steak's perfect temp right now. I'll bring yours out soon as it's ready. And I'll make sure the kitchen nails it this time.",
            formalityVariants: {
              casual:
                "Nah, go ahead and start! Your wife's steak's perfect temp right now. I'll bring yours out soon as it's ready. And I'll make sure the kitchen nails it this time.",
              standard:
                "Please, go ahead and start! Your wife's steak is perfect temperature right now. I will bring yours out as soon as it is ready. And I will make sure the kitchen gets it spot-on this time.",
              formal:
                "By all means, please proceed with your meal. Your wife's steak is at its ideal temperature for consumption. I will personally ensure your replacement is delivered to your table promptly upon completion. I will also oversee that the kitchen achieves the precise doneness requested.",
            },
          },
          {
            speaker: "you",
            textEn: "Sounds good. Thank you for being so accommodating.",
            textZh: "好的。谢谢你这么配合。",
            commonMistake: {
              wrong: "Thanks for your help.",
              correct: "Thank you for being so accommodating.",
              explanation: "\"Accommodating\" 指体谅并配合顾客需求，更贴切。",
            },
            culturalNote: '"accommodating" 比 "nice" 更正式，在高档餐厅使用显得很有礼貌。',
            casualVersion: "Sounds good. Thanks for being so cool about it.",
            formalityVariants: {
              casual: "Sounds good. Thanks for being so cool about it.",
              standard: "Sounds good. Thank you for being so accommodating.",
              formal:
                "That is perfectly acceptable. I greatly appreciate your understanding and willingness to assist.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Of course! Here's your new ribeye — beautiful medium-rare this time. And as a gesture for the wait, your dessert tonight will be on the house.",
            textZh: "当然！这是您新的肋眼——这次是漂亮的三分熟。为了补偿您的等待，今晚甜品我们请客。",
            keyPhrases: [
              { en: "as a gesture", zh: "作为表示" },
              { en: "on the house", zh: "餐厅请客/免费" },
            ],
            vocabNotes: {
              "on the house": {
                meaningInContext: "在这句话里表示：餐厅免费赠送，不收费",
                similarUsage: "类似用法：The first round is on the house.（第一轮饮料免费）",
              },
            },
            culturalMeaning:
              "在欧美高档餐厅，如果出了错，餐厅通常会主动补偿（免费甜品、折扣等），这是服务文化的一部分。",
            alternativeExpressions: [
              {
                textEn: "Here's the new one — perfect medium-rare. And dessert's on us tonight for the trouble.",
                textZh: "新的来了——完美的三分熟。今晚甜品我们请，给您添麻烦了。",
                actionHint: "接受补偿，享用牛排",
                frequency: "common",
              },
              {
                textEn: "Your corrected ribeye, sir. We'd like to comp your dessert tonight to make up for it.",
                textZh: "您的肋眼重新做好了。今晚甜品免单，算是我们的补偿。",
                actionHint: "感谢服务员",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "No problem! Here's your new ribeye — perfect medium-rare this time. And hey, dessert's on us tonight for the wait.",
            culturalNote: "“on the house”（餐厅请客）是美国常见的服务文化。",
            formalityVariants: {
              casual:
                "No problem! Here's your new ribeye — perfect medium-rare this time. And hey, dessert's on us tonight for the wait.",
              standard:
                "Of course! Here is your new ribeye — beautiful medium-rare this time. And as a gesture for the wait, your dessert tonight will be on the house.",
              formal:
                "Certainly! Allow me to present your replacement ribeye, prepared to a perfect medium-rare this time. And as a token of our apology for the inconvenience, your dessert this evening will be complimentary.",
            },
          },
          {
            speaker: "you",
            textEn: "Wow, that's very generous. This one looks perfect — thank you so much!",
            textZh: "哇，太大方了。这次看起来完美——非常感谢！",
            commonMistake: {
              wrong: "This is so generous. It looks perfect.",
              correct: "Wow, that's incredibly generous. This looks perfect – thank you so much!",
              explanation: "自然对话中会有感叹词，并加强语气。",
            },
            casualVersion: "Whoa, that's super generous. This one looks perfect — thanks a bunch!",
            formalityVariants: {
              casual: "Whoa, that's super generous. This one looks perfect — thanks a bunch!",
              standard: "Wow, that's very generous. This one looks perfect — thank you so much!",
              formal:
                "Oh, that is exceedingly generous of you. This preparation appears absolutely impeccable — my sincere thanks!",
            },
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
            culturalNote: "服务员直接问预订很常见，无需客套",
            commonMistake: {
              wrong: "Do you have reservation?",
              correct: "Do you have a reservation?",
              explanation: "reservation是可数名词，需要冠词a",
            },
            keyPhrases: [
              { en: "bar seating", zh: "吧台座位" },
              { en: "table seating", zh: "桌位" },
            ],
            alternativeExpressions: [
              {
                textEn: "Welcome! Reservation for tonight? We've got spots at the bar and a few tables open.",
                textZh: "欢迎！今晚有预订吗？吧台和几张桌子都有空位。",
                actionHint: "说明有无预订",
                frequency: "common",
              },
              {
                textEn: "Hi there! Walk-in or reservation? We can seat you at the bar or a table.",
                textZh: "你好！有预订还是直接来的？吧台或桌位都可以。",
                actionHint: "选吧台还是桌位",
                frequency: "occasional",
              },
            ],
            casualVersion: "Hey! Got a reservation? We got bar and table seats open tonight.",
            formalityVariants: {
              casual: "Hey, got a reservation? Bar and tables are open tonight.",
              standard:
                "Good evening! Do you have a reservation? We have bar seating and table seating available tonight.",
              formal:
                "Good evening, welcome. May I inquire if you have a reservation? We currently have both bar and table seating options available this evening.",
            },
          },
          {
            speaker: "you",
            textEn:
              "We don't have a reservation, but we'd love to sit at the sushi bar if possible. We're interested in the omakase.",
            textZh: "没有预订，但如果可以的话想坐吧台。我们想试omakase。",
            culturalNote: "Omakase（おまかせ）是日语'交给你了'的意思，由寿司师傅决定上什么菜。在海外高端寿司店很流行。",
            casualVersion: "No reservation, but we'd love to sit at the bar if we can. We're doing omakase.",
            commonMistake: {
              wrong: "We have no reservation",
              correct: "We don't have a reservation",
              explanation: '中式英语常直接说 "no reservation"，地道说法是 "don\'t have"。',
            },
            formalityVariants: {
              casual: "No reservation, but we wanna sit at the bar, and we want omakase.",
              standard:
                "We don't have a reservation, but we'd love to sit at the sushi bar if possible. We're interested in the omakase.",
              formal:
                "Unfortunately, we do not have a prior reservation. However, we would greatly appreciate bar seating, should it be available, as we are keen to experience the omakase selection.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "You're in luck — we have two seats right in front of Chef Tanaka. The omakase is $120 per person for 12 pieces plus miso soup and dessert. Shall I seat you?",
            textZh: "您运气好——田中师傅面前正好有两个位置。Omakase每人120美元，12贯加味噌汤和甜品。请入座吗？",
            culturalNote: "Omakase是日式高级体验，价格昂贵但品质极高",
            commonMistake: {
              wrong: "Omakase is 120 dollars per person.",
              correct: "Omakase is $120 per person.",
              explanation: "美元符号$直接跟数字，不需要再写dollars",
            },
            keyPhrases: [
              { en: "you're in luck", zh: "你运气好" },
              { en: "12 pieces", zh: "12贯" },
              { en: "per person", zh: "每人" },
            ],
            vocabNotes: {
              omakase: {
                meaningInContext: "在这句话里表示：厨师精选套餐，由寿司师傅根据当天最佳食材决定菜品",
                similarUsage:
                  "类似用法：The omakase changes daily based on what's fresh.（Omakase每天根据新鲜食材变化）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Lucky timing! Two bar seats just opened up. The omakase is $120 each — 12 courses plus soup and dessert.",
                textZh: "来得真巧！刚好空出两个吧台位。Omakase每人120美元——12道加汤和甜品。",
                actionHint: "决定是否入座",
                frequency: "common",
              },
              {
                textEn:
                  "Perfect — we have two spots at Chef Tanaka's counter. Omakase runs $120 per person. Want to sit down?",
                textZh: "太好了——田中师傅的台前有两个位置。Omakase每人120美元。要坐吗？",
                actionHint: "确认价格后入座",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "You're in luck! Two seats right at Chef Tanaka's spot. Omakase is $120 a head, 12 pieces, soup, and dessert. Ready to sit?",
            formalityVariants: {
              casual:
                "Lucky you! Two spots open right by Chef Tanaka. Omakase is $120 each, 12 pieces, soup, dessert. Wanna sit?",
              standard:
                "You're in luck — we have two seats right in front of Chef Tanaka. The omakase is $120 per person for 12 pieces plus miso soup and dessert. Shall I seat you?",
              formal:
                "Indeed, you are quite fortunate; we have two prime seats available directly in front of Chef Tanaka. The omakase offering is priced at $120 per individual, comprising 12 distinct pieces, accompanied by miso soup and dessert. May I escort you to your seats?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please! This is our first time having omakase — any etiquette we should know?",
            textZh: "好的！这是我们第一次吃omakase——有什么礼仪需要注意的吗？",
            culturalNote: "日本人很注重用餐礼仪，Omakase尤甚，问清楚是好习惯。",
            casualVersion: "Yeah, please! First time for omakase — anything we should know?",
            commonMistake: {
              wrong: "Do you have any etiquette to know?",
              correct: "Any etiquette we should know?",
              explanation: '"to know"听起来是被动，"should know"更自然。',
            },
            formalityVariants: {
              casual: "Yeah, please! First omakase — any rules?",
              standard: "Yes, please! This is our first time having omakase — any etiquette we should know?",
              formal:
                "Indeed, that would be delightful, thank you. As this is our inaugural omakase experience, are there any particular customs or dining etiquette we ought to be aware of?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Chef Tanaka will place each piece directly in front of you. It's best to eat each one within a few seconds — that's when the temperature and texture are perfect. You can use your hands or chopsticks, whichever you prefer. Also, for nigiri, a light dip of soy sauce on the fish side is plenty.",
            textZh:
              "田中师傅会直接把每一贯放在您面前。最好在几秒内吃掉——那时温度和口感最完美。用手或筷子都可以。另外，握寿司蘸酱油时轻蘸鱼的一面就够了。",
            commonMistake: {
              wrong: "It's best to eat it in a few seconds.",
              correct: "It's best to eat it within a few seconds.",
              explanation: "in强调一段时间后，within强调在一段时间之内",
            },
            keyPhrases: [
              { en: "each piece", zh: "每一贯" },
              { en: "within a few seconds", zh: "几秒内" },
              { en: "texture", zh: "口感" },
              { en: "chopsticks", zh: "筷子" },
              { en: "nigiri", zh: "握寿司" },
              { en: "a light dip", zh: "轻蘸" },
            ],
            vocabNotes: {
              nigiri: {
                meaningInContext: "在这句话里表示：手握寿司，米饭上放一片鱼生",
                similarUsage: "类似用法：The tuna nigiri is their best seller.（金枪鱼握寿司是他们的招牌）",
              },
            },
            culturalNote:
              "在正宗寿司店，握寿司蘸酱油应该鱼面朝下轻蘸，不要把米饭面泡在酱油里。在美国很多日式餐厅，师傅已经调好味，甚至不需要再蘸。",
            alternativeExpressions: [
              {
                textEn:
                  "The chef will serve each piece one at a time. Eat it right away for the best experience — hands or chopsticks, your call.",
                textZh: "师傅会一贯一贯地上。趁新鲜马上吃体验最好——用手或筷子都行。",
                actionHint: "做好准备，上一贯吃一贯",
                frequency: "common",
              },
              {
                textEn:
                  "Just eat each piece as soon as it's served. And go easy on the soy sauce — a tiny dip on the fish side is all you need.",
                textZh: "每贯上来就马上吃。酱油少蘸——在鱼那面轻点一下就够了。",
                actionHint: "别蘸太多酱油",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Chef Tanaka's gonna put each piece right in front of you. Eat it quick, in a few seconds — that's when it's perfect temp and texture. Hands or chopsticks, whatever you like. For nigiri, just a light dip on the fish side is enough.",
            formalityVariants: {
              casual:
                "Chef Tanaka puts each piece right in front. Eat it fast – perfect temp. Hands or chopsticks, your call. For nigiri, just a little soy on the fish, that's all.",
              standard:
                "Chef Tanaka will place each piece directly in front of you. It's best to eat each one within a few seconds — that's when the temperature and texture are perfect. You can use your hands or chopsticks, whichever you prefer. Also, for nigiri, a light dip of soy sauce on the fish side is plenty.",
              formal:
                "Chef Tanaka will meticulously present each piece directly before you. We highly recommend consuming each creation within a brief few seconds, as this ensures optimal temperature and textual integrity. You are welcome to utilize either your hands or chopsticks, according to your personal preference. Furthermore, for nigiri, a modest application of soy sauce solely to the fish component is quite sufficient.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it, thank you for the tips! We're ready whenever Chef Tanaka is.",
            textZh: "明白了，谢谢你的建议！田中师傅准备好的时候我们就开始。",
            casualVersion: "Got it, thanks for the tips! We're ready when Chef Tanaka is.",
            commonMistake: {
              wrong: "We are ready, when Chef Tanaka is ready",
              correct: "We're ready whenever Chef Tanaka is.",
              explanation: '英文口语中常用 "is" 代替重复的动词，更自然。',
            },
            formalityVariants: {
              casual: "Got it, thanks for the tips! We're ready when he is.",
              standard: "Got it, thank you for the tips! We're ready whenever Chef Tanaka is.",
              formal:
                "Understood, and we are very grateful for your valuable advice. We shall be prepared to commence whenever Chef Tanaka is ready to proceed.",
            },
          },
          {
            speaker: "them",
            role: "寿司师傅",
            textEn:
              "Welcome. Tonight's omakase starts with hirame — that's flounder — flown in this morning from Tsukiji. I've brushed it with a little yuzu and sea salt. Please, enjoy.",
            textZh: "欢迎。今晚的omakase从比目鱼开始——今天早上从筑地空运来的。我刷了一点柚子和海盐。请享用。",
            culturalNote: "筑地市场是日本著名的海鲜市场，强调食材新鲜度。",
            commonMistake: {
              wrong: "Welcome. Tonight omakase begins...",
              correct: "Welcome. Tonight's omakase begins...",
              explanation: "Tonight's omakase是所有格，意为“今晚的omakase”",
            },
            keyPhrases: [
              { en: "hirame", zh: "比目鱼" },
              { en: "flounder", zh: "比目鱼（英文名）" },
              { en: "flown in", zh: "空运来的" },
              { en: "brushed with", zh: "刷上一层" },
              { en: "yuzu", zh: "柚子" },
            ],
            vocabNotes: {
              "flown in": {
                meaningInContext: "在这句话里表示：用飞机空运新鲜食材",
                similarUsage: "类似用法：Our lobster is flown in daily from Maine.（我们的龙虾每天从缅因空运）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "We begin with hirame — flounder, fresh from Japan this morning. Just a touch of yuzu and salt. Enjoy.",
                textZh: "我们从比目鱼开始——今早从日本空运的。只加了一点柚子和盐。请享用。",
                actionHint: "马上品尝第一贯",
                frequency: "common",
              },
              {
                textEn: "First up is hirame with yuzu and sea salt. The fish arrived today from Tsukiji market.",
                textZh: "第一道是柚子海盐比目鱼。鱼是今天从筑地市场到的。",
                actionHint: "趁新鲜吃",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Welcome. Tonight's omakase starts with hirame — that's flounder — flew in this morning from Tsukiji. I brushed it with a little yuzu and sea salt. Enjoy.",
            formalityVariants: {
              casual:
                "Welcome. Tonight's omakase kicks off with hirame — flounder — flew in from Tsukiji this morning. Little yuzu and sea salt. Enjoy.",
              standard:
                "Welcome. Tonight's omakase starts with hirame — that's flounder — flown in this morning from Tsukiji. I've brushed it with a little yuzu and sea salt. Please, enjoy.",
              formal:
                "Welcome. This evening's omakase experience commences with hirame, commonly known as flounder, which was freshly flown in this very morning from Tsukiji. It has been delicately brushed with a hint of yuzu and sea salt. Please, savor this offering.",
            },
          },
          {
            speaker: "you",
            textEn: "Mmm, that's incredible. The fish just melts in your mouth. What's next?",
            textZh: "嗯，太好吃了。鱼肉入口即化。下一个是什么？",
            commonMistake: {
              wrong: "The fish just melts into your mouth.",
              correct: "The fish just melts in your mouth.",
              explanation: "in your mouth是固定搭配，into your mouth不自然",
            },
            casualVersion: "Mmm, that's amazing. Fish just melts in your mouth. What's next?",
            formalityVariants: {
              casual: "Wow, amazing. Fish melts. Next?",
              standard: "Mmm, that's incredible. The fish just melts in your mouth. What's next?",
              formal:
                "Mmm, that is truly exquisite. The fish possesses a remarkably delicate, melt-in-your-mouth texture. May I inquire about the next offering?",
            },
          },
          {
            speaker: "them",
            role: "寿司师傅",
            textEn:
              "Next is chu-toro — medium-fatty tuna belly. This is my favorite cut. Notice how the fat creates a buttery texture. I've added just a touch of freshly grated wasabi between the fish and the rice.",
            textZh:
              "接下来是中腹——中等肥度的金枪鱼腹部。这是我最喜欢的部位。注意脂肪带来的黄油般的口感。我在鱼和米饭之间加了一点现磨山葵。",
            culturalNote: "金枪鱼不同部位（大トロ、中トロ、赤身）是日本寿司文化特色。",
            commonMistake: {
              wrong: "I have added a touch of freshly grated wasabi between fish and rice.",
              correct: "I've added a touch of freshly grated wasabi between the fish and the rice.",
              explanation: "鱼和米饭是特指的，需要冠词the",
            },
            keyPhrases: [
              { en: "chu-toro", zh: "中腹/中脂金枪鱼" },
              { en: "tuna belly", zh: "金枪鱼腹" },
              { en: "buttery", zh: "黄油般细腻的" },
              { en: "grated wasabi", zh: "现磨山葵" },
            ],
            vocabNotes: {
              buttery: {
                meaningInContext: "在这句话里表示：像黄油一样柔滑细腻的口感",
                similarUsage: "类似用法：This avocado has a buttery texture.（这个牛油果口感丝滑）",
              },
            },
            localVariants: {
              "en-US": "medium-fatty tuna belly",
              "en-GB": "medium-fatty tuna belly",
              ja: "中トロ (chū-toro)",
            },
            alternativeExpressions: [
              {
                textEn:
                  "This is chu-toro — the belly of the tuna. Rich and melty. I put a bit of fresh wasabi underneath.",
                textZh: "这是中腹——金枪鱼的腹部。浓郁入口即化。下面放了一点新鲜山葵。",
                actionHint: "直接吃，不用再蘸",
                frequency: "common",
              },
              {
                textEn: "Number two: chu-toro. Feel the melt-in-your-mouth texture — that's the beauty of tuna belly.",
                textZh: "第二贯：中腹。感受入口即化——这就是金枪鱼腹的魅力。",
                actionHint: "感受口感变化",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Next up, chu-toro — that's medium-fatty tuna belly. My favorite cut. Check out how the fat makes it buttery. Just added a touch of fresh wasabi between the fish and rice.",
            formalityVariants: {
              casual:
                "Next, chu-toro — medium-fatty tuna belly. My favorite. See that buttery texture from the fat? Added a bit of fresh wasabi between fish and rice.",
              standard:
                "Next is chu-toro — medium-fatty tuna belly. This is my favorite cut. Notice how the fat creates a buttery texture. I've added just a touch of freshly grated wasabi between the fish and the rice.",
              formal:
                "Following this, we have the chu-toro, which is the medium-fatty tuna belly. This particular cut is my personal favorite. Kindly observe the rich, buttery texture imparted by its fat content. I have meticulously placed a subtle amount of freshly grated wasabi between the fish and the seasoned rice.",
            },
          },
          {
            speaker: "you",
            textEn:
              "That's amazing — you can really taste the difference from regular tuna. Can I ask what fish you'll be serving later?",
            textZh: "太棒了——和普通金枪鱼味道真的不一样。能问一下后面还有什么鱼吗？",
            casualVersion:
              "That's amazing — you can really taste the difference from regular tuna. So, what other fish are we getting?",
            culturalNote: "不建议追问Omakase的菜单，会显得不信任厨师",
            commonMistake: {
              wrong: "What fish is next?",
              correct: "Can I ask what fish you'll be serving later?",
              explanation: '"What is next" 太直接，问法可以更委婉礼貌。',
            },
            formalityVariants: {
              casual: "Crazy good — totally different from normal tuna. What else is coming?",
              standard:
                "That's amazing — you can really taste the difference from regular tuna. Can I ask what fish you'll be serving later?",
              formal:
                "That is truly exceptional; the distinction from conventional tuna is quite remarkable. Might I politely inquire if you could provide a brief preview of any additional fish selections that will be presented?",
            },
          },
          {
            speaker: "them",
            role: "寿司师傅",
            textEn:
              "I like to keep some surprises! But I will tell you — we'll work up from lighter fish to richer ones, finishing with uni and an egg custard. Any allergies I should know about?",
            textZh:
              "我喜欢保留一些惊喜！但可以告诉你——会从清淡的鱼到浓郁的鱼，最后是海胆和玉子烧。有什么过敏需要告诉我的吗？",
            culturalNote: "日料Omakase通常有固定顺序，由清淡到浓郁。",
            commonMistake: {
              wrong: "Are there any allergy I should be aware of?",
              correct: "Are there any allergies I should be aware of?",
              explanation: "allergies是可数名词，问“任何过敏”时常用复数",
            },
            keyPhrases: [
              { en: "work up from", zh: "从……到" },
              { en: "lighter to richer", zh: "从清淡到浓郁" },
              { en: "uni", zh: "海胆" },
              { en: "egg custard", zh: "玉子烧" },
            ],
            alternativeExpressions: [
              {
                textEn: "I'll let the fish speak for itself — trust the process!",
                textZh: "让鱼自己来说话——相信过程吧！",
                actionHint: "享受惊喜，不用追问",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "I like keeping some surprises! But I'll tell you — we're going from lighter fish to richer, ending with uni and egg custard. Any allergies?",
            formalityVariants: {
              casual:
                "Gotta keep some surprises! But, we'll go from lighter to richer fish, finishing with uni and egg custard. Allergies?",
              standard:
                "I like to keep some surprises! But I will tell you — we'll work up from lighter fish to richer ones, finishing with uni and an egg custard. Any allergies I should know about?",
              formal:
                "I do enjoy maintaining a few surprises for the experience! However, I can inform you that we will progress from lighter, more delicate fish to richer selections, culminating with uni and a delightful egg custard. Are there any particular allergies I should be made aware of?",
            },
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
            textEn:
              "Hi! Here's the menu. We have nigiri, sashimi, hand rolls, and special rolls. Our happy hour runs until 6 — all hand rolls are half price.",
            textZh: "你好！这是菜单。我们有握寿司、刺身、手卷和特色卷。欢乐时光到6点——所有手卷半价。",
            commonMistake: {
              wrong: "Happy hour is until 6 o'clock.",
              correct: "Happy hour is until 6 PM.",
              explanation: "PM更简洁自然，避免o'clock冗余",
            },
            keyPhrases: [
              { en: "nigiri", zh: "握寿司" },
              { en: "sashimi", zh: "刺身" },
              { en: "hand rolls", zh: "手卷" },
              { en: "special rolls", zh: "特色卷" },
              { en: "happy hour", zh: "欢乐时光" },
              { en: "half price", zh: "半价" },
            ],
            vocabNotes: {
              "happy hour": {
                meaningInContext: "在这句话里表示：餐厅特定时段的折扣优惠时间",
                similarUsage: "类似用法：The bar's happy hour is from 4 to 7 PM.（酒吧欢乐时光从下午4点到7点）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Welcome! Here's the menu. FYI, hand rolls are 50% off during happy hour — that's till 6!",
                textZh: "欢迎！这是菜单。提一下，欢乐时光手卷五折——到6点！",
                actionHint: "趁打折多点手卷",
                frequency: "common",
              },
              {
                textEn: "Hey! Take a look at the menu. You came at a great time — hand rolls are half off till 6.",
                textZh: "你好！看看菜单。你们来的时间很好——手卷到6点前半价。",
                actionHint: "利用折扣多点",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Hey! Here's the menu. We got nigiri, sashimi, hand rolls, and special rolls. Happy hour's 'til 6 — all hand rolls are half off.",
            culturalNote: "服务员通常会主动介绍特价或欢乐时光，无需客人询问。",
            formalityVariants: {
              casual:
                "Hey! Menu's here. We got nigiri, sashimi, hand rolls, special rolls. Happy hour's 'til 6, all hand rolls half price.",
              standard:
                "Hi! Here's the menu. We have nigiri, sashimi, hand rolls, and special rolls. Our happy hour runs until 6 — all hand rolls are half price.",
              formal:
                "Good evening! Here is our menu. We offer a selection of nigiri, sashimi, hand rolls, and our signature special rolls. Please note our happy hour promotions are available until 6 PM, during which all hand rolls are offered at half price.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Great, we'll definitely take advantage of happy hour! Can we get two salmon hand rolls and one spicy tuna roll?",
            textZh: "太好了，我们一定要利用欢乐时光！来两个三文鱼手卷和一个辣金枪鱼卷。",
            casualVersion:
              "Awesome, we're totally hitting up happy hour! Can we get two salmon hand rolls and a spicy tuna roll?",
            commonMistake: {
              wrong: "We want to take advantage of happy hour!",
              correct: "We'll definitely take advantage of happy hour!",
              explanation: '"Want to" 语气生硬，口语常用 "will" 或 "would like to" 来表达意愿。',
            },
            formalityVariants: {
              casual: "Cool, we're definitely doing happy hour! Two salmon hand rolls and one spicy tuna roll, please.",
              standard:
                "Great, we'll definitely take advantage of happy hour! Can we get two salmon hand rolls and one spicy tuna roll?",
              formal:
                "Excellent, we will certainly avail ourselves of the happy hour specials! May we please order two salmon hand rolls and one spicy tuna roll?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Sure! For the spicy tuna roll, would you like it with regular rice or brown rice? And do you want it as six pieces or eight?",
            textZh: "好的！辣金枪鱼卷要普通米饭还是糙米？要6个还是8个？",
            culturalNote: "美国寿司店提供糙米或不同件数很常见，日本传统寿司店较少见。",
            commonMistake: {
              wrong: "Would you like it with regular rice or brown rice? And do you want it as 6 pieces or 8 pieces?",
              correct: "Would you like it with regular rice or brown rice? And do you want it as six pieces or eight?",
              explanation: "在口语中，重复“pieces”不自然，用数字即可",
            },
            keyPhrases: [
              { en: "brown rice", zh: "糙米" },
              { en: "six pieces or eight", zh: "6个还是8个" },
            ],
            alternativeExpressions: [
              {
                textEn: "Got it! White or brown rice for the spicy tuna? And six or eight pieces?",
                textZh: "收到！辣金枪鱼卷要白米还是糙米？六个还是八个？",
                actionHint: "选米饭和数量",
                frequency: "common",
              },
              {
                textEn: "For the spicy tuna — regular or brown rice? We can cut it into 6 or 8.",
                textZh: "辣金枪鱼卷——普通米还是糙米？可以切6个或8个。",
                actionHint: "告诉服务员你的选择",
                frequency: "occasional",
              },
            ],
            casualVersion: "For the spicy tuna, you want regular or brown rice? And six or eight pieces?",
            formalityVariants: {
              casual: "Sure! Spicy tuna roll, regular or brown rice? Six or eight pieces?",
              standard:
                "Sure! For the spicy tuna roll, would you like it with regular rice or brown rice? And do you want it as six pieces or eight?",
              formal:
                "Certainly! Regarding the spicy tuna roll, would you prefer it prepared with traditional white rice or brown rice? Additionally, would you like the six-piece or eight-piece portion?",
            },
          },
          {
            speaker: "you",
            textEn: "Regular rice, eight pieces. We'd also like some edamame and miso soup to start.",
            textZh: "普通米饭，8个。我们还要毛豆和味噌汤先上。",
            casualVersion: "Regular rice, eight pieces. Also, can we get some edamame and miso soup to start?",
            commonMistake: {
              wrong: "We want regular rice, eight pieces.",
              correct: "Regular rice, eight pieces.",
              explanation: '点餐时直接说出选择即可，无需用 "we want"，听起来更自然。',
            },
            formalityVariants: {
              casual: "Regular, eight pieces. And, uh, can we get some edamame and miso soup first?",
              standard: "Regular rice, eight pieces. We'd also like some edamame and miso soup to start.",
              formal:
                "We will have the regular rice, eight pieces. Furthermore, we would appreciate starting with an order of edamame and miso soup.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Got it. And just so you know, our Dragon Roll is today's special — it's shrimp tempura inside with avocado and eel on top, drizzled with teriyaki sauce. Would you like to add one?",
            textZh:
              "好的。顺便说一下，今天的特色是龙卷——里面是炸虾天妇罗，上面铺牛油果和鳗鱼，淋上照烧酱。要加一个吗？",
            culturalNote: "“特色卷”或“创意卷”是美式寿司的标志，与传统日式寿司不同。",
            commonMistake: {
              wrong: "Our Dragon Roll is today special.",
              correct: "Our Dragon Roll is today's special.",
              explanation: "today's special是所有格，意为“今天的特色菜”",
            },
            keyPhrases: [
              { en: "Dragon Roll", zh: "龙卷" },
              { en: "shrimp tempura", zh: "炸虾天妇罗" },
              { en: "eel", zh: "鳗鱼" },
              { en: "drizzled with", zh: "淋上" },
              { en: "teriyaki sauce", zh: "照烧酱" },
            ],
            vocabNotes: {
              drizzled: {
                meaningInContext: "在这句话里表示：少量细细地淋在上面",
                similarUsage: "类似用法：Drizzle some olive oil over the salad.（在沙拉上淋一些橄榄油）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Chef's special today is the Dragon Roll — want to try it?",
                textZh: "今天主厨推荐是龙卷——想试试吗？",
                actionHint: "可以接受或拒绝",
                frequency: "common",
              },
            ],
            casualVersion:
              "Got it. Just so you know, our Dragon Roll's the special today — shrimp tempura inside with avocado and eel on top, drizzled with teriyaki. Wanna add one?",
            formalityVariants: {
              casual:
                "Got it. FYI, Dragon Roll's our special today — shrimp tempura, avocado, eel, teriyaki. Wanna add one?",
              standard:
                "Got it. And just so you know, our Dragon Roll is today's special — it's shrimp tempura inside with avocado and eel on top, drizzled with teriyaki sauce. Would you like to add one?",
              formal:
                "Understood. Please be advised that our Dragon Roll is featured as today's special. It contains shrimp tempura, topped with avocado and eel, and is lightly drizzled with teriyaki sauce. Would you care to include one with your order?",
            },
          },
          {
            speaker: "you",
            textEn:
              "That sounds amazing, yes please! One more question — is the wasabi real wasabi or the horseradish kind?",
            textZh: "听起来太好了，来一个！再问一下——山葵是真山葵还是辣根做的那种？",
            culturalNote:
              "大多数海外寿司店的'wasabi'其实是辣根加绿色素做的。真正的日本山葵（本わさび）非常昂贵，通常只在高端寿司店提供。",
            casualVersion: "Sounds amazing, yeah! One more thing — is the wasabi real or that horseradish stuff?",
            commonMistake: {
              wrong: "Is the wasabi real wasabi or the fake wasabi?",
              correct: "is the wasabi real wasabi or the horseradish kind?",
              explanation: '用 "fake wasabi" 听起来不礼貌，用 "horseradish kind" 或 "imitation wasabi" 更合适。',
            },
            formalityVariants: {
              casual:
                "Oh, that sounds awesome, yes please! Quick question — is the wasabi real or the horseradish kind?",
              standard:
                "That sounds amazing, yes please! One more question — is the wasabi real wasabi or the horseradish kind?",
              formal:
                "That sounds truly exquisite, yes please! I have one further inquiry — is the wasabi authentic Japanese wasabi or the horseradish-based variety?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Good question! We use real wasabi for our omakase, but the wasabi at the tables is a blend — mostly horseradish with a bit of real wasabi mixed in. I can bring you some freshly grated wasabi for an extra $3 if you'd like.",
            textZh:
              "好问题！我们的omakase用的是真山葵，但桌上的是混合的——主要是辣根加一点真山葵。如果需要的话，加3美元可以给您现磨的真山葵。",
            culturalNote: "真山葵（Hon-Wasabi）非常昂贵，通常只在高级日料店或omakase中使用。",
            commonMistake: {
              wrong: "I can bring you some freshly grated wasabi for extra $3.",
              correct: "I can bring you some freshly grated wasabi for an extra $3.",
              explanation: "extra是形容词，需要冠词an",
            },
            keyPhrases: [
              { en: "real wasabi", zh: "真山葵" },
              { en: "horseradish", zh: "辣根" },
              { en: "a blend", zh: "混合的" },
              { en: "freshly grated", zh: "现磨的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Honestly, the table wasabi is mostly horseradish. For $3 extra I can get you the real deal — fresh grated.",
                textZh: "说实话，桌上的山葵主要是辣根。加3美元可以给您现磨的真山葵。",
                actionHint: "决定是否加真山葵",
                frequency: "common",
              },
              {
                textEn:
                  "The omakase uses real wasabi. For regular orders, it's a mix. Want the real stuff? It's $3 more.",
                textZh: "Omakase用的是真山葵。普通点单是混合的。要真的吗？加3美元。",
                actionHint: "看个人偏好决定",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Good question! Real wasabi's for omakase, but the table wasabi's a blend — mostly horseradish with a bit of real stuff. I can get you fresh grated for $3 extra if you want.",
            formalityVariants: {
              casual:
                "Good question! We use real wasabi for omakase, but the stuff at the tables is a blend — mostly horseradish, tiny bit of real. Can get you fresh grated for $3 extra if you want.",
              standard:
                "Good question! We use real wasabi for our omakase, but the wasabi at the tables is a blend — mostly horseradish with a bit of real wasabi mixed in. I can bring you some freshly grated wasabi for an extra $3 if you'd like.",
              formal:
                "That is an excellent question! We exclusively utilize authentic, freshly grated wasabi for our omakase selections. However, the wasabi provided at the tables is a blend, primarily consisting of horseradish with a trace of actual wasabi. I can arrange for some freshly grated genuine wasabi for an additional $3, should you prefer.",
            },
          },
          {
            speaker: "you",
            textEn:
              "The blend is fine for us. Oh, and can we get the check whenever you're ready? We want to catch a movie at 8.",
            textZh: "混合的就行。对了，方便的时候可以买单吗？我们8点要去看电影。",
            casualVersion:
              "The blend's fine. Oh, and can we get the check whenever you're ready? Gotta catch a movie at 8.",
            culturalNote: "在美国餐厅，随时叫服务员结账是很常见的，尤其是有时间安排时，不需等待服务员主动询问。",
            commonMistake: {
              wrong: "We want to pay now.",
              correct: "Can we get the check whenever you're ready?",
              explanation: '在餐厅结账时，通常用 "Can we get the check?" 礼貌询问，"want to pay" 过于生硬。',
            },
            formalityVariants: {
              casual: "Blend's good. Hey, can we get the check when you get a chance? We got an 8 PM movie.",
              standard:
                "The blend is fine for us. Oh, and can we get the check whenever you're ready? We want to catch a movie at 8.",
              formal:
                "The blend will be perfectly adequate for us. Additionally, would it be possible to request the check at your earliest convenience? We have a commitment to attend a movie at 8 PM.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Of course! I'll have it ready by the time you finish. With happy hour, your hand rolls are half off, so the total comes to $62.50 before tax and tip.",
            textZh: "当然！你们吃完我就准备好。因为欢乐时光手卷半价，税和小费前一共62.50美元。",
            culturalNote: "美国餐厅账单通常不含税和小费，小费需另付，且有惯例比例。",
            commonMistake: {
              wrong: "I'll get that ready for you after you finish eat.",
              correct: "I'll get that ready for you after you finish.",
              explanation: "finish后面直接跟名词或动名词，无需加eat",
            },
            keyPhrases: [
              { en: "half off", zh: "半价" },
              { en: "before tax and tip", zh: "税和小费前" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure! With the happy hour discount, you're looking at $62.50 plus tax and tip. I'll have the check ready.",
                textZh: "好的！算上欢乐时光折扣，是62.50美元加税和小费。我把账单准备好。",
                actionHint: "准备付账",
                frequency: "common",
              },
              {
                textEn: "No problem — $62.50 before tax. The hand roll discount saved you a nice chunk!",
                textZh: "没问题——税前62.50美元。手卷折扣省了不少呢！",
                actionHint: "吃完就可以买单",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "No problem! I'll have it ready by the time you're done. With happy hour, your hand rolls are half off, so it's $62.50 before tax and tip.",
            formalityVariants: {
              casual:
                "No problem! I'll have it ready when you're finished. Happy hour means your hand rolls are half off, so total's $62.50 before tax and tip.",
              standard:
                "Of course! I'll have it ready by the time you finish. With happy hour, your hand rolls are half off, so the total comes to $62.50 before tax and tip.",
              formal:
                "Of course! I will ensure the check is prepared for you by the time you conclude your meal. Due to our happy hour promotion, your hand rolls have been discounted by fifty percent, bringing your subtotal to $62.50 before the inclusion of tax and gratuity.",
            },
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
              {
                textEn: "Lucky Dragon, how can I help you?",
                textZh: "福龙，请问有什么需要？",
                actionHint: "说明你要点外卖",
                frequency: "common",
              },
              {
                textEn: "Hi, pickup or delivery?",
                textZh: "你好，自取还是外送？",
                actionHint: "直接说自取或外送",
                frequency: "common",
              },
            ],
            localVariants: {
              "en-US": "Is this for dine-in, takeout, or delivery?",
              "en-GB": "Is this eat-in, collection, or delivery?",
              "en-AU": "Dine-in, takeaway, or delivery?",
            },
            casualVersion: "Thanks for calling Lucky Dragon. Dine-in, takeout, or delivery?",
            formalityVariants: {
              casual: "Thanks for calling Lucky Dragon. Dine-in, takeout, or delivery?",
              standard: "Thank you for calling Lucky Dragon. Is this for dine-in, takeout, or delivery?",
              formal: "Welcome to Lucky Dragon. May I ask if your order is for dine-in, takeout, or local delivery?",
            },
          },
          {
            speaker: "you",
            textEn: "Takeout, please. I'd like to place an order for pickup in about 30 minutes.",
            textZh: "自取。我想点外卖，大概30分钟后来取。",
            casualVersion: "Takeout. Wanna order for pickup in like 30 mins.",
            commonMistake: {
              wrong: "I want to place an order",
              correct: "I'd like to place an order",
              explanation: "“I want” 听起来不礼貌，用 “I'd like” 更委婉自然。",
            },
            formalityVariants: {
              casual: "Takeout. I wanna order for pickup in about 30 mins.",
              standard: "Takeout, please. I'd like to place an order for pickup in about 30 minutes.",
              formal:
                "Yes, this will be for takeout, please. I would like to place an order for collection in approximately 30 minutes.",
            },
          },
          {
            speaker: "them",
            role: "接线员",
            textEn: "Sure thing. What can I get for you?",
            textZh: "好的。您要点什么？",
            alternativeExpressions: [
              {
                textEn: "No problem! Go ahead with your order.",
                textZh: "没问题！请点吧。",
                actionHint: "开始报你想点的菜",
                frequency: "common",
              },
              {
                textEn: "Sounds good. What would you like to order?",
                textZh: "好的。您想点什么？",
                actionHint: "说出你要的菜",
                frequency: "occasional",
              },
            ],
            casualVersion: "Yep. What can I get ya?",
            formalityVariants: {
              casual: "Sure. What can I get for ya?",
              standard: "Sure thing. What can I get for you?",
              formal: "Certainly. How may I assist you with your order today?",
            },
          },
          {
            speaker: "you",
            textEn:
              "Can I get one Kung Pao chicken, one beef with broccoli, and two orders of fried rice? Oh, and an egg drop soup.",
            textZh: "来一份宫保鸡丁、一份西兰花牛肉、两份炒饭。对了，再加一份蛋花汤。",
            casualVersion:
              "Lemme get a Kung Pao chicken, a beef with broccoli, two fried rice. Oh, and an egg drop soup.",
            commonMistake: {
              wrong: "I want one Kung Pao chicken",
              correct: "Can I get one Kung Pao chicken",
              explanation: "“Can I get...” 是点餐常用句型，比 “I want” 礼貌。",
            },
            formalityVariants: {
              casual: "I'll take a Kung Pao chicken, a beef with broccoli, and two fried rice. Also, an egg drop soup.",
              standard:
                "Can I get one Kung Pao chicken, one beef with broccoli, and two orders of fried rice? Oh, and an egg drop soup.",
              formal:
                "I would like to order one Kung Pao chicken, one beef with broccoli, and two orders of fried rice, please. Additionally, an egg drop soup.",
            },
          },
          {
            speaker: "them",
            role: "接线员",
            textEn:
              "Got it. For the Kung Pao, mild, medium, or spicy? And the fried rice — regular, chicken, or shrimp?",
            textZh: "好的。宫保鸡丁要微辣、中辣还是特辣？炒饭要普通的、鸡肉的还是虾仁的？",
            keyPhrases: [
              { en: "mild", zh: "微辣" },
              { en: "medium", zh: "中辣" },
              { en: "spicy", zh: "特辣" },
            ],
            alternativeExpressions: [
              {
                textEn: "Okay! How spicy for the Kung Pao — mild, medium, or hot? And what kind of fried rice?",
                textZh: "好的！宫保鸡丁要多辣——微辣、中辣还是很辣？炒饭要什么的？",
                actionHint: "选辣度和炒饭口味",
                frequency: "common",
              },
              {
                textEn: "What heat level on the Kung Pao? And the rice — plain, chicken, or shrimp fried rice?",
                textZh: "宫保鸡丁辣度要多少？炒饭要白的、鸡肉的还是虾仁的？",
                actionHint: "告诉对方你的偏好",
                frequency: "occasional",
              },
            ],
            casualVersion: "Gotcha. Kung Pao: mild, medium, or spicy? Fried rice: just regular, chicken, or shrimp?",
            formalityVariants: {
              casual: "Okay. Kung Pao: mild, medium, or spicy? And for the fried rice, regular, chicken, or shrimp?",
              standard:
                "Got it. For the Kung Pao, mild, medium, or spicy? And the fried rice — regular, chicken, or shrimp?",
              formal:
                "Understood. For the Kung Pao chicken, would you prefer mild, medium, or spicy? And for the fried rice, would that be plain, with chicken, or with shrimp?",
            },
          },
          {
            speaker: "you",
            textEn: "Medium spice for the Kung Pao, and both fried rice with chicken, please.",
            textZh: "宫保鸡丁中辣，两份都要鸡肉炒饭。",
            casualVersion: "Medium for the Kung Pao, and both fried rice with chicken.",
            commonMistake: {
              wrong: "Kung Pao is medium spicy",
              correct: "Medium spice for the Kung Pao",
              explanation: "回答口味时直接说口味+菜名更自然，而非完整句子。",
            },
            formalityVariants: {
              casual: "Medium for the Kung Pao, and chicken for both fried rice.",
              standard: "Medium spice for the Kung Pao, and both fried rice with chicken, please.",
              formal:
                "I would prefer medium spice for the Kung Pao chicken, and both orders of fried rice with chicken, please.",
            },
          },
          {
            speaker: "them",
            role: "接线员",
            textEn:
              "Alright. Your total comes to $38.75. Would you like to pay now over the phone or when you pick up?",
            textZh: "好的。一共38.75美元。现在电话付款还是取的时候付？",
            commonMistake: {
              wrong: "You want pay now or when pick up?",
              correct: "Would you like to pay now or when you pick up?",
              explanation: "省略太多会显得不礼貌，要保留 Would you like to。",
            },
            keyPhrases: [
              { en: "over the phone", zh: "电话付款" },
              { en: "when you pick up", zh: "取的时候" },
            ],
            alternativeExpressions: [
              {
                textEn: "That's $38.75 total. Pay now with a card or at pickup — your choice.",
                textZh: "总共38.75美元。现在用卡付或者取的时候付——都可以。",
                actionHint: "选择付款时间",
                frequency: "common",
              },
              {
                textEn: "Your order is $38.75. Wanna give me a card number now, or pay when you come in?",
                textZh: "您的订单38.75美元。现在报卡号还是到了再付？",
                actionHint: "决定什么时候付款",
                frequency: "occasional",
              },
            ],
            casualVersion: "Okay. Total's $38.75. Wanna pay now or when you pick up?",
            formalityVariants: {
              casual: "Okay. Total's $38.75. Pay now or at pickup?",
              standard:
                "Alright. Your total comes to $38.75. Would you like to pay now over the phone or when you pick up?",
              formal:
                "Very well. Your grand total will be $38.75. Would you prefer to settle the payment over the phone at this time, or upon collection of your order?",
            },
          },
          {
            speaker: "you",
            textEn: "I'll pay when I pick up. What's the address again?",
            textZh: "取的时候付。地址再说一下？",
            casualVersion: "I'll just pay when I pick it up. What's the address again?",
            commonMistake: {
              wrong: "What is address?",
              correct: "What's the address?",
              explanation: "问特定信息时，前面常加 “the”，且常用缩写 “What's”。",
            },
            formalityVariants: {
              casual: "I'll pay at pickup. Address again?",
              standard: "I'll pay when I pick up. What's the address again?",
              formal: "I will pay upon collection, thank you. Could you please reiterate the address for me?",
            },
          },
          {
            speaker: "them",
            role: "接线员",
            textEn:
              "We're at 234 Main Street, between the bank and the shoe store. Your order will be ready in about 25 minutes. Name for the order?",
            textZh: "我们在主街234号，银行和鞋店中间。大概25分钟后好。请问订单名字？",
            commonMistake: {
              wrong: "What's name?",
              correct: "What's the name for the order?",
              explanation: "英文问句不能省略冠词和介词，否则听起来很突兀。",
            },
            keyPhrases: [{ en: "name for the order", zh: "订单名字" }],
            alternativeExpressions: [
              {
                textEn: "234 Main Street — you can't miss it. About 25 minutes. What name should I put on the order?",
                textZh: "主街234号——很好找。大概25分钟。订单用什么名字？",
                actionHint: "报你的名字",
                frequency: "common",
              },
              {
                textEn: "We're on Main between the bank and the shoe store. It'll be about half an hour. Name?",
                textZh: "我们在主街上，银行和鞋店之间。大概半小时。名字是？",
                actionHint: "说出你的姓",
                frequency: "occasional",
              },
            ],
            casualVersion: "We're at 234 Main. Between the bank and the shoe store. Ready in like 25. Name?",
            formalityVariants: {
              casual: "We're at 234 Main, between the bank and shoe store. Ready in like 25. Name for the order?",
              standard:
                "We're at 234 Main Street, between the bank and the shoe store. Your order will be ready in about 25 minutes. Name for the order?",
              formal:
                "Our establishment is located at 234 Main Street, situated between the bank and the shoe store. Your order should be prepared in approximately 25 minutes. May I have a name for the order, please?",
            },
          },
          {
            speaker: "you",
            textEn: "Wang. W-A-N-G. See you in 25 minutes!",
            textZh: "王。W-A-N-G。25分钟后见！",
            casualVersion: "Wang. W-A-N-G. See ya in 25!",
            formalityVariants: {
              casual: "Wang. W-A-N-G. See ya in 25!",
              standard: "Wang. W-A-N-G. See you in 25 minutes!",
              formal: "It's Wang. W-A-N-G. I look forward to collecting it in 25 minutes. Thank you.",
            },
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
            textEn:
              "Hi, this is your DoorDash driver. I'm at the building but I can't find the entrance. I'm on Oak Street side.",
            textZh: "你好，我是你的DoorDash配送员。我到楼下了但找不到入口。我在橡树街这边。",
            keyPhrases: [
              { en: "DoorDash driver", zh: "DoorDash配送员" },
              { en: "can't find the entrance", zh: "找不到入口" },
            ],
            vocabNotes: {
              DoorDash: {
                meaningInContext: "在这句话里表示：美国最流行的外卖配送平台之一",
                similarUsage: "类似用法：I ordered through Uber Eats.（我通过Uber Eats点的外卖）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Hey, it's your delivery driver. I'm outside but can't figure out how to get in. Which side is the entrance?",
                textZh: "你好，我是你的外卖员。在外面但不知道怎么进去。入口在哪边？",
                actionHint: "告诉配送员怎么走",
                frequency: "common",
              },
              {
                textEn: "Hi! Your DoorDash is here. I'm on Oak Street — where do I go from here?",
                textZh: "你好！你的DoorDash到了。我在橡树街——接下来怎么走？",
                actionHint: "给配送员指路",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Hey, your DoorDash driver. I'm at the building, but can't find the entrance. I'm on Oak Street.",
            commonMistake: {
              wrong: "I'm in the building but can't find the entrance.",
              correct: "I'm at the building but I can't find the entrance.",
              explanation: "at the building 指在建筑外部，in the building 指在建筑内部。",
            },
            formalityVariants: {
              casual: "Hey, your DoorDash driver. I'm at the building but can't find the entrance. I'm on Oak Street.",
              standard:
                "Hi, this is your DoorDash driver. I'm at the building but I can't find the entrance. I'm on Oak Street side.",
              formal:
                "Good afternoon, this is your DoorDash driver. I've arrived at the building but am having difficulty locating the main entrance. I'm currently positioned on the Oak Street side.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Hi! The main entrance is actually on Maple Avenue — the other side of the building. There's a glass door with a blue awning.",
            textZh: "你好！主入口其实在枫树大道那边——楼的另一面。有个蓝色遮阳篷的玻璃门。",
            casualVersion:
              "Oh hey! Main entrance is actually on Maple Ave — other side of the building. It's a glass door with a blue awning.",
            commonMistake: {
              wrong: "The main entrance is in Maple Avenue.",
              correct: "The main entrance is on Maple Avenue.",
              explanation: "街道名称前用介词 on。",
            },
            formalityVariants: {
              casual: "Oh hey! Main entrance is on Maple Ave — other side. Glass door, blue awning.",
              standard:
                "Hi! The main entrance is actually on Maple Avenue — the other side of the building. There's a glass door with a blue awning.",
              formal:
                "Hello! The primary entrance is located on Maple Avenue, which is situated on the opposing side of the building. You'll recognize it by a glass door beneath a blue awning.",
            },
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
              "buzzed in": {
                meaningInContext: "在这句话里表示：通过对讲系统远程开门让人进入",
                similarUsage: "类似用法：I'll buzz you in when you arrive.（你到了我帮你开门）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Found it! Can I come right in or is there a buzzer?",
                textZh: "找到了！可以直接进还是要按门铃？",
                actionHint: "告诉配送员怎么进",
                frequency: "common",
              },
              {
                textEn: "Got it! Is it a locked entrance? Should I ring someone?",
                textZh: "看到了！门锁着吗？需要按铃吗？",
                actionHint: "说明门禁情况",
                frequency: "occasional",
              },
            ],
            casualVersion: "Got it! Need a buzz, or can I just walk in?",
            culturalNote: "美国许多公寓或办公楼门禁系统需要通过'buzzer'按键让住户开门。这在中国较少见。",
            commonMistake: {
              wrong: "Do I need to ring bell in, or can I just walk up?",
              correct: "Do I need to be buzzed in, or can I just walk up?",
              explanation: "“按门铃让我进去”的自然表达是 to be buzzed in。",
            },
            formalityVariants: {
              casual: "Got it! Need a buzz, or can I just walk in?",
              standard: "Oh, I see it now! Do I need to be buzzed in, or can I just walk up?",
              formal:
                "Ah, I've located it! May I inquire if I require entry authorization via a buzzer, or if I may proceed directly inside?",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'll come down to meet you. I'm on the 5th floor, so give me two minutes. I'm wearing a red jacket.",
            textZh: "我下来接你。我在5楼，给我两分钟。我穿红色外套。",
            casualVersion: "I'll come down. I'm on the 5th floor, so give me 2 mins. Red jacket.",
            commonMistake: {
              wrong: "I'll go down to meet you.",
              correct: "I'll come down to meet you.",
              explanation: "来接人更常用 come down，而不是 go down。",
            },
            formalityVariants: {
              casual: "I'll be down in 2. 5th floor. Red jacket.",
              standard:
                "I'll come down to meet you. I'm on the 5th floor, so give me two minutes. I'm wearing a red jacket.",
              formal:
                "I'll descend to meet you shortly. I'm currently on the fifth floor, so kindly allow me two minutes. I'll be identifiable by a red jacket.",
            },
          },
          {
            speaker: "them",
            role: "配送员",
            textEn:
              "Sounds good, I'll wait by the door. Oh, just a heads up — the restaurant was out of Sprite, so they substituted it with 7-Up. Hope that's okay.",
            textZh: "好的，我在门口等。对了提醒一下——餐厅没有雪碧了，换成了七喜。希望没关系。",
            keyPhrases: [
              { en: "heads up", zh: "提前提醒" },
              { en: "out of", zh: "没有了/缺货" },
              { en: "substituted", zh: "替换了" },
            ],
            vocabNotes: {
              "heads up": {
                meaningInContext: "在这句话里表示：提前告知/友好的预先通知",
                similarUsage: "类似用法：Just a heads up, the meeting is moved to 3 PM.（提醒一下，会议改到下午3点）",
              },
            },
            literalMeaning: "\"heads up\" 字面意思是'抬起头'，实际表示'注意/提醒你一下'。",
            alternativeExpressions: [
              {
                textEn: "Cool, I'll be at the door. By the way, they were out of Sprite so they swapped it for 7-Up.",
                textZh: "好的，我在门口。对了，他们没有雪碧了所以换成了七喜。",
                actionHint: "如果不接受可以说明",
                frequency: "common",
              },
              {
                textEn: "I'll wait here. Oh and FYI — no more Sprite at the restaurant, so they gave you 7-Up instead.",
                textZh: "我在这等。还有告诉你一下——餐厅没有雪碧了，给你换成了七喜。",
                actionHint: "接受或后续联系退款",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Sounds good, I'll wait by the door. BTW, restaurant was out of Sprite, so they swapped it for 7-Up. Hope that's cool.",
            commonMistake: {
              wrong: "Restaurant has no Sprite, so they change it to 7-Up.",
              correct: "Restaurant was out of Sprite, so they substituted it with 7-Up.",
              explanation: "用 out of 指“没有存货”，substituted with 更正式地指“替换”。",
            },
            formalityVariants: {
              casual:
                "Cool, I'll wait by the door. Heads up—restaurant ran out of Sprite, swapped it for 7-Up. Hope that's okay.",
              standard:
                "Sounds good, I'll wait by the door. Oh, just a heads up — the restaurant was out of Sprite, so they substituted it with 7-Up. Hope that's okay.",
              formal:
                "Understood, I shall await your arrival by the door. I must inform you that the restaurant did not have Sprite available, and consequently, they provided 7-Up as a substitute. I trust this is acceptable.",
            },
          },
          {
            speaker: "you",
            textEn: "That's totally fine. Thank you for letting me know! I'm coming down now.",
            textZh: "完全没问题。谢谢你告诉我！我现在下来。",
            casualVersion: "Totally fine! Thanks for the heads up! Coming down now.",
            commonMistake: {
              wrong: "That is no problem. Thank you for telling me!",
              correct: "That's totally fine. Thank you for letting me know!",
              explanation: "totally fine 更口语自然，letting me know 比 telling me 更礼貌。",
            },
            formalityVariants: {
              casual: "All good! Thanks for telling me! Coming down.",
              standard: "That's totally fine. Thank you for letting me know! I'm coming down now.",
              formal:
                "That is perfectly acceptable. I appreciate you informing me of the change. I am making my way down presently.",
            },
          },
          {
            speaker: "them",
            role: "配送员",
            textEn:
              "Here you go! There should be two bags — one with the food and one with the drinks. Can you double-check that everything's there?",
            textZh: "给您！应该有两个袋子——一个装食物，一个装饮料。您确认一下东西齐不齐？",
            keyPhrases: [
              { en: "here you go", zh: "给你" },
              { en: "double-check", zh: "确认一下" },
            ],
            alternativeExpressions: [
              {
                textEn: "Here's your order. Mind checking it real quick?",
                textZh: "你的单。快看一下对不对？",
                actionHint: "打开检查一下",
                frequency: "common",
              },
            ],
            casualVersion:
              "Here ya go! Should be two bags — one food, one drinks. Can you just double-check everything's there?",
            commonMistake: {
              wrong: "Here is! Should be two bags—one food, one drink. Can you check if everything is there?",
              correct:
                "Here you go! There should be two bags — one with the food and one with the drinks. Can you double-check that everything's there?",
              explanation: "递东西说 Here you go。there should be 更自然。double-check 强调仔细检查。",
            },
            formalityVariants: {
              casual: "Here ya go! Two bags — food and drinks. Just double-check it all.",
              standard:
                "Here you go! There should be two bags — one with the food and one with the drinks. Can you double-check that everything's there?",
              formal:
                "Here is your order. It should comprise two separate bags: one containing the food items and the other for the beverages. Would you kindly confirm that all items are present?",
            },
          },
          {
            speaker: "you",
            textEn:
              "Let me see... Hmm, I ordered three containers but there are only two here. I think the beef with broccoli is missing.",
            textZh: "我看看……嗯，我点了三个盒饭但这里只有两个。西兰花牛肉好像少了。",
            casualVersion:
              "Lemme see... Huh, ordered three containers, only two here. Think the beef with broccoli's missing.",
            commonMistake: {
              wrong:
                "Let me see... Hmm, I ordered three dishes but there are only two here. I think the beef with broccoli is not here.",
              correct:
                "Let me see... Hmm, I ordered three containers but there are only two here. I think the beef with broccoli is missing.",
              explanation: "containers 指外卖盒更准确。missing 比 not here 更地道，指物品丢失或遗漏。",
            },
            formalityVariants: {
              casual: "Let me see... Hmm, ordered three, only two. Beef with broccoli's gone.",
              standard:
                "Let me see... Hmm, I ordered three containers but there are only two here. I think the beef with broccoli is missing.",
              formal:
                "Allow me to check... It appears I ordered three containers, yet only two are present. I believe the beef with broccoli is missing from this delivery.",
            },
          },
          {
            speaker: "them",
            role: "配送员",
            textEn:
              "Oh no, I'm sorry about that. You can report the missing item in the app and they'll give you a refund or credit. Or I can call the restaurant right now to see if they left it out by mistake.",
            textZh:
              "哦不好意思。您可以在App里报告缺少的餐品，他们会退款或给积分。或者我现在打电话给餐厅看看是不是忘了。",
            culturalNote: "美国外卖少件通常通过App解决，配送员责任有限。",
            keyPhrases: [
              { en: "report the missing item", zh: "报告缺少的餐品" },
              { en: "refund", zh: "退款" },
              { en: "credit", zh: "积分/抵扣" },
              { en: "left it out", zh: "漏掉了" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That's not good — sorry! You can get a refund through the app, or I can call the restaurant for you.",
                textZh: "这不好——抱歉！您可以通过App退款，或者我帮您打电话给餐厅。",
                actionHint: "选择处理方式",
                frequency: "common",
              },
              {
                textEn: "My bad! Best bet is to report it in the app for a quick refund. Want me to call them too?",
                textZh: "我的错！最好在App里报告，退款很快。要我也打电话给他们吗？",
                actionHint: "在App里操作最方便",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Oh no, my bad. You can just report it in the app for a refund/credit. Or, I can call the restaurant now to see if they forgot it.",
            commonMistake: {
              wrong:
                "Oh no, I'm sorry about that. You can report the lost item in the app and they'll give you money back or point.",
              correct:
                "Oh no, I'm sorry about that. You can report the missing item in the app and they'll give you a refund or credit.",
              explanation: "missing item 更地道。refund or credit 是外卖平台处理缺餐的标准做法。",
            },
            formalityVariants: {
              casual:
                "Shoot, my apologies. Just report it in the app for a refund/credit. Or, I can call the restaurant now about it.",
              standard:
                "Oh no, I'm sorry about that. You can report the missing item in the app and they'll give you a refund or credit. Or I can call the restaurant right now to see if they left it out by mistake.",
              formal:
                "My sincerest apologies regarding this oversight. You have the option to report the missing item within the application for a refund or account credit. Alternatively, I can contact the restaurant immediately to ascertain if it was inadvertently omitted.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'll report it in the app. Thank you for your help though — I'll make sure to give you a five-star rating!",
            textZh: "我在App里报告吧。不过还是谢谢你的帮忙——我一定给你五星好评！",
            culturalNote: "在美国外卖App中给配送员好评和小费是重要的礼仪。配送员的收入很大程度上依赖小费。",
            casualVersion:
              "I'll just report it in the app. Thanks for the help though — definitely giving you five stars!",
            commonMistake: {
              wrong:
                "I'll report it in the app. But thank you for your help — I will make sure to give you a five-star review!",
              correct:
                "I'll report it in the app. Thank you for your help though — I'll make sure to give you a five-star rating!",
              explanation: "though 放在句末更自然。rating 指星级评价，比 review 更常见于此类语境。",
            },
            formalityVariants: {
              casual: "I'll just report it on the app. Thanks for the help though! Five stars for sure!",
              standard:
                "I'll report it in the app. Thank you for your help though — I'll make sure to give you a five-star rating!",
              formal:
                "I will proceed with reporting it within the application. Nevertheless, I appreciate your assistance. Rest assured, I will provide you with a five-star rating.",
            },
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
            keyPhrases: [{ en: "name for your reservation", zh: "预订姓名" }],
            alternativeExpressions: [
              {
                textEn: "Welcome to La Maison. Do you have a reservation this evening?",
                textZh: "欢迎来到La Maison。今晚有预订吗？",
                actionHint: "报上你的姓名",
                frequency: "common",
              },
              {
                textEn: "Good evening, and welcome. May I ask the name on your booking?",
                textZh: "晚上好，欢迎光临。请问预订的姓名是？",
                actionHint: "告诉领位员你的名字",
                frequency: "occasional",
              },
            ],
            casualVersion: "Evening. Welcome to La Maison. Name for the reservation?",
            formalityVariants: {
              casual: "Evening. Welcome to La Maison. Name for the reservation?",
              standard: "Good evening. Welcome to La Maison. May I have the name for your reservation?",
              formal:
                "Good evening. Welcome to La Maison. Could I please have the name under which your reservation was made?",
            },
          },
          {
            speaker: "you",
            textEn: "Wang, party of two. We booked the 7 o'clock tasting menu.",
            textZh: "王，两位。我们订了7点的品鉴套餐。",
            casualVersion: "Wang, two people. Booked the 7 o'clock tasting menu.",
            commonMistake: {
              wrong: "I booked a table.",
              correct: "We booked a table / a reservation.",
              explanation: '中式英语常说 "book a table"，地道表达是 "make a reservation" 或 "book a reservation"。',
            },
            formalityVariants: {
              casual: "Wang, two people. Booked the 7 o'clock tasting menu.",
              standard: "Wang, party of two. We booked the 7 o'clock tasting menu.",
              formal: "Wang, a party of two. We have a reservation for the 7 o'clock tasting menu.",
            },
          },
          {
            speaker: "them",
            role: "领位员",
            textEn:
              "Ah yes, Mr. Wang. Right this way. Tonight's tasting menu is seven courses with an optional wine pairing. Your server Philippe will walk you through everything.",
            textZh: "好的，王先生。这边请。今晚的品鉴套餐是七道菜，可选配酒。您的服务员Philippe会为您详细介绍。",
            keyPhrases: [
              { en: "tasting menu", zh: "品鉴套餐" },
              { en: "seven courses", zh: "七道菜" },
              { en: "wine pairing", zh: "配酒" },
              { en: "walk you through", zh: "为您介绍" },
            ],
            vocabNotes: {
              "tasting menu": {
                meaningInContext: "在这句话里表示：由主厨设计的多道式固定套餐，每道分量小但精致",
                similarUsage: "类似用法：The tasting menu changes with the seasons.（品鉴套餐随季节变化）",
              },
              "wine pairing": {
                meaningInContext: "在这句话里表示：侍酒师为每道菜搭配一杯相配的葡萄酒",
                similarUsage: "类似用法：The wine pairing adds $85 per person.（配酒每人加85美元）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Mr. Wang, welcome. Follow me, please. You'll be having the seven-course tasting menu tonight. Philippe will take great care of you.",
                textZh: "王先生，欢迎。请跟我来。今晚是七道菜的品鉴套餐。Philippe会好好照顾您。",
                actionHint: "跟着领位员走",
                frequency: "common",
              },
              {
                textEn:
                  "We have your table ready, Mr. Wang. Tonight's seven courses are wonderful. Your server will explain everything.",
                textZh: "您的桌子准备好了，王先生。今晚的七道菜非常精彩。服务员会为您介绍一切。",
                actionHint: "入座等服务员来",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Ah yes, Mr. Wang. This way. Tonight's tasting menu's seven courses, optional wine pairing. Your server Philippe'll walk you through it all.",
            formalityVariants: {
              casual:
                "Ah yes, Mr. Wang. This way. Tonight's tasting menu's seven courses, optional wine pairing. Philippe'll walk you through it.",
              standard:
                "Ah yes, Mr. Wang. Right this way. Tonight's tasting menu is seven courses with an optional wine pairing. Your server Philippe will walk you through everything.",
              formal:
                "Indeed, Mr. Wang. Please follow me. This evening's tasting menu consists of seven courses, with an optional wine pairing. Your server, Philippe, will be delighted to provide a comprehensive overview.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Good evening! I'm Philippe, your server tonight. Before we begin, are there any allergies or dietary restrictions I should inform the kitchen about?",
            textZh: "晚上好！我是Philippe，今晚的服务员。在开始之前，有什么过敏或饮食限制需要我告知厨房的吗？",
            alternativeExpressions: [
              {
                textEn:
                  "Welcome! I'll be looking after you this evening. Any dietary needs or allergies I should know about?",
                textZh: "欢迎！今晚由我来服务。有什么饮食需求或过敏需要告诉我的吗？",
                actionHint: "如实告知即可",
                frequency: "common",
              },
              {
                textEn: "Good evening, I'm Philippe. Before we get started — any food allergies or restrictions?",
                textZh: "晚上好，我是Philippe。开始之前——有食物过敏或限制吗？",
                actionHint: "说明有无过敏",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Evening! I'm Philippe, your server. Before we start, any allergies or dietary restrictions I should tell the kitchen about?",
            commonMistake: {
              wrong: "Do you have any allergies?",
              correct: "Are there any allergies...?",
              explanation: '询问是否有过敏，用 "Are there any" 更委婉，不预设对方有过敏。',
            },
            formalityVariants: {
              casual: "Evening! I'm Philippe. Any allergies or dietary restrictions for the kitchen?",
              standard:
                "Good evening! I'm Philippe, your server tonight. Before we begin, are there any allergies or dietary restrictions I should inform the kitchen about?",
              formal:
                "Good evening! I am Philippe, and I will be your server this evening. Before we commence, may I inquire if there are any allergies or dietary restrictions of which the kitchen should be made aware?",
            },
          },
          {
            speaker: "you",
            textEn: "No allergies for either of us. We'd love to do the wine pairing. How does it work?",
            textZh: "我们都没有过敏。我们想配酒。怎么配的？",
            commonMistake: {
              wrong: "How does it work?",
              correct: "How does that work?",
              explanation: "指代'酒水搭配'时，用that work比it work更自然。",
            },
            casualVersion: "No allergies for us. We'd love to do the wine pairing. How's it work?",
            formalityVariants: {
              casual: "No allergies. We'd love the wine pairing. How's it work?",
              standard: "No allergies for either of us. We'd love to do the wine pairing. How does it work?",
              formal:
                "Neither of us has any allergies. We would be delighted to partake in the wine pairing. Could you please elaborate on how the pairing process functions?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Wonderful. Our sommelier has selected a different wine for each course — you'll receive a small pour with each dish. She'll explain the pairing when she presents each wine. The pairing is $95 per person. Shall I add it?",
            textZh:
              "太好了。我们的侍酒师为每道菜选了不同的酒——每道菜会配一小杯。她上酒时会解释搭配理由。配酒每人95美元。要加吗？",
            commonMistake: {
              wrong: "Do you want to add?",
              correct: "Would you like to add it?",
              explanation: "直接问Do you want to add不够礼貌，Would you like to add it更客气。",
            },
            keyPhrases: [
              { en: "sommelier", zh: "侍酒师" },
              { en: "a small pour", zh: "少量（一小杯）" },
              { en: "presents", zh: "呈上/介绍" },
            ],
            vocabNotes: {
              sommelier: {
                meaningInContext: "在这句话里表示：专业的葡萄酒侍酒师，负责酒单和配酒建议",
                similarUsage: "类似用法：Ask the sommelier for a recommendation.（请侍酒师推荐）",
              },
              pour: {
                meaningInContext: "在这句话里表示：倒出来的一杯酒（名词用法）",
                similarUsage: "类似用法：Can I get another pour of that Pinot?（再来一杯那个黑皮诺？）",
              },
            },
            culturalNote:
              "在高级西餐厅，侍酒师（sommelier）是非常专业的职位，持有国际认证。他们不仅推荐酒，还会讲解每款酒与菜品搭配的原因。",
            alternativeExpressions: [
              {
                textEn:
                  "Our sommelier curated a wine for each course — it's $95 per person. She'll walk you through each one. Interested?",
                textZh: "我们的侍酒师为每道菜精选了一款酒——每人95美元。她会逐一介绍。有兴趣吗？",
                actionHint: "决定是否加配酒",
                frequency: "common",
              },
              {
                textEn:
                  "The wine pairing is seven glasses matched to each course, $95 per person. It really elevates the experience.",
                textZh: "配酒是七杯酒对应七道菜，每人95美元。真的会提升用餐体验。",
                actionHint: "配酒能让体验更完整",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Great. Sommelier picked a different wine for each course — you'll get a small pour with each dish. She'll explain the pairing when she brings each wine. It's $95 a person. Wanna add it?",
            formalityVariants: {
              casual:
                "Great. Sommelier picked a different wine for each course — small pour with each dish. She'll explain the pairing when she brings it. It's $95 a person. Wanna add it?",
              standard:
                "Wonderful. Our sommelier has selected a different wine for each course — you'll receive a small pour with each dish. She'll explain the pairing when she presents each wine. The pairing is $95 per person. Shall I add it?",
              formal:
                "Excellent. Our sommelier has meticulously chosen a unique wine for each course, and you will receive a small pour to accompany each dish. She will provide a detailed explanation of the pairing as she presents each wine. The pairing is priced at $95 per person. Would you like me to add this to your experience?",
            },
          },
          {
            speaker: "you",
            textEn:
              "Yes, please add the pairing for both of us. This is actually our anniversary, so we want the full experience.",
            textZh: "好的，两个人都要配酒。今天是我们的结婚纪念日，想要完整的体验。",
            casualVersion:
              "Yeah, add the pairing for both of us. It's our anniversary, so we want the full experience.",
            commonMistake: {
              wrong: "This is our anniversary today.",
              correct: "This is our anniversary.",
              explanation: "中式英语常重复 'today'，'anniversary' 本身就含时间概念，无需重复。",
            },
            formalityVariants: {
              casual: "Yeah, add the pairing for both. It's our anniversary, so we want the full experience.",
              standard:
                "Yes, please add the pairing for both of us. This is actually our anniversary, so we want the full experience.",
              formal:
                "Yes, kindly add the pairing for both of us. This occasion marks our anniversary, and we are keen to fully immerse ourselves in the complete dining experience.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Happy anniversary! I'll let the kitchen and the sommelier know — we might have a little surprise for you later. Your first course will be out shortly: an amuse-bouche from Chef Laurent.",
            textZh:
              "结婚纪念日快乐！我会告诉厨房和侍酒师——稍后可能会有个小惊喜。第一道很快就来：Laurent主厨的开胃小点。",
            commonMistake: {
              wrong: "I will tell kitchen.",
              correct: "I'll inform the kitchen.",
              explanation: "inform the kitchen更正式和专业， tell kitchen sounds a bit too casual.",
            },
            keyPhrases: [
              { en: "amuse-bouche", zh: "开胃小点" },
              { en: "will be out shortly", zh: "很快就来" },
            ],
            vocabNotes: {
              "amuse-bouche": {
                meaningInContext: "在这句话里表示：主厨赠送的一口小食，用来在正餐前唤醒味蕾",
                similarUsage:
                  "类似用法：The amuse-bouche tonight is a chilled cucumber gazpacho.（今晚的开胃小点是冷黄瓜西班牙汤）",
              },
            },
            literalMeaning: "\"amuse-bouche\" 法语直译是'逗嘴巴开心'，指正式上菜前厨师赠送的一小口美食。",
            alternativeExpressions: [
              {
                textEn:
                  "Congratulations! I'll pass that along — we love celebrating special occasions. First up: a little something from the chef.",
                textZh: "恭喜！我会转达的——我们很喜欢庆祝特别的日子。先来一道主厨小食。",
                actionHint: "期待惊喜",
                frequency: "common",
              },
              {
                textEn:
                  "How wonderful — happy anniversary! We'll make tonight extra special. The amuse-bouche is on its way.",
                textZh: "太棒了——结婚纪念日快乐！今晚我们会让它格外特别。开胃小点马上来。",
                actionHint: "享受特别的夜晚",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Happy anniversary! I'll tell the kitchen and sommelier — might have a little surprise later. Your first course'll be out shortly: an amuse-bouche from Chef Laurent.",
            formalityVariants: {
              casual:
                "Happy anniversary! I'll tell the kitchen and sommelier — might have a little surprise later. First course'll be out shortly: amuse-bouche from Chef Laurent.",
              standard:
                "Happy anniversary! I'll let the kitchen and the sommelier know — we might have a little surprise for you later. Your first course will be out shortly: an amuse-bouche from Chef Laurent.",
              formal:
                "Happy anniversary! I shall inform both the kitchen and the sommelier, and we may have a small token of our appreciation for you later this evening. Your first course, an amuse-bouche from Chef Laurent, will be presented momentarily.",
            },
          },
          {
            speaker: "you",
            textEn: "How lovely! One question — should we use the utensils from the outside in?",
            textZh: "太好了！问一下——餐具是从外到里用吗？",
            culturalNote:
              "西式正餐礼仪中，餐具确实从最外侧开始用，每道菜用完换下一套。如果不确定，看服务员撤走哪套就行。",
            casualVersion: "Oh, nice! Quick question — we use the utensils from the outside in, right?",
            commonMistake: {
              wrong: "The knife and fork, use it from outside to inside?",
              correct: "Should we use the utensils from the outside in?",
              explanation: "'utensils' 是更自然的集合名词，表达顺序用 'from A to B'。",
            },
            formalityVariants: {
              casual: "Oh, nice! Quick question — we use the utensils from the outside in, right?",
              standard: "How lovely! One question — should we use the utensils from the outside in?",
              formal:
                "That's wonderful! May I ask a quick question regarding the proper use of the silverware – should we commence with the outermost utensils and proceed inwards?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Exactly right — start from the outside and work your way in. Don't worry though, we'll clear and reset between each course. Just enjoy the food and we'll take care of the rest.",
            textZh:
              "完全正确——从最外面开始往里用。不过不用担心，每道菜之间我们会清理和重新摆放。您只管享受美食，其他的交给我们。",
            keyPhrases: [
              { en: "work your way in", zh: "往里用" },
              { en: "clear and reset", zh: "清理和重新摆放" },
              { en: "take care of the rest", zh: "其他的交给我们" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That's right — outside in. But honestly, don't stress about it. We'll swap everything out between courses.",
                textZh: "没错——从外到里。不过真的别紧张。每道菜之间我们都会换新的餐具。",
                actionHint: "放松享受就好",
                frequency: "common",
              },
              {
                textEn: "Yes, start from the outer silverware. But we'll guide you — just relax and enjoy.",
                textZh: "是的，从最外面的餐具开始。我们会引导您——放松享受就好。",
                actionHint: "不用紧张，跟着服务员走",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep, exactly — outside in. Don't worry though, we'll clear and reset between courses. Just enjoy your food, we got the rest.",
            formalityVariants: {
              casual:
                "Yep, exactly — outside in. Don't worry, we'll clear and reset between courses. Just enjoy your food, we got the rest.",
              standard:
                "Exactly right — start from the outside and work your way in. Don't worry though, we'll clear and reset between each course. Just enjoy the food and we'll take care of the rest.",
              formal:
                "Precisely — you should commence with the outermost implements and progress inwards. However, please do not be concerned, as we will clear and reset the table between each course. Kindly focus on enjoying your meal, and we shall attend to all other details.",
            },
          },
          {
            speaker: "them",
            role: "侍酒师",
            textEn:
              "Good evening! I'm Marie, your sommelier tonight. For the first course — the seared scallop — I've paired a 2022 Chablis from Burgundy. Notice the minerality and crisp acidity — it complements the sweetness of the scallop beautifully.",
            textZh:
              "晚上好！我是Marie，今晚的侍酒师。配第一道菜——煎扇贝——我选了一支2022年勃艮第的夏布利。注意它的矿物感和清爽酸度——和扇贝的甜味非常搭配。",
            keyPhrases: [
              { en: "seared scallop", zh: "煎扇贝" },
              { en: "Chablis", zh: "夏布利" },
              { en: "minerality", zh: "矿物感" },
              { en: "crisp acidity", zh: "清爽酸度" },
              { en: "complements", zh: "搭配/相衬" },
            ],
            vocabNotes: {
              minerality: {
                meaningInContext: "在这句话里表示：葡萄酒中类似矿石、石灰岩的风味",
                similarUsage: "类似用法：This Riesling has a lovely minerality.（这款雷司令有很好的矿物感）",
              },
              complements: {
                meaningInContext: "在这句话里表示：与食物味道相互衬托、搭配和谐",
                similarUsage: "类似用法：The sauce complements the fish perfectly.（酱汁与鱼完美搭配）",
              },
            },
            culturalMeaning: "侍酒师介绍酒时提到的'矿物感'、'酸度'等是品酒术语。点头表示理解就行，不需要装作很懂酒。",
            alternativeExpressions: [
              {
                textEn:
                  "For the scallop, I've chosen a Chablis — its bright acidity is a perfect match for the sweetness of the seafood.",
                textZh: "配扇贝我选了一支夏布利——明亮的酸度和海鲜的甜味是完美搭配。",
                actionHint: "品尝时注意酸度",
                frequency: "common",
              },
              {
                textEn:
                  "This Chablis has a lovely mineral quality that pairs wonderfully with seared scallop. Take a sip and see.",
                textZh: "这款夏布利有很好的矿物质感，和煎扇贝搭配非常出色。尝一口试试。",
                actionHint: "先喝一口再吃",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Evening! Marie, your sommelier. For the first course — seared scallop — paired a 2022 Chablis from Burgundy. Notice the minerality and crisp acidity — it complements the scallop's sweetness perfectly.",
            formalityVariants: {
              casual:
                "Evening! Marie, your sommelier. First course, seared scallop — paired a 2022 Chablis from Burgundy. Notice the minerality and crisp acidity — complements the scallop's sweetness perfectly.",
              standard:
                "Good evening! I'm Marie, your sommelier tonight. For the first course — the seared scallop — I've paired a 2022 Chablis from Burgundy. Notice the minerality and crisp acidity — it complements the sweetness of the scallop beautifully.",
              formal:
                "Good evening! I am Marie, and I will be your sommelier this evening. For the inaugural course — the seared scallop — I have selected a 2022 Chablis from Burgundy. I invite you to note its pronounced minerality and crisp acidity, which beautifully enhance the inherent sweetness of the scallop.",
            },
          },
          {
            speaker: "you",
            textEn:
              "That's beautiful — I can really taste the pairing. The acidity cuts through the richness perfectly. Thank you, Marie.",
            textZh: "太棒了——真的能尝出搭配的妙处。酸度完美地化解了扇贝的油脂感。谢谢你，Marie。",
            commonMistake: {
              wrong: "It's wonderful.",
              correct: "That's wonderful.",
              explanation: "That's wonderful指代对方的解说和酒水，更自然。",
            },
            casualVersion:
              "That's awesome — can really taste the pairing. Acidity cuts through the richness perfectly. Thanks, Marie.",
            formalityVariants: {
              casual:
                "That's awesome — can really taste the pairing. Acidity cuts through the richness perfectly. Thanks, Marie.",
              standard:
                "That's beautiful — I can really taste the pairing. The acidity cuts through the richness perfectly. Thank you, Marie.",
              formal:
                "That is exquisite — I can truly appreciate the thoughtful pairing. The acidity masterfully cuts through the richness. Thank you immensely, Marie.",
            },
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
            casualVersion: "Hey, I got a reservation for 8 PM tonight. Just wanna check, is there a dress code?",
            commonMistake: {
              wrong: "Do you have a dress code?",
              correct: "Is there a dress code?",
              explanation: "询问是否有特定规则时，用'Is there' 比 'Do you have' 更自然。",
            },
            formalityVariants: {
              casual: "Got a res for 8 tonight. Dress code?",
              standard:
                "Hello, I have a reservation for tonight at 8 PM. I just wanted to check — is there a dress code?",
              formal:
                "Good evening. I have a reservation under my name for 8 o'clock this evening. May I inquire if there is a particular dress code in effect?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Yes, we are smart casual. Collared shirts for gentlemen — no shorts, sneakers, or flip-flops. For ladies, anything from a nice blouse to a cocktail dress works. Jackets are appreciated but not required.",
            textZh:
              "有的，我们是smart casual。男士需要有领衬衫——不可以穿短裤、运动鞋或拖鞋。女士从精致衬衫到小礼裙都可以。夹克推荐但不强制。",
            keyPhrases: [
              { en: "smart casual", zh: "精致休闲" },
              { en: "collared shirts", zh: "有领衬衫" },
              { en: "flip-flops", zh: "拖鞋/人字拖" },
              { en: "cocktail dress", zh: "小礼裙" },
              { en: "appreciated but not required", zh: "推荐但不强制" },
            ],
            vocabNotes: {
              "smart casual": {
                meaningInContext: "在这句话里表示：介于正式和休闲之间的着装风格",
                similarUsage:
                  "类似用法：The event is smart casual — no need for a tie.（活动着装是精致休闲——不需要系领带）",
              },
            },
            localVariants: {
              "en-US": "Business casual or smart casual. No sneakers or flip-flops.",
              "en-GB": "Smart casual. No trainers or open-toed shoes, please.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "We're smart casual — a nice shirt and pants for men, no athletic wear. Ladies, a blouse or dress is perfect.",
                textZh: "我们是精致休闲——男士穿好一点的衬衫和长裤，不要运动服。女士穿衬衫或裙子就行。",
                actionHint: "按要求穿搭即可",
                frequency: "common",
              },
              {
                textEn: "Just dress nicely — button-down, no sneakers or shorts. You'll be fine.",
                textZh: "穿得体一点就行——扣子衬衫，不穿运动鞋和短裤。没问题的。",
                actionHint: "不用太紧张",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep, we're smart casual. Guys need collared shirts — no shorts, sneakers, or flip-flops. For ladies, anything from a nice blouse to a cocktail dress works. Jackets are cool but not required.",
            culturalNote: "Smart casual着装要求在西方很常见，但在中国可能不普遍。",
            formalityVariants: {
              casual:
                "Yeah, smart casual. Collared shirts for men, no shorts or flip-flops. Ladies, nice blouse to cocktail dress is fine. Jackets are welcome but not a must.",
              standard:
                "Yes, we are smart casual. Collared shirts for gentlemen — no shorts, sneakers, or flip-flops. For ladies, anything from a nice blouse to a cocktail dress works. Jackets are appreciated but not required.",
              formal:
                "Indeed, our dress code is smart casual. For gentlemen, a collared shirt is required, and we kindly request no shorts, athletic sneakers, or open-toed sandals. For ladies, appropriate attire ranges from an elegant blouse to a cocktail dress. While a jacket is appreciated, it is not strictly mandatory.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. I have a button-down shirt and dress shoes — should be fine, right?",
            textZh: "明白了。我有一件扣领衬衫和皮鞋——应该没问题吧？",
            casualVersion: "Gotcha. I've got a button-down shirt and dress shoes — that'll be fine, right?",
            commonMistake: {
              wrong: "I understand it.",
              correct: "Got it.",
              explanation: "中国人常说'我理解它'。'Got it' 更简洁自然，表示理解。",
            },
            formalityVariants: {
              casual: "Got it. Button-down and dress shoes — good to go?",
              standard: "Got it. I have a button-down shirt and dress shoes — should be fine, right?",
              formal:
                "I understand. I possess a button-down shirt and dress shoes — I presume that would be perfectly acceptable, correct?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "That's perfect. We look forward to seeing you tonight, Mr. Wang.",
            textZh: "完全没问题。今晚等您来，王先生。",
            commonMistake: {
              wrong: "No problem.",
              correct: "That's absolutely fine.",
              explanation: "在餐厅这种环境下，That's fine比No problem听起来更专业和礼貌。",
            },
            alternativeExpressions: [
              {
                textEn: "That sounds great! See you at 8, Mr. Wang.",
                textZh: "听起来很好！8点见，王先生。",
                actionHint: "准备好出门",
                frequency: "common",
              },
              {
                textEn: "Absolutely fine. We'll have everything ready for you tonight.",
                textZh: "完全没问题。今晚一切都会为您准备好。",
                actionHint: "按时到达即可",
                frequency: "occasional",
              },
            ],
            casualVersion: "Perfect. See ya tonight, Mr. Wang.",
            formalityVariants: {
              casual: "Perfect. See you tonight, Mr. Wang.",
              standard: "That's perfect. We look forward to seeing you tonight, Mr. Wang.",
              formal:
                "That will be perfectly suitable. We very much look forward to welcoming you this evening, Mr. Wang.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. One more thing — we might be a few minutes late. Will that be a problem?",
            textZh: "谢谢。还有一件事——我们可能会晚几分钟。有问题吗？",
            casualVersion: "Thanks. Hey, one more thing — we might be a few min late. Is that cool?",
            commonMistake: {
              wrong: "Is there a problem?",
              correct: "Will that be a problem?",
              explanation: "直接问 'Is there a problem?' 可能听起来像指责，'Will that be a problem?' 询问影响。",
            },
            formalityVariants: {
              casual: "Thanks. Quick question, we might be a little late. Is that okay?",
              standard: "Thank you. One more thing — we might be a few minutes late. Will that be a problem?",
              formal:
                "Thank you. If I may, I have one more query: we anticipate running a few minutes behind schedule. Would that present any inconvenience?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "We hold reservations for 15 minutes. If you're running later than that, please call us and we'll do our best to accommodate you. After 15 minutes without notice, we may release the table.",
            textZh:
              "我们会保留15分钟。如果超过15分钟请打电话，我们会尽量安排。超过15分钟未联系的话，我们可能会把桌子让出去。",
            keyPhrases: [
              { en: "hold reservations", zh: "保留预订" },
              { en: "running late", zh: "会迟到" },
              { en: "accommodate", zh: "安排/照顾" },
              { en: "release the table", zh: "让出桌位" },
            ],
            vocabNotes: {
              accommodate: {
                meaningInContext: "在这句话里表示：尽量满足你的需求、做出安排",
                similarUsage: "类似用法：Can you accommodate a party of 10?（能安排10个人的位置吗？）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "We can hold your table for about 15 minutes. Just give us a call if you'll be later than that.",
                textZh: "我们可以保留您的桌子大约15分钟。如果会更晚，请打个电话。",
                actionHint: "尽量准时到",
                frequency: "common",
              },
              {
                textEn:
                  "No worries for a few minutes. But if it's more than 15, just ring us so we don't give the table away.",
                textZh: "晚几分钟没关系。但超过15分钟的话请打电话，免得我们把桌子让给别人了。",
                actionHint: "迟到就打电话",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "We hold tables for 15. If you're gonna be later, just give us a call, and we'll try to work with ya. No call after 15 mins, and we might give the table away.",
            culturalNote: "许多西方餐厅对预订有严格的保留时限，通常是15分钟。",
            formalityVariants: {
              casual:
                "We hold reservations for 15. If you're later, just call, we'll try to seat you. After 15 without a call, we might give up the table.",
              standard:
                "We hold reservations for 15 minutes. If you're running later than that, please call us and we'll do our best to accommodate you. After 15 minutes without notice, we may release the table.",
              formal:
                "We honor reservations for a period of 15 minutes. Should you anticipate a delay beyond that timeframe, we kindly request a phone call, and we will endeavor to accommodate you. Reservations exceeding 15 minutes without prior notification may, regrettably, result in the release of the table.",
            },
          },
          {
            speaker: "you",
            textEn: "We'll be there on time. See you at 8!",
            textZh: "我们会准时到。8点见！",
            commonMistake: {
              wrong: "We will punctual.",
              correct: "We'll be on time.",
              explanation: "be punctual 是形容词，通常说 be on time 更自然。",
            },
            casualVersion: "We'll be on time. See ya at 8!",
            formalityVariants: {
              casual: "We'll be on time. See ya at 8!",
              standard: "We'll be there on time. See you at 8!",
              formal: "We shall ensure our timely arrival. We look forward to seeing you promptly at 8 o'clock.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Welcome back. Before we start, I'd like to place your napkin for you. If you need to step away during the meal, you can place your napkin on the chair — we'll refold it for you.",
            textZh:
              "欢迎。在开始之前，我帮您放好餐巾。如果用餐期间需要离开，把餐巾放在椅子上就好——我们会帮您重新叠好。",
            keyPhrases: [
              { en: "napkin", zh: "餐巾" },
              { en: "step away", zh: "暂时离开" },
              { en: "refold", zh: "重新叠好" },
            ],
            culturalNote:
              "在高级西餐厅，离开座位时把餐巾放椅子上表示你还会回来。把餐巾放桌上表示用餐结束。服务员看到椅子上的餐巾会帮你重新叠好。",
            alternativeExpressions: [
              {
                textEn:
                  "Let me set your napkin. If you get up during dinner, just leave it on your chair and we'll take care of it.",
                textZh: "我帮您放好餐巾。用餐中途起身的话把餐巾放椅子上就行，我们会处理。",
                actionHint: "了解餐巾礼仪",
                frequency: "common",
              },
              {
                textEn: "Here's your napkin. Quick tip — chair means you're coming back, table means you're done.",
                textZh: "这是您的餐巾。小提示——放椅子上表示还会回来，放桌上表示用完了。",
                actionHint: "记住这个小规则",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Welcome back. Lemme get your napkin. If you need to step out during the meal, just put your napkin on the chair — we'll fold it for ya.",
            formalityVariants: {
              casual: "Welcome back. I'll get your napkin. If you leave, put it on your chair, we'll refold it.",
              standard:
                "Welcome back. Before we start, I'd like to place your napkin for you. If you need to step away during the meal, you can place your napkin on the chair — we'll refold it for you.",
              formal:
                "Welcome back. Prior to commencing, allow me the pleasure of placing your napkin for you. Should you need to excuse yourself during your meal, simply place your napkin on your chair, and we shall thoughtfully refold it for your return.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you! Excuse me — I accidentally knocked over my water glass. I'm so sorry.",
            textZh: "谢谢！不好意思——我不小心打翻了水杯。真的很抱歉。",
            casualVersion: "Oh, thanks! Whoops, sorry! I just knocked over my water. My bad!",
            commonMistake: {
              wrong: "I knocked down my water glass.",
              correct: "I knocked over my water glass.",
              explanation: "打翻杯子用 'knocked over'。'knocked down' 通常指打倒人或建筑物。",
            },
            formalityVariants: {
              casual: "Thanks! Whoops — I spilled my water. So sorry!",
              standard: "Thank you! Excuse me — I accidentally knocked over my water glass. I'm so sorry.",
              formal:
                "Thank you very much! My apologies — I have inadvertently overturned my water glass. Please accept my sincerest regrets.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Please don't worry at all — it happens! I'll have this cleaned up in just a moment. Let me get you a fresh glass and reset the table. Is everything okay? No water on your clothes?",
            textZh: "完全不用担心——常有的事！我马上清理。给您换一杯新的，重新摆好桌子。没事吧？衣服没沾到水吧？",
            commonMistake: {
              wrong: "You okay?",
              correct: "Are you alright?",
              explanation: "在餐厅语境下，Are you alright? 比 You okay? 更礼貌。",
            },
            keyPhrases: [
              { en: "don't worry at all", zh: "完全不用担心" },
              { en: "cleaned up", zh: "清理" },
              { en: "fresh glass", zh: "新杯子" },
              { en: "reset the table", zh: "重新摆好桌子" },
            ],
            alternativeExpressions: [
              {
                textEn: "No problem at all! Accidents happen. Let me take care of it.",
                textZh: "没关系！意外总会有的。交给我吧。",
                actionHint: "不用紧张，等服务员处理",
                frequency: "common",
              },
              {
                textEn:
                  "Don't give it a second thought! I'll have this sorted in a moment. Everything dry on your end?",
                textZh: "完全不用在意！我马上收拾好。您那边没弄湿吧？",
                actionHint: "说明自己没事",
                frequency: "occasional",
              },
            ],
            culturalMeaning:
              "高级餐厅的服务员会非常优雅地处理这种情况，让客人不觉得尴尬。这是'fine dining'服务的一部分——让客人永远感到舒适。",
            casualVersion:
              "No worries at all — seriously, it happens! I'll get this cleaned up in a sec. Get you a fresh glass, reset the table. You okay? Clothes alright?",
            formalityVariants: {
              casual:
                "Don't worry, it happens! I'll clean it right up. Fresh glass, reset the table. Are you alright? No water on your clothes?",
              standard:
                "Please don't worry at all — it happens! I'll have this cleaned up in just a moment. Let me get you a fresh glass and reset the table. Is everything okay? No water on your clothes?",
              formal:
                "Please do not be concerned whatsoever — such occurrences are quite common. I shall have this attended to and promptly cleaned in just a moment. Allow me to retrieve a fresh glass and reset your table. May I inquire if you are perfectly alright? And are your garments clear of any water?",
            },
          },
          {
            speaker: "you",
            textEn: "I'm fine, thank you. You handled that so gracefully — great service!",
            textZh: "没事，谢谢。你处理得太优雅了——服务真好！",
            casualVersion: "I'm good, thanks. Wow, you handled that so well — awesome service!",
            commonMistake: {
              wrong: "Your service is very good!",
              correct: "Great service!",
              explanation: "直接说 'Your service is good' 稍显生硬，'Great service!' 更自然地表达赞美。",
            },
            formalityVariants: {
              casual: "I'm fine, thanks. You handled that so great — awesome service!",
              standard: "I'm fine, thank you. You handled that so gracefully — great service!",
              formal:
                "I am perfectly fine, thank you. I must commend you on how exceptionally gracefully you managed that situation — truly excellent service!",
            },
          },
        ],
      },
    ],
  },
];
