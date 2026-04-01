import type { PresetScene } from "../scene-types";

// ============================================================
// 日常生活服务场景 — Daily Life Services Scenes
// 覆盖：洗衣店、理发店、健身房、菜市场/农贸市场
// ============================================================

export const DAILY_LIFE_SCENES: PresetScene[] = [
  // ==================== 洗衣店 ====================
  {
    id: "daily-life-laundry",
    category: "daily-life",
    titleZh: "洗衣店",
    titleEn: "Laundromat / Dry Cleaner",
    description: "在洗衣店送洗衣物、选择服务类型、取件，以及处理衣物损坏问题",
    otherRole: "洗衣店店员",
    otherRoleIcon: "👔",
    flows: [
      // --- Flow 1: 送洗衣物+选服务+取件 ---
      {
        id: "drop-off-pickup",
        titleZh: "送洗与取件",
        titleEn: "Drop-off & Pick-up",
        description: "把衣服送到洗衣店，选择干洗或水洗，约定取件时间",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "店员",
            textEn: "Hi there! What can we do for you today?",
            textZh: "你好！今天需要什么服务？",
            keyPhrases: [
              { en: "what can we do for you", zh: "需要什么服务" },
            ],
            alternativeExpressions: [
              { textEn: "Hey! How can I help you today?", textZh: "嘿！今天有什么可以帮你的？", actionHint: "更随意的招呼", frequency: "common" },
              { textEn: "Welcome in! What are you bringing us today?", textZh: "欢迎光临！今天带了什么来？", actionHint: "热情打招呼", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Hi, I have a few items I'd like to get cleaned.",
            textZh: "你好，我有几件衣服想送洗。",
            casualVersion: "Hey, I need to get some stuff cleaned.",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Sure! Let me take a look. Do you need dry cleaning or regular wash and fold?",
            textZh: "好的！让我看看。您需要干洗还是普通水洗折叠？",
            keyPhrases: [
              { en: "dry cleaning", zh: "干洗" },
              { en: "wash and fold", zh: "水洗折叠" },
            ],
            variations: [
              { textEn: "No problem. Is this for dry clean or laundry service?", textZh: "没问题。这些是干洗还是洗衣服务？" },
            ],
            culturalNote: "美国洗衣店通常分 dry cleaning（干洗）和 wash & fold（水洗+折叠）两种服务，价格差别很大。",
            alternativeExpressions: [
              { textEn: "Alright, let's see what we got. Dry cleaning or just a regular wash?", textZh: "好的，看看都有什么。干洗还是普通水洗？", actionHint: "边看边问", frequency: "common" },
              { textEn: "Cool, pop 'em on the counter. Dry clean or wash and fold?", textZh: "好嘞，放柜台上。干洗还是水洗折叠？", actionHint: "简洁直接", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "This suit jacket and these dress pants need dry cleaning. The rest can just be washed and folded.",
            textZh: "这件西装外套和这条西裤需要干洗。剩下的水洗折叠就行。",
            culturalNote: "suit jacket（西装外套）、dress pants（西裤）一般都建议干洗，防止缩水变形。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Got it. The suit jacket is $12 and the pants are $8 for dry cleaning. The wash and fold is $2 per pound. Do you want any starch on the shirts?",
            textZh: "好的。西装外套干洗12美元，裤子8美元。水洗折叠按磅算，每磅2美元。衬衫要上浆吗？",
            keyPhrases: [
              { en: "per pound", zh: "每磅" },
              { en: "starch", zh: "上浆/浆洗" },
            ],
            variations: [
              { textEn: "Would you like your shirts starched?", textZh: "您的衬衫需要浆洗吗？" },
            ],
            alternativeExpressions: [
              { textEn: "So that's $12 for the jacket, $8 for the pants. Wash and fold is by the pound — two bucks. Starch on the shirts?", textZh: "那就是外套12美元，裤子8美元。水洗按磅算——两块。衬衫要上浆吗？", actionHint: "报价并追问", frequency: "common" },
              { textEn: "Dry cleaning for the suit — that's 20 bucks total. The rest we charge by weight. You want starch?", textZh: "西装干洗——一共20块。其余的按重量收。要上浆吗？", actionHint: "快速报价", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "No starch, thanks. When will everything be ready?",
            textZh: "不用上浆，谢谢。什么时候能好？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "The dry cleaning will be ready in two business days — so Thursday afternoon. The wash and fold will be done tomorrow by noon.",
            textZh: "干洗两个工作日后好——也就是周四下午。水洗折叠明天中午之前就好。",
            keyPhrases: [
              { en: "business days", zh: "工作日" },
              { en: "by noon", zh: "中午之前" },
            ],
            alternativeExpressions: [
              { textEn: "Dry cleaning's gonna be two days — Thursday. Wash and fold, you can grab tomorrow before lunch.", textZh: "干洗要两天——周四。水洗折叠明天中午前就能拿。", actionHint: "口语化说取件时间", frequency: "common" },
              { textEn: "Give us till Thursday for the dry cleaning. The wash and fold? Tomorrow morning, easy.", textZh: "干洗给我们到周四。水洗折叠？明天上午就好。", actionHint: "分开说明时间", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there an express service? I actually need the suit by tomorrow evening.",
            textZh: "有加急服务吗？我其实明天晚上就需要穿这套西装。",
            casualVersion: "Any chance I can get the suit back faster? I need it tomorrow night.",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "We do have same-day service, but there's a 50% surcharge. So the jacket would be $18 and the pants $12. Want me to rush those?",
            textZh: "我们有当天取服务，但要加收50%的费用。西装外套18美元，裤子12美元。要加急吗？",
            keyPhrases: [
              { en: "same-day service", zh: "当天取服务" },
              { en: "surcharge", zh: "附加费/加价" },
              { en: "rush", zh: "加急" },
            ],
            alternativeExpressions: [
              { textEn: "We can do a rush job, but it'll cost you 50% more. So $18 for the jacket, $12 for the pants. Worth it?", textZh: "我们可以加急，但要多收50%。外套18，裤子12。值吗？", actionHint: "说明加急费用", frequency: "common" },
              { textEn: "Yeah, we got an express option — costs extra though. You'd be looking at 30 bucks for both pieces.", textZh: "有，我们有加急的——不过要加钱。两件加起来30块。", actionHint: "直接报总价", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please rush the suit. I'll pick everything up together tomorrow evening then.",
            textZh: "好的，请加急西装。那我明天晚上一起取。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Perfect. Here's your ticket — you'll need it for pick-up. The total will be $30 for dry cleaning plus whatever the wash and fold weighs out to. We'll have it all ready by 5 PM tomorrow.",
            textZh: "好的。这是您的取件单——取件时需要。干洗一共30美元，加上水洗折叠按称重算。明天下午5点前全部准备好。",
            keyPhrases: [
              { en: "ticket", zh: "取件单/小票" },
              { en: "pick-up", zh: "取件" },
              { en: "weighs out to", zh: "称重后是" },
            ],
            culturalNote: "美国洗衣店取件一般要出示ticket（取件单），弄丢了可能需要出示ID。",
            alternativeExpressions: [
              { textEn: "All set! Hold on to this slip — you'll need it when you pick up. Everything should be ready by 5 tomorrow.", textZh: "搞定！这张单子收好——取件时要用。明天5点前全部准备好。", actionHint: "提醒保管取件单", frequency: "common" },
              { textEn: "Here's your receipt. Don't lose it! We'll have your stuff done by tomorrow afternoon.", textZh: "这是你的小票。别弄丢了！明天下午你的衣服就好了。", actionHint: "叮嘱别丢收据", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, thank you! See you tomorrow.",
            textZh: "太好了，谢谢！明天见。",
          },
        ],
      },

      // --- Flow 2: 衣服洗坏了→索赔 ---
      {
        id: "damage-claim",
        titleZh: "衣服洗坏索赔",
        titleEn: "Damage Complaint & Claim",
        description: "取件时发现衣服被洗坏了或颜色跑了，需要投诉和索赔",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm here to pick up my dry cleaning. Here's my ticket.",
            textZh: "你好，我来取干洗的衣服。这是我的取件单。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Let me grab those for you... Here you go. Would you like to check them before you leave?",
            textZh: "我去拿……给您。您要在走之前检查一下吗？",
            keyPhrases: [
              { en: "check them", zh: "检查一下" },
              { en: "before you leave", zh: "在走之前" },
            ],
            culturalNote: "好的洗衣店会主动让你当场检查，这是你发现问题的最佳时机。",
            alternativeExpressions: [
              { textEn: "Here ya go. Take a sec to look them over before you head out.", textZh: "给你。走之前花点时间检查一下吧。", actionHint: "提醒当场检查", frequency: "common" },
              { textEn: "Got your stuff right here. Wanna make sure everything looks good?", textZh: "你的衣服在这儿。看看有没有问题？", actionHint: "随意确认", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, let me take a look... Wait, what happened to this blouse? The color has bled — there are blue stains all over it. It was completely white when I dropped it off.",
            textZh: "好的，让我看看……等等，这件衬衫怎么了？颜色跑了——上面全是蓝色的痕迹。我送来的时候是全白的。",
            culturalNote: "\"bled\" 在这里指颜色渗出/串色，\"stains\" 是污渍。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Oh, I'm sorry about that. Let me see... It does look like some color transfer happened. I'm really sorry — let me get my manager.",
            textZh: "哦，很抱歉。让我看看……确实像是染色了。真的很抱歉——我叫一下经理过来。",
            keyPhrases: [
              { en: "color transfer", zh: "染色/串色" },
              { en: "let me get my manager", zh: "我叫经理过来" },
            ],
            alternativeExpressions: [
              { textEn: "Oh no, that shouldn't have happened. Looks like it got mixed with something. Hang on, let me grab my boss.", textZh: "哎呀，这不应该啊。看起来和什么东西混在一起了。稍等，我叫我们老板。", actionHint: "认错并找上级", frequency: "common" },
              { textEn: "Yikes, I see the staining. I'm so sorry — this needs my manager. One sec.", textZh: "天哪，我看到染色了。太抱歉了——这得我经理来处理。等一下。", actionHint: "表示歉意并转交", frequency: "common" },
            ],
          },
          {
            speaker: "them",
            role: "经理",
            textEn: "Hi, I'm the manager. I understand there's an issue with your blouse. Let me take a look... Yes, I can see the discoloration. I sincerely apologize. We can try to re-treat it, or we can offer you compensation.",
            textZh: "你好，我是经理。我了解您的衬衫有问题。让我看看……是的，我能看到变色了。非常抱歉。我们可以尝试重新处理，或者我们可以给您赔偿。",
            keyPhrases: [
              { en: "discoloration", zh: "变色/褪色" },
              { en: "re-treat", zh: "重新处理" },
              { en: "compensation", zh: "赔偿" },
            ],
            alternativeExpressions: [
              { textEn: "Hey, I'm the store manager. I heard about the issue. Let me see... Yeah, that's definitely our fault. We can try to fix it or just compensate you.", textZh: "你好，我是店长。听说出了问题。让我看看……是的，这确实是我们的责任。我们可以尝试修复，或者直接赔偿。", actionHint: "经理主动承认问题", frequency: "common" },
              { textEn: "I'm really sorry about this. I can have our specialist take another crack at it, or we can work out some compensation. What would you prefer?", textZh: "真的很抱歉。我可以让我们的专家再试一下，或者我们商量赔偿方案。你更想要哪种？", actionHint: "提供两种解决方案", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "This blouse was brand new — I only wore it once. I don't think re-treating will fix it. How much compensation can you offer?",
            textZh: "这件衬衫是全新的——我只穿过一次。我觉得重新处理也修不好。你们能赔多少？",
          },
          {
            speaker: "them",
            role: "经理",
            textEn: "I completely understand your frustration. Our policy is to reimburse up to ten times the cleaning cost for damaged items. The cleaning charge was $15, so we can offer $150. If you have the original receipt showing a higher value, we can discuss further.",
            textZh: "我完全理解您的不满。我们的政策是对损坏的衣物赔偿最高十倍洗衣费。洗衣费是15美元，所以我们可以赔偿150美元。如果您有原始购买收据显示更高价值，我们可以进一步商量。",
            keyPhrases: [
              { en: "reimburse", zh: "报销/赔偿" },
              { en: "up to ten times", zh: "最高十倍" },
              { en: "original receipt", zh: "原始购买收据" },
            ],
            responseTip: "如果衣服比较贵，记得带上购买小票来谈赔偿。",
            alternativeExpressions: [
              { textEn: "I totally get it. We usually cover up to ten times the cleaning fee, so that'd be $150. If you've got a receipt showing it cost more, we can talk.", textZh: "我完全理解。我们通常赔偿最高十倍洗衣费，也就是150美元。如果你有收据证明花了更多钱，我们可以商量。", actionHint: "说明赔偿政策", frequency: "common" },
              { textEn: "Our policy covers damaged items up to ten times what you paid for cleaning. That's $150. Got the original purchase receipt? We might be able to do more.", textZh: "我们的政策是赔偿最高十倍洗衣费。也就是150美元。有原始购买收据吗？可能可以赔更多。", actionHint: "按政策赔偿", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "The blouse cost me $200. I have the receipt on my phone — here, you can see the purchase date and amount.",
            textZh: "这件衬衫花了200美元。我手机上有收据——你看，可以看到购买日期和金额。",
          },
          {
            speaker: "them",
            role: "经理",
            textEn: "Thank you for showing me that. Given the receipt, I can authorize a full reimbursement of $200. I'll process that as a store credit, or I can write you a check — which would you prefer?",
            textZh: "谢谢您出示收据。凭这个收据，我可以批准全额赔偿200美元。我可以处理成店内积分，或者给您开一张支票——您更愿意哪种？",
            keyPhrases: [
              { en: "full reimbursement", zh: "全额赔偿" },
              { en: "store credit", zh: "店内积分/抵扣额度" },
              { en: "write you a check", zh: "给您开支票" },
            ],
            alternativeExpressions: [
              { textEn: "With that receipt, I can do a full $200 refund. You want store credit or a check?", textZh: "有了这个收据，我可以全额退200美元。你要店内余额还是支票？", actionHint: "确认全额赔偿", frequency: "common" },
              { textEn: "Alright, I'll approve the full 200. We can put it on a gift card or cut you a check — your call.", textZh: "好的，我批准全额200。我们可以充到礼品卡上或者给你开支票——你说了算。", actionHint: "提供赔偿方式选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "A check, please. I'd also like to waive the cleaning charge for today's order, given the inconvenience.",
            textZh: "支票吧。考虑到这次的麻烦，我还希望能免掉今天的洗衣费。",
            culturalNote: "在美国，合理地提出额外补偿要求（如免单）是可以接受的，不算无理取闹。",
          },
          {
            speaker: "them",
            role: "经理",
            textEn: "Absolutely, that's fair. I'll waive today's charges entirely and have the check mailed to you within five business days. Again, I'm very sorry about this. Here's my card if you have any further issues.",
            textZh: "当然，合情合理。今天的费用全免，支票会在五个工作日内寄给您。再次非常抱歉。这是我的名片，如果还有任何问题可以联系我。",
            keyPhrases: [
              { en: "waive", zh: "免除/免掉" },
              { en: "charges entirely", zh: "全部费用" },
              { en: "mailed to you", zh: "寄给您" },
            ],
            alternativeExpressions: [
              { textEn: "Of course, no charge today. I'll get that check out to you this week. Again, really sorry about this.", textZh: "当然，今天不收费了。这周就把支票寄给你。再次非常抱歉。", actionHint: "免单并道歉", frequency: "common" },
              { textEn: "Done — today's on us, and I'll have the check in the mail by tomorrow. Here's my number if anything else comes up.", textZh: "搞定——今天免单，支票明天就寄出。给你我的电话，有其他问题随时联系。", actionHint: "免单加留联系方式", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you for handling this so quickly. I appreciate it.",
            textZh: "谢谢你这么快处理。非常感谢。",
          },
        ],
      },
    ],
  },

  // ==================== 理发店 ====================
  {
    id: "daily-life-haircut",
    category: "daily-life",
    titleZh: "理发店",
    titleEn: "Hair Salon / Barbershop",
    description: "在理发店描述想要的发型、沟通理发过程、结账，以及处理不满意的情况",
    otherRole: "理发师",
    otherRoleIcon: "💇",
    flows: [
      // --- Flow 1: 描述发型+沟通+结账 ---
      {
        id: "standard-haircut",
        titleZh: "标准理发",
        titleEn: "Standard Haircut",
        description: "描述想要的发型，沟通理发过程，满意后结账",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "前台",
            textEn: "Welcome! Do you have an appointment, or are you a walk-in?",
            textZh: "欢迎！您有预约吗，还是直接来的？",
            keyPhrases: [
              { en: "appointment", zh: "预约" },
              { en: "walk-in", zh: "没有预约直接来" },
            ],
            culturalNote: "在美国理发店，walk-in（无预约上门）很常见，但可能要等位。",
            alternativeExpressions: [
              { textEn: "Hey there! You got an appointment or just dropping in?", textZh: "嗨！你有预约还是直接来的？", actionHint: "轻松询问", frequency: "common" },
              { textEn: "Hi! Walk-in or do you have a booking?", textZh: "你好！直接来的还是有预约？", actionHint: "简短确认", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm a walk-in. How long is the wait?",
            textZh: "没有预约，直接来的。要等多久？",
            casualVersion: "No appointment. Is there a wait?",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "About 15 minutes. Have a seat — we'll call you when a stylist is available. Would you like anything to drink while you wait?",
            textZh: "大约15分钟。请坐——理发师有空了我们会叫您。等的时候要喝点什么吗？",
            keyPhrases: [
              { en: "have a seat", zh: "请坐" },
              { en: "stylist", zh: "理发师/造型师" },
            ],
            alternativeExpressions: [
              { textEn: "Shouldn't be more than 15 minutes. Take a seat and we'll get you in soon.", textZh: "不会超过15分钟。坐一下，很快就轮到你。", actionHint: "告知等待时间", frequency: "common" },
              { textEn: "You're looking at maybe a 10-minute wait. Grab a seat, we'll call your name.", textZh: "大概等10分钟左右。坐一下，叫到你名字就来。", actionHint: "让顾客稍候", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm fine, thanks.",
            textZh: "不用了，谢谢。",
          },
          {
            speaker: "them",
            role: "理发师",
            textEn: "Hi, I'm Mike. Come on over. So, what are we doing today?",
            textZh: "嗨，我是Mike。过来坐吧。今天想怎么剪？",
            keyPhrases: [
              { en: "come on over", zh: "过来坐" },
              { en: "what are we doing today", zh: "今天想怎么弄" },
            ],
            variations: [
              { textEn: "What are you looking for today?", textZh: "今天想做什么样的？" },
              { textEn: "How would you like it cut?", textZh: "您想怎么剪？" },
            ],
            alternativeExpressions: [
              { textEn: "Hey! Have a seat right here. So what are we working with today?", textZh: "嘿！坐这儿。今天想做什么？", actionHint: "招呼入座", frequency: "common" },
              { textEn: "What's up, man. You got a look in mind or playing it by ear?", textZh: "怎么样，兄弟。你想好要什么发型了还是随机应变？", actionHint: "很随意地问", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd like to keep the length on top but take the sides shorter — maybe a fade. Something clean and professional looking.",
            textZh: "上面保持长度，两边剪短一点——做个渐变。看起来干净利落、职业一点。",
            culturalNote: "\"fade\" 是渐变短发，从鬓角往上逐渐变长，在欧美非常流行。形容想要的效果比描述具体尺寸更有效。",
          },
          {
            speaker: "them",
            role: "理发师",
            textEn: "Got it. How short on the sides — a low fade, mid fade, or high fade? And do you want me to use a number 2 guard or go shorter?",
            textZh: "明白。两边多短——低渐变、中渐变还是高渐变？用2号卡尺还是更短？",
            keyPhrases: [
              { en: "low fade", zh: "低渐变（从耳朵下方开始渐变）" },
              { en: "mid fade", zh: "中渐变（从太阳穴处开始）" },
              { en: "high fade", zh: "高渐变（从较高位置开始）" },
              { en: "guard", zh: "卡尺/限位梳" },
            ],
            responseTip: "如果不懂这些术语，可以直接说 'not too short' 或拿照片给理发师看。",
            alternativeExpressions: [
              { textEn: "Sure thing. How tight you want the sides? Like a skin fade or more of a taper?", textZh: "没问题。两边要多短？是光头渐变还是稍微收一下？", actionHint: "确认渐变细节", frequency: "common" },
              { textEn: "Cool. So for the fade — you want it real clean down to the skin, or keep a little length?", textZh: "好嘞。渐变的话——你想推到贴头皮，还是留一点长度？", actionHint: "询问具体长度", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "A mid fade, and number 2 is fine. Actually, I have a photo — this is pretty much what I'm going for.",
            textZh: "中渐变，2号就行。其实我有张照片——大概就是这个效果。",
            culturalNote: "带参考照片是和理发师沟通最高效的方式，减少误解。",
          },
          {
            speaker: "them",
            role: "理发师",
            textEn: "Oh yeah, that's a nice style. I can definitely do that. Want me to clean up the neckline and do the eyebrows too?",
            textZh: "哦不错，这个发型挺好看。我完全可以做。要不要修一下后颈线和眉毛？",
            keyPhrases: [
              { en: "clean up", zh: "修整" },
              { en: "neckline", zh: "后颈线" },
              { en: "eyebrows", zh: "眉毛" },
            ],
            alternativeExpressions: [
              { textEn: "Nice pick! I can totally pull that off. You want me to line up the back and do your brows while I'm at it?", textZh: "选得不错！我完全能做。顺便修一下后面的线条和眉毛要不？", actionHint: "追加服务推荐", frequency: "common" },
              { textEn: "Love it. I'll get that done for you. Should I tidy up the neck and eyebrows too?", textZh: "很好看。我给你弄。要不要顺便修一下脖子和眉毛？", actionHint: "询问附加项目", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes to the neckline, but I'll skip the eyebrows. Thanks.",
            textZh: "后颈线修一下，眉毛不用了。谢谢。",
          },
          {
            speaker: "them",
            role: "理发师",
            textEn: "Alright, all done! Take a look in the mirror. How does that look?",
            textZh: "好了，剪完了！照照镜子看看。觉得怎么样？",
            keyPhrases: [
              { en: "all done", zh: "全部完成" },
              { en: "take a look", zh: "看一下" },
            ],
            alternativeExpressions: [
              { textEn: "And we're done! Check it out — what do you think?", textZh: "搞定了！看看——你觉得怎么样？", actionHint: "完成后展示", frequency: "common" },
              { textEn: "There you go, all finished up. Have a look and tell me what you think.", textZh: "好了，全部弄完。看看觉得怎么样。", actionHint: "请顾客检查", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Looks great, I love it. How much do I owe you?",
            textZh: "看起来很棒，我很喜欢。多少钱？",
          },
          {
            speaker: "them",
            role: "理发师",
            textEn: "That'll be $35. You can pay at the front. Cash or card is fine.",
            textZh: "35美元。在前台付就行。现金或刷卡都可以。",
            keyPhrases: [
              { en: "pay at the front", zh: "在前台付" },
              { en: "cash or card", zh: "现金或刷卡" },
            ],
            culturalNote: "在美国理发后给小费是标准做法，一般给15%-20%，好的服务可以给更多。",
            alternativeExpressions: [
              { textEn: "That's $35. Just pay up front — cash or card, whatever works.", textZh: "35美元。在前台付——现金刷卡都行。", actionHint: "告知付款方式", frequency: "common" },
              { textEn: "Alright, $35 for the cut. You can settle up at the register.", textZh: "好，剪发35美元。去收银台结账就行。", actionHint: "指引结账", frequency: "common" },
            ],
          },
        ],
      },

      // --- Flow 2: 剪完不满意→要求修改 ---
      {
        id: "not-satisfied",
        titleZh: "剪完不满意",
        titleEn: "Not Satisfied with the Cut",
        description: "理发后发现和预期不一样，礼貌地要求修改",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "理发师",
            textEn: "There we go — all finished! What do you think?",
            textZh: "好了——全部剪完了！您觉得怎么样？",
            keyPhrases: [
              { en: "all finished", zh: "全部完成" },
              { en: "what do you think", zh: "您觉得怎么样" },
            ],
            alternativeExpressions: [
              { textEn: "Alright, you're all set! Grab the mirror and have a look.", textZh: "好了，弄好了！拿镜子看看。", actionHint: "递镜子让检查", frequency: "common" },
              { textEn: "Done! Take a peek and let me know if you're happy with it.", textZh: "完成！看看满不满意。", actionHint: "简洁询问意见", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Hmm, it's nice, but honestly the sides look a bit shorter than I wanted. I was hoping to keep a little more length here.",
            textZh: "嗯，还不错，但说实话两边好像比我想要的短了一点。我本来想这里多保留一些长度。",
            culturalNote: "用 'honestly' 和 'a bit' 来缓和语气，既表达了不满又不会太伤面子。",
          },
          {
            speaker: "them",
            role: "理发师",
            textEn: "Oh, I see what you mean. Unfortunately I can't add hair back, but I can adjust the top to blend better with the sides so it looks more balanced. Would you like me to do that?",
            textZh: "哦，我明白你的意思。很遗憾剪短的没法长回来，但我可以调整一下上面的头发，让它和两边更自然地过渡，看起来更协调。要不要我调一下？",
            keyPhrases: [
              { en: "blend", zh: "过渡/衔接" },
              { en: "balanced", zh: "协调/平衡" },
              { en: "adjust", zh: "调整" },
            ],
            alternativeExpressions: [
              { textEn: "Ah, gotcha. Can't put it back, but I can work with the top to make it flow better. Want me to try?", textZh: "啊，明白了。剪掉的没法复原，但我可以调整上面让整体更协调。要我试试吗？", actionHint: "坦诚回应并提方案", frequency: "common" },
              { textEn: "I hear you. Let me blend the top down a bit so it all matches. That should help a lot.", textZh: "我懂你意思。让我把上面稍微修短一点让整体搭配。应该会好很多。", actionHint: "主动提出调整", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please try that. And can you also leave the front a bit longer? I like to style it to the side.",
            textZh: "好的，试试吧。还有前面能多留一点吗？我喜欢把头发往侧面梳。",
          },
          {
            speaker: "them",
            role: "理发师",
            textEn: "Absolutely. I'll just take a tiny bit off the top to even things out and leave the fringe longer for side styling. Give me a couple minutes.",
            textZh: "没问题。我把上面稍微修一点让它均匀一些，刘海留长一点方便你侧梳。给我几分钟。",
            keyPhrases: [
              { en: "even things out", zh: "修匀/弄均匀" },
              { en: "fringe", zh: "刘海" },
              { en: "side styling", zh: "侧梳/侧分造型" },
            ],
            variations: [
              { textEn: "I'll texturize the top a bit to make it blend better.", textZh: "我把上面打薄一点让过渡更自然。" },
            ],
            alternativeExpressions: [
              { textEn: "No problem! I'll trim the top just a touch and keep the front long for you. Two minutes.", textZh: "没问题！上面我稍微修一点，前面给你留长。两分钟。", actionHint: "快速确认修改", frequency: "common" },
              { textEn: "For sure. I'll even it out on top and leave you some length up front to play with. Hang tight.", textZh: "当然。上面修匀，前面留长让你可以做造型。稍等。", actionHint: "说明调整方案", frequency: "common" },
            ],
          },
          {
            speaker: "them",
            role: "理发师",
            textEn: "Okay, how about now? I blended the transition and left more length in the front. Better?",
            textZh: "好了，现在怎么样？我把过渡弄自然了，前面也留长了。好一些了吗？",
            keyPhrases: [
              { en: "transition", zh: "过渡" },
              { en: "more length", zh: "更多长度" },
            ],
            alternativeExpressions: [
              { textEn: "How's that looking now? I smoothed out the sides and left the front longer.", textZh: "现在看起来怎么样？两边弄平滑了，前面留长了。", actionHint: "修改后再确认", frequency: "common" },
              { textEn: "Take another look — I cleaned up the blend and kept more up front. Better?", textZh: "再看看——过渡修好了，前面也多留了。好些了吗？", actionHint: "请再次检查", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's much better, thank you. One more thing — the sideburns look a little uneven. Could you fix that?",
            textZh: "好多了，谢谢。还有一个事——鬓角看起来有点不对称。能修一下吗？",
          },
          {
            speaker: "them",
            role: "理发师",
            textEn: "Good catch — let me even those out real quick. ...There, now they're symmetrical. Anything else?",
            textZh: "看得真仔细——让我赶紧修齐。……好了，现在对称了。还有别的吗？",
            keyPhrases: [
              { en: "good catch", zh: "看得真仔细/好眼力" },
              { en: "even those out", zh: "修齐" },
              { en: "symmetrical", zh: "对称的" },
            ],
            alternativeExpressions: [
              { textEn: "Oh, good eye! Let me fix that real fast... Done, all even now. Anything else bugging you?", textZh: "哦，眼力真好！我马上修一下……好了，现在齐了。还有别的不满意的吗？", actionHint: "快速修正", frequency: "common" },
              { textEn: "Oops, you're right. Lemme clean that up... There, nice and even. We good?", textZh: "哎呀，你说得对。我修一下……好了，很整齐。满意了吗？", actionHint: "认错并修复", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "No, that looks perfect now. I really appreciate you taking the time to fix it.",
            textZh: "不用了，现在看起来很完美。非常感谢你花时间帮我修改。",
          },
          {
            speaker: "them",
            role: "理发师",
            textEn: "Of course! I want you to leave happy. The price is the same — $35. And if you want, I can book your next appointment so we get the length exactly how you like it.",
            textZh: "当然！我希望你满意地离开。价格不变——35美元。如果你愿意，我可以帮你预约下次，这样我们就知道你要的长度了。",
            keyPhrases: [
              { en: "leave happy", zh: "满意地离开" },
              { en: "book your next appointment", zh: "预约下一次" },
            ],
            culturalNote: "即使修改了，一般不需要额外付费。但因为理发师额外花了时间，适当多给一些小费是得体的。",
            alternativeExpressions: [
              { textEn: "Hey, no worries at all! Same price — 35 bucks. Wanna schedule next time so I know exactly what you want?", textZh: "完全没关系！价格一样——35块。要不要预约下次，这样我就知道你想要什么了？", actionHint: "安抚并建议预约", frequency: "common" },
              { textEn: "My pleasure! Still $35. Next time I'll have your preferences on file. Want to book now?", textZh: "不客气！还是35美元。下次我就有你的偏好记录了。要现在预约吗？", actionHint: "提供预约服务", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, let's book one for three weeks from now. Thanks again, Mike.",
            textZh: "好的，帮我约三周后的吧。再次感谢你，Mike。",
          },
        ],
      },
    ],
  },

  // ==================== 健身房 ====================
  {
    id: "daily-life-gym",
    category: "daily-life",
    titleZh: "健身房",
    titleEn: "Gym / Fitness Center",
    description: "在健身房办日卡/周卡、了解设施和规则，以及参加团体课程",
    otherRole: "健身房前台",
    otherRoleIcon: "🏋️",
    flows: [
      // --- Flow 1: 办日卡/周卡+了解设施+规则 ---
      {
        id: "day-pass",
        titleZh: "办日卡与了解设施",
        titleEn: "Day Pass & Facility Tour",
        description: "在健身房前台办理短期卡，了解设施分布和使用规则",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm visiting the area for a couple of weeks. Do you offer day passes or short-term memberships?",
            textZh: "你好，我在这边待几周。你们有日卡或者短期会员吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Welcome! Yes, we have a day pass for $15 and a weekly pass for $50. The weekly one is a much better deal if you're planning to come in regularly.",
            textZh: "欢迎！有的，日卡15美元，周卡50美元。如果你打算经常来，周卡划算很多。",
            keyPhrases: [
              { en: "day pass", zh: "日卡" },
              { en: "weekly pass", zh: "周卡" },
              { en: "better deal", zh: "更划算" },
            ],
            alternativeExpressions: [
              { textEn: "Sure do! Day pass is 15, or you can grab a week pass for 50 — way better value if you're coming in a few times.", textZh: "有的！日卡15，或者办周卡50——如果你来几次的话更划算。", actionHint: "推荐周卡", frequency: "common" },
              { textEn: "Yeah, we got day passes for $15 and weekly for $50. Most visitors go with the weekly.", textZh: "有，日卡15美元，周卡50美元。大多数访客都选周卡。", actionHint: "告知常见选择", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the weekly pass then. What's included?",
            textZh: "那我办周卡吧。都包含什么？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "The weekly pass gives you full access to the weight room, cardio machines, the swimming pool, and the locker rooms with showers. Group classes are an extra $5 per class, or you can add an unlimited class pass for $20 for the week.",
            textZh: "周卡包含力量区、有氧器械、游泳池和带淋浴的更衣室。团课每节另外收5美元，或者加20美元可以获得一周无限次团课。",
            keyPhrases: [
              { en: "full access", zh: "全部使用权" },
              { en: "weight room", zh: "力量训练区" },
              { en: "cardio machines", zh: "有氧器械" },
              { en: "locker rooms", zh: "更衣室" },
              { en: "group classes", zh: "团体课程" },
            ],
            alternativeExpressions: [
              { textEn: "You get everything — weights, cardio, pool, locker rooms. Classes are extra though, $5 each or $20 unlimited for the week.", textZh: "全包——力量区、有氧、泳池、更衣室。团课另外算，每节5美元或者20美元一周不限次。", actionHint: "列举包含项目", frequency: "common" },
              { textEn: "The weekly gives you full run of the place. Only thing not included is group classes — those are 5 bucks a pop or 20 for all-you-can-take.", textZh: "周卡让你随便用。唯一不包的是团课——每节5块或者20块随便上。", actionHint: "强调几乎全包", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll add the class pass too. What do I need to sign up?",
            textZh: "我也加上团课吧。注册需要什么？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Just a photo ID and a credit card. I'll also need you to sign a liability waiver — it's standard, just says you exercise at your own risk. Let me print that for you.",
            textZh: "只需要一个带照片的证件和信用卡。还需要你签一份免责声明——这是标准流程，就是说你自己承担运动风险。我帮你打印出来。",
            keyPhrases: [
              { en: "photo ID", zh: "带照片的证件" },
              { en: "liability waiver", zh: "免责声明/免责协议" },
              { en: "at your own risk", zh: "自行承担风险" },
            ],
            culturalNote: "几乎所有美国健身房都要签 liability waiver（免责声明），这在欧美是法律要求，不用紧张。",
            alternativeExpressions: [
              { textEn: "Just need a photo ID and a card to put on file. Oh, and there's a waiver to sign — standard stuff, nothing scary.", textZh: "只要一个带照片的证件和一张卡留档。哦，还有一份免责书要签——常规流程，别紧张。", actionHint: "简单说明流程", frequency: "common" },
              { textEn: "Bring your ID and a credit card. We'll also have you sign a quick liability form — everybody does it.", textZh: "带上证件和信用卡。还要签一个简单的免责表——每个人都签的。", actionHint: "强调人人都签", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Can I use my passport as ID?",
            textZh: "好的。可以用护照当证件吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Passport works fine. Alright, you're all set! A few rules — please wipe down the equipment after use, re-rack your weights, and no outside shoes on the gym floor. We have lockers you can use — just bring your own lock or you can buy one here for $5.",
            textZh: "护照可以。好了，你都办好了！几条规则——用完器械请擦干净，用完的杠铃片请放回原位，不要穿户外鞋进训练区。我们有储物柜可以用——自带锁或者在这里花5美元买一个。",
            keyPhrases: [
              { en: "wipe down", zh: "擦干净" },
              { en: "re-rack", zh: "放回原位（杠铃/哑铃）" },
              { en: "outside shoes", zh: "户外鞋" },
              { en: "bring your own lock", zh: "自带锁" },
            ],
            culturalNote: "在美国健身房，用完器械不擦、不归位杠铃片是很不礼貌的行为，会被其他人投诉。",
            alternativeExpressions: [
              { textEn: "Passport's fine! You're good to go. Quick rundown — wipe your equipment, put weights back, and wear indoor shoes on the floor. Lockers are free, just bring a lock.", textZh: "护照可以！你都办好了。简单说一下——用完器械要擦，杠铃片放回去，穿室内鞋进场。储物柜免费，自带锁。", actionHint: "快速说明规则", frequency: "common" },
              { textEn: "Yep, passport works! Okay, just a few house rules — clean up after yourself, rack your weights, no street shoes on the gym floor. Easy stuff.", textZh: "行，护照可以！几条规矩——用完自己收拾，杠铃片归位，不穿外面的鞋进场。简单吧。", actionHint: "轻松说明注意事项", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Understood. Where's the weight room and the pool?",
            textZh: "明白了。力量区和游泳池在哪？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "The weight room is straight ahead through the double doors. Cardio is on the second floor. The pool is downstairs — you'll need to shower before entering the pool area. The group class schedule is on the board right over there, and you can also check it on our app.",
            textZh: "力量区穿过那道双开门直走。有氧在二楼。游泳池在楼下——进泳池区域之前需要先冲个澡。团课时间表在那边的告示板上，也可以在我们的App上查。",
            keyPhrases: [
              { en: "double doors", zh: "双开门" },
              { en: "shower before entering", zh: "进入前先冲澡" },
              { en: "class schedule", zh: "课程时间表" },
            ],
            alternativeExpressions: [
              { textEn: "Weights are through those doors, cardio's upstairs, and the pool is one level down. Don't forget to rinse off before the pool. Class schedule's on the board or our app.", textZh: "力量区穿那道门，有氧在楼上，泳池在楼下。下泳池前记得冲一下。课表在告示板上或者我们的App上。", actionHint: "指路并提醒", frequency: "common" },
              { textEn: "Head straight for the weight room. Pool's downstairs — just shower first. Check the app for class times.", textZh: "直走就是力量区。泳池在楼下——先冲个澡。课程时间看App。", actionHint: "简洁指路", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect, thank you! One more question — what are your hours?",
            textZh: "好的，谢谢！再问一下——你们营业时间是什么？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "We're open Monday through Friday, 5 AM to 11 PM, and weekends 7 AM to 9 PM. Enjoy your workout!",
            textZh: "周一到周五早上5点到晚上11点，周末早上7点到晚上9点。祝你训练愉快！",
            keyPhrases: [
              { en: "Monday through Friday", zh: "周一到周五" },
            ],
            alternativeExpressions: [
              { textEn: "Weekdays we're open 5 to 11, weekends 7 to 9. Have a good workout!", textZh: "工作日5点到11点，周末7点到9点。好好练！", actionHint: "简述营业时间", frequency: "common" },
              { textEn: "We open early — 5 AM on weekdays. Close at 11. Weekends are 7 to 9. Enjoy!", textZh: "我们开门很早——工作日早上5点。11点关门。周末7到9。享受锻炼！", actionHint: "强调开门早", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks a lot!",
            textZh: "非常感谢！",
          },
        ],
      },

      // --- Flow 2: 上团课→跟教练沟通 ---
      {
        id: "group-class",
        titleZh: "参加团体课程",
        titleEn: "Joining a Group Class",
        description: "参加瑜伽或拳击等团体课程，和教练沟通水平和需求",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, is this where the boxing class is?",
            textZh: "打扰一下，拳击课是在这里吗？",
          },
          {
            speaker: "them",
            role: "教练",
            textEn: "Yes! You're in the right place. I'm Coach Sarah. Have you done boxing before, or is this your first time?",
            textZh: "是的！你来对了。我是Sarah教练。你之前练过拳击吗，还是第一次？",
            keyPhrases: [
              { en: "you're in the right place", zh: "你来对了" },
              { en: "first time", zh: "第一次" },
            ],
            alternativeExpressions: [
              { textEn: "Yep! I'm Coach Sarah. You boxed before or are you brand new to this?", textZh: "对！我是Sarah教练。你之前打过拳击还是完全没接触过？", actionHint: "热情问经验", frequency: "common" },
              { textEn: "Right place! Welcome. Quick question — first timer or have you thrown some punches before?", textZh: "没错！欢迎。问一下——第一次来还是之前练过？", actionHint: "快速了解水平", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "First time doing boxing. I usually do yoga and some weight training, so I'm reasonably fit, but boxing is totally new to me.",
            textZh: "第一次练拳击。我平时做瑜伽和一些力量训练，体能还行，但拳击完全没接触过。",
          },
          {
            speaker: "them",
            role: "教练",
            textEn: "No worries — this is a beginner-friendly class. We'll start with basic footwork and punches. I'll show you how to wrap your hands. Do you have your own gloves, or do you need to borrow a pair?",
            textZh: "没关系——这是一节适合初学者的课。我们会从基本步法和出拳开始。我教你怎么缠手。你有自己的拳套吗，还是需要借一副？",
            keyPhrases: [
              { en: "beginner-friendly", zh: "适合初学者" },
              { en: "footwork", zh: "步法" },
              { en: "wrap your hands", zh: "缠手（用绷带裹手保护）" },
              { en: "gloves", zh: "拳套" },
            ],
            alternativeExpressions: [
              { textEn: "All good — everyone starts somewhere! We'll go over the basics. Got your own gloves or need a loaner pair?", textZh: "没关系——谁都是从零开始的！我们会教基础动作。你有自己的拳套还是需要借一副？", actionHint: "鼓励新手", frequency: "common" },
              { textEn: "Perfect, this class is great for beginners. I'll show you how to wrap up. Need gloves?", textZh: "太好了，这节课很适合初学者。我教你怎么缠手。需要借拳套吗？", actionHint: "介绍课程适合初学者", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I need to borrow gloves. Also, I have a shoulder issue — my left shoulder gets sore sometimes. Should I be worried?",
            textZh: "我需要借拳套。另外我左肩有点问题——有时候会酸痛。有影响吗？",
            culturalNote: "上课前主动告知教练伤病情况非常重要，教练会帮你调整动作避免受伤。",
          },
          {
            speaker: "them",
            role: "教练",
            textEn: "Thanks for letting me know. We'll modify some movements for your shoulder — no overhead punches on the left side. If anything feels off during class, just raise your hand and I'll come over. Don't push through pain.",
            textZh: "谢谢你告诉我。我们会针对你的肩膀调整一些动作——左侧不做上举拳。上课中如果有任何不舒服，举手示意我就过来。不要硬撑着练。",
            keyPhrases: [
              { en: "modify", zh: "调整/修改" },
              { en: "overhead punches", zh: "上举拳" },
              { en: "feels off", zh: "感觉不对劲" },
              { en: "push through pain", zh: "硬撑着/忍痛坚持" },
            ],
            alternativeExpressions: [
              { textEn: "Good to know. We'll skip anything overhead on the left. If something hurts, just wave me down — don't tough it out.", textZh: "了解了。左边不做上举动作。如果疼的话招呼我——不要硬撑。", actionHint: "针对伤病调整", frequency: "common" },
              { textEn: "Thanks for the heads-up. I'll give you alternatives for that shoulder. Just flag me if anything doesn't feel right.", textZh: "谢谢你提前说。我会给你替代动作保护肩膀。有任何不舒服就告诉我。", actionHint: "提供替代动作", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. How long is the class, and how intense does it get?",
            textZh: "明白了。这节课多长时间，强度大吗？",
          },
          {
            speaker: "them",
            role: "教练",
            textEn: "It's 45 minutes — 10 minutes warm-up, 25 minutes of combos on the bags, and 10 minutes of cool-down and stretching. It can get pretty intense in the middle, but go at your own pace. There's no shame in taking a breather.",
            textZh: "45分钟——10分钟热身，25分钟沙袋组合练习，10分钟放松和拉伸。中间强度会比较大，但按照你自己的节奏来就好。休息一下完全没问题。",
            keyPhrases: [
              { en: "warm-up", zh: "热身" },
              { en: "combos on the bags", zh: "沙袋组合拳" },
              { en: "cool-down", zh: "放松/冷却" },
              { en: "go at your own pace", zh: "按自己节奏来" },
              { en: "take a breather", zh: "喘口气/休息一下" },
            ],
            alternativeExpressions: [
              { textEn: "It's 45 minutes total. Gets pretty spicy in the middle, but take breaks whenever you need — no judgment.", textZh: "总共45分钟。中间强度会比较大，但随时可以休息——没人会说你。", actionHint: "说明可以休息", frequency: "common" },
              { textEn: "About 45 minutes — warm-up, bag work, cool-down. It's a solid workout but just go at your own speed.", textZh: "大概45分钟——热身、打沙袋、拉伸放松。运动量不小，但按自己的节奏来就好。", actionHint: "分段介绍", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds good. Where should I stand?",
            textZh: "好的。我站哪里？",
          },
          {
            speaker: "them",
            role: "教练",
            textEn: "Grab a spot near the front so I can keep an eye on your form. Here are your gloves — size medium should work. And here's a hand wrap. Let me show you how to put it on.",
            textZh: "站前面一点，这样我能看到你的动作是否标准。这是你的拳套——中号应该合适。这是缠手带。我教你怎么缠。",
            keyPhrases: [
              { en: "keep an eye on", zh: "留意/关注" },
              { en: "form", zh: "动作/姿势（是否标准）" },
              { en: "hand wrap", zh: "缠手带" },
            ],
            alternativeExpressions: [
              { textEn: "Come up front where I can see you. Here — medium gloves and a hand wrap. I'll help you get them on.", textZh: "来前面站，我看得到你。给——中号拳套和缠手带。我帮你戴上。", actionHint: "安排位置和装备", frequency: "common" },
              { textEn: "Set up near me so I can watch your form. Try these gloves — and here's a wrap. Lemme show you how it goes.", textZh: "在我附近站好，我好看你的动作。试试这副拳套——缠手带也给你。我教你怎么用。", actionHint: "就近指导", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. Should I wrap it tight, or just snug?",
            textZh: "谢谢。要缠紧一点还是适度贴合就好？",
          },
          {
            speaker: "them",
            role: "教练",
            textEn: "Snug but not too tight — you still want blood flow to your fingers. If your fingers start tingling, loosen it up. Alright, everyone — let's get started! Feet shoulder-width apart, hands up by your chin!",
            textZh: "贴合但别太紧——要保证手指血液循环。如果手指开始发麻，就松一松。好了，各位——开始了！双脚与肩同宽，双手举到下巴位置！",
            keyPhrases: [
              { en: "snug", zh: "贴合的" },
              { en: "blood flow", zh: "血液循环" },
              { en: "tingling", zh: "发麻" },
              { en: "shoulder-width apart", zh: "与肩同宽" },
            ],
            culturalNote: "美国的团课气氛通常很活跃，教练会大声指挥、放音乐，跟国内健身房风格有些不同。",
            alternativeExpressions: [
              { textEn: "Nice and snug — don't cut off your circulation though. If your fingers go numb, loosen it. Okay, let's go! Hands up, feet apart!", textZh: "贴合就好——但别太紧影响血液循环。手指发麻就松一松。好了，开始！双手举起来，双脚分开！", actionHint: "叮嘱后开始训练", frequency: "common" },
              { textEn: "Firm but not too tight — you want to feel your fingers. Alright everyone, let's do this! Fighter stance!", textZh: "紧一点但别太死——你要能感觉到手指。好了各位，开练！战斗姿势！", actionHint: "提示后集体开始", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 菜市场/农贸市场 ====================
  {
    id: "daily-life-grocery",
    category: "daily-life",
    titleZh: "菜市场/农贸市场",
    titleEn: "Farmers Market / Grocery Market",
    description: "在菜市场或农贸市场买水果蔬菜、讨价还价，以及在farmers market了解当地特产",
    otherRole: "摊主",
    otherRoleIcon: "🧑‍🌾",
    flows: [
      // --- Flow 1: 买水果蔬菜+问价+讨价还价 ---
      {
        id: "buy-produce",
        titleZh: "买水果蔬菜",
        titleEn: "Buying Fruits & Vegetables",
        description: "在露天市场挑选水果蔬菜，询问价格，适当讨价还价",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "摊主",
            textEn: "Morning! Everything's fresh today — just picked this morning. What can I get you?",
            textZh: "早上好！今天都是新鲜的——今早刚采的。你想要点什么？",
            keyPhrases: [
              { en: "just picked", zh: "刚采摘的" },
              { en: "what can I get you", zh: "你想要什么" },
            ],
            alternativeExpressions: [
              { textEn: "Hey there! Everything got picked this morning. What catches your eye?", textZh: "嘿！都是今早摘的。看上什么了？", actionHint: "热情揽客", frequency: "common" },
              { textEn: "Good morning! We got some beautiful stuff today. Looking for anything specific?", textZh: "早上好！今天有好多好东西。有想找什么特别的吗？", actionHint: "热情招呼", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Hi! Those strawberries look amazing. How much are they?",
            textZh: "你好！那些草莓看起来真好。多少钱？",
            casualVersion: "Hey, how much for the strawberries?",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "$6 a basket. They're organic — no pesticides, no chemicals. Want to try one?",
            textZh: "一篮6美元。有机的——没有农药，没有化学物质。要尝一个吗？",
            keyPhrases: [
              { en: "a basket", zh: "一篮" },
              { en: "organic", zh: "有机的" },
              { en: "pesticides", zh: "农药" },
              { en: "try one", zh: "尝一个" },
            ],
            culturalNote: "美国农贸市场（farmers market）很多摊位提供免费试吃（samples），可以先尝后买。",
            alternativeExpressions: [
              { textEn: "Six bucks a basket. All organic, no sprays. Go ahead, try one — they're amazing.", textZh: "六块一篮。全有机，没打药。尝一个吧——特别好吃。", actionHint: "邀请试吃", frequency: "common" },
              { textEn: "Those are $6. No pesticides, nothing — straight from the farm. Wanna sample one?", textZh: "那些6美元。没有农药什么的——直接从农场来的。要尝尝吗？", actionHint: "强调天然无污染", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Mm, those are really sweet! I'll take two baskets. What about these peaches — are they ripe?",
            textZh: "嗯，真的很甜！我要两篮。这些桃子怎么样——熟了吗？",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "These ones are ready to eat today. Those over there need a day or two — they'll be perfect by Wednesday. The peaches are $4 a pound.",
            textZh: "这些今天就能吃。那边那些还要一两天——到周三就正好。桃子每磅4美元。",
            keyPhrases: [
              { en: "ready to eat", zh: "可以直接吃的/已经熟了" },
              { en: "a pound", zh: "一磅" },
            ],
            alternativeExpressions: [
              { textEn: "These right here are good to go. Those ones need another day or so. Peaches run $4 a pound.", textZh: "这些可以直接吃。那边的还要一两天。桃子4块一磅。", actionHint: "分类介绍成熟度", frequency: "common" },
              { textEn: "Grab these if you want to eat today. The others need a couple days to ripen up. Four bucks a pound.", textZh: "要今天吃就拿这些。其他的还要等几天才熟。四块一磅。", actionHint: "按食用时间推荐", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take about three pounds of the ripe ones. If I buy the strawberries and peaches together, can you give me a small discount?",
            textZh: "我要大概三磅熟的。如果草莓和桃子一起买，能便宜一点吗？",
            culturalNote: "在美国farmers market，讨价还价不像亚洲那么普遍，但买多了或接近收摊时，很多摊主会给优惠。",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "Tell you what — two baskets of strawberries and three pounds of peaches, I'll do $22 even instead of $24. Sound fair?",
            textZh: "这样吧——两篮草莓加三磅桃子，算你22美元整，不用24美元。怎么样？",
            keyPhrases: [
              { en: "tell you what", zh: "这样吧（提出方案）" },
              { en: "even", zh: "整数/凑个整" },
              { en: "sound fair", zh: "觉得合理吗" },
            ],
            alternativeExpressions: [
              { textEn: "How about this — I'll do everything for 22 flat. Save you a couple bucks.", textZh: "这样吧——全部算你22块整。给你省两块。", actionHint: "主动让利", frequency: "common" },
              { textEn: "Since you're buying a bunch, I can knock two bucks off. Call it $22?", textZh: "你买这么多，我给你减两块。22块行不？", actionHint: "批量优惠", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Deal! Do you also have any leafy greens? I'm looking for some spinach or kale.",
            textZh: "成交！你这里还有绿叶菜吗？我想要菠菜或者羽衣甘蓝。",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "Sure — the spinach is $3 a bunch, and the kale is $3.50. The kale is really tender today, great for salads. I also have Swiss chard if you're interested.",
            textZh: "有的——菠菜一把3美元，羽衣甘蓝3.5美元。今天的羽衣甘蓝特别嫩，做沙拉很好。我还有瑞士甜菜，你要看看吗。",
            keyPhrases: [
              { en: "a bunch", zh: "一把/一扎" },
              { en: "tender", zh: "嫩的" },
              { en: "Swiss chard", zh: "瑞士甜菜" },
            ],
            alternativeExpressions: [
              { textEn: "Got spinach at $3 a bunch and kale for $3.50. The kale is super fresh today — perfect for a salad.", textZh: "菠菜3块一把，羽衣甘蓝3块5。今天的羽衣甘蓝特别新鲜——做沙拉最好了。", actionHint: "推荐当日特鲜", frequency: "common" },
              { textEn: "Yep — spinach and kale, both around three bucks. I'd go with the kale today, it's beautiful.", textZh: "有——菠菜和羽衣甘蓝，都三块左右。今天我推荐羽衣甘蓝，特别好。", actionHint: "推荐今日最佳", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take one bunch of spinach. Do you take credit cards, or is it cash only?",
            textZh: "来一把菠菜。你们收信用卡吗，还是只收现金？",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "We take cards — there's a $1 fee for card payments under $10, though. Your total is $25, so no fee. Want a bag?",
            textZh: "收卡的——不过10美元以下刷卡有1美元手续费。你一共25美元，不收手续费。要袋子吗？",
            keyPhrases: [
              { en: "fee", zh: "手续费" },
              { en: "card payments", zh: "刷卡支付" },
              { en: "total", zh: "总共" },
            ],
            culturalNote: "一些小摊位对小额刷卡收手续费是很常见的，可以多买一点凑够金额。建议在farmers market随身带些现金。",
            alternativeExpressions: [
              { textEn: "We take cards! There's a buck fee under $10 though. You're at $25, so no extra charge. Need a bag?", textZh: "可以刷卡！不过10块以下要收1块手续费。你一共25块，不用加钱。要袋子吗？", actionHint: "说明刷卡规则", frequency: "common" },
              { textEn: "Yep, cash or card. Under ten bucks there's a small card fee, but you're good. Bag?", textZh: "行，现金或刷卡都可以。十块以下刷卡有点小手续费，但你没问题。要袋子吗？", actionHint: "确认支付方式", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. Thanks so much — everything looks wonderful!",
            textZh: "好的，要一个。太谢谢了——东西看起来都很棒！",
          },
        ],
      },

      // --- Flow 2: 在farmers market买当地特产+问吃法 ---
      {
        id: "local-specialty",
        titleZh: "买当地特产",
        titleEn: "Buying Local Specialties",
        description: "在farmers market发现不认识的当地特产，询问是什么、怎么吃",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, what are these? I've never seen them before. They look interesting.",
            textZh: "请问，这些是什么？我以前没见过。看起来很有意思。",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "Those are heirloom tomatoes — each one is a little different in color and shape. They look ugly compared to store-bought ones, but the flavor is out of this world. Way better than supermarket tomatoes.",
            textZh: "这些是传家宝番茄——每个颜色和形状都不太一样。比超市卖的长得丑一些，但味道超级棒。比超市番茄好吃太多了。",
            keyPhrases: [
              { en: "heirloom tomatoes", zh: "传家宝番茄（老品种番茄）" },
              { en: "store-bought", zh: "超市买的" },
              { en: "out of this world", zh: "超级好/极其出色" },
            ],
            culturalNote: "Heirloom tomatoes 是传统老品种番茄，在美国farmers market非常受欢迎，虽然外形不规则但风味浓郁。",
            alternativeExpressions: [
              { textEn: "Those are heirlooms — old-school varieties. They look funky but taste incredible. Way better than grocery store tomatoes.", textZh: "那些是传家宝番茄——老品种的。长得奇怪但味道超好。比超市的好吃太多了。", actionHint: "介绍品种特色", frequency: "common" },
              { textEn: "Heirloom tomatoes! Every one's different — they're not pretty but the flavor is insane. Try a slice!", textZh: "传家宝番茄！每个都不一样——不好看但味道绝了。尝一片！", actionHint: "热情推荐试吃", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "They're so colorful! What's the best way to eat them?",
            textZh: "颜色真好看！怎么吃最好？",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "Honestly, the simpler the better. Just slice them thick, drizzle some good olive oil, sprinkle sea salt and fresh basil — that's a perfect summer salad right there. You don't want to cook them because they're so flavorful raw.",
            textZh: "说实话，越简单越好。切厚片，淋一点好的橄榄油，撒点海盐和新鲜罗勒叶——这就是完美的夏日沙拉了。不建议烹饪，因为生吃味道就已经很好了。",
            keyPhrases: [
              { en: "drizzle", zh: "淋上（少量液体）" },
              { en: "sprinkle", zh: "撒上" },
              { en: "sea salt", zh: "海盐" },
              { en: "basil", zh: "罗勒叶/九层塔" },
              { en: "flavorful", zh: "味道浓郁的" },
            ],
            alternativeExpressions: [
              { textEn: "Keep it simple! Thick slices, good olive oil, a pinch of salt. Maybe some basil. That's a perfect summer plate.", textZh: "越简单越好！切厚片，淋好橄榄油，一撮盐。也许加点罗勒。完美的夏日拼盘。", actionHint: "分享简单吃法", frequency: "common" },
              { textEn: "Just slice 'em up, hit 'em with some olive oil and salt. Don't cook them — they're too good raw.", textZh: "切开就行，淋点橄榄油加盐。别煮——生吃太好吃了。", actionHint: "强调生吃最佳", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds delicious. I'll take four. And what about this — is this a jam or a sauce?",
            textZh: "听起来好好吃。给我来四个。还有这个——这是果酱还是酱汁？",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "That's my homemade fig jam. I grow the figs in my own orchard and make the jam in small batches. It's amazing on toast, with cheese, or even on vanilla ice cream.",
            textZh: "那是我自制的无花果酱。无花果是我自己果园种的，小批量手工做的。涂面包上、配奶酪、甚至放香草冰淇淋上都超级好吃。",
            keyPhrases: [
              { en: "homemade", zh: "自制的/手工制作的" },
              { en: "fig jam", zh: "无花果酱" },
              { en: "orchard", zh: "果园" },
              { en: "small batches", zh: "小批量" },
            ],
            alternativeExpressions: [
              { textEn: "That's my homemade fig jam! Figs from my backyard, made in small batches. It's killer on toast or with some brie.", textZh: "那是我自制的无花果酱！用我后院的无花果，小批量做的。涂吐司上或者配布里奶酪绝了。", actionHint: "自豪地介绍产品", frequency: "common" },
              { textEn: "My fig jam — everything's from scratch. Amazing on crackers, cheese boards, even ice cream.", textZh: "我的无花果酱——全是从头做的。配饼干、奶酪拼盘、甚至冰淇淋都超好吃。", actionHint: "推荐搭配吃法", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh, I love figs! Can I taste it?",
            textZh: "哦，我喜欢无花果！可以尝尝吗？",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "Of course — here's a little cracker with some on it. I also have lavender honey and Meyer lemon marmalade if you want to sample those too.",
            textZh: "当然——这是抹了一点果酱的小饼干。我还有薰衣草蜂蜜和梅耶柠檬果酱，要不要也尝尝？",
            keyPhrases: [
              { en: "cracker", zh: "饼干/薄脆" },
              { en: "lavender honey", zh: "薰衣草蜂蜜" },
              { en: "marmalade", zh: "果酱（带果皮的）" },
              { en: "sample", zh: "试吃/品尝" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! Here, try it on a cracker. I've also got lavender honey and lemon marmalade if you want a taste.", textZh: "当然！给你，配小饼干试试。我还有薰衣草蜂蜜和柠檬果酱，要不要也尝尝？", actionHint: "提供试吃并推荐其他", frequency: "common" },
              { textEn: "Go for it! There's a tasting station right here. Try the honey too while you're at it.", textZh: "来吧！这里就有试吃台。顺便也尝尝蜂蜜。", actionHint: "引导到试吃区", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Wow, the fig jam is incredible! I'll definitely take a jar. How long does it keep once opened?",
            textZh: "哇，无花果酱太好吃了！我一定要买一罐。开封后能保存多久？",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "Once you open it, keep it refrigerated and it'll last about three weeks. Unopened, it's good for six months. It also makes a great gift — I can wrap it up nice if you want.",
            textZh: "开封后放冰箱，大概能保存三周。没开封的话可以放六个月。也很适合当礼物——如果你要的话我可以给你包装得漂亮一点。",
            keyPhrases: [
              { en: "keep it refrigerated", zh: "放冰箱保存" },
              { en: "unopened", zh: "未开封的" },
              { en: "wrap it up", zh: "包装起来" },
            ],
            alternativeExpressions: [
              { textEn: "Keep it in the fridge once you open it — good for about three weeks. Sealed, it'll last months. Makes a great gift too!", textZh: "开封后放冰箱——大概能放三周。没开封的话能放好几个月。送人也特别好！", actionHint: "说明保存方法", frequency: "common" },
              { textEn: "Once opened, pop it in the fridge — three weeks tops. Unopened you've got six months. I can gift-wrap if you want.", textZh: "开了以后放冰箱——最多三周。没开的话六个月。要的话我可以包装成礼盒。", actionHint: "说明保质期并提供包装", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Actually, yes — I'd like to bring two jars back as gifts. Can you wrap them separately?",
            textZh: "好主意——我买两罐带回去当礼物。能分开包装吗？",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "Absolutely! Each jar is $12, so two jars plus the tomatoes — that's $32 altogether. I'll bag the tomatoes separately so they don't get squished. Here's my card too — you can order online if you want more shipped to you.",
            textZh: "没问题！每罐12美元，两罐加上番茄——一共32美元。番茄我给你分开装，免得压坏。这是我的名片——如果想要更多可以网上订购寄给你。",
            keyPhrases: [
              { en: "altogether", zh: "总共" },
              { en: "squished", zh: "压坏/挤坏" },
              { en: "shipped to you", zh: "寄给你" },
            ],
            culturalNote: "很多farmers market的摊主都有自己的网站或社交媒体，可以网上订购配送。这也是美国小农经济的一个特色。",
            alternativeExpressions: [
              { textEn: "Two jars plus the tomatoes — that's $32. I'll wrap the jars and bag the tomatoes separate so nothing gets crushed. Here's my card if you want to order more online.", textZh: "两罐加番茄——32块。果酱给你包好，番茄分开装免得压坏。这是我的名片，想要更多可以网上订。", actionHint: "计算总价并提供包装", frequency: "common" },
              { textEn: "That's 32 bucks for everything. I'll pack it all up nice for you. And hey, we ship too — check our website.", textZh: "全部32块。我给你包好。对了，我们也可以发快递——看我们的网站。", actionHint: "结账并推荐网购", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's awesome. Thank you so much — I'll definitely be back next week!",
            textZh: "太好了。非常感谢——我下周一定再来！",
          },
        ],
      },
    ],
  },

  // ==================== 宠物相关 ====================
  {
    id: "daily-life-pet",
    category: "daily-life",
    titleZh: "宠物相关",
    titleEn: "Pet Services",
    description: "在国外带宠物去宠物店、看兽医、寻找宠物友好场所",
    otherRole: "宠物店员/兽医",
    otherRoleIcon: "🐾",
    flows: [
      // --- Flow 1: 宠物店+宠物友好场所 ---
      {
        id: "pet-store-friendly",
        titleZh: "宠物店与宠物友好场所",
        titleEn: "Pet Store & Pet-friendly Places",
        description: "在宠物店购买用品、询问宠物友好的餐厅和公园",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm visiting with my dog and I need to pick up some supplies. Do you carry travel-size dog food and portable water bowls?",
            textZh: "你好，我带着狗旅行，需要买些用品。你们有旅行装的狗粮和便携式水碗吗？",
          },
          {
            speaker: "them",
            role: "宠物店员",
            textEn: "Welcome! Yes, we have small bags of kibble right over here — different brands and sizes. For portable bowls, we have collapsible silicone ones that fold flat — super convenient for travel. They're $8 each.",
            textZh: "欢迎！有的，小袋狗粮在这边——不同品牌和大小的都有。便携碗的话，我们有可折叠的硅胶碗——旅行超方便。每个8美元。",
            keyPhrases: [
              { en: "kibble", zh: "干狗粮" },
              { en: "collapsible", zh: "可折叠的" },
              { en: "silicone", zh: "硅胶" },
              { en: "fold flat", zh: "折叠成平的" },
            ],
            vocabNotes: {
              kibble: {
                meaningInContext: "在这句话里表示：干燥的颗粒状宠物食品",
                similarUsage: "类似用法：My dog prefers wet food to kibble.",
              },
            },
            alternativeExpressions: [
              { textEn: "We've got small bags of kibble right here, different brands. And these collapsible bowls are great for travel — 8 bucks.", textZh: "小袋狗粮在这边，不同品牌的。这些折叠碗旅行用特别方便——8块。", actionHint: "介绍便携用品", frequency: "common" },
              { textEn: "Travel food's over here — all sizes. And grab one of these silicone bowls, they fold flat. Super handy.", textZh: "旅行装狗粮在这边——各种大小的。拿一个这种硅胶碗，能折平。超方便。", actionHint: "推荐折叠碗", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take one bowl and a small bag of the grain-free chicken flavor. My dog also needs a new leash — he chewed through the last one.",
            textZh: "给我一个碗和一小袋无谷鸡肉味的。我的狗还需要一条新牵引绳——他把上一条咬断了。",
          },
          {
            speaker: "them",
            role: "宠物店员",
            textEn: "Ha, they do that! Leashes are on the wall over there. We have nylon, leather, and retractable ones. For a chewer, I'd suggest the heavy-duty nylon or the leather — they last much longer. What size is your dog?",
            textZh: "哈哈，狗就是这样！牵引绳在那边墙上。有尼龙、皮革和伸缩式的。如果它喜欢咬东西，我建议加厚尼龙或皮革的——更耐用。你的狗多大？",
            keyPhrases: [
              { en: "nylon", zh: "尼龙" },
              { en: "leather", zh: "皮革" },
              { en: "retractable", zh: "伸缩式的" },
              { en: "heavy-duty", zh: "加厚/加固的" },
              { en: "chewer", zh: "喜欢咬东西的狗" },
            ],
            alternativeExpressions: [
              { textEn: "Ha, classic! Leashes are on that wall — nylon, leather, retractable. If your dog chews, go heavy-duty or leather. What size dog?", textZh: "哈哈，经典！牵引绳在那面墙上——尼龙、皮革、伸缩的。狗爱咬东西的话选加厚尼龙或皮革。多大的狗？", actionHint: "按狗的习惯推荐", frequency: "common" },
              { textEn: "Oh yeah, they love doing that! For a chewer I'd skip the retractable — grab a tough nylon or leather one. How big is your pup?", textZh: "是啊，狗都这样！爱咬的话别选伸缩的——拿加厚尼龙或者皮革的。你的狗多大？", actionHint: "排除不适合的选项", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "He's a medium-sized golden retriever, about 60 pounds. I'll go with the leather one. Also, can you recommend any pet-friendly restaurants or parks nearby?",
            textZh: "他是中型金毛寻回犬，大约60磅。我选皮革的。另外，你能推荐附近有宠物友好的餐厅或公园吗？",
          },
          {
            speaker: "them",
            role: "宠物店员",
            textEn: "Sure! Riverside Park is amazing for dogs — they have an off-leash area where your dog can run free. Just make sure he's up to date on vaccinations and you bring poop bags. For restaurants, most places with outdoor patios allow dogs — Café Milano and The Green Table both have water bowls out for dogs.",
            textZh: "当然！河滨公园对狗来说很棒——有一个免牵引区，你的狗可以自由跑。确保疫苗是最新的，带上拾便袋。餐厅的话，大多数有户外露台的地方允许带狗——Café Milano和The Green Table都会给狗准备水碗。",
            keyPhrases: [
              { en: "off-leash area", zh: "免牵引区" },
              { en: "run free", zh: "自由跑" },
              { en: "up to date on vaccinations", zh: "疫苗是最新的" },
              { en: "poop bags", zh: "拾便袋" },
              { en: "outdoor patios", zh: "户外露台" },
            ],
            culturalNote: "在美国，遛狗时必须用牵引绳（除了指定的 off-leash area），必须清理狗的排泄物。不遵守可能被罚款。很多城市对带狗进室内餐厅有限制，但户外用餐区通常欢迎。",
            alternativeExpressions: [
              { textEn: "Riverside Park has a great dog run — he can go off-leash there. Just make sure his shots are up to date. For food, try Café Milano — they're super dog-friendly.", textZh: "河滨公园有个很棒的狗跑区——可以不栓绳。确保疫苗打齐了。吃饭的话，试试Café Milano——对狗特别友好。", actionHint: "推荐遛狗地点和餐厅", frequency: "common" },
              { textEn: "Check out Riverside Park — off-leash area's awesome. And most patios downtown let you bring dogs. Bring poop bags though!", textZh: "去河滨公园看看——免牵引区特别好。市中心大多数露台餐厅都能带狗。记得带拾便袋！", actionHint: "推荐并提醒带袋子", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, I'll check those out. Do I need to keep him on a leash on the sidewalk? The rules might be different from back home.",
            textZh: "好的，我去看看。在人行道上需要牵着他吗？规定可能和国内不一样。",
          },
          {
            speaker: "them",
            role: "宠物店员",
            textEn: "Yes, leash laws are strict here. Dogs must be on a leash no longer than 6 feet on all public sidewalks, streets, and in stores that allow pets. Fines can be up to $200 for unleashed dogs in public areas. Also, always clean up after your dog — we sell biodegradable poop bags right at the register.",
            textZh: "是的，这里的牵引法规很严格。所有公共人行道、街道和允许宠物的商店里，狗必须用不超过6英尺的牵引绳。在公共区域不拴绳最高罚款200美元。另外一定要清理狗的排泄物——我们收银台有卖可降解拾便袋。",
            keyPhrases: [
              { en: "leash laws", zh: "牵引法规" },
              { en: "no longer than 6 feet", zh: "不超过6英尺" },
              { en: "fines", zh: "罚款" },
              { en: "unleashed dogs", zh: "不拴绳的狗" },
              { en: "biodegradable", zh: "可降解的" },
            ],
            alternativeExpressions: [
              { textEn: "Oh yeah, leash laws are no joke here. Six feet max, everywhere in public. And always pick up after him — fines are steep.", textZh: "哦对，这里的牵引规定很严的。公共场所最长六英尺。而且一定要捡便便——罚款可不低。", actionHint: "强调法律严格", frequency: "common" },
              { textEn: "Definitely keep him leashed on the street — it's the law. Fines go up to 200 bucks. We sell poop bags at the counter too.", textZh: "街上一定要栓绳——这是法律规定的。罚款最高200块。我们收银台也有卖拾便袋。", actionHint: "告知罚款金额", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. I'll grab a roll of poop bags too. Thanks for all the helpful advice!",
            textZh: "了解了。我再拿一卷拾便袋。谢谢你这么多有用的建议！",
          },
          {
            speaker: "them",
            role: "宠物店员",
            textEn: "You're welcome! Your golden is adorable, by the way. Here's a treat for him — on the house. Enjoy your visit!",
            textZh: "不客气！顺便说一下，你的金毛好可爱。给他一个零食——免费的。祝你们旅行愉快！",
            keyPhrases: [
              { en: "adorable", zh: "可爱的" },
              { en: "treat", zh: "零食/奖励" },
              { en: "on the house", zh: "免费的/请客" },
            ],
            alternativeExpressions: [
              { textEn: "No problem! Your golden is a cutie. Here's a free treat for the good boy. Have fun out there!", textZh: "不客气！你家金毛好可爱。给他一个免费零食。祝你们玩得开心！", actionHint: "送零食道别", frequency: "common" },
              { textEn: "Happy to help! What a sweet dog. Here, a little something for him — on us. Enjoy your trip!", textZh: "很高兴能帮到你！好乖的狗。给他一个小零食——我们请的。旅途愉快！", actionHint: "热情送客", frequency: "common" },
            ],
          },
        ],
      },

      // --- Flow 2: 看兽医 ---
      {
        id: "pet-vet",
        titleZh: "看兽医",
        titleEn: "Visiting the Vet",
        description: "宠物不舒服时带去看兽医，描述症状、诊断和治疗",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to see a vet urgently. My dog has been vomiting since this morning and he's very lethargic. He won't eat anything.",
            textZh: "你好，我需要紧急看兽医。我的狗从今早开始一直呕吐，非常没精神。什么都不吃。",
          },
          {
            speaker: "them",
            role: "兽医前台",
            textEn: "We can fit you in right away — vomiting and lethargy can be serious. Do you have your dog's vaccination records? And is he on any medications?",
            textZh: "我们可以马上安排——呕吐和没精神可能是严重问题。您有狗的疫苗记录吗？他在吃什么药吗？",
            keyPhrases: [
              { en: "fit you in", zh: "给你安排/插队看" },
              { en: "lethargy", zh: "没精神/嗜睡" },
              { en: "vaccination records", zh: "疫苗记录" },
              { en: "medications", zh: "药物" },
            ],
            alternativeExpressions: [
              { textEn: "Bring him right in — vomiting plus lethargy, we don't want to wait on that. Got his shot records? And is he taking anything?", textZh: "直接带进来——又吐又没精神，不能等。有疫苗记录吗？他在吃什么药吗？", actionHint: "紧急安排就诊", frequency: "common" },
              { textEn: "We'll squeeze you in right now. Do you have vaccination papers and is he on any meds?", textZh: "我们现在就给你安排。有疫苗证明吗？他在吃什么药吗？", actionHint: "立即安排", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have his records on my phone. He's not on any medication. We're traveling from China — he ate something from a trash can yesterday at the park. Could that be the cause?",
            textZh: "记录在手机上。他没在吃任何药。我们从中国来旅行——昨天在公园他从垃圾桶里吃了什么东西。可能是这个原因吗？",
          },
          {
            speaker: "them",
            role: "兽医",
            textEn: "Very likely. Eating garbage can cause gastroenteritis or even a blockage if he swallowed something he shouldn't have. Let me examine him. How many times has he vomited today? And is there any diarrhea?",
            textZh: "很有可能。吃垃圾会导致肠胃炎，如果吞了不该吞的东西甚至可能堵塞。让我检查一下。今天吐了几次？有拉肚子吗？",
            keyPhrases: [
              { en: "gastroenteritis", zh: "肠胃炎" },
              { en: "blockage", zh: "堵塞/梗阻" },
              { en: "examine", zh: "检查" },
              { en: "diarrhea", zh: "拉肚子/腹泻" },
            ],
            vocabNotes: {
              gastroenteritis: {
                meaningInContext: "在这句话里表示：胃肠道的炎症，通常由食物问题引起",
                similarUsage: "类似用法：Gastroenteritis is common in dogs that eat spoiled food.",
              },
            },
            alternativeExpressions: [
              { textEn: "That's probably what did it. Eating trash can really mess up their stomachs. Let me check him out. How many times has he thrown up? Any diarrhea?", textZh: "多半就是这个原因。吃垃圾对胃伤害很大。让我检查一下。今天吐了几次？有拉肚子吗？", actionHint: "初步判断并问诊", frequency: "common" },
              { textEn: "Yeah, garbage can cause all sorts of problems — could be a stomach bug or something stuck in there. How many times has he been sick today?", textZh: "是啊，垃圾会引起各种问题——可能是胃肠炎或者吞了什么东西卡住了。今天发病几次了？", actionHint: "分析可能原因", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "He's vomited about four or five times. There's been some diarrhea too. He's been drinking a little water but throwing it back up.",
            textZh: "吐了大概四五次。也有点拉肚子。他喝了一点水但又吐出来了。",
          },
          {
            speaker: "them",
            role: "兽医",
            textEn: "I'm going to do a physical exam and take an X-ray to make sure there's no foreign object causing a blockage. He's also showing signs of dehydration, so I'd like to put him on IV fluids. The exam, X-ray, and fluids together will be about $350. Is that okay to proceed?",
            textZh: "我要做一个体检和拍X光，确认没有异物造成堵塞。他也有脱水的迹象，所以我想给他输液。检查、X光和输液加起来大约350美元。可以进行吗？",
            keyPhrases: [
              { en: "physical exam", zh: "体检" },
              { en: "X-ray", zh: "X光" },
              { en: "foreign object", zh: "异物" },
              { en: "dehydration", zh: "脱水" },
              { en: "IV fluids", zh: "输液/静脉注射液体" },
            ],
            alternativeExpressions: [
              { textEn: "I want to do an exam and an X-ray to rule out a blockage. He's dehydrated too, so we'll start fluids. All together it's about $350 — okay to go ahead?", textZh: "我要做检查和拍X光排除堵塞。他也脱水了，所以要输液。全部大概350美元——可以做吗？", actionHint: "说明检查方案和费用", frequency: "common" },
              { textEn: "Let's get an X-ray to make sure nothing's stuck, and I'll put him on IV since he's dehydrated. Runs about 350 — sound okay?", textZh: "我们拍个X光确认没卡东西，再给他输液补水。大概350——可以吗？", actionHint: "快速说明治疗方案", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please do whatever is needed. Is he going to be okay?",
            textZh: "好的，需要做什么就做。他会没事吧？",
          },
          {
            speaker: "them",
            role: "兽医",
            textEn: "The X-ray looks clear — no blockage. It appears to be a case of dietary indiscretion — basically, his stomach is upset from eating something it shouldn't have. I'll give him anti-nausea medication and some fluids. He should start feeling better in 12 to 24 hours.",
            textZh: "X光片看起来没问题——没有堵塞。看起来是饮食不当——基本上就是吃了不该吃的东西导致胃不舒服。我给他打止吐药和补充液体。12到24小时内应该会好转。",
            keyPhrases: [
              { en: "X-ray looks clear", zh: "X光片没问题" },
              { en: "dietary indiscretion", zh: "饮食不当" },
              { en: "anti-nausea medication", zh: "止吐药" },
              { en: "start feeling better", zh: "开始好转" },
            ],
            alternativeExpressions: [
              { textEn: "Good news — X-ray's clean, no blockage. Just an upset stomach from the garbage. I'll give him some anti-nausea meds and fluids. He should bounce back in a day or so.", textZh: "好消息——X光没问题，没有堵塞。就是吃垃圾导致的胃不舒服。我给他打止吐药和补液。一天左右应该就会好。", actionHint: "报告检查结果", frequency: "common" },
              { textEn: "Nothing stuck in there, which is great. Looks like his stomach just couldn't handle whatever he ate. Meds and fluids, and he'll be feeling better by tomorrow.", textZh: "里面没卡东西，这就好。看起来就是胃受不了他吃的东西。打药加输液，明天就会好起来。", actionHint: "安抚主人", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's such a relief. What should I feed him for the next few days?",
            textZh: "那就放心了。接下来几天给他吃什么？",
          },
          {
            speaker: "them",
            role: "兽医",
            textEn: "Keep him on a bland diet for 3 to 5 days — boiled chicken and white rice in small portions. No treats and no regular food until his stomach settles. I'll send you home with some prescription anti-nausea pills and a probiotic. If the vomiting returns or he gets worse, bring him back immediately.",
            textZh: "3到5天吃清淡饮食——水煮鸡肉和白米饭，少量多餐。胃好之前不给零食和普通狗粮。我给你带一些处方止吐药和益生菌回去。如果又开始呕吐或变严重了，立刻带他回来。",
            keyPhrases: [
              { en: "bland diet", zh: "清淡饮食" },
              { en: "boiled chicken and white rice", zh: "水煮鸡肉和白米饭" },
              { en: "small portions", zh: "少量多餐" },
              { en: "prescription", zh: "处方的" },
              { en: "probiotic", zh: "益生菌" },
            ],
            alternativeExpressions: [
              { textEn: "Bland food only for the next few days — boiled chicken and rice, small meals. No treats. I'm sending you home with anti-nausea pills and a probiotic. If he gets worse, come straight back.", textZh: "接下来几天只吃清淡的——水煮鸡肉配米饭，少量多餐。不给零食。给你带止吐药和益生菌。如果恶化了立刻回来。", actionHint: "详细说明护理方案", frequency: "common" },
              { textEn: "Chicken and rice, small portions, nothing else for 3 to 5 days. I'll give you some meds to take home. Any more vomiting, bring him right back.", textZh: "鸡肉加米饭，少量多餐，别的都不要，3到5天。给你一些药带回去。再吐的话马上带回来。", actionHint: "简洁交代注意事项", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much, doctor. Do you accept pet insurance? We have an international pet insurance plan.",
            textZh: "非常感谢，医生。你们接受宠物保险吗？我们有一份国际宠物保险。",
          },
          {
            speaker: "them",
            role: "兽医",
            textEn: "We don't process insurance claims directly, but I'll give you a detailed invoice with diagnosis codes. You can submit that to your insurance company for reimbursement. Most international pet insurance plans reimburse 70 to 80 percent. Feel better soon, buddy!",
            textZh: "我们不直接处理保险理赔，但我会给你一份带诊断代码的详细发票。你可以提交给保险公司申请报销。大多数国际宠物保险报销70%到80%。快好起来，小家伙！",
            keyPhrases: [
              { en: "detailed invoice", zh: "详细发票" },
              { en: "diagnosis codes", zh: "诊断代码" },
              { en: "submit to your insurance", zh: "提交给保险公司" },
              { en: "reimbursement", zh: "报销" },
            ],
            alternativeExpressions: [
              { textEn: "We don't do direct billing, but I'll give you a detailed receipt with all the codes. Most international plans reimburse 70 to 80 percent. Get well, little guy!", textZh: "我们不直接结算保险，但会给你一份带所有代码的详细收据。大多数国际保险能报70%到80%。快好起来，小家伙！", actionHint: "说明保险报销流程", frequency: "common" },
              { textEn: "You'll need to submit the claim yourself, but I'll make sure the invoice has everything your insurance needs. Hope he feels better soon!", textZh: "你需要自己提交理赔，但我会确保发票上有保险需要的所有信息。希望他快点好起来！", actionHint: "提供理赔文件", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 维修服务 ====================
  {
    id: "daily-life-repair",
    category: "daily-life",
    titleZh: "维修服务",
    titleEn: "Repair Services",
    description: "在国外联系水管工、电工等维修服务人员，描述问题和协商价格",
    otherRole: "维修人员",
    otherRoleIcon: "🔧",
    flows: [
      // --- Flow 1: 联系维修+描述问题+报价 ---
      {
        id: "repair-call",
        titleZh: "联系维修服务",
        titleEn: "Calling for Repairs",
        description: "打电话或现场联系维修人员，描述家里的问题并获取报价",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need a plumber. The toilet in my apartment won't stop running, and there's a leak under the kitchen sink.",
            textZh: "你好，我需要一个水管工。我公寓的马桶一直在流水不停，厨房水槽下面也在漏水。",
            casualVersion: "Hey, my toilet won't stop running and my sink is leaking. Can someone come fix it?",
          },
          {
            speaker: "them",
            role: "维修调度",
            textEn: "I can schedule a plumber for you. When is a good time? We have availability tomorrow between 10 AM and 2 PM, or Thursday afternoon. There's a $75 service call fee that covers the first 30 minutes of labor, plus the cost of any parts.",
            textZh: "我可以给你安排一个水管工。什么时间方便？明天上午10点到下午2点有空，或者周四下午。上门费75美元，包含前30分钟的人工费，另外加零件费用。",
            keyPhrases: [
              { en: "schedule a plumber", zh: "安排一个水管工" },
              { en: "availability", zh: "可选时间" },
              { en: "service call fee", zh: "上门费" },
              { en: "first 30 minutes of labor", zh: "前30分钟的人工费" },
              { en: "cost of any parts", zh: "零件费用" },
            ],
            culturalNote: "在美国找水管工、电工等维修服务，上门费（service call fee）是很常见的，通常$50-$100，即使最终你决定不修也要付。",
            alternativeExpressions: [
              { textEn: "I can get someone out there tomorrow morning, 10 to 2 slot. Service call's $75, which covers the first half hour. Parts are extra.", textZh: "明天上午可以安排人过去，10点到2点之间。上门费75，包前半小时。零件另算。", actionHint: "说明时间和收费", frequency: "common" },
              { textEn: "We've got a plumber free tomorrow between 10 and 2. There's a $75 trip charge that includes 30 minutes of work.", textZh: "我们明天10点到2点有水管工空。上门费75美元，含30分钟工时。", actionHint: "告知可选时段", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Tomorrow morning works. Can you give me a rough estimate for both issues? I don't want any surprises.",
            textZh: "明天上午可以。能给两个问题一个大致报价吗？我不想有意外费用。",
          },
          {
            speaker: "them",
            role: "维修调度",
            textEn: "Without seeing it in person, a running toilet is usually a flapper valve or fill valve issue — typically $100 to $200 including parts. A kitchen sink leak depends on what's causing it — could be $80 for a simple gasket, or up to $300 if the pipe needs replacing. The plumber will give you an exact quote before starting any work.",
            textZh: "没亲眼看到之前，马桶一直流水通常是翻板阀或进水阀的问题——含零件大概100到200美元。厨房水槽漏水取决于原因——简单的垫圈可能80美元，如果管道需要更换可能到300美元。水管工开工前会给你一个准确报价。",
            keyPhrases: [
              { en: "rough estimate", zh: "大致报价" },
              { en: "flapper valve", zh: "翻板阀" },
              { en: "fill valve", zh: "进水阀" },
              { en: "gasket", zh: "垫圈" },
              { en: "exact quote", zh: "准确报价" },
              { en: "before starting any work", zh: "开工前" },
            ],
            alternativeExpressions: [
              { textEn: "Ballpark, a running toilet is usually 100 to 200 bucks. Sink leak could be 80 to 300 depending on the issue. The plumber will quote you on the spot before doing anything.", textZh: "大概估计，马桶流水一般100到200块。水槽漏水看情况，80到300不等。水管工到了会先报价再开工。", actionHint: "给出价格范围", frequency: "common" },
              { textEn: "Hard to say without looking, but toilet fixes are usually a hundred or two. Sink leaks vary. He'll give you a firm price before he starts.", textZh: "没看到很难说，但马桶修理通常一两百。水槽漏水不好说。他开工前会给你一个确切报价。", actionHint: "坦诚说明需现场看", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, that sounds reasonable. Will the plumber call before coming?",
            textZh: "好的，听起来合理。水管工来之前会打电话吗？",
          },
          {
            speaker: "them",
            role: "维修调度",
            textEn: "Yes, the plumber will call you 30 minutes ahead of time. Please make sure someone is home and the areas around the toilet and sink are accessible. If you need to cancel or reschedule, please let us know at least 4 hours in advance to avoid a cancellation fee.",
            textZh: "会的，水管工会提前30分钟打电话。请确保有人在家，马桶和水槽周围可以接近。如果需要取消或改时间，请至少提前4小时告知，以免产生取消费。",
            keyPhrases: [
              { en: "30 minutes ahead", zh: "提前30分钟" },
              { en: "accessible", zh: "可以接近/方便操作的" },
              { en: "cancellation fee", zh: "取消费" },
              { en: "at least 4 hours in advance", zh: "至少提前4小时" },
            ],
            alternativeExpressions: [
              { textEn: "He'll call you half an hour before showing up. Just make sure someone's home and he can get to both spots. Cancel with 4 hours notice or there's a fee.", textZh: "他到之前半小时会给你打电话。确保有人在家，他能接近两个维修的地方。取消要提前4小时，不然有取消费。", actionHint: "说明到访和取消政策", frequency: "common" },
              { textEn: "Yep, you'll get a heads-up call 30 minutes before. Clear the areas around the toilet and sink. And if plans change, let us know 4 hours ahead.", textZh: "会的，提前30分钟打电话通知你。把马桶和水槽周围清理一下。如果计划有变，提前4小时告诉我们。", actionHint: "提醒做好准备", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Is this going to be one plumber who handles both issues, or do I need to book separately?",
            textZh: "明白了。会是一个水管工同时处理两个问题，还是需要分开预约？",
          },
          {
            speaker: "them",
            role: "维修调度",
            textEn: "One plumber will handle both — it's all plumbing work. You'll only pay one service call fee. After the first 30 minutes, additional labor is $60 per half hour. Most jobs like these take about an hour total.",
            textZh: "一个水管工同时处理——都是水管活。上门费只收一次。前30分钟之后，额外人工费每半小时60美元。像这种活一般总共大约一个小时。",
            keyPhrases: [
              { en: "plumbing work", zh: "水管活" },
              { en: "additional labor", zh: "额外人工费" },
              { en: "per half hour", zh: "每半小时" },
            ],
            alternativeExpressions: [
              { textEn: "Same guy does both — it's all plumbing. One service call. After the first 30, it's $60 per half hour. Shouldn't take more than an hour.", textZh: "同一个人处理——都是水管活。上门费只收一次。头30分钟后，每半小时60块。应该一小时内搞定。", actionHint: "说明收费结构", frequency: "common" },
              { textEn: "One plumber, one trip. You only pay the call fee once. Extra labor's $60 every 30 minutes after the first half hour.", textZh: "一个水管工，一次上门。上门费只付一次。超过前30分钟后每半小时加收60块。", actionHint: "强调只收一次上门费", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Let's book it for tomorrow morning then. Thank you!",
            textZh: "好的。那就预约明天上午吧。谢谢！",
          },
          {
            speaker: "them",
            role: "维修调度",
            textEn: "You're all set for tomorrow between 10 and 12. I'll text you a confirmation with the plumber's name and phone number. We accept cash, check, and credit card. See you tomorrow!",
            textZh: "明天10点到12点已经为您预约好了。我会发短信确认，包含水管工的姓名和电话。我们接受现金、支票和信用卡。明天见！",
            keyPhrases: [
              { en: "you're all set", zh: "都安排好了" },
              { en: "confirmation", zh: "确认" },
              { en: "accept cash, check, and credit card", zh: "接受现金、支票和信用卡" },
            ],
            alternativeExpressions: [
              { textEn: "All booked! Tomorrow, 10 to 12. I'll text you the details. We take cash, check, or card.", textZh: "预约好了！明天10点到12点。我发短信给你确认。现金、支票、刷卡都行。", actionHint: "确认预约", frequency: "common" },
              { textEn: "You're on the schedule. Expect a text with the plumber's info. See you tomorrow!", textZh: "已经排上了。会收到短信包含水管工的信息。明天见！", actionHint: "确认并告知下一步", frequency: "common" },
            ],
          },
        ],
      },

      // --- Flow 2: 维修现场沟通+价格谈判 ---
      {
        id: "repair-onsite",
        titleZh: "现场维修沟通",
        titleEn: "On-site Repair Communication",
        description: "维修人员上门后的现场沟通，包括问题诊断、方案选择和价格谈判",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "水管工",
            textEn: "Hi, I'm Mike from City Plumbing. You called about a running toilet and a sink leak?",
            textZh: "你好，我是City Plumbing的Mike。你打电话说马桶流水不停和水槽漏水？",
            alternativeExpressions: [
              { textEn: "Hey, Mike from City Plumbing. Got a call about a toilet and a sink issue?", textZh: "嘿，City Plumbing的Mike。接到电话说马桶和水槽有问题？", actionHint: "上门自我介绍", frequency: "common" },
              { textEn: "Morning! I'm your plumber, Mike. You've got a running toilet and a leaky sink, right?", textZh: "早上好！我是你的水管工Mike。马桶流水不停和水槽漏水，对吧？", actionHint: "确认维修内容", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, come on in. The toilet is down the hall on the right, and the kitchen sink is right here.",
            textZh: "是的，请进。马桶在走廊右边，厨房水槽就在这里。",
          },
          {
            speaker: "them",
            role: "水管工",
            textEn: "Let me take a look at both... Alright, the toilet issue is simple — the flapper is worn out and not sealing properly. I can replace it in about 10 minutes. The sink is a bit more involved — you've got a corroded P-trap and the connection to the wall pipe is loose.",
            textZh: "我看看两个……好的，马桶问题很简单——翻板磨损了，密封不好。我大概10分钟就能换好。水槽稍微复杂一些——你的P型弯管腐蚀了，和墙管的连接也松了。",
            keyPhrases: [
              { en: "flapper is worn out", zh: "翻板磨损了" },
              { en: "not sealing properly", zh: "密封不好" },
              { en: "corroded", zh: "腐蚀了" },
              { en: "P-trap", zh: "P型弯管" },
              { en: "loose", zh: "松了" },
            ],
            vocabNotes: {
              "P-trap": {
                meaningInContext: "在这句话里表示：水槽下面U形或P形的弯管，用于防止下水道气味返上来",
                similarUsage: "类似用法：The P-trap under the sink needs to be replaced.",
              },
            },
            alternativeExpressions: [
              { textEn: "Okay so the toilet's easy — just a worn flapper. Ten-minute fix. The sink's a bit more work — the P-trap's corroded and the wall connection is loose.", textZh: "好的，马桶问题简单——就是翻板磨损了。十分钟搞定。水槽稍微麻烦——P型弯管锈了，墙管连接也松了。", actionHint: "分别诊断两个问题", frequency: "common" },
              { textEn: "Toilet's a quick fix — bad flapper. Sink needs more attention though — corroded pipe and a loose fitting underneath.", textZh: "马桶好修——翻板坏了。水槽得多花点功夫——管子腐蚀了，下面的接头也松了。", actionHint: "说明难易程度", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "What's the total going to be for both repairs?",
            textZh: "两个都修一共多少钱？",
          },
          {
            speaker: "them",
            role: "水管工",
            textEn: "The toilet flapper replacement is $95 — that includes the part and labor. The P-trap replacement is $180 — the part itself is $35 and the rest is labor since I need to disconnect the old one and properly seal the new connection. Plus the $75 service fee. So total would be $350.",
            textZh: "马桶翻板更换95美元——含零件和人工。P型弯管更换180美元——零件35美元，剩下的是人工费，因为需要拆旧的并密封好新的连接。加上75美元上门费。总共350美元。",
            keyPhrases: [
              { en: "includes the part and labor", zh: "含零件和人工" },
              { en: "disconnect", zh: "拆卸" },
              { en: "properly seal", zh: "密封好" },
              { en: "total would be", zh: "总共是" },
            ],
            alternativeExpressions: [
              { textEn: "Toilet flapper's 95 all-in. P-trap's 180 — parts are 35, rest is labor. Plus the 75 service fee. So you're looking at 350.", textZh: "马桶翻板全包95。P型弯管180——零件35，其他是人工。加上75上门费。一共350。", actionHint: "逐项报价", frequency: "common" },
              { textEn: "For both jobs, parts and labor, plus the service call — $350 total. Want me to break it down?", textZh: "两项活加在一起，零件加人工加上门费——总共350美元。要我详细列一下吗？", actionHint: "先报总价再详述", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a bit more than I expected. Is there any flexibility on the price? I'm having you do both jobs at once, so I thought there might be a package deal.",
            textZh: "比我预期的贵一些。价格有商量余地吗？我一次让你修两个，我以为会有套餐价。",
            culturalNote: "在美国，和维修工谈价格是可以的，尤其是同时做多个维修的时候。礼貌地提出 \"any flexibility\" 是常见的谈价方式。",
          },
          {
            speaker: "them",
            role: "水管工",
            textEn: "Tell you what — since I'm doing both, I'll knock $30 off. So $320 total. That's really the best I can do — the parts cost what they cost, and I stand behind my work with a 90-day warranty.",
            textZh: "这样吧——因为两个一起修，我减30美元。一共320美元。这真的是最低了——零件成本摆在那里，而且我的工作有90天保修。",
            keyPhrases: [
              { en: "knock off", zh: "减价/去掉" },
              { en: "the best I can do", zh: "最低了/最好的价格" },
              { en: "stand behind my work", zh: "对我的工作负责" },
              { en: "warranty", zh: "保修" },
            ],
            alternativeExpressions: [
              { textEn: "Since I'm doing both, I'll cut you a deal — $320 flat. Parts cost what they cost, but I guarantee the work for 90 days.", textZh: "两个一起修，我给你个优惠价——320整。零件成本没法降，但我的活保修90天。", actionHint: "给出优惠价", frequency: "common" },
              { textEn: "Alright, because you're bundling — $320. Can't go lower than that. Everything I do comes with a 90-day warranty.", textZh: "好吧，打包价——320。不能再低了。我做的活都有90天保修。", actionHint: "强调底价和保修", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Fair enough. Let's do it. How long will the whole thing take?",
            textZh: "合理。那就修吧。全部要多长时间？",
          },
          {
            speaker: "them",
            role: "水管工",
            textEn: "About 45 minutes to an hour for everything. I'll lay down a drop cloth to protect your floors. I'll also turn off the water supply under the sink while I work — your other faucets will still work fine.",
            textZh: "全部大约45分钟到一个小时。我会铺防护布保护地板。修水槽时我会关掉下面的水阀——其他水龙头不受影响。",
            keyPhrases: [
              { en: "drop cloth", zh: "防护布" },
              { en: "water supply", zh: "水阀/供水" },
              { en: "turn off", zh: "关掉" },
              { en: "other faucets", zh: "其他水龙头" },
            ],
            alternativeExpressions: [
              { textEn: "About 45 minutes to an hour. I'll put down a cloth to protect your floors and shut off the water under the sink. Everything else keeps running.", textZh: "大概45分钟到一个小时。我会铺防护布保护地板，关掉水槽下面的水阀。其他的正常用。", actionHint: "说明施工安排", frequency: "common" },
              { textEn: "Give me an hour tops. I'll cover the floor and just kill the water to the sink — your other taps still work fine.", textZh: "最多一小时。我会盖住地板，只关水槽的水——其他水龙头照常用。", actionHint: "保证不影响日常", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds good. I'll be in the living room if you need anything.",
            textZh: "好的。我在客厅，需要什么跟我说。",
          },
          {
            speaker: "them",
            role: "水管工",
            textEn: "All done! Both are fixed. The toilet is quiet now, and the sink connection is sealed tight — no more dripping. Here's the receipt with the itemized costs and warranty information. If anything starts leaking again within 90 days, call us and we'll fix it for free.",
            textZh: "都修好了！马桶不响了，水槽连接密封好了——不再滴水。这是收据，上面有明细费用和保修信息。90天内如果又开始漏水，打电话给我们免费修。",
            keyPhrases: [
              { en: "all done", zh: "都修好了" },
              { en: "sealed tight", zh: "密封牢固" },
              { en: "no more dripping", zh: "不再滴水" },
              { en: "itemized costs", zh: "明细费用" },
              { en: "fix it for free", zh: "免费修" },
            ],
            alternativeExpressions: [
              { textEn: "Everything's done! Toilet's quiet, sink's bone dry underneath. Here's your receipt with the breakdown. Anything leaks within 90 days, we'll fix it free.", textZh: "都修好了！马桶不响了，水槽下面完全干了。给你收据，上面有明细。90天内如果漏水，免费修。", actionHint: "完工交代保修", frequency: "common" },
              { textEn: "All fixed up. Toilet's running smooth, no more drip under the sink. Keep the receipt — you've got 90 days of warranty coverage.", textZh: "全部搞定。马桶正常了，水槽也不滴了。收据留好——有90天保修。", actionHint: "确认完工", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 图书馆 ====================
  {
    id: "daily-life-library",
    category: "daily-life",
    titleZh: "图书馆",
    titleEn: "Public Library",
    description: "在国外公共图书馆办借书证、借还书、使用自习室和其他设施",
    otherRole: "图书馆员",
    otherRoleIcon: "📚",
    flows: [
      // --- Flow 1: 办借书证+借书 ---
      {
        id: "library-card-borrow",
        titleZh: "办借书证与借书",
        titleEn: "Library Card & Borrowing",
        description: "在公共图书馆办理借书证、搜索和借阅图书",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to get a library card. I just moved to the area. What do I need?",
            textZh: "你好，我想办一张借书证。我刚搬到这个地区。需要什么？",
          },
          {
            speaker: "them",
            role: "图书馆员",
            textEn: "Welcome to the neighborhood! Getting a library card is free. I just need a photo ID and proof of your current address — a utility bill, lease, or a piece of official mail will work. It only takes a few minutes.",
            textZh: "欢迎来到这个社区！借书证是免费的。我只需要一个带照片的证件和你当前地址的证明——水电费账单、租赁合同或一封官方信件都可以。只要几分钟。",
            keyPhrases: [
              { en: "library card", zh: "借书证" },
              { en: "free", zh: "免费的" },
              { en: "proof of current address", zh: "当前地址证明" },
              { en: "official mail", zh: "官方信件" },
            ],
            culturalNote: "美国公共图书馆办借书证完全免费，是社区最重要的公共资源之一。很多图书馆还提供免费Wi-Fi、电脑使用、打印等服务。",
            alternativeExpressions: [
              { textEn: "Hey, welcome to the neighborhood! Library cards are totally free. Just need a photo ID and something with your address — a bill or your lease works.", textZh: "嘿，欢迎来到这个社区！借书证完全免费。只需要一个带照片的证件和地址证明——账单或租赁合同就行。", actionHint: "热情欢迎并说明", frequency: "common" },
              { textEn: "Getting a card is easy and it's free! Bring a photo ID and a proof of address — mail, lease, utility bill, anything official.", textZh: "办卡很简单而且免费！带一个带照片的证件和地址证明——信件、租赁合同、水电费账单都可以。", actionHint: "强调办卡简单", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have my passport and my lease agreement. Here you go. How many books can I borrow at a time?",
            textZh: "我有护照和租赁合同。给你。一次可以借多少本书？",
          },
          {
            speaker: "them",
            role: "图书馆员",
            textEn: "With a standard card, you can check out up to 25 items at a time — that includes books, DVDs, audiobooks, and magazines. Books can be borrowed for 3 weeks, and you can renew them twice online. DVDs are 1 week, no renewal. Late fees are 25 cents per day per item.",
            textZh: "标准借书证一次最多可以借25件——包括书、DVD、有声书和杂志。书可以借3周，网上可以续借两次。DVD借1周，不能续借。逾期费每件每天25美分。",
            keyPhrases: [
              { en: "check out", zh: "借出" },
              { en: "25 items", zh: "25件" },
              { en: "renew", zh: "续借" },
              { en: "late fees", zh: "逾期费" },
              { en: "per day per item", zh: "每件每天" },
            ],
            vocabNotes: {
              "check out": {
                meaningInContext: "在这句话里表示：从图书馆借出（书籍等），不是结账",
                similarUsage: "类似用法：I checked out three novels last week.",
              },
            },
            alternativeExpressions: [
              { textEn: "You can borrow up to 25 things at once — books, DVDs, audiobooks, you name it. Books are 3 weeks, renewals online. DVDs are 1 week, no renewing. Late fee's a quarter a day.", textZh: "一次最多能借25件——书、DVD、有声书，什么都行。书借3周，可以网上续借。DVD借1周，不能续。逾期每天每件2毛5。", actionHint: "详细说明借阅规则", frequency: "common" },
              { textEn: "With your card you can check out 25 items. Books go for 3 weeks, DVDs one week. There's a small daily late fee — 25 cents per item.", textZh: "有了借书证可以借25件。书3周，DVD一周。逾期有个小罚款——每件每天25美分。", actionHint: "简要说明期限", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's very generous. I'm looking for some books on American history. Can you help me find them?",
            textZh: "借这么多真大方。我想找一些关于美国历史的书。能帮我找一下吗？",
          },
          {
            speaker: "them",
            role: "图书馆员",
            textEn: "Of course! You can search our catalog on any of the computers over there, or on our website and app. American history books are in the 973 section — second floor, third aisle on the left. I can also recommend a few popular titles if you'd like.",
            textZh: "当然！你可以在那边的任何一台电脑上搜索我们的目录，或者在网站和App上搜。美国历史的书在973分区——二楼，左边第三个书架。如果你想的话，我也可以推荐几本热门的。",
            keyPhrases: [
              { en: "catalog", zh: "目录" },
              { en: "973 section", zh: "973分区（杜威十进制分类法）" },
              { en: "aisle", zh: "走廊/书架间的通道" },
              { en: "popular titles", zh: "热门书目" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! Use any of those computers to search our catalog. American history is section 973, second floor, third aisle left. Want some recommendations?", textZh: "当然！用那边任何一台电脑搜我们的目录。美国历史在973分区，二楼，左边第三排。要我推荐几本吗？", actionHint: "指引位置", frequency: "common" },
              { textEn: "American history? Head upstairs, section 973. Or you can search online first — our catalog's on the website too.", textZh: "美国历史？上楼，973分区。或者先网上搜——我们的目录网站上也有。", actionHint: "提供多种查找方式", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be great. Also, do you have any books in Chinese? My partner is learning English and bilingual books would be helpful.",
            textZh: "那太好了。另外，你们有中文书吗？我的伴侣在学英语，中英双语书会很有帮助。",
          },
          {
            speaker: "them",
            role: "图书馆员",
            textEn: "We do have a foreign language section on the first floor, and there's a small Chinese collection. We also have ESL materials — English as a Second Language — with bilingual resources and graded readers. If we don't have what you need, I can request it from another branch through interlibrary loan. It usually takes about a week.",
            textZh: "一楼有外文书区，有一小部分中文藏书。我们也有ESL（英语作为第二语言）材料——有双语资源和分级阅读读物。如果我们没有你需要的，我可以通过馆际互借从其他分馆调借。通常需要大约一周。",
            keyPhrases: [
              { en: "foreign language section", zh: "外文书区" },
              { en: "ESL materials", zh: "英语学习材料" },
              { en: "graded readers", zh: "分级阅读读物" },
              { en: "interlibrary loan", zh: "馆际互借" },
              { en: "another branch", zh: "其他分馆" },
            ],
            alternativeExpressions: [
              { textEn: "We have a small Chinese section on the first floor, plus ESL stuff — bilingual books, graded readers. If we don't have it, I can order it from another branch. Takes about a week.", textZh: "一楼有个小的中文区，还有ESL资料——双语书、分级读物。没有的话我可以从其他分馆调，大概一周。", actionHint: "介绍多语资源", frequency: "common" },
              { textEn: "Yep — foreign language section's downstairs, there's some Chinese stuff. We also do interlibrary loans if you need something specific.", textZh: "有——外文区在楼下，有一些中文的。如果要找特定的书，我们也可以馆际互借。", actionHint: "告知互借服务", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Interlibrary loan sounds useful. One more question — do you have study rooms I can reserve?",
            textZh: "馆际互借听起来很实用。再问一下——有可以预约的自习室吗？",
          },
          {
            speaker: "them",
            role: "图书馆员",
            textEn: "Yes! We have four study rooms — two individual and two group rooms that seat up to six people. You can book them online for up to 2 hours per day. There's also a quiet reading room on the third floor if you just need a place to study without reserving.",
            textZh: "有的！我们有四间自习室——两间单人的和两间最多坐六人的小组间。可以在网上预约，每天最多2小时。三楼还有一个安静阅读室，不用预约就可以去学习。",
            keyPhrases: [
              { en: "study rooms", zh: "自习室" },
              { en: "individual", zh: "单人的" },
              { en: "group rooms", zh: "小组间" },
              { en: "book them online", zh: "网上预约" },
              { en: "quiet reading room", zh: "安静阅读室" },
            ],
            alternativeExpressions: [
              { textEn: "We've got four study rooms — two for one person, two for groups. Book online, up to 2 hours a day. There's also a quiet room on the third floor, no reservation needed.", textZh: "有四间自习室——两间单人的，两间小组的。网上预约，每天最多2小时。三楼还有个安静阅读室，不用预约。", actionHint: "介绍自习室", frequency: "common" },
              { textEn: "Yep! Individual and group study rooms, bookable online. Or just head to the quiet floor — third floor, no booking required.", textZh: "有的！单人和小组自习室，可以网上预约。或者直接去安静区——三楼，不需要预约。", actionHint: "提供两种选择", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "This library is wonderful. Thank you for all your help!",
            textZh: "这个图书馆太棒了。谢谢你的帮助！",
          },
          {
            speaker: "them",
            role: "图书馆员",
            textEn: "You're welcome! Don't forget we also have free community events — book clubs, movie nights, and language exchange meetups. Check the bulletin board by the entrance or our events page online. Happy reading!",
            textZh: "不客气！别忘了我们还有免费社区活动——读书会、电影之夜和语言交换聚会。看门口的公告栏或网上活动页面。阅读愉快！",
            keyPhrases: [
              { en: "community events", zh: "社区活动" },
              { en: "book clubs", zh: "读书会" },
              { en: "language exchange meetups", zh: "语言交换聚会" },
              { en: "bulletin board", zh: "公告栏" },
            ],
            alternativeExpressions: [
              { textEn: "Anytime! Oh, and check out our free events — book clubs, movie nights, language exchanges. Info's on the board by the door or online.", textZh: "随时来！对了，看看我们的免费活动——读书会、电影之夜、语言交换。门口的告示板上或网上有信息。", actionHint: "推荐社区活动", frequency: "common" },
              { textEn: "Happy to help! Don't miss our community stuff — there's a language exchange meetup that'd be perfect for you.", textZh: "很高兴帮到你！别错过我们的社区活动——有个语言交换聚会特别适合你。", actionHint: "针对性推荐活动", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 2: 还书+逾期+使用打印服务 ---
      {
        id: "library-return-services",
        titleZh: "还书与打印服务",
        titleEn: "Returns & Library Services",
        description: "归还图书、处理逾期费、使用图书馆的打印和复印服务",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to return these books. I think one of them might be overdue — I'm not sure.",
            textZh: "你好，我要还这些书。其中一本可能逾期了——我不太确定。",
          },
          {
            speaker: "them",
            role: "图书馆员",
            textEn: "Let me scan them and check. ...Yes, this novel was due last Friday, so it's 4 days overdue. That's a dollar in late fees. The other two are fine — you're returning them on time. Would you like to pay the fee now?",
            textZh: "我扫描一下查看。……是的，这本小说上周五到期，逾期4天了。逾期费1美元。另外两本没问题——按时归还。要现在付逾期费吗？",
            keyPhrases: [
              { en: "scan them", zh: "扫描一下" },
              { en: "due last Friday", zh: "上周五到期" },
              { en: "4 days overdue", zh: "逾期4天" },
              { en: "late fees", zh: "逾期费" },
              { en: "returning them on time", zh: "按时归还" },
            ],
            alternativeExpressions: [
              { textEn: "Let me check... Yep, this one was due Friday — four days late, so that's a dollar. The other two are fine. Want to pay now?", textZh: "我查一下……对，这本上周五到期——逾期4天，1块钱。另外两本没问题。现在付吗？", actionHint: "告知逾期情况", frequency: "common" },
              { textEn: "One of these is a few days overdue — buck in late fees. The rest are good. You can pay it now or it'll go on your account.", textZh: "有一本逾期了几天——逾期费1块。其他的没问题。现在付或者记到你账户上都行。", actionHint: "提供付款选择", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, here's a dollar. I didn't realize I could renew online. How does that work?",
            textZh: "好的，给你一美元。我不知道可以网上续借。怎么操作？",
          },
          {
            speaker: "them",
            role: "图书馆员",
            textEn: "Just log into your account on our website or app, go to 'My Checkouts,' and click 'Renew' next to the item. You can renew up to two times as long as nobody else has placed a hold on it. You'll get an email reminder 3 days before any book is due.",
            textZh: "登录我们网站或App的账户，进入\"我的借阅\"，点击物品旁边的\"续借\"就行。只要没有其他人预约这本书，可以续借最多两次。每本书到期前3天你会收到邮件提醒。",
            keyPhrases: [
              { en: "log into your account", zh: "登录你的账户" },
              { en: "My Checkouts", zh: "我的借阅" },
              { en: "renew", zh: "续借" },
              { en: "placed a hold", zh: "预约了" },
              { en: "email reminder", zh: "邮件提醒" },
            ],
            alternativeExpressions: [
              { textEn: "Easy — just log into our site or app, go to your account, and hit renew. You can do it twice as long as no one's waiting for it. You'll get a reminder email before it's due.", textZh: "很简单——登录网站或App，进你的账户，点续借就行。只要没人预约可以续两次。到期前会收到提醒邮件。", actionHint: "教如何续借", frequency: "common" },
              { textEn: "On the website or the app — 'My Checkouts', then 'Renew'. Two renewals max. We send email reminders too.", textZh: "在网站或App上——'我的借阅'然后'续借'。最多续两次。我们也会发邮件提醒。", actionHint: "简洁说明操作步骤", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Very helpful. I also need to print something — a few pages from a PDF on my phone. Do you have printers available?",
            textZh: "太有帮助了。我还需要打印一些东西——手机上的一个PDF文件的几页。有打印机可以用吗？",
          },
          {
            speaker: "them",
            role: "图书馆员",
            textEn: "Yes, we have public printers. Black and white is 10 cents per page, and color is 50 cents per page. You can print from your phone — just connect to our library Wi-Fi, go to print.library.org, and upload your file. Choose the printer nearest to you and pick up your pages at the print station.",
            textZh: "有的，我们有公共打印机。黑白每页10美分，彩色每页50美分。可以从手机打印——连接图书馆Wi-Fi，打开print.library.org，上传文件。选择离你最近的打印机，在打印站取打印件。",
            keyPhrases: [
              { en: "public printers", zh: "公共打印机" },
              { en: "black and white", zh: "黑白" },
              { en: "color", zh: "彩色" },
              { en: "per page", zh: "每页" },
              { en: "upload your file", zh: "上传文件" },
              { en: "print station", zh: "打印站" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, public printers right over there. Black and white's a dime, color's 50 cents. Just hop on our Wi-Fi, go to the print portal, and upload your file.", textZh: "有，公共打印机在那边。黑白一毛，彩色5毛。连我们的Wi-Fi，上打印网站，上传文件就行。", actionHint: "指引打印位置", frequency: "common" },
              { textEn: "Sure! Connect to library Wi-Fi, upload to print.library.org, and pick it up at the printer. 10 cents a page for B&W.", textZh: "可以！连图书馆Wi-Fi，上传到print.library.org，在打印机那取。黑白每页10美分。", actionHint: "说明打印流程", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I also make photocopies? I need to copy a few pages from a reference book that can't be checked out.",
            textZh: "可以复印吗？我需要复印一本参考书的几页，那本书不能外借。",
          },
          {
            speaker: "them",
            role: "图书馆员",
            textEn: "The copier is right next to the printer — same pricing, 10 cents for black and white. It also has a scan-to-email feature if you'd rather get a digital copy. That's free. Just put the book face down, select your option, and follow the prompts.",
            textZh: "复印机就在打印机旁边——价格一样，黑白10美分。也有扫描到邮箱的功能，如果你想要电子版的话。扫描免费。把书朝下放，选择选项，按照提示操作就行。",
            keyPhrases: [
              { en: "copier", zh: "复印机" },
              { en: "scan-to-email", zh: "扫描到邮箱" },
              { en: "digital copy", zh: "电子版" },
              { en: "face down", zh: "朝下放" },
              { en: "follow the prompts", zh: "按照提示操作" },
            ],
            alternativeExpressions: [
              { textEn: "Copier's right next to the printer. Same price — 10 cents B&W. You can also scan to email for free if you just need a digital copy.", textZh: "复印机就在打印机旁边。价格一样——黑白10美分。也可以免费扫描发邮件，如果你只要电子版的话。", actionHint: "介绍复印和扫描", frequency: "common" },
              { textEn: "Yeah, the copier does copies and scans. Copies are 10 cents, scans to email are free. Just put the book face-down and follow the screen.", textZh: "有，复印机能复印也能扫描。复印10美分，扫描发邮件免费。把书朝下放，按屏幕提示操作就行。", actionHint: "说明免费扫描功能", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Scan to email is perfect — saves paper too. What are the library hours? I want to come back this weekend to use the study room.",
            textZh: "扫描到邮箱太好了——还省纸。图书馆开放时间是什么？我这个周末想来用自习室。",
          },
          {
            speaker: "them",
            role: "图书馆员",
            textEn: "We're open Monday through Thursday 9 AM to 9 PM, Friday and Saturday 9 AM to 6 PM, and Sunday 1 PM to 5 PM. The study rooms are available during all open hours but book up fast on weekends — I'd reserve yours a day or two ahead.",
            textZh: "周一到周四早9点到晚9点，周五周六早9点到下午6点，周日下午1点到5点。自习室在所有开放时间内都可以用，但周末很快就被订满——建议提前一两天预约。",
            keyPhrases: [
              { en: "library hours", zh: "开放时间" },
              { en: "book up fast", zh: "很快被订满" },
              { en: "reserve yours", zh: "预约" },
              { en: "a day or two ahead", zh: "提前一两天" },
            ],
            alternativeExpressions: [
              { textEn: "Weekdays 9 to 9, Friday and Saturday till 6, Sunday 1 to 5. Study rooms are open all hours but book up fast on weekends — grab one a day or two early.", textZh: "工作日9点到9点，周五周六到6点，周日1到5点。自习室开放时间内都能用，但周末很快被订满——提前一两天预约。", actionHint: "告知时间并建议早订", frequency: "common" },
              { textEn: "We're open 9 to 9 on weekdays, shorter on weekends. For study rooms, book ahead — they go fast, especially Saturdays.", textZh: "工作日9到9，周末时间短一些。自习室建议提前订——订得很快，特别是周六。", actionHint: "提醒周末抢手", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll book one now on the app. Thanks so much for all your help!",
            textZh: "我现在就在App上预约一间。非常感谢你的帮助！",
          },
          {
            speaker: "them",
            role: "图书馆员",
            textEn: "Anytime! That's what we're here for. See you this weekend!",
            textZh: "随时来找我！这是我们该做的。周末见！",
            alternativeExpressions: [
              { textEn: "No problem! That's what we're here for. See you Saturday!", textZh: "不客气！这是我们的工作嘛。周六见！", actionHint: "热情道别", frequency: "common" },
              { textEn: "Happy to help! Come by anytime — and check the app for events this weekend.", textZh: "很高兴能帮到你！随时来——看看App上这周末有什么活动。", actionHint: "推荐活动", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 快递寄收 ====================
  {
    id: "daily-life-post",
    category: "daily-life",
    titleZh: "快递寄收",
    titleEn: "Sending & Receiving Packages",
    description: "在国外寄送和接收快递包裹，包括填写海关表格、追踪包裹",
    otherRole: "快递工作人员",
    otherRoleIcon: "📦",
    flows: [
      // --- Flow 1: 寄包裹+选方式+海关表 ---
      {
        id: "post-send",
        titleZh: "寄送包裹",
        titleEn: "Sending a Package",
        description: "在快递点或邮局寄送包裹，选择快递方式、填写海关申报",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to send this package to China. It's about 5 pounds. What are my options?",
            textZh: "你好，我需要把这个包裹寄到中国。大概5磅。有什么选择？",
          },
          {
            speaker: "them",
            role: "快递工作人员",
            textEn: "For international packages to China, we offer three service levels. Economy takes 2 to 4 weeks and costs $32. Standard takes 7 to 14 business days at $58. Express delivery is 3 to 5 business days at $95. All options include basic tracking.",
            textZh: "寄到中国的国际包裹，我们提供三种服务等级。经济型2到4周，32美元。标准型7到14个工作日，58美元。快递3到5个工作日，95美元。所有选项都包含基本追踪。",
            keyPhrases: [
              { en: "service levels", zh: "服务等级" },
              { en: "economy", zh: "经济型" },
              { en: "standard", zh: "标准型" },
              { en: "express delivery", zh: "快递" },
              { en: "basic tracking", zh: "基本追踪" },
            ],
            alternativeExpressions: [
              { textEn: "For China, you've got three options: economy — 2 to 4 weeks, 32 bucks. Standard — about 2 weeks, 58. Or express, 3 to 5 days for 95. All come with tracking.", textZh: "寄中国有三种选择：经济型——2到4周，32块。标准型——大约2周，58块。或者快递，3到5天，95块。都带追踪。", actionHint: "列出寄送选项", frequency: "common" },
              { textEn: "Cheapest is economy at $32, takes a few weeks. Middle is $58, gets there in about 10 days. Express is $95 for under a week.", textZh: "最便宜的是经济型32块，要几周。中间的58块，大概10天到。快递95块，不到一周。", actionHint: "按价格排列", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with standard. Do I need to fill out a customs form?",
            textZh: "我选标准型。需要填海关申报表吗？",
          },
          {
            speaker: "them",
            role: "快递工作人员",
            textEn: "Yes, for any international package you need a customs declaration form. Here it is. You'll need to list what's inside, the quantity of each item, its value in US dollars, and whether it's a gift, merchandise, or personal items. Also write the total weight and your signature.",
            textZh: "是的，任何国际包裹都需要海关申报表。给你。你需要列出里面的东西、每件物品的数量、美元价值，以及是礼物、商品还是个人物品。还要写上总重量和你的签名。",
            keyPhrases: [
              { en: "customs declaration form", zh: "海关申报表" },
              { en: "list what's inside", zh: "列出里面的东西" },
              { en: "quantity", zh: "数量" },
              { en: "gift, merchandise, or personal items", zh: "礼物、商品还是个人物品" },
              { en: "total weight", zh: "总重量" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, international means customs paperwork. List everything in the box — what it is, how many, the value in dollars, and whether it's a gift or personal stuff. Sign at the bottom.", textZh: "对，国际件要填海关表。列出箱子里所有东西——是什么、多少件、美元价值、是礼物还是个人物品。在底部签名。", actionHint: "指导填表", frequency: "common" },
              { textEn: "Any package going overseas needs a customs form. Here ya go — just fill in the contents, values, and check if it's a gift. Pretty straightforward.", textZh: "任何出国的包裹都要填海关表。给你——填上物品、价值，勾选是不是礼物。很简单。", actionHint: "递表并说明", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's mainly clothes and some vitamin supplements for my parents. Should I declare the supplements?",
            textZh: "主要是衣服和一些给父母的维生素保健品。保健品需要申报吗？",
          },
          {
            speaker: "them",
            role: "快递工作人员",
            textEn: "Yes, absolutely declare everything. Write 'vitamin supplements' and the value. However, I should mention — China has restrictions on importing supplements. There's a limit on how many you can send, and some types may be seized by Chinese customs. I'd recommend keeping it to personal-use quantities.",
            textZh: "是的，一定要全部申报。写上'vitamin supplements'和价值。不过我要提一下——中国对进口保健品有限制。能寄的数量有限，某些种类可能被中国海关扣押。建议只寄个人使用量。",
            keyPhrases: [
              { en: "declare everything", zh: "全部申报" },
              { en: "restrictions on importing", zh: "进口限制" },
              { en: "seized by customs", zh: "被海关扣押" },
              { en: "personal-use quantities", zh: "个人使用量" },
            ],
            culturalNote: "中国海关对保健品、食品、药品有严格的进口限制。大量寄送保健品可能被视为商业行为而被扣押或征税。",
            alternativeExpressions: [
              { textEn: "Just a heads up — Chinese customs can be picky about supplements. Stick to small amounts.", textZh: "提醒一下——中国海关对保健品管得挺严的。少量寄就好。", actionHint: "注意数量限制", frequency: "common" },
              { textEn: "Fair warning, some vitamins might get held up at the border. Keep it to personal use.", textZh: "说一下，有些维生素可能在边境被扣。只寄自用量就好。", actionHint: "了解风险后再寄", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. I only have two bottles, so it should be fine. Can I also add insurance to the package?",
            textZh: "了解了。我只有两瓶，应该没问题。可以给包裹加保险吗？",
          },
          {
            speaker: "them",
            role: "快递工作人员",
            textEn: "Yes, basic insurance up to $100 is included. If you want additional coverage, it's $3 per $100 of declared value. What's the total value of everything in the package?",
            textZh: "可以的，100美元以内的基本保险已经包含。如果要额外保额，每100美元申报价值收3美元。包裹里所有东西的总价值是多少？",
            keyPhrases: [
              { en: "basic insurance", zh: "基本保险" },
              { en: "additional coverage", zh: "额外保额" },
              { en: "declared value", zh: "申报价值" },
            ],
            alternativeExpressions: [
              { textEn: "The base coverage is $100 — anything above that, it's three bucks per hundred.", textZh: "基础保额是100美元——超出部分每一百收三块。", actionHint: "评估是否需要加保", frequency: "common" },
              { textEn: "Insurance comes with it up to a hundred. Want more coverage? It's $3 for every extra hundred.", textZh: "自带一百美元以内的保险。要加保吗？每多一百收3美元。", actionHint: "根据物品价值决定", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "About $150 total. I'll keep the basic insurance. Here's the completed customs form.",
            textZh: "总共大约150美元。基本保险就够了。海关表填好了，给你。",
          },
          {
            speaker: "them",
            role: "快递工作人员",
            textEn: "Let me check the form... Looks good. Your total is $58 for standard shipping. Here's your tracking number — you can track it on our website or app. The package should arrive in about 10 business days. Keep the receipt in case you need to file a claim.",
            textZh: "我看一下表格……没问题。标准快递总共58美元。这是你的追踪号——可以在网站或App上追踪。包裹大约10个工作日到。收据保管好，万一需要理赔用得到。",
            keyPhrases: [
              { en: "tracking number", zh: "追踪号" },
              { en: "track it", zh: "追踪" },
              { en: "keep the receipt", zh: "保管好收据" },
              { en: "file a claim", zh: "申请理赔" },
            ],
            alternativeExpressions: [
              { textEn: "That comes to $58. Here's your tracking info — hang on to the receipt just in case.", textZh: "一共58美元。这是追踪信息——收据留好以防万一。", actionHint: "记下追踪号", frequency: "common" },
              { textEn: "All good. Fifty-eight dollars total. You can track it online. Keep this receipt safe.", textZh: "没问题。总共五十八美元。可以网上追踪。收据保管好。", actionHint: "保存好凭证", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you! Will I get a notification when it's delivered?",
            textZh: "谢谢！送达时我会收到通知吗？",
          },
          {
            speaker: "them",
            role: "快递工作人员",
            textEn: "Yes, you'll get email and text notifications at each stage — picked up, in transit, cleared customs, and delivered. If it gets stuck in customs, you'll be notified too. Have a great day!",
            textZh: "会的，每个阶段你都会收到邮件和短信通知——揽收、运输中、通关、送达。如果卡在海关了也会通知你。祝你愉快！",
            keyPhrases: [
              { en: "notifications", zh: "通知" },
              { en: "picked up", zh: "揽收" },
              { en: "in transit", zh: "运输中" },
              { en: "cleared customs", zh: "通关" },
              { en: "delivered", zh: "送达" },
              { en: "stuck in customs", zh: "卡在海关" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, we'll ping you at every step — pickup, transit, customs, delivery. You'll know exactly where it is.", textZh: "会的，每一步都会通知你——揽收、运输、通关、送达。你随时知道在哪。", actionHint: "关注通知别错过", frequency: "common" },
              { textEn: "You'll get updates the whole way — email and text. If customs holds it up, you'll hear about that too.", textZh: "全程都有更新——邮件和短信。如果海关卡住了也会告诉你。", actionHint: "留意海关状态", frequency: "common" },
            ],
          },
        ],
      },

      // --- Flow 2: 收包裹+追踪+签收问题 ---
      {
        id: "post-receive",
        titleZh: "收取包裹",
        titleEn: "Receiving & Tracking Packages",
        description: "追踪从国内寄来的包裹、处理投递问题和签收",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm expecting a package from China but the tracking hasn't updated in a week. It says 'held at customs'. What does that mean?",
            textZh: "你好，我在等一个从中国寄来的包裹，但追踪信息一周没更新了。显示\"held at customs\"。这是什么意思？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "\"Held at customs\" means your package is being inspected or requires additional documentation. This is fairly common for international packages. Can I have your tracking number? Let me look into the specific reason.",
            textZh: "\"Held at customs\"意思是你的包裹正在被检查或需要补充文件。国际包裹这种情况很常见。能告诉我追踪号吗？我查一下具体原因。",
            keyPhrases: [
              { en: "held at customs", zh: "被海关扣留" },
              { en: "inspected", zh: "被检查" },
              { en: "additional documentation", zh: "补充文件" },
              { en: "look into", zh: "查一下" },
            ],
            vocabNotes: {
              "held at customs": {
                meaningInContext: "在这句话里表示：包裹被海关暂扣，可能需要检查、缴税或补充文件后才能放行",
                similarUsage: "类似用法：My parcel was held at customs for two weeks before it was released.",
              },
            },
            alternativeExpressions: [
              { textEn: "That means customs is looking at it — could be a random check or they need more info. What's your tracking number?", textZh: "意思是海关在查——可能是抽检或者需要更多信息。追踪号是多少？", actionHint: "准备好追踪号", frequency: "common" },
              { textEn: "It's sitting in customs — pretty normal for international stuff. Let me pull it up with your tracking number.", textZh: "包裹在海关那——国际件挺常见的。告诉我追踪号我查一下。", actionHint: "不用太担心", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "The tracking number is CN1234567890. It was sent about two weeks ago.",
            textZh: "追踪号是CN1234567890。大约两周前寄出的。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "I see it now. The package is being held because the declared value exceeds the duty-free threshold. There's a customs duty of $12.50 that needs to be paid before it can be released. You should receive a notice in the mail with instructions, or you can pay it online through our customs portal.",
            textZh: "我查到了。包裹被扣住是因为申报价值超过了免税门槛。需要缴纳12.50美元的关税才能放行。你应该会收到一封信件通知和说明，或者你可以在我们的海关门户网站上在线支付。",
            keyPhrases: [
              { en: "declared value", zh: "申报价值" },
              { en: "duty-free threshold", zh: "免税门槛" },
              { en: "customs duty", zh: "关税" },
              { en: "released", zh: "放行" },
              { en: "customs portal", zh: "海关门户网站" },
            ],
            alternativeExpressions: [
              { textEn: "Looks like they flagged it for duty — $12.50. You can pay online or wait for a letter in the mail.", textZh: "看起来被标记要交关税——12.50美元。可以网上付或者等信件通知。", actionHint: "尽快付款加速放行", frequency: "common" },
              { textEn: "The value's over the threshold, so there's a $12.50 duty. Pay it on our site and it'll get moving again.", textZh: "价值超过免税线了，要交12.50美元关税。在网站上付完就会继续寄了。", actionHint: "网上支付更快", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll pay it online now. Once I pay, how long until the package is delivered?",
            textZh: "我现在就网上付。付完后多久能送到？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Once the duty is paid, it typically takes 2 to 3 business days for the package to clear customs and reach your local delivery office. After that, it's usually next-day delivery. You'll get a tracking update when it's out for delivery.",
            textZh: "关税付完后，通常需要2到3个工作日通关并到达你当地的投递站。之后通常第二天就送到。快递员出发送货时你会收到追踪更新。",
            keyPhrases: [
              { en: "clear customs", zh: "通关" },
              { en: "local delivery office", zh: "当地投递站" },
              { en: "next-day delivery", zh: "第二天送达" },
              { en: "out for delivery", zh: "正在投递中" },
            ],
            alternativeExpressions: [
              { textEn: "Give it a couple days after you pay, then it should clear and be at your door pretty quick.", textZh: "付完等两三天就能通关，之后很快就到你家门口了。", actionHint: "耐心等几天", frequency: "common" },
              { textEn: "Once that's paid, figure 2-3 days to clear customs, then next-day delivery from there.", textZh: "付完大概2-3天通关，然后第二天就能送到。", actionHint: "关注追踪更新", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "What if I'm not home when they try to deliver? I work during the day.",
            textZh: "如果送货时我不在家怎么办？我白天上班。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "If no one's home, the carrier will leave a notice and try again the next day. After three attempts, the package goes to your local post office for pickup — you'll have 15 days to claim it. Alternatively, you can sign up for 'Deliver to Neighbor' or have it held at a pickup location like a UPS Store or an Amazon Locker.",
            textZh: "如果没人在家，快递员会留一个通知单，第二天再送。尝试三次后，包裹会被送到当地邮局让你自取——有15天的领取时间。你也可以设置\"投递给邻居\"或者让包裹保存在自取点，比如UPS Store或Amazon Locker。",
            keyPhrases: [
              { en: "leave a notice", zh: "留通知单" },
              { en: "three attempts", zh: "尝试三次" },
              { en: "pickup location", zh: "自取点" },
              { en: "claim it", zh: "领取" },
              { en: "Amazon Locker", zh: "亚马逊自取柜" },
            ],
            alternativeExpressions: [
              { textEn: "You can authorize them to leave it at the door — sign the delivery notice.", textZh: "你可以授权他们放在门口——在通知单上签字就行。", actionHint: "考虑安全性后决定", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll set it to hold at the nearest UPS Store. Can I also change the delivery address for future packages?",
            textZh: "我设置到最近的UPS Store保存吧。以后的包裹可以改送货地址吗？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Yes, you can set up a permanent redirect or change the address for individual packages through our website. There's no charge for holding at a UPS Store. For address changes on packages already in transit, there may be a $5 redirect fee. Is there anything else I can help with?",
            textZh: "可以的，你可以在网站上设置永久转寄或者单个包裹改地址。保存在UPS Store不收费。已经在运输中的包裹改地址可能有5美元的转寄费。还有什么可以帮忙的吗？",
            keyPhrases: [
              { en: "permanent redirect", zh: "永久转寄" },
              { en: "individual packages", zh: "单个包裹" },
              { en: "in transit", zh: "在运输中" },
              { en: "redirect fee", zh: "转寄费" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, you can set that up on our website. Holding at a store is free, but rerouting one that's already moving costs five bucks.", textZh: "可以的，在网站上设置就行。存在店里免费，但已经在路上的改地址要五块钱。", actionHint: "提前设置更省钱", frequency: "common" },
              { textEn: "Yeah, no problem. You can do a one-time redirect or make it permanent. No charge for store pickup.", textZh: "没问题。可以改一次或者设置永久转寄。存到店里不收费。", actionHint: "根据需要选择", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "No, that's everything. Thank you for your help — I feel much better knowing where my package is.",
            textZh: "没有了，就这些。谢谢你的帮助——知道包裹在哪里我就放心了。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Glad I could help! Your package should be moving again soon after the duty payment. If you have any other questions, you can always reach us by phone, chat, or through the app. Have a great day!",
            textZh: "很高兴能帮到你！关税付完后包裹很快就会继续运送。如果有其他问题，可以通过电话、在线聊天或App联系我们。祝你愉快！",
            keyPhrases: [
              { en: "moving again", zh: "继续运送" },
              { en: "reach us", zh: "联系我们" },
            ],
            alternativeExpressions: [
              { textEn: "Happy to help! Once the duty clears, your package will be on its way. Hit us up anytime if you need anything.", textZh: "很高兴能帮到你！关税处理完包裹就会继续走了。有问题随时联系我们。", actionHint: "保存客服联系方式", frequency: "common" },
              { textEn: "No worries at all! Should be moving again real soon. We're here 24/7 if anything comes up.", textZh: "别担心！很快就会继续运送了。我们24小时在线，有事随时找我们。", actionHint: "记住多种联系方式", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 去银行 ====================
  {
    id: "daily-life-bank-visit",
    category: "daily-life",
    titleZh: "去银行",
    titleEn: "Bank Visit",
    description: "去银行办理存款、兑换外币和咨询服务，填写表格和排队",
    otherRole: "银行柜员",
    otherRoleIcon: "🏦",
    flows: [
      // --- Flow 1: 开户与存款 ---
      {
        id: "deposit-service",
        titleZh: "存款与开户咨询",
        titleEn: "Deposit & Account Inquiry",
        description: "去银行存钱、了解开户要求和汇率",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to exchange some Chinese yuan for US dollars. And I also have a question about opening a bank account.",
            textZh: "你好，我想把一些人民币换成美元。另外我还想咨询一下开户。",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Of course! For the currency exchange, today's rate is 1 US dollar to 7.12 yuan. How much would you like to exchange? And for the account, are you a US resident or visiting?",
            textZh: "好的！今天的汇率是1美元兑7.12人民币。你要换多少？开户的话，你是美国居民还是来访的？",
            keyPhrases: [
              { en: "currency exchange", zh: "货币兑换" },
              { en: "exchange rate", zh: "汇率" },
              { en: "US resident", zh: "美国居民" },
            ],
            variations: [
              { textEn: "Sure thing. What currency are you exchanging, and how much?", textZh: "好的。你要换什么货币，换多少？" },
            ],
            alternativeExpressions: [
              { textEn: "No problem! Today's exchange rate is about 7.12 yuan per dollar. How much are we talking?", textZh: "没问题！今天汇率大概是7.12人民币换1美元。你要换多少？", actionHint: "确认当日汇率", frequency: "common" },
              { textEn: "Sure, we can do that. Rate's 7.12 today. And are you looking to open an account too, or just the exchange?", textZh: "可以的。今天汇率7.12。你也要开户还是只换钱？", actionHint: "说清楚所有需求", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd like to exchange about 5,000 yuan. And I'm here on a work visa — I'll be staying for two years.",
            textZh: "我想换大约5000人民币。我是工作签证来的——会待两年。",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "That would be about $702 at today's rate. There's a $10 service fee for the exchange. For the bank account — with a work visa, you can open a checking account. I'll need your passport, visa, proof of address, and your Social Security number or ITIN.",
            textZh: "按今天的汇率大约702美元。兑换有10美元手续费。开户的话——有工作签证可以开支票账户。我需要你的护照、签证、地址证明，以及社会安全号码或ITIN。",
            keyPhrases: [
              { en: "service fee", zh: "手续费" },
              { en: "checking account", zh: "支票账户" },
              { en: "proof of address", zh: "地址证明" },
              { en: "Social Security number", zh: "社会安全号码" },
              { en: "ITIN", zh: "个人纳税识别号" },
            ],
            culturalNote: "在美国开银行账户通常需要两种ID（如护照+签证）。有些银行接受ITIN代替SSN。支票账户（checking）用于日常消费，储蓄账户（savings）用于存钱生息。",
            alternativeExpressions: [
              { textEn: "At today's rate that's roughly $702, minus a $10 fee. For the account, I'll need your passport, visa, proof of address, and SSN or ITIN.", textZh: "按今天的汇率大约702美元，减去10美元手续费。开户需要护照、签证、地址证明和SSN或ITIN。", actionHint: "提前准备好所有材料", frequency: "common" },
              { textEn: "That'll come out to about seven hundred bucks after the exchange fee. And yeah, with a work visa you're good to open a checking account — just bring your docs.", textZh: "扣掉手续费大概七百块。有工作签证可以开支票账户——把证件带齐就行。", actionHint: "确认有哪些证件", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have everything except a proof of address — I just moved in. Can a lease agreement work?",
            textZh: "我都有，除了地址证明——我刚搬进来。租房合同可以用吗？",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Yes, a signed lease agreement is accepted. A utility bill works too, but since you just moved in, the lease is perfect. Let me get the application forms for you. We also have a checking account with no monthly fees if you maintain a $500 minimum balance.",
            textZh: "可以，签好的租房合同可以用。水电费账单也行，但既然你刚搬进来，租约就可以。我给你拿申请表。我们还有一种没有月费的支票账户，条件是保持最低500美元余额。",
            keyPhrases: [
              { en: "lease agreement", zh: "租房合同" },
              { en: "utility bill", zh: "水电费账单" },
              { en: "application forms", zh: "申请表" },
              { en: "minimum balance", zh: "最低余额" },
              { en: "monthly fees", zh: "月费" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds good. Can I also set up online banking and a debit card?",
            textZh: "听起来不错。我还能开通网上银行和借记卡吗？",
            alternativeExpressions: [
              { textEn: "A lease works perfectly. We've got a no-fee checking account — just keep five hundred in there.", textZh: "租约完全可以。我们有免月费的支票账户——保持五百余额就行。", actionHint: "注意最低余额要求", frequency: "common" },
              { textEn: "Your lease is fine. We have a no-fee option if you keep a $500 balance.", textZh: "租房合同可以。余额保持500美元可以免月费。", actionHint: "了解免费条件", frequency: "common" },
            ],
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Absolutely. Online banking is set up automatically — you'll create a username and password. The debit card will be mailed to your address in 5 to 7 business days. In the meantime, I can give you a temporary card today.",
            textZh: "当然。网上银行自动开通——你设置一个用户名和密码。借记卡会在5到7个工作日内寄到你的地址。在这期间，我今天可以给你一张临时卡。",
            keyPhrases: [
              { en: "online banking", zh: "网上银行" },
              { en: "debit card", zh: "借记卡" },
              { en: "temporary card", zh: "临时卡" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing. Online banking sets up right away. Your debit card ships out in about a week — I'll give you a temp card for now.", textZh: "没问题。网银马上就能用。借记卡大概一周寄到——先给你一张临时卡。", actionHint: "记下临时卡信息", frequency: "common" },
              { textEn: "Yep, you'll get both. Card takes 5-7 days to arrive, but here's a temporary one to get you started.", textZh: "都可以。卡5-7天寄到，先给你一张临时卡用着。", actionHint: "临时卡也能正常消费", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. One more question — can I wire money to China from this account?",
            textZh: "太好了。再问一下——从这个账户能往中国汇款吗？",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Yes, we offer international wire transfers. The fee is $35 per transfer, and it takes 2 to 3 business days. You can do it online or at any branch. You'll need the recipient's bank name, SWIFT code, and account number.",
            textZh: "可以，我们提供国际电汇。每次手续费35美元，需要2到3个工作日。你可以在网上或任何网点办理。你需要收款人的银行名称、SWIFT代码和账号。",
            keyPhrases: [
              { en: "wire transfer", zh: "电汇" },
              { en: "SWIFT code", zh: "SWIFT代码" },
              { en: "recipient", zh: "收款人" },
            ],
          },
        ],
      },

      // --- Flow 2: 解决账户问题 ---
      {
        id: "account-issue",
        titleZh: "解决账户问题",
        titleEn: "Resolving Account Issues",
        description: "在银行解决账户异常、卡被冻结等问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, my debit card got declined at the grocery store this morning, but I know I have money in my account. Can you help me figure out what's wrong?",
            textZh: "你好，我的借记卡今天早上在超市被拒了，但我知道账户里有钱。能帮我看看怎么回事吗？",
            alternativeExpressions: [
              { textEn: "Yep, we do international wires. It's $35 a pop, takes a couple business days. You'll need their bank info and SWIFT code.", textZh: "可以，我们做国际电汇。每次35美元，两三个工作日到。需要对方的银行信息和SWIFT代码。", actionHint: "提前准备收款信息", frequency: "common" },
              { textEn: "Absolutely. Wire transfers to China are $35 each. You can do it online once your account is set up.", textZh: "当然。往中国汇款每次35美元。账户开好后网上就能操作。", actionHint: "网上汇款更方便", frequency: "common" },
            ],
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Let me pull up your account. Can I see your ID? ... I see the issue — there's a security hold on your card because of an unusual transaction pattern. It looks like there were multiple transactions in different cities within a short time. Did you travel recently?",
            textZh: "我调出你的账户。能看一下你的证件吗？……我看到问题了——你的卡因为异常交易模式被安全冻结了。看起来短时间内在不同城市有多笔交易。你最近旅行了吗？",
            keyPhrases: [
              { en: "declined", zh: "被拒" },
              { en: "security hold", zh: "安全冻结" },
              { en: "unusual transaction pattern", zh: "异常交易模式" },
            ],
            alternativeExpressions: [
              { textEn: "I see what happened — your card got flagged for suspicious activity. Looks like transactions popped up in two different cities. Have you been traveling?", textZh: "我看到了——你的卡被标记为可疑活动。两个不同城市出现了交易记录。你最近出差了吗？", actionHint: "如实说明行程", frequency: "common" },
              { textEn: "There's a fraud alert on your account — multiple charges in different locations triggered it. Did you travel recently?", textZh: "你的账户有欺诈警报——不同地点的多笔消费触发了警报。你最近旅行了吗？", actionHint: "说明真实消费情况", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes! I flew from New York to Chicago yesterday. That explains it. Can you remove the hold?",
            textZh: "是的！我昨天从纽约飞到芝加哥了。难怪。能解除冻结吗？",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "I've lifted the hold — your card should work now. In the future, you can set a travel notice through our app or online banking before you travel. That way the system knows the transactions are legitimate and won't freeze your card.",
            textZh: "我已经解除冻结了——你的卡现在应该能用了。以后出行前可以通过我们的App或网上银行设置旅行通知。这样系统就知道交易是正常的，不会冻结你的卡。",
            keyPhrases: [
              { en: "lifted the hold", zh: "解除冻结" },
              { en: "travel notice", zh: "旅行通知" },
              { en: "legitimate", zh: "合法的/正常的" },
            ],
            alternativeExpressions: [
              { textEn: "All good now — I've removed the hold. Next time, just set a travel alert in the app before you head out.", textZh: "搞定了——冻结解除了。下次出发前在App里设个旅行提醒就好。", actionHint: "养成出行前设置的习惯", frequency: "common" },
              { textEn: "Your card's back to normal. Pro tip — set up travel notifications so this doesn't happen again.", textZh: "卡恢复正常了。建议以后设置旅行通知，这样就不会再冻结了。", actionHint: "在App里提前设置", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know! I'll do that next time. While I'm here, I'd also like to deposit this check. It's my first paycheck from my new job.",
            textZh: "了解了！下次我会设置的。既然来了，我还想存一张支票。这是我新工作的第一张工资支票。",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "Congratulations on the new job! Endorse the back of the check — sign your name right on the back. The first $225 will be available immediately, and the rest within 2 business days. You can also deposit checks through our mobile app in the future — just take a photo of the front and back.",
            textZh: "恭喜新工作！在支票背面签名背书。前225美元立即可用，其余2个工作日内到账。以后你也可以通过手机App存支票——拍正反面照片就行。",
            keyPhrases: [
              { en: "endorse", zh: "背书/签名" },
              { en: "deposit checks", zh: "存支票" },
              { en: "mobile app", zh: "手机App" },
              { en: "available immediately", zh: "立即可用" },
            ],
            culturalNote: "在美国，收到纸质支票后需要在背面签名（endorse）才能存入或兑现。现在很多银行支持手机拍照存支票，非常方便。",
            alternativeExpressions: [
              { textEn: "Congrats! Just sign the back of the check and you're good. First $225 is available right away — rest clears in two days.", textZh: "恭喜！支票背面签个名就行。前225美元马上可用——其余两天到账。", actionHint: "记得签名再存", frequency: "common" },
              { textEn: "Nice, first paycheck! Flip it over, sign the back. You can also snap a photo through the app next time.", textZh: "不错，第一张工资！翻过来背面签名。下次也可以用App拍照存。", actionHint: "试试手机存支票", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That mobile deposit sounds convenient! Thank you for all your help today.",
            textZh: "手机存支票听起来很方便！谢谢你今天的帮助。",
          },
          {
            speaker: "them",
            role: "银行柜员",
            textEn: "You're welcome! If you have any issues, you can also call our 24/7 customer service line. The number is on the back of your card. Have a great day!",
            textZh: "不客气！如果有任何问题，你也可以拨打我们的24小时客服电话。号码在卡的背面。祝你有美好的一天！",
            keyPhrases: [
              { en: "24/7 customer service", zh: "24小时客服" },
            ],
            alternativeExpressions: [
              { textEn: "Anytime! If anything comes up, our support line is 24/7 — number's right on the back of your card.", textZh: "随时！有问题的话客服24小时在线——号码在卡背面。", actionHint: "存好客服电话", frequency: "common" },
              { textEn: "Glad to help! Don't hesitate to call us — we're here around the clock. Have a good one!", textZh: "很高兴能帮到你！别犹豫，随时打电话——我们全天候在线。祝你愉快！", actionHint: "记住联系方式", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 预约挂号 ====================
  {
    id: "daily-life-dentist",
    category: "daily-life",
    titleZh: "预约挂号",
    titleEn: "Making Appointments",
    description: "打电话或线上预约看医生、看牙、做检查等，确认时间和注意事项",
    otherRole: "前台/预约助理",
    otherRoleIcon: "📅",
    flows: [
      // --- Flow 1: 电话预约看牙 ---
      {
        id: "dental-appointment",
        titleZh: "预约看牙",
        titleEn: "Booking a Dental Appointment",
        description: "打电话预约看牙医，说明情况和确认时间",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to make an appointment to see a dentist. I think I have a cavity — my tooth has been hurting for a few days.",
            textZh: "你好，我想预约看牙医。我觉得我有蛀牙——牙齿疼了好几天了。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'm sorry to hear that. Are you a new or existing patient? And are you experiencing any severe pain or swelling?",
            textZh: "很遗憾。你是新患者还是老患者？有严重疼痛或肿胀吗？",
            keyPhrases: [
              { en: "cavity", zh: "蛀牙/龋洞" },
              { en: "new or existing patient", zh: "新患者还是老患者" },
              { en: "severe pain", zh: "严重疼痛" },
              { en: "swelling", zh: "肿胀" },
            ],
            alternativeExpressions: [
              { textEn: "Oh no, that doesn't sound fun. Are you one of our patients, or is this your first time? How bad is the pain?", textZh: "听起来不好受。你是我们的老患者还是第一次来？疼得厉害吗？", actionHint: "描述清楚症状", frequency: "common" },
              { textEn: "Sorry to hear that. Have you been here before? And is it more of a dull ache or sharp pain?", textZh: "很抱歉。你以前来过吗？是闷痛还是刺痛？", actionHint: "区分疼痛类型", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm a new patient. The pain is moderate — it gets worse when I eat cold or hot food.",
            textZh: "我是新患者。疼痛中等——吃冷或热的食物时会加重。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "That sounds like it could be a cavity or sensitivity issue. I can schedule you for an exam and cleaning. The earliest available slot is this Thursday at 2 PM, or next Monday at 10 AM. Which works better for you?",
            textZh: "听起来可能是蛀牙或敏感问题。我可以给你安排检查和洗牙。最早的空位是这周四下午2点，或者下周一上午10点。哪个方便？",
            keyPhrases: [
              { en: "exam and cleaning", zh: "检查和洗牙" },
              { en: "earliest available slot", zh: "最早的空位" },
              { en: "sensitivity", zh: "敏感" },
            ],
            alternativeExpressions: [
              { textEn: "Could be a cavity. Let's get you in for an exam. I've got Thursday at 2 or Monday at 10 — which one works?", textZh: "可能是蛀牙。给你安排个检查。周四下午2点或周一上午10点——哪个方便？", actionHint: "选最早的时间", frequency: "common" },
              { textEn: "Sounds like you need to come in. Our next openings are Thursday afternoon or Monday morning — your pick.", textZh: "看来你需要来一趟。下一个空位是周四下午或周一上午——你选。", actionHint: "尽早预约", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thursday at 2 PM works. What do I need to bring?",
            textZh: "周四下午2点可以。我需要带什么？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Please bring a photo ID and your dental insurance card if you have one. If you don't have insurance, we offer a self-pay discount — the exam and X-ray would be $120 without insurance. Arrive 15 minutes early to fill out the new patient forms.",
            textZh: "请带照片ID和牙科保险卡（如果有的话）。如果没有保险，我们有自费折扣——没有保险的话检查和X光是120美元。提前15分钟到填新患者表。",
            keyPhrases: [
              { en: "dental insurance", zh: "牙科保险" },
              { en: "self-pay discount", zh: "自费折扣" },
              { en: "new patient forms", zh: "新患者表格" },
              { en: "arrive 15 minutes early", zh: "提前15分钟到" },
            ],
            alternativeExpressions: [
              { textEn: "Bring your ID and insurance card. No insurance? No worries, we have a cash price — $120 for the exam and X-rays. Come 15 minutes early for paperwork.", textZh: "带上证件和保险卡。没保险？没关系，自费价检查加X光120美元。提前15分钟来填表。", actionHint: "确认是否有保险", frequency: "common" },
              { textEn: "You'll need a photo ID. If you've got dental insurance, bring that too. Otherwise it's $120 out of pocket. And please arrive a bit early to fill out forms.", textZh: "需要带照片ID。有牙科保险的话也带上。没有的话自付120美元。请提前一点到填表格。", actionHint: "了解自费价格", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have insurance through my employer. Can I send the insurance information ahead of time so you can verify coverage?",
            textZh: "我有雇主提供的保险。我能提前发保险信息让你们确认覆盖范围吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "That would be great! You can email it to us or upload it through our patient portal. We'll verify your benefits and let you know your copay before you come in. Is there anything else you'd like to know?",
            textZh: "那太好了！你可以邮件发给我们或通过患者门户上传。我们会确认你的保险权益，在你来之前告知你自付金额。还有其他想了解的吗？",
            keyPhrases: [
              { en: "patient portal", zh: "患者门户" },
              { en: "verify your benefits", zh: "确认保险权益" },
              { en: "copay", zh: "自付金额/挂号费" },
            ],
            culturalNote: "在美国，看牙科通常需要单独的牙科保险（dental insurance），普通医疗保险不一定包含。copay 是每次看诊的固定自付金额。",
            alternativeExpressions: [
              { textEn: "That'd be great — email or upload it on our portal. We'll check your coverage and let you know what you owe before you come.", textZh: "那太好了——发邮件或在门户上传。我们会查你的保险，来之前告诉你要付多少。", actionHint: "提前确认费用", frequency: "common" },
              { textEn: "Absolutely. Send it over and we'll verify everything. That way there are no surprises when you check in.", textZh: "当然。发过来我们确认一切。这样你登记时就不会有意外费用了。", actionHint: "避免意外账单", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That covers everything. I'll email the insurance info today. See you Thursday!",
            textZh: "都清楚了。我今天把保险信息发邮件过去。周四见！",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Sounds good! We'll send you a confirmation text and a reminder the day before. If the pain gets significantly worse before Thursday, call us and we'll try to fit you in sooner. Take care!",
            textZh: "好的！我们会发确认短信，前一天还会发提醒。如果周四之前疼痛明显加重，打电话给我们，我们尽量提前安排。保重！",
            keyPhrases: [
              { en: "confirmation text", zh: "确认短信" },
              { en: "reminder", zh: "提醒" },
              { en: "fit you in", zh: "给你安排/插号" },
            ],
            alternativeExpressions: [
              { textEn: "Perfect! You'll get a text to confirm. If things get worse before then, give us a ring and we'll squeeze you in.", textZh: "好的！会收到确认短信。如果之前变严重了，打电话过来我们给你加号。", actionHint: "疼痛加重要及时联系", frequency: "common" },
              { textEn: "All set! We'll text you a reminder the day before. And hey, if the pain really kicks up, call us — we'll try to see you sooner.", textZh: "都安排好了！前一天会发短信提醒。如果疼痛加剧，打电话来——我们尽量提前安排。", actionHint: "保存诊所电话", frequency: "common" },
            ],
          },
        ],
      },

      // --- Flow 2: 更改或取消预约 ---
      {
        id: "reschedule",
        titleZh: "更改预约",
        titleEn: "Rescheduling an Appointment",
        description: "需要更改或取消已有的预约",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have an appointment scheduled for Thursday at 2 PM, but something came up at work. Can I reschedule?",
            textZh: "你好，我预约了周四下午2点，但工作上有事。能改时间吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course. What's the name on the appointment? And just so you know, our cancellation policy requires at least 24 hours' notice, otherwise there's a $50 late cancellation fee.",
            textZh: "当然。预约人姓名？另外提醒一下，我们的取消政策需要至少提前24小时通知，否则有50美元的迟取消费。",
            keyPhrases: [
              { en: "reschedule", zh: "改时间" },
              { en: "cancellation policy", zh: "取消政策" },
              { en: "24 hours' notice", zh: "提前24小时通知" },
              { en: "late cancellation fee", zh: "迟取消费" },
            ],
            alternativeExpressions: [
              { textEn: "No problem. What's the name? Just a heads-up — we need 24 hours' notice or there's a $50 fee.", textZh: "没问题。叫什么名字？提醒一下——需要提前24小时通知，否则有50美元的费用。", actionHint: "确认是否在取消政策内", frequency: "common" },
              { textEn: "Sure thing. Can I get your name? And just so you know, cancellations within 24 hours come with a fifty-dollar charge.", textZh: "好的。名字是？顺便说一下，24小时内取消要收五十美元。", actionHint: "提前了解政策", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's under Wang Wei. Thursday is two days away, so I should be within the policy. Can I move it to Friday or next week?",
            textZh: "王伟。周四还有两天，应该在政策范围内。能改到周五或下周吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Let me check... Friday is fully booked. I have openings on Monday at 9 AM, Wednesday at 3:30 PM, or the following Thursday at 11 AM. Do any of those work?",
            textZh: "我看看……周五满了。周一上午9点、周三下午3:30或下下个周四上午11点有空。哪个可以？",
            keyPhrases: [
              { en: "fully booked", zh: "满了" },
              { en: "openings", zh: "空位" },
            ],
            alternativeExpressions: [
              { textEn: "Friday's all booked up. How about Monday morning, Wednesday afternoon, or next Thursday? Any of those work?", textZh: "周五排满了。周一上午、周三下午或下周四怎么样？哪个可以？", actionHint: "选最方便的时间", frequency: "common" },
              { textEn: "No luck on Friday — we're full. I've got a few spots next week though. Monday 9 AM, Wednesday 3:30, or Thursday 11 AM.", textZh: "周五不行——满了。下周有几个空位。周一9点、周三3:30或周四11点。", actionHint: "灵活调整时间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Wednesday at 3:30 works perfectly. Can I also add a teeth whitening consultation to the same visit?",
            textZh: "周三3:30可以。我能在同一次就诊中加一个牙齿美白咨询吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Sure, I'll note that. The consultation is free — the dentist will assess your teeth and discuss options and pricing with you. Your appointment is now Wednesday at 3:30 PM. Anything else?",
            textZh: "好的，我备注一下。咨询是免费的——牙医会评估你的牙齿，跟你讨论方案和价格。你的预约现在是周三下午3:30。还有别的吗？",
            keyPhrases: [
              { en: "teeth whitening", zh: "牙齿美白" },
              { en: "consultation", zh: "咨询" },
              { en: "assess", zh: "评估" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, I'll add a whitening consult. It's on the house — the dentist will go over your options when you come in.", textZh: "好的，我加个美白咨询。免费的——看诊时牙医会跟你讨论方案。", actionHint: "利用免费咨询了解方案", frequency: "common" },
              { textEn: "No problem, I'll note it down. The consultation doesn't cost anything. Your new time is Wednesday 3:30.", textZh: "没问题，我记下来。咨询不收费。你的新预约是周三3:30。", actionHint: "确认新时间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's all. Thank you for being so flexible!",
            textZh: "就这些了。谢谢你这么灵活！",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "No problem at all! You'll receive an updated confirmation text shortly. Remember — 15 minutes early for your paperwork. See you Wednesday!",
            textZh: "没问题！你很快会收到更新的确认短信。记得——提前15分钟来填表。周三见！",
            keyPhrases: [
              { en: "updated confirmation", zh: "更新的确认" },
              { en: "paperwork", zh: "表格/文件" },
            ],
            alternativeExpressions: [
              { textEn: "You're all set! We'll shoot you a new confirmation text. Don't forget — come a little early for your forms. See you then!", textZh: "搞定了！会给你发新的确认短信。别忘了——提前来填表。到时见！", actionHint: "注意新的时间", frequency: "common" },
              { textEn: "Done! Look out for an updated text. And remember to come 15 minutes early. See you Wednesday!", textZh: "好了！留意更新的短信。记得提前15分钟到。周三见！", actionHint: "提前安排出行", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 搬家 ====================
  {
    id: "daily-life-move",
    category: "daily-life",
    titleZh: "搬家",
    titleEn: "Moving House",
    description: "在国外搬家，联系搬家公司、处理水电网设置和地址变更",
    otherRole: "搬家公司/物业",
    otherRoleIcon: "📦",
    flows: [
      // --- Flow 1: 联系搬家公司 ---
      {
        id: "hiring-movers",
        titleZh: "联系搬家公司",
        titleEn: "Hiring Movers",
        description: "询价、预约搬家公司和确认搬家细节",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm moving from a one-bedroom apartment to a new place across town next Saturday. Can I get a quote?",
            textZh: "你好，我下周六要从一居室公寓搬到城对面的新地方。能报个价吗？",
          },
          {
            speaker: "them",
            role: "搬家公司",
            textEn: "Sure! A one-bedroom local move is typically $400 to $600, depending on the amount of stuff and whether there are stairs or an elevator. How much furniture do you have? Any heavy items like a piano or a safe?",
            textZh: "好的！一居室本地搬家通常400到600美元，取决于东西多少和有没有楼梯或电梯。你有多少家具？有钢琴或保险箱这类重物吗？",
            keyPhrases: [
              { en: "get a quote", zh: "报价" },
              { en: "local move", zh: "本地搬家" },
              { en: "depending on", zh: "取决于" },
              { en: "heavy items", zh: "重物" },
            ],
            alternativeExpressions: [
              { textEn: "For a one-bedroom, you're looking at maybe $400-600. Depends on how much stuff and if there are stairs. Got any big pieces?", textZh: "一居室大概400-600美元。看东西多少和有没有楼梯。有大件吗？", actionHint: "如实告知物品情况", frequency: "common" },
              { textEn: "A local one-bedroom move usually runs four to six hundred. Any pianos, safes, or anything super heavy?", textZh: "本地一居室搬家一般四到六百。有钢琴、保险箱或者特别重的东西吗？", actionHint: "重物可能额外收费", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's a moderate amount — a bed, a desk, a couch, about 15 boxes, and some kitchen stuff. Both places have elevators. No heavy specialty items.",
            textZh: "东西适中——一张床、一张桌子、一个沙发、大约15个箱子和一些厨房用品。两边都有电梯。没有特别重的物品。",
          },
          {
            speaker: "them",
            role: "搬家公司",
            textEn: "For that, I'd estimate around $450 — that includes two movers and a truck for about 4 hours. We charge $120 per hour after the first 3 hours. The price includes basic insurance coverage. Do you need packing materials — boxes, tape, bubble wrap?",
            textZh: "这样的话，大概450美元——包括两个搬家工人和一辆卡车，大约4小时。超过前3小时后每小时120美元。价格包含基本保险。你需要打包材料吗——纸箱、胶带、气泡膜？",
            keyPhrases: [
              { en: "estimate", zh: "估价" },
              { en: "per hour", zh: "每小时" },
              { en: "insurance coverage", zh: "保险覆盖" },
              { en: "packing materials", zh: "打包材料" },
              { en: "bubble wrap", zh: "气泡膜" },
            ],
            alternativeExpressions: [
              { textEn: "I'd say about $450 — two guys and a truck, roughly 4 hours. Need any boxes or packing stuff?", textZh: "大概450美元——两个人加一辆车，大约4小时。需要纸箱或打包材料吗？", actionHint: "考虑是否需要打包服务", frequency: "common" },
              { textEn: "That'll run you around four-fifty, all in. After 3 hours it's $120/hr. Want us to bring packing supplies?", textZh: "全包大概四百五。超过3小时每小时120。需要我们带打包材料吗？", actionHint: "注意超时费率", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take some boxes and tape. What time can you start on Saturday?",
            textZh: "我要一些纸箱和胶带。周六几点能开始？",
          },
          {
            speaker: "them",
            role: "搬家公司",
            textEn: "We can start as early as 8 AM. Morning slots are popular, so I'd recommend booking now. A $100 deposit secures your spot — the rest is due when the job is done. We accept cash, card, or Venmo.",
            textZh: "最早早上8点可以开始。早上的时段很抢手，建议现在预约。100美元定金保留名额——剩余的搬完付。我们接受现金、刷卡或Venmo。",
            keyPhrases: [
              { en: "morning slots", zh: "早上的时段" },
              { en: "deposit", zh: "定金" },
              { en: "secures your spot", zh: "保留名额" },
              { en: "due when the job is done", zh: "搬完付" },
            ],
            alternativeExpressions: [
              { textEn: "Earliest we can come is 8 AM. Mornings fill up fast, so I'd lock it in now. It's $100 down, rest when we're done.", textZh: "最早8点到。早上很快被订满，建议现在定。先付100定金，搬完付尾款。", actionHint: "尽早预定好时段", frequency: "common" },
              { textEn: "We can be there at 8 in the morning. Drop a hundred-dollar deposit and you're booked. Pay the rest once we finish.", textZh: "我们早上8点能到。交一百块定金就算订好了。干完活付剩下的。", actionHint: "准备好定金", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "8 AM works. What about tipping the movers? What's the standard?",
            textZh: "8点可以。搬家工人要给小费吗？一般给多少？",
          },
          {
            speaker: "them",
            role: "搬家公司",
            textEn: "Tips aren't required but always appreciated. The standard is about $20 to $30 per mover for a half-day job. If they handle your stuff with care and finish on time, a little extra goes a long way. We'll send a confirmation email with all the details.",
            textZh: "小费不是必须的但总是很感激。一般半天的活给每个工人20到30美元。如果他们搬东西很小心又准时完成，多给一点他们会很开心。我们会发一封确认邮件包含所有细节。",
            keyPhrases: [
              { en: "tipping", zh: "给小费" },
              { en: "per mover", zh: "每个搬家工人" },
              { en: "goes a long way", zh: "很有意义/很受用" },
            ],
            culturalNote: "在美国，给搬家工人小费是常见的礼貌做法。一般每人$20-30，如果活特别辛苦或有很多楼梯可以多给。",
            alternativeExpressions: [
              { textEn: "Totally up to you, but most folks give $20-30 per guy. They really appreciate it. I'll email you a confirmation with everything.", textZh: "完全看你，但大多数人每人给20-30美元。他们非常感激。我会发确认邮件给你。", actionHint: "准备好现金小费", frequency: "common" },
              { textEn: "It's not mandatory, but twenty to thirty bucks a mover is pretty standard. If they do a good job, a little tip means a lot.", textZh: "不是必须的，但每人二三十块挺常见。活干得好的话，给点小费他们很开心。", actionHint: "搬完当面给现金", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, I'll book it now. Thanks for the clear pricing!",
            textZh: "好的，我现在预约。谢谢清晰的报价！",
          },
        ],
      },

      // --- Flow 2: 水电网设置 ---
      {
        id: "utilities-setup",
        titleZh: "水电网设置",
        titleEn: "Setting Up Utilities",
        description: "搬家后设置水电气和网络",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just moved to a new apartment and I need to set up electricity. How do I get started?",
            textZh: "你好，我刚搬到新公寓，需要开通电。怎么办理？",
          },
          {
            speaker: "them",
            role: "电力公司客服",
            textEn: "Welcome to your new home! I can set that up for you. I'll need your new address, your full name, a phone number, and the date you'd like service to start. Do you want to start today?",
            textZh: "欢迎搬新家！我可以帮你办理。我需要你的新地址、全名、电话号码和你想开始用电的日期。你想从今天开始吗？",
            keyPhrases: [
              { en: "set up electricity", zh: "开通电" },
              { en: "service to start", zh: "开始用电" },
            ],
            alternativeExpressions: [
              { textEn: "Congrats on the new place! I just need your address, name, and phone number. When do you want the power on?", textZh: "恭喜搬新家！我需要你的地址、姓名和电话。你想什么时候通电？", actionHint: "确认开通日期", frequency: "common" },
              { textEn: "No problem, let's get you hooked up. Give me your new address and we'll get the electricity going. Starting today?", textZh: "没问题，帮你接通。告诉我新地址，我们来开通。从今天开始吗？", actionHint: "准备好地址信息", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, starting today please. Do I need a deposit? I'm new to the area and don't have a local credit history.",
            textZh: "是的，今天开始。需要交押金吗？我是新来的，没有本地信用记录。",
          },
          {
            speaker: "them",
            role: "电力公司客服",
            textEn: "Without local credit history, there is a $200 deposit — it's refunded after 12 months of on-time payments. You can pay it now by card. Your service will be activated within 2 hours. We'll also set up an online account so you can track your usage and pay bills.",
            textZh: "没有本地信用记录的话需要200美元押金——按时付款12个月后退还。现在可以刷卡付。2小时内开通。我们还会设置一个在线账户，你可以查看用电量和付账单。",
            keyPhrases: [
              { en: "deposit", zh: "押金" },
              { en: "credit history", zh: "信用记录" },
              { en: "on-time payments", zh: "按时付款" },
              { en: "activated", zh: "开通" },
              { en: "track your usage", zh: "查看用量" },
            ],
            alternativeExpressions: [
              { textEn: "Since you're new here, there's a $200 deposit — you get it back after a year of paying on time. Service kicks in within two hours.", textZh: "你是新来的，需要200美元押金——按时缴费一年后退还。两小时内开通。", actionHint: "按时付款很重要", frequency: "common" },
              { textEn: "No credit history means a two-hundred-dollar deposit, refundable after 12 months. Power will be on in a couple hours.", textZh: "没有信用记录需要两百美元押金，12个月后可退。两小时内通电。", actionHint: "押金可退还", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, I'll pay the deposit. Now, I also need to set up internet. Do you know which providers service this area?",
            textZh: "好的，我付押金。另外我还需要开通网络。你知道这个区域有哪些运营商吗？",
          },
          {
            speaker: "them",
            role: "电力公司客服",
            textEn: "The main providers in your area are Comcast and AT&T. Your building might also have fiber — check with your building management. They can usually tell you which provider has the best connection there.",
            textZh: "你那个区域的主要运营商是Comcast和AT&T。你的楼可能也有光纤——问一下物业。他们通常能告诉你哪家在那里信号最好。",
            keyPhrases: [
              { en: "providers", zh: "运营商" },
              { en: "fiber", zh: "光纤" },
              { en: "building management", zh: "物业" },
            ],
            alternativeExpressions: [
              { textEn: "Comcast and AT&T are your main options around there. Check with your building — they might already have fiber wired up.", textZh: "那一带主要是Comcast和AT&T。问问你的楼——可能已经接好光纤了。", actionHint: "先问物业再选运营商", frequency: "common" },
              { textEn: "You've got Comcast and AT&T in that area. Your landlord or building manager can tell you what's already set up.", textZh: "那个区域有Comcast和AT&T。房东或物业能告诉你楼里已经接了什么。", actionHint: "物业最了解网络情况", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks. One more thing — do I need to update my address with the post office so my mail gets forwarded?",
            textZh: "谢谢。还有一件事——我需要去邮局更新地址让邮件转寄吗？",
          },
          {
            speaker: "them",
            role: "电力公司客服",
            textEn: "Yes, definitely! You can do it online at USPS.com — it's called 'Change of Address.' There's a small $1.10 identity verification fee. They'll forward your mail from the old address to the new one for up to 12 months.",
            textZh: "是的，一定要！你可以在USPS.com上办——叫「地址变更」。有1.10美元的身份验证费。他们会把旧地址的邮件转寄到新地址，最多12个月。",
            keyPhrases: [
              { en: "change of address", zh: "地址变更" },
              { en: "forward your mail", zh: "转寄邮件" },
              { en: "identity verification", zh: "身份验证" },
            ],
            culturalNote: "在美国搬家后一定要办邮件转寄（mail forwarding），否则重要信件如银行账单、税务文件等可能丢失。在USPS网站几分钟就能办好。",
            alternativeExpressions: [
              { textEn: "Oh for sure — go to USPS.com and set up mail forwarding. Takes like two minutes. They'll redirect your mail for a year.", textZh: "一定要——去USPS.com设置邮件转寄。两分钟就搞定。帮你转寄一年的邮件。", actionHint: "搬家后第一时间办理", frequency: "common" },
              { textEn: "Definitely do that. It's super easy online — just a buck ten to verify your identity. All your old mail gets sent to the new place.", textZh: "一定要办。网上很简单——一块一毛验证身份。旧地址的邮件都会转到新地址。", actionHint: "别漏掉重要信件", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Super helpful! I'll do that right away. Thanks for walking me through everything.",
            textZh: "太有帮助了！我马上去办。谢谢你帮我理清一切。",
          },
          {
            speaker: "them",
            role: "电力公司客服",
            textEn: "You're welcome! Moving is a lot to handle, but you're off to a great start. Your electricity will be on shortly. If you have any issues, our support line is available 24/7. Welcome to the neighborhood!",
            textZh: "不客气！搬家要处理的事很多，但你开了个好头。电很快就会通了。如果有任何问题，我们的客服热线24小时在线。欢迎加入新社区！",
            keyPhrases: [
              { en: "off to a great start", zh: "开了个好头" },
              { en: "welcome to the neighborhood", zh: "欢迎加入新社区" },
            ],
            alternativeExpressions: [
              { textEn: "You're all set! Power should be on any minute. If anything goes wrong, we're here 24/7. Good luck with the move!", textZh: "都办好了！电马上就通了。有问题我们24小时在线。搬家顺利！", actionHint: "保存客服号码", frequency: "common" },
              { textEn: "Happy to help. Settling in can be hectic, but you've got the basics covered. Electricity's coming on shortly!", textZh: "很高兴能帮忙。安顿下来挺忙的，但基本的都搞定了。电马上就来了！", actionHint: "还有水和网要办", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 裁缝/改衣 ====================
  {
    id: "daily-life-tailor",
    category: "daily-life",
    titleZh: "裁缝/改衣",
    titleEn: "Tailor & Alterations",
    description: "找裁缝修改衣服，包括裤脚、腰围调整和试穿等",
    otherRole: "裁缝",
    otherRoleIcon: "✂️",
    flows: [
      // --- Flow 1: 改衣服 ---
      {
        id: "alterations",
        titleZh: "改衣服",
        titleEn: "Getting Alterations Done",
        description: "拿衣服去裁缝店修改裤脚、袖长和腰围",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just bought these pants but they're too long. Can you hem them for me?",
            textZh: "你好，我刚买了这条裤子但太长了。能帮我改裤脚吗？",
          },
          {
            speaker: "them",
            role: "裁缝",
            textEn: "Of course! Let me measure. Try them on first — the fitting room is right there. Wear the shoes you plan to wear with these pants so I can get the right length.",
            textZh: "当然！我来量。先试穿一下——试衣间就在那。穿你打算配这条裤子的鞋子，这样我能量到正确的长度。",
            keyPhrases: [
              { en: "hem", zh: "改裤脚/缝边" },
              { en: "measure", zh: "量" },
              { en: "fitting room", zh: "试衣间" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing! Go try them on — changing room's over there. And wear the shoes you'll pair them with.", textZh: "没问题！去试穿一下——更衣室在那边。穿上你搭配的鞋子。", actionHint: "穿对应的鞋子很重要", frequency: "common" },
              { textEn: "Absolutely. Step into the fitting room and put them on. Make sure you've got the right shoes on too.", textZh: "当然。进试衣间穿上。记得穿搭配的鞋子。", actionHint: "确保鞋子搭配正确", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "How's this length? I want them to just touch the top of my shoes with a slight break.",
            textZh: "这个长度怎么样？我想让裤脚刚好碰到鞋面，有一个小弧度。",
          },
          {
            speaker: "them",
            role: "裁缝",
            textEn: "A slight break — got it. That's a classic look. I'll pin it here... and here. Take a look in the mirror. Is that what you had in mind?",
            textZh: "小弧度——明白了。那是经典的长度。我在这里别针……这里也别一下。照照镜子看看。是你想要的样子吗？",
            keyPhrases: [
              { en: "slight break", zh: "小弧度（裤脚处）" },
              { en: "pin", zh: "别针固定" },
              { en: "take a look in the mirror", zh: "照照镜子" },
            ],
            culturalNote: "裤脚长度有几种说法：no break（不堆叠，裤脚刚好在鞋面上方）、slight break（轻微弧度）、full break（明显堆叠）。告诉裁缝你的偏好很重要。",
            alternativeExpressions: [
              { textEn: "Got it — just a little break. Let me pin it... Check the mirror. That look right to you?", textZh: "明白了——就要一点弧度。我别上针……照照镜子。满意吗？", actionHint: "仔细确认长度", frequency: "common" },
              { textEn: "Classic style, love it. I'll pin them here. Have a look and tell me if that's what you want.", textZh: "经典风格，很好。我在这里别上。看看是不是你想要的。", actionHint: "现在调整最方便", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That looks perfect. I also have a suit jacket — the sleeves are a bit too long. Can you shorten them?",
            textZh: "看起来完美。我还有一件西装外套——袖子有点长。能改短吗？",
          },
          {
            speaker: "them",
            role: "裁缝",
            textEn: "Let me see... Yes, I can take them up about an inch. The ideal length is for about half an inch of your shirt cuff to show below the jacket sleeve. That's $20 for the jacket sleeves and $12 for the pants hem. Sound good?",
            textZh: "让我看看……可以，我可以改短大约一英寸。理想的长度是衬衫袖口露出西装袖子下面大约半英寸。西装袖子改短20美元，裤脚12美元。可以吗？",
            keyPhrases: [
              { en: "take them up", zh: "改短" },
              { en: "shirt cuff", zh: "衬衫袖口" },
              { en: "jacket sleeve", zh: "西装袖子" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, I can shorten those about an inch. You want a bit of shirt cuff showing. That's $20 for the sleeves, $12 for the hem.", textZh: "可以，我能改短大约一英寸。要露出一点衬衫袖口。袖子20美元，裤脚12美元。", actionHint: "确认价格", frequency: "common" },
              { textEn: "Sure, those need to come up a touch. Sleeves are $20 to alter, pants hem is $12. Thirty-two bucks total.", textZh: "行，需要改短一点。袖子改20美元，裤脚12美元。一共三十二块。", actionHint: "问清楚总价", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds fair. When will they be ready?",
            textZh: "价格合理。什么时候能好？",
          },
          {
            speaker: "them",
            role: "裁缝",
            textEn: "Standard turnaround is 3 days — so you can pick them up Thursday. If you need them sooner, I can rush it for tomorrow but it's an extra $10. Which would you prefer?",
            textZh: "正常周期是3天——周四可以取。如果你急的话，我可以明天加急，但要加10美元。你选哪个？",
            keyPhrases: [
              { en: "turnaround", zh: "周期/完成时间" },
              { en: "rush", zh: "加急" },
              { en: "pick them up", zh: "取" },
            ],
            alternativeExpressions: [
              { textEn: "Usually takes about 3 days — Thursday pickup. Need it sooner? I can rush it for ten bucks extra.", textZh: "一般3天——周四来取。急的话加10美元可以加急。", actionHint: "评估是否需要加急", frequency: "common" },
              { textEn: "Come grab them Thursday — that's our standard turnaround. Or tomorrow if you're in a hurry, just $10 more.", textZh: "周四来拿——这是正常周期。赶时间的话明天也行，多10美元。", actionHint: "根据需要选择", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thursday is fine. Do I pay now or when I pick them up?",
            textZh: "周四可以。现在付还是取的时候付？",
          },
          {
            speaker: "them",
            role: "裁缝",
            textEn: "Either way is fine. Most people pay at pick-up. Here's your receipt with the pick-up date. If anything doesn't fit right when you try them on, bring them back and I'll adjust them for free.",
            textZh: "都可以。大多数人取的时候付。这是收据，上面有取件日期。如果试穿时哪里不合适，拿回来我免费调整。",
            keyPhrases: [
              { en: "receipt", zh: "收据" },
              { en: "adjust for free", zh: "免费调整" },
            ],
            alternativeExpressions: [
              { textEn: "Most people pay when they pick up. Here's your ticket. If something's off when you try them on, bring them back — no charge to fix it.", textZh: "大多数人取的时候付。这是你的取件单。试穿不合适就拿回来——免费改。", actionHint: "保留取件凭证", frequency: "common" },
              { textEn: "Pay now or later, up to you. Just keep this receipt. And if anything needs adjusting, it's on the house.", textZh: "现在付或以后付都行。收据留好。有任何需要调整的免费搞定。", actionHint: "试穿后不满意可以返工", frequency: "common" },
            ],
          },
        ],
      },

      // --- Flow 2: 定制或修补 ---
      {
        id: "custom-repair",
        titleZh: "修补与定制",
        titleEn: "Repairs & Custom Work",
        description: "修补破损的衣服或定制特殊尺寸的衣物",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I have a problem — I ripped the seam on my winter coat. It's my favorite coat and I really don't want to replace it. Can you fix it?",
            textZh: "我有个问题——我冬天的大衣缝线裂了。这是我最喜欢的大衣，真的不想换新的。能修吗？",
          },
          {
            speaker: "them",
            role: "裁缝",
            textEn: "Let me take a look... Ah, the seam has come apart along the back. The fabric itself is fine — it's just the stitching. This is an easy fix. I can re-sew it and reinforce it so it won't tear again. $18.",
            textZh: "让我看看……啊，后面的缝线开了。面料本身没问题——只是缝线。这个容易修。我可以重新缝好并加固，这样就不会再裂了。18美元。",
            keyPhrases: [
              { en: "ripped the seam", zh: "缝线裂了" },
              { en: "come apart", zh: "开了/裂了" },
              { en: "stitching", zh: "缝线" },
              { en: "reinforce", zh: "加固" },
            ],
            alternativeExpressions: [
              { textEn: "Oh, that's just the stitching — fabric's totally fine. I'll sew it back up and reinforce it. Eighteen bucks, easy fix.", textZh: "这只是缝线的问题——面料完好。我缝回去再加固。十八块，小事。", actionHint: "面料没坏就好修", frequency: "common" },
              { textEn: "Good news — it's just the seam, not the fabric. I can fix that and make it stronger so it doesn't happen again. $18.", textZh: "好消息——只是缝线裂了，面料没事。我修好加固，这样就不会再裂了。18美元。", actionHint: "加固很重要", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's great news! I also want to ask about something else — I need a dress shirt tailored for a wedding. I have unusual proportions — long arms but a short torso. Off-the-rack shirts never fit right.",
            textZh: "太好了！我还想问另一件事——我需要一件婚礼穿的衬衫量身定做。我身材比例比较特殊——胳膊长但上身短。成衣衬衫永远不合身。",
          },
          {
            speaker: "them",
            role: "裁缝",
            textEn: "I understand the struggle! We do custom shirts. I'll take about 15 measurements — neck, chest, waist, sleeve length, shoulder width, and more. You can choose the fabric, collar style, and cuff style. A custom dress shirt starts at $80 for basic cotton.",
            textZh: "我理解这种困扰！我们做定制衬衫。我会量大约15个尺寸——脖围、胸围、腰围、袖长、肩宽等等。你可以选面料、领型和袖口款式。定制衬衫基础棉布的从80美元起。",
            keyPhrases: [
              { en: "off-the-rack", zh: "成衣" },
              { en: "custom shirts", zh: "定制衬衫" },
              { en: "measurements", zh: "尺寸" },
              { en: "collar style", zh: "领型" },
              { en: "cuff style", zh: "袖口款式" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, off-the-rack never works for everyone. We do made-to-measure shirts — I'll take all your measurements. Starts at $80.", textZh: "是的，成衣不是每个人都合身。我们做量身定制——我会量全部尺寸。80美元起。", actionHint: "定制一次值得", frequency: "common" },
              { textEn: "I totally get it. Custom is the way to go. I'll measure you up — neck, chest, arms, everything. Basic cotton starts at eighty.", textZh: "完全理解。定制最好。我来量——脖围、胸围、胳膊，全部。基础棉80起。", actionHint: "选好面料和款式", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds reasonable. The wedding is in three weeks. Is that enough time?",
            textZh: "价格合理。婚礼在三周后。时间够吗？",
          },
          {
            speaker: "them",
            role: "裁缝",
            textEn: "Three weeks is perfect. The process is: measurements today, I'll have a first fitting ready in 10 days, you try it on, we make any tweaks, and the final product will be ready about 5 days after that. That gives us room to spare.",
            textZh: "三周完全没问题。流程是：今天量尺寸，10天后做好初版，你来试穿，我们做调整，之后大约5天出成品。还有时间余裕。",
            keyPhrases: [
              { en: "first fitting", zh: "初版试穿" },
              { en: "tweaks", zh: "微调" },
              { en: "final product", zh: "成品" },
              { en: "room to spare", zh: "时间余裕" },
            ],
            alternativeExpressions: [
              { textEn: "Three weeks is plenty. We'll do measurements now, first try-on in 10 days, tweak anything that's off, and you'll have it with time to spare.", textZh: "三周绰绰有余。现在量尺寸，10天后初版试穿，调整不合适的地方，还有时间富余。", actionHint: "按时来试穿很重要", frequency: "common" },
              { textEn: "That's enough time, no problem. I'll have a rough version in about 10 days, you come try it on, and we go from there.", textZh: "时间够，没问题。大约10天后做出初版，你来试穿，然后再调整。", actionHint: "预留试穿时间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Let's do it. Can I see the fabric samples?",
            textZh: "那就做吧。能看看面料样品吗？",
          },
          {
            speaker: "them",
            role: "裁缝",
            textEn: "Here are the samples. For a wedding, I'd recommend this Egyptian cotton — it's soft, breathable, and looks very elegant. We have it in white, ivory, and light blue. A classic spread collar would pair nicely with a suit and tie.",
            textZh: "这是样品。参加婚礼的话，我推荐这款埃及棉——柔软、透气，看起来非常优雅。有白色、象牙色和浅蓝色。经典的温莎领配西装和领带很好看。",
            keyPhrases: [
              { en: "fabric samples", zh: "面料样品" },
              { en: "Egyptian cotton", zh: "埃及棉" },
              { en: "breathable", zh: "透气的" },
              { en: "spread collar", zh: "温莎领/宽角领" },
            ],
            alternativeExpressions: [
              { textEn: "Check out these swatches. For a wedding, I'd go with this Egyptian cotton — super soft, breathes well. We've got white, ivory, and light blue.", textZh: "看看这些样品。参加婚礼的话，推荐这款埃及棉——特别柔软，透气好。有白色、象牙色和浅蓝色。", actionHint: "选适合场合的面料", frequency: "common" },
              { textEn: "Here are the options. This Egyptian cotton is perfect for a wedding — elegant and comfortable. A spread collar would look sharp with a suit.", textZh: "这些是可选的。埃及棉参加婚礼最合适——优雅又舒适。温莎领配西装很帅。", actionHint: "考虑搭配领带的效果", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "The light blue Egyptian cotton with a spread collar — perfect. Let's get measured!",
            textZh: "浅蓝色埃及棉配温莎领——完美。开始量吧！",
          },
          {
            speaker: "them",
            role: "裁缝",
            textEn: "Excellent choice. Stand straight with your arms relaxed by your sides... I'll have this done beautifully for you. You're going to look great at that wedding!",
            textZh: "很好的选择。站直，手臂自然放在身体两侧……我会做得很漂亮的。你参加婚礼的时候会非常帅！",
            keyPhrases: [
              { en: "stand straight", zh: "站直" },
              { en: "arms relaxed", zh: "手臂放松" },
            ],
            alternativeExpressions: [
              { textEn: "Great pick. Arms down, stand natural... You're gonna look sharp at that wedding. I'll have it ready in no time.", textZh: "选得好。手臂放下，自然站好……你参加婚礼会很帅的。很快做好。", actionHint: "放松站好便于量尺寸", frequency: "common" },
              { textEn: "Love that choice. Just stand straight and relax your shoulders. We're gonna make you look fantastic.", textZh: "这个选择很棒。站直放松肩膀。我们会让你看起来非常棒。", actionHint: "配合裁缝量尺寸", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 洗车 ====================
  {
    id: "daily-life-carwash",
    category: "daily-life",
    titleZh: "洗车店",
    titleEn: "Car Wash",
    description: "在洗车店选择服务类型、等候取车",
    otherRole: "洗车店员工",
    otherRoleIcon: "🚗",
    flows: [
      {
        id: "carwash-basic",
        titleZh: "基本洗车服务",
        titleEn: "Basic Car Wash Service",
        description: "选择洗车套餐、付款、等候取车",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "员工",
            textEn: "Welcome! What kind of wash would you like today?",
            textZh: "欢迎！今天想要什么洗车服务？",
            vocabNotes: { wash: { meaningInContext: "洗车服务" } },
            alternativeExpressions: [
              { textEn: "Hey there! What can we do for your ride today?", textZh: "嗨！今天您的车需要什么服务？", actionHint: "先了解选项", frequency: "common" },
              { textEn: "Welcome in! Looking for a wash today?", textZh: "欢迎！今天来洗车吗？", actionHint: "直接说需求", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "What options do you have?",
            textZh: "你们有哪些选项？",
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "We have basic exterior wash for $12, deluxe with interior vacuum for $25, and premium full detail for $50.",
            textZh: "基本外部清洗12美元，豪华版含内饰吸尘25美元，高级全面清洁50美元。",
            vocabNotes: {
              exterior: { meaningInContext: "车辆外部" },
              vacuum: { meaningInContext: "吸尘器清洁" },
              detail: { meaningInContext: "深度清洁（汽车美容术语）", similarUsage: "I got a full detail last month." },
            },
            alternativeExpressions: [
              { textEn: "We've got three tiers — basic, deluxe, and premium.", textZh: "我们有三档——基本、豪华和高级。", actionHint: "注意听价格和包含的服务", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with the deluxe, please.",
            textZh: "我选豪华版。",
            alternativeExpressions: [
              { textEn: "The $25 one sounds good.", textZh: "25美元那个就好。", actionHint: "直接说价格也可以", frequency: "common" },
            ],
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "Great choice. Any add-ons? We have tire shine and air freshener for $5 each.",
            textZh: "好选择。需要加项目吗？轮胎上光和空气清新剂各5美元。",
            vocabNotes: {
              "add-ons": { meaningInContext: "附加服务/额外选项" },
              "tire shine": { meaningInContext: "轮胎上光/亮光剂" },
            },
            alternativeExpressions: [
              { textEn: "Want to add anything? Tire shine or air freshener? Five bucks each.", textZh: "要加点什么吗？轮胎上光或空气清新剂？各五块钱。", actionHint: "根据需要决定", frequency: "common" },
              { textEn: "We've also got some extras — tire shine, air freshener. Five dollars a pop if you're interested.", textZh: "我们还有附加服务——轮胎上光、空气清新剂。有兴趣的话每个五美元。", actionHint: "可以礼貌拒绝", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "No thanks, just the wash is fine.",
            textZh: "不用了，洗车就够了。",
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "That'll be $25. Cash or card? It should be ready in about 20 minutes.",
            textZh: "25美元。现金还是刷卡？大约20分钟就好。",
            alternativeExpressions: [
              { textEn: "That's twenty-five. Cash or credit? Should be about 20 minutes.", textZh: "二十五块。现金还是信用卡？大约20分钟。", actionHint: "准备好支付方式", frequency: "common" },
              { textEn: "Twenty-five bucks total. How do you want to pay? It'll be ready in about 20.", textZh: "总共二十五刀。怎么付？大约20分钟好。", actionHint: "可以先准备好", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Card, please. Where should I wait?",
            textZh: "刷卡。我在哪里等？",
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "There's a waiting area with coffee right inside. We'll call your number when it's done.",
            textZh: "里面有等候区，有咖啡。好了我们会叫你的号。",
            culturalNote: "美国很多洗车店有等候区，提供免费咖啡或WiFi",
            alternativeExpressions: [
              { textEn: "Grab a seat inside — there's coffee and Wi-Fi. We'll holler when your car's ready.", textZh: "进去坐坐——有咖啡和Wi-Fi。车好了我们叫你。", actionHint: "可以利用等待时间", frequency: "common" },
              { textEn: "Just hang out in the waiting room. Help yourself to some coffee — we'll call you when it's done.", textZh: "在等候室坐会儿。随便喝点咖啡——好了叫你。", actionHint: "留意叫号", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 配钥匙/修锁 ====================
  {
    id: "daily-life-locksmith",
    category: "daily-life",
    titleZh: "配钥匙/修锁",
    titleEn: "Locksmith / Key Copy",
    description: "配钥匙、换锁、处理被锁在门外的情况",
    otherRole: "锁匠",
    otherRoleIcon: "🔑",
    flows: [
      {
        id: "key-copy",
        titleZh: "配钥匙",
        titleEn: "Key Duplication",
        description: "在五金店或配锁店配钥匙",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to get a copy of this key made.",
            textZh: "你好，我想配一把钥匙。",
            alternativeExpressions: [
              { textEn: "Can you duplicate this key for me?", textZh: "能帮我复制这把钥匙吗？", actionHint: "duplicate 是更正式的说法", frequency: "common" },
            ],
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Sure, let me take a look. Is this a standard house key or a high-security one?",
            textZh: "好的，让我看看。这是普通房门钥匙还是高安全性钥匙？",
            vocabNotes: {
              "high-security": { meaningInContext: "高安全性的（带专利锁芯，不能随便配）" },
            },
            alternativeExpressions: [
              { textEn: "Let me see that. Is it just a regular house key, or one of those fancy high-security ones?", textZh: "我看看。是普通房门钥匙，还是那种高安全性的？", actionHint: "高安全性钥匙配起来贵些", frequency: "common" },
              { textEn: "Sure, hand it over. Standard key or something special?", textZh: "好的，给我看看。普通钥匙还是特殊的？", actionHint: "说明钥匙类型", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's just a regular house key.",
            textZh: "就是普通的房门钥匙。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "No problem. That'll be $3 and takes about two minutes.",
            textZh: "没问题。3美元，大约两分钟。",
            culturalNote: "美国普通钥匙配一把通常2-5美元，Home Depot等五金店都能配",
            alternativeExpressions: [
              { textEn: "Easy. Three bucks, couple minutes. I'll have it done in no time.", textZh: "简单。三块钱，几分钟。马上就好。", actionHint: "价格很实惠", frequency: "common" },
              { textEn: "That's a simple one. $3 and about two minutes — quick and easy.", textZh: "这个简单。3美元，大约两分钟——又快又简单。", actionHint: "等一下就好", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's quick! Can I also get two copies?",
            textZh: "这么快！能配两把吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Of course. Two copies will be $6 total. Let me grind these for you.",
            textZh: "当然。两把一共6美元。我来给你磨。",
            vocabNotes: {
              grind: { meaningInContext: "磨制（配钥匙的切割打磨过程）" },
            },
            alternativeExpressions: [
              { textEn: "Two copies? No problem. That's $6 for both. Give me a sec to cut them.", textZh: "配两把？没问题。两把一共6美元。我切一下。", actionHint: "多配一把备用", frequency: "common" },
              { textEn: "Sure, two keys — six bucks total. I'll get them ground out for you real quick.", textZh: "行，两把——总共六块。我马上帮你磨好。", actionHint: "一般很快", frequency: "common" },
            ],
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Here you go. Try them in the lock before you leave to make sure they work.",
            textZh: "好了。走之前试试锁确认能用。",
            alternativeExpressions: [
              { textEn: "All done. Make sure to test them before you go — better safe than sorry.", textZh: "好了。走之前试一下——以防万一。", actionHint: "当场测试很重要", frequency: "common" },
              { textEn: "There you go — two copies. Give them a try in your lock before you head out.", textZh: "给你——两把。出门前在锁上试试。", actionHint: "确保能正常使用", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good idea, thank you!",
            textZh: "好主意，谢谢！",
          },
        ],
      },
    ],
  },

  // ==================== 加油站 ====================
  {
    id: "daily-life-gasstation",
    category: "daily-life",
    titleZh: "加油站",
    titleEn: "Gas Station",
    description: "在加油站自助加油、进店付款、问路",
    otherRole: "加油站收银员",
    otherRoleIcon: "⛽",
    flows: [
      {
        id: "gas-selfserve",
        titleZh: "自助加油",
        titleEn: "Self-Service Gas",
        description: "在自助加油站加油、进店付款",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I'd like to pay for gas at pump number 5.",
            textZh: "你好，我想给5号油泵付款。",
            vocabNotes: {
              pump: { meaningInContext: "加油泵/加油机", similarUsage: "Which pump are you at?" },
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Sure. How much would you like? Or do you want to fill it up?",
            textZh: "好的。加多少？还是加满？",
            vocabNotes: {
              "fill it up": { meaningInContext: "加满油箱" },
            },
            alternativeExpressions: [
              { textEn: "How many gallons?", textZh: "加几加仑？", actionHint: "美国用加仑，1加仑≈3.78升", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll put $40 on it, regular unleaded please.",
            textZh: "加40美元的，普通无铅汽油。",
            vocabNotes: {
              "regular unleaded": { meaningInContext: "普通无铅汽油（最常见的油品）" },
            },
            culturalNote: "美国汽油分 regular/mid-grade/premium 三档，大部分车用 regular 即可",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "$40 on pump 5, regular. Got it. Cash or card?",
            textZh: "5号泵，40美元，普通汽油。收到。现金还是刷卡？",
            alternativeExpressions: [
              { textEn: "Forty bucks, pump 5, regular. You got it. Paying cash or card?", textZh: "四十块，5号泵，普通汽油。好的。现金还是刷卡？", actionHint: "准备好付款", frequency: "common" },
              { textEn: "Pump 5, forty on regular. How are you paying?", textZh: "5号泵，普通汽油四十。怎么付？", actionHint: "提前准备好", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Cash, here's $40.",
            textZh: "现金，给你40美元。",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "You're all set. Go ahead and pump. If it stops before $40, come back for your change.",
            textZh: "好了。去加吧。如果没到40美元就加满了，回来找零。",
            vocabNotes: {
              "you're all set": { meaningInContext: "你可以了/手续办完了", similarUsage: "You're all set to go." },
              change: { meaningInContext: "找零/零钱" },
            },
            localVariants: {
              "en-US": "You're good to go.",
              "en-AU": "You're right to go, mate.",
            },
            alternativeExpressions: [
              { textEn: "Good to go. Pump away. If you don't hit forty, swing back in for the difference.", textZh: "可以了。去加吧。如果没到四十，回来拿找零。", actionHint: "记得取找零", frequency: "common" },
              { textEn: "You're set. Head on out and pump. Come back for change if it fills up before forty.", textZh: "好了。出去加吧。要是没到四十就满了，回来找零。", actionHint: "留意加油金额", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks! Oh, and which way to the highway from here?",
            textZh: "谢谢！对了，从这里怎么上高速？",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Take a left out of the station, go straight for about a mile, and you'll see the on-ramp on your right.",
            textZh: "出站左转，直走大约一英里，右边就能看到高速入口。",
            vocabNotes: {
              "on-ramp": { meaningInContext: "高速公路入口匝道" },
            },
            alternativeExpressions: [
              { textEn: "Hang a left out of here, straight for about a mile. On-ramp will be on your right — can't miss it.", textZh: "出去左转，直走大约一英里。入口在右边——很好找。", actionHint: "注意看路标", frequency: "common" },
              { textEn: "Go left out the driveway, keep going straight, and the highway entrance is about a mile up on the right.", textZh: "从出口左转，一直走，高速入口大约一英里后在右边。", actionHint: "可以用导航确认", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 签证延期 ====================
  {
    id: "daily-life-visa",
    category: "daily-life",
    titleZh: "签证延期 / 移民局",
    titleEn: "Visa Extension / Immigration Office",
    description: "签证即将到期，去移民局办理签证延期",
    otherRole: "移民局工作人员",
    otherRoleIcon: "building",
    journeyPhase: "daily",
    priority: "likely",
    flows: [
      {
        id: "apply-extension",
        titleZh: "申请延期",
        titleEn: "Applying for Extension",
        description: "到移民局咨询并提交签证延期申请",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, my tourist visa expires in two weeks. I'd like to apply for an extension.",
            textZh: "你好，我的旅游签证还有两周到期。我想申请延期。",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "OK. Do you have your passport, your current visa, and a completed I-539 form?",
            textZh: "好的。你有护照、当前签证和填好的I-539表格吗？",
            keyPhrases: [
              { en: "passport", zh: "护照" },
              { en: "visa", zh: "签证" },
              { en: "I-539 form", zh: "I-539表格（美国签证延期申请表）" },
            ],
            alternativeExpressions: [
              { textEn: "Alright. Got your passport and visa handy? And have you filled out the I-539?", textZh: "好的。护照和签证带了吗？I-539表填了吗？", actionHint: "提前准备材料", frequency: "common" },
              { textEn: "Sure, we can help with that. Do you have your passport, current visa, and a completed I-539 form?", textZh: "可以，我们能帮忙。你有护照、当前签证和填好的I-539表格吗？", actionHint: "三样材料都要", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have my passport and visa, but I haven't filled out the I-539 yet. Where can I get the form?",
            textZh: "护照和签证都有，但I-539还没填。在哪里能拿到表格？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "You can download it from the USCIS website, or we have blank copies at the front desk. You'll also need to submit proof of funds — a bank statement showing you can support yourself during the extended stay — and a letter explaining why you need more time.",
            textZh: "可以从USCIS网站下载，或者前台有空白表格。你还需要提交资金证明——银行对账单证明你在延长逗留期间有经济能力——还有一封说明你为什么需要更多时间的信。",
            keyPhrases: [
              { en: "USCIS", zh: "美国公民及移民服务局" },
              { en: "proof of funds", zh: "资金证明" },
              { en: "bank statement", zh: "银行对账单" },
              { en: "support yourself", zh: "自己负担生活费用" },
              { en: "extended stay", zh: "延长逗留" },
            ],
            alternativeExpressions: [
              { textEn: "Grab the form from USCIS.gov or pick one up at the front desk. You'll also need bank statements and a letter explaining why you need more time.", textZh: "从USCIS.gov下载或在前台拿一份。还需要银行对账单和一封说明为什么需要更多时间的信。", actionHint: "解释信要写清楚原因", frequency: "common" },
              { textEn: "You can get the form online or right here. Make sure you've got proof you can support yourself — bank statements — and a letter saying why you need the extension.", textZh: "表格可以网上下载或者在这里拿。确保有经济证明——银行对账单——还有一封说明延期原因的信。", actionHint: "银行流水要充足", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "How long does the extension process take? And can I stay in the country while waiting for the decision?",
            textZh: "延期审批需要多久？等审批结果期间可以继续待在国内吗？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Processing typically takes 3 to 6 months. As long as you filed before your visa expired, you're allowed to stay in the country while your application is pending. You won't be considered overstaying.",
            textZh: "审批通常需要3到6个月。只要你在签证过期前提交了申请，等待审批期间可以合法留在美国。不算逾期居留。",
            keyPhrases: [
              { en: "processing", zh: "审批/处理" },
              { en: "filed", zh: "提交（申请）" },
              { en: "pending", zh: "待审批" },
              { en: "overstaying", zh: "逾期居留" },
            ],
            culturalNote: "签证延期一定要在签证到期前提交申请，否则从到期日起就属于非法逗留，会影响未来的签证申请。",
            alternativeExpressions: [
              { textEn: "It takes about 3-6 months to process. As long as you file before your visa runs out, you can legally stay while waiting. You won't be overstaying.", textZh: "审批大概3-6个月。只要签证过期前提交，等待期间可以合法留下。不算逾期。", actionHint: "一定要在到期前提交", frequency: "common" },
              { textEn: "Processing is usually 3 to 6 months. The key thing is to file before expiration — then you're covered while it's pending.", textZh: "处理通常3到6个月。关键是在过期前提交——然后等待期间你是合法的。", actionHint: "及时提交最重要", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's good to know. What's the filing fee?",
            textZh: "了解了。申请费是多少？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "The filing fee is $370, plus an $85 biometric services fee. You can pay by check, money order, or credit card. Make sure to keep your receipt — you'll need it as proof that your extension is pending.",
            textZh: "申请费370美元，加85美元生物识别服务费。可以用支票、汇票或信用卡支付。收据保管好——需要用它证明你的延期正在审批中。",
            keyPhrases: [
              { en: "filing fee", zh: "申请费" },
              { en: "biometric services fee", zh: "生物识别服务费（指纹采集等）" },
              { en: "money order", zh: "汇票" },
              { en: "receipt", zh: "收据" },
            ],
          },
        ],
      },
      {
        id: "urgent-situation",
        titleZh: "紧急情况 — 签证已过期",
        titleEn: "Urgent — Visa Already Expired",
        description: "发现签证已经过期，寻求解决办法",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn: "I just realized my visa expired three days ago. I didn't notice until now. What should I do?",
            textZh: "我刚发现签证三天前就过期了。之前没注意到。我该怎么办？",
            alternativeExpressions: [
              { textEn: "It's $370 for the application plus $85 for biometrics. Keep your receipt — it's proof your case is in the system.", textZh: "申请费370美元加85美元生物识别费。收据留好——这是你的案件在系统里的证明。", actionHint: "收据非常重要", frequency: "common" },
              { textEn: "Total fees are $455 — filing plus biometrics. You can pay by card, check, or money order. Hold onto that receipt.", textZh: "总费用455美元——申请费加生物识别。可以刷卡、支票或汇票付。收据一定要留着。", actionHint: "保管好所有收据", frequency: "common" },
            ],
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "I understand — this happens sometimes. The important thing is you came in right away. You should still file the I-539 as soon as possible. The officer reviewing your case will consider that it was only a few days and that you acted in good faith. But I must be honest — approval is not guaranteed when you file after expiration.",
            textZh: "我理解——这种事有时会发生。重要的是你马上过来了。你应该尽快提交I-539。审查官会考虑只过了几天且你是善意行为。但说实话——过期后提交的不保证一定批准。",
            keyPhrases: [
              { en: "acted in good faith", zh: "善意行为/无恶意" },
              { en: "approval is not guaranteed", zh: "不保证批准" },
              { en: "reviewing your case", zh: "审查你的案件" },
            ],
            alternativeExpressions: [
              { textEn: "It happens. The good news is you caught it quick. File the I-539 ASAP — they'll see it was only a few days and you came in right away.", textZh: "有时候会这样。好在你发现得快。尽快提交I-539——他们会看到只过了几天而且你马上来了。", actionHint: "速度越快越好", frequency: "common" },
              { textEn: "Don't panic — you're only a few days over. File immediately and explain the situation. No guarantees, but they'll consider the circumstances.", textZh: "别慌——只过了几天。马上提交并说明情况。不能保证，但他们会考虑具体情况。", actionHint: "态度诚恳很重要", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Should I consult an immigration lawyer?",
            textZh: "我应该咨询移民律师吗？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "That's a good idea. A lawyer can help you write a strong explanation letter and make sure all your documents are in order. There are also legal aid organizations that offer free consultations. Would you like a list?",
            textZh: "这是个好主意。律师可以帮你写一份有力的解释信，确保所有文件齐全。也有法律援助机构提供免费咨询。需要一份名单吗？",
            keyPhrases: [
              { en: "immigration lawyer", zh: "移民律师" },
              { en: "explanation letter", zh: "解释信" },
              { en: "legal aid", zh: "法律援助" },
              { en: "free consultations", zh: "免费咨询" },
            ],
            alternativeExpressions: [
              { textEn: "Definitely talk to a lawyer. They can help you put together a solid case. There are also free legal clinics if cost is an issue.", textZh: "一定要找律师谈谈。他们能帮你准备有力的材料。如果费用是问题，也有免费的法律诊所。", actionHint: "专业帮助很重要", frequency: "common" },
              { textEn: "A lawyer would be a smart move. They know how to word the explanation letter. Want me to give you some referrals?", textZh: "找律师是明智之举。他们知道怎么写解释信。需要我给你推荐几个吗？", actionHint: "让律师帮忙写解释信", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. I want to handle this properly. Thank you for your help.",
            textZh: "好的，请给我。我想正规处理这件事。谢谢你的帮助。",
          },
        ],
      },
    ],
  },

  // ==================== SIM 卡办理 ====================
  {
    id: "daily-life-sim-card",
    category: "daily-life",
    titleZh: "SIM 卡 / 手机套餐",
    titleEn: "SIM Card / Phone Plan Activation",
    description: "在国外购买和激活手机SIM卡或开通手机套餐",
    otherRole: "手机店店员",
    otherRoleIcon: "phone",
    journeyPhase: "arrival",
    priority: "must",
    flows: [
      {
        id: "buy-sim",
        titleZh: "购买并激活SIM卡",
        titleEn: "Buying & Activating a SIM Card",
        description: "到手机店购买预付费SIM卡",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just arrived from China. I need a prepaid SIM card with data. What do you recommend?",
            textZh: "你好，我刚从中国来。需要一张带流量的预付费SIM卡。有什么推荐？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Welcome! For tourists, I'd recommend our 30-day plan. For $40, you get 10 GB of data, unlimited calls and texts within the US, and 200 minutes of international calls to China.",
            textZh: "欢迎！游客的话推荐我们的30天套餐。40美元，10GB流量，美国境内无限通话和短信，还有200分钟打中国的国际电话。",
            keyPhrases: [
              { en: "prepaid", zh: "预付费" },
              { en: "data", zh: "流量" },
              { en: "unlimited calls and texts", zh: "无限通话和短信" },
              { en: "international calls", zh: "国际电话" },
            ],
            alternativeExpressions: [
              { textEn: "For visitors, our 30-day plan is the most popular — $40 gets you 10 gigs, unlimited domestic calls, and 200 minutes to China.", textZh: "游客用得最多的是30天套餐——40美元，10G流量，国内通话无限，还有200分钟打中国。", actionHint: "对比不同套餐", frequency: "common" },
              { textEn: "I'd go with the $40 monthly plan. Ten gigs of data, free calls in the US, plus international minutes to call home.", textZh: "推荐40美元月套餐。十G流量，美国境内免费通话，还有打回家的国际分钟数。", actionHint: "看流量够不够用", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds good. Will my phone work with your SIM card? It's an iPhone from China.",
            textZh: "听起来不错。我的手机能用你们的SIM卡吗？是中国的iPhone。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "iPhones are usually unlocked when bought directly from Apple. Let me check... Yes, your phone is unlocked. I'll set up the SIM for you. Can I see your passport? We need it for registration.",
            textZh: "在Apple直接买的iPhone通常是解锁的。我看看……是的，你的手机是解锁的。我帮你装SIM卡。能看一下护照吗？注册需要。",
            keyPhrases: [
              { en: "unlocked", zh: "解锁的（不锁网的）" },
              { en: "registration", zh: "注册" },
            ],
            alternativeExpressions: [
              { textEn: "If it's from Apple directly, it's probably unlocked. Let me check... Yep, good to go. I'll just need to see your passport for registration.", textZh: "如果是直接从Apple买的，大概率是解锁的。我看看……是的，没问题。注册需要看一下护照。", actionHint: "准备好护照", frequency: "common" },
              { textEn: "iPhones are usually fine. Let me pop the SIM in and test it... Works great. Can I see your passport real quick?", textZh: "iPhone一般没问题。我插上SIM卡试试……好用。能看一下护照吗？", actionHint: "直接测试最保险", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's my passport. Can I keep my Chinese number active at the same time?",
            textZh: "这是我的护照。我能同时保留中国号码吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "If your iPhone supports dual SIM or eSIM, you can use both. Your Chinese number would use the eSIM, and our card goes in the physical SIM slot. Want me to help you set that up?",
            textZh: "如果你的iPhone支持双卡或eSIM，可以同时用。中国号码用eSIM，我们的卡放实体SIM卡槽。要我帮你设置吗？",
            keyPhrases: [
              { en: "dual SIM", zh: "双卡" },
              { en: "eSIM", zh: "电子SIM卡" },
              { en: "physical SIM slot", zh: "实体SIM卡槽" },
            ],
            culturalNote: "国行iPhone是双实体SIM卡槽，但港版和美版通常是一个实体SIM+一个eSIM。到了国外用当地SIM卡上网更便宜稳定。",
            alternativeExpressions: [
              { textEn: "If your iPhone does dual SIM, you can keep your Chinese number on eSIM and use our physical card. Want me to set it up?", textZh: "如果你的iPhone支持双卡，中国号码用eSIM，我们的卡用实体卡槽。要我帮你设置吗？", actionHint: "双卡两不耽误", frequency: "common" },
              { textEn: "Good news — you can use both numbers. Your China SIM goes on eSIM, ours in the card slot. I can help you configure it.", textZh: "好消息——两个号码都能用。中国SIM用eSIM，我们的放卡槽。我可以帮你配置。", actionHint: "让店员帮忙设置", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please! That would be great.",
            textZh: "好的，请帮我设置！太好了。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "All done! Your new number is on the receipt. Data is already active — you should see the signal bars. If you run out of data, you can top up online or come back to the store.",
            textZh: "设置好了！新号码在收据上。流量已经激活——你应该能看到信号了。流量用完了可以网上充值或回店里充。",
            keyPhrases: [
              { en: "signal bars", zh: "信号格" },
              { en: "run out of data", zh: "流量用完" },
              { en: "top up", zh: "充值" },
            ],
            alternativeExpressions: [
              { textEn: "You're all set! New number's on the receipt. If you burn through your data, just top up online or come back here.", textZh: "搞定了！新号码在收据上。流量用完了网上充值或回来都行。", actionHint: "保存好新号码", frequency: "common" },
              { textEn: "Done! You should see signal right away. Your number's here on the receipt. Need more data later? Just reload online.", textZh: "好了！应该马上就有信号了。号码在收据上。以后需要更多流量就网上充值。", actionHint: "记住充值方式", frequency: "common" },
            ],
          },
        ],
      },
      {
        id: "troubleshoot",
        titleZh: "SIM卡故障排除",
        titleEn: "SIM Card Troubleshooting",
        description: "SIM卡激活后无法正常使用",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I bought a SIM card here yesterday, but I can't get any data to work. Calls and texts are fine, but no internet.",
            textZh: "我昨天在这里买的SIM卡，但流量用不了。电话和短信没问题，就是没网。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Let me take a look. Have you tried turning cellular data on and off? Go to Settings, then Cellular.",
            textZh: "我看看。你试过开关蜂窝数据吗？进设置，然后蜂窝网络。",
            keyPhrases: [
              { en: "cellular data", zh: "蜂窝数据/移动数据" },
              { en: "settings", zh: "设置" },
            ],
            alternativeExpressions: [
              { textEn: "Hmm, let me take a look. Have you toggled cellular data off and on? It's under Settings > Cellular.", textZh: "嗯，我看看。你试过开关蜂窝数据吗？在设置 > 蜂窝网络里。", actionHint: "先试基本操作", frequency: "common" },
              { textEn: "OK, let's troubleshoot. First thing — go to Settings, Cellular, and make sure data is turned on for the right SIM.", textZh: "好，我们排查一下。首先——进设置、蜂窝网络，确认正确的SIM卡开了数据。", actionHint: "检查数据开关", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I've tried that. I also restarted the phone.",
            textZh: "试过了。也重启过手机了。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "OK, the issue might be the APN settings. Let me check... Ah, I see — the Access Point Name isn't configured for your new SIM. I'll set it up manually. Go to Settings, Cellular, Cellular Data Network... There. Try opening a website now.",
            textZh: "好的，可能是APN设置的问题。我看看……啊，找到了——新SIM卡的接入点名称没配置好。我手动设置一下。进设置、蜂窝网络、蜂窝数据网络……好了。现在试试打开网页。",
            keyPhrases: [
              { en: "APN settings", zh: "接入点名称设置" },
              { en: "Access Point Name", zh: "接入点名称" },
              { en: "configured", zh: "配置好的" },
              { en: "manually", zh: "手动" },
            ],
            alternativeExpressions: [
              { textEn: "Ah, found it — your APN isn't set up right. Let me fix that real quick... There, try loading a page now.", textZh: "啊，找到了——你的APN没设置对。我快速修一下……好了，现在试试打开网页。", actionHint: "APN是常见问题", frequency: "common" },
              { textEn: "It's the APN — the network settings aren't configured for our SIM. I'll punch them in manually. Should work now.", textZh: "是APN的问题——网络设置没配置成我们的SIM。我手动输入。现在应该好了。", actionHint: "以后换卡也可能遇到", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's working now! That was the problem. Thank you so much!",
            textZh: "好了！就是这个问题。太感谢了！",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "You're welcome! One more tip — if you're using WeChat or other Chinese apps, make sure to switch the data line to the new SIM in your dual SIM settings. Otherwise they might try to use your Chinese SIM's data, which would be very expensive roaming.",
            textZh: "不客气！再提醒一下——如果用微信等中国App，记得在双卡设置里把数据线路切换到新SIM卡。否则可能会用中国SIM卡的数据，漫游很贵的。",
            keyPhrases: [
              { en: "data line", zh: "数据线路" },
              { en: "dual SIM settings", zh: "双卡设置" },
              { en: "roaming", zh: "漫游" },
            ],
            alternativeExpressions: [
              { textEn: "One more thing — in your dual SIM settings, make sure the data line is set to the new card. Otherwise your apps might use the Chinese SIM and rack up roaming charges.", textZh: "再提醒一下——在双卡设置里确认数据用的是新卡。不然App可能会用中国SIM卡的数据，漫游费很贵。", actionHint: "检查数据线路设置", frequency: "common" },
              { textEn: "Pro tip: go into your SIM settings and switch the default data to the new card. You don't want WeChat eating up expensive roaming data.", textZh: "小建议：进SIM卡设置把默认数据切换到新卡。你不想微信用漫游流量吧，那可贵了。", actionHint: "避免高额漫游费", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 小费指南 ====================
  {
    id: "daily-life-tipping",
    category: "daily-life",
    titleZh: "小费文化与实操",
    titleEn: "Tipping Guide & Practice",
    description: "在美国等有小费文化的国家，理解何时给小费、给多少",
    otherRole: "服务员 / 当地朋友",
    otherRoleIcon: "dollar",
    journeyPhase: "daily",
    priority: "must",
    flows: [
      {
        id: "restaurant-tip",
        titleZh: "餐厅小费",
        titleEn: "Restaurant Tipping",
        description: "在餐厅吃饭后计算和支付小费",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "服务员",
            textEn: "Here's your check. Whenever you're ready — no rush.",
            textZh: "这是账单。不着急，准备好了叫我。",
            keyPhrases: [
              { en: "check", zh: "账单（餐厅常用，和 bill 同义）" },
              { en: "whenever you're ready", zh: "准备好了就行" },
            ],
            alternativeExpressions: [
              { textEn: "Here's your bill. No rush at all — take your time.", textZh: "这是账单。不着急——慢慢来。", actionHint: "仔细看账单再付", frequency: "common" },
              { textEn: "Your check is all set. Whenever you're good — no hurry.", textZh: "账单在这里。准备好了就行——不急。", actionHint: "注意核对金额", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks. I see the subtotal is $48. There's a line for 'tip' — how much should I write?",
            textZh: "谢谢。小计48美元。有一行写'tip'——我该写多少？",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "In the US, 18 to 20 percent is standard for sit-down restaurants. For $48, that's about $9 to $10. If the service was really great, you can go up to 25 percent. If it was just OK, 15 percent is the minimum.",
            textZh: "在美国，正式餐厅通常给18%到20%。48美元的话大约9到10美元。服务特别好可以给到25%。一般般的话15%是最低的。",
            keyPhrases: [
              { en: "percent", zh: "百分比" },
              { en: "sit-down restaurant", zh: "正式餐厅（有服务员点餐的）" },
              { en: "standard", zh: "标准/惯例" },
              { en: "minimum", zh: "最低" },
            ],
            culturalNote: "美国服务员底薪很低（有些州时薪仅$2.13），主要靠小费收入。不给小费被视为非常不礼貌的行为。",
            alternativeExpressions: [
              { textEn: "Usually you tip 18 to 20 percent at a sit-down place. On $48, that's like nine or ten bucks. Great service? Go higher.", textZh: "正式餐厅一般给18%到20%。48美元的话大约九到十块。服务很好的话可以多给。", actionHint: "快速算法：金额乘以0.2", frequency: "common" },
              { textEn: "Twenty percent is the sweet spot. Some people do 15 for OK service, 25 for amazing. Just don't skip it.", textZh: "20%是最佳数字。一般的服务给15%，特别好的给25%。别不给就行。", actionHint: "15%是底线", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll write $10. Do I add it to the total myself?",
            textZh: "我写10美元。需要自己算总数吗？",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Yes — write $10 on the tip line, then add it to the subtotal and write $58 on the total line. Sign at the bottom and you're done. Some places also show suggested tip amounts at the bottom of the receipt — like 18%, 20%, 22% — with the dollar amounts calculated for you.",
            textZh: "是的——在tip那行写$10，然后加到小计上，在total那行写$58。底下签名就好了。有些餐厅的收据下方会直接列出建议小费金额——比如18%、20%、22%——帮你算好了。",
            keyPhrases: [
              { en: "tip line", zh: "小费那行" },
              { en: "total line", zh: "总额那行" },
              { en: "sign", zh: "签名" },
              { en: "suggested tip amounts", zh: "建议小费金额" },
            ],
            alternativeExpressions: [
              { textEn: "Just write the tip amount, add it up, and put the total. Sign it and you're done. Easy.", textZh: "写上小费金额，加起来，填总数。签名就好了。简单。", actionHint: "记得签名", frequency: "common" },
              { textEn: "Write $10 on the tip line, $58 on the total. Some receipts even calculate it for you at the bottom.", textZh: "tip那行写10，total写58。有些收据底部会帮你算好。", actionHint: "看看有没有建议金额", frequency: "common" },
            ],
          },
        ],
      },
      {
        id: "other-tips",
        titleZh: "其他场合的小费",
        titleEn: "Tipping in Other Situations",
        description: "出租车、酒店、美发等其他需要小费的场合",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'm confused about when I should tip and when I shouldn't. Can you give me a quick overview?",
            textZh: "我搞不清什么时候该给小费什么时候不用。能简单说说吗？",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Sure! The main ones: restaurants 18-20%, food delivery 15-20%, taxi or rideshare 15-20%, hotel housekeeping $2-5 per night left on the pillow, hair salon 15-20%, and hotel bellhop $1-2 per bag.",
            textZh: "好的！主要有：餐厅18-20%，外卖15-20%，出租车或网约车15-20%，酒店客房清洁每晚$2-5放枕头上，理发店15-20%，酒店行李员每件行李$1-2。",
            keyPhrases: [
              { en: "food delivery", zh: "外卖" },
              { en: "housekeeping", zh: "客房清洁" },
              { en: "bellhop", zh: "行李员" },
              { en: "per bag", zh: "每件行李" },
            ],
            alternativeExpressions: [
              { textEn: "Restaurants 18-20%, delivery and rides 15-20%. Hotel housekeeping a few bucks a night. Hair salon 15-20%. And a buck or two per bag for the bellhop.", textZh: "餐厅18-20%，外卖和打车15-20%。酒店客房每晚几块钱。理发15-20%。行李员每件行李一两块。", actionHint: "记住主要场景就行", frequency: "common" },
              { textEn: "The big ones: 20% at restaurants, 15-20% for delivery and cabs, two to five bucks for housekeeping, and a dollar or two per bag at hotels.", textZh: "主要的：餐厅20%，外卖和出租车15-20%，客房清洁两到五块，酒店行李每件一两块。", actionHint: "按场景记忆", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "What about coffee shops? And do I tip at fast food places?",
            textZh: "咖啡店呢？快餐店要给吗？",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "At coffee shops, there's usually a tip jar or a screen that asks for a tip — $1 or 15-20% is common, but it's optional. Fast food places like McDonald's — no tip needed. Also, you don't tip at self-service buffets, grocery stores, or retail shops.",
            textZh: "咖啡店通常有小费罐或屏幕上会弹出来——给$1或15-20%很常见，但不强制。麦当劳这样的快餐店——不需要给。另外，自助餐、超市、零售店也不用给。",
            keyPhrases: [
              { en: "tip jar", zh: "小费罐" },
              { en: "optional", zh: "可选的/不强制" },
              { en: "self-service buffet", zh: "自助餐" },
            ],
            culturalNote: "近年来美国出现'tip fatigue'现象——很多原本不需要小费的场所（如快餐、外带咖啡）也开始用屏幕弹窗要小费。这种情况下给不给完全自愿。",
            alternativeExpressions: [
              { textEn: "Coffee shops usually have a tip jar or the screen asks — a buck is fine, but it's totally optional. Fast food? Nope, no tip needed.", textZh: "咖啡店一般有小费罐或屏幕弹窗——给一块就行，完全自愿。快餐？不用给。", actionHint: "屏幕弹窗可以按跳过", frequency: "common" },
              { textEn: "At a coffee shop, tipping is nice but not expected. A dollar or so. McDonald's, Subway — never. Grocery stores, retail — also no.", textZh: "咖啡店给小费不错但不是必须。一块左右就好。麦当劳、赛百味——不用。超市、零售店——也不用。", actionHint: "快餐和零售不用给", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "One more thing — if the service was really bad, can I skip the tip?",
            textZh: "还有一个问题——如果服务真的很差，可以不给吗？",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Technically yes, but it's still frowned upon. Even for bad service, most people leave at least 10%. If something went seriously wrong, speak to the manager instead. Oh, and check your bill — some restaurants add a mandatory gratuity of 18% for large groups of 6 or more. In that case, you don't need to tip extra.",
            textZh: "理论上可以，但会被看不起。即使服务差，大多数人也至少给10%。如果真的很过分，找经理说更好。对了，看看账单——有些餐厅6人以上大桌会自动加18%服务费。那就不用再额外给了。",
            keyPhrases: [
              { en: "frowned upon", zh: "被看不起/不被认可" },
              { en: "mandatory gratuity", zh: "强制服务费" },
              { en: "large groups", zh: "大桌/多人" },
            ],
            alternativeExpressions: [
              { textEn: "Technically you can skip it, but... don't. Even bad service gets at least 10%. And check your bill — big groups sometimes have the tip built in.", textZh: "理论上可以不给，但……最好别。再差的服务也至少给10%。另外看看账单——大桌有时候自动加了服务费。", actionHint: "实在不满意找经理", frequency: "common" },
              { textEn: "You can, but it's really frowned upon. Most people leave at least 10% even for terrible service. Oh, and some places auto-add 18% for parties of 6+.", textZh: "可以，但真的不好。大多数人即使服务很差也至少给10%。对了，有些地方6人以上自动加18%。", actionHint: "注意自动服务费", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 共享办公 / 联合办公 ====================
  {
    id: "daily-life-coworking",
    category: "daily-life",
    titleZh: "共享办公空间",
    titleEn: "Coworking Space",
    description: "在旅行中找共享办公空间远程办公",
    otherRole: "前台 / 会员管理",
    otherRoleIcon: "building",
    journeyPhase: "daily",
    priority: "likely",
    flows: [
      {
        id: "day-pass",
        titleZh: "购买日卡",
        titleEn: "Getting a Day Pass",
        description: "临时使用共享办公空间一天",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm a digital nomad passing through. Do you offer day passes?",
            textZh: "你好，我是数字游民，路过这里。你们有日卡吗？",
            vocabNotes: {
              "digital nomad": { meaningInContext: "边旅行边远程工作的人", similarUsage: "I work remotely while traveling." },
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Welcome! Yes, a day pass is $25. It includes a hot desk, Wi-Fi, free coffee and tea, and access to the common areas. If you need a private meeting room, that's $15 per hour extra.",
            textZh: "欢迎！日卡25美元。包含流动工位、Wi-Fi、免费咖啡茶水和公共区域使用。如果需要私人会议室，额外15美元一小时。",
            keyPhrases: [
              { en: "hot desk", zh: "流动工位（不固定座位）" },
              { en: "common areas", zh: "公共区域" },
              { en: "private meeting room", zh: "私人会议室" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah! Day pass is $25 — gets you a desk, Wi-Fi, and free coffee. Meeting rooms are extra if you need one.", textZh: "有的！日卡25美元——包含工位、Wi-Fi和免费咖啡。会议室需要额外付费。", actionHint: "问清楚包含什么", frequency: "common" },
              { textEn: "Absolutely. Twenty-five bucks for the day — hot desk, internet, all the coffee you want. Private rooms are $15 an hour on top.", textZh: "当然。一天二十五块——流动工位、网络、咖啡随便喝。私人房间额外每小时15。", actionHint: "评估是否需要会议室", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "A day pass is perfect. What's the Wi-Fi speed like? I need to do some video calls.",
            textZh: "日卡就好。网速怎么样？我需要开视频会议。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Our download speed is around 200 Mbps, which is more than enough for video calls. We also have phone booths for private calls — they're soundproof and free to use.",
            textZh: "下载速度大约200Mbps，开视频完全够用。我们还有电话亭可以私密通话——隔音的，免费使用。",
            keyPhrases: [
              { en: "phone booths", zh: "电话亭（隔音小隔间）" },
              { en: "soundproof", zh: "隔音的" },
            ],
            alternativeExpressions: [
              { textEn: "We've got 200 meg download — plenty for video calls. And there are phone booths if you need privacy. They're free.", textZh: "下载速度200兆——视频通话完全够用。需要私密空间还有电话亭，免费的。", actionHint: "适合远程办公", frequency: "common" },
              { textEn: "Internet's fast — 200 Mbps. You'll have no issues with Zoom. Plus we have soundproof booths for calls, no extra charge.", textZh: "网速很快——200Mbps。开Zoom没问题。还有隔音电话亭可以打电话，不额外收费。", actionHint: "电话亭先到先得", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, I'll take a day pass. Can I also use the printer?",
            textZh: "太好了，我要一张日卡。可以用打印机吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "The first 20 pages are free — black and white. Color printing is 25 cents per page. I'll give you the Wi-Fi password and a locker key. Help yourself to the kitchen area. We're open until 10 PM tonight.",
            textZh: "前20页免费——黑白的。彩打每页25美分。给你Wi-Fi密码和储物柜钥匙。厨房区域随便用。今晚营业到10点。",
            keyPhrases: [
              { en: "locker key", zh: "储物柜钥匙" },
              { en: "help yourself", zh: "随便用/自取" },
            ],
            alternativeExpressions: [
              { textEn: "First 20 pages of printing are on us. Here's the Wi-Fi password and a locker key. Kitchen's all yours. We close at 10.", textZh: "前20页打印免费。这是Wi-Fi密码和储物柜钥匙。厨房随便用。10点关门。", actionHint: "记住关门时间", frequency: "common" },
              { textEn: "Printing's included — 20 free pages. Wi-Fi and locker key are right here. Make yourself at home. Open till 10 PM.", textZh: "打印包含在内——20页免费。Wi-Fi和储物柜钥匙给你。随便用。营业到晚上10点。", actionHint: "利用好所有设施", frequency: "common" },
            ],
          },
        ],
      },
      {
        id: "weekly-membership",
        titleZh: "周卡与网络问题",
        titleEn: "Weekly Pass & Tech Issues",
        description: "办理周卡，遇到网络连接问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I've been using day passes for three days now. Do you have a weekly rate? It might be cheaper.",
            textZh: "我已经买了三天日卡了。有周卡吗？可能更划算。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Good thinking! A weekly pass is $99 — so it saves you $76 compared to buying seven day passes. It also includes 2 hours of meeting room time and priority seating.",
            textZh: "想得好！周卡99美元——比买7张日卡省76美元。还包含2小时会议室和优先选座。",
            keyPhrases: [
              { en: "weekly rate", zh: "周费率" },
              { en: "priority seating", zh: "优先选座" },
            ],
            alternativeExpressions: [
              { textEn: "Smart move! The weekly is $99 — way cheaper than buying day passes. Plus you get meeting room time and pick of the seats.", textZh: "聪明！周卡99美元——比买日卡便宜多了。还有会议室时间和优先选座。", actionHint: "算算哪个更划算", frequency: "common" },
              { textEn: "Yeah, the weekly pass is definitely the way to go. Ninety-nine bucks saves you a ton. Comes with some meeting room hours too.", textZh: "周卡绝对更划算。九十九块省不少。还包含一些会议室时间。", actionHint: "长期用更优惠", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll upgrade to a weekly pass. Oh, also — the Wi-Fi keeps dropping during my video calls. Is there a more stable connection?",
            textZh: "我换周卡。对了——视频通话时Wi-Fi老是断。有更稳定的网络吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Sorry about that — we've been having some issues on the 5GHz band. Try connecting to the network that ends in '-wired'. Also, the desks by the window have ethernet ports if you have an adapter. That'll give you the most stable connection.",
            textZh: "抱歉——5GHz频段最近有些问题。试试连接名字以'-wired'结尾的网络。另外窗边的桌子有网线接口，如果你有转接头的话。那是最稳定的。",
            keyPhrases: [
              { en: "5GHz band", zh: "5GHz频段" },
              { en: "ethernet ports", zh: "网线接口" },
              { en: "adapter", zh: "转接头" },
            ],
            alternativeExpressions: [
              { textEn: "Sorry about the Wi-Fi — we're having issues on the 5GHz network. Try the one ending in '-wired', or grab a window desk with an ethernet port for the best connection.", textZh: "Wi-Fi不好意思——5GHz有点问题。试试名字以'-wired'结尾的，或者坐窗边有网线口的桌子最稳定。", actionHint: "有线连接最可靠", frequency: "common" },
              { textEn: "The 5G band's been acting up. Switch to the '-wired' network, or if you've got a dongle, the window desks have ethernet — rock solid.", textZh: "5G频段最近不太稳定。切换到'-wired'网络，或者如果你有转接头，窗边桌子有网线口——非常稳定。", actionHint: "自备转接头更方便", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I do have a USB-C to ethernet adapter. I'll grab a window desk. Thanks for the tip!",
            textZh: "我有USB-C转网线的转接头。我去坐窗边。谢谢你的建议！",
          },
        ],
      },
    ],
  },
];
