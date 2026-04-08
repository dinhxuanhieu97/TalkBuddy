import type { PresetScene } from "../scene-types";

// ============================================================
// 机场场景 — Airport Scenes
// 覆盖：值机、安检、入境海关、行李问题、登机、转机、免税店、贵宾室、航班延误、海关申报
// ============================================================

export const AIRPORT_SCENES: PresetScene[] = [
  // ==================== 机场值机 ====================
  {
    id: "airport-checkin",
    category: "airport",
    titleZh: "机场值机",
    titleEn: "Airport Check-in",
    description: "到达机场后办理值机手续，包括选座、托运行李等",
    otherRole: "值机柜台工作人员",
    otherRoleIcon: "plane",
    flows: [
      {
        id: "standard",
        titleZh: "标准值机",
        titleEn: "Standard Check-in",
        description: "有机票、正常托运行李、选座",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to check in for my flight to Tokyo.",
            textZh: "你好，我想办理去东京的航班值机。",
            casualVersion: "Hey, checking in for the Tokyo flight.",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Sure! May I see your passport and booking confirmation?",
            textZh: "好的！请出示您的护照和订票确认。",
            variations: [
              { textEn: "Of course. Passport, please. And do you have your booking reference?", textZh: "当然。请出示护照。有订票号码吗？" },
            ],
            keyPhrases: [
              { en: "passport", zh: "护照" },
              { en: "booking confirmation", zh: "订票确认" },
              { en: "booking reference", zh: "订票号码" },
            ],
            alternativeExpressions: [
              { textEn: "Can I get your passport and confirmation number?", textZh: "能给我您的护照和确认号吗？", actionHint: "递上护照和确认信息", frequency: "common" },
              { textEn: "Passport and booking details, please.", textZh: "请出示护照和订票信息。", actionHint: "简短要求出示证件", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here you go.",
            textZh: "给您。",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Thank you. Do you have a seating preference? Window, middle, or aisle?",
            textZh: "谢谢。您有座位偏好吗？靠窗、中间还是靠过道？",
            keyPhrases: [
              { en: "seating preference", zh: "座位偏好" },
              { en: "window", zh: "靠窗" },
              { en: "middle", zh: "中间" },
              { en: "aisle", zh: "靠过道" },
            ],
            alternativeExpressions: [
              { textEn: "Any preference on seating — window or aisle?", textZh: "座位有偏好吗——靠窗还是过道？", actionHint: "说出座位偏好", frequency: "common" },
              { textEn: "Would you like a window seat or an aisle?", textZh: "您想要靠窗还是靠过道的座位？", actionHint: "二选一即可", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "A window seat, please.",
            textZh: "靠窗的，谢谢。",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "I have a window seat in row 23. How many bags are you checking in?",
            textZh: "23排有一个靠窗座位。您有几件行李要托运？",
            keyPhrases: [
              { en: "row", zh: "排" },
              { en: "checking in", zh: "托运" },
              { en: "how many bags", zh: "几件行李" },
            ],
            alternativeExpressions: [
              { textEn: "You're in 23A, window. Any bags to check?", textZh: "您在23A靠窗。有行李要托运吗？", actionHint: "告知行李数量", frequency: "common" },
              { textEn: "Row 23 by the window. How many pieces of luggage are you checking?", textZh: "23排靠窗。您要托运几件行李？", actionHint: "回答行李件数", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Just one suitcase.",
            textZh: "就一个箱子。",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Please place it on the scale... That's 22 kilos, within the limit. Here's your boarding pass. Gate B12, boarding starts at 2:30 PM.",
            textZh: "请放到秤上……22公斤，没有超重。给您登机牌。B12登机口，下午2:30开始登机。",
            keyPhrases: [
              { en: "scale", zh: "秤" },
              { en: "within the limit", zh: "没有超重" },
              { en: "boarding pass", zh: "登机牌" },
              { en: "gate", zh: "登机口" },
              { en: "boarding starts", zh: "开始登机" },
            ],
            alternativeExpressions: [
              { textEn: "Pop it on the belt... 22 kilos, you're good. Here's your boarding pass — Gate B12, boards at 2:30.", textZh: "放上传送带……22公斤，没问题。给您登机牌——B12登机口，2:30登机。", actionHint: "记住登机口和时间", frequency: "common" },
              { textEn: "Let me weigh that... All good, under the limit. Your gate is B12, boarding at half past two.", textZh: "我称一下……没问题，没超重。您的登机口是B12，两点半登机。", actionHint: "留意登机时间", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is my flight on time?",
            textZh: "航班准点吗？",
            casualVersion: "The flight still on time?",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Yes, it's on schedule. Have a nice flight!",
            textZh: "是的，准点。祝您旅途愉快！",
            keyPhrases: [
              { en: "on schedule", zh: "准点" },
              { en: "have a nice flight", zh: "旅途愉快" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, right on time. Have a great trip!", textZh: "是的，准点。祝旅途愉快！", actionHint: "准备去登机口", frequency: "common" },
              { textEn: "Everything's on time. Safe travels!", textZh: "一切准时。一路平安！", actionHint: "可以出发了", frequency: "common" },
            ],
          },
        ],
      },

      // --- Flow 2: 行李超重 ---
      {
        id: "overweight",
        titleZh: "行李超重",
        titleEn: "Overweight Luggage",
        description: "托运行李超过重量限制",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to check in for flight AA208 to Los Angeles.",
            textZh: "你好，我要办理去洛杉矶的 AA208 航班值机。",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Passport, please... Thank you. How many bags to check?",
            textZh: "请出示护照……谢谢。几件行李要托运？",
            alternativeExpressions: [
              { textEn: "Can I see your passport? Great. Any bags to check in today?", textZh: "能看一下护照吗？好的。今天有行李要托运吗？", actionHint: "回答行李数量", frequency: "common" },
              { textEn: "Passport, please... All right. How many bags are you checking?", textZh: "护照请给我……好的。您要托运几件行李？", actionHint: "告知行李件数", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Two suitcases.",
            textZh: "两个箱子。",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Please put the first one on the scale... This one is 28 kilos. I'm afraid the limit is 23 kilos. You'll need to remove about 5 kilos, or there's an excess baggage fee of $75.",
            textZh: "请把第一个放到秤上……这个28公斤。很抱歉，限重23公斤。您需要拿掉大约5公斤，或者交75美元的超重行李费。",
            keyPhrases: [
              { en: "the limit is", zh: "限重是" },
              { en: "remove", zh: "拿掉" },
              { en: "excess baggage fee", zh: "超重行李费" },
            ],
            isBranchPoint: true,
            responseTip: "可以选择拿出一些东西，或者付超重费",
            alternativeExpressions: [
              { textEn: "Hmm, this one's 28 kilos — 5 over the limit. You can either take some stuff out or pay the $75 overweight fee.", textZh: "嗯，这个28公斤——超了5公斤。您可以拿些东西出来，或者交75美元的超重费。", actionHint: "决定减重还是付费", frequency: "common" },
              { textEn: "It's overweight, I'm afraid. 28 kilos against a 23-kilo limit. There's a $75 charge, or you can repack.", textZh: "恐怕超重了。28公斤，限重23公斤。可以付75美元，或者重新整理行李。", actionHint: "选择付费或重新打包", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll move some things to my carry-on. Can I open it here?",
            textZh: "我把一些东西移到手提行李里。可以在这里打开吗？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Sure, go ahead. Just step to the side so other passengers can pass.",
            textZh: "可以。请到旁边去，这样其他旅客可以通过。",
            keyPhrases: [
              { en: "carry-on", zh: "手提行李" },
              { en: "step to the side", zh: "到旁边" },
            ],
            alternativeExpressions: [
              { textEn: "No problem. Just move over there so we can keep the line moving.", textZh: "没问题。请到那边去，这样队伍可以继续。", actionHint: "到旁边整理行李", frequency: "common" },
              { textEn: "Of course. Use the repacking area right behind you.", textZh: "当然可以。用您身后的重新打包区域。", actionHint: "找到打包区域", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, I'm done. Can you weigh it again?",
            textZh: "好了。能再称一下吗？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Let's see... 22.5 kilos. That's fine now. And the second bag?",
            textZh: "看看……22.5公斤。这下没问题了。第二个箱子呢？",
            alternativeExpressions: [
              { textEn: "22.5 — perfect, that's under. Let's do the other one.", textZh: "22.5——没问题，没超。我们称另一个吧。", actionHint: "把第二个箱子放上去", frequency: "common" },
              { textEn: "That's within the limit now. Can I see your second bag?", textZh: "现在没超重了。第二个箱子给我看看？", actionHint: "准备第二个箱子", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "This one should be lighter.",
            textZh: "这个应该轻一些。",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "18 kilos, no problem. Here's your boarding pass. Gate C5, boarding at 4:15. Please note, your second bag has a separate tag — make sure to claim both at baggage carousel.",
            textZh: "18公斤，没问题。给您登机牌。C5登机口，4:15登机。注意，第二个箱子有单独的标签——到达时两个都要取。",
            keyPhrases: [
              { en: "separate tag", zh: "单独标签" },
              { en: "claim", zh: "领取" },
              { en: "baggage carousel", zh: "行李转盘" },
            ],
            alternativeExpressions: [
              { textEn: "All good — 18 kilos. Here's your pass. Gate C5, boards at 4:15. Don't forget you have two bags to pick up at the carousel.", textZh: "没问题——18公斤。给您登机牌。C5登机口，4:15登机。别忘了在转盘上取两件行李。", actionHint: "记住取两件行李", frequency: "common" },
              { textEn: "That one's fine. You're all checked in. Both bags are tagged separately, so grab them both when you land.", textZh: "这个没问题。您都办好了。两个箱子分别贴了标签，落地时都要取。", actionHint: "注意两个行李标签", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 过安检 ====================
  {
    id: "airport-security",
    category: "airport",
    titleZh: "过安检",
    titleEn: "Security Check",
    description: "通过机场安检，包括物品检查、身体检查等",
    otherRole: "安检人员",
    otherRoleIcon: "shield",
    flows: [
      {
        id: "standard",
        titleZh: "标准安检",
        titleEn: "Standard Security Screening",
        description: "正常过安检的流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "安检",
            textEn: "Please place your bag on the belt and remove any laptops, liquids, and large electronics from your bag.",
            textZh: "请把包放到传送带上，把笔记本电脑、液体和大型电子设备拿出来。",
            keyPhrases: [
              { en: "belt", zh: "传送带" },
              { en: "remove", zh: "拿出来" },
              { en: "laptops", zh: "笔记本电脑" },
              { en: "liquids", zh: "液体" },
              { en: "electronics", zh: "电子设备" },
            ],
            alternativeExpressions: [
              { textEn: "Bag on the belt, please. Laptops and liquids out in a separate tray.", textZh: "包放传送带上。笔记本和液体单独放托盘里。", actionHint: "分开放电子设备和液体", frequency: "common" },
              { textEn: "Everything in the bin. Take out your laptop, any bottles, and large electronics.", textZh: "所有东西放箱子里。把笔记本、瓶子和大型电子设备拿出来。", actionHint: "按要求分类放置", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do I need to take off my shoes?",
            textZh: "需要脱鞋吗？",
          },
          {
            speaker: "them",
            role: "安检",
            textEn: "Yes, please remove your shoes and belt and place them in a tray.",
            textZh: "是的，请脱鞋和解下腰带，放在托盘里。",
            keyPhrases: [
              { en: "remove your shoes", zh: "脱鞋" },
              { en: "belt", zh: "腰带" },
              { en: "tray", zh: "托盘" },
            ],
            culturalNote: "在美国 TSA 安检通常要求脱鞋，其他国家不一定。",
            alternativeExpressions: [
              { textEn: "Shoes and belt off, please. Put them in the bin.", textZh: "请脱鞋解腰带，放进箱子里。", actionHint: "脱鞋解腰带放托盘", frequency: "common" },
              { textEn: "Take your shoes off and your belt too. Everything goes in the tray.", textZh: "鞋子脱掉，腰带也解下来。全部放托盘里。", actionHint: "照做即可", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I keep my jacket on?",
            textZh: "可以不脱外套吗？",
          },
          {
            speaker: "them",
            role: "安检",
            textEn: "Please remove your jacket as well. Now step through the scanner, please.",
            textZh: "请把外套也脱掉。现在请走过扫描仪。",
            keyPhrases: [
              { en: "scanner", zh: "扫描仪" },
              { en: "step through", zh: "走过去" },
            ],
            alternativeExpressions: [
              { textEn: "Jacket off too, please. Go ahead and walk through.", textZh: "外套也脱掉。请走过去。", actionHint: "脱外套后走过扫描仪", frequency: "common" },
              { textEn: "Your jacket needs to go in the tray as well. Then step through when the light's green.", textZh: "外套也要放托盘里。绿灯亮了就走过去。", actionHint: "等绿灯再走", frequency: "occasional" },
            ],
          },
          {
            speaker: "them",
            role: "安检",
            textEn: "You're good. Please collect your belongings from the belt.",
            textZh: "通过了。请在传送带上取回您的物品。",
            keyPhrases: [
              { en: "you're good", zh: "通过了" },
              { en: "collect your belongings", zh: "取回物品" },
            ],
            alternativeExpressions: [
              { textEn: "All clear. Grab your stuff from the belt.", textZh: "没问题。从传送带上拿走您的东西。", actionHint: "取回物品", frequency: "common" },
              { textEn: "You're all set. Don't forget your items on the other side.", textZh: "您可以走了。别忘了另一边的物品。", actionHint: "记得拿回所有东西", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 2: 包里有违禁品 ---
      {
        id: "prohibited-item",
        titleZh: "违禁品被扣",
        titleEn: "Prohibited Item Found",
        description: "安检发现包里有不允许携带的物品",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "安检",
            textEn: "Excuse me, is this your bag? I need to check it. We found something in the scan.",
            textZh: "请问这是您的包吗？我需要检查一下。扫描发现了东西。",
            keyPhrases: [
              { en: "check it", zh: "检查" },
              { en: "found something", zh: "发现了东西" },
              { en: "scan", zh: "扫描" },
            ],
            alternativeExpressions: [
              { textEn: "Is this bag yours? We need to take a closer look — something flagged on the X-ray.", textZh: "这个包是您的吗？我们需要仔细看看——X光上有东西。", actionHint: "确认是自己的包", frequency: "common" },
              { textEn: "Whose bag is this? We spotted something and need to do a manual check.", textZh: "这是谁的包？我们发现了东西，需要手动检查。", actionHint: "确认并配合检查", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, that's mine. What's the problem?",
            textZh: "是的，是我的。有什么问题？",
          },
          {
            speaker: "them",
            role: "安检",
            textEn: "You have a water bottle that's more than 100ml. Liquids over 100ml are not allowed through security. You'll need to either drink it, pour it out, or dispose of it.",
            textZh: "您有一瓶水超过100毫升。超过100毫升的液体不能过安检。您可以喝掉、倒掉或扔掉。",
            keyPhrases: [
              { en: "100ml", zh: "100毫升" },
              { en: "not allowed", zh: "不允许" },
              { en: "drink it", zh: "喝掉" },
              { en: "pour it out", zh: "倒掉" },
              { en: "dispose of", zh: "扔掉/处理掉" },
            ],
            alternativeExpressions: [
              { textEn: "This water bottle can't go through. You can finish it here or toss it in the bin over there.", textZh: "这瓶水不能过安检。您可以在这里喝完或扔到那边的垃圾桶里。", actionHint: "喝掉或扔掉", frequency: "common" },
              { textEn: "Liquids over 100ml aren't permitted. There's a disposal bin right here if you want to throw it away.", textZh: "超过100毫升的液体不允许带过去。这里有处理桶，可以扔掉。", actionHint: "扔到处理桶里", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh, I forgot about that. I'll throw it away. Sorry about that.",
            textZh: "哦，我忘了。我扔掉吧。抱歉。",
          },
          {
            speaker: "them",
            role: "安检",
            textEn: "No problem. There are water fountains past security where you can refill a bottle. You're all set now.",
            textZh: "没关系。安检后面有饮水机，可以重新装水。您可以走了。",
            keyPhrases: [
              { en: "water fountains", zh: "饮水机" },
              { en: "past security", zh: "过了安检之后" },
              { en: "refill", zh: "重新装/加满" },
              { en: "all set", zh: "可以了/好了" },
            ],
            alternativeExpressions: [
              { textEn: "No worries. You can get water on the other side — there are fountains everywhere past the checkpoint.", textZh: "没关系。过了安检那边到处有饮水机，可以重新接水。", actionHint: "过安检后再接水", frequency: "common" },
              { textEn: "That's fine. You'll find water stations after security. Have a good flight.", textZh: "没事。过安检后有饮水站。祝您旅途愉快。", actionHint: "安检后找饮水站", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 3: 携带药物 ---
      {
        id: "medication",
        titleZh: "携带药物过安检",
        titleEn: "Traveling with Medication",
        description: "随身携带需要的药物通过安检",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I have prescription medication in my bag. Do I need to declare it?",
            textZh: "请问，我包里有处方药。需要申报吗？",
          },
          {
            speaker: "them",
            role: "安检",
            textEn: "Prescription medication is fine to carry on. Just keep it in its original packaging with the pharmacy label. If it's a liquid medication over 100ml, please let us know before screening.",
            textZh: "处方药可以随身携带。请放在原包装里，保留药房标签。如果是超过100毫升的液体药物，请在检查前告知我们。",
            keyPhrases: [
              { en: "prescription medication", zh: "处方药" },
              { en: "carry on", zh: "随身携带" },
              { en: "original packaging", zh: "原包装" },
              { en: "pharmacy label", zh: "药房标签" },
            ],
            alternativeExpressions: [
              { textEn: "That's totally fine. Just make sure it's in the original bottle with the label on it.", textZh: "完全没问题。只要确保放在有标签的原装瓶里就行。", actionHint: "保留原包装", frequency: "common" },
              { textEn: "You can bring prescription meds on board. Keep them labeled. If any are liquid over 100ml, declare them before screening.", textZh: "处方药可以带上飞机。保留标签。如果有超过100毫升的液体药物，检查前说一声。", actionHint: "液体药物要提前告知", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I also have insulin needles. They're in a medical kit.",
            textZh: "我还有胰岛素注射针。在医疗包里。",
          },
          {
            speaker: "them",
            role: "安检",
            textEn: "That's fine. Medical supplies including needles are allowed as long as you have a doctor's letter or prescription. Can I see it?",
            textZh: "没问题。医疗用品包括针头都可以，只要有医生证明或处方。能看一下吗？",
            keyPhrases: [
              { en: "medical supplies", zh: "医疗用品" },
              { en: "needles", zh: "针头" },
              { en: "doctor's letter", zh: "医生证明" },
              { en: "prescription", zh: "处方" },
            ],
            alternativeExpressions: [
              { textEn: "Needles are okay if you've got a prescription or doctor's note. May I take a look?", textZh: "有处方或医生证明的话针头没问题。我看一下可以吗？", actionHint: "出示医生证明", frequency: "common" },
              { textEn: "Medical needles are permitted with proper documentation. Do you have something from your doctor?", textZh: "有正规文件的医疗针头是允许的。您有医生出具的文件吗？", actionHint: "准备好医疗文件", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's my doctor's letter. It's in English and Chinese.",
            textZh: "这是我的医生证明。有英文和中文两个版本。",
            culturalNote: "出国时如果携带药物，建议准备英文版的医生证明。",
          },
          {
            speaker: "them",
            role: "安检",
            textEn: "Thank you. Everything looks good. You can proceed. Have a safe trip.",
            textZh: "谢谢。一切没问题。您可以走了。旅途平安。",
            alternativeExpressions: [
              { textEn: "All good. You're free to go. Safe travels!", textZh: "没问题。您可以走了。一路平安！", actionHint: "通过安检", frequency: "common" },
              { textEn: "Everything checks out. Go ahead, and have a nice flight.", textZh: "都没问题。请走吧，祝旅途愉快。", actionHint: "前往登机口", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 入境海关 ====================
  {
    id: "airport-immigration",
    category: "airport",
    titleZh: "入境海关",
    titleEn: "Immigration & Customs",
    description: "到达目的地国家后的入境审查，包括海关问答",
    otherRole: "海关官员",
    otherRoleIcon: "passport",
    flows: [
      {
        id: "tourism",
        titleZh: "旅游入境",
        titleEn: "Tourist Entry",
        description: "以旅游目的入境的标准问答",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "海关",
            textEn: "Next, please. Passport.",
            textZh: "下一位。护照。",
            keyPhrases: [
              { en: "next", zh: "下一位" },
              { en: "passport", zh: "护照" },
            ],
            responseTip: "海关官员通常话很简短，不要紧张",
            alternativeExpressions: [
              { textEn: "Step forward. Passport, please.", textZh: "上前来。护照请给我。", actionHint: "递上护照", frequency: "common" },
              { textEn: "Next. Documents, please.", textZh: "下一位。请出示证件。", actionHint: "递上护照和相关文件", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here you go.",
            textZh: "给您。",
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "What's the purpose of your visit?",
            textZh: "您来访的目的是什么？",
            variations: [
              { textEn: "Why are you visiting the United States?", textZh: "您为什么来美国？" },
              { textEn: "Business or pleasure?", textZh: "出差还是旅游？" },
            ],
            keyPhrases: [
              { en: "purpose of your visit", zh: "来访目的" },
              { en: "business or pleasure", zh: "出差还是旅游" },
            ],
            alternativeExpressions: [
              { textEn: "What brings you here today?", textZh: "您今天来这里做什么？", actionHint: "说明来访目的", frequency: "common" },
              { textEn: "What are you here for?", textZh: "您来做什么的？", actionHint: "简要说明目的", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm here for tourism. I'll be traveling around the West Coast for two weeks.",
            textZh: "我来旅游的。会在西海岸旅行两周。",
            casualVersion: "Just visiting. Doing a West Coast road trip.",
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "Where will you be staying?",
            textZh: "您住哪里？",
            variations: [
              { textEn: "What's your hotel address?", textZh: "酒店地址是什么？" },
              { textEn: "Do you have a hotel reservation?", textZh: "有酒店预订吗？" },
            ],
            alternativeExpressions: [
              { textEn: "Where are you staying while you're here?", textZh: "您在这期间住在哪里？", actionHint: "说出酒店名称或地址", frequency: "common" },
              { textEn: "Do you have an address for where you'll be?", textZh: "您有住处的地址吗？", actionHint: "提供住宿地址", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm staying at the Marriott in San Francisco for the first three nights, then driving down to Los Angeles.",
            textZh: "前三晚住旧金山的万豪酒店，然后开车去洛杉矶。",
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "Do you have a return ticket?",
            textZh: "有回程机票吗？",
            keyPhrases: [
              { en: "return ticket", zh: "回程机票" },
            ],
            alternativeExpressions: [
              { textEn: "Can I see your return flight booking?", textZh: "能看一下您的回程航班预订吗？", actionHint: "出示回程机票", frequency: "common" },
              { textEn: "When are you flying back? Do you have a ticket?", textZh: "您什么时候飞回去？有机票吗？", actionHint: "告知回程日期并出示机票", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, here's my return ticket. I'm flying back on March 25th.",
            textZh: "有，这是我的回程机票。3月25日飞回去。",
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "Are you bringing any food, plants, or agricultural products?",
            textZh: "您有携带任何食品、植物或农产品吗？",
            keyPhrases: [
              { en: "food", zh: "食品" },
              { en: "plants", zh: "植物" },
              { en: "agricultural products", zh: "农产品" },
            ],
            alternativeExpressions: [
              { textEn: "Do you have any food items, fruits, or seeds with you?", textZh: "您身上有食品、水果或种子吗？", actionHint: "如实回答", frequency: "common" },
              { textEn: "Anything to declare — food, plants, animal products?", textZh: "有需要申报的吗——食品、植物、动物产品？", actionHint: "如实申报", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "No, I have nothing to declare.",
            textZh: "没有，我没有需要申报的。",
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "Alright, welcome to the United States. Enjoy your trip.",
            textZh: "好的，欢迎来到美国。祝旅途愉快。",
            keyPhrases: [
              { en: "welcome to", zh: "欢迎来到" },
              { en: "enjoy your trip", zh: "旅途愉快" },
            ],
            alternativeExpressions: [
              { textEn: "Everything looks fine. Welcome, and have a great stay.", textZh: "一切没问题。欢迎，祝您在这里过得愉快。", actionHint: "通过海关", frequency: "common" },
              { textEn: "You're all set. Enjoy your time in the States.", textZh: "您可以走了。在美国玩得开心。", actionHint: "取回护照离开", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 2: 被多问问题 ---
      {
        id: "extra-questions",
        titleZh: "被追问更多",
        titleEn: "Additional Questioning",
        description: "海关官员问了更多问题，需要提供更多信息",
        difficulty: "advanced",
        turns: [
          {
            speaker: "them",
            role: "海关",
            textEn: "What do you do for a living?",
            textZh: "您是做什么工作的？",
            keyPhrases: [
              { en: "do for a living", zh: "做什么工作" },
            ],
            alternativeExpressions: [
              { textEn: "What's your occupation?", textZh: "您的职业是什么？", actionHint: "告知职业", frequency: "common" },
              { textEn: "And what kind of work do you do?", textZh: "您做什么工作？", actionHint: "简要说明工作", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm a marketing manager at a technology company in Shanghai.",
            textZh: "我在上海一家科技公司做市场经理。",
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "How much money are you carrying with you?",
            textZh: "您身上带了多少现金？",
            keyPhrases: [
              { en: "how much money", zh: "多少钱" },
              { en: "carrying", zh: "携带" },
            ],
            culturalNote: "美国入境携带超过 $10,000 现金需要申报。",
            alternativeExpressions: [
              { textEn: "How much cash do you have on you?", textZh: "您身上有多少现金？", actionHint: "如实回答金额", frequency: "common" },
              { textEn: "Are you carrying more than ten thousand dollars in cash or equivalents?", textZh: "您携带的现金或等价物超过一万美元吗？", actionHint: "如实回答", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "About $2,000 in cash, and I have credit cards.",
            textZh: "大约2000美元现金，还有信用卡。",
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "Have you been to the United States before?",
            textZh: "您以前来过美国吗？",
            alternativeExpressions: [
              { textEn: "Is this your first time in the U.S.?", textZh: "这是您第一次来美国吗？", actionHint: "回答是否来过", frequency: "common" },
              { textEn: "Have you visited the States before?", textZh: "您以前来过美国吗？", actionHint: "如实回答", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I visited New York two years ago for a vacation.",
            textZh: "来过，两年前去纽约度假。",
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "Okay, you're all set. Go ahead.",
            textZh: "好的，没问题了。请过去吧。",
            keyPhrases: [
              { en: "all set", zh: "没问题了" },
              { en: "go ahead", zh: "过去吧" },
            ],
            alternativeExpressions: [
              { textEn: "Everything checks out. You can go through.", textZh: "都没问题。您可以过去了。", actionHint: "通过海关", frequency: "common" },
              { textEn: "You're good. Welcome.", textZh: "没问题了。欢迎。", actionHint: "取回护照离开", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 行李问题 ====================
  {
    id: "airport-luggage",
    category: "airport",
    titleZh: "行李问题",
    titleEn: "Luggage Issues",
    description: "行李丢失、损坏或延误的处理",
    otherRole: "行李服务台",
    otherRoleIcon: "luggage",
    flows: [
      {
        id: "lost",
        titleZh: "行李没到",
        titleEn: "Lost Luggage",
        description: "在行李转盘等了很久但行李没出来",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I've been waiting at the baggage carousel for 40 minutes, but my luggage hasn't arrived.",
            textZh: "请问，我在行李转盘等了40分钟了，但行李还没出来。",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "I'm sorry about that. May I see your baggage claim tag? It should be attached to your boarding pass.",
            textZh: "很抱歉。能看一下您的行李票吗？应该贴在登机牌上的。",
            keyPhrases: [
              { en: "baggage claim tag", zh: "行李票" },
              { en: "boarding pass", zh: "登机牌" },
              { en: "attached to", zh: "贴在……上" },
            ],
            alternativeExpressions: [
              { textEn: "Sorry to hear that. Can I see your luggage receipt? It's the sticker on your boarding pass.", textZh: "很遗憾。能看一下您的行李收据吗？就是登机牌上的那个贴纸。", actionHint: "找到登机牌上的行李贴纸", frequency: "common" },
              { textEn: "Let me help you with that. Do you have your claim tag handy?", textZh: "我来帮您处理。您的行李票方便拿出来吗？", actionHint: "出示行李票", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's my baggage claim tag.",
            textZh: "这是我的行李票。",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "Thank you. Let me track it in our system... It looks like your bag was left behind in Beijing and will arrive on the next flight at 10 PM tonight.",
            textZh: "谢谢。让我在系统里查一下……看起来您的行李留在北京了，会搭今晚10点的下一班飞机过来。",
            keyPhrases: [
              { en: "track it", zh: "追踪" },
              { en: "left behind", zh: "留在/落在" },
              { en: "next flight", zh: "下一班飞机" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "Let me look it up... It seems your bag didn't make the connection. It's on its way and should arrive tonight.", textZh: "我查一下……您的行李好像没赶上转机。正在运来，今晚应该能到。", actionHint: "了解行李到达时间", frequency: "common" },
              { textEn: "I'm checking now... Your luggage is still at the origin airport. It'll be on the next available flight.", textZh: "我在查……您的行李还在出发机场。会搭最近的航班过来。", actionHint: "询问具体到达时间", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's frustrating. I need my clothes and medication. Can you deliver it to my hotel once it arrives?",
            textZh: "太郁闷了。我需要衣服和药。到了之后能送到我酒店吗？",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "Absolutely. We'll deliver it to your hotel free of charge. Please fill out this form with your hotel address and phone number. We'll also give you a toiletry kit for tonight.",
            textZh: "当然可以。我们会免费送到您的酒店。请填写这张表格，写上酒店地址和电话。我们也会给您一个洗漱包应急。",
            keyPhrases: [
              { en: "deliver", zh: "送/配送" },
              { en: "free of charge", zh: "免费" },
              { en: "fill out this form", zh: "填写表格" },
              { en: "toiletry kit", zh: "洗漱包" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, we can have it sent to your hotel at no cost. Just write down the address here. And here's an overnight kit.", textZh: "当然，我们可以免费送到您的酒店。把地址写在这里就行。这是应急洗漱包。", actionHint: "填写酒店地址", frequency: "common" },
              { textEn: "We'll courier it to you once it arrives. No charge. Fill in your details on this form, and take this amenity kit for tonight.", textZh: "行李到了我们会快递给您。不收费。在这张表上填写您的信息，今晚先用这个应急包。", actionHint: "填表并拿洗漱包", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. What if the bag is damaged or something is missing?",
            textZh: "谢谢。如果行李损坏了或少了东西怎么办？",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "If there's any damage or missing items, please report it within 7 days at this same counter or call this number. Here's your reference number for tracking.",
            textZh: "如果有损坏或丢失，请在7天内到这个柜台或打这个电话报告。给您一个追踪参考号。",
            keyPhrases: [
              { en: "report", zh: "报告" },
              { en: "within 7 days", zh: "7天内" },
              { en: "reference number", zh: "参考号" },
              { en: "tracking", zh: "追踪" },
            ],
            alternativeExpressions: [
              { textEn: "If anything's damaged or missing, you have 7 days to file a claim. Here's your case number.", textZh: "如果有损坏或丢失，您有7天时间提交索赔。这是您的案件编号。", actionHint: "保留好案件编号", frequency: "common" },
              { textEn: "Check your bag when it arrives. Any issues, come back here or call us within a week. Keep this reference number.", textZh: "行李到了检查一下。有问题一周内回来或打电话给我们。保留好这个参考号。", actionHint: "记得检查行李并保留参考号", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 2: 行李损坏 ---
      {
        id: "damaged",
        titleZh: "行李损坏",
        titleEn: "Damaged Luggage",
        description: "取到行李后发现损坏",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "My suitcase is damaged. The wheel is broken and there's a big scratch on the side.",
            textZh: "我的行李箱坏了。轮子断了，侧面有一道大划痕。",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "I'm sorry to see that. May I take a look? And I'll need your boarding pass and baggage tag.",
            textZh: "很抱歉。我看一下？我还需要您的登机牌和行李票。",
            alternativeExpressions: [
              { textEn: "Oh no, that's unfortunate. Let me see the damage. Can I have your boarding pass and luggage tag?", textZh: "哦，真不好意思。让我看看损坏情况。能给我您的登机牌和行李牌吗？", actionHint: "出示登机牌和行李牌", frequency: "common" },
              { textEn: "Sorry about that. I'll need to inspect it. Please have your documents ready.", textZh: "很抱歉。我需要检查一下。请准备好您的证件。", actionHint: "准备好相关文件", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here they are. The suitcase was new — I just bought it last week.",
            textZh: "给您。这箱子是新的——上周刚买的。",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "I understand your frustration. I'll file a damage report. The airline will either repair your bag, replace it, or compensate you. Do you have the purchase receipt?",
            textZh: "我理解您的心情。我来填一份损坏报告。航空公司会修理、更换或赔偿。您有购买收据吗？",
            keyPhrases: [
              { en: "damage report", zh: "损坏报告" },
              { en: "repair", zh: "修理" },
              { en: "replace", zh: "更换" },
              { en: "compensate", zh: "赔偿" },
              { en: "purchase receipt", zh: "购买收据" },
            ],
            alternativeExpressions: [
              { textEn: "I'm sorry about this. Let me open a claim for you. They'll fix it, replace it, or reimburse you. Got the receipt?", textZh: "很抱歉。我帮您开一个索赔。会修理、换新或报销。有收据吗？", actionHint: "找到购买收据", frequency: "common" },
              { textEn: "We'll get this sorted. I'm filing a damage claim now. Do you happen to have proof of purchase?", textZh: "我们会处理好的。我正在填写损坏索赔。您有购买凭证吗？", actionHint: "出示购买凭证", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have it on my phone. Can I show you a screenshot?",
            textZh: "在手机里。可以给你看截图吗？",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "Yes, that works. I'll also need to take photos of the damage. The airline's team will contact you within 5 business days with a resolution.",
            textZh: "可以的。我还需要拍几张损坏的照片。航空公司的团队会在5个工作日内联系您处理。",
            keyPhrases: [
              { en: "take photos", zh: "拍照" },
              { en: "5 business days", zh: "5个工作日" },
              { en: "resolution", zh: "处理方案" },
            ],
            alternativeExpressions: [
              { textEn: "That's fine. Let me photograph the damage for our records. Someone will get back to you within a week.", textZh: "可以。让我拍几张损坏照片存档。一周内会有人联系您。", actionHint: "配合拍照", frequency: "common" },
              { textEn: "A screenshot works. I'll snap some pictures too. Expect a call from our claims team in 5 working days.", textZh: "截图可以。我也拍几张照片。理赔团队5个工作日内会联系您。", actionHint: "等待理赔联系", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 登机 / 转机 ====================
  {
    id: "airport-boarding",
    category: "airport",
    titleZh: "登机与转机",
    titleEn: "Boarding & Connection",
    description: "找登机口、登机、转机等",
    otherRole: "登机口工作人员",
    otherRoleIcon: "ticket",
    flows: [
      {
        id: "find-gate",
        titleZh: "找登机口",
        titleEn: "Finding the Gate",
        description: "到达机场后找到正确的登机口",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, which way is Gate B12?",
            textZh: "请问，B12登机口怎么走？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Go through that corridor, past the duty-free shops, and turn right. Gate B12 is at the end of the terminal.",
            textZh: "沿那条通道走，经过免税店，然后右转。B12在航站楼尽头。",
            keyPhrases: [
              { en: "corridor", zh: "通道" },
              { en: "duty-free shops", zh: "免税店" },
              { en: "turn right", zh: "右转" },
              { en: "end of the terminal", zh: "航站楼尽头" },
            ],
            alternativeExpressions: [
              { textEn: "Head straight down this way, past the shops, then hang a right. B12 is all the way at the end.", textZh: "沿着这条路一直走，过了商店右转。B12在最里面。", actionHint: "跟着指引走", frequency: "common" },
              { textEn: "Just follow the signs for B gates. It's about a 10-minute walk down that hall.", textZh: "跟着B区登机口的指示牌走就行。沿着那条走廊大约走10分钟。", actionHint: "看B区指示牌", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How long does it take to walk there?",
            textZh: "走过去要多久？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "About 10 minutes. You have plenty of time — boarding doesn't start for another hour.",
            textZh: "大约10分钟。您时间充裕——还有一个小时才开始登机。",
            keyPhrases: [
              { en: "plenty of time", zh: "时间充裕" },
              { en: "boarding doesn't start", zh: "还没开始登机" },
            ],
            alternativeExpressions: [
              { textEn: "It's a 10-minute walk. No rush — you've got an hour before they start boarding.", textZh: "走10分钟。不着急——还有一个小时才登机。", actionHint: "不用着急", frequency: "common" },
              { textEn: "Maybe 10 minutes on foot. You've got loads of time, don't worry.", textZh: "走路大概10分钟。时间很充裕，别担心。", actionHint: "可以慢慢走", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 2: 转机赶时间 ---
      {
        id: "tight-connection",
        titleZh: "转机赶时间",
        titleEn: "Tight Connection",
        description: "转机时间紧迫，需要求助",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I have a connecting flight to London that boards in 20 minutes. I just landed and I'm at Terminal 1 — my next gate is in Terminal 3. Can I make it?",
            textZh: "请问，我有一班转机去伦敦的航班，20分钟后登机。我刚落地在1号航站楼——下一个登机口在3号航站楼。来得及吗？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "That's tight. You'll need to take the shuttle train between terminals — it runs every 3 minutes. Follow the signs to \"Terminal Transfer.\" I'll call ahead to let them know you're coming.",
            textZh: "时间很紧。您需要坐航站楼之间的摆渡列车——每3分钟一班。跟着 \"航站楼转乘\" 的标志走。我提前通知那边您在赶来。",
            keyPhrases: [
              { en: "connecting flight", zh: "转机航班" },
              { en: "shuttle train", zh: "摆渡列车" },
              { en: "terminal transfer", zh: "航站楼转乘" },
              { en: "call ahead", zh: "提前通知" },
            ],
            alternativeExpressions: [
              { textEn: "That's cutting it close. Take the people mover to Terminal 3 — it's every few minutes. I'll radio the gate for you.", textZh: "时间很赶。坐旅客捷运去3号航站楼——几分钟一班。我帮您通知登机口。", actionHint: "赶紧去坐旅客捷运", frequency: "common" },
              { textEn: "You'll need to hurry. The inter-terminal train is your best bet. I'll let the gate know you're on your way.", textZh: "您得抓紧。坐航站楼间的列车最快。我通知登机口您在赶来。", actionHint: "快速找到列车站台", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you! Do I need to go through security again?",
            textZh: "谢谢！需要重新过安检吗？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "No, the shuttle connects airside — no security needed. Just go straight to your gate. Gate C22, Terminal 3.",
            textZh: "不用，摆渡列车在隔离区内——不需要再过安检。直接去您的登机口。3号航站楼C22。",
            keyPhrases: [
              { en: "airside", zh: "隔离区内" },
              { en: "no security needed", zh: "不需要过安检" },
            ],
            alternativeExpressions: [
              { textEn: "Nope, it's all within the secure zone. No need to go through screening again. Head straight to C22.", textZh: "不用，都在安全区域内。不需要重新过安检。直接去C22。", actionHint: "直奔登机口", frequency: "common" },
              { textEn: "No security check needed — the train stays airside. Just get to Gate C22 in Terminal 3.", textZh: "不需要再过安检——列车在隔离区内运行。去3号航站楼C22登机口就行。", actionHint: "记住C22登机口", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What about my checked bag? Will it be transferred automatically?",
            textZh: "我的托运行李呢？会自动转运吗？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Yes, your luggage will be transferred automatically to your London flight. Don't worry about that. Just hurry to the gate!",
            textZh: "会的，您的行李会自动转到伦敦的航班上。不用担心。赶快去登机口吧！",
            keyPhrases: [
              { en: "transferred automatically", zh: "自动转运" },
              { en: "hurry to the gate", zh: "赶快去登机口" },
            ],
            alternativeExpressions: [
              { textEn: "Your bags are tagged through to London, so they'll be moved automatically. Just focus on getting to the gate!", textZh: "您的行李已经直挂到伦敦了，会自动转运的。先赶去登机口吧！", actionHint: "不用管行李，赶紧走", frequency: "common" },
              { textEn: "Don't worry about your luggage — it's handled. Go, go, go!", textZh: "行李不用担心——会处理好的。快走快走！", actionHint: "抓紧时间赶路", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 3: 航班延误/取消 ---
      {
        id: "delay-cancel",
        titleZh: "航班延误或取消",
        titleEn: "Flight Delay or Cancellation",
        description: "航班延误或取消后的应对",
        difficulty: "advanced",
        turns: [
          {
            speaker: "them",
            role: "广播",
            textEn: "Attention passengers on flight UA892 to San Francisco: your flight has been delayed by approximately 3 hours due to weather conditions. The new departure time is 8:30 PM. We apologize for the inconvenience.",
            textZh: "乘坐UA892次航班前往旧金山的旅客请注意：由于天气原因，您的航班延误约3小时。新的起飞时间是晚上8:30。为此给您带来的不便深表歉意。",
            keyPhrases: [
              { en: "delayed", zh: "延误" },
              { en: "approximately 3 hours", zh: "大约3小时" },
              { en: "weather conditions", zh: "天气原因" },
              { en: "new departure time", zh: "新的起飞时间" },
              { en: "apologize for the inconvenience", zh: "为不便道歉" },
            ],
            responseTip: "可以去服务台问问是否有补偿或其他安排",
            alternativeExpressions: [
              { textEn: "Ladies and gentlemen, flight UA892 to San Francisco is delayed about 3 hours. New departure: 8:30 PM. Sorry for the delay.", textZh: "各位旅客，UA892次旧金山航班延误约3小时。新起飞时间：晚上8:30。为延误致歉。", actionHint: "去服务台了解详情", frequency: "common" },
              { textEn: "We regret to inform you that flight UA892 has been pushed back to 8:30 PM due to weather. We apologize for any inconvenience.", textZh: "很遗憾通知您，UA892航班因天气推迟到晚上8:30。为给您造成的不便深表歉意。", actionHint: "注意新的起飞时间", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Excuse me, my flight to San Francisco has been delayed. I have a connecting flight at SFO that I'll definitely miss now. What are my options?",
            textZh: "请问，我去旧金山的航班延误了。在旧金山还有转机航班，现在肯定赶不上了。我有什么选择？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "I understand. Let me look at alternatives for you. I can rebook you on a different route through Denver that would still get you to your final destination tonight. Or I can book you on tomorrow morning's direct flight.",
            textZh: "我理解。让我帮您看看替代方案。可以帮您改签经丹佛的另一条路线，今晚还能到目的地。或者帮您订明天早上的直飞航班。",
            keyPhrases: [
              { en: "rebook", zh: "改签" },
              { en: "different route", zh: "另一条路线" },
              { en: "final destination", zh: "最终目的地" },
              { en: "direct flight", zh: "直飞航班" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "Let me see what I can do. There's a connecting flight through Dallas tonight, or a nonstop tomorrow morning. Which works better?", textZh: "我看看能怎么办。今晚有经达拉斯的转机航班，或者明早有直飞。哪个更方便？", actionHint: "选择今晚还是明天", frequency: "common" },
              { textEn: "I've got two options: a reroute tonight via another city, or a direct flight first thing tomorrow. What would you prefer?", textZh: "有两个方案：今晚绕路经另一个城市，或者明天一早直飞。您选哪个？", actionHint: "根据时间需求选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd prefer the tomorrow morning flight. Will the airline provide a hotel for tonight?",
            textZh: "我选明天早上的航班。航空公司今晚会安排酒店吗？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Yes, since the delay is on our end, we'll provide a hotel voucher and meal vouchers. Here are your new tickets and the hotel information. The shuttle to the hotel leaves from Door 3.",
            textZh: "是的，因为延误是我们的原因，我们会提供酒店和餐食券。给您新机票和酒店信息。去酒店的班车在3号门出发。",
            keyPhrases: [
              { en: "hotel voucher", zh: "酒店券" },
              { en: "meal vouchers", zh: "餐食券" },
              { en: "on our end", zh: "我们的原因" },
              { en: "shuttle", zh: "班车" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely. Since it's our fault, we'll cover a hotel and meals. Here's everything you need. Hotel shuttle is at Door 3.", textZh: "当然。因为是我们的责任，酒店和餐食我们承担。这是您需要的所有东西。酒店班车在3号门。", actionHint: "拿好所有凭证", frequency: "common" },
              { textEn: "We'll put you up for the night and give you meal vouchers. The hotel bus picks up outside Door 3.", textZh: "我们会安排您今晚的住宿并提供餐食券。酒店巴士在3号门外接人。", actionHint: "去3号门找酒店班车", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. Will my checked luggage be transferred to the new flight?",
            textZh: "谢谢。我的托运行李会转到新航班上吗？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Yes, we'll take care of that. Your luggage will be on tomorrow's flight. Here's the new baggage reference number.",
            textZh: "会的，我们会处理。您的行李会在明天的航班上。这是新的行李参考号。",
            alternativeExpressions: [
              { textEn: "Don't worry, your bags will be moved to tomorrow's flight automatically. Here's the updated tracking number.", textZh: "别担心，您的行李会自动转到明天的航班。这是更新后的追踪号码。", actionHint: "保留好追踪号码", frequency: "common" },
              { textEn: "We'll handle the luggage transfer. Everything will be on your new flight. Keep this reference number handy.", textZh: "行李转运我们来处理。都会在您的新航班上。请保留好这个参考号。", actionHint: "记下参考号", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 转机 ====================
  {
    id: "airport-transfer",
    category: "airport",
    titleZh: "转机",
    titleEn: "Connecting Flights",
    description: "在中转机场转机，包括找到下一个航站楼、中转等待、行李转运等",
    otherRole: "中转服务台工作人员",
    otherRoleIcon: "repeat",
    flows: [
      {
        id: "standard-transfer",
        titleZh: "标准转机",
        titleEn: "Standard Connection",
        description: "正常的国际转机流程，时间充裕",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I have a connecting flight to Sydney. Where do I go for international transfers?",
            textZh: "请问，我有一班转机去悉尼的航班。国际转机在哪里？",
          },
          {
            speaker: "them",
            role: "中转服务",
            textEn: "Follow the signs for \"International Transfers.\" You'll need to go through security screening again, then head to Terminal 2. What's your flight number?",
            textZh: "跟着 \"国际转机\" 的标志走。您需要重新过安检，然后去2号航站楼。您的航班号是什么？",
            keyPhrases: [
              { en: "international transfers", zh: "国际转机" },
              { en: "security screening", zh: "安检" },
              { en: "terminal", zh: "航站楼" },
            ],
            vocabNotes: {
              "transfers": {
                meaningInContext: "在这里指转机通道，不是一般的「转移」",
                similarUsage: "类似用法：Transfer desk（转机服务台）",
              },
            },
            alternativeExpressions: [
              { textEn: "Just follow the 'Connections' signs — they'll take you to the transfer area.", textZh: "跟着「中转」标志走——会带你到转机区域。", actionHint: "跟着标志走", frequency: "common" },
              { textEn: "Head to the transit hall. It's straight ahead, past passport control.", textZh: "去中转大厅。一直走，过了护照检查就到。", actionHint: "直走到中转大厅", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's QF108. How much time do I have?",
            textZh: "航班号是QF108。我还有多少时间？",
          },
          {
            speaker: "them",
            role: "中转服务",
            textEn: "That flight boards at 3:45 PM, so you have about two hours. Plenty of time. Gate D15 in Terminal 2.",
            textZh: "那班飞机下午3:45登机，所以您还有大约两个小时。时间很充裕。2号航站楼D15登机口。",
            keyPhrases: [
              { en: "boards at", zh: "……登机" },
              { en: "plenty of time", zh: "时间充裕" },
            ],
            alternativeExpressions: [
              { textEn: "Boarding is at 3:45, so you've got a good two hours. No rush. It's Gate D15.", textZh: "3:45登机，所以您有整整两个小时。不着急。D15登机口。", actionHint: "不用着急", frequency: "common" },
              { textEn: "You're fine on time — your flight doesn't board for another two hours. Head to D15 in Terminal 2.", textZh: "时间没问题——还有两个小时才登机。去2号航站楼D15就行。", actionHint: "慢慢走过去", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do I need to pick up my luggage and check it in again?",
            textZh: "需要取行李重新托运吗？",
          },
          {
            speaker: "them",
            role: "中转服务",
            textEn: "No, your luggage has been checked through to Sydney. You can verify on your baggage tag — it should show SYD as the final destination.",
            textZh: "不用，您的行李已经直挂到悉尼了。您可以看行李票确认——上面应该显示SYD作为最终目的地。",
            keyPhrases: [
              { en: "checked through", zh: "直挂（行李）" },
              { en: "baggage tag", zh: "行李票" },
              { en: "final destination", zh: "最终目的地" },
            ],
            vocabNotes: {
              "checked through": {
                meaningInContext: "在这里指行李直接托运到最终目的地，中途不需要取出",
                similarUsage: "类似用法：Is my bag checked through to London?",
              },
            },
            alternativeExpressions: [
              { textEn: "Nope, your bags go straight to Sydney. Check your tag — it should say SYD.", textZh: "不用，您的行李直接到悉尼。看一下行李牌——上面应该写着SYD。", actionHint: "确认行李牌上写着SYD", frequency: "common" },
              { textEn: "Your luggage is tagged all the way to Sydney, so no need to pick it up here.", textZh: "您的行李已经直挂到悉尼了，不需要在这里提取。", actionHint: "不用管行李", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. Is there anywhere to eat near Gate D15?",
            textZh: "太好了。D15登机口附近有吃东西的地方吗？",
          },
          {
            speaker: "them",
            role: "中转服务",
            textEn: "Yes, there are several restaurants and a food court near Gate D. You'll also find a currency exchange and some shops along the way.",
            textZh: "有的，D区登机口附近有好几家餐厅和美食广场。沿路还有货币兑换和一些商店。",
            keyPhrases: [
              { en: "food court", zh: "美食广场" },
              { en: "currency exchange", zh: "货币兑换" },
            ],
            alternativeExpressions: [
              { textEn: "There's a bunch of places to eat near the D gates — a food court plus a couple of sit-down restaurants.", textZh: "D区登机口附近有很多吃的地方——美食广场和几家正餐餐厅。", actionHint: "去D区找餐厅", frequency: "common" },
              { textEn: "Plenty of dining options around Gate D. There's also a money exchange and some shops on the way.", textZh: "D登机口附近有很多餐饮选择。路上还有货币兑换和一些商店。", actionHint: "沿路留意商店", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. One more question — is there free Wi-Fi in the terminal?",
            textZh: "谢谢。再问一下——航站楼有免费Wi-Fi吗？",
          },
          {
            speaker: "them",
            role: "中转服务",
            textEn: "Yes, connect to \"Airport-Free-WiFi\" and accept the terms. You get 2 hours free, then you can buy more if needed.",
            textZh: "有，连接 \"Airport-Free-WiFi\"，同意条款就行。免费用2小时，之后可以购买延长。",
            keyPhrases: [
              { en: "connect to", zh: "连接" },
              { en: "accept the terms", zh: "同意条款" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, the WiFi is free for two hours. Just look for 'Airport-Free-WiFi' and agree to the terms.", textZh: "有，WiFi免费两小时。找'Airport-Free-WiFi'然后同意条款就行。", actionHint: "连接WiFi", frequency: "common" },
              { textEn: "There's complimentary WiFi — search for the airport network and sign in through the browser.", textZh: "有免费WiFi——搜索机场网络然后通过浏览器登录。", actionHint: "用浏览器登录", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 2: 转机时间紧 + 航站楼变更 ---
      {
        id: "terminal-change",
        titleZh: "航站楼变更赶转机",
        titleEn: "Terminal Change & Tight Connection",
        description: "登机口变更导致需要换航站楼，时间紧迫",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I just got a notification that my connecting flight gate changed from B8 to E22. Is that a different terminal?",
            textZh: "我刚收到通知，转机航班登机口从B8换到了E22。那是不同的航站楼吗？",
          },
          {
            speaker: "them",
            role: "中转服务",
            textEn: "Yes, Gate E is in Terminal 3. You're currently in Terminal 1. You'll need to take the inter-terminal shuttle. How much time do you have before boarding?",
            textZh: "是的，E区在3号航站楼。您现在在1号航站楼。需要坐航站楼间的摆渡车。您离登机还有多少时间？",
            keyPhrases: [
              { en: "inter-terminal shuttle", zh: "航站楼间摆渡车" },
              { en: "gate changed", zh: "登机口变更" },
            ],
            alternativeExpressions: [
              { textEn: "E gates are in a different terminal. You'll need the SkyTrain to get there.", textZh: "E区登机口在另一个航站楼。你需要坐天际列车过去。", actionHint: "找天际列车/摆渡车", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Only about 40 minutes. Will I make it?",
            textZh: "只有大约40分钟。来得及吗？",
          },
          {
            speaker: "them",
            role: "中转服务",
            textEn: "It'll be close, but doable. The shuttle takes about 10 minutes. You won't need to go through security again since it's all airside. Go to the shuttle platform — it's just around the corner, follow the blue signs.",
            textZh: "会很紧，但来得及。摆渡车大约10分钟。不需要重新过安检，都在隔离区内。去摆渡车站台——就在拐角，跟着蓝色标志走。",
            keyPhrases: [
              { en: "doable", zh: "可以做到的" },
              { en: "airside", zh: "隔离区内" },
              { en: "shuttle platform", zh: "摆渡车站台" },
            ],
            vocabNotes: {
              "doable": {
                meaningInContext: "在这里表示「虽然紧但可以做到」",
                similarUsage: "类似用法：That deadline is tight but doable.",
              },
            },
            alternativeExpressions: [
              { textEn: "It's tight but you can make it. The shuttle's about 10 minutes. No security to go through — just head to the platform around the corner.", textZh: "时间紧但来得及。摆渡车大约10分钟。不用过安检——拐角就是站台。", actionHint: "立刻去找摆渡车", frequency: "common" },
              { textEn: "You should be fine if you go now. Take the transfer shuttle — follow the blue signs. It's all airside, so no screening.", textZh: "现在走应该来得及。坐转运摆渡车——跟着蓝色标志走。都在隔离区内，不用过安检。", actionHint: "跟着蓝色标志走", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Should I let them know at the gate that I'm on my way?",
            textZh: "需要通知登机口我正在赶来吗？",
          },
          {
            speaker: "them",
            role: "中转服务",
            textEn: "I'll call Gate E22 and let them know you're in transit. They'll hold the door for a few extra minutes. Just go as quickly as you can.",
            textZh: "我打电话通知E22登机口您正在赶来。他们会多等几分钟。您尽快赶过去。",
            keyPhrases: [
              { en: "in transit", zh: "正在转机途中" },
              { en: "hold the door", zh: "等一下/延迟关门" },
            ],
            alternativeExpressions: [
              { textEn: "I'll ring the gate and tell them to wait for you. Just get there as fast as you can.", textZh: "我给登机口打电话让他们等您。您尽快赶过去。", actionHint: "加快脚步", frequency: "common" },
              { textEn: "Let me notify E22 that you're on your way. They'll keep the gate open a bit longer. Hurry!", textZh: "我通知E22您在赶来。他们会多开一会儿门。快走！", actionHint: "赶紧出发", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much. I really appreciate the help.",
            textZh: "太感谢了。真的很感激你的帮助。",
          },
          {
            speaker: "them",
            role: "中转服务",
            textEn: "No problem at all. Good luck, and have a safe flight!",
            textZh: "不客气。祝好运，旅途平安！",
            alternativeExpressions: [
              { textEn: "Happy to help! Run along now — safe travels!", textZh: "很高兴能帮到您！快走吧——一路平安！", actionHint: "赶紧出发", frequency: "common" },
              { textEn: "Anytime. Hope you make it. Have a great trip!", textZh: "不客气。希望您赶得上。祝旅途愉快！", actionHint: "加油赶路", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 免税店购物 ====================
  {
    id: "airport-dutyfree",
    category: "airport",
    titleZh: "免税店购物",
    titleEn: "Duty-Free Shopping",
    description: "在机场免税店购物，包括询价、退税、购买限制等",
    otherRole: "免税店店员",
    otherRoleIcon: "shopping-bag",
    flows: [
      {
        id: "standard-shopping",
        titleZh: "标准免税购物",
        titleEn: "Standard Duty-Free Shopping",
        description: "在免税店正常购物、询问价格和折扣",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm looking for a bottle of whisky as a gift. What do you recommend?",
            textZh: "你好，我想买一瓶威士忌送人。有什么推荐的吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "We have some great options! This Johnnie Walker Blue Label is very popular as a gift. It's $180, which is about 30% cheaper than regular retail.",
            textZh: "我们有很多不错的选择！这款尊尼获加蓝牌很受欢迎，很适合送礼。180美元，比正常零售价便宜大约30%。",
            keyPhrases: [
              { en: "duty-free", zh: "免税" },
              { en: "regular retail", zh: "正常零售价" },
              { en: "popular as a gift", zh: "很适合送礼" },
            ],
            vocabNotes: {
              "retail": {
                meaningInContext: "在这里指普通商店的零售价格，与免税价对比",
                similarUsage: "类似用法：The retail price is $250.",
              },
            },
            alternativeExpressions: [
              { textEn: "This single malt is our best seller for gifts. Great value at duty-free prices.", textZh: "这款单一麦芽是我们最畅销的礼品酒。免税价很划算。", actionHint: "可以问具体价格", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds good. Is there a limit on how much alcohol I can bring into the country?",
            textZh: "听起来不错。入境能带多少酒有限制吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "It depends on your destination. For most countries, you can bring 1-2 liters duty-free. Where are you flying to?",
            textZh: "取决于您的目的地。大多数国家可以免税带1到2升。您飞去哪里？",
            keyPhrases: [
              { en: "limit", zh: "限制" },
              { en: "depends on your destination", zh: "取决于目的地" },
              { en: "1-2 liters duty-free", zh: "1到2升免税额度" },
            ],
            alternativeExpressions: [
              { textEn: "That varies by country. Most places allow 1 to 2 liters. Where are you headed?", textZh: "各国不一样。大多数地方允许带1到2升。您去哪里？", actionHint: "告知目的地", frequency: "common" },
              { textEn: "Every country has different allowances. What's your destination? I can check for you.", textZh: "每个国家的限额不同。您的目的地是哪里？我帮您查一下。", actionHint: "说出目的地国家", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm flying back to China.",
            textZh: "我飞回中国。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "For China, the duty-free allowance is 1,500 ml of alcohol. This bottle is 750 ml, so you could actually buy two bottles if you'd like.",
            textZh: "去中国的话，免税酒精额度是1500毫升。这瓶750毫升，所以您可以买两瓶。",
            keyPhrases: [
              { en: "duty-free allowance", zh: "免税额度" },
              { en: "ml", zh: "毫升" },
            ],
            alternativeExpressions: [
              { textEn: "China allows up to 1,500 ml of alcohol duty-free. This one's 750 ml, so you've got room for another.", textZh: "中国允许免税带1500毫升酒。这瓶750毫升，还可以再买一瓶。", actionHint: "考虑是否再买一瓶", frequency: "common" },
              { textEn: "The limit for China is 1.5 liters of spirits. You could grab two of these and still be under.", textZh: "去中国的限额是1.5升烈酒。买两瓶也不超。", actionHint: "可以考虑多买一瓶", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll just take one. Can I pay with Chinese yuan?",
            textZh: "就买一瓶吧。可以用人民币付吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "We accept US dollars, euros, and major credit cards. We don't accept yuan, unfortunately. Would you like to pay by card?",
            textZh: "我们接受美元、欧元和主要信用卡。很抱歉不接受人民币。您用信用卡付吗？",
            keyPhrases: [
              { en: "accept", zh: "接受" },
              { en: "major credit cards", zh: "主要信用卡" },
              { en: "pay by card", zh: "刷卡付" },
            ],
            alternativeExpressions: [
              { textEn: "We take dollars, euros, Visa, Mastercard — sorry, no yuan though. Card okay?", textZh: "我们收美元、欧元、Visa、Mastercard——抱歉，不收人民币。刷卡可以吗？", actionHint: "用信用卡付款", frequency: "common" },
              { textEn: "Cash in dollars or euros, or any major credit card. Unfortunately we can't take Chinese yuan.", textZh: "美元或欧元现金，或主要信用卡都可以。很遗憾不能收人民币。", actionHint: "选择付款方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I'll use my Visa card.",
            textZh: "好的，用Visa卡。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Here's your receipt. Keep it in case customs asks for it. The bottle will be sealed in a duty-free bag — please don't open it until you've passed customs at your destination.",
            textZh: "给您收据。留好以防海关检查。酒会密封在免税袋里——请到达目的地过完海关再打开。",
            keyPhrases: [
              { en: "receipt", zh: "收据" },
              { en: "customs", zh: "海关" },
              { en: "sealed", zh: "密封" },
              { en: "duty-free bag", zh: "免税袋" },
            ],
            culturalNote: "免税品的密封袋在到达目的地海关前不要打开，否则可能被征税。",
            alternativeExpressions: [
              { textEn: "Here you go. Hold on to the receipt for customs. Don't break the seal on the bag until after you clear customs.", textZh: "给您。收据留着过海关用。过完海关之前不要拆开密封袋。", actionHint: "保留收据不拆袋", frequency: "common" },
              { textEn: "All done! Receipt's in the bag. Remember, keep it sealed until you've gone through customs at your destination.", textZh: "好了！收据在袋子里。记住，到目的地过完海关之前保持密封。", actionHint: "到目的地再拆", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 2: 退税流程 ---
      {
        id: "tax-refund",
        titleZh: "退税流程",
        titleEn: "Tax Refund Process",
        description: "在机场办理离境退税",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, where is the tax refund counter? I have some purchases I'd like to get a refund on.",
            textZh: "请问，退税柜台在哪里？我有一些购物想退税。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "The tax refund counter is near Gate A, before you go through security. Make sure you have your receipts, the tax refund forms from the stores, and your passport ready.",
            textZh: "退税柜台在A区登机口附近，过安检之前。请准备好您的购物收据、商店给的退税表和护照。",
            keyPhrases: [
              { en: "tax refund counter", zh: "退税柜台" },
              { en: "tax refund forms", zh: "退税表" },
              { en: "receipts", zh: "收据" },
            ],
            vocabNotes: {
              "tax refund": {
                meaningInContext: "在这里指外国游客离境时可以退还购物时所付的增值税",
                similarUsage: "类似用法：Can I get a tax refund on this?",
              },
            },
            alternativeExpressions: [
              { textEn: "You'll find the VAT refund desk on the departure level. Don't forget your Global Blue forms.", textZh: "增值税退税台在出发层。别忘了带Global Blue的退税单。", actionHint: "找出发层的退税柜台", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do I need to show the items I bought to the customs officer?",
            textZh: "需要给海关人员看我买的东西吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Sometimes yes. The customs officer may ask to see the items, especially high-value purchases. So keep them accessible — don't pack them in your checked luggage before getting the stamp.",
            textZh: "有时需要。海关人员可能会要求看商品，尤其是高价值的购买。所以放在容易拿到的地方——盖章之前不要放进托运行李里。",
            keyPhrases: [
              { en: "customs officer", zh: "海关人员" },
              { en: "high-value purchases", zh: "高价值购买" },
              { en: "accessible", zh: "容易拿到的" },
              { en: "stamp", zh: "盖章" },
            ],
            responseTip: "退税前确保商品方便取出展示",
            alternativeExpressions: [
              { textEn: "They might want to see the goods, especially the expensive stuff. Keep everything handy until you get the stamp.", textZh: "他们可能想看看商品，特别是贵的东西。盖章之前都放在手边。", actionHint: "贵重物品放手边", frequency: "common" },
              { textEn: "It depends — for big purchases they usually check. Don't put anything in your suitcase before the refund is processed.", textZh: "看情况——大额购物他们通常会检查。退税处理之前不要把东西放进箱子里。", actionHint: "退税前别装箱", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Can I get the refund in cash or only on my credit card?",
            textZh: "明白了。退税可以拿现金还是只能退到信用卡？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "You can choose either cash or card refund. Cash is immediate but there's usually a processing fee. Card refund takes 2-4 weeks but no fee. Most people prefer the card refund.",
            textZh: "现金和信用卡都可以。现金是即时的但通常有手续费。退到卡上要2到4周但没有手续费。大多数人选择退到卡上。",
            keyPhrases: [
              { en: "processing fee", zh: "手续费" },
              { en: "immediate", zh: "即时的" },
              { en: "card refund", zh: "退到卡上" },
            ],
            alternativeExpressions: [
              { textEn: "Cash or card — your call. Cash is instant but they take a small fee. Card takes a few weeks but it's fee-free.", textZh: "现金或刷卡——您选。现金立刻拿到但有小额手续费。退到卡上要几周但没手续费。", actionHint: "选择退款方式", frequency: "common" },
              { textEn: "You've got two options: cash now with a handling charge, or to your credit card in about 2 to 4 weeks with no charge.", textZh: "有两种选择：现在拿现金但有手续费，或者2到4周退到信用卡上不收费。", actionHint: "权衡手续费和时间", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll do the card refund then. How much will I get back approximately?",
            textZh: "那我选退到卡上。大概能退多少？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "The VAT rate here is 20%, but the actual refund is usually around 12-14% after the service fee. Based on your receipts, you should get back about €85.",
            textZh: "这里的增值税率是20%，但扣除服务费后实际退税通常在12-14%左右。根据您的收据，大概能退85欧元。",
            keyPhrases: [
              { en: "VAT rate", zh: "增值税率" },
              { en: "service fee", zh: "服务费" },
              { en: "get back", zh: "退回" },
            ],
            alternativeExpressions: [
              { textEn: "VAT is 20%, but after the service charge you'll get roughly 12-14% back. That's about €85 for you.", textZh: "增值税20%，扣掉服务费实际退大约12-14%。您大概能退85欧元。", actionHint: "了解退税金额", frequency: "common" },
              { textEn: "You won't get the full 20% back — there's a handling fee. Expect around €85 based on what you spent.", textZh: "不会退满20%——有手续费。根据您的消费，预计退大约85欧元。", actionHint: "注意实际退款比税率低", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's helpful. Thank you for explaining everything.",
            textZh: "很有帮助。谢谢你解释这些。",
          },
        ],
      },
    ],
  },

  // ==================== 机场贵宾室 ====================
  {
    id: "airport-lounge",
    category: "airport",
    titleZh: "机场贵宾室",
    titleEn: "Airport Lounge",
    description: "进入机场贵宾休息室，包括资格确认、设施使用等",
    otherRole: "贵宾室前台",
    otherRoleIcon: "star",
    flows: [
      {
        id: "lounge-access",
        titleZh: "进入贵宾室",
        titleEn: "Lounge Access",
        description: "用信用卡权益或付费进入贵宾室",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to use the lounge. I have a Priority Pass card.",
            textZh: "你好，我想用贵宾室。我有Priority Pass卡。",
          },
          {
            speaker: "them",
            role: "贵宾室前台",
            textEn: "Welcome! May I see your Priority Pass card and your boarding pass, please?",
            textZh: "欢迎！请出示您的Priority Pass卡和登机牌。",
            keyPhrases: [
              { en: "Priority Pass", zh: "优先通行卡" },
              { en: "boarding pass", zh: "登机牌" },
            ],
            alternativeExpressions: [
              { textEn: "Of course. I'll need your lounge membership card and today's boarding pass.", textZh: "当然。我需要您的休息室会员卡和今天的登机牌。", actionHint: "出示两张卡", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here they are. Can I bring a guest with me?",
            textZh: "给您。我能带一位客人一起进来吗？",
          },
          {
            speaker: "them",
            role: "贵宾室前台",
            textEn: "Your Priority Pass allows one complimentary guest. Additional guests are $35 each. Would you like to bring someone in?",
            textZh: "您的Priority Pass可以免费带一位客人。额外的客人每位35美元。您要带人进来吗？",
            keyPhrases: [
              { en: "complimentary guest", zh: "免费客人名额" },
              { en: "additional guests", zh: "额外的客人" },
            ],
            vocabNotes: {
              "complimentary": {
                meaningInContext: "在这里表示「免费赠送的」，不是「赞美的」",
                similarUsage: "类似用法：Complimentary breakfast（免费早餐）",
              },
            },
            alternativeExpressions: [
              { textEn: "Your pass includes one free guest. After that, it's $35 per person. Want to bring anyone?", textZh: "您的卡包含一位免费客人。之后每人35美元。要带人进来吗？", actionHint: "告知是否有同行人", frequency: "common" },
              { textEn: "One guest comes free with your membership. Extra guests are $35 a head.", textZh: "会员可以免费带一位客人。额外的每位35美元。", actionHint: "确认带几位客人", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, my wife is with me. So she's free, right?",
            textZh: "是的，我太太在一起。她是免费的对吧？",
          },
          {
            speaker: "them",
            role: "贵宾室前台",
            textEn: "That's correct. I just need her boarding pass as well. You're all set. The lounge closes at 10 PM tonight.",
            textZh: "是的。我也需要她的登机牌。好了，都办好了。贵宾室今晚10点关闭。",
            keyPhrases: [
              { en: "you're all set", zh: "都办好了" },
              { en: "closes at", zh: "……关闭" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, she's covered. Just need her boarding pass too. Enjoy the lounge — we close at 10 tonight.", textZh: "是的，她包含在内。她的登机牌也给我看一下。好好享受贵宾室——今晚10点关门。", actionHint: "出示同伴的登机牌", frequency: "common" },
              { textEn: "That's right, one guest is included. Her boarding pass, please. The lounge is open until 10 PM.", textZh: "没错，一位客人是免费的。请出示她的登机牌。贵宾室开放到晚上10点。", actionHint: "给出同伴登机牌", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What facilities does the lounge have?",
            textZh: "贵宾室有什么设施？",
          },
          {
            speaker: "them",
            role: "贵宾室前台",
            textEn: "We have a buffet area with hot and cold food, a bar with complimentary drinks, shower rooms, a quiet zone for resting, and high-speed Wi-Fi. The shower rooms are first-come, first-served.",
            textZh: "我们有自助餐区，有冷热食物，酒吧有免费饮品，还有淋浴间、安静休息区和高速Wi-Fi。淋浴间是先到先得。",
            keyPhrases: [
              { en: "buffet", zh: "自助餐" },
              { en: "complimentary drinks", zh: "免费饮品" },
              { en: "shower rooms", zh: "淋浴间" },
              { en: "quiet zone", zh: "安静休息区" },
              { en: "first-come, first-served", zh: "先到先得" },
            ],
            alternativeExpressions: [
              { textEn: "There's a food spread, an open bar, showers, a nap area, and free WiFi. Showers are first come, first served.", textZh: "有自助餐、开放酒吧、淋浴间、休息区和免费WiFi。淋浴先到先得。", actionHint: "自由使用设施", frequency: "common" },
              { textEn: "Help yourself to food and drinks at the bar. We also have shower facilities and a quiet area if you need to rest.", textZh: "自助餐和吧台饮品随便用。我们还有淋浴设施和安静休息区，需要休息的话可以用。", actionHint: "随意使用", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Will you make an announcement when my flight starts boarding?",
            textZh: "我的航班开始登机时会广播通知吗？",
          },
          {
            speaker: "them",
            role: "贵宾室前台",
            textEn: "We don't announce specific flights, but there are departure screens throughout the lounge. I'd recommend setting an alarm on your phone. Your gate is about a 10-minute walk from here.",
            textZh: "我们不会广播具体航班，但贵宾室里到处有航班信息屏。建议您在手机上设个闹钟。从这里走到您的登机口大约10分钟。",
            keyPhrases: [
              { en: "departure screens", zh: "航班信息屏" },
              { en: "setting an alarm", zh: "设闹钟" },
              { en: "10-minute walk", zh: "步行10分钟" },
            ],
            responseTip: "记得自己留意登机时间，贵宾室一般不会提醒具体航班",
            alternativeExpressions: [
              { textEn: "We don't do flight announcements here, but check the monitors. Set a reminder — it's a 10-minute walk to your gate.", textZh: "我们这里不广播航班信息，但可以看屏幕。设个提醒——走到您的登机口要10分钟。", actionHint: "设手机提醒", frequency: "common" },
              { textEn: "No individual boarding calls, but the screens are updated live. I'd leave yourself at least 15 minutes to get to the gate.", textZh: "没有单独的登机广播，但屏幕实时更新。建议至少提前15分钟出发去登机口。", actionHint: "提前15分钟出发", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 2: 付费进入 + 使用设施 ---
      {
        id: "paid-access",
        titleZh: "付费使用贵宾室",
        titleEn: "Paid Lounge Access",
        description: "没有会员卡，付费进入贵宾室",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I don't have a membership card, but I'd like to use the lounge. Is there a walk-in option?",
            textZh: "你好，我没有会员卡，但想用贵宾室。可以现场付费进入吗？",
          },
          {
            speaker: "them",
            role: "贵宾室前台",
            textEn: "Yes, we offer day passes. It's $55 per person for unlimited access until your departure. That includes food, drinks, Wi-Fi, and shower facilities.",
            textZh: "可以的，我们提供日通行证。每人55美元，离开前无限使用。包括餐饮、Wi-Fi和淋浴设施。",
            keyPhrases: [
              { en: "day passes", zh: "日通行证" },
              { en: "unlimited access", zh: "无限使用" },
              { en: "until your departure", zh: "直到您离开" },
            ],
            vocabNotes: {
              "day passes": {
                meaningInContext: "在这里指一次性付费使用贵宾室的通行证",
                similarUsage: "类似用法：Can I buy a day pass for the gym?",
              },
            },
            alternativeExpressions: [
              { textEn: "Walk-ins are welcome. It's $55 at the door, which covers everything.", textZh: "欢迎直接进入。门口付55美元，什么都包含。", actionHint: "可以直接付费进入", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds reasonable. My flight is delayed by 4 hours, so I could really use a comfortable place to wait. I'll take a day pass.",
            textZh: "价格还可以。我的航班延误4小时，确实需要一个舒适的地方等。我买一张日通行证。",
          },
          {
            speaker: "them",
            role: "贵宾室前台",
            textEn: "I understand — delays can be tiring. Here's your pass. Would you like to reserve a shower slot? We have some availability in about 30 minutes.",
            textZh: "理解——延误确实很累。给您通行证。想预约淋浴吗？大约30分钟后有空位。",
            keyPhrases: [
              { en: "reserve", zh: "预约" },
              { en: "shower slot", zh: "淋浴时段" },
              { en: "availability", zh: "空位" },
            ],
            alternativeExpressions: [
              { textEn: "Delays are rough. Here's your day pass. Want me to book a shower for you? One opens up in about half an hour.", textZh: "延误确实折腾人。给您日通行证。要帮您预约淋浴吗？大概半小时后有空位。", actionHint: "考虑是否需要淋浴", frequency: "common" },
              { textEn: "Sorry about your delay. Welcome in. We have a shower available in 30 minutes if you're interested.", textZh: "抱歉您航班延误了。欢迎进来。30分钟后有淋浴空位，需要的话可以预约。", actionHint: "要的话告知前台", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please reserve one for me. Are towels provided?",
            textZh: "好的，帮我预约一个。提供毛巾吗？",
          },
          {
            speaker: "them",
            role: "贵宾室前台",
            textEn: "Yes, we provide towels, toiletries, a hair dryer — everything you need. I'll put you down for 2:30 PM. We'll call your name when it's ready.",
            textZh: "是的，我们提供毛巾、洗漱用品、吹风机——所有您需要的。帮您约2:30。准备好了会叫您的名字。",
            keyPhrases: [
              { en: "toiletries", zh: "洗漱用品" },
              { en: "hair dryer", zh: "吹风机" },
              { en: "put you down for", zh: "帮您登记/预约" },
            ],
            alternativeExpressions: [
              { textEn: "Towels, shampoo, everything's included. I've got you booked at 2:30. We'll come find you.", textZh: "毛巾、洗发水，什么都有。帮您预约了2:30。到时候来找您。", actionHint: "等候叫号", frequency: "common" },
              { textEn: "All amenities are provided. You're down for the 2:30 slot. Just listen for your name.", textZh: "所有用品都提供。您预约了2:30的时段。留意叫您名字。", actionHint: "注意听名字", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a place to charge my phone and laptop?",
            textZh: "有给手机和笔记本充电的地方吗？",
          },
          {
            speaker: "them",
            role: "贵宾室前台",
            textEn: "Yes, there are charging stations at every seat, and we have universal adapters available at the front desk if you need one. Just ask.",
            textZh: "有的，每个座位都有充电口，前台也有万能转换插头，需要的话来借就行。",
            keyPhrases: [
              { en: "charging stations", zh: "充电口" },
              { en: "universal adapters", zh: "万能转换插头" },
            ],
            alternativeExpressions: [
              { textEn: "Every seat has USB and power outlets. Need an adapter? We've got those at the desk.", textZh: "每个座位都有USB和电源插座。需要转换插头吗？前台有。", actionHint: "找座位充电", frequency: "common" },
              { textEn: "Charging points are built into every workstation. We also lend out adapters if you need one.", textZh: "每个工位都有内置充电口。需要的话我们也借转换插头。", actionHint: "如需适配器来前台借", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Thank you so much.",
            textZh: "太好了。非常感谢。",
          },
        ],
      },
    ],
  },

  // ==================== 航班延误 ====================
  {
    id: "airport-delay",
    category: "airport",
    titleZh: "航班延误",
    titleEn: "Flight Delay",
    description: "航班延误后的应对，包括改签、补偿、住宿安排等",
    otherRole: "航空公司服务台",
    otherRoleIcon: "clock",
    flows: [
      {
        id: "short-delay",
        titleZh: "短时延误",
        titleEn: "Short Delay",
        description: "航班延误1-3小时，了解情况并等待",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, the departure board says my flight to Vancouver is delayed. Can you tell me what's going on?",
            textZh: "请问，信息屏显示我去温哥华的航班延误了。能告诉我怎么回事吗？",
          },
          {
            speaker: "them",
            role: "服务台",
            textEn: "Yes, flight AC889 is delayed due to a mechanical issue. The maintenance team is working on it. We're expecting a 2-hour delay, with a new departure time of 5:30 PM.",
            textZh: "是的，AC889航班因为机械故障延误了。维修团队正在处理。预计延误2小时，新的起飞时间是下午5:30。",
            keyPhrases: [
              { en: "mechanical issue", zh: "机械故障" },
              { en: "maintenance team", zh: "维修团队" },
              { en: "new departure time", zh: "新的起飞时间" },
            ],
            vocabNotes: {
              "mechanical issue": {
                meaningInContext: "在这里指飞机设备出了问题，需要维修",
                similarUsage: "类似用法：The car has a mechanical problem.",
              },
            },
            alternativeExpressions: [
              { textEn: "There's a technical problem with the aircraft. Engineers are looking into it.", textZh: "飞机有技术问题。工程师在检查。", actionHint: "等待更新", frequency: "common" },
              { textEn: "We're experiencing a delay due to an equipment issue. Estimated delay is two hours.", textZh: "由于设备问题我们出现了延误。预计延误两小时。", actionHint: "注意新的起飞时间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Will there be any updates? How will I know if the time changes again?",
            textZh: "会有更新通知吗？如果时间又变了我怎么知道？",
          },
          {
            speaker: "them",
            role: "服务台",
            textEn: "We'll make announcements at the gate and update the departure board. If you have our airline app, you'll get push notifications too. I'd recommend staying near the gate area.",
            textZh: "我们会在登机口广播并更新信息屏。如果您有我们航空公司的App，也会收到推送通知。建议您留在登机口附近。",
            keyPhrases: [
              { en: "announcements", zh: "广播" },
              { en: "departure board", zh: "信息屏" },
              { en: "push notifications", zh: "推送通知" },
              { en: "near the gate area", zh: "登机口附近" },
            ],
            alternativeExpressions: [
              { textEn: "Keep an eye on the screens and listen for announcements. Download our app for live updates. Best to stay close to the gate.", textZh: "留意屏幕和广播。下载我们的App可以看实时更新。最好留在登机口附近。", actionHint: "下载App看更新", frequency: "common" },
              { textEn: "We'll keep you posted via the boards and PA system. Don't wander too far from the gate.", textZh: "我们会通过信息屏和广播系统通知您。别走太远离开登机口。", actionHint: "留在登机口附近", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is the airline providing any meal vouchers for the delay?",
            textZh: "航空公司会提供餐食券吗？",
          },
          {
            speaker: "them",
            role: "服务台",
            textEn: "For delays over 2 hours, we provide a $15 meal voucher. Here's yours — you can use it at any restaurant in the terminal.",
            textZh: "延误超过2小时我们提供15美元的餐食券。给您——航站楼内任何餐厅都可以用。",
            keyPhrases: [
              { en: "meal voucher", zh: "餐食券" },
              { en: "delays over 2 hours", zh: "延误超过2小时" },
            ],
            alternativeExpressions: [
              { textEn: "Since it's been over 2 hours, here's a $15 food voucher. It works at any place in the terminal.", textZh: "因为已经超过2小时了，给您一张15美元的餐食券。航站楼里的餐厅都能用。", actionHint: "拿去吃点东西", frequency: "common" },
              { textEn: "We're handing out meal vouchers for the delay — $15, good at any eatery here.", textZh: "我们在发延误的餐食券——15美元，这里任何餐饮店都可以用。", actionHint: "找餐厅使用", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. I have a hotel reservation tonight — should I call them to let them know I'll be late?",
            textZh: "谢谢。我今晚有酒店预订——需要通知他们我会晚到吗？",
          },
          {
            speaker: "them",
            role: "服务台",
            textEn: "That would be a good idea, especially if you have a late check-in. Most hotels will hold your room, but it's better to confirm. We apologize again for the inconvenience.",
            textZh: "这是个好主意，尤其如果您是晚到入住。大多数酒店会保留房间，但最好确认一下。再次为不便道歉。",
            keyPhrases: [
              { en: "hold your room", zh: "保留房间" },
              { en: "late check-in", zh: "晚到入住" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, definitely give them a heads up. They'll usually keep the room, but best to call ahead. Sorry again.", textZh: "是的，最好提前通知他们。通常会保留房间，但打个电话确认最好。再次抱歉。", actionHint: "提前打电话通知酒店", frequency: "common" },
              { textEn: "Good thinking. Most hotels hold late arrivals, but a quick call won't hurt. Apologies for the trouble.", textZh: "想得周到。大多数酒店会等晚到的客人，但打个电话更保险。抱歉给您添麻烦了。", actionHint: "联系酒店确认", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 2: 长时延误/改签 ---
      {
        id: "rebooking",
        titleZh: "改签与补偿",
        titleEn: "Rebooking & Compensation",
        description: "航班长时间延误或取消，需要改签并争取补偿",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "My flight has been delayed for over 5 hours now, and they just announced another 2-hour delay. I need to get to New York tonight. What can you do?",
            textZh: "我的航班已经延误超过5小时了，刚又宣布再延误2小时。我今晚必须到纽约。你能怎么处理？",
          },
          {
            speaker: "them",
            role: "服务台",
            textEn: "I completely understand your frustration. Let me check alternative flights for you. I can see there's a seat available on a Delta flight departing at 8 PM — that would get you to JFK by 11:30 PM. Shall I rebook you?",
            textZh: "完全理解您的心情。让我帮您查替代航班。我看到达美航空晚上8点有一个座位——到纽约JFK是晚上11:30。帮您改签吗？",
            keyPhrases: [
              { en: "alternative flights", zh: "替代航班" },
              { en: "rebook", zh: "改签" },
              { en: "frustration", zh: "沮丧/不满" },
            ],
            vocabNotes: {
              "rebook": {
                meaningInContext: "在这里指把原来的机票改到另一个航班上",
                similarUsage: "类似用法：Can I rebook my hotel for a different date?",
              },
            },
            alternativeExpressions: [
              { textEn: "I can put you on another carrier's flight tonight. There's one leaving at 8 PM.", textZh: "我可以帮您转到另一家航空公司今晚的航班。有一班8点起飞。", actionHint: "确认是否接受改签", frequency: "common" },
            ],
            isBranchPoint: true,
          },
          {
            speaker: "you",
            textEn: "Yes, please rebook me on that flight. Also, am I entitled to any compensation for this delay?",
            textZh: "好的，帮我改签到那班。另外，这次延误我有权获得补偿吗？",
          },
          {
            speaker: "them",
            role: "服务台",
            textEn: "Since the delay is due to a mechanical issue — which is within the airline's control — you are entitled to compensation. I can issue you a $200 travel voucher now, or you can file a formal claim for cash compensation through our website.",
            textZh: "因为延误是机械故障造成的——属于航空公司的责任——您有权获得补偿。我现在可以给您200美元的旅行代金券，或者您可以通过我们的网站提交正式的现金赔偿申请。",
            keyPhrases: [
              { en: "entitled to compensation", zh: "有权获得补偿" },
              { en: "within the airline's control", zh: "航空公司的责任" },
              { en: "travel voucher", zh: "旅行代金券" },
              { en: "file a formal claim", zh: "提交正式申请" },
              { en: "cash compensation", zh: "现金赔偿" },
            ],
            culturalNote: "在美国，航空公司对因自身原因造成的延误有赔偿义务。在欧盟，EC 261法规对旅客保护更强。",
            alternativeExpressions: [
              { textEn: "Because it's a mechanical problem — our responsibility — you're eligible for compensation. I can give you a $200 voucher now, or you can claim cash online.", textZh: "因为是机械问题——我们的责任——您有资格获得赔偿。我可以现在给您200美元代金券，或者您在网上申请现金。", actionHint: "选择代金券或现金", frequency: "common" },
              { textEn: "You do qualify for compensation since it's on us. Would you like a travel credit right now or to submit a claim for cash?", textZh: "因为是我们的原因，您确实有权获得补偿。您想现在拿旅行积分还是提交现金索赔？", actionHint: "决定补偿方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd prefer the cash compensation. How do I file the claim?",
            textZh: "我更想要现金赔偿。怎么提交申请？",
          },
          {
            speaker: "them",
            role: "服务台",
            textEn: "Go to our website, under \"Customer Support,\" then \"Delay Compensation.\" You'll need your booking reference, the original flight number, and today's date. Claims are usually processed within 30 days.",
            textZh: "去我们网站，找 \"客户支持\" 下的 \"延误赔偿\"。需要您的订票号、原航班号和今天的日期。申请通常30天内处理。",
            keyPhrases: [
              { en: "booking reference", zh: "订票号" },
              { en: "processed within 30 days", zh: "30天内处理" },
              { en: "delay compensation", zh: "延误赔偿" },
            ],
            alternativeExpressions: [
              { textEn: "Just visit our site, go to Support, then Compensation. Have your booking number and flight details handy. Takes about a month to process.", textZh: "去我们网站，点支持，再点赔偿。准备好订票号和航班信息。大概一个月处理。", actionHint: "记下网站路径", frequency: "common" },
              { textEn: "File your claim online under Delay Compensation. You'll need your confirmation code and today's flight info. It usually takes 30 days.", textZh: "在网上的延误赔偿栏目提交申请。需要确认码和今天的航班信息。通常30天处理。", actionHint: "保留好航班信息", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What about my checked luggage? Will it be moved to the new flight?",
            textZh: "我的托运行李呢？会转到新航班上吗？",
          },
          {
            speaker: "them",
            role: "服务台",
            textEn: "Yes, I've already arranged for your luggage to be transferred to the Delta flight. Here's your new boarding pass and updated baggage tag number. Gate F9, boarding at 7:30 PM.",
            textZh: "是的，我已经安排把您的行李转到达美航班了。给您新的登机牌和更新的行李标签号。F9登机口，7:30开始登机。",
            keyPhrases: [
              { en: "transferred", zh: "转运" },
              { en: "updated baggage tag", zh: "更新的行李标签" },
            ],
            alternativeExpressions: [
              { textEn: "All taken care of. Your bags are being moved to the Delta flight. Here's your new pass — Gate F9, boards at 7:30.", textZh: "都安排好了。您的行李正在转到达美航班。给您新登机牌——F9登机口，7:30登机。", actionHint: "记住新的登机口和时间", frequency: "common" },
              { textEn: "Your luggage is already being transferred. New boarding pass here, updated tag number too. Head to F9 by 7:30.", textZh: "您的行李已经在转运了。新登机牌在这里，行李标签号也更新了。7:30前到F9。", actionHint: "保管好新登机牌", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you for taking care of this. I appreciate your help.",
            textZh: "谢谢你处理这些。非常感谢你的帮助。",
          },
        ],
      },
    ],
  },

  // ==================== 海关申报 ====================
  {
    id: "airport-customs-declare",
    category: "airport",
    titleZh: "海关申报",
    titleEn: "Customs Declaration",
    description: "入境时填写海关申报表、申报携带物品，包括超额物品和食品",
    otherRole: "海关官员",
    otherRoleIcon: "clipboard",
    flows: [
      {
        id: "standard-declaration",
        titleZh: "标准申报",
        titleEn: "Standard Declaration",
        description: "正常填写申报表，没有需要特别申报的物品",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, do I need to fill out a customs declaration form?",
            textZh: "请问，我需要填写海关申报表吗？",
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "Yes, every arriving passenger needs to complete one. Here's the form. Fill in your personal information, flight details, and list any items you need to declare.",
            textZh: "是的，每位入境旅客都需要填写。给您表格。填写个人信息、航班信息，列出需要申报的物品。",
            keyPhrases: [
              { en: "customs declaration form", zh: "海关申报表" },
              { en: "arriving passenger", zh: "入境旅客" },
              { en: "declare", zh: "申报" },
            ],
            vocabNotes: {
              "declare": {
                meaningInContext: "在海关语境中指「申报」，就是告诉海关你带了什么东西",
                similarUsage: "类似用法：Nothing to declare.（没有需要申报的）",
              },
            },
            alternativeExpressions: [
              { textEn: "You'll need to fill out a declaration card. Just mark 'yes' or 'no' for each question.", textZh: "您需要填一张申报卡。每个问题勾「是」或「否」。", actionHint: "照着表格逐项填写", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "What counts as items I need to declare? I have some gifts and personal electronics.",
            textZh: "什么算需要申报的？我有一些礼物和个人电子产品。",
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "You need to declare: goods over the duty-free allowance, food and agricultural products, more than $10,000 in cash, and any restricted items. Personal electronics for your own use are usually fine.",
            textZh: "需要申报的有：超过免税额度的商品、食品和农产品、超过1万美元的现金、以及任何限制物品。自用的个人电子产品通常没问题。",
            keyPhrases: [
              { en: "duty-free allowance", zh: "免税额度" },
              { en: "agricultural products", zh: "农产品" },
              { en: "restricted items", zh: "限制物品" },
              { en: "personal use", zh: "自用" },
            ],
            alternativeExpressions: [
              { textEn: "Anything over the allowance, any food or plants, large amounts of cash, or restricted goods. Your personal laptop and phone are fine.", textZh: "超过额度的东西、食品或植物、大额现金或限制物品都要申报。个人笔记本和手机没问题。", actionHint: "对照清单检查", frequency: "common" },
              { textEn: "If you're carrying food, more than $10,000 in cash, or expensive goods over the limit, mark them on the form. Personal gadgets don't count.", textZh: "如果带了食品、超过1万美元现金或超限的贵重商品，在表格上标注。个人电子设备不算。", actionHint: "在表格上标注", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have about $500 worth of gifts — mostly tea and snacks for friends. Do I need to declare those?",
            textZh: "我有大约500美元的礼物——主要是给朋友的茶叶和零食。需要申报吗？",
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "The tea is fine, but food items including snacks should be declared — even if they're within the allowance. Just check 'yes' on the food section of the form. It doesn't necessarily mean you'll be taxed; they just need to inspect it.",
            textZh: "茶叶没问题，但食品包括零食应该申报——即使在额度内。在表格的食品栏勾「是」就行。不一定会被征税，只是需要检查。",
            keyPhrases: [
              { en: "check 'yes'", zh: "勾「是」" },
              { en: "food section", zh: "食品栏" },
              { en: "inspect", zh: "检查" },
              { en: "taxed", zh: "征税" },
            ],
            responseTip: "食品类即使在额度内也建议主动申报，态度诚实更好",
            alternativeExpressions: [
              { textEn: "Tea's no problem. The snacks — you should declare those. Tick 'yes' for food. They'll just take a quick look, won't necessarily charge you.", textZh: "茶叶没问题。零食的话应该申报。食品栏勾「是」。他们只是看一下，不一定征税。", actionHint: "食品栏勾是", frequency: "common" },
              { textEn: "Declare any food items, even small snacks. It's better to be upfront — they may just wave you through after a quick inspection.", textZh: "任何食品都要申报，哪怕是小零食。主动申报更好——检查一下可能就放行了。", actionHint: "诚实申报最安全", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. I've filled everything out. Which line do I go to?",
            textZh: "明白了。我都填好了。我去哪条通道？",
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "Since you have items to declare, please go to the red channel — \"Goods to Declare.\" The green channel is for passengers with nothing to declare.",
            textZh: "因为您有需要申报的物品，请走红色通道——「有物品申报」。绿色通道是给没有申报物品的旅客的。",
            keyPhrases: [
              { en: "red channel", zh: "红色通道" },
              { en: "green channel", zh: "绿色通道" },
              { en: "goods to declare", zh: "有物品申报" },
              { en: "nothing to declare", zh: "无申报物品" },
            ],
            culturalNote: "大部分国际机场海关都分红绿两个通道：红色是有物品需要申报的，绿色是没有的。走错通道如果被查到会有麻烦。",
            alternativeExpressions: [
              { textEn: "Take the red lane on the right — that's for declarations. The green lane is only if you have nothing to declare.", textZh: "走右边的红色通道——那是申报用的。绿色通道只适合没东西要申报的人。", actionHint: "走红色通道", frequency: "common" },
              { textEn: "You'll want the 'Declare' line — the red one. Green is for those with nothing to report.", textZh: "您要走「申报」的那条线——红色的。绿色是给没东西要报的人的。", actionHint: "找红色标志的通道", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you for your help.",
            textZh: "谢谢你的帮助。",
          },
        ],
      },

      // --- Flow 2: 超额物品申报 ---
      {
        id: "excess-declaration",
        titleZh: "超额物品申报",
        titleEn: "Declaring Excess Items",
        description: "携带超过免税额度的物品需要缴税",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "海关",
            textEn: "Welcome. Please hand me your customs form and passport. I see you've declared goods valued at $2,500. Can you show me what you have?",
            textZh: "欢迎。请把海关申报表和护照给我。我看到您申报了价值2500美元的物品。能给我看看是什么吗？",
            keyPhrases: [
              { en: "customs form", zh: "海关申报表" },
              { en: "declared goods", zh: "申报的物品" },
              { en: "valued at", zh: "价值" },
            ],
            alternativeExpressions: [
              { textEn: "Form and passport, please. You've marked 'yes' for goods over the allowance. Let's have a look.", textZh: "表格和护照请给我。您在超额物品那里勾了「是」。我们看一下。", actionHint: "准备好展示你带的东西", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure. I bought a designer handbag for $1,800 and two bottles of perfume totaling $700.",
            textZh: "好的。我买了一个名牌手提包1800美元，两瓶香水共700美元。",
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "Do you have the purchase receipts? The duty-free personal allowance is $800. You're over by $1,700, so there will be a duty charge on the excess amount.",
            textZh: "有购物收据吗？个人免税额度是800美元。您超出了1700美元，超出部分需要缴关税。",
            keyPhrases: [
              { en: "purchase receipts", zh: "购物收据" },
              { en: "personal allowance", zh: "个人免税额度" },
              { en: "over by", zh: "超出了" },
              { en: "duty charge", zh: "关税" },
              { en: "excess amount", zh: "超出部分" },
            ],
            vocabNotes: {
              "duty": {
                meaningInContext: "在海关语境中，duty 指关税/进口税，不是「责任」",
                similarUsage: "类似用法：How much duty do I owe?",
              },
            },
            alternativeExpressions: [
              { textEn: "Got receipts? The allowance is $800, and you're $1,700 over. You'll owe duty on the extra.", textZh: "有收据吗？免税额度是800美元，您超了1700美元。超出部分要交关税。", actionHint: "出示收据", frequency: "common" },
              { textEn: "I'll need to see the receipts. The personal exemption is $800 — anything above that is subject to duty.", textZh: "我需要看一下收据。个人免税额是800美元——超出的部分要交关税。", actionHint: "准备好所有收据", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, here are the receipts. How much will the duty be?",
            textZh: "有，给您收据。关税要多少？",
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "The duty rate for these items is 10%. On $1,700 that's $170. You can pay by credit card or cash at the payment window over there.",
            textZh: "这些物品的税率是10%。1700美元的关税是170美元。您可以在那边的缴费窗口用信用卡或现金支付。",
            keyPhrases: [
              { en: "duty rate", zh: "税率" },
              { en: "payment window", zh: "缴费窗口" },
            ],
            alternativeExpressions: [
              { textEn: "That's a 10% duty — comes out to $170. You can pay at the counter over there, cash or card.", textZh: "税率10%——算下来170美元。在那边的柜台付，现金或刷卡都行。", actionHint: "去缴费窗口付款", frequency: "common" },
              { textEn: "The rate is 10%, so $170 total. Head to the cashier window on your left to settle up.", textZh: "税率10%，一共170美元。去左边的收银窗口结算。", actionHint: "找收银窗口", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I pay by credit card?",
            textZh: "可以刷信用卡吗？",
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "Yes. After payment, you'll receive a duty receipt. Keep it as proof of payment. If you have any issues later, this receipt is your documentation.",
            textZh: "可以。缴费后会给您一张关税收据。保留好作为缴费证明。如果以后有任何问题，这张收据就是凭证。",
            keyPhrases: [
              { en: "duty receipt", zh: "关税收据" },
              { en: "proof of payment", zh: "缴费证明" },
              { en: "documentation", zh: "凭证" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, card's fine. They'll give you a receipt — hang on to it as proof you've paid the duty.", textZh: "当然，刷卡没问题。他们会给您收据——留好，作为已交关税的证明。", actionHint: "保管好收据", frequency: "common" },
              { textEn: "After you pay, keep the duty receipt safe. It's your proof in case of any questions down the line.", textZh: "付完款后把关税收据收好。以后有任何疑问这就是凭证。", actionHint: "妥善保存收据", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Understood. Thank you for explaining the process.",
            textZh: "明白了。谢谢你解释流程。",
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "You're welcome. After payment, you can proceed through the exit. Welcome to the country, and enjoy your stay.",
            textZh: "不客气。缴费后就可以从出口出去了。欢迎来到我们国家，祝您旅途愉快。",
            keyPhrases: [
              { en: "proceed through the exit", zh: "从出口出去" },
            ],
            alternativeExpressions: [
              { textEn: "Once you've paid, head straight to the exit. Welcome, and have a great visit!", textZh: "付完款直接去出口就行。欢迎，祝您玩得愉快！", actionHint: "付款后从出口离开", frequency: "common" },
              { textEn: "All done after payment. The exit is just ahead. Enjoy your time here!", textZh: "付完款就好了。出口就在前面。祝您在这里过得开心！", actionHint: "走出口离开", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 机场WiFi和充电 ====================
  {
    id: "airport-wifi",
    category: "airport",
    titleZh: "机场WiFi和充电",
    titleEn: "Airport WiFi & Charging",
    description: "在机场寻找WiFi连接、充电站和电源适配器",
    otherRole: "机场工作人员/旅客",
    otherRoleIcon: "wifi",
    flows: [
      {
        id: "find-wifi",
        titleZh: "连接WiFi",
        titleEn: "Finding WiFi",
        description: "询问机场WiFi、获取密码、解决连接问题",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, is there free WiFi in the airport?",
            textZh: "请问，机场有免费WiFi吗？",
            casualVersion: "Hey, is there WiFi here?",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Yes, we have complimentary WiFi. The network name is 'Airport_Free'. You'll need to accept the terms on the login page.",
            textZh: "有的，我们有免费WiFi。网络名称是'Airport_Free'。您需要在登录页面上接受条款。",
            keyPhrases: [
              { en: "complimentary WiFi", zh: "免费WiFi" },
              { en: "network name", zh: "网络名称" },
              { en: "login page", zh: "登录页面" },
            ],
            vocabNotes: {
              "complimentary": {
                meaningInContext: "在这句话里表示：免费提供的（机场/酒店常用的正式说法）",
                similarUsage: "类似用法：Complimentary breakfast is included.（含免费早餐）",
              },
            },
            alternativeExpressions: [
              { textEn: "Sure, just connect to 'Airport_Guest' — no password needed, but there's a splash page.", textZh: "可以，连接'Airport_Guest'就行——不需要密码，但有个启动页面。", actionHint: "直接连接即可", frequency: "common" },
              { textEn: "Yes, free WiFi for 2 hours. After that, you can purchase premium access.", textZh: "有的，免费WiFi两小时。之后可以购买高级上网。", actionHint: "注意时间限制", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I connected but it's really slow. Is there a faster option?",
            textZh: "我连上了但是非常慢。有更快的选择吗？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "You can upgrade to our premium WiFi for $8. It's much faster and more reliable. You can pay through the portal page.",
            textZh: "您可以升级到高级WiFi，8美元。速度快很多也更稳定。可以通过门户页面付款。",
            keyPhrases: [
              { en: "upgrade", zh: "升级" },
              { en: "premium WiFi", zh: "高级WiFi" },
              { en: "portal page", zh: "门户页面" },
              { en: "reliable", zh: "稳定的" },
            ],
            vocabNotes: {
              "portal": {
                meaningInContext: "在这句话里表示：WiFi登录的网页入口",
                similarUsage: "类似用法：Go to the WiFi portal to sign in.",
              },
            },
            alternativeExpressions: [
              { textEn: "For $8 you can get the fast WiFi. Way better than the free one. Just pay on the login page.", textZh: "8美元可以用快速WiFi。比免费的好很多。在登录页面上付就行。", actionHint: "在登录页面升级", frequency: "common" },
              { textEn: "There's a paid option — $8 for high-speed access. You can upgrade right from your browser.", textZh: "有付费选项——8美元高速上网。直接在浏览器里升级就行。", actionHint: "浏览器中付费升级", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Where can I find a charging station? My phone is almost dead.",
            textZh: "请问哪里有充电站？我手机快没电了。",
            casualVersion: "Know where I can charge my phone? It's dying.",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "There are charging stations near Gate 15 and also in the food court area. They have USB ports and regular outlets.",
            textZh: "15号登机口附近和美食广场区域都有充电站。有USB接口和普通插座。",
            keyPhrases: [
              { en: "charging stations", zh: "充电站" },
              { en: "USB ports", zh: "USB接口" },
              { en: "regular outlets", zh: "普通插座" },
            ],
            alternativeExpressions: [
              { textEn: "There's a charging bar right by the bookstore. It has wireless charging pads too.", textZh: "书店旁边有个充电吧。也有无线充电板。", actionHint: "找书店附近", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do you sell power adapters? I forgot mine and I need a US plug.",
            textZh: "你们卖电源适配器吗？我忘带了，需要美国插头。",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Yes, the electronics store in Terminal 2 sells universal adapters. They're about $15. It's right past the security checkpoint on the left.",
            textZh: "有，2号航站楼的电子产品店有卖万能适配器。大概15美元。过了安检左边就是。",
            keyPhrases: [
              { en: "universal adapter", zh: "万能适配器" },
              { en: "security checkpoint", zh: "安检" },
            ],
            alternativeExpressions: [
              { textEn: "There's a tech shop in Terminal 2 that has adapters. Around $15. It's on your left after security.", textZh: "2号航站楼有个电子产品店有卖适配器。大约15美元。过安检后左手边。", actionHint: "去2号航站楼找电子店", frequency: "common" },
              { textEn: "The convenience store near Gate 6 sells travel adapters. They're a bit pricey but handy in a pinch.", textZh: "6号登机口附近的便利店卖旅行适配器。有点贵但急用时很方便。", actionHint: "就近在便利店买", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, thanks. One more thing — are there any quiet areas with outlets where I can work on my laptop?",
            textZh: "太好了，谢谢。再问一下——有没有安静的、有插座的地方可以用笔记本电脑办公？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "There's a business lounge area near Gate 22 with desks, outlets, and free WiFi. It's open to all passengers. The airline lounges also have workstations, but those require membership or a day pass.",
            textZh: "22号登机口附近有一个商务休息区，有桌子、插座和免费WiFi。所有旅客都可以使用。航空公司贵宾室也有工作台，但需要会员资格或日通行证。",
            keyPhrases: [
              { en: "business lounge area", zh: "商务休息区" },
              { en: "workstations", zh: "工作台" },
              { en: "day pass", zh: "日通行证" },
            ],
            alternativeExpressions: [
              { textEn: "Gate 22 area has a free work zone with desks and power. If you want something quieter, the paid lounges have workspaces too.", textZh: "22号登机口区域有免费工作区，有桌子和电源。想安静一点的话，付费贵宾室也有工作区。", actionHint: "去22号登机口附近", frequency: "common" },
              { textEn: "There are some quiet spots with desks and outlets by Gate 22 — free for everyone. Or try the airline lounge for $55.", textZh: "22号登机口附近有些安静的地方有桌子和插座——所有人免费用。或者花55美元去航空公司贵宾室。", actionHint: "自由选择", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "connection-issues",
        titleZh: "WiFi连接问题",
        titleEn: "WiFi Connection Issues",
        description: "WiFi连不上、需要技术帮助、找不到充电设备",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I can't seem to connect to the airport WiFi. The login page won't load.",
            textZh: "你好，我好像连不上机场WiFi。登录页面打不开。",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "That happens sometimes. Try forgetting the network and reconnecting. Also, make sure your browser isn't blocking pop-ups — the login page sometimes opens as a pop-up.",
            textZh: "这种情况偶尔会发生。试试忘记网络重新连接。另外确保浏览器没有屏蔽弹窗——登录页面有时候以弹窗形式打开。",
            keyPhrases: [
              { en: "forgetting the network", zh: "忘记网络" },
              { en: "reconnecting", zh: "重新连接" },
              { en: "blocking pop-ups", zh: "屏蔽弹窗" },
            ],
            vocabNotes: {
              "forgetting the network": {
                meaningInContext: "在这句话里表示：在手机设置里删除已保存的WiFi网络，然后重新搜索连接",
                similarUsage: "类似用法：Go to Settings and forget this network.",
              },
            },
            alternativeExpressions: [
              { textEn: "Try opening a new browser tab and going to any website — it should redirect you to the login page.", textZh: "试试打开新的浏览器标签页，访问任何网站——应该会自动跳转到登录页面。", actionHint: "打开新标签页", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I tried that, but it still won't work. Is there an IT help desk somewhere?",
            textZh: "我试了，但还是不行。机场有IT服务台吗？",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "There's a tech support kiosk near the information desk on the departures level. They can help you troubleshoot. Alternatively, you could try using your phone as a hotspot if you have a local SIM card.",
            textZh: "出发层信息台旁边有一个技术支持亭。他们可以帮您排查问题。或者如果您有本地SIM卡，可以试试用手机开热点。",
            keyPhrases: [
              { en: "tech support kiosk", zh: "技术支持亭" },
              { en: "troubleshoot", zh: "排查问题" },
              { en: "hotspot", zh: "热点" },
              { en: "local SIM card", zh: "本地SIM卡" },
            ],
            alternativeExpressions: [
              { textEn: "There's an IT help desk by the info counter upstairs. Or you could tether from your phone if you've got data.", textZh: "楼上信息台旁边有IT服务台。或者如果您手机有流量，可以开热点。", actionHint: "去IT服务台或开热点", frequency: "common" },
              { textEn: "Try the tech help booth on the departures floor. If that doesn't work, a local SIM with data might be your best bet.", textZh: "去出发层的技术帮助亭试试。不行的话，买张本地SIM卡可能最靠谱。", actionHint: "找技术帮助亭", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Actually, where can I buy a local SIM card? That might be easier.",
            textZh: "对了，哪里可以买本地SIM卡？那可能更方便。",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "There are SIM card vending machines in the arrivals hall. You can also buy one at the convenience store near Gate 8. They offer prepaid plans starting from $10 for 3 days of data.",
            textZh: "到达大厅有SIM卡自动售卖机。8号登机口附近的便利店也可以买到。有预付费套餐，10美元起，包含3天流量。",
            keyPhrases: [
              { en: "vending machines", zh: "自动售卖机" },
              { en: "prepaid plans", zh: "预付费套餐" },
              { en: "3 days of data", zh: "3天流量" },
            ],
            alternativeExpressions: [
              { textEn: "The phone carrier counters are right after customs. They can set up a SIM for you.", textZh: "运营商柜台就在过海关之后。他们可以帮你装SIM卡。", actionHint: "过海关后找运营商柜台", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "All the charging stations seem to be full. Is there anywhere else I can charge my phone?",
            textZh: "充电站好像都满了。还有别的地方可以充电吗？",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "Some of the seating areas near the gates have power outlets built into the armrests. Also, the airline lounge on the third floor has plenty of outlets. If you're desperate, some restaurants will let you charge while you eat.",
            textZh: "有些登机口附近的座位区扶手上有内置电源插座。三楼的航空公司贵宾室也有很多插座。如果实在急的话，有些餐厅可以让你边吃边充电。",
            keyPhrases: [
              { en: "power outlets", zh: "电源插座" },
              { en: "built into the armrests", zh: "内置在扶手上" },
              { en: "desperate", zh: "急迫的" },
            ],
            vocabNotes: {
              "desperate": {
                meaningInContext: "在这句话里表示：非常急迫、急需充电的状态（口语中常用，不是真的绝望）",
                similarUsage: "类似用法：I'm desperate for a cup of coffee.（我太想喝杯咖啡了）",
              },
            },
            alternativeExpressions: [
              { textEn: "Check the seats near the gates — some have outlets in the armrests. Otherwise, any café will usually let you plug in.", textZh: "看看登机口附近的座位——有些扶手上有插座。不然去咖啡厅一般也能充。", actionHint: "找有插座的座位", frequency: "common" },
              { textEn: "There are hidden outlets in some of the gate seating areas. You might also try the food court — lots of outlets there.", textZh: "有些登机口座位区有隐藏的插座。也可以去美食广场——那里插座很多。", actionHint: "去美食广场找插座", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do you have a portable charger I could borrow?",
            textZh: "有可以借的移动电源吗？",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "We actually have a power bank rental service! You can pick one up at the kiosk by Gate 12 using your credit card. It's $2 per hour, and you can return it at any kiosk in the airport.",
            textZh: "我们有移动电源租借服务！在12号登机口的终端机用信用卡就可以租借。每小时2美元，在机场任何一个终端机都可以归还。",
            keyPhrases: [
              { en: "power bank rental", zh: "移动电源租借" },
              { en: "kiosk", zh: "终端机/自助服务亭" },
              { en: "per hour", zh: "每小时" },
            ],
            alternativeExpressions: [
              { textEn: "You can rent a portable charger from the station near Gate 12. Swipe your card, grab one, and drop it off at any station when you're done.", textZh: "可以在12号登机口附近的站点租移动电源。刷卡取走，用完在任何站点归还就行。", actionHint: "去12号登机口租", frequency: "common" },
              { textEn: "There are power bank kiosks around the terminal — $2 an hour. Just scan your card and take one.", textZh: "航站楼各处都有移动电源租借机——每小时2美元。刷卡就能取。", actionHint: "找最近的租借机", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 接机 ====================
  {
    id: "airport-meetgreet",
    category: "airport",
    titleZh: "接机",
    titleEn: "Meeting & Greeting at Arrivals",
    description: "在到达大厅接人，包括举牌、找到对方、安排地面交通",
    otherRole: "到达旅客/司机",
    otherRoleIcon: "car",
    flows: [
      {
        id: "picking-up",
        titleZh: "接人标准流程",
        titleEn: "Picking Someone Up",
        description: "在到达大厅等待、找到对方、安排交通",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, where is the arrivals hall? I'm picking someone up.",
            textZh: "请问到达大厅在哪里？我来接人的。",
            casualVersion: "Hey, where's arrivals? I'm meeting someone.",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "The arrivals hall is on the ground floor. Take the escalator down one level. Passengers come out through the doors on the left.",
            textZh: "到达大厅在一楼。坐自动扶梯下一层。旅客从左边的门出来。",
            keyPhrases: [
              { en: "arrivals hall", zh: "到达大厅" },
              { en: "ground floor", zh: "一楼" },
              { en: "escalator", zh: "自动扶梯" },
            ],
            alternativeExpressions: [
              { textEn: "Just follow the signs for 'Arrivals' — it's straight ahead and then downstairs.", textZh: "跟着'到达'的标志走——一直走然后下楼。", actionHint: "跟着标志走", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Hi! Are you Mr. Chen? I'm from Sunshine Tours. I'm here to pick you up.",
            textZh: "你好！您是陈先生吗？我是阳光旅行社的。我来接您。",
          },
          {
            speaker: "them",
            role: "旅客",
            textEn: "Yes, that's me! Nice to meet you. Thank you for coming.",
            textZh: "是的，是我！很高兴见到你。谢谢你来接我。",
            alternativeExpressions: [
              { textEn: "That's me! Great to finally meet you in person. Thanks for picking me up.", textZh: "是我！终于见到本人了。谢谢来接我。", actionHint: "友好打招呼", frequency: "common" },
              { textEn: "Hi, yes! I'm Mr. Chen. So glad you're here. I was just looking around for you.", textZh: "你好，是的！我是陈先生。太好了你来了。我刚在找你呢。", actionHint: "热情回应", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Welcome! How was your flight? Let me help you with your luggage.",
            textZh: "欢迎！飞行怎么样？让我帮您拿行李。",
            culturalNote: "\"How was your flight?\" 是接机时的标准问候语，表示关心。",
          },
          {
            speaker: "them",
            role: "旅客",
            textEn: "It was long but smooth. I just have this suitcase and a carry-on. Where's the car?",
            textZh: "很长但是很顺利。我就这一个箱子和一个随身行李。车在哪里？",
            keyPhrases: [
              { en: "smooth", zh: "顺利的" },
              { en: "carry-on", zh: "随身行李" },
            ],
            alternativeExpressions: [
              { textEn: "Not bad, actually. No turbulence. I've got one bag and a backpack. Ready to go!", textZh: "其实还好。没有颠簸。我有一个箱子和一个背包。可以走了！", actionHint: "帮忙拿行李", frequency: "common" },
              { textEn: "Pretty good, just a bit tired. These are all my bags. Shall we head out?", textZh: "还不错，就是有点累。这些是我所有的行李。我们走吧？", actionHint: "准备出发", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The car is parked in the short-term parking lot, about a five-minute walk. Or we can take the shuttle to the parking area.",
            textZh: "车停在短期停车场，走路大概五分钟。或者我们可以坐摆渡车去停车区。",
          },
          {
            speaker: "them",
            role: "旅客",
            textEn: "Let's walk. I need to stretch my legs after that long flight. By the way, how far is the hotel from here?",
            textZh: "我们走吧。坐了那么久的飞机，我需要活动一下腿。对了，酒店离这里多远？",
            keyPhrases: [
              { en: "stretch my legs", zh: "活动腿/伸展" },
              { en: "how far", zh: "多远" },
            ],
            vocabNotes: {
              "stretch my legs": {
                meaningInContext: "在这句话里表示：久坐后起来走走、活动一下",
                similarUsage: "类似用法：Let's stop and stretch our legs.（我们停下来活动一下吧）",
              },
            },
            alternativeExpressions: [
              { textEn: "Walking sounds great — been sitting for 14 hours! How long is the drive to the hotel?", textZh: "走走好——坐了14个小时了！开车去酒店要多久？", actionHint: "一起步行去车场", frequency: "common" },
              { textEn: "I'd rather walk, thanks. I could use some fresh air. Is the hotel far from the airport?", textZh: "我想走路，谢谢。想呼吸点新鲜空气。酒店离机场远吗？", actionHint: "聊着天走过去", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "About 30 minutes with normal traffic. I'll take the highway to avoid the city center. There's bottled water in the car if you're thirsty.",
            textZh: "正常路况大约30分钟。我走高速避开市中心。车里有瓶装水，渴了可以喝。",
          },
          {
            speaker: "them",
            role: "旅客",
            textEn: "Perfect. Thank you so much. You're very helpful.",
            textZh: "太好了。非常感谢。你很周到。",
            alternativeExpressions: [
              { textEn: "Sounds great. Thanks a lot — you've been really kind.", textZh: "听起来不错。非常感谢——你真的很贴心。", actionHint: "表示感谢", frequency: "common" },
              { textEn: "Wonderful. I really appreciate everything. Let's go!", textZh: "太好了。真的很感激。我们走吧！", actionHint: "准备出发", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "ground-transport",
        titleZh: "安排地面交通",
        titleEn: "Arranging Ground Transportation",
        description: "在到达大厅找出租车、网约车、机场大巴",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, where can I find the taxi stand?",
            textZh: "请问出租车候车点在哪里？",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "The taxi stand is just outside Door 3. Turn right when you exit the arrivals hall. There's usually a queue, and dispatchers will assign you a cab.",
            textZh: "出租车候车点在3号门外面。出到达大厅右转。通常会排队，调度员会给您分配出租车。",
            keyPhrases: [
              { en: "taxi stand", zh: "出租车候车点" },
              { en: "queue", zh: "排队" },
              { en: "dispatchers", zh: "调度员" },
            ],
            alternativeExpressions: [
              { textEn: "Taxis are curbside at the lower level. Just follow the signs.", textZh: "出租车在下层路边。跟着标志走就行。", actionHint: "去下层路边", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much does a taxi to downtown usually cost?",
            textZh: "打车去市中心一般多少钱？",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "It's usually between $35 and $50 depending on traffic. Some taxis have a flat rate to the city center. Make sure to use the metered taxis from the official stand — don't accept rides from people who approach you inside the terminal.",
            textZh: "一般35到50美元，取决于路况。有些出租车去市中心有固定价格。一定要在正规候车点坐打表的出租车——不要接受在航站楼里主动搭讪的人。",
            keyPhrases: [
              { en: "flat rate", zh: "固定价格" },
              { en: "metered taxis", zh: "打表出租车" },
              { en: "official stand", zh: "正规候车点" },
            ],
            culturalNote: "在很多国际机场，航站楼里主动搭讪的'黑车'可能会漫天要价，一定要去正规候车点。",
            vocabNotes: {
              "flat rate": {
                meaningInContext: "在这句话里表示：不按里程计费，而是一口价的固定费用",
                similarUsage: "类似用法：Is there a flat rate to the airport?（去机场有固定价格吗？）",
              },
            },
            alternativeExpressions: [
              { textEn: "Anywhere from $35 to $50, depends on traffic. Stick to the official taxi line — avoid anyone who approaches you inside.", textZh: "大概35到50美元，取决于交通。坚持去正规出租车排队处——不要理航站楼里主动拉客的人。", actionHint: "去正规候车点", frequency: "common" },
              { textEn: "A cab to downtown runs about 40 bucks. Some offer a fixed fare. Always use the licensed taxis outside.", textZh: "打车去市中心大概40美元左右。有些有固定价。一定坐外面的正规出租车。", actionHint: "坐正规出租车", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What about ride-sharing? Can I use Uber or Lyft here?",
            textZh: "网约车呢？这里可以用Uber或Lyft吗？",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "Yes, both Uber and Lyft pick up from the ride-share zone on Level 1. Just open the app, request a ride, and follow the directions to the pickup point. It's usually marked with purple signs.",
            textZh: "可以，Uber和Lyft都在1层的网约车专区上车。打开App叫车，然后按指引去上车点就行。通常有紫色标志标识。",
            keyPhrases: [
              { en: "ride-share zone", zh: "网约车专区" },
              { en: "pickup point", zh: "上车点" },
              { en: "request a ride", zh: "叫车" },
            ],
            alternativeExpressions: [
              { textEn: "Uber and Lyft both work here. The pickup is on the ground level — just follow the rideshare signs.", textZh: "Uber和Lyft这里都能用。上车点在地面层——跟着网约车的标志走。", actionHint: "去地面层找上车点", frequency: "common" },
              { textEn: "Yeah, order through the app and head to Level 1. Look for the purple signs — that's the pickup area.", textZh: "可以，在App上叫车然后去1层。找紫色标志——那就是上车区。", actionHint: "App叫车后去紫色标志处", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there an airport shuttle or express train to the city?",
            textZh: "有机场大巴或者快线地铁去市区吗？",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "Yes! The airport express train runs every 15 minutes and goes straight to Central Station. It's $12 one way. The station is connected to Terminal 1 on the basement level. There are also shuttle buses to major hotels — the stop is outside Door 5.",
            textZh: "有！机场快线每15分钟一班，直达中央车站。单程12美元。车站连接1号航站楼地下层。还有去各大酒店的摆渡巴士——站点在5号门外。",
            keyPhrases: [
              { en: "airport express train", zh: "机场快线" },
              { en: "one way", zh: "单程" },
              { en: "Central Station", zh: "中央车站" },
              { en: "shuttle buses", zh: "摆渡巴士" },
            ],
            alternativeExpressions: [
              { textEn: "The cheapest option is the city bus — Line 47 stops right outside. Takes about an hour though.", textZh: "最便宜的是市区公交——47路就在外面。不过大概要一小时。", actionHint: "适合不赶时间的情况", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the express train. Where can I buy a ticket?",
            textZh: "我坐快线吧。在哪里买票？",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "There are ticket machines at the station entrance. They accept cash and credit cards. You can also buy tickets through the transit app on your phone. Just scan the QR code at the gate.",
            textZh: "车站入口有自动售票机。可以用现金和信用卡。也可以用手机上的交通App购票。在闸机口扫二维码就行。",
            keyPhrases: [
              { en: "ticket machines", zh: "自动售票机" },
              { en: "transit app", zh: "交通App" },
              { en: "QR code", zh: "二维码" },
              { en: "gate", zh: "闸机口" },
            ],
            alternativeExpressions: [
              { textEn: "Buy a ticket at the machines by the entrance — they take cards and cash. Or use the app and tap through.", textZh: "在入口的机器上买票——可以刷卡或付现金。或者用App购票直接刷码进站。", actionHint: "去入口买票", frequency: "common" },
              { textEn: "Tickets are available at the kiosks or on your phone. Just download the transit app and scan at the turnstile.", textZh: "可以在自助机或手机上买票。下载交通App然后在闸机口扫码就行。", actionHint: "下载交通App", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 无障碍服务 ====================
  {
    id: "airport-wheelchair",
    category: "airport",
    titleZh: "无障碍服务",
    titleEn: "Accessibility Services",
    description: "在机场请求轮椅协助、优先登机和特殊需求服务",
    otherRole: "机场服务人员",
    otherRoleIcon: "accessibility",
    flows: [
      {
        id: "wheelchair-assist",
        titleZh: "轮椅协助",
        titleEn: "Wheelchair Assistance",
        description: "请求轮椅服务，从值机到登机的全程协助",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I requested wheelchair assistance when I booked my ticket. Where should I go?",
            textZh: "你好，我订票时申请了轮椅协助。我应该去哪里？",
          },
          {
            speaker: "them",
            role: "服务台",
            textEn: "Welcome! Yes, I can see the request on your booking. Please have a seat here, and I'll call our assistance team. They'll be with you in about 5 minutes.",
            textZh: "欢迎！是的，我在您的订单上看到了申请。请在这里坐下，我联系协助团队。他们大约5分钟后来。",
            keyPhrases: [
              { en: "wheelchair assistance", zh: "轮椅协助" },
              { en: "assistance team", zh: "协助团队" },
            ],
            alternativeExpressions: [
              { textEn: "I see your special assistance request. Let me arrange a wheelchair and an attendant for you right away.", textZh: "我看到您的特殊协助申请了。我马上为您安排轮椅和陪同人员。", actionHint: "等待安排", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. Will someone help me through security and to the gate?",
            textZh: "谢谢。会有人帮我过安检并送到登机口吗？",
          },
          {
            speaker: "them",
            role: "服务台",
            textEn: "Absolutely. Our attendant will accompany you through check-in, security, and all the way to your gate. You'll also get priority boarding, so you can board before other passengers.",
            textZh: "当然。我们的陪同人员会全程陪您办理值机、过安检，一直送到登机口。您还享有优先登机，可以在其他旅客之前登机。",
            keyPhrases: [
              { en: "attendant", zh: "陪同人员" },
              { en: "accompany", zh: "陪同" },
              { en: "priority boarding", zh: "优先登机" },
            ],
            vocabNotes: {
              "priority boarding": {
                meaningInContext: "在这句话里表示：比普通旅客更早登机的特殊安排",
                similarUsage: "类似用法：Families with small children get priority boarding.（带小孩的家庭可以优先登机）",
              },
            },
            alternativeExpressions: [
              { textEn: "Yes, someone will be with you the whole way — check-in, security, right to the gate. And you'll board first.", textZh: "是的，全程都会有人陪着您——值机、安检，一直到登机口。而且您会最先登机。", actionHint: "等陪同人员到来", frequency: "common" },
              { textEn: "We'll have an assistant escort you from here to your seat on the plane. You also get to board early.", textZh: "我们会安排助理从这里一路送您到飞机上的座位。您还可以提前登机。", actionHint: "安心等待协助", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's wonderful. My companion is traveling with me — can they come along?",
            textZh: "太好了。我有一个同行人——他们可以一起走吗？",
          },
          {
            speaker: "them",
            role: "服务台",
            textEn: "Of course. Your companion can stay with you throughout the process. They'll board with you during the priority boarding call.",
            textZh: "当然可以。您的同行人可以全程陪同。优先登机时他们会和您一起登机。",
            keyPhrases: [
              { en: "companion", zh: "同行人" },
              { en: "boarding call", zh: "登机广播" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely. They can come with you the entire way and board the plane with you early.", textZh: "当然可以。他们可以全程陪着您，和您一起提前登机。", actionHint: "同行人一起走", frequency: "common" },
              { textEn: "No problem. Your travel partner is welcome to stay by your side. They'll get early boarding too.", textZh: "没问题。您的旅伴可以一直陪在您身边。他们也可以提前登机。", actionHint: "同伴享受同等待遇", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "When we arrive, will there be assistance at the destination airport too?",
            textZh: "到达后，目的地机场也有协助服务吗？",
          },
          {
            speaker: "them",
            role: "服务台",
            textEn: "Yes, the airline will arrange wheelchair assistance at your destination. Someone will meet you at the aircraft door and help you through immigration, baggage claim, and to the arrivals area.",
            textZh: "是的，航空公司会在目的地安排轮椅协助。有人会在机舱门口接您，帮您过入境检查、取行李，一直到到达区域。",
            keyPhrases: [
              { en: "aircraft door", zh: "机舱门口" },
              { en: "immigration", zh: "入境检查" },
              { en: "baggage claim", zh: "行李提取" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely. There'll be someone waiting for you when you land. They'll help with everything — passport control, luggage, the whole thing.", textZh: "当然。您落地时会有人等着您。他们会帮忙处理一切——护照检查、行李，全程。", actionHint: "落地后有人接应", frequency: "common" },
              { textEn: "It's all arranged on the other end. An attendant will meet you at the plane door and take you all the way out.", textZh: "那边都安排好了。陪同人员会在机舱门口接您，一路送您出去。", actionHint: "不用担心到达后的安排", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's very reassuring. Thank you so much for your help.",
            textZh: "这让我很放心。非常感谢你的帮助。",
          },
          {
            speaker: "them",
            role: "服务台",
            textEn: "You're welcome! It's our pleasure. Here's your attendant now — his name is Mark. He'll take great care of you. Have a wonderful trip!",
            textZh: "不客气！这是我们应该做的。您的陪同人员来了——他叫Mark。他会好好照顾您的。祝旅途愉快！",
            keyPhrases: [
              { en: "take great care of you", zh: "好好照顾您" },
            ],
            alternativeExpressions: [
              { textEn: "My pleasure! Here comes your assistant — Mark. You're in good hands. Enjoy your flight!", textZh: "不客气！您的助理来了——Mark。放心交给他。祝飞行愉快！", actionHint: "跟着Mark走", frequency: "common" },
              { textEn: "Happy to help! This is Mark — he'll be with you from here. Have a safe journey!", textZh: "很高兴能帮到您！这位是Mark——从这里开始他会陪着您。一路平安！", actionHint: "和Mark一起出发", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "special-needs",
        titleZh: "特殊需求沟通",
        titleEn: "Communicating Special Needs",
        description: "与航空公司沟通特殊设备、药物、服务犬等需求",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I need to bring my oxygen concentrator on the flight. Is that allowed?",
            textZh: "我需要带制氧机上飞机。可以吗？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Portable oxygen concentrators are allowed on board, but we need advance notice and a doctor's certificate. Do you have the medical documentation with you?",
            textZh: "便携式制氧机可以带上飞机，但我们需要提前通知和医生证明。您带了医疗文件吗？",
            keyPhrases: [
              { en: "oxygen concentrator", zh: "制氧机" },
              { en: "advance notice", zh: "提前通知" },
              { en: "doctor's certificate", zh: "医生证明" },
              { en: "medical documentation", zh: "医疗文件" },
            ],
            vocabNotes: {
              "portable oxygen concentrator": {
                meaningInContext: "在这句话里表示：便携式制氧设备，可以在飞机上使用的医疗器械",
                similarUsage: "类似用法：FAA-approved portable oxygen concentrator（FAA批准的便携制氧机）",
              },
            },
            alternativeExpressions: [
              { textEn: "Yes, POCs are permitted. We just need a doctor's note and advance notice. Do you have the paperwork?", textZh: "可以，便携制氧机是允许的。我们只需要医生证明和提前通知。您有文件吗？", actionHint: "出示医生证明", frequency: "common" },
              { textEn: "That's fine — you can bring it on the plane. I'll just need to see your medical certificate and confirm the device model.", textZh: "没问题——可以带上飞机。我需要看一下您的医疗证明并确认设备型号。", actionHint: "准备医疗证明和设备信息", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I have my doctor's letter right here. It says I need continuous oxygen during the flight.",
            textZh: "有，我的医生信在这里。上面写的是飞行过程中需要持续供氧。",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Let me review that... This looks good. I'll add a note to your booking. Please make sure the device is fully charged — you'll need enough battery for 150% of the flight duration.",
            textZh: "让我看一下……没问题。我在您的订单上备注一下。请确保设备充满电——电量需要足够飞行时间的150%。",
            keyPhrases: [
              { en: "fully charged", zh: "充满电" },
              { en: "battery", zh: "电池/电量" },
              { en: "flight duration", zh: "飞行时间" },
            ],
            alternativeExpressions: [
              { textEn: "Looks good. I'm noting it on your reservation. Just make sure the battery covers at least one and a half times the flight time.", textZh: "没问题。我在您的预订上备注了。确保电池能撑飞行时间的至少一倍半。", actionHint: "检查电池电量", frequency: "common" },
              { textEn: "Everything's in order. I'll flag it in the system. The device needs to hold a charge for 150% of the trip, okay?", textZh: "都没问题。我在系统里标注一下。设备需要能撑住飞行时间的150%，好吗？", actionHint: "确保电量充足", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I also have a service dog. I have all the paperwork for her.",
            textZh: "我还有一只服务犬。她的文件我都有。",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Service dogs are welcome in the cabin at no extra charge. I'll need to see the service animal documentation. Your dog will sit in the floor space in front of your seat. We'll make sure you have a bulkhead seat for extra room.",
            textZh: "服务犬可以免费带入客舱。我需要看一下服务犬的文件。您的狗会坐在座位前面的地板空间。我们会给您安排前排座位，空间更大。",
            keyPhrases: [
              { en: "service dog", zh: "服务犬" },
              { en: "cabin", zh: "客舱" },
              { en: "no extra charge", zh: "免费/无额外费用" },
              { en: "bulkhead seat", zh: "前排座位（隔板后的座位）" },
            ],
            alternativeExpressions: [
              { textEn: "Trained service animals can fly in the cabin. Just keep your dog harnessed and under your seat.", textZh: "训练有素的服务动物可以在客舱飞行。请保持您的狗系着牵引带并待在座位下面。", actionHint: "准备好牵引带", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here are her vaccination records and service animal certificate. She's very well-trained.",
            textZh: "这是她的疫苗接种记录和服务犬证书。她训练得很好。",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Everything looks in order. I've noted all your special requirements. You'll have pre-boarding privileges, so you and your companion can settle in before other passengers. Is there anything else you need?",
            textZh: "一切都没问题。我已经记录了您所有的特殊需求。您有提前登机的权利，可以在其他旅客之前和同行人一起安顿好。还需要什么吗？",
            keyPhrases: [
              { en: "in order", zh: "没问题/齐全" },
              { en: "pre-boarding privileges", zh: "提前登机权利" },
              { en: "settle in", zh: "安顿好" },
            ],
            alternativeExpressions: [
              { textEn: "All your documents check out. I've logged everything. You'll board early so you have time to get comfortable. Anything else?", textZh: "您的文件都没问题。我都记录好了。您会提前登机，有时间安顿。还有别的需要吗？", actionHint: "提出其他需求", frequency: "common" },
              { textEn: "Perfect, all noted. You and your companion will pre-board. Let me know if there's anything else I can do.", textZh: "好的，都记下了。您和同行人会提前登机。还有什么我能帮的告诉我。", actionHint: "如有其他需求现在说", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Could I request an aisle seat? It's easier for me to get in and out.",
            textZh: "能帮我安排过道座位吗？方便我进出。",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Of course. I've assigned you seat 4C — it's a bulkhead aisle seat with extra legroom. The cabin crew will also be informed of your needs so they can assist you during the flight.",
            textZh: "当然可以。我给您分配了4C座位——是前排过道座位，腿部空间更大。机组人员也会被告知您的需求，飞行过程中可以协助您。",
            keyPhrases: [
              { en: "aisle seat", zh: "过道座位" },
              { en: "extra legroom", zh: "更大腿部空间" },
              { en: "cabin crew", zh: "机组人员" },
            ],
            alternativeExpressions: [
              { textEn: "Done — you're in 4C, aisle with lots of legroom. The flight attendants will know about your needs too.", textZh: "好了——您在4C，过道座位，腿部空间很大。空乘人员也会了解您的需求。", actionHint: "记住座位号4C", frequency: "common" },
              { textEn: "I've put you in a front-row aisle seat for easy access. The crew on board will be briefed about your requirements.", textZh: "我给您安排了前排过道座位，方便进出。机上的机组人员会了解您的需求。", actionHint: "前排过道方便进出", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 带宠物飞 ====================
  {
    id: "airport-pet",
    category: "airport",
    titleZh: "带宠物飞",
    titleEn: "Traveling with Pets",
    description: "带宠物乘飞机出行，包括航空箱要求、检疫规定等",
    otherRole: "航空公司柜台/检疫人员",
    otherRoleIcon: "paw",
    flows: [
      {
        id: "pet-cabin",
        titleZh: "宠物带入客舱",
        titleEn: "Pet in Cabin",
        description: "小型宠物随身携带进客舱的流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm traveling with my small dog. I booked a pet-in-cabin ticket. What do I need to do?",
            textZh: "你好，我带了一只小狗。我订了宠物客舱票。需要怎么办？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Welcome! I'll need to see your pet's health certificate and vaccination records. The certificate must be issued within 10 days of travel. Do you have those?",
            textZh: "欢迎！我需要看一下您宠物的健康证明和疫苗记录。健康证明必须是出行前10天内开具的。您有吗？",
            keyPhrases: [
              { en: "health certificate", zh: "健康证明" },
              { en: "vaccination records", zh: "疫苗记录" },
              { en: "issued within 10 days", zh: "10天内开具" },
            ],
            alternativeExpressions: [
              { textEn: "I need your pet's vet paperwork — health cert and proof of rabies vaccination.", textZh: "我需要您宠物的兽医文件——健康证和狂犬病疫苗证明。", actionHint: "准备好兽医文件", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, here they are. My vet prepared everything last week.",
            textZh: "有，在这里。我的兽医上周把所有东西都准备好了。",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Great, these look good. Now, let me check your carrier. It needs to fit under the seat in front of you. The maximum dimensions are 18 by 11 by 11 inches. Can your dog stand up and turn around inside?",
            textZh: "很好，这些没问题。现在让我检查一下您的航空箱。它需要能放在您前面座位下面。最大尺寸是18×11×11英寸。您的狗能在里面站起来和转身吗？",
            keyPhrases: [
              { en: "carrier", zh: "航空箱/宠物包" },
              { en: "fit under the seat", zh: "放在座位下面" },
              { en: "maximum dimensions", zh: "最大尺寸" },
              { en: "stand up and turn around", zh: "站起来和转身" },
            ],
            vocabNotes: {
              "carrier": {
                meaningInContext: "在这句话里表示：宠物航空箱或宠物旅行包，不是一般的'携带者'",
                similarUsage: "类似用法：Is this carrier airline-approved?（这个航空箱是航空公司认可的吗？）",
              },
            },
            alternativeExpressions: [
              { textEn: "Paperwork looks fine. Now I need to see the carrier — it has to fit under the seat. Can your dog move around comfortably inside?", textZh: "文件没问题。现在我要看一下航空箱——必须能放在座位下面。您的狗在里面能舒服地活动吗？", actionHint: "展示航空箱", frequency: "common" },
              { textEn: "Documents are all good. Let me measure the carrier real quick — the size limit is 18 by 11 by 11 inches.", textZh: "证件都没问题。让我快速量一下航空箱——尺寸限制是18×11×11英寸。", actionHint: "等待测量", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I bought an airline-approved carrier. She fits comfortably. How much is the pet fee?",
            textZh: "是的，我买了航空公司认可的航空箱。她在里面很舒服。宠物费多少钱？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "The in-cabin pet fee is $125 each way. I'll add that to your booking. Your pet counts as your personal item, so you can still bring a carry-on bag.",
            textZh: "客舱宠物费是单程125美元。我加到您的订单上。您的宠物算作您的个人物品，所以您仍然可以带一个随身行李。",
            keyPhrases: [
              { en: "pet fee", zh: "宠物费" },
              { en: "each way", zh: "单程" },
              { en: "personal item", zh: "个人物品" },
              { en: "carry-on bag", zh: "随身行李" },
            ],
            alternativeExpressions: [
              { textEn: "It's $125 per leg for in-cabin pets. Your dog counts as your personal item, but you still get a carry-on.", textZh: "客舱宠物每段125美元。您的狗算个人物品，但您仍然可以带一件随身行李。", actionHint: "确认费用", frequency: "common" },
              { textEn: "The fee is a hundred and twenty-five dollars one way. I'll add it to your ticket. Don't worry, you can still bring a carry-on bag.", textZh: "费用是单程125美元。我加到您的机票上。别担心，您仍然可以带一件随身行李。", actionHint: "确认行李规则", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Any tips for going through security with a pet?",
            textZh: "明白了。带宠物过安检有什么建议吗？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "At security, you'll need to take your dog out of the carrier and carry her through the metal detector. The carrier goes through the X-ray machine separately. Make sure she has a collar and leash on so she can't run away.",
            textZh: "过安检时，您需要把狗从航空箱里取出来，抱着她过金属探测器。航空箱单独过X光机。确保她戴着项圈和牵引绳，以免跑掉。",
            keyPhrases: [
              { en: "metal detector", zh: "金属探测器" },
              { en: "X-ray machine", zh: "X光机" },
              { en: "collar and leash", zh: "项圈和牵引绳" },
            ],
            alternativeExpressions: [
              { textEn: "You'll carry your dog through the metal detector yourself. The carrier goes on the belt separately. Keep a leash on her so she doesn't bolt.", textZh: "您要自己抱着狗过金属探测器。航空箱单独放传送带上。给她系好牵引绳以防跑掉。", actionHint: "提前系好牵引绳", frequency: "common" },
              { textEn: "At the checkpoint, take her out of the carrier and hold her. The carrier gets X-rayed on its own.", textZh: "过安检时，把她从航空箱里抱出来。航空箱单独过X光。", actionHint: "准备过安检", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks for all the information. Is there a pet relief area in the terminal?",
            textZh: "谢谢你提供的所有信息。航站楼里有宠物如厕区吗？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Yes! There's a pet relief area near Gate 20 — it's an enclosed space with artificial turf and waste bags. There's also one before security if you need it now.",
            textZh: "有！20号登机口附近有一个宠物如厕区——是一个封闭的空间，有人工草坪和清洁袋。安检前也有一个，如果您现在需要的话。",
            keyPhrases: [
              { en: "pet relief area", zh: "宠物如厕区" },
              { en: "artificial turf", zh: "人工草坪" },
              { en: "waste bags", zh: "清洁袋" },
            ],
            alternativeExpressions: [
              { textEn: "There's one near Gate 20 — fenced area with fake grass and poop bags. There's another one before security too.", textZh: "20号登机口附近有一个——围起来的区域，有人工草坪和清洁袋。安检前也有一个。", actionHint: "带宠物去如厕区", frequency: "common" },
              { textEn: "Yep, the pet relief station is by Gate 20. It's indoors with turf and all the supplies you need.", textZh: "有的，宠物如厕站在20号登机口旁边。室内的，有草坪和所有需要的用品。", actionHint: "记住位置", frequency: "common" },
            ],
          },
        ],
      },
      {
        id: "pet-quarantine",
        titleZh: "宠物检疫",
        titleEn: "Pet Quarantine & Requirements",
        description: "入境时宠物检疫流程、所需文件",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'm arriving with my cat from overseas. What's the quarantine process?",
            textZh: "我从国外带猫入境。检疫流程是怎样的？",
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn: "Welcome. I'll need to see your pet's import permit, rabies vaccination certificate, and the health certificate from your country of origin. All documents need to be in English or officially translated.",
            textZh: "欢迎。我需要看您宠物的进口许可证、狂犬病疫苗证书和出发国的健康证明。所有文件需要英文或官方翻译件。",
            keyPhrases: [
              { en: "import permit", zh: "进口许可证" },
              { en: "rabies vaccination", zh: "狂犬病疫苗" },
              { en: "country of origin", zh: "出发国" },
              { en: "officially translated", zh: "官方翻译" },
            ],
            vocabNotes: {
              "rabies": {
                meaningInContext: "在这句话里表示：狂犬病，宠物出入境必须接种的疫苗",
                similarUsage: "类似用法：Is the rabies shot up to date?（狂犬病疫苗是最新的吗？）",
              },
            },
            alternativeExpressions: [
              { textEn: "Hi there. I'll need your pet's vaccination records, health certificate, and import permit. Everything should be in English.", textZh: "你好。我需要看宠物的疫苗记录、健康证明和进口许可证。都要英文的。", actionHint: "递交文件", frequency: "common" },
              { textEn: "Welcome. Please have your pet's paperwork ready — rabies cert, health cert, and the import permit.", textZh: "欢迎。请准备好宠物的文件——狂犬病证书、健康证明和进口许可证。", actionHint: "准备好所有证件", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here are all the documents. My cat had her rabies shot six months ago and the microchip was implanted before that.",
            textZh: "所有文件在这里。我的猫六个月前打了狂犬疫苗，芯片在那之前就植入了。",
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn: "Let me verify the microchip number... Yes, it matches the records. Good news — since your cat is coming from a rabies-free country with valid vaccination, there's no quarantine period required. We just need to do a quick visual inspection.",
            textZh: "让我核对一下芯片号码……是的，和记录一致。好消息——因为您的猫来自无狂犬病国家且疫苗有效，不需要隔离期。我们只需要做一个简单的外观检查。",
            keyPhrases: [
              { en: "microchip number", zh: "芯片号码" },
              { en: "rabies-free country", zh: "无狂犬病国家" },
              { en: "quarantine period", zh: "隔离期" },
              { en: "visual inspection", zh: "外观检查" },
            ],
            alternativeExpressions: [
              { textEn: "Everything checks out. No quarantine needed since the paperwork is complete. I just need to examine the animal briefly.", textZh: "一切都符合。文件齐全，不需要隔离。我只需要简单检查一下动物。", actionHint: "让检疫官检查宠物", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a relief! What if there had been a quarantine requirement?",
            textZh: "太好了！如果需要隔离的话会怎样？",
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn: "Depending on the country of origin and vaccination status, quarantine can range from 10 days to 6 months. The pet would stay at our quarantine facility, and you'd be responsible for the boarding fees — usually around $20 per day.",
            textZh: "根据出发国和疫苗状态，隔离期从10天到6个月不等。宠物会住在我们的检疫设施里，寄养费用由您承担——通常每天20美元左右。",
            keyPhrases: [
              { en: "quarantine facility", zh: "检疫设施" },
              { en: "boarding fees", zh: "寄养费用" },
              { en: "vaccination status", zh: "疫苗状态" },
            ],
            alternativeExpressions: [
              { textEn: "It depends on where you're coming from. Quarantine could be 10 days to 6 months. The daily boarding fee is about $20.", textZh: "取决于您从哪里来。隔离期可能是10天到6个月。每天寄养费大约20美元。", actionHint: "了解隔离费用", frequency: "common" },
              { textEn: "Without proper vaccination, quarantine can last weeks or even months. Your pet stays at our facility and you pay the daily rate.", textZh: "疫苗不齐的话，隔离可能持续几周甚至几个月。宠物住在我们的设施里，按天收费。", actionHint: "确保疫苗齐全", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I see. Is there anything else I need to do before leaving the airport with my cat?",
            textZh: "明白了。在带猫离开机场之前还需要做什么吗？",
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn: "I'll stamp your import permit and give you a clearance form. Keep these documents safe — you may need them for your return trip or if you visit a vet here. Also, make sure to register your pet with the local animal services within 30 days.",
            textZh: "我会在您的进口许可证上盖章，并给您一张放行单。请保管好这些文件——回程或在这里看兽医时可能需要。另外，请在30天内在当地动物服务部门登记您的宠物。",
            keyPhrases: [
              { en: "clearance form", zh: "放行单" },
              { en: "return trip", zh: "回程" },
              { en: "register your pet", zh: "登记宠物" },
              { en: "local animal services", zh: "当地动物服务部门" },
            ],
            alternativeExpressions: [
              { textEn: "Here's your stamped permit and clearance form. Hold on to these — you'll need them later. And don't forget to register with animal services within 30 days.", textZh: "这是盖好章的许可证和放行单。保管好——之后会用到。30天内别忘了到动物服务部门登记。", actionHint: "保管好文件", frequency: "common" },
              { textEn: "All done. Keep these documents for your return trip. Also, register your cat locally within a month.", textZh: "都办好了。回程时需要这些文件。另外，一个月内在当地登记您的猫。", actionHint: "记住登记期限", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Will do. Thank you for making this process so smooth.",
            textZh: "好的。谢谢你让流程这么顺利。",
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn: "You're welcome! Your cat seems very calm — she's a good traveler. Welcome to the country, and enjoy your stay!",
            textZh: "不客气！您的猫看起来很淡定——是个好旅行者。欢迎来到我们国家，祝您旅途愉快！",
            alternativeExpressions: [
              { textEn: "Happy to help! She's such a well-behaved kitty. Welcome, and have a wonderful time!", textZh: "很高兴帮到您！她真乖。欢迎，祝玩得开心！", actionHint: "顺利通关", frequency: "common" },
              { textEn: "No problem at all. Your cat is a pro traveler! Enjoy your stay and take good care of her.", textZh: "没问题。您的猫是旅行达人！祝旅途愉快，好好照顾她。", actionHint: "带猫出发", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 行李超重 ====================
  {
    id: "airport-overweight",
    category: "airport",
    titleZh: "行李超重",
    titleEn: "Overweight Luggage",
    description: "在值机柜台处理行李超重问题，包括重新打包、额外费用等",
    otherRole: "值机柜台工作人员",
    otherRoleIcon: "luggage",
    flows: [
      {
        id: "pay-excess",
        titleZh: "支付超重费",
        titleEn: "Paying Excess Baggage Fee",
        description: "行李超重后选择支付额外费用",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "柜台",
            textEn: "Let me weigh your bag... I'm sorry, but your suitcase is 28 kilos. The limit is 23 kilos, so it's 5 kilos over.",
            textZh: "让我称一下您的行李……抱歉，您的箱子是28公斤。限重23公斤，超了5公斤。",
            keyPhrases: [
              { en: "weigh your bag", zh: "称行李" },
              { en: "the limit", zh: "限重" },
              { en: "over", zh: "超重" },
            ],
            alternativeExpressions: [
              { textEn: "Hmm, this bag is coming in at 28 kilos — that's 5 over the weight allowance.", textZh: "嗯，这个包28公斤——超过行李限重5公斤。", actionHint: "准备处理超重", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh no. How much is the excess baggage fee?",
            textZh: "糟糕。超重行李费多少钱？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "The excess fee is $15 per kilo, so that would be $75 for the 5 kilos over. Alternatively, you could rearrange some items into a carry-on if you have one.",
            textZh: "超重费是每公斤15美元，5公斤超重就是75美元。或者您可以把一些东西移到随身行李里，如果您有的话。",
            keyPhrases: [
              { en: "excess fee", zh: "超重费" },
              { en: "per kilo", zh: "每公斤" },
              { en: "rearrange", zh: "重新整理" },
            ],
            vocabNotes: {
              "excess baggage": {
                meaningInContext: "在这句话里表示：超出航空公司允许重量的行李部分",
                similarUsage: "类似用法：Is there a charge for excess baggage?（超重行李要收费吗？）",
              },
            },
            alternativeExpressions: [
              { textEn: "That's $15 for each extra kilo, so $75 total. Or you could shift some stuff into your carry-on to bring the weight down.", textZh: "每超一公斤15美元，一共75美元。或者可以把一些东西挪到随身行李里减重。", actionHint: "考虑重新打包", frequency: "common" },
              { textEn: "The overweight charge comes to $75. If you have a carry-on with room, you could move some items and save the fee.", textZh: "超重费一共75美元。如果随身行李还有空间，可以移些东西过去，省下这笔费用。", actionHint: "评估随身行李空间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's quite expensive. Is there any way to reduce the fee? Maybe I could check a second bag instead?",
            textZh: "这太贵了。有办法减少费用吗？也许我可以改成托运第二件行李？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Actually, checking a second bag is $50, which would be cheaper if you can split the weight. Your second bag would need to be under 23 kilos. Do you have another bag you could use?",
            textZh: "其实，托运第二件行李是50美元，如果您能分散重量的话会更便宜。第二件行李需要23公斤以内。您有其他袋子可以用吗？",
            keyPhrases: [
              { en: "second bag", zh: "第二件行李" },
              { en: "split the weight", zh: "分散重量" },
            ],
            alternativeExpressions: [
              { textEn: "A second checked bag is only $50 — cheaper than the overweight fee if you can split the weight.", textZh: "托运第二件行李只要50美元——如果能分散重量的话比超重费便宜。", actionHint: "考虑托运第二件", frequency: "common" },
              { textEn: "Another option: check a second bag for $50. As long as each bag is under 23 kilos, you're good.", textZh: "另一个方案：再托运一件50美元。只要每件不超过23公斤就行。", actionHint: "找另一个包装", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Hmm, I don't have another bag. I'll just pay the $75. Can I pay by credit card?",
            textZh: "嗯，我没有其他袋子了。那我付75美元吧。可以刷信用卡吗？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Yes, credit card is fine. I'll process the payment now... All done. Here's your receipt. Your bag is checked through to your final destination.",
            textZh: "可以的，刷信用卡就行。我现在处理付款……好了。这是您的收据。您的行李已经直挂到最终目的地了。",
            keyPhrases: [
              { en: "receipt", zh: "收据" },
              { en: "checked through", zh: "直挂" },
              { en: "final destination", zh: "最终目的地" },
            ],
            alternativeExpressions: [
              { textEn: "Payment's done. Here's your receipt. Your bag will go straight through to your final stop — no need to pick it up in between.", textZh: "付款完成。这是收据。行李会直挂到终点站——中间不用取。", actionHint: "保管好收据", frequency: "common" },
              { textEn: "All set — $75 charged to your card. Your luggage is tagged through to your destination.", textZh: "搞定了——75美元已刷卡。您的行李已经标记直挂到目的地。", actionHint: "确认行李标签", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. For next time, what's the best way to avoid overweight fees?",
            textZh: "谢谢。下次怎样才能避免超重费呢？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "I'd recommend weighing your bag at home before you leave. You can buy a portable luggage scale for about $10 — it's a great investment. Also, wearing your heaviest shoes and jacket on the plane can save a couple of kilos!",
            textZh: "建议您出发前在家称一下行李。买一个便携行李秤大概10美元——很划算。另外，把最重的鞋子和外套穿上飞机可以省几公斤！",
            keyPhrases: [
              { en: "portable luggage scale", zh: "便携行李秤" },
              { en: "investment", zh: "值得的投资" },
            ],
            culturalNote: "穿最重的衣物上飞机是很多资深旅行者的常用技巧，可以有效减轻行李重量。",
            alternativeExpressions: [
              { textEn: "My tip? Weigh your bag at home. A portable scale is like ten bucks and saves you a lot of hassle.", textZh: "我的建议？在家称好行李。便携秤才10美元左右，省很多麻烦。", actionHint: "买个便携秤", frequency: "common" },
              { textEn: "Best advice — get a luggage scale and weigh before you leave. And wear your heaviest stuff on the plane!", textZh: "最好的建议——买个行李秤，出发前称一下。最重的衣服穿上飞机！", actionHint: "穿重衣服上飞机", frequency: "common" },
            ],
          },
        ],
      },
      {
        id: "repack-negotiate",
        titleZh: "重新打包和协商",
        titleEn: "Repacking & Negotiating",
        description: "在机场重新整理行李、与工作人员协商减少费用",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "柜台",
            textEn: "Your bag is 32 kilos — that's 9 kilos over the limit. The excess fee would be $135.",
            textZh: "您的行李是32公斤——超了9公斤。超重费是135美元。",
            alternativeExpressions: [
              { textEn: "Ooh, this one's heavy — 32 kilos. That's 9 over. The fee would be $135.", textZh: "哎呀，这个有点重——32公斤。超了9公斤。费用是135美元。", actionHint: "考虑重新打包", frequency: "common" },
              { textEn: "Your suitcase is coming in at 32 kilos, which is 9 over the limit. That'll cost $135 in excess fees.", textZh: "您的箱子称出来是32公斤，超了9公斤。超重费135美元。", actionHint: "评估选项", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's way too much! Can I take some things out right here and repack?",
            textZh: "太贵了！我能在这里取出一些东西重新打包吗？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Of course, there's a repacking area right behind you with a table and a scale. Take your time — just come back to the counter when you're ready.",
            textZh: "当然可以，您身后有一个重新打包的区域，有桌子和秤。慢慢来——打包好了再回柜台。",
            keyPhrases: [
              { en: "repacking area", zh: "重新打包区域" },
              { en: "take your time", zh: "慢慢来" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, you can step aside and reorganize. There's a baggage scale over there for you to use.", textZh: "当然，您可以到旁边整理一下。那边有个行李秤可以用。", actionHint: "先去旁边整理", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, I've moved some things to my carry-on. Can you weigh it again?",
            textZh: "好了，我把一些东西移到随身行李了。能再称一次吗？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Let's see... 25 kilos now. That's still 2 kilos over. The fee would be $30. Or if you can remove just a little more, you'd be under the limit.",
            textZh: "看看……现在25公斤。还是超了2公斤。费用是30美元。或者如果您能再拿出一点点，就不超了。",
            keyPhrases: [
              { en: "under the limit", zh: "不超重" },
            ],
            alternativeExpressions: [
              { textEn: "It's 25 now — still 2 kilos over. That's $30. If you can take out just a bit more, you'd be in the clear.", textZh: "现在25公斤——还是超了2公斤。30美元。如果能再拿出一点点就不超了。", actionHint: "再减一点", frequency: "common" },
              { textEn: "Better! Down to 25 kilos, but that's still 2 over. Two more kilos and you're good to go.", textZh: "好多了！降到25公斤了，但还是超2公斤。再减2公斤就过关了。", actionHint: "尝试再减重", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I really can't take anything more out. Is there any flexibility on 2 kilos? Some airlines let 1 or 2 kilos slide...",
            textZh: "我真的拿不出更多了。2公斤能通融一下吗？有些航空公司1-2公斤可以放过去的……",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "I understand. Let me check with my supervisor... Okay, since it's only 2 kilos over and you've already repacked, we can let it go this time. But please try to stay within the limit for your return flight.",
            textZh: "我理解。让我问一下主管……好的，因为只超了2公斤而且您已经重新打包了，这次我们可以通融。但是回程的时候请尽量控制在限重以内。",
            keyPhrases: [
              { en: "check with my supervisor", zh: "问一下主管" },
              { en: "let it go", zh: "通融/放过" },
              { en: "return flight", zh: "回程航班" },
            ],
            culturalNote: "并非所有航空公司都会通融，低成本航空公司尤其严格。但礼貌地询问有时候会有帮助。",
            vocabNotes: {
              "let it go": {
                meaningInContext: "在这句话里表示：放过、不追究（不是动画片《冰雪奇缘》那个'放手'）",
                similarUsage: "类似用法：I'll let it slide this time.（这次就算了）",
              },
            },
            alternativeExpressions: [
              { textEn: "Let me check with my manager... Okay, since you've already repacked, we'll waive the fee this time.", textZh: "让我问一下经理……好的，既然您已经重新打包了，这次我们免掉这笔费用。", actionHint: "下次注意限重", frequency: "common" },
              { textEn: "Hold on, I'll ask my supervisor... Good news — we can let the 2 kilos slide. Just keep it under the limit next time.", textZh: "稍等，我问一下主管……好消息——2公斤就放过了。下次尽量控制在限重以内。", actionHint: "表示感谢", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much! I really appreciate it. I'll definitely pack lighter next time.",
            textZh: "非常感谢！太感激了。下次一定少装点。",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "No problem. One more tip — if you're a frequent flyer or have a credit card with airline benefits, you might get a higher baggage allowance. Something to look into!",
            textZh: "没问题。再给您一个建议——如果您是常旅客或有航空公司联名信用卡，可能会有更高的行李限额。可以了解一下！",
            keyPhrases: [
              { en: "frequent flyer", zh: "常旅客" },
              { en: "baggage allowance", zh: "行李限额" },
              { en: "airline benefits", zh: "航空公司权益" },
            ],
            alternativeExpressions: [
              { textEn: "One more thing — if you have a frequent flyer card or an airline credit card, you might get extra baggage allowance.", textZh: "再提一下——如果有常旅客卡或航空联名信用卡，可能有额外行李限额。", actionHint: "查看会员权益", frequency: "common" },
              { textEn: "For next time, check if your loyalty program gives you extra weight. Some cards add an extra bag or more kilos.", textZh: "下次可以查一下您的会员计划有没有额外重量。有些卡可以多带一件或多几公斤。", actionHint: "了解会员福利", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great tip, I'll look into that. Thanks again!",
            textZh: "好建议，我回去了解一下。再次感谢！",
          },
        ],
      },
    ],
  },

  // ==================== 货币兑换 ====================
  {
    id: "airport-16",
    category: "airport",
    titleZh: "货币兑换",
    titleEn: "Currency Exchange",
    description: "在机场兑换外币，了解汇率和手续费",
    otherRole: "货币兑换柜台工作人员",
    otherRoleIcon: "banknote",
    flows: [
      {
        id: "basic-exchange",
        titleZh: "基本兑换",
        titleEn: "Basic Currency Exchange",
        description: "用人民币兑换美元或其他外币",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to exchange some Chinese yuan for US dollars.",
            textZh: "你好，我想把人民币换成美元。",
            casualVersion: "Hey, can I change some yuan to dollars?",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Sure. How much would you like to exchange?",
            textZh: "好的。您想兑换多少？",
            keyPhrases: [
              { en: "exchange", zh: "兑换" },
              { en: "how much", zh: "多少" },
            ],
            alternativeExpressions: [
              { textEn: "Of course. What amount are you looking to convert?", textZh: "当然可以。您想兑换多少金额？", actionHint: "告诉对方你想换的金额", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd like to exchange 5,000 yuan. What's the current exchange rate?",
            textZh: "我想换5000元人民币。现在汇率是多少？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Today's rate is 1 US dollar to 7.15 yuan. So 5,000 yuan would give you approximately 699 dollars. There's also a 2% service fee.",
            textZh: "今天的汇率是1美元兑7.15元人民币。5000元大概能换699美元。另外还有2%的手续费。",
            keyPhrases: [
              { en: "exchange rate", zh: "汇率" },
              { en: "approximately", zh: "大约" },
              { en: "service fee", zh: "手续费" },
            ],
            vocabNotes: {
              "service fee": {
                meaningInContext: "在这句话里表示：兑换货币时收取的手续费，通常是兑换金额的百分比",
                similarUsage: "类似用法：Is there a service fee for using this ATM?（用这台ATM机有手续费吗？）",
              },
            },
            alternativeExpressions: [
              { textEn: "The buy rate for dollars is 7.15 yuan. After our commission, you'd get about 685 dollars.", textZh: "美元买入价是7.15元。扣除佣金后，您大概能拿到685美元。", actionHint: "注意佣金后的实际金额", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a bit high. Is the rate better at the ATM machines?",
            textZh: "有点高。ATM机的汇率会更好吗？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "ATMs usually offer a slightly better rate, but your bank may charge a foreign transaction fee. It depends on your card. Our advantage is you get cash immediately with no bank fees.",
            textZh: "ATM通常汇率稍好一些，但您的银行可能会收取境外交易手续费。取决于您的银行卡。我们的优势是现场拿现金，没有银行手续费。",
            keyPhrases: [
              { en: "foreign transaction fee", zh: "境外交易手续费" },
              { en: "depends on your card", zh: "取决于您的银行卡" },
            ],
            vocabNotes: {
              "foreign transaction fee": {
                meaningInContext: "在这句话里表示：在国外使用银行卡时，银行额外收取的手续费",
                similarUsage: "类似用法：My credit card has no foreign transaction fees.（我的信用卡没有境外交易手续费）",
              },
            },
            alternativeExpressions: [
              { textEn: "The ATM rate is a bit better, but your bank might hit you with a transaction fee. With us, what you see is what you get.", textZh: "ATM汇率好一点，但银行可能会收手续费。在我们这里，看到多少就是多少。", actionHint: "权衡利弊", frequency: "common" },
              { textEn: "It depends. ATMs give a better rate but banks often add their own fees. Here you get your cash right away, no hidden charges.", textZh: "看情况。ATM汇率好但银行经常加自己的手续费。这里现场拿现金，没有隐藏费用。", actionHint: "决定在哪换", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, I'll go ahead and exchange the 5,000 yuan. Can I get it in smaller bills?",
            textZh: "好吧，那就换5000元。能给我小面额的钞票吗？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Sure. I can give you a mix of twenties and fifties. Would that work?",
            textZh: "可以。我可以给您20和50面额的混合。可以吗？",
            keyPhrases: [
              { en: "smaller bills", zh: "小面额钞票" },
              { en: "twenties and fifties", zh: "20和50面额" },
            ],
            localVariants: {
              "en-US": "I can break it into twenties and fifties.",
              "en-GB": "I can give you a mix of twenties and fifties.",
              "en-AU": "I can sort you out with twenties and fifties.",
            },
            alternativeExpressions: [
              { textEn: "Of course. How about a mix of twenties and fifties? That should be easy to spend.", textZh: "当然可以。20和50面额的混合怎么样？花起来方便。", actionHint: "确认面额", frequency: "common" },
              { textEn: "No problem — I'll break it into smaller notes. Twenties and fifties okay?", textZh: "没问题——我给您换成小面额。20和50的可以吗？", actionHint: "同意面额搭配", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's perfect. Can I also get a receipt?",
            textZh: "很好。能给我一张收据吗？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Of course. Here's your 685 dollars and the receipt. Please count it before you leave the counter. Keep the receipt — you may need it for customs or if you want to exchange back.",
            textZh: "当然。这是您的685美元和收据。请在离开柜台前数一下。保留好收据——过海关时可能需要，或者您想换回来的时候也需要。",
            keyPhrases: [
              { en: "count it", zh: "数一下" },
              { en: "keep the receipt", zh: "保留好收据" },
              { en: "exchange back", zh: "换回来" },
            ],
            culturalNote: "兑换外币后一定要当场清点，并保留收据。有些国家入境时海关会询问携带现金金额。",
            alternativeExpressions: [
              { textEn: "Here's your $685 and the receipt. Please count it before you leave. Keep the receipt — you might need it at customs.", textZh: "这是您的685美元和收据。离开前请数一下。收据留好——过海关可能需要。", actionHint: "当场清点", frequency: "common" },
              { textEn: "There you go — six eighty-five. Always count it at the counter. And hold on to that receipt in case you want to convert back later.", textZh: "给您——685美元。一定在柜台数清楚。收据留好，万一以后要换回来会用到。", actionHint: "数钱并保管收据", frequency: "common" },
            ],
          },
        ],
      },
      {
        id: "rate-negotiation",
        titleZh: "汇率比较与协商",
        titleEn: "Comparing Rates",
        description: "比较不同兑换点的汇率，尝试获取更好的价格",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, what's your exchange rate for Japanese yen? I'm flying to Tokyo.",
            textZh: "你好，日元的汇率是多少？我要去东京。",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "For Japanese yen, the rate today is 1 yuan to 20.5 yen. The minimum exchange amount is 1,000 yuan.",
            textZh: "日元的话，今天汇率是1元人民币兑20.5日元。最低兑换金额是1000元人民币。",
            keyPhrases: [
              { en: "rate", zh: "汇率" },
              { en: "minimum exchange amount", zh: "最低兑换金额" },
            ],
            alternativeExpressions: [
              { textEn: "For yen, we're doing 20.5 to the yuan today. The minimum amount to exchange is 1,000 yuan.", textZh: "日元今天是1元兑20.5。最低兑换金额1000元。", actionHint: "了解汇率", frequency: "common" },
              { textEn: "Today's yen rate is 20.5. You'll need to exchange at least 1,000 yuan.", textZh: "今天的日元汇率是20.5。至少要换1000元人民币。", actionHint: "确认起兑金额", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I checked online and the market rate is about 21.2 yen per yuan. Your rate seems quite different.",
            textZh: "我网上查了，市场汇率大约是1元兑21.2日元。你们的汇率差距有点大。",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "The market rate is the mid-market rate — what banks trade at. We include a spread to cover our costs. But I can tell you, our rates are competitive compared to other exchange counters in the airport.",
            textZh: "市场汇率是中间价——银行之间的交易价。我们包含了点差来覆盖成本。但我可以告诉您，和机场其他兑换柜台比，我们的汇率是有竞争力的。",
            keyPhrases: [
              { en: "mid-market rate", zh: "中间价" },
              { en: "spread", zh: "点差" },
              { en: "competitive", zh: "有竞争力的" },
            ],
            vocabNotes: {
              "spread": {
                meaningInContext: "在这句话里表示：买入价和卖出价之间的差额，也就是兑换商的利润空间",
                similarUsage: "类似用法：The bid-ask spread is about 2%.（买卖价差大约2%）",
              },
            },
            alternativeExpressions: [
              { textEn: "The online rate doesn't include fees. We add a margin, but we're still one of the cheapest at this airport.", textZh: "网上的汇率不含手续费。我们加了一个差价，但在这个机场我们算最便宜的之一。", actionHint: "对比其他柜台", frequency: "common" },
              { textEn: "There's always a markup at exchange counters — that's how we operate. But you'll find our spread is fair compared to others here.", textZh: "兑换柜台都有加价——这是经营方式。但跟机场其他家比，我们的点差算合理的。", actionHint: "接受或比较", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "If I exchange a larger amount, say 10,000 yuan, can you offer a better rate?",
            textZh: "如果我换大额的，比如10000元，能给更好的汇率吗？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "For amounts over 8,000 yuan, we can offer a preferred rate of 20.8 yen per yuan. That would give you 208,000 yen for 10,000 yuan.",
            textZh: "超过8000元的话，我们可以给您优惠汇率，1元兑20.8日元。10000元可以换208,000日元。",
            keyPhrases: [
              { en: "preferred rate", zh: "优惠汇率" },
              { en: "amounts over", zh: "超过…的金额" },
            ],
            alternativeExpressions: [
              { textEn: "For larger amounts we have a VIP rate. Let me check what I can do for you.", textZh: "大额兑换有VIP汇率。让我看看能给您什么价格。", actionHint: "等待对方查询", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's better. Actually, do I even need that much cash? Can I use my credit card for most things in Tokyo?",
            textZh: "那好多了。不过我真的需要那么多现金吗？在东京大部分消费可以刷信用卡吗？",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Major stores and restaurants accept credit cards, but many smaller shops, ramen places, and vending machines are still cash-only in Japan. I'd suggest having at least 50,000 yen in cash for a week-long trip.",
            textZh: "大商场和餐厅可以刷卡，但日本很多小店、拉面店和自动售货机还是只收现金。建议一周的行程至少带50,000日元现金。",
            keyPhrases: [
              { en: "cash-only", zh: "只收现金" },
              { en: "at least", zh: "至少" },
            ],
            culturalNote: "日本虽然在推进无现金支付，但很多地方尤其是传统小店、神社、部分出租车仍然只收现金。多带些现金是明智的。",
            alternativeExpressions: [
              { textEn: "Big stores take cards, but a lot of smaller places in Japan are cash-only. I'd suggest bringing at least 50,000 yen for a week.", textZh: "大店可以刷卡，但日本很多小地方只收现金。建议一周至少带50,000日元。", actionHint: "评估现金需求", frequency: "common" },
              { textEn: "Japan is still pretty cash-heavy. For a week, you'll want at least fifty thousand yen on hand.", textZh: "日本还是很依赖现金。一周的话，手头至少要有五万日元。", actionHint: "多换些现金", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. I'll exchange 5,000 yuan then, and use my card for the rest.",
            textZh: "了解了。那我换5000元吧，其他用卡付。",
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Smart choice. Here's 103,000 yen and your receipt. One tip — when paying by card abroad, always choose to be charged in the local currency, not your home currency. You'll get a better rate that way.",
            textZh: "明智的选择。这是103,000日元和收据。一个小建议——在国外刷卡时，永远选择用当地货币结算，不要选人民币。这样汇率更划算。",
            keyPhrases: [
              { en: "charged in the local currency", zh: "用当地货币结算" },
              { en: "home currency", zh: "本国货币" },
            ],
            culturalNote: "刷卡时选择当地货币（如日元）而不是人民币结算，通常汇率更好。选人民币结算看似方便，但商户会加收高额汇率差。",
            vocabNotes: {
              "charged in the local currency": {
                meaningInContext: "在这句话里表示：刷卡时选择以当地货币计价扣款，而不是自动转换成你本国货币",
                similarUsage: "类似用法：Would you like to be charged in euros or dollars?（您想用欧元还是美元结算？）",
              },
            },
            alternativeExpressions: [
              { textEn: "Good call. Here's your yen and receipt. Quick tip — when using your card in Japan, always pay in yen, not yuan. Better exchange rate.", textZh: "明智的选择。这是日元和收据。小建议——在日本刷卡时，永远选日元结算，不要选人民币。汇率更好。", actionHint: "记住刷卡技巧", frequency: "common" },
              { textEn: "Here you go — 103,000 yen. A little advice for your trip: if a card machine asks about currency, always pick the local one.", textZh: "给您——103,000日元。旅途小建议：如果刷卡机问货币选择，永远选当地货币。", actionHint: "选择当地货币", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 机场交通 ====================
  {
    id: "airport-17",
    category: "airport",
    titleZh: "机场交通",
    titleEn: "Airport Ground Transportation",
    description: "在机场搭乘出租车、网约车、机场大巴等地面交通",
    otherRole: "出租车调度员/司机",
    otherRoleIcon: "car",
    flows: [
      {
        id: "taxi-ride",
        titleZh: "打出租车",
        titleEn: "Taking a Taxi",
        description: "在机场排队打出租车前往酒店",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, where is the taxi stand?",
            textZh: "请问出租车站在哪里？",
            casualVersion: "Hey, where do I get a taxi?",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Follow the signs for 'Ground Transportation.' Take the escalator down one level and exit through Door 3. The taxi queue is right outside.",
            textZh: "跟着'地面交通'的标识走。乘扶梯下一层，从3号门出去。出租车排队处就在外面。",
            keyPhrases: [
              { en: "ground transportation", zh: "地面交通" },
              { en: "escalator", zh: "扶梯" },
              { en: "taxi queue", zh: "出租车排队处" },
            ],
            alternativeExpressions: [
              { textEn: "Head to the arrivals level. Taxis are outside Exit B.", textZh: "到到达层。出租车在B出口外面。", actionHint: "找到达层B出口", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Hi, I need to go to the Hilton Hotel downtown. How much will it cost?",
            textZh: "你好，我要去市中心的希尔顿酒店。大概多少钱？",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Downtown is about 30 minutes from here with no traffic. It'll be around $45 to $55, depending on the route. It's metered, so you'll pay what the meter shows.",
            textZh: "不堵车的话到市中心大约30分钟。大概45到55美元，看走哪条路。打表的，按表上的付。",
            keyPhrases: [
              { en: "with no traffic", zh: "不堵车的话" },
              { en: "metered", zh: "打表的" },
              { en: "depending on the route", zh: "看走哪条路" },
            ],
            vocabNotes: {
              "metered": {
                meaningInContext: "在这句话里表示：出租车按计价器计费，不是议价",
                similarUsage: "类似用法：Make sure the taxi is metered.（确保出租车打表）",
              },
            },
            alternativeExpressions: [
              { textEn: "The Hilton downtown? About a half hour, maybe $45 to $55. It's all on the meter.", textZh: "市中心希尔顿？大概半小时，45到55美元。都按表走。", actionHint: "确认价格范围", frequency: "common" },
              { textEn: "That's roughly 30 minutes if traffic's good. The fare runs about fifty bucks, give or take.", textZh: "交通顺畅的话大约30分钟。车费大概50美元上下。", actionHint: "了解大概费用", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a flat rate to downtown?",
            textZh: "到市中心有固定价格吗？",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "There is a flat rate option of $50 to the downtown area. No surprises, no matter what the traffic is like. Would you prefer that?",
            textZh: "到市区有50美元的固定价格。不管交通状况如何，价格不变。您选固定价吗？",
            keyPhrases: [
              { en: "flat rate", zh: "固定价格" },
              { en: "no surprises", zh: "没有意外费用" },
            ],
            literalMeaning: "'No surprises' 字面意思是'没有惊喜'，在这里表示价格透明不会有额外费用。",
            alternativeExpressions: [
              { textEn: "Yeah, there's a fixed fare of $50 to downtown. Same price no matter the traffic.", textZh: "有的，到市区固定50美元。不管堵不堵车都一样。", actionHint: "选择固定价", frequency: "common" },
              { textEn: "We can do a flat fifty to the downtown area. That way you know exactly what you're paying.", textZh: "可以固定50美元到市区。这样您就知道确切要付多少了。", actionHint: "确认接受固定价", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, the flat rate sounds good. Can I pay by credit card?",
            textZh: "好的，固定价格挺好。可以刷卡吗？",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Yes, we accept all major credit cards. Let me help you with your luggage. Hop in!",
            textZh: "可以，我们接受所有主流信用卡。我帮您放行李。请上车！",
            keyPhrases: [
              { en: "major credit cards", zh: "主流信用卡" },
              { en: "hop in", zh: "上车" },
            ],
            localVariants: {
              "en-US": "Hop in!",
              "en-GB": "Jump in!",
              "en-AU": "Jump in, mate!",
            },
            literalMeaning: "'Hop in' 字面意思是'跳进来'，实际就是'请上车'的口语说法。",
            alternativeExpressions: [
              { textEn: "Sure, Visa, Mastercard, Amex — we take them all. Let me grab your bags. Get in!", textZh: "当然，Visa、万事达、美运通——都可以。我帮你拿行李。上车吧！", actionHint: "上车出发", frequency: "common" },
              { textEn: "Card is fine. Pop in, I'll put your luggage in the trunk.", textZh: "刷卡没问题。上车吧，我帮你把行李放后备箱。", actionHint: "上车", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks. Could you take the highway? I'm in a bit of a rush.",
            textZh: "谢谢。能走高速吗？我有点赶时间。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Sure, the highway is faster but there's a $5 toll. Is that okay?",
            textZh: "可以，走高速更快但有5美元过路费。没问题吧？",
            keyPhrases: [
              { en: "toll", zh: "过路费" },
              { en: "in a rush", zh: "赶时间" },
            ],
            vocabNotes: {
              "toll": {
                meaningInContext: "在这句话里表示：高速公路过路费，由乘客支付",
                similarUsage: "类似用法：Is the toll included in the fare?（过路费包含在车费里吗？）",
              },
            },
            alternativeExpressions: [
              { textEn: "No problem. The expressway has a $5 toll on top of the fare, but it'll save us 10 minutes.", textZh: "没问题。高速公路有5美元过路费加在车费上，但能省10分钟。", actionHint: "同意走高速", frequency: "common" },
              { textEn: "I can take the freeway — quicker but there's a five-dollar toll. You okay with that?", textZh: "我可以走高速——更快但有5美元过路费。可以吗？", actionHint: "确认同意", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's fine. Also, do you have a phone charger in the car by any chance?",
            textZh: "没问题。对了，车上有手机充电器吗？",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Yeah, there's a USB cable right there in the back. Help yourself. We should be at the hotel in about 25 minutes.",
            textZh: "有，后面那里有USB线。随便用。大约25分钟到酒店。",
            keyPhrases: [
              { en: "help yourself", zh: "随便用" },
            ],
            literalMeaning: "'Help yourself' 字面意思是'帮你自己'，实际表示'随便用/自己来'，是热情友好的说法。",
            alternativeExpressions: [
              { textEn: "There's a charger in the back seat — feel free to use it. We'll be there in about 25.", textZh: "后座有充电线——随便用。大约25分钟到。", actionHint: "充电", frequency: "common" },
              { textEn: "Yep, USB cable right there. Go ahead. Should be at your hotel in 25 minutes or so.", textZh: "有的，USB线就在那。自己用。大约25分钟到酒店。", actionHint: "插上充电", frequency: "common" },
            ],
          },
        ],
      },
      {
        id: "rideshare",
        titleZh: "网约车",
        titleEn: "Ride-share Pickup",
        description: "使用Uber/Lyft等网约车从机场出发",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I ordered an Uber but I can't find the pickup point. Can you help?",
            textZh: "你好，我叫了Uber但找不到上车点。能帮帮我吗？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Ride-share pickups are on Level 1 of the parking garage. Go through the walkway on your left and follow the purple signs. There are designated spots labeled with letters — your app should tell you which one.",
            textZh: "网约车上车点在停车场1层。从您左边的通道走过去，跟着紫色标识。有用字母标记的指定上车点——您的APP会告诉您是哪个。",
            keyPhrases: [
              { en: "ride-share pickups", zh: "网约车上车点" },
              { en: "parking garage", zh: "停车场" },
              { en: "designated spots", zh: "指定上车点" },
            ],
            vocabNotes: {
              "designated": {
                meaningInContext: "在这句话里表示：专门指定的、划定的（上车区域）",
                similarUsage: "类似用法：Please wait in the designated area.（请在指定区域等候）",
              },
            },
            alternativeExpressions: [
              { textEn: "Uber and Lyft pick up in the parking structure, Level 1. Follow the purple signs from here.", textZh: "Uber和Lyft在停车楼1层上车。从这里跟着紫色标识走。", actionHint: "找紫色标识", frequency: "common" },
              { textEn: "The ride-share zone is in the garage — go left, one level down. Look for your spot letter in the app.", textZh: "网约车区域在车库——左转，下一层。在APP上看你的上车点字母。", actionHint: "查看APP上车点", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I see. My app says Spot C. Is the driver allowed to come to the terminal?",
            textZh: "明白了。我的APP显示C点。司机可以到航站楼这边来吗？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "No, ride-share drivers can't pick up at the terminal curb — that's only for taxis and hotel shuttles. You'll need to walk to the garage. It's about a 3-minute walk.",
            textZh: "不可以，网约车司机不能在航站楼路边接人——那里只允许出租车和酒店接驳车。您需要走到停车场。大约走3分钟。",
            keyPhrases: [
              { en: "terminal curb", zh: "航站楼路边" },
              { en: "hotel shuttles", zh: "酒店接驳车" },
            ],
            alternativeExpressions: [
              { textEn: "Sorry, no — Uber and Lyft can't come to the terminal. You have to go to the designated area in the garage. It's a short walk.", textZh: "抱歉，不行——Uber和Lyft不能到航站楼。要走到车库的指定区域。很近的。", actionHint: "走到停车场", frequency: "common" },
              { textEn: "Ride-shares aren't allowed to pull up at the curb. Only taxis and hotel shuttles can. The pickup is about 3 minutes away on foot.", textZh: "网约车不能在路边停车。只有出租车和酒店接驳车可以。上车点步行约3分钟。", actionHint: "步行到上车点", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I found Spot C but my driver isn't here yet. The app says 4 minutes.",
            textZh: "我找到C点了，但司机还没到。APP显示还要4分钟。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Hi, are you heading to the Marriott on 5th Avenue? I'm in a silver Toyota Camry. I can see you — I'm pulling up now.",
            textZh: "你好，你是去第五大道的万豪酒店吗？我是银色丰田凯美瑞。我看到你了——我正在靠过来。",
            keyPhrases: [
              { en: "pulling up", zh: "靠过来/停过来" },
            ],
            alternativeExpressions: [
              { textEn: "Hey! I'm your Uber. White Honda Civic, just around the corner.", textZh: "嗨！我是你的Uber司机。白色本田思域，就在拐角处。", actionHint: "确认车辆信息后上车", frequency: "common" },
            ],
            vocabNotes: {
              "pulling up": {
                meaningInContext: "在这句话里表示：正在把车开过来/停过来",
                similarUsage: "类似用法：I'll pull up right in front of the door.（我把车停到门口）",
              },
            },
          },
          {
            speaker: "you",
            textEn: "Yes, that's me! Is it okay if I put my suitcase in the trunk?",
            textZh: "对，是我！我可以把箱子放后备箱吗？",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Sure, let me pop it open for you... All set. Buckle up! The GPS says 35 minutes to your hotel, but traffic looks light.",
            textZh: "当然，我帮你打开……好了。系好安全带！GPS显示到酒店35分钟，不过路上车不多。",
            keyPhrases: [
              { en: "pop it open", zh: "打开（后备箱）" },
              { en: "buckle up", zh: "系好安全带" },
              { en: "traffic looks light", zh: "路上车不多" },
            ],
            localVariants: {
              "en-US": "Let me pop the trunk.",
              "en-GB": "Let me open the boot.",
              "en-AU": "I'll pop the boot for ya.",
            },
            alternativeExpressions: [
              { textEn: "Trunk's open — toss your bag in. Seat belt on! GPS says 35 minutes, looks like smooth sailing.", textZh: "后备箱开了——把包放进去。系上安全带！GPS显示35分钟，看起来一路畅通。", actionHint: "系好安全带出发", frequency: "common" },
              { textEn: "Let me get the trunk for you... All good. Buckle up and we'll be there in about half an hour.", textZh: "我来开后备箱……好了。系好安全带，大约半小时到。", actionHint: "准备出发", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 机场餐饮 ====================
  {
    id: "airport-18",
    category: "airport",
    titleZh: "机场餐饮",
    titleEn: "Airport Dining",
    description: "在机场餐厅或快餐店点餐、询问餐食选项",
    otherRole: "餐厅服务员/收银员",
    otherRoleIcon: "utensils",
    flows: [
      {
        id: "quick-meal",
        titleZh: "快速用餐",
        titleEn: "Quick Meal at Food Court",
        description: "在美食广场快速点餐和用餐",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, what do you recommend for a quick meal? My flight boards in 40 minutes.",
            textZh: "你好，有什么推荐的快餐吗？我的航班40分钟后登机。",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Our burgers and sandwiches are the fastest — ready in about 5 minutes. The pasta takes a bit longer, around 10 to 12 minutes.",
            textZh: "汉堡和三明治最快——大约5分钟就好。意面要久一点，大约10到12分钟。",
            keyPhrases: [
              { en: "ready in about 5 minutes", zh: "大约5分钟就好" },
              { en: "takes a bit longer", zh: "要久一点" },
            ],
            alternativeExpressions: [
              { textEn: "If you're short on time, I'd go with the grab-and-go section over there.", textZh: "如果赶时间，建议去那边的即取即走区。", actionHint: "看看即取区的选择", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll have a chicken sandwich and a coffee, please. For here.",
            textZh: "要一个鸡肉三明治和一杯咖啡。在这吃。",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "What size coffee? Small, medium, or large? And would you like it hot or iced?",
            textZh: "咖啡要什么杯型？小杯、中杯还是大杯？要热的还是冰的？",
            keyPhrases: [
              { en: "what size", zh: "什么杯型" },
              { en: "for here", zh: "在这吃/堂食" },
            ],
            alternativeExpressions: [
              { textEn: "Small, medium, or large? Hot or iced?", textZh: "小杯、中杯还是大杯？热的还是冰的？", actionHint: "选择杯型和温度", frequency: "common" },
              { textEn: "What size would you like that coffee? And do you want it hot?", textZh: "咖啡要什么大小？要热的吗？", actionHint: "告诉对方偏好", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Medium hot coffee, please. Oh, and do you have any vegetarian options? My friend doesn't eat meat.",
            textZh: "中杯热咖啡。对了，有素食选项吗？我朋友不吃肉。",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Sure! We have a garden salad, a veggie wrap, and a mushroom soup. The veggie wrap is really popular.",
            textZh: "有的！我们有田园沙拉、蔬菜卷饼和蘑菇汤。蔬菜卷饼很受欢迎。",
            keyPhrases: [
              { en: "vegetarian options", zh: "素食选项" },
              { en: "veggie wrap", zh: "蔬菜卷饼" },
            ],
            alternativeExpressions: [
              { textEn: "We do! There's a garden salad, veggie wrap, and mushroom soup. The wrap is a bestseller.", textZh: "有的！有田园沙拉、蔬菜卷饼和蘑菇汤。卷饼是畅销款。", actionHint: "帮朋友点菜", frequency: "common" },
              { textEn: "Yep, a few options — salad, veggie wrap, or soup. All meat-free.", textZh: "有好几种——沙拉、蔬菜卷饼或汤。都不含肉。", actionHint: "选一个素食", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, add a veggie wrap too. How much is everything?",
            textZh: "好，再加一个蔬菜卷饼。一共多少钱？",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "That's $8.50 for the chicken sandwich, $4.50 for the coffee, and $9 for the veggie wrap. Your total is $22 before tax. Would you like to add a tip?",
            textZh: "鸡肉三明治8.50美元，咖啡4.50美元，蔬菜卷饼9美元。税前一共22美元。要加小费吗？",
            keyPhrases: [
              { en: "before tax", zh: "税前" },
              { en: "add a tip", zh: "加小费" },
            ],
            culturalNote: "在美国快餐店，点餐付款时屏幕可能会弹出小费选项。快餐类通常不强制给小费，但有些人会选择给15-20%。",
            alternativeExpressions: [
              { textEn: "Alright, that's $22 plus tax. The screen will ask if you'd like to leave a tip.", textZh: "好的，22美元加税。屏幕会问您是否要留小费。", actionHint: "选择小费金额", frequency: "common" },
              { textEn: "Your total comes to $22 before tax. Would you like to add a gratuity?", textZh: "税前一共22美元。要加小费吗？", actionHint: "决定是否给小费", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll add 15%. Can I pay with Apple Pay?",
            textZh: "加15%小费。可以用Apple Pay吗？",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Yes, just tap your phone on the reader... Perfect, payment went through. Your order number is 47. We'll call your number when it's ready.",
            textZh: "可以，把手机靠近读卡器……好了，付款成功。您的单号是47。做好了我们会叫号。",
            keyPhrases: [
              { en: "tap your phone", zh: "把手机靠近" },
              { en: "reader", zh: "读卡器" },
              { en: "order number", zh: "单号" },
              { en: "call your number", zh: "叫号" },
            ],
            alternativeExpressions: [
              { textEn: "Just hold your phone over the terminal... Done! You're number 47. We'll shout it out when it's ready.", textZh: "把手机放在终端上方……好了！您是47号。做好了会喊号。", actionHint: "等叫号取餐", frequency: "common" },
              { textEn: "Tap right here... Payment received. Your number is 47, pick up at the counter when called.", textZh: "在这里刷一下……付款成功。您的号是47，叫号后到柜台取。", actionHint: "注意叫号", frequency: "common" },
            ],
          },
        ],
      },
      {
        id: "dietary-needs",
        titleZh: "特殊饮食需求",
        titleEn: "Dietary Restrictions",
        description: "有过敏、宗教饮食或特殊饮食需求时点餐",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have a nut allergy. Can you tell me which items on the menu are nut-free?",
            textZh: "你好，我对坚果过敏。能告诉我菜单上哪些是不含坚果的吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Of course. Let me check for you. The grilled chicken, the Caesar salad without croutons, and the tomato soup are all nut-free. I should mention that our kitchen does handle nuts, so there's a small risk of cross-contamination.",
            textZh: "当然。让我帮您查一下。烤鸡、不加面包丁的凯撒沙拉和番茄汤都不含坚果。不过我要说明，我们的厨房会处理坚果，所以有少量交叉污染的风险。",
            keyPhrases: [
              { en: "nut allergy", zh: "坚果过敏" },
              { en: "nut-free", zh: "不含坚果" },
              { en: "cross-contamination", zh: "交叉污染" },
            ],
            vocabNotes: {
              "cross-contamination": {
                meaningInContext: "在这句话里表示：厨房处理坚果食材时，少量坚果成分可能意外接触到其他食物",
                similarUsage: "类似用法：This product is made in a facility that also processes peanuts.（本产品在同时加工花生的工厂生产）",
              },
            },
            alternativeExpressions: [
              { textEn: "Let me look that up... The chicken and tomato soup are both nut-free. Just so you know, we can't guarantee zero cross-contact.", textZh: "我查一下……烤鸡和番茄汤都不含坚果。不过提醒您，我们无法保证完全没有交叉接触。", actionHint: "评估过敏风险", frequency: "common" },
              { textEn: "A few items are safe — grilled chicken, soup, and salad without croutons. But our kitchen does use nuts in other dishes.", textZh: "有几样是安全的——烤鸡、汤和不加面包丁的沙拉。但我们厨房其他菜品会用到坚果。", actionHint: "选择安全菜品", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks for letting me know. Is the allergy severe enough to worry about cross-contamination? I'll go with the grilled chicken. Can I also ask — does the dressing contain any dairy?",
            textZh: "谢谢告知。交叉污染的程度我需要担心吗？那我要烤鸡。另外想问——酱汁里含乳制品吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "The house dressing does contain dairy. We have an olive oil and lemon dressing that's dairy-free. I can also serve it on the side so you can control the amount.",
            textZh: "本店的酱汁含乳制品。我们有橄榄油柠檬酱汁是不含乳制品的。我也可以把酱汁放在旁边，这样您可以控制用量。",
            keyPhrases: [
              { en: "dairy-free", zh: "不含乳制品" },
              { en: "on the side", zh: "放在旁边" },
              { en: "control the amount", zh: "控制用量" },
            ],
            vocabNotes: {
              "on the side": {
                meaningInContext: "在这句话里表示：酱汁单独放在旁边，不直接浇在食物上",
                similarUsage: "类似用法：Can I get the sauce on the side?（酱汁能放旁边吗？）",
              },
            },
            alternativeExpressions: [
              { textEn: "The regular dressing has dairy, but we have a lemon vinaigrette that's dairy-free. Want it on the side?", textZh: "普通酱汁含乳制品，但有一款柠檬油醋汁不含。要放旁边吗？", actionHint: "选无乳酱汁", frequency: "common" },
              { textEn: "That one has milk in it. I can swap it for olive oil and lemon — no dairy at all.", textZh: "那款含牛奶。我可以换成橄榄油柠檬汁——完全不含乳制品。", actionHint: "换酱汁", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "The olive oil dressing sounds good. On the side, please. Also, is there a halal option? My colleague needs halal food.",
            textZh: "橄榄油酱汁挺好。放旁边吧。另外，有清真餐吗？我同事需要吃清真的。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "We don't have halal certification, but the seafood dishes and vegetarian options would work. There's also a halal restaurant on the other side of the food court — it's called 'Saffron Kitchen.'",
            textZh: "我们没有清真认证，但海鲜和素食可以选择。美食广场另一边也有一家清真餐厅——叫'藏红花厨房'。",
            keyPhrases: [
              { en: "halal certification", zh: "清真认证" },
              { en: "the other side of the food court", zh: "美食广场另一边" },
            ],
            alternativeExpressions: [
              { textEn: "We're not halal-certified, but the seafood and veggie dishes are fine. There's also a halal place across the food court.", textZh: "我们没有清真认证，但海鲜和素菜没问题。美食广场对面也有一家清真餐厅。", actionHint: "推荐清真餐厅", frequency: "common" },
              { textEn: "Our kitchen isn't halal, sorry. But there's Saffron Kitchen on the other end — they're fully halal.", textZh: "我们厨房不是清真的，抱歉。不过另一头有家'藏红花厨房'——完全清真。", actionHint: "去另一家餐厅", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks, I'll let them know. Can I also get a bottle of water?",
            textZh: "谢谢，我告诉他。再来一瓶水。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Still or sparkling?",
            textZh: "纯净水还是气泡水？",
            keyPhrases: [
              { en: "still", zh: "纯净水/不带气的" },
              { en: "sparkling", zh: "气泡水/带气的" },
            ],
            culturalMeaning: "在欧美餐厅点水时，服务员通常会问'still or sparkling'。Still water是不带气的纯净水，sparkling是带气泡的。如果你想要免费自来水可以说'tap water please'。",
            alternativeExpressions: [
              { textEn: "Flat or fizzy?", textZh: "不带气的还是带气的？", actionHint: "选择水的类型", frequency: "common" },
              { textEn: "Would you like still water or sparkling? We also have flavored water.", textZh: "要纯净水还是气泡水？我们也有调味水。", actionHint: "选择一种", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Still water, please. Actually, can I just get tap water? Is that free?",
            textZh: "纯净水。等等，我要自来水行吗？免费的吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Absolutely, tap water is free. I'll bring a glass with your meal. Your grilled chicken with olive oil dressing on the side will be ready in about 8 minutes.",
            textZh: "当然，自来水是免费的。我会跟您的餐一起送过来。您的烤鸡配橄榄油酱汁（放旁边）大约8分钟好。",
            keyPhrases: [
              { en: "tap water", zh: "自来水" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, tap water is no problem — it's free. I'll bring it with your food.", textZh: "当然，自来水没问题——免费的。跟您的餐一起端过来。", actionHint: "等餐到齐", frequency: "common" },
              { textEn: "Of course! No charge for tap water. Your order will be out in about 8 minutes.", textZh: "当然可以！自来水免费。您的餐大约8分钟好。", actionHint: "稍等片刻", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 遗失物品 ====================
  {
    id: "airport-19",
    category: "airport",
    titleZh: "遗失物品",
    titleEn: "Lost Items at Airport",
    description: "在机场丢失物品后寻找帮助，包括失物招领处",
    otherRole: "机场工作人员/失物招领处",
    otherRoleIcon: "search",
    flows: [
      {
        id: "lost-on-plane",
        titleZh: "飞机上遗失物品",
        titleEn: "Item Left on Plane",
        description: "下机后发现物品遗留在飞机上",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I think I left my jacket on the plane. I just got off flight UA 852.",
            textZh: "打扰了，我好像把外套落在飞机上了。我刚下UA 852航班。",
            casualVersion: "Hey, I left my jacket on the plane — UA 852.",
          },
          {
            speaker: "them",
            role: "地勤",
            textEn: "I'm sorry to hear that. Which seat were you in? And can you describe the jacket?",
            textZh: "很抱歉听到这个。您坐在哪个座位？能描述一下外套吗？",
            keyPhrases: [
              { en: "which seat", zh: "哪个座位" },
              { en: "describe", zh: "描述" },
            ],
            alternativeExpressions: [
              { textEn: "Oh no. Do you remember your seat number? What does the jacket look like?", textZh: "哦不。您记得座位号吗？外套什么样的？", actionHint: "回忆座位号和物品外观", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I was in seat 14A, window seat. It's a black North Face down jacket. I put it in the overhead bin.",
            textZh: "我坐在14A，靠窗。是一件黑色北面羽绒服。放在头顶行李架上了。",
          },
          {
            speaker: "them",
            role: "地勤",
            textEn: "Okay, the aircraft is still at the gate. Let me radio the crew to check. Can you wait here for a few minutes?",
            textZh: "好的，飞机还在廊桥。我用对讲机联系机组人员去看看。您在这里等几分钟好吗？",
            keyPhrases: [
              { en: "at the gate", zh: "在廊桥/登机口" },
              { en: "radio the crew", zh: "用对讲机联系机组" },
            ],
            vocabNotes: {
              "radio": {
                meaningInContext: "在这句话里表示：用对讲机/无线电联系（动词用法，不是收音机）",
                similarUsage: "类似用法：I'll radio security to let you through.（我用对讲机联系安保放你过去）",
              },
            },
            alternativeExpressions: [
              { textEn: "The plane hasn't left the gate yet. Let me call the cabin crew. Give me a couple of minutes.", textZh: "飞机还没离开廊桥。我联系一下客舱机组。给我几分钟。", actionHint: "原地等待", frequency: "common" },
              { textEn: "Good timing — the aircraft is still here. I'll have someone check right away. Can you hang tight?", textZh: "来得正好——飞机还在。我马上让人去查。您稍等一下？", actionHint: "耐心等候", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, of course. Thank you so much.",
            textZh: "好的，当然。非常感谢。",
          },
          {
            speaker: "them",
            role: "地勤",
            textEn: "Good news! They found a black down jacket in the overhead bin above row 14. Is this yours?",
            textZh: "好消息！他们在14排上方的行李架找到了一件黑色羽绒服。是您的吗？",
            keyPhrases: [
              { en: "good news", zh: "好消息" },
              { en: "overhead bin", zh: "头顶行李架" },
            ],
            alternativeExpressions: [
              { textEn: "They found it! A black down jacket in the bin above row 14. Does that sound right?", textZh: "找到了！14排上方行李架里的一件黑色羽绒服。是这件吗？", actionHint: "确认物品", frequency: "common" },
              { textEn: "We got lucky — the crew found a jacket matching your description. Here it is.", textZh: "运气不错——机组找到了跟您描述一致的外套。在这里。", actionHint: "核对物品", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, that's mine! Thank you so much. What if it hadn't been found? Where would I go?",
            textZh: "是的，是我的！太感谢了。如果没找到的话，我该去哪里？",
          },
          {
            speaker: "them",
            role: "地勤",
            textEn: "You would file a lost item report at the airline's baggage service counter, or you can do it online through the airline's website. They usually keep found items for 30 days. You'd need your flight details and a description of the item.",
            textZh: "您可以在航空公司的行李服务柜台提交遗失物品报告，或者在航空公司网站上在线提交。他们通常保留找到的物品30天。您需要提供航班信息和物品描述。",
            keyPhrases: [
              { en: "file a lost item report", zh: "提交遗失物品报告" },
              { en: "baggage service counter", zh: "行李服务柜台" },
              { en: "found items", zh: "找到的物品" },
            ],
            alternativeExpressions: [
              { textEn: "You'd go to the baggage office and fill out a lost item form. You can also do it on the airline's website.", textZh: "去行李服务处填一份遗失物品表格。也可以在航空公司网站上提交。", actionHint: "记住行李服务处位置", frequency: "common" },
              { textEn: "Head to the airline's service desk or report it online. They keep found items for about 30 days.", textZh: "去航空公司服务台或在网上报告。找到的物品保留大约30天。", actionHint: "尽快提交报告", frequency: "common" },
            ],
          },
        ],
      },
      {
        id: "lost-in-terminal",
        titleZh: "航站楼丢失物品",
        titleEn: "Lost Item in Terminal",
        description: "在候机区或安检处丢失物品",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I think I left my laptop bag at the security checkpoint. I'm really worried.",
            textZh: "你好，我好像把笔记本电脑包落在安检处了。我非常着急。",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "Don't worry, items left at security are collected quite quickly. When did you go through security? And which checkpoint?",
            textZh: "别担心，安检处遗留的物品会很快被收走。您是什么时候过的安检？哪个安检口？",
            keyPhrases: [
              { en: "security checkpoint", zh: "安检口" },
              { en: "collected", zh: "被收走" },
            ],
            alternativeExpressions: [
              { textEn: "That happens more often than you'd think. Security usually sets those aside right away. Do you remember which lane you went through?", textZh: "这种情况比你想的常见。安检通常会马上把这些东西放到一边。你记得走的哪条通道吗？", actionHint: "回忆安检通道", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "About 30 minutes ago, at Checkpoint B. It's a gray backpack with a laptop inside.",
            textZh: "大约30分钟前，在B安检口。是一个灰色背包，里面有一台笔记本电脑。",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "Let me call security for you... They do have a gray backpack. You'll need to go back to the security area and show your ID to claim it. Go back through the corridor on the right — they won't make you go through security again.",
            textZh: "我帮您打电话给安检……他们确实有一个灰色背包。您需要回到安检区出示证件领取。从右边走廊回去——不用再过安检。",
            keyPhrases: [
              { en: "show your ID", zh: "出示证件" },
              { en: "claim it", zh: "认领" },
              { en: "go back through", zh: "从…回去" },
            ],
            vocabNotes: {
              "claim": {
                meaningInContext: "在这句话里表示：认领、取回（自己的物品）",
                similarUsage: "类似用法：You can claim your baggage at Carousel 3.（您可以在3号转盘取行李）",
              },
            },
            alternativeExpressions: [
              { textEn: "Good news — security has your bag. Head back to Checkpoint B with your ID and they'll hand it over.", textZh: "好消息——安检那边有您的包。拿着证件回B安检口就能领回来。", actionHint: "带好证件去领取", frequency: "common" },
              { textEn: "They've got a gray backpack matching your description. Just go back through that hallway and show your passport.", textZh: "他们有一个跟您描述一致的灰色背包。从那边走廊回去出示护照就行。", actionHint: "走右边走廊", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh, what a relief! What if I had already left the airport? How would I get it back?",
            textZh: "太好了，松了一口气！如果我已经离开机场了怎么办？怎么拿回来？",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "You'd contact the airport's lost and found department. Here's the phone number and website. You can file a claim online with a description and your contact details. If they find a match, they can ship it to you for a fee.",
            textZh: "您可以联系机场的失物招领部门。这是电话号码和网站。可以在网上提交认领申请，填写物品描述和联系方式。如果匹配到了，他们可以付费寄给您。",
            keyPhrases: [
              { en: "lost and found", zh: "失物招领" },
              { en: "file a claim", zh: "提交认领申请" },
              { en: "ship it to you", zh: "寄给您" },
            ],
            alternativeExpressions: [
              { textEn: "You can also check the airport's lost property page online. They update it daily.", textZh: "您也可以查看机场网站上的失物招领页面。他们每天更新。", actionHint: "记下网站地址", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's very helpful. One more question — is there any way to track my belongings in the airport, like with AirTag?",
            textZh: "太有用了。再问一下——有没有办法在机场追踪我的物品，比如用AirTag？",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "Yes, if you have an AirTag or similar tracker on your bag, you can use it to locate it within the airport. That's actually a great travel tip — put a tracker in your important bags. It makes situations like this much easier.",
            textZh: "有的，如果您的包上有AirTag或类似追踪器，可以用它在机场内定位。这其实是个很好的旅行建议——在重要的包里放个追踪器。遇到这种情况就容易多了。",
            keyPhrases: [
              { en: "tracker", zh: "追踪器" },
              { en: "locate", zh: "定位" },
            ],
            alternativeExpressions: [
              { textEn: "If you have an AirTag in it, you can track it on your phone. Great travel hack, by the way.", textZh: "如果里面有AirTag，可以用手机追踪。顺便说，这是个很好的旅行技巧。", actionHint: "以后放追踪器", frequency: "common" },
              { textEn: "A tracker like AirTag would show you exactly where it is in the airport. Highly recommend putting one in your bags.", textZh: "AirTag之类的追踪器能精确显示它在机场的位置。强烈建议在包里放一个。", actionHint: "购买追踪器", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll definitely do that next time. Thanks for your help!",
            textZh: "下次一定会的。谢谢帮忙！",
          },
        ],
      },
    ],
  },

  // ==================== 机场药店/身体不适 ====================
  {
    id: "airport-20",
    category: "airport",
    titleZh: "身体不适与机场药店",
    titleEn: "Feeling Unwell & Airport Pharmacy",
    description: "在机场感到身体不适，寻找医疗帮助或购买药品",
    otherRole: "药店店员/医疗站工作人员",
    otherRoleIcon: "heart-pulse",
    flows: [
      {
        id: "buy-medicine",
        titleZh: "购买药品",
        titleEn: "Buying Medicine",
        description: "在机场药店购买常用药品",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have a terrible headache. Do you have any painkillers?",
            textZh: "你好，我头疼得厉害。有止痛药吗？",
            casualVersion: "Hey, got anything for a headache?",
          },
          {
            speaker: "them",
            role: "药店店员",
            textEn: "Yes, we have ibuprofen and acetaminophen. Do you have any allergies to medications?",
            textZh: "有的，我们有布洛芬和对乙酰氨基酚。您对药物有过敏吗？",
            keyPhrases: [
              { en: "ibuprofen", zh: "布洛芬" },
              { en: "acetaminophen", zh: "对乙酰氨基酚（扑热息痛）" },
              { en: "allergies to medications", zh: "药物过敏" },
            ],
            vocabNotes: {
              "acetaminophen": {
                meaningInContext: "在这句话里表示：一种常见止痛退烧药，美国叫acetaminophen（品牌名Tylenol），英国叫paracetamol",
                similarUsage: "类似用法：Take two acetaminophen every 6 hours.（每6小时吃两片对乙酰氨基酚）",
              },
            },
            localVariants: {
              "en-US": "We have Tylenol and Advil.",
              "en-GB": "We have paracetamol and ibuprofen.",
              "en-AU": "We've got Panadol and Nurofen.",
            },
            alternativeExpressions: [
              { textEn: "Sure, we carry Tylenol and Advil. Are you allergic to anything?", textZh: "有的，我们有泰诺和布洛芬。您有药物过敏吗？", actionHint: "告知过敏情况", frequency: "common" },
              { textEn: "We've got a few options for headaches. Any medication allergies I should know about?", textZh: "头痛药有几种选择。有药物过敏需要注意的吗？", actionHint: "确认无过敏", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "No allergies. Which one do you recommend?",
            textZh: "没有过敏。你推荐哪个？",
          },
          {
            speaker: "them",
            role: "药店店员",
            textEn: "For a regular headache, acetaminophen is gentler on the stomach. Take two tablets with water. If it's also body aches or inflammation, ibuprofen works better.",
            textZh: "普通头疼的话，对乙酰氨基酚对胃比较温和。配水吃两片。如果还有身体酸痛或发炎，布洛芬效果更好。",
            keyPhrases: [
              { en: "gentler on the stomach", zh: "对胃比较温和" },
              { en: "tablets", zh: "药片" },
              { en: "inflammation", zh: "发炎" },
            ],
            alternativeExpressions: [
              { textEn: "Tylenol is easier on your stomach. Advil is better if there's swelling or body pain.", textZh: "泰诺对胃更温和。如果有肿胀或全身疼痛的话，布洛芬更好。", actionHint: "根据症状选药", frequency: "common" },
              { textEn: "For just a headache, go with acetaminophen. Two pills with plenty of water.", textZh: "只是头疼的话，选对乙酰氨基酚。两片加大量水。", actionHint: "按说明服用", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the acetaminophen. I also need some motion sickness pills for the flight.",
            textZh: "我要对乙酰氨基酚。我还需要一些晕机药。",
          },
          {
            speaker: "them",
            role: "药店店员",
            textEn: "We have Dramamine — it works well for air sickness. Fair warning, it may make you drowsy. If you want a non-drowsy option, we have meclizine.",
            textZh: "我们有茶苯海明——对晕机很有效。提醒一下，可能会让你犯困。如果要不犯困的，我们有美克洛嗪。",
            keyPhrases: [
              { en: "motion sickness", zh: "晕车/晕机" },
              { en: "drowsy", zh: "犯困的" },
              { en: "non-drowsy", zh: "不犯困的" },
            ],
            vocabNotes: {
              "drowsy": {
                meaningInContext: "在这句话里表示：吃了药之后容易犯困、想睡觉的副作用",
                similarUsage: "类似用法：Don't drive after taking this medicine — it makes you drowsy.（吃了这个药不要开车——会犯困）",
              },
            },
            alternativeExpressions: [
              { textEn: "For motion sickness, Dramamine is the go-to, but heads up — it'll make you sleepy. Want the non-drowsy version instead?", textZh: "晕机的话，茶苯海明最常用，但提前说——会让你犯困。要不犯困的版本吗？", actionHint: "选择不犯困版本", frequency: "common" },
              { textEn: "We carry both regular and non-drowsy anti-nausea meds. The non-drowsy one won't knock you out.", textZh: "普通版和不犯困版的止吐药都有。不犯困版不会让你昏昏沉沉。", actionHint: "根据需要选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the non-drowsy one. How much for both?",
            textZh: "要不犯困的。两样一共多少钱？",
          },
          {
            speaker: "them",
            role: "药店店员",
            textEn: "The acetaminophen is $6.99 and the meclizine is $8.50. Total is $15.49. Take the motion sickness pill about 30 minutes before your flight for best results.",
            textZh: "对乙酰氨基酚6.99美元，美克洛嗪8.50美元。一共15.49美元。晕机药最好在起飞前30分钟吃，效果最好。",
            keyPhrases: [
              { en: "30 minutes before", zh: "提前30分钟" },
              { en: "best results", zh: "效果最好" },
            ],
            alternativeExpressions: [
              { textEn: "That comes to $15.49 total. Take the motion sickness pill half an hour before boarding.", textZh: "一共15.49美元。晕机药登机前半小时吃。", actionHint: "记住服药时间", frequency: "common" },
              { textEn: "Fifteen-forty-nine altogether. Pro tip — pop the anti-nausea pill 30 minutes before takeoff.", textZh: "一共15块49。小建议——起飞前30分钟吃止吐药。", actionHint: "提前吃药", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Thanks for the advice!",
            textZh: "知道了。谢谢建议！",
          },
        ],
      },
      {
        id: "medical-help",
        titleZh: "寻求医疗帮助",
        titleEn: "Getting Medical Assistance",
        description: "在机场突然不舒服需要医疗帮助",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I'm not feeling well. I feel dizzy and nauseous. Is there a medical clinic in the airport?",
            textZh: "打扰了，我不太舒服。头晕还想吐。机场有医务室吗？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "There's a first aid station on this level, near Gate 20. Would you like me to call for a wheelchair, or can you walk? Do you need me to call the paramedics?",
            textZh: "这层楼有急救站，在20号登机口附近。需要我叫轮椅还是您能走过去？需要我叫急救人员吗？",
            keyPhrases: [
              { en: "first aid station", zh: "急救站" },
              { en: "wheelchair", zh: "轮椅" },
              { en: "paramedics", zh: "急救人员" },
            ],
            alternativeExpressions: [
              { textEn: "Are you alright? Let me get you some water first. There's a medical room just down the hall.", textZh: "您还好吗？我先给您拿点水。走廊那边就有医务室。", actionHint: "先坐下休息", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I can walk, but slowly. I think it might be from not eating and the long flight.",
            textZh: "我能走，但慢一点。我觉得可能是没吃东西加上长途飞行的关系。",
          },
          {
            speaker: "them",
            role: "医务人员",
            textEn: "Hello, I'm the on-duty nurse. Can you tell me your symptoms? When did you last eat? Do you have any medical conditions I should know about?",
            textZh: "你好，我是值班护士。能告诉我您的症状吗？上次吃东西是什么时候？有什么病史需要我了解的吗？",
            keyPhrases: [
              { en: "on-duty nurse", zh: "值班护士" },
              { en: "symptoms", zh: "症状" },
              { en: "medical conditions", zh: "病史/基础疾病" },
            ],
            vocabNotes: {
              "medical conditions": {
                meaningInContext: "在这句话里表示：已有的疾病或健康问题，如高血压、糖尿病等",
                similarUsage: "类似用法：Do you have any pre-existing medical conditions?（您有什么既往病史吗？）",
              },
            },
            alternativeExpressions: [
              { textEn: "Hi there. Take a seat. What's going on? Any allergies or conditions I should be aware of?", textZh: "你好，请坐。怎么了？有过敏或病史需要我知道的吗？", actionHint: "如实告知", frequency: "common" },
              { textEn: "I'm the nurse on call. Tell me how you're feeling and when you last had food or water.", textZh: "我是值班护士。告诉我您现在的感觉，以及上次吃喝是什么时候。", actionHint: "描述症状", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I feel dizzy, a bit nauseous, and my ears are ringing. I haven't eaten in about 10 hours. No serious medical conditions, but I have low blood pressure.",
            textZh: "我头晕，有点恶心，耳鸣。大约10小时没吃东西了。没有严重的病史，但有低血压。",
          },
          {
            speaker: "them",
            role: "医务人员",
            textEn: "It sounds like it could be dehydration and low blood sugar from the long flight. Let me check your blood pressure and give you some water with electrolytes. Please lie down here.",
            textZh: "听起来可能是长途飞行导致的脱水和低血糖。我先量一下血压，给您喝点电解质水。请躺在这里。",
            keyPhrases: [
              { en: "dehydration", zh: "脱水" },
              { en: "low blood sugar", zh: "低血糖" },
              { en: "blood pressure", zh: "血压" },
              { en: "electrolytes", zh: "电解质" },
            ],
            alternativeExpressions: [
              { textEn: "You're probably dehydrated and your blood sugar is low. Let me take your vitals and get you something to drink.", textZh: "您可能脱水了，血糖也低。让我测一下生命体征，再给您拿点喝的。", actionHint: "配合检查", frequency: "common" },
              { textEn: "Long flights can do that — dehydration and not eating. Lie down, I'll check your BP and get you an electrolyte drink.", textZh: "长途飞行容易这样——脱水又没吃东西。躺下，我量个血压，给您拿电解质饮料。", actionHint: "躺下休息", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay. My connecting flight is in 3 hours. Will I be okay to fly?",
            textZh: "好的。我转机航班还有3小时。我能上飞机吗？",
          },
          {
            speaker: "them",
            role: "医务人员",
            textEn: "Let's see how you feel after resting and hydrating. Your blood pressure is a bit low but not dangerous. If you don't improve in an hour, I'd recommend seeing the airport doctor. They can give you a fit-to-fly certificate if needed.",
            textZh: "休息补水后看看感觉怎么样。您的血压有点低但不危险。如果一小时后没有好转，建议您去看机场医生。如果需要的话，他们可以开一个适飞证明。",
            keyPhrases: [
              { en: "hydrating", zh: "补水" },
              { en: "fit-to-fly certificate", zh: "适飞证明" },
            ],
            vocabNotes: {
              "fit-to-fly certificate": {
                meaningInContext: "在这句话里表示：医生出具的证明你身体状况允许乘坐飞机的文件",
                similarUsage: "类似用法：The airline may require a fit-to-fly letter from your doctor.（航空公司可能要求提供医生的适飞证明）",
              },
            },
            alternativeExpressions: [
              { textEn: "Rest here and drink some fluids. If you're not better in an hour, I'll refer you to the doctor on site.", textZh: "在这休息一下，多喝点水。如果一小时后没好转，我给您转诊机场医生。", actionHint: "先休息观察", frequency: "common" },
              { textEn: "Your BP is slightly low. Lie down, hydrate, and we'll reassess in an hour.", textZh: "您血压略低。先躺下补水，一小时后再看看情况。", actionHint: "配合休息", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. If I need to see the doctor, will there be a charge?",
            textZh: "谢谢。如果需要看医生，要收费吗？",
          },
          {
            speaker: "them",
            role: "医务人员",
            textEn: "The first aid station visit is free. If you see the doctor, there's a consultation fee of about $50 to $80. Most travel insurance covers this — do you have travel insurance? Keep your receipt for reimbursement.",
            textZh: "急救站就诊免费。看医生的话，问诊费大约50到80美元。大多数旅行保险可以报销——您有旅行保险吗？保留收据用于报销。",
            keyPhrases: [
              { en: "consultation fee", zh: "问诊费" },
              { en: "travel insurance", zh: "旅行保险" },
              { en: "reimbursement", zh: "报销" },
            ],
            culturalNote: "出国旅行一定要买旅行保险。机场医疗费用很贵，有保险可以报销。保留所有医疗相关收据。",
            alternativeExpressions: [
              { textEn: "This visit is on the house. A doctor's appointment runs about $50 to $80 — do you have insurance to cover it?", textZh: "这次就诊免费。看医生大约50到80美元——你有保险可以报销吗？", actionHint: "查看保险单", frequency: "common" },
              { textEn: "No charge for the first aid station. The doctor is extra but most travel policies cover it. Hang on to the receipt.", textZh: "急救站不收费。看医生要另外付费，但大多数旅行险可以报。收据留好。", actionHint: "保留收据", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 落地签 ====================
  {
    id: "airport-21",
    category: "airport",
    titleZh: "落地签",
    titleEn: "Visa on Arrival",
    description: "在目的地机场办理落地签证，包括填表和缴费",
    otherRole: "签证柜台官员",
    otherRoleIcon: "stamp",
    flows: [
      {
        id: "standard-voa",
        titleZh: "标准落地签办理",
        titleEn: "Standard Visa on Arrival",
        description: "正常办理落地签，填写表格和缴费",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hello, I'm a Chinese passport holder. I'd like to apply for a visa on arrival.",
            textZh: "你好，我持中国护照。我想办理落地签。",
          },
          {
            speaker: "them",
            role: "签证官",
            textEn: "Welcome. Please fill out this arrival card and visa application form. Do you have a passport photo and your return ticket?",
            textZh: "欢迎。请填写这张入境卡和签证申请表。您有护照照片和回程机票吗？",
            keyPhrases: [
              { en: "arrival card", zh: "入境卡" },
              { en: "visa application form", zh: "签证申请表" },
              { en: "passport photo", zh: "护照照片" },
              { en: "return ticket", zh: "回程机票" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, Chinese nationals are eligible for visa on arrival. I'll need your passport, a photo, proof of onward travel, and the $30 fee.", textZh: "可以，中国公民可以办落地签。我需要您的护照、一张照片、离境行程证明和30美元费用。", actionHint: "准备好所有材料", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have my passport and return ticket. But I forgot to bring a passport photo. Is there a photo booth nearby?",
            textZh: "我有护照和回程机票。但忘了带护照照片。附近有拍照的地方吗？",
          },
          {
            speaker: "them",
            role: "签证官",
            textEn: "There's a photo booth right over there, next to the immigration forms counter. It costs $5 for four photos. You only need one for the visa.",
            textZh: "那边有个快照亭，就在入境表格柜台旁边。5美元四张照片。签证只需要一张。",
            keyPhrases: [
              { en: "photo booth", zh: "快照亭" },
              { en: "immigration forms counter", zh: "入境表格柜台" },
            ],
            alternativeExpressions: [
              { textEn: "No worries, there's a photo machine right over there. $5 for four pictures — you just need one.", textZh: "没关系，那边有拍照机。5美元四张——只需要一张。", actionHint: "先去拍照", frequency: "common" },
              { textEn: "There's a booth next to the forms counter where you can get a passport photo in two minutes.", textZh: "表格柜台旁边有个快照亭，两分钟就能拍好护照照片。", actionHint: "去快照亭", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks, I'll go take a photo first. What's the visa fee, and how can I pay?",
            textZh: "谢谢，我先去拍照。签证费多少，怎么付？",
          },
          {
            speaker: "them",
            role: "签证官",
            textEn: "The visa fee is $30 for a 30-day single entry. We accept US dollars, euros, or local currency. Credit cards are also accepted but there's a $2 processing fee.",
            textZh: "签证费30美元，30天单次入境。我们接受美元、欧元或当地货币。也接受信用卡但有2美元手续费。",
            keyPhrases: [
              { en: "single entry", zh: "单次入境" },
              { en: "processing fee", zh: "手续费" },
            ],
            vocabNotes: {
              "single entry": {
                meaningInContext: "在这句话里表示：签证只允许入境一次，出境后不能再用同一签证重新入境",
                similarUsage: "类似用法：A multiple entry visa lets you enter the country several times.（多次入境签证允许你多次进入该国）",
              },
            },
            alternativeExpressions: [
              { textEn: "It's $30 for a 30-day visa, single entry. You can pay in dollars, euros, or the local currency. Card works too, but there's a small surcharge.", textZh: "30天单次入境签证30美元。美元、欧元或当地货币都可以。刷卡也行，但有小额附加费。", actionHint: "准备现金更划算", frequency: "common" },
              { textEn: "Thirty dollars gets you 30 days. Cash is preferred — cards have a two-dollar extra fee.", textZh: "30美元30天。最好付现金——刷卡多收2美元。", actionHint: "用现金支付", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll pay in US dollars. Here's my form, photo, passport, and $30.",
            textZh: "我用美元付。这是我的表格、照片、护照和30美元。",
          },
          {
            speaker: "them",
            role: "签证官",
            textEn: "Thank you. Let me process this... Where are you staying during your visit?",
            textZh: "谢谢。让我处理一下……您在这里住哪里？",
            keyPhrases: [
              { en: "process this", zh: "处理" },
              { en: "where are you staying", zh: "住在哪里" },
            ],
            alternativeExpressions: [
              { textEn: "One moment while I enter your information... Where will you be staying?", textZh: "稍等，我录入您的信息……您住在哪里？", actionHint: "告知住宿地址", frequency: "common" },
              { textEn: "Let me run this through the system... What's your accommodation address here?", textZh: "让我在系统里处理一下……您在这边的住宿地址是什么？", actionHint: "提供酒店信息", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm staying at the Grand Palace Hotel for 7 nights. I have the hotel confirmation here.",
            textZh: "我住在Grand Palace酒店，住7晚。酒店确认单在这里。",
          },
          {
            speaker: "them",
            role: "签证官",
            textEn: "Everything looks good. Here's your passport with the visa sticker. Your visa is valid for 30 days from today. Please don't overstay — there are fines for overstaying. Enjoy your trip!",
            textZh: "一切没问题。这是您的护照，已经贴好签证贴纸了。签证从今天起30天有效。请不要逾期停留——逾期会有罚款。祝旅途愉快！",
            keyPhrases: [
              { en: "visa sticker", zh: "签证贴纸" },
              { en: "valid for 30 days", zh: "30天有效" },
              { en: "overstay", zh: "逾期停留" },
              { en: "fines", zh: "罚款" },
            ],
            culturalNote: "签证逾期停留（overstay）是严重违规行为，会导致罚款甚至影响以后的签证申请。一定要在签证有效期内离境。",
            alternativeExpressions: [
              { textEn: "Here you go — your visa is stamped. You have 30 days starting today. Make sure you leave before it expires.", textZh: "给您——签证盖好了。从今天起30天。确保到期前离境。", actionHint: "记住到期日", frequency: "common" },
              { textEn: "All done. Your 30-day visa starts now. Just a reminder — overstaying can result in fines or a ban. Enjoy your visit!", textZh: "办好了。30天签证从现在开始。提醒一下——逾期停留会被罚款或禁止入境。祝旅途愉快！", actionHint: "设置提醒", frequency: "common" },
            ],
          },
        ],
      },
      {
        id: "voa-problems",
        titleZh: "落地签遇到问题",
        titleEn: "Visa on Arrival Issues",
        description: "办理落地签时遇到材料不全或被拒等问题",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn: "Hello, I'd like to get a visa on arrival. Here are my documents.",
            textZh: "你好，我想办理落地签。这是我的材料。",
          },
          {
            speaker: "them",
            role: "签证官",
            textEn: "I see you have your passport and the form, but I don't see proof of a return or onward ticket. We require evidence that you plan to leave within the visa period.",
            textZh: "我看到您有护照和表格，但没有回程或后续行程的机票证明。我们需要您提供在签证有效期内离境的证据。",
            keyPhrases: [
              { en: "proof of a return or onward ticket", zh: "回程或后续行程机票证明" },
              { en: "evidence", zh: "证据/证明" },
              { en: "visa period", zh: "签证有效期" },
            ],
            alternativeExpressions: [
              { textEn: "I notice you don't have a return or onward flight booked. We need to see proof you'll leave within the visa period.", textZh: "我注意到您没有订回程或后续行程的机票。我们需要看到您在签证期内离境的证明。", actionHint: "准备离境证明", frequency: "common" },
              { textEn: "Do you have a return ticket or any proof of onward travel? It's required for the visa.", textZh: "有回程票或后续行程的证明吗？办签证需要这个。", actionHint: "出示行程证明", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I haven't booked my return flight yet because my plans are flexible. Is there any other way?",
            textZh: "我还没订回程机票，因为行程比较灵活。有其他办法吗？",
          },
          {
            speaker: "them",
            role: "签证官",
            textEn: "You could book a refundable ticket right now on your phone and show me the confirmation. Or you could show a bus or train ticket to a neighboring country. We just need proof you intend to leave.",
            textZh: "您可以现在用手机订一张可退票的机票，给我看确认信息。或者出示去邻国的巴士或火车票也行。我们只需要您打算离境的证明。",
            keyPhrases: [
              { en: "refundable ticket", zh: "可退票的机票" },
              { en: "confirmation", zh: "确认信息" },
              { en: "intend to leave", zh: "打算离境" },
            ],
            vocabNotes: {
              "refundable": {
                meaningInContext: "在这句话里表示：可以退款的机票，即使之后不坐也能拿回钱",
                similarUsage: "类似用法：Is this ticket refundable or non-refundable?（这张票可以退吗？）",
              },
            },
            alternativeExpressions: [
              { textEn: "You can book a flight on your phone right now — even a refundable one works. Show me the confirmation and we're good.", textZh: "您现在就可以在手机上订一张机票——可退票的也行。给我看确认信息就可以了。", actionHint: "现场订票", frequency: "common" },
              { textEn: "Any outbound ticket will do — plane, bus, or train. Just something showing you plan to leave.", textZh: "任何离境票都行——飞机、巴士或火车。只要能证明您有离开的计划。", actionHint: "准备任意离境凭证", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good idea. Let me book one on my phone... Okay, here's a confirmation for a flight out in 25 days.",
            textZh: "好主意。我用手机订一张……好了，这是25天后的一个离境航班确认。",
          },
          {
            speaker: "them",
            role: "签证官",
            textEn: "That works. One more thing — I also need proof of sufficient funds. Can you show a bank statement or credit card with enough limit for your stay?",
            textZh: "可以了。还有一件事——我还需要资金证明。能出示银行流水或额度足够的信用卡吗？",
            keyPhrases: [
              { en: "sufficient funds", zh: "充足的资金" },
              { en: "bank statement", zh: "银行流水" },
              { en: "credit card limit", zh: "信用卡额度" },
            ],
            alternativeExpressions: [
              { textEn: "I also need to verify you have enough money for your stay. A bank statement or credit card will do.", textZh: "我还需要确认您有足够的旅行资金。银行流水或信用卡都可以。", actionHint: "出示资金证明", frequency: "common" },
              { textEn: "One more requirement — proof of funds. Can you show me a recent bank balance or a credit card?", textZh: "还有一个要求——资金证明。能给我看一下最近的银行余额或信用卡吗？", actionHint: "打开银行APP", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's my bank app showing my balance. Is a screenshot okay?",
            textZh: "这是我银行APP显示的余额。截图可以吗？",
          },
          {
            speaker: "them",
            role: "签证官",
            textEn: "A screenshot on your phone is fine. Let me see... That's acceptable. Let me process your visa now. It will take about 10 minutes.",
            textZh: "手机截图可以。让我看看……可以的。现在帮您办签证。大约需要10分钟。",
            keyPhrases: [
              { en: "acceptable", zh: "可以接受的" },
              { en: "process your visa", zh: "办理签证" },
            ],
            alternativeExpressions: [
              { textEn: "The screenshot works fine. That's sufficient. Give me about 10 minutes to process everything.", textZh: "截图可以。够了。给我大约10分钟处理一下。", actionHint: "耐心等待", frequency: "common" },
              { textEn: "That'll do. Let me get your visa sorted — shouldn't take more than 10 minutes.", textZh: "可以了。让我帮您办签证——不超过10分钟。", actionHint: "等候办理", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you for being patient with me. I'll be better prepared next time.",
            textZh: "谢谢您的耐心。下次我会准备得更充分。",
          },
          {
            speaker: "them",
            role: "签证官",
            textEn: "No problem at all. For future reference, the requirements are listed on our immigration website. It's always good to have everything ready before you arrive. Here's your visa — welcome!",
            textZh: "没关系。以后可以参考我们移民局网站上列出的要求。到达前把一切准备好总是好的。这是您的签证——欢迎！",
            keyPhrases: [
              { en: "for future reference", zh: "以后可以参考" },
              { en: "requirements", zh: "要求" },
              { en: "immigration website", zh: "移民局网站" },
            ],
            literalMeaning: "'For future reference' 字面意思是'供将来参考'，实际是委婉提醒你下次提前了解相关信息。",
            alternativeExpressions: [
              { textEn: "All good! Next time, check our website beforehand — all the requirements are listed there. Here's your visa, welcome!", textZh: "都办好了！下次提前看看我们网站——所有要求都列在上面。这是您的签证，欢迎！", actionHint: "收好签证", frequency: "common" },
              { textEn: "No problem at all. Tip for next time — everything you need is on our immigration website. Enjoy your stay!", textZh: "没关系。下次的小建议——所有需要的信息都在我们移民局网站上。祝旅途愉快！", actionHint: "记住网站地址", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 机场酒店接驳 ====================
  {
    id: "airport-22",
    category: "airport",
    titleZh: "机场酒店接驳",
    titleEn: "Airport Hotel Shuttle",
    description: "乘坐机场酒店接驳车或找到酒店接驳服务",
    otherRole: "酒店前台/接驳车司机",
    otherRoleIcon: "bus",
    flows: [
      {
        id: "find-shuttle",
        titleZh: "寻找接驳车",
        titleEn: "Finding the Hotel Shuttle",
        description: "在机场找到预订酒店的免费接驳车",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm looking for the shuttle bus to the Airport Marriott. Where can I find it?",
            textZh: "你好，我在找去机场万豪酒店的接驳车。在哪里坐？",
            casualVersion: "Hey, where's the Marriott shuttle?",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Hotel shuttles pick up outside Door 4 on the arrivals level. Look for the blue and red hotel shuttle signs. The Marriott shuttle runs every 15 minutes.",
            textZh: "酒店接驳车在到达层4号门外面上车。找蓝红色的酒店接驳车标识。万豪接驳车每15分钟一班。",
            keyPhrases: [
              { en: "hotel shuttles", zh: "酒店接驳车" },
              { en: "arrivals level", zh: "到达层" },
              { en: "runs every 15 minutes", zh: "每15分钟一班" },
            ],
            alternativeExpressions: [
              { textEn: "Head to the ground transportation area, outer curb. Hotel shuttles are in Zone C.", textZh: "去地面交通区域，外侧路边。酒店接驳车在C区。", actionHint: "找C区", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I've been waiting for 20 minutes but the shuttle hasn't come. Should I call the hotel?",
            textZh: "我已经等了20分钟了但车还没来。要不要打电话给酒店？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Yes, that's a good idea. The hotel's phone number should be on your booking confirmation. You can also use the courtesy phone on the wall over there — just press the Marriott button and it'll connect you directly.",
            textZh: "对，好主意。酒店电话号码应该在您的预订确认上。您也可以用那边墙上的免费电话——按万豪的按钮就能直接接通。",
            keyPhrases: [
              { en: "courtesy phone", zh: "免费电话" },
              { en: "booking confirmation", zh: "预订确认" },
              { en: "connect you directly", zh: "直接接通" },
            ],
            vocabNotes: {
              "courtesy phone": {
                meaningInContext: "在这句话里表示：机场提供的免费电话，可以直接拨打合作酒店，不需要投币",
                similarUsage: "类似用法：Use the courtesy phone to call for your ride.（用免费电话叫车）",
              },
            },
            alternativeExpressions: [
              { textEn: "Try calling the hotel — there's a free courtesy phone on the wall. Just hit the Marriott button.", textZh: "试试打电话给酒店——墙上有免费电话。按万豪的按钮就行。", actionHint: "用免费电话", frequency: "common" },
              { textEn: "You can ring the hotel directly from the house phone over there. It's free and connects automatically.", textZh: "可以用那边的内线电话直接打给酒店。免费的，自动接通。", actionHint: "去打电话", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Hello, this is a guest checking in tonight. I'm at the airport but the shuttle hasn't arrived. Can you send one?",
            textZh: "你好，我是今晚入住的客人。我在机场但接驳车还没到。能派一辆吗？",
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "I'm sorry about that! The shuttle had a slight delay. It should be there in about 8 minutes. The driver's name is Mike, and the van is white with our logo. Are you at Door 4?",
            textZh: "非常抱歉！接驳车有点延迟。大约8分钟后到。司机叫Mike，白色面包车有我们的标志。您在4号门吗？",
            keyPhrases: [
              { en: "slight delay", zh: "有点延迟" },
              { en: "van", zh: "面包车" },
            ],
            alternativeExpressions: [
              { textEn: "So sorry about the wait! The shuttle is running a few minutes late. It'll be there in about 8 minutes. Look for a white van with our logo.", textZh: "非常抱歉让您久等！接驳车晚了几分钟。大约8分钟到。找白色有我们标志的面包车。", actionHint: "留意白色面包车", frequency: "common" },
              { textEn: "My apologies — the shuttle got held up in traffic. Mike is on his way, should be about 8 minutes. Are you at Door 4?", textZh: "抱歉——接驳车堵车了。司机Mike正在赶来，大约8分钟。您在4号门吗？", actionHint: "确认等候位置", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I'm at Door 4. I have two large suitcases — is there enough room?",
            textZh: "对，我在4号门。我有两个大箱子——车上放得下吗？",
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Absolutely, the shuttle can handle luggage for up to 12 guests. Mike will help you load your bags. Is there anything else I can help you with?",
            textZh: "没问题，接驳车能装12位客人的行李。Mike会帮您搬行李。还有其他需要帮忙的吗？",
            alternativeExpressions: [
              { textEn: "Plenty of room for your bags. The driver will help you load everything. Anything else I can do for you?", textZh: "行李空间很充足。司机会帮您装。还有什么需要帮忙的吗？", actionHint: "等车来", frequency: "common" },
              { textEn: "No problem at all, the van has lots of space. Mike will take care of your luggage when he arrives.", textZh: "完全没问题，面包车空间很大。Mike到了会帮您处理行李的。", actionHint: "等司机到", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I check in early? My flight just landed but check-in time isn't until 3 PM.",
            textZh: "能提前办理入住吗？我刚落地但入住时间要到下午3点。",
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Let me check... Great news, your room is actually ready now! We can check you in as soon as you arrive. We also have a luggage storage room if you ever need to leave bags before or after checkout.",
            textZh: "我查一下……好消息，您的房间已经准备好了！到了就可以办入住。如果需要的话，我们也有行李寄存室，退房前后都可以寄存行李。",
            keyPhrases: [
              { en: "check in early", zh: "提前入住" },
              { en: "luggage storage room", zh: "行李寄存室" },
            ],
            alternativeExpressions: [
              { textEn: "Good news — your room is ready! You can check in as soon as you get here. We also offer luggage storage if you need it.", textZh: "好消息——房间已经好了！到了就可以办入住。如果需要的话我们也提供行李寄存。", actionHint: "到了直接入住", frequency: "common" },
              { textEn: "Lucky you, the room is available now! Come on in and we'll get you settled right away.", textZh: "您运气好，房间现在就可以用！过来我们马上给您办入住。", actionHint: "直接入住", frequency: "common" },
            ],
          },
        ],
      },
      {
        id: "airport-hotel-overnight",
        titleZh: "中转住宿",
        titleEn: "Transit Hotel Stay",
        description: "长时间转机需要在机场酒店过夜",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have a 14-hour layover. Are there any hotels inside the airport or nearby?",
            textZh: "你好，我有14小时的转机等待。机场里面或附近有酒店吗？",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "There's a transit hotel inside the terminal — you don't need to clear immigration. It's on the mezzanine level between Gates 30 and 35. There are also sleep pods near Gate 25 if you just want a nap.",
            textZh: "航站楼里面有一个中转酒店——不用过入境检查。在30到35号登机口之间的夹层。25号登机口附近也有休息舱，如果您只想小睡一下的话。",
            keyPhrases: [
              { en: "transit hotel", zh: "中转酒店" },
              { en: "clear immigration", zh: "过入境检查" },
              { en: "mezzanine level", zh: "夹层" },
              { en: "sleep pods", zh: "休息舱" },
            ],
            vocabNotes: {
              "clear immigration": {
                meaningInContext: "在这句话里表示：通过入境检查离开机场管控区域（中转酒店在管控区内，不需要出关）",
                similarUsage: "类似用法：You'll need to clear immigration and customs before leaving the airport.（离开机场前需要通过入境和海关检查）",
              },
              "sleep pods": {
                meaningInContext: "在这句话里表示：机场提供的小型休息舱/胶囊舱，按小时计费",
                similarUsage: "类似用法：The sleep pods are great for short naps between flights.（休息舱很适合两班飞机之间小睡一下）",
              },
            },
            alternativeExpressions: [
              { textEn: "There's a hotel right here in the terminal — no need to go through immigration. Or if you just want a quick nap, there are sleep pods near Gate 25.", textZh: "航站楼里就有酒店——不用出关。或者如果只想小睡一下，25号登机口附近有休息舱。", actionHint: "选择休息方式", frequency: "common" },
              { textEn: "You can stay at the transit hotel on the mezzanine floor — it's airside, so no passport control needed.", textZh: "可以住夹层的中转酒店——在隔离区内，不用过护照检查。", actionHint: "去夹层找酒店", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much are the sleep pods? And the transit hotel?",
            textZh: "休息舱多少钱？中转酒店呢？",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "The sleep pods are $15 per hour, minimum 2 hours. The transit hotel has rooms starting at $80 for 6 hours, or $120 for an overnight stay. Both include WiFi. The hotel also has showers, which is nice after a long flight.",
            textZh: "休息舱每小时15美元，最少2小时。中转酒店的房间6小时起价80美元，过夜120美元。都包含WiFi。酒店还有淋浴，长途飞行后很舒服。",
            keyPhrases: [
              { en: "per hour", zh: "每小时" },
              { en: "minimum", zh: "最少" },
              { en: "overnight stay", zh: "过夜" },
              { en: "showers", zh: "淋浴" },
            ],
            alternativeExpressions: [
              { textEn: "Sleep pods are $15 an hour, minimum two hours. The transit hotel starts at $80 for 6 hours. Both have WiFi and the hotel has showers.", textZh: "休息舱每小时15美元，最少两小时。中转酒店6小时起80美元。都有WiFi，酒店还有淋浴。", actionHint: "比较两个选项", frequency: "common" },
              { textEn: "The pods are cheaper for a quick rest. If you want a proper bed and a shower, the transit hotel is $80 for 6 hours.", textZh: "休息舱短暂休息更便宜。想要正经床和淋浴的话，中转酒店6小时80美元。", actionHint: "根据需求选择", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the transit hotel for 6 hours. Can I book it right now?",
            textZh: "那我住中转酒店，6小时。现在就能订吗？",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "You can book directly at the hotel counter upstairs. Take the elevator behind me to the mezzanine level. They usually have availability, but it gets busy during peak hours. I'd suggest going now.",
            textZh: "可以直接到楼上酒店前台订。乘我后面的电梯到夹层。通常都有空房，但高峰时段会比较满。建议您现在就去。",
            keyPhrases: [
              { en: "book directly", zh: "直接预订" },
              { en: "availability", zh: "空房" },
              { en: "peak hours", zh: "高峰时段" },
            ],
            alternativeExpressions: [
              { textEn: "Just go straight to the hotel front desk upstairs. They usually have rooms, but it gets busy late at night.", textZh: "直接去楼上酒店前台就行。通常都有房间，但深夜会比较忙。", actionHint: "尽快去订", frequency: "common" },
              { textEn: "Head up to the mezzanine and book at the counter. I'd go now before it fills up.", textZh: "上夹层去前台订。建议现在就去，免得满了。", actionHint: "抓紧时间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. Will they wake me up in time for my connecting flight?",
            textZh: "好的。他们会叫醒我赶上转机航班吗？",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "Yes, they offer a wake-up call service. Just tell them your flight time at check-in. They'll call your room 2 hours before departure. Also, make sure to set your own alarm as a backup!",
            textZh: "会的，他们有叫醒服务。入住时告诉他们您的航班时间就行。他们会在起飞前2小时打电话到房间。另外，自己也设个闹钟作为备用！",
            keyPhrases: [
              { en: "wake-up call", zh: "叫醒服务" },
              { en: "set your own alarm", zh: "自己设闹钟" },
              { en: "backup", zh: "备用" },
            ],
            alternativeExpressions: [
              { textEn: "They do wake-up calls. Just tell them your flight time when you check in. And set your phone alarm too, just in case!", textZh: "他们有叫醒服务。入住时告诉他们航班时间就行。手机闹钟也设一个，以防万一！", actionHint: "双重保险", frequency: "common" },
              { textEn: "Absolutely — they'll ring your room before your flight. But I always recommend setting a personal alarm as backup.", textZh: "当然——他们会在航班前打电话到房间。但我总是建议自己再设个闹钟备用。", actionHint: "自己也设闹钟", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good advice. Thanks so much for your help!",
            textZh: "好建议。非常感谢！",
          },
        ],
      },
    ],
  },

  // ==================== 投诉/服务问题 ====================
  {
    id: "airport-23",
    category: "airport",
    titleZh: "航空公司投诉",
    titleEn: "Airline Complaints",
    description: "对航班服务、座位安排或其他问题进行投诉",
    otherRole: "航空公司客服/值班经理",
    otherRoleIcon: "message-circle",
    flows: [
      {
        id: "seat-issue",
        titleZh: "座位问题",
        titleEn: "Seat Assignment Issue",
        description: "预选的座位被更改，需要投诉解决",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I specifically booked a window seat but my boarding pass shows a middle seat. I even paid extra for the seat selection.",
            textZh: "打扰了，我明明订的靠窗座位，但登机牌上显示的是中间座位。我还额外付了选座费。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "I'm sorry about that. Let me look into your booking. Can I see your boarding pass and the receipt for the seat selection?",
            textZh: "非常抱歉。让我查一下您的预订。能看一下您的登机牌和选座费收据吗？",
            keyPhrases: [
              { en: "look into", zh: "查一下" },
              { en: "seat selection", zh: "选座" },
              { en: "receipt", zh: "收据" },
            ],
            alternativeExpressions: [
              { textEn: "That shouldn't have happened. Can I pull up your reservation? What's your booking reference?", textZh: "这不应该发生。我可以调出您的预订吗？订单号是多少？", actionHint: "准备好订单号", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's my confirmation email showing seat 22A — a window seat. And here's the $35 charge on my credit card statement.",
            textZh: "这是我的确认邮件，显示22A——靠窗座位。这是信用卡账单上35美元的扣款。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "I see. It looks like there was an aircraft change this morning, and the seat map was reconfigured. That's why your original seat assignment was lost. I apologize for the inconvenience.",
            textZh: "我看到了。看起来今天早上换了飞机型号，座位图被重新配置了。所以您原来的座位分配丢失了。对此给您带来的不便深表歉意。",
            keyPhrases: [
              { en: "aircraft change", zh: "换了飞机型号" },
              { en: "reconfigured", zh: "重新配置" },
              { en: "seat assignment", zh: "座位分配" },
            ],
            vocabNotes: {
              "aircraft change": {
                meaningInContext: "在这句话里表示：航空公司因维护或调度原因更换了执飞飞机，可能导致座位重新安排",
                similarUsage: "类似用法：Due to an aircraft change, all seat assignments have been updated.（由于换机型，所有座位分配已更新）",
              },
            },
            alternativeExpressions: [
              { textEn: "It looks like the plane was swapped this morning, so all the seats got reshuffled. I'm sorry about that.", textZh: "看起来今早换了飞机，所有座位都被重新分配了。非常抱歉。", actionHint: "要求重新安排座位", frequency: "common" },
              { textEn: "There was an equipment change and your original seat doesn't exist on this aircraft. My apologies.", textZh: "因为更换机型，您原来的座位在这架飞机上不存在了。非常抱歉。", actionHint: "要求解决方案", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I understand things happen, but I'd like to get a window seat. And I expect a refund for the seat selection fee since it wasn't honored.",
            textZh: "我理解会有意外，但我想要一个靠窗座位。而且既然选座没有兑现，我希望退还选座费。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Absolutely, that's fair. Let me check available window seats... I can move you to 18A. It's actually a better seat — more legroom near the emergency exit. And I'll process a full refund of the $35 seat fee right now.",
            textZh: "完全合理。让我查一下可用的靠窗座位……我可以给您安排18A。其实是更好的位置——靠近紧急出口，腿部空间更大。我现在就处理35美元选座费的全额退款。",
            keyPhrases: [
              { en: "legroom", zh: "腿部空间" },
              { en: "emergency exit", zh: "紧急出口" },
              { en: "full refund", zh: "全额退款" },
            ],
            alternativeExpressions: [
              { textEn: "I've got a window seat for you — 18A, exit row with extra legroom. And I'll waive the seat fee entirely.", textZh: "给您找了一个靠窗位——18A，紧急出口排，腿部空间更大。选座费全免。", actionHint: "接受新座位", frequency: "common" },
              { textEn: "Good news — 18A is open. It's actually an upgrade. I'll refund the $35 right away.", textZh: "好消息——18A有空。其实算是升级了。35美元马上退给您。", actionHint: "确认退款", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds great. How long will the refund take?",
            textZh: "听起来很好。退款要多久？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "The refund will appear on your credit card within 5 to 7 business days. Here's your updated boarding pass with seat 18A. Is there anything else I can help with?",
            textZh: "退款会在5到7个工作日内到您的信用卡。这是更新后的登机牌，座位18A。还有其他需要帮忙的吗？",
            keyPhrases: [
              { en: "business days", zh: "工作日" },
              { en: "updated boarding pass", zh: "更新后的登机牌" },
            ],
            alternativeExpressions: [
              { textEn: "You should see the refund within a week. Here's your new boarding pass — 18A, window seat.", textZh: "一周内应该能看到退款。这是您新的登机牌——18A，靠窗。", actionHint: "确认新登机牌", frequency: "common" },
              { textEn: "The money will be back on your card in about 5 business days. All sorted — anything else?", textZh: "钱大约5个工作日退回到卡上。都搞定了——还有其他事吗？", actionHint: "问题已解决", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "No, that's everything. Thank you for resolving this so quickly.",
            textZh: "没有了，就这些。谢谢这么快解决。",
          },
        ],
      },
      {
        id: "service-complaint",
        titleZh: "服务投诉",
        titleEn: "Filing a Formal Complaint",
        description: "对航空公司服务不满进行正式投诉",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn: "I'd like to file a formal complaint. My flight was delayed by 6 hours and we were given almost no information during the wait.",
            textZh: "我要进行正式投诉。我的航班延误了6小时，等待期间几乎没有任何信息通知。",
          },
          {
            speaker: "them",
            role: "值班经理",
            textEn: "I'm very sorry about your experience. I understand how frustrating that must be. Could you give me your flight details so I can look into what happened?",
            textZh: "非常抱歉您的遭遇。我理解这一定很让人沮丧。能给我您的航班信息让我了解一下情况吗？",
            keyPhrases: [
              { en: "file a formal complaint", zh: "进行正式投诉" },
              { en: "frustrating", zh: "令人沮丧的" },
              { en: "look into", zh: "了解/调查" },
            ],
            alternativeExpressions: [
              { textEn: "I'm really sorry to hear that. Let me pull up your flight info and see what went wrong.", textZh: "非常抱歉听到这件事。让我调出您的航班信息看看出了什么问题。", actionHint: "提供航班信息", frequency: "common" },
              { textEn: "That sounds terrible. Can you walk me through what happened? I want to make sure we address this properly.", textZh: "听起来太糟糕了。能跟我说说经过吗？我想确保妥善处理这件事。", actionHint: "描述事情经过", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Flight BA 295, yesterday from London. The delay was due to a mechanical issue. No meal vouchers were offered, and the staff couldn't tell us when the flight would depart.",
            textZh: "BA 295航班，昨天从伦敦起飞的。延误是因为机械故障。没有提供餐券，工作人员也说不清什么时候起飞。",
          },
          {
            speaker: "them",
            role: "值班经理",
            textEn: "I see. Under our policy, for delays over 4 hours due to mechanical issues, passengers are entitled to meal vouchers and, if overnight, hotel accommodation. It sounds like that wasn't properly communicated. I sincerely apologize.",
            textZh: "我了解了。根据我们的政策，因机械故障延误超过4小时，旅客有权获得餐券，如果过夜的话还有酒店住宿。看来当时没有正确告知。我真诚地道歉。",
            keyPhrases: [
              { en: "entitled to", zh: "有权获得" },
              { en: "meal vouchers", zh: "餐券" },
              { en: "hotel accommodation", zh: "酒店住宿" },
              { en: "communicated", zh: "告知/通知" },
            ],
            vocabNotes: {
              "entitled to": {
                meaningInContext: "在这句话里表示：根据规定/政策应该享有的权利",
                similarUsage: "类似用法：You're entitled to a full refund under consumer protection law.（根据消费者保护法你有权获得全额退款）",
              },
            },
            alternativeExpressions: [
              { textEn: "For a mechanical delay over 4 hours, you should've received meal vouchers and possibly a hotel. That clearly didn't happen and I'm sorry.", textZh: "因机械故障延误超过4小时，您本应收到餐券，可能还有酒店住宿。显然没有做到，非常抱歉。", actionHint: "了解应有权益", frequency: "common" },
              { textEn: "Our policy is clear — meal vouchers and accommodation for delays this long. You were let down and I apologize.", textZh: "我们的政策很明确——这么长的延误应提供餐券和住宿。我们辜负了您，非常抱歉。", actionHint: "要求补偿", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I ended up spending $60 on food at the airport. What kind of compensation can I get?",
            textZh: "我最后在机场花了60美元吃饭。我能得到什么补偿？",
          },
          {
            speaker: "them",
            role: "值班经理",
            textEn: "I can reimburse you for the $60 in food expenses right now if you have the receipts. Additionally, I'd like to offer you a $200 travel voucher for a future flight as a goodwill gesture. We can also credit 5,000 bonus miles to your loyalty account.",
            textZh: "如果您有收据，我现在就可以报销60美元的餐费。另外，作为善意补偿，我想提供一张200美元的旅行代金券用于下次乘机。我们还可以往您的常旅客账户里加5000额外里程。",
            keyPhrases: [
              { en: "reimburse", zh: "报销" },
              { en: "travel voucher", zh: "旅行代金券" },
              { en: "goodwill gesture", zh: "善意补偿" },
              { en: "bonus miles", zh: "额外里程" },
              { en: "loyalty account", zh: "常旅客账户" },
            ],
            culturalMeaning: "'Goodwill gesture' 表面是'善意表示'，实际上是航空公司在不完全承认责任的情况下给予的补偿。接受后通常意味着放弃进一步追究。",
            alternativeExpressions: [
              { textEn: "Show me the receipts and I'll process the reimbursement today. On top of that, I can offer a $200 flight credit.", textZh: "给我看收据，今天就处理报销。另外还可以给您200美元的航班抵扣。", actionHint: "出示收据", frequency: "common" },
              { textEn: "We'll cover your out-of-pocket expenses and throw in some bonus miles as well.", textZh: "我们会报销您的自费开支，再额外赠送一些里程。", actionHint: "了解补偿方案", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I appreciate the offer. I do have the food receipts. Can I also get a written confirmation of the complaint for my records?",
            textZh: "感谢提议。我有餐费收据。能给我一份投诉的书面确认吗？留个记录。",
          },
          {
            speaker: "them",
            role: "值班经理",
            textEn: "Of course. I'll email you a formal acknowledgment with a case reference number. You can use it to follow up online or by phone. The reimbursement will go to the credit card on file, and the travel voucher code will be in the email as well.",
            textZh: "当然。我会发一封正式确认邮件给您，附有案例编号。您可以用它在线或打电话跟进。报销会退到档案中的信用卡上，旅行代金券代码也会在邮件里。",
            keyPhrases: [
              { en: "formal acknowledgment", zh: "正式确认" },
              { en: "case reference number", zh: "案例编号" },
              { en: "follow up", zh: "跟进" },
              { en: "on file", zh: "档案中的" },
            ],
            alternativeExpressions: [
              { textEn: "I'll send you an email confirmation with a reference number. You can follow up anytime using that number.", textZh: "我会发一封确认邮件给您，附带编号。随时可以用这个编号跟进。", actionHint: "保存确认邮件", frequency: "common" },
              { textEn: "You'll get everything in writing — the case number, the refund details, and the voucher code.", textZh: "所有内容都会给您书面确认——案例号、退款详情和代金券代码。", actionHint: "检查邮件", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you for handling this professionally. I hope the communication improves for other passengers in the future.",
            textZh: "谢谢您专业的处理。希望以后其他乘客的信息通知能改善。",
          },
          {
            speaker: "them",
            role: "值班经理",
            textEn: "Your feedback is valuable and I'll make sure it's passed on to the operations team. Thank you for your patience, and again, I'm sorry for the experience. Have a safe journey.",
            textZh: "您的反馈非常宝贵，我会确保转达给运营团队。感谢您的耐心，再次为这次的经历道歉。祝旅途平安。",
            keyPhrases: [
              { en: "feedback is valuable", zh: "反馈很宝贵" },
              { en: "passed on to", zh: "转达给" },
              { en: "operations team", zh: "运营团队" },
            ],
            alternativeExpressions: [
              { textEn: "I appreciate you telling us. I'll make sure the right people hear about this. Safe travels.", textZh: "感谢您告诉我们。我会确保相关负责人了解此事。一路平安。", actionHint: "问题已反馈", frequency: "common" },
              { textEn: "Your comments will go directly to our management team. Thank you for your patience, and have a good trip.", textZh: "您的意见会直接转给管理团队。感谢您的耐心，祝旅途愉快。", actionHint: "投诉处理完毕", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 行李损坏 ====================
  {
    id: "airport-24",
    category: "airport",
    titleZh: "行李损坏",
    titleEn: "Damaged Luggage",
    description: "到达后发现托运行李损坏，向航空公司索赔",
    otherRole: "行李服务柜台工作人员",
    otherRoleIcon: "luggage",
    flows: [
      {
        id: "report-damage",
        titleZh: "报告行李损坏",
        titleEn: "Reporting Damaged Luggage",
        description: "在行李服务柜台报告行李损坏并开始索赔流程",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just picked up my suitcase from the carousel and it's badly damaged. The wheel is broken off and there's a big crack on the side.",
            textZh: "你好，我刚从行李转盘取了箱子，损坏很严重。一个轮子掉了，侧面还有一条大裂缝。",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "I'm sorry to see that. Can I have your baggage claim tag and boarding pass? I'll need to file a damage report. Was the suitcase in good condition before the flight?",
            textZh: "很抱歉看到这种情况。能给我您的行李提取标签和登机牌吗？我需要填写一份损坏报告。箱子在飞行前状况良好吗？",
            keyPhrases: [
              { en: "baggage claim tag", zh: "行李提取标签" },
              { en: "damage report", zh: "损坏报告" },
              { en: "in good condition", zh: "状况良好" },
            ],
            alternativeExpressions: [
              { textEn: "Oh, that's unfortunate. Let me document the damage. Do you have your luggage tag?", textZh: "哦，这太不幸了。我来记录一下损坏情况。您有行李标签吗？", actionHint: "准备行李标签", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, here they are. The suitcase was brand new — I bought it last week. I'm really upset about this.",
            textZh: "给你。箱子是全新的——上周刚买的。我真的很难过。",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "I completely understand. Let me take some photos of the damage for our records. Can you also tell me the brand, model, and approximate value of the suitcase?",
            textZh: "我完全理解。让我拍几张损坏的照片留档。您能告诉我箱子的品牌、型号和大概价值吗？",
            keyPhrases: [
              { en: "take photos", zh: "拍照" },
              { en: "for our records", zh: "留档" },
              { en: "approximate value", zh: "大概价值" },
            ],
            alternativeExpressions: [
              { textEn: "I'll need to photograph the damage. Can you also tell me what the bag is worth?", textZh: "我需要拍一下损坏情况。您能告诉我这个箱子值多少钱吗？", actionHint: "准备箱子价格信息", frequency: "common" },
              { textEn: "Let me document this. What brand is it and roughly how much did you pay?", textZh: "让我记录一下。什么牌子的，大概花了多少钱？", actionHint: "说明品牌和价格", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's a Samsonite Spinner, 28-inch. I paid about $280 for it. I have the receipt on my phone.",
            textZh: "是新秀丽的万向轮箱子，28寸。花了大约280美元。手机里有收据。",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "Perfect, having the receipt will speed up the claim process. You have a few options: we can repair the suitcase at an authorized service center, replace it with a comparable one, or provide monetary compensation. Which would you prefer?",
            textZh: "太好了，有收据会加快理赔流程。您有几个选择：我们可以在授权维修中心维修箱子，换一个同等品质的新箱子，或者提供现金赔偿。您选哪个？",
            keyPhrases: [
              { en: "claim process", zh: "理赔流程" },
              { en: "authorized service center", zh: "授权维修中心" },
              { en: "monetary compensation", zh: "现金赔偿" },
              { en: "comparable", zh: "同等品质的" },
            ],
            vocabNotes: {
              "comparable": {
                meaningInContext: "在这句话里表示：品质、价格相当的替代品",
                similarUsage: "类似用法：They offered a comparable hotel when ours was overbooked.（酒店超订时给了我们一个同档次的替代酒店）",
              },
            },
            alternativeExpressions: [
              { textEn: "Great, the receipt helps a lot. So we can either fix it, swap it for a similar one, or just reimburse you. What works best for you?", textZh: "太好了，有收据就方便多了。我们可以修、换一个差不多的，或者直接退钱给您。您觉得哪种好？", actionHint: "选择理赔方式", frequency: "common" },
              { textEn: "That'll make things easier. Your options are: get it repaired, get a replacement of equal value, or take cash compensation. Up to you.", textZh: "这样就好办了。您可以选择维修、换一个同等价值的新箱子，或者拿现金赔偿。您决定。", actionHint: "了解三种赔偿方案后做选择", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd prefer a replacement if possible. But I'm traveling and I need a suitcase right now. What can you do?",
            textZh: "如果可以的话我想换一个新的。但我在旅行中，现在就需要箱子。怎么办？",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "I can give you a temporary suitcase right now to use during your trip. When you return, bring it back and we'll have your replacement ready. Here's your claim reference number — you can track the status online.",
            textZh: "我可以现在给您一个临时箱子，旅行期间先用着。回来的时候还回来，我们会准备好您的替换箱子。这是您的理赔编号——可以在网上查看进度。",
            keyPhrases: [
              { en: "temporary suitcase", zh: "临时箱子" },
              { en: "claim reference number", zh: "理赔编号" },
              { en: "track the status", zh: "查看进度" },
            ],
            alternativeExpressions: [
              { textEn: "We can lend you a bag for now. Bring it back when your new one is ready. Here's your case number.", textZh: "我们可以先借您一个箱子。新箱子准备好后拿回来就行。这是您的案例号。", actionHint: "记住归还临时箱子", frequency: "common" },
              { textEn: "Take this loaner suitcase for your trip. Your replacement will be waiting when you return.", textZh: "先用这个借用箱旅行。回来时替换箱会准备好。", actionHint: "回程时换箱子", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That works. Also, some items inside got damaged too — my perfume bottle broke and stained my clothes. Can I claim that as well?",
            textZh: "可以。另外，里面的东西也损坏了——香水瓶碎了，弄脏了衣服。这些也能索赔吗？",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "Yes, you can include contents damage in your claim. You'll need to list the damaged items and provide photos. I should mention that fragile items and valuables have limited coverage — typically up to $300 per passenger. Submit everything within 7 days.",
            textZh: "可以，您可以在索赔中包括内容物损坏。您需要列出损坏的物品并提供照片。我要说明，易碎物品和贵重物品的赔偿有上限——通常每位旅客最多300美元。请在7天内提交所有材料。",
            keyPhrases: [
              { en: "contents damage", zh: "内容物损坏" },
              { en: "fragile items", zh: "易碎物品" },
              { en: "limited coverage", zh: "有限的赔偿范围" },
              { en: "submit within 7 days", zh: "7天内提交" },
            ],
            culturalNote: "行李损坏索赔有时间限制，通常7天内必须提交。建议在机场就完成报告，并拍照留证。贵重物品最好随身携带。",
            alternativeExpressions: [
              { textEn: "You can add those to your claim. Take photos of everything damaged and submit within a week.", textZh: "可以一起索赔。把所有损坏的东西拍照，一周内提交。", actionHint: "拍照留证", frequency: "common" },
              { textEn: "Yes, contents damage is covered too, but fragile items have a cap. Get your receipts and photos together within 7 days.", textZh: "是的，内容物损坏也可以赔，但易碎品有上限。7天内准备好收据和照片。", actionHint: "整理索赔材料", frequency: "common" },
            ],
          },
        ],
      },
      {
        id: "lost-luggage",
        titleZh: "行李未到达",
        titleEn: "Luggage Not Arriving",
        description: "到达后在行李转盘找不到自己的行李",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, my luggage didn't come out on the carousel. Everyone else has already left and my bag isn't there.",
            textZh: "打扰了，我的行李没有出现在转盘上。其他人都已经走了，我的包还是没有。",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "I'm sorry about that. It happens sometimes, especially with connecting flights. Can I see your baggage claim tag? And which flight were you on?",
            textZh: "很抱歉。这种情况偶尔会发生，尤其是转机航班。能看一下您的行李提取标签吗？您坐的哪个航班？",
            keyPhrases: [
              { en: "baggage claim tag", zh: "行李提取标签" },
              { en: "connecting flights", zh: "转机航班" },
            ],
            alternativeExpressions: [
              { textEn: "That's not uncommon, especially with tight connections. Let me look it up — can I see your claim tag?", textZh: "这种情况不少见，尤其是紧凑转机。我查一下——行李标签给我看看？", actionHint: "找到行李标签", frequency: "common" },
              { textEn: "Don't worry, we can track it. Do you have your baggage receipt from check-in?", textZh: "别担心，我们可以追踪。您有值机时的行李凭条吗？", actionHint: "准备行李凭条", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I was on Delta 472 from Atlanta. I had a tight connection in Chicago. Here's my claim tag.",
            textZh: "我坐的是从亚特兰大来的达美472。在芝加哥转机时间很紧。这是我的行李标签。",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "Let me trace your bag in the system... I can see it was scanned in Chicago but didn't make it onto your connecting flight. It's currently on the next flight arriving at 9:45 PM tonight.",
            textZh: "让我在系统里追踪您的行李……我能看到它在芝加哥被扫描了，但没赶上您的转机航班。目前在下一班航班上，今晚9:45到达。",
            keyPhrases: [
              { en: "trace your bag", zh: "追踪您的行李" },
              { en: "scanned", zh: "被扫描" },
              { en: "didn't make it onto", zh: "没赶上" },
            ],
            vocabNotes: {
              "trace": {
                meaningInContext: "在这句话里表示：通过系统追踪行李的位置和去向",
                similarUsage: "类似用法：We can trace your package using the tracking number.（我们可以用追踪号查你的包裹）",
              },
            },
            alternativeExpressions: [
              { textEn: "Your bag got left behind in Chicago. It's being put on the next available flight.", textZh: "您的行李被留在芝加哥了。正在安排放上下一班可用的航班。", actionHint: "等待进一步安排", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh no. I have a business meeting tomorrow morning and all my formal clothes are in that suitcase. What can I do?",
            textZh: "糟糕。我明天早上有商务会议，正装都在那个箱子里。怎么办？",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "I understand the urgency. First, I'll arrange for the bag to be delivered to your hotel as soon as it arrives — free of charge. Second, you're entitled to purchase essential items like toiletries and basic clothing. Keep the receipts and we'll reimburse up to $150.",
            textZh: "我理解事态紧急。第一，行李一到就免费送到您的酒店。第二，您有权购买必需品，如洗漱用品和基本衣物。保留收据，我们最多报销150美元。",
            keyPhrases: [
              { en: "delivered to your hotel", zh: "送到您的酒店" },
              { en: "free of charge", zh: "免费" },
              { en: "essential items", zh: "必需品" },
              { en: "toiletries", zh: "洗漱用品" },
              { en: "reimburse up to", zh: "最多报销" },
            ],
            vocabNotes: {
              "toiletries": {
                meaningInContext: "在这句话里表示：洗漱用品，如牙刷、牙膏、洗发水、除臭剂等",
                similarUsage: "类似用法：The hotel provides complimentary toiletries in the bathroom.（酒店浴室提供免费洗漱用品）",
              },
            },
            alternativeExpressions: [
              { textEn: "We'll have it couriered to your hotel tonight at no cost. In the meantime, you can buy basics — save the receipts and we'll cover up to $150.", textZh: "今晚免费快递到您酒店。同时您可以先买些必需品——保留收据，我们报销最多150美元。", actionHint: "保留购物收据", frequency: "common" },
              { textEn: "Don't worry, we'll deliver it straight to your hotel once it lands. You're also covered for emergency purchases.", textZh: "别担心，行李一落地就直送您酒店。紧急购物也可以报销。", actionHint: "先买急用品", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's helpful. What's the delivery address? I'm staying at the Hyatt Regency downtown.",
            textZh: "这很有帮助。送到哪个地址？我住市中心的凯悦酒店。",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "I've noted the Hyatt Regency. Here's your delayed baggage report with a file reference number. You can track your bag's status with this number on our website or app. We'll also send you text updates. What's a good number to reach you?",
            textZh: "我记下了凯悦酒店。这是您的行李延误报告，上面有档案编号。用这个编号可以在我们网站或APP上查行李状态。我们也会发短信更新。留一个联系电话？",
            keyPhrases: [
              { en: "delayed baggage report", zh: "行李延误报告" },
              { en: "file reference number", zh: "档案编号" },
              { en: "text updates", zh: "短信更新" },
            ],
            alternativeExpressions: [
              { textEn: "Here's your reference number. You can check the status on our app. We'll text you when the bag arrives.", textZh: "这是您的编号。可以在我们APP上查进度。行李到了会给您发短信。", actionHint: "保存编号", frequency: "common" },
              { textEn: "I've logged everything. Use this case number to track your bag online. What's the best number to text you at?", textZh: "都登记好了。用这个案例号在线追踪行李。发短信用哪个号码？", actionHint: "留联系方式", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "My US number is 555-0123. If the bag doesn't arrive by tomorrow, what happens?",
            textZh: "我的美国号码是555-0123。如果明天还没到呢？",
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "If it doesn't arrive within 24 hours, you can increase your essential purchase allowance to $300. If it's not found within 21 days, it's officially classified as lost and you'd be eligible for full compensation based on the bag's value and contents.",
            textZh: "如果24小时内没到，您的必需品购买额度可以提高到300美元。如果21天内找不到，就正式归类为丢失，您可以根据箱子和内容物价值获得全额赔偿。",
            keyPhrases: [
              { en: "purchase allowance", zh: "购买额度" },
              { en: "classified as lost", zh: "归类为丢失" },
              { en: "eligible for full compensation", zh: "可获得全额赔偿" },
            ],
            alternativeExpressions: [
              { textEn: "If it doesn't show up in 24 hours, we bump the allowance to $300. After 21 days it's considered lost and you get full compensation.", textZh: "如果24小时内没到，额度提高到300美元。21天后算正式丢失，可以获得全额赔偿。", actionHint: "了解赔偿流程", frequency: "common" },
              { textEn: "Give it a day. If still nothing, we raise the spending limit and start a formal lost baggage claim.", textZh: "等一天看看。如果还没有，我们提高消费额度并启动正式的行李丢失索赔。", actionHint: "先等消息", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 机场巴士/地铁 ====================
  {
    id: "airport-25",
    category: "airport",
    titleZh: "机场公共交通",
    titleEn: "Airport Public Transit",
    description: "搭乘机场巴士、地铁或轻轨前往市区",
    otherRole: "售票员/乘客",
    otherRoleIcon: "train",
    flows: [
      {
        id: "airport-train",
        titleZh: "机场快线",
        titleEn: "Airport Express Train",
        description: "乘坐机场快线或地铁前往市区",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, how do I get to downtown by train? Is there an airport express?",
            textZh: "请问，怎么坐火车到市区？有机场快线吗？",
            casualVersion: "Hey, is there a train to downtown?",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Yes! The Airport Express goes directly to Central Station downtown. It takes about 25 minutes with no stops. Trains leave every 10 minutes from Platform 2, one level below.",
            textZh: "有！机场快线直达市中心的中央车站。大约25分钟不停站。每10分钟一班，在下面一层的2号站台。",
            keyPhrases: [
              { en: "Airport Express", zh: "机场快线" },
              { en: "Central Station", zh: "中央车站" },
              { en: "no stops", zh: "不停站/直达" },
              { en: "platform", zh: "站台" },
            ],
            alternativeExpressions: [
              { textEn: "The express train to the city center is just downstairs. Follow the signs to the train station.", textZh: "去市中心的快线就在楼下。跟着标识到火车站。", actionHint: "找火车站标识", frequency: "common" },
              { textEn: "Take the Blue Line to downtown. It runs every 12 minutes.", textZh: "坐蓝线到市区。每12分钟一班。", actionHint: "找蓝线标识", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much is a ticket? And where do I buy one?",
            textZh: "票多少钱？在哪里买？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "A single ride is $12. You can buy tickets at the vending machines downstairs — they accept cash, credit cards, and contactless payment. You can also use a transit card if you have one.",
            textZh: "单程12美元。可以在楼下自动售票机买——接受现金、信用卡和非接触式支付。如果有交通卡也可以用。",
            keyPhrases: [
              { en: "single ride", zh: "单程" },
              { en: "vending machines", zh: "自动售票机" },
              { en: "contactless payment", zh: "非接触式支付" },
              { en: "transit card", zh: "交通卡" },
            ],
            alternativeExpressions: [
              { textEn: "Tickets are $12 one way. The machines downstairs take cards and cash.", textZh: "单程12美元。楼下售票机可以刷卡或付现。", actionHint: "去楼下买票", frequency: "common" },
              { textEn: "A one-way ticket is twelve bucks. You can grab one at the kiosk or just tap your bank card at the gate.", textZh: "单程票12块。在自助机上买，或者直接在闸机刷银行卡。", actionHint: "可以直接刷卡进站", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a day pass or multi-ride discount? I'll be using transit a lot this week.",
            textZh: "有日票或多次乘车优惠吗？这周我会经常坐公共交通。",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "There's a 7-day unlimited transit pass for $35 — it covers the Airport Express, all subway lines, and city buses. That's a great deal if you're here for a week. You can buy it at the ticket counter or the vending machine.",
            textZh: "有7天不限次交通通票，35美元——包含机场快线、所有地铁线和市内巴士。如果待一周的话非常划算。可以在售票窗口或自动售票机买。",
            keyPhrases: [
              { en: "unlimited transit pass", zh: "不限次交通通票" },
              { en: "subway lines", zh: "地铁线" },
              { en: "great deal", zh: "很划算" },
            ],
            vocabNotes: {
              "unlimited": {
                meaningInContext: "在这句话里表示：不限次数的，在有效期内可以无限次乘坐",
                similarUsage: "类似用法：This plan includes unlimited data.（这个套餐包含不限量流量）",
              },
            },
            alternativeExpressions: [
              { textEn: "Get the weekly pass — $35 and it covers everything: trains, subway, buses.", textZh: "买周票吧——35美元，火车、地铁、巴士全包。", actionHint: "考虑周票更划算", frequency: "common" },
              { textEn: "If you're staying a week, the all-access pass is your best bet. Thirty-five dollars, unlimited rides.", textZh: "如果待一周的话，全通票最划算。35美元，不限次。", actionHint: "直接买通票", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll get the 7-day pass. Can I use it starting today?",
            textZh: "我买7天通票。今天就可以开始用吗？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Yes, it activates the first time you tap it at a gate. So it'll start today and be valid through next week. Just tap it on the yellow reader when you enter and exit the station.",
            textZh: "可以，第一次在闸机上刷的时候激活。所以今天开始，到下周有效。进出站时在黄色读卡器上刷一下就行。",
            keyPhrases: [
              { en: "activates", zh: "激活" },
              { en: "tap", zh: "刷（卡）" },
              { en: "yellow reader", zh: "黄色读卡器" },
              { en: "enter and exit", zh: "进出站" },
            ],
            alternativeExpressions: [
              { textEn: "It starts counting from your first tap. Just hold it against the sensor at the gates.", textZh: "从第一次刷卡开始计算。进出站时在感应器上刷一下。", actionHint: "记住在闸机刷卡", frequency: "common" },
              { textEn: "The pass kicks in when you first use it. Remember to tap in and tap out every ride.", textZh: "第一次使用时生效。每次乘车记得进出站都刷。", actionHint: "进出都要刷卡", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. One last question — can I bring my large suitcase on the train?",
            textZh: "好的。最后一个问题——大箱子能带上火车吗？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Absolutely. The Airport Express has luggage racks in every car. Try to board the first or last car — they're usually less crowded. And keep an eye on your bags at all times!",
            textZh: "当然可以。机场快线每节车厢都有行李架。尽量上第一节或最后一节车厢——通常人少一些。随时看好您的行李！",
            keyPhrases: [
              { en: "luggage racks", zh: "行李架" },
              { en: "less crowded", zh: "人少一些" },
              { en: "keep an eye on", zh: "看好/留意" },
            ],
            literalMeaning: "'Keep an eye on' 字面意思是'放一只眼睛在…上面'，实际表示'注意/看好'你的东西。",
            alternativeExpressions: [
              { textEn: "Sure, there's plenty of room. Each car has overhead racks and floor space for big bags.", textZh: "当然可以，空间很充裕。每节车厢上面有行李架，地上也有放大件的地方。", actionHint: "上车后找行李架", frequency: "common" },
              { textEn: "No problem at all. The airport train is designed for travelers with luggage.", textZh: "完全没问题。机场快线就是为带行李的旅客设计的。", actionHint: "放心带大件行李", frequency: "common" },
            ],
          },
        ],
      },
      {
        id: "airport-bus",
        titleZh: "机场巴士",
        titleEn: "Airport Bus / Shuttle",
        description: "搭乘机场巴士前往市区或其他目的地",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to get to the convention center. Is the airport bus cheaper than the train?",
            textZh: "你好，我要去会展中心。机场巴士比火车便宜吗？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "Yes, the airport bus is $6 compared to $12 for the express train. But it takes about 45 minutes because it makes several stops. Route A3 goes right past the convention center.",
            textZh: "是的，机场巴士6美元，快线火车12美元。但要大约45分钟，因为有好几站。A3路线正好经过会展中心。",
            keyPhrases: [
              { en: "compared to", zh: "相比" },
              { en: "makes several stops", zh: "有好几站" },
              { en: "route", zh: "路线" },
            ],
            alternativeExpressions: [
              { textEn: "The shuttle to downtown is half the price of the train but takes twice as long.", textZh: "去市区的大巴是火车一半的价格，但时间是两倍。", actionHint: "权衡价格和时间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "45 minutes is fine. Where do I catch Route A3?",
            textZh: "45分钟没问题。A3路在哪里坐？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "Go out Exit 5 and turn right. The bus stops are labeled with route numbers. A3 is the third stop. The next bus arrives in about 8 minutes. You can buy a ticket from me now or tap your card on the bus.",
            textZh: "从5号出口出去右转。公交站有路线编号标识。A3是第三个站。下一班大约8分钟后到。可以现在在我这买票，也可以上车刷卡。",
            keyPhrases: [
              { en: "bus stops", zh: "公交站" },
              { en: "labeled with route numbers", zh: "有路线编号标识" },
              { en: "tap your card", zh: "刷卡" },
            ],
            alternativeExpressions: [
              { textEn: "Exit 5, turn right. Bus bays are numbered — A3 is the third one. Next bus is in about 8 minutes.", textZh: "5号出口右转。站台有编号——A3是第三个。下一班大约8分钟。", actionHint: "找5号出口", frequency: "common" },
              { textEn: "The A3 bus leaves from the third bay outside Exit 5. You can pay on the bus with a tap card.", textZh: "A3路从5号出口外第三个站台发车。可以上车刷卡。", actionHint: "出门找站台", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll buy it now. How will I know when to get off? I'm not familiar with the area.",
            textZh: "我现在买票。我怎么知道什么时候下车？我对这里不熟。",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "The bus has electronic signs and audio announcements for each stop — in English and the local language. The convention center is the 6th stop. You can also use Google Maps to track your location in real time.",
            textZh: "巴士有电子显示屏和语音播报每一站——有英语和当地语言。会展中心是第6站。你也可以用谷歌地图实时追踪位置。",
            keyPhrases: [
              { en: "electronic signs", zh: "电子显示屏" },
              { en: "audio announcements", zh: "语音播报" },
              { en: "track your location", zh: "追踪位置" },
            ],
            alternativeExpressions: [
              { textEn: "There are announcements in English for every stop. The convention center is stop number six.", textZh: "每站都有英文报站。会展中心是第六站。", actionHint: "注意听报站", frequency: "common" },
              { textEn: "Each stop is announced on the display and over the speaker. You won't miss it.", textZh: "每站都有屏幕显示和广播，不会坐过站的。", actionHint: "留意屏幕和广播", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there space for luggage on the bus?",
            textZh: "巴士上有放行李的地方吗？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "There's a luggage compartment underneath the bus. The driver will help you load it. Just make sure to grab it when you get off — the driver will open the compartment at every stop.",
            textZh: "巴士下面有行李舱。司机会帮你放进去。下车时记得拿——司机每站都会打开行李舱。",
            keyPhrases: [
              { en: "luggage compartment", zh: "行李舱" },
              { en: "underneath", zh: "下面" },
              { en: "grab it", zh: "拿好/取出" },
            ],
            alternativeExpressions: [
              { textEn: "You can stow your bags underneath. The driver opens it at every stop, so don't forget yours.", textZh: "大件行李放下面行李舱。每站司机都会打开，别忘了拿。", actionHint: "下车前记得取行李", frequency: "common" },
              { textEn: "Large bags go in the storage area below. Just let the driver know which stop is yours.", textZh: "大件行李放下层储物区。告诉司机你在哪站下就好。", actionHint: "提前告知司机", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. Does the bus have WiFi? I need to send some emails on the way.",
            textZh: "好的。巴士有WiFi吗？路上要发几封邮件。",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "Yes, there's free WiFi on the bus. The network name is 'AirportBus-Free.' It's decent for emails and messaging but might be slow for video calls. Here's your ticket — enjoy the ride!",
            textZh: "有的，巴士上有免费WiFi。网络名称是'AirportBus-Free'。发邮件和消息没问题，但视频通话可能会慢。这是您的票——祝乘车愉快！",
            keyPhrases: [
              { en: "decent", zh: "还不错/够用的" },
              { en: "messaging", zh: "发消息" },
            ],
            vocabNotes: {
              "decent": {
                meaningInContext: "在这句话里表示：还过得去、够用的（不算特别好但能满足基本需求）",
                similarUsage: "类似用法：The hotel was decent for the price.（这个价位来说酒店还不错）",
              },
            },
            alternativeExpressions: [
              { textEn: "Yeah, the bus has complimentary WiFi. Good enough for browsing and email.", textZh: "有的，巴士有免费WiFi。浏览网页和收发邮件没问题。", actionHint: "连WiFi办公", frequency: "common" },
              { textEn: "There's WiFi on board. The password is on the sticker above your seat.", textZh: "车上有WiFi。密码贴在座位上方。", actionHint: "找WiFi密码", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },
];
